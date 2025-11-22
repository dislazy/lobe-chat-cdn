"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4235],{4235:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(28802),r=a(74551),i=a(99454),n=a(11577),o=a(83034),l=a(59121),d=a(20480),c=a(80457),u=a(95891),g=a(83395),p=a(86856),h=a(9801),m=a(34412);let b=(0,n.rU)(({css:e,token:t,stylish:a,cx:s,responsive:i})=>({avatar:e`
    box-sizing: content-box;
    border: 4px solid ${t.colorBgLayout};
    background: ${t.colorText};
  `,background:e`
    position: relative;

    width: 100%;
    padding: 24px;

    background-color: ${t.colorBgLayout};
    background-image: url(${(0,r.b8)("screenshot_background.webp")});
    background-position: center;
    background-size: 120% 120%;
  `,container:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    border: 1px solid ${t.colorBorder};
    border-radius: ${2*t.borderRadiusLG}px;

    background: ${t.colorBgLayout};
    box-shadow: ${t.boxShadow};
  `,decs:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,footer:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,heatmaps:e`
    .legend-month,
    footer {
      display: none;
    }
  `,preview:s(a.noScrollbar,e`
      overflow: hidden scroll;

      width: 100%;
      max-height: 70dvh;
      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorBgLayout};

      * {
        pointer-events: none;

        ::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }

      ${i.mobile} {
        max-height: 40dvh;
      }
    `),title:e`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `})),y=(0,o.memo)(()=>{let{styles:e}=b(),{t}=(0,l.Bd)("auth");return(0,s.Y)("div",{className:e.preview,children:(0,s.Y)("div",{className:e.background,id:"preview",children:(0,s.FD)(d.default,{className:e.container,gap:12,padding:24,children:[(0,s.Y)(u.d,{size:24,type:"text"}),(0,s.Y)("div",{className:e.title,children:t("stats.share.title")}),(0,s.FD)(c.Flexbox,{align:"center",horizontal:!0,children:[(0,s.Y)(g.A,{className:e.avatar,size:48,style:{marginRight:-12,zIndex:2}}),(0,s.Y)(d.default,{className:e.avatar,height:48,style:{borderRadius:"50%",zIndex:1},width:48,children:(0,s.Y)(u.d,{size:40})})]}),(0,s.FD)(c.Flexbox,{gap:12,paddingBlock:12,width:"100%",children:[(0,s.Y)(p.A,{blockMargin:2,blockRadius:1,blockSize:4.5,className:e.heatmaps,inShare:!0,style:{marginTop:-12},width:"100%"}),(0,s.FD)(i.A,{gap:8,maxItemWidth:100,rows:2,width:"100%",children:[(0,s.Y)(h.A,{inShare:!0}),(0,s.Y)(m.A,{inShare:!0})]})]}),(0,s.Y)("div",{className:e.footer,children:r.Uo})]})})})})},9801:(e,t,a)=>{a.d(t,{A:()=>m});var s=a(28802),r=a(11577),i=a(83034),n=a(59121),o=a(14579),l=a(88533),d=a(17019),c=a(46265),u=a(56790),g=a(9402),p=a(99756),h=a(52643);let m=(0,i.memo)(({inShare:e,mobile:t})=>{let{t:a}=(0,n.Bd)("auth"),i=(0,r.DP)(),{data:m,isLoading:b}=(0,c.lA)("stats-messages",async()=>({count:await u.T.countMessages(),prevCount:await u.T.countMessages({endDate:(0,p.ZG)().format("YYYY-MM-DD")})}));return e?(0,s.Y)(h.A,{count:(0,g.BX)(m?.prevCount)||"--",title:a("stats.messages")}):(0,s.Y)(l.A,{highlight:t?void 0:i.yellow,loading:b||!m,statistic:{description:(0,s.Y)(o.A,{title:a("date.prevMonth"),value:(0,g.BX)(m?.prevCount)||"--"}),precision:0,value:m?.count||"--"},title:(0,s.Y)(d.A,{count:m?.count,prvCount:m?.prevCount,title:a("stats.messages")})})})},14579:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(28802),r=a(11577),i=a(83034),n=a(80457);let o=(0,i.memo)(({value:e,title:t})=>{let a=(0,r.DP)();return(0,s.FD)(n.Flexbox,{gap:4,horizontal:!0,style:{color:a.colorTextSecondary,fontSize:12},children:[(0,s.Y)("span",{style:{fontWeight:"bold"},children:e}),(0,s.Y)("span",{children:t})]})})},17019:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(28802),r=a(75431),i=a(3136),n=a(11577),o=a(83034),l=a(80457);let d=(0,o.memo)(({inverseColor:e,title:t,prvCount:a,count:o})=>{var d,c;let u=(d=o||0,c=a||0,"number"!=typeof d?0:0!==c?(d-c)/c*100:100*(d>0)),g=(0,n.DP)(),p={background:g.colorSuccessBg,borderColor:g.colorSuccessBorder,color:g.colorSuccess},h={backgroundColor:g.colorWarningBg,borderColor:g.colorWarningBorder,color:g.colorWarning};return(0,s.FD)(l.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"flex-start",style:{overflow:"hidden",position:"inherit"},children:[(0,s.Y)(r.A,{as:"h2",ellipsis:{rows:1,tooltip:t},style:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",margin:0,overflow:"hidden"},children:t}),o&&a&&u&&0!==u?(0,s.FD)(i.A,{style:{borderWidth:.5,...e?u>0?h:p:u>0?p:h},children:[u>0?"+":"",u.toFixed(1),"%"]}):null]})})},34412:(e,t,a)=>{a.d(t,{A:()=>h});var s=a(28802),r=a(83034),i=a(59121),n=a(14579),o=a(88533),l=a(17019),d=a(46265),c=a(56790),u=a(9402),g=a(99756),p=a(52643);let h=(0,r.memo)(({inShare:e})=>{let{t}=(0,i.Bd)("auth"),{data:a,isLoading:r}=(0,d.lA)("stats-words",async()=>({count:await c.T.countWords(),prevCount:await c.T.countWords({endDate:(0,g.ZG)().format("YYYY-MM-DD")})}));return e?(0,s.Y)(p.A,{count:(0,u.U2)(a?.prevCount)||"--",title:t("stats.words")}):(0,s.Y)(o.A,{loading:r||!a,statistic:{description:(0,s.Y)(n.A,{title:t("date.prevMonth"),value:(0,u.U2)(a?.prevCount)||"--"}),precision:0,style:{fontWeight:"bold"},value:(0,u.U2)(a?.count)||"--"},title:(0,s.Y)(l.A,{count:a?.count,prvCount:a?.prevCount,title:t("stats.words")})})})},38759:(e,t,a)=>{a.d(t,{c:()=>F,k:()=>C});var s=a(14308),r=a(50786),i=a(23993),n=a(41734),o=a(89872);let l={preference:o.I},d={...{defaultSettings:a(74551).a$,settings:{}},...l,...{},...{isOnboard:!1,isShowPWAGuide:!1,isUserCanEnableTrace:!1,isUserHasConversation:!1,isUserStateInit:!1}};var c=a(96773),u=a(70674),g=a(64911),p=a(85366),h=a(46265),m=a(55582),b=a(67095),y=a(61497),f=a(71457);let v=(0,y.K)("common"),S="initUserState",w=(0,y.K)("preference");var x=a(31021),A=a.n(x),k=a(19530),I=a(45628);class Y{constructor(){this.createShareSettingsUrl=e=>`/?${I.N}=${encodeURI(JSON.stringify(e))}`,this.decodeShareSettings=e=>{try{return{data:JSON.parse(e)}}catch(e){return{message:JSON.stringify(e)}}}}}let M=new Y;var U=a(34743),$=a(1866),z=a(28074);let N=(0,n.t)("user"),C=(0,i.h)()((0,s.eh)(N((...e)=>({...d,...((e,t)=>({addToolToAllowList:async e=>{let a=t().settings.tool?.humanIntervention?.allowList||[];a.includes(e)||await t().setSettings({tool:{humanIntervention:{allowList:[...a,e]}}})},importAppSettings:async e=>{let{setSettings:a}=t();await a(e)},importUrlShareSettings:async e=>{if(e){let a=M.decodeShareSettings(e);!a?.message&&a?.data&&await t().setSettings(a.data)}},internal_createSignal:()=>{let a=t().updateSettingsSignal;a&&!a.signal.aborted&&a.abort(k.ve);let s=new AbortController;return e({updateSettingsSignal:s},!1,"signalForUpdateSettings"),s},resetSettings:async()=>{await m.W.resetUserSettings(),await t().refreshUserState()},setSettings:async a=>{let s,{settings:r,defaultSettings:i}=t(),n=(0,b.h)(r,a);if(A()(r,n))return;let o=(s=(e,t)=>(0,U.A)(e,(e,a,r)=>{(0,$.A)(a)&&(0,$.A)(t[r])?A()(a,t[r])||(e[r]=a):A()(a,t[r])||(e[r]=(0,z.A)(a)&&(0,z.A)(t[r])?s(a,t[r]):a)}))(n,i);e({settings:o},!1,"optimistic_updateSettings");let l=t().internal_createSignal();await m.W.updateUserSettings(o,l.signal),await t().refreshUserState()},updateDefaultAgent:async e=>{await t().setSettings({defaultAgent:e})},updateGeneralConfig:async e=>{await t().setSettings({general:e})},updateHumanIntervention:async e=>{let a=t().settings.tool?.humanIntervention||{};await t().setSettings({tool:{humanIntervention:{...a,...e}}})},updateKeyVaults:async e=>{await t().setSettings({keyVaults:e})},updateSystemAgent:async(e,a)=>{await t().setSettings({systemAgent:{[e]:{...a}}})}}))(...e),...((e,t)=>({updateGuideState:async e=>{let{updatePreference:a}=t(),s=(0,b.h)(t().preference.guide,e);await a({guide:s})},updateLab:async e=>{let{updatePreference:a}=t(),s=(0,b.h)(t().preference.lab,e);await a({lab:s},w("updateLab"))},updatePreference:async(a,s)=>{let r=(0,b.h)(t().preference,a);e({preference:r},!1,s||w("updatePreference")),await m.W.updatePreference(r)}}))(...e),...((e,t)=>({enableAuth:()=>c.S4,logout:async()=>{if(c.Nd)return void t().clerkSignOut?.({redirectUrl:location.toString()});if(c.J_){let{signOut:e}=await a.e(4975).then(a.bind(a,4975));e()}},openLogin:async()=>{if(c.Nd){let e=location.toString();t().clerkSignIn?.({fallbackRedirectUrl:e,signUpForceRedirectUrl:e,signUpUrl:"/signup"});return}if(c.J_){let{signIn:e}=await a.e(4975).then(a.bind(a,4975)),s=t()?.oAuthSSOProviders;if(s&&1===s.length)return void e(s[0]);e()}}}))(...e),...((e,t)=>({refreshUserState:async()=>{await (0,g.j)(S)},updateAvatar:async e=>{await m.W.updateAvatar(e),await t().refreshUserState()},updateKeyVaultConfig:async(e,a)=>{await t().setSettings({keyVaults:{[e]:a}})},useCheckTrace:e=>(0,p.Ay)(e?"checkTrace":null,()=>"boolean"==typeof f.U.userAllowTrace(t())?Promise.resolve(!1):Promise.resolve(t().isUserCanEnableTrace),{revalidateOnFocus:!1}),useInitUserState:(a,s,r)=>(0,h.Ju)(a?S:null,()=>m.W.getUserState(),{onError:e=>{r?.onError?.(e)},onSuccess:a=>{if(r?.onSuccess?.(a),a){let r={defaultAgent:s.defaultAgent,image:s.image,systemAgent:s.systemAgent},i=(0,b.h)(t().defaultSettings,r),n=0===Object.keys(a.preference||{}).length?o.I:a.preference,l=a.avatar||a.userId?(0,b.h)(t().user,{avatar:a.avatar,email:a.email,firstName:a.firstName,fullName:a.fullName,id:a.userId,latestName:a.lastName,username:a.username}):t().user;e({defaultSettings:i,isOnboard:a.isOnboard,isShowPWAGuide:a.canEnablePWAGuide,isUserCanEnableTrace:a.canEnableTrace,isUserHasConversation:a.hasConversation,isUserStateInit:!0,preference:n,settings:a.settings||{},subscriptionPlan:a.subscriptionPlan,user:l},!1,v("initUserState"));let d=(0,u.wZ)();d?.identify(a.userId||"",{email:a.email,firstName:a.firstName,lastName:a.lastName,username:a.username})}}})}))(...e)}))),r.x),F=()=>C.getState()},43262:(e,t,a)=>{a.d(t,{C:()=>s});let s={isSyncActive:e=>e.dataSyncConfig.active,remoteServerUrl:e=>e.dataSyncConfig.remoteServerUrl||"",storageMode:e=>e.dataSyncConfig.storageMode}},52643:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(28802),r=a(11577),i=a(83034),n=a(80457);let o=(0,i.memo)(({title:e,count:t})=>{let a=(0,r.DP)();return(0,s.FD)(n.Flexbox,{padding:12,style:{background:a.isDarkMode?a.colorFillTertiary:a.colorFillQuaternary,borderRadius:a.borderRadiusLG},children:[(0,s.Y)("div",{style:{fontSize:13},children:e}),(0,s.Y)("div",{style:{fontSize:20,fontWeight:"bold"},children:t})]})})},55582:(e,t,a)=>{a.d(t,{W:()=>i});var s=a(77605);class r{constructor(){this.getUserRegistrationDuration=async()=>s.du.user.getUserRegistrationDuration.query(),this.getUserState=async()=>s.du.user.getUserState.query(),this.getUserSSOProviders=async()=>s.du.user.getUserSSOProviders.query(),this.unlinkSSOProvider=async(e,t)=>s.du.user.unlinkSSOProvider.mutate({provider:e,providerAccountId:t}),this.makeUserOnboarded=async()=>s.du.user.makeUserOnboarded.mutate(),this.updateAvatar=async e=>s.du.user.updateAvatar.mutate(e),this.updatePreference=async e=>s.du.user.updatePreference.mutate(e),this.updateGuide=async e=>s.du.user.updateGuide.mutate(e),this.updateUserSettings=async(e,t)=>s.du.user.updateSettings.mutate(e,{signal:t}),this.resetUserSettings=async()=>s.du.user.resetSettings.mutate()}}let i=new r},56790:(e,t,a)=>{a.d(t,{T:()=>l});var s=a(35245),r=a(77605);class i{async execute(e,t){let a=this.controllers.get(e);a&&a.abort("New request triggered");let s=new AbortController;this.controllers.set(e,s);try{return await t(s.signal)}finally{this.controllers.get(e)===s&&this.controllers.delete(e)}}cancel(e){let t=this.controllers.get(e);t&&(t.abort("Manually cancelled"),this.controllers.delete(e))}cancelAll(){for(let e of this.controllers.values())e.abort("All requests cancelled");this.controllers.clear()}constructor(){this.controllers=new Map}}let n=new i;class o{constructor(){this.createMessage=async({sessionId:e,...t})=>r.du.message.createMessage.mutate({...t,sessionId:e?this.toDbSessionId(e):void 0}),this.getMessages=async(e,t,a)=>await r.du.message.getMessages.query({groupId:a,sessionId:this.toDbSessionId(e),topicId:t}),this.getGroupMessages=async(e,t)=>await r.du.message.getMessages.query({groupId:e,topicId:t}),this.countMessages=async e=>r.du.message.count.query(e),this.countWords=async e=>r.du.message.countWords.query(e),this.rankModels=async()=>r.du.message.rankModels.query(),this.getHeatmaps=async()=>r.du.message.getHeatmaps.query(),this.updateMessageError=async(e,t,a)=>{let s=t.type?t:{body:t,message:t.message,type:"ApplicationRuntimeError"};return r.du.message.update.mutate({id:e,sessionId:a?.sessionId,topicId:a?.topicId,value:{error:s}})},this.updateMessagePluginArguments=async(e,t)=>{let a="string"==typeof t?t:JSON.stringify(t);return r.du.message.updateMessagePlugin.mutate({id:e,value:{arguments:a}})},this.updateMessage=async(e,t,a)=>r.du.message.update.mutate({id:e,sessionId:a?.sessionId,topicId:a?.topicId,value:t}),this.updateMessageTranslate=async(e,t)=>r.du.message.updateTranslate.mutate({id:e,value:t}),this.updateMessageTTS=async(e,t)=>r.du.message.updateTTS.mutate({id:e,value:t}),this.updateMessageMetadata=async(e,t,a)=>n.execute(`message-metadata-${e}`,s=>r.du.message.updateMetadata.mutate({id:e,sessionId:a?.sessionId,topicId:a?.topicId,value:t},{signal:s})),this.updateMessagePluginState=async(e,t,a)=>r.du.message.updatePluginState.mutate({id:e,sessionId:a?.sessionId,topicId:a?.topicId,value:t}),this.updateMessagePluginError=async(e,t,a)=>r.du.message.updatePluginError.mutate({id:e,sessionId:a?.sessionId,topicId:a?.topicId,value:t}),this.updateMessagePlugin=async(e,t,a)=>r.du.message.updateMessagePlugin.mutate({id:e,sessionId:a?.sessionId,topicId:a?.topicId,value:t}),this.updateMessageRAG=async(e,t,a)=>r.du.message.updateMessageRAG.mutate({id:e,sessionId:a?.sessionId,topicId:a?.topicId,value:t}),this.removeMessage=async(e,t)=>r.du.message.removeMessage.mutate({id:e,sessionId:t?.sessionId,topicId:t?.topicId}),this.removeMessages=async(e,t)=>r.du.message.removeMessages.mutate({ids:e,sessionId:t?.sessionId,topicId:t?.topicId}),this.removeMessagesByAssistant=async(e,t)=>r.du.message.removeMessagesByAssistant.mutate({sessionId:this.toDbSessionId(e),topicId:t}),this.removeMessagesByGroup=async(e,t)=>r.du.message.removeMessagesByGroup.mutate({groupId:e,topicId:t}),this.removeAllMessages=async()=>r.du.message.removeAllMessages.mutate(),this.toDbSessionId=e=>e===s.Ed?null:e}}let l=new o},61520:(e,t,a)=>{a.d(t,{P:()=>d,f:()=>l});var s=a(74551),r=a(96987),i=a(96773);let n=s.Se,o=e=>i.S4?e.isSignedIn?e.user?.username:"anonymous":s.xl?e.user?.username:n,l={displayUserName:e=>o(e)||e.user?.email||"",email:e=>e.user?.email||"",fullName:e=>e.user?.fullName||"",nickName:e=>{let t=e.user?.fullName||e.user?.username;return i.S4?e.isSignedIn?t:(0,r.t)("userPanel.anonymousNickName",{ns:"common"}):s.xl?t:(0,r.t)("userPanel.defaultNickname",{ns:"common"})},userAvatar:e=>e.user?.avatar||"",userId:e=>e.user?.id,userProfile:e=>e.user,username:o},d={isLoaded:e=>e.isLoaded,isLogin:e=>!i.S4||e.isSignedIn,isLoginWithAuth:e=>e.isSignedIn,isLoginWithClerk:e=>e.isSignedIn&&i.Nd||!1,isLoginWithNextAuth:e=>e.isSignedIn&&!!i.J_||!1}},71457:(e,t,a)=>{a.d(t,{U:()=>r});var s=a(74551);let r={hideSettingsMoveGuide:e=>e.preference.guide?.moveSettingsToAvatar,hideSyncAlert:e=>e.preference.hideSyncAlert,isPreferenceInit:e=>e.isUserStateInit,shouldTriggerFileInKnowledgeBaseTip:e=>"boolean"!=typeof e.preference.guide?.moveSettingsToAvatar,showUploadFileInKnowledgeBaseTip:e=>e.preference.guide?.uploadFileInKnowledgeBase,topicDisplayMode:e=>e.preference.topicDisplayMode||s.I4.topicDisplayMode,useCmdEnterToSend:e=>e.preference.useCmdEnterToSend||!1,userAllowTrace:e=>e.preference.telemetry}},83395:(e,t,a)=>{a.d(t,{A:()=>b});var s=a(28802),r=a(67072),i=a(11577),n=a(83034),o=a(98724),l=a(99278),d=a(64861),c=a(64694),u=a(43262),g=a(38759),p=a(61520);let h=(0,i.rU)(({css:e,token:t})=>({clickable:e`
    position: relative;
    transition: all 200ms ease-out 0s;

    &::before {
      content: '';

      position: absolute;
      transform: skewX(-45deg) translateX(-400%);

      overflow: hidden;

      box-sizing: border-box;
      width: 25%;
      height: 100%;

      background: rgba(255, 255, 255, 50%);

      transition: all 200ms ease-out 0s;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${t.colorPrimary};

      &::before {
        transform: skewX(-45deg) translateX(400%);
      }
    }
  `})),m=(0,n.forwardRef)(({size:e=40,background:t,clickable:a,className:i,style:m,...b},y)=>{let{styles:f,cx:v}=h(),[S,w]=(0,g.k)(e=>[p.f.userAvatar(e),p.f.username(e)]),x=(0,g.k)(p.P.isLogin),A=(0,c.p)(u.C.remoteServerUrl),k=(0,n.useMemo)(()=>x&&S?d.xl&&S.startsWith("/")&&A?A+S:S:l.CB,[x,S,A]);return(0,s.Y)(r.A,{alt:x&&w?w:o.Se,avatar:k,background:x&&S?t:"transparent",className:v(a&&f.clickable,i),ref:y,size:e,style:{flex:"none",...m},unoptimized:!0,...b})});m.displayName="UserAvatar";let b=m},86856:(e,t,a)=>{a.d(t,{A:()=>y});var s=a(28802),r=a(89289),i=a(3136),n=a(12389),o=a(47215),l=a(11577),d=a(75020),c=a(3779),u=a(83034),g=a(59121),p=a(80457),h=a(49935),m=a(46265),b=a(56790);let y=(0,u.memo)(({inShare:e,mobile:t,...a})=>{let{t:u}=(0,g.Bd)("auth"),y=(0,l.DP)(),{data:f,isLoading:v}=(0,m.lA)("stats-heatmaps",async()=>b.T.getHeatmaps()),S=f?.filter(e=>e.level>0).length||"--",w=f?.filter(e=>e.level>=3).length||"--",x=(0,s.Y)(r.A,{blockMargin:t?3:void 0,blockRadius:t?2:void 0,blockSize:t?6:14,data:f||[],labels:{legend:{less:u("heatmaps.legend.less"),more:u("heatmaps.legend.more")},months:[u("heatmaps.months.jan"),u("heatmaps.months.feb"),u("heatmaps.months.mar"),u("heatmaps.months.apr"),u("heatmaps.months.may"),u("heatmaps.months.jun"),u("heatmaps.months.jul"),u("heatmaps.months.aug"),u("heatmaps.months.sep"),u("heatmaps.months.oct"),u("heatmaps.months.nov"),u("heatmaps.months.dec")],tooltip:u("heatmaps.tooltip"),totalCount:u("heatmaps.totalCount")},loading:v||!f,maxLevel:4,...a}),A=(0,c.W0)(y.gold),k=(0,s.FD)(p.Flexbox,{gap:4,horizontal:!0,style:{alignSelf:"center",flex:"none",zoom:.9},children:[(0,s.Y)(i.A,{bordered:!1,style:{background:y.colorText,color:y.colorBgLayout,fontWeight:500,margin:0},children:[S,u("stats.days")].join(" ")}),(0,s.Y)(i.A,{bordered:!1,color:"gold",icon:(0,s.Y)(n.default,{color:A,fill:A,icon:d.A}),style:{background:y.gold,color:A,fontWeight:500,margin:0},children:[w,u("stats.days")].join(" ")})]});return e?(0,s.FD)(p.Flexbox,{gap:4,children:[(0,s.FD)(p.Flexbox,{align:"baseline",gap:4,horizontal:!0,justify:"space-between",children:[(0,s.Y)("div",{style:{color:y.colorTextDescription,fontSize:12},children:u("stats.lastYearActivity")}),k]}),x]}):(0,s.Y)(o.A,{extra:k,style:h.pC.style,title:u("stats.lastYearActivity"),variant:"borderless",children:(0,s.Y)(p.Flexbox,{paddingBlock:24,children:x})})})},88533:(e,t,a)=>{a.d(t,{A:()=>g});var s=a(28802),r=a(90172),i=a(75431),n=a(92912),o=a(11577),l=a(14654),d=a(3779),c=a(83034);let u=(0,o.rU)(({isDarkMode:e,css:t,token:a,prefixCls:s,responsive:r},i="#000")=>({card:t`
      border: 1px solid ${e?a.colorFillTertiary:a.colorFillSecondary};
      border-radius: ${a.borderRadiusLG}px;

      ${r.mobile} {
        border: none;
        border-radius: 0;
        background: ${a.colorBgContainer};
      }
    `,container:t`
      ${r.mobile} {
        border: none;
        border-radius: 0;
        background: ${a.colorBgContainer};
      }

      .${s}-pro-card-title {
        overflow: hidden;

        ${r.mobile} {
          margin: 0;
          font-size: 14px;
          line-height: 16px !important;
        }
      }

      .${s}-pro-card-body {
        padding: 0;
        .${s}-pro-statistic-card-content {
          position: relative;
          width: 100%;
          padding-block-end: 16px;
          padding-inline: 24px;
          .${s}-pro-statistic-card-chart {
            position: relative;
            width: 100%;
          }
        }

        .${s}-pro-statistic-card-footer {
          overflow: hidden;

          margin: 0;
          padding: 0;
          border-end-start-radius: ${a.borderRadiusLG}px;
          border-end-end-radius: ${a.borderRadiusLG}px;
        }
      }

      .${s}-pro-card-loading-content {
        padding-block: 16px;
        padding-inline: 24px;
      }

      .${s}-pro-card-header {
        padding-block-start: 16px;
        padding-inline: 24px;

        .${s}-pro-card-title {
          line-height: 32px;
        }

        + .${s}-pro-card-body {
          padding-block-start: 0;
        }

        ${r.mobile} {
          flex-wrap: wrap;
          gap: 8px;

          margin-block-end: 8px;
          padding-block-start: 0;
          padding-inline: 0;
        }
      }

      .${s}-statistic-content-value-int, .${s}-statistic-content-value-decimal {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.2;
      }

      .${s}-pro-statistic-card-chart {
        margin: 0;
      }

      .${s}-pro-statistic-card-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${r.mobile} {
          padding-block-end: 0 !important;
          padding-inline: 0 !important;
        }
      }

      .${s}-pro-statistic-card-content-horizontal {
        flex-direction: row;
        align-items: center;

        .${s}-pro-statistic-card-chart {
          align-self: center;
        }
      }
    `,highlight:t`
      overflow: hidden;

      &::before {
        content: '';

        position: absolute;
        z-index: 0;
        inset-block-end: -30%;
        inset-inline-end: -30%;
        transform: rotate(-15deg);

        width: 66%;
        height: 50%;
        border-radius: 50%;

        opacity: ${e?1:.33};
        background-image: linear-gradient(
          60deg,
          ${(0,d.aq)(-30,i)} 20%,
          ${i} 80%
        );
        background-repeat: no-repeat;
        background-position: center left;
        background-size: contain;
        filter: blur(32px);
      }

      > div {
        z-index: 1;
      }
    `,icon:t`
      border-radius: ${a.borderRadius}px;
      background: ${a.colorFillSecondary};
    `,raw:t`
      border: none !important;
      background: transparent !important;
    `})),g=(0,c.memo)(({title:e,className:t,highlight:a,variant:o,loading:d,extra:c,...g})=>{let{cx:p,styles:h}=u(a),{mobile:m}=(0,l.Q)();return(0,s.Y)(r.A,{bordered:!m,className:p(h.container,"raw"===o?h.raw:h.card,a&&h.highlight,t),extra:d?(0,s.Y)(n.A,{percent:"auto",size:"small"}):c,title:"string"==typeof e?(0,s.Y)(i.A,{as:"h2",ellipsis:{rows:1,tooltip:!0},style:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",margin:0,overflow:"hidden"},children:e}):e,...g})})},95891:(e,t,a)=>{a.d(t,{d:()=>b});var s=a(28802),r=a(8756),i=a(83034),n=a(64861),o=a(11577),l=a(65101),d=a(80457),c=a(98724);let u=(0,o.rU)(({css:e})=>({extraTitle:e`
      font-weight: 300;
      white-space: nowrap;
    `})),g=(0,i.memo)(({size:e,style:t,...a})=>(0,s.Y)(d.Flexbox,{height:e,style:{fontSize:e/1.5,fontWeight:"bolder",userSelect:"none",...t},...a,children:c.Se})),p=(0,i.memo)(({size:e,...t})=>(0,s.Y)(l.default,{alt:c.Se,height:e,src:c.UE,unoptimized:!0,width:e,...t})),h=(0,i.forwardRef)(({size:e="1em",style:t,...a},r)=>(0,s.Y)("svg",{fill:"none",height:e,ref:r,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",style:{flex:"none",lineHeight:1,...t},viewBox:"0 0 24 24",width:e,...a,children:(0,s.Y)("path",{d:"M16.88 3.549L7.12 20.451"})})),m=(0,i.memo)(({extra:e,size:t=32,className:a,style:r,type:i,...n})=>{let l,c=(0,o.DP)(),{styles:m}=u();switch(i){case"3d":case"flat":default:l=(0,s.Y)(p,{size:t,style:r,...n});break;case"mono":l=(0,s.Y)(p,{size:t,style:{filter:"grayscale(100%)",...r},...n});break;case"text":l=(0,s.Y)(g,{size:t,style:r,...n});break;case"combine":l=(0,s.FD)(s.FK,{children:[(0,s.Y)(p,{size:t}),(0,s.Y)(g,{size:t,style:{marginLeft:Math.round(t/4)}})]}),e||(l=(0,s.Y)(d.Flexbox,{align:"center",flex:"none",horizontal:!0,...n,children:l}))}if(!e)return l;let b=Math.round(t/3*1.9);return(0,s.FD)(d.Flexbox,{align:"center",className:a,flex:"none",horizontal:!0,...n,children:[l,(0,s.Y)(h,{size:b,style:{color:c.colorFill}}),(0,s.Y)("div",{className:m.extraTitle,style:{fontSize:b},children:e})]})}),b=(0,i.memo)(e=>n.fF?(0,s.Y)(m,{...e}):(0,s.Y)(r.default,{...e}))},99756:(e,t,a)=>{a.d(t,{Ec:()=>i,GJ:()=>o,ZG:()=>n});var s=a(2644),r=a.n(s);let i=()=>r()().startOf("day"),n=()=>r()().subtract(1,"month").startOf("month").endOf("month"),o=(e,t=14)=>r()().diff(r()(e),"day")<t}}]);