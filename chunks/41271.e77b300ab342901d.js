"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41271],{3431:(e,t,i)=>{i.d(t,{B:()=>r});var n=i(84354),o=i(38326);let l=e=>t=>t.searchWorkflowLoadingIds.includes(e),r={isCurrentSendMessageError:e=>{let t=(0,n.T)(e.activeId,e.activeTopicId);for(let i of[...e.operationsByContext[t]||[]].reverse()){let t=e.operations[i];if(t&&"sendMessage"===t.type&&t.metadata.inputSendErrorMsg)return t.metadata.inputSendErrorMsg}},isCurrentSendMessageLoading:e=>{let t=(0,n.T)(e.activeId,e.activeTopicId);return(e.operationsByContext[t]||[]).some(t=>{let i=e.operations[t];return i&&"sendMessage"===i.type&&"running"===i.status})},isIntentUnderstanding:e=>t=>l(e)(t),isMessageInReasoning:e=>t=>o.operationSelectors.isMessageInReasoning(e)(t),isMessageInSearchWorkflow:l,isSendMessageLoadingForTopic:e=>t=>(t.operationsByContext[e]||[]).some(e=>{let i=t.operations[e];return i&&"sendMessage"===i.type&&"running"===i.status})}},7535:(e,t,i)=>{i.d(t,{S:()=>l,e:()=>o});var n=i(11577);let o=e=>(0,n.cx)((0,n.AH)`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};

    text-overflow: ellipsis;
  `),l=o(1)},9683:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(28802),o=i(65101);let l=({url:e,title:t,alt:i,size:l=14})=>{let r=new URL(e).hostname;return(0,n.Y)(o.default,{alt:i||t||e,height:l,src:`https://icons.duckduckgo.com/ip3/${r}.ico`,style:{borderRadius:4},unoptimized:!0,width:l})}},10618:(e,t,i)=>{i.d(t,{N:()=>iI});var n=i(21844),o=i(28802),l=i(61982),r=i(80706),a=i(83034),s=i(59121),d=i(45541),c=i(88990),p=i(82964),h=i(20549),u=i(75259),g=i(96337),m=i(43588),x=i(80176),b=i(42507),f=i(47878);let y=(0,a.memo)(({updating:e,setUpdating:t})=>{let{t:i}=(0,s.Bd)("setting"),[n]=x.A.useForm(),[l,r,c]=(0,d.o)(e=>[p.c.historyCount(e),p.c.enableHistoryCount(e),e.updateAgentChatConfig]);(0,a.useEffect)(()=>{n?.setFieldsValue({enableHistoryCount:r,historyCount:l})},[r,l,n]);let h=[{children:(0,o.Y)(b.A,{loading:e,size:"small"}),label:i("settingChat.enableHistoryCount.title"),layout:"horizontal",minWidth:void 0,name:"enableHistoryCount",valuePropName:"checked"},{children:(0,o.Y)(g.A,{disabled:!r,max:20,min:0,size:"small",step:1,style:{marginBlock:8,paddingLeft:4},styles:{input:{maxWidth:64}},unlimitedInput:!0}),name:"historyCount",noStyle:!0}];return(0,o.Y)(m.Ay,{form:n,initialValues:{enableHistoryCount:r,historyCount:l},items:h,itemsType:"flat",onValuesChange:(0,f.A)(async e=>{t(!0),await c(e),t(!1)},500),styles:{group:{background:"transparent"}}})}),v=(0,a.memo)(()=>{let[e,t,i]=(0,d.o)(e=>[c.e.isAgentConfigLoading(e),p.c.currentChatConfig(e),e.updateAgentChatConfig]),[n,g]=(0,a.useState)(!1),{t:m}=(0,s.Bd)("setting"),x=(0,h.a)(),[b,f]=(0,d.o)(e=>[p.c.historyCount(e),p.c.enableHistoryCount(e)]);if(e)return(0,o.Y)(u.A,{disabled:!0,icon:l.A});let v=m(f?"settingChat.enableHistoryCount.limited":"settingChat.enableHistoryCount.unlimited",{number:b||0});return(0,o.Y)(u.A,{icon:f?r.A:l.A,loading:n,onClick:x?void 0:async e=>{e?.preventDefault?.(),e?.stopPropagation?.();let n=!t.enableHistoryCount;await i({enableHistoryCount:n})},popover:{content:(0,o.Y)(y,{setUpdating:g,updating:n}),minWidth:240,trigger:x?["click"]:["hover"]},showTooltip:!1,title:v})});i(74551);var Y=i(4755),k=i(9274),w=i(92619),A=i(67693),F=i(11577),C=i(91951),S=i(80457);let T=(0,F.rU)(({css:e})=>({close:e`
      color: white;
    `,container:e`
      position: relative;
    `,footer:e`
      display: flex;
      justify-content: end;
      width: 100%;
    `,overlay:e`
      .ant-popover-inner {
        border: none;
      }
    `,tip:e`
      position: absolute;
      inset-inline-start: 50%;
      transform: translate(-50%);
    `})),z=({children:e,placement:t="bottom",title:i,offsetY:n,maxWidth:l=300,className:r,style:a,open:s,onOpenChange:d})=>{let c=(0,F.DP)(),{styles:p,cx:h}=T();return(0,o.Y)(w.Ay,{theme:{components:{Badge:{fontSize:12,lineHeight:1},Button:{colorPrimary:c.blue7},Checkbox:{colorPrimary:c.blue7,colorText:c.colorTextLightSolid},Popover:{colorText:c.colorTextLightSolid}}},children:s?(0,o.Y)("div",{className:p.container,children:(0,o.Y)("div",{style:{marginTop:n},children:(0,o.Y)(A.A,{arrow:{pointAtCenter:!0},classNames:{root:h(r,p.overlay)},color:"blue",content:(0,o.FD)(S.Flexbox,{gap:24,horizontal:!0,style:{userSelect:"none"},children:[(0,o.Y)("div",{children:i}),(0,o.Y)(k.A,{className:p.close,icon:C.A,onClick:()=>{d(!1)},size:"small"})]}),open:s,placement:t,styles:{root:{maxWidth:l,zIndex:1e3,...a}},trigger:"hover",children:e})})}):e})};var D=i(29703),B=i(62326),M=i(12389),N=i(9287),$=i(16602),I=i(95320),L=i(20480),P=i(82700),E=i(5930),R=i(75431),U=i(63186),W=i(38153),j=i(15447),_=i(40697),H=i(20966),O=i(575),K=i(80501);let G=(0,a.memo)(({id:e,type:t,enabled:i})=>{let{t:n}=(0,s.Bd)("chat"),l=(0,B.wo)(e=>e.isMobile),[r,c,p,h]=(0,d.o)(e=>[e.addFilesToAgent,e.addKnowledgeBaseToAgent,e.removeFileFromAgent,e.removeKnowledgeBaseFromAgent]),[u,g]=(0,a.useState)(!1),m=async()=>{g(!0),t===K.z.KnowledgeBase?await c(e):await r([e],!0),g(!1)},x=async()=>{g(!0),t===K.z.KnowledgeBase?await h(e):await p(e),g(!1)};return(0,o.Y)(S.Flexbox,{align:"center",horizontal:!0,children:i?(0,o.Y)(W.A,{menu:{items:[{icon:(0,o.Y)(M.default,{icon:_.A}),key:"detail",label:n("knowledgeBase.library.action.detail"),onClick:()=>{t===K.z.KnowledgeBase?window.open(`/knowledge/bases/${e}`):window.open(`/knowledge?file=${e}`)}},{danger:!0,icon:(0,o.Y)(M.default,{icon:H.A}),key:"remove",label:n("knowledgeBase.library.action.remove"),onClick:x}]},placement:"bottomRight",trigger:["click"],children:(0,o.Y)(k.A,{icon:O.A,loading:u})}):(0,o.Y)(j.A,{loading:u,onClick:m,size:l?"small":void 0,type:"primary",children:n("knowledgeBase.library.action.add")})})}),V=(0,F.rU)(({css:e,token:t})=>({desc:e`
    margin: 0 !important;
    font-size: 12px;
    line-height: 1;
    color: ${t.colorTextDescription};
  `,link:e`
    overflow: hidden;
    color: ${t.colorText};
  `,title:e`
    margin: 0 !important;
    font-size: 14px;
    line-height: 1;
  `})),Q=(0,a.memo)(({id:e,fileType:t,name:i,type:n,description:l,enabled:r})=>{let{styles:a}=V();return(0,o.FD)(S.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",paddingBlock:12,paddingInline:16,style:{position:"relative"},children:[(0,o.FD)(S.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,style:{overflow:"hidden",position:"relative"},children:[(0,o.Y)(U.A,{fileType:t,name:i,size:{file:40,repo:40},type:n}),(0,o.FD)(S.Flexbox,{flex:1,gap:4,style:{overflow:"hidden",position:"relative"},children:[(0,o.Y)(S.Flexbox,{align:"center",gap:8,horizontal:!0,children:(0,o.Y)(R.A,{className:a.title,ellipsis:!0,children:i})}),l&&(0,o.Y)(R.A,{className:a.desc,ellipsis:!0,children:l})]})]}),(0,o.Y)(G,{enabled:r,id:e,type:n})]})}),q=(0,F.rU)(({css:e,token:t})=>({card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorBgContainer};

    transition: all ${t.motionDurationMid};

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: ${t.boxShadowTertiary};
    }
  `,desc:e`
    margin: 0 !important;
    font-size: 12px;
    line-height: 1.4;
    color: ${t.colorTextDescription};
  `,title:e`
    margin: 0 !important;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  `})),J=(0,a.memo)(({id:e,fileType:t,name:i,type:n,description:l,enabled:r})=>{let{styles:a}=q();return(0,o.Y)("div",{className:a.card,children:(0,o.FD)(S.Flexbox,{gap:12,style:{position:"relative"},children:[(0,o.FD)(S.Flexbox,{align:"center",gap:12,horizontal:!0,children:[(0,o.Y)(U.A,{fileType:t,name:i,size:{file:48,repo:48},type:n}),(0,o.Y)(S.Flexbox,{flex:1,gap:6,style:{overflow:"hidden",position:"relative"},children:(0,o.Y)(R.A,{className:a.title,ellipsis:{rows:2},children:i})})]}),l&&(0,o.Y)(R.A,{className:a.desc,ellipsis:{rows:3},children:l}),(0,o.Y)(S.Flexbox,{align:"center",justify:"flex-end",children:(0,o.Y)(G,{enabled:r,id:e,type:n})})]})})});J.displayName="MasonryItem";let Z=(0,a.memo)(({data:e})=>e&&e.id?(0,o.Y)("div",{style:{padding:"8px 4px"},children:(0,o.Y)(J,{...e})}):null);Z.displayName="MasonryItemWrapper";var X=i(59202);let ee=(0,a.memo)(()=>(0,o.Y)(S.Flexbox,{children:(0,o.Y)(X.A,{paragraph:{rows:8},title:!1})})),et=(0,F.rU)(({css:e,token:t})=>({card:e`
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;
    background: ${t.colorBgContainer};
  `,grid:e`
    display: grid;
    gap: 16px;
    padding-block: 12px;
  `})),ei=(0,a.memo)(({columnCount:e})=>{let{styles:t}=et(),i=[160,180,170,160,190,170,160,180],n=Math.min(3*e,8);return(0,o.Y)("div",{className:t.grid,style:{gridTemplateColumns:`repeat(${e}, 1fr)`},children:Array.from({length:n}).map((e,n)=>(0,o.Y)("div",{className:t.card,children:(0,o.Y)(X.A,{active:!0,avatar:{shape:"square",size:48},paragraph:{rows:3,width:["100%","90%","70%"]},style:{height:i[n%i.length]},title:{width:"80%"}})},n))})});ei.displayName="MasonrySkeleton";var en=i(63117),eo=i(13072);let el=(0,F.rU)(({css:e})=>({container:e`
    gap: 4px;
  `})),er=(0,a.memo)(({onViewChange:e,view:t})=>{let{t:i}=(0,s.Bd)("components"),{styles:n}=el();return(0,o.FD)(S.Flexbox,{className:n.container,horizontal:!0,children:[(0,o.Y)(k.A,{active:"list"===t,icon:en.A,onClick:()=>e("list"),size:16,title:i("FileManager.view.list")}),(0,o.Y)(k.A,{active:"masonry"===t,icon:eo.A,onClick:()=>e("masonry"),size:16,title:i("FileManager.view.masonry")})]})}),ea=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("file"),{isLoading:t,error:i,data:n}=(0,d.o)(e=>e.useFetchFilesAndKnowledgeBases)(),[l,r]=(0,a.useState)(2),[c,p]=(0,a.useState)(!1),h=(0,E.o)(e=>e.status.knowledgeBaseModalViewMode||"list"),u=(0,E.o)(e=>e.updateSystemStatus),g=a.useCallback(()=>{window.innerWidth<480?r(1):r(2)},[]);a.useEffect(()=>{g()},[g]),a.useEffect(()=>{if("masonry"===h)return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[h,g]),a.useEffect(()=>{c&&n&&requestAnimationFrame(()=>{let e=setTimeout(()=>{p(!1)},100);return()=>clearTimeout(e)})},[c,h,n]);let m=n&&0===n.length,x=(0,a.useMemo)(()=>({}),[]);return(0,o.FD)(S.Flexbox,{height:500,children:[(0,o.Y)(S.Flexbox,{paddingInline:16,style:{paddingBlockEnd:12},children:(0,o.Y)(S.Flexbox,{align:"center",horizontal:!0,justify:"flex-end",children:(0,o.Y)(er,{onViewChange:e=>{p(!0),u({knowledgeBaseModalViewMode:e})},view:h})})}),t||c?"masonry"===h?(0,o.Y)(ei,{columnCount:l}):(0,o.Y)(ee,{}):m?(0,o.Y)(L.default,{gap:12,padding:40,children:i?(0,o.FD)(o.FK,{children:[(0,o.Y)(M.default,{icon:I.A,size:80}),e("networkError")]}):(0,o.Y)($.A,{description:e("empty"),image:$.A.PRESENTED_IMAGE_SIMPLE})}):"list"===h?(0,o.Y)(P.aY,{itemContent:e=>{let t=n[e];return(0,o.Y)(Q,{...t},t.id)},overscan:400,style:{flex:1,marginInline:-16},totalCount:n.length}):(0,o.Y)("div",{style:{flex:1,overflow:"hidden"},children:(0,o.Y)("div",{style:{height:"100%",overflowY:"auto"},children:(0,o.Y)("div",{style:{paddingInline:16},children:(0,o.Y)(N.r,{ItemContent:Z,columnCount:l,context:x,data:n||[],style:{gap:"16px"}})})})})]})}),es=(0,a.memo)(({setOpen:e,open:t})=>{let{t:i}=(0,s.Bd)("chat"),n=(0,B.wo)(e=>e.isMobile);return(0,o.Y)(D.A,{allowFullscreen:!0,footer:null,onCancel:()=>{e(!1)},open:t,styles:{body:{overflow:"hidden"}},title:i("knowledgeBase.library.title"),width:600,children:(0,o.Y)(S.Flexbox,{gap:n?8:16,style:{maxHeight:n?"-webkit-fill-available":"inherit"},width:"100%",children:(0,o.Y)(ea,{})})})});var ed=i(12467),ec=i(38759),ep=i(71457),eh=i(31021),eu=i.n(eh),eg=i(6621),em=i(83838),ex=i(37546),eb=i(87508),ef=i(85017);let ey=(0,a.memo)(({id:e,onUpdate:t,label:i,checked:n})=>{let[l,r]=(0,a.useState)(!1),s=async()=>{r(!0),await t(e,!n),r(!1)};return(0,o.FD)(S.Flexbox,{gap:24,horizontal:!0,justify:"space-between",onClick:async e=>{e.stopPropagation(),s()},style:{paddingLeft:8},children:[i||e,l?(0,o.Y)(L.default,{width:18,children:(0,o.Y)(M.default,{icon:ef.A,spin:!0})}):(0,o.Y)(eb.A,{checked:n,onClick:async e=>{e.stopPropagation(),await s()}})]})}),ev=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),{enableKnowledgeBase:t}=(0,B.wo)(ed.E),[i,n]=(0,ec.k)(e=>[ep.U.showUploadFileInKnowledgeBaseTip(e),e.updateGuideState]),[l,r]=(0,a.useState)(!1),[p,h]=(0,a.useState)(!1),g=(({setModalOpen:e,setUpdating:t})=>{let{t:i}=(0,s.Bd)("chat"),n=(0,d.o)(c.e.currentAgentFiles,eu()),l=(0,d.o)(c.e.currentAgentKnowledgeBases,eu()),[r,a]=(0,d.o)(e=>[e.toggleFile,e.toggleKnowledgeBase]);return[{children:[...n.map(e=>({icon:(0,o.Y)(em.A,{fileName:e.name,fileType:e.type,size:20}),key:e.id,label:(0,o.Y)(ey,{checked:e.enabled,id:e.id,label:e.name,onUpdate:async(e,i)=>{t(!0),await r(e,i),t(!1)}})})),...l.map(e=>({icon:(0,o.Y)(ex.A,{}),key:e.id,label:(0,o.Y)(ey,{checked:e.enabled,id:e.id,label:e.name,onUpdate:async(e,i)=>{t(!0),await a(e,i),t(!1)}})}))],key:"relativeFilesOrKnowledgeBases",label:i("knowledgeBase.relativeFilesOrKnowledgeBases"),type:"group"},{type:"divider"},{extra:(0,o.Y)(M.default,{icon:eg.A}),icon:Y.A,key:"knowledge-base-store",label:i("knowledgeBase.viewMore"),onClick:()=>{e(!0)}}]})({setModalOpen:r,setUpdating:h});if(!t)return null;let m=(0,o.Y)(u.A,{dropdown:{maxHeight:500,maxWidth:480,menu:{items:g},minWidth:240},icon:Y.A,loading:p,showTooltip:!1,title:e("knowledgeBase.title")});return(0,o.FD)(a.Suspense,{fallback:(0,o.Y)(u.A,{disabled:!0,icon:Y.A,title:e("knowledgeBase.title")}),children:[i?(0,o.Y)(z,{onOpenChange:()=>{n({uploadFileInKnowledgeBase:!1})},open:i,placement:"top",title:e("knowledgeBase.uploadGuide"),children:m}):m,(0,o.Y)(es,{open:l,setOpen:r})]})});var eY=i(67072),ek=i(78914),ew=i(23676),eA=i(64811),eF=i(62016);let eC=(0,a.memo)(()=>{let e,{t}=(0,s.Bd)("chat"),i=(0,ew.t)(e=>e.addMentionedUser),n=(e=(0,eA.B)(eF.z.currentSession),(0,a.useMemo)(()=>{let t=[];return e.members?.forEach(e=>{t.push({icon:(0,o.Y)(eY.A,{avatar:e.avatar,background:e.backgroundColor??void 0,shape:"circle",size:24}),key:e.id,label:e.title||e.id,onClick:()=>{i(e.id)}})}),t},[e]));return n.length?(0,o.Y)(u.A,{dropdown:{maxHeight:320,menu:{items:n},minWidth:200},icon:ek.A,title:t("mention.title")}):null});var eS=i(37618),eT=i(25863),ez=i(66209),eD=i(94147),eB=i(81196),eM=i(40714),eN=i(51997),e$=i.n(eN);let eI=(0,a.memo)(({value:e,onChange:t})=>(0,o.Y)(b.A,{onChange:e=>{t?.(!e)},value:!e}));var eL=i(3068);let eP=(0,a.memo)(()=>{let[e,t]=(0,d.o)(e=>[p.c.currentChatConfig(e),e.updateAgentChatConfig]),i=e.gpt5ReasoningEffort||"medium",n=["minimal","low","medium","high"],l=n.indexOf(i),r=(0,a.useCallback)(e=>{t({gpt5ReasoningEffort:n[e]})},[t]);return(0,o.Y)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"0 20px",style:{minWidth:200,width:"100%"},children:(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:{0:"minimal",1:"low",2:"medium",3:"high"},max:3,min:0,onChange:r,step:1,tooltip:{open:!1},value:-1===l?2:l})})})}),eE=(0,a.memo)(()=>{let[e,t]=(0,d.o)(e=>[p.c.currentChatConfig(e),e.updateAgentChatConfig]),i=e.gpt5_1ReasoningEffort||"none",n=["none","low","medium","high"],l=n.indexOf(i),r=(0,a.useCallback)(e=>{t({gpt5_1ReasoningEffort:n[e]})},[t]);return(0,o.Y)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"0 20px",style:{minWidth:200,width:"100%"},children:(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:{0:"none",1:"low",2:"medium",3:"high"},max:3,min:0,onChange:r,step:1,tooltip:{open:!1},value:-1===l?0:l})})})}),eR=(0,a.memo)(()=>{let[e,t]=(0,d.o)(e=>[p.c.currentChatConfig(e),e.updateAgentChatConfig]),i=e.reasoningEffort||"medium",n=["low","medium","high"],l=n.indexOf(i),r=(0,a.useCallback)(e=>{t({reasoningEffort:n[e]})},[t]);return(0,o.Y)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"0 20px",style:{minWidth:200,width:"100%"},children:(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:{0:"low",1:"medium",2:"high"},max:2,min:0,onChange:r,step:1,tooltip:{open:!1},value:-1===l?1:l})})})});var eU=i(96148),eW=i(63639);let ej=(0,a.memo)(({value:e,onChange:t,defaultValue:i})=>{let[n,l]=(0,eW.A)(0,{defaultValue:i,onChange:t,value:e}),[r,s]=(0,eW.A)(0,{defaultValue:Math.log2(void 0===i?0:i/1024),value:Math.log2(void 0===e?0:e/1024)}),d=(0,a.useMemo)(()=>({[Math.log2(1)]:"1k",[Math.log2(2)]:"2k",[Math.log2(4)]:"4k",[Math.log2(8)]:"8k",[Math.log2(16)]:"16k",[Math.log2(32)]:"32k",[Math.log2(64)]:"64k"}),[]),c=(0,a.useMemo)(()=>{let e=n??0;return e<=1024?128:e<8192?1024:4096},[n]);return(0,o.FD)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"4px 0",children:[(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:d,max:Math.log2(64),min:Math.log2(1),onChange:e=>{s(e),l(Math.min(Math.round(1024*Math.pow(2,e)),64e3))},step:null,tooltip:{open:!1},value:r})}),(0,o.Y)("div",{children:(0,o.Y)(eU.A,{changeOnWheel:!0,max:64e3,min:0,onChange:e=>{(e||0===e)&&(l(Math.round(e)),s(Math.log2(e/1024)))},step:c,style:{width:80},value:n})})]})}),e_=(0,a.memo)(()=>{let[e,t]=(0,d.o)(e=>[p.c.currentChatConfig(e),e.updateAgentChatConfig]),i=e.textVerbosity||"medium",n=["low","medium","high"],l=n.indexOf(i),r=(0,a.useCallback)(e=>{t({textVerbosity:n[e]})},[t]);return(0,o.Y)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"0 20px",style:{minWidth:200,width:"100%"},children:(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:{0:"low",1:"medium",2:"high"},max:2,min:0,onChange:r,step:1,tooltip:{open:!1},value:-1===l?1:l})})})}),eH=[-1,0,128,512,1024,2048,4096,8192,16384,24576,32768],eO=(0,a.memo)(({value:e,onChange:t,defaultValue:i})=>{let[n,l]=(0,eW.A)(e??i??-1,{defaultValue:i,onChange:t,value:e}),r=(e=>{let t=eH.indexOf(e);if(-1!==t)return t;if(e<=-1)return 0;if(e>0&&e<=128)return 2;let i=0;for(let[t,n]of eH.entries()){if(n<=e){i=t;continue}break}return i})(n),s=(0,a.useMemo)(()=>n<0?1:n<=1024?128:n<8192?1024:2048,[n]),d=(0,a.useMemo)(()=>({0:"Auto",1:"OFF",2:"128",3:"512",4:"1K",5:"2K",6:"4K",7:"8K",8:"16K",9:"24K",10:"32K"}),[]);return(0,o.FD)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"4px 0",children:[(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:d,max:10,min:0,onChange:e=>{let t;l(void 0===(t=eH[e])?-1:t)},step:null,tooltip:{open:!1},value:r})}),(0,o.Y)("div",{children:(0,o.Y)(eU.A,{changeOnWheel:!0,formatter:(e,t)=>-1===e?"Auto":0===e?"OFF":`${e}`,max:32768,min:-1,onChange:e=>{null!=e&&l(e)},parser:e=>"string"==typeof e?"auto"===e.toLowerCase()?-1:"off"===e.toLowerCase()?0:parseInt(e.replaceAll(/[^\d-]/g,""),10)||0:"number"==typeof e?e:-1,step:s,style:{width:80},value:n})})]})}),eK=(0,a.memo)(()=>{let[e,t]=(0,d.o)(e=>[p.c.currentChatConfig(e),e.updateAgentChatConfig]),i=e.thinkingLevel||"high",n=["low","high"],l=n.indexOf(i),r=(0,a.useCallback)(e=>{t({thinkingLevel:n[e]})},[t]);return(0,o.Y)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"0 20px",style:{minWidth:130,width:"100%"},children:(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:{0:"low",1:"high"},max:1,min:0,onChange:r,step:1,tooltip:{open:!1},value:-1===l?1:l})})})}),eG=(0,a.memo)(()=>{let[e,t]=(0,d.o)(e=>[p.c.currentChatConfig(e),e.updateAgentChatConfig]),i=e.thinking||"auto",n=["disabled","auto","enabled"],l=n.indexOf(i),r=(0,a.useCallback)(e=>{t({thinking:n[e]})},[t]);return(0,o.Y)(S.Flexbox,{align:"center",gap:12,horizontal:!0,paddingInline:"0 20px",style:{minWidth:200,width:"100%"},children:(0,o.Y)(S.Flexbox,{flex:1,children:(0,o.Y)(eL.A,{marks:{0:"OFF",1:"Auto",2:"ON"},max:2,min:0,onChange:r,step:1,tooltip:{open:!1},value:-1===l?1:l})})})}),eV=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),[t,i,n]=(0,d.o)(e=>[c.e.currentAgentModel(e),c.e.currentAgentModelProvider(e),e.updateAgentChatConfig]),[l]=m.Ay.useForm(),r=x.A.useWatch(["enableReasoning"],l),a=(0,d.o)(p.c.currentChatConfig,eu()),h=(0,eD.d)(eB.g.modelExtendParams(t,i)),u=!eM.Ay.useBreakpoint().sm,g={display:"inline-block",width:300},f={display:"block",maxWidth:"100%",whiteSpace:"normal"},y=[{children:(0,o.Y)(eI,{}),desc:(0,o.Y)("span",{style:u?f:g,children:(0,o.FD)(s.x6,{i18nKey:"extendParams.disableContextCaching.desc",ns:"chat",children:["单条对话生成成本最高可降低 90%，响应速度提升 4 倍（",(0,o.Y)(e$(),{href:"https://www.anthropic.com/news/prompt-caching?utm_source=lobechat",rel:"nofollow",children:"了解更多"}),"）。开启后将自动禁用历史记录限制"]})}),label:e("extendParams.disableContextCaching.title"),layout:u?"vertical":"horizontal",minWidth:void 0,name:"disableContextCaching"},{children:(0,o.Y)(b.A,{}),desc:(0,o.Y)("span",{style:u?f:g,children:(0,o.FD)(s.x6,{i18nKey:"extendParams.enableReasoning.desc",ns:"chat",children:["基于 Claude Thinking 机制限制（",(0,o.Y)(e$(),{href:"https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking?utm_source=lobechat#why-thinking-blocks-must-be-preserved",rel:"nofollow",children:"了解更多"}),"），开启后将自动禁用历史消息数限制"]})}),label:e("extendParams.enableReasoning.title"),layout:u?"vertical":"horizontal",minWidth:void 0,name:"enableReasoning"},(r||h?.includes("reasoningBudgetToken"))&&{children:(0,o.Y)(ej,{}),label:e("extendParams.reasoningBudgetToken.title"),layout:"vertical",minWidth:void 0,name:"reasoningBudgetToken",style:{paddingBottom:0}},{children:(0,o.Y)(eR,{}),desc:"reasoning_effort",label:e("extendParams.reasoningEffort.title"),layout:"horizontal",minWidth:void 0,name:"reasoningEffort",style:{paddingBottom:0}},{children:(0,o.Y)(eP,{}),desc:"reasoning_effort",label:e("extendParams.reasoningEffort.title"),layout:"horizontal",minWidth:void 0,name:"gpt5ReasoningEffort",style:{paddingBottom:0}},{children:(0,o.Y)(eE,{}),desc:"reasoning_effort",label:e("extendParams.reasoningEffort.title"),layout:"horizontal",minWidth:void 0,name:"gpt5_1ReasoningEffort",style:{paddingBottom:0}},{children:(0,o.Y)(e_,{}),desc:"text_verbosity",label:e("extendParams.textVerbosity.title"),layout:"horizontal",minWidth:void 0,name:"textVerbosity",style:{paddingBottom:0}},{children:(0,o.Y)(eO,{}),label:e("extendParams.reasoningBudgetToken.title"),layout:"vertical",minWidth:460,name:"thinkingBudget",style:{paddingBottom:0},tag:"thinkingBudget"},{children:(0,o.Y)(b.A,{}),desc:u?(0,o.Y)("span",{style:f,children:e("extendParams.urlContext.desc")}):e("extendParams.urlContext.desc"),label:e("extendParams.urlContext.title"),layout:u?"vertical":"horizontal",minWidth:void 0,name:"urlContext",style:u?void 0:{width:445},tag:"urlContext"},{children:(0,o.Y)(eG,{}),label:e("extendParams.thinking.title"),layout:"horizontal",minWidth:void 0,name:"thinking",style:{paddingBottom:0}},{children:(0,o.Y)(eK,{}),label:e("extendParams.thinkingLevel.title"),layout:"horizontal",minWidth:void 0,name:"thinkingLevel",style:{paddingBottom:0}}].filter(Boolean);return(0,o.Y)(m.Ay,{form:l,initialValues:a,items:(h||[]).map(e=>y.find(t=>t.name===e)).filter(Boolean),itemsType:"flat",onValuesChange:async(e,t)=>{await n(t)},size:"small",style:{fontSize:12},variant:"borderless"})}),eQ=(0,F.rU)(({css:e,token:t,cx:i})=>({container:e`
    border-radius: 20px;
    background: ${t.colorFillTertiary};
  `,icon:i("model-switch",e`
      transition: scale 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
    `),model:e`
    cursor: pointer;
    border-radius: 8px;

    :hover {
      background: ${t.colorFillSecondary};
    }

    :active {
      .model-switch {
        scale: 0.8;
      }
    }
  `,modelWithControl:e`
    border-radius: 20px;

    :hover {
      background: ${t.colorFillTertiary};
    }
  `,video:e`
    overflow: hidden;
    border-radius: 8px;
  `})),eq=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),{styles:t,cx:i}=eQ(),[n,l]=(0,d.o)(e=>[c.e.currentAgentModel(e),c.e.currentAgentModelProvider(e)]),r=(0,eD.d)(eB.g.isModelHasExtendParams(n,l));return(0,o.FD)(S.Flexbox,{align:"center",className:r?t.container:"",horizontal:!0,children:[(0,o.Y)(ez.A,{children:(0,o.Y)(L.default,{className:i(t.model,r&&t.modelWithControl),height:36,width:36,children:(0,o.Y)("div",{className:t.icon,children:(0,o.Y)(eS.A,{model:n,size:22})})})}),r&&(0,o.Y)(u.A,{icon:eT.A,popover:{content:(0,o.Y)(eV,{}),minWidth:350,placement:"topLeft"},showTooltip:!1,style:{borderRadius:20,marginInlineStart:-4},title:e("extendParams.title")})]})});eq.displayName="ModelSwitch";var eJ=i(80532),eZ=i(3136),eX=i(88980),e0=i(46675),e1=i(19193);let e2=(0,a.memo)(({value:e,onChange:t,disabled:i})=>{let n=(0,F.DP)();return(0,o.Y)(S.Flexbox,{style:{width:"100%"},children:(0,o.Y)(g.A,{changeOnWheel:!0,controls:!1,disabled:i,marks:{"-2":(0,o.Y)(M.default,{icon:e0.A,size:"small",style:{color:n.colorTextQuaternary}}),0:(0,o.Y)("div",{}),2:(0,o.Y)(M.default,{icon:e1.A,size:"small",style:{color:n.colorTextQuaternary}})},max:2,min:-2,onChange:t,size:"small",step:.1,style:{height:42},styles:{input:{maxWidth:43}},value:e})})});var e8=i(50510),e4=i(10376);let e3=(0,a.memo)(({value:e,onChange:t,disabled:i})=>{let n=(0,F.DP)();return(0,o.Y)(S.Flexbox,{style:{width:"100%"},children:(0,o.Y)(g.A,{changeOnWheel:!0,controls:!1,disabled:i,marks:{"-2":(0,o.Y)(M.default,{icon:e8.A,size:"small",style:{color:n.colorTextQuaternary}}),0:(0,o.Y)("div",{}),2:(0,o.Y)(M.default,{icon:e4.A,size:"small",style:{color:n.colorTextQuaternary}})},max:2,min:-2,onChange:t,size:"small",step:.1,style:{height:42},styles:{input:{maxWidth:43}},value:e})})});var e6=i(80122),e5=i(39029),e7=i(36322);let e9=(0,F.AH)`
  .ant-alert-message {
    font-size: 12px;
    line-height: 18px !important;
  }

  .ant-alert-icon {
    height: 18px !important;
  }
`,te=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("setting"),[t]=(0,d.o)(e=>{let t=c.e.currentAgentConfig(e);return[t.params?.temperature]});return"number"==typeof t&&t>=1.5&&(0,o.Y)(e6.A,{classNames:{alert:(0,F.cx)(e9)},message:e("settingModel.temperature.warning"),style:{fontSize:12},type:"warning",variant:"borderless"})}),tt=(0,a.memo)(({value:e,onChange:t,disabled:i})=>{let n=(0,F.DP)();return(0,o.FD)(S.Flexbox,{gap:4,style:{width:"100%"},children:[(0,o.Y)(g.A,{changeOnWheel:!0,controls:!1,disabled:i,marks:{0:(0,o.Y)(M.default,{icon:e5.A,size:"small",style:{color:n.colorTextQuaternary}}),1:(0,o.Y)("div",{}),2:(0,o.Y)(M.default,{icon:e7.A,size:"small",style:{color:n.colorTextQuaternary}})},max:2,onChange:t,size:"small",step:.1,style:{height:42},styles:{input:{maxWidth:43}},value:e}),!i&&(0,o.Y)(te,{})]})});var ti=i(67272),tn=i(44654);let to=(0,a.memo)(({value:e,onChange:t,disabled:i})=>{let n=(0,F.DP)();return(0,o.Y)(S.Flexbox,{style:{width:"100%"},children:(0,o.Y)(g.A,{changeOnWheel:!0,controls:!1,disabled:i,marks:{0:(0,o.Y)(M.default,{icon:ti.A,size:"small",style:{color:n.colorTextQuaternary}}),.9:(0,o.Y)("div",{}),1:(0,o.Y)(M.default,{icon:tn.A,size:"small",style:{color:n.colorTextQuaternary}})},max:1,min:0,onChange:t,size:"small",step:.1,style:{height:42},styles:{input:{maxWidth:43}},value:e})})}),tl=(0,F.rU)(({css:e,token:t})=>({checkbox:e`
    .ant-checkbox-inner {
      border-radius: 4px;
    }

    &:hover .ant-checkbox-inner {
      border-color: ${t.colorPrimary};
    }
  `,label:e`
    user-select: none;
  `,sliderWrapper:e`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 100%;
  `})),tr=(0,a.memo)(({Component:e,value:t,onChange:i,disabled:n,checked:l,onToggle:r,styles:a})=>(0,o.FD)("div",{className:a.sliderWrapper,children:[(0,o.Y)(eb.A,{checked:l,className:a.checkbox,onChange:e=>{e.stopPropagation(),r(e.target.checked)}}),(0,o.Y)("div",{style:{flex:1},children:(0,o.Y)(e,{disabled:n,onChange:i,value:t})})]})),ta={frequency_penalty:["params","frequency_penalty"],presence_penalty:["params","presence_penalty"],temperature:["params","temperature"],top_p:["params","top_p"]},ts={frequency_penalty:0,presence_penalty:0,temperature:.7,top_p:1},td={frequency_penalty:{Component:e2,descKey:"settingModel.frequencyPenalty.desc",labelKey:"settingModel.frequencyPenalty.title",tag:"frequency_penalty"},presence_penalty:{Component:e3,descKey:"settingModel.presencePenalty.desc",labelKey:"settingModel.presencePenalty.title",tag:"presence_penalty"},temperature:{Component:tt,descKey:"settingModel.temperature.desc",labelKey:"settingModel.temperature.title",tag:"temperature"},top_p:{Component:to,descKey:"settingModel.topP.desc",labelKey:"settingModel.topP.title",tag:"top_p"}},tc=(0,a.memo)(({setUpdating:e})=>{let{t}=(0,s.Bd)("setting"),i=(0,B.wo)(e=>e.isMobile),n=(0,d.o)(e=>e.updateAgentConfig),{styles:l}=tl(),r=(0,d.o)(c.e.currentAgentConfig,eu()),[p]=m.Ay.useForm(),{frequency_penalty:h,presence_penalty:u,temperature:g,top_p:b}=r.params??{},y=(0,a.useRef)({frequency_penalty:h,presence_penalty:u,temperature:g,top_p:b});(0,a.useEffect)(()=>{p.setFieldsValue(r),"number"==typeof g&&(y.current.temperature=g),"number"==typeof b&&(y.current.top_p=b),"number"==typeof u&&(y.current.presence_penalty=u),"number"==typeof h&&(y.current.frequency_penalty=h)},[r,p,h,u,g,b]);let v=x.A.useWatch(ta.temperature,p),Y=x.A.useWatch(ta.top_p,p),k=x.A.useWatch(ta.presence_penalty,p),w=x.A.useWatch(ta.frequency_penalty,p);(0,a.useEffect)(()=>{"number"==typeof v&&(y.current.temperature=v)},[v]),(0,a.useEffect)(()=>{"number"==typeof Y&&(y.current.top_p=Y)},[Y]),(0,a.useEffect)(()=>{"number"==typeof k&&(y.current.presence_penalty=k)},[k]),(0,a.useEffect)(()=>{"number"==typeof w&&(y.current.frequency_penalty=w)},[w]);let A={frequency_penalty:"number"==typeof w,presence_penalty:"number"==typeof k,temperature:"number"==typeof v,top_p:"number"==typeof Y},F=(0,a.useCallback)(async(t,i)=>{let o,l=ta[t];if(i){let e=y.current[t],i="number"==typeof e?e:ts[t];y.current[t]=i,o=i,p.setFieldValue(l,i)}else{let e=p.getFieldValue(l);"number"==typeof e&&(y.current[t]=e),o=void 0,p.setFieldValue(l,void 0)}e(!0);let r=p.getFieldsValue(),a={...r.params??{}};void 0===o?(delete a[t],a[t]=null):a[t]=o;let s={...r,params:a};await n(s),e(!1)},[p,e,n]),C=(0,a.useCallback)((0,f.A)(async t=>{e(!0),await n(t),e(!1)},500),[n,e]),T=Object.keys(td).map(e=>{let i=td[e],n=i.Component,r=A[e];return{children:(0,o.Y)(tr,{Component:n,checked:r,disabled:!r,onToggle:t=>F(e,t),styles:l}),label:(0,o.FD)(S.Flexbox,{align:"center",className:l.label,gap:8,horizontal:!0,children:[t(i.labelKey),(0,o.Y)(eX.A,{title:t(i.descKey)})]}),name:ta[e],tag:i.tag}});return(0,o.Y)(m.Ay,{form:p,initialValues:r,itemMinWidth:220,items:i?T:T.map(({tag:e,...t})=>({...t,desc:(0,o.Y)(eZ.A,{size:"small",children:e})})),itemsType:"flat",onValuesChange:C,styles:{group:{background:"transparent",paddingBottom:12}}})}),tp=(0,a.memo)(()=>{let[e]=(0,d.o)(e=>[c.e.isAgentConfigLoading(e)]),[t,i]=(0,a.useState)(!1),{t:n}=(0,s.Bd)("setting");return e?(0,o.Y)(u.A,{disabled:!0,icon:eJ.A}):(0,o.Y)(u.A,{icon:eJ.A,loading:t,popover:{content:(0,o.Y)(tc,{setUpdating:i,updating:t})},showTooltip:!1,title:n("settingModel.params.title")})});var th=i(42897),tu=i(79998),tg=i(86046),tm=i(17068),tx=i(38326),tb=i(76694),tf=i(91888),ty=i(98596),tv=i(78884);let tY=(0,F.rU)(({css:e,token:t})=>({recording:e`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${t.colorError};
  `})),tk=(0,a.memo)(({mobile:e,isLoading:t,formattedTime:i,time:n,isRecording:l,error:r,handleRetry:d,handleTriggerStartStop:c,handleCloseError:p,desc:h})=>{let{t:g}=(0,s.Bd)("chat"),{styles:m}=tY(),[x,b]=(0,a.useState)(!1);return(0,o.Y)(u.A,{active:l,dropdown:{menu:{activeKey:"time",items:[{key:"title",label:(0,o.Y)(S.Flexbox,{children:(0,o.Y)("div",{style:{fontWeight:"bolder"},children:g("stt.action")})})},{key:"time",label:(0,o.FD)(S.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)("div",{className:m.recording}),n>0?i:g(l?"stt.loading":"stt.prettifying")]})}]},onOpenChange:e=>{b(e)},open:x||!!r||l||t,placement:e?"topRight":"top",popupRender:r?()=>(0,o.Y)(e6.A,{action:(0,o.Y)(j.A,{onClick:d,size:"small",type:"primary",children:g("retry",{ns:"common"})}),closable:!0,extra:r.body&&(0,o.Y)(tf.A,{actionIconSize:"small",language:"json",variant:"borderless",children:JSON.stringify(r.body,null,2)}),message:r.message,onClose:p,style:{alignItems:"center"},type:"error"}):void 0,trigger:["click"]},icon:t?ty.A:tv.A,onClick:c,title:x?void 0:h,variant:e?"outlined":"borderless"})}),tw=(0,a.memo)(({mobile:e})=>{var t;let i,n,l,r,p,[h,u]=(0,a.useState)(),{t:g}=(0,s.Bd)("chat"),[m,x]=(0,tm.L)(e=>[tx.operationSelectors.isAgentRuntimeRunning(e),e.updateMessageInput]),b=(0,a.useCallback)(e=>{u({body:e,message:g("stt.responseError",{ns:"error"}),type:500})},[g]),{start:f,isLoading:y,stop:v,formattedTime:Y,time:k,response:w,isRecording:A}=(t={onError:e=>{v(),b(e)},onErrorRetry:e=>{v(),b(e)},onSuccess:async()=>{if(!w||200===w.status)return;let e=await (0,tu.EB)(w);e?u(e):b(),v()},onTextChange:e=>{m&&v(),e&&x(e)}},i=(0,ec.k)(th.w0.currentTTS,eu()),n=(0,d.o)(c.e.currentAgentTTS,eu()),l=(0,E.o)(tb.c.currentLanguage),r=i.sttAutoStop,p=n?.sttLocale&&"auto"!==n.sttLocale?n.sttLocale:l,(0,tg.V)(p,{...t,autoStop:r})),F=g("stt.action"),C=(0,a.useCallback)(()=>{m||(y?v():f())},[m,y,f,v]),S=(0,a.useCallback)(()=>{u(void 0),v()},[v]),T=(0,a.useCallback)(()=>{u(void 0),f()},[f]);return(0,o.Y)(tk,{desc:F,error:h,formattedTime:Y,handleCloseError:S,handleRetry:T,handleTriggerStartStop:C,isLoading:y,isRecording:A,mobile:e,time:k})});var tA=i(23713),tF=i(11502),tC=i(16383),tS=i(32308);let tT=(0,a.memo)(({mobile:e})=>{var t;let i,n,l,r,p,[h,u]=(0,a.useState)(),{t:g}=(0,s.Bd)("chat"),[m,x]=(0,tm.L)(e=>[tx.operationSelectors.isAgentRuntimeRunning(e),e.updateMessageInput]),b=(0,a.useCallback)(e=>{u({body:e,message:g("stt.responseError",{ns:"error"}),type:500})},[g]),{start:f,isLoading:y,stop:v,formattedTime:Y,time:k,response:w,isRecording:A}=(t={onError:e=>{v(),b(e)},onErrorRetry:e=>{v(),b(e)},onSuccess:async()=>{if(!w||200===w.status)return;let e=await (0,tu.EB)(w);e?u(e):b(),v()},onTextChange:e=>{m&&v(),e&&x(e)}},i=(0,ec.k)(th.w0.currentTTS,eu()),n=(0,d.o)(c.e.currentAgentTTS,eu()),l=(0,E.o)(tb.c.currentLanguage),r=i.sttAutoStop,p=n?.sttLocale&&"auto"!==n.sttLocale?n.sttLocale:l,(0,tF.J)(p,{...t,api:{headers:(0,tC.y)(),serviceUrl:tS.Sn.stt},autoStop:r,options:{mineType:(0,tA.z)(),model:i.openAI.sttModel}})),F=g("stt.action"),C=(0,a.useCallback)(()=>{m||(y?v():f())},[m,y,f,v]),S=(0,a.useCallback)(()=>{u(void 0),v()},[v]),T=(0,a.useCallback)(()=>{u(void 0),f()},[f]);return(0,o.Y)(tk,{desc:F,error:h,formattedTime:Y,handleCloseError:S,handleRetry:T,handleTriggerStartStop:C,isLoading:y,isRecording:A,mobile:e,time:k})}),tz=(0,a.memo)(({mobile:e})=>{let{sttServer:t}=(0,ec.k)(th.w0.currentTTS,eu()),{enableSTT:i}=(0,B.wo)(ed.E);if(i)return"openai"===t?(0,o.Y)(tT,{mobile:e}):(0,o.Y)(tw,{mobile:e})});var tD=i(27752),tB=i(73451),tM=i(59327),tN=i(30994),t$=i(46265),tI=i(23047);let tL=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),t=(0,ec.k)(th.w0.getHotkeyById(tI.g8.SaveTopic)),[i,n]=(0,tm.L)(e=>[!!e.activeTopicId,e.openNewTopicOrSaveTopic]),l=(0,h.a)(),{mutate:r,isValidating:d}=(0,t$.Cf)("openNewTopicOrSaveTopic",n),[c,p]=(0,a.useState)(!1),u=i?tM.A:tN.A,g=e(i?"topic.openNewTopic":"topic.saveCurrentMessages");return l?(0,o.Y)(tB.A,{arrow:!1,okButtonProps:{danger:!1,type:"primary"},onConfirm:()=>r(),onOpenChange:p,open:c,placement:"top",title:(0,o.FD)(S.Flexbox,{align:"center",horizontal:!0,style:{marginBottom:8},children:[(0,o.Y)("div",{style:{marginRight:"16px",whiteSpace:"pre-line",wordBreak:"break-word"},children:e(i?"topic.checkOpenNewTopic":"topic.checkSaveCurrentMessages")}),(0,o.Y)(tD.A,{keys:t})]}),children:(0,o.Y)(k.A,{"aria-label":g,icon:u,loading:d,onClick:()=>p(!0)})}):(0,o.Y)(k.A,{"aria-label":g,icon:u,loading:d,onClick:()=>r(),size:{blockSize:32,size:16,strokeWidth:2.3},title:g,tooltipProps:{hotkey:t},variant:"outlined"})});tL.displayName="SaveTopic";var tP=i(79793),tE=i(62874),tR=i(17291),tU=i(1894),tW=i(49875),tj=i(47260),t_=i(47762),tH=i(25598),tO=i(6332);let tK=(0,F.rU)(({css:e,prefixCls:t})=>({select:e`
    &.${t}-select-dropdown .${t}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `})),tG=(0,a.memo)(({value:e,onChange:t,...i})=>{let n=(0,tO.J)(),{styles:l}=tK(),r=(0,a.useMemo)(()=>{let e=e=>e.children.filter(e=>!!e.abilities.functionCall).map(t=>({label:(0,o.Y)(tH.$z,{...t,...t.abilities,showInfoTag:!1}),provider:e.id,value:`${e.id}/${t.id}`}));return 1===n.length?e(n[0]):n.filter(t=>!!e(t).length).map(t=>{let i=e(t);return{label:(0,o.Y)(tH.TK,{logo:t.logo,name:t.name,provider:t.id,source:t.source}),options:i}})},[n]);return(0,o.Y)(t_.A,{onChange:(e,i)=>{let n=e.split("/").slice(1).join("/");t?.({model:n,provider:i.provider})},options:r,popupClassName:l.select,popupMatchSelectWidth:!1,value:`${e?.provider}/${e?.model}`,variant:"filled",...i})}),tV=(0,F.rU)(({css:e,token:t})=>({check:e`
    margin-inline-start: 12px;
    font-size: 16px;
    color: ${t.colorPrimary};
  `,content:e`
    flex: 1;
    width: 230px;
  `,description:e`
    width: 200px;
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,title:e`
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
  `})),tQ=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),{styles:t}=tV(),[i,n]=(0,d.o)(e=>[p.c.searchFCModel(e),e.updateAgentChatConfig]);return(0,o.FD)(S.Flexbox,{distribution:"space-between",gap:16,horizontal:!0,padding:8,children:[(0,o.FD)(S.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,o.Y)(S.Flexbox,{className:t.title,children:e("search.searchModel.title")}),(0,o.Y)(eX.A,{title:e("search.searchModel.desc")})]}),(0,o.Y)(tG,{onChange:async e=>{await n({searchFCModel:e})},style:{maxWidth:160,width:160},value:i})]})});var tq=i(41675),tJ=i(79387),tZ=i(75589);let tX=({icon:e})=>{switch(e){case"google":return(0,o.Y)(tq.A.Avatar,{size:20});case"exa":return(0,o.Y)(tJ.A.Avatar,{size:20});default:return(0,o.Y)(M.default,{icon:tZ.A,size:14})}},t0=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),[t,i,n,l]=(0,d.o)(e=>[c.e.currentAgentModel(e),c.e.currentAgentModelProvider(e),p.c.useModelBuiltinSearch(e),e.updateAgentChatConfig]),[r,h]=(0,a.useState)(!1),u=(0,eD.d)(eB.g.getEnabledModelById(t,i));return(0,o.FD)(S.Flexbox,{align:"center",horizontal:!0,justify:"space-between",onClick:async()=>{h(!0),await l({useModelBuiltinSearch:!n}),h(!1)},padding:"8px 12px",style:{cursor:"pointer",userSelect:"none"},children:[(0,o.FD)(S.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(tX,{icon:u?.settings?.searchProvider}),e("search.mode.useModelBuiltin")]}),(0,o.Y)(b.A,{checked:n,loading:r,size:"small"})]})}),t1=(0,F.rU)(({css:e,token:t})=>({active:e`
    background: ${t.colorFillTertiary};
  `,check:e`
    margin-inline-start: 12px;
    font-size: 16px;
    color: ${t.colorPrimary};
  `,description:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,icon:e`
    border: 1px solid ${t.colorFillTertiary};
    border-radius: ${t.borderRadius}px;
    background: ${t.colorBgElevated};
  `,option:e`
    cursor: pointer;

    width: 100%;
    padding-block: 8px;
    padding-inline: 8px;
    border-radius: ${t.borderRadius}px;

    transition: background-color 0.2s;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,title:e`
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
  `})),t2=(0,a.memo)(({value:e,description:t,icon:i,label:n})=>{let{cx:l,styles:r}=t1(),[a,s]=(0,d.o)(e=>[p.c.agentSearchMode(e),e.updateAgentChatConfig]);return(0,o.FD)(S.Flexbox,{align:"flex-start",className:l(r.option,a===e&&r.active),gap:12,horizontal:!0,onClick:async()=>{await s({searchMode:e})},children:[(0,o.Y)(L.default,{className:r.icon,flex:"none",height:32,width:32,children:(0,o.Y)(M.default,{icon:i})}),(0,o.FD)(S.Flexbox,{flex:1,children:[(0,o.Y)("div",{className:r.title,children:n}),(0,o.Y)("div",{className:r.description,children:t})]})]},e)}),t8=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),[t,i,n,l,r]=(0,d.o)(e=>[c.e.currentAgentModel(e),c.e.currentAgentModelProvider(e),p.c.useModelBuiltinSearch(e),p.c.currentChatConfig(e).searchMode,e.updateAgentChatConfig]),h=(0,eD.d)(eB.g.isModelSupportToolUse(t,i)),u=(0,eD.d)(tj.w.isProviderHasBuiltinSearchConfig(i)),g=(0,eD.d)(eB.g.isModelHasBuiltinSearchConfig(t,i)),m=(0,eD.d)(eB.g.isModelBuiltinSearchInternal(t,i)),x=(0,eD.d)(eB.g.modelBuiltinSearchImpl(t,i));(0,a.useEffect)(()=>{m&&(l??"off")==="off"&&r({searchMode:"auto"})},[m,l,r]);let b=m?[{description:e("search.mode.auto.desc"),icon:e5.A,label:e("search.mode.auto.title"),value:"auto"}]:[{description:e("search.mode.off.desc"),icon:tP.A,label:e("search.mode.off.title"),value:"off"},{description:e("search.mode.auto.desc"),icon:e5.A,label:e("search.mode.auto.title"),value:"auto"}],f=!m&&(g||u),y=!h&&(!x||!m&&!n),v=f||y;return(0,o.FD)(S.Flexbox,{gap:4,children:[b.map(e=>(0,tU.n)(t2,{...e,key:e.value})),v&&(0,o.Y)(tW.A,{style:{margin:0}}),f&&(0,o.Y)(t0,{}),y&&(0,o.Y)(tQ,{})]})}),t4=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),[t,i,n]=(0,d.o)(e=>[c.e.isAgentConfigLoading(e),p.c.agentSearchMode(e),e.updateAgentChatConfig]),l=(0,tR.y)(),r=(0,F.DP)(),a=(0,h.a)();return t?(0,o.Y)(u.A,{disabled:!0,icon:tP.A}):(0,o.Y)(u.A,{color:l?r.colorInfo:void 0,icon:l?tE.A:tP.A,onClick:a?void 0:async e=>{e?.preventDefault?.(),e?.stopPropagation?.(),await n({searchMode:"off"===i?"auto":"off"})},popover:{content:(0,o.Y)(t8,{}),maxWidth:320,minWidth:320,placement:"topLeft",styles:{body:{padding:4}},trigger:a?["click"]:["hover"]},showTooltip:!1,title:e("search.title")})});t4.displayName="Search";var t3=i(33375),t6=i(71171),t5=i(10903);let t7=(0,t3.default)(()=>i.e(42525).then(i.bind(i,42525)),{loadableGenerated:{webpack:()=>[42525]},ssr:!1}),t9=(0,t3.default)(()=>i.e(55461).then(i.bind(i,55461)),{loadableGenerated:{webpack:()=>[55461]},ssr:!1}),ie=(0,a.memo)(({children:e})=>{let t,i;return t=(0,d.o)(c.e.currentAgentModel),i=(0,d.o)(c.e.currentAgentModelProvider),(0,eD.d)(eB.g.isModelHasContextWindowToken(t,i))&&e}),it=(0,a.memo)(()=>{let e=(0,tm.L)(t6.fA.mainAIChatsMessageString);return(0,o.Y)(ie,{children:(0,o.Y)(t7,{total:e})})}),ii=(0,a.memo)(()=>{let e=(0,tm.L)(t5.Z.portalDisplayChatsString);return(0,o.Y)(ie,{children:(0,o.Y)(t7,{total:e})})}),io=(0,a.memo)(()=>{let e=(0,tm.L)(t6.fA.mainAIChatsMessageString);return(0,o.Y)(ie,{children:(0,o.Y)(t9,{total:e})})});var il=i(83179),ir=i(58065),ia=i(82668),is=i(48019),id=i(40718),ic=i(61405),ip=i(74038),ih=i(16451),iu=i(68172),ig=i(94788),im=i(36740),ix=i(77991);let ib=(0,a.memo)(({id:e,onUpdate:t,label:i,checked:n})=>{let l=(0,ip.j)(t=>ix.$.isCustomPlugin(e)(t));return(0,o.Y)(ey,{checked:n,id:e,label:(0,o.FD)(S.Flexbox,{align:"center",gap:8,horizontal:!0,children:[i||e,l&&(0,o.Y)(im.A,{showText:!1,type:"customPlugin"})]}),onUpdate:t})}),iy=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("setting"),[t,i]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),r=(({setModalOpen:e,setUpdating:t})=>{let{t:i}=(0,s.Bd)("setting"),n=(0,ip.j)(iu.w.installedPluginMetaList,eu()),[l,r]=(0,d.o)(e=>[c.e.currentAgentPlugins(e),e.togglePlugin]),a=(0,ip.j)(ig.W.metaList,eu()),p=(0,d.o)(e=>c.e.currentAgentPlugins(e).filter(e=>!a.some(t=>t.identifier===e)).length),h=(0,d.o)(e=>c.e.currentAgentPlugins(e)),[u]=(0,ip.j)(e=>[e.useFetchPluginStore]);return u(),(0,ih.S)(),(0,ip.j)(e=>e.useCheckPluginsIsInstalled)(!0,h),[{children:a.map(e=>({icon:(0,o.Y)(eY.A,{avatar:e.meta.avatar,size:20,style:{flex:"none"}}),key:e.identifier,label:(0,o.Y)(ib,{checked:l.includes(e.identifier),id:e.identifier,label:e.meta?.title,onUpdate:async()=>{t(!0),await r(e.identifier),t(!1)}})})),key:"builtins",label:i("tools.builtins.groupName"),type:"group"},{children:n.map(e=>({icon:e?.avatar?(0,o.Y)(ic.A,{avatar:e.avatar,size:20}):(0,o.Y)(M.default,{icon:is.A,size:20}),key:e.identifier,label:(0,o.Y)(ib,{checked:l.includes(e.identifier),id:e.identifier,label:e.title,onUpdate:async()=>{t(!0),await r(e.identifier),t(!1)}})})),key:"plugins",label:(0,o.FD)(S.Flexbox,{align:"center",gap:40,horizontal:!0,justify:"space-between",children:[i("tools.plugins.groupName"),0===p?null:(0,o.Y)("div",{style:{fontSize:12,marginInlineEnd:4},children:i("tools.plugins.enabled",{num:p})})]}),type:"group"},{type:"divider"},{extra:(0,o.Y)(M.default,{icon:eg.A}),icon:id.A,key:"plugin-store",label:i("tools.plugins.store"),onClick:()=>{e(!0)}}]})({setModalOpen:i,setUpdating:l}),{enablePlugins:p}=(0,B.wo)(ed.E),h=(0,d.o)(c.e.currentAgentModel),g=(0,d.o)(c.e.currentAgentModelProvider),m=(0,ia.L)(h,g);return p?m?(0,o.FD)(a.Suspense,{fallback:(0,o.Y)(u.A,{disabled:!0,icon:il.A,title:e("tools.title")}),children:[(0,o.Y)(u.A,{dropdown:{maxHeight:500,maxWidth:480,menu:{items:r},minWidth:320},icon:il.A,loading:n,showTooltip:!1,title:e("tools.title")}),(0,o.Y)(ir.A,{open:t,setOpen:i})]}):(0,o.Y)(u.A,{disabled:!0,icon:il.A,showTooltip:!0,title:e("tools.disabled")}):null});var iv=i(12701),iY=i(48360);let ik=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("editor"),[t,i]=(0,iY.BN)(e=>[e.showTypoBar,e.setShowTypoBar]);return(0,o.Y)(u.A,{active:t,icon:iv.A,onClick:()=>i(!t),title:e(t?"actions.typobar.off":"actions.typobar.on")})});var iw=i(32901),iA=i(37412),iF=i(49615),iC=i(55872),iS=i(89723),iT=i(5269),iz=i(56055),iD=i(29914),iB=i(76927),iM=i(56003);let iN=(0,F.AH)`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: transparent;
  }
`,i$=(0,a.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),t=(0,iM.x)(e=>e.uploadChatFiles),i=(0,d.o)(c.e.currentAgentModel),n=(0,d.o)(c.e.currentAgentModelProvider),l=(0,iB.U)(i,n),r=[{disabled:!l,icon:iC.A,key:"upload-image",label:l?(0,o.Y)(iF.A,{accept:"image/*",beforeUpload:async e=>(await t([e]),!1),multiple:!0,showUploadList:!1,children:(0,o.Y)("div",{className:(0,F.cx)(iN),children:e("upload.action.imageUpload")})}):(0,o.Y)(iA.A,{placement:"right",title:e("upload.action.imageDisabled"),children:(0,o.Y)("div",{className:(0,F.cx)(iN),children:e("upload.action.imageUpload")})})},{icon:iS.A,key:"upload-file",label:(0,o.Y)(iF.A,{beforeUpload:async i=>{if(!l&&(i.type.startsWith("image")||i.type.startsWith("video")))return!1;let n=(0,iw.pU)(i);return n.isValid?await t([i]):iD.iU.error(e("upload.validation.videoSizeExceeded",{actualSize:n.actualSize})),!1},multiple:!0,showUploadList:!1,children:(0,o.Y)("div",{className:(0,F.cx)(iN),children:e("upload.action.fileUpload")})})},{icon:iT.A,key:"upload-folder",label:(0,o.Y)(iF.A,{beforeUpload:async i=>{if(!l&&(i.type.startsWith("image")||i.type.startsWith("video")))return!1;let n=(0,iw.pU)(i);return n.isValid?await t([i]):iD.iU.error(e("upload.validation.videoSizeExceeded",{actualSize:n.actualSize})),!1},directory:!0,multiple:!0,showUploadList:!1,children:(0,o.Y)("div",{className:(0,F.cx)(iN),children:e("upload.action.folderUpload")})})}];return(0,o.Y)(u.A,{dropdown:{menu:{items:r}},icon:iz.A,showTooltip:!1,title:e("upload.action.tooltip")})}),iI={clear:n.A,fileUpload:()=>{let{enableKnowledgeBase:e}=(0,B.wo)(ed.E);return e&&(0,o.Y)(i$,{})},groupChatToken:io,history:v,knowledgeBase:ev,mainToken:it,mention:eC,model:eq,params:tp,portalToken:ii,saveTopic:tL,search:t4,stt:tz,temperature:tp,tools:iy,typo:ik}},11490:(e,t,i)=>{i.d(t,{A:()=>eU});var n=i(28802),o=i(42387),l=i(27369),r=i(75431),a=i(11577),s=i(83034),d=i(59121),c=i(80457),p=i(20480),h=i(48360),u=i(17068),g=i(71171),m=i(5930),x=i(31065),b=i(13972),f=i(38759),y=i(58073),v=i(10618);let Y=(0,s.memo)(()=>{let[e,t]=(0,m.o)(e=>[x.I.expandInputActionbar(e),e.toggleExpandInputActionbar]),i=(0,f.k)(y.e.enableInputMarkdown),o=(0,h.BN)(e=>e.leftActions.filter(e=>!!i||"typo"!==e)),l=(0,h.BN)(e=>e.mobile),r=(0,s.useMemo)(()=>o.map((e,t)=>{if("string"!=typeof e)return{children:e.map(e=>{let t=v.N[e];return{children:(0,n.Y)(t,{},e),key:e}}),key:`group-${t}`,type:"collapse"};{if("---"===e)return{key:`divider-${t}`,type:"divider"};let i=v.N[e];return{alwaysDisplay:"mainToken"===e,children:(0,n.Y)(i,{},e),key:e}}}),[o]);return(0,n.Y)(b.A,{collapseOffset:l?48:80,defaultGroupCollapse:!0,groupCollapse:!e,items:r,onGroupCollapseChange:e=>{t(!e)}})});var k=i(74551),w=i(22309),A=i(60317),F=i(66783),C=i(92760),S=i(17599),T=i(99849),z=i(37835),D=i(80083),B=i(33740),M=i(6999),N=i(24757),$=i(49822),I=i(14373),L=i(5195),P=i(93624),E=i(68210),R=i(29900),U=i(86653),W=i(42897),j=i(71457),_=i(27752);let H=(0,s.memo)(()=>{let{t:e}=(0,d.Bd)(["editor","chat"]),t=(0,f.k)(j.U.useCmdEnterToSend)?w.zd.Enter:(0,E.i$)([w.zd.Mod,w.zd.Enter]);return(0,n.FD)(c.Flexbox,{align:"center",as:"span",gap:4,horizontal:!0,children:[e("sendPlaceholder",{ns:"chat"}).replace("...",", "),(0,n.Y)(d.x6,{as:"span",components:{key:(0,n.Y)(_.A,{as:"span",keys:t,style:{color:"inherit"},styles:{kbdStyle:{color:"inhert"}},variant:"borderless"})},i18nKey:"input.warpWithKey",ns:"chat"}),"..."]})}),O=(0,a.cx)((0,a.AH)`
  p {
    margin-block-end: 0;
  }
`),K=(0,s.memo)(({defaultRows:e=2})=>{let[t,o,l,r,a,c]=(0,h.BN)(e=>[e.editor,e.slashMenuRef,e.handleSendButton,e.updateMarkdownContent,e.expand,e.mentionItems]),p=(0,h.PI)(),u=(0,$.e)(t),g=(0,f.k)(W.w0.getHotkeyById(w.g8.AddUserMessage)),{enableScope:m,disableScope:x}=(0,U.wc)(),{t:b}=(0,d.Bd)(["editor","chat"]),v=(0,s.useRef)(!1),Y=(0,f.k)(j.U.useCmdEnterToSend),_=!!c&&c.length>0;(0,s.useEffect)(()=>{let e=e=>{u.isEmpty||(e.returnValue="You are typing something, are you sure you want to leave?")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[u.isEmpty]);let K=(0,f.k)(y.e.enableInputMarkdown),G=(0,s.useMemo)(()=>K?{plugins:[F.A,C.A,S.A,T.A,z.A,D.l,I.A.withProps(B.b,{renderComp:a?void 0:e=>(0,n.Y)(L.A,{...e,getPopupContainer:()=>o?.current})})]}:{enablePasteMarkdown:!1,markdownOption:{bold:!1,code:!1,header:!1,italic:!1,quote:!1,strikethrough:!1,underline:!1,underlineStrikethrough:!1}},[K]);return(0,n.Y)(I.A,{autoFocus:!0,className:O,content:"",editor:t,...G,mentionOption:_?{items:c,markdownWriter:e=>`<mention name="${e.label}" id="${e.metadata.id}" />`,onSelect:(e,t)=>{e.dispatchCommand(M.Z,{label:String(t.label),metadata:t.metadata})},renderComp:a?void 0:e=>(0,n.Y)(P.A,{...e,getPopupContainer:()=>o?.current})}:void 0,onBlur:()=>{x(w.g8.AddUserMessage)},onChange:()=>{r()},onCompositionEnd:()=>{v.current=!1},onCompositionStart:()=>{v.current=!0},onContextMenu:async({event:e,editor:t})=>{if(k.xl){e.preventDefault();let{electronSystemService:n}=await Promise.resolve().then(i.bind(i,64464)),o=t.getSelectionDocument("markdown");await n.showContextMenu("editor",{hasSelection:!!o,value:o})}},onFocus:()=>{m(w.g8.AddUserMessage)},onInit:e=>p.setState({editor:e}),onPressEnter:({event:e})=>{if(e.shiftKey||v.current)return;if(e.altKey&&g===(0,E.i$)([w.zd.Alt,w.zd.Enter]))return!0;let t=(0,A.EN)(e);if(Y){if(t)return l(),!0}else if(!t)return l(),!0},placeholder:(0,n.Y)(H,{}),slashOption:{items:[{icon:R.A,key:"table",label:b("typobar.table"),onSelect:e=>{e.dispatchCommand(N.Ng,{columns:"3",rows:"3"})}}],renderComp:a?void 0:e=>(0,n.Y)(P.A,{...e,getPopupContainer:()=>o?.current})},style:{minHeight:e>1?23*e:void 0},type:"text",variant:"chat"})});K.displayName="InputEditor";var G=i(31021),V=i.n(G),Q=i(9274),q=i(98426),J=i(32072);let Z=(0,s.memo)(()=>{let{t:e}=(0,d.Bd)("editor"),[t,i,o]=(0,h.BN)(e=>[e.expand,e.setExpand,e.editor]);return(0,n.Y)(Q.A,{className:"show-on-hover",icon:t?q.A:J.A,onClick:()=>{i?.(!t),o?.focus()},size:{blockSize:32,size:16,strokeWidth:2.3},style:{zIndex:10},title:e(t?"actions.expand.off":"actions.expand.on")})});Z.displayName="ExpandButton";var X=i(72724),ee=i(70923);let et=e=>e.sendButtonProps||ee.o,ei=(0,s.memo)(()=>{let e=(0,h.BN)(e=>e.sendMenu),t=(0,h.BN)(e=>e.sendButtonProps?.shape),{generating:i,disabled:o}=(0,h.BN)(et,V()),[l,r]=(0,h.BN)(e=>[e.handleSendButton,e.handleStop]);return(0,n.Y)(X.A,{disabled:o,generating:i,menu:e,onClick:()=>l(),onStop:()=>r(),placement:"topRight",shape:t,trigger:["hover"]})});ei.displayName="SendButton";let en=(0,s.memo)(()=>{let e=(0,h.BN)(e=>e.allowExpand),t=(0,h.BN)(e=>e.rightActions,V()),i=(0,s.useMemo)(()=>(t||[]).map(e=>{let t=v.N[e];return(0,n.Y)(t,{},e)}),[t]);return(0,n.FD)(c.Flexbox,{align:"center",flex:"none",gap:6,horizontal:!0,children:[e&&(0,n.Y)(Z,{}),i,(0,n.Y)(ei,{})]})});en.displayName="SendArea";var eo=i(61124),el=i(46829),er=i(59235),ea=i(88670),es=i(78001),ed=i(83232),ec=i(13988),ep=i(63117),eh=i(2941),eu=i(1616),eg=i(18157),em=i(79756),ex=i(64431),eb=i(23562);let ef=(0,s.memo)(()=>{let{t:e}=(0,d.Bd)("editor"),t=(0,h.BN)(e=>e.editor),i=(0,$.e)(t),o=(0,a.DP)(),r=(0,s.useMemo)(()=>[{active:i.isBold,icon:ea.A,key:"bold",label:e("typobar.bold"),onClick:i.bold,tooltipProps:{hotkey:(0,eo.r)(el.g8.Bold).keys}},{active:i.isItalic,icon:es.A,key:"italic",label:e("typobar.italic"),onClick:i.italic,tooltipProps:{hotkey:(0,eo.r)(el.g8.Italic).keys}},{active:i.isUnderline,icon:ed.A,key:"underline",label:e("typobar.underline"),onClick:i.underline,tooltipProps:{hotkey:(0,eo.r)(el.g8.Underline).keys}},{active:i.isStrikethrough,icon:ec.A,key:"strikethrough",label:e("typobar.strikethrough"),onClick:i.strikethrough,tooltipProps:{hotkey:(0,eo.r)(el.g8.Strikethrough).keys}},{type:"divider"},{icon:ep.A,key:"bulletList",label:e("typobar.bulletList"),onClick:i.bulletList,tooltipProps:{hotkey:(0,eo.r)(el.g8.BulletList).keys}},{icon:eh.A,key:"numberlist",label:e("typobar.numberList"),onClick:i.numberList,tooltipProps:{hotkey:(0,eo.r)(el.g8.NumberList).keys}},{icon:eu.A,key:"tasklist",label:e("typobar.taskList"),onClick:i.checkList},{type:"divider"},{active:i.isBlockquote,icon:eg.A,key:"blockquote",label:e("typobar.blockquote"),onClick:i.blockquote},{type:"divider"},{icon:em.A,key:"math",label:e("typobar.tex"),onClick:i.insertMath},{active:i.isCode,icon:ex.A,key:"code",label:e("typobar.code"),onClick:i.code,tooltipProps:{hotkey:(0,eo.r)(el.g8.CodeInline).keys}},{icon:eb.A,key:"codeblock",label:e("typobar.codeblock"),onClick:i.codeblock},i.isCodeblock&&{children:(0,n.Y)(er.A,{onSelect:e=>i.updateCodeblockLang(e),value:i.codeblockLang}),disabled:!i.isCodeblock,key:"codeblockLang"}].filter(Boolean),[i]);return(0,n.Y)(l.A,{left:(0,n.Y)(b.A,{items:r}),style:{background:o.colorFillQuaternary,borderTopLeftRadius:8,borderTopRightRadius:8}})});ef.displayName="TypoBar";var ey=i(27051),ev=i(76927),eY=i(45541),ek=i(88990),ew=i(56003),eA=i(81490),eF=i(74573),eC=i(28726),eS=i(20966),eT=i(76048),ez=i(8055),eD=i(83838);let eB=(0,a.rU)(({css:e})=>({image:e`
    margin-block: 0 !important;
    box-shadow: none;

    img {
      object-fit: contain;
    }
  `,video:e`
    overflow: hidden;
    border-radius: 8px;
  `})),eM=(0,s.memo)(({file:e,previewUrl:t})=>{let{styles:i}=eB();return e.type.startsWith("image")?(0,n.Y)(ez.A,{alt:e.name,src:t,wrapperClassName:i.image}):e.type.startsWith("video")?(0,n.Y)("video",{className:i.video,src:t,width:"100%"}):(0,n.Y)(eD.A,{fileName:e.name,fileType:e.type,size:48})}),eN=(0,a.rU)(({css:e,token:t})=>({actions:e`
    position: absolute;
    z-index: 10;
    inset-block-start: -4px;
    inset-inline-end: -4px;

    border-radius: 5px;

    background: ${t.colorBgElevated};
    box-shadow:
      0 0 0 0.5px ${t.colorFillSecondary} inset,
      ${t.boxShadowTertiary};
  `,container:e`
    user-select: none;

    position: relative;

    width: 180px;
    height: 64px;
    border-radius: 8px;
  `,image:e`
    margin-block: 0 !important;
  `,status:e`
    &.ant-tag {
      padding-inline: 0;
      background: none;
    }
  `})),e$=(0,s.memo)(e=>{let{file:t,uploadState:i,status:o,id:l,tasks:a}=e,{t:s}=(0,d.Bd)(["chat","common"]),{styles:h}=eN(),[u]=(0,ew.x)(e=>[e.removeChatUploadFile]);return(0,n.FD)(eC.A,{align:"center",className:h.container,horizontal:!0,variant:"outlined",children:[(0,n.Y)(p.default,{flex:1,height:64,padding:4,style:{maxWidth:64},children:(0,n.Y)(eM,{...e})}),(0,n.FD)(c.Flexbox,{flex:1,gap:4,style:{paddingBottom:4,paddingInline:4},children:[(0,n.Y)(r.A,{ellipsis:{tooltip:{styles:{body:{fontSize:12,whiteSpace:"balance",wordBreak:"break-all"}},title:t.name}},style:{fontSize:12,maxWidth:88},children:t.name}),(0,n.Y)(eT.A,{size:t.size,status:o,tasks:a,uploadState:i})]}),(0,n.Y)(c.Flexbox,{className:h.actions,children:(0,n.Y)(Q.A,{color:"red",icon:eS.A,onClick:()=>{u(l)},size:"small",title:s("delete",{ns:"common"})})})]})}),eI=(0,a.rU)(({css:e})=>({container:e`
    overflow-x: scroll;
    width: 100%;
  `})),eL=(0,s.memo)(()=>{let e=(0,h.BN)(e=>e.expand),t=(0,ew.x)(eF.H.chatUploadFileList),i=(0,ew.x)(eF.H.chatUploadFileListHasItem),{styles:o}=eI();return t.length&&i?(0,n.Y)(eA.A,{className:o.container,hideScrollBar:!0,horizontal:!0,orientation:"horizontal",size:8,children:(0,n.Y)(c.Flexbox,{gap:6,horizontal:!0,paddingBlock:8,paddingInline:12*!e,children:t.map(e=>(0,n.Y)(e$,{...e},e.id))})}):null}),eP=(0,s.memo)(()=>{let e=(0,eY.o)(ek.e.currentAgentModel),t=(0,eY.o)(ek.e.currentAgentModelProvider),i=(0,ev.U)(e,t),[o]=(0,ew.x)(e=>[e.uploadChatFiles]),l=async e=>{e&&0!==e.length&&o(Array.from(e).filter(e=>!!i||!e.type.startsWith("image")))};return(0,n.FD)(n.FK,{children:[(0,n.Y)(ey.A,{onUploadFiles:l}),(0,n.Y)(eL,{})]})}),eE=(0,a.rU)(({css:e,token:t})=>({container:e`
    margin-block-start: -5px;

    .show-on-hover {
      opacity: 0;
    }

    &:hover {
      .show-on-hover {
        opacity: 1;
      }
    }
  `,footnote:e`
    font-size: 10px;
  `,fullscreen:e`
    position: absolute;
    z-index: 100;
    inset: 0;

    width: 100%;
    height: 100%;
    padding: 12px;

    background: ${t.colorBgContainerSecondary};
  `})),eR=(0,s.memo)(({showFootnote:e})=>{let{t}=(0,d.Bd)("chat"),[i,a]=(0,m.o)(e=>[x.I.chatInputHeight(e),e.updateSystemStatus]),[b,f,y,v,k]=(0,h.BN)(e=>[e.slashMenuRef,e.expand,e.showTypoBar,e.editor,e.leftActions]),{styles:w,cx:A}=eE(),F=(0,u.L)(g.fA.currentChatKey);(0,s.useEffect)(()=>{v&&v.focus()},[F,v]);let C=k.flat().includes("fileUpload")&&(0,n.Y)(eP,{});return(0,n.FD)(n.FK,{children:[!f&&C,(0,n.FD)(c.Flexbox,{className:A(w.container,f&&w.fullscreen),gap:8,paddingBlock:e?"0 8px":"0 12px",paddingInline:12,children:[(0,n.FD)(o.A,{defaultHeight:i||32,footer:(0,n.Y)(l.A,{left:(0,n.Y)(Y,{}),right:(0,n.Y)(en,{}),style:{paddingRight:8}}),fullscreen:f,header:y&&(0,n.Y)(ef,{}),maxHeight:320,minHeight:36,onSizeChange:e=>{a({chatInputHeight:e})},resize:!0,slashMenuRef:b,children:[f&&C,(0,n.Y)(K,{})]}),e&&!f&&(0,n.Y)(p.default,{style:{pointerEvents:"none",zIndex:100},children:(0,n.Y)(r.A,{className:w.footnote,type:"secondary",children:t("input.disclaimer")})})]})]})});eR.displayName="DesktopChatInput";let eU=eR},13134:(e,t,i)=>{i.d(t,{e:()=>c});var n=i(28802),o=i(11577),l=i(93778);i(83034);var r=i(80457),a=i(83838),s=i(95313);let d=(0,o.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    padding-block: 2px;
    padding-inline: 4px 8px;
    border-radius: 4px;

    color: ${t.colorTextSecondary};

    :hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,title:e`
    overflow: hidden;
    display: block;

    line-height: 20px;
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),c=({path:e,size:t=22})=>{let{styles:i}=d(),{base:o}=l.A.parse(e);return(0,n.FD)(r.Flexbox,{align:"center",className:i.container,gap:4,horizontal:!0,onClick:()=>{l.A&&s.V.openLocalFolder({isDirectory:!0,path:e})},style:{display:"inline-flex",verticalAlign:"middle"},children:[(0,n.Y)(a.A,{fileName:o,isDirectory:!0,size:t,variant:"raw"}),(0,n.Y)(r.Flexbox,{align:"baseline",gap:4,horizontal:!0,style:{overflow:"hidden",width:"100%"},children:(0,n.Y)("div",{className:i.title,children:o})})]})}},13140:(e,t,i)=>{i.d(t,{a:()=>l,f:()=>r});var n=i(11577),o=i(3779);let l=(0,n.AH)`
  &::after {
    content: '\\2026'; /* ascii code for the ellipsis character */

    overflow: hidden;
    display: inline-block;

    width: 0;

    vertical-align: bottom;

    animation: ellipsis steps(4, end) 900ms infinite;
  }

  @keyframes ellipsis {
    to {
      width: 1.25em;
    }
  }

  @keyframes ellipsis {
    to {
      width: 1.25em;
    }
  }
`,r=e=>(0,n.AH)`
  color: ${(0,o.B3)(e.colorText,.45)};

  background: linear-gradient(
    120deg,
    ${(0,o.B3)(e.colorTextBase,0)} 40%,
    ${e.colorTextSecondary} 50%,
    ${(0,o.B3)(e.colorTextBase,0)} 60%
  );
  background-clip: text;
  background-size: 200% 100%;

  animation: shine 1.5s linear infinite;

  @keyframes shine {
    0% {
      background-position: 100%;
    }

    100% {
      background-position: -100%;
    }
  }
`},14966:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(28802),o=i(1894),l=i(14654),r=i(83034),a=i(80457),s=i(11577);let d=64,c=200,p=(0,s.rU)(({css:e},{col:t,gap:i,max:n,min:o})=>({container:e`
      display: grid;
      grid-gap: ${i}px;
      grid-template-columns: repeat(${t}, 1fr);

      width: 100%;
      max-width: ${n}px;

      & > div {
        width: 100%;
        min-width: ${o}px;
        min-height: ${o}px;
        max-height: ${(n-i*(t-1))/t}px;
      }
    `})),h=(0,r.memo)(({gap:e=4,col:t=3,max:i=c,min:o=d,children:l,className:r,style:s})=>{let{styles:h,cx:u}=p({col:t,gap:e,max:i,min:o});return(0,n.Y)(a.Flexbox,{className:u(h.container,r),gap:e,horizontal:!0,style:s,children:l})}),u=(0,r.memo)(({items:e,renderItem:t})=>{let{mobile:i}=(0,l.Q)(),{firstRow:s,lastRow:d}=(0,r.useMemo)(()=>{if(4===e.length)return{firstRow:e.slice(0,2),lastRow:e.slice(2,4)};let t=e.length>4?3:e.length;return{firstRow:e.slice(0,t),lastRow:e.slice(t,e.length)}},[e]),{gap:p,max:u}=(0,r.useMemo)(()=>{let t=s.length*(s.length/e.length);return{gap:i?4:6,max:(i?90:c)*(t=t<1?1:t)}},[i,e]);return(0,n.FD)(a.Flexbox,{gap:p,children:[(0,n.Y)(h,{col:s.length,gap:p,max:u,children:s.map((e,i)=>(0,o.n)(t,{...e,index:i,key:i}))}),d.length>0&&(0,n.Y)(h,{col:s.length,gap:p,max:u,children:d.map((e,i)=>(0,o.n)(t,{...e,index:i,key:i}))})]})})},17291:(e,t,i)=>{i.d(t,{y:()=>s});var n=i(45541),o=i(88990),l=i(82964),r=i(94147),a=i(81196);let s=()=>{let[e,t,i]=(0,n.o)(e=>[o.e.currentAgentModel(e),o.e.currentAgentModelProvider(e),l.c.agentSearchMode(e)]);return"internal"===(0,r.d)(a.g.modelBuiltinSearchImpl(e,t))||"off"!==i}},18162:(e,t,i)=>{i.d(t,{r:()=>l});var n=i(83034),o=i(59121);let l=()=>{let{t:e}=(0,o.Bd)("welcome"),[t,i]=(0,n.useState)();return(0,n.useEffect)(()=>{let e;i((e=new Date().getHours())>=4&&e<11?"morning":e>=11&&e<14?"noon":e>=14&&e<18?"afternoon":"night")},[]),t&&e(`guide.welcome.${t}`)}},18234:(e,t,i)=>{i.d(t,{A:()=>P});var n=i(28802),o=i(83034),l=i(29052),r=i(2893),a=i(15447),s=i(80286),d=i(59121),c=i(20480),p=i(80457),h=i(34005),u=i(53860),g=i(47762),m=i(12389),x=i(11577),b=i(21131),f=i(72989),y=i(94147),v=i(47260);let Y=(0,o.memo)(({description:e})=>{let{t}=(0,d.Bd)("modelProvider"),[i,r]=(0,o.useState)(!1),[c,p]=(0,o.useState)(!1),Y=(0,y.d)(v.w.providerKeyVaults(s.ModelProvider.Bedrock)),k=(0,y.d)(e=>e.updateAiProviderConfig),{accessKeyId:w,secretAccessKey:A,sessionToken:F,region:C}=Y||{},S=(0,x.DP)();return(0,n.FD)(l.BA,{avatar:(0,n.Y)(h.A.Color,{color:S.colorText,size:56}),description:e,title:t("bedrock.unlock.title"),children:[(0,n.Y)(u.A,{autoComplete:"new-password",onChange:e=>{k(s.ModelProvider.Bedrock,{keyVaults:{accessKeyId:e.target.value}})},placeholder:"Aws Access Key Id",value:w,variant:"filled"}),(0,n.Y)(u.A,{autoComplete:"new-password",onChange:e=>{k(s.ModelProvider.Bedrock,{keyVaults:{secretAccessKey:e.target.value}})},placeholder:"Aws Secret Access Key",value:A,variant:"filled"}),c?(0,n.Y)(u.A,{autoComplete:"new-password",onChange:e=>{k(s.ModelProvider.Bedrock,{keyVaults:{sessionToken:e.target.value}})},placeholder:"Aws Session Token",value:F,variant:"filled"}):(0,n.Y)(a.A,{block:!0,icon:b.A,onClick:()=>{p(!0)},type:"text",children:t("bedrock.unlock.customSessionToken")}),i?(0,n.Y)(g.A,{onChange:e=>{k("bedrock",{keyVaults:{region:e}})},options:["us-east-1","us-west-2","ap-southeast-1","eu-central-1"].map(e=>({label:e,value:e})),placeholder:"https://api.openai.com/v1",style:{width:"100%"},value:C}):(0,n.Y)(a.A,{block:!0,icon:(0,n.Y)(m.default,{icon:f.A}),onClick:()=>{r(!0)},type:"text",children:t("bedrock.unlock.customRegion")})]})});var k=i(16650),w=i(85017),A=i(53069),F=i(27124),C=i(60851);let S=(0,o.createContext)({loading:!1,setLoading:()=>{}}),T=(0,x.rU)(({css:e,token:t})=>({comfyuiFormWide:e`
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
  `})),z=(0,o.memo)(({description:e})=>{let{t}=(0,d.Bd)("error"),{t:i}=(0,d.Bd)("modelProvider"),r=(0,x.DP)(),{styles:s}=T(),h=(0,y.d)(e=>e.updateAiProviderConfig),u=(0,y.d)(e=>e.useFetchAiProviderRuntimeState),{loading:b,setLoading:v}=(0,o.useContext)(S),Y=u(!0),z=(0,y.d)(e=>e.aiProviderRuntimeConfig?.comfyui?.keyVaults),[D,B]=(0,o.useState)(!1),[M,N]=(0,o.useState)({apiKey:"",authType:"none",baseURL:"http://127.0.0.1:8000",customHeaders:{},password:"",username:""});(0,o.useEffect)(()=>{z&&N({apiKey:z.apiKey||"",authType:z.authType||"none",baseURL:z.baseURL||"http://127.0.0.1:8000",customHeaders:z.customHeaders||{},password:z.password||"",username:z.username||""})},[z?.apiKey,z?.authType,z?.baseURL,z?.password,z?.username,JSON.stringify(z?.customHeaders)]);let $=[{label:i("comfyui.authType.options.none"),value:"none"},{label:i("comfyui.authType.options.basic"),value:"basic"},{label:i("comfyui.authType.options.bearer"),value:"bearer"},{label:i("comfyui.authType.options.custom"),value:"custom"}],I=async(e,t)=>{let i={...M,[e]:t};if(N(i),["customHeaders","apiKey","username","password"].includes(e)||"baseURL"!==e||t){v(!0);try{await h("comfyui",{keyVaults:i}),await Y.mutate()}catch(e){console.error("Failed to update ComfyUI config:",e)}finally{v(!1)}}};return(0,n.Y)(c.default,{className:s.container,gap:24,padding:24,children:(0,n.FD)(c.default,{gap:16,paddingBlock:32,style:{width:"100%"},children:[(0,n.Y)(k.A.Combine,{size:64,type:"color"}),(0,n.Y)(l.BA,{avatar:(0,n.Y)("div",{}),className:s.comfyuiFormWide,description:e,title:t("unlock.comfyui.title",{name:"ComfyUI"}),children:(0,n.FD)(p.Flexbox,{gap:16,width:"100%",children:[D?(0,n.FD)(p.Flexbox,{gap:4,children:[(0,n.Y)("div",{style:{fontSize:14,fontWeight:500},children:i("comfyui.baseURL.title")}),(0,n.Y)(A.A,{onChange:e=>I("baseURL",e),placeholder:i("comfyui.baseURL.placeholder"),suffix:(0,n.Y)("div",{children:b&&(0,n.Y)(m.default,{icon:w.A,spin:!0})}),value:M.baseURL})]}):(0,n.Y)(a.A,{icon:(0,n.Y)(m.default,{icon:f.A}),onClick:()=>B(!0),type:"text",children:t("unlock.comfyui.modifyBaseUrl")}),(0,n.FD)(p.Flexbox,{gap:4,children:[(0,n.Y)("div",{style:{fontSize:14,fontWeight:500},children:i("comfyui.authType.title")}),(0,n.Y)(g.A,{allowClear:!1,onChange:e=>I("authType",e),options:$,placeholder:i("comfyui.authType.placeholder"),value:M.authType})]}),"basic"===M.authType&&(0,n.FD)(n.FK,{children:[(0,n.FD)(p.Flexbox,{gap:4,children:[(0,n.Y)("div",{style:{fontSize:14,fontWeight:500},children:i("comfyui.username.title")}),(0,n.Y)(A.A,{autoComplete:"username",onChange:e=>I("username",e),placeholder:i("comfyui.username.placeholder"),suffix:(0,n.Y)("div",{children:b&&(0,n.Y)(m.default,{icon:w.A,spin:!0})}),value:M.username})]}),(0,n.FD)(p.Flexbox,{gap:4,children:[(0,n.Y)("div",{style:{fontSize:14,fontWeight:500},children:i("comfyui.password.title")}),(0,n.Y)(F.A,{autoComplete:"new-password",onChange:e=>I("password",e),placeholder:i("comfyui.password.placeholder"),suffix:(0,n.Y)("div",{children:b&&(0,n.Y)(m.default,{icon:w.A,spin:!0})}),value:M.password})]})]}),"bearer"===M.authType&&(0,n.FD)(p.Flexbox,{gap:4,children:[(0,n.Y)("div",{style:{fontSize:14,fontWeight:500},children:i("comfyui.apiKey.title")}),(0,n.Y)(F.A,{autoComplete:"new-password",onChange:e=>I("apiKey",e),placeholder:i("comfyui.apiKey.placeholder"),suffix:(0,n.Y)("div",{children:b&&(0,n.Y)(m.default,{icon:w.A,spin:!0})}),value:M.apiKey})]}),"custom"===M.authType&&(0,n.FD)(p.Flexbox,{gap:4,children:[(0,n.Y)("div",{style:{fontSize:14,fontWeight:500},children:i("comfyui.customHeaders.title")}),(0,n.Y)("div",{style:{color:r.colorTextSecondary,fontSize:12,marginBottom:4},children:i("comfyui.customHeaders.desc")}),(0,n.Y)(C.A,{addButtonText:i("comfyui.customHeaders.addButton"),deleteTooltip:i("comfyui.customHeaders.deleteTooltip"),duplicateKeyErrorText:i("comfyui.customHeaders.duplicateKeyError"),keyPlaceholder:i("comfyui.customHeaders.keyPlaceholder"),onChange:e=>I("customHeaders",e),value:M.customHeaders,valuePlaceholder:i("comfyui.customHeaders.valuePlaceholder")})]})]})})]})})});z.displayName="ComfyUIForm";var D=i(87381),B=i(62326),M=i(12467),N=i(31021),$=i.n(N);let I=(0,o.memo)(({provider:e,avatar:t,showEndpoint:i=!1,apiKeyPlaceholder:r,description:s})=>{let{t:c}=(0,d.Bd)(["modelProvider","error"]),{t:p}=(0,d.Bd)("error"),[h,u]=(0,o.useState)(!1),{apiKey:g,baseURL:x,setConfig:b}=(e=>{let{setLoading:t}=(0,o.useContext)(S),i=(0,y.d)(e=>e.updateAiProviderConfig),n=(0,y.d)(v.w.providerConfigById(e),$());return{apiKey:n?.keyVaults.apiKey,baseURL:n?.keyVaults?.baseURL,setConfig:async(e,o)=>{let l={...n?.keyVaults,...o};$()(n?.keyVaults,l)||(t(!0),await i(e,{keyVaults:{...n?.keyVaults,...o}}),t(!1))}}})(e),{showOpenAIProxyUrl:Y}=(0,B.wo)(M.E),k=(0,D.u)(e),{loading:C}=(0,o.useContext)(S);return(0,n.FD)(l.BA,{avatar:t,description:s,title:c("unlock.apiKey.title",{name:k,ns:"error"}),children:[(0,n.Y)(F.A,{autoComplete:"new-password",onChange:t=>{b(e,{apiKey:t})},placeholder:r||"sk-***********************",suffix:(0,n.Y)("div",{children:C&&(0,n.Y)(m.default,{icon:w.A,spin:!0})}),value:g}),i&&Y&&(h?(0,n.Y)(A.A,{onChange:t=>{b(e,{baseURL:t})},placeholder:"https://api.openai.com/v1",suffix:(0,n.Y)("div",{children:C&&(0,n.Y)(m.default,{icon:w.A,spin:!0})}),value:x}):(0,n.Y)(a.A,{icon:(0,n.Y)(m.default,{icon:f.A}),onClick:()=>{u(!0)},type:"text",children:p("unlock.addProxyUrl")}))]})}),L=(0,o.memo)(({provider:e,description:t,bedrockDescription:i,onRecreate:l,onClose:h})=>{let{t:u}=(0,d.Bd)("error"),[g,m]=(0,o.useState)(!1),x=(0,o.useMemo)(()=>{switch(e){case s.ModelProvider.Anthropic:return"sk-ant_*****************************";case s.ModelProvider.OpenRouter:return"sk-or-********************************";case s.ModelProvider.Perplexity:return"pplx-********************************";case s.ModelProvider.ZhiPu:return"*********************.*************";case s.ModelProvider.Groq:return"gsk_*****************************";case s.ModelProvider.DeepSeek:return"sk_******************************";case s.ModelProvider.Qwen:return"sk-********************************";case s.ModelProvider.Github:return"ghp_*****************************";default:return"*********************************"}},[e]);return(0,n.Y)(S,{value:{loading:g,setLoading:m},children:(0,n.FD)(c.default,{gap:16,style:{maxWidth:e===s.ModelProvider.ComfyUI?900:300,width:e===s.ModelProvider.ComfyUI?"80%":"auto"},children:[e===s.ModelProvider.Bedrock?(0,n.Y)(Y,{description:i}):e===s.ModelProvider.ComfyUI?(0,n.Y)(z,{description:t}):(0,n.Y)(I,{apiKeyPlaceholder:x,avatar:(0,n.Y)(r.A,{provider:e,size:80,type:"avatar"}),description:t,provider:e,showEndpoint:!0}),(0,n.FD)(p.Flexbox,{gap:12,width:"100%",children:[(0,n.Y)(a.A,{block:!0,disabled:g,onClick:()=>{l()},style:{marginTop:8},type:"primary",children:u("unlock.confirm")}),(0,n.Y)(a.A,{onClick:()=>{h()},children:u("unlock.closeMessage")})]})]})})}),P=(0,o.memo)(({id:e,provider:t,description:i,bedrockDescription:o,onRecreate:r,onClose:a})=>(0,n.Y)(l.Sf,{children:(0,n.Y)(L,{bedrockDescription:o,description:i,id:e,onClose:a,onRecreate:r,provider:t})}))},19061:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(28802),o=i(91888),l=i(83034),r=i(80457);let a=(0,l.memo)(({error:e,id:t,block:i})=>{let l=e?.body||e;if(l)return(0,n.Y)(r.Flexbox,{id:t,style:{maxWidth:i?"100%":600,width:i?"100%":void 0},children:(0,n.Y)(o.A,{actionIconSize:"small",language:"json",wrap:!0,children:JSON.stringify(l,null,2)})})})},20549:(e,t,i)=>{i.d(t,{a:()=>l});var n=i(14654),o=i(83034);let l=()=>{let{mobile:e}=(0,n.Q)();return(0,o.useMemo)(()=>!!e,[e])}},21844:(e,t,i)=>{i.d(t,{A:()=>x,g:()=>m});var n=i(28802),o=i(73451),l=i(82145),r=i(83034),a=i(59121),s=i(20549),d=i(17068),c=i(56003),p=i(38759),h=i(42897),u=i(23047),g=i(75259);let m=()=>{let e=(0,d.L)(e=>e.clearMessage),t=(0,c.x)(e=>e.clearChatUploadFileList);return(0,r.useCallback)(async()=>{await e(),t()},[t,e])},x=(0,r.memo)(()=>{let{t:e}=(0,a.Bd)("setting"),t=(0,p.k)(h.w0.getHotkeyById(u.g8.ClearCurrentMessages)),i=m(),[d,c]=(0,r.useState)(!1),x=(0,s.a)(),b=d?void 0:e("clearCurrentMessages",{ns:"chat"});return(0,n.Y)(o.A,{arrow:!1,okButtonProps:{danger:!0,type:"primary"},onConfirm:i,onOpenChange:c,open:d,placement:x?"top":"topRight",title:(0,n.Y)("div",{style:{marginBottom:"8px",whiteSpace:"pre-line",wordBreak:"break-word"},children:e("confirmClearCurrentMessages",{ns:"chat"})}),children:(0,n.Y)(g.A,{icon:l.A,title:b,tooltipProps:{hotkey:t,placement:"bottom",styles:{root:{maxWidth:"none"}}}})})})},22190:(e,t,i)=>{i.d(t,{v:()=>n});let n={newThreadMode:e=>e.newThreadMode,portalCurrentThread:e=>{if(e.portalThreadId&&e.activeTopicId)return(e.threadMaps[e.activeTopicId]||[]).find(t=>t.id===e.portalThreadId)},showThread:e=>!!e.threadStartMessageId||!!e.portalThreadId}},22880:(e,t,i)=>{i.d(t,{A:()=>S});var n=i(28802),o=i(38153),l=i(3136),r=i(12389),a=i(31021),s=i.n(a),d=i(48019),c=i(83034),p=i(20480),h=i(61405),u=i(74038),g=i(23211),m=i(35863),x=i(9274),b=i(15447),f=i(64873),y=i(58751),v=i(20966),Y=i(59121),k=i(80457),w=i(55753),A=i(45541),F=i(77991);let C=(0,c.memo)(({title:e,id:t,deprecated:i})=>{let{t:o}=(0,Y.Bd)("common"),[r,a,d]=(0,u.j)(e=>[m.P.getManifestLoadingStatus(t)(e),F.$.isCustomPlugin(t)(e),e.reinstallCustomPlugin]),p=(0,u.j)(m.P.getManifestById(t),s()),h=(0,A.o)(e=>e.removePlugin),g=(0,c.useMemo)(()=>{switch(r){case"loading":return(0,n.Y)(f.A,{color:"blue",status:"processing"});case"error":return(0,n.Y)(x.A,{icon:y.A,onClick:()=>{d(t)},size:"small",title:o("retry")});default:return(0,n.Y)(f.A,{status:"success"})}},[r]),C=i?(0,n.Y)(l.A,{bordered:!1,color:"red",style:{marginRight:0},children:o("list.item.deprecated.title",{ns:"plugin"})}):a?(0,n.Y)(l.A,{bordered:!1,color:"gold",children:o("list.item.local.title",{ns:"plugin"})}):null;return(0,n.FD)(k.Flexbox,{gap:12,horizontal:!0,justify:"space-between",children:[(0,n.FD)(k.Flexbox,{align:"center",gap:8,horizontal:!0,children:[e||t,C]}),i?(0,n.Y)(x.A,{icon:v.A,onClick:e=>{e.stopPropagation(),h(t)},size:"small",title:o("plugin.clearDeprecated",{ns:"setting"})}):(0,n.FD)(k.Flexbox,{align:"center",horizontal:!0,children:[a?(0,n.Y)(x.A,{icon:y.A,onClick:e=>{e.stopPropagation(),d(t)},size:"small",title:o("dev.meta.manifest.refresh",{ns:"plugin"})}):null,(0,n.Y)(w.A,{manifest:p||{},trigger:"hover",children:(0,n.Y)(b.A,{icon:g,size:"small",type:"text"})})]})]})}),S=(0,c.memo)(({plugins:e})=>{let t=(0,u.j)(m.P.metaList,s()),i=(0,u.j)(m.P.getMetaById(e[0]),s());if(0===e.length)return null;let a=e.map(e=>{let i=t.find(t=>t.identifier===e),o=!i,l=o?"♻️":g.V.getPluginAvatar(i.meta||i);return{icon:(0,n.Y)(p.default,{style:{minWidth:24},children:(0,n.Y)(h.A,{avatar:l,size:24})}),key:e,label:(0,n.Y)(C,{deprecated:o,id:e,title:g.V.getPluginTitle(i?.meta||i)})}}),c=e.length;return(0,n.Y)(o.A,{menu:{items:a},children:(0,n.Y)("div",{children:(0,n.FD)(l.A,{children:[(0,n.Y)(r.default,{icon:d.A}),g.V.getPluginTitle(i)||e[0],c>1&&(0,n.FD)("div",{children:["(",e.length-1,"+)"]})]})})})})},23676:(e,t,i)=>{i.d(t,{t:()=>s});var n=i(50786),o=i(23993),l=i(41734);let r={mentionedUsers:[]},a=(0,l.t)("mention"),s=(0,o.h)()(a((...e)=>({...r,...(e=>({...r,addMentionedUser:t=>{e(e=>({mentionedUsers:e.mentionedUsers.includes(t)?e.mentionedUsers:[...e.mentionedUsers,t]}),!1,"addMentionedUser")},clearMentionedUsers:()=>{e({mentionedUsers:[]},!1,"clearMentionedUsers")},removeMentionedUser:t=>{e(e=>({mentionedUsers:e.mentionedUsers.filter(e=>e!==t)}),!1,"removeMentionedUser")},setMentionedUsers:t=>{e({mentionedUsers:t},!1,"setMentionedUsers")}}))(...e)})),n.x)},23935:(e,t,i)=>{i.d(t,{M2:()=>p,N2:()=>m,OJ:()=>u,Yh:()=>g,hx:()=>x,on:()=>f,ou:()=>h,tf:()=>n,wZ:()=>b});let n=(0,i(83034).createContext)(null),o=null,l=new Set,r=new Map,a=null,s=new Set,d=e=>{a!==e&&(a=e,s.forEach(e=>e()))},c=()=>{if(0===r.size)return void d(null);let e=null,t=1/0,i=-1/0;r.forEach(({top:n,ratio:o},l)=>{(n<t||n===t&&(o>i||o===i&&l<(e??1/0)))&&(e=l,t=n,i=o)}),d(e??null)},p=e=>{o=e,l.forEach(e=>e())},h=()=>o,u=e=>(l.add(e),()=>{l.delete(e)}),g=(e,t)=>{r.set(e,t),c()},m=e=>{r.delete(e)&&c()},x=()=>{(0!==r.size||null!==a)&&(r.clear(),d(null))},b=()=>a,f=e=>(s.add(e),()=>{s.delete(e)})},26731:(e,t,i)=>{i.d(t,{OM:()=>c,VG:()=>p,aO:()=>h,yj:()=>d});var n,o=i(29447),l=i(2644),r=i.n(l),a=i(83034),s=i(98724),d=((n={}).JPG="jpg",n.PNG="png",n.SVG="svg",n.WEBP="webp",n);let c=[{label:"JPG",value:"jpg"},{label:"PNG",value:"png"},{label:"SVG",value:"svg"},{label:"WEBP",value:"webp"}],p=async({imageType:e,id:t="#preview",width:i})=>{let n,l=document.querySelector(t),r=l;if(i&&((r=l.cloneNode(!0)).style.width=`${i}px`,document.body.append(r)),"svg"===e)n=new Blob([(await (0,o.p)(i?r:l,{scale:2,width:i})).toRaw()],{type:"image/svg+xml"});else{let t=await o.p.toBlob(i?r:l,{type:"jpg"===e?"jpg":e,useProxy:"https://proxy.corsfix.com/?"});if(!t)throw Error("Failed to generate blob from snapdom");n=t}if(i&&r&&r?.remove(),!n)throw Error("Blob is undefined");return new Promise((e,t)=>{let i=new FileReader;i.addEventListener("load",()=>{"string"==typeof i.result?e(i.result):t(Error("FileReader result is not a string"))}),i.addEventListener("error",()=>t(i.error||Error("Failed to read blob as data URL"))),i.readAsDataURL(n)})},h=({imageType:e,title:t="share",id:i="#preview",width:n})=>{let[o,l]=(0,a.useState)(!1),d=(0,a.useCallback)(async()=>{l(!0);try{let o=await p({id:i,imageType:e,width:n}),a=document.createElement("a");a.download=`${s.Se}_${t}_${r()().format("YYYY-MM-DD")}.${e}`,a.href=o,a.click(),l(!1)}catch(e){console.error("Failed to download image",e),l(!1)}},[e,t]);return{loading:o,onDownload:d,title:t}}},27051:(e,t,i)=>{i.d(t,{A:()=>C});var n=i(28802),o=i(12389),l=i(11577),r=i(88627),a=i(89723),s=i(25777),d=i(3779),c=i(83034),p=i(11015),h=i(59121),u=i(20480),g=i(80457),m=i(58244),x=i(76927),b=i(45541),f=i(88990);let y="dragging-root",v=()=>document.querySelector(`#${y}`),Y=e=>{!e.dataTransfer?.items||0===e.dataTransfer.items.length||e.dataTransfer.types.includes("Files")&&e.preventDefault()},k=async e=>new Promise(t=>{e.isFile?e.file(e=>{t([e])}):e.isDirectory?e.createReader().readEntries(async e=>{let i=e.map(e=>k(e));t((await Promise.all(i)).flat())}):t([])}),w=async e=>{let t=[];for(let i of e)if("file"===i.kind){let e=i.getAsFile();if(e)t.push(new Promise(t=>{t([e])}));else{let e=i.webkitGetAsEntry();e&&t.push(k(e))}}return(await Promise.all(t)).flat()},A={size:36,strokeWidth:1.5},F=(0,l.rU)(({css:e,token:t})=>({container:e`
      width: 320px;
      height: 200px;
      padding: ${t.borderRadiusLG+4}px;
      border-radius: 16px;

      background: ${t.geekblue};
    `,content:e`
      width: 100%;
      height: 100%;
      padding: 16px;
      border: 1.5px dashed #fff;
      border-radius: ${t.borderRadiusLG}px;
    `,desc:e`
      font-size: 14px;
      line-height: 22px;
      color: #fff;
    `,icon:e`
      border-radius: ${t.borderRadiusLG}px;
      color: ${(0,d.e$)(.05,t.geekblue)};
      background: ${(0,d.a)(.38,t.geekblue)};
    `,iconGroup:e`
      margin-block-start: -44px;
    `,title:e`
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    `,wrapper:e`
      position: fixed;
      z-index: 9999;
      inset: 0;

      width: 100%;
      height: 100%;

      background: ${t.colorBgMask};

      transition: all 0.3s ease-in-out;
    `})),C=(0,c.memo)(({enabledFiles:e=!0,onUploadFiles:t})=>{let{styles:i,theme:l}=F(),{t:k}=(0,h.Bd)("components");if((e=>{let{t}=(0,h.Bd)("chat"),{message:i}=m.A.useApp(),[n,o]=(0,c.useState)(!1),l=(0,c.useRef)(0),r=(0,b.o)(f.e.currentAgentModel),a=(0,b.o)(f.e.currentAgentModelProvider),s=(0,x.U)(r,a),d=e=>{!e.dataTransfer?.items||0===e.dataTransfer.items.length||e.dataTransfer.types.includes("Files")&&(l.current+=1,e.preventDefault(),o(!0))},p=e=>{!e.dataTransfer?.items||0===e.dataTransfer.items.length||e.dataTransfer.types.includes("Files")&&(e.preventDefault(),l.current-=1,0===l.current&&o(!1))},u=async n=>{if(!n.dataTransfer?.items||0===n.dataTransfer.items.length||!n.dataTransfer.types.includes("Files"))return;n.preventDefault(),l.current=0,o(!1);let r=Array.from(n.dataTransfer?.items),a=await w(r);0===a.length||(a.some(e=>e.type.startsWith("image/"))&&!s?i.warning(t("upload.clientMode.visionNotSupported")):e(a))},g=async n=>{if(!n.clipboardData)return;let o=Array.from(n.clipboardData?.items),l=await w(o);0===l.length||(l.some(e=>e.type.startsWith("image/"))&&!s?i.warning(t("upload.clientMode.visionNotSupported")):e(l))};return(0,c.useEffect)(()=>{if(v())return;let e=document.createElement("div");return e.id=y,document.body.append(e),()=>{e.remove()}},[]),(0,c.useEffect)(()=>(window.addEventListener("dragenter",d),window.addEventListener("dragover",Y),window.addEventListener("dragleave",p),window.addEventListener("drop",u),window.addEventListener("paste",g),()=>{window.removeEventListener("dragenter",d),window.removeEventListener("dragover",Y),window.removeEventListener("dragleave",p),window.removeEventListener("drop",u),window.removeEventListener("paste",g)}),[d,Y,p,u,g]),n})(t))return(0,p.createPortal)((0,n.Y)(u.default,{className:i.wrapper,children:(0,n.Y)("div",{className:i.container,children:(0,n.FD)(u.default,{className:i.content,gap:12,children:[(0,n.FD)(g.Flexbox,{className:i.iconGroup,horizontal:!0,children:[(0,n.Y)(u.default,{className:i.icon,height:80,style:{background:(0,d.a)(.32,l.geekblue),transform:"rotateZ(-20deg) translateX(10px)"},width:64,children:(0,n.Y)(o.default,{icon:r.A,size:A})}),(0,n.Y)(u.default,{className:i.icon,height:80,style:{transform:"translateY(-12px)",zIndex:1},width:64,children:(0,n.Y)(o.default,{icon:a.A,size:A})}),(0,n.Y)(u.default,{className:i.icon,height:80,style:{background:(0,d.a)(.32,l.geekblue),transform:"rotateZ(20deg) translateX(-10px)"},width:64,children:(0,n.Y)(o.default,{icon:s.A,size:A})})]}),(0,n.FD)(g.Flexbox,{align:"center",gap:8,style:{textAlign:"center"},children:[(0,n.Y)(g.Flexbox,{className:i.title,children:k(e?"DragUpload.dragFileTitle":"DragUpload.dragTitle")}),(0,n.Y)(g.Flexbox,{className:i.desc,children:k(e?"DragUpload.dragFileDesc":"DragUpload.dragDesc")})]})]})})}),v())})},27124:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(28802),o=i(53860),l=i(83034);let r=(0,l.memo)(({onChange:e,value:t,...i})=>{let r=(0,l.useRef)(null),a=(0,l.useRef)(!1),[s,d]=(0,l.useState)(t);return(0,l.useEffect)(()=>{d(t)},[t]),(0,n.Y)(o.A,{onBlur:()=>{e?.(s)},onChange:e=>{d(e.target.value)},onCompositionEnd:()=>{a.current=!1},onCompositionStart:()=>{a.current=!0},onPressEnter:()=>{a.current||e?.(s)},ref:r,...i,value:s})});r.displayName="FormPassword";let a=r},29052:(e,t,i)=>{i.d(t,{BA:()=>p,IS:()=>d,Sf:()=>c});var n=i(28802),o=i(67072),l=i(11577),r=i(83034),a=i(20480),s=i(80457);let d=(0,l.rU)(({css:e,token:t})=>({container:e`
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
  `})),c=(0,r.memo)(({children:e,className:t,gap:i=24,padding:o=24,...l})=>{let{cx:r,styles:s}=d();return(0,n.Y)(a.default,{className:r(s.container,t),gap:i,padding:o,...l,children:e})}),p=(0,r.memo)(({children:e,background:t,title:i,description:l,avatar:r,animation:c,className:p,gap:h=16,...u})=>{let{cx:g,styles:m,theme:x}=d();return(0,n.FD)(a.default,{className:g(m.form,p),gap:h,...u,children:[(0,n.Y)(o.A,{animation:c,avatar:r,background:t??x.colorFillContent,gap:12,size:80}),(0,n.FD)(s.Flexbox,{gap:8,width:"100%",children:[(0,n.Y)(s.Flexbox,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:i}),(0,n.Y)(s.Flexbox,{className:m.desc,children:l})]}),e]})})},29724:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(28802),o=i(20659),l=i(59202),r=i(11577),a=i(51997),s=i.n(a),d=i(83034),c=i(59121),p=i(80457),h=i(7535),u=i(13140);let g=(0,r.rU)(({token:e,css:t,cx:i})=>({cardBody:t`
      padding-block-start: 12px;
      padding-inline: 12px;
    `,container:t`
      overflow: hidden;
      justify-content: space-between;

      min-width: 360px;
      max-width: 360px;
      height: 136px;
      border: 1px solid ${e.colorBorderSecondary};
      border-radius: 12px;
    `,footer:t`
      padding-block: 8px;
      padding-inline: 12px;

      font-size: ${e.fontSizeSM}px;
      color: ${e.colorTextTertiary};

      background-color: ${e.colorFillQuaternary};
    `,text:i((0,h.e)(2),(0,u.f)(e))})),m=(0,d.memo)(({url:e})=>{let{t}=(0,c.Bd)("plugin"),{styles:i}=g();return(0,n.FD)(p.Flexbox,{className:i.container,children:[(0,n.FD)(p.Flexbox,{className:i.cardBody,horizontal:!0,justify:"space-between",children:[(0,n.Y)(s(),{href:e,rel:"nofollow",target:"_blank",children:(0,n.Y)("div",{className:i.text,children:e})}),(0,n.Y)(o.A,{content:e,size:"small"})]}),(0,n.FD)(p.Flexbox,{gap:4,paddingInline:16,children:[(0,n.Y)(l.A.Node,{active:!0,style:{height:14,width:"95%"}}),(0,n.Y)(l.A.Node,{active:!0,style:{height:14,width:"40%"}})]}),(0,n.Y)("div",{className:i.footer,children:t("search.crawPages.crawling")})]})})},32092:(e,t,i)=>{i.d(t,{H:()=>s});var n=i(45541),o=i(64811),l=i(38759),r=i(61520),a=i(3296);let s=e=>{let[t]=(0,n.o)(e=>[e.useFetchAgentConfig]),i=(0,l.k)(r.P.isLogin),s=t(i,(0,o.B)(t=>{if(e){let i=t.sessions?.find(t=>t.type===a.r.Agent&&t.config?.id===e);return i?.id||t.activeId}return t.activeId}));return{...s,isLoading:s.isLoading&&i}}},32624:(e,t,i)=>{i.d(t,{i:()=>l});let n=e=>e.appState.userPath,o=e=>n(e)?.home||"",l={displayRelativePath:e=>t=>{let i=o(t);return i?e.replaceAll(i,"~"):e},userHomePath:o,userPath:n}},36237:(e,t,i)=>{i.r(t),i.d(t,{PortalHeader:()=>ie,PortalTitle:()=>t9,default:()=>it});var n,o,l=i(28802),r=i(83034),a=i(91888),s=i(80457),d=i(17068),c=i(72569),p=i(5569),h=i(40712),u=i(33031),g=i(59158),m=i(38471),x=i(33375);let b=(0,r.memo)(({htmlContent:e,width:t="100%",height:i="100%"})=>{let n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!n.current)return;let t=n.current.contentDocument;t&&(t.open(),t.write(e),t.close())},[e]),(0,l.Y)("iframe",{ref:n,style:{border:"none",height:i,width:t},title:"html-renderer"})});var f=i(32901),y=i(38153),v=i(15447),Y=i(37412),k=i(29447),w=i(58244),A=i(89098),F=i(11577),C=i(29961),S=i(57696),T=i(59121),z=i(20480),D=i(98724);let B=(0,F.AH)`
  width: 100%;
  height: 100%;

  > svg {
    width: 100%;
    height: 100%;
  }
`,M=(0,F.AH)`
  position: absolute;
  inset-block-end: 8px;
  inset-inline-end: 8px;
`,N="artfact-svg",$=({content:e})=>{let{t}=(0,T.Bd)("portal"),{message:i}=w.A.useApp(),n=(0,r.useMemo)(()=>(0,f.rX)(e),[e]),o=async()=>{let e=await k.p.toBlob(document.querySelector(`#${N}`),{scale:2,type:"png"});if(!e)throw Error("Failed to generate PNG blob");return new Promise((t,i)=>{let n=new FileReader;n.addEventListener("load",()=>{"string"==typeof n.result?t(n.result):i(Error("FileReader result is not a string"))}),n.addEventListener("error",()=>i(n.error||Error("Failed to read blob as data URL"))),n.readAsDataURL(e)})},a=async e=>{let t="";if("png"===e)t=await o();else if("svg"===e){let e=new Blob([n],{type:"image/svg+xml"});t=URL.createObjectURL(e)}let i=c.D.artifactTitle(d.L.getState()),l=document.createElement("a");l.download=`${D.Se}_${i}.${e}`,l.href=t,l.click(),l.remove()};return(0,l.FD)(s.Flexbox,{align:"center",className:"svg-renderer",height:"100%",style:{position:"relative"},children:[(0,l.Y)(z.default,{className:(0,F.cx)(B),dangerouslySetInnerHTML:{__html:n},id:N}),(0,l.Y)(s.Flexbox,{className:(0,F.cx)(M),children:(0,l.FD)(A.A.Compact,{children:[(0,l.Y)(y.A,{menu:{items:[{key:"png",label:t("artifacts.svg.download.png")},{key:"svg",label:t("artifacts.svg.download.svg")}],onClick:({key:e})=>{a(e)}},children:(0,l.Y)(v.A,{icon:C.A})}),(0,l.Y)(Y.A,{title:t("artifacts.svg.copyAsImage"),children:(0,l.Y)(v.A,{icon:S.A,onClick:async()=>{let e=await o();try{await (0,f.qp)(e),i.success(t("artifacts.svg.copySuccess"))}catch(e){i.error(t("artifacts.svg.copyFail",{error:e}))}}})})]})})]})},I=(0,x.default)(()=>Promise.all([i.e(22830),i.e(72245),i.e(72556),i.e(35887)]).then(i.bind(i,35887)),{loadableGenerated:{webpack:()=>[35887]},ssr:!1}),L=(0,r.memo)(({content:e,type:t})=>{switch(t){case"application/lobe.artifacts.react":return(0,l.Y)(I,{code:e});case"image/svg+xml":return(0,l.Y)($,{content:e});case"application/lobe.artifacts.mermaid":return(0,l.Y)(g.A,{variant:"borderless",children:e});case"text/markdown":return(0,l.Y)(m.A,{style:{overflow:"auto"},children:e});default:return(0,l.Y)(b,{htmlContent:e})}}),P=(0,r.memo)(()=>{let[e,t,i,n,o,g,m]=(0,d.L)(e=>{let t=c.D.artifactMessageId(e)||"";return[t,e.portalArtifactDisplayMode,p.R.isMessageGenerating(t)(e),c.D.artifactType(e),c.D.artifactCode(t)(e),c.D.artifactCodeLanguage(e),c.D.isArtifactTagClosed(t)(e)]});(0,r.useEffect)(()=>{i&&m&&t===h.Q.Code&&d.L.setState({portalArtifactDisplayMode:h.Q.Preview})},[i,t,m]);let x=(0,r.useMemo)(()=>{switch(n){case u.F.React:return"tsx";case u.F.Code:return g;case u.F.Python:return"python";default:return"html"}},[n,g]);if(!e)return;let b=!m||t===h.Q.Code||n===u.F.Code;return(0,l.Y)(s.Flexbox,{className:"portal-artifact",flex:1,gap:8,height:"100%",paddingInline:12,style:{overflow:"hidden"},children:b?(0,l.Y)(a.A,{language:x||"txt",style:{fontSize:12,height:"100%",overflow:"auto"},children:o}):(0,l.Y)(L,{content:o,type:n})})});var E=i(22309),R=i(9274),U=i(75431),W=i(89026),j=i(12389),_=i(92619),H=i(26420),O=i(10726),K=i(94192),G=i(7535),V=i(22158),Q=i(46675),q=i(27384),J=i(81040),Z=i(56003),X=((n=X||{}).Chunk="chunk",n.File="file",n),ee=i(59202),et=i(72609),ei=i(50243),en=i(85122),eo=i(78591),el=i(71171),er=i(64811),ea=i(62016),es=i(67393);let ed=(0,r.memo)(({id:e,index:t})=>(0,l.Y)(es.A,{enableHistoryDivider:!1,id:e,inPortalThread:!0,index:t})),ec=(0,r.memo)(()=>{let{t:e}=(0,T.Bd)("chat"),[t]=(0,d.L)(e=>[el.fA.isCurrentChatLoaded(e)]),i=(0,ei.u)(e=>e.activeThreadAgentId),n=(0,er.B)(ea.z.currentGroupAgents),o=n?.find(e=>e.id===i),a=o?.title||"this agent",s=(0,d.L)(el.fA.getThreadMessageIDs(i)),c=(0,r.useCallback)((e,t)=>(0,l.Y)(ed,{id:t,index:e}),[]);return t?0===s.length?(0,l.Y)("div",{style:{color:"#999",fontSize:"14px",padding:"32px 16px",textAlign:"center"},children:e("dm.placeholder",{agentTitle:a})}):(0,l.Y)(eo.A,{dataSource:s,itemContent:c}):(0,l.Y)(en.A,{})}),ep=(0,r.memo)(()=>{let e=(0,ei.u)(e=>e.activeThreadAgentId);return(0,l.FD)(s.Flexbox,{height:"100%",children:[(0,l.Y)(s.Flexbox,{flex:1,style:{overflow:"hidden",position:"relative"},children:(0,l.Y)(ec,{})}),e&&(0,l.Y)(et.A,{mobile:!1,targetMemberId:e})]})});var eh=i(67072),eu=i(96987),eg=i(91951),em=i(50846),ex=i(99278);let eb=(0,r.memo)(()=>{let e=(0,F.DP)(),t=(0,d.L)(e=>e.togglePortal),i=(0,ei.u)(e=>e.activeThreadAgentId),n=(0,er.B)(ea.z.currentGroupAgents),o=n?.find(e=>e.id===i);return(0,l.Y)(em.A,{actions:(0,l.Y)(s.Flexbox,{gap:4,horizontal:!0,children:(0,l.Y)(R.A,{icon:eg.A,onClick:()=>{ei.u.setState({activeThreadAgentId:""}),t(!1)},size:"small"})}),paddingBlock:6,paddingInline:8,style:{background:`linear-gradient(to bottom, ${e.colorBgContainerSecondary}, ${e.colorFillQuaternary})`},title:(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(eh.A,{avatar:o?.avatar||ex.k_,background:o?.backgroundColor??void 0,size:20}),(0,l.Y)("div",{style:{fontWeight:600},children:o?.title||(0,eu.t)("defaultSession",{ns:"common"})})]})})}),ef=(0,r.memo)(()=>((0,ei.u)(e=>e.activeThreadAgentId),(0,l.Y)("span",{children:"DM"}))),ey=(0,r.memo)(()=>{let{t:e}=(0,T.Bd)("portal");return(0,l.Y)(U.A,{style:{fontSize:16},type:"secondary",children:e("title")})});var ev=i(1894),eY=i(31021),ek=i.n(eY),ew=i(54151),eA=i(19913),eF=i(44903),eC=i(83838),eS=i(9402);let eT=(0,F.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    overflow: hidden;

    max-width: 420px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: 8px;

    background: ${t.colorFillTertiary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `})),ez=(0,r.memo)(({name:e,fileType:t,size:i,id:n})=>{let{styles:o}=eT(),r=(0,d.L)(e=>e.openFilePreview);return(0,l.FD)(s.Flexbox,{align:"center",className:o.container,gap:8,horizontal:!0,onClick:()=>{r({fileId:n})},children:[(0,l.Y)(eC.A,{fileName:e,fileType:t}),(0,l.FD)(s.Flexbox,{children:[(0,l.Y)(U.A,{ellipsis:{tooltip:!0},children:e}),(0,l.Y)(U.A,{type:"secondary",children:(0,eS.Xq)(i)})]})]})}),eD=()=>{let{t:e}=(0,T.Bd)("portal"),t=(0,d.L)(el.fA.currentUserFiles,ek()),i=(0,F.DP)();return(0,d.L)(el.fA.isCurrentChatLoaded)?0===t.length?(0,l.FD)(z.default,{gap:8,paddingBlock:24,style:{border:`1px dashed ${i.colorSplit}`,borderRadius:8,marginInline:12},children:[(0,l.Y)(eh.A,{avatar:(0,l.Y)(j.default,{icon:ew.A,size:"large"}),background:i.colorFillTertiary,size:48}),(0,l.Y)(eA.Ay,{children:(0,l.Y)(U.A,{type:"secondary",children:e("emptyKnowledgeList")})})]}):(0,l.Y)(s.Flexbox,{gap:12,paddingInline:12,children:t.map(e=>(0,ev.n)(ez,{...e,key:e.id}))}):(0,l.Y)(s.Flexbox,{gap:12,paddingInline:12,children:(0,l.Y)(eF.A,{})})},eB=(0,r.memo)(()=>{let{t:e}=(0,T.Bd)("portal");return(0,l.FD)(s.Flexbox,{gap:8,children:[(0,l.Y)(U.A,{as:"h5",style:{marginInline:12},children:e("files")}),(0,l.Y)(eD,{})]})});var eM=i(20393),eN=i(13082),e$=i(91804),eI=i(3136),eL=i(90074),eP=i(24800),eE=i(97220),eR=i(74038),eU=i(23211),eW=i(35863);let ej=(0,F.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    width: 100%;
    padding-block: 10px;
    padding-inline: 8px;
    padding-inline-end: 12px;
    border-radius: 8px;

    color: ${t.colorText};

    background: ${t.colorBgElevated};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,plugin:e`
    display: flex;
    gap: 4px;
    align-items: center;
    width: fit-content;
  `,tag:e`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    border-radius: 4px;
  `,tagBlue:e`
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,tagGreen:e`
    color: ${t.green};
    background: ${t.green1};
  `})),e_=(0,r.memo)(({payload:e,messageId:t,identifier:i="unknown"})=>{let{t:n}=(0,T.Bd)("plugin"),{styles:o,cx:r}=ej(),a=(0,eE.n)(e?.arguments),c=(0,eR.j)(eW.P.getMetaById(i),ek()),p=(0,eR.j)(eW.P.isToolHasUI(i)),h=(0,d.L)(e=>e.openToolUI),u=eU.V.getPluginTitle(c)??n("unknownPlugin");return(0,l.Y)(s.Flexbox,{align:"center",className:o.container,gap:8,horizontal:!0,onClick:()=>{p&&i&&h(t,i)},children:(0,l.FD)(s.Flexbox,{align:"center",distribution:"space-between",gap:24,horizontal:!0,children:[(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(eP.A,{identifier:i}),(0,l.FD)(s.Flexbox,{gap:4,children:[(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)("div",{children:u}),(0,l.Y)(eI.A,{children:e?.apiName})]}),(0,l.Y)("div",{children:(0,l.Y)(U.A,{ellipsis:!0,style:{fontSize:12},type:"secondary",children:a})})]})]}),(0,l.Y)(s.Flexbox,{children:p&&(0,l.Y)("div",{className:r(o.tag,o.tagBlue),style:{cursor:"pointer"},title:"",children:(0,l.Y)(j.default,{icon:eL.A})})})]})})}),eH=()=>{let{t:e}=(0,T.Bd)("portal"),t=(0,d.L)(eN.E1.dbToolMessages,ek()),i=(0,d.L)(e$._1.isCurrentDisplayChatLoaded),n=(0,F.DP)();return i?0===t.length?(0,l.FD)(z.default,{gap:8,paddingBlock:24,style:{border:`1px dashed ${n.colorSplit}`,borderRadius:8,marginInline:12},children:[(0,l.Y)(eh.A,{avatar:(0,l.Y)(j.default,{icon:eM.A,size:"large"}),background:n.colorFillTertiary,size:48}),(0,l.Y)(eA.Ay,{children:(0,l.Y)(U.A,{type:"secondary",children:e("emptyArtifactList")})})]}):(0,l.Y)(s.Flexbox,{gap:12,paddingInline:12,children:t.map(e=>(0,l.Y)(e_,{identifier:e.plugin?.identifier,messageId:e.id,payload:e.plugin},e.id))}):(0,l.Y)(s.Flexbox,{gap:12,paddingInline:12,children:[1,1,1,1,1,1].map((e,t)=>(0,l.Y)(ee.A.Button,{active:!0,block:!0,style:{borderRadius:8,height:68}},`${e}-${t}`))})},eO=(0,r.memo)(()=>{let{t:e}=(0,T.Bd)("portal");return(0,l.FD)(s.Flexbox,{gap:8,children:[(0,l.Y)(U.A,{as:"h5",style:{marginInline:12},children:e("Plugins")}),(0,l.Y)(eH,{})]})}),eK=()=>(0,l.FD)(s.Flexbox,{gap:12,height:"100%",children:[(0,l.Y)(eB,{}),(0,l.Y)(eO,{})]}),eG=(0,F.AH)`
  overflow: scroll;

  > div {
    padding-block-end: 40px;
  }
`;var eV=i(47581),eQ=i(96785),eq=i(79555),eJ=i(80122),eZ=i(20659),eX=i(54944),e0=i(84517),e1=i(51997),e2=i.n(e1),e8=i(25429);let e4=(0,F.rU)(({token:e,css:t})=>({cardBody:t`
      padding-block: 12px 8px;
      padding-inline: 16px;
    `,container:t`
      cursor: pointer;

      overflow: hidden;

      max-width: 360px;
      border: 1px solid ${e.colorBorderSecondary};
      border-radius: 12px;

      transition: border-color 0.2s;

      :hover {
        border-color: ${e.colorPrimary};
      }
    `,description:t`
      margin-block: 0 4px !important;
      color: ${e.colorTextSecondary};
    `,detailsSection:t`
      padding-block: ${e.paddingSM}px;
    `,externalLink:t`
      color: ${e.colorPrimary};
    `,footer:t`
      padding: ${e.paddingXS}px;
      border-radius: 6px;
      text-align: center;
      background-color: ${e.colorFillQuaternary};
    `,footerText:t`
      font-size: ${e.fontSizeSM}px;
      color: ${e.colorTextTertiary} !important;
    `,metaInfo:t`
      display: flex;
      align-items: center;
      color: ${e.colorTextSecondary};
    `,sliced:t`
      color: ${e.colorTextQuaternary};
    `,title:t`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      margin-block-end: 0;

      font-size: 16px;
      font-weight: bold;
    `,titleRow:t`
      color: ${e.colorText};
    `,url:t`
      color: ${e.colorTextTertiary};
    `}));var e3=((o=e3||{}).Raw="raw",o.Render="render",o);let e6=(0,r.memo)(({result:e})=>{let{t}=(0,T.Bd)("plugin"),{styles:i}=e4(),[n,o]=(0,r.useState)("render");if(!e||!e.data)return;if("errorType"in e.data)return(0,l.FD)(s.Flexbox,{className:i.footer,gap:4,children:[(0,l.Y)("div",{children:(0,l.Y)(eX.A,{classNames:{content:i.footerText},column:1,items:[{children:e.crawler,label:t("search.crawPages.meta.crawler")}],size:"small"})}),(0,l.Y)(eJ.A,{extra:(0,l.Y)("div",{style:{maxWidth:500,overflowX:"scroll"},children:(0,l.Y)(a.A,{language:"json",children:JSON.stringify(e.data,null,2)})}),message:(0,l.Y)("div",{style:{textAlign:"start"},children:e.data.errorMessage||e.data.content}),type:"error"})]});let{url:d,title:c,description:p,content:h,siteName:u}=e.data;return(0,l.FD)(s.Flexbox,{gap:24,children:[(0,l.FD)(s.Flexbox,{gap:8,children:[(0,l.Y)(s.Flexbox,{align:"center",className:i.titleRow,gap:24,horizontal:!0,justify:"space-between",children:(0,l.Y)(s.Flexbox,{children:(0,l.Y)("div",{className:i.title,children:c||e.originalUrl})})}),p&&(0,l.Y)(U.A,{className:i.description,ellipsis:{rows:4},children:p}),(0,l.FD)(s.Flexbox,{align:"center",className:i.url,gap:4,horizontal:!0,children:[u&&(0,l.FD)("div",{children:[u," \xb7 "]}),(0,l.FD)(e2(),{className:i.url,href:d,onClick:e=>e.stopPropagation(),rel:"nofollow",style:{display:"flex",gap:4},target:"_blank",children:[e.originalUrl,(0,l.Y)(j.default,{icon:e0.A})]})]}),(0,l.Y)("div",{className:i.footer,children:(0,l.Y)(eX.A,{classNames:{content:i.footerText},column:2,items:[{children:e.data.content?.length,label:t("search.crawPages.meta.words")},{children:e.crawler,label:t("search.crawPages.meta.crawler")}],size:"small"})})]}),h&&(0,l.FD)(s.Flexbox,{gap:12,paddingBlock:"0 12px",children:[(0,l.FD)(s.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,l.Y)(W.A,{onChange:e=>o(e),options:[{label:t("search.crawPages.detail.preview"),value:"render"},{label:t("search.crawPages.detail.raw"),value:"raw"}],value:n,variant:"filled"}),(0,l.Y)(eZ.A,{content:h})]}),h.length>e8.tH&&(0,l.Y)(eJ.A,{message:t("search.crawPages.detail.tooLong",{characters:e8.tH}),variant:"borderless"}),"render"===n?(0,l.Y)(m.A,{variant:"chat",children:h}):(0,l.Y)("div",{style:{paddingBlock:"0 12px"},children:h.length<e8.tH?h:(0,l.FD)(l.FK,{children:[(0,l.Y)("span",{children:h.slice(0,e8.tH)}),(0,l.Y)("span",{className:i.sliced,children:h.slice(e8.tH,-1)})]})})]})]})}),e5=(0,r.memo)(({urls:e,messageId:t,results:i})=>{let n=(0,d.L)(e=>e.activePageContentUrl),o=e.find(e=>e===n),r=i.find(e=>e.originalUrl===o);return(0,l.Y)(e6,{messageId:t,result:r})});var e7=i(55156),e9=i(44230),te=i(58043),tt=i(10246),ti=i(90289),tn=i(38326);let to=()=>{let[e,t,i,n]=(0,d.L)(e=>[c.D.toolMessageId(e),tn.operationSelectors.isAgentRuntimeRunning(e),e.triggerAIMessage,e.saveSearchResult]),{t:o}=(0,T.Bd)("tool");return(0,l.FD)(s.Flexbox,{gap:8,horizontal:!0,paddingBlock:12,paddingInline:12,children:[(0,l.Y)(v.A,{icon:tt.A,loading:t,onClick:()=>{e&&i({})},children:o("search.summaryTooltip")}),(0,l.Y)(R.A,{icon:ti.A,loading:t,onClick:()=>{e&&n(e)},title:o("search.createNewSearch")})]})};var tl=i(82700),tr=i(9683),ta=i(43610),ts=i(80469),td=i(78038),tc=i(31007),tp=i(3880),th=i(58588),tu=i(52510),tg=i(98635),tm=i(49137),tx=i(24952),tb=i(10376);let tf=(0,r.memo)(({category:e,size:t=24})=>{let i=(0,F.DP)(),n=(0,r.useMemo)(()=>{switch(e){default:case"general":return ts.A;case"videos":return td.A;case"images":return tc.A;case"files":return tp.A;case"music":return th.A;case"shopping":return tu.A;case"social":return tg.A;case"it":return tm.A;case"news":return tx.A;case"science":return tb.A}},[e]);return(0,l.Y)(eh.A,{avatar:(0,l.Y)(j.default,{icon:n,style:{color:i.colorTextSecondary}}),background:i.colorFillTertiary,size:t})}),ty=(0,r.memo)(({category:e,score:t,highlight:i,engines:n})=>{let{t:o}=(0,T.Bd)("tool");return(0,l.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,l.Y)(ta.L,{engines:n}),(0,l.Y)(Y.A,{title:o(i?"search.includedTooltip":"search.scoreTooltip"),children:i?(0,l.Y)(eI.A,{bordered:!1,color:"blue",style:{marginInlineEnd:0},children:t.toFixed(1)}):(0,l.Y)(U.A,{style:{textAlign:"center",width:32,wordBreak:"keep-all"},type:"secondary",children:t.toFixed(1)})}),(0,l.Y)(tf,{category:e||"general"})]})});var tv=i(42291);let tY=(0,F.rU)(({css:e,token:t})=>({container:e`
      display: flex;
      flex: 1;

      padding: 8px;
      border-radius: 8px;

      color: initial;

      &:hover {
        background: ${t.colorFillTertiary};
      }
    `,desc:e`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      color: ${t.colorTextTertiary};
      text-overflow: ellipsis;
    `,displayLink:e`
      color: ${t.colorTextQuaternary};
    `,iframe:e`
      border: 1px solid ${t.colorBorder};
      border-radius: 8px;
    `,title:e`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      font-size: 16px;
      color: ${t.colorLink};
      text-overflow: ellipsis;
    `,url:e`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      color: ${t.colorTextDescription};
      text-overflow: ellipsis;
    `})),tk=(0,r.memo)(({content:e,url:t,iframeSrc:i,highlight:n,score:o,engines:a,title:d,category:c,...p})=>{let{styles:h,theme:u}=tY(),[g,m]=(0,r.useState)(!1),x=i||p.iframe_src;return(0,l.FD)(s.Flexbox,{gap:12,children:[(0,l.Y)(s.Flexbox,{className:h.container,onClick:()=>m(!g),children:(0,l.FD)(s.Flexbox,{flex:1,gap:8,horizontal:!0,padding:12,children:[x&&(0,l.Y)(s.Flexbox,{children:(0,l.Y)("iframe",{className:h.iframe,height:100,onClick:e=>{e.preventDefault(),e.stopPropagation()},onPlay:e=>{e.preventDefault()},src:x,style:{pointerEvents:"none"},width:200})}),(0,l.FD)(s.Flexbox,{flex:1,gap:8,children:[(0,l.FD)(s.Flexbox,{align:"center",distribution:"space-between",gap:12,horizontal:!0,children:[(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(tv.A.Group,{children:a.map(e=>(0,l.Y)(tv.A,{src:e8.Ks[e],style:{background:u.colorBgLayout,height:20,padding:3,width:20}},e))}),(0,l.Y)(s.Flexbox,{className:h.title,children:d})]}),(0,l.Y)(ty,{category:c,engines:a,highlight:n,score:o})]}),(0,l.Y)(U.A,{className:h.url,type:"secondary",children:t}),(0,l.Y)(s.Flexbox,{className:h.desc,children:e})]})]})}),g&&x&&(0,l.Y)(s.Flexbox,{children:(0,l.Y)("iframe",{className:h.iframe,height:440,src:x,width:"100%"})})]})}),tw=(0,F.rU)(({css:e,token:t})=>({container:e`
      display: flex;
      flex: 1;

      padding: 8px;
      border-radius: 8px;

      color: initial;

      &:hover {
        background: ${t.colorFillTertiary};
      }
    `,desc:e`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      color: ${t.colorTextTertiary};
      text-overflow: ellipsis;
    `,displayLink:e`
      color: ${t.colorTextQuaternary};
    `,title:e`
      font-size: 16px;
      color: ${t.colorLink};
    `,url:e`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      color: ${t.colorTextDescription};
      text-overflow: ellipsis;
    `})),tA=(0,r.memo)(e=>{let{content:t,url:i,score:n,engines:o,title:r,category:a}=e,{styles:d}=tw();return"videos"===a?(0,l.Y)(tk,{...e}):(0,l.Y)("a",{className:d.container,href:i,rel:"noreferrer",target:"_blank",children:(0,l.Y)(s.Flexbox,{distribution:"space-between",flex:1,gap:8,padding:12,children:(0,l.FD)(s.Flexbox,{gap:8,children:[(0,l.FD)(s.Flexbox,{align:"center",distribution:"space-between",horizontal:!0,children:[(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(tr.A,{title:r,url:i}),(0,l.Y)(s.Flexbox,{className:d.title,children:r})]}),(0,l.Y)(ty,{category:a,engines:o,highlight:e.highlight,score:n})]}),(0,l.Y)(U.A,{className:d.url,type:"secondary",children:i}),(0,l.Y)(s.Flexbox,{className:d.desc,children:t})]})})})}),tF=(0,r.memo)(({dataSources:e})=>{let t=(0,r.useCallback)((e,t)=>(0,l.Y)(tA,{...t,highlight:e<e8.MX}),[]);return(0,l.Y)(tl.aY,{data:e,height:"100%",itemContent:t})}),tC=(0,r.memo)(({query:e,messageId:t,response:i})=>{let n=(0,e7.A)((i.results||[]).flatMap(e=>e.engines)),o=n.length>0?n:e?.searchEngines||[];return(0,d.L)(e9.j.isSearXNGSearching(t))?(0,l.FD)(s.Flexbox,{gap:12,height:"100%",children:[(0,l.Y)(te.A,{aiSummary:!1,defaultEngines:o,defaultQuery:e.query,messageId:t,tooltip:!1}),(0,l.Y)(s.Flexbox,{gap:16,paddingBlock:16,paddingInline:12,children:[1,2,3,4,6].map(e=>(0,l.Y)(ee.A,{active:!0,paragraph:{rows:3,width:`${e%4+5}0%`},title:!1},e))})]}):(0,l.FD)(s.Flexbox,{gap:0,height:"100%",children:[(0,l.FD)(s.Flexbox,{gap:12,height:"100%",children:[(0,l.Y)(te.A,{aiSummary:!1,defaultEngines:o,defaultQuery:e.query,messageId:t,tooltip:!1}),(0,l.Y)(s.Flexbox,{height:"100%",width:"100%",children:(0,l.Y)(tF,{dataSources:i.results})})]}),(0,l.Y)(to,{})]})}),tS=(0,r.memo)(({arguments:e,messageId:t,state:i,apiName:n})=>{switch(n){case"searchWithSearXNG":case eq.t.search:return(0,l.Y)(tC,{messageId:t,query:e,response:i});case eq.t.crawlSinglePage:{let n=e.url,o=i.results.find(e=>e.originalUrl===n);return(0,l.Y)(e6,{messageId:t,result:o})}case eq.t.crawlMultiPages:return(0,l.Y)(e5,{messageId:t,results:i.results,urls:e.urls})}return null}),tT={[eq.J.identifier]:tS},tz=(0,r.memo)(()=>{let e=(0,d.L)(c.D.toolMessageId),t=(0,d.L)(el.fA.getMessageById(e||""),ek());if(!e||!t)return;let{plugin:i,pluginState:n}=t;if(!i||!i.identifier)return;let o=(0,eV.N)(i.arguments);if(!o)return;let r=tT[i.identifier];return r?(0,l.Y)(r,{apiName:i.apiName,arguments:o,identifier:i.identifier,messageId:e,state:n}):(0,l.Y)(eQ.A,{arguments:i.arguments,content:t.content,id:e,identifier:i.identifier,payload:i,pluginState:n,type:i?.type})});var tD=i(62874),tB=i(41871),tM=i(11490),tN=i(57498),t$=i(5930),tI=i(31065),tL=i(71181),tP=i(45541),tE=i(88990),tR=i(10903);let tU=["typo","stt","portalToken"],tW=(0,r.memo)(()=>{let[e,t]=(0,t$.o)(e=>[tI.I.systemStatus(e).hideThreadLimitAlert,e.updateSystemStatus]),{send:i,disabled:n,generating:o,stop:a}=(()=>{let[e,t]=(0,r.useState)(!1),i=(0,d.L)(tR.Z.isSendButtonDisabledByMessage),n=(0,d.L)(e=>tR.Z.isThreadAIGenerating(e)),o=(0,d.L)(e=>e.stopGenerateMessage),[l,a]=(0,d.L)(e=>[e.sendThreadMessage,e.updateThreadInputMessage]),s=(0,tL.W)(),c=async(e={})=>{let t=d.L.getState();if(tR.Z.isThreadAIGenerating(t)||tR.Z.isSendButtonDisabledByMessage(t))return;let i=t.threadInputEditor;if(!i)return void console.warn("not found threadInputEditor instance");let n=i.getMarkdownContent();if(!n)return;let o=(0,tP._)(),r=tE.e.currentAgentModel(o);await s({model:r,prompt:n,scenario:"chat"})&&(a(n),l({message:n,...e}),a(""),i.clearContent(),i.focus())},p=async(e={})=>{t(!0),await c(e),t(!1)};return(0,r.useMemo)(()=>({disabled:i,generating:n,loading:e,send:p,stop:o}),[i,p,n,o,e])})();return(0,l.FD)(tN.A,{children:[!e&&(0,l.Y)(s.Flexbox,{paddingBlock:"0 6px",paddingInline:12,children:(0,l.Y)(eJ.A,{closable:!0,message:(0,l.FD)(T.x6,{i18nKey:"notSupportMultiModals",ns:"thread",children:["子话题暂不支持文件/图片上传，如有需求，欢迎留言：",(0,l.Y)(e2(),{href:"https://github.com/lobehub/lobe-chat/discussions/4717",style:{textDecoration:"underline"},children:"\uD83D\uDCAC 讨论"})]}),onClose:()=>{t({hideThreadLimitAlert:!0})},type:"info"})}),(0,l.Y)(tB._,{chatInputEditorRef:e=>{e&&d.L.setState({threadInputEditor:e})},leftActions:tU,onSend:()=>{i()},sendButtonProps:{disabled:n,generating:o,onStop:a,shape:"round"},children:(0,l.Y)(tM.A,{})})]})});var tj=i(83594),t_=i(82964),tH=i(49875),tO=i(15198);let tK=(0,r.memo)(()=>{let{t:e}=(0,T.Bd)("chat");return(0,l.Y)("div",{style:{padding:"0 20px"},children:(0,l.Y)(tH.A,{style:{margin:0,padding:"20px 0"},children:(0,l.Y)(eI.A,{icon:(0,l.Y)(j.default,{icon:tO.A}),children:e("thread.divider")})})})}),tG=(0,r.memo)(({id:e,index:t})=>{let[i,n,o]=(0,d.L)(e=>[tR.Z.threadSourceMessageId(e),tR.Z.threadSourceMessageIndex(e),tR.Z.portalDisplayChatsLength(e)]),a=i===e,s=(0,r.useMemo)(()=>a&&(0,l.Y)(tK,{}),[a,e]),c=t<=n,p=(0,tP.o)(t_.c.enableHistoryDivider(o,t));return(0,l.Y)(es.A,{disableEditing:c,enableHistoryDivider:p,endRender:s,id:e,inPortalThread:!0,index:t})});tG.displayName="ThreadChatItem";let tV=(0,r.memo)(({mobile:e})=>{let t=(0,d.L)(tR.Z.portalDisplayChatIDs),i=(0,d.L)(e=>e.threadsInit);(0,tj.j)();let n=(0,r.useCallback)((e,t)=>(0,l.Y)(tG,{id:t,index:e}),[e]);return i?(0,l.Y)(s.Flexbox,{flex:1,style:{overflowX:"hidden",overflowY:"auto",position:"relative"},width:"100%",children:(0,l.Y)(eo.A,{dataSource:t,itemContent:n,mobile:e})}):(0,l.Y)(s.Flexbox,{flex:1,height:"100%",children:(0,l.Y)(en.A,{mobile:e})})}),tQ=(0,r.memo)(({mobile:e})=>(0,l.FD)(l.FK,{children:[(0,l.Y)(r.Suspense,{fallback:(0,l.Y)(s.Flexbox,{flex:1,height:"100%",children:(0,l.Y)(en.A,{mobile:e})}),children:(0,l.Y)(tV,{mobile:e})}),(0,l.Y)(tW,{})]}));var tq=i(96031),tJ=i(2815),tZ=i(36310),tX=i(19530),t0=i(22190);let t1=(0,r.memo)(()=>{let e=(0,F.DP)(),t=(0,d.L)(t0.v.portalCurrentThread,ek());return t&&(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,style:{marginInlineStart:4},children:[(0,l.Y)(j.default,{color:e.colorTextSecondary,icon:tJ.A,size:18}),(0,l.Y)(U.A,{className:G.S,ellipsis:!0,style:{color:e.colorTextSecondary,fontSize:14},children:t?.title===tX.VH?(0,l.Y)(s.Flexbox,{flex:1,height:30,justify:"center",children:(0,l.Y)(tZ.A,{})}):t?.title})]})});var t2=i(42507),t8=i(84106);let t4=()=>{let{t:e}=(0,T.Bd)("thread"),[t]=(0,d.L)(e=>[t0.v.newThreadMode(e)]);return(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,style:{marginInlineStart:4},children:[(0,l.Y)(j.default,{icon:tO.A,size:18}),(0,l.Y)(U.A,{className:G.S,ellipsis:!0,style:{fontSize:14},children:e("newPortalThread.title")}),(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(t2.A,{checked:t===t8.bF.Continuation,onChange:e=>{d.L.setState({newThreadMode:e?t8.bF.Continuation:t8.bF.Standalone})},size:"small",style:{marginInlineStart:12}}),e("newPortalThread.includeContext")]})]})},t3=()=>{let e=(0,d.L)(e=>e.startToForkThread);return(0,d.L)(e=>e.threadsInit)?e?(0,l.Y)(t4,{}):(0,l.Y)(t1,{}):(0,l.Y)(ee.A.Button,{active:!0,size:"small",style:{height:22,width:200}})},t6=(0,r.memo)(()=>{let e=(0,F.DP)(),[t,i,n,o]=(0,d.L)(e=>[!!e.portalThreadId,e.portalThreadId,e.closeThreadPortal,e.switchThread]);return(0,l.Y)(em.A,{actions:(0,l.FD)(s.Flexbox,{gap:4,horizontal:!0,children:[t&&(0,l.Y)(R.A,{icon:tq.A,onClick:()=>{i&&(o(i),n())},size:"small"}),(0,l.Y)(R.A,{icon:eg.A,onClick:n,size:"small"})]}),paddingBlock:6,paddingInline:8,style:{borderBottom:`1px solid ${e.colorBorderSecondary}`},title:(0,l.Y)(t3,{})})}),t5=(0,r.memo)(({title:e})=>{let[t]=(0,d.L)(e=>[e.togglePortal]);return(0,l.Y)(em.A,{actions:(0,l.Y)(R.A,{icon:eg.A,onClick:()=>{t(!1)},size:"small"}),style:{paddingBlock:8,paddingInline:8},title:e})}),t7=[{Body:ep,Header:eb,Title:ef,onClose:()=>{ei.u.setState({activeThreadAgentId:""}),d.L.getState().togglePortal(!1)},useEnable:()=>(0,ei.u)(e=>!!e.activeThreadAgentId)},{Body:tQ,Header:t6,Title:()=>null,onClose:()=>{d.L.setState({portalThreadId:void 0})},useEnable:()=>(0,d.L)(t0.v.showThread)},{Body:()=>{let[e,t]=(0,d.L)(e=>[c.D.messageDetailId(e),e.togglePortal]),i=(0,d.L)(el.fA.getMessageById(e||""),ek()),n=i?.content||"";return(0,r.useEffect)(()=>{i||t(!1)},[i]),(0,l.Y)(s.Flexbox,{height:"100%",paddingBlock:"0 12px",paddingInline:8,children:!!n&&(0,l.Y)(m.A,{className:(0,F.cx)(eG),variant:"chat",children:n})})},Title:()=>{let{t:e}=(0,T.Bd)("portal");return(0,l.Y)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:(0,l.Y)(U.A,{className:G.S,style:{fontSize:16},type:"secondary",children:e("messageDetail")})})},useEnable:()=>(0,d.L)(c.D.showMessageDetail)},{Body:P,Title:()=>{let{t:e}=(0,T.Bd)("portal"),[t,i,n,o,r]=(0,d.L)(e=>{let t=c.D.artifactMessageId(e)||"";return[e.portalArtifactDisplayMode,c.D.artifactType(e),c.D.artifactTitle(e),c.D.isArtifactTagClosed(t)(e),e.closeArtifact]}),a=o&&i!==E.FR.Code;return(0,l.FD)(s.Flexbox,{align:"center",flex:1,gap:12,horizontal:!0,justify:"space-between",width:"100%",children:[(0,l.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,l.Y)(R.A,{icon:H.A,onClick:()=>r(),size:"small"}),(0,l.Y)(U.A,{className:(0,F.cx)(G.S),type:"secondary",children:n})]}),(0,l.Y)(_.Ay,{theme:{token:{borderRadiusSM:16,borderRadiusXS:16,fontSize:12}},children:a&&(0,l.Y)(W.A,{onChange:e=>{d.L.setState({portalArtifactDisplayMode:e})},options:[{icon:(0,l.Y)(j.default,{icon:O.A}),label:e("artifacts.display.preview"),value:h.Q.Preview},{icon:(0,l.Y)(j.default,{icon:K.A}),label:e("artifacts.display.code"),value:h.Q.Code}],size:"small",value:t})})]})},useEnable:()=>(0,d.L)(c.D.showArtifactUI)},{Body:()=>{let e=(0,d.L)(c.D.toolMessageId),t=(0,d.L)(el.fA.getMessageById(e||""),ek());if(!e||!t)return;let{plugin:i}=t;if(i&&i.identifier&&(0,eV.N)(i.arguments))return(0,l.Y)(s.Flexbox,{flex:1,height:"100%",paddingInline:12,style:{overflow:"auto"},children:(0,l.Y)(tz,{})})},Title:()=>{let[e,t=""]=(0,d.L)(e=>[e.closeToolUI,c.D.toolUIIdentifier(e)]),{t:i}=(0,T.Bd)("plugin"),n=(0,eR.j)(eW.P.getMetaById(t),ek()),o=eU.V.getPluginTitle(n)??i("unknownPlugin");return t===eq.J.identifier?(0,l.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,l.Y)(R.A,{icon:H.A,onClick:()=>e(),size:"small"}),(0,l.Y)(j.default,{icon:tD.A,size:16}),(0,l.Y)(U.A,{style:{fontSize:16},type:"secondary",children:i("search.title")})]}):(0,l.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,l.Y)(R.A,{icon:H.A,onClick:()=>e(),size:"small"}),(0,l.Y)(eP.A,{identifier:t,size:28}),(0,l.Y)(U.A,{style:{fontSize:16},type:"secondary",children:o})]})},useEnable:()=>(0,d.L)(c.D.showPluginUI)},{Body:()=>{let e=(0,d.L)(c.D.previewFileId),t=(0,d.L)(c.D.chunkText),i=(0,Z.x)(e=>e.useFetchKnowledgeItem),{t:n}=(0,T.Bd)("portal"),[o,a]=(0,r.useState)("file"),{data:p,isLoading:h}=i(e);if(h)return(0,l.Y)(q.default,{});if(!p)return;let u="chunk"===o&&!!t;return(0,l.FD)(s.Flexbox,{height:"100%",paddingBlock:"0 4px",paddingInline:4,style:{borderRadius:4,overflow:"hidden"},children:[t&&(0,l.Y)(W.A,{block:!0,onChange:e=>a(e),options:[{icon:(0,l.Y)(j.default,{icon:V.A}),label:n("FilePreview.tabs.chunk"),value:"chunk"},{icon:(0,l.Y)(j.default,{icon:Q.A}),label:n("FilePreview.tabs.file"),value:"file"}],value:o,variant:"filled"}),u?(0,l.Y)(m.A,{style:{overflow:"scroll",paddingInline:8},children:t}):(0,l.Y)(s.Flexbox,{flex:1,paddingBlock:8,style:{overflow:"scroll"},children:(0,l.Y)(J.default,{...p})})]})},Title:()=>{let[e,t]=(0,d.L)(e=>[e.closeFilePreview,c.D.previewFileId(e)]),{data:i,isLoading:n}=(0,Z.x)(e=>e.useFetchKnowledgeItem)(t);return(0,l.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,l.Y)(R.A,{icon:H.A,onClick:()=>e(),size:"small"}),n?(0,l.Y)(ee.A.Button,{active:!0,style:{height:28}}):(0,l.Y)(U.A,{className:G.S,style:{fontSize:16},type:"secondary",children:i?.name})]})},useEnable:()=>(0,d.L)(c.D.showFilePreview)}],t9=(0,r.memo)(()=>{let e=[];for(let t of t7){let i=t.useEnable();e.push(i)}for(let[t,i]of e.entries()){let e=t7[t].Title;if(i)return(0,l.Y)(e,{})}return(0,l.Y)(ey,{})}),ie=(0,r.memo)(()=>{let e=[];for(let t of t7){let i=t.useEnable();e.push(i)}for(let[t,i]of e.entries()){let e=t7[t].Header;if(i&&e)return(0,l.Y)(e,{})}return(0,l.Y)(t5,{title:(0,l.Y)(t9,{})})}),it=(0,r.memo)(()=>{let e=[];for(let t of t7){let i=t.useEnable();e.push(i)}for(let[t,i]of e.entries()){let e=t7[t].Body;if(i)return(0,l.Y)(e,{})}return(0,l.Y)(eK,{})})},36310:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(28802),o=i(11577),l=i(83034),r=i(20480);let a=(0,o.AH)`
  circle {
    animation: bubble 1.5s cubic-bezier(0.05, 0.2, 0.35, 1) infinite;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }

  @keyframes bubble {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 0.5;
    }

    75% {
      opacity: 0.25;
    }

    to {
      opacity: 1;
    }
  }
`,s=(0,l.forwardRef)(({size:e="1em",style:t,className:i,...l},r)=>(0,n.FD)("svg",{className:(0,o.cx)(a,i),fill:"currentColor",fillRule:"evenodd",height:e,ref:r,style:{flex:"none",lineHeight:1,...t},viewBox:"0 0 60 32",xmlns:"http://www.w3.org/2000/svg",...l,children:[(0,n.Y)("circle",{cx:"7",cy:"16",r:"6"}),(0,n.Y)("circle",{cx:"30",cy:"16",r:"6"}),(0,n.Y)("circle",{cx:"53",cy:"16",r:"6"})]})),d=(0,l.memo)(()=>{let e=(0,o.DP)();return(0,n.Y)(r.default,{style:{fill:e.colorTextSecondary,height:24,width:32},children:(0,n.Y)(s,{size:14})})})},37546:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(28802),o=i(12389),l=i(11577),r=i(31840);let a=(0,i(83034).memo)(({size:e=20})=>{let t=(0,l.DP)();return(0,n.Y)(o.default,{color:t.geekblue,fill:t.geekblue3,icon:r.A,size:e})})},38128:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(83034),o=i(98724);let l=(0,n.memo)(({title:e})=>((0,n.useEffect)(()=>{document.title=e?`${e} \xb7 ${o.Se}`:o.Se},[e]),null))},38351:(e,t,i)=>{i.d(t,{A:()=>v});var n=i(28802),o=i(91888),l=i(11577),r=i(24617),a=i(83034),s=i(80457),d=i(97220),c=i(20549),p=i(13140),h=i(47690),u=i(58244),g=i(59121);let m=(0,l.rU)(({css:e,token:t})=>({copyable:e`
    cursor: pointer;
    width: 100%;
    margin-block: 2px;
    padding: 4px;

    &:hover {
      border-radius: 6px;
      background: ${t.colorFillTertiary};
    }
  `})),x=(0,a.memo)(({value:e})=>{let{message:t}=u.A.useApp(),{t:i}=(0,g.Bd)("common"),{styles:o}=m();return(0,n.Y)("div",{className:o.copyable,onClick:async()=>{await (0,h.l)(e),t.success(i("copySuccess"))},children:e})}),b=(0,l.rU)(({css:e,token:t})=>({arrayRow:e`
    &:not(:first-child) {
      border-block-start: 1px dotted ${t.colorBorderSecondary};
    }
  `,colon:e`
    color: ${t.colorTextTertiary};
  `,key:e`
    color: ${t.colorTextTertiary};
  `,row:e`
    display: flex;
    align-items: baseline;

    &:not(:first-child) {
      border-block-start: 1px dotted ${t.colorBorderSecondary};
    }
  `,shineText:(0,p.f)(t),value:e`
    color: ${t.colorTextSecondary};
  `})),f=(0,a.memo)(({hasMinWidth:e,shine:t,value:i,objectKey:o})=>{let{styles:l,cx:r}=b(),a=(0,c.a)(),s=Array.isArray(i)?i.map(e=>"object"==typeof e?JSON.stringify(e):e):"object"==typeof i&&null!==i?Object.entries(i).map(([e,t])=>`${e}: ${"object"==typeof t?JSON.stringify(t):t}`).join(", "):String(i);return(0,n.FD)("div",{className:l.row,children:[(0,n.Y)("span",{className:l.key,style:{minWidth:e?a?60:140:void 0},children:o}),(0,n.Y)("span",{className:l.colon,children:":"}),(0,n.Y)("div",{className:r(t?l.shineText:l.value),style:{width:"100%"},children:"string"==typeof s?(0,n.Y)(x,{value:s}):s.map((e,t)=>(0,n.Y)(x,{value:e},t+e))})]})}),y=(0,l.rU)(({css:e,token:t,cx:i})=>({button:e`
    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
    }
  `,codeContainer:e`
    border-radius: ${t.borderRadiusLG}px;
  `,container:e`
    position: relative;

    overflow: auto;

    max-height: 200px;
    padding-block: 4px;
    padding-inline: 12px 64px;
    border-radius: ${t.borderRadiusLG}px;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    line-height: 1.5;

    background: ${t.colorFillQuaternary};

    pre {
      margin: 0 !important;
      background: none !important;
    }

    &:hover {
      .actions {
        opacity: 1;
      }
    }
  `,editButton:i("actions",e`
      position: absolute;
      z-index: 10;
      inset-block-start: 4px;
      inset-inline-end: 4px;

      opacity: 0;

      transition: opacity 0.2s ${t.motionEaseInOut};
    `)})),v=(0,a.memo)(({arguments:e="",shine:t,actions:i})=>{let{styles:l}=y(),c=(0,a.useMemo)(()=>{try{let t=(0,r.parse)(e);if(0===Object.keys(t).length)return{};return t}catch{return e}},[e]),p=(0,d.n)(e);if("string"==typeof c)return!!p&&(0,n.Y)("div",{className:l.container,children:(0,n.Y)(o.A,{language:"yaml",showLanguage:!1,children:p})});let h=Object.keys(c).length>1;return 0===Object.keys(c).length?null:(0,n.FD)("div",{className:l.container,children:[!!i&&(0,n.Y)(s.Flexbox,{className:l.editButton,gap:4,horizontal:!0,children:i}),(0,n.Y)(s.Flexbox,{children:Object.entries(c).map(([e,i])=>(0,n.Y)(f,{editable:!1,hasMinWidth:h,objectKey:e,shine:t,value:i},e))})]})})},40620:(e,t,i)=>{i.d(t,{E:()=>m});var n=i(28802),o=i(15447),l=i(89098),r=i(67693),a=i(11577),s=i(84517),d=i(11652);i(83034);var c=i(59121),p=i(80457),h=i(83838),u=i(95313);let g=(0,a.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    padding-block: 2px;
    padding-inline: 4px 8px;
    border-radius: 4px;

    color: ${t.colorText};

    :hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,title:e`
    overflow: hidden;
    display: block;

    line-height: 20px;
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),m=({name:e,path:t,isDirectory:i=!1})=>{let{styles:a}=g(),{t:m}=(0,c.Bd)("components"),x=()=>{t&&u.V.openLocalFileOrFolder(t,i)},b=(0,n.FD)(p.Flexbox,{align:"center",className:a.container,gap:4,horizontal:!0,onClick:i?x:void 0,style:{display:"inline-flex",verticalAlign:"middle"},children:[(0,n.Y)(h.A,{fileName:e,isDirectory:i,size:22,variant:"raw"}),(0,n.Y)(p.Flexbox,{align:"baseline",gap:4,horizontal:!0,style:{overflow:"hidden",width:"100%"},children:(0,n.Y)("div",{className:a.title,children:e})})]});if(i)return b;let f=(0,n.FD)(l.A.Compact,{children:[(0,n.Y)(o.A,{icon:s.A,onClick:x,size:"small",title:m("LocalFile.action.open"),children:m("LocalFile.action.open")}),(0,n.Y)(o.A,{icon:d.A,onClick:()=>{t&&u.V.openFileFolder(t)},size:"small",title:m("LocalFile.action.showInFolder"),children:m("LocalFile.action.showInFolder")})]});return(0,n.Y)(r.A,{arrow:!1,content:f,styles:{body:{padding:0}},trigger:["hover"],children:b})}},41871:(e,t,i)=>{i.d(t,{_:()=>d});var n=i(28802),o=i(20406),l=i(83034),r=i(81088),a=i(48360);let s=(0,l.memo)(({chatInputEditorRef:e,mobile:t,sendButtonProps:i,leftActions:n,rightActions:o,onSend:s,onMarkdownContentChange:d,sendMenu:c,mentionItems:p})=>{let h=(0,a.PI)(),u=(0,r.H)(h),g=(()=>{let[e,t,i,n,o]=(0,a.BN)(e=>[e.editor,e.getMarkdownContent,e.getJSONState,e.setExpand,e.setJSONState]);return(0,l.useMemo)(()=>({clearContent:()=>{e?.cleanDocument()},focus:()=>{e?.focus()},getJSONState:i,getMarkdownContent:t,instance:e,setExpand:n,setJSONState:o}),[e])})();return u("mobile",t),u("sendMenu",c),u("mentionItems",p),u("leftActions",n),u("rightActions",o),u("sendButtonProps",i),u("onSend",s),u("onMarkdownContentChange",d),(0,l.useImperativeHandle)(e,()=>g),null}),d=(0,l.memo)(({children:e,leftActions:t,rightActions:i,mobile:r,sendButtonProps:d,onSend:c,sendMenu:p,chatInputEditorRef:h,onMarkdownContentChange:u,mentionItems:g})=>{let m=(0,o.h)(),x=(0,l.useRef)(null);return(0,n.FD)(a.Kq,{createStore:()=>(0,a.y$)({editor:m,leftActions:t,mentionItems:g,mobile:r,rightActions:i,sendButtonProps:d,sendMenu:p,slashMenuRef:x}),children:[(0,n.Y)(s,{chatInputEditorRef:h,leftActions:t,mentionItems:g,mobile:r,onMarkdownContentChange:u,onSend:c,rightActions:i,sendButtonProps:d,sendMenu:p}),e]})})},42379:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(28802),o=i(80457);let l=({children:e,withNav:t,style:i,header:l,id:r="lobe-mobile-scroll-container",...a})=>{let s=(0,n.Y)(o.Flexbox,{height:"100%",id:r,style:{overflowX:"hidden",overflowY:"auto",position:"relative",...i,paddingBottom:t?48:i?.paddingBottom},width:"100%",...a,children:e});return l?(0,n.FD)(o.Flexbox,{height:"100%",style:{overflow:"hidden",position:"relative"},width:"100%",children:[l,(0,n.Y)(o.Flexbox,{height:"100%",id:"lobe-mobile-scroll-container",style:{overflowX:"hidden",overflowY:"auto",position:"relative",...i,paddingBottom:t?48:i?.paddingBottom},width:"100%",...a,children:e})]}):s};l.displayName="MobileContentLayout";let r=l},42626:(e,t,i)=>{i.d(t,{q:()=>v,G:()=>Y});var n=i(73166),o=i(83034),l=i(71181),r=i(45541),a=i(88990),s=i(17068),d=i(38326),c=i(5569),p=i(3431),h=i(11439),u=i(91804),g=i(56003),m=i(74573),x=i(23676),b=i(64811),f=i(17869),y=i(38759);let v=()=>{let[e,t,i,x,b,f,v,Y]=(0,s.L)(e=>[!e.inputMessage,e.sendMessage,e.addAIMessage,e.stopGenerateMessage,e.cancelSendMessageInServer,d.operationSelectors.isMainWindowAgentRuntimeRunning(e),c.R.isSendButtonDisabledByMessage(e),p.B.isCurrentSendMessageLoading(e)]),{analytics:k}=(0,n.st)(),w=(0,l.W)(),A=(0,g.x)(m.H.chatUploadFileList),[F,C]=(0,g.x)(e=>[m.H.isUploadingFiles(e),e.clearChatUploadFileList]),S=e&&0===A.length||F||v||Y,T=async(e={})=>{if(S)return;let n=s.L.getState(),o=n.mainInputEditor;if(!o)return void console.warn("not found mainInputEditor instance");if(d.operationSelectors.isMainWindowAgentRuntimeRunning(n))return;let l=n.inputMessage,c=m.H.chatUploadFileList(g.x.getState());if(!l&&0===c.length)return;let p=(0,r._)(),x=a.e.currentAgentModel(p);if(!await w({model:x,prompt:l,scenario:"chat"}))return;e.onlyAddAIMessage?i():t({files:c,message:l,...e}),C(),o.setExpand(!1),o.clearContent(),o.focus();let b=(0,y.c)(),f=c.some(e=>e.file?.type?.startsWith("image")),v=c.some(e=>e.file?.type?.startsWith("video")),Y=0===c.length?"text":v?"video":f?"image":"file";k?.track({name:"send_message",properties:{chat_id:n.activeId||"unknown",current_topic:h.e.currentActiveTopic(n)?.title||null,has_attachments:c.length>0,history_message_count:u._1.activeDisplayMessages(n).length,message:l,message_length:l.length,message_type:Y,selected_model:a.e.currentAgentModel(p),session_id:n.activeId||"inbox",user_id:b.user?.id||"anonymous"}})},z=()=>{let e=(0,s.b)();d.operationSelectors.isMainWindowAgentRuntimeRunning(e)?x():p.B.isCurrentSendMessageLoading(e)&&b()};return(0,o.useMemo)(()=>({disabled:S,generating:f||Y,send:T,stop:z}),[S,f,Y,z,T])},Y=()=>{let[e,t,i,p,v,Y]=(0,s.L)(e=>[!e.inputMessage,e.sendGroupMessage,e.updateMessageInput,e.stopGenerateMessage,c.R.isSendButtonDisabledByMessage(e),c.R.isCreatingMessage(e)]),k=(0,s.L)(e=>u._1.isSupervisorLoading(e.activeId)(e)),{analytics:w}=(0,n.st)(),A=(0,l.W)(),F=m.H.chatUploadFileList(g.x.getState()),[C,S]=(0,g.x)(e=>[m.H.isUploadingFiles(e),e.clearChatUploadFileList]),T=e&&0===F.length||C||v||Y||k,z=(0,o.useCallback)(async(e={})=>{if(T)return;let n=s.L.getState();if(!n.activeId)return;let o=n.mainInputEditor;if(!o)return void console.warn("not found mainInputEditor instance");if(u._1.isSupervisorLoading(n.activeId)(n)||c.R.isCreatingMessage(n))return;let l=n.inputMessage;if(!l&&0===F.length)return;let d=(0,r._)(),p=a.e.currentAgentModel(d);if(!await A({model:p,prompt:l,scenario:"chat"}))return;let g=x.t.getState(),m=g.mentionedUsers,v=b.B.getState(),Y=m.length>0?` ${m.map(e=>f.G.getAgentMetaByAgentId(e)(v).title||e).map(e=>`@${e}`).join(" ")}`:"",k=`${l}${Y}`.trim();t({files:F,groupId:n.activeId,message:k,targetMemberId:e.targetMemberId,...e}),S(),o.setExpand(!1),o.clearContent(),o.focus(),i(""),g.clearMentionedUsers();let C=(0,y.c)(),z=F.some(e=>e.file?.type?.startsWith("image")),D=0===F.length?"text":z?"image":"file";w?.track({name:"send_group_message",properties:{chat_id:n.activeId||"unknown",current_topic:h.e.currentActiveTopic(n)?.title||null,has_attachments:F.length>0,history_message_count:u._1.activeDisplayMessages(n).length,message:l,message_length:l.length,message_type:D,selected_model:a.e.currentAgentModel(d),session_id:n.activeId||"inbox",user_id:C.user?.id||"anonymous"}})},[T,F,S,i,w,A]),D=(0,o.useCallback)(()=>{let e=(0,s.b)(),t=d.operationSelectors.isMainWindowAgentRuntimeRunning(e),i=c.R.isCreatingMessage(e);t?p():i&&console.warn("Group message creation in progress, cannot cancel")},[p]);return(0,o.useMemo)(()=>({disabled:T,generating:k||Y,send:z,stop:D,updateMessageInput:i}),[T,k,Y,z,D,i])}},42901:(e,t,i)=>{i.d(t,{E:()=>o});var n,o=((n={}).Narrow="narrow",n.Wide="wide",n)},43610:(e,t,i)=>{i.d(t,{L:()=>d,c:()=>s});var n=i(28802),o=i(42291),l=i(11577),r=i(83034),a=i(25429);let s=(0,r.memo)(({engine:e})=>(0,n.Y)(o.A,{alt:e,src:a.Ks[e],style:{height:16,width:16}})),d=(0,r.memo)(({engines:e})=>{let t=(0,l.DP)();return(0,n.Y)(o.A.Group,{children:e.map((e,i)=>(0,n.Y)(o.A,{src:a.Ks[e],style:{background:t.colorBgLayout,height:20,padding:3,width:20,zIndex:100-i}},e))})})},44230:(e,t,i)=>{i.d(t,{j:()=>n});let n={isDallEImageGenerating:e=>t=>t.dalleImageLoading[e],isGeneratingDallEImage:e=>Object.values(e.dalleImageLoading).some(Boolean),isInterpreterExecuting:e=>t=>{let i=t.messageOperationMap[e];if(!i)return!1;let n=t.operations[i];return n?.type==="builtinToolInterpreter"&&n?.status==="running"},isSearXNGSearching:e=>t=>{let i=t.messageOperationMap[e];if(!i)return!1;let n=t.operations[i];return n?.type==="builtinToolSearch"&&n?.status==="running"},isSearchingLocalFiles:e=>t=>{let i=t.messageOperationMap[e];if(!i)return!1;let n=t.operations[i];return n?.type==="builtinToolLocalSystem"&&n?.status==="running"}}},44903:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(28802),o=i(59202),l=i(11577),r=i(83034);let a=(0,l.rU)(({css:e,responsive:t})=>e`
    ${t.mobile} {
      padding: 16px;
    }
  `),s=(0,r.memo)(({className:e,...t})=>{let{cx:i,styles:l}=a();return(0,n.Y)(o.A,{active:!0,className:i(l,e),paragraph:{rows:8},...t})})},45140:(e,t,i)=>{i.d(t,{A:()=>Y});var n=i(28802),o=i(37412),l=i(3136),r=i(12389),a=i(15447),s=i(64873),d=i(11577),c=i(58751),p=i(85017),h=i(22158),u=i(3779),g=i(83034),m=i(59121),x=i(80457),b=i(73722);let f=(0,d.rU)(({css:e,token:t,isDarkMode:i})=>({errorReason:e`
    padding: 4px;
    border-radius: 4px;

    font-family: monospace;
    font-size: 12px;

    background: ${i?(0,u.e$)(.1,t.colorText):(0,u.a)(.1,t.colorText)};
  `})),y=(0,g.memo)(({chunkCount:e,embeddingStatus:t,embeddingError:i,onClick:a,onErrorClick:s,className:d})=>{let{t:p}=(0,m.Bd)(["components","common"]),{styles:u,cx:g}=f();switch(t){case b.cz.Processing:return(0,n.Y)(x.Flexbox,{horizontal:!0,children:(0,n.Y)(o.A,{styles:{root:{pointerEvents:"none"}},title:p("FileParsingStatus.chunks.embeddingStatus.processing"),children:(0,n.Y)(l.A,{bordered:!1,className:g("chunk-tag",d),color:"processing",icon:(0,n.Y)(r.default,{icon:h.A,spin:!0}),style:{cursor:"pointer"},children:e})})});case b.cz.Error:return(0,n.Y)(o.A,{styles:{root:{maxWidth:340,pointerEvents:"none"}},title:(0,n.FD)(x.Flexbox,{gap:4,children:[p("FileParsingStatus.chunks.embeddingStatus.errorResult"),i&&(0,n.FD)(x.Flexbox,{className:u.errorReason,children:["[",i.name,"]:"," ",i.body&&"string"!=typeof i.body?i.body.detail:i.body]})]}),children:(0,n.FD)(l.A,{bordered:!1,className:d,color:"error",children:[p("FileParsingStatus.chunks.embeddingStatus.error")," ",(0,n.Y)(r.default,{icon:c.A,onClick:()=>{s?.("embedding")},style:{cursor:"pointer"},title:p("retry",{ns:"common"})})]})});case b.cz.Success:return(0,n.Y)(x.Flexbox,{horizontal:!0,children:(0,n.Y)(o.A,{styles:{root:{pointerEvents:"none"}},title:p("FileParsingStatus.chunks.embeddingStatus.success"),children:(0,n.Y)(l.A,{bordered:!1,className:g("chunk-tag",d),color:"purple",icon:(0,n.Y)(r.default,{icon:h.A}),onClick:()=>{a?.(b.cz.Success)},style:{cursor:"pointer"},children:e})})})}}),v=(0,d.rU)(({css:e,token:t,isDarkMode:i})=>({errorReason:e`
    padding: 4px;
    border-radius: 4px;

    font-family: monospace;
    font-size: 12px;

    background: ${i?(0,u.e$)(.1,t.colorText):(0,u.a)(.1,t.colorText)};
  `})),Y=(0,g.memo)(({chunkingStatus:e,onEmbeddingClick:t,chunkingError:i,finishEmbedding:d,chunkCount:u,embeddingStatus:g,embeddingError:f,onClick:Y,preparingEmbedding:k,onErrorClick:w,className:A,hideEmbeddingButton:F})=>{let{t:C}=(0,m.Bd)(["components","common"]),{styles:S,cx:T}=v();switch(e){case b.cz.Processing:return(0,n.Y)(o.A,{styles:{root:{pointerEvents:"none"}},title:C("FileParsingStatus.chunks.status.processingTip"),children:(0,n.Y)(l.A,{className:A,color:"processing",icon:(0,n.Y)(s.A,{status:"processing"}),children:C("FileParsingStatus.chunks.status.processing")})});case b.cz.Error:return(0,n.Y)(o.A,{styles:{root:{maxWidth:340,pointerEvents:"none"}},title:(0,n.FD)(x.Flexbox,{gap:4,children:[C("FileParsingStatus.chunks.status.errorResult"),i&&(0,n.FD)(x.Flexbox,{className:S.errorReason,children:["[",i.name,"]:"," ",i.body&&"string"!=typeof i.body?i.body.detail:i.body]})]}),children:(0,n.FD)(l.A,{bordered:!1,className:A,color:"error",children:[C("FileParsingStatus.chunks.status.error")," ",(0,n.Y)(r.default,{icon:c.A,onClick:()=>{w?.("chunking")},style:{cursor:"pointer"},title:C("retry",{ns:"common"})})]})});case b.cz.Success:if(!g||k)return(0,n.Y)(x.Flexbox,{horizontal:!0,children:(0,n.Y)(o.A,{styles:{root:{pointerEvents:"none"}},title:C("FileParsingStatus.chunks.embeddingStatus.empty"),children:(0,n.FD)(l.A,{bordered:!1,className:T("chunk-tag",A),icon:k?(0,n.Y)(r.default,{icon:p.A,spin:!0}):(0,n.Y)(r.default,{icon:h.A}),onClick:()=>{Y?.(b.cz.Success)},style:{cursor:"pointer"},children:[u,F||k?null:(0,n.Y)(a.A,{onClick:e=>{e.stopPropagation(),t?.()},style:{fontSize:12,height:"auto",paddingBlock:0,paddingInline:"8px 0"},type:"link",children:C("FileParsingStatus.chunks.embeddings")})]})})});return(0,n.Y)(y,{chunkCount:u,className:A,embeddingError:f,embeddingStatus:g,finishEmbedding:d,onClick:Y,onErrorClick:w})}})},47621:(e,t,i)=>{i.d(t,{H:()=>l,I:()=>r});var n=i(11577),o=i(42901);let l=(0,n.rU)(({css:e,token:t,stylish:i,cx:n,responsive:l},r)=>{let a=r===o.E.Narrow;return{preview:n(i.noScrollbar,e`
          overflow: hidden scroll;

          width: 100%;
          max-width: ${a?"480px":"none"};
          max-height: 70dvh;
          margin: ${a?"0 auto":"0"};
          border: 1px solid ${t.colorBorder};
          border-radius: ${t.borderRadiusLG}px;

          background: ${t.colorBgLayout};

          /* stylelint-disable selector-class-pattern */
          .react-pdf__Document *,
          .react-pdf__Page * {
            pointer-events: none;
          }
          /* stylelint-enable selector-class-pattern */

          ::-webkit-scrollbar {
            width: 0 !important;
            height: 0 !important;
          }

          ${l.mobile} {
            max-height: 40dvh;
          }
        `)}}),r=(0,n.rU)(({responsive:e,token:t,css:i})=>({body:i`
    ${e.mobile} {
      padding-block-end: 68px;
    }
  `,footer:i`
    ${e.mobile} {
      position: absolute;
      inset-block-end: 0;
      inset-inline: 0;

      width: 100%;
      margin: 0;
      padding: 16px;

      background: ${t.colorBgContainer};
    }
  `,sidebar:i`
    flex: none;
    width: max(240px, 25%);
    ${e.mobile} {
      flex: 1;
      width: unset;
      margin-inline: -16px;
    }
  `}))},48360:(e,t,i)=>{i.d(t,{Kq:()=>p,y$:()=>s,BN:()=>d,PI:()=>c});var n=i(2773),o=i(14308),l=i(50786),r=i(23993),a=i(70923);let s=e=>(0,r.h)((0,o.eh)((t,i)=>({...a.u,...e,getJSONState:()=>i().editor?.getDocument("json"),getMarkdownContent:()=>String(i().editor?.getDocument("markdown")||"").trimEnd(),handleSendButton:()=>{if(!i().editor)return;let e=i().editor;i().onSend?.({clearContent:()=>e?.cleanDocument(),editor:e,getMarkdownContent:i().getMarkdownContent})},handleStop:()=>{i().editor&&i().sendButtonProps?.onStop?.({editor:i().editor})},setExpand:e=>{t({expand:e})},setJSONState:e=>{i().editor?.setDocument("json",e)},setShowTypoBar:e=>{t({showTypoBar:e})},updateMarkdownContent:()=>{if(!i().onMarkdownContentChange)return;let e=i().getMarkdownContent();e!==i().markdownContent&&(i().onMarkdownContentChange?.(e),t({markdownContent:e}))}})),l.x),{useStore:d,useStoreApi:c,Provider:p}=(0,n.q)()},49460:(e,t,i)=>{i.d(t,{A:()=>R});var n=i(28802),o=i(15447),l=i(43588),r=i(58244),a=i(42507),s=i(31021),d=i.n(s),c=i(25777),p=i(29961),h=i(83034),u=i(59121),g=i(80457),m=i(49935),x=i(20549),b=i(45541),f=i(88990),y=i(17068),v=i(71171),Y=i(11439),k=i(72327),w=i(47621),A=i(42550),F=i(92912),C=i(53809),S=i(31985),T=i(11577),z=i(98085),D=i(63806),B=i(54759),M=i(35987),N=i(70474),$=i(86393);M.EA.workerSrc=`https://registry.npmmirror.com/pdfjs-dist/${M.rE}/files/build/pdf.worker.min.mjs`;let I=(0,T.rU)(({css:e})=>({containerWrapper:e`
    position: relative;
    width: 100%;
    height: 100%;
  `,documentLoading:e`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding: 20px;
  `,emptyState:e`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    color: #666;
  `,expandButton:e`
    position: absolute;
    z-index: 1000;
    inset-block-start: 20px;
    inset-inline-end: 20px;
  `,footerNavigation:e`
    position: absolute;
    z-index: 10;
    inset-block-end: 0;
    inset-inline: 0 0;

    padding: 12px;
    border-block-start: 1px solid rgba(0, 0, 0, 10%);

    background: rgba(255, 255, 255, 90%);
    backdrop-filter: blur(8px);
  `,fullscreenButton:e`
    border-color: white;
    color: white;
  `,fullscreenContent:e`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    min-height: 100%;
    padding: 20px;
  `,fullscreenModal:e`
    position: relative;
    overflow: auto;
    height: 90vh;
  `,fullscreenNavigation:e`
    position: fixed;
    z-index: 1001;
    inset-block-end: 20px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    padding-block: 12px;
    padding-inline: 20px;
    border-radius: 8px;

    background: rgba(0, 0, 0, 70%);
    backdrop-filter: blur(8px);
  `,fullscreenPageInput:e`
    width: 60px;
    text-align: center;
  `,fullscreenPageText:e`
    min-width: 20px;
    font-size: 14px;
    color: white;
  `,loadingState:e`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
  `,loadingText:e`
    margin-block-start: 8px;
    color: #666;
  `,pageInput:e`
    width: 50px;
    text-align: center;
  `,pageNumberText:e`
    font-size: 12px;
    color: #666;
  `,previewContainer:e`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 12px;
  `})),L=(0,h.memo)(({loading:e,pdfData:t,onGeneratePdf:i})=>{let{styles:l}=(0,w.H)(),{styles:r}=I(),{t:a}=(0,u.Bd)("chat"),s=(0,x.a)(),[d,p]=(0,h.useState)(0),[m,b]=(0,h.useState)(1),[f,y]=(0,h.useState)(!1),[v,Y]=(0,h.useState)(1),k=({numPages:e})=>{p(e),b(1)};if(e)return(0,n.Y)("div",{className:l.preview,style:{padding:12},children:(0,n.FD)("div",{className:r.loadingState,children:[(0,n.Y)(F.A,{indicator:(0,n.Y)(A.A,{spin:!0,style:{fontSize:24}})}),(0,n.Y)("div",{className:r.loadingText,children:a("shareModal.generatingPdf")})]})});if(!t)return(0,n.Y)("div",{className:l.preview,style:{padding:12},children:(0,n.Y)("div",{className:r.emptyState,children:(0,n.Y)(o.A,{icon:(0,n.Y)(c.A,{size:20}),onClick:i,size:"large",type:"primary",children:a("shareModal.generatePdf",{defaultValue:"生成 PDF"})})})});let T=`data:application/pdf;base64,${t}`;return(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:r.containerWrapper,children:[t&&(0,n.Y)(o.A,{className:r.expandButton,icon:(0,n.Y)(z.A,{size:16}),onClick:()=>{t&&(Y(m),y(!0))},size:"small",type:"text"}),(0,n.Y)("div",{className:`${l.preview} ${r.previewContainer}`,children:(0,n.Y)(N.A,{file:T,loading:(0,n.FD)("div",{className:r.documentLoading,children:[(0,n.Y)(F.A,{}),(0,n.Y)("div",{className:r.loadingText,children:a("shareModal.loadingPdf",{defaultValue:"Loading PDF..."})})]}),onLoadSuccess:k,children:(0,n.Y)($.A,{pageNumber:m,renderAnnotationLayer:!1,renderTextLayer:!1,width:s?300:400})})}),t&&d>1&&(0,n.Y)("div",{className:r.footerNavigation,children:(0,n.FD)(g.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"center",children:[(0,n.Y)(o.A,{disabled:m<=1,icon:(0,n.Y)(D.A,{size:16}),onClick:()=>{m>1&&b(m-1)},size:"small",type:"text"}),(0,n.FD)(g.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(C.A,{className:r.pageInput,max:d,min:1,onChange:e=>{let t=parseInt(e.target.value);!isNaN(t)&&t>=1&&t<=d&&b(t)},size:"small",type:"number",value:m}),(0,n.FD)("span",{className:r.pageNumberText,children:["/ ",d]})]}),(0,n.Y)(o.A,{disabled:m>=d,icon:(0,n.Y)(B.A,{size:16}),onClick:()=>{m<d&&b(m+1)},size:"small",type:"text"})]})})]}),(0,n.Y)(S.A,{centered:!0,footer:null,onCancel:()=>y(!1),open:f,styles:{body:{padding:0},content:{padding:0}},width:"95vw",children:(0,n.FD)("div",{className:r.fullscreenModal,children:[(0,n.Y)("div",{className:r.fullscreenContent,children:(0,n.Y)(N.A,{file:T,onLoadSuccess:k,children:(0,n.Y)($.A,{pageNumber:v,renderAnnotationLayer:!1,renderTextLayer:!1,width:Math.min(.8*window.innerWidth,1e3)})})}),d>1&&(0,n.Y)("div",{className:r.fullscreenNavigation,children:(0,n.FD)(g.Flexbox,{align:"center",gap:12,horizontal:!0,children:[(0,n.Y)(o.A,{className:r.fullscreenButton,disabled:v<=1,icon:(0,n.Y)(D.A,{size:16}),onClick:()=>{v>1&&Y(v-1)},size:"small",type:"text"}),(0,n.FD)(g.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,n.Y)(C.A,{className:r.fullscreenPageInput,max:d,min:1,onChange:e=>{let t=parseInt(e.target.value);!isNaN(t)&&t>=1&&t<=d&&Y(t)},size:"small",type:"number",value:v}),(0,n.FD)("span",{className:r.fullscreenPageText,children:["/ ",d]})]}),(0,n.Y)(o.A,{className:r.fullscreenButton,disabled:v>=d,icon:(0,n.Y)(B.A,{size:16}),onClick:()=>{v<d&&Y(v+1)},size:"small",type:"text"})]})})]})})]})});var P=i(77605);let E={includeTool:!0,includeUser:!0,withRole:!0,withSystemRole:!1},R=(0,h.memo)(e=>{let[t,i]=(0,h.useState)(E),{t:s}=(0,u.Bd)(["chat","common"]),{styles:A}=(0,w.I)(),{styles:F}=(0,w.H)(),{message:C}=r.A.useApp(),{message:S}=e,T=(0,x.a)(),z=[{children:(0,n.Y)(a.A,{}),label:s("shareModal.withSystemRole"),layout:"horizontal",minWidth:void 0,name:"withSystemRole",valuePropName:"checked"},{children:(0,n.Y)(a.A,{}),label:s("shareModal.withRole"),layout:"horizontal",minWidth:void 0,name:"withRole",valuePropName:"checked"},{children:(0,n.Y)(a.A,{}),label:s("shareModal.includeUser"),layout:"horizontal",minWidth:void 0,name:"includeUser",valuePropName:"checked"},{children:(0,n.Y)(a.A,{}),label:s("shareModal.includeTool"),layout:"horizontal",minWidth:void 0,name:"includeTool",valuePropName:"checked"}],[D]=(0,b.o)(e=>[f.e.currentAgentSystemRole(e)]),B=(0,y.L)(v.fA.activeBaseChats,d()),M=(0,y.L)(Y.e.currentActiveTopic,d()),N=(0,y.L)(e=>e.activeId),$=(0,y.L)(e=>e.activeTopicId),I=M?.title||s("shareModal.exportTitle"),{generatePdf:R,downloadPdf:U,pdfData:W,loading:j,error:_}=(()=>{let[e,t]=(0,h.useState)(null),[i,n]=(0,h.useState)("chat-export.pdf"),[o,l]=(0,h.useState)(null),[r,a]=(0,h.useState)(null),s=P.Qm.exporter.exportPdf.useMutation(),d=(0,h.useCallback)(async e=>{let{content:i,sessionId:o,title:d,topicId:c}=e,p=`${o}-${c||"default"}-${i.length}`;if(!s.isPending&&r!==p)try{l(null),t(null);let e=await s.mutateAsync({content:i,sessionId:o,title:d,topicId:c});t(e.pdf),n(e.filename),a(p)}catch(e){console.error("Failed to generate PDF:",e),l(e instanceof Error?e.message:"Failed to generate PDF")}},[s.mutateAsync,r]);return{downloadPdf:(0,h.useCallback)(async()=>{if(e)try{let t=atob(e),n=Array.from({length:t.length},(e,i)=>t.charCodeAt(i)),o=new Uint8Array(n),l=new Blob([o],{type:"application/pdf"}),r=URL.createObjectURL(l),a=document.createElement("a");a.href=r,a.download=i,document.body.append(a),a.click(),a.remove(),URL.revokeObjectURL(r)}catch(e){throw console.error("Failed to download PDF:",e),e}},[e,i]),error:o||(s.error?.message??null),generatePdf:d,loading:s.isPending,pdfData:e}})(),H=async()=>{if(N&&B.length>0){let e=(0,k.H)({...t,messages:S?[S]:B,systemRole:D,title:I}).replaceAll("\n\n\n","\n");e.trim()&&await R({content:e,sessionId:N,title:I,topicId:$||void 0})}},O=(e,t)=>{i(t)},K=async()=>{if(W)try{await U(),C.success(s("shareModal.downloadSuccess"))}catch{C.error(s("shareModal.downloadError"))}},G=(0,n.Y)(o.A,{block:!0,disabled:j,icon:j?void 0:c.A,loading:j,onClick:H,size:T?void 0:"large",type:"primary",children:j?s("shareModal.generatingPdf"):W?s("shareModal.regeneratePdf",{defaultValue:"重新生成 PDF"}):s("shareModal.generatePdf",{defaultValue:"生成 PDF"})}),V=W?(0,n.Y)(o.A,{block:!0,icon:p.A,onClick:K,size:T?void 0:"large",type:"default",children:s("shareModal.downloadPdf")}):null;return _?(0,n.FD)(g.Flexbox,{className:A.body,gap:16,horizontal:!T,children:[(0,n.Y)("div",{className:F.preview,style:{padding:12},children:(0,n.FD)("div",{style:{color:"red",textAlign:"center"},children:[s("shareModal.pdfGenerationError"),": ",_]})}),(0,n.FD)(g.Flexbox,{className:A.sidebar,gap:12,children:[(0,n.Y)("div",{children:s("shareModal.pdfErrorDescription")}),(0,n.Y)(l.Ay,{initialValues:E,items:z,itemsType:"flat",onValuesChange:O,...m.pC}),G]})]}):(0,n.FD)(g.Flexbox,{className:A.body,gap:16,horizontal:!T,children:[(0,n.Y)(L,{loading:j,onGeneratePdf:H,pdfData:W}),(0,n.FD)(g.Flexbox,{className:A.sidebar,gap:12,children:[(0,n.Y)(l.Ay,{initialValues:E,items:z,itemsType:"flat",onValuesChange:O,...m.pC}),W&&G,V]})]})})},50846:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(28802),o=i(11577),l=i(83034),r=i(80457);let a=(0,o.rU)(({css:e})=>({header:e`
    z-index: 10;
  `})),s=(0,l.memo)(({title:e,style:t,actions:i,onClick:o,...l})=>{let{styles:s}=a();return(0,n.FD)(r.Flexbox,{align:"center",className:s.header,distribution:"space-between",horizontal:!0,onClick:o,paddingBlock:14,paddingInline:16,style:t,...l,children:[(0,n.Y)(r.Flexbox,{align:"center",gap:4,horizontal:!0,width:"100%",children:e}),(0,n.Y)(r.Flexbox,{align:"center",gap:2,horizontal:!0,children:i})]})})},52851:(e,t,i)=>{i.d(t,{g:()=>a});var n=i(58244),o=i(96987),l=i(83034),r=i(26731);let a=({id:e="#preview",width:t}={})=>{let[i,a]=(0,l.useState)(!1),{message:s}=n.A.useApp();return{loading:i,onCopy:async()=>{a(!0);try{let i=await (0,r.VG)({id:e,imageType:r.yj.PNG,width:t}),n=await fetch(i).then(e=>e.blob());navigator.clipboard.write([new ClipboardItem({[n.type]:n})]),a(!1),s.success((0,o.t)("copySuccess",{defaultValue:"Copy Success",ns:"common"}))}catch(e){console.error("Failed to copy image",e),a(!1)}}}}},55632:(e,t,i)=>{i.d(t,{A:()=>p});var n=i(28802),o=i(8055),l=i(9274),r=i(11577),a=i(80201),s=i(83034),d=i(91568);let c=(0,r.rU)(({css:e,token:t})=>({deleteButton:e`
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
  `})),p=(0,s.memo)(({className:e,style:t,editable:i,alt:r,onRemove:s,url:p,loading:h,alwaysShowClose:u,preview:g})=>{let m=i?64:"100%",{styles:x,cx:b}=c(),{isSafari:f}=(0,d.V)();return(0,n.Y)(o.A,{actions:i&&(0,n.Y)(l.A,{className:x.deleteButton,glass:!0,icon:a.A,onClick:e=>{e.stopPropagation(),s?.()},size:"small"}),alt:r||"",alwaysShowActions:u,className:e,height:f?"auto":"100%",isLoading:h,preview:g,size:m,src:p,style:{height:f?"auto":"100%",width:"100%",...t},wrapperClassName:b(x.image,i&&x.editableImage)})})},57498:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(28802),o=i(11577),l=i(31021),r=i.n(l),a=i(83034),s=i(80457),d=i(49935),c=i(5930),p=i(31065);let h=(0,o.rU)(({css:e,token:t})=>({container:e`
    align-self: center;

    /* Leave some space for the minimap */
    padding-inline: 12px;
    transition: width 0.25s ${t.motionEaseInOut};
  `})),u=(0,a.memo)(({children:e,className:t,onChange:i,...o})=>{let{cx:l,styles:r}=h(),u=(0,c.o)(p.I.wideScreen);return(0,a.useEffect)(()=>{i?.()},[u]),(0,n.Y)(s.Flexbox,{width:"100%",children:(0,n.Y)(s.Flexbox,{className:l(r.container,t),width:u?"100%":`min(${d.iL}px, 100%)`,...o,children:e})})},r())},57763:(e,t,i)=>{i.d(t,{F:()=>d});var n=i(83034),o=i(27697),l=i(20549),r=i(45541),a=i(78397),s=i(64811);let d=(e=a.iL.Meta)=>{let t=(0,s.B)(e=>e.activeId),i=(0,l.a)(),d=(0,o.Zp)(),c=(0,o.zy)();return(0,n.useMemo)(()=>i?()=>d(`/chat/settings?session=${t}&showMobileWorkspace=true`):()=>{r.o.setState({showAgentSetting:!0})},[t,d,c.pathname,e,i])}},58043:(e,t,i)=>{i.d(t,{A:()=>A});var n=i(28802),o=i(15447),l=i(69033),r=i(37412),a=i(47762),s=i(75431),d=i(89098),c=i(87508),p=i(36475),h=i(75589),u=i(83034),g=i(59121),m=i(80457),x=i(20549),b=i(17068),f=i(44230),y=i(25429),v=i(42291),Y=i(11577);let k=(0,u.memo)(({category:e})=>{let t=(0,Y.DP)(),i=y.QG[e];return(0,n.Y)(v.A,{alt:e,icon:(0,n.Y)(i,{}),style:{backgroundColor:"transparent",color:t.colorTextSecondary,height:16,width:16}})});var w=i(43610);let A=(0,u.memo)(({defaultCategories:e=[],defaultEngines:t=[],defaultTimeRange:i,aiSummary:v=!0,defaultQuery:Y,tooltip:A=!0,searchAddon:F,onSearch:C,messageId:S})=>{let{t:T}=(0,g.Bd)("tool"),z=(0,b.L)(f.j.isSearXNGSearching(S)),[D,B]=(0,u.useState)(Y),[M,N]=(0,u.useState)(e),[$,I]=(0,u.useState)(t),[L,P]=(0,u.useState)(i),E=(0,x.a)(),[R]=(0,b.L)(e=>[e.triggerSearchAgain]),U=async()=>{let e={query:D,searchCategories:M,searchEngines:$,searchTimeRange:L};C?.(e),await R(S,e,{aiSummary:v})},W=(0,n.Y)(o.A,{icon:h.A,loading:z,onClick:U,type:"primary",children:E?void 0:T("search.searchBar.button")});return(0,n.FD)(m.Flexbox,{gap:16,children:[(0,n.FD)(m.Flexbox,{align:"center",flex:1,gap:8,height:32,horizontal:!0,children:[(0,n.FD)(d.A.Compact,{style:{width:"100%"},children:[(0,n.Y)(l.A,{autoFocus:!0,onChange:e=>{B(e.target.value)},onPressEnter:U,placeholder:T("search.searchBar.placeholder"),style:{minWidth:E?void 0:400},value:D,variant:"filled"}),A?(0,n.Y)(r.A,{title:T("search.searchBar.tooltip"),children:W}):W]}),F]}),E?(0,n.Y)(a.A,{mode:"multiple",onChange:e=>{I(e)},optionRender:e=>(0,n.FD)(m.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,n.Y)(w.c,{engine:e.value}),e.value]}),options:Object.keys(y.Ks).map(e=>({label:(0,n.Y)(m.Flexbox,{align:"center",gap:8,horizontal:!0,children:(0,n.Y)(w.c,{engine:e})}),value:e})),placeholder:T("search.searchEngine.placeholder"),size:"small",value:$,variant:"filled"}):(0,n.FD)(m.Flexbox,{align:"flex-start",gap:8,horizontal:!0,children:[(0,n.Y)(s.A,{style:{marginTop:2,wordBreak:"keep-all"},type:"secondary",children:T("search.searchEngine.title")}),(0,n.Y)(c.A.Group,{onChange:e=>{I(e)},options:Object.keys(y.Ks).map(e=>({label:(0,n.FD)(m.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,n.Y)(w.c,{engine:e}),e]}),value:e})),value:$})]}),E?(0,n.Y)(a.A,{mode:"multiple",onChange:e=>{N(e)},optionRender:e=>(0,n.FD)(m.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,n.Y)(k,{category:e.value}),T(`search.searchCategory.value.${e.value}`)]}),options:Object.keys(y.QG).map(e=>({label:(0,n.FD)(m.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,n.Y)(k,{category:e}),T(`search.searchCategory.value.${e}`)]}),value:e})),placeholder:T("search.searchCategory.placeholder"),size:"small",value:M,variant:"filled"}):(0,n.FD)(m.Flexbox,{align:"flex-start",gap:8,horizontal:!0,children:[(0,n.Y)(s.A,{style:{marginTop:2,wordBreak:"keep-all"},type:"secondary",children:T("search.searchCategory.title")}),(0,n.Y)(c.A.Group,{onChange:e=>N(e),options:Object.keys(y.QG).map(e=>({label:(0,n.FD)(m.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,n.Y)(k,{category:e}),T(`search.searchCategory.value.${e}`)]}),value:e})),value:M})]}),(0,n.FD)(m.Flexbox,{align:"center",gap:16,horizontal:!0,wrap:"wrap",children:[(0,n.Y)(s.A,{type:"secondary",children:T("search.searchTimeRange.title")}),(0,n.Y)(p.Ay.Group,{onChange:e=>P(e.target.value),optionType:"button",options:[{label:T("search.searchTimeRange.value.anytime"),value:"anytime"},{label:T("search.searchTimeRange.value.day"),value:"day"},{label:T("search.searchTimeRange.value.week"),value:"week"},{label:T("search.searchTimeRange.value.month"),value:"month"},{label:T("search.searchTimeRange.value.year"),value:"year"}],value:L})]})]})})},58073:(e,t,i)=>{i.d(t,{e:()=>o});var n=i(74551);let o={enableGroupChat:e=>e.preference.lab?.enableGroupChat??n.I4.lab.enableGroupChat,enableInputMarkdown:e=>e.preference.lab?.enableInputMarkdown??n.I4.lab.enableInputMarkdown}},60540:(e,t,i)=>{i.d(t,{A:()=>f,x:()=>b});var n=i(28802),o=i(37412),l=i(9274),r=i(85040),a=i(20964),s=i(83034),d=i(59121),c=i(49935),p=i(20108),h=i(5930),u=i(31065),g=i(38759),m=i(42897),x=i(23047);let b="toggle-panel-button",f=(0,s.memo)(()=>{let e=(0,p.f)(),t=(0,g.k)(m.w0.getHotkeyById(x.g8.ToggleLeftPanel)),{t:i}=(0,d.Bd)(["chat","hotkey"]),s=(0,h.o)(u.I.showSessionPanel),f=(0,h.o)(e=>e.updateSystemStatus);return e?null:(0,n.Y)(o.A,{hotkey:t,title:i("toggleLeftPanel.title",{ns:"hotkey"}),children:(0,n.Y)(l.A,{icon:s?r.A:a.A,id:b,onClick:()=>{f({sessionsWidth:320*!s,showSessionPanel:!s})},size:c.R4})})})},63186:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(28802),o=i(83034),l=i(20480),r=i(83838),a=i(37546),s=i(80501);let d=(0,o.memo)(({type:e,size:t,fileType:i,name:o})=>{let d=("object"==typeof t?t.repo:t)||24,c=("object"==typeof t?t.file:t)||24;return e===s.z.KnowledgeBase?(0,n.Y)(l.default,{height:d,width:d,children:(0,n.Y)(a.A,{size:d/1.2})}):(0,n.Y)(r.A,{fileName:o,fileType:i,size:c})})},63652:(e,t,i)=>{i.r(t),i.d(t,{DesktopChatPage:()=>iz,MobileChatPage:()=>iT});var n=i(28802),o=i(83034),l=i(80457),r=i(73166),a=i(17068),s=i(91804),d=i(5930),c=i(31065),p=i(64811),h=i(62016);let u=(0,o.memo)(()=>{let{analytics:e}=(0,r.st)(),t=(0,o.useCallback)(()=>{let e=h.z.currentSession((0,p.L)()),t=e?.id,i=h.z.defaultSessions((0,p.L)()),n=c.I.showChatSideBar(d.o.getState()),o=s._1.activeDisplayMessages((0,a.b)());return{active_assistant:"inbox"===t?null:e?.meta?.title||null,has_chat_history:o.length>0,session_id:t||"inbox",sidebar_state:n?"expanded":"collapsed",visible_assistants_count:i.length}},[]);return(0,o.useEffect)(()=>{if(!e)return;let i=setTimeout(()=>{e.track({name:"main_page_view",properties:{...t(),spm:"main_page.interface.view"}})},1e3);return()=>clearTimeout(i)},[e,t]),null});u.displayName="MainInterfaceTracker";var g=i(92565),m=i(42379),x=i(30488),b=i(9274),f=i(95108),y=i(52212),v=i(66643),Y=i(53293),k=i(59121),w=i(49935),A=i(62326),F=i(12467),C=i(38759),S=i(42897),T=i(23047),z=i(70727),D=i(33375),B=i(57763),M=i(50243);let N=(0,D.default)(()=>Promise.all([i.e(50340),i.e(41952),i.e(75927),i.e(40371),i.e(13441),i.e(38141),i.e(2460),i.e(78199),i.e(62680),i.e(57021),i.e(65819),i.e(7120),i.e(37884)]).then(i.bind(i,37884)),{loadableGenerated:{webpack:()=>[37884]},ssr:!1}),$=(0,D.default)(()=>i.e(21074).then(i.bind(i,21074)),{loadableGenerated:{webpack:()=>[21074]},ssr:!1}),I=(0,o.memo)(({mobile:e})=>{let t=(0,C.k)(S.w0.getHotkeyById(T.g8.OpenChatSettings)),{t:i}=(0,k.Bd)("common"),o=(0,p.B)(e=>e.activeId),l=(0,p.B)(h.z.isCurrentSessionGroupSession),r=(0,B.F)(),a=(0,M.u)(e=>e.toggleGroupSetting);return(0,n.FD)(n.FK,{children:[(0,n.Y)(b.A,{icon:z.A,onClick:()=>l?a(!0):r(),size:e?w.Jo:w.R4,title:i("openChatSettings.title",{ns:"hotkey"}),tooltipProps:{hotkey:t,placement:"bottom"}}),l?(0,n.Y)($,{},o):(0,n.Y)(N,{},o)]})});var L=i(3675),P=i(63639),E=i(11345);let R=(e,t)=>{let i=(0,A.wo)(e=>e.isMobile),n=(0,E.e)(),[l,r]=(0,P.A)(!1,{defaultValue:!1,onChange:t,value:e});return(0,o.useEffect)(()=>{i&&(n||r(!1))},[i,n]),[l,r]},U=(0,D.default)(()=>i.e(55269).then(i.bind(i,55269)),{loadableGenerated:{webpack:()=>[55269]}}),W=(0,o.memo)(({mobile:e,setOpen:t,open:i})=>{let[o,l]=R(i,t),{t:r}=(0,k.Bd)("common");return(0,n.FD)(n.FK,{children:[(0,n.Y)(b.A,{icon:L.A,onClick:()=>l(!0),size:e?w.Jo:w.R4,title:r("share"),tooltipProps:{placement:"bottom"}}),(0,n.Y)(U,{onCancel:()=>l(!1),open:o})]})}),j=(0,o.memo)(({className:e})=>{let{t}=(0,k.Bd)("chat"),i=(0,C.k)(S.w0.getHotkeyById(T.g8.ToggleRightPanel)),[o,r,a,s]=(0,d.o)(e=>[c.I.showChatSideBar(e),c.I.wideScreen(e),e.toggleChatSideBar,e.toggleWideScreen]),{isAgentEditable:p}=(0,A.wo)(F.E);return(0,n.FD)(l.Flexbox,{className:e,gap:4,horizontal:!0,children:[(0,n.Y)(b.A,{icon:r?f.A:y.A,onClick:()=>s(),size:w.R4,title:t(r?"toggleWideScreen.off":"toggleWideScreen.on"),tooltipProps:{placement:"bottom"}}),(0,n.Y)(W,{}),(0,n.Y)(b.A,{icon:o?v.A:Y.A,onClick:()=>a(),size:w.R4,title:t("toggleRightPanel.title",{ns:"hotkey"}),tooltipProps:{hotkey:i,placement:"bottom"}}),p&&(0,n.Y)(I,{})]})});var _=i(16385),H=i(67072),O=i(59202),K=i(11577),G=i(99278),V=i(32092),Q=i(38991),q=i(17869),J=i(61520),Z=i(60540),X=i(15095),ee=i(31021),et=i.n(ee),ei=i(66209),en=i(22880),eo=i(17291),el=i(82668),er=i(45541),ea=i(88990),es=i(82964),ed=i(37412),ec=i(3136),ep=i(12389),eh=i(81331);let eu=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("chat"),t=(0,er.o)(es.c.historyCount);return(0,n.Y)(ed.A,{title:e("history.title",{count:t}),children:(0,n.Y)(l.Flexbox,{height:22,children:(0,n.FD)(ec.A,{children:[(0,n.Y)(ep.default,{icon:eh.A}),(0,n.Y)("span",{children:t})]})})})});var eg=i(38153),em=i(4755),ex=i(63186),eb=i(7535);let ef=(0,o.memo)(({data:e})=>{if(0===e.length)return null;let t=e.map(e=>({icon:(0,n.Y)(ex.A,{fileType:e.fileType,name:e.name,type:e.type}),key:e.id,label:(0,n.Y)(l.Flexbox,{style:{paddingInlineStart:8},children:e.name})})),i=e.length;return(0,n.Y)(eg.A,{menu:{items:t},children:(0,n.Y)("div",{children:(0,n.FD)(ec.A,{children:[(0,n.Y)(ep.default,{icon:em.A}),(0,n.Y)("div",{className:eb.S,style:{maxWidth:140},children:e[0].name}),i>1&&(0,n.FD)("div",{children:["(",e.length-1,"+)"]})]})})})});var ey=i(88967);let ev=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("chat"),t=(0,p.B)(h.z.currentSession),i=t.members?.length??1;return i<0?null:(0,n.Y)(ed.A,{title:e("group.memberTooltip",{count:i}),children:(0,n.Y)(l.Flexbox,{height:22,children:(0,n.FD)(ec.A,{children:[(0,n.Y)(ep.default,{icon:ey.A}),(0,n.Y)("span",{children:i})]})})})});var eY=i(62874);let ek=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("chat");return(0,n.Y)(l.Flexbox,{height:22,children:(0,n.FD)(ec.A,{children:[(0,n.Y)(ep.default,{icon:eY.A}),(0,n.Y)("div",{children:e("search.title")})]})})}),ew=(0,o.memo)(()=>{let[e,t,i,o]=(0,er.o)(e=>[ea.e.currentAgentModel(e),ea.e.currentAgentModelProvider(e),ea.e.hasKnowledge(e),ea.e.isAgentConfigLoading(e)]),r=(0,er.o)(ea.e.displayableAgentPlugins,et()),a=(0,er.o)(ea.e.currentEnabledKnowledge,et()),s=(0,er.o)(es.c.enableHistoryCount),d=(0,el.L)(e,t),c=(0,C.k)(J.P.isLogin),u=(0,p.B)(h.z.isCurrentSessionGroupSession),g=(0,eo.y)();return u?(0,n.Y)(l.Flexbox,{align:"center",gap:12,horizontal:!0,children:(0,n.Y)(ev,{})}):o&&c?(0,n.Y)(O.A.Button,{active:!0,size:"small",style:{height:20}}):(0,n.FD)(l.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(ei.A,{children:(0,n.Y)(X.A,{model:e})}),g&&(0,n.Y)(ek,{}),d&&r?.length>0&&(0,n.Y)(en.A,{plugins:r}),i&&(0,n.Y)(ef,{data:a}),s&&(0,n.Y)(eu,{})]})}),eA=(0,K.rU)(({css:e})=>({container:e`
    position: relative;
    overflow: hidden;
    flex: 1;
    max-width: 100%;
  `,tag:e`
    flex: none;
    align-items: baseline;
  `,title:e`
    overflow: hidden;

    font-size: 14px;
    font-weight: bold;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),eF=(0,o.memo)(({className:e})=>{let{t}=(0,k.Bd)(["chat","hotkey"]),{styles:i}=eA();(0,V.H)();let[o]=(0,Q.W)(),[r,a,s,u,g,m,x]=(0,p.B)(e=>{let t=h.z.currentSession(e);return[h.z.isSomeSessionActive(e),h.z.isInboxSession(e),q.G.currentAgentTitle(e),q.G.currentAgentAvatar(e),q.G.currentAgentBackgroundColor(e),t?.type==="group"?t.members:void 0,t?.type]}),b=(0,C.k)(e=>({avatar:J.f.userAvatar(e),name:J.f.displayUserName(e)||J.f.nickName(e)||"You"})),f=(0,B.F)(),y=a?t("inbox.title"):s,v=(0,d.o)(c.I.showSessionPanel);return r?"group"===x?(0,n.FD)(l.Flexbox,{align:"center",className:e,gap:12,horizontal:!0,children:[!o&&!v&&(0,n.Y)(Z.A,{}),(0,n.Y)(_.A,{avatars:[{avatar:b.avatar||G.k_},...m?.map(e=>({avatar:e.avatar||G.k_,background:e.backgroundColor||void 0}))||[]],onClick:()=>f(),size:32,title:s}),(0,n.FD)(l.Flexbox,{align:"center",className:i.container,gap:8,horizontal:!0,children:[(0,n.Y)("div",{className:i.title,children:y}),(0,n.Y)(ew,{})]})]}):(0,n.FD)(l.Flexbox,{align:"center",className:e,gap:12,horizontal:!0,children:[!o&&!v&&(0,n.Y)(Z.A,{}),(0,n.Y)(H.A,{avatar:u,background:g,onClick:()=>f(),size:32,title:s}),(0,n.FD)(l.Flexbox,{align:"center",className:i.container,gap:8,horizontal:!0,children:[(0,n.Y)("div",{className:i.title,children:y}),(0,n.Y)(ew,{})]})]}):(0,n.FD)(l.Flexbox,{align:"center",className:e,gap:8,horizontal:!0,children:[!o&&!v&&(0,n.Y)(Z.A,{}),(0,n.Y)(O.A,{active:!0,avatar:{shape:"circle",size:28},paragraph:!1,title:{style:{margin:0,marginTop:4},width:200}})]})}),eC=(0,o.memo)(({className:e})=>(0,n.Y)(o.Suspense,{fallback:(0,n.Y)(O.A,{active:!0,avatar:{shape:"circle",size:"default"},paragraph:!1,title:{style:{margin:0,marginTop:8},width:200}}),children:(0,n.Y)(eF,{className:e})})),eS=()=>(0,d.o)(c.I.showChatHeader)&&(0,n.Y)(x.A,{left:(0,n.Y)(eC,{}),right:(0,n.Y)(j,{}),style:{height:40,maxHeight:40,minHeight:40,paddingInline:8,position:"initial",zIndex:11}});var eT=i(83606),ez=i(34367),eD=i(14654),eB=i(72569),eM=i(22190);let eN=(0,K.rU)(({css:e,token:t})=>({content:e`
    display: flex;
    flex-direction: column;
    height: 100% !important;
  `,drawer:e`
    z-index: 10;
    height: 100%;
    background: ${t.colorBgLayout};
  `,panel:e`
    overflow: hidden;
    height: 100%;
    background: ${t.colorBgContainerSecondary};
  `})),e$=(0,o.memo)(({children:e})=>{let{styles:t}=eN(),{md:i=!0}=(0,eD.Q)(),[r,s,p,h]=(0,a.L)(e=>[eB.D.showPortal(e),eB.D.showPluginUI(e),eB.D.showArtifactUI(e),eM.v.showThread(e)]),[u,g]=(0,d.o)(e=>[c.I.portalWidth(e),e.updateSystemStatus]),[m,x]=(0,o.useState)(u);return m!==u&&x(u),(0,n.Y)(eT.Ay,{className:t.drawer,classNames:{content:t.content},defaultSize:{width:m},expand:r,maxWidth:w.Q7,minWidth:(p||s||h)&&i?w.ZT:w.$f,mode:i?"fixed":"float",onSizeChange:(e,t)=>{if(!t)return;let i="string"==typeof t.width?Number.parseInt(t.width):t.width;!i||et()(i,u)||(x(i),g({portalWidth:i}))},placement:"right",showHandleWhenCollapsed:!1,showHandleWideArea:!1,size:{height:"100%",width:u},styles:{handle:{display:"none"}},children:(0,n.Y)(ez.A,{style:{flex:"none",height:"100%",maxHeight:"100vh",minWidth:w.$f},children:(0,n.Y)(l.Flexbox,{className:t.panel,children:e})})})}),eI=(0,K.rU)(({css:e,token:t})=>({content:e`
    display: flex;
    flex-direction: column;
    height: 100% !important;
  `,drawer:e`
    z-index: 20;
    background: ${t.colorBgContainerSecondary};
  `,header:e`
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `})),eL=(0,o.memo)(({children:e})=>{let{styles:t}=eI(),{md:i=!0,lg:l=!0}=(0,eD.Q)(),[r,s]=(0,d.o)(e=>[c.I.showChatSideBar(e),e.toggleChatSideBar]),p=(0,a.L)(eB.D.showPortal),[h,u]=(0,o.useState)(!!r);return(0,o.useEffect)(()=>{l&&h&&s(!0),l||s(!1)},[l,h]),(0,n.Y)(eT.Ay,{className:t.drawer,classNames:{content:t.content},expand:r&&!p,minWidth:w.BR,mode:i?"fixed":"float",onExpandChange:e=>{et()(e,!!r)||(s(e),u(e))},placement:"right",showHandleWhenCollapsed:!1,showHandleWideArea:!1,styles:{handle:{display:"none"}},children:(0,n.Y)(ez.A,{style:{flex:"none",height:"100%",maxHeight:"100vh",minWidth:w.BR},children:e})})});var eP=i(33145),eE=i(35245),eR=i(62894),eU=i(20439),eW=i(11439);let ej=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)(["chat","topic"]),t=(0,d.o)(e=>e.toggleMobileTopic),[i,o]=(0,a.L)(e=>[eW.e.currentTopicLength(e),eW.e.currentActiveTopic(e)]),[r,s]=(0,p.B)(e=>[h.z.isInboxSession(e),q.G.currentAgentTitle(e)]),c=(0,K.DP)(),u=r?e("inbox.title"):s;return(0,n.Y)(eP.A.Title,{desc:(0,n.FD)(l.Flexbox,{align:"center",gap:4,horizontal:!0,onClick:()=>t(),children:[(0,n.Y)("span",{style:{maxWidth:"60vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o?.title||e("title",{ns:"topic"})}),(0,n.Y)(b.A,{active:!0,icon:eU.A,size:{blockSize:14,borderRadius:"50%",size:12},style:{background:c.colorFillSecondary,color:c.colorTextDescription}})]}),title:(0,n.FD)("div",{onClick:()=>t(),style:{marginRight:"8px",maxWidth:"64vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[u,i>1?`(${i+1})`:""]})})}),e_=(0,o.memo)(()=>{let e=(0,eR.j)(),[t,i]=(0,o.useState)(!1),{isAgentEditable:l}=(0,A.wo)(F.E);return(0,n.Y)(eP.A,{center:(0,n.Y)(ej,{}),onBackClick:()=>e.push("/chat",{query:{session:eE.Ed},replace:!0}),right:(0,n.FD)(n.FK,{children:[(0,n.Y)(W,{mobile:!0,open:t,setOpen:i}),l&&(0,n.Y)(I,{mobile:!0})]}),showBackButton:!0,style:{width:"100%"}})});var eH=i(29703);let eO=()=>{let[e]=(0,p.B)(e=>[e.activeId]);(0,a.L)(e=>e.useFetchTopics)(!0,e)},eK=(0,o.memo)(({children:e})=>{let[t,i]=(0,d.o)(e=>[c.I.mobileShowTopic(e),e.toggleMobileTopic]),[o,l]=R(t,i),{t:r}=(0,k.Bd)("topic");return eO(),(0,n.Y)(eH.A,{allowFullscreen:!0,footer:null,onCancel:()=>l(!1),open:o,styles:{body:{padding:0}},title:r("title"),children:e})});var eG=i(81088),eV=i(38858);let eQ=(0,o.memo)(()=>{let e=(0,eG.H)(a.L),[t,i]=(0,eV.ZA)("topic",{history:"replace",throttleMs:500}),[n,l]=(0,eV.ZA)("thread",{history:"replace",throttleMs:500});return e("activeTopicId",t),e("activeThreadId",n),(0,o.useLayoutEffect)(()=>{let e=a.L.subscribe(e=>e.activeTopicId,e=>{i(e||null)}),t=a.L.subscribe(e=>e.activeThreadId,e=>{l(e||null)});return()=>{e(),t()}},[i,l]),null});var eq=i(72609),eJ=i(85122);let eZ=(0,o.lazy)(()=>i.e(36768).then(i.bind(i,36768))),eX=({mobile:e})=>(0,n.Y)(l.Flexbox,{flex:1,style:{overflowX:"hidden",overflowY:"auto",position:"relative"},width:"100%",children:(0,n.Y)(o.Suspense,{fallback:(0,n.Y)(eJ.A,{mobile:e}),children:(0,n.Y)(eZ,{mobile:e})})});var e0=i(27498),e1=i(67693),e2=i(68096),e8=i.n(e2),e4=i(70510),e3=i(73102),e6=i(23935);let e5=e8()("lobe-react:chat-minimap"),e7=(0,K.rU)(({css:e,token:t})=>({arrow:e`
    cursor: pointer;

    transform: translateX(4px);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: 6px;

    color: ${t.colorTextTertiary};

    opacity: 0;
    background: none;

    transition: opacity 0.2s ease;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${t.colorPrimaryBorder};
    }
  `,arrowVisible:e`
    opacity: 1;
  `,container:e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset-block: 16px 120px;
    inset-inline-end: 8px;

    width: 32px;
  `,indicator:e`
    cursor: pointer;

    flex-shrink: 0;

    min-width: ${16}px;
    height: 12px;
    padding-block: 4px;
    padding-inline: 4px;
    border: none;
    border-radius: 3px;

    background: none;

    transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: scaleX(1.05);
      background: ${t.colorFill};
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${t.colorPrimaryBorder};
    }
  `,indicatorActive:e`
    transform: scaleX(1.1);
    background: ${t.colorPrimary};
    box-shadow: 0 0 0 1px ${t.colorPrimaryHover};
  `,indicatorContent:e`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: ${t.colorFillSecondary};
  `,indicatorContentActive:e`
    background: ${t.colorPrimary};
  `,popoverContent:e`
    max-width: 300px;
  `,popoverLabel:e`
    margin-block-end: 4px;
    font-size: 12px;
    font-weight: 600;
    color: ${t.colorTextSecondary};
  `,popoverText:e`
    color: ${t.colorText};
    word-break: break-word;
  `,rail:e`
    pointer-events: auto;

    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;
    justify-content: space-between;

    width: 100%;
    height: fit-content;
    margin-block: 0;
    margin-inline: auto;

    &:hover .arrow {
      opacity: 1;
    }
  `,railContent:e`
    scrollbar-width: none;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;
    justify-content: space-between;

    max-height: round(down, 50vh, 12px);

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  `})),e9=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("chat"),{styles:t,cx:i}=e7(),[r,d]=(0,o.useState)(!1),c=(0,o.useSyncExternalStore)(e6.OJ,e6.ou,()=>null),p=(0,o.useSyncExternalStore)(e6.on,e6.wZ,()=>null),h=(0,a.L)(s._1.mainAIChats,et()),u=(0,K.DP)(),g=(0,o.useMemo)(()=>h.reduce((e,t,i)=>{var n;return"user"!==t.role&&"assistant"!==t.role?e:(e.push({id:t.id,preview:(e=>{if(!e)return"";let t=(0,e3.v0)(e).replaceAll(/\s+/g," ").trim();return t?t.slice(0,100)+(t.length>100?"…":""):""})(t.content),role:t.role,virtuosoIndex:i,width:(n=t.content)?16+14*Math.min(n.length/320,1):16}),e)},[]),[h]),m=(0,o.useMemo)(()=>{let e=new Map;return g.forEach(({virtuosoIndex:t},i)=>{e.set(t,i)}),e},[g]),x=(0,o.useMemo)(()=>null===p?null:(e5("> activeIndex",p),e5("> indicatorIndexMap",m),m.get(p)??null),[p,m]),b=(0,o.useCallback)(e=>{c?.current?.scrollToIndex(e,{align:"start",offset:6,smooth:!0})},[c]),f=(0,o.useCallback)(e=>{let t,i=c?.current;if(!i||0===g.length)return;if(null!==x)e5("activeIndicatorPosition",x),t=Math.min(Math.max(x+("prev"===e?-1:1),0),Math.max(g.length-1,0));else if(null!==p)if("prev"===e){let e=-1;for(let t=g.length-1;t>=0;t-=1)if(g[t].virtuosoIndex<p){e=t;break}t=-1===e?0:e}else{let e=g.length-1;for(let[t,i]of g.entries())if(i.virtuosoIndex>p){e=t;break}t=e}else t="prev"===e?g.length-1:0;let n=g[t];n&&i.scrollToIndex(n.virtuosoIndex,{align:"start",offset:6,smooth:!0})},[p,x,g,c]);return g.length<=3?null:(0,n.Y)(l.Flexbox,{align:"center",className:t.container,justify:"center",children:(0,n.FD)(l.Flexbox,{className:t.rail,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),role:"group",children:[(0,n.Y)(e0.A,{mouseEnterDelay:.1,placement:"left",title:e("minimap.previousMessage"),children:(0,n.Y)("button",{"aria-label":e("minimap.previousMessage"),className:i(t.arrow,r&&t.arrowVisible),onClick:()=>f("prev"),type:"button",children:(0,n.Y)(ep.default,{color:u.colorTextTertiary,icon:e4.A,size:16})})}),(0,n.Y)(l.Flexbox,{className:t.railContent,children:g.map(({id:o,width:l,preview:r,role:a,virtuosoIndex:s},d)=>{let c=x===d,p="user"===a?e("minimap.senderUser"):e("minimap.senderAssistant"),h=r?(0,n.FD)("div",{className:t.popoverContent,children:[(0,n.Y)("div",{className:t.popoverLabel,children:p}),(0,n.Y)("div",{className:t.popoverText,children:r})]}):void 0;return(0,n.Y)(e1.A,{content:h,mouseEnterDelay:.1,placement:"left",children:(0,n.Y)("button",{"aria-current":c?"true":void 0,"aria-label":e("minimap.jumpToMessage",{index:d+1}),className:t.indicator,onClick:()=>b(s),style:{width:l},type:"button",children:(0,n.Y)("div",{className:i(t.indicatorContent,c&&t.indicatorContentActive)})})},o)})}),(0,n.Y)(e0.A,{mouseEnterDelay:.1,placement:"left",title:e("minimap.nextMessage"),children:(0,n.Y)("button",{"aria-label":e("minimap.nextMessage"),className:i(t.arrow,r&&t.arrowVisible),onClick:()=>f("next"),type:"button",children:(0,n.Y)(ep.default,{icon:eU.A,size:16})})})]})})});var te=i(83594);let tt=(0,o.memo)(()=>{let e=(0,eG.H)(a.L),[t,i]=(0,eV.ZA)("portalThread");e("portalThreadId",t),(0,o.useLayoutEffect)(()=>{let e=a.L.subscribe(e=>e.portalThreadId,e=>{i(e||null)});return()=>{e()}},[i]),(0,o.useEffect)(()=>{t&&!a.L.getState().showPortal&&a.L.getState().togglePortal(!0)},[t]);let n=(0,a.L)(e=>e.activeTopicId);return(0,te.j)(n),null});var ti=i(27752);let tn=(0,K.rU)(({css:e,token:t})=>({closeButton:e`
    color: ${t.colorTextSecondary};
    transition: color 0.2s;

    &:hover {
      color: ${t.colorTextQuaternary};
    }
  `,container:e`
    position: fixed;
    z-index: 50;
    inset-block-start: 16px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    animation: fade-in-slide-down 300ms ease;

    @keyframes fade-in-slide-down {
      from {
        transform: translate(-50%, -16px);
        opacity: 0;
      }

      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  `,text:e`
    font-size: 16px;
    font-weight: 500;
    color: ${t.colorBgBase};
  `,toast:e`
    display: flex;
    align-items: center;

    padding-block: 8px;
    padding-inline: 24px;
    border-radius: 9999px;

    background: ${t.colorText};
    box-shadow: ${t.boxShadowSecondary};
  `})),to=()=>{let{t:e}=(0,k.Bd)("chat"),{styles:t}=tn(),[i,r]=(0,o.useState)(!0),a=(0,C.k)(S.w0.getHotkeyById(T.g8.ToggleZenMode));return((0,o.useEffect)(()=>{let e=setTimeout(()=>{r(!1)},2e3);return()=>clearTimeout(e)},[]),i)?(0,n.Y)("div",{className:t.container,children:(0,n.Y)("div",{className:t.toast,children:(0,n.FD)(l.Flexbox,{align:"center",className:t.text,gap:8,horizontal:!0,children:[e("zenMode")," ",(0,n.Y)(ti.A,{inverseTheme:!0,keys:a})]})})}):null},tl=(0,o.memo)(()=>(0,d.o)(c.I.inZenMode)&&(0,n.Y)(to,{})),tr=(0,o.memo)(({mobile:e=!1})=>(0,n.FD)(n.FK,{children:[(0,n.Y)(tl,{}),(0,n.Y)(eX,{mobile:e}),(0,n.Y)(eq.A,{mobile:e}),(0,n.Y)(eQ,{}),(0,n.Y)(tt,{}),!e&&(0,n.Y)(e9,{})]}));tr.displayName="ConversationArea";var ta=i(36237);let ts=(0,K.AH)`
  :has(.portal-artifact) {
    overflow: hidden;
    padding-block-end: 12px;
  }
`,td=({children:e})=>(0,n.Y)(l.Flexbox,{className:(0,K.cx)(ts,"portal-body"),height:"100%",style:{flex:1,height:0,position:"relative"},width:"100%",children:e}),tc=({children:e})=>(0,n.FD)(n.FK,{children:[(0,n.Y)(ta.PortalHeader,{}),(0,n.Y)(td,{children:e})]}),tp=(0,K.rU)(({css:e,token:t})=>({container:e`
    background: linear-gradient(${t.colorBgElevated}, ${t.colorBgLayout}) !important;
  `})),th=({children:e})=>{let{styles:t,cx:i}=tp(),[o,r,s]=(0,a.L)(e=>[e.showPortal,!!e.portalThreadId,e.togglePortal]),{t:d}=(0,k.Bd)("portal");return(0,n.FD)(eH.A,{allowFullscreen:!0,className:i(r&&t.container),footer:null,height:"95%",onCancel:()=>s(!1),open:o,styles:{body:{padding:0},header:{display:"none"}},title:d("title"),children:[(0,n.Y)(ta.PortalHeader,{}),(0,n.Y)(l.Flexbox,{gap:8,height:"calc(100% - 52px)",padding:"0 8px",style:{overflow:"hidden"},children:(0,n.Y)(l.Flexbox,{height:"100%",style:{marginInline:-8,overflow:"hidden",position:"relative"},width:"calc(100% + 16px)",children:e})})]})},tu=(0,o.lazy)(()=>Promise.resolve().then(i.bind(i,36237))),tg=(0,o.memo)(({mobile:e})=>(0,n.Y)(o.Suspense,{fallback:(0,n.Y)(g.A,{}),children:(0,n.Y)(e?th:tc,{children:(0,n.Y)(tu,{})})}));tg.displayName="PortalPanel";let tm=({children:e})=>(0,n.Y)(l.Flexbox,{height:"100%",style:{overflow:"hidden",position:"relative"},width:"100%",children:e});var tx=i(44452),tb=i(95961);let tf=(0,o.memo)(({onClear:e})=>{let{t}=(0,k.Bd)("topic"),[i,l]=(0,o.useState)(""),[r,s]=(0,o.useState)(""),d=(0,A.wo)(e=>e.isMobile),[c,p]=(0,a.L)(e=>[e.activeId,e.useSearchTopics]);p(r,c),(0,tb.A)(()=>{a.L.setState({inSearchingMode:!1,isSearchingTopic:!1})});let h=()=>{i!==r&&(s(i),a.L.setState({inSearchingMode:!!i,isSearchingTopic:!!i}))};return(0,n.Y)(tx.A,{autoFocus:!0,onBlur:()=>{""===i?e?.():h()},onChange:e=>{l(e.target.value)},onPressEnter:h,placeholder:t("searchPlaceholder"),spotlight:!d,value:i,variant:"filled"})}),ty=({children:e})=>(0,n.FD)(l.Flexbox,{gap:8,height:"100%",padding:"8px 8px 0",style:{overflow:"hidden"},children:[(0,n.Y)(tf,{}),(0,n.Y)(l.Flexbox,{height:"100%",style:{marginInline:-8,overflow:"hidden",position:"relative"},width:"calc(100% + 16px)",children:e})]}),tv=(0,K.rU)(({css:e,prefixCls:t})=>({container:e`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 44px;
    padding-block: 8px;
    padding-inline: 12px;

    .${t}-skeleton-content {
      display: flex;
      flex-direction: column;
    }
  `,paragraph:e`
    > li {
      height: 20px !important;
    }
  `})),tY=(0,o.memo)(()=>{let{styles:e}=tv();return(0,n.Y)(O.A,{active:!0,avatar:!1,className:e.container,paragraph:{className:e.paragraph,rows:1,style:{marginBottom:0},width:"100%"},title:!1})}),tk=(0,o.memo)(()=>(0,n.Y)(l.Flexbox,{style:{paddingTop:6},children:Array.from({length:4}).map((e,t)=>(0,n.Y)(tY,{},t))}));var tw=i(49875),tA=i(58244),tF=i(6563),tC=i(80201),tS=i(75589),tT=i(72573),tz=i(50846),tD=i(71457),tB=i(84106);let tM=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)(["topic","common"]),[t,i,r]=(0,a.L)(e=>[eW.e.currentTopicLength(e),e.removeUnstarredTopic,e.removeSessionTopics]),[s,d]=(0,C.k)(e=>[tD.U.topicDisplayMode(e),e.updatePreference]),[c,p]=(0,o.useState)(!1),{modal:h}=tA.A.useApp(),u=(0,o.useMemo)(()=>[...Object.values(tB.nj).map(t=>({icon:s===t?(0,n.Y)(ep.default,{icon:tF.A}):(0,n.Y)("div",{}),key:t,label:e(`groupMode.${t}`),onClick:()=>{d({topicDisplayMode:t})}})),{type:"divider"},{icon:(0,n.Y)(ep.default,{icon:tC.A}),key:"deleteUnstarred",label:e("actions.removeUnstarred"),onClick:()=>{h.confirm({cancelText:e("cancel",{ns:"common"}),centered:!0,okButtonProps:{danger:!0},okText:e("ok",{ns:"common"}),onOk:i,title:e("actions.confirmRemoveUnstarred")})}},{danger:!0,icon:(0,n.Y)(ep.default,{icon:tC.A}),key:"deleteAll",label:e("actions.removeAll"),onClick:()=>{h.confirm({cancelText:e("cancel",{ns:"common"}),centered:!0,okButtonProps:{danger:!0},okText:e("ok",{ns:"common"}),onOk:r,title:e("actions.confirmRemoveAll")})}}],[s]);return c?(0,n.Y)(l.Flexbox,{padding:"12px 16px 4px",children:(0,n.Y)(tf,{onClear:()=>p(!1)})}):(0,n.Y)(tz.A,{actions:(0,n.FD)(n.FK,{children:[(0,n.Y)(b.A,{icon:tS.A,onClick:()=>p(!0),size:"small"}),(0,n.Y)(eg.A,{arrow:!1,menu:{items:u,onClick:({domEvent:e})=>{e.stopPropagation()}},trigger:["click"],children:(0,n.Y)(b.A,{icon:tT.A,size:"small"})})]}),title:`${e("title")} ${t>1?t+1:""}`})});var tN=i(62589),t$=i(42213),tI=i(45628),tL=i(82700),tP=i(10903),tE=i(75431),tR=i(78518),tU=i(39001),tW=i(575),tj=i(36310),t_=i(19530),tH=i(20549);let tO=(0,K.rU)(({css:e,token:t})=>({active:e`
    color: ${t.colorText};
  `,content:e`
    position: relative;
    overflow: hidden;
    flex: 1;
  `,title:e`
    flex: 1;

    height: 28px;

    line-height: 28px;
    color: ${t.colorTextSecondary};
    text-align: start;
  `})),tK=(0,o.memo)(({id:e,title:t,active:i,showMore:r})=>{let{t:s}=(0,k.Bd)(["thread","common"]),d=(0,tH.a)(),[c,p,h]=(0,a.L)(t=>[t.threadRenamingId===e,t.updateThreadTitle,t.removeThread]),{styles:u,cx:g}=tO(),m=t=>{a.L.setState({threadRenamingId:t?e:""})},{modal:x}=tA.A.useApp(),f=(0,o.useMemo)(()=>[{icon:(0,n.Y)(ep.default,{icon:tU.A}),key:"rename",label:s("rename",{ns:"common"}),onClick:()=>{m(!0)}},{type:"divider"},{danger:!0,icon:(0,n.Y)(ep.default,{icon:tC.A}),key:"delete",label:s("delete",{ns:"common"}),onClick:()=>{e&&x.confirm({centered:!0,okButtonProps:{danger:!0},onOk:async()=>{await h(e)},title:s("actions.confirmRemoveThread")})}}],[]);return(0,n.FD)(l.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",onDoubleClick:t=>{e&&t.altKey&&m(!0)},children:[c?(0,n.Y)(tR.A,{editing:c,onChangeEnd:i=>{t!==i&&p(e,i),m(!1)},onEditingChange:m,showEditIcon:!1,style:{height:28},value:t}):t===t_.VH?(0,n.Y)(l.Flexbox,{flex:1,height:28,justify:"center",children:(0,n.Y)(tj.A,{})}):(0,n.Y)(tE.A,{as:"p",className:g(u.title,i&&u.active),ellipsis:{rows:1,tooltip:{placement:"left",title:t}},style:{margin:0},children:t}),(r||d)&&!c&&(0,n.Y)(eg.A,{arrow:!1,menu:{items:f,onClick:({domEvent:e})=>{e.stopPropagation()}},trigger:["click"],children:(0,n.Y)(b.A,{className:"topic-more",icon:tW.A,onClick:e=>{e.stopPropagation()},size:"small"})})]})}),tG=(0,K.rU)(({css:e,token:t,isDarkMode:i},n)=>({active:e`
    background: ${i?t.colorFillSecondary:t.colorFillTertiary};
    transition: background 200ms ${t.motionEaseOut};

    &:hover {
      background: ${t.colorFill};
    }
  `,container:e`
    margin-inline: 8px;

    &::after {
      content: '';

      position: absolute;
      inset-block: 50px ${40*n+20}px;
      inset-inline-start: 26px;

      width: 18px;
      border-block-end: 2px solid ${t.colorBorderSecondary};
      border-inline-start: 2px solid ${t.colorBorderSecondary};
      border-end-start-radius: 8px;
    }

    &.thread-item {
      width: calc(100% - 16px);
    }
  `,split:e`
    border-block-end: 1px solid ${t.colorSplit};
  `,wrapper:e`
    cursor: pointer;

    width: calc(100% - 36px);
    margin-block: 2px;
    padding-block: 4px;
    padding-inline: 8px;
    border-radius: ${t.borderRadius}px;

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `})),tV=(0,o.memo)(({title:e,id:t,index:i})=>{let{styles:r,cx:s}=tG(i),c=(0,d.o)(e=>e.toggleMobileTopic),[p,h]=(0,a.L)(e=>[e.switchThread,e.activeThreadId]),[u,g]=(0,o.useState)(!1),m=t===h;return(0,n.FD)(l.Flexbox,{className:s(r.container,"thread-item"),horizontal:!0,children:[(0,n.Y)(l.Flexbox,{height:36,width:36}),(0,n.Y)(l.Flexbox,{align:"center",className:s(r.wrapper,m&&r.active),distribution:"space-between",flex:1,horizontal:!0,onClick:()=>{p(t),c(!1)},onMouseEnter:()=>{g(!0)},onMouseLeave:()=>{g(!1)},children:(0,n.Y)(tK,{active:m,id:t,showMore:u,title:e})})]})}),tQ=(0,o.memo)(()=>{let[e]=(0,a.L)(e=>[e.activeTopicId]),t=(0,a.L)(tP.Z.getThreadsByTopic(e));return(0,te.j)(e),t?.map((e,t)=>(0,n.Y)(tV,{id:e.id,index:t,title:e.title},e.id))});tQ.displayName="ThreadList";var tq=i(62522);let tJ=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("topic"),t=(0,K.DP)();return(0,n.FD)(l.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,n.Y)(l.Flexbox,{align:"center",height:24,justify:"center",width:24,children:(0,n.Y)(ep.default,{color:t.colorTextDescription,icon:tq.A})}),(0,n.Y)(tE.A,{ellipsis:{rows:1},style:{margin:0},children:e("defaultTitle")}),(0,n.Y)(ec.A,{children:e("temp")})]})});var tZ=i(3629),tX=i(84517),t0=i(57696),t1=i(85017),t2=i(17665),t8=i(64861);let t4=(0,K.rU)(({css:e})=>({content:e`
    position: relative;
    overflow: hidden;
    flex: 1;
  `,title:e`
    flex: 1;
    height: 28px;
    line-height: 28px;
    text-align: start;
  `})),t3=(0,o.memo)(({id:e,title:t,fav:i,showMore:r})=>{let{t:s}=(0,k.Bd)(["topic","common"]),c=(0,tH.a)(),p=(0,d.o)(e=>e.openTopicInNewWindow),[h,u,g,m,x,f,y,v]=(0,a.L)(t=>[t.topicRenamingId===e,t.favoriteTopic,t.updateTopicTitle,t.removeTopic,t.autoRenameTopicTitle,t.duplicateTopic,t.topicLoadingIds.includes(e),t.activeId]),{styles:Y,theme:w}=t4(),A=t=>{a.L.setState({topicRenamingId:t?e:""})},{modal:F}=tA.A.useApp(),C=(0,o.useMemo)(()=>[{icon:(0,n.Y)(ep.default,{icon:tZ.A}),key:"autoRename",label:s("actions.autoRename"),onClick:()=>{x(e)}},{icon:(0,n.Y)(ep.default,{icon:tU.A}),key:"rename",label:s("rename",{ns:"common"}),onClick:()=>{A(!0)}},...t8.xl?[{icon:(0,n.Y)(ep.default,{icon:tX.A}),key:"openInNewWindow",label:s("actions.openInNewWindow"),onClick:()=>{p(v,e)}}]:[],{type:"divider"},{icon:(0,n.Y)(ep.default,{icon:t0.A}),key:"duplicate",label:s("actions.duplicate"),onClick:()=>{f(e)}},{type:"divider"},{danger:!0,icon:(0,n.Y)(ep.default,{icon:tC.A}),key:"delete",label:s("delete",{ns:"common"}),onClick:()=>{e&&F.confirm({centered:!0,okButtonProps:{danger:!0},onOk:async()=>{await m(e)},title:s("actions.confirmRemoveTopic")})}}],[e,v,x,f,m,s,A,p]);return(0,n.FD)(l.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",onDoubleClick:t=>{e&&t.altKey&&A(!0)},children:[(0,n.Y)(b.A,{color:i&&!y?w.colorWarning:void 0,fill:i&&!y?w.colorWarning:"transparent",icon:y?t1.A:t2.A,onClick:t=>{t.stopPropagation(),e&&u(e,!i)},size:"small",spin:y}),h?(0,n.Y)(tR.A,{editing:h,onChangeEnd:i=>{t!==i&&g(e,i),A(!1)},onEditingChange:A,showEditIcon:!1,style:{height:28},value:t}):t===t_.VH||y&&!t?(0,n.Y)(l.Flexbox,{flex:1,height:28,justify:"center",children:(0,n.Y)(tj.A,{})}):(0,n.Y)(tE.A,{className:Y.title,ellipsis:{rows:1,tooltip:{placement:"left",title:t}},onDoubleClick:()=>{t8.xl&&p(v,e)},style:{margin:0},children:t}),(r||c)&&!h&&(0,n.Y)(eg.A,{arrow:!1,menu:{items:C,onClick:({domEvent:e})=>{e.stopPropagation()}},trigger:["click"],children:(0,n.Y)(b.A,{className:"topic-more",icon:tW.A,onClick:e=>{e.stopPropagation()},size:"small"})})]})}),t6=(0,K.rU)(({css:e,token:t,isDarkMode:i})=>({active:e`
    background: ${i?t.colorFillSecondary:t.colorFillTertiary};
    transition: background 200ms ${t.motionEaseOut};

    &:hover {
      background: ${t.colorFill};
    }
  `,container:e`
    cursor: pointer;

    margin-block: 2px;
    margin-inline: 8px;
    padding: 8px;
    border-radius: ${t.borderRadius}px;

    &.topic-item {
      width: calc(100% - 16px);
    }

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,split:e`
    border-block-end: 1px solid ${t.colorSplit};
  `})),t5=(0,o.memo)(({title:e,active:t,id:i,fav:r,threadId:s})=>{let{styles:c,cx:p}=t6(),h=(0,d.o)(e=>e.toggleMobileTopic),[u]=(0,a.L)(e=>[e.switchTopic]),[g,m]=(0,o.useState)(!1);return(0,n.FD)(l.Flexbox,{style:{position:"relative"},children:[(0,n.Y)(l.Flexbox,{align:"center",className:p(c.container,"topic-item",t&&!s&&c.active),distribution:"space-between",horizontal:!0,onClick:()=>{u(i),h(!1)},onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},children:i?(0,n.Y)(t3,{fav:r,id:i,showMore:g,title:e}):(0,n.Y)(tJ,{})}),t&&(0,n.Y)(o.Suspense,{fallback:(0,n.FD)(l.Flexbox,{gap:8,paddingBlock:8,paddingInline:24,width:"100%",children:[(0,n.Y)(O.A.Button,{active:!0,size:"small",style:{height:18,width:"100%"}}),(0,n.Y)(O.A.Button,{active:!0,size:"small",style:{height:18,width:"100%"}})]}),children:(0,n.Y)(tQ,{})})]})});var t7=i(2644),t9=i.n(t7);let ie=(0,K.rU)(({css:e,token:t,responsive:i})=>({container:e`
    color: ${t.colorTextQuaternary};
    background: ${t.colorBgContainerSecondary};
    box-shadow: 0 3px 4px -2px ${t.colorBgContainerSecondary};

    ${i.mobile} {
      background: ${t.colorBgContainer};
      box-shadow: 0 3px 4px -2px ${t.colorBgContainer};
    }
  `})),it=(0,o.memo)(({id:e,title:t})=>{let{t:i}=(0,k.Bd)("topic"),{styles:o}=ie(),r=(e.startsWith("20")?e.includes("-")?t9()(e).format("MMMM"):e:void 0)??i(`groupTitle.byTime.${e}`);return(0,n.Y)(l.Flexbox,{className:o.container,paddingBlock:"12px 8px",paddingInline:12,children:t||r})}),ii=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("topic"),t=(0,o.useRef)(null),[i,l]=(0,a.L)(e=>[e.activeTopicId,e.activeThreadId]),r=(0,a.L)(eW.e.groupedTopicsSelector,et()),{groups:s,groupCounts:d,topics:c}=(0,o.useMemo)(()=>({groupCounts:[1,...r.map(e=>e.children.length)],groups:[{id:"default"},...r.map(e=>({id:e.id,title:e.title}))],topics:[{favorite:!1,id:"default",title:e("defaultTitle")},...r.flatMap(e=>e.children)]}),[r]),p=(0,o.useCallback)(e=>{let{id:t,favorite:o,title:r}=c[e];return 0===e?(0,n.Y)(t5,{active:!i,fav:o,title:r}):(0,n.Y)(t5,{active:i===t,fav:o,id:t,threadId:l,title:r},t)},[i,c,l]),h=(0,o.useCallback)(e=>{if(0===e)return(0,n.Y)("div",{style:{height:1}});let t=s[e];return(0,n.Y)(it,{...t})},[s]);return(0,n.Y)(tL.kN,{groupContent:h,groupCounts:d,itemContent:p,ref:t,style:{minHeight:1===d.length?"0px":"200px"}})});ii.displayName="ByTimeMode";let io=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("topic"),t=(0,o.useRef)(null),[i]=(0,a.L)(e=>[e.activeTopicId]),l=(0,a.L)(eW.e.displayTopics,et()),r=(0,o.useMemo)(()=>[{favorite:!1,id:"default",title:e("defaultTitle")},...l||[]],[l]),s=(0,o.useCallback)((e,{id:t,favorite:o,title:l})=>0===e?(0,n.Y)(t5,{active:!i,fav:o,title:l}):(0,n.Y)(t5,{active:i===t,fav:o,id:t,title:l},t),[i]),d=r.findIndex(e=>e.id===i);return(0,n.Y)(tL.aY,{computeItemKey:(e,t)=>t.id,data:r,defaultItemHeight:44,initialTopMostItemIndex:Math.max(d,0),itemContent:s,overscan:440,ref:t})});io.displayName="FlatMode";var il=i(20480);let ir=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("topic"),t=(0,o.useRef)(null),[i,l]=(0,a.L)(e=>[e.activeTopicId,eW.e.isSearchingTopic(e)]),r=(0,a.L)(eW.e.searchTopics,et()),s=(0,o.useCallback)((e,{id:t,favorite:o,title:l})=>(0,n.Y)(t5,{active:i===t,fav:o,id:t,title:l},t),[i]),d=r.findIndex(e=>e.id===i);return l?(0,n.Y)(tk,{}):0===r.length?(0,n.Y)(il.default,{paddingBlock:12,children:(0,n.Y)(tE.A,{type:"secondary",children:e("searchResultEmpty")})}):(0,n.Y)(tL.aY,{computeItemKey:(e,t)=>t.id,data:r,defaultItemHeight:44,initialTopMostItemIndex:Math.max(d,0),itemContent:s,overscan:440,ref:t})});ir.displayName="SearchResult";let ia=(0,o.memo)(()=>{let{t:e}=(0,k.Bd)("topic"),{isDarkMode:t}=(0,t$.e)(),[i,o]=(0,a.L)(e=>[e.topicsInit,eW.e.currentTopicLength(e)]),[r,s]=(0,a.L)(e=>[eW.e.isUndefinedTopics(e),eW.e.isInSearchMode(e)]),[d,c,p]=(0,C.k)(e=>[e.preference.guide?.topic,e.updateGuideState,tD.U.topicDisplayMode(e)]);return(eO(),s)?(0,n.Y)(ir,{}):!i||r?(0,n.Y)(tk,{}):(0,n.FD)(n.FK,{children:[0===o&&d&&(0,n.Y)(l.Flexbox,{paddingInline:8,children:(0,n.Y)(tN.A,{alt:e("guide.desc"),cover:(0,tI.b8)(`empty_topic_${t?"dark":"light"}.webp`),coverProps:{priority:!0},desc:e("guide.desc"),height:120,onClose:()=>{c({topic:!1})},style:{flex:"none",marginBottom:12},title:e("guide.title"),visible:d,width:200})}),p===tB.nj.ByTime?(0,n.Y)(ii,{}):(0,n.Y)(io,{})]})});ia.displayName="TopicListContent";let is=(0,o.memo)(()=>{let e=(0,p.B)(h.z.isInboxSession);return(0,n.FD)(n.FK,{children:[!e&&(0,n.Y)(tw.A,{style:{margin:0}}),(0,n.Y)(tM,{}),(0,n.Y)(ia,{})]})});is.displayName="Topic";let id=(0,D.default)(()=>Promise.all([i.e(50340),i.e(41952),i.e(75927),i.e(40371),i.e(13441),i.e(38141),i.e(2460),i.e(78199),i.e(62680),i.e(57021),i.e(65998),i.e(65819),i.e(7120),i.e(1505),i.e(27205)]).then(i.bind(i,22009)),{loadableGenerated:{webpack:()=>[22009]},loading:()=>(0,n.Y)(tk,{})}),ic=(0,o.memo)(({mobile:e})=>(0,n.FD)(e?ty:tm,{children:[(0,n.Y)(id,{}),(0,n.Y)(is,{})]}));ic.displayName="TopicSidebar";let ip=(0,o.memo)(()=>(0,n.FD)(n.FK,{children:[(0,n.Y)(eS,{}),(0,n.FD)(l.Flexbox,{height:"100%",horizontal:!0,style:{overflow:"hidden",position:"relative"},width:"100%",children:[(0,n.Y)(l.Flexbox,{height:"100%",style:{overflow:"hidden",position:"relative"},width:"100%",children:(0,n.Y)(tr,{mobile:!1})}),(0,n.Y)(e$,{children:(0,n.Y)(o.Suspense,{fallback:(0,n.Y)(g.A,{}),children:(0,n.Y)(tg,{mobile:!1})})}),(0,n.Y)(eL,{children:(0,n.Y)(ic,{mobile:!1})})]}),(0,n.Y)(u,{})]}));ip.displayName="DesktopWorkspace";let ih=(0,o.memo)(()=>(0,n.FD)(n.FK,{children:[(0,n.Y)(m.A,{header:(0,n.Y)(e_,{}),style:{overflowY:"hidden"},children:(0,n.Y)(tr,{mobile:!0})}),(0,n.Y)(eK,{children:(0,n.Y)(ic,{mobile:!0})}),(0,n.Y)(tg,{mobile:!0}),(0,n.Y)(u,{})]}));ih.displayName="MobileWorkspace";var iu=i(15447),ig=i(28935),im=i(56244),ix=i(51997),ib=i.n(ix),iy=i(91951),iv=i(3779);let iY=(0,K.rU)(({css:e,token:t,isDarkMode:i})=>({cancelIcon:e`
    position: absolute;
    z-index: 100;
    inset-block-start: 8px;
    inset-inline-end: 8px;
  `,container:e`
    position: absolute;
    z-index: 1100;
    inset-block-end: 16px;
    inset-inline-end: 20px;

    overflow: hidden;

    border: 1px solid ${t.colorSplit};
    border-radius: 8px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowSecondary};
  `,mobileContainer:e`
    inset-block-end: 8px;
    inset-inline-start: 8px;
  `,wrapper:e`
    background:
      linear-gradient(
        180deg,
        ${(0,iv.B3)(t.colorBgContainer,0)},
        ${t.colorBgContainer} ${i?"80":"140"}px
      ),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='${t.colorFillTertiary}' %3E %3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  `})),ik=(0,o.memo)(({mobile:e,children:t,show:i,onCancel:o,showCloseIcon:r=!0,width:a=422,height:s="auto",wrapper:d={},className:c,...p})=>{let{styles:h,cx:u}=iY(),{className:g,...m}=d;return i&&(0,n.FD)(l.Flexbox,{className:u(h.container,e&&h.mobileContainer,c),height:s,width:e?"calc(100% - 16px)":a,...p,children:[r&&(0,n.Y)(b.A,{className:h.cancelIcon,icon:iy.A,onClick:()=>o?.()}),(0,n.Y)(l.Flexbox,{className:u(h.wrapper,g),gap:16,horizontal:!0,padding:"20px 20px 16px",...m,children:t})]})});var iw=i(98724);let iA=(0,K.rU)(({css:e,token:t})=>({desc:e`
    color: ${t.colorTextSecondary};
  `,title:e`
    font-size: 18px;
    font-weight: bold;
  `})),iF=(0,o.memo)(({mobile:e})=>{let{styles:t,theme:i}=iA(),{t:o}=(0,k.Bd)("common"),r=(0,C.k)(tD.U.isPreferenceInit),[a,s]=(0,C.k)(e=>[e.useCheckTrace,e.updatePreference]),{data:d,mutate:c}=a(r),p=e=>{s({telemetry:e}),c()};return(0,n.FD)(ik,{mobile:e,show:d,showCloseIcon:!1,children:[(0,n.Y)(l.Flexbox,{children:(0,n.Y)(H.A,{avatar:(0,n.Y)(ig.A,{}),background:i.geekblue1,style:{color:i.geekblue7}})}),(0,n.FD)(l.Flexbox,{gap:16,children:[(0,n.FD)(l.Flexbox,{gap:12,children:[(0,n.Y)(l.Flexbox,{className:t.title,children:o("telemetry.title",{appName:iw.Se})}),(0,n.FD)("div",{className:t.desc,children:[o("telemetry.desc",{appName:iw.Se}),(0,n.Y)("span",{children:(0,n.FD)(ib(),{href:tI.pk,target:"_blank",children:[o("telemetry.learnMore"),(0,n.Y)(ep.default,{icon:im.A,style:{marginInlineStart:4}})]})})]})]}),(0,n.FD)(l.Flexbox,{gap:8,horizontal:!0,children:[(0,n.Y)(iu.A,{onClick:()=>{p(!0)},type:"primary",children:o("telemetry.allow")}),(0,n.Y)(iu.A,{onClick:()=>{p(!1)},type:"text",children:o("telemetry.deny")})]})]})]})});var iC=i(38128);let iS=(0,o.memo)(()=>{let e=(0,p.B)(q.G.currentAgentTitle),t=(0,a.L)(e=>eW.e.currentActiveTopic(e)?.title);return(0,n.Y)(iC.A,{title:[t,e].filter(Boolean).join(" \xb7 ")})}),iT=(0,o.memo)(()=>(0,n.FD)(n.FK,{children:[(0,n.Y)(iS,{}),(0,n.Y)(ih,{}),(0,n.Y)(iF,{mobile:!0})]})),iz=(0,o.memo)(()=>(0,n.FD)(n.FK,{children:[(0,n.Y)(iS,{}),(0,n.Y)(ip,{}),(0,n.Y)(iF,{mobile:!1})]}))},66044:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(28802),o=i(38153),l=i(11577),r=i(83034),a=i(20549);let s=(0,l.rU)(({css:e,prefixCls:t})=>({dropdownMenu:e`
    &.${t}-dropdown-menu {
      .${t}-dropdown-menu-item-group-list {
        margin: 0;
      }
      .${t}-avatar {
        margin-inline-end: var(--ant-margin-xs);
      }
    }
  `})),d=(0,r.memo)(({menu:e,maxHeight:t,minWidth:i,maxWidth:l,children:r,placement:d="top",...c})=>{let{cx:p,styles:h}=s(),u=(0,a.a)();return(0,n.Y)(o.A,{arrow:!1,destroyOnHidden:!1,menu:{...e,className:p(h.dropdownMenu,e.className),onClick:t=>{t.domEvent.preventDefault(),e.onClick?.(t)},style:{maxHeight:t,maxWidth:u?void 0:l,minWidth:u?void 0:i,overflowX:"hidden",overflowY:"scroll",width:u?"100vw":void 0,...e.style}},placement:u?"top":d,...c,children:r})})},66209:(e,t,i)=>{i.d(t,{A:()=>v});var n=i(28802),o=i(12389),l=i(9274),r=i(11577),a=i(6621),s=i(22158),d=i(83034),c=i(59121),p=i(80457),h=i(27697),u=i(25598),g=i(66044),m=i(6332),x=i(45541),b=i(88990);let f=(0,r.rU)(({css:e,prefixCls:t})=>({menu:e`
    .${t}-dropdown-menu-item {
      display: flex;
      gap: 8px;
    }
    .${t}-dropdown-menu {
      &-item-group-title {
        padding-inline: 8px;
      }

      &-item-group-list {
        margin: 0 !important;
      }
    }
  `,tag:e`
    cursor: pointer;
  `})),y=(e,t)=>`${e}-${t}`,v=(0,d.memo)(({children:e,onOpenChange:t,open:i})=>{let{t:r}=(0,c.Bd)("components"),{styles:v,theme:Y}=f(),[k,w,A]=(0,x.o)(e=>[b.e.currentAgentModel(e),b.e.currentAgentModelProvider(e),e.updateAgentConfig]),F=(0,h.Zp)(),C=(0,m.J)(),S=(0,d.useMemo)(()=>0===C.length?[{key:"no-provider",label:(0,n.FD)(p.Flexbox,{gap:8,horizontal:!0,style:{color:Y.colorTextTertiary},children:[r("ModelSwitchPanel.emptyProvider"),(0,n.Y)(o.default,{icon:a.A})]}),onClick:()=>{F("/settings?active=provider")}}]:C.map(e=>{let t;return{children:0===(t=e.children.map(t=>({key:y(e.id,t.id),label:(0,n.Y)(u.$z,{...t,...t.abilities}),onClick:async()=>{await A({model:t.id,provider:e.id})}}))).length?[{key:`${e.id}-empty`,label:(0,n.FD)(p.Flexbox,{gap:8,horizontal:!0,style:{color:Y.colorTextTertiary},children:[r("ModelSwitchPanel.emptyModel"),(0,n.Y)(o.default,{icon:a.A})]}),onClick:()=>{F(`/settings?active=provider&provider=${e.id}`)}}]:t,key:e.id,label:(0,n.FD)(p.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,n.Y)(u.TK,{logo:e.logo,name:e.name,provider:e.id,source:e.source}),(0,n.Y)(l.A,{icon:s.A,onClick:t=>{t.preventDefault(),t.stopPropagation(),F(`/settings?active=provider&provider=${e.id}`)},size:"small",title:r("ModelSwitchPanel.goToSettings")})]}),type:"group"}}),[C,F,r,Y.colorTextTertiary]),T=(0,n.Y)("div",{className:v.tag,children:e});return(0,n.Y)(g.A,{menu:{activeKey:y(w,k),className:v.menu,items:S,style:{maxHeight:550,overflowY:"scroll"}},onOpenChange:t,open:i,placement:"topLeft",children:T})})},67393:(e,t,i)=>{i.d(t,{A:()=>l8});var n,o=i(28802),l=i(74551),r=i(11577),a=i(31021),s=i.n(a),d=i(83034),c=i(80457),p=i(23935),h=i(17068),u=i(91804),g=i(5569),m=i(15095),x=i(12389),b=i(75431),f=i(38471),y=i(84980),v=i(59121),Y=i(20480),k=i(82964),w=i(45541),A=i(11439),F=i(3136),C=i(49875),S=i(80706);let T=(0,d.memo)(({enable:e})=>{let{t}=(0,v.Bd)("common");return e?(0,o.Y)("div",{style:{padding:"0 20px"},children:(0,o.Y)(C.A,{style:{margin:0,padding:"20px 0"},children:(0,o.Y)(F.A,{icon:(0,o.Y)(x.default,{icon:S.A}),children:t("historyRange",{defaultValue:"History Message"})})})}):null}),z=(0,r.rU)(({css:e,token:t})=>({container:e`
    padding-inline: 12px;
    border-radius: 12px;
  `,content:e`
    color: ${t.colorTextDescription};
  `,line:e`
    width: 3px;
    height: 100%;
    background: ${t.colorBorder};
  `})),D=(0,d.memo)(()=>{let{styles:e,theme:t}=z(),{t:i}=(0,v.Bd)("chat"),[n,l]=(0,h.L)(e=>{let t=A.e.currentActiveTopicSummary(e);return[t?.content,t?.model]}),r=(0,w.o)(e=>k.c.currentChatConfig(e).enableCompressHistory);return(0,o.FD)(c.Flexbox,{paddingInline:16,style:{paddingBottom:8},children:[(0,o.Y)(T,{enable:!0}),r&&!!n&&(0,o.FD)(c.Flexbox,{className:e.container,gap:8,children:[(0,o.FD)(c.Flexbox,{align:"flex-start",gap:8,horizontal:!0,children:[(0,o.Y)(Y.default,{height:20,width:20,children:(0,o.Y)(x.default,{icon:y.A,size:16,style:{color:t.colorTextDescription}})}),(0,o.Y)(b.A,{type:"secondary",children:i("historySummary")}),l&&(0,o.Y)("div",{children:(0,o.Y)(m.A,{model:l})})]}),(0,o.FD)(c.Flexbox,{align:"flex-start",gap:8,horizontal:!0,children:[(0,o.Y)(c.Flexbox,{align:"center",padding:8,width:20,children:(0,o.Y)("div",{className:e.line})}),(0,o.Y)(f.A,{className:e.content,variant:"chat",children:n})]})]})]})}),B=(0,d.createContext)(!1);var M=i(14654),N=i(9274),$=i(10726),I=i(32901),L=i(89026),P=i(15447),E=i(28726),R=i(91888),U=i(96830),W=i(64431),j=i(29961),_=i(64861),H=i(87662);let O=(0,r.rU)(({css:e})=>({container:e`
    height: 100%;
  `,iframe:e`
    width: 100%;
    height: 100%;
    border: none;
  `})),K=(0,d.memo)(({content:e,open:t,onClose:i})=>{let{styles:n}=O(),{t:l}=(0,v.Bd)("components"),[r,a]=(0,d.useState)("preview"),s=(0,d.useCallback)(()=>{let t=e.match(/<title>([\S\s]*?)<\/title>/i);return t?t[1].trim():void 0},[e]),p=(0,d.useCallback)(e=>e.replaceAll(/["*/:<>?\\|]/g,"-").replaceAll(/\s+/g," ").trim().slice(0,100),[]),h=(0,d.useCallback)(()=>{let t=s(),i=t?p(t):`chat-html-preview-${Date.now()}`;(0,I.HP)(e,`${i}.html`)},[e,s,p]),u=(0,o.FD)(c.Flexbox,{align:"center",horizontal:!0,justify:"space-between",style:{width:"100%"},children:[l("HtmlPreview.title"),(0,o.Y)(L.A,{onChange:e=>a(e),options:[{label:(0,o.FD)(c.Flexbox,{align:"center",gap:6,horizontal:!0,children:[(0,o.Y)($.A,{size:16}),l("HtmlPreview.mode.preview")]}),value:"preview"},{label:(0,o.FD)(c.Flexbox,{align:"center",gap:6,horizontal:!0,children:[(0,o.Y)(W.A,{size:16}),l("HtmlPreview.mode.code")]}),value:"code"}],value:r}),(0,o.Y)(P.A,{color:"default",icon:(0,o.Y)(j.A,{size:16}),onClick:h,variant:"filled",children:l("HtmlPreview.actions.download")})]});return(0,o.Y)(U.A,{destroyOnHidden:!0,height:_.xl?`calc(100vh - ${H.X}px)`:"100vh",onClose:i,open:t,placement:"bottom",styles:{body:{height:"100%",padding:0},header:{paddingBlock:8,paddingInline:12}},title:u,children:"preview"===r?(0,o.Y)(E.A,{className:n.container,children:(0,o.Y)("iframe",{className:n.iframe,sandbox:"allow-scripts allow-same-origin",srcDoc:e,title:l("HtmlPreview.iframeTitle")})}):(0,o.Y)(E.A,{className:n.container,children:(0,o.Y)(R.A,{language:"html",showLanguage:!1,style:{height:"100%",overflow:"auto"},children:e})})})});K.displayName="HtmlPreviewDrawer";let G=(0,d.memo)(({content:e,size:t})=>{let{t:i}=(0,v.Bd)("components"),[n,l]=(0,d.useState)(!1);return(0,o.FD)(o.FK,{children:[(0,o.Y)(N.A,{icon:$.A,onClick:()=>l(!0),size:t,title:i("HtmlPreview.actions.preview")}),(0,o.Y)(K,{content:e,onClose:()=>l(!1),open:n})]})});G.displayName="HtmlPreviewAction";var V=i(67072),Q=i(3779);let q=(0,r.rU)(({cx:e,css:t,token:i,responsive:n},{placement:o,variant:l,title:r,avatarSize:a,editing:s,time:d,disabled:c})=>{let p=t`
      padding-block: 8px;
      padding-inline: 12px;
      border: 1px solid ${(0,Q.B3)(i.colorBorderSecondary,.66)};
      border-radius: ${i.borderRadiusLG}px;

      background-color: ${i.colorBgContainer};
    `,h=t`
      padding-block-start: ${r?0:"6px"};
    `,u=t`
      margin-block-end: -16px;
      transition: background-color 100ms ${i.motionEaseOut};
    `,g=s&&t`
        width: 100%;
      `;return{actions:e(t`
          flex: none;
          align-self: ${"bubble"===l?"flex-end":"left"===o?"flex-start":"flex-end"};
          justify-content: ${"left"===o?"flex-end":"flex-start"};
        `,s&&t`
            pointer-events: none !important;
            opacity: 0 !important;
          `),avatarContainer:t`
        position: relative;
        flex: none;
        width: ${a}px;
        height: ${a}px;
      `,avatarGroupContainer:t`
        width: ${a}px;
      `,container:e("docs"===l&&u,t`
          position: relative;

          width: 100%;
          max-width: 100vw;
          padding-block: 24px 12px;
          padding-inline: 12px;

          @supports (content-visibility: auto) {
            contain-intrinsic-size: auto 100lvh;
          }

          time {
            display: inline-block;
            white-space: nowrap;
          }

          div[role='menubar'] {
            display: flex;
          }

          time,
          div[role='menubar'] {
            pointer-events: none;
            opacity: 0;
            transition: opacity 200ms ${i.motionEaseOut};
          }

          &:hover {
            time,
            div[role='menubar'] {
              pointer-events: unset;
              opacity: 1;
            }
          }

          ${n.mobile} {
            padding-block-start: ${"docs"===l?"16px":"12px"};
            padding-inline: 8px;
          }
        `),editingContainer:e(g,t`
          padding-block: 8px 12px;
          padding-inline: 12px;
          border: 1px solid ${i.colorBorderSecondary};

          &:active,
          &:hover {
            border-color: ${i.colorBorder};
          }
        `,"docs"===l&&t`
            border-radius: ${i.borderRadius}px;
            background: ${i.colorFillQuaternary};
          `),editingInput:t`
        width: 100%;
      `,errorContainer:t`
        position: relative;
        overflow: hidden;
        width: 100%;
      `,loading:t`
        position: absolute;
        inset-block-end: 0;
        inset-inline: ${"right"===o?"-4px":"unset"}
          ${"left"===o?"-4px":"unset"};

        width: 16px;
        height: 16px;
        border-radius: 50%;

        color: ${i.colorBgLayout};

        background: ${i.colorPrimary};
      `,message:e("bubble"===l?p:h,t`
          user-select: ${c?"none":"text"};

          position: relative;

          overflow: hidden;

          max-width: 100%;

          color: ${c?i.colorTextSecondary:"unset"};

          ${n.mobile} {
            width: 100%;
          }
        `),messageContainer:e(g,t`
          position: relative;
          overflow: hidden;
          max-width: 100%;
          margin-block-start: ${d?-16:0}px;

          ${n.mobile} {
            overflow-x: auto;
          }
        `),messageContent:e(g,t`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          ${n.mobile} {
            flex-direction: column !important;
          }
        `),messageExtra:e("message-extra"),name:t`
        pointer-events: none;

        margin-block-end: 6px;

        font-size: 12px;
        line-height: 1;
        color: ${i.colorTextDescription};
        text-align: ${"left"===o?"left":"right"};
      `}});var J=i(85017);let Z=(0,d.memo)(({loading:e,placement:t})=>{let{styles:i}=q({placement:t});return e?(0,o.Y)(c.Flexbox,{align:"center",className:i.loading,justify:"center",children:(0,o.Y)(x.default,{icon:J.A,size:{size:12,strokeWidth:3},spin:!0})}):null}),X=(0,d.memo)(({loading:e,avatar:t,placement:i,unoptimized:n,addon:l,onClick:r,size:a=40,style:s,alt:d})=>{let{styles:p}=q({avatarSize:a}),h=(0,o.FD)("div",{className:p.avatarContainer,style:s,children:[(0,o.Y)(V.A,{alt:d||t.title,animation:e,avatar:t.avatar,background:t.backgroundColor,onClick:r,size:a,title:t.title,unoptimized:n}),(0,o.Y)(Z,{loading:e,placement:i})]});return l?(0,o.FD)(c.Flexbox,{align:"center",className:p.avatarGroupContainer,gap:8,children:[h,l]}):h}),ee=(0,d.memo)(({borderSpacing:e})=>e?(0,o.Y)("div",{style:{flex:"none",width:e}}):null);var et=i(80122);let ei=(0,d.memo)(({message:e,error:t,placement:i})=>{let{styles:n}=q({placement:i});return t?.message?(0,o.Y)(c.Flexbox,{className:n.errorContainer,children:(0,o.Y)(et.A,{closable:!1,extra:e,showIcon:!0,type:"error",...t})}):e?(0,o.Y)(c.Flexbox,{className:n.errorContainer,children:e}):null});var en=i(88459),eo=i(38759),el=i(37316);let er=(0,d.memo)(({editing:e,id:t,message:i,placement:n,messageExtra:l,renderMessage:r,variant:a,primary:s,onDoubleClick:p,markdownProps:u,disabled:g,className:m})=>{let{t:x}=(0,v.Bd)("common"),{cx:b,styles:f}=q({disabled:g,editing:e,placement:n,primary:s,variant:a}),y=(0,eo.k)(el.v.fontSize),{mobile:Y}=(0,M.Q)(),k=(0,d.useMemo)(()=>({cancel:x("cancel"),confirm:x("ok"),edit:x("edit")}),[]),[w,A]=(0,h.L)(e=>[e.toggleMessageEditing,e.modifyMessageContent]),F=(0,o.Y)(en.A,{classNames:{input:f.editingInput},editButtonSize:"small",editing:e,fontSize:y,fullFeaturedCodeBlock:!0,markdownProps:u,onChange:e=>{A(t,e)},onEditingChange:e=>w(t,e),openModal:Y?e:void 0,text:k,value:i?String(i):""}),C=r?r(F):F;return(0,o.FD)(c.Flexbox,{className:b(f.message,e&&f.editingContainer,m),onDoubleClick:p,children:[C,l&&!e?(0,o.Y)("div",{className:f.messageExtra,children:l}):null]})});var ea=i(2644),es=i.n(ea);let ed=(0,d.memo)(({showTitle:e,placement:t,time:i,avatar:n,titleAddon:l,className:r,style:a})=>{let s,d,{styles:p,cx:h}=q({placement:t,showTitle:e,time:i});return(0,o.FD)(c.Flexbox,{align:"center",className:h(p.name,r),direction:"left"===t?"horizontal":"horizontal-reverse",gap:4,style:a,children:[e?n.title||"untitled":void 0,e?l:void 0,i&&(0,o.Y)("time",{children:(s=es()(),(d=es()(i)).isSame(s,"day")?d.format("HH:mm:ss"):d.isSame(s,"year")?d.format("MM-DD HH:mm:ss"):d.format("YYYY-MM-DD HH:mm:ss"))})]})});var ec=i(57763),ep=i(50243),eh=i(40473),eu=i(5930),eg=i(64811),em=i(62016),ex=i(61520),eb=i(16748),ef=i(22309),ey=i(59202),ev=i(33375),eY=i(87381),ek=i(18234);let ew=(0,d.memo)(({id:e,provider:t})=>{let{t:i}=(0,v.Bd)("modelProvider"),{t:n}=(0,v.Bd)(["modelProvider","error"]),[l,r]=(0,h.L)(e=>[e.delAndRegenerateMessage,e.deleteMessage]),a=(0,eY.u)(t);return(0,o.Y)(ek.A,{bedrockDescription:i("bedrock.unlock.description"),description:n("unlock.apiKey.description",{name:a,ns:"error"}),id:e,onClose:()=>{r(e)},onRecreate:()=>{l(e),r(e)},provider:t})});var eA=i(72242),eF=i(18162),eC=i(29052);let eS=(0,d.memo)(({id:e})=>{let{t}=(0,v.Bd)("error"),[i,n]=(0,eo.k)(e=>[e.openLogin,e.isSignedIn]),l=(0,eF.r)(),r=(0,eo.k)(ex.f.nickName),[a,s]=(0,h.L)(e=>[e.delAndRegenerateMessage,e.deleteMessage]);return(0,o.Y)(eC.Sf,{children:n?(0,o.Y)(eC.BA,{avatar:"\uD83C\uDF1F",description:t("clerkAuth.loginSuccess.desc",{greeting:l}),title:t("clerkAuth.loginSuccess.title",{nickName:r}),children:(0,o.Y)(P.A,{block:!0,onClick:()=>{a(e),s(e)},size:"large",type:"primary",children:t("clerkAuth.loginSuccess.action")})}):(0,o.Y)(eA.A,{onClick:i})})});var eT=i(19061);let ez=()=>(0,o.Y)(ey.A,{active:!0}),eD=(0,ev.default)(()=>i.e(19861).then(i.bind(i,19861)),{loadableGenerated:{webpack:()=>[19861]},loading:ez,ssr:!1}),eB=(0,ev.default)(()=>i.e(57626).then(i.bind(i,57626)),{loadableGenerated:{webpack:()=>[57626]},loading:ez,ssr:!1}),eM=e=>{let{t}=(0,v.Bd)("error"),i=(0,eY.u)(e?.body?.provider||"");return(0,d.useMemo)(()=>{if(!e)return;let n=(e=>{if("string"==typeof e&&(e.includes("Biz")||e.includes("Invalid")))return{extraDefaultExpand:!0,extraIsolate:!0,type:"warning"};switch(e){case ef.T_.SystemTimeNotMatchError:case eb.Y1.PermissionDenied:case eb.Y1.InsufficientQuota:case eb.Y1.ModelNotFound:case eb.Y1.QuotaLimitReached:case eb.Y1.ExceededContextWindow:case eb.Y1.LocationNotSupportError:return{type:"warning"};case eb.Y1.OllamaServiceUnavailable:case eb.Y1.NoOpenAIAPIKey:case eb.Y1.ComfyUIServiceUnavailable:case eb.Y1.InvalidComfyUIArgs:return{extraDefaultExpand:!0,extraIsolate:!0,type:"warning"};default:return}})(e.type);return{message:t(`response.${e.type}`,{provider:i}),...n}},[e])},eN=(0,d.memo)(({data:e,block:t})=>{let i=e.error;if(i?.type){switch(i.type){case eb.Y1.OllamaServiceUnavailable:return(0,o.Y)(eB,{id:e.id});case eb.Y1.OllamaBizError:return(0,o.Y)(eD,{...e});case ef.T_.InvalidClerkUser:return(0,o.Y)(eS,{id:e.id});case eb.Y1.NoOpenAIAPIKey:return(0,o.Y)(ew,{id:e.id,provider:e.error?.body?.provider})}return i.type.toString().includes("Invalid")?(0,o.Y)(ew,{id:e.id,provider:e.error?.body?.provider}):(0,o.Y)(eT.A,{block:t,error:e.error,id:e.id})}}),e$=(0,d.memo)(({data:e,block:t})=>(0,o.Y)(d.Suspense,{fallback:(0,o.Y)(eC.Sf,{children:(0,o.Y)(ey.A,{active:!0,style:{width:"100%"}})}),children:(0,o.Y)(eN,{block:t,data:e})}));var eI=i(7288),eL=i(58244),eP=i(72569),eE=i(13140),eR=i(81687),eU=i(4562),eW=i(62874),ej=i(20393);let e_=(0,r.rU)(({css:e,token:t,isDarkMode:i})=>({container:e`
    cursor: pointer;

    margin-block-start: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: 8px;

    color: ${t.colorText};

    &:hover {
      background: ${i?"":t.colorFillSecondary};
    }
  `,desc:e`
    color: ${t.colorTextTertiary};
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 16px;
    text-overflow: ellipsis;
  `})),eH=(0,d.memo)(({type:e})=>{let{theme:t}=e_();if(!e)return(0,o.Y)(x.default,{icon:J.A,size:28,spin:!0,style:{color:t.colorTextSecondary}});switch(e){case"application/lobe.artifacts.code":return(0,o.Y)(x.default,{icon:W.A,size:28,style:{color:t.colorTextSecondary}});case"application/lobe.artifacts.react":return(0,o.Y)(eR.A,{size:28,style:{color:t.colorTextSecondary}});case"image/svg+xml":return(0,o.Y)(x.default,{icon:eU.A,size:28,style:{color:t.colorTextSecondary}});case"text/html":return(0,o.Y)(x.default,{icon:eW.A,size:28,style:{color:t.colorTextSecondary}});default:return(0,o.Y)(x.default,{color:t.purple,icon:ej.A,size:{size:28,strokeWidth:1.2}})}}),eO=(0,r.rU)(({css:e,token:t,isDarkMode:i})=>({avatar:e`
    border-inline-end: 1px solid ${t.colorSplit};
    background: ${t.colorFillQuaternary};
  `,container:e`
    cursor: pointer;

    margin-block-start: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: 8px;

    color: ${t.colorText};

    box-shadow: ${i?t.boxShadowSecondary:t.boxShadowTertiary};

    &:hover {
      background: ${t.colorFillQuaternary};
    }
  `,desc:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    text-overflow: ellipsis;
  `})),eK=(0,d.memo)(({identifier:e,title:t,type:i,language:n,children:l,id:r})=>{let{t:a}=(0,v.Bd)("chat"),{styles:s,cx:p}=eO(),u=!!l,m=(l||"").toString?.(),b=(0,d.useContext)(B),{message:f}=eL.A.useApp(),[y,k,w,A]=(0,h.L)(e=>[g.R.isMessageGenerating(r)(e),eP.D.isArtifactTagClosed(r)(e),e.openArtifact,e.closeArtifact]),F=()=>{w({id:r,identifier:e,language:n,title:t,type:i})};return(0,d.useEffect)(()=>{u&&y&&F()},[y,u,m,e,t,i,r,n]),(0,o.Y)(c.Flexbox,{className:s.container,gap:16,onClick:()=>{if(eP.D.artifactMessageId(h.L.getState())===r)A();else{if(b)return void f.info(a("artifact.inThread"));F()}},width:"100%",children:(0,o.FD)(c.Flexbox,{align:"center",flex:1,horizontal:!0,children:[(0,o.Y)(Y.default,{className:s.avatar,height:64,horizontal:!0,width:64,children:(0,o.Y)(eH,{type:i})}),(0,o.FD)(c.Flexbox,{gap:4,paddingBlock:8,paddingInline:12,children:[!t&&y?(0,o.Y)(c.Flexbox,{className:p(eE.a),horizontal:!0,children:a("artifact.generating")}):(0,o.Y)(c.Flexbox,{className:p(s.title),children:t||a("artifact.unknownTitle")}),u&&(0,o.FD)(c.Flexbox,{className:s.desc,horizontal:!0,children:[e," \xb7"," ",(0,o.FD)(c.Flexbox,{gap:2,horizontal:!0,children:[!k&&(0,o.Y)("div",{children:(0,o.Y)(x.default,{icon:J.A,spin:!0})}),m?.length]})]})]})]})})});var eG=i(84931),eV=i(12123);let eQ={Component:eK,rehypePlugin:function(){return e=>{(0,eG.YR)(e,(e,t,i)=>{if("element"===e.type&&"p"===e.tagName&&e.children.length>0){let n=e.children[0];if("raw"===n.type&&n.value.startsWith(`<${eI.cZ}`)){let o,l={},r=/(\w+)="([^"]*)"/g;for(;null!==(o=r.exec(n.value));)l[o[1]]=o[2];let a={children:[{type:"text",value:e.children.slice(1,-1).map(e=>"raw"===e.type||"text"===e.type?e.value:"element"===e.type&&"a"===e.tagName?e.children[0].value:"").join("").trim()}],properties:l,tagName:eI.cZ,type:"element"};return i.children.splice(t,1,a),[eV._Z,t]}}else if("raw"===e.type&&e.value.startsWith(`<${eI.cZ}`)){let e={children:[],properties:{},tagName:eI.cZ,type:"element"};return i.children.splice(t,1,e),[eV._Z,t]}})}},scope:"assistant",tag:eI.cZ};var eq=i(5830);let eJ=e=>{if("inlineMath"===e.type)return`$${e.value}$`;if("link"===e.type){let t=e.children?.[0]?eJ(e.children?.[0]):"";return`[${t}](${e.url})`}if(e.children){let t=e.children.map(e=>eJ(e)).join("");if("list"===e.type)return`
${t}
`;if("listItem"===e.type){let i=null!==e.checked?`[${e.checked?"x":" "}] `:"";return`${i}${t}`}return t}return e.value?e.value.replaceAll(/^\s+|\s+$/g," "):(0,eq.l)(e)},eZ=e=>()=>t=>{(0,eG.YR)(t,"html",(t,i,n)=>{if(t.value===`<${e}>`){let o=i+1,l=!1;for(;o<n.children.length;){let t=n.children[o];if("html"===t.type&&t.value===`</${e}>`){l=!0;break}o++}let r=l?o-i+1:n.children.length-i,a={data:{hChildren:[{type:"text",value:n.children.slice(i+1,l?o:void 0).map(e=>"list"===e.type?e.children.map((t,i)=>{let n=e.ordered?`${e.start+i}. `:"- ";return`${n}${eJ(t)}`}).join("\n"):eJ(e)).join("\n\n").trim()}],hName:e},position:t.position,type:`${e}Block`};return n.children.splice(i,r,a),[eV._Z,i+1]}})};var eX=i(20659),e0=i(81490),e1=i(45962),e2=i(76925),e8=i(10376);let e4=(0,r.rU)(({css:e,token:t})=>({container:e`
    overflow: hidden;
    border-radius: ${t.borderRadius}px;
    color: ${t.colorTextTertiary};
    transition: all 0.2s ${t.motionEaseOut};
  `,contentScroll:e`
    max-height: min(40vh, 320px);
    padding-block-end: 8px;
    padding-inline: 8px;
  `,expand:e`
    color: ${t.colorTextTertiary};
  `,header:e`
    min-height: 32px;
    padding-block: 4px;
    padding-inline: 8px 4px;

    transition: background 0.2s ${t.motionEaseOut};
    transition: all 0.2s ${t.motionEaseOut};

    &:hover {
      background: ${t.colorFillQuaternary};
    }
  `,headerExpand:e`
    color: ${t.colorTextSecondary};
  `,shinyText:e`
    color: ${(0,Q.B3)(t.colorText,.45)};

    background: linear-gradient(
      120deg,
      ${(0,Q.B3)(t.colorTextBase,0)} 40%,
      ${t.colorTextSecondary} 50%,
      ${(0,Q.B3)(t.colorTextBase,0)} 60%
    );
    background-clip: text;
    background-size: 200% 100%;

    animation: shine 1.5s linear infinite;

    @keyframes shine {
      0% {
        background-position: 100%;
      }

      100% {
        background-position: -100%;
      }
    }
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 12px;
    text-overflow: ellipsis;
  `})),e3=(0,d.memo)(e=>{let{content:t,duration:i,thinking:n,style:l,citations:r,thinkingAnimated:a}=e,{t:s}=(0,v.Bd)(["components","common"]),{styles:p,cx:h,theme:u}=e4(),[g,m]=(0,d.useState)(!1),b=(0,d.useRef)(null);return(0,d.useEffect)(()=>{m(!!n)},[n]),(0,d.useEffect)(()=>{if(!n||!g)return;let e=b.current;!e||e.scrollHeight-e.scrollTop-e.clientHeight<120&&requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight})},[t,n,g]),(0,d.useEffect)(()=>{if(!g)return;let e=b.current;e&&requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight})},[g]),(0,o.FD)(c.Flexbox,{className:h(p.container,g&&p.expand),style:l,width:"100%",children:[(0,o.FD)(c.Flexbox,{className:h(p.header,g&&p.headerExpand),distribution:"space-between",flex:1,gap:8,horizontal:!0,onClick:()=>{m(!g)},style:{cursor:"pointer"},width:"100%",children:[n?(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,width:"100%",children:[(0,o.Y)(x.default,{color:u.purple,icon:e8.A}),(0,o.Y)(c.Flexbox,{className:p.shinyText,horizontal:!0,children:s("Thinking.thinking")})]}):(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,width:"100%",children:[(0,o.Y)(x.default,{color:g?u.purple:void 0,icon:e8.A}),(0,o.Y)(c.Flexbox,{children:i?s("Thinking.thought",{duration:((i||0)/1e3).toFixed(1)}):s("Thinking.thoughtWithDuration")})]}),(0,o.Y)(c.Flexbox,{gap:4,horizontal:!0,children:g&&t&&(0,o.Y)("div",{onClick:e=>{e.stopPropagation()},children:(0,o.Y)(eX.A,{content:t,size:"small",title:s("copy",{ns:"common"})})})})]}),(0,o.Y)(e1.N,{initial:!1,children:g&&(0,o.Y)(e2.P.div,{animate:"open",exit:"collapsed",initial:"collapsed",style:{overflow:"hidden"},transition:{duration:.2,ease:[.4,0,.2,1]},variants:{collapsed:{opacity:0,width:"auto"},open:{opacity:1,width:"auto"}},children:(0,o.Y)(e0.A,{className:p.contentScroll,ref:b,size:12,children:"string"==typeof t?(0,o.Y)(f.A,{animated:a,citations:r,style:{overflow:"unset"},variant:"chat",children:t}):t})})})]})});var e6=i(13082);let e5={Component:(0,d.memo)(({children:e,id:t})=>{let[i]=(0,h.L)(e=>{let i=e6.E1.getDbMessageById(t)(e);return[!((e,t="")=>{let i=`<${e}>`,n=`</${e}>`;return t.includes(i)&&t.includes(n)})(l.rE,i?.content)]}),n=(0,eo.k)(el.v.transitionMode);return(0,o.Y)(e3,{content:e,style:{width:i?"100%":void 0},thinking:i,thinkingAnimated:"fadeIn"===n&&i})}),remarkPlugin:eZ(eI.rE),scope:"assistant",tag:eI.rE};var e7=i(68096);let e9=i.n(e7)()("lobe-markdown:remark-plugin:self-closing"),te=/([\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g,tt=e=>{let t,i={};for(;null!==(t=te.exec(e));){let[,e,n,o,l]=t;i[e]=n??o??l??!0}return i},ti=e=>()=>{let t=RegExp(`^<${e}(\\s+[^>]*?)?\\s*\\/>\\s*$`),i=RegExp(`<${e}(\\s+[^>]*?)?\\s*\\/>`,"g");return n=>{e9("Plugin execution start for tag: %s",e),e9("Tree: %o",n),e9("Tree type: %s",n?.type),e9("Tree children count: %d",n?.children?.length),n&&Array.isArray(n.children)?n.children.includes(void 0)&&(e9("ERROR: Tree contains undefined children Before Visit!"),e9("Children types: %o",n.children.map(e=>e?.type))):e9("ERROR: Invalid Tree Structure Detected Before Visit! %o",n),e9("---------------------------------------------------"),(0,eG.YR)(n,"html",(i,n,o)=>{e9(">>> Visiting HTML node: %s",i.value);let l=i.value.match(t);if(l&&o&&"number"==typeof n){let[,t]=l,i={data:{hName:e,hProperties:t?tt(t.trim()):{}},type:e};return e9("Replacing HTML node at index %d with %s node: %o",n,e,i),o.children.splice(n,1,i),[eV._Z,n+1]}}),(0,eG.YR)(n,"text",(t,n,o)=>{let l;if(e9('>>> Visiting Text node: "%s"',t.value),!o||"number"!=typeof n||!t.value?.includes(`<${e}`))return;let r=t.value,a=0,s=[];for(i.lastIndex=0;null!==(l=i.exec(r));){let[t,i]=l,n=l.index;n>a&&s.push({type:"text",value:r.slice(a,n)});let o=i?tt(i.trim()):{};s.push({data:{hName:e,hProperties:o},type:e}),a=n+t.length}if(s.length>0)return a<r.length&&s.push({type:"text",value:r.slice(a)}),e9("--- Replacing Text Node Content ---"),e9("Original text node index: %d",n),e9("-----------------------------------"),o.children.splice(n,1,...s),[eV._Z,n+s.length]}),(0,eG.YR)(n,"inlineCode",(i,n,o)=>{if(e9('>>> Visiting inlineCode node: "%s"',i.value),!o||"number"!=typeof n||!i.value?.includes(`<${e}`))return;let l=i.value.match(t);if(l){let[,t]=l,i={data:{hName:e,hProperties:t?tt(t.trim()):{}},type:e};return e9("Replacing inlineCode node at index %d with %s node: %o",n,e,i),o.children.splice(n,1,i),[eV._Z,n+1]}})}};var tn=i(40620);let to={Component:(0,d.memo)(({node:e})=>{let{name:t,path:i,isDirectory:n}=e?.properties||{};return t&&i?(0,o.Y)(tn.E,{isDirectory:!0===n,name:t,path:i}):(console.error("LocalFile Render component missing required properties:",e?.properties),null)},s()),remarkPlugin:ti(eI.Ky),scope:"assistant",tag:eI.Ky};var tl=i(67693);let tr=(0,r.rU)(({css:e,token:t})=>({mention:e`
    cursor: pointer;

    position: relative;

    display: inline;

    margin-inline: 0.25em;
    padding-block: 0.2em;
    padding-inline: 0.4em;
    border-radius: 0.25em;

    font-size: 0.875em;
    line-height: 1;
    color: ${t.colorInfo};
    word-break: break-word;
    white-space: break-spaces;

    background: ${t.colorInfoFillTertiary};

    &:hover {
      background: ${t.colorInfoFillSecondary};
    }
  `})),ta=(0,d.memo)(({children:e,node:t})=>{let{id:i}=t?.properties||{},{t:n}=(0,v.Bd)("chat"),{styles:r}=tr(),a=(0,eg.B)(em.z.currentGroupAgents,s());if("ALL_MEMBERS"===i)return(0,o.FD)("span",{className:r.mention,children:["@",n("memberSelection.allMembers")]});let d=a?.find(e=>e.id===i);return d?(0,o.Y)(tl.A,{arrow:!1,content:(0,o.Y)(c.Flexbox,{gap:12,style:{overflow:"hidden"},width:320,children:(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(V.A,{avatar:d.avatar||l.k_,background:d.backgroundColor??void 0,style:{flex:"none"}}),(0,o.Y)(c.Flexbox,{style:{overflow:"hidden"},children:(0,o.Y)(b.A,{ellipsis:!0,type:"secondary",children:d.description})})]})}),trigger:["click"],children:(0,o.FD)("span",{className:r.mention,children:["@",d.title||e]})}):(0,o.FD)("span",{className:r.mention,children:["@",e||"unknown"]})});ta.displayName="MentionRender";let ts={Component:ta,remarkPlugin:ti(eI.QW),scope:"user",tag:eI.QW},td=[{Component:(0,d.memo)(({children:e,id:t})=>{let[i]=(0,h.L)(e=>{let i=e6.E1.getDbMessageById(t)(e);return[!((e="")=>e.includes("<think>")&&e.includes("</think>"))(i?.content)]}),n=(0,h.L)(e=>{let i=e6.E1.getDbMessageById(t)(e);return i?.search?.citations}),l=(0,eo.k)(el.v.transitionMode);if(i||e)return(0,o.Y)(e3,{citations:n,content:e,thinking:i,thinkingAnimated:"fadeIn"===l&&i})}),remarkPlugin:eZ(eI.Cr),scope:"assistant",tag:eI.Cr},eQ,e5,to,ts],tc=({disableEditing:e,role:t,error:i,id:n,index:o})=>{let[l]=(0,h.L)(e=>[e.toggleMessageEditing]),r=(0,d.use)(p.tf);return(0,d.useCallback)(a=>{!e&&!i&&"default"!==n&&a.altKey&&["assistant","user"].includes(t)&&(l(n,!0),r?.current?.scrollToIndex(o,{align:"start"}))},[t,e])},tp=(e="")=>{let t=e.replace(/^([\S\s]*?)\s*```[^\n]*\n((?:<lobeThinking>[\S\s]*?<\/lobeThinking>\s*\n\s*)?<lobeArtifact[\S\s]*?<\/lobeArtifact>\s*)\n```\s*([\S\s]*?)$/,(e,t="",i,n="")=>[t.trim(),i.trim(),n.trim()].filter(Boolean).join("\n\n"));l.VH.exec(t)&&(t=t.replace(l.VH,e=>e.replaceAll(/\r?\n|\r/g,""))),t=(t=(t=t.replace(/(<\/lobeThinking>)(?:\r?\n)?(<lobeArtifact)/,"$1\n\n$2")).replace(/(<lobeArtifact[^>]*>)\s*```[^\n]*\n([\S\s]*?)(```\n)?(<\/lobeArtifact>)/,(e,t,i,n,o)=>i.trim().startsWith("<!DOCTYPE html")||i.trim().startsWith("<html")?t+i.trim()+o:t+i+(n||"")+o)).replace(/^([\S\s]*?)(<lobeThinking>[\S\s]*?<\/lobeThinking>\s*\n\s*<lobeArtifact[\S\s]*?<\/lobeArtifact>)([\S\s]*?)$/,(e,t,i,n)=>[t.trim(),i.trim(),n.trim()].filter(Boolean).join("\n\n")),l.MT.exec(t)&&(t=t.replace(l.MT,e=>e.replaceAll(/\r?\n|\r/g,"")));let i=/<lobeArtifact\b(?:(?!\/?>)[\S\s])*$/;return i.test(t)&&(t=t.replace(i,"<lobeArtifact>")),t},th=e=>e.replaceAll(/([^\n])\s*<think>/g,"$1\n\n<think>").replaceAll(/<think>\s*([^\n])/g,"<think>\n\n$1").replaceAll(/([^\n])\s*<\/think>/g,"$1\n\n</think>").replaceAll(/<\/think>\s*([^\n])/g,"</think>\n\n$1").replaceAll(/\n{3,}/g,"\n\n");var tu=i(36163),tg=i(50718),tm=i(10903),tx=i(29703),tb=i(28573),tf=i(49460),ty=i(20549),tv=i(43588),tY=i(42507),tk=i(57696),tw=i(49935),tA=i(52851),tF=i(26731),tC=i(17869);let tS=(0,r.rU)(({css:e,token:t,stylish:i,cx:n,responsive:o})=>({preview:n(i.noScrollbar,e`
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

      ${o.mobile} {
        max-height: 40dvh;
      }
    `)})),tT=(0,r.rU)(({responsive:e,token:t,css:i})=>({body:i`
    ${e.mobile} {
      padding-block-end: 68px;
    }
  `,footer:i`
    ${e.mobile} {
      position: absolute;
      inset-block-end: 0;
      inset-inline: 0;

      width: 100%;
      margin: 0;
      padding: 16px;

      background: ${t.colorBgContainer};
    }
  `,sidebar:i`
    flex: none;
    width: max(240px, 25%);
    ${e.mobile} {
      flex: 1;
      width: unset;
      margin-inline: -16px;
    }
  `}));var tz=i(82302),tD=i(95891),tB=i(22880),tM=i(88990),tN=i(45628);let t$=(0,r.rU)(({css:e,token:t,cx:i},n)=>({background:e`
    padding: 24px;

    background-color: ${t.colorBgLayout};
    background-image: url(${(0,tN.b8)("screenshot_background.webp")});
    background-position: center;
    background-size: 120% 120%;
  `,container:i(n&&e`
        overflow: hidden;
        border: 2px solid ${t.colorBorder};
        border-radius: ${t.borderRadiusLG}px;
      `,e`
      background: ${t.colorBgLayout};
    `),footer:e`
    padding: 16px;
    border-block-start: 1px solid ${t.colorBorder};
  `,header:e`
    margin-block-end: -24px;
    padding: 16px;
    border-block-end: 1px solid ${t.colorBorder};
    background: ${t.colorBgContainer};
  `,role:e`
    margin-block-start: 12px;
    padding-block-start: 12px;
    border-block-start: 1px dashed ${t.colorBorderSecondary};
    opacity: 0.75;

    * {
      font-size: 12px !important;
    }
  `,url:e`
    color: ${t.colorTextDescription};
  `})),tI=(0,d.memo)(({title:e,withBackground:t,withFooter:i,message:n,previewId:r="preview"})=>{let[a,s]=(0,w.o)(e=>[tM.e.currentAgentModel(e),tM.e.displayableAgentPlugins(e)]),[d,p,h,u]=(0,eg.B)(e=>[em.z.isInboxSession(e),tC.G.currentAgentDescription(e),tC.G.currentAgentAvatar(e),tC.G.currentAgentBackgroundColor(e)]),{t:g}=(0,v.Bd)("chat"),{styles:x}=t$(t),{styles:b}=tS(),f=d?g("inbox.title"):e,y=d?g("inbox.desc"):p;return(0,o.Y)("div",{className:b.preview,children:(0,o.Y)("div",{className:t?x.background:void 0,id:r,children:(0,o.FD)(c.Flexbox,{className:x.container,gap:16,children:[(0,o.Y)("div",{className:x.header,children:(0,o.FD)(c.Flexbox,{align:"flex-start",gap:12,horizontal:!0,children:[(0,o.Y)(V.A,{avatar:h,background:u,size:40,title:e}),(0,o.Y)(tz.A,{desc:y,tag:(0,o.FD)(c.Flexbox,{gap:4,horizontal:!0,children:[(0,o.Y)(m.A,{model:a}),s?.length>0&&(0,o.Y)(tB.A,{plugins:s})]}),title:f})]})}),(0,o.Y)(c.Flexbox,{height:"100%",style:{paddingTop:24,position:"relative"},width:"100%",children:(0,o.Y)(l8,{id:n.id,index:0})}),i?(0,o.FD)(c.Flexbox,{align:"center",className:x.footer,gap:4,children:[(0,o.Y)(tD.d,{type:"combine"}),(0,o.Y)("div",{className:x.url,children:l.bV})]}):(0,o.Y)("div",{})]})})})}),tL={imageType:tF.yj.JPG,withBackground:!0,withFooter:!0},tP=(0,d.memo)(({message:e,uniqueId:t})=>{let i=(0,eg.B)(tC.G.currentAgentTitle),[n,l]=(0,d.useState)(tL),{t:r}=(0,v.Bd)(["chat","common"]),{styles:a}=tT(),s=t?`preview-${t}`:"preview",{loading:p,onDownload:h,title:u}=(0,tF.aO)({id:`#${s}`,imageType:n.imageType,title:i}),{loading:g,onCopy:m}=(0,tA.g)({id:`#${s}`}),x=[{children:(0,o.Y)(tY.A,{}),label:r("shareModal.withBackground"),layout:"horizontal",minWidth:void 0,name:"withBackground",valuePropName:"checked"},{children:(0,o.Y)(tY.A,{}),label:r("shareModal.withFooter"),layout:"horizontal",minWidth:void 0,name:"withFooter",valuePropName:"checked"},{children:(0,o.Y)(L.A,{options:tF.OM}),label:r("shareModal.imageType"),layout:"horizontal",minWidth:void 0,name:"imageType"}],b=(0,ty.a)(),f=(0,o.FD)(o.FK,{children:[(0,o.Y)(P.A,{block:!0,icon:tk.A,loading:g,onClick:()=>m(),size:b?void 0:"large",type:"primary",children:r("copy",{ns:"common"})}),(0,o.Y)(P.A,{block:!0,loading:p,onClick:h,size:b?void 0:"large",children:r("shareModal.download")})]});return(0,o.FD)(o.FK,{children:[(0,o.FD)(c.Flexbox,{className:a.body,gap:16,horizontal:!b,children:[(0,o.Y)(tI,{title:u,...n,message:e,previewId:s}),(0,o.FD)(c.Flexbox,{className:a.sidebar,gap:12,children:[(0,o.Y)(tv.Ay,{initialValues:tL,items:x,itemsType:"flat",onValuesChange:(e,t)=>l(t),...tw.pC}),!b&&f]})]}),b&&(0,o.Y)(c.Flexbox,{className:a.footer,gap:8,horizontal:!0,children:f})]})});var tE=i(47690);let tR=(0,d.memo)(({content:e})=>{let{styles:t}=tS(),i=(0,ty.a)();return(0,o.Y)("div",{className:t.preview,style:{padding:12},children:(0,o.Y)(f.A,{variant:i?"chat":void 0,children:e})})});var tU=i(24902),tW=i(19530);let tj=(0,tU.A)(`<% messages.forEach(function(chat) { %>

{{chat.content}}

<% }); %>
`,{evaluate:/<%([\S\s]+?)%>/g,interpolate:/{{([\S\s]+?)}}/g}),t_=(0,d.memo)(({item:e})=>{let{t}=(0,v.Bd)(["chat","common"]),{styles:i}=tT(),{message:n}=eL.A.useApp(),l=(0,h.L)(A.e.currentActiveTopic,s()),r=l?.title||t("shareModal.exportTitle"),a=(({messages:e})=>tj({messages:e.filter(e=>e.content!==tW.VH)}))({messages:[e]}).replaceAll("\n\n\n","\n"),d=(0,ty.a)(),p=(0,o.FD)(o.FK,{children:[(0,o.Y)(P.A,{block:!0,icon:tk.A,onClick:async()=>{await (0,tE.l)(a),n.success(t("copySuccess",{defaultValue:"Copy Success",ns:"common"}))},size:d?void 0:"large",type:"primary",children:t("copy",{ns:"common"})}),(0,o.Y)(P.A,{block:!0,onClick:()=>{(0,I.HP)(a,`${r}.md`)},size:d?void 0:"large",children:t("shareModal.downloadFile")})]});return(0,o.FD)(o.FK,{children:[(0,o.FD)(c.Flexbox,{className:i.body,gap:16,horizontal:!d,children:[(0,o.Y)(tR,{content:a}),(0,o.Y)(c.Flexbox,{className:i.sidebar,gap:12,children:!d&&p})]}),d&&(0,o.Y)(c.Flexbox,{className:i.footer,gap:8,horizontal:!0,children:p})]})});var tH=((n=tH||{}).PDF="pdf",n.Screenshot="screenshot",n.Text="text",n);let tO=(0,d.memo)(({onCancel:e,open:t,message:i})=>{let[n,l]=(0,d.useState)("screenshot"),{t:r}=(0,v.Bd)("chat"),a=(0,d.useId)(),s=(0,ty.a)(),p=(0,d.useMemo)(()=>[{children:(0,o.Y)(tP,{message:i,mobile:s,uniqueId:a}),key:"screenshot",label:r("shareModal.screenshot")},{children:(0,o.Y)(t_,{item:i}),key:"text",label:r("shareModal.text")},{children:(0,o.Y)(tf.A,{message:i}),key:"pdf",label:r("shareModal.pdf")}],[s,i,a,r]);return(0,o.Y)(tx.A,{allowFullscreen:!0,centered:!1,destroyOnHidden:!0,footer:null,onCancel:e,open:t,title:r("share",{ns:"common"}),width:1440,children:(0,o.FD)(c.Flexbox,{gap:s?8:24,children:[(0,o.Y)(L.A,{block:!0,onChange:e=>l(e),options:p.map(e=>({label:e?.label,value:e?.key})),style:{width:"100%"},value:n,variant:"filled"}),(0,o.Y)(tb.A,{activeKey:n,indicator:{align:"center",size:e=>e-20},items:p,onChange:e=>l(e),renderTabBar:()=>(0,o.Y)(o.FK,{})})]})})});var tK=i(78135),tG=i(32235),tV=i(48309),tQ=i(80201),tq=i(93075),tJ=i(55612),tZ=i(38717),tX=i(54084),t0=i(3675),t1=i(42776),t2=i(69687),t8=i(6182);let t4=(0,r.AH)`
  .ant-dropdown-menu-sub {
    overflow-y: scroll;
    max-height: 400px;
  }
`,t3=({hasThread:e,isContinuing:t,isRegenerating:i}={})=>{let{t:n}=(0,v.Bd)(["common","chat"]);return(0,d.useMemo)(()=>({branching:{icon:tK.A,key:"branching",label:n("branching")},collapse:{icon:tG.A,key:"collapse",label:n("messageAction.collapse",{ns:"chat"})},continueGeneration:{disabled:t,icon:tV.A,key:"continueGeneration",label:n("messageAction.continueGeneration",{ns:"chat"}),spin:t},copy:{icon:tk.A,key:"copy",label:n("copy",{defaultValue:"Copy"})},del:{danger:!0,disabled:e,icon:tQ.A,key:"del",label:e?n("messageAction.deleteDisabledByThreads",{ns:"chat"}):n("delete")},delAndRegenerate:{disabled:e||i,icon:tq.A,key:"delAndRegenerate",label:n("messageAction.delAndRegenerate",{ns:"chat"})},divider:{type:"divider"},edit:{icon:tJ.A,key:"edit",label:n("edit")},expand:{icon:tZ.A,key:"expand",label:n("messageAction.expand",{ns:"chat"})},export:{icon:j.A,key:"export",label:"导出为 PDF"},regenerate:{disabled:i,icon:tX.A,key:"regenerate",label:n("regenerate"),spin:i},share:{icon:t0.A,key:"share",label:n("share")},translate:{children:t8.Fp.map(e=>({key:e.value,label:n(`lang.${e.value}`)})),icon:t1.A,key:"translate",label:n("translate.action",{ns:"chat"}),popupClassName:(0,r.cx)(t4)},tts:{icon:t2.A,key:"tts",label:n("tts.action",{ns:"chat"})}}),[e,t,i])},t6=(0,d.memo)(({onActionClick:e})=>{let{regenerate:t,copy:i,edit:n,del:l,divider:r}=t3();return(0,o.Y)(tu.A,{items:[t,l],menu:{items:[n,i,r,l]},onActionClick:e})}),t5=(0,d.memo)(({id:e,data:t,index:i})=>{let{error:n,tools:l}=t,[r,a,s,c]=(0,h.L)(t=>[!!t.activeThreadId,tm.Z.hasThreadBySourceMsgId(e)(t),g.R.isMessageRegenerating(e)(t),g.R.isMessageCollapsed(e)(t)]),u=(0,eg.B)(em.z.isCurrentSessionGroupSession),[m,x]=(0,d.useState)(!1),{regenerate:b,edit:f,delAndRegenerate:y,copy:Y,divider:k,del:w,branching:A,share:F,tts:C,translate:S,collapse:T,expand:z}=t3({hasThread:a,isRegenerating:s}),D=!!l,M=(0,d.useContext)(B),N=r||M,$=(0,d.useMemo)(()=>D?[y,Y]:[f,Y,N||u?null:A].filter(Boolean),[N,D,u,y,Y,f,A]),{t:I}=(0,v.Bd)("common"),L=(0,tg.useSearchParams)().get("topic"),[P,E,R,U,W,j,_,H,O,K,G]=(0,h.L)(e=>[e.deleteMessage,e.regenerateAssistantMessage,e.translateMessage,e.ttsMessage,e.delAndRegenerateMessage,e.copyMessage,e.openThreadCreator,e.resendThreadMessage,e.delAndResendThreadMessage,e.toggleMessageEditing,e.toggleMessageCollapsed]),{message:V}=eL.A.useApp(),Q=(0,d.use)(p.tf),q=(0,d.useCallback)(async n=>{if("edit"===n.key&&(K(e,!0),Q?.current?.scrollToIndex(i,{align:"start"})),t){switch(n.key){case"copy":await j(e,t.content),V.success(I("copySuccess",{defaultValue:"Copy Success"}));break;case"branching":if(!L){V.warning(I("branchingRequiresSavedTopic"));break}_(e);break;case"del":P(e);break;case"regenerate":M?H(e):E(e),t.error&&P(e);break;case"delAndRegenerate":M?O(e):W(e);break;case"tts":U(e);break;case"collapse":case"expand":G(e);break;case"share":x(!0)}"translate"===n.keyPath.at(-1)&&R(e,n.keyPath[0])}},[t,L]);return n?(0,o.Y)(t6,{onActionClick:q}):(0,o.FD)(o.FK,{children:[(0,o.Y)(tu.A,{items:$,menu:{items:[f,Y,c?z:T,k,C,S,k,F,k,b,y,w]},onActionClick:q}),(0,o.Y)(tO,{message:t,onCancel:()=>{x(!1)},open:m})]})}),t7=(0,d.memo)(({children:e})=>(0,o.FD)("div",{children:[(0,o.Y)(C.A,{style:{margin:"0 0 8px 0"}}),e]}));var t9=i(15346),ie=i(76694),it=i(88490),ii=i(56003),io=i(17917);let il=(0,d.memo)(({onRetry:e,error:t,onDelete:i,audio:n,isLoading:l,onInitPlay:r})=>{let{t:a}=(0,v.Bd)("chat");return(0,o.Y)(c.Flexbox,{align:"center",horizontal:!0,style:{minWidth:200,width:"100%"},children:t?(0,o.Y)(et.A,{action:(0,o.Y)(P.A,{onClick:e,size:"small",type:"primary",children:a("retry",{ns:"common"})}),closable:!0,extra:t.body&&(0,o.Y)(R.A,{actionIconSize:"small",language:"json",variant:"borderless",children:JSON.stringify(t.body,null,2)}),message:t.message,onClose:i,style:{alignItems:"center",width:"100%"},type:"error"}):(0,o.FD)(o.FK,{children:[(0,o.Y)(io.A,{allowPause:!1,audio:n,buttonSize:"small",isLoading:l,onInitPlay:r,onLoadingStop:stop,timeRender:"tag",timeStyle:{margin:0}}),(0,o.Y)(N.A,{icon:tQ.A,onClick:i,size:"small",title:a("tts.clear")})]})})}),ir=(0,d.memo)(({file:e,id:t})=>{let i=(0,ii.x)(e=>e.useFetchTTSFile),[n]=(0,h.L)(e=>[e.clearTTS]),{data:l,isLoading:r}=i(e||null),{isLoading:a,...s}=(0,it.R)({src:l?l.url:""}),c=(0,d.useCallback)(()=>{n(t)},[t]);if(s&&!r)return(0,o.Y)(il,{audio:s,isLoading:a,onDelete:c})});var ia=i(79998),is=i(14980);let id=(0,d.memo)(({id:e,content:t,contentMd5:i,file:n})=>{let[l,r]=(0,d.useState)(!1),[a,s]=(0,d.useState)(),c=(0,ii.x)(e=>e.uploadTTSByArrayBuffers),{t:p}=(0,v.Bd)("chat"),[u,g]=(0,h.L)(e=>[e.ttsMessage,e.clearTTS]),m=(0,d.useCallback)(e=>{s({body:e,message:p("tts.responseError",{ns:"error"}),type:500})},[p]),{isGlobalLoading:x,audio:b,start:f,stop:y,response:Y}=(0,is.F)(t,{onError:e=>{y(),m(e)},onErrorRetry:e=>{y(),m(e)},onSuccess:async()=>{if(!Y||Y.ok)return;let e=await (0,ia.EB)(Y);e?s(e):m(),y()},onUpload:async(t,n)=>{let o=await c(e,n);u(e,{contentMd5:i,file:o,voice:t})}}),k=(0,d.useCallback)(()=>{l||(f(),r(!0))},[l,f]),w=(0,d.useCallback)(()=>{y(),g(e)},[y,e]),A=(0,d.useCallback)(()=>{s(void 0),f()},[f]);return(0,d.useEffect)(()=>{n||setTimeout(()=>{k()},100)},[n]),(0,o.Y)(il,{audio:b,error:a,isLoading:x,onDelete:w,onInitPlay:k,onRetry:A})}),ic=(0,d.memo)(e=>{let{file:t,voice:i,content:n,contentMd5:l}=e,r=(0,eu.o)(ie.c.currentLanguage),a=(0,w.o)(tM.e.currentAgentTTSVoice(r)),s=(0,d.useMemo)(()=>t9.VV.hashStr(n).toString(),[n]),c=l===s;return(0,o.Y)(t&&a===i&&c?ir:id,{...e,contentMd5:s})},(e,t)=>e.id===t.id&&e.content===t.content);var ip=i(64910),ih=i(20439),iu=i(70510),ig=i(36310);let im=(0,d.memo)(({content:e="",from:t,to:i,id:n,loading:l})=>{let a=(0,r.DP)(),{t:s}=(0,v.Bd)("common"),[p,u]=(0,d.useState)(!0),g=(0,h.L)(e=>e.clearTranslate),{message:m}=eL.A.useApp();return(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.FD)(c.Flexbox,{align:"center",horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{children:(0,o.FD)(c.Flexbox,{gap:4,horizontal:!0,children:[(0,o.Y)(F.A,{style:{margin:0},children:t?s(`lang.${t}`):"..."}),(0,o.Y)(x.default,{color:a.colorTextTertiary,icon:ip.A}),(0,o.Y)(F.A,{children:s(`lang.${i}`)})]})}),(0,o.FD)(c.Flexbox,{horizontal:!0,children:[(0,o.Y)(N.A,{icon:tk.A,onClick:async()=>{await (0,tE.l)(e),m.success(s("copySuccess"))},size:"small",title:s("copy")}),(0,o.Y)(N.A,{icon:tQ.A,onClick:()=>{g(n)},size:"small",title:s("translate.clear",{ns:"chat"})}),(0,o.Y)(N.A,{icon:p?ih.A:iu.A,onClick:()=>{u(!p)},size:"small"})]})]}),p?l&&!e?(0,o.Y)(ig.A,{}):(0,o.Y)(f.A,{variant:"chat",children:e}):null]})});var ix=i(37618),ib=i(58393),iy=i(98401),iv=i(88980),iY=i(94147),ik=i(81196),iw=i(31065),iA=i(9402);let iF=(0,d.memo)(({value:e,duration:t=3e3,formatter:i})=>{let[n,o]=(0,d.useState)(e),l=(0,d.useRef)(void 0),r=(0,d.useRef)(void 0),a=(0,d.useRef)(e);return(0,d.useEffect)(()=>{let i=a.current,n=e-i;if(0===n)return;let s=d=>{r.current||(r.current=d);let c=Math.min((d-r.current)/t,1);o(i+n*(1-(1-c)**3)),c<1?l.current=requestAnimationFrame(s):(a.current=e,r.current=void 0)};return l.current=requestAnimationFrame(s),()=>{l.current&&cancelAnimationFrame(l.current)}},[e,t]),i?i(n):n.toString()});var iC=i(60317),iS=i(37412),iT=i(92353),iz=i(73909),iD=i(3201),iB=i(27019);let iM=e=>{let t=(0,iC.uE)(e),i=(0,iC.H1)(e),n=(0,iC.os)(e),o=(0,iC.Om)(e),l=t?(0,iC.$3)(t,e?.currency):"0",r=n?(0,iC.$3)(n,e?.currency):"0",a=o?(0,iC.$3)(o,e?.currency):"0",s=i?(0,iC.$3)(i,e?.currency):"0";return{cachedInput:Number(r),input:Number(l),output:Number(s),writeCacheInput:Number(a)}},iN=(0,r.rU)(({css:e,token:t})=>({container:e`
      font-size: 12px;
    `,desc:e`
      line-height: 12px;
      color: ${t.colorTextDescription};
    `,pricing:e`
      font-size: 12px;
      color: ${t.colorTextSecondary};
    `})),i$=(0,d.memo)(({pricing:e,id:t,provider:i,displayName:n})=>{let{t:l}=(0,v.Bd)("chat"),{styles:r}=iN(),a=(0,eu.o)(iw.I.isShowCredit)&&!!e,s=(0,eu.o)(e=>e.updateSystemStatus),d=iM(e||{units:[]});return(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.FD)(c.Flexbox,{align:"center",className:r.container,flex:1,gap:40,horizontal:!0,justify:"space-between",children:[(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(ix.A,{model:t,size:22}),(0,o.FD)(c.Flexbox,{flex:1,gap:2,style:{minWidth:0},children:[(0,o.Y)(c.Flexbox,{align:"center",gap:8,horizontal:!0,style:{lineHeight:"12px"},children:n||t}),(0,o.Y)("span",{className:r.desc,children:i})]})]}),!!e&&(0,o.Y)(c.Flexbox,{children:(0,o.Y)(L.A,{onChange:e=>{s({isShowCredit:"credit"===e})},options:[{label:"Token",value:"token"},{label:(0,o.Y)(iS.A,{title:l("messages.modelCard.creditTooltip"),children:l("messages.modelCard.credit")}),value:"credit"}],size:"small",value:a?"credit":"token"})})]}),a?(0,o.FD)(c.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{}),(0,o.FD)(c.Flexbox,{align:"center",className:r.pricing,gap:8,horizontal:!0,children:[l("messages.modelCard.creditPricing"),":",(0,iC.os)(e)&&(0,o.Y)(iS.A,{title:l("messages.modelCard.pricing.inputCachedTokens",{amount:d.cachedInput}),children:(0,o.FD)(c.Flexbox,{gap:2,horizontal:!0,children:[(0,o.Y)(x.default,{icon:iT.A}),d.cachedInput]})}),(0,iC.Om)(e)&&(0,o.Y)(iS.A,{title:l("messages.modelCard.pricing.writeCacheInputTokens",{amount:d.writeCacheInput}),children:(0,o.FD)(c.Flexbox,{gap:2,horizontal:!0,children:[(0,o.Y)(x.default,{icon:iz.A}),d.writeCacheInput]})}),(0,o.Y)(iS.A,{title:l("messages.modelCard.pricing.inputTokens",{amount:d.input}),children:(0,o.FD)(c.Flexbox,{gap:2,horizontal:!0,children:[(0,o.Y)(x.default,{icon:iD.A}),d.input]})}),(0,o.Y)(iS.A,{title:l("messages.modelCard.pricing.outputTokens",{amount:d.output}),children:(0,o.FD)(c.Flexbox,{gap:2,horizontal:!0,children:[(0,o.Y)(x.default,{icon:iB.A}),d.output]})})]})]}):(0,o.Y)("div",{style:{height:18}})]})});var iI=i(30598),iL=i.n(iI);let iP=(0,d.memo)(({data:e,showIcon:t})=>{let i=(0,r.DP)(),n=e.reduce((e,t)=>e+t.value,0);return(0,o.FD)(c.Flexbox,{gap:8,style:{position:"relative"},width:"100%",children:[(0,o.Y)(c.Flexbox,{height:6,horizontal:!0,style:{background:0===n?i.colorFill:void 0,borderRadius:3,overflow:"hidden",position:"relative"},width:"100%",children:e.map(e=>(0,o.Y)(c.Flexbox,{height:"100%",style:{background:e.color,flex:e.value}},e.id))}),(0,o.Y)(c.Flexbox,{children:e.map(e=>{let n;return(0,o.FD)(c.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"space-between",children:[(0,o.FD)(c.Flexbox,{align:"center",gap:4,horizontal:!0,children:[t&&(0,o.Y)("div",{style:{background:e.color,borderRadius:"50%",flex:"none",height:6,width:6}}),(0,o.Y)("div",{style:{color:i.colorTextSecondary},children:e.title})]}),(0,o.Y)("div",{style:{fontWeight:500},children:(n=e.value,iL()(n).format("0,0"))})]},e.id)})})]})});var iE=i(63485);let iR=(e,t)=>t?parseInt((e*t).toFixed(0)):"-",iU=(0,d.memo)(({usage:e,performance:t,model:i,provider:n})=>{let l,a,s,d,p,h,u,g,m,b,f,y,k,w,A,{t:F}=(0,v.Bd)("chat"),S=(0,r.DP)(),T=(0,ty.a)(),z=(0,eu.o)(iw.I.tokenDisplayFormatShort),D=(0,eu.o)(e=>e.updateSystemStatus),B=(0,iY.d)(ik.g.getModelCard(i,n)),M=(0,eu.o)(iw.I.isShowCredit)&&!!B?.pricing,N=(l=e.inputTextTokens||e.inputTokens||0,a=e.totalInputTokens||e.inputTokens||0,s=e.totalOutputTokens||e.outputTokens||0,d=e.outputReasoningTokens||e.reasoningTokens||0,p=e.outputImageTokens||e.imageTokens||0,h=e.outputTextTokens?e.outputTextTokens:s-d-(e.outputAudioTokens||0)-p,u=e.inputWriteCacheTokens||0,g=e.inputCachedTokens||e.cachedTokens||0,m=e?.inputCacheMissTokens?e?.inputCacheMissTokens:a-(g||0),b=iM(B?.pricing||{units:[]}),f=m?iR(m,b.input):0,y=g?iR(g,b.cachedInput):0,k=u?iR(u,b.writeCacheInput):0,w=s?iR(s,b.output):0,A=a?iR(a,b.input):0,{inputAudio:e.inputAudioTokens?{credit:iR(e.inputAudioTokens,(0,iE.Px)(B?.pricing)),token:e.inputAudioTokens}:void 0,inputCacheMiss:m?{credit:f,token:m}:void 0,inputCached:g?{credit:y,token:g}:void 0,inputCachedWrite:u?{credit:k,token:u}:void 0,inputCitation:e.inputCitationTokens?{credit:iR(e.inputCitationTokens,b.input),token:e.inputCitationTokens}:void 0,inputText:l?{credit:iR(l,b.input),token:l}:void 0,outputAudio:e.outputAudioTokens?{credit:iR(e.outputAudioTokens,(0,iE.EO)(B?.pricing)),id:"outputAudio",token:e.outputAudioTokens}:void 0,outputImage:p?{credit:iR(p,b.output),id:"outputImage",token:p}:void 0,outputReasoning:d?{credit:iR(d,b.output),token:d}:void 0,outputText:h?{credit:iR(h,b.output),token:h}:void 0,totalInput:a?{credit:A,token:a}:void 0,totalOutput:s?{credit:w,token:s}:void 0,totalTokens:e.totalTokens?{credit:f+y+k+w,token:e.totalTokens}:void 0}),$=[!!N.inputAudio&&{color:S.cyan9,id:"reasoning",title:F("messages.tokenDetails.inputAudio"),value:M?N.inputAudio.credit:N.inputAudio.token},!!N.inputCitation&&{color:S.orange,id:"inputText",title:F("messages.tokenDetails.inputCitation"),value:M?N.inputCitation.credit:N.inputCitation.token},!!N.inputText&&{color:S.green,id:"inputText",title:F("messages.tokenDetails.inputText"),value:M?N.inputText.credit:N.inputText.token}].filter(Boolean),I=[!!N.outputReasoning&&{color:S.pink,id:"reasoning",title:F("messages.tokenDetails.reasoning"),value:M?N.outputReasoning.credit:N.outputReasoning.token},!!N.outputImage&&{color:S.purple,id:"outputImage",title:F("messages.tokenDetails.outputImage"),value:M?N.outputImage.credit:N.outputImage.token},!!N.outputAudio&&{color:S.cyan9,id:"outputAudio",title:F("messages.tokenDetails.outputAudio"),value:M?N.outputAudio.credit:N.outputAudio.token},!!N.outputText&&{color:S.green,id:"outputText",title:F("messages.tokenDetails.outputText"),value:M?N.outputText.credit:N.outputText.token}].filter(Boolean),L=[!!N.inputCacheMiss&&{color:S.colorFill,id:"uncachedInput",title:F("messages.tokenDetails.inputUncached"),value:M?N.inputCacheMiss.credit:N.inputCacheMiss.token},!!N.inputCached&&{color:S.orange,id:"inputCached",title:F("messages.tokenDetails.inputCached"),value:M?N.inputCached.credit:N.inputCached.token},!!N.inputCachedWrite&&{color:S.yellow,id:"cachedWriteInput",title:F("messages.tokenDetails.inputWriteCached"),value:M?N.inputCachedWrite.credit:N.inputCachedWrite.token},!!N.totalOutput&&{color:S.colorSuccess,id:"output",title:F("messages.tokenDetails.output"),value:M?N.totalOutput.credit:N.totalOutput.token}].filter(Boolean),P=M&&N.totalTokens?N.totalTokens.credit:N.totalTokens.token,E=(0,iA.ZV)(P),R=(0,iA.ZV)(N.totalTokens.credit/N.totalTokens.token,2),U=t?.tps?(0,iA.ZV)(t.tps,2):void 0,W=t?.ttft?(0,iA.ZV)(t.ttft/1e3,2):void 0;return(0,o.Y)(tl.A,{arrow:!1,content:(0,o.FD)(c.Flexbox,{gap:8,style:{minWidth:200},children:[B&&(0,o.Y)(i$,{...B,provider:n}),(0,o.FD)(c.Flexbox,{gap:20,children:[$.length>1&&(0,o.FD)(c.Flexbox,{gap:4,children:[(0,o.Y)(c.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"space-between",width:"100%",children:(0,o.Y)("div",{style:{color:S.colorTextDescription,fontSize:12},children:F("messages.tokenDetails.inputTitle")})}),(0,o.Y)(iP,{data:$,showIcon:!0})]}),I.length>1&&(0,o.FD)(c.Flexbox,{gap:4,children:[(0,o.Y)(c.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"space-between",width:"100%",children:(0,o.Y)("div",{style:{color:S.colorTextDescription,fontSize:12},children:F("messages.tokenDetails.outputTitle")})}),(0,o.Y)(iP,{data:I,showIcon:!0})]}),(0,o.FD)(c.Flexbox,{children:[(0,o.Y)(iP,{data:L,showIcon:!0}),(0,o.Y)(C.A,{style:{marginBlock:8}}),(0,o.FD)(c.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{style:{color:S.colorTextSecondary},children:F("messages.tokenDetails.total")}),(0,o.Y)("div",{style:{fontWeight:500},children:E})]}),M&&(0,o.FD)(c.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{style:{color:S.colorTextSecondary},children:F("messages.tokenDetails.average")}),(0,o.Y)("div",{style:{fontWeight:500},children:R})]}),U&&(0,o.FD)(c.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"space-between",children:[(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,children:[(0,o.Y)("div",{style:{color:S.colorTextSecondary},children:F("messages.tokenDetails.speed.tps.title")}),(0,o.Y)(iv.A,{title:F("messages.tokenDetails.speed.tps.tooltip")})]}),(0,o.Y)("div",{style:{fontWeight:500},children:U})]}),W&&(0,o.FD)(c.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"space-between",children:[(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,children:[(0,o.Y)("div",{style:{color:S.colorTextSecondary},children:F("messages.tokenDetails.speed.ttft.title")}),(0,o.Y)(iv.A,{title:F("messages.tokenDetails.speed.ttft.tooltip")})]}),(0,o.FD)("div",{style:{fontWeight:500},children:[W,"s"]})]})]})]})]}),placement:"top",trigger:T?["click"]:["hover"],children:(0,o.FD)(Y.default,{gap:2,horizontal:!0,onClick:e=>{T||(e.preventDefault(),e.stopPropagation(),D({tokenDisplayFormatShort:!z}))},style:{cursor:T?"default":"pointer"},children:[(0,o.Y)(x.default,{icon:M?ib.A:iy.A}),(0,o.Y)(iF,{duration:1500,formatter:e=>{let t=Math.round(e);return z?(0,iA.U2)(t).toLowerCase?.():new Intl.NumberFormat("en-US").format(t)},value:P},M?"credit":"token")]})})}),iW=(0,r.rU)(({token:e,css:t,cx:i})=>({container:i(t`
    font-size: 12px;
    color: ${e.colorTextQuaternary};
  `)})),ij=(0,d.memo)(({model:e,usage:t,performance:i,provider:n})=>{let{styles:l}=iW();return(0,o.FD)(c.Flexbox,{align:"center",className:l.container,gap:12,horizontal:!0,justify:"space-between",children:[(0,o.FD)(Y.default,{gap:4,horizontal:!0,style:{fontSize:12},children:[(0,o.Y)(ix.A,{model:e,type:"mono"}),e]}),!!t?.totalTokens&&(0,o.Y)(iU,{model:e,performance:i,provider:n,usage:t})]})},s()),i_=(0,d.memo)(({extra:e,id:t,content:i,performance:n,usage:r,tools:a,provider:s,model:d})=>{let p=(0,h.L)(g.R.isMessageGenerating(t));return(0,o.FD)(c.Flexbox,{gap:8,style:{marginTop:a?.length?8:4},children:[i!==l.m5&&d&&(0,o.Y)(ij,{model:d,performance:n,provider:s,usage:r}),(0,o.FD)(o.FK,{children:[!!e?.tts&&(0,o.Y)(t7,{children:(0,o.Y)(ic,{content:i,id:t,loading:p,...e?.tts})}),!!e?.translate&&(0,o.Y)(t7,{children:(0,o.Y)(im,{id:t,loading:p,...e?.translate})})]})]})});var iH=i(3431);let iO=(0,d.memo)(({id:e,editableContent:t,content:i,isToolCallGenerating:n,addIdOnDOM:l=!0})=>{let r=(0,h.L)(g.R.isMessageEditing(e));if(!n)return i&&(i!==tW.VH||r)?(0,o.Y)("div",{id:l?e:void 0,children:t}):(0,o.Y)(ig.A,{})});var iK=i(31311),iG=i(14966),iV=i(55632);let iQ=(0,d.memo)(({items:e})=>(0,o.Y)(iK.A,{children:(0,o.Y)(iG.A,{items:e,renderItem:iV.A})}));var iq=i(74047);let iJ=(0,d.memo)(({id:e,content:t})=>{let{t:i}=(0,v.Bd)("chat"),n=(0,h.L)(e=>e.toggleMessageCollapsed);return(0,o.FD)(c.Flexbox,{children:[(0,o.Y)(iq.A,{children:(0,o.Y)(f.A,{variant:"chat",children:t?.slice(0,100)})}),(0,o.Y)(c.Flexbox,{padding:4,children:(0,o.Y)(P.A,{block:!0,color:"default",onClick:()=>{n(e,!1)},size:"small",variant:"filled",children:i("chatList.expandMessage")})})]})});var iZ=i(19193),iX=i(54759),i0=i(83838);let i1=(0,r.rU)(({css:e,token:t,isDarkMode:i})=>({badge:e`
    padding-block: 4px;
    padding-inline: 6px;
    border-radius: 2222px;

    font-size: 12px;
    line-height: 12px;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillSecondary};
  `,container:e`
    cursor: pointer;

    width: fit-content;
    padding-block: 6px;
    padding-inline: 8px;
    padding-inline-end: 12px;
    border-radius: 8px;

    color: ${t.colorText};

    background: ${(0,Q.a)(.1,t.colorBgElevated)};
    box-shadow: ${t.boxShadowTertiary};

    transition: all 0.2s;

    &:hover {
      background: ${i?(0,Q.a)(.15,t.colorBgElevated):""};
      box-shadow: ${t.boxShadowSecondary};
    }
  `,filename:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 12px;
    text-overflow: ellipsis;
  `,mobile:e`
    width: 100%;
  `})),i2=(0,d.memo)(({id:e,fileId:t,similarity:i,text:n,filename:l,fileType:r})=>{let{styles:a,cx:s}=i1(),d=(0,h.L)(e=>e.openFilePreview),p=(0,ty.a)();return(0,o.FD)(c.Flexbox,{align:"center",className:s(a.container,p&&a.mobile),gap:4,horizontal:!0,onClick:i=>{i.stopPropagation(),d({chunkId:e,chunkText:n,fileId:t})},children:[(0,o.Y)(i0.A,{fileName:l,fileType:r,size:20,variant:"raw"}),(0,o.FD)(c.Flexbox,{gap:12,horizontal:!0,justify:"space-between",style:{maxWidth:200},children:[(0,o.Y)(b.A,{ellipsis:!0,children:l}),i&&(0,o.Y)(iS.A,{title:i,children:(0,o.Y)(Y.default,{className:a.badge,children:i.toFixed(1)})})]})]},e)}),i8=(0,r.rU)(({css:e,token:t,isDarkMode:i})=>({container:e`
    cursor: pointer;

    padding-block: 8px;
    padding-inline: 12px;
    padding-inline-end: 12px;
    border-radius: 8px;

    color: ${t.colorText};

    background: ${t.colorFillTertiary};

    &:hover {
      background: ${i?"":t.colorFillSecondary};
    }
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 12px;
    text-overflow: ellipsis;
  `})),i4=(0,d.memo)(({data:e})=>{let{t}=(0,v.Bd)("chat"),{styles:i,theme:n}=i8(),[l,r]=(0,d.useState)(!1);return(0,o.FD)(c.Flexbox,{className:i.container,gap:16,onClick:()=>{r(!l)},width:"100%",children:[(0,o.FD)(c.Flexbox,{distribution:"space-between",flex:1,horizontal:!0,children:[(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,children:[(0,o.Y)(x.default,{color:n.geekblue,icon:iZ.A})," ",t("rag.referenceChunks")]}),(0,o.Y)(x.default,{icon:l?ih.A:iX.A})]}),l&&(0,o.Y)(c.Flexbox,{gap:8,horizontal:!0,wrap:"wrap",children:e.map((e,t)=>(0,o.Y)(i2,{index:t,...e},e.id))})]})}),i3=(0,r.rU)(({css:e,token:t},i=2.5)=>({background:e`
    position: absolute;
    inset: 0;

    aspect-ratio: 1;
    width: 100%;
    border-radius: 50%;

    background: ${t.colorFill};

    mask: radial-gradient(farthest-side, #0000 calc(100% - ${i}px), #000 0);
  `,container:e`
    position: relative;
    width: 13px;
    height: 13px;
  `,loader:e`
    position: absolute;
    inset: 0;

    aspect-ratio: 1;
    width: 100%;
    border-radius: 50%;

    background:
      radial-gradient(farthest-side, ${t.colorTextSecondary} 94%, #0000) top/ ${i}px
        ${i}px no-repeat,
      conic-gradient(#0000 50%, ${t.colorTextSecondary});

    mask: radial-gradient(farthest-side, #0000 calc(100% - ${i}px), #000 0);

    animation: small-loader-anim 1s infinite linear;

    @keyframes small-loader-anim {
      100% {
        transform: rotate(1turn);
      }
    }
  `})),i6=(0,d.memo)(()=>{let{styles:e}=i3();return(0,o.FD)("div",{className:e.container,children:[(0,o.Y)("div",{className:e.loader}),(0,o.Y)("div",{className:e.background})]})}),i5=(0,r.rU)(({token:e})=>({shinyText:(0,eE.f)(e)})),i7=()=>{let{styles:e}=i5(),{t}=(0,v.Bd)("chat");return(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(i6,{}),(0,o.Y)(c.Flexbox,{className:e.shinyText,horizontal:!0,children:t("intentUnderstanding.title")})]})},i9=(0,d.memo)(({content:e="",duration:t,id:i})=>{let n=(0,h.L)(iH.B.isMessageInReasoning(i)),l=(0,eo.k)(el.v.transitionMode);return(0,o.Y)(e3,{content:e,duration:t,thinking:n,thinkingAnimated:"fadeIn"===l&&n})});var ne=i(71220),nt=i(65101);let ni=(0,r.rU)(({css:e,token:t,isDarkMode:i})=>({container:e`
    width: fit-content;
    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 6px;

    color: ${t.colorTextTertiary};

    &:hover {
      background: ${i?t.colorFillQuaternary:t.colorFillTertiary};
    }
  `,expand:e`
    background: ${i?t.colorFillQuaternary:t.colorFillTertiary} !important;
  `,shinyText:e`
    color: ${(0,Q.B3)(t.colorText,.45)};

    background: linear-gradient(
      120deg,
      ${(0,Q.B3)(t.colorTextBase,0)} 40%,
      ${t.colorTextSecondary} 50%,
      ${(0,Q.B3)(t.colorTextBase,0)} 60%
    );
    background-clip: text;
    background-size: 200% 100%;

    animation: shine 1.5s linear infinite;

    @keyframes shine {
      0% {
        background-position: 100%;
      }

      100% {
        background-position: -100%;
      }
    }
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 12px;
    text-overflow: ellipsis;
  `})),nn=(0,d.memo)(({searchQueries:e,citations:t})=>{let{t:i}=(0,v.Bd)("chat"),{styles:n,cx:l,theme:r}=ni(),[a,s]=(0,d.useState)(!1);return(0,o.FD)(c.Flexbox,{className:l(n.container,a&&n.expand),gap:16,style:{width:a?"100%":void 0},children:[(0,o.FD)(c.Flexbox,{distribution:"space-between",flex:1,gap:8,horizontal:!0,onClick:()=>{s(!a)},style:{cursor:"pointer"},children:[(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(x.default,{icon:eW.A}),(0,o.Y)(c.Flexbox,{horizontal:!0,children:i("search.grounding.title",{count:t?.length})}),!a&&(0,o.Y)(c.Flexbox,{horizontal:!0,children:t?.slice(0,8).map((e,t)=>(0,o.Y)(nt.default,{alt:e.title||e.url,height:16,src:`https://icons.duckduckgo.com/ip3/${new URL(e.url).host}.ico`,style:{background:r.colorBgContainer,borderRadius:8,marginInline:-2,padding:2,zIndex:100-t},unoptimized:!0,width:16},`${e.url}-${t}`))})]}),(0,o.Y)(c.Flexbox,{gap:4,horizontal:!0,children:(0,o.Y)(x.default,{icon:a?ih.A:iX.A})})]}),(0,o.Y)(e1.N,{initial:!1,children:a&&(0,o.Y)(e2.P.div,{animate:"open",exit:"collapsed",initial:"collapsed",style:{overflow:"hidden",width:"100%"},transition:{duration:.2,ease:[.4,0,.2,1]},variants:{collapsed:{height:0,opacity:0,width:"auto"},open:{height:"auto",opacity:1,width:"auto"}},children:(0,o.FD)(c.Flexbox,{gap:12,children:[e&&(0,o.FD)(c.Flexbox,{gap:4,horizontal:!0,children:[i("search.grounding.searchQueries"),(0,o.Y)(c.Flexbox,{gap:8,horizontal:!0,children:e.map((e,t)=>(0,o.Y)(F.A,{children:e},t))})]}),t&&(0,o.Y)(ne.A,{dataSource:t})]})})})]})}),no=(0,d.memo)(({id:e,tools:t,content:i,chunksList:n,search:r,imageList:a,...s})=>{let[d,p,u]=(0,h.L)(t=>[g.R.isMessageEditing(e)(t),g.R.isMessageGenerating(e)(t),g.R.isMessageCollapsed(e)(t)]),m=p&&(i===l.m5||!i)&&!!t,x=(0,h.L)(iH.B.isMessageInReasoning(e)),b=(0,h.L)(iH.B.isIntentUnderstanding(e)),f=!!r&&!!r.citations?.length,y=!!a&&a.length>0,v=!!s.reasoning&&s.reasoning.content?.trim()!==""||!s.reasoning&&x,Y=!!n&&n.length>0;return d?(0,o.Y)(iO,{content:i,id:e,isToolCallGenerating:m,...s}):u?(0,o.Y)(iJ,{content:i,id:e}):(0,o.FD)(c.Flexbox,{gap:8,id:e,children:[f&&(0,o.Y)(nn,{citations:r?.citations,searchQueries:r?.searchQueries}),Y&&(0,o.Y)(i4,{data:n}),v&&(0,o.Y)(i9,{...s.reasoning,id:e}),b?(0,o.Y)(i7,{}):(0,o.Y)(iO,{addIdOnDOM:!1,content:i,id:e,isToolCallGenerating:m,...s}),y&&(0,o.Y)(iQ,{items:a})]})}),nl=td.map(e=>e.rehypePlugin).filter(Boolean),nr=td.map(e=>e.remarkPlugin).filter(Boolean),na=(0,r.cx)((0,r.AH)`
  border: none;
  background: none;
`),ns=(0,r.rU)(({cx:e,css:t,token:i,responsive:n},{placement:o,variant:l,editing:r})=>{let a=t`
      margin-block-end: -16px;
      transition: background-color 100ms ${i.motionEaseOut};
    `,s=r&&t`
        width: 100%;
      `;return{actions:e(t`
          flex: none;
          align-self: ${"bubble"===l?"flex-end":"left"===o?"flex-start":"flex-end"};
          justify-content: ${"left"===o?"flex-end":"flex-start"};
        `,r&&t`
            pointer-events: none !important;
            opacity: 0 !important;
          `),container:e("docs"===l&&a,t`
          position: relative;

          width: 100%;
          max-width: 100vw;
          padding-block: 24px 12px;
          padding-inline: 12px;

          @supports (content-visibility: auto) {
            contain-intrinsic-size: auto 100lvh;
          }

          time {
            display: inline-block;
            white-space: nowrap;
          }

          div[role='menubar'] {
            display: flex;
          }

          time,
          div[role='menubar'] {
            pointer-events: none;
            opacity: 0;
            transition: opacity 200ms ${i.motionEaseOut};
          }

          &:hover {
            time,
            div[role='menubar'] {
              pointer-events: unset;
              opacity: 1;
            }
          }

          ${n.mobile} {
            padding-block-start: ${"docs"===l?"16px":"12px"};
            padding-inline: 8px;
          }
        `),messageContent:e(s,t`
          position: relative;
          overflow: hidden;
          max-width: 100%;

          ${n.mobile} {
            flex-direction: column !important;
          }
        `)}}),nd=(0,d.memo)(({id:e,index:t,disableEditing:i,isLatestItem:n})=>{let r=(0,h.L)(u._1.getDisplayMessageById(e),s()),{error:a,role:p,search:m,content:x,createdAt:b,tools:f,extra:y,model:Y,provider:A,meta:C,targetId:S,performance:T,usage:z,metadata:D}=r,{t:B}=(0,v.Bd)("chat"),{mobile:N}=(0,M.Q)(),$="left",I="chat"===(0,w.o)(k.c.displayMode)?"bubble":"docs",{transitionMode:L,highlighterTheme:P,mermaidTheme:E}=(0,eo.k)(el.v.config),[R,U,W]=(0,h.L)(t=>[g.R.isMessageGenerating(e)(t),g.R.isMessageInRAGFlow(e)(t),g.R.isMessageEditing(e)(t)]),{styles:j}=ns({editing:W,placement:$,variant:I}),_=eM(a),H=W?x:th(tp(x)),O="fadeIn"===L&&R,K=(0,eg.B)(em.z.isCurrentSessionGroupSession),V=(0,eg.B)(em.z.currentSession),Q=K&&V?V.id:"",q=(0,ep.u)(eh.a.getGroupConfig(Q||"")),J=K&&null!==S&&"user"!==S&&!q?.revealDM,Z=(0,eo.k)(ex.f.nickName)||"User",et=(0,eg.B)(em.z.currentGroupAgents),en=(0,d.useMemo)(()=>{if(!S)return;let e=S;if("user"===S)e=B("dm.you");else{let t=et?.find(e=>e.id===S);e=t?.title||S}return(0,o.Y)(F.A,{children:B("dm.visibleTo",{target:e})})},[S,Z,et,B]),ea=(0,d.useMemo)(()=>Object.fromEntries(td.map(t=>{let i=t.Component;return[t.tag,t=>(0,o.Y)(i,{...t,id:e})]})),[e]),es=(0,d.useMemo)(()=>({animated:O,citations:m?.citations,componentProps:{highlight:{actionsRender:({content:e,actionIconSize:t,language:i,originalNode:n})=>{let l="html"===i||""===i&&e.includes("<html>")||""===i&&e.includes("<!DOCTYPE html>");return(0,o.FD)(o.FK,{children:[l&&(0,o.Y)(G,{content:e,size:t}),n]})},theme:P},mermaid:{theme:E}},components:ea,enableCustomFootnotes:!0,rehypePlugins:nl,remarkPlugins:nr,showFootnotes:m?.citations&&m?.citations.length>0&&m?.citations.every(e=>e.title!==e.url)}),[O,ea,p,m,P,E]),[eb]=(0,eg.B)(e=>[em.z.isInboxSession(e)]),[ef]=(0,eu.o)(e=>[e.toggleSystemRole]),ey=(0,ec.F)(),ev=(0,d.useCallback)(()=>{eb?ey():ef(!0)},[eb]),eY=tc({disableEditing:i,error:a,id:e,index:t,role:p}),ek=(0,d.useCallback)(e=>(0,o.Y)(no,{...r,editableContent:e}),[r]),ew=(0,o.Y)(e$,{data:r});return(0,o.FD)(c.Flexbox,{className:j.container,gap:N?6:12,style:n?{minHeight:"calc(-300px + 100dvh)"}:void 0,children:[(0,o.FD)(c.Flexbox,{gap:4,horizontal:!0,children:[(0,o.Y)(X,{alt:C.title||"avatar",avatar:C,loading:U||R,onClick:ev,placement:$,size:32}),(0,o.Y)(ed,{avatar:C,placement:$,showTitle:!0,style:{marginBlockEnd:0},time:b,titleAddon:en})]}),(0,o.FD)(c.Flexbox,{align:"flex-start",className:j.messageContent,"data-layout":"vertical",direction:"vertical",gap:8,width:"fit-content",children:[(0,o.Y)(c.Flexbox,{style:{flex:1,maxWidth:"100%"},children:a&&(H===l.m5||!H)?(0,o.Y)(ei,{error:_,message:ew,placement:$}):(0,o.Y)(er,{className:na,editing:W,id:e,markdownProps:es,message:J?`*${B("hideForYou")}*`:H,messageExtra:(0,o.FD)(o.FK,{children:[_&&(0,o.Y)(ei,{error:_,message:ew,placement:$}),(0,o.Y)(i_,{content:x,extra:y,id:e,model:Y,performance:T||D,provider:A,tools:f,usage:z||D})]}),onDoubleClick:eY,placement:$,renderMessage:ek,variant:I})}),!i&&!W&&(0,o.Y)(c.Flexbox,{align:"flex-start",className:j.actions,role:"menubar",children:(0,o.Y)(t5,{data:r,id:e,index:t})})]}),N&&(0,o.Y)(ee,{borderSpacing:32})]})},s());nd.displayName="AssistantMessage";let nc=(0,d.memo)(({id:e,data:t,index:i,contentBlock:n})=>{let{tools:l}=t,[r,a,s,c]=(0,h.L)(t=>[!!t.activeThreadId,tm.Z.hasThreadBySourceMsgId(e)(t),g.R.isMessageRegenerating(e)(t),g.R.isMessageCollapsed(e)(t)]),u=(0,eg.B)(em.z.isCurrentSessionGroupSession),[m,x]=(0,d.useState)(!1),{edit:b,delAndRegenerate:f,regenerate:y,copy:Y,divider:k,del:w,branching:A,share:F,expand:C,collapse:S}=t3({hasThread:a,isRegenerating:s}),T=!!l,z=(0,d.useContext)(B),D=r||z,M=(0,d.useMemo)(()=>T?[f,Y]:[b,Y,D||u?null:A].filter(Boolean),[D,T,u,f,Y,b,A]),{t:N}=(0,v.Bd)("common"),$=(0,tg.useSearchParams)().get("topic"),[I,L,P,E,R,U,W,j,_,H]=(0,h.L)(e=>[e.deleteMessage,e.regenerateAssistantMessage,e.translateMessage,e.delAndRegenerateMessage,e.copyMessage,e.openThreadCreator,e.resendThreadMessage,e.delAndResendThreadMessage,e.toggleMessageEditing,e.toggleMessageCollapsed]),{message:O}=eL.A.useApp(),K=(0,d.use)(p.tf),G=(0,d.useCallback)(async o=>{if("edit"===o.key&&(_(e,!0),K?.current?.scrollToIndex(i,{align:"start"})),t){switch(o.key){case"copy":if(!n)return;await R(e,n.content),O.success(N("copySuccess",{defaultValue:"Copy Success"}));break;case"branching":if(!$){O.warning(N("branchingRequiresSavedTopic"));break}U(e);break;case"del":I(e);break;case"regenerate":z?W(e):L(e),t.error&&I(e);break;case"delAndRegenerate":z?j(e):E(e);break;case"share":x(!0);break;case"collapse":case"expand":H(e)}"translate"===o.keyPath.at(-1)&&P(e,o.keyPath[0])}},[t,$]);return(0,o.FD)(o.FK,{children:[(0,o.Y)(tu.A,{items:M,menu:{items:[b,Y,c?C:S,k,F,k,y,w]},onActionClick:G}),(0,o.Y)(tO,{message:t,onCancel:()=>{x(!1)},open:m})]})}),np=(0,d.memo)(({id:e,data:t})=>{let[i,n]=(0,h.L)(t=>[tm.Z.hasThreadBySourceMsgId(e)(t),u._1.findLastMessageId(e)(t)]),{delAndRegenerate:l,del:r,continueGeneration:a}=t3({hasThread:i,isContinuing:(0,h.L)(e=>!!n&&g.R.isMessageContinuing(n)(e))}),s=(0,d.useContext)(B),c=(0,tg.useSearchParams)().get("topic"),[p,m,x,b]=(0,h.L)(e=>[e.deleteMessage,e.delAndRegenerateMessage,e.delAndResendThreadMessage,e.continueGenerationMessage]),f=(0,d.useCallback)(async i=>{if(t)switch(i.key){case"continueGeneration":{let t=u._1.findLastMessageId(e)(h.L.getState());if(!t)return;b(t,e);break}case"del":p(e);break;case"delAndRegenerate":s?x(e):m(e)}},[t,c]);return(0,o.Y)(tu.A,{items:[a,l,r],onActionClick:f})}),nh=(0,d.memo)(({id:e,data:t,contentBlock:i,index:n,contentId:l})=>l?(0,o.Y)(nc,{contentBlock:i,data:t,id:e,index:n}):(0,o.Y)(np,{data:t,id:e}));var nu=i(5804);let ng=(0,d.memo)(({id:e,content:t})=>{let{t:i}=(0,v.Bd)("common"),n=(0,d.useMemo)(()=>({cancel:i("cancel"),confirm:i("ok"),edit:i("edit")}),[]),[l,r]=(0,h.L)(e=>[e.toggleMessageEditing,e.modifyMessageContent]);return(0,o.Y)(c.Flexbox,{paddingBlock:"0 8px",children:(0,o.Y)(nu.A,{defaultValue:t?String(t):"",editButtonSize:"small",onCancel:()=>{l(e,!1)},onConfirm:t=>{r(e,t),l(e,!1)},text:n,variant:"outlined"})})});var nm=i(1894);let nx=(0,d.memo)(({id:e,content:t})=>{let{t:i}=(0,v.Bd)("chat"),n=(0,h.L)(e=>e.toggleMessageCollapsed);return(0,o.FD)(c.Flexbox,{children:[(0,o.Y)(iq.A,{children:(0,o.Y)(f.A,{variant:"chat",children:t?.slice(0,300)})}),(0,o.Y)(c.Flexbox,{padding:4,children:(0,o.Y)(P.A,{block:!0,color:"default",onClick:()=>{n(e,!1)},size:"small",variant:"filled",children:i("chatList.expandMessage")})})]})}),nb=(0,d.createContext)(null);var nf=i(28755);let ny=(0,d.memo)(({error:e,id:t})=>{let{t:i}=(0,v.Bd)("common"),[n]=(0,h.L)(e=>[e.deleteDBMessage]),l=(0,o.Y)(e$,{block:!0,data:{error:e,id:t}}),r=eM(e);return r?.message?(0,o.Y)(c.Flexbox,{children:(0,o.Y)(et.A,{action:(0,o.Y)(nf.Ay,{color:"default",onClick:()=>{n(t)},size:"small",variant:"filled",children:i("delete")}),closable:!1,extra:l,showIcon:!0,type:"error",...r})}):l?(0,o.Y)(c.Flexbox,{children:l}):null}),nv=(0,r.rU)(({css:e,token:t})=>({pWithTool:e`
      color: ${t.colorTextTertiary};
    `})),nY=(0,d.memo)(({content:e,hasTools:t,markdownProps:i})=>{let n=th(tp(e)),{styles:l,cx:r}=nv();return e||t?e===tW.VH?t?null:(0,o.Y)(ig.A,{}):e&&(0,o.Y)(f.A,{...i,className:r(t&&l.pWithTool),variant:"chat",children:n}):(0,o.Y)(ig.A,{})}),nk=(0,d.memo)(({open:e,children:t,styles:i,style:n,width:l,height:r})=>(0,o.Y)(e1.N,{initial:!1,children:e&&(0,o.Y)(e2.P.div,{animate:"open",exit:"collapsed",initial:"collapsed",style:n,transition:{duration:.2,ease:[.4,0,.2,1]},variants:{collapsed:{...i?.collapsed,height:r?.collapsed??0,opacity:0,width:l?.collapsed??0},open:{...i?.open,height:r?.open??"auto",opacity:1,width:l?.open??"auto"}},children:t})}));var nw=i(59109),nA=i(32102),nF=i(46045),nC=i(5009),nS=i(20966),nT=i(88440);let nz=(0,d.memo)(({content:e,variant:t})=>{let{data:i,language:n}=(0,d.useMemo)(()=>{try{let t=JSON.parse(e||"");if("string"==typeof t)return{data:t,language:"plaintext"};return{data:JSON.stringify(t,null,2),language:"json"}}catch{return{data:e||"",language:"plaintext"}}},[e]);return(0,o.Y)(R.A,{language:n,style:{maxHeight:200,overflow:"scroll",width:"100%"},variant:t,children:i})}),nD=(0,d.memo)(({state:e})=>e?(0,o.Y)(R.A,{language:"json",style:{maxHeight:200,maxWidth:800,overflow:"scroll"},children:JSON.stringify(e,null,2)}):null),nB=(0,d.memo)(({result:e,requestArgs:t,toolCallId:i,apiName:n,identifier:l,type:r})=>{let{t:a}=(0,v.Bd)("plugin"),s=(0,d.useMemo)(()=>{try{return JSON.stringify(JSON.parse(t||""),null,2)}catch{return""}},[t]),c=(0,d.useMemo)(()=>({apiName:n,arguments:t,id:i,identifier:l,type:r}),[t,i,n,l,r]);return(0,o.Y)(nT.A,{items:[{children:(0,o.Y)(R.A,{language:"json",children:s}),key:"arguments",label:a("debug.arguments")},{children:(0,o.Y)(nz,{content:e?.content}),key:"response",label:a("debug.response")},{children:(0,o.Y)(R.A,{language:"json",children:JSON.stringify(c,null,2)}),key:"function_call",label:a("debug.function_call")},{children:(0,o.Y)(nD,{state:e?.state}),key:"pluginState",label:a("debug.pluginState")}],style:{display:"grid",maxWidth:800,minWidth:400}})});var nM=i(39196),nN=i(83599),n$=i(74038),nI=i(23211),nL=i(68172);let nP=(0,d.memo)(({id:e})=>{let t=(0,n$.j)(nL.w.getToolManifestById(e)),[i,n]=(0,d.useState)(!1),{t:l}=(0,v.Bd)("plugin");return nI.V.isSettingSchemaNonEmpty(t?.settings)&&(0,o.FD)(o.FK,{children:[(0,o.Y)(N.A,{icon:nM.A,onClick:()=>{n(!0)},size:"small",title:l("setting")}),(0,o.Y)(nN.A,{id:e,onClose:()=>{n(!1)},open:i,schema:t?.settings})]})});var nE=i(13208),nR=i(20658),nU=i(91951),nW=i(6563);let nj=(0,d.memo)(({intervention:e,result:t})=>{let{t:i}=(0,v.Bd)("chat"),n=(0,r.DP)(),l=!!t?.error,a=e?.status==="rejected",s=e?.status==="aborted";return(0,o.Y)(c.Flexbox,{align:"center",gap:4,horizontal:!0,style:{fontSize:12},children:s?(0,o.Y)(iS.A,{title:i("tool.intervention.toolAbort"),children:(0,o.Y)(x.default,{color:n.colorTextTertiary,icon:nE.A})}):a?(0,o.Y)(iS.A,{title:i("tool.intervention.toolRejected"),children:(0,o.Y)(x.default,{color:n.colorTextTertiary,icon:nR.A})}):l?(0,o.Y)(x.default,{color:n.colorError,icon:nU.A}):(0,o.Y)(x.default,{color:n.colorSuccess,icon:nW.A})})});var n_=i(35863),nH=i(42246),nO=i(79555);let nK=(0,r.rU)(({css:e,token:t})=>({apiName:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    text-overflow: ellipsis;
  `,expand:e`
    color: ${t.colorText};
  `,shinyText:(0,eE.f)(t)})),nG=(0,d.memo)(({apiName:e,title:t,isLoading:i,isExpanded:n})=>{let{styles:l,cx:r}=nK();return(0,o.FD)(c.Flexbox,{align:"center",className:r(i&&l.shinyText,n&&l.expand),gap:4,horizontal:!0,children:[(0,o.Y)("div",{children:t}),(0,o.Y)(x.default,{icon:iX.A}),(0,o.Y)("span",{className:l.apiName,children:e})]})}),nV=(0,r.rU)(({css:e,token:t})=>({apiName:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    text-overflow: ellipsis;
  `,expand:e`
    color: ${t.colorText};
  `,shinyText:(0,eE.f)(t)})),nQ=(0,d.memo)(({identifier:e,apiName:t,isLoading:i,index:n,toolCallId:l,messageId:r,isExpanded:a})=>{let{t:p}=(0,v.Bd)("plugin"),{styles:h,cx:u}=nV(),g=(0,n$.j)(n_.P.getMetaById(e),s()),m=(0,d.useMemo)(()=>[{apiName:p(`search.apiName.${t}`,t),id:nO.J.identifier,title:p("search.title")},{apiName:p(`localSystem.apiName.${t}`,t),id:nH.M.identifier,title:p("localSystem.title")}],[]).find(t=>t.id===e);if(m)return(0,o.Y)(nG,{...m,identifier:e,index:n,isExpanded:a,isLoading:i,messageId:r,toolCallId:l});let b=nI.V.getPluginTitle(g)??p("unknownPlugin");return(0,o.FD)(c.Flexbox,{align:"center",className:u(i&&h.shinyText,a&&h.expand),gap:6,horizontal:!0,children:[(0,o.Y)("div",{children:b})," ",(0,o.Y)(x.default,{icon:iX.A}),(0,o.Y)("span",{className:h.apiName,children:t})]})}),nq=(0,r.rU)(({css:e,token:t,cx:i})=>({actions:i("inspector-container",e`
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    `),apiName:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    text-overflow: ellipsis;
  `,container:e`
    :hover {
      .inspector-container {
        opacity: 1;
      }
    }
  `,plugin:e`
    display: flex;
    gap: 4px;
    align-items: center;
    width: fit-content;
  `,shinyText:(0,eE.f)(t),tool:e`
    cursor: pointer;

    width: fit-content;
    padding-block: 2px;
    border-radius: 6px;

    color: ${t.colorTextTertiary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `})),nJ=(0,d.memo)(({assistantMessageId:e,index:t,identifier:i,apiName:n,id:l,arguments:r,result:a,setShowRender:s,showPluginRender:p,setShowPluginRender:u,type:g,intervention:m,toolMessageId:x})=>{let{t:b}=(0,v.Bd)("plugin"),{styles:f}=nq(),[y,Y]=(0,d.useState)(!1),[k,w]=(0,d.useState)(!1),[A,F]=(0,h.L)(e=>[e.deleteAssistantMessage,e.toggleInspectExpanded]),C=!!a?.error,S=!!a?.content&&a.content!==tW.VH||C,T=m?.status==="pending",z=m?.status==="rejected",D=m?.status==="aborted",B=(0,h.L)(e=>{if(!x)return;let t=e6.E1.getDbMessageById(x)(e);return t?.metadata?.inspectExpanded}),M=B||k;(0,d.useEffect)(()=>{s(M)},[M,s]);let $=M&&!T&&!z&&!D;return(0,o.FD)(c.Flexbox,{className:f.container,gap:4,children:[(0,o.FD)(c.Flexbox,{align:"center",distribution:"space-between",gap:8,horizontal:!0,children:[(0,o.Y)(c.Flexbox,{align:"center",className:f.tool,gap:8,horizontal:!0,onClick:()=>{x&&F(x)},onMouseEnter:()=>{B||w(!0)},onMouseLeave:()=>{B||w(!1)},paddingInline:4,children:(0,o.Y)(nQ,{apiName:n,identifier:i,index:t,isExpanded:B,isLoading:!S&&!T,messageId:e,toolCallId:l})}),(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.FD)(c.Flexbox,{className:f.actions,horizontal:!0,children:[$&&(0,o.Y)(N.A,{icon:p?nw.A:nA.A,onClick:()=>{u(!p)},size:"small",title:b(p?"inspector.args":"inspector.pluginRender")}),(0,o.Y)(N.A,{icon:y?nF.A:nC.A,onClick:()=>{Y(!y)},size:"small",title:b(y?"debug.off":"debug.on")}),(0,o.Y)(N.A,{icon:nS.A,onClick:()=>{A(e)},size:"small",title:b("inspector.delete")}),(0,o.Y)(nP,{id:i})]}),S&&(0,o.Y)(nj,{intervention:m,result:a})]})]}),y&&(0,o.Y)(nB,{apiName:n,identifier:i,requestArgs:r,result:a,toolCallId:l,type:g})]})}),nZ=(0,r.rU)(({css:e,token:t})=>({container:e`
    padding-block: 8px;
    padding-inline: 6px;
  `,reason:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,title:e`
    font-size: 14px;
    color: ${t.colorTextSecondary};
  `})),nX=(0,d.memo)(()=>{let{t:e}=(0,v.Bd)("chat"),{styles:t,theme:i}=nZ();return(0,o.Y)(c.Flexbox,{className:t.container,gap:8,children:(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(x.default,{color:i.colorTextTertiary,icon:nR.A,size:16}),(0,o.Y)("div",{className:t.title,children:e("tool.intervention.toolAbort")})]})})});var n0=i(96785),n1=i(38351);let n2=(0,d.memo)(({id:e,content:t,pluginState:i,plugin:n,requestArgs:l,showPluginRender:r,setShowPluginRender:a})=>{(0,d.useEffect)(()=>{n?.type&&a("default"!==n.type)},[n?.type,a]);let{data:s,language:p}=(0,d.useMemo)(()=>{try{let e=JSON.parse(t||"");if("string"==typeof e)return{data:e,language:"plaintext"};return{data:JSON.stringify(e,null,2),language:"json"}}catch{return{data:t||"",language:"plaintext"}}},[t]);return r?(0,o.Y)(c.Flexbox,{gap:12,id:e,width:"100%",children:(0,o.Y)(n0.A,{arguments:n?.arguments,content:t,id:e,identifier:n?.identifier,loading:!1,payload:n,pluginState:i,type:n?.type})}):(0,o.FD)(c.Flexbox,{gap:12,id:e,width:"100%",children:[(0,o.Y)(n1.A,{arguments:l}),t&&(0,o.Y)(R.A,{language:p,style:{maxHeight:200,overflow:"scroll",width:"100%"},variant:"outlined",children:s})]})});n2.displayName="GroupCustomRender";var n8=i(36956);let n4=(0,d.memo)(({id:e,plugin:t})=>{let{styles:i}=(0,eC.IS)(),{t:n}=(0,v.Bd)("error"),l=(0,r.DP)(),[a,d]=(0,h.L)(e=>[e.delAndRegenerateMessage,e.deleteMessage]),p=t?.identifier,u=(0,n$.j)(nL.w.getPluginMetaById(p),s()),g=(0,n$.j)(nL.w.getToolManifestById(p),s());return!!g&&(0,o.Y)(eC.Sf,{children:(0,o.FD)(Y.default,{gap:16,style:{maxWidth:400},children:[(0,o.Y)(V.A,{avatar:nI.V.getPluginAvatar(u)||"⚙️",background:l.colorFillContent,gap:12,size:80}),(0,o.Y)(c.Flexbox,{style:{fontSize:20},children:n("pluginSettings.title",{name:nI.V.getPluginTitle(u)})}),(0,o.Y)(c.Flexbox,{className:i.desc,children:n("pluginSettings.desc")}),(0,o.Y)(C.A,{style:{margin:"0 16px"}}),g.settings&&(0,o.Y)(n8.A,{id:g.identifier,schema:g.settings}),(0,o.Y)(P.A,{block:!0,onClick:()=>{a(e),d(e)},style:{marginTop:8},type:"primary",children:n("unlock.confirm")})]})})}),n3=(0,d.memo)(({id:e,type:t,body:i,message:n,plugin:l})=>{let{t:r}=(0,v.Bd)("error");return"PluginSettingsInvalid"===t?(0,o.Y)(n4,{id:e,plugin:l}):(0,o.Y)(et.A,{extra:(0,o.Y)(c.Flexbox,{children:(0,o.Y)(R.A,{actionIconSize:"small",language:"json",variant:"borderless",children:JSON.stringify(i||{message:n,type:t},null,2)})}),message:r(`response.${t}`),showIcon:!0,type:"error"})});var n6=i(67103),n5=i(51599),n7=i(93778),n9=i(32719);i(42318);var oe=i(85366),ot=i(13134),oi=i(95313);let on=(0,d.memo)(({args:e})=>{let{t}=(0,v.Bd)("tool"),{base:i,dir:n}=n7.A.parse(e.file_path),{data:l,isLoading:r}=(0,oe.Ay)(["readLocalFile",e.file_path],()=>oi.V.readLocalFile({fullContent:!0,path:e.file_path}),{revalidateOnFocus:!1,revalidateOnReconnect:!1}),a=(0,d.useMemo)(()=>{if(!l?.content)return[];try{let t=l.content,i=e.replace_all?t.replaceAll(e.old_string,e.new_string):t.replace(e.old_string,e.new_string),n=(0,n5.B8)(e.file_path,t,i,"",""),o=`diff --git a${e.file_path} b${e.file_path}
${n}`;return(0,n9.FR)(o)}catch(e){return console.error("Failed to generate diff:",e),[]}},[l?.content,e.file_path,e.old_string,e.new_string,e.replace_all]);return(0,o.FD)(c.Flexbox,{gap:12,children:[(0,o.FD)(c.Flexbox,{horizontal:!0,children:[(0,o.Y)(ot.e,{path:n}),(0,o.Y)(x.default,{icon:iX.A}),(0,o.Y)(tn.E,{name:i,path:e.file_path})]}),r?(0,o.Y)(ey.A,{active:!0,paragraph:{rows:3}}):(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.Y)(b.A,{type:"secondary",children:t(e.replace_all?"localFiles.editFile.replaceAll":"localFiles.editFile.replaceFirst")}),a.map((e,t)=>(0,o.Y)("div",{style:{fontSize:"12px"},children:(0,o.Y)(n9.oO,{diffType:e.type,hunks:e.hunks,viewType:"split",children:e=>e.map(e=>(0,o.Y)(n9.D9,{hunk:e},e.content))})},`${e.oldPath}-${t}`))]})]})});on.displayName="EditLocalFileIntervention";var oo=i(6621),ol=i(64694),or=i(32624);let oa=(0,r.rU)(({css:e,token:t})=>({icon:e`
    color: ${t.colorTextQuaternary};
  `,item:e`
    padding-block: 4px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius}px;
    transition: all 0.2s ease;

    &:hover {
      background: ${t.colorFillQuaternary};
    }
  `,path:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    word-break: break-all;
  `})),os=(0,d.memo)(({oldPath:e,newPath:t})=>{let{styles:i}=oa(),n=(0,ol.p)(or.i.displayRelativePath(e)),l=(0,ol.p)(or.i.displayRelativePath(t));return(0,o.FD)(c.Flexbox,{align:"center",className:i.item,gap:8,horizontal:!0,width:"100%",children:[(0,o.Y)(c.Flexbox,{flex:1,children:(0,o.Y)(b.A,{className:i.path,type:"secondary",children:n})}),(0,o.Y)(x.default,{className:i.icon,icon:oo.A}),(0,o.Y)(c.Flexbox,{flex:2,children:(0,o.Y)(b.A,{className:i.path,children:l})})]})}),od=(0,d.memo)(({args:e})=>{let{items:t}=e,{t:i}=(0,v.Bd)("tool");return(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.Y)(b.A,{type:"secondary",children:i("localFiles.moveFiles.itemsToMove",{count:t.length})}),(0,o.Y)(c.Flexbox,{gap:6,children:t.map((e,t)=>(0,o.Y)(os,{newPath:e.newPath,oldPath:e.oldPath},t))})]})}),oc=(0,d.memo)(({args:e})=>{let{description:t,command:i,timeout:n}=e;return(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.FD)(c.Flexbox,{horizontal:!0,justify:"space-between",children:[t&&(0,o.Y)(b.A,{children:t}),n&&(0,o.FD)(b.A,{style:{fontSize:12},type:"secondary",children:["timeout: ",(e=>{if(!e)return null;let t=e/1e3;if(t>=60){let e=t/60;return`${e.toFixed(1)}min`}return t>=1?`${t.toFixed(1)}s`:`${e}ms`})(n)]})]}),i&&(0,o.Y)(R.A,{language:"sh",showLanguage:!1,style:{padding:"4px 8px"},variant:"outlined",wrap:!0,children:i})]})}),op=(0,d.memo)(({args:e})=>{let{t}=(0,v.Bd)("tool"),{base:i,dir:n,ext:l}=n7.A.parse(e.path),r=(0,d.useMemo)(()=>({css:"css",html:"html",js:"javascript",json:"json",jsx:"jsx",md:"markdown",py:"python",sh:"bash",ts:"typescript",tsx:"tsx",txt:"text",xml:"xml",yaml:"yaml",yml:"yaml"})[l.replace(".","")]||"text",[l]),a=e.content?.length||0;return(0,o.FD)(c.Flexbox,{gap:12,children:[(0,o.FD)(c.Flexbox,{horizontal:!0,children:[(0,o.Y)(ot.e,{path:n}),(0,o.Y)(x.default,{icon:iX.A}),(0,o.Y)(tn.E,{name:i,path:e.path})]}),(0,o.FD)(c.Flexbox,{gap:4,children:[(0,o.FD)(c.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,o.Y)(b.A,{type:"secondary",children:t("localFiles.writeFile.preview")}),(0,o.FD)(b.A,{style:{fontSize:12},type:"secondary",children:[a.toLocaleString()," ",t("localFiles.writeFile.characters")]})]}),e.content&&(0,o.Y)(R.A,{language:r,showLanguage:!1,style:{maxHeight:400,overflow:"auto",padding:"8px"},variant:"outlined",children:e.content})]})]})});op.displayName="WriteFileIntervention";let oh={[nH.u.editLocalFile]:on,[nH.u.moveLocalFiles]:od,[nH.u.runCommand]:oc,[nH.u.writeLocalFile]:op},ou={[nH.M.identifier]:oh};var og=i(38153),om=i(89098),ox=i(53809);let ob=(0,d.memo)(({approvalMode:e,messageId:t,identifier:i,apiName:n})=>{let{t:l}=(0,v.Bd)(["chat","common"]),[r,a]=(0,d.useState)(""),[s,p]=(0,d.useState)(!1),[u,g]=(0,d.useState)(!1),[m,x]=(0,d.useState)(!1),{assistantGroupId:b}=(()=>{let e=(0,d.useContext)(nb);if(!e)throw Error("useGroupMessage must be used within GroupMessageContext");return e})(),[f,y,Y]=(0,h.L)(e=>[e.approveToolCalling,e.rejectToolCalling,e.rejectAndContinueToolCalling]),k=(0,eo.k)(e=>e.addToolToAllowList),w=async e=>{x(!0);try{if(await f(t,b),e){let e=`${i}/${n}`;await k(e)}}finally{x(!1)}},A=async e=>{g(!0),await y(t,e),g(!1),p(!1),a("")},F=async e=>{g(!0),await Y(t,e),g(!1),p(!1),a("")};return(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,children:[(0,o.Y)(tl.A,{arrow:!1,content:(0,o.FD)(c.Flexbox,{gap:12,style:{width:400},children:[(0,o.FD)(c.Flexbox,{align:"center",horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{children:l("tool.intervention.rejectTitle")}),(0,o.FD)(om.A,{children:[(0,o.Y)(P.A,{color:"default",loading:u,onClick:()=>A(r),size:"small",variant:"filled",children:l("tool.intervention.rejectOnly")}),(0,o.Y)(P.A,{loading:u,onClick:()=>F(r),size:"small",type:"primary",children:l("tool.intervention.rejectAndContinue")})]})]}),(0,o.Y)(ox.A.TextArea,{autoFocus:!0,onChange:e=>a(e.target.value),placeholder:l("tool.intervention.rejectReasonPlaceholder"),rows:3,value:r,variant:"filled"})]}),onOpenChange:e=>{u||p(e)},open:s,placement:"bottomRight",trigger:"click",children:(0,o.Y)(P.A,{color:"default",size:"small",variant:"filled",children:l("tool.intervention.reject")})}),"allow-list"===e?(0,o.FD)(om.A.Compact,{children:[(0,o.Y)(P.A,{loading:m,onClick:()=>w(!0),size:"small",type:"primary",children:l("tool.intervention.approveAndRemember")}),(0,o.Y)(og.A,{menu:{items:[{disabled:m,key:"once",label:l("tool.intervention.approveOnce"),onClick:()=>w(!1)}]},children:(0,o.Y)(P.A,{disabled:m,icon:ih.A,size:"small",type:"primary"})})]}):(0,o.Y)(P.A,{loading:m,onClick:()=>w(),size:"small",type:"primary",children:l("tool.intervention.approve")})]})});var of=i(38069),oy=i(69033),ov=i(80176),oY=i(90897);let ok=(0,r.rU)(({css:e,token:t})=>({form:e`
    position: relative;

    width: 100%;
    min-width: 600px;
    padding: 8px;
    border-radius: ${t.borderRadiusLG}px;
  `,formItem:e`
    margin-block-end: 4px !important;
  `,input:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,row:e`
    position: relative;
  `,title:e`
    margin-block-end: 4px;
    color: ${t.colorTextTertiary};
  `})),ow=e=>Object.entries(e).map(([e,t],i)=>({id:`${e}-${i}`,key:e,value:"string"==typeof t?t:JSON.stringify(t)})).filter(e=>e.key),oA=(0,d.memo)(({initialValue:e={},onFinish:t,onCancel:i})=>{let{styles:n}=ok(),{t:l}=(0,v.Bd)(["tool","common"]),[r]=ov.A.useForm(),{message:a}=eL.A.useApp(),s=(0,d.useRef)(null);(0,d.useEffect)(()=>{r.setFieldsValue({items:ow(e)})},[e,r]);let[p,h]=(0,d.useState)(!1),u=async()=>{h(!0);try{var e;let i;await r.validateFields();let n=(e=r.getFieldsValue().items||[],i={},e.forEach(e=>{if(e.key)try{i[e.key]=JSON.parse(e.value||'""')}catch{i[e.key]=e.value||""}}),i);await t?.(n)}catch(e){console.error("Validation Failed:",e),a.error(l("updateArgs.formValidationFailed")||"Please check the form for errors.")}h(!1)},g=()=>{i?.()};return(0,o.FD)(ov.A,{autoComplete:"off",className:n.form,form:r,initialValues:{items:ow(e)},ref:s,children:[(0,o.FD)(c.Flexbox,{className:n.title,gap:8,horizontal:!0,children:[(0,o.Y)(c.Flexbox,{flex:1,children:"key"}),(0,o.Y)(c.Flexbox,{flex:4,children:"value"})]}),(0,o.Y)(ov.A.List,{name:"items",children:(e,{add:t,remove:i})=>(0,o.FD)(c.Flexbox,{width:"100%",children:[e.map(({key:e,name:t,...a},s)=>(0,o.FD)(c.Flexbox,{align:"center",className:n.row,gap:8,horizontal:!0,width:"100%",children:[(0,o.Y)(ov.A.Item,{...a,className:n.formItem,name:[t,"key"],rules:[{message:l("updateArgs.keyRequired"),required:!0},{validator:e=>{var t,i;return t=r.getFieldValue(["items",s]),i=r.getFieldValue("items"),t?.key&&i.map(e=>e?.key).filter(Boolean).filter(e=>e===t.key).length>1?Promise.reject(Error(l("updateArgs.duplicateKeyError"))):Promise.resolve()}}],style:{flex:1},validateTrigger:["onChange","onBlur"],children:(0,o.Y)(oy.A,{allowClear:!0,className:n.input,placeholder:l("updateArgs.form.key"),variant:"filled"})}),(0,o.Y)(ov.A.Item,{...a,className:n.formItem,name:[t,"value"],style:{flex:4},children:(0,o.Y)(oy.A,{allowClear:!0,className:n.input,placeholder:l("updateArgs.form.value"),variant:"filled"})}),(0,o.Y)(N.A,{icon:tQ.A,onClick:()=>i(t),size:"small",style:{marginBottom:6},title:l("delete",{ns:"common"})})]},e)),(0,o.Y)(ov.A.Item,{style:{marginBottom:0,marginTop:8},children:(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,justify:"space-between",children:[(0,o.Y)(P.A,{color:"default",icon:(0,o.Y)(x.default,{icon:oY.A}),onClick:()=>t({id:`new-${Date.now()}`,key:"",value:""}),size:"small",variant:"filled",children:l("updateArgs.form.add")}),(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,children:[(0,o.Y)(P.A,{onClick:g,size:"small",children:l("cancel",{ns:"common"})}),(0,o.Y)(P.A,{loading:p,onClick:u,size:"small",type:"primary",children:l("save",{ns:"common"})})]})]})})]})})]})});var oF=i(9392),oC=i(56634),oS=i(2504);let oT=(0,r.rU)(({css:e,token:t})=>({icon:e`
    border: 1px solid ${t.colorFillTertiary};
    border-radius: ${t.borderRadius}px;
    background: ${t.colorBgElevated};
  `,modeButton:e`
    font-size: ${t.fontSizeSM}px;
    color: ${t.colorTextSecondary};
  `,modeDesc:e`
    margin-block-start: 2px;
    font-size: 12px;
    line-height: 1.4;
    color: ${t.colorTextDescription};
  `,modeItem:e`
    min-width: 160px;
  `,modeLabel:e`
    font-size: ${t.fontSize}px;
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
  `})),oz=(0,d.memo)(()=>{let{t:e}=(0,v.Bd)("chat"),{styles:t}=oT(),i=(0,eo.k)(n6.g.approvalMode),n=(0,eo.k)(e=>e.updateHumanIntervention),l=(0,d.useMemo)(()=>({"allow-list":e("tool.intervention.mode.allowList"),"auto-run":e("tool.intervention.mode.autoRun"),manual:e("tool.intervention.mode.manual")}),[e]),r=(0,d.useCallback)(async e=>{await n({approvalMode:e})},[n]),a=(0,d.useMemo)(()=>[{icon:(0,o.Y)(Y.default,{className:t.icon,height:32,width:32,children:(0,o.Y)(x.default,{icon:oF.A})}),key:"auto-run",label:(0,o.FD)("div",{className:t.modeItem,children:[(0,o.Y)("div",{className:t.modeLabel,children:l["auto-run"]}),(0,o.Y)("div",{className:t.modeDesc,children:e("tool.intervention.mode.autoRunDesc")})]}),onClick:()=>r("auto-run")},{icon:(0,o.Y)(Y.default,{className:t.icon,height:32,width:32,children:(0,o.Y)(x.default,{icon:oC.A})}),key:"allow-list",label:(0,o.FD)("div",{className:t.modeItem,children:[(0,o.Y)("div",{className:t.modeLabel,children:l["allow-list"]}),(0,o.Y)("div",{className:t.modeDesc,children:e("tool.intervention.mode.allowListDesc")})]}),onClick:()=>r("allow-list")},{icon:(0,o.Y)(Y.default,{className:t.icon,height:32,width:32,children:(0,o.Y)(x.default,{icon:oS.A})}),key:"manual",label:(0,o.FD)("div",{className:t.modeItem,children:[(0,o.Y)("div",{className:t.modeLabel,children:l.manual}),(0,o.Y)("div",{className:t.modeDesc,children:e("tool.intervention.mode.manualDesc")})]}),onClick:()=>r("manual")}],[l,r,t,e]);return(0,o.Y)(og.A,{menu:{activeKey:i,items:a},placement:"bottomLeft",children:(0,o.Y)(P.A,{className:t.modeButton,color:"default",icon:ih.A,iconPosition:"end",size:"small",variant:"text",children:l[i]})})}),oD=(0,d.memo)(({requestArgs:e,id:t,identifier:i,apiName:n,toolCallId:l})=>{let{t:r}=(0,v.Bd)("chat"),a=(0,eo.k)(n6.g.approvalMode),[s,p]=(0,d.useState)(!1),[u]=(0,h.L)(e=>[e.optimisticUpdatePluginArguments]),g=(0,d.useCallback)(()=>{p(!1)},[]),m=(0,d.useCallback)(async i=>{if(t)try{JSON.stringify(i,null,2)!==e&&await u(t,i,!0),p(!1)}catch(e){console.error("Error stringifying arguments:",e)}},[e,t]);return s?(0,o.Y)(d.Suspense,{fallback:(0,o.Y)(n1.A,{arguments:e}),children:(0,o.Y)(oA,{initialValue:(0,iC.N8)(e||""),onCancel:g,onFinish:m})}):(0,o.FD)(c.Flexbox,{gap:12,children:[(0,o.Y)(n1.A,{actions:(0,o.Y)(N.A,{icon:of.A,onClick:()=>{p(!0)},size:"small",title:r("edit",{ns:"common"})}),arguments:e}),(0,o.FD)(c.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,o.Y)(oz,{}),(0,o.Y)(ob,{apiName:n,approvalMode:a,identifier:i,messageId:t,toolCallId:l})]})]})}),oB=(0,d.memo)(({requestArgs:e,id:t,identifier:i,apiName:n,toolCallId:l})=>{let r=(0,eo.k)(n6.g.approvalMode),[a,s]=(0,d.useState)(!1),[p]=(0,h.L)(e=>[e.optimisticUpdatePluginArguments]),u=(0,d.useCallback)(()=>{s(!1)},[]),g=(0,d.useCallback)(async i=>{if(t)try{JSON.stringify(i,null,2)!==e&&await p(t,i,!0),s(!1)}catch(e){console.error("Error stringifying arguments:",e)}},[e,t]),m=((e,t)=>{if(!e||!t)return;let i=ou[e];if(i)return i[t]})(i,n);return m?a?(0,o.Y)(d.Suspense,{fallback:(0,o.Y)(n1.A,{arguments:e}),children:(0,o.Y)(oA,{initialValue:(0,iC.N8)(e||""),onCancel:u,onFinish:g})}):(0,o.FD)(c.Flexbox,{gap:12,children:[(0,o.Y)(m,{apiName:n,args:(0,iC.N8)(e||""),identifier:i,messageId:t}),(0,o.FD)(c.Flexbox,{horizontal:!0,justify:"space-between",children:[(0,o.Y)(oz,{}),(0,o.Y)(ob,{apiName:n,approvalMode:r,identifier:i,messageId:t,toolCallId:l})]})]}):(0,o.Y)(oD,{apiName:n,id:t,identifier:i,requestArgs:e,toolCallId:l})}),oM=(0,d.memo)(({args:e})=>(0,o.FD)(c.Flexbox,{gap:12,children:[e?.path&&(0,o.Y)(ot.e,{path:e.path}),(0,o.Y)(Y.default,{height:140,children:(0,o.FD)(c.Flexbox,{gap:4,width:"90%",children:[(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}}),(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}}),(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}}),(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}})]})})]}));var oN=i(75589);let o$=(0,r.rU)(({css:e,token:t,cx:i})=>({query:i(e`
    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 8px;

    font-size: 12px;
    color: ${t.colorTextSecondary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `)})),oI=(0,d.memo)(({args:e={}})=>{let{styles:t}=o$();return(0,o.FD)(c.Flexbox,{gap:4,children:[(0,o.FD)(c.Flexbox,{align:"center",distribution:"space-between",gap:40,height:26,horizontal:!0,children:[(0,o.FD)(c.Flexbox,{align:"center",className:t.query,gap:8,horizontal:!0,children:[(0,o.Y)(x.default,{icon:oN.A}),e.keywords?e.keywords:(0,o.Y)(ey.A.Node,{active:!0,style:{height:20,width:40}})]}),(0,o.Y)(ey.A.Node,{active:!0,style:{height:20,width:40}})]}),(0,o.Y)(Y.default,{height:140,children:(0,o.FD)(c.Flexbox,{gap:4,width:"90%",children:[(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}}),(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}}),(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}}),(0,o.Y)(ey.A.Button,{active:!0,block:!0,style:{height:16}})]})})]})});var oL=i(29724);let oP=(0,d.memo)(({args:e})=>{let t=e?.urls,i=(0,ty.a)();return(0,o.Y)(e0.A,{gap:i?4:12,horizontal:!i,orientation:"horizontal",size:8,children:t&&t.length>0&&t.map((e,t)=>(0,o.Y)(oL.A,{url:e},`${t}_${e}`))})}),oE=(0,d.memo)(({args:e})=>(0,o.Y)(oL.A,{url:e?.url||""})),oR=(0,r.rU)(({css:e,token:t,cx:i})=>({query:i(e`
      padding-block: 4px;
      padding-inline: 8px;
      border-radius: 8px;

      font-size: 12px;
      color: ${t.colorTextSecondary};

      &:hover {
        background: ${t.colorFillTertiary};
      }
    `,(0,eE.f)(t))})),oU=(0,d.memo)(({args:e})=>{let{query:t}=e||{},i=(0,ty.a)(),{styles:n}=oR();return(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.FD)(c.Flexbox,{align:i?"flex-start":"center",distribution:"space-between",gap:i?8:40,height:i?void 0:32,horizontal:!i,children:[(0,o.FD)(c.Flexbox,{align:"center",className:n.query,gap:8,horizontal:!0,children:[(0,o.Y)(x.default,{icon:oN.A}),t||(0,o.Y)(ey.A.Node,{active:!0,style:{height:20,width:40}})]}),(0,o.Y)(ey.A.Node,{active:!0,style:{height:20,width:40}})]}),(0,o.Y)(c.Flexbox,{gap:12,horizontal:!0,children:["1","2","3","4","5"].map(e=>(0,o.Y)(ey.A.Button,{active:!0,style:{borderRadius:8,height:80,width:160}},e))})]})}),oW={[nH.M.identifier]:{[nH.u.searchLocalFiles]:oI,[nH.u.listLocalFiles]:oM},[nO.J.identifier]:{[nO.t.search]:oU,[nO.t.crawlSinglePage]:oE,[nO.t.crawlMultiPages]:oP}},oj=(0,d.memo)(({identifier:e,requestArgs:t,apiName:i,loading:n})=>{let l=((e,t)=>{if(!e||!t)return;let i=oW[e];if(i)return i[t]})(e,i);return l?(0,o.Y)(l,{apiName:i,args:(0,iC.N8)(t)||{},identifier:e}):(0,o.Y)(n1.A,{arguments:t,shine:n})});var o_=i(16702);let oH=(0,r.rU)(({css:e,token:t})=>({container:e`
    padding-block: 8px;
    padding-inline: 6px;
  `,reason:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,title:e`
    font-size: 14px;
    color: ${t.colorTextSecondary};
  `})),oO=(0,d.memo)(({reason:e})=>{let{t}=(0,v.Bd)("chat"),{styles:i,theme:n}=oH();return(0,o.Y)(c.Flexbox,{className:i.container,gap:8,children:(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,o.Y)(x.default,{color:n.colorWarning,icon:o_.A,size:16}),(0,o.Y)("div",{className:i.title,children:e?t("tool.intervention.rejectedWithReason",{reason:e}):t("tool.intervention.toolRejected")})]})})}),oK=(0,d.memo)(({toolCallId:e,messageId:t,arguments:i,showPluginRender:n,setShowPluginRender:r,identifier:a,apiName:s,result:p,type:h,intervention:u,toolMessageId:g})=>{if(g&&u?.status==="pending")return(0,o.Y)(oB,{apiName:s,id:g,identifier:a,requestArgs:i||"",toolCallId:e});if(u?.status==="rejected")return(0,o.Y)(oO,{reason:u.rejectedReason});if(u?.status==="aborted")return(0,o.Y)(nX,{});if(!p)return null;if(p.error)return(0,o.Y)(n3,{...p.error,id:t,plugin:h?{apiName:s,arguments:i||"",identifier:a,type:h}:void 0});let m=(0,o.Y)(oj,{apiName:s,identifier:a,loading:!0,requestArgs:i});return p.content===l.m5&&"standalone"!==h?m:(0,o.Y)(d.Suspense,{fallback:m,children:(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.Y)(n2,{content:p.content||"",id:e,plugin:h?{apiName:s,arguments:i||"",identifier:a,type:h}:void 0,pluginState:p.state,requestArgs:i,setShowPluginRender:r,showPluginRender:n}),(0,o.Y)("div",{children:(0,o.Y)(oz,{})})]})})});oK.displayName="GroupToolRender";let oG=(0,d.memo)(({arguments:e,apiName:t,assistantMessageId:i,id:n,intervention:l,index:r,identifier:a,style:s,result:p,type:h,toolMessageId:u})=>{let[g,m]=(0,d.useState)(!1),[x,b]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{l?.status==="pending"&&m(!0)},[l?.status]),(0,o.FD)(c.Flexbox,{gap:8,style:s,children:[(0,o.Y)(nJ,{apiName:t,arguments:e,assistantMessageId:i,id:n,identifier:a,index:r,intervention:l,result:p,setShowPluginRender:b,setShowRender:m,showPluginRender:x,showRender:g,toolMessageId:u,type:h}),(0,o.Y)(nk,{open:g,width:{collapsed:"auto"},children:(0,o.Y)(oK,{apiName:t,arguments:e,identifier:a,intervention:l,messageId:i,result:p,setShowPluginRender:b,showPluginRender:x,toolCallId:n,toolMessageId:u,type:h})})]})});oG.displayName="GroupTool";let oV=(0,r.rU)(({css:e,token:t})=>({toolsContainer:e`
      padding-block: 6px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: 8px;
    `})),oQ=(0,d.memo)(({messageId:e,tools:t})=>{let{styles:i,cx:n}=oV();return t&&0!==t.length?(0,o.Y)(c.Flexbox,{className:n(i.toolsContainer,"tool-blocks"),gap:8,children:t.map((t,i)=>(0,o.Y)(oG,{apiName:t.apiName,arguments:t.arguments,assistantMessageId:e,id:t.id,identifier:t.identifier,index:i,intervention:t.intervention,result:t.result,toolMessageId:t.result_msg_id,type:t.type},t.id))}):null}),oq=td.map(e=>e.rehypePlugin).filter(Boolean),oJ=td.map(e=>e.remarkPlugin).filter(Boolean),oZ=(0,d.memo)(e=>{let{id:t,tools:i,content:n,imageList:l,reasoning:r,error:a}=e,s=!!l&&l.length>0,p=(0,h.L)(iH.B.isMessageInReasoning(t)),u=i&&i.length>0,m=!!r&&r.content?.trim()!==""||!r&&p,{transitionMode:x,highlighterTheme:b,mermaidTheme:f}=(0,eo.k)(el.v.config),y=(0,h.L)(g.R.isMessageGenerating(t)),v="fadeIn"===x&&y,Y=(0,d.useMemo)(()=>Object.fromEntries(td.map(e=>{let i=e.Component;return[e.tag,e=>(0,o.Y)(i,{...e,id:t})]})),[t]),k=(0,d.useMemo)(()=>({animated:v,componentProps:{highlight:{theme:b},mermaid:{theme:f}},components:Y,enableCustomFootnotes:!0,rehypePlugins:oq,remarkPlugins:oJ}),[v,Y,b,f]);return a&&(n===tW.VH||!n)?(0,o.Y)(ny,{error:a,id:t}):(0,o.FD)(c.Flexbox,{gap:8,id:t,children:[m&&(0,o.Y)(i9,{...r,id:t}),(0,o.Y)(nY,{content:n,hasTools:u,markdownProps:k}),s&&(0,o.Y)(iQ,{items:l}),u&&(0,o.Y)(oQ,{messageId:t,tools:i})]})}),oX=(0,d.memo)(({contentId:e,messageIndex:t,index:i,disableEditing:n,error:l,...r})=>{let[a]=(0,h.L)(e=>[e.toggleMessageEditing]),s=(0,d.use)(p.tf);return r.id===e?(0,o.Y)(c.Flexbox,{onDoubleClick:e=>{n||l||!e.altKey||(a(r.id,!0),s?.current?.scrollToIndex(t,{align:"start"}))},children:(0,o.Y)(oZ,{index:i,...r,error:l})}):(0,o.Y)(oZ,{index:i,...r,error:l})},s()),o0=(0,r.rU)(({css:e})=>({container:e`
      &:has(.tool-blocks) {
        width: 100%;
      }
    `})),o1=(0,d.memo)(({blocks:e,contentId:t,disableEditing:i,messageIndex:n,id:l,content:r})=>{let{styles:a}=o0(),[s]=(0,h.L)(e=>[g.R.isMessageCollapsed(l)(e)]),p=(0,d.useMemo)(()=>({assistantGroupId:l}),[l]);return s?r&&(0,o.Y)(c.Flexbox,{children:(0,o.Y)(nx,{content:r,id:l})}):(0,o.Y)(nb,{value:p,children:(0,o.Y)(c.Flexbox,{className:a.container,gap:8,children:e.map((e,o)=>(0,nm.n)(oX,{...e,contentId:t,disableEditing:i,index:o,key:`${l}_${o}`,messageIndex:n}))})})},s()),o2=(0,r.rU)(({cx:e,css:t,token:i,responsive:n},{variant:o})=>{let l=t`
      margin-block-end: -16px;
      transition: background-color 100ms ${i.motionEaseOut};
    `;return{actions:t`
        flex: none;
        align-self: flex-end;
        justify-content: flex-end;
      `,container:e("docs"===o&&l,t`
          position: relative;

          width: 100%;
          max-width: 100vw;
          padding-block: 24px 12px;
          padding-inline: 12px;

          @supports (content-visibility: auto) {
            contain-intrinsic-size: auto 100lvh;
          }

          time {
            display: inline-block;
            white-space: nowrap;
          }

          div[role='menubar'] {
            display: flex;
          }

          time,
          div[role='menubar'] {
            pointer-events: none;
            opacity: 0;
            transition: opacity 200ms ${i.motionEaseOut};
          }

          &:hover {
            time,
            div[role='menubar'] {
              pointer-events: unset;
              opacity: 1;
            }
          }

          ${n.mobile} {
            padding-block-start: ${"docs"===o?"16px":"12px"};
            padding-inline: 8px;
          }
        `),messageContent:t`
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: 100%;

        ${n.mobile} {
          flex-direction: column !important;
        }
      `}}),o8=(0,d.memo)(({id:e,index:t,disableEditing:i,isLatestItem:n})=>{let l=(0,h.L)(u._1.getDisplayMessageById(e),s()),{usage:r,createdAt:a,meta:p,children:m,performance:x,model:b,provider:f}=l,{mobile:y}=(0,M.Q)(),v="left",{styles:Y}=o2({variant:"chat"===(0,w.o)(k.c.displayMode)?"bubble":"docs"}),[A]=(0,eg.B)(e=>[em.z.isInboxSession(e)]),[F]=(0,eu.o)(e=>[e.toggleSystemRole]),C=(0,ec.F)(),S=(0,h.L)(u._1.getGroupLatestMessageWithoutTools(e)),T=S?.id,z=(0,h.L)(g.R.isMessageEditing(T||"")),D=(0,d.useCallback)(()=>{A?C():F(!0)},[A]);return(0,o.FD)(c.Flexbox,{className:Y.container,gap:y?6:12,style:n?{minHeight:"calc(-300px + 100dvh)"}:void 0,children:[(0,o.FD)(c.Flexbox,{gap:4,horizontal:!0,children:[(0,o.Y)(X,{alt:p.title||"avatar",avatar:p,onClick:D,placement:v,size:32}),(0,o.Y)(ed,{avatar:p,placement:v,showTitle:!0,style:{marginBlockEnd:0},time:a})]}),z&&T?(0,o.Y)(ng,{content:S?.content,id:T}):(0,o.FD)(c.Flexbox,{align:"flex-start",className:Y.messageContent,"data-layout":"vertical",direction:"vertical",gap:8,width:"100%",children:[m&&m.length>0&&(0,o.Y)(o1,{blocks:m,content:S?.content,contentId:T,disableEditing:i,id:e,messageIndex:t}),b&&(0,o.Y)(ij,{model:b,performance:x,provider:f,usage:r}),!i&&(0,o.Y)(c.Flexbox,{align:"flex-start",className:Y.actions,role:"menubar",children:(0,o.Y)(nh,{contentBlock:S,contentId:T,data:l,id:e,index:t})})]}),y&&(0,o.Y)(ee,{borderSpacing:32})]})},s());var o4=i(74013),o3=i(99278);let o6=(0,d.memo)(({actions:e,placement:t,variant:i,editing:n,ref:l})=>{let{styles:r}=q({editing:n,placement:t,variant:i});return(0,o.Y)(c.Flexbox,{align:"flex-start",className:r.actions,ref:l,role:"menubar",children:e})}),o5=(0,d.memo)(({avatarAddon:e,onAvatarClick:t,avatarProps:i,actions:n,className:l,primary:r,loading:a,message:s,placeholderMessage:p="...",placement:h="left",variant:u="bubble",avatar:g,error:m,showTitle:x,time:b,editing:f,messageExtra:y,renderMessage:v,errorMessage:Y,onDoubleClick:k,aboveMessage:w,belowMessage:A,markdownProps:F,showAvatar:C=!0,titleAddon:S,disabled:T=!1,id:z,...D})=>{let{mobile:B}=(0,M.Q)(),{cx:N,styles:$}=q({disabled:T,editing:f,placement:h,primary:r,showTitle:x,time:b,title:g.title,variant:u}),I=(0,d.useRef)(null),L=(0,d.useRef)(null),[P]=(0,d.useState)("right"===h?"horizontal":"vertical");return(0,o.FD)(c.Flexbox,{className:N($.container,l),direction:"left"===h?"horizontal":"horizontal-reverse",gap:B?6:12,...D,children:[C&&(0,o.Y)(X,{...i,addon:e,alt:i?.alt||g.title||"avatar",avatar:g,loading:a,onClick:t,placement:h,size:B?32:void 0,style:{marginTop:x?-12:6,...i?.style}}),(0,o.FD)(c.Flexbox,{align:"left"===h?"flex-start":"flex-end",className:$.messageContainer,ref:L,children:[(0,o.Y)(ed,{avatar:g,placement:h,showTitle:x,time:b,titleAddon:S}),w,(0,o.FD)(c.Flexbox,{align:"left"===h?"flex-start":"flex-end",className:$.messageContent,"data-layout":P,direction:"horizontal"===P?"left"===h?"horizontal":"horizontal-reverse":"vertical",gap:8,children:[(0,o.Y)(c.Flexbox,{ref:I,width:"100%",children:m&&(s===p||!s)?(0,o.Y)(ei,{error:m,message:Y,placement:h}):(0,o.Y)(er,{disabled:T,editing:f,id:z,markdownProps:F,message:s,messageExtra:(0,o.FD)(o.FK,{children:[m&&(0,o.Y)(ei,{error:m,message:Y,placement:h}),y]}),onDoubleClick:k,placement:h,primary:r,renderMessage:v,variant:u})}),n&&(0,o.Y)(o6,{actions:n,editing:f,placement:h,variant:u})]}),A]}),B&&"bubble"===u&&C&&(0,o.Y)(ee,{borderSpacing:32})]})});var o7=i(70039),o9=i(18455),le=i(5232),lt=i(81671),li=i(90317);let ln=(0,r.rU)(({css:e,token:t})=>({collapse:e`
    padding-block: 0;
    padding-inline: ${t.paddingXS}px;

    .ant-collapse-content-box {
      padding: 0;
    }

    .ant-collapse-header {
      padding: 0 !important;
      color: ${t.colorTextTertiary};
    }

    .ant-collapse-expand-icon {
      color: ${t.colorTextTertiary} !important;
    }
  `})),lo=(0,d.memo)(({data:e})=>{let{t}=(0,v.Bd)("chat"),i=(0,r.DP)(),{styles:n}=ln(),{todos:l}=e,a=(0,eg.B)(em.z.currentGroupAgents),s=e=>{if(!e)return;let t=a?.find(t=>t.id===e);return t?.title||e},d=l.filter(e=>e.finished).length,p=l.length,h=(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,style:{maxWidth:"100%",overflow:"hidden"},children:[(0,o.Y)(x.default,{color:i.colorTextTertiary,icon:le.A,size:16,style:{flexShrink:0}}),(0,o.FD)(b.A,{color:i.colorTextTertiary,ellipsis:{tooltip:!0},style:{flex:1},weight:400,children:[d," / ",p," ",t("supervisor.todoList.title")]})]}),u=0===l.length?(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,padding:"8px 0",children:[(0,o.Y)(lt.A,{color:i.colorSuccess,size:16}),(0,o.Y)("span",{style:{color:i.colorTextSecondary,fontSize:i.fontSizeSM},children:t("supervisor.todoList.allComplete")})]}):(0,o.Y)(c.Flexbox,{gap:0,children:l.map((e,t)=>(0,o.FD)(c.Flexbox,{align:"center",gap:8,horizontal:!0,style:{borderBottom:t<l.length-1?`1px solid ${i.colorBorderSecondary}`:"none",padding:"8px 0",width:"100%"},children:[(0,o.Y)(Y.default,{style:{color:e.finished?i.colorSuccess:i.colorTextTertiary,flexShrink:0},children:e.finished?(0,o.Y)(lt.A,{size:16}):(0,o.Y)(li.A,{size:16})}),(0,o.Y)("span",{style:{color:e.finished?i.colorTextTertiary:i.colorText,fontSize:i.fontSize,textDecoration:e.finished?"line-through":"none"},children:e.content}),s(e.assignee)&&(0,o.FD)("span",{style:{color:i.colorTextTertiary,fontSize:i.fontSizeSM,marginLeft:6},children:["@",s(e.assignee)]})]},t))});return(0,o.Y)(o9.A,{className:n.collapse,expandIconPosition:"end",items:[{children:u,key:"todos",label:h}],size:"small",styles:{header:{fontSize:i.fontSize}},variant:"borderless"})});lo.displayName="TodoList";let ll=(0,r.rU)(({token:e,css:t,cx:i})=>({modelInfo:i(t`
    font-size: 12px;
    color: ${e.colorTextQuaternary};
  `)})),lr=(0,d.memo)(({id:e})=>{let t=(0,h.L)(u._1.getDisplayMessageById(e),s()),{content:i,error:n,groupId:l,role:a,updatedAt:p,createdAt:g}=t,{t:m}=(0,v.Bd)("chat"),x=(0,r.DP)(),{styles:f}=ll(),[y,Y]=(0,h.L)(e=>[e.internal_triggerSupervisorDecision,e.deleteMessage]),k=null,w=!1;if(i&&!n)try{let e=JSON.parse(i);"supervisor_todo"===e.type&&Array.isArray(e.todos)&&(k=e,w=!0)}catch{"supervisor"===a&&i?.startsWith("### Todo List")&&(k=(e=>{let t=e.split("\n"),i=[];for(let e of t){let t=e.trim().match(/^-\s*\[([\sx])]\s*(.+)$/i);if(t){let[,e,n]=t,o="x"===e.toLowerCase(),l=n.replace(/^~~(.+)~~$/,"$1");i.push({content:l.trim(),finished:o})}}return{timestamp:Date.now(),todos:i,type:"supervisor_todo"}})(i),w=!0)}let A=n?.type===o7.T.SupervisorDecisionFailed?m("supervisor.decisionFailed",{ns:"error"}):n?.message,F=(0,d.useCallback)(async()=>{l&&(await Y(e),y(l,void 0,!0))},[l,e,Y,y]),C=A?(0,o.FD)(c.Flexbox,{gap:8,style:{background:x.colorBgContainer,border:`1px solid ${x.colorBorderSecondary}`,borderRadius:8,marginBottom:12,maxWidth:"400px",padding:12},children:[(0,o.Y)(b.A,{children:A}),"supervisor"===a&&l&&(0,o.Y)(P.A,{icon:o4.A,onClick:F,type:"primary",children:m("retry",{ns:"common"})})]}):void 0;if(w&&k){let e=t.extra?.model,i=t.extra?.provider,n=e||i;return(0,o.Y)(o5,{avatar:{avatar:o3.J7,title:m("groupSidebar.members.orchestrator")},loading:!1,placement:"left",primary:!1,renderMessage:()=>(0,o.FD)(c.Flexbox,{gap:8,children:[(0,o.Y)(lo,{data:k}),n&&(0,o.FD)(c.Flexbox,{align:"center",className:f.modelInfo,gap:4,horizontal:!0,children:[e&&(0,o.Y)(ix.A,{model:e,type:"mono"}),i&&e?`${i}/${e}`:i||e]})]}),showTitle:!0,time:p||g,variant:"bubble"})}let S=n?()=>C:void 0;return(0,o.Y)(o5,{avatar:{avatar:o3.J7,title:m("groupSidebar.members.orchestrator")},loading:!1,message:n?void 0:i,placement:"left",primary:!1,renderMessage:S,showTitle:!0,time:p||g,variant:w||n?"docs":"bubble"})});lr.displayName="SupervisorMessage";let la=(0,d.memo)(({toolCallId:e,variant:t})=>{let i=(0,h.L)(e6.E1.getDbMessageByToolCallId(e)),{data:n,language:l}=(0,d.useMemo)(()=>{try{let e=JSON.parse(i?.content||"");if("string"==typeof e)return{data:e,language:"plaintext"};return{data:JSON.stringify(e,null,2),language:"json"}}catch{return{data:i?.content||"",language:"plaintext"}}},[i?.content]);return(0,o.Y)(R.A,{language:l,style:{maxHeight:200,overflow:"scroll",width:"100%"},variant:t,children:n})}),ls=(0,d.memo)(({toolCallId:e})=>{let t=(0,h.L)(e6.E1.getDbMessageByToolCallId(e));return t?.pluginState&&(0,o.Y)(R.A,{language:"json",style:{maxHeight:200,maxWidth:800,overflow:"scroll"},children:JSON.stringify(t?.pluginState,null,2)})}),ld=(0,d.memo)(({payload:e,requestArgs:t,toolCallId:i})=>{let n,{t:l}=(0,v.Bd)("plugin");try{n=JSON.stringify(JSON.parse(t||""),null,2)}catch{n=""}return(0,o.Y)(nT.A,{items:[{children:(0,o.Y)(R.A,{language:"json",children:n}),key:"arguments",label:l("debug.arguments")},{children:(0,o.Y)(la,{toolCallId:i}),key:"response",label:l("debug.response")},{children:(0,o.Y)(R.A,{language:"json",children:JSON.stringify(e,null,2)}),key:"function_call",label:l("debug.function_call")},{children:(0,o.Y)(ls,{toolCallId:i}),key:"pluginState",label:l("debug.pluginState")}],style:{display:"grid",maxWidth:800,minWidth:400}})}),lc=(0,d.memo)(({id:e})=>{let t=(0,n$.j)(nL.w.getToolManifestById(e)),[i,n]=(0,d.useState)(!1),{t:l}=(0,v.Bd)("plugin");return nI.V.isSettingSchemaNonEmpty(t?.settings)&&(0,o.FD)(o.FK,{children:[(0,o.Y)(N.A,{icon:nM.A,onClick:()=>{n(!0)},size:"small",title:l("setting")}),(0,o.Y)(nN.A,{id:e,onClose:()=>{n(!1)},open:i,schema:t?.settings})]})}),lp=(0,r.rU)(({css:e,token:t})=>({apiName:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    text-overflow: ellipsis;
  `,shinyText:(0,eE.f)(t)})),lh=(0,d.memo)(({messageId:e,index:t,apiName:i,title:n,toolCallId:l})=>{let{styles:r}=lp(),a=(0,h.L)(g.R.isToolApiNameShining(e,t,l));return(0,o.FD)(c.Flexbox,{align:"center",className:a?r.shinyText:"",gap:4,horizontal:!0,children:[(0,o.Y)("div",{children:n}),(0,o.Y)(x.default,{icon:iX.A}),(0,o.Y)("span",{className:r.apiName,children:i})]})}),lu=(0,r.rU)(({css:e,token:t})=>({apiName:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    text-overflow: ellipsis;
  `,shinyText:(0,eE.f)(t)})),lg=(0,d.memo)(({identifier:e,messageId:t,index:i,apiName:n,toolCallId:l})=>{let{t:r}=(0,v.Bd)("plugin"),{styles:a}=lu(),p=(0,n$.j)(n_.P.getMetaById(e),s()),h=(0,d.useMemo)(()=>[{apiName:r(`search.apiName.${n}`,n),id:nO.J.identifier,title:r("search.title")},{apiName:r(`localSystem.apiName.${n}`,n),id:nH.M.identifier,title:r("localSystem.title")}],[]).find(t=>t.id===e);if(h)return(0,o.Y)(lh,{...h,identifier:e,index:i,messageId:t,toolCallId:l});let u=nI.V.getPluginTitle(p)??r("unknownPlugin");return(0,o.FD)(c.Flexbox,{align:"center",gap:6,horizontal:!0,children:[(0,o.Y)("div",{children:u})," ",(0,o.Y)(x.default,{icon:iX.A}),(0,o.Y)("span",{className:a.apiName,children:n})]})}),lm=(0,r.rU)(({css:e,token:t,cx:i})=>({actions:i("inspector-container",e`
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    `),apiName:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    text-overflow: ellipsis;
  `,container:e`
    :hover {
      .inspector-container {
        opacity: 1;
      }
    }
  `,plugin:e`
    display: flex;
    gap: 4px;
    align-items: center;
    width: fit-content;
  `,shinyText:(0,eE.f)(t),tool:e`
    cursor: pointer;

    width: fit-content;
    padding-block: 2px;
    border-radius: 6px;

    color: ${t.colorTextTertiary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `})),lx=(0,d.memo)(({messageId:e,index:t,identifier:i,apiName:n,id:l,arguments:r,payload:a,showPluginRender:s,setShowPluginRender:p,hidePluginUI:h=!1})=>{let{t:u}=(0,v.Bd)("plugin"),{styles:g}=lm(),[m,x]=(0,d.useState)(!1);return(0,o.FD)(c.Flexbox,{className:g.container,gap:4,children:[(0,o.FD)(c.Flexbox,{align:"center",distribution:"space-between",gap:8,horizontal:!0,children:[(0,o.Y)(c.Flexbox,{align:"center",className:g.tool,gap:8,horizontal:!0,paddingInline:4,children:(0,o.Y)(lg,{apiName:n,identifier:i,index:t,messageId:e,toolCallId:l})}),(0,o.FD)(c.Flexbox,{className:g.actions,horizontal:!0,children:[!h&&(0,o.Y)(N.A,{icon:s?nw.A:nA.A,onClick:()=>{p(!s)},size:"small",title:u(s?"inspector.args":"inspector.pluginRender")}),(0,o.Y)(N.A,{icon:m?nF.A:nC.A,onClick:()=>{x(!m)},size:"small",title:u(m?"debug.off":"debug.on")}),(0,o.Y)(lc,{id:i})]})]}),m&&(0,o.Y)(ld,{payload:a,requestArgs:r,toolCallId:l})]})});var lb=i(91942),lf=i(24617),ly=i(97220);let lv=(0,r.rU)(({css:e,token:t})=>({copyable:e`
    cursor: pointer;
    width: 100%;
    margin-block: 2px;
    padding: 4px;

    &:hover {
      border-radius: 6px;
      background: ${t.colorFillTertiary};
    }
  `})),lY=(0,d.memo)(({value:e})=>{let{message:t}=eL.A.useApp(),{t:i}=(0,v.Bd)("common"),{styles:n}=lv();return(0,o.Y)("div",{className:n.copyable,onClick:async()=>{await (0,tE.l)(e),t.success(i("copySuccess"))},children:e})}),lk=(0,r.rU)(({css:e,token:t})=>({arrayRow:e`
    &:not(:first-child) {
      border-block-start: 1px dotted ${t.colorBorderSecondary};
    }
  `,colon:e`
    color: ${t.colorTextTertiary};
  `,key:e`
    color: ${t.colorTextTertiary};
  `,row:e`
    display: flex;
    align-items: baseline;

    &:not(:first-child) {
      border-block-start: 1px dotted ${t.colorBorderSecondary};
    }
  `,shineText:(0,eE.f)(t),value:e`
    color: ${t.colorTextSecondary};
  `})),lw=(0,d.memo)(({hasMinWidth:e,shine:t,value:i,objectKey:n})=>{let{styles:l,cx:r}=lk(),a=(0,ty.a)(),s=Array.isArray(i)?i.map(e=>"object"==typeof e?JSON.stringify(e):e):"object"==typeof i&&null!==i?Object.entries(i).map(([e,t])=>`${e}: ${"object"==typeof t?JSON.stringify(t):t}`).join(", "):String(i);return(0,o.FD)("div",{className:l.row,children:[(0,o.Y)("span",{className:l.key,style:{minWidth:e?a?60:140:void 0},children:n}),(0,o.Y)("span",{className:l.colon,children:":"}),(0,o.Y)("div",{className:r(t?l.shineText:l.value),style:{width:"100%"},children:"string"==typeof s?(0,o.Y)(lY,{value:s}):s.map((e,t)=>(0,o.Y)(lY,{value:e},t+e))})]})}),lA=(0,r.rU)(({css:e,token:t,cx:i})=>({button:e`
    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
    }
  `,codeContainer:e`
    border-radius: ${t.borderRadiusLG}px;
  `,container:e`
    position: relative;

    overflow: auto;

    max-height: 200px;
    padding-block: 4px;
    padding-inline: 12px 64px;
    border-radius: ${t.borderRadiusLG}px;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    line-height: 1.5;

    background: ${t.colorFillQuaternary};

    pre {
      margin: 0 !important;
      background: none !important;
    }

    &:hover {
      .actions {
        opacity: 1;
      }
    }
  `,editButton:i("actions",e`
      position: absolute;
      z-index: 10;
      inset-block-start: 4px;
      inset-inline-end: 4px;

      opacity: 0;

      transition: opacity 0.2s ${t.motionEaseInOut};
    `)})),lF=(0,d.memo)(({arguments:e="",shine:t,actions:i})=>{let{styles:n}=lA(),l=(0,d.useMemo)(()=>{try{let t=(0,lf.parse)(e);if(0===Object.keys(t).length)return{};return t}catch{return e}},[e]),r=(0,ly.n)(e);if("string"==typeof l)return!!r&&(0,o.Y)("div",{className:n.container,children:(0,o.Y)(R.A,{language:"yaml",showLanguage:!1,children:r})});let a=Object.keys(l).length>1;return 0===Object.keys(l).length?null:(0,o.FD)("div",{className:n.container,children:[!!i&&(0,o.Y)(c.Flexbox,{className:n.editButton,gap:4,horizontal:!0,children:i}),Object.entries(l).map(([e,i])=>(0,o.Y)(lw,{editable:!1,hasMinWidth:a,objectKey:e,shine:t,value:i},e))]})}),lC=(0,r.rU)(({css:e,token:t})=>({form:e`
    position: relative;

    width: 100%;
    min-width: 600px;
    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadiusLG}px;
  `,formItem:e`
    margin-block-end: 4px !important;
  `,input:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,row:e`
    position: relative;
  `,title:e`
    color: ${t.colorTextTertiary};
  `})),lS=e=>Object.entries(e).map(([e,t],i)=>({id:`${e}-${i}`,key:e,value:"string"==typeof t?t:JSON.stringify(t)})).filter(e=>e.key),lT=(0,d.memo)(({initialValue:e={},onFinish:t,onCancel:i})=>{let{styles:n}=lC(),{t:l}=(0,v.Bd)(["tool","common"]),[r]=ov.A.useForm(),{message:a}=eL.A.useApp(),s=(0,d.useRef)(null);(0,d.useEffect)(()=>{r.setFieldsValue({items:lS(e)})},[e,r]);let[p,h]=(0,d.useState)(!1),u=async()=>{h(!0);try{var e;let i;await r.validateFields();let n=(e=r.getFieldsValue().items||[],i={},e.forEach(e=>{if(e.key)try{i[e.key]=JSON.parse(e.value||'""')}catch{i[e.key]=e.value||""}}),i);await t?.(n)}catch(e){console.error("Validation Failed:",e),a.error(l("updateArgs.formValidationFailed")||"Please check the form for errors.")}h(!1)},g=()=>{i?.()};return(0,o.FD)(ov.A,{autoComplete:"off",className:n.form,form:r,initialValues:{items:lS(e)},ref:s,children:[(0,o.FD)(c.Flexbox,{className:n.title,gap:8,horizontal:!0,children:[(0,o.Y)(c.Flexbox,{flex:1,children:"key"}),(0,o.Y)(c.Flexbox,{flex:4,children:"value"})]}),(0,o.Y)(ov.A.List,{name:"items",children:(e,{add:t,remove:i})=>(0,o.FD)(c.Flexbox,{width:"100%",children:[e.map(({key:e,name:t,...a},s)=>(0,o.FD)(c.Flexbox,{align:"center",className:n.row,gap:8,horizontal:!0,width:"100%",children:[(0,o.Y)(ov.A.Item,{...a,className:n.formItem,name:[t,"key"],rules:[{message:l("updateArgs.keyRequired"),required:!0},{validator:e=>{var t,i;return t=r.getFieldValue(["items",s]),i=r.getFieldValue("items"),t?.key&&i.map(e=>e?.key).filter(Boolean).filter(e=>e===t.key).length>1?Promise.reject(Error(l("updateArgs.duplicateKeyError"))):Promise.resolve()}}],style:{flex:1},validateTrigger:["onChange","onBlur"],children:(0,o.Y)(oy.A,{allowClear:!0,className:n.input,placeholder:l("updateArgs.form.key"),variant:"filled"})}),(0,o.Y)(ov.A.Item,{...a,className:n.formItem,name:[t,"value"],style:{flex:4},children:(0,o.Y)(oy.A,{allowClear:!0,className:n.input,placeholder:l("updateArgs.form.value"),variant:"filled"})}),(0,o.Y)(N.A,{icon:tQ.A,onClick:()=>i(t),size:"small",style:{marginBottom:6},title:l("delete",{ns:"common"})})]},e)),(0,o.Y)(ov.A.Item,{style:{marginBottom:0,marginTop:8},children:(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,justify:"space-between",children:[(0,o.Y)(P.A,{color:"default",icon:(0,o.Y)(x.default,{icon:oY.A}),onClick:()=>t({id:`new-${Date.now()}`,key:"",value:""}),size:"small",variant:"filled",children:l("updateArgs.form.add")}),(0,o.FD)(c.Flexbox,{gap:8,horizontal:!0,children:[(0,o.Y)(P.A,{onClick:g,size:"small",children:l("cancel",{ns:"common"})}),(0,o.Y)(P.A,{loading:p,onClick:u,size:"small",type:"primary",children:l("save",{ns:"common"})})]})]})})]})})]})}),lz=(0,d.memo)(({id:e,content:t,pluginState:i,plugin:n,requestArgs:l,showPluginRender:r,setShowPluginRender:a,pluginError:s,tool_call_id:p})=>{let{t:u}=(0,v.Bd)(["tool","common"]),[m]=(0,h.L)(t=>[g.R.isPluginApiInvoking(e)(t)]),[x,b]=(0,d.useState)(!1),{message:f}=eL.A.useApp(),[y,Y]=(0,h.L)(e=>[e.optimisticUpdatePluginArguments,e.reInvokeToolMessage]),k=(0,d.useCallback)(()=>{b(!1)},[]),w=(0,d.useCallback)(async t=>{if(e)try{JSON.stringify(t,null,2)!==l&&(await y(e,t,!0),await Y(e)),b(!1)}catch(e){console.error("Error stringifying arguments:",e),f.error(u("updateArgs.stringifyError"))}},[l,e]);return((0,d.useEffect)(()=>{n?.type&&!m&&a(!["default","mcp"].includes(n?.type))},[n?.type,m]),m)?(0,o.Y)(lF,{arguments:l,shine:!0}):r?(0,o.Y)(c.Flexbox,{gap:12,id:e,width:"100%",children:(0,o.Y)(n0.A,{arguments:n?.arguments,content:t,id:e,identifier:n?.identifier,loading:m,payload:n,pluginError:s,pluginState:i,type:n?.type})}):x?(0,o.Y)(lT,{initialValue:(e=>{try{let t=(0,lf.parse)(e);return"object"==typeof t&&null!==t?t:{}}catch{return{}}})(l||""),onCancel:k,onFinish:w}):(0,o.FD)(c.Flexbox,{gap:12,id:e,width:"100%",children:[(0,o.Y)(lF,{actions:(0,o.FD)(o.FK,{children:[(0,o.Y)(N.A,{icon:of.A,onClick:()=>{b(!0)},size:"small",title:u("edit",{ns:"common"})}),(0,o.Y)(N.A,{icon:lb.A,onClick:async()=>{await Y(e)},size:"small",title:u("run",{ns:"common"})})]}),arguments:l}),p&&(0,o.Y)(la,{toolCallId:p,variant:"outlined"})]})});lz.displayName="CustomRender";let lD=(0,d.memo)(({id:e,plugin:t})=>{let{styles:i}=(0,eC.IS)(),{t:n}=(0,v.Bd)("error"),l=(0,r.DP)(),[a,d]=(0,h.L)(e=>[e.regenerateAssistantMessage,e.deleteMessage]),p=t?.identifier,u=(0,n$.j)(nL.w.getPluginMetaById(p),s()),g=(0,n$.j)(nL.w.getToolManifestById(p),s());return!!g&&(0,o.Y)(eC.Sf,{children:(0,o.FD)(Y.default,{gap:16,style:{maxWidth:400},children:[(0,o.Y)(V.A,{avatar:nI.V.getPluginAvatar(u)||"⚙️",background:l.colorFillContent,gap:12,size:80}),(0,o.Y)(c.Flexbox,{style:{fontSize:20},children:n("pluginSettings.title",{name:nI.V.getPluginTitle(u)})}),(0,o.Y)(c.Flexbox,{className:i.desc,children:n("pluginSettings.desc")}),(0,o.Y)(C.A,{style:{margin:"0 16px"}}),g.settings&&(0,o.Y)(n8.A,{id:g.identifier,schema:g.settings}),(0,o.Y)(P.A,{block:!0,onClick:()=>{a(e),d(e)},style:{marginTop:8},type:"primary",children:n("unlock.confirm")})]})})}),lB=(0,d.memo)(({id:e,type:t,body:i,message:n,plugin:l})=>{let{t:r}=(0,v.Bd)("error");return"PluginSettingsInvalid"===t?(0,o.Y)(lD,{id:e,plugin:l}):(0,o.Y)(et.A,{extra:(0,o.Y)(c.Flexbox,{children:(0,o.Y)(R.A,{actionIconSize:"small",language:"json",variant:"borderless",children:JSON.stringify(i||{message:n,type:t},null,2)})}),message:r(`response.${t}`),showIcon:!0,type:"error"})}),lM=(0,d.memo)(({toolCallId:e,toolIndex:t,messageId:i,requestArgs:n,showPluginRender:l,setShowPluginRender:r})=>{let a=(0,h.L)(g.R.isToolCallStreaming(i,t)),s=(0,h.L)(e6.E1.getDbMessageByToolCallId(e));return a||!s?null:s?s.error?(0,o.Y)(lB,{...s.error,id:i,plugin:s.plugin}):(0,o.Y)(d.Suspense,{children:(0,o.Y)(lz,{...s,requestArgs:n,setShowPluginRender:r,showPluginRender:l})}):void 0});lM.displayName="ToolRender";let lN=(0,d.memo)(({arguments:e,apiName:t,messageId:i,toolCallId:n,index:l,identifier:r,payload:a})=>{let[s,p]=(0,d.useState)(!1);return(0,o.FD)(c.Flexbox,{gap:8,style:{paddingBottom:12},children:[(0,o.Y)(lx,{apiName:t,arguments:e,id:n,identifier:r,index:l,messageId:i,payload:a,setShowPluginRender:p,showPluginRender:s}),(0,o.Y)(lM,{messageId:i,requestArgs:e,setShowPluginRender:p,showPluginRender:s,toolCallId:n,toolIndex:l})]})});lN.displayName="AssistantTool";let l$=(0,d.memo)(({id:e,index:t})=>{let{t:i}=(0,v.Bd)("plugin"),n=(0,h.L)(e6.E1.getDbMessageById(e),s()),l=(0,h.L)(e=>e.deleteToolMessage),[r,a]=(0,d.useState)(!1),p=async()=>{a(!0);try{await l(e)}finally{a(!1)}};return(0,o.FD)(c.Flexbox,{gap:4,paddingBlock:12,paddingInline:12,children:[(0,o.Y)(et.A,{action:(0,o.Y)(nf.Ay,{loading:r,onClick:p,size:"small",type:"primary",children:i("inspector.delete")}),message:i("inspector.orphanedToolCall"),type:"warning",variant:"borderless"}),n.plugin&&(0,o.Y)(lN,{...n.plugin,index:t,messageId:e,payload:n.plugin||{},toolCallId:n.tool_call_id})]})});var lI=i(43262);let lL=(0,d.memo)(({id:e,data:t,index:i})=>{let{t:n}=(0,v.Bd)("common"),l=(0,tg.useSearchParams)().get("topic"),[r,a,s,c,u,m,x,b,f,y,Y,k]=(0,h.L)(t=>[tm.Z.hasThreadBySourceMsgId(e)(t),g.R.isMessageRegenerating(e)(t),t.toggleMessageEditing,t.deleteMessage,t.regenerateUserMessage,t.translateMessage,t.ttsMessage,t.delAndRegenerateMessage,t.copyMessage,t.openThreadCreator,t.resendThreadMessage,t.delAndResendThreadMessage]),{regenerate:w,edit:A,copy:F,divider:C,del:S,tts:T,translate:z}=t3({hasThread:r,isRegenerating:a}),D=(0,d.use)(B),M=[w,A].filter(Boolean),{message:N}=eL.A.useApp(),$=(0,d.use)(p.tf),I=(0,d.useCallback)(async o=>{switch("edit"===o.key&&(s(e,!0),$?.current?.scrollToIndex(i,{align:"start"})),o.key){case"copy":await f(e,t.content),N.success(n("copySuccess"));break;case"branching":if(!l){N.warning(n("branchingRequiresSavedTopic"));break}y(e);break;case"del":c(e);break;case"regenerate":D?Y(e):u(e),t.error&&c(e);break;case"delAndRegenerate":D?k(e):b(e);break;case"tts":x(e)}"translate"===o.keyPath.at(-1)&&m(e,o.keyPath[0])},[t.content,t.error,D,l]);return(0,o.Y)(tu.A,{items:M,menu:{items:[A,F,C,T,z,C,w,S]},onActionClick:I,size:"small",variant:"borderless"})});var lP=i(63806);let lE=(0,r.rU)(({css:e,token:t,prefixCls:i})=>({button:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 4px;

    color: ${t.colorTextSecondary};

    transition: all 0.2s ease;

    &:hover:not(.${i}-disabled) {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }

    &.${i}-disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `,container:e`
    user-select: none;

    display: inline-flex;
    gap: 4px;
    align-items: center;

    height: 20px;
    padding-inline: 4px;
    border-radius: ${t.borderRadiusSM}px;
  `,text:e`
    min-width: 24px;
    height: 20px;

    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: ${t.colorTextSecondary};
    text-align: center;
  `})),lR=(0,d.memo)(({activeBranchIndex:e,count:t,messageId:i})=>{let{styles:n,cx:l,prefixCls:r}=lE(),a=(0,h.L)(e=>e.switchMessageBranch),s=e>0,d=e<t-1;return(0,o.FD)(c.Flexbox,{className:n.container,horizontal:!0,children:[(0,o.Y)("div",{className:l(n.button,!s&&`${r}-disabled`),onClick:()=>{e>0&&a(i,e-1)},role:"button",tabIndex:s?0:-1,children:(0,o.Y)(x.default,{icon:lP.A,size:16})}),(0,o.FD)(Y.default,{className:n.text,children:[e+1,"/",t]}),(0,o.Y)("div",{className:l(n.button,!d&&`${r}-disabled`),onClick:()=>{e<t-1&&a(i,e+1)},role:"button",tabIndex:d?0:-1,children:(0,o.Y)(x.default,{icon:iX.A,size:16})})]})}),lU=(0,d.memo)(({id:e,data:t,index:i,disableEditing:n})=>{let{branch:l}=t,[r]=(0,h.L)(t=>[g.R.isMessageEditing(e)(t)]);return!r&&(0,o.FD)(c.Flexbox,{align:"center",horizontal:!0,children:[!n&&(0,o.Y)(c.Flexbox,{align:"flex-start",role:"menubar",children:(0,o.Y)(lL,{data:t,id:e,index:i})}),l&&(0,o.Y)(lR,{activeBranchIndex:l.activeBranchIndex,count:l.count,messageId:e})]})});var lW=i(58751);let lj=(0,r.rU)(({css:e,cx:t})=>({action:t(e`
      align-self: flex-end;
      opacity: 0;
    `,"rag-query-actions"),container:e`
    &:hover {
      .rag-query-actions {
        opacity: 1;
      }
    }
  `,content:e`
    overflow-y: scroll;
    flex-wrap: wrap;

    width: 100%;
    max-height: 54px;
    margin-block-start: 6px;
  `})),l_=(0,d.memo)(({ragQuery:e,content:t,id:i})=>{let{styles:n}=lj(),{t:l}=(0,v.Bd)("chat"),[r,a]=(0,h.L)(e=>[e.deleteUserMessageRagQuery,e.rewriteQuery]);return!!e&&!s()(e,t)&&(0,o.FD)(c.Flexbox,{className:n.container,children:[(0,o.Y)(c.Flexbox,{align:"center",className:n.content,gap:4,horizontal:!0,children:(0,o.Y)(b.A,{style:{fontSize:12},type:"secondary",children:e})}),(0,o.FD)(c.Flexbox,{className:n.action,horizontal:!0,children:[(0,o.Y)(N.A,{icon:nS.A,onClick:()=>{r(i)},size:"small",title:l("rag.userQuery.actions.delete")}),(0,o.Y)(N.A,{icon:lW.A,onClick:()=>{a(i)},size:"small",title:l("rag.userQuery.actions.regenerate")})]})]})}),lH=(0,d.memo)(({extra:e,id:t,content:i})=>{let n=(0,h.L)(g.R.isMessageGenerating(t)),l=!!e?.translate,r=!!e?.tts;if(l||r)return(0,o.FD)(c.Flexbox,{gap:8,style:{marginTop:8},children:[e?.tts&&(0,o.Y)(t7,{children:(0,o.Y)(ic,{content:i,id:t,loading:n,...e?.tts})}),e?.translate&&(0,o.Y)(t7,{children:(0,o.Y)(im,{id:t,...e?.translate,loading:n})})]})}),lO=({content:e,id:t})=>{let{t:i}=(0,v.Bd)("chat"),[n]=(0,h.L)(e=>[e.openMessageDetail]);return(0,o.FD)(c.Flexbox,{children:[(0,o.Y)(iq.A,{children:(0,o.Y)(f.A,{variant:"chat",children:e.slice(0,1e3)})}),(0,o.Y)(c.Flexbox,{padding:4,children:(0,o.Y)(P.A,{block:!0,color:"default",onClick:()=>{n(t)},size:"small",variant:"filled",children:i("chatList.longMessageDetail")})})]})},lK=({text:e,dom:t,id:i,displayMode:n})=>e.length>3e4?(0,o.Y)(c.Flexbox,{children:(0,o.Y)(lO,{content:e,displayMode:n,id:i})}):t,lG=(0,r.rU)(({css:e,token:t,isDarkMode:i})=>({container:e`
    cursor: pointer;

    overflow: hidden;

    max-width: 420px;
    padding-block: 8px;
    padding-inline: 12px 32px;
    border: 1px solid ${i?t.colorBorder:t.colorSplit};
    border-radius: 8px;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `})),lV=(0,d.memo)(({id:e,fileType:t,size:i,name:n})=>{let{styles:l}=lG(),r=(0,h.L)(e=>e.openFilePreview);return(0,o.FD)(c.Flexbox,{className:l.container,gap:12,horizontal:!0,onClick:()=>{r({fileId:e})},children:[(0,o.Y)(i0.A,{fileName:n,fileType:t}),(0,o.FD)(c.Flexbox,{style:{overflow:"hidden"},children:[(0,o.Y)(b.A,{ellipsis:!0,children:n}),(0,o.Y)(b.A,{type:"secondary",children:(0,iA.Xq)(i)})]})]},e)}),lQ=(0,d.memo)(({items:e})=>(0,o.Y)(c.Flexbox,{gap:8,children:e.map(e=>(0,o.Y)(lV,{...e},e.id))})),lq=(0,d.memo)(({items:e})=>(0,o.Y)(c.Flexbox,{gap:8,children:e.map(e=>(0,o.FD)("video",{controls:!0,style:{borderRadius:8,maxHeight:400,maxWidth:"100%"},children:[(0,o.Y)("source",{src:e.url}),e.alt]},e.id))})),lJ=(0,d.memo)(({id:e,editableContent:t,imageList:i,videoList:n,fileList:l})=>(0,o.FD)(c.Flexbox,{gap:8,id:e,children:[t,i&&i?.length>0&&(0,o.Y)(iQ,{items:i}),n&&n?.length>0&&(0,o.Y)(lq,{items:n}),l&&l?.length>0&&(0,o.Y)("div",{style:{marginTop:8},children:(0,o.Y)(lQ,{items:l})})]})),lZ=td.filter(e=>"assistant"!==e.scope).map(e=>e.rehypePlugin).filter(Boolean),lX=td.filter(e=>"assistant"!==e.scope).map(e=>e.remarkPlugin).filter(Boolean),l0=(0,d.memo)(({id:e,disableEditing:t,index:i})=>{let n,r,a=(0,h.L)(u._1.getDisplayMessageById(e),s()),{ragQuery:p,content:m,createdAt:x,error:b,role:f,extra:y,targetId:Y}=a,{t:A}=(0,v.Bd)("chat"),{mobile:C}=(0,M.Q)(),S=(n=(0,eo.k)(ex.f.userAvatar)||l.cd,r=(0,ol.p)(lI.C.remoteServerUrl),(0,d.useMemo)(()=>l.xl&&r&&n&&n.startsWith("/")?r+n:n,[n,r])),T=(0,eo.k)(ex.f.displayUserName),z=(0,w.o)(k.c.displayMode),[D,B,N]=(0,h.L)(t=>[g.R.isMessageEditing(e)(t),g.R.isMessageCreating(e)(t),g.R.isMessageInRAGFlow(e)(t)]),$=(0,eo.k)(ex.f.nickName)||"User",I=(0,eg.B)(em.z.currentGroupAgents),L=(0,d.useMemo)(()=>{if(!Y)return;let e=Y;if("user"===Y)e=$;else{let t=I?.find(e=>e.id===Y);e=t?.title||Y}return(0,o.Y)(F.A,{children:A("dm.visibleTo",{target:e})})},[Y,$,I,A]),P="chat"===z?"right":"left",E="chat"===z?"bubble":"docs",{styles:R}=q({editing:D,placement:P,primary:!0,showTitle:!1,time:x,title:T,variant:E}),U=tc({disableEditing:t,error:b,id:e,index:i,role:f}),W=(0,d.useCallback)(e=>(0,o.Y)(lJ,{...a,editableContent:e}),[a]),j=(0,d.useMemo)(()=>Object.fromEntries(td.map(t=>{let i=t.Component;return[t.tag,t=>(0,o.Y)(i,{...t,id:e})]})),[e]),_=(0,d.useMemo)(()=>({components:j,customRender:(t,{text:i})=>(0,o.Y)(lK,{displayMode:z,dom:t,id:e,text:i}),rehypePlugins:lZ,remarkPlugins:lX}),[z]);return(0,o.FD)(c.Flexbox,{className:R.container,gap:8,children:[(0,o.FD)(c.Flexbox,{direction:"left"===P?"horizontal":"horizontal-reverse",gap:C?6:12,children:[(0,o.Y)(X,{alt:T,avatar:{avatar:S,title:T},loading:N||B,placement:P,size:32,style:{marginTop:6}}),(0,o.FD)(c.Flexbox,{align:"left"===P?"flex-start":"flex-end",className:R.messageContainer,children:[(0,o.Y)(ed,{avatar:{avatar:S,title:T},placement:P,showTitle:!1,time:x,titleAddon:L}),(0,o.Y)(c.Flexbox,{align:"left"===P?"flex-start":"flex-end",className:R.messageContent,direction:"left"===P?"horizontal":"horizontal-reverse",gap:8,children:(0,o.Y)(c.Flexbox,{flex:1,style:{maxWidth:"100%",minWidth:0},children:(0,o.Y)(er,{editing:D,id:e,markdownProps:_,message:m,messageExtra:(0,o.Y)(lH,{content:m,extra:y,id:e}),onDoubleClick:U,placement:P,primary:!0,renderMessage:W,variant:E})})}),(0,o.Y)(l_,{content:m,id:e,ragQuery:p})]}),C&&"bubble"===E&&(0,o.Y)(ee,{borderSpacing:32})]}),(0,o.Y)(c.Flexbox,{direction:"horizontal-reverse",children:(0,o.Y)(lU,{data:a,disableEditing:t,id:e,index:i})})]})}),l1=(0,r.rU)(({css:e,prefixCls:t})=>({loading:e`
    opacity: 0.6;
  `,message:e`
    position: relative;
    // prevent the textarea too long
    .${t}-input {
      max-height: 900px;
    }
  `})),l2=(0,d.memo)(({className:e,enableHistoryDivider:t,id:n,endRender:r,disableEditing:a,inPortalThread:s=!1,index:m,isLatestItem:x})=>{let{styles:b,cx:f}=l1(),y=(0,d.useRef)(null),[v,Y]=(0,h.L)(e=>[u._1.getDisplayMessageById(n)(e)?.role,g.R.isMessageCreating(n)(e)]);(0,d.useEffect)(()=>{if("undefined"==typeof IntersectionObserver)return;let e=y.current;if(!e)return;let t=e.closest("[data-virtuoso-scroller]"),i={threshold:[0,.01,.1,.25,.5,.75,.9,1]};t instanceof Element&&(i.root=t);let n=new IntersectionObserver(t=>{t.forEach(t=>{if(t.target===e)if(t.isIntersecting){let{bottom:e,top:i}=t.intersectionRect;(0,p.Yh)(m,{bottom:e,ratio:t.intersectionRatio,top:i})}else(0,p.N2)(m)})},i);return n.observe(e),()=>{n.disconnect(),(0,p.N2)(m)}},[m]);let k=(0,d.useCallback)(async()=>{let e=u._1.getDisplayMessageById(n)((0,h.b)());if(l.xl&&e){let{electronSystemService:t}=await Promise.resolve().then(i.bind(i,64464));t.showContextMenu("chat",{content:e.content,hasError:!!e.error,messageId:n,role:e.role})}},[n]),w=(0,d.useMemo)(()=>{switch(v){case"user":return(0,o.Y)(l0,{disableEditing:a,id:n,index:m});case"assistant":return(0,o.Y)(nd,{disableEditing:a,id:n,index:m,isLatestItem:x});case"assistantGroup":return(0,o.Y)(o8,{disableEditing:a,id:n,index:m,isLatestItem:x});case"tool":return(0,o.Y)(l$,{id:n,index:m});case"supervisor":return(0,o.Y)(lr,{disableEditing:a,id:n,index:m})}return null},[v,a,n,m,x]);if(v)return(0,o.FD)(B.Provider,{value:s,children:[t&&(0,o.Y)(D,{}),(0,o.FD)(c.Flexbox,{className:f(b.message,e,Y&&b.loading),"data-index":m,onContextMenu:k,ref:y,children:[w,r]})]})},s());l2.displayName="ChatItem";let l8=l2},70923:(e,t,i)=>{i.d(t,{o:()=>n,u:()=>o});let n={disabled:!1,generating:!1,onStop:()=>{}},o={allowExpand:!0,expand:!1,isContentEmpty:!1,leftActions:[],markdownContent:"",rightActions:[],slashMenuRef:{current:null}}},71181:(e,t,i)=>{i.d(t,{W:()=>p});var n=i(28802),o=i(60317),l=i(58244),r=i(87508),a=i(83034),s=i(59121),d=i(5930),c=i(31065);let p=()=>{let{t:e}=(0,s.Bd)("common"),{modal:t}=l.A.useApp(),[i,p]=(0,d.o)(e=>[c.I.systemStatus(e).hideGemini2_5FlashImagePreviewChineseWarning??!1,e.updateSystemStatus]);return(0,a.useCallback)(async({model:l,prompt:a,scenario:s="chat"})=>!(l.includes("gemini-2.5-flash-image-preview")&&!i&&a&&(0,o.xh)(a))||new Promise(i=>{let o=!1,l="image"===s?e("geminiImageChineseWarning.continueGenerate"):e("geminiImageChineseWarning.continueSend");t.confirm({cancelText:e("cancel",{ns:"common"}),centered:!0,content:(0,n.FD)("div",{children:[(0,n.Y)("p",{children:e("geminiImageChineseWarning.content")}),(0,n.Y)("div",{style:{marginTop:16},children:(0,n.Y)(r.A,{onChange:e=>{o=e.target.checked},children:e("geminiImageChineseWarning.doNotShowAgain")})})]}),okText:l,onCancel:()=>{i(!1)},onOk:()=>{o&&p({hideGemini2_5FlashImagePreviewChineseWarning:!0}),i(!0)},title:e("geminiImageChineseWarning.title")})}),[t,e,i,p])}},72327:(e,t,i)=>{i.d(t,{H:()=>r});var n=i(24902),o=i(19530);let l=(0,n.A)(`# {{title}}

<% if (systemRole) { %>
\`\`\`\`md
{{systemRole}}
\`\`\`\`
<% } %>

<% messages.forEach(function(chat) { %>

<% if (withRole) { %>

<% if (chat.role === 'user') { %>
##### User:
<% } else if (chat.role === 'assistant') { %>
##### Assistant:
<% } else if (chat.role === 'tool') { %>
##### Tools Calling:
<% } %>

<% } %>

<% if (chat.role === 'tool') { %>
\`\`\`json
{{chat.content}}
\`\`\`
<% } else { %>

{{chat.content}}

<% if (includeTool && chat.tools) { %>

\`\`\`json
{{JSON.stringify(chat.tools, null, 2)}}
\`\`\`

<% } %>
<% } %>

<% }); %>
`,{evaluate:/<%([\S\s]+?)%>/g,interpolate:/{{([\S\s]+?)}}/g}),r=({messages:e,title:t,includeTool:i,includeUser:n,withSystemRole:r,withRole:a,systemRole:s})=>l({includeTool:i,messages:e.filter(e=>e.content!==o.VH).filter(e=>!!n||"user"!==e.role).filter(e=>!!i||"tool"!==e.role),systemRole:r?s:void 0,title:t,withRole:a})},72569:(e,t,i)=>{i.d(t,{D:()=>s});var n=i(7288),o=i(13082);let l=e=>e.showPortal,r=e=>e.portalToolMessage?.id,a=e=>t=>{let i=o.E1.getDbMessageById(e)(t);return i?.content||""},s={isPluginUIOpen:e=>t=>r(t)===e&&l(t),previewFileId:e=>e.portalFile?.fileId,showFilePreview:e=>!!e.portalFile,chunkText:e=>e.portalFile?.chunkText,messageDetailId:e=>e.portalMessageDetail,showMessageDetail:e=>!!e.portalMessageDetail,showPluginUI:e=>!!e.portalToolMessage,showPortal:l,toolMessageId:r,toolUIIdentifier:e=>e.portalToolMessage?.identifier,showArtifactUI:e=>!!e.portalArtifact,artifactTitle:e=>e.portalArtifact?.title,artifactIdentifier:e=>e.portalArtifact?.identifier||"",artifactMessageId:e=>e.portalArtifact?.id,artifactType:e=>e.portalArtifact?.type,artifactCode:e=>t=>{let i=a(e)(t).match(n.MT),o=i?.groups?.content||"";return o.replace(/^\s*```[^\n]*\n([\S\s]*?)\n```\s*$/,"$1")},artifactMessageContent:a,artifactCodeLanguage:e=>e.portalArtifact?.language,isArtifactTagClosed:e=>t=>{let i=a(e)(t);return n.j9.test(i||"")}}},72609:(e,t,i)=>{i.d(t,{A:()=>eE});var n=i(28802),o=i(83034),l=i(64811),r=i(62016),a=i(80122),s=i(59121),d=i(80457),c=i(41871),p=i(11490),h=i(57498),u=i(17068),g=i(3431),m=i(42626),x=i(27697);let b=()=>{let e=(0,u.L)(e=>e.updateMessageInput),{send:t}=(0,m.q)(),[i,n]=(0,x.ok)();return(0,o.useEffect)(()=>{let o=i.get("message");if(!o)return;let l=new URLSearchParams(i.toString());l.delete("message"),n(l,{replace:!0}),e(o),t()},[i,n,e,t]),null};var f=i(12389),y=i(27752),v=i(6563),Y=i(82080),k=i(59327),w=i(38759),A=i(71457),F=i(42897),C=i(23047);let S=()=>{let{t:e}=(0,s.Bd)("chat"),{send:t}=(0,m.q)(),[i,l]=(0,w.k)(e=>[A.U.useCmdEnterToSend(e),e.updatePreference]),r=(0,w.k)(F.w0.getHotkeyById(C.g8.AddUserMessage));return(0,o.useMemo)(()=>[{icon:i?(0,n.Y)("div",{}):(0,n.Y)(f.default,{icon:v.A}),key:"sendWithEnter",label:(0,n.Y)(d.Flexbox,{align:"center",gap:4,horizontal:!0,children:(0,n.Y)(s.x6,{components:{key:(0,n.Y)(y.A,{keys:C.zd.Enter,variant:"borderless"})},i18nKey:"input.sendWithEnter",ns:"chat"})}),onClick:()=>{l({useCmdEnterToSend:!1})}},{icon:i?(0,n.Y)(f.default,{icon:v.A}):(0,n.Y)("div",{}),key:"sendWithCmdEnter",label:(0,n.Y)(d.Flexbox,{align:"center",gap:4,horizontal:!0,children:(0,n.Y)(s.x6,{components:{key:(0,n.Y)(y.A,{keys:[C.zd.Mod,C.zd.Enter].join("+"),variant:"borderless"})},i18nKey:"input.sendWithCmdEnter",ns:"chat"})}),onClick:()=>{l({useCmdEnterToSend:!0})}},{type:"divider"},{icon:(0,n.Y)(f.default,{icon:Y.A}),key:"addAi",label:e("input.addAi"),onClick:()=>{t({onlyAddAIMessage:!0})}},{icon:(0,n.Y)(f.default,{icon:k.A}),key:"addUser",label:(0,n.FD)(d.Flexbox,{align:"center",gap:24,horizontal:!0,children:[e("input.addUser"),(0,n.Y)(y.A,{keys:r})]}),onClick:()=>{t({onlyAddUserMessage:!0})}}],[i,t,l,r])},T=["model","search","typo","fileUpload","knowledgeBase","tools","---",["params","history","stt","clear"],"mainToken"],z=["saveTopic"],D=(0,o.memo)(()=>{let{t:e}=(0,s.Bd)("chat"),{send:t,generating:i,disabled:l,stop:r}=(0,m.q)(),[x,f]=(0,u.L)(e=>[g.B.isCurrentSendMessageError(e),e.clearSendMessageError]),y=S();return(0,n.FD)(c._,{chatInputEditorRef:e=>{e&&u.L.setState({mainInputEditor:e})},leftActions:T,onMarkdownContentChange:e=>{u.L.setState({inputMessage:e})},onSend:()=>{t()},rightActions:z,sendButtonProps:{disabled:l,generating:i,onStop:r},sendMenu:{items:y},children:[(0,n.FD)(h.A,{children:[x&&(0,n.Y)(d.Flexbox,{paddingBlock:"0 6px",paddingInline:12,children:(0,n.Y)(a.A,{closable:!0,message:e("input.errorMsg",{errorMsg:x}),onClose:f,type:"warning"})}),(0,n.Y)(p.A,{})]}),(0,n.Y)(o.Suspense,{children:(0,n.Y)(b,{})})]})});var B=i(16385),M=i(67072),N=i(73434),$=i.n(N),I=i(99278);let L=["typo","fileUpload","knowledgeBase","---",["stt","clear"],"groupChatToken"],P=["typo","fileUpload","knowledgeBase","---",["stt"]],E=["saveTopic"],R=(0,o.memo)(e=>{let{t}=(0,s.Bd)("chat"),{send:i,generating:x,disabled:f,stop:y}=(0,m.G)(),v=!!e.targetMemberId,Y=(0,l.B)(r.z.currentGroupAgents,$()),[k,w]=(0,u.L)(e=>[g.B.isCurrentSendMessageError(e),e.clearSendMessageError]),A=(0,o.useMemo)(()=>Y?[{icon:(0,n.Y)(B.A,{avatars:Y?.map(e=>({avatar:e.avatar||I.k_,background:e.backgroundColor||void 0}))||[],size:24}),key:"ALL_MEMBERS",label:t("memberSelection.allMembers"),metadata:{id:"ALL_MEMBERS"}},...Y.map(e=>({icon:(0,n.Y)(M.A,{avatar:e.avatar,background:e.backgroundColor??void 0,size:24}),key:e.id,label:e.title,metadata:{id:e.id}}))]:[],[Y]),F=S();return(0,n.FD)(c._,{chatInputEditorRef:e=>{e&&u.L.setState({mainInputEditor:e})},leftActions:v?P:L,mentionItems:A,onMarkdownContentChange:e=>{u.L.setState({inputMessage:e})},onSend:()=>{i({targetMemberId:e.targetMemberId})},rightActions:v?[]:E,sendButtonProps:{disabled:f,generating:x,onStop:y},sendMenu:{items:F},children:[(0,n.FD)(h.A,{children:[k&&(0,n.Y)(d.Flexbox,{paddingBlock:"0 6px",paddingInline:12,children:(0,n.Y)(a.A,{closable:!0,message:t("input.errorMsg",{errorMsg:k}),onClose:w,type:"warning"})}),(0,n.Y)(p.A,{})]}),(0,n.Y)(o.Suspense,{children:(0,n.Y)(b,{})})]})}),U=(0,o.memo)(e=>(0,l.B)(r.z.isCurrentSessionGroupSession)?(0,n.Y)(R,{...e}):(0,n.Y)(D,{}));var W=i(59202),j=i(11577),_=i(32092),H=i(38326),O=i(68678),K=i(10618);let G=({dataSource:e})=>(0,n.Y)(n.FK,{children:e.map(e=>{let t=K.N[e];return(0,n.Y)(t,{},e)})}),V=(0,o.memo)(({padding:e="0 8px",leftActions:t,rightActions:i})=>(0,n.Y)(O.A,{leftAddons:(0,n.Y)(G,{dataSource:t}),padding:e,rightAddons:(0,n.Y)(G,{dataSource:i})}));var Q=i(1894),q=i(31311),J=i(31021),Z=i.n(J),X=i(56003),ee=i(75431),et=i(9274),ei=i(80201),en=i(83838),eo=i(76048);let el=(0,j.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 250px;
    height: 64px;
    padding-block: 4px;
    padding-inline: 8px 24px;
    border: 1px solid ${t.colorBorder};
    border-radius: 8px;

    background: ${t.colorFillTertiary};
  `,deleteButton:e`
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;

    color: #fff;

    background: ${t.colorBgMask};

    &:hover {
      background: ${t.colorError};
    }
  `})),er=(0,o.memo)(({id:e,onRemove:t,file:i,status:o,uploadState:l,tasks:r})=>{let{styles:a}=el();return(0,n.FD)(d.Flexbox,{align:"center",className:a.container,gap:12,horizontal:!0,children:[(0,n.Y)(en.A,{fileName:i.name,fileType:i.type}),(0,n.FD)(d.Flexbox,{style:{overflow:"hidden"},children:[(0,n.Y)(ee.A,{ellipsis:!0,children:i.name}),(0,n.Y)(eo.A,{size:i.size,status:o,tasks:r,uploadState:l})]}),(0,n.Y)(et.A,{className:a.deleteButton,glass:!0,icon:ei.A,onClick:e=>{e.stopPropagation(),t?.()},size:"small"})]},e)});var ea=i(8055);let es=(0,j.rU)(({css:e,token:t})=>({deleteButton:e`
    color: #fff;
    background: ${t.colorBgMask};

    &:hover {
      background: ${t.colorError};
    }
  `,editableImage:e`
    background: ${t.colorBgContainer};
    box-shadow: 0 0 0 1px ${t.colorFill} inset;
  `,image:e`
    width: 64px !important;
    height: 64px !important;
    margin-block: 0 !important;
  `})),ed=(0,o.memo)(({alt:e,onRemove:t,src:i,loading:o})=>{let{styles:l,cx:r}=es();return(0,n.Y)(ea.A,{actions:(0,n.Y)(et.A,{className:l.deleteButton,glass:!0,icon:ei.A,onClick:e=>{e.stopPropagation(),t?.()},size:"small"}),alt:e||"",alwaysShowActions:!0,height:64,isLoading:o,objectFit:"cover",size:64,src:i,width:64,wrapperClassName:r(l.image,l.editableImage)})}),ec=(0,o.memo)(e=>{let{file:t,id:i,previewUrl:o,status:l}=e,[r]=(0,X.x)(e=>[e.removeChatUploadFile]);return t.type.startsWith("image")?(0,n.Y)(ed,{alt:t.name,loading:"pending"===l,onRemove:()=>{r(i)},src:o}):(0,n.Y)(er,{onRemove:()=>r(i),...e})});var ep=i(74573);let eh={...ep.w},eu=(0,o.memo)(()=>{let e=(0,X.x)(eh.chatUploadFileList,Z());return e&&e?.length!==0?(0,n.Y)(d.Flexbox,{paddingBlock:4,style:{position:"relative"},children:(0,n.Y)(d.Flexbox,{gap:4,horizontal:!0,padding:"4px 8px 8px",style:{overflow:"scroll",width:"100%"},children:(0,n.Y)(q.A,{children:e.map(e=>(0,Q.n)(ec,{...e,key:e.id,loading:"pending"===e.status}))})})}):null});var eg=i(40681),em=i(81819),ex=i(67896),eb=i(20439),ef=i(70510),ey=i(3779);let ev=(0,j.AH)`
  height: inherit;
  padding-block: 0;
  padding-inline: 8px;
`,eY=(0,o.memo)(({children:e,expand:t,textAreaRightAddons:i,textAreaLeftAddons:o,bottomAddons:l,topAddons:r})=>t?(0,n.FD)(d.Flexbox,{className:(0,j.cx)(ev),gap:8,children:[(0,n.FD)(d.Flexbox,{gap:8,horizontal:!0,justify:"flex-end",children:[o,i]}),e,r,l]}):(0,n.FD)(d.Flexbox,{align:"flex-end",className:(0,j.cx)(ev),gap:8,horizontal:!0,children:[o,e,i]})),ek=(0,j.rU)(({css:e,token:t})=>({container:e`
      flex: none;
      padding-block: 12px 12px;
      border-block-start: 1px solid ${(0,ey.B3)(t.colorBorder,.25)};
      background: ${t.colorFillQuaternary};
    `,expand:e`
      position: absolute;
      height: 100%;
    `,expandButton:e`
      position: absolute;
      inset-inline-start: 14px;
    `,textarea:e`
      flex: 1;
      transition: none !important;
    `})),ew=(0,o.forwardRef)(({className:e,style:t,topAddons:i,textAreaLeftAddons:l,textAreaRightAddons:r,bottomAddons:a,expand:c=!1,setExpand:p,onSend:h,onInput:u,loading:g,value:m,safeArea:x},b)=>{let{t:f}=(0,s.Bd)("chat"),y=(0,o.useRef)(!1),v=(0,o.useRef)(null),{cx:Y,styles:k}=ek(),w=(0,ex.A)(v),[A,F]=(0,o.useState)(!1),[C,S]=(0,o.useState)(!1);(0,o.useEffect)(()=>{w?.height&&F(w.height>72)},[w]);let T=!c&&!C;return(0,n.FD)(d.Flexbox,{className:Y(k.container,c&&k.expand,e),gap:12,style:t,children:[i&&(0,n.Y)(d.Flexbox,{style:T?{}:{display:"none"},children:i}),(0,n.FD)(d.Flexbox,{className:Y(c&&k.expand),ref:v,style:{position:"relative"},children:[A&&(0,n.Y)(et.A,{active:!0,className:k.expandButton,icon:c?eb.A:ef.A,onClick:()=>p?.(!c),size:{blockSize:24,borderRadius:"50%",size:14},style:c?{top:6}:{}}),(0,n.Y)(eY,{bottomAddons:a,expand:c,textAreaLeftAddons:l,textAreaRightAddons:r,topAddons:i,children:(0,n.Y)(eg.A,{autoSize:!c&&{maxRows:6,minRows:0},className:k.textarea,onBlur:e=>{u?.(e.target.value),S(!1)},onChange:e=>{u?.(e.target.value)},onCompositionEnd:()=>{y.current=!1},onCompositionStart:()=>{y.current=!0},onFocus:()=>S(!0),onPressEnter:e=>{g||y.current||!e.shiftKey||(e.preventDefault(),h?.())},placeholder:f("sendPlaceholder"),ref:b,style:{height:36,paddingBlock:6},value:m,variant:c?"borderless":"filled"})})]}),a&&(0,n.Y)(d.Flexbox,{style:T?{}:{display:"none"},children:a}),x&&!C&&(0,n.Y)(em.A,{position:"bottom"})]})});var eA=i(15447),eF=i(85017),eC=i(75794);let eS=(0,o.memo)(({loading:e,onStop:t,onSend:i,disabled:o})=>e?(0,n.Y)(et.A,{active:!0,icon:eF.A,onClick:t,size:{blockSize:36,size:16},spin:!0}):(0,n.Y)(eA.A,{disabled:o,icon:eC.A,onClick:i,style:{flex:"none"},type:"primary"}));var eT=i(73166),ez=i(71181),eD=i(45541),eB=i(88990),eM=i(5569),eN=i(11439),e$=i(71171);let eI=["model","search","fileUpload","knowledgeBase","tools","params","mainToken"],eL=["saveTopic","clear"],eP=(0,o.memo)(()=>{let e=(0,j.DP)(),t=(0,o.useRef)(null),[i,l]=(0,o.useState)(!1),{send:r,canSend:a}=(()=>{let[e,t]=(0,u.L)(e=>[e.sendMessage,e.updateMessageInput]),{analytics:i}=(0,eT.st)(),n=(0,ez.W)(),l=(0,X.x)(e=>e.clearChatUploadFileList),r=(0,X.x)(ep.H.isUploadingFiles),a=(0,u.L)(eM.R.isSendButtonDisabledByMessage),s=!r&&!a,d=(0,o.useCallback)(async(o={})=>{let r=u.L.getState();if(H.operationSelectors.isAgentRuntimeRunning(r))return;let a=ep.H.isUploadingFiles(X.x.getState()),s=eM.R.isSendButtonDisabledByMessage(u.L.getState());if(!(!a&&!s))return;let d=ep.H.chatUploadFileList(X.x.getState());if(!r.inputMessage&&0===d.length)return;let c=(0,eD._)(),p=eB.e.currentAgentModel(c);if(!await n({model:p,prompt:r.inputMessage,scenario:"chat"}))return;e({files:d,message:r.inputMessage,...o}),t(""),l();let h=(0,w.c)(),g=d.some(e=>e.file?.type?.startsWith("image")),m=0===d.length?"text":g?"image":"file";i?.track({name:"send_message",properties:{chat_id:r.activeId||"unknown",current_topic:eN.e.currentActiveTopic(r)?.title||null,has_attachments:d.length>0,history_message_count:e$.fA.activeBaseChats(r).length,message:r.inputMessage,message_length:r.inputMessage.length,message_type:m,selected_model:eB.e.currentAgentModel(c),session_id:r.activeId||"inbox",user_id:h.user?.id||"anonymous"}})},[]);return(0,o.useMemo)(()=>({canSend:s,send:d}),[s])})(),{isLoading:s}=(0,_.H)(),[c,p,h,g]=(0,u.L)(e=>[H.operationSelectors.isAgentRuntimeRunning(e),e.inputMessage,e.updateMessageInput,e.stopGenerateMessage]);return(0,n.Y)(ew,{expand:i,onInput:h,onSend:()=>{l(!1),r()},ref:t,setExpand:l,style:{background:e.colorBgLayout,top:i?0:void 0,width:"100%",zIndex:101},textAreaRightAddons:(0,n.Y)(eS,{disabled:!a,loading:c,onSend:r,onStop:g}),topAddons:s?(0,n.Y)(d.Flexbox,{paddingInline:8,children:(0,n.Y)(W.A.Button,{active:!0,block:!0,size:"small"})}):(0,n.FD)(n.FK,{children:[(0,n.Y)(eu,{}),(0,n.Y)(V,{leftActions:eI,padding:"0 8px",rightActions:eL})]}),value:p})});eP.displayName="MobileChatInput";let eE=({mobile:e,targetMemberId:t})=>{let i=e?eP:U;return(0,n.Y)(i,{targetMemberId:t})}},74573:(e,t,i)=>{i.d(t,{H:()=>r,w:()=>l});var n=i(76256);let o=e=>e.chatUploadFileList,l={chatUploadFileList:o,isImageUploading:e=>e.uploadingIds.length>0},r={chatRawFileList:e=>e.chatUploadFileList.map(e=>e.file),chatUploadFileList:o,chatUploadFileListHasItem:e=>e.chatUploadFileList.length>0,isUploadingFiles:e=>e.chatUploadFileList.some(e=>n.C.has(e.status)||e.tasks&&!e.tasks?.finishEmbedding)}},75259:(e,t,i)=>{i.d(t,{A:()=>p});var n=i(28802),o=i(9274),l=i(39639),r=i(83034),a=i(63639),s=i(62326),d=i(66044),c=i(82340);let p=(0,r.memo)(({showTooltip:e,loading:t,icon:i,title:r,dropdown:p,popover:h,open:u,onOpenChange:g,trigger:m,disabled:x,onClick:b,...f})=>{let[y,v]=(0,a.A)(!1,{onChange:g,value:u}),Y=(0,s.wo)(e=>e.isMobile),k=(0,n.Y)(o.A,{disabled:x,icon:i,loading:t,onClick:e=>{if(b)return b(e);v(!0)},title:(0,l.A)(e)?Y?void 0:r:e?r:void 0,tooltipProps:{placement:"bottom"},...f,size:{blockSize:36,size:20}});return x?k:p?(0,n.Y)(d.A,{onOpenChange:v,open:y,trigger:m,...p,minWidth:Y?"100%":p.minWidth,placement:Y?"top":p.placement,children:k}):h?(0,n.Y)(c.A,{onOpenChange:v,open:y,trigger:m,...h,minWidth:Y?"100%":h.minWidth,placement:Y?"top":h.placement,children:k}):k})},76048:(e,t,i)=>{i.d(t,{A:()=>b});var n=i(28802),o=i(75431),l=i(11577),r=i(83034),a=i(59121),s=i(80457),d=i(45140),c=i(49602),p=i(12389),h=i(97721),u=i(85017),g=i(9402);let m=(0,r.memo)(({status:e,size:t,uploadState:i})=>{let r=(0,l.DP)(),{t:d}=(0,a.Bd)("chat");switch(e){default:case"pending":return(0,n.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(p.default,{icon:u.A,size:12,spin:!0}),(0,n.Y)(o.A,{style:{fontSize:12},type:"secondary",children:d("upload.preview.status.pending")})]});case"uploading":return(0,n.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(h.A,{percent:i?.progress,size:14,type:"circle"}),(0,n.Y)(o.A,{style:{fontSize:12},type:"secondary",children:(0,g.Xq)(t*((i?.progress||0)/100),0)})]});case"processing":return(0,n.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(h.A,{percent:i?.progress,size:14,type:"circle"}),(0,n.Y)(o.A,{style:{fontSize:12},type:"secondary",children:(0,g.Xq)(t)})]});case"success":return(0,n.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(c.A,{style:{color:r.colorSuccess,fontSize:12}}),(0,n.Y)(o.A,{style:{fontSize:12},type:"secondary",children:(0,g.Xq)(t)})]})}}),x=(0,l.rU)(({css:e})=>({status:e`
    &.ant-tag {
      padding-inline: 0;
      background: none;
    }
  `})),b=(0,r.memo)(({uploadState:e,status:t,size:i,tasks:l})=>{let{t:r}=(0,a.Bd)("chat"),{styles:c}=x();return(0,n.FD)(s.Flexbox,{align:"center",gap:8,height:22,horizontal:!0,children:[(0,n.Y)(m,{size:i,status:t,uploadState:e}),l&&0===Object.keys(l).length?(0,n.Y)(o.A,{style:{fontSize:12},type:"secondary",children:r("upload.preview.prepareTasks")}):(0,n.Y)("div",{children:(0,n.Y)(d.A,{...l,className:c.status,hideEmbeddingButton:!0})})]})})},76927:(e,t,i)=>{i.d(t,{U:()=>l});var n=i(94147),o=i(81196);let l=(e,t)=>(0,n.d)(o.g.isModelSupportVision(e,t))},77991:(e,t,i)=>{i.d(t,{$:()=>o});var n=i(23211);let o={isCustomPlugin:e=>t=>n.V.isCustomPlugin(e,t.installedPlugins)}},78591:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(28802),o=i(31021),l=i.n(o),r=i(83034),a=i(92527),s=i(57498),d=i(17068),c=i(91804),p=i(38326),h=i(15447),u=i(12389),g=i(62713),m=i(59121),x=i(11577),b=i(3779);let f=(0,x.rU)(({token:e,css:t,stylish:i,cx:n,responsive:o})=>({container:n(i.blur,t`
      pointer-events: none;

      position: absolute;
      z-index: 50;
      inset-block-end: 16px;
      inset-inline-end: 16px;
      transform: translateY(16px);

      padding-inline: 12px !important;
      border-color: ${e.colorFillTertiary} !important;
      border-radius: 16px !important;

      opacity: 0;
      background: ${(0,b.B3)(e.colorBgContainer,.5)};

      ${o.mobile} {
        inset-inline-end: 0;
        border-inline-end: none;
        border-start-end-radius: 0 !important;
        border-end-end-radius: 0 !important;
      }
    `),visible:t`
    pointer-events: all;
    transform: translateY(0);
    opacity: 1;
  `})),y=(0,r.memo)(({visible:e,onScrollToBottom:t})=>{let{styles:i,cx:o}=f(),{t:l}=(0,m.Bd)("chat");return(0,n.Y)(h.A,{className:o(i.container,e&&i.visible),icon:(0,n.Y)(u.default,{icon:g.A}),onClick:t,size:"small",children:l("backToBottom",{defaultValue:"Back to bottom"})})}),v=(0,r.memo)(({atBottom:e,isScrolling:t,onScrollToBottom:i})=>{let o=(0,d.L)(p.operationSelectors.isAgentRuntimeRunning),l=(0,d.L)(c._1.mainAIChatsMessageString),a=(0,d.L)(c._1.mainAILatestMessageReasoningContent);return(0,r.useEffect)(()=>{e&&o&&!t&&i?.("auto")},[e,o,l,a]),(0,n.Y)(y,{onScrollToBottom:()=>i("click"),visible:!e})});var Y=i(85122),k=i(23935);let w=(0,r.memo)(({mobile:e,dataSource:t,itemContent:i})=>{let o=(0,r.useRef)(null),l=(0,r.useRef)(t.length),[p,h]=(0,r.useState)(!0),[u,g]=(0,r.useState)(!1),m=(0,r.useRef)(null),[x,b]=(0,d.L)(e=>[c._1.currentChatLoadingState(e),c._1.isCurrentDisplayChatLoaded(e)]),f=200*(e?2:1),y=(0,r.useCallback)(()=>{let e=o.current;if(!e)return!1;let t=e.scrollOffset;return e.scrollSize-t-e.viewportSize<=f},[f]),w=(0,r.useCallback)(()=>{g(!0),h(y()),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{g(!1)},150)},[y]),A=(0,r.useCallback)(()=>{g(!1)},[]);(0,r.useEffect)(()=>{let e=t.length>l.current;l.current=t.length,e&&o.current&&o.current.scrollToIndex(t.length-2,{align:"start",smooth:!0})},[t.length]);let F=(0,r.useCallback)((e="smooth")=>{p||o.current&&o.current.scrollToIndex(t.length-1,{align:"end",smooth:"smooth"===e})},[p,t.length]);return((0,r.useEffect)(()=>((0,k.M2)(o),()=>{(0,k.M2)(null)}),[o]),(0,r.useEffect)(()=>()=>{(0,k.hx)(),m.current&&clearTimeout(m.current)},[]),(0,r.useEffect)(()=>{o.current&&t.length>0&&o.current.scrollToIndex(t.length-1,{align:"end"})},[b]),x||!b)?(0,n.Y)(Y.A,{mobile:e}):(0,n.FD)(k.tf,{value:o,children:[(0,n.Y)(a.x8,{bufferSize:window.innerHeight,data:t,onScroll:w,onScrollEnd:A,ref:o,reverse:!0,style:{height:"100%"},children:(e,t)=>(0,n.Y)(s.A,{style:{position:"relative"},children:i(t,e,{virtuaRef:o})},e)}),(0,n.Y)(s.A,{onChange:()=>{p&&setTimeout(F,100)},style:{position:"relative"},children:(0,n.Y)(v,{atBottom:p,isScrolling:u,onScrollToBottom:e=>{let i=o.current;if(i)switch(e){case"auto":i.scrollToIndex(t.length-1,{align:"end"});break;case"click":i.scrollToIndex(t.length-1,{align:"end",smooth:!0})}}})})]})},l())},81040:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var n=i(28802),o=i(94424),l=i(11577),r=i(83034),a=i(51717),s=i(15447),d=i(51997),c=i.n(d),p=i(59121),h=i(80457),u=i(20480),g=i(45628),m=i(27809);let x=(0,l.rU)(({css:e,token:t})=>({page:e`
    width: 100%;
    margin: 12px;
    padding: 24px;
    border-radius: 4px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowTertiary};
  `})),b=({fileName:e,document:t})=>{let{styles:i}=x(),{t:o}=(0,p.Bd)("file"),[l,d]=(0,r.useState)(!1);return(0,n.Y)(h.Flexbox,{className:i.page,id:"txt-renderer",children:(0,n.Y)(u.default,{height:"100%",children:(0,n.FD)(h.Flexbox,{align:"center",gap:12,children:[(0,n.Y)(a.A,{emoji:"\uD83D\uDC40",size:64}),(0,n.Y)(h.Flexbox,{style:{textAlign:"center"},children:(0,n.FD)(p.x6,{i18nKey:"preview.unsupportedFileAndContact",ns:"file",children:["此文件格式暂不支持在线预览，如有预览诉求，欢迎",(0,n.Y)(c(),{"aria-label":"todo",href:g.eQ,target:"_blank",children:"反馈给我们"})]})}),(0,n.Y)(s.A,{loading:l,onClick:async()=>{t&&(d(!0),await (0,m.P)(t.uri,e),d(!1))},children:o("preview.downloadFile")})]})})})},f=({mainState:{currentDocument:e}})=>{let{uri:t,fileName:i}=e||{};return(0,n.Y)(u.default,{height:"100%",width:"100%",children:(0,n.Y)("img",{alt:i,height:"100%",src:t,style:{objectFit:"contain",overflow:"hidden"},width:"100%"})})};f.fileTypes=["jpg","jpeg","image/jpg","image/jpeg","png","image/png","webp","image/webp","gif","image/gif","bmp","image/bmp"],f.weight=0;let y=(0,l.AH)`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`,v=(0,l.AH)`
  position: absolute;
  inset-block: -1px -1px;
  inset-inline-start: -1px;

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border: 0;
`,Y=({mainState:{currentDocument:e}})=>e?(0,n.Y)(h.Flexbox,{className:(0,l.cx)(y),height:"100%",id:"msdoc-renderer",width:"100%",children:(0,n.Y)("iframe",{className:(0,l.cx)(v),id:"msdoc-iframe",src:`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.uri)}`,title:"msdoc-iframe"})}):null;Y.fileTypes=["odt","application/vnd.oasis.opendocument.text","doc","application/msword","docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/octet-stream","xls","application/vnd.ms-excel","xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","ppt","application/vnd.ms-powerpoint","pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],Y.weight=0,Y.fileLoader=({fileLoaderComplete:e})=>e();var k=i(91888),w=i(27384);let A=(0,l.rU)(({css:e,token:t})=>({page:e`
    width: 100%;
    padding: 24px;
    border-radius: 4px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowTertiary};
  `})),F=({mainState:{currentDocument:e}})=>{let{styles:t}=A();return(0,n.Y)(h.Flexbox,{className:t.page,id:"txt-renderer",children:e?.fileData?(0,n.Y)(k.A,{language:"txt",showLanguage:!1,style:{height:"100%"},variant:"borderless",children:e?.fileData}):(0,n.Y)(u.default,{height:"100%",children:(0,n.Y)(w.default,{})})})};F.fileTypes=["txt","text/plain"],F.weight=0,F.fileLoader=o.xl;let C=[F,f,Y];var S=i(35987),T=i(70474),z=i(86393);i(66511),i(77021);var D=i(77605),B=i(56003);let M=({coordinates:e,highlight:t})=>{let{points:i}=e,[o,l,r,a]=i,s=Math.min(o[0],l[0],r[0],a[0]),d=Math.min(o[1],l[1],r[1],a[1]),c=Math.max(o[0],l[0],r[0],a[0])-s,p=Math.max(o[1],l[1],r[1],a[1])-d;return(0,n.Y)("rect",{fill:t?"rgba(255, 255, 0, 0.5)":"rgba(255, 255, 0, 0.3)",height:p,stroke:"rgba(255, 255, 0, 0.7)",strokeWidth:"1",width:c,x:s,y:d})},N=(0,r.memo)(({dataSource:e,pageNumber:t,width:i})=>{let o=e.filter(e=>e.pageNumber&&e.pageNumber===t).filter(Boolean),l=(0,B.x)(e=>e.highlightChunkIds);if(!(o.length>0))return null;let r=o[0].metadata;if(!r.coordinates)return;let{layout_width:a,layout_height:s}=r.coordinates,d=r.coordinates.layout_height*(i/r.coordinates.layout_width);return(0,n.FD)("svg",{height:d,style:{left:0,position:"absolute",top:0,zIndex:100},viewBox:`0 0 ${a} ${s}`,width:i,children:[o.map((e,t)=>e.metadata&&(0,n.Y)(M,{coordinates:e.metadata.coordinates,highlight:l.includes(e.id)},t)),"s"]})}),$=(0,l.rU)(({css:e,token:t})=>({container:e`
    min-height: 100%;
  `,document:e`
    position: relative;
  `,documentContainer:e`
    padding-block: 10px;
    background-color: ${t.colorBgLayout};
  `,page:e`
    overflow: hidden;
    margin-block-end: 12px;
    border-radius: 4px;
    box-shadow: ${t.boxShadowTertiary};
  `}));S.EA.workerSrc=`https://registry.npmmirror.com/pdfjs-dist/${S.rE}/files/build/pdf.worker.min.mjs`;let I={cMapUrl:`https://registry.npmmirror.com/pdfjs-dist/${S.rE}/files/cmaps/`,standardFontDataUrl:`https://registry.npmmirror.com/pdfjs-dist/${S.rE}/files/standard_fonts/`},L=(0,r.memo)(({url:e,fileId:t})=>{let{styles:i}=$(),[o,l]=(0,r.useState)(0),[a,s]=(0,r.useState)(null),[d,c]=(0,r.useState)(),[p,u]=(0,r.useState)(!1),g=(0,r.useCallback)(e=>{let[t]=e;t&&c(t.contentRect.width)},[]);(0,r.useEffect)(()=>{if(!a||!("ResizeObserver"in window))return;let e=new ResizeObserver(g);return e.observe(a,void 0),()=>{e.disconnect()}},[a,g,void 0]);let{data:m}=D.Qm.chunk.getChunksByFileId.useInfiniteQuery({id:t},{getNextPageParam:e=>e.nextCursor}),x=m?.pages.flatMap(e=>e.items)||[];return(0,n.Y)(h.Flexbox,{className:i.container,children:(0,n.Y)(h.Flexbox,{align:"center",className:i.documentContainer,padding:24,ref:s,style:{height:p?void 0:"100%"},children:(0,n.Y)(T.A,{className:i.document,file:e,onLoadSuccess:({numPages:e})=>{l(e),u(!0)},options:I,children:Array.from({length:o},(e,t)=>{let o=d?Math.min(d,1200):1200;return(0,n.Y)(r.Fragment,{children:(0,n.Y)(z.A,{className:i.page,pageNumber:t+1,width:o,children:(0,n.Y)(N,{dataSource:x,pageNumber:t+1,width:o})})},`page_${t+1}`)})})})})}),P=(0,l.AH)`
  background: transparent !important;

  #proxy-renderer {
    height: 100%;
  }
`,E=(0,r.memo)(({id:e,style:t,fileType:i,url:r,name:a})=>i?.toLowerCase()==="pdf"||a?.toLowerCase().endsWith(".pdf")?(0,n.Y)(L,{fileId:e,url:r}):(0,n.Y)(o.Ay,{className:(0,l.cx)(P),config:{header:{disableHeader:!0},noRenderer:{overrideComponent:b}},documents:[{fileName:a,fileType:i,uri:r}],pluginRenderers:C,style:t}))},82340:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(28802),o=i(67693),l=i(11577),r=i(83034),a=i(80457),s=i(12389),d=i(85017);let c=(0,r.memo)(({size:e,style:t})=>(0,n.Y)("div",{style:t,children:(0,n.Y)(s.default,{icon:d.A,size:e,spin:!0})}));var p=i(20549);let h=(0,l.rU)(({css:e,prefixCls:t})=>({popoverContent:e`
    .${t}-form {
      .${t}-form-item:first-child {
        padding-block: 0 4px;
      }
      .${t}-form-item:last-child {
        padding-block: 4px 0;
      }
    }
  `})),u=(0,r.memo)(({styles:e,maxHeight:t,maxWidth:i,minWidth:l,children:r,classNames:s,title:d,placement:u,loading:g,extra:m,...x})=>{let{cx:b,styles:f,theme:y}=h(),v=(0,p.a)();return(0,n.Y)(o.A,{arrow:!1,classNames:{...s,body:b(f.popoverContent,s?.body)},placement:v?"top":u,styles:{...e,body:{maxHeight:t,maxWidth:v?void 0:i,minWidth:v?void 0:l,width:v?"100vw":void 0,...e?.body}},title:d&&(0,n.FD)(a.Flexbox,{gap:8,horizontal:!0,justify:"space-between",style:{marginBottom:16},children:[d,m,g&&(0,n.Y)(c,{style:{color:y.colorTextSecondary}})]}),...x,children:r})})},82668:(e,t,i)=>{i.d(t,{L:()=>l});var n=i(94147),o=i(81196);let l=(e,t)=>(0,n.d)(o.g.isModelSupportToolUse(e,t))},83594:(e,t,i)=>{i.d(t,{j:()=>o});var n=i(17068);let o=e=>{let[t]=(0,n.L)(e=>[e.useFetchThreads]);t(!0,e)}},83838:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(28802),o=i(5938),l=i(15786),r=i(83034);let a={csv:"#43aa55",doc:"#2b56b1",docx:"#2b56b1",pdf:"#de2429",ppt:"#c43e1b",pptx:"#c43e1b",text:"#607180",txt:"#607180",xls:"#2f6d3f",xlsx:"#2f6d3f"},s=(0,r.memo)(({fileName:e,size:t,variant:i="raw",isDirectory:r})=>{if(r)return(0,n.Y)(o.A,{color:"gold",size:t,type:"folder",variant:"color"});if(Object.keys(a).some(t=>e?.toLowerCase().endsWith(`.${t}`))){let i=e.split(".").pop()?.toLowerCase();return(0,n.Y)(o.A,{color:a[i],filetype:i?.toUpperCase(),size:t,type:"file"})}return(0,n.Y)(l.A,{filename:e,size:t,type:"file",variant:i})})},85122:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(28802),o=i(59202),l=i(11577),r=i(83034),a=i(57498);let s=(0,l.rU)(({css:e,prefixCls:t})=>({message:e`
    display: flex;
    gap: 12px;
    .${t}-skeleton-header {
      padding: 0;
    }
  `,user:e`
    flex-direction: row-reverse;

    .${t}-skeleton-paragraph {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  `})),d=(0,r.memo)(({mobile:e})=>{let{cx:t,styles:i}=s();return(0,n.FD)(a.A,{flex:1,gap:24,height:"100%",padding:e?8:12,style:{marginTop:24},children:[(0,n.Y)(o.A,{active:!0,avatar:{size:e?32:40},className:t(i.message,i.user),paragraph:{width:e?["80%","40%"]:["50%","30%"]},title:!1}),(0,n.Y)(o.A,{active:!0,avatar:{size:e?32:40},className:i.message,paragraph:{width:e?["80%","40%"]:["50%","30%"]},title:!1})]})})},95891:(e,t,i)=>{i.d(t,{d:()=>x});var n=i(28802),o=i(8756),l=i(83034),r=i(64861),a=i(11577),s=i(65101),d=i(80457),c=i(98724);let p=(0,a.rU)(({css:e})=>({extraTitle:e`
      font-weight: 300;
      white-space: nowrap;
    `})),h=(0,l.memo)(({size:e,style:t,...i})=>(0,n.Y)(d.Flexbox,{height:e,style:{fontSize:e/1.5,fontWeight:"bolder",userSelect:"none",...t},...i,children:c.Se})),u=(0,l.memo)(({size:e,...t})=>(0,n.Y)(s.default,{alt:c.Se,height:e,src:c.UE,unoptimized:!0,width:e,...t})),g=(0,l.forwardRef)(({size:e="1em",style:t,...i},o)=>(0,n.Y)("svg",{fill:"none",height:e,ref:o,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",style:{flex:"none",lineHeight:1,...t},viewBox:"0 0 24 24",width:e,...i,children:(0,n.Y)("path",{d:"M16.88 3.549L7.12 20.451"})})),m=(0,l.memo)(({extra:e,size:t=32,className:i,style:o,type:l,...r})=>{let s,c=(0,a.DP)(),{styles:m}=p();switch(l){case"3d":case"flat":default:s=(0,n.Y)(u,{size:t,style:o,...r});break;case"mono":s=(0,n.Y)(u,{size:t,style:{filter:"grayscale(100%)",...o},...r});break;case"text":s=(0,n.Y)(h,{size:t,style:o,...r});break;case"combine":s=(0,n.FD)(n.FK,{children:[(0,n.Y)(u,{size:t}),(0,n.Y)(h,{size:t,style:{marginLeft:Math.round(t/4)}})]}),e||(s=(0,n.Y)(d.Flexbox,{align:"center",flex:"none",horizontal:!0,...r,children:s}))}if(!e)return s;let x=Math.round(t/3*1.9);return(0,n.FD)(d.Flexbox,{align:"center",className:i,flex:"none",horizontal:!0,...r,children:[s,(0,n.Y)(g,{size:x,style:{color:c.colorFill}}),(0,n.Y)("div",{className:m.extraTitle,style:{fontSize:x},children:e})]})}),x=(0,l.memo)(e=>r.fF?(0,n.Y)(m,{...e}):(0,n.Y)(o.default,{...e}))},96785:(e,t,i)=>{i.d(t,{A:()=>tS});var n=i(28802),o=i(83034),l=i(60317),r=i(14056),a=i(91888),s=i(75431),d=i(80122),c=i(11577),p=i(59121),h=i(80457),u=i(36310),g=i(17068),m=i(44230),x=i(31311),b=i(14966),f=i(37412),y=i(8055),v=i(15786),Y=i(12389),k=i(29961),w=i(46355);let A=(0,c.rU)(({css:e,token:t})=>({container:e`
    overflow: hidden;

    border: 1px solid ${t.colorBorder};
    border-radius: 8px;

    background: ${t.colorBgContainer};

    transition: all 0.2s ease;

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: 0 2px 8px ${t.colorFillQuaternary};
    }
  `})),F=(0,c.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    display: inline-flex;
    gap: ${t.marginXS}px;
    align-items: center;

    padding-block: ${t.paddingXS}px;
    padding-inline: ${t.paddingSM}px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadiusSM}px;

    font-size: ${t.fontSizeSM}px;
    color: ${t.colorText};

    background: ${t.colorBgContainer};

    transition: all 0.2s ease;

    &:hover {
      border-color: ${t.colorPrimary};
      background: ${t.colorBgTextHover};
    }
  `}));function C(e){return e.split("/").pop()??e}let S=(0,o.memo)(({filename:e,previewUrl:t,fileId:i})=>{let[o]=(0,g.L)(e=>[e.useFetchInterpreterFileItem]),{data:l}=o(i),{styles:r}=A(),a=l?.url??t,s=C(l?.filename??e);return a?(0,n.Y)("div",{className:r.container,children:(0,n.Y)(f.A,{title:s,children:(0,n.Y)(y.A,{alt:s,onLoad:()=>URL.revokeObjectURL(a),src:a})})}):null}),T=(0,o.memo)(({filename:e,fileId:t,previewUrl:i})=>{let{styles:o}=F(),l=C(e),r=async e=>{e.stopPropagation();let n=i;if(!n){let{url:e}=await w.Y.getFile(t);n=e}let o=document.createElement("a");o.href=n,o.download=l,o.click()};return(0,n.FD)("div",{className:o.container,onClick:r,children:[(0,n.Y)(v.A,{filename:l,size:20,type:"file"}),(0,n.Y)(s.A,{children:l}),(0,n.Y)(Y.default,{icon:k.A,size:"small"})]})}),z=(0,o.memo)(({files:e})=>{if(!e||0===e.length)return null;let t=[],i=[];for(let n of e)/\.(png|jpg|jpeg|gif|bmp|webp|svg)$/i.test(n.filename)?t.push(n):i.push(n);return(0,n.FD)(h.Flexbox,{gap:16,children:[t.length>0&&(0,n.Y)(x.A,{children:1===t.length?(0,n.Y)(h.Flexbox,{style:{maxWidth:400},children:(0,n.Y)(S,{...t[0]})}):(0,n.Y)(b.A,{items:t.map(e=>({...e})),renderItem:e=>(0,n.Y)(S,{...e})})}),i.length>0&&(0,n.Y)(h.Flexbox,{gap:8,horizontal:!0,wrap:"wrap",children:i.map((e,t)=>(0,n.Y)(T,{...e},`${e.filename}-${t}`))})]})}),D=(0,o.memo)(({content:e,args:t,pluginState:i,messageId:o,apiName:l})=>{let{t:r}=(0,p.Bd)("tool"),x=(0,c.DP)(),b=(0,g.L)(m.j.isInterpreterExecuting(o));return i?.error&&console.error(i.error),(0,n.FD)(h.Flexbox,{gap:12,children:[(0,n.Y)(h.Flexbox,{children:(0,n.Y)(a.A,{actionIconSize:"small",language:l,showLanguage:!1,style:{maxHeight:200,overflow:"scroll",width:"100%"},children:t.code})}),b&&(0,n.FD)(h.Flexbox,{gap:8,horizontal:!0,children:[(0,n.Y)(u.A,{}),(0,n.Y)(s.A,{type:"secondary",children:r("codeInterpreter.executing")})]}),!b&&i?.error&&(0,n.Y)(d.A,{description:String(i.error),message:r("codeInterpreter.error"),showIcon:!0,type:"error"}),!b&&e&&(0,n.FD)(h.Flexbox,{gap:8,children:[e.result&&(0,n.FD)(h.Flexbox,{children:[(0,n.Y)(s.A,{strong:!0,style:{marginBottom:4},children:r("codeInterpreter.returnValue")}),(0,n.Y)(a.A,{copyable:!1,language:"text",showLanguage:!1,children:e.result})]}),e?.output&&e.output.length>0&&(0,n.FD)(h.Flexbox,{children:[(0,n.Y)(s.A,{strong:!0,style:{marginBottom:4},children:r("codeInterpreter.output")}),(0,n.Y)("div",{style:{backgroundColor:x.colorBgContainer,border:`1px solid ${x.colorBorder}`,borderRadius:x.borderRadius,fontSize:13,lineHeight:1.5,overflow:"auto",padding:12,whiteSpace:"pre"},children:e.output?.map((e,t)=>(0,n.Y)(s.A,{code:!0,type:"stderr"===e.type?"danger":void 0,children:e.data},t))})]}),e?.files&&e.files.length>0&&(0,n.FD)(h.Flexbox,{children:[(0,n.Y)(s.A,{strong:!0,style:{marginBottom:8},children:r("codeInterpreter.files")}),(0,n.Y)(z,{files:e.files})]})]})]})});var B=i(42246),M=i(59202),N=i(54759),$=i(93778),I=i(32719);i(42318);var L=i(13134),P=i(40620);let E=(0,o.memo)(({args:e,pluginState:t,pluginError:i})=>{let{base:l,dir:r}=$.A.parse(e.file_path),a=(0,o.useMemo)(()=>{let e=t?.diffText;if(!e)return[];try{return(0,I.FR)(e)}catch(e){return console.error("Failed to parse diff:",e),[]}},[t?.diffText]);return e?(0,n.FD)(h.Flexbox,{gap:12,children:[(0,n.FD)(h.Flexbox,{horizontal:!0,children:[(0,n.Y)(L.e,{path:r}),(0,n.Y)(Y.default,{icon:N.A}),(0,n.Y)(P.E,{name:l,path:e.file_path})]}),i?(0,n.Y)(d.A,{description:i.message||"Unknown error occurred",message:"Edit Failed",showIcon:!0,type:"error"}):(0,n.Y)(h.Flexbox,{gap:12,children:a.map((e,t)=>(0,n.Y)("div",{style:{fontSize:"12px"},children:(0,n.Y)(I.oO,{diffType:e.type,gutterType:"default",hunks:e.hunks,viewType:"split",children:e=>e.map(e=>(0,n.Y)(I.D9,{hunk:e},e.content))})},`${e.oldPath}-${t}`))})]}):(0,n.Y)(M.A,{active:!0})});E.displayName="EditLocalFile";var R=i(9274),U=i(2644),W=i.n(U),j=i(11652),_=i(83838),H=i(95313),O=i(9402);let K=(0,c.rU)(({css:e,token:t})=>({container:e`
    border-radius: 4px;
    color: ${t.colorTextSecondary};

    :hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,path:e`
    overflow: hidden;

    font-size: 10px;
    line-height: 1;
    color: ${t.colorTextDescription};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,size:e`
    min-width: 50px;

    font-family: ${t.fontFamilyCode};
    font-size: 10px;
    color: ${t.colorTextTertiary};
    text-align: end;
  `,title:e`
    overflow: hidden;
    display: block;

    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),G=(0,o.memo)(({isDirectory:e,name:t,path:i,size:l,type:r,showTime:a=!1,createdTime:s})=>{let{t:d}=(0,p.Bd)("tool"),{styles:c}=K(),[u,g]=(0,o.useState)(!1);return(0,n.FD)(h.Flexbox,{align:"center",className:c.container,gap:12,horizontal:!0,onClick:()=>{H.V.openLocalFileOrFolder(i,e)},onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),padding:"2px 8px",style:{cursor:"pointer",fontSize:12,width:"100%"},children:[(0,n.Y)(_.A,{fileName:t,fileType:r,isDirectory:e,size:16,variant:"raw"}),(0,n.FD)(h.Flexbox,{align:"baseline",gap:4,horizontal:!0,style:{overflow:"hidden",width:"100%"},children:[(0,n.Y)("div",{className:c.title,children:t}),a?(0,n.Y)("div",{className:c.path,children:W()(s).format("MMM DD hh:mm")}):(0,n.Y)("div",{className:c.path,children:i})]}),u?(0,n.Y)(h.Flexbox,{direction:"horizontal-reverse",gap:8,style:{minWidth:50},children:(0,n.Y)(R.A,{icon:j.A,onClick:t=>{t.stopPropagation(),H.V.openLocalFolder({isDirectory:e,path:i})},size:"small",style:{height:16,width:16},title:d("localFiles.openFolder")})}):(0,n.Y)("span",{className:c.size,children:(0,O.Xq)(l)})]})}),V=(0,o.memo)(({listResults:e=[],messageId:t})=>(0,g.L)(m.j.isSearchingLocalFiles(t))?(0,n.FD)(h.Flexbox,{gap:4,children:[(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}}),(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}}),(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}}),(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}})]}):(0,n.Y)(h.Flexbox,{gap:2,style:{maxHeight:140,overflow:"scroll"},children:e.map(e=>(0,n.Y)(G,{...e,showTime:!0},e.path))}));V.displayName="SearchFiles";let Q=(0,o.memo)(({messageId:e,pluginError:t,args:i,pluginState:o})=>(0,n.FD)(n.FK,{children:[(0,n.Y)(L.e,{path:i.path}),(0,n.Y)(V,{listResults:o?.listResults,messageId:e,pluginError:t})]}));Q.displayName="ListFiles";var q=i(6621),J=i(64694),Z=i(32624);let X=(0,c.rU)(({css:e,token:t})=>({icon:e`
    color: ${t.colorTextQuaternary};
  `,item:e`
    padding-block: 4px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius}px;
    transition: all 0.2s ease;

    &:hover {
      background: ${t.colorFillQuaternary};
    }
  `,path:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    word-break: break-all;
  `})),ee=(0,o.memo)(({oldPath:e,newPath:t})=>{let{styles:i}=X(),o=(0,J.p)(Z.i.displayRelativePath(e)),l=(0,J.p)(Z.i.displayRelativePath(t));return(0,n.FD)(h.Flexbox,{align:"center",className:i.item,gap:8,horizontal:!0,width:"100%",children:[(0,n.Y)(h.Flexbox,{flex:1,children:(0,n.Y)(s.A,{className:i.path,type:"secondary",children:o})}),(0,n.Y)(Y.default,{className:i.icon,icon:q.A}),(0,n.Y)(h.Flexbox,{flex:2,children:(0,n.Y)(s.A,{className:i.path,children:l})})]})}),et=(0,o.memo)(({args:e})=>{let{items:t}=e,{t:i}=(0,p.Bd)("tool");return(0,n.FD)(h.Flexbox,{gap:8,children:[(0,n.Y)(s.A,{type:"secondary",children:i("localFiles.moveFiles.itemsMoved",{count:t.length})}),(0,n.Y)(h.Flexbox,{gap:6,children:t.map((e,t)=>(0,n.Y)(ee,{newPath:e.newPath,oldPath:e.oldPath},t))})]})}),ei=(0,c.rU)(({css:e,token:t})=>({container:e`
    padding: 8px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;
  `,meta:e`
    font-size: 12px;
  `})),en=(0,o.memo)(()=>{let{styles:e}=ei();return(0,n.FD)(h.Flexbox,{className:e.container,gap:2,children:[(0,n.FD)(h.Flexbox,{align:"center",gap:24,horizontal:!0,justify:"space-between",children:[(0,n.FD)(h.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,style:{overflow:"hidden"},children:[(0,n.Y)(M.A.Node,{active:!0,style:{flex:1,height:16,width:20}}),(0,n.Y)(M.A.Node,{active:!0,style:{flex:1,height:16,minWidth:100}})]}),(0,n.Y)(h.Flexbox,{align:"center",className:e.meta,gap:16,children:(0,n.Y)(M.A.Node,{active:!0,style:{height:16,maxWidth:40}})})]}),(0,n.Y)(M.A.Node,{active:!0,style:{height:16,width:"100%"}})]})});var eo=i(38471),el=i(84517),er=i(30041),ea=i(51851);let es=(0,c.rU)(({css:e,token:t,cx:i})=>({actions:i("local-file-actions",e`
      cursor: pointer;
      color: ${t.colorTextTertiary};
      opacity: 0;
      transition: opacity 0.2s ${t.motionEaseInOut};
    `),container:e`
    justify-content: space-between;

    padding: 8px;
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorFillQuaternary};

    transition: all 0.2s ${t.motionEaseInOut};

    .local-file-actions {
      opacity: 0;
    }

    &:hover {
      border-color: ${t.colorBorder};

      .local-file-actions {
        opacity: 1;
      }
    }
  `,fileName:e`
    flex: 1;
    margin-inline-start: 8px;
    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
    }
  `,header:e`
    cursor: pointer;
  `,lineCount:e`
    color: ${t.colorTextQuaternary};
  `,meta:i("local-file-actions",e`
      font-size: 12px;
      color: ${t.colorTextTertiary};
    `),path:e`
    margin-block-start: 4px;
    padding-inline: 4px;

    font-size: 12px;
    color: ${t.colorTextSecondary};
    word-break: break-all;
  `,previewBox:e`
    position: relative;

    overflow: hidden;

    padding-block: 0;
    padding-inline: 8px;
    border-radius: 8px;

    background: ${t.colorBgContainer};
  `,previewText:e`
    font-size: 12px;
    line-height: 1.6;
    word-break: break-all;
    white-space: pre-wrap;
  `})),ed=(0,o.memo)(({filename:e,path:t,fileType:i,charCount:o,content:l,totalLineCount:r,totalCharCount:a,loc:d})=>{let{t:c}=(0,p.Bd)("tool"),{styles:u}=es(),g=(0,J.p)(Z.i.displayRelativePath(t));return(0,n.FD)(h.Flexbox,{className:u.container,gap:12,children:[(0,n.FD)(h.Flexbox,{children:[(0,n.FD)(h.Flexbox,{align:"center",className:u.header,gap:12,horizontal:!0,justify:"space-between",children:[(0,n.FD)(h.Flexbox,{align:"center",flex:1,gap:0,horizontal:!0,style:{overflow:"hidden"},children:[(0,n.Y)(_.A,{fileName:e,fileType:i,size:16,variant:"raw"}),(0,n.FD)(h.Flexbox,{horizontal:!0,children:[(0,n.Y)(s.A,{className:u.fileName,ellipsis:!0,children:e}),(0,n.FD)(h.Flexbox,{className:u.actions,gap:2,horizontal:!0,style:{marginLeft:8},children:[(0,n.Y)(R.A,{icon:el.A,onClick:e=>{e.stopPropagation(),H.V.openLocalFile({path:t})},size:"small",title:c("localFiles.openFile")}),(0,n.Y)(R.A,{icon:j.A,onClick:e=>{e.stopPropagation(),H.V.openLocalFolder({isDirectory:!1,path:t})},size:"small",title:c("localFiles.openFolder")})]})]})]}),(0,n.FD)(h.Flexbox,{align:"center",className:u.meta,gap:16,horizontal:!0,children:[(0,n.FD)(h.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(Y.default,{icon:er.A,size:"small"}),(0,n.FD)("span",{children:[o," / ",(0,n.Y)("span",{className:u.lineCount,children:a})]})]}),(0,n.FD)(h.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(Y.default,{icon:ea.A,size:"small"}),(0,n.FD)("span",{children:["L",d?.[0],"-",d?.[1]," /"," ",(0,n.Y)("span",{className:u.lineCount,children:r})]})]})]})]}),(0,n.Y)(s.A,{className:u.path,ellipsis:!0,type:"secondary",children:g})]}),(0,n.Y)(h.Flexbox,{className:u.previewBox,style:{maxHeight:240},children:"md"===i?(0,n.Y)(eo.A,{style:{overflow:"auto"},children:l}):(0,n.Y)("div",{className:u.previewText,style:{width:"100%"},children:l})})]})}),ec=(0,o.memo)(({args:e,pluginState:t,messageId:i})=>(0,g.L)(m.j.isSearchingLocalFiles(i))?(0,n.Y)(en,{}):e?.path&&t?(0,n.Y)(ed,{...t.fileContent,path:e.path}):null),ep=(0,c.rU)(({css:e,token:t})=>({container:e`
    color: ${t.colorTextQuaternary};
  `,new:e`
    color: ${t.colorTextSecondary};
  `})),eh=(0,o.memo)(({args:e})=>{let{styles:t}=ep(),{base:i,dir:o}=$.A.parse(e.path);return(0,n.FD)(h.Flexbox,{align:"center",className:t.container,gap:8,horizontal:!0,paddingInline:12,children:[(0,n.Y)(h.Flexbox,{children:i}),(0,n.Y)(h.Flexbox,{children:(0,n.Y)(Y.default,{icon:q.A})}),(0,n.Y)(P.E,{name:e.newName,path:$.A.join(o,e.newName)})]})});var eu=i(49602),eg=i(86506),em=i(28726),ex=i(70510),eb=i(20439);let ef=(0,c.rU)(({css:e,token:t})=>({container:e`
    overflow: hidden;
    padding-inline: 8px 0;
  `,head:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,header:e`
    .action-icon {
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:hover {
      .action-icon {
        opacity: 1;
      }
    }
  `,statusIcon:e`
    font-size: 12px;
  `})),ey=(0,o.memo)(({args:e,pluginState:t})=>{let{styles:i,theme:l}=ef(),{result:r,message:d}=t||{},c=r?.success,[p,u]=(0,o.useState)(!1);return(0,n.FD)(h.Flexbox,{className:i.container,gap:8,children:[(0,n.FD)(h.Flexbox,{align:"center",className:i.header,horizontal:!0,justify:"space-between",children:[(0,n.FD)(h.Flexbox,{gap:8,horizontal:!0,children:[(0,n.FD)(h.Flexbox,{gap:4,horizontal:!0,children:[r?c?(0,n.Y)(eu.A,{className:i.statusIcon,style:{color:l.colorSuccess}}):(0,n.Y)(eg.A,{className:i.statusIcon,style:{color:l.colorError}}):null,e.description&&(0,n.Y)(s.A,{className:i.head,children:e.description})]}),d&&(0,n.Y)(h.Flexbox,{align:"center",gap:4,horizontal:!0,children:(0,n.Y)(s.A,{className:i.head,type:"secondary",children:d})})]}),(0,n.Y)(h.Flexbox,{align:"center",gap:8,horizontal:!0,children:(0,n.Y)(R.A,{className:"action-icon",icon:p?ex.A:eb.A,onClick:()=>u(!p),size:"small",style:{opacity:p?1:void 0},title:p?"Collapse":"Expand"})})]}),p&&(0,n.FD)(em.A,{gap:8,padding:8,variant:"outlined",children:[(0,n.Y)(a.A,{language:"sh",showLanguage:!1,style:{paddingInline:8},variant:"borderless",wrap:!0,children:e.command}),r?.output&&(0,n.Y)(a.A,{language:"text",showLanguage:!1,variant:"filled",wrap:!0,children:r.output})]})]})}),ev=(0,o.memo)(({searchResults:e=[],messageId:t})=>(0,g.L)(m.j.isSearchingLocalFiles(t))?(0,n.FD)(h.Flexbox,{gap:4,children:[(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}}),(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}}),(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}}),(0,n.Y)(M.A.Button,{active:!0,block:!0,style:{height:16}})]}):(0,n.Y)(h.Flexbox,{gap:2,style:{maxHeight:140,overflow:"scroll"},children:e.map(e=>(0,n.Y)(G,{...e},e.path))}));ev.displayName="SearchFiles";var eY=i(44452),ek=i(15447),ew=i(75589),eA=i(91951),eF=i(13140);let eC=(0,c.rU)(({css:e,token:t})=>({font:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,query:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 8px;

    font-size: 12px;
    color: ${t.colorTextSecondary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,shinyText:(0,eF.f)(t)})),eS=(0,o.memo)(({defaultQuery:e,resultsNumber:t,onEditingChange:i,searching:o})=>{let{t:l}=(0,p.Bd)("tool"),{styles:r,cx:a}=eC();return(0,n.FD)(h.Flexbox,{align:"center",distribution:"space-between",gap:40,height:26,horizontal:!0,children:[(0,n.FD)(h.Flexbox,{align:"center",className:a(r.query,o&&r.shinyText),gap:8,horizontal:!0,onClick:()=>{i(!0)},children:[(0,n.Y)(Y.default,{icon:ew.A}),e]}),(0,n.FD)(h.Flexbox,{align:"center",className:r.font,horizontal:!0,children:[(0,n.Y)("div",{children:l("search.searchResult")}),t]})]})}),eT=(0,o.memo)(({messageId:e,args:t,pluginState:i})=>{let{t:l}=(0,p.Bd)("tool"),r=(0,g.L)(m.j.isSearchingLocalFiles(e)),a=(0,g.L)(e=>e.reSearchLocalFiles),s=i?.searchResults||[],[d,c]=(0,o.useState)(!1),[u,x]=(0,o.useState)(t.keywords),b=async()=>{await a(e,{keywords:u})};return d?(0,n.FD)(h.Flexbox,{align:"center",flex:1,gap:8,height:32,horizontal:!0,children:[(0,n.FD)(h.Flexbox,{gap:8,children:[(0,n.Y)(eY.A,{autoFocus:!0,onChange:e=>{x(e.target.value)},onSearch:b,placeholder:l("search.searchBar.placeholder"),style:{minWidth:400},value:u,variant:"filled"}),(0,n.Y)(ek.A,{icon:(0,n.Y)(Y.default,{icon:ew.A}),loading:r,onClick:b,type:"primary",children:l("search.searchBar.button")})]}),(0,n.Y)(R.A,{icon:eA.A,onClick:()=>c(!1)})]}):(0,n.Y)(eS,{defaultQuery:t?.keywords,onEditingChange:c,resultsNumber:s.length,searching:r||!i})}),ez=(0,o.memo)(({messageId:e,pluginError:t,args:i,pluginState:o})=>(0,n.FD)(h.Flexbox,{gap:4,children:[(0,n.Y)(eT,{args:i,messageId:e,pluginState:o}),(0,n.Y)(ev,{messageId:e,pluginError:t,searchResults:o?.searchResults})]}));ez.displayName="SearchFiles";let eD=(0,o.memo)(({args:e})=>{if(!e)return(0,n.Y)(M.A,{active:!0});let{base:t,dir:i}=$.A.parse(e.path);return(0,n.FD)(h.Flexbox,{horizontal:!0,children:[(0,n.Y)(L.e,{path:i}),(0,n.Y)(Y.default,{icon:N.A}),(0,n.Y)(P.E,{name:t,path:e.path})]})}),eB={[B.u.editLocalFile]:E,[B.u.listLocalFiles]:Q,[B.u.moveLocalFiles]:et,[B.u.readLocalFile]:ec,[B.u.renameLocalFile]:eh,[B.u.runCommand]:ey,[B.u.searchLocalFiles]:ez,[B.u.writeLocalFile]:eD};var eM=i(79555),eN=i(81490),e$=i(20549),eI=i(29724),eL=i(54944),eP=i(51997),eE=i.n(eP),eR=i(20480);let eU=(0,c.rU)(({token:e,css:t})=>({cardBody:t`
      padding-block: 12px 8px;
      padding-inline: 16px;
    `,container:t`
      cursor: pointer;

      overflow: hidden;

      min-width: 360px;
      max-width: 360px;
      border: 1px solid ${e.colorBorderSecondary};
      border-radius: 12px;

      transition: border-color 0.2s;

      :hover {
        border-color: ${e.colorPrimary};
      }
    `,description:t`
      margin-block: 0 4px !important;
      color: ${e.colorTextTertiary};
    `,detailsSection:t`
      padding-block: ${e.paddingSM}px;
    `,externalLink:t`
      color: ${e.colorTextQuaternary};

      :hover {
        color: ${e.colorText};
      }
    `,footer:t`
      padding-block: 8px;
      padding-inline: 16px;
      border-radius: 8px;

      text-align: center;

      background-color: ${e.colorFillQuaternary};
    `,footerText:t`
      font-size: 12px !important;
      color: ${e.colorTextTertiary} !important;
    `,metaInfo:t`
      display: flex;
      align-items: center;
      color: ${e.colorTextSecondary};
    `,title:t`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      margin-block-end: 0;
    `,titleRow:t`
      color: ${e.colorText};
    `})),eW=(0,o.memo)(({result:e,messageId:t,crawler:i,originalUrl:o})=>{let{t:l}=(0,p.Bd)("plugin"),{styles:r}=eU(),[a,c]=(0,g.L)(e=>[e.openToolUI,e.togglePageContent]);if("errorType"in e)return(0,n.FD)(h.Flexbox,{className:r.footer,gap:8,children:[(0,n.Y)(d.A,{message:(0,n.Y)("div",{style:{textAlign:"start"},children:e.errorMessage||e.content}),type:"error",variant:"borderless"}),(0,n.Y)("div",{children:(0,n.Y)(eL.A,{classNames:{content:r.footerText,label:r.footerText},column:1,items:[{children:i,label:l("search.crawPages.meta.crawler")}],size:"small"})})]});let{url:u,title:m,description:x}=e;return(0,n.FD)(h.Flexbox,{className:r.container,justify:"space-between",onClick:()=>{a(t,eM.J.identifier),c(o)},children:[(0,n.FD)(h.Flexbox,{className:r.cardBody,gap:8,children:[(0,n.FD)(h.Flexbox,{align:"center",className:r.titleRow,horizontal:!0,justify:"space-between",children:[(0,n.Y)(h.Flexbox,{children:(0,n.Y)("div",{className:r.title,children:m||o})}),(0,n.Y)(eE(),{href:u,onClick:e=>e.stopPropagation(),target:"_blank",children:(0,n.Y)(eR.default,{className:r.externalLink,children:(0,n.Y)(Y.default,{icon:el.A})})})]}),(0,n.Y)(s.A,{className:r.description,ellipsis:{rows:2},children:x||e.content?.slice(0,40)})]}),(0,n.Y)("div",{className:r.footer,children:(0,n.Y)(eL.A,{classNames:{content:r.footerText,label:r.footerText},column:2,items:[{children:e.content?.length,label:l("search.crawPages.meta.words")},{children:i,label:l("search.crawPages.meta.crawler")}],size:"small"})})]})}),ej=(0,o.memo)(({results:e,messageId:t,urls:i=[]})=>{let o=(0,e$.a)();return e&&0!==e.length?(0,n.Y)(eN.A,{gap:o?4:12,horizontal:!o,orientation:"horizontal",size:8,children:e.map(e=>(0,n.Y)(eW,{crawler:e.crawler,messageId:t,originalUrl:e.originalUrl,result:e.data||{content:e?.content,errorMessage:e?.errorMessage,errorType:e?.errorType,url:e.originalUrl}},e.originalUrl))}):(0,n.Y)(h.Flexbox,{gap:o?4:12,horizontal:!o,children:i&&i.length>0&&i.map((e,t)=>(0,n.Y)(eI.A,{url:e},`${e}_${t}`))})}),e_=(0,o.memo)(({messageId:e,pluginState:t={},args:i={}})=>{let{results:o}=t,{urls:l}=i;return(0,n.Y)(ej,{messageId:e,results:o,urls:l})}),eH=(0,o.memo)(({messageId:e,pluginState:t,args:i})=>{let{results:o}=t||{},{url:l}=i||{};return(0,n.Y)(ej,{messageId:e,results:o,urls:[l]})}),eO=()=>(0,n.FD)("svg",{height:48,viewBox:"0 0 300 300",width:48,xmlns:"http://www.w3.org/2000/svg",children:[(0,n.Y)("path",{d:"M121.929 66.386a50.717 50.717 0 0 0-31.18 5.052l-7.514-14.523a67.076 67.076 0 0 1 78.427 12.336 67.022 67.022 0 0 1 11.688 78.505l-14.464-7.634a50.677 50.677 0 0 0-8.837-59.357 50.71 50.71 0 0 0-28.12-14.38Z",fill:"#3050FF"}),(0,n.Y)("path",{d:"M114.491 34.702c-45.165 0-81.78 36.603-81.78 81.755 0 45.153 36.615 81.756 81.78 81.756 45.166 0 81.78-36.603 81.78-81.756 0-45.152-36.614-81.755-81.78-81.755ZM0 116.457C0 53.244 51.26 2 114.491 2c63.232 0 114.492 51.244 114.492 114.457 0 63.214-51.26 114.458-114.492 114.458C51.26 230.915 0 179.671 0 116.457Z",fill:"#3050FF"}),(0,n.Y)("path",{d:"m205.592 163.093-42.644 44.509L257.357 298 300 253.491l-94.408-90.398Z",fill:"#3050FF"})]});var eK=i(67072);let eG=(0,c.rU)(({css:e,token:t})=>({container:e`
    border-radius: 8px;
    color: ${t.colorText};
  `,desc:e`
    color: ${t.colorTextTertiary};
    text-align: center;
  `,form:e`
    width: 100%;
    max-width: 300px;
    padding-block: 12px;
  `})),eV=(0,o.memo)(({children:e,background:t,title:i,description:o,avatar:l,animation:r,className:a,gap:s=16,...d})=>{let{cx:c,styles:p,theme:u}=eG();return(0,n.FD)(eR.default,{className:c(p.form,a),gap:s,...d,children:[(0,n.Y)(eK.A,{animation:r,avatar:l,background:t??u.colorFillContent,gap:12,size:80}),(0,n.FD)(h.Flexbox,{gap:8,width:"100%",children:[(0,n.Y)(h.Flexbox,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:i}),(0,n.Y)(h.Flexbox,{className:p.desc,children:o})]}),e]})}),eQ=(0,o.memo)(({provider:e,id:t})=>{let{t:i}=(0,p.Bd)("plugin"),[l,r]=(0,g.L)(e=>[e.reInvokeToolMessage,e.deleteMessage]),[a,s]=(0,o.useState)(!1),d=(0,o.useMemo)(()=>(0,n.Y)(eO,{}),[e]);return(0,n.Y)(eR.default,{gap:16,style:{width:400},children:(0,n.Y)(eV,{avatar:d,description:i("search.searchxng.unconfiguredDesc"),title:i("search.searchxng.unconfiguredTitle"),children:(0,n.FD)(h.Flexbox,{gap:12,width:"100%",children:[(0,n.Y)(ek.A,{block:!0,disabled:a,onClick:async()=>{s(!0),l(t).then(()=>{s(!1)})},style:{marginTop:8},type:"primary",children:i("search.config.confirm")}),(0,n.Y)(ek.A,{onClick:()=>{r(t)},children:i("search.config.close")})]})})})});var eq=i(55156),eJ=i(58043),eZ=i(43610);let eX=(0,c.rU)(({css:e,token:t})=>({font:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,query:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 8px;

    font-size: 12px;
    color: ${t.colorTextSecondary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,shinyText:(0,eF.f)(t)})),e0=(0,o.memo)(({defaultEngines:e,defaultQuery:t,resultsNumber:i,onEditingChange:o,searching:l})=>{let r=(0,e$.a)(),{styles:a,cx:d}=eX();return(0,n.FD)(h.Flexbox,{align:r?"flex-start":"center",distribution:"space-between",gap:r?8:40,height:r?void 0:32,horizontal:!r,children:[(0,n.FD)(h.Flexbox,{align:"center",className:d(a.query,l&&a.shinyText),gap:8,horizontal:!0,onClick:()=>{o(!0)},children:[(0,n.Y)(Y.default,{icon:ew.A}),t]}),l?(0,n.Y)(M.A.Node,{active:!0,style:{height:20,width:40}}):(0,n.FD)(h.Flexbox,{align:"center",horizontal:!0,children:[(0,n.Y)(eZ.L,{engines:e}),!r&&(0,n.Y)(s.A,{style:{fontSize:12},type:"secondary",children:i})]})]})}),e1=(0,o.memo)(({messageId:e,args:t,pluginState:i,setEditing:o,editing:l})=>{let r=(0,g.L)(m.j.isSearXNGSearching(e)),a=i?.results||[],{t:s}=(0,p.Bd)("common"),d=(0,eq.A)(a.flatMap(e=>e.engines)),c=d.length>0?d:t.searchEngines||[];return l?(0,n.Y)(eJ.A,{defaultEngines:c,defaultQuery:t?.query,messageId:e,onSearch:()=>o(!1),searchAddon:(0,n.Y)(R.A,{icon:eA.A,onClick:()=>o(!1),title:s("cancel")})}):(0,n.Y)(e0,{defaultEngines:c,defaultQuery:t?.query,onEditingChange:o,resultsNumber:a.length,searching:r||!i})});var e2=i(28755),e8=i(73916),e4=i(9683);let e3=(0,c.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    height: 100%;
    padding: 8px;
    border-radius: 8px;

    font-size: 12px;
    color: initial;

    background: ${t.colorFillQuaternary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    color: ${t.colorText};
    text-overflow: ellipsis;
  `,url:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    text-overflow: ellipsis;
  `})),e6=(0,o.memo)(({url:e,title:t})=>{let{styles:i}=e3(),o=new URL(e).hostname;return(0,n.Y)(eE(),{href:e,target:"_blank",children:(0,n.FD)(h.Flexbox,{className:i.container,gap:2,justify:"space-between",children:[(0,n.Y)("div",{className:i.title,children:t}),(0,n.FD)(h.Flexbox,{align:"center",gap:4,horizontal:!0,children:[(0,n.Y)(e4.A,{size:14,title:t,url:e}),(0,n.Y)(s.A,{className:i.url,type:"secondary",children:o.replace("www.","")})]})]})})}),e5=(0,c.rU)(({css:e,token:t})=>({container:e`
    cursor: pointer;

    height: 100%;
    padding: 8px;
    border-radius: 8px;

    font-size: 12px;
    color: initial;

    background: ${t.colorFillQuaternary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    text-overflow: ellipsis;
  `})),e7=(0,o.memo)(({messageId:e,engines:t,resultsNumber:i})=>{let{styles:o}=e5(),[l]=(0,g.L)(e=>[e.openToolUI]),{t:r}=(0,p.Bd)("tool");return(0,n.FD)(h.Flexbox,{className:o.container,gap:2,justify:"space-between",onClick:()=>{l(e,eM.J.identifier)},children:[(0,n.Y)("div",{className:o.title,children:r("search.viewMoreResults",{results:i})}),(0,n.Y)(h.Flexbox,{align:"center",gap:4,horizontal:!0,children:(0,n.Y)(eZ.L,{engines:t})})]})}),e9=(0,o.memo)(({messageId:e,args:t,pluginState:i,setEditing:o,editing:l})=>{let r=(0,g.L)(m.j.isSearXNGSearching(e)),a=i?.results||[],{t:d}=(0,p.Bd)(["tool","common"]),c=(0,eq.A)(a.flatMap(e=>e.engines)),u=c.length>0?c:t?.searchEngines||[],x=(0,e$.a)();return r||!i?(0,n.Y)(h.Flexbox,{gap:12,horizontal:!0,children:["1","2","3","4","5"].map(e=>(0,n.Y)(M.A.Button,{active:!0,style:{borderRadius:8,height:80,width:160}},e))}):0===a.length?(0,n.FD)(h.Flexbox,{align:"center",gap:8,horizontal:!0,paddingInline:8,children:[(0,n.Y)(s.A,{type:"secondary",children:d("search.emptyResult")}),!l&&(0,n.Y)("div",{children:(0,n.Y)(e2.Ay,{color:"default",icon:(0,n.Y)(Y.default,{icon:e8.A}),onClick:()=>{o(!0)},size:"small",variant:"filled",children:d("edit",{ns:"common"})})})]}):(0,n.Y)(h.Flexbox,{gap:8,children:(0,n.FD)(h.Flexbox,{gap:12,horizontal:!0,style:{minHeight:80,overflowX:"scroll",width:"100%"},children:[a.slice(0,5).map(e=>(0,n.Y)("div",{style:{minWidth:160,width:160},children:(0,n.Y)(e6,{...e})},e.url)),!x&&a.length>5&&(0,n.Y)("div",{style:{minWidth:160},children:(0,n.Y)(e7,{engines:u,messageId:e,resultsNumber:a.length-5})})]})})}),te=(0,o.memo)(({messageId:e,args:t,pluginState:i,pluginError:l})=>{let[r,s]=(0,o.useState)(!1);return l?l?.type==="PluginSettingsInvalid"?(0,n.Y)(eQ,{id:e,provider:l.body?.provider}):(0,n.Y)(d.A,{extra:(0,n.Y)(h.Flexbox,{children:(0,n.Y)(a.A,{actionIconSize:"small",language:"json",variant:"borderless",children:JSON.stringify(l.body?.data||l.body,null,2)})}),message:l?.message,type:"error"}):(0,n.FD)(h.Flexbox,{gap:8,children:[(0,n.Y)(e1,{args:t,editing:r,messageId:e,pluginState:i,setEditing:s}),(0,n.Y)(e9,{args:t,editing:r,messageId:e,pluginState:i,setEditing:s})]})}),tt={[eM.t.crawlMultiPages]:e_,[eM.t.crawlSinglePage]:eH,[eM.t.search]:te},ti={[B.M.identifier]:eB,[eM.J.identifier]:tt,[r.z.identifier]:{python:D}},tn=e=>{let t=!0;try{JSON.parse(e)}catch{t=!1}let i=t?JSON.parse(e):e;return(0,o.useMemo)(()=>({data:i,isJSON:t}),[e])},to=(0,o.memo)(({content:e,arguments:t="",pluginState:i,id:o,identifier:r,pluginError:a,apiName:s})=>{let{data:d}=tn(e),c=((e,t)=>{if(!e)return;let i=ti[e];if(i&&t&&i[t])return i[t]})(r,s);if(!c)return;let p=(0,l.N8)(t);return(0,n.Y)(c,{apiName:s,args:p,content:d,identifier:r,messageId:o,pluginError:a,pluginState:i})});var tl=i(33375),tr=i(74038),ta=i(68172);let ts=(0,c.rU)(({css:e,token:t})=>e`
    position: relative;

    overflow: hidden;
    display: block;

    width: 300px;
    height: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: 10px;

    &::after {
      content: '';

      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;

      box-sizing: border-box;
      width: 40%;
      height: 100%;

      background: ${t.colorPrimary};

      animation: animloader 2s linear infinite;
    }

    @keyframes animloader {
      0% {
        inset-inline-start: 0;
        transform: translateX(-100%);
      }

      100% {
        inset-inline-start: 100%;
        transform: translateX(0%);
      }
    }
  `),td=(0,o.memo)(()=>{let{t:e}=(0,p.Bd)("plugin"),{styles:t}=ts();return(0,n.FD)(h.Flexbox,{align:"center",gap:8,padding:16,children:[(0,n.Y)("span",{className:t}),e("loading.content")]})});var tc=i(85578);let tp=(e,t=[])=>{let[i,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.data.type===tc.PluginChannel.pluginReadyForRender&&n(!0)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),(0,o.useEffect)(()=>{i&&e()},[i,...t]),i},th=(e,t=[])=>{(0,o.useEffect)(()=>{let t=t=>{t.data.type===tc.PluginChannel.fetchPluginMessage&&e(t.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},t)},tu=(e,t)=>{e.postMessage({props:t,type:tc.PluginChannel.renderPlugin},"*")},tg=(0,o.memo)(({url:e,width:t=800,height:i=300,...l})=>{let r=(0,o.useRef)(null),[a,s]=(0,o.useState)(!0);return tp(()=>{let e=r.current?.contentWindow;e&&tu(e,l)},[l]),th(()=>{let e=r.current?.contentWindow;e&&tu(e,l)},[l]),(0,n.FD)(n.FK,{children:[a&&(0,n.Y)(M.A,{active:!0,style:{maxWidth:"100%",width:t}}),(0,n.Y)("iframe",{allowtransparency:"true",height:i,hidden:a,onLoad:()=>{s(!1)},ref:r,src:e,style:{border:0,colorScheme:"light",maxWidth:"100%"},width:t})]})}),tm=(0,tl.default)(()=>Promise.all([i.e(41952),i.e(75927),i.e(40371),i.e(38141),i.e(10048),i.e(56079)]).then(i.bind(i,56079)),{loadableGenerated:{webpack:()=>[56079]},ssr:!1}),tx=(0,o.memo)(({content:e,name:t,loading:i})=>{let l=(0,tr.j)(ta.w.getToolManifestById(t||"")),{isJSON:r,data:a}=tn(e);if(!r)return i&&(0,n.Y)(td,{});if(!l?.ui)return;let s=l.ui;if(s.url)return"module"===s.mode?(0,n.Y)(o.Suspense,{fallback:(0,n.Y)(M.A,{active:!0,style:{width:400}}),children:(0,n.Y)(tm,{content:a,name:t||"unknown",url:s.url})}):(0,n.Y)(tg,{content:a,height:s.height,name:t||"unknown",url:s.url,width:s.width})});var tb=i(38351);let tf=(0,o.memo)(({pluginState:e,arguments:t})=>{if(!e)return;let{content:i}=e,o=i.some(e=>"image"===e.type);return(0,n.FD)(h.Flexbox,{gap:8,style:o?void 0:{maxHeight:400,overflow:"scroll",padding:8,width:"100%"},children:[t&&(0,n.Y)("div",{children:(0,n.Y)(tb.A,{arguments:t})}),(0,n.Y)(h.Flexbox,{children:(0,n.Y)(h.Flexbox,{children:i.map((e,t)=>{switch(e.type){case"text":return(0,n.Y)(eo.A,{variant:"chat",children:e.text},e.text);case"image":return(0,n.Y)(y.A,{alt:"MCP content",height:"auto",src:e.data,width:"100%"},`image-${t}`);default:return null}})})})]})});var ty=i(38759),tv=i(37316);let tY=(0,o.memo)(({content:e,loading:t})=>{let i=(0,ty.k)(tv.v.fontSize);return t?(0,n.Y)(td,{}):(0,n.Y)(eo.A,{fontSize:i,variant:"chat",children:e})});var tk=i(13082);let tw=e=>ta.w.getPluginSettingsById(e)(tr.j.getState()),tA=e=>tk.E1.getDbMessageById(e)(g.L.getState()),tF=(0,o.memo)(({url:e,id:t,payload:i,width:l=600,height:r=300})=>{var a;let[s,d]=(0,o.useState)(!0),c=(0,o.useRef)(null);tp(()=>{let e=c.current?.contentWindow;if(e&&i){var n;let o=tw(i.identifier),l=tA(t);n={payload:i,settings:o,state:l?.pluginState},e.postMessage({type:tc.PluginChannel.initStandalonePlugin,...n,props:n.payload},"*")}},[i]),th(()=>{let e=c.current?.contentWindow;if(e){let i=tk.E1.getDbMessageById(t)(g.L.getState());if(!i)return;let n={content:""};try{n.content=JSON.parse(i.content||"{}")}catch{n.content=i.content||""}tu(e,n)}},[]);let p=(0,g.L)(e=>e.fillPluginMessageContent);(0,o.useEffect)(()=>{let e=e=>{if(e.data.type===tc.PluginChannel.fillStandalonePluginContent){let i=e.data.content,n=e.data.triggerAiMessage;((e,i)=>{p(t,e,i)})("string"!=typeof i?JSON.stringify(i):i,n)}};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),(0,o.useEffect)(()=>{let e=e=>{e.data.type===tc.PluginChannel.fetchPluginState&&(e=>{let i=c.current?.contentWindow;if(i){var n;let o=tA(t);if(!o)return;n=o.pluginState?.[e],i.postMessage({key:e,type:tc.PluginChannel.renderPluginState,value:n},"*")}})(e.data.key)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]);let h=(0,g.L)(e=>e.optimisticUpdatePluginState);(0,o.useEffect)(()=>{let e=e=>{e.data.type===tc.PluginChannel.updatePluginState&&((e,i)=>{h(t,{[e]:i})})(e.data.key,e.data.value)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),(0,o.useEffect)(()=>{let e=e=>{e.data.type===tc.PluginChannel.fetchPluginSettings&&(()=>{let e=c.current?.contentWindow;if(e){if(!i?.identifier)return;let t=tw(i.identifier);e.postMessage({type:tc.PluginChannel.renderPluginSettings,value:t},"*")}})()};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]);let u=(0,tr.j)(e=>e.updatePluginSettings);(0,o.useEffect)(()=>{let e=e=>{e.data.type===tc.PluginChannel.updatePluginSettings&&(e=>{i?.identifier&&u(i?.identifier,e)})(e.data.value)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]);let m=(0,g.L)(e=>e.triggerAIMessage);(0,o.useEffect)(()=>{let e=e=>{e.data.type===tc.PluginChannel.triggerAIMessage&&(e=>{e===t&&m({parentId:t})})(e.data.id)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]);let x=(0,g.L)(e=>e.createAssistantMessageByPlugin);return a=e=>{x(e,t)},(0,o.useEffect)(()=>{let e=e=>{e.data.type===tc.PluginChannel.createAssistantMessage&&a(e.data.content)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),(0,n.FD)(n.FK,{children:[s&&(0,n.Y)(M.A,{active:!0,style:{maxWidth:"100%",width:l}}),(0,n.Y)("iframe",{allowtransparency:"true",height:r,hidden:s,onLoad:()=>{d(!1)},ref:c,src:e,style:{border:0,colorScheme:"light",maxWidth:"100%"},width:l})]})}),tC=(0,o.memo)(({payload:e,id:t,name:i="unknown"})=>{let o=(0,tr.j)(ta.w.getToolManifestById(i));if(!o?.ui)return;let l=o.ui;if(l.url&&!t.startsWith("tmp"))return(0,n.Y)(tF,{height:l.height,id:t,payload:e,url:l.url,width:l.width},t)}),tS=(0,o.memo)(({content:e,arguments:t="",id:i,payload:o,pluginState:l,identifier:r,type:a,loading:s,pluginError:d})=>{switch(a){case"standalone":return(0,n.Y)(tC,{id:i,name:r,payload:o});case"builtin":return(0,n.Y)(to,{apiName:o?.apiName,arguments:t,content:e,id:i,identifier:r,loading:s,pluginError:d,pluginState:l});case"mcp":return(0,n.Y)(tf,{apiName:o?.apiName,arguments:t,content:e,id:i,identifier:r,loading:s,pluginError:d,pluginState:l});case"markdown":return(0,n.Y)(tY,{content:e,loading:s});default:return(0,n.Y)(tx,{content:e,loading:s,name:r})}})},97220:(e,t,i)=>{i.d(t,{n:()=>l});var n=i(24617),o=i(47270);let l=e=>{if(!e)return"";try{let t=(0,n.parse)(e);if(0===Object.keys(t).length)return"";return(0,o.As)(t)}catch{return e}}}}]);