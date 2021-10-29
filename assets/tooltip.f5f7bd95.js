import{u as h,j as e,k as j,c as s,l as a,F as r,o as t,q as g,a as p}from"./vendor.e4fb2856.js";const i=t("div",{class:"markdown-body"},[t("h1",null,"Tooltip"),t("h2",null,"Examples"),t("p",null,"tooltip")],-1),d={class:"pt-8 text-center"},u=p("hover me"),m=t("div",{class:"markdown-body"},[t("p",null,"tooltip-open")],-1),_={class:"pt-8 text-center"},v=p("open by default"),q=t("div",{class:"markdown-body"},[t("p",null,"tooltip-bottom")],-1),y={class:"pt-8 text-center"},f=p("bottom"),b=t("div",{class:"markdown-body"},[t("p",null,"tooltip-left")],-1),x={class:"pt-8 text-center"},w=p("left"),k=t("div",{class:"markdown-body"},[t("p",null,"tooltip-right")],-1),B={class:"pt-8 text-center"},N=p("right"),V=t("div",{class:"markdown-body"},[t("p",null,"with colors")],-1),C={class:"text-center grid grid-cols-3 lg:grid-cols-5 my-10 place-items-center gap-y-10"},E=p("netural"),F=p("primary"),P=p("secondary"),T=p("accent"),H=p("info"),z=p("success"),A=p("warning"),D=p("error"),G=t("div",{class:"markdown-body"},null,-1),Q={setup(I,{expose:c}){return c({frontmatter:{meta:[]}}),h({meta:[]}),(L,M)=>{const n=e("dv-button"),l=e("dv-tooltip"),o=e("Playground");return g(),j(r,null,[i,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>hover me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",d,[s(l,{tip:"hello"},{default:a(()=>[s(n,null,{default:a(()=>[u]),_:1})]),_:1})])]),_:1}),m,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>open by default<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",_,[s(l,{tip:"hello",open:""},{default:a(()=>[s(n,null,{default:a(()=>[v]),_:1})]),_:1})])]),_:1}),q,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>bottom<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",y,[s(l,{tip:"hello",open:"",placement:"bottom"},{default:a(()=>[s(n,null,{default:a(()=>[f]),_:1})]),_:1})])]),_:1}),b,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",x,[s(l,{tip:"hello",open:"",placement:"left"},{default:a(()=>[s(n,null,{default:a(()=>[w]),_:1})]),_:1})])]),_:1}),k,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>right<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",B,[s(l,{tip:"hello",open:"",placement:"right"},{default:a(()=>[s(n,null,{default:a(()=>[N]),_:1})]),_:1})])]),_:1}),V,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center grid grid-cols-3 lg:grid-cols-5 my-10 place-items-center gap-y-10&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;netural&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;netural&quot;</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",C,[s(l,{tip:"hello",open:"",type:"netural"},{default:a(()=>[s(n,{type:"netural"},{default:a(()=>[E]),_:1})]),_:1}),s(l,{tip:"hello",open:"",type:"primary"},{default:a(()=>[s(n,{type:"primary"},{default:a(()=>[F]),_:1})]),_:1}),s(l,{tip:"hello",open:"",type:"secondary"},{default:a(()=>[s(n,{type:"secondary"},{default:a(()=>[P]),_:1})]),_:1}),s(l,{tip:"hello",open:"",type:"accent"},{default:a(()=>[s(n,{type:"accent"},{default:a(()=>[T]),_:1})]),_:1}),s(l,{tip:"hello",open:"",type:"info"},{default:a(()=>[s(n,{type:"info"},{default:a(()=>[H]),_:1})]),_:1}),s(l,{tip:"hello",open:"",type:"success"},{default:a(()=>[s(n,{type:"success"},{default:a(()=>[z]),_:1})]),_:1}),s(l,{tip:"hello",open:"",type:"warning"},{default:a(()=>[s(n,{type:"warning"},{default:a(()=>[A]),_:1})]),_:1}),s(l,{tip:"hello",open:"",type:"error"},{default:a(()=>[s(n,{type:"error"},{default:a(()=>[D]),_:1})]),_:1})])]),_:1}),G],64)}}};export{Q as default};
