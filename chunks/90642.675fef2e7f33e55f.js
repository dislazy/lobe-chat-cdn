"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14343,51989,60317,64694,90642],{1696:(e,t,r)=>{r.d(t,{bq:()=>a,pI:()=>o});let o=({params:e})=>{if(!e.slug)throw Error("Slug parameter is required");return{slug:e.slug}},a=({params:e})=>{if(!e.id)throw Error("ID parameter is required");return{id:e.id}}},5003:(e,t,r)=>{r.d(t,{Ty:()=>a,xN:()=>o});let o="en-US",a="LOBE_LOCALE"},5930:(e,t,r)=>{r.d(t,{o:()=>$});var o=r(14308),a=r(50786),n=r(23993),i=r(41734),l=r(31021),s=r.n(l),c=r(83897),d=r(62340),p=r(64861),u=r(46265),h=r(96153),g=r(48349),m=r(60317),x=r(96987),b=r(5003),f=r(67095),y=r(61497);let w=(0,y.K)("g");var S=r(85601),v=r(35245),k=r(45628);let A=(0,y.K)("w");var Y=r(78397);let C=(0,i.t)("global"),$=(0,n.h)()((0,o.eh)(C((...e)=>({...Y.ue,...((e,t)=>({switchBackToChat:e=>{let r=(0,k.iU)(e||v.Ed,t().isMobile);t().navigate?.(r)},toggleAgentSystemRoleExpand:(e,r)=>{let{status:o}=t(),a=o.systemRoleExpandedMap||{},n="boolean"==typeof r?r:!a[e];t().updateSystemStatus({systemRoleExpandedMap:{...a,[e]:n}},A("toggleAgentSystemRoleExpand",{agentId:e,expanded:n}))},toggleChatSideBar:e=>{let r="boolean"==typeof e?e:!t().status.showChatSideBar;t().updateSystemStatus({showChatSideBar:r},A("toggleAgentPanel",e))},toggleExpandInputActionbar:e=>{let r="boolean"==typeof e?e:!t().status.expandInputActionbar;t().updateSystemStatus({expandInputActionbar:r},A("toggleExpandInputActionbar",e))},toggleExpandSessionGroup:(e,r)=>{let{status:o}=t(),a=(0,S.jM)(o.expandSessionGroupKeys,t=>{if(r)t.includes(e)||t.push(e);else{let r=t.indexOf(e);-1!==r&&t.splice(r,1)}});t().updateSystemStatus({expandSessionGroupKeys:a})},toggleMobilePortal:e=>{let r="boolean"==typeof e?e:!t().status.mobileShowPortal;t().updateSystemStatus({mobileShowPortal:r},A("toggleMobilePortal",e))},toggleMobileTopic:e=>{let r="boolean"==typeof e?e:!t().status.mobileShowTopic;t().updateSystemStatus({mobileShowTopic:r},A("toggleMobileTopic",e))},toggleSystemRole:e=>{let r="boolean"==typeof e?e:!t().status.mobileShowTopic;t().updateSystemStatus({showSystemRole:r},A("toggleMobileTopic",e))},toggleWideScreen:e=>{let r="boolean"==typeof e?e:!t().status.noWideScreen;t().updateSystemStatus({noWideScreen:r},A("toggleWideScreen",e))},toggleZenMode:()=>{let{status:e}=t(),r=!e.zenMode;t().updateSystemStatus({zenMode:r},A("toggleZenMode"))}}))(...e),...((e,t)=>({openSessionInNewWindow:async e=>{if(p.xl)try{let{dispatch:t}=await r.e(14343).then(r.bind(r,14343)),o=`/chat?session=${e}&mode=single`,a=await t("createMultiInstanceWindow",{path:o,templateId:"chatSingle",uniqueId:`chat_${e}`});a.success||console.error("Failed to open session in new window:",a.error)}catch(e){console.error("Error opening session in new window:",e)}},openTopicInNewWindow:async(e,t)=>{if(p.xl)try{let{dispatch:o}=await r.e(14343).then(r.bind(r,14343)),a=`/chat?session=${e}&topic=${t}&mode=single`,n=await o("createMultiInstanceWindow",{path:a,templateId:"chatSingle",uniqueId:`chat_${e}_${t}`});n.success||console.error("Failed to open topic in new window:",n.error)}catch(e){console.error("Error opening topic in new window:",e)}},switchLocale:(e,{skipBroadcast:o}={})=>{let a;t().updateSystemStatus({language:e}),a="auto"===e?navigator.language:e,(0,x.v2)(a),document.documentElement.lang=a,(0,m.TV)(b.Ty,"auto"===e?void 0:e,365),p.xl&&!o&&(async()=>{try{let{dispatch:t}=await r.e(14343).then(r.bind(r,14343));await t("updateLocale",e)}catch(e){console.error("Failed to update locale in main process:",e)}})()},switchThemeMode:(e,{skipBroadcast:o}={})=>{t().updateSystemStatus({themeMode:e}),(0,g.T)(d.mh,"auto"===e?void 0:e),p.xl&&!o&&(async()=>{try{let{dispatch:t}=await r.e(14343).then(r.bind(r,14343));await t("updateThemeMode",e)}catch(e){console.error("Failed to update theme in main process:",e)}})()},updateSystemStatus:(r,o)=>{if(!t().isStatusInit)return;let a=(0,f.h)(t().status,r);s()(t().status,a)||(e({status:a},!1,o||w("updateSystemStatus")),t().statusStorage.saveToLocalStorage(a))},useCheckLatestVersion:(t=!0)=>(0,u.Ju)(t?"checkLatestVersion":null,async()=>h.v.getLatestVersion(),{focusThrottleInterval:18e5,onSuccess:t=>{if(!(0,c.valid)(p.V_)||!(0,c.valid)(t))return;let r=(0,c.parse)(p.V_),o=(0,c.parse)(t);if(!r||!o)return;let a=`${r.major}.${r.minor}.0`,n=`${o.major}.${o.minor}.0`;(0,c.gt)(n,a)&&e({hasNewVersion:!0,latestVersion:t},!1,w("checkLatestVersion"))}}),useInitSystemStatus:()=>(0,u.Ju)("initSystemStatus",()=>t().statusStorage.getFromLocalStorage(),{onSuccess:r=>{e({isStatusInit:!0},!1,"setStatusInit"),t().updateSystemStatus(r,"initSystemStatus")}})}))(...e)}))),a.x)},9402:(e,t,r)=>{r.d(t,{$3:()=>b,$g:()=>x,BX:()=>g,DB:()=>d,KT:()=>m,U2:()=>u,Xq:()=>c,Yq:()=>f,ZV:()=>h,fU:()=>p});var o=r(74551),a=r(2644),n=r.n(a),i=r(74912),l=r(30598),s=r.n(l);let c=(e,t=1)=>{if(!e&&0!==e)return"--";let r=e/1024;if(r<1024)return`${r.toFixed(t)} KB`;if(r<1048576){let e=r/1024;return`${e.toFixed(t)} MB`}{let e=r/1048576;return`${e.toFixed(t)} GB`}},d=(e,t=2)=>{if(!e&&0!==e)return"--";return e<=1e3?e.toFixed(t)+" Byte/s":e/1024<=1e3?(e/1024).toFixed(t)+" KB/s":e/1024/1024<=1e3?(e/1024/1024).toFixed(t)+" MB/s":(e/1024/1024/1024).toFixed(t)+" GB/s"},p=e=>e||0===e?(0,i.A)(e)?e<60?`${e.toFixed(1)} s`:e<3600?`${(e/60).toFixed(1)} min`:`${(e/3600).toFixed(2)} h`:e:"--",u=e=>{if(!e&&0!==e)return"--";if(!(0,i.A)(e))return e;let t=new Intl.NumberFormat("en-US").format(e);return e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e4?(e/1e3).toFixed(1)+"K":0===e?0:t},h=(e,t)=>{if(!e&&0!==e)return"--";if(!t)return new Intl.NumberFormat("en-US").format(e);let[r,o]=e.toFixed(t).split(".");return`${s()(r).format("0,0")}.${o}`},g=e=>e||0===e?s()(e).format("0,0"):"--",m=e=>{if(!e&&0!==e)return"--";if(e>0&&e<1024)return"1K";let t=Math.floor(e/1024);return((e>=1024&&e<41984||e>=128e3)&&(t=Math.floor(e/1e3)),131072===e)?"128K":t<1e3?`${t}K`:`${Math.floor(t/1e3)}M`},x=(e,t=2)=>{if(!e&&0!==e)return"--";if(0===t)return s()(e).format("0,0");let[r,o]=e.toFixed(t).split(".");return`${s()(r).format("0,0")}.${o}`},b=(e,t)=>e||0===e?"CNY"===t?x(e/o.vE):x(e):"-",f=e=>e?n()(e).format("YYYY-MM-DD"):"--"},12467:(e,t,r)=>{r.d(t,{E:()=>o,k:()=>a});let o=e=>e.featureFlags,a={enableUploadFileToServer:e=>e.serverConfig.enableUploadFileToServer,enabledAccessCode:e=>!!e.serverConfig?.enabledAccessCode,enabledOAuthSSO:e=>e.serverConfig.enabledOAuthSSO,enabledTelemetryChat:e=>e.serverConfig.telemetry.langfuse||!1,isMobile:e=>e.isMobile||!1,oAuthSSOProviders:e=>e.serverConfig.oAuthSSOProviders}},12890:(e,t,r)=>{r.d(t,{j:()=>n});var o=r(88221),a=r(93016);let n=e=>(0,o.A)(e,e=>(0,a.A)(e)||""===e)},14343:(e,t,r)=>{r.d(t,{e2:()=>l,dispatch:()=>o,$l:()=>n,A8:()=>c});let o=async(e,...t)=>{if(!window.electronAPI||!window.electronAPI.invoke)throw Error(`electronAPI.invoke not found. Please expose \`ipcRenderer.invoke\` to \`window.electronAPI.invoke\` in the preload:

import { contextBridge, ipcRenderer } from 'electron';

const invoke = async (event, ...data) =>
  ipcRenderer.invoke(event, ...data);

contextBridge.exposeInMainWorld('electronAPI', { invoke });
`);return window.electronAPI.invoke(e,...t)},a=async e=>{if(e){if("string"==typeof e||e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e))return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);if(e instanceof Blob)return await e.arrayBuffer();throw console.warn("不支持的 IPC 代理请求体类型:",typeof e),Error("不支持的 IPC 代理请求体类型")}},n=async(e,t)=>{var r;let o,n=new URL(e.toString(),window.location.origin),i=n.pathname+n.search,l=t?.method?.toUpperCase()||"GET",s=(r=t?.headers,o={},r&&(r instanceof Headers?r.forEach((e,t)=>{o[t]=e}):Array.isArray(r)?r.forEach(([e,t])=>{o[e]=t}):Object.assign(o,r),delete o.host,delete o.connection,delete o["content-length"]),o),c={body:await a(t?.body),headers:s,method:l,urlPath:i};return new Promise((e,t)=>{let r,o=!1,a=new ReadableStream({cancel(){n?.()},start(e){r=e}}),n=window.electronAPI.onStreamInvoke(c,{onData:e=>{r&&r.enqueue(e)},onEnd:()=>{r&&r.close()},onError:e=>{console.error("[streamInvoke] Error during IPC stream proxy call:",e),o?r&&r.error(e):(o=!0,t(e))},onResponse:t=>{o||(o=!0,e(new Response(a,t)))}})})};var i,l=((i={}).Cloud="cloud",i.Local="local",i.SelfHost="selfHost",i),s=r(83034);let c=(e,t)=>{(0,s.useEffect)(()=>{if(!window.electron)return;let r=(e,r)=>{t(r)};return window.electron.ipcRenderer.on(e,r),()=>{window.electron.ipcRenderer.removeListener(e,r)}},[])}},18328:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(28802),a=r(92619),n=r(84663),i=r(11577),l=r(83034);let s=(0,i.rU)(({css:e,token:t,prefixCls:r})=>({compact:e`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,menu:e`
    flex: 1;
    border: none !important;
    background: transparent;

    .${r}-menu-item-divider {
      margin-block: 0.125rem;
      border-color: ${t.colorFillTertiary};

      &:first-child {
        margin-block-start: 0;
      }

      &:last-child {
        margin-block-end: 0;
      }
    }

    .${r}-menu-item, .${r}-menu-submenu-title {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      height: unset;
      min-height: 2rem;
      padding-block: 0.375rem;
      padding-inline: 0.75rem;

      line-height: 2;

      .anticon + .${r}-menu-title-content {
        margin-inline-start: 0;
      }
    }

    .${r}-menu-item-selected {
      .${r}-menu-item-icon svg {
        color: ${t.colorText};
      }
    }

    .${r}-menu-item-icon svg {
      color: ${t.colorTextSecondary};
    }

    .${r}-menu-title-content {
      flex: 1;
    }
  `})),c=(0,l.memo)(({className:e,selectable:t=!1,compact:r,...i})=>{let{cx:l,styles:c,theme:d}=s();return(0,o.Y)(a.Ay,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:d.borderRadius,itemColor:t?d.colorTextSecondary:d.colorText,itemHoverBg:d.colorFillTertiary,itemMarginBlock:4*!r,itemMarginInline:4*!r,itemSelectedBg:d.colorFillSecondary,paddingXS:-8}}},children:(0,o.Y)(n.A,{className:l(c.menu,r&&c.compact,e),mode:"vertical",selectable:t,...i})})})},19742:(e,t,r)=>{r.d(t,{HL:()=>n,Yt:()=>a,yi:()=>o}),r(96574);let o=e=>{let t=new URL(e,"https://a.com").pathname,r=t.lastIndexOf(".");if(-1===r)return"";let o=t.slice(Math.max(0,r+1)).toLowerCase();return["webp","jpg","jpeg","png","gif","bmp","svg","tiff","tif"].includes(o)?o:""};function a(e){try{return"127.0.0.1"===new URL(e).hostname}catch{return!1}}function n(e){try{let t=new URL(e).hostname.toLowerCase();if("localhost"===t||t.endsWith(".localhost")||"::1"===t||"[::1]"===t||"0.0.0.0"===t)return!0;let r=t.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);if(r){let[,e,t,o,a]=r.map(Number);if(e>255||t>255||o>255||a>255)return!1;if(127===e||10===e||172===e&&t>=16&&t<=31||192===e&&168===t)return!0}return!1}catch{return!1}}},20108:(e,t,r)=>{r.d(t,{f:()=>n});var o=r(50718),a=r(83034);let n=()=>{let[e,t]=(0,a.useState)(!1),[r,n]=(0,a.useState)(!1);(0,a.useEffect)(()=>{n(!0)},[]);let i=(0,o.useSearchParams)();return(0,a.useEffect)(()=>{r&&t("single"===i.get("mode"))},[i,r]),!!r&&e}},25040:(e,t,r)=>{r.d(t,{U:()=>o,h:()=>a}),r(30791).hp;let o=({size:e,img:t,type:r="image/webp"})=>{let o=document.createElement("canvas"),a=o.getContext("2d"),n=0,i=0;return t.width>t.height?n=(t.width-t.height)/2:i=(t.height-t.width)/2,o.width=e,o.height=e,a.drawImage(t,n,i,Math.min(t.width,t.height),Math.min(t.width,t.height),0,0,e,e),o.toDataURL(r)},a=async e=>{try{let t=await fetch(e),r=await t.blob(),o=await r.arrayBuffer();return{base64:btoa(new Uint8Array(o).reduce((e,t)=>e+String.fromCharCode(t),"")),mimeType:r.type}}catch(e){throw console.error("Error converting image to base64:",e),e}}},29816:(e,t,r)=>{r.d(t,{H:()=>s});var o=r(32818),a=r(83034),n=r(49935),i=r(12020),l=r(91568);let s=()=>{let[e,t]=(0,a.useState)(!1),{isSupportInstallPWA:r,isPWA:s}=(0,l.V)();return(0,a.useEffect)(()=>{if(!i.i)return o.O.addListener(t),()=>{o.O.removeListener(t)}},[]),{canInstall:!s&&!!r&&!!document.querySelector(`#${n.lU}`)&&e,install:()=>{let e=document.querySelector(`#${n.lU}`);e&&(e.externalPromptEvent=o.O.getEvent(),e?.showDialog(!0))}}}},35628:(e,t,r)=>{r.d(t,{A:()=>S});var o=r(28802),a=r(12389),n=r(37412),i=r(64873),l=r(11577),s=r(39639),c=r(85017),d=r(83034),p=r(59121),u=r(80457),h=r(46265),g=r(56790),m=r(30333),x=r(11678),b=r(62326),f=r(9402),y=r(99756);let w=(0,l.rU)(({css:e,token:t})=>({card:e`
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: ${t.borderRadius}px;
    background: ${t.colorFillTertiary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,count:e`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
  `,title:e`
    font-size: 12px;
    line-height: 1.2;
    color: ${t.colorTextDescription};
  `,today:e`
    font-size: 12px;
  `})),S=(0,d.memo)(({style:e,...t})=>{let r=(0,b.wo)(e=>e.isMobile),{data:l,isLoading:S}=(0,h.lA)("count-sessions",()=>m.sessionService.countSessions()),{data:v,isLoading:k}=(0,h.lA)("count-topics",()=>x.p.countTopics()),{data:{messages:A,messagesToday:Y}={},isLoading:C}=(0,h.lA)("count-messages",async()=>({messages:await g.T.countMessages(),messagesToday:await g.T.countMessages({startDate:(0,y.Ec)().format("YYYY-MM-DD")})})),{styles:$,theme:F}=w(),{t:P}=(0,p.Bd)("common"),D=(0,d.useMemo)(()=>(0,o.Y)(a.default,{icon:c.A,spin:!0}),[]),I=[{count:S||(0,s.A)(l)?D:l,key:"sessions",title:P("dataStatistics.sessions")},{count:k||(0,s.A)(v)?D:v,key:"topics",title:P("dataStatistics.topics")},{count:C||(0,s.A)(A)?D:A,countToady:Y,key:"messages",title:P("dataStatistics.messages")}];return(0,o.Y)(u.Flexbox,{align:"center",gap:4,horizontal:!0,paddingInline:8,style:{marginBottom:8,...e},width:"100%",...t,children:I.map(e=>{if("messages"===e.key){let t=!!(e.countToady&&e.countToady>0);return(0,o.FD)(u.Flexbox,{align:"center",className:$.card,flex:t&&!r?2:1,gap:4,horizontal:!0,justify:"space-between",children:[(0,o.FD)(u.Flexbox,{gap:2,children:[(0,o.Y)("div",{className:$.count,children:(0,f.U2)(e.count)}),(0,o.Y)("div",{className:$.title,children:e.title})]}),t&&(0,o.Y)(n.A,{title:P("dataStatistics.today"),children:(0,o.Y)(i.A,{count:`+${e.countToady}`,style:{background:F.colorSuccess,color:F.colorSuccessBg,cursor:"pointer"}})})]},e.key)}return(0,o.FD)(u.Flexbox,{className:$.card,flex:1,gap:2,children:[(0,o.Y)(u.Flexbox,{horizontal:!0,children:(0,o.Y)("div",{className:$.count,children:(0,f.U2)(e.count)})}),(0,o.Y)("div",{className:$.title,children:e.title})]},e.key)})})})},37844:(e,t,r)=>{r.d(t,{remoteServerService:()=>n});var o=r(14343);class a{constructor(){this.getRemoteServerConfig=async()=>(0,o.dispatch)("getRemoteServerConfig"),this.setRemoteServerConfig=async e=>(0,o.dispatch)("setRemoteServerConfig",e),this.clearRemoteServerConfig=async()=>(0,o.dispatch)("clearRemoteServerConfig"),this.requestAuthorization=async e=>(0,o.dispatch)("requestAuthorization",e),this.requestMarketAuthorization=async e=>(0,o.dispatch)("requestMarketAuthorization",e)}}let n=new a},38858:(e,t,r)=>{r.d(t,{GJ:()=>s,ZA:()=>c,cr:()=>l,pE:()=>n,tU:()=>i});var o=r(83034),a=r(27697);function n(e,t,r={}){let[i,l]=(0,a.ok)(),{clearOnDefault:s=!1,defaultValue:c=t?.defaultValue,history:d="push",throttleMs:p=0}=r,u=(0,o.useRef)(null),h=(0,o.useRef)(0),g=(0,o.useRef)(i),m=(0,o.useRef)(t),x=(0,o.useRef)(c),b=(0,o.useRef)(s),f=(0,o.useRef)(d);(0,o.useEffect)(()=>{g.current=i,m.current=t,x.current=c,b.current=s,f.current=d});let y=t.parse(i.get(e))??c,w=(0,o.useCallback)(t=>{let r=g.current,o=m.current,a=x.current,n=b.current,i=f.current,s=o.parse(r.get(e))??a,c="function"==typeof t?t(s):t,d=()=>{l(t=>{let r=new URLSearchParams(t);console.log("updateParams",r.toString());let i=o.serialize(c);return n&&void 0!==a&&i===o.serialize(a)||null==i?r.delete(e):r.set(e,i),console.log("updateParams",r.toString()),r},{replace:"replace"===i})};if(p>0){let e=Date.now(),t=e-h.current;t>=p?(h.current=e,d(),u.current&&(clearTimeout(u.current),u.current=null)):(u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{h.current=Date.now(),d(),u.current=null},p-t))}else d()},[e,l,p]);return(0,o.useEffect)(()=>()=>{u.current&&clearTimeout(u.current)},[]),[y,w]}let i={parse:e=>e,serialize:e=>e,withDefault:e=>({defaultValue:e,parse:t=>t??e,serialize:e=>e})},l={parse:e=>null===e?null:"true"===e||"1"===e,serialize:e=>null===e?null:e?"true":"false",withDefault:e=>({defaultValue:e,parse:t=>null===t?e:"true"===t||"1"===t,serialize:e=>e?"true":"false"})},s={parse:e=>{if(null===e)return null;let t=Number.parseInt(e,10);return Number.isNaN(t)?null:t},serialize:e=>null===e?null:e.toString(),withDefault:e=>({defaultValue:e,parse:t=>{if(null===t)return e;let r=Number.parseInt(t,10);return Number.isNaN(r)?e:r},serialize:e=>e.toString()})};function c(e,t){let r,o={};return t?(r="function"==typeof t.parse?t:i,o=t):r=i,n(e,r,o)}},38991:(e,t,r)=>{r.d(t,{W:()=>n});var o=r(83034),a=r(38858);let n=()=>{let[e,t]=(0,a.pE)("pinned",a.cr.withDefault(!1),{clearOnDefault:!0});return[e,(0,o.useMemo)(()=>({pinAgent:()=>t(!0),setIsPinned:t,togglePinAgent:()=>t(e=>!e),unpinAgent:()=>t(!1)}),[t])]}},39472:(e,t,r)=>{r.d(t,{o:()=>i});var o=r(5930),a=r(62326),n=r(12467);let i=()=>{let[e,t]=(0,o.o)(e=>[e.hasNewVersion,e.useCheckLatestVersion]),{enableCheckUpdates:r}=(0,a.wo)(n.E);return t(r),e}},46322:(e,t,r)=>{r.d(t,{Ak:()=>n,uR:()=>a.A});var o=r(15010),a=r(54483);let n=((e=8)=>(0,o.d)("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",e))()},47581:(e,t,r)=>{r.d(t,{N:()=>o});let o=e=>{let t;if("string"==typeof e){try{t=JSON.parse(e)}catch{return}return t}}},47858:(e,t,r)=>{r.d(t,{Fr:()=>u,L6:()=>d,Mu:()=>p,U0:()=>c,X5:()=>s,uo:()=>l});var o=r(41827),a=r.n(o),n=r(12020);let i=()=>{if(n.i)return new(a())("Node");let e=navigator.userAgent;return new(a())(e)},l=()=>i().getOS().name,s=()=>i().getResult().browser.name;s(),i().getDevice().type,i().getOS().name;let c=()=>"Mac OS"===l(),d=()=>!n.i&&(window.matchMedia("(--arc-palette-focus: var(--arc-background-simple-color))").matches||!!("arc"in window||"ArcControl"in window||"ARCControl"in window)||!!getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title")),p=()=>!n.i&&(window.matchMedia("(display-mode: standalone)").matches||"standalone"in navigator&&!0===navigator.standalone),u=()=>{if(n.i)return!1;let e=navigator.userAgent.toLowerCase();if(navigator.maxTouchPoints||!/macintosh/.test(e))return!1;let t=/version\/(\d{2})\./.exec(e);if(!t||!t[1]||!(parseInt(t[1])>=17))return!1;try{let e=document.createElement("audio").canPlayType('audio/wav; codecs="1"'),t=new OffscreenCanvas(1,1).getContext("webgl");return!!e&&!!t}catch{return!1}}},48349:(e,t,r)=>{r.d(t,{T:()=>i});var o=r(2644),a=r.n(o);let n=30,i=(e,t,r=n)=>{if(void 0===t){let t=new Date(0).toUTCString();document.cookie=`${e}=; expires=${t}; path=/;`}else{let o="string"==typeof r?r:a()().add(r,"day").toDate().toUTCString();document.cookie=`${e}=${t};expires=${o};path=/;`}}},50759:(e,t,r)=>{r.d(t,{N:()=>n});let o="__LOBE_GLOBAL_AGENT_CONTEXT__";class a{get context(){return window[o]||(window[o]={}),window[o]}set context(e){window[o]=e}getContext(){return this.context}updateContext(e){this.context={...this.context,...e}}setContext(e){this.context=e}fillTemplate(e){let t=this.getContext();return e?e.replaceAll(/{{([^}]+)}}/g,(e,r)=>{let o=r.trim();return void 0!==t[o]?String(t[o]):"[N/A]"}):""}}let n=new a},51567:(e,t,r)=>{r.d(t,{_G:()=>n,oS:()=>l,oy:()=>i});var o=r(50718),a=r(78397);let n=()=>(0,o.usePathname)().split("/").find(Boolean),i=()=>{let e=(0,o.useSearchParams)().get("active");return e||a.mm.Common},l=()=>{let e=(0,o.usePathname)().split("/").at(-1);return"profile"===e?a.yj.Profile:e}},51989:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});let o={addUserMessage:{desc:"将当前输入内容添加为用户消息，但不触发生成",title:"添加一条用户消息"},clearCurrentMessages:{desc:"清空当前会话的消息和上传的文件",title:"清空会话消息"},commandPalette:{desc:"打开全局命令面板快速访问功能",title:"命令面板"},deleteAndRegenerateMessage:{desc:"删除最后一条消息并重新生成",title:"删除并重新生成"},deleteLastMessage:{desc:"删除最后一条消息",title:"删除最后一条消息"},desktop:{openSettings:{desc:"打开应用设置页面",title:"应用设置"},showApp:{desc:"全局快捷键显示或隐藏主窗口",title:"显示/隐藏主窗口"}},editMessage:{desc:"通过按住 Alt 并双击消息进入编辑模式",title:"编辑消息"},navigateToChat:{desc:"切换至会话标签并进入随便聊聊",title:"切换至默认会话"},openChatSettings:{desc:"查看和修改当前会话的设置",title:"打开会话设置"},openHotkeyHelper:{desc:"查看所有快捷键的使用说明",title:"打开快捷键帮助"},regenerateMessage:{desc:"重新生成最后一条消息",title:"重新生成消息"},saveTopic:{desc:"保存当前话题并打开新话题",title:"开启新话题"},search:{desc:"唤起当前页面主要搜索框",title:"搜索"},showApp:{desc:"快速唤起应用主窗口",title:"显示主窗口"},switchAgent:{desc:"通过按住 Ctrl 加数字 0~9 切换固定在侧边栏的助手",title:"快捷切换助手"},toggleLeftPanel:{desc:"显示或隐藏左侧助手面板",title:"显示/隐藏助手面板"},toggleRightPanel:{desc:"显示或隐藏右侧话题面板",title:"显示/隐藏话题面板"},toggleZenMode:{desc:"专注模式下，只显示当前会话，隐藏其他 UI",title:"切换专注模式"}}},52702:(e,t,r)=>{r.d(t,{A:()=>g});var o=r(28802),a=r(8756),n=r(11577),i=r(51997),l=r.n(i),s=r(83034),c=r(80457),d=r(98724),p=r(45628),u=r(64861);let h=(0,n.rU)(({token:e,css:t})=>({logoLink:t`
    line-height: 1;
    color: inherit;

    &:hover {
      color: ${e.colorLink};
    }
  `})),g=(0,s.memo)(({style:e,...t})=>{let{styles:r,theme:n}=h();return(0,o.FD)(c.Flexbox,{align:"center",dir:"ltr",flex:"none",gap:4,horizontal:!0,style:{color:n.colorTextDescription,fontSize:12,...e},...t,children:[(0,o.Y)("span",{children:"Powered by"}),u.Eb?(0,o.Y)("span",{children:d.dS}):(0,o.Y)(l(),{className:r.logoLink,href:`https://lobehub.com?utm_source=${p.VU}&utm_content=brand_watermark`,target:"_blank",children:(0,o.Y)(a.default,{size:20,type:"text"})})]})})},53613:(e,t,r)=>{r.d(t,{Xi:()=>l,dN:()=>n,n4:()=>s});var o=r(20434);let a=o.KC([o.zM(),o.YO(o.Yj())]),n=o.Ik({check_updates:a.optional(),pin_list:a.optional(),provider_settings:a.optional(),openai_api_key:a.optional(),openai_proxy_url:a.optional(),api_key_manage:a.optional(),create_session:a.optional(),edit_agent:a.optional(),plugins:a.optional(),dalle:a.optional(),ai_image:a.optional(),speech_to_text:a.optional(),token_counter:a.optional(),welcome_suggest:a.optional(),changelog:a.optional(),market:a.optional(),knowledge_base:a.optional(),rag_eval:a.optional(),cloud_promotion:a.optional(),group_chat:a.optional(),commercial_hide_github:a.optional(),commercial_hide_docs:a.optional()}),i=(e,t)=>"boolean"==typeof e?e:Array.isArray(e)?!!t&&e.includes(t):void 0,l={pin_list:!1,provider_settings:!0,openai_api_key:!0,openai_proxy_url:!0,api_key_manage:!1,create_session:!0,edit_agent:!0,plugins:!0,dalle:!0,ai_image:!0,check_updates:!0,welcome_suggest:!0,token_counter:!0,knowledge_base:!0,rag_eval:!1,cloud_promotion:!1,market:!0,speech_to_text:!0,changelog:!0,group_chat:!1,commercial_hide_github:!1,commercial_hide_docs:!1},s=(e,t)=>({isAgentEditable:i(e.edit_agent,t),showCreateSession:i(e.create_session,t),enableGroupChat:i(e.group_chat,t),showProvider:i(e.provider_settings,t),showPinList:i(e.pin_list,t),showOpenAIApiKey:i(e.openai_api_key,t),showOpenAIProxyUrl:i(e.openai_proxy_url,t),showApiKeyManage:i(e.api_key_manage,t),enablePlugins:i(e.plugins,t),showDalle:i(e.dalle,t),showAiImage:i(e.ai_image,t),showChangelog:i(e.changelog,t),enableCheckUpdates:i(e.check_updates,t),showWelcomeSuggest:i(e.welcome_suggest,t),enableKnowledgeBase:i(e.knowledge_base,t),enableRAGEval:i(e.rag_eval,t),showCloudPromotion:i(e.cloud_promotion,t),showMarket:i(e.market,t),enableSTT:i(e.speech_to_text,t),hideGitHub:i(e.commercial_hide_github,t),hideDocs:i(e.commercial_hide_docs,t)})},55392:(e,t,r)=>{r.d(t,{D:()=>n});var o=r(80286),a=r(49262);function n(e){let t=Date.now(),r=a.Ay.xoroshiro128plus(t),n=new Set;for(;n.size<e;){let[e,t]=a.Ay.uniformIntDistribution(0,o.MAX_SEED,r);r=t,n.add(e)}return Array.from(n)}},56105:(e,t,r)=>{r.d(t,{C:()=>c});var o=r(83034),a=r(27697),n=r(62894),i=r(17068),l=r(62326),s=r(64811);let c=()=>{let e=(0,s.B)(e=>e.switchSession),t=(0,i.L)(e=>e.togglePortal),r=(0,l.wo)(e=>e.isMobile),c=(0,n.j)(),d=(0,a.zy)().pathname;return(0,o.useCallback)(o=>{e(o),t(!1);let a="/chat";(r||d!==a)&&setTimeout(()=>{c.push(a,{query:{session:o,showMobileWorkspace:"true"}})},50)},[r,d,e,t,c])}},56646:(e,t,r)=>{r.d(t,{A:()=>I});var o=r(28802),a=r(11577),n=r(83034),i=r(80457),l=r(3136),s=r(51997),c=r.n(s),d=r(59121),p=r(4001),u=r(45628),h=r(64861),g=r(12389),m=r(24080),x=r(82753),b=r(23942),f=r(39029),y=r(9392),w=r(10376),S=r(20480),v=r(58528);let k={[v.l.Free]:{icon:x.A,theme:{background:void 0,color:void 0}},[v.l.Hobby]:{icon:b.A,theme:{background:"linear-gradient(45deg, #21B2EE, #2271ED)",color:"#E5F8FF"}},[v.l.Starter]:{icon:f.A,theme:{background:"linear-gradient(45deg, #C57948, #803718)",color:"#FFC385"}},[v.l.Premium]:{icon:y.A,theme:{background:"linear-gradient(45deg, #A5B4C2, #606E7B)",color:"#FCFDFF"}},[v.l.Ultimate]:{icon:w.A,theme:{background:"linear-gradient(45deg, #F7A82F, #BB7227)",color:"#FCFA6E"}}},A=(0,a.rU)(({css:e,token:t})=>({icon:e`
    flex: none;
    border-radius: ${t.borderRadiusLG}px;
    box-shadow: 0 0 0 1px ${t.colorFillSecondary};
  `})),Y=(0,n.memo)(({type:e="icon",plan:t,size:r=36,mono:a,style:n,className:l,onClick:s})=>{let{icon:c,theme:p}=k[t],{cx:u,styles:h,theme:x}=A(),{t:b}=(0,d.Bd)("subscription"),f=t===v.l.Free;if("tag"===e)return(0,o.Y)(m.A,{bordered:!1,className:l,onClick:s,style:{...p||{background:x.colorFillSecondary,color:x.colorText},border:"none",borderRadius:12,cursor:"pointer",flex:"none",margin:0,...n},children:b(`plans.plan.${t}.title`)});let y=(0,o.Y)(S.default,{className:u(h.icon,l),height:r,onClick:s,style:a?n:{...p,border:f?void 0:`2px solid ${p.color}`,...n},width:r,children:(0,o.Y)(g.default,{color:a?void 0:p.color,icon:c,size:r/2})});return"combine"===e?(0,o.FD)(i.Flexbox,{align:"center",gap:8,horizontal:!0,children:[y,(0,o.Y)("span",{children:b(`plans.plan.${t}.title`)})]}):y}),C=(0,n.memo)(({type:e="preview"})=>{let{t}=(0,d.Bd)("common"),r=(0,a.DP)();if("preview"===e)return(0,o.Y)(l.A,{bordered:!1,style:{background:r.colorFill,borderRadius:12,cursor:"pointer"},children:t("userPanel.community")});let n=e===v.l.Free;return(0,o.Y)(c(),{href:(0,p.A)(h.xl?u.Uo:"/",n?"/subscription/plans":"/subscription/usage"),style:{cursor:"pointer"},target:h.xl?"_blank":void 0,children:(0,o.Y)(Y,{plan:e,size:22,type:"tag"})})});var $=r(38759),F=r(61520),P=r(83395);let D=(0,a.rU)(({css:e,token:t})=>({nickname:e`
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
  `,username:e`
    line-height: 1;
    color: ${t.colorTextDescription};
  `})),I=(0,n.memo)(({avatarProps:e,onClick:t,...r})=>{let{styles:a,theme:n}=D(),l=(0,$.k)(F.P.isLogin),[s,c,d]=(0,$.k)(e=>[F.f.nickName(e),F.f.username(e),e.subscriptionPlan]);return(0,o.FD)(i.Flexbox,{align:"center",gap:12,horizontal:!0,justify:"space-between",paddingBlock:12,paddingInline:12,...r,children:[(0,o.FD)(i.Flexbox,{align:"center",gap:12,horizontal:!0,onClick:t,children:[(0,o.Y)(P.A,{background:n.colorFill,size:48,...e}),(0,o.FD)(i.Flexbox,{flex:1,gap:6,children:[(0,o.Y)("div",{className:a.nickname,children:s}),(0,o.Y)("div",{className:a.username,children:c})]})]}),l&&(0,o.Y)(C,{type:d})]})})},60062:(e,t,r)=>{r.d(t,{p$:()=>a});var o=r(11577);let a={draggable:(0,o.cx)((0,o.AH)`
  -webkit-app-region: drag;
`),nodrag:(0,o.cx)((0,o.AH)`
  -webkit-app-region: no-drag;
`)}},60317:(e,t,r)=>{r.d(t,{jv:()=>u.j,xh:()=>i,d3:()=>a,$3:()=>l.$3,os:()=>h.os,uE:()=>h.uE,H1:()=>h.H1,Om:()=>h.Om,hs:()=>s.h,EN:()=>d,HL:()=>m.HL,h1:()=>p.h,Ak:()=>x.Ak,N8:()=>g.N,TV:()=>n.T,uR:()=>x.uR});var o=r(30791).hp;let a=(e,t)=>{var r;return r=`${e}:${t}`,"function"==typeof btoa?btoa(r):o.from(r,"utf8").toString("base64")};var n=r(48349);let i=e=>/[\u3400-\u4DBF\u4E00-\u9FA5\uF900-\uFAFF]/.test(e);var l=r(9402),s=r(25040),c=r(47858);let d=e=>(0,c.U0)()?e.metaKey:e.ctrlKey;var p=r(67095);r(55392);var u=r(12890),h=r(63485),g=r(47581),m=r(19742),x=r(46322)},62326:(e,t,r)=>{let o;r.d(t,{Kq:()=>x,bT:()=>g,wo:()=>m});var a=r(2773),n=r(50786),i=r(23993),l=r(53613),s=r(41734),c=r(67095),d=r(46265),p=r(96153);let u={featureFlags:(0,l.n4)(l.Xi),segmentVariants:"",serverConfig:{aiProvider:{},telemetry:{}}},h=(0,s.t)("serverConfig"),g=e=>{if(!o){let t;o=(0,i.h)()(h((t=e||{},(...e)=>({...(0,c.h)(u,t),...(e=>({useInitServerConfig:()=>(0,d.Ju)("FETCH_SERVER_CONFIG",()=>p.v.getGlobalConfig(),{onSuccess:t=>{e({featureFlags:t.serverFeatureFlags,serverConfig:t.serverConfig},!1,"initServerConfig")}})}))(...e)}))),n.x),window.global_serverConfigStore=o}return o},{useStore:m,Provider:x}=(0,a.q)()},62340:(e,t,r)=>{r.d(t,{mh:()=>o,rw:()=>n,sM:()=>a});let o="LOBE_THEME_APPEARANCE",a="LOBE_THEME_PRIMARY_COLOR",n="LOBE_THEME_NEUTRAL_COLOR"},62894:(e,t,r)=>{r.d(t,{j:()=>s});var o=r(89196),a=r(83034),n=r(27697),i=r(12020);let l=({hash:e,replace:t,url:r,prevQuery:a={},query:n={}})=>{let l=o.A.stringifyUrl({query:t?n:{...a,...n},url:r},{skipNull:!0});return!i.i&&e&&(l=[l,e||location?.hash?.slice(1)].filter(Boolean).join("#")),l},s=()=>{let e=(0,n.Zp)();return(0,a.useMemo)(()=>({push:(t,r={})=>e(l({prevQuery:o.A.parse(window.location.search),url:t,...r})),replace:(t,r={})=>e(l({prevQuery:o.A.parse(window.location.search),url:t,...r}),{replace:!0})}),[e])}},63485:(e,t,r)=>{r.d(t,{EO:()=>l,H1:()=>n,Om:()=>c,Px:()=>i,os:()=>s,uE:()=>a});let o=(e,t)=>{if(!e?.units||!t)return;let r=e.units.find(e=>e.name===t);if(r)switch(r.strategy){case"fixed":return r.rate;case"tiered":return r.tiers?.[0]?.rate;case"lookup":return Object.values(r.lookup?.prices||{})[0];default:return}};function a(e){return o(e,"textInput")}function n(e){return o(e,"textOutput")}function i(e){return o(e,"audioInput")}function l(e){return o(e,"audioOutput")}function s(e){return o(e,"textInput_cacheRead")}function c(e){return o(e,"textInput_cacheWrite")}},64464:(e,t,r)=>{r.d(t,{electronSystemService:()=>n});var o=r(14343);class a{async getAppState(){return(0,o.dispatch)("getDesktopAppState")}async closeWindow(){return(0,o.dispatch)("closeWindow")}async maximizeWindow(){return(0,o.dispatch)("maximizeWindow")}async minimizeWindow(){return(0,o.dispatch)("minimizeWindow")}constructor(){this.showContextMenu=async(e,t)=>(0,o.dispatch)("showContextMenu",{data:t,type:e})}}let n=new a},64694:(e,t,r)=>{r.d(t,{R:()=>v,p:()=>S});var o=r(50786),a=r(23993),n=r(41734),i=r(46265),l=r(64464),s=r(50759),c=r(67095),d=r(31021),p=r.n(d),u=r(64911),h=r(85366),g=r(90396);let m="electron:getProxySettings",x="electron:getDesktopHotkeys";var b=r(37844);let f={appState:{},dataSyncConfig:{storageMode:"local"},desktopHotkeys:{},isAppStateInit:!1,isConnectingServer:!1,isDesktopHotkeysInit:!1,isInitRemoteServerConfig:!1,isSyncActive:!1,proxySettings:{enableProxy:!1,proxyBypass:"localhost, 127.0.0.1, ::1",proxyPort:"",proxyRequireAuth:!1,proxyServer:"",proxyType:"http"}},y="electron:getRemoteServerConfig",w=(0,n.t)("electron"),S=(0,a.h)()(w((...e)=>({...f,...((e,t)=>({connectRemoteServer:async r=>{if("selfHost"!==r.storageMode||r.remoteServerUrl){e({isConnectingServer:!0});try{let o=await b.remoteServerService.getRemoteServerConfig();p()(o,r)||await b.remoteServerService.setRemoteServerConfig({...r,active:!1});let a=await b.remoteServerService.requestAuthorization(r);a.success||(console.error("请求授权失败:",a.error),e({remoteServerSyncError:{message:a.error,type:"AUTH_ERROR"}})),await t().refreshServerConfig()}catch(t){console.error("远程服务器配置出错:",t),e({remoteServerSyncError:{message:t.message,type:"CONFIG_ERROR"}})}finally{e({isConnectingServer:!1})}}},disconnectRemoteServer:async()=>{e({isConnectingServer:!1});try{await b.remoteServerService.setRemoteServerConfig({active:!1,storageMode:"local"}),e({dataSyncConfig:f.dataSyncConfig}),await t().refreshServerConfig()}catch(t){console.error("断开连接失败:",t),e({remoteServerSyncError:{message:t.message,type:"DISCONNECT_ERROR"}})}finally{e({isConnectingServer:!1})}},refreshServerConfig:async()=>{await (0,u.j)(y)},refreshUserData:async()=>{let{getSessionStoreState:e}=await Promise.all([r.e(30173),r.e(6312),r.e(75113),r.e(83663),r.e(85614),r.e(71828),r.e(59440),r.e(96987),r.e(83897),r.e(16748),r.e(72389),r.e(31871),r.e(14946),r.e(64811),r.e(69373)]).then(r.bind(r,55442)),{getChatStoreState:t}=await Promise.all([r.e(30173),r.e(6312),r.e(75113),r.e(83663),r.e(85614),r.e(71828),r.e(59440),r.e(96987),r.e(83897),r.e(16748),r.e(72389),r.e(31871),r.e(14946),r.e(64811),r.e(48501)]).then(r.bind(r,28410)),{getUserStoreState:o}=await Promise.all([r.e(6312),r.e(9467)]).then(r.bind(r,9467));await e().refreshSessions(),await t().refreshMessages(),await t().refreshTopic(),await o().refreshUserState()},useDataSyncConfig:()=>(0,h.Ay)(y,async()=>{try{return await b.remoteServerService.getRemoteServerConfig()}catch(e){throw console.error("获取远程服务器配置失败:",e),e}},{onSuccess:r=>{p()(r,t().dataSyncConfig)||t().refreshUserData(),e({dataSyncConfig:r,isInitRemoteServerConfig:!0})}})}))(...e),...((e,t)=>({updateElectronAppState:r=>{let o=t().appState;e({appState:(0,c.h)(o,r)})},useInitElectronAppState:()=>(0,i.Ju)("initElectronAppState",async()=>l.electronSystemService.getAppState(),{onSuccess:t=>{e({appState:t,isAppStateInit:!0},!1,"initElectronAppState"),s.N.updateContext({desktopPath:t.userPath.desktop,documentsPath:t.userPath.documents,downloadsPath:t.userPath.downloads,homePath:t.userPath.home,musicPath:t.userPath.music,picturesPath:t.userPath.pictures,userDataPath:t.userPath.userData,videosPath:t.userPath.videos})}})}))(...e),...((e,t)=>({refreshDesktopHotkeys:async()=>{await (0,u.j)(x)},refreshProxySettings:async()=>{await (0,u.j)(m)},setProxySettings:async e=>{try{await g.x.setSettings(e),await t().refreshProxySettings()}catch(e){console.error("代理设置更新失败:",e)}},updateDesktopHotkey:async(e,r)=>{try{let o=await g.x.updateDesktopHotkey(e,r);return o.success&&await t().refreshDesktopHotkeys(),o}catch(e){return console.error("桌面热键更新失败:",e),{errorType:"UNKNOWN",success:!1}}},useFetchDesktopHotkeys:()=>(0,h.Ay)(x,async()=>g.x.getDesktopHotkeys(),{onSuccess:r=>{p()(r,t().desktopHotkeys)||e({desktopHotkeys:r,isDesktopHotkeysInit:!0})}}),useGetProxySettings:()=>(0,h.Ay)(m,async()=>g.x.getProxySettings(),{onSuccess:r=>{p()(r,t().proxySettings)||e({proxySettings:r})}})}))(...e)})),o.x),v=()=>S.getState()},72242:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(28802),a=r(73166),n=r(15447),i=r(83034),l=r(59121),s=r(80457),c=r(56646);let d=(0,i.memo)(({onClick:e})=>{let{t}=(0,l.Bd)("auth"),{analytics:r}=(0,a.st)();return(0,o.FD)(o.FK,{children:[(0,o.Y)(c.A,{}),(0,o.Y)(s.Flexbox,{paddingBlock:12,paddingInline:16,width:"100%",children:(0,o.Y)(n.A,{block:!0,onClick:()=>{r?.track({name:"login_or_signup_clicked",properties:{spm:"homepage.login_or_signup.click"}}),e()},type:"primary",children:t("loginOrSignup")})})]})})},78183:(e,t,r)=>{r.d(t,{A:()=>eo});var o=r(28802),a=r(22309),n=r(49615),i=r(11577),l=r(74672),s=r(83034),c=r(59121),d=r(20480),p=r(29703),u=r(12389),h=r(3779),g=r(80457);let m=(0,i.rU)(({css:e,token:t,prefixCls:r,isDarkMode:o})=>({modalTitle:e`
    &.${r}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          ${(0,h.B3)(t.colorBgElevated,0)},
          ${t.colorBgContainer} ${o?"80":"140"}px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${r}-modal-title {
      font-size: 24px;
    }
  `})),x=(0,s.memo)(({icon:e,onOpenChange:t,title:r,open:a,children:n,width:i=550,height:l})=>{let{styles:s}=m();return(0,o.Y)(p.A,{afterOpenChange:t,centered:!0,classNames:{header:s.modalTitle},closable:!1,footer:null,height:l,open:a,title:(0,o.FD)(g.Flexbox,{gap:8,horizontal:!0,children:[(0,o.Y)(u.default,{icon:e}),r]}),width:i,children:n})});var b=r(77605),f=r(87050),y=r(38759),w=r(96871),S=r(46322);class v{constructor(){this.importSettings=async e=>{await y.k.getState().importAppSettings(e)},this.importData=async(e,t)=>{let r=e=>{t?.onStageChange?.(w.I.Error),t?.onError?.({code:e.data.code,httpStatus:e.data.httpStatus,message:e.message,path:e.data.path})};if((e.messages?.length||0)+(e.sessionGroups?.length||0)+(e.sessions?.length||0)+(e.topics?.length||0)<500){t?.onStageChange?.(w.I.Importing);let o=Date.now();try{let r=await b.du.importer.importByPost.mutate({data:e}),a=Date.now()-o;t?.onStageChange?.(w.I.Success),t?.onSuccess?.(r.results,a)}catch(e){r(e)}return}await this.uploadData(e,{callbacks:t,handleError:r})},this.importPgData=async(e,t)=>{let{callbacks:r}=t||{},o=e=>{r?.onStageChange?.(w.I.Error),r?.onError?.({code:e.data.code,httpStatus:e.data.httpStatus,message:e.message,path:e.data.path})};if(500>Object.values(e.data).map(e=>e.length).reduce((e,t)=>e+t,0)){r?.onStageChange?.(w.I.Importing);let t=Date.now();try{let o=await b.du.importer.importPgByPost.mutate(e),a=Date.now()-t;r?.onStageChange?.(w.I.Success),r?.onSuccess?.(o.results,a)}catch(e){o(e)}return}await this.uploadData(e,{callbacks:r,handleError:o})},this.uploadData=async(e,{callbacks:t,handleError:r})=>{let o,a=`${(0,S.uR)()}.json`;try{t?.onStageChange?.(w.I.Uploading),o=(await f.z.uploadDataToS3(e,{filename:a,onProgress:(e,r)=>{t?.onFileUploading?.(r)},pathname:`import_config/${a}`})).data.path,console.log(o)}catch{throw Error("Upload Error")}t?.onStageChange?.(w.I.Importing);let n=Date.now();try{let e=await b.du.importer.importByFile.mutate({pathname:o}),r=Date.now()-n;t?.onStageChange?.(w.I.Success),t?.onSuccess?.(e.results,r)}catch(e){r(e)}}}}let k=new v;var A=r(17068),Y=r(64811),C=r(80122),$=r(91888),F=r(15447),P=r(38141),D=r(74567),I=r(51997),E=r.n(I),N=r(19913),M=r(45628),T=r(89196),_=r(4001);class B{constructor(){this.submitDBV1UpgradeError=(e,t)=>{let r=["```json",JSON.stringify(t,null,2),"```"].join("\n"),o=t?.message||"",a=T.A.stringifyUrl({query:{body:r,labels:"❌ Database Migration Error",title:`[Migration Error V${e}] ${o}`},url:(0,_.A)(M.U0,"/issues/new")});window.open(a,"_blank")},this.submitImportError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join("\n"),r=e?.message||"",o=T.A.stringifyUrl({query:{body:t,labels:"❌ Import Config Error",title:`[Config Import Error] ${r}`},url:(0,_.A)(M.U0,"/issues/new")});window.open(o,"_blank")},this.submitPgliteInitError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join("\n"),r=e?.message||"",o=T.A.stringifyUrl({query:{body:t,labels:"❌ Database Init Error",title:`[Database Init Error] ${r}`},url:(0,_.A)(M.U0,"/issues/new")});window.open(o,"_blank")}}}let z=new B,L=(0,s.memo)(({error:e,onClick:t})=>{let{t:r}=(0,c.Bd)("common");return(0,o.Y)(P.Ay,{extra:(0,o.FD)(g.Flexbox,{gap:12,style:{textAlign:"start"},children:[(0,o.Y)(C.A,{extra:(0,o.Y)($.A,{actionIconSize:"small",language:"json",children:JSON.stringify(e,null,2)}),message:e?.message,style:{flex:1},type:"error"}),(0,o.Y)(F.A,{onClick:t,children:r("close")})]}),icon:(0,o.Y)(u.default,{icon:D.A}),status:"error",style:{paddingBlock:24,width:450},subTitle:(0,o.Y)(N.Ay,{children:(0,o.FD)(c.x6,{i18nKey:"importModal.error.desc",ns:"common",children:["非常抱歉，数据库升级过程发生异常。请重试升级，或",(0,o.Y)(E(),{"aria-label":"issue",href:M.ve,onClick:t=>{t.preventDefault(),z.submitImportError(e)},target:"_blank",children:"提交问题"}),"我们将会第一时间帮你排查问题。"]})}),title:r("importModal.error.title")})});var R=r(97721),U=r(9402);let O=(0,i.rU)(({css:e,token:t})=>({loader:e`
      transform: translateX(-${56}px);

      aspect-ratio: 1;
      width: 6px;
      border-radius: 50%;

      color: ${t.colorPrimary};

      box-shadow:
        ${28}px -${28}px 0 0,
        ${56}px -${28}px 0 0,
        ${84}px -${28}px 0 0,
        ${28}px 0 0 5px,
        ${56}px 0 0 5px,
        ${84}px 0 0 5px,
        ${28}px ${28}px 0 0,
        ${56}px ${28}px 0 0,
        ${84}px ${28}px 0 0;

      animation: loading 2s infinite linear;

      @keyframes loading {
        12.5% {
          box-shadow:
            ${28}px -${28}px 0 0,
            ${56}px -${28}px 0 0,
            ${84}px -${28}px 0 5px,
            ${28}px 0 0 5px,
            ${56}px 0 0 0,
            ${84}px 0 0 5px,
            ${28}px ${28}px 0 0,
            ${56}px ${28}px 0 0,
            ${84}px ${28}px 0 0;
        }

        25% {
          box-shadow:
            ${28}px -${28}px 0 5px,
            ${56}px -${28}px 0 0,
            ${84}px -${28}px 0 5px,
            ${28}px 0 0 0,
            ${56}px 0 0 0,
            ${84}px 0 0 0,
            ${28}px ${28}px 0 0,
            ${56}px ${28}px 0 5px,
            ${84}px ${28}px 0 0;
        }

        50% {
          box-shadow:
            ${28}px -${28}px 0 5px,
            ${56}px -${28}px 0 5px,
            ${84}px -${28}px 0 0,
            ${28}px 0 0 0,
            ${56}px 0 0 0,
            ${84}px 0 0 0,
            ${28}px ${28}px 0 0,
            ${56}px ${28}px 0 0,
            ${84}px ${28}px 0 5px;
        }

        62.5% {
          box-shadow:
            ${28}px -${28}px 0 0,
            ${56}px -${28}px 0 0,
            ${84}px -${28}px 0 0,
            ${28}px 0 0 5px,
            ${56}px 0 0 0,
            ${84}px 0 0 0,
            ${28}px ${28}px 0 0,
            ${56}px ${28}px 0 5px,
            ${84}px ${28}px 0 5px;
        }

        75% {
          box-shadow:
            ${28}px -${28}px 0 0,
            ${56}px -${28}px 0 5px,
            ${84}px -${28}px 0 0,
            ${28}px 0 0 0,
            ${56}px 0 0 0,
            ${84}px 0 0 5px,
            ${28}px ${28}px 0 0,
            ${56}px ${28}px 0 0,
            ${84}px ${28}px 0 5px;
        }

        87.5% {
          box-shadow:
            ${28}px -${28}px 0 0,
            ${56}px -${28}px 0 5px,
            ${84}px -${28}px 0 0,
            ${28}px 0 0 0,
            ${56}px 0 0 5px,
            ${84}px 0 0 0,
            ${28}px ${28}px 0 5px,
            ${56}px ${28}px 0 0,
            ${84}px ${28}px 0 0;
        }
      }
    `})),H=(0,s.memo)(()=>{let{styles:e}=O();return(0,o.Y)(d.default,{style:{height:80},children:(0,o.Y)("div",{className:e.loader})})}),G=(0,s.memo)(({progress:e=0,speed:t=0,restTime:r})=>{let{t:a}=(0,c.Bd)("common"),n=(0,i.DP)();return(0,o.FD)(o.FK,{children:[(0,o.Y)(H,{}),(0,o.FD)(g.Flexbox,{align:"center",gap:8,width:"100%",children:[a("importModal.uploading.desc"),(0,o.FD)(g.Flexbox,{flex:1,gap:8,width:"100%",children:[(0,o.Y)(R.A,{percent:e,showInfo:!0,strokeColor:n.colorSuccess,trailColor:n.colorSuccessBg}),(0,o.FD)(g.Flexbox,{distribution:"space-between",horizontal:!0,style:{color:n.colorTextDescription,fontSize:12},children:[(0,o.FD)("span",{children:[a("importModal.uploading.restTime"),": ",r?(0,U.fU)(r):"-"]}),(0,o.FD)("span",{children:[a("importModal.uploading.speed"),": ",(0,U.DB)(1024*t)]})]})]})]})]})});var W=r(75431),K=r(51053),j=r(40697);let V=(0,i.rU)(({token:e,css:t})=>({duplicateAlert:t`
      margin-block-start: ${e.marginMD}px;
      padding: ${e.paddingMD}px;
      border: 1px solid ${e.colorWarningBorder};
      border-radius: ${e.borderRadiusLG}px;

      background-color: ${e.colorWarningBg};
    `,duplicateDescription:t`
      margin-block-start: ${e.marginXS}px;
      font-size: ${e.fontSizeSM}px;
      color: ${e.colorTextSecondary};
    `,duplicateOptions:t`
      margin-block-start: ${e.marginSM}px;
    `,duplicateTag:t`
      border-color: ${e.colorWarningBorder};
      color: ${e.colorWarning};
      background-color: ${e.colorWarningBg};
    `,hash:t`
      font-family: ${e.fontFamilyCode};
      font-size: 12px;
      color: ${e.colorTextTertiary};
    `,infoIcon:t`
      color: ${e.colorTextSecondary};
    `,modalContent:t`
      padding-block: ${e.paddingMD}px;
      padding-inline: 0;
    `,successIcon:t`
      color: ${e.colorSuccess};
    `,tableContainer:t`
      overflow: hidden;
      border: 1px solid ${e.colorBorderSecondary};
      border-radius: ${e.borderRadiusLG}px;
    `,tableName:t`
      font-family: ${e.fontFamilyCode};
    `,warningIcon:t`
      color: ${e.colorWarning};
    `})),q=({open:e=!0,onOpenChange:t=()=>{},onConfirm:r=()=>{},onCancel:a=()=>{},importData:n})=>{let{t:i}=(0,c.Bd)("common"),{styles:l}=V(),[d]=(0,s.useState)("skip"),u=(e=>{let t=[];for(let[r,o]of Object.entries(e.data))Array.isArray(o)&&o.length>0&&t.push({count:o.length,name:r});return t})(n),h=u.reduce((e,t)=>e+t.count,0),m=[{dataIndex:"name",key:"name",render:e=>(0,o.Y)("div",{className:l.tableName,children:e}),title:i("importPreview.tables.name")},{dataIndex:"count",key:"count",title:i("importPreview.tables.count")}];return(0,o.Y)(p.A,{footer:[(0,o.Y)(F.A,{onClick:()=>{t(!1),a()},children:i("cancel")},"cancel"),(0,o.Y)(F.A,{onClick:()=>{r("overwrite"===d),t(!1)},type:"primary",children:i("importPreview.confirmImport")},"confirm")],onCancel:()=>t(!1),open:e,title:i("importPreview.title"),width:700,children:(0,o.Y)("div",{className:l.modalContent,children:(0,o.FD)(g.Flexbox,{gap:16,children:[(0,o.FD)(g.Flexbox,{gap:4,children:[(0,o.FD)(g.Flexbox,{align:"center",horizontal:!0,justify:"space-between",width:"100%",children:[(0,o.FD)(g.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(j.A,{className:l.infoIcon,size:16}),(0,o.Y)(W.A,{strong:!0,children:i("importPreview.totalRecords",{count:h})})]}),(0,o.Y)(g.Flexbox,{horizontal:!0,children:(0,o.Y)(W.A,{type:"secondary",children:i("importPreview.totalTables",{count:u.length})})})]}),(0,o.FD)(g.Flexbox,{className:l.hash,gap:4,horizontal:!0,children:["Hash: ",(0,o.Y)("span",{children:n.schemaHash})]})]}),(0,o.Y)("div",{className:l.tableContainer,children:(0,o.Y)(K.A,{columns:m,dataSource:u,pagination:!1,rowKey:"name",scroll:{y:350},size:"small"})})]})})})};var X=r(81671);let J=(0,i.rU)(({token:e,css:t})=>({zeroCell:t`
      color: ${e.colorTextQuaternary};
    `})),Z=(0,s.memo)(({duration:e,dataSource:t,onClickFinish:r})=>{let{t:a}=(0,c.Bd)("common"),{styles:n}=J(),i=e=>e||(0,o.Y)("span",{className:n.zeroCell,children:"0"});return(0,o.Y)(P.Ay,{extra:(0,o.Y)(F.A,{onClick:r,size:"large",type:"primary",children:a("importModal.finish.start")}),icon:(0,o.Y)(u.default,{icon:X.A}),status:"success",style:{paddingBlock:24,paddingInline:0},subTitle:t?(0,o.FD)(g.Flexbox,{gap:16,width:500,children:[a("importModal.finish.subTitle",{duration:(e/1e3).toFixed(2)}),(0,o.Y)(K.A,{bordered:!0,columns:[{dataIndex:"title",render:i,title:a("importModal.result.type")},{dataIndex:"added",render:i,title:a("importModal.result.added")},{dataIndex:"skips",render:i,title:a("importModal.result.skips")},{dataIndex:"error",render:i,title:a("importModal.result.errors")},{dataIndex:"updated",render:i,title:a("importModal.result.update")}],dataSource:t,pagination:!1,rowKey:"title",size:"small"})]}):a("importModal.finish.onlySettings"),title:a("importModal.finish.title")})});var Q=r(96987),ee=r(29914);let et=async e=>{let t=await e.text();try{return JSON.parse(t)}catch(e){console.error(e),ee.Ew.error({description:(0,Q.t)("import.importConfigFile.description",{ns:"error",reason:e.message}),message:(0,Q.t)("import.importConfigFile.title",{ns:"error"})})}},er=(0,i.rU)(({css:e})=>({children:e`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `,wrapper:e`
    font-size: inherit;
  `})),eo=(0,s.memo)(({children:e,onFinishImport:t})=>{let{t:r}=(0,c.Bd)("common"),{styles:i}=er(),p=(0,Y.B)(e=>e.refreshSessions),[u,h]=(0,A.L)(e=>[e.refreshMessages,e.refreshTopic]),[g,m]=(0,s.useState)(0),[b,f]=(0,s.useState)(a.Io.Start),[y,w]=(0,s.useState)(),[S,v]=(0,s.useState)(),[C,$]=(0,s.useState)(),[F,P]=(0,s.useState)(!1),[D,I]=(0,s.useState)(void 0),E=(0,s.useMemo)(()=>{if(!C)return;let{type:e,...t}=C;if("settings"!==e)return Object.entries(t).filter(([,e])=>!!e).map(([e,t])=>({added:t.added,error:t.errors,skips:t.skips,title:e,updated:t.updated||0}))},[C]),N=b===a.Io.Success||b===a.Io.Error,M=()=>{f(a.Io.Finished),$(void 0),v(void 0),w(void 0),t?.()},T=(0,s.useMemo)(()=>{switch(b){case a.Io.Preparing:return(0,o.FD)(d.default,{gap:24,padding:40,children:[(0,o.Y)(H,{}),(0,o.Y)("p",{children:r("importModal.preparing")})]});case a.Io.Importing:return(0,o.FD)(d.default,{gap:24,padding:40,children:[(0,o.Y)(H,{}),(0,o.Y)("p",{children:r("importModal.loading")})]});case a.Io.Uploading:return(0,o.Y)(d.default,{gap:24,padding:40,children:(0,o.Y)(G,{progress:y?.progress,restTime:y?.restTime,speed:y?.speed})});case a.Io.Success:return(0,o.Y)(d.default,{gap:24,paddingInline:16,children:(0,o.Y)(Z,{dataSource:E,duration:g,onClickFinish:M})});case a.Io.Error:return(0,o.Y)(d.default,{gap:24,paddingBlock:24,paddingInline:0,children:(0,o.Y)(L,{error:S,onClick:M})});default:return}},[b,y]);return(0,o.FD)(o.FK,{children:[(0,o.Y)(x,{icon:l.A,open:b!==a.Io.Start&&b!==a.Io.Finished,title:r("importModal.title"),width:N?600:400,children:T}),(0,o.Y)(n.A,{accept:"application/json",beforeUpload:async e=>{let t=await et(e);return!!t&&(I(t),P(!0),!1)},className:i.wrapper,maxCount:1,showUploadList:!1,children:(0,o.Y)("div",{className:i.children,children:e})}),D&&(0,o.Y)(q,{importData:D,onConfirm:async e=>{f(a.Io.Preparing),await k.importPgData(D,{callbacks:{onError:e=>{v(e)},onFileUploading:e=>{w(e)},onStageChange:e=>{f(e)},onSuccess:(e,t)=>{e&&$(e),m(t)}},overwriteExisting:e}),await p(),await u(),await h()},onOpenChange:P,open:F})]})})},78397:(e,t,r)=>{r.d(t,{iL:()=>h,xY:()=>g,_X:()=>b,yj:()=>x,mm:()=>m,Zc:()=>u,ue:()=>f});var o,a,n,i,l,s=r(2080),c=r(3296);let d="LOBE_GLOBAL";class p{constructor(e){if(this.storageKey=e,localStorage.getItem(d)){const e=JSON.parse(localStorage.getItem(d)||"{}"),t=e.state.preference;e.state?.preference&&localStorage.setItem("LOBE_PREFERENCE",JSON.stringify(t)),localStorage.removeItem(d)}}async saveToLocalStorage(e){let t=await this.getFromLocalStorage();localStorage.setItem(this.storageKey,JSON.stringify({...t,...e}))}async getFromLocalStorage(e=this.storageKey){return JSON.parse(localStorage.getItem(e)||"{}")}}var u=((o={}).Chat="chat",o.Discover="discover",o.Files="knowledge",o.Image="image",o.Knowledge="knowledge",o.Me="me",o.Setting="settings",o),h=((a={}).Chat="chat",a.Meta="meta",a.Modal="modal",a.Opening="opening",a.Plugin="plugin",a.Prompt="prompt",a.TTS="tts",a),g=((n={}).Chat="chat",n.Members="members",n.Settings="settings",n),m=((i={}).About="about",i.Agent="agent",i.Common="common",i.Hotkey="hotkey",i.Image="image",i.LLM="llm",i.Provider="provider",i.Proxy="proxy",i.Storage="storage",i.SystemAgent="system-agent",i.TTS="tts",i),x=((l={}).APIKey="apikey",l.Profile="profile",l.Security="security",l.Stats="stats",l.Usage="usage",l);let b={chatInputHeight:64,disabledModelProvidersSortType:"default",disabledModelsSortType:"default",expandInputActionbar:!0,expandSessionGroupKeys:[c.X.Pinned,c.X.Default],fileManagerViewMode:"list",filePanelWidth:320,hideGemini2_5FlashImagePreviewChineseWarning:!1,hidePWAInstaller:!1,hideThreadLimitAlert:!1,imagePanelWidth:320,imageTopicPanelWidth:80,knowledgeBaseModalViewMode:"list",mobileShowTopic:!1,noWideScreen:!0,portalWidth:400,sessionsWidth:320,showChatSideBar:!0,showFilePanel:!0,showHotkeyHelper:!1,showImagePanel:!0,showImageTopicPanel:!0,showSessionPanel:!0,showSystemRole:!1,systemRoleExpandedMap:{},themeMode:"auto",tokenDisplayFormatShort:!0,zenMode:!1},f={initClientDBStage:s.D.Idle,isMobile:!1,isStatusInit:!1,sidebarKey:"chat",status:b,statusStorage:new p("LOBE_SYSTEM_STATUS")}},83395:(e,t,r)=>{r.d(t,{A:()=>x});var o=r(28802),a=r(67072),n=r(11577),i=r(83034),l=r(98724),s=r(99278),c=r(64861),d=r(64694),p=r(43262),u=r(38759),h=r(61520);let g=(0,n.rU)(({css:e,token:t})=>({clickable:e`
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
  `})),m=(0,i.forwardRef)(({size:e=40,background:t,clickable:r,className:n,style:m,...x},b)=>{let{styles:f,cx:y}=g(),[w,S]=(0,u.k)(e=>[h.f.userAvatar(e),h.f.username(e)]),v=(0,u.k)(h.P.isLogin),k=(0,d.p)(p.C.remoteServerUrl),A=(0,i.useMemo)(()=>v&&w?c.xl&&w.startsWith("/")&&k?k+w:w:s.CB,[v,w,k]);return(0,o.Y)(a.A,{alt:v&&S?S:l.Se,avatar:A,background:v&&w?t:"transparent",className:y(r&&f.clickable,n),ref:b,size:e,style:{flex:"none",...m},unoptimized:!0,...x})});m.displayName="UserAvatar";let x=m},85229:(e,t,r)=>{r.r(t),r.d(t,{BANNER_HEIGHT:()=>y,default:()=>S});var o=r(28802),a=r(15447),n=r(12389),i=r(67896),l=r(11577),s=r(6621),c=r(51997),d=r.n(c),p=r(83034),u=r(24331),h=r(59121),g=r(80457),m=r(20480),x=r(98724),b=r(45628),f=r(12020);let y=40,w=(0,l.rU)(({css:e,token:t,stylish:r,cx:o,isDarkMode:a})=>({background:o(r.gradientAnimation,e`
      position: absolute;

      width: max(64%, 1280px);
      height: 100%;

      opacity: 0.8;
      filter: blur(60px);
    `),container:e`
    position: relative;
    overflow: hidden;
    background-color: ${a?t.colorFill:t.colorFillSecondary};
  `,wrapper:e`
    z-index: 1;
    overflow: hidden;
    max-width: 100%;
  `})),S=(0,p.memo)(({mobile:e})=>{let t=(0,p.useRef)(null),r=(0,p.useRef)(null),l=(0,i.A)(t),c=(0,i.A)(r),{styles:S}=w(),{t:v}=(0,h.Bd)("common"),[k,A]=(0,p.useState)(e);(0,p.useEffect)(()=>{!e&&!f.i&&l&&c&&A(c.width>l.width-120)},[l,c,e]);let Y=(0,o.FD)(g.Flexbox,{align:"center",flex:"none",gap:8,horizontal:!0,ref:r,children:[(0,o.FD)("b",{children:[v("alert.cloud.title",{name:x.IS}),":"]}),(0,o.Y)("span",{children:v(e?"alert.cloud.descOnMobile":"alert.cloud.desc",{credit:new Intl.NumberFormat("en-US").format(5e5),name:x.IS})})]});return(0,o.FD)(m.default,{className:S.container,flex:"none",height:y,paddingInline:16,ref:t,width:"100%",children:[(0,o.Y)("div",{className:S.background}),(0,o.FD)(m.default,{className:S.wrapper,gap:16,horizontal:!0,width:"100%",children:[k?(0,o.Y)(u.A,{pauseOnHover:!0,children:Y}):Y,(0,o.Y)(d(),{href:`${b.Uo}?utm_source=${b.VU}&utm_medium=banner`,target:"_blank",children:(0,o.FD)(a.A,{size:"small",type:"primary",children:[v("alert.cloud.action")," ",(0,o.Y)(n.default,{icon:s.A})]})})]})]})})},87662:(e,t,r)=>{r.d(t,{X:()=>o});let o=30},90396:(e,t,r)=>{r.d(t,{x:()=>n});var o=r(14343);class a{constructor(){this.getProxySettings=async()=>(0,o.dispatch)("getProxySettings"),this.setSettings=async e=>(0,o.dispatch)("setProxySettings",e),this.getDesktopHotkeys=async()=>(0,o.dispatch)("getShortcutsConfig"),this.updateDesktopHotkey=async(e,t)=>(0,o.dispatch)("updateShortcutConfig",{accelerator:t,id:e}),this.testProxyConnection=async e=>(0,o.dispatch)("testProxyConnection",e),this.testProxyConfig=async(e,t)=>(0,o.dispatch)("testProxyConfig",{config:e,testUrl:t})}}let n=new a},90642:(e,t,r)=>{r.r(t),r.d(t,{default:()=>rI});var o=r(28802),a=r(63053),n=r(33375),i=r(83034),l=r(27697),s=r(98203),c=r(92565),d=r(5930),p=r(11577),u=r(86653),h=r(80457),g=r(64861),m=r(85229),x=r(49875),b=r(64694),f=r(60062),y=r(47858),w=r(96830),S=r(14343),v=r(69033),k=r(15447),A=r(8756),Y=r(65298),C=r(25680),$=r(59121),F=r(20480),P=r(43262),D=r(49602);let I=(0,p.rU)(({token:e,css:t})=>({checked:t`
    position: relative;
    border: 1px solid ${e.colorPrimary};
  `,description:t`
    margin-block-start: 4px; /* Adjust spacing */
    font-size: 13px; /* Slightly larger description */
    color: ${e.colorTextSecondary};
  `,iconWrapper:t`
    margin-block-start: 2px;
    padding: 0;
    color: ${e.colorTextSecondary};

    svg {
      display: block;
      font-size: 24px; /* Increased icon size */
      stroke-width: 2; /* Ensure lucide icons look bolder */
    }
  `,label:t`
    font-size: 16px;
    font-weight: 600; /* Bolder label */
    color: ${e.colorText};
  `,optionCard:t`
    cursor: pointer;

    width: 100%;
    padding: 16px;
    border: 1px solid ${e.colorBorderSecondary}; /* Use secondary border */
    border-radius: ${e.borderRadiusLG}px;

    color: ${e.colorText};

    background-color: ${e.colorBgContainer};

    transition: all 0.2s ${e.motionEaseInOut};

    :hover {
      border-color: ${e.colorPrimary};
    }
  `,optionInner:t`
    display: flex;
    gap: 16px;
    align-items: flex-start;
    justify-content: space-between;
  `})),E=({description:e,icon:t,label:r,value:a,isSelected:n,onClick:i,children:l})=>{let{styles:s,cx:c}=I();return(0,o.FD)(h.Flexbox,{className:c(s.optionCard,n&&s.checked),direction:"vertical",onClick:()=>i(a),children:[(0,o.FD)("div",{className:s.optionInner,children:[(0,o.FD)(h.Flexbox,{gap:16,horizontal:!0,children:[(0,o.Y)(F.default,{className:s.iconWrapper,children:(0,o.Y)(t,{})}),(0,o.FD)(h.Flexbox,{gap:8,children:[(0,o.Y)("div",{className:s.label,children:r}),(0,o.Y)("div",{className:s.description,children:e})]})]}),n&&(0,o.Y)(D.A,{style:{fontSize:16}})]}),l]},a)},N=(0,p.rU)(({token:e,css:t})=>({cardGroup:t`
      width: 400px; /* Increased width */
    `,container:t`
      overflow-y: auto;

      width: 100%;
      height: 100%;
      padding-block: 0 40px;
      padding-inline: 24px; /* Increased top padding */
    `,continueButton:t`
      width: 100%;
      margin-block-start: 40px;
    `,groupTitle:t`
      padding-inline-start: 4px; /* Align with card padding */
      font-size: 16px;
      font-weight: 500;
      color: ${e.colorTextSecondary};
    `,header:t`
      text-align: center;
    `,inputError:t`
      margin-block-start: 8px;
      font-size: 12px;
      color: ${e.colorError};
    `,modal:t`
      .ant-drawer-close {
        position: absolute;
        inset-block-start: 8px;
        inset-inline-end: 0;
      }
    `,selfHostedInput:t`
      margin-block-start: 12px;
    `,selfHostedText:t`
      cursor: pointer;
      font-size: 14px;
      color: ${e.colorTextTertiary};

      :hover {
        color: ${e.colorTextSecondary};
      }
    `,title:t`
      margin-block: 16px 48px; /* Increased Spacing below title */
      font-size: 24px; /* Increased font size */
      font-weight: 600;
      color: ${e.colorTextHeading};
    `})),M=(0,i.memo)(({setIsOpen:e,setWaiting:t})=>{let{styles:r}=N(),{t:a}=(0,$.Bd)(["electron","common"]),[n,l]=(0,i.useState)(),s=(0,b.p)(e=>e.connectRemoteServer),c=(0,b.p)(e=>e.disconnectRemoteServer),d=(0,b.p)(P.C.storageMode),p=(0,b.p)(P.C.remoteServerUrl),[u,g]=(0,i.useState)(d),[m,x]=(0,i.useState)(p),f=(0,i.useCallback)(e=>{if(!e)return a("remoteServer.urlRequired");try{if(new URL(e),!e.startsWith("http://")&&!e.startsWith("https://"))throw Error("Invalid protocol");return}catch{return a("remoteServer.invalidUrl")}},[]),y=e=>{g(e),e!==S.e2.SelfHost?l(void 0):l(f(m))},w=async()=>{if(u===S.e2.SelfHost){let e=f(m);if(l(e),e)return}if(u===S.e2.Local){await c(),e(!1);return}t(!0),await s({remoteServerUrl:m,storageMode:u})};return(0,o.FD)(F.default,{className:r.container,children:[(0,o.Y)(h.Flexbox,{align:"center",gap:0,children:(0,o.Y)("h1",{className:r.title,children:a("sync.mode.title")})}),(0,o.FD)(h.Flexbox,{className:r.cardGroup,gap:24,children:[(0,o.FD)(h.Flexbox,{gap:16,children:[(0,o.FD)(h.Flexbox,{align:"center",horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{className:r.groupTitle,children:a("sync.mode.cloudSync")}),(0,o.Y)("div",{className:r.selfHostedText,onClick:()=>y(S.e2.SelfHost),children:a("sync.mode.useSelfHosted")})]}),(0,o.Y)(E,{description:a("sync.lobehubCloud.description"),icon:A.default,isSelected:"cloud"===u,label:a("sync.lobehubCloud.title"),onClick:y,value:S.e2.Cloud}),u===S.e2.SelfHost&&(0,o.Y)(E,{description:a("sync.selfHosted.description"),icon:Y.A,isSelected:u===S.e2.SelfHost,label:a("sync.selfHosted.title"),onClick:y,value:S.e2.SelfHost,children:u===S.e2.SelfHost&&(0,o.FD)(o.FK,{children:[(0,o.Y)(v.A,{autoFocus:!0,className:r.selfHostedInput,onChange:e=>{let t=e.target.value;x(t),l(f(t))},onClick:e=>e.stopPropagation(),placeholder:"https://your-lobechat.com",status:n?"error":void 0,value:m}),n&&(0,o.Y)("div",{className:r.inputError,children:n})]})})]}),(0,o.FD)(h.Flexbox,{children:[(0,o.Y)("div",{className:r.groupTitle,style:{marginBottom:12},children:a("sync.mode.localStorage")}),(0,o.Y)(E,{description:a("sync.local.description"),icon:C.A,isSelected:u===S.e2.Local,label:a("sync.local.title"),onClick:y,value:S.e2.Local})]})]}),(0,o.Y)(k.A,{className:r.continueButton,disabled:!u||u===S.e2.SelfHost&&(!!n||!m),onClick:w,size:"large",style:{maxWidth:400},type:"primary",children:"local"===u?a("save",{ns:"common"}):a("sync.continue")})]})});var T=r(9274),_=r(69962),B=r(64556),z=r(66956);let L=(0,i.memo)(({onClick:e})=>{let{t}=(0,$.Bd)("electron"),[r,a,n]=(0,b.p)(e=>[!e.isInitRemoteServerConfig,P.C.isSyncActive(e),e.useDataSyncConfig]);return n(),(0,o.Y)(T.A,{icon:r?_.A:a?B.A:z.A,loading:r,onClick:e,size:"small",title:t(r?"sync.isIniting":a?"sync.inCloud":"sync.inLocalStorage"),tooltipProps:{placement:"bottomRight"}})});var R=r(12389),U=r(75431),O=r(91888),H=r(41073);let G=(0,p.i7)`
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0;
    }
`,W=(0,p.rU)(({css:e,token:t})=>({container:e`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 160px;
    height: 160px;
    margin-block-end: ${t.marginXL}px;
  `,pulse1:e`
    animation: ${G} 3s ease-out infinite;
  `,pulse2:e`
    animation: ${G} 3s ease-out 1.2s infinite;
  `,pulse3:e`
    animation: ${G} 3s ease-out 1.8s infinite;
  `,pulseBase:e`
    pointer-events: none;
    content: '';

    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);

    width: 100px;
    height: 100px;
    border-radius: 50%;

    opacity: 0;
    background-color: ${t.colorPrimaryBgHover};
  `,radarIcon:e`
    z-index: 1;
    color: ${t.colorPrimary};
  `,ring1:e`
    width: 80px;
    height: 80px;
    border: 1px solid ${t.colorText};
  `,ring2:e`
    width: 120px;
    height: 120px;
    border: 1px solid ${t.colorTextQuaternary};
  `,ring3:e`
    width: 160px;
    height: 160px;
    border: 1px solid ${t.colorFillSecondary};
  `,ringBase:e`
    pointer-events: none;

    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
  `})),K=(0,i.memo)(()=>{let{styles:e}=W();return(0,o.FD)("div",{className:e.container,children:[(0,o.Y)("div",{className:(0,p.cx)(e.ringBase,e.ring1)}),(0,o.Y)("div",{className:(0,p.cx)(e.ringBase,e.ring2)}),(0,o.Y)("div",{className:(0,p.cx)(e.ringBase,e.ring3)}),(0,o.Y)("div",{className:(0,p.cx)(e.pulseBase,e.pulse1)}),(0,o.Y)("div",{className:(0,p.cx)(e.pulseBase,e.pulse2)}),(0,o.Y)("div",{className:(0,p.cx)(e.pulseBase,e.pulse3)}),(0,o.Y)(R.default,{className:e.radarIcon,icon:B.A,size:40})]})}),j=(0,p.rU)(({css:e,token:t})=>({container:e`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;

    color: ${t.colorTextBase};

    background-color: ${t.colorBgContainer};
  `,content:e`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,description:e`
    margin-block-end: ${t.marginXL}px !important;
    color: ${t.colorTextSecondary} !important;
  `,errorIcon:e`
    margin-block-end: ${t.marginXL}px;
    color: ${t.colorError};
  `,errorMessage:e`
    margin-block-end: ${t.marginXL}px !important;
    color: ${t.colorError} !important;
    text-align: center;
  `,helpText:e`
    margin-block-start: ${t.marginLG}px;
    font-size: ${t.fontSizeSM}px;
    color: ${t.colorTextTertiary};
  `,title:e`
    margin-block-end: ${t.marginSM}px !important;
    color: ${t.colorText} !important;
  `})),V=(0,i.memo)(({setWaiting:e,setIsOpen:t})=>{let{styles:r}=j(),{t:a}=(0,$.Bd)("electron"),[n,l]=(0,i.useState)(null),[s,c,d]=(0,b.p)(e=>[e.disconnectRemoteServer,e.refreshServerConfig,e.connectRemoteServer]),p=async()=>{await s(),e(!1),l(null)},u=async()=>{l(null);let{dataSyncConfig:e}=b.p.getState();await d(e)};return((0,S.A8)("authorizationSuccessful",async()=>{t(!1),e(!1),l(null),await c()}),(0,S.A8)("authorizationFailed",({error:e})=>{l(e)}),n)?(0,o.Y)("div",{className:r.container,children:(0,o.FD)(h.Flexbox,{className:r.content,gap:12,children:[(0,o.FD)(h.Flexbox,{align:"center",children:[(0,o.Y)(R.default,{className:r.errorIcon,icon:H.A,size:64}),(0,o.Y)(U.A,{as:"h4",className:r.title,children:a("waitingOAuth.errorTitle")})]}),(0,o.Y)(O.A,{language:"log",style:{maxHeight:500,maxWidth:800,overflow:"auto"},children:n}),(0,o.FD)(h.Flexbox,{gap:12,horizontal:!0,children:[(0,o.Y)(k.A,{onClick:p,children:a("waitingOAuth.cancel")}),(0,o.Y)(k.A,{onClick:u,type:"primary",children:a("waitingOAuth.retry")})]})]})}):(0,o.Y)("div",{className:r.container,children:(0,o.FD)("div",{className:r.content,children:[(0,o.Y)(K,{}),(0,o.Y)(U.A,{as:"h4",className:r.title,children:a("waitingOAuth.title")}),(0,o.Y)(U.A,{className:r.description,children:a("waitingOAuth.description")}),(0,o.Y)(k.A,{onClick:p,children:a("waitingOAuth.cancel")}),(0,o.Y)(U.A,{className:r.helpText,children:a("waitingOAuth.helpText")})]})})}),q=(0,p.rU)(({css:e})=>({modal:e`
      .ant-drawer-close {
        position: absolute;
        inset-block-start: 8px;
        inset-inline-end: 0;
      }
    `})),X=()=>{let{styles:e,theme:t}=q(),[r,a]=(0,i.useState)(!1),[n,l]=(0,i.useState)(!1);return(0,o.FD)(o.FK,{children:[(0,o.Y)(L,{onClick:()=>{a(!0)}}),(0,o.Y)(w.A,{classNames:{header:e.modal},height:"100vh",onClose:()=>{a(!1)},open:r,placement:"top",style:{background:t.colorBgLayout},styles:{body:{padding:0},header:{padding:0}},children:n?(0,o.Y)(V,{setIsOpen:a,setWaiting:l}):(0,o.Y)(M,{setIsOpen:a,setWaiting:l})})]})};var J=r(58244),Z=r(31985),Q=r(92912),ee=r(97721);class et{downloadUpdate(){return(0,S.dispatch)("downloadUpdate")}constructor(){this.checkUpdate=async()=>(0,S.dispatch)("checkUpdate"),this.installNow=async()=>(0,S.dispatch)("installNow"),this.installLater=async()=>(0,S.dispatch)("installLater")}}let er=new et;var eo=r(9402);let ea=(0,i.memo)(()=>{let e,{t}=(0,$.Bd)(["electron","common"]),[r,a]=(0,i.useState)(!1),[n,l]=(0,i.useState)(!1),s=(0,i.useRef)(!1),[c,d]=(0,i.useState)(null),[p,u]=(0,i.useState)(null),[h,g]=(0,i.useState)(null),[m,x]=(0,i.useState)(null),{modal:b}=J.A.useApp();(0,S.A8)("manualUpdateCheckStart",()=>{console.log("[Manual Update] Check Start"),s.current=!0,a(!0),d(null),u(null),g(null),x(null)}),(0,S.A8)("manualUpdateAvailable",e=>{console.log("[Manual Update] Available:",e),a(!1),d(e)}),(0,S.A8)("manualUpdateNotAvailable",e=>{console.log("[Manual Update] Not Available:",e),a(!1),s.current=!1,x(e)}),(0,S.A8)("updateError",e=>{console.log("[Manual Update] Error:",e),(r||n)&&(a(!1),l(!1),b.error({content:e,title:t("updater.updateError")}),x(null),d(null),u(null),s.current=!1)}),(0,S.A8)("updateDownloadStart",()=>{console.log("[Manual Update] Download Start"),s.current=!0,l(!0),d(null),g({bytesPerSecond:0,percent:0,total:0,transferred:0}),x(null)}),(0,S.A8)("updateDownloadProgress",e=>{console.log("[Manual Update] Progress:",e),g(e)}),(0,S.A8)("updateDownloaded",e=>{console.log("[Manual Update] Downloaded:",e),s.current&&(a(!1),l(!1),u(e),g(null),x(null),d(null))});let f=()=>d(null),y=()=>x(null),w=()=>{a(!1),d(null),u(null),g(null),x(null),s.current=!1};return(0,o.FD)(o.FK,{children:[(0,o.Y)(Z.A,{closable:!0,footer:[(0,o.Y)(k.A,{onClick:w,children:t("cancel",{ns:"common"})},"cancel")],onCancel:w,open:r,title:t("updater.checkingUpdate"),children:(0,o.Y)(Q.A,{spinning:!0,children:(0,o.Y)("div",{style:{padding:"20px",textAlign:"center"},children:t("updater.checkingUpdateDesc")})})}),(0,o.FD)(Z.A,{footer:[(0,o.Y)(k.A,{onClick:f,children:t("cancel",{ns:"common"})},"cancel"),(0,o.Y)(k.A,{onClick:()=>{c&&er.downloadUpdate()},type:"primary",children:t("updater.downloadNewVersion")},"download")],onCancel:f,open:!!c,title:t("updater.newVersionAvailable"),children:[(0,o.Y)("h4",{children:t("updater.newVersionAvailableDesc",{version:c?.version})}),c?.releaseNotes&&(0,o.Y)("div",{dangerouslySetInnerHTML:{__html:c.releaseNotes},style:{borderRadius:4,marginTop:8,maxHeight:300,overflow:"auto",padding:"8px 12px"}})]}),(e=h?Math.round(h.percent):0,(0,o.Y)(Z.A,{closable:!1,footer:null,maskClosable:!1,open:n&&!p,title:t("updater.downloadingUpdate"),children:(0,o.FD)("div",{style:{padding:"20px 0"},children:[(0,o.Y)(ee.A,{percent:e,status:"active"}),(0,o.FD)("div",{style:{fontSize:12,marginTop:8,textAlign:"center"},children:[t("updater.downloadingUpdateDesc",{percent:e}),h&&h.bytesPerSecond>0&&(0,o.Y)("span",{children:(0,eo.DB)(h.bytesPerSecond)})]})]})})),(0,o.FD)(Z.A,{footer:[(0,o.Y)(k.A,{onClick:()=>{er.installLater(),u(null),s.current=!1},children:t("updater.installLater")},"later"),(0,o.Y)(k.A,{onClick:()=>{u(null),er.installNow(),s.current=!1},type:"primary",children:t("updater.restartAndInstall")},"now")],onCancel:()=>u(null),open:!!p,title:t("updater.updateReady"),children:[(0,o.Y)("h4",{children:t("updater.updateReadyDesc",{version:p?.version})}),p?.releaseNotes&&(0,o.Y)("div",{dangerouslySetInnerHTML:{__html:p.releaseNotes},style:{borderRadius:4,marginTop:8,maxHeight:300,overflow:"auto",padding:"8px 12px"}})]}),(0,o.Y)(Z.A,{footer:[(0,o.Y)(k.A,{onClick:y,type:"primary",children:t("ok",{ns:"common"})},"ok")],onCancel:y,open:!!m,title:t("updater.isLatestVersion"),children:(0,o.Y)("p",{children:t("updater.isLatestVersionDesc",{version:m?.version})})})]})});var en=r(71400),ei=r(92353);let el=(0,p.rU)(({css:e,token:t})=>({container:e`
    position: fixed;
    z-index: 1000;
    inset-block-end: 16px;
    inset-inline-start: 16px;
  `,releaseNote:e`
    overflow: scroll;

    max-height: 300px;
    padding: 8px;
    border-radius: 8px;

    background: ${t.colorFillQuaternary};
  `})),es=()=>{let{t:e}=(0,$.Bd)("electron"),{styles:t}=el(),{token:r}=en.A.useToken(),[a,n]=(0,i.useState)(!1),[l,s]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null),[p,u]=(0,i.useState)("unconfirm"),[g,m]=(0,i.useState)(!1),[x,b]=(0,i.useState)(!1);return((0,S.A8)("updateDownloaded",e=>{d(e),s(!0),n(!1),u("unconfirm"),m(!1)}),(0,S.A8)("updateWillInstallLater",()=>{u("installLater"),setTimeout(()=>u(null),5e3)}),l||a)?"installLater"===p?(0,o.Y)("div",{style:{backgroundColor:r.colorBgElevated,borderRadius:r.borderRadius,bottom:20,boxShadow:r.boxShadow,color:r.colorText,left:16,padding:"10px 16px",position:"fixed",zIndex:1e3},children:e("updater.willInstallLater")}):"unconfirm"===p?(0,o.FD)(o.FK,{children:[(0,o.Y)("div",{className:t.container,children:(0,o.FD)("div",{style:{alignItems:"center",background:r.colorBgElevated,border:`1px solid ${r.colorBorderSecondary}`,borderRadius:12,boxShadow:r.boxShadow,color:r.colorText,display:"flex",gap:8,padding:"8px 10px"},children:[(0,o.Y)(R.default,{icon:ei.A,style:{fontSize:16}}),(0,o.FD)("div",{onClick:()=>m(!0),style:{cursor:"pointer",fontSize:12},children:[e("updater.updateReady"),c?.version?` \xb7 ${c.version}`:""]}),(0,o.Y)("div",{style:{flex:1}}),(0,o.Y)(k.A,{onClick:()=>{er.installLater()},size:"small",type:"text",children:e("updater.later")}),(0,o.Y)(k.A,{loading:x,onClick:()=>{b(!0),er.installNow()},size:"small",type:"primary",children:e("updater.upgradeNow")})]})}),(0,o.Y)(Z.A,{footer:null,onCancel:()=>m(!1),open:g,title:e("updater.updateReady"),width:520,children:(0,o.FD)(h.Flexbox,{gap:12,style:{maxWidth:480},children:[(0,o.Y)("div",{style:{color:r.colorTextSecondary,fontSize:12},children:c?.version}),c?.releaseNotes&&(0,o.Y)("div",{className:t.releaseNote,dangerouslySetInnerHTML:{__html:c.releaseNotes}}),(0,o.FD)("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[(0,o.Y)(k.A,{onClick:()=>er.installLater(),size:"small",children:e("updater.installLater")}),(0,o.Y)(k.A,{loading:x,onClick:()=>{b(!0),er.installNow()},size:"small",type:"primary",children:e("updater.restartAndInstall","立即安装")})]})]})})]}):null:null},ec=()=>(0,o.Y)("div",{style:{width:132}});var ed=r(87662),ep=r(3779);let eu=(0,y.U0)(),eh=(0,i.memo)(()=>{let[e,t]=(0,b.p)(e=>[e.isAppStateInit,e.useInitElectronAppState]);t(),(()=>{let[e,t,r,o]=(0,b.p)(e=>[e.isAppStateInit,e.appState.systemAppearance,e.updateElectronAppState,e.appState.isMac]),[a,n]=(0,d.o)(e=>[e.switchThemeMode,e.switchLocale]),l=(0,p.DP)();(0,S.A8)("themeChanged",({themeMode:e})=>{a(e,{skipBroadcast:!0})}),(0,S.A8)("localeChanged",({locale:e})=>{n(e,{skipBroadcast:!0})}),(0,S.A8)("systemThemeChanged",({themeMode:e})=>{r({systemAppearance:e})}),(0,i.useEffect)(()=>{if(!e||!o)return;document.documentElement.style.background="none";let r=!t||l.appearance!==t;document.body.style.background=(0,ep.B3)(l.colorBgLayout,r?.95:.66)},[l,t,e,o])})();let r=e&&!eu;return(0,o.FD)(h.Flexbox,{align:"center",className:f.p$.draggable,height:ed.X,horizontal:!0,justify:"space-between",paddingInline:r?"12px 0":12,style:{minHeight:ed.X},width:"100%",children:[(0,o.Y)("div",{}),(0,o.Y)("div",{}),(0,o.FD)(h.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,o.FD)(h.Flexbox,{className:f.p$.nodrag,gap:8,horizontal:!0,children:[(0,o.Y)(es,{}),(0,o.Y)(X,{})]}),r&&(0,o.FD)(o.FK,{children:[(0,o.Y)(x.A,{type:"vertical"}),(0,o.Y)(ec,{})]})]}),(0,o.Y)(ea,{})]})});var eg=r(29703),em=r(89026),ex=r(99454),eb=r(25863),ef=r(67524),ey=r(23047),ew=r(27752),eS=r(31021),ev=r.n(eS),ek=r(54606),eA=r(51989),eY=r(38759),eC=r(42897);let e$=(0,p.rU)(({css:e,token:t})=>({desc:e`
    font-size: 12px;
    line-height: 1.3;
    color: ${t.colorTextDescription};
  `,hotkey:e`
    gap: 4px;

    kbd {
      min-width: 26px;
      height: 26px;
      border: 1px solid ${t.colorBorder};
    }
  `})),eF=(0,i.memo)(({groupId:e})=>{let t=(0,eY.k)(eC.w0.currentSettings,ev()),{t:r}=(0,$.Bd)("hotkey"),{styles:a}=e$();return(0,o.Y)(o.FK,{children:ek.e.filter(t=>t.group===e).map(e=>(0,o.FD)(h.Flexbox,{align:"flex-start",gap:16,horizontal:!0,width:"100%",children:[(0,o.FD)(h.Flexbox,{flex:1,gap:4,justify:"space-between",children:[(0,o.Y)("span",{children:r(`${e.id}.title`)}),eA.default[e.id].desc?(0,o.Y)("span",{className:a.desc,children:r(`${e.id}.desc`)}):null]}),(0,o.Y)(ew.A,{className:a.hotkey,keys:t.hotkey[e.id],style:{zoom:1.1}})]},e.id))})}),eP=(0,i.memo)(()=>{let[e,t]=(0,d.o)(e=>[e.status.showHotkeyHelper,e.updateSystemStatus]),[r,a]=(0,i.useState)(ey.vQ.Essential),{t:n}=(0,$.Bd)("setting");return(0,o.Y)(eg.A,{centered:!0,footer:null,onCancel:()=>t({showHotkeyHelper:!1}),open:e,styles:{body:{paddingBlock:24},mask:{backdropFilter:"blur(8px)",backgroundColor:"rgba(0, 0, 0, 0.5)"}},title:(0,o.Y)(em.A,{onChange:e=>a(e),options:[{icon:(0,o.Y)(R.default,{icon:eb.A}),label:n("hotkey.group.essential"),value:ey.vQ.Essential},{icon:(0,o.Y)(R.default,{icon:ef.A}),label:n("hotkey.group.conversation"),value:ey.vQ.Conversation}],value:r,variant:"filled"}),children:(0,o.Y)(ex.A,{gap:32,children:(0,o.Y)(eF,{groupId:r})})})});var eD=r(91568),eI=r(62326),eE=r(12467),eN=r(28266),eM=r(51567),eT=r(20108),e_=r(38991),eB=r(31065),ez=r(27498),eL=r(91951),eR=r(83395),eU=r(67693),eO=r(50718),eH=r(52702),eG=r(18328),eW=r(61520),eK=r(35628),ej=r(56646),eV=r(72242),eq=r(42776),eX=r(6182),eJ=r(76694);let eZ=(0,i.memo)(({placement:e="right"})=>{let[t,r]=(0,d.o)(e=>[eJ.c.language(e),e.switchLocale]),a=e=>{r(e)},{t:n}=(0,$.Bd)("setting"),l=(0,i.useMemo)(()=>[{key:"auto",label:n("settingCommon.lang.autoMode"),onClick:()=>a("auto")},...eX.Fp.map(e=>({key:e.value,label:e.label,onClick:()=>a(e.value)}))],[n]);return(0,o.Y)(eU.A,{arrow:!1,content:(0,o.Y)(eG.A,{items:l,selectable:!0,selectedKeys:[t]}),placement:e,styles:{body:{maxHeight:360,overflow:"auto",padding:0}},trigger:["click","hover"],children:(0,o.Y)(T.A,{icon:eq.A,size:{blockSize:32,size:16}})})});var eQ=r(38837),e0=r(65320),e1=r(74109);let e8={auto:eQ.A,dark:e0.A,light:e1.A},e2=(0,i.memo)(({placement:e="right"})=>{let[t,r]=(0,d.o)(e=>[eB.I.themeMode(e),e.switchThemeMode]),{t:a}=(0,$.Bd)("setting"),n=(0,i.useMemo)(()=>[{icon:(0,o.Y)(R.default,{icon:e8.auto}),key:"auto",label:a("settingCommon.themeMode.auto"),onClick:()=>r("auto")},{icon:(0,o.Y)(R.default,{icon:e8.light}),key:"light",label:a("settingCommon.themeMode.light"),onClick:()=>r("light")},{icon:(0,o.Y)(R.default,{icon:e8.dark}),key:"dark",label:a("settingCommon.themeMode.dark"),onClick:()=>r("dark")}],[a]);return(0,o.Y)(eU.A,{arrow:!1,content:(0,o.Y)(eG.A,{items:n,selectable:!0,selectedKeys:[t]}),placement:e,styles:{body:{padding:0}},trigger:["click","hover"],children:(0,o.Y)(T.A,{icon:e8[t],size:{blockSize:32,size:16}})})});var e4=r(67543),e3=r(64873),e5=r(56434),e6=r(29961),e7=r(34904),e9=r(87605),te=r(20956),tt=r(14484),tr=r(12648),to=r(94062),ta=r(36539),tn=r(37348),ti=r(96773),tl=r(98724),ts=r(52609),tc=r(45628),td=r(78183),tp=r(29816),tu=r(39472);let th=(0,i.memo)(({children:e,showBadge:t,onClick:r})=>{let{t:a}=(0,$.Bd)("common");return t?(0,o.FD)(h.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,onClick:r,width:"100%",children:[(0,o.Y)("span",{children:e}),(0,o.Y)(e3.A,{count:a("upgradeVersion.hasNew")})]}):(0,o.Y)(h.Flexbox,{flex:1,onClick:r,children:e})}),tg=(0,i.memo)(({closePopover:e})=>{let t=(0,eO.useRouter)(),r=(0,eY.k)(eW.P.isLoginWithAuth),[a,n]=(0,eY.k)(e=>[e.openLogin,e.logout]),{mainItems:i,logoutItems:s}=(()=>{let{canInstall:e,install:t}=(0,tp.H)(),r=(0,tu.o)(),{t:a}=(0,$.Bd)(["common","setting","auth"]),{showCloudPromotion:n,hideDocs:i}=(0,eI.wo)(eE.E),[s,c]=(0,eY.k)(e=>[eW.P.isLogin(e),eW.P.isLoginWithAuth(e)]),d=[{icon:(0,o.Y)(R.default,{icon:e5.A}),key:"profile",label:(0,o.Y)(l.N_,{to:"/profile",children:a("userPanel.profile")})}],p=[{extra:g.xl?(0,o.Y)("div",{children:(0,o.Y)(ew.A,{keys:ts.d.openSettings})}):void 0,icon:(0,o.Y)(R.default,{icon:eb.A}),key:"setting",label:(0,o.Y)(l.N_,{to:"/settings",children:(0,o.Y)(th,{showBadge:r,children:a("userPanel.setting")})})},{type:"divider"}],u=[{icon:(0,o.Y)(R.default,{icon:e6.A}),key:"pwa",label:a("installPWA"),onClick:()=>t()},{type:"divider"}],h=s?[{icon:(0,o.Y)(R.default,{icon:e7.A}),key:"import",label:(0,o.Y)(td.A,{children:a("importData")})},{type:"divider"}].filter(Boolean):[],m=[n&&{icon:(0,o.Y)(R.default,{icon:e9.A}),key:"cloud",label:(0,o.Y)("a",{href:`${tc.Uo}?utm_source=${tc.VU}`,rel:"noopener noreferrer",target:"_blank",children:a("userPanel.cloud",{name:tl.IS})})},{icon:(0,o.Y)(R.default,{icon:te.A}),key:"changelog",label:g.xl?(0,o.Y)("a",{href:tc.L5,rel:"noopener noreferrer",target:"_blank",children:a("changelog")}):(0,o.Y)(l.N_,{to:"/changelog",children:a("changelog")})},{children:[{icon:(0,o.Y)(R.default,{icon:tt.A}),key:"docs",label:(0,o.Y)("a",{href:tc.Qs,rel:"noopener noreferrer",target:"_blank",children:a("userPanel.docs")})},{icon:(0,o.Y)(R.default,{icon:tr.A}),key:"feedback",label:(0,o.Y)("a",{href:tc.ve,rel:"noopener noreferrer",target:"_blank",children:a("userPanel.feedback")})},{icon:(0,o.Y)(R.default,{icon:e4.A}),key:"discord",label:(0,o.Y)("a",{href:tl.kX.discord,rel:"noopener noreferrer",target:"_blank",children:a("userPanel.discord")})},{icon:(0,o.Y)(R.default,{icon:to.A}),key:"email",label:(0,o.Y)("a",{href:(0,tc.vw)(tl.tU.support),rel:"noopener noreferrer",target:"_blank",children:a("userPanel.email")})}],icon:(0,o.Y)(R.default,{icon:ta.A}),key:"help",label:a("userPanel.help")},{type:"divider"}].filter(Boolean),x=[{type:"divider"},...!ti.S4||ti.S4&&c?d:[],...s?p:[],...e?u:[],...h,...!i?m:[]].filter(Boolean);return{logoutItems:c?[{icon:(0,o.Y)(R.default,{icon:tn.A}),key:"logout",label:(0,o.Y)("span",{children:a("signout",{ns:"auth"})})}]:[],mainItems:x}})();return(0,o.FD)(h.Flexbox,{gap:2,style:{minWidth:300},children:[g.xl||r?(0,o.FD)(o.FK,{children:[(0,o.Y)(ej.A,{avatarProps:{clickable:!1}}),(0,o.Y)(l.N_,{style:{color:"inherit"},to:"/profile/stats",children:(0,o.Y)(eK.A,{})})]}):(0,o.Y)(eV.A,{onClick:()=>{a(),e()}}),(0,o.Y)(eG.A,{items:i,onClick:e}),(0,o.FD)(h.Flexbox,{align:"center",horizontal:!0,justify:"space-between",style:r?{paddingRight:6}:{padding:"6px 6px 6px 16px"},children:[r?(0,o.Y)(eG.A,{items:s,onClick:()=>{n(),e(),ti.J_||t.push("/login")}}):(0,o.Y)(eH.A,{}),(0,o.FD)(h.Flexbox,{align:"center",flex:"none",gap:2,horizontal:!0,children:[(0,o.Y)(eZ,{}),(0,o.Y)(e2,{})]})]})]})});var tm=r(92619);let tx=(0,i.memo)(({children:e,showBadge:t})=>t?(0,o.Y)(h.Flexbox,{children:(0,o.Y)(tm.Ay,{theme:{components:{Badge:{dotSize:8}}},children:(0,o.Y)(e3.A,{dot:!0,offset:[-4,4],children:e})})}):e),tb=(0,p.rU)(({css:e})=>({popover:e`
      inset-block-start: ${g.xl?32:8}px !important;
      inset-inline-start: 8px !important;
    `})),tf=(0,i.memo)(({children:e})=>{let t=(0,tu.o)(),[r,a]=(0,i.useState)(!1),{styles:n}=tb();return(0,o.Y)(tx,{showBadge:t,children:(0,o.Y)(eU.A,{arrow:!1,content:(0,o.Y)(tg,{closePopover:()=>a(!1)}),onOpenChange:a,open:r,placement:"topRight",rootClassName:n.popover,styles:{body:{padding:0}},trigger:["click"],children:e})})});tf.displayName="UserPanel";var ty=r(71457);let tw=(0,i.memo)(()=>{let{t:e}=(0,$.Bd)("common"),t=(0,eY.k)(ty.U.hideSettingsMoveGuide),r=(0,eY.k)(e=>e.updateGuideState),a=(0,o.Y)(i.Suspense,{fallback:(0,o.Y)(eR.A,{}),children:(0,o.Y)(tf,{children:(0,o.Y)(eR.A,{clickable:!0})})});return t?a:(0,o.Y)(ez.A,{color:"blue",open:!0,placement:"right",prefixCls:"guide",title:(0,o.FD)(h.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)("div",{style:{lineHeight:"22px"},children:e("userPanel.moveGuide")}),(0,o.Y)(T.A,{icon:eL.A,onClick:()=>{r({moveSettingsToAvatar:!0})},role:"close-guide",size:"small",style:{color:"inherit"}})]}),children:a})});tw.displayName="Avatar";var tS=r(41930),tv=r(17140);let tk={blockSize:36,size:20,strokeWidth:1.5},tA=(0,i.memo)(()=>{let{t:e}=(0,$.Bd)("common"),{hideGitHub:t}=(0,eI.wo)(eE.E);return(0,o.FD)(h.Flexbox,{gap:8,children:[!t&&(0,o.Y)("a",{"aria-label":"GitHub",href:tc.U0,rel:"noopener noreferrer",target:"_blank",children:(0,o.Y)(T.A,{icon:tS.A,size:tk,title:"GitHub",tooltipProps:{placement:"right"}})}),(0,o.Y)(l.N_,{"aria-label":e("labs"),to:"/labs",children:(0,o.Y)(T.A,{icon:tv.A,size:tk,title:e("labs"),tooltipProps:{placement:"right"}})})]})});var tY=r(81490),tC=r(37412),t$=r(67072),tF=r(56105),tP=r(64811),tD=r(56016),tI=r(62016);let tE=(0,p.rU)(({css:e,token:t})=>({ink:e`
    &::before {
      content: '';

      position: absolute;
      inset-block-start: 50%;
      inset-inline: -9px;
      transform: translateY(-50%);

      width: 0;
      height: 8px;
      border-start-end-radius: ${4}px;
      border-end-end-radius: ${4}px;

      opacity: 0;
      background: ${t.colorPrimary};

      transition:
        height 150ms ${t.motionEaseInOut},
        width 150ms ${t.motionEaseInOut},
        opacity 200ms ${t.motionEaseInOut};
    }

    &:hover {
      &::before {
        width: ${4}px;
        height: 24px;
        opacity: 1;
      }
    }
  `,inkActive:e`
    &::before {
      width: ${4}px;
      height: 40px;
      opacity: 1;
    }

    &:hover {
      &::before {
        width: ${4}px;
        height: 40px;
        opacity: 1;
      }
    }
  `})),tN=()=>{let{styles:e,cx:t}=tE(),r=(0,tP.B)(tI.z.pinnedSessions,ev()),[a]=(0,tP.B)(e=>[e.activeId]),n=(0,tF.C)(),i=(0,eY.k)(eC.w0.getHotkeyById(ey.g8.SwitchAgent)),l=r.length>0,[s,{pinAgent:c}]=(0,e_.W)();return l&&(0,o.FD)(o.FK,{children:[(0,o.Y)(x.A,{style:{marginBottom:8,marginTop:4}}),(0,o.Y)(tY.A,{height:"100%",hideScrollBar:!0,size:40,children:(0,o.Y)(h.Flexbox,{gap:12,style:{padding:"0"},children:r.map((r,l)=>(0,o.Y)(h.Flexbox,{style:{position:"relative"},children:(0,o.Y)(tC.A,{hotkey:l<9?i.replaceAll(ey.zd.Number,String(l+1)):void 0,placement:"right",title:tD.C.getTitle(r.meta),children:(0,o.Y)(h.Flexbox,{className:t(e.ink,s&&a===r.id?e.inkActive:void 0),children:(0,o.Y)(t$.A,{avatar:tD.C.getAvatar(r.meta),background:r.meta.backgroundColor,onClick:()=>{n(r.id),c()},size:40})})})},r.id))})})]})};var tM=r(84752),tT=r(40904),t_=r(61975),tB=r(35245),tz=r(78397);let tL={blockSize:40,size:24,strokeWidth:2},tR=(0,i.memo)(({tab:e,isPinned:t})=>{let{t:r}=(0,$.Bd)("common"),a=(0,l.Zp)(),[,n]=(0,i.useTransition)(),[s,c]=(0,d.o)(e=>[e.switchBackToChat,e.isMobile]),{showMarket:p,enableKnowledgeBase:u,showAiImage:g}=(0,eI.wo)(eE.E),m=(0,eY.k)(eC.w0.getHotkeyById(ey.g8.NavigateToChat)),x=(0,tP.B)(e=>e.activeId),b=(0,i.useMemo)(()=>(0,tc.iU)(x||tB.Ed,c),[x,c]),f=e===tz.Zc.Chat&&!t,y=e===tz.Zc.Knowledge,w=e===tz.Zc.Discover,S=e===tz.Zc.Image,v=e=>{n(()=>{a(e)})};return(0,o.FD)(h.Flexbox,{gap:8,children:[(0,o.Y)(T.A,{active:f,icon:ef.A,onClick:e=>{e.metaKey||e.ctrlKey?window.open(b,"_blank"):(e.preventDefault(),n(()=>{s(x)}))},size:tL,title:(0,o.FD)(h.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",children:[(0,o.Y)("span",{children:r("tab.chat")}),(0,o.Y)(ew.A,{inverseTheme:!0,keys:m})]}),tooltipProps:{placement:"right"}}),u&&(0,o.Y)(T.A,{active:y,icon:tM.A,onClick:()=>v("/knowledge"),size:tL,title:r("tab.knowledgeBase"),tooltipProps:{placement:"right"}}),g&&(0,o.Y)(T.A,{active:S,icon:tT.A,onClick:()=>v("/image"),size:tL,title:r("tab.aiImage"),tooltipProps:{placement:"right"}}),p&&(0,o.Y)(T.A,{active:w,icon:t_.A,onClick:()=>v("/discover"),size:tL,title:r("tab.discover"),tooltipProps:{placement:"right"}})]})}),tU=()=>{let[e]=(0,e_.W)(),t=(0,eM._G)();return(0,o.Y)(tR,{isPinned:e,tab:t})},tO=(0,i.memo)(()=>{let e=(0,p.DP)(),t=(0,eT.f)(),r=(0,d.o)(eB.I.inZenMode),{showPinList:a}=(0,eI.wo)(eE.E);return!r&&!t&&(0,o.Y)(eN.A,{avatar:(0,o.Y)("div",{className:f.p$.nodrag,children:(0,o.Y)(tw,{})}),bottomActions:(0,o.Y)("div",{className:f.p$.nodrag,children:(0,o.Y)(tA,{})}),className:f.p$.draggable,style:{height:"100%",zIndex:100,...g.xl?{background:"transparent",borderInlineEnd:0,paddingBlockStart:8}:{background:e.colorBgLayout}},topActions:(0,o.Y)(i.Suspense,{children:(0,o.FD)("div",{className:f.p$.nodrag,style:{display:"flex",flexDirection:"column",maxHeight:g.xl?"calc(100vh - 180px)":"calc(100vh - 150px)"},children:[(0,o.Y)(tU,{}),a&&(0,o.Y)(tN,{})]})})})});tO.displayName="DesktopNav";let tH=(0,i.memo)(({children:e})=>{let t=(0,p.DP)(),r=(0,l.zy)().pathname.startsWith("/settings");return(0,o.FD)(o.FK,{children:[(0,o.Y)(i.Suspense,{children:!r&&(0,o.Y)(tO,{})}),(0,o.Y)(h.Flexbox,{style:{background:t.colorBgLayout,borderInlineStart:`1px solid ${t.colorBorderSecondary}`,borderStartStartRadius:r?void 0:12,borderTop:`1px solid ${t.colorBorderSecondary}`,overflow:"hidden"},width:"100%",children:e})]})});var tG=r(91608);let tW=()=>((()=>{let{showPinList:e}=(0,eI.wo)(eE.E),t=(0,tP.B)(tI.z.pinnedSessions,ev()),r=(0,eY.k)(eC.w0.getHotkeyById(ey.g8.SwitchAgent)),o=(0,tF.C)(),[,{pinAgent:a}]=(0,e_.W)();return(0,u.vC)(t.slice(0,9).map((e,t)=>r.replaceAll(ey.zd.Number,String(t+1))),(e,r)=>{if(!r.keys?.[0])return;let n=t[parseInt(r.keys?.[0])-1];n&&(o(n.id),a())},{enableOnFormTags:!0,enabled:e,preventDefault:!0,scopes:[ey.Gs.Global,ey.g8.SwitchAgent]}),ey.g8.SwitchAgent})(),(()=>{let e=(0,tF.C)(),[,{unpinAgent:t}]=(0,e_.W)();return(0,tG.y)(ey.g8.NavigateToChat,()=>{e(tB.Ed),t()})})(),(()=>{let[e,t]=(0,d.o)(e=>[e.status.showHotkeyHelper,e.updateSystemStatus]);return(0,tG.y)(ey.g8.OpenHotkeyHelper,()=>t({showHotkeyHelper:!e}))})(),null),tK=(0,n.default)(()=>Promise.resolve().then(r.bind(r,85229)),{loadableGenerated:{webpack:()=>[85229]}}),tj=(0,i.memo)(e=>{let{locale:t}=e,{isPWA:r}=(0,eD.V)(),a=(0,p.DP)(),{showCloudPromotion:n}=(0,eI.wo)(eE.E);return(0,o.FD)(u.Hb,{initiallyActiveScopes:[ey.Gs.Global],children:[g.xl&&(0,o.Y)(eh,{}),n&&(0,o.Y)(tK,{}),(0,o.Y)(h.Flexbox,{height:g.xl?`calc(100% - ${ed.X}px)`:n?`calc(100% - ${m.BANNER_HEIGHT}px)`:"100%",horizontal:!0,style:{borderTop:r?`1px solid ${a.colorBorder}`:void 0,position:"relative"},width:"100%",children:g.xl?(0,o.Y)(tH,{children:(0,o.Y)(l.sv,{context:{locale:t}})}):(0,o.FD)(o.FK,{children:[(0,o.Y)(i.Suspense,{children:(0,o.Y)(tO,{})}),(0,o.Y)(l.sv,{context:{locale:t}})]})}),(0,o.Y)(eP,{}),(0,o.Y)(i.Suspense,{children:(0,o.Y)(tW,{})})]})});tj.displayName="DesktopMainLayout";var tV=r(1696);let tq=(0,n.default)(()=>Promise.all([r.e(24551),r.e(58019),r.e(87940),r.e(7543),r.e(33265),r.e(58181),r.e(99049),r.e(88440),r.e(48727),r.e(13284),r.e(37618),r.e(80176),r.e(43588),r.e(70949),r.e(80812),r.e(29883),r.e(31031),r.e(52494),r.e(33042),r.e(99034),r.e(9374),r.e(32251),r.e(10),r.e(38471),r.e(83606),r.e(65101),r.e(1440),r.e(9593),r.e(28162),r.e(82700),r.e(59744),r.e(47001),r.e(86847),r.e(95327),r.e(85727),r.e(43987),r.e(73772),r.e(47270),r.e(29447),r.e(60803),r.e(81742),r.e(38838),r.e(85505),r.e(56313),r.e(41271),r.e(53855)]).then(r.bind(r,63652)).then(e=>e.DesktopChatPage),{loadableGenerated:{webpack:()=>[63652]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),tX=(0,n.default)(()=>Promise.all([r.e(87940),r.e(7543),r.e(33265),r.e(88440),r.e(48727),r.e(13284),r.e(37618),r.e(80176),r.e(43588),r.e(70949),r.e(80812),r.e(29883),r.e(31031),r.e(52494),r.e(33042),r.e(99034),r.e(9374),r.e(32251),r.e(10),r.e(38471),r.e(83606),r.e(65101),r.e(9593),r.e(28162),r.e(47001),r.e(50344),r.e(95327),r.e(39023),r.e(44870),r.e(38838),r.e(85505),r.e(31974),r.e(9909)]).then(r.bind(r,13171)),{loadableGenerated:{webpack:()=>[13171]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),tJ=(0,n.default)(()=>Promise.all([r.e(33265),r.e(25028),r.e(89097),r.e(23459),r.e(88440),r.e(80812),r.e(99034),r.e(9374),r.e(9593),r.e(47270),r.e(24977),r.e(26237),r.e(38424)]).then(r.bind(r,5986)).then(e=>e.DesktopPage),{loadableGenerated:{webpack:()=>[5986]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),tZ=(0,n.default)(()=>r.e(87247).then(r.bind(r,87247)),{loadableGenerated:{webpack:()=>[87247]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),tQ=(0,n.default)(()=>Promise.all([r.e(48727),r.e(47001),r.e(50344),r.e(38838),r.e(2534)]).then(r.bind(r,51496)).then(e=>e.DesktopHomePage),{loadableGenerated:{webpack:()=>[51496]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t0=(0,n.default)(()=>Promise.all([r.e(48727),r.e(50344),r.e(5938)]).then(r.bind(r,83557)).then(e=>e.DesktopAssistantPage),{loadableGenerated:{webpack:()=>[83557]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t1=(0,n.default)(()=>r.e(67100).then(r.bind(r,67100)),{loadableGenerated:{webpack:()=>[67100]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t8=(0,n.default)(()=>Promise.all([r.e(48727),r.e(47001),r.e(38838),r.e(68798)]).then(r.bind(r,77670)).then(e=>e.DesktopMcpPage),{loadableGenerated:{webpack:()=>[77670]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t2=(0,n.default)(()=>Promise.all([r.e(86114),r.e(99752)]).then(r.bind(r,99752)),{loadableGenerated:{webpack:()=>[99752]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t4=(0,n.default)(()=>Promise.all([r.e(48727),r.e(13284),r.e(37618),r.e(70949),r.e(31031),r.e(52494),r.e(33042),r.e(23932),r.e(88545),r.e(55583)]).then(r.bind(r,14889)).then(e=>e.DesktopModelPage),{loadableGenerated:{webpack:()=>[14889]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t3=(0,n.default)(()=>Promise.all([r.e(48727),r.e(70949),r.e(31031),r.e(52494),r.e(33042),r.e(58321)]).then(r.bind(r,80702)),{loadableGenerated:{webpack:()=>[80702]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t5=(0,n.default)(()=>Promise.all([r.e(48727),r.e(13284),r.e(37618),r.e(70949),r.e(31031),r.e(52494),r.e(33042),r.e(20082),r.e(91855),r.e(27223)]).then(r.bind(r,27223)).then(e=>e.DesktopProviderPage),{loadableGenerated:{webpack:()=>[27223]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t6=(0,n.default)(()=>Promise.all([r.e(88440),r.e(50344),r.e(58127),r.e(16992)]).then(r.bind(r,16992)),{loadableGenerated:{webpack:()=>[16992]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t7=(0,n.default)(()=>Promise.all([r.e(87940),r.e(7543),r.e(88440),r.e(48727),r.e(80812),r.e(99034),r.e(9374),r.e(32251),r.e(10),r.e(38471),r.e(50344),r.e(43987),r.e(61719),r.e(51131),r.e(32179),r.e(40133),r.e(38208)]).then(r.bind(r,38208)).then(e=>e.DesktopDiscoverAssistantDetailPage),{loadableGenerated:{webpack:()=>[38208]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),t9=(0,n.default)(()=>Promise.all([r.e(87940),r.e(7543),r.e(33265),r.e(88440),r.e(48727),r.e(13284),r.e(80176),r.e(43588),r.e(80812),r.e(29883),r.e(99034),r.e(9374),r.e(32251),r.e(10),r.e(38471),r.e(9593),r.e(28162),r.e(47001),r.e(95327),r.e(80727),r.e(38838),r.e(85505),r.e(28231)]).then(r.bind(r,28231)).then(e=>e.DesktopMcpPage),{loadableGenerated:{webpack:()=>[28231]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),re=(0,n.default)(()=>Promise.all([r.e(88440),r.e(48727),r.e(13284),r.e(37618),r.e(70949),r.e(31031),r.e(52494),r.e(33042),r.e(61719),r.e(23932),r.e(75042),r.e(88545),r.e(40133),r.e(4011)]).then(r.bind(r,4011)).then(e=>e.DesktopModelPage),{loadableGenerated:{webpack:()=>[4011]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rt=(0,n.default)(()=>Promise.all([r.e(87940),r.e(7543),r.e(25028),r.e(89097),r.e(88440),r.e(48727),r.e(13284),r.e(37618),r.e(70949),r.e(80812),r.e(31031),r.e(52494),r.e(33042),r.e(99034),r.e(9374),r.e(10),r.e(24977),r.e(61719),r.e(46419),r.e(91855),r.e(40133),r.e(69165)]).then(r.bind(r,69165)).then(e=>e.DesktopProviderPage),{loadableGenerated:{webpack:()=>[69165]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rr=(0,n.default)(()=>r.e(56523).then(r.bind(r,56523)),{loadableGenerated:{webpack:()=>[56523]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),ro=(0,n.default)(()=>Promise.all([r.e(65101),r.e(44476),r.e(99261),r.e(33081)]).then(r.bind(r,33081)),{loadableGenerated:{webpack:()=>[33081]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),ra=(0,n.default)(()=>Promise.all([r.e(24551),r.e(87940),r.e(33265),r.e(58181),r.e(99049),r.e(80176),r.e(43588),r.e(80812),r.e(99034),r.e(32251),r.e(83606),r.e(1440),r.e(9593),r.e(50340),r.e(82700),r.e(86847),r.e(73772),r.e(65913),r.e(44476),r.e(84486),r.e(30508),r.e(64665),r.e(11345)]).then(r.bind(r,64665)),{loadableGenerated:{webpack:()=>[64665]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rn=(0,n.default)(()=>Promise.all([r.e(83606),r.e(82700),r.e(84486),r.e(92036)]).then(r.bind(r,89172)),{loadableGenerated:{webpack:()=>[89172]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),ri=(0,n.default)(()=>Promise.all([r.e(24551),r.e(87940),r.e(33265),r.e(58181),r.e(99049),r.e(80176),r.e(43588),r.e(80812),r.e(99034),r.e(32251),r.e(83606),r.e(1440),r.e(9593),r.e(50340),r.e(82700),r.e(86847),r.e(73772),r.e(65913),r.e(30508),r.e(47486)]).then(r.bind(r,47486)),{loadableGenerated:{webpack:()=>[47486]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rl=(0,n.default)(()=>r.e(98694).then(r.bind(r,98694)),{loadableGenerated:{webpack:()=>[98694]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rs=(0,n.default)(()=>Promise.all([r.e(25546),r.e(40020)]).then(r.bind(r,40020)),{loadableGenerated:{webpack:()=>[40020]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rc=(0,n.default)(()=>r.e(52784).then(r.bind(r,52784)),{loadableGenerated:{webpack:()=>[52784]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rd=(0,n.default)(()=>Promise.all([r.e(87940),r.e(7543),r.e(48727),r.e(13284),r.e(37618),r.e(70949),r.e(80812),r.e(31031),r.e(52494),r.e(33042),r.e(99034),r.e(9374),r.e(32251),r.e(10),r.e(38471),r.e(39023),r.e(99989),r.e(16469),r.e(81224),r.e(64140)]).then(r.bind(r,64140)),{loadableGenerated:{webpack:()=>[64140]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rp=(0,n.default)(()=>Promise.all([r.e(48727),r.e(13284),r.e(37618),r.e(70949),r.e(29883),r.e(31031),r.e(52494),r.e(33042),r.e(83606),r.e(65101),r.e(5978),r.e(81224),r.e(10717)]).then(r.bind(r,33098)),{loadableGenerated:{webpack:()=>[33098]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),ru=(0,n.default)(()=>Promise.all([r.e(65101),r.e(20134)]).then(r.bind(r,97753)),{loadableGenerated:{webpack:()=>[97753]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rh=(0,n.default)(()=>Promise.all([r.e(48727),r.e(80176),r.e(43588),r.e(70949),r.e(31031),r.e(91165),r.e(16456)]).then(r.bind(r,16456)),{loadableGenerated:{webpack:()=>[16456]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rg=(0,n.default)(()=>Promise.all([r.e(88440),r.e(48727),r.e(13284),r.e(37618),r.e(80176),r.e(43588),r.e(70949),r.e(80812),r.e(29883),r.e(31031),r.e(52494),r.e(33042),r.e(28162),r.e(41952),r.e(59744),r.e(75927),r.e(40371),r.e(13441),r.e(85727),r.e(78199),r.e(3282),r.e(46668),r.e(79946),r.e(98197)]).then(r.bind(r,98197)),{loadableGenerated:{webpack:()=>[98197]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rm=(0,n.default)(()=>r.e(25416).then(r.bind(r,25416)).then(e=>e.DesktopProfileSecurityPage),{loadableGenerated:{webpack:()=>[25416]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rx=(0,n.default)(()=>Promise.all([r.e(88440),r.e(13284),r.e(37618),r.e(80176),r.e(43588),r.e(70949),r.e(52494),r.e(50340),r.e(13441),r.e(29447),r.e(3282),r.e(57947),r.e(79052),r.e(90994),r.e(9535)]).then(r.bind(r,31916)).then(e=>e.DesktopProfileStatsPage),{loadableGenerated:{webpack:()=>[31916]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rb=(0,n.default)(()=>Promise.all([r.e(88440),r.e(48727),r.e(13284),r.e(37618),r.e(70949),r.e(31031),r.e(52494),r.e(33042),r.e(59744),r.e(75927),r.e(13441),r.e(85727),r.e(3282),r.e(57947),r.e(64401),r.e(78385),r.e(46618)]).then(r.bind(r,46618)).then(e=>e.DesktopProfileUsagePage),{loadableGenerated:{webpack:()=>[46618]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),rf=(0,n.default)(()=>r.e(87839).then(r.bind(r,87839)),{loadableGenerated:{webpack:()=>[87839]},loading:()=>(0,o.Y)(c.A,{}),ssr:!1}),ry=()=>{let e=(0,l.Zp)();return(0,i.useEffect)(()=>(d.o.setState({navigate:e}),()=>{d.o.setState({navigate:void 0})}),[e]),null},rw=e=>()=>{let t=(0,l.r5)(),r=(0,l.Zp)();return(0,o.Y)(s.A,{error:t,reset:()=>{r(e)}})},rS=rw("/chat"),rv=rw("/discover"),rk=rw("/knowledge"),rA=rw("/settings"),rY=rw("/image"),rC=rw("/profile"),r$=rw("/changelog"),rF=rw("/chat"),rP=e=>(0,o.FD)(o.FK,{children:[(0,o.Y)(ry,{}),(0,o.Y)(tj,{locale:e.locale})]}),rD=({locale:e})=>{let t=(0,l.Ys)([{children:[{children:[{element:(0,o.Y)(tq,{}),index:!0},{element:(0,o.Y)(tq,{}),path:"*"}],element:(0,o.Y)(tX,{}),errorElement:(0,o.Y)(rS,{}),path:"chat"},{children:[{children:[{children:[{element:(0,o.Y)(t0,{}),index:!0}],element:(0,o.Y)(t1,{}),path:"assistant"},{children:[{element:(0,o.Y)(t4,{}),index:!0}],element:(0,o.Y)(t3,{}),path:"model"},{element:(0,o.Y)(t5,{}),path:"provider"},{children:[{element:(0,o.Y)(t8,{}),index:!0}],element:(0,o.Y)(t2,{}),path:"mcp"},{element:(0,o.Y)(tQ,{}),index:!0}],element:(0,o.Y)(t6,{})},{children:[{element:(0,o.Y)(t7,{}),loader:tV.pI,path:"assistant/:slug"},{element:(0,o.Y)(re,{}),loader:tV.pI,path:"model/:slug"},{element:(0,o.Y)(rt,{}),loader:tV.pI,path:"provider/:slug"},{element:(0,o.Y)(t9,{}),loader:tV.pI,path:"mcp/:slug"}],element:(0,o.Y)(rr,{})}],element:(0,o.Y)(ro,{}),errorElement:(0,o.Y)(rv,{}),path:"discover"},{children:[{element:(0,o.Y)(ra,{}),index:!0},{element:(0,o.Y)(rn,{}),path:"bases"},{element:(0,o.Y)(ri,{}),loader:tV.bq,path:"bases/:id"},{element:(0,o.Y)(ri,{}),loader:tV.bq,path:"*"}],element:(0,o.Y)(rl,{}),errorElement:(0,o.Y)(rk,{}),path:"knowledge"},{children:[{element:(0,o.Y)(rs,{}),index:!0}],element:(0,o.Y)(rc,{}),errorElement:(0,o.Y)(rA,{}),path:"settings"},{children:[{element:(0,o.Y)(rd,{}),index:!0}],element:(0,o.Y)(rp,{}),errorElement:(0,o.Y)(rY,{}),path:"image"},{element:(0,o.Y)(ru,{}),path:"labs"},{children:[{element:(0,o.Y)(rh,{}),index:!0},{element:(0,o.Y)(rg,{}),path:"apikey"},{element:(0,o.Y)(rm,{}),path:"security"},{element:(0,o.Y)(rx,{}),path:"stats"},{element:(0,o.Y)(rb,{}),path:"usage"}],element:(0,o.Y)(rf,{}),errorElement:(0,o.Y)(rC,{}),path:"profile"},{children:[{element:(0,o.Y)(tJ,{}),index:!0}],element:(0,o.Y)(tZ,{locale:e}),errorElement:(0,o.Y)(r$,{}),path:"changelog"},{index:!0,loader:()=>(0,l.V2)("/chat",{status:302})},{loader:()=>(0,l.V2)("/chat",{status:302}),path:"*"}],element:(0,o.Y)(rP,{locale:e}),errorElement:(0,o.Y)(rF,{}),path:"/"}]);return(0,o.Y)(a.pg,{router:t})};rD.displayName="ClientRouter";let rI=rD},91568:(e,t,r)=>{r.d(t,{V:()=>n});var o=r(83034),a=r(47858);let n=()=>{let e=(0,o.useRef)((0,a.uo)()),t=(0,o.useRef)((0,a.X5)()),r={isApple:e.current&&["mac os","ios"].includes(e.current?.toLowerCase()),isArc:(0,a.L6)(),isChrome:t.current?.toLowerCase()==="chrome",isChromium:t.current&&["chrome","edge","opera","brave"].includes(t.current?.toLowerCase()),isEdge:t.current?.toLowerCase()==="edge",isFirefox:t.current?.toLowerCase()==="firefox",isIOS:e.current?.toLowerCase()==="ios",isMacOS:e.current?.toLowerCase()==="mac os",isPWA:(0,a.Mu)(),isSafari:t.current?.toLowerCase()==="safari",isSonomaOrLaterSafari:(0,a.Fr)()};return(0,o.useMemo)(()=>({...r,isSupportInstallPWA:!r.isArc&&!r.isFirefox&&(r.isChromium&&!r.isIOS||r.isMacOS&&r.isSonomaOrLaterSafari)}),[])}},91608:(e,t,r)=>{r.d(t,{y:()=>d});var o=r(55156),a=r(86653),n=r(54606),i=r(62326),l=r(38759),s=r(42897),c=r(12020);let d=(e,t,r,d)=>{let p=(0,l.k)(s.w0.getHotkeyById(e)),u=(0,i.wo)(e=>e.isMobile),h=Array.isArray(r)?Array.isArray(d)?void 0:d:r,g=Array.isArray(r)?r:Array.isArray(d)?d:void 0,m=n.e.find(t=>t.id===e),x=(0,a.vC)(p,(...r)=>(c.C&&console.log("[Hotkey]",e),t(...r)),{enableOnFormTags:!0,preventDefault:!0,...h,enabled:!u&&h?.enabled,scopes:(0,o.A)([e,...m?.scopes||[],...h?.scopes||[]])},g);return{id:e,ref:x}}},96153:(e,t,r)=>{r.d(t,{v:()=>n});var o=r(77605);class a{constructor(){this.getLatestVersion=async()=>{let e=await fetch("https://registry.npmmirror.com/@lobehub/chat/latest");return(await e.json()).version},this.getGlobalConfig=async()=>o.du.config.getGlobalConfig.query(),this.getDefaultAgentConfig=async()=>o.du.config.getDefaultAgentConfig.query()}}let n=new a},98203:(e,t,r)=>{r.d(t,{A:()=>h});var o=r(28802),a=r(51717),n=r(15447),i=r(51997),l=r.n(i),s=r(83034),c=r(59121),d=r(80457),p=r(49935);let u=(0,s.memo)(({reset:e})=>{let{t}=(0,c.Bd)("error");return(0,o.FD)(d.Flexbox,{align:"center",justify:"center",style:{minHeight:"100%",width:"100%"},children:[(0,o.Y)("h1",{style:{filter:"blur(8px)",fontSize:`min(${p.g_/6}px, 25vw)`,fontWeight:900,margin:0,opacity:.12,position:"absolute",zIndex:0},children:"ERROR"}),(0,o.Y)(a.A,{emoji:"\uD83E\uDD27",size:64}),(0,o.Y)("h2",{style:{fontWeight:"bold",marginTop:"1em",textAlign:"center"},children:t("error.title")}),(0,o.Y)("p",{style:{marginBottom:"2em"},children:t("error.desc")}),(0,o.FD)(d.Flexbox,{gap:12,horizontal:!0,style:{marginBottom:"1em"},children:[(0,o.Y)(n.A,{onClick:()=>e(),children:t("error.retry")}),(0,o.Y)(l(),{href:"/",children:(0,o.Y)(n.A,{type:"primary",children:t("error.backHome")})})]})]})});u.displayName="ErrorCapture";let h=u},99756:(e,t,r)=>{r.d(t,{Ec:()=>n,GJ:()=>l,ZG:()=>i});var o=r(2644),a=r.n(o);let n=()=>a()().startOf("day"),i=()=>a()().subtract(1,"month").startOf("month").endOf("month"),l=(e,t=14)=>a()().diff(a()(e),"day")<t}}]);