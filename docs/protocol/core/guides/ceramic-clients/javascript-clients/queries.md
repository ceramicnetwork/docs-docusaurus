# Queries

This guide demonstrates how to query streams during runtime using the [JS HTTP](./ceramic-http.md) and JS Core clients.

## **Requirements**

You need to have an [installed client](./ceramic-http.md) to perform queries during runtime.

## **Query a stream**

Use the `loadStream()` method to load a single stream using its _StreamID_.

```javascript
const streamId = 'kjzl6cwe1jw14...'
const stream = await ceramic.loadStream(streamId)
```

:::caution 

    When using the Typescript APIs, `loadStream` by default returns an object of type `Stream`, which will not have any methods available to perform updates, or any other streamtype-specific methods or accessors.  To be able to perform updates, as well as to access streamtype-specific data or functionality, you need to specialize the `loadStream` method on the StreamType of the Stream being loaded.
:::


## **Query a stream at a specific commit**

If you want to see the contents of a stream as of a specific point in time, it's possible to pass a _CommitID_ instead of a _StreamID_ to the `loadStream()` method described above. This will cause the Stream to be loaded at the specified commit, rather than the current commit as loaded from the network. When loading with a CommitID, the returned Stream object will be marked as readonly and cannot be used to perform updates. If you wish to perform updates, load a new instance of the Stream using its StreamID.

## **Query multiple streams**

Use the `multiQuery()` method to load multiple streams at once. The returned object is a map from _StreamIDs_ to stream instances.

```javascript
const queries = [
  {
    streamId: 'kjzl6cwe1jw...14',
  },
  {
    streamId: 'kjzl6cwe1jw...15',
  },
]
const streamMap = await ceramic.multiQuery(queries)
```


## **Query a stream using paths**

Use the `multiQuery()` method to load one or more streams using known paths from a root stream to its linked streams.

Imagine a stream `kjzl6cwe1jw...14` whose content contains the StreamIDs of two other streams. These StreamIDs exist at various levels within a nested JSON structure.

```javascript
{
  a: 'kjzl6cwe1jw...15',
  b: {
    c: 'kjzl6cwe1jw...16'
  }
}
```

In the stream above, the path from root stream `kjzl6cwe1jw...14` to linked stream `kjzl6cwe1jw...15` is `/a` and the path to linked stream `kjzl6cwe1jw...16` is `/b/c`. Using the StreamID of the root stream and the paths outlined here, we use `multiQuery()` to query all three streams at once without needing to explicitly know the StreamIDs of the two linked streams.

The `multiQuery()` below will return a map with all three streams.

```javascript
const queries = [{
  streamId: 'kjzl6cwe1jw...14'
  paths: ['/a', '/b/c']
}]
const streamMap = await ceramic.multiQuery(queries)
```


## **Helper methods**

To get specific information about the stream that you created or loaded you can use the accessors on the `Stream` class. Below are some examples.



### Get StreamID

Use the `stream.id` property to get the unique `StreamID` for this stream.

```javascript
const streamId = stream.id
```



### Get latest commit

Use the `stream.commitId` property to get latest CommitID of a stream.

```javascript
const commitId = stream.commitId
```



### Get all anchor commits

Use the `stream.anchorCommitIds` property to get all CommitIDs which are anchor commits for this stream.

```javascript
const anchorCommits = stream.anchorCommitIds
```
