import{T as l,a as o}from"./app.774675bb.js";import{r,c as s,a as p,u as h,j as u,l as j,q as d,F as m,s as a,o as g}from"./vendor.00cdd876.js";var i={setup:()=>{const n=r("1");return()=>s(o,{value:n.value,"onUpdate:value":t=>n.value=t},{default:()=>[s(l,{name:"1",title:"Tab 1"},{default:()=>[p("Content 1")]}),s(l,{name:"2",title:"Tab 2"},{default:()=>[p("Content 2")]}),s(l,{name:"3",title:"Tab 3"},{default:()=>[p("Content 3")]})]})}};const b=a("div",{class:"markdown-body"},[a("h1",null,"Tab"),a("h2",null,"Examples"),a("p",null,"tabs")],-1),f=a("div",{class:"markdown-body"},null,-1),q={setup(n,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(x,w)=>{const e=i,c=u("Playground");return g(),j(m,null,[b,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]}&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>
          Content 1
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>
          Content 2
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>
          Content 3
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>
    );
  },
};
`},{default:d(()=>[s(e)]),_:1}),f],64)}}};export{q as default};
