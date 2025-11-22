"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10717],{25598:(e,t,o)=>{o.d(t,{$:()=>F,$z:()=>T,IW:()=>z,TK:()=>I,V7:()=>N});var r=o(28802),i=o(37618),l=o(2893),a=o(37412),n=o(3136),s=o(12389),d=o(75431),c=o(67072),p=o(11577),u=o(14654),m=o(56055),h=o(4562),g=o(10726),f=o(20028),x=o(48019),v=o(10376),y=o(62874),b=o(54565),k=o(30598),w=o.n(k),$=o(83034),Y=o(59121),S=o(80457),A=o(9402);let F="lobe-model-info-tags",C=(0,p.rU)(({css:e,token:t})=>({tag:e`
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
  `})),N=(0,$.memo)(({directionReverse:e,placement:t="right",...o})=>{let{t:i}=(0,Y.Bd)("components"),{styles:l}=C();return(0,r.FD)(S.Flexbox,{className:F,direction:e?"horizontal-reverse":"horizontal",gap:4,width:"fit-content",children:[o.files&&(0,r.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:i("ModelSelect.featureTag.file"),children:(0,r.Y)(n.A,{className:l.tag,color:"success",size:"small",children:(0,r.Y)(s.default,{icon:m.A})})}),o.imageOutput&&(0,r.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:i("ModelSelect.featureTag.imageOutput"),children:(0,r.Y)(n.A,{className:l.tag,color:"success",size:"small",children:(0,r.Y)(s.default,{icon:h.A})})}),o.vision&&(0,r.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:i("ModelSelect.featureTag.vision"),children:(0,r.Y)(n.A,{className:l.tag,color:"success",size:"small",children:(0,r.Y)(s.default,{icon:g.A})})}),o.video&&(0,r.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:i("ModelSelect.featureTag.video"),children:(0,r.Y)(n.A,{className:l.tag,color:"magenta",size:"small",children:(0,r.Y)(s.default,{icon:f.A})})}),o.functionCall&&(0,r.Y)(a.A,{placement:t,styles:{root:{maxWidth:"unset",pointerEvents:"none"}},title:i("ModelSelect.featureTag.functionCall"),children:(0,r.Y)(n.A,{className:l.tag,color:"info",size:"small",children:(0,r.Y)(s.default,{icon:x.A})})}),o.reasoning&&(0,r.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:i("ModelSelect.featureTag.reasoning"),children:(0,r.Y)(n.A,{className:l.tag,color:"purple",size:"small",children:(0,r.Y)(s.default,{icon:v.A})})}),o.search&&(0,r.Y)(a.A,{placement:t,styles:{root:{pointerEvents:"none"}},title:i("ModelSelect.featureTag.search"),children:(0,r.Y)(n.A,{className:l.tag,color:"cyan",size:"small",children:(0,r.Y)(s.default,{icon:y.A})})}),"number"==typeof o.contextWindowTokens&&(0,r.Y)(a.A,{placement:t,styles:{root:{maxWidth:"unset",pointerEvents:"none"}},title:i("ModelSelect.featureTag.tokens",{tokens:0===o.contextWindowTokens?"∞":w()(o.contextWindowTokens).format("0,0")}),children:(0,r.Y)(n.A,{className:l.token,size:"small",children:0===o.contextWindowTokens?(0,r.Y)(b.A,{size:17,strokeWidth:1.6}):(0,A.KT)(o.contextWindowTokens)})})]})}),T=(0,$.memo)(({showInfoTag:e=!0,...t})=>{let{mobile:o}=(0,u.Q)();return(0,r.FD)(S.Flexbox,{align:"center",gap:32,horizontal:!0,justify:"space-between",style:{minWidth:o?"100%":void 0,overflow:"hidden",position:"relative",width:o?"80vw":"auto"},children:[(0,r.FD)(S.Flexbox,{align:"center",gap:8,horizontal:!0,style:{flexShrink:1,minWidth:0,overflow:"hidden"},children:[(0,r.Y)(i.A,{model:t.id,size:20}),(0,r.Y)(d.A,{style:o?{maxWidth:"60vw",overflowX:"auto",whiteSpace:"nowrap"}:{},children:t.displayName||t.id})]}),e&&(0,r.Y)(N,{...t})]})}),I=(0,$.memo)(({provider:e,name:t,source:o,logo:i})=>(0,r.FD)(S.Flexbox,{align:"center",gap:4,horizontal:!0,children:["custom"===o&&i?(0,r.Y)(c.A,{avatar:i,size:20,style:{filter:"grayscale(1)"},title:t}):(0,r.Y)(l.A,{provider:e,size:20,type:"mono"}),t]})),z=(0,$.memo)(({Icon:e,label:t})=>(0,r.FD)(S.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,r.Y)(e,{size:20}),(0,r.Y)("span",{children:t})]}))},33098:(e,t,o)=>{o.r(t),o.d(t,{default:()=>td});var r=o(28802),i=o(83034),l=o(75431),a=o(11577),n=o(59121),s=o(80457),d=o(94147),c=o(47260),p=o(5930),u=o(31065),m=o(81224),h=o(38759),g=o(61520),f=o(67806),x=o(86344),v=o(96337);let y=(0,i.memo)(()=>{let{value:e,setValue:t,min:o,max:i}=(0,x.$)("cfg");return(0,r.Y)(v.A,{max:i,min:o,onChange:t,value:e})});var b=o(9274),k=o(16049),w=o(66625),$=o(28726),Y=o(99454),S=o(20480),A=o(63639);let F=(0,i.memo)(({options:e,onChange:t,value:o,defaultValue:i,...n})=>{let s=(0,a.DP)(),[d,c]=(0,A.A)("",{defaultValue:i,onChange:t,value:o});return(0,r.Y)($.A,{padding:4,variant:"filled",...n,children:(0,r.Y)(Y.A,{gap:4,maxItemWidth:48,rows:16,children:e?.map(e=>{let o=d===e.value,[i,a]=e.value.split(":").map(Number),n=i>a;return(0,r.FD)($.A,{align:"center",clickable:!0,gap:4,justify:"center",onClick:()=>{c(e.value),t?.(e.value)},padding:8,shadow:o&&!s.isDarkMode,style:{backgroundColor:o?s.colorBgElevated:"transparent"},variant:"filled",children:[(0,r.Y)(S.default,{height:16,style:{marginTop:4},width:16,children:(0,r.Y)("div",{style:{aspectRatio:`${i} / ${a}`,border:`2px solid ${o?s.colorText:s.colorTextDescription}`,borderRadius:3,height:n?void 0:16,width:n?16:void 0}})}),(0,r.Y)(l.A,{fontSize:12,type:o?void 0:"secondary",children:e.label||e.value})]},e.value)})})})}),C={width:"100%"},N={fontWeight:500},T=(0,i.memo)(()=>{let{t:e}=(0,n.Bd)("image"),{isLocked:t,toggleLock:o,width:l,height:a,aspectRatio:d,setWidth:c,setHeight:p,setAspectRatio:u,widthSchema:m,heightSchema:h,options:g}=(0,x.T)(),f=(0,i.useMemo)(()=>g.map(e=>({label:e,value:e})),[g]),y=e(t?"config.aspectRatio.unlock":"config.aspectRatio.lock"),$=t?k.A:w.A;return(0,r.FD)(s.Flexbox,{gap:16,children:[(0,r.FD)(s.Flexbox,{gap:8,children:[(0,r.FD)(s.Flexbox,{align:"center",distribution:"space-between",horizontal:!0,children:[(0,r.Y)("span",{style:N,children:e("config.aspectRatio.label")}),(0,r.Y)(b.A,{"aria-label":y,icon:$,onClick:o,size:"small",title:y})]}),(0,r.Y)(F,{onChange:u,options:f,style:C,value:d})]}),m&&(0,r.FD)(s.Flexbox,{gap:8,children:[(0,r.Y)("span",{style:N,children:e("config.width.label")}),(0,r.Y)(v.A,{max:m.max,min:m.min,onChange:c,value:l??m.min})]}),h&&(0,r.FD)(s.Flexbox,{gap:8,children:[(0,r.Y)("span",{style:N,children:e("config.height.label")}),(0,r.Y)(v.A,{max:h.max,min:h.min,onChange:p,value:a??h.min})]})]})});T.displayName="DimensionControlGroup";var I=o(59202);let z=(0,i.memo)(()=>(0,r.FD)(s.Flexbox,{gap:32,padding:"12px 12px 0 12px",style:{height:"100%"},children:[(0,r.FD)(s.Flexbox,{gap:8,children:[(0,r.Y)(I.A.Input,{active:!0,size:"small",style:{width:100}}),(0,r.Y)(I.A.Input,{active:!0,size:"large",style:{width:"100%"}})]}),(0,r.FD)(s.Flexbox,{gap:8,children:[(0,r.Y)(I.A.Input,{active:!0,size:"small",style:{width:60}}),(0,r.Y)(I.A.Node,{active:!0,style:{borderRadius:8,height:100,width:"100%"}})]}),Array.from({length:2},(e,t)=>(0,r.FD)(s.Flexbox,{gap:8,children:[(0,r.Y)(I.A.Input,{active:!0,size:"small",style:{width:80}}),(0,r.Y)(I.A.Input,{active:!0,size:"default",style:{width:"100%"}})]},t)),(0,r.Y)(s.Flexbox,{padding:"12px 0",style:{marginTop:"auto"},children:(0,r.FD)(s.Flexbox,{gap:8,children:[(0,r.Y)(I.A.Input,{active:!0,size:"small",style:{width:60}}),(0,r.Y)(I.A.Input,{active:!0,size:"default",style:{width:"100%"}})]})})]}));z.displayName="ImageConfigSkeleton";var D=o(96148),P=o(6563),M=o(91951),U=o(90897);let B=(0,a.rU)(({css:e,token:t})=>({actionButton:e`
    flex-shrink: 0;
  `,button:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 40px;
    height: 32px;
    padding-block: 0;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadius}px;

    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};

    background: ${t.colorBgContainer};

    transition: all 0.2s ease;

    &:hover {
      border-color: ${t.colorPrimary};
      background: ${t.colorBgTextHover};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        border-color: ${t.colorBorder};
        background: ${t.colorBgContainer};
      }
    }
  `,cancelButton:e`
    border-color: ${t.colorBorder};
    color: ${t.colorTextTertiary};

    &:hover {
      border-color: ${t.colorBorderSecondary};
      color: ${t.colorText};
      background: ${t.colorBgTextHover};
    }
  `,confirmButton:e`
    border-color: ${t.colorSuccess};
    color: ${t.colorSuccess};

    &:hover {
      border-color: ${t.colorSuccessHover};
      color: ${t.colorSuccessHover};
      background: ${t.colorSuccessBg};
    }
  `,container:e`
    display: flex;
    gap: 8px;
    align-items: center;
  `,editContainer:e`
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  `,input:e`
    flex: 1;
    min-width: 80px;

    .ant-input {
      font-weight: 500;
      text-align: center;
    }
  `,selectedButton:e`
    border-color: ${t.colorPrimary};
    color: ${t.colorPrimary};
    background: ${t.colorPrimaryBg};

    &:hover {
      border-color: ${t.colorPrimary};
      color: ${t.colorPrimary};
      background: ${t.colorPrimaryBgHover};
    }
  `})),R=(0,i.memo)(({presetCounts:e=[1,2,4,8],min:t=1,max:o=50,disabled:l=!1})=>{let a=(0,m.k)(f.imageGenerationConfigSelectors.imageNum),n=(0,m.k)(e=>e.setImageNum),{styles:d,cx:c}=B(),[p,u]=(0,i.useState)(!1),[h,g]=(0,i.useState)(null),x=(0,i.useRef)(null),v=(0,i.useRef)(null),y=!e.includes(a),k=(0,i.useCallback)(e=>{l||n(e)},[l,n]),w=(0,i.useCallback)(()=>{l||(g(a),x.current=a,u(!0))},[l,a]),$=(0,i.useCallback)(()=>{let e=x.current;null===e?u(!1):(e>o?e=o:e<t&&(e=t),n(e),u(!1),g(null))},[t,o,n]),Y=(0,i.useCallback)(()=>{u(!1),g(null)},[]),S=(0,i.useCallback)(e=>{if(console.log("handleInputChange",e),null===e){g(null),x.current=null;return}let t=parseInt(String(e),10);isNaN(t)||(g(t),x.current=t)},[]);(0,i.useEffect)(()=>{p&&setTimeout(()=>{v.current&&(v.current.focus(),v.current.select())},100)},[p]);let A=(0,i.useCallback)(()=>null!==h,[h]);return p?(0,r.FD)("div",{className:d.editContainer,children:[(0,r.Y)(D.A,{className:d.input,max:o,min:t,onChange:S,onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),Y())},onPressEnter:$,placeholder:`${t}-${o}`,ref:v,size:"small",value:h}),(0,r.Y)(b.A,{className:c(d.actionButton,d.confirmButton),disabled:!A(),icon:P.A,onClick:$,size:"small"}),(0,r.Y)(b.A,{className:c(d.actionButton,d.cancelButton),icon:M.A,onClick:Y,size:"small"})]}):(0,r.FD)(s.Flexbox,{className:d.container,horizontal:!0,children:[e.map(e=>(0,r.Y)("button",{className:c(d.button,a===e&&d.selectedButton),disabled:l,onClick:()=>k(e),type:"button",children:e},e)),y?(0,r.Y)("button",{className:c(d.button,d.selectedButton),disabled:l,onClick:w,type:"button",children:a}):(0,r.Y)("button",{className:d.button,disabled:l,onClick:w,type:"button",children:(0,r.Y)(U.A,{size:16})})]})});R.displayName="ImageCountSelector";var E=o(80286);let L=e=>{let t="string"==typeof e?e:e?.url;return{dimensions:"object"==typeof e?e?.dimensions:void 0,url:t}},W=()=>{let e=(0,m.k)(f.imageGenerationConfigSelectors.parametersSchema),t=(0,m.k)(f.imageGenerationConfigSelectors.isSupportedParam("width")),o=(0,m.k)(f.imageGenerationConfigSelectors.isSupportedParam("height")),r=(0,m.k)(e=>e.setWidth),i=(0,m.k)(e=>e.setHeight);return{autoSetDimensions:l=>{if(!t||!o)return;let a={height:{max:e.height?.max||E.DEFAULT_DIMENSION_CONSTRAINTS.MAX_SIZE,min:e.height?.min||E.DEFAULT_DIMENSION_CONSTRAINTS.MIN_SIZE},width:{max:e.width?.max||E.DEFAULT_DIMENSION_CONSTRAINTS.MAX_SIZE,min:e.width?.min||E.DEFAULT_DIMENSION_CONSTRAINTS.MIN_SIZE}},n=((e,t,o)=>{let r=e,i=t;if(r>o.width.max||i>o.height.max){let e=Math.min(o.width.max/r,o.height.max/i);r=Math.round(r*e),i=Math.round(i*e)}if(r<o.width.min||i<o.height.min){let e=Math.max(o.width.min/r,o.height.min/i);r=Math.round(r*e),i=Math.round(i*e)}return r=Math.max(o.width.min,Math.min(o.width.max,r)),i=Math.max(o.height.min,Math.min(o.height.max,i)),r=8*Math.round(r/8),i=8*Math.round(i/8),r=Math.max(o.width.min,Math.min(o.width.max,r)),{height:i=Math.max(o.height.min,Math.min(o.height.max,i)),width:r}})(l.width,l.height,a);r(n.width),i(n.height)},canAutoSet:t&&o,extractUrlAndDimensions:L}};var j=o(58244),O=o(4562),G=o(65101),_=o(56003);let H=({onDrop:e,accept:t="image/*"})=>{let[o,r]=(0,i.useState)(!1),l=(0,i.useRef)(0);return{dragHandlers:{onDragEnter:e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.types.includes("Files")&&(l.current++,r(!0))},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),l.current--,0===l.current&&r(!1)},onDragOver:e=>{e.preventDefault(),e.stopPropagation()},onDrop:async o=>{o.preventDefault(),o.stopPropagation(),l.current=0,r(!1);let i=Array.from(o.dataTransfer.files).filter(e=>{if("*/*"===t)return!0;if(t.endsWith("/*")){let o=t.slice(0,-2);return e.type.startsWith(o)}return e.type===t});i.length>0&&e(i)}},isDragOver:o}},K=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,t)).toFixed(1))} ${["B","KB","MB","GB"][t]}`},Z=(e,t)=>{let{t:o}=(0,n.Bd)("components"),{message:r}=j.A.useApp();return{validateFiles:(0,i.useCallback)((i,l=0)=>{var a,n,s;let d,c,p,u,m=(a={maxAddedFiles:e?e-l:void 0,maxFileSize:t},d=[],c=[],p=[],n=i.length,!(u=(s=a.maxAddedFiles)&&n>s?{error:"imageCountExceeded",valid:!1}:{valid:!0}).valid&&u.error&&d.push(u.error),i.forEach(e=>{let t,o=(t=a.maxFileSize??0xa00000,e.size>t?{actualSize:e.size,error:"fileSizeExceeded",fileName:e.name,maxSize:t,valid:!1}:{valid:!0});c.push(o),!o.valid&&o.error&&(d.push(o.error),p.push(o))}),{errors:Array.from(new Set(d)),failedFiles:p,fileResults:c,valid:0===d.length});return!!m.valid||(m.errors.forEach(e=>{if("fileSizeExceeded"===e){let e=m.failedFiles?.filter(e=>"fileSizeExceeded"===e.error&&e.actualSize&&e.maxSize)||[];if(1===e.length){let t=e[0],i=K(t.actualSize),l=K(t.maxSize),a=t.fileName||"File";r.error(o("MultiImagesUpload.validation.fileSizeExceededDetail",{actualSize:i,fileName:a,maxSize:l}))}else if(e.length>1){let t=K(e[0].maxSize),i=e.map(e=>`${e.fileName||"File"} (${K(e.actualSize)})`).join(", ");r.error(o("MultiImagesUpload.validation.fileSizeExceededMultiple",{count:e.length,fileList:i,maxSize:t}))}}else"imageCountExceeded"===e&&r.error(o("MultiImagesUpload.validation.imageCountExceeded"))}),!1)},[e,t,r,o])}},q=(0,a.rU)(({css:e,token:t})=>({dragOver:e`
    transform: scale(1.02);
    border-color: ${t.colorPrimary} !important;
    box-shadow: 0 0 0 2px ${t.colorPrimary}20;
    transition: transform 0.2s ease;
  `,dragTransition:e`
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  `})),X=(0,a.rU)(({css:e,token:t})=>({changeButton:e`
      cursor: pointer;

      padding-block: 8px;
      padding-inline: 16px;
      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadius}px;

      font-size: 12px;
      font-weight: 500;
      color: ${t.colorText};

      background: ${t.colorBgContainer};
      box-shadow: ${t.boxShadowSecondary};

      &:hover {
        border-color: ${t.colorPrimary};
        color: ${t.colorPrimary};
        background: ${t.colorBgElevated};
      }
    `,changeOverlay:e`
      position: absolute;
      z-index: 5;
      inset: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      background: ${t.colorBgMask};

      transition: opacity ${t.motionDurationMid} ease;
    `,container:e`
      width: 100%;
    `,deleteIcon:e`
      cursor: pointer;

      position: absolute;
      z-index: 10;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 24px;
      height: 24px;
      border-radius: 50%;

      color: ${t.colorTextLightSolid};

      opacity: 0;
      background: ${t.colorBgMask};

      transition: opacity ${t.motionDurationMid} ease;

      &:hover {
        color: ${t.colorError};
        background: ${t.colorErrorBg};
      }
    `,placeholder:e`
      cursor: pointer;

      width: 100%;
      height: 160px;
      border: 2px dashed ${t.colorBorder};
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorFillAlter};

      transition: all ${t.motionDurationMid} ease;

      &:hover {
        border-color: ${t.colorPrimary};
        background: ${t.colorFillSecondary};
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${t.colorPrimary};
        background: ${t.colorPrimaryBg};
      }
    `,placeholderIcon:e`
      color: ${t.colorTextTertiary};
    `,placeholderText:e`
      font-size: 12px;
      line-height: 1.4;
      color: ${t.colorTextSecondary};
      text-align: center;
    `,successDisplay:e`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border: 2px solid transparent;
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorBgContainer};

      transition: all ${t.motionDurationMid} ease;

      &:hover .change-overlay {
        opacity: 1;
      }

      &:hover .delete-icon {
        opacity: 1;
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${t.colorPrimary};
        background: ${t.colorPrimaryBg};
      }
    `,uploadingDisplay:e`
      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border: 2px solid ${t.colorPrimary};
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorFillSecondary};
    `,uploadingOverlay:e`
      position: absolute;
      z-index: 5;
      inset: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${t.colorBgMask};
    `})),Q=(0,i.memo)(({value:e,size:t=60,strokeWidth:o=6,showText:i=!0})=>{let l=(0,a.DP)(),n=Math.min(100,Math.max(0,e)),s=(t-o)/2,d=2*s*Math.PI;return(0,r.FD)("div",{style:{alignItems:"center",display:"flex",height:t,justifyContent:"center",position:"relative",width:t},children:[(0,r.Y)("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:(0,r.Y)("circle",{cx:t/2,cy:t/2,fill:"none",r:s,stroke:l.colorBorder,strokeWidth:o})}),(0,r.Y)("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:(0,r.Y)("circle",{cx:t/2,cy:t/2,fill:"none",r:s,stroke:l.colorPrimary,strokeDasharray:d,strokeDashoffset:d-n/100*d,strokeLinecap:"round",strokeWidth:o,style:{transition:"stroke-dashoffset 0.2s ease-in-out"}})}),i&&(0,r.FD)("span",{style:{color:l.colorPrimary,fontSize:"12px",fontWeight:600,position:"relative",zIndex:1},children:[Math.round(n),"%"]})]})});Q.displayName="CircularProgress";let V=(0,i.memo)(({isDragOver:e,onClick:t})=>{let{styles:o}=X(),{styles:i}=q(),{t:l}=(0,n.Bd)("components");return(0,r.FD)(S.default,{className:`${o.placeholder} ${i.dragTransition} ${e?i.dragOver:""}`,gap:16,horizontal:!1,onClick:t,children:[(0,r.Y)(O.A,{className:o.placeholderIcon,size:48,strokeWidth:1.5}),(0,r.FD)("div",{className:o.placeholderText,children:[l("ImageUpload.placeholder.primary"),(0,r.Y)("br",{}),l("ImageUpload.placeholder.secondary")]})]})});V.displayName="Placeholder";let J=(0,i.memo)(({previewUrl:e,progress:t})=>{let{styles:o}=X();return(0,r.FD)("div",{className:o.uploadingDisplay,children:[(0,r.Y)(G.default,{alt:"Uploading preview",fill:!0,src:e,style:{objectFit:"cover"},unoptimized:!0}),(0,r.Y)("div",{className:o.uploadingOverlay,children:(0,r.Y)(Q,{value:t})})]})});J.displayName="UploadingDisplay";let ee=(0,i.memo)(({imageUrl:e,isDragOver:t,onDelete:o,onChangeImage:i})=>{let{styles:l}=X(),{styles:a}=q(),{t:s}=(0,n.Bd)("components");return(0,r.FD)("div",{className:`${l.successDisplay} ${a.dragTransition} ${t?a.dragOver:""}`,onClick:i,children:[(0,r.Y)(G.default,{alt:"Uploaded image",fill:!0,src:e,style:{objectFit:"cover"},unoptimized:!0}),(0,r.Y)("div",{className:`${l.deleteIcon} delete-icon`,onClick:e=>{e.stopPropagation(),o?.()},children:(0,r.Y)(M.A,{size:14})}),(0,r.Y)("div",{className:`${l.changeOverlay} change-overlay`,onClick:e=>{e.stopPropagation(),i?.()},children:(0,r.Y)("button",{className:l.changeButton,type:"button",children:s("ImageUpload.actions.changeImage")})})]})});ee.displayName="SuccessDisplay";let et=(0,i.memo)(({value:e,onChange:t,style:o,className:l,maxFileSize:a})=>{let s=(0,i.useRef)(null),d=(0,_.x)(e=>e.uploadWithProgress),[c,p]=(0,i.useState)(null),{t:u}=(0,n.Bd)("components"),{message:m}=j.A.useApp(),{validateFiles:h}=Z(void 0,a);(0,i.useEffect)(()=>()=>{c?.previewUrl&&c.previewUrl.startsWith("blob:")&&URL.revokeObjectURL(c.previewUrl)},[c?.previewUrl]);let g=()=>{s.current?.click()},f=async e=>{let o=e.target.files?.[0];if(!o||!h([o]))return;let r=URL.createObjectURL(o);p({previewUrl:r,progress:0,status:"pending"});try{let e=await d({file:o,onStatusUpdate:e=>{"updateFile"===e.type?p(t=>{if(!t)return null;let o=e.value.status;return o?{...t,error:"error"===o?"Upload failed":void 0,progress:e.value.uploadState?.progress||0,status:o}:t}):"removeFile"===e.type&&p(null)},skipCheckFileType:!0});if(e?.url){let o=e.dimensions?{dimensions:e.dimensions,url:e.url}:e.url;t?.(o)}}catch{p(e=>e?{...e,error:"Upload failed",status:"error"}:null)}finally{r.startsWith("blob:")&&URL.revokeObjectURL(r),setTimeout(()=>{p(null)},1e3)}},{isDragOver:x,dragHandlers:v}=H({accept:"image/*",onDrop:async e=>{e.length>1&&m.warning(u("ImageUpload.actions.dropMultipleFiles"));let o=e[0];if(!h([o]))return;let r=URL.createObjectURL(o);p({previewUrl:r,progress:0,status:"pending"});try{let e=await d({file:o,onStatusUpdate:e=>{"updateFile"===e.type?p(t=>{if(!t)return null;let o=e.value.status;return o?{...t,error:"error"===o?"Upload failed":void 0,progress:e.value.uploadState?.progress||0,status:o}:t}):"removeFile"===e.type&&p(null)},skipCheckFileType:!0});if(e?.url){let o=e.dimensions?{dimensions:e.dimensions,url:e.url}:e.url;t?.(o)}}catch{p(e=>e?{...e,error:"Upload failed",status:"error"}:null)}finally{r.startsWith("blob:")&&URL.revokeObjectURL(r),setTimeout(()=>{p(null)},1e3)}}}),y=!!e,b=!!c;return(0,r.FD)("div",{className:l,...v,style:o,children:[(0,r.Y)("input",{accept:"image/*",onChange:f,onClick:e=>{e.currentTarget.value=""},ref:s,style:{display:"none"},type:"file"}),b&&c?(0,r.Y)(J,{previewUrl:c.previewUrl,progress:c.progress}):y?(0,r.Y)(ee,{imageUrl:e,isDragOver:x,onChangeImage:g,onDelete:()=>{t?.(void 0)}}):(0,r.Y)(V,{isDragOver:x,onClick:g})]})});et.displayName="ImageUpload";let eo=(0,i.memo)(()=>{let{value:e,setValue:t,maxFileSize:o}=(0,x.$)("imageUrl"),{autoSetDimensions:i,extractUrlAndDimensions:l}=W();return(0,r.Y)(et,{maxFileSize:o,onChange:e=>{let{url:o,dimensions:r}=l(e);t(o??null),r&&i(r)},value:e})});var er=o(29703),ei=o(15447),el=o(66700);let ea=()=>`${Date.now()}-${Math.random().toString(36).slice(2,11)}`,en=(0,a.rU)(({css:e,token:t})=>({content:e`
    display: flex;
    height: 480px;
    background: ${t.colorBgContainer};
  `,fileName:e`
    margin-block-start: 16px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius}px;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillSecondary};
  `,footer:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 16px;
    padding-inline: 24px;
    border-block-start: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorBgContainer};
  `,modal:e`
    .ant-modal-content {
      overflow: hidden;
      padding: 0;
    }
  `,newFileIndicator:e`
    position: absolute;
    z-index: 5;
    inset-block-start: 4px;
    inset-inline-start: 4px;

    padding-block: 2px;
    padding-inline: 6px;
    border-radius: ${t.borderRadiusSM}px;

    font-size: 10px;
    font-weight: 500;
    color: ${t.colorWhite};

    background: ${t.colorSuccess};
  `,previewArea:e`
    position: relative;

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 24px;
  `,previewEmpty:e`
    font-size: 16px;
    color: ${t.colorTextSecondary};
  `,previewImage:e`
    max-width: 100%;
    max-height: 320px;
    border-radius: ${t.borderRadiusLG}px;
    box-shadow: ${t.boxShadowSecondary};
  `,sidebar:e`
    overflow-y: auto;

    width: 200px;
    padding: 16px;
    border-inline-end: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorBgLayout};
  `,thumbnail:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 100%;
    height: 120px;
    border: 2px solid transparent;
    border-radius: ${t.borderRadius}px;

    transition: border-color 0.2s ease;

    &:hover {
      border-color: ${t.colorPrimary};
    }

    &:hover .thumbnail-delete {
      opacity: 1;
    }

    &.selected {
      border-color: ${t.colorPrimary};
    }
  `,thumbnailDelete:e`
    cursor: pointer;

    position: absolute;
    z-index: 10;
    inset-block-start: 4px;
    inset-inline-end: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    color: ${t.colorTextLightSolid};

    opacity: 0;
    background: ${t.colorBgMask};

    transition: opacity 0.2s ease;

    &:hover {
      color: ${t.colorError};
      background: ${t.colorErrorBg};
    }
  `,thumbnailList:e`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `})),es=(0,i.memo)(({open:e,images:t,maxCount:o,onClose:l,onComplete:a})=>{let{styles:s}=en(),{t:d}=(0,n.Bd)("components"),c=(0,i.useRef)(null),{validateFiles:p}=Z(o),[u,m]=(0,i.useState)([]),[h,g]=(0,i.useState)(0);(0,i.useEffect)(()=>{e&&(m(t.map(e=>({id:ea(),url:e}))),g(0))},[e,t]),(0,i.useEffect)(()=>()=>{u.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)})},[u]),(0,i.useEffect)(()=>{e||(u.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),m([]))},[e]);let f=u[h],x=e=>e.url?e.url:e.previewUrl?e.previewUrl:"";return(0,r.FD)(er.A,{centered:!0,className:s.modal,footer:null,onCancel:l,open:e,title:d("MultiImagesUpload.modal.title",{count:u.length}),width:720,children:[(0,r.Y)("input",{accept:"image/*",multiple:!0,onChange:e=>{let t=e.target.files;if(!t||0===t.length||!p(Array.from(t),u.length))return;let o=Array.from(t).map(e=>({file:e,id:ea(),previewUrl:URL.createObjectURL(e)}));m(e=>[...e,...o])},onClick:e=>{e.currentTarget.value=""},ref:c,style:{display:"none"},type:"file"}),(0,r.FD)("div",{className:s.content,children:[(0,r.Y)("div",{className:s.sidebar,children:(0,r.Y)("div",{className:s.thumbnailList,children:u.map((e,t)=>{let o=x(e),i=!!e.file;return(0,r.FD)("div",{className:`${s.thumbnail} ${t===h?"selected":""}`,onClick:()=>g(t),children:[(0,r.Y)(G.default,{alt:`Image ${t+1}`,fill:!0,src:o,style:{objectFit:"cover"},unoptimized:!0}),i&&(0,r.Y)("div",{className:s.newFileIndicator,children:d("MultiImagesUpload.modal.newFileIndicator")}),(0,r.Y)("div",{className:`${s.thumbnailDelete} thumbnail-delete`,onClick:e=>{let o,r;return e.stopPropagation(),void(o=u[t],o?.previewUrl&&URL.revokeObjectURL(o.previewUrl),m(r=u.filter((e,o)=>o!==t)),h>=r.length&&g(Math.max(0,r.length-1)))},children:(0,r.Y)(M.A,{size:12})})]},e.id)})})}),(0,r.Y)("div",{className:s.previewArea,children:f?(0,r.FD)(r.FK,{children:[(0,r.Y)(G.default,{alt:"Preview",className:s.previewImage,height:320,src:x(f),style:{objectFit:"contain"},unoptimized:!0,width:400}),(0,r.Y)("div",{className:s.fileName,children:(e=>{if(e.file)return e.file.name;if(e.url){var t=e.url;try{return new URL(t).pathname.split("/").pop()||"image.jpg"}catch{return"image.jpg"}}return""})(f)})]}):(0,r.Y)("div",{className:s.previewEmpty,children:d("MultiImagesUpload.modal.selectImageToPreview")})})]}),(0,r.FD)("div",{className:s.footer,children:[(0,r.Y)(ei.A,{disabled:!!o&&u.length>=o,icon:(0,r.Y)(el.A,{size:16}),onClick:()=>{c.current?.click()},type:"default",children:d("MultiImagesUpload.modal.upload")}),(0,r.Y)(ei.A,{onClick:()=>{a(u),l()},type:"primary",children:d("MultiImagesUpload.modal.complete")})]})]})});es.displayName="ImageManageModal";let ed=(0,a.rU)(({css:e,token:t})=>({deleteIcon:e`
      cursor: pointer;

      position: absolute;
      z-index: 10;
      inset-block-start: 4px;
      inset-inline-end: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 20px;
      height: 20px;
      border-radius: 50%;

      color: ${t.colorTextLightSolid};

      opacity: 0;
      background: ${t.colorBgMask};

      transition: opacity 0.2s ease;

      &:hover {
        color: ${t.colorError};
        background: ${t.colorErrorBg};
      }
    `,imageItem:e`
      position: relative;

      overflow: hidden;

      width: ${51}px;
      height: ${51}px;
      border-radius: ${t.borderRadius}px;

      background: ${t.colorBgContainer};

      &:hover .delete-icon {
        opacity: 1;
      }
    `,imageThumbnails:e`
      cursor: pointer;

      display: flex;
      gap: 8px;

      width: 100%;
      height: ${51}px;
      padding: 0;
      border-radius: ${t.borderRadiusLG}px;

      transition: all 0.2s ease;

      &.drag-over {
        transform: scale(1.02);
        background: ${t.colorPrimaryBg};
      }
    `,moreOverlay:e`
      position: absolute;
      inset-block: 0 0;
      inset-inline: 0 0;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 16px;
      font-weight: 600;
      color: ${t.colorTextLightSolid};

      background: ${t.colorBgMask};
    `,placeholder:e`
      cursor: pointer;

      width: 100%;
      height: 120px;
      border: 2px dashed ${t.colorBorder};
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorFillAlter};

      transition: all 0.2s ease;

      &:hover {
        border-color: ${t.colorPrimary};
        background: ${t.colorFillSecondary};
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${t.colorPrimary};
        background: ${t.colorPrimaryBg};
      }
    `,placeholderIcon:e`
      color: ${t.colorTextTertiary};
    `,placeholderText:e`
      font-size: 12px; /* Made smaller than default token.fontSize (14px) */
      line-height: 1.4;
      color: ${t.colorTextSecondary};
      text-align: center;
    `,progress:e`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;
      height: 120px;
      border: 2px solid ${t.colorPrimary};
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorFillSecondary};

      transition: all 0.2s ease;

      &.drag-over {
        transform: scale(1.02);
        background: ${t.colorPrimaryBg};
      }
    `,progressPrimary:e`
      margin-block-end: 4px;
      font-size: 14px;
      font-weight: 600;
      color: ${t.colorPrimary};
    `,progressText:e`
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
      color: ${t.colorText};
      text-align: center;
    `,singleImageDisplay:e`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorBgContainer};

      transition: all 0.2s ease;

      &:hover .upload-more-overlay {
        opacity: 1;
      }

      &:hover .delete-icon {
        opacity: 1;
      }

      &.drag-over {
        transform: scale(1.02);
        background: ${t.colorPrimaryBg};
      }
    `,uploadMoreButton:e`
      cursor: pointer;

      padding-block: 8px;
      padding-inline: 16px;
      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadius}px;

      font-size: 12px;
      font-weight: 500;
      color: ${t.colorText};

      background: ${t.colorBgContainer};
      box-shadow: ${t.boxShadowSecondary};

      &:hover {
        border-color: ${t.colorPrimary};
        color: ${t.colorPrimary};
        background: ${t.colorBgElevated};
      }
    `,uploadMoreOverlay:e`
      position: absolute;
      z-index: 5;
      inset-block: 0 0;
      inset-inline: 0 0;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      background: ${t.colorBgMask};

      transition: opacity 0.2s ease;
    `})),ec=(0,i.memo)(({isDragOver:e,onClick:t})=>{let{styles:o}=ed(),{t:i}=(0,n.Bd)("components");return(0,r.FD)(S.default,{className:`${o.placeholder} ${e?"drag-over":""}`,gap:16,horizontal:!1,onClick:t,children:[(0,r.Y)(O.A,{className:o.placeholderIcon,size:48,strokeWidth:1.5}),(0,r.FD)("div",{className:o.placeholderText,children:[i("MultiImagesUpload.placeholder.primary"),(0,r.Y)("br",{}),i("MultiImagesUpload.placeholder.secondary")]})]})});ec.displayName="ImageUploadPlaceholder";let ep=(0,i.memo)(({value:e,size:t=48,strokeWidth:o=4,className:i,showText:l=!0})=>{let n=(0,a.DP)(),s=Math.min(100,Math.max(0,e)),d=(t-o)/2,c=2*d*Math.PI;return(0,r.FD)("div",{className:i,style:{alignItems:"center",display:"flex",height:t,justifyContent:"center",position:"relative",width:t},children:[(0,r.Y)("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:(0,r.Y)("circle",{cx:t/2,cy:t/2,fill:"none",r:d,stroke:n.colorBorder,strokeWidth:o})}),(0,r.Y)("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:(0,r.Y)("circle",{cx:t/2,cy:t/2,fill:"none",r:d,stroke:n.colorPrimary,strokeDasharray:c,strokeDashoffset:c-s/100*c,strokeLinecap:"round",strokeWidth:o,style:{transition:"stroke-dashoffset 0.2s ease-in-out"}})}),l&&(0,r.FD)("span",{style:{color:n.colorPrimary,fontSize:"12px",fontWeight:600,position:"relative",zIndex:1},children:[Math.round(s),"%"]})]})});ep.displayName="CircularProgress";let eu=(0,i.memo)(({completedCount:e,totalCount:t,currentProgress:o,showCount:i=!0})=>{let{styles:l}=ed(),{t:a}=(0,n.Bd)("components");return(0,r.FD)(S.default,{className:l.progress,gap:16,horizontal:!1,children:[(0,r.Y)(ep,{size:60,strokeWidth:6,value:o}),(0,r.Y)("div",{className:l.progressText,children:i?(0,r.Y)("div",{className:l.progressPrimary,children:a("MultiImagesUpload.progress.uploadingWithCount",{completed:e,total:t})}):null})]})});eu.displayName="ImageUploadProgress";let em=(0,i.memo)(({images:e,isDragOver:t,onClick:o,onDelete:i})=>{let{styles:l}=ed(),{styles:a}=q(),n=e.slice(0,4),s=Math.max(0,e.length-3);return(0,r.Y)("div",{className:`${l.imageThumbnails} ${a.dragTransition} ${t?a.dragOver:""}`,onClick:o,children:n.map((e,t)=>{let o=3===t&&s>1;return(0,r.FD)("div",{className:l.imageItem,children:[(0,r.Y)(G.default,{alt:`Uploaded image ${t+1}`,fill:!0,src:e,style:{objectFit:"cover"},unoptimized:!0}),!o&&(0,r.Y)("div",{className:`${l.deleteIcon} delete-icon`,onClick:e=>{e.stopPropagation(),i?.(t)},children:(0,r.Y)(M.A,{size:12})}),o&&(0,r.FD)("div",{className:l.moreOverlay,children:["+",s]})]},`${e}-${t}`)})})});em.displayName="ImageThumbnails";let eh=(0,i.memo)(({imageUrl:e,isDragOver:t,onClick:o,onDelete:i})=>{let{styles:l}=ed(),{styles:a}=q(),{t:s}=(0,n.Bd)("components");return(0,r.FD)("div",{className:`${l.singleImageDisplay} ${a.dragTransition} ${t?a.dragOver:""}`,children:[(0,r.Y)(G.default,{alt:"Uploaded image",fill:!0,src:e,style:{objectFit:"contain"},unoptimized:!0}),(0,r.Y)("div",{className:`${l.deleteIcon} delete-icon`,onClick:e=>{e.stopPropagation(),i?.()},children:(0,r.Y)(M.A,{size:12})}),(0,r.Y)("div",{className:`${l.uploadMoreOverlay} upload-more-overlay`,onClick:e=>{e.stopPropagation(),o?.()},children:(0,r.Y)("button",{className:l.uploadMoreButton,type:"button",children:s("MultiImagesUpload.actions.uploadMore")})})]})});eh.displayName="SingleImageDisplay";let eg=(0,i.memo)(({value:e,onChange:t,style:o,className:l,maxCount:a,maxFileSize:n})=>{let s=(0,i.useRef)(null),d=(0,_.x)(e=>e.uploadWithProgress),[c,p]=(0,i.useState)([]),[u,m]=(0,i.useState)(!1),{styles:h}=q(),{validateFiles:g}=Z(a,n);(0,i.useEffect)(()=>()=>{c.forEach(e=>{e.file&&e.url.startsWith("blob:")&&URL.revokeObjectURL(e.url)})},[c]);let f=()=>{m(!0)},x=o=>{if(!e)return;let r=e.filter((e,t)=>t!==o);t?.(r)},v=async(o,r)=>{let i;if(0===o.length)return;let l=void 0!==r?r:e||[];if(!g(o,l.length))return;let a=o.map(e=>({file:e,id:`${Date.now()}-${e.name}`,progress:0,status:"pending",url:URL.createObjectURL(e)}));p(e=>[...e,...a]);let n=a.map(e=>d({file:e.file,onStatusUpdate:t=>{"updateFile"===t.type?p(o=>o.map(o=>o.id===e.id?{...o,error:"error"===t.value.status?"Upload failed":void 0,progress:t.value.uploadState?.progress||0,status:t.value.status}:o)):"removeFile"===t.type&&p(t=>t.filter(t=>t.id!==e.id))},skipCheckFileType:!0})),s=await Promise.allSettled(n),c=[];if(s.forEach((e,t)=>{let o=a[t];"fulfilled"===e.status&&e.value?(c.push(e.value.url),0===t&&e.value.dimensions&&(i=e.value.dimensions),p(t=>t.map(t=>t.id===o.id?{...t,file:void 0,progress:100,status:"success",url:e.value.url}:t))):p(e=>e.map(e=>e.id===o.id?{...e,error:"Upload failed",progress:0,status:"error"}:e)),o.url.startsWith("blob:")&&URL.revokeObjectURL(o.url)}),c.length>0){let e=[...l,...c];0===l.length&&1===c.length&&i?t?.({dimensions:i,urls:e}):t?.(e)}setTimeout(()=>{p([])},1e3)},y=async e=>{let t=e.target.files;t&&0!==t.length&&await v(Array.from(t))},{isDragOver:b,dragHandlers:k}=H({accept:"image/*",onDrop:async e=>{await v(e)}}),w=async e=>{let o=e.filter(e=>e.url).map(e=>e.url),r=e.filter(e=>e.file).map(e=>e.file);t?.(o),r.length>0&&await v(r,o)},$=c.length,Y=c.filter(e=>(e.progress||0)>=100).length,S=$>0?c.reduce((e,t)=>e+(t.progress||0),0)/$:0,A=e&&e.length>0,F=c.length>0,C=e&&1===e.length;return(0,r.FD)("div",{className:l,...k,style:o,children:[(0,r.Y)("input",{accept:"image/*",multiple:!0,onChange:y,onClick:e=>{e.currentTarget.value=""},ref:s,style:{display:"none"},type:"file"}),F?(0,r.Y)("div",{className:`${h.dragTransition} ${b?h.dragOver:""}`,children:(0,r.Y)(eu,{completedCount:Y,currentProgress:S,showCount:$>1,totalCount:$})}):C?(0,r.Y)(eh,{imageUrl:e[0],isDragOver:b,onClick:f,onDelete:()=>x(0)}):A?(0,r.Y)(em,{images:e||[],isDragOver:b,onClick:f,onDelete:x}):(0,r.Y)(ec,{isDragOver:b,onClick:()=>{s.current?.click()}}),(0,r.Y)(es,{images:e||[],maxCount:a,onClose:()=>{m(!1)},onComplete:w,open:u})]})});eg.displayName="MultiImagesUpload";let ef=(0,i.memo)(()=>{let{value:e,setValue:t,maxCount:o,maxFileSize:i}=(0,x.$)("imageUrls"),{autoSetDimensions:l,extractUrlAndDimensions:a}=W();return 1===o?(0,r.Y)(et,{maxFileSize:i,onChange:e=>{let{url:o,dimensions:r}=a(e);t(o?[o]:[]),r&&l(r)},value:e?.[0]??null}):(0,r.Y)(eg,{maxCount:o,maxFileSize:i,onChange:o=>{let r=Array.isArray(o)?o:o.urls,i=Array.isArray(o)?void 0:o.dimensions;t(r),!e?.length&&1===r.length&&i&&l(i)},value:e})});var ex=o(12389),ev=o(47762),ey=o(6621),eb=o(22158),ek=o(51997),ew=o.n(ek),e$=o(27697),eY=o(25598),eS=o(37618),eA=o(67693),eF=o(30598),eC=o.n(eF);let eN=(0,a.rU)(({css:e,token:t,isDarkMode:o})=>({descriptionText:e`
    color: ${o?t.colorText:t.colorTextSecondary};
  `,popover:e`
    .ant-popover-inner {
      background: ${o?t.colorBgSpotlight:t.colorBgElevated};
    }
  `,priceText:e`
    font-weight: 500;
    color: ${o?t.colorTextLightSolid:t.colorTextTertiary};
  `})),eT=(0,i.memo)(({approximatePricePerImage:e,description:t,pricePerImage:o,showPopover:a=!0,...n})=>{let{styles:d}=eN(),c=(0,i.useMemo)(()=>"number"==typeof o?`${eC()(o).format("$0,0.00[000]")} / image`:"number"==typeof e?`~ ${eC()(e).format("$0,0.00[000]")} / image`:void 0,[e,o]),p=(0,i.useMemo)(()=>t||c?(0,r.FD)(s.Flexbox,{gap:8,style:{maxWidth:320},children:[t&&(0,r.Y)(l.A,{className:d.descriptionText,children:t}),c&&(0,r.Y)(l.A,{className:d.priceText,children:c})]}):null,[t,c,d.descriptionText,d.priceText]),u=(0,r.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,style:{overflow:"hidden"},children:[(0,r.Y)(eS.A,{model:n.id,size:20}),(0,r.Y)(l.A,{ellipsis:!0,title:n.displayName||n.id,children:n.displayName||n.id})]});return a&&p?(0,r.Y)(eA.A,{align:{offset:[24,-10]},arrow:!1,classNames:{root:d.popover},content:p,placement:"rightTop",children:u}):u});eT.displayName="ImageModelItem";let eI=(0,a.rU)(({css:e,prefixCls:t})=>({popup:e`
    &.${t}-select-dropdown .${t}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `})),ez=(0,i.memo)(()=>{let{styles:e}=eI(),{t}=(0,n.Bd)("components"),o=(0,a.DP)(),l=(0,e$.Zp)(),[p,u]=(0,m.k)(e=>[f.imageGenerationConfigSelectors.model(e),f.imageGenerationConfigSelectors.provider(e)]),h=(0,m.k)(e=>e.setModelAndProviderOnSelect),g=(0,d.d)(c.w.enabledImageModelList),x=(0,i.useMemo)(()=>{let e=e=>{let i=e.children.map(t=>({label:(0,r.Y)(eT,{...t}),provider:e.id,value:`${e.id}/${t.id}`}));return 0===i.length?[{disabled:!0,label:(0,r.FD)(s.Flexbox,{gap:8,horizontal:!0,style:{color:o.colorTextTertiary},children:[t("ModelSwitchPanel.emptyModel"),(0,r.Y)(ex.default,{icon:ey.A})]}),onClick:()=>{l(`/settings?active=provider&provider=${e.id}`)},value:`${e.id}/empty`}]:i};return 0===g.length?[{disabled:!0,label:(0,r.FD)(s.Flexbox,{gap:8,horizontal:!0,style:{color:o.colorTextTertiary},children:[t("ModelSwitchPanel.emptyProvider"),(0,r.Y)(ex.default,{icon:ey.A})]}),onClick:()=>{l("/settings?active=provider")},value:"no-provider"}]:1===g.length?e(g[0]):g.map(o=>({label:(0,r.FD)(s.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,r.Y)(eY.TK,{logo:o.logo,name:o.name,provider:o.id,source:o.source}),(0,r.Y)(ew(),{href:`/settings?active=provider&provider=${o.id}`,children:(0,r.Y)(b.A,{icon:eb.A,size:"small",title:t("ModelSwitchPanel.goToSettings")})})]}),options:e(o)}))},[g,t,o.colorTextTertiary,l]);return(0,r.Y)(ev.A,{classNames:{root:e.popup},labelRender:e=>{let t=g.flatMap(e=>e.children.map(t=>({...t,providerId:e.id}))).find(t=>e.value===`${t.providerId}/${t.id}`);return t?(0,r.Y)(eT,{...t,showPopover:!1}):e.label},onChange:(e,t)=>{if("no-provider"===e||e.includes("/empty"))return;let o=e.split("/").slice(1).join("/"),r=t.provider;(o!==p||r!==u)&&h(o,r)},options:x,shadow:!0,size:"large",style:{width:"100%"},value:u&&p?`${u}/${p}`:void 0})}),eD=(0,i.memo)(()=>{let{t:e}=(0,n.Bd)("image"),{value:t,setValue:o,enumValues:i}=(0,x.$)("quality"),l=i?.map(t=>({label:"standard"===t?e("config.quality.options.standard"):e("config.quality.options.hd"),value:t}))??[];return(0,r.Y)(ev.A,{onChange:o,options:l,style:{width:"100%"},value:t})});var eP=o(37412),eM=o(20951),eU=o(55392);let eB=(0,i.memo)(({value:e,onChange:t,style:o,className:l,...a})=>{let{t:d}=(0,n.Bd)("image"),c=(0,i.useCallback)(()=>{let e=(0,eU.D)(1)[0];t?.(e)},[t]);return(0,r.FD)(s.Flexbox,{className:l,gap:4,horizontal:!0,style:o,children:[(0,r.Y)(D.A,{max:E.MAX_SEED,min:0,onChange:t,placeholder:d("config.seed.random"),step:1,style:{width:"100%"},value:e,...a}),(0,r.Y)(eP.A,{title:d("config.seed.random"),children:(0,r.Y)(ei.A,{icon:eM.A,onClick:c,style:{flex:"none",width:48},variant:"outlined"})})]})}),eR=(0,i.memo)(()=>{let{t:e}=(0,n.Bd)("image"),{value:t,setValue:o}=(0,x.$)("seed");return(0,r.Y)(eB,{onChange:o,placeholder:e("config.seed.random"),value:t})}),eE=(0,i.memo)(({options:e,onChange:t,value:o,defaultValue:i,...n})=>{let s=(0,a.DP)(),[d,c]=(0,A.A)("auto",{defaultValue:i,onChange:t,value:o});return e?.some(e=>!(e=>{if("auto"===e)return!0;let t=e.split("x");if(2!==t.length)return!1;let[o,r]=t.map(Number);return!isNaN(o)&&!isNaN(r)&&o>0&&r>0})(e.value))?(0,r.Y)(ev.A,{onChange:t,options:e,style:{width:"100%"},value:d}):(0,r.Y)($.A,{padding:4,variant:"filled",...n,children:(0,r.Y)(Y.A,{gap:4,maxItemWidth:72,rows:16,children:e?.map(e=>{let o,i=d===e.value;if("auto"===e.value)o=(0,r.Y)("div",{style:{border:`2px dashed ${i?s.colorText:s.colorTextDescription}`,borderRadius:3,height:16,width:16}});else{let[t,l]=e.value.split("x").map(Number),a=t>l;o=(0,r.Y)("div",{style:{aspectRatio:`${t} / ${l}`,border:`2px solid ${i?s.colorText:s.colorTextDescription}`,borderRadius:3,height:a?void 0:16,width:a?16:void 0}})}return(0,r.FD)($.A,{align:"center",clickable:!0,gap:4,justify:"center",onClick:()=>{c(e.value),t?.(e.value)},padding:8,shadow:i&&!s.isDarkMode,style:{backgroundColor:i?s.colorBgElevated:"transparent"},variant:"filled",children:[(0,r.Y)(S.default,{height:16,style:{marginTop:4},width:16,children:o}),(0,r.Y)(l.A,{fontSize:12,type:i?void 0:"secondary",children:e.label||e.value})]},e.value)})})})}),eL=(0,i.memo)(()=>{let{value:e,setValue:t,enumValues:o}=(0,x.$)("size"),i=o.map(e=>({label:e,value:e}));return(0,r.Y)(eE,{onChange:t,options:i,value:e})}),eW=(0,i.memo)(()=>{let{value:e,setValue:t,min:o,max:i}=(0,x.$)("steps");return(0,r.Y)(v.A,{max:i,min:o,onChange:t,value:e})}),ej=(0,i.memo)(({label:e,children:t})=>(0,r.FD)(s.Flexbox,{gap:8,children:[e&&(0,r.Y)(l.A,{weight:500,children:e}),t]})),eO=f.imageGenerationConfigSelectors.isSupportedParam,eG=(0,i.memo)(()=>{let{t:e}=(0,n.Bd)("image"),t=(0,a.DP)();(()=>{let e=(0,p.o)(u.I.isStatusInit),t=(0,d.d)(c.w.isInitAiProviderRuntimeState),o=(0,h.k)(g.P.isLoaded),r=(0,h.k)(g.P.isLogin),l=o&&!1===r,a=(0,h.k)(e=>e.isUserStateInit),n=e&&t&&(a||l),{lastSelectedImageModel:s,lastSelectedImageProvider:f}=(0,p.o)(e=>({lastSelectedImageModel:e.status.lastSelectedImageModel,lastSelectedImageProvider:e.status.lastSelectedImageProvider})),x=(0,m.k)(e=>e.isInit),v=(0,m.k)(e=>e.initializeImageConfig);(0,i.useEffect)(()=>{!x&&n&&v(r,s,f)},[n,x,r,s,f,v])})();let o=(0,i.useRef)(null),[l,f]=(0,i.useState)(!1),v=(0,m.k)(e=>e.isInit),b=(0,m.k)(eO("imageUrl")),k=(0,m.k)(eO("size")),w=(0,m.k)(eO("quality")),$=(0,m.k)(eO("seed")),Y=(0,m.k)(eO("steps")),S=(0,m.k)(eO("cfg")),A=(0,m.k)(eO("imageUrls")),{showDimensionControl:F}=(0,x.T)(),C=(0,i.useCallback)(()=>{let e=o.current;e&&f(e.scrollHeight>e.clientHeight)},[]);(0,i.useEffect)(()=>{C()},[C,b,k,w,$,Y,S,A,F]),(0,i.useEffect)(()=>{let e=o.current;if(!e)return;C();let t=new ResizeObserver(C);t.observe(e);let r=new MutationObserver(C);return r.observe(e,{childList:!0,subtree:!0}),()=>{t.disconnect(),r.disconnect()}},[C]);let N=(0,i.useMemo)(()=>({bottom:0,position:"sticky",zIndex:1,...l&&{backgroundColor:t.colorBgContainer,borderTop:`1px solid ${t.colorBorder}`,marginLeft:-12,marginRight:-12,marginTop:20,paddingLeft:12,paddingRight:12}}),[l,t.colorBgContainer,t.colorBorder]);return v?(0,r.FD)(s.Flexbox,{gap:32,padding:"12px 12px 0 12px",ref:o,style:{height:"100%",overflow:"auto"},children:[(0,r.Y)(ej,{children:(0,r.Y)(ez,{})}),b&&(0,r.Y)(ej,{label:e("config.imageUrl.label"),children:(0,r.Y)(eo,{})}),A&&(0,r.Y)(ej,{label:e("config.imageUrls.label"),children:(0,r.Y)(ef,{})}),k&&(0,r.Y)(ej,{label:e("config.size.label"),children:(0,r.Y)(eL,{})}),w&&(0,r.Y)(ej,{label:e("config.quality.label"),children:(0,r.Y)(eD,{})}),F&&(0,r.Y)(T,{}),Y&&(0,r.Y)(ej,{label:e("config.steps.label"),children:(0,r.Y)(eW,{})}),S&&(0,r.Y)(ej,{label:e("config.cfg.label"),children:(0,r.Y)(y,{})}),$&&(0,r.Y)(ej,{label:e("config.seed.label"),children:(0,r.Y)(eR,{})}),(0,r.Y)(s.Flexbox,{padding:"12px 0",style:N,children:(0,r.Y)(ej,{label:e("config.imageNum.label"),children:(0,r.Y)(R,{})})})]}):(0,r.Y)(z,{})}),e_=()=>(0,r.Y)(eG,{});e_.displayName="ImageConfigPanel";var eH=o(33375),eK=o(50877);let eZ=(0,i.memo)(()=>(0,r.FD)(s.Flexbox,{align:"center",gap:6,width:"100%",children:[(0,r.Y)(eK.A,{}),Array.from({length:5}).map((e,t)=>(0,r.Y)("div",{children:(0,r.Y)(I.A.Avatar,{active:!0,size:48,style:{borderRadius:6}})},t))]}));eZ.displayName="SkeletonList";let eq=(0,eH.default)(()=>Promise.all([o.e(99989),o.e(92842)]).then(o.bind(o,92842)),{loadableGenerated:{webpack:()=>[92842]},loading:()=>(0,r.Y)(eZ,{}),ssr:!1}),eX=()=>(0,r.Y)(eq,{});eX.displayName="Topics";var eQ=o(81088),eV=o(38858);let eJ=()=>{let e=(0,eQ.H)(m.k),[t,o]=(0,eV.ZA)("topic",{history:"replace",throttleMs:500});return e("activeGenerationTopicId",t),(0,i.useLayoutEffect)(()=>{let e=m.k.subscribe(e=>e.activeGenerationTopicId,e=>{o(e||null)});return()=>{e()}},[o]),null};eJ.displayName="TopicUrlSync";let e0=()=>(0,r.FD)(r.FK,{children:[(0,r.Y)(eJ,{}),(0,r.Y)(eX,{})]});e0.displayName="ImageTopics";var e1=o(83606),e2=o(34367),e8=o(14654),e6=o(31021),e4=o.n(e6),e5=o(69177),e3=o(49935);let e7=(0,a.rU)(({css:e,token:t})=>({panel:e`
    height: 100%;
    background: ${t.colorBgLayout};
  `})),e9=(0,i.memo)(({children:e})=>{let{md:t=!0}=(0,e8.Q)(),{t:o}=(0,n.Bd)("image"),{styles:l}=e7(),[a,s,d]=(0,p.o)(e=>[u.I.imagePanelWidth(e),u.I.showImagePanel(e),e.updateSystemStatus]),[c,m]=(0,i.useState)(a);c!==a&&m(a);let[h,g]=(0,i.useState)(!!s);return(0,i.useEffect)(()=>{t&&h&&d({showImagePanel:!0}),t||d({showImagePanel:!1})},[t,h]),(0,r.Y)(e1.Ay,{className:l.panel,defaultSize:{width:c},expand:s,maxWidth:320,minWidth:e3._7,mode:t?"fixed":"float",onExpandChange:e=>{e4()(e,s)||(d({showImagePanel:e}),g(e))},onSizeChange:(e,t)=>{if(!t)return;let o="string"==typeof t.width?Number.parseInt(t.width):t.width;!o||e4()(o,a)||(m(o),d({imagePanelWidth:o}))},placement:"left",size:{height:"100%",width:a},children:(0,r.FD)(e2.A,{style:{flex:"none",height:"100%",minWidth:e3._7,zIndex:10},children:[(0,r.Y)(e5.A,{desc:o("config.header.desc"),title:o("config.header.title")}),e]})})}),te=(0,a.rU)(({css:e,token:t})=>({panel:e`
    height: 100%;
    background: ${t.colorBgContainerSecondary};
  `})),tt=(0,i.memo)(({children:e})=>{let{md:t=!0}=(0,e8.Q)(),{styles:o}=te(),[l,a,n]=(0,p.o)(e=>[u.I.imageTopicPanelWidth(e),u.I.showImageTopicPanel(e),e.updateSystemStatus]),[s,d]=(0,i.useState)(l);s!==l&&d(l);let[c,m]=(0,i.useState)(!!a);return(0,i.useEffect)(()=>{t&&c&&n({showImageTopicPanel:!0}),t||n({showImageTopicPanel:!1})},[t,c]),(0,r.Y)(e1.Ay,{className:o.panel,defaultSize:{width:s},expand:a,maxWidth:320,minWidth:80,mode:t?"fixed":"float",onExpandChange:e=>{e4()(e,a)||(n({showImageTopicPanel:e}),m(e))},onSizeChange:(e,t)=>{if(!t)return;let o="string"==typeof t.width?Number.parseInt(t.width):t.width;!o||e4()(o,l)||(d(o),n({imageTopicPanelWidth:o}))},placement:"right",size:{height:"100%",width:l},children:(0,r.Y)(e2.A,{style:{flex:"none",height:"100%",minWidth:80},children:e})})}),to=(0,i.memo)(({children:e})=>{let t=(0,a.DP)();return(0,r.Y)(S.default,{flex:1,style:{background:t.colorBgContainerSecondary,overflowX:"hidden",overflowY:"auto",position:"relative"},children:(0,r.Y)(s.Flexbox,{gap:16,height:"100%",padding:24,style:{maxWidth:906},width:"100%",children:e})})});var tr=o(86653),ti=o(23047),tl=o(91608);let ta=()=>((()=>{let e,t,o,r,{enableScope:l,disableScope:a}=(0,tr.wc)();e=(0,p.o)(u.I.showImagePanel),t=(0,p.o)(e=>e.updateSystemStatus),(0,tl.y)(ti.g8.ToggleLeftPanel,()=>t({imagePanelWidth:e?0:e3._7,showImagePanel:!e})),o=(0,p.o)(u.I.showImageTopicPanel),r=(0,p.o)(e=>e.updateSystemStatus),(0,tl.y)(ti.g8.ToggleRightPanel,()=>r({imageTopicPanelWidth:80*!o,showImageTopicPanel:!o})),(0,i.useEffect)(()=>(l(ti.Gs.Image),()=>a(ti.Gs.Image)),[])})(),null),tn=({menu:e,topic:t})=>(0,r.FD)(r.FK,{children:[(0,r.FD)(s.Flexbox,{height:"100%",horizontal:!0,style:{maxWidth:"100%",overflow:"hidden",position:"relative"},width:"100%",children:[(0,r.Y)(e9,{children:e}),(0,r.Y)(to,{children:(0,r.Y)(e$.sv,{})}),(0,r.Y)(tt,{children:t})]}),(0,r.Y)(ta,{})]});tn.displayName="DesktopAiImageLayout";let ts=(0,i.memo)(()=>(0,r.Y)(tn,{menu:(0,r.Y)(e_,{}),topic:(0,r.Y)(e0,{})}));ts.displayName="DesktopImageWrapper";let td=ts},50877:(e,t,o)=>{o.d(t,{A:()=>c});var r=o(28802),i=o(9274),l=o(90897),a=o(83034),n=o(59121),s=o(80457);let d=(0,a.memo)(({count:e,onClick:t,showMoreInfo:o})=>{let{t:a}=(0,n.Bd)("image");return o?(0,r.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",style:{marginBottom:12},width:"100%",children:[(0,r.FD)("div",{children:[a("topic.title")," ",e||""]}),(0,r.Y)(i.A,{icon:l.A,onClick:t,size:"small",title:a("topic.createNew"),tooltipProps:{placement:"left"}})]}):(0,r.Y)(i.A,{icon:l.A,onClick:t,size:{blockSize:48,size:20},title:a("topic.createNew"),tooltipProps:{placement:"left"},variant:"filled"})});d.displayName="NewTopicButton";let c=d},69177:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(28802),i=o(11577),l=o(83034),a=o(80457);let n=(0,i.rU)(({token:e,css:t})=>({desc:t`
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
  `})),s=(0,l.memo)(({title:e,desc:t,style:o})=>{let{styles:i}=n();return(0,r.FD)(a.Flexbox,{className:i.header,gap:4,style:o,children:[(0,r.Y)("h1",{className:i.title,children:e}),(0,r.Y)("p",{className:i.desc,children:t})]})})},86344:(e,t,o)=>{o.d(t,{$:()=>n,T:()=>s});var r=o(80286),i=o(83034),l=o(81224),a=o(67806);function n(e){let t=(0,l.k)(a.imageGenerationConfigSelectors.parameters),o=(0,l.k)(a.imageGenerationConfigSelectors.parametersSchema),r=t?.[e],n=(0,l.k)(e=>e.setParamOnInput),s=(0,i.useCallback)(t=>{n(e,t)},[e,n]),d=o?.[e];return{value:r,setValue:s,...(0,i.useMemo)(()=>{let e=d&&"object"==typeof d&&"min"in d?d.min:void 0,t=d&&"object"==typeof d&&"max"in d?d.max:void 0,o=d&&"object"==typeof d&&"step"in d?d.step:void 0,r=d&&"object"==typeof d&&"description"in d?d.description:void 0,i=d&&"object"==typeof d&&"enum"in d?d.enum:void 0;return{description:r,max:t,min:e,step:o,enumValues:i,maxFileSize:d&&"object"==typeof d&&"maxFileSize"in d?d.maxFileSize:void 0,maxCount:d&&"object"==typeof d&&"maxCount"in d?d.maxCount:void 0}},[d])}}function s(){let e=(0,l.k)(),t=(0,l.k)(a.imageGenerationConfigSelectors.parametersSchema),o=(0,l.k)(e=>e.parameters?.aspectRatio),n=e.activeAspectRatio??o??r.DEFAULT_ASPECT_RATIO,s=(0,l.k)(a.imageGenerationConfigSelectors.isSupportedParam("width")),d=(0,l.k)(a.imageGenerationConfigSelectors.isSupportedParam("height")),c=(0,l.k)(a.imageGenerationConfigSelectors.isSupportedParam("aspectRatio")),p=(0,i.useMemo)(()=>{let e=t?.aspectRatio?.enum||[];return e.length>0?e:r.PRESET_ASPECT_RATIOS},[t]);return{isLocked:e.isAspectRatioLocked,toggleLock:e.toggleAspectRatioLock,width:e.parameters?.width,height:e.parameters?.height,aspectRatio:n,setWidth:e.setWidth,setHeight:e.setHeight,setAspectRatio:e.setAspectRatio,widthSchema:t?.width,heightSchema:t?.height,options:p,showDimensionControl:c||s||d}}}}]);