import{_ as e}from"./app.c6fd2e41.js";import{r as o,c as s,u as h,z as u,A as j,B as x,F as i,C as l,D as d}from"./vendor.6a4aa954.js";var m={setup:()=>{const a=o({show:!1,val:"sm"}),n=e.useMediaParse({default:999,lg:2,"2xl":6}),t=e.useMedias(["xs","sm","md","lg","xl","2xl"]);return()=>s("div",{class:"text-center"},[n.value+"",s("hr",null,null),t.value+"",s("hr",null,null),s("input",{value:a.val,onInput:p=>a.val=p.target.value},null)])}};const g=l("div",{class:"markdown-body"},[l("h1",null,"Demo for development")],-1),v=l("div",{class:"markdown-body"},null,-1),k=[],b={setup(a,{expose:n}){return n({frontmatter:{meta:[]}}),h({meta:[]}),(f,_)=>{const c=m,r=u("Playground");return d(),j(i,null,[g,s(r,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { reactive, watch, toRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { _ } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;

<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> x <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> state = <span class="hljs-title function_">reactive</span>({
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">val</span>: <span class="hljs-string">&#x27;sm&#x27;</span>,
    });

    <span class="hljs-keyword">const</span> res = _.<span class="hljs-title function_">useMediaParse</span>({
      <span class="hljs-attr">default</span>: <span class="hljs-number">999</span>,
      <span class="hljs-attr">lg</span>: <span class="hljs-number">2</span>,
      <span class="hljs-string">&#x27;2xl&#x27;</span>: <span class="hljs-number">6</span>,
    });

    <span class="hljs-keyword">const</span> res2 = _.<span class="hljs-title function_">useMedias</span>([<span class="hljs-string">&#x27;xs&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>, <span class="hljs-string">&#x27;xl&#x27;</span>, <span class="hljs-string">&#x27;2xl&#x27;</span>]);

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
        {res.value + &#x27;&#x27;}
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> /&gt;</span>
        {res2.value + &#x27;&#x27;}
        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
          <span class="hljs-attr">value</span>=<span class="hljs-string">{state.val}</span>
          <span class="hljs-attr">onInput</span>=<span class="hljs-string">{(e)</span> =&gt;</span> (state.val = e.target.value)}
        /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:x(()=>[s(c)]),_:1}),v],64)}}};export{b as default,k as meta};
