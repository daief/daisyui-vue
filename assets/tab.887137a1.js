import{u as c,j as a,l as e,c as n,q as o,F as r,s,o as h}from"./vendor.00cdd876.js";const j=s("div",{class:"markdown-body"},[s("h1",null,"Tab"),s("h2",null,"Examples"),s("p",null,"tabs")],-1),d=s("div",{class:"markdown-body"},null,-1),w={setup(u,{expose:l}){return l({frontmatter:{meta:[]}}),c({meta:[]}),(i,b)=>{const t=a("Cadcvuxbfdxzdywvwdwfwtfzzbbebxffuwdwadxec"),p=a("Playground");return h(),e(r,null,[j,n(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
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
`},{default:o(()=>[n(t)]),_:1}),d],64)}}};export{w as default};
