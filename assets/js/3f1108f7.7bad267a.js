"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3526],{88204:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=s(11527),n=s(63883);const i={},o="Add Support for a Blockchain",r={id:"dids/guides/add-chain-support",title:"Add Support for a Blockchain",description:"The standard use of SIWX, CACAO and DID:PKH allows anyone to implement support for another blockchain or account type to authenticate and authorize writes to the Ceramic Network. Additionally a few standard interfaces enables you to implement an auth and verification library that allows anyone to use it with did-session, the primary library to use DID based accounts with Ceramic. There is just a few steps you have to take, outlined below.",source:"@site/docs/dids/guides/add-chain-support.md",sourceDirName:"dids/guides",slug:"/dids/guides/add-chain-support",permalink:"/docs/dids/guides/add-chain-support",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dids",previous:{title:"Using With ComposeDB Client",permalink:"/docs/dids/guides/using-with-composedb-client"},next:{title:"Upgrading DID Session",permalink:"/docs/dids/guides/upgrading-did-session"}},c={},d=[{value:"CASA Standards Support",id:"casa-standards-support",level:3},{value:"DID Standards Support",id:"did-standards-support",level:3},{value:"CACAO Support",id:"cacao-support",level:3},{value:"DID-Session and Ceramic Support",id:"did-session-and-ceramic-support",level:3},{value:"Ready, Set, Go",id:"ready-set-go",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"add-support-for-a-blockchain",children:"Add Support for a Blockchain"}),"\n",(0,a.jsxs)(t.p,{children:["The standard use of ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/pull/122",children:"SIWX"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-74.md",children:"CACAO"})," and ",(0,a.jsxs)(t.a,{href:"https://github.com/w3c-ccg/did-pkh/blob/main/did-pkh-method-draft.md",children:["DID",":PKH"]})," allows anyone to implement support for another blockchain or account type to authenticate and authorize writes to the Ceramic Network. Additionally a few standard interfaces enables you to implement an auth and verification library that allows anyone to use it with ",(0,a.jsx)(t.a,{href:"https://github.com/ceramicnetwork/js-did/tree/main/packages/did-session",children:(0,a.jsx)(t.code,{children:"did-session"})}),", the primary library to use DID based accounts with Ceramic. There is just a few steps you have to take, outlined below."]}),"\n",(0,a.jsx)(t.h3,{id:"casa-standards-support",children:"CASA Standards Support"}),"\n",(0,a.jsxs)(t.p,{children:["First make sure your blockchain has the necessary standards specification in the ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CASA",children:"Chain Agnostic Standards Alliance (CASA)"}),". CASA creates blockchain agnostic standards which support interoperability and facilitate communication between blockchain protocols, software and companies. Standards are submitted as ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs",children:"Chain Agnostic Improvement Proposals (CAIPs)"}),". Support in Ceramic requires a spec for the following CAIPs in the CASA namespace for your chain."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["CAIP2 - ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md",children:"Blockchain ID Specification"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["CAIP10 - ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-10.md",children:"Account ID Specification"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["CAIP122 - ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-122.md",children:"Sign in With X (SIWx)"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The CASA namespaces can be found ",(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/namespaces",children:"here"}),". If your blockchain already exists and has the prior 3 CAIPs, then you can move on to the next steps. If not, then you can define these specs yourself by following the instructions in the namespace readme and opening a PR. You can look at other blockchain namespaces for how to format and specify your specs and reference your own ecosystem standards for some if they exist already. You can reach out to the 3Box Labs team for reviews and help if needed."]}),"\n",(0,a.jsxs)(t.h3,{id:"did-standards-support",children:["DID",":PKH"," Standards Support"]}),"\n",(0,a.jsxs)(t.p,{children:["With accounts defined through CAIP10 you can now add standards support in DID",":PKH"," for your blockchain. To add support simply add a test vector in the ",(0,a.jsx)(t.a,{href:"https://github.com/w3c-ccg/did-pkh",children:"did-pkh repo"})," that shows what a DID document resolution would look like for an example DID",":PKH"," account for your blockchain. Reference other test vectors for examples and open a PR once ready."]}),"\n",(0,a.jsx)(t.h3,{id:"cacao-support",children:"CACAO Support"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-74.md",children:"CACAO"})," is a chain-agnostic Object Capability (",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Object-capability_model",children:"OCAP"}),"). CACAO allows us to create DID sessions by transferring the rights to write/update specific Ceramic streams from a DID",":PKH"," (blockchain account) to a browser session key. Session keys then can sign all Ceramic writes, needing to only sign with your blockchain account once. To add support for your blockchain we need be able to translate from SIWX messages to a CACAO (and back) and describe how to sign a SIWX. The library ",(0,a.jsx)(t.a,{href:"https://github.com/ceramicnetwork/js-did/tree/main/packages/cacao",children:(0,a.jsx)(t.code,{children:"@didtools/cacao"})})," implements this."]}),"\n",(0,a.jsxs)(t.p,{children:["To add support, first implement a SIWX class specific to your blockchain, based on the CAIP122 spec defined above. The file should be added to ",(0,a.jsx)(t.code,{children:"src/siwx/siw(name).ts"})," and extend ",(0,a.jsx)(t.code,{children:"SiwxMessage"}),". Typically you should only have to implement the function ",(0,a.jsx)(t.code,{children:"signMessage()"})," which encodes a SIWX message in the format needed to sign message payloads in your ecosystem. Reference the Solana (SIWS) and Ethereum (SIWE) implementations for example."]}),"\n",(0,a.jsxs)(t.p,{children:["Lastly in ",(0,a.jsx)(t.code,{children:"src/cacao.ts"})," implement a ",(0,a.jsx)(t.code,{children:"fromSiw(name)Message"})," function for your blockchain which translates a given SIWX message to a CACAO. Again reference both SIWS and SIWE for example implementations."]}),"\n",(0,a.jsx)(t.p,{children:"Once added, open a PR. You can reach out to the 3Box Labs team for reviews and help if needed."}),"\n",(0,a.jsx)(t.h3,{id:"did-session-and-ceramic-support",children:"DID-Session and Ceramic Support"}),"\n",(0,a.jsxs)(t.p,{children:["To support your blockchain account as DID",":PKH"," in Ceramic you need to be able to both sign and verify CACAOs. Signing and verifying is often specific to a chain depending on the ecosystem wallets, cryptography used and ecosystem standards. Each blockchain adds support by implementing an AuthMethod and Verifier in a blockchain specific library in the ",(0,a.jsxs)(t.a,{href:"https://github.com/ceramicnetwork/js-did",children:[(0,a.jsx)(t.code,{children:"js-did"})," monorepo"]}),". Reference existing chains, both Solana and Ethereum for example."]}),"\n",(0,a.jsxs)(t.p,{children:["Authmethods are the primary interface used by ",(0,a.jsx)(t.a,{href:"https://github.com/ceramicnetwork/js-did/tree/main/packages/did-session",children:(0,a.jsx)(t.code,{children:"did-session"})}),". It has the following interface:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"type AuthMethod = (opts: AuthMethodOpts) => Promise<Cacao>\n"})}),"\n",(0,a.jsx)(t.p,{children:"Typically you will write a function or class that returns a configured AuthMethod and provides any specific helper functions that help a developer use your blockchain with an AuthMethod."}),"\n",(0,a.jsxs)(t.p,{children:["Verifiers are used by Ceramic nodes to verify signed commits by a DID",":PKH"," and CACAO. Nodes must register the verifiers needed for the blockchains and accounts they want to support. Right now most are included by default, once implemented. Verifers have the following interface."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"export type Verifiers = Record<string, CacaoVerifier>\n\nexport type CacaoVerifier = (cacao: Cacao, opts: VerifyOptions) => Promise<void>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To add support you create a ",(0,a.jsx)(t.code,{children:"@didtools/pkh-(namespace)"})," package in the ",(0,a.jsxs)(t.a,{href:"https://github.com/ceramicnetwork/js-did",children:[(0,a.jsx)(t.code,{children:"js-did"})," monorepo"]}),". Use the existing ",(0,a.jsx)(t.code,{children:"@didtools/pkh-ethereum"})," and ",(0,a.jsx)(t.code,{children:"@didtools/pkh-solana"})," libraries as a template to implement similar naming, functionality, documentation and testing. But primarily the library should export a ",(0,a.jsx)(t.code,{children:"Verifier"})," and a function or class the gives the developer a configured ",(0,a.jsx)(t.code,{children:"AuthMethod"}),". Once ready open a PR. You can reach out to the 3Box Labs team for reviews and help if needed."]}),"\n",(0,a.jsx)(t.h3,{id:"ready-set-go",children:"Ready, Set, Go"}),"\n",(0,a.jsx)(t.p,{children:"Once your library and PR are accepted, we will release them for everyone to use and add verifier support for them in Ceramic. We aim to have each maintained by their respective ecosystems when possible, as we dont have the knowledge of all details and specifications in each ecosystem to best support each and every one. If they fall out of date, or tests begin to fail, we may not be able to maintain them ourselves."}),"\n",(0,a.jsx)(t.p,{children:"Congrats, now everyone can auth and write to Ceramic directly with their blockchain account of your choice."})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},63883:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var a=s(50959);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);