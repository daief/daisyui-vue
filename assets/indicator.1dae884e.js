import{c as s,b as t,B as q,a as p,u as x,d as w,w as a,e as n,F as k,o as I}from"./app.fdd71efb.js";var T={setup:()=>{const g="top-middle-bottom".split("-"),i="start-center-end".split("-"),h=[];return g.forEach(d=>{i.forEach(j=>{h.push(d+"-"+j)})}),()=>s(t("dv-indicator"),null,{default:()=>[h.map(d=>s(t("dv-indicator-item"),{key:d,placement:d,tag:q,variant:"secondary"},{default:()=>[d]})),s("div",{class:"grid w-80 h-32 dv-bgbase300 place-items-center"},[p("content")])]})}};const B=n("div",{class:"markdown-body"},[n("h1",null,"Indicator"),n("h2",null,"Examples"),n("p",null,"Empty badge as indicator")],-1),E=n("div",{class:"grid w-32 h-32 dv-bgbase300 place-items-center"}," content ",-1),N=n("div",{class:"markdown-body"},[n("p",null,"Badge as indicator")],-1),A=p("New"),V=n("div",{class:"grid w-32 h-32 dv-bgbase300 place-items-center"}," content ",-1),z=n("div",{class:"markdown-body"},[n("p",null,"for button")],-1),C=p("99+"),R=p("INBOX"),F=n("div",{class:"markdown-body"},[n("p",null,"for avatar")],-1),J=p("Typing..."),M=n("div",{class:"markdown-body"},[n("p",null,"for tab")],-1),O=p("1"),P=n("a",null,"Tiny 1",-1),S=n("div",{class:"markdown-body"},[n("p",null,"for an input")],-1),X=p("Required"),Y=n("div",{class:"markdown-body"},[n("p",null,"A button as an indicator for a card")],-1),H=p("Apply"),D=n("div",{class:"markdown-body"},[n("p",null,"multiple indicators")],-1),G={class:"markdown-body"},K=n("h2",null,"Indicator",-1),L=n("h3",null,"Attributes",-1),Q=n("h2",null,"IndicatorItem",-1),U=n("h3",null,"Attributes",-1),$=[],ss={setup(g,{expose:i}){return i({frontmatter:{meta:[]}}),x({meta:[]}),(j,W)=>{const o=t("dv-badge"),e=t("dv-indicator-item"),c=t("dv-indicator"),l=t("Playground"),m=t("dv-button"),v=t("dv-avatar"),r=t("dv-tab-panel"),_=t("dv-tabs"),b=t("dv-input"),f=t("dv-card"),y=T,u=t("MarkdownTable");return I(),w(k,null,[B,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 dv-bgbase300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"})]),_:1}),E]),_:1})]),_:1}),N,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 dv-bgbase300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"primary"},{default:a(()=>[A]),_:1})]),_:1}),V]),_:1})]),_:1}),z,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>99+<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>INBOX<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"},{default:a(()=>[C]),_:1})]),_:1}),s(m,null,{default:a(()=>[R]),_:1})]),_:1})]),_:1}),F,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Typing...<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://placeimg.com/160/160/people&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"},{default:a(()=>[J]),_:1})]),_:1}),s(v,{src:"https://placeimg.com/160/160/people",size:80})]),_:1})]),_:1}),M,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-tabs</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">modelValue</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tab-panel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>Tiny 1<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tab-panel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tab-panel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny3&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-tabs</span>&gt;</span>
`},{default:a(()=>[s(_,{variant:"lifted",modelValue:"1"},{default:a(()=>[s(r,{name:"1"},{title:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"},{default:a(()=>[O]),_:1})]),_:1}),P]),_:1})]),_:1}),s(r,{name:"2",title:"Tiny2"}),s(r,{name:"3",title:"Tiny3"})]),_:1})]),_:1}),S,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span>&gt;</span>Required<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Your email address&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,null,{default:a(()=>[X]),_:1})]),_:1}),s(b,{placeholder:"Your email address"})]),_:1})]),_:1}),Y,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-end&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Apply<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100&quot;</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Job Title&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,{placement:"bottom-end"},{default:a(()=>[s(m,{variant:"primary"},{default:a(()=>[H]),_:1})]),_:1}),s(f,{class:"dv-bgbase100",bordered:"",title:"Job Title",description:"Rerum reiciendis beatae tenetur excepturi"})]),_:1})]),_:1}),D,s(l,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Badge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

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
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>
            <span class="hljs-attr">key</span>=<span class="hljs-string">{p}</span>
            <span class="hljs-attr">placement</span>=<span class="hljs-string">{p}</span>
            <span class="hljs-attr">tag</span>=<span class="hljs-string">{Badge}</span>
            <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>
          &gt;</span>
            {p}
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
        ))}
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-80 h-32 dv-bgbase300 place-items-center&quot;</span>&gt;</span>
          content
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span></span>
    );
  },
};
`},{default:a(()=>[s(y)]),_:1}),n("div",G,[K,L,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"tag",1:"render element",2:"string, object",3:"div"}]}),Q,U,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"tag",1:"render element",2:"string, object",3:"div"},{0:"placement",1:"indicator position",2:"top-start, top-center, top-end, middle-start, middle-center, middle-end, bottom-start, bottom-center, bottom-end",3:"top-end"}]})])],64)}}};export{ss as default,$ as meta};
