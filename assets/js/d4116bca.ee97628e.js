"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3939],{73913:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=o(11527),n=o(63883);const i={},r="Using With ComposeDB Client",a={id:"dids/guides/using-with-composedb-client",title:"Using With ComposeDB Client",description:"ComposeDB is a set of TypeScript libraries and tools to interact with the Dataverse using the Ceramic network.",source:"@site/docs/dids/guides/using-with-composedb-client.md",sourceDirName:"dids/guides",slug:"/dids/guides/using-with-composedb-client",permalink:"/docs/dids/guides/using-with-composedb-client",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dids",previous:{title:"Concepts overview",permalink:"/docs/dids/guides/concepts-overview"},next:{title:"Add Support for a Blockchain",permalink:"/docs/dids/guides/add-chain-support"}},c={},d=[];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"using-with-composedb-client",children:"Using With ComposeDB Client"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://composedb.js.org",children:"ComposeDB"})," is a set of TypeScript libraries and tools to interact with the ",(0,t.jsx)(s.a,{href:"https://blog.ceramic.network/into-the-dataverse/",children:"Dataverse"})," using the ",(0,t.jsx)(s.a,{href:"https://ceramic.network/",children:"Ceramic network"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["First, you should start with creating your instance of ",(0,t.jsx)(s.code,{children:"ComposeClient"})," from ",(0,t.jsx)(s.code,{children:"@composedb/client"})," package, passing it the\nurl to the ceramic node you want to use and the runtime composite definition of the composite you want to use in your App."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import { ComposeClient } from '@composedb/client'\nimport { definition } from './__generated__/definition.js'\n\nconst compose = new ComposeClient({ ceramic: 'http://localhost:7007', definition })\n"})}),"\n",(0,t.jsx)(s.p,{children:"Next, you can create a DID Session, passing it the resources from your client instance. The resources are a list of model\nstream IDs from your runtime composite definition:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import { DIDSession } from 'did-session'\nimport type { AuthMethod } from '@didtools/cacao'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider).request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\n\nconst loadSession = async(authMethod: AuthMethod, resources: Array<string>):Promise<DIDSession> => {\n  return DIDSession.authorize(authMethod, { resources })\n}\n\nconst session = await loadSession(authMethod, compose.resources)\n"})}),"\n",(0,t.jsx)(s.p,{children:"Next, you can assign the authorized did from your session to your client."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"compose.setDID(session.did)\n\n// use the compose instance to make queries in ComposeDB graph\n"})}),"\n",(0,t.jsx)(s.p,{children:"Before you start making mutations with the client instance, you should make sure that the session is not expired"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// before compose mutations, check if session is still valid, if expired, create new\nif (session.isExpired) {\n  const session = loadSession(authMethod)\n  compose.setDID(session.did)\n}\n\n// continue to make mutations\n"})}),"\n",(0,t.jsx)(s.p,{children:"A typical pattern is to store a serialized session in local storage and load on use if available."}),"\n",(0,t.jsx)(s.admonition,{title:"Warning",type:"caution",children:(0,t.jsx)(s.p,{children:"LocalStorage is used for illustrative purposes here and may not be best for your app, as\nthere is a number of known issues with storing secret material in browser storage. The session string\nallows anyone with access to that string to make writes for that user for the time and resources that\nsession is valid for. How that session string is stored and managed is the responsibility of the application."})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// An updated version of loadSession(...)\nconst loadSession = async(authMethod: AuthMethod, resources: Array<string>):Promise<DIDSession> => {\n  const sessionStr = localStorage.getItem('didsession')\n  let session\n\n  if (sessionStr) {\n    session = await DIDSession.fromSession(sessionStr)\n  }\n\n  if (!session || (session.hasSession && session.isExpired)) {\n    session = await DIDSession.authorize(authMethod, { resources })\n    localStorage.setItem('didsession', session.serialize())\n  }\n\n  return session\n}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},63883:(e,s,o)=>{o.d(s,{Z:()=>a,a:()=>r});var t=o(50959);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);