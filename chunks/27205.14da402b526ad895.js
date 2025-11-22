"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27205,37884],{18328:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(28802),i=n(92619),r=n(84663),a=n(11577),l=n(83034);let s=(0,a.rU)(({css:e,token:t,prefixCls:n})=>({compact:e`
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
  `})),c=(0,l.memo)(({className:e,selectable:t=!1,compact:n,...a})=>{let{cx:l,styles:c,theme:d}=s();return(0,o.Y)(i.Ay,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:d.borderRadius,itemColor:t?d.colorTextSecondary:d.colorText,itemHoverBg:d.colorFillTertiary,itemMarginBlock:4*!n,itemMarginInline:4*!n,itemSelectedBg:d.colorFillSecondary,paddingXS:-8}}},children:(0,o.Y)(r.A,{className:l(c.menu,n&&c.compact,e),mode:"vertical",selectable:t,...a})})})},21041:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(28802),i=n(83034),r=n(18328),a=n(1824);let l=(0,i.memo)(({setTab:e,tab:t})=>{let n=(0,a.e)();return(0,o.Y)(r.A,{compact:!0,items:n,onClick:({key:t})=>{e(t)},selectable:!0,selectedKeys:[t]})})},22009:(e,t,n)=>{n.r(t),n.d(t,{default:()=>eh});var o=n(28802),i=n(83034),r=n(62326),a=n(12467),l=n(64811),s=n(62016),c=n(9274),d=n(55612),m=n(59121),p=n(63639),g=n(45541),u=n(88990),h=n(5930),y=n(31065),f=n(81490),b=n(11577),v=n(80457),x=n(50846);let S=(0,b.rU)(({css:e})=>({container:e`
    position: relative;
    transition:
      height 0.3s ease,
      opacity 0.3s ease;
  `})),A=(0,i.memo)(({title:e,actions:t,sessionId:n,className:i,headerStyle:r,containerStyle:a,expandedHeight:l,onHeaderClick:s,children:c})=>{let{styles:d}=S(),[m,p]=(0,h.o)(e=>[y.I.getAgentSystemRoleExpanded(n)(e),e.toggleAgentSystemRoleExpand]),g=m?{minHeight:232,opacity:1,...void 0!==l?{maxHeight:l}:{}}:{minHeight:0,opacity:0,...void 0!==l?{maxHeight:0}:{}};return(0,o.FD)(v.Flexbox,{className:i,height:"fit-content",children:[(0,o.Y)(x.A,{actions:t,onClick:()=>{p(n),s?.()},style:{cursor:"pointer",...r},title:e}),(0,o.Y)(f.A,{className:d.container,size:12,style:{transition:"all 0.3s ease",...g,...a},children:c})]})});A.displayName="ConfigLayout";var k=n(88459),w=n(59202),C=n(67072),O=n(3136),Y=n(38471),j=n(49875),P=n(82487),N=n(20480);let F=(0,b.rU)(({css:e,token:t})=>({avatar:e`
    flex: none;
  `,desc:e`
    color: ${t.colorTextDescription};
    text-align: center;
  `,title:e`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  `})),D=(0,i.memo)(({systemRole:e,style:t,meta:n,onAvatarClick:i})=>{let{styles:r,theme:a}=F();if(n)return(0,o.FD)(N.default,{gap:16,style:t,children:[n.avatar&&(0,o.Y)(C.A,{animation:!0,avatar:n.avatar,background:n.backgroundColor||a.colorFillTertiary,className:r.avatar,onClick:i,size:100}),n.title&&(0,o.Y)("div",{className:r.title,children:n.title}),n?.tags?.length>0&&(0,o.Y)(N.default,{gap:6,horizontal:!0,style:{flexWrap:"wrap"},children:n.tags.map((e,t)=>(0,o.Y)(O.A,{style:{margin:0},children:(0,P.A)(e).trim()},t))}),n.description&&(0,o.Y)("div",{className:r.desc,children:n.description}),e&&(0,o.FD)(o.FK,{children:[(0,o.Y)(j.A,{style:{margin:"8px 0"}}),(0,o.Y)(Y.A,{variant:"chat",children:e})]})]})});var z=n(57763),M=n(78397),B=n(17869);let T=(0,b.rU)(({css:e,token:t})=>({prompt:e`
    opacity: 0.75;
    transition: opacity 200ms ${t.motionEaseOut};

    &:hover {
      opacity: 1;
    }
  `})),I=(0,i.memo)(({editing:e,setEditing:t,open:n,setOpen:i,isLoading:r})=>{let{styles:a}=T(),s=(0,z.F)(M.iL.Prompt),{t:c}=(0,m.Bd)("common"),[d]=(0,l.B)(e=>[B.G.currentAgentMeta(e)]),[p,h]=(0,g.o)(e=>[u.e.currentAgentSystemRole(e),e.updateAgentConfig]);return r?(0,o.Y)(v.Flexbox,{padding:16,children:(0,o.Y)(w.A,{active:!0,avatar:!1,title:!1})}):(0,o.Y)(v.Flexbox,{height:200,onClick:e=>{!r&&(e.altKey&&(r||(e.stopPropagation(),t(!0),i(!0))),i(!0))},padding:16,children:(0,o.Y)(k.A,{classNames:{markdown:a.prompt},editing:e,markdownProps:{enableLatex:!1,enableMermaid:!1},model:{extra:(0,o.Y)(D,{meta:d,onAvatarClick:()=>{i(!1),t(!1),s()},style:{marginBottom:16}})},onChange:e=>{h({systemRole:e})},onEditingChange:t,onOpenChange:i,openModal:n,placeholder:`${c("settingAgent.prompt.placeholder",{ns:"setting"})}...`,styles:{markdown:{opacity:p?void 0:.5,overflow:"visible"}},text:{cancel:c("cancel"),confirm:c("ok"),edit:c("edit"),title:c("settingAgent.prompt.title",{ns:"setting"})},value:p})})});I.displayName="SystemRole";let E=(0,i.memo)(()=>{let[e,t]=(0,i.useState)(!1),[n,r]=(0,l.B)(e=>[s.z.isSomeSessionActive(e),e.activeId]),[a]=(0,g.o)(e=>[u.e.isAgentConfigLoading(e)]),[f,b]=(0,h.o)(e=>[y.I.showSystemRole(e),e.toggleSystemRole]),[v,x]=(0,p.A)(!1,{defaultValue:f,onChange:b,value:f}),{t:S}=(0,m.Bd)("common"),k=!n||a;return(0,o.Y)(A,{actions:(0,o.Y)(c.A,{icon:d.A,onClick:e=>{k||(e.stopPropagation(),t(!0),x(!0))},size:"small",title:S("edit")}),expandedHeight:200,headerStyle:{cursor:"pointer"},sessionId:r,title:S("settingAgent.prompt.title",{ns:"setting"}),children:(0,o.Y)(I,{editing:e,isLoading:k,open:v,setEditing:t,setOpen:x})})});E.displayName="AgentConfig";var $=n(28573),H=n(31021),L=n.n(H),G=n(28709);let _=(0,G.A)("user-plus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);var R=n(50243),U=n(40473),K=n(2460);let W=(0,G.A)("user-minus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);var X=n(39196),q=n(1505),V=n(99278),J=n(17068),Q=n(71171),Z=n(38759),ee=n(61520),et=n(37884),en=n(75431),eo=n(89912),ei=n(85017),er=n(13208),ea=n(69687);let el=(0,b.rU)(({css:e,token:t})=>({memberItem:e`
    cursor: pointer;

    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;

    width: 100%;
    padding-block: 8px;
    padding-inline: 8px 12px;
    border-radius: ${t.borderRadius}px;

    transition: all 0.2s ease;

    .show-on-hover {
      opacity: 0;
    }

    &:hover {
      background: ${t.colorFillSecondary};

      .show-on-hover {
        opacity: 1;
      }
    }
  `,prompt:e`
    opacity: 0.75;
    transition: opacity 200ms ${t.motionEaseOut};

    &:hover {
      opacity: 1;
    }
  `})),es=(0,i.memo)(({id:e,title:t,avatar:n,background:i,onClick:r,actions:a,showActionsOnHover:l=!0,pin:s,generating:d,generatingTooltip:m,onStopGenerating:p,onStopGeneratingTooltip:g,onTriggerSupervisor:u,onTriggerSupervisorTooltip:h})=>{let{styles:y}=el();return(0,o.FD)(K.A.Item,{className:y.memberItem,id:e,justify:"space-between",children:[(0,o.FD)(v.Flexbox,{align:"center",flex:1,gap:4,horizontal:!0,onClick:e=>{e.stopPropagation(),r?.()},style:{overflow:"hidden"},children:[s?(0,o.Y)(K.A.DragHandle,{disabled:!0,icon:eo.A,style:{cursor:"not-allowed"}}):(0,o.Y)(K.A.DragHandle,{}),(0,o.FD)(v.Flexbox,{flex:1,gap:8,horizontal:!0,style:{overflow:"hidden"},children:[(0,o.Y)(C.A,{avatar:n||V.k_,background:i,size:24,style:{flex:"none"}}),(0,o.Y)(en.A,{ellipsis:!0,children:t})]})]}),void 0!==a&&(0,o.Y)(v.Flexbox,{className:l?"show-on-hover":void 0,gap:4,horizontal:!0,children:a}),d?(0,o.FD)(v.Flexbox,{gap:4,horizontal:!0,children:[(0,o.Y)(c.A,{icon:ei.A,size:"small",spin:!0,title:m}),p&&(0,o.Y)(c.A,{icon:er.A,onClick:e=>{e.stopPropagation(),p()},size:"small",title:g||"Stop generating"})]}):u&&(0,o.Y)(c.A,{className:"show-on-hover",icon:ea.A,onClick:e=>{e.stopPropagation(),u()},size:"small",title:h||"Trigger supervisor decision"})]})}),ec=(0,i.memo)(({currentSession:e,addModalOpen:t,onAddModalOpenChange:n,sessionId:r})=>{let{t:a}=(0,m.Bd)("chat"),l=(0,R.u)(e=>e.addAgentsToGroup),s=(0,R.u)(e=>e.removeAgentFromGroup),d=(0,R.u)(e=>e.reorderGroupMembers),p=(0,R.u)(e=>e.toggleThread),g=(0,R.u)(e=>e.updateGroupConfig),u=(0,J.L)(e=>e.togglePortal),h=(0,J.L)(e=>e.internal_cancelSupervisorDecision),y=(0,J.L)(e=>e.internal_triggerSupervisorDecision),f=(0,J.L)(Q.fA.isSupervisorLoading(r||"")),b=(0,R.u)(U.a.getGroupConfig(r||"")),x=(0,Z.k)(e=>({avatar:ee.f.userAvatar(e),name:ee.f.nickName(e)})),[S,A]=(0,i.useState)(!1),[k,w]=(0,i.useState)(),C=async(e,t,o)=>{if(!r)return void console.error("No active group to add members to");if(void 0!==t||void 0!==o){let e={};void 0!==o&&(e.enableSupervisor=o),t&&(e.orchestratorModel=t.model,e.orchestratorProvider=t.provider),Object.keys(e).length>0&&await g(e)}e.length>0&&await l(r,e),n(!1)},O=(0,i.useMemo)(()=>e?.members??[],[e?.members]),[Y,j]=(0,i.useState)(O),[P,N]=(0,i.useState)([]),F=async(e,t)=>{N(t=>t.includes(e)?t:[...t,e]);try{await t()}finally{N(t=>t.filter(t=>t!==e))}};(0,i.useEffect)(()=>{j(O)},[O]);let D=async e=>{r&&await F(e,()=>s(r,e))};return(0,o.FD)(o.FK,{children:[(0,o.FD)(v.Flexbox,{gap:2,padding:6,children:[b?.enableSupervisor&&(0,o.Y)(es,{actions:(0,o.Y)(c.A,{danger:!0,icon:W,loading:P.includes("orchestrator"),onClick:e=>{e.stopPropagation(),F("orchestrator",()=>g({enableSupervisor:!1}))},size:"small",title:a("groupSidebar.members.removeMember")}),avatar:V.J7,generating:f,generatingTooltip:a("groupSidebar.members.orchestratorThinking"),id:"orchestrator",onStopGenerating:()=>{r&&h(r)},onStopGeneratingTooltip:a("groupSidebar.members.stopOrchestrator"),onTriggerSupervisor:()=>{r&&y(r,void 0,!0)},onTriggerSupervisorTooltip:a("groupSidebar.members.triggerOrchestrator"),pin:!0,showActionsOnHover:!0,title:a("groupSidebar.members.orchestrator")}),(0,o.Y)(es,{avatar:x.avatar,id:"currentUser",pin:!0,showActionsOnHover:!1,title:x.name||""}),!!(Y&&Y.length>0)&&(0,o.Y)(K.A,{gap:2,items:Y,onChange:async e=>{j(e),r&&d(r,e.map(e=>e.id)).catch(()=>{console.error("Failed to persist reorder")})},renderItem:e=>(0,o.Y)(es,{actions:(0,o.FD)(o.FK,{children:[(0,o.Y)(c.A,{icon:X.A,onClick:t=>{t.stopPropagation(),w(e.id),A(!0)},size:"small",title:a("groupSidebar.members.memberSettings")}),(0,o.Y)(c.A,{danger:!0,icon:W,loading:P.includes(e.id),onClick:t=>{t.stopPropagation(),D(e.id)},size:"small",title:a("groupSidebar.members.removeMember")})]}),avatar:e.avatar||V.k_,background:e.backgroundColor,id:e.id,onClick:()=>{p(e.id),u(!0)},title:e.title||a("defaultSession",{ns:"common"})}),style:{margin:0}})]}),(0,o.Y)(q.A,{currentHostConfig:{enableSupervisor:b?.enableSupervisor,orchestratorModel:b?.orchestratorModel,orchestratorProvider:b?.orchestratorProvider},existingMembers:e?.members?.map(e=>e.id)||[],groupId:r,mode:"add",onCancel:()=>n(!1),onConfirm:C,open:t}),(0,o.Y)(et.default,{agentId:k,onClose:()=>{A(!1),w(void 0)},open:S})]})}),ed=(0,b.rU)(({css:e,token:t})=>({avatar:e`
    flex: none;
  `,desc:e`
    color: ${t.colorTextDescription};
    text-align: center;
  `,title:e`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  `})),em=(0,i.memo)(({style:e,meta:t,onAvatarClick:n})=>{let{styles:i,theme:r}=ed();if(t)return(0,o.FD)(N.default,{gap:16,style:e,children:[(0,o.Y)(C.A,{animation:!0,avatar:"\uD83D\uDC65",background:r.colorFillTertiary,className:i.avatar,onClick:n,size:100}),t.title&&(0,o.Y)("div",{className:i.title,children:t.title}),t?.tags?.length>0&&(0,o.Y)(N.default,{gap:6,horizontal:!0,style:{flexWrap:"wrap"},children:t.tags.map((e,t)=>(0,o.Y)(O.A,{style:{margin:0},children:(0,P.A)(e).trim()},t))}),t.description&&(0,o.Y)("div",{className:i.desc,children:t.description})]})}),ep=(0,i.memo)(({currentSession:e,editorModalOpen:t,setEditorModalOpen:n,setEditing:i,editing:r})=>{let{styles:a}=el(),{t:s}=(0,m.Bd)("chat"),c=(0,l.B)(e=>e.activeId),d=(0,R.u)(e=>e.updateGroupConfig),p=(0,R.u)(U.a.currentGroupConfig),g=async e=>{c&&await d({systemPrompt:e})};return(0,o.Y)(v.Flexbox,{height:200,onClick:e=>{e.stopPropagation(),t||(e.altKey&&(e.stopPropagation(),i(!0),n(!0)),n(!0))},padding:16,children:(0,o.Y)(k.A,{classNames:{markdown:a.prompt},editing:r,markdownProps:{enableLatex:!1,enableMermaid:!1},model:{extra:(0,o.Y)(em,{meta:e?.meta,style:{marginBottom:16}})},onChange:g,onEditingChange:i,onOpenChange:n,openModal:t,placeholder:`${s("settingGroup.systemPrompt.placeholder",{ns:"setting"})}...`,styles:{markdown:{opacity:p?.systemPrompt?void 0:.5,overflow:"visible"}},text:{cancel:s("cancel",{ns:"common"}),confirm:s("ok",{ns:"common"}),edit:s("edit",{ns:"common"}),title:s("settingGroup.systemPrompt.title",{ns:"setting"})},value:p?.systemPrompt||""})})});ep.displayName="GroupRole";let eg=(0,i.memo)(()=>{let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),[a,p]=(0,i.useState)(!1),[g,u]=(0,i.useState)("members"),{t:h}=(0,m.Bd)(["chat","common"]),[y]=(0,l.B)(e=>[e.activeId]),f=(0,l.B)(e=>{let t=s.z.currentSession(e);return t?.type==="group"?t:void 0},L()),b=(0,R.u)(U.a.getGroupConfig(y||""));(0,i.useEffect)(()=>{"host"!==g||b?.enableSupervisor||u("members")},[g,b?.enableSupervisor]);let v="members"===g?(0,o.Y)(c.A,{icon:_,onClick:e=>{e.stopPropagation(),t(!0)},size:"small",title:h("groupSidebar.members.addMember")}):"host"===g?(0,o.Y)(c.A,{icon:d.A,onClick:e=>{e.stopPropagation(),p(!0),r(!0)},size:"small",title:h("edit",{ns:"common"})}):void 0;return(0,o.FD)(A,{actions:v,expandedHeight:"members"===g?"40vh":200,headerStyle:{paddingBlock:0,paddingLeft:0},sessionId:y,title:(0,o.Y)($.A,{activeKey:g,compact:!0,items:[{key:"members",label:h("groupSidebar.tabs.members")},...b?.enableSupervisor?[{key:"host",label:h("groupSidebar.tabs.host")}]:[]],onChange:e=>u(e),onClick:e=>{e.stopPropagation()},size:"small",variant:"rounded"}),children:["members"===g&&(0,o.Y)(ec,{addModalOpen:e,currentSession:f,onAddModalOpenChange:t,sessionId:y}),"host"===g&&(0,o.Y)(ep,{currentSession:f,editing:a,editorModalOpen:n,setEditing:p,setEditorModalOpen:r})]})}),eu=(0,i.memo)(()=>{let{isAgentEditable:e}=(0,r.wo)(a.E),t=(0,l.B)(s.z.isInboxSession),n=(0,l.B)(s.z.isCurrentSessionGroupSession);if(!t){if(n)return(0,o.Y)(eg,{});if(e)return(0,o.Y)(E,{})}});eu.displayName="ConfigSwitcher";let eh=eu},37884:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var o=n(28802),i=n(78497),r=n(31021),a=n.n(r),l=n(83034),s=n(59121),c=n(80457),d=n(40318),m=n(52702),p=n(69177),g=n(35245),u=n(64861),h=n(21041),y=n(91346),f=n(43777),b=n(87662),v=n(30179),x=n(32092),S=n(45541),A=n(88990),k=n(78397),w=n(64811),C=n(17869),O=n(3296);let Y=(0,l.memo)(({agentId:e,onClose:t,open:r})=>{let{t:Y}=(0,s.Bd)("setting"),j=(0,w.B)(e=>e.activeId),P=e||j,N=(0,S.o)(t=>e?A.e.getAgentConfigByAgentId(e)(t):P?A.e.getAgentConfigById(P)(t):A.e.currentAgentConfig(t),a()),F=(0,w.B)(t=>e?C.G.getAgentMetaByAgentId(e)(t):C.G.currentAgentMeta(t),a()),{isLoading:D}=(0,x.H)(e),[z,M]=(0,S.o)(e=>[e.showAgentSetting,e.updateAgentConfig]),[B]=(0,w.B)(e=>[e.updateSessionMeta,C.G.currentAgentTitle(e)]),T=async t=>{if(e){let n=(w.B.getState().sessions||[]).find(t=>t.type===O.r.Agent&&t.config?.id===e);n&&await S.o.getState().internal_updateAgentConfig(n.id,t)}else await M(t)},I=async t=>{if(e){let o=(w.B.getState().sessions||[]).find(t=>t.type===O.r.Agent&&t.config?.id===e);if(o){let{sessionService:e}=await Promise.resolve().then(n.bind(n,30333));await e.updateSessionMeta(o.id,t),await w.B.getState().refreshSessions()}}else await B(t)},E=t||(()=>S.o.setState({showAgentSetting:!1})),$=P===g.Ed,[H,L]=(0,l.useState)($?k.iL.Prompt:k.iL.Meta);return(0,o.Y)(f.e,{config:N,id:P,loading:D,meta:F,onConfigChange:T,onMetaChange:I,children:(0,o.FD)(i.A,{containerMaxWidth:1280,height:u.xl?`calc(100vh - ${b.X}px)`:"100vh",noHeader:!0,onClose:E,open:void 0!==r?r:z,placement:"bottom",sidebar:(0,o.FD)(c.Flexbox,{gap:20,style:{height:"calc(100vh - 28px)"},children:[(0,o.Y)(p.A,{desc:Y("header.sessionDesc"),title:Y("header.session")}),(0,o.Y)(c.Flexbox,{flex:1,width:"100%",children:(0,o.Y)(h.A,{setTab:L,tab:H})}),(0,o.Y)(c.Flexbox,{align:"center",gap:8,paddingInline:8,width:"100%",children:(0,o.Y)(d.A,{modal:!0})}),(0,o.Y)(m.A,{paddingInline:12})]}),sidebarWidth:280,styles:{sidebarContent:{gap:48,justifyContent:"space-between",minHeight:u.xl?`calc(100% - ${b.X}px)`:"100%",paddingBlock:24,paddingInline:48}},children:[(0,o.Y)(y.A,{config:N,id:P,loading:D,meta:F,onConfigChange:T,onMetaChange:I,tab:H}),(0,o.Y)(v.A,{})]})})})},52702:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(28802),i=n(8756),r=n(11577),a=n(51997),l=n.n(a),s=n(83034),c=n(80457),d=n(98724),m=n(45628),p=n(64861);let g=(0,r.rU)(({token:e,css:t})=>({logoLink:t`
    line-height: 1;
    color: inherit;

    &:hover {
      color: ${e.colorLink};
    }
  `})),u=(0,s.memo)(({style:e,...t})=>{let{styles:n,theme:r}=g();return(0,o.FD)(c.Flexbox,{align:"center",dir:"ltr",flex:"none",gap:4,horizontal:!0,style:{color:r.colorTextDescription,fontSize:12,...e},...t,children:[(0,o.Y)("span",{children:"Powered by"}),p.Eb?(0,o.Y)("span",{children:d.dS}):(0,o.Y)(l(),{className:n.logoLink,href:`https://lobehub.com?utm_source=${m.VU}&utm_content=brand_watermark`,target:"_blank",children:(0,o.Y)(i.default,{size:20,type:"text"})})]})})},54645:(e,t,n)=>{n.d(t,{A:()=>E});var o,i,r,a,l,s,c,d,m=n(11577),p=n(83034),g=n(80457),u=n(85017),h=n(67524),y=n(12389),f=n(75431);function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v=(0,m.rU)(function(e){var t=e.cx,n=e.css,m=e.token,p=e.stylish;return{actions:n(o||(o=b(["\n      position: absolute;\n      inset-block-start: 50%;\n      inset-inline-end: 16px;\n      transform: translateY(-50%);\n    "]))),active:p.active,content:n(i||(i=b(["\n      position: relative;\n      overflow: hidden;\n      flex: 1;\n      align-self: center;\n    "]))),date:n(r||(r=b(["\n      font-size: 12px;\n      color: ",";\n    "])),m.colorTextPlaceholder),desc:n(a||(a=b(["\n      width: 100%;\n      margin: 0;\n\n      font-size: 12px;\n      line-height: 1.2;\n      color: ",";\n    "])),m.colorTextDescription),pin:n(l||(l=b(["\n      position: absolute;\n      inset-block-start: 6px;\n      inset-inline-end: 6px;\n    "]))),root:t(p.variantBorderless,n(s||(s=b(["\n        cursor: pointer;\n        position: relative;\n        border-radius: ","px;\n        color: ",";\n      "])),m.borderRadius,m.colorTextTertiary)),title:n(c||(c=b(["\n      width: 100%;\n      margin: 0;\n\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 1.2;\n      color: ",";\n    "])),m.colorText),triangle:n(d||(d=b(["\n      width: 10px;\n      height: 10px;\n      border-radius: 2px;\n\n      opacity: 0.5;\n      background: ",";\n      clip-path: polygon(0% 0%, 100% 0%, 100% 100%);\n    "])),m.colorPrimaryBorder)}}),x=n(2644),S=n.n(x),A=function(e){var t=S()(e);return t.isSame(S()(),"day")?t.format("HH:mm"):t.format("MM-DD")},k=n(54898);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var C=["ref","active","avatar","loading","description","date","title","onHoverChange","actions","className","style","showAction","children","classNames","addon","pin","styles"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){var o,i,r;o=e,i=t,r=n[t],(i=function(e){var t=function(e,t){if("object"!=w(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=w(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==w(t)?t:String(t)}(i))in o?Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[i]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j=(0,p.memo)(function(e){var t=e.ref,n=e.active,o=e.avatar,i=e.loading,r=e.description,a=e.date,l=e.title,s=e.onHoverChange,c=e.actions,d=e.className,m=e.style,p=e.showAction,b=e.children,x=e.classNames,S=e.addon,w=e.pin,O=e.styles,j=function(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,C),P=v(),N=P.styles,F=P.cx,D=(0,k.jsx)(y.default,{icon:u.A,spin:!0}),z=w&&(0,k.jsx)("div",{className:F(N.pin,null==x?void 0:x.pin),style:null==O?void 0:O.pin,children:(0,k.jsx)("div",{className:N.triangle})}),M=c&&(0,k.jsx)(g.Flexbox,{className:F(N.actions,null==x?void 0:x.actions),gap:4,horizontal:!0,onClick:function(e){e.preventDefault(),e.stopPropagation()},style:Y({display:p?void 0:"none"},null==O?void 0:O.actions),children:c}),B=a&&(0,k.jsx)("div",{className:F(N.date,null==x?void 0:x.date),style:Y({opacity:p?0:void 0},null==O?void 0:O.date),children:A(a)});return(0,k.jsxs)(g.Flexbox,Y(Y({align:"flex-start",className:F(N.root,n&&N.active,d),distribution:"space-between",gap:8,horizontal:!0,onMouseEnter:function(){null==s||s(!0)},onMouseLeave:function(){null==s||s(!1)},padding:12,ref:t,style:m},j),{},{children:[z,(0,k.jsxs)(g.Flexbox,{align:"flex-start",className:null==x?void 0:x.container,flex:1,gap:8,horizontal:!0,style:Y({overflow:"hidden"},null==O?void 0:O.container),children:[null!=o?o:(0,k.jsx)(y.default,{icon:h.A,style:{marginTop:4}}),(0,k.jsxs)(g.Flexbox,{className:F(N.content,null==x?void 0:x.content),gap:4,style:null==O?void 0:O.content,children:[(0,k.jsx)(f.A,{as:"h3",className:F(N.title,null==x?void 0:x.title),ellipsis:!0,style:null==O?void 0:O.title,children:l}),r&&(0,k.jsx)(f.A,{className:F(N.desc,null==x?void 0:x.desc),ellipsis:!0,style:null==O?void 0:O.desc,children:r}),S]})]}),i?D:(0,k.jsxs)(k.Fragment,{children:[M,B]}),b]}))});function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}j.displayName="ListItem";var N=["ref","activeKey","classNames","styles","onClick","items"],F=["key","onClick","className","style"],D=["item"],z=["item"];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(t){var o,i,r;o=e,i=t,r=n[t],(i=function(e){var t=function(e,t){if("object"!=P(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=P(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==P(t)?t:String(t)}(i))in o?Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[i]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function T(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var I=(0,p.memo)(function(e){var t=e.ref,n=e.activeKey,o=e.classNames,i=e.styles,r=e.onClick,a=e.items,l=T(e,N);return(0,k.jsx)(g.Flexbox,B(B({gap:4,padding:4},l),{},{children:a.map(function(e){var a=e.key,l=e.onClick,s=e.className,c=e.style,d=T(e,F),p=o||{},g=p.item,u=T(p,D),h=i||{},y=h.item,f=T(h,z);return(0,k.jsx)(j,B({active:e.key===n,className:(0,m.cx)(g,s),classNames:u,onClick:function(t){null==r||r({item:e,key:a}),null==l||l(t)},ref:t,style:B(B({},y),c),styles:f},d),a)})}))});I.displayName="List",I.Item=j;let E=I},69177:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(28802),i=n(11577),r=n(83034),a=n(80457);let l=(0,i.rU)(({token:e,css:t})=>({desc:t`
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
  `})),s=(0,r.memo)(({title:e,desc:t,style:n})=>{let{styles:i}=l();return(0,o.FD)(a.Flexbox,{className:i.header,gap:4,style:n,children:[(0,o.Y)("h1",{className:i.title,children:e}),(0,o.Y)("p",{className:i.desc,children:t})]})})}}]);