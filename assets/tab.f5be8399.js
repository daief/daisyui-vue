import{T as e,a as n}from"./app.f3cd4c76.js";import{x as r,c as s,a as p,i as x,u as v,a3 as g,a5 as y,a6 as o,a7 as l,F as w,a8 as _}from"./vendor.faf17d9b.js";var P={setup:()=>{const a=r("1");return()=>s("div",null,[s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t},{default:()=>[s(n,{name:"1",title:"TabPanel 1"},{default:()=>[p("Content 1")]}),s(n,{name:"2",title:"TabPanel 2"},{default:()=>[p("Content 2")]}),s(n,{name:"3",title:"TabPanel 3"},{default:()=>[p("Content 3")]})]})])}};function k(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!x(a)}var C={setup:()=>{const a=r("1"),t=()=>s("a",{style:"color: red"},[p("Render Props")]),u=s("a",{style:"color: orange"},[p("VNode As Props")]),h={default:()=>"Content 3",title:()=>s("a",{style:"color: blue"},[p("Title Slot")])};return()=>s("div",null,[s(e,{modelValue:a.value,"onUpdate:modelValue":i=>a.value=i},{default:()=>[s(n,{name:"1",title:t},{default:()=>[p("Content 1")]}),s(n,{name:"2",title:u},{default:()=>[p("Content 2")]}),s(n,{name:"3"},k(h)?h:{default:()=>[h]})]})])}},V={setup:()=>{const a=r("1");return()=>s("div",null,[s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,variant:"bordered"},{default:()=>[s(n,{name:"1",title:"TabPanel 1"},{default:()=>[p("Content 1")]}),s(n,{name:"2",title:"TabPanel 2"},{default:()=>[p("Content 2")]}),s(n,{name:"3",title:"TabPanel 3"},{default:()=>[p("Content 3")]})]})])}},z={setup:()=>{const a=r("1");return()=>s("div",null,[s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,variant:"lifted"},{default:()=>[s(n,{name:"1",title:"TabPanel 1"},{default:()=>[p("Content 1")]}),s(n,{name:"2",title:"TabPanel 2"},{default:()=>[p("Content 2")]}),s(n,{name:"3",title:"TabPanel 3"},{default:()=>[p("Content 3")]})]})])}},N={setup:()=>{const a=r("1");return()=>s("div",null,[s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,variant:"boxed"},{default:()=>[s(n,{name:"1",title:"TabPanel 1"},{default:()=>[p("Content 1")]}),s(n,{name:"2",title:"TabPanel 2"},{default:()=>[p("Content 2")]}),s(n,{name:"3",title:"TabPanel 3"},{default:()=>[p("Content 3")]})]})])}},S={setup:()=>{const a=r("1");return()=>s("div",null,[s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,variant:"lifted",size:"xs"},{default:()=>[s(n,{name:"1",title:"Tiny"},null),s(n,{name:"2",title:"Tiny"},null),s(n,{name:"3",title:"Tiny"},null)]}),s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,variant:"lifted",size:"sm"},{default:()=>[s(n,{name:"1",title:"Small"},null),s(n,{name:"2",title:"Small"},null),s(n,{name:"3",title:"Small"},null)]}),s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,variant:"lifted",size:"md"},{default:()=>[s(n,{name:"1",title:"Normal"},null),s(n,{name:"2",title:"Normal"},null),s(n,{name:"3",title:"Normal"},null)]}),s(e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,variant:"lifted",size:"lg"},{default:()=>[s(n,{name:"1",title:"Large"},null),s(n,{name:"2",title:"Large"},null),s(n,{name:"3",title:"Large"},null)]})])}};const I=l("div",{class:"markdown-body"},[l("h1",null,"TabPanel"),l("h2",null,"Examples"),l("p",null,"tabs")],-1),U=l("div",{class:"markdown-body"},[l("p",null,"custom title")],-1),L=l("div",{class:"markdown-body"},[l("p",null,"tab-bordered")],-1),A=l("div",{class:"markdown-body"},[l("p",null,"tab-lifted")],-1),B=l("div",{class:"markdown-body"},[l("p",null,"tab-boxed")],-1),F=l("div",{class:"markdown-body"},[l("p",null,"size")],-1),E={class:"markdown-body"},M=l("h2",null,"Tabs",-1),O=l("h3",null,"Attributes",-1),R=l("h2",null,"TabPanel",-1),H=l("h3",null,"Attributes",-1),D=l("h3",null,"Slots",-1),Q=[],W={setup(a,{expose:t}){return t({frontmatter:{meta:[]}}),v({meta:[]}),(i,G)=>{const d=P,c=g("Playground"),m=C,b=V,T=z,q=N,f=S,j=g("MarkdownTable");return _(),y(w,null,[I,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 1&quot;</span>&gt;</span>
            Content 1
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 2&quot;</span>&gt;</span>
            Content 2
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 3&quot;</span>&gt;</span>
            Content 3
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(d)]),_:1}),U,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">renderTitle</span> = (<span class="hljs-params"></span>) =&gt; <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: red&quot;</span>&gt;</span>Render Props<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>;
    <span class="hljs-keyword">const</span> vNode = <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: orange&quot;</span>&gt;</span>VNode As Props<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>;
    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-string">&#x27;Content 3&#x27;</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: blue&quot;</span>&gt;</span>Title Slot<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>,
    };
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{renderTitle}</span>&gt;</span>
            Content 1
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{vNode}</span>&gt;</span>
            Content 2
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>{slots}<span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(m)]),_:1}),L,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;bordered&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 1&quot;</span>&gt;</span>
            Content 1
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 2&quot;</span>&gt;</span>
            Content 2
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 3&quot;</span>&gt;</span>
            Content 3
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(b)]),_:1}),A,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;lifted&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 1&quot;</span>&gt;</span>
            Content 1
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 2&quot;</span>&gt;</span>
            Content 2
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 3&quot;</span>&gt;</span>
            Content 3
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(T)]),_:1}),B,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;boxed&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 1&quot;</span>&gt;</span>
            Content 1
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 2&quot;</span>&gt;</span>
            Content 2
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;TabPanel 3&quot;</span>&gt;</span>
            Content 3
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabPanel</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(q)]),_:1}),F,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">TabPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{currentTab.value}</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabPanel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(f)]),_:1}),l("div",E,[M,O,s(j,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"variant","1":"tabs type","2":"bordered, lifted, boxed","3":"bordered"},{"0":"size","1":"tabs size","2":"ISize","3":"md"},{"0":"v-model","1":"tabs value","2":"-","3":"-"}]}),R,H,s(j,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"title","1":"tab title","2":"IText, VNode, Function","3":"-"},{"0":"name","1":"name of tab","2":"IText","3":"-"}]}),D,s(j,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"tab content"},{"0":"title","1":"tab title"}]})])],64)}}};export{W as default,Q as meta};
