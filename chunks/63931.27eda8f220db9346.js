"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63931],{69544:(e,l,r)=>{r.r(l),r.d(l,{default:()=>A});var i=r(28802),t=r(59121),n=r(53456),o=r(80729),a=r(59202),c=r(33375),d=r(9274),s=r(11577),p=r(91951),h=r(83034),u=r(80457);let b=(0,s.rU)(({css:e,token:l,responsive:r})=>({close:e`
    position: absolute;
    inset-block-start: 16px;
    inset-inline-end: 16px;
  `,container:e`
    position: relative;

    width: 100%;
    padding-inline: 40px;
    border: 1px solid ${l.colorBorderSecondary};
    border-radius: 8px;

    background: ${l.colorBgContainer};

    ${r.mobile} {
      width: 100%;
      padding-inline: 12px;
    }
  `})),k=({setError:e,children:l})=>{let{styles:r}=b(),[t,n]=(0,h.useState)(!0);return t&&(0,i.FD)(u.Flexbox,{className:r.container,children:[(0,i.Y)(d.A,{className:r.close,icon:p.A,onClick:()=>{n(!1),e(void 0)}}),l]})},m=()=>(0,i.Y)(a.A,{active:!0,style:{width:400}}),x=(0,c.default)(()=>Promise.all([r.e(28162),r.e(97721),r.e(35245)]).then(r.bind(r,57626)),{loadableGenerated:{webpack:()=>[57626]},loading:m,ssr:!1}),f=(0,c.default)(()=>Promise.all([r.e(97721),r.e(24308)]).then(r.bind(r,24308)),{loadableGenerated:{webpack:()=>[24308]},loading:m,ssr:!1}),y=/model "([\w+,-_]+)" not found/,w=({defaultError:e,error:l,setError:r})=>{let t=l?.body,n=t.error?.message;if(l?.type==="OllamaServiceUnavailable")return(0,i.Y)(x,{});let o=n?.match(y)?.[1];return o?(0,i.Y)(k,{setError:r,children:(0,i.Y)(f,{model:o})}):n?.includes("Failed to fetch")||n?.includes("fetch failed")?(0,i.Y)(k,{setError:r,children:(0,i.Y)(x,{})}):e},A=()=>{let{t:e}=(0,t.Bd)("modelProvider");return(0,i.Y)(o.A,{...n.A,checkErrorRender:w,settings:{...n.A.settings,proxyUrl:{desc:e("ollama.endpoint.desc"),placeholder:"http://127.0.0.1:11434",title:e("ollama.endpoint.title")}}})}},72573:(e,l,r)=>{r.d(l,{A:()=>i});let i=(0,r(28709).A)("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])}}]);