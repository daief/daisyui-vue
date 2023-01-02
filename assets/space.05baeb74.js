import{x as v,c as s,a3 as l,a as t,a8 as h,a5 as i,aa as _,a7 as a,a6 as n,ab as b,F as j,ac as k,ad as q,u as z,ae as I}from"./vendor.faf17d9b.js";import{_ as C}from"./app.e0e29801.js";var S={setup:()=>{const p=["xs","sm","md","lg"].map(e=>({label:e,value:e})),c=v("md");return()=>s("div",{class:"space-y-4"},[s(l("dv-radio-group"),{options:p,modelValue:c.value,"onUpdate:modelValue":e=>c.value=e},null),s("br",null,null),s(l("dv-space"),{direction:"vertical",spacing:c.value},{default:()=>[t("I'm a text"),s(l("dv-button"),null,{default:()=>[t("button")]}),s(l("dv-button"),null,{default:()=>[t("button2")]})]})])}};const A={},V=p=>(k("data-v-5098191f"),p=p(),q(),p),B={class:"space-align-block"},$=t("button"),N=V(()=>a("div",{class:"mock-block"},"block",-1));function T(p,c){const e=l("dv-button"),g=l("dv-space");return h(),i(j,null,_(["center","start","end","baseline"],r=>a("div",B,[s(g,{align:r},{default:n(()=>[t(b(r)+" ",1),s(e,null,{default:n(()=>[$]),_:1}),N]),_:2},1032,["align"])])),64)}var E=C(A,[["render",T],["__scopeId","data-v-5098191f"]]),F={setup:()=>{const p=v("8px");return()=>s("div",{class:"space-y-4"},[s("div",null,[s(l("dv-input"),{value:p.value,onInput:c=>p.value=c.target.value},null)]),s(l("dv-space"),{direction:"vertical",spacing:p.value},{default:()=>[t("I'm a text"),s(l("dv-button"),null,{default:()=>[t("button")]}),s(l("dv-button"),null,{default:()=>[t("button2")]})]})])}};const M=a("div",{class:"markdown-body"},[a("h1",null,"Space"),a("h2",null,"Examples"),a("p",null,"Space")],-1),P=t(" I'm a text "),D=t("button"),H=a("div",{class:"markdown-body"},[a("p",null,"Vertical")],-1),L=t(" I'm a text "),U=t("button"),W=t("button2"),G=a("div",{class:"markdown-body"},[a("p",null,"Spacing size")],-1),J=a("div",{class:"markdown-body"},[a("p",null,"Align")],-1),K=a("div",{class:"markdown-body"},[a("p",null,"Custom spacing")],-1),O=a("div",{class:"markdown-body"},[a("p",null,"Wrap")],-1),Q={class:"markdown-body"},R=a("h2",null,"Space",-1),X=a("h3",null,"Attributes",-1),as=[],ns={setup(p,{expose:c}){return c({frontmatter:{meta:[]}}),z({meta:[]}),(r,Y)=>{const u=l("dv-button"),d=l("dv-space"),o=l("Playground"),x=S,f=E,y=F,w=l("MarkdownTable");return h(),i(j,null,[M,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span>&gt;</span>
  I&#x27;m a text
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:n(()=>[s(d,null,{default:n(()=>[P,s(u,null,{default:n(()=>[D]),_:1})]),_:1})]),_:1}),H,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
  I&#x27;m a text
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:n(()=>[s(d,{direction:"vertical"},{default:n(()=>[L,s(u,null,{default:n(()=>[U]),_:1}),s(u,null,{default:n(()=>[W]),_:1})]),_:1})]),_:1}),G,s(o,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> options = [<span class="hljs-string">&#x27;xs&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>].<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">s</span>) =&gt;</span> ({
      <span class="hljs-attr">label</span>: s,
      <span class="hljs-attr">value</span>: s,
    }));
    <span class="hljs-keyword">const</span> size = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;md&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;space-y-4&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-radio-group</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{size.value}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">spacing</span>=<span class="hljs-string">{size.value}</span>&gt;</span>
          I&#x27;m a text
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(x)]),_:1}),J,s(o,{lang:"html",code:`<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;space-align-block&quot;</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(align) in [&#x27;center&#x27;, &#x27;start&#x27;, &#x27;end&#x27;, &#x27;baseline&#x27;]&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">:align</span>=<span class="hljs-string">&quot;align&quot;</span>&gt;</span>
      {{align}}
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mock-block&quot;</span>&gt;</span>block<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.space-align-block</span> {
    <span class="hljs-attribute">flex</span>: none;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">8px</span> <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#40a9ff</span>;
  }
  <span class="hljs-selector-class">.mock-block</span> {
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">32px</span> <span class="hljs-number">8px</span> <span class="hljs-number">16px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">150</span>, <span class="hljs-number">150</span>, <span class="hljs-number">150</span>, <span class="hljs-number">0.2</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
`},{default:n(()=>[s(f)]),_:1}),K,s(o,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> size = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;8px&#x27;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;space-y-4&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span>
            <span class="hljs-attr">value</span>=<span class="hljs-string">{size.value}</span>
            <span class="hljs-attr">onInput</span>=<span class="hljs-string">{(e)</span> =&gt;</span> (size.value = e.target.value)}
          /&gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">spacing</span>=<span class="hljs-string">{size.value}</span>&gt;</span>
          I&#x27;m a text
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(y)]),_:1}),O,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-64 max-w-full&quot;</span> <span class="hljs-attr">block</span> <span class="hljs-attr">wrap</span> <span class="hljs-attr">:spacing</span>=<span class="hljs-string">&quot;[12, 4]&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(i) in Array.from(new Array(20).keys())&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{i}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:n(()=>[s(d,{class:"w-64 max-w-full",block:"",wrap:"",spacing:[12,4]},{default:n(()=>[(h(!0),i(j,null,_(Array.from(new Array(20).keys()),m=>(h(),I(u,{key:m},{default:n(()=>[t(b(m),1)]),_:2},1024))),128))]),_:1})]),_:1}),a("div",Q,[R,X,s(w,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"align","1":"align","2":"start, end, center, baseline","3":"-"},{"0":"direction","1":"direction","2":"vertical, horizontal","3":"horizontal"},{"0":"wrap","1":"items wrap or not","2":"boolean","3":"false"},{"0":"block","1":"block or not","2":"boolean","3":"false"},{"0":"spacing","1":"items spacing","2":"ISize, string, number","3":"md"}]})])],64)}}};export{ns as default,as as meta};
