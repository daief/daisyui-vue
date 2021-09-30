var En=Object.defineProperty,On=Object.defineProperties;var Nn=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Vn=Object.prototype.hasOwnProperty,Pn=Object.prototype.propertyIsEnumerable;var F=(n,r,e)=>r in n?En(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e,C=(n,r)=>{for(var e in r||(r={}))Vn.call(r,e)&&F(n,e,r[e]);if(q)for(var e of q(r))Pn.call(r,e)&&F(n,e,r[e]);return n},W=(n,r)=>On(n,Nn(r));import{u as Dn,c as d,a as m,d as Rn,i as G,b as p,r as Z,e as t,p as X,F as B,w as Hn,m as M,f as qn,v as Fn,g as Wn,T as Gn,h as Zn,n as Xn,j as $,k as Y,l as Yn,o as Kn,R as Un,q as Jn,s as Qn,t as nt,V as tt}from"./vendor.28af8f46.js";const et=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}};et();const rt="modulepreload",K={},at="/daisyui-vue/",w=function(r,e){return!e||e.length===0?r():Promise.all(e.map(o=>{if(o=`${at}${o}`,o in K)return;K[o]=!0;const a=o.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":rt,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((g,b)=>{l.addEventListener("load",g),l.addEventListener("error",b)})})).then(()=>r())};var ot={setup(){return Dn({title:"daisyui-vue"}),()=>d("div",null,[d("h1",{class:"text-2xl"},[m("daisyui vue(WIP)")]),d("p",{class:"mt-4"},[m("Vue3 components base on")," ",d("a",{href:"https://github.com/saadeghi/daisyui",class:"text-blue-400 underline"},[m("daisyui")]),m(".")])])}};const U=[{name:"components-table",path:"/components/table",component:()=>w(()=>import("./table.e4cf7ca7.js"),["assets/table.e4cf7ca7.js","assets/vendor.28af8f46.js"]),props:!0},{name:"components-tab",path:"/components/tab",component:()=>w(()=>import("./tab.f39e95e8.js"),["assets/tab.f39e95e8.js","assets/vendor.28af8f46.js"]),props:!0},{name:"components-menu",path:"/components/menu",component:()=>w(()=>import("./menu.69722174.js"),["assets/menu.69722174.js","assets/vendor.28af8f46.js"]),props:!0},{name:"components-icons",path:"/components/icons",component:()=>w(()=>import("./icons.1cc4c338.js"),["assets/icons.1cc4c338.js","assets/vendor.28af8f46.js"]),props:!0},{name:"components-drawer",path:"/components/drawer",component:()=>w(()=>import("./drawer.3ad5adac.js"),["assets/drawer.3ad5adac.js","assets/vendor.28af8f46.js"]),props:!0},{name:"components-button",path:"/components/button",component:()=>w(()=>import("./button.cf880326.js"),["assets/button.cf880326.js","assets/vendor.28af8f46.js"]),props:!0},{name:"components-artboard",path:"/components/artboard",component:()=>w(()=>import("./artboard.1273e661.js"),["assets/artboard.1273e661.js","assets/vendor.28af8f46.js"]),props:!0},{name:"components-alert",path:"/components/alert",component:()=>w(()=>import("./alert.1d496574.js"),["assets/alert.1d496574.js","assets/vendor.28af8f46.js"]),props:!0},{name:"b",path:"/b",component:()=>w(()=>import("./b.67d19635.js"),["assets/b.67d19635.js","assets/vendor.28af8f46.js"]),props:!0},{name:"index",path:"/",component:ot,props:!0}];let f=[],y=null;function it(n){typeof document!="undefined"&&(y||(y=document.createElement("style"),y.setAttribute("daisyui-vue","0.0.1-alpha.0"),document.head.appendChild(y)),Array.isArray(n)?f.push(...n):f.push(n),setTimeout(()=>{const r=f.filter((e,o)=>f.indexOf(e)===o);y.append(r.join(`
`)),f=[]}))}function c(n,r=[]){return it(r),Rn(n)}const J=Symbol("ButtonGroup"),ct=`/* purgecss start ignore */

.btn {
  border-radius: var(--rounded-btn,.5rem);
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  text-align: center;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 3rem;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
  /* disabled */
  /* shapes */
  /* loading */
}

.btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-disabled, .btn[disabled] {
  pointer-events: none;
}

.btn-square {
  height: 3rem;
  width: 3rem;
  padding: 0px;
}

.btn-circle {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  padding: 0px;
}

.btn.loading, .btn.loading:hover {
  pointer-events: none;
}

.btn.loading:before {
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border-width: 2px;
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
  content: "";
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: currentColor;
  border-right-color: currentColor;
}

@media (prefers-reduced-motion: reduce) {
  .btn.loading:before {
    -webkit-animation: spin 10s linear infinite;
            animation: spin 10s linear infinite;
  }
}

@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* group */

.btn-group {
  display: flex;
  flex-wrap: wrap;
}

.btn-group > input[type="radio"].btn {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.btn-group > input[type="radio"].btn:before {
  content: attr(data-title);
}

/* purgecss end ignore */`,lt=`/* purgecss start ignore */

.btn {
  font-weight: 600;
  text-transform: uppercase;
  border-width: var(--border-btn, 1px);
  -webkit-animation: button-pop var(--animation-btn, 0.25s) ease-out;
          animation: button-pop var(--animation-btn, 0.25s) ease-out;
  text-transform: var(--btn-text-case, uppercase);
  /* default btn */
  --tw-border-opacity: 1;
  border-color: hsla(var(--n) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--n) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--nc) / var(--tw-text-opacity));
  /* brand colors */
  /* btn with state colors */
  /* glass */
  /* btn variants */
  /* outline */
  /* disabled */
  /* loading */
}

.btn:active:hover,
.btn:active:focus {
  -webkit-animation: none;
          animation: none;
}

.btn:active:hover,
.btn:active:focus {
  transform: scale(var(--btn-focus-scale, 0.95));
}

.btn:hover, .btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--nf) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--nf) / var(--tw-bg-opacity));
}

.btn:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--nf));
}

.btn-primary {
  --tw-border-opacity: 1;
  border-color: hsla(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--pc) / var(--tw-text-opacity));
}

.btn-primary:hover, .btn-primary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--pf) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--pf) / var(--tw-bg-opacity));
}

.btn-primary:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));
}

.btn-secondary {
  --tw-border-opacity: 1;
  border-color: hsla(var(--s) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--s) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--sc) / var(--tw-text-opacity));
}

.btn-secondary:hover, .btn-secondary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--sf) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--sf) / var(--tw-bg-opacity));
}

.btn-secondary:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--s));
}

.btn-accent {
  --tw-border-opacity: 1;
  border-color: hsla(var(--a) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--ac) / var(--tw-text-opacity));
}

.btn-accent:hover, .btn-accent.btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--af) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--af) / var(--tw-bg-opacity));
}

.btn-accent:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--a));
}

.btn-info {
  --tw-border-opacity: 1;
  border-color: hsla(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--b2) / var(--tw-text-opacity));
}

.btn-info:hover, .btn-info.btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--in) / var(--tw-bg-opacity));
}

.btn-info:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--in));
}

.btn-success {
  --tw-border-opacity: 1;
  border-color: hsla(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--b2) / var(--tw-text-opacity));
}

.btn-success:hover, .btn-success.btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--su) / var(--tw-bg-opacity));
}

.btn-success:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--su));
}

.btn-warning {
  --tw-border-opacity: 1;
  border-color: hsla(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--b2) / var(--tw-text-opacity));
}

.btn-warning:hover, .btn-warning.btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--wa) / var(--tw-bg-opacity));
}

.btn-warning:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--wa));
}

.btn-error {
  --tw-border-opacity: 1;
  border-color: hsla(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--b2) / var(--tw-text-opacity));
}

.btn-error:hover, .btn-error.btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--er) / var(--tw-bg-opacity));
}

.btn-error:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--er));
}

.btn.glass:hover,
.btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}

.btn.glass:focus-visible {
  box-shadow: 0 0 0 2px currentColor;
}

.btn-ghost {
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
  color: currentColor;
}

.btn-ghost:hover, .btn-ghost.btn-active {
  --tw-border-opacity: 0;
  --tw-bg-opacity: 1;
  background-color: hsla(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
}

.btn-ghost:focus-visible {
  box-shadow: 0 0 0 2px currentColor;
}

.btn-link {
  border-color: transparent;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsla(var(--p) / var(--tw-text-opacity));
}

.btn-link:hover, .btn-link.btn-active {
  border-color: transparent;
  background-color: transparent;
  text-decoration: underline;
}

.btn-link:focus-visible {
  box-shadow: 0 0 0 2px currentColor;
}

.btn-outline {
  border-color: currentColor;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
}

.btn-outline:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--bc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--bc) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--b1) / var(--tw-text-opacity));
}

.btn-outline.btn-primary {
  --tw-text-opacity: 1;
  color: hsla(var(--p) / var(--tw-text-opacity));
}

.btn-outline.btn-primary:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--pf) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--pf) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--pc) / var(--tw-text-opacity));
}

.btn-outline.btn-secondary {
  --tw-text-opacity: 1;
  color: hsla(var(--s) / var(--tw-text-opacity));
}

.btn-outline.btn-secondary:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--sf) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--sf) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--sc) / var(--tw-text-opacity));
}

.btn-outline.btn-accent {
  --tw-text-opacity: 1;
  color: hsla(var(--a) / var(--tw-text-opacity));
}

.btn-outline.btn-accent:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--af) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--af) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--ac) / var(--tw-text-opacity));
}

.btn-disabled, .btn[disabled] {
  --tw-border-opacity: 0;
  --tw-bg-opacity: 1;
  background-color: hsla(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}

.btn.loading.btn-square:before, .btn.loading.btn-circle:before {
  margin-right: 0px;
}

.btn.loading.btn-xl:before, .btn.loading.btn-lg:before {
  height: 1.25rem;
  width: 1.25rem;
}

.btn.loading.btn-sm:before, .btn.loading.btn-xs:before {
  height: 0.75rem;
  width: 0.75rem;
}

/* group */

.btn-group > input[type="radio"]:checked.btn, .btn-group > .btn-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--pc) / var(--tw-text-opacity));
}

.btn-group > input[type="radio"]:checked.btn:focus-visible,
.btn-group > .btn-active:focus-visible {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));
}

.btn-group > .btn:not(:first-child) {
  margin-left: -1px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.btn-group > .btn:not(:last-child) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

@-webkit-keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }

  40% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }

  40% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

/* purgecss end ignore */`,dt=`/* purgecss start ignore */

.btn-xs {
  min-height: 1.5rem;
  height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 1.625;
}

.btn-sm {
  min-height: 2rem;
  height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2rem;
}

.btn-md {
  min-height: 3rem;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
}

.btn-lg {
  min-height: 4rem;
  height: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 2;
}

.btn-wide {
  width: 16rem;
}

.btn-block {
  width: 100%;
}

.btn-square.btn-xs {
  height: 1.5rem;
  width: 1.5rem;
  padding: 0px;
}

.btn-square.btn-sm {
  height: 2rem;
  width: 2rem;
  padding: 0px;
}

.btn-square.btn-md {
  height: 3rem;
  width: 3rem;
  padding: 0px;
}

.btn-square.btn-lg {
  height: 4rem;
  width: 4rem;
  padding: 0px;
}

.btn-circle.btn-xs {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 9999px;
  padding: 0px;
}

.btn-circle.btn-sm {
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  padding: 0px;
}

.btn-circle.btn-md {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  padding: 0px;
}

.btn-circle.btn-lg {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  padding: 0px;
}

/* purgecss end ignore */`,st=`/* purgecss start ignore */

.glass,
.glass:hover,
.glass.btn-active {
  border: none;
  -webkit-backdrop-filter: blur(var(--glass-blur, 40px));
          backdrop-filter: blur(var(--glass-blur, 40px));
  background-color: transparent;
  background-image: linear-gradient(135deg, rgb(255 255 255 / var(--glass-opacity, 30%)) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%, rgba(0, 0, 0, 0) 25%);
  box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset, 0 0 0 2px rgba(0, 0, 0, 0.05);
  text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
}

/* purgecss end ignore */`,bt=`/* purgecss start ignore */

.no-animation {
  --btn-focus-scale: 1;
  --animation-btn: 0;
  --animation-input: 0;
}

.tab-border-none {
  --tab-border: 0px;
}

.tab-border {
  --tab-border: 1px;
}

.tab-border-2 {
  --tab-border: 2px;
}

.tab-border-3 {
  --tab-border: 3px;
}

.tab-rounded-none {
  --tab-radius: 0;
}

.tab-rounded-lg {
  --tab-radius: 0.5rem;
}

/* purgecss end ignore */`;var Q=[ct,lt,dt,st,bt];const k=c({name:"Button",props:{block:Boolean,wide:Boolean,disabled:Boolean,outline:Boolean,active:Boolean,loading:Boolean,noAnimation:Boolean,onClick:Function},setup:(n,{slots:r,attrs:e})=>{const o=G(J,null),a=p(()=>e.size||(o==null?void 0:o.value.size)||"md"),i=p(()=>e.shape||(o==null?void 0:o.value.shape)||"default"),l=p(()=>(o==null?void 0:o.value.outline)||n.outline),g=p(()=>e.component||"button"),b=Z(!1),u=p(()=>n.loading||b.value),h=p(()=>["dv-btn btn",e.type==="glass"?"glass":e.type?`btn-${e.type}`:"",{[`btn-${a.value}`]:!0,[`btn-${i.value}`]:!0,"btn-block":n.block,"btn-wide":n.wide,loading:u.value,"btn-disabled":n.disabled,"btn-active":n.active,"btn-outline":l.value,"no-animation":n.noAnimation}]),v=async x=>{if(!(b.value||typeof n.onClick!="function")){b.value=!0;try{await n.onClick(x)}catch(oe){}b.value=!1}},Sn=p(()=>["circle","square"].includes(e.shape)?!u.value:!0);return()=>{var x;return t(g.value,{disabled:n.disabled||void 0,class:h.value,onClick:v},[Sn.value?(x=r.default)==null?void 0:x.call(r):null])}}},Q),pt={outline:Boolean},nn=c({name:"ButtonGroup",props:pt,setup:(n,{slots:r,attrs:e})=>{const o=p(()=>({size:e.size||"md",shape:e.shape||"defalut",outline:n.outline}));return X(J,o),()=>{var a;return t("div",{class:"dv-btn-group btn-group"},[(a=r.default)==null?void 0:a.call(r)])}}},Q),ut=`/* purgecss start ignore */

.dv-icon {
  display: inline-block;
  flex-shrink: 0;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: middle;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1em;
  height: 1em;
  overflow: hidden;
}

/* purgecss end ignore */`;var vt=ut,ht=[vt];const s=c({name:"IconBase",props:{color:{type:String,default:"currentColor"},size:[String,Number],useStroke:{type:Boolean,default:!0},viewBox:{type:String,default:"0 0 1024 1024"}},setup:(n,{slots:r})=>()=>{var e;return t("svg",{class:"dv-icon",viewBox:n.viewBox,focusable:"false","aria-hidden":"false",fill:n.useStroke?"none":n.color,stroke:n.useStroke?n.color:"none",style:n.size?{fontSize:typeof n.size=="number"?`${n.size}px`:n.size}:{}},[(e=r.default)==null?void 0:e.call(r)])}},ht),tn=c({name:"IconAdjustments",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"},null)]})}),en=c({name:"IconArchive",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},null)]})}),rn=c({name:"IconArrow",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null)]})}),an=c({name:"IconBack",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"},null)]})}),L=c({name:"IconBell",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"},null)]})}),on=c({name:"IconBookOpen",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},null)]})}),cn=c({name:"IconCheck",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null)]})}),ln=c({name:"IconClose",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null)]})}),dn=c({name:"IconCode",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},null)]})}),sn=c({name:"IconColorSwatch",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"},null)]})}),bn=c({name:"IconColor",setup:()=>()=>t(s,{viewBox:"0 0 24 24",useStroke:!1},{default:()=>[t("path",{d:"M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z"},null)]})}),pn=c({name:"IconDocumentAdd",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null)]})}),un=c({name:"IconDots",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"},null)]})}),vn=c({name:"IconEye",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null)]})}),hn=c({name:"IconFolder",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"},null)]})}),j=c({name:"IconGithub",setup:()=>()=>t(s,{viewBox:"0 0 512 512",useStroke:!1},{default:()=>[t("path",{d:"M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"},null)]})}),gn=c({name:"IconHeart",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},null)]})}),wn=c({name:"IconInboxIn",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"},null)]})}),T=c({name:"IconInfo",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null)]})}),A=c({name:"IconInvalid",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"},null)]})}),mn=c({name:"IconLightningBolt",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 10V3L4 14h7v7l9-11h-7z"},null)]})}),fn=c({name:"IconMenuAlt2",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"},null)]})}),S=c({name:"IconMenu",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null)]})}),yn=c({name:"IconSearch",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},null)]})}),xn=c({name:"IconTemplate",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"},null)]})}),kn=c({name:"IconText",setup:()=>()=>t(s,{viewBox:"0 0 24 24",useStroke:!1},{default:()=>[t("path",{d:"M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z"},null)]})}),E=c({name:"IconWarning",setup:()=>()=>t(s,{viewBox:"0 0 24 24"},{default:()=>[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null)]})});var gt=Object.freeze({__proto__:null,IconBase:s,IconAdjustments:tn,IconArchive:en,IconArrow:rn,IconBack:an,IconBell:L,IconBookOpen:on,IconCheck:cn,IconClose:ln,IconCode:dn,IconColorSwatch:sn,IconColor:bn,IconDocumentAdd:pn,IconDots:un,IconEye:vn,IconFolder:hn,IconGithub:j,IconHeart:gn,IconInboxIn:wn,IconInfo:T,IconInvalid:A,IconLightningBolt:mn,IconMenuAlt2:fn,IconMenu:S,IconSearch:yn,IconTemplate:xn,IconText:kn,IconWarning:E});const wt=`/* purgecss start ignore */

.alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.alert > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

@media (min-width: 768px) {
  .alert {
    flex-direction: row;
  }

  .alert > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }
}

.alert > * {
  display: flex;
}

/* purgecss end ignore */`,mt=`/* purgecss start ignore */

.alert {
  border-radius: var(--rounded-box,1rem);
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b2) / var(--tw-bg-opacity));
  padding: 1rem;
}

/* purgecss end ignore */`,ft=`/* purgecss start ignore */

.alert-sm {
  padding: 0.5rem;
}

.alert-info {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--in) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
  --tw-text-opacity: 1;
  color: hsla(var(--in) / var(--tw-text-opacity));
}

.alert-success {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--su) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
  --tw-text-opacity: 1;
  color: hsla(var(--su) / var(--tw-text-opacity));
}

.alert-warning {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--wa) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
  --tw-text-opacity: 1;
  color: hsla(var(--wa) / var(--tw-text-opacity));
}

.alert-error {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--er) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
  --tw-text-opacity: 1;
  color: hsla(var(--er) / var(--tw-text-opacity));
}

/* purgecss end ignore */`,yt=`/* purgecss start ignore */

.dv-alert__content {
  flex: 1 1 0%;
}

.dv-alert__content > label {
  line-height: 1.5rem;
}

.dv-alert__content > label > h4 {
  margin: 0;
}

.dv-alert__content > label > p {
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.6;
}

.dv-alert__iconwrap {
  font-size: 1.5em;
  margin-right: 0.5rem;
  display: flex;
}

.dv-alert__actions {
  flex: none;
}

/* purgecss end ignore */`;var xt=yt,kt=[wt,mt,ft,xt];const _n=c({name:"Alert",setup:(n,{attrs:r,slots:e})=>()=>{var g,b,u,h;const o=((g=e.icon)==null?void 0:g.call(e))||{info:t(T,null,null),success:t(L,null,null),warning:t(E,null,null),error:t(A,null,null)}[r.type],a=(b=e.actions)==null?void 0:b.call(e),i=(u=e.content)==null?void 0:u.call(e),l=(h=e.default)==null?void 0:h.call(e);return t("div",{class:["dv-alert alert",`alert-${r.type||""}`]},[t("div",{class:"dv-alert__content"},[o?t("div",{class:"dv-alert__iconwrap"},[o]):null,t("label",null,[i?t(B,null,[t("h4",null,[l]),t("p",null,[i])]):l])]),a?t("div",{class:"dv-alert__actions"},[a]):null])}},kt),_t=`/* purgecss start ignore */

.artboard {
  width: 100%;
}

/* purgecss end ignore */`,It=`/* purgecss start ignore */

.artboard-demo {
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.artboard.phone {
  width: 320px;
}

.artboard.phone-1 {
  width: 320px;
  height: 568px;
}

.artboard.phone-1.horizontal {
  width: 568px;
  height: 320px;
}

.artboard.phone-2 {
  width: 375px;
  height: 667px;
}

.artboard.phone-2.horizontal {
  width: 667px;
  height: 375px;
}

.artboard.phone-3 {
  width: 414px;
  height: 736px;
}

.artboard.phone-3.horizontal {
  width: 736px;
  height: 414px;
}

.artboard.phone-4 {
  width: 375px;
  height: 812px;
}

.artboard.phone-4.horizontal {
  width: 812px;
  height: 375px;
}

.artboard.phone-5 {
  width: 414px;
  height: 896px;
}

.artboard.phone-5.horizontal {
  width: 896px;
  height: 414px;
}

.artboard.phone-6 {
  width: 320px;
  height: 1024px;
}

.artboard.phone-6.horizontal {
  width: 1024px;
  height: 320px;
}

/* purgecss end ignore */`,zt=`/* purgecss start ignore */

.artboard-demo {
  border-radius: var(--rounded-box,1rem);
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b1) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* purgecss end ignore */`;var Ct=[_t,It,zt];const In=c({name:"Artboard",props:{phone:[String,Boolean],horizontal:Boolean},setup:(n,{slots:r})=>()=>{var e;return t("div",{class:["artboard artboard-demo",{phone:["",!0].includes(n.phone),[`phone-${n.phone}`]:!!n.phone&&typeof n.phone=="string",horizontal:!!n.horizontal}]},[(e=r.default)==null?void 0:e.call(r)])}},Ct),Bt=`/* purgecss start ignore */

.drawer {
  display: grid;
  overflow: hidden;
}

.drawer.drawer-end .drawer-toggle ~ .drawer-side > .drawer-overlay + * {
  --tw-translate-x: 100%;
  justify-self: end;
}

.drawer.drawer-end .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {
  --tw-translate-x: 0px;
}

.drawer-toggle {
  position: absolute;
  height: 0px;
  width: 0px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  opacity: 0;
}

.drawer-toggle ~ .drawer-content {
  z-index: 0;
  grid-column-start: 1;
  grid-row-start: 1;
  max-height: 100vh;
  overflow-y: auto;
}

.drawer-toggle ~ .drawer-side {
  grid-column-start: 1;
  grid-row-start: 1;
  display: grid;
  max-height: 100vh;
}

.drawer-toggle ~ .drawer-side > .drawer-overlay {
  visibility: hidden;
  grid-column-start: 1;
  grid-row-start: 1;
  opacity: 0;
}

.drawer-toggle ~ .drawer-side > .drawer-overlay + * {
  z-index: 10;
  grid-column-start: 1;
  grid-row-start: 1;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-translate-x: -100%;
}

.drawer-toggle:checked ~ .drawer-side {
  overflow-y: auto;
}

.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  visibility: visible;
}

.drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {
  --tw-translate-x: 0px;
}

@media (min-width: 1024px) {
  .drawer-mobile {
    grid-auto-columns: -webkit-max-content auto;
    grid-auto-columns: max-content auto;
  }

  .drawer-mobile > .drawer-toggle ~ .drawer-content {
    height: auto;
  }

  @media (min-width: 1024px) {
    .drawer-mobile > .drawer-toggle ~ .drawer-content {
      grid-column-start: 2;
    }
  }

  .drawer-mobile > .drawer-toggle ~ .drawer-side {
    overflow-y: auto;
  }

  @media (min-width: 1024px) {
    .drawer-mobile > .drawer-toggle ~ .drawer-side > .drawer-overlay {
      visibility: visible;
    }
  }

  @media (min-width: 1024px) {
    .drawer-mobile > .drawer-toggle ~ .drawer-side > .drawer-overlay + * {
      --tw-translate-x: 0px;
    }
  }

  .drawer-mobile.drawer-end {
    grid-auto-columns: auto -webkit-max-content;
    grid-auto-columns: auto max-content;
  }

  .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content {
    height: auto;
  }

  @media (min-width: 1024px) {
    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content {
      grid-column-start: 1;
    }
  }

  .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side {
    overflow-y: auto;
  }

  @media (min-width: 1024px) {
    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side {
      grid-column-start: 2;
    }
  }

  @media (min-width: 1024px) {
    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay {
      visibility: visible;
    }
  }

  @media (min-width: 1024px) {
    .drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay + * {
      --tw-translate-x: 0px;
    }
  }
}

/* purgecss end ignore */`,Mt=`/* purgecss start ignore */

.drawer.drawer-end .drawer-toggle:checked ~ .drawer-content {
  --tw-translate-x: -0.5rem;
}

.drawer-toggle ~ .drawer-content {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-toggle ~ .drawer-side > .drawer-overlay {
  cursor: pointer;
  --tw-bg-opacity: 1;
  background-color: hsla(var(--nf) / var(--tw-bg-opacity));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-toggle ~ .drawer-side > .drawer-overlay + * {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-toggle:checked ~ .drawer-content {
  --tw-translate-x: 0.5rem;
}

.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  opacity: 0.4;
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--nf));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-primary {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-secondary {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--s));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-accent {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--a));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-info {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--in));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-success {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--su));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-warning {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--wa));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-error {
  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--er));
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.glass {
  box-shadow: 0 0 0 2px currentColor;
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-ghost {
  box-shadow: 0 0 0 2px currentColor;
}

.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-link {
  box-shadow: 0 0 0 2px currentColor;
}

@media (min-width: 1024px) {
  .drawer-mobile > .drawer-toggle:checked ~ .drawer-content {
    --tw-translate-x: 0px;
  }
}

/* purgecss end ignore */`,$t=`/* purgecss start ignore */

.dv-drawer--teleport {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100vh;
}

.dv-drawer--opacity-0 {
  opacity: 0;
}

.dv-drawer--transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* purgecss end ignore */`;var Lt=$t,jt=[Bt,Mt,Lt];function zn(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!Wn(n)}let Cn=0;const Tt={open:Boolean,disableTeleport:Boolean,mobileOnly:Boolean},O=c({name:"Drawer",props:Tt,inheritAttrs:!1,setup:(n,{attrs:r,slots:e})=>{const o=Z(n.open);return Hn(()=>n.open,async()=>{await Xn(),await new Promise(a=>setTimeout(a)),o.value=n.open}),()=>{var l,g,b,u;const a=h=>{let v;return t(Gn,{enterFromClass:"dv-drawer--opacity-0",enterActiveClass:"dv-drawer--transition-opacity",leaveActiveClass:"dv-drawer--transition-opacity",leaveToClass:"dv-drawer--opacity-0",duration:300},zn(v=qn(h,[[Fn,n.mobileOnly?!0:n.open]]))?v:{default:()=>[v]})},i=n.disableTeleport?t("div",M(r,{class:["dv-drawer drawer",{"dv-drawer--teleport":!n.disableTeleport,"drawer-end":r.placement==="right","drawer-mobile":!!n.mobileOnly}],style:{zIndex:100+Cn}}),[t("input",{type:"checkbox",class:"drawer-toggle",checked:o.value},null),t("div",{class:"drawer-content"},[(l=e.content)==null?void 0:l.call(e)]),a(t("div",{class:"drawer-side"},[t("div",{class:"drawer-overlay",onClick:r.onClose},null),(g=e.default)==null?void 0:g.call(e)]))]):a(t("div",M(r,{class:["dv-drawer drawer",{"dv-drawer--teleport":!n.disableTeleport,"drawer-end":r.placement==="right","drawer-mobile":!!n.mobileOnly}],style:{zIndex:100+Cn}}),[t("input",{type:"checkbox",class:"drawer-toggle",checked:o.value},null),t("div",{class:"drawer-content"},[(b=e.content)==null?void 0:b.call(e)]),t("div",{class:"drawer-side"},[t("div",{class:"drawer-overlay",onClick:r.onClose},null),(u=e.default)==null?void 0:u.call(e)])]));return n.disableTeleport?i:t(Zn,{to:"body"},zn(i)?i:{default:()=>[i]})}}},jt),At=`/* purgecss start ignore */

.menu.horizontal li.bordered > a, .menu.horizontal li.bordered > span {
  border-bottom-width: 4px;
  border-left-width: 0px;
  --tw-border-opacity: 1;
  border-color: hsla(var(--p) / var(--tw-border-opacity));
}

.menu[class*="p-"] li a {
  border-radius: var(--rounded-btn,.5rem);
}

.menu li > a, .menu li > span {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: currentColor;
}

.menu li > a:focus, .menu li > a:hover {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}

.menu li > a.active {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--pc) / var(--tw-text-opacity));
}

.menu li > a:active {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--pf) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--pc) / var(--tw-text-opacity));
}

.menu li.disabled > a:hover, .menu li.disabled > span:hover {
  background-color: transparent;
}

.menu li.disabled > a, .menu li.disabled > span {
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}

.menu li.bordered a, .menu li.bordered span {
  border-left-width: 4px;
  --tw-border-opacity: 1;
  border-color: hsla(var(--p) / var(--tw-border-opacity));
}

.menu li.hover-bordered a {
  border-left-width: 4px;
  border-color: transparent;
}

.menu li.hover-bordered a:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--p) / var(--tw-border-opacity));
}

.menu ul {
  padding-left: 1.5rem;
}

.menu.compact li > a, .menu.compact li > span {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.menu .menu-title > a, .menu .menu-title > span {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.4;
}

/* purgecss end ignore */`,St=`/* purgecss start ignore */

.menu {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.menu.horizontal {
  display: inline-flex;
  flex-direction: row;
}

.menu.horizontal li {
  flex-direction: row;
}

.menu li {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.menu li > a, .menu li > span {
  display: flex;
  align-items: center;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.menu li > a {
  cursor: pointer;
}

.menu li > a:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.menu li.disabled > a, .menu li.disabled > span {
  cursor: auto;
}

/* purgecss end ignore */`;var Bn=[At,St];const Et={compact:Boolean,horizontal:Boolean},N=c({name:"Menu",props:Et,setup:(n,{slots:r})=>{const e=p(()=>["menu",{compact:n.compact,horizontal:n.horizontal}]);return()=>{var o;return t("ul",{class:e.value},[(o=r.default)==null?void 0:o.call(r)])}}},Bn),Ot={asTitle:Boolean,disabled:Boolean,bordered:Boolean,hoverBordered:Boolean,active:Boolean},_=c({name:"MenuItem",props:Ot,setup:(n,{slots:r,attrs:e})=>{const o=p(()=>[{"menu-title":n.asTitle,disabled:n.disabled,bordered:n.bordered,"hover-bordered":n.hoverBordered}]),a=p(()=>"childWrapper"in e?e.childWrapper===!1?null:e.childWrapper:n.asTitle?"span":"a");return()=>{var l;const i=(l=r.default)==null?void 0:l.call(r);return t("li",{class:o.value},[a.value?t(a.value,{class:{active:n.active}},i):i])}}},Bn),Nt=`/* purgecss start ignore */

.navbar {
  display: flex;
  align-items: center;
}

.navbar > * {
  display: flex;
  align-items: center;
}

.navbar-start {
  width: 50%;
  justify-content: flex-start;
}

.navbar-center {
  flex-shrink: 0;
}

.navbar-end {
  width: 50%;
  justify-content: flex-end;
}

/* purgecss end ignore */`,Vt=`/* purgecss start ignore */

.navbar {
  padding: var(--navbar-padding, 0.5rem);
  min-height: 4rem;
}

/* purgecss end ignore */`;var I=[Nt,Vt];const V=c({name:"Navbar",setup:(n,{slots:r})=>()=>{var e;return t("div",{class:"navbar"},[(e=r.default)==null?void 0:e.call(r)])}},I),P=c({name:"NavbarStart",setup:(n,{slots:r})=>()=>{var e;return t("div",{class:"navbar-start"},[(e=r.default)==null?void 0:e.call(r)])}},I),Mn=c({name:"NavbarCenter",setup:(n,{slots:r})=>()=>{var e;return t("div",{class:"navbar-center"},[(e=r.default)==null?void 0:e.call(r)])}},I),D=c({name:"NavbarEnd",setup:(n,{slots:r})=>()=>{var e;return t("div",{class:"navbar-end"},[(e=r.default)==null?void 0:e.call(r)])}},I),Pt=`/* purgecss start ignore */

.tab {
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.5;
}

.tab:hover {
  --tw-text-opacity: 1;
}

.tab {
  padding-left: var(--tab-padding, 1rem);
  padding-right: var(--tab-padding, 1rem);
}

.tab.tab-active {
  --tw-border-opacity: 1;
  border-color: hsla(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 1;
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
}

.tab:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.tab:focus-visible {
  box-shadow: 0 0 0 2px currentColor inset;
}

.tab-bordered {
  --tw-border-opacity: 1;
  border-color: hsla(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  border-style: solid;
  border-bottom-width: calc(var(--tab-border, 1px) + 1px);
}

.tab-lifted {
  border: var(--tab-border, 1px) solid transparent;
  border-width: 0 0 var(--tab-border, 1px) 0;
  border-top-left-radius: var(--tab-radius, 0.5rem);
  border-top-right-radius: var(--tab-radius, 0.5rem);
  border-bottom-color: hsla(var(--border-color, var(--b3)) / var(--tw-border-opacity, 1));
  padding-left: var(--tab-padding, 1rem);
  padding-right: var(--tab-padding, 1rem);
  padding-top: var(--tab-border, 1px);
}

.tab-lifted.tab-active {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b1) / var(--tw-bg-opacity));
  border-width: var(--tab-border, 1px) var(--tab-border, 1px) 0 var(--tab-border, 1px);
  border-left-color: hsla(var(--border-color, var(--b3)) / var(--tw-border-opacity, 1));
  border-right-color: hsla(var(--border-color, var(--b3)) / var(--tw-border-opacity, 1));
  border-top-color: hsla(var(--border-color, var(--b3)) / var(--tw-border-opacity, 1));
  padding-left: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
  padding-right: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
  padding-bottom: var(--tab-border, 1px);
  padding-top: 0;
}

.tab-lifted.tab-active:before,
.tab-lifted.tab-active:after {
  z-index: 1;
  content: '';
  display: block;
  position: absolute;
  width: var(--tab-radius, 0.5rem);
  height: var(--tab-radius, 0.5rem);
  bottom: 0;
  --tab-grad: calc(68% - var(--tab-border, 1px));
  --tab-corner-bg: radial-gradient(circle at var(--circle-pos), transparent var(--tab-grad), hsla(var(--border-color, var(--b3)) / var(--tw-border-opacity, 1)) calc(var(--tab-grad) + 0.3px), hsla(var(--border-color, var(--b3)) / var(--tw-border-opacity, 1)) calc(var(--tab-grad) + var(--tab-border, 1px)), hsla(var(--b1) / var(--tw-border-opacity, 1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));
}

.tab-lifted.tab-active:before {
  left: calc(var(--tab-radius, 0.5rem) * -1);
  --circle-pos: top left;
  background-image: var(--tab-corner-bg);
  /* RTL quick fix */
}

[dir=rtl] .tab-lifted.tab-active:before {
  --circle-pos: top right;
}

.tab-lifted.tab-active:after {
  right: calc(var(--tab-radius, 0.5rem) * -1);
  --circle-pos: top right;
  background-image: var(--tab-corner-bg);
  /* RTL quick fix */
}

[dir=rtl] .tab-lifted.tab-active:after {
  --circle-pos: top left;
}

.tab-lifted.tab-active:first-child:before {
  background: none;
}

.tab-lifted.tab-active:last-child:after {
  background: none;
}

.tab-lifted.tab-active + .tab-lifted.tab-active:before {
  background: none;
}

.tabs-boxed {
  border-radius: var(--rounded-btn,.5rem);
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b2) / var(--tw-bg-opacity));
  padding: 0.25rem;
}

.tabs-boxed .tab-active {
  border-radius: var(--rounded-btn,.5rem);
  --tw-bg-opacity: 1;
  background-color: hsla(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--pc) / var(--tw-text-opacity));
}

.tabs-boxed .tab-active:hover {
  --tw-text-opacity: 1;
  color: hsla(var(--pc) / var(--tw-text-opacity));
}

/* purgecss end ignore */`,Dt=`/* purgecss start ignore */

.tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.tab {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
  --tab-padding: 1rem;
}

/* purgecss end ignore */`,Rt=`/* purgecss start ignore */

.dv-tabs__lifted-item {
  cursor: pointer;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 2rem;
  font-size: .875rem;
  line-height: 1.25rem;
  line-height: 2;
  --tab-padding: 1rem;
  --tw-text-opacity: 1;
  --tw-text-opacity: 0.5;
  color: hsla(var(--bc)/var(--tw-text-opacity,1));
  padding-left: var(--tab-padding,1rem);
  padding-right: var(--tab-padding,1rem);
}

.dv-tabs__lifted-item:hover {
  --tw-text-opacity: 1;
}

.dv-tabs__lifted-item.tab-active {
  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));
  --tw-border-opacity: 1;
  --tw-text-opacity: 1;
  color: hsla(var(--bc)/var(--tw-text-opacity,1));
}

.dv-tabs__lifted-item:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.dv-tabs__lifted-item:focus-visible {
  box-shadow: inset 0 0 0 2px currentColor;
}

.dv-tabs__lifted-item {
  border-top-left-radius: var(--tab-radius,.5rem);
  border-top-right-radius: var(--tab-radius,.5rem);
  border: 0 solid transparent;
  border-bottom: var(--tab-border,1px) solid hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));
  padding-left: var(--tab-padding,1rem);
  padding-right: var(--tab-padding,1rem);
  padding-top: var(--tab-border,1px);
}

.dv-tabs__lifted-item.tab-active {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));
  border-left-width: var(--tab-border,1px);
  border-bottom-width: 0;
  border-right-width: var(--tab-border,1px);
  border-top-width: var(--tab-border,1px);
  border-left-color: hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));
  border-right-color: hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));
  border-top-color: hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));
  padding-left: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
  padding-right: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
  padding-bottom: var(--tab-border,1px);
  padding-top: 0;
}

.dv-tabs__lifted-item.tab-active:after,.dv-tabs__lifted-item.tab-active:before {
  z-index: 1;
  content: "";
  display: block;
  position: absolute;
  width: var(--tab-radius,.5rem);
  height: var(--tab-radius,.5rem);
  bottom: 0;
  --tab-grad: calc(68% - var(--tab-border, 1px));
  --tab-corner-bg: radial-gradient(circle at var(--circle-pos),transparent var(--tab-grad),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + 0.3px),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px)),hsla(var(--b1)/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));
}

.tab-lifted.tab-active:after,.tab-lifted.tab-active:before {
  z-index: 1;
  content: "";
  display: block;
  position: absolute;
  width: var(--tab-radius,.5rem);
  height: var(--tab-radius,.5rem);
  bottom: 0;
  --tab-grad: calc(68% - var(--tab-border, 1px));
  --tab-corner-bg: radial-gradient(circle at var(--circle-pos),transparent var(--tab-grad),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + 0.3px),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px)),hsla(var(--b1)/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));
}

.dv-tabs__lifted-item.tab-active:before {
  left: calc(var(--tab-radius, .5rem)*-1);
  --circle-pos: top left;
  background-image: var(--tab-corner-bg);
}

[dir=rtl] .dv-tabs__lifted-item.tab-active:before {
  --circle-pos: top right;
}

.dv-tabs__lifted-item.tab-active:after {
  right: calc(var(--tab-radius, .5rem)*-1);
  --circle-pos: top right;
  background-image: var(--tab-corner-bg);
}

[dir=rtl] .dv-tabs__lifted-item.tab-active:after {
  --circle-pos: top left;
}

.dv-tabs__lifted-item.tab-active:first-child:before {
  background: none;
}

.dv-tabs__lifted-item.tab-active:last-child:after {
  background: none;
}

.dv-tabs__lifted-item.tab-active+.tab-lifted.tab-active:before {
  background: none;
}

.tab-lifted.tab-active+.dv-tabs__lifted-item.tab-active:before {
  background: none;
}

.dv-tabs__lifted-item {
  flex: 1 1 0%;
  cursor: default;
}

.dv-tab-content {
  margin-top: 0.5rem;
}

.dv-tab-content--hidden {
  display: none;
}

/* purgecss end ignore */`;var Ht=Rt,$n=[Pt,Dt,Ht];const Ln=Symbol("tabs"),jn=Symbol("TabType"),qt={type:{type:String},size:{type:String,default:"md"},value:String},R=c({name:"Tabs",props:qt,inheritAttrs:!1,emits:["update:value"],setup:(n,{slots:r,emit:e,attrs:o})=>{const a=b=>{e("update:value",b)},i=p(()=>({type:n.type,size:n.size,currentName:n.value,onChange:a}));X(Ln,i);const l=(b,u=[])=>(Array.from(b||[]).forEach(h=>{const v=h.type;v&&v[jn]?u.push(h.props):(v===B||v==="template")&&l(h.children,u)}),u),g=p(()=>["dv-tab tab",`tab-${n.type}`,`tab-${n.size}`]);return()=>{var h;const b=((h=r.default)==null?void 0:h.call(r))||[],u=l(b);return t(B,null,[t("div",M(o,{class:"dv-tabs tabs"}),[u.map(v=>t("a",{class:[g.value,{"tab-active":n.value===v.name}],onClick:()=>{a(v.name)}},[v.title])),n.type==="lifted"?t("div",{class:"dv-tabs__lifted-item"},null):null]),b])}}},$n),z=c({name:"Tab",[jn]:!0,props:{title:String,name:String},setup:(n,{slots:r})=>{const e=G(Ln);return()=>{var o;return t("div",{class:["dv-tab-content",{"dv-tab-content--hidden":n.name!==e.value.currentName}]},[(o=r.default)==null?void 0:o.call(r)])}}},$n);function Ft(n){return typeof n=="number"&&Number.isFinite(n)?n+"px":n||""}const Wt=`/* purgecss start ignore */

.table {
  text-align: left;
  /* th:first-child{
    box-shadow: -1px 0 hsl(var(--b2, 210 20% 98%)) inset;
  } */
}

.table th, .table td {
  white-space: nowrap;
  padding: 1rem;
  vertical-align: middle
}

.table tr.active th, .table tr.active:nth-child(even) th, .table tr.active td, .table tr.active:nth-child(even) td {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b3) / var(--tw-bg-opacity))
}

.table tr.hover:hover th, .table tr.hover:nth-child(even):hover th, .table tr.hover:hover td, .table tr.hover:nth-child(even):hover td {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b3) / var(--tw-bg-opacity))
}

.table:not(.table-zebra) thead tr:not(:last-child) th, .table:not(.table-zebra) tbody tr:not(:last-child) th, .table:not(.table-zebra) tfoot tr:not(:last-child) th, .table:not(.table-zebra) thead tr:not(:last-child) td, .table:not(.table-zebra) tbody tr:not(:last-child) td, .table:not(.table-zebra) tfoot tr:not(:last-child) td {
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsla(var(--b2) / var(--tw-border-opacity))
}

.table thead th, .table tfoot th, .table thead td, .table tfoot td {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b2) / var(--tw-bg-opacity));
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase
}

.table thead th:first-child, .table tfoot th:first-child, .table thead td:first-child, .table tfoot td:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem
}

.table thead th:last-child, .table tfoot th:last-child, .table thead td:last-child, .table tfoot td:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem
}

.table tbody th, .table tbody td {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b1) / var(--tw-bg-opacity))
}

.table-zebra tbody tr th:first-child, .table-zebra tbody tr td:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem
}

.table-zebra tbody tr th:last-child, .table-zebra tbody tr td:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem
}

.table-zebra tbody tr:nth-child(even) th, .table-zebra tbody tr:nth-child(even) td {
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b2) / var(--tw-bg-opacity))
}

.table-compact th, .table-compact td {
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem
}

/* purgecss end ignore */`,Gt=`/* purgecss start ignore */

.table {
  position: relative;
}

.table th:first-child {
  position: sticky;
  left: 0px;
  z-index: 10;
  /* because safari */
  position: -webkit-sticky;
}

/* purgecss end ignore */`,Zt=`/* purgecss start ignore */

.dv-table-wrap {
  overflow-x: auto;
}

.table {
  min-width: 100%;
}

.table colgroup col {
  width: 168px;
}

.table td {
  white-space: normal;
  word-break: break-all;
}

/* purgecss end ignore */`;var Xt=Zt,Yt=[Wt,Gt,Xt];const Kt={zebra:Boolean,compact:Boolean,columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},H=c({name:"Table",props:Kt,setup:n=>{const r=p(()=>["dv-table table",{"table-zebra":n.zebra,"table-compact":n.compact}]),e=p(()=>n.columns.map((a,i)=>W(C({},a),{key:a.key||a.dataIndex||i}))),o=p(()=>e.value.map((a,i)=>t("th",{style:a.fixed?{position:"sticky",[a.fixed==="left"?"left":"right"]:0}:{position:"relative"},key:a.key},[typeof a.title=="function"?a.title():a.title])));return()=>t("div",{class:"dv-table-wrap"},[t("table",{class:r.value},[t("colgroup",null,[e.value.map(a=>t("col",{key:a.key,style:{width:Ft(a.width)}},null))]),t("thead",null,[t("tr",null,[o.value])]),t("tbody",null,[n.dataSource.map((a,i)=>t("tr",{key:i,class:"hover"},[n.columns.map(l=>t("td",{key:l.dataIndex||l.key,style:l.fixed?{position:"sticky",[l.fixed==="left"?"left":"right"]:0}:{position:"relative"}},[typeof l.render=="function"?l.render(a[l.dataIndex],a,i):a[l.dataIndex]]))]))])])])}},Yt);var Ut=Object.freeze({__proto__:null,Alert:_n,Artboard:In,Button:k,ButtonGroup:nn,Drawer:O,Menu:N,MenuItem:_,Navbar:V,NavbarStart:P,NavbarCenter:Mn,NavbarEnd:D,Tabs:R,Tab:z,Table:H});function Tn(n,r){const{prefix:e}=C({prefix:"Dv"},r);[Ut,gt].forEach(o=>{Object.keys(o).forEach(a=>{const i=o[a];typeof i=="object"&&"setup"in i&&/^[A-Z]/.test(i.name)&&n.component(e+i.name,i)})})}const Jt="0.0.1-alpha.0";var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Alert:_n,Artboard:In,Drawer:O,IconAdjustments:tn,IconArchive:en,IconArrow:rn,IconBack:an,IconBase:s,IconBell:L,IconBookOpen:on,IconCheck:cn,IconClose:ln,IconCode:dn,IconColor:bn,IconColorSwatch:sn,IconDocumentAdd:pn,IconDots:un,IconEye:vn,IconFolder:hn,IconGithub:j,IconHeart:gn,IconInboxIn:wn,IconInfo:T,IconInvalid:A,IconLightningBolt:mn,IconMenu:S,IconMenuAlt2:fn,IconSearch:yn,IconTemplate:xn,IconText:kn,IconWarning:E,Menu:N,MenuItem:_,Navbar:V,NavbarCenter:Mn,NavbarEnd:D,NavbarStart:P,Tab:z,Table:H,Tabs:R,default:Tn,version:Jt,Button:k,ButtonGroup:nn});function Qt(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!Jn(n)}var ne=$({name:"App",setup:()=>{const n=Y(!1),r=Yn();Kn(()=>r.path,()=>{n.value=!1});const{components:e}=U.reduce((a,i)=>(/^\/components\//.test(i.path)&&a.components.push(i),a),{components:[]}),o=e.sort((a,i)=>a.name.localeCompare(i.name)).map(a=>{let i;return d(_,{childWrapper:!1,key:a.path,class:"capitalize"},{default:()=>[d(Un,{to:a.path,activeClass:"active"},Qt(i=a.name.replace("components-",""))?i:{default:()=>[i]})]})});return()=>d("main",null,[d(O,{disableTeleport:!0,mobileOnly:!0,class:"h-screen",open:n.value,onClose:()=>n.value=!1},{default:()=>d("div",{class:"overflow-y-auto w-80 bg-white border-r border-gray-200"},[d(N,{class:"rounded-box p-4",compact:!0},{default:()=>[d(_,{asTitle:!0},{default:()=>[m("Components")]}),o]})]),content:()=>d("div",null,[d("header",{class:"sticky inset-x-0 top-0 bg-white border-b border-gray-100 z-20"},[d(V,{class:""},{default:()=>[d(P,{class:"mx-2"},{default:()=>[d("div",{class:"lg:hidden"},[d(k,{type:"ghost",shape:"square",onClick:()=>{n.value=!n.value}},{default:()=>[d(S,{size:"2em"},null)]})])]}),d(D,null,{default:()=>[d(k,{component:"a",href:"https://github.com/daief/daisyui-vue",target:"_blank",type:"ghost"},{default:()=>[d(j,{size:"2em"},null)]})]})]})]),d("div",{class:"p-4 pb-8 lg:p-10"},[d(Qn("router-view"),null,null)])])})])}});var An=(n,r)=>{for(const[e,o]of r)n[e]=o;return n},te=An(ne,[["__scopeId","data-v-50a6b668"]]),ee=$({name:"Playground",props:{code:String,lang:{type:String,default:"html"}},setup:(n,{slots:r})=>{const e=Y("preview");return()=>d("div",{class:"dv-playground py-2"},[d(R,{type:"lifted",value:e.value,"onUpdate:value":o=>e.value=o},{default:()=>[d(z,{name:"preview",title:"Preview"},{default:()=>{var o;return[(o=r.default)==null?void 0:o.call(r)]}}),d(z,{name:"code",title:"Code"},{default:()=>[d("pre",null,[d("code",{class:`hljs language-${n.lang} rounded-md`,"hljs-language":n.lang,innerHTML:n.code},null)])]})]})])}});var re=$({name:"MarkdownTable",props:{columns:Array,dataSource:Array},setup:(n,{slots:r})=>()=>d("div",null,[d(H,nt({zebra:!0,compact:!0,class:"dv-markdowntable w-full"},n),null)])});var ae=An(re,[["__scopeId","data-v-5c5a3078"]]);tt(te,{routes:U,base:"/daisyui-vue/"},({app:n,router:r,isClient:e})=>{n.component("Playground",ee),n.component("MarkdownTable",ae),n.use(Tn)});export{le as D,An as _};
