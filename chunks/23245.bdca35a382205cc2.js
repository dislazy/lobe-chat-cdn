"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23245],{18328:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(28802),i=n(92619),o=n(84663),l=n(11577),a=n(83034);let d=(0,l.rU)(({css:e,token:t,prefixCls:n})=>({compact:e`
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
  `})),c=(0,a.memo)(({className:e,selectable:t=!1,compact:n,...l})=>{let{cx:a,styles:c,theme:m}=d();return(0,r.Y)(i.Ay,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:m.borderRadius,itemColor:t?m.colorTextSecondary:m.colorText,itemHoverBg:m.colorFillTertiary,itemMarginBlock:4*!n,itemMarginInline:4*!n,itemSelectedBg:m.colorFillSecondary,paddingXS:-8}}},children:(0,r.Y)(o.A,{className:a(c.menu,n&&c.compact,e),mode:"vertical",selectable:t,...l})})})},21041:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(28802),i=n(83034),o=n(18328),l=n(1824);let a=(0,i.memo)(({setTab:e,tab:t})=>{let n=(0,l.e)();return(0,r.Y)(o.A,{compact:!0,items:n,onClick:({key:t})=>{e(t)},selectable:!0,selectedKeys:[t]})})},47073:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(28802),i=n(28573),o=n(59202),l=n(11577),a=n(31021),d=n.n(a),c=n(83034),m=n(35245),g=n(91346),s=n(1824),h=n(38858),p=n(78397),u=n(38759),b=n(42897),x=n(80457),f=n(71926),A=n(54329),y=n(80122),k=n(59121),v=n(21041);let Y=(0,c.memo)(()=>{let[e,t]=(0,h.ZA)("tab",h.tU.withDefault(p.iL.Prompt));return(0,r.Y)(v.A,{setTab:t,tab:e})}),w=(0,c.memo)(({mobile:e})=>{let t=(0,l.DP)(),{t:n}=(0,k.Bd)("setting"),i=e?void 0:260;return(0,r.FD)(x.Flexbox,{gap:24,paddingBlock:28,paddingInline:12,style:{background:t.colorBgLayout,borderRight:`1px solid ${t.colorBorderSecondary}`,minWidth:i,overflow:e?void 0:"scroll"},width:i,children:[(0,r.Y)(y.A,{message:n("systemAgent.helpInfo"),style:{borderRadius:t.borderRadius},variant:"filled"}),(0,r.Y)(c.Suspense,{fallback:(0,r.Y)(x.Flexbox,{gap:4,paddingBlock:8,paddingInline:8,children:(0,r.Y)(o.A,{active:!0,paragraph:{rows:4},title:!1})}),children:(0,r.Y)(Y,{})})]})}),F=({children:e})=>(0,r.FD)(r.FK,{children:[(0,r.Y)(f.A,{}),(0,r.FD)(x.Flexbox,{height:"100%",horizontal:!0,width:"100%",children:[(0,r.Y)(w,{}),(0,r.Y)(A.A,{style:{maxHeight:"100vh",paddingBlock:24,paddingInline:32},children:e})]})]}),B=({children:e})=>e,$=(0,c.memo)(e=>{let{mobile:t}=e,n=(0,s.e)(),[a,c]=(0,h.ZA)("tab",h.tU.withDefault(p.iL.Prompt)),x=(0,u.k)(b.w0.defaultAgentConfig,d()),f=(0,u.k)(b.w0.defaultAgentMeta,d()),[A,y]=(0,u.k)(e=>[e.updateDefaultAgent,e.isUserStateInit]),k=(0,l.DP)();if(!y)return(0,r.Y)(o.A,{active:!0,paragraph:{rows:5},title:!1});let v=(0,r.FD)(r.FK,{children:[t&&(0,r.Y)(i.A,{activeKey:a,compact:!0,items:n,onChange:e=>c(e),style:{borderBottom:`1px solid ${k.colorBorderSecondary}`}}),(0,r.Y)(g.A,{config:x,id:m.Ed,loading:!y,meta:f,onConfigChange:e=>{A({config:e})},onMetaChange:e=>{A({meta:e})},tab:a})]});return t?(0,r.Y)(B,{children:v}):(0,r.Y)(F,{children:v})});$.displayName="AgentSetting";let S=$},54329:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(28802),i=n(11577),o=n(83034),l=n(80457);let a=(0,o.memo)(({variant:e,maxWidth:t=1024,children:n,addonAfter:o,addonBefore:a,style:d,...c})=>{let m=(0,i.DP)();return(0,r.FD)(l.Flexbox,{align:"center",height:"100%",style:{background:"secondary"===e?m.colorBgContainerSecondary:m.colorBgContainer,overflowX:"hidden",overflowY:"auto",...d},width:"100%",...c,children:[a,(0,r.Y)(l.Flexbox,{flex:1,gap:64,style:{maxWidth:t},width:"100%",children:n}),o]})})},60062:(e,t,n)=>{n.d(t,{p$:()=>i});var r=n(11577);let i={draggable:(0,r.cx)((0,r.AH)`
  -webkit-app-region: drag;
`),nodrag:(0,r.cx)((0,r.AH)`
  -webkit-app-region: no-drag;
`)}},71926:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(28802),i=n(11577),o=n(44476),l=n.n(o),a=n(83034),d=n(64861);let c=(0,a.memo)(()=>{let e=(0,i.DP)();return!d.xl&&(0,r.Y)(l(),{color:e.colorText,height:2,shadow:!1,showSpinner:!1,zIndex:1e3})})},87662:(e,t,n)=>{n.d(t,{X:()=>r});let r=30}}]);