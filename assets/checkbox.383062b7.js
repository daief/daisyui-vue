import{v as u,c as s,a0 as o,Q as j,u as g,a2 as m,a3 as n,a4 as a,p as x,a5 as _,a as e}from"./vendor.5f72a9a7.js";var k={setup:()=>{const l=u(!1);return()=>s(o("dv-checkbox"),{checked:l.value,onChange:t=>{l.value=t.target.checked,console.log("Checked:",l.value)}},null)}};function f(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!j(l)}var b={setup:()=>{const l=["netural","primary","secondary","accent"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[l.map(t=>s("div",{key:t,class:"w-32"},[s(o("dv-checkbox"),{type:t,defaultChecked:!0},f(t)?t:{default:()=>[t]})]))])}},y={setup:()=>{const l=["xs","sm","md","lg"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[l.map(t=>s("div",{key:t},[s(o("dv-checkbox"),{size:t,defaultChecked:!0},null)]))])}};const v=a("div",{class:"markdown-body"},[a("h1",null,"Checkbox"),a("h2",null,"Examples"),a("p",null,"Checkbox")],-1),w=a("div",{class:"markdown-body"},[a("p",null,"With label")],-1),C=e("Orange"),z=e(),I=e("Apple"),O=a("div",{class:"markdown-body"},[a("p",null,"Color type")],-1),S=a("div",{class:"markdown-body"},[a("p",null,"Sizes")],-1),A=a("div",{class:"markdown-body"},[a("p",null,"Disabled")],-1),q=e("Orange"),N=e("Apple"),P=a("div",{class:"markdown-body"},[a("p",null,"Indeterminate(style only, do not affect the value)")],-1),V=e("Orange"),B=e("Apple"),T=e("Pear"),E={class:"markdown-body"},F=a("h2",null,"Checkbox",-1),M=a("h3",null,"Attributes",-1),D=a("h2",null,"CSS variables",-1),K=[],L={setup(l,{expose:t}){return t({frontmatter:{meta:[]}}),g({meta:[]}),(W,G)=>{const h=k,p=o("Playground"),c=o("dv-checkbox"),r=b,i=y,d=o("MarkdownTable");return _(),m(x,null,[v,s(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>
        <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked.value}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> {
          checked.value = e.target.checked;
          console.log(&#x27;Checked:&#x27;, checked.value);
        }}
      /&gt;</span>
    );
  },
};
`},{default:n(()=>[s(h)]),_:1}),w,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:n(()=>[s(c,null,{default:n(()=>[C]),_:1}),z,s(c,null,{default:n(()=>[I]),_:1})]),_:1}),O,s(p,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> types = [<span class="hljs-string">&#x27;netural&#x27;</span>, <span class="hljs-string">&#x27;primary&#x27;</span>, <span class="hljs-string">&#x27;secondary&#x27;</span>, <span class="hljs-string">&#x27;accent&#x27;</span>];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col items-center space-y-4&quot;</span>&gt;</span>
        {types.map((type) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{type}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-32&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">type</span>=<span class="hljs-string">{type}</span> <span class="hljs-attr">defaultChecked</span>&gt;</span>
              {type}
            <span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(r)]),_:1}),S,s(p,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> types = [<span class="hljs-string">&#x27;xs&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col items-center space-y-4&quot;</span>&gt;</span>
        {types.map((size) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{size}</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{size}</span> <span class="hljs-attr">defaultChecked</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(i)]),_:1}),A,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">disabled</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">defaultChecked</span> <span class="hljs-attr">disabled</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:n(()=>[s(c,{disabled:""},{default:n(()=>[q]),_:1}),s(c,{defaultChecked:"",disabled:""},{default:n(()=>[N]),_:1})]),_:1}),P,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">defaultChecked</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">disabled</span>&gt;</span>Pear<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:n(()=>[s(c,{indeterminate:""},{default:n(()=>[V]),_:1}),s(c,{indeterminate:"",defaultChecked:""},{default:n(()=>[B]),_:1}),s(c,{indeterminate:"",disabled:""},{default:n(()=>[T]),_:1})]),_:1}),a("div",E,[F,M,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"size","1":"size","2":"ISize","3":"md"},{"0":"type","1":"color type","2":"netural, primary, secondary, accent","3":"netural"},{"0":"defaultChecked","1":"initial checked status","2":"bool","3":"-"},{"0":"checked","1":"checked status","2":"bool","3":"-"},{"0":"onChange","1":"change callback","2":"Function","3":"-"},{"0":"disabled","1":"disable status","2":"bool","3":"-"},{"0":"readOnly","1":"read only status","2":"bool","3":"-"},{"0":"indeterminate","1":"indeterminate status. style only, do not affect the value","2":"bool","3":"-"}]},null,8,["dataSource"]),D,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"default",dataIndex:2}],dataSource:[{"0":"--dv-checkbox-gap","1":"checkbox horizontal gap","2":"8px"}]})])],64)}}};export{L as default,K as meta};
