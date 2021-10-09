import{u as b,r as f,j as p,l as q,c as s,q as a,t as w,s as n,o as y,a as l}from"./vendor.00cdd876.js";const x={class:"markdown-body"},k=w(`<h1>Drawer</h1><h2>Examples</h2><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

  <span class="hljs-keyword">const</span> open = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">setOpen</span>(<span class="hljs-params">type</span>) {
    open.<span class="hljs-property">value</span> = type;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">close</span>(<span class="hljs-params"></span>) {
    open.<span class="hljs-property">value</span> = <span class="hljs-literal">null</span>;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">isOpen</span>(<span class="hljs-params">type</span>) {
    <span class="hljs-keyword">return</span> open.<span class="hljs-property">value</span> === type;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><p>global drawer, mouts on body</p>`,4),C={class:"rounded-lg shadow bg-base-200 h-52 flex justify-center items-center"},z=l("open"),O={class:"bg-white w-80 py-4"},I=l("item1"),T=l("item2"),M=l("item3"),S=n("p",null,"drawer disable teleport",-1),N={class:"bg-white w-80 py-4"},R=l("item1"),V=l("item2"),B=l("item3"),E={class:"h-full flex justify-center items-center"},D=l(" open "),P=n("p",null,"sliding drawer for mobile only",-1),A={class:"bg-white w-80 py-4 border-r border-gray-100"},H=l("item1"),F=l("item2"),G=l("item3"),J={class:"h-full flex justify-center items-center text-center"},K=n("p",{class:"hidden lg:block px-5"}," Menu is always open on desktop size. Resize the browser to see toggle button on mobile size ",-1),L={class:"lg:hidden px-5"},Q=n("p",null,[l("Menu can be toggled on mobile size. "),n("br"),l(" Resize the browser to see fixed sidebar on desktop size ")],-1),U=l(" open "),W=n("p",null,"navbar menu for desktop + drawer for mobile",-1),X={class:"bg-white w-80 py-4 border-r border-gray-100"},Y=l("item1"),Z=l("item2"),$=l("item3"),ss={class:"flex-none lg:hidden"},as=n("div",{class:"flex-1 mx-2"}," Change screen size to show/hide menu ",-1),ns={class:"flex-none hidden lg:block"},ls=l("item1"),ts=l("item2"),ps=l("item3"),es=n("p",null,"drawer right",-1),cs={class:"rounded-lg shadow bg-base-200 h-52 flex justify-center items-center"},os=l("open"),hs={class:"bg-white w-80 py-4"},ds=l("item1"),is=l("item2"),js=l("item3"),gs=n("h2",null,"Drawer",-1),rs=n("h3",null,"Attributes",-1),ms=n("h3",null,"Events",-1),us=n("h3",null,"Slots",-1),ws={setup(_s,{expose:u}){u({frontmatter:{meta:[]}}),b({meta:[]});const r=f(null);function c(g){r.value=g}function o(){r.value=null}function h(g){return r.value===g}return(g,fs)=>{const d=p("dv-button"),t=p("dv-menu-item"),e=p("dv-menu"),i=p("dv-drawer"),j=p("Playground"),_=p("dv-icon-menu"),v=p("dv-navbar"),m=p("MarkdownTable");return y(),q("div",x,[k,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52 flex justify-center items-center&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d1&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d1&#x27;)&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>
`},{default:a(()=>[n("div",C,[s(d,{onClick:()=>c("d1"),type:"primary"},{default:a(()=>[z]),_:1},8,["onClick"])]),s(i,{open:h("d1"),onClose:o},{default:a(()=>[n("div",O,[s(e,null,{default:a(()=>[s(t,null,{default:a(()=>[I]),_:1}),s(t,null,{default:a(()=>[T]),_:1}),s(t,null,{default:a(()=>[M]),_:1})]),_:1})])]),_:1},8,["open"])]),_:1}),S,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d2&#x27;)&quot;</span>
    <span class="hljs-attr">disableTeleport</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-4&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-full flex justify-center items-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d2&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
          open
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[n("div",null,[s(i,{open:h("d2"),disableTeleport:"",onClose:o,class:"rounded-lg shadow bg-base-200 h-52"},{default:a(()=>[n("div",N,[s(e,{class:"px-4"},{default:a(()=>[s(t,null,{default:a(()=>[R]),_:1}),s(t,null,{default:a(()=>[V]),_:1}),s(t,null,{default:a(()=>[B]),_:1})]),_:1})])]),content:a(()=>[n("div",E,[s(d,{onClick:()=>c("d2"),type:"primary"},{default:a(()=>[D]),_:1},8,["onClick"])])]),_:1},8,["open"])])]),_:1}),P,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d3&#x27;)&quot;</span>
  <span class="hljs-attr">disableTeleport</span>
  <span class="hljs-attr">mobileOnly</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4 border-r border-gray-100&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-4&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-full flex justify-center items-center text-center&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;hidden lg:block px-5&quot;</span>&gt;</span>
        Menu is always open on desktop size. Resize the browser to see toggle
        button on mobile size
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;lg:hidden px-5&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>
          &gt;</span>Menu can be toggled on mobile size.
          <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
          Resize the browser to see fixed sidebar on desktop size
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d3&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
          open
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>
`},{default:a(()=>[s(i,{open:h("d3"),disableTeleport:"",mobileOnly:"",onClose:o,class:"rounded-lg shadow bg-base-200 h-52"},{default:a(()=>[n("div",A,[s(e,{class:"px-4"},{default:a(()=>[s(t,null,{default:a(()=>[H]),_:1}),s(t,null,{default:a(()=>[F]),_:1}),s(t,null,{default:a(()=>[G]),_:1})]),_:1})])]),content:a(()=>[n("div",J,[K,n("div",L,[Q,s(d,{onClick:()=>c("d3"),type:"primary"},{default:a(()=>[U]),_:1},8,["onClick"])])])]),_:1},8,["open"])]),_:1}),W,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d4&#x27;)&quot;</span>
  <span class="hljs-attr">disableTeleport</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-gray-200 h-52&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4 border-r border-gray-100&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-gray-300&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-none lg:hidden&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d4&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-menu</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-1 mx-2&quot;</span>&gt;</span> Change screen size to show/hide menu <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-none hidden lg:block&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-2&quot;</span> <span class="hljs-attr">horizontal</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>
`},{default:a(()=>[s(i,{open:h("d4"),disableTeleport:"",onClose:o,class:"rounded-lg shadow bg-gray-200 h-52"},{default:a(()=>[n("div",X,[s(e,{class:"p-"},{default:a(()=>[s(t,null,{default:a(()=>[Y]),_:1}),s(t,null,{default:a(()=>[Z]),_:1}),s(t,null,{default:a(()=>[$]),_:1})]),_:1})])]),content:a(()=>[s(v,{class:"bg-gray-300"},{default:a(()=>[n("div",ss,[s(d,{onClick:()=>c("d4"),type:"ghost"},{default:a(()=>[s(_,{size:"1.5em"})]),_:1},8,["onClick"])]),as,n("div",ns,[s(e,{class:"p-2",horizontal:""},{default:a(()=>[s(t,null,{default:a(()=>[ls]),_:1}),s(t,null,{default:a(()=>[ts]),_:1}),s(t,null,{default:a(()=>[ps]),_:1})]),_:1})])]),_:1})]),_:1},8,["open"])]),_:1}),es,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52 flex justify-center items-center&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d5&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d5&#x27;)&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>
`},{default:a(()=>[n("div",cs,[s(d,{onClick:()=>c("d5"),type:"primary"},{default:a(()=>[os]),_:1},8,["onClick"])]),s(i,{open:h("d5"),onClose:o,placement:"right"},{default:a(()=>[n("div",hs,[s(e,null,{default:a(()=>[s(t,null,{default:a(()=>[ds]),_:1}),s(t,null,{default:a(()=>[is]),_:1}),s(t,null,{default:a(()=>[js]),_:1})]),_:1})])]),_:1},8,["open"])]),_:1}),gs,rs,s(m,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"open","1":"drawer open/close status","2":"boolean","3":"-"},{"0":"disableTeleport","1":"disable teleport behavior","2":"boolean","3":"-"},{"0":"mobileOnly","1":"makes drawer to open/close on mobile but will be always visible on desktop","2":"boolean","3":"-"},{"0":"placement","1":"drawer open position","2":"left, right","3":"left"},{"0":"placement","1":"drawer open position","2":"left, right","3":"left"}]}),ms,s(m,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"close","1":"drawer close event","2":"function","3":"-"}]}),us,s(m,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"drawer side content"},{"0":"content","1":"drawer content"}]})])}}};export{ws as default};
