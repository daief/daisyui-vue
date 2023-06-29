import{_ as e,u as r,r as c,o as h,c as g,a as s,w as t,b as n,F as u}from"./app-33be3538.js";const j=n("div",{class:"markdown-body"},[n("h1",null,"Avatar"),n("h2",null,"Examples"),n("p",null,"avatar")],-1),d={class:"flex items-center space-x-8 flex-wrap"},m=n("div",{class:"markdown-body"},[n("p",null,"avatar with mask")],-1),q={class:"flex items-center space-x-8 flex-wrap"},f=n("div",{class:"markdown-body"},[n("p",null,"avatar with border(by css). Circle & square types only, but the others are not supported")],-1),w={class:"w-full flex justify-center items-center space-x-8 flex-wrap mb-8"},v={class:"w-full flex justify-center items-center space-x-8 flex-wrap"},y=n("div",{class:"markdown-body"},[n("p",null,"avatar-group, default gap(half size)")],-1),x={class:"flex flex-col items-center"},_=n("div",{class:"markdown-body"},[n("p",null,"avatar-group, custom gap")],-1),z=n("span",{class:"text-xl"},"+99",-1),b=n("div",{class:"markdown-body"},[n("p",null,"avatar with presense indicator")],-1),k={class:"w-full flex justify-center items-center space-x-8 flex-wrap mb-4"},I={class:"w-full flex justify-center items-center space-x-8 flex-wrap"},A=n("div",{class:"markdown-body"},[n("p",null,"avatar placeholder")],-1),M={class:"flex items-center space-x-8 flex-wrap"},S=n("span",{class:"text-2xl"},"+99",-1),B=n("span",{class:"text-xs"},"AA",-1),C={class:"markdown-body"},E=n("h2",null,"Avatar",-1),F=n("h3",null,"Attributes",-1),J=n("h2",null,"AvatarGroup",-1),N=n("h3",null,"Attributes",-1),D=[],O={setup(P,{expose:o}){return o({frontmatter:{meta:[]}}),r({meta:[]}),(X,G)=>{const a=c("dv-avatar"),l=c("Playground"),p=c("dv-avatar-group"),i=c("MarkdownTable");return h(),g(u,null,[j,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
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
`},{default:t(()=>[n("div",d,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"96px"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"xs"})])]),_:1}),m,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
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
`},{default:t(()=>[n("div",q,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"circle",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"squircle",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"hexagon",size:"lg"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",type:"decagon",size:"lg"})])]),_:1}),f,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full flex justify-center items-center space-x-8 flex-wrap mb-8&quot;</span>&gt;</span>
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
`},{default:t(()=>[n("div",w,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",class:"ring ring-pink-600 ring-offset-4"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",class:"ring ring-pink-600 ring-offset-4"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",class:"ring ring-pink-600 ring-offset-4"})]),n("div",v,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",class:"ring ring-pink-600 ring-offset-4",type:"square"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",class:"ring ring-pink-600 ring-offset-4",type:"square"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",class:"ring ring-pink-600 ring-offset-4",type:"square"})])]),_:1}),y,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col items-center&quot;</span>&gt;</span>
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
`},{default:t(()=>[n("div",x,[s(p,{size:"lg",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{placeholder:"+99"})]),_:1}),s(p,{size:"md",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"})]),_:1}),s(p,{size:"sm",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"})]),_:1}),s(p,{size:"xs",class:"mb-4"},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"})]),_:1})])]),_:1}),_,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;80px&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>
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
`},{default:t(()=>[s(p,{size:"80px",gap:50},{default:t(()=>[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}),s(a,{placeholder:""},{default:t(()=>[z]),_:1})]),_:1})]),_:1}),b,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-full flex justify-center items-center space-x-8 flex-wrap mb-4&quot;</span>&gt;</span>
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
`},{default:t(()=>[n("div",k,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",status:"online"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",status:"online"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",status:"offline"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"xs",status:"offline"})]),n("div",I,[s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"lg",status:"offline",type:"squircle"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"md",status:"offline",type:"squircle"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"sm",status:"online",type:"squircle"}),s(a,{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png",size:"xs",status:"online",type:"squircle"})])]),_:1}),A,s(l,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span> <span class="hljs-attr">placeholder</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-2xl&quot;</span>&gt;</span>+99<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;JO&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;MX&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">placeholder</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-xs&quot;</span>&gt;</span>AA<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[n("div",M,[s(a,{size:"lg",status:"offline",type:"squircle",placeholder:""},{default:t(()=>[S]),_:1}),s(a,{size:"md",status:"offline",placeholder:"JO"}),s(a,{size:"sm",placeholder:"MX"}),s(a,{size:"xs",placeholder:"",type:"circle"},{default:t(()=>[B]),_:1})])]),_:1}),n("div",C,[E,F,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"src",1:"avatar img source",2:"string",3:"-"},{0:"placeholder",1:"to show some letters as avatar placeholder source",2:"string",3:"-"},{0:"size",1:"size",2:"ISize",3:"md"},{0:"type",1:"mask type",2:"squircle, heart, hexagon, hexagon-2, decagon, pentagon, diamond, square, circle, parallelogram, parallelogram-2, parallelogram-3, parallelogram-4, star, star-2, triangle, triangle-2, triangle-3, triangle-4",3:"circle"},{0:"status",1:"shows online/offline indicator",2:"online, offline",3:"-"}]}),J,N,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"size",1:"size",2:"ISize",3:"md"},{0:"gap",1:"avatar gap",2:"string, number",3:"-"}]})])],64)}}},K=e(O,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/avatar.md"]]);export{K as default,D as meta};
