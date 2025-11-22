"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28231],{16451:(e,l,t)=>{t.d(l,{S:()=>r});var i=t(74038);let r=()=>{let[e]=(0,i.j)(e=>[e.useFetchInstalledPlugins]);return e(!0)}},18581:(e,l,t)=>{t.d(l,{A:()=>m});var i=t(28802),r=t(74254),o=t(11577),n=t(83034),a=t(82520),c=t(12020),d=t(74074);let s=(0,o.rU)(({css:e,token:l,responsive:t,prefixCls:i})=>({toc:e`
      a {
        line-height: 1.4 !important;
        white-space: normal !important;
      }

      .${i}-anchor {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &::before {
          display: none;
        }

        .${i}-anchor-ink {
          display: none !important;
        }

        .${i}-anchor-link-title {
          overflow: hidden;
          display: box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          word-break: break-word;
        }

        .${i}-anchor-link-title,.${i}-anchor-link {
          margin: 0 !important;
          padding-block: 0 !important;
        }

        > .${i}-anchor-link {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-inline-start: 0 !important;
        }

        .${i}-anchor-link-title-active {
          color: ${l.colorText} !important;
        }

        .${i}-anchor-link-title:not(.${i}-anchor-link-title-active) {
          color: ${l.colorTextSecondary};

          &:hover {
            color: ${l.colorText};
          }
        }
      }

      ${t.lg} {
        display: none;
      }
    `})),m=(0,n.memo)(({items:e,className:l,...t})=>{let{cx:o,styles:m}=s(),h=(0,n.useMemo)(()=>(0,d.Bc)(e),[e]);return(0,i.Y)(r.A,{affix:!1,className:o(l,m.toc),getContainer:c.i?void 0:()=>document.querySelector(`#${a.n}`),items:h,...t})})},18710:(e,l,t)=>{t.d(l,{A:()=>p,p:()=>h});var i=t(28802),r=t(99454),o=t(28726),n=t(59202),a=t(14654),c=t(11577),d=t(83034),s=t(80457);let m=(0,d.memo)(()=>(0,i.Y)(s.Flexbox,{width:"100%",children:(0,i.Y)(r.A,{rows:3,width:"100%",children:Array.from({length:12}).map((e,l)=>(0,i.FD)(o.A,{gap:24,padding:16,variant:"outlined",children:[(0,i.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,i.Y)(n.A.Avatar,{active:!0,size:40},l),(0,i.Y)(n.A.Button,{active:!0,style:{height:32,width:120}})]}),(0,i.Y)(n.A,{paragraph:{rows:4},title:!1})]},l))})})),h=(0,d.memo)(()=>{let{mobile:e}=(0,a.Q)(),l=(0,c.DP)();return(0,i.FD)(s.Flexbox,{gap:24,children:[(0,i.FD)(s.Flexbox,{gap:12,children:[!e&&(0,i.Y)(n.A,{paragraph:{rows:1},style:{width:200},title:!1}),(0,i.FD)(s.Flexbox,{align:"center",gap:16,horizontal:!0,width:"100%",children:[(0,i.Y)(n.A.Avatar,{active:!0,size:e?48:64}),(0,i.Y)(n.A.Button,{active:!0,style:{height:36,width:200}})]}),(0,i.Y)(n.A.Button,{active:!0,size:"small",style:{width:200}})]}),(0,i.FD)(s.Flexbox,{gap:12,height:54,horizontal:!0,style:{borderBottom:`1px solid ${l.colorBorder}`},children:[(0,i.Y)(n.A.Button,{}),(0,i.Y)(n.A.Button,{})]}),(0,i.FD)(s.Flexbox,{gap:48,horizontal:!e,style:e?{flexDirection:"column-reverse"}:void 0,children:[(0,i.FD)(s.Flexbox,{flex:1,gap:16,style:{overflow:"hidden"},width:"100%",children:[(0,i.Y)(n.A,{paragraph:{rows:3},title:!1}),(0,i.Y)(n.A,{paragraph:{rows:8},title:!1}),(0,i.Y)(n.A,{paragraph:{rows:8},title:!1})]}),(0,i.FD)(s.Flexbox,{gap:16,width:360,children:[(0,i.Y)(n.A,{paragraph:{rows:3},title:!1}),(0,i.Y)(n.A,{paragraph:{rows:4},title:!1})]})]})]})}),p=m},28231:(e,l,t)=>{t.r(l),t.d(l,{DesktopMcpPage:()=>ex,MobileMcpPage:()=>eg});var i=t(28802),r=t(83034),o=t(80457),n=t(27697),a=t(68398),c=t(31433),d=t(16451),s=t(96477),m=t(259),h=t(61451),p=t(79532),v=t(41309),u=t(74074),x=t(14654),g=t(79609),A=t(45769),Y=t(18503),b=t(5973),y=t(41488),f=t(38858),F=t(81490),w=t(64861),D=t(12389),k=t(28755),z=t(11577),$=t(20966),B=t(59121),S=t(30210),X=t(74038),M=t(68172);let P=(0,z.rU)(({css:e})=>({button:e`
    button {
      width: 100%;
    }
  `})),T=(0,r.memo)(()=>{let{t:e}=(0,B.Bd)(["discover","plugin"]),{identifier:l}=(0,a.cZ)(),{styles:t}=P(),[n,c]=(0,r.useState)(!1),[d,s,m]=(0,X.j)(e=>[M.w.isPluginInstalled(l)(e),e.installMCPPlugin,e.uninstallMCPPlugin]),h=async()=>{l&&(c(!0),await s(l),c(!1))};return d?(0,i.FD)(o.Flexbox,{gap:8,horizontal:!0,children:[(0,i.Y)(k.Ay,{block:!0,className:t.button,disabled:n,size:"large",type:"default",children:e("plugins.installed")}),(0,i.Y)(k.Ay,{icon:(0,i.Y)(D.default,{icon:$.A,size:20}),loading:n,onClick:async()=>{c(!0),await m(l),c(!1)},size:"large",style:{minWidth:45},styles:{icon:{height:20}}})]}):(0,i.FD)(i.FK,{children:[(0,i.Y)(k.Ay,{block:!0,className:t.button,loading:n,onClick:h,size:"large",type:"primary",children:e("plugins.install")}),(0,i.Y)(S.A,{identifier:l})]})});var C=t(80122),I=t(68120),N=t(56623),L=t(40586);let O={hybrid:I.A,local:N.A,remote:L.A},Z=(0,r.memo)(()=>{let{t:e}=(0,B.Bd)("discover"),{connectionType:l}=(0,a.cZ)();return l&&O[l]?(0,i.Y)(C.A,{description:e(`mcp.details.connectionType.${l}.desc`),message:(0,i.FD)(o.Flexbox,{align:"center",gap:6,horizontal:!0,children:[(0,i.Y)(D.default,{icon:O[l],size:20}),e(`mcp.details.connectionType.${l}.title`)]}),showIcon:!1}):null});var U=t(89196),_=t(4001),V=t(81597),q=t(28726),j=t(67072),H=t(75431);let Q=(0,z.rU)(({css:e,token:l})=>({desc:e`
      flex: 1;
      margin: 0 !important;
      font-size: 14px !important;
      color: ${l.colorTextSecondary};
    `,title:e`
      margin: 0 !important;
      font-size: 14px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${l.colorLink};
      }
    `})),E=(0,r.memo)(({name:e,icon:l,description:t,identifier:r})=>{let{styles:n}=Q();return(0,i.FD)(q.A,{gap:12,horizontal:!0,padding:12,variant:"outlined",children:[(0,i.Y)(j.A,{avatar:l,size:40,style:{flex:"none"}}),(0,i.FD)(o.Flexbox,{flex:1,gap:6,style:{overflow:"hidden"},children:[(0,i.Y)(H.A,{as:"h2",className:n.title,ellipsis:!0,children:e}),(0,i.Y)(H.A,{as:"p",className:n.desc,ellipsis:{rows:2},children:t})]})]},r)}),K=(0,r.memo)(()=>{let{t:e}=(0,B.Bd)("discover"),{related:l,category:t}=(0,a.cZ)();return(0,i.FD)(o.Flexbox,{gap:16,children:[(0,i.Y)(V.A,{more:e("mcp.details.related.more"),moreLink:U.A.stringifyUrl({query:{category:t},url:"/discover/mcp"}),children:e("mcp.details.related.listTitle")}),(0,i.Y)(o.Flexbox,{gap:8,children:l?.map((e,l)=>{let t=(0,_.A)("/discover/mcp",e.identifier);return(0,i.Y)(n.N_,{style:{color:"inherit",overflow:"hidden"},to:t,children:(0,i.Y)(E,{...e})},l)})})]})});var R=t(24499),G=t(40742);let W=(0,r.memo)(()=>{let{t:e}=(0,B.Bd)("discover"),{pathname:l}=(0,n.zy)(),t=U.A.stringifyUrl({query:{activeTab:h.lX.Deployment},url:l}),{deploymentOptions:r=[],identifier:c}=(0,a.cZ)(),d=(0,R.Hx)(r);return(0,i.FD)(o.Flexbox,{gap:16,children:[(0,i.Y)(V.A,{more:e("mcp.details.sidebar.moreServerConfig"),moreLink:t,children:e("mcp.details.sidebar.serverConfig")}),(0,i.Y)(G.A,{connection:d?.connection,identifier:c,lite:!0})]})});var J=t(82487),ee=t(18581);let el=(0,r.memo)(()=>{let{t:e}=(0,B.Bd)("discover"),{toc:l=[]}=(0,u.Mu)(),{activeTab:t=h.lX.Overview}=(0,s.I)(),{deploymentOptions:n=[],tools:c=[],prompts:d=[]}=(0,a.cZ)(),m=(0,r.useMemo)(()=>n?.map((l,t)=>({href:`#deployment-${t}`,key:`deployment-${t}`,level:2,title:e("mcp.details.deployment.installation",{method:(0,J.A)(l.installationMethod)})})),[n,e]),p=(0,r.useMemo)(()=>[{href:"#tools",key:"tools",level:2,title:e("mcp.details.schema.tools.title")},...c.map(e=>({href:`#tools-${e.name}`,key:`tools-${e.name}`,level:3,title:e.name})),{href:"#prompts",key:"prompts",level:2,title:e("mcp.details.schema.prompts.title")},...d.map(e=>({href:`#prompts-${e.name}`,key:`prompts-${e.name}`,level:3,title:e.name})),{href:"#resources",key:"resources",level:2,title:e("mcp.details.schema.resources.title")}].filter(Boolean),[c,d,e]),v=(0,r.useMemo)(()=>{switch(t){case h.lX.Overview:return l;case h.lX.Deployment:return m;case h.lX.Schema:return p;default:return}},[t,l,m,p]);return v&&0!==v.length?(0,i.FD)(o.Flexbox,{gap:16,children:[(0,i.Y)(V.A,{children:e("mcp.details.sidebar.toc")}),(0,i.Y)(ee.A,{items:v})]}):null}),et=(0,r.memo)(({mobile:e})=>{let{activeTab:l=h.lX.Overview}=(0,s.I)();if(e){if(l!==h.lX.Overview)return;return(0,i.FD)(o.Flexbox,{gap:32,children:[(0,i.Y)(Z,{}),(0,i.Y)(W,{})]})}return(0,i.FD)(F.A,{flex:"none",gap:32,hideScrollBar:!0,size:4,style:{maxHeight:"calc(100vh - 76px)",paddingBottom:24,position:"sticky",top:0},width:360,children:[w.xl?(0,i.Y)(o.Flexbox,{children:(0,i.Y)(T,{})}):(0,i.Y)(Z,{}),l!==h.lX.Deployment&&(0,i.Y)(W,{}),(0,i.Y)(el,{}),![h.lX.Overview,h.lX.Schema,h.lX.Related].includes(l)&&(0,i.Y)(K,{})]})});var ei=t(46956);let er=(0,r.memo)(()=>{let{t:e}=(0,B.Bd)("discover"),{related:l,category:t}=(0,a.cZ)();return(0,i.FD)(o.Flexbox,{gap:16,children:[(0,i.Y)(V.A,{more:e("mcp.details.related.more"),moreLink:U.A.stringifyUrl({query:{category:t},url:"/discover/mcp"}),children:e("mcp.details.related.listTitle")}),(0,i.Y)(ei.A,{data:l})]})});var eo=t(3136),en=t(6563),ea=t(57407),ec=t(74584),ed=t(72947),es=t(53004),em=t(94201);let eh=(0,r.memo)(()=>{let e=(0,z.DP)(),{t:l}=(0,B.Bd)("discover"),{versions:t}=(0,a.cZ)(),r=(0,ed.a)();return(0,i.FD)(o.Flexbox,{gap:16,children:[(0,i.Y)(V.A,{children:l("mcp.details.versions.title")}),(0,i.Y)(q.A,{variant:"outlined",children:(0,i.Y)(es.A,{columns:[{dataIndex:"version",render:(e,t)=>(0,i.Y)(ec.A,{href:U.A.stringifyUrl({query:{version:t.version},url:r}),style:{color:"inherit"},children:(0,i.FD)(o.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,i.Y)("code",{style:{fontSize:14},children:t.version}),t.isLatest&&(0,i.Y)(eo.A,{color:"info",children:l("mcp.details.versions.table.isLatest")})]})}),title:l("mcp.details.versions.table.version")},{dataIndex:"isValidated",render:(l,t)=>(0,i.Y)(D.default,{color:t.isValidated?e.colorSuccess:e.colorTextDescription,icon:t.isValidated?en.A:ea.A}),title:l("mcp.details.versions.table.isValidated")},{align:"end",dataIndex:"createdAt",render:(e,l)=>(0,i.Y)(em.A,{date:l.createdAt,showPrefix:!1}),title:l("mcp.details.versions.table.publishAt")}],dataSource:t,rowKey:"version",size:"middle"})})]})}),ep=(0,r.memo)(({mobile:e})=>{let{mobile:l=e}=(0,x.Q)(),[t,r]=(0,f.ZA)("activeTab",{clearOnDefault:!0,defaultValue:h.lX.Overview});return(0,i.FD)(o.Flexbox,{gap:24,children:[(0,i.Y)(A.A,{activeTab:t,mobile:l,noSettings:!0,setActiveTab:r}),(0,i.FD)(o.Flexbox,{gap:48,horizontal:!l,style:l?{flexDirection:"column-reverse"}:void 0,children:[(0,i.FD)(o.Flexbox,{flex:1,style:{overflow:"hidden"},width:"100%",children:[t===h.lX.Overview&&(0,i.Y)(Y.A,{}),t===h.lX.Deployment&&(0,i.Y)(g.A,{mobile:l}),t===h.lX.Schema&&(0,i.Y)(b.A,{}),t===h.lX.Related&&(0,i.Y)(er,{}),t===h.lX.Score&&(0,i.Y)(y.A,{}),t===h.lX.Version&&(0,i.Y)(eh,{})]}),(0,i.Y)(et,{mobile:l})]})]})});var ev=t(18710);let eu=(0,r.memo)(({mobile:e})=>{let{slug:l}=(0,n.LG)(),{version:t}=(0,s.I)(),{data:r,isLoading:x}=(0,m.Q)(e=>e.useFetchMcpDetail)({identifier:l,version:t});return((0,d.S)(),x)?(0,i.Y)(ev.p,{}):r?(0,i.Y)(u.YB,{children:(0,i.FD)(a.p_,{config:r,children:[!e&&(0,i.Y)(v.A,{identifier:l,tab:h.bz.Mcp}),(0,i.FD)(o.Flexbox,{gap:16,children:[(0,i.Y)(c.A,{mobile:e}),(0,i.Y)(ep,{mobile:e})]})]})}):(0,i.Y)(p.A,{})}),ex=(0,r.memo)(()=>(0,i.Y)(eu,{mobile:!1})),eg=(0,r.memo)(()=>(0,i.Y)(eu,{mobile:!0}))},41309:(e,l,t)=>{t.d(l,{A:()=>p});var i=t(28802),r=t(20659),o=t(50436),n=t(11577),a=t(83034),c=t(59121),d=t(80457),s=t(4001),m=t(74584),h=t(61451);let p=(0,a.memo)(({tab:e,identifier:l})=>{let t=(0,n.DP)(),{t:a}=(0,c.Bd)("discover");return(0,i.Y)(o.A,{items:[{title:(0,i.Y)(m.A,{href:"/discover",children:"Discover"})},{title:(0,i.Y)(m.A,{href:(0,s.A)("/discover",e),children:e===h.bz.Mcp?"MCP Servers":a(`tab.${e}`)})},{title:(0,i.FD)(d.Flexbox,{align:"center",gap:4,horizontal:!0,style:{color:t.colorTextSecondary},children:[l,(0,i.Y)(r.A,{content:l,size:{blockSize:22,size:14}})]})}]})})},72947:(e,l,t)=>{t.d(l,{a:()=>r});var i=t(27697);let r=()=>(0,i.zy)().pathname},74584:(e,l,t)=>{t.d(l,{A:()=>a});var i=t(28802),r=t(83034),o=t(27697);let n=(0,r.memo)(({href:e,to:l,...t})=>(0,i.Y)(o.N_,{...t,to:e||l||"/"}));n.displayName="Link";let a=n},79532:(e,l,t)=>{t.d(l,{A:()=>a});var i=t(28802),r=t(83034),o=t(59121),n=t(80457);let a=(0,r.memo)(()=>{let{t:e}=(0,o.Bd)("error",{keyPrefix:"notFound"});return(0,i.Y)(n.Flexbox,{align:"center",height:"100%",justify:"center",style:{minHeight:400},width:"100%",children:(0,i.Y)("h2",{children:e("title")})})})},82520:(e,l,t)=>{t.d(l,{g:()=>i,n:()=>r});let i=1440,r="discover-scroll"},96477:(e,l,t)=>{t.d(l,{I:()=>n});var i=t(50718),r=t(89196),o=t(83034);let n=()=>{let e=(0,i.useSearchParams)();return(0,o.useMemo)(()=>r.A.parse(e.toString()),[e])}}}]);