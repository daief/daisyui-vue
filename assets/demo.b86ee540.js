import{v as r,c as a,a0 as t,u as h,a2 as u,a3 as j,p as g,a4 as n,a5 as x}from"./vendor.d0ebca45.js";var d={setup:()=>{const l=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}],s=r(["apple","pear"]),p=e=>{s.value=e};return()=>a(t("dv-checkbox-group"),{options:l,value:s.value,onChange:p},null)}};const i=n("div",{class:"markdown-body"},[n("h1",null,"Demo for development")],-1),v=n("div",{class:"markdown-body"},null,-1),f=[],k={setup(l,{expose:s}){return s({frontmatter:{meta:[]}}),h({meta:[]}),(m,_)=>{const o=d,c=t("Playground");return x(),u(g,null,[i,a(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox-group</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{value.value}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>
      /&gt;</span></span>
    );
  },
};
`},{default:j(()=>[a(o)]),_:1}),v],64)}}};export{k as default,f as meta};
