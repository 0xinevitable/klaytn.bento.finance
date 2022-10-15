# Bento Dashboard for Klaytn Fi+

[![Cover](https://raw.githubusercontent.com/inevitable-changes/klaytn.bento.finance/main/public/assets/og-image.png)](https://dorahacks.io/buidl/3614)

[Frontend landing page for Bento's Klaytn Launch in **Klaymakers 2022**](https://dorahacks.io/buidl/3614)

## 🏛️ Licensing

<img align="right" src="http://opensource.org/trademarks/opensource/OSI-Approved-License-100x137.png">

- All our branding resources(such as trademarks, assets, and design) are copyright of Inevitable, all rights reserved. Other third-party assets and brand logos included in this repository are the copyright of their rightful owners.

- The project is licensed under the [Mozilla Public License Version 2.0](https://opensource.org/licenses/MPL-2.0). You must include this license and copyright notice if you use this work. This also means that you'll have to notify changes and open-source your work(the modified software) in the same license(or, in certain cases, one of the GNU licenses).

**Copyright (c) 2022 Inevitable**

## Team Information

Inevitable is an organization that shapes the future. We're a team of builders who made their brands, young talents who grow faster than anyone else, the best professionals in the field who experienced early startups to unicorns, and web3 protocols powering DeFi.

# Background

The team believes in the future of modular blockchain.
Instead of gathering everything in one chain, all apps and chains will distribute the functions they can do well to each other and do it where they can.

Builders who want short finality and high TPS can use Klaytn. Developers who wish to guarantee code safety will use Move to deploy on Sui and Aptos. And if you want to leverage shared security and IBC, you might deploy your own chain with the Cosmos SDK.

The choice is up for each application. The space will continue to expand as more and more apps/chains launch.

However, **data(assets, actions, and information) should move seamlessly and freely between them.** For instance, we cannot use one's wallet address to represent a "user." Users will spread their activity through multiple wallet addresses in various chains. We will gather information on the blockchain into one in the long run, starting with collecting these wallets and using them to define the true user identity.

# The Status Quo

All **dashboard services** out there are either:

- **Associated with specific Layer-1 chains built by the same team or shared VCs,** making them move timid outside their ecosystem.
- **Maintained as close source software; Development is centralized to the team.** Want your protocol listed? You have to depend on the team to add support

# Mission

- Make **every user track every asset they own,** regardless of chains and types
- Make **any builder add support** for their protocol/app freely
- Provide **social profiles(badges and _accounts_)** based on web3

For this, we'll be building consistent, building public.

# Features for the Hackathon

## Group all your cross-chain wallets

After receiving proof("signatures") that cryptographically proves the signer's ownership of each wallet, Bento registers new "users" and save wallets under that identity.

## List all of your tokens/NFTs

- Bento aggregates balance/price information for each token using various indexers and Tendermint RPCs. We sometimes query contracts/LP pools directly.

## Dashboard for DeFi Statistics (\*Supports Klaytn Fi+s Only)

- This feature is exclusively made for this Hackathon. We collected the most commonly used and easily integrated DeFi protocols on Klaytn by TVL(Total Value Locked). KLAYswap, KokonutSwap, Swapscanner, and KLAYSTATION.
- You can connect your Klaytn account, and Bento automatically fetches data from each staking pool and show the results, containing LP tokens unbonded, amount and valuation for each state(staking, unstaking, and rewarding)

- For this, we built and open-sourced [`klaytn-multicall`(click for GitHub link)](https://github.com/junhoyeo/klaytn-multicall), which is an client SDK for the Multicall contract that supports `caver-js` right out of the box. This is used for reducing node queries and receiving data from the same block to provide clear criteria.

- Currently, the data fetchers are written inside our serverless APIs in our monorepo(You can view them on GitHub), but we'll soon detach them into another repo called "adapters." Anyone can write an adapter, test it locally, and then make a PR to our repo to add support to Bento. DefiLlama used the same way to have 1.14k contributors to support 1955 DeFi protocols from over 145 other blockchains.

## Bento Badges

"We’re making the home of soulbound tokens—not bound to your wallet, but to your true identity"

# Future: as an identity chain

So we now have an abstraction layer of user identity. We have plans to decentralize the entire protocol as an application-specific blockchain(m based on the Cosmos SDK and Tendermint consensus; User identifiers as Accounts, wallet validation requests as Messages, and validation logic as Modules. Users will group accounts and activities into a single Bento account.

Third-party apps will be able to consume, relay, and commit data to the identity chain with all cross-chain identities and actions.

# Community

- **_🌎 [Telegram - Official Notice]: https://t.me/bentoinevitable_**
- **_💬 [Telegram - Community]: https://t.me/bentocommunity_**
- **_🌐 [Website]: https://bento.finance_**
- **_🎮 [Discord]: https://discord.gg/zXmRRBxYqD_**
- **_🛠 [GitHub]: https://github.com/inevitable-changes_**
