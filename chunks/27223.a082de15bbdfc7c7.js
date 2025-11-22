"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27223],{7179:(e,r,o)=>{o.d(r,{A:()=>g});var l=o(28802),a=o(76181),t=o(11577),i=o(83034),n=o(27697),c=o(82520),d=o(96477);let s=(0,t.rU)(({css:e,token:r,prefixCls:o})=>({page:e`
      .${o}-pagination-item-active {
        border-color: ${r.colorFillSecondary};
        background: ${r.colorFillSecondary};

        &:hover {
          border-color: ${r.colorFill};
          background: ${r.colorFill};
        }
      }
    `})),g=(0,i.memo)(({tab:e,currentPage:r,total:o,pageSize:t})=>{let{styles:i}=s(),{page:g}=(0,d.I)(),m=(0,n.Zp)(),p=(0,n.zy)();return(0,l.Y)(a.A,{className:i.page,current:g?Number(g):r,"data-testid":"pagination",onChange:r=>{let o=new URLSearchParams(p.search);o.set("page",String(r)),m(`/discover/${e}?${o.toString()}`);let l=document?.querySelector(`#${c.n}`);l&&l.scrollTo({behavior:"smooth",top:0})},pageSize:t,showSizeChanger:!1,style:{alignSelf:"flex-end"},total:o})})},27223:(e,r,o)=>{o.r(r),o.d(r,{DesktopProviderPage:()=>p,MobileProviderPage:()=>u});var l=o(28802),a=o(83034),t=o(80457),i=o(96477),n=o(259),c=o(61451),d=o(7179),s=o(19676),g=o(18710);let m=(0,a.memo)(()=>{let{q:e,page:r,sort:o,order:a}=(0,i.I)(),{data:m,isLoading:p}=(0,n.Q)(e=>e.useProviderList)({order:a,page:r,pageSize:21,q:e,sort:o});if(p||!m)return(0,l.Y)(g.A,{});let{items:u,currentPage:b,pageSize:h,totalCount:v}=m;return(0,l.FD)(t.Flexbox,{gap:32,width:"100%",children:[(0,l.Y)(s.A,{data:u}),(0,l.Y)(d.A,{currentPage:b,pageSize:h,tab:c.bz.Providers,total:v})]})}),p=(0,a.memo)(()=>(0,l.Y)(m,{mobile:!1})),u=(0,a.memo)(()=>(0,l.Y)(m,{mobile:!0}))},82520:(e,r,o)=>{o.d(r,{g:()=>l,n:()=>a});let l=1440,a="discover-scroll"}}]);