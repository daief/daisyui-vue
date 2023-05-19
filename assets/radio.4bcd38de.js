import{r as d,c as s,b as t,F as i,a as u,u as m,d as y,w as c,e as a,o as _}from"./app.10e33cde.js";var f={setup:()=>{const l=d("a"),n=p=>{l.value=p.target.value};return()=>s(i,null,[s(t("dv-radio"),{checked:l.value==="a",onChange:n,name:"radio-2",value:"a"},null),s(t("dv-radio"),{checked:l.value==="b",onChange:n,name:"radio-2",value:"b"},null)])}},w={setup:()=>{const l=["neutral","primary","secondary","accent"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[l.map(n=>s("div",{key:n,class:"w-32"},[s(t("dv-radio"),{variant:n},{default:()=>[n]})]))])}},b={setup:()=>{const l=["xs","sm","md","lg"];return()=>s("div",{class:"flex flex-col items-center space-y-4"},[l.map(n=>s("div",{key:n},[s(t("dv-radio"),{size:n},null)]))])}},k={setup:()=>{const l=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}],n=d("apple"),p=d(!1);return()=>s("div",null,[s("div",{class:"flex items-center"},[s("label",{class:"mr-4"},[u("Disabled:")]),s(t("dv-toggle"),{checked:p.value,onChange:o=>p.value=o.target.checked},null)]),s(t("dv-divider"),null,null),s(t("dv-radio-group"),{size:"lg",options:l,disabled:p.value,modelValue:n.value,"onUpdate:modelValue":o=>n.value=o},null)])}};const q=a("div",{class:"markdown-body"},[a("h1",null,"Radio"),a("h2",null,"Examples"),a("p",null,"Radio")],-1),C=u(),z=a("div",{class:"markdown-body"},[a("p",null,"value & change")],-1),I=a("div",{class:"markdown-body"},[a("p",null,"Color type")],-1),S=a("div",{class:"markdown-body"},[a("p",null,"Sizes")],-1),T=a("div",{class:"markdown-body"},[a("p",null,"Group")],-1),V={class:"markdown-body"},A=a("h2",null,"Radio",-1),O=a("h3",null,"Attributes",-1),P=a("h2",null,"RadioGroup",-1),R=a("h3",null,"Attributes",-1),B=a("h2",null,"CSS variables",-1),F=[],G={setup(l,{expose:n}){return n({frontmatter:{meta:[]}}),m({meta:[]}),(N,D)=>{const h=t("dv-radio"),e=t("Playground"),j=f,g=w,v=b,x=k,r=t("MarkdownTable");return _(),y(i,null,[q,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio-1&quot;</span> /&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio-1&quot;</span> /&gt;</span>
`},{default:c(()=>[s(h,{name:"radio-1"}),C,s(h,{name:"radio-1"})]),_:1}),z,s(e,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> val = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;a&#x27;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">e</span>) =&gt; {
      val.<span class="hljs-property">value</span> = e.<span class="hljs-property">target</span>.<span class="hljs-property">value</span>;
    };
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-radio</span>
          <span class="hljs-attr">checked</span>=<span class="hljs-string">{val.value</span> === <span class="hljs-string">&#x27;a&#x27;</span>}
          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>
          <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio-2&quot;</span>
          <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-radio</span>
          <span class="hljs-attr">checked</span>=<span class="hljs-string">{val.value</span> === <span class="hljs-string">&#x27;b&#x27;</span>}
          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>
          <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio-2&quot;</span>
          <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    );
  },
};
`},{default:c(()=>[s(j)]),_:1}),I,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> types = [<span class="hljs-string">&#x27;neutral&#x27;</span>, <span class="hljs-string">&#x27;primary&#x27;</span>, <span class="hljs-string">&#x27;secondary&#x27;</span>, <span class="hljs-string">&#x27;accent&#x27;</span>];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col items-center space-y-4&quot;</span>&gt;</span>
        {types.map((type) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{type}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-32&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-radio</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">{type}</span>&gt;</span>{type}<span class="hljs-tag">&lt;/<span class="hljs-name">dv-radio</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:c(()=>[s(g)]),_:1}),S,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> types = [<span class="hljs-string">&#x27;xs&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col items-center space-y-4&quot;</span>&gt;</span>
        {types.map((size) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{size}</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-radio</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{size}</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:c(()=>[s(v)]),_:1}),T,s(e,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Apple&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;pear&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pear&#x27;</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Orange&#x27;</span> },
    ];
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;apple&#x27;</span>);
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
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-radio-group</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
          <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
          <span class="hljs-attr">disabled</span>=<span class="hljs-string">{disabled.value}</span>
          <span class="hljs-attr">v-model</span>=<span class="hljs-string">{value.value}</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:c(()=>[s(x)]),_:1}),a("div",V,[A,O,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"size",1:"size",2:"ISize",3:"md"},{0:"variant",1:"color type",2:"neutral, primary, secondary, accent",3:"neutral"},{0:"disabled",1:"disable status",2:"bool",3:"-"},{0:"checked",1:"checked status",2:"bool",3:"-"},{0:"value",1:"input value",2:"IText",3:"-"},{0:"name",1:"input name",2:"string",3:"-"},{0:"readOnly",1:"read only status",2:"bool",3:"-"}]}),P,R,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"size",1:"size",2:"ISize",3:"md"},{0:"variant",1:"color type",2:"neutral, primary, secondary, accent",3:"neutral"},{0:"disabled",1:"disable status",2:"bool",3:"-"},{0:"options",1:"options",2:"IOption[]",3:"-"},{0:"v-model",1:"v-model for selected value",2:"IText",3:"-"},{0:"defaultValue",1:"initial value",2:"IText",3:"-"}]}),B,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"default",dataIndex:2}],dataSource:[{0:"--dv-radio-gap",1:"checkbox horizontal gap",2:"8px"}]})])],64)}}};export{G as default,F as meta};
