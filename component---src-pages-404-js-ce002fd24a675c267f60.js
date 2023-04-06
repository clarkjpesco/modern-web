"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[883],{3646:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(2788),o=n(7387);const i=(0,r.createGlobalStyle)(["body{background:",";@media (prefers-color-scheme:dark){background:",";}}"],o.n.light.backgroundColor,o.n.dark.backgroundColor);var l=n(1883);const c=[{title:"Courses",icon:"/images/icons/courses.svg",link:"/courses"},{title:"Tutorials",icon:"/images/icons/tutorials.svg",link:"/tutorials"},{title:"Pricing",icon:"/images/icons/pricing.svg",link:"/pricing"},{title:"",icon:"/images/icons/search.svg",link:"/search"},{title:"",icon:"/images/icons/account.svg",link:"/account"}],s=[{title:"Profile",icon:"/images/icons/profile.svg",link:"/profile"},{title:"Settings",icon:"/images/icons/settings.svg",link:"/settings"},{title:"Sign Out",icon:"/images/icons/signout.svg",link:"/logout"}];var d=e=>{const{item:t}=e;return a.createElement(l.Link,{to:t.link,onClick:e.onClick},a.createElement(p,{title:t.title},a.createElement("img",{src:t.icon,alt:t.title}),t.title))};const p=r.default.div.withConfig({displayName:"MenuButton__MenuItem",componentId:"sc-5o1enu-0"})(["color:rgba(255,255,255,0.7);display:grid;grid-template-columns:24px auto;gap:",";align-items:center;padding:10px;transition:0.5s ease-out;border-radius:10px;:hover{background:rgba(255,255,255,0.1);box-shadow:0px 10px 20px rgba(0,0,0,0.1),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);}"],(e=>e.title?"10px":"0px"));var g=e=>{let{isOpen:t}=e;return a.createElement(u,{isOpen:t},s.map(((e,t)=>a.createElement(d,{item:e,key:t}))))};const u=r.default.div.withConfig({displayName:"MenuTooltip__Wrapper",componentId:"sc-1ko4m0a-0"})(["background:rgba(15,14,71,0.3);box-shadow:0px 50px 100px rgba(0,0,0,0.25),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:20px;padding:20px;position:absolute;top:60px;right:30px;opacity:",";z-index:1;display:grid;gap:10px;grid-template-columns:150px;transition:0.3s ease-in-out;visibility:",";transform:",";"],(e=>e.isOpen?1:0),(e=>e.isOpen?"visible":"hidden"),(e=>e.isOpen?"skewY(0deg) rotate(0deg) translateY(0px)":"skewY(-5deg) rotate(5deg) translateY(-30px)"));var m=()=>{const{0:e,1:t}=(0,a.useState)(!1),n=(0,a.useRef)(),r=(0,a.useRef)(),o=n=>{n.preventDefault(),t(!e)},i=e=>{!n.current||n.current.contains(e.target)||r.current.contains(e.target)||(console.log("Document is clicked!"),t(!1))};return(0,a.useEffect)((()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)})),[]),a.createElement(b,null,a.createElement(l.Link,{to:"/"},a.createElement("img",{src:"/images/logos/logo.svg",alt:"logo"})),a.createElement(x,{count:c.length,ref:n},c.map(((e,t)=>"/account"===e.link?a.createElement(d,{item:e,key:t,onClick:e=>o(e)}):a.createElement(d,{item:e,key:t}))),a.createElement(k,null,a.createElement(d,{item:{title:"",icon:"/images/icons/hamburger.svg",link:"/"},onClick:e=>o(e)}))),a.createElement("div",{ref:r},a.createElement(g,{isOpen:e})))};const b=r.default.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-leoys2-0"})(["position:absolute;top:60px;display:grid;grid-template-columns:60px auto;width:100%;justify-content:space-between;padding:0 30px;align-items:center;@media (max-width:768px){top:30px;}@media (max-width:450px){top:20px;padding:0 20px;}"]),x=r.default.div.withConfig({displayName:"Header__MenuWrapper",componentId:"sc-leoys2-1"})(["display:grid;gap:30px;grid-template-columns:repeat(",",auto);@media (max-width:768px){> a{display:none;}grid-template-columns:auto;}"],(e=>e.count)),k=r.default.div.withConfig({displayName:"Header__HamburgerWrapper",componentId:"sc-leoys2-2"})(["display:none;@media (max-width:768px){display:block;}"]);var f=function(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(i,null),a.createElement(m,null),a.createElement("main",null,t))}},5101:function(e,t,n){var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:o,title:i,children:l}=e;const{site:c}=(0,r.useStaticQuery)("63159454"),s=o||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?i+" | "+d:i),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:s}),l)}},7387:function(e,t,n){n.d(t,{n:function(){return a}});const a={light:{text1:"black",text2:"rgba(0, 0, 0, 0.7)",primary:"#3913B8",secondary:"#2FB5FC",backgroundColor:"#F2F6FF",card:{backgroundColor:"rgba(255,255,255,0.6)",boxShadow:"0px 50px 100px rgba(34,39,169,0.3),\n        inset 0 0 0 0.5px rgba(255,255,255,0.6)",backgroundColorFull:"rgba(255,255,255,1)"},cardHover:{backgroundColor:"rgba(68,66,178,0.1)",boxShadow:"inset 0px 0px 0px 0.5px rgba(68,66,178,0.2)"},pricingCard:{backgroundColor:"rgba(255,255,255,0.3)"},status:{backgroundColor:"rgba(68,66,178,0.1)"},modal:{backgroundColor:"rgba(255,255,255,0.6)",boxShadow:"0px 50px 100px rgba(34,79,169,0.3),\n        inset 0 0 0 0.5px rgba(255,255,255,0.6)",backgroundColorFull:"rgba(255,255,255,1)"}},dark:{text1:"white",text2:"rgba(255, 255, 255, 0.7)",backgroundColor:"#1F1F47",card:{backgroundColor:"rgba(25,24,63,0.98)",boxShadow:"0px 30px 60px rgba(0,0,0,0.25),\n          inset 0 0 0 0.5px rgba(255,255,255,0.2)",backgroundColorFull:"rgba(15,14,71,1)"},cardHover:{backgroundColor:"rgba(255,255,255,0.1)",boxShadow:"inset 0px 0px 0px 0.5px rgba(255,255,255,0.2)"},pricingCard:{backgroundColor:"rgba(31,31,71,0.6)"},status:{backgroundColor:"rgba(0,0,0,0.2)"},modal:{backgroundColor:"rgba(50,61,109,0.6)",boxShadow:"0px 50px 100px rgba(0,0,0,0.25),\n          inset 0 0 0 0.5px rgba(255,255,255,0.3)",backgroundColorFull:"rgba(15,14,71,1)"}}}},429:function(e,t,n){n.r(t);var a=n(7294),r=n(3646),o=n(5101);t.default=function(){return a.createElement(r.Z,null,a.createElement(o.Z,{title:"404: Not found"}),a.createElement("h1",null,"404: Not Found"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-ce002fd24a675c267f60.js.map