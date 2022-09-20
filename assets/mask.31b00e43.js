import{c as s,a as c,uu as l,u as o,uw as g,ux as h,uy as i,uz as a,F as d}from"./vendor.bfd89e19.js";var x={setup:()=>{const t=["squircle","heart","hexagon","hexagon-2","decagon","pentagon","diamond","square","circle","parallelogram","parallelogram-2","parallelogram-3","parallelogram-4","star","star-2","triangle","triangle-2","triangle-3","triangle-4"];return()=>s("div",null,[t.map(n=>s("div",{key:n},[s("p",{class:"my-2"},[c("mask-"),n]),s(l("dv-mask"),{type:n,class:"mb-8"},{default:()=>[s("img",{src:"https://picsum.photos/id/1005/200/200"},null)]})]))])}};const m=a("div",{class:"markdown-body"},[a("h1",null,"Mask"),a("h2",null,"Examples"),a("p",null,"mask")],-1),u={class:"markdown-body"},j=a("h2",null,"Mask",-1),y=a("h3",null,"Attributes",-1),w=[],b={setup(t,{expose:n}){return n({frontmatter:{meta:[]}}),o({meta:[]}),(v,f)=>{const p=x,e=l("Playground"),r=l("MarkdownTable");return g(),h(d,null,[m,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> types = [
      <span class="hljs-string">&#x27;squircle&#x27;</span>,
      <span class="hljs-string">&#x27;heart&#x27;</span>,
      <span class="hljs-string">&#x27;hexagon&#x27;</span>,
      <span class="hljs-string">&#x27;hexagon-2&#x27;</span>,
      <span class="hljs-string">&#x27;decagon&#x27;</span>,
      <span class="hljs-string">&#x27;pentagon&#x27;</span>,
      <span class="hljs-string">&#x27;diamond&#x27;</span>,
      <span class="hljs-string">&#x27;square&#x27;</span>,
      <span class="hljs-string">&#x27;circle&#x27;</span>,
      <span class="hljs-string">&#x27;parallelogram&#x27;</span>,
      <span class="hljs-string">&#x27;parallelogram-2&#x27;</span>,
      <span class="hljs-string">&#x27;parallelogram-3&#x27;</span>,
      <span class="hljs-string">&#x27;parallelogram-4&#x27;</span>,
      <span class="hljs-string">&#x27;star&#x27;</span>,
      <span class="hljs-string">&#x27;star-2&#x27;</span>,
      <span class="hljs-string">&#x27;triangle&#x27;</span>,
      <span class="hljs-string">&#x27;triangle-2&#x27;</span>,
      <span class="hljs-string">&#x27;triangle-3&#x27;</span>,
      <span class="hljs-string">&#x27;triangle-4&#x27;</span>,
    ];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        {types.map((type) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{type}</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>mask-{type}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-mask</span> <span class="hljs-attr">type</span>=<span class="hljs-string">{type}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-8&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/200/200&quot;</span> /&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">dv-mask</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:i(()=>[s(p)]),_:1}),a("div",u,[j,y,s(r,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"type","1":"the shape type of content","2":"squircle, heart, hexagon, hexagon-2, decagon, pentagon, diamond, square, circle, parallelogram, parallelogram-2, parallelogram-3, parallelogram-4, star, star-2, triangle, triangle-2, triangle-3, triangle-4","3":"squircle"}]})])],64)}}};export{b as default,w as meta};
