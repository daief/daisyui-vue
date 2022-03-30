import{u as r,y as p,z as o,c as s,A as t,B as n,F as h,C as u}from"./vendor.dc484497.js";const g=n("div",{class:"markdown-body"},[n("h1",null,"Progress"),n("h2",null,"Examples"),n("p",null,"progress")],-1),j=n("div",{class:"markdown-body"},[n("p",null,"primary color")],-1),d=n("div",{class:"markdown-body"},[n("p",null,"secondary color")],-1),i=n("div",{class:"markdown-body"},[n("p",null,"accent color")],-1),v=n("div",{class:"markdown-body"},[n("p",null,"info color")],-1),q=n("div",{class:"markdown-body"},[n("p",null,"success color")],-1),y=n("div",{class:"markdown-body"},[n("p",null,"warning color")],-1),m=n("div",{class:"markdown-body"},[n("p",null,"error color")],-1),_={class:"markdown-body"},f=n("h2",null,"Progress",-1),w=n("h3",null,"Attributes",-1),C=[],A={setup(b,{expose:e}){return e({frontmatter:{meta:[]}}),r({meta:[]}),(B,I)=>{const a=p("dv-progress"),l=p("Playground"),c=p("MarkdownTable");return u(),o(h,null,[g,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a),s(a,{value:10}),s(a,{value:70}),s(a,{value:100})])]),_:1}),j,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a,{type:"primary"}),s(a,{value:10,type:"primary"}),s(a,{value:70,type:"primary"}),s(a,{value:100,type:"primary"})])]),_:1}),d,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a,{type:"secondary"}),s(a,{value:10,type:"secondary"}),s(a,{value:70,type:"secondary"}),s(a,{value:100,type:"secondary"})])]),_:1}),i,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a,{type:"accent"}),s(a,{value:10,type:"accent"}),s(a,{value:70,type:"accent"}),s(a,{value:100,type:"accent"})])]),_:1}),v,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a,{type:"info"}),s(a,{value:10,type:"info"}),s(a,{value:70,type:"info"}),s(a,{value:100,type:"info"})])]),_:1}),q,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a,{type:"success"}),s(a,{value:10,type:"success"}),s(a,{value:70,type:"success"}),s(a,{value:100,type:"success"})])]),_:1}),y,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a,{type:"warning"}),s(a,{value:10,type:"warning"}),s(a,{value:70,type:"warning"}),s(a,{value:100,type:"warning"})])]),_:1}),m,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;70&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",null,[s(a,{type:"error"}),s(a,{value:10,type:"error"}),s(a,{value:70,type:"error"}),s(a,{value:100,type:"error"})])]),_:1}),n("div",_,[f,w,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"type","1":"progress color type","2":"netural, primary, secondary, accent, info, success, warning, error","3":"netural"},{"0":"value","1":"current progress value","2":"number","3":"0"},{"0":"max","1":"max progress value","2":"number","3":"100"}]})])],64)}}};export{A as default,C as meta};