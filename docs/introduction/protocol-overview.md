
# Ceramic Protocol

Ceramic is a decentralized event streaming protocol that enables developers to build decentralized databases, distributed compute pipelines, and authenticated data feeds, etc. Ceramic nodes can subscribe to subsets of streams forgoing the need of a global network state. This makes Ceramic an eventually consistent system (as opposed to strongly consistent like L1 blockchains), enabling web scale applications to be built reliably.


## Core Components

---

The Ceramic protocol consists of the following components:

- [**Streams →**](../protocol/core/streams/streams-index)
- [**Accounts →**](../protocol/core/accounts/accounts-index.md)
- [**Networking →**](../protocol/core/networking/networking-index.md)
- [**Ceramic JavaScript API →**](../protocol/js-ceramic/api.md)
- [**Ceramic Nodes →**](../protocol/js-ceramic/nodes/overview.md)


## Specification Status

---

| Section | State |
| --- | --- |
| [1. Streams](../protocol/core/streams/streams-index) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/core/streams/streams-index)** |
| [1.1. Event Log](../protocol/core/streams/event-log) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/streams/event-log)** |
| [1.2. URI Scheme](../protocol/core/streams/uri-scheme) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/streams/uri-scheme)** |
| [1.3. Consensus](../protocol/core/streams/consensus) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/core/streams/consensus)** |
| [1.4. Lifecycle](../protocol/core/streams/lifecycle) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/streams/lifecycle)** |
| [2. Accounts](../protocol/core/accounts/accounts-index) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/core/accounts/accounts-index)** |
| [2.1. Decentralized Identifiers](../protocol/core/accounts/decentralized-identifiers) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/core/accounts/decentralized-identifiers)** |
| [2.2. Authorizations](../protocol/core/accounts/authorizations) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/accounts/authorizations)** |
| [2.3. Object-Capabilities](../protocol/core/accounts/object-capabilities) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/core/accounts/object-capabilities)** |
| [3. Networking](../protocol/core/networking/networking-index) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/core/networking/networking-index)** |
| [3.1. Tip Gossip](../protocol/core/networking/tip-gossip) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/networking/tip-gossip)** |
| [3.2. Tip Queries](../protocol/core/networking/tip-queries) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/networking/tip-queries)** |
| [3.3. Event Fetching](../protocol/core/networking/event-fetching) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/networking/event-fetching)** |
| [3.4. Network Identifiers](../protocol/core/networking/networks) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/core/networking/networks)** |
| [4. API](../protocol/js-ceramic/api) | **[<span styles="color:rgba(212, 76, 71, 1)">Missing</span>](../protocol/js-ceramic/api)** |
| [5. Nodes](../protocol/js-ceramic/nodes/overview) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/nodes/overview)** |

#### **Legend**

| Spec state | Label |
| --- | --- |
| Unlikely to change in the foreseeable future. |  **<span styles="color:rgba(51, 126, 169, 1)">Stable</span>** |
| All content is correct. Important details are covered. | **<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>** |
| All content is correct. Details are being worked on. | **<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>** |
| Do not follow. Important things have changed. | **<span styles="color:rgba(217, 115, 13, 1)">Incorrect</span>** |
| No work has been done yet. | **<span styles="color:rgba(212, 76, 71, 1)">Missing</span>** |


