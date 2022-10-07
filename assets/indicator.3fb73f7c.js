import{B as f}from"./app.cc110f97.js";import{c as s,a0 as t,P as y,a as e,u as x,a2 as q,a3 as a,a4 as n,p as w,a5 as k}from"./vendor.e5c18dbd.js";function I(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!y(c)}var B={setup:()=>{const c="top-middle-bottom".split("-"),r="start-center-end".split("-"),h=[];return c.forEach(l=>{r.forEach(g=>{h.push(l+"-"+g)})}),()=>s(t("dv-indicator"),null,{default:()=>[h.map(l=>s(t("dv-indicator-item"),{key:l,placement:l,tag:f,type:"secondary"},I(l)?l:{default:()=>[l]})),s("div",{class:"grid w-80 h-32 bg-base-300 place-items-center"},[e("content")])]})}};const N=n("div",{class:"markdown-body"},[n("h1",null,"Indicator"),n("h2",null,"Examples"),n("p",null,"Empty badge as indicator")],-1),E=n("div",{class:"grid w-32 h-32 bg-base-300 place-items-center"}," content ",-1),T=n("div",{class:"markdown-body"},[n("p",null,"Badge as indicator")],-1),z=e("New"),A=n("div",{class:"grid w-32 h-32 bg-base-300 place-items-center"}," content ",-1),C=n("div",{class:"markdown-body"},[n("p",null,"for button")],-1),O=e("99+"),R=e("INBOX"),S=n("div",{class:"markdown-body"},[n("p",null,"for avatar")],-1),V=e("Typing..."),P=n("div",{class:"markdown-body"},[n("p",null,"for an input")],-1),J=e("Required"),M=n("div",{class:"markdown-body"},[n("p",null,"A button as an indicator for a card")],-1),X=e("Apply"),Y=n("div",{class:"markdown-body"},[n("p",null,"multiple indicators")],-1),F={class:"markdown-body"},H=n("h2",null,"Indicator",-1),D=n("h3",null,"Attributes",-1),G=n("h2",null,"IndicatorItem",-1),K=n("h3",null,"Attributes",-1),W=[],Z={setup(c,{expose:r}){return r({frontmatter:{meta:[]}}),x({meta:[]}),(g,L)=>{const i=t("dv-badge"),d=t("dv-indicator-item"),o=t("dv-indicator"),p=t("Playground"),j=t("dv-button"),m=t("dv-avatar"),_=t("dv-input"),v=t("dv-card"),b=B,u=t("MarkdownTable");return k(),q(w,null,[N,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 bg-base-300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(o,null,{default:a(()=>[s(d,null,{default:a(()=>[s(i,{type:"secondary"})]),_:1}),E]),_:1})]),_:1}),T,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 bg-base-300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(o,null,{default:a(()=>[s(d,null,{default:a(()=>[s(i,{type:"primary"},{default:a(()=>[z]),_:1})]),_:1}),A]),_:1})]),_:1}),C,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>99+<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>INBOX<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(o,null,{default:a(()=>[s(d,null,{default:a(()=>[s(i,{type:"secondary"},{default:a(()=>[O]),_:1})]),_:1}),s(j,null,{default:a(()=>[R]),_:1})]),_:1})]),_:1}),S,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Typing...<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://placeimg.com/160/160/people&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(o,null,{default:a(()=>[s(d,null,{default:a(()=>[s(i,{type:"secondary"},{default:a(()=>[V]),_:1})]),_:1}),s(m,{src:"https://placeimg.com/160/160/people",size:80})]),_:1})]),_:1}),P,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span>&gt;</span>Required<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Your email address&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(o,null,{default:a(()=>[s(d,null,{default:a(()=>[s(i,null,{default:a(()=>[J]),_:1})]),_:1}),s(_,{placeholder:"Your email address"})]),_:1})]),_:1}),M,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-end&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Apply<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100&quot;</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Job Title&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(o,null,{default:a(()=>[s(d,{placement:"bottom-end"},{default:a(()=>[s(j,{type:"primary"},{default:a(()=>[X]),_:1})]),_:1}),s(v,{class:"bg-base-100",bordered:"",title:"Job Title",description:"Rerum reiciendis beatae tenetur excepturi"})]),_:1})]),_:1}),Y,s(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Badge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> vs = <span class="hljs-string">&#x27;top-middle-bottom&#x27;</span>.<span class="hljs-title function_">split</span>(<span class="hljs-string">&#x27;-&#x27;</span>);
    <span class="hljs-keyword">const</span> hs = <span class="hljs-string">&#x27;start-center-end&#x27;</span>.<span class="hljs-title function_">split</span>(<span class="hljs-string">&#x27;-&#x27;</span>);
    <span class="hljs-keyword">const</span> ls = [];
    vs.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
      hs.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">h</span>) =&gt;</span> {
        ls.<span class="hljs-title function_">push</span>(v + <span class="hljs-string">&#x27;-&#x27;</span> + h);
      });
    });
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
        {ls.map((p) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{p}</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">{p}</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">{Badge}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>
            {p}
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
        ))}
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-80 h-32 bg-base-300 place-items-center&quot;</span>&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span></span>
    );
  },
};
`},{default:a(()=>[s(b)]),_:1}),n("div",F,[H,D,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"tag","1":"render element","2":"string, object","3":"div"}]}),G,K,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"tag","1":"render element","2":"string, object","3":"div"},{"0":"placement","1":"indicator position","2":"top-start, top-center, top-end, middle-start, middle-center, middle-end, bottom-start, bottom-center, bottom-end","3":"top-end"}]})])],64)}}};export{Z as default,W as meta};
