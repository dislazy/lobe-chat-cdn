"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55583],{7179:(e,o,r)=>{r.d(o,{A:()=>g});var l=r(28802),t=r(76181),a=r(11577),i=r(83034),n=r(27697),c=r(82520),d=r(96477);let s=(0,a.rU)(({css:e,token:o,prefixCls:r})=>({page:e`
      .${r}-pagination-item-active {
        border-color: ${o.colorFillSecondary};
        background: ${o.colorFillSecondary};

        &:hover {
          border-color: ${o.colorFill};
          background: ${o.colorFill};
        }
      }
    `})),g=(0,i.memo)(({tab:e,currentPage:o,total:r,pageSize:a})=>{let{styles:i}=s(),{page:g}=(0,d.I)(),u=(0,n.Zp)(),m=(0,n.zy)();return(0,l.Y)(t.A,{className:i.page,current:g?Number(g):o,"data-testid":"pagination",onChange:o=>{let r=new URLSearchParams(m.search);r.set("page",String(o)),u(`/discover/${e}?${r.toString()}`);let l=document?.querySelector(`#${c.n}`);l&&l.scrollTo({behavior:"smooth",top:0})},pageSize:a,showSizeChanger:!1,style:{alignSelf:"flex-end"},total:r})})},14889:(e,o,r)=>{r.r(o),r.d(o,{DesktopModelPage:()=>m,MobileModelPage:()=>p});var l=r(28802),t=r(83034),a=r(80457),i=r(96477),n=r(259),c=r(61451),d=r(7179),s=r(13706),g=r(18710);let u=(0,t.memo)(()=>{let{q:e,page:o,category:r,sort:t,order:u}=(0,i.I)(),{data:m,isLoading:p}=(0,n.Q)(e=>e.useModelList)({category:r,order:u,page:o,pageSize:21,q:e,sort:t});if(p||!m)return(0,l.Y)(g.A,{});let{items:b,currentPage:h,pageSize:S,totalCount:v}=m;return(0,l.FD)(a.Flexbox,{gap:32,width:"100%",children:[(0,l.Y)(s.A,{data:b}),(0,l.Y)(d.A,{currentPage:h,pageSize:S,tab:c.bz.Models,total:v})]})}),m=(0,t.memo)(()=>(0,l.Y)(u,{mobile:!1})),p=(0,t.memo)(()=>(0,l.Y)(u,{mobile:!0}))},82487:(e,o,r)=>{r.d(o,{A:()=>a});var l=r(84928),t=r(26985);let a=(0,l.A)(function(e,o,r){return e+(r?" ":"")+(0,t.A)(o)})},82520:(e,o,r)=>{r.d(o,{g:()=>l,n:()=>t});let l=1440,t="discover-scroll"}}]);