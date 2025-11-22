"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9535],{5603:(e,t,a)=>{a.d(t,{A:()=>A});var o=a(28802),i=a(51717),n=a(59202),l=a(11577),r=a(8945),s=a(71065),d=a(83034),c=a(59121),p=a(80457),h=a(98724),u=a(46265),g=a(55582),m=a(38759),b=a(61520),v=a(9402),Y=a(12389),f=a(85017);let y=(0,d.memo)(({date:e,icon:t,title:a})=>{let i=(0,l.DP)();return(0,o.FD)(p.Flexbox,{align:"center",gap:4,horizontal:!0,style:{color:i.colorTextDescription,fontSize:12},children:[(0,o.Y)(Y.default,{icon:t}),a,":"," ",e?(0,o.Y)("span",{style:{fontWeight:"bold"},children:e}):(0,o.Y)(Y.default,{icon:f.A,spin:!0})]})}),A=(0,d.memo)(({mobile:e})=>{var t;let{t:a,i18n:d}=(0,c.Bd)("auth"),Y=(0,l.DP)(),[f,A]=(0,m.k)(e=>[b.f.nickName(e),b.f.username(e)]),{data:x,isLoading:k}=(0,u.lA)("welcome",async()=>g.W.getUserRegistrationDuration());return(0,o.FD)(p.Flexbox,{gap:8,padding:16*!!e,children:[(0,o.FD)(p.Flexbox,{align:"center",gap:8,horizontal:!0,style:{fontSize:e?16:20,fontWeight:500},children:[(0,o.Y)("div",{children:(0,o.Y)(c.x6,{components:{span:k||!x?(0,o.Y)(n.A.Button,{active:!0,style:{height:24,minWidth:40,width:40}}):(0,o.Y)("span",{style:{fontWeight:"bold"}})},i18nKey:"stats.welcome",ns:"auth",values:{appName:h.Se,days:"en-US"===d.language?1===(t=Number(x?.duration||1))?"1st":2===t?"2nd":3===t?"3rd":`${(0,v.BX)(t)}th`:(0,v.BX)(Number(x?.duration||1)),username:f||A}})}),!e&&(0,o.Y)(i.A,{emoji:"\uD83E\uDEF6",size:32,type:"anim"})]}),(0,o.FD)(p.Flexbox,{gap:16,horizontal:!0,style:{color:Y.colorTextDescription},wrap:"wrap",children:[(0,o.Y)(y,{date:x?.createdAt,icon:r.A,title:a("stats.createdAt")}),(0,o.Y)(y,{date:x?.updatedAt,icon:s.A,title:a("stats.updatedAt")})]})]})})},9801:(e,t,a)=>{a.d(t,{A:()=>m});var o=a(28802),i=a(11577),n=a(83034),l=a(59121),r=a(14579),s=a(88533),d=a(17019),c=a(46265),p=a(56790),h=a(9402),u=a(99756),g=a(52643);let m=(0,n.memo)(({inShare:e,mobile:t})=>{let{t:a}=(0,l.Bd)("auth"),n=(0,i.DP)(),{data:m,isLoading:b}=(0,c.lA)("stats-messages",async()=>({count:await p.T.countMessages(),prevCount:await p.T.countMessages({endDate:(0,u.ZG)().format("YYYY-MM-DD")})}));return e?(0,o.Y)(g.A,{count:(0,h.BX)(m?.prevCount)||"--",title:a("stats.messages")}):(0,o.Y)(s.A,{highlight:t?void 0:n.yellow,loading:b||!m,statistic:{description:(0,o.Y)(r.A,{title:a("date.prevMonth"),value:(0,h.BX)(m?.prevCount)||"--"}),precision:0,value:m?.count||"--"},title:(0,o.Y)(d.A,{count:m?.count,prvCount:m?.prevCount,title:a("stats.messages")})})})},14579:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(28802),i=a(11577),n=a(83034),l=a(80457);let r=(0,n.memo)(({value:e,title:t})=>{let a=(0,i.DP)();return(0,o.FD)(l.Flexbox,{gap:4,horizontal:!0,style:{color:a.colorTextSecondary,fontSize:12},children:[(0,o.Y)("span",{style:{fontWeight:"bold"},children:e}),(0,o.Y)("span",{children:t})]})})},17019:(e,t,a)=>{a.d(t,{A:()=>d});var o=a(28802),i=a(75431),n=a(3136),l=a(11577),r=a(83034),s=a(80457);let d=(0,r.memo)(({inverseColor:e,title:t,prvCount:a,count:r})=>{var d,c;let p=(d=r||0,c=a||0,"number"!=typeof d?0:0!==c?(d-c)/c*100:100*(d>0)),h=(0,l.DP)(),u={background:h.colorSuccessBg,borderColor:h.colorSuccessBorder,color:h.colorSuccess},g={backgroundColor:h.colorWarningBg,borderColor:h.colorWarningBorder,color:h.colorWarning};return(0,o.FD)(s.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"flex-start",style:{overflow:"hidden",position:"inherit"},children:[(0,o.Y)(i.A,{as:"h2",ellipsis:{rows:1,tooltip:t},style:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",margin:0,overflow:"hidden"},children:t}),r&&a&&p&&0!==p?(0,o.FD)(n.A,{style:{borderWidth:.5,...e?p>0?g:u:p>0?u:g},children:[p>0?"+":"",p.toFixed(1),"%"]}):null]})})},26731:(e,t,a)=>{a.d(t,{OM:()=>c,VG:()=>p,aO:()=>h,yj:()=>d});var o,i=a(29447),n=a(2644),l=a.n(n),r=a(83034),s=a(98724),d=((o={}).JPG="jpg",o.PNG="png",o.SVG="svg",o.WEBP="webp",o);let c=[{label:"JPG",value:"jpg"},{label:"PNG",value:"png"},{label:"SVG",value:"svg"},{label:"WEBP",value:"webp"}],p=async({imageType:e,id:t="#preview",width:a})=>{let o,n=document.querySelector(t),l=n;if(a&&((l=n.cloneNode(!0)).style.width=`${a}px`,document.body.append(l)),"svg"===e)o=new Blob([(await (0,i.p)(a?l:n,{scale:2,width:a})).toRaw()],{type:"image/svg+xml"});else{let t=await i.p.toBlob(a?l:n,{type:"jpg"===e?"jpg":e,useProxy:"https://proxy.corsfix.com/?"});if(!t)throw Error("Failed to generate blob from snapdom");o=t}if(a&&l&&l?.remove(),!o)throw Error("Blob is undefined");return new Promise((e,t)=>{let a=new FileReader;a.addEventListener("load",()=>{"string"==typeof a.result?e(a.result):t(Error("FileReader result is not a string"))}),a.addEventListener("error",()=>t(a.error||Error("Failed to read blob as data URL"))),a.readAsDataURL(o)})},h=({imageType:e,title:t="share",id:a="#preview",width:o})=>{let[i,n]=(0,r.useState)(!1),d=(0,r.useCallback)(async()=>{n(!0);try{let i=await p({id:a,imageType:e,width:o}),r=document.createElement("a");r.download=`${s.Se}_${t}_${l()().format("YYYY-MM-DD")}.${e}`,r.href=i,r.click(),n(!1)}catch(e){console.error("Failed to download image",e),n(!1)}},[e,t]);return{loading:i,onDownload:d,title:t}}},31916:(e,t,a)=>{a.r(t),a.d(t,{DesktopProfileStatsPage:()=>K,MobileProfileStatsPage:()=>Z});var o=a(28802),i=a(83034),n=a(47215),l=a(99454),r=a(59121),s=a(80457),d=a(49935),c=a(86856),p=a(17549),h=a(67072),u=a(9274),g=a(29703),m=a(32551),b=a(51997),v=a.n(b),Y=a(89196),f=a(27697),y=a(99278),A=a(35245),x=a(46265),k=a(30333);let w=(0,i.memo)(({mobile:e})=>{let[t,a]=(0,i.useState)(!1),{t:l}=(0,r.Bd)(["auth","chat"]),c=(0,f.Zp)(),{data:b,isLoading:w}=(0,x.lA)("rank-sessions",async()=>k.sessionService.rankSessions()),D=!!(b&&b?.length>5),F=t=>{let a=Y.A.stringifyUrl({query:{session:t.id,...e?{showMobileWorkspace:!0}:{}},url:"/chat"});return{icon:(0,o.Y)(h.A,{alt:t.title||l("defaultAgent",{ns:"chat"}),avatar:t.avatar||y.k_,background:t.backgroundColor||void 0,size:28,style:{backdropFilter:"blur(8px)"}}),link:a,name:(0,o.Y)(v(),{href:a,style:{color:"inherit"},children:t.title?t.id===A.Ed?l("inbox.title",{ns:"chat"}):t.title:l("defaultAgent",{ns:"chat"})}),value:t.count}};return(0,o.FD)(o.FK,{children:[(0,o.Y)(n.A,{extra:D&&(0,o.Y)(u.A,{icon:m.A,onClick:()=>a(!0),size:{blockSize:28,size:20}}),style:d.pC.style,title:l("stats.assistantsRank.title"),variant:"borderless",children:(0,o.Y)(s.Flexbox,{paddingBlock:16,children:(0,o.Y)(p.A,{data:b?.slice(0,5).map(e=>F(e))||[],height:220,leftLabel:l("stats.assistantsRank.left"),loading:w||!b,noDataText:{desc:l("stats.empty.desc"),title:l("stats.empty.title")},onValueChange:e=>c(e.link),rightLabel:l("stats.assistantsRank.right")})})}),D&&(0,o.Y)(g.A,{footer:null,loading:w||!b,onCancel:()=>a(!1),open:t,title:l("stats.assistantsRank.title"),children:(0,o.Y)(p.A,{data:b?.map(e=>F(e))||[],height:340,leftLabel:l("stats.assistantsRank.left"),loading:w||!b,onValueChange:e=>c(e.link),rightLabel:l("stats.assistantsRank.right")})})]})});var D=a(37618),F=a(56790);let C=(0,i.memo)(()=>{let[e,t]=(0,i.useState)(!1),{t:a}=(0,r.Bd)("auth"),{data:l,isLoading:c}=(0,x.lA)("rank-models",async()=>F.T.rankModels()),h=!!(l&&l?.length>5),b=e=>({icon:(0,o.Y)(D.A,{model:e.id,size:24}),id:e.id,name:e.id,value:e.count});return(0,o.FD)(o.FK,{children:[(0,o.Y)(n.A,{extra:h?(0,o.Y)(u.A,{icon:m.A,onClick:()=>t(!0),size:{blockSize:28,size:20}}):void 0,style:d.pC.style,title:a("stats.modelsRank.title"),variant:"borderless",children:(0,o.Y)(s.Flexbox,{horizontal:!0,paddingBlock:16,children:(0,o.Y)(p.A,{data:l?.slice(0,5).map(e=>b(e))||[],height:220,leftLabel:a("stats.modelsRank.left"),loading:c||!l,noDataText:{desc:a("stats.empty.desc"),title:a("stats.empty.title")},rightLabel:a("stats.modelsRank.right")})})}),h&&(0,o.Y)(g.A,{footer:null,loading:c||!l,onCancel:()=>t(!1),open:e,title:a("stats.modelsRank.title"),children:(0,o.Y)(p.A,{data:l?.map(e=>b(e))||[],height:340,leftLabel:a("stats.modelsRank.left"),loading:c||!l,rightLabel:a("stats.modelsRank.right")})})]})});var z=a(43106),S=a(12389),B=a(11577),$=a(67524),R=a(11678);let M=(0,i.memo)(({mobile:e})=>{let[t,a]=(0,i.useState)(!1),{t:l}=(0,r.Bd)("auth"),c=(0,B.DP)(),h=(0,f.Zp)(),{data:b,isLoading:y}=(0,x.lA)("rank-topics",async()=>R.p.rankTopics()),k=!!(b&&b?.length>5),w=t=>{let a=Y.A.stringifyUrl({query:{session:t.sessionId||A.Ed,topic:t.id,...e?{showMobileWorkspace:!0}:{}},url:"/chat"});return{icon:(0,o.Y)(S.default,{color:c.colorTextDescription,icon:$.A,size:16}),link:a,name:(0,o.Y)(v(),{href:a,style:{color:"inherit"},children:t.title}),value:t.count}};return(0,o.FD)(o.FK,{children:[(0,o.Y)(n.A,{extra:k&&(0,o.Y)(u.A,{icon:m.A,onClick:()=>a(!0),size:{blockSize:28,size:20}}),style:d.pC.style,title:l("stats.topicsRank.title"),variant:"borderless",children:(0,o.Y)(s.Flexbox,{paddingBlock:16,children:(0,o.Y)(p.A,{data:b?.slice(0,5).map(e=>w(e))||[],height:220,leftLabel:l("stats.topicsRank.left"),loading:y||!b,noDataText:{desc:l("stats.empty.desc"),title:l("stats.empty.title")},onValueChange:e=>h(e.link),rightLabel:l("stats.topicsRank.right")})})}),k&&(0,o.Y)(g.A,{footer:null,loading:y||!b,onCancel:()=>a(!1),open:t,title:l("stats.topicsRank.title"),children:(0,o.Y)(p.A,{data:b?.map(e=>w(e))||[],height:340,leftLabel:l("stats.topicsRank.left"),loading:y||!b,onValueChange:e=>h(e.link),rightLabel:l("stats.topicsRank.right")})})]})});var T=a(14579),P=a(88533),W=a(17019),L=a(9402),G=a(99756),j=a(52643);let E=(0,i.memo)(({mobile:e,inShare:t})=>{let{t:a}=(0,r.Bd)("auth"),i=(0,B.DP)(),{data:n,isLoading:l}=(0,x.lA)("stats-sessions",async()=>({count:await k.sessionService.countSessions(),prevCount:await k.sessionService.countSessions({endDate:(0,G.ZG)().format("YYYY-MM-DD")})}));return t?(0,o.Y)(j.A,{count:(0,L.BX)(n?.prevCount)||"--",title:a("stats.assistants")}):(0,o.Y)(P.A,{highlight:e?void 0:i.purple,loading:l||!n,statistic:{description:(0,o.Y)(T.A,{title:a("date.prevMonth"),value:(0,L.BX)(n?.prevCount)||"--"}),precision:0,value:n?.count||"--"},title:(0,o.Y)(W.A,{count:n?.count,prvCount:n?.prevCount,title:a("stats.assistants")})})});var N=a(9801);let U=(0,i.memo)(({inShare:e,mobile:t})=>{let{t:a}=(0,r.Bd)("auth"),i=(0,B.DP)(),{data:n,isLoading:l}=(0,x.lA)("stats-topics",async()=>({count:await R.p.countTopics(),prevCount:await R.p.countTopics({endDate:(0,G.ZG)().format("YYYY-MM-DD")})}));return e?(0,o.Y)(j.A,{count:(0,L.BX)(n?.prevCount)||"--",title:a("stats.topics")}):(0,o.Y)(P.A,{highlight:t?void 0:i.gold,loading:l||!n,statistic:{description:(0,o.Y)(T.A,{title:a("date.prevMonth"),value:(0,L.BX)(n?.prevCount)||"--"}),precision:0,value:n?.count||"--"},title:(0,o.Y)(W.A,{count:n?.count,prvCount:n?.prevCount,title:a("stats.topics")})})});var V=a(34412),X=a(5603);let _=(0,i.memo)(({mobile:e})=>{let{t}=(0,r.Bd)("auth");return(0,o.FD)(s.Flexbox,{gap:24*!e,children:[e?(0,o.Y)(X.A,{mobile:!0}):(0,o.FD)(s.Flexbox,{align:"flex-start",gap:16,horizontal:!0,justify:"space-between",children:[(0,o.Y)(X.A,{}),(0,o.Y)(z.A,{})]}),(0,o.Y)(n.A,{style:d.pC.style,title:t("tab.stats"),variant:"borderless",children:(0,o.FD)(l.A,{maxItemWidth:150,paddingBlock:16,rows:4,children:[(0,o.Y)(E,{mobile:e}),(0,o.Y)(U,{mobile:e}),(0,o.Y)(N.A,{mobile:e}),(0,o.Y)(V.A,{})]})}),(0,o.Y)(c.A,{mobile:e}),(0,o.FD)(l.A,{gap:48*!e,rows:3,children:[(0,o.Y)(C,{}),(0,o.Y)(w,{mobile:e}),(0,o.Y)(M,{mobile:e})]})]})}),Z=(0,i.memo)(()=>(0,o.Y)(_,{mobile:!0}));Z.displayName="MobileProfileStatsPage";let K=(0,i.memo)(()=>(0,o.Y)(_,{mobile:!1}))},34412:(e,t,a)=>{a.d(t,{A:()=>g});var o=a(28802),i=a(83034),n=a(59121),l=a(14579),r=a(88533),s=a(17019),d=a(46265),c=a(56790),p=a(9402),h=a(99756),u=a(52643);let g=(0,i.memo)(({inShare:e})=>{let{t}=(0,n.Bd)("auth"),{data:a,isLoading:i}=(0,d.lA)("stats-words",async()=>({count:await c.T.countWords(),prevCount:await c.T.countWords({endDate:(0,h.ZG)().format("YYYY-MM-DD")})}));return e?(0,o.Y)(u.A,{count:(0,p.U2)(a?.prevCount)||"--",title:t("stats.words")}):(0,o.Y)(r.A,{loading:i||!a,statistic:{description:(0,o.Y)(l.A,{title:t("date.prevMonth"),value:(0,p.U2)(a?.prevCount)||"--"}),precision:0,style:{fontWeight:"bold"},value:(0,p.U2)(a?.count)||"--"},title:(0,o.Y)(s.A,{count:a?.count,prvCount:a?.prevCount,title:t("stats.words")})})})},43106:(e,t,a)=>{a.d(t,{A:()=>f});var o=a(28802),i=a(9274),n=a(3675),l=a(83034),r=a(49935),s=a(89026),d=a(69904),c=a(59202),p=a(11577),h=a(33375),u=a(59121),g=a(26731);let m=(0,h.default)(()=>Promise.all([a.e(88440),a.e(66304),a.e(6312),a.e(99663),a.e(67072),a.e(65101),a.e(50340),a.e(13441),a.e(3282),a.e(87254),a.e(8756),a.e(57947),a.e(79052),a.e(91e3),a.e(64694),a.e(4235)]).then(a.bind(a,4235)),{loadableGenerated:{webpack:()=>[4235]},loading:()=>(0,o.Y)(c.A.Button,{active:!0,block:!0,size:"large",style:{height:400,width:"100%"}})}),b=(0,p.rU)(({css:e,prefixCls:t})=>({preview:e`
    .${t}-form-item-label {
      display: none;
    }
  `})),v={imageType:g.yj.JPG},Y=(0,l.memo)(({open:e,onCancel:t,mobile:a})=>{let{t:i}=(0,u.Bd)(["chat","common"]),[n,r]=(0,l.useState)(v),{styles:c}=b(),{loading:p,onDownload:h}=(0,g.aO)({imageType:n.imageType,title:"stats",width:a?440:void 0}),Y=[{children:(0,o.Y)(m,{}),className:c.preview,divider:!1,minWidth:"100%"},{children:(0,o.Y)(s.A,{options:g.OM}),divider:!1,label:i("shareModal.imageType"),minWidth:void 0,name:"imageType"}];return(0,o.Y)(d.A,{allowFullscreen:!0,footer:null,initialValues:v,items:Y,itemsType:"flat",onCancel:t,onFinish:h,onValuesChange:(e,t)=>r(t),open:e,submitLoading:p,submitText:i("shareModal.download"),title:i("share",{ns:"common"}),width:480})}),f=(0,l.memo)(({mobile:e})=>{let[t,a]=(0,l.useState)(!1);return(0,o.FD)(o.FK,{children:[(0,o.Y)(i.A,{icon:n.A,onClick:()=>a(!0),size:e?r.Jo:r.R4}),(0,o.Y)(Y,{mobile:e,onCancel:()=>a(!1),open:t})]})})},52643:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(28802),i=a(11577),n=a(83034),l=a(80457);let r=(0,n.memo)(({title:e,count:t})=>{let a=(0,i.DP)();return(0,o.FD)(l.Flexbox,{padding:12,style:{background:a.isDarkMode?a.colorFillTertiary:a.colorFillQuaternary,borderRadius:a.borderRadiusLG},children:[(0,o.Y)("div",{style:{fontSize:13},children:e}),(0,o.Y)("div",{style:{fontSize:20,fontWeight:"bold"},children:t})]})})},86856:(e,t,a)=>{a.d(t,{A:()=>v});var o=a(28802),i=a(89289),n=a(3136),l=a(12389),r=a(47215),s=a(11577),d=a(75020),c=a(3779),p=a(83034),h=a(59121),u=a(80457),g=a(49935),m=a(46265),b=a(56790);let v=(0,p.memo)(({inShare:e,mobile:t,...a})=>{let{t:p}=(0,h.Bd)("auth"),v=(0,s.DP)(),{data:Y,isLoading:f}=(0,m.lA)("stats-heatmaps",async()=>b.T.getHeatmaps()),y=Y?.filter(e=>e.level>0).length||"--",A=Y?.filter(e=>e.level>=3).length||"--",x=(0,o.Y)(i.A,{blockMargin:t?3:void 0,blockRadius:t?2:void 0,blockSize:t?6:14,data:Y||[],labels:{legend:{less:p("heatmaps.legend.less"),more:p("heatmaps.legend.more")},months:[p("heatmaps.months.jan"),p("heatmaps.months.feb"),p("heatmaps.months.mar"),p("heatmaps.months.apr"),p("heatmaps.months.may"),p("heatmaps.months.jun"),p("heatmaps.months.jul"),p("heatmaps.months.aug"),p("heatmaps.months.sep"),p("heatmaps.months.oct"),p("heatmaps.months.nov"),p("heatmaps.months.dec")],tooltip:p("heatmaps.tooltip"),totalCount:p("heatmaps.totalCount")},loading:f||!Y,maxLevel:4,...a}),k=(0,c.W0)(v.gold),w=(0,o.FD)(u.Flexbox,{gap:4,horizontal:!0,style:{alignSelf:"center",flex:"none",zoom:.9},children:[(0,o.Y)(n.A,{bordered:!1,style:{background:v.colorText,color:v.colorBgLayout,fontWeight:500,margin:0},children:[y,p("stats.days")].join(" ")}),(0,o.Y)(n.A,{bordered:!1,color:"gold",icon:(0,o.Y)(l.default,{color:k,fill:k,icon:d.A}),style:{background:v.gold,color:k,fontWeight:500,margin:0},children:[A,p("stats.days")].join(" ")})]});return e?(0,o.FD)(u.Flexbox,{gap:4,children:[(0,o.FD)(u.Flexbox,{align:"baseline",gap:4,horizontal:!0,justify:"space-between",children:[(0,o.Y)("div",{style:{color:v.colorTextDescription,fontSize:12},children:p("stats.lastYearActivity")}),w]}),x]}):(0,o.Y)(r.A,{extra:w,style:g.pC.style,title:p("stats.lastYearActivity"),variant:"borderless",children:(0,o.Y)(u.Flexbox,{paddingBlock:24,children:x})})})},88533:(e,t,a)=>{a.d(t,{A:()=>h});var o=a(28802),i=a(90172),n=a(75431),l=a(92912),r=a(11577),s=a(14654),d=a(3779),c=a(83034);let p=(0,r.rU)(({isDarkMode:e,css:t,token:a,prefixCls:o,responsive:i},n="#000")=>({card:t`
      border: 1px solid ${e?a.colorFillTertiary:a.colorFillSecondary};
      border-radius: ${a.borderRadiusLG}px;

      ${i.mobile} {
        border: none;
        border-radius: 0;
        background: ${a.colorBgContainer};
      }
    `,container:t`
      ${i.mobile} {
        border: none;
        border-radius: 0;
        background: ${a.colorBgContainer};
      }

      .${o}-pro-card-title {
        overflow: hidden;

        ${i.mobile} {
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
          border-end-start-radius: ${a.borderRadiusLG}px;
          border-end-end-radius: ${a.borderRadiusLG}px;
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

        ${i.mobile} {
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
        ${i.mobile} {
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
          ${(0,d.aq)(-30,n)} 20%,
          ${n} 80%
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
      border-radius: ${a.borderRadius}px;
      background: ${a.colorFillSecondary};
    `,raw:t`
      border: none !important;
      background: transparent !important;
    `})),h=(0,c.memo)(({title:e,className:t,highlight:a,variant:r,loading:d,extra:c,...h})=>{let{cx:u,styles:g}=p(a),{mobile:m}=(0,s.Q)();return(0,o.Y)(i.A,{bordered:!m,className:u(g.container,"raw"===r?g.raw:g.card,a&&g.highlight,t),extra:d?(0,o.Y)(l.A,{percent:"auto",size:"small"}):c,title:"string"==typeof e?(0,o.Y)(n.A,{as:"h2",ellipsis:{rows:1,tooltip:!0},style:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",margin:0,overflow:"hidden"},children:e}):e,...h})})}}]);