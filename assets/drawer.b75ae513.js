import{u as b,v as f,a0 as p,a2 as q,c as s,a3 as a,a4 as n,p as w,a6 as y,a5 as x,a as l}from"./vendor.29ec88ef.js";const k=y(`<div class="markdown-body"><h1>Drawer</h1><h2>Examples</h2><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
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
</code></pre><p>global drawer, mouts on body. content has a animation.</p></div>`,1),C={class:"bg-base-100 w-80 py-4"},z=l("item1"),O=l("item2"),I=l("item3"),T={class:"rounded-lg shadow bg-base-200 h-52 flex justify-center items-center"},M=l("open"),S=n("div",{class:"markdown-body"},[n("p",null,"drawer disable teleport")],-1),N={class:"w-full"},R={class:"bg-base-100 w-80 py-4"},V=l("item1"),B=l("item2"),E=l("item3"),D={class:"h-full flex justify-center items-center"},P=l(" open "),A=n("div",{class:"markdown-body"},[n("p",null,"sliding drawer for mobile only")],-1),F={class:"bg-base-100 w-80 py-4 border-r border-base-100"},H=l("item1"),G=l("item2"),J=l("item3"),K={class:"h-full flex justify-center items-center text-center"},L=n("p",{class:"hidden lg:block px-5"}," Menu is always open on desktop size. Resize the browser to see toggle button on mobile size ",-1),Q={class:"lg:hidden px-5"},U=n("p",null,[l("Menu can be toggled on mobile size. "),n("br"),l(" Resize the browser to see fixed sidebar on desktop size ")],-1),W=l(" open "),X=n("div",{class:"markdown-body"},[n("p",null,"navbar menu for desktop + drawer for mobile")],-1),Y={class:"bg-base-100 w-80 py-4 border-r border-base-100"},Z=l("item1"),$=l("item2"),ss=l("item3"),as={class:"flex-none lg:hidden"},ns=n("div",{class:"flex-1 mx-2"}," Change screen size to show/hide menu ",-1),ls={class:"flex-none hidden lg:block"},ts=l("item1"),ps=l("item2"),es=l("item3"),cs=n("div",{class:"markdown-body"},[n("p",null,"drawer right")],-1),os={class:"w-full text-center"},hs=l("open"),ds={class:"bg-white w-80 py-4"},is=l("item1"),js=l("item2"),gs=l("item3"),ms={class:"markdown-body"},rs=n("h2",null,"Drawer",-1),us=n("h3",null,"Attributes",-1),_s=n("h3",null,"Events",-1),vs=n("h3",null,"Slots",-1),xs=[],ks={setup(bs,{expose:u}){u({frontmatter:{meta:[]}}),b({meta:[]});const m=f(null);function c(g){m.value=g}function o(){m.value=null}function h(g){return m.value===g}return(g,ws)=>{const t=p("dv-menu-item"),e=p("dv-menu"),d=p("dv-button"),i=p("dv-drawer"),j=p("Playground"),_=p("icon-menu"),v=p("dv-navbar"),r=p("MarkdownTable");return x(),q(w,null,[k,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d1&#x27;)&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100 w-80 py-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52 flex justify-center items-center&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d1&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>
`},{default:a(()=>[s(i,{open:h("d1"),onClose:o},{content:a(()=>[n("div",T,[s(d,{onClick:()=>c("d1"),type:"primary"},{default:a(()=>[M]),_:1},8,["onClick"])])]),default:a(()=>[n("div",C,[s(e,null,{default:a(()=>[s(t,null,{default:a(()=>[z]),_:1}),s(t,null,{default:a(()=>[O]),_:1}),s(t,null,{default:a(()=>[I]),_:1})]),_:1})])]),_:1},8,["open"])]),_:1}),S,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d2&#x27;)&quot;</span>
    <span class="hljs-attr">disableTeleport</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100 w-80 py-4&quot;</span>&gt;</span>
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
`},{default:a(()=>[n("div",N,[s(i,{open:h("d2"),disableTeleport:"",onClose:o,class:"rounded-lg shadow bg-base-200 h-52"},{default:a(()=>[n("div",R,[s(e,{class:"px-4"},{default:a(()=>[s(t,null,{default:a(()=>[V]),_:1}),s(t,null,{default:a(()=>[B]),_:1}),s(t,null,{default:a(()=>[E]),_:1})]),_:1})])]),content:a(()=>[n("div",D,[s(d,{onClick:()=>c("d2"),type:"primary"},{default:a(()=>[P]),_:1},8,["onClick"])])]),_:1},8,["open"])])]),_:1}),A,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d3&#x27;)&quot;</span>
  <span class="hljs-attr">disableTeleport</span>
  <span class="hljs-attr">mobileOnly</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100 w-80 py-4 border-r border-base-100&quot;</span>&gt;</span>
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
`},{default:a(()=>[s(i,{open:h("d3"),disableTeleport:"",mobileOnly:"",onClose:o,class:"rounded-lg shadow bg-base-200 h-52"},{default:a(()=>[n("div",F,[s(e,{class:"px-4"},{default:a(()=>[s(t,null,{default:a(()=>[H]),_:1}),s(t,null,{default:a(()=>[G]),_:1}),s(t,null,{default:a(()=>[J]),_:1})]),_:1})])]),content:a(()=>[n("div",K,[L,n("div",Q,[U,s(d,{onClick:()=>c("d3"),type:"primary"},{default:a(()=>[W]),_:1},8,["onClick"])])])]),_:1},8,["open"])]),_:1}),X,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d4&#x27;)&quot;</span>
  <span class="hljs-attr">disableTeleport</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100 w-80 py-4 border-r border-base-100&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-300&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-none lg:hidden&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d4&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">icon-menu</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>
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
`},{default:a(()=>[s(i,{open:h("d4"),disableTeleport:"",onClose:o,class:"rounded-lg shadow bg-base-200 h-52"},{default:a(()=>[n("div",Y,[s(e,{class:"p-"},{default:a(()=>[s(t,null,{default:a(()=>[Z]),_:1}),s(t,null,{default:a(()=>[$]),_:1}),s(t,null,{default:a(()=>[ss]),_:1})]),_:1})])]),content:a(()=>[s(v,{class:"bg-base-300"},{default:a(()=>[n("div",as,[s(d,{onClick:()=>c("d4"),type:"ghost"},{default:a(()=>[s(_,{size:"1.5em"})]),_:1},8,["onClick"])]),ns,n("div",ls,[s(e,{class:"p-2",horizontal:""},{default:a(()=>[s(t,null,{default:a(()=>[ts]),_:1}),s(t,null,{default:a(()=>[ps]),_:1}),s(t,null,{default:a(()=>[es]),_:1})]),_:1})])]),_:1})]),_:1},8,["open"])]),_:1}),cs,s(j,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full text-center&quot;</span>&gt;</span>
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
`},{default:a(()=>[n("div",os,[s(d,{onClick:()=>c("d5"),type:"primary"},{default:a(()=>[hs]),_:1},8,["onClick"])]),s(i,{open:h("d5"),onClose:o,placement:"right"},{default:a(()=>[n("div",ds,[s(e,null,{default:a(()=>[s(t,null,{default:a(()=>[is]),_:1}),s(t,null,{default:a(()=>[js]),_:1}),s(t,null,{default:a(()=>[gs]),_:1})]),_:1})])]),_:1},8,["open"])]),_:1}),n("div",ms,[rs,us,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"open","1":"drawer open/close status","2":"boolean","3":"-"},{"0":"disableTeleport","1":"disable teleport behavior","2":"boolean","3":"-"},{"0":"mobileOnly","1":"makes drawer to open/close on mobile but will be always visible on desktop","2":"boolean","3":"-"},{"0":"placement","1":"drawer open position","2":"left, right","3":"left"},{"0":"placement","1":"drawer open position","2":"left, right","3":"left"}]}),_s,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"close","1":"drawer close event","2":"function","3":"-"}]}),vs,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"drawer side content"},{"0":"content","1":"drawer content"}]})])],64)}}};export{ks as default,xs as meta};
