"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36768],{36768:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ev});var o=i(28802),n=i(83034),r=i(85122),l=i(78591),a=i(57498),s=i(17068),d=i(64811),c=i(62016),p=i(91804),u=i(11577),g=i(67393),m=i(45541),h=i(82964),x=i(10903),b=i(75431),f=i(9274),v=i(13208),y=i(59121),w=i(20480),Y=i(71171),k=i(13140);let F=(0,u.rU)(({token:e,css:t})=>({container:t`
    .show-on-hover {
      opacity: 0;
      transition: all ease-in-out 0.3ms;
    }

    :hover {
      .show-on-hover {
        opacity: 1;
      }
    }
  `,shinyText:(0,k.f)(e)})),A=(0,n.memo)(()=>{let{t:e}=(0,y.Bd)("chat"),t=(0,d.B)(e=>e.activeId),i=(0,s.L)(Y.fA.isSupervisorLoading(t||"")),n=(0,s.L)(e=>e.internal_cancelSupervisorDecision),{styles:r}=F();return i?(0,o.FD)(w.default,{className:r.container,gap:4,horizontal:!0,paddingBlock:"12px 24px",children:[(0,o.Y)(b.A,{className:r.shinyText,type:"secondary",children:e("group.orchestratorThinking")}),(0,o.Y)(f.A,{icon:v.A,onClick:e=>{e.stopPropagation(),n(t)},size:"small",title:e("groupSidebar.members.stopOrchestrator")})]}):null});var C=i(31021),D=i.n(C),$=i(80457),z=i(12389),T=i(2644),M=i.n(T),N=i(54759),B=i(20549);let L=(0,u.rU)(({css:e,token:t})=>({active:e`
    background: ${t.colorFillTertiary};
  `,container:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 6px;
    border-radius: 6px;

    font-size: 12px;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,extra:e`
    color: ${t.colorTextSecondary};
  `})),S=(0,n.memo)(({id:e,title:t,lastActiveAt:i,sourceMessageId:n})=>{let{t:r}=(0,y.Bd)("chat"),l=(0,s.L)(e=>e.openThreadInPortal),{styles:a,cx:d}=L(),[c,p]=(0,s.L)(t=>[t.activeThreadId===e,Y.fA.countMessagesByThreadId(e)(t)]),u=(0,B.a)();return(0,o.FD)($.Flexbox,{align:"baseline",className:d(a.container,c&&a.active),gap:8,horizontal:!0,onClick:()=>{c||l(e,n)},children:[t,(0,o.FD)($.Flexbox,{className:a.extra,horizontal:!0,children:[!!p&&r("thread.threadMessageCount",{messageCount:p}),!u&&` \xb7 ${M()(i).format("YYYY-MM-DD")}`,(0,o.Y)(z.default,{icon:N.A})]})]})}),I=(0,u.rU)(({css:e,token:t,isDarkMode:i})=>({container:e`
    cursor: pointer;

    padding-block: 8px 4px;
    padding-inline: 4px;
    border-radius: 6px;

    background: ${i?t.colorFillTertiary:t.colorFillQuaternary};
  `})),j=(0,n.memo)(({id:e,placement:t,style:i})=>{let{t:n}=(0,y.Bd)("chat"),{styles:r}=I(),l=(0,s.L)(x.Z.getThreadsBySourceMsgId(e),D());return(0,o.FD)($.Flexbox,{direction:"end"===t?"horizontal-reverse":"horizontal",gap:12,paddingInline:16,style:{marginTop:-12,paddingBottom:16,...i},children:[(0,o.Y)("div",{style:{width:40}}),(0,o.FD)($.Flexbox,{className:r.container,gap:4,padding:4,style:{width:"fit-content"},children:[(0,o.Y)($.Flexbox,{gap:8,horizontal:!0,paddingInline:6,children:(0,o.FD)(b.A,{style:{fontSize:12},type:"secondary",children:[n("thread.title"),l.length]})}),(0,o.Y)($.Flexbox,{children:l.map(e=>(0,o.Y)(S,{...e},e.id))})]})]})}),_=(0,u.rU)(({css:e,token:t,isDarkMode:i})=>{let o=i?t.colorFillSecondary:t.colorFillTertiary;return{end:e`
      &::after {
        inset-inline-end: 36px;
        border-inline-end: 2px solid ${o};
        border-end-end-radius: 8px;
      }
    `,line:e`
      &::after {
        content: '';

        position: absolute;
        inset-block-end: 60px;

        width: 38px;
        height: 53px;
        border-block-end: 2px solid ${o};
      }
    `,start:e`
      &::after {
        inset-inline-start: 30px;
        border-inline-start: 2px solid ${o};
        border-end-start-radius: 8px;
      }
    `}}),U=(0,n.memo)(({id:e,index:t})=>{let{styles:i,cx:n}=_(),[r,l]=(0,s.L)(t=>[x.Z.hasThreadBySourceMsgId(e)(t),p._1.mainDisplayChatIDs(t).length]),[a,d]=(0,m.o)(e=>[h.c.displayMode(e),h.c.enableHistoryDivider(l,t)(e)]),c=(0,s.L)(t=>p._1.getDisplayMessageById(e)(t)?.role),u="chat"===a&&"user"===c?"end":"start",b=l===t+1;return(0,o.FD)(o.FK,{children:[(0,o.Y)(g.A,{className:r?n(i.line,i[u]):"",enableHistoryDivider:d,endRender:r&&(0,o.Y)(j,{id:e,placement:u}),id:e,index:t,isLatestItem:b}),b&&(0,o.Y)(A,{})]})});var O=i(74551),R=i(51717),E=i(38471),W=i(18162),G=i(88990),P=i(62326),Q=i(12467),q=i(17869),H=i(15447),K=i(46265);let Z=(0,n.memo)(()=>{let e=(0,d.B)(e=>e.createSession),{mutate:t,isValidating:i}=(0,K.Cf)(["session.createSession",void 0],()=>e({group:void 0}));return(0,o.Y)(H.A,{loading:i,onClick:()=>t(),style:{alignItems:"center",borderRadius:4,height:"20px",justifyContent:"center",padding:"0 1px",width:"20px"},variant:"filled",children:"+"})});var J=i(28726),V=i(42626);let X=(0,u.rU)(({css:e,token:t,responsive:i})=>({card:e`
    padding-block: 8px;
    padding-inline: 16px;
    border-radius: 48px;
    background: ${t.colorBgContainer};

    ${i.mobile} {
      padding-block: 8px;
      padding-inline: 16px;
    }
  `,container:e`
    padding-block: 0;
    padding-inline: 0;
  `,title:e`
    color: ${t.colorTextDescription};
  `})),ee=(0,n.memo)(({mobile:e,questions:t})=>{let{t:i}=(0,y.Bd)("welcome"),[n]=(0,s.L)(e=>[e.updateMessageInput]),{styles:r}=X(),{send:l}=(0,V.q)();return(0,o.FD)("div",{className:r.container,children:[(0,o.Y)("p",{className:r.title,children:i("guide.questions.title")}),(0,o.Y)($.Flexbox,{gap:8,horizontal:!0,wrap:"wrap",children:t.slice(0,e?2:5).map(e=>(0,o.Y)(J.A,{className:r.card,clickable:!0,onClick:()=>{n(e),l({isWelcomeQuestion:!0})},paddingBlock:8,paddingInline:12,variant:"outlined",children:e},e))})]})}),et=(0,u.rU)(({css:e,responsive:t})=>({container:e`
    align-items: center;
    ${t.mobile} {
      align-items: flex-start;
    }
  `,desc:e`
    font-size: 14px;
    text-align: center;
    ${t.mobile} {
      text-align: start;
    }
  `,title:e`
    margin-block: 0.2em 0;
    font-size: 32px;
    font-weight: bolder;
    line-height: 1;
    ${t.mobile} {
      font-size: 24px;
    }
  `})),ei=(0,n.memo)(()=>{let{t:e}=(0,y.Bd)(["welcome","chat"]),{styles:t}=et(),i=(0,B.a)(),r=(0,W.r)(),{showCreateSession:l}=(0,P.wo)(Q.E),a=(0,m.o)(G.e.openingQuestions),c=(0,d.B)(q.G.currentAgentMeta,D()),p=e("agentDefaultMessageWithSystemRole",{name:c.title||e("defaultAgent",{ns:"chat"}),ns:"chat"}),u=(0,m.o)(G.e.openingMessage),g=(0,s.L)(Y.fA.showInboxWelcome),h=(0,n.useMemo)(()=>u||p,[u,p,c.description]);return(0,o.Y)(w.default,{gap:12,padding:16,width:"100%",children:(0,o.FD)($.Flexbox,{className:t.container,gap:16,style:{maxWidth:800},width:"100%",children:[(0,o.FD)($.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(R.A,{emoji:"\uD83D\uDC4B",size:40,type:"anim"}),(0,o.Y)("h1",{className:t.title,children:r})]}),(0,o.Y)(E.A,{className:t.desc,customRender:(e,t)=>t.text.includes("<plus />")?(0,o.Y)(y.x6,{components:{br:(0,o.Y)("br",{}),plus:(0,o.Y)(Z,{})},i18nKey:"guide.defaultMessage",ns:"welcome",values:{appName:O.Se}}):e,variant:"chat",children:g?e(l?"guide.defaultMessage":"guide.defaultMessageWithoutCreate",{appName:O.Se}):h}),a.length>0&&(0,o.Y)(ee,{mobile:i,questions:a})]})})});var eo=i(99454),en=i(74468),er=Math.floor,el=Math.random;let ea=function(e,t){var i=-1,o=e.length,n=o-1;for(t=void 0===t?o:t;++i<t;){var r,l=(r=i)+er(el()*(n-r+1)),a=e[l];e[l]=e[i],e[i]=a}return e.length=t,e};var es=i(44899),ed=i(1866);let ec=function(e){return((0,ed.A)(e)?function(e){return ea((0,en.A)(e))}:function(e){return ea((0,es.A)(e))})(e)};var ep=i(74013),eu=i(97496);let eg=(0,u.rU)(({css:e,token:t,responsive:i})=>({card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    height: 100%;
    min-height: 110px;
    padding: 16px;
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorBgContainer};

    transition: all ${t.motionDurationMid};

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: 0 2px 8px ${t.colorPrimaryBg};
    }

    ${i.mobile} {
      min-height: 72px;
    }
  `,cardDesc:e`
    margin-block: 0 !important;
    color: ${t.colorTextDescription};
  `,cardTitle:e`
    margin-block: 0 !important;
    font-size: 16px;
    font-weight: bold;
  `,emoji:e`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: ${t.borderRadius}px;

    font-size: 24px;

    background: ${t.colorFillTertiary};
  `,title:e`
    color: ${t.colorTextDescription};
  `})),em=(0,n.memo)(({mobile:e})=>{let{t}=(0,y.Bd)("welcome"),{styles:i}=eg(),{updateMessageInput:r,send:l}=(0,V.G)(),a=(()=>{let{t:e}=(0,y.Bd)("welcome"),t=(0,eu.Q)(),i=(0,d.B)(c.z.currentSession);return console.log("groupTemplates",t),console.log("currentSession",i),(0,n.useMemo)(()=>{if(!i||"group"!==i.type)return console.log("No group session found:",{currentSession:i}),null;let o=i.meta?.title||"",n=i.members?.length||0;for(let r of(console.log("Current group session:",{memberCount:n,members:i.members,title:o}),t)){let t=r.title,i=r.members.length;if(console.log("Checking template:",{memberCountDiff:Math.abs(i-n),templateId:r.id,templateMemberCount:i,templateTitle:t,titleMatch:t.toLowerCase()===o.toLowerCase()}),t.toLowerCase()===o.toLowerCase()&&1>=Math.abs(i-n)){console.log("Found exact match for template:",r.id);let t=e(`guide.groupActivities.${r.id}`,{returnObjects:!0});return console.log("Template activities:",t),{activities:t||{},templateId:r.id}}}for(let i of(console.log("No exact match found, trying partial matching..."),t)){let t=i.title,n=o.toLowerCase().includes(t.toLowerCase()),r=t.toLowerCase().includes(o.toLowerCase());if(console.log("Partial match check:",{currentIncludes:n,templateId:i.id,templateIncludes:r,templateTitle:t}),n||r){console.log("Found partial match for template:",i.id);let t=e(`guide.groupActivities.${i.id}`,{returnObjects:!0});return console.log("Template activities:",t),{activities:t||{},templateId:i.id}}}return console.log("No template match found, returning null"),null},[i,t,e])})(),s=(0,n.useMemo)(()=>a?.activities&&Object.keys(a.activities).length>0?a.activities:t("guide.groupActivities.general",{returnObjects:!0})||{},[a?.templateId,t]),p=(0,n.useMemo)(()=>Object.keys(s),[s]),[u,g]=(0,n.useState)([]);(0,n.useEffect)(()=>{p.length>0&&g(ec([...p]))},[p]);let m=u.slice(0,e?2:4);return p.length&&u.length?(0,o.FD)($.Flexbox,{gap:8,width:"100%",children:[(0,o.FD)($.Flexbox,{align:"center",horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{className:i.title,children:t("guide.groupActivities.title")}),(0,o.Y)(f.A,{icon:ep.A,onClick:()=>{p.length>0&&g(ec([...p]))},size:{blockSize:24,size:14},title:"Show more activities"})]}),(0,o.Y)(eo.A,{gap:8,rows:2,children:m.map(t=>{let n=s[t];if(!n)return null;let{title:a,emoji:d,description:c,prompt:p}=n;return(0,o.FD)(J.A,{className:i.card,clickable:!0,gap:12,horizontal:!0,onClick:()=>{r(p),l()},variant:"outlined",children:[(0,o.Y)("div",{className:i.emoji,children:d}),(0,o.FD)($.Flexbox,{gap:2,style:{overflow:"hidden",width:"100%"},children:[(0,o.Y)(b.A,{className:i.cardTitle,ellipsis:{rows:1},children:a}),(0,o.Y)(b.A,{className:i.cardDesc,ellipsis:{rows:e?1:2},children:c})]})]},t)})})]}):null}),eh=(0,u.rU)(({css:e,responsive:t})=>({container:e`
    align-items: center;
    ${t.mobile} {
      align-items: flex-start;
    }
  `,desc:e`
    font-size: 14px;
    text-align: center;
    ${t.mobile} {
      text-align: start;
    }
  `,title:e`
    margin-block: 0.2em 0;
    font-size: 32px;
    font-weight: bolder;
    line-height: 1;
    ${t.mobile} {
      font-size: 24px;
    }
  `})),ex=(0,n.memo)(()=>{let{styles:e}=eh(),t=(0,P.wo)(e=>e.isMobile),{showWelcomeSuggest:i}=(0,P.wo)(Q.E);return(0,o.Y)(w.default,{padding:16,width:"100%",children:(0,o.Y)($.Flexbox,{className:e.container,gap:16,style:{maxWidth:800,paddingTop:"20px"},width:"100%",children:i&&(0,o.Y)(em,{mobile:t})})})}),eb=(0,n.memo)(()=>(0,d.B)(c.z.isCurrentSessionGroupSession)?(0,o.Y)(ex,{}):(0,o.Y)(ei,{})),ef=(0,n.memo)(({mobile:e})=>{let[t]=(0,s.L)(e=>[p._1.isCurrentDisplayChatLoaded(e)]);(()=>{let e=(0,d.B)(e=>e.activeId),[t,i,o]=(0,s.L)(e=>[e.activeTopicId,e.useFetchMessages,e.internal_updateActiveSessionType]),[r,l]=(0,d.B)(e=>[c.z.currentSession(e),c.z.isCurrentSessionGroupSession(e)]);(0,n.useEffect)(()=>{r?.type?o(r.type):o(void 0)},[r?.id,r?.type,o]),i(!0,e,t,l?"group":"session")})();let i=(0,s.L)(p._1.mainDisplayChatIDs),u=(0,n.useCallback)((e,t)=>(0,o.Y)(U,{id:t,index:e}),[e]);return t?0===i.length?(0,o.Y)(a.A,{flex:1,height:"100%",children:(0,o.Y)(eb,{})}):(0,o.Y)(l.A,{dataSource:i,itemContent:u,mobile:e}):(0,o.Y)(r.A,{mobile:e})});ef.displayName="ChatListRender";let ev=ef},44899:(e,t,i)=>{i.d(t,{A:()=>r});var o=i(23397),n=i(33345);let r=function(e){return null==e?[]:(0,o.A)(e,(0,n.A)(e))}},97496:(e,t,i)=>{i.d(t,{Q:()=>n});var o=i(59121);let n=()=>{let{t:e}=(0,o.Bd)("welcome");return["brainstorm","analysis","writing","planning","product","game"].map(t=>({description:e(`guide.groupTemplates.${t}.description`),id:t,members:e(`guide.groupTemplates.${t}.members`,{returnObjects:!0}),title:e(`guide.groupTemplates.${t}.title`)}))}}}]);