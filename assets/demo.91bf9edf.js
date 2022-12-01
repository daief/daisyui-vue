import{w as e,c as s,a2 as n,a as c,u as o,a4 as r,a5 as h,q as d,a6 as a,a7 as j}from"./vendor.95b30dca.js";var u={setup:()=>(e("1"),()=>s("div",null,[s(n("dv-element"),{onClick:console.log,variant:"info",class:"xs"},{default:()=>[c("asd")]})]))};const i=a("div",{class:"markdown-body"},[a("h1",null,"Demo for development")],-1),g=a("div",{class:"markdown-body"},null,-1),w=[],k={setup(m,{expose:l}){return l({frontmatter:{meta:[]}}),o({meta:[]}),(y,_)=>{const t=u,p=n("Playground");return j(),r(d,null,[i,s(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-string">&#x27;Content 3&#x27;</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: blue&quot;</span>&gt;</span>Title Slot<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>,
    };

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-element</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{console.log}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>
          asd
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-element</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:h(()=>[s(t)]),_:1}),g],64)}}};export{k as default,w as meta};
