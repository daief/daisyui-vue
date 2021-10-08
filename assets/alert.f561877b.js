import{u as m,j as p,l as h,c as s,q as a,s as t,o as u,a as n}from"./vendor.70ccab45.js";const j={class:"markdown-body"},g=t("h1",null,"Alert",-1),_=t("h2",null,"Examples",-1),v=t("p",null,"alert",-1),q=n("Lorem ipsum dolor sit amet, consectetur adip!"),f=t("p",null,"alert state: info",-1),y=n("Lorem ipsum dolor sit amet, consectetur adip!"),L=t("p",null,"alert state: success",-1),b=n(" Lorem ipsum dolor sit amet, consectetur adip! "),x=t("p",null,"alert state: warning",-1),w=n(" Lorem ipsum dolor sit amet, consectetur adip! "),z=t("p",null,"alert state: error",-1),I=n(" Lorem ipsum dolor sit amet, consectetur adip! "),k=t("p",null,"alert with actions",-1),A=n(" Lorem ipsum dolor sit amet, consectetur adip! "),B=n("cancel"),N=n("apply"),S=t("p",null,"alert",-1),T=n(" Lorem ipsum dolor sit amet, consectetur adip! "),V=n(" Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! "),C=t("h2",null,"Alert",-1),E=t("h3",null,"Attributes",-1),M=t("h3",null,"Slots",-1),K={setup(P,{expose:r}){return r({frontmatter:{meta:[]}}),m({meta:[]}),(F,G)=>{const l=p("dv-alert"),e=p("Playground"),o=p("dv-button"),i=p("dv-icon-heart"),d=p("dv-icon-dots"),c=p("MarkdownTable");return u(),h("div",j,[g,_,v,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,null,{default:a(()=>[q]),_:1})]),_:1}),f,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"info"},{default:a(()=>[y]),_:1})]),_:1}),L,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"success"},{default:a(()=>[b]),_:1})]),_:1}),x,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"warning"},{default:a(()=>[w]),_:1})]),_:1}),z,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"error"},{default:a(()=>[I]),_:1})]),_:1}),k,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adip!
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>cancel<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>apply<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"error"},{default:a(()=>[A]),actions:a(()=>[s(o,{type:"ghost",size:"sm",class:"mr-2"},{default:a(()=>[B]),_:1}),s(o,{type:"primary",size:"sm"},{default:a(()=>[N]),_:1})]),_:1})]),_:1}),S,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>
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
`},{default:a(()=>[s(l,null,{icon:a(()=>[s(i,{color:"#ef3636"})]),default:a(()=>[T]),content:a(()=>[V]),actions:a(()=>[s(o,{type:"ghost",size:"sm",class:"mr-2"},{default:a(()=>[s(d,{size:"1.5em"})]),_:1})]),_:1})]),_:1}),C,E,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"type","1":"alert color type","2":"info, success, warning, error","3":"-"}]}),M,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"alert title"},{"0":"content","1":"alert content"},{"0":"actions","1":"alert actions"}]})])}}};export{K as default};
