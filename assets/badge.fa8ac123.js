import{u as g,a7 as e,a9 as i,c as s,aa as a,ab as t,F as r,ac as j,a as n}from"./vendor.b4c19bdc.js";const m=t("div",{class:"markdown-body"},[t("h1",null,"Badge"),t("h2",null,"Examples"),t("p",null,"badge")],-1),u={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},_=n("neutral"),v=n("primary"),b=n("secondary"),f=n("accent"),q=n("ghost"),x=n("info"),y=n("success"),w=n("warning"),z=n("error"),N=t("div",{class:"markdown-body"},[t("p",null,"badge size")],-1),k={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},H=n("987,654"),I=n("987,654"),B=n("987,654"),V=n("987,654"),A=t("div",{class:"markdown-body"},[t("p",null,"empty badge")],-1),T={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},C=t("div",{class:"markdown-body"},[t("p",null,"badge variants")],-1),E={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},F=n(" primary "),M=n(" info "),P=n(" warning "),S=n(" error "),D=t("div",{class:"markdown-body"},[t("p",null,"badge outline")],-1),G={class:"flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"},J=n("neutral"),K=n("primary"),L=n("secondary"),O=n("accent"),Q=t("div",{class:"markdown-body"},[t("p",null,"badge in text")],-1),R={class:"mb-2 text-2xl"},U=n(" Heading "),W=n("New"),X={class:"mb-2 text-xl"},Y=n(" Heading "),Z=n("New"),$={class:"mb-2 text-lg"},ss=n(" Heading "),as=n("New"),ns={class:"mb-2 text-md"},ls=n(" Heading "),ts=n("New"),ps={class:"text-sm"},es=n(" Heading "),cs=n("New"),os=t("div",{class:"markdown-body"},[t("p",null,"badge in button")],-1),hs={class:"flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row"},ds=n(" Version 2.7.0 "),gs=n("new"),is=n(" Inbox "),rs=n("3"),js=n(" Notifications "),ms=n("+999"),us=n(" Accent "),_s=n("new"),vs={class:"markdown-body"},bs=t("h2",null,"Badge",-1),fs=t("h3",null,"Attributes",-1),ks=[],Hs={setup(qs,{expose:h}){return h({frontmatter:{meta:[]}}),g({meta:[]}),(ws,zs)=>{const l=e("dv-badge"),p=e("Playground"),c=e("icon-close"),o=e("dv-button"),d=e("MarkdownTable");return j(),i(r,null,[m,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
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
`},{default:a(()=>[t("div",u,[s(l,null,{default:a(()=>[_]),_:1}),s(l,{variant:"primary"},{default:a(()=>[v]),_:1}),s(l,{variant:"secondary"},{default:a(()=>[b]),_:1}),s(l,{variant:"accent"},{default:a(()=>[f]),_:1}),s(l,{variant:"ghost"},{default:a(()=>[q]),_:1}),s(l,{variant:"info"},{default:a(()=>[x]),_:1}),s(l,{variant:"success"},{default:a(()=>[y]),_:1}),s(l,{variant:"warning"},{default:a(()=>[w]),_:1}),s(l,{variant:"error"},{default:a(()=>[z]),_:1})])]),_:1}),N,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",k,[s(l,{size:"lg"},{default:a(()=>[H]),_:1}),s(l,{size:"md"},{default:a(()=>[I]),_:1}),s(l,{size:"sm"},{default:a(()=>[B]),_:1}),s(l,{size:"xs"},{default:a(()=>[V]),_:1})])]),_:1}),A,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",T,[s(l,{size:"lg"}),s(l,{size:"md"}),s(l,{size:"sm"}),s(l,{size:"xs"})])]),_:1}),C,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
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
`},{default:a(()=>[t("div",E,[s(l,{variant:"primary"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),F]),_:1}),s(l,{variant:"info"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),M]),_:1}),s(l,{variant:"warning"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),P]),_:1}),s(l,{variant:"error"},{default:a(()=>[s(c,{size:"14px",class:"mr-1"}),S]),_:1})])]),_:1}),D,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span>&gt;</span>neutral<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:a(()=>[t("div",G,[s(l,{outline:""},{default:a(()=>[J]),_:1}),s(l,{outline:"",variant:"primary"},{default:a(()=>[K]),_:1}),s(l,{outline:"",variant:"secondary"},{default:a(()=>[L]),_:1}),s(l,{outline:"",variant:"accent"},{default:a(()=>[O]),_:1})])]),_:1}),Q,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
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
`},{default:a(()=>[t("div",null,[t("h2",R,[U,s(l,{outline:"",size:"lg"},{default:a(()=>[W]),_:1})]),t("h2",X,[Y,s(l,{outline:"",size:"md"},{default:a(()=>[Z]),_:1})]),t("h2",$,[ss,s(l,{outline:"",size:"md"},{default:a(()=>[as]),_:1})]),t("h2",ns,[ls,s(l,{outline:"",size:"sm"},{default:a(()=>[ts]),_:1})]),t("h2",ps,[es,s(l,{outline:"",size:"sm"},{default:a(()=>[cs]),_:1})])])]),_:1}),os,s(p,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
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
`},{default:a(()=>[t("div",hs,[s(o,null,{default:a(()=>[ds,s(l,{class:"ml-2"},{default:a(()=>[gs]),_:1})]),_:1}),s(o,{variant:"primary"},{default:a(()=>[is,s(l,{class:"ml-2",outline:""},{default:a(()=>[rs]),_:1})]),_:1}),s(o,{variant:"secondary"},{default:a(()=>[js,s(l,{class:"ml-2",outline:""},{default:a(()=>[ms]),_:1})]),_:1}),s(o,{variant:"accent"},{default:a(()=>[us,s(l,{class:"ml-2",outline:""},{default:a(()=>[_s]),_:1})]),_:1})])]),_:1}),t("div",vs,[bs,fs,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"variant","1":"color type","2":"neutral, primary, secondary, accent, info, success, warning, error, ghost, link, glass","3":"neutral"},{"0":"size","1":"size","2":"ISize","3":"md"},{"0":"outline","1":"transparent badge with [colorful] border","2":"boolean","3":"false"}]})])],64)}}};export{Hs as default,ks as meta};
