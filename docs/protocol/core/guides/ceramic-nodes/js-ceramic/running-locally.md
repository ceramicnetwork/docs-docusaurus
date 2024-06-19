# Launch a local Ceramic node

---

The Ceramic command line interface provides an easy way to start a JS Ceramic node in a local Node.js environment. This is a great way to get started developing with Ceramic before moving to a cloud-hosted node for production use cases.

## Prerequisites

---

Installing the CLI requires a console, [Node.js](https://nodejs.org/en/) v16, and [npm](https://www.npmjs.com/get-npm) v6. Make sure to have these installed on your machine.

:::caution

    While npm v7 is not officially supported, you may still be able to get it to work. You will need to install the `node-pre-gyp` package globally. This is required until `node-webrtc` which IPFS depends on [is upgraded](https://github.com/node-webrtc/node-webrtc/pull/694).


    npm install -g node-pre-gyp

:::

## Installation and usage

---

### Install the Ceramic CLI

Open your console and install the CLI using npm:

```bash
npm install -g @ceramicnetwork/cli
```

### Launch the Ceramic node

Use the `ceramic daemon` command to start a local JS Ceramic node connected to the [Clay Testnet](../../../networking/networks.md#clay-testnet) at `https://localhost:7007`.

```bash
ceramic daemon
```

### **Configure your network**

(Optional) By default, the JS CLI starts a node on the [Clay Testnet](../../../networking/networks.md#clay-testnet). If you would like to use a different network, you can specify this using the `--network` option. View [available networks](../../../networking/networks.md). Note, the CLI can not be used with [Mainnet](../../../networking/networks.md#mainnet).

### **Configure a node URL**

(Optional) It is possible to use the CLI with a remote Ceramic node over HTTP, instead of a local node. To do this, use the `config set` command to set the `ceramicHost` variable to the URL of the node you wish to use.

```bash
ceramic config set ceramicHost 'https://yourceramicnode.com'
```
