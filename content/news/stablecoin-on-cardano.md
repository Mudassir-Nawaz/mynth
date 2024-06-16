---
title: "MyUSD — Stablecoin on Cardano"
image: "mynth-stablecoin.jpg"
date: "May 12, 2024"
description: "MyUSD: a Keystone of Stability in Cardano’s DeFi Ecosystem"
---

Stablecoins are digital assets designed to offer stability in a market known for its volatility. They achieve this by pegging their value to a more stable asset, typically fiat currencies like the US dollar. This linkage helps maintain a consistent value, making stablecoins an appealing option for transactions, savings, and as a hedge against the price fluctuations common to cryptocurrencies like ADA. As the bridge between traditional finance and the burgeoning world of crypto, stablecoins play a critical role in facilitating trade, lending, and other financial operations within the digital asset ecosystem.

Mynth creates highways to interconnect networks, allowing users to seamlessly transfer native assets without barriers. Mynth offers a suite of tools to help you navigate the complex world of blockchains with ease, including MyUSD, a reliable and scalable stablecoin.

MyUSD is a stablecoin designed to provide a stable, scalable, and fully redeemable option within the Cardano ecosystem.

It is pegged to the US dollar, ensuring that its value remains consistent and non-volatile.

MyUSD serves as a foundational element in Mynth’s broader mission to create a seamless and integrated DeFi experience, ensuring users can easily transfer, exchange, and manage their digital assets across various blockchain platforms.

MyUSD is directly collateralized by USDT and USDC, two of the most established stablecoins, ensuring its stability and reliability. This allows MyUSD to maintain its peg to the US dollar by leveraging the proven stability of these assets across different networks, offering a secure and dependable option for Cardano users.

The asset flow of MyUSD is:

Users transfer USDC or USDT from their wallets directly into one of Mynth’s service providers, ensuring the collateral is secure.
A notification is sent to Cardano to mint new MyUSD tokens, then forwarding the newly issued stablecoin to the user’s wallet.

# Major Risks
There are three primary risks for stablecoin protocols like MyUSD:

Peg Stability: The challenge of maintaining MyUSD’s value closely aligned with the US Dollar, ensuring it remains as close to a 1:1 ratio as possible.
Liquidity: The ease with which users can convert MyUSD into US Dollars or equivalent stablecoins, ideally achieving a seamless 1:1 swap without significant delays or fees.
Solvency: Verifying that the value of the collateralizing stablecoins (USDT, USDC) is sufficient to support all MyUSD in circulation, guaranteeing a stable and secure backing for each unit of MyUSD.
1. Peg Stability
Peg stability for MyUSD is linked to liquidity and efficiency of its arbitrage mechanism. The stability hinges on the ability of arbitrageurs to swiftly capitalize on minor price differences between MyUSD and its underlying collateral. Historically, MyUSD has demonstrated a strong adherence to its $1 peg, with occasional, brief deviations due to fluctuations in ADA’s price or shifts in MyUSD’s supply and demand. These deviations are quickly addressed through arbitrage, which is facilitated by the system’s design for rapid response, typically resolving any volatility within minutes.

The process of minting MyUSD carries a $5 fee and can be completed in around 5 minutes, ensuring the peg remains tight to the actual value of the USD. This minimal cost and quick turnaround enable arbitrageurs to adjust large quantities of MyUSD efficiently, maintaining its price stability.

MyUSD’s system is inclusive, allowing any user to mint or redeem the stablecoin. This openness invites widespread participation in arbitrage, bolstering the stability of MyUSD by ensuring that its value remains consistently pegged to the USD, safeguarded against prolonged periods of devaluation.

2. Liquidity
Liquidity risk pertains to the scenario where, despite the protocol being solvent (meaning the reserves are adequate to cover all issued stablecoins), converting these assets into USD swiftly enough to meet the demands for minting or burning MyUSD becomes challenging. This typically occurs when there’s a mismatch in the duration of assets and liabilities, where liabilities (like the stablecoin) are redeemable at any time, but converting the backing assets into liquid funds may require more time.

MyUSD mitigates liquidity risk through its use of various highly liquid collateral sources and efficient settlement processes. By leveraging collateral from different networks, MyUSD ensures that users can quickly mint and redeem the stablecoin, maintaining its liquidity. This setup allows for the fast expansion of MyUSD’s supply to match rising demand or quick reduction if MyUSD becomes oversupplied, thanks to its connection to stablecoins that are widely accepted across numerous cryptocurrency exchanges. This approach effectively addresses potential liquidity challenges, ensuring MyUSD remains stable and responsive to market needs.

3. Solvency
Solvency fundamentally means that the protocol possesses sufficient assets to meet all its liabilities at the peg rate. For MyUSD, this entails the value of assets in USD equaling the total MyUSD in circulation. The near-instant reporting of blockchain events allows for continuous on-chain estimation of solvency risk.

The first risk involves the depegging of one of the underlying collateral types. Should this depegging be temporary, MyUSD remains safeguarded due to its redundancy; arbitrage can proceed with other types of collateral. However, a permanent depeg could potentially lead to MyUSD becoming insolvent. To counteract this, Mynth plans to introduce Mynth Stables Insurance. Until then, a reserve of 10M MNT tokens exists as a mitigation measure, ready to be sold to cover any shortfalls, albeit at the cost of MNT holder inflation.

The second risk is the collapse of one of the networks, akin to the risk of permanent depegging, rendering the collateral permanently inaccessible. Diversification across networks reduces this risk, with Mynth Stables Insurance and the MNT reserve providing further mitigation in the interim.

The third risk concerns the freezing of collateral wallets, which is lessened by distributing collateral across many wallets, diminishing the impact of any single wallet’s seizure by regulation or authority enforcement.

The fourth risk is the exploitation of the MyUSD minting smart contract, leading to an unlimited issuance of MyUSD. Mitigation strategies include comprehensive software audits, bug bounty programs, and the open sourcing of all relevant code.

The final risk is the potential mismanagement of funds in the shift from centralized to decentralized governance. With MyUSD not yet fully decentralized, there’s a risk that the core development team behind Mynth might engage in fraudulent activities. This risk is mitigated by the publication of team member identities, their established history and reputation in the industry, and their commitment to the finance decentralization ethos.

Why MyUSD Now?
Initially, MyUSD was a vision set for 2024. However, engaging with community members at the 2023 Cardano Dubai Summit brought new insights. The consensus was clear: the Cardano ecosystem couldn’t wait. Delaying the launch of a native stablecoin meant stalling our broader ambitions. Faced with this reality, we pivoted quickly. Although we seemed to emerge suddenly with MyUSD, the technology and groundwork were already in place through many months of development, allowing for an earlier launch than initially planned.

What Makes MyUSD So Stable?
MyUSD achieves stability through its guaranteed redeemability, ensuring users can always exchange it for $1 worth of value. Arbitrage mechanisms stabilize its price by correcting any market deviations from its pegged value. Integration with Mynth’s cross-chain swaps facilitate consistent demand and supply across blockchain networks. These factors combine to make MyUSD a dependable and reliable stablecoin for Cardano.

What Does This Mean for Other Stablecoins?
While we are leading with MyUSD, we are keenly aware of and excited for other stablecoins slated for release on Cardano. Our vision for MyUSD is not to overshadow but to complement these emerging options. The arrival of stablecoins like USDM and USDB will not only diversify the choices available to users but also enhance the resilience and robustness of the entire network. Additionally, Mynth is committed to integrating with these stablecoins, broadening our cross-chain swap capabilities and providing additional collateral options for MyUSD. This integration underscores our dedication to a collaborative and thriving Cardano ecosystem, where varied stablecoin solutions coexist and strengthen each other.

How Does Arbitrage Work?
MyUSD’s design incorporates full redeemability and an efficient arbitrage system, both of which are essential in maintaining its peg to the dollar. Full redeemability ensures that at any time, MyUSD can be exchanged for an alternative stable asset. This gives users confidence in the inherent value of MyUSD, as they know they can redeem it for a stable return, regardless of market fluctuations.

When the price of ADA shifts, it creates opportunities for arbitrageurs to balance the value of MyUSD. For example, if the market value of MyUSD falls below $1, it presents a buying opportunity for arbitrageurs. They can purchase MyUSD at this lower rate and redeem it for its full value. This buying pressure helps push the market price of MyUSD back towards its $1 peg.

Conversely, if MyUSD’s market value rises above $1, arbitrageurs can convert other stablecoins to MyUSD, increasing the supply of MyUSD in the market and thereby bringing its price back down to the $1 peg. This arbitrage process is a self-correcting mechanism that ensures MyUSD remains stable and closely pegged to the dollar, providing users with a reliable and predictable stablecoin option in the Cardano ecosystem.

The Mechanics of Streaming Swaps
MyUSD’s value is not correlated to ADA’s price. Although ADA is utilized in arbitrage opportunities on platforms like Minswap, it does not directly influence the value of MyUSD. In streaming swaps, ADA is utilized to purchase MyUSD on a DEX, with the ADA going to the DEX in exchange for MyUSD. Mynth breaks larger swaps into smaller ones, spreading them over time to reduce slippage and enhance efficiency.

How Does Proof of Funds Work for MyUSD?
The stability and trustworthiness of MyUSD are verifiable through blockchain explorers. The team is considering integrating oracles like Charli3 for added transparency, but the current system ensures stability and reliability through its design and functionality.

A Cornerstone for Stability for Cardano
As we unveil MyUSD, it’s more than just the launch of a new stablecoin; it’s a commitment to the stability and growth of the Cardano ecosystem. MyUSD is tailored to meet the specific needs of this community, providing a reliable and predictable currency option. Its unique blend of redeemability, arbitrage, and integration with cross-chain swaps positions it as a cornerstone of stability.

The introduction of MyUSD also sets the stage for a more diverse and resilient financial landscape within Cardano. By complementing other upcoming stablecoins, it fosters a collaborative environment where varied solutions drive collective strength. This is not just an advancement for Mynth but a significant step forward for the entire Cardano network.

We believe that MyUSD will play a pivotal role in enhancing the user experience, providing a stable medium of exchange, and facilitating efficient cross-ecosystem transactions. As we move forward, Mynth remains dedicated to innovation and collaboration, ensuring that MyUSD continues to evolve and contribute to the thriving ecosystem of Cardano.

The journey with MyUSD is just beginning, and we invite the Cardano community to join us in exploring the possibilities this stablecoin brings to the world of digital finance.

Why MyUSD? A Solution to Stability
The need for a robust stablecoin in the Cardano ecosystem has never been more pressing.

Stablecoins bring much-needed stability to the volatile crypto markets.
They allow users to park their assets without the fear of drastic value fluctuations.

Cardano, with its growing reputation for robust security, has been in dire need of a stablecoin that matches its ambitions.

Previous stablecoins in the ecosystem have struggled with maintaining their peg, leading to instability and uncertainty.

MyUSD is our answer to this challenge.

MyUSD-article-Graphic_01

A Catalyst for Liquidity
One of the core reasons behind the creation of MyUSD is to infuse liquidity into the Cardano ecosystem.

Liquidity is the lifeblood of any financial system, and the crypto world is no exception.

By providing a stable medium of exchange, MyUSD aims to attract more participants to the Cardano network. This influx of activity is not just beneficial for Mynth but for every participant in the Cardano community.

MyUSD-article-Graphic_02

Embracing Collaboration
As the Cardano ecosystem continues to grow and evolve, the horizon is bright with the prospect of several innovative stablecoins. We eagerly anticipate the arrival of Mehen’s USDM, Butane’s USDB, and the potential revitalization of iUSD by Indigo. It’s this continuous stream of innovation that propels the community forward. Each new entrant arrives with its own set of unique attributes and insights, significantly enriching and diversifying the ecosystem. Rather than viewing these developments as mere competition, we embrace them as opportunities for synergistic growth that benefits the entire community.

With the introduction of these new stablecoins, Mynth is poised to integrate them effortlessly into our system, enhancing our capacity for cross-chain swaps. Moreover, these stablecoins could serve as collateral for minting MyUSD on various blockchains, thus amplifying Cardano’s influence in the wider blockchain world. This strategy paves the way for extraordinary flexibility and stability, positioning MyUSD as a stablecoin that is not only resilient and scalable but also a cornerstone of Cardano’s expanding influence and utility.

MyUSD-article-Graphic_03

Full Redeemability Ensures Stability
Mynth introduces a robust mechanism to ensure stability of MyUSD, allowing users to leverage arbitrage and full redeemability. This ensures its value consistently remains at $1.

If MyUSD’s value falls below $1 on a Cardano DEX, users have the opportunity to buy it at a discount. They can then redeem it through Mynth for a full dollar, capitalizing on the price difference. This process naturally pushes the value of MyUSD back towards $1.

Conversely, if MyUSD’s value rises above $1, users can create more MyUSD at the fixed rate of $1 and sell it on a Cardano DEX at the higher market price. This selling pressure from minting and selling new MyUSD helps to bring its market value back down to $1.

This dual strategy of redemption and minting ensures that MyUSD remains a stable and reliable asset within the Cardano ecosystem. By allowing users to engage in arbitrage, MyUSD creates a self-correcting system that works to continuously align its market value with its peg, ensuring stability and trust in its value.

MyUSD-article-Graphic_04

Mynth’s Vision: Bridgeless Cross-Chain Swaps
The launch of MyUSD is pivotal for realizing Mynth’s full vision. In a landscape where interoperability is a necessity, our goal is to enable seamless swaps of Cardano native tokens for tokens on other blockchains. This also brings fresh liquidity into Cardano. With a stable gateway now open for business, Mynth can continue ahead on full throttle. MyUSD is designed to be the cornerstone of these cross-chain interactions, opening the door for new possibilities.

MyUSD-article-Graphic_05

Looking Ahead: MyUSD and the Evolution of Mynth
The introduction of MyUSD represents more than the launch of a new stablecoin. It unlocks the immense potential of the Mynth ecosystem. The vision for MyUSD goes beyond stabilization, aiming to energize and diversify the Cardano network. MyUSD is set to become a key player in the Cardano ecosystem, streamlining daily transactions and facilitating complex operations.

MyUSD will be fully integrated with Mynth’s babel fees, allowing users to pay transaction fees using MyUSD instead of ADA.

This integration provides added convenience for users and represents a significant step towards a more flexible, simple and user-friendly blockchain environment.

Summary
MyUSD represents a pivotal innovation within Cardano, designed to offer stability, liquidity, and solvency to protect against the volatile landscape of digital assets. It stands as a stablecoin pegged to the US dollar, directly collateralized by other established stablecoins, ensuring a reliable and secure option for Cardano users. MyUSD’s integration into Mynth’s suite of tools underscores a commitment to seamless, cross-blockchain transactions, fostering an environment where digital assets can be managed with unprecedented ease and security.

The introduction of MyUSD addresses critical challenges faced by stablecoins, including peg stability, liquidity, and solvency, through solutions like diverse collateral sources, efficient arbitrage mechanisms, and strategic risk mitigation measures. These initiatives not only ensure MyUSD’s stability but also reinforce the broader Cardano network’s decentralization and resilience.

Looking ahead, MyUSD is envisioned to become the stable mastercoin, a linchpin in connecting disparate blockchain networks and diversifying risk to safeguard users’ interests. This vision aligns with Mynth’s goal of creating a unified and interoperable DeFi ecosystem, where MyUSD plays a central role in enabling smooth, stable, and secure transactions across multiple platforms. By anchoring its value in widely accepted stablecoins and adopting a forward-thinking approach to risk management, MyUSD is poised to enhance the DeFi landscape, offering users a dependable stablecoin that connects the worlds of traditional finance and cryptocurrency.