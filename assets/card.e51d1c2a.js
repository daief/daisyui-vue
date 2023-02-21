import{u as m,a7 as l,a9 as j,c as s,aa as t,ab as a,F as _,ac as b,a as n}from"./vendor.b4c19bdc.js";const v=a("div",{class:"markdown-body"},[a("h1",null,"Card"),a("h2",null,"Examples"),a("p",null,"card")],-1),q={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},f=n("More info"),y=n(" Image bottom "),x=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),w=n("Login"),S=n("Register"),I=n(" Small image file "),R=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),k=n("Article"),M=n("Photography"),A=a("div",{class:"markdown-body"},[a("p",null,"image-full")],-1),C=n("More info"),T=a("div",{class:"markdown-body"},[a("p",null,"card-compact")],-1),N=n("More info"),B=a("div",{class:"markdown-body"},[a("p",null,"card with side image")],-1),G=n("More info"),P=a("div",{class:"markdown-body"},[a("p",null,"card without image")],-1),F=n("More info"),H=a("div",{class:"markdown-body"},[a("p",null,"glass card")],-1),V={class:"flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg",style:{"background-image":"url(https://placeimg.com/400/225/arch)"}},z=a("img",{class:"rounded-2xl",src:"https://placeimg.com/400/225/arch"},null,-1),E=n(" Glass "),L=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),D=n("More info"),J={class:"markdown-body"},K=a("h2",null,"Card",-1),O=a("h3",null,"Attributes",-1),Q=a("h3",null,"Slots",-1),U=a("h2",null,"CardImage",-1),W=a("h3",null,"Attributes",-1),X=a("h2",null,"CardBody",-1),Y=a("h3",null,"Attributes",-1),Z=a("p",null,[a("code",null,"-")],-1),$=a("h2",null,"CardTitle",-1),ss=a("h3",null,"Attributes",-1),as=a("h2",null,"CardActions",-1),ts=a("h3",null,"Attributes",-1),ns=a("p",null,[a("code",null,"-")],-1),rs=[],ds={setup(ls,{expose:g}){return g({frontmatter:{meta:[]}}),m({meta:[]}),(cs,is)=>{const e=l("dv-button"),p=l("dv-card"),o=l("dv-card-title"),r=l("dv-card-actions"),d=l("dv-card-body"),u=l("dv-card-image"),h=l("dv-badge"),c=l("Playground"),i=l("MarkdownTable");return b(),j(_,null,[v,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100&quot;</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Top image&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-body</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-title</span>&gt;</span> Image bottom <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-actions</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Login<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>Register<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-actions</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-body</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-title</span>&gt;</span> Small image file <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-actions</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>Article<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>Photography<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-actions</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-body</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",q,[s(p,{class:"bg-base-100",bordered:"",image:"https://placeimg.com/400/225/arch",title:"Top image",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[f]),_:1})]),_:1}),s(p,{bordered:"",class:"bg-base-100"},{default:t(()=>[s(d,null,{default:t(()=>[s(o,null,{default:t(()=>[y]),_:1}),x,s(r,null,{default:t(()=>[s(e,{type:"primary"},{default:t(()=>[w]),_:1}),s(e,{type:"ghost"},{default:t(()=>[S]),_:1})]),_:1})]),_:1}),s(u,{src:"https://placeimg.com/400/225/arch"})]),_:1}),s(p,{bordered:"",class:"bg-base-100"},{default:t(()=>[s(u,{src:"https://placeimg.com/400/225/arch"}),s(d,null,{default:t(()=>[s(o,null,{default:t(()=>[I]),_:1}),R,s(r,null,{default:t(()=>[s(h,{type:"ghost"},{default:t(()=>[k]),_:1}),s(h,{type:"ghost"},{default:t(()=>[M]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),A,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-64 max-w-full&quot;</span>
  <span class="hljs-attr">bordered</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Image overlay&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  <span class="hljs-attr">image-full</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
`},{default:t(()=>[s(p,{class:"w-64 max-w-full",bordered:"",image:"https://placeimg.com/400/225/arch",title:"Image overlay",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.","image-full":""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[C]),_:1})]),_:1})]),_:1}),T,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-64 max-w-full bg-base-100&quot;</span>
  <span class="hljs-attr">bordered</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;This card is compact&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  <span class="hljs-attr">compact</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
`},{default:t(()=>[s(p,{class:"w-64 max-w-full bg-base-100",bordered:"",image:"https://placeimg.com/400/225/arch",title:"This card is compact",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",compact:""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[N]),_:1})]),_:1})]),_:1}),B,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100&quot;</span>
  <span class="hljs-attr">bordered</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Horizontal&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  <span class="hljs-attr">side</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
`},{default:t(()=>[s(p,{class:"bg-base-100",bordered:"",image:"https://placeimg.com/400/225/arch",title:"Horizontal",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",side:""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[G]),_:1})]),_:1})]),_:1}),P,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-base-100&quot;</span>
  <span class="hljs-attr">bordered</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;No Images&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
`},{default:t(()=>[s(p,{class:"bg-base-100",bordered:"",title:"No Images",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[F]),_:1})]),_:1})]),_:1}),H,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg&quot;</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;background-image:url(https://placeimg.com/400/225/arch)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">glass</span>
    <span class="hljs-attr">side</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Glass&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-image</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-2xl&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-image</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-body</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-title</span>&gt;</span> Glass <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-actions</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;glass&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-actions</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card-body</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",V,[s(p,{bordered:"",glass:"",side:"",image:"https://placeimg.com/400/225/arch",title:"Glass",description:`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`},{default:t(()=>[s(u,{class:"p-6"},{default:t(()=>[z]),_:1}),s(d,null,{default:t(()=>[s(o,null,{default:t(()=>[E]),_:1}),L,s(r,null,{default:t(()=>[s(e,{type:"glass"},{default:t(()=>[D]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),a("div",J,[K,O,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"bordered","1":"adds border to card","2":"boolean","3":"true"},{"0":"side","1":"the image in figure will be on to the side","2":"boolean","3":"false"},{"0":"imageFull","1":"the image in figure element will be the background","2":"boolean","3":"false"},{"0":"compact","1":"applies smaller padding","2":"boolean","3":"false"},{"0":"glass","1":"applies glass style","2":"boolean","3":"false"},{"0":"image","1":"image url of card (works when no default solt)","2":"string","3":"-"},{"0":"title","1":"title of card (works when no default solt)","2":"string","3":"-"},{"0":"description","1":"description of card (works when no default solt)","2":"string","3":"-"}]},null,8,["dataSource"]),Q,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"card content"},{"0":"actions","1":"card actions(this works only when slots.default is undefined)"}]},null,8,["dataSource"]),U,W,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"src","1":"image url of card","2":"string","3":"-"}]}),X,Y,Z,$,ss,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"component","1":"the rendered element of title","2":"string","3":"h2"}]}),as,ts,ns])],64)}}};export{ds as default,rs as meta};
