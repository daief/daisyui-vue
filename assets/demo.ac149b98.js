import{c as s,_ as a,u as r,a0 as c,a1 as o,n as e,a2 as n,a3 as h}from"./vendor.57d76883.js";var d={setup:()=>()=>s("div",{class:"text-center"},[s(a("dv-counter"),{from:100,to:0,duration:10*1e3},null),s("br",null,null),s(a("dv-counter"),{from:20,to:0,duration:10*1e3,transitionDuration:300},null)])};const j=n("div",{class:"markdown-body"},[n("h1",null,"Demo for development")],-1),u=n("div",{class:"markdown-body"},null,-1),x=[],y={setup(i,{expose:t}){return t({frontmatter:{meta:[]}}),r({meta:[]}),(f,_)=>{const l=d,p=a("Playground");return h(),c(e,null,[j,s(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> d <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> x <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-counter</span> <span class="hljs-attr">from</span>=<span class="hljs-string">{100}</span> <span class="hljs-attr">to</span>=<span class="hljs-string">{0}</span> <span class="hljs-attr">duration</span>=<span class="hljs-string">{10</span> * <span class="hljs-attr">1000</span>} /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-counter</span>
          <span class="hljs-attr">from</span>=<span class="hljs-string">{20}</span>
          <span class="hljs-attr">to</span>=<span class="hljs-string">{0}</span>
          <span class="hljs-attr">duration</span>=<span class="hljs-string">{10</span> * <span class="hljs-attr">1000</span>}
          <span class="hljs-attr">transitionDuration</span>=<span class="hljs-string">{300}</span>
          // <span class="hljs-attr">format</span>=<span class="hljs-string">{(v)</span> =&gt;</span> &#x27;asd&#x27; + v}
        /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(l)]),_:1}),u],64)}}};export{y as default,x as meta};
