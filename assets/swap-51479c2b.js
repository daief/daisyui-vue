import{g,a as s,r as n,d as e,_ as m,u as f,o as v,c as _,w as t,b as a,F as x}from"./app-33be3538.js";const w={setup:()=>{const p=g(!1);return()=>s("div",{class:"text-center"},[s("div",{class:"py-2"},[s(n("dv-button"),{onClick:()=>p.value=!0},{default:()=>[e("on")]}),e(" / "),s(n("dv-button"),{onClick:()=>p.value=!1},{default:()=>[e("off")]})]),s("div",{class:"text-9xl"},[s(n("dv-swap"),{on:"🥳",off:"😭",animation:"flip",active:p.value},null)])])}},y={setup:()=>()=>s("div",{class:"text-center text-9xl"},[s(n("dv-swap"),{on:"😈",off:"😇",animation:"flip"},null)])},q={setup:()=>()=>s(n("dv-swap"),{on:()=>s(n("IconVolumeHigh"),{size:"48px"},null),off:()=>s(n("IconVolumeMute"),{size:"48px"},null)},null)},b=a("div",{class:"markdown-body"},[a("h1",null,"Swap"),a("h2",null,"Examples"),a("p",null,"Swap text")],-1),k=a("div",{class:"markdown-body"},[a("p",null,"Swap volume icons")],-1),I=a("div",{class:"markdown-body"},[a("p",null,"Swap icons with rotate effect")],-1),z=a("div",{class:"markdown-body"},[a("p",null,"Swap with flip effect")],-1),C=a("div",{class:"markdown-body"},[a("p",null,"Controlled swap")],-1),D={class:"markdown-body"},S=a("h2",null,"Swap",-1),F=a("h3",null,"Attributes",-1),M=a("h3",null,"Solts",-1),H=[],V={setup(p,{expose:h}){return h({frontmatter:{meta:[]}}),f({meta:[]}),(O,A)=>{const o=n("dv-swap"),l=n("Playground"),u=q,r=n("IconSunny"),i=n("IconMoon"),d=y,j=w,c=n("MarkdownTable");return v(),_(x,null,[b,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;ON&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;OFF&quot;</span> /&gt;</span>
`},{default:t(()=>[s(o,{on:"ON",off:"OFF"})]),_:1}),k,s(l,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span>
        <span class="hljs-attr">on</span>=<span class="hljs-string">{()</span> =&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">IconVolumeHigh</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>}
        off={() =&gt; <span class="hljs-tag">&lt;<span class="hljs-name">IconVolumeMute</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>}
      /&gt;</span>
    );
  },
};
`},{default:t(()=>[s(u)]),_:1}),I,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;rotate&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:on</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">IconSunny</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:off</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">IconMoon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;48px&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-swap</span>&gt;</span>
`},{default:t(()=>[s(o,{animation:"rotate"},{on:t(()=>[s(r,{size:"48px"})]),off:t(()=>[s(i,{size:"48px"})]),_:1})]),_:1}),z,s(l,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center text-9xl&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;😈&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;😇&quot;</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;flip&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(d)]),_:1}),C,s(l,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-swap</span> <span class="hljs-attr">on</span>=<span class="hljs-string">&quot;🥳&quot;</span> <span class="hljs-attr">off</span>=<span class="hljs-string">&quot;😭&quot;</span> <span class="hljs-attr">animation</span>=<span class="hljs-string">&quot;flip&quot;</span> <span class="hljs-attr">active</span>=<span class="hljs-string">{active.value}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:t(()=>[s(j)]),_:1}),a("div",D,[S,F,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"on",1:"render on",2:"-",3:"-"},{0:"off",1:"render off",2:"-",3:"-"},{0:"tag",1:"wrap elemnt tag",2:"string",3:"label"},{0:"animation",1:"animation effect",2:"rotate, flip",3:"-"},{0:"active",1:"swap active status",2:"boolean",3:"-"},{0:"onChange",1:"swap active status change event",2:"Function",3:"-"}]}),M,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{0:"on",1:"render on"},{0:"off",1:"render off"}]})])],64)}}},T=m(V,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/swap.md"]]);export{T as default,H as meta};
