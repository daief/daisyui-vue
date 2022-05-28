import{T as a,b as e}from"./app.c6fd2e41.js";import{j as r,c as s,a as p,F as o,u as d,z as b,A as q,B as h,C as t,D as T}from"./vendor.6a4aa954.js";var f={setup:()=>{const n=r("1");return()=>s(e,{value:n.value,"onUpdate:value":l=>n.value=l},{default:()=>[s(a,{name:"1",title:"Tab 1"},{default:()=>[p("Content 1")]}),s(a,{name:"2",title:"Tab 2"},{default:()=>[p("Content 2")]}),s(a,{name:"3",title:"Tab 3"},{default:()=>[p("Content 3")]})]})}},x={setup:()=>{const n=r("1");return()=>s(e,{value:n.value,"onUpdate:value":l=>n.value=l,type:"bordered"},{default:()=>[s(a,{name:"1",title:"Tab 1"},{default:()=>[p("Content 1")]}),s(a,{name:"2",title:"Tab 2"},{default:()=>[p("Content 2")]}),s(a,{name:"3",title:"Tab 3"},{default:()=>[p("Content 3")]})]})}},y={setup:()=>{const n=r("1");return()=>s(e,{value:n.value,"onUpdate:value":l=>n.value=l,type:"lifted"},{default:()=>[s(a,{name:"1",title:"Tab 1"},{default:()=>[p("Content 1")]}),s(a,{name:"2",title:"Tab 2"},{default:()=>[p("Content 2")]}),s(a,{name:"3",title:"Tab 3"},{default:()=>[p("Content 3")]})]})}},v={setup:()=>{const n=r("1");return()=>s(e,{value:n.value,"onUpdate:value":l=>n.value=l,type:"boxed"},{default:()=>[s(a,{name:"1",title:"Tab 1"},{default:()=>[p("Content 1")]}),s(a,{name:"2",title:"Tab 2"},{default:()=>[p("Content 2")]}),s(a,{name:"3",title:"Tab 3"},{default:()=>[p("Content 3")]})]})}},w={setup:()=>{const n=r("1");return()=>s(o,null,[s(e,{value:n.value,"onUpdate:value":l=>n.value=l,type:"lifted",size:"xs"},{default:()=>[s(a,{name:"1",title:"Tiny"},null),s(a,{name:"2",title:"Tiny"},null),s(a,{name:"3",title:"Tiny"},null)]}),s(e,{value:n.value,"onUpdate:value":l=>n.value=l,type:"lifted",size:"sm"},{default:()=>[s(a,{name:"1",title:"Small"},null),s(a,{name:"2",title:"Small"},null),s(a,{name:"3",title:"Small"},null)]}),s(e,{value:n.value,"onUpdate:value":l=>n.value=l,type:"lifted",size:"md"},{default:()=>[s(a,{name:"1",title:"Normal"},null),s(a,{name:"2",title:"Normal"},null),s(a,{name:"3",title:"Normal"},null)]}),s(e,{value:n.value,"onUpdate:value":l=>n.value=l,type:"lifted",size:"lg"},{default:()=>[s(a,{name:"1",title:"Large"},null),s(a,{name:"2",title:"Large"},null),s(a,{name:"3",title:"Large"},null)]})])}};const _=t("div",{class:"markdown-body"},[t("h1",null,"Tab"),t("h2",null,"Examples"),t("p",null,"tabs")],-1),k=t("div",{class:"markdown-body"},[t("p",null,"tab-bordered")],-1),C=t("div",{class:"markdown-body"},[t("p",null,"tab-lifted")],-1),z=t("div",{class:"markdown-body"},[t("p",null,"tab-boxed")],-1),N=t("div",{class:"markdown-body"},[t("p",null,"size")],-1),U=t("div",{class:"markdown-body"},null,-1),P=[],A={setup(n,{expose:l}){return l({frontmatter:{meta:[]}}),d({meta:[]}),(B,V)=>{const j=f,c=b("Playground"),u=x,g=y,i=v,m=w;return T(),q(o,null,[_,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]}&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>
          Content 1
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>
          Content 2
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>
          Content 3
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>
    );
  },
};
`},{default:h(()=>[s(j)]),_:1}),k,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;bordered&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>
          Content 1
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>
          Content 2
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>
          Content 3
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>
    );
  },
};
`},{default:h(()=>[s(u)]),_:1}),C,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>
          Content 1
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>
          Content 2
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>
          Content 3
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>
    );
  },
};
`},{default:h(()=>[s(g)]),_:1}),z,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;boxed&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>
          Content 1
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>
          Content 2
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>
          Content 3
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>
    );
  },
};
`},{default:h(()=>[s(i)]),_:1}),N,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    );
  },
};
`},{default:h(()=>[s(m)]),_:1}),U],64)}}};export{A as default,P as meta};
