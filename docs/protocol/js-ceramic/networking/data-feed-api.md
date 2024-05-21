# Data Feed API

The Ceramic Data Feed API gives developers a way to keep track of all the new state changes that are happening in the Ceramic network. There are 2 scenarios that would trigger an update on the feed:

1. Writes explicitly sent to the Ceramic node via the HTTP Client
2. Writes discovered from the network for Streams belonging to Models that are indexed on the Ceramic node

This information can be used to take actions or simply stay updated on the current status of a stream or even a network. Data Feed API enables developers to build custom indexers or databases.


# Server-Sent Events and EventSource interface
To understand Data Feed API, it's important to have a basic understanding of [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) and the [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) interface.

SSE is a simple and efficient way for servers to send real-time updates to web clients over a single HTTP connection. It works with the standard HTTP protocol, which makes it great for situations where the server needs to constantly update the client.

The EventSource interface is a JavaScript API that makes it easy for web applications to consume SSE. It allows clients to receive updates as a stream of events, making it simple to integrate real-time data into web apps.

---

# Getting started
The guide below will cover the main steps you need to follow to start interacting with Data Feed API.

## Configure your working environment  

### 1. Run a Ceramic node
To interact with Data Feed API you will need a Ceramic testnet or mainnet node up and running. Check out the [Quickstart](../../../composedb/set-up-your-environment.mdx) for instructions on how to run Ceramic nodes locally and [Running in the Cloud](../../../composedb/guides/composedb-server/running-in-the-cloud.mdx) guide for instructions on how to run a Ceramic node in the cloud.

:::tip
Make sure that your Ceramic node is using the Ceramic version 5.3 or higher to make sure that it supports the Data Feed logic.
:::

### 2. Install additional dependencies
Depending on how you use the Data Feed API, you may need additional dependencies installed on your machine:
- Cross-eventsource to use EventSource isomorphically on Node.js and browser:

```bash
npm i cross-eventsource
```

- `@ceramicnetwork/codecs` and `codeco` for encoding and decoding:
```bash
npm i @ceramicnetwork/codecs codeco 
```

## Interact with the Data Feed API

Below you can see a few examples of how you can interact with the Data Feed API. Currently, Data Feed API is available as read-only with support for `GET` methods and access to Ceramic's aggregation layer.

The following request `GET` will return the following type of objects as activity is done on the Ceramic node:

**Request:**
`GET /api/v0/feed/aggregation/documents`

**Response:**
```javascript
FeedDocument = {
  commitId: CommitID
  content: any
  metadata: StreamMetadata
  eventType: EventType
}
```

For example, the following request will return a response with the details provided below.
**Request:**
 `curl http://localhost:7007/api/v0/feed/aggregation/documents`

**Response:**
```javascript
data: {
  "commitId": "k6zn3t2py84tn1dpy24625xjv65g4r23wuqpch6mmrywshreivaqiyaqctrz2ba5kk0qjvec61pbmyl15b49zxfd8qd3aiiupltnpveh45oiranqr4njj40",
  "content": "{...}",
  "metadata": {
    "controllers": [
      "did:key:z6MknE3RuK7XU2W1KGCQrsSVhzRwCUJ9uMb6ugwbELm9JdP6"
    ],
    "model": "kh4q0ozorrgaq2mezktnrmdwleo1d"
  },
  "eventType": 2
}

```



The recommended way of interacting with the Data Feed API is by using event listeners as show in the example below. The provided example is using `localhost:7007` as the host:

```typescript
import { EventSource  } from "cross-eventsource";
import { JsonAsString, AggregationDocument } from '@ceramicnetwork/codecs';
import { decode } from "codeco";

const source = new EventSource('http://localhost:7007/api/v0/feed/aggregation/documents')
const Codec = JsonAsString.pipe(AggregationDocument)

source.addEventListener('message', (event) => {
	console.log('message', event)
	//use JsonAsString, and AggregationDocument to decode and use event.data
	const parsedData = decode(Codec, event.data);
	console.log('parsed', parsedData)
})

source.addEventListener('error', error => {
	console.log('error', error)
})

console.log('listening...')
```

## Resumability

In case your application drops a connection and needs to start where it dropped, Data Feed API could be resumed. Every event emitted by the Data Feed API contains `resumeToken` property. When initiating a connection, you might ask to emit entries after `resumeToken`. 

For example, your application got an entry containing `resumeToken: "1714742204565000000"`. When connecting, pass the token value as a query parameter to emit the entries after this checkpoint:

```javascript
// ... same as a code snipped above
const url = new URL("http://localhost:7007/api/v0/feed/aggregation/documents")
url.searchParams.set('after', '1714742204565000000') // Value of the last resumeToken
// Connection to http://localhost:7007/api/v0/feed/aggregation/documents?after=1714742204565000000
const source = new EventSource(url)
```


## Frequently asked questions

<details>
  <summary>How to get the StreamId from the feed?</summary>
  <div>
    <div>
      The StreamId can be extracted from the CommitID included in the feed response as seen below:
      ```tsx
        ...

        source.addEventListener('message', (event) => {
	        console.log('message', event)
	        //use JsonAsString, and AggregationDocument to decode and use event.data
	        const parsedData = decode(Codec, event.data)
	        const streamId = parsedData.commitId.baseID
	        console.log('parsed', parsedData)
	        console.log('StreamID',streamId)
        })
        ...
        ```
    </div>
  </div>
</details>

<details>
  <summary>What are delivery guarantees of the Feed API?</summary>
  <div>
    <div>
      The feed sends data according to “at least once” guarantee. For every stream change, the latest stream state is delivered. For example, if a stream went through changes `a`, `b`, `c` giving states `A`, `B`, `C`, you could expect three events over Feed API: `C`, `C`, `C`.
    </div>
  </div>
</details>

<details>
  <summary>How far in the past could I resume from?</summary>
  <div>
    <div>
      You could expect up to 7 days worth of history stored.
    </div>
  </div>
</details>


