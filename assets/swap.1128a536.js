import{c as s,a0 as n,v as g,a as e,u as m,a2 as f,a3 as t,a4 as a,p as v,a5 as x}from"./vendor.41784413.js";var _={setup:()=>()=>s("div",{class:"text-center"},[s(n("dv-swap"),{on:()=>s(n("IconVolumeHigh"),{size:"48px"},null),off:()=>s(n("IconVolumeMute"),{size:"48px"},null)},null)])},w={setup:()=>()=>s("div",{class:"text-center text-9xl"},[s(n("dv-swap"),{on:"\u{1F608}",off:"\u{1F607}",animation:"flip"},null)])},y={setup:()=>{const p=g(!1);return()=>s("div",{class:"text-center"},[s("div",{class:"py-2"},[s(n("dv-button"),{onClick:()=>p.value=!0},{default:()=>[e("on")]}),e("\xA0/\xA0"),s(n("dv-button"),{onClick:()=>p.value=!1},{default:()=>[e("off")]})]),s("div",{class:"text-9xl"},[s(n("dv-swap"),{on:"\u{1F973}",off:"\u{1F62D}",animation:"flip",active:p.value},null)])])}};const q=a("div",{class:"markdown-body"},[a("h1",null,"Swap"),a("h2",null,"Examples"),a("p",null,"Swap text")],-1),b={class:"text-center"},k=a("div",{class:"markdown-body"},[a("p",null,"Swap volume icons")],-1),z=a("div",{class:"markdown-body"},[a("p",null,"Swap icons with rotate effect")],-1),I={class:"text-center"},C=a("div",{class:"markdown-body"},[a("p",null,"Swap with flip effect")],-1),S=a("div",{class:"markdown-body"},[a("p",null,"Controlled swap")],-1),M={class:"markdown-body"},V=a("h2",null,"Swap",-1),F=a("h3",null,"Attributes",-1),N=a("h3",null,"Solts",-1),E=[],P={setup(p,{expose:h}){return h({frontmatter:{meta:[]}}),m({meta:[]}),(B,H)=>{const c=n("dv-swap"),l=n("Playground"),r=_,i=n("IconSunny"),j=n("IconMoon"),u=w,d=y,o=n("MarkdownTable");return x(),f(v,null,[q,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;ON&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;OFF&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",b,[s(c,{on:"ON",off:"OFF"})])]),_:1}),k,s(l,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span>
          <span class="hljs-attr">on</span>=<span class="hljs-string">{()</span> =&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">IconVolumeHigh</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>}
          off={() =&gt; <span class="hljs-tag">&lt;<span class="hljs-name">IconVolumeMute</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>}
        /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(r)]),_:1}),z,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;rotate&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:on</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">IconSunny</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:off</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">IconMoon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-swap</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",I,[s(c,{animation:"rotate"},{on:t(()=>[s(i,{size:"48px"})]),off:t(()=>[s(j,{size:"48px"})]),_:1})])]),_:1}),C,s(l,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center text-9xl&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;\u{1F608}&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;\u{1F607}&quot;</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;flip&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(u)]),_:1}),S,s(l,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
`},{default:t(()=>[s(d)]),_:1}),a("div",M,[V,F,s(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"on","1":"render on","2":"-","3":"-"},{"0":"off","1":"render off","2":"-","3":"-"},{"0":"tag","1":"wrap elemnt tag","2":"string","3":"label"},{"0":"animation","1":"animation effect","2":"rotate, flip","3":"-"},{"0":"active","1":"swap active status","2":"boolean","3":"-"},{"0":"onChange","1":"swap active status change event","2":"Function","3":"-"}]}),N,s(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"on","1":"render on"},{"0":"off","1":"render off"}]})])],64)}}};export{P as default,E as meta};
