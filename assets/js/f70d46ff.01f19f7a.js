"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5579],{45809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=t(11527),r=t(63883),o=t(37421),a=t(81779);const i={},l="Server Configurations",c={id:"composedb/guides/composedb-server/server-configurations",title:"Server Configurations",description:"Manage the configurations for your ComposeDB server.",source:"@site/docs/composedb/guides/composedb-server/server-configurations.mdx",sourceDirName:"composedb/guides/composedb-server",slug:"/composedb/guides/composedb-server/server-configurations",permalink:"/docs/composedb/guides/composedb-server/server-configurations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Running in the Cloud",permalink:"/docs/composedb/guides/composedb-server/running-in-the-cloud"},next:{title:"Access Ceramic Mainnet",permalink:"/docs/composedb/guides/composedb-server/access-mainnet"}},d={},u=[{value:"Default configurations",id:"default-configurations",level:2},{value:"Key configurations",id:"key-configurations",level:3},{value:"Changing configurations",id:"changing-configurations",level:3},{value:"Network",id:"network",level:2},{value:"Available networks",id:"available-networks",level:3},{value:"Setting the network",id:"setting-the-network",level:3},{value:"Changing networks",id:"changing-networks",level:3},{value:"SQL Database",id:"sql-database",level:2},{value:"Available SQL databases",id:"available-sql-databases",level:3},{value:"History Sync",id:"history-sync",level:2},{value:"IPFS Process",id:"ipfs-process",level:2},{value:"Available Configurations",id:"available-configurations",level:3},{value:"Persistent Storage",id:"persistent-storage",level:3},{value:"IPFS Datastore",id:"ipfs-datastore",level:3},{value:"Ceramic State Store",id:"ceramic-state-store",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"server-configurations",children:"Server Configurations"}),"\n",(0,s.jsx)(n.p,{children:"Manage the configurations for your ComposeDB server."}),"\n",(0,s.jsx)(n.h2,{id:"default-configurations",children:"Default configurations"}),"\n",(0,s.jsxs)(n.p,{children:["When you start the daemon using the ",(0,s.jsx)(n.code,{children:"ceramic daemon"})," command, if a configuration file is not present in the expected path ",(0,s.jsx)(n.code,{children:"$HOME/.ceramic/daemon.config.json"}),", the command will create a new ",(0,s.jsx)(n.code,{children:"daemon.config.json"})," file with the following defaults:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "anchor": {\n        "ethereum-rpc-url": "https://eg_infura_endpoint" // Replace with an Ethereum RPC endpoint to avoid rate limiting\n    },\n    "http-api": {\n        "cors-allowed-origins": [\n            ".*"\n        ]\n    },\n    "ipfs": {\n        "mode": "remote",\n        "host": "http://ipfs_ip_address:5001"\n    },\n    "logger": {\n        "log-level": 2, // 0 is most verbose\n        "log-to-files": true\n    },\n    "network": {\n        "name": "mainnet", // Connect to mainnet, testnet-clay, or dev-unstable\n    },\n    "node": {},\n    "state-store": { \n        "mode": "fs", // volume storage option shared here, can be replaced by S3 mode & bucket\n\t\t\t\t"local-directory": "/path_for_ceramic_statestore", // Defaults to $HOME/.ceramic/statestore\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"key-configurations",children:"Key configurations"}),"\n",(0,s.jsx)(n.p,{children:"These are the configurations you should pay close attention to, described below on this page:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Networks & Environments"}),"\n",(0,s.jsx)(n.li,{children:"SQL Database"}),"\n",(0,s.jsx)(n.li,{children:"History Sync"}),"\n",(0,s.jsx)(n.li,{children:"IPFS Process"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"changing-configurations",children:"Changing configurations"}),"\n",(0,s.jsx)(n.p,{children:"ComposeDB configurations can be set in two places: using the config file and using the CLI. Although we recommend making changes using the config file, for completeness this guide demonstrates both."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Using the ",(0,s.jsx)(n.code,{children:"daemon.config.json"})," file (recommended)"]})}),"\n",(0,s.jsx)(n.p,{children:"The config file is a JSON file used to set durable, long-lived node configurations. After making changes to the config file, be sure to save your changes then restart the daemon for them to take effect."}),"\n",(0,s.jsx)(n.p,{children:"This is the preferred method for setting configs, especially for stable production usage."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using the CLI"})}),"\n",(0,s.jsx)(n.p,{children:"The CLI can be used to set temporary, short-lived node configurations. To do this, pass designated CLI flags to the daemon at startup. This method is only recommended in a scripted test environment or when starting the daemon in a singleton way for test purposes."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"When using the CLI, always execute the same flags each time the node restarts or else you will reset to default settings."})}),"\n",(0,s.jsx)(n.h2,{id:"network",children:"Network"}),"\n",(0,s.jsx)(n.p,{children:"Networks are collections of nodes that communicate, store data, and share data. When running a ComposeDB server, you need to decide which network it will connect to."}),"\n",(0,s.jsx)(n.h3,{id:"available-networks",children:"Available networks"}),"\n",(0,s.jsxs)(n.p,{children:["Each network has its own string designation. Find more information about the networks ",(0,s.jsx)(n.a,{href:"https://developers.ceramic.network/learn/networks/",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mainnet"}),(0,s.jsx)(n.td,{children:"Primary public production network"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"testnet-clay"}),(0,s.jsx)(n.td,{children:"Primary public test network"}),(0,s.jsx)(n.td,{children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dev-unstable"}),(0,s.jsx)(n.td,{children:"Core protocol debugging network, very experimental"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"local"}),(0,s.jsx)(n.td,{children:"Local instance for development"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Networks are completely isolated, distinct development environments. Models and data that exist on one network ",(0,s.jsx)(n.em,{children:"do not"})," exist on other networks, and are not portable."]})}),"\n",(0,s.jsx)(n.h3,{id:"setting-the-network",children:"Setting the network"}),"\n",(0,s.jsxs)(n.p,{children:["The system will default to ",(0,s.jsx)(n.code,{children:"testnet-clay"})," if a network is not set."]}),"\n",(0,s.jsxs)(o.Z,{defaultValue:"config",groupId:"config-or-cli",values:[{label:"Config File",value:"config"},{label:"CLI",value:"cli"}],children:[(0,s.jsx)(a.Z,{value:"config",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"network": {\n    "name": "testnet-clay"\n  }\n'})})}),(0,s.jsx)(a.Z,{value:"cli",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Connect to testnet-clay network on startup\n\nceramic daemon --network "testnet-clay"\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"changing-networks",children:"Changing networks"}),"\n",(0,s.jsxs)(n.p,{children:["To switch from one network to another, such as from ",(0,s.jsx)(n.code,{children:"testnet-clay"})," to ",(0,s.jsx)(n.code,{children:"mainnet"}),":"]}),"\n",(0,s.jsxs)(o.Z,{defaultValue:"config",groupId:"config-or-cli",values:[{label:"Config File",value:"config"},{label:"CLI",value:"cli"}],children:[(0,s.jsx)(a.Z,{value:"config",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"network": {\n\t\t"name": "mainnet"\n\t}\n'})})}),(0,s.jsx)(a.Z,{value:"cli",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ceramic daemon --network "mainnet"\n'})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Be mindful that models and data are not portable across networks."}),(0,s.jsx)(n.p,{children:"If you seek to switch networks locally you need to either drop or move your default DB. To prevent data loss the preferred way is to simply move/rename the database."}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Stop your node/ceramic daemon"}),"\n",(0,s.jsx)(n.li,{children:"Depending on your default database configuration excute the folowing commands"}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SQLite"}),": ",(0,s.jsx)(n.code,{children:"mv ~/.ceramic/indexing.sqlite ~/.ceramic/indexing.sqlite.NETWORK"})]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Postgres"}),":"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"psql postgres"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ALTER DATABASE ceramic RENAME TO ceramic_NETWORK; \\q"})}),"\n"]}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Restart your ceramic daemon wth the newly desired network config and compose DB will setup the new default environment automatically"}),"\n"]}),(0,s.jsxs)(n.p,{children:["To switch back between networks simply follow the above steps again and return the desired backup to the default values:\n",(0,s.jsx)(n.strong,{children:"SQLITE"}),": ",(0,s.jsx)(n.code,{children:"~./ceramic/indexing.sqlite"}),"\n",(0,s.jsx)(n.strong,{children:"Postgres"}),": Default DB Name: ",(0,s.jsx)(n.code,{children:"ceramic"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"sql-database",children:"SQL Database"}),"\n",(0,s.jsx)(n.p,{children:"One of the most important configurations that you must set up is your database. This database will be used to store an index of data for all models used by your app."}),"\n",(0,s.jsx)(n.h3,{id:"available-sql-databases",children:"Available SQL databases"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Postgres"}),(0,s.jsx)(n.td,{children:"recommended for everything besides early prototyping"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQLite"}),(0,s.jsx)(n.td,{children:"Default option; can only be run locally, recommended for early prototyping"}),(0,s.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Only Postgres is currently supported for production usage."})}),"\n",(0,s.jsx)(n.h2,{id:"history-sync",children:"History Sync"}),"\n",(0,s.jsxs)(n.p,{children:["By default, Ceramic nodes will only index documents they observe using pubsub messages. In order to index documents created before the node was deployed or configured to index some models, ",(0,s.jsx)(n.strong,{children:"History Sync"})," needs to be enabled on the Ceramic node, in the ",(0,s.jsx)(n.code,{children:"daemon.config.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n\t...\n\t"indexing": {\n    ...\n\t\t"enable-historical-sync": true\n\t}\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ipfs-process",children:"IPFS Process"}),"\n",(0,s.jsx)(n.h3,{id:"available-configurations",children:"Available Configurations"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default value?"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bundled"}),(0,s.jsx)(n.td,{children:"IPFS running in same compute process as Ceramic; recommended for early prototyping"}),(0,s.jsx)(n.td,{children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"remote"}),(0,s.jsx)(n.td,{children:"IPFS running in separate compute process; recommended for production and everything besides early prototyping"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"persistent-storage",children:"Persistent Storage"}),"\n",(0,s.jsxs)(n.p,{children:["To run a Ceramic node in production, it is critical to persist the\xa0",(0,s.jsx)(n.a,{href:"../../../protocol/js-ceramic/guides/ceramic-nodes/running-cloud#ceramic-state-store",children:"Ceramic state store"}),"\xa0and the\xa0",(0,s.jsx)(n.a,{href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec",children:"IPFS datastore"}),". The form of storage you choose should also be configured for disaster recovery with data redundancy, and some form of snapshotting and/or backups."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Loss of this data can result in permanent loss of Ceramic streams and will cause your node to be in a corrupt state."})}),"\n",(0,s.jsxs)(n.p,{children:["The Ceramic state store and IPFS datastore are stored on your machine's filesystem by default. The Ceramic state store defaults to\xa0",(0,s.jsx)(n.code,{children:"$HOME/.ceramic/statestore"}),". The IPFS datastore defaults to\xa0",(0,s.jsx)(n.code,{children:"ipfs/blocks"}),"\xa0located wherever you run IPFS."]}),"\n",(0,s.jsx)(n.p,{children:"The fastest way to ensure data persistence is by mounting a persistent volume to your instances and configuring the Ceramic and IPFS nodes to write to the mount location. The mounted volume should be configured such that the data persists if the instance shuts down."}),"\n",(0,s.jsxs)(n.p,{children:["You can also use AWS S3 for data storage which is supported for both Ceramic and IPFS. Examples of the configuration are shared on the Ceramic docs ",(0,s.jsx)(n.a,{href:"../../../protocol/js-ceramic/guides/ceramic-nodes/running-cloud#example-aws-s3-policies",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"ipfs-datastore",children:"IPFS Datastore"}),"\n",(0,s.jsx)(n.p,{children:"The IPFS datastore stores the raw IPFS blocks that make up Ceramic streams. To prevent data corruption, use environment variables written to your profile file, or otherwise injected into your environment on start so that the datastore location does not change between reboots."}),"\n",(0,s.jsxs)(n.p,{children:["Note: Switching between data storage locations is an advanced feature and should be avoided. Depending on the sharding implementation you may need to do a data migration first. See\xa0",(0,s.jsx)(n.a,{href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec",children:"t"}),"he ",(0,s.jsx)(n.a,{href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec",children:"datastore spec"}),"\xa0for more information."]}),"\n",(0,s.jsx)(n.h3,{id:"ceramic-state-store",children:"Ceramic State Store"}),"\n",(0,s.jsx)(n.p,{children:"The Ceramic State Store holds state for pinned streams and the acts as a cache for the Ceramic streams that your node creates or loads. To ensure that the data you create with your Ceramic node does not get lost you must pin streams you care about and you must ensure that the state store does not get deleted."}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/composedb/guides/composedb-server/access-mainnet",children:"Access Mainnet"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},81779:(e,n,t)=>{t.d(n,{Z:()=>a});t(50959);var s=t(45924);const r={tabItem:"tabItem_e7Wc"};var o=t(11527);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,a),hidden:t,children:n})}},37421:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(50959),r=t(45924),o=t(71988),a=t(28903),i=t(739),l=t(99965),c=t(43251),d=t(76698);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),x=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=t(12049);const x={tabList:"tabList_c3am",tabItem:"tabItem_iDuG"};var j=t(11527);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==s&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},63883:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(50959);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);