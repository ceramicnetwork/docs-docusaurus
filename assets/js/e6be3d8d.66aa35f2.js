"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1032],{87163:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=n(11527),d=n(63883);const o={title:"Upgrading DID Session"},t=void 0,r={id:"dids/guides/upgrading-did-session",title:"Upgrading DID Session",description:"Upgrading from did-session@0.x.x to did-session@1.x.x",source:"@site/docs/dids/guides/upgrading-did-session.md",sourceDirName:"dids/guides",slug:"/dids/guides/upgrading-did-session",permalink:"/docs/dids/guides/upgrading-did-session",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Upgrading DID Session"},sidebar:"dids",previous:{title:"Add Support for a Blockchain",permalink:"/docs/dids/guides/add-chain-support"}},c={},a=[{value:"Upgrading from <code>did-session@0.x.x</code> to <code>did-session@1.x.x</code>",id:"upgrading-from-did-session0xx-to-did-session1xx",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h2,{id:"upgrading-from-did-session0xx-to-did-session1xx",children:["Upgrading from ",(0,i.jsx)(s.code,{children:"did-session@0.x.x"})," to ",(0,i.jsx)(s.code,{children:"did-session@1.x.x"})]}),"\n",(0,i.jsx)(s.p,{children:"AuthProviders change to AuthMethod interfaces. Similarly you can import the auth libraries you need. How you configure and manage\nthese AuthMethods may differ, but each will return an AuthMethod function to be used with did-session."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// Before with v0.x.x\n//...\nimport { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'\n \nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst authProvider = new EthereumAuthProvider(ethProvider, addresses[0])\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session@1.0.0\n...\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n \nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst did = session.did\n"})}),"\n",(0,i.jsxs)(s.h1,{id:"upgrading-from-glazeddid-session-to-did-session",children:["Upgrading From ",(0,i.jsx)(s.code,{children:"@glazed/did-session"})," to ",(0,i.jsx)(s.code,{children:"did-session"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"authorize"})," changes to a static method which returns a did-session instance and ",(0,i.jsx)(s.code,{children:"getDID()"})," becomes a ",(0,i.jsx)(s.code,{children:"did"})," getter. For example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// Before @glazed/did-session\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session\nconst session = await DIDSession.authorize(authProvider, { resources: [...]})\nconst did = session.did\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Requesting resources are required now when authorizing, before wildcard (access all) was the default. You can continue to use\nwildcard by passing the following * below. Wildcard is typically only used with ",(0,i.jsx)(s.code,{children:"@glazed"})," libraries and/or tile documents and\nit is best to switch over when possible, as the wildcard option may be * deprecated in the future. When using with\ncomposites/models you should request the minimum needed resources instead."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const session = await DIDSession.authorize(authProvider, { resources: [`ceramic://*`]})\nconst did = session.did\n"})})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},63883:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>t});var i=n(50959);const d={},o=i.createContext(d);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);