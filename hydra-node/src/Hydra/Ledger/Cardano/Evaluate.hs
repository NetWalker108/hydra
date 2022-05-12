{-# LANGUAGE TypeApplications #-}

-- | Simplified interface to phase-2 validation of transaction, eg. evaluation of Plutus scripts.
--
-- The `evaluateTx` function simplifies the call to underlying Plutus providing execution report
-- using pre-canned `PParams`. This should only be used for /testing/ or /benchmarking/ purpose
-- as the real evaluation parameters are set when the Hydra node starts.
--
-- __NOTE__: The reason this module is here instead of part of `test/` directory is to be used
-- in @tx-cost@ executable.
module Hydra.Ledger.Cardano.Evaluate where

import Hydra.Prelude hiding (label)

import Cardano.Ledger.Alonzo.Language (Language (PlutusV1, PlutusV2))
import Cardano.Ledger.Alonzo.Scripts (CostModel, CostModels (CostModels), ExUnits (..), Prices (..))
import Cardano.Ledger.Alonzo.Tools (BasicFailure, ScriptFailure, evaluateTransactionExecutionUnits)
import Cardano.Ledger.Alonzo.TxWitness (RdmrPtr)
import Cardano.Ledger.Babbage.PParams (PParams, PParams' (..))
import Cardano.Ledger.BaseTypes (ProtVer (..), boundRational)
import Cardano.Slotting.EpochInfo (EpochInfo, fixedEpochInfo)
import Cardano.Slotting.Slot (EpochSize (EpochSize))
import Cardano.Slotting.Time (SystemStart (SystemStart), mkSlotLength)
import Data.Array (Array, array)
import Data.Bits (shift)
import Data.Default (def)
import Data.Fixed (E2, Fixed)
import qualified Data.Map as Map
import Data.Maybe (fromJust)
import Data.Ratio ((%))
import Data.Time.Clock.POSIX (posixSecondsToUTCTime)
import Hydra.Cardano.Api (Era, ExecutionUnits, StandardCrypto, Tx, UTxO, fromLedgerExUnits, toLedgerExUnits, toLedgerTx, toLedgerUTxO)
import Test.Cardano.Ledger.Alonzo.PlutusScripts (testingCostModelV1, testingCostModelV2)

type RedeemerReport =
  (Map RdmrPtr (Either (ScriptFailure StandardCrypto) ExUnits))

evaluateTx ::
  Tx ->
  UTxO ->
  Either (BasicFailure StandardCrypto) RedeemerReport
evaluateTx = evaluateTx' (fromLedgerExUnits $ _maxTxExUnits pparams)

evaluateTx' ::
  -- | Max tx execution units.
  ExecutionUnits ->
  Tx ->
  UTxO ->
  Either (BasicFailure StandardCrypto) RedeemerReport
evaluateTx' maxTxExUnits tx utxo =
  runIdentity $
    evaluateTransactionExecutionUnits
      pparams{_maxTxExUnits = toLedgerExUnits maxTxExUnits}
      (toLedgerTx tx)
      (toLedgerUTxO utxo)
      epochInfo
      systemStart
      costModels

-- | Cost models used in 'evaluateTx'.
costModels :: Array Language CostModel
costModels =
  array
    (PlutusV1, PlutusV2)
    [ (PlutusV1, testingCostModelV1)
    , (PlutusV2, testingCostModelV2)
    ]

-- | Current mainchain cost parameters.
pparams :: PParams Era
pparams =
  def
    { _costmdls =
        CostModels $
          Map.fromList
            [ (PlutusV1, testingCostModelV1)
            , (PlutusV2, testingCostModelV2)
            ]
    , _maxValSize = 1000000000
    , _maxTxExUnits = ExUnits 14_000_000 10_000_000_000
    , _maxBlockExUnits = ExUnits 56_000_000 40_000_000_000
    , _protocolVersion = ProtVer 6 0
    , _maxTxSize = 1 `shift` 14 -- 16kB
    , _prices =
        Prices
          { prMem = fromJust $ boundRational $ 721 % 10000000
          , prSteps = fromJust $ boundRational $ 577 % 10000
          }
    }

-- | Max transaction size of the current 'pparams'.
maxTxSize :: Natural
maxTxSize = _maxTxSize pparams

-- | Max memory and cpu units of the current 'pparams'.
maxMem, maxCpu :: Fixed E2
ExUnits (fromIntegral @_ @(Fixed E2) -> maxMem) (fromIntegral @_ @(Fixed E2) -> maxCpu) =
  _maxTxExUnits pparams

epochInfo :: Monad m => EpochInfo m
epochInfo = fixedEpochInfo (EpochSize 100) (mkSlotLength 1)

systemStart :: SystemStart
systemStart = SystemStart $ posixSecondsToUTCTime 0
