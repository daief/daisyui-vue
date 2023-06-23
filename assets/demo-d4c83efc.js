import{g as d,a as s,d as n,r as t,F as c,_ as h,u as j,o as m,c as g,w as i,l as e,b as p}from"./app-f7b9d8d9.js";const f={setup:()=>{d("1");const l=[1,2,3];return()=>s(t("dv-space"),null,{default:()=>[n("I'm a text"),null,!1,0,"a",s(t("dv-button"),null,{default:()=>[n("button")]}),s(c,null,[l.map(a=>s("div",null,[a])),n("asd"),l.map(a=>s("div",null,[a,n("2")]))])]})}},x=p("div",{class:"markdown-body"},[p("h1",null,"Demo for development")],-1),_=p("div",{class:"markdown-body"},null,-1),C=[],o={setup(l,{expose:a}){return a({frontmatter:{meta:[]}}),j({meta:[]}),(y,b)=>{const r=f,u=t("Playground");return m(),g(c,null,[x,s(u,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-string">&#x27;Content 3&#x27;</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: blue&quot;</span>&gt;</span>Title Slot<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>,
    };

    <span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span>&gt;</span>
        I&#x27;m a text
        {null}
        {false}
        {0}
        {&#x27;a&#x27;}
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;&gt;</span>
          {arr.map((it) =&gt; (
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{it}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          ))}
          asd
          {arr.map((it) =&gt; (
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{it}2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          ))}
        <span class="hljs-tag">&lt;/&gt;</span></span>
      &lt;/dv-space&gt;
    );
  },
};
`},{default:i(()=>[s(r)]),_:1}),_],64)}}};typeof e=="function"&&e(o);const T=h(o,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/demo.md"]]);export{T as default,C as meta};
