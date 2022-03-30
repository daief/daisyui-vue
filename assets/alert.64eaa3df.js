import{u as m,y as p,z as u,c as s,A as a,B as t,F as h,C as j,a as n}from"./vendor.dc484497.js";const g=t("div",{class:"markdown-body"},[t("h1",null,"Alert"),t("h2",null,"Examples"),t("p",null,"alert")],-1),_=n("Lorem ipsum dolor sit amet, consectetur adip!"),v=t("div",{class:"markdown-body"},[t("p",null,"alert state: info")],-1),y=n("Lorem ipsum dolor sit amet, consectetur adip!"),f=t("div",{class:"markdown-body"},[t("p",null,"alert state: success")],-1),q=n(" Lorem ipsum dolor sit amet, consectetur adip! "),L=t("div",{class:"markdown-body"},[t("p",null,"alert state: warning")],-1),b=n(" Lorem ipsum dolor sit amet, consectetur adip! "),w=t("div",{class:"markdown-body"},[t("p",null,"alert state: error")],-1),k=n(" Lorem ipsum dolor sit amet, consectetur adip! "),x=t("div",{class:"markdown-body"},[t("p",null,"alert with actions")],-1),z=n(" Lorem ipsum dolor sit amet, consectetur adip! "),I=n("cancel"),A=n("apply"),B=t("div",{class:"markdown-body"},[t("p",null,"alert")],-1),C=n(" Lorem ipsum dolor sit amet, consectetur adip! "),N=n(" Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! "),S={class:"markdown-body"},T=t("h2",null,"Alert",-1),V=t("h3",null,"Attributes",-1),E=t("h3",null,"Slots",-1),J=[],K={setup(F,{expose:r}){return r({frontmatter:{meta:[]}}),m({meta:[]}),(H,D)=>{const l=p("dv-alert"),e=p("Playground"),o=p("dv-button"),d=p("dv-icon-heart"),i=p("dv-icon-dots"),c=p("MarkdownTable");return j(),u(h,null,[g,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,null,{default:a(()=>[_]),_:1})]),_:1}),v,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"info"},{default:a(()=>[y]),_:1})]),_:1}),f,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"success"},{default:a(()=>[q]),_:1})]),_:1}),L,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>
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
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-heart</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ef3636&quot;</span> /&gt;</span>
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
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-dots</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,null,{icon:a(()=>[s(d,{color:"#ef3636"})]),default:a(()=>[C]),content:a(()=>[N]),actions:a(()=>[s(o,{type:"ghost",size:"sm",class:"mr-2"},{default:a(()=>[s(i,{size:"1.5em"})]),_:1})]),_:1})]),_:1}),t("div",S,[T,V,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"type","1":"alert color type","2":"info, success, warning, error","3":"-"}]}),E,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"alert title"},{"0":"content","1":"alert content"},{"0":"actions","1":"alert actions"}]})])],64)}}};export{K as default,J as meta};