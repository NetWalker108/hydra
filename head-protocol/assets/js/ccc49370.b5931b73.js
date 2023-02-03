(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6103],{8665:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var s=a(7294),c=a(6010),r=a(2773),d=a(9960);const l="sidebar_a9qW",o="sidebarItemTitle_uKok",n="sidebarItemList_Kvuv",m="sidebarItem_CF0Q",i="sidebarItemLink_miNk",b="sidebarItemLinkActive_RRTD";var p=a(5999);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:s.createElement("nav",{className:(0,c.Z)(l,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},s.createElement("div",{className:(0,c.Z)(o,"margin-bottom--md")},t.title),s.createElement("ul",{className:n},t.items.map((e=>s.createElement("li",{key:e.permalink,className:m},s.createElement(d.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:b},e.title))))))}function h(e){const{sidebar:t,toc:a,children:d,...l}=e,o=t&&t.items.length>0;return s.createElement(r.Z,l,s.createElement("div",{className:"container margin-vert--lg"},s.createElement("div",{className:"row"},o&&s.createElement("aside",{className:"col col--3"},s.createElement(u,{sidebar:t})),s.createElement("main",{className:(0,c.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},d),a&&s.createElement("div",{className:"col col--2"},a))))}},9360:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var s=a(7294),c=a(1217),r=a(8665),d=a(9538),l=a(7462),o=a(5999),n=a(1750);function m(e){const{nextItem:t,prevItem:a}=e;return s.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},s.createElement("div",{className:"pagination-nav__item"},a&&s.createElement(n.Z,(0,l.Z)({},a,{subLabel:s.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),s.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&s.createElement(n.Z,(0,l.Z)({},t,{subLabel:s.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var i=a(650),b=a(1575);function p(e){const{content:t,sidebar:a}=e,{assets:l,metadata:o}=t,{title:n,description:p,nextItem:u,prevItem:h,date:f,tags:g,authors:j,frontMatter:v}=o,{hide_table_of_contents:A,keywords:T,toc_min_heading_level:E,toc_max_heading_level:U}=v,H=l.image??v.image;return s.createElement(r.Z,{wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogPostPage,sidebar:a,toc:!A&&t.toc&&t.toc.length>0?s.createElement(b.Z,{toc:t.toc,minHeadingLevel:E,maxHeadingLevel:U}):void 0},s.createElement(c.Z,{title:n,description:p,keywords:T,image:H},s.createElement("meta",{property:"og:type",content:"article"}),s.createElement("meta",{property:"article:published_time",content:f}),j.some((e=>e.url))&&s.createElement("meta",{property:"article:author",content:j.map((e=>e.url)).filter(Boolean).join(",")}),g.length>0&&s.createElement("meta",{property:"article:tag",content:g.map((e=>e.label)).join(",")})),s.createElement(d.Z,{frontMatter:v,assets:l,metadata:o,isBlogPostPage:!0},s.createElement(t,null)),(u||h)&&s.createElement(m,{nextItem:u,prevItem:h}))}},7440:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var s=a(7462),c=a(7294),r=a(5742),d=a(9960),l=a(1736),o=a(9649),n=a(6010),m=a(650);const i="details_BAp3";function b(e){let{...t}=e;return c.createElement(m.PO,(0,s.Z)({},t,{className:(0,n.Z)("alert alert--info",i,t.className)}))}const p={head:e=>{const t=c.Children.map(e.children,(e=>function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){const{mdxType:t,originalType:a,...s}=e.props;return c.createElement(e.props.originalType,s)}return e}(e)));return c.createElement(r.Z,e,t)},code:e=>{const t=["a","b","big","i","span","em","strong","sup","sub","small"];return c.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||c.isValidElement(e)&&t.includes(e.props.mdxType)))?c.createElement("code",e):c.createElement(l.Z,e)},a:e=>c.createElement(d.Z,e),pre:e=>{var t;return c.createElement(l.Z,(0,c.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:e=>{const t=c.Children.toArray(e.children),a=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=c.createElement(c.Fragment,null,t.filter((e=>e!==a)));return c.createElement(b,(0,s.Z)({},e,{summary:a}),r)},h1:e=>c.createElement(o.Z,(0,s.Z)({as:"h1"},e)),h2:e=>c.createElement(o.Z,(0,s.Z)({as:"h2"},e)),h3:e=>c.createElement(o.Z,(0,s.Z)({as:"h3"},e)),h4:e=>c.createElement(o.Z,(0,s.Z)({as:"h4"},e)),h5:e=>c.createElement(o.Z,(0,s.Z)({as:"h5"},e)),h6:e=>c.createElement(o.Z,(0,s.Z)({as:"h6"},e))}},1575:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(7462),c=a(7294),r=a(6010),d=a(5002);const l="tableOfContents_cNA8";function o(e){let{className:t,...a}=e;return c.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar",t)},c.createElement(d.Z,(0,s.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var s=a(7462),c=a(7294),r=a(650);function d(e){let{toc:t,className:a,linkClassName:s,isChild:r}=e;return t.length?c.createElement("ul",{className:r?void 0:a},t.map((e=>c.createElement("li",{key:e.id},c.createElement("a",{href:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),c.createElement(d,{isChild:!0,toc:e.children,className:a,linkClassName:s}))))):null}function l(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:n,maxHeadingLevel:m,...i}=e;const b=(0,r.LU)(),p=n??b.tableOfContents.minHeadingLevel,u=m??b.tableOfContents.maxHeadingLevel,h=(0,r.b9)({toc:t,minHeadingLevel:p,maxHeadingLevel:u}),f=(0,c.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:u}}),[l,o,p,u]);return(0,r.Si)(f),c.createElement(d,(0,s.Z)({toc:h,className:a,linkClassName:l},i))}},198:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var s=a(7294);const c=JSON.parse('{"site":{"lastUpdatedAt":"2022-12-19T17:20:06+01:00"},"adr/1":{"source":{"lastUpdatedAt":"2022-07-22T09:16:51+02:00","commitHash":"64a94e277cea82c0302eb15b1fae7278c93e75f9"}},"adr/2":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/3":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/4":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/5":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/6":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/7":{"source":{"lastUpdatedAt":"2022-04-19T11:02:00+02:00","commitHash":"6e6d3635017291f8cadb9f6c033aa1dad8e78f90"}},"adr/8":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/9":{"source":{"lastUpdatedAt":"2022-04-21T16:12:57+02:00","commitHash":"dc52442bd5967196db5a8003f923b6977437fd7f"}},"adr/10":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/11":{"source":{"lastUpdatedAt":"2022-03-09T18:19:50+01:00","commitHash":"477d1cbab7a54793edc4c91ce3ca1f579db5c07c"}},"adr/12":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"adr/13":{"source":{"lastUpdatedAt":"2022-04-19T11:02:28+02:00","commitHash":"d15d4d3a19df8496d3841c2d4bbdf1317886fc62"}},"adr/14":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"adr/15":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"adr/16":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"adr/17":{"source":{"lastUpdatedAt":"2022-04-19T17:42:57+02:00","commitHash":"24ea921c16bffdd86f4fbc1c2d42631e3318f53d"}},"adr/18":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"adr/19":{"source":{"lastUpdatedAt":"2022-08-01T16:40:59+02:00","commitHash":"985df773ef673ac4fcc4b790b4428beb617aa842"}},"adr/20":{"source":{"lastUpdatedAt":"2022-09-13T13:23:04+02:00","commitHash":"a97f8b3652ff15cc2a92cb4eac381b186663f1aa"}},"adr/21":{"source":{"lastUpdatedAt":"2022-12-19T17:20:06+01:00","commitHash":"50df255eca40ba84ddb7284d8da867b5a1a939b3"}},"adr/22":{"source":{"lastUpdatedAt":"2022-12-13T09:50:56+00:00","commitHash":"48da70c7c2b29331328fb06fe47c0ab98fd72069"}},"benchmarks":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"benchmarks/mt-benchmarks":{"source":{"lastUpdatedAt":"","commitHash":""}},"benchmarks/tests/hydra-cluster/hspec-results":{"source":{"lastUpdatedAt":"","commitHash":""}},"benchmarks/tests/hydra-node/hspec-results":{"source":{"lastUpdatedAt":"","commitHash":""}},"benchmarks/tests/hydra-tui/hspec-results":{"source":{"lastUpdatedAt":"","commitHash":""}},"benchmarks/tests/plutus-cbor/hspec-results":{"source":{"lastUpdatedAt":"","commitHash":""}},"benchmarks/tests/plutus-merkle-tree/hspec-results":{"source":{"lastUpdatedAt":"","commitHash":""}},"benchmarks/transaction-cost":{"source":{"lastUpdatedAt":"","commitHash":""}},"core-concepts/behavior":{"source":{"lastUpdatedAt":"2022-11-17T15:24:24+01:00","commitHash":"3936cbf6c88a1425df2d531fed7da9af12b70150"}},"core-concepts/faq":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"core-concepts":{"source":{"lastUpdatedAt":"2022-08-04T12:46:03+02:00","commitHash":"c5a24765e18c76fde3ab877271198324cf879627"}},"core-concepts/layer-two":{"source":{"lastUpdatedAt":"2022-03-18T18:40:15+01:00","commitHash":"c81338744b3815303cdad22a25511ced7570f127"}},"core-concepts/networking":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"core-concepts/rollbacks":{"source":{"lastUpdatedAt":"2022-04-19T15:30:24+02:00","commitHash":"fa7ece17490d3b12eed371f92fb9e6331af3f32d"}},"docs/getting-started/demo":{"source":{"lastUpdatedAt":"2022-08-25T19:24:56+02:00","commitHash":"40dc912488f0023e14cf519d953738b20b67d146"},"fr":{"lastUpdatedAt":"2022-08-26T08:51:11+02:00","commitHash":"480f2eb7c8777bae119ac551bbc614bc8b8a5066"},"ja":{"lastUpdatedAt":"2022-08-25T19:31:47+02:00","commitHash":"a144c4d5694732205a775c57b0794bcd764d54b4"}},"docs/getting-started/demo/with-docker":{"source":{"lastUpdatedAt":"2022-08-25T20:05:27+02:00","commitHash":"e0622139da423d193da45c3cef982b1d78048672"},"fr":{"lastUpdatedAt":"2022-08-26T08:51:11+02:00","commitHash":"480f2eb7c8777bae119ac551bbc614bc8b8a5066"},"ja":{"lastUpdatedAt":"2022-08-25T20:05:27+02:00","commitHash":"e0622139da423d193da45c3cef982b1d78048672"}},"docs/getting-started/demo/without-docker":{"source":{"lastUpdatedAt":"2022-12-07T10:58:28+01:00","commitHash":"8321d8a01b8d15069c5ddea76495927d4865f08c"},"ja":{"lastUpdatedAt":"2022-12-07T10:58:28+01:00","commitHash":"8321d8a01b8d15069c5ddea76495927d4865f08c"}},"docs/getting-started/developing-on-hydra":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"docs/getting-started/glossary":{"source":{"lastUpdatedAt":"2022-09-23T15:53:46+02:00","commitHash":"baee5fb9369c7a27f3c3ead8a2a8423ec2308a59"}},"docs/getting-started":{"source":{"lastUpdatedAt":"2022-03-18T18:40:15+01:00","commitHash":"c81338744b3815303cdad22a25511ced7570f127"},"fr":{"lastUpdatedAt":"2022-05-21T09:28:11+02:00","commitHash":"7ebee872dbf4563035a1fbb394afbd4ae85b487f"},"ja":{"lastUpdatedAt":"2022-07-07T22:33:21+09:00","commitHash":"ff12ae270baadd05eecf1752f5357663db2083b2"}},"docs/getting-started/installation":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"},"ja":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"docs/getting-started/quickstart":{"source":{"lastUpdatedAt":"2022-12-19T17:20:06+01:00","commitHash":"50df255eca40ba84ddb7284d8da867b5a1a939b3"},"ja":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"docs/getting-started/troubleshooting":{"source":{"lastUpdatedAt":"2022-11-29T09:29:55+01:00","commitHash":"7d0f160284a1c6f70ea4dc79adee3f12636499f0"}},"docs/haskell_packages":{"source":{"lastUpdatedAt":"2022-03-24T09:57:17+01:00","commitHash":"2df65c46353e7f3f813551755df6cc0db997d6d1"},"fr":{"lastUpdatedAt":"2022-05-21T09:28:11+02:00","commitHash":"7ebee872dbf4563035a1fbb394afbd4ae85b487f"},"ja":{"lastUpdatedAt":"2022-07-13T16:27:27+01:00","commitHash":"9d738b6e4c8f70eff43e8e729873286bbc8de262"}},"docs-benchmarksindex":{"ja":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"docs-core-conceptsfaq":{"ja":{"lastUpdatedAt":"2022-07-08T16:15:21+09:00","commitHash":"c0b2f2dca525b58ea9da94b2ade7225106733102"}},"docs-core-conceptsindex":{"ja":{"lastUpdatedAt":"2022-07-07T22:33:21+09:00","commitHash":"ff12ae270baadd05eecf1752f5357663db2083b2"}},"docs-core-conceptslayer-two":{"ja":{"lastUpdatedAt":"2022-07-07T22:33:21+09:00","commitHash":"ff12ae270baadd05eecf1752f5357663db2083b2"}},"docs-core-conceptsnetworking":{"ja":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"docs-core-conceptsrollbacks":{"ja":{"lastUpdatedAt":"2022-07-07T22:33:21+09:00","commitHash":"ff12ae270baadd05eecf1752f5357663db2083b2"}},"docs-topologiesbasic":{"ja":{"lastUpdatedAt":"2022-07-07T22:33:21+09:00","commitHash":"ff12ae270baadd05eecf1752f5357663db2083b2"}},"docs-topologiesindex":{"ja":{"lastUpdatedAt":"2022-07-07T22:33:21+09:00","commitHash":"ff12ae270baadd05eecf1752f5357663db2083b2"}},"docs-topologiesstar-shaped":{"ja":{"lastUpdatedAt":"2022-07-07T22:33:21+09:00","commitHash":"ff12ae270baadd05eecf1752f5357663db2083b2"}},"monthly/2022-11-monthly":{"source":{"lastUpdatedAt":"2022-12-12T09:56:09+01:00","commitHash":"3ef369dcd97e14f3b004bc8dca9d425219df2253"}},"monthly/2022-12-monthly":{"source":{"lastUpdatedAt":"2023-01-09T09:53:11+01:00","commitHash":"45cb2b34d67f0d5b88385ea2ea633b65c2012cb4"}},"monthly/2023-01-monthly":{"source":{"lastUpdatedAt":"2023-01-30T10:50:20+01:00","commitHash":"6152d368b84961b8713a882b506cccd054fdad5f"}},"standalone/contribute":{"source":{"lastUpdatedAt":"2022-11-30T09:08:20+01:00","commitHash":"fe7fab9f3af4b37ab529c0ec4cbfe0d7ccb71611"}},"topologies/basic":{"source":{"lastUpdatedAt":"2022-03-23T10:27:47+01:00","commitHash":"1ae660159a325caf355a6ae0a09d10b6a1a35acf"}},"topologies/delegated-head":{"source":{"lastUpdatedAt":"2022-11-16T07:37:24+00:00","commitHash":"5806c982dfdd12c7cbaff4df9ef775fe9edddf27"}},"topologies":{"source":{"lastUpdatedAt":"2022-09-22T17:23:22+02:00","commitHash":"1700139001f6edf64bb6f0f78207280cb24f5d14"}},"topologies/star-shaped":{"source":{"lastUpdatedAt":"2022-09-22T17:23:22+02:00","commitHash":"1700139001f6edf64bb6f0f78207280cb24f5d14"}},"use-cases":{"source":{"lastUpdatedAt":"2022-07-06T17:08:14+02:00","commitHash":"79e491ec53d89504ef00be25e9d77c9e58e2e888"}},"use-cases/inter-wallet-payments":{"source":{"lastUpdatedAt":"2022-07-06T17:08:14+02:00","commitHash":"79e491ec53d89504ef00be25e9d77c9e58e2e888"}},"use-cases/nft-auction":{"source":{"lastUpdatedAt":"2022-11-18T09:23:26+01:00","commitHash":"cb8657e254422d0c1bc4878af9a359163c48ce0a"}},"use-cases/pay-per-use-api":{"source":{"lastUpdatedAt":"2022-07-07T09:12:34+02:00","commitHash":"8c24ca271ff0aa2019e82a4fe8e5292b4ef8ea2a"}},"use-cases/poker-game":{"source":{"lastUpdatedAt":"2022-07-07T17:53:28+02:00","commitHash":"f3ae37f2dbd2972f76bc553757dff5cc8328de5f"}}}');var r=a(381),d=a.n(r),l=a(2389),o=a(2263);const n={marginBottom:"1em"};function m(e){let{}=e;const t=(0,o.Z)();if(!(0,l.Z)())return s.createElement(s.Fragment,null);const a=t.siteConfig.baseUrl,r=new URL(window.location.href).pathname.replace(a,"").replace(/\/$/,""),m=t.i18n.defaultLocale,i=t.i18n.currentLocale,b=m!==i;if(void 0===c[r])return s.createElement(s.Fragment,null);const p=c[r],u=p.source,h=p[i];if(void 0===u)return s.createElement(s.Fragment,null);if(b&&h){return(e=>{let{sourceUpdatedAt:t,translationUpdatedAt:a,commitHash:c}=e,r=`https://github.com/input-output-hk/hydra/commit/${c}`;const l=d()(a).diff(t),o=l<0&&s.createElement("b",null,"(\u26a0\ufe0f Warning:\xa0 ",d().duration(l).humanize()," behind default language)");return s.createElement("div",{style:n},"Translation updated:\xa0",s.createElement("a",{href:r},d()(a).fromNow(),o))})({sourceUpdatedAt:u.lastUpdatedAt,translationUpdatedAt:h.lastUpdatedAt,commitHash:h.commitHash})}return(e=>{let{lastUpdatedAt:t,commitHash:a}=e,c=`https://github.com/input-output-hk/hydra/commit/${a}`;return s.createElement("div",{style:n},"Last updated:\xa0",s.createElement("a",{href:c},d()(t).fromNow()))})(u)}},9538:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var s=a(7294),c=a(6010),r=a(3905),d=a(5999),l=a(9960),o=a(4996),n=a(650),m=a(8780),i=a(7440),b=a(6753);const p="blogPostTitle_rzP5",u="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j";var f=a(62);const g="image_o0gy";function j(e){return e.href?s.createElement(l.Z,e):s.createElement(s.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:a,title:c,url:r,imageURL:d,email:l}=t,o=r||l&&`mailto:${l}`||void 0;return s.createElement("div",{className:"avatar margin-bottom--sm"},d&&s.createElement("span",{className:"avatar__photo-link avatar__photo"},s.createElement(j,{href:o},s.createElement("img",{className:g,src:d,alt:a}))),a&&s.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},s.createElement("div",{className:"avatar__name"},s.createElement(j,{href:o,itemProp:"url"},s.createElement("span",{itemProp:"name"},a))),c&&s.createElement("small",{className:"avatar__subtitle",itemProp:"description"},c)))}const A="authorCol_FlmR",T="imageOnlyAuthorRow_trpF",E="imageOnlyAuthorCol_S2np";function U(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return s.createElement("div",{className:(0,c.Z)("margin-top--md margin-bottom--sm",r?T:"row")},t.map(((e,t)=>s.createElement("div",{className:(0,c.Z)(!r&&"col col--6",r?E:A),key:t},s.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function H(e){const t=function(){const{selectMessage:e}=(0,n.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:g,frontMatter:j,assets:v,metadata:A,truncated:T,isBlogPostPage:E=!1}=e,{date:H,formattedDate:k,permalink:y,tags:_,readingTime:Z,title:N,editUrl:w,authors:P}=A,C=v.image??j.image,L=!E&&T,x=_.length>0,z=E?"h1":"h2";return s.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s.createElement("header",null,s.createElement(z,{className:p,itemProp:"headline"},E?N:s.createElement(l.Z,{itemProp:"url",to:y},N)),s.createElement("div",{className:(0,c.Z)(u,"margin-vert--md")},s.createElement("time",{dateTime:H,itemProp:"datePublished"},k),void 0!==Z&&s.createElement(s.Fragment,null," \xb7 ",t(Z))),s.createElement(U,{authors:P,assets:v})),C&&s.createElement("meta",{itemProp:"image",content:a(C,{absolute:!0})}),s.createElement("div",{id:E?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},s.createElement(r.Zo,{components:i.Z},g)),(x||T)&&s.createElement("footer",{className:(0,c.Z)("row docusaurus-mt-lg",{[h]:E})},x&&s.createElement("div",{className:(0,c.Z)("col",{"col--9":L})},s.createElement(f.Z,{tags:_})),E&&w&&s.createElement("div",{className:"col margin-top--sm"},s.createElement(b.Z,{editUrl:w})),L&&s.createElement("div",{className:(0,c.Z)("col text--right",{"col--3":x})},s.createElement(l.Z,{to:A.permalink,"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:N})},s.createElement("b",null,s.createElement(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}var k=a(198);function y(e){return s.createElement(s.Fragment,null,s.createElement(H,e),s.createElement(k.Z,null))}},6700:(e,t,a)=>{var s={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=r,e.exports=c,c.id=6700}}]);