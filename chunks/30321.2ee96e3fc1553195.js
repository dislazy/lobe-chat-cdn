"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30321],{14741:(e,t,o)=>{o.d(t,{I:()=>r});var i=o(89196),l=o(83034),n=o(27697);let r=()=>{let[e]=(0,n.ok)();return(0,l.useMemo)(()=>i.A.parse(e.toString()),[e])}},18328:(e,t,o)=>{o.d(t,{A:()=>c});var i=o(28802),l=o(92619),n=o(84663),r=o(11577),a=o(83034);let d=(0,r.rU)(({css:e,token:t,prefixCls:o})=>({compact:e`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,menu:e`
    flex: 1;
    border: none !important;
    background: transparent;

    .${o}-menu-item-divider {
      margin-block: 0.125rem;
      border-color: ${t.colorFillTertiary};

      &:first-child {
        margin-block-start: 0;
      }

      &:last-child {
        margin-block-end: 0;
      }
    }

    .${o}-menu-item, .${o}-menu-submenu-title {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      height: unset;
      min-height: 2rem;
      padding-block: 0.375rem;
      padding-inline: 0.75rem;

      line-height: 2;

      .anticon + .${o}-menu-title-content {
        margin-inline-start: 0;
      }
    }

    .${o}-menu-item-selected {
      .${o}-menu-item-icon svg {
        color: ${t.colorText};
      }
    }

    .${o}-menu-item-icon svg {
      color: ${t.colorTextSecondary};
    }

    .${o}-menu-title-content {
      flex: 1;
    }
  `})),c=(0,a.memo)(({className:e,selectable:t=!1,compact:o,...r})=>{let{cx:a,styles:c,theme:s}=d();return(0,i.Y)(l.Ay,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:s.borderRadius,itemColor:t?s.colorTextSecondary:s.colorText,itemHoverBg:s.colorFillTertiary,itemMarginBlock:4*!o,itemMarginInline:4*!o,itemSelectedBg:s.colorFillSecondary,paddingXS:-8}}},children:(0,i.Y)(n.A,{className:a(c.menu,o&&c.compact,e),mode:"vertical",selectable:t,...r})})})},30069:(e,t,o)=>{o.d(t,{h:()=>u});var i=o(28802),l=o(50344),n=o(12389),r=o(66843),a=o(35426),d=o(18223),c=o(29449),s=o(83034),p=o(59121),h=o(27697),m=o(61451);let u=()=>{let e=(0,h.zy)(),{t}=(0,p.Bd)("discover"),o=(0,s.useMemo)(()=>{let t=e.pathname;for(let e of Object.values(m.bz))if(t.includes(`/${m.bz.Plugins}`))return m.bz.Mcp;else if(t.includes(`/${e}`))return e;return m.bz.Home},[e.pathname]),u=(0,s.useMemo)(()=>[{icon:(0,i.Y)(n.default,{icon:r.A,size:16}),key:m.bz.Home,label:(0,i.Y)("div",{style:{color:"inherit",display:"inline"},children:t("tab.home")})},{icon:(0,i.Y)(n.default,{icon:a.A,size:16}),key:m.bz.Assistants,label:(0,i.Y)("div",{style:{color:"inherit",display:"inline"},children:t("tab.assistant")})},{icon:(0,i.Y)(l.A,{className:"anticon",size:16}),key:m.bz.Mcp,label:(0,i.Y)("div",{style:{color:"inherit",display:"inline"},children:`MCP ${t("tab.plugin")}`})},{icon:(0,i.Y)(n.default,{icon:d.A,size:16}),key:m.bz.Models,label:(0,i.Y)("div",{style:{color:"inherit",display:"inline"},children:t("tab.model")})},{icon:(0,i.Y)(n.default,{icon:c.A,size:16}),key:m.bz.Providers,label:(0,i.Y)("div",{style:{color:"inherit",display:"inline"},children:t("tab.provider")})}],[t]);return{activeItem:u.find(e=>e.key===o),activeKey:o,items:u}}},30179:(e,t,o)=>{o.d(t,{A:()=>$});var i=o(28802),l=o(12389),n=o(11577),r=o(50833),a=o(51997),d=o.n(a),c=o(83034),s=o(59121),p=o(80457),h=o(20480),m=o(92619),u=o(31985),g=o(3779);let b=(0,n.rU)(({css:e,token:t,prefixCls:o})=>({content:e`
      .${o}-modal-footer {
        margin: 0;
        padding: 16px;
      }
      .${o}-modal-header {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }
      .${o}-modal-content {
        overflow: hidden;
        padding: 0;
        border: 1px solid ${t.colorSplit};
        border-radius: ${t.borderRadiusLG}px;
      }
    `,wrap:e`
      overflow: hidden auto;
    `})),f=(0,c.memo)(({className:e,title:t,desc:o,cover:l,width:n=360,...r})=>{let{styles:a,cx:d,theme:c}=b();return(0,i.Y)(m.Ay,{theme:{token:{colorBgElevated:(0,g.a)(.005,c.colorBgContainer)}},children:(0,i.FD)(u.A,{centered:!0,className:d(a.content,e),closable:!1,maskClosable:!0,width:n,wrapClassName:a.wrap,...r,children:[l,(0,i.FD)(p.Flexbox,{padding:16,children:[(0,i.Y)("h3",{style:{fontWeight:"bold"},children:t}),(0,i.Y)("p",{style:{marginBottom:0},children:o})]})]})})}),y=(0,c.memo)(({height:e,width:t,src:o})=>{let l=(0,n.DP)();return(0,i.Y)("video",{autoPlay:!0,controls:!1,height:e,loop:!0,muted:!0,src:o,style:{background:l.colorFillSecondary,height:"auto",width:"100%"},width:t})});var v=o(98724),x=o(45628),k=o(62326),Y=o(12467),w=o(12020);let A=(0,n.rU)(({css:e,token:t})=>e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `),z=(0,c.memo)(()=>{let{t:e}=(0,s.Bd)("common"),[t,o]=(0,c.useState)(!1),[n,a]=(0,c.useState)(!1),{styles:m}=A(),{hideGitHub:u}=(0,k.wo)(Y.E);return u?null:(0,i.FD)(i.FK,{children:[(0,i.Y)(p.Flexbox,{className:"settings-layout-footer",justify:"flex-end",children:(0,i.Y)(h.default,{as:"footer",className:m,flex:"none",horizontal:!0,padding:16,width:"100%",children:(0,i.FD)("div",{style:{textAlign:"center"},children:[(0,i.Y)(l.default,{icon:r.A})," ",`${e("footer.title")} `,(0,i.Y)(d(),{"aria-label":"star",href:x.U0,onClick:e=>{e.preventDefault(),o(!0)},children:e("footer.action.star")}),` ${e("footer.and")} `,(0,i.Y)(d(),{"aria-label":"feedback",href:x.ve,onClick:e=>{e.preventDefault(),a(!0)},children:e("footer.action.feedback")})," !"]})})}),(0,i.Y)(f,{cancelText:e("footer.later"),cover:(0,i.Y)(y,{height:269,src:"/videos/star.mp4?v=1",width:358}),desc:e("footer.star.desc"),okText:e("footer.star.action"),onCancel:()=>o(!1),onOk:()=>{w.i||window.open(x.U0,"__blank")},open:t,title:e("footer.star.title")}),(0,i.Y)(f,{cancelText:e("footer.later"),cover:(0,i.Y)(y,{height:269,src:"/videos/feedback.mp4?v=1",width:358}),desc:e("footer.feedback.desc",{appName:v.Se}),okText:e("footer.feedback.action"),onCancel:()=>a(!1),onOk:()=>{w.i||window.open(x.ve,"__blank")},open:n,title:e("footer.feedback.title")})]})});z.displayName="SettingFooter";let $=z},30321:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});var i=o(28802),l=o(42379),n=o(30179),r=o(82520),a=o(9274),d=o(33145),c=o(11577),s=o(75589),p=o(83034),h=o(80457),m=o(49935),u=o(98603),g=o(97565),b=o(96830),f=o(75718),y=o(27697),v=o(18328),x=o(61451),k=o(30069);let Y=(0,c.rU)(({css:e,token:t})=>({activeNavItem:e`
    background: ${t.colorFillTertiary};
  `,container:e`
    height: auto;
    padding-block: 4px;
    background: ${t.colorBgLayout};
  `,navItem:e`
    font-weight: 500;
  `,title:e`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
  `})),w=(0,p.memo)(()=>{let[e,t]=(0,p.useState)(!1),{styles:o,theme:l}=Y(),{items:n,activeKey:r,activeItem:d}=(0,k.h)(),c=(0,y.Zp)();return(0,i.FD)(i.FK,{children:[(0,i.FD)(h.Flexbox,{align:"center",className:o.title,gap:4,horizontal:!0,children:[(0,i.Y)(a.A,{color:l.colorText,icon:f.A,onClick:()=>t(!0),size:{blockSize:32,size:18}}),d?.label]}),(0,i.Y)(b.A,{bodyStyle:{display:"flex",flexDirection:"column",gap:20,justifyContent:"space-between",padding:16},headerStyle:{display:"none"},onClick:()=>t(!1),onClose:()=>t(!1),open:e,placement:"left",rootStyle:{position:"absolute"},style:{background:l.colorBgLayout,borderRight:`1px solid ${l.colorSplit}`,paddingTop:44},width:260,zIndex:10,children:(0,i.Y)(v.A,{compact:!0,items:n,onClick:({key:e})=>{e===x.bz.Home?c("/discover"):c(`/discover/${e}`)},selectable:!0,selectedKeys:[r]})})]})}),A=(0,c.rU)(({css:e,token:t})=>({search:e`
    position: absolute;
    z-index: 10;
    inset-block-start: 0;
    inset-inline: 0 0;

    background: ${t.colorBgLayout};
  `})),z=(0,p.memo)(()=>{let{styles:e}=A(),[t,o]=(0,p.useState)(!1);return(0,i.Y)(d.A,{center:t&&(0,i.Y)(h.Flexbox,{align:"center",className:e.search,paddingBlock:8,paddingInline:16,children:(0,i.Y)(g.A,{mobile:!0,onBlur:()=>o(!1)})}),left:(0,i.Y)(w,{}),right:t?(0,i.Y)(h.Flexbox,{align:"center",className:e.search,paddingBlock:8,paddingInline:16,children:(0,i.Y)(g.A,{mobile:!0,onBlur:()=>o(!1)})}):(0,i.Y)(a.A,{icon:s.A,onClick:()=>o(!0),size:m.Jo}),style:{...u.p,overflow:"unset"},styles:{center:{display:"none"}}})}),$=()=>(0,i.FD)(l.A,{gap:16,header:(0,i.Y)(z,{}),id:r.n,style:{paddingInline:16,paddingTop:8},withNav:!0,children:[(0,i.Y)(y.sv,{}),(0,i.Y)("div",{}),(0,i.Y)(n.A,{})]});$.displayName="MobileDiscoverLayout";let S=$},42379:(e,t,o)=>{o.d(t,{A:()=>r});var i=o(28802),l=o(80457);let n=({children:e,withNav:t,style:o,header:n,id:r="lobe-mobile-scroll-container",...a})=>{let d=(0,i.Y)(l.Flexbox,{height:"100%",id:r,style:{overflowX:"hidden",overflowY:"auto",position:"relative",...o,paddingBottom:t?48:o?.paddingBottom},width:"100%",...a,children:e});return n?(0,i.FD)(l.Flexbox,{height:"100%",style:{overflow:"hidden",position:"relative"},width:"100%",children:[n,(0,i.Y)(l.Flexbox,{height:"100%",id:"lobe-mobile-scroll-container",style:{overflowX:"hidden",overflowY:"auto",position:"relative",...o,paddingBottom:t?48:o?.paddingBottom},width:"100%",...a,children:e})]}):d};n.displayName="MobileContentLayout";let r=n},62894:(e,t,o)=>{o.d(t,{j:()=>d});var i=o(89196),l=o(83034),n=o(27697),r=o(12020);let a=({hash:e,replace:t,url:o,prevQuery:l={},query:n={}})=>{let a=i.A.stringifyUrl({query:t?n:{...l,...n},url:o},{skipNull:!0});return!r.i&&e&&(a=[a,e||location?.hash?.slice(1)].filter(Boolean).join("#")),a},d=()=>{let e=(0,n.Zp)();return(0,l.useMemo)(()=>({push:(t,o={})=>e(a({prevQuery:i.A.parse(window.location.search),url:t,...o})),replace:(t,o={})=>e(a({prevQuery:i.A.parse(window.location.search),url:t,...o}),{replace:!0})}),[e])}},72947:(e,t,o)=>{o.d(t,{a:()=>l});var i=o(27697);let l=()=>(0,i.zy)().pathname},82520:(e,t,o)=>{o.d(t,{g:()=>i,n:()=>l});let i=1440,l="discover-scroll"},97565:(e,t,o)=>{o.d(t,{A:()=>u});var i=o(28802),l=o(44452),n=o(11577),r=o(83034),a=o(59121),d=o(4001),c=o(72947),s=o(14741),p=o(14872),h=o(62894);(0,n.rU)(({css:e,prefixCls:t,token:o})=>({active:e`
    box-shadow: ${o.boxShadow};
  `,bar:e`
    .${t}-input-group-wrapper {
      padding: 0;
    }
  `}));let m=(0,r.memo)(()=>{let{t:e}=(0,a.Bd)("discover"),t=(0,c.a)(),{q:o}=(0,s.I)(),n=(0,h.j)(),[p,m]=(0,r.useState)(o||""),u=t.split("/")[2]||"assistant",g=e=>{n.push((0,d.A)("/discover",u),{query:e?{q:e}:{},replace:!0})};return(0,i.Y)(l.A,{"data-testid":"search-bar",defaultValue:o,enableShortKey:!0,onInputChange:e=>{m(e),e||g("")},onSearch:g,placeholder:e("search.placeholder"),style:{width:"min(720px,100%)"},value:p,variant:"outlined"})}),u=(0,p.l)(m)},98603:(e,t,o)=>{o.d(t,{p:()=>i});let i={position:"sticky",top:0,width:"100%",zIndex:100}}}]);