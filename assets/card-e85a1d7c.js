import{_ as m,u as j,r as l,o as _,c as v,a as s,w as t,b as a,F as b,d as n}from"./app-33be3538.js";const q=a("div",{class:"markdown-body"},[a("h1",null,"Card"),a("h2",null,"Examples"),a("p",null,"card")],-1),f={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},y=n("More info"),x=n(" Image bottom "),w=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),S=n("Login"),I=n("Register"),R=n(" Small image file "),k=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),M=n("Article"),A=n("Photography"),C=a("div",{class:"markdown-body"},[a("p",null,"image-full")],-1),T=n("More info"),N=a("div",{class:"markdown-body"},[a("p",null,"card-compact")],-1),B=n("More info"),G=a("div",{class:"markdown-body"},[a("p",null,"card with side image")],-1),P=n("More info"),F=a("div",{class:"markdown-body"},[a("p",null,"card without image")],-1),H=n("More info"),V=a("div",{class:"markdown-body"},[a("p",null,"glass card")],-1),z={class:"flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg",style:{"background-image":"url(https://placeimg.com/400/225/arch)"}},E=a("img",{class:"rounded-2xl",src:"https://placeimg.com/400/225/arch"},null,-1),L=n(" Glass "),D=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),J=n("More info"),K={class:"markdown-body"},O=a("h2",null,"Card",-1),Q=a("h3",null,"Attributes",-1),U=a("h3",null,"Slots",-1),W=a("h2",null,"CardImage",-1),X=a("h3",null,"Attributes",-1),Y=a("h2",null,"CardBody",-1),Z=a("h3",null,"Attributes",-1),$=a("p",null,[a("code",null,"-")],-1),ss=a("h2",null,"CardTitle",-1),as=a("h3",null,"Attributes",-1),ts=a("h2",null,"CardActions",-1),ns=a("h3",null,"Attributes",-1),ls=a("p",null,[a("code",null,"-")],-1),us=[],es={setup(ps,{expose:g}){return g({frontmatter:{meta:[]}}),j({meta:[]}),(os,rs)=>{const e=l("dv-button"),p=l("dv-card"),o=l("dv-card-title"),r=l("dv-card-actions"),d=l("dv-card-body"),u=l("dv-card-image"),h=l("dv-badge"),c=l("Playground"),i=l("MarkdownTable");return _(),v(b,null,[q,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100&quot;</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Top image&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100&quot;</span>&gt;</span>
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

  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100&quot;</span>&gt;</span>
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
`},{default:t(()=>[a("div",f,[s(p,{class:"dv-bgbase100",bordered:"",image:"https://placeimg.com/400/225/arch",title:"Top image",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[y]),_:1})]),_:1}),s(p,{bordered:"",class:"dv-bgbase100"},{default:t(()=>[s(d,null,{default:t(()=>[s(o,null,{default:t(()=>[x]),_:1}),w,s(r,null,{default:t(()=>[s(e,{type:"primary"},{default:t(()=>[S]),_:1}),s(e,{type:"ghost"},{default:t(()=>[I]),_:1})]),_:1})]),_:1}),s(u,{src:"https://placeimg.com/400/225/arch"})]),_:1}),s(p,{bordered:"",class:"dv-bgbase100"},{default:t(()=>[s(u,{src:"https://placeimg.com/400/225/arch"}),s(d,null,{default:t(()=>[s(o,null,{default:t(()=>[R]),_:1}),k,s(r,null,{default:t(()=>[s(h,{type:"ghost"},{default:t(()=>[M]),_:1}),s(h,{type:"ghost"},{default:t(()=>[A]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),C,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
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
`},{default:t(()=>[s(p,{class:"w-64 max-w-full",bordered:"",image:"https://placeimg.com/400/225/arch",title:"Image overlay",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.","image-full":""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[T]),_:1})]),_:1})]),_:1}),N,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-64 max-w-full dv-bgbase100&quot;</span>
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
`},{default:t(()=>[s(p,{class:"w-64 max-w-full dv-bgbase100",bordered:"",image:"https://placeimg.com/400/225/arch",title:"This card is compact",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",compact:""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[B]),_:1})]),_:1})]),_:1}),G,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100&quot;</span>
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
`},{default:t(()=>[s(p,{class:"dv-bgbase100",bordered:"",image:"https://placeimg.com/400/225/arch",title:"Horizontal",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",side:""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[P]),_:1})]),_:1})]),_:1}),F,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dv-bgbase100&quot;</span>
  <span class="hljs-attr">bordered</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;No Images&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
`},{default:t(()=>[s(p,{class:"dv-bgbase100",bordered:"",title:"No Images",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[H]),_:1})]),_:1})]),_:1}),V,s(c,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg&quot;</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;background-image:url(https://placeimg.com/400/225/arch)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">glass</span>
    <span class="hljs-attr">side</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://placeimg.com/400/225/arch&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Glass&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
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
`},{default:t(()=>[a("div",z,[s(p,{bordered:"",glass:"",side:"",image:"https://placeimg.com/400/225/arch",title:"Glass",description:"Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."},{default:t(()=>[s(u,{class:"p-6"},{default:t(()=>[E]),_:1}),s(d,null,{default:t(()=>[s(o,null,{default:t(()=>[L]),_:1}),D,s(r,null,{default:t(()=>[s(e,{type:"glass"},{default:t(()=>[J]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),a("div",K,[O,Q,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"bordered",1:"adds border to card",2:"boolean",3:"true"},{0:"side",1:"the image in figure will be on to the side",2:"boolean",3:"false"},{0:"imageFull",1:"the image in figure element will be the background",2:"boolean",3:"false"},{0:"compact",1:"applies smaller padding",2:"boolean",3:"false"},{0:"glass",1:"applies glass style",2:"boolean",3:"false"},{0:"image",1:"image url of card (works when no default solt)",2:"string",3:"-"},{0:"title",1:"title of card (works when no default solt)",2:"string",3:"-"},{0:"description",1:"description of card (works when no default solt)",2:"string",3:"-"}]},null,8,["dataSource"]),U,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{0:"default",1:"card content"},{0:"actions",1:"card actions(this works only when slots.default is undefined)"}]},null,8,["dataSource"]),W,X,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"src",1:"image url of card",2:"string",3:"-"}]}),Y,Z,$,ss,as,s(i,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"component",1:"the rendered element of title",2:"string",3:"h2"}]}),ts,ns,ls])],64)}}},hs=m(es,[["__file","/home/runner/work/daisyui-vue/daisyui-vue/docs/src/pages/components/card.md"]]);export{hs as default,us as meta};
