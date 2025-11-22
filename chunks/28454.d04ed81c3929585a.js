"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28454],{6073:(e,i,t)=>{t.r(i),t.d(i,{default:()=>C});var l=t(28802),r=t(96830),a=t(11577),n=t(33375),o=t(83034),d=t(80457),c=t(56003),h=t(81962),x=t(44452),s=t(82700),p=t(77605),b=t(59202);let g=(0,o.memo)(()=>(0,l.FD)(d.Flexbox,{padding:12,children:[(0,l.Y)(b.A,{active:!0,paragraph:{width:"70%"},title:!1}),(0,l.Y)(b.A,{active:!0,paragraph:{width:"40%"},title:!1}),(0,l.Y)(b.A,{active:!0,paragraph:{width:"80%"},title:!1}),(0,l.Y)(b.A,{active:!0,paragraph:{width:"30%"},title:!1}),(0,l.Y)(b.A,{active:!0,paragraph:{width:"50%"},title:!1}),(0,l.Y)(b.A,{active:!0,paragraph:{width:"70%"},title:!1})]})),m=(0,a.rU)(({css:e,token:i})=>({container:e`
    padding-block: 12px;
    padding-inline: 8px;
    border-block-end: 1px dashed ${i.colorBorderSecondary};
    border-radius: 4px;

    &:hover {
      background: ${i.colorFillTertiary};
    }
  `,text:e`
    font-size: 14px;
    line-height: 24px;
  `,title:e`
    font-size: 18px;
  `})),u=(0,o.memo)(({text:e,type:i,id:t})=>{let{styles:r,cx:a}=m(),n=(0,c.x)(e=>e.highlightChunks),h=(0,o.useMemo)(()=>"Title"===i?r.title:r.text,[i]);return(0,l.Y)(d.Flexbox,{className:a(r.container,h),onMouseEnter:()=>{n([t])},onMouseLeave:()=>{n([])},children:e})}),Y=(0,o.memo)(({fileId:e})=>{let{data:i,isLoading:t,fetchNextPage:r}=p.Qm.chunk.getChunksByFileId.useInfiniteQuery({id:e},{getNextPageParam:e=>e.nextCursor}),a=i?.pages.flatMap(e=>e.items)||[];return t?(0,l.Y)(g,{}):(0,l.Y)(d.Flexbox,{flex:1,children:(0,l.Y)(s.aY,{data:a,endReached:()=>{r()},itemContent:(e,i)=>(0,l.Y)(d.Flexbox,{paddingInline:12,children:(0,l.Y)(u,{...i,index:e})},i.id)})})});var F=t(31021),f=t.n(F),k=t(3136);let y=(0,a.rU)(({css:e,token:i})=>({container:e`
    padding-block: 12px;
    padding-inline: 8px;
    border-block-end: 1px solid ${i.colorBorderSecondary};
    border-radius: 4px;

    &:hover {
      background: ${i.colorFillTertiary};
    }
  `,pageNumber:e`
    font-size: 12px;
    color: ${i.colorTextDescription};
  `,text:e`
    font-size: 14px;
    line-height: 24px;
  `,title:e`
    font-size: 18px;
  `})),S=(0,o.memo)(({text:e,pageNumber:i,type:t,similarity:r})=>{let{styles:a,cx:n}=y(),c=(0,o.useMemo)(()=>"Title"===t?a.title:a.text,[t]);return(0,l.FD)(d.Flexbox,{className:n(a.container,c),gap:8,children:[e,(0,l.FD)(d.Flexbox,{align:"center",distribution:"space-between",horizontal:!0,children:[(0,l.Y)(k.A,{bordered:!1,children:r.toFixed(2)}),(0,l.FD)(d.Flexbox,{className:a.pageNumber,children:["第 ",i," 页"]})]})]})}),v=(0,o.memo)(()=>{let e=(0,c.x)(e=>e.isSimilaritySearching),i=(0,c.x)(e=>e.similaritySearchChunks,f());return e?(0,l.Y)(g,{}):(0,l.Y)(d.Flexbox,{flex:1,children:(0,l.Y)(s.aY,{data:i,itemContent:(e,i)=>(0,l.Y)(d.Flexbox,{paddingInline:12,children:(0,l.Y)(S,{...i,index:e})},i.id)})})}),w=(0,o.memo)(()=>{let[e,i,t]=(0,c.x)(e=>[e.chunkDetailId,e.isSimilaritySearch,e.semanticSearch]);if(e)return(0,l.FD)(d.Flexbox,{gap:8,height:"100%",paddingBlock:"16px 0",children:[(0,l.Y)(d.Flexbox,{paddingInline:12,children:(0,l.Y)(x.A,{onChange:e=>{e||c.x.setState({isSimilaritySearch:!1})},onSearch:async i=>{c.x.setState({isSimilaritySearch:!!i}),t(i,e)},variant:"filled"})}),i?(0,l.Y)(v,{}):(0,l.Y)(Y,{fileId:e})]})}),D=(0,n.default)(()=>Promise.resolve().then(t.bind(t,81040)),{loadableGenerated:{webpack:()=>[81040]},ssr:!1}),C=(0,o.memo)(()=>{let[e,i,t]=(0,c.x)(e=>[e.chunkDetailId,!!e.chunkDetailId,e.closeChunkDrawer]),n=(0,c.x)(h.S.getFileById(e)),o=(0,a.DP)();return(0,l.Y)(r.A,{onClose:()=>{t()},open:i,styles:{body:{padding:0}},title:n?.name,width:"90%",children:(0,l.FD)(d.Flexbox,{height:"100%",horizontal:!0,style:{overflow:"hidden"},children:[n&&(0,l.Y)(d.Flexbox,{flex:2,style:{overflow:"scroll"},children:(0,l.Y)(D,{...n})}),(0,l.Y)(d.Flexbox,{flex:1,style:{borderInlineStart:`1px solid ${o.colorSplit}`},children:(0,l.Y)(w,{})})]})})})}}]);