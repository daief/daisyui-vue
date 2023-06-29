import{a as s,r as t,B as q,d as p,_ as x,u as w,o as k,c as I,w as a,b as n,F as T}from"./app-33be3538.js";const B={setup:()=>{const g="top-middle-bottom".split("-"),i="start-center-end".split("-"),r=[];return g.forEach(d=>{i.forEach(j=>{r.push(d+"-"+j)})}),()=>s(t("dv-indicator"),null,{default:()=>[r.map(d=>s(t("dv-indicator-item"),{key:d,placement:d,tag:q,variant:"secondary"},{default:()=>[d]})),s("div",{class:"grid w-80 h-32 dv-bgbase300 place-items-center"},[p("content")])]})}},E=n("div",{class:"markdown-body"},[n("h1",null,"Indicator"),n("h2",null,"Examples"),n("p",null,"Empty badge as indicator")],-1),N=n("div",{class:"grid w-32 h-32 dv-bgbase300 place-items-center"}," content ",-1),A=n("div",{class:"markdown-body"},[n("p",null,"Badge as indicator")],-1),V=p("New"),z=n("div",{class:"grid w-32 h-32 dv-bgbase300 place-items-center"}," content ",-1),C=n("div",{class:"markdown-body"},[n("p",null,"for button")],-1),R=p("99+"),F=p("INBOX"),J=n("div",{class:"markdown-body"},[n("p",null,"for avatar")],-1),M=p("Typing..."),O=n("div",{class:"markdown-body"},[n("p",null,"for tab")],-1),P=p("1"),S=n("a",null,"Tiny 1",-1),X=n("div",{class:"markdown-body"},[n("p",null,"for an input")],-1),Y=p("Required"),H=n("div",{class:"markdown-body"},[n("p",null,"A button as an indicator for a card")],-1),D=p("Apply"),G=n("div",{class:"markdown-body"},[n("p",null,"multiple indicators")],-1),K={class:"markdown-body"},L=n("h2",null,"Indicator",-1),Q=n("h3",null,"Attributes",-1),U=n("h2",null,"IndicatorItem",-1),W=n("h3",null,"Attributes",-1),as=[],Z={setup(g,{expose:i}){return i({frontmatter:{meta:[]}}),w({meta:[]}),(j,$)=>{const o=t("dv-badge"),e=t("dv-indicator-item"),c=t("dv-indicator"),l=t("Playground"),m=t("dv-button"),v=t("dv-avatar"),h=t("dv-tab-panel"),_=t("dv-tabs"),b=t("dv-input"),f=t("dv-card"),y=B,u=t("MarkdownTable");return k(),I(T,null,[E,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 dv-bgbase300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"})]),_:1}),N]),_:1})]),_:1}),A,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid w-32 h-32 dv-bgbase300 place-items-center&quot;</span>&gt;</span> content <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"primary"},{default:a(()=>[V]),_:1})]),_:1}),z]),_:1})]),_:1}),C,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>99+<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>INBOX<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"},{default:a(()=>[R]),_:1})]),_:1}),s(m,null,{default:a(()=>[F]),_:1})]),_:1})]),_:1}),J,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Typing...<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://placeimg.com/160/160/people&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;80&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"},{default:a(()=>[M]),_:1})]),_:1}),s(v,{src:"https://placeimg.com/160/160/people",size:80})]),_:1})]),_:1}),O,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-tabs</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">modelValue</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
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
`},{default:a(()=>[s(_,{variant:"lifted",modelValue:"1"},{default:a(()=>[s(h,{name:"1"},{title:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,{variant:"secondary"},{default:a(()=>[P]),_:1})]),_:1}),S]),_:1})]),_:1}),s(h,{name:"2",title:"Tiny2"}),s(h,{name:"3",title:"Tiny3"})]),_:1})]),_:1}),X,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span>&gt;</span>Required<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Your email address&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-indicator</span>&gt;</span>
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,null,{default:a(()=>[s(o,null,{default:a(()=>[Y]),_:1})]),_:1}),s(b,{placeholder:"Your email address"})]),_:1})]),_:1}),H,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-indicator</span>&gt;</span>
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
`},{default:a(()=>[s(c,null,{default:a(()=>[s(e,{placement:"bottom-end"},{default:a(()=>[s(m,{variant:"primary"},{default:a(()=>[D]),_:1})]),_:1}),s(f,{class:"dv-bgbase100",bordered:"",title:"Job Title",description:"Rerum reiciendis beatae tenetur excepturi"})]),_:1})]),_:1}),G,s(l,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Badge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

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
`},{default:a(()=>[s(y)]),_:1}),n("div",K,[L,Q,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"tag",1:"render element",2:"string, object",3:"div"}]}),U,W,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"tag",1:"render element",2:"string, object",3:"div"},{0:"placement",1:"indicator position",2:"top-start, top-center, top-end, middle-start, middle-center, middle-end, bottom-start, bottom-center, bottom-end",3:"top-end"}]})])],64)}}},ns=x(Z,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/indicator.md"]]);export{ns as default,as as meta};
