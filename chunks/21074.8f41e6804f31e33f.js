"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21074],{599:(e,t,o)=>{o.d(t,{A:()=>r});let r=(0,o(28709).A)("messages-square",[["path",{d:"M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",key:"1n2ejm"}],["path",{d:"M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",key:"1qfcsi"}]])},18328:(e,t,o)=>{o.d(t,{A:()=>d});var r=o(28802),i=o(92619),n=o(84663),a=o(11577),l=o(83034);let s=(0,a.rU)(({css:e,token:t,prefixCls:o})=>({compact:e`
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
  `})),d=(0,l.memo)(({className:e,selectable:t=!1,compact:o,...a})=>{let{cx:l,styles:d,theme:c}=s();return(0,r.Y)(i.Ay,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:c.borderRadius,itemColor:t?c.colorTextSecondary:c.colorText,itemHoverBg:c.colorFillTertiary,itemMarginBlock:4*!o,itemMarginInline:4*!o,itemSelectedBg:c.colorFillSecondary,paddingXS:-8}}},children:(0,r.Y)(n.A,{className:l(d.menu,o&&d.compact,e),mode:"vertical",selectable:t,...a})})})},21074:(e,t,o)=>{o.r(t),o.d(t,{default:()=>eH});var r=o(28802),i=o(78497),n=o(31021),a=o.n(n),l=o(83034),s=o(59121),d=o(80457),c=o(52702),p=o(69177),u=o(64861),h=o(87662),g=o(81088),m=o(2773),b=o(14308),f=o(50786),v=o(23993),x=o(99061),y=o(61497);let Y={config:x.DM,loading:!0,loadingState:{meta:!1},meta:x.ap},A=(0,y.K)("GroupChatSettings"),G=(e,t)=>({...Y,resetGroupConfig:async()=>{let{onConfigChange:o}=t(),r=x.DM;await o?.(r),e({config:r},!1,A("resetGroupConfig"))},resetGroupMeta:async()=>{let{onMetaChange:o}=t(),r=x.ap;await o?.(r),e({meta:r},!1,A("resetGroupMeta"))},setGroupConfig:async o=>{let{onConfigChange:r}=t(),i={...t().config||x.DM,...o};await r?.(i),e({config:i},!1,A("setGroupConfig"))},setGroupMeta:async o=>{let{onMetaChange:r}=t(),i={...t().meta||x.ap,...o};await r?.(i),e({meta:i},!1,A("setGroupMeta"))},updateGroupConfig:async e=>{await t().setGroupConfig(e)},updateGroupMeta:async e=>{await t().setGroupMeta(e)},updateLoadingState:(o,r)=>{let{loadingState:i}=t();e({loadingState:{...i,[o]:r}},!1,A("updateLoadingState",{[o]:r}))}}),w=()=>(0,v.h)((0,b.eh)(G),f.x),{useStore:F,useStoreApi:C,Provider:M}=(0,m.q)(),k=(0,l.memo)(({onConfigChange:e,instanceRef:t,id:o,onMetaChange:r,meta:i,config:n,loading:a})=>{let s=C(),d=(0,g.H)(s);d("meta",i),d("config",n),d("onConfigChange",e),d("onMetaChange",r),d("loading",a),d("id",o);let c=(()=>{let{updateGroupConfig:e,updateGroupMeta:t,resetGroupConfig:o,resetGroupMeta:r}=C().getState();return(0,l.useMemo)(()=>({resetGroupConfig:o,resetGroupMeta:r,updateGroupConfig:e,updateGroupMeta:t}),[])})();return(0,l.useImperativeHandle)(t,()=>c),null}),S=(0,l.memo)(({children:e,...t})=>(0,r.FD)(M,{createStore:w,children:[(0,r.Y)(k,{...t}),e]}));var $=o(18328),D=o(12389),z=o(39196),B=o(599),T=o(88967),N=o(78397);let I=(0,l.memo)(({setTab:e,tab:t})=>{let o=(({mobile:e}={})=>{let{t}=(0,s.Bd)("setting"),o=e?20:void 0;return(0,l.useMemo)(()=>[{icon:(0,r.Y)(D.default,{icon:z.A,size:o}),key:N.xY.Settings,label:t("groupTab.meta")},{icon:(0,r.Y)(D.default,{icon:B.A,size:o}),key:N.xY.Chat,label:t("groupTab.chat")},{icon:(0,r.Y)(D.default,{icon:T.A,size:o}),key:N.xY.Members,label:t("groupTab.members")}].filter(Boolean),[t,o])})();return(0,r.Y)($.A,{compact:!0,items:o,onClick:({key:t})=>{e(t)},selectable:!0,selectedKeys:[t]})});var W=o(59202),H=o(62326),_=o(43588),L=o(89026),R=o(47762),P=o(96337),U=o(53809),j=o(58244),O=o(80176),E=o(42507),q=o(73434),V=o.n(q),K=o(28709);let X=(0,K.A)("turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);var J=o(97809);let Z=(0,K.A)("rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);var Q=o(49935),ee=o(99859),et=o(67095);let eo=e=>(0,et.h)(x.DM,e.config),er=e=>(0,et.h)(x.ap,e.meta),{TextArea:ei}=U.A,en=(0,l.memo)(()=>{let{t:e}=(0,s.Bd)(["setting","common"]),[t]=_.Ay.useForm(),o=F(e=>e.updateGroupConfig),i=F(eo,V()),{message:n}=j.A.useApp(),a=O.A.useWatch("allowDM",t),l=O.A.useWatch("enableSupervisor",t),d=[{icon:(0,r.Y)(D.default,{icon:X,size:16}),label:e("settingGroupChat.responseSpeed.options.slow"),value:"slow"},{icon:(0,r.Y)(D.default,{icon:J.A,size:16}),label:e("settingGroupChat.responseSpeed.options.medium"),value:"medium"},{icon:(0,r.Y)(D.default,{icon:Z,size:16}),label:e("settingGroupChat.responseSpeed.options.fast"),value:"fast"}],c={children:[{children:(0,r.Y)(E.A,{}),desc:e("settingGroupChat.enableSupervisor.desc"),divider:!1,label:e("settingGroupChat.enableSupervisor.title"),name:"enableSupervisor"},...l?[{children:(0,r.Y)(ee.A,{requiredAbilities:["structuredOutput"]}),desc:e("settingGroupChat.model.desc"),label:e("settingGroupChat.model.title"),name:"_modelConfig"},{children:(0,r.Y)(ei,{autoSize:{maxRows:8,minRows:3},placeholder:e("settingGroupChat.systemPrompt.placeholder"),rows:4}),desc:e("settingGroupChat.systemPrompt.desc"),label:e("settingGroupChat.systemPrompt.title"),name:"systemPrompt"}]:[]],title:e("settingGroupChat.orchestratorTitle")},p={children:[{children:(0,r.Y)(L.A,{options:d}),desc:e("settingGroupChat.responseSpeed.desc"),label:e("settingGroupChat.responseSpeed.title"),name:"responseSpeed"},{children:(0,r.Y)(R.A,{options:[{label:e("settingGroupChat.responseOrder.options.sequential"),value:"sequential"},{label:e("settingGroupChat.responseOrder.options.natural"),value:"natural"}],placeholder:e("settingGroupChat.responseOrder.placeholder")}),desc:e("settingGroupChat.responseOrder.desc"),label:e("settingGroupChat.responseOrder.title"),name:"responseOrder"},{children:(0,r.Y)(P.A,{max:32,min:0,step:1,unlimitedInput:!0}),desc:e("settingGroupChat.maxResponseInRow.desc"),divider:!1,label:e("settingGroupChat.maxResponseInRow.title"),name:"maxResponseInRow"},{children:(0,r.Y)(E.A,{}),desc:e("settingGroupChat.allowDM.desc"),divider:!1,label:e("settingGroupChat.allowDM.title"),name:"allowDM"},...a?[{children:(0,r.Y)(E.A,{}),desc:e("settingGroupChat.revealDM.desc"),divider:!1,label:e("settingGroupChat.revealDM.title"),name:"revealDM"}]:[]],title:e("settingGroupChat.title")};return(0,r.Y)(_.Ay,{footer:(0,r.Y)(_.Ay.SubmitFooter,{texts:{reset:e("submitFooter.reset"),submit:e("submitFooter.submit"),unSaved:e("submitFooter.unSaved"),unSavedWarning:e("submitFooter.unSavedWarning")}}),form:t,initialValues:{...i,_modelConfig:{model:i?.orchestratorModel,provider:i?.orchestratorProvider},enableSupervisor:i?.enableSupervisor??!0},items:[c,...l?[p]:[]],itemsType:"group",onFinish:async({_modelConfig:t,...r})=>{await o({orchestratorModel:t?.model??i?.orchestratorModel,orchestratorProvider:t?.provider??i?.orchestratorProvider,...r}),n.success(e("message.success"))},variant:"borderless",...Q.pC})});var ea=o(75431),el=o(3136),es=o(9274),ed=o(99454),ec=o(11577),ep=o(90897),eu=o(99278),eh=o(50243),eg=o(40473),em=o(64811),eb=o(62016),ef=o(3296),ev=o(67072),ex=o(37412),ey=o(35426),eY=o(85017);let eA=(0,ec.rU)(({css:e,token:t,isDarkMode:o})=>({container:e`
    position: relative;

    overflow: hidden;

    height: 100%;
    border: 1px solid ${o?t.colorBorder:t.colorBorderSecondary};
    border-radius: 12px;

    background: ${t.colorBgContainer};

    transition: border-color 0.2s ${t.motionEaseInOut};

    &:hover {
      border-color: ${t.colorPrimary};
    }
  `,desc:e`
    overflow: hidden;

    height: 3em;
    margin-block-end: 0 !important;

    line-height: 1.5;
    color: ${t.colorTextDescription};
  `,title:e`
    line-height: 1.3;
  `})),eG=(0,l.memo)(({agent:e,inGroup:t,isHost:o,loading:i,onAction:n,operationLoading:a})=>{let{t:l}=(0,s.Bd)("setting"),{cx:c,styles:p}=eA();if(i)return(0,r.Y)(d.Flexbox,{className:c(p.container),gap:24,padding:16,children:(0,r.Y)(W.A,{active:!0})});let u=e.config?.id,h=e.meta?.title||l("settingGroupMembers.defaultAgent"),g=e.meta?.description||"",m=e.meta?.avatar||eu.k_,b=e.meta?.backgroundColor;return u?(0,r.Y)(d.Flexbox,{className:c(p.container),gap:24,children:(0,r.FD)(d.Flexbox,{gap:12,padding:16,width:"100%",children:[(0,r.FD)(d.Flexbox,{gap:12,width:"100%",children:[(0,r.Y)(d.Flexbox,{align:"center",horizontal:!0,justify:"space-between",children:(0,r.FD)(d.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,style:{minWidth:0},children:[(0,r.Y)(ev.A,{avatar:m,background:b,shape:"circle",size:24,style:{flexShrink:0}}),(0,r.Y)(ea.A,{className:p.title,ellipsis:!0,style:{fontSize:16,fontWeight:"bold",minWidth:0},children:h}),o&&(0,r.Y)(ex.A,{title:l("settingGroupMembers.groupHost"),children:(0,r.Y)(D.default,{icon:ey.A,size:"small",style:{color:"#1890ff"}})})]})}),(0,r.Y)(ea.A,{className:p.desc,ellipsis:{rows:2},children:g||l("settingGroupMembers.noDescription")})]}),(0,r.FD)(d.Flexbox,{align:"center",horizontal:!0,justify:"space-between",width:"100%",children:[(0,r.Y)(D.default,{icon:eY.A,size:"small",spin:!0,style:{opacity:+!!a}}),(0,r.Y)(ex.A,{title:l(t?"settingGroupMembers.removeFromGroup":"settingGroupMembers.addToGroup"),children:(0,r.Y)(E.A,{checked:t,disabled:a,onChange:e=>{n(u,e?"add":"remove")},size:"small"})})]})]})}):null}),ew=(0,ec.rU)(({css:e,token:t,isDarkMode:o})=>({container:e`
    position: relative;

    overflow: hidden;

    height: 100%;
    border: 1px solid ${o?t.colorBorder:t.colorBorderSecondary};
    border-radius: 12px;

    background: ${t.colorBgContainer};

    transition: border-color 0.2s ${t.motionEaseInOut};

    &:hover {
      border-color: ${t.colorPrimary};
    }
  `,desc:e`
    overflow: hidden;

    height: 3em;
    margin-block-end: 0 !important;

    line-height: 1.5;
    color: ${t.colorTextDescription};
  `,title:e`
    line-height: 1.3;
  `})),eF=(0,l.memo)(({checked:e,loading:t,onToggle:o})=>{let{cx:i,styles:n}=ew(),{t:a}=(0,s.Bd)("setting"),l=a("settingGroupMembers.host.title"),c=a("settingGroupMembers.host.description"),p=a(e?"settingGroupMembers.disableHost":"settingGroupMembers.enableHost");return(0,r.Y)(d.Flexbox,{className:i(n.container),gap:24,children:(0,r.FD)(d.Flexbox,{gap:12,padding:16,width:"100%",children:[(0,r.FD)(d.Flexbox,{gap:12,width:"100%",children:[(0,r.Y)(d.Flexbox,{align:"center",horizontal:!0,justify:"space-between",children:(0,r.FD)(d.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,style:{minWidth:0},children:[(0,r.Y)(ev.A,{avatar:eu.J7,shape:"circle",size:24,style:{flexShrink:0}}),(0,r.Y)(ea.A,{className:n.title,ellipsis:!0,style:{fontSize:16,fontWeight:"bold",minWidth:0},children:l}),(0,r.Y)(ex.A,{title:a("settingGroupMembers.groupHost"),children:(0,r.Y)(D.default,{icon:ey.A,size:"small",style:{color:"#1890ff"}})})]})}),(0,r.Y)(ea.A,{className:n.desc,ellipsis:{rows:2},children:c})]}),(0,r.FD)(d.Flexbox,{align:"center",horizontal:!0,justify:"space-between",width:"100%",children:[(0,r.Y)(D.default,{icon:eY.A,size:"small",spin:!0,style:{opacity:+!!t}}),(0,r.Y)(ex.A,{title:p,children:(0,r.Y)(E.A,{checked:e,disabled:t,onChange:o,size:"small"})})]})]})})}),eC=(0,ec.rU)(({css:e})=>({container:e`
    width: 100%;
  `})),eM="supervisor",ek=(0,l.memo)(()=>{let{t:e}=(0,s.Bd)("setting"),{styles:t}=eC(),[o,i]=(0,l.useState)(null),[n,a]=(0,l.useState)(!1),c=(0,em.B)(e=>e.activeId),p=(0,em.B)(eb.z.currentSession),u=(0,eh.u)(eg.a.currentGroupConfig),h=(0,eh.u)(e=>e.addAgentsToGroup),g=(0,eh.u)(e=>e.removeAgentFromGroup),m=(0,eh.u)(e=>e.updateGroupConfig),b=(0,em.B)(e=>e.refreshSessions),f=(0,em.B)(e=>e.createSession),v=(0,em.B)(e=>(e.sessions||[]).filter(e=>e.type===ef.r.Agent)),x=(0,em.B)(e=>e.activeId),y=!!u?.enableSupervisor,Y=(0,l.useMemo)(()=>p?.members?.map(e=>e.id)||[],[p?.members]),{agentsInGroup:A,agentsNotInGroup:G}=(0,l.useMemo)(()=>{let e=[],t=[];return v.forEach(o=>{let r=o.config?.id;r&&o.id!==x&&(Y.includes(r)?e.push(o):t.push(o))}),{agentsInGroup:e,agentsNotInGroup:t}},[v,Y,x]),w=async(e,t)=>{if(!c)return void console.error("No active group to perform action on");let o=e===eM;i(e);try{"add"===t?o?await m({enableSupervisor:!0}):await h(c,[e]):o?await m({enableSupervisor:!1}):await g(c,e),await b()}catch(e){console.error(`Failed to ${t} agent ${"add"===t?"to":"from"} group:`,e)}finally{i(null)}},F=o===eM,C=e=>{w(eM,e?"add":"remove")},M=async()=>{if(c&&!n){a(!0);try{let t=await f({config:{virtual:!0},meta:{avatar:eu.k_,description:"",title:e("settingGroupMembers.defaultAgent")}},!1);await b();let o=eb.z.getSessionById(t)(em.B.getState());if(o&&o.type===ef.r.Agent){let e=o.config?.id;e&&(await h(c,[e]),await b())}}catch(e){console.error("Failed to create virtual member:",e)}finally{a(!1)}}},k=A.length+ +!!y,S=G.length+ +!y;return(0,r.FD)(d.Flexbox,{className:t.container,gap:40,children:[(0,r.FD)(d.Flexbox,{gap:24,children:[(0,r.FD)(d.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",children:[(0,r.FD)(d.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,r.Y)(ea.A,{strong:!0,style:{fontSize:18},children:e("settingGroupMembers.groupMembers")}),(0,r.Y)(el.A,{children:k})]}),(0,r.Y)(es.A,{icon:ep.A,loading:n,onClick:M,title:e("settingGroupMembers.createMember")})]}),(0,r.FD)(ed.A,{gap:16,rows:3,children:[y&&(0,r.Y)(eF,{checked:!0,loading:F,onToggle:C}),A.map(e=>(0,r.Y)(eG,{agent:e,inGroup:!0,onAction:w,operationLoading:o===e.config?.id},e.config?.id)),0===A.length&&!y&&(0,r.Y)(ea.A,{style:{color:"#999",gridColumn:"1 / -1",padding:40,textAlign:"center"},children:e("settingGroupMembers.noMembersInGroup")})]})]}),(0,r.FD)(d.Flexbox,{gap:24,children:[(0,r.FD)(d.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,r.Y)(ea.A,{strong:!0,style:{fontSize:18},children:e("settingGroupMembers.availableAgents")}),(0,r.Y)(el.A,{children:S})]}),(0,r.FD)(ed.A,{gap:16,rows:3,children:[!y&&(0,r.Y)(eF,{checked:!1,loading:F,onToggle:C}),G.map(e=>(0,r.Y)(eG,{agent:e,inGroup:!1,onAction:w,operationLoading:o===e.config?.id},e.config?.id)),0===G.length&&y&&(0,r.Y)(ea.A,{style:{color:"#999",gridColumn:"1 / -1",padding:40,textAlign:"center"},children:e("settingGroupMembers.noAvailableAgents")})]})]})]})});var eS=o(79778),e$=o(72823);let{TextArea:eD}=U.A,ez=(0,l.memo)(()=>{let{t:e}=(0,s.Bd)(["setting","common"]),[t]=_.Ay.useForm(),o=F(e=>e.updateGroupMeta),i=F(er,a())||{},n=F(e=>e.updateGroupConfig),l=F(eo,a())||{};(0,eS.A)(()=>{t.setFieldsValue({...i,scene:l.scene})},[i,l?.scene]);let d={children:[{children:(0,r.Y)(U.A,{placeholder:e("settingGroup.name.placeholder")}),label:e("settingGroup.name.title"),name:"title"},{children:(0,r.Y)(eD,{autoSize:{maxRows:10,minRows:5},placeholder:e("settingGroup.description.placeholder"),rows:4}),label:e("settingGroup.description.title"),name:"description"},{children:(0,r.Y)(L.A,{options:[{icon:(0,r.Y)(D.default,{icon:J.A,size:16}),label:e("settingGroup.scene.options.casual"),value:"casual"},{icon:(0,r.Y)(D.default,{icon:e$.A,size:16}),label:e("settingGroup.scene.options.productive"),value:"productive"}]}),desc:e("settingGroup.scene.desc"),label:e("settingGroup.scene.title"),minWidth:void 0,name:"scene"}],title:e("settingGroup.title")};return(0,r.Y)(_.Ay,{footer:(0,r.Y)(_.Ay.SubmitFooter,{texts:{reset:e("submitFooter.reset"),submit:e("submitFooter.submit"),unSaved:e("submitFooter.unSaved"),unSavedWarning:e("submitFooter.unSavedWarning")}}),form:t,initialValues:{...i,scene:l.scene},items:[d],itemsType:"group",onFinish:async e=>{let{scene:t,...r}=e;await o(r),t&&t!==l.scene&&await n({scene:t})},variant:"borderless",...Q.pC})}),eB=(0,l.memo)(({tab:e})=>(0,r.FD)(r.FK,{children:[e===N.xY.Settings&&(0,r.Y)(ez,{}),e===N.xY.Members&&(0,r.Y)(ek,{}),e===N.xY.Chat&&(0,r.Y)(en,{})]})),eT=(0,l.memo)(({tab:e=N.xY.Settings,...t})=>{let o=(0,H.wo)(e=>e.isMobile),i=(0,r.Y)(W.A,{active:!0,paragraph:{rows:6},style:{padding:16*!!o},title:!1});return(0,r.Y)(S,{...t,children:(0,r.Y)(l.Suspense,{fallback:i,children:(0,r.Y)(eB,{tab:e})})})});var eN=o(30179),eI=o(38759),eW=o(61520);let eH=(0,l.memo)(()=>{let{t:e}=(0,s.Bd)("setting"),t=(0,em.B)(e=>e.activeId),o=(0,eh.u)(eg.a.currentGroupConfig,a()),n=(0,eh.u)(eg.a.currentGroupMeta,a()),{isLoading:g}=(()=>{let[e]=(0,eh.u)(e=>[e.useFetchGroupDetail]),t=(0,eI.k)(eW.P.isLogin),[o]=(0,em.B)(e=>[e.activeId]),r=!!(t&&o&&"inbox"!==o),i=e(r,o||"");return{...i,error:i.error||(r?i.error:void 0),isLoading:i.isLoading&&t||!r}})(),[m,b,f]=(0,eh.u)(e=>[e.showGroupSetting,e.updateGroupConfig,e.updateGroupMeta]),[v,x]=(0,l.useState)(N.xY.Settings);return(0,r.Y)(S,{config:o,id:t,loading:g,meta:n,onConfigChange:b,onMetaChange:f,children:(0,r.FD)(i.A,{containerMaxWidth:1280,height:u.xl?`calc(100vh - ${h.X}px)`:"100vh",noHeader:!0,onClose:()=>eh.u.setState({showGroupSetting:!1}),open:m,placement:"bottom",sidebar:(0,r.FD)(d.Flexbox,{gap:20,style:{height:"calc(100vh - 28px)"},children:[(0,r.Y)(p.A,{desc:n?.title,title:e("header.group")}),(0,r.Y)(d.Flexbox,{flex:1,width:"100%",children:(0,r.Y)(I,{setTab:x,tab:v})}),(0,r.Y)(c.A,{paddingInline:12})]}),sidebarWidth:280,styles:{sidebarContent:{gap:48,justifyContent:"space-between",minHeight:u.xl?`calc(100% - ${h.X}px)`:"100%",paddingBlock:24,paddingInline:48}},children:[(0,r.Y)(eT,{config:o,id:t,loading:g,meta:n,onConfigChange:b,onMetaChange:f,tab:v}),(0,r.Y)(eN.A,{})]})})})},30179:(e,t,o)=>{o.d(t,{A:()=>C});var r=o(28802),i=o(12389),n=o(11577),a=o(50833),l=o(51997),s=o.n(l),d=o(83034),c=o(59121),p=o(80457),u=o(20480),h=o(92619),g=o(31985),m=o(3779);let b=(0,n.rU)(({css:e,token:t,prefixCls:o})=>({content:e`
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
    `})),f=(0,d.memo)(({className:e,title:t,desc:o,cover:i,width:n=360,...a})=>{let{styles:l,cx:s,theme:d}=b();return(0,r.Y)(h.Ay,{theme:{token:{colorBgElevated:(0,m.a)(.005,d.colorBgContainer)}},children:(0,r.FD)(g.A,{centered:!0,className:s(l.content,e),closable:!1,maskClosable:!0,width:n,wrapClassName:l.wrap,...a,children:[i,(0,r.FD)(p.Flexbox,{padding:16,children:[(0,r.Y)("h3",{style:{fontWeight:"bold"},children:t}),(0,r.Y)("p",{style:{marginBottom:0},children:o})]})]})})}),v=(0,d.memo)(({height:e,width:t,src:o})=>{let i=(0,n.DP)();return(0,r.Y)("video",{autoPlay:!0,controls:!1,height:e,loop:!0,muted:!0,src:o,style:{background:i.colorFillSecondary,height:"auto",width:"100%"},width:t})});var x=o(98724),y=o(45628),Y=o(62326),A=o(12467),G=o(12020);let w=(0,n.rU)(({css:e,token:t})=>e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `),F=(0,d.memo)(()=>{let{t:e}=(0,c.Bd)("common"),[t,o]=(0,d.useState)(!1),[n,l]=(0,d.useState)(!1),{styles:h}=w(),{hideGitHub:g}=(0,Y.wo)(A.E);return g?null:(0,r.FD)(r.FK,{children:[(0,r.Y)(p.Flexbox,{className:"settings-layout-footer",justify:"flex-end",children:(0,r.Y)(u.default,{as:"footer",className:h,flex:"none",horizontal:!0,padding:16,width:"100%",children:(0,r.FD)("div",{style:{textAlign:"center"},children:[(0,r.Y)(i.default,{icon:a.A})," ",`${e("footer.title")} `,(0,r.Y)(s(),{"aria-label":"star",href:y.U0,onClick:e=>{e.preventDefault(),o(!0)},children:e("footer.action.star")}),` ${e("footer.and")} `,(0,r.Y)(s(),{"aria-label":"feedback",href:y.ve,onClick:e=>{e.preventDefault(),l(!0)},children:e("footer.action.feedback")})," !"]})})}),(0,r.Y)(f,{cancelText:e("footer.later"),cover:(0,r.Y)(v,{height:269,src:"/videos/star.mp4?v=1",width:358}),desc:e("footer.star.desc"),okText:e("footer.star.action"),onCancel:()=>o(!1),onOk:()=>{G.i||window.open(y.U0,"__blank")},open:t,title:e("footer.star.title")}),(0,r.Y)(f,{cancelText:e("footer.later"),cover:(0,r.Y)(v,{height:269,src:"/videos/feedback.mp4?v=1",width:358}),desc:e("footer.feedback.desc",{appName:x.Se}),okText:e("footer.feedback.action"),onCancel:()=>l(!1),onOk:()=>{G.i||window.open(y.ve,"__blank")},open:n,title:e("footer.feedback.title")})]})});F.displayName="SettingFooter";let C=F},35426:(e,t,o)=>{o.d(t,{A:()=>r});let r=(0,o(28709).A)("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},50833:(e,t,o)=>{o.d(t,{A:()=>r});let r=(0,o(28709).A)("message-square-heart",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5",key:"1faxuh"}]])},52702:(e,t,o)=>{o.d(t,{A:()=>g});var r=o(28802),i=o(8756),n=o(11577),a=o(51997),l=o.n(a),s=o(83034),d=o(80457),c=o(98724),p=o(45628),u=o(64861);let h=(0,n.rU)(({token:e,css:t})=>({logoLink:t`
    line-height: 1;
    color: inherit;

    &:hover {
      color: ${e.colorLink};
    }
  `})),g=(0,s.memo)(({style:e,...t})=>{let{styles:o,theme:n}=h();return(0,r.FD)(d.Flexbox,{align:"center",dir:"ltr",flex:"none",gap:4,horizontal:!0,style:{color:n.colorTextDescription,fontSize:12,...e},...t,children:[(0,r.Y)("span",{children:"Powered by"}),u.Eb?(0,r.Y)("span",{children:c.dS}):(0,r.Y)(l(),{className:o.logoLink,href:`https://lobehub.com?utm_source=${p.VU}&utm_content=brand_watermark`,target:"_blank",children:(0,r.Y)(i.default,{size:20,type:"text"})})]})})},69177:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(28802),i=o(11577),n=o(83034),a=o(80457);let l=(0,i.rU)(({token:e,css:t})=>({desc:t`
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
  `})),s=(0,n.memo)(({title:e,desc:t,style:o})=>{let{styles:i}=l();return(0,r.FD)(a.Flexbox,{className:i.header,gap:4,style:o,children:[(0,r.Y)("h1",{className:i.title,children:e}),(0,r.Y)("p",{className:i.desc,children:t})]})})},79778:(e,t,o)=>{o.d(t,{A:()=>n});var r,i=o(83034);let n=(r=i.useEffect,function(e,t){var o=(0,i.useRef)(!1);r(function(){return function(){o.current=!1}},[]),r(function(){if(o.current)return e();o.current=!0},t)})},99859:(e,t,o)=>{o.d(t,{A:()=>c});var r=o(28802),i=o(47762),n=o(11577),a=o(83034),l=o(25598),s=o(6332);let d=(0,n.rU)(({css:e,prefixCls:t})=>({popup:e`
    &.${t}-select-dropdown .${t}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `,select:e`
    .${t}-select-selection-item {
      .${l.$} {
        display: none;
      }
    }
  `})),c=(0,a.memo)(({value:e,onChange:t,showAbility:o=!0,requiredAbilities:n})=>{let c=(0,s.J)(),{styles:p}=d(),u=(0,a.useMemo)(()=>{let e=e=>(n&&n.length>0?e.children.filter(e=>n.every(t=>!!e.abilities?.[t])):e.children).map(t=>({label:(0,r.Y)(l.$z,{...t,...t.abilities,showInfoTag:o}),provider:e.id,value:`${e.id}/${t.id}`}));return 1===c.length?e(c[0]):c.map(t=>{let o=e(t);if(0!==o.length)return{label:(0,r.Y)(l.TK,{logo:t.logo,name:t.name,provider:t.id,source:t.source}),options:o}}).filter(Boolean)},[c,n,o]);return console.log("options",u),console.log("enabledList",c),(0,r.Y)(i.A,{className:p.select,classNames:{popup:{root:p.popup}},defaultValue:`${e?.provider}/${e?.model}`,onChange:(e,o)=>{let r=e.split("/").slice(1).join("/");t?.({model:r,provider:o.provider})},options:u,popupMatchSelectWidth:!1,value:`${e?.provider}/${e?.model}`})})}}]);