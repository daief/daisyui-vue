import{v as g,c as s,a0 as o,Q as x,u as m,a2 as _,a3 as l,a4 as a,p as k,a5 as y,a as e}from"./vendor.5f72a9a7.js";var b={setup:()=>{const n=g(!1),t=h=>{n.value=h.target.checked,console.log("Checked:",n.value)};return()=>s(o("dv-checkbox"),{checked:n.value,onChange:t},null)}};function v(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!x(n)}var f={setup:()=>{const n=["netural","primary","secondary","accent"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[n.map(t=>s("div",{key:t,class:"w-32"},[s(o("dv-checkbox"),{type:t,defaultChecked:!0},v(t)?t:{default:()=>[t]})]))])}},w={setup:()=>{const n=["xs","sm","md","lg"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[n.map(t=>s("div",{key:t},[s(o("dv-checkbox"),{size:t,defaultChecked:!0},null)]))])}},C={setup:()=>{const n=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];return()=>s(o("dv-checkbox-group"),{options:n},null)}};const z=a("div",{class:"markdown-body"},[a("h1",null,"Checkbox"),a("h2",null,"Examples"),a("p",null,"Checkbox")],-1),O=a("div",{class:"markdown-body"},[a("p",null,"With label")],-1),A=e("Orange"),I=e(),S=e("Apple"),q=a("div",{class:"markdown-body"},[a("p",null,"Color type")],-1),P=a("div",{class:"markdown-body"},[a("p",null,"Sizes")],-1),N=a("div",{class:"markdown-body"},[a("p",null,"Disabled")],-1),V=e("Orange"),B=e("Apple"),T=a("div",{class:"markdown-body"},[a("p",null,"Indeterminate(style only, do not affect the value)")],-1),E=e("Orange"),F=e("Apple"),M=e("Pear"),D=a("div",{class:"markdown-body"},[a("p",null,"Group")],-1),G={class:"markdown-body"},H=a("h2",null,"Checkbox",-1),Q=a("h3",null,"Attributes",-1),W=a("h2",null,"CSS variables",-1),U=[],X={setup(n,{expose:t}){return t({frontmatter:{meta:[]}}),m({meta:[]}),(K,L)=>{const r=b,p=o("Playground"),c=o("dv-checkbox"),i=f,u=w,j=C,d=o("MarkdownTable");return y(),_(k,null,[z,s(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">e</span>) =&gt; {
      checked.<span class="hljs-property">value</span> = e.<span class="hljs-property">target</span>.<span class="hljs-property">checked</span>;
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Checked:&#x27;</span>, checked.<span class="hljs-property">value</span>);
    };
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked.value}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span></span>;
  },
};
`},{default:l(()=>[s(r)]),_:1}),O,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:l(()=>[s(c,null,{default:l(()=>[A]),_:1}),I,s(c,null,{default:l(()=>[S]),_:1})]),_:1}),q,s(p,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:l(()=>[s(i)]),_:1}),P,s(p,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:l(()=>[s(u)]),_:1}),N,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">disabled</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">defaultChecked</span> <span class="hljs-attr">disabled</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:l(()=>[s(c,{disabled:""},{default:l(()=>[V]),_:1}),s(c,{defaultChecked:"",disabled:""},{default:l(()=>[B]),_:1})]),_:1}),T,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">defaultChecked</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">disabled</span>&gt;</span>Pear<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:l(()=>[s(c,{indeterminate:""},{default:l(()=>[E]),_:1}),s(c,{indeterminate:"",defaultChecked:""},{default:l(()=>[F]),_:1}),s(c,{indeterminate:"",disabled:""},{default:l(()=>[M]),_:1})]),_:1}),D,s(p,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Apple&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pear&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pear&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Orange&#x27;</span> },
    ];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox-group</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span></span>;
  },
};
`},{default:l(()=>[s(j)]),_:1}),a("div",G,[H,Q,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"size","1":"size","2":"ISize","3":"md"},{"0":"type","1":"color type","2":"netural, primary, secondary, accent","3":"netural"},{"0":"defaultChecked","1":"initial checked status","2":"bool","3":"-"},{"0":"checked","1":"checked status","2":"bool","3":"-"},{"0":"onChange","1":"change callback","2":"Function","3":"-"},{"0":"disabled","1":"disable status","2":"bool","3":"-"},{"0":"readOnly","1":"read only status","2":"bool","3":"-"},{"0":"indeterminate","1":"indeterminate status. style only, do not affect the value","2":"bool","3":"-"}]},null,8,["dataSource"]),W,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"default",dataIndex:2}],dataSource:[{"0":"--dv-checkbox-gap","1":"checkbox horizontal gap","2":"8px"}]})])],64)}}};export{X as default,U as meta};
