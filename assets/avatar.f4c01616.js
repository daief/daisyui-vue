import{u as e,a2 as c,a4 as r,c as s,a5 as t,a6 as n,q as h,a7 as g}from"./vendor.95b30dca.js";const u=n("div",{class:"markdown-body"},[n("h1",null,"Avatar"),n("h2",null,"Examples"),n("p",null,"avatar")],-1),j={class:"flex items-center space-x-8 flex-wrap"},d=n("div",{class:"markdown-body"},[n("p",null,"avatar with mask")],-1),m={class:"flex items-center space-x-8 flex-wrap"},q=n("div",{class:"markdown-body"},[n("p",null,"avatar with border(by css). Circle & square types only, but the others are not supported")],-1),f={class:"w-full flex justify-center items-center space-x-8 flex-wrap mb-8"},w={class:"w-full flex justify-center items-center space-x-8 flex-wrap"},v=n("div",{class:"markdown-body"},[n("p",null,"avatar-group, default gap(half size)")],-1),y={class:"flex flex-col items-center"},x=n("div",{class:"markdown-body"},[n("p",null,"avatar-group, custom gap")],-1),_=n("span",{class:"text-xl"},"+99",-1),z=n("div",{class:"markdown-body"},[n("p",null,"avatar with presense indicator")],-1),b={class:"w-full flex justify-center items-center space-x-8 flex-wrap mb-4"},k={class:"w-full flex justify-center items-center space-x-8 flex-wrap"},I=n("div",{class:"markdown-body"},[n("p",null,"avatar placeholder")],-1),A={class:"flex items-center space-x-8 flex-wrap"},M=n("span",{class:"text-2xl"},"+99",-1),S=n("span",{class:"text-xs"},"AA",-1),B={class:"markdown-body"},C=n("h2",null,"Avatar",-1),E=n("h3",null,"Attributes",-1),J=n("h2",null,"AvatarGroup",-1),N=n("h3",null,"Attributes",-1),G=[],H={setup(O,{expose:o}){return o({frontmatter:{meta:[]}}),e({meta:[]}),(V,X)=>{const a=c("dv-avatar"),l=c("Playground"),p=c("dv-avatar-group"),i=c("MarkdownTable");return g(),r(h,null,[u,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;96px&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",j,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"96px"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"xs"})])]),_:1}),d,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;hexagon&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;decagon&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",m,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"circle",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"squircle",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"hexagon",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"decagon",size:"lg"})])]),_:1}),q,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full flex justify-center items-center space-x-8 flex-wrap mb-8&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full flex justify-center items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;square&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;square&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;square&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",f,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",class:"ring ring-pink-600 ring-offset-4"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",class:"ring ring-pink-600 ring-offset-4"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",class:"ring ring-pink-600 ring-offset-4"})]),n("div",w,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",class:"ring ring-pink-600 ring-offset-4",type:"square"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",class:"ring ring-pink-600 ring-offset-4",type:"square"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",class:"ring ring-pink-600 ring-offset-4",type:"square"})])]),_:1}),v,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;+99&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",y,[s(p,{size:"lg",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{placeholder:"+99"})]),_:1}),s(p,{size:"md",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"})]),_:1}),s(p,{size:"sm",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"})]),_:1}),s(p,{size:"xs",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"})]),_:1})])]),_:1}),x,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;80px&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">placeholder</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-xl&quot;</span>&gt;</span>+99<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>
`},{default:t(()=>[s(p,{size:"80px",gap:50},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{placeholder:""},{default:t(()=>[_]),_:1})]),_:1})]),_:1}),z,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full flex justify-center items-center space-x-8 flex-wrap mb-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full flex justify-center items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",b,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",status:"online"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",status:"online"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",status:"offline"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"xs",status:"offline"})]),n("div",k,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",status:"offline",type:"squircle"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",status:"offline",type:"squircle"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",status:"online",type:"squircle"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"xs",status:"online",type:"squircle"})])]),_:1}),I,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span> <span class="hljs-attr">placeholder</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-2xl&quot;</span>&gt;</span>+99<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;JO&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;MX&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">placeholder</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-xs&quot;</span>&gt;</span>AA<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",A,[s(a,{size:"lg",status:"offline",type:"squircle",placeholder:""},{default:t(()=>[M]),_:1}),s(a,{size:"md",status:"offline",placeholder:"JO"}),s(a,{size:"sm",placeholder:"MX"}),s(a,{size:"xs",placeholder:"",type:"circle"},{default:t(()=>[S]),_:1})])]),_:1}),n("div",B,[C,E,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"src","1":"avatar img source","2":"string","3":"-"},{"0":"placeholder","1":"to show some letters as avatar placeholder source","2":"string","3":"-"},{"0":"size","1":"size","2":"ISize","3":"md"},{"0":"type","1":"mask type","2":"squircle, heart, hexagon, hexagon-2, decagon, pentagon, diamond, square, circle, parallelogram, parallelogram-2, parallelogram-3, parallelogram-4, star, star-2, triangle, triangle-2, triangle-3, triangle-4","3":"circle"},{"0":"status","1":"shows online/offline indicator","2":"online, offline","3":"-"}]}),J,N,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"size","1":"size","2":"ISize","3":"md"},{"0":"gap","1":"avatar gap","2":"string, number","3":"-"}]})])],64)}}};export{H as default,G as meta};
