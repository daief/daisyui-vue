import{c as s,s as p,x as o,y as m,a as g,z as b,u as f,A as _,B as c,C as l,D as y}from"./vendor.28af8f46.js";import{_ as C}from"./app.a309a3f5.js";var v={setup:()=>{const a=[{title:"",dataIndex:"num",fixed:"left",width:20},{title:"name",dataIndex:"name"},{title:"job",dataIndex:"job"},{title:"favorite color",dataIndex:"favoriteColor"}],n=[{num:1,name:"Cy Ganderton",job:"Quality Control Specialist",favoriteColor:"Blue"},{num:2,name:"Hart Hagerty",job:"Desktop Support Technician",favoriteColor:"Purple"},{num:3,name:"Brice Swyre",job:"Tax Accountant",favoriteColor:"Red"},{num:4,name:"Marjy Ferencz",job:"Office Assistant I",favoriteColor:"Crimson"}];return()=>s(p("dv-table"),{columns:a,dataSource:n},null)}},S={setup:()=>({columns:[{title:"",dataIndex:"num",fixed:"left",width:20},{title:"name",dataIndex:"name"},{title:"job",dataIndex:"job"},{title:"favorite color",dataIndex:"favoriteColor"}],dataSource:[{num:1,name:"Cy Ganderton",job:"Quality Control Specialist",favoriteColor:"Blue"},{num:2,name:"Hart Hagerty",job:"Desktop Support Technician",favoriteColor:"Purple"},{num:3,name:"Brice Swyre",job:"Tax Accountant",favoriteColor:"Red"},{num:4,name:"Marjy Ferencz",job:"Office Assistant I",favoriteColor:"Crimson"}]})};function I(a,n,t,j,h,i){const r=p("dv-table");return o(),m(r,{columns:a.columns,dataSource:a.dataSource,zebra:"",compact:""},null,8,["columns","dataSource"])}var w=C(S,[["render",I]]),k={setup:()=>{const a=[{title:"",dataIndex:"num",fixed:"left",width:20,render:t=>s("strong",null,[t])},{title:"name",dataIndex:"name"},{title:"job",dataIndex:"job"},{title:()=>s(b,null,[s(p("dv-icon-color"),{size:"1.5em",style:"margin-right: 6px"},null),g("favorite color")]),dataIndex:"favoriteColor",render:t=>s("span",{style:{color:t}},[t])}],n=[{num:1,name:"Cy Ganderton",job:"Quality Control Specialist",favoriteColor:"Blue"},{num:2,name:"Hart Hagerty",job:"Desktop Support Technician",favoriteColor:"Purple"},{num:3,name:"Brice Swyre",job:"Tax Accountant",favoriteColor:"Red"},{num:4,name:"Marjy Ferencz",job:"Office Assistant I",favoriteColor:"Crimson"}];return()=>s(p("dv-table"),{columns:a,dataSource:n},null)}};const T={class:"markdown-body"},B=l("h1",null,"Table",-1),z=l("h2",null,"Examples",-1),A=l("p",null,"table",-1),H=l("p",null,"table-zebra & table-compact",-1),q=l("p",null,"table-jsx",-1),M=l("h2",null,"Table",-1),P=l("h3",null,"Attributes",-1),D=y(`<h3>ITableColumn</h3><pre><code class="hljs language-ts"><span class="hljs-keyword">interface</span> ITableColumn&lt;T = unknown&gt; {
  title?: <span class="hljs-built_in">string</span> | (<span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">any</span>);
  dataIndex?: <span class="hljs-built_in">string</span>;
  key?: <span class="hljs-built_in">string</span>;
  fixed?: <span class="hljs-string">&#39;left&#39;</span> | <span class="hljs-string">&#39;right&#39;</span>;
  render?: <span class="hljs-function">(<span class="hljs-params">text: <span class="hljs-built_in">string</span>, record: T, index: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">any</span>;
}
</code></pre>`,2),O={setup(a,{expose:n}){return n({frontmatter:{meta:[]}}),f({meta:[]}),(h,i)=>{const r=v,e=p("Playground"),u=w,x=k,d=p("MarkdownTable");return o(),_("div",T,[B,z,A,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:c(()=>[s(r)]),_:1}),H,s(e,{lang:"html",code:`<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
`},{default:c(()=>[s(u)]),_:1}),q,s(e,{lang:"tsx",code:`<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
`},{default:c(()=>[s(x)]),_:1}),M,P,s(d,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{"0":"columns","1":"table columns config","2":"ITableColumn[]","3":"-"},{"0":"dataSource","1":"table data source","2":"array","3":"-"},{"0":"compact","1":"makes table more compact","2":"boolean","3":"-"},{"0":"zebra","1":"makes table rows zebra","2":"boolean","3":"-"}]}),D])}}};export{O as default};
