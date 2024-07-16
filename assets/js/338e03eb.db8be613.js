"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2138],{37719:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(11527),r=t(63883);const o={},c="Streams",a={id:"protocol/js-ceramic/streams/streams-index",title:"Streams",description:"Data structures core to Ceramic",source:"@site/docs/protocol/js-ceramic/streams/streams-index.md",sourceDirName:"protocol/js-ceramic/streams",slug:"/protocol/js-ceramic/streams/streams-index",permalink:"/docs/protocol/js-ceramic/streams/streams-index",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Module: did-session",permalink:"/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/did-session"},next:{title:"Event Log",permalink:"/docs/protocol/js-ceramic/streams/event-log"}},i={},l=[{value:"Overview",id:"overview",level:3},{value:"Event Log",id:"event-log",level:3},{value:"URI Scheme",id:"uri-scheme",level:3},{value:"Consensus",id:"consensus",level:3},{value:"Stream Lifecycle",id:"stream-lifecycle",level:3}];function d(e){const s={a:"a",h1:"h1",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"streams",children:"Streams"}),"\n",(0,n.jsx)(s.p,{children:"Data structures core to Ceramic"}),"\n",(0,n.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(s.p,{children:"Streams are a core concept in Ceramic, they include a primary data structure called an event log, a URI scheme to identify unique streams in a network, a simple consensus model to agree on the same event log across the network, and a supporting lifecycle of creating, updating, querying, and syncing streams."}),"\n",(0,n.jsx)(s.h3,{id:"event-log",children:(0,n.jsx)(s.a,{href:"/docs/protocol/js-ceramic/streams/event-log",children:"Event Log"})}),"\n",(0,n.jsx)(s.p,{children:"The core data structure of streams is a self-certifying event log. It combines IPLD for hash linked data and cryptographic proofs to create an authenticated and immutable log. This event log can be used to model mutable databases and other data structures on top."}),"\n",(0,n.jsx)(s.h3,{id:"uri-scheme",children:(0,n.jsx)(s.a,{href:"/docs/protocol/js-ceramic/streams/uri-scheme",children:"URI Scheme"})}),"\n",(0,n.jsx)(s.p,{children:"A URI scheme is used to reference unique streams and unique events included in streams. They use a self describing format that allows anyone to parse and consume a stream correctly, while also easily supporting future changes and new types."}),"\n",(0,n.jsx)(s.h3,{id:"consensus",children:(0,n.jsx)(s.a,{href:"/docs/protocol/js-ceramic/streams/consensus",children:"Consensus"})}),"\n",(0,n.jsx)(s.p,{children:"An event log or stream can end up with multiple branches or tips across nodes in the network. Different branches will result in differing stream state. A simple consensus model is used to allow all nodes whom consume the same set of events to eventually agree on a single log or state."}),"\n",(0,n.jsx)(s.h3,{id:"stream-lifecycle",children:(0,n.jsx)(s.a,{href:"/docs/protocol/js-ceramic/streams/lifecycle",children:"Stream Lifecycle"})}),"\n",(0,n.jsx)(s.p,{children:"A stream write lifecycle includes its creation and updates, otherwise know as events. A stream read lifecycle includes queries and syncing."})]})}function m(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},63883:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>c});var n=t(50959);const r={},o=n.createContext(r);function c(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);