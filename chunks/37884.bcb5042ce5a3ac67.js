"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37884],{18328:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(28802),o=n(92619),l=n(84663),a=n(11577),r=n(83034);let c=(0,a.rU)(({css:e,token:t,prefixCls:n})=>({compact:e`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,menu:e`
    flex: 1;
    border: none !important;
    background: transparent;

    .${n}-menu-item-divider {
      margin-block: 0.125rem;
      border-color: ${t.colorFillTertiary};

      &:first-child {
        margin-block-start: 0;
      }

      &:last-child {
        margin-block-end: 0;
      }
    }

    .${n}-menu-item, .${n}-menu-submenu-title {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      height: unset;
      min-height: 2rem;
      padding-block: 0.375rem;
      padding-inline: 0.75rem;

      line-height: 2;

      .anticon + .${n}-menu-title-content {
        margin-inline-start: 0;
      }
    }

    .${n}-menu-item-selected {
      .${n}-menu-item-icon svg {
        color: ${t.colorText};
      }
    }

    .${n}-menu-item-icon svg {
      color: ${t.colorTextSecondary};
    }

    .${n}-menu-title-content {
      flex: 1;
    }
  `})),d=(0,r.memo)(({className:e,selectable:t=!1,compact:n,...a})=>{let{cx:r,styles:d,theme:s}=c();return(0,i.Y)(o.Ay,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:s.borderRadius,itemColor:t?s.colorTextSecondary:s.colorText,itemHoverBg:s.colorFillTertiary,itemMarginBlock:4*!n,itemMarginInline:4*!n,itemSelectedBg:s.colorFillSecondary,paddingXS:-8}}},children:(0,i.Y)(l.A,{className:r(d.menu,n&&d.compact,e),mode:"vertical",selectable:t,...a})})})},21041:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(28802),o=n(83034),l=n(18328),a=n(1824);let r=(0,o.memo)(({setTab:e,tab:t})=>{let n=(0,a.e)();return(0,i.Y)(l.A,{compact:!0,items:n,onClick:({key:t})=>{e(t)},selectable:!0,selectedKeys:[t]})})},37884:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var i=n(28802),o=n(78497),l=n(31021),a=n.n(l),r=n(83034),c=n(59121),d=n(80457),s=n(40318),g=n(52702),m=n(69177),h=n(35245),p=n(64861),u=n(21041),b=n(91346),f=n(43777),x=n(87662),A=n(30179),y=n(32092),S=n(45541),k=n(88990),C=n(78397),Y=n(64811),v=n(17869),w=n(3296);let $=(0,r.memo)(({agentId:e,onClose:t,open:l})=>{let{t:$}=(0,c.Bd)("setting"),B=(0,Y.B)(e=>e.activeId),F=e||B,M=(0,S.o)(t=>e?k.e.getAgentConfigByAgentId(e)(t):F?k.e.getAgentConfigById(F)(t):k.e.currentAgentConfig(t),a()),T=(0,Y.B)(t=>e?v.G.getAgentMetaByAgentId(e)(t):v.G.currentAgentMeta(t),a()),{isLoading:I}=(0,y.H)(e),[_,D]=(0,S.o)(e=>[e.showAgentSetting,e.updateAgentConfig]),[N]=(0,Y.B)(e=>[e.updateSessionMeta,v.G.currentAgentTitle(e)]),L=async t=>{if(e){let n=(Y.B.getState().sessions||[]).find(t=>t.type===w.r.Agent&&t.config?.id===e);n&&await S.o.getState().internal_updateAgentConfig(n.id,t)}else await D(t)},z=async t=>{if(e){let i=(Y.B.getState().sessions||[]).find(t=>t.type===w.r.Agent&&t.config?.id===e);if(i){let{sessionService:e}=await Promise.resolve().then(n.bind(n,30333));await e.updateSessionMeta(i.id,t),await Y.B.getState().refreshSessions()}}else await N(t)},E=t||(()=>S.o.setState({showAgentSetting:!1})),H=F===h.Ed,[G,U]=(0,r.useState)(H?C.iL.Prompt:C.iL.Meta);return(0,i.Y)(f.e,{config:M,id:F,loading:I,meta:T,onConfigChange:L,onMetaChange:z,children:(0,i.FD)(o.A,{containerMaxWidth:1280,height:p.xl?`calc(100vh - ${x.X}px)`:"100vh",noHeader:!0,onClose:E,open:void 0!==l?l:_,placement:"bottom",sidebar:(0,i.FD)(d.Flexbox,{gap:20,style:{height:"calc(100vh - 28px)"},children:[(0,i.Y)(m.A,{desc:$("header.sessionDesc"),title:$("header.session")}),(0,i.Y)(d.Flexbox,{flex:1,width:"100%",children:(0,i.Y)(u.A,{setTab:U,tab:G})}),(0,i.Y)(d.Flexbox,{align:"center",gap:8,paddingInline:8,width:"100%",children:(0,i.Y)(s.A,{modal:!0})}),(0,i.Y)(g.A,{paddingInline:12})]}),sidebarWidth:280,styles:{sidebarContent:{gap:48,justifyContent:"space-between",minHeight:p.xl?`calc(100% - ${x.X}px)`:"100%",paddingBlock:24,paddingInline:48}},children:[(0,i.Y)(b.A,{config:M,id:F,loading:I,meta:T,onConfigChange:L,onMetaChange:z,tab:G}),(0,i.Y)(A.A,{})]})})})},52702:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(28802),o=n(8756),l=n(11577),a=n(51997),r=n.n(a),c=n(83034),d=n(80457),s=n(98724),g=n(45628),m=n(64861);let h=(0,l.rU)(({token:e,css:t})=>({logoLink:t`
    line-height: 1;
    color: inherit;

    &:hover {
      color: ${e.colorLink};
    }
  `})),p=(0,c.memo)(({style:e,...t})=>{let{styles:n,theme:l}=h();return(0,i.FD)(d.Flexbox,{align:"center",dir:"ltr",flex:"none",gap:4,horizontal:!0,style:{color:l.colorTextDescription,fontSize:12,...e},...t,children:[(0,i.Y)("span",{children:"Powered by"}),m.Eb?(0,i.Y)("span",{children:s.dS}):(0,i.Y)(r(),{className:n.logoLink,href:`https://lobehub.com?utm_source=${g.VU}&utm_content=brand_watermark`,target:"_blank",children:(0,i.Y)(o.default,{size:20,type:"text"})})]})})},69177:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(28802),o=n(11577),l=n(83034),a=n(80457);let r=(0,o.rU)(({token:e,css:t})=>({desc:t`
    line-height: 1.4;
    color: ${e.colorTextDescription};
  `,header:t`
    padding-block: 24px 0;
    padding-inline: 0.75rem;
  `,title:t`
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
  `})),c=(0,l.memo)(({title:e,desc:t,style:n})=>{let{styles:o}=r();return(0,i.FD)(a.Flexbox,{className:o.header,gap:4,style:n,children:[(0,i.Y)("h1",{className:o.title,children:e}),(0,i.Y)("p",{className:o.desc,children:t})]})})}}]);