import{a as s,r as l,d as t,g as u,_,u as b,o as y,c as w,w as n,b as a,F as q}from"./app-33be3538.js";const k={setup:()=>()=>s("div",{class:"p-6 text-center"},[s(l("dv-popper"),{placement:"right"},{default:()=>s(l("dv-button"),null,{default:()=>[t("Hover Me")]}),content:()=>s("div",null,[t("This is a "),s("strong",null,[t("tooltip")])])})])},T={setup:()=>()=>s("div",{class:"p-6 text-center"},[s(l("dv-popper"),{content:()=>s("div",null,[t("This is a "),s("strong",null,[t("tooltip")])]),placement:"right"},{default:()=>[s(l("dv-button"),null,{default:()=>[t("Hover Me")]})]})])},C={setup:()=>{const g=["top-start","top","top-end","bottom-start","bottom","bottom-end","left-start","left","left-end","right-start","right","right-end"],c=u(g[0]),i=u("btn"),j=u(!0),o=h=>g.slice(h,h+3).map(p=>s(l("dv-button"),{key:p,size:"xs","data-pls":p,onClick:()=>c.value=p,type:p===c.value?"primary":"neutral"},{default:()=>[p]}));return()=>s("div",{class:"w-full"},[s("div",{class:"flex justify-center space-x-3 mb-1"},[s(l("dv-button"),{onClick:()=>i.value="btn"},{default:()=>[t("button")]}),s(l("dv-button"),{onClick:()=>i.value="div"},{default:()=>[t("div")]}),s("input",{type:"checkbox",checked:j.value,onChange:h=>{j.value=h.target.checked}},null)]),s(l("dv-divider"),null,null),s("div",{class:"h-56 relative flex items-center justify-center"},[s(l("dv-popper"),{content:()=>s("div",null,[t("This is a "),s("strong",null,[t("tooltip")])]),open:!0,placement:c.value,hideArrow:!j.value},{default:()=>[i.value==="btn"?s(l("dv-button"),{size:"sm"},{default:()=>[t("button")]}):s("div",{class:"w-8 h-8 flex items-center justify-center bg-red-400"},[t("div")])]}),s("div",{class:"absolute top-0 w-full flex justify-center space-x-2"},[o(0)]),s("div",{class:"absolute right-0 h-full flex flex-col justify-center space-y-2"},[o(9)]),s("div",{class:"absolute bottom-0 w-full flex justify-center space-x-2"},[o(3)]),s("div",{class:"absolute left-0 h-full flex flex-col justify-center space-y-2"},[o(6)])])])}},A=a("div",{class:"markdown-body"},[a("h1",null,"Popper"),a("h2",null,"Examples"),a("p",null,"hover")],-1),M={class:"p-6 text-center"},z=t("Hover Me"),H=a("div",{class:"markdown-body"},[a("p",null,"click")],-1),S={class:"p-6 text-center"},I=t("Click Me"),P=a("div",{class:"markdown-body"},[a("p",null,"focus")],-1),F={class:"p-6 text-center"},B=a("div",{class:"markdown-body"},[a("p",null,"right click")],-1),N={class:"p-6 text-center"},V=t("Right click Me"),E=a("div",{class:"markdown-body"},[a("p",null,"placement")],-1),K=a("div",{class:"markdown-body"},[a("p",null,"render props")],-1),R=a("div",{class:"markdown-body"},[a("p",null,"jsx slots")],-1),D=a("div",{class:"markdown-body"},[a("p",null,"template slots")],-1),G={class:"p-6 text-center"},J=t("Hover Me"),L=a("div",null,[t(" This is a "),a("strong",null,"tooltip")],-1),O={class:"markdown-body"},Q=a("h2",null,"Popper",-1),U=a("h3",null,"Attributes",-1),W=a("h3",null,"Slots",-1),Z=[],X={setup(g,{expose:c}){return c({frontmatter:{meta:[]}}),b({meta:[]}),(o,h)=>{const p=l("dv-button"),r=l("dv-popper"),e=l("Playground"),m=l("dv-input"),v=C,f=T,x=k,d=l("MarkdownTable");return y(),w(q,null,[A,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;hover&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",M,[s(r,{triggerAction:"hover",content:"This is a tooltip.",placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[z]),_:1})]),_:1})])]),_:1}),H,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;click&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Click Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",S,[s(r,{triggerAction:"click",content:"This is a tooltip.",placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[I]),_:1})]),_:1})])]),_:1}),P,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;focus&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;--popper-tail-offset: 10px&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Focus me&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",F,[s(r,{triggerAction:"focus",content:"This is a tooltip.",placement:"right",style:{"--popper-tail-offset":"10px"}},{default:n(()=>[s(m,{placeholder:"Focus me"})]),_:1})])]),_:1}),B,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
    <span class="hljs-attr">triggerAction</span>=<span class="hljs-string">&quot;contextMenu&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a tooltip.&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Right click Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",N,[s(r,{triggerAction:"contextMenu",content:"This is a tooltip.",placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[V]),_:1})]),_:1})])]),_:1}),E,s(e,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
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
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(v)]),_:1}),K,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:n(()=>[s(f)]),_:1}),R,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span>
          <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>
          <span class="hljs-attr">v-slots</span>=<span class="hljs-string">{{</span>
            <span class="hljs-attr">default:</span> () =&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>,
            content: () =&gt; (
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                This is a <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            ),
          }}
        &gt;<span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:n(()=>[s(x)]),_:1}),D,s(e,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6 text-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-popper</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> This is a <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-popper</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:n(()=>[a("div",G,[s(r,{placement:"right"},{default:n(()=>[s(p,null,{default:n(()=>[J]),_:1})]),content:n(()=>[L]),_:1})])]),_:1}),a("div",O,[Q,U,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"content",1:"popper content",2:"any, function",3:"-"},{0:"open",1:"popper open status",2:"boolean",3:"-"},{0:"placement",1:"popper placement",2:"Placement",3:"auto"},{0:"disableTeleport",1:"disable popper node teleport to body",2:"boolean",3:"false"},{0:"disabled",1:"disable popper",2:"boolean",3:"true"},{0:"onChange",1:"emitted whe popper status change",2:"function",3:"-"},{0:"triggerAction",1:"the action to tigger popper",2:"contextMenu, hover, click, focus",3:"hover"},{0:"outsideCloseable",1:"click outside to close popper",2:"boolean",3:"true"},{0:"escapeCloseable",1:"press escape key to close popper",2:"boolean",3:"true"}]}),W,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{0:"default",1:"popper reference"},{0:"content",1:"popper content"}]})])],64)}}},$=_(X,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/popper.md"]]);export{$ as default,Z as meta};
