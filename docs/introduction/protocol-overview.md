
# Ceramic Protocol

Ceramic is a decentralized event streaming protocol that enables developers to build decentralized databases, distributed compute pipelines, and authenticated data feeds. Ceramic nodes can subscribe to subsets of streams forgoing the need of a global network state. This makes Ceramic an eventually consistent system (as opposed to strongly consistent like L1 blockchains), enabling web scale applications to be built reliably.


## Core Components

---

The Ceramic protocol consists of the following components:

- [**Concepts →**](../protocol/ceramic-one/concepts) - Understand events, streams, interests, and the data pipeline
- [**Installation →**](../protocol/ceramic-one/usage/installation) - Get started with Ceramic One
- [**Producing Events →**](../protocol/ceramic-one/usage/produce) - Create and update streams
- [**Consuming Events →**](../protocol/ceramic-one/usage/consume) - Subscribe and read from streams
- [**Querying Data →**](../protocol/ceramic-one/usage/query) - Use Flight SQL to query the pipeline


## Self-Anchoring

---

Ceramic One supports self-anchoring to EVM blockchains, allowing you to run your own anchor service:

- [**Self-Anchoring Overview →**](../protocol/ceramic-one/anchoring/overview)
- [**EVM Configuration →**](../protocol/ceramic-one/anchoring/evm-configuration)


## Authentication

---

Ceramic uses Decentralized Identifiers (DIDs) for authentication:

- [**DIDs Introduction →**](../dids/introduction)
- [**Authorization →**](../dids/authorization)
- [**Managing Sessions →**](../dids/managing-sessions)
