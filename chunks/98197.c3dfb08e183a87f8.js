"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98197],{34414:(e,t,i)=>{i.d(t,{AM:()=>c,x1:()=>u});var a=i(53452),n=i(68096),l=i.n(n),r=i(20434),s=i(67095),o=i(53613),d=i(55036);l()("lobe-feature-flags");let p=(0,a.w)({runtimeEnv:{FEATURE_FLAGS:d.env.FEATURE_FLAGS},server:{FEATURE_FLAGS:r.Yj().optional()}}),c=()=>{let e=function(e){let t={};if(!e)return t;for(let i of e.trim().replaceAll("，",",").split(","))if((i=i.trim()).startsWith("+")||i.startsWith("-")){let e=i[0],a=i.slice(1);o.dN.shape[a]&&(t[a]="+"===e)}return t}(p.FEATURE_FLAGS);return(0,s.h)(o.Xi,e)},u=e=>{let t=c();return(0,o.n4)(t,e)}},85353:(e,t,i)=>{i.d(t,{default:()=>y});var a=i(28802),n=i(51717),l=i(15447),r=i(51997),s=i.n(r),o=i(83034),d=i(59121),p=i(80457),c=i(49935);let u=(0,o.memo)(()=>{let{t:e}=(0,d.Bd)("error");return(0,a.FD)(p.Flexbox,{align:"center",justify:"center",style:{minHeight:"100%",width:"100%"},children:[(0,a.Y)("h1",{style:{filter:"blur(8px)",fontSize:`min(${c.g_/3}px, 50vw)`,fontWeight:"bolder",margin:0,opacity:.12,position:"absolute",zIndex:0},children:"404"}),(0,a.Y)(n.A,{emoji:"\uD83D\uDC40",size:64}),(0,a.Y)("h2",{style:{fontWeight:"bold",marginTop:"1em",textAlign:"center"},children:e("notFound.title")}),(0,a.FD)("p",{style:{lineHeight:"1.8",marginBottom:"2em"},children:[e("notFound.desc"),(0,a.Y)("br",{}),(0,a.Y)("div",{style:{textAlign:"center"},children:e("notFound.check")})]}),(0,a.Y)(s(),{href:"/",children:(0,a.Y)(l.A,{type:"primary",children:e("notFound.backHome")})})]})});u.displayName="NotFound";let y=u},98197:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var a=i(28802),n=i(85353),l=i(34414),r=i(79946),s=i(45141),o=i(15447),d=i(70853),p=i(42507),c=i(73451),u=i(11577),y=i(80201),m=i(83034),h=i(59121),k=i(77605),A=i(69033),f=i(9274),x=i(58244),g=i(2644),b=i.n(g),Y=i(6563),v=i(91951),F=i(55612),w=i(73974),C=i(23624);let E=({value:e,onChange:t,...i})=>{let{t:n}=(0,h.Bd)("auth"),l=e=>{let i=e?e.hour(23).minute(59).second(59).millisecond(999):null;t?.(i)};return(0,a.Y)(w.A,{value:e,...i,minDate:b()(),onChange:l,placeholder:n("apikey.form.fields.expiresAt.placeholder"),renderExtraFooter:()=>(0,a.Y)(C.A,{justify:"center",children:(0,a.Y)("a",{onClick:()=>l(null),children:n("apikey.display.neverExpires")})}),showNow:!1},e?.valueOf()||"EMPTY")},S=(0,u.rU)(({css:e,token:t})=>({actionButtons:e`
    display: flex;
    flex-shrink: 0;
    gap: 4px;
  `,container:e`
    position: relative;

    display: flex;
    gap: 8px;
    align-items: center;

    min-height: 32px;

    &:hover .edit-button {
      opacity: 1;
    }
  `,content:e`
    min-width: 0;
    line-height: 1.5;
    color: ${t.colorText};
    word-break: break-all;
  `,editButton:e`
    opacity: 0;
    transition: opacity 0.2s ease;

    &.edit-button {
      opacity: 0;
    }
  `,editingContainer:e`
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  `,inputWrapper:e`
    flex: 1;
  `,textareaWrapper:e`
    flex: 1;
  `})),D=(0,m.memo)(({value:e,type:t,onSubmit:i,placeholder:n,disabled:l=!1})=>{let{styles:r,cx:s}=S(),{t:o}=(0,h.Bd)("auth"),{message:d}=x.A.useApp(),[p,c]=(0,m.useState)(!1),u=(0,m.useRef)(null),y=()=>{if("text"===t){let e=u.current?.input?.value;if(!e)return void d.warning(o("apikey.validation.required"));i(e)}c(!1)},k=()=>{c(!1)},g=e=>{"Enter"===e.key?(e.preventDefault(),y()):"Escape"===e.key&&(e.preventDefault(),k())},w=e=>{i(e&&b()(e).toISOString()),c(!1)},C=()=>{switch(t){case"text":return(0,a.Y)("div",{className:r.inputWrapper,children:(0,a.Y)(A.A,{autoFocus:!0,defaultValue:e,onKeyDown:g,placeholder:n,ref:u})});case"date":{let t=e&&b()(e).isValid()?b()(e):null;return(0,a.Y)(E,{defaultValue:t,onChange:w,onOpenChange:()=>{p&&c(!1)},open:!0})}default:return null}};return"text"===t&&p?(0,a.FD)("div",{className:r.editingContainer,children:[C(),(0,a.FD)("div",{className:r.actionButtons,children:[(0,a.Y)(f.A,{icon:Y.A,onClick:y,size:"small"}),(0,a.Y)(f.A,{icon:v.A,onClick:k,size:"small"})]})]}):"date"===t&&p?C():(0,a.FD)("div",{className:r.container,children:[(0,a.Y)("div",{className:r.content,children:(e=>{if("date"===t&&e){let t=b()(e);return t.isValid()?t.format("YYYY-MM-DD"):e||n||""}return e||n||""})(e)}),(0,a.Y)(f.A,{className:s(r.editButton,"edit-button"),icon:F.A,onClick:()=>{l||c(!0)},size:"small"})]})});D.displayName="EditableCell";var N=i(58251),T=i(65671),B=i(69382);let K=({apiKey:e})=>{let{t}=(0,h.Bd)("auth"),[i,n]=(0,m.useState)(!1),{message:l}=x.A.useApp(),r=async()=>{if(e)try{await navigator.clipboard.writeText(e),l.success(t("apikey.display.copySuccess"))}catch{l.error(t("apikey.display.copyError"))}},s=e&&(i?e:`lb-${"*".repeat(e.length-2)}`);return e?(0,a.FD)(C.A,{align:"center",gap:8,children:[(0,a.Y)("span",{style:{fontSize:"14px"},children:s}),(0,a.FD)(C.A,{children:[(0,a.Y)(o.A,{icon:i?(0,a.Y)(N.A,{}):(0,a.Y)(T.A,{}),onClick:()=>{n(!i)},size:"small",title:i?t("apikey.display.hide"):t("apikey.display.show"),type:"text"}),(0,a.Y)(o.A,{icon:(0,a.Y)(B.A,{}),onClick:r,size:"small",title:t("apikey.display.copy"),type:"text"})]})]}):t("apikey.display.autoGenerated")};var U=i(69904);let z=({open:e,onCancel:t,onOk:i,submitLoading:n})=>{let{t:l}=(0,h.Bd)("auth");return(0,a.Y)(U.A,{destroyOnHidden:!0,height:"90%",itemMinWidth:"max(30%,240px)",items:[{children:(0,a.Y)(A.A,{placeholder:l("apikey.form.fields.name.placeholder")}),label:l("apikey.form.fields.name.label"),name:"name",rules:[{required:!0}]},{children:(0,a.Y)(E,{style:{width:"100%"}}),label:l("apikey.form.fields.expiresAt.label"),name:"expiresAt"}],itemsType:"flat",onCancel:t,onFinish:e=>{i({...e,expiresAt:e.expiresAt?e.expiresAt.toDate():null})},open:e,submitLoading:n,submitText:l("apikey.form.submit"),title:l("apikey.form.title")})},_=(0,u.rU)(({css:e,token:t})=>({container:e`
    .ant-pro-card-body {
      padding-inline: 0;

      .ant-pro-table-list-toolbar-container {
        padding-block-start: 0;
      }
    }
  `,header:e`
    display: flex;
    justify-content: flex-end;
    margin-block-end: ${t.margin}px;
  `,table:e`
    border-radius: ${t.borderRadius}px;
    background: ${t.colorBgContainer};
  `})),L=()=>{let{styles:e}=_(),{t}=(0,h.Bd)("auth"),[i,n]=(0,m.useState)(!1),l=(0,m.useRef)(null),r=(0,d.n)({mutationFn:e=>k.du.apiKey.createApiKey.mutate(e),onSuccess:()=>{l.current?.reload(),n(!1)}}),u=(0,d.n)({mutationFn:({id:e,params:t})=>k.du.apiKey.updateApiKey.mutate({id:e,value:t}),onSuccess:()=>{l.current?.reload()}}),A=(0,d.n)({mutationFn:e=>k.du.apiKey.deleteApiKey.mutate({id:e}),onSuccess:()=>{l.current?.reload()}}),f=[{dataIndex:"name",key:"name",render:(e,i)=>(0,a.Y)(D,{onSubmit:e=>{e&&e!==i.name&&u.mutate({id:i.id,params:{name:e}})},placeholder:t("apikey.display.enterPlaceholder"),type:"text",value:i.name}),title:t("apikey.list.columns.name")},{dataIndex:"key",ellipsis:!0,key:"key",render:(e,t)=>(0,a.Y)(K,{apiKey:t.key}),title:t("apikey.list.columns.key"),width:230},{dataIndex:"enabled",key:"enabled",render:(e,t)=>(0,a.Y)(p.A,{checked:!!t.enabled,onChange:e=>{u.mutate({id:t.id,params:{enabled:e}})}}),title:t("apikey.list.columns.status"),width:100},{dataIndex:"expiresAt",key:"expiresAt",render:(e,i)=>(0,a.Y)(D,{onSubmit:e=>{e!==i.expiresAt&&u.mutate({id:i.id,params:{expiresAt:e?new Date(e):null}})},placeholder:t("apikey.display.neverExpires"),type:"date",value:i.expiresAt?.toLocaleString()||t("apikey.display.neverExpires")}),title:t("apikey.list.columns.expiresAt"),width:170},{dataIndex:"lastUsedAt",key:"lastUsedAt",renderText:(e,i)=>i.lastUsedAt?.toLocaleString()||t("apikey.display.neverUsed"),title:t("apikey.list.columns.lastUsedAt")},{key:"action",render:(e,i)=>(0,a.Y)(c.A,{cancelText:t("apikey.list.actions.deleteConfirm.actions.cancel"),description:t("apikey.list.actions.deleteConfirm.content"),okText:t("apikey.list.actions.deleteConfirm.actions.ok"),onConfirm:()=>A.mutate(i.id),title:t("apikey.list.actions.deleteConfirm.title"),children:(0,a.Y)(o.A,{icon:y.A,size:"small",style:{verticalAlign:"middle"},title:t("apikey.list.actions.delete"),type:"text"})}),title:t("apikey.list.columns.actions"),width:100}];return(0,a.FD)("div",{className:e.container,children:[(0,a.Y)(s.A,{actionRef:l,className:e.table,columns:f,headerTitle:t("apikey.list.title"),options:!1,pagination:!1,request:async()=>({data:await k.du.apiKey.getApiKeys.query(),success:!0}),rowKey:"id",search:!1,toolbar:{actions:[(0,a.Y)(o.A,{onClick:()=>{n(!0)},type:"primary",children:t("apikey.list.actions.create")},"create")]}}),(0,a.Y)(z,{onCancel:()=>n(!1),onOk:e=>{r.mutate(e)},open:i,submitLoading:r.isPending})]})};r.default.displayName="ApiKey";let R=()=>{let{showApiKeyManage:e}=(0,l.x1)();return e?(0,a.Y)(L,{}):(0,a.Y)(n.default,{})}}}]);