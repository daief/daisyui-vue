import{r as u,c as s,y as l,a as t,j as b,F as m,u as y,z as q,A as n,B as a,C as w}from"./vendor.5c279da4.js";function k(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!b(c)}var T={setup:()=>{const c=["top-start","top","top-end","bottom-start","bottom","bottom-end","left-start","left","left-end","right-start","right","right-end"],o=u(c[0]),j=u("btn"),g=u(!0),h=r=>c.slice(r,r+3).map(p=>s(l("dv-button"),{key:p,size:"xs","data-pls":p,onClick:()=>o.value=p,type:p===o.value?"primary":"netural"},k(p)?p:{default:()=>[p]}));return()=>s(m,null,[s("div",{class:"flex justify-center space-x-3 mb-1"},[s(l("dv-button"),{onClick:()=>j.value="btn"},{default:()=>[t("button")]}),s(l("dv-button"),{onClick:()=>j.value="div"},{default:()=>[t("div")]}),s("input",{type:"checkbox",checked:g.value,onChange:r=>{g.value=r.target.checked}},null)]),s(l("dv-divider"),null,null),s("div",{class:"h-56 relative flex items-center justify-center"},[s(l("dv-popper"),{content:()=>s("div",null,[t("This is a "),s("strong",null,[t("tooltip")])]),open:!0,placement:o.value,hideArrow:!g.value},{default:()=>[j.value==="btn"?s(l("dv-button"),{size:"sm"},{default:()=>[t("button")]}):s("div",{class:"w-8 h-8 flex items-center justify-center bg-red-400"},[t("div")])]}),s("div",{class:"absolute top-0 w-full flex justify-center space-x-2"},[h(0)]),s("div",{class:"absolute right-0 h-full flex flex-col justify-center space-y-2"},[h(9)]),s("div",{class:"absolute bottom-0 w-full flex justify-center space-x-2"},[h(3)]),s("div",{class:"absolute left-0 h-full flex flex-col justify-center space-y-2"},[h(6)])])])}},C={setup:()=>()=>s("div",{class:"p-6 text-center"},[s(l("dv-popper"),{content:()=>s("div",null,[t("This is a "),s("strong",null,[t("tooltip")])]),placement:"right"},{default:()=>[s(l("dv-button"),null,{default:()=>[t("Hover Me")]})]})])},A={setup:()=>()=>s("div",{class:"p-6 text-center"},[s(l("dv-popper"),{placement:"right"},{default:()=>s(l("dv-button"),null,{default:()=>[t("Hover Me")]}),content:()=>s("div",null,[t("This is a "),s("strong",null,[t("tooltip")])])})])};const M=a("div",{class:"markdown-body"},[a("h1",null,"Popper"),a("h2",null,"Examples"),a("p",null,"hover")],-1),z={class:"p-6 text-center"},S=t("Hover Me"),H=a("div",{class:"markdown-body"},[a("p",null,"click")],-1),I={class:"p-6 text-center"},P=t("Click Me"),B=a("div",{class:"markdown-body"},[a("p",null,"focus")],-1),F={class:"p-6 text-center"},N=a("div",{class:"markdown-body"},[a("p",null,"right click")],-1),V={class:"p-6 text-center"},E=t("Right click Me"),O=a("div",{class:"markdown-body"},[a("p",null,"placement")],-1),R=a("div",{class:"markdown-body"},[a("p",null,"render props")],-1),D=a("div",{class:"markdown-body"},[a("p",null,"jsx slots")],-1),G=a("div",{class:"markdown-body"},[a("p",null,"template slots")],-1),J={class:"p-6 text-center"},K=t("Hover Me"),L=a("div",null,[t(" This is a "),a("strong",null,"tooltip")],-1),Q={class:"markdown-body"},U=a("h2",null,"Popper",-1),W=a("h3",null,"Attributes",-1),X=a("h3",null,"Slots",-1),Z=[],$={setup(c,{expose:o}){return o({frontmatter:{meta:[]}}),y({meta:[]}),(h,r)=>{const p=l("dv-button"),i=l("dv-popper"),e=l("Playground"),v=l("dv-input"),f=T,x=C,_=A,d=l("MarkdownTable");return w(),q(m,null,[M,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;hover&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",z,[s(i,{triggerAction:"hover",content:"This is a tooltip.",placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[S]),_:1})]),_:1})])]),_:1}),H,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;click&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Click Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",I,[s(i,{triggerAction:"click",content:"This is a tooltip.",placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[P]),_:1})]),_:1})])]),_:1}),B,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;focus&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;--popper-tail-offset: 10px&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Focus me&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",F,[s(i,{triggerAction:"focus",content:"This is a tooltip.",placement:"right",style:{"--popper-tail-offset":"10px"}},{default:n(()=>[s(v,{placeholder:"Focus me"})]),_:1})])]),_:1}),N,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;contextMenu&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Right click Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",V,[s(i,{triggerAction:"contextMenu",content:"This is a tooltip.",placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[E]),_:1})]),_:1})])]),_:1}),O,s(e,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
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

    <span class="hljs-keyword">const</span> showArrow = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

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
          <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
            <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span>
            <span class="hljs-attr">checked</span>=<span class="hljs-string">{showArrow.value}</span>
            <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> {
              showArrow.value = e.target.checked;
            }}
          /&gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-divider</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-56 relative flex items-center justify-center&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
            <span class="hljs-attr">content</span>=<span class="hljs-string">{()</span> =&gt;</span> (
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                This is a <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            )}
            open
            placement={pls.value}
            hideArrow={!showArrow.value}
          &gt;
            {renderType.value === &#x27;btn&#x27; ? (
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
            ) : (
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-8 h-8 flex items-center justify-center bg-red-400&quot;</span>&gt;</span>
                div
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            )}
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>

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
`},{default:n(()=>[s(f)]),_:1}),R,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
          <span class="hljs-attr">content</span>=<span class="hljs-string">{()</span> =&gt;</span> (
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
              This is a <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          )}
          placement=&quot;right&quot;
        &gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(x)]),_:1}),D,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
          {{
            default: () =&gt; <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>,
            content: () =&gt; (
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                This is a <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            ),
          }}
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(_)]),_:1}),G,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> This is a <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",J,[s(i,{placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[K]),_:1})]),content:n(()=>[L]),_:1})])]),_:1}),a("div",Q,[U,W,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"content","1":"popper content","2":"any, function","3":"-"},{"0":"open","1":"popper open status","2":"boolean","3":"-"},{"0":"placement","1":"popper placement","2":"Placement","3":"auto"},{"0":"disableTeleport","1":"disable popper node teleport to body","2":"boolean","3":"false"},{"0":"disabled","1":"disable popper","2":"boolean","3":"true"},{"0":"onChange","1":"emitted whe popper status change","2":"function","3":"-"},{"0":"triggerAction","1":"the action to tigger popper","2":"contextMenu, hover, click, focus","3":"hover"},{"0":"outsideCloseable","1":"click outside to close popper","2":"boolean","3":"true"},{"0":"escapeCloseable","1":"press escape key to close popper","2":"boolean","3":"true"}]}),X,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"popper reference"},{"0":"content","1":"popper content"}]})])],64)}}};export{$ as default,Z as meta};
