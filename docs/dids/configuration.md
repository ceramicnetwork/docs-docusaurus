# Configuration

When creating a DID session, you need to pass an array of string identifiers for resources you want to authorize
for. In the context of the Ceramic Network, resources are an array of Model Stream IDs or Stream IDs.

```js
import { DIDSession } from 'did-session'

const session = await DIDSession.get(accountId, authMethod, {
  resources: ['kjzl6hvfrbw6c...'] // Model stream IDs
})
```

You can also pass a wildcard resource to allow access to all streams:

```js
const session = await DIDSession.get(accountId, authMethod, { resources: [`ceramic://*`]})
```

## Session Expiration

By default a session will expire in 1 week. You can change this time by passing the `expiresInSecs` option to
indicate how many seconds from the current time you want this session to expire.

```js
const oneDay = 60 * 60 * 24
const session = await DIDSession.get(accountId, authMethod, { resources: [...], expiresInSecs: oneDay })
```
