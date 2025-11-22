"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56313],{6332:(e,t,i)=>{i.d(t,{J:()=>a});var l=i(31021),n=i.n(l),r=i(94147);let a=()=>(0,r.d)(e=>e.enabledChatModelList,n())||[]},14980:(e,t,i)=>{i.d(t,{F:()=>v});var l=i(46026),n=i(1249),r=i(23722),a=i(31021),o=i.n(a),d=i(16383),c=i(32308),s=i(45541),p=i(88990),u=i(5930),m=i(76694),g=i(38759),h=i(42897);let v=(e,t)=>{let i,a=(0,g.k)(h.w0.currentTTS,o()),v=(0,s.o)(p.e.currentAgentTTS,o()),f=(0,u.o)(m.c.currentLanguage),x=(0,s.o)(p.e.currentAgentTTSVoice(f)),y={};switch(t?.server||v.ttsService){case"openai":i=l.L,y={api:{headers:(0,d.y)(),serviceUrl:c.Sn.tts},options:{model:a.openAI.ttsModel,voice:t?.voice||x}};break;case"edge":i=n.p,y={api:{},options:{voice:t?.voice||x}};break;case"microsoft":i=r.A,y={api:{serviceUrl:c.Sn.microsoft},options:{voice:t?.voice||x}}}return i(e,{...t,...y,onFinish:e=>{t?.onUpload?.(y.voice||"alloy",e)}})}},16383:(e,t,i)=>{i.d(t,{y:()=>o});var l=i(47260),n=i(94147),r=i(38759),a=i(45282);let o=e=>{let t=r.k.getState(),i=l.w.providerKeyVaults("openai")(n.d.getState())||{};return{...e,"X-lobe-chat-access-code":a.t.password(t),"X-lobe-user-id":t.user?.id||"","X-openai-api-key":i.apiKey||"","X-openai-end-point":i.baseURL||""}}},16451:(e,t,i)=>{i.d(t,{S:()=>n});var l=i(74038);let n=()=>{let[e]=(0,l.j)(e=>[e.useFetchInstalledPlugins]);return e(!0)}},24800:(e,t,i)=>{i.d(t,{A:()=>g});var l=i(28802),n=i(12389),r=i(31021),a=i.n(r),o=i(48019),d=i(83034),c=i(59121),s=i(61405),p=i(74038),u=i(23211),m=i(35863);let g=(0,d.memo)(({identifier:e,size:t=32})=>{let{t:i}=(0,c.Bd)("plugin"),r=(0,p.j)(m.P.getMetaById(e),a()),d=u.V.getPluginAvatar(r),g=u.V.getPluginTitle(r)??i("unknownPlugin");return d?(0,l.Y)(s.A,{alt:g,avatar:d,size:t}):(0,l.Y)(n.default,{icon:o.A})})},25598:(e,t,i)=>{i.d(t,{$:()=>P,$z:()=>z,IW:()=>I,TK:()=>T,V7:()=>C});var l=i(28802),n=i(37618),r=i(2893),a=i(37412),o=i(3136),d=i(12389),c=i(75431),s=i(67072),p=i(11577),u=i(14654),m=i(56055),g=i(4562),h=i(10726),v=i(20028),f=i(48019),x=i(10376),y=i(62874),Y=i(54565),A=i(30598),b=i.n(A),F=i(83034),w=i(59121),k=i(80457),S=i(9402);let P="lobe-model-info-tags",D=(0,p.rU)(({css:e,token:t})=>({tag:e`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px !important;
    height: 20px;
    border-radius: 4px;
  `,token:e`
    width: 36px !important;
    height: 20px;
    border-radius: 4px;

    font-family: ${t.fontFamilyCode};
    font-size: 11px;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillTertiary};
  `})),C=(0,F.memo)(({directionReverse:e,placement:t="right",...i})=>{let{t:n}=(0,w.Bd)("components"),{styles:r}=D();return(0,l.FD)(k.Flexbox,{className:P,direction:e?"horizontal-reverse":"horizontal",gap:4,width:"fit-content",children:[i.files&&(0,l.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:n("ModelSelect.featureTag.file"),children:(0,l.Y)(o.A,{className:r.tag,color:"success",size:"small",children:(0,l.Y)(d.default,{icon:m.A})})}),i.imageOutput&&(0,l.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:n("ModelSelect.featureTag.imageOutput"),children:(0,l.Y)(o.A,{className:r.tag,color:"success",size:"small",children:(0,l.Y)(d.default,{icon:g.A})})}),i.vision&&(0,l.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:n("ModelSelect.featureTag.vision"),children:(0,l.Y)(o.A,{className:r.tag,color:"success",size:"small",children:(0,l.Y)(d.default,{icon:h.A})})}),i.video&&(0,l.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:n("ModelSelect.featureTag.video"),children:(0,l.Y)(o.A,{className:r.tag,color:"magenta",size:"small",children:(0,l.Y)(d.default,{icon:v.A})})}),i.functionCall&&(0,l.Y)(a.A,{placement:t,styles:{root:{maxWidth:"unset",pointerEvents:"none"}},title:n("ModelSelect.featureTag.functionCall"),children:(0,l.Y)(o.A,{className:r.tag,color:"info",size:"small",children:(0,l.Y)(d.default,{icon:f.A})})}),i.reasoning&&(0,l.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:n("ModelSelect.featureTag.reasoning"),children:(0,l.Y)(o.A,{className:r.tag,color:"purple",size:"small",children:(0,l.Y)(d.default,{icon:x.A})})}),i.search&&(0,l.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:n("ModelSelect.featureTag.search"),children:(0,l.Y)(o.A,{className:r.tag,color:"cyan",size:"small",children:(0,l.Y)(d.default,{icon:y.A})})}),"number"==typeof i.contextWindowTokens&&(0,l.Y)(a.A,{placement:t,styles:{root:{maxWidth:"unset",pointerEvents:"none"}},title:n("ModelSelect.featureTag.tokens",{tokens:0===i.contextWindowTokens?"∞":b()(i.contextWindowTokens).format("0,0")}),children:(0,l.Y)(o.A,{className:r.token,size:"small",children:0===i.contextWindowTokens?(0,l.Y)(Y.A,{size:17,strokeWidth:1.6}):(0,S.KT)(i.contextWindowTokens)})})]})}),z=(0,F.memo)(({showInfoTag:e=!0,...t})=>{let{mobile:i}=(0,u.Q)();return(0,l.FD)(k.Flexbox,{align:"center",gap:32,horizontal:!0,justify:"space-between",style:{minWidth:i?"100%":void 0,overflow:"hidden",position:"relative",width:i?"80vw":"auto"},children:[(0,l.FD)(k.Flexbox,{align:"center",gap:8,horizontal:!0,style:{flexShrink:1,minWidth:0,overflow:"hidden"},children:[(0,l.Y)(n.A,{model:t.id,size:20}),(0,l.Y)(c.A,{style:i?{maxWidth:"60vw",overflowX:"auto",whiteSpace:"nowrap"}:{},children:t.displayName||t.id})]}),e&&(0,l.Y)(C,{...t})]})}),T=(0,F.memo)(({provider:e,name:t,source:i,logo:n})=>(0,l.FD)(k.Flexbox,{align:"center",gap:4,horizontal:!0,children:["custom"===i&&n?(0,l.Y)(s.A,{avatar:n,size:20,style:{filter:"grayscale(1)"},title:t}):(0,l.Y)(r.A,{provider:e,size:20,type:"mono"}),t]})),I=(0,F.memo)(({Icon:e,label:t})=>(0,l.FD)(k.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(e,{size:20}),(0,l.Y)("span",{children:t})]}))},36740:(e,t,i)=>{i.d(t,{A:()=>m});var l=i(28802),n=i(3136),r=i(12389),a=i(29567),o=i(71126),d=i(97299),c=i(83034),s=i(59121),p=i(50344);let u=(0,c.memo)(({showIcon:e=!0,showText:t=!0})=>(0,l.Y)(n.A,{icon:e&&(0,l.Y)(p.A,{}),size:"small",children:t&&"Model Context Protocol"})),m=(0,c.memo)(({showIcon:e=!0,author:t,type:i,showText:c=!0,isMCP:p})=>{let{t:m}=(0,s.Bd)("plugin"),g="customPlugin"===i,h="LobeHub"===t,v=(0,l.Y)(n.A,{color:"warning",icon:e&&(0,l.Y)(r.default,{icon:a.A}),size:"small",children:m("store.customPlugin")});return p?(0,l.FD)(l.FK,{children:[(0,l.Y)(u,{showIcon:e,showText:!1}),g&&v]}):g?v:(0,l.Y)(n.A,{color:h?"success":void 0,icon:e&&(0,l.Y)(r.default,{icon:h?o.A:d.A}),size:"small",children:c&&(t||m("store.communityPlugin"))})})},53069:(e,t,i)=>{i.d(t,{A:()=>o});var l=i(28802),n=i(69033),r=i(83034);let a=(0,r.memo)(({onChange:e,value:t,...i})=>{let a=(0,r.useRef)(null),o=(0,r.useRef)(!1),[d,c]=(0,r.useState)(t);return(0,r.useEffect)(()=>{c(t)},[t]),(0,l.Y)(n.A,{onBlur:()=>{e?.(d)},onChange:e=>{c(e.target.value)},onCompositionEnd:()=>{o.current=!1},onCompositionStart:()=>{o.current=!0},onPressEnter:()=>{o.current||e?.(d)},ref:a,...i,value:d})});a.displayName="FormInput";let o=a},55753:(e,t,i)=>{i.d(t,{A:()=>a});var l=i(28802),n=i(91888),r=i(67693);let a=(0,i(83034).memo)(({manifest:e,children:t,trigger:i="click"})=>(0,l.Y)(r.A,{arrow:!1,content:(0,l.Y)(n.A,{language:"json",style:{maxHeight:600,maxWidth:400,overflow:"scroll"},children:JSON.stringify(e,null,2)}),placement:"right",style:{width:400},title:"Manifest JSON",trigger:i,children:t}))},58065:(e,t,i)=>{i.d(t,{A:()=>e7});var l=i(28802),n=i(29703),r=i(83034),a=i(59121),o=i(89026),d=i(80457),c=i(62326),s=i(74038),p=i(73616),u=i(15447),m=i(80734),g=i(78778),h=i(45541);let v=(0,r.forwardRef)((e,t)=>{let{t:i}=(0,a.Bd)("setting"),[n,o]=(0,r.useState)(!1),[d,c]=(0,s.j)(e=>[e.installCustomPlugin,e.updateNewCustomPlugin]),p=(0,h.o)(e=>e.togglePlugin);return(0,l.FD)("div",{onClick:e=>{e.stopPropagation()},children:[(0,l.Y)(g.A,{onOpenChange:o,onSave:async e=>{await d(e),await p(e.identifier)},onValueChange:c,open:n}),(0,l.Y)(u.A,{icon:m.A,onClick:()=>{o(!0)},ref:t,children:i("plugin.addMCPPlugin")})]})});var f=i(83606),x=i(16602),y=i(11577),Y=i(20480),A=i(68172),b=i(61748),F=i(259);let w=(0,r.createContext)({}),k=(0,r.memo)(({children:e,config:t={}})=>(0,l.Y)(w,{value:t,children:e}));var S=i(12389),P=i(75431),D=i(59533);let C=(0,y.rU)(({css:e,token:t})=>({container:e`
    padding-block: ${t.paddingXL}px;
padding-inline: ${t.paddingLG}px;
  `,description:e`
    max-width: 240px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
    text-align: center;
  `,iconWrapper:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    margin-block-end: ${t.marginMD}px;
    border-radius: 50%;

    background-color: ${t.colorPrimaryBg};
  `,title:e`
    margin-block-end: ${t.marginSM}px;

    font-size: ${t.fontSizeLG}px;
    font-weight: 500;
    color: ${t.colorText};
    text-align: center;
  `})),z=(0,r.memo)(()=>{let{styles:e}=C(),{t}=(0,a.Bd)("plugin");return(0,l.Y)(Y.default,{className:e.container,children:(0,l.FD)(d.Flexbox,{align:"center",children:[(0,l.Y)("div",{className:e.iconWrapper,children:(0,l.Y)(S.default,{icon:D.A,size:32})}),(0,l.Y)(P.A,{className:e.title,children:t("detailModal.emptyState.title")}),(0,l.Y)(P.A,{className:e.description,children:t("detailModal.emptyState.description")})]})})});var T=i(48727),I=i(67072),B=i(9274),$=i(18455),M=i(14654),N=i(81348),E=i(51997),j=i.n(E),L=i(4001),V=i(94201),R=i(3136);let K=(0,y.rU)(({token:e,css:t})=>({tag:t`
      margin: 0;
      padding-block: 4px;
      padding-inline: 12px;
      border-radius: 16px;

      color: ${e.colorTextSecondary};
    `})),O=(0,r.memo)(({tags:e})=>{let{styles:t}=K();return!!(e?.length&&e?.length>0)&&(0,l.Y)(d.Flexbox,{gap:8,horizontal:!0,wrap:"wrap",children:e.map(e=>(0,l.Y)(R.A,{className:t.tag,children:e},e))})}),W=(0,y.rU)(({css:e,token:t})=>({desc:e`
      color: ${t.colorTextSecondary};
    `,time:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,version:e`
      font-family: ${t.fontFamilyCode};
      font-size: 13px;
    `})),X=(0,r.memo)(({mobile:e,inModal:t})=>{let{author:i,identifier:n,createdAt:o,avatar:c,title:s,tags:p,description:u}=(0,r.use)(w),{styles:m,theme:g}=W(),{mobile:h=e}=(0,M.Q)(),{t:v}=(0,a.Bd)("discover");return(0,l.FD)(d.Flexbox,{gap:24,children:[(0,l.FD)(d.Flexbox,{align:"flex-start",gap:16,horizontal:!0,width:"100%",children:[(0,l.Y)(I.A,{avatar:c,size:h?48:64}),(0,l.FD)(d.Flexbox,{flex:1,gap:4,style:{overflow:"hidden"},children:[(0,l.FD)(d.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",style:{overflow:"hidden",position:"relative"},children:[(0,l.Y)(d.Flexbox,{align:"center",flex:1,gap:12,horizontal:!0,style:{overflow:"hidden",position:"relative"},children:(0,l.Y)(P.A,{as:"h1",ellipsis:!0,style:{fontSize:t?20:h?18:24,margin:0},title:n,children:s})}),n&&(0,l.Y)(d.Flexbox,{align:"center",gap:6,horizontal:!0,children:(0,l.Y)(j(),{href:(0,L.A)("https://github.com/lobehub/lobe-chat-agents/tree/main/locales",n),onClick:e=>e.stopPropagation(),target:"_blank",children:(0,l.Y)(B.A,{fill:g.colorTextDescription,icon:T.A})})})]}),(0,l.Y)(d.Flexbox,{horizontal:!0,justify:"space-between",children:(0,l.FD)(d.Flexbox,{children:[(0,l.FD)(d.Flexbox,{align:"center",gap:4,horizontal:!0,children:[i&&(0,l.Y)(j(),{href:(0,L.A)("https://github.com",i),target:"_blank",children:i}),(0,l.Y)(S.default,{icon:N.A}),(0,l.Y)(V.A,{className:m.time,date:o,template:"MMM DD, YYYY"})]}),p&&(0,l.Y)(O,{tags:p})]})})]})]}),(0,l.Y)($.A,{defaultActiveKey:["summary"],expandIconPosition:"end",items:[{children:u,key:"summary",label:v("plugins.details.summary.title")}],variant:"outlined"})]})});var _=i(61451),G=i(28573),U=i(73655),q=i(25387);let H=(0,y.rU)(({css:e,token:t})=>({link:e`
      color: ${t.colorTextDescription};

      &:hover {
        color: ${t.colorInfo};
      }
    `,nav:e`
      border-block-end: 1px solid ${t.colorBorder};
    `})),Q=(0,r.memo)(({mobile:e,setActiveTab:t,activeTab:i=_.ck.Tools})=>{let{t:n}=(0,a.Bd)("discover"),{styles:r}=H(),[o]=(0,s.j)(e=>[e.activePluginIdentifier]),c=(0,s.j)(A.w.getInstalledPluginById(o)),p=c?.manifest?.settings&&Object.keys(c?.manifest?.settings.properties).length>0,u=(0,l.Y)(G.A,{activeKey:i,compact:e,items:[{icon:(0,l.Y)(S.default,{icon:U.A,size:16}),key:_.ck.Tools,label:n("plugins.details.tools.title")},p&&{icon:(0,l.Y)(S.default,{icon:q.A,size:16}),key:_.ck.Settings,label:n("plugins.details.settings.title")}].filter(Boolean),onChange:e=>t?.(e)});return e?u:(0,l.Y)(d.Flexbox,{align:"center",className:r.nav,horizontal:!0,justify:"space-between",children:u})});var J=i(36956);let Z=(0,r.memo)(()=>{let[e]=(0,s.j)(e=>[e.activePluginIdentifier]),{manifest:t}=(0,s.j)(A.w.getInstalledPluginById(e))||{};return t?.settings&&(0,l.Y)(J.A,{id:t.identifier,schema:t.settings})});var ee=i(28726),et=i(38471),ei=i(91888),el=i(13380),en=i(73102),er=i(53004),ea=i(12052),eo=i(74193),ed=i(67961),ec=i(81597);let es=(0,r.memo)(({mode:e})=>{let{t}=(0,a.Bd)("discover"),[i,n]=(0,r.useState)([]),[o]=(0,s.j)(e=>[e.activePluginIdentifier]),{manifest:d}=(0,s.j)(A.w.getInstalledPluginById(o))||{};return!d||(0,el.A)(d)?(0,l.Y)(ee.A,{variant:"outlined",children:(0,l.Y)(x.A,{description:t("mcp.details.schema.tools.empty"),image:x.A.PRESENTED_IMAGE_SIMPLE})}):(0,l.Y)($.A,{activeKey:i,expandIconPosition:"end",gap:8,items:d.api.map(n=>{let r=Object.entries(n.parameters?.properties||{}).map(([e,t])=>({name:e,type:t.type}));return{children:e===ed.y.Docs?(0,l.Y)(eo.A,{items:[{children:(0,l.Y)(et.A,{children:n.description||""}),key:"instructions",title:t("mcp.details.schema.tools.instructions")},{children:(0,l.Y)(er.A,{columns:[{dataIndex:"name",render:e=>(0,l.Y)("code",{children:e}),title:t("plugins.meta.parameter")},{dataIndex:"type",render:e=>(0,l.Y)(R.A,{children:e.toUpperCase()}),title:t("plugins.meta.type")}],dataSource:r,pagination:!1,rowKey:"name"}),key:"inputSchema",title:t("mcp.details.schema.tools.inputSchema")}]}):(0,l.Y)(ei.A,{language:"json",style:{fontSize:12},variant:"borderless",children:JSON.stringify(n,null,2)}),desc:n.description&&(0,l.Y)(ea.A,{hide:i.includes(n.name),children:(0,en.v0)(n.description)}),key:n.name,label:(0,l.Y)(ec.A,{id:`tools-${n.name}`,level:3,children:n.name})}}),onChange:n,variant:"outlined"})}),ep=(0,r.memo)(()=>{let[e,t]=(0,r.useState)(_.ck.Tools);return(0,l.FD)(d.Flexbox,{gap:16,children:[(0,l.Y)(Q,{activeTab:e,setActiveTab:t}),(0,l.FD)(d.Flexbox,{children:[e===_.ck.Tools&&(0,l.Y)(es,{}),e===_.ck.Settings&&(0,l.Y)(Z,{})]})]})});var eu=i(59202);let em=(0,r.memo)(()=>{let e=(0,y.DP)();return(0,l.FD)(d.Flexbox,{gap:24,children:[(0,l.FD)(d.Flexbox,{gap:12,children:[(0,l.FD)(d.Flexbox,{align:"center",gap:16,horizontal:!0,width:"100%",children:[(0,l.Y)(eu.A.Avatar,{active:!0,size:64}),(0,l.Y)(eu.A.Button,{active:!0,style:{height:36,width:200}})]}),(0,l.Y)(eu.A.Button,{active:!0,size:"small",style:{width:200}})]}),(0,l.FD)(d.Flexbox,{gap:12,height:54,horizontal:!0,style:{borderBottom:`1px solid ${e.colorBorder}`},children:[(0,l.Y)(eu.A.Button,{}),(0,l.Y)(eu.A.Button,{})]}),(0,l.FD)(d.Flexbox,{flex:1,gap:16,style:{overflow:"hidden"},width:"100%",children:[(0,l.Y)(eu.A,{paragraph:{rows:3},title:!1}),(0,l.Y)(eu.A,{paragraph:{rows:8},title:!1}),(0,l.Y)(eu.A,{paragraph:{rows:8},title:!1})]})]})}),eg=(0,r.memo)(({identifier:e})=>{let[t,i]=(0,s.j)(e=>[e.activePluginIdentifier,e.isPluginListInit]),n=e??t,r=(0,s.j)(A.w.isPluginInstalled(n)),{data:a,isLoading:o}=(0,F.Q)(e=>e.usePluginDetail)({identifier:n});return!i||o?(0,l.Y)(em,{}):(0,l.Y)(k,{config:a,children:(0,l.FD)(d.Flexbox,{gap:16,children:[(0,l.Y)(X,{inModal:!0}),r?(0,l.Y)(ep,{}):(0,l.Y)(z,{})]})})});var eh=i(29567),ev=i(31021),ef=i.n(ev);let ex=(0,r.memo)(({identifier:e,open:t,onOpenChange:i,children:n})=>{let[r,a,o]=(0,s.j)(e=>[e.installCustomPlugin,e.updateNewCustomPlugin,e.uninstallCustomPlugin]),d=(0,s.j)(A.w.getCustomPluginById(e),ef());return(0,l.FD)("div",{onClick:e=>{e.stopPropagation()},children:[(0,l.Y)(g.A,{mode:"edit",onDelete:()=>{o(e),i(!1)},onOpenChange:i,onSave:async e=>{await r(e),i(!1)},onValueChange:a,open:t,value:d}),n]})}),ey=(0,y.rU)(({css:e,token:t})=>({button:e`
    margin-block-start: ${t.marginLG}px;
  `,container:e`
    height: 80%;
    padding-block: ${t.paddingXL}px;
    padding-inline: ${t.paddingLG}px;
  `,description:e`
    max-width: 240px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
    text-align: center;
  `,iconWrapper:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    margin-block-end: ${t.marginMD}px;
    border-radius: 50%;

    background-color: ${t.colorPrimaryBg};
  `,title:e`
    margin-block-end: ${t.marginSM}px;

    font-size: ${t.fontSizeLG}px;
    font-weight: 500;
    color: ${t.colorText};
    text-align: center;
  `})),eY=(0,r.memo)(({identifier:e})=>{let{styles:t}=ey(),{t:i}=(0,a.Bd)("plugin"),[n,o]=(0,r.useState)(!1);return(0,l.Y)(Y.default,{className:t.container,children:(0,l.FD)(d.Flexbox,{align:"center",children:[(0,l.Y)("div",{className:t.iconWrapper,children:(0,l.Y)(S.default,{icon:eh.A,size:32})}),(0,l.Y)(P.A,{className:t.title,children:i("detailModal.customPlugin.title")}),(0,l.Y)(P.A,{className:t.description,children:i("detailModal.customPlugin.description")}),(0,l.Y)(ex,{identifier:e,onOpenChange:o,open:n,children:(0,l.Y)(u.A,{className:t.button,onClick:()=>{o(!0)},type:"primary",children:i("detailModal.customPlugin.editBtn")})})]})})}),eA=(0,r.memo)(({identifier:e,type:t,runtimeType:i})=>"customPlugin"===t?(0,l.Y)(eY,{identifier:e}):"mcp"===i?(0,l.Y)(b.default,{identifier:e}):"plugin"===t?(0,l.Y)(eg,{identifier:e}):void 0);var eb=i(82700),eF=i(61405),ew=i(36740),ek=i(38153),eS=i(58244),eP=i(7650),eD=i(39196),eC=i(40697),ez=i(20966),eT=i(575),eI=i(83599),eB=i(88990),e$=i(23211),eM=i(3937);let eN=(0,r.memo)(({identifier:e,type:t,isMCP:i})=>{let n=(0,c.wo)(e=>e.isMobile),[o,p,m,g,v]=(0,s.j)(t=>[A.w.isPluginInstalled(e)(t),eM.f.isPluginInstallLoading(e)(t),t.installPlugin,t.uninstallPlugin,t.installMCPPlugin]),{t:f}=(0,a.Bd)("plugin"),[x,y]=(0,r.useState)(!1),Y=(0,s.j)(A.w.getToolManifestById(e)),[b,F]=(0,h.o)(t=>[t.togglePlugin,eB.e.currentAgentPlugins(t).includes(e)]),{modal:w}=eS.A.useApp(),[k,P]=(0,r.useState)("info"),D=e$.V.isSettingSchemaNonEmpty(Y?.settings),[C,z]=(0,r.useState)(!1);return(0,l.FD)(l.FK,{children:[(0,l.Y)(d.Flexbox,{align:"center",horizontal:!0,children:o?(0,l.FD)(l.FK,{children:["customPlugin"===t&&(0,l.Y)(ex,{identifier:e,onOpenChange:z,open:C,children:(0,l.Y)(B.A,{icon:eP.A,onClick:()=>{z(!0)},title:f("store.actions.manifest")})}),D&&(0,l.Y)(B.A,{icon:eD.A,onClick:()=>{y(!0),P("settings")},title:f("store.actions.settings")}),(0,l.Y)(ek.A,{menu:{items:[{icon:(0,l.Y)(S.default,{icon:eC.A}),key:"detail",label:f("store.actions.detail"),onClick:()=>{y(!0),P("info")}},{danger:!0,icon:(0,l.Y)(S.default,{icon:ez.A}),key:"uninstall",label:f("store.actions.uninstall"),onClick:()=>{w.confirm({centered:!0,okButtonProps:{danger:!0},onOk:async()=>{F&&await b(e,!1),await g(e)},title:f("store.actions.confirmUninstall"),type:"error"})}}]},placement:"bottomRight",trigger:["click"],children:(0,l.Y)(B.A,{icon:eT.A,loading:p})})]}):(0,l.Y)(u.A,{loading:p,onClick:async()=>{i?await v(e):await m(e),await b(e)},size:n?"small":void 0,children:f("store.actions.install")})}),(0,l.Y)(eI.A,{id:e,onClose:()=>{y(!1)},onTabChange:P,open:x,schema:Y?.settings,tab:k})]})}),eE=(0,r.memo)(({title:e,description:t,avatar:i,onClick:n,active:r,identifier:a,author:o,runtimeType:c,type:s})=>{let p="mcp"===c;return(0,l.FD)(ee.A,{align:"center",clickable:!0,gap:8,horizontal:!0,justify:"space-between",onClick:n,paddingBlock:8,paddingInline:12,style:{position:"relative"},variant:r?"filled":"borderless",children:[(0,l.FD)(d.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,style:{overflow:"hidden",position:"relative"},children:[(0,l.Y)(eF.A,{avatar:i}),(0,l.FD)(d.Flexbox,{flex:1,gap:4,style:{overflow:"hidden",position:"relative"},children:[(0,l.FD)(d.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,l.Y)(P.A,{ellipsis:!0,strong:!0,children:e}),(0,l.Y)(ew.A,{author:o,isMCP:p,type:s})]}),(0,l.Y)(P.A,{ellipsis:!0,fontSize:12,type:"secondary",children:t})]})]}),(0,l.Y)(eN,{identifier:a,isMCP:p,type:s})]})}),ej=(0,r.memo)(({keywords:e,identifier:t,setIdentifier:i})=>{let{t:n}=(0,a.Bd)("plugin"),o=(0,s.j)(A.w.installedPluginMetaList,ef()),c=(0,r.useMemo)(()=>o.filter(t=>[t?.title,t?.description,t.author,...t?.tags||[]].filter(Boolean).join("").toLowerCase().includes((e||"")?.toLowerCase())),[o,e]);return 0===o.length?(0,l.Y)(Y.default,{paddingBlock:40,children:(0,l.Y)(x.A,{description:n("store.empty"),image:x.A.PRESENTED_IMAGE_SIMPLE})}):(0,l.Y)(eb.aY,{data:c,itemContent:(e,n)=>(0,l.Y)(d.Flexbox,{onClick:()=>{i?.({identifier:n.identifier,runtimeType:n.runtimeType,type:n.type})},paddingBlock:2,paddingInline:4,children:(0,l.Y)(eE,{active:t===n.identifier,...n})},n.identifier),overscan:400,style:{height:"100%",width:"100%"},totalCount:c.length})}),eL=(0,r.memo)(({keywords:e})=>{let{t}=(0,a.Bd)("plugin"),i=(0,r.useRef)(null),[n,o]=(0,r.useState)(),[c,p]=(0,r.useState)(),u=(0,y.DP)(),[m]=(0,s.j)(e=>[e.activePluginIdentifier]);return(0,s.j)(e=>0===A.w.installedPluginMetaList(e).length)?(0,l.Y)(Y.default,{height:"75vh",paddingBlock:40,children:(0,l.Y)(x.A,{description:t("store.empty"),image:x.A.PRESENTED_IMAGE_SIMPLE})}):(0,l.FD)(d.Flexbox,{height:"75vh",horizontal:!0,style:{borderTop:`1px solid ${u.colorBorderSecondary}`,overflow:"hidden",position:"relative"},width:"100%",children:[(0,l.Y)(f.Ay,{maxWidth:1024,minWidth:420,placement:"left",children:(0,l.Y)(ej,{identifier:m,keywords:e,setIdentifier:({identifier:e,type:t,runtimeType:l})=>{s.j.setState({activePluginIdentifier:e}),o(t),p(l),i?.current?.scrollTo({top:0})}})}),m?(0,l.Y)(d.Flexbox,{height:"100%",padding:16,ref:i,style:{background:u.colorBgContainerSecondary,overflowX:"hidden",overflowY:"auto"},width:"100%",children:(0,l.Y)(eA,{identifier:m,runtimeType:c,type:n})}):(0,l.Y)(Y.default,{height:"100%",style:{background:u.colorBgContainerSecondary},width:"100%",children:(0,l.Y)(x.A,{description:t("store.emptySelectHint"),image:x.A.PRESENTED_IMAGE_SIMPLE})})]})});var eV=i(33375),eR=i(59681),eK=i(95320);let eO=(0,r.memo)(()=>(0,l.Y)(d.Flexbox,{padding:16,children:(0,l.Y)(eu.A,{active:!0,paragraph:{rows:8},title:!1})}));var eW=i(85017);let eX=(0,r.memo)(()=>{let e=(0,y.DP)();return(0,l.Y)(Y.default,{padding:16,children:(0,l.Y)(S.default,{color:e.colorTextDescription,icon:eW.A,spin:!0})})});var e_=i(30210),eG=i(49334),eU=i(32464);let eq=(0,r.memo)(({identifier:e})=>{let[t,i,n,r,o]=(0,s.j)(t=>[A.w.isPluginInstalled(e)(t),eG.y.isMCPInstalling(e)(t),t.uninstallPlugin,t.installMCPPlugin,t.cancelInstallMCPPlugin]),{t:c}=(0,a.Bd)("plugin"),[p,m]=(0,h.o)(t=>[t.togglePlugin,eB.e.currentAgentPlugins(t).includes(e)]),{modal:g}=eS.A.useApp();return(0,l.Y)(d.Flexbox,{align:"center",horizontal:!0,children:t?(0,l.Y)(ek.A,{menu:{items:[{danger:!0,icon:(0,l.Y)(S.default,{icon:ez.A}),key:"uninstall",label:c("store.actions.uninstall"),onClick:()=>{g.confirm({centered:!0,okButtonProps:{danger:!0},onOk:async()=>{m&&await p(e,!1),await n(e)},title:c("store.actions.confirmUninstall"),type:"error"})}}]},placement:"bottomRight",trigger:["click"],children:(0,l.Y)(B.A,{icon:eT.A,loading:i,onClick:e=>{e.stopPropagation()}})}):i?(0,l.Y)(u.A,{onClick:async t=>{t.stopPropagation(),await o(e)},variant:"filled",children:c("store.actions.cancel")}):(0,l.Y)(u.A,{onClick:async t=>{t.stopPropagation(),await r(e)&&await p(e)},variant:"filled",children:c("store.actions.install")})})}),eH=(0,r.memo)(({name:e,description:t,icon:i,setIdentifier:n,active:a,identifier:o})=>{let c=(0,s.j)(eG.y.getMCPInstallProgress(o),ef()),p=c?.needsConfig,u=c?.step===eU.cD.DEPENDENCIES_REQUIRED,m=(0,r.useRef)(null);return(0,r.useEffect)(()=>{(p||u)&&m.current&&m.current.scrollIntoView({behavior:"smooth",block:"start"})},[p,u]),(0,l.FD)(d.Flexbox,{gap:0,ref:m,children:[(0,l.FD)(ee.A,{align:"center",clickable:!0,gap:16,horizontal:!0,justify:"space-between",onClick:()=>n(o),paddingBlock:8,paddingInline:12,style:{position:"relative"},variant:a?"filled":"borderless",children:[(0,l.FD)(d.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,style:{overflow:"hidden",position:"relative"},children:[(0,l.Y)(eF.A,{avatar:i}),(0,l.FD)(d.Flexbox,{flex:1,gap:4,style:{overflow:"hidden",position:"relative"},children:[(0,l.Y)(P.A,{ellipsis:!0,strong:!0,children:e}),(0,l.Y)(P.A,{ellipsis:!0,fontSize:12,type:"secondary",children:t})]})]}),(0,l.Y)(eq,{identifier:o})]}),!!c&&(0,l.Y)(d.Flexbox,{paddingInline:12,children:(0,l.Y)(e_.A,{identifier:o})})]})}),eQ=(0,r.memo)(({setIdentifier:e})=>{let{t}=(0,a.Bd)("plugin"),[i,n,o,c,p,u,m,g,h,v]=(0,s.j)(e=>[e.isMcpListInit,e.activeMCPIdentifier,e.mcpPluginItems,e.totalCount,e.currentPage,e.mcpSearchKeywords,e.searchLoading,e.useFetchMCPPluginList,e.loadMoreMCPPlugins,e.resetMCPPluginList]);(0,r.useEffect)(()=>{v(u)},[u,v]);let{isLoading:f,error:y}=g({page:p,pageSize:20,q:u});return m||!i?(0,l.Y)(eO,{}):y?(0,l.FD)(Y.default,{gap:12,padding:40,children:[(0,l.Y)(S.default,{icon:eK.A,size:80}),t("store.networkError")]}):0===o.length?(0,l.Y)(Y.default,{paddingBlock:40,children:(0,l.Y)(x.A,{image:x.A.PRESENTED_IMAGE_SIMPLE})}):(0,l.Y)(eb.aY,{components:{Footer:f?eX:void 0},data:o,endReached:h,itemContent:(t,i)=>(0,l.Y)(d.Flexbox,{paddingBlock:2,paddingInline:4,children:(0,l.Y)(eH,{active:n===i.identifier,...i,setIdentifier:e})},i.identifier),overscan:400,style:{height:"100%",width:"100%"},totalCount:c||0})}),eJ=(0,eV.default)(()=>Promise.resolve().then(i.bind(i,61748)),{loadableGenerated:{webpack:()=>[61748]},loading:eR.A,ssr:!1}),eZ=(0,r.memo)(()=>{let e=(0,r.useRef)(null),t=(0,y.DP)(),i=(0,c.wo)(e=>e.isMobile);return(0,l.FD)(d.Flexbox,{height:"75vh",horizontal:!0,style:{borderTop:`1px solid ${t.colorBorderSecondary}`,overflow:"hidden",position:"relative"},width:"100%",children:[(0,l.Y)(f.Ay,{maxWidth:1024,minWidth:i?"100vw":420,placement:"left",children:(0,l.Y)(eQ,{setIdentifier:t=>{s.j.setState({activeMCPIdentifier:t}),e?.current?.scrollTo({top:0})}})}),(0,l.Y)(d.Flexbox,{height:"100%",padding:16,ref:e,style:{background:t.colorBgContainerSecondary,overflowX:"hidden",overflowY:"auto"},width:"100%",children:(0,l.Y)(eJ,{})})]})});var e0=i(97721);let e1=(0,r.memo)(({identifier:e})=>{let[t,i,n,r]=(0,s.j)(t=>[A.w.isPluginInstalled(e)(t),eM.f.isOldPluginInInstallProgress(e)(t),t.installOldPlugin,t.uninstallPlugin]),{t:o}=(0,a.Bd)("plugin"),[c,p]=(0,h.o)(t=>[t.togglePlugin,eB.e.currentAgentPlugins(t).includes(e)]),{modal:m}=eS.A.useApp();return(0,l.Y)(d.Flexbox,{align:"center",horizontal:!0,children:t?(0,l.Y)(ek.A,{menu:{items:[{danger:!0,icon:(0,l.Y)(S.default,{icon:ez.A}),key:"uninstall",label:o("store.actions.uninstall"),onClick:()=>{m.confirm({centered:!0,okButtonProps:{danger:!0},onOk:async()=>{p&&await c(e,!1),await r(e)},title:o("store.actions.confirmUninstall"),type:"error"})}}]},placement:"bottomRight",trigger:["click"],children:(0,l.Y)(B.A,{icon:eT.A,loading:i})}):(0,l.Y)(u.A,{loading:i,onClick:async()=>{await n(e),await c(e)},variant:"filled",children:o("store.actions.install")})})}),e2=(0,r.memo)(({title:e,description:t,avatar:i,onClick:n,active:r,identifier:o,author:c})=>{let{t:u}=(0,a.Bd)("plugin"),m=(0,y.DP)(),g=(0,s.j)(eM.f.getPluginInstallProgress(o),ef()),h=g?u(`mcpInstall.${g.step}`):void 0,v=g?.step===p.FV.ERROR;return(0,l.FD)(d.Flexbox,{gap:0,children:[(0,l.FD)(ee.A,{align:"center",clickable:!0,gap:8,horizontal:!0,justify:"space-between",onClick:n,paddingBlock:8,paddingInline:12,style:{position:"relative"},variant:r?"filled":"borderless",children:[(0,l.FD)(d.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,style:{overflow:"hidden",position:"relative"},children:[(0,l.Y)(eF.A,{avatar:i}),(0,l.FD)(d.Flexbox,{flex:1,gap:4,style:{overflow:"hidden",position:"relative"},children:[(0,l.FD)(d.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,l.Y)(P.A,{ellipsis:!0,strong:!0,children:e}),(0,l.Y)(ew.A,{author:c,type:"plugin"})]}),(0,l.Y)(P.A,{ellipsis:!0,fontSize:12,type:"secondary",children:t})]})]}),(0,l.Y)(e1,{identifier:o})]}),g&&!v&&(0,l.FD)(d.Flexbox,{paddingBlock:4,paddingInline:12,children:[(0,l.Y)(e0.A,{percent:g.progress,showInfo:!1,size:"small",status:"active",strokeColor:{"0%":m.blue,"100%":m.geekblue}}),h&&(0,l.FD)(P.A,{fontSize:11,style:{marginTop:4},type:"secondary",children:["(",g.progress,"%) ",h]})]})]})}),e8=(0,r.memo)(()=>{let{t:e}=(0,a.Bd)("plugin"),[t,i,n,o,c,p,u,m,g,h]=(0,s.j)(e=>[e.isPluginListInit,e.activePluginIdentifier,e.oldPluginItems,e.pluginTotalCount,e.currentPluginPage,e.pluginSearchKeywords,e.pluginSearchLoading,e.useFetchPluginList,e.loadMorePlugins,e.resetPluginList]);(0,r.useEffect)(()=>{h(p)},[p,h]);let{isLoading:v,error:f}=m({page:c,pageSize:20,q:p});return u||!t?(0,l.Y)(eO,{}):f?(0,l.FD)(Y.default,{gap:12,padding:40,children:[(0,l.Y)(S.default,{icon:eK.A,size:80}),e("store.networkError")]}):0===n.length?(0,l.Y)(Y.default,{paddingBlock:40,children:(0,l.Y)(x.A,{image:x.A.PRESENTED_IMAGE_SIMPLE})}):(0,l.Y)(eb.aY,{components:{Footer:v?eX:void 0},data:n,endReached:g,itemContent:(e,t)=>(0,l.Y)(d.Flexbox,{onClick:()=>{s.j.setState({activePluginIdentifier:t.identifier})},paddingBlock:2,paddingInline:4,children:(0,l.Y)(e2,{active:i===t.identifier,...t})},t.identifier),overscan:400,style:{height:"100%",width:"100%"},totalCount:o||0})}),e4=(0,r.memo)(()=>{let e=(0,r.useRef)(null),t=(0,y.DP)();return(0,l.FD)(d.Flexbox,{height:"75vh",horizontal:!0,style:{borderTop:`1px solid ${t.colorBorderSecondary}`,overflow:"hidden",position:"relative"},width:"100%",children:[(0,l.Y)(f.Ay,{maxWidth:1024,minWidth:420,placement:"left",children:(0,l.Y)(e8,{})}),(0,l.Y)(d.Flexbox,{height:"100%",padding:16,ref:e,style:{background:t.colorBgContainerSecondary,overflowX:"hidden",overflowY:"auto"},width:"100%",children:(0,l.Y)(r.Suspense,{fallback:(0,l.Y)(em,{}),children:(0,l.Y)(eg,{})})})]})});var e6=i(44452);let e3=(0,r.memo)(()=>{let{t:e}=(0,a.Bd)("plugin"),[t,i,n]=(0,s.j)(e=>[e.listType,e.mcpSearchKeywords,e.pluginSearchKeywords]),r=t===p.T6.MCP?i:n;return(0,l.Y)(d.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",children:(0,l.Y)(d.Flexbox,{flex:1,children:(0,l.Y)(e6.A,{allowClear:!0,defaultValue:r,onSearch:e=>{t===p.T6.MCP?s.j.setState({mcpSearchKeywords:e,searchLoading:!0}):t===p.T6.Plugin&&s.j.setState({pluginSearchKeywords:e,pluginSearchLoading:!0})},placeholder:e("store.placeholder"),variant:"borderless"})})})}),e5=(0,r.memo)(()=>{let{t:e}=(0,a.Bd)("plugin"),t=(0,c.wo)(e=>e.isMobile),[i]=(0,s.j)(e=>[e.listType]),[n]=(0,r.useState)(),u=[{label:e("store.tabs.mcp"),value:p.T6.MCP},{label:e("store.tabs.old"),value:p.T6.Plugin},{label:e("store.tabs.installed"),value:p.T6.Installed}].filter(Boolean);return(0,l.FD)(d.Flexbox,{gap:8,style:{maxHeight:t?"-webkit-fill-available":"inherit"},width:"100%",children:[(0,l.FD)(d.Flexbox,{gap:8,paddingInline:16,children:[(0,l.FD)(d.Flexbox,{gap:8,horizontal:!0,children:[(0,l.Y)(o.A,{block:!0,onChange:e=>{s.j.setState({listType:e})},options:u,style:{flex:1},value:i,variant:"filled"}),t?null:(0,l.Y)(v,{})]}),(0,l.Y)(e3,{})]}),i===p.T6.MCP&&(0,l.Y)(eZ,{}),i===p.T6.Plugin&&(0,l.Y)(e4,{}),i===p.T6.Installed&&(0,l.Y)(eL,{keywords:n})]})}),e7=(0,r.memo)(({setOpen:e,open:t})=>{let{t:i}=(0,a.Bd)("plugin");return(0,l.Y)(n.A,{allowFullscreen:!0,footer:null,onCancel:()=>{e(!1)},open:t,styles:{body:{overflow:"hidden",padding:0}},title:i("store.title"),width:"min(90%, 1280px)",children:(0,l.Y)(e5,{})})})},59681:(e,t,i)=>{i.d(t,{A:()=>d});var l=i(28802),n=i(59202),r=i(11577),a=i(83034),o=i(80457);let d=(0,a.memo)(()=>{let e=(0,r.DP)();return(0,l.FD)(o.Flexbox,{gap:24,children:[(0,l.FD)(o.Flexbox,{gap:12,children:[(0,l.FD)(o.Flexbox,{align:"center",gap:16,horizontal:!0,width:"100%",children:[(0,l.Y)(n.A.Avatar,{active:!0,size:64}),(0,l.Y)(n.A.Button,{active:!0,style:{height:36,width:200}})]}),(0,l.Y)(n.A.Button,{active:!0,size:"small",style:{width:200}})]}),(0,l.FD)(o.Flexbox,{gap:12,height:54,horizontal:!0,style:{borderBottom:`1px solid ${e.colorBorder}`},children:[(0,l.Y)(n.A.Button,{}),(0,l.Y)(n.A.Button,{})]}),(0,l.FD)(o.Flexbox,{flex:1,gap:16,style:{overflow:"hidden"},width:"100%",children:[(0,l.Y)(n.A,{paragraph:{rows:3},title:!1}),(0,l.Y)(n.A,{paragraph:{rows:8},title:!1}),(0,l.Y)(n.A,{paragraph:{rows:8},title:!1})]})]})})},60851:(e,t,i)=>{i.d(t,{A:()=>y});var l=i(28802),n=i(9274),r=i(12389),a=i(28755),o=i(11577),d=i(31021),c=i.n(d),s=i(80201),p=i(90897),u=i(83034),m=i(59121),g=i(80457),h=i(54483),v=i(53069);let f=(e={})=>Object.entries(e||{}).map(([e,t])=>({id:(0,h.A)(),key:e,value:"string"==typeof t?t:""})),x=(0,o.rU)(({css:e,token:t})=>({container:e`
    position: relative;

    width: 100%;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;
  `,input:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,row:e`
    margin-block-end: 8px;

    &:last-child {
      margin-block-end: 0;
    }
  `,title:e`
    margin-block-end: 8px;
    color: ${t.colorTextTertiary};
  `})),y=(0,u.memo)(({value:e,onChange:t,keyPlaceholder:i,valuePlaceholder:o,addButtonText:d,duplicateKeyErrorText:y,deleteTooltip:Y,style:A})=>{let b,F,{styles:w}=x(),{t:k}=(0,m.Bd)("components"),[S,P]=(0,u.useState)(()=>f(e)),D=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{let t=e||{};c()(t,D.current)||(P(f(t)),D.current=t)},[e]);let C=e=>{let i={};e.forEach(e=>{let t=e.key.trim();t&&(i[t]=(i[t]||0)+1)}),P(e.map(e=>({...e}))),t?.(((e=[])=>{let t={},i=new Set;return(e||[]).slice().reverse().forEach(e=>{let l=e.key.trim();l&&!i.has(l)&&(t[l]="string"==typeof e.value?e.value:"",i.add(l))}),Object.keys(t).reverse().reduce((e,i)=>(e[i]=t[i],e),{})})(e))},z=(b=new Set,F=new Set,S.forEach(e=>{let t=e.key.trim();t&&(b.has(t)?F.add(t):b.add(t))}),F);return(0,l.FD)("div",{className:w.container,style:A,children:[(0,l.FD)(g.Flexbox,{className:w.title,gap:8,horizontal:!0,children:[(0,l.Y)(g.Flexbox,{flex:1,children:i||k("KeyValueEditor.keyPlaceholder")}),(0,l.Y)(g.Flexbox,{flex:2,children:o||k("KeyValueEditor.valuePlaceholder")}),(0,l.Y)(g.Flexbox,{style:{width:30}})]}),(0,l.FD)(g.Flexbox,{width:"100%",children:[S.map(e=>{let t=e.key.trim()&&z.has(e.key.trim());return(0,l.FD)(g.Flexbox,{align:"flex-start",className:w.row,gap:8,horizontal:!0,width:"100%",children:[(0,l.FD)(g.Flexbox,{flex:1,style:{position:"relative"},children:[(0,l.Y)(v.A,{className:w.input,onChange:t=>{var i;return i=e.id,void C(S.map(e=>e.id===i?{...e,key:t}:e))},placeholder:i||k("KeyValueEditor.keyPlaceholder"),status:t?"error":void 0,value:e.key,variant:"filled"}),t&&(0,l.Y)("div",{style:{bottom:"-16px",color:"red",fontSize:"12px",position:"absolute"},children:y||k("KeyValueEditor.duplicateKeyError")})]}),(0,l.Y)(g.Flexbox,{flex:2,children:(0,l.Y)(v.A,{className:w.input,onChange:t=>{var i;return i=e.id,void C(S.map(e=>e.id===i?{...e,value:t}:e))},placeholder:o||k("KeyValueEditor.valuePlaceholder"),value:e.value,variant:"filled"})}),(0,l.Y)(n.A,{icon:s.A,onClick:()=>{var t;return t=e.id,void C(S.filter(e=>e.id!==t))},size:"small",style:{marginTop:4},title:Y||k("KeyValueEditor.deleteTooltip")})]},e.id)}),(0,l.Y)(a.Ay,{block:!0,icon:(0,l.Y)(r.default,{icon:p.A}),onClick:()=>{C([...S,{id:(0,h.A)(),key:"",value:""}])},size:"small",style:{marginTop:S.length>0?16:8},type:"dashed",children:d||k("KeyValueEditor.addButton")})]})]})})},61405:(e,t,i)=>{i.d(t,{A:()=>o});var l=i(28802),n=i(50344),r=i(67072),a=i(11577);let o=(0,i(83034).memo)(({avatar:e,style:t,size:i=40,alt:o})=>{let d=(0,a.DP)();return"MCP_AVATAR"===e?(0,l.Y)(n.A.Avatar,{className:`${d.prefixCls}-avatar`,size:i,style:{flex:"none",overflow:"hidden",...t}}):(0,l.Y)(r.A,{alt:o,avatar:e,size:i,style:{flex:"none",overflow:"hidden",...t}})})},61748:(e,t,i)=>{i.r(t),i.d(t,{default:()=>V});var l=i(28802),n=i(16602),r=i(11577),a=i(83034),o=i(59121),d=i(20480),c=i(80457),s=i(79609),p=i(68398),u=i(31433),m=i(45769),g=i(18503),h=i(5973),v=i(41488),f=i(59681),x=i(259),y=i(74038),Y=i(61451),A=i(12389),b=i(75431),F=i(69033),w=i(80176),k=i(58244),S=i(28755),P=i(89098),D=i(59744),C=i(55825),z=i(55612),T=i(6705),I=i(31591),B=i(25863),$=i(60851),M=i(90215),N=i(63638),E=i(68172);let j=(0,r.rU)(({css:e,token:t})=>({compactForm:e`
    .ant-form-item {
      margin-block-end: ${t.marginSM}px;
    }

    .ant-form-item-label {
      padding-block-end: ${t.paddingXXS}px;

      label {
        height: auto;
        font-size: ${t.fontSizeSM}px;
      }
    }
  `,configFormContainer:e`
    padding: ${t.paddingLG}px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadiusLG}px;
    background: ${t.colorFillAlter};
  `,configHeader:e`
    margin-block-end: ${t.marginLG}px;

    h5 {
      margin-block-end: ${t.marginXS}px !important;
      color: ${t.colorTextHeading};
    }
  `,connectionForm:e`
    padding: ${t.paddingMD}px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadiusLG}px;
    background: ${t.colorFillAlter};
  `,connectionPreview:e`
    padding: ${t.paddingMD}px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadiusLG}px;
    background: ${t.colorFillAlter};
  `,editButton:e`
    position: absolute;
    inset-block-start: ${t.paddingXS}px;
    inset-inline-end: ${t.paddingXS}px;
  `,emptyState:e`
    padding: ${t.paddingXL}px;
    border: 1px dashed ${t.colorBorder};
    border-radius: ${t.borderRadiusLG}px;

    color: ${t.colorTextTertiary};
    text-align: center;

    background: ${t.colorFillQuaternary};
  `,footer:e`
    display: flex;
    gap: ${t.marginSM}px;
    margin-block-start: ${t.marginLG}px;
  `,markdown:e`
    p {
      margin-block-end: ${t.marginXS}px;
      color: ${t.colorTextDescription};
    }
  `,previewItem:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: ${t.paddingXS}px;
    padding-inline: 0;

    &:not(:last-child) {
      border-block-end: 1px solid ${t.colorBorderSecondary};
    }
  `,previewLabel:e`
    display: flex;
    gap: ${t.marginXS}px;
    align-items: center;

    font-size: ${t.fontSizeSM}px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,previewValue:e`
    padding-block: ${t.paddingXXS}px;
    padding-inline: ${t.paddingXS}px;

    font-family: ${t.fontFamilyCode};
    font-size: ${t.fontSizeSM}px;
    font-weight: 600;
    color: ${t.colorText};

    background: ${t.colorFillQuaternary};
  `,sectionTitle:e`
    position: relative;

    display: flex;
    gap: ${t.marginXS}px;
    align-items: center;

    height: 32px;

    font-size: ${t.fontSizeLG}px;
    font-weight: 600;
    color: ${t.colorTextHeading};

    &::after {
      content: '';

      flex: 1;

      height: 1px;
      margin-inline-start: ${t.marginMD}px;

      background: linear-gradient(to right, ${t.colorBorder}, transparent);
    }
  `})),L=(0,a.memo)(({identifier:e})=>{let{styles:t}=j(),{t:i}=(0,o.Bd)(["plugin","common"]),[n]=w.A.useForm(),[r]=w.A.useForm(),[d,s]=(0,a.useState)(!1),[p,u]=(0,a.useState)(!1),[m,g]=(0,a.useState)(!1),[h,v]=(0,y.j)(e=>[e.updatePluginSettings,e.updateInstallMcpPlugin]),{message:f}=k.A.useApp(),x=(0,y.j)(E.w.getInstalledPluginById(e)),Y=(0,y.j)(E.w.getPluginSettingsById(e));if(!x)return null;let L=x.customParams?.mcp,V=L?.type==="stdio",R=async t=>{u(!0);try{await v(e,t),f.success(i("settings.messages.connectionUpdateSuccess")),g(!1)}catch(e){console.error("Connection update failed:",e),f.error(i("settings.messages.connectionUpdateFailed"))}finally{u(!1)}},K=async t=>{s(!0);try{await h(e,t.env||{},{override:!0}),f.success(i("settings.messages.envUpdateSuccess"))}catch(e){console.error("Settings update failed:",e),f.error(i("settings.messages.envUpdateFailed"))}finally{s(!1)}};return(0,l.Y)(c.Flexbox,{paddingBlock:8,paddingInline:12,children:(0,l.FD)(c.Flexbox,{gap:24,children:[(0,l.FD)(c.Flexbox,{gap:24,children:[(0,l.FD)("div",{className:t.sectionTitle,children:[(0,l.Y)(C.A,{size:16}),i("settings.connection.title"),!m&&(0,l.Y)(S.Ay,{className:t.editButton,icon:(0,l.Y)(z.A,{size:12}),onClick:()=>g(!0),size:"small",type:"text",children:i("settings.edit")})]}),m?(0,l.Y)("div",{className:t.connectionForm,children:(0,l.FD)(w.A,{className:t.compactForm,form:n,initialValues:L,layout:"vertical",onFinish:R,children:[L?.type==="http"&&(0,l.Y)(w.A.Item,{label:i("settings.connection.url"),name:"url",rules:[{message:i("settings.rules.urlRequired"),required:!0}],children:(0,l.Y)(F.A,{placeholder:"https://mcp.example.com/server",size:"small"})}),L?.type==="stdio"&&(0,l.FD)(l.FK,{children:[(0,l.Y)(w.A.Item,{label:i("settings.connection.command"),name:"command",rules:[{message:i("settings.rules.commandRequired"),required:!0}],children:(0,l.Y)(M.A,{placeholder:"npx, uv, python..."})}),(0,l.Y)(w.A.Item,{label:i("settings.connection.args"),name:"args",rules:[{message:i("settings.rules.argsRequired"),required:!0}],children:(0,l.Y)(N.A,{placeholder:"e.g: mcp-hello-world"})})]}),(0,l.Y)("div",{className:t.footer,children:(0,l.FD)(P.A,{children:[(0,l.Y)(S.Ay,{htmlType:"submit",icon:(0,l.Y)(I.A,{size:12}),loading:p,type:"primary",children:i("common:save")}),(0,l.Y)(S.Ay,{onClick:()=>{n.resetFields(),g(!1)},children:i("common:cancel")})]})})]})}):(0,l.FD)(c.Flexbox,{paddingInline:8,children:[(0,l.FD)("div",{className:t.previewItem,children:[(0,l.Y)("span",{className:t.previewLabel,children:i("settings.connection.type")}),(0,l.FD)(c.Flexbox,{horizontal:!0,children:[(0,l.Y)(A.default,{icon:T.A}),(0,l.Y)(b.A,{className:t.previewValue,children:L?.type?.toUpperCase()||"Unknown"})]})]}),L?.type==="http"&&L?.url&&(0,l.FD)("div",{className:t.previewItem,children:[(0,l.Y)("span",{className:t.previewLabel,children:i("settings.connection.url")}),(0,l.Y)("span",{className:t.previewValue,children:L.url})]}),L?.type==="stdio"&&(0,l.FD)(l.FK,{children:[L?.command&&(0,l.FD)("div",{className:t.previewItem,children:[(0,l.Y)("span",{className:t.previewLabel,children:i("settings.connection.command")}),(0,l.Y)("span",{className:t.previewValue,children:L.command})]}),L?.args&&L.args.length>0&&(0,l.FD)("div",{className:t.previewItem,children:[(0,l.Y)("span",{className:t.previewLabel,children:i("settings.connection.args")}),(0,l.Y)("span",{className:t.previewValue,children:L.args.join(" ")})]})]})]})]}),V&&(0,l.FD)(c.Flexbox,{gap:12,children:[(0,l.FD)("div",{className:t.sectionTitle,children:[(0,l.Y)(B.A,{size:16}),i("settings.configuration.title")]}),(0,l.Y)(b.A,{style:{fontSize:12},type:"secondary",children:i("settings.envConfigDescription")}),(0,l.FD)(w.A,{form:r,initialValues:{env:Y},layout:"vertical",onFinish:K,children:[(0,l.Y)(w.A.Item,{name:"env",style:{marginBottom:0},children:(0,l.Y)($.A,{addButtonText:i("dev.mcp.env.add"),keyPlaceholder:"VARIABLE_NAME"})}),(0,l.Y)("div",{className:t.footer,children:(0,l.FD)(P.A,{children:[(0,l.Y)(S.Ay,{htmlType:"submit",icon:(0,l.Y)(I.A,{size:14}),loading:d,type:"primary",children:i("common:save")}),(0,l.Y)(S.Ay,{onClick:()=>r.resetFields(),children:i("common:reset")})]})})]})]}),!V&&(0,l.FD)("div",{children:[(0,l.FD)("div",{className:t.sectionTitle,children:[(0,l.Y)(B.A,{size:16}),i("settings.configuration.title")]}),(0,l.Y)("div",{className:t.emptyState,children:(0,l.Y)(D.A.Text,{type:"secondary",children:i("settings.httpTypeNotice")})})]})]})})}),V=(0,a.memo)(({identifier:e})=>{let[t,i]=(0,a.useState)(Y.lX.Overview),{t:A}=(0,o.Bd)("plugin"),b=(0,r.DP)(),[F,w]=(0,y.j)(e=>[e.activeMCPIdentifier,e.isMcpListInit]),k=e??F,{data:S,isLoading:P}=(0,x.Q)(e=>e.useFetchMcpDetail)({identifier:k});return!w||P?(0,l.Y)(f.A,{}):k?(0,l.Y)(p.p_,{config:S,children:(0,l.FD)(c.Flexbox,{gap:16,children:[(0,l.Y)(u.A,{inModal:!0}),(0,l.Y)(m.A,{activeTab:t,inModal:!0,setActiveTab:i}),(0,l.FD)(c.Flexbox,{gap:24,children:[t===Y.lX.Settings&&(0,l.Y)(L,{identifier:k}),t===Y.lX.Overview&&(0,l.Y)(g.A,{inModal:!0}),t===Y.lX.Deployment&&(0,l.Y)(s.A,{}),t===Y.lX.Schema&&(0,l.Y)(h.A,{}),t===Y.lX.Score&&(0,l.Y)(v.A,{})]})]})}):(0,l.Y)(d.default,{height:"100%",style:{background:b.colorBgContainerSecondary},width:"100%",children:(0,l.Y)(n.A,{description:A("store.emptySelectHint"),image:n.A.PRESENTED_IMAGE_SIMPLE})})})},63638:(e,t,i)=>{i.d(t,{A:()=>u});var l=i(28802),n=i(69033),r=i(15447),a=i(9274),o=i(90897),d=i(91951),c=i(83034),s=i(59121),p=i(80457);let u=(0,c.memo)(({value:e=[],onChange:t,...i})=>{let{t:u}=(0,s.Bd)("components"),m=(0,c.useCallback)(()=>{t?.([...e,""])},[e,t]),g=(0,c.useCallback)(i=>{let l=e.filter((e,t)=>t!==i);t?.(l)},[e,t]),h=(0,c.useCallback)((i,l)=>{let n=[...e];n[i]=l,t?.(n)},[e,t]),v=(0,c.useCallback)((t,i)=>{"Enter"===t.key?(t.preventDefault(),i===e.length-1&&m()):"Backspace"===t.key&&""===t.currentTarget.value&&e.length>1&&(t.preventDefault(),g(i))},[e.length,m,g]);return(0,l.Y)(p.Flexbox,{gap:8,style:{width:"100%"},children:0===e.length?(0,l.FD)(p.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(n.A,{...i,onBlur:e=>{e.target.value.trim()&&t?.([e.target.value.trim()]),i.onBlur?.(e)},placeholder:u("ArgsInput.enterFirstArgument"),style:{flex:1}}),(0,l.Y)(r.A,{icon:o.A,onClick:m,size:"small",type:"primary"})]}):(0,l.FD)(l.FK,{children:[e.map((e,t)=>(0,l.FD)(p.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(n.A,{onChange:e=>h(t,e.target.value),onKeyDown:e=>v(e,t),placeholder:u("ArgsInput.argumentPlaceholder",{index:t+1}),style:{flex:1},value:e}),(0,l.Y)(a.A,{icon:d.A,onClick:()=>g(t),size:"small",style:{flexShrink:0}})]},t)),(0,l.Y)(r.A,{icon:o.A,onClick:m,size:"small",style:{alignSelf:"flex-start"},type:"dashed",children:u("ArgsInput.addArgument")})]})})})},78778:(e,t,i)=>{i.d(t,{A:()=>ez});var l=i(28802),n=i(15447),r=i(78497),a=i(89026),o=i(3136),d=i(80122),c=i(12389),s=i(58244),p=i(80176),u=i(73451),m=i(14654),g=i(99445),h=i(83034),v=i(59121),f=i(80457),x=i(45628),y=i(64861),Y=i(87662),A=i(17115),b=i(69033),F=i(53860),w=i(36475),k=i(28755),S=i(49875),P=i(31021),D=i.n(P),C=i(60851),z=i(90215),T=i(74038),I=i(68172),B=i(49334),$=i(63638),M=i(11577),N=i(20439),E=i(54759);let j=(0,M.rU)(({css:e,token:t})=>({container:e`
    margin-block-end: ${t.marginLG}px;
  `,header:e`
    cursor: pointer;

    display: flex;
    align-items: center;

    border-radius: ${t.borderRadius}px;

    color: ${t.colorTextTertiary};

    transition: all ${t.motionDurationMid} ease;

    &:hover {
      color: ${t.colorText};
    }
  `,title:e`
    margin-inline-start: 4px;
    font-weight: ${t.fontWeightStrong};
    color: ${t.colorText};
  `})),L=({title:e,children:t,defaultExpanded:i=!1})=>{let{styles:n,cx:r}=j(),[a,o]=(0,h.useState)(i);return(0,l.FD)("div",{className:n.container,children:[(0,l.FD)("div",{className:r(n.header),onClick:()=>o(!a),children:[a?(0,l.Y)(N.A,{size:16}):(0,l.Y)(E.A,{size:16}),(0,l.Y)("span",{className:n.title,children:e})]}),a&&(0,l.Y)("div",{children:t})]})};var V=i(75431),R=i(6563),K=i(59804),O=i(6705),W=i(20480);let X=(0,M.rU)(({token:e,css:t})=>({active:t`
    border-color: ${e.colorPrimary};

    &:hover {
      border-color: ${e.colorPrimary};
    }
  `,cardDescription:t`
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextDescription};
  `,cardTitle:t`
    font-weight: bold;
  `,checkIcon:t`
    position: absolute;
    inset-block-start: 12px;
    inset-inline-end: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    color: ${e.colorBgContainer};

    background-color: ${e.colorPrimary};
  `,container:t`
    cursor: pointer;

    position: relative;

    width: 100%;
    padding-block: 12px;
    padding-inline: 16px;
    border: 1px solid ${e.colorBorder};
    border-radius: ${e.borderRadiusLG}px;

    background-color: ${e.colorBgContainer};

    transition:
      border-color 0.3s ${e.motionEaseInOut},
      box-shadow 0.3s ${e.motionEaseInOut};

    &:hover {
      border-color: ${e.colorPrimaryHover};
    }
  `,disabled:t`
    cursor: not-allowed;
    border-color: ${e.colorBorder};
    opacity: 0.5;
    background-color: ${e.colorBgContainerDisabled};

    &:hover {
      border-color: ${e.colorBorder};
    }
  `,featureIcon:t`
    color: ${e.colorTextSecondary};
  `,featureItem:t`
    display: flex;
    gap: 8px;
    align-items: center;
  `,featureText:t`
    font-size: ${e.fontSizeSM}px;
    color: ${e.colorTextSecondary};
  `})),_=(0,h.memo)(({children:e})=>{let{styles:t,theme:i}=X();return(0,l.FD)("div",{className:t.featureItem,children:[(0,l.Y)(W.default,{className:t.featureIcon,children:(0,l.Y)(R.A,{color:i.colorSuccess,size:16})}),(0,l.Y)("div",{className:t.featureText,children:e})]})}),G=({value:e,onChange:t})=>{let{t:i}=(0,v.Bd)("plugin"),{styles:n,cx:r}=X(),a=[{description:i("dev.mcp.type.httpShortDesc"),features:[i("dev.mcp.type.httpFeature1"),i("dev.mcp.type.httpFeature2")],icon:K.A,label:"Streamable HTTP",value:"http"},{description:i("dev.mcp.type.stdioShortDesc"),features:[i("dev.mcp.type.stdioFeature1"),i("dev.mcp.type.stdioFeature2")],icon:O.A,label:"STDIO",value:"stdio"}];return(0,l.Y)(f.Flexbox,{gap:16,horizontal:!0,width:"100%",children:a.map(({label:a,description:o,features:d,value:s,icon:p})=>{let u=e===s,m="stdio"===s&&!y.xl;return(0,l.FD)(f.Flexbox,{className:r(n.container,u&&n.active,m&&n.disabled),gap:12,onClick:m?void 0:()=>{t?.(s)},style:{flex:1},children:[(0,l.Y)(W.default,{className:n.checkIcon,style:{opacity:+!!u},children:(0,l.Y)(R.A,{size:14})}),(0,l.FD)(f.Flexbox,{align:"flex-start",gap:12,horizontal:!0,children:[(0,l.Y)(W.default,{height:22,children:(0,l.Y)(c.default,{icon:p,style:{fontSize:16}})}),(0,l.FD)(f.Flexbox,{children:[(0,l.Y)("div",{className:n.cardTitle,children:a}),(0,l.Y)("div",{className:n.cardDescription,children:o})]})]}),(0,l.Y)(f.Flexbox,{gap:8,children:d.map(e=>(0,l.Y)(_,{children:e},e))}),m&&(0,l.Y)(V.A,{style:{fontSize:12,marginTop:8},type:"warning",children:i("dev.mcp.type.stdioNotAvailable")})]},s)})})};var U=i(40681),q=i(60062),H=i(47581);let Q=({form:e,isEditMode:t,onClearConnectionError:i})=>{let{t:n}=(0,v.Bd)(["plugin","common"]),r=(0,T.j)(I.w.storeAndInstallPluginsIdList),[a,o]=(0,h.useState)(!1),[c,s]=(0,h.useState)(""),[p,u]=(0,h.useState)(null);return a?(0,l.FD)(f.Flexbox,{gap:8,children:[p&&(0,l.Y)(d.A,{message:p,showIcon:!0,style:{marginBottom:8},type:"error"}),(0,l.Y)(U.A,{autoSize:{maxRows:15,minRows:10},onChange:e=>{s(e.target.value),p&&u(null)},placeholder:`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-api-key>"
      }
    }
  }
}`,value:c}),(0,l.FD)(f.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,l.Y)(k.Ay,{className:q.p$.nodrag,onClick:()=>{o(!1)},size:"small",children:n("common:cancel")}),(0,l.Y)(k.Ay,{onClick:()=>{u(null),i?.();let l=c.trim();if(!l)return void u(n("dev.mcp.quickImportError.empty"));let a=(e=>{let t=(0,H.N)(e);if(t&&"object"==typeof t&&!Array.isArray(t))if("mcpServers"in t&&"object"==typeof t.mcpServers&&null!==t.mcpServers){let e=Object.keys(t.mcpServers);if(!(e.length>0))return{errorCode:"EmptyMcpServers",status:"error"};{let i=e[0],l=t.mcpServers[i];if(l&&"object"==typeof l&&!Array.isArray(l)){let e,t={};if(l.command&&Array.isArray(l.args))e="stdio",t={...l,type:e};else{if(!l.url)return{errorCode:"InvalidMcpStructure",identifier:i,status:"error"};t={type:e="http",url:l.url}}return{identifier:i,mcpConfig:t,status:"success"}}return{errorCode:"InvalidMcpStructure",identifier:i,status:"error"}}}else{let e=Object.keys(t);if(1!==e.length)return{errorCode:"InvalidJsonStructure",status:"error"};{let i=e[0],l=t[i];if(!l||"object"!=typeof l||Array.isArray(l))return{errorCode:"InvalidMcpStructure",identifier:i,status:"error"};{let e,t={};if(l.command&&Array.isArray(l.args))e="stdio",t={...l,type:e};else{if(!l.url)return{errorCode:"InvalidMcpStructure",identifier:i,status:"error"};t={type:e="http",url:l.url}}return{identifier:i,mcpConfig:t,status:"success"}}}}return{status:"noop"}})(l);if("error"===a.status)return void u(a.errorCode);if("noop"===a.status)return void u(n("dev.mcp.quickImportError.invalidJson"));let{identifier:d,mcpConfig:p}=a;if(!y.xl&&"stdio"===p.type)return void u(n("dev.mcp.stdioNotSupported"));if(!t&&r.includes(d)){e.setFieldsValue({customParams:{mcp:p},identifier:d}),e.validateFields(["identifier"]),o(!1),s("");return}e.setFieldsValue({customParams:{mcp:p},identifier:d}),e.setFields([{errors:[],name:"identifier"}]),o(!1),u(null)},size:"small",type:"primary",children:n("common:import")})]})]}):(0,l.Y)("div",{children:(0,l.Y)(k.Ay,{block:!0,onClick:()=>{u(null),o(!0)},style:{marginBottom:16},type:"dashed",children:n("dev.mcp.quickImport")})})},J=["customParams","mcp","url"],Z=["customParams","mcp","command"],ee=["customParams","mcp","args"],et=["customParams","mcp","env"],ei=["customParams","mcp","type"],el=["customParams","description"],en=["customParams","mcp","auth","type"],er=["customParams","mcp","auth","token"],ea=["customParams","mcp","headers"],eo=({form:e,isEditMode:t})=>{let{t:i}=(0,v.Bd)("plugin"),n=p.A.useWatch(ei,e),r=p.A.useWatch(en,e),a=(0,T.j)(I.w.storeAndInstallPluginsIdList),[o,c]=(0,h.useState)(!1),s=(0,T.j)(e=>e.testMcpConnection),u=e.getFieldsValue(),m=u?.identifier||"temp-test-id",g=(0,T.j)(B.y.getMCPConnectionTestState(m),D()),[x,y]=(0,h.useState)(null),Y=async()=>{c(!0),y(null);let t=!1;try{let i=[..."http"===n?[J]:[Z,ee]];if("http"===n){i.push(en);let t=e.getFieldValue(en);"bearer"===t&&i.push(er)}await e.validateFields(i),t=!0}catch{}if(!t)return void c(!1);try{let t=e.getFieldsValue(),l=t.identifier,n=t.customParams?.mcp,r=t.customParams?.description,a=t.customParams?.avatar,o=await s({connection:n,identifier:l,metadata:{avatar:a,description:r}});if(o.success&&o.manifest)e.setFieldsValue({manifest:o.manifest}),y(null);else if(o.error){let e=i("error.testConnectionFailed",{error:o.error});y(e)}}catch(e){y(i("error.testConnectionFailed",{error:e.message||i("unknownError")}))}finally{c(!1)}};return(0,l.FD)(l.FK,{children:[(0,l.Y)(Q,{form:e,isEditMode:t,onClearConnectionError:()=>y(null)}),(0,l.Y)(p.A,{form:e,layout:"vertical",children:(0,l.FD)(f.Flexbox,{children:[(0,l.Y)(p.A.Item,{initialValue:"http",label:i("dev.mcp.type.title"),name:["customParams","mcp","type"],rules:[{required:!0}],children:(0,l.Y)(G,{})}),(0,l.Y)(A.A,{desc:i("dev.mcp.identifier.desc"),label:i("dev.mcp.identifier.label"),name:"identifier",rules:[{message:i("dev.mcp.identifier.required"),required:!0},{message:i("dev.mcp.identifier.invalid"),pattern:/^[\w-]+$/},t?{}:{message:i("dev.meta.identifier.errorDuplicate"),validator:async()=>{let t=e.getFieldValue("identifier");if(!t)return!0;if(a.includes(t))throw Error("Duplicate")}}],tag:"identifier",children:(0,l.Y)(b.A,{placeholder:i("dev.mcp.identifier.placeholder")})}),"http"===n&&(0,l.FD)(l.FK,{children:[(0,l.Y)(A.A,{desc:i("dev.mcp.url.desc"),label:i("dev.mcp.url.label"),name:J,rules:[{message:i("dev.mcp.url.required"),required:!0},{message:i("dev.mcp.url.invalid"),validator:async(e,t)=>{if(!t)return!0;new URL(t)}}],tag:"url",children:(0,l.Y)(b.A,{placeholder:"https://mcp.higress.ai/mcp-github/xxxxx"})}),(0,l.Y)(A.A,{desc:i("dev.mcp.auth.desc"),initialValue:"none",label:i("dev.mcp.auth.label"),name:en,children:(0,l.Y)(w.Ay.Group,{options:[{label:i("dev.mcp.auth.none"),value:"none"},{label:i("dev.mcp.auth.bear"),value:"bearer"}],style:{width:"100%"}})}),"bearer"===r&&(0,l.Y)(A.A,{desc:i("dev.mcp.auth.token.desc"),label:i("dev.mcp.auth.token.label"),name:er,rules:[{message:i("dev.mcp.auth.token.required"),required:!0}],children:(0,l.Y)(F.A,{placeholder:i("dev.mcp.auth.token.placeholder")})}),(0,l.Y)(L,{title:i("dev.mcp.advanced.title"),children:(0,l.Y)(A.A,{desc:i("dev.mcp.headers.desc"),label:i("dev.mcp.headers.label"),name:ea,children:(0,l.Y)(C.A,{addButtonText:i("dev.mcp.headers.add")})})})]}),"stdio"===n&&(0,l.FD)(l.FK,{children:[(0,l.Y)(A.A,{desc:i("dev.mcp.command.desc"),label:i("dev.mcp.command.label"),name:Z,rules:[{message:i("dev.mcp.command.required"),required:!0}],tag:"command",children:(0,l.Y)(z.A,{placeholder:i("dev.mcp.command.placeholder")})}),(0,l.Y)(A.A,{desc:i("dev.mcp.args.desc"),label:i("dev.mcp.args.label"),name:ee,rules:[{message:i("dev.mcp.args.required"),required:!0}],tag:"args",children:(0,l.Y)($.A,{placeholder:i("dev.mcp.args.placeholder")})}),(0,l.Y)(A.A,{extra:i("dev.mcp.env.desc"),label:i("dev.mcp.env.label"),name:et,tag:"env",children:(0,l.Y)(C.A,{addButtonText:i("dev.mcp.env.add"),keyPlaceholder:"VARIABLE_NAME"})})]}),(0,l.Y)(A.A,{colon:!1,label:i("dev.mcp.testConnectionTip"),layout:"horizontal",children:(0,l.Y)(f.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"flex-end",children:(0,l.Y)(k.Ay,{loading:o,onClick:Y,type:n?"primary":void 0,children:i("dev.mcp.testConnection")})})}),(x||g.error)&&(0,l.Y)(d.A,{closable:!0,message:x||g.error,onClose:()=>y(null),showIcon:!0,style:{marginBottom:16},type:"error"}),(0,l.Y)(A.A,{name:"manifest",noStyle:!0}),(0,l.Y)(S.A,{}),(0,l.Y)(A.A,{desc:i("dev.mcp.desc.desc"),label:i("dev.mcp.desc.label"),name:el,tag:"description",children:(0,l.Y)(b.A,{placeholder:i("dev.mcp.desc.placeholder")})}),(0,l.Y)(A.A,{label:i("dev.mcp.avatar.label"),name:["customParams","avatar"],tag:"avatar",children:(0,l.Y)(b.A,{placeholder:"https://plugin-avatar.com"})})]})})]})};var ed=i(28726),ec=i(94195),es=i(55753),ep=i(61405),eu=i(36740),em=i(23211),eg=i(89098),eh=i(53809);let ev=(0,M.rU)(({css:e,token:t})=>({apiDesc:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,apiHeader:e`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,apiTitle:e`
    font-family: ${t.fontFamilyCode};
  `,emptyState:e`
    padding: 32px;
    color: ${t.colorTextDisabled};
    text-align: center;
  `,header:e`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-block-end: 24px;
  `,paramDesc:e`
    font-size: 12px;
    line-height: 18px;
    color: ${t.colorTextSecondary};
  `,paramGrid:e`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 12px;
    align-items: center;

    margin-block-end: 12px;
  `,paramName:e`
    display: flex;
    gap: 6px;
    align-items: center;
    font-family: monospace;
  `,params:e`
    color: ${t.colorTextQuaternary};
  `,required:e`
    margin-inline-start: 2px;
    color: ${t.colorError};
  `,searchIcon:e`
    position: absolute;
    z-index: 1;
    inset-block-start: 50%;
    inset-inline-start: 12px;
    transform: translateY(-50%);

    color: ${t.colorTextSecondary};
  `,searchWrapper:e`
    position: relative;
  `,typeTag:e`
    height: 20px;
    padding-block: 0;
    padding-inline: 6px;

    font-size: 12px;
    line-height: 20px;
  `})),ef=(0,h.memo)(({api:e})=>{let{styles:t,theme:i}=ev(),[n,r]=(0,h.useState)(!1),{t:a}=(0,v.Bd)("plugin"),d=Object.entries(e.parameters.properties||{});return(0,l.FD)(ed.A,{gap:8,padding:16,children:[(0,l.FD)("div",{className:t.apiHeader,onClick:()=>r(!n),children:[(0,l.FD)(f.Flexbox,{gap:8,children:[(0,l.Y)("div",{className:t.apiTitle,children:e.name}),(0,l.Y)("div",{className:t.apiDesc,children:e.description})]}),(0,l.Y)(c.default,{icon:n?N.A:E.A})]}),n&&(0,l.Y)(f.Flexbox,{gap:12,padding:16,style:{background:i.colorFillQuaternary,borderRadius:6},children:0===d.length?(0,l.Y)("div",{className:t.params,children:a("dev.preview.api.noParams")}):(0,l.FD)(l.FK,{children:[(0,l.Y)("div",{className:t.params,children:a("dev.preview.api.params")}),(0,l.Y)(eg.A,{direction:"vertical",style:{width:"100%"},children:d.map(([i,n])=>{let r=e.parameters.required?.includes(i);return(0,l.FD)("div",{className:t.paramGrid,children:[(0,l.FD)("div",{className:t.paramName,children:[(0,l.Y)("span",{children:i}),r&&(0,l.Y)("span",{className:t.required,children:"*"}),(0,l.Y)(o.A,{className:t.typeTag,children:n.type})]}),(0,l.Y)("div",{className:t.paramDesc,children:n.description})]},i)})})]})})]})}),ex=(0,h.memo)(({apis:e=[]})=>{let{styles:t}=ev(),[i,n]=(0,h.useState)(""),{t:r}=(0,v.Bd)("plugin"),a=e.filter(e=>e.name.toLowerCase().includes(i.toLowerCase())||e.description.toLowerCase().includes(i.toLowerCase()));return(0,l.FD)(f.Flexbox,{gap:8,width:"100%",children:[(0,l.Y)("div",{className:t.searchWrapper,children:(0,l.Y)(eh.A.Search,{onChange:e=>n(e.target.value),placeholder:r("dev.preview.api.searchPlaceholder"),value:i})}),(0,l.Y)(eg.A,{direction:"vertical",style:{width:"100%"},children:a.length>0?a.map((e,t)=>(0,l.Y)(ef,{api:e},t)):(0,l.Y)("div",{className:t.emptyState,children:r("dev.preview.api.noResults")})})]})});var ey=i(59533);let eY=(0,M.rU)(({token:e,css:t})=>({container:t`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: ${e.paddingLG}px;
  `,description:t`
    color: ${e.colorTextSecondary};
    text-align: center;
  `,iconWrapper:t`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    border-radius: 50%;

    background-color: ${e.colorPrimaryBg};
  `,line:t`
    height: 6px;
    border-radius: 3px;
    background: ${e.colorBorderSecondary};
  `,placeholderLine:t`
    height: 6px;
    margin-block: ${e.marginXS}px;
    margin-inline: 0;
    border-radius: ${e.borderRadiusLG}px;

    background-color: ${e.colorBorderSecondary};
  `,title:t`
    margin-block-end: ${e.marginXS}px;
    font-size: ${e.fontSizeLG}px;
    font-weight: 500;
  `}));function eA(){let{styles:e}=eY(),{t}=(0,v.Bd)("plugin");return(0,l.FD)("div",{className:e.container,children:[(0,l.Y)("div",{className:e.iconWrapper,children:(0,l.Y)(c.default,{icon:ey.A,size:32})}),(0,l.Y)(V.A,{as:"h4",className:e.title,children:t("dev.preview.empty.title")}),(0,l.Y)(V.A,{className:e.description,children:t("dev.preview.empty.desc")}),(0,l.FD)(eg.A,{align:"center",direction:"vertical",children:[(0,l.Y)("div",{className:e.line,style:{width:128}}),(0,l.Y)("div",{className:e.line,style:{width:96}}),(0,l.Y)("div",{className:e.line,style:{width:48}})]})]})}let eb=(0,h.memo)(({form:e})=>{let{t}=(0,v.Bd)("plugin"),i=(0,M.DP)(),n=p.A.useWatch(["manifest"],e),r=n?.meta;return n?(0,l.FD)(f.Flexbox,{flex:2,gap:24,padding:12,style:{background:i.colorBgLayout,overflowY:"auto"},children:[(0,l.FD)(ed.A,{gap:16,horizontal:!0,justify:"space-between",padding:16,title:t("dev.preview.card"),variant:"outlined",children:[(0,l.FD)(f.Flexbox,{gap:16,horizontal:!0,children:[(0,l.Y)(ep.A,{avatar:em.V.getPluginAvatar(r),size:40}),(0,l.FD)(f.Flexbox,{gap:2,children:[(0,l.FD)(f.Flexbox,{align:"center",gap:8,horizontal:!0,children:[em.V.getPluginTitle(r)||"Plugin Title",(0,l.Y)(eu.A,{type:"customPlugin"})]}),(0,l.Y)(V.A,{style:{fontSize:12},type:"secondary",children:em.V.getPluginDesc(r)||"Plugin Description"})]})]}),n&&(0,l.Y)(es.A,{manifest:n,children:(0,l.Y)(f.Flexbox,{children:(0,l.Y)(k.Ay,{icon:(0,l.Y)(c.default,{icon:ec.A}),children:t("dev.mcp.previewManifest")})})})]}),n&&(0,l.Y)(ex,{apis:n.api})]}):(0,l.Y)(f.Flexbox,{flex:2,height:"100%",style:{background:i.colorBgLayout},children:(0,l.Y)(eA,{})})});var eF=i(9274),ew=i(87508),ek=i(58751),eS=i(98724),eP=i(49565);let eD=(0,h.memo)(({value:e,onChange:t})=>{let{t:i}=(0,v.Bd)("plugin");return(0,l.FD)(f.Flexbox,{gap:8,horizontal:!0,onClick:()=>{t?.(!e)},style:{cursor:"pointer"},children:[(0,l.Y)(ew.A,{checked:e})," ",i("dev.customParams.useProxy.label")]})}),eC=(0,h.memo)(({form:e,isEditMode:t})=>{let{t:i}=(0,v.Bd)("plugin"),[n,r]=(0,h.useState)(),a=["customParams","manifestUrl"],o=["customParams","useProxy"],d=(0,T.j)(I.w.storeAndInstallPluginsIdList);return(0,l.FD)(p.A,{form:e,layout:"vertical",children:[(0,l.Y)(A.A,{desc:(0,l.FD)(f.Flexbox,{horizontal:!0,justify:"space-between",style:{marginTop:8},children:[i("dev.meta.manifest.desc",{appName:eS.Se}),n&&(0,l.Y)(es.A,{manifest:n,children:(0,l.Y)(eF.A,{icon:ec.A,size:"small",title:i("dev.meta.manifest.preview")})})]}),hasFeedback:!0,label:i("dev.meta.manifest.label"),name:a,required:!0,rules:[{required:!0},{message:i("error.urlError"),pattern:/^https?:\/\/.*/},{validator:async(t,l)=>{if(!l)return!0;try{let t=e.getFieldValue(o),i=await eP.Q.getToolManifest(l,t);r(i),e.setFieldsValue({identifier:i.identifier,manifest:i})}catch(e){throw i(`error.${e.message}`,{error:e.cause})}}},t?{}:{message:i("dev.meta.identifier.errorDuplicate"),validator:async()=>{let t=e.getFieldValue("identifier");if(!t)return!0;if(d.includes(t))throw Error("Duplicate")}}],style:{marginBottom:0},children:(0,l.Y)(b.A,{placeholder:"http://localhost:3400/manifest-dev.json",suffix:(0,l.Y)(eF.A,{icon:ek.A,onClick:t=>{t.stopPropagation(),e.validateFields([a,"identifier"])},size:"small",title:i("dev.meta.manifest.refresh")})})}),(0,l.Y)(A.A,{name:o,noStyle:!0,children:(0,l.Y)(eD,{})}),(0,l.Y)(A.A,{name:"identifier",noStyle:!0}),(0,l.Y)(A.A,{name:"manifest",noStyle:!0})]})}),ez=(0,h.memo)(({open:e,mode:t="create",value:i,onValueChange:A,onSave:b,onOpenChange:F,onDelete:w})=>{let k="edit"===t,[S,P]=(0,h.useState)("mcp"),{t:D}=(0,v.Bd)("plugin"),{message:C}=s.A.useApp(),[z,T]=(0,h.useState)(!1),{mobile:I}=(0,m.Q)(),[B]=p.A.useForm();(0,h.useEffect)(()=>{B.setFieldsValue(i)},[]),(0,h.useEffect)(()=>{"create"!==t||e||B.resetFields()},[e]);let $=I?{flex:1}:{margin:0},M=(0,l.FD)(f.Flexbox,{flex:1,gap:12,horizontal:!0,justify:"space-between",children:[k?(0,l.Y)(u.A,{arrow:!1,cancelText:D("cancel",{ns:"common"}),okButtonProps:{danger:!0,type:"primary"},okText:D("ok",{ns:"common"}),onConfirm:()=>{w?.(),C.success(D("dev.deleteSuccess"))},placement:"topLeft",title:D("dev.confirmDeleteDevPlugin"),children:(0,l.Y)(n.A,{danger:!0,style:$,children:D("delete",{ns:"common"})})}):(0,l.Y)("div",{}),(0,l.FD)(f.Flexbox,{gap:12,horizontal:!0,children:[(0,l.Y)(n.A,{onClick:()=>{F(!1)},style:$,children:D("cancel",{ns:"common"})}),(0,l.Y)(n.A,{loading:z,onClick:()=>{B.submit()},style:$,type:"primary",children:D(k?"dev.update":"dev.save")})]})]});return(0,l.Y)(p.A.Provider,{onFormChange:()=>{A?.(B.getFieldsValue())},onFormFinish:async(e,t)=>{b&&(T(!0),await b?.(t.values),T(!1)),C.success(D(k?"dev.updateSuccess":"dev.saveSuccess")),F(!1)},children:(0,l.Y)(r.A,{containerMaxWidth:"auto",destroyOnHidden:!0,footer:M,height:y.xl?`calc(100vh - ${Y.X}px)`:"100vh",onClose:e=>{e.stopPropagation(),F(!1)},open:e,placement:"bottom",push:!1,styles:{body:{padding:0},bodyContent:{height:"100%"}},title:D(k?"dev.title.edit":"dev.title.create"),width:I?"100%":800,children:(0,l.FD)(f.Flexbox,{gap:0,height:"100%",horizontal:!0,onClick:e=>{e.stopPropagation()},children:[(0,l.FD)(f.Flexbox,{flex:3,gap:16,padding:24,style:{overflowY:"auto"},children:[(0,l.Y)(a.A,{block:!0,onChange:e=>{P(e)},options:[{label:(0,l.FD)(f.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"center",children:[D("dev.manifest.mode.mcp"),(0,l.Y)("div",{children:(0,l.Y)(o.A,{bordered:!1,color:"warning",children:D("dev.manifest.mode.mcpExp")})})]}),value:"mcp"},{label:D("dev.manifest.mode.url"),value:"url"}],value:S,variant:"filled"}),"url"===S&&(0,l.FD)(l.FK,{children:[(0,l.Y)(d.A,{message:(0,l.FD)(v.x6,{i18nKey:"dev.modalDesc",ns:"plugin",children:["添加自定义插件后，可用于插件开发验证，也可直接在会话中使用。插件开发文档请参考：",(0,l.Y)("a",{href:x.WZ,rel:"noreferrer",style:{paddingInline:8},target:"_blank",children:"文档"}),(0,l.Y)(c.default,{icon:g.A})]}),showIcon:!0,type:"info"}),(0,l.Y)(eC,{form:B,isEditMode:k})]}),"mcp"===S&&(0,l.Y)(eo,{form:B,isEditMode:k})]}),(0,l.Y)(eb,{form:B})]})})})})},83599:(e,t,i)=>{i.d(t,{A:()=>k});var l,n=i(28802),r=i(29703),a=i(89026),o=i(83034),d=i(59121),c=i(63639),s=i(36956),p=i(23211),u=i(16602),m=i(51053),g=i(31021),h=i.n(g),v=i(80457),f=i(74038),x=i(68172);let y=(0,o.memo)(({id:e})=>{let{t}=(0,d.Bd)("plugin"),i=(0,f.j)(x.w.getToolManifestById(e),h());return i?.api?(0,n.Y)(v.Flexbox,{paddingBlock:16,width:"100%",children:(0,n.Y)(m.A,{bordered:!0,columns:[{dataIndex:"name",render:e=>(0,n.Y)("code",{children:e}),title:t("detailModal.info.name")},{dataIndex:"description",title:t("detailModal.info.description")}],dataSource:i.api,pagination:!1,rowKey:"name",size:"small",tableLayout:"fixed"})}):(0,n.Y)(u.A,{})});var Y=i(28726),A=i(75431),b=i(24800);let F=(0,o.memo)(({id:e})=>{let t=(0,f.j)(x.w.getPluginMetaById(e),h());return(0,n.FD)(Y.A,{gap:16,horizontal:!0,padding:16,variant:"outlined",children:[(0,n.Y)(b.A,{identifier:e,size:40}),(0,n.FD)(v.Flexbox,{gap:2,children:[(0,n.Y)("div",{children:p.V.getPluginTitle(t)}),(0,n.Y)(A.A,{style:{fontSize:12},type:"secondary",children:p.V.getPluginDesc(t)})]})]})});var w=((l=w||{}).Info="info",l.Settings="settings",l);let k=(0,o.memo)(({schema:e,onClose:t,id:i,onTabChange:l,open:o,tab:u})=>{let[m,g]=(0,c.A)("info",{onChange:l,value:u}),{t:h}=(0,d.Bd)("plugin"),v=p.V.isSettingSchemaNonEmpty(e);return(0,n.FD)(r.A,{allowFullscreen:!0,footer:null,onCancel:t,onOk:()=>{t()},open:o,title:h("detailModal.title"),width:650,children:[(0,n.Y)(F,{id:i}),(0,n.Y)(a.A,{block:!0,onChange:e=>g(e),options:[{label:h("detailModal.tabs.info"),value:"info"},v&&{label:h("detailModal.tabs.settings"),value:"settings"}].filter(Boolean),style:{marginBlock:16},value:m}),"settings"===m?v&&(0,n.Y)(s.A,{id:i,schema:e}):(0,n.Y)(y,{id:i})]})})},87381:(e,t,i)=>{i.d(t,{u:()=>n});var l=i(67400);let n=e=>{let t=l.DEFAULT_MODEL_PROVIDER_LIST.find(t=>t.id===e);return t?.name||e}},88980:(e,t,i)=>{i.d(t,{A:()=>d});var l=i(28802),n=i(37412),r=i(12389),a=i(11577),o=i(92906);let d=(0,i(83034).memo)(({size:e,iconStyle:t,...i})=>{let d=(0,a.DP)();return(0,l.Y)(n.A,{...i,children:(0,l.Y)(r.default,{icon:o.A,size:e,style:{color:d.colorTextTertiary,...t}})})})},90215:(e,t,i)=>{i.d(t,{A:()=>g});var l=i(28802),n=i(94365),r=i(34647),a=i(43038),o=i(15869),d=i(6982),c=i(29820),s=i(84598),p=i(83034),u=i(80457);let m=[{color:"#CB3837",icon:n.A,value:"npx"},{color:"#CB3837",icon:n.A,value:"npm"},{color:"#F69220",icon:r.A,value:"pnpm"},{color:"#F69220",icon:r.A,value:"pnpx"},{color:"#339933",icon:a.A,value:"node"},{color:"#efe2d2",icon:o.A,value:"bun"},{color:"#efe2d2",icon:o.A,value:"bunx"},{color:"#DE5FE9",icon:d.A,value:"uv"},{color:"#3776AB",icon:d.A,value:"python"},{color:"#2496ED",icon:c.A,value:"docker"}],g=(0,p.memo)(e=>(0,l.Y)(s.A,{options:m.map(({value:e,icon:t,color:i})=>({label:(0,l.FD)(u.Flexbox,{align:"center",gap:8,horizontal:!0,children:[t&&(0,l.Y)(t,{color:i,size:16}),e]}),value:e})),...e}))}}]);