"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5827],{5827:(e,o,t)=>{t.r(o),t.d(o,{default:()=>f,useStyles:()=>m});var l=t(28802),i=t(12389),n=t(28266),a=t(51717),r=t(9274),d=t(54943),s=t(11577),c=t(46045),p=t(5009),h=t(91951),x=t(50718),u=t(83034),y=t(80457),b=t(69288),g=t(98724),k=t(64861);let m=(0,s.rU)(({token:e,css:o,prefixCls:t})=>({collapsed:o`
      pointer-events: none;
      transform: scale(0.8);
      opacity: 0;
    `,expanded:o`
      pointer-events: auto;
      transform: scale(1);
      opacity: 1;
    `,floatButton:o`
      inset-block-end: 16px;
      inset-inline-end: 16px;

      width: 36px;
      height: 36px;
      border: 1px solid ${e.colorBorderSecondary};

      font-size: 20px;
      .${t}-float-btn-body {
        background: ${e.colorBgLayout};

        &:hover {
          width: auto;
          background: ${e.colorBgElevated};
        }
      }
    `,header:o`
      cursor: move;
      user-select: none;

      padding-block: 8px;
      padding-inline: 16px;
      border-block-end: 1px solid ${e.colorBorderSecondary};

      color: ${e.colorText};

      background: ${e.colorFillAlter};
    `,panel:o`
      position: fixed;
      z-index: 1000;

      overflow: hidden;
      display: flex;

      border: 1px solid ${e.colorBorderSecondary};
      border-radius: 12px;

      background: ${e.colorBgContainer};
      box-shadow: ${e.boxShadow};

      transition: opacity ${e.motionDurationMid} ${e.motionEaseInOut};
    `})),f=(0,u.memo)(({items:e})=>{let{styles:o,theme:s}=m(),[f,w]=(0,u.useState)(e[0].key),[S,v]=(0,u.useState)(!1),[$,F]=(0,u.useState)({x:100,y:100}),[D,N]=(0,u.useState)({height:600,width:800}),A=(0,x.usePathname)();return(0,u.useEffect)(()=>{try{let e=localStorage.getItem("debug-panel-position");e&&JSON.parse(e)&&F(JSON.parse(e))}catch{}try{let e=localStorage.getItem("debug-panel-size");e&&JSON.parse(e)&&N(JSON.parse(e))}catch{}},[]),(0,l.FD)(l.FK,{children:["/desktop/devtools"!==A&&(0,l.Y)(d.A,{className:o.floatButton,icon:(0,l.Y)(i.default,{icon:S?c.A:p.A}),onClick:async()=>{if(k.xl){let{electronDevtoolsService:e}=await t.e(68027).then(t.bind(t,68027));await e.openDevtools();return}v(!S)}}),S&&(0,l.Y)(b.p,{bounds:"window",className:`${o.panel} ${S?o.expanded:o.collapsed}`,dragHandleClassName:"panel-drag-handle",minHeight:600,minWidth:800,onDragStop:(e,o)=>{F({x:o.x,y:o.y})},onResizeStop:(e,o,t,l,i)=>{N({height:Number(t.style.height),width:Number(t.style.width)}),F(i)},position:$,size:D,children:(0,l.FD)(y.Flexbox,{height:"100%",horizontal:!0,style:{overflow:"hidden",position:"relative"},width:"100%",children:[(0,l.Y)(n.A,{avatar:(0,l.Y)(a.A,{emoji:"\uD83E\uDDF0",size:24}),bottomActions:[],style:{paddingBlock:12,width:48},topActions:e.map(e=>(0,l.Y)(r.A,{active:f===e.key,icon:e.icon,onClick:()=>w(e.key),title:e.key,tooltipProps:{placement:"right"}},e.key))}),(0,l.FD)(y.Flexbox,{height:"100%",style:{overflow:"hidden",position:"relative"},width:"100%",children:[(0,l.FD)(y.Flexbox,{align:"center",className:`panel-drag-handle ${o.header}`,horizontal:!0,justify:"space-between",children:[(0,l.FD)(y.Flexbox,{align:"baseline",gap:6,horizontal:!0,children:[(0,l.FD)("b",{children:[g.Se," Dev Tools"]}),(0,l.Y)("span",{style:{color:s.colorTextDescription},children:"/"}),(0,l.Y)("span",{style:{color:s.colorTextDescription},children:f})]}),(0,l.Y)(r.A,{icon:h.A,onClick:()=>v(!1)})]}),e.map(e=>(0,l.Y)(y.Flexbox,{flex:1,height:"100%",style:{display:f===e.key?"flex":"none",overflow:"hidden"},children:e.children},e.key))]})]})})]})})}}]);