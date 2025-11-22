"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46618],{5603:(e,t,r)=>{r.d(t,{A:()=>A});var o=r(28802),n=r(51717),a=r(59202),i=r(11577),l=r(8945),d=r(71065),s=r(83034),c=r(59121),p=r(80457),g=r(98724),u=r(46265),h=r(55582),b=r(38759),m=r(61520),x=r(9402),y=r(12389),f=r(85017);let v=(0,s.memo)(({date:e,icon:t,title:r})=>{let n=(0,i.DP)();return(0,o.FD)(p.Flexbox,{align:"center",gap:4,horizontal:!0,style:{color:n.colorTextDescription,fontSize:12},children:[(0,o.Y)(y.default,{icon:t}),r,":"," ",e?(0,o.Y)("span",{style:{fontWeight:"bold"},children:e}):(0,o.Y)(y.default,{icon:f.A,spin:!0})]})}),A=(0,s.memo)(({mobile:e})=>{var t;let{t:r,i18n:s}=(0,c.Bd)("auth"),y=(0,i.DP)(),[f,A]=(0,b.k)(e=>[m.f.nickName(e),m.f.username(e)]),{data:Y,isLoading:k}=(0,u.lA)("welcome",async()=>h.W.getUserRegistrationDuration());return(0,o.FD)(p.Flexbox,{gap:8,padding:16*!!e,children:[(0,o.FD)(p.Flexbox,{align:"center",gap:8,horizontal:!0,style:{fontSize:e?16:20,fontWeight:500},children:[(0,o.Y)("div",{children:(0,o.Y)(c.x6,{components:{span:k||!Y?(0,o.Y)(a.A.Button,{active:!0,style:{height:24,minWidth:40,width:40}}):(0,o.Y)("span",{style:{fontWeight:"bold"}})},i18nKey:"stats.welcome",ns:"auth",values:{appName:g.Se,days:"en-US"===s.language?1===(t=Number(Y?.duration||1))?"1st":2===t?"2nd":3===t?"3rd":`${(0,x.BX)(t)}th`:(0,x.BX)(Number(Y?.duration||1)),username:f||A}})}),!e&&(0,o.Y)(n.A,{emoji:"\uD83E\uDEF6",size:32,type:"anim"})]}),(0,o.FD)(p.Flexbox,{gap:16,horizontal:!0,style:{color:y.colorTextDescription},wrap:"wrap",children:[(0,o.Y)(v,{date:Y?.createdAt,icon:l.A,title:r("stats.createdAt")}),(0,o.Y)(v,{date:Y?.updatedAt,icon:d.A,title:r("stats.updatedAt")})]})]})})},14579:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(28802),n=r(11577),a=r(83034),i=r(80457);let l=(0,a.memo)(({value:e,title:t})=>{let r=(0,n.DP)();return(0,o.FD)(i.Flexbox,{gap:4,horizontal:!0,style:{color:r.colorTextSecondary,fontSize:12},children:[(0,o.Y)("span",{style:{fontWeight:"bold"},children:e}),(0,o.Y)("span",{children:t})]})})},17019:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(28802),n=r(75431),a=r(3136),i=r(11577),l=r(83034),d=r(80457);let s=(0,l.memo)(({inverseColor:e,title:t,prvCount:r,count:l})=>{var s,c;let p=(s=l||0,c=r||0,"number"!=typeof s?0:0!==c?(s-c)/c*100:100*(s>0)),g=(0,i.DP)(),u={background:g.colorSuccessBg,borderColor:g.colorSuccessBorder,color:g.colorSuccess},h={backgroundColor:g.colorWarningBg,borderColor:g.colorWarningBorder,color:g.colorWarning};return(0,o.FD)(d.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"flex-start",style:{overflow:"hidden",position:"inherit"},children:[(0,o.Y)(n.A,{as:"h2",ellipsis:{rows:1,tooltip:t},style:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",margin:0,overflow:"hidden"},children:t}),l&&r&&p&&0!==p?(0,o.FD)(a.A,{style:{borderWidth:.5,...e?p>0?h:u:p>0?u:h},children:[p>0?"+":"",p.toFixed(1),"%"]}):null]})})},46618:(e,t,r)=>{r.r(t),r.d(t,{DesktopProfileUsagePage:()=>ep,MobileProfileUsagePage:()=>ec});var o,n,a=r(28802),i=r(89026),l=r(12389),d=r(99584),s=r(69982),c=r(2531),p=r(2644),g=r.n(p),u=r(7083),h=r(18223),b=r(83034),m=r(59121),x=r(80457),y=r(46265),f=r(77605);class v{constructor(){this.findByMonth=async e=>f.du.usage.findByMonth.query({mo:e}),this.findAndGroupByDay=async e=>f.du.usage.findAndGroupByDay.query({mo:e})}}let A=new v;var Y=r(5603),k=r(37618),w=r(2893),$=r(9274),F=r(29703),z=r(11577),D=r(32551),S=r(88533),M=r(17019),B=r(9402),T=r(42151),C=r(10348),P=r(18455),I=r(3136),W=r(59202),L=r(53004);let R=(0,b.memo)(({data:e,isLoading:t,groupBy:r})=>{let{t:o}=(0,m.Bd)("auth"),n=(0,z.DP)(),i=(0,T.r)(),l=(0,b.useMemo)(()=>{var t,o;return t=e||[],o=r||ed.Model,t&&t?.length!==0?Array.from(t.flatMap(e=>e.records).reduce((e,t)=>{let r=o===ed.Model?t.model:t.provider;return e.has(r)||e.set(r,[]),e.get(r)?.push(t),e},new Map).entries()).map(([e,t])=>{let r=t.reduce((e,t)=>{let r=o===ed.Model?t.provider:t.model;return e.set(r,(e.get(r)||0)+t.spend),e},new Map),n=t.reduce((e,t)=>e+(t.spend||0),0);return{childrens:Array.from(r.entries().map(([e,t])=>({id:e,spend:t,weight:n>0?t/n:0}))).sort((e,t)=>t.weight-e.weight),id:e,totalSpend:n}}).sort((e,t)=>t.totalSpend-e.totalSpend):[]},[e,r]);return console.log("ModelTable",r,l),t?(0,a.Y)(W.A,{active:!0,paragraph:{rows:8},title:!1}):(0,a.Y)(P.A,{defaultActiveKey:l.map(e=>e.id),expandIconPosition:"end",gap:16,items:l.map(e=>{let l=e.id;return{children:(0,a.FD)(x.Flexbox,{children:[(0,a.Y)(C.A,{colors:i,showLabels:!1,size:2,values:e.childrens.map(e=>e.weight)}),(0,a.Y)(L.A,{columns:[{dataIndex:"id",key:"id",render:(e,t,o)=>(0,a.FD)(x.Flexbox,{align:"center",gap:12,horizontal:!0,children:[r===ed.Provider?(0,a.Y)(w.A,{provider:t.id,style:{boxShadow:`0 0 0 2px ${n.colorBgContainer}, 0 0 0 4px ${i[o]}`,boxSizing:"content-box"}}):(0,a.Y)(k.A,{model:t.id,style:{boxShadow:`0 0 0 2px ${n.colorBgContainer}, 0 0 0 4px ${i[o]}`,boxSizing:"content-box"}}),e]},e),title:r===ed.Model?o("usage.activeModels.table.provider"):o("usage.activeModels.table.model"),width:200},{dataIndex:"spend",key:"spend",render:e=>`$${(0,B.$g)(e)}`,title:o("usage.activeModels.table.spend")}],dataSource:e.childrens,hoverToActive:!1,loading:t,rowKey:e=>e.id})]}),extra:(0,a.Y)(I.A,{children:e?.childrens?.length??0}),key:l,label:(0,a.FD)(x.Flexbox,{align:"center",gap:8,horizontal:!0,children:[r===ed.Model?(0,a.Y)(k.A,{model:l,size:24}):(0,a.Y)(w.A,{provider:l,size:24}),l]})}}),padding:{body:0}})}),V=(0,b.memo)(({data:e,isLoading:t,groupBy:r})=>{let{t:o}=(0,m.Bd)("auth"),n=(0,z.DP)(),[i,l]=(0,b.useState)(!1),d=(0,b.useMemo)(()=>{var t,o;return t=e||[],o=r||ed.Model,t&&t?.length!==0?Array.from(t.reduce((e,t)=>{if(t.records)for(let r of t.records)o===ed.Model&&r.model?.length!==0&&e.add(r.model),o===ed.Provider&&r.provider?.length!==0&&e.add(r.provider);return e},new Set)):[]},[e,r]);return(0,a.FD)(a.FK,{children:[(0,a.Y)(S.A,{extra:(0,a.Y)($.A,{icon:D.A,onClick:()=>l(!0),title:o(r===ed.Model?"usage.activeModels.modelTable":"usage.activeModels.providerTable")}),loading:t,statistic:{description:(0,a.Y)(x.Flexbox,{horizontal:!0,wrap:"wrap",children:d.map((e,t)=>e?r===ed.Model?(0,a.Y)(k.A,{model:e,size:18,style:{border:`2px solid ${n.colorBgContainer}`,boxSizing:"content-box",marginRight:-8,zIndex:t+1}},e):(0,a.Y)(w.A,{provider:e,size:18,style:{border:`2px solid ${n.colorBgContainer}`,boxSizing:"content-box",marginRight:-8,zIndex:t+1}},e):null)}),precision:0,value:(0,B.ZV)(d?.length??0)},title:(0,a.Y)(M.A,{title:o(r===ed.Model?"usage.activeModels.models":"usage.activeModels.providers")})},r),(0,a.Y)(F.A,{footer:null,onCancel:()=>l(!1),open:i,title:o(r===ed.Model?"usage.activeModels.modelTable":"usage.activeModels.providerTable"),children:(0,a.Y)(R,{data:e,groupBy:r,isLoading:t})})]})});var Z=r(14579);let G=(0,b.memo)(({data:e,isLoading:t})=>{let{t:r}=(0,m.Bd)("auth"),o=(0,z.DP)(),{spend:n,calls:i}=(e=>{if(!e||e?.length===0)return{calls:0,spend:0};let t=e.reduce((e,t)=>e+(t.totalSpend||0),0),r=e.reduce((e,t)=>e+(t.records?.length??0),0);return{calls:(0,B.ZV)(r),spend:(0,B.ZV)(t)}})(e||[]);return(0,a.Y)(S.A,{highlight:o.blue,loading:t,statistic:{description:(0,a.Y)(Z.A,{title:r("usage.cards.month.modelCalls"),value:i}),precision:2,prefix:"$",value:n},title:(0,a.Y)(M.A,{title:r("usage.cards.month.title")})})});var N=r(52087),E=r.n(N),U=r(6912),j=r.n(U),q=r(38973),K=r.n(q);g().extend(E()),g().extend(j()),g().extend(K());let O=(0,b.memo)(({data:e,isLoading:t})=>{let{t:r}=(0,m.Bd)("auth"),o=(0,z.DP)(),{today:n,yesterday:i}=(e=>{if(!e||e?.length===0)return{today:0,yesterday:0};let t=e.find(e=>g().utc(e.day).isToday())?.totalSpend??0,r=e.find(e=>g().utc(e.day).isYesterday())?.totalSpend??0;return{today:(0,B.ZV)(t),yesterday:(0,B.ZV)(r)}})(e||[]);return(0,a.Y)(S.A,{highlight:o.green,loading:t,statistic:{description:(0,a.Y)(Z.A,{title:r("usage.cards.today.yesterday"),value:i}),precision:2,prefix:"$",value:n},title:(0,a.Y)(M.A,{count:"number"==typeof n?n:0,prvCount:"number"==typeof i?i:0,title:r("usage.cards.today.title")})})}),_=(0,b.memo)(({isLoading:e,data:t,groupBy:r})=>(0,a.FD)(x.Flexbox,{gap:16,horizontal:!0,children:[(0,a.Y)(O,{data:t,isLoading:e}),(0,a.Y)(G,{data:t,isLoading:e}),(0,a.Y)(V,{data:t,groupBy:r,isLoading:e})]}));var H=r(59744),J=r(51053),Q=r(38858);let X=(0,b.memo)(({dateStrings:e})=>{let t=(0,z.DP)(),{t:r}=(0,m.Bd)("auth"),{data:o,isLoading:n,mutate:i}=(0,y.lA)("usage-logs",async()=>A.findByMonth(e)),[l,d]=(0,Q.pE)("current",Q.GJ.withDefault(1),{clearOnDefault:!0}),[s,c]=(0,Q.pE)("pageSize",Q.GJ.withDefault(5),{clearOnDefault:!0});(0,b.useEffect)(()=>{e&&i()},[e]);let p=[{hidden:!0,key:"id",title:"ID"},{dataIndex:"model",key:"model",render:(e,r)=>(0,a.FD)(x.Flexbox,{align:"start",gap:16,horizontal:!0,children:[(0,a.Y)(w.A,{provider:r.provider,size:18,style:{border:`2px solid ${t.colorBgContainer}`,boxSizing:"content-box",marginRight:-8}}),(0,a.Y)(H.A.Text,{children:e?.length>12?`${e.slice(0,12)}...`:e})]}),title:r("usage.table.model")},{dataIndex:"type",filters:[{text:"Chat",value:"chat"}],key:"type",onFilter:(e,t)=>t.callType===e,render:e=>(0,a.Y)(I.A,{children:e}),title:r("usage.table.type")},{dataIndex:"totalInputTokens",key:"inputTokens",title:r("usage.table.inputTokens")},{dataIndex:"totalOutputTokens",key:"outputTokens",title:r("usage.table.outputTokens")},{dataIndex:"tps",key:"tps",render:e=>(0,B.ZV)(e,2),title:r("usage.table.tps")},{dataIndex:"ttft",key:"ttft",render:e=>(0,B.ZV)(e/1e3,2),title:r("usage.table.ttft")},{dataIndex:"spend",key:"spend",render:e=>`$${(0,B.ZV)(e,6)}`,title:r("usage.table.spend")},{dataIndex:"createdAt",key:"createdAt",render:e=>(0,B.Yq)(new Date(e)),sortDirections:["descend"],sorter:(e,t)=>e.createdAt-t.createdAt,title:r("usage.table.createdAt")}];return(0,a.Y)(J.A,{columns:p,dataSource:o,loading:n,pagination:{current:l,onChange:e=>{d(e)},onShowSizeChange:(e,t)=>{d(e),c(t)},pageSize:s},size:"small"},"id")});var ee=r(49875),et=r(14701),er=r(35540),eo=r(55453);let en=({...e})=>(0,a.Y)(et.A,{...e,customTooltip:({active:e,payload:t,label:r,valueFormatter:o})=>e&&t?(0,a.FD)(er.Ay,{children:[(0,a.FD)(x.Flexbox,{horizontal:!0,justify:"space-between",paddingBlock:8,paddingInline:16,children:[(0,a.Y)(H.A.Paragraph,{ellipsis:!0,style:{margin:0},children:r}),(0,a.Y)("span",{style:{fontWeight:"bold"},children:t.reduce((e,t)=>e+t.value,0)})]}),(0,a.Y)(ee.A,{style:{margin:0}}),(0,a.Y)(x.Flexbox,{gap:4,paddingBlock:8,paddingInline:16,style:{flexDirection:"column-reverse",marginTop:4},children:t.map(({value:e,color:t,name:r},n)=>"number"==typeof e&&e>0?(0,a.Y)(eo.A,{color:t,name:r,value:o?.(e)},`id-${n}`):null)})]}):null}),ea=(e,t,r)=>{if(!e||e?.length===0)return{categories:[],data:[]};let o=e.reduce((e,t)=>{if(t.records)for(let o of t.records)r===ed.Model&&o.model?e.set(o.model,0):r===ed.Provider&&o.provider&&e.set(o.provider,0);return e},new Map);return{categories:Array.from(o.keys()),data:e.map(e=>{let n={day:e.day,total:"spend"===t?e.totalSpend:e.totalTokens},a=new Map(o);for(let o of e.records){let e="spend"===t?o.spend||0:o.totalTokens||0,n=r===ed.Model?o.model:o.provider,i=(a.get(n)||0)+e;if("spend"===t){let t=(0,B.ZV)((a.get(n)||0)+e,2);"string"!=typeof t&&(i=t)}a.set(n,i)}return{...n,...Object.fromEntries(a.entries())}})}};var ei=((o=ei||{}).Spend="spend",o.Token="token",o);let el=(0,b.memo)(({isLoading:e,data:t,groupBy:r})=>{let{t:o}=(0,m.Bd)("auth"),[n,l]=(0,b.useState)("spend"),{categories:d,data:s}=ea(t||[],"spend",r||ed.Model),{categories:c,data:p}=ea(t||[],"token",r||ed.Model);return(0,a.Y)(S.A,{chart:t&&("spend"===n?(0,a.Y)(en,{categories:d,data:s,index:"day"}):(0,a.Y)(en,{categories:c,data:p,index:"day"})),extra:(0,a.Y)(i.A,{onChange:e=>l(e),options:[{label:o("usage.trends.spend"),value:"spend"},{label:o("usage.trends.tokens"),value:"token"}],value:n}),loading:e})});var ed=((n={}).Model="model",n.Provider="provider",n);let es=(0,b.memo)(({mobile:e})=>{let{t,i18n:r}=(0,m.Bd)("auth");g().locale(r.language);let[o,n]=(0,b.useState)("model"),[p,f]=(0,b.useState)(g()(new Date)),[v,k]=(0,b.useState)(),{data:w,isLoading:$,mutate:F}=(0,y.lA)("usage-stat",async()=>A.findAndGroupByDay(v));return(0,b.useEffect)(()=>{v&&F()},[v]),(0,a.FD)(x.Flexbox,{gap:24*!e,children:[(0,a.Y)(x.Flexbox,{children:(0,a.FD)(d.A,{children:[(0,a.Y)(s.A,{span:16,children:e?(0,a.Y)(Y.A,{mobile:!0}):(0,a.Y)(x.Flexbox,{align:"flex-start",gap:16,horizontal:!0,justify:"space-between",children:(0,a.Y)(Y.A,{})})}),(0,a.Y)(s.A,{span:8,children:(0,a.FD)(x.Flexbox,{gap:16,horizontal:!0,children:[(0,a.Y)(i.A,{onChange:e=>n(e),options:[{icon:(0,a.Y)(l.default,{icon:u.A}),label:t("usage.welcome.model"),value:"model"},{icon:(0,a.Y)(l.default,{icon:h.A}),label:t("usage.welcome.provider"),value:"provider"}],value:o}),(0,a.Y)(c.A,{onChange:(e,t)=>{f(e),"string"==typeof t&&k(t)},picker:"month",value:p})]})})]})}),(0,a.Y)(x.Flexbox,{children:(0,a.Y)(_,{data:w,groupBy:o,isLoading:$})}),(0,a.Y)(x.Flexbox,{children:(0,a.Y)(d.A,{gutter:[16,16],children:(0,a.Y)(s.A,{span:24,children:(0,a.Y)(el,{data:w,groupBy:o,isLoading:$})})})}),(0,a.Y)(d.A,{children:(0,a.Y)(s.A,{span:24,children:(0,a.Y)(X,{dateStrings:v})})})]})}),ec=async()=>(0,a.Y)(es,{mobile:!0}),ep=async()=>(0,a.Y)(es,{mobile:!1})},53004:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(28802),n=r(92619),a=r(51053),i=r(11577),l=r(83034);let d=(0,i.rU)(({css:e,prefixCls:t})=>({hoverToActive:e`
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  `,table:e`
    .${t}-table {
      background: transparent;

      th,
      td {
        border: none !important;
        font-size: 13px;
      }

      .${t}-table-cell:before {
        display: none;
      }
    }

    tr {
      td:first-child,
      th:first-child {
        padding-inline-start: 24px !important;
      }

      td:last-child,
      th:last-child {
        padding-inline-end: 24px !important;
      }
    }
  `})),s=(0,l.memo)(({hoverToActive:e,className:t,...r})=>{let{cx:i,styles:l,theme:s}=d();return(0,o.Y)(n.Ay,{theme:{components:{Table:{headerBg:s.colorFillQuaternary,headerBorderRadius:0}}},children:(0,o.Y)(a.A,{bordered:!1,className:i(l.table,e&&l.hoverToActive,t),pagination:!1,scroll:{x:"max-content"},size:"small",...r})})})},88533:(e,t,r)=>{r.d(t,{A:()=>g});var o=r(28802),n=r(90172),a=r(75431),i=r(92912),l=r(11577),d=r(14654),s=r(3779),c=r(83034);let p=(0,l.rU)(({isDarkMode:e,css:t,token:r,prefixCls:o,responsive:n},a="#000")=>({card:t`
      border: 1px solid ${e?r.colorFillTertiary:r.colorFillSecondary};
      border-radius: ${r.borderRadiusLG}px;

      ${n.mobile} {
        border: none;
        border-radius: 0;
        background: ${r.colorBgContainer};
      }
    `,container:t`
      ${n.mobile} {
        border: none;
        border-radius: 0;
        background: ${r.colorBgContainer};
      }

      .${o}-pro-card-title {
        overflow: hidden;

        ${n.mobile} {
          margin: 0;
          font-size: 14px;
          line-height: 16px !important;
        }
      }

      .${o}-pro-card-body {
        padding: 0;
        .${o}-pro-statistic-card-content {
          position: relative;
          width: 100%;
          padding-block-end: 16px;
          padding-inline: 24px;
          .${o}-pro-statistic-card-chart {
            position: relative;
            width: 100%;
          }
        }

        .${o}-pro-statistic-card-footer {
          overflow: hidden;

          margin: 0;
          padding: 0;
          border-end-start-radius: ${r.borderRadiusLG}px;
          border-end-end-radius: ${r.borderRadiusLG}px;
        }
      }

      .${o}-pro-card-loading-content {
        padding-block: 16px;
        padding-inline: 24px;
      }

      .${o}-pro-card-header {
        padding-block-start: 16px;
        padding-inline: 24px;

        .${o}-pro-card-title {
          line-height: 32px;
        }

        + .${o}-pro-card-body {
          padding-block-start: 0;
        }

        ${n.mobile} {
          flex-wrap: wrap;
          gap: 8px;

          margin-block-end: 8px;
          padding-block-start: 0;
          padding-inline: 0;
        }
      }

      .${o}-statistic-content-value-int, .${o}-statistic-content-value-decimal {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.2;
      }

      .${o}-pro-statistic-card-chart {
        margin: 0;
      }

      .${o}-pro-statistic-card-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${n.mobile} {
          padding-block-end: 0 !important;
          padding-inline: 0 !important;
        }
      }

      .${o}-pro-statistic-card-content-horizontal {
        flex-direction: row;
        align-items: center;

        .${o}-pro-statistic-card-chart {
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
          ${(0,s.aq)(-30,a)} 20%,
          ${a} 80%
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
      border-radius: ${r.borderRadius}px;
      background: ${r.colorFillSecondary};
    `,raw:t`
      border: none !important;
      background: transparent !important;
    `})),g=(0,c.memo)(({title:e,className:t,highlight:r,variant:l,loading:s,extra:c,...g})=>{let{cx:u,styles:h}=p(r),{mobile:b}=(0,d.Q)();return(0,o.Y)(n.A,{bordered:!b,className:u(h.container,"raw"===l?h.raw:h.card,r&&h.highlight,t),extra:s?(0,o.Y)(i.A,{percent:"auto",size:"small"}):c,title:"string"==typeof e?(0,o.Y)(a.A,{as:"h2",ellipsis:{rows:1,tooltip:!0},style:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",margin:0,overflow:"hidden"},children:e}):e,...g})})}}]);