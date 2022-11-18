import{T as r,a as t}from"./app.bea0cd1f.js";import{w as h,c as s,a as l,i as j,u,a2 as g,a4 as d,a5 as i,q as m,a6 as p,a7 as f}from"./vendor.95b30dca.js";function y(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!j(a)}var b={setup:()=>{const a=h("1"),n={default:()=>"Content 3",title:()=>s("a",{style:"color: blue"},[l("Title Slot")])};return()=>s("div",null,[s(r,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e},{default:()=>[s(t,{name:"1",title:()=>s("a",{style:"color: red"},[l("Render Props")])},{default:()=>[l("Content 1")]}),s(t,{name:"2",title:s("a",{style:"color: orange"},[l("VNode As Props")])},{default:()=>[l("Content 2")]}),s(t,{name:"3"},y(n)?n:{default:()=>[n]})]})])}};const _=p("div",{class:"markdown-body"},[p("h1",null,"Demo for development")],-1),x=p("div",{class:"markdown-body"},null,-1),q=[],C={setup(a,{expose:n}){return n({frontmatter:{meta:[]}}),u({meta:[]}),(w,v)=>{const c=b,o=g("Playground");return f(),d(m,null,[_,s(o,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-string">&#x27;Content 3&#x27;</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: blue&quot;</span>&gt;</span>Title Slot<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>,
    };

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span>
            <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>
            <span class="hljs-attr">title</span>=<span class="hljs-string">{()</span> =&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: red&quot;</span>&gt;</span>Render Props<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>}
          &gt;
            Content 1
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span>
            <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>
            <span class="hljs-attr">title</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: orange&quot;</span>&gt;</span>VNode As Props<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>}
          &gt;
            Content 2
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>{slots}<span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:i(()=>[s(c)]),_:1}),x],64)}}};export{C as default,q as meta};
