"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64140],{18234:(e,t,r)=>{r.d(t,{A:()=>N});var o=r(28802),i=r(83034),a=r(29052),n=r(2893),l=r(15447),s=r(80286),d=r(59121),c=r(20480),u=r(80457),p=r(34005),h=r(53860),m=r(47762),g=r(12389),y=r(11577),f=r(21131),v=r(72989),x=r(94147),k=r(47260);let w=(0,i.memo)(({description:e})=>{let{t}=(0,d.Bd)("modelProvider"),[r,n]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1),w=(0,x.d)(k.w.providerKeyVaults(s.ModelProvider.Bedrock)),b=(0,x.d)(e=>e.updateAiProviderConfig),{accessKeyId:A,secretAccessKey:Y,sessionToken:C,region:F}=w||{},S=(0,y.DP)();return(0,o.FD)(a.BA,{avatar:(0,o.Y)(p.A.Color,{color:S.colorText,size:56}),description:e,title:t("bedrock.unlock.title"),children:[(0,o.Y)(h.A,{autoComplete:"new-password",onChange:e=>{b(s.ModelProvider.Bedrock,{keyVaults:{accessKeyId:e.target.value}})},placeholder:"Aws Access Key Id",value:A,variant:"filled"}),(0,o.Y)(h.A,{autoComplete:"new-password",onChange:e=>{b(s.ModelProvider.Bedrock,{keyVaults:{secretAccessKey:e.target.value}})},placeholder:"Aws Secret Access Key",value:Y,variant:"filled"}),c?(0,o.Y)(h.A,{autoComplete:"new-password",onChange:e=>{b(s.ModelProvider.Bedrock,{keyVaults:{sessionToken:e.target.value}})},placeholder:"Aws Session Token",value:C,variant:"filled"}):(0,o.Y)(l.A,{block:!0,icon:f.A,onClick:()=>{u(!0)},type:"text",children:t("bedrock.unlock.customSessionToken")}),r?(0,o.Y)(m.A,{onChange:e=>{b("bedrock",{keyVaults:{region:e}})},options:["us-east-1","us-west-2","ap-southeast-1","eu-central-1"].map(e=>({label:e,value:e})),placeholder:"https://api.openai.com/v1",style:{width:"100%"},value:F}):(0,o.Y)(l.A,{block:!0,icon:(0,o.Y)(g.default,{icon:v.A}),onClick:()=>{n(!0)},type:"text",children:t("bedrock.unlock.customRegion")})]})});var b=r(16650),A=r(85017),Y=r(53069),C=r(27124),F=r(60851);let S=(0,i.createContext)({loading:!1,setLoading:()=>{}}),B=(0,y.rU)(({css:e,token:t})=>({comfyuiFormWide:e`
    max-width: 900px !important;

    /* Hide the avatar - target the first child which is the Avatar component */
    > *:first-child {
      display: none !important;
    }
  `,container:e`
    width: 100%;
    max-width: 900px;
    border: 1px solid ${t.colorSplit};
    border-radius: 8px;

    color: ${t.colorText};

    background: ${t.colorBgContainer};
  `})),D=(0,i.memo)(({description:e})=>{let{t}=(0,d.Bd)("error"),{t:r}=(0,d.Bd)("modelProvider"),n=(0,y.DP)(),{styles:s}=B(),p=(0,x.d)(e=>e.updateAiProviderConfig),h=(0,x.d)(e=>e.useFetchAiProviderRuntimeState),{loading:f,setLoading:k}=(0,i.useContext)(S),w=h(!0),D=(0,x.d)(e=>e.aiProviderRuntimeConfig?.comfyui?.keyVaults),[R,P]=(0,i.useState)(!1),[T,$]=(0,i.useState)({apiKey:"",authType:"none",baseURL:"http://127.0.0.1:8000",customHeaders:{},password:"",username:""});(0,i.useEffect)(()=>{D&&$({apiKey:D.apiKey||"",authType:D.authType||"none",baseURL:D.baseURL||"http://127.0.0.1:8000",customHeaders:D.customHeaders||{},password:D.password||"",username:D.username||""})},[D?.apiKey,D?.authType,D?.baseURL,D?.password,D?.username,JSON.stringify(D?.customHeaders)]);let z=[{label:r("comfyui.authType.options.none"),value:"none"},{label:r("comfyui.authType.options.basic"),value:"basic"},{label:r("comfyui.authType.options.bearer"),value:"bearer"},{label:r("comfyui.authType.options.custom"),value:"custom"}],I=async(e,t)=>{let r={...T,[e]:t};if($(r),["customHeaders","apiKey","username","password"].includes(e)||"baseURL"!==e||t){k(!0);try{await p("comfyui",{keyVaults:r}),await w.mutate()}catch(e){console.error("Failed to update ComfyUI config:",e)}finally{k(!1)}}};return(0,o.Y)(c.default,{className:s.container,gap:24,padding:24,children:(0,o.FD)(c.default,{gap:16,paddingBlock:32,style:{width:"100%"},children:[(0,o.Y)(b.A.Combine,{size:64,type:"color"}),(0,o.Y)(a.BA,{avatar:(0,o.Y)("div",{}),className:s.comfyuiFormWide,description:e,title:t("unlock.comfyui.title",{name:"ComfyUI"}),children:(0,o.FD)(u.Flexbox,{gap:16,width:"100%",children:[R?(0,o.FD)(u.Flexbox,{gap:4,children:[(0,o.Y)("div",{style:{fontSize:14,fontWeight:500},children:r("comfyui.baseURL.title")}),(0,o.Y)(Y.A,{onChange:e=>I("baseURL",e),placeholder:r("comfyui.baseURL.placeholder"),suffix:(0,o.Y)("div",{children:f&&(0,o.Y)(g.default,{icon:A.A,spin:!0})}),value:T.baseURL})]}):(0,o.Y)(l.A,{icon:(0,o.Y)(g.default,{icon:v.A}),onClick:()=>P(!0),type:"text",children:t("unlock.comfyui.modifyBaseUrl")}),(0,o.FD)(u.Flexbox,{gap:4,children:[(0,o.Y)("div",{style:{fontSize:14,fontWeight:500},children:r("comfyui.authType.title")}),(0,o.Y)(m.A,{allowClear:!1,onChange:e=>I("authType",e),options:z,placeholder:r("comfyui.authType.placeholder"),value:T.authType})]}),"basic"===T.authType&&(0,o.FD)(o.FK,{children:[(0,o.FD)(u.Flexbox,{gap:4,children:[(0,o.Y)("div",{style:{fontSize:14,fontWeight:500},children:r("comfyui.username.title")}),(0,o.Y)(Y.A,{autoComplete:"username",onChange:e=>I("username",e),placeholder:r("comfyui.username.placeholder"),suffix:(0,o.Y)("div",{children:f&&(0,o.Y)(g.default,{icon:A.A,spin:!0})}),value:T.username})]}),(0,o.FD)(u.Flexbox,{gap:4,children:[(0,o.Y)("div",{style:{fontSize:14,fontWeight:500},children:r("comfyui.password.title")}),(0,o.Y)(C.A,{autoComplete:"new-password",onChange:e=>I("password",e),placeholder:r("comfyui.password.placeholder"),suffix:(0,o.Y)("div",{children:f&&(0,o.Y)(g.default,{icon:A.A,spin:!0})}),value:T.password})]})]}),"bearer"===T.authType&&(0,o.FD)(u.Flexbox,{gap:4,children:[(0,o.Y)("div",{style:{fontSize:14,fontWeight:500},children:r("comfyui.apiKey.title")}),(0,o.Y)(C.A,{autoComplete:"new-password",onChange:e=>I("apiKey",e),placeholder:r("comfyui.apiKey.placeholder"),suffix:(0,o.Y)("div",{children:f&&(0,o.Y)(g.default,{icon:A.A,spin:!0})}),value:T.apiKey})]}),"custom"===T.authType&&(0,o.FD)(u.Flexbox,{gap:4,children:[(0,o.Y)("div",{style:{fontSize:14,fontWeight:500},children:r("comfyui.customHeaders.title")}),(0,o.Y)("div",{style:{color:n.colorTextSecondary,fontSize:12,marginBottom:4},children:r("comfyui.customHeaders.desc")}),(0,o.Y)(F.A,{addButtonText:r("comfyui.customHeaders.addButton"),deleteTooltip:r("comfyui.customHeaders.deleteTooltip"),duplicateKeyErrorText:r("comfyui.customHeaders.duplicateKeyError"),keyPlaceholder:r("comfyui.customHeaders.keyPlaceholder"),onChange:e=>I("customHeaders",e),value:T.customHeaders,valuePlaceholder:r("comfyui.customHeaders.valuePlaceholder")})]})]})})]})})});D.displayName="ComfyUIForm";var R=r(87381),P=r(62326),T=r(12467),$=r(31021),z=r.n($);let I=(0,i.memo)(({provider:e,avatar:t,showEndpoint:r=!1,apiKeyPlaceholder:n,description:s})=>{let{t:c}=(0,d.Bd)(["modelProvider","error"]),{t:u}=(0,d.Bd)("error"),[p,h]=(0,i.useState)(!1),{apiKey:m,baseURL:y,setConfig:f}=(e=>{let{setLoading:t}=(0,i.useContext)(S),r=(0,x.d)(e=>e.updateAiProviderConfig),o=(0,x.d)(k.w.providerConfigById(e),z());return{apiKey:o?.keyVaults.apiKey,baseURL:o?.keyVaults?.baseURL,setConfig:async(e,i)=>{let a={...o?.keyVaults,...i};z()(o?.keyVaults,a)||(t(!0),await r(e,{keyVaults:{...o?.keyVaults,...i}}),t(!1))}}})(e),{showOpenAIProxyUrl:w}=(0,P.wo)(T.E),b=(0,R.u)(e),{loading:F}=(0,i.useContext)(S);return(0,o.FD)(a.BA,{avatar:t,description:s,title:c("unlock.apiKey.title",{name:b,ns:"error"}),children:[(0,o.Y)(C.A,{autoComplete:"new-password",onChange:t=>{f(e,{apiKey:t})},placeholder:n||"sk-***********************",suffix:(0,o.Y)("div",{children:F&&(0,o.Y)(g.default,{icon:A.A,spin:!0})}),value:m}),r&&w&&(p?(0,o.Y)(Y.A,{onChange:t=>{f(e,{baseURL:t})},placeholder:"https://api.openai.com/v1",suffix:(0,o.Y)("div",{children:F&&(0,o.Y)(g.default,{icon:A.A,spin:!0})}),value:y}):(0,o.Y)(l.A,{icon:(0,o.Y)(g.default,{icon:v.A}),onClick:()=>{h(!0)},type:"text",children:u("unlock.addProxyUrl")}))]})}),E=(0,i.memo)(({provider:e,description:t,bedrockDescription:r,onRecreate:a,onClose:p})=>{let{t:h}=(0,d.Bd)("error"),[m,g]=(0,i.useState)(!1),y=(0,i.useMemo)(()=>{switch(e){case s.ModelProvider.Anthropic:return"sk-ant_*****************************";case s.ModelProvider.OpenRouter:return"sk-or-********************************";case s.ModelProvider.Perplexity:return"pplx-********************************";case s.ModelProvider.ZhiPu:return"*********************.*************";case s.ModelProvider.Groq:return"gsk_*****************************";case s.ModelProvider.DeepSeek:return"sk_******************************";case s.ModelProvider.Qwen:return"sk-********************************";case s.ModelProvider.Github:return"ghp_*****************************";default:return"*********************************"}},[e]);return(0,o.Y)(S,{value:{loading:m,setLoading:g},children:(0,o.FD)(c.default,{gap:16,style:{maxWidth:e===s.ModelProvider.ComfyUI?900:300,width:e===s.ModelProvider.ComfyUI?"80%":"auto"},children:[e===s.ModelProvider.Bedrock?(0,o.Y)(w,{description:r}):e===s.ModelProvider.ComfyUI?(0,o.Y)(D,{description:t}):(0,o.Y)(I,{apiKeyPlaceholder:y,avatar:(0,o.Y)(n.A,{provider:e,size:80,type:"avatar"}),description:t,provider:e,showEndpoint:!0}),(0,o.FD)(u.Flexbox,{gap:12,width:"100%",children:[(0,o.Y)(l.A,{block:!0,disabled:m,onClick:()=>{a()},style:{marginTop:8},type:"primary",children:h("unlock.confirm")}),(0,o.Y)(l.A,{onClick:()=>{p()},children:h("unlock.closeMessage")})]})]})})}),N=(0,i.memo)(({id:e,provider:t,description:r,bedrockDescription:i,onRecreate:n,onClose:l})=>(0,o.Y)(a.Sf,{children:(0,o.Y)(E,{bedrockDescription:i,description:r,id:e,onClose:l,onRecreate:n,provider:t})}))},27124:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(28802),i=r(53860),a=r(83034);let n=(0,a.memo)(({onChange:e,value:t,...r})=>{let n=(0,a.useRef)(null),l=(0,a.useRef)(!1),[s,d]=(0,a.useState)(t);return(0,a.useEffect)(()=>{d(t)},[t]),(0,o.Y)(i.A,{onBlur:()=>{e?.(s)},onChange:e=>{d(e.target.value)},onCompositionEnd:()=>{l.current=!1},onCompositionStart:()=>{l.current=!0},onPressEnter:()=>{l.current||e?.(s)},ref:n,...r,value:s})});n.displayName="FormPassword";let l=n},29052:(e,t,r)=>{r.d(t,{BA:()=>u,IS:()=>d,Sf:()=>c});var o=r(28802),i=r(67072),a=r(11577),n=r(83034),l=r(20480),s=r(80457);let d=(0,a.rU)(({css:e,token:t})=>({container:e`
    border: 1px solid ${t.colorSplit};
    border-radius: 8px;
    color: ${t.colorText};
    background: ${t.colorBgContainer};
  `,desc:e`
    color: ${t.colorTextTertiary};
    text-align: center;
  `,form:e`
    width: 100%;
    max-width: 360px;

    @media (max-width: 768px) {
      max-width: 90%;
    }
  `})),c=(0,n.memo)(({children:e,className:t,gap:r=24,padding:i=24,...a})=>{let{cx:n,styles:s}=d();return(0,o.Y)(l.default,{className:n(s.container,t),gap:r,padding:i,...a,children:e})}),u=(0,n.memo)(({children:e,background:t,title:r,description:a,avatar:n,animation:c,className:u,gap:p=16,...h})=>{let{cx:m,styles:g,theme:y}=d();return(0,o.FD)(l.default,{className:m(g.form,u),gap:p,...h,children:[(0,o.Y)(i.A,{animation:c,avatar:n,background:t??y.colorFillContent,gap:12,size:80}),(0,o.FD)(s.Flexbox,{gap:8,width:"100%",children:[(0,o.Y)(s.Flexbox,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:r}),(0,o.Y)(s.Flexbox,{className:g.desc,children:a})]}),e]})})},34207:(e,t,r)=>{r.d(t,{loginRequired:()=>p});var o=r(28802),i=r(51717),a=r(96987),n=r(29914),l=r(8834),s=r(83034),d=r(59121),c=r(38759);let u=(0,s.memo)(({timeout:e=2e3})=>{let t=(0,c.k)(e=>e.openLogin),{t:r}=(0,d.Bd)("error");return(0,l.A)(()=>{t()},e),(0,o.Y)("div",{style:{cursor:"pointer",fontSize:12},children:r("loginRequired.desc")})}),p={redirect:({timeout:e=2e3}={})=>{n.Ew.error({description:(0,o.Y)(u,{timeout:e}),duration:e/1e3,icon:(0,o.Y)(i.A,{emoji:"\uD83E\uDEE1",size:24}),message:(0,a.t)("loginRequired.title",{ns:"error"}),showProgress:!0,type:"warning"})}}},53069:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(28802),i=r(69033),a=r(83034);let n=(0,a.memo)(({onChange:e,value:t,...r})=>{let n=(0,a.useRef)(null),l=(0,a.useRef)(!1),[s,d]=(0,a.useState)(t);return(0,a.useEffect)(()=>{d(t)},[t]),(0,o.Y)(i.A,{onBlur:()=>{e?.(s)},onChange:e=>{d(e.target.value)},onCompositionEnd:()=>{l.current=!1},onCompositionStart:()=>{l.current=!0},onPressEnter:()=>{l.current||e?.(s)},ref:n,...r,value:s})});n.displayName="FormInput";let l=n},55632:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(28802),i=r(8055),a=r(9274),n=r(11577),l=r(80201),s=r(83034),d=r(91568);let c=(0,n.rU)(({css:e,token:t})=>({deleteButton:e`
    color: #fff;
    background: ${t.colorBgMask};

    &:hover {
      background: ${t.colorError};
    }
  `,editableImage:e`
    background: ${t.colorBgContainer};
    box-shadow: 0 0 0 1px ${t.colorFill} inset;
  `,image:e`
    margin-block: 0 !important;

    .ant-image {
      height: 100% !important;

      img {
        height: 100% !important;
      }
    }
  `})),u=(0,s.memo)(({className:e,style:t,editable:r,alt:n,onRemove:s,url:u,loading:p,alwaysShowClose:h,preview:m})=>{let g=r?64:"100%",{styles:y,cx:f}=c(),{isSafari:v}=(0,d.V)();return(0,o.Y)(i.A,{actions:r&&(0,o.Y)(a.A,{className:y.deleteButton,glass:!0,icon:l.A,onClick:e=>{e.stopPropagation(),s?.()},size:"small"}),alt:n||"",alwaysShowActions:h,className:e,height:v?"auto":"100%",isLoading:p,preview:m,size:g,src:u,style:{height:v?"auto":"100%",width:"100%",...t},wrapperClassName:f(y.image,r&&y.editableImage)})})},60851:(e,t,r)=>{r.d(t,{A:()=>x});var o=r(28802),i=r(9274),a=r(12389),n=r(28755),l=r(11577),s=r(31021),d=r.n(s),c=r(80201),u=r(90897),p=r(83034),h=r(59121),m=r(80457),g=r(54483),y=r(53069);let f=(e={})=>Object.entries(e||{}).map(([e,t])=>({id:(0,g.A)(),key:e,value:"string"==typeof t?t:""})),v=(0,l.rU)(({css:e,token:t})=>({container:e`
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
  `})),x=(0,p.memo)(({value:e,onChange:t,keyPlaceholder:r,valuePlaceholder:l,addButtonText:s,duplicateKeyErrorText:x,deleteTooltip:k,style:w})=>{let b,A,{styles:Y}=v(),{t:C}=(0,h.Bd)("components"),[F,S]=(0,p.useState)(()=>f(e)),B=(0,p.useRef)(void 0);(0,p.useEffect)(()=>{let t=e||{};d()(t,B.current)||(S(f(t)),B.current=t)},[e]);let D=e=>{let r={};e.forEach(e=>{let t=e.key.trim();t&&(r[t]=(r[t]||0)+1)}),S(e.map(e=>({...e}))),t?.(((e=[])=>{let t={},r=new Set;return(e||[]).slice().reverse().forEach(e=>{let o=e.key.trim();o&&!r.has(o)&&(t[o]="string"==typeof e.value?e.value:"",r.add(o))}),Object.keys(t).reverse().reduce((e,r)=>(e[r]=t[r],e),{})})(e))},R=(b=new Set,A=new Set,F.forEach(e=>{let t=e.key.trim();t&&(b.has(t)?A.add(t):b.add(t))}),A);return(0,o.FD)("div",{className:Y.container,style:w,children:[(0,o.FD)(m.Flexbox,{className:Y.title,gap:8,horizontal:!0,children:[(0,o.Y)(m.Flexbox,{flex:1,children:r||C("KeyValueEditor.keyPlaceholder")}),(0,o.Y)(m.Flexbox,{flex:2,children:l||C("KeyValueEditor.valuePlaceholder")}),(0,o.Y)(m.Flexbox,{style:{width:30}})]}),(0,o.FD)(m.Flexbox,{width:"100%",children:[F.map(e=>{let t=e.key.trim()&&R.has(e.key.trim());return(0,o.FD)(m.Flexbox,{align:"flex-start",className:Y.row,gap:8,horizontal:!0,width:"100%",children:[(0,o.FD)(m.Flexbox,{flex:1,style:{position:"relative"},children:[(0,o.Y)(y.A,{className:Y.input,onChange:t=>{var r;return r=e.id,void D(F.map(e=>e.id===r?{...e,key:t}:e))},placeholder:r||C("KeyValueEditor.keyPlaceholder"),status:t?"error":void 0,value:e.key,variant:"filled"}),t&&(0,o.Y)("div",{style:{bottom:"-16px",color:"red",fontSize:"12px",position:"absolute"},children:x||C("KeyValueEditor.duplicateKeyError")})]}),(0,o.Y)(m.Flexbox,{flex:2,children:(0,o.Y)(y.A,{className:Y.input,onChange:t=>{var r;return r=e.id,void D(F.map(e=>e.id===r?{...e,value:t}:e))},placeholder:l||C("KeyValueEditor.valuePlaceholder"),value:e.value,variant:"filled"})}),(0,o.Y)(i.A,{icon:c.A,onClick:()=>{var t;return t=e.id,void D(F.filter(e=>e.id!==t))},size:"small",style:{marginTop:4},title:k||C("KeyValueEditor.deleteTooltip")})]},e.id)}),(0,o.Y)(n.Ay,{block:!0,icon:(0,o.Y)(a.default,{icon:u.A}),onClick:()=>{D([...F,{id:(0,g.A)(),key:"",value:""}])},size:"small",style:{marginTop:F.length>0?16:8},type:"dashed",children:s||C("KeyValueEditor.addButton")})]})]})})},64140:(e,t,r)=>{r.r(t),r.d(t,{default:()=>eF});var o=r(28802),i=r(83034),a=r(38858),n=r(81224),l=r(20480),s=r(84781),d=r(61586),c=r(70677),u=r(49875),p=r(80457),h=r(15095),m=r(38471),g=r(3136),y=r(28726),f=r(99454),v=r(75431),x=r(36163),k=r(58244),w=r(11577),b=r(2644),A=r.n(b),Y=r(11162),C=r.n(Y),F=r(97043),S=r(38792),B=r(57696),D=r(20966),R=r(59121),P=r(18234),T=r(73722),$=r(24433),z=r(27809),I=r(67806),E=r(19742),N=r(12389),U=r(43566),K=r(16748),M=r(29961),L=r(20951);let G=(0,w.rU)(({cx:e,css:t,token:r})=>({generationActionButton:e("generation-actions",t`
      position: absolute;
      z-index: 10;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      opacity: 0;

      transition: opacity 0.1s ${r.motionEaseInOut};
    `),imageContainer:t`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,loadingContent:t`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    color: ${r.colorTextTertiary};
  `,placeholderContainer:t`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,spinIcon:t`
    color: ${r.colorPrimary};
  `})),W=(0,i.memo)(({onDelete:e,onDownload:t,onCopySeed:r,showDownload:i=!1,showCopySeed:a=!1,seedTooltip:n})=>{let{styles:l}=G(),{t:s}=(0,R.Bd)("image");return(0,o.Y)(x.A,{actionIconProps:{tooltipProps:{placement:"left"}},className:l.generationActionButton,horizontal:!1,items:[!!(i&&t)&&{icon:M.A,key:"download",label:s("generation.actions.download"),onClick:t},!!(a&&r)&&{icon:L.A,key:"copySeed",label:n,onClick:r},{danger:!0,icon:D.A,key:"delete",label:s("generation.actions.delete"),onClick:e}].filter(Boolean),variant:"outlined"})});W.displayName="ActionButtons";let _=(e,t)=>{if(e.asset?.width&&e.asset?.height&&e.asset.width>0&&e.asset.height>0){let{width:t,height:r}=e.asset;return{aspectRatio:`${t} / ${r}`,height:r,width:t}}let r=t?.config;if(r?.width&&r?.height&&r.width>0&&r.height>0){let{width:e,height:t}=r;return{aspectRatio:`${e} / ${t}`,height:t,width:e}}if(t?.width&&t?.height&&t.width>0&&t.height>0){let{width:e,height:r}=t;return{aspectRatio:`${e} / ${r}`,height:r,width:e}}if(r?.size&&"auto"!==r.size){let e=r.size.match(/^(\d+)x(\d+)$/);if(e){let[,t,r]=e,o=parseInt(t,10),i=parseInt(r,10);if(o>0&&i>0)return{aspectRatio:`${o} / ${i}`,height:i,width:o}}}if(r?.aspectRatio){let e=r.aspectRatio.match(/^(\d+):(\d+)$/);if(e){let[,t,r]=e;return{aspectRatio:`${t} / ${r}`,height:null,width:null}}}return{aspectRatio:null,height:null,width:null}},H=(e,t)=>{let r=_(e,t);if(!r.aspectRatio)return 200;let[o,i]=r.aspectRatio.split(" / "),a=Number(o)/Number(i);return Math.min(Math.round(window.innerHeight/2*a),400)},V=(0,i.memo)(({generation:e,generationBatch:t,aspectRatio:r,onDelete:a,onCopyError:n})=>{let{styles:s,theme:d}=G(),{t:c}=(0,R.Bd)("image"),{t:u}=(0,R.Bd)("error"),p=(0,i.useMemo)(()=>{if(!e.task.error)return"";let t=e.task.error,r="string"==typeof t.body?t.body:t.body?.detail;if(r&&Object.values(K.Y1).includes(r)){let e=`response.${r}`,t=u(e);if(t===e||t.startsWith("response.")){let e=u(r);return e!==r?e:r}return t}return r||t.name||"Unknown error"},[e.task.error,t.provider,u]);return(0,o.FD)(y.A,{align:"center",className:s.placeholderContainer,justify:"center",onClick:n,padding:16,style:{aspectRatio:r,cursor:"pointer",maxWidth:H(e,t)},variant:"filled",children:[(0,o.FD)(l.default,{gap:8,children:[(0,o.Y)(N.default,{color:d.colorTextDescription,icon:U.A,size:24}),(0,o.Y)(v.A,{strong:!0,type:"secondary",children:c("generation.status.failed")}),e.task.error&&(0,o.Y)(v.A,{code:!0,ellipsis:{rows:2},fontSize:10,style:{wordBreak:"break-all"},title:c("generation.actions.copyError"),type:"secondary",children:p})]}),(0,o.Y)(W,{onDelete:a})]})});V.displayName="ErrorState";var j=r(42550),O=r(92912);let q=e=>`generation_start_time_${e}`;function Q({generationId:e,isActive:t}){let[r,a]=(0,i.useState)(null),n=(0,i.useRef)(null),l=(0,i.useRef)(0);(0,i.useEffect)(()=>{if(!t){n.current&&(cancelAnimationFrame(n.current),n.current=null);let t=q(e);sessionStorage.removeItem(t),a(null);return}let r=q(e),o=(()=>{let e=sessionStorage.getItem(r);if(e)return Number(e);let t=Date.now();return sessionStorage.setItem(r,t.toString()),t})(),i=e=>{e-l.current>=100&&(a(Math.max(0,(Date.now()-o)/100)),l.current=e),n.current=requestAnimationFrame(i)};return n.current=requestAnimationFrame(i),()=>{n.current&&cancelAnimationFrame(n.current)}},[e,t]);let s=(()=>{if(null===r)return"";let e=r/10;if(e<60)return`${e.toFixed(1)}s`;let t=e/60;return`${t.toFixed(1)}min`})();return(0,o.Y)(v.A,{code:!0,fontSize:10,type:"secondary",children:s})}let Z=(0,i.memo)(({generation:e,generationBatch:t,aspectRatio:r,onDelete:i})=>{let{styles:a}=G(),n=e.task.status===T.cz.Processing||e.task.status===T.cz.Pending;return(0,o.FD)(y.A,{align:"center",className:a.placeholderContainer,justify:"center",style:{aspectRatio:r,maxWidth:H(e,t)},variant:"filled",children:[(0,o.FD)(l.default,{gap:8,children:[(0,o.Y)(O.A,{indicator:(0,o.Y)(j.A,{spin:!0})}),(0,o.Y)(Q,{generationId:e.id,isActive:n})]}),(0,o.Y)(W,{onDelete:i})]})});Z.displayName="LoadingState";var J=r(55632);let X=(0,i.memo)(({generation:e,generationBatch:t,prompt:r,aspectRatio:i,onDelete:a,onDownload:n,onCopySeed:l,seedTooltip:s})=>{let{styles:d}=G();return(0,o.FD)(y.A,{align:"center",className:d.imageContainer,justify:"center",style:{aspectRatio:i,maxWidth:H(e,t)},variant:"filled",children:[(0,o.Y)(J.A,{alt:r,preview:{src:e.asset.url},style:{height:"100%",width:"100%"},url:e.asset.url}),(0,o.Y)(W,{onCopySeed:l,onDelete:a,onDownload:n,seedTooltip:s,showCopySeed:!!e.seed,showDownload:!0})]})});X.displayName="SuccessState";let ee=I.imageGenerationConfigSelectors.isSupportedParam,et=(0,i.memo)(({generationBatch:e,generation:t,prompt:r})=>{let{message:a}=k.A.useApp(),{t:l}=(0,R.Bd)("image"),s=(0,n.k)(e=>e.useCheckGenerationStatus),d=(0,n.k)(e=>e.removeGeneration),c=(0,n.k)(e=>e.reuseSeed),u=(0,n.k)(e=>e.activeGenerationTopicId),p=(0,n.k)(ee("seed")),{downloadImage:h}=function(){let[e,t]=(0,i.useState)(!1),{message:r}=k.A.useApp(),{t:o}=(0,R.Bd)("image");return{downloadImage:(0,$.A)(async(e,i)=>{t(!0);try{await (0,z.P)(e,i,!1)}catch(e){throw console.error("Failed to download image:",e),r.error(o("generation.actions.downloadFailed")),e}finally{t(!1)}}),isDownloading:e}}(),m=t.task.status===T.cz.Success||t.task.status===T.cz.Error;s(t.id,t.task.id,u,!m);let g=_(t,e).aspectRatio||"1 / 1",y=async()=>{try{await d(t.id)}catch(e){console.error("Failed to delete generation:",e)}},f=async()=>{if(!t.asset?.url)return;let e=A()(t.createdAt).format("YYYY-MM-DD_HH-mm-ss"),o=r.slice(0,30).trim().replaceAll(/["%*/:<>?\\|]/g,"").replaceAll(/\s+/g,"_"),i=(0,E.yi)(t.asset.url),a=`${o||"Untitled"}_${e}.${i}`;await h(t.asset.url,a)},v=async()=>{if(t.seed)if(p)try{c(t.seed),a.success(l("generation.actions.seedApplied"))}catch(e){console.error("Failed to apply seed:",e),a.error(l("generation.actions.seedApplyFailed"))}else try{await navigator.clipboard.writeText(t.seed.toString()),a.success(l("generation.actions.seedCopied"))}catch(e){console.error("Failed to copy seed:",e),a.error(l("generation.actions.seedCopyFailed"))}},x=async()=>{if(!t.task.error)return;let e="string"==typeof t.task.error.body?t.task.error.body:t.task.error.body?.detail||t.task.error.name||"Unknown error";try{await navigator.clipboard.writeText(e),a.success(l("generation.actions.errorCopied"))}catch(e){console.error("Failed to copy error message:",e),a.error(l("generation.actions.errorCopyFailed"))}};if(t.task.status===T.cz.Success&&t.asset?.url){let i=p?l("generation.actions.applySeed"):l("generation.actions.copySeed");return(0,o.Y)(X,{aspectRatio:g,generation:t,generationBatch:e,onCopySeed:v,onDelete:y,onDownload:f,prompt:r,seedTooltip:i})}return t.task.status===T.cz.Error?(0,o.Y)(V,{aspectRatio:g,generation:t,generationBatch:e,onCopyError:x,onDelete:y}):(0,o.Y)(Z,{aspectRatio:g,generation:t,generationBatch:e,onDelete:y})});et.displayName="GenerationItem";let er=(0,w.rU)(({css:e,token:t})=>({container:e`
    gap: 8px;
    margin-block-end: 12px;
  `,image:e`
    overflow: hidden;
    flex-shrink: 0;

    width: 60px;
    height: 60px;
    border-radius: ${t.borderRadius}px;
  `,imageSingle:e`
    position: relative;
    transform: rotate(-3deg);

    flex-shrink: 0;

    width: 64px;
    height: 64px;

    transition: transform 0.2s ease;

    &::before {
      content: '';

      position: absolute;
      z-index: -1;
      inset: -4px;

      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadius}px;

      background: ${t.colorBgContainer};
      box-shadow: 0 2px 8px ${t.colorBgMask};
    }

    &:hover {
      transform: rotate(-1deg) scale(1.05);
    }
  `,imageSingleInner:e`
    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: ${t.borderRadiusSM}px;

    background: ${t.colorBgLayout};
  `})),eo=(0,i.memo)(({imageUrl:e,imageUrls:t,layout:r})=>{let{styles:i}=er(),a=[];return(e&&a.push(e),t&&t.length>0&&a.push(...t),0===a.length)?null:"single"===r&&1===a.length?(0,o.Y)("div",{className:i.imageSingle,children:(0,o.Y)("div",{className:i.imageSingleInner,children:(0,o.Y)(J.A,{alt:"Reference image",preview:{src:a[0]},style:{height:"100%",width:"100%"},url:a[0]})})}):(0,o.Y)(p.Flexbox,{className:i.container,horizontal:!0,wrap:"wrap",children:a.map((e,t)=>(0,o.Y)("div",{className:i.image,children:(0,o.Y)(J.A,{alt:`Reference image ${t+1}`,preview:{src:e},style:{height:"100%",width:"100%"},url:e})},`${e}-${t}`))})});eo.displayName="ReferenceImages";let ei=(0,w.rU)(({cx:e,css:t,token:r})=>({batchActions:e("batch-actions",t`
      opacity: 0;
      transition: opacity 0.1s ${r.motionEaseInOut};
    `),batchDeleteButton:t`
    &:hover {
      border-color: ${r.colorError} !important;
      color: ${r.colorError} !important;
      background: ${r.colorErrorBg} !important;
    }
  `,container:t`
    &:hover {
      .batch-actions {
        opacity: 1;
      }
    }
  `,prompt:t`
    pre {
      overflow: hidden !important;
      padding-block: 4px;
      font-size: 13px;
    }
  `}));A().extend(C());let ea=(0,i.memo)(({batch:e})=>{let{styles:t}=ei(),{t:r}=(0,R.Bd)(["image","modelProvider","error"]),{message:a}=k.A.useApp(),[l]=(0,c.Q)(),s=(0,n.k)(e=>e.activeGenerationTopicId),d=(0,n.k)(e=>e.removeGenerationBatch),u=(0,n.k)(e=>e.recreateImage),w=(0,n.k)(e=>e.reuseSettings),b=(0,i.useMemo)(()=>A()(e.createdAt).format("YYYY-MM-DD HH:mm:ss"),[e.createdAt]),Y=async()=>{try{await navigator.clipboard.writeText(e.prompt),a.success(r("generation.actions.promptCopied"))}catch(e){console.error("Failed to copy prompt:",e),a.error(r("generation.actions.promptCopyFailed"))}},C=async()=>{if(s)try{await d(e.id,s)}catch(e){console.error("Failed to delete batch:",e)}};if(0===e.generations.length)return null;if(e.generations.some(e=>e.task.error?.name===T.OO.InvalidProviderAPIKey))return(0,o.Y)(P.A,{bedrockDescription:r("bedrock.unlock.imageGenerationDescription",{ns:"modelProvider"}),description:r("unlock.apiKey.imageGenerationDescription",{name:e.provider,ns:"error"}),id:e.id,onClose:()=>{d(e.id,s)},onRecreate:()=>{u(e.id)},provider:e.provider});let $=+!!e.config?.imageUrl+(e.config?.imageUrls?.length||0),z=(0,o.FD)(o.FK,{children:[(0,o.Y)(m.A,{variant:"chat",children:e.prompt}),(0,o.Y)(p.Flexbox,{gap:4,horizontal:!0,justify:"space-between",style:{marginBottom:10},children:(0,o.FD)(p.Flexbox,{gap:4,horizontal:!0,children:[(0,o.Y)(h.A,{model:e.model}),e.width&&e.height&&(0,o.FD)(g.A,{children:[e.width," \xd7 ",e.height]}),(0,o.Y)(g.A,{children:r("generation.metadata.count",{count:e.generations.length})})]})})]});return(0,o.FD)(y.A,{className:t.container,gap:8,variant:"borderless",children:[1===$?(0,o.FD)(p.Flexbox,{align:"center",gap:16,horizontal:!0,children:[(0,o.Y)(eo,{imageUrl:e.config?.imageUrl,imageUrls:e.config?.imageUrls,layout:"single"}),(0,o.Y)(p.Flexbox,{flex:1,gap:8,children:z})]}):(0,o.FD)(o.FK,{children:[(0,o.Y)(eo,{imageUrl:e.config?.imageUrl,imageUrls:e.config?.imageUrls,layout:"multiple"}),z]}),(0,o.Y)(f.A,{maxItemWidth:200,ref:l,rows:e.generations.length,children:e.generations.map(t=>(0,o.Y)(et,{generation:t,generationBatch:e,prompt:e.prompt},t.id))}),(0,o.FD)(p.Flexbox,{align:"center",className:t.batchActions,horizontal:!0,justify:"space-between",children:[(0,o.Y)(v.A,{as:"time",fontSize:12,type:"secondary",children:b}),(0,o.Y)(x.A,{items:[{icon:S.A,key:"reuseSettings",label:r("generation.actions.reuseSettings"),onClick:()=>{w(e.model,e.provider,(0,F.A)(e.config,["seed"]))}},{icon:B.A,key:"copyPrompt",label:r("generation.actions.copyPrompt"),onClick:Y},{danger:!0,icon:D.A,key:"deleteBatch",label:r("generation.actions.deleteBatch"),onClick:C}]})]})]})});ea.displayName="GenerationBatchItem";let en=(0,i.memo)(()=>{let[e,t]=(0,c.Q)(),r=(0,i.useRef)(null),a=(0,i.useRef)(!0),l=(0,i.useRef)(0),s=(0,n.k)(d.r.currentGenerationBatches),h=(e="smooth")=>{if(!r.current)return;let t=r.current.closest('[style*="overflow"]')||document.documentElement,o=r.current.getBoundingClientRect(),i=t.getBoundingClientRect(),a=t.scrollTop+o.bottom-i.bottom+999;t.scrollTo({behavior:e,top:a})};return((0,i.useEffect)(()=>{let e=(s||[]).length,r=l.current;if(0===e){l.current=0;return}if(a.current)h("auto"),a.current=!1;else if(e>r){t(!1);let e=setTimeout(()=>{h("smooth"),t(!0)},50);return()=>clearTimeout(e)}l.current=e},[s,t]),s&&0!==s.length)?(0,o.FD)(o.FK,{children:[(0,o.Y)(p.Flexbox,{flex:1,gap:16,ref:e,width:"100%",children:s.map((e,t)=>(0,o.FD)(i.Fragment,{children:[0!==t&&(0,o.Y)(u.A,{dashed:!0,style:{margin:0}}),(0,o.Y)(ea,{batch:e},e.id)]},e.id))}),(0,o.Y)("div",{ref:r,style:{height:1}})]}):null});en.displayName="GenerationFeed";var el=r(40681),es=r(15447),ed=r(36322),ec=r(34207),eu=r(71181);let ep=e=>e.isCreating;var eh=r(86344),em=r(38759),eg=r(61520),ey=r(40904);let ef=()=>{let{t:e}=(0,R.Bd)("image"),t=(0,w.DP)();return(0,o.FD)(l.default,{gap:16,horizontal:!0,style:{width:"100%"},children:[(0,o.Y)(l.default,{flex:"none",height:54,style:{backgroundColor:t.colorText,borderRadius:16},width:54,children:(0,o.Y)(N.default,{color:t.colorBgLayout,icon:ey.A,size:32})}),(0,o.Y)(v.A,{as:"h1",style:{margin:0},children:e("config.header.title")})]})},ev=(0,w.rU)(({css:e,token:t,isDarkMode:r})=>({container:e`
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${1.5*t.borderRadiusLG}px;
    background-color: ${t.colorBgContainer};
    box-shadow:
      ${t.boxShadowTertiary},
      ${r?`0 0 48px 32px ${t.colorBgContainerSecondary}`:`0 0 0  ${t.colorBgContainerSecondary}`},
      0 32px 0 ${t.colorBgContainerSecondary};
  `,wrapper:e`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    width: 100%;
  `})),ex=({showTitle:e=!1})=>{let{styles:t}=ev(),{t:r}=(0,R.Bd)("image"),{value:i,setValue:a}=(0,eh.$)("prompt"),l=(0,n.k)(ep),s=(0,n.k)(e=>e.createImage),d=(0,n.k)(I.imageGenerationConfigSelectors.model),c=(0,em.k)(eg.P.isLogin),u=(0,eu.W)(),h=async()=>{c?await u({model:d,prompt:i,scenario:"image"})&&await s():ec.loginRequired.redirect({timeout:2e3})};return(0,o.FD)(p.Flexbox,{gap:32,style:{marginTop:48},width:"100%",children:[e&&(0,o.Y)(ef,{}),(0,o.FD)(p.Flexbox,{align:"flex-end",className:t.container,gap:12,height:"100%",horizontal:!0,padding:"12px 12px 12px 16px",width:"100%",children:[(0,o.Y)(el.A,{autoSize:{maxRows:6,minRows:3},onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"===e.key&&!e.shiftKey&&!e.nativeEvent.isComposing&&(e.preventDefault(),!l&&i.trim()&&h())},placeholder:r("config.prompt.placeholder"),style:{borderRadius:0,padding:0},value:i,variant:"borderless"}),(0,o.Y)(es.A,{disabled:!i,icon:ed.A,loading:l,onClick:h,size:"large",style:{fontWeight:500,height:64,minWidth:64,width:64},title:r(l?"generation.status.generating":"generation.actions.generate"),type:"primary"})]})]})},ek=(0,i.memo)(()=>(0,o.Y)(p.Flexbox,{flex:1,height:"100%",style:{overflow:"hidden",zIndex:1},children:(0,o.Y)(l.default,{flex:1,padding:24,children:(0,o.Y)(ex,{showTitle:!0})})}));var ew=r(59202);let eb=(0,i.memo)(()=>(0,o.FD)(o.FK,{children:[(0,o.Y)(y.A,{variant:"borderless",children:(0,o.FD)(p.Flexbox,{gap:12,children:[(0,o.Y)(ew.A.Button,{active:!0,style:{height:20,width:"95%"}}),(0,o.FD)(p.Flexbox,{gap:12,horizontal:!0,style:{width:"100%"},children:[(0,o.Y)(ew.A.Button,{active:!0,style:{height:16,width:120}}),(0,o.Y)(ew.A.Button,{active:!0,style:{height:16,width:80}}),(0,o.Y)(ew.A.Button,{active:!0,style:{height:16,width:60}}),(0,o.Y)(ew.A.Button,{active:!0,style:{height:16,width:70}})]}),(0,o.Y)(f.A,{maxItemWidth:200,rows:4,width:"100%",children:Array.from({length:4}).map((e,t)=>(0,o.Y)(ew.A.Button,{active:!0,style:{height:200,width:"100%"}},t))})]})}),(0,o.Y)("div",{style:{flex:1}}),(0,o.Y)(l.default,{style:{bottom:24,position:"sticky",width:"100%"},children:(0,o.Y)(ex,{disableAnimation:!0,showTitle:!1})})]}));eb.displayName="SkeletonList";let eA=()=>{let e=(0,n.k)(s.Q.activeGenerationTopicId),t=(0,n.k)(e=>e.useFetchGenerationBatches),r=(0,n.k)(d.r.isCurrentGenerationTopicLoaded);t(e);let i=(0,n.k)(d.r.currentGenerationBatches),a=i&&i.length>0;return r?a?(0,o.FD)(o.FK,{children:[(0,o.Y)(en,{},e),(0,o.Y)(l.default,{style:{bottom:24,position:"sticky",width:"100%"},children:(0,o.Y)(ex,{disableAnimation:!0,showTitle:!1})})]}):(0,o.Y)(ek,{}):(0,o.Y)(eb,{})},eY=()=>{let[e]=(0,a.ZA)("topic"),t=(0,n.k)(e=>e.isCreatingWithNewTopic);return!e||t?(0,o.Y)(ek,{}):(0,o.Y)(eA,{})},eC=(0,i.memo)(()=>(0,o.Y)(i.Suspense,{fallback:(0,o.Y)(eb,{}),children:(0,o.Y)(eY,{})}));eC.displayName="DesktopImagePage";let eF=eC},71181:(e,t,r)=>{r.d(t,{W:()=>u});var o=r(28802),i=r(60317),a=r(58244),n=r(87508),l=r(83034),s=r(59121),d=r(5930),c=r(31065);let u=()=>{let{t:e}=(0,s.Bd)("common"),{modal:t}=a.A.useApp(),[r,u]=(0,d.o)(e=>[c.I.systemStatus(e).hideGemini2_5FlashImagePreviewChineseWarning??!1,e.updateSystemStatus]);return(0,l.useCallback)(async({model:a,prompt:l,scenario:s="chat"})=>!(a.includes("gemini-2.5-flash-image-preview")&&!r&&l&&(0,i.xh)(l))||new Promise(r=>{let i=!1,a="image"===s?e("geminiImageChineseWarning.continueGenerate"):e("geminiImageChineseWarning.continueSend");t.confirm({cancelText:e("cancel",{ns:"common"}),centered:!0,content:(0,o.FD)("div",{children:[(0,o.Y)("p",{children:e("geminiImageChineseWarning.content")}),(0,o.Y)("div",{style:{marginTop:16},children:(0,o.Y)(n.A,{onChange:e=>{i=e.target.checked},children:e("geminiImageChineseWarning.doNotShowAgain")})})]}),okText:a,onCancel:()=>{r(!1)},onOk:()=>{i&&u({hideGemini2_5FlashImagePreviewChineseWarning:!0}),r(!0)},title:e("geminiImageChineseWarning.title")})}),[t,e,r,u])}},86344:(e,t,r)=>{r.d(t,{$:()=>l,T:()=>s});var o=r(80286),i=r(83034),a=r(81224),n=r(67806);function l(e){let t=(0,a.k)(n.imageGenerationConfigSelectors.parameters),r=(0,a.k)(n.imageGenerationConfigSelectors.parametersSchema),o=t?.[e],l=(0,a.k)(e=>e.setParamOnInput),s=(0,i.useCallback)(t=>{l(e,t)},[e,l]),d=r?.[e];return{value:o,setValue:s,...(0,i.useMemo)(()=>{let e=d&&"object"==typeof d&&"min"in d?d.min:void 0,t=d&&"object"==typeof d&&"max"in d?d.max:void 0,r=d&&"object"==typeof d&&"step"in d?d.step:void 0,o=d&&"object"==typeof d&&"description"in d?d.description:void 0,i=d&&"object"==typeof d&&"enum"in d?d.enum:void 0;return{description:o,max:t,min:e,step:r,enumValues:i,maxFileSize:d&&"object"==typeof d&&"maxFileSize"in d?d.maxFileSize:void 0,maxCount:d&&"object"==typeof d&&"maxCount"in d?d.maxCount:void 0}},[d])}}function s(){let e=(0,a.k)(),t=(0,a.k)(n.imageGenerationConfigSelectors.parametersSchema),r=(0,a.k)(e=>e.parameters?.aspectRatio),l=e.activeAspectRatio??r??o.DEFAULT_ASPECT_RATIO,s=(0,a.k)(n.imageGenerationConfigSelectors.isSupportedParam("width")),d=(0,a.k)(n.imageGenerationConfigSelectors.isSupportedParam("height")),c=(0,a.k)(n.imageGenerationConfigSelectors.isSupportedParam("aspectRatio")),u=(0,i.useMemo)(()=>{let e=t?.aspectRatio?.enum||[];return e.length>0?e:o.PRESET_ASPECT_RATIOS},[t]);return{isLocked:e.isAspectRatioLocked,toggleLock:e.toggleAspectRatioLock,width:e.parameters?.width,height:e.parameters?.height,aspectRatio:l,setWidth:e.setWidth,setHeight:e.setHeight,setAspectRatio:e.setAspectRatio,widthSchema:t?.width,heightSchema:t?.height,options:u,showDimensionControl:c||s||d}}},87381:(e,t,r)=>{r.d(t,{u:()=>i});var o=r(67400);let i=e=>{let t=o.DEFAULT_MODEL_PROVIDER_LIST.find(t=>t.id===e);return t?.name||e}}}]);