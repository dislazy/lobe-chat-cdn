"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64665],{11652:(e,t,a)=>{a.d(t,{A:()=>i});let i=(0,a(28709).A)("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]])},19496:(e,t,a)=>{var i=a(28185).Y,n="undefined"!=typeof window?window.matchMedia:null;function l(e,t,a){var l,o=this;function r(e){o.matches=e.matches,o.media=e.media}n&&!a&&(l=n.call(window,e)),l?(this.matches=l.matches,this.media=l.media,l.addListener(r)):(this.matches=i(e,t),this.media=e),this.addListener=function(e){l&&l.addListener(e)},this.removeListener=function(e){l&&l.removeListener(e)},this.dispose=function(){l&&l.removeListener(r)}}e.exports=function(e,t,a){return new l(e,t,a)}},20964:(e,t,a)=>{a.d(t,{A:()=>i});let i=(0,a(28709).A)("panel-left-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]])},28185:(e,t)=>{t.Y=function(e,t){return(function(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(a),l=t[1],o=t[2],r=t[3]||"",c={};return c.inverse=!!l&&"not"===l.toLowerCase(),c.type=o?o.toLowerCase():"all",c.expressions=(r=r.match(/\([^\)]+\)/g)||[]).map(function(e){var t=e.match(i),a=t[1].toLowerCase().match(n);return{modifier:a[1],feature:a[2],value:t[2]}}),c})})(e).some(function(e){var a=e.inverse,i="all"===e.type||t.type===e.type;if(i&&a||!(i||a))return!1;var n=e.expressions.every(function(e){var a=e.feature,i=e.modifier,n=e.value,l=t[a];if(!l)return!1;switch(a){case"orientation":case"scan":return l.toLowerCase()===n.toLowerCase();case"width":case"height":case"device-width":case"device-height":n=s(n),l=s(l);break;case"resolution":n=c(n),l=c(l);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":n=r(n),l=r(l);break;case"grid":case"color":case"color-index":case"monochrome":n=parseInt(n,10)||1,l=parseInt(l,10)||0}switch(i){case"min":return l>=n;case"max":return l<=n;default:return l===n}});return n&&!a||!n&&a})};var a=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,i=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function r(e){var t,a=Number(e);return a||(a=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),a}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function s(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},33249:(e,t,a)=>{a.d(t,{A:()=>H});var i=a(28802),n=a(83034),l=a(80457),o=a(82700),r=a(20577),c=a(11577),s=a(27697),m=a(12389),d=a(75431),h=a(78518),v=a(38153),u=a(9274),p=a(58244),g=a(39001),z=a(80201),f=a(85017),x=a(575),b=a(59121),y=a(20480),w=a(36310),k=a(37546),Y=a(19530);let A="knowledge-base-item",F=(0,c.rU)(({css:e})=>({content:e`
    position: relative;
    overflow: hidden;
    flex: 1;
  `,icon:e`
    min-width: 24px;
    border-radius: 4px;
  `,title:e`
    flex: 1;
    height: 28px;
    line-height: 28px;
    text-align: start;
  `})),C=(0,n.memo)(({id:e,name:t,showMore:a})=>{let{t:o}=(0,b.Bd)(["file","common"]),[c,s,C,$]=(0,r.O)(t=>[t.knowledgeBaseRenamingId===e,t.updateKnowledgeBase,t.removeKnowledgeBase,t.knowledgeBaseLoadingIds.includes(e)]),{styles:D}=F(),B=t=>{r.O.setState({knowledgeBaseRenamingId:t?e:null},!1,"toggleEditing")},{modal:N}=p.A.useApp(),L=(0,n.useMemo)(()=>[{icon:(0,i.Y)(m.default,{icon:g.A}),key:"rename",label:o("rename",{ns:"common"}),onClick:()=>{B(!0)}},{type:"divider"},{danger:!0,icon:(0,i.Y)(m.default,{icon:z.A}),key:"delete",label:o("delete",{ns:"common"}),onClick:()=>{e&&N.confirm({centered:!0,okButtonProps:{danger:!0},onOk:async()=>{await C(e)},title:o("knowledgeBase.list.confirmRemoveKnowledgeBase")})}}],[o,e,N,C]);return(0,i.FD)(l.Flexbox,{align:"center",gap:8,horizontal:!0,justify:"space-between",onDoubleClick:t=>{e&&t.altKey&&B(!0)},children:[(0,i.Y)(y.default,{className:$?"":D.icon,height:24,width:24,children:$?(0,i.Y)(m.default,{icon:f.A,spin:!0}):(0,i.Y)(k.A,{})}),c?(0,i.Y)(h.A,{editing:c,inputProps:{autoFocus:!0,maxLength:64},onChangeEnd:a=>{t!==a&&s(e,{name:a}),B(!1)},onClick:e=>{e.preventDefault()},onEditingChange:B,showEditIcon:!1,style:{height:28},value:t}):t===Y.VH?(0,i.Y)(l.Flexbox,{flex:1,height:28,justify:"center",children:(0,i.Y)(w.A,{})}):(0,i.Y)(d.A,{className:D.title,ellipsis:{rows:1,tooltip:{placement:"left",title:t}},style:{margin:0,opacity:$?.6:void 0},children:t}),a&&!c&&(0,i.Y)("div",{onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,i.Y)(v.A,{arrow:!1,menu:{items:L,onClick:({domEvent:e})=>{e.stopPropagation()}},trigger:["click"],children:(0,i.Y)(u.A,{className:A,icon:x.A,size:"small"})})})]})});C.displayName="KnowledgeBaseItemContent";let $=(0,c.rU)(({css:e,token:t,isDarkMode:a})=>({active:e`
    background: ${a?t.colorFillSecondary:t.colorFillTertiary};
    transition: background 200ms ${t.motionEaseOut};

    &:hover {
      background: ${t.colorFill};
    }
  `,container:e`
    cursor: pointer;
    padding-block: 4px;
    padding-inline: 8px;
    border-radius: ${t.borderRadius}px;

    &.${A} {
      width: calc(100% - 16px);
    }

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,split:e`
    border-block-end: 1px solid ${t.colorSplit};
  `})),D=(0,n.memo)(({name:e,active:t,id:a})=>{let{styles:o,cx:r}=$(),[c,m]=(0,n.useState)(!1),d=(0,s.Zp)();return(0,i.Y)(l.Flexbox,{align:"center",className:r(o.container,A,t&&o.active),distribution:"space-between",horizontal:!0,onClick:()=>{d(`/knowledge/bases/${a}`)},onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{cursor:"pointer"},children:(0,i.Y)(C,{id:a,name:e,showMore:c})})});D.displayName="KnowledgeBaseItem";let B=(0,c.rU)(({css:e,token:t})=>({container:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,paragraph:e`
    justify-content: center;
    width: 100%;

    kbd {
      margin-inline: 2px;
      padding-inline: 6px;
      border-radius: 4px;
      background: ${t.colorFillTertiary};
    }
  `})),N=(0,n.forwardRef)(({size:e=130,style:t,...a},n)=>(0,i.Y)("svg",{fill:"currentColor",fillRule:"evenodd",ref:n,style:{flex:"none",lineHeight:1,...t},viewBox:"0 0 126 64",width:e,xmlns:"http://www.w3.org/2000/svg",...a,children:(0,i.Y)("path",{d:"M.5 63a.5.5 0 001 0h-1zM122 1l-2.887 5h5.774L122 1zM1.5 62.042a.5.5 0 10-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 101 0h-1zm1-1.916a.5.5 0 10-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 101 0h-1zm1.063-1.938a.5.5 0 10-.991-.13l.991.13zm-.418-2.274a.5.5 0 00.924.383l-.924-.383zm1.904-1.312a.5.5 0 10-.793-.609l.793.61zm.776-2.178a.5.5 0 00.61.793l-.61-.793zm2.304-.187a.5.5 0 00-.383-.924l.383.924zm1.761-1.497a.5.5 0 00.13.991l-.13-.991zm2.12.928a.5.5 0 100-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 000-1v1zm2.018-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.019-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.018-1a.5.5 0 100 1v-1zm2.02 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.018-1a.5.5 0 100 1v-1zm2.02 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 000-1v1zm2.018-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.019-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.12.928a.501.501 0 00-.13-.991l.13.991zm1.761-1.497a.501.501 0 00.383.924l-.383-.924zm2.304-.187a.5.5 0 00-.609-.793l.609.793zm.776-2.178a.5.5 0 10.793.609l-.793-.61zm1.904-1.312a.5.5 0 10-.924-.383l.924.383zm-.418-2.274a.5.5 0 10.991.13l-.991-.13zm1.063-1.938a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.916a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zM1.5 63v-.958h-1V63h1zm0-2.875v-1.917h-1v1.917h1zm0-3.833v-1.917h-1v1.917h1zm0-3.834v-1.916h-1v1.916h1zm0-3.833v-1.917h-1v1.917h1zm0-3.833v-1.917h-1v1.917h1zm0-3.834V40h-1v.958h1zm0-.958c0-.333.022-.66.063-.98l-.991-.13A8.574 8.574 0 00.5 40h1zm.569-2.87c.253-.61.584-1.18.98-1.696l-.793-.609a8.49 8.49 0 00-1.11 1.921l.923.383zm2.365-3.08a7.487 7.487 0 011.695-.981l-.383-.924a8.495 8.495 0 00-1.92 1.111l.608.793zm3.586-1.487c.32-.041.648-.063.98-.063v-1c-.376 0-.746.024-1.11.072l.13.991zM9 32.5h1.01v-1H9v1zm3.029 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.019v-1h-2.019v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.019v1zm4.038 0H114v-1h-1.01v1zm1.01 0c.376 0 .746-.024 1.11-.072l-.13-.991c-.32.041-.648.063-.98.063v1zm3.254-.645a8.506 8.506 0 001.921-1.111l-.609-.793a7.519 7.519 0 01-1.695.98l.383.924zm3.49-2.68a8.516 8.516 0 001.111-1.921l-.924-.383a7.527 7.527 0 01-.98 1.695l.793.609zm1.684-4.066c.048-.363.072-.733.072-1.109h-1c0 .332-.022.66-.063.98l.991.13zM122.5 24v-.958h-1V24h1zm0-2.875v-1.917h-1v1.917h1zm0-3.833v-1.917h-1v1.917h1zm0-3.834v-1.916h-1v1.916h1zm0-3.833V7.708h-1v1.917h1zm0-3.833V3.875h-1v1.917h1z"})})),L=(0,n.memo)(()=>{let{styles:e}=B();return(0,i.FD)(l.Flexbox,{align:"flex-end",className:e.container,gap:12,paddingInline:20,width:"100%",children:[(0,i.Y)(N,{}),(0,i.Y)(l.Flexbox,{align:"center",className:e.paragraph,horizontal:!0,children:(0,i.FD)(b.x6,{i18nKey:"knowledgeBase.list.empty",ns:"file",children:["点击 ",(0,i.Y)("kbd",{children:"+"})," 开始创建知识库"]})})]})});var I=a(59202);let S=(0,c.rU)(({css:e,prefixCls:t})=>({container:e`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 36px;
    padding: 8px;

    .${t}-skeleton-content {
      display: flex;
      flex-direction: column;
    }
  `,paragraph:e`
    > li {
      height: 20px !important;
    }
  `})),M=(0,n.memo)(()=>{let{styles:e}=S();return(0,i.Y)(I.A,{active:!0,avatar:!1,className:e.container,paragraph:{className:e.paragraph,rows:1,style:{marginBottom:0},width:"100%"},title:!1})}),P=(0,n.memo)(()=>(0,i.Y)(l.Flexbox,{paddingInline:24,children:Array.from({length:3}).map((e,t)=>(0,i.Y)(M,{},t))})),H=()=>{let{data:e,isLoading:t}=(0,r.O)(e=>e.useFetchKnowledgeBaseList)();return t?(0,i.Y)(P,{}):e?.length===0?(0,i.Y)(L,{}):(0,i.Y)(l.Flexbox,{height:"100%",children:(0,i.Y)(o.aY,{data:e,fixedItemHeight:36,itemContent:(e,t)=>(0,i.Y)(D,{id:t.id,name:t.name},t.id)})})}},36310:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(28802),n=a(11577),l=a(83034),o=a(20480);let r=(0,n.AH)`
  circle {
    animation: bubble 1.5s cubic-bezier(0.05, 0.2, 0.35, 1) infinite;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }

  @keyframes bubble {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 0.5;
    }

    75% {
      opacity: 0.25;
    }

    to {
      opacity: 1;
    }
  }
`,c=(0,l.forwardRef)(({size:e="1em",style:t,className:a,...l},o)=>(0,i.FD)("svg",{className:(0,n.cx)(r,a),fill:"currentColor",fillRule:"evenodd",height:e,ref:o,style:{flex:"none",lineHeight:1,...t},viewBox:"0 0 60 32",xmlns:"http://www.w3.org/2000/svg",...l,children:[(0,i.Y)("circle",{cx:"7",cy:"16",r:"6"}),(0,i.Y)("circle",{cx:"30",cy:"16",r:"6"}),(0,i.Y)("circle",{cx:"53",cy:"16",r:"6"})]})),s=(0,l.memo)(()=>{let e=(0,n.DP)();return(0,i.Y)(o.default,{style:{fill:e.colorTextSecondary,height:24,width:32},children:(0,i.Y)(c,{size:14})})})},49008:(e,t,a)=>{a.d(t,{A:()=>i});let i=(0,a(28709).A)("mic-vocal",[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]])},64665:(e,t,a)=>{a.r(t),a.d(t,{default:()=>eA});var i=a(28802),n=a(11577),l=a(83034),o=a(59121),r=a(80457),c=a(19496),s=a.n(c),m=/[A-Z]/g,d=/^ms-/,h={};function v(e){return"-"+e.toLowerCase()}let u=function(e){if(h.hasOwnProperty(e))return h[e];var t=e.replace(m,v);return h[e]=d.test(t)?"-"+t:t};var p=a(19281),g=a.n(p);let z=g().oneOfType([g().string,g().number]),f={all:g().bool,grid:g().bool,aural:g().bool,braille:g().bool,handheld:g().bool,print:g().bool,projection:g().bool,screen:g().bool,tty:g().bool,tv:g().bool,embossed:g().bool},{type:x,...b}={orientation:g().oneOf(["portrait","landscape"]),scan:g().oneOf(["progressive","interlace"]),aspectRatio:g().string,deviceAspectRatio:g().string,height:z,deviceHeight:z,width:z,deviceWidth:z,color:g().bool,colorIndex:g().bool,monochrome:g().bool,resolution:z,type:Object.keys(f)},y={minAspectRatio:g().string,maxAspectRatio:g().string,minDeviceAspectRatio:g().string,maxDeviceAspectRatio:g().string,minHeight:z,maxHeight:z,minDeviceHeight:z,maxDeviceHeight:z,minWidth:z,maxWidth:z,minDeviceWidth:z,maxDeviceWidth:z,minColor:g().number,maxColor:g().number,minColorIndex:g().number,maxColorIndex:g().number,minMonochrome:g().number,maxMonochrome:g().number,minResolution:z,maxResolution:z,...b};var w={...f,...y};let k=(0,l.createContext)(void 0),Y=e=>{if(e)return Object.keys(e).reduce((t,a)=>(t[u(a)]=e[a],t),{})},A=()=>{let e=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{e.current=!0},[]),e.current};var F=a(27697),C=a(71926),$=a(69177),D=a(17383),B=a(92879),N=a(37412),L=a(9274),I=a(85040),S=a(20964),M=a(49935),P=a(5930),H=a(31065),K=a(38759),R=a(42897),E=a(23047);let O=(0,l.memo)(()=>{let e=(0,K.k)(R.w0.getHotkeyById(E.g8.ToggleLeftPanel)),{t}=(0,o.Bd)(["file"]),a=(0,P.o)(H.I.showFilePanel),n=(0,P.o)(e=>e.updateSystemStatus);return(0,i.Y)(N.A,{hotkey:e,title:t("toggleLeftPanel"),children:(0,i.Y)(L.A,{icon:a?I.A:S.A,id:"toggle-panel-button",onClick:()=>{n({filePanelWidth:a?0:M._7,showFilePanel:!a})},size:M.R4})})});var j=a(11345),_=a(86074),T=a(15516),W=a(54078);let V=(0,l.memo)(({children:e})=>{let t=(0,n.DP)();return(0,i.Y)(r.Flexbox,{flex:1,style:{background:t.colorBgContainerSecondary,overflowY:"auto",position:"relative"},children:e})});V.displayName="Container";var U=a(86653),Z=a(91608);let q=()=>((()=>{let e,t,{enableScope:a,disableScope:i}=(0,U.wc)();e=(0,P.o)(H.I.showFilePanel),t=(0,P.o)(e=>e.updateSystemStatus),(0,Z.y)(E.g8.ToggleLeftPanel,()=>t({filePanelWidth:e?0:M._7,showFilePanel:!e})),(0,l.useEffect)(()=>(a(E.Gs.Files),()=>i(E.Gs.Files)),[])})(),null);var G=a(35558),Q=a(12389),J=a(76925),X=a(11652),ee=a(25777),et=a(28709);let ea=(0,et.A)("file-pen",[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]]);var ei=a(4562),en=a(49008);let el=(0,et.A)("square-play",[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}]]);var eo=a(18328),er=a(35392);let ec=(0,n.rU)(({css:e,token:t})=>({header:e`
    cursor: pointer;
    border-radius: ${t.borderRadius}px;
    color: ${t.colorTextSecondary};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${t.colorFillTertiary};
    }
  `,headerActive:e`
    color: ${t.colorText};
    background-color: ${t.colorFillSecondary};
  `,indentedMenu:e`
    padding-inline-start: 24px;
  `})),es=(0,l.memo)(()=>{let{t:e}=(0,o.Bd)("file"),{styles:t,cx:a}=ec(),[n]=(0,_.W)(),[c,s]=(0,l.useState)(n!==er._K.Home),m=(0,F.Zp)(),d=(0,l.useMemo)(()=>[{icon:(0,i.Y)(Q.default,{icon:X.A}),key:er._K.All,label:e("tab.all")},{icon:(0,i.Y)(Q.default,{icon:ee.A}),key:er._K.Documents,label:e("tab.documents")},{icon:(0,i.Y)(Q.default,{icon:ea}),key:er._K.Pages,label:e("tab.pages")},{icon:(0,i.Y)(Q.default,{icon:ei.A}),key:er._K.Images,label:e("tab.images")},{icon:(0,i.Y)(Q.default,{icon:en.A}),key:er._K.Audios,label:e("tab.audios")},{icon:(0,i.Y)(Q.default,{icon:el}),key:er._K.Videos,label:e("tab.videos")}],[e]),h=n===er._K.Home;return(0,i.FD)(r.Flexbox,{gap:4,children:[(0,i.Y)(r.Flexbox,{align:"center",className:a(t.header,h&&t.headerActive),horizontal:!0,onClick:()=>{m("/knowledge",{replace:!0})},paddingBlock:6,paddingInline:8,children:(0,i.FD)(r.Flexbox,{align:"center",flex:1,gap:8,horizontal:!0,children:[(0,i.Y)(J.P.div,{animate:{rotate:c?0:-90},transition:{duration:.2,ease:"easeInOut"},children:(0,i.Y)(L.A,{icon:G.A,onClick:e=>{e.stopPropagation(),s(!c)},size:"small"})}),(0,i.Y)("div",{style:{flex:1,lineHeight:"14px"},children:e("tab.home")})]})}),(0,i.Y)(J.P.div,{animate:{height:c?"auto":0,opacity:+!!c},initial:!1,style:{overflow:"hidden"},transition:{duration:.2,ease:"easeInOut"},children:(0,i.Y)(r.Flexbox,{children:(0,i.Y)(eo.A,{compact:!0,items:d,onClick:({key:e})=>{let t=e===er._K.Home?"":`?category=${e}`;m(`/knowledge${t}`,{replace:!0})},selectable:!0,selectedKeys:[n]})})})]})});es.displayName="CategoryMenu";var em=a(5686);let ed={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};var eh=a(15983),ev=l.forwardRef(function(e,t){return l.createElement(eh.A,(0,em.A)({},e,{ref:t,icon:ed}))}),eu=a(90897),ep=a(70107),eg=a(33249);let ez=(0,n.rU)(({css:e,token:t})=>({header:e`
    cursor: pointer;
    border-radius: ${t.borderRadius}px;
    color: ${t.colorTextSecondary};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${t.colorFillTertiary};
    }
  `})),ef=()=>{let{t:e}=(0,o.Bd)("file"),{styles:t}=ez(),a=(0,F.Zp)(),[n,c]=(0,l.useState)(!0),{open:s}=(0,ep.P)();return(0,i.FD)(r.Flexbox,{flex:1,gap:8,paddingInline:8,children:[(0,i.FD)(r.Flexbox,{align:"center",className:t.header,horizontal:!0,justify:"space-between",paddingBlock:6,paddingInline:8,children:[(0,i.FD)(r.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,i.Y)(L.A,{icon:n?G.A:ev,onClick:()=>{c(!n)},size:"small"}),(0,i.Y)("div",{style:{flex:1,lineHeight:"14px"},children:e("knowledgeBase.title")})]}),(0,i.Y)(L.A,{icon:eu.A,onClick:()=>{s({onSuccess:e=>{a(`/knowledge/bases/${e}`)}})},size:"small",title:e("knowledgeBase.new")})]}),n&&(0,i.Y)(r.Flexbox,{flex:1,children:(0,i.Y)(eg.A,{})})]})},ex=(0,n.rU)(({css:e,token:t})=>({main:e`
    position: relative;
    overflow: hidden;
    background: ${t.colorBgLayout};
  `,sidebar:e`
    position: relative;

    &:hover .toggle-button {
      opacity: 1;
    }
  `,toggleButton:e`
    position: absolute;
    z-index: 10;
    inset-block-start: 8px;
    inset-inline-end: 8px;

    opacity: 0;

    transition: opacity ${t.motionDurationSlow};
  `})),eb=(0,l.memo)(()=>{let{t:e}=(0,o.Bd)("file"),{styles:t}=ex();return(0,i.FD)(r.Flexbox,{className:t.sidebar,gap:16,height:"100%",children:[(0,i.Y)("div",{className:`${t.toggleButton} toggle-button`,children:(0,i.Y)(O,{})}),(0,i.FD)(r.Flexbox,{paddingInline:8,children:[(0,i.Y)($.A,{desc:e("desc"),title:e("title")}),(0,i.Y)(es,{})]}),(0,i.Y)(ef,{})]})});eb.displayName="Sidebar";let ey=(0,l.memo)(()=>{let{id:e}=(0,F.g)(),[t]=(0,_.W)(),a=(0,W._j)();return(0,i.Y)(B.A,{category:t,documentId:e,onOpenFile:a,title:`${t}`})});ey.displayName="FilesListPage";let ew=(0,l.memo)(()=>(0,i.FD)(i.FK,{children:[(0,i.Y)(C.A,{}),(0,i.FD)(r.Flexbox,{height:"100%",horizontal:!0,style:{maxWidth:"100%",overflow:"hidden",position:"relative"},width:"100%",children:[(0,i.Y)(D.A,{children:(0,i.Y)(eb,{})}),(0,i.Y)(V,{children:(0,i.Y)(ey,{})})]}),(0,i.Y)(q,{}),(0,i.Y)(T.A,{})]}));ew.displayName="DesktopLayout";let ek=(0,l.memo)(()=>{let e=(0,j.e)(),{styles:t}=ex();return(0,i.FD)(i.FK,{children:[(0,i.Y)(C.A,{}),(0,i.Y)(r.Flexbox,{className:t.main,height:"100%",style:e?{display:"none"}:void 0,width:"100%",children:(0,i.Y)(eb,{})}),(0,i.Y)(r.Flexbox,{className:t.main,height:"100%",style:e?void 0:{display:"none"},width:"100%",children:(0,i.Y)(ey,{})}),(0,i.Y)(T.A,{})]})});ek.displayName="MobileLayout";let eY=(0,l.memo)(()=>((e,t,a)=>{let i=(e=>{let t=(0,l.useContext)(k),a=()=>Y(e)||Y(t),[i,n]=(0,l.useState)(a);return(0,l.useEffect)(()=>{let e=a();!function(e,t){if(e===t)return!0;if(!e||!t)return!1;let a=Object.keys(e),i=Object.keys(t),n=a.length;if(i.length!==n)return!1;for(let i=0;i<n;i++){let n=a[i];if(e[n]!==t[n]||!Object.prototype.hasOwnProperty.call(t,n))return!1}return!0}(i,e)&&n(e)},[e,t]),i})(void 0),n=(e=>{let t=()=>{let t;return e.query||(t=[],Object.keys(w).forEach(a=>{let i=e[a];null!=i&&t.push(((e,t)=>{let a=u(e);if("number"==typeof t&&(t=`${t}px`),!0===t)return a;if(!1===t)return`not ${a}`;return`(${a}: ${t})`})(a,i))}),t.join(" and "))},[a,i]=(0,l.useState)(t);return(0,l.useEffect)(()=>{let e=t();a!==e&&i(e)},[e]),a})(e);if(!n)throw Error("Invalid or missing MediaQuery!");let o=((e,t)=>{let a=()=>s()(e,t||{},!!t),[i,n]=(0,l.useState)(a),o=A();return(0,l.useEffect)(()=>{if(o){let e=a();return n(e),()=>{e&&e.dispose()}}},[e,t]),i})(n,i),r=(e=>{let[t,a]=(0,l.useState)(e.matches);return(0,l.useEffect)(()=>{let t=e=>{a(e.matches)};return e.addListener(t),a(e.matches),()=>{e.removeListener(t)}},[e]),t})(o);return A(),(0,l.useEffect)(()=>{},[r]),(0,l.useEffect)(()=>()=>{o&&o.dispose()},[]),r})({maxWidth:768})?(0,i.Y)(ek,{}):(0,i.Y)(ew,{}));eY.displayName="KnowledgeHomePage";let eA=eY},69177:(e,t,a)=>{a.d(t,{A:()=>c});var i=a(28802),n=a(11577),l=a(83034),o=a(80457);let r=(0,n.rU)(({token:e,css:t})=>({desc:t`
    line-height: 1.4;
    color: ${e.colorTextDescription};
  `,header:t`
    padding-block: 24px 0;
    padding-inline: 0.75rem;
  `,title:t`
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
  `})),c=(0,l.memo)(({title:e,desc:t,style:a})=>{let{styles:n}=r();return(0,i.FD)(o.Flexbox,{className:n.header,gap:4,style:a,children:[(0,i.Y)("h1",{className:n.title,children:e}),(0,i.Y)("p",{className:n.desc,children:t})]})})},71926:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(28802),n=a(11577),l=a(44476),o=a.n(l),r=a(83034),c=a(64861);let s=(0,r.memo)(()=>{let e=(0,n.DP)();return!c.xl&&(0,i.Y)(o(),{color:e.colorText,height:2,shadow:!1,showSpinner:!1,zIndex:1e3})})}}]);