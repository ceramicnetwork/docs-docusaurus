"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2920],{6252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(11527),s=n(63883);const i={},a="Stream Lifecycle",o={id:"protocol/js-ceramic/streams/lifecycle",title:"Stream Lifecycle",description:"Write Lifecycle",source:"@site/docs/protocol/js-ceramic/streams/lifecycle.md",sourceDirName:"protocol/js-ceramic/streams",slug:"/protocol/js-ceramic/streams/lifecycle",permalink:"/docs/protocol/js-ceramic/streams/lifecycle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Consensus",permalink:"/docs/protocol/js-ceramic/streams/consensus"},next:{title:"Accounts",permalink:"/docs/protocol/js-ceramic/accounts/accounts-index"}},c={},l=[{value:"Write Lifecycle",id:"write-lifecycle",level:2},{value:"Create",id:"create",level:3},{value:"Update",id:"update",level:3},{value:"Read Lifecycle",id:"read-lifecycle",level:2},{value:"Query",id:"query",level:3},{value:"Sync",id:"sync",level:3},{value:"Durability",id:"durability",level:2},{value:"Maintenance",id:"maintenance",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"stream-lifecycle",children:"Stream Lifecycle"}),"\n",(0,r.jsx)(t.h2,{id:"write-lifecycle",children:"Write Lifecycle"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"create",children:"Create"}),"\n",(0,r.jsxs)(t.p,{children:["A stream is created when an ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/streams/event-log",children:"Init Event"})," is created and published. The stream is then uniquely referenced in the network by its ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/streams/uri-scheme",children:"StreamId"}),", which is derived from this Init Event."]}),"\n",(0,r.jsx)(t.h3,{id:"update",children:"Update"}),"\n",(0,r.jsxs)(t.p,{children:["Updates to a stream include the creating and publishing of data events or timestamp events. When creating these events they must reference the latest event or tip in the stream. The latest event, if there is multiple, is determined by locally following the conflict resolution and ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/streams/consensus",children:"consensus rules"}),". The current update protocol is described further ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/tip-gossip",children:"here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The data event is a signed event and is expected to be created and published by the controller of the given stream it is being appended. A timestamp event on the other hand can be created by any participant in network, given that it is a valid timestamp proof. Typically in the Ceramic network they will be created and published by a timestamping service."}),"\n",(0,r.jsx)(t.h2,{id:"read-lifecycle",children:"Read Lifecycle"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"query",children:"Query"}),"\n",(0,r.jsxs)(t.p,{children:["The network can be queried to discover the latest tips for any stream by StreamId. Knowing both the StreamId and tip then allows any node to sync the stream. Query requests are broadcast to the entire network to discover peers that have tips for any given stream. Future query protocols can be optimized and include other stream attributes and values to discover streams and stream tips. The current query protocol is described further ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/tip-queries",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"sync",children:"Sync"}),"\n",(0,r.jsxs)(t.p,{children:["Streams can be synced and loaded by knowing both the StreamId and the latest event (tip). Given the latest tip you can traverse the stream event log from event to event in order until the Init Event is reached. Each event is loaded from peers in the network, any peer with a tip is expected to have the entirety of the event stream log. The current sync protocol is described further ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/networking/event-fetching",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"durability",children:"Durability"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"maintenance",children:"Maintenance"}),"\n",(0,r.jsxs)(t.p,{children:["A stream is a set of ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/streams/event-log",children:"events"})," and these events are stored in IPFS nodes. As long as the entire set of events is pinned and advertised on the IPFS DHT, the respective stream will be retrievable. If your application depends on a stream remaining available, it is your application's responsibility to maintain and store all of its events. This can be done by running your own IPFS nodes or by using an IPFS pinning service. Typically you will be running an IPFS node with Ceramic."]}),"\n",(0,r.jsx)(t.p,{children:"If any events are not available at a given time, it is not a guarantee that the stream has been deleted. A node with a copy of those events\nmay be temporarily offline and may return at some future time."}),"\n",(0,r.jsx)(t.p,{children:"Other nodes in the network can pin (maintain and store) events from your streams or anyone else's streams. If you suffer a data loss, some other node MAY have preserved your data. Popular streams and their events are likely to be stored on many nodes in the network."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},63883:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(50959);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);