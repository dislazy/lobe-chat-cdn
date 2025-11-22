"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1505],{1505:(e,l,r)=>{r.d(l,{A:()=>D});var o=r(28802),i=r(67072),t=r(9274),n=r(29703),a=r(44452),d=r(75431),c=r(37412),s=r(54645),m=r(15193),u=r(59744),h=r(65998),p=r(87508),g=r(28755),x=r(16602),b=r(42507),f=r(11577),y=r(91951),S=r(83034),A=r(59121),v=r(80457),F=r(99278),k=r(99859),C=r(6332),Y=r(64811),M=r(3296);let{Text:$}=u.A,w=(0,S.memo)(({agent:e,isSelected:l,onToggle:r,styles:t,cx:n,t:a})=>{let d=(0,S.useRef)(null),c=(0,m.A)(d),s=e.config?.id,u=e.meta?.title||a("defaultSession",{ns:"common"}),g=e.meta?.description||"",x=e.meta?.avatar||F.k_,b=e.meta?.backgroundColor;return s?(0,o.Y)(h.A.Item,{className:n(t.listItem),onClick:()=>r(s),ref:d,children:(0,o.FD)(v.Flexbox,{align:"center",gap:12,horizontal:!0,width:"100%",children:[(0,o.Y)(p.A,{checked:l,onChange:()=>{r(s)},onClick:e=>{e.stopPropagation()}}),(0,o.Y)(v.Flexbox,{style:{flexShrink:0},children:(0,o.Y)(i.A,{animation:c,avatar:x,background:b,shape:"circle",size:40})}),(0,o.FD)(v.Flexbox,{flex:1,gap:2,style:{minWidth:0},children:[(0,o.Y)($,{className:t.title,children:u}),g&&(0,o.Y)($,{className:t.description,ellipsis:!0,children:g})]})]})}):null}),z=(0,f.rU)(({css:e,token:l})=>({container:e`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${l.colorBorderSecondary};
    border-radius: ${l.borderRadius}px;
  `,description:e`
    font-size: 11px;
    line-height: 1.2;
    color: ${l.colorTextSecondary};
  `,hostCard:e`
    margin-block-end: ${l.paddingSM}px;
    padding: ${l.padding}px;
    border: 1px solid ${l.colorBorderSecondary};
    border-radius: ${l.borderRadiusLG}px;

    background: ${l.colorFillTertiary};
  `,leftColumn:e`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding-block: ${l.paddingSM}px 0;
    padding-inline: ${l.paddingSM}px;
    border-inline-end: 1px solid ${l.colorBorderSecondary};
  `,listItem:e`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: ${l.paddingSM}px !important;
    border-radius: ${l.borderRadius}px;

    transition: all 0.2s ease;

    &:hover {
      background: ${l.colorFillTertiary};
    }
  `,modelSelectDisabled:e`
    pointer-events: none;
  `,rightColumn:e`
    overflow-y: auto;
    flex: 1;
    padding: ${l.paddingSM}px;
  `,selectedItem:e`
    opacity: 0.6;
    background: ${l.colorFillQuaternary};
  `})),D=(0,S.memo)(({currentHostConfig:e,existingMembers:l=[],mode:r,onCancel:m,onConfirm:u,open:p,preSelectedAgents:f=[]})=>{let{t:$}=(0,A.Bd)(["chat","common"]),{styles:D,cx:E}=z(),N=(0,C.J)(),[I,_]=(0,S.useState)(f),[P,T]=(0,S.useState)(""),B="add"===r&&e?.enableSupervisor===!0,[L,R]=(0,S.useState)("add"===r),[W,G]=(0,S.useState)(()=>{if("add"===r&&e)return{model:e.orchestratorModel,provider:e.orchestratorProvider};if(N.length>0&&N[0].children.length>0){let e=N[0];return{model:e.children[0].id,provider:e.id}}return{}}),j=(0,Y.B)(e=>(e.sessions||[]).filter(e=>e.type===M.r.Agent&&!e.config?.virtual)),q=(0,Y.B)(e=>e.activeId),J=e=>{_(l=>l.includes(e)?l.filter(l=>l!==e):[...l,e])},Q=e=>{_(l=>l.filter(l=>l!==e))},U=(0,S.useCallback)(e=>{T(e.target.value)},[]),H=(0,S.useCallback)(e=>{R(!e)},[]),K=(0,S.useCallback)(e=>{G(e)},[]),O=(0,S.useMemo)(()=>"create"===r?j:j.filter(e=>e.id!==q&&!l.includes(e.config?.id||"")),[j,q,r,l]),V=(0,S.useMemo)(()=>P.trim()?O.filter(e=>{let l=e.meta?.title||"",r=e.meta?.description||"",o=P.toLowerCase();return l.toLowerCase().includes(o)||r.toLowerCase().includes(o)}):O,[O,P]),X=(0,S.useMemo)(()=>I.map(e=>{let l=j.find(l=>l.config.id===e);if(!l)return null;let r=l.meta?.title||$("defaultSession",{ns:"common"}),n=l.meta?.avatar||F.k_,a=l.meta?.backgroundColor,d=l.meta?.description||"";return{actions:(0,o.Y)(t.A,{icon:y.A,onClick:()=>Q(e),size:"small",style:{color:"#999"}}),avatar:(0,o.Y)(i.A,{avatar:n,background:a,shape:"circle",size:40}),description:d,key:e,showAction:!0,title:r}}).filter(e=>null!==e),[I,j,$,Q]),Z=()=>{_(f),T(""),R("add"===r),"add"===r&&e&&G({model:e.orchestratorModel,provider:e.orchestratorProvider})},[ee,el]=(0,S.useState)(!1),er=(0,S.useMemo)(()=>{let e=W.model,l=W.provider;if(e&&l)return{model:e,provider:l}},[W]),eo=async()=>{try{el(!0);let e=!B,l=e&&!L?er:void 0;await u(I,l,e?!L:void 0),Z()}catch(e){console.error("Failed to confirm action:",e)}finally{el(!1)}},ei=()=>{Z(),m()},et="create"===r?$("memberSelection.setInitialMembers"):$("memberSelection.addMember"),en="create"===r?$("memberSelection.createGroup"):$("memberSelection.addMember"),ea=I.length+ +(!B&&!L),ed=ea<+("create"===r)||ee;return(0,o.Y)(n.A,{allowFullscreen:!0,footer:(0,o.FD)(v.Flexbox,{gap:8,horizontal:!0,justify:"end",children:[(0,o.Y)(g.Ay,{onClick:ei,children:$("cancel",{ns:"common"})}),(0,o.FD)(g.Ay,{disabled:ed,loading:ee,onClick:eo,type:"primary",children:[en," (",ea,")"]})]}),onCancel:ei,open:p,title:et,width:800,children:(0,o.FD)(v.Flexbox,{className:D.container,horizontal:!0,children:[(0,o.FD)(v.Flexbox,{className:D.leftColumn,flex:1,gap:12,children:[(0,o.Y)(a.A,{allowClear:!0,onChange:U,placeholder:$("memberSelection.searchAgents"),value:P,variant:"filled"}),(0,o.Y)(v.Flexbox,{flex:1,style:{overflowY:"auto"},children:0===V.length?(0,o.Y)(x.A,{description:P?$("noMatchingAgents",{ns:"chat"}):$("noAvailableAgents",{ns:"chat"}),image:x.A.PRESENTED_IMAGE_SIMPLE}):(0,o.Y)(h.A,{dataSource:V,renderItem:e=>{let l=e.config?.id;if(!l)return null;let r=I.includes(l);return(0,o.Y)(w,{agent:e,cx:E,isSelected:r,onToggle:J,styles:D,t:$},l)},split:!1})})]}),(0,o.Y)(v.Flexbox,{className:D.rightColumn,flex:1,children:(0,o.FD)(v.Flexbox,{gap:16,children:[!B&&(0,o.FD)(v.Flexbox,{align:"center",className:D.hostCard,gap:12,horizontal:!0,children:[(0,o.FD)(v.Flexbox,{flex:1,gap:2,children:[(0,o.Y)(d.A,{style:{fontSize:14,fontWeight:500},type:L?"secondary":void 0,children:$("groupWizard.host.title")}),(0,o.Y)(d.A,{style:{color:"#999",fontSize:12},type:L?"secondary":void 0,children:$("groupWizard.host.description")})]}),(0,o.FD)(v.Flexbox,{align:"center",gap:12,horizontal:!0,children:[(0,o.Y)("div",{className:E(L&&D.modelSelectDisabled),style:{opacity:L?.6:1},children:(0,o.Y)(k.A,{onChange:K,requiredAbilities:["functionCall"],value:er})}),(0,o.Y)(c.A,{title:$("groupWizard.host.tooltip"),children:(0,o.Y)(b.A,{checked:!L,onChange:e=>H(e),size:"small"})})]})]}),(0,o.Y)(v.Flexbox,{flex:1,children:0===X.length?(0,o.Y)(v.Flexbox,{align:"center",flex:1,justify:"center",children:(0,o.Y)(x.A,{description:$("memberSelection.noSelectedAgents"),image:x.A.PRESENTED_IMAGE_SIMPLE})}):(0,o.Y)(s.A,{items:X})})]})})]})})})}}]);