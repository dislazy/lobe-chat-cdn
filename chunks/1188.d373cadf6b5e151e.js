"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1188],{1188:(e,i,t)=>{t.r(i),t.d(i,{default:()=>T});var a=t(28802),n=t(3136),o=t(11577),l=t(16397),c=t(26420),d=t(35426),r=t(39196),s=t(38837),m=t(61975),h=t(40904),p=t(25387),u=t(41930),g=t(17665),k=t(29911),b=t(74109),v=t(65320),x=t(33455),y=t(97779),f=t(50718),Y=t(83034),N=t(11015),w=t(59121),B=t(91608),F=t(5930),S=t(62326),A=t(12467),D=t(64811),C=t(23047);let $=(0,o.rU)(({css:e,token:i})=>({backTag:e`
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `,commandFooter:e`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-end;

    padding-block: 8px;
    padding-inline: 16px;
    border-block-start: 1px solid ${i.colorBorderSecondary};

    background: ${i.colorBgContainer};
  `,commandRoot:e`
    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: min(640px, 90vw);
    max-height: min(500px, 70vh);
    border-radius: ${i.borderRadiusLG}px;

    background: ${i.colorBgElevated};
    box-shadow: ${i.boxShadowSecondary};

    animation: slide-down 0.12s ease-out;

    @keyframes slide-down {
      from {
        transform: translateY(-20px) scale(0.96);
        opacity: 0;
      }

      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }

    [cmdk-input] {
      flex: 1;

      min-width: 0;
      padding: 0;
      border: none;

      font-family: inherit;
      font-size: 16px;
      color: ${i.colorText};

      background: transparent;
      outline: none;

      &::placeholder {
        color: ${i.colorTextPlaceholder};
      }
    }

    [cmdk-list] {
      overflow-y: auto;
      max-height: 400px;
      padding: 8px;
    }

    [cmdk-empty] {
      padding-block: 32px;
      padding-inline: 16px;

      font-size: 14px;
      color: ${i.colorTextTertiary};
      text-align: center;
    }

    [cmdk-item] {
      cursor: pointer;
      user-select: none;

      display: flex;
      gap: 12px;
      align-items: center;

      padding-block: 12px;
      padding-inline: 16px;
      border-radius: ${i.borderRadius}px;

      color: ${i.colorText};

      transition: all 0.15s ease;

      &[aria-selected='true'] {
        background: ${i.colorBgTextHover};
      }

      &:hover {
        background: ${i.colorBgTextHover};
      }
    }

    [cmdk-group-heading] {
      user-select: none;

      padding-block: 8px;
      padding-inline: 16px;

      font-size: 12px;
      font-weight: 500;
      color: ${i.colorTextSecondary};
    }

    [cmdk-separator] {
      height: 1px;
      margin-block: 4px;
      background: ${i.colorBorderSecondary};
    }
  `,icon:e`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: ${i.colorTextSecondary};
  `,inputWrapper:e`
    display: flex;
    gap: 8px;
    align-items: center;

    padding: 16px;
    border-block-end: 1px solid ${i.colorBorderSecondary};
  `,itemContent:e`
    flex: 1;
    min-width: 0;
  `,itemDescription:e`
    margin-block-start: 2px;
    font-size: 12px;
    line-height: 1.4;
    color: ${i.colorTextTertiary};
  `,itemLabel:e`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  `,kbd:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 6px;
    border-radius: ${i.borderRadiusSM}px;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
    color: ${i.colorTextSecondary};

    background: ${i.colorFillQuaternary};
  `,kbdIcon:e`
    width: 12px;
    height: 12px;
  `,overlay:e`
    position: fixed;
    z-index: 9999;
    inset: 0;

    display: flex;
    justify-content: center;

    padding-block-start: 15vh;

    background: ${i.colorBgMask};

    animation: fade-in 0.1s ease-in-out;

    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `})),I=(0,Y.memo)(()=>{let[e,i]=(0,Y.useState)(!1),[t,o]=(0,Y.useState)(!1),[I,T]=(0,Y.useState)(""),[L,E]=(0,Y.useState)([]),z=(0,f.useRouter)(),P=(0,f.usePathname)(),{t:R}=(0,w.Bd)("common"),{styles:H}=$(),W=(0,F.o)(e=>e.switchThemeMode),_=(0,D.B)(e=>e.createSession),{showCreateSession:G}=(0,S.wo)(A.E),M=L.at(-1);(0,Y.useEffect)(()=>{o(!0)},[]),(0,B.y)(C.g8.CommandPalette,()=>{i(e=>!e)}),(0,Y.useEffect)(()=>{if(e){let e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}},[e]),(0,Y.useEffect)(()=>{e&&(E([]),T(""))},[e]);let j=e=>{z.push(e),i(!1)},K=e=>{window.open(e,"_blank","noopener,noreferrer"),i(!1)},O=e=>{W(e),i(!1)};return t&&e?(0,N.createPortal)((0,a.Y)("div",{className:H.overlay,onClick:()=>i(!1),children:(0,a.Y)("div",{onClick:e=>e.stopPropagation(),children:(0,a.FD)(l.uB,{className:H.commandRoot,onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),L.length>0?E(e=>e.slice(0,-1)):i(!1)),"Backspace"===e.key&&!I&&L.length>0&&(e.preventDefault(),E(e=>e.slice(0,-1)))},shouldFilter:!0,children:[(0,a.FD)("div",{className:H.inputWrapper,children:[L.length>0&&(0,a.Y)(n.A,{className:H.backTag,icon:(0,a.Y)(c.A,{size:12}),onClick:()=>E(e=>e.slice(0,-1))}),(0,a.Y)(l.uB.Input,{autoFocus:!0,onValueChange:T,placeholder:R("cmdk.searchPlaceholder"),value:I}),(0,a.Y)(n.A,{children:"ESC"})]}),(0,a.FD)(l.uB.List,{children:[(0,a.Y)(l.uB.Empty,{children:R("cmdk.noResults")}),!M&&(0,a.FD)(a.FK,{children:[G&&(0,a.FD)(l.uB.Item,{onSelect:()=>{_(),i(!1)},value:"new-agent",children:[(0,a.Y)(d.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.newAgent")})})]}),!P?.startsWith("/settings")&&(0,a.FD)(l.uB.Item,{onSelect:()=>j("/settings"),value:"settings",children:[(0,a.Y)(r.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.settings")})})]}),(0,a.FD)(l.uB.Item,{onSelect:()=>E([...L,"theme"]),value:"theme",children:[(0,a.Y)(s.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.theme")})})]}),(0,a.FD)(l.uB.Group,{heading:R("cmdk.navigate"),children:[!P?.startsWith("/discover")&&(0,a.FD)(l.uB.Item,{onSelect:()=>j("/discover"),value:"discover",children:[(0,a.Y)(m.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.discover")})})]}),!P?.startsWith("/image")&&(0,a.FD)(l.uB.Item,{onSelect:()=>j("/image"),value:"painting",children:[(0,a.Y)(h.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.painting")})})]}),!P?.startsWith("/knowledge")&&(0,a.FD)(l.uB.Item,{onSelect:()=>j("/knowledge"),value:"knowledge",children:[(0,a.Y)(p.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.knowledgeBase")})})]})]}),(0,a.FD)(l.uB.Group,{heading:R("cmdk.about"),children:[(0,a.FD)(l.uB.Item,{onSelect:()=>K("https://github.com/lobehub/lobe-chat/issues/new/choose"),value:"submit-issue",children:[(0,a.Y)(u.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.submitIssue")})})]}),(0,a.FD)(l.uB.Item,{onSelect:()=>K("https://github.com/lobehub/lobe-chat"),value:"star-github",children:[(0,a.Y)(g.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.starOnGitHub")})})]}),(0,a.FD)(l.uB.Item,{onSelect:()=>K("https://discord.gg/AYFPHvv2jT"),value:"discord",children:[(0,a.Y)(k.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.communitySupport")})})]})]})]}),"theme"===M&&(0,a.FD)(a.FK,{children:[(0,a.FD)(l.uB.Item,{onSelect:()=>O("light"),value:"theme-light",children:[(0,a.Y)(b.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.themeLight")})})]}),(0,a.FD)(l.uB.Item,{onSelect:()=>O("dark"),value:"theme-dark",children:[(0,a.Y)(v.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.themeDark")})})]}),(0,a.FD)(l.uB.Item,{onSelect:()=>O("auto"),value:"theme-auto",children:[(0,a.Y)(s.A,{className:H.icon}),(0,a.Y)("div",{className:H.itemContent,children:(0,a.Y)("div",{className:H.itemLabel,children:R("cmdk.themeAuto")})})]})]})]}),(0,a.FD)("div",{className:H.commandFooter,children:[(0,a.FD)("div",{className:H.kbd,children:[(0,a.Y)(x.A,{className:H.kbdIcon}),(0,a.Y)("span",{children:R("cmdk.toOpen")})]}),(0,a.FD)("div",{className:H.kbd,children:[(0,a.Y)(y.A,{className:H.kbdIcon}),(0,a.Y)("span",{children:R("cmdk.toSelect")})]})]})]})})}),document.body):null});I.displayName="Cmdk";let T=I},91608:(e,i,t)=>{t.d(i,{y:()=>s});var a=t(55156),n=t(86653),o=t(54606),l=t(62326),c=t(38759),d=t(42897),r=t(12020);let s=(e,i,t,s)=>{let m=(0,c.k)(d.w0.getHotkeyById(e)),h=(0,l.wo)(e=>e.isMobile),p=Array.isArray(t)?Array.isArray(s)?void 0:s:t,u=Array.isArray(t)?t:Array.isArray(s)?s:void 0,g=o.e.find(i=>i.id===e),k=(0,n.vC)(m,(...t)=>(r.C&&console.log("[Hotkey]",e),i(...t)),{enableOnFormTags:!0,preventDefault:!0,...p,enabled:!h&&p?.enabled,scopes:(0,a.A)([e,...g?.scopes||[],...p?.scopes||[]])},u);return{id:e,ref:k}}}}]);