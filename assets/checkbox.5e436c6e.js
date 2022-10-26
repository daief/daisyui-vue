import{v as i,c as s,a0 as e,Q as v,a as p,u as b,a2 as k,a3 as t,a4 as a,p as _,a5 as y}from"./vendor.29ec88ef.js";var f={setup:()=>{const l=i(!1),n=h=>{l.value=h.target.checked,console.log("Checked:",l.value)};return()=>s(e("dv-checkbox"),{checked:l.value,onChange:n},null)}};function w(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!v(l)}var C={setup:()=>{const l=["netural","primary","secondary","accent"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[l.map(n=>s("div",{key:n,class:"w-32"},[s(e("dv-checkbox"),{type:n,defaultChecked:!0},w(n)?n:{default:()=>[n]})]))])}},z={setup:()=>{const l=["xs","sm","md","lg"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[l.map(n=>s("div",{key:n},[s(e("dv-checkbox"),{size:n,defaultChecked:!0},null)]))])}},I={setup:()=>{const l=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}],n=i(["apple","pear"]),h=i(!1),u=d=>{n.value=d};return()=>s("div",null,[s("div",{class:"flex items-center"},[s("label",{class:"mr-4"},[p("Disabled:")]),s(e("dv-toggle"),{checked:h.value,onChange:d=>h.value=d.target.checked},null)]),s(e("dv-divider"),null,null),s(e("dv-checkbox-group"),{size:"lg",options:l,disabled:h.value,value:n.value,onChange:u},null)])}};const O=a("div",{class:"markdown-body"},[a("h1",null,"Checkbox"),a("h2",null,"Examples"),a("p",null,"Checkbox")],-1),q=a("div",{class:"markdown-body"},[a("p",null,"With label")],-1),S=p("Orange"),A=p(),P=p("Apple"),T=a("div",{class:"markdown-body"},[a("p",null,"Color type")],-1),V=a("div",{class:"markdown-body"},[a("p",null,"Sizes")],-1),N=a("div",{class:"markdown-body"},[a("p",null,"Disabled")],-1),B=p("Orange"),D=p("Apple"),F=a("div",{class:"markdown-body"},[a("p",null,"Indeterminate(style only, do not affect the value)")],-1),E=p("Orange"),G=p("Apple"),M=p("Pear"),H=a("div",{class:"markdown-body"},[a("p",null,"Group")],-1),Q={class:"markdown-body"},W=a("h2",null,"Checkbox",-1),J=a("h3",null,"Attributes",-1),K=a("h2",null,"CheckboxGroup",-1),L=a("h2",null,"CSS variables",-1),X=[],Y={setup(l,{expose:n}){return n({frontmatter:{meta:[]}}),b({meta:[]}),(d,R)=>{const j=f,c=e("Playground"),o=e("dv-checkbox"),g=C,x=z,m=I,r=e("MarkdownTable");return y(),k(_,null,[O,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
`},{default:t(()=>[s(j)]),_:1}),q,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:t(()=>[s(o,null,{default:t(()=>[S]),_:1}),A,s(o,null,{default:t(()=>[P]),_:1})]),_:1}),T,s(c,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:t(()=>[s(g)]),_:1}),V,s(c,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:t(()=>[s(x)]),_:1}),N,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">disabled</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">defaultChecked</span> <span class="hljs-attr">disabled</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:t(()=>[s(o,{disabled:""},{default:t(()=>[B]),_:1}),s(o,{defaultChecked:"",disabled:""},{default:t(()=>[D]),_:1})]),_:1}),F,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">defaultChecked</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">disabled</span>&gt;</span>Pear<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:t(()=>[s(o,{indeterminate:""},{default:t(()=>[E]),_:1}),s(o,{indeterminate:"",defaultChecked:""},{default:t(()=>[G]),_:1}),s(o,{indeterminate:"",disabled:""},{default:t(()=>[M]),_:1})]),_:1}),H,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Apple&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pear&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pear&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Orange&#x27;</span> },
    ];
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-string">&#x27;pear&#x27;</span>]);
    <span class="hljs-keyword">const</span> disabled = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">array</span>) =&gt; {
      value.<span class="hljs-property">value</span> = array;
    };
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-4&quot;</span>&gt;</span>Disabled:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span>
            <span class="hljs-attr">checked</span>=<span class="hljs-string">{disabled.value}</span>
            <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> (disabled.value = e.target.checked)}
          /&gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-divider</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox-group</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
          <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
          <span class="hljs-attr">disabled</span>=<span class="hljs-string">{disabled.value}</span>
          <span class="hljs-attr">value</span>=<span class="hljs-string">{value.value}</span>
          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(m)]),_:1}),a("div",Q,[W,J,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"size","1":"size","2":"ISize","3":"md"},{"0":"type","1":"color type","2":"netural, primary, secondary, accent","3":"netural"},{"0":"disabled","1":"disable status","2":"bool","3":"-"},{"0":"checked","1":"checked status","2":"bool","3":"-"},{"0":"onChange","1":"change callback","2":"Function","3":"-"},{"0":"defaultChecked","1":"initial checked status","2":"bool","3":"-"},{"0":"readOnly","1":"read only status","2":"bool","3":"-"},{"0":"options","1":"checkbox options","2":"IOption[]","3":"-"},{"0":"indeterminate","1":"indeterminate status. style only, do not affect the value","2":"bool","3":"-"}]},null,8,["dataSource"]),K,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"size","1":"size","2":"ISize","3":"md"},{"0":"type","1":"color type","2":"netural, primary, secondary, accent","3":"netural"},{"0":"disabled","1":"disable status","2":"bool","3":"-"},{"0":"options","1":"options","2":"IOption[]","3":"-"},{"0":"value","1":"selected values","2":"IText[]","3":"-"},{"0":"defaultValue","1":"initial values","2":"IText[]","3":"-"},{"0":"onChange","1":"change event","2":"Function","3":"-"}]}),L,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"default",dataIndex:2}],dataSource:[{"0":"--dv-checkbox-gap","1":"checkbox horizontal gap","2":"8px"}]})])],64)}}};export{Y as default,X as meta};
