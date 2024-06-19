# Pinning

Pinning allows you to persist and make streams available on a Ceramic node beyond a single session. This guide demonstrates how to add and remove streams from your node's pinset, and how to list the streams currently in the pinset. In order to interact with a pinset, you must have [installed a Ceramic client](./ceramic-http.md).

## Overview

By default Ceramic will garbage collect any stream that has been written or [queried](./queries.md) on your node after some period of time. In order to prevent the loss of streams due to garbage collection, you need to explicitly pin the streams that you wish to persist. Pinning instructs the node to keep them around in persistent storage until they are explicitly unpinned.

## **Pin a stream while creating it**

Most StreamTypes will allow you to request that a Stream be pinned at the same time that you create the Stream. An example using the TileDocument Streamtype is below:

```javascript
await TileDocument.create(ceramic, content, null, { pin: true })
```

## **Add to pinset**

Use the `pin.add()` method to add an existing stream to your permanent pinset.

```javascript
const streamId = 'kjzl6cwe1jw14...'
await ceramic.admin.pin.add(streamId)
```


## **Remove from pinset**

Use the `pin.rm()` method to remove a stream from your permanent pinset.

```javascript
const streamId = 'kjzl6cwe1jw14...'
await ceramic.admin.pin.rm(streamId)
```


## **List streams in pinset**

Use the `pin.ls()` method to list streams currently in your permanent pinset.

```javascript
const streamIds = await ceramic.admin.pin.ls()
```

