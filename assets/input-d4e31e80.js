import{_ as e,u as r,r as p,o as h,c as u,a,w as t,b as s,F as i}from"./app-33be3538.js";const d=s("div",{class:"markdown-body"},[s("h1",null,"Input"),s("h2",null,"Examples"),s("p",null,"Text input with border")],-1),j={class:"text-center"},g=s("div",{class:"markdown-body"},[s("p",null,"Text input without border")],-1),q={class:"text-center"},m=s("div",{class:"markdown-body"},[s("p",null,"Ghost (no background)")],-1),x={class:"text-center"},v=s("div",{class:"markdown-body"},[s("p",null,"Input with colors")],-1),w={class:"text-center"},_=s("div",{class:"py-1"},null,-1),f=s("div",{class:"py-1"},null,-1),y=s("div",{class:"py-1"},null,-1),b=s("div",{class:"py-1"},null,-1),z=s("div",{class:"py-1"},null,-1),k=s("div",{class:"py-1"},null,-1),T=s("div",{class:"markdown-body"},[s("p",null,"Input size")],-1),I={class:"text-center"},B=s("div",{class:"py-1"},null,-1),C=s("div",{class:"py-1"},null,-1),E=s("div",{class:"py-1"},null,-1),F=s("div",{class:"markdown-body"},[s("p",null,"Disabled")],-1),M={class:"text-center"},N={class:"markdown-body"},P=s("h2",null,"Input",-1),S=s("h3",null,"Attributes",-1),L=[],V={setup(A,{expose:c}){return c({frontmatter:{meta:[]}}),r({meta:[]}),(H,J)=>{const n=p("dv-input"),l=p("Playground"),o=p("MarkdownTable");return h(),u(i,null,[d,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",j,[a(n,{class:"w-full max-w-xs",placeholder:"Type here"})])]),_:1}),g,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",q,[a(n,{class:"w-full max-w-xs",border:!1,placeholder:"Type here"})])]),_:1}),m,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>
    <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",x,[a(n,{variant:"ghost",border:!1,class:"w-full max-w-xs",placeholder:"Type here"})])]),_:1}),v,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
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
`},{default:t(()=>[s("div",w,[a(n,{variant:"primary",class:"w-full max-w-xs",placeholder:"primary color"}),_,a(n,{variant:"secondary",class:"w-full max-w-xs",placeholder:"secondary color"}),f,a(n,{variant:"accent",class:"w-full max-w-xs",placeholder:"accent color"}),y,a(n,{variant:"info",class:"w-full max-w-xs",placeholder:"info color"}),b,a(n,{variant:"success",class:"w-full max-w-xs",placeholder:"success color"}),z,a(n,{variant:"warning",class:"w-full max-w-xs",placeholder:"warning color"}),k,a(n,{variant:"error",class:"w-full max-w-xs",placeholder:"error color"})])]),_:1}),T,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;xs size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;sm size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;md size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;lg size&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",I,[a(n,{size:"xs",class:"w-full max-w-xs",placeholder:"xs size"}),B,a(n,{size:"sm",class:"w-full max-w-xs",placeholder:"sm size"}),C,a(n,{size:"md",class:"w-full max-w-xs",placeholder:"md size"}),E,a(n,{size:"lg",class:"w-full max-w-xs",placeholder:"lg size"})])]),_:1}),F,a(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full max-w-xs&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[s("div",M,[a(n,{class:"w-full max-w-xs",placeholder:"disabled",disabled:""})])]),_:1}),s("div",N,[P,S,a(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"variant",1:"input color type",2:"neutral, primary, secondary, accent, info, success, warning, error, ghost",3:"neutral"},{0:"size",1:"input size",2:"ISize",3:"md"},{0:"border",1:"input border",2:"boolean",3:"true"},{0:"v-model",1:"v-model for input value",2:"string",3:"-"}]})])],64)}}},O=e(V,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/input.md"]]);export{O as default,L as meta};
