"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40133],{27235:(e,t,r)=>{r.d(t,{A:()=>_});var i=r(28802),l=r(67072),o=r(75431),n=r(3136),a=r(9274),c=r(69033),s=r(20659),d=r(15447),h=r(29703),p=r(59202),g=r(11577),m=r(82487),b=r(55825),A=r(3675),f=r(51997),u=r.n(f),x=r(83034),y=r(59121),v=r(20480),w=r(80457),Y=r(909),k=r(40148),F=r(18209),z=r(82608),B=r(60694),j=r(65110),$=r(91661),N=r(11357),D=r(62319),S=r(89196);let T=(e,t=",",r)=>(r&&(e=e.map(e=>r+(0,$.A)(e))),e.filter(Boolean).join(t)),U=(0,g.rU)(({css:e,token:t})=>({banner:e`
    position: relative;

    overflow: hidden;

    height: 64px;
    margin-block-end: -56px;

    background: ${t.colorFillSecondary};
  `,bannerImg:e`
    position: absolute;
    filter: blur(40px) saturate(1.5);
  `})),C=(0,x.memo)(({avatar:e,className:t,size:r=600,children:o,...n})=>{let{styles:a,theme:c,cx:s}=U();return(0,i.FD)(w.Flexbox,{align:"center",className:s(a.banner,t),justify:"center",style:e?{}:{backgroundColor:c.colorFillTertiary},width:"100%",...n,children:[e&&(0,i.Y)(l.A,{alt:"banner",avatar:e,className:a.bannerImg,shape:"square",size:r}),o]})}),R=(0,g.rU)(({css:e,token:t})=>({banner:e`
      overflow: hidden;

      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadiusLG}px;

      background: ${t.colorBgContainer};
      box-shadow: ${t.boxShadowTertiary};
    `,copy:e`
      background: ${t.colorPrimary};

      &:hover {
        background: ${t.colorPrimaryHover};
      }
    `,icon:e`
      border: 1px solid ${t.colorFillSecondary};

      svg {
        fill: ${t.colorTextSecondary};
      }

      &:hover {
        border: 1px solid ${t.colorBorderSecondary};

        svg {
          fill: ${t.colorText};
        }
      }
    `})),_=(0,x.memo)(({meta:e,...t})=>{let r,{x:g,reddit:f,telegram:$,whatsapp:U,mastodon:_,weibo:P}=(({url:e,title:t,desc:r,hashtags:i=[]})=>{let l,o,n,a,c,s,d;return{linkedin:{link:(l=(0,N.A)({url:e},D.A),S.A.stringifyUrl({query:l,url:"https://www.linkedin.com/sharing/share-offsite/"})),title:"Linkedin"},mastodon:{icon:Y.A,link:(o=(0,N.A)({text:[[t,r].filter(Boolean).join(" - "),i&&T(i," ","#")].filter(Boolean).join(" "),url:e},D.A),S.A.stringifyUrl({query:o,url:"https://mastodon.social/share"})),title:"Mastodon"},reddit:{icon:k.A,link:(n=(0,N.A)({title:[[t,r].filter(Boolean).join(" - "),i&&T(i," ","#")].filter(Boolean).join(" "),url:e},D.A),S.A.stringifyUrl({query:n,url:"https://www.reddit.com/submit"})),title:"Reddit"},telegram:{icon:F.A,link:(a=(0,N.A)({text:[[t,r].filter(Boolean).join(" - "),i&&T(i," ","#")].filter(Boolean).join(" "),url:e},D.A),S.A.stringifyUrl({query:a,url:'https://t.me/share/url"'})),title:"Telegram"},weibo:{icon:z.A,link:(c=(0,N.A)({sharesource:"weibo",title:[[t,r].filter(Boolean).join(" - "),i&&T(i," ","#")].filter(Boolean).join(" "),url:e},D.A),S.A.stringifyUrl({query:c,url:"http://service.weibo.com/share/share.php"})),title:"Weibo"},whatsapp:{icon:B.A,link:(s=(0,N.A)({text:[[t,r].filter(Boolean).join(" - "),e,i&&T(i," ","#")].filter(Boolean).join(" ")},D.A),S.A.stringifyUrl({query:s,url:"https://api.whatsapp.com/send"})),title:"WhatsApp"},x:{icon:j.A,link:(d=(0,N.A)({hashtags:i&&T(i),text:[t,r].filter(Boolean).join(" - "),url:e},D.A),S.A.stringifyUrl({query:d,url:"https://x.com/intent/tweet"})),title:"X"}}})({avatar:"",desc:"",hashtags:[],title:"",url:"",...e}),{t:W}=(0,y.Bd)("common"),{styles:L,theme:I}=R(),[M,E]=(0,x.useState)(!1);return r=e?(0,i.FD)(v.default,{gap:16,style:{position:"relative"},width:"100%",children:[(0,i.FD)(w.Flexbox,{align:"center",className:L.banner,width:"100%",children:[(0,i.Y)(C,{avatar:e.avatar,size:640,style:{height:72,marginBottom:-36}}),(0,i.Y)(v.default,{flex:"none",height:72,style:{backgroundColor:I.colorBgContainer,borderRadius:"50%",overflow:"hidden",zIndex:2},width:72,children:(0,i.Y)(l.A,{animation:!0,avatar:e.avatar,shape:"circle",size:64})}),(0,i.FD)(v.default,{padding:12,width:"100%",children:[(0,i.Y)("h3",{style:{fontWeight:"bold",textAlign:"center"},children:e.title}),(0,i.Y)(o.A,{as:"p",style:{color:I.colorTextSecondary,textAlign:"center"},children:e.desc}),e.hashtags&&(0,i.Y)(w.Flexbox,{align:"center",gap:4,horizontal:!0,justify:"center",wrap:"wrap",children:e.hashtags.map((e,t)=>(0,i.Y)(n.A,{children:(0,m.A)(e).trim()},t))}),e.tags]})]}),(0,i.Y)(w.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"center",wrap:"wrap",children:[g,f,$,U,_,P].map(e=>e.icon&&(0,i.Y)(u(),{href:e.link,target:"_blank",children:(0,i.Y)(a.A,{className:L.icon,icon:e.icon,size:{blockSize:36,borderRadius:18,size:16},title:e.title})},e.title))}),(0,i.FD)(w.Flexbox,{align:"center",gap:8,horizontal:!0,width:"100%",children:[(0,i.Y)(c.A,{value:e.url,variant:"filled"}),(0,i.Y)(s.A,{className:L.copy,color:I.colorBgLayout,content:e.url,icon:b.A,size:{blockSize:36,size:16}})]})]}):(0,i.Y)(p.A,{active:!0,paragraph:{rows:4},title:!1}),(0,i.FD)(i.FK,{children:[(0,i.Y)(d.A,{icon:A.A,onClick:()=>E(!0),size:"large",...t}),(0,i.Y)(h.A,{footer:null,onCancel:()=>E(!1),open:M,title:W("share"),width:360,children:r})]})})},41309:(e,t,r)=>{r.d(t,{A:()=>g});var i=r(28802),l=r(20659),o=r(50436),n=r(11577),a=r(83034),c=r(59121),s=r(80457),d=r(4001),h=r(74584),p=r(61451);let g=(0,a.memo)(({tab:e,identifier:t})=>{let r=(0,n.DP)(),{t:a}=(0,c.Bd)("discover");return(0,i.Y)(o.A,{items:[{title:(0,i.Y)(h.A,{href:"/discover",children:"Discover"})},{title:(0,i.Y)(h.A,{href:(0,d.A)("/discover",e),children:e===p.bz.Mcp?"MCP Servers":a(`tab.${e}`)})},{title:(0,i.FD)(s.Flexbox,{align:"center",gap:4,horizontal:!0,style:{color:r.colorTextSecondary},children:[t,(0,i.Y)(l.A,{content:t,size:{blockSize:22,size:14}})]})}]})})},53004:(e,t,r)=>{r.d(t,{A:()=>s});var i=r(28802),l=r(92619),o=r(51053),n=r(11577),a=r(83034);let c=(0,n.rU)(({css:e,prefixCls:t})=>({hoverToActive:e`
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
  `})),s=(0,a.memo)(({hoverToActive:e,className:t,...r})=>{let{cx:n,styles:a,theme:s}=c();return(0,i.Y)(l.Ay,{theme:{components:{Table:{headerBg:s.colorFillQuaternary,headerBorderRadius:0}}},children:(0,i.Y)(o.A,{bordered:!1,className:n(a.table,e&&a.hoverToActive,t),pagination:!1,scroll:{x:"max-content"},size:"small",...r})})})},74584:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(28802),l=r(83034),o=r(27697);let n=(0,l.memo)(({href:e,to:t,...r})=>(0,i.Y)(o.N_,{...r,to:e||t||"/"}));n.displayName="Link";let a=n},79532:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(28802),l=r(83034),o=r(59121),n=r(80457);let a=(0,l.memo)(()=>{let{t:e}=(0,o.Bd)("error",{keyPrefix:"notFound"});return(0,i.Y)(n.Flexbox,{align:"center",height:"100%",justify:"center",style:{minHeight:400},width:"100%",children:(0,i.Y)("h2",{children:e("title")})})})},81597:(e,t,r)=>{r.d(t,{A:()=>g});var i=r(28802),l=r(12389),o=r(11577),n=r(54759),a=r(51997),c=r.n(a),s=r(83034),d=r(80457),h=r(27697);let p=(0,o.rU)(({css:e,token:t})=>({more:e`
    display: flex;
    align-items: center;
    color: ${t.colorTextSecondary};
  `,title:e`
    margin-block: 0.2em;
    font-weight: bold;
    line-height: 1.5;
  `,title2:e`
    font-size: 18px;
  `,title3:e`
    font-size: 16px;
  `})),g=(0,s.memo)(({id:e,tag:t,children:r,moreLink:o,more:a,level:s=2,icon:g,...m})=>{let{cx:b,styles:A}=p(),f=(0,i.Y)("h2",{className:b(A.title,A[`title${s}`]),id:e,children:r}),u=o?.startsWith("http")??!1,x=o?.startsWith("/discover")??!1,y=null;return o&&(y=u?(0,i.FD)(c(),{className:A.more,href:o,target:"_blank",children:[(0,i.Y)("span",{style:{marginRight:4},children:a}),(0,i.Y)(l.default,{icon:n.A})]}):x?(0,i.FD)(h.N_,{className:A.more,to:o.replace("/discover",""),children:[(0,i.Y)("span",{style:{marginRight:4},children:a}),(0,i.Y)(l.default,{icon:n.A})]}):(0,i.FD)(c(),{className:A.more,href:o,children:[(0,i.Y)("span",{style:{marginRight:4},children:a}),(0,i.Y)(l.default,{icon:n.A})]})),(0,i.FD)(d.Flexbox,{align:"center",gap:16,horizontal:!0,justify:"space-between",width:"100%",...m,children:[t||g?(0,i.FD)(d.Flexbox,{align:"center",gap:8,horizontal:!0,children:[g,f,t&&(0,i.Y)(d.Flexbox,{align:"center",gap:4,horizontal:!0,children:t})]}):f,y]})})}}]);