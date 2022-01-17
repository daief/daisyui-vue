import{c as s,o as p,y as o,z as g,a as b,F as j,u as f,q as y,s as c,x as a,A as v}from"./vendor.dede1e1c.js";import{_}from"./app.dd0ba5c2.js";var C={setup:()=>{const n=[{title:"",dataIndex:"num",fixed:"left",width:20},{title:"name",dataIndex:"name"},{title:"job",dataIndex:"job"},{title:"favorite color",dataIndex:"favoriteColor"}],l=[{num:1,name:"Cy Ganderton",job:"Quality Control Specialist",favoriteColor:"Blue"},{num:2,name:"Hart Hagerty",job:"Desktop Support Technician",favoriteColor:"Purple"},{num:3,name:"Brice Swyre",job:"Tax Accountant",favoriteColor:"Red"},{num:4,name:"Marjy Ferencz",job:"Office Assistant I",favoriteColor:"Crimson"}];return()=>s(p("dv-table"),{columns:n,dataSource:l},null)}},w={setup:()=>({columns:[{title:"",dataIndex:"num",fixed:"left",width:20},{title:"name",dataIndex:"name"},{title:"job",dataIndex:"job"},{title:"favorite color",dataIndex:"favoriteColor"}],dataSource:[{num:1,name:"Cy Ganderton",job:"Quality Control Specialist",favoriteColor:"Blue"},{num:2,name:"Hart Hagerty",job:"Desktop Support Technician",favoriteColor:"Purple"},{num:3,name:"Brice Swyre",job:"Tax Accountant",favoriteColor:"Red"},{num:4,name:"Marjy Ferencz",job:"Office Assistant I",favoriteColor:"Crimson"}]})};function S(n,l,t,h,i,u){const r=p("dv-table");return o(),g(r,{columns:n.columns,dataSource:n.dataSource,zebra:"",compact:""},null,8,["columns","dataSource"])}var I=_(w,[["render",S]]),k={setup:()=>{const n=[{title:"",dataIndex:"num",fixed:"left",width:20,render:t=>s("strong",null,[t])},{title:"name",dataIndex:"name"},{title:"job",dataIndex:"job"},{title:()=>s(j,null,[s(p("dv-icon-color"),{size:"1.5em",style:"margin-right: 6px"},null),b("favorite color")]),dataIndex:"favoriteColor",render:t=>s("span",{style:{color:t}},[t])}],l=[{num:1,name:"Cy Ganderton",job:"Quality Control Specialist",favoriteColor:"Blue"},{num:2,name:"Hart Hagerty",job:"Desktop Support Technician",favoriteColor:"Purple"},{num:3,name:"Brice Swyre",job:"Tax Accountant",favoriteColor:"Red"},{num:4,name:"Marjy Ferencz",job:"Office Assistant I",favoriteColor:"Crimson"}];return()=>s(p("dv-table"),{columns:n,dataSource:l},null)}};const z=a("div",{class:"markdown-body"},[a("h1",null,"Table"),a("h2",null,"Examples"),a("p",null,"table")],-1),T=a("div",{class:"markdown-body"},[a("p",null,"table-zebra & table-compact")],-1),B=a("div",{class:"markdown-body"},[a("p",null,"table-jsx")],-1),A={class:"markdown-body"},H=a("h2",null,"Table",-1),q=a("h3",null,"Attributes",-1),F=v(`<h3>ITableColumn</h3><pre><code class="hljs language-ts"><span class="hljs-keyword">interface</span> ITableColumn&lt;T = unknown&gt; {
  title?: <span class="hljs-built_in">string</span> | (<span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">any</span>);
  dataIndex?: <span class="hljs-built_in">string</span>;
  key?: <span class="hljs-built_in">string</span>;
  fixed?: <span class="hljs-string">&#39;left&#39;</span> | <span class="hljs-string">&#39;right&#39;</span>;
  render?: <span class="hljs-function">(<span class="hljs-params">text: <span class="hljs-built_in">string</span>, record: T, index: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">any</span>;
}
</code></pre>`,2),D={setup(n,{expose:l}){return l({frontmatter:{meta:[]}}),f({meta:[]}),(i,u)=>{const r=C,e=p("Playground"),x=I,d=k,m=p("MarkdownTable");return o(),y(j,null,[z,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;&#x27;</span>,
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;num&#x27;</span>,
        <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
        <span class="hljs-attr">width</span>: <span class="hljs-number">20</span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;job&#x27;</span>,
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;job&#x27;</span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;favorite color&#x27;</span>,
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;favoriteColor&#x27;</span>,
      },
    ];

    <span class="hljs-keyword">const</span> dataSource = [
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Cy Ganderton&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Quality Control Specialist&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Blue&#x27;</span>,
      },
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Hart Hagerty&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Desktop Support Technician&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Purple&#x27;</span>,
      },
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Brice Swyre&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Tax Accountant&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Red&#x27;</span>,
      },
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Marjy Ferencz&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Office Assistant I&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Crimson&#x27;</span>,
      },
    ];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-table</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">dataSource</span>=<span class="hljs-string">{dataSource}</span> /&gt;</span></span>;
  },
};
`},{default:c(()=>[s(r)]),_:1}),T,s(e,{lang:"html",code:`<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dv-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:dataSource</span>=<span class="hljs-string">&quot;dataSource&quot;</span> <span class="hljs-attr">zebra</span> <span class="hljs-attr">compact</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;tsx&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> columns = [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;&#x27;</span>,
          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;num&#x27;</span>,
          <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
          <span class="hljs-attr">width</span>: <span class="hljs-number">20</span>,
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;job&#x27;</span>,
          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;job&#x27;</span>,
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;favorite color&#x27;</span>,
          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;favoriteColor&#x27;</span>,
        },
      ];

      <span class="hljs-keyword">const</span> dataSource = [
        {
          <span class="hljs-attr">num</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Cy Ganderton&#x27;</span>,
          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Quality Control Specialist&#x27;</span>,
          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Blue&#x27;</span>,
        },
        {
          <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Hart Hagerty&#x27;</span>,
          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Desktop Support Technician&#x27;</span>,
          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Purple&#x27;</span>,
        },
        {
          <span class="hljs-attr">num</span>: <span class="hljs-number">3</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Brice Swyre&#x27;</span>,
          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Tax Accountant&#x27;</span>,
          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Red&#x27;</span>,
        },
        {
          <span class="hljs-attr">num</span>: <span class="hljs-number">4</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Marjy Ferencz&#x27;</span>,
          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Office Assistant I&#x27;</span>,
          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Crimson&#x27;</span>,
        },
      ];
      <span class="hljs-keyword">return</span> {
        columns,
        dataSource,
      };
    },
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
`},{default:c(()=>[s(x)]),_:1}),B,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;&#x27;</span>,
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;num&#x27;</span>,
        <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
        <span class="hljs-attr">width</span>: <span class="hljs-number">20</span>,
        <span class="hljs-attr">render</span>: <span class="hljs-function">(<span class="hljs-params">num</span>) =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{num}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span></span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;name&#x27;</span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;job&#x27;</span>,
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;job&#x27;</span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-function">() =&gt;</span> (
          <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-color</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 6px&quot;</span> /&gt;</span>
            favorite color
          <span class="hljs-tag">&lt;/&gt;</span></span>
        ),
        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;favoriteColor&#x27;</span>,
        <span class="hljs-attr">render</span>: <span class="hljs-function">(<span class="hljs-params">color</span>) =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">color</span> }}&gt;</span>{color}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>,
      },
    ];

    <span class="hljs-keyword">const</span> dataSource = [
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Cy Ganderton&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Quality Control Specialist&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Blue&#x27;</span>,
      },
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Hart Hagerty&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Desktop Support Technician&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Purple&#x27;</span>,
      },
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Brice Swyre&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Tax Accountant&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Red&#x27;</span>,
      },
      {
        <span class="hljs-attr">num</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Marjy Ferencz&#x27;</span>,
        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Office Assistant I&#x27;</span>,
        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Crimson&#x27;</span>,
      },
    ];
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-table</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">dataSource</span>=<span class="hljs-string">{dataSource}</span> /&gt;</span></span>;
  },
};
`},{default:c(()=>[s(d)]),_:1}),a("div",A,[H,q,s(m,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"columns","1":"table columns config","2":"ITableColumn[]","3":"-"},{"0":"dataSource","1":"table data source","2":"array","3":"-"},{"0":"compact","1":"makes table more compact","2":"boolean","3":"-"},{"0":"zebra","1":"makes table rows zebra","2":"boolean","3":"-"}]}),F])],64)}}};export{D as default};
