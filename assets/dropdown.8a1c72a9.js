import{r as m,c as s,b as l,a as t,u as x,d as y,w as a,F as w,e as n,o as q}from"./app.10e33cde.js";var k={setup:()=>{const j=["top-start","top","top-end","bottom-start","bottom","bottom-end","left-start","left","left-end","right-start","right","right-end"],e=m(j[0]),o=m("btn"),c=r=>j.slice(r,r+3).map(p=>s(l("dv-button"),{key:p,size:"xs","data-pls":p,onClick:()=>e.value=p,type:p===e.value?"primary":"neutral"},{default:()=>[p]}));return()=>s("div",{class:"w-full"},[s("div",{class:"flex justify-center space-x-3 mb-1"},[s(l("dv-button"),{onClick:()=>o.value="btn"},{default:()=>[t("button")]}),s(l("dv-button"),{onClick:()=>o.value="div"},{default:()=>[t("div")]})]),s(l("dv-divider"),null,null),s("div",{class:"h-80 relative flex items-center justify-center"},[s(l("dv-dropdown"),{content:()=>s(l("dv-menu"),{class:"shadow-lg rounded-lg dv-bgbase100 p-1 w-40"},{default:()=>[s(l("dv-menu-item"),null,{default:()=>[t("Item 1")]}),s(l("dv-menu-item"),null,{default:()=>[t("Item 2")]})]}),open:!0,placement:e.value},{default:()=>[o.value==="btn"?s(l("dv-button"),{size:"sm"},{default:()=>[t("button")]}):s("div",{class:"w-8 h-8 flex items-center justify-center bg-red-400"},[t("div")])]}),s("div",{class:"absolute top-0 w-full flex justify-center space-x-2"},[c(0)]),s("div",{class:"absolute right-0 h-full flex flex-col justify-center space-y-2"},[c(9)]),s("div",{class:"absolute bottom-0 w-full flex justify-center space-x-2"},[c(3)]),s("div",{class:"absolute left-0 h-full flex flex-col justify-center space-y-2"},[c(6)])])])}};const C=n("div",{class:"markdown-body"},[n("h1",null,"Dropdown"),n("h2",null,"Examples"),n("p",null,"Dropdown menu")],-1),I={class:"text-center"},z=t("Click"),T=t("Item 1"),A=t("Item 2"),H=n("div",{class:"markdown-body"},[n("p",null,"Hover")],-1),S={class:"text-center"},D=t("Hover"),B=t("Item 1"),N=t("Item 2"),P=n("div",{class:"markdown-body"},[n("p",null,"placement")],-1),V=n("div",{class:"markdown-body"},[n("p",null,"Dropdown card")],-1),E={class:"text-center"},F=t("Hover"),K=t("Card Title"),G=n("p",null," you can use any element as a dropdown. ",-1),J=n("div",{class:"markdown-body"},[n("h2",null,"Dropdown"),n("h3",null,"Attributes"),n("p",null,[t("Attributes are same as "),n("code",null,"Popper"),t(".")])],-1),M=[],O={setup(j,{expose:e}){return e({frontmatter:{meta:[]}}),x({meta:[]}),(r,p)=>{const g=l("dv-button"),d=l("dv-menu-item"),i=l("dv-menu"),u=l("dv-dropdown"),h=l("Playground"),v=k,f=l("dv-card-title"),_=l("dv-card-body"),b=l("dv-card");return q(),y(w,null,[C,s(h,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-dropdown</span> <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg dv-bgbase100 p-2 w-56&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[n("div",I,[s(u,{triggerAction:"click"},{content:a(()=>[s(i,{class:"shadow-lg rounded-lg dv-bgbase100 p-2 w-56"},{default:a(()=>[s(d,null,{default:a(()=>[T]),_:1}),s(d,null,{default:a(()=>[A]),_:1})]),_:1})]),default:a(()=>[s(g,null,{default:a(()=>[z]),_:1})]),_:1})])]),_:1}),H,s(h,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-dropdown</span> <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;hover&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg dv-bgbase100 p-2 w-56&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[n("div",S,[s(u,{triggerAction:"hover"},{content:a(()=>[s(i,{class:"shadow-lg rounded-lg dv-bgbase100 p-2 w-56"},{default:a(()=>[s(d,null,{default:a(()=>[B]),_:1}),s(d,null,{default:a(()=>[N]),_:1})]),_:1})]),default:a(()=>[s(g,null,{default:a(()=>[D]),_:1})]),_:1})])]),_:1}),P,s(h,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> placements = [
      <span class="hljs-string">&#x27;top-start&#x27;</span>,
      <span class="hljs-string">&#x27;top&#x27;</span>,
      <span class="hljs-string">&#x27;top-end&#x27;</span>,

      <span class="hljs-string">&#x27;bottom-start&#x27;</span>,
      <span class="hljs-string">&#x27;bottom&#x27;</span>,
      <span class="hljs-string">&#x27;bottom-end&#x27;</span>,

      <span class="hljs-string">&#x27;left-start&#x27;</span>,
      <span class="hljs-string">&#x27;left&#x27;</span>,
      <span class="hljs-string">&#x27;left-end&#x27;</span>,

      <span class="hljs-string">&#x27;right-start&#x27;</span>,
      <span class="hljs-string">&#x27;right&#x27;</span>,
      <span class="hljs-string">&#x27;right-end&#x27;</span>,
    ];

    <span class="hljs-keyword">const</span> pls = <span class="hljs-title function_">ref</span>(placements[<span class="hljs-number">0</span>]);
    <span class="hljs-keyword">const</span> renderType = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;btn&#x27;</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">renderSlice</span> = (<span class="hljs-params">n: <span class="hljs-number">0</span> | <span class="hljs-number">3</span> | <span class="hljs-number">6</span> | <span class="hljs-number">9</span></span>) =&gt;
      placements.<span class="hljs-title function_">slice</span>(n, n + <span class="hljs-number">3</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">plsKey</span>) =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>
          <span class="hljs-attr">key</span>=<span class="hljs-string">{plsKey}</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>
          <span class="hljs-attr">data-pls</span>=<span class="hljs-string">{plsKey}</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> (pls.value = plsKey)}
          type={plsKey === pls.value ? &#x27;primary&#x27; : &#x27;neutral&#x27;}
        &gt;
          {plsKey}
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span></span>
      ));

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex justify-center space-x-3 mb-1&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> (renderType.value = &#x27;btn&#x27;)}&gt;
            button
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> (renderType.value = &#x27;div&#x27;)}&gt;div<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-divider</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-80 relative flex items-center justify-center&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-dropdown</span>
            <span class="hljs-attr">content</span>=<span class="hljs-string">{()</span> =&gt;</span> (
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg dv-bgbase100 p-1 w-40&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
            )}
            open
            placement={pls.value}
          &gt;
            {renderType.value === &#x27;btn&#x27; ? (
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
            ) : (
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-8 h-8 flex items-center justify-center bg-red-400&quot;</span>&gt;</span>
                div
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            )}
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-dropdown</span>&gt;</span>

          {/* top */}
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;absolute top-0 w-full flex justify-center space-x-2&quot;</span>&gt;</span>
            {renderSlice(0)}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          {/* right */}
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;absolute right-0 h-full flex flex-col justify-center space-y-2&quot;</span>&gt;</span>
            {renderSlice(9)}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          {/* bottom */}
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;absolute bottom-0 w-full flex justify-center space-x-2&quot;</span>&gt;</span>
            {renderSlice(3)}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          {/* left */}
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;absolute left-0 h-full flex flex-col justify-center space-y-2&quot;</span>&gt;</span>
            {renderSlice(6)}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:a(()=>[s(v)]),_:1}),V,s(h,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-dropdown</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-64 dv-bgbase100&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-body</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-title</span>&gt;</span>Card Title<span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-title</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> you can use any element as a dropdown. <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-body</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[n("div",E,[s(u,null,{content:a(()=>[s(b,{bordered:"",class:"w-64 dv-bgbase100"},{default:a(()=>[s(_,null,{default:a(()=>[s(f,null,{default:a(()=>[K]),_:1}),G]),_:1})]),_:1})]),default:a(()=>[s(g,null,{default:a(()=>[F]),_:1})]),_:1})])]),_:1}),J],64)}}};export{O as default,M as meta};
