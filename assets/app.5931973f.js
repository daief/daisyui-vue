import{u as e,r as t,o as n,c as a,a as l,w as o,F as s,b as r,d as i,e as u,f as c,T as p,g as d,v as m,m as v,i as b,h as f,p as y,j as h,R as g,V as _}from"./vendor.44a2ddf6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w={},T=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/daisyui-vue/${e}`)in w)return;w[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var B={setup(){e({title:"INDEX"})}};const C=r("A"),S=r("B");B.render=function(e,r,i,u,c,p){const d=t("router-link");return n(),a(s,null,[l(d,{to:"/nested/deep/a"},{default:o((()=>[C])),_:1}),l(d,{to:"/b"},{default:o((()=>[S])),_:1})],64)};const k=[{name:"components-tab",path:"/components/tab",component:()=>T((()=>import("./tab.9fc700e4.js")),["assets/tab.9fc700e4.js","assets/vendor.44a2ddf6.js"]),props:!0},{name:"components-menu",path:"/components/menu",component:()=>T((()=>import("./menu.ae8be62b.js")),["assets/menu.ae8be62b.js","assets/vendor.44a2ddf6.js"]),props:!0},{name:"components-button",path:"/components/button",component:()=>T((()=>import("./button.1b168d5b.js")),["assets/button.1b168d5b.js","assets/vendor.44a2ddf6.js"]),props:!0},{name:"b",path:"/b",component:()=>T((()=>import("./b.c2f46dde.js")),["assets/b.c2f46dde.js","assets/vendor.44a2ddf6.js"]),props:!0},{name:"index",path:"/",component:B,props:!0}],j=i({name:"Button",props:{type:String,size:{type:String,default:"md"},shape:String,block:Boolean,wide:Boolean,disabled:Boolean,outline:Boolean,active:Boolean,loading:Boolean,noAnimation:Boolean,onClick:Function},setup:(e,{slots:t})=>{const n=u(!1),a=c((()=>e.loading||n.value)),o=c((()=>["btn","glass"===e.type?"glass":e.type?`btn-${e.type}`:"",{[`btn-${e.size}`]:!0,[`btn-${e.shape}`]:!!e.shape,"btn-block":e.block,"btn-wide":e.wide,loading:a.value,"btn-disabled":e.disabled,"btn-active":e.active,"btn-outline":e.outline,"no-animation":e.noAnimation}])),s=async t=>{if(!n.value){n.value=!0;try{await e.onClick(t)}catch(a){}n.value=!1}},r=c((()=>!["circle","square"].includes(e.shape)||!a.value));return()=>{var n;return l("button",{disabled:e.disabled,class:o.value,onClick:s},[r.value?null==(n=t.default)?void 0:n.call(t):null])}}});function A(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!b(e)}i({name:"ButtonGroup",setup:(e,{slots:t})=>()=>l("div",{class:"btn-group"},[t.default?t.default():null])});const E=i({name:"Draw",props:{open:Boolean,placement:String,onClose:Function,disableTeleport:Boolean,mobileOnly:Boolean},inheritAttrs:!1,setup:(e,{attrs:t,slots:n})=>()=>{let a;const o=l(p,{enterFromClass:"opacity-0",enterActiveClass:"transition-opacity",leaveActiveClass:"transition-opacity",leaveToClass:"opacity-0"},A(a=d(l("div",v(t,{class:["drawer",{"h-screen fixed inset-0":!e.disableTeleport,"drawer-end":"right"===e.placement,"drawer-mobile":!!e.mobileOnly}],style:{zIndex:100}}),[l("input",{type:"checkbox",class:"drawer-toggle",checked:e.open},null),l("div",{class:"drawer-content"},[null==n?void 0:n.content()]),l("div",{class:"drawer-side"},[l("div",{class:"drawer-overlay",onClick:e.onClose},null),null==n?void 0:n.default()])]),[[m,!!e.mobileOnly||e.open]]))?a:{default:()=>[a]});return e.disableTeleport?o:l(f,{to:"body"},A(o)?o:{default:()=>[o]})}}),O=i({name:"Menu",props:{compact:Boolean},setup:(e,{slots:t})=>{const n=c((()=>["menu",{compact:e.compact}]));return()=>{var e;return l("ul",{class:n.value},[null==(e=t.default)?void 0:e.call(t)])}}}),L=i({name:"MenuItem",props:{asTitle:Boolean,disabled:Boolean,childWrapper:{type:[String,Boolean],default:!0}},setup:(e,{slots:t})=>{const n=c((()=>[{"menu-title":e.asTitle,disabled:e.disabled}])),a=c((()=>!0===e.childWrapper?e.asTitle?"span":"a":!1===e.childWrapper?null:e.childWrapper));return()=>{var e;const o=null==(e=t.default)?void 0:e.call(t);return l("li",{class:n.value},[a.value?l(a.value,{},o):o])}}}),P=Symbol("tabs"),I=Symbol("TabType"),z=i({name:"Tabs",props:{type:{type:String},size:{type:String,default:"md"},value:String},inheritAttrs:!1,emits:["update:value"],setup:(e,{slots:t,emit:n,attrs:a})=>{const o=e=>{n("update:value",e)},r=c((()=>({type:e.type,size:e.size,currentName:e.value,onChange:o})));y(P,r);const i=(e,t=[])=>(Array.from(e||[]).forEach((e=>{const n=e.type;n&&n[I]?t.push(e.props):n!==s&&"template"!==n||i(e.children,t)})),t),u=c((()=>["tab",`tab-${e.type}`,`tab-${e.size}`]));return()=>{var n;const r=(null==(n=t.default)?void 0:n.call(t))||[],c=i(r);return l(s,null,[l("div",v(a,{class:"tabs"}),[c.map((t=>l("a",{class:[u.value,{"tab-active":e.value===t.name}],onClick:()=>{o(t.name)}},[t.title]))),"lifted"===e.type?l("div",{class:"flex-1 cursor-default tab tab-lifted"},null):null]),r])}}}),$=i({name:"Tab",[I]:!0,props:{title:String,name:String},setup:(e,{slots:t})=>{const n=h(P);return()=>{var a;return l("div",{class:["mt-2",{hidden:e.name!==n.value.currentName}]},[null==(a=t.default)?void 0:a.call(t)])}}});console.log(k);var x=i({name:"App",setup:()=>{const e=u(!1),{components:n}=k.reduce(((e,t)=>(/^\/components\//.test(t.path)&&e.components.push(t),e)),{components:[]}),a=n.map((e=>{let t;return l(L,{childWrapper:!1,key:e.path,class:"capitalize"},{default:()=>{return[l(g,{to:e.path,activeClass:"active"},(n=t=e.name.replace("components-",""),"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!b(n)?t:{default:()=>[t]}))];var n}})}));return()=>l("main",null,[l(E,{disableTeleport:!0,mobileOnly:!0,class:"h-screen",open:e.value,onClose:()=>e.value=!1},{default:()=>l("div",{class:"overflow-y-auto w-80 bg-base-100 border-r border-base-200"},[l(O,{class:"rounded-box p-4",compact:!0},{default:()=>[l(L,{asTitle:!0},{default:()=>[r("Components")]}),a]})]),content:()=>l("div",{class:"p-4 pb-8 lg:p-10"},[l(t("router-view"),null,null)])})])}});x.__scopeId="data-v-60f56cd4";var D=i({name:"Playground",props:{code:String},setup:(e,{slots:t})=>{const n=u("preview");return()=>l("div",{class:"dv-playground py-2"},[l(z,{type:"lifted",value:n.value,"onUpdate:value":e=>n.value=e},{default:()=>[l($,{name:"preview",title:"Preview"},{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t)]}}),l($,{name:"code",title:"Code"},{default:()=>[l("pre",null,[l("code",{class:"hljs language-html","hljs-language":"html",innerHTML:e.code},null)])]})]})])}});_(x,{routes:k,base:"/daisyui-vue/"},(({app:e,router:t,isClient:n})=>{e.component("Playground",D)}));export{j as B};
