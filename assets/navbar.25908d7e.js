import{u as j,a0 as t,a2 as v,c as s,a3 as n,a4 as a,p as _,a5 as b,a as o}from"./vendor.e5c18dbd.js";const m=a("div",{class:"markdown-body"},[a("h1",null,"Navbar"),a("h2",null,"Examples"),a("p",null,"Navbar")],-1),f={class:"w-full"},x=o("daisyui vue"),q=a("div",{class:"markdown-body"},[a("p",null,"Navbar with icons")],-1),y={class:"w-full"},I=o("daisyui vue"),w=a("div",{class:"markdown-body"},[a("p",null,"Navbar with icon at start and end")],-1),N={class:"w-full"},k=o("daisyui vue"),S={class:"markdown-body"},z=a("h2",null,"Navbar",-1),A=a("h3",null,"Attributes",-1),B=a("h2",null,"NavbarStart",-1),C=a("h3",null,"Attributes",-1),E=a("h2",null,"NavbarCenter",-1),T=a("h3",null,"Attributes",-1),V=a("h2",null,"NavbarEnd",-1),M=a("h3",null,"Attributes",-1),K=[],L={setup(P,{expose:r}){return r({frontmatter:{meta:[]}}),j({meta:[]}),(D,G)=>{const l=t("dv-button"),e=t("dv-navbar"),c=t("Playground"),u=t("dv-navbar-center"),d=t("icon-ellipsis-horizontal"),h=t("dv-navbar-end"),i=t("icon-menu"),g=t("dv-navbar-start"),p=t("MarkdownTable");return b(),v(_,null,[m,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100 rounded-box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>daisyui vue<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",f,[s(e,{class:"bg-base-100 rounded-box"},{default:n(()=>[s(l,{variant:"ghost"},{default:n(()=>[x]),_:1})]),_:1})])]),_:1}),q,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100 rounded-box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar-center</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-1&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>daisyui vue<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar-center</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar-end</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">icon-ellipsis-horizontal</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar-end</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",y,[s(e,{class:"bg-base-100 rounded-box"},{default:n(()=>[s(u,{class:"flex-1"},{default:n(()=>[s(l,{variant:"ghost"},{default:n(()=>[I]),_:1})]),_:1}),s(h,null,{default:n(()=>[s(l,{variant:"ghost"},{default:n(()=>[s(d)]),_:1})]),_:1})]),_:1})])]),_:1}),w,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100 rounded-box&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar-start</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-1&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">icon-menu</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>daisyui vue<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar-start</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar-end</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">icon-ellipsis-horizontal</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar-end</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",N,[s(e,{class:"bg-base-100 rounded-box"},{default:n(()=>[s(g,{class:"flex-1"},{default:n(()=>[s(l,{variant:"ghost"},{default:n(()=>[s(i)]),_:1}),s(l,{variant:"ghost"},{default:n(()=>[k]),_:1})]),_:1}),s(h,null,{default:n(()=>[s(l,{variant:"ghost"},{default:n(()=>[s(d)]),_:1})]),_:1})]),_:1})])]),_:1}),a("div",S,[z,A,s(p,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[]}),B,C,s(p,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[]}),E,T,s(p,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[]}),V,M,s(p,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[]})])],64)}}};export{L as default,K as meta};