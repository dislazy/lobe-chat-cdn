(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35415],{4713:(e,t,i)=>{Promise.resolve().then(i.bind(i,88409)),Promise.resolve().then(i.bind(i,46854)),Promise.resolve().then(i.bind(i,10815))},10815:(e,t,i)=>{"use strict";i.d(t,{default:()=>x});var r=i(28802),n=i(75431),a=i(67072),o=i(15447),s=i(2608),l=i(59202),c=i(11577),d=i(83034),u=i(59121),h=i(20480),g=i(80457),p=i(38759),m=i(61520),b=i(92487);let y=(0,c.rU)(({css:e,token:t,responsive:i})=>({authButton:e`
    width: 100%;
    height: 40px;
    border-radius: ${t.borderRadius}px;
    font-weight: 500;
  `,card:e`
    max-width: 500px;
    border-color: ${t.colorBorderSecondary};
    border-radius: 12px;
    background: ${t.colorBgContainer};

    ${i.mobile} {
      min-width: auto;
    }
  `,container:e`
    width: 100%;
    min-height: 100vh;
    color: ${t.colorTextBase};
    background-color: ${t.colorBgLayout};

    ${i.mobile} {
      justify-content: flex-start;
      padding-block-start: 64px;
    }
  `,title:e`
    margin-block-end: ${t.marginLG}px;
    color: ${t.colorTextBase};
    text-align: center;
  `})),f=(0,d.memo)(({uid:e,clientMetadata:t})=>{let{styles:i}=y(),{t:c}=(0,u.Bd)("oauth"),f=t?.clientName||"the application",x=(0,p.k)(e=>e.isUserStateInit),S=(0,p.k)(m.f.userAvatar),v=(0,p.k)(m.f.nickName),[w,N]=d.useState(!1),A=c("login.title",{clientName:f}),Y=c("login.description",{clientName:f}),U=c("login.button");return(0,r.FD)(h.default,{className:i.container,gap:16,children:[(0,r.Y)(g.Flexbox,{align:"center",gap:40,children:(0,r.Y)(b.A,{clientDisplayName:f,isFirstParty:t.isFirstParty,logoUrl:t.logo})}),(0,r.Y)(n.A,{as:"h3",className:i.title,children:A}),(0,r.Y)(s.A,{className:i.card,children:(0,r.FD)(g.Flexbox,{gap:64,children:[(0,r.FD)(g.Flexbox,{gap:24,children:[(0,r.Y)(h.default,{horizontal:!0,justify:"center",children:x?(0,r.FD)(g.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,r.Y)(a.A,{alt:v||"",avatar:S,size:40}),(0,r.Y)("div",{style:{fontSize:20},children:v})]}):(0,r.FD)(g.Flexbox,{gap:8,horizontal:!0,children:[(0,r.Y)(l.A.Avatar,{active:!0}),(0,r.Y)(l.A.Button,{active:!0})]})}),(0,r.Y)("div",{style:{textAlign:"center"},children:Y})]}),(0,r.Y)(g.Flexbox,{gap:16,children:(0,r.FD)("form",{action:"/oidc/consent",method:"post",onSubmit:()=>N(!0),style:{width:"100%"},children:[(0,r.Y)("input",{name:"uid",type:"hidden",value:e}),(0,r.Y)("input",{name:"choice",type:"hidden",value:"accept"}),(0,r.Y)(o.A,{className:i.authButton,disabled:!x,htmlType:"submit",loading:w,name:"consent",size:"large",type:"primary",value:"accept",children:U})]})})]})})]})});f.displayName="LoginConfirmClient";let x=f},38759:(e,t,i)=>{"use strict";i.d(t,{c:()=>$,k:()=>T});var r=i(14308),n=i(50786),a=i(23993),o=i(41734),s=i(89872);let l={preference:s.I},c={...{defaultSettings:i(74551).a$,settings:{}},...l,...{},...{isOnboard:!1,isShowPWAGuide:!1,isUserCanEnableTrace:!1,isUserHasConversation:!1,isUserStateInit:!1}};var d=i(96773),u=i(70674),h=i(64911),g=i(85366),p=i(46265),m=i(55582),b=i(67095),y=i(61497),f=i(71457);let x=(0,y.K)("common"),S="initUserState",v=(0,y.K)("preference");var w=i(31021),N=i.n(w),A=i(19530),Y=i(45628);class U{constructor(){this.createShareSettingsUrl=e=>`/?${Y.N}=${encodeURI(JSON.stringify(e))}`,this.decodeShareSettings=e=>{try{return{data:JSON.parse(e)}}catch(e){return{message:JSON.stringify(e)}}}}}let k=new U;var F=i(34743),B=i(1866),P=i(28074);let I=(0,o.t)("user"),T=(0,a.h)()((0,r.eh)(I((...e)=>({...c,...((e,t)=>({addToolToAllowList:async e=>{let i=t().settings.tool?.humanIntervention?.allowList||[];i.includes(e)||await t().setSettings({tool:{humanIntervention:{allowList:[...i,e]}}})},importAppSettings:async e=>{let{setSettings:i}=t();await i(e)},importUrlShareSettings:async e=>{if(e){let i=k.decodeShareSettings(e);!i?.message&&i?.data&&await t().setSettings(i.data)}},internal_createSignal:()=>{let i=t().updateSettingsSignal;i&&!i.signal.aborted&&i.abort(A.ve);let r=new AbortController;return e({updateSettingsSignal:r},!1,"signalForUpdateSettings"),r},resetSettings:async()=>{await m.W.resetUserSettings(),await t().refreshUserState()},setSettings:async i=>{let r,{settings:n,defaultSettings:a}=t(),o=(0,b.h)(n,i);if(N()(n,o))return;let s=(r=(e,t)=>(0,F.A)(e,(e,i,n)=>{(0,B.A)(i)&&(0,B.A)(t[n])?N()(i,t[n])||(e[n]=i):N()(i,t[n])||(e[n]=(0,P.A)(i)&&(0,P.A)(t[n])?r(i,t[n]):i)}))(o,a);e({settings:s},!1,"optimistic_updateSettings");let l=t().internal_createSignal();await m.W.updateUserSettings(s,l.signal),await t().refreshUserState()},updateDefaultAgent:async e=>{await t().setSettings({defaultAgent:e})},updateGeneralConfig:async e=>{await t().setSettings({general:e})},updateHumanIntervention:async e=>{let i=t().settings.tool?.humanIntervention||{};await t().setSettings({tool:{humanIntervention:{...i,...e}}})},updateKeyVaults:async e=>{await t().setSettings({keyVaults:e})},updateSystemAgent:async(e,i)=>{await t().setSettings({systemAgent:{[e]:{...i}}})}}))(...e),...((e,t)=>({updateGuideState:async e=>{let{updatePreference:i}=t(),r=(0,b.h)(t().preference.guide,e);await i({guide:r})},updateLab:async e=>{let{updatePreference:i}=t(),r=(0,b.h)(t().preference.lab,e);await i({lab:r},v("updateLab"))},updatePreference:async(i,r)=>{let n=(0,b.h)(t().preference,i);e({preference:n},!1,r||v("updatePreference")),await m.W.updatePreference(n)}}))(...e),...((e,t)=>({enableAuth:()=>d.S4,logout:async()=>{if(d.Nd)return void t().clerkSignOut?.({redirectUrl:location.toString()});if(d.J_){let{signOut:e}=await i.e(4975).then(i.bind(i,4975));e()}},openLogin:async()=>{if(d.Nd){let e=location.toString();t().clerkSignIn?.({fallbackRedirectUrl:e,signUpForceRedirectUrl:e,signUpUrl:"/signup"});return}if(d.J_){let{signIn:e}=await i.e(4975).then(i.bind(i,4975)),r=t()?.oAuthSSOProviders;if(r&&1===r.length)return void e(r[0]);e()}}}))(...e),...((e,t)=>({refreshUserState:async()=>{await (0,h.j)(S)},updateAvatar:async e=>{await m.W.updateAvatar(e),await t().refreshUserState()},updateKeyVaultConfig:async(e,i)=>{await t().setSettings({keyVaults:{[e]:i}})},useCheckTrace:e=>(0,g.Ay)(e?"checkTrace":null,()=>"boolean"==typeof f.U.userAllowTrace(t())?Promise.resolve(!1):Promise.resolve(t().isUserCanEnableTrace),{revalidateOnFocus:!1}),useInitUserState:(i,r,n)=>(0,p.Ju)(i?S:null,()=>m.W.getUserState(),{onError:e=>{n?.onError?.(e)},onSuccess:i=>{if(n?.onSuccess?.(i),i){let n={defaultAgent:r.defaultAgent,image:r.image,systemAgent:r.systemAgent},a=(0,b.h)(t().defaultSettings,n),o=0===Object.keys(i.preference||{}).length?s.I:i.preference,l=i.avatar||i.userId?(0,b.h)(t().user,{avatar:i.avatar,email:i.email,firstName:i.firstName,fullName:i.fullName,id:i.userId,latestName:i.lastName,username:i.username}):t().user;e({defaultSettings:a,isOnboard:i.isOnboard,isShowPWAGuide:i.canEnablePWAGuide,isUserCanEnableTrace:i.canEnableTrace,isUserHasConversation:i.hasConversation,isUserStateInit:!0,preference:o,settings:i.settings||{},subscriptionPlan:i.subscriptionPlan,user:l},!1,x("initUserState"));let c=(0,u.wZ)();c?.identify(i.userId||"",{email:i.email,firstName:i.firstName,lastName:i.lastName,username:i.username})}}})}))(...e)}))),n.x),$=()=>T.getState()},46854:(e,t,i)=>{"use strict";i.d(t,{default:()=>w});var r=i(28802),n=i(75431),a=i(15447),o=i(2608),s=i(49875),l=i(11577),c=i(83034),d=i(59121),u=i(20480),h=i(80457),g=i(92487),p=i(12389),m=i(38141),b=i(85017),y=i(77707);let f=(0,c.memo)(({uid:e})=>{let{t}=(0,d.Bd)("oauth"),i=(0,c.useRef)(null);(0,c.useEffect)(()=>{i.current?.submit()},[]);let n=(0,l.DP)();return(0,r.FD)(r.FK,{children:[(0,r.Y)(y.default,{children:(0,r.Y)(m.Ay,{icon:(0,r.Y)(p.default,{icon:b.A,spin:!0,style:{color:n.colorText}}),status:"success",style:{padding:0},subTitle:t("consent.redirecting"),title:""})}),(0,r.FD)("form",{action:"/oidc/consent",method:"post",ref:i,style:{display:"none"},children:[(0,r.Y)("input",{name:"uid",type:"hidden",value:e}),(0,r.Y)("input",{name:"consent",type:"hidden",value:"accept"})]})]})});f.displayName="BuiltinConsent";let x=(0,l.rU)(({css:e,token:t})=>({authButton:e`
    width: 100%;
    height: 40px;
    border-radius: ${t.borderRadius}px;
    font-weight: 500;
  `,cancelButton:e`
    width: 100%;
    height: 40px;
    border-color: ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius}px;

    font-weight: 500;
    color: ${t.colorTextBase};

    background-color: transparent;
  `,card:e`
    max-width: 500px;
    border-color: ${t.colorBorderSecondary};
    border-radius: 12px;
    background-color: ${t.colorBgContainer};
  `,connector:e`
    width: 40px;
    height: 40px;
  `,connectorLine:e`
    width: 32px;
    height: 1px;
    background-color: ${t.colorBorderSecondary};
  `,container:e`
    width: 100%;
    min-height: 100vh;
    padding-block: 12px;

    color: ${t.colorTextBase};

    background-color: ${t.colorBgLayout};
  `,icon:e`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 16px;

    background-color: ${t.colorBgElevated};
  `,iconContainer:e`
    display: flex;
    align-items: center;
    justify-content: center;
  `,lobeIcon:e`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    border-radius: 50%;

    background-color: ${t.colorBgElevated};
  `,scope:e`
    margin-block: 8px;
    padding: 12px;
    border-radius: 6px;
    background: ${t.colorFillQuaternary};
  `,scopes:e`
    width: 100%;
  `,title:e`
    margin-block-end: ${t.marginLG}px;
    font-size: 24px;
    color: ${t.colorTextBase};
    text-align: center;
  `})),S=new Set(["lobehub-desktop","lobehub-mobile","lobehub-market"]),v=(0,c.memo)(({uid:e,clientId:t,scopes:i,clientMetadata:l})=>{let{styles:p}=x(),{t:m}=(0,d.Bd)("oauth"),[b,y]=(0,c.useState)(!1),v=l?.clientName||t;return S.has(t)?(0,r.Y)(f,{uid:t}):(0,r.FD)(u.default,{className:p.container,gap:16,children:[(0,r.FD)(h.Flexbox,{gap:40,children:[(0,r.Y)(g.A,{clientDisplayName:v,isFirstParty:l.isFirstParty,logoUrl:l.logo}),(0,r.Y)(n.A,{as:"h3",className:p.title,children:m("consent.title",{clientName:v})})]}),(0,r.Y)(o.A,{className:p.card,children:(0,r.Y)(h.Flexbox,{gap:8,children:(0,r.FD)(h.Flexbox,{gap:12,children:[(0,r.Y)(n.A,{children:m("consent.description",{clientName:v})}),(0,r.FD)("div",{className:p.scopes,children:[(0,r.Y)(n.A,{type:"secondary",children:m("consent.permissionsTitle")}),i.map(e=>(0,r.Y)("div",{className:p.scope,children:(0,r.Y)(n.A,{children:m(`consent.scope.${e.replace(":","-")}`,e)})},e))]}),(0,r.Y)(s.A,{dashed:!0}),(0,r.FD)("form",{action:"/oidc/consent",method:"post",style:{width:"100%"},children:[(0,r.Y)("input",{name:"uid",type:"hidden",value:e}),(0,r.FD)(h.Flexbox,{gap:12,horizontal:!0,children:[(0,r.Y)(a.A,{className:p.cancelButton,htmlType:"submit",name:"consent",value:"deny",children:m("consent.buttons.deny")}),(0,r.Y)(a.A,{className:p.authButton,htmlType:"submit",loading:b,name:"consent",onClick:()=>{y(!0)},type:"primary",value:"accept",children:m("consent.buttons.accept")})]})]})]})})})]})});v.displayName="ConsentClient";let w=v},55582:(e,t,i)=>{"use strict";i.d(t,{W:()=>a});var r=i(77605);class n{constructor(){this.getUserRegistrationDuration=async()=>r.du.user.getUserRegistrationDuration.query(),this.getUserState=async()=>r.du.user.getUserState.query(),this.getUserSSOProviders=async()=>r.du.user.getUserSSOProviders.query(),this.unlinkSSOProvider=async(e,t)=>r.du.user.unlinkSSOProvider.mutate({provider:e,providerAccountId:t}),this.makeUserOnboarded=async()=>r.du.user.makeUserOnboarded.mutate(),this.updateAvatar=async e=>r.du.user.updateAvatar.mutate(e),this.updatePreference=async e=>r.du.user.updatePreference.mutate(e),this.updateGuide=async e=>r.du.user.updateGuide.mutate(e),this.updateUserSettings=async(e,t)=>r.du.user.updateSettings.mutate(e,{signal:t}),this.resetUserSettings=async()=>r.du.user.resetSettings.mutate()}}let a=new n},61520:(e,t,i)=>{"use strict";i.d(t,{P:()=>c,f:()=>l});var r=i(74551),n=i(96987),a=i(96773);let o=r.Se,s=e=>a.S4?e.isSignedIn?e.user?.username:"anonymous":r.xl?e.user?.username:o,l={displayUserName:e=>s(e)||e.user?.email||"",email:e=>e.user?.email||"",fullName:e=>e.user?.fullName||"",nickName:e=>{let t=e.user?.fullName||e.user?.username;return a.S4?e.isSignedIn?t:(0,n.t)("userPanel.anonymousNickName",{ns:"common"}):r.xl?t:(0,n.t)("userPanel.defaultNickname",{ns:"common"})},userAvatar:e=>e.user?.avatar||"",userId:e=>e.user?.id,userProfile:e=>e.user,username:s},c={isLoaded:e=>e.isLoaded,isLogin:e=>!a.S4||e.isSignedIn,isLoginWithAuth:e=>e.isSignedIn,isLoginWithClerk:e=>e.isSignedIn&&a.Nd||!1,isLoginWithNextAuth:e=>e.isSignedIn&&!!a.J_||!1}},64861:(e,t,i)=>{"use strict";i.d(t,{Eb:()=>c,V_:()=>o,fF:()=>l,xl:()=>s});var r=i(80239),n=i(98724),a=i(55036);let o=r.rE,s="1"===a.env.NEXT_PUBLIC_IS_DESKTOP_APP,l="LobeHub"!==n.Se,c="LobeHub"!==n.dS},71457:(e,t,i)=>{"use strict";i.d(t,{U:()=>n});var r=i(74551);let n={hideSettingsMoveGuide:e=>e.preference.guide?.moveSettingsToAvatar,hideSyncAlert:e=>e.preference.hideSyncAlert,isPreferenceInit:e=>e.isUserStateInit,shouldTriggerFileInKnowledgeBaseTip:e=>"boolean"!=typeof e.preference.guide?.moveSettingsToAvatar,showUploadFileInKnowledgeBaseTip:e=>e.preference.guide?.uploadFileInKnowledgeBase,topicDisplayMode:e=>e.preference.topicDisplayMode||r.I4.topicDisplayMode,useCmdEnterToSend:e=>e.preference.useCmdEnterToSend||!1,userAllowTrace:e=>e.preference.telemetry}},77707:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var r=i(28802),n=i(2608),a=i(11577),o=i(83034),s=i(20480);let l=(0,a.rU)(({css:e,responsive:t})=>({card:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-width: 500px;
    min-height: 280px;

    ${t.mobile} {
      min-width: auto;
    }
  `,container:e`
    ${t.mobile} {
      justify-content: flex-start;
      width: 100%;
      padding-block-start: 64px;
    }
  `})),c=(0,o.memo)(({children:e})=>{let{styles:t}=l();return(0,r.Y)(s.default,{className:t.container,height:"100vh",paddingBlock:24,paddingInline:12,children:(0,r.Y)(n.A,{className:t.card,children:e})})});c.displayName="ResultLayout";let d=c},80239:e=>{"use strict";e.exports=JSON.parse('{"rE":"2.0.0-next.98","TB":"https://github.com/lobehub/lobe-chat"}')},88409:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var r=i(28802),n=i(75431),a=i(11577),o=i(83034),s=i(20480);let l=(0,a.rU)(({css:e,token:t})=>({container:e`
    width: 100%;
    min-height: 100vh;
    color: ${t.colorTextBase};
    background-color: ${t.colorBgLayout};
  `,error:e`
    text-align: center;
  `})),c=(0,o.memo)(({error:e})=>{let{styles:t}=l();return(0,r.Y)(s.default,{className:t.container,children:(0,r.FD)("div",{className:t.error,children:[(0,r.Y)(n.A,{as:"h2",style:{color:"inherit"},children:e.title}),(0,r.Y)(n.A,{style:{color:"inherit"},children:e.message})]})})});c.displayName="ConsentClientError";let d=c},92487:(e,t,i)=>{"use strict";i.d(t,{A:()=>p});var r=i(28802),n=i(12389),a=i(11577),o=i(65298),s=i(23390),l=i(65101),c=i(83034),d=i(80457),u=i(20480),h=i(95891);let g=(0,a.rU)(({css:e,token:t})=>({connector:e`
    width: 40px;
    height: 40px;

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  `,connectorLine:e`
    width: 32px;
    height: 1px;
    background-color: ${t.colorBorderSecondary};

    @media (max-width: 768px) {
      width: 24px;
    }
  `,icon:e`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 16px;

    background-color: ${t.colorBgElevated};

    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
      border-radius: 12px;
    }
  `,lobeIcon:e`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    border-radius: 50%;

    background-color: ${t.colorBgElevated};

    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
    }
  `})),p=(0,c.memo)(({isFirstParty:e,clientDisplayName:t,logoUrl:i})=>{let{styles:a,theme:c}=g();return e?(0,r.Y)(d.Flexbox,{align:"center",gap:12,horizontal:!0,justify:"center",children:(0,r.Y)(l.default,{alt:t,height:64,src:i,style:{height:"auto",maxWidth:"100%"},unoptimized:!0,width:64})}):(0,r.FD)(d.Flexbox,{align:"center",gap:12,horizontal:!0,justify:"center",children:[(0,r.Y)("div",{className:a.icon,children:i?(0,r.Y)(l.default,{alt:t,height:56,src:i,style:{height:"auto",maxWidth:"100%"},unoptimized:!0,width:56}):(0,r.Y)(n.default,{icon:o.A})}),(0,r.Y)("div",{className:a.connectorLine}),(0,r.Y)(u.default,{className:a.connector,children:(0,r.Y)(n.default,{icon:s.A,style:{color:c.colorTextSecondary,fontSize:20}})}),(0,r.Y)("div",{className:a.connectorLine}),(0,r.Y)("div",{className:a.lobeIcon,children:(0,r.Y)(h.d,{height:48,style:{height:"auto",maxWidth:"100%",objectFit:"cover"},width:48})})]})})},95891:(e,t,i)=>{"use strict";i.d(t,{d:()=>b});var r=i(28802),n=i(8756),a=i(83034),o=i(64861),s=i(11577),l=i(65101),c=i(80457),d=i(98724);let u=(0,s.rU)(({css:e})=>({extraTitle:e`
      font-weight: 300;
      white-space: nowrap;
    `})),h=(0,a.memo)(({size:e,style:t,...i})=>(0,r.Y)(c.Flexbox,{height:e,style:{fontSize:e/1.5,fontWeight:"bolder",userSelect:"none",...t},...i,children:d.Se})),g=(0,a.memo)(({size:e,...t})=>(0,r.Y)(l.default,{alt:d.Se,height:e,src:d.UE,unoptimized:!0,width:e,...t})),p=(0,a.forwardRef)(({size:e="1em",style:t,...i},n)=>(0,r.Y)("svg",{fill:"none",height:e,ref:n,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",style:{flex:"none",lineHeight:1,...t},viewBox:"0 0 24 24",width:e,...i,children:(0,r.Y)("path",{d:"M16.88 3.549L7.12 20.451"})})),m=(0,a.memo)(({extra:e,size:t=32,className:i,style:n,type:a,...o})=>{let l,d=(0,s.DP)(),{styles:m}=u();switch(a){case"3d":case"flat":default:l=(0,r.Y)(g,{size:t,style:n,...o});break;case"mono":l=(0,r.Y)(g,{size:t,style:{filter:"grayscale(100%)",...n},...o});break;case"text":l=(0,r.Y)(h,{size:t,style:n,...o});break;case"combine":l=(0,r.FD)(r.FK,{children:[(0,r.Y)(g,{size:t}),(0,r.Y)(h,{size:t,style:{marginLeft:Math.round(t/4)}})]}),e||(l=(0,r.Y)(c.Flexbox,{align:"center",flex:"none",horizontal:!0,...o,children:l}))}if(!e)return l;let b=Math.round(t/3*1.9);return(0,r.FD)(c.Flexbox,{align:"center",className:i,flex:"none",horizontal:!0,...o,children:[l,(0,r.Y)(p,{size:b,style:{color:d.colorFill}}),(0,r.Y)("div",{className:m.extraTitle,style:{fontSize:b},children:e})]})}),b=(0,a.memo)(e=>o.fF?(0,r.Y)(m,{...e}):(0,r.Y)(n.default,{...e}))},98724:(e,t,i)=>{"use strict";i.d(t,{IS:()=>r,Se:()=>n,UE:()=>a,dS:()=>o,kX:()=>l,sP:()=>s,tU:()=>c});let r="LobeHub Cloud",n="LobeHub",a="",o="LobeHub",s={help:void 0,privacy:void 0,terms:void 0},l={discord:"https://discord.gg/AYFPHvv2jT",github:"https://github.com/lobehub",medium:"https://medium.com/@lobehub",x:"https://x.com/lobehub",youtube:"https://www.youtube.com/@lobehub"},c={business:"hello@lobehub.com",support:"support@lobehub.com"}}},e=>{e.O(0,[88440,66304,6312,99663,67072,2049,73750,65101,79643,96987,14453,75431,38141,41490,13985,8756,13649,35135,5010,69668,1921,77358],()=>e(e.s=4713)),_N_E=e.O()}]);