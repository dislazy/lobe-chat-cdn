"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30508],{15516:(e,t,o)=>{o.d(t,{A:()=>N});var i=o(28802),n=o(29703),a=o(92619),r=o(11577),l=o(83034),d=o(56003),s=o(81962),c=o(3136),u=o(12389),p=o(9274),g=o(54944),m=o(49875),h=o(2644),f=o.n(h),x=o(22158),b=o(29961),y=o(59121),w=o(80457),k=o(27809),v=o(9402);let F=(0,l.memo)(e=>{let{name:t,embeddingStatus:o,size:n,createdAt:a,updatedAt:l,chunkCount:d,url:s}=e||{},{t:h}=(0,y.Bd)("file"),F=(0,r.DP)();if(!e)return null;let Y=[{children:t,key:"name",label:h("detail.basic.filename")},{children:(0,v.Xq)(n),key:"size",label:h("detail.basic.size")},{children:t.split(".").pop()?.toUpperCase(),key:"type",label:h("detail.basic.type")},{children:f()(a).format("YYYY-MM-DD HH:mm"),key:"createdAt",label:h("detail.basic.createdAt")},{children:f()(l).format("YYYY-MM-DD HH:mm"),key:"updatedAt",label:h("detail.basic.updatedAt")}],A=[{children:(0,i.FD)(c.A,{bordered:!1,icon:(0,i.Y)(u.default,{icon:x.A}),children:[" ",d]}),key:"chunkCount",label:h("detail.data.chunkCount")},{children:(0,i.Y)(c.A,{bordered:!1,color:o||"default",children:h(`detail.data.embedding.${o||"default"}`)}),key:"embeddingStatus",label:h("detail.data.embeddingStatus")}];return(0,i.FD)(w.Flexbox,{padding:16,style:{borderInlineStart:`1px solid ${F.colorSplit}`},width:300,children:[(0,i.Y)(g.A,{colon:!1,column:1,extra:s&&(0,i.Y)(p.A,{icon:b.A,onClick:()=>{(0,k.P)(s,t)},title:h("download",{ns:"common"})}),items:Y,labelStyle:{width:120},size:"small",title:h("detail.basic.title")}),(0,i.Y)(m.A,{}),(0,i.Y)(g.A,{colon:!1,column:1,items:A,labelStyle:{width:120},size:"small"})]})}),Y=(0,l.memo)(({id:e})=>{let t=(0,d.x)(s.S.getFileById(e));if(t)return(0,i.Y)(F,{...t})});var A=o(81040);let D=(0,l.memo)(({id:e})=>{let t=(0,d.x)(s.S.getFileById(e));if(t)return(0,i.Y)(A.default,{...t})});var S=o(54078);let C=(0,r.rU)(({css:e,token:t},o)=>({body:e`
      height: 100%;
      max-height: calc(100dvh - 56px) !important;
    `,content:e`
      height: 100%;
      border: none !important;
      background: transparent !important;
    `,extra:e`
      position: fixed;
      z-index: ${t.zIndexPopupBase+10};
      inset-block: 0 0;
      inset-inline-end: 0;

      width: ${300}px;
      border-inline-start: 1px solid ${t.colorSplit};

      background: ${t.colorBgLayout};
    `,header:e`
      background: transparent !important;
    `,modal:e`
      position: relative;
      inset-block-start: 0;

      width: ${o?"calc(100vw - 300px) ":"100vw"} !important;
      max-width: none;
      height: 100%;
      margin: 0;
      padding-block-end: 0;

      > div {
        height: 100%;
      }
    `})),B=(0,l.memo)(()=>{let e=(0,S.Sz)(),t=(0,S._j)(),o=(0,d.x)(s.S.getFileById(e)),r=(0,l.useMemo)(()=>!!(e&&o),[e,o]),{styles:c}=C(r),u=(0,l.useCallback)(()=>{t(void 0)},[t]);return r&&e?(0,i.FD)(i.FK,{children:[(0,i.Y)(a.Ay,{theme:{token:{motion:!1}},children:(0,i.Y)(n.A,{className:c.modal,classNames:{body:c.body,content:c.content,header:c.header},footer:!1,onCancel:u,open:r,width:"auto",children:(0,i.Y)(D,{id:e})})}),(0,i.Y)("div",{className:c.extra,children:(0,i.Y)(Y,{id:e})})]}):null});B.displayName="FileModalQueryRoute";let N=B},17383:(e,t,o)=>{o.d(t,{A:()=>h});var i=o(28802),n=o(83606),a=o(34367),r=o(11577),l=o(14654),d=o(31021),s=o.n(d),c=o(83034),u=o(49935),p=o(5930),g=o(31065);let m=(0,r.rU)(({css:e,token:t})=>({panel:e`
    height: 100%;
    background: ${t.colorBgLayout};
  `})),h=(0,c.memo)(({children:e})=>{let{md:t=!0}=(0,l.Q)(),{styles:o}=m(),[r,d,h]=(0,p.o)(e=>[g.I.filePanelWidth(e),g.I.showFilePanel(e),e.updateSystemStatus]),[f,x]=(0,c.useState)(r);f!==r&&x(r);let[b,y]=(0,c.useState)(!!d);return(0,c.useEffect)(()=>{t&&b&&h({showFilePanel:!0}),t||h({showFilePanel:!1})},[t,b]),(0,i.Y)(n.Ay,{className:o.panel,defaultSize:{width:f},expand:d,maxWidth:280,minWidth:u._7,mode:t?"fixed":"float",onExpandChange:e=>{s()(e,d)||(h({showFilePanel:e}),y(e))},onSizeChange:(e,t)=>{if(!t)return;let o="string"==typeof t.width?Number.parseInt(t.width):t.width;!o||s()(o,r)||(x(o),h({filePanelWidth:o}))},placement:"left",size:{height:"100%",width:r},children:(0,i.Y)(a.A,{style:{flex:"none",height:"100%",minWidth:u._7},children:e})})})},20577:(e,t,o)=>{o.d(t,{O:()=>v});var i=o(50786),n=o(23993),a=o(41734);let r={activeKnowledgeBaseId:null,activeKnowledgeBaseItems:{},initKnowledgeBaseList:!1,knowledgeBaseLoadingIds:[],initDatasetList:!1};var l=o(77605);class d{constructor(){this.createKnowledgeBase=async e=>l.du.knowledgeBase.createKnowledgeBase.mutate(e),this.getKnowledgeBaseList=async()=>l.du.knowledgeBase.getKnowledgeBases.query(),this.getKnowledgeBaseById=async e=>l.du.knowledgeBase.getKnowledgeBaseById.query({id:e}),this.updateKnowledgeBaseList=async(e,t)=>l.du.knowledgeBase.updateKnowledgeBase.mutate({id:e,value:t}),this.deleteKnowledgeBase=async e=>l.du.knowledgeBase.removeKnowledgeBase.mutate({id:e}),this.addFilesToKnowledgeBase=async(e,t)=>l.du.knowledgeBase.addFilesToKnowledgeBase.mutate({ids:t,knowledgeBaseId:e}),this.removeFilesFromKnowledgeBase=async(e,t)=>l.du.knowledgeBase.removeFilesFromKnowledgeBase.mutate({ids:t,knowledgeBaseId:e})}}let s=new d;var c=o(56003),u=o(64911),p=o(46265);let g="FETCH_KNOWLEDGE_BASE";var m=o(22309),h=o(29914),f=o(87050);class x{constructor(){this.createDataset=async e=>l.du.ragEval.createDataset.mutate(e),this.getDatasets=async e=>l.du.ragEval.getDatasets.query({knowledgeBaseId:e}),this.removeDataset=async e=>{await l.du.ragEval.removeDataset.mutate({id:e})},this.updateDataset=async(e,t)=>{await l.du.ragEval.updateDataset.mutate({id:e,value:t})},this.getDatasetRecords=async e=>l.du.ragEval.getDatasetRecords.query({datasetId:e}),this.removeDatasetRecord=async e=>{await l.du.ragEval.removeDatasetRecords.mutate({id:e})},this.importDatasetRecords=async(e,t)=>{let{path:o}=await f.z.uploadToServerS3(t,{directory:"ragEval"});await l.du.ragEval.importDatasetRecords.mutate({datasetId:e,pathname:o})},this.createEvaluation=async e=>l.du.ragEval.createEvaluation.mutate(e),this.getEvaluationList=async e=>l.du.ragEval.getEvaluationList.query({knowledgeBaseId:e}),this.startEvaluationTask=async e=>l.du.ragEval.startEvaluationTask.mutate({id:e}),this.removeEvaluation=async e=>{await l.du.ragEval.removeEvaluation.mutate({id:e})},this.checkEvaluationStatus=async e=>l.du.ragEval.checkEvaluationStatus.query({id:e})}}let b=new x,y="FETCH_DATASET_LIST",w="FETCH_EVALUATION_LIST_KEY",k=(0,a.t)("knowledgeBase"),v=(0,n.h)()(k((...e)=>({...r,...((e,t)=>({createNewKnowledgeBase:async e=>{let o=await s.createKnowledgeBase(e);return await t().refreshKnowledgeBaseList(),o},internal_toggleKnowledgeBaseLoading:(t,o)=>{e(e=>o?{knowledgeBaseLoadingIds:[...e.knowledgeBaseLoadingIds,t]}:{knowledgeBaseLoadingIds:e.knowledgeBaseLoadingIds.filter(e=>e!==t)},!1,"toggleKnowledgeBaseLoading")},refreshKnowledgeBaseList:async()=>{await (0,u.j)(g)},removeKnowledgeBase:async e=>{await s.deleteKnowledgeBase(e),await t().refreshKnowledgeBaseList()},updateKnowledgeBase:async(e,o)=>{t().internal_toggleKnowledgeBaseLoading(e,!0),await s.updateKnowledgeBaseList(e,o),await t().refreshKnowledgeBaseList(),t().internal_toggleKnowledgeBaseLoading(e,!1)},useFetchKnowledgeBaseItem:o=>(0,p.lA)(["FETCH_KNOWLEDGE_BASE_ITEM",o],()=>s.getKnowledgeBaseById(o),{onSuccess:i=>{i&&e({activeKnowledgeBaseId:o,activeKnowledgeBaseItems:{...t().activeKnowledgeBaseItems,[o]:i}})}}),useFetchKnowledgeBaseList:(o={})=>(0,p.lA)(g,()=>s.getKnowledgeBaseList(),{fallbackData:[],onSuccess:()=>{t().initKnowledgeBaseList||e({initKnowledgeBaseList:!0},!1,"useFetchKnowledgeBaseList/init")},suspense:o.suspense})}))(...e),...(()=>({addFilesToKnowledgeBase:async(e,t)=>{await s.addFilesToKnowledgeBase(e,t),await c.x.getState().refreshFileList()},removeFilesFromKnowledgeBase:async(e,t)=>{await s.removeFilesFromKnowledgeBase(e,t),await c.x.getState().refreshFileList()}}))(...e),...((...e)=>({...((e,t)=>({createNewDataset:async e=>{await b.createDataset(e),await t().refreshDatasetList()},importDataset:async(e,i)=>{if(i){if("jsonl"===e.name.split(".").pop()){let t=await e.text(),{default:n}=await o.e(53802).then(o.bind(o,53802));try{let o=n.parse(t);m.iU.array().parse(o),await b.importDatasetRecords(i,e)}catch(e){h.Ew.error({description:e.message,message:"文件格式错误"})}}await t().refreshDatasetList()}},refreshDatasetList:async()=>{await (0,u.j)(y)},removeDataset:async e=>{await b.removeDataset(e),await t().refreshDatasetList()},useFetchDatasetRecords:e=>(0,p.lA)(e?["FETCH_DATASET_RECORD_KEY",e]:null,()=>b.getDatasetRecords(e)),useFetchDatasets:o=>(0,p.lA)([y,o],()=>b.getDatasets(o),{fallbackData:[],onSuccess:()=>{t().initDatasetList||e({initDatasetList:!0},!1,"useFetchDatasets/init")}})}))(...e),...((e,t)=>({checkEvaluationStatus:async e=>{await b.checkEvaluationStatus(e)},createNewEvaluation:async e=>{await b.createEvaluation(e),await t().refreshEvaluationList()},refreshEvaluationList:async()=>{await (0,u.j)(w)},removeEvaluation:async e=>{await b.removeEvaluation(e)},runEvaluation:async e=>{await b.startEvaluationTask(e)},useFetchEvaluationList:o=>(0,p.lA)([w,o],()=>b.getEvaluationList(o),{fallbackData:[],onSuccess:()=>{t().initDatasetList||e({initDatasetList:!0},!1,"useFetchDatasets/init")}})}))(...e)}))(...e)})),i.x)},27051:(e,t,o)=>{o.d(t,{A:()=>D});var i=o(28802),n=o(12389),a=o(11577),r=o(88627),l=o(89723),d=o(25777),s=o(3779),c=o(83034),u=o(11015),p=o(59121),g=o(20480),m=o(80457),h=o(58244),f=o(76927),x=o(45541),b=o(88990);let y="dragging-root",w=()=>document.querySelector(`#${y}`),k=e=>{!e.dataTransfer?.items||0===e.dataTransfer.items.length||e.dataTransfer.types.includes("Files")&&e.preventDefault()},v=async e=>new Promise(t=>{e.isFile?e.file(e=>{t([e])}):e.isDirectory?e.createReader().readEntries(async e=>{let o=e.map(e=>v(e));t((await Promise.all(o)).flat())}):t([])}),F=async e=>{let t=[];for(let o of e)if("file"===o.kind){let e=o.getAsFile();if(e)t.push(new Promise(t=>{t([e])}));else{let e=o.webkitGetAsEntry();e&&t.push(v(e))}}return(await Promise.all(t)).flat()},Y={size:36,strokeWidth:1.5},A=(0,a.rU)(({css:e,token:t})=>({container:e`
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
      color: ${(0,s.e$)(.05,t.geekblue)};
      background: ${(0,s.a)(.38,t.geekblue)};
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
    `})),D=(0,c.memo)(({enabledFiles:e=!0,onUploadFiles:t})=>{let{styles:o,theme:a}=A(),{t:v}=(0,p.Bd)("components");if((e=>{let{t}=(0,p.Bd)("chat"),{message:o}=h.A.useApp(),[i,n]=(0,c.useState)(!1),a=(0,c.useRef)(0),r=(0,x.o)(b.e.currentAgentModel),l=(0,x.o)(b.e.currentAgentModelProvider),d=(0,f.U)(r,l),s=e=>{!e.dataTransfer?.items||0===e.dataTransfer.items.length||e.dataTransfer.types.includes("Files")&&(a.current+=1,e.preventDefault(),n(!0))},u=e=>{!e.dataTransfer?.items||0===e.dataTransfer.items.length||e.dataTransfer.types.includes("Files")&&(e.preventDefault(),a.current-=1,0===a.current&&n(!1))},g=async i=>{if(!i.dataTransfer?.items||0===i.dataTransfer.items.length||!i.dataTransfer.types.includes("Files"))return;i.preventDefault(),a.current=0,n(!1);let r=Array.from(i.dataTransfer?.items),l=await F(r);0===l.length||(l.some(e=>e.type.startsWith("image/"))&&!d?o.warning(t("upload.clientMode.visionNotSupported")):e(l))},m=async i=>{if(!i.clipboardData)return;let n=Array.from(i.clipboardData?.items),a=await F(n);0===a.length||(a.some(e=>e.type.startsWith("image/"))&&!d?o.warning(t("upload.clientMode.visionNotSupported")):e(a))};return(0,c.useEffect)(()=>{if(w())return;let e=document.createElement("div");return e.id=y,document.body.append(e),()=>{e.remove()}},[]),(0,c.useEffect)(()=>(window.addEventListener("dragenter",s),window.addEventListener("dragover",k),window.addEventListener("dragleave",u),window.addEventListener("drop",g),window.addEventListener("paste",m),()=>{window.removeEventListener("dragenter",s),window.removeEventListener("dragover",k),window.removeEventListener("dragleave",u),window.removeEventListener("drop",g),window.removeEventListener("paste",m)}),[s,k,u,g,m]),i})(t))return(0,u.createPortal)((0,i.Y)(g.default,{className:o.wrapper,children:(0,i.Y)("div",{className:o.container,children:(0,i.FD)(g.default,{className:o.content,gap:12,children:[(0,i.FD)(m.Flexbox,{className:o.iconGroup,horizontal:!0,children:[(0,i.Y)(g.default,{className:o.icon,height:80,style:{background:(0,s.a)(.32,a.geekblue),transform:"rotateZ(-20deg) translateX(10px)"},width:64,children:(0,i.Y)(n.default,{icon:r.A,size:Y})}),(0,i.Y)(g.default,{className:o.icon,height:80,style:{transform:"translateY(-12px)",zIndex:1},width:64,children:(0,i.Y)(n.default,{icon:l.A,size:Y})}),(0,i.Y)(g.default,{className:o.icon,height:80,style:{background:(0,s.a)(.32,a.geekblue),transform:"rotateZ(20deg) translateX(-10px)"},width:64,children:(0,i.Y)(n.default,{icon:d.A,size:Y})})]}),(0,i.FD)(m.Flexbox,{align:"center",gap:8,style:{textAlign:"center"},children:[(0,i.Y)(m.Flexbox,{className:o.title,children:v(e?"DragUpload.dragFileTitle":"DragUpload.dragTitle")}),(0,i.Y)(m.Flexbox,{className:o.desc,children:v(e?"DragUpload.dragFileDesc":"DragUpload.dragDesc")})]})]})})}),w())})},37546:(e,t,o)=>{o.d(t,{A:()=>l});var i=o(28802),n=o(12389),a=o(11577),r=o(31840);let l=(0,o(83034).memo)(({size:e=20})=>{let t=(0,a.DP)();return(0,i.Y)(n.default,{color:t.geekblue,fill:t.geekblue3,icon:r.A,size:e})})},45140:(e,t,o)=>{o.d(t,{A:()=>k});var i=o(28802),n=o(37412),a=o(3136),r=o(12389),l=o(15447),d=o(64873),s=o(11577),c=o(58751),u=o(85017),p=o(22158),g=o(3779),m=o(83034),h=o(59121),f=o(80457),x=o(73722);let b=(0,s.rU)(({css:e,token:t,isDarkMode:o})=>({errorReason:e`
    padding: 4px;
    border-radius: 4px;

    font-family: monospace;
    font-size: 12px;

    background: ${o?(0,g.e$)(.1,t.colorText):(0,g.a)(.1,t.colorText)};
  `})),y=(0,m.memo)(({chunkCount:e,embeddingStatus:t,embeddingError:o,onClick:l,onErrorClick:d,className:s})=>{let{t:u}=(0,h.Bd)(["components","common"]),{styles:g,cx:m}=b();switch(t){case x.cz.Processing:return(0,i.Y)(f.Flexbox,{horizontal:!0,children:(0,i.Y)(n.A,{styles:{root:{pointerEvents:"none"}},title:u("FileParsingStatus.chunks.embeddingStatus.processing"),children:(0,i.Y)(a.A,{bordered:!1,className:m("chunk-tag",s),color:"processing",icon:(0,i.Y)(r.default,{icon:p.A,spin:!0}),style:{cursor:"pointer"},children:e})})});case x.cz.Error:return(0,i.Y)(n.A,{styles:{root:{maxWidth:340,pointerEvents:"none"}},title:(0,i.FD)(f.Flexbox,{gap:4,children:[u("FileParsingStatus.chunks.embeddingStatus.errorResult"),o&&(0,i.FD)(f.Flexbox,{className:g.errorReason,children:["[",o.name,"]:"," ",o.body&&"string"!=typeof o.body?o.body.detail:o.body]})]}),children:(0,i.FD)(a.A,{bordered:!1,className:s,color:"error",children:[u("FileParsingStatus.chunks.embeddingStatus.error")," ",(0,i.Y)(r.default,{icon:c.A,onClick:()=>{d?.("embedding")},style:{cursor:"pointer"},title:u("retry",{ns:"common"})})]})});case x.cz.Success:return(0,i.Y)(f.Flexbox,{horizontal:!0,children:(0,i.Y)(n.A,{styles:{root:{pointerEvents:"none"}},title:u("FileParsingStatus.chunks.embeddingStatus.success"),children:(0,i.Y)(a.A,{bordered:!1,className:m("chunk-tag",s),color:"purple",icon:(0,i.Y)(r.default,{icon:p.A}),onClick:()=>{l?.(x.cz.Success)},style:{cursor:"pointer"},children:e})})})}}),w=(0,s.rU)(({css:e,token:t,isDarkMode:o})=>({errorReason:e`
    padding: 4px;
    border-radius: 4px;

    font-family: monospace;
    font-size: 12px;

    background: ${o?(0,g.e$)(.1,t.colorText):(0,g.a)(.1,t.colorText)};
  `})),k=(0,m.memo)(({chunkingStatus:e,onEmbeddingClick:t,chunkingError:o,finishEmbedding:s,chunkCount:g,embeddingStatus:m,embeddingError:b,onClick:k,preparingEmbedding:v,onErrorClick:F,className:Y,hideEmbeddingButton:A})=>{let{t:D}=(0,h.Bd)(["components","common"]),{styles:S,cx:C}=w();switch(e){case x.cz.Processing:return(0,i.Y)(n.A,{styles:{root:{pointerEvents:"none"}},title:D("FileParsingStatus.chunks.status.processingTip"),children:(0,i.Y)(a.A,{className:Y,color:"processing",icon:(0,i.Y)(d.A,{status:"processing"}),children:D("FileParsingStatus.chunks.status.processing")})});case x.cz.Error:return(0,i.Y)(n.A,{styles:{root:{maxWidth:340,pointerEvents:"none"}},title:(0,i.FD)(f.Flexbox,{gap:4,children:[D("FileParsingStatus.chunks.status.errorResult"),o&&(0,i.FD)(f.Flexbox,{className:S.errorReason,children:["[",o.name,"]:"," ",o.body&&"string"!=typeof o.body?o.body.detail:o.body]})]}),children:(0,i.FD)(a.A,{bordered:!1,className:Y,color:"error",children:[D("FileParsingStatus.chunks.status.error")," ",(0,i.Y)(r.default,{icon:c.A,onClick:()=>{F?.("chunking")},style:{cursor:"pointer"},title:D("retry",{ns:"common"})})]})});case x.cz.Success:if(!m||v)return(0,i.Y)(f.Flexbox,{horizontal:!0,children:(0,i.Y)(n.A,{styles:{root:{pointerEvents:"none"}},title:D("FileParsingStatus.chunks.embeddingStatus.empty"),children:(0,i.FD)(a.A,{bordered:!1,className:C("chunk-tag",Y),icon:v?(0,i.Y)(r.default,{icon:u.A,spin:!0}):(0,i.Y)(r.default,{icon:p.A}),onClick:()=>{k?.(x.cz.Success)},style:{cursor:"pointer"},children:[g,A||v?null:(0,i.Y)(l.A,{onClick:e=>{e.stopPropagation(),t?.()},style:{fontSize:12,height:"auto",paddingBlock:0,paddingInline:"8px 0"},type:"link",children:D("FileParsingStatus.chunks.embeddings")})]})})});return(0,i.Y)(y,{chunkCount:g,className:Y,embeddingError:b,embeddingStatus:m,finishEmbedding:s,onClick:k,onErrorClick:F})}})},50623:(e,t,o)=>{o.d(t,{m:()=>u});var i=o(58244),n=o(83034),a=o(28802),r=o(12389),l=o(11577),d=o(91951);let s=(0,l.rU)(({css:e,token:t,prefixCls:o,isDarkMode:i,responsive:n})=>({content:e`
      .${o}-modal-content {
        overflow: hidden;

        width: min(90vw, 450px);
        padding: 0;
        border: 1px solid ${t.colorSplit};
        border-radius: ${t.borderRadiusLG}px;

        background: ${i?t.colorBgElevated:t.colorBgLayout};

        ${n.mobile} {
          width: unset;
        }
      }
      .${o}-modal-confirm-title {
        display: block;
        padding-block: 16px 0;
        padding-inline: 16px;
      }
      .${o}-modal-confirm-btns {
        margin-block-start: 0;
        padding: 16px;
      }

      .${o}-modal-confirm-paragraph {
        max-width: 100%;
      }
    `,wrap:e`
      overflow: hidden auto;
    `})),c=(0,a.Y)(r.default,{icon:d.A,size:20}),u=e=>()=>{let{styles:t}=s(),{modal:o}=i.A.useApp(),a=(0,n.useRef)(null);return{open:i=>{let n="function"==typeof e?e(a,i):e;a.current=o.confirm({className:t.content,closable:!0,closeIcon:c,footer:!1,icon:null,wrapClassName:t.wrap,...n})}}}},54078:(e,t,o)=>{o.d(t,{Sz:()=>a,_j:()=>r});var i=o(27697);let n="file",a=()=>{let[e]=(0,i.ok)();return e.get(n)??e.get("files")??void 0},r=()=>{let[e,t]=(0,i.ok)();return o=>{let i=new URLSearchParams(e);i.delete(n),i.delete("files"),o&&i.set(n,o),t(i,{replace:!0})}}},70107:(e,t,o)=>{o.d(t,{P:()=>x});var i=o(28802),n=o(12389),a=o(4755),r=o(59121),l=o(80457),d=o(50623),s=o(43588),c=o(15447),u=o(69033),p=o(40681),g=o(83034),m=o(20577);let h=(0,g.memo)(({onClose:e,onSuccess:t})=>{let{t:o}=(0,r.Bd)("knowledgeBase"),[n,a]=(0,g.useState)(!1),l=(0,m.O)(e=>e.createNewKnowledgeBase),d=async o=>{a(!0);try{let i=await l(o);a(!1),t?(t(i),e?.()):window.location.href=`/knowledge/bases/${i}`}catch(e){console.error(e),a(!1)}};return(0,i.Y)(s.Ay,{footer:(0,i.Y)(c.A,{block:!0,htmlType:"submit",loading:n,type:"primary",children:o("createNew.confirm")}),gap:16,items:[{children:(0,i.Y)(u.A,{autoFocus:!0,placeholder:o("createNew.name.placeholder")}),label:o("createNew.name.placeholder"),name:"name",rules:[{message:o("createNew.name.required"),required:!0}]},{children:(0,i.Y)(p.A,{placeholder:o("createNew.description.placeholder"),style:{minHeight:120}}),label:o("createNew.description.placeholder"),name:"description"}],itemsType:"flat",layout:"vertical",onFinish:d})}),f=()=>{let{t:e}=(0,r.Bd)("knowledgeBase");return(0,i.FD)(l.Flexbox,{gap:8,horizontal:!0,children:[(0,i.Y)(n.default,{icon:a.A}),e("createNew.title")]})},x=(0,d.m)((e,t)=>({content:(0,i.Y)(l.Flexbox,{paddingInline:16,style:{paddingBottom:16},children:(0,i.Y)(h,{onClose:()=>{e.current?.destroy()},onSuccess:t?.onSuccess})}),focusTriggerAfterClose:!0,footer:!1,title:(0,i.Y)(f,{})}))},76927:(e,t,o)=>{o.d(t,{U:()=>a});var i=o(94147),n=o(81196);let a=(e,t)=>(0,i.d)(n.g.isModelSupportVision(e,t))},81040:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var i=o(28802),n=o(94424),a=o(11577),r=o(83034),l=o(51717),d=o(15447),s=o(51997),c=o.n(s),u=o(59121),p=o(80457),g=o(20480),m=o(45628),h=o(27809);let f=(0,a.rU)(({css:e,token:t})=>({page:e`
    width: 100%;
    margin: 12px;
    padding: 24px;
    border-radius: 4px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowTertiary};
  `})),x=({fileName:e,document:t})=>{let{styles:o}=f(),{t:n}=(0,u.Bd)("file"),[a,s]=(0,r.useState)(!1);return(0,i.Y)(p.Flexbox,{className:o.page,id:"txt-renderer",children:(0,i.Y)(g.default,{height:"100%",children:(0,i.FD)(p.Flexbox,{align:"center",gap:12,children:[(0,i.Y)(l.A,{emoji:"\uD83D\uDC40",size:64}),(0,i.Y)(p.Flexbox,{style:{textAlign:"center"},children:(0,i.FD)(u.x6,{i18nKey:"preview.unsupportedFileAndContact",ns:"file",children:["此文件格式暂不支持在线预览，如有预览诉求，欢迎",(0,i.Y)(c(),{"aria-label":"todo",href:m.eQ,target:"_blank",children:"反馈给我们"})]})}),(0,i.Y)(d.A,{loading:a,onClick:async()=>{t&&(s(!0),await (0,h.P)(t.uri,e),s(!1))},children:n("preview.downloadFile")})]})})})},b=({mainState:{currentDocument:e}})=>{let{uri:t,fileName:o}=e||{};return(0,i.Y)(g.default,{height:"100%",width:"100%",children:(0,i.Y)("img",{alt:o,height:"100%",src:t,style:{objectFit:"contain",overflow:"hidden"},width:"100%"})})};b.fileTypes=["jpg","jpeg","image/jpg","image/jpeg","png","image/png","webp","image/webp","gif","image/gif","bmp","image/bmp"],b.weight=0;let y=(0,a.AH)`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`,w=(0,a.AH)`
  position: absolute;
  inset-block: -1px -1px;
  inset-inline-start: -1px;

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border: 0;
`,k=({mainState:{currentDocument:e}})=>e?(0,i.Y)(p.Flexbox,{className:(0,a.cx)(y),height:"100%",id:"msdoc-renderer",width:"100%",children:(0,i.Y)("iframe",{className:(0,a.cx)(w),id:"msdoc-iframe",src:`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.uri)}`,title:"msdoc-iframe"})}):null;k.fileTypes=["odt","application/vnd.oasis.opendocument.text","doc","application/msword","docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/octet-stream","xls","application/vnd.ms-excel","xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","ppt","application/vnd.ms-powerpoint","pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],k.weight=0,k.fileLoader=({fileLoaderComplete:e})=>e();var v=o(91888),F=o(27384);let Y=(0,a.rU)(({css:e,token:t})=>({page:e`
    width: 100%;
    padding: 24px;
    border-radius: 4px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowTertiary};
  `})),A=({mainState:{currentDocument:e}})=>{let{styles:t}=Y();return(0,i.Y)(p.Flexbox,{className:t.page,id:"txt-renderer",children:e?.fileData?(0,i.Y)(v.A,{language:"txt",showLanguage:!1,style:{height:"100%"},variant:"borderless",children:e?.fileData}):(0,i.Y)(g.default,{height:"100%",children:(0,i.Y)(F.default,{})})})};A.fileTypes=["txt","text/plain"],A.weight=0,A.fileLoader=n.xl;let D=[A,b,k];var S=o(35987),C=o(70474),B=o(86393);o(66511),o(77021);var N=o(77605),T=o(56003);let $=({coordinates:e,highlight:t})=>{let{points:o}=e,[n,a,r,l]=o,d=Math.min(n[0],a[0],r[0],l[0]),s=Math.min(n[1],a[1],r[1],l[1]),c=Math.max(n[0],a[0],r[0],l[0])-d,u=Math.max(n[1],a[1],r[1],l[1])-s;return(0,i.Y)("rect",{fill:t?"rgba(255, 255, 0, 0.5)":"rgba(255, 255, 0, 0.3)",height:u,stroke:"rgba(255, 255, 0, 0.7)",strokeWidth:"1",width:c,x:d,y:s})},E=(0,r.memo)(({dataSource:e,pageNumber:t,width:o})=>{let n=e.filter(e=>e.pageNumber&&e.pageNumber===t).filter(Boolean),a=(0,T.x)(e=>e.highlightChunkIds);if(!(n.length>0))return null;let r=n[0].metadata;if(!r.coordinates)return;let{layout_width:l,layout_height:d}=r.coordinates,s=r.coordinates.layout_height*(o/r.coordinates.layout_width);return(0,i.FD)("svg",{height:s,style:{left:0,position:"absolute",top:0,zIndex:100},viewBox:`0 0 ${l} ${d}`,width:o,children:[n.map((e,t)=>e.metadata&&(0,i.Y)($,{coordinates:e.metadata.coordinates,highlight:a.includes(e.id)},t)),"s"]})}),z=(0,a.rU)(({css:e,token:t})=>({container:e`
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
  `}));S.EA.workerSrc=`https://registry.npmmirror.com/pdfjs-dist/${S.rE}/files/build/pdf.worker.min.mjs`;let L={cMapUrl:`https://registry.npmmirror.com/pdfjs-dist/${S.rE}/files/cmaps/`,standardFontDataUrl:`https://registry.npmmirror.com/pdfjs-dist/${S.rE}/files/standard_fonts/`},P=(0,r.memo)(({url:e,fileId:t})=>{let{styles:o}=z(),[n,a]=(0,r.useState)(0),[l,d]=(0,r.useState)(null),[s,c]=(0,r.useState)(),[u,g]=(0,r.useState)(!1),m=(0,r.useCallback)(e=>{let[t]=e;t&&c(t.contentRect.width)},[]);(0,r.useEffect)(()=>{if(!l||!("ResizeObserver"in window))return;let e=new ResizeObserver(m);return e.observe(l,void 0),()=>{e.disconnect()}},[l,m,void 0]);let{data:h}=N.Qm.chunk.getChunksByFileId.useInfiniteQuery({id:t},{getNextPageParam:e=>e.nextCursor}),f=h?.pages.flatMap(e=>e.items)||[];return(0,i.Y)(p.Flexbox,{className:o.container,children:(0,i.Y)(p.Flexbox,{align:"center",className:o.documentContainer,padding:24,ref:d,style:{height:u?void 0:"100%"},children:(0,i.Y)(C.A,{className:o.document,file:e,onLoadSuccess:({numPages:e})=>{a(e),g(!0)},options:L,children:Array.from({length:n},(e,t)=>{let n=s?Math.min(s,1200):1200;return(0,i.Y)(r.Fragment,{children:(0,i.Y)(B.A,{className:o.page,pageNumber:t+1,width:n,children:(0,i.Y)(E,{dataSource:f,pageNumber:t+1,width:n})})},`page_${t+1}`)})})})})}),I=(0,a.AH)`
  background: transparent !important;

  #proxy-renderer {
    height: 100%;
  }
`,M=(0,r.memo)(({id:e,style:t,fileType:o,url:r,name:l})=>o?.toLowerCase()==="pdf"||l?.toLowerCase().endsWith(".pdf")?(0,i.Y)(P,{fileId:e,url:r}):(0,i.Y)(n.Ay,{className:(0,a.cx)(I),config:{header:{disableHeader:!0},noRenderer:{overrideComponent:x}},documents:[{fileName:l,fileType:o,uri:r}],pluginRenderers:D,style:t}))},83838:(e,t,o)=>{o.d(t,{A:()=>d});var i=o(28802),n=o(5938),a=o(15786),r=o(83034);let l={csv:"#43aa55",doc:"#2b56b1",docx:"#2b56b1",pdf:"#de2429",ppt:"#c43e1b",pptx:"#c43e1b",text:"#607180",txt:"#607180",xls:"#2f6d3f",xlsx:"#2f6d3f"},d=(0,r.memo)(({fileName:e,size:t,variant:o="raw",isDirectory:r})=>{if(r)return(0,i.Y)(n.A,{color:"gold",size:t,type:"folder",variant:"color"});if(Object.keys(l).some(t=>e?.toLowerCase().endsWith(`.${t}`))){let o=e.split(".").pop()?.toLowerCase();return(0,i.Y)(n.A,{color:l[o],filetype:o?.toUpperCase(),size:t,type:"file"})}return(0,i.Y)(a.A,{filename:e,size:t,type:"file",variant:o})})},86074:(e,t,o)=>{o.d(t,{W:()=>a});var i=o(27697),n=o(35392);let a=()=>{let[e,t]=(0,i.ok)(),{id:o}=(0,i.g)(),a=o?n._K.Pages:n._K.Home;return[e.get("category")??a,e=>{t(t=>{let o=new URLSearchParams(t);return e===n._K.Home?o.delete("category"):o.set("category",e),o},{replace:!0})}]}},92879:(e,t,o)=>{o.d(t,{A:()=>oT});var i=o(28802),n=o(75431),a=o(33375),r=o(83034),l=o(80457),d=o(35392),s=o(44452),c=o(9274),u=o(11577),p=o(90897),g=o(59121),m=o(20480),h=o(82700),f=o(56003),x=o(69515),b=o(66783),y=o(92760),w=o(17599),k=o(99849),v=o(37835),F=o(80083),Y=o(33740),A=o(13004),D=o(37408),S=o(24757),C=o(20406),B=o(14373),N=o(12389),T=o(38153),$=o(15447),E=o(65018),z=o(58244),L=o(2644),P=o.n(L),I=o(11162),M=o.n(I),K=o(23390),U=o(20966),R=o(25777),O=o(85017),j=o(575),W=o(48178),_=o(16251),q=o(78422),H=o(25073),G=o(29900),X=o(22032),Q=o(5930),V=o(76694),Z=o(38759),J=o(61520);P().extend(M());let ee=(0,a.default)(()=>Promise.all([o.e(18733),o.e(37326),o.e(88440),o.e(67072),o.e(65277),o.e(13514)]).then(o.bind(o,65277)),{loadableGenerated:{webpack:()=>[65277]},ssr:!1}),et=(0,r.memo)(({documentId:e,knowledgeBaseId:t,onDocumentIdChange:o,onSave:n,onDelete:a})=>{let d,{t:s}=(0,g.Bd)(["file","common"]),p=(0,u.DP)(),m=(0,Q.o)(V.c.currentLanguage),{message:h,modal:L}=z.A.useApp(),I=(0,Z.k)(J.f.displayUserName),M=(0,C.h)(),et=(0,f.x)((d=e,e=>{if(!d)return;let t=e.localDocumentMap.get(d),o=e.documents.find(e=>e.id===d);return t&&o?new Date(t.updatedAt)>=new Date(o.updatedAt)?t:o:t||o})),eo=et?.title,ei=et?.metadata?.emoji,[en,ea]=(0,r.useState)("idle"),[er,el]=(0,r.useState)(""),[ed,es]=(0,r.useState)(void 0),[ec,eu]=(0,r.useState)(!1),[ep,eg]=(0,r.useState)(!1),[em,eh]=(0,r.useState)(e),[ef,ex]=(0,r.useState)(null),[eb,ey]=(0,r.useState)(0),ew=(0,f.x)(e=>e.refreshFileList),ek=(0,f.x)(e=>e.updateDocumentOptimistically),ev=(0,f.x)(e=>e.replaceTempDocumentWithReal),eF=(0,f.x)(e=>e.removeDocument),eY=(0,r.useRef)(!1),eA=(0,r.useCallback)(e=>e.trim().split(/\s+/).filter(Boolean).length,[]),eD=(0,r.useCallback)(e=>e&&0!==e.length?e.map(e=>e.pageContent).join("\n\n"):null,[]);(0,r.useEffect)(()=>{void 0!==eo&&eo!==er&&el(eo),ei!==ed&&es(ei)},[eo,ei]),(0,r.useEffect)(()=>{if(eY.current=!0,e&&M){if(eg(!1),es(ei),ex(null),et&&e.startsWith("temp-document-")){console.log("[DocumentEditor] Using optimistic document from currentDocument"),el(et.title||"Untitled Document"),M.cleanDocument(),ey(0),setTimeout(()=>{eY.current=!1},100);return}if(et?.editorData&&Object.keys(et.editorData).length>0){el(eo||""),eY.current=!0,console.log("[DocumentEditor] Setting editor data",et.editorData),M.setDocument("json",JSON.stringify(et.editorData)),ey(eA(et.content||"")),setTimeout(()=>{eY.current=!1},100);return}if(et?.pages&&M){let e=eD(et.pages);if(e){console.log("[DocumentEditor] Using pages content as fallback"),el(eo||""),eY.current=!0,M.setDocument("markdown",e),ey(eA(e)),setTimeout(()=>{eY.current=!1},100);return}}else{M.cleanDocument(),ey(0),eY.current=!1;return}}},[e,et,eo,ei,M,eA,eD]);let eS=(0,r.useCallback)(async()=>{if(!M)return;let e=M.getDocument("json"),i=M.getDocument("markdown")||"";if(!i||""===i.trim())return;let a=M.getRootElement(),r=a?.contains(document.activeElement)??!1;ea("saving");try{if(em&&!em.startsWith("temp-document-"))await ek(em,{content:i,editorData:structuredClone(e),metadata:ed?{emoji:ed}:{emoji:void 0},title:er,updatedAt:new Date}),r&&setTimeout(()=>{M.focus()},0);else{let n=Date.now(),a=new Date(n).toLocaleString("en-US",{day:"2-digit",hour:"2-digit",minute:"2-digit",month:"short",year:"numeric"}),l=er||`Document - ${a}`,d=await X.W.createDocument({content:i,editorData:JSON.stringify(e),fileType:"custom/document",knowledgeBaseId:t,metadata:ed?{createdAt:n,emoji:ed}:{createdAt:n},title:l}),s={content:i,createdAt:new Date(n),editorData:structuredClone(e)||null,fileType:"custom/document",filename:l,id:d.id,metadata:ed?{createdAt:n,emoji:ed}:{createdAt:n},source:"document",sourceType:x.h.EDITOR,title:l,totalCharCount:i.length,totalLineCount:0,updatedAt:new Date(n)};em?.startsWith("temp-document-")&&ev(em,s),eh(d.id),o?.(d.id),ew(),r&&setTimeout(()=>{M.focus()},0)}ea("saved"),ex(new Date),n?.()}catch{ea("idle")}},[M,em,er,ed,t,ew,ek,n,o,ev]),eC=(0,r.useCallback)(()=>{if(eY.current)return void console.log("[DocumentEditor] Skipping onChange during initial load");if(console.log("[DocumentEditor] Content changed, triggering auto-save"),M)try{let e=M.getDocument("text")||"";ey(eA(e))}catch(e){console.error("Failed to update word count:",e)}eS()},[eS,M,eA]),{run:eB}=(0,E.A)(eC,{wait:3e3}),{run:eN}=(0,E.A)(eS,{wait:3e3});(0,r.useEffect)(()=>{eh(e)},[e]),(0,r.useEffect)(()=>()=>{M?.cleanDocument()},[M]),(0,r.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"s"===e.key&&(e.preventDefault(),h.info(s("documentEditor.autoSaveMessage")))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[s]);let eT=(0,r.useCallback)(async()=>{em&&L.confirm({cancelText:s("cancel",{ns:"common"}),content:s("documentEditor.deleteConfirm.content"),okButtonProps:{danger:!0},okText:s("delete",{ns:"common"}),onOk:async()=>{try{await eF(em),h.success(s("documentEditor.deleteSuccess")),a?.()}catch(e){console.error("Failed to delete document:",e),h.error(s("documentEditor.deleteError"))}},title:s("documentEditor.deleteConfirm.title")})},[em,L,eF,h,a,s]),e$=(0,r.useMemo)(()=>[{icon:(0,i.Y)(N.default,{icon:K.A}),key:"copy-link",label:s("documentEditor.menu.copyLink"),onClick:()=>{if(em){let e=`${window.location.origin}${window.location.pathname}`;navigator.clipboard.writeText(e),h.success(s("documentEditor.linkCopied"))}}},{danger:!0,icon:(0,i.Y)(N.default,{icon:U.A}),key:"delete",label:s("delete",{ns:"common"}),onClick:eT},{type:"divider"},{disabled:!0,key:"document-info",label:(0,i.FD)("div",{style:{color:p.colorTextTertiary,fontSize:12,lineHeight:1.6},children:[(0,i.Y)("div",{children:s("documentEditor.wordCount",{wordCount:eb})}),(0,i.Y)("div",{children:ef?s("documentEditor.editedAt",{time:P()(ef).format("MMMM D, YYYY [at] h:mm A")}):""})]})}],[p,eb,I,ef,eT,em,h,s]);return(0,i.FD)(l.Flexbox,{height:"100%",style:{background:p.colorBgContainer},children:[(0,i.FD)(l.Flexbox,{align:"center",direction:"horizontal",gap:8,paddingBlock:8,paddingInline:16,style:{background:p.colorBgContainer},children:[ed?(0,i.Y)("span",{style:{fontSize:20,lineHeight:1},children:ed}):(0,i.Y)(N.default,{icon:R.A,size:20,style:{color:p.colorTextSecondary}}),(0,i.Y)(l.Flexbox,{flex:1,style:{color:p.colorText,fontSize:14,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:er||s("documentEditor.titlePlaceholder")}),"saving"===en&&(0,i.Y)(l.Flexbox,{children:(0,i.Y)(N.default,{icon:O.A,spin:!0})}),ef&&(0,i.Y)("span",{style:{color:p.colorTextTertiary,fontSize:12,whiteSpace:"nowrap"},children:s("documentEditor.editedAt",{time:P()(ef).fromNow()})}),(0,i.Y)(T.A,{menu:{items:e$,style:{minWidth:200}},placement:"bottomRight",trigger:["click"],children:(0,i.Y)(c.A,{icon:j.A,size:15.5,style:{color:p.colorText}})})]}),(0,i.Y)(l.Flexbox,{flex:1,style:{overflowY:"auto"},children:(0,i.FD)(l.Flexbox,{paddingBlock:36,style:{margin:"0 auto",maxWidth:900,paddingLeft:32,paddingRight:48,width:"100%"},children:[(0,i.FD)(l.Flexbox,{onMouseEnter:()=>eu(!0),onMouseLeave:()=>eu(!1),style:{marginBottom:24},children:[(ed||ep)&&(0,i.Y)(l.Flexbox,{style:{marginBottom:4},children:(0,i.Y)(ee,{allowDelete:!0,locale:m,onChange:e=>{es(e),eg(!1),eN()},onDelete:()=>{es(void 0),eg(!1),eN()},onOpenChange:e=>{eg(e)},open:ep,size:80,style:{fontSize:80,transform:"translateX(-6px)"},title:s("documentEditor.chooseIcon"),value:ed})}),(0,i.Y)(l.Flexbox,{style:{marginBottom:12},children:(0,i.Y)($.A,{icon:(0,i.Y)(N.default,{icon:W.A}),onClick:()=>{es("\uD83D\uDCC4"),eg(!0)},size:"small",style:{opacity:!ec||ed||ep?0:1,transform:"translateX(-6px)",transition:`opacity ${p.motionDurationMid} ${p.motionEaseInOut}`,width:"fit-content"},type:"text",children:s("documentEditor.chooseIcon")})}),(0,i.Y)(l.Flexbox,{align:"center",direction:"horizontal",gap:8,children:(0,i.Y)("input",{onChange:e=>{el(e.target.value),eN()},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),eS().then(()=>{M?.focus()}))},placeholder:s("documentEditor.titlePlaceholder"),style:{background:"transparent",border:"none",color:p.colorText,flex:1,fontSize:40,fontWeight:700,lineHeight:1.2,outline:"none"},value:er})})]}),(0,i.Y)("div",{onClick:()=>M?.focus(),style:{cursor:"text",flex:1,minHeight:"400px"},children:(0,i.Y)(B.A,{content:"",editor:M,onTextChange:eB,placeholder:s("documentEditor.editorPlaceholder"),plugins:[b.A,y.A,w.A,k.A,v.A,F.l,Y.b,A.A],slashOption:{items:[{icon:_.A,key:"h1",label:"Heading 1",onSelect:e=>{e.dispatchCommand(D.rI,{tag:"h1"})}},{icon:q.A,key:"h2",label:"Heading 2",onSelect:e=>{e.dispatchCommand(D.rI,{tag:"h2"})}},{icon:H.A,key:"h3",label:"Heading 3",onSelect:e=>{e.dispatchCommand(D.rI,{tag:"h3"})}},{icon:G.A,key:"table",label:"Table",onSelect:e=>{e.dispatchCommand(S.Ng,{columns:"3",rows:"3"})}}]},style:{minHeight:"400px",paddingBottom:"200px"},type:"text"})})]})})]})});var eo=o(5938),ei=o(49615),en=o(5448);let ea=(0,u.rU)(({css:e,token:t})=>({actionTitle:e`
    margin-block-start: 12px;
    font-size: 16px;
    color: ${t.colorTextSecondary};
  `,card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: ${t.borderRadiusLG}px;

    font-weight: 500;
    text-align: center;

    background: ${t.colorFillTertiary};
    box-shadow: 0 0 0 1px ${t.colorFillTertiary} inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,glow:e`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `,icon:e`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `})),er=(0,r.memo)(({knowledgeBaseId:e,onCreateNewNote:t,onNoteCreated:o})=>{let{t:a}=(0,g.Bd)(["file","common"]),d=(0,u.DP)(),{styles:s}=ea(),[c,h]=(0,r.useState)(!1),x=(0,f.x)(e=>e.createDocument),b=async t=>{try{h(!0);let i=await t.text(),n=await x({content:i,knowledgeBaseId:e,title:t.name.replace(/\.md$|\.markdown$/i,"")});o?.(n.id)}catch(e){console.error("Failed to upload markdown:",e)}finally{h(!1)}return!1};return(0,i.FD)(m.default,{gap:24,height:"100%",style:{paddingBottom:100},width:"100%",children:[(0,i.FD)(l.Flexbox,{justify:"center",style:{textAlign:"center"},children:[(0,i.Y)(n.A,{as:"h4",children:a("documentEditor.empty.title")}),(0,i.Y)(n.A,{type:"secondary",children:a("or",{ns:"common"})})]}),(0,i.FD)(l.Flexbox,{gap:12,horizontal:!0,children:[(0,i.FD)(l.Flexbox,{className:s.card,onClick:t,padding:16,children:[(0,i.Y)("span",{className:s.actionTitle,children:a("documentEditor.empty.createNewDocument")}),(0,i.Y)("div",{className:s.glow,style:{background:d.purple}}),(0,i.Y)(eo.A,{className:s.icon,color:d.purple,icon:(0,i.Y)(N.default,{color:"#fff",icon:p.A}),size:80,type:"file"})]}),(0,i.Y)(ei.A,{accept:".md,.markdown",beforeUpload:b,disabled:c,multiple:!1,showUploadList:!1,children:(0,i.FD)(l.Flexbox,{className:s.card,padding:16,style:{opacity:c?.5:1},children:[(0,i.Y)("span",{className:s.actionTitle,children:c?"Uploading...":a("documentEditor.empty.uploadMarkdown")}),(0,i.Y)("div",{className:s.glow,style:{background:d.gold}}),(0,i.Y)(eo.A,{className:s.icon,color:d.gold,icon:(0,i.Y)(N.default,{color:"#fff",icon:en.A}),size:80,type:"file"})]})})]})]})});var el=o(13035),ed=o(57696),es=o(89739),ec=o(72573);let eu=(0,r.memo)(({documentId:e,documentContent:t,onDelete:o,onRename:n})=>{let{t:a}=(0,g.Bd)(["common","file"]),{message:d,modal:s}=z.A.useApp(),[u,p]=(0,r.useState)(!1),m=(0,f.x)(e=>e.removeDocument),h=(0,f.x)(e=>e.duplicateDocument),x=async()=>{if(t)try{await navigator.clipboard.writeText(t)}catch(e){console.error("Failed to copy document:",e)}},b=async()=>{p(!0);try{await h(e)}catch(e){console.error("Failed to duplicate document:",e)}finally{p(!1)}};return(0,i.Y)(l.Flexbox,{align:"center",horizontal:!0,onClick:e=>e.stopPropagation(),children:(0,i.Y)(T.A,{menu:{items:[{icon:(0,i.Y)(N.default,{icon:el.A}),key:"rename",label:a("rename"),onClick:()=>n?.()},{icon:(0,i.Y)(N.default,{icon:ed.A}),key:"copy",label:a("documentList.copyContent",{ns:"file"}),onClick:x},{icon:(0,i.Y)(N.default,{icon:es.A}),key:"duplicate",label:a("documentList.duplicate",{ns:"file"}),onClick:b},{danger:!0,icon:(0,i.Y)(N.default,{icon:U.A}),key:"delete",label:a("delete"),onClick:()=>{s.confirm({cancelText:a("cancel"),content:a("documentEditor.deleteConfirm.content",{ns:"file"}),okButtonProps:{danger:!0},okText:a("delete"),onOk:async()=>{p(!0);try{await m(e),d.success(a("documentEditor.deleteSuccess",{ns:"file"})),o?.()}catch(e){console.error("Failed to delete document:",e),d.error(a("documentEditor.deleteError",{ns:"file"}))}finally{p(!1)}},title:a("documentEditor.deleteConfirm.title",{ns:"file"})})}}]},placement:"bottomRight",trigger:["click"],children:(0,i.Y)(c.A,{icon:ec.A,loading:u,size:"small",variant:"borderless"})})})});var ep=o(53809),eg=o(67693);let em=(0,a.default)(()=>Promise.all([o.e(18733),o.e(37326),o.e(88440),o.e(67072),o.e(65277),o.e(13514)]).then(o.bind(o,65277)),{loadableGenerated:{webpack:()=>[65277]},ssr:!1}),eh=(0,u.rU)(({css:e})=>({input:e`
    flex: 1;
  `,inputGroup:e`
    display: flex;
    gap: 8px;
    align-items: center;
  `,popoverContent:e`
    width: 320px;
  `})),ef=(0,r.memo)(({children:e,currentTitle:t,currentEmoji:o,onConfirm:n,open:a,onOpenChange:l})=>{let{t:d}=(0,g.Bd)(["file","editor"]),{styles:s}=eh(),c=(0,Q.o)(V.c.currentLanguage),[u,p]=(0,r.useState)(t),[m,h]=(0,r.useState)(o),[f,x]=(0,r.useState)(!1),b=(0,r.useRef)(null),y=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(a&&b.current?.input){let e=setTimeout(()=>{b.current.input.select()},150);return()=>clearTimeout(e)}},[a]);let w=(0,i.Y)("div",{className:s.popoverContent,children:(0,i.FD)("div",{className:s.inputGroup,children:[(0,i.Y)(em,{allowDelete:!0,locale:c,onChange:e=>{h(e),x(!1),y.current=!1,n(u,e),setTimeout(()=>b.current?.focus(),100)},onDelete:()=>{h(void 0),x(!1),y.current=!1,n(u,void 0),setTimeout(()=>b.current?.focus(),100)},onOpenChange:e=>{x(e),y.current=e},open:f,size:32,style:{fontSize:32},title:d("documentEditor.chooseIcon"),value:m}),(0,i.Y)(ep.A,{autoFocus:!0,className:s.input,onBlur:()=>{setTimeout(()=>{y.current||(u.trim()&&u.trim()!==t&&n(u.trim(),m),l(!1))},150)},onChange:e=>p(e.target.value),onKeyDown:e=>{"Enter"===e.key?(u.trim()&&u.trim()!==t&&n(u.trim(),m),l(!1)):"Escape"===e.key&&l(!1)},placeholder:d("documentEditor.titlePlaceholder"),ref:b,value:u})]})});return(0,i.Y)(eg.A,{content:w,onOpenChange:e=>{e&&(p(t),h(o),x(!1)),l(e)},open:a,placement:"bottom",trigger:[],children:e})}),ex=(0,u.rU)(({css:e,token:t})=>({documentActions:e`
    opacity: 0;
    transition: opacity ${t.motionDurationMid};
  `,documentCard:e`
    cursor: pointer;
    user-select: none;

    position: relative;

    display: flex;
    gap: 12px;
    align-items: center;

    min-height: 36px;
    margin-block: 4px;
    margin-inline: 8px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius}px;

    color: ${t.colorTextSecondary};

    background: transparent;

    transition: all ${t.motionDurationMid};

    &:hover {
      background: ${t.colorFillTertiary};

      .document-actions {
        opacity: 1;
      }
    }

    &.selected {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,documentContent:e`
    display: flex;
    flex: 1;
    gap: 12px;
    align-items: center;

    min-width: 0;
  `,documentTitle:e`
    overflow: hidden;
    flex: 1;

    min-width: 0;

    font-size: 14px;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,emoji:e`
    font-size: 16px;
    line-height: 1;
  `,icon:e`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${t.colorTextSecondary};
  `})),eb=(0,r.memo)(({document:e,isRenaming:t,isSelected:o,onDelete:n,onRenameConfirm:a,onRenameOpenChange:r,onSelect:l,untitledText:d})=>{let{styles:s,cx:c}=ex(),u=e.title||d,p=e.metadata?.emoji;return(0,i.FD)("div",{className:c(s.documentCard,o&&"selected"),onClick:()=>!t&&l(e.id),children:[(0,i.Y)(ef,{currentEmoji:p,currentTitle:u,onConfirm:(t,o)=>{a(e.id,t,o)},onOpenChange:t=>r(e.id,t),open:t,children:(0,i.FD)("div",{className:s.documentContent,children:[p?(0,i.Y)("span",{className:s.emoji,children:p}):(0,i.Y)(N.default,{className:s.icon,icon:R.A,size:16}),(0,i.Y)("div",{className:s.documentTitle,children:u})]})}),(0,i.Y)("div",{className:c(s.documentActions,"document-actions"),children:(0,i.Y)(eu,{documentContent:e.content||void 0,documentId:e.id,onDelete:n,onRename:()=>r(e.id,!0)})})]})});var ey=o(59202);let ew=(0,u.rU)(({css:e,token:t})=>({skeletonCard:e`
    display: flex;
    gap: 12px;
    align-items: center;

    min-height: 36px;
    margin-block: 4px;
    margin-inline: 8px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius}px;

    background: transparent;
  `})),ek=()=>{let{styles:e}=ew();return(0,i.Y)(l.Flexbox,{children:Array.from({length:8}).map((t,o)=>(0,i.FD)("div",{className:e.skeletonCard,children:[(0,i.Y)(ey.A.Avatar,{active:!0,shape:"square",size:16}),(0,i.Y)(ey.A.Input,{active:!0,size:"small",style:{height:20,minWidth:120,width:120}})]},o))})},ev=(0,u.rU)(({css:e,token:t})=>({container:e`
    display: flex;
    width: 100%;
    height: 100%;
  `,documentList:e`
    overflow-y: auto;
    flex: 1;
    padding-block: 4px;
  `,editorPanel:e`
    overflow: hidden;
    flex: 1;
    background: ${t.colorBgContainer};
  `,header:e`
    display: flex;
    gap: 8px;
    align-items: center;

    padding-block: ${t.paddingXXS}px;
    padding-inline: ${t.paddingXS}px;
    border-block-end: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorBgContainer};
  `,listPanel:e`
    display: flex;
    flex-direction: column;

    width: 280px;
    min-width: 280px;
    border-inline-end: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorBgContainer};
  `})),eF=e=>{let t=e?`/knowledge/${e}`:"/knowledge";window.history.replaceState({},"",t)},eY=(0,r.memo)(({knowledgeBaseId:e,documentId:t})=>{let{t:o}=(0,g.Bd)("file"),{styles:a}=ev(),[l,d]=(0,r.useState)(null),[u,b]=(0,r.useState)(!1),[y,w]=(0,r.useState)(""),[k,v]=(0,r.useState)(null),F=(0,f.x)(e=>e.fetchDocuments),Y=(0,f.x)(e=>e.getOptimisticDocuments),A=(0,f.x)(e=>e.isDocumentListLoading),D=(0,f.x)(e=>e.createDocument),S=(0,f.x)(e=>e.createOptimisticDocument),C=(0,f.x)(e=>e.replaceTempDocumentWithReal),B=(0,f.x)(e=>e.updateDocumentOptimistically);(0,f.x)(e=>e.localDocumentMap),(0,f.x)(e=>e.documents),(0,r.useEffect)(()=>{F()},[F]),(0,r.useEffect)(()=>{t&&(d(t),b(!1))},[t]);let N=Y(),T=(0,r.useMemo)(()=>{let e=N;if(y.trim()){let t=y.toLowerCase();e=N.filter(e=>{let o=e.content?.toLowerCase()||"",i=e.title?.toLowerCase()||"";return o.includes(t)||i.includes(t)})}return e.sort((e,t)=>{let o=e.createdAt?new Date(e.createdAt).getTime():0;return(t.createdAt?new Date(t.createdAt).getTime():0)-o})},[N,y]),$=e=>{l===e?(d(null),eF(null)):(d(e),eF(e)),b(!1)},E=async()=>{let t=o("documentList.untitled"),i=S(t);d(i),b(!0);try{let o=await D({content:"",knowledgeBaseId:e,title:t}),n={content:o.content||"",createdAt:o.createdAt?new Date(o.createdAt):new Date,editorData:"string"==typeof o.editorData?JSON.parse(o.editorData):o.editorData||null,fileType:"custom/document",filename:o.title||t,id:o.id,metadata:o.metadata||{},source:"document",sourceType:x.h.EDITOR,title:o.title||t,totalCharCount:o.content?.length||0,totalLineCount:0,updatedAt:o.updatedAt?new Date(o.updatedAt):new Date};C(i,n),d(o.id),b(!1),eF(o.id)}catch(e){console.error("Failed to create document:",e),f.x.getState().removeTempDocument(i),d(null),b(!1)}},z=(e,t)=>{v(t?e:null)},L=async(e,t,o)=>{try{await B(e,{metadata:{emoji:o},title:t})}catch(e){console.error("Failed to rename document:",e)}finally{v(null)}};return(0,i.FD)("div",{className:a.container,children:[(0,i.FD)("div",{className:a.listPanel,children:[(0,i.FD)("div",{className:a.header,children:[(0,i.Y)(s.A,{allowClear:!0,onChange:e=>w(e.target.value),placeholder:o("searchPagePlaceholder"),style:{flex:1},value:y,variant:"borderless"}),(0,i.Y)(c.A,{icon:p.A,onClick:E,title:o("header.newPageButton")})]}),(0,i.Y)("div",{className:a.documentList,children:A?(0,i.Y)(ek,{}):0===T.length?(0,i.Y)("div",{style:{color:"var(--lobe-text-secondary)",padding:24,textAlign:"center"},children:y.trim()?o("documentList.noResults"):o("documentList.empty")}):(0,i.Y)(h.aY,{components:{Footer:()=>(0,i.Y)(m.default,{style:{paddingBlock:16},children:(0,i.Y)(n.A,{style:{fontSize:12},type:"secondary",children:o("documentList.pageCount",{count:T.length})})})},data:T,itemContent:(e,t)=>{let n=l===t.id,a=k===t.id;return(0,i.Y)(eb,{document:t,isRenaming:a,isSelected:n,onDelete:()=>{l===t.id&&(d(null),b(!1),eF(null))},onRenameConfirm:L,onRenameOpenChange:z,onSelect:$,untitledText:o("documentList.untitled")},t.id)},style:{height:"100%"}})})]}),(0,i.Y)("div",{className:a.editorPanel,children:l||u?(0,i.Y)(et,{documentId:l||void 0,knowledgeBaseId:e,onDelete:()=>{d(null),b(!1),eF(null)},onDocumentIdChange:e=>{d(e),b(!1),eF(e)}}):(0,i.Y)(er,{knowledgeBaseId:e,onCreateNewNote:E,onNoteCreated:e=>{d(e),b(!1)}})})]})});var eA=o(9287),eD=o(3779),eS=o(38858),eC=o(70107);let eB=(0,u.rU)(({css:e,token:t})=>({actionTitle:e`
    margin-block-start: 12px;
    font-size: 16px;
    color: ${t.colorTextSecondary};
  `,card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: ${t.borderRadiusLG}px;

    font-weight: 500;
    text-align: center;

    background: ${t.colorFillTertiary};
    box-shadow: 0 0 0 1px ${t.colorFillTertiary} inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,glow:e`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `,icon:e`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `})),eN=({showKnowledgeBase:e,knowledgeBaseId:t})=>{let{t:o}=(0,g.Bd)("components"),a=(0,u.DP)(),{styles:r}=eB(),d=(0,f.x)(e=>e.pushDockFileList),{open:s}=(0,eC.P)();return(0,i.FD)(m.default,{gap:24,height:"100%",style:{paddingBottom:100},width:"100%",children:[(0,i.FD)(l.Flexbox,{justify:"center",style:{textAlign:"center"},children:[(0,i.Y)(n.A,{as:"h4",children:o("FileManager.emptyStatus.title")}),(0,i.Y)(n.A,{type:"secondary",children:o("FileManager.emptyStatus.or")})]}),(0,i.FD)(l.Flexbox,{gap:12,horizontal:!0,children:[e&&(0,i.FD)(l.Flexbox,{className:r.card,onClick:()=>{s()},padding:16,children:[(0,i.Y)("span",{className:r.actionTitle,children:o("FileManager.emptyStatus.actions.knowledgeBase")}),(0,i.Y)("div",{className:r.glow,style:{background:a.purple}}),(0,i.Y)(eo.A,{className:r.icon,color:a.purple,icon:(0,i.Y)(N.default,{color:"#fff",icon:p.A}),size:80,type:"folder"})]}),(0,i.Y)(ei.A,{beforeUpload:async e=>(await d([e],t),!1),multiple:!0,showUploadList:!1,children:(0,i.FD)(l.Flexbox,{className:r.card,padding:16,children:[(0,i.Y)("span",{className:r.actionTitle,children:o("FileManager.emptyStatus.actions.file")}),(0,i.Y)("div",{className:r.glow,style:{background:a.gold}}),(0,i.Y)(eo.A,{className:r.icon,color:a.gold,icon:(0,i.Y)(N.default,{color:"#fff",icon:en.A}),size:80})]})}),(0,i.Y)(ei.A,{beforeUpload:async e=>(await d([e],t),!1),directory:!0,multiple:!0,showUploadList:!1,children:(0,i.FD)(l.Flexbox,{className:r.card,padding:16,children:[(0,i.Y)("span",{className:r.actionTitle,children:o("FileManager.emptyStatus.actions.folder")}),(0,i.Y)("div",{className:r.glow,style:{background:a.geekblue}}),(0,i.Y)(eo.A,{className:r.icon,color:a.geekblue,icon:(0,i.Y)(N.default,{color:"#fff",icon:en.A}),size:80,type:"folder"})]})})]})]})};var eT=o(37412),e$=o(87508),eE=o(8444),ez=o(87876),eL=o(27697),eP=o(83838),eI=o(81962),eM=o(9402),eK=o(90089),eU=o(45140);let eR=(0,r.memo)(({id:e,...t})=>{let[o,n,a,r,l]=(0,f.x)(t=>[eI.S.isCreatingChunkEmbeddingTask(e)(t),t.embeddingChunks,t.reParseFile,t.openChunkDrawer,t.reEmbeddingChunks]);return(0,i.Y)(eU.A,{onClick:t=>{"success"===t&&r(e)},onEmbeddingClick:()=>n([e]),onErrorClick:t=>{"chunking"===t&&a(e),"embedding"===t&&l(e)},preparingEmbedding:o,...t})});var eO=o(47690),ej=o(87695),eW=o(58549),e_=o(55825),eq=o(29961),eH=o(80201),eG=o(73909),eX=o(50623),eQ=o(43588),eV=o(28726),eZ=o(15786),eJ=o(47762),e0=o(51997),e1=o.n(e0),e2=o(37546),e8=o(20577);let e4=(0,r.memo)(({onClose:e,knowledgeBaseId:t,fileIds:o})=>{let{t:n}=(0,g.Bd)("knowledgeBase"),[a,d]=(0,r.useState)(!1),{message:s}=z.A.useApp(),[c,u]=(0,e8.O)(e=>[e.useFetchKnowledgeBaseList,e.addFilesToKnowledgeBase]),{data:p,isLoading:m}=c(),h=async t=>{d(!0);try{await u(t.id,o),d(!1),s.success({content:(0,i.FD)(g.x6,{i18nKey:"addToKnowledgeBase.addSuccess",ns:"knowledgeBase",children:["文件添加成功，",(0,i.Y)(e1(),{href:`/knowledge/bases/${t.id}`,children:"立即查看"})]})}),e?.()}catch(e){console.error(e),d(!1)}};return(0,i.Y)(eQ.Ay,{footer:(0,i.Y)($.A,{block:!0,htmlType:"submit",loading:a,type:"primary",children:n("addToKnowledgeBase.confirm")}),gap:16,items:[{children:(0,i.FD)(eV.A,{align:"center",gap:8,horizontal:!0,padding:16,variant:"filled",children:[(0,i.Y)(eZ.A,{filename:"",size:32}),n("addToKnowledgeBase.totalFiles",{count:o.length})]}),noStyle:!0},{children:(0,i.Y)(eJ.A,{autoFocus:!0,loading:m,options:(p||[]).filter(e=>e.id!==t).map(e=>({label:(0,i.FD)(l.Flexbox,{gap:8,horizontal:!0,children:[(0,i.Y)(e2.A,{}),e.name]}),value:e.id})),placeholder:n("addToKnowledgeBase.id.placeholder")}),label:n("addToKnowledgeBase.id.title"),name:"id",rules:[{message:n("addToKnowledgeBase.id.required"),required:!0}]}],itemsType:"flat",layout:"vertical",onFinish:h})}),e3=()=>{let{t:e}=(0,g.Bd)("knowledgeBase");return(0,i.FD)(l.Flexbox,{gap:8,horizontal:!0,children:[(0,i.Y)(N.default,{icon:eG.A}),e("addToKnowledgeBase.title")]})},e6=(0,eX.m)((e,t)=>({content:(0,i.Y)(l.Flexbox,{padding:16,children:(0,i.Y)(e4,{fileIds:t?.fileIds||[],knowledgeBaseId:t?.knowledgeBaseId,onClose:()=>{e.current?.destroy(),t?.onClose?.()}})}),title:(0,i.Y)(e3,{})}));var e7=o(27809);let e5=(0,r.memo)(({id:e,knowledgeBaseId:t,url:o,filename:n})=>{let{t:a}=(0,g.Bd)(["components","common"]),{message:l,modal:d}=z.A.useApp(),[s]=(0,f.x)(e=>[e.removeFileItem]),[u]=(0,e8.O)(e=>[e.removeFilesFromKnowledgeBase]),p=!!t,{open:m}=e6(),h=(0,r.useMemo)(()=>[...p?[{icon:(0,i.Y)(N.default,{icon:ej.A}),key:"addToOtherKnowledgeBase",label:a("FileManager.actions.addToOtherKnowledgeBase"),onClick:async({domEvent:o})=>{o.stopPropagation(),m({fileIds:[e],knowledgeBaseId:t})}},{icon:(0,i.Y)(N.default,{icon:eW.A}),key:"removeFromKnowledgeBase",label:a("FileManager.actions.removeFromKnowledgeBase"),onClick:async({domEvent:o})=>{o.stopPropagation(),d.confirm({okButtonProps:{danger:!0},onOk:async()=>{await u(t,[e]),l.success(a("FileManager.actions.removeFromKnowledgeBaseSuccess"))},title:a("FileManager.actions.confirmRemoveFromKnowledgeBase",{count:1})})}}]:[{icon:(0,i.Y)(N.default,{icon:ej.A}),key:"addToKnowledgeBase",label:a("FileManager.actions.addToKnowledgeBase"),onClick:async({domEvent:t})=>{t.stopPropagation(),m({fileIds:[e]})}}],{type:"divider"},{icon:(0,i.Y)(N.default,{icon:e_.A}),key:"copyUrl",label:a("FileManager.actions.copyUrl"),onClick:async({domEvent:e})=>{e.stopPropagation(),await (0,eO.l)(o),l.success(a("FileManager.actions.copyUrlSuccess"))}},{icon:(0,i.Y)(N.default,{icon:eq.A}),key:"download",label:a("download",{ns:"common"}),onClick:async({domEvent:e})=>{e.stopPropagation();let t="file-downloading";l.loading({content:a("FileManager.actions.downloading"),duration:0,key:t}),await (0,e7.P)(o,n),l.destroy(t)}},{type:"divider"},{danger:!0,icon:(0,i.Y)(N.default,{icon:eH.A}),key:"delete",label:a("delete",{ns:"common"}),onClick:async({domEvent:t})=>{t.stopPropagation(),d.confirm({content:a("FileManager.actions.confirmDelete"),okButtonProps:{danger:!0},onOk:async()=>{await s(e)}})}}].filter(Boolean),[p]);return(0,i.Y)(T.A,{menu:{items:h},children:(0,i.Y)(c.A,{icon:ec.A,size:"small"})})});P().extend(M());let e9=(0,u.rU)(({css:e,token:t,cx:o,isDarkMode:i})=>{let n=e`
    opacity: 0;
  `;return{checkbox:n,container:e`
      cursor: pointer;
      margin-inline: 16px;
      border-block-end: 1px solid ${i?t.colorSplit:(0,eD.B3)(t.colorSplit,.06)};

      &:hover {
        background: ${t.colorFillTertiary};

        .${o(n)} {
          opacity: 1;
        }
      }

      .chunk-tag {
        opacity: 1;
      }
    `,hover:n,item:e`
      padding-block: 0;
      padding-inline: 0 24px;
      color: ${t.colorTextSecondary};
    `,name:e`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      margin-inline-start: 12px;

      color: ${t.colorText};
    `,selected:e`
      background: ${t.colorFillTertiary};

      &:hover {
        background: ${t.colorFillSecondary};
      }
    `}}),te=(0,r.memo)(({size:e,chunkingError:t,embeddingError:o,embeddingStatus:n,finishEmbedding:a,chunkCount:d,url:s,name:c,fileType:u,id:p,createdAt:h,selected:x,chunkingStatus:b,onSelectedChange:y,knowledgeBaseId:w,index:k,content:v,metadata:F,sourceType:Y})=>{let{t:A}=(0,g.Bd)(["components","file"]),{styles:D,cx:S}=e9(),[,C]=(0,eL.ok)(),[B,T]=(0,f.x)(e=>[eI.S.isCreatingFileParseTask(p)(e),e.parseFilesToChunks]),E=!(0,eK.P)(u),z="document"===Y||"custom/document"===u,L=(0,r.useMemo)(()=>z&&v?(e=>{if(!e)return null;let t=e.match(/^#\s+(.+)$/m);return t?t[1].trim():null})(v)||c||A("file:documentList.untitled"):c,[z,v,c,A]),I=z?F?.emoji:null,M=7>P()().diff(P()(h),"d")?P()(h).fromNow():P()(h).format("YYYY-MM-DD");return(0,i.FD)(l.Flexbox,{align:"center",className:S(D.container,x&&D.selected),height:48,horizontal:!0,paddingInline:8,children:[(0,i.FD)(l.Flexbox,{align:"center",className:D.item,distribution:"space-between",flex:1,horizontal:!0,onClick:()=>{C(e=>{let t=new URLSearchParams(e);return t.set("file",p),t},{replace:!0})},children:[(0,i.FD)(l.Flexbox,{align:"center",horizontal:!0,children:[(0,i.Y)(m.default,{height:48,onClick:e=>{e.stopPropagation(),y(p,!x,e.shiftKey,k)},style:{paddingInline:4},children:(0,i.Y)(e$.A,{checked:x,className:x?"":D.hover,style:{borderRadius:"50%"}})}),(0,i.Y)(l.Flexbox,{align:"center",justify:"center",style:{fontSize:24,marginInline:8,width:24},children:z?I?(0,i.Y)("span",{style:{fontSize:24},children:I}):(0,i.Y)(m.default,{height:24,width:24,children:(0,i.Y)(N.default,{icon:R.A,size:24})}):(0,i.Y)(eP.A,{fileName:c,fileType:u,size:24})}),(0,i.Y)("span",{className:D.name,children:L})]}),(0,i.FD)(l.Flexbox,{align:"center",gap:8,horizontal:!0,onClick:e=>{e.stopPropagation()},children:[B||(0,eE.A)(b)||!b?(0,i.Y)("div",{className:B?void 0:D.hover,children:(0,i.Y)(eT.A,{styles:{root:{pointerEvents:"none"}},title:A(E?"FileManager.actions.chunkingTooltip":"FileManager.actions.chunkingUnsupported"),children:(0,i.Y)($.A,{disabled:!E,icon:ez.A,loading:B,onClick:()=>{T([p])},size:"small",type:"text",children:A(B?"FileManager.actions.createChunkingTask":"FileManager.actions.chunking")})})}):(0,i.Y)("div",{style:{cursor:"default"},children:(0,i.Y)(eR,{chunkCount:d,chunkingError:t,chunkingStatus:b,embeddingError:o,embeddingStatus:n,finishEmbedding:a,id:p})}),(0,i.Y)("div",{className:D.hover,children:(0,i.Y)(e5,{filename:c,id:p,knowledgeBaseId:w,url:s})})]})]}),(0,i.Y)(l.Flexbox,{className:D.item,width:160,children:M}),(0,i.Y)(l.Flexbox,{className:D.item,width:140,children:(0,eM.Xq)(e)})]})}),tt=()=>(0,i.Y)(l.Flexbox,{style:{marginInline:24},children:Array.from({length:4}).map((e,t)=>(0,i.FD)(l.Flexbox,{align:"center",distribution:"space-between",height:64,horizontal:!0,children:[(0,i.FD)(l.Flexbox,{align:"center",flex:1,gap:12,horizontal:!0,paddingInline:12,children:[(0,i.Y)(ey.A.Avatar,{active:!0,shape:"square",size:48}),(0,i.Y)(ey.A.Button,{active:!0,style:{height:20,width:300}})]}),(0,i.Y)(l.Flexbox,{paddingInline:24,width:160,children:(0,i.Y)(ey.A.Button,{active:!0,style:{height:20}})}),(0,i.Y)(l.Flexbox,{paddingInline:24,width:140,children:(0,i.Y)(ey.A.Button,{active:!0,style:{height:20}})})]},t))});var to=o(61124),ti=o(46829),tn=o(49822),ta=o(59235),tr=o(27369),tl=o(13972),td=o(29703),ts=o(88670),tc=o(78001),tu=o(83232),tp=o(13988),tg=o(63117),tm=o(2941),th=o(1616),tf=o(18157),tx=o(79756),tb=o(64431),ty=o(23562),tw=o(29914);let tk=(0,u.cx)((0,u.AH)`
  p {
    margin-block-end: 0;
  }
`),tv=(0,r.memo)(({open:e,onClose:t,documentId:o,documentTitle:n,editorData:a,knowledgeBaseId:d})=>{let{t:s}=(0,g.Bd)(["file","editor"]),c=(0,u.DP)(),p=(0,C.h)(),m=(0,tn.e)(p),[h,x]=(0,r.useState)(!1),[A,D]=(0,r.useState)(""),S=(0,f.x)(e=>e.refreshFileList),N=!!o,T=async()=>{if(!p||h)return;let e=p.getDocument("json"),i=p.getDocument("markdown")||"";if(!i||""===i.trim())return void tw.iU.warning(s("header.newNoteDialog.emptyContent",{ns:"file"}));x(!0);try{if(N)await X.W.updateDocument({content:i,editorData:JSON.stringify(e),id:o,title:A}),tw.iU.success(s("header.newNoteDialog.updateSuccess",{ns:"file"}));else{let t=Date.now(),o=new Date(t).toLocaleString("en-US",{day:"2-digit",hour:"2-digit",minute:"2-digit",month:"short",year:"numeric"}),n=A||`Note - ${o}`;await X.W.createDocument({content:i,editorData:JSON.stringify(e),fileType:"custom/document",knowledgeBaseId:d,metadata:{createdAt:t},title:n}),tw.iU.success(s("header.newNoteDialog.saveSuccess",{ns:"file"})),p.cleanDocument()}t(),await S()}catch(e){console.error("Failed to save note:",e),tw.iU.error(s("header.newNoteDialog.saveError",{ns:"file"}))}finally{x(!1)}},$=(0,r.useMemo)(()=>[{active:m.isBold,icon:ts.A,key:"bold",label:s("typobar.bold",{ns:"editor"}),onClick:m.bold,tooltipProps:{hotkey:(0,to.r)(ti.g8.Bold).keys}},{active:m.isItalic,icon:tc.A,key:"italic",label:s("typobar.italic",{ns:"editor"}),onClick:m.italic,tooltipProps:{hotkey:(0,to.r)(ti.g8.Italic).keys}},{active:m.isUnderline,icon:tu.A,key:"underline",label:s("typobar.underline",{ns:"editor"}),onClick:m.underline,tooltipProps:{hotkey:(0,to.r)(ti.g8.Underline).keys}},{active:m.isStrikethrough,icon:tp.A,key:"strikethrough",label:s("typobar.strikethrough",{ns:"editor"}),onClick:m.strikethrough,tooltipProps:{hotkey:(0,to.r)(ti.g8.Strikethrough).keys}},{type:"divider"},{icon:tg.A,key:"bulletList",label:s("typobar.bulletList",{ns:"editor"}),onClick:m.bulletList,tooltipProps:{hotkey:(0,to.r)(ti.g8.BulletList).keys}},{icon:tm.A,key:"numberlist",label:s("typobar.numberList",{ns:"editor"}),onClick:m.numberList,tooltipProps:{hotkey:(0,to.r)(ti.g8.NumberList).keys}},{icon:th.A,key:"tasklist",label:s("typobar.taskList",{ns:"editor"}),onClick:m.checkList},{type:"divider"},{active:m.isBlockquote,icon:tf.A,key:"blockquote",label:s("typobar.blockquote",{ns:"editor"}),onClick:m.blockquote},{type:"divider"},{icon:tx.A,key:"math",label:s("typobar.tex",{ns:"editor"}),onClick:m.insertMath},{active:m.isCode,icon:tb.A,key:"code",label:s("typobar.code",{ns:"editor"}),onClick:m.code,tooltipProps:{hotkey:(0,to.r)(ti.g8.CodeInline).keys}},{icon:ty.A,key:"codeblock",label:s("typobar.codeblock",{ns:"editor"}),onClick:m.codeblock},m.isCodeblock&&{children:(0,i.Y)(ta.A,{onSelect:e=>m.updateCodeblockLang(e),value:m.codeblockLang}),disabled:!m.isCodeblock,key:"codeblockLang"}].filter(Boolean),[m,s]);return(0,i.Y)(td.A,{afterOpenChange:e=>{if(e&&o&&p){if(a){D(n||""),p.setDocument("json",JSON.stringify(a));return}X.W.getDocumentById(o).then(e=>{e&&e.content&&(D(e.title||e.filename||""),p.setDocument("json",e.editorData))}).catch(e=>{console.error("[NoteEditorModal] Failed to load document:",e),tw.iU.error(s("header.newNoteDialog.loadError",{ns:"file"}))})}e||(p?.cleanDocument(),D(""))},okButtonProps:{loading:h},okText:s("header.newNoteDialog.save"),onCancel:()=>{p?.cleanDocument(),D(""),t()},onOk:T,open:e,title:N?s("header.newNoteDialog.editTitle"):s("header.newNoteDialog.title"),width:800,children:(0,i.FD)(l.Flexbox,{gap:0,children:[(0,i.Y)(tr.A,{left:(0,i.Y)(tl.A,{items:$}),style:{background:c.colorFillQuaternary,borderTopLeftRadius:8,borderTopRightRadius:8}}),(0,i.Y)(l.Flexbox,{padding:16,children:(0,i.Y)(B.A,{className:tk,content:"",editor:p,plugins:[b.A,y.A,w.A,k.A,v.A,F.l,Y.b],style:{minHeight:400},type:"text"})})]})})}),tF=(0,u.rU)(({css:e,token:t})=>({floatingChunkBadge:e`
    position: absolute;
    z-index: 3;
    inset-block-end: 8px;
    inset-inline-end: 8px;

    border-radius: ${t.borderRadius}px;

    opacity: 0;
    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadow};

    transition: opacity ${t.motionDurationMid};
  `,name:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-end: 12px;

    font-weight: ${t.fontWeightStrong};
    color: ${t.colorText};
    word-break: break-word;
  `})),tY=(0,r.memo)(({chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,fileType:r,finishEmbedding:d,id:s,name:c,size:u})=>{let{t:p}=(0,g.Bd)("components"),{styles:m,cx:h}=tF(),[x,b]=(0,f.x)(e=>[eI.S.isCreatingFileParseTask(s)(e),e.parseFilesToChunks]),y=!(0,eK.P)(r||"");return(0,i.FD)(i.FK,{children:[(0,i.FD)(l.Flexbox,{align:"center",gap:12,justify:"center",paddingBlock:24,paddingInline:12,style:{minHeight:180},children:[(0,i.Y)(eP.A,{fileName:c,fileType:r,size:64}),(0,i.Y)("div",{className:m.name,style:{textAlign:"center"},children:c}),(0,i.Y)("div",{style:{color:"var(--lobe-chat-text-tertiary)",fontSize:12,textAlign:"center"},children:(0,eM.Xq)(u)})]}),!(0,eE.A)(o)&&o?(0,i.Y)("div",{className:h("floatingChunkBadge",m.floatingChunkBadge),onClick:e=>e.stopPropagation(),children:(0,i.Y)(eR,{chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,finishEmbedding:d,id:s})}):y&&(0,i.Y)(eT.A,{title:p("FileManager.actions.chunkingTooltip"),children:(0,i.Y)("div",{className:h("floatingChunkBadge",m.floatingChunkBadge),onClick:e=>{e.stopPropagation(),x||b([s])},style:{cursor:"pointer"},children:(0,i.Y)($.A,{icon:ez.A,loading:x,size:"small",type:"text"})})})]})});var tA=o(80812);let tD=(0,u.rU)(({css:e,token:t})=>({floatingChunkBadge:e`
    position: absolute;
    z-index: 3;
    inset-block-end: 8px;
    inset-inline-end: 8px;

    border-radius: ${t.borderRadius}px;

    opacity: 0;
    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadow};

    transition: opacity ${t.motionDurationMid};
  `,hoverOverlay:e`
    position: absolute;
    z-index: 1;
    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 16px;

    opacity: 0;
    background: ${t.colorBgMask};

    transition: opacity ${t.motionDurationMid};

    &:hover {
      opacity: 1;
    }
  `,imagePlaceholder:e`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t.colorFillQuaternary};
  `,imageWrapper:e`
    position: relative;
    width: 100%;
    background: ${t.colorFillQuaternary};

    img {
      display: block;
      height: auto;
    }
  `,name:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-end: 12px;

    font-weight: ${t.fontWeightStrong};
    color: ${t.colorText};
    word-break: break-word;
  `,overlaySize:e`
    font-size: 12px;
    color: ${t.colorTextLightSolid};
    opacity: 0.9;
  `,overlayTitle:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    max-width: 100%;
    margin-block-end: 8px;

    font-size: 14px;
    font-weight: ${t.fontWeightStrong};
    color: ${t.colorTextLightSolid};
    text-align: center;
    word-break: break-word;
  `})),tS=(0,r.memo)(({chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,fileType:d,finishEmbedding:s,id:c,isInView:u,name:p,size:m,url:h})=>{let{t:x}=(0,g.Bd)("components"),{styles:b,cx:y}=tD(),[w,k]=(0,r.useState)(!1),[v,F]=(0,f.x)(e=>[eI.S.isCreatingFileParseTask(c)(e),e.parseFilesToChunks]),Y=!(0,eK.P)(d||"");return(0,i.FD)(i.FK,{children:[(0,i.FD)("div",{className:b.imageWrapper,children:[!w&&(0,i.Y)("div",{className:b.imagePlaceholder,children:(0,i.FD)(l.Flexbox,{align:"center",gap:12,justify:"center",paddingBlock:24,paddingInline:12,children:[(0,i.Y)(eP.A,{fileName:p,fileType:d,size:48}),(0,i.Y)("div",{className:b.name,style:{textAlign:"center"},children:p}),(0,i.Y)("div",{style:{color:"var(--lobe-chat-text-tertiary)",fontSize:12,textAlign:"center"},children:(0,eM.Xq)(m)})]})}),u&&h&&(0,i.Y)(tA.A,{alt:p,loading:"lazy",onError:()=>k(!1),onLoad:()=>k(!0),preview:{src:h},src:h,style:{display:"block",height:"auto",opacity:+!!w,transition:"opacity 0.3s",width:"100%"},wrapperStyle:{display:"block",width:"100%"}}),(0,i.FD)("div",{className:b.hoverOverlay,children:[(0,i.Y)("div",{className:b.overlayTitle,children:p}),(0,i.Y)("div",{className:b.overlaySize,children:(0,eM.Xq)(m)})]})]}),!(0,eE.A)(o)&&o?(0,i.Y)("div",{className:y("floatingChunkBadge",b.floatingChunkBadge),onClick:e=>e.stopPropagation(),children:(0,i.Y)(eR,{chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,finishEmbedding:s,id:c})}):Y&&(0,i.Y)(eT.A,{title:x("FileManager.actions.chunkingTooltip"),children:(0,i.Y)("div",{className:y("floatingChunkBadge",b.floatingChunkBadge),onClick:e=>{e.stopPropagation(),v||F([c])},style:{cursor:"pointer"},children:(0,i.Y)($.A,{icon:ez.A,loading:v,size:"small",type:"text"})})})]})}),tC=(0,u.rU)(({css:e,token:t})=>({floatingChunkBadge:e`
    position: absolute;
    z-index: 3;
    inset-block-end: 8px;
    inset-inline-end: 8px;

    border-radius: ${t.borderRadius}px;

    opacity: 0;
    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadow};

    transition: opacity ${t.motionDurationMid};
  `,hoverOverlay:e`
    position: absolute;
    z-index: 1;
    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 16px;
    border-radius: ${t.borderRadiusLG}px;

    opacity: 0;
    background: ${t.colorBgMask};

    transition: opacity ${t.motionDurationMid};

    &:hover {
      opacity: 1;
    }
  `,iconWrapper:e`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 120px;
    margin-block-end: 12px;
    border-radius: ${t.borderRadius}px;

    background: ${t.colorFillQuaternary};
  `,markdownLoading:e`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 120px;
    border-radius: ${t.borderRadiusLG}px;

    font-size: 12px;
    color: ${t.colorTextTertiary};

    background: ${t.colorFillQuaternary};
  `,markdownPreview:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    min-height: 120px;
    max-height: 300px;
    padding: 16px;
    border-radius: ${t.borderRadiusLG}px;

    font-size: 13px;
    line-height: 1.6;
    color: ${t.colorTextSecondary};
    word-wrap: break-word;
    white-space: pre-wrap;

    background: ${t.colorFillQuaternary};

    &::after {
      pointer-events: none;
      content: '';

      position: absolute;
      inset-block-end: 0;
      inset-inline: 0;

      height: 60px;

      background: linear-gradient(to bottom, transparent, ${t.colorFillQuaternary});
    }
  `,overlaySize:e`
    font-size: 12px;
    color: ${t.colorTextLightSolid};
    opacity: 0.9;
  `,overlayTitle:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    max-width: 100%;
    margin-block-end: 8px;

    font-size: 14px;
    font-weight: ${t.fontWeightStrong};
    color: ${t.colorTextLightSolid};
    text-align: center;
    word-break: break-word;
  `})),tB=(0,r.memo)(({chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,fileType:r,finishEmbedding:l,id:d,isLoadingMarkdown:s,markdownContent:c,name:u,size:p})=>{let{t:m}=(0,g.Bd)("components"),{styles:h,cx:x}=tC(),[b,y]=(0,f.x)(e=>[eI.S.isCreatingFileParseTask(d)(e),e.parseFilesToChunks]),w=!(0,eK.P)(r||"");return(0,i.FD)(i.FK,{children:[(0,i.FD)("div",{style:{position:"relative"},children:[s?(0,i.Y)("div",{className:h.markdownLoading,children:"Loading preview..."}):c?(0,i.Y)("div",{className:h.markdownPreview,children:c}):(0,i.Y)("div",{className:h.iconWrapper,children:(0,i.Y)(eP.A,{fileName:u,fileType:r,size:64})}),(0,i.FD)("div",{className:h.hoverOverlay,children:[(0,i.Y)("div",{className:h.overlayTitle,children:u}),(0,i.Y)("div",{className:h.overlaySize,children:(0,eM.Xq)(p)})]})]}),!(0,eE.A)(o)&&o?(0,i.Y)("div",{className:x("floatingChunkBadge",h.floatingChunkBadge),onClick:e=>e.stopPropagation(),children:(0,i.Y)(eR,{chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,finishEmbedding:l,id:d})}):w&&(0,i.Y)(eT.A,{title:m("FileManager.actions.chunkingTooltip"),children:(0,i.Y)("div",{className:x("floatingChunkBadge",h.floatingChunkBadge),onClick:e=>{e.stopPropagation(),b||y([d])},style:{cursor:"pointer"},children:(0,i.Y)($.A,{icon:ez.A,loading:b,size:"small",type:"text"})})})]})});var tN=o(73102);let tT=(0,u.rU)(({css:e,token:t})=>({floatingChunkBadge:e`
    position: absolute;
    z-index: 3;
    inset-block-end: 8px;
    inset-inline-end: 8px;

    border-radius: ${t.borderRadius}px;

    opacity: 0;
    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadow};

    transition: opacity ${t.motionDurationMid};
  `,iconWrapper:e`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 120px;
    margin-block-end: 12px;
    border-radius: ${t.borderRadius}px;

    background: ${t.colorFillQuaternary};
  `,markdownLoading:e`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 120px;
    border-radius: ${t.borderRadiusLG}px;

    font-size: 12px;
    color: ${t.colorTextTertiary};

    background: ${t.colorFillQuaternary};
  `,noteContent:e`
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;
    min-height: 120px;
    padding: 16px;
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorFillQuaternary};
  `,notePreview:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;

    font-size: 13px;
    line-height: 1.6;
    color: ${t.colorTextSecondary};
  `,noteTitle:e`
    display: flex;
    gap: 8px;
    align-items: center;

    font-size: 16px;
    font-weight: ${t.fontWeightStrong};
    line-height: 1.4;
    color: ${t.colorText};
  `})),t$=e=>{if(!e)return null;let t=e.match(/^#\s+(.+)$/m);return t?t[1].trim():null},tE=(0,r.memo)(({chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,fileType:r,finishEmbedding:l,id:d,isLoadingMarkdown:s,markdownContent:c,name:u,metadata:p})=>{let{t:m}=(0,g.Bd)(["components","file"]),{styles:h,cx:x}=tT(),[b,y]=(0,f.x)(e=>[eI.S.isCreatingFileParseTask(d)(e),e.parseFilesToChunks]),w=!(0,eK.P)(r||""),k=(c?t$(c):null)||u||m("file:documentList.untitled"),v=p?.emoji,F=c?(e=>{if(!e)return"";let t=(0,tN.Ay)(e),o=t$(e);return o&&(t=t.replace(o,"").trim()),t.slice(0,400)})(c):"";return(0,i.FD)(i.FK,{children:[(0,i.Y)("div",{style:{position:"relative"},children:s?(0,i.Y)("div",{className:h.markdownLoading,children:"Loading preview..."}):c?(0,i.FD)("div",{className:h.noteContent,children:[(0,i.FD)("div",{className:h.noteTitle,children:[v&&(0,i.Y)("span",{style:{fontSize:20},children:v}),(0,i.Y)("span",{children:k})]}),F?(0,i.Y)("div",{className:h.notePreview,children:F}):(0,i.Y)("div",{className:h.notePreview,children:(0,i.Y)("span",{style:{color:"var(--lobe-text-tertiary)",fontStyle:"italic"},children:"No content"})})]}):(0,i.Y)("div",{className:h.iconWrapper,children:(0,i.Y)(eP.A,{fileName:u,fileType:r,size:64})})}),!(0,eE.A)(o)&&o?(0,i.Y)("div",{className:x("floatingChunkBadge",h.floatingChunkBadge),onClick:e=>e.stopPropagation(),children:(0,i.Y)(eR,{chunkCount:e,chunkingError:t,chunkingStatus:o,embeddingError:n,embeddingStatus:a,finishEmbedding:l,id:d})}):w&&(0,i.Y)(eT.A,{title:m("FileManager.actions.chunkingTooltip"),children:(0,i.Y)("div",{className:x("floatingChunkBadge",h.floatingChunkBadge),onClick:e=>{e.stopPropagation(),b||y([d])},style:{cursor:"pointer"},children:(0,i.Y)($.A,{icon:ez.A,loading:b,size:"small",type:"text"})})})]})}),tz=new Set(["image/png","image/jpeg","image/jpg","image/gif","image/webp","image/svg+xml"]),tL=new Set(["text/markdown","text/x-markdown"]),tP=(0,u.rU)(({css:e,token:t})=>({actions:e`
    opacity: 0;
    transition: opacity ${t.motionDurationMid};
  `,card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorBgContainer};

    transition: all ${t.motionDurationMid};

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: ${t.boxShadowTertiary};

      .actions {
        opacity: 1;
      }

      .checkbox {
        opacity: 1;
      }

      .dropdown {
        opacity: 1;
      }

      .floatingChunkBadge {
        opacity: 1;
      }
    }
  `,checkbox:e`
    position: absolute;
    z-index: 2;
    inset-block-start: 8px;
    inset-inline-start: 8px;

    opacity: 0;

    transition: opacity ${t.motionDurationMid};
  `,content:e`
    position: relative;
  `,contentWithPadding:e`
    padding: 12px;
  `,dropdown:e`
    position: absolute;
    z-index: 2;
    inset-block-start: 8px;
    inset-inline-end: 8px;

    opacity: 0;

    transition: opacity ${t.motionDurationMid};
  `,selected:e`
    border-color: ${t.colorPrimary};
    background: ${t.colorPrimaryBg};

    .checkbox {
      opacity: 1;
    }
  `})),tI=(0,r.memo)(({chunkingError:e,editorData:t,embeddingError:o,embeddingStatus:n,finishEmbedding:a,chunkCount:l,url:d,name:s,fileType:c,id:u,selected:p,chunkingStatus:g,onSelectedChange:m,knowledgeBaseId:h,size:f,onOpen:x,metadata:b})=>{let{styles:y,cx:w}=tP(),[k,v]=(0,r.useState)(""),[F,Y]=(0,r.useState)(!1),[A,D]=(0,r.useState)(!1),S=c&&tz.has(c),C=s.toLowerCase().endsWith(".md")||s.toLowerCase().endsWith(".markdown")||c&&tL.has(c),B="custom/document"===c,N=(0,r.useRef)(null),[T,$]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!N.current)return;let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!T&&$(!0)})},{rootMargin:"200px",threshold:.01});return e.observe(N.current),()=>{e.disconnect()}},[T]),(0,r.useEffect)(()=>{(C||B)&&T&&!k&&(Y(!0),(async()=>{try{let e;if(B){let t=await X.W.getDocumentById(u),o=t?.content||"";try{let t=JSON.parse(o);e=(e=>{if(!e||!e.root||!e.root.children)return"";let t=e=>e?e.text?e.text:e.children&&Array.isArray(e.children)?e.children.map(e=>t(e)).join(""):"":"";return e.root.children.map(e=>t(e)).join("\n")})(t)}catch{e=o}}else if(d){let t=await fetch(d);e=await t.text()}else e="";let t=B?e.slice(0,1e3):e.slice(0,500);v(t)}catch(e){console.error("Failed to fetch markdown content:",e),v("")}finally{Y(!1)}})())},[C,B,d,T,k,u]),(0,i.FD)("div",{className:w(y.card,p&&y.selected),ref:N,children:[(0,i.Y)("div",{className:w("checkbox",y.checkbox),onClick:e=>{e.stopPropagation(),m(u,!p)},children:(0,i.Y)(e$.A,{checked:p})}),(0,i.Y)("div",{className:w("dropdown",y.dropdown),onClick:e=>e.stopPropagation(),children:(0,i.Y)(e5,{filename:s,id:u,knowledgeBaseId:h,url:d})}),(0,i.Y)("div",{className:w(y.content,!S&&!C&&!B&&y.contentWithPadding),onClick:()=>{B?D(!0):x(u)},children:(()=>{switch(!0){case S&&!!d:return(0,i.Y)(tS,{chunkCount:l??void 0,chunkingError:e,chunkingStatus:g??void 0,embeddingError:o,embeddingStatus:n??void 0,fileType:c,finishEmbedding:a,id:u,isInView:T,name:s,size:f,url:d});case B:return(0,i.Y)(tE,{chunkCount:l??void 0,chunkingError:e,chunkingStatus:g??void 0,embeddingError:o,embeddingStatus:n??void 0,fileType:c,finishEmbedding:a,id:u,isLoadingMarkdown:F,markdownContent:k,metadata:b,name:s});case C:return(0,i.Y)(tB,{chunkCount:l??void 0,chunkingError:e,chunkingStatus:g??void 0,embeddingError:o,embeddingStatus:n??void 0,fileType:c,finishEmbedding:a,id:u,isLoadingMarkdown:F,markdownContent:k,name:s,size:f});default:return(0,i.Y)(tY,{chunkCount:l??void 0,chunkingError:e,chunkingStatus:g??void 0,embeddingError:o,embeddingStatus:n??void 0,fileType:c,finishEmbedding:a,id:u,name:s,size:f})}})()}),B&&(0,i.Y)(tv,{documentId:u,documentTitle:s,editorData:t,knowledgeBaseId:h,onClose:()=>{D(!1)},open:A})]})}),tM=(0,r.memo)(({data:e,context:t})=>e&&e.id?(0,i.Y)("div",{style:{padding:"8px 4px"},children:(0,i.Y)(tI,{knowledgeBaseId:t.knowledgeBaseId,onOpen:t.openFile,onSelectedChange:(e,o)=>{t.setSelectedFileIds(t=>o?[...t,e]:t.filter(t=>t!==e))},selected:t.selectFileIds.includes(e.id),...e})}):null);tM.displayName="MasonryItemWrapper";let tK=(0,u.rU)(({css:e,token:t})=>({card:e`
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;
    background: ${t.colorBgContainer};
  `,grid:e`
    display: grid;
    gap: 16px;
    padding-block: 12px;
    padding-inline: 24px;
  `})),tU=(0,r.memo)(({columnCount:e})=>{let{styles:t}=tK(),o=[180,220,200,190,240,210,200,230,180,220,210,190],n=Math.min(3*e,12);return(0,i.Y)("div",{className:t.grid,style:{gridTemplateColumns:`repeat(${e}, 1fr)`},children:Array.from({length:n}).map((e,n)=>(0,i.Y)("div",{className:t.card,children:(0,i.Y)(ey.A,{active:!0,avatar:!1,paragraph:{rows:4,width:["100%","90%","70%","50%"]},style:{height:o[n%o.length]},title:{width:"100%"}})},n))})});tU.displayName="MasonrySkeleton";var tR=o(42507);let tO=(0,r.memo)(({config:e,onConfigChange:t})=>{let{t:o}=(0,g.Bd)("components");return(0,i.FD)(l.Flexbox,{align:"center",gap:8,horizontal:!0,onClick:()=>{t({showFilesInKnowledgeBase:!e.showFilesInKnowledgeBase})},children:[o("FileManager.config.showFilesInKnowledgeBase"),(0,i.Y)(tR.A,{size:"small",value:e.showFilesInKnowledgeBase})]})}),tj=(0,u.rU)(({css:e,token:t,isDarkMode:o})=>({container:e`
    height: 40px;
    padding-block-end: 12px;
    border-block-end: 1px solid ${o?t.colorSplit:(0,eD.B3)(t.colorSplit,.06)};
  `,total:e`
    cursor: pointer;
    height: 27px;
  `})),tW=(0,r.memo)(({selectCount:e,isInKnowledgeBase:t,total:o,onActionClick:n,onClickCheckbox:a})=>{let{t:r}=(0,g.Bd)(["components","common"]),{styles:d}=tj(),s=e>0,{modal:c,message:u}=z.A.useApp();return(0,i.FD)(l.Flexbox,{align:"center",gap:12,horizontal:!0,children:[(0,i.FD)(l.Flexbox,{align:"center",className:d.total,gap:8,horizontal:!0,onClick:a,paddingInline:4,children:[(0,i.Y)(e$.A,{checked:e===o,indeterminate:s&&e!==o}),void 0===o?(0,i.Y)(ey.A,{active:!0,paragraph:{rows:1,style:{marginBottom:0,width:60},width:"100%"},title:!1}):(0,i.Y)("div",{style:{height:18},children:s?r("FileManager.total.selectedCount",{count:e}):r("FileManager.total.fileCount",{count:o})})]}),s&&(0,i.FD)(l.Flexbox,{gap:8,horizontal:!0,children:[t?(0,i.FD)(i.FK,{children:[(0,i.Y)($.A,{icon:eW.A,onClick:()=>{c.confirm({okButtonProps:{danger:!0},onOk:async()=>{await n("removeFromKnowledgeBase"),u.success(r("FileManager.actions.removeFromKnowledgeBaseSuccess"))},title:r("FileManager.actions.confirmRemoveFromKnowledgeBase",{count:e})})},size:"small",children:r("FileManager.actions.removeFromKnowledgeBase")}),(0,i.Y)($.A,{color:"default",icon:(0,i.Y)(N.default,{icon:ej.A}),onClick:()=>{n("addToOtherKnowledgeBase")},size:"small",variant:"filled",children:r("FileManager.actions.addToOtherKnowledgeBase")})]}):(0,i.Y)($.A,{color:"default",icon:(0,i.Y)(N.default,{icon:ej.A}),onClick:()=>{n("addToKnowledgeBase")},size:"small",variant:"filled",children:r("FileManager.actions.addToKnowledgeBase")}),(0,i.Y)($.A,{color:"default",icon:(0,i.Y)(N.default,{icon:ez.A}),onClick:async()=>{await n("batchChunking")},size:"small",variant:"filled",children:r("FileManager.actions.batchChunking")}),(0,i.Y)($.A,{color:"danger",danger:!0,icon:(0,i.Y)(N.default,{icon:U.A}),onClick:async()=>{c.confirm({okButtonProps:{danger:!0},onOk:async()=>{await n("delete"),u.success(r("FileManager.actions.deleteSuccess"))},title:r("FileManager.actions.confirmDeleteMultiFiles",{count:e})})},size:"small",variant:"filled",children:r("delete",{ns:"common"})})]})]})});var t_=o(13072);let tq=(0,u.rU)(({css:e})=>({container:e`
    gap: 4px;
  `})),tH=(0,r.memo)(({onViewChange:e,view:t})=>{let{t:o}=(0,g.Bd)("components"),{styles:n}=tq();return(0,i.FD)(l.Flexbox,{className:n.container,horizontal:!0,children:[(0,i.Y)(c.A,{active:"list"===t,icon:tg.A,onClick:()=>e("list"),size:16,title:o("FileManager.view.list")}),(0,i.Y)(c.A,{active:"masonry"===t,icon:t_.A,onClick:()=>e("masonry"),size:16,title:o("FileManager.view.masonry")})]})}),tG=(0,u.rU)(({css:e,token:t,isDarkMode:o})=>({container:e`
    height: 40px;
    padding-block-end: 12px;
    border-block-end: 1px solid ${o?t.colorSplit:(0,eD.B3)(t.colorSplit,.06)};
  `})),tX=(0,r.memo)(({selectCount:e,showConfig:t,setSelectedFileIds:o,selectFileIds:n,total:a,totalFileIds:r,config:d,onConfigChange:s,knowledgeBaseId:c,viewMode:u,onViewChange:p})=>{let{styles:g}=tG(),[m,h,x]=(0,f.x)(e=>[e.removeFiles,e.parseFilesToChunks,e.fileList]),[b]=(0,e8.O)(e=>[e.removeFilesFromKnowledgeBase]),{open:y}=e6(),w=async e=>{switch(e){case"delete":await m(n),o([]);return;case"removeFromKnowledgeBase":if(!c)return;await b(c,n),o([]);return;case"addToKnowledgeBase":return void y({fileIds:n,onClose:()=>o([])});case"addToOtherKnowledgeBase":return void y({fileIds:n,knowledgeBaseId:c,onClose:()=>o([])});case"batchChunking":{let e=n.filter(e=>{let t=x.find(t=>t.id===e);return t&&!(0,eK.P)(t.fileType)});await h(e,{skipExist:!0}),o([]);return}}},k=!!c;return(0,i.FD)(l.Flexbox,{align:"center",className:g.container,horizontal:!0,justify:"space-between",children:[(0,i.Y)(tW,{isInKnowledgeBase:k,onActionClick:w,onClickCheckbox:()=>{o(e===a?[]:r)},selectCount:e,total:a}),(0,i.FD)(l.Flexbox,{gap:8,horizontal:!0,children:[(0,i.Y)(tH,{onViewChange:p,view:u}),t&&(0,i.Y)(tO,{config:d,onConfigChange:s})]})]})});var tQ=o(73722);let tV=(0,u.rU)(({css:e,token:t,isDarkMode:o})=>({header:e`
    height: 40px;
    min-height: 40px;
    border-block-end: 1px solid ${o?t.colorSplit:(0,eD.B3)(t.colorSplit,.06)};
    color: ${t.colorTextDescription};
  `,headerItem:e`
    padding-block: 0;
    padding-inline: 0 24px;
  `,total:e`
    padding-block-end: 12px;
    border-block-end: 1px solid ${o?t.colorSplit:(0,eD.B3)(t.colorSplit,.06)};
  `})),tZ=(0,r.memo)(({knowledgeBaseId:e,category:t,onOpenFile:o})=>{let{t:a}=(0,g.Bd)("components"),{styles:s}=tV(),[c,u]=(0,r.useState)([]),[p,x]=(0,r.useState)({showFilesInKnowledgeBase:!1}),[b,y]=(0,r.useState)(null),[w,k]=(0,r.useState)(!1),[v,F]=(0,r.useState)(!1),Y=(0,Q.o)(e=>e.status.fileManagerViewMode),A=t===d._K.Images?"masonry":Y||"list",D=(0,Q.o)(e=>e.updateSystemStatus),[S,C]=(0,r.useState)(4),B=()=>{let e=window.innerWidth;e<768?C(2):e<1024?C(3):e<1536?C(4):C(5)};r.useEffect(()=>{if("masonry"===A)return B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[A]);let[N]=(0,eS.ZA)("q",{clearOnDefault:!0}),[T]=(0,eS.ZA)("sorter",{clearOnDefault:!0,defaultValue:"createdAt"}),[$]=(0,eS.ZA)("sortType",{clearOnDefault:!0,defaultValue:d.r3.Desc}),{data:E,isLoading:z}=(0,f.x)(e=>e.useFetchKnowledgeItems)({category:t,knowledgeBaseId:e,q:N??void 0,sortType:$??void 0,sorter:T??void 0,...p});r.useEffect(()=>{w&&E&&requestAnimationFrame(()=>{let e=setTimeout(()=>{k(!1)},100);return()=>clearTimeout(e)})},[w,A,E]),r.useEffect(()=>{if("masonry"!==A||!E||z||w)"list"===A&&F(!1);else{let e=setTimeout(()=>{F(!0)},300);return()=>clearTimeout(e)}},[A,E,z,w]),(e=>{let[t]=(0,f.x)(e=>[e.refreshFileList]),o=e?.some(e=>e.chunkingStatus===tQ.cz.Processing),i=e?.some(e=>e.embeddingStatus===tQ.cz.Processing),n=o||i;(0,r.useEffect)(()=>{if(!n)return;let e=setInterval(t,5e3);return()=>{clearInterval(e)}},[n])})(E),r.useEffect(()=>{if(E&&c.length>0){let e=new Set(E.map(e=>e?.id).filter(Boolean)),t=c.filter(t=>e.has(t));t.length!==c.length&&u(t)}},[E]),r.useEffect(()=>{0===c.length&&y(null)},[c.length]);let L=(0,r.useMemo)(()=>({knowledgeBaseId:e,openFile:o,selectFileIds:c,setSelectedFileIds:u}),[o,e,c]);return z||E?.length!==0?(0,i.FD)(l.Flexbox,{height:"100%",children:[(0,i.FD)(l.Flexbox,{style:{fontSize:12,marginInline:24},children:[(0,i.Y)(tX,{config:p,knowledgeBaseId:e,onConfigChange:x,onViewChange:e=>{k(!0),"masonry"===e&&F(!1),D({fileManagerViewMode:e})},selectCount:c.length,selectFileIds:c,setSelectedFileIds:u,showConfig:!e,total:E?.length,totalFileIds:E?.map(e=>e.id)||[],viewMode:A},c.join("-")),"list"===A&&(0,i.FD)(l.Flexbox,{align:"center",className:s.header,horizontal:!0,paddingInline:8,children:[(0,i.Y)(l.Flexbox,{className:s.headerItem,flex:1,style:{paddingInline:32},children:a("FileManager.title.title")}),(0,i.Y)(l.Flexbox,{className:s.headerItem,width:160,children:a("FileManager.title.createdAt")}),(0,i.Y)(l.Flexbox,{className:s.headerItem,width:140,children:a("FileManager.title.size")})]})]}),z||"list"===A&&w?(0,i.Y)(tt,{}):"list"===A?(0,i.Y)(h.aY,{components:{Footer:()=>(0,i.Y)(m.default,{style:{height:64},children:(0,i.Y)(n.A,{style:{fontSize:12},type:"secondary",children:a("FileManager.bottom")})})},data:E,itemContent:(t,o)=>(0,i.Y)(te,{index:t,knowledgeBaseId:e,onSelectedChange:(e,t,o,i)=>{if(o&&null!==b&&c.length>0&&E){let e=Math.min(b,i),t=Math.max(b,i),o=E.slice(e,t+1).map(e=>e.id);u(e=>{let t=new Set(e);return o.forEach(e=>t.add(e)),Array.from(t)})}else u(o=>t?[...o,e]:o.filter(t=>t!==e));y(i)},selected:c.includes(o.id),...o},o.id),style:{flex:1}}):(0,i.FD)("div",{style:{flex:1,overflow:"hidden",position:"relative"},children:[(w||!v)&&(0,i.Y)("div",{style:{background:"inherit",inset:0,position:"absolute",zIndex:10},children:(0,i.Y)(tU,{columnCount:S})}),(0,i.Y)("div",{style:{height:"100%",opacity:+!!v,overflowY:"auto",transition:"opacity 0.2s ease-in-out"},children:(0,i.Y)("div",{style:{paddingBlockEnd:64,paddingBlockStart:12,paddingInline:24},children:(0,i.Y)(eA.r,{ItemContent:tM,columnCount:S,context:L,data:E||[],style:{gap:"16px"}})})})]})]}):(0,i.Y)(eN,{knowledgeBaseId:e,showKnowledgeBase:!e})});var tJ=o(30488),t0=o(54922),t1=o(10729),t2=o(89723),t8=o(5269),t4=o(27051);let t3=(0,u.AH)`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: transparent;
  }
`,t6=({knowledgeBaseId:e})=>{let{t}=(0,g.Bd)("file"),[o,n]=(0,r.useState)(!1),a=(0,f.x)(e=>e.pushDockFileList),l=()=>{n(!0)},d=()=>{n(!1)},s=(0,r.useMemo)(()=>[{icon:(0,i.Y)(N.default,{icon:t0.A}),key:"create-note",label:t("header.actions.newPage"),onClick:l},{icon:(0,i.Y)(N.default,{icon:t1.A}),key:"create-folder",label:t("header.actions.newFolder"),onClick:d},{type:"divider"},{icon:(0,i.Y)(N.default,{icon:t2.A}),key:"upload-file",label:(0,i.Y)(ei.A,{beforeUpload:async t=>(await a([t],e),!1),multiple:!0,showUploadList:!1,children:(0,i.Y)("div",{className:(0,u.cx)(t3),children:t("header.actions.uploadFile")})})},{icon:(0,i.Y)(N.default,{icon:t8.A}),key:"upload-folder",label:(0,i.Y)(ei.A,{beforeUpload:async t=>(await a([t],e),!1),directory:!0,multiple:!0,showUploadList:!1,children:(0,i.Y)("div",{className:(0,u.cx)(t3),children:t("header.actions.uploadFolder")})})}],[e,a]);return(0,i.FD)(i.FK,{children:[(0,i.Y)(T.A,{menu:{items:s},placement:"bottomRight",children:(0,i.Y)($.A,{icon:p.A,type:"primary",children:t("addKnowledge")})}),(0,i.Y)(t4.A,{enabledFiles:!0,onUploadFiles:t=>a(t,e)}),(0,i.Y)(tv,{knowledgeBaseId:e,onClose:()=>{n(!1)},open:o})]})};var t7=o(42897),t5=o(23047);let t9=(0,r.memo)(({mobile:e})=>{let{t}=(0,g.Bd)("file"),o=(0,Z.k)(t7.w0.getHotkeyById(t5.g8.Search)),[n,a]=(0,r.useState)(""),[l,d]=(0,eS.ZA)("q",{clearOnDefault:!0});return(0,r.useEffect)(()=>{a(l||"")},[l]),(0,i.Y)(s.A,{allowClear:!0,enableShortKey:!e,onChange:e=>{a(e.target.value),e.target.value||d(null)},onPressEnter:()=>d(n),placeholder:t("searchFilePlaceholder"),shortKey:o,spotlight:!e,style:{width:320},value:n,variant:"filled"})}),oe=(0,r.memo)(({knowledgeBaseId:e})=>(0,i.Y)(tJ.A,{left:(0,i.Y)(t9,{}),right:(0,i.Y)(t6,{knowledgeBaseId:e}),styles:{left:{padding:0}}}));var ot=o(7481),oo=o(86074);let oi=(0,u.rU)(({css:e,token:t})=>({card:e`
    cursor: pointer;
    user-select: none;

    position: relative;

    overflow: hidden;
    flex-shrink: 0;

    width: 280px;
    height: 180px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorBgContainer};

    transition: all ${t.motionDurationMid};

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: ${t.boxShadowTertiary};
    }
  `,noteContent:e`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;

    height: 100%;
    padding: 12px;
  `,notePreview:e`
    overflow: hidden;
    display: -webkit-box;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    font-size: 13px;
    line-height: 1.6;
    color: ${t.colorTextSecondary};
  `,noteTitle:e`
    overflow: hidden;

    font-size: 14px;
    font-weight: ${t.fontWeightStrong};
    line-height: 1.4;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),on=(0,r.memo)(({document:e,onClick:t})=>{let{styles:o}=oi(),n=e.name||"",a=(e=>{if(!e.content)return"";let t=(0,tN.Ay)(e.content),o=(e=>{if(!e)return null;let t=e.match(/^#\s+(.+)$/m);return t?t[1].trim():null})(e.content);return o&&(t=t.replace(o,"").trim()),t.slice(0,200)})(e),r=e.metadata?.emoji;return(0,i.Y)("div",{className:o.card,onClick:t,role:"button",tabIndex:0,children:(0,i.FD)("div",{className:o.noteContent,children:[(0,i.FD)("div",{style:{alignItems:"center",display:"flex",gap:8},children:[r&&(0,i.Y)("span",{style:{fontSize:20},children:r}),(0,i.Y)("div",{className:o.noteTitle,children:n})]}),a&&(0,i.Y)("div",{className:o.notePreview,children:a})]})})}),oa=(0,u.rU)(({css:e,token:t})=>({card:e`
    flex-shrink: 0;

    width: 280px;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorBgContainer};
  `,container:e`
    position: relative;
    overflow: hidden;
  `,fadeEdge:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0 0;
    inset-inline-end: 0;

    width: 80px;

    background: linear-gradient(to left, ${t.colorBgLayout}, transparent);
  `,previewSkeleton:e`
    width: 100%;
    height: 160px;
    margin-block-end: 12px;
    border-radius: ${t.borderRadius}px;

    background: ${t.colorFillQuaternary};
  `,scrollContainer:e`
    /* Hide scrollbar */
    scrollbar-width: none;

    overflow-x: auto;
    display: flex;
    gap: 16px;

    padding-block-end: 8px;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `})),or=(0,r.memo)(()=>{let{styles:e}=oa();return(0,i.FD)("div",{className:e.container,children:[(0,i.Y)("div",{className:e.scrollContainer,children:Array.from({length:10}).map((t,o)=>(0,i.FD)(l.Flexbox,{className:e.card,gap:12,children:[(0,i.Y)("div",{className:e.previewSkeleton}),(0,i.FD)(l.Flexbox,{gap:6,children:[(0,i.Y)(ey.A,{active:!0,paragraph:!1,title:{width:"90%"}}),(0,i.Y)(ey.A,{active:!0,paragraph:!1,title:{style:{height:12},width:"70%"}})]})]},o))}),(0,i.Y)("div",{className:e.fadeEdge})]})}),ol=(0,u.rU)(({css:e,token:t})=>({container:e`
    position: relative;
    overflow: hidden;
  `,fadeEdge:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0 0;
    inset-inline-end: 0;

    width: 80px;

    background: linear-gradient(to left, ${t.colorBgContainerSecondary}, transparent);
  `,scrollContainer:e`
    scroll-behavior: smooth;

    /* Hide scrollbar */
    scrollbar-width: none;

    overflow: auto hidden;
    display: flex;
    gap: 16px;

    padding-block-end: 8px;
    padding-inline-end: 80px;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `})),od=(0,r.memo)(({documents:e,isLoading:t,onOpenDocument:o})=>{let{styles:n}=ol();return t?(0,i.Y)(or,{}):(0,i.FD)("div",{className:n.container,children:[(0,i.Y)("div",{className:n.scrollContainer,children:e.map(e=>(0,i.Y)(on,{document:e,onClick:()=>o(e.id)},e.id))}),(0,i.Y)("div",{className:n.fadeEdge})]})});var os=o(8055);let oc=new Set(["image/png","image/jpeg","image/jpg","image/gif","image/webp","image/svg+xml"]),ou=(0,u.rU)(({css:e,token:t})=>({card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;
    flex-shrink: 0;

    width: 280px;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;

    background: ${t.colorBgContainer};

    transition: all ${t.motionDurationMid};

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: ${t.boxShadowTertiary};
    }
  `,iconWrapper:e`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 160px;
    margin-block-end: 12px;
    border-radius: ${t.borderRadius}px;

    background: ${t.colorBgLayout};
  `,imagePreview:e`
    width: 100%;
    height: 160px;
    margin-block-end: 12px;
    border-radius: ${t.borderRadius}px;

    object-fit: cover;
    background: ${t.colorBgLayout};
  `,info:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,title:e`
    margin: 0 !important;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  `})),op=(0,r.memo)(({file:e,onClick:t})=>{let{styles:o}=ou(),a=oc.has(e.fileType),r=P()(e.updatedAt).fromNow();return(0,i.Y)("div",{className:o.card,onClick:t,role:"button",tabIndex:0,children:(0,i.FD)(l.Flexbox,{gap:12,style:{position:"relative"},children:[a&&e.url?(0,i.Y)(os.A,{alt:e.name,className:o.imagePreview,preview:!1,src:e.url}):(0,i.Y)("div",{className:o.iconWrapper,children:(0,i.Y)(eP.A,{fileName:e.name,fileType:e.fileType,size:48})}),(0,i.FD)(l.Flexbox,{gap:6,style:{overflow:"hidden",position:"relative"},children:[(0,i.Y)(n.A,{className:o.title,ellipsis:{rows:2},children:e.name}),(0,i.FD)(l.Flexbox,{className:o.info,gap:8,horizontal:!0,children:[(0,i.Y)("span",{children:r}),(0,i.Y)("span",{children:"•"}),(0,i.Y)("span",{children:(0,eM.Xq)(e.size)})]})]})]})})}),og=(0,u.rU)(({css:e,token:t})=>({container:e`
    position: relative;
    overflow: hidden;
  `,fadeEdge:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0 0;
    inset-inline-end: 0;

    width: 80px;

    background: linear-gradient(to left, ${t.colorBgContainerSecondary}, transparent);
  `,scrollContainer:e`
    scroll-behavior: smooth;

    /* Hide scrollbar */
    scrollbar-width: none;

    overflow: auto hidden;
    display: flex;
    gap: 16px;

    padding-block-end: 8px;
    padding-inline-end: 80px;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `})),om=(0,r.memo)(({files:e,isLoading:t,onOpenFile:o})=>{let{styles:n}=og();return t?(0,i.Y)(or,{}):(0,i.FD)("div",{className:n.container,children:[(0,i.Y)("div",{className:n.scrollContainer,children:e.map(e=>(0,i.Y)(op,{file:e,onClick:()=>o(e.id)},e.id))}),(0,i.Y)("div",{className:n.fadeEdge})]})}),oh=(0,u.rU)(({css:e,token:t})=>({actionTitle:e`
    margin-block-start: 12px;
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    min-height: 120px;
    padding: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG}px;

    font-weight: 500;
    text-align: center;

    background: ${t.colorBgContainer};

    transition: all ${t.motionDurationMid} ${t.motionEaseInOut};

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: ${t.boxShadowTertiary};
    }
  `,glow:e`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.3;
    filter: blur(24px);
  `,grid:e`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: left;
  `,icon:e`
    position: absolute;
    z-index: 1;
    inset-block-end: -16px;
    inset-inline-end: 8px;

    flex: none;
  `,uploadWrapper:e`
    /* Make the wrapper transparent so hover passes through to the card */
    & > span {
      display: block;
    }
  `})),of=(0,r.memo)(({knowledgeBaseId:e})=>{let{t}=(0,g.Bd)("file"),o=(0,u.DP)(),{styles:n}=oh(),a=(0,eL.Zp)(),r=(0,f.x)(e=>e.createDocument),d=(0,f.x)(e=>e.pushDockFileList),s=async()=>{try{let o=await r({content:"",knowledgeBaseId:e,title:t("home.uploadEntries.newPage.title")});a(`/${o.id}`)}catch(e){console.error("Failed to create document:",e)}},c=async t=>{try{await d([t],e)}catch(e){console.error("Failed to upload file:",e)}return!1},m=async t=>{try{await d([t],e)}catch(e){console.error("Failed to upload folder:",e)}return!1};return(0,i.FD)("div",{className:n.grid,children:[(0,i.FD)(l.Flexbox,{className:n.card,onClick:s,padding:16,children:[(0,i.Y)("span",{className:n.actionTitle,children:t("home.uploadEntries.newPage.title")}),(0,i.Y)("div",{className:n.glow,style:{background:o.purple}}),(0,i.Y)(eo.A,{className:n.icon,color:o.purple,icon:(0,i.Y)(N.default,{color:"#fff",icon:p.A}),size:64,type:"file"})]}),(0,i.Y)(ei.A,{beforeUpload:c,className:n.uploadWrapper,multiple:!0,showUploadList:!1,children:(0,i.FD)(l.Flexbox,{className:n.card,padding:16,children:[(0,i.Y)("span",{className:n.actionTitle,children:t("home.uploadEntries.files.title")}),(0,i.Y)("div",{className:n.glow,style:{background:o.geekblue}}),(0,i.Y)(eo.A,{className:n.icon,color:o.geekblue,icon:(0,i.Y)(N.default,{color:"#fff",icon:en.A}),size:64,type:"file"})]})}),(0,i.Y)(ei.A,{beforeUpload:m,className:n.uploadWrapper,directory:!0,multiple:!0,showUploadList:!1,children:(0,i.FD)(l.Flexbox,{className:n.card,padding:16,children:[(0,i.Y)("span",{className:n.actionTitle,children:t("home.uploadEntries.folder.title")}),(0,i.Y)("div",{className:n.glow,style:{background:o.green}}),(0,i.Y)(eo.A,{className:n.icon,color:o.green,icon:(0,i.Y)(N.default,{color:"#fff",icon:t8.A}),size:64,type:"file"})]})})]})}),ox=(0,u.rU)(({css:e,token:t})=>({container:e`
    padding-block: 20px 48px;
    padding-inline: 24px;
  `,content:e`
    width: 100%;
    max-width: 1200px;
    margin-block: 0;
    margin-inline: auto;
  `,greeting:e`
    font-size: 24px;
    font-weight: 600;
    color: ${t.colorText};
    text-align: start;
  `,section:e`
    margin-block: 6px 36px;
  `,sectionActions:e`
    transition: opacity ${t.motionDurationMid} ${t.motionEaseInOut};
  `,sectionTitle:e`
    display: flex;
    gap: 8px;
    align-items: center;

    margin-block-end: 24px;

    font-size: 18px;
    font-weight: 600;
    color: ${t.colorTextSecondary};
    text-align: start;
  `,sectionTitleWrapper:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 36px;
    margin-block-end: 24px;
  `})),ob=(0,r.memo)(({knowledgeBaseId:e,onOpenFile:t})=>{let{t:o}=(0,g.Bd)("file"),{styles:a}=ox(),s=(0,eL.Zp)(),[,u]=(0,oo.W)(),[p,m]=(0,r.useState)(!1),[h,x]=(0,r.useState)(!1),[b,y]=(0,r.useState)(!1),[w,k]=(0,r.useState)(!1),{data:v,isLoading:F}=(0,f.x)(e=>e.useFetchKnowledgeItems)({category:d._K.All,knowledgeBaseId:e,sortType:"desc",sorter:"createdAt"}),Y=(0,r.useMemo)(()=>v?v.filter(e=>"file"===e.sourceType).slice(0,10):[],[v]),A=(0,r.useMemo)(()=>v?v.filter(e=>"document"===e.sourceType).slice(0,10):[],[v]);return(0,i.Y)("div",{className:a.container,children:(0,i.FD)(l.Flexbox,{className:a.content,children:[(0,i.Y)(l.Flexbox,{className:a.section,children:(0,i.Y)(n.A,{className:a.greeting,children:o("home.greeting")})}),(0,i.Y)(l.Flexbox,{className:a.section,children:(0,i.Y)(of,{knowledgeBaseId:e})}),(F||Y.length>0)&&(0,i.FD)("div",{className:a.section,onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)},children:[(0,i.FD)("div",{className:a.sectionTitleWrapper,children:[(0,i.FD)(n.A,{className:a.sectionTitle,style:{marginBottom:0},children:[(0,i.Y)(ot.A,{size:18}),o("home.recentFiles")]}),(0,i.Y)("div",{className:a.sectionActions,style:{opacity:w||b?1:0},children:(0,i.Y)(T.A,{menu:{items:[{key:"all-files",label:o("menu.allFiles"),onClick:()=>{u(d._K.All)}}]},onOpenChange:y,open:b,children:(0,i.Y)(c.A,{icon:ec.A,size:"small"})})})]}),(0,i.Y)(om,{files:Y,isLoading:F,onOpenFile:t})]}),(F||A.length>0)&&(0,i.FD)("div",{className:a.section,onMouseEnter:()=>{x(!0)},onMouseLeave:()=>{x(!1)},children:[(0,i.FD)("div",{className:a.sectionTitleWrapper,children:[(0,i.FD)(n.A,{className:a.sectionTitle,style:{marginBottom:0},children:[(0,i.Y)(R.A,{size:18}),o("home.recentPages")]}),(0,i.Y)("div",{className:a.sectionActions,style:{opacity:h||p?1:0},children:(0,i.Y)(T.A,{menu:{items:[{key:"all-documents",label:o("menu.allPages"),onClick:()=>{u(d._K.Pages)}}]},onOpenChange:m,open:p,children:(0,i.Y)(c.A,{icon:ec.A,size:"small"})})})]}),(0,i.Y)(od,{documents:A,isLoading:F,onOpenDocument:e=>{s(`/${e}`)}})]})]})})});var oy=o(49602),ow=o(86506),ok=o(31021),ov=o.n(ok),oF=o(66700),oY=o(91951),oA=o(50340);let oD=(0,u.rU)(({css:e,token:t})=>({progress:e`
      position: absolute;
      inset-block: 0 0;
      inset-inline: 0 1%;

      height: 100%;
      border-block-end: 3px solid ${t.geekblue};

      background: ${t.colorFillTertiary};
    `,title:e`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      font-size: 15px;
      text-overflow: ellipsis;
    `})),oS=(0,r.memo)(({file:e,status:t,uploadState:o})=>{let{t:a}=(0,g.Bd)("file"),{styles:d}=oD(),{type:s,name:c,size:u}=e,p=(0,r.useMemo)(()=>{switch(t){case"uploading":{let e=[o?.speed?(0,eM.DB)(o.speed):"",o?.restTime?a("uploadDock.body.item.restTime",{time:(0,eM.fU)(o?.restTime)}):""].filter(Boolean);return(0,i.FD)(n.A,{style:{fontSize:12},type:"secondary",children:[o?.progress?(0,eM.Xq)(u*(o.progress/100)):"-","/",(0,eM.Xq)(u),0===e.length?"":" \xb7 "+e.join(" \xb7 ")]})}case"pending":return(0,i.FD)(n.A,{style:{fontSize:12},type:"secondary",children:[(0,eM.Xq)(u)," \xb7 ",a("uploadDock.body.item.pending")]});case"processing":return(0,i.FD)(n.A,{style:{fontSize:12},type:"secondary",children:[(0,eM.Xq)(u)," \xb7 ",a("uploadDock.body.item.processing")]});case"success":return(0,i.FD)(n.A,{style:{fontSize:12},type:"secondary",children:[(0,eM.Xq)(u)," \xb7 ",a("uploadDock.body.item.done")]});case"error":return(0,i.FD)(n.A,{style:{fontSize:12},type:"danger",children:[(0,eM.Xq)(u)," \xb7 ",a("uploadDock.body.item.error")]});default:return""}},[t,o]);return(0,i.FD)(l.Flexbox,{align:"center",gap:4,horizontal:!0,paddingBlock:8,paddingInline:12,style:{position:"relative"},children:[(0,i.Y)(eP.A,{fileName:c,fileType:s}),(0,i.FD)(l.Flexbox,{style:{overflow:"hidden"},children:[(0,i.Y)("div",{className:d.title,children:c}),p]}),"uploading"===t&&!!o&&(0,i.Y)("div",{className:d.progress,style:{insetInlineEnd:`${100-o.progress}%`}})]},c)}),oC=(0,u.rU)(({css:e,token:t})=>{var o,i;let n,a,r,l,d;return{body:e`
      height: 400px;
      border-radius: 8px;
      background: ${(0,eD.a)(.05,t.colorBgLayout)};
    `,container:e`
      position: fixed;
      z-index: 100;
      inset-block-end: 24px;
      inset-inline-end: 24px;

      overflow: hidden;

      width: 360px;
      border: 1px solid ${t.colorSplit};
      border-radius: 8px;

      box-shadow: ${t.boxShadow};
    `,header:e`
      cursor: pointer;

      padding-block: 8px;
      padding-inline: 24px 12px;
      border-radius: 8px;

      background: ${t.colorBgContainer};

      transition: all 0.3s ease-in-out;

      &:hover {
        background: ${o=t.colorFillTertiary,i=t.colorBgContainer,n=(0,oA.Ay)(o),a=(0,oA.Ay)(i),l=1-(r=n.alpha()),d=[n.get("rgb.r")*r+a.get("rgb.r")*l,n.get("rgb.g")*r+a.get("rgb.g")*l,n.get("rgb.b")*r+a.get("rgb.b")*l],(0,oA.Ay)(d).hex()};
      }
    `,progress:e`
      pointer-events: none;

      position: absolute;
      inset-block: 0 0;
      inset-inline: 0 1%;

      height: 100%;
      border-block-end: 3px solid ${t.geekblue};

      background: ${t.colorFillTertiary};
    `,title:e`
      height: 36px;
      font-size: 16px;
      color: ${t.colorText};
    `}}),oB=(0,r.memo)(()=>{let{styles:e,theme:t}=oC(),{t:o}=(0,g.Bd)("file"),[a,d]=(0,r.useState)(!0),[s,u]=(0,r.useState)(!0),p=(0,f.x)(e=>e.dispatchDockFileList),h=(0,f.x)(eI.S.overviewUploadingProgress),x=(0,f.x)(eI.S.dockFileList,ov()),b=(0,f.x)(eI.S.overviewUploadingStatus,ov()),y="uploading"===b,w=(0,r.useMemo)(()=>{switch(b){case"success":return(0,i.Y)(oy.A,{style:{color:t.colorSuccess}});case"error":return(0,i.Y)(ow.A,{style:{color:t.colorError}});default:return(0,i.Y)(N.default,{icon:oF.A})}},[b]),k=x.length;if((0,r.useEffect)(()=>{!s&&y&&u(!0)},[y,s]),0!==k&&s)return(0,i.FD)(l.Flexbox,{className:e.container,children:[(0,i.FD)(l.Flexbox,{align:"center",className:e.header,horizontal:!0,justify:"space-between",onClick:()=>{d(!a)},style:{borderBottom:a?`1px solid ${t.colorSplit}`:void 0,borderBottomLeftRadius:a?0:void 0,borderBottomRightRadius:a?0:void 0},children:[(0,i.FD)(l.Flexbox,{align:"center",className:e.title,gap:16,horizontal:!0,children:[w,o(`uploadDock.uploadStatus.${b}`)," \xb7"," ",o("uploadDock.totalCount",{count:k})]}),!y&&(0,i.Y)(c.A,{icon:oY.A,onClick:()=>{u(!1),p({ids:x.map(e=>e.id),type:"removeFiles"})}})]}),a?(0,i.FD)(l.Flexbox,{className:e.body,justify:"space-between",children:[(0,i.Y)(l.Flexbox,{gap:8,paddingBlock:16,style:{overflowY:"scroll"},children:x.map(e=>(0,i.Y)(oS,{...e},e.id))}),(0,i.Y)(m.default,{style:{height:40,minHeight:40},children:(0,i.Y)(n.A,{onClick:()=>{d(!1)},style:{cursor:"pointer"},type:"secondary",children:o("uploadDock.body.collapse")})})]}):"pending"!==b&&(0,i.Y)("div",{className:e.progress,style:{borderColor:"success"===b?t.colorSuccess:"error"===b?t.colorError:void 0,insetInlineEnd:`${100-h}%`}})]})}),oN=(0,a.default)(()=>o.e(28454).then(o.bind(o,6073)),{loadableGenerated:{webpack:()=>[6073]},ssr:!1}),oT=(0,r.memo)(({title:e,knowledgeBaseId:t,category:o,onOpenFile:a,documentId:r})=>{let s=o===d._K.Pages;return o===d._K.Home?(0,i.FD)(i.FK,{children:[(0,i.Y)(ob,{knowledgeBaseId:t,onOpenFile:a}),(0,i.Y)(oB,{}),(0,i.Y)(oN,{})]}):(0,i.FD)(i.FK,{children:[!s&&(0,i.Y)(oe,{knowledgeBaseId:t}),(0,i.FD)(l.Flexbox,{gap:12,height:"100%",children:[!s&&(0,i.Y)(n.A,{strong:!0,style:{fontSize:16,marginBlock:16,marginInline:24},children:e}),s?(0,i.Y)(eY,{documentId:r,knowledgeBaseId:t}):(0,i.Y)(tZ,{category:o,knowledgeBaseId:t,onOpenFile:a})]}),(0,i.Y)(oB,{}),(0,i.Y)(oN,{})]})})}}]);