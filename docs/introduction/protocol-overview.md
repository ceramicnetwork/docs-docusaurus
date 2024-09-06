
# Ceramic Protocol

Ceramic's event streaming protocol is a highly-scalable decentralized data infrastructure used for building all kinds of interoperable Web3 services and protocols, such as decentralized databases, distributed compute pipelines, and authenticated data feeds, etc. 

Ceramic nodes can subscribe to subsets of streams forgoing the need of a global network state. This makes Ceramic an eventually consistent system (as opposed to strongly consistent like L1 blockchains), enabling web scale applications to be built reliably.

<p align="center">
    <img src="/img/ceramic-overview.png" alt="Introduction" width="500"/>
</p>

## Core Components

---

The Ceramic protocol consists of the following core components if playing an important role in the functionality and the decentralization of the network:

- [**Streams →**](../protocol/js-ceramic/streams/streams-index)
- [**Accounts →**](../protocol/js-ceramic/accounts/accounts-index.md)
- [**Networking →**](../protocol/js-ceramic/networking/networking-index.md)
- [**Ceramic API →**](../protocol/js-ceramic/api.md)
- [**Ceramic Nodes →**](../protocol/js-ceramic/nodes/overview.md)


## Ceramic Nodes

---
Developers, building on Ceramic have to run a Ceramic node to provide data storage, compute, and bandwidth for their Ceramic application. Today there are no tokenized incentives for running a Ceramic node, but by running a node you can ensure the data for your app remains available while helping contribute to the network's decentralization. There are a few different ways of how you can run a Ceramic node:

- [**Run Ceramic in the cloud**](../protocol/js-ceramic/guides/ceramic-nodes/running-cloud)

- [**Run Ceramic locally**](../protocol/js-ceramic/guides/ceramic-nodes/running-locally)

- [**Use one of the managed node solutions built by the Ceramic community**](https://hirenodes.io/)


## Database products built on ceramic
---
Ceramic enables a number of database products that process and index data in various ways. Today, developers can already interact with the following existing solutions and build new ones:

- [**OrbisDB**](./orbisdb-overview.md) - a database built on Ceramic that allows you to easily interact with the data stored on Ceramic using a simple and familiar SQL-based interface.

- [**ComposeDB**](./composedb-overview.md) - a composable grapqh database built on Ceramic.

