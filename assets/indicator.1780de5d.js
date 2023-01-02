import{B as q}from"./app.e0e29801.js";import{c as s,a3 as t,i as x,a as e,u as w,a5 as k,a6 as a,a7 as n,F as I,a8 as T}from"./vendor.faf17d9b.js";function B(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!x(o)}var N={setup:()=>{const o="top-middle-bottom".split("-"),h="start-center-end".split("-"),r=[];return o.forEach(l=>{h.forEach(j=>{r.push(l+"-"+j)})}),()=>s(t("dv-indicator"),null,{default:()=>[r.map(l=>s(t("dv-indicator-item"),{key:l,placement:l,tag:q,type:"secondary"},B(l)?l:{default:()=>[l]})),s("div",{class:"grid w-80 h-32 bg-base-300 place-items-center"},[e("content")])]})}};const E=n("div",{class:"markdown-body"},[n("h1",null,"Indicator"),n("h2",null,"Examples"),n("p",null,"Empty badge as indicator")],-1),z=n("div",{class:"grid w-32 h-32 bg-base-300 place-items-center"}," content ",-1),V=n("div",{class:"markdown-body"},[n("p",null,"Badge as indicator")],-1),A=e("New"),C=n("div",{class:"grid w-32 h-32 bg-base-300 place-items-center"}," content ",-1),O=n("div",{class:"markdown-body"},[n("p",null,"for button")],-1),R=e("99+"),S=e("INBOX"),F=n("div",{class:"markdown-body"},[n("p",null,"for avatar")],-1),J=e("Typing..."),M=n("div",{class:"markdown-body"},[n("p",null,"for tab")],-1),P=e("1"),X=n("a",null,"Tiny 1",-1),Y=n("div",{class:"markdown-body"},[n("p",null,"for an input")],-1),H=e("Required"),D=n("div",{class:"markdown-body"},[n("p",null,"A button as an indicator for a card")],-1),G=e("Apply"),K=n("div",{class:"markdown-body"},[n("p",null,"multiple indicators")],-1),L={class:"markdown-body"},Q=n("h2",null,"Indicator",-1),U=n("h3",null,"Attributes",-1),W=n("h2",null,"IndicatorItem",-1),Z=n("h3",null,"Attributes",-1),ns=[],ts={setup(o,{expose:h}){return h({frontmatter:{meta:[]}}),w({meta:[]}),(j,$)=>{const i=t("dv-badge"),c=t("dv-indicator-item"),d=t("dv-indicator"),p=t("Playground"),m=t("dv-button"),_=t("dv-avatar"),g=t("dv-tab-panel"),v=t("dv-tabs"),b=t("dv-input"),y=t("dv-card"),f=N,u=t("MarkdownTable");return T(),k(I,null,[E,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 bg-base-300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(d,null,{default:a(()=>[s(c,null,{default:a(()=>[s(i,{type:"secondary"})]),_:1}),z]),_:1})]),_:1}),V,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 bg-base-300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(d,null,{default:a(()=>[s(c,null,{default:a(()=>[s(i,{type:"primary"},{default:a(()=>[A]),_:1})]),_:1}),C]),_:1})]),_:1}),O,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>99+<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>INBOX<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(d,null,{default:a(()=>[s(c,null,{default:a(()=>[s(i,{type:"secondary"},{default:a(()=>[R]),_:1})]),_:1}),s(m,null,{default:a(()=>[S]),_:1})]),_:1})]),_:1}),F,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Typing...<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://placeimg.com/160/160/people&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(d,null,{default:a(()=>[s(c,null,{default:a(()=>[s(i,{type:"secondary"},{default:a(()=>[J]),_:1})]),_:1}),s(_,{src:"https://placeimg.com/160/160/people",size:80})]),_:1})]),_:1}),M,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-tabs</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">modelValue</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tab-panel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>Tiny 1<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tab-panel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tab-panel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny3&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-tabs</span>&gt;</span>
`},{default:a(()=>[s(v,{type:"lifted",modelValue:"1"},{default:a(()=>[s(g,{name:"1"},{title:a(()=>[s(d,null,{default:a(()=>[s(c,null,{default:a(()=>[s(i,{type:"secondary"},{default:a(()=>[P]),_:1})]),_:1}),X]),_:1})]),_:1}),s(g,{name:"2",title:"Tiny2"}),s(g,{name:"3",title:"Tiny3"})]),_:1})]),_:1}),Y,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span>&gt;</span>Required<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Your email address&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(d,null,{default:a(()=>[s(c,null,{default:a(()=>[s(i,null,{default:a(()=>[H]),_:1})]),_:1}),s(b,{placeholder:"Your email address"})]),_:1})]),_:1}),D,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
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
`},{default:a(()=>[s(d,null,{default:a(()=>[s(c,{placement:"bottom-end"},{default:a(()=>[s(m,{type:"primary"},{default:a(()=>[G]),_:1})]),_:1}),s(y,{class:"bg-base-100",bordered:"",title:"Job Title",description:"Rerum reiciendis beatae tenetur excepturi"})]),_:1})]),_:1}),K,s(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Badge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

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
`},{default:a(()=>[s(f)]),_:1}),n("div",L,[Q,U,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"tag","1":"render element","2":"string, object","3":"div"}]}),W,Z,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"tag","1":"render element","2":"string, object","3":"div"},{"0":"placement","1":"indicator position","2":"top-start, top-center, top-end, middle-start, middle-center, middle-end, bottom-start, bottom-center, bottom-end","3":"top-end"}]})])],64)}}};export{ts as default,ns as meta};
