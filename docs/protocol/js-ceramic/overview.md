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

