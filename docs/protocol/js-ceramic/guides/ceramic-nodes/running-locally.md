# Launch a local Ceramic node

---

To run a local Ceramic node you will generally need to run two key components:
- `js-ceramic` - an api interface for Ceramic applications
- `ceramic-one` - a binary that provides a Ceramic data network access through the protocol implementation in Rust.

You should always start with running the `ceramic-one` component first to make sure that the `js-ceramic` component can connect to it.

## Prerequisites

---

Installing the `js-ceramic` requires the following:
- a terminal of your choice, 
- [Node.js](https://nodejs.org/en/) v20, 
- [npm](https://www.npmjs.com/get-npm) v10

Make sure to have these installed on your machine.


## Setting up the `ceramic-one` component

The easiest way to install the `ceramic-one` is using [Homebrew](https://brew.sh/) package manager. After installing Homebrew on your local machine, you can install `ceramic-one` using the following command:

```bash
brew install ceramicnetwork/tap/ceramic-one
```

Once installed, run the ceramic-one binary by running the command provided below. Not that using the flag `--network` you can modify the network:

```bash
ceramic-one daemon --network testnet-clay 
```

:::note
There are many flags for the daemon CLI that can be passed directly or set as environment variables. You can pass the `-h` flag to see the complete list as follows:

```ceramic-one daemon -h```
:::

You also have an option of running the `ceramic-one` binary using Docker. Check out the instructions in the [README of rust-ceramic repository](https://github.com/ceramicnetwork/rust-ceramic?tab=readme-ov-file).


## Setting up the `js-ceramic` component

The Ceramic command line interface provides an easy way to start a JS Ceramic node in a local Node.js environment. This is a great way to get started developing with Ceramic before moving to a cloud-hosted node for production use cases.


### Install the Ceramic CLI

Open your console and install the CLI using npm:

```bash
npm install -g @ceramicnetwork/cli
```

### Launch the `js-ceramic` node

Use the `ceramic daemon` command to start a local JS Ceramic node connected to the [Clay Testnet](../../networking/networks.md#clay-testnet) by default running at `https://localhost:7007`:

```bash
ceramic daemon
```

### Configure your network

(Optional) By default, the JS CLI starts a node on the [Clay Testnet](../../networking/networks.md#clay-testnet). If you would like to use a different network, you can specify this using the `--network` option. View [available networks](../../networking/networks.md). Note, the CLI can not be used with [Mainnet](../../networking/networks.md#mainnet).

### Configure a node URL

(Optional) It is possible to use the CLI with a remote Ceramic node over HTTP, instead of a local node. To do this, use the `config set` command to set the `ceramicHost` variable to the URL of the node you wish to use.

```bash
ceramic config set ceramicHost 'https://yourceramicnode.com'
```

## Monitoring
You can always check if `js-ceramic` and `ceramic-one` components are available by running the commands listed below.

### `js-ceramic` service's availability

Check the `js-ceramic` service’s availability with the healthcheck endpoint:

```json
curl http://localhost:7007/api/v0/node/healthcheck
```

### `ceramic-one` service's availability

Check the ceramic-one service’s availability with the liveness endpoint:

```json
curl http://127.0.0.1:5101/ceramic/liveness
```