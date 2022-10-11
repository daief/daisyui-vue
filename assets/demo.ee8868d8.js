import{c as s,a0 as l,u as o,a2 as r,a3 as c,p as h,a4 as a,a5 as u}from"./vendor.5f72a9a7.js";var d={setup:()=>{const n=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];return()=>s(l("dv-checkbox-group"),{options:n},null)}};const x=a("div",{class:"markdown-body"},[a("h1",null,"Demo for development")],-1),j=a("div",{class:"markdown-body"},null,-1),w=[],k={setup(n,{expose:p}){return p({frontmatter:{meta:[]}}),o({meta:[]}),(m,_)=>{const t=d,e=l("Playground");return u(),r(h,null,[x,s(e,{lang:"tsx",code:`<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> d <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> x <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Apple&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pear&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pear&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Orange&#x27;</span> },
    ];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox-group</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span></span>;
  },
};
`},{default:c(()=>[s(t)]),_:1}),j],64)}}};export{k as default,w as meta};
