import{f as m,c as s,z as l,a as t,j as w,F as v,u as y,A as q,B as a,C as n,D as k}from"./vendor.88f27aa7.js";function C(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!w(e)}var I={setup:()=>{const e=["top-start","top","top-end","bottom-start","bottom","bottom-end","left-start","left","left-end","right-start","right","right-end"],c=m(e[0]),h=m("btn"),o=r=>e.slice(r,r+3).map(p=>s(l("dv-button"),{key:p,size:"xs","data-pls":p,onClick:()=>c.value=p,type:p===c.value?"primary":"netural"},C(p)?p:{default:()=>[p]}));return()=>s(v,null,[s("div",{class:"flex justify-center space-x-3 mb-1"},[s(l("dv-button"),{onClick:()=>h.value="btn"},{default:()=>[t("button")]}),s(l("dv-button"),{onClick:()=>h.value="div"},{default:()=>[t("div")]})]),s(l("dv-divider"),null,null),s("div",{class:"h-80 relative flex items-center justify-center"},[s(l("dv-dropdown"),{content:()=>s(l("dv-menu"),{class:"shadow-lg rounded-lg bg-white p-1 w-40"},{default:()=>[s(l("dv-menu-item"),null,{default:()=>[t("Item 1")]}),s(l("dv-menu-item"),null,{default:()=>[t("Item 2")]})]}),open:!0,placement:c.value},{default:()=>[h.value==="btn"?s(l("dv-button"),{size:"sm"},{default:()=>[t("button")]}):s("div",{class:"w-8 h-8 flex items-center justify-center bg-red-400"},[t("div")])]}),s("div",{class:"absolute top-0 w-full flex justify-center space-x-2"},[o(0)]),s("div",{class:"absolute right-0 h-full flex flex-col justify-center space-y-2"},[o(9)]),s("div",{class:"absolute bottom-0 w-full flex justify-center space-x-2"},[o(3)]),s("div",{class:"absolute left-0 h-full flex flex-col justify-center space-y-2"},[o(6)])])])}};const S=n("div",{class:"markdown-body"},[n("h1",null,"Dropdown"),n("h2",null,"Examples"),n("p",null,"Dropdown menu")],-1),T={class:"text-center"},z=t("Click"),A=t("Item 1"),H=t("Item 2"),D=n("div",{class:"markdown-body"},[n("p",null,"Hover")],-1),B={class:"text-center"},N=t("Hover"),V=t("Item 1"),P=t("Item 2"),E=n("div",{class:"markdown-body"},[n("p",null,"placement")],-1),F=n("div",{class:"markdown-body"},[n("p",null,"Dropdown card")],-1),O={class:"text-center"},G=t("Hover"),J=t("Card Title"),K=n("p",null," you can use any element as a dropdown. ",-1),L=n("div",{class:"markdown-body"},[n("h2",null,"Dropdown"),n("h3",null,"Attributes"),n("p",null,[t("Attributes are same as "),n("code",null,"Popper"),t(".")])],-1),Q=[],R={setup(e,{expose:c}){return c({frontmatter:{meta:[]}}),y({meta:[]}),(r,p)=>{const g=l("dv-button"),d=l("dv-menu-item"),i=l("dv-menu"),u=l("dv-dropdown"),j=l("Playground"),f=I,_=l("dv-card-title"),x=l("dv-card-body"),b=l("dv-card");return k(),q(v,null,[S,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-dropdown</span> <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg bg-white p-2 w-56&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[n("div",T,[s(u,{triggerAction:"click"},{content:a(()=>[s(i,{class:"shadow-lg rounded-lg bg-white p-2 w-56"},{default:a(()=>[s(d,null,{default:a(()=>[A]),_:1}),s(d,null,{default:a(()=>[H]),_:1})]),_:1})]),default:a(()=>[s(g,null,{default:a(()=>[z]),_:1})]),_:1})])]),_:1}),D,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-dropdown</span> <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;hover&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg bg-white p-2 w-56&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[n("div",B,[s(u,{triggerAction:"hover"},{content:a(()=>[s(i,{class:"shadow-lg rounded-lg bg-white p-2 w-56"},{default:a(()=>[s(d,null,{default:a(()=>[V]),_:1}),s(d,null,{default:a(()=>[P]),_:1})]),_:1})]),default:a(()=>[s(g,null,{default:a(()=>[N]),_:1})]),_:1})])]),_:1}),E,s(j,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
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
          type={plsKey === pls.value ? &#x27;primary&#x27; : &#x27;netural&#x27;}
        &gt;
          {plsKey}
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span></span>
      ));

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
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
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg bg-white p-1 w-40&quot;</span>&gt;</span>
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
      <span class="hljs-tag">&lt;/&gt;</span></span>
    );
  },
};
`},{default:a(()=>[s(f)]),_:1}),F,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-dropdown</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-64 bg-white&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-body</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-title</span>&gt;</span>Card Title<span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-title</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> you can use any element as a dropdown. <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-body</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[n("div",O,[s(u,null,{content:a(()=>[s(b,{bordered:"",class:"w-64 bg-white"},{default:a(()=>[s(x,null,{default:a(()=>[s(_,null,{default:a(()=>[J]),_:1}),K]),_:1})]),_:1})]),default:a(()=>[s(g,null,{default:a(()=>[G]),_:1})]),_:1})])]),_:1}),L],64)}}};export{R as default,Q as meta};
