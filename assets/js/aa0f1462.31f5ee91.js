"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2731],{49097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(11527),i=n(63883);const r={},s="Networking",a={id:"protocol/js-ceramic/networking/networking-index",title:"Networking",description:"Networking sub-protocols for Ceramic",source:"@site/docs/protocol/js-ceramic/networking/networking-index.md",sourceDirName:"protocol/js-ceramic/networking",slug:"/protocol/js-ceramic/networking/networking-index",permalink:"/docs/protocol/js-ceramic/networking/networking-index",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Object Capabilities",permalink:"/docs/protocol/js-ceramic/accounts/object-capabilities"},next:{title:"Networks",permalink:"/docs/protocol/js-ceramic/networking/networks"}},c={},d=[{value:"Overview",id:"overview",level:3},{value:"Networks",id:"networks",level:3},{value:"Data Feed API",id:"data-feed-api",level:3},{value:"Tip Gossip",id:"tip-gossip",level:3},{value:"Tip Queries",id:"tip-queries",level:3},{value:"Event Fetching",id:"event-fetching",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"networking",children:"Networking"}),"\n",(0,o.jsx)(t.p,{children:"Networking sub-protocols for Ceramic"}),"\n",(0,o.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"Ceramic streams and nodes are grouped into independent networks. These networks can be either for public use or for use by a specific community. There are currently a few commonly shared and default networks. When a stream is published in a network, other nodes in the same network are able to query and discover the stream, receive the latest stream events (tips), and sync the entire event set for a stream. Each of the these network functions are defined by a sub protocol listed below."}),"\n",(0,o.jsx)(t.h3,{id:"networks",children:(0,o.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/networks",children:"Networks"})}),"\n",(0,o.jsxs)(t.p,{children:["Networks are collections of Ceramic ",(0,o.jsx)(t.a,{href:"/docs/protocol/js-ceramic/nodes/overview",children:"nodes"})," that share specific configurations and communicate over dedicated ",(0,o.jsx)(t.a,{href:"https://libp2p.io/",children:"libp2p"})," pubsub topics. They are easily identified by a path string, for example ",(0,o.jsx)(t.code,{children:"/ceramic/mainnet"})," ."]}),"\n",(0,o.jsx)(t.h3,{id:"data-feed-api",children:(0,o.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/data-feed-api",children:"Data Feed API"})}),"\n",(0,o.jsx)(t.p,{children:"The Ceramic Data Feed API gives developers a way to keep track of all the new state changes that are happening in the Ceramic network. This enables developers to customize the way their data is indexed and queried, and enables the development of new custom database products on top of Ceramic."}),"\n",(0,o.jsx)(t.h3,{id:"tip-gossip",children:(0,o.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/tip-gossip",children:"Tip Gossip"})}),"\n",(0,o.jsx)(t.p,{children:"When a stream is updated, the latest event (tip) is gossiped and propagated out to all the nodes in a network that are interested in that particular stream. Listening for all tips, allows a node to learn about streams it did not know about."}),"\n",(0,o.jsx)(t.h3,{id:"tip-queries",children:(0,o.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/tip-queries",children:"Tip Queries"})}),"\n",(0,o.jsx)(t.p,{children:"Nodes in a network with a specific StreamId can query for the most recent event (tip) of that given stream. Queries enable a node that know about a stream to find the latest event (tip)."}),"\n",(0,o.jsx)(t.h3,{id:"event-fetching",children:(0,o.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/event-fetching",children:"Event Fetching"})}),"\n",(0,o.jsx)(t.p,{children:"Nodes that have the tip (latest event) of a stream, can use the tip to fetch all prior events in that stream.  Fetching enables a node that knows a tip to sync the entire event set for a stream and learn its latest state."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},63883:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(50959);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);