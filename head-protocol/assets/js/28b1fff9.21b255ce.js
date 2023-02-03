"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2627],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>N});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function g(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var m=r.createContext({}),p=function(t){var a=r.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},d=function(t){var a=p(t.components);return r.createElement(m.Provider,{value:a},t.children)},k={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},o=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,d=g(t,["components","mdxType","originalType","parentName"]),o=p(e),N=n,h=o["".concat(m,".").concat(N)]||o[N]||k[N]||i;return e?r.createElement(h,l(l({ref:a},d),{},{components:e})):r.createElement(h,l({ref:a},d))}));function N(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,l=new Array(i);l[0]=o;var g={};for(var m in a)hasOwnProperty.call(a,m)&&(g[m]=a[m]);g.originalType=t,g.mdxType="string"==typeof t?t:n,l[1]=g;for(var p=2;p<i;p++)l[p]=e[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}o.displayName="MDXCreateElement"},7642:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var r=e(7462),n=(e(7294),e(3905));const i={sidebar_label:"Transactions Costs",sidebar_position:3},l="Transactions Costs",g={unversionedId:"transaction-cost",id:"transaction-cost",title:"Transactions Costs",description:"Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using arbitrary values and results are not fully deterministic and comparable to previous runs.",source:"@site/benchmarks/transaction-cost.md",sourceDirName:".",slug:"/transaction-cost",permalink:"/head-protocol/benchmarks/transaction-cost",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/benchmarks/transaction-cost.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Transactions Costs",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Plutus Merkle-Tree Benchmarks",permalink:"/head-protocol/benchmarks/mt-benchmarks"},next:{title:"Test Results for hydra-cluster",permalink:"/head-protocol/benchmarks/tests/hydra-cluster/hspec-results"}},m={},p=[{value:"Script summary",id:"script-summary",level:2},{value:"Cost of Init Transaction",id:"cost-of-init-transaction",level:2},{value:"Cost of Commit Transaction",id:"cost-of-commit-transaction",level:2},{value:"Cost of CollectCom Transaction",id:"cost-of-collectcom-transaction",level:2},{value:"Cost of Close Transaction",id:"cost-of-close-transaction",level:2},{value:"Cost of Contest Transaction",id:"cost-of-contest-transaction",level:2},{value:"Cost of Abort Transaction",id:"cost-of-abort-transaction",level:2},{value:"Cost of FanOut Transaction",id:"cost-of-fanout-transaction",level:2}],d={toc:p};function k(t){let{components:a,...e}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transactions-costs"},"Transactions Costs"),(0,n.kt)("p",null,"Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using ",(0,n.kt)("inlineCode",{parentName:"p"},"arbitrary")," values and results are not fully deterministic and comparable to previous runs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metadata"),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Generated at")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-03 13:17:56.999895409 UTC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. memory units")),(0,n.kt)("td",{parentName:"tr",align:"left"},"14000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. CPU units")),(0,n.kt)("td",{parentName:"tr",align:"left"},"10000000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. tx size (kB)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"16384")))),(0,n.kt)("h2",{id:"script-summary"},"Script summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Hash"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Size (Bytes)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdInitial"),(0,n.kt)("td",{parentName:"tr",align:"left"},"31eac6a7270af7736ee56d0447e7c8512a54ef8aafd67da5e33f3b2f"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5530")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdCommit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"08bb32edf316341c4fa7b0e3ed0e77bccb7f1d3b687c10d1b1e48969"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2961")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdHead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"492a5736cefa8ec8dd72cbfef83da238c711f2a8c1b1f07d33b3678e"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9969")))),(0,n.kt)("h2",{id:"cost-of-init-transaction"},"Cost of Init Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4987"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5188"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5393"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.57")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5802"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.62")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6829"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.76")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14005"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.83")))),(0,n.kt)("h2",{id:"cost-of-commit-transaction"},"Cost of Commit Transaction"),(0,n.kt)("p",null," Currently only one UTxO per commit allowed (this is about to change soon)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"633"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.41")))),(0,n.kt)("h2",{id:"cost-of-collectcom-transaction"},"Cost of CollectCom Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13666"),(0,n.kt)("td",{parentName:"tr",align:"right"},"23.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.36"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14026"),(0,n.kt)("td",{parentName:"tr",align:"right"},"42.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14262"),(0,n.kt)("td",{parentName:"tr",align:"right"},"62.54"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.84"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.46")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14721"),(0,n.kt)("td",{parentName:"tr",align:"right"},"89.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35.90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.78")))),(0,n.kt)("h2",{id:"cost-of-close-transaction"},"Cost of Close Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10565"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.84"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.78")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10730"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.59"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10937"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.33"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.83")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11298"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.88")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11494"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15456"),(0,n.kt)("td",{parentName:"tr",align:"right"},"54.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.45")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15660"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.50")))),(0,n.kt)("h2",{id:"cost-of-contest-transaction"},"Cost of Contest Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10560"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.76"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.78")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10725"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10892"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17.66"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.82")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11288"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.80"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.65"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.88")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12114"),(0,n.kt)("td",{parentName:"tr",align:"right"},"27.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.99")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15454"),(0,n.kt)("td",{parentName:"tr",align:"right"},"54.51"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.45")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16281"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61.08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.28"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.56")))),(0,n.kt)("h2",{id:"cost-of-abort-transaction"},"Cost of Abort Transaction"),(0,n.kt)("p",null,"Some variation because of random mixture of still initial and already committed outputs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15064"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.59"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15063"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.24")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15386"),(0,n.kt)("td",{parentName:"tr",align:"right"},"58.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.48")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15910"),(0,n.kt)("td",{parentName:"tr",align:"right"},"88.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.84")))),(0,n.kt)("h2",{id:"cost-of-fanout-transaction"},"Cost of FanOut Transaction"),(0,n.kt)("p",null,"Involves spending head output and burning head tokens. Uses ada-only UTxO for better comparability."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14945"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.39"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.90"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.94")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14848"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.37"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.94")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14949"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.50"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14961"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15139"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.41"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15434"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.30")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16368"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.82")))))}k.isMDXComponent=!0}}]);