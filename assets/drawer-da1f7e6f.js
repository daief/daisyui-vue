import{g as h,a as s,r as a,d as n,F as d,z as i,_ as w,u as b,o as y,c as x,w as o,b as t}from"./app-f7b9d8d9.js";const _={setup:()=>{const l=h(!1),p=()=>l.value=!l.value;return()=>s(d,null,[s("div",{class:"w-full text-center"},[s(a("dv-button"),{onClick:p,type:"primary"},{default:()=>[n("open")]})]),s(a("dv-drawer"),{open:l.value,onClose:p,placement:"right"},{default:()=>[s("div",{class:"bg-white w-80 py-4"},[s(a("dv-menu"),null,{default:()=>[s(a("dv-menu-item"),null,{default:()=>[n("item1")]}),s(a("dv-menu-item"),null,{default:()=>[n("item2")]}),s(a("dv-menu-item"),null,{default:()=>[n("item3")]})]})])]})])}},k={setup:()=>{const l=h(!1),p=()=>l.value=!l.value,e=i("sm"),r={default:()=>s("div",{class:"dv-bgbase100 w-80 py-4 border-r dv-borderbase100"},[s(a("dv-menu"),{class:"p-"},{default:()=>[s(a("dv-menu-item"),null,{default:()=>[n("item1")]}),s(a("dv-menu-item"),null,{default:()=>[n("item2")]}),s(a("dv-menu-item"),null,{default:()=>[n("item3")]})]})]),content:()=>s(a("dv-navbar"),{class:"dv-bgbase300"},{default:()=>[e.value?s("div",{class:"flex-none"},[s(a("dv-button"),{onClick:p,type:"ghost"},{default:()=>[s(a("icon-menu"),{size:"1.5em"},null)]})]):null,s("div",{class:"flex-1 mx-2"},[n(" Change screen size to show/hide menu ")]),e.value?null:s("div",{class:"flex-none"},[s(a("dv-menu"),{class:"p-2",horizontal:!0},{default:()=>[s(a("dv-menu-item"),null,{default:()=>[n("item1")]}),s(a("dv-menu-item"),null,{default:()=>[n("item2")]}),s(a("dv-menu-item"),null,{default:()=>[n("item3")]})]})])]})};return()=>s(a("dv-drawer"),{open:l.value,disableTeleport:!0,onClose:p,class:"rounded-lg shadow dv-bgbase200 h-52"},r)}},q={setup:()=>{const l=h(!1),p=()=>l.value=!l.value,e=i("sm"),r={default:()=>s("div",{class:"dv-bgbase100 w-80 py-4 border-r dv-borderbase100"},[s(a("dv-menu"),{class:"px-4"},{default:()=>[s(a("dv-menu-item"),null,{default:()=>[n("item1")]}),s(a("dv-menu-item"),null,{default:()=>[n("item2")]}),s(a("dv-menu-item"),null,{default:()=>[n("item3")]})]})]),content:()=>s("div",{class:"h-full flex justify-center items-center text-center"},[e.value?s("div",{class:"px-5"},[s("p",null,[n("Menu can be toggled on mobile size."),s("br",null,null),n("Resize the browser to see fixed sidebar on desktop size")]),s(a("dv-button"),{onClick:p,type:"primary"},{default:()=>[n("open")]})]):s("p",{class:"px-5"},[n("Menu is always open on desktop size. Resize the browser to see toggle button on mobile size")])])};return()=>s(a("dv-drawer"),{open:l.value,disableTeleport:!0,flattern:!e.value,onClose:p,class:"rounded-lg shadow dv-bgbase200 h-52"},r)}},C={setup:()=>{const l=h(!1),p=()=>l.value=!l.value,e={default:()=>s("div",{class:"dv-bgbase100 w-80 py-4"},[s(a("dv-menu"),{class:"px-4"},{default:()=>[s(a("dv-menu-item"),null,{default:()=>[n("item1")]}),s(a("dv-menu-item"),null,{default:()=>[n("item2")]}),s(a("dv-menu-item"),null,{default:()=>[n("item3")]})]})]),content:()=>s("div",{class:"h-full flex justify-center items-center"},[s(a("dv-button"),{onClick:p,type:"primary"},{default:()=>[n("open")]})])};return()=>s("div",{class:"w-full"},[s(a("dv-drawer"),{open:l.value,disableTeleport:!0,onClose:p,class:"rounded-lg shadow dv-bgbase200 h-52"},e)])}},z={setup:()=>{const l=h(!1),p=()=>l.value=!l.value,e={default:()=>s("div",{class:"dv-bgbase100 w-80 py-4"},[s(a("dv-menu"),null,{default:()=>[s(a("dv-menu-item"),null,{default:()=>[n("item1")]}),s(a("dv-menu-item"),null,{default:()=>[n("item2")]}),s(a("dv-menu-item"),null,{default:()=>[n("item3")]})]})]),content:()=>s("div",{class:"rounded-lg shadow dv-bgbase200 h-52 flex justify-center items-center"},[s(a("dv-button"),{onClick:p,type:"primary"},{default:()=>[n("open")]})])};return()=>s(a("dv-drawer"),{open:l.value,onClose:p},e)}},O=t("div",{class:"markdown-body"},[t("h1",null,"Drawer"),t("h2",null,"Examples"),t("p",null,"global drawer, mouts on body. content has a animation.")],-1),M=t("div",{class:"markdown-body"},[t("p",null,"drawer disable teleport")],-1),I=t("div",{class:"markdown-body"},[t("p",null,"sliding drawer for mobile only (via flattern)")],-1),T=t("div",{class:"markdown-body"},[t("p",null,"navbar menu for desktop + drawer for mobile")],-1),B=t("div",{class:"markdown-body"},[t("p",null,"drawer right")],-1),P={class:"markdown-body"},L=t("h2",null,"Drawer",-1),R=t("h3",null,"Attributes",-1),S=t("h3",null,"Events",-1),E=t("h3",null,"Slots",-1),A=[],N={setup(l,{expose:p}){return p({frontmatter:{meta:[]}}),b({meta:[]}),(V,D)=>{const j=z,c=a("Playground"),g=C,m=q,v=k,f=_,u=a("MarkdownTable");return y(),x(d,null,[O,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> isOpen = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params"></span>) =&gt; (isOpen.<span class="hljs-property">value</span> = !isOpen.<span class="hljs-property">value</span>);

    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100 w-80 py-4&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">content</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow dv-bgbase200 h-52 flex justify-center items-center&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{toggle}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
            open
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
    };

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{isOpen.value}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{toggle}</span> <span class="hljs-attr">v-slots</span>=<span class="hljs-string">{slots}</span> /&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(j)]),_:1}),M,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> isOpen = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params"></span>) =&gt; (isOpen.<span class="hljs-property">value</span> = !isOpen.<span class="hljs-property">value</span>);

    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100 w-80 py-4&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-4&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">content</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-full flex justify-center items-center&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{toggle}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
            open
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
    };

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
          <span class="hljs-attr">open</span>=<span class="hljs-string">{isOpen.value}</span>
          <span class="hljs-attr">disableTeleport</span>
          <span class="hljs-attr">onClose</span>=<span class="hljs-string">{toggle}</span>
          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow dv-bgbase200 h-52&quot;</span>
          <span class="hljs-attr">v-slots</span>=<span class="hljs-string">{slots}</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(g)]),_:1}),I,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { useBreakPointLte } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> isOpen = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params"></span>) =&gt; (isOpen.<span class="hljs-property">value</span> = !isOpen.<span class="hljs-property">value</span>);
    <span class="hljs-keyword">const</span> isMobile = <span class="hljs-title function_">useBreakPointLte</span>(<span class="hljs-string">&#x27;sm&#x27;</span>);

    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100 w-80 py-4 border-r dv-borderbase100&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-4&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">content</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-full flex justify-center items-center text-center&quot;</span>&gt;</span>
          {isMobile.value ? (
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-5&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
                Menu can be toggled on mobile size.
                <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
                Resize the browser to see fixed sidebar on desktop size
              <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{toggle}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
                open
              <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          ) : (
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-5&quot;</span>&gt;</span>
              Menu is always open on desktop size. Resize the browser to see
              toggle button on mobile size
            <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          )}
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
    };

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{isOpen.value}</span>
        <span class="hljs-attr">disableTeleport</span>
        <span class="hljs-attr">flattern</span>=<span class="hljs-string">{!isMobile.value}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{toggle}</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow dv-bgbase200 h-52&quot;</span>
        <span class="hljs-attr">v-slots</span>=<span class="hljs-string">{slots}</span>
      /&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(m)]),_:1}),T,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { useBreakPointLte } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> isOpen = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params"></span>) =&gt; (isOpen.<span class="hljs-property">value</span> = !isOpen.<span class="hljs-property">value</span>);
    <span class="hljs-keyword">const</span> isMobile = <span class="hljs-title function_">useBreakPointLte</span>(<span class="hljs-string">&#x27;sm&#x27;</span>);

    <span class="hljs-keyword">const</span> slots = {
      <span class="hljs-attr">default</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100 w-80 py-4 border-r dv-borderbase100&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">content</span>: <span class="hljs-function">() =&gt;</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase300&quot;</span>&gt;</span>
          {isMobile.value ? (
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-none&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{toggle}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">icon-menu</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          ) : null}
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-1 mx-2&quot;</span>&gt;</span> Change screen size to show/hide menu <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          {!isMobile.value ? (
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-none&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-2&quot;</span> <span class="hljs-attr">horizontal</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          ) : null}
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar</span>&gt;</span></span>
      ),
    };
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{isOpen.value}</span>
        <span class="hljs-attr">disableTeleport</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{toggle}</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow dv-bgbase200 h-52&quot;</span>
        <span class="hljs-attr">v-slots</span>=<span class="hljs-string">{slots}</span>
      /&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(v)]),_:1}),B,s(c,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { useBreakPointLte } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> isOpen = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params"></span>) =&gt; (isOpen.<span class="hljs-property">value</span> = !isOpen.<span class="hljs-property">value</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full text-center&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{toggle}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
            open
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{isOpen.value}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{toggle}</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    );
  },
};
`},{default:o(()=>[s(f)]),_:1}),t("div",P,[L,R,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"open",1:"drawer open/close status",2:"boolean",3:"-"},{0:"disableTeleport",1:"disable teleport behavior",2:"boolean",3:"-"},{0:"flattern",1:"make drawer to be always visible",2:"boolean",3:"-"},{0:"placement",1:"drawer open position",2:"left, right",3:"left"}]}),S,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"close",1:"drawer close event",2:"function",3:"-"}]}),E,s(u,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{0:"default",1:"drawer side content"},{0:"content",1:"drawer content"}]})])],64)}}},H=w(N,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/drawer.md"]]);export{H as default,A as meta};
