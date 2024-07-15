# Networking

Networking sub-protocols for Ceramic.

### Overview

Ceramic streams and nodes are grouped into independent networks. These networks can be either for public use or for use by a specific community. There are currently a few commonly shared and default networks. When a stream is published in a network, other nodes in the same network are able to query and discover the stream, receive the latest stream events (tips), and sync the entire event set for a stream. Each of the these network functions are defined by a sub protocol listed below.

### [Networks](networks.md)

Networks are collections of Ceramic [nodes](../nodes/overview.md) that share specific configurations and communicate over dedicated [libp2p](https://libp2p.io/) pubsub topics. They are easily identified by a path string, for example `/ceramic/mainnet` .

### [Data Feed API](data-feed-api.md)

The Ceramic Data Feed API gives developers a way to keep track of all the new state changes that are happening in the Ceramic network. This enables developers to customize the way their data is indexed and queried, and enables the development of new custom database products on top of Ceramic.
