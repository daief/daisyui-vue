import{w as i,c as s,a2 as n,a as l,a7 as j,a4 as g,a9 as f,q as m,a6 as a,a5 as t,aa as y,ab as w,ac as k,u as q}from"./vendor.5032f317.js";import{_ as z}from"./app.755c1017.js";var I={setup:()=>{const p=["xs","sm","md","lg"].map(c=>({label:c,value:c})),e=i("md");return()=>s("div",{class:"space-y-4"},[s(n("dv-radio-group"),{options:p,modelValue:e.value,"onUpdate:modelValue":c=>e.value=c},null),s("br",null,null),s(n("dv-space"),{direction:"vertical",spacing:e.value},{default:()=>[l("I'm a text"),s(n("dv-button"),null,{default:()=>[l("button")]}),s(n("dv-button"),null,{default:()=>[l("button2")]})]})])}};const C={},S=p=>(w("data-v-5098191f"),p=p(),k(),p),V={class:"space-align-block"},$=l("button"),B=S(()=>a("div",{class:"mock-block"},"block",-1));function N(p,e){const c=n("dv-button"),d=n("dv-space");return j(),g(m,null,f(["center","start","end","baseline"],u=>a("div",V,[s(d,{align:u},{default:t(()=>[l(y(u)+" ",1),s(c,null,{default:t(()=>[$]),_:1}),B]),_:2},1032,["align"])])),64)}var T=z(C,[["render",N],["__scopeId","data-v-5098191f"]]),A={setup:()=>{const p=i("8px");return()=>s("div",{class:"space-y-4"},[s("div",null,[s(n("dv-input"),{value:p.value,onInput:e=>p.value=e.target.value},null)]),s(n("dv-space"),{direction:"vertical",spacing:p.value},{default:()=>[l("I'm a text"),s(n("dv-button"),null,{default:()=>[l("button")]}),s(n("dv-button"),null,{default:()=>[l("button2")]})]})])}};const E=a("div",{class:"markdown-body"},[a("h1",null,"Space"),a("h2",null,"Examples"),a("p",null,"Space")],-1),L=l(" I'm a text "),M=l("button"),P=a("div",{class:"markdown-body"},[a("p",null,"Vertical")],-1),D=l(" I'm a text "),F=l("button"),H=l("button2"),U=a("div",{class:"markdown-body"},[a("p",null,"Spacing size")],-1),G=a("div",{class:"markdown-body"},[a("p",null,"Align")],-1),J=a("div",{class:"markdown-body"},[a("p",null,"Custom spacing")],-1),K={class:"markdown-body"},O=a("h2",null,"Link",-1),Q=a("h3",null,"Attributes",-1),Y=[],Z={setup(p,{expose:e}){return e({frontmatter:{meta:[]}}),q({meta:[]}),(u,R)=>{const h=n("dv-button"),r=n("dv-space"),o=n("Playground"),v=I,_=T,b=A,x=n("MarkdownTable");return j(),g(m,null,[E,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span>&gt;</span>
  I&#x27;m a text
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:t(()=>[s(r,null,{default:t(()=>[L,s(h,null,{default:t(()=>[M]),_:1})]),_:1})]),_:1}),P,s(o,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
  I&#x27;m a text
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>button2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-space</span>&gt;</span>
`},{default:t(()=>[s(r,{direction:"vertical"},{default:t(()=>[D,s(h,null,{default:t(()=>[F]),_:1}),s(h,null,{default:t(()=>[H]),_:1})]),_:1})]),_:1}),U,s(o,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
`},{default:t(()=>[s(v)]),_:1}),G,s(o,{lang:"html",code:`<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
`},{default:t(()=>[s(_)]),_:1}),J,s(o,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

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
`},{default:t(()=>[s(b)]),_:1}),a("div",K,[O,Q,s(x,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"align","1":"align","2":"start, end, center, baseline","3":"-"},{"0":"direction","1":"direction","2":"vertical, horizontal","3":"horizontal"},{"0":"wrap","1":"items wrap or not","2":"boolean","3":"false"},{"0":"block","1":"block or not","2":"boolean","3":"false"},{"0":"spacing","1":"items spacing","2":"ISize, string, number","3":"md"}]})])],64)}}};export{Z as default,Y as meta};
