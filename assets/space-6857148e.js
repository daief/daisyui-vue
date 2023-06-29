import{g as v,a as s,r as l,d as t,_,o as d,c as i,e as b,b as a,w as n,t as x,F as j,p as q,i as z,u as I,j as C}from"./app-33be3538.js";const S={setup:()=>{const p=v("8px");return()=>s("div",{class:"space-y-4"},[s("div",null,[s(l("dv-input"),{value:p.value,onInput:e=>p.value=e.target.value},null)]),s(l("dv-space"),{direction:"vertical",spacing:p.value},{default:()=>[t("I'm a text"),s(l("dv-button"),null,{default:()=>[t("button")]}),s(l("dv-button"),null,{default:()=>[t("button2")]})]})])}};const A={},V=p=>(q("data-v-461fd95e"),p=p(),z(),p),B={class:"space-align-block"},$=t("button"),N=V(()=>a("div",{class:"mock-block"},"block",-1));function T(p,e){const c=l("dv-button"),g=l("dv-space");return d(),i(j,null,b(["center","start","end","baseline"],h=>a("div",B,[s(g,{align:h},{default:n(()=>[t(x(h)+" ",1),s(c,null,{default:n(()=>[$]),_:1}),N]),_:2},1032,["align"])])),64)}const E=_(A,[["render",T],["__scopeId","data-v-461fd95e"],["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/.demo/ChtmlCavvfffdxwazdwwcfuzxxexvuuyewyvaxffbbxywy.vue"]]),F={setup:()=>{const p=["xs","sm","md","lg"].map(c=>({label:c,value:c})),e=v("md");return()=>s("div",{class:"space-y-4"},[s(l("dv-radio-group"),{options:p,modelValue:e.value,"onUpdate:modelValue":c=>e.value=c},null),s("br",null,null),s(l("dv-space"),{direction:"vertical",spacing:e.value},{default:()=>[t("I'm a text"),s(l("dv-button"),null,{default:()=>[t("button")]}),s(l("dv-button"),null,{default:()=>[t("button2")]})]})])}},M=a("div",{class:"markdown-body"},[a("h1",null,"Space"),a("h2",null,"Examples"),a("p",null,"Space")],-1),P=t(" I'm a text "),D=t("button"),H=a("div",{class:"markdown-body"},[a("p",null,"Vertical")],-1),L=t(" I'm a text "),U=t("button"),W=t("button2"),G=a("div",{class:"markdown-body"},[a("p",null,"Spacing size")],-1),J=a("div",{class:"markdown-body"},[a("p",null,"Align")],-1),K=a("div",{class:"markdown-body"},[a("p",null,"Custom spacing")],-1),O=a("div",{class:"markdown-body"},[a("p",null,"Wrap")],-1),Q={class:"markdown-body"},R=a("h2",null,"Space",-1),X=a("h3",null,"Attributes",-1),as=[],Y={setup(p,{expose:e}){return e({frontmatter:{meta:[]}}),I({meta:[]}),(h,Z)=>{const u=l("dv-button"),r=l("dv-space"),o=l("Playground"),f=F,y=E,w=S,k=l("MarkdownTable");return d(),i(j,null,[M,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span>&gt;</span>
  I&#x27;m a text
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:n(()=>[s(r,null,{default:n(()=>[P,s(u,null,{default:n(()=>[D]),_:1})]),_:1})]),_:1}),H,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
  I&#x27;m a text
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:n(()=>[s(r,{direction:"vertical"},{default:n(()=>[L,s(u,null,{default:n(()=>[U]),_:1}),s(u,null,{default:n(()=>[W]),_:1})]),_:1})]),_:1}),G,s(o,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
`},{default:n(()=>[s(f)]),_:1}),J,s(o,{lang:"html",code:`<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
`},{default:n(()=>[s(y)]),_:1}),K,s(o,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
`},{default:n(()=>[s(w)]),_:1}),O,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-64 max-w-full&quot;</span> <span class="hljs-attr">block</span> <span class="hljs-attr">wrap</span> <span class="hljs-attr">:spacing</span>=<span class="hljs-string">&quot;[12, 4]&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(i) in Array.from(new Array(20).keys())&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>&gt;</span>
    {{i}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:n(()=>[s(r,{class:"w-64 max-w-full",block:"",wrap:"",spacing:[12,4]},{default:n(()=>[(d(!0),i(j,null,b(Array.from(new Array(20).keys()),m=>(d(),C(u,{key:m},{default:n(()=>[t(x(m),1)]),_:2},1024))),128))]),_:1})]),_:1}),a("div",Q,[R,X,s(k,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"align",1:"align",2:"start, end, center, baseline",3:"-"},{0:"direction",1:"direction",2:"vertical, horizontal",3:"horizontal"},{0:"wrap",1:"items wrap or not",2:"boolean",3:"false"},{0:"block",1:"block or not",2:"boolean",3:"false"},{0:"spacing",1:"items spacing",2:"ISize, string, number",3:"md"}]})])],64)}}},ns=_(Y,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/space.md"]]);export{ns as default,as as meta};
