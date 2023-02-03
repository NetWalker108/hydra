"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:2,title:"2. Reactive Core\n",authors:[],tags:["Accepted"]},i=void 0,l={permalink:"/head-protocol/fr/adr/2",source:"@site/adr/2021-06-06_002-reactive-core.md",title:"2. Reactive Core\n",description:"Status",date:"2021-06-06T00:00:00.000Z",formattedDate:"6 juin 2021",tags:[{label:"Accepted",permalink:"/head-protocol/fr/adr/tags/accepted"}],readingTime:.985,truncated:!1,authors:[],frontMatter:{slug:"2",title:"2. Reactive Core\n",authors:[],tags:["Accepted"]},prevItem:{title:"1. Record Architecture Decisions\n",permalink:"/head-protocol/fr/adr/1"},nextItem:{title:"3. Asynchronous Duplex Client API",permalink:"/head-protocol/fr/adr/3"}},c={authorsImageUrls:[]},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"We are looking for a way of expressing the Hydra Head protocol logic in a Hydra node."),(0,a.kt)("p",null,"The Hydra Head protocol is defined as a ",(0,a.kt)("em",{parentName:"p"},"State machine")," in the paper, whose transitions are inputs that come from different sources which can emit outputs to other instances of the state machine or the mainchain. See the ",(0,a.kt)("a",{parentName:"p",href:"https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/"},"FC2021")," paper for details"),(0,a.kt)("p",null,"It should also be easy to review / feed-back to researchers."),(0,a.kt)("p",null,"We are familiar with React's ",(0,a.kt)("a",{parentName:"p",href:"https://react-redux.js.org/"},"redux")," way of structuring applications, which in turn is inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://guide.elm-lang.org/architecture/"},"The Elm Architecture")," which itself is a simplification of ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_reactive_programming"},"Functional Reactive Programming")," principles."),(0,a.kt)("p",null,"We have experienced benefits with ",(0,a.kt)("em",{parentName:"p"},"Event Sourcing")," in the domain of persistence in the past"),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"Implements the Hydra Head core logic as a ",(0,a.kt)("em",{parentName:"p"},"loop")," that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Consumes ",(0,a.kt)("em",{parentName:"li"},"input events")," from an event ",(0,a.kt)("em",{parentName:"li"},"queue"),","),(0,a.kt)("li",{parentName:"ol"},"Applies each ",(0,a.kt)("em",{parentName:"li"},"event")," to the current ",(0,a.kt)("em",{parentName:"li"},"state")," yielding potentially an ",(0,a.kt)("em",{parentName:"li"},"updated state")," and a sequence of ",(0,a.kt)("em",{parentName:"li"},"effects"),","),(0,a.kt)("li",{parentName:"ol"},"Execute all ",(0,a.kt)("em",{parentName:"li"},"effects"),".")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"The internal state is only ever changed through ",(0,a.kt)("em",{parentName:"p"},"Events"),"."),(0,a.kt)("p",null,"The core state machine ",(0,a.kt)("em",{parentName:"p"},"transition")," function ",(0,a.kt)("em",{parentName:"p"},"is pure")," and reviewing it requires minimal Haskell knowledge."),(0,a.kt)("p",null,"Side-effects are all handled at the level of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node"),"."))}u.isMDXComponent=!0}}]);