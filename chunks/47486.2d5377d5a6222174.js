"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47486],{47486:(e,l,t)=>{t.r(l),t.d(l,{default:()=>I});var i=t(28802),a=t(83034),n=t(80457),o=t(27697),r=t(15516),d=t(54078),c=t(17383),s=t(92879),h=t(20577);let p=e=>l=>(l=>l.activeKnowledgeBaseItems[e])(l)?.name;var m=t(12389),g=t(25777),u=t(59121),x=t(18328);let Y=()=>{let{t:e}=(0,u.Bd)("knowledgeBase"),l=(0,a.useMemo)(()=>[{icon:(0,i.Y)(m.default,{icon:g.A}),key:"files",label:e("tab.files")}],[e]);return(0,i.Y)(n.Flexbox,{children:(0,i.Y)(x.A,{compact:!0,items:l,selectable:!0,selectedKeys:["files"]})})};Y.displayName="MenuItems";var y=t(75431),F=t(59202),b=t(20480),f=t(37546),k=t(11577),w=t(26420);let B=(0,k.rU)(({css:e,token:l})=>({container:e`
      cursor: pointer;

      width: fit-content;
      height: 24px;
      padding-inline: 8px;
      border-radius: 6px;

      color: ${l.colorTextTertiary};

      &:hover {
        color: ${l.colorTextSecondary};
        background: ${l.colorFillTertiary};
      }
    `})),v=(0,a.memo)(({to:e})=>{let{t:l}=(0,u.Bd)("components"),{styles:t}=B(),a=(0,o.Zp)();return(0,i.FD)(n.Flexbox,{align:"center",className:t.container,gap:4,horizontal:!0,onClick:()=>{a(e)},children:[(0,i.Y)(m.default,{icon:w.A}),(0,i.Y)("div",{children:l("GoBack.back")})]})});v.displayName="GoBack";let A=(0,a.memo)(({id:e})=>{let l=(0,h.O)(p(e));return(0,i.FD)(n.Flexbox,{gap:8,children:[(0,i.Y)(v,{to:"/knowledge"}),(0,i.FD)(n.Flexbox,{align:"center",gap:8,height:36,horizontal:!0,children:[(0,i.Y)(b.default,{style:{minWidth:24},width:24,children:(0,i.Y)(f.A,{})}),l?(0,i.Y)(y.A,{ellipsis:!0,strong:!0,style:{fontSize:16},children:l}):(0,i.Y)(F.A,{active:!0,paragraph:!1,title:{style:{marginBottom:0},width:80}})]})]})});A.displayName="Head";let N=(0,a.memo)(({id:e})=>(0,i.FD)(n.Flexbox,{gap:16,height:"100%",paddingInline:12,style:{paddingTop:12},children:[(0,i.Y)(A,{id:e}),(0,i.Y)(Y,{})]}));N.displayName="Menu";let D=(0,a.memo)(()=>{let{id:e}=(0,o.LG)(),l=(0,d._j)();(0,h.O)(e=>e.useFetchKnowledgeBaseItem)(e);let t=(0,h.O)(p(e));return(0,i.FD)(i.FK,{children:[(0,i.Y)(c.A,{children:(0,i.Y)(N,{id:e})}),(0,i.Y)(n.Flexbox,{flex:1,style:{overflow:"hidden",position:"relative"},children:(0,i.Y)(s.A,{knowledgeBaseId:e,onOpenFile:l,title:t})}),(0,i.Y)(r.A,{})]})});D.displayName="KnowledgeBaseDetailPage";let I=D}}]);