"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9146],{12365:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=s(11527),i=s(63883);const a={},n="Queries",c={id:"protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries",title:"Queries",description:"This guide demonstrates how to query streams during runtime using the JS HTTP and JS Core clients.",source:"@site/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries.md",sourceDirName:"protocol/js-ceramic/guides/ceramic-clients/javascript-clients",slug:"/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries",permalink:"/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Ceramic HTTP client",permalink:"/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http"},next:{title:"Pinning",permalink:"/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning"}},o={},l=[{value:"<strong>Requirements</strong>",id:"requirements",level:2},{value:"<strong>Query a stream</strong>",id:"query-a-stream",level:2},{value:"<strong>Query a stream at a specific commit</strong>",id:"query-a-stream-at-a-specific-commit",level:2},{value:"<strong>Query multiple streams</strong>",id:"query-multiple-streams",level:2},{value:"<strong>Query a stream using paths</strong>",id:"query-a-stream-using-paths",level:2},{value:"<strong>Helper methods</strong>",id:"helper-methods",level:2},{value:"Get StreamID",id:"get-streamid",level:3},{value:"Get latest commit",id:"get-latest-commit",level:3},{value:"Get all anchor commits",id:"get-all-anchor-commits",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"queries",children:"Queries"}),"\n",(0,r.jsxs)(t.p,{children:["This guide demonstrates how to query streams during runtime using the ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http",children:"JS HTTP"})," and JS Core clients."]}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:(0,r.jsx)(t.strong,{children:"Requirements"})}),"\n",(0,r.jsxs)(t.p,{children:["You need to have an ",(0,r.jsx)(t.a,{href:"/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http",children:"installed client"})," to perform queries during runtime."]}),"\n",(0,r.jsx)(t.h2,{id:"query-a-stream",children:(0,r.jsx)(t.strong,{children:"Query a stream"})}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"loadStream()"})," method to load a single stream using its ",(0,r.jsx)(t.em,{children:"StreamID"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const streamId = 'kjzl6cwe1jw14...'\nconst stream = await ceramic.loadStream(streamId)\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsxs)(t.p,{children:["When using the Typescript APIs, ",(0,r.jsx)(t.code,{children:"loadStream"})," by default returns an object of type ",(0,r.jsx)(t.code,{children:"Stream"}),", which will not have any methods available to perform updates, or any other streamtype-specific methods or accessors.  To be able to perform updates, as well as to access streamtype-specific data or functionality, you need to specialize the ",(0,r.jsx)(t.code,{children:"loadStream"})," method on the StreamType of the Stream being loaded."]})]}),"\n",(0,r.jsx)(t.h2,{id:"query-a-stream-at-a-specific-commit",children:(0,r.jsx)(t.strong,{children:"Query a stream at a specific commit"})}),"\n",(0,r.jsxs)(t.p,{children:["If you want to see the contents of a stream as of a specific point in time, it's possible to pass a ",(0,r.jsx)(t.em,{children:"CommitID"})," instead of a ",(0,r.jsx)(t.em,{children:"StreamID"})," to the ",(0,r.jsx)(t.code,{children:"loadStream()"})," method described above. This will cause the Stream to be loaded at the specified commit, rather than the current commit as loaded from the network. When loading with a CommitID, the returned Stream object will be marked as readonly and cannot be used to perform updates. If you wish to perform updates, load a new instance of the Stream using its StreamID."]}),"\n",(0,r.jsx)(t.h2,{id:"query-multiple-streams",children:(0,r.jsx)(t.strong,{children:"Query multiple streams"})}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"multiQuery()"})," method to load multiple streams at once. The returned object is a map from ",(0,r.jsx)(t.em,{children:"StreamIDs"})," to stream instances."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const queries = [\n  {\n    streamId: 'kjzl6cwe1jw...14',\n  },\n  {\n    streamId: 'kjzl6cwe1jw...15',\n  },\n]\nconst streamMap = await ceramic.multiQuery(queries)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"query-a-stream-using-paths",children:(0,r.jsx)(t.strong,{children:"Query a stream using paths"})}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"multiQuery()"})," method to load one or more streams using known paths from a root stream to its linked streams."]}),"\n",(0,r.jsxs)(t.p,{children:["Imagine a stream ",(0,r.jsx)(t.code,{children:"kjzl6cwe1jw...14"})," whose content contains the StreamIDs of two other streams. These StreamIDs exist at various levels within a nested JSON structure."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"{\n  a: 'kjzl6cwe1jw...15',\n  b: {\n    c: 'kjzl6cwe1jw...16'\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the stream above, the path from root stream ",(0,r.jsx)(t.code,{children:"kjzl6cwe1jw...14"})," to linked stream ",(0,r.jsx)(t.code,{children:"kjzl6cwe1jw...15"})," is ",(0,r.jsx)(t.code,{children:"/a"})," and the path to linked stream ",(0,r.jsx)(t.code,{children:"kjzl6cwe1jw...16"})," is ",(0,r.jsx)(t.code,{children:"/b/c"}),". Using the StreamID of the root stream and the paths outlined here, we use ",(0,r.jsx)(t.code,{children:"multiQuery()"})," to query all three streams at once without needing to explicitly know the StreamIDs of the two linked streams."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"multiQuery()"})," below will return a map with all three streams."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const queries = [{\n  streamId: 'kjzl6cwe1jw...14'\n  paths: ['/a', '/b/c']\n}]\nconst streamMap = await ceramic.multiQuery(queries)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"helper-methods",children:(0,r.jsx)(t.strong,{children:"Helper methods"})}),"\n",(0,r.jsxs)(t.p,{children:["To get specific information about the stream that you created or loaded you can use the accessors on the ",(0,r.jsx)(t.code,{children:"Stream"})," class. Below are some examples."]}),"\n",(0,r.jsx)(t.h3,{id:"get-streamid",children:"Get StreamID"}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"stream.id"})," property to get the unique ",(0,r.jsx)(t.code,{children:"StreamID"})," for this stream."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const streamId = stream.id\n"})}),"\n",(0,r.jsx)(t.h3,{id:"get-latest-commit",children:"Get latest commit"}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"stream.commitId"})," property to get latest CommitID of a stream."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const commitId = stream.commitId\n"})}),"\n",(0,r.jsx)(t.h3,{id:"get-all-anchor-commits",children:"Get all anchor commits"}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"stream.anchorCommitIds"})," property to get all CommitIDs which are anchor commits for this stream."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const anchorCommits = stream.anchorCommitIds\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},63883:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>n});var r=s(50959);const i={},a=r.createContext(i);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);