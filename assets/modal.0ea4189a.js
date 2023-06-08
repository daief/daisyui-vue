import{k as d,c as a,b as n,a as e,u as r,d as h,w as i,e as s,F as u,o as m}from"./app.be29fabb.js";var j={setup:()=>{const l=d({show:!1}),t=()=>l.show=!1;return()=>a("div",{class:"text-center"},[a(n("dv-button"),{onClick:()=>l.show=!0},{default:()=>[e("open modal")]}),a(n("dv-modal-base"),{open:l.show,onClose:t},{default:()=>[a(n("dv-modal-title"),{onClose:t},{default:()=>[e("Congratulations random Interner user!")]}),a(n("dv-modal-body"),null,{default:()=>[e("You've been selected for a chance to get one year of subscription to use Wikipedia for free!")]}),a(n("dv-modal-action"),null,{default:()=>[a(n("dv-button"),{onClick:t},{default:()=>[e("Yay!")]})]})]})])}};const g=s("div",{class:"markdown-body"},[s("h1",null,"Modal"),s("h2",null,"Examples"),s("p",null,"simple modal")],-1),f={class:"markdown-body"},_=s("h2",null,"ModalBase",-1),b=s("h3",null,"Attributes",-1),v=s("h3",null,"Slots",-1),y=s("h2",null,"ModalTitle",-1),w=s("h3",null,"Attributes",-1),x=s("h2",null,"ModalBody",-1),k=s("h3",null,"Attributes",-1),C=s("p",null,[s("code",null,"-")],-1),I=s("h2",null,"ModalAction",-1),M=s("h3",null,"Attributes",-1),A=s("p",null,[s("code",null,"-")],-1),E=[],N={setup(l,{expose:t}){return t({frontmatter:{meta:[]}}),r({meta:[]}),(T,Y)=>{const c=j,p=n("Playground"),o=n("MarkdownTable");return m(),h(u,null,[g,a(p,{lang:"tsx",code:`<span class="hljs-keyword">import</span> { reactive, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> state = <span class="hljs-title function_">reactive</span>({
      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
    });

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">close</span> = (<span class="hljs-params"></span>) =&gt; (state.<span class="hljs-property">show</span> = <span class="hljs-literal">false</span>);

    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> (state.show = true)}&gt;open modal<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-base</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{state.show}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-title</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>&gt;</span>
            Congratulations random Interner user!
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-title</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-body</span>&gt;</span>
            You&#x27;ve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-body</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">dv-modal-action</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{close}</span>&gt;</span>Yay!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-action</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-modal-base</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  },
};
`},{default:i(()=>[a(c)]),_:1}),s("div",f,[_,b,a(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"disableTeleport",1:"disable teleport",2:"boolean",3:"false"},{0:"container",1:"a container to mount the modal",2:"string, function, elemnt",3:"body"},{0:"open",1:"modal open status",2:"boolean",3:"false"},{0:"hideMask",1:"hide mask",2:"boolean",3:"false"},{0:"maskCloseable",1:"mask closeable",2:"boolean",3:"true"},{0:"onMaskClick",1:"mask click event handler",2:"function",3:"-"},{0:"escapeCloseable",1:"escape closeable",2:"boolean",3:"true"},{0:"onEscKeyDown",1:"esc keydown event handler",2:"function",3:"-"},{0:"onClose",1:"close event handler",2:"function",3:"-"},{0:"custom",1:"custom node render",2:"any, function",3:"-"},{0:"destroyOnClose",1:"destroy on close",2:"boolean",3:"false"}]}),v,a(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{0:"default",1:"content"},{0:"custom",1:"custom node(this will override default slot)"}]},null,8,["dataSource"]),y,w,a(o,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"closable",1:"show close icon",2:"boolean",3:"true"},{0:"onClose",1:"close event",2:"function",3:"-"}]}),x,k,C,I,M,A])],64)}}};export{N as default,E as meta};
