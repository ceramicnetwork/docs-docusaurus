# Ceramic Protocol

Ceramic is a decentralized event streaming protocol that enables developers to build decentralized databases, distributed compute pipelines, and authenticated data feeds, etc. Ceramic nodes can subscribe to subsets of streams forgoing the need of a global network state. This makes Ceramic an eventually consistent system (as opposed to strongly consistent like L1 blockchains), enabling web scale applications to be built reliably.


The latest release of Ceramic has introduced a new Rust-based implementation of Ceramic protocol which offers performance and stability improvements as well as a new data synchronisation protocol called Recon. Developers, building on Ceramic network will be using two main components:
- `js-ceramic` component which provides the API interface for Ceramic applications
- `ceramic-one` component which provides Ceramic data network access (contains the implementation of Recon protocol).

 <div style={{textAlign: 'center'}}>
![protocol-overview](/img/protocol.png)
</div>


The protocol doesn't prescribe how to interpret events found within streams; this is left to the applications consuming the streams. Some examples of this type of application are:
- [OrbisDB](https://useorbis.com/)
- [ComposeDB](../../composedb/getting-started)





## Specification Status

---

| Section | State |
| --- | --- |
| [1. Streams](../protocol/js-ceramic/streams/streams-index) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/streams/streams-index)** |
| [1.1. Event Log](../protocol/js-ceramic/streams/event-log) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/streams/event-log)** |
| [1.2. URI Scheme](../protocol/js-ceramic/streams/uri-scheme) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/streams/uri-scheme)** |
| [1.3. Consensus](../protocol/js-ceramic/streams/consensus) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/streams/consensus)** |
| [1.4. Lifecycle](../protocol/js-ceramic/streams/lifecycle) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/streams/lifecycle)** |
| [2. Accounts](../protocol/js-ceramic/accounts/accounts-index) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/accounts/accounts-index)** |
| [2.1. Decentralized Identifiers](../protocol/js-ceramic/accounts/decentralized-identifiers) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/accounts/decentralized-identifiers)** |
| [2.2. Authorizations](../protocol/js-ceramic/accounts/authorizations) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/accounts/authorizations)** |
| [2.3. Object-Capabilities](../protocol/js-ceramic/accounts/object-capabilities) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/accounts/object-capabilities)** |
| [3. Networking](../protocol/js-ceramic/networking/networking-index) | **[<span styles="color:rgba(203, 145, 47, 1)">Draft/WIP</span>](../protocol/js-ceramic/networking/networking-index)** |
| [3.1. Tip Gossip](../protocol/js-ceramic/networking/tip-gossip) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/tip-gossip)** |
| [3.2. Tip Queries](../protocol/js-ceramic/networking/tip-queries) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/tip-queries)** |
| [3.3. Event Fetching](../protocol/js-ceramic/networking/event-fetching) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/event-fetching)** |
| [3.4. Network Identifiers](../protocol/js-ceramic/networking/networks) | **[<span styles="color:rgba(68, 131, 97, 1)">Reliable</span>](../protocol/js-ceramic/networking/networks)** |
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


