# Nodes Overview
---

## Ceramic Nodes

A Ceramic node is a bundle of services and long-lived processes that support the protocol and provide access to the Ceramic Network. Current implementations bundle and run most all of the following services and sub protocols defined here. This includes the following:


### **Ceramic Services**

| Service | Description |
| --- | --- |
| StateStore | Tracks and stores the latest tips for pinned streams and caches stream state.  |
| Networking | Runs the stream query and update protocols on Gossipsub and manages peer connections.  |
| API | Provides HTTP API service for connected Ceramic clients to read, write and query streams. Additionally, some node management functions are included.  |
| Timestamping | Regularly publishes timestamp proofs and Ceramic time events for a given set of events.  |

:::note

    In the future, node implementations may only provide a subset of services to the network. For example, nodes may be optimized to provide only indexing, long term storage, client APIs etc.
:::

## Timestamp Nodes

---

Timestamping nodes support a small but important subset of the Ceramic protocol. Timestamping is entirely described by [CAIP-168 IPLD Timestamp Proof](https://chainagnostic.org/CAIPs/caip-168) and Ceramic Time Events.  Timestamp services aggregate events from streams to be timestamped, construct Merkle proofs, publish transactions and publish timestamp events to the Ceramic Network. Ceramic mainnet currently supports `f(bytes32)`  timestamp transaction types on Ethereum mainnet. This transaction type is entirely described by the [`eip155` namespace](https://github.com/ChainAgnostic/namespaces/blob/main/eip155/caip168.md) for CAIP-168. 

## Implementations

---

The following table includes active node implementations:

| Node | Name | Language | Description | Status | Maintainer |
| --- | --- | --- | --- | --- | --- |
| Ceramic | [js-ceramic](https://github.com/ceramicnetwork/js-ceramic/) | JavaScript | Complete Ceramic implementation. Runs all Ceramic core services, and connects to an IPFS node for all IPFS, libp2p, IPLD services needed. | Production | 3Box Labs |
| Timestamp | [ceramic-anchor-service](https://github.com/ceramicnetwork/ceramic-anchor-service) | JavaScript | Complete timestamp services. Supports f(bytes32) and raw transaction types for EVM (EIP-155) blockchains.  | Production | 3Box Labs |

Longterm Ceramic is targeting multiple implementations of the protocol to support general resilience, robustness and security. Want to work on a node implementation in a new language like Rust or Go? Get in touch on the Forum!