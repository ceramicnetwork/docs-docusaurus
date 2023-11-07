# Concepts overview

Ceramic uses the [Decentralized Identifier (DID)](https://w3c.github.io/did-core/) standard for users accounts. DIDs require no central authority - users control their data and whom they share it with.

## DID Methods

We encourage using the `did:pkh` DID method which generates a persistent id from a wallet address’s public key hash. This enables one-click sign-on with your wallet to many apps on Ethereum, and soon on many other chains including Solana.

## DID Sessions

DID-Sessions is a library for providing a familiar, "web session"-like experience. Users no longer have to sign every single action they take within an app - during a timebound period of time they can authorize the app developer to act on their behalf. DID-Sessions outputs verifiable, serializable objects that store information about which DIDs authenticated them, what capabilities they are authorized with and for how long. 
