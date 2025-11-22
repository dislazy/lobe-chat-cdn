"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33792],{19880:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(74233)._(r(83034)).default.createContext(null)},25938:(e,t,r)=>{r.d(t,{APIKeys:()=>n.Lq,CreateOrganization:()=>n.ul,GoogleOneTap:()=>n.PQ,OrganizationList:()=>n.oE,OrganizationProfile:()=>u,OrganizationSwitcher:()=>n.NC,PricingTable:()=>n.nm,SignIn:()=>h,SignInButton:()=>n.hZ,SignInWithMetamaskButton:()=>n.M_,SignOutButton:()=>n.ct,SignUp:()=>p,SignUpButton:()=>n.Ny,TaskChooseOrganization:()=>n.i9,UserAvatar:()=>n.H8,UserButton:()=>n.uF,UserProfile:()=>s,Waitlist:()=>n.cP});var n=r(88671),o=r(83034),a=r(83432),i=r(98962),l=r(76995);function c(e,t,s=!0){let u=(()=>{let e=o.useRef(),{pagesRouter:t}=(0,l.r)();if(t)if(e.current)return e.current;else return e.current=t.pathname.replace(/\/\[\[\.\.\..*/,""),e.current;let n=r(50718).usePathname,a=r(50718).useParams,i=(n()||"").split("/").filter(Boolean),c=Object.values(a()||{}).filter(e=>Array.isArray(e)).flat(1/0);return e.current||(e.current=`/${i.slice(0,i.length-c.length).join("/")}`),e.current})(),h=(0,a.yC)(e,t,{path:u});return((e,t,r,a=!0)=>{let c=o.useRef(0),{pagesRouter:s}=(0,l.r)(),{session:u,isLoaded:h}=(0,n.wV)();(0,i.Fj)()||o.useEffect(()=>{if(!h||r&&"path"!==r||a&&!u)return;let n=new AbortController,o=()=>{let r=s?`${t}/[[...index]].tsx`:`${t}/[[...rest]]/page.tsx`;throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${t}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${r}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${t}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${t}(.*)". For more information, see: https://clerk.com/docs/reference/nextjs/clerk-middleware#create-route-matcher
`)};return s?s.pathname.match(/\[\[\.\.\..+]]/)||o():(async()=>{let t;if(c.current++,!(c.current>1)){try{let r=`${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;t=await fetch(r,{signal:n.signal})}catch{}(null==t?void 0:t.status)===404&&o()}})(),()=>{c.current>1&&n.abort()}},[h])})(e,u,h.routing,s),h}let s=Object.assign(e=>o.createElement(n.Fv,{...c("UserProfile",e)}),{...n.Fv}),u=Object.assign(e=>o.createElement(n.nC,{...c("OrganizationProfile",e)}),{...n.nC}),h=e=>o.createElement(n.Ls,{...c("SignIn",e,!1)}),p=e=>o.createElement(n.Hx,{...c("SignUp",e,!1)})},76583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c,useStyles:()=>l});var n=r(28802),o=r(25938),a=r(11577),i=r(83034);let l=(0,a.rU)(({css:e,responsive:t,token:r})=>({cardBox:e`
        width: 100%;
        min-width: 100%;
        background: transparent;
      `,footer:e`
        display: none !important;
      `,headerTitle:e`
        ${t.mobile} {
          margin: 0;
          padding: 16px;

          font-size: 14px;
          font-weight: 400;
          line-height: 24px;

          opacity: 0.5;
        }
      `,navbar:e`
        display: none !important;
      `,navbarMobileMenuRow:e`
        display: none !important;
      `,pageScrollBox:e`
        padding: 0;
      `,profileSection:e`
        ${t.mobile} {
          padding-inline: 16px;
          background: ${r.colorBgContainer};
        }
      `,rootBox:e`
        width: 100%;
        height: 100%;
      `,scrollBox:e`
        background: transparent !important;
      `})),c=(0,i.memo)(({mobile:e})=>{let{styles:t}=l(e);return(0,n.Y)(o.UserProfile,{appearance:{elements:t},path:"/profile"})})}}]);