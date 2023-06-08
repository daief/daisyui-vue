import{u as e,b as p,d as r,c as a,w as t,e as s,F as h,o as u}from"./app.be29fabb.js";const i=s("div",{class:"markdown-body"},[s("h1",null,"Input"),s("h2",null,"Examples"),s("p",null,"Text input with border")],-1),d={class:"text-center"},j=s("div",{class:"markdown-body"},[s("p",null,"Text input without border")],-1),g={class:"text-center"},q=s("div",{class:"markdown-body"},[s("p",null,"Ghost (no background)")],-1),m={class:"text-center"},x=s("div",{class:"markdown-body"},[s("p",null,"Input with colors")],-1),v={class:"text-center"},w=s("div",{class:"py-1"},null,-1),_=s("div",{class:"py-1"},null,-1),f=s("div",{class:"py-1"},null,-1),y=s("div",{class:"py-1"},null,-1),b=s("div",{class:"py-1"},null,-1),z=s("div",{class:"py-1"},null,-1),k=s("div",{class:"markdown-body"},[s("p",null,"Input size")],-1),T={class:"text-center"},I=s("div",{class:"py-1"},null,-1),B=s("div",{class:"py-1"},null,-1),C=s("div",{class:"py-1"},null,-1),E=s("div",{class:"markdown-body"},[s("p",null,"Disabled")],-1),F={class:"text-center"},M={class:"markdown-body"},N=s("h2",null,"Input",-1),P=s("h3",null,"Attributes",-1),J=[],K={setup(S,{expose:c}){return c({frontmatter:{meta:[]}}),e({meta:[]}),(D,G)=>{const n=p("dv-input"),l=p("Playground"),o=p("MarkdownTable");return u(),r(h,null,[i,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",d,[a(n,{class:"w-full max-w-xs",placeholder:"Type here"})])]),_:1}),j,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",g,[a(n,{class:"w-full max-w-xs",border:!1,placeholder:"Type here"})])]),_:1}),q,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>
    <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",m,[a(n,{variant:"ghost",border:!1,class:"w-full max-w-xs",placeholder:"Type here"})])]),_:1}),x,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;primary color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;secondary color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;accent&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;accent color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;info color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;success color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;warning color&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;error color&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",v,[a(n,{variant:"primary",class:"w-full max-w-xs",placeholder:"primary color"}),w,a(n,{variant:"secondary",class:"w-full max-w-xs",placeholder:"secondary color"}),_,a(n,{variant:"accent",class:"w-full max-w-xs",placeholder:"accent color"}),f,a(n,{variant:"info",class:"w-full max-w-xs",placeholder:"info color"}),y,a(n,{variant:"success",class:"w-full max-w-xs",placeholder:"success color"}),b,a(n,{variant:"warning",class:"w-full max-w-xs",placeholder:"warning color"}),z,a(n,{variant:"error",class:"w-full max-w-xs",placeholder:"error color"})])]),_:1}),k,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;xs size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;sm size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;md size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;lg size&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",T,[a(n,{size:"xs",class:"w-full max-w-xs",placeholder:"xs size"}),I,a(n,{size:"sm",class:"w-full max-w-xs",placeholder:"sm size"}),B,a(n,{size:"md",class:"w-full max-w-xs",placeholder:"md size"}),C,a(n,{size:"lg",class:"w-full max-w-xs",placeholder:"lg size"})])]),_:1}),E,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",F,[a(n,{class:"w-full max-w-xs",placeholder:"disabled",disabled:""})])]),_:1}),s("div",M,[N,P,a(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"variant",1:"input color type",2:"neutral, primary, secondary, accent, info, success, warning, error, ghost",3:"neutral"},{0:"size",1:"input size",2:"ISize",3:"md"},{0:"border",1:"input border",2:"boolean",3:"true"},{0:"v-model",1:"v-model for input value",2:"string",3:"-"}]})])],64)}}};export{K as default,J as meta};
