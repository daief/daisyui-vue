var En=Object.defineProperty,Pn=Object.defineProperties;var Nn=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var Vn=Object.prototype.hasOwnProperty,Dn=Object.prototype.propertyIsEnumerable;var G=(t,r,e)=>r in t?En(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,$=(t,r)=>{for(var e in r||(r={}))Vn.call(r,e)&&G(t,e,r[e]);if(W)for(var e of W(r))Dn.call(r,e)&&G(t,e,r[e]);return t},X=(t,r)=>Pn(t,Nn(r));import{u as Rn,c as n,a as w,d as _,b as p,p as Y,i as Z,r as m,F as T,w as U,m as I,T as Hn,e as qn,v as Fn,f as K,g as Wn,n as Gn,h as Xn,R as Yn,j as Zn,V as Un}from"./vendor.e4fb2856.js";const Kn=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}};Kn();const Jn="modulepreload",J={},Qn="/daisyui-vue/",g=function(r,e){return!e||e.length===0?r():Promise.all(e.map(o=>{if(o=`${Qn}${o}`,o in J)return;J[o]=!0;const a=o.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Jn,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((h,s)=>{c.addEventListener("load",h),c.addEventListener("error",s)})})).then(()=>r())};var nt={setup(){return Rn({title:"daisyui-vue"}),()=>n("div",null,[n("h1",{class:"text-2xl"},[w("daisyui vue(WIP)")]),n("p",{class:"mt-4"},[w("Vue3 components base on")," ",n("a",{href:"https://github.com/saadeghi/daisyui",class:"text-blue-400 underline"},[w("daisyui")]),w(".")])])}};const Q=[{name:"components-tooltip",path:"/components/tooltip",component:()=>g(()=>import("./tooltip.f5f7bd95.js"),["assets/tooltip.f5f7bd95.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-table",path:"/components/table",component:()=>g(()=>import("./table.48894519.js"),["assets/table.48894519.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-tab",path:"/components/tab",component:()=>g(()=>import("./tab.0df4a09a.js"),["assets/tab.0df4a09a.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-menu",path:"/components/menu",component:()=>g(()=>import("./menu.82300d62.js"),["assets/menu.82300d62.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-icons",path:"/components/icons",component:()=>g(()=>import("./icons.99cd24b3.js"),["assets/icons.99cd24b3.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-drawer",path:"/components/drawer",component:()=>g(()=>import("./drawer.f5ff9cb9.js"),["assets/drawer.f5ff9cb9.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-button",path:"/components/button",component:()=>g(()=>import("./button.aa9ac948.js"),["assets/button.aa9ac948.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-artboard",path:"/components/artboard",component:()=>g(()=>import("./artboard.6d84de54.js"),["assets/artboard.6d84de54.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"components-alert",path:"/components/alert",component:()=>g(()=>import("./alert.8531ab3a.js"),["assets/alert.8531ab3a.js","assets/vendor.e4fb2856.js"]),props:!0},{name:"index",path:"/",component:nt,props:!0}];let f=[],y=null;function tt(t){typeof document!="undefined"&&(y||(y=document.createElement("style"),y.setAttribute("daisyui-vue","0.0.1-alpha.0"),document.head.prepend(y)),Array.isArray(t)?f.push(...t):f.push(t),setTimeout(()=>{const r=f.filter((e,o)=>f.indexOf(e)===o);y.append(r.join(`
`)),f=[]}))}function l(t,r=[]){return tt(r),_(t)}const nn=Symbol("ButtonGroup"),et=`/* purgecss start ignore */

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
  line-height: 1em;
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

/* purgecss end ignore */`,rt=`/* purgecss start ignore */

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

.btn-outline.btn-success {
  --tw-text-opacity: 1;
  color: hsla(var(--su) / var(--tw-text-opacity));
}

.btn-outline.btn-success:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--nc) / var(--tw-text-opacity));
}

.btn-outline.btn-info {
  --tw-text-opacity: 1;
  color: hsla(var(--in) / var(--tw-text-opacity));
}

.btn-outline.btn-info:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--nc) / var(--tw-text-opacity));
}

.btn-outline.btn-warning {
  --tw-text-opacity: 1;
  color: hsla(var(--wa) / var(--tw-text-opacity));
}

.btn-outline.btn-warning:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--nc) / var(--tw-text-opacity));
}

.btn-outline.btn-error {
  --tw-text-opacity: 1;
  color: hsla(var(--er) / var(--tw-text-opacity));
}

.btn-outline.btn-error:hover {
  --tw-border-opacity: 1;
  border-color: hsla(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsla(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--nc) / var(--tw-text-opacity));
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

/* purgecss end ignore */`,at=`/* purgecss start ignore */

.btn-xs {
  min-height: 1.5rem;
  height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 0.75rem;
}

.btn-sm {
  min-height: 2rem;
  height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
}

.btn-md {
  min-height: 3rem;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  min-height: 4rem;
  height: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.125rem;
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

/* purgecss end ignore */`,ot=`/* purgecss start ignore */

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

/* purgecss end ignore */`,it=`/* purgecss start ignore */

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

/* purgecss end ignore */`;var tn=[et,rt,at,ot,it];const z=l({name:"Button",props:{block:Boolean,wide:Boolean,disabled:Boolean,outline:Boolean,active:Boolean,loading:Boolean,noAnimation:Boolean,onClick:Function},setup:(t,{slots:r,attrs:e})=>{const o=Z(nn,null),a=p(()=>e.size||(o==null?void 0:o.value.size)||"md"),i=p(()=>e.shape||(o==null?void 0:o.value.shape)||"default"),c=p(()=>(o==null?void 0:o.value.outline)||t.outline),h=p(()=>e.component||"button"),s=m(!1),u=p(()=>t.loading||s.value),v=p(()=>["dv-btn btn",e.type==="glass"?"glass":e.type?`btn-${e.type}`:"",{[`btn-${a.value}`]:!0,[`btn-${i.value}`]:!0,"btn-block":t.block,"btn-wide":t.wide,loading:u.value,"btn-disabled":t.disabled,"btn-active":t.active,"btn-outline":c.value,"no-animation":t.noAnimation}]),b=async k=>{if(!(s.value||typeof t.onClick!="function")){s.value=!0;try{await t.onClick(k)}catch{}s.value=!1}},x=p(()=>["circle","square"].includes(e.shape)?!u.value:!0);return()=>{var k;return n(h.value,{disabled:t.disabled||void 0,class:v.value,onClick:b},[x.value?(k=r.default)==null?void 0:k.call(r):null])}}},tn),lt={outline:Boolean},en=l({name:"ButtonGroup",props:lt,setup:(t,{slots:r,attrs:e})=>{const o=p(()=>({size:e.size||"md",shape:e.shape||"defalut",outline:t.outline}));return Y(nn,o),()=>{var a;return n("div",{class:"dv-btn-group btn-group"},[(a=r.default)==null?void 0:a.call(r)])}}},tn),ct=`/* purgecss start ignore */

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

/* purgecss end ignore */`;var dt=ct,st=[dt];const d=l({name:"IconBase",props:{color:{type:String,default:"currentColor"},size:[String,Number],useStroke:{type:Boolean,default:!0},viewBox:{type:String,default:"0 0 1024 1024"}},setup:(t,{slots:r})=>()=>{var e;return n("svg",{class:"dv-icon",viewBox:t.viewBox,focusable:"false","aria-hidden":"false",fill:t.useStroke?"none":t.color,stroke:t.useStroke?t.color:"none",style:t.size?{fontSize:typeof t.size=="number"?`${t.size}px`:t.size}:{}},[(e=r.default)==null?void 0:e.call(r)])}},st),rn=l({name:"IconAdjustments",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"},null)]})}),an=l({name:"IconArchive",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},null)]})}),on=l({name:"IconArrow",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null)]})}),ln=l({name:"IconBack",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"},null)]})}),L=l({name:"IconBell",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"},null)]})}),cn=l({name:"IconBookOpen",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},null)]})}),dn=l({name:"IconCheck",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null)]})}),sn=l({name:"IconClose",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null)]})}),bn=l({name:"IconCode",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},null)]})}),pn=l({name:"IconColorSwatch",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"},null)]})}),un=l({name:"IconColor",setup:()=>()=>n(d,{viewBox:"0 0 24 24",useStroke:!1},{default:()=>[n("path",{d:"M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z"},null)]})}),vn=l({name:"IconDocumentAdd",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null)]})}),hn=l({name:"IconDots",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"},null)]})}),gn=l({name:"IconEye",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null)]})}),wn=l({name:"IconFolder",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"},null)]})}),j=l({name:"IconGithub",setup:()=>()=>n(d,{viewBox:"0 0 512 512",useStroke:!1},{default:()=>[n("path",{d:"M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"},null)]})}),mn=l({name:"IconHeart",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},null)]})}),fn=l({name:"IconInboxIn",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"},null)]})}),A=l({name:"IconInfo",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null)]})}),S=l({name:"IconInvalid",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"},null)]})}),yn=l({name:"IconLightningBolt",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 10V3L4 14h7v7l9-11h-7z"},null)]})}),xn=l({name:"IconMenuAlt2",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"},null)]})}),O=l({name:"IconMenu",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null)]})}),kn=l({name:"IconSearch",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},null)]})}),_n=l({name:"IconTemplate",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"},null)]})}),In=l({name:"IconText",setup:()=>()=>n(d,{viewBox:"0 0 24 24",useStroke:!1},{default:()=>[n("path",{d:"M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z"},null)]})}),E=l({name:"IconWarning",setup:()=>()=>n(d,{viewBox:"0 0 24 24"},{default:()=>[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null)]})});var bt=Object.freeze({__proto__:null,IconBase:d,IconAdjustments:rn,IconArchive:an,IconArrow:on,IconBack:ln,IconBell:L,IconBookOpen:cn,IconCheck:dn,IconClose:sn,IconCode:bn,IconColorSwatch:pn,IconColor:un,IconDocumentAdd:vn,IconDots:hn,IconEye:gn,IconFolder:wn,IconGithub:j,IconHeart:mn,IconInboxIn:fn,IconInfo:A,IconInvalid:S,IconLightningBolt:yn,IconMenuAlt2:xn,IconMenu:O,IconSearch:kn,IconTemplate:_n,IconText:In,IconWarning:E});const pt=`/* purgecss start ignore */

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

/* purgecss end ignore */`,ut=`/* purgecss start ignore */

.alert {
  border-radius: var(--rounded-box,1rem);
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b2) / var(--tw-bg-opacity));
  padding: 1rem;
}

/* purgecss end ignore */`,vt=`/* purgecss start ignore */

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

/* purgecss end ignore */`,ht=`/* purgecss start ignore */

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

/* purgecss end ignore */`;var gt=ht,wt=[pt,ut,vt,gt];const zn=l({name:"Alert",setup:(t,{attrs:r,slots:e})=>()=>{var h,s,u,v,b,x;const o=((h=e.icon)==null?void 0:h.call(e))||((u=(s={info:()=>n(A,null,null),success:()=>n(L,null,null),warning:()=>n(E,null,null),error:()=>n(S,null,null)})[r.type])==null?void 0:u.call(s)),a=(v=e.actions)==null?void 0:v.call(e),i=(b=e.content)==null?void 0:b.call(e),c=(x=e.default)==null?void 0:x.call(e);return n("div",{class:["dv-alert alert",`alert-${r.type||""}`]},[n("div",{class:"dv-alert__content"},[o?n("div",{class:"dv-alert__iconwrap"},[o]):null,n("label",null,[i?n(T,null,[n("h4",null,[c]),n("p",null,[i])]):c])]),a?n("div",{class:"dv-alert__actions"},[a]):null])}},wt),mt=`/* purgecss start ignore */

.artboard {
  width: 100%;
}

/* purgecss end ignore */`,ft=`/* purgecss start ignore */

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

/* purgecss end ignore */`,yt=`/* purgecss start ignore */

.artboard-demo {
  border-radius: var(--rounded-box,1rem);
  --tw-bg-opacity: 1;
  background-color: hsla(var(--b1) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsla(var(--bc) / var(--tw-text-opacity));
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* purgecss end ignore */`;var xt=[mt,ft,yt];const Cn=l({name:"Artboard",props:{phone:[String,Boolean],horizontal:Boolean},setup:(t,{slots:r})=>()=>{var e;return n("div",{class:["artboard artboard-demo",{phone:["",!0].includes(t.phone),[`phone-${t.phone}`]:!!t.phone&&typeof t.phone=="string",horizontal:!!t.horizontal}]},[(e=r.default)==null?void 0:e.call(r)])}},xt),kt=`/* purgecss start ignore */

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

[dir=rtl] .drawer-toggle ~ .drawer-side > .drawer-overlay + * {
  --tw-translate-x: 100%;
}

[dir=rtl] .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {
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

/* purgecss end ignore */`,_t=`/* purgecss start ignore */

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

/* purgecss end ignore */`,It=`/* purgecss start ignore */

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

/* purgecss end ignore */`;var zt=It,Ct=[kt,_t,zt];function Bn(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!K(t)}let Mn=0;const Bt={open:Boolean,disableTeleport:Boolean,mobileOnly:Boolean},P=l({name:"Drawer",props:Bt,inheritAttrs:!1,setup:(t,{attrs:r,slots:e})=>{const o=m(t.open);return U(()=>t.open,async()=>{await Gn(),await new Promise(a=>setTimeout(a)),o.value=t.open}),()=>{var c,h,s,u;const a=v=>{let b;return n(Hn,{enterFromClass:"dv-drawer--opacity-0",enterActiveClass:"dv-drawer--transition-opacity",leaveActiveClass:"dv-drawer--transition-opacity",leaveToClass:"dv-drawer--opacity-0",duration:300},Bn(b=qn(v,[[Fn,t.mobileOnly?!0:t.open]]))?b:{default:()=>[b]})},i=t.disableTeleport?n("div",I(r,{class:["dv-drawer drawer",{"dv-drawer--teleport":!t.disableTeleport,"drawer-end":r.placement==="right","drawer-mobile":!!t.mobileOnly}],style:{zIndex:100+Mn}}),[n("input",{type:"checkbox",class:"drawer-toggle",checked:o.value},null),n("div",{class:"drawer-content"},[(c=e.content)==null?void 0:c.call(e)]),a(n("div",{class:"drawer-side"},[n("div",{class:"drawer-overlay",onClick:r.onClose},null),(h=e.default)==null?void 0:h.call(e)]))]):a(n("div",I(r,{class:["dv-drawer drawer",{"dv-drawer--teleport":!t.disableTeleport,"drawer-end":r.placement==="right","drawer-mobile":!!t.mobileOnly}],style:{zIndex:100+Mn}}),[n("input",{type:"checkbox",class:"drawer-toggle",checked:o.value},null),n("div",{class:"drawer-content"},[(s=e.content)==null?void 0:s.call(e)]),n("div",{class:"drawer-side"},[n("div",{class:"drawer-overlay",onClick:r.onClose},null),(u=e.default)==null?void 0:u.call(e)])]));return t.disableTeleport?i:n(Wn,{to:"body"},Bn(i)?i:{default:()=>[i]})}}},Ct),Mt=`/* purgecss start ignore */

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

/* purgecss end ignore */`,$t=`/* purgecss start ignore */

.menu {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.menu.horizontal {
  display: inline-flex;
  flex-direction: row;
}

.menu.horizontal :where(li) {
  flex-direction: row;
}

.menu :where(li) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.menu :where(li) > a, .menu :where(li) > span {
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

.menu :where(li) > a {
  cursor: pointer;
}

.menu :where(li) > a:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.menu :where(li).disabled > a, .menu :where(li).disabled > span {
  cursor: auto;
}

/* purgecss end ignore */`;var $n=[Mt,$t];const Tt={compact:Boolean,horizontal:Boolean},N=l({name:"Menu",props:Tt,setup:(t,{slots:r})=>{const e=p(()=>["menu",{compact:t.compact,horizontal:t.horizontal}]);return()=>{var o;return n("ul",{class:e.value},[(o=r.default)==null?void 0:o.call(r)])}}},$n),Lt={asTitle:Boolean,disabled:Boolean,bordered:Boolean,hoverBordered:Boolean,active:Boolean},C=l({name:"MenuItem",props:Lt,setup:(t,{slots:r,attrs:e})=>{const o=p(()=>[{"menu-title":t.asTitle,disabled:t.disabled,bordered:t.bordered,"hover-bordered":t.hoverBordered}]),a=p(()=>"childWrapper"in e?e.childWrapper===!1?null:e.childWrapper:t.asTitle?"span":"a");return()=>{var c;const i=(c=r.default)==null?void 0:c.call(r);return n("li",{class:o.value},[a.value?n(a.value,{class:{active:t.active}},i):i])}}},$n),jt=`/* purgecss start ignore */

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

/* purgecss end ignore */`,At=`/* purgecss start ignore */

.navbar {
  padding: var(--navbar-padding, 0.5rem);
  min-height: 4rem;
}

/* purgecss end ignore */`;var B=[jt,At];const V=l({name:"Navbar",setup:(t,{slots:r})=>()=>{var e;return n("div",{class:"navbar"},[(e=r.default)==null?void 0:e.call(r)])}},B),D=l({name:"NavbarStart",setup:(t,{slots:r})=>()=>{var e;return n("div",{class:"navbar-start"},[(e=r.default)==null?void 0:e.call(r)])}},B),Tn=l({name:"NavbarCenter",setup:(t,{slots:r})=>()=>{var e;return n("div",{class:"navbar-center"},[(e=r.default)==null?void 0:e.call(r)])}},B),R=l({name:"NavbarEnd",setup:(t,{slots:r})=>()=>{var e;return n("div",{class:"navbar-end"},[(e=r.default)==null?void 0:e.call(r)])}},B),St=`/* purgecss start ignore */

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

/* purgecss end ignore */`,Ot=`/* purgecss start ignore */

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

/* purgecss end ignore */`,Et=`/* purgecss start ignore */

.tab-md {
  height: 2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
  --tab-padding: 1rem;
}

.tab-lg {
  height: 3rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 2;
  --tab-padding: 1.25rem;
}

.tab-sm {
  height: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: .75rem;
  --tab-padding: 0.75rem;
}

.tab-xs {
  height: 1.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: .75rem;
  --tab-padding: 0.5rem;
}

/* purgecss end ignore */`,Pt=`/* purgecss start ignore */

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

.dv-tabs.tabs-boxed {
  display: inline-flex;
}

.dv-tab-content {
  margin-top: 0.5rem;
}

.dv-tab-content--hidden {
  display: none;
}

/* purgecss end ignore */`;var Nt=Pt,Ln=[St,Ot,Et,Nt];const jn=Symbol("tabs"),An=Symbol("TabType"),Vt={type:{type:String},size:{type:String,default:"md"},value:String},H=l({name:"Tabs",props:Vt,inheritAttrs:!1,emits:["update:value"],setup:(t,{slots:r,emit:e,attrs:o})=>{const a=s=>{e("update:value",s)},i=p(()=>({type:t.type,size:t.size,currentName:t.value,onChange:a}));Y(jn,i);const c=(s,u=[])=>(Array.from(s||[]).forEach(v=>{const b=v.type;b&&b[An]?u.push(v.props):(b===T||b==="template")&&c(v.children,u)}),u),h=p(()=>["dv-tab tab",`tab-${t.type}`,`tab-${t.size}`]);return()=>{var v;const s=((v=r.default)==null?void 0:v.call(r))||[],u=c(s);return n(T,null,[n("div",I(o,{class:{"dv-tabs tabs":!0,"tabs-boxed":t.type==="boxed"}}),[u.map(b=>n("a",{class:[h.value,{"tab-active":t.value===b.name}],onClick:()=>{a(b.name)}},[b.title])),t.type==="lifted"?n("div",{class:"dv-tabs__lifted-item"},null):null]),s])}}},Ln),M=l({name:"Tab",[An]:!0,props:{title:String,name:String},setup:(t,{slots:r})=>{const e=Z(jn);return()=>{var o;return n("div",{class:["dv-tab-content",{"dv-tab-content--hidden":t.name!==e.value.currentName}]},[(o=r.default)==null?void 0:o.call(r)])}}},Ln);function Dt(t){return typeof t=="number"&&Number.isFinite(t)?t+"px":t||""}function Rt(t){return typeof t=="undefined"}const Ht=`/* purgecss start ignore */

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

/* purgecss end ignore */`,qt=`/* purgecss start ignore */

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

/* purgecss end ignore */`,Ft=`/* purgecss start ignore */

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

/* purgecss end ignore */`;var Wt=Ft,Gt=[Ht,qt,Wt];const Xt={zebra:Boolean,compact:Boolean,columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},q=l({name:"Table",props:Xt,setup:t=>{const r=p(()=>["dv-table table",{"table-zebra":t.zebra,"table-compact":t.compact}]),e=p(()=>t.columns.map((a,i)=>X($({},a),{key:a.key||a.dataIndex||i}))),o=p(()=>e.value.map((a,i)=>n("th",{style:a.fixed?{position:"sticky",[a.fixed==="left"?"left":"right"]:0}:{position:"relative"},key:a.key},[typeof a.title=="function"?a.title():a.title])));return()=>n("div",{class:"dv-table-wrap"},[n("table",{class:r.value},[n("colgroup",null,[e.value.map(a=>n("col",{key:a.key,style:{width:Dt(a.width)}},null))]),n("thead",null,[n("tr",null,[o.value])]),n("tbody",null,[t.dataSource.map((a,i)=>n("tr",{key:i,class:"hover"},[t.columns.map(c=>n("td",{key:c.dataIndex||c.key,style:c.fixed?{position:"sticky",[c.fixed==="left"?"left":"right"]:0}:{position:"relative"}},[typeof c.render=="function"?c.render(a[c.dataIndex],a,i):a[c.dataIndex]]))]))])])])}},Gt),Yt=`/* purgecss start ignore */

.tooltip {
  position: relative;
  display: inline-block;
  --tooltip-offset: calc(100% + 1px + var(--tooltip-tail, 0px));
}

.tooltip:before {
  position: absolute;
  pointer-events: none;
}

.tooltip:before {
  content: attr(data-tip);
}

.tooltip:before {
  transform: translateX(-50%);
  top: auto;
  left: 50%;
  right: auto;
  bottom: var(--tooltip-offset);
}

.tooltip-bottom:before {
  transform: translateX(-50%);
  top: var(--tooltip-offset);
  left: 50%;
  right: auto;
  bottom: auto;
}

.tooltip-left:before {
  transform: translateY(-50%);
  top: 50%;
  left: auto;
  right: var(--tooltip-offset);
  bottom: auto;
}

.tooltip-right:before {
  transform: translateY(-50%);
  top: 50%;
  left: var(--tooltip-offset);
  right: auto;
  bottom: auto;
}

/* purgecss end ignore */`,Zt=`/* purgecss start ignore */

.tooltip {
  position: relative;
  display: inline-block;
  text-align: center;
  --tooltip-tail: 3px;
  --tooltip-color: hsl(var(--n));
  --tooltip-text-color: hsl(var(--nc));
  --tooltip-tail-offset: calc(100% + 1px - var(--tooltip-tail));
}

.tooltip:before, .tooltip:after {
  opacity: 0;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 100ms;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip:after {
  position: absolute;
}

.tooltip:before {
  max-width: 20rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: var(--tooltip-color);
  color: var(--tooltip-text-color);
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.tooltip.tooltip-open:before, .tooltip.tooltip-open:after, .tooltip:hover:before, .tooltip:hover:after {
  opacity: 1;
  transition-delay: 75ms;
}

.tooltip:after {
  content: '';
  border-style: solid;
  border-width: var(--tooltip-tail, 0);
  width: 0;
  height: 0;
  display: block;
  position: absolute;
}

.tooltip:after {
  transform: translateX(-50%);
  border-color: var(--tooltip-color) transparent transparent transparent;
  top: auto;
  left: 50%;
  right: auto;
  bottom: var(--tooltip-tail-offset);
}

.tooltip-bottom:after {
  transform: translateX(-50%);
  border-color: transparent transparent var(--tooltip-color) transparent;
  top: var(--tooltip-tail-offset);
  left: 50%;
  right: auto;
  bottom: auto;
}

.tooltip-left:after {
  transform: translateY(-50%);
  border-color: transparent transparent transparent var(--tooltip-color);
  top: 50%;
  left: auto;
  right: calc(var(--tooltip-tail-offset) + 1px);
  bottom: auto;
}

.tooltip-right:after {
  transform: translateY(-50%);
  border-color: transparent var(--tooltip-color) transparent transparent;
  top: 50%;
  left: calc(var(--tooltip-tail-offset) + 1px);
  right: auto;
  bottom: auto;
}

.tooltip-primary {
  --tooltip-color: hsl(var(--p));
  --tooltip-text-color: hsl(var(--pc));
}

.tooltip-secondary {
  --tooltip-color: hsl(var(--s));
  --tooltip-text-color: hsl(var(--sc));
}

.tooltip-accent {
  --tooltip-color: hsl(var(--a));
  --tooltip-text-color: hsl(var(--ac));
}

.tooltip-info {
  --tooltip-color: hsla(var(--in) / 0.1);
  --tooltip-text-color: hsl(var(--in));
}

.tooltip-success {
  --tooltip-color: hsla(var(--su) / 0.1);
  --tooltip-text-color: hsl(var(--su));
}

.tooltip-warning {
  --tooltip-color: hsla(var(--wa) / 0.1);
  --tooltip-text-color: hsl(var(--wa));
}

.tooltip-error {
  --tooltip-color: hsla(var(--er) / 0.1);
  --tooltip-text-color: hsl(var(--er));
}

/* purgecss end ignore */`,Ut=`/* purgecss start ignore */

/* purgecss end ignore */`;var Kt=Ut,Jt=[Yt,Zt,Kt];const Qt={open:{type:Boolean,default:void 0}},Sn=l({name:"Tooltip",props:Qt,setup:(t,{attrs:r,slots:e})=>{const o=m(!!t.open),a=p(()=>Rt(t.open)?o.value:t.open);return()=>{var i;return n("div",{class:["dv-tooltip tooltip",{"tooltip-open":a.value,[`tooltip-${r.placement}`]:!!r.placement,[`tooltip-${r.type}`]:!!r.type}],"data-tip":r.tip},[(i=e==null?void 0:e.default)==null?void 0:i.call(e)])}}},Jt);var ne=Object.freeze({__proto__:null,Alert:zn,Artboard:Cn,Button:z,ButtonGroup:en,Drawer:P,Menu:N,MenuItem:C,Navbar:V,NavbarStart:D,NavbarCenter:Tn,NavbarEnd:R,Tabs:H,Tab:M,Table:q,Tooltip:Sn});function On(t,r){const{prefix:e}=$({prefix:"Dv"},r);[ne,bt].forEach(o=>{Object.keys(o).forEach(a=>{const i=o[a];typeof i=="object"&&"setup"in i&&/^[A-Z]/.test(i.name)&&t.component(e+i.name,i)})})}const te="0.0.1-alpha.0";var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Alert:zn,Artboard:Cn,Drawer:P,IconAdjustments:rn,IconArchive:an,IconArrow:on,IconBack:ln,IconBase:d,IconBell:L,IconBookOpen:cn,IconCheck:dn,IconClose:sn,IconCode:bn,IconColor:un,IconColorSwatch:pn,IconDocumentAdd:vn,IconDots:hn,IconEye:gn,IconFolder:wn,IconGithub:j,IconHeart:mn,IconInboxIn:fn,IconInfo:A,IconInvalid:S,IconLightningBolt:yn,IconMenu:O,IconMenuAlt2:xn,IconSearch:kn,IconTemplate:_n,IconText:In,IconWarning:E,Menu:N,MenuItem:C,Navbar:V,NavbarCenter:Tn,NavbarEnd:R,NavbarStart:D,Tab:M,Table:q,Tabs:H,Tooltip:Sn,default:On,version:te,Button:z,ButtonGroup:en});function ee(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!K(t)}var re=_({name:"App",setup:()=>{const t=m(!1),r=Xn();U(()=>r.path,()=>{t.value=!1});const{components:e}=Q.reduce((a,i)=>(/^\/components\//.test(i.path)&&a.components.push(i),a),{components:[]}),o=e.sort((a,i)=>a.name.localeCompare(i.name)).map(a=>{let i;return n(C,{childWrapper:!1,key:a.path,class:"capitalize"},{default:()=>[n(Yn,{to:a.path,activeClass:"active"},ee(i=a.name.replace("components-",""))?i:{default:()=>[i]})]})});return()=>n("main",null,[n(P,{disableTeleport:!0,mobileOnly:!0,class:"h-screen",open:t.value,onClose:()=>t.value=!1},{default:()=>n("div",{class:"overflow-y-auto w-80 bg-white border-r border-gray-200"},[n(N,{class:"rounded-box p-4",compact:!0},{default:()=>[n(C,{asTitle:!0},{default:()=>[w("Components")]}),o]})]),content:()=>n("div",null,[n("header",{class:"sticky inset-x-0 top-0 bg-white border-b border-gray-100 z-20"},[n(V,{class:""},{default:()=>[n(D,{class:"mx-2"},{default:()=>[n("div",{class:"lg:hidden"},[n(z,{type:"ghost",shape:"square",onClick:()=>{t.value=!t.value}},{default:()=>[n(O,{size:"2em"},null)]})])]}),n(R,null,{default:()=>[n(z,{component:"a",href:"https://github.com/daief/daisyui-vue",target:"_blank",type:"ghost"},{default:()=>[n(j,{size:"2em"},null)]})]})]})]),n("div",{class:"p-4 pb-8 lg:p-10"},[n(Zn("router-view"),null,null)])])})])}});var F=(t,r)=>{for(const[e,o]of r)t[e]=o;return t},ae=F(re,[["__scopeId","data-v-50a6b668"]]),oe=_({name:"Playground",props:{code:String,lang:{type:String,default:"html"}},setup:(t,{slots:r})=>{const e=m("preview");return()=>n("div",{class:"dv-playground py-2"},[n(H,{type:"lifted",value:e.value,"onUpdate:value":o=>e.value=o},{default:()=>[n(M,{name:"preview",title:"Preview"},{default:()=>{var o;return[(o=r.default)==null?void 0:o.call(r)]}}),n(M,{name:"code",title:"Code"},{default:()=>[n("pre",null,[n("code",{class:`hljs language-${t.lang} rounded-md`,"hljs-language":t.lang,innerHTML:t.code},null)])]})]})])}});var ie=F(oe,[["__scopeId","data-v-03294aad"]]),le=_({name:"MarkdownTable",props:{columns:Array,dataSource:Array},setup:(t,{slots:r})=>()=>n("div",null,[n(q,I({zebra:!0,compact:!0,class:"dv-markdowntable w-full"},t),null)])});var ce=F(le,[["__scopeId","data-v-5c5a3078"]]);Un(ae,{routes:Q,base:"/daisyui-vue/"},({app:t,router:r,isClient:e})=>{t.component("Playground",ie),t.component("MarkdownTable",ce),t.use(On)});export{pe as D,M as T,F as _,H as a};