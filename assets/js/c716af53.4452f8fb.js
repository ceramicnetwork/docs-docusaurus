"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3204],{6608:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(11527),r=i(63883);const o={},s="Identifiers",a={id:"protocol/js-ceramic/accounts/decentralized-identifiers",title:"Identifiers",description:"---",source:"@site/docs/protocol/js-ceramic/accounts/decentralized-identifiers.md",sourceDirName:"protocol/js-ceramic/accounts",slug:"/protocol/js-ceramic/accounts/decentralized-identifiers",permalink:"/docs/protocol/js-ceramic/accounts/decentralized-identifiers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Accounts",permalink:"/docs/protocol/js-ceramic/accounts/accounts-index"},next:{title:"Authorizations",permalink:"/docs/protocol/js-ceramic/accounts/authorizations"}},c={},d=[{value:"Decentralized Identifiers (DIDs)",id:"decentralized-identifiers-dids",level:2},{value:"Supported Methods",id:"supported-methods",level:2},{value:"PKH DID",id:"pkh-did",level:3},{value:"Key DID",id:"key-did",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"identifiers",children:"Identifiers"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Ceramic streams rely on an account model to authenticate and authorize updates to a stream. A fully realized vision of user owned data includes the use of public key cryptography and the ability to sign data with a public-private key-pair controlled by a user. But key pairs alone are often not user friendly nor sufficient and don't fully represent the range of real world scenarios."}),"\n",(0,n.jsx)(t.h2,{id:"decentralized-identifiers-dids",children:"Decentralized Identifiers (DIDs)"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Ceramic uses ",(0,n.jsx)(t.a,{href:"https://w3c.github.io/did-core/",children:"Decentralized Identifiers (DIDs)"})," to represent accounts. DIDs are identifiers that enable verifiable, decentralized digital identities. They require no centralized party or registry and are extremely extensible, allowing a variety of implementations and account models to exist."]}),"\n",(0,n.jsx)(t.p,{children:"DID methods are specific implementations of the DID standard that define an identifier namespace along with how to resolve its DID document, which typically stores public keys for signing and encryption. The ability to resolve public keys from identifiers allows anyone to verify a signature for a DID."}),"\n",(0,n.jsx)(t.h2,{id:"supported-methods",children:"Supported Methods"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"At this time, the following DID methods can be used with Ceramic:"}),"\n",(0,n.jsx)(t.h3,{id:"pkh-did",children:"PKH DID"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"PKH DID Method"}),": A DID method that natively supports blockchain accounts. DID documents are statically generated from a blockchain account, allowing blockchain accounts to sign, authorize and authenticate in DID based environments. PKH DID is the primary and recommended method in Ceramic. ",(0,n.jsxs)(t.a,{href:"https://github.com/w3c-ccg/did-pkh/blob/main/did-pkh-method-draft.md",children:["did",":pkh"," Method Specification"]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"did:pkh:eip155:1:0xb9c5714089478a327f09197987f16f9e5d936e8a\n"})}),"\n",(0,n.jsx)(t.h3,{id:"key-did",children:"Key DID"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Key DID Method"}),": A DID method that expands a cryptographic public key into a DID Document, with support for Ed25519 and Secp256k1. Key DIDs are typically not used in long lived environments. ",(0,n.jsxs)(t.a,{href:"https://w3c-ccg.github.io/did-method-key/",children:["did",":key"," Method Specification"]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},63883:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>s});var n=i(50959);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);