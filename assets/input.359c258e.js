import{u as o,_ as p,a0 as r,c as a,a1 as t,a2 as s,n as h,a3 as u}from"./vendor.1ca407cc.js";const i=s("div",{class:"markdown-body"},[s("h1",null,"Input"),s("h2",null,"Examples"),s("p",null,"Text input with border")],-1),j={class:"text-center"},d=s("div",{class:"markdown-body"},[s("p",null,"Text input without border")],-1),g={class:"text-center"},q=s("div",{class:"markdown-body"},[s("p",null,"Ghost (no background)")],-1),m={class:"text-center"},x=s("div",{class:"markdown-body"},[s("p",null,"Input with colors")],-1),w={class:"text-center"},_=s("div",{class:"py-1"},null,-1),y=s("div",{class:"py-1"},null,-1),v=s("div",{class:"py-1"},null,-1),f=s("div",{class:"py-1"},null,-1),b=s("div",{class:"py-1"},null,-1),z=s("div",{class:"py-1"},null,-1),k=s("div",{class:"markdown-body"},[s("p",null,"Input size")],-1),T={class:"text-center"},I=s("div",{class:"py-1"},null,-1),B=s("div",{class:"py-1"},null,-1),C=s("div",{class:"py-1"},null,-1),E=s("div",{class:"markdown-body"},[s("p",null,"Disabled")],-1),M={class:"text-center"},N={class:"markdown-body"},P=s("h2",null,"Input",-1),S=s("h3",null,"Attributes",-1),J=[],K={setup(V,{expose:c}){return c({frontmatter:{meta:[]}}),o({meta:[]}),(F,G)=>{const l=p("dv-input"),n=p("Playground"),e=p("MarkdownTable");return u(),r(h,null,[i,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",j,[a(l,{class:"w-full max-w-xs",placeholder:"Type here"})])]),_:1}),d,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",g,[a(l,{class:"w-full max-w-xs",border:!1,placeholder:"Type here"})])]),_:1}),q,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>
    <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",m,[a(l,{type:"ghost",border:!1,class:"w-full max-w-xs",placeholder:"Type here"})])]),_:1}),x,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;primary color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;secondary color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;accent color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;info color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;success color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;warning color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;error color&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",w,[a(l,{type:"primary",class:"w-full max-w-xs",placeholder:"primary color"}),_,a(l,{type:"secondary",class:"w-full max-w-xs",placeholder:"secondary color"}),y,a(l,{type:"accent",class:"w-full max-w-xs",placeholder:"accent color"}),v,a(l,{type:"info",class:"w-full max-w-xs",placeholder:"info color"}),f,a(l,{type:"success",class:"w-full max-w-xs",placeholder:"success color"}),b,a(l,{type:"warning",class:"w-full max-w-xs",placeholder:"warning color"}),z,a(l,{type:"error",class:"w-full max-w-xs",placeholder:"error color"})])]),_:1}),k,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;xs size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;sm size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;md size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;lg size&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",T,[a(l,{size:"xs",class:"w-full max-w-xs",placeholder:"xs size"}),I,a(l,{size:"sm",class:"w-full max-w-xs",placeholder:"sm size"}),B,a(l,{size:"md",class:"w-full max-w-xs",placeholder:"md size"}),C,a(l,{size:"lg",class:"w-full max-w-xs",placeholder:"lg size"})])]),_:1}),E,a(n,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",M,[a(l,{class:"w-full max-w-xs",placeholder:"disabled",disabled:""})])]),_:1}),s("div",N,[P,S,a(e,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"type","1":"input color type","2":"netural, primary, secondary, accent, info, success, warning, error, ghost","3":"netural"},{"0":"size","1":"input size","2":"ISize","3":"md"},{"0":"border","1":"input border","2":"boolean","3":"true"}]})])],64)}}};export{K as default,J as meta};
