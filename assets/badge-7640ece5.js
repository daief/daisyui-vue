import{_ as g,u as i,r as e,o as r,c as j,a as s,w as a,b as t,F as m,d as n}from"./app-33be3538.js";const u=t("div",{class:"markdown-body"},[t("h1",null,"Badge"),t("h2",null,"Examples"),t("p",null,"badge")],-1),_={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},v=n("neutral"),b=n("primary"),f=n("secondary"),q=n("accent"),x=n("ghost"),y=n("info"),w=n("success"),z=n("warning"),N=n("error"),k=t("div",{class:"markdown-body"},[t("p",null,"badge size")],-1),H={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},I=n("987,654"),B=n("987,654"),V=n("987,654"),A=n("987,654"),T=t("div",{class:"markdown-body"},[t("p",null,"empty badge")],-1),C={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},E=t("div",{class:"markdown-body"},[t("p",null,"badge variants")],-1),F={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},M=n(" primary "),P=n(" info "),S=n(" warning "),D=n(" error "),G=t("div",{class:"markdown-body"},[t("p",null,"badge outline")],-1),J={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},K=n("neutral"),L=n("primary"),O=n("secondary"),Q=n("accent"),R=t("div",{class:"markdown-body"},[t("p",null,"badge in text")],-1),U={class:"mb-2 text-2xl"},W=n(" Heading "),X=n("New"),Y={class:"mb-2 text-xl"},Z=n(" Heading "),$=n("New"),ss={class:"mb-2 text-lg"},as=n(" Heading "),ns=n("New"),ls={class:"mb-2 text-md"},ts=n(" Heading "),ps=n("New"),es={class:"text-sm"},cs=n(" Heading "),os=n("New"),hs=t("div",{class:"markdown-body"},[t("p",null,"badge in button")],-1),ds={class:"flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row"},gs=n(" Version 2.7.0 "),is=n("new"),rs=n(" Inbox "),js=n("3"),ms=n(" Notifications "),us=n("+999"),_s=n(" Accent "),vs=n("new"),bs={class:"markdown-body"},fs=t("h2",null,"Badge",-1),qs=t("h3",null,"Attributes",-1),Is=[],xs={setup(ys,{expose:h}){return h({frontmatter:{meta:[]}}),i({meta:[]}),(Ns,ks)=>{const l=e("dv-badge"),p=e("Playground"),c=e("icon-close"),o=e("dv-button"),d=e("MarkdownTable");return r(),j(m,null,[u,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span>&gt;</span>neutral<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>ghost<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",_,[s(l,null,{default:a(()=>[v]),_:1}),s(l,{variant:"primary"},{default:a(()=>[b]),_:1}),s(l,{variant:"secondary"},{default:a(()=>[f]),_:1}),s(l,{variant:"accent"},{default:a(()=>[q]),_:1}),s(l,{variant:"ghost"},{default:a(()=>[x]),_:1}),s(l,{variant:"info"},{default:a(()=>[y]),_:1}),s(l,{variant:"success"},{default:a(()=>[w]),_:1}),s(l,{variant:"warning"},{default:a(()=>[z]),_:1}),s(l,{variant:"error"},{default:a(()=>[N]),_:1})])]),_:1}),k,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",H,[s(l,{size:"lg"},{default:a(()=>[I]),_:1}),s(l,{size:"md"},{default:a(()=>[B]),_:1}),s(l,{size:"sm"},{default:a(()=>[V]),_:1}),s(l,{size:"xs"},{default:a(()=>[A]),_:1})])]),_:1}),T,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",C,[s(l,{size:"lg"}),s(l,{size:"md"}),s(l,{size:"sm"}),s(l,{size:"xs"})])]),_:1}),E,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>
    primary
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>
    info
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>
    warning
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>
    error
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",F,[s(l,{variant:"primary"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),M]),_:1}),s(l,{variant:"info"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),P]),_:1}),s(l,{variant:"warning"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),S]),_:1}),s(l,{variant:"error"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),D]),_:1})])]),_:1}),G,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span>&gt;</span>neutral<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",J,[s(l,{outline:""},{default:a(()=>[K]),_:1}),s(l,{outline:"",variant:"primary"},{default:a(()=>[L]),_:1}),s(l,{outline:"",variant:"secondary"},{default:a(()=>[O]),_:1}),s(l,{outline:"",variant:"accent"},{default:a(()=>[Q]),_:1})])]),_:1}),R,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-2xl&quot;</span>&gt;</span>
    Heading
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-xl&quot;</span>&gt;</span>
    Heading
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-lg&quot;</span>&gt;</span>
    Heading
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-md&quot;</span>&gt;</span>
    Heading
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-sm&quot;</span>&gt;</span>
    Heading
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",null,[t("h2",U,[W,s(l,{outline:"",size:"lg"},{default:a(()=>[X]),_:1})]),t("h2",Y,[Z,s(l,{outline:"",size:"md"},{default:a(()=>[$]),_:1})]),t("h2",ss,[as,s(l,{outline:"",size:"md"},{default:a(()=>[ns]),_:1})]),t("h2",ls,[ts,s(l,{outline:"",size:"sm"},{default:a(()=>[ps]),_:1})]),t("h2",es,[cs,s(l,{outline:"",size:"sm"},{default:a(()=>[os]),_:1})])])]),_:1}),hs,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>
    Version 2.7.0
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span>&gt;</span>new<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
    Inbox
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>
    Notifications
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>+999<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>
    Accent
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>new<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",ds,[s(o,null,{default:a(()=>[gs,s(l,{class:"ml-2"},{default:a(()=>[is]),_:1})]),_:1}),s(o,{variant:"primary"},{default:a(()=>[rs,s(l,{class:"ml-2",outline:""},{default:a(()=>[js]),_:1})]),_:1}),s(o,{variant:"secondary"},{default:a(()=>[ms,s(l,{class:"ml-2",outline:""},{default:a(()=>[us]),_:1})]),_:1}),s(o,{variant:"accent"},{default:a(()=>[_s,s(l,{class:"ml-2",outline:""},{default:a(()=>[vs]),_:1})]),_:1})])]),_:1}),t("div",bs,[fs,qs,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"variant",1:"color type",2:"neutral, primary, secondary, accent, info, success, warning, error, ghost, link, glass",3:"neutral"},{0:"size",1:"size",2:"ISize",3:"md"},{0:"outline",1:"transparent badge with [colorful] border",2:"boolean",3:"false"}]})])],64)}}},Bs=g(xs,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/badge.md"]]);export{Bs as default,Is as meta};
