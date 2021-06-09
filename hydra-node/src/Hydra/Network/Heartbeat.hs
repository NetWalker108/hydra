{-# LANGUAGE TypeApplications #-}

-- | A naive implementation of an application-level Heartbeat
-- This module exposes a /Component/ `withHeartbeat` than can be used to
-- wrap another `Network` /component/ and piggy-back on it to send and propagate
-- `HeartbeatMessage`s.
--
-- Its current behavior is very simple: When it starts, it sends a `Heartbeat` message
-- with its own identifier every 500ms, until the wrapped component sends another message.
-- `Heartbeat` messages received from other components are simply propagated to the
-- wrapped component.
module Hydra.Network.Heartbeat where

import Cardano.Binary (FromCBOR (..), ToCBOR (..))
import Cardano.Prelude hiding (atomically, threadDelay, withAsync)
import Control.Monad (fail)
import Control.Monad.Class.MonadAsync (MonadAsync, withAsync)
import Control.Monad.Class.MonadSTM (MonadSTM, TVar, atomically, newTVarIO, readTVar, writeTVar)
import Control.Monad.Class.MonadTimer (MonadDelay, threadDelay)
import Hydra.HeadLogic (HydraMessage (..))
import Hydra.Ledger (Party)
import Hydra.Network (HydraNetwork (..), NetworkComponent)

-- TODO: This type is not really necessary, remove it.
data HeartbeatMessage tx
  = HydraMessage (HydraMessage tx)
  | Heartbeat Party
  deriving (Eq, Show)

instance ToCBOR tx => ToCBOR (HeartbeatMessage tx) where
  toCBOR = \case
    HydraMessage msg -> toCBOR (0 :: Word8) <> toCBOR msg
    Heartbeat party -> toCBOR (1 :: Word8) <> toCBOR party

instance FromCBOR tx => FromCBOR (HeartbeatMessage tx) where
  fromCBOR =
    fromCBOR @Word8 >>= \case
      0 -> HydraMessage <$> fromCBOR
      1 -> Heartbeat <$> fromCBOR
      tag -> fail $ show tag <> " is not a proper CBOR-encoded HydraMessage"

data HeartbeatState
  = SendHeartbeat
  | StopHeartbeat
  deriving (Eq)

-- | Wrap a `NetworkComponent` and handle sending/receiving of heartbeats.
withHeartbeat ::
  MonadAsync m =>
  MonadDelay m =>
  Party ->
  NetworkComponent m (HeartbeatMessage tx) ->
  NetworkComponent m (HydraMessage tx)
withHeartbeat me withNetwork callback action = do
  heartbeat <- newTVarIO SendHeartbeat
  withNetwork (callback . peelHeartbeat) $ \network ->
    withAsync (sendHeartbeatFor me heartbeat network) $ \_ ->
      action (checkMessages network heartbeat)

checkMessages ::
  MonadSTM m =>
  HydraNetwork m (HeartbeatMessage tx) ->
  TVar m HeartbeatState ->
  HydraNetwork m (HydraMessage tx)
checkMessages HydraNetwork{broadcast} heartbeatState =
  HydraNetwork $ \msg -> do
    case msg of
      Ping _ -> pure ()
      _ -> atomically (writeTVar heartbeatState StopHeartbeat)
    broadcast (HydraMessage msg)

sendHeartbeatFor ::
  MonadDelay m =>
  MonadSTM m =>
  Party ->
  TVar m HeartbeatState ->
  HydraNetwork m (HeartbeatMessage tx) ->
  m ()
sendHeartbeatFor me heartbeatState HydraNetwork{broadcast} =
  forever $ do
    threadDelay 0.5
    st <- atomically $ readTVar heartbeatState
    when (st == SendHeartbeat) $ broadcast (Heartbeat me)

peelHeartbeat :: HeartbeatMessage tx -> HydraMessage tx
peelHeartbeat (HydraMessage htx) = htx
peelHeartbeat (Heartbeat n) = Ping n
