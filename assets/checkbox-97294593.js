import{g as i,a as s,d as p,r as e,_ as m,u as v,o as _,c as k,w as n,b as a,F as b}from"./app-33be3538.js";const y={setup:()=>{const t=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}],l=i(["apple","pear"]),d=i(!1);return()=>s("div",null,[s("div",{class:"flex items-center"},[s("label",{class:"mr-4"},[p("Disabled:")]),s(e("dv-toggle"),{checked:d.value,onChange:h=>d.value=h.target.checked},null)]),s(e("dv-divider"),null,null),s(e("dv-checkbox-group"),{size:"lg",options:t,disabled:d.value,modelValue:l.value,"onUpdate:modelValue":h=>l.value=h},null)])}},f={setup:()=>{const t=["xs","sm","md","lg"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[t.map(l=>s("div",{key:l},[s(e("dv-checkbox"),{size:l,defaultChecked:!0},null)]))])}},w={setup:()=>{const t=["neutral","primary","secondary","accent"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[t.map(l=>s("div",{key:l,class:"w-32"},[s(e("dv-checkbox"),{variant:l,defaultChecked:!0},{default:()=>[l]})]))])}},C={setup:()=>{const t=i(!1),l=d=>{t.value=d.target.checked,console.log("Checked:",t.value)};return()=>s(e("dv-checkbox"),{checked:t.value,onChange:l},null)}},z=a("div",{class:"markdown-body"},[a("h1",null,"Checkbox"),a("h2",null,"Examples"),a("p",null,"Checkbox")],-1),I=a("div",{class:"markdown-body"},[a("p",null,"With label")],-1),q=p("Orange"),O=p(),A=p("Apple"),S=a("div",{class:"markdown-body"},[a("p",null,"Color type")],-1),P=a("div",{class:"markdown-body"},[a("p",null,"Sizes")],-1),V=a("div",{class:"markdown-body"},[a("p",null,"Disabled")],-1),T=p("Orange"),B=p("Apple"),D=a("div",{class:"markdown-body"},[a("p",null,"Indeterminate(style only, do not affect the value)")],-1),F=p("Orange"),N=p("Apple"),E=p("Pear"),G=a("div",{class:"markdown-body"},[a("p",null,"Group")],-1),M={class:"markdown-body"},H=a("h2",null,"Checkbox",-1),U=a("h3",null,"Attributes",-1),W=a("h2",null,"CheckboxGroup",-1),J=a("h3",null,"Attributes",-1),K=a("h2",null,"CSS variables",-1),Y=[],L={setup(t,{expose:l}){return l({frontmatter:{meta:[]}}),v({meta:[]}),(Q,R)=>{const u=C,c=e("Playground"),o=e("dv-checkbox"),j=w,g=f,x=y,r=e("MarkdownTable");return _(),k(b,null,[z,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
`},{default:n(()=>[s(u)]),_:1}),I,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:n(()=>[s(o,null,{default:n(()=>[q]),_:1}),O,s(o,null,{default:n(()=>[A]),_:1})]),_:1}),S,s(c,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> types = [<span class="hljs-string">&#x27;neutral&#x27;</span>, <span class="hljs-string">&#x27;primary&#x27;</span>, <span class="hljs-string">&#x27;secondary&#x27;</span>, <span class="hljs-string">&#x27;accent&#x27;</span>];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col items-center space-y-4&quot;</span>&gt;</span>
        {types.map((type) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{type}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-32&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">{type}</span> <span class="hljs-attr">defaultChecked</span>&gt;</span>
              {type}
            <span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(j)]),_:1}),P,s(c,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:n(()=>[s(g)]),_:1}),V,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">disabled</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">defaultChecked</span> <span class="hljs-attr">disabled</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:n(()=>[s(o,{disabled:""},{default:n(()=>[T]),_:1}),s(o,{defaultChecked:"",disabled:""},{default:n(()=>[B]),_:1})]),_:1}),D,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">defaultChecked</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-checkbox</span> <span class="hljs-attr">indeterminate</span> <span class="hljs-attr">disabled</span>&gt;</span>Pear<span class="hljs-tag">&lt;/<span class="hljs-name">dv-checkbox</span>&gt;</span>
`},{default:n(()=>[s(o,{indeterminate:""},{default:n(()=>[F]),_:1}),s(o,{indeterminate:"",defaultChecked:""},{default:n(()=>[N]),_:1}),s(o,{indeterminate:"",disabled:""},{default:n(()=>[E]),_:1})]),_:1}),G,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Apple&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pear&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pear&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Orange&#x27;</span> },
    ];
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-string">&#x27;pear&#x27;</span>]);
    <span class="hljs-keyword">const</span> disabled = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

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
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">{value.value}</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(x)]),_:1}),a("div",M,[H,U,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"size",1:"size",2:"ISize",3:"md"},{0:"variant",1:"color type",2:"neutral, primary, secondary, accent",3:"neutral"},{0:"disabled",1:"disable status",2:"bool",3:"-"},{0:"checked",1:"checked status",2:"bool",3:"-"},{0:"onChange",1:"change callback",2:"Function",3:"-"},{0:"defaultChecked",1:"initial checked status",2:"bool",3:"-"},{0:"readOnly",1:"read only status",2:"bool",3:"-"},{0:"options",1:"checkbox options",2:"IOption[]",3:"-"},{0:"indeterminate",1:"indeterminate status. style only, do not affect the value",2:"bool",3:"-"}]},null,8,["dataSource"]),W,J,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"v-model",1:"v-model for selected values",2:"IText[]",3:"-"},{0:"size",1:"size",2:"ISize",3:"md"},{0:"variant",1:"color type",2:"neutral, primary, secondary, accent",3:"neutral"},{0:"disabled",1:"disable status",2:"bool",3:"-"},{0:"options",1:"options",2:"IOption[]",3:"-"},{0:"defaultValue",1:"initial values",2:"IText[]",3:"-"}]}),K,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"default",dataIndex:2}],dataSource:[{0:"--dv-checkbox-gap",1:"checkbox horizontal gap",2:"8px"}]})])],64)}}},Z=m(L,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/checkbox.md"]]);export{Z as default,Y as meta};
