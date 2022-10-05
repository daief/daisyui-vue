import{u as m,_ as p,a0 as h,c as s,a1 as a,a2 as t,n as u,a3 as j,a as n}from"./vendor.57d76883.js";const g=t("div",{class:"markdown-body"},[t("h1",null,"Alert"),t("h2",null,"Examples"),t("p",null,"alert")],-1),_=n(" Lorem ipsum dolor sit amet, consectetur adip! "),v=t("div",{class:"markdown-body"},[t("p",null,"alert state: info")],-1),q=n("Lorem ipsum dolor sit amet, consectetur adip!"),y=t("div",{class:"markdown-body"},[t("p",null,"alert state: success")],-1),f=n(" Lorem ipsum dolor sit amet, consectetur adip! "),L=t("div",{class:"markdown-body"},[t("p",null,"alert state: warning")],-1),b=n(" Lorem ipsum dolor sit amet, consectetur adip! "),w=t("div",{class:"markdown-body"},[t("p",null,"alert state: error")],-1),k=n(" Lorem ipsum dolor sit amet, consectetur adip! "),x=t("div",{class:"markdown-body"},[t("p",null,"alert with actions")],-1),z=n(" Lorem ipsum dolor sit amet, consectetur adip! "),I=n("cancel"),A=n("apply"),B=t("div",{class:"markdown-body"},[t("p",null,"alert")],-1),N=n(" Lorem ipsum dolor sit amet, consectetur adip! "),S=n(" Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! "),T={class:"markdown-body"},V=t("h2",null,"Alert",-1),C=t("h3",null,"Attributes",-1),E=t("h3",null,"Slots",-1),J=[],K={setup(M,{expose:r}){return r({frontmatter:{meta:[]}}),m({meta:[]}),(H,D)=>{const l=p("dv-alert"),e=p("Playground"),o=p("dv-button"),i=p("icon-heart"),d=p("icon-ellipsis-horizontal"),c=p("MarkdownTable");return j(),h(u,null,[g,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{class:"shadow-lg"},{default:a(()=>[_]),_:1})]),_:1}),v,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"info"},{default:a(()=>[q]),_:1})]),_:1}),y,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"success"},{default:a(()=>[f]),_:1})]),_:1}),L,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"warning"},{default:a(()=>[b]),_:1})]),_:1}),w,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"error"},{default:a(()=>[k]),_:1})]),_:1}),x,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adip!
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>cancel<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>apply<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"error"},{default:a(()=>[z]),actions:a(()=>[s(o,{type:"ghost",size:"sm",class:"mr-2"},{default:a(()=>[I]),_:1}),s(o,{type:"primary",size:"sm"},{default:a(()=>[A]),_:1})]),_:1})]),_:1}),B,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">icon-heart</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ef3636&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adip!
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet,
    consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum
    dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur
    adip!Lorem ipsum dolor sit amet, consectetur adip!
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">icon-ellipsis-horizontal</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,null,{icon:a(()=>[s(i,{color:"#ef3636"})]),default:a(()=>[N]),content:a(()=>[S]),actions:a(()=>[s(o,{type:"ghost",size:"sm",class:"mr-2"},{default:a(()=>[s(d,{size:"1.5em"})]),_:1})]),_:1})]),_:1}),t("div",T,[V,C,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"type","1":"alert color type","2":"info, success, warning, error","3":"-"}]}),E,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"alert title"},{"0":"content","1":"alert content"},{"0":"actions","1":"alert actions"}]})])],64)}}};export{K as default,J as meta};