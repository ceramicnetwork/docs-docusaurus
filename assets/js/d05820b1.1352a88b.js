"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4183],{34529:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=s(11527),t=s(63883);const i={},r="Configuration",a={id:"dids/configuration",title:"Configuration",description:"When creating a DID session, you need to pass an array of string identifiers for resources you want to authorize",source:"@site/docs/dids/configuration.md",sourceDirName:"dids",slug:"/dids/configuration",permalink:"/docs/dids/configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dids",previous:{title:"Authorization",permalink:"/docs/dids/authorization"},next:{title:"Managing Sessions",permalink:"/docs/dids/managing-sessions"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["When creating a DID session, you need to pass an array of string identifiers for resources you want to authorize\nfor. In the context of the Ceramic Network, resources are an array of Model Stream Ids or Streams Ids. Typically\nyou will just pass resources from the ",(0,o.jsx)(n.code,{children:"@composedb"})," libraries as you will already manage your Composites and Models\nthere. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { ComposeClient } from '@composedb/client'\n\n//... Reference above and `@composedb` docs for additional configuration here\n\nconst client = new ComposeClient({ceramic, definition})\nconst resources = client.resources\nconst session = await DIDSession.get(accountId, authMethod, { resources })\nclient.setDID(session.did)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are still using ",(0,o.jsx)(n.code,{children:"@glazed"})," libraries and tile document streams you will typically pass a wildcard resource,\nthis all allows 'access all'. While not ideal, there is technical limits in ",(0,o.jsx)(n.code,{children:"@glazed"})," libraries and tile document\nstreams that make it difficult to offer more granular permission access to sets of stream. Authorization was mostly\ndesigned with model document streams and ",(0,o.jsx)(n.code,{children:"@composedb"})," libraries in mind. Wildcard resource may not be supported in\nthe future."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const session = await DIDSession.get(accountId, authMethod, { resources: [`ceramic://*`]})\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default a session will expire in 1 week. You can change this time by passing the ",(0,o.jsx)(n.code,{children:"expiresInSecs"})," option to\nindicate how many seconds from the current time you want this session to expire."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const oneDay = 60 * 60 * 24\nconst session = await DIDSession.get(accountId, authMethod, { resources: [...], expiresInSecs: oneDay })\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},63883:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var o=s(50959);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);