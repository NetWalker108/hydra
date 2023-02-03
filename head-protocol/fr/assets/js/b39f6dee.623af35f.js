"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:1,title:"1. Record Architecture Decisions\n",authors:[],tags:["Accepted"]},c=void 0,i={permalink:"/head-protocol/fr/adr/1",source:"@site/adr/2021-06-05_001-record-architectural-decisions.md",title:"1. Record Architecture Decisions\n",description:"Status",date:"2021-06-05T00:00:00.000Z",formattedDate:"5 juin 2021",tags:[{label:"Accepted",permalink:"/head-protocol/fr/adr/tags/accepted"}],readingTime:.515,truncated:!1,authors:[],frontMatter:{slug:"1",title:"1. Record Architecture Decisions\n",authors:[],tags:["Accepted"]},nextItem:{title:"2. Reactive Core\n",permalink:"/head-protocol/fr/adr/2"}},l={authorsImageUrls:[]},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"We are in search for a means to describe our technical architecture."),(0,o.kt)("p",null,"We are a small team working in a very lean and agile way (XP), so we naturally prefer also light-weight documentation methods which also accomodate change easily."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We will use ",(0,o.kt)("em",{parentName:"li"},"Architecture Decision Records"),", as described by Michael Nygard in this ",(0,o.kt)("a",{parentName:"li",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"article"),"."),(0,o.kt)("li",{parentName:"ul"},"We will follow the convention of storing those ADRs as Markdown formatted documents stored under ",(0,o.kt)("inlineCode",{parentName:"li"},"docs/adr")," directory, as exemplified in Nat Pryce's ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/npryce/adr-tools"},"adr-tools"),". This does not imply we will be using ",(0,o.kt)("inlineCode",{parentName:"li"},"adr-tools")," itself.")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"See Michael Nygard's article, linked above."))}d.isMDXComponent=!0}}]);