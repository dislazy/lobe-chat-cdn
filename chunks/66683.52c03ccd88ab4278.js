"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66683],{4639:(e,t,r)=>{r.d(t,{s:()=>i});var a=r(77605);class o{constructor(){this.exportData=async()=>await a.du.exporter.exportData.mutate()}}let i=new o},66683:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var a=r(28802),o=r(43588),i=r(15447),n=r(12389),l=r(58244),s=r(31021),p=r.n(s),d=r(34904),c=r(73777),x=r(83034),u=r(59121),g=r(49935),h=r(99061),m=r(78183),$=r(74551),b=r(32901),f=r(2644),w=r.n(f),y=r(4639);class S{constructor(){this.exportAll=async()=>{let{data:e,url:t}=await y.s.exportData(),r=`${w()().format("YYYY-MM-DD-hh-mm")}_${$.Se}-data.json`;if(t)return void await (0,b.PE)(t,r);let a=await this.createDataStructure(e,"postgres");(0,b.Vz)(a,r)},this.createDataStructure=async(e,t)=>{let{default:a}=await r.e(81351).then(r.t.bind(r,81351,19)),o=a.at(-1)?.hash;if(!o)throw Error("Not find database sql hash");return{data:e,mode:t,schemaHash:o}}}}let Y=new S;var D=r(17068),A=r(56003),I=r(64811),k=r(74038),F=r(38759),C=r(42897);let v=()=>{let{t:e}=(0,u.Bd)("setting"),[t]=o.Ay.useForm(),{message:r,modal:s}=l.A.useApp(),[$,b]=(0,I.B)(e=>[e.clearSessions,e.clearSessionGroups]),[f,w]=(0,D.L)(e=>[e.removeAllTopics,e.clearAllMessages]),[y]=(0,A.x)(e=>[e.removeAllFiles]),S=(0,k.j)(e=>e.removeAllPlugins),v=(0,F.k)(C.w0.currentSettings,p()),[M]=(0,F.k)(e=>[e.resetSettings]),B=(0,x.useCallback)(()=>{s.confirm({centered:!0,okButtonProps:{danger:!0},onOk:async()=>{await $(),await S(),await f(),await y(),await w(),await b(),r.success(e("danger.clear.success"))},title:e("danger.clear.confirm")})},[]),z=(0,x.useCallback)(()=>{s.confirm({centered:!0,okButtonProps:{danger:!0},onOk:()=>{M(),t.setFieldsValue(h.a$),r.success(e("danger.reset.success"))},title:e("danger.reset.confirm")})},[]),E={children:[{children:(0,a.Y)(m.A,{children:(0,a.Y)(i.A,{icon:(0,a.Y)(n.default,{icon:d.A}),children:e("storage.actions.import.button")})}),label:e("storage.actions.import.title"),layout:"horizontal",minWidth:void 0},{children:(0,a.Y)(i.A,{icon:(0,a.Y)(n.default,{icon:c.A}),onClick:()=>{Y.exportAll()},children:e("storage.actions.export.button")}),label:e("storage.actions.export.title"),layout:"horizontal",minWidth:void 0},{children:(0,a.Y)(i.A,{danger:!0,onClick:B,type:"primary",children:e("danger.clear.action")}),desc:e("danger.clear.desc"),label:e("danger.clear.title"),layout:"horizontal",minWidth:void 0},{children:(0,a.Y)(i.A,{danger:!0,onClick:z,type:"primary",children:e("danger.reset.action")}),desc:e("danger.reset.desc"),label:e("danger.reset.title"),layout:"horizontal",minWidth:void 0}],title:e("storage.actions.title")};return(0,a.Y)(o.Ay,{form:t,initialValues:v,items:[E],itemsType:"group",variant:"borderless",...g.pC})},M=()=>(0,a.Y)(v,{})},78183:(e,t,r)=>{r.d(t,{A:()=>ea});var a=r(28802),o=r(22309),i=r(49615),n=r(11577),l=r(74672),s=r(83034),p=r(59121),d=r(20480),c=r(29703),x=r(12389),u=r(3779),g=r(80457);let h=(0,n.rU)(({css:e,token:t,prefixCls:r,isDarkMode:a})=>({modalTitle:e`
    &.${r}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          ${(0,u.B3)(t.colorBgElevated,0)},
          ${t.colorBgContainer} ${a?"80":"140"}px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${r}-modal-title {
      font-size: 24px;
    }
  `})),m=(0,s.memo)(({icon:e,onOpenChange:t,title:r,open:o,children:i,width:n=550,height:l})=>{let{styles:s}=h();return(0,a.Y)(c.A,{afterOpenChange:t,centered:!0,classNames:{header:s.modalTitle},closable:!1,footer:null,height:l,open:o,title:(0,a.FD)(g.Flexbox,{gap:8,horizontal:!0,children:[(0,a.Y)(x.default,{icon:e}),r]}),width:n,children:i})});var $=r(77605),b=r(87050),f=r(38759),w=r(96871),y=r(46322);class S{constructor(){this.importSettings=async e=>{await f.k.getState().importAppSettings(e)},this.importData=async(e,t)=>{let r=e=>{t?.onStageChange?.(w.I.Error),t?.onError?.({code:e.data.code,httpStatus:e.data.httpStatus,message:e.message,path:e.data.path})};if((e.messages?.length||0)+(e.sessionGroups?.length||0)+(e.sessions?.length||0)+(e.topics?.length||0)<500){t?.onStageChange?.(w.I.Importing);let a=Date.now();try{let r=await $.du.importer.importByPost.mutate({data:e}),o=Date.now()-a;t?.onStageChange?.(w.I.Success),t?.onSuccess?.(r.results,o)}catch(e){r(e)}return}await this.uploadData(e,{callbacks:t,handleError:r})},this.importPgData=async(e,t)=>{let{callbacks:r}=t||{},a=e=>{r?.onStageChange?.(w.I.Error),r?.onError?.({code:e.data.code,httpStatus:e.data.httpStatus,message:e.message,path:e.data.path})};if(500>Object.values(e.data).map(e=>e.length).reduce((e,t)=>e+t,0)){r?.onStageChange?.(w.I.Importing);let t=Date.now();try{let a=await $.du.importer.importPgByPost.mutate(e),o=Date.now()-t;r?.onStageChange?.(w.I.Success),r?.onSuccess?.(a.results,o)}catch(e){a(e)}return}await this.uploadData(e,{callbacks:r,handleError:a})},this.uploadData=async(e,{callbacks:t,handleError:r})=>{let a,o=`${(0,y.uR)()}.json`;try{t?.onStageChange?.(w.I.Uploading),a=(await b.z.uploadDataToS3(e,{filename:o,onProgress:(e,r)=>{t?.onFileUploading?.(r)},pathname:`import_config/${o}`})).data.path,console.log(a)}catch{throw Error("Upload Error")}t?.onStageChange?.(w.I.Importing);let i=Date.now();try{let e=await $.du.importer.importByFile.mutate({pathname:a}),r=Date.now()-i;t?.onStageChange?.(w.I.Success),t?.onSuccess?.(e.results,r)}catch(e){r(e)}}}}let Y=new S;var D=r(17068),A=r(64811),I=r(80122),k=r(91888),F=r(15447),C=r(38141),v=r(74567),M=r(51997),B=r.n(M),z=r(19913),E=r(45628),P=r(89196),N=r(4001);class T{constructor(){this.submitDBV1UpgradeError=(e,t)=>{let r=["```json",JSON.stringify(t,null,2),"```"].join("\n"),a=t?.message||"",o=P.A.stringifyUrl({query:{body:r,labels:"❌ Database Migration Error",title:`[Migration Error V${e}] ${a}`},url:(0,N.A)(E.U0,"/issues/new")});window.open(o,"_blank")},this.submitImportError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join("\n"),r=e?.message||"",a=P.A.stringifyUrl({query:{body:t,labels:"❌ Import Config Error",title:`[Config Import Error] ${r}`},url:(0,N.A)(E.U0,"/issues/new")});window.open(a,"_blank")},this.submitPgliteInitError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join("\n"),r=e?.message||"",a=P.A.stringifyUrl({query:{body:t,labels:"❌ Database Init Error",title:`[Database Init Error] ${r}`},url:(0,N.A)(E.U0,"/issues/new")});window.open(a,"_blank")}}}let U=new T,j=(0,s.memo)(({error:e,onClick:t})=>{let{t:r}=(0,p.Bd)("common");return(0,a.Y)(C.Ay,{extra:(0,a.FD)(g.Flexbox,{gap:12,style:{textAlign:"start"},children:[(0,a.Y)(I.A,{extra:(0,a.Y)(k.A,{actionIconSize:"small",language:"json",children:JSON.stringify(e,null,2)}),message:e?.message,style:{flex:1},type:"error"}),(0,a.Y)(F.A,{onClick:t,children:r("close")})]}),icon:(0,a.Y)(x.default,{icon:v.A}),status:"error",style:{paddingBlock:24,width:450},subTitle:(0,a.Y)(z.Ay,{children:(0,a.FD)(p.x6,{i18nKey:"importModal.error.desc",ns:"common",children:["非常抱歉，数据库升级过程发生异常。请重试升级，或",(0,a.Y)(B(),{"aria-label":"issue",href:E.ve,onClick:t=>{t.preventDefault(),U.submitImportError(e)},target:"_blank",children:"提交问题"}),"我们将会第一时间帮你排查问题。"]})}),title:r("importModal.error.title")})});var O=r(97721),W=r(9402);let _=(0,n.rU)(({css:e,token:t})=>({loader:e`
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
    `})),J=(0,s.memo)(()=>{let{styles:e}=_();return(0,a.Y)(d.default,{style:{height:80},children:(0,a.Y)("div",{className:e.loader})})}),K=(0,s.memo)(({progress:e=0,speed:t=0,restTime:r})=>{let{t:o}=(0,p.Bd)("common"),i=(0,n.DP)();return(0,a.FD)(a.FK,{children:[(0,a.Y)(J,{}),(0,a.FD)(g.Flexbox,{align:"center",gap:8,width:"100%",children:[o("importModal.uploading.desc"),(0,a.FD)(g.Flexbox,{flex:1,gap:8,width:"100%",children:[(0,a.Y)(O.A,{percent:e,showInfo:!0,strokeColor:i.colorSuccess,trailColor:i.colorSuccessBg}),(0,a.FD)(g.Flexbox,{distribution:"space-between",horizontal:!0,style:{color:i.colorTextDescription,fontSize:12},children:[(0,a.FD)("span",{children:[o("importModal.uploading.restTime"),": ",r?(0,W.fU)(r):"-"]}),(0,a.FD)("span",{children:[o("importModal.uploading.speed"),": ",(0,W.DB)(1024*t)]})]})]})]})]})});var L=r(75431),V=r(51053),q=r(40697);let G=(0,n.rU)(({token:e,css:t})=>({duplicateAlert:t`
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
    `})),R=({open:e=!0,onOpenChange:t=()=>{},onConfirm:r=()=>{},onCancel:o=()=>{},importData:i})=>{let{t:n}=(0,p.Bd)("common"),{styles:l}=G(),[d]=(0,s.useState)("skip"),x=(e=>{let t=[];for(let[r,a]of Object.entries(e.data))Array.isArray(a)&&a.length>0&&t.push({count:a.length,name:r});return t})(i),u=x.reduce((e,t)=>e+t.count,0),h=[{dataIndex:"name",key:"name",render:e=>(0,a.Y)("div",{className:l.tableName,children:e}),title:n("importPreview.tables.name")},{dataIndex:"count",key:"count",title:n("importPreview.tables.count")}];return(0,a.Y)(c.A,{footer:[(0,a.Y)(F.A,{onClick:()=>{t(!1),o()},children:n("cancel")},"cancel"),(0,a.Y)(F.A,{onClick:()=>{r("overwrite"===d),t(!1)},type:"primary",children:n("importPreview.confirmImport")},"confirm")],onCancel:()=>t(!1),open:e,title:n("importPreview.title"),width:700,children:(0,a.Y)("div",{className:l.modalContent,children:(0,a.FD)(g.Flexbox,{gap:16,children:[(0,a.FD)(g.Flexbox,{gap:4,children:[(0,a.FD)(g.Flexbox,{align:"center",horizontal:!0,justify:"space-between",width:"100%",children:[(0,a.FD)(g.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,a.Y)(q.A,{className:l.infoIcon,size:16}),(0,a.Y)(L.A,{strong:!0,children:n("importPreview.totalRecords",{count:u})})]}),(0,a.Y)(g.Flexbox,{horizontal:!0,children:(0,a.Y)(L.A,{type:"secondary",children:n("importPreview.totalTables",{count:x.length})})})]}),(0,a.FD)(g.Flexbox,{className:l.hash,gap:4,horizontal:!0,children:["Hash: ",(0,a.Y)("span",{children:i.schemaHash})]})]}),(0,a.Y)("div",{className:l.tableContainer,children:(0,a.Y)(V.A,{columns:h,dataSource:x,pagination:!1,rowKey:"name",scroll:{y:350},size:"small"})})]})})})};var H=r(81671);let X=(0,n.rU)(({token:e,css:t})=>({zeroCell:t`
      color: ${e.colorTextQuaternary};
    `})),Q=(0,s.memo)(({duration:e,dataSource:t,onClickFinish:r})=>{let{t:o}=(0,p.Bd)("common"),{styles:i}=X(),n=e=>e||(0,a.Y)("span",{className:i.zeroCell,children:"0"});return(0,a.Y)(C.Ay,{extra:(0,a.Y)(F.A,{onClick:r,size:"large",type:"primary",children:o("importModal.finish.start")}),icon:(0,a.Y)(x.default,{icon:H.A}),status:"success",style:{paddingBlock:24,paddingInline:0},subTitle:t?(0,a.FD)(g.Flexbox,{gap:16,width:500,children:[o("importModal.finish.subTitle",{duration:(e/1e3).toFixed(2)}),(0,a.Y)(V.A,{bordered:!0,columns:[{dataIndex:"title",render:n,title:o("importModal.result.type")},{dataIndex:"added",render:n,title:o("importModal.result.added")},{dataIndex:"skips",render:n,title:o("importModal.result.skips")},{dataIndex:"error",render:n,title:o("importModal.result.errors")},{dataIndex:"updated",render:n,title:o("importModal.result.update")}],dataSource:t,pagination:!1,rowKey:"title",size:"small"})]}):o("importModal.finish.onlySettings"),title:o("importModal.finish.title")})});var Z=r(96987),ee=r(29914);let et=async e=>{let t=await e.text();try{return JSON.parse(t)}catch(e){console.error(e),ee.Ew.error({description:(0,Z.t)("import.importConfigFile.description",{ns:"error",reason:e.message}),message:(0,Z.t)("import.importConfigFile.title",{ns:"error"})})}},er=(0,n.rU)(({css:e})=>({children:e`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `,wrapper:e`
    font-size: inherit;
  `})),ea=(0,s.memo)(({children:e,onFinishImport:t})=>{let{t:r}=(0,p.Bd)("common"),{styles:n}=er(),c=(0,A.B)(e=>e.refreshSessions),[x,u]=(0,D.L)(e=>[e.refreshMessages,e.refreshTopic]),[g,h]=(0,s.useState)(0),[$,b]=(0,s.useState)(o.Io.Start),[f,w]=(0,s.useState)(),[y,S]=(0,s.useState)(),[I,k]=(0,s.useState)(),[F,C]=(0,s.useState)(!1),[v,M]=(0,s.useState)(void 0),B=(0,s.useMemo)(()=>{if(!I)return;let{type:e,...t}=I;if("settings"!==e)return Object.entries(t).filter(([,e])=>!!e).map(([e,t])=>({added:t.added,error:t.errors,skips:t.skips,title:e,updated:t.updated||0}))},[I]),z=$===o.Io.Success||$===o.Io.Error,E=()=>{b(o.Io.Finished),k(void 0),S(void 0),w(void 0),t?.()},P=(0,s.useMemo)(()=>{switch($){case o.Io.Preparing:return(0,a.FD)(d.default,{gap:24,padding:40,children:[(0,a.Y)(J,{}),(0,a.Y)("p",{children:r("importModal.preparing")})]});case o.Io.Importing:return(0,a.FD)(d.default,{gap:24,padding:40,children:[(0,a.Y)(J,{}),(0,a.Y)("p",{children:r("importModal.loading")})]});case o.Io.Uploading:return(0,a.Y)(d.default,{gap:24,padding:40,children:(0,a.Y)(K,{progress:f?.progress,restTime:f?.restTime,speed:f?.speed})});case o.Io.Success:return(0,a.Y)(d.default,{gap:24,paddingInline:16,children:(0,a.Y)(Q,{dataSource:B,duration:g,onClickFinish:E})});case o.Io.Error:return(0,a.Y)(d.default,{gap:24,paddingBlock:24,paddingInline:0,children:(0,a.Y)(j,{error:y,onClick:E})});default:return}},[$,f]);return(0,a.FD)(a.FK,{children:[(0,a.Y)(m,{icon:l.A,open:$!==o.Io.Start&&$!==o.Io.Finished,title:r("importModal.title"),width:z?600:400,children:P}),(0,a.Y)(i.A,{accept:"application/json",beforeUpload:async e=>{let t=await et(e);return!!t&&(M(t),C(!0),!1)},className:n.wrapper,maxCount:1,showUploadList:!1,children:(0,a.Y)("div",{className:n.children,children:e})}),v&&(0,a.Y)(R,{importData:v,onConfirm:async e=>{b(o.Io.Preparing),await Y.importPgData(v,{callbacks:{onError:e=>{S(e)},onFileUploading:e=>{w(e)},onStageChange:e=>{b(e)},onSuccess:(e,t)=>{e&&k(e),h(t)}},overwriteExisting:e}),await c(),await x(),await u()},onOpenChange:C,open:F})]})})}}]);