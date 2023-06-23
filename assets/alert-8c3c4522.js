import{_ as m,u as h,r as p,o as u,c as j,a as s,w as a,b as t,F as g,d as n}from"./app-f7b9d8d9.js";const _=t("div",{class:"markdown-body"},[t("h1",null,"Alert"),t("h2",null,"Examples"),t("p",null,"alert")],-1),v=n(" Lorem ipsum dolor sit amet, consectetur adip! "),y=t("div",{class:"markdown-body"},[t("p",null,"alert state: info")],-1),f=n("Lorem ipsum dolor sit amet, consectetur adip!"),q=t("div",{class:"markdown-body"},[t("p",null,"alert state: success")],-1),L=n(" Lorem ipsum dolor sit amet, consectetur adip! "),b=t("div",{class:"markdown-body"},[t("p",null,"alert state: warning")],-1),w=n(" Lorem ipsum dolor sit amet, consectetur adip! "),k=t("div",{class:"markdown-body"},[t("p",null,"alert state: error")],-1),x=n(" Lorem ipsum dolor sit amet, consectetur adip! "),z=t("div",{class:"markdown-body"},[t("p",null,"alert with actions")],-1),I=n(" Lorem ipsum dolor sit amet, consectetur adip! "),A=n("cancel"),B=n("apply"),N=t("div",{class:"markdown-body"},[t("p",null,"alert")],-1),S=n(" Lorem ipsum dolor sit amet, consectetur adip! "),T=n(" Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! "),V={class:"markdown-body"},C=t("h2",null,"Alert",-1),E=t("h3",null,"Attributes",-1),F=t("h3",null,"Slots",-1),O=[],M={setup(P,{expose:r}){return r({frontmatter:{meta:[]}}),h({meta:[]}),(G,J)=>{const l=p("dv-alert"),e=p("Playground"),o=p("dv-button"),i=p("icon-heart"),d=p("icon-ellipsis-horizontal"),c=p("MarkdownTable");return u(),j(g,null,[_,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{class:"shadow-lg"},{default:a(()=>[v]),_:1})]),_:1}),y,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"info"},{default:a(()=>[f]),_:1})]),_:1}),q,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"success"},{default:a(()=>[L]),_:1})]),_:1}),b,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"warning"},{default:a(()=>[w]),_:1})]),_:1}),k,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adip!
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"error"},{default:a(()=>[x]),_:1})]),_:1}),z,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adip!
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>cancel<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>apply<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>
`},{default:a(()=>[s(l,{type:"error"},{default:a(()=>[I]),actions:a(()=>[s(o,{type:"ghost",size:"sm",class:"mr-2"},{default:a(()=>[A]),_:1}),s(o,{type:"primary",size:"sm"},{default:a(()=>[B]),_:1})]),_:1})]),_:1}),N,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>
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
`},{default:a(()=>[s(l,null,{icon:a(()=>[s(i,{color:"#ef3636"})]),default:a(()=>[S]),content:a(()=>[T]),actions:a(()=>[s(o,{type:"ghost",size:"sm",class:"mr-2"},{default:a(()=>[s(d,{size:"1.5em"})]),_:1})]),_:1})]),_:1}),t("div",V,[C,E,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"type",1:"alert color type",2:"info, success, warning, error",3:"-"}]}),F,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{0:"default",1:"alert title"},{0:"content",1:"alert content"},{0:"actions",1:"alert actions"}]})])],64)}}},Q=m(M,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/alert.md"]]);export{Q as default,O as meta};
