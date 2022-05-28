import{c as s,z as n,j as g,a as e,u as m,A as v,B as t,C as a,F as f,D as x}from"./vendor.6a4aa954.js";var _={setup:()=>()=>s("div",{class:"text-center"},[s(n("dv-swap"),{on:()=>s(n("dv-icon-volume-on"),{size:"48px"},null),off:()=>s(n("dv-icon-volume-off"),{size:"48px"},null)},null)])},w={setup:()=>()=>s("div",{class:"text-center text-9xl"},[s(n("dv-swap"),{on:"\u{1F608}",off:"\u{1F607}",animation:"flip"},null)])},q={setup:()=>{const p=g(!1);return()=>s("div",{class:"text-center"},[s("div",{class:"py-2"},[s(n("dv-button"),{onClick:()=>p.value=!0},{default:()=>[e("on")]}),e("\xA0/\xA0"),s(n("dv-button"),{onClick:()=>p.value=!1},{default:()=>[e("off")]})]),s("div",{class:"text-9xl"},[s(n("dv-swap"),{on:"\u{1F973}",off:"\u{1F62D}",animation:"flip",active:p.value},null)])])}};const y=a("div",{class:"markdown-body"},[a("h1",null,"Swap"),a("h2",null,"Examples"),a("p",null,"Swap text")],-1),b={class:"text-center"},k=a("div",{class:"markdown-body"},[a("p",null,"Swap volume icons")],-1),z=a("div",{class:"markdown-body"},[a("p",null,"Swap icons with rotate effect")],-1),C={class:"text-center"},S=a("div",{class:"markdown-body"},[a("p",null,"Swap with flip effect")],-1),F=a("div",{class:"markdown-body"},[a("p",null,"Controlled swap")],-1),I={class:"markdown-body"},N=a("h2",null,"Swap",-1),A=a("h3",null,"Attributes",-1),B=a("h3",null,"Solts",-1),P=[],D={setup(p,{expose:h}){return h({frontmatter:{meta:[]}}),m({meta:[]}),(V,E)=>{const c=n("dv-swap"),l=n("Playground"),i=_,r=n("dv-icon-sun"),d=n("dv-icon-moon"),j=w,u=q,o=n("MarkdownTable");return x(),v(f,null,[y,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;ON&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;OFF&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",b,[s(c,{on:"ON",off:"OFF"})])]),_:1}),k,s(l,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span>
          <span class="hljs-attr">on</span>=<span class="hljs-string">{()</span> =&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-volume-on</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>}
          off={() =&gt; <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-volume-off</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>}
        /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(i)]),_:1}),z,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;rotate&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:on</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-sun</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:off</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-moon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-swap</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",C,[s(c,{animation:"rotate"},{on:t(()=>[s(r,{size:"48px"})]),off:t(()=>[s(d,{size:"48px"})]),_:1})])]),_:1}),S,s(l,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center text-9xl&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;\u{1F608}&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;\u{1F607}&quot;</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;flip&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(j)]),_:1}),F,s(l,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-2&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> (active.value = true)}&gt;on<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
          <span class="hljs-symbol">&amp;nbsp;</span>/<span class="hljs-symbol">&amp;nbsp;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> (active.value = false)}&gt;off<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-9xl&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;\u{1F973}&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;\u{1F62D}&quot;</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;flip&quot;</span> <span class="hljs-attr">active</span>=<span class="hljs-string">{active.value}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(u)]),_:1}),a("div",I,[N,A,s(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"on","1":"render on","2":"-","3":"-"},{"0":"off","1":"render off","2":"-","3":"-"},{"0":"tag","1":"wrap elemnt tag","2":"string","3":"label"},{"0":"animation","1":"animation effect","2":"rotate, flip","3":"-"},{"0":"active","1":"swap active status","2":"boolean","3":"-"},{"0":"onChange","1":"swap active status change event","2":"Function","3":"-"}]}),B,s(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"on","1":"render on"},{"0":"off","1":"render off"}]})])],64)}}};export{D as default,P as meta};
