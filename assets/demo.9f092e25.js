import{v as e,c as s,a as c,a0 as n,u as o,a2 as r,a3 as h,p as d,a4 as a,a5 as u}from"./vendor.29ec88ef.js";var j={setup:()=>(e(["apple","pear"]),()=>s(n("dv-radio"),null,{default:()=>[c("ad")]}))};const m=a("div",{class:"markdown-body"},[a("h1",null,"Demo for development")],-1),x=a("div",{class:"markdown-body"},null,-1),y=[],k={setup(g,{expose:l}){return l({frontmatter:{meta:[]}}),o({meta:[]}),(f,_)=>{const p=j,t=n("Playground");return u(),r(d,null,[m,s(t,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Apple&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pear&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pear&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Orange&#x27;</span> },
    ];
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-string">&#x27;pear&#x27;</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">values</span>) =&gt; {
      value.<span class="hljs-property">value</span> = values;
    };
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="hljs-comment">// &lt;dv-checkbox-group</span>
      <span class="hljs-comment">//   options={options}</span>
      <span class="hljs-comment">//   value={value.value}</span>
      <span class="hljs-comment">//   onChange={onChange}</span>
      <span class="hljs-comment">// /&gt;</span>
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-radio</span>&gt;</span>ad<span class="hljs-tag">&lt;/<span class="hljs-name">dv-radio</span>&gt;</span></span>
    );
  },
};
`},{default:h(()=>[s(p)]),_:1}),x],64)}}};export{k as default,y as meta};
