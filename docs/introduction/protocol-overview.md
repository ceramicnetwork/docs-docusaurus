
# Ceramic Protocol

Ceramic is a decentralized event streaming protocol that enables developers to build decentralized databases, distributed compute pipelines, and authenticated data feeds, etc. Ceramic nodes can subscribe to subsets of streams forgoing the need of a global network state. This makes Ceramic an eventually consistent system (as opposed to strongly consistent like L1 blockchains), enabling web scale applications to be built reliably.


## Core Components

---

The Ceramic protocol consists of the following components:

- [**Streams →**](../protocol/js-ceramic/streams/streams-index.md)
- [**Accounts →**](../protocol/js-ceramic/accounts/accounts-index.md)
- [**Networking →**](../protocol/js-ceramic/networking/networking-index.md)
- [**Ceramic API →**](../protocol/js-ceramic/api.md)
- [**Ceramic Nodes →**](../protocol/js-ceramic/nodes/overview.md)


## Specification Status

---

| Section | State |
| --- | --- |
| [1. Streams](../protocol/js-ceramic/streams/streams-index.md) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/streams/streams-index.md)** |
| [1.1. Event Log](../protocol/js-ceramic/streams/event-log.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/streams/event-log.md)** |
| [1.2. URI Scheme](../protocol/js-ceramic/streams/uri-scheme.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/streams/uri-scheme.md)** |
| [1.3. Consensus](../protocol/js-ceramic/streams/consensus.md) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/streams/consensus.md)** |
| [1.4. Lifecycle](../protocol/js-ceramic/streams/lifecycle.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/streams/lifecycle.md)** |
| [2. Accounts](../protocol/js-ceramic/accounts/accounts-index.md) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/accounts/accounts-index.md)** |
| [2.1. Decentralized Identifiers](../protocol/js-ceramic/accounts/decentralized-identifiers.md) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/accounts/decentralized-identifiers.md)** |
| [2.2. Authorizations](../protocol/js-ceramic/accounts/authorizations.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/accounts/authorizations.md)** |
| [2.3. Object-Capabilities](../protocol/js-ceramic/accounts/object-capabilities.md) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/accounts/object-capabilities.md)** |
| [3. Networking](../protocol/js-ceramic/networking/networking-index.md) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/networking/networking-index.md)** |
| [3.1. Tip Gossip](../protocol/js-ceramic/networking/tip-gossip.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/tip-gossip.md)** |
| [3.2. Tip Queries](../protocol/js-ceramic/networking/tip-queries.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/tip-queries.md)** |
| [3.3. Event Fetching](../protocol/js-ceramic/networking/event-fetching.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/event-fetching.md)** |
| [3.4. Network Identifiers](../protocol/js-ceramic/networking/networks.md) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/networks.md)** |
| [4. API](../protocol/js-ceramic/api.md) | **[<span styles="color:rgba(212, 76, 71, 1)">Missing</span>](../protocol/js-ceramic/api.md)** |
| [5. Nodes](../protocol/js-ceramic/nodes/overview.md) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/nodes/overview.md)** |

#### **Legend**

| Spec state | Label |
| --- | --- |
| Unlikely to change in the foreseeable future. |  **<span styles="color:rgba(51, 126, 169, 1)">Stable</span>** |
| All content is correct. Important details are covered. | **<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>** |
| All content is correct. Details are being worked on. | **<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>** |
| Do not follow. Important things have changed. | **<span styles="color:rgba(217, 115, 13, 1)">Incorrect</span>** |
| No work has been done yet. | **<span styles="color:rgba(212, 76, 71, 1)">Missing</span>** |


