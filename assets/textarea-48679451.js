import{_ as r,u as o,r as p,o as h,c as d,a,w as l,b as s,F as i}from"./app-33be3538.js";const j=s("div",{class:"markdown-body"},[s("h1",null,"Textarea"),s("h2",null,"Examples"),s("p",null,"Textarea")],-1),u={class:"text-center"},g=s("div",{class:"markdown-body"},[s("p",null,"Textarea with border")],-1),v={class:"text-center"},q=s("div",{class:"markdown-body"},[s("p",null,"Ghost (no background)")],-1),_={class:"text-center"},m=s("div",{class:"markdown-body"},[s("p",null,"Textarea with colors")],-1),y={class:"text-center"},x=s("div",{class:"py-1"},null,-1),f=s("div",{class:"py-1"},null,-1),w=s("div",{class:"py-1"},null,-1),b=s("div",{class:"py-1"},null,-1),T=s("div",{class:"py-1"},null,-1),k=s("div",{class:"py-1"},null,-1),I={class:"markdown-body"},B=s("h2",null,"Textarea",-1),C=s("h3",null,"Attributes",-1),G=[],E={setup(F,{expose:e}){return e({frontmatter:{meta:[]}}),o({meta:[]}),(P,V)=>{const n=p("dv-textarea"),t=p("Playground"),c=p("MarkdownTable");return h(),d(i,null,[j,a(t,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:l(()=>[s("div",u,[a(n,{placeholder:"Type here"})])]),_:1}),g,a(t,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">border</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:l(()=>[s("div",v,[a(n,{border:"",placeholder:"Type here"})])]),_:1}),q,a(t,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:l(()=>[s("div",_,[a(n,{variant:"ghost",placeholder:"Type here"})])]),_:1}),m,a(t,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;primary color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;secondary color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;accent&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;accent color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;info color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;success color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;warning color&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-textarea</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;error color&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:l(()=>[s("div",y,[a(n,{variant:"primary",placeholder:"primary color"}),x,a(n,{variant:"secondary",placeholder:"secondary color"}),f,a(n,{variant:"accent",placeholder:"accent color"}),w,a(n,{variant:"info",placeholder:"info color"}),b,a(n,{variant:"success",placeholder:"success color"}),T,a(n,{variant:"warning",placeholder:"warning color"}),k,a(n,{variant:"error",placeholder:"error color"})])]),_:1}),s("div",I,[B,C,a(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"variant",1:"textarea color type",2:"neutral, primary, secondary, accent, info, success, warning, error, ghost",3:"neutral"},{0:"border",1:"textarea border",2:"boolean",3:"true"}]})])],64)}}},H=r(E,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/textarea.md"]]);export{H as default,G as meta};