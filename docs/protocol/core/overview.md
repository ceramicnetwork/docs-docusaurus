# Ceramic Protocol

Ceramic is a decentralized event streaming protocol that enables developers to build decentralized databases, distributed compute pipelines, authenticated data feeds, and more. Ceramic nodes can subscribe to subsets of streams, forgoing the need of a global network state. This makes Ceramic an eventually consistent system (as opposed to strongly consistent like L1 blockchains), enabling web scale applications to be built reliably.

The protocol doesn't prescribe how to interpret events found within streams; this is left to the applications consuming the streams. One example of this type of application is [ComposeDB](../../composedb/getting-started).

There are two primary implementations of the Ceramic protocol, [js-ceramic](../js-ceramic/overview), and [rust-ceramic](../rust-ceramic/overview).

While `js-ceramic` is currently more mature, `rust-ceramic` is quickly developing into an efficient and flexible foundation for the Ceramic network that will carry it forward into new domains, improve reliability and resource usage, and allow Ceramic to scale to meet even more use cases.

Since `rust-ceramic` is still under heavy development, we recommend starting with `js-ceramic` when choosing a node implementation for your own infrastructure needs. When you're ready to make the switch, see our [migration guide](../rust-ceramic/guies/migration/from-js-ceramic.md) to import your data and get up and running with the next generation of scalable, decentralized data coordination.
