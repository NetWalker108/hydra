"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[9896],{1065:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2023-01","metadata":{"permalink":"/head-protocol/fr/monthly/2023-01","editUrl":"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-01-monthly.md","source":"@site/monthly/2023-01-monthly.md","title":"January 2023","description":"This report summarizes the work on Hydra since December 2022. It serves as","date":"2023-01-26T11:32:23.000Z","formattedDate":"26 janvier 2023","tags":[{"label":"monthly","permalink":"/head-protocol/fr/monthly/tags/monthly"}],"readingTime":5.845,"truncated":false,"authors":[{"name":"Sebastian Nagel","title":"Software Engineering Lead - Hydra @ IOG","url":"https://github.com/ch1bo","imageURL":"https://github.com/ch1bo.png","key":"ch1bo"}],"frontMatter":{"title":"January 2023","slug":"2023-01","authors":"ch1bo","tags":["monthly"]},"nextItem":{"title":"December 2022","permalink":"/head-protocol/fr/monthly/2022-12"}},"content":"This report summarizes the work on Hydra since December 2022. It serves as\\npreparation for the monthly review meeting, where the teams update major project\\nstakeholders on recent developments to gather their feedback on the proposed\\nplan forward.\\n\\n## Roadmap\\n\\nLooking at the [roadmap](https://github.com/orgs/input-output-hk/projects/21),\\nthere are just a few things to report this month:\\n\\n- Regroomed [Create updated specification for coordinated head protocol\\n  #448](https://github.com/input-output-hk/hydra/issues/448) to :yellow_heart:,\\n  as good progress was made on the specification\\n\\n- Marked [Align implementation with HeadV1 protocol specification\\n  #452](https://github.com/input-output-hk/hydra/issues/452) as :red_circle:, as\\n  the team experienced scope creep and has not progressed as fast as expected.\\n  + The plan is to break this initiative into smaller tasks to address and\\n    explain implementation challenges.\\n  \\n![](./img/2023-01-roadmap.png) <small><center> The latest roadmap with minor\\nchanges, which needs a reflection of the latest objectives. </center></small>\\n\\n## Development\\n\\n[Issues closed since last\\nreport](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2022-12-23..2023-01-24)\\n\\nThis month, the team worked on the following:\\n  \\n- **First write-up of Hydra spec online**. The team has been aggregating the\\n  latest definitions of on- and off-chain semantics into a new technical\\n  specification. The latest version can still be found [on\\n  Overleaf](https://www.overleaf.com/project/6389ba5edbcf7a51fda1328f), before\\n  its integration into the core Hydra repository. Should you have feedback,\\n  please send it our way through one of the [communication\\n  channels](https://github.com/input-output-hk/hydra/blob/master/SUPPORT.md).\\n\\n- **Closed more gaps in the Head Contract.** The team addressed two more gaps in\\n  the on-chain scripts based on discussions on the specification.\\n\\n  + All validators are authenticated now and ensure contract continuity by\\n    checking for the state tokens in the output (or getting burned).\\n\\n  + Abort now fully reimburses all committed UTXOs, even if two parties would\\n    have committed the exact same output (quite a theoretical attack vector).\\n\\n  This work is captured in\\n  [#452](https://github.com/input-output-hk/hydra/issues/452), but this work\\n  item is taking quite a bit longer than expected. Also, it\'s a single feature\\n  item, lacking some rationale on certain requirements, so we intend to break\\n  this down into smaller pieces over the next days and weeks.\\n\\n- **Mutation test framework improvements.** While closing gaps in the contracts,\\n  the team realized that some of the [mutation\\n  tests](https://hydra.family/head-protocol/haddock/hydra-node/tests/Hydra-Chain-Direct-Contract-Mutation.html)\\n  were correctly tripping validators and making transactions invalid, but not\\n  always for the right reason. In fact, some of the mutations were \u2018too harsh\u2019\\n  and made the even transaction not even pass phase-1 validation. The team\\n  addressed this by introducing a first (naiive) way to assert the right cause\\n  of the failure by checking strings in the validator log.\\n  [#679](https://github.com/input-output-hk/hydra/pulls/679)\\n\\n- **Add `headId` in API and TUI.** The team not only added the unique `headId`\\n  to the appropriate server outputs and the TUI\\n  [#678](https://github.com/input-output-hk/hydra/pull/678), but also added\\n  sequence numbers and timestamps to produced outputs\\n  [#618](https://github.com/input-output-hk/hydra/pull/618). This feature was\\n  asked for by users and simplifies identifying of heads and integration with\\n  the hydra-node.\\n\\n- **Hydra explorer experiment.** Some of the team used the holiday season to\\n  conduct some experiments on summarizing Hydra Heads observed on a network.\\n  This quick hack already demonstrates the value of a Hydra explorer as a tool\\n  to measure adoption by open heads on a given network. Naturally, it would\\n  reuse code from the hydra-node and challenge the architecture used in it for\\n  tracking multiple heads. Also, it will drive discussion about the versioning\\n  of hydra-plutus and the possibility to track multiple versions of the Hydra\\n  protocol on the chain (hashes/addresses change in each version).\\n  \\n![](./img/2023-01-explorer.png) <small><center> Hydra explorer first experiment\\nUI </center></small>\\n\\n## Community\\n\\n- **The Hydra for Voting project**, which got kicked off in December is picking\\n  up steam with deep dives into Catalyst voting and Hydra technology.\\n  Discussions are currently held in various settings and the team is continuing\\n  to develop a picture of what is achievable.\\n\\n- **Hydra for auctions lite paper**. IOG is collaborating with MLabs on\\n  exploring how Hydra can improve auction use cases. At this stage, the teams\\n  discussed multiple approaches on structuring the problem space with various\\n  Hydra topologies and specific trade-offs. The full case study was published\\n  [on Essential\\n  Cardano](https://www.essentialcardano.io/article/implementing-auction-projects-using-hydra).\\n  The teams plan to upstream the findings back into the [use case\\n  section](https://hydra.family/head-protocol/use-cases/nft-auction/) on the\\n  Hydra website from which this project originated.\\n  \\n## Themes for 2023\\n\\nAfter kicking off planning in a\\n[workshop](http://ncoding.at:3000/head-protocol/monthly/2022-11#cardano-summit--workshop)\\nand reflecting on [what Hydra achieved in\\n2023](https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/),\\nthe team has progressed in fleshing out relevant themes and objectives for this\\nyear to position Hydra as a sustainable open-source project in the age of\\nVoltaire:\\n\\n- **A mainnet mature application**\\n  + **Why?** The core contributors should be able to use the protocol on\\n    mainnet, so it should be maintainable and mature enough to lock some ada in\\n    a Hydra Head using a reference DApp (eg, hydraw). By creating and growing\\n    this DApp, the team will\\n    [dogfood](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) features\\n    and hence improve additional usability.\\n  + **How to measure?** Number of heads on mainnet > 0 and core contributors\\n    feel confident to lock at least 100\u20b3 in a Hydra Head on mainnet.\\n  + **Next steps:**\\n    - Publish Hydra Head V1 specification\\n    - Close gaps in implementation and release 0.9.0\\n    - Create a request for proposals (RFP) to audit the specification and its\\n      implementation\\n\\n- **Increase adoption**\\n  + **Why?** The team wants to showcase what is possible with Hydra through\\n    benchmarks and lighthouse projects, enabling use cases and reducing friction\\n    to use Hydra. Also, ensuring interoperability through open standards and\\n    reference implementations.\\n  + **How to measure?** Number of third-party created heads on any network > 0\\n  + **Next steps:**\\n    - Build a basic Hydra Head explorer to measure adoption\\n    - Benchmark off-chain performance (of a selected scenario)\\n    - Demonstrate Hydra for payments to potential users\\n    - Support Hydra for voting project\\n    - Hydra for auctions project exploring a delegated voucher auction\\n\\n- **Sustainable open-source-development**\\n  + **Why?** The team wants to scale Cardano in the long run. Hence this project\\n    should not be owned by a single entity, but by the community and the Cardano\\n    network itself. It is thus essential to make contributions to the project\\n    possible and ultimately it should be easy to become a contributor.\\n  + **How to measure?** Number of contributors on GitHub\\n  + **Next steps:**\\n    - Open up monthly reviews\\n    - Add tutorials to the website\\n    - Publish and maintain a use-case-centric roadmap and feature map\\n\\n## Conclusion\\n\\nThis monthly review was the first public one with not only stakeholders from IOG\\nand the CF, but also collaborators of the latest projects. This was the first\\nstep to a more open and transparent development process.\\n\\nThe teams showed some classic demos \u2013 like the \u2018hydraw\u2019 application which has\\nbeen running on the same Hydra Head for four weeks now \u2013 and some new\\ndevelopments on the Hydra explorer and minor improvements to hydra-node API and\\nTUI.\\n\\nIt was very interesting to bring various teams together to exchange ideas and\\nthoughts on the individual roadmaps for the new year. The teams also shared the\\nrelevant themes and objectives of the Hydra project for 2023 (as also listed\\nabove). They will now make sure to reflect these steps into this concrete\\n[roadmap](https://github.com/orgs/input-output-hk/projects/21) such that it will\\ncontain [marketable features](https://www.agilealliance.org/glossary/mmf/)\\nbringing us closer to these goals."},{"id":"2022-12","metadata":{"permalink":"/head-protocol/fr/monthly/2022-12","editUrl":"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2022-12-monthly.md","source":"@site/monthly/2022-12-monthly.md","title":"December 2022","description":"This report summarizes the work on Hydra since November 2022 and also serves as","date":"2023-01-09T08:43:30.000Z","formattedDate":"9 janvier 2023","tags":[{"label":"monthly","permalink":"/head-protocol/fr/monthly/tags/monthly"}],"readingTime":4,"truncated":false,"authors":[{"name":"Sebastian Nagel","title":"Software Engineering Lead - Hydra @ IOG","url":"https://github.com/ch1bo","imageURL":"https://github.com/ch1bo.png","key":"ch1bo"}],"frontMatter":{"title":"December 2022","slug":"2022-12","authors":"ch1bo","tags":["monthly"]},"prevItem":{"title":"January 2023","permalink":"/head-protocol/fr/monthly/2023-01"},"nextItem":{"title":"November 2022","permalink":"/head-protocol/fr/monthly/2022-11"}},"content":"This report summarizes the work on Hydra since November 2022 and also serves as\\na preparation & write-up of the monthly review meeting, in which we update major\\nstakeholders of the project on recent developments and gather their feedback on\\nour proposed plan forward each month.\\n\\n## Roadmap\\n\\nLooking at our [roadmap](https://github.com/orgs/input-output-hk/projects/21) we\\ncan report the following updates:\\n\\n#### Notable changes\\n\\n- Completed [Validate coordinated head protocol against formal model #194 ](https://github.com/input-output-hk/hydra/issues/194) \\n- Detailed a follow-up [Validate soundness with Model Based Testing #656](https://github.com/input-output-hk/hydra/issues/656)\\n- Focus on specification and gap-closing to support audit\\n- Scoped down 0.9.0 to be only about script updates and moved [Commit from external wallet #215](https://github.com/input-output-hk/hydra/issues/215) into next version\\n- Groomed [React to mainchain protocol changes #195](https://github.com/input-output-hk/hydra/issues/195)\\n- More users requesting [Support timed transactions #196](https://github.com/input-output-hk/hydra/issues/196)\\n  \\n![](./img/2022-12-roadmap.png)\\n<small><center>\\nLatest roadmap with drafted 0.10.0 version.\\n</center></small>\\n\\n## Development\\n\\n[Issues closed since last report](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2022-11-30..2022-12-31)\\n\\nThis month we have been working on:\\n\\n- **Fixed `AcquirePointTooOld` errors** by changing the way the internal wallet\\n  initializes its state\\n  [#621](https://github.com/input-output-hk/hydra/pull/621). See the PR\\n  description for details. This did not strictly happen this month, but we have\\n  not mentioned it last time. \\n\\n- **Closed first gap in Head Contract**: We collected gaps between specification\\n  and current implementation in\\n  [#452](https://github.com/input-output-hk/hydra/issues/452) and started now\\n  closing them. This first issue, was to prevent DoS / stalling of heads, by\\n  bounding the lower and upper transaction validity time of the `close`\\n  transaction. As always, time handling is hard and this required detailed\\n  discussion in the form of an ADR. See\\n  [ADR21](https://hydra.family/head-protocol/adr/21) for more details.\\n\\n- **Reduced cost of commits** by at least **30%** using reference scripts also\\n  in the `commit` transaction. We only used reference scripts in `abort` so far.\\n  This reduces the min ADA cost of `commit` because the transactions are roughly\\n  5.2KB smaller.\\n\\n  Before:\\n  ![](./img/2022-12-commit.png)\\n\\n  After:\\n  ![](./img/2022-12-commit-new.png)\\n  \\n- **Use nix flakes & build docker images using nix**: Triggered by a migration\\n  to Cicero for a nix-based CI, we started using nix flakes for `nix build` and\\n  `nix develop` instead of the legacy `nix-shell` in\\n  [#646](https://github.com/input-output-hk/hydra/pull/646). While we ended up\\n  sticking with Github Actions as the only CI and a Cachix cache, we extended\\n  this work to build our docker images more efficiently using `nix` in\\n  [#654](https://github.com/input-output-hk/hydra/pull/654).\\n\\n  Image sizes went down between 20-50%:\\n\\n  ![](./img/2022-12-docker-images.png)\\n  \\n  While docker CI builds on `master` went down to 1-10min (from 10-30m+)!\\n\\n## Hydra V1 Specification\\n\\nFinally, we bit the bullet and started a write-up of the specification. Over the\\nlast couple of months we had worked with marked up versions (see below) of the\\noriginal paper and a GDoc to discuss and review the protocol as it was\\nimplemented.\\n\\n\\n![](./img/2022-12-marked-up-paper.png)\\n  \\nAs we also updated the security properties and proofs, we started aggregating a\\nLaTeX document on overleaf. While it holds a similar background and\\npreliminaries as the original paper, it only specifies a single version of the\\nprotocol with no variants, less modularization, as well as explicit assumptions\\nand important notes for implementors.\\n  \\n![](./img/2022-12-spec-overleaf.png)\\n\\nWe aim to be publishing the spec as part of the main [hydra repository](https://github.com/input-output-hk/hydra) soon.\\n\\n## Community\\n\\n- **Hydra for Payments project** completed the first phase of this work stream\\n  by tagging version [0.1.0](https://github.com/obsidiansystems/hydra-pay/releases/tag/v0.1.0).\\n  This open source project conducted by Obsidian Systems and sponsored by IOG\\n  created a great starting point for developers to build services/APIs of\\n  payment channels using Hydra Head. This month we reviewed the improved\\n  documentation and are looking forward to see this work applied to eventually\\n  build fast & cheap payments for light-wallet users and power payment channel\\n  use cases from business-to-business (B2B) in the short-term.\\n\\n- **Hydra for Voting project** kicked off this joint project between IOG\\n  Research, Catalyst & Hydra Tribes, and the Cardano Foundation. The goal is to\\n  assess suitability of Hydra Head to support voting use cases by implementing\\n  parts of Catalyst voting system on Hydra Head and benchmark execution at\\n  scale. The kick-off meeting took place on December 15.\\n    \\n- **Blog post by CF**: To round off the year, Matthias wrote a nice\\n  [retrospective blog\\n  post](https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/)\\n  about Hydra at the CF. Besides summarizing our progress made in 2022 it also\\n  gives an outlook where Hydra is headed for in 2023.\\n\\n## Conclusion\\n\\nAlthough Hydra is in essence an open source project right now, we would love to\\nmake it \\"even more open source\\" in the coming months. Our vision of Hydra\\nrequires to have the builders of the Cardano ecosystem to be part of this\\njourney. For that matter, we want not only to open up these monthly reports, but\\nthe review meeting backing it as well!\\n\\nThis, besides our engagements with the community above, will allow the project\\nto grow beyond IOG & CF contributions. To become the true Cardano open source\\nproject we believe will be worthy to serve as the scalability component required\\nby the Cardano network."},{"id":"2022-11","metadata":{"permalink":"/head-protocol/fr/monthly/2022-11","editUrl":"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2022-11-monthly.md","source":"@site/monthly/2022-11-monthly.md","title":"November 2022","description":"Introduction","date":"2022-12-05T09:19:28.000Z","formattedDate":"5 d\xe9cembre 2022","tags":[{"label":"monthly","permalink":"/head-protocol/fr/monthly/tags/monthly"}],"readingTime":8.5,"truncated":false,"authors":[{"name":"Sebastian Nagel","title":"Software Engineering Lead - Hydra @ IOG","url":"https://github.com/ch1bo","imageURL":"https://github.com/ch1bo.png","key":"ch1bo"}],"frontMatter":{"title":"November 2022","slug":"2022-11","authors":"ch1bo","tags":["monthly"]},"prevItem":{"title":"December 2022","permalink":"/head-protocol/fr/monthly/2022-12"}},"content":"## Introduction\\n\\nThis report summarizes the activities of the Hydra team since October 2022 and also serves as a preparation & write-up of the monthly review meeting, in which we update major stakeholders of the project on recent developments and gather their feedback on our proposed plan forward each month.\\n\\n## Roadmap update\\n\\nLooking at our [roadmap](https://github.com/orgs/input-output-hk/projects/21) we can report the following releases and updates:\\n\\n#### Release `0.8.0`\\n\\n- Long overdue feature release adding persistence to the hydra-node\\n- Backup & restore the state of a Hydra Head [#187](https://github.com/input-output-hk/hydra/issues/187)\\n- Improve user experience following hydraw experiment [#518](https://github.com/input-output-hk/hydra/issues/518) from being only a discussion to a (to-be-groomed & planned) feature\\n- [Full release notes](https://github.com/input-output-hk/hydra/releases/tag/0.8.0)\\n\\n#### Release `0.8.1`\\n\\n- Follow-up release addressing user feedback on persistence from `0.8.0`\\n- Allow clients to see latest state after restart [#580](https://github.com/input-output-hk/hydra/issues/580)\\n- Bug fixes of following chain state [#599](https://github.com/input-output-hk/hydra/issues/599)\\n- [Full release notes](https://github.com/input-output-hk/hydra/releases/tag/0.8.1)\\n\\n#### Notable changes\\n\\n- Impact mapping from workshop (see below) and reviewing the starmap above had us discuss whether the scope for `1.0.0` is correct or not\\n- Need to be conscious of scope creep vs. getting something audited\\n- Focus on getting the spec done, `0.9.0` tagged and an audit under way now \u2192 minor re-ordering in priorities\\n- Iterative releases afterwards still - even while getting audited, non-contract changes first\\n- Promoted [https://github.com/input-output-hk/hydra/issues/635](https://github.com/input-output-hk/hydra/issues/635) from being only a discussion to a (to-be-groomed & planned) feature\\n\\n![](./img/2022-11-roadmap.png)\\n<small><center>\\nLatest roadmap with 0.8.0 and 0.8.1 already released and slight re-ordering on 0.9.0\\n\\n</center></small>\\n\\n## Development\\n\\nIssues closed since last report: [Issues - input-output-hk/hydra](https://github.com/input-output-hk/hydra/issues?page=1&q=is%3Aclosed+sort%3Aupdated-desc+closed%3A%3E%3D2022-10-19)\\n\\nBesides the things in the releases above (see roadmap update), we have\\nbeen working on:\\n\\n- **Flaky TUI CI tests:** We have sunk quite some time again in\\n  investigating cryptic CI failures in our TUI end-to-end tests. They\\n  have been crashing abruptly without any information and thus\\n  hard-to-debug. This investigation was unsuccessful and we realized\\n  at some point that the TUI tests are not that important anyways - we\\n  have API-level end-to-end tests. So we disabled these tests for now.\\n\\n- **Published** `hydra-cardano-api` **to CHaP:** With the Cardano\\n  Haskell Packages (CHaP) becoming available now and wanting to be a\\n  good citizen, we pushed for getting our flavor of the `cardano-api`\\n  also published there. This is non-trivial though, as we are at an\\n  integration point even \\"further up\\" than the `cardano-node`\\n  [#504](https://github.com/input-output-hk/hydra/issues/504)\\n\\n- **Implemented ADR18:** While the first stints on persistence already\\n  make it possible to restart `hydra-node` without needing to close a\\n  Head, we have implemented this in a nicer way now only keeping a\\n  single state (ground truth) for both L2 and L1 information\\n  [#541](https://github.com/input-output-hk/hydra/issues/541) of the Head protocol and the specification, we kept\\n  discovering bigger and bigger issues and hence realized the need for\\n  a discussion on transaction validity in context of closing /\\n  contesting Heads. [#615](#615)\\n\\n## Formal verification & specification\\n\\nAn important part of the project right now is the formalization and\\naudit preparation:\\n\\n- **Internal audit** has started with involvement of two persons from IOG IT\\n  team, each one addressing different part of Hydra:\\n\\n  - One auditor is working on the project as a whole, targeting\\n    potential vulnerabilities with the off-chain code, the\\n    infrastructure, dependencies, etc. This has not lead to any\\n    significant issue nor action plan so far.\\n  - Another auditor is specifically targeting the formal\\n    specification and the on-chain code to identify vulnerabilities\\n    in the protocol itself.\\n\\n- Discussions with researchers have led to the development of a joint Coordinated Hydra Head V1 specification defining formally the protocol as it is actually implemented.\\n\\n  - Work on this document has already allowed us to identify gaps\\n  - It is the basis on which BCryptic\'s analyst is working to audit Hydra protocol\\n  - It allows us to make explicit a lot of implicit assumptions that are in the code but not in the original paper and \\"Shape\\" the language used to describe the protocol\\n\\n- We have drafted an RFP for submission to **external** auditors\\n  [https://github.com/input-output-hk/hydra/blob/audit/rfp/security/RFP.md](https://github.com/input-output-hk/hydra/blob/audit/rfp/security/RFP.md) defining the scope and targets of the audit\\n\\n- We are still unsure about whether our **approach** is the right one as having a \\"formal specification\\" in a manually checked document spanning a dozen pages seems quite brittle.\\n\\n  - Some progress has been made on \\"formalizing\\" properties to be automatically \\"QuickChecked\\" using an executable model of the expected behavior of the system but this approach seems more suited for \\"team-internal consumption\\", e.g. building confidence within the core committers and contributors\\n\\n  - Ideally, we would want a proper formalization of the protocol, using an existing theorem proving/model checking framework, through which properties could be asserted. Quite a lot of work has already been done in blockchain space, including some work on Lightning and TLA+ or some other state-machine/temporal logic based language appear promising:\\n\\n    - [https://www.youtube.com/watch?v=wecVT_4QDcU](https://www.youtube.com/watch?v=wecVT_4QDcU)\\n    - [https://github.com/rberenguel/tla_lightning](https://github.com/rberenguel/tla_lightning)\\n    - [https://www.amazon.com/Practical-TLA-Planning-Driven-Development/dp/1484238281](https://www.amazon.com/Practical-TLA-Planning-Driven-Development/dp/1484238281)\\n\\n  - This effort should be done in accordance to the DApps certification process\\n\\n## Product\\n\\nMost updates on the product side of things have been addressed in the\\nstarmap update above.\\n\\n- **Hydra for Payments lighthouse project**: Latest demonstration\\n  shown by Obsidian Systems on how to use payment channels in a \\"light\\n  way\\" from a web frontend. The API evolved and we were able to use\\n  the `preview` testnet now. The project is progressing very nicely\\n  and we are optimistic to close it successfully soon with improved\\n  documentation and usability.\\n\\n- **NFT auctions lighthouse project:** After doing surveys and\\n  interviews, MLabs is currently concluding the discovery phase with a\\n  light / white paper on how NFT auctions could be implemented using\\n  Hydra (today or in the future with more features).\\n\\n- **Drafting Voting on Hydra project**: Work has started on building a\\n  Proof-of-concept for voting on Hydra targeting Catalyst\u2019s use case but with an eye towards building a generic solution suitable for large scale voting systems based on Hydra Head\\n\\n  This development should be undertaken jointly with the Cardano Foundation and SundaeSwap who are also interested in building such a system and recently demonstrated their capacity of doing voting via the Cardano Summit voting system.\\n\\n- **TxPipe demonstrated integration with demeter.run:** Without our\\n  help nor even knowing of this effort, TxPipe has recently shown an\\n  early prototype of `hydra-node`s instrumented via their\\n  [demeter.run](https://demeter.run) platform. This has come a bit as a surprise and is exactly why we love open source :heart: \u2192 [Video](https://www.loom.com/share/c811360e60084f18ab9e9f16cc941432)\\n\\n## Team & open source\\n\\nSome notable developments this month have been:\\n\\n- **Renamed the repository:** from **hydra-poc** to\\n  [**hydra**](https://github.com/input-output-hk/hydra)! This was revealed in the summit presentation (see below) and should indicate that the project is not only a Proof of Concept (POC) anymore, but has become more - as also demonstrated by the various early adopters and demos lately. :dragon_face:\\n\\n- **Inner source (IOG) contribution:** The education team has been working on a Hydra Tutorial and we have been involved in reviewing and trying it out. This is a great effort and will help people get started with Hydra. Thanks folks :green_heart:\\n\\n## Cardano Summit & workshop\\n\\nThis month there was also the Cardano Summit, this time organized by the\\nCardano Foundation and the content was even voted on by the community!\\nWe have been both, invited and nominated as panelist and speakers and\\nthis makes us extremely proud! In general, the reception of Hydra seems\\nto be very positive in the community from what we could experience first\\nhand on the summit.\\n\\nAgenda items we participated in:\\n\\n- [Best of blockchain, best of open source - Open Source panel ](https://summit.cardano.org/agenda-day-1/best-of-blockchain-best-of-open-source/) with IOG, CF & TxPipe\\n\\n- [Cardano Ballot Speaker Winner: Dev Team](https://summit.cardano.org/agenda-day-2/cardano-ballot-speaker-winner-presentation-6/) Introduction to Hydra and\\n  reveal of the repository rename \ud83c\udf89\\n\\nAfter attending the summit, we also used the fact that the whole team is\\nin one location for a team workshop. We booked a coworking space and\\nspent 3 days together. Not much coding & hacking this time, but we are\\nhappy to have produced these results:\\n\\n- **Timeline / year in review:** As we had new team members with us,\\n  the request was to give a recap of how the Hydra project evolved\\n  over the last two years. The whole timeline can bee seen below, and\\n  this also sparked the idea of creating a \\"Year in review\\" blog post,\\n  which is currently in preparation.\\n\\n- **Retrospective**: In-person workshops are the perfect place for\\n  doing retrospectives to reflect on what was good, bad and collecting\\n  ideas & actions in how to improve our work environment and\\n  processes.\\n\\n  ![](./img/2022-11-retro.png)\\n  <small><center>\\n  Retrospective board from 2022-11-22\\n  </center></small>\\n\\n- **Impact map:** Conscious about the fact that the project got defined about one year ago in a first project plan, and inspired by timeline and (short-term) ideas, we also set off to reflect on the **Why**, **How** and **What** of this project.\\n\\n  After reviewing the project vision, we reached for the tool of our choice to ideate on tangible objectives / deliverables - impact maps! Also, we felt the need to use a different goal this time. One that is reflecting more closely (or, in fact, broadly) what our current mission is. So instead of the **% of Cardano transactions are done on L2**, we set a new goal: being the **number one DApp on Cardano** (by all known metrics: TVL, traffic, volume etc..) Fundamentally, both goals illustrate the same idea, but the latter better supports the narrative that Hydra is also just a DApp (not a network upgrade) and needs usage & adoption to reach our vision.\\n\\n  Below you see the result of our session. We checked back to the old impact map after creating this one, and many things are still relevant / similar on the new sample (it\'s never complete!) - some of the deliverables we even achieved.\\n\\n  ![](./img/2022-11-impact.png)\\n  <small><center>\\n  Impact map with new goal\\n  </center></small>\\n\\n# Conclusion\\n\\nReflecting on our original plans (about a year ago) and our current roadmap we can say we are behind our anticipated schedule. However, recent developments on the lighthouse projects and community members contributing & using Hydra are convincing us that we are on the right track. The summit paints a similar picture and we feel reinvigorated by the great people we met, discussions we had and relationships we created & solidified on the summit and during our Hydra workshop."}]}')}}]);