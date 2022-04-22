import{r as d,w as j,c as s,y as a,a as e,u as g,z as m,A as i,F as u,B as c,C as v}from"./vendor.cc8dc234.js";var w={setup:()=>{const n=d({show:!1});let t=0;j([()=>t],(l,o)=>{console.log(l,o)});const p=()=>n.show=!1;return()=>s("div",{class:"text-center"},[s(a("dv-toggle"),{checked:n.show,onChange:l=>n.show=l.target.checked},null),s("hr",null,null),s(a("dv-modal-base"),{open:n.show,onClose:p,destroyOnClose:!0},{default:()=>[s(a("dv-modal-title"),{onClose:p},{default:()=>[e("1")]}),s(a("dv-modal-body"),null,{default:()=>[e("2332")]}),s(a("dv-modal-action"),null,{default:()=>[s(a("dv-button"),null,{default:()=>[e("Yay!")]})]})]})])}};const f=c("div",{class:"markdown-body"},[c("h1",null,"Demo for development")],-1),y=c("div",{class:"markdown-body"},null,-1),k=[],b={setup(n,{expose:t}){return t({frontmatter:{meta:[]}}),g({meta:[]}),(o,_)=>{const h=w,r=a("Playground");return v(),m(u,null,[f,s(r,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { reactive, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> state = <span class="hljs-title function_">reactive</span>({
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
    });

    <span class="hljs-keyword">let</span> c = <span class="hljs-number">0</span>;

    <span class="hljs-title function_">watch</span>([<span class="hljs-function">() =&gt;</span> c], <span class="hljs-function">(<span class="hljs-params">newVal, oldVal</span>) =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(newVal, oldVal);
    });

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">close</span> = (<span class="hljs-params"></span>) =&gt; (state.<span class="hljs-property">show</span> = <span class="hljs-literal">false</span>);

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-toggle</span>
          <span class="hljs-attr">checked</span>=<span class="hljs-string">{state.show}</span>
          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> (state.show = e.target.checked)}
        /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-base</span>
          <span class="hljs-attr">open</span>=<span class="hljs-string">{state.show}</span>
          // <span class="hljs-attr">maskCloseable</span>=<span class="hljs-string">{false}</span>
          <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>
          <span class="hljs-attr">destroyOnClose</span>
          // <span class="hljs-attr">custom</span>=<span class="hljs-string">{()</span> =&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> c++}&gt;111 - {c}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>}
        &gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-title</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-title</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-body</span>&gt;</span>2332<span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-body</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-action</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Yay!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-action</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-base</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:i(()=>[s(h)]),_:1}),y],64)}}};export{b as default,k as meta};
