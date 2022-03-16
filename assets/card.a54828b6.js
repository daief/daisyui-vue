import{u as j,y as l,z as m,c as s,C as t,B as a,F as _,A as v,a as n}from"./vendor.f4860f7b.js";const b=a("div",{class:"markdown-body"},[a("h1",null,"Card"),a("h2",null,"Examples"),a("p",null,"card")],-1),f={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},q=n("More info"),y=n(" Image bottom "),x=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),S=n("Login"),w=n("Register"),I=n(" Small image file "),R=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),k=n("Article"),M=n("Photography"),A=a("div",{class:"markdown-body"},[a("p",null,"image-full")],-1),C={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},T=n("More info"),B=a("div",{class:"markdown-body"},[a("p",null,"card-compact")],-1),N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},G=n("More info"),P=a("div",{class:"markdown-body"},[a("p",null,"card with side image")],-1),z=n("More info"),F=a("div",{class:"markdown-body"},[a("p",null,"card without image")],-1),H=n("More info"),V=a("div",{class:"markdown-body"},[a("p",null,"glass card")],-1),E={class:"flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg",style:{"background-image":"url(https://picsum.photos/id/314/1000/300)"}},L=a("img",{class:"rounded-2xl",src:"https://picsum.photos/id/1005/300/200"},null,-1),D=n(" Glass "),J=a("p",null," Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. ",-1),K=n("More info"),O={class:"markdown-body"},Q=a("h2",null,"Card",-1),U=a("h3",null,"Attributes",-1),W=a("h3",null,"Slots",-1),X=a("h2",null,"CardImage",-1),Y=a("h3",null,"Attributes",-1),Z=a("h2",null,"CardBody",-1),$=a("h3",null,"Attributes",-1),ss=a("p",null,[a("code",null,"-")],-1),as=a("h2",null,"CardTitle",-1),ts=a("h3",null,"Attributes",-1),ns=a("h2",null,"CardActions",-1),ls=a("h3",null,"Attributes",-1),es=a("p",null,[a("code",null,"-")],-1),us={setup(ps,{expose:g}){return g({frontmatter:{meta:[]}}),j({meta:[]}),(os,ds)=>{const e=l("dv-button"),p=l("dv-card"),o=l("dv-card-title"),d=l("dv-card-actions"),r=l("dv-card-body"),u=l("dv-card-image"),h=l("dv-badge"),i=l("Playground"),c=l("MarkdownTable");return v(),m(_,null,[b,s(i,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/400/250&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Top image&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span>&gt;</span>
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
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/400/250&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span> <span class="hljs-attr">bordered</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/60/40&quot;</span> /&gt;</span>
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
`},{default:t(()=>[a("div",f,[s(p,{bordered:"",image:"https://picsum.photos/id/1005/400/250",title:"Top image",description:`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[q]),_:1})]),_:1}),s(p,{bordered:""},{default:t(()=>[s(r,null,{default:t(()=>[s(o,null,{default:t(()=>[y]),_:1}),x,s(d,null,{default:t(()=>[s(e,{type:"primary"},{default:t(()=>[S]),_:1}),s(e,{type:"ghost"},{default:t(()=>[w]),_:1})]),_:1})]),_:1}),s(u,{src:"https://picsum.photos/id/1005/400/250"})]),_:1}),s(p,{bordered:""},{default:t(()=>[s(u,{src:"https://picsum.photos/id/1005/60/40"}),s(r,null,{default:t(()=>[s(o,null,{default:t(()=>[I]),_:1}),R,s(d,null,{default:t(()=>[s(h,{type:"ghost"},{default:t(()=>[k]),_:1}),s(h,{type:"ghost"},{default:t(()=>[M]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),A,s(i,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/400/250&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Image overlay&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
    <span class="hljs-attr">image-full</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",C,[s(p,{bordered:"",image:"https://picsum.photos/id/1005/400/250",title:"Image overlay",description:`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`,"image-full":""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[T]),_:1})]),_:1})])]),_:1}),B,s(i,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/400/250&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;This card is compact&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
    <span class="hljs-attr">compact</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",N,[s(p,{bordered:"",image:"https://picsum.photos/id/1005/400/250",title:"This card is compact",description:`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`,compact:""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[G]),_:1})]),_:1})])]),_:1}),P,s(i,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/400/250&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Horizontal&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
    <span class="hljs-attr">side</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",null,[s(p,{bordered:"",image:"https://picsum.photos/id/1005/400/250",title:"Horizontal",description:`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`,side:""},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[z]),_:1})]),_:1})])]),_:1}),F,s(i,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;No Images&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>More info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
`},{default:t(()=>[a("div",null,[s(p,{bordered:"",title:"No Images",description:`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`},{actions:t(()=>[s(e,{type:"secondary"},{default:t(()=>[H]),_:1})]),_:1})])]),_:1}),V,s(i,{code:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center w-full px-4 py-10 bg-cover text-white rounded-lg&quot;</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;background-image:url(https://picsum.photos/id/314/1000/300)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-card</span>
    <span class="hljs-attr">bordered</span>
    <span class="hljs-attr">glass</span>
    <span class="hljs-attr">side</span>
    <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/300/200&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Glass&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dv-card-image</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-2xl&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/300/200&quot;</span> /&gt;</span>
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
`},{default:t(()=>[a("div",E,[s(p,{bordered:"",glass:"",side:"",image:"https://picsum.photos/id/1005/300/200",title:"Glass",description:`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
 necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`},{default:t(()=>[s(u,{class:"p-6"},{default:t(()=>[L]),_:1}),s(r,null,{default:t(()=>[s(o,null,{default:t(()=>[D]),_:1}),J,s(d,null,{default:t(()=>[s(e,{type:"glass"},{default:t(()=>[K]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),a("div",O,[Q,U,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"bordered","1":"adds border to card","2":"boolean","3":"true"},{"0":"side","1":"the image in figure will be on to the side","2":"boolean","3":"false"},{"0":"imageFull","1":"the image in figure element will be the background","2":"boolean","3":"false"},{"0":"compact","1":"applies smaller padding","2":"boolean","3":"false"},{"0":"glass","1":"applies glass style","2":"boolean","3":"false"},{"0":"image","1":"image url of card (works when no default solt)","2":"string","3":"-"},{"0":"title","1":"title of card (works when no default solt)","2":"string","3":"-"},{"0":"description","1":"description of card (works when no default solt)","2":"string","3":"-"}]},null,8,["dataSource"]),W,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{"0":"default","1":"card content"},{"0":"actions","1":"card actions(this works only when slots.default is undefined)"}]},null,8,["dataSource"]),X,Y,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"src","1":"image url of card","2":"string","3":"-"}]}),Z,$,ss,as,ts,s(c,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"component","1":"the rendered element of title","2":"string","3":"h2"}]}),ns,ls,es])],64)}}};export{us as default};
