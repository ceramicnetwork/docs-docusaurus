"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9930],{55122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(11527),s=n(63883);const i={},r="Authorization",a={id:"dids/authorization",title:"Authorization",description:"Authorize and then use DIDs where needed. At the moment, Ethereum and Solana accounts",source:"@site/docs/dids/authorization.md",sourceDirName:"dids",slug:"/dids/authorization",permalink:"/docs/dids/authorization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dids",previous:{title:"Installation",permalink:"/docs/dids/installation"},next:{title:"Configuration",permalink:"/docs/dids/configuration"}},d={},c=[];function u(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"authorization",children:"Authorization"}),"\n",(0,o.jsx)(t.p,{children:"Authorize and then use DIDs where needed. At the moment, Ethereum and Solana accounts\nare supported. Reference the chain/network specific libraries for more info on how to\nuse each. Additional accounts will be supported in the future."}),"\n",(0,o.jsxs)(t.p,{children:["Authorize with an Ethereum account using ",(0,o.jsx)(t.a,{href:"https://did.js.org/docs/api/modules/pkh_ethereum",children:"@didtools/pkh-ethereum"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { DIDSession } from 'did-session'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethprovider, accountId)\n\nconst session = await DIDSession.get(accountId, authMethod, { resources: [...]})\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Authorize with a Solana account using ",(0,o.jsx)(t.a,{href:"https://did.js.org/docs/api/modules/pkh_solana",children:"@didtools/pkh-solana"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { DIDSession } from 'did-session'\nimport { SolanaWebAuth, getAccountIdByNetwork } from '@didtools/pkh-solana'\n\nconst solProvider = // import/get your Solana provider (ie: window.phantom.solana)\nconst address = await solProvider.connect()\nconst accountId = getAccountIdByNetwork('mainnet', address.publicKey.toString())\nconst authMethod = await SolanaWebAuth.getAuthMethod(solProvider, accountId)\n\nconst session = await DIDSession.get(accountId, authMethod, { resources: [...]})\n"})}),"\n",(0,o.jsx)(t.p,{children:"With your session, use DIDs in composedb, ceramic & glaze libraries:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const ceramic = new CeramicClient()\nceramic.did = session.did\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},63883:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(50959);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);