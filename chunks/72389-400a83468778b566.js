"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72389,76157],{3937:(e,t,i)=>{i.d(t,{f:()=>r});var a=i(73616);let r={getPluginById:e=>t=>t.oldPluginItems.find(t=>t.identifier===e),getPluginInstallProgress:e=>t=>t.pluginInstallProgress[e],isOldPluginInInstallProgress:e=>t=>!!t.pluginInstallProgress[e],isPluginInstallLoading:e=>t=>t.pluginInstallLoading[e],onlinePluginStore:e=>{let t=new Set(e.installedPlugins.map(e=>e.identifier));return(e.listType===a.T6.Plugin?e.oldPluginItems:e.oldPluginItems.filter(e=>t.has(e.identifier))).map(e=>({author:e.author,createdAt:e.createdAt,homepage:e.homepage,identifier:e.identifier,meta:{avatar:e.avatar,description:e.description,tags:e.tags,title:e.title},type:"plugin"}))}}},10858:(e,t,i)=>{i.d(t,{S:()=>u});var a=i(74551),r=i(60317),n=i(25214),s=i(82649),o=i(67137);function l(e){try{let t=JSON.stringify(e);return new TextEncoder().encode(t).length}catch(e){return console.warn("Failed to calculate object size:",e),0}}class c{async invokeMcpToolCall(e,{signal:t,topicId:c}){let u,d,p,{pluginSelectors:g}=await i.e(12107).then(i.bind(i,12107)),{getToolStoreState:m}=await Promise.resolve().then(i.bind(i,74038)),h=m(),{identifier:f,arguments:y,apiName:w}=e,b=g.getInstalledPluginById(f)(h),I=g.getCustomPluginById(f)(h),M=b||I;if(!M)return;let v=M.customParams?.mcp,P=M.settings?Object.entries(M.settings).filter(([,e])=>null!=e):[],S=P.length>0?P.reduce((e,[t,i])=>(e[t]=i,e),{}):void 0,T={...v,name:f};v?.type==="http"&&(T.headers={...v.headers,...S}),v?.type==="stdio"&&(T.env={...v?.env,...S});let C={args:y,env:v?.type==="stdio"?T.env:S??v?.env,params:T,toolName:w},k=M?.customParams?.mcp?.type==="stdio",x=Date.now(),A=!1;try{return p=a.xl&&k?await n.w.mcp.callTool.mutate(C,{signal:t}):await s.t.mcp.callTool.mutate(C,{signal:t}),A=!0,p}catch(e){throw A=!1,u="CALL_FAILED",d=e.message,e}finally{let e=Date.now(),t=l((0,r.N8)(y)||y),i=A&&p?l(p.state):0,n=!!I,s={callDurationMs:e-x,customPluginInfo:n?{avatar:M.manifest?.meta.avatar,description:M.manifest?.meta.description,name:M.manifest?.meta.title}:void 0,errorCode:u,errorMessage:d,identifier:f,isCustomPlugin:n,metadata:{appVersion:a.V_,command:M.customParams?.mcp?.command,mcpType:M.customParams?.mcp?.type},methodName:w,methodType:"tool",requestSizeBytes:t,responseSizeBytes:i,sessionId:c,success:A,version:M.manifest.version||"unknown"};o.R.reportPluginCall(s).catch(e=>{console.warn("Failed to report MCP tool call:",e)})}}async getStreamableMcpServerManifest(e,t){return a.xl&&(0,r.HL)(e.url)?n.w.mcp.getStreamableMcpServerManifest.query(e,{signal:t}):s.t.mcp.getStreamableMcpServerManifest.query(e,{signal:t})}async getStdioMcpServerManifest(e,t,i){return n.w.mcp.getStdioMcpServerManifest.query({...e,metadata:t},{signal:i})}async checkInstallation(e,t){return n.w.mcp.validMcpServerInstallable.mutate({deploymentOptions:e.deploymentOptions},{signal:t})}}let u=new c},14056:(e,t,i)=>{i.d(t,{v:()=>a,z:()=>r});let a="lobe-code-interpreter",r={api:[{description:"A Python interpreter. Use this tool to run Python code. ",name:"python",parameters:{properties:{code:{description:"The Python code to run.",type:"string"},packages:{description:"The packages to install before running the code.",items:{type:"string"},type:"array"}},required:["packages","code"],type:"object"}}],identifier:a,meta:{avatar:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4wMTY0IDJDMTAuODE5MyAyIDkuMDM4MjUgMy43MjQ1MyA5LjAzODI1IDUuODUxODVWOC41MTg1MkgxNS45MjM1VjkuMjU5MjZINS45NzgxNEMzLjc4MTA3IDkuMjU5MjYgMiAxMC45ODM4IDIgMTMuMTExMUwyIDE4Ljg4ODlDMiAyMS4wMTYyIDMuNzgxMDcgMjIuNzQwNyA1Ljk3ODE0IDIyLjc0MDdIOC4yNzMyMlYxOS40ODE1QzguMjczMjIgMTcuMzU0MiAxMC4wNTQzIDE1LjYyOTYgMTIuMjUxNCAxNS42Mjk2SDE5LjU5NTZDMjEuNDU0NyAxNS42Mjk2IDIyLjk2MTcgMTQuMTcwNCAyMi45NjE3IDEyLjM3MDRWNS44NTE4NUMyMi45NjE3IDMuNzI0NTMgMjEuMTgwNyAyIDE4Ljk4MzYgMkgxMy4wMTY0Wk0xMi4wOTg0IDYuNzQwNzRDMTIuODU4OSA2Ljc0MDc0IDEzLjQ3NTQgNi4xNDM3OCAxMy40NzU0IDUuNDA3NDFDMTMuNDc1NCA0LjY3MTAzIDEyLjg1ODkgNC4wNzQwNyAxMi4wOTg0IDQuMDc0MDdDMTEuMzM3OCA0LjA3NDA3IDEwLjcyMTMgNC42NzEwMyAxMC43MjEzIDUuNDA3NDFDMTAuNzIxMyA2LjE0Mzc4IDExLjMzNzggNi43NDA3NCAxMi4wOTg0IDYuNzQwNzRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfODdfODIwNCkiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguOTgzNCAzMEMyMS4xODA1IDMwIDIyLjk2MTYgMjguMjc1NSAyMi45NjE2IDI2LjE0ODJWMjMuNDgxNUwxNi4wNzYzIDIzLjQ4MTVMMTYuMDc2MyAyMi43NDA4TDI2LjAyMTcgMjIuNzQwOEMyOC4yMTg4IDIyLjc0MDggMjkuOTk5OCAyMS4wMTYyIDI5Ljk5OTggMTguODg4OVYxMy4xMTExQzI5Ljk5OTggMTAuOTgzOCAyOC4yMTg4IDkuMjU5MjggMjYuMDIxNyA5LjI1OTI4TDIzLjcyNjYgOS4yNTkyOFYxMi41MTg1QzIzLjcyNjYgMTQuNjQ1OSAyMS45NDU1IDE2LjM3MDQgMTkuNzQ4NSAxNi4zNzA0TDEyLjQwNDIgMTYuMzcwNEMxMC41NDUxIDE2LjM3MDQgOS4wMzgwOSAxNy44Mjk2IDkuMDM4MDkgMTkuNjI5Nkw5LjAzODA5IDI2LjE0ODJDOS4wMzgwOSAyOC4yNzU1IDEwLjgxOTIgMzAgMTMuMDE2MiAzMEgxOC45ODM0Wk0xOS45MDE1IDI1LjI1OTNDMTkuMTQwOSAyNS4yNTkzIDE4LjUyNDQgMjUuODU2MiAxOC41MjQ0IDI2LjU5MjZDMTguNTI0NCAyNy4zMjkgMTkuMTQwOSAyNy45MjU5IDE5LjkwMTUgMjcuOTI1OUMyMC42NjIgMjcuOTI1OSAyMS4yNzg1IDI3LjMyOSAyMS4yNzg1IDI2LjU5MjZDMjEuMjc4NSAyNS44NTYyIDIwLjY2MiAyNS4yNTkzIDE5LjkwMTUgMjUuMjU5M1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl84N184MjA0KSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfODdfODIwNCIgeDE9IjEyLjQ4MDkiIHkxPSIyIiB4Mj0iMTIuNDgwOSIgeTI9IjIyLjc0MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiMzMjdFQkQiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE1NjVBNyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl84N184MjA0IiB4MT0iMTkuNTE5IiB5MT0iOS4yNTkyOCIgeDI9IjE5LjUxOSIgeTI9IjMwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRkZEQTRCIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGOUM2MDAiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4=",title:"Code Interpreter"},systemRole:`When you send a message containing Python code to python, it will be executed in a temporary pyodide python environment in browser.
python will respond with the output of the execution or time out after 60.0 seconds.
The drive at '/mnt/data' can be used to save and persist user files.

If you are using matplotlib:
- never use seaborn
- give each chart its own distinct plot (no subplots)
- never set any specific colors – unless explicitly asked to by the user

If you are accessing the internet, You MUST use pyfetch from pyodide.http package. Any other methods of accessing the internet will fail.
pyfetch is a wrapper of js fetch API, it is a async function that returns a pyodide.http.FetchResponse object.
Here are some useful methods of FetchResponse:
  - async bytes(): returns a bytes object
  - async text(): returns a string
  - async json(): returns a json object

If you are generating files:
- You MUST use the instructed library for each supported file format. (Do not assume any other libraries are available):
  - pdf --> reportlab
  - docx --> python-docx
  - xlsx --> openpyxl
  - pptx --> python-pptx
  - csv --> pandas
  - ods --> odfpy
  - odt --> odfpy
  - odp --> odfpy
- None of the above packages are installed by default. You MUST include them in the packages parameter to install them EVERY TIME.
- If you are generating a pdf
  - You MUST prioritize generating text content using reportlab.platypus rather than canvas
  - If you are generating text in Chinese, you MUST use STSong. To use the font, you must call pdfmetrics.registerFont(TTFont('STSong', 'STSong.ttf')) and apply the style to all text elements
  `,type:"builtin"}},14306:(e,t,i)=>{i.d(t,{J:()=>n});var a=i(5930),r=i(76694);let n={getCurrentLanguage:()=>r.c.currentLanguage(a.o.getState())}},23211:(e,t,i)=>{i.d(t,{V:()=>a});let a={getPluginAvatar:e=>e?.avatar||"\uD83E\uDDE9",getPluginDesc:e=>e?.description,getPluginFormList:(e,t)=>e?.find(e=>e.identifier===t),getPluginTags:e=>e?.tags,getPluginTitle:e=>e?.title,isCustomPlugin:(e,t)=>t.some(t=>t.identifier===e&&"customPlugin"===t.type),isSettingSchemaNonEmpty:e=>e?.properties&&Object.keys(e.properties).length>0}},25214:(e,t,i)=>{i.d(t,{w:()=>n});var a=i(49938),r=i(91171);let n=(0,a.XT)({links:[(0,a.Lb)({transformer:r.Ay,url:"/trpc/desktop"})]})},29914:(e,t,i)=>{let a,r,n;i.d(t,{Ay:()=>o,Ew:()=>r,iU:()=>a,yl:()=>n});var s=i(58244);let o=(0,i(83034).memo)(()=>{let e=s.A.useApp();return a=e.message,n=e.modal,r=e.notification,null})},31065:(e,t,i)=>{i.d(t,{I:()=>n,i:()=>r});var a=i(78397);let r=e=>e.status,n={chatInputHeight:e=>e.status.chatInputHeight||64,disabledModelProvidersSortType:e=>e.status.disabledModelProvidersSortType||"default",disabledModelsSortType:e=>e.status.disabledModelsSortType||"default",expandInputActionbar:e=>e.status.expandInputActionbar,filePanelWidth:e=>e.status.filePanelWidth,getAgentSystemRoleExpanded:e=>t=>!1!==(t.status.systemRoleExpandedMap||{})[e],hidePWAInstaller:e=>e.status.hidePWAInstaller,imagePanelWidth:e=>e.status.imagePanelWidth,imageTopicPanelWidth:e=>e.status.imageTopicPanelWidth,inZenMode:e=>e.status.zenMode,isShowCredit:e=>e.status.isShowCredit,isStatusInit:e=>!!e.isStatusInit,language:e=>e.status.language||"auto",mobileShowPortal:e=>e.status.mobileShowPortal,mobileShowTopic:e=>e.status.mobileShowTopic,portalWidth:e=>e.status.portalWidth||400,sessionGroupKeys:e=>e.status.expandSessionGroupKeys||a._X.expandSessionGroupKeys,sessionWidth:e=>e.status.sessionsWidth,showChatHeader:e=>!e.status.zenMode,showChatSideBar:e=>!e.status.zenMode&&e.status.showChatSideBar,showFilePanel:e=>e.status.showFilePanel,showImagePanel:e=>e.status.showImagePanel,showImageTopicPanel:e=>e.status.showImageTopicPanel,showSessionPanel:e=>!e.status.zenMode&&e.status.showSessionPanel,showSystemRole:e=>e.status.showSystemRole,systemStatus:r,themeMode:e=>e.status.themeMode||"auto",tokenDisplayFormatShort:e=>void 0===e.status.tokenDisplayFormatShort||e.status.tokenDisplayFormatShort,wideScreen:e=>!e.status.noWideScreen}},32308:(e,t,i)=>{i.d(t,{Sn:()=>a,U9:()=>n,sg:()=>r});let a={oauth:"/api/auth",proxy:"/webapi/proxy",gateway:"/webapi/plugin/gateway",trace:"/webapi/trace",chat:e=>`/webapi/chat/${e}`,models:e=>`/webapi/models/${e}`,modelPull:e=>`/webapi/models/${e}/pull`,images:e=>`/webapi/text-to-image/${e}`,stt:"/webapi/stt/openai",tts:"/webapi/tts/openai",edge:"/webapi/tts/edge",microsoft:"/webapi/tts/microsoft"},r={auth:"/lobehub-oidc/auth",token:"/market/oidc/token",userinfo:"/market/oidc/userinfo",handoff:"/market/oidc/handoff",desktopCallback:"/lobehub-oidc/callback/desktop"},n={base:"/market",createAgent:"/market/agent/create",getAgentDetail:e=>`/market/agent/${encodeURIComponent(e)}`,createAgentVersion:"/market/agent/versions/create"}},38759:(e,t,i)=>{i.d(t,{c:()=>j,k:()=>L});var a=i(14308),r=i(50786),n=i(23993),s=i(41734),o=i(89872);let l={preference:o.I},c={...{defaultSettings:i(74551).a$,settings:{}},...l,...{},...{isOnboard:!1,isShowPWAGuide:!1,isUserCanEnableTrace:!1,isUserHasConversation:!1,isUserStateInit:!1}};var u=i(96773),d=i(70674),p=i(64911),g=i(85366),m=i(46265),h=i(55582),f=i(67095),y=i(61497),w=i(71457);let b=(0,y.K)("common"),I="initUserState",M=(0,y.K)("preference");var v=i(31021),P=i.n(v),S=i(19530),T=i(45628);class C{constructor(){this.createShareSettingsUrl=e=>`/?${T.N}=${encodeURI(JSON.stringify(e))}`,this.decodeShareSettings=e=>{try{return{data:JSON.parse(e)}}catch(e){return{message:JSON.stringify(e)}}}}}let k=new C;var x=i(34743),A=i(1866),N=i(28074);let D=(0,s.t)("user"),L=(0,n.h)()((0,a.eh)(D((...e)=>({...c,...((e,t)=>({addToolToAllowList:async e=>{let i=t().settings.tool?.humanIntervention?.allowList||[];i.includes(e)||await t().setSettings({tool:{humanIntervention:{allowList:[...i,e]}}})},importAppSettings:async e=>{let{setSettings:i}=t();await i(e)},importUrlShareSettings:async e=>{if(e){let i=k.decodeShareSettings(e);!i?.message&&i?.data&&await t().setSettings(i.data)}},internal_createSignal:()=>{let i=t().updateSettingsSignal;i&&!i.signal.aborted&&i.abort(S.ve);let a=new AbortController;return e({updateSettingsSignal:a},!1,"signalForUpdateSettings"),a},resetSettings:async()=>{await h.W.resetUserSettings(),await t().refreshUserState()},setSettings:async i=>{let a,{settings:r,defaultSettings:n}=t(),s=(0,f.h)(r,i);if(P()(r,s))return;let o=(a=(e,t)=>(0,x.A)(e,(e,i,r)=>{(0,A.A)(i)&&(0,A.A)(t[r])?P()(i,t[r])||(e[r]=i):P()(i,t[r])||(e[r]=(0,N.A)(i)&&(0,N.A)(t[r])?a(i,t[r]):i)}))(s,n);e({settings:o},!1,"optimistic_updateSettings");let l=t().internal_createSignal();await h.W.updateUserSettings(o,l.signal),await t().refreshUserState()},updateDefaultAgent:async e=>{await t().setSettings({defaultAgent:e})},updateGeneralConfig:async e=>{await t().setSettings({general:e})},updateHumanIntervention:async e=>{let i=t().settings.tool?.humanIntervention||{};await t().setSettings({tool:{humanIntervention:{...i,...e}}})},updateKeyVaults:async e=>{await t().setSettings({keyVaults:e})},updateSystemAgent:async(e,i)=>{await t().setSettings({systemAgent:{[e]:{...i}}})}}))(...e),...((e,t)=>({updateGuideState:async e=>{let{updatePreference:i}=t(),a=(0,f.h)(t().preference.guide,e);await i({guide:a})},updateLab:async e=>{let{updatePreference:i}=t(),a=(0,f.h)(t().preference.lab,e);await i({lab:a},M("updateLab"))},updatePreference:async(i,a)=>{let r=(0,f.h)(t().preference,i);e({preference:r},!1,a||M("updatePreference")),await h.W.updatePreference(r)}}))(...e),...((e,t)=>({enableAuth:()=>u.S4,logout:async()=>{if(u.Nd)return void t().clerkSignOut?.({redirectUrl:location.toString()});if(u.J_){let{signOut:e}=await i.e(4975).then(i.bind(i,4975));e()}},openLogin:async()=>{if(u.Nd){let e=location.toString();t().clerkSignIn?.({fallbackRedirectUrl:e,signUpForceRedirectUrl:e,signUpUrl:"/signup"});return}if(u.J_){let{signIn:e}=await i.e(4975).then(i.bind(i,4975)),a=t()?.oAuthSSOProviders;if(a&&1===a.length)return void e(a[0]);e()}}}))(...e),...((e,t)=>({refreshUserState:async()=>{await (0,p.j)(I)},updateAvatar:async e=>{await h.W.updateAvatar(e),await t().refreshUserState()},updateKeyVaultConfig:async(e,i)=>{await t().setSettings({keyVaults:{[e]:i}})},useCheckTrace:e=>(0,g.Ay)(e?"checkTrace":null,()=>"boolean"==typeof w.U.userAllowTrace(t())?Promise.resolve(!1):Promise.resolve(t().isUserCanEnableTrace),{revalidateOnFocus:!1}),useInitUserState:(i,a,r)=>(0,m.Ju)(i?I:null,()=>h.W.getUserState(),{onError:e=>{r?.onError?.(e)},onSuccess:i=>{if(r?.onSuccess?.(i),i){let r={defaultAgent:a.defaultAgent,image:a.image,systemAgent:a.systemAgent},n=(0,f.h)(t().defaultSettings,r),s=0===Object.keys(i.preference||{}).length?o.I:i.preference,l=i.avatar||i.userId?(0,f.h)(t().user,{avatar:i.avatar,email:i.email,firstName:i.firstName,fullName:i.fullName,id:i.userId,latestName:i.lastName,username:i.username}):t().user;e({defaultSettings:n,isOnboard:i.isOnboard,isShowPWAGuide:i.canEnablePWAGuide,isUserCanEnableTrace:i.canEnableTrace,isUserHasConversation:i.hasConversation,isUserStateInit:!0,preference:s,settings:i.settings||{},subscriptionPlan:i.subscriptionPlan,user:l},!1,b("initUserState"));let c=(0,d.wZ)();c?.identify(i.userId||"",{email:i.email,firstName:i.firstName,lastName:i.lastName,username:i.username})}}})}))(...e)}))),r.x),j=()=>L.getState()},40616:(e,t,i)=>{i.d(t,{y:()=>a});let a=async e=>await new Promise(t=>{setTimeout(t,e)})},42246:(e,t,i)=>{i.d(t,{u:()=>r,M:()=>n});let a=`You have a Local System tool with capabilities to interact with the user's local system. You can list directories, read file contents, search for files, move, and rename files/directories.

<user_context>
Here are some known locations and system details on the user's system. User is using the Operating System: {{platform}}({{arch}}). Use these paths when the user refers to these common locations by name (e.g., "my desktop", "downloads folder").
- Desktop: {{desktopPath}}
- Documents: {{documentsPath}}
- Downloads: {{downloadsPath}}
- Music: {{musicPath}}
- Pictures: {{picturesPath}}
- Videos: {{videosPath}}
- User Home: {{homePath}}
- App Data: {{userDataPath}} (Use this primarily for plugin-related data or configurations if needed, less for general user files)
</user_context>

<core_capabilities>
You have access to a set of tools to interact with the user's local file system:

**File Operations:**
1.  **listLocalFiles**: Lists files and directories in a specified path.
2.  **readLocalFile**: Reads the content of a specified file, optionally within a line range. You can read file types such as Word, Excel, PowerPoint, PDF, and plain text files.
3.  **writeLocalFile**: Write content to a specific file, only support plain text file like \`.text\` or \`.md\`
4.  **editLocalFile**: Performs exact string replacements in files. Must read the file first before editing.
5.  **renameLocalFile**: Renames a single file or directory in its current location.
6.  **moveLocalFiles**: Moves multiple files or directories. Can be used for renaming during the move.

**Shell Commands:**
7.  **runCommand**: Execute shell commands with timeout control. Supports both synchronous and background execution. When providing a description, always use the same language as the user's input.
8.  **getCommandOutput**: Retrieve output from running background commands. Returns only new output since last check.
9.  **killCommand**: Terminate a running background shell command by its ID.

**Search & Find:**
10. **searchLocalFiles**: Searches for files based on keywords and other criteria using Spotlight (macOS) or native search. Use this tool to find files if the user is unsure about the exact path.
11. **grepContent**: Search for content within files using regex patterns. Supports various output modes, filtering, and context lines.
12. **globLocalFiles**: Find files matching glob patterns (e.g., "**/*.js", "*.{ts,tsx}").
</core_capabilities>

<workflow>
1. Understand the user's request regarding local operations (files, commands, searches).
2. Select the appropriate tool:
   - File operations: listLocalFiles, readLocalFile, writeLocalFile, editLocalFile, renameLocalFile, moveLocalFiles
   - Shell commands: runCommand, getCommandOutput, killCommand
   - Search/Find: searchLocalFiles, grepContent, globLocalFiles
3. Execute the operation. **If the user mentions a common location (like Desktop, Documents, Downloads, etc.) without providing a full path, use the corresponding path from the <user_context> section.**
4. Present the results or confirmation.
</workflow>

<tool_usage_guidelines>
- For listing directory contents: Use 'listFiles' with the target directory path.
- For reading a file: Use 'readFile'. Provide the following parameters:
    - 'path': The exact file path.
    - 'loc' (Optional): A two-element array [startLine, endLine] to specify a line range to read (e.g., '[301, 400]' reads lines 301 to 400).
    - If 'loc' is omitted, it defaults to reading the first 200 lines ('[0, 200]').
    - To read the entire file: First call 'readFile' (potentially without 'loc'). The response includes 'totalLineCount'. Then, call 'readFile' again with 'loc: [0, totalLineCount]' to get the full content.
- For searching files: Use 'searchFiles' with the 'query' parameter (search string). You can optionally add the following filter parameters to narrow down the search:
    - 'contentContains': Find files whose content includes specific text.
    - 'createdAfter' / 'createdBefore': Filter by creation date.
    - 'modifiedAfter' / 'modifiedBefore': Filter by modification date.
    - 'fileTypes': Filter by file type (e.g., "public.image", "txt").
    - 'onlyIn': Limit the search to a specific directory.
    - 'exclude': Exclude specific files or directories.
    - 'limit': Limit the number of results returned.
    - 'sortBy' / 'sortDirection': Sort the results.
- For renaming a file/folder in place: Use 'renameFile'. Provide the following parameters:
    - 'path': The current full path of the file or folder.
    - 'newName': The desired new name (without path components).
- For moving multiple files/folders (and optionally renaming them): Use 'moveLocalFiles'. Provide the following parameter:
    - 'items': An array of objects, where each object represents a move operation and must contain:
      - 'oldPath': The current absolute path of the file/directory to move or rename.
      - 'newPath': The target absolute path for the file/directory (can include a new name).
    Example: items: [{ oldPath: "/path/to/file1.txt", newPath: "/new/path/to/fileA.txt" }, { oldPath: "/path/to/folderB", newPath: "/archive/folderB_renamed" }]
- For writing to a file: Use 'writeLocalFile' with the file path and the content to be written. Be cautious as this might overwrite existing files.
- For editing a file: Use 'editLocalFile'. Provide the following parameters:
    - 'file_path': The absolute path to the file to modify.
    - 'old_string': The exact text to replace.
    - 'new_string': The text to replace with.
    - 'replace_all' (Optional): Set to true to replace all occurrences (default: false, replaces only first occurrence).
    Note: You MUST read the file first using 'readLocalFile' before editing to verify the content.
- For executing shell commands: Use 'runCommand'. Provide the following parameters:
    - 'command': The shell command to execute.
    - 'description' (Optional but recommended): A clear, concise description of what the command does (5-10 words, in active voice). **IMPORTANT: Always use the same language as the user's input.** If the user speaks Chinese, write the description in Chinese; if English, use English, etc.
    - 'run_in_background' (Optional): Set to true to run in background and get a shell_id for later checking output.
    - 'timeout' (Optional): Timeout in milliseconds (default: 120000ms, max: 600000ms).
    The command runs in cmd.exe on Windows or /bin/sh on macOS/Linux.
- For retrieving output from background commands: Use 'getCommandOutput'. Provide:
    - 'shell_id': The ID returned from runCommand when run_in_background was true.
    - 'filter' (Optional): A regex pattern to filter output lines.
    Returns only new output since the last check.
- For killing background commands: Use 'killCommand' with 'shell_id'.
- For searching content in files: Use 'grepContent'. Provide:
    - 'pattern': The regex pattern to search for.
    - 'path' (Optional): File or directory to search (defaults to current working directory).
    - 'output_mode' (Optional): "content" (matching lines), "files_with_matches" (file paths, default), "count" (match counts).
    - 'glob' (Optional): Glob pattern to filter files (e.g., "*.js", "*.{ts,tsx}").
    - '-i' (Optional): Case insensitive search.
    - '-n' (Optional): Show line numbers (requires output_mode: "content").
    - '-A/-B/-C' (Optional): Show N lines after/before/around matches (requires output_mode: "content").
    - 'head_limit' (Optional): Limit results to first N matches.
- For finding files by pattern: Use 'globLocalFiles'. Provide:
    - 'pattern': Glob pattern (e.g., "**/*.js", "src/**/*.ts").
    - 'path' (Optional): Directory to search in (defaults to current working directory).
    Returns files sorted by modification time (most recent first).
</tool_usage_guidelines>

<security_considerations>
- Always confirm with the user before performing write operations, especially if it involves overwriting existing files.
- Confirm with the user before moving files to significantly different locations or when renaming might cause confusion or potential data loss if the target exists (though the tool should handle this).
- Do not attempt to access files outside the user's designated workspace or allowed directories unless explicitly permitted.
- Handle file paths carefully to avoid unintended access or errors.
- When running shell commands:
    - Never execute commands that could harm the system or delete important data without explicit user confirmation.
    - Be cautious with commands that have side effects (e.g., rm, sudo, format).
    - Always describe what a command will do before running it, especially for non-trivial operations.
    - Always provide a clear 'description' parameter in the user's language to help them understand what the command does.
    - Use appropriate timeouts to prevent commands from running indefinitely.
- When editing files:
    - Always read the file first to verify its current content.
    - Ensure old_string exactly matches the text to be replaced to avoid unintended changes.
    - Be cautious when using replace_all option.
</security_considerations>

<response_format>
- When listing files or returning search results that include file or directory paths, **always** use the \`<localFile ... />\` tag format. **Any reference to a local file or directory path in your response MUST be enclosed within this tag.** Do not output raw file paths outside of this tag structure.
- For a file, use: \`<localFile name="[Filename]" path="[Full Unencoded Path]" />\`. Example: \`<localFile name="report.pdf" path="/Users/me/Documents/report.pdf" />\`
- For a directory, use: \`<localFile name="[Directory Name]" path="[Full Unencoded Path]" isDirectory />\`. Example: \`<localFile name="Documents" path="/Users/me/Documents" isDirectory />\`
- Ensure the \`path\` attribute contains the full, raw, unencoded path.
- Ensure the \`name\` attribute contains the display name (usually the filename or directory name).
- Include the \`isDirectory\` attribute **only** for directories.
- When listing files, provide a clear list using the tag format.
- When reading files, present the content accurately. **If you mention the file path being read, use the \`<localFile>\` tag.**
- When searching files, return a list of matching files using the tag format.
- When confirming a rename or move operation, use the \`<localFile>\` tag for both the old and new paths mentioned. Example: \`Successfully renamed <localFile name="oldName.txt" /> to <localFile name="newName.txt" path="/path/to/newName.txt" />.\`
- When writing files, confirm the success or failure. **If you mention the file path written to, use the \`<localFile>\` tag.**
</response_format>
`,r={editLocalFile:"editLocalFile",getCommandOutput:"getCommandOutput",globLocalFiles:"globLocalFiles",grepContent:"grepContent",killCommand:"killCommand",listLocalFiles:"listLocalFiles",moveLocalFiles:"moveLocalFiles",readLocalFile:"readLocalFile",renameLocalFile:"renameLocalFile",runCommand:"runCommand",searchLocalFiles:"searchLocalFiles",writeLocalFile:"writeLocalFile"},n={api:[{description:"List files and folders in a specified directory. Input should be a path. Output is a JSON array of file/folder names.",name:r.listLocalFiles,parameters:{properties:{path:{description:"The directory path to list",type:"string"}},required:["path"],type:"object"}},{description:"Read the content of a specific file. Input should be the file path. Output is the file content as a string.",name:r.readLocalFile,parameters:{properties:{loc:{description:"Optional range of lines to read [startLine, endLine]. Defaults to [0, 200] if not specified.",items:{type:"number"},type:"array"},path:{description:"The file path to read",type:"string"}},required:["path"],type:"object"}},{description:"Search for files within the workspace based on a query string and optional filter options. Input should include the search query and any filter options. Output is a JSON array of matching file paths.",name:r.searchLocalFiles,parameters:{properties:{contentContains:{description:"The file content must contain this string",type:"string"},createdAfter:{description:"Files created after this date (ISO 8601 format, e.g., 2023-10-26T10:00:00Z)",format:"date-time",type:"string"},createdBefore:{description:"Files created before this date (ISO 8601 format)",format:"date-time",type:"string"},directory:{description:"Limit the search to this specific directory path",type:"string"},exclude:{description:"Array of file or directory paths to exclude",items:{type:"string"},type:"array"},fileTypes:{description:'Array of file types to include (e.g., "public.image", "txt")',items:{type:"string"},type:"array"},keywords:{description:"The search keywords string (can include partial names or keywords)",type:"string"},limit:{description:"Limit the number of results returned",type:"number"},liveUpdate:{description:"Whether to update search results live (if supported)",type:"boolean"},modifiedAfter:{description:"Files modified after this date (ISO 8601 format)",format:"date-time",type:"string"},modifiedBefore:{description:"Files modified before this date (ISO 8601 format)",format:"date-time",type:"string"},sortBy:{description:"Sort results by",enum:["name","date","size"],type:"string"},sortDirection:{description:"Sort direction",enum:["asc","desc"],type:"string"}},required:["keywords"],type:"object"}},{description:"Moves or renames multiple files/directories. Input is an array of objects, each containing an oldPath and a newPath.",humanIntervention:"required",name:r.moveLocalFiles,parameters:{properties:{items:{description:"A list of move/rename operations to perform.",items:{properties:{newPath:{description:"The target absolute path for the file/directory (can include a new name).",type:"string"},oldPath:{description:"The current absolute path of the file/directory to move or rename.",type:"string"}},required:["oldPath","newPath"],type:"object"},type:"array"}},required:["items"],type:"object"}},{description:"Rename a file or folder in its current location. Input should be the current full path and the new name.",name:r.renameLocalFile,parameters:{properties:{newName:{description:"The new name for the file or folder (without path)",type:"string"},path:{description:"The current full path of the file or folder to rename",type:"string"}},required:["path","newName"],type:"object"}},{description:"Write content to a specific file. Input should be the file path and content. Overwrites existing file or creates a new one.",humanIntervention:"required",name:r.writeLocalFile,parameters:{properties:{content:{description:"The content to write",type:"string"},path:{description:"The file path to write to",type:"string"}},required:["path","content"],type:"object"}},{description:"Perform exact string replacements in files. Must read the file first before editing.",humanIntervention:"required",name:r.editLocalFile,parameters:{properties:{file_path:{description:"The absolute path to the file to modify",type:"string"},new_string:{description:"The text to replace with (must differ from old_string)",type:"string"},old_string:{description:"The exact text to replace",type:"string"},replace_all:{description:"Replace all occurrences of old_string (default: false)",type:"boolean"}},required:["file_path","old_string","new_string"],type:"object"}},{description:"Execute a shell command and return its output. Supports both synchronous and background execution with timeout control.",humanIntervention:"required",name:r.runCommand,parameters:{properties:{command:{description:"The shell command to execute",type:"string"},description:{description:"Clear description of what this command does (5-10 words, in active voice). Use the same language as the user input.",type:"string"},run_in_background:{description:"Set to true to run command in background and return shell_id",type:"boolean"},timeout:{description:"Timeout in milliseconds (default: 120000ms, max: 600000ms)",type:"number"}},required:["command"],type:"object"}},{description:"Retrieve output from a running or completed background shell command. Returns only new output since the last check.",name:r.getCommandOutput,parameters:{properties:{filter:{description:"Optional regex pattern to filter output lines. Only matching lines are returned.",type:"string"},shell_id:{description:"The ID of the background shell to retrieve output from",type:"string"}},required:["shell_id"],type:"object"}},{description:"Kill a running background shell command by its ID.",name:r.killCommand,parameters:{properties:{shell_id:{description:"The ID of the background shell to kill",type:"string"}},required:["shell_id"],type:"object"}},{description:"Search for content within files using regex patterns. Supports various output modes and filtering options.",name:r.grepContent,parameters:{properties:{"-A":{description:'Number of lines to show after each match (requires output_mode: "content")',type:"number"},"-B":{description:'Number of lines to show before each match (requires output_mode: "content")',type:"number"},"-C":{description:'Number of lines to show before and after each match (requires output_mode: "content")',type:"number"},"-i":{description:"Case insensitive search",type:"boolean"},"-n":{description:'Show line numbers in output (requires output_mode: "content")',type:"boolean"},glob:{description:'Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}")',type:"string"},head_limit:{description:"Limit output to first N results",type:"number"},multiline:{description:"Enable multiline mode where . matches newlines",type:"boolean"},output_mode:{description:'Output mode: "content" (matching lines), "files_with_matches" (file paths), "count" (match counts)',enum:["content","files_with_matches","count"],type:"string"},path:{description:"File or directory to search in (defaults to current working directory)",type:"string"},pattern:{description:"The regular expression pattern to search for",type:"string"},type:{description:'File type to search (e.g. "js", "py", "rust")',type:"string"}},required:["pattern"],type:"object"}},{description:'Find files matching glob patterns. Supports standard glob syntax like "**/*.js" or "src/**/*.ts".',name:r.globLocalFiles,parameters:{properties:{path:{description:"The directory to search in (defaults to current working directory)",type:"string"},pattern:{description:'The glob pattern to match files against (e.g. "**/*.js", "*.{ts,tsx}")',type:"string"}},required:["pattern"],type:"object"}}],identifier:"lobe-local-system",meta:{avatar:"\uD83D\uDCC1",title:"Local System"},systemRole:a,type:"builtin"}},43262:(e,t,i)=>{i.d(t,{C:()=>a});let a={isSyncActive:e=>e.dataSyncConfig.active,remoteServerUrl:e=>e.dataSyncConfig.remoteServerUrl||"",storageMode:e=>e.dataSyncConfig.storageMode}},49334:(e,t,i)=>{i.d(t,{y:()=>a});let a={activeMCPPluginIdentifier:e=>e.activeMCPIdentifier,getMCPConnectionTestError:e=>t=>t.mcpTestErrors[e],getMCPConnectionTestState:e=>t=>({error:t.mcpTestErrors[e],loading:t.mcpTestLoading[e]||!1}),getMCPInstallProgress:e=>t=>t.mcpInstallProgress[e],getMCPPluginRequiringConfig:e=>t=>t.mcpInstallProgress[e]?.configSchema,getPluginById:e=>t=>t.mcpPluginItems.find(t=>t.identifier===e),isMCPConnectionTesting:e=>t=>t.mcpTestLoading[e]||!1,isMCPInstallInProgress:e=>t=>{let i=t.mcpInstallProgress[e];return!!i&&!i.needsConfig&&"Error"!==i.step},isMCPInstalling:e=>t=>!!t.mcpInstallProgress[e],isMCPPluginRequiringConfig:e=>t=>!!t.mcpInstallProgress[e]?.configSchema,isPluginInstallLoading:e=>t=>t.pluginInstallLoading[e],mcpPluginList:e=>{let t=new Set(e.installedPlugins.map(e=>e.identifier));return("mcp"===e.listType?e.mcpPluginItems:e.mcpPluginItems.filter(e=>t.has(e.identifier))).map(e=>({author:e.author,createdAt:e.createdAt,homepage:e.homepage,identifier:e.identifier,meta:{avatar:e.icon,description:e.description,tags:e.tags,title:e.name},type:"plugin"}))}}},49565:(e,t,i)=>{i.d(t,{Q:()=>d});var a=i(77605),r=i(14306),n=i(37383),s=i(32308);let o=async(e,t=!1)=>{let a,r;try{a=await (t?fetch(s.Sn.proxy,{body:e,method:"POST"}):fetch(e))}catch{throw TypeError("fetchError")}if(!a.ok)throw TypeError("fetchError");let n=a.headers.get("Content-Type");try{if("application/json"===n)r=await a.json();else{let{default:e}=await i.e(47270).then(i.bind(i,47270)),t=await a.text();r=e.parse(t)}}catch{throw TypeError("urlError")}return r},l=e=>{let t={api:[],homepage:e.legal_info_url,identifier:e.name_for_model,meta:{avatar:e.logo_url,description:e.description_for_human,title:e.name_for_human},openapi:e.api.url,systemRole:e.description_for_model,type:"default",version:"1"};switch(e.auth.type){case"none":break;case"service_http":t.settings={properties:{apiAuthKey:{default:e.auth.verification_tokens.openai,description:"API Key",format:"password",title:"API Key",type:"string"}},type:"object"}}return t},c=async(e,t=!1)=>{if(!e)throw TypeError("noManifest");let a=await o(e,t);a.description_for_model&&(a=l(a));let r=n.M.safeParse(a);if(!r.success)throw TypeError("manifestInvalid",{cause:r.error});if(r.data.openapi){let e=await o(r.data.openapi,t);try{let{OpenAPIConvertor:t}=await Promise.all([i.e(10983),i.e(29962)]).then(i.t.bind(i,10983,23)),r=new t(e),n=await r.convertOpenAPIToPluginSchema();a.api=[...a.api,...n],a.settings=await r.convertAuthToSettingsSchema(a.settings)}catch(e){throw TypeError("openAPIInvalid",{cause:e})}}return a};class u{constructor(){this.getOldPluginList=async e=>{let t=r.J.getCurrentLanguage();return a.du.market.getPluginList.query({...e,locale:t,page:e.page?Number(e.page):1,pageSize:e.pageSize?Number(e.pageSize):20})},this.getToolManifest=c,this.convertOpenAIManifestToLobeManifest=l}}let d=new u},55582:(e,t,i)=>{i.d(t,{W:()=>n});var a=i(77605);class r{constructor(){this.getUserRegistrationDuration=async()=>a.du.user.getUserRegistrationDuration.query(),this.getUserState=async()=>a.du.user.getUserState.query(),this.getUserSSOProviders=async()=>a.du.user.getUserSSOProviders.query(),this.unlinkSSOProvider=async(e,t)=>a.du.user.unlinkSSOProvider.mutate({provider:e,providerAccountId:t}),this.makeUserOnboarded=async()=>a.du.user.makeUserOnboarded.mutate(),this.updateAvatar=async e=>a.du.user.updateAvatar.mutate(e),this.updatePreference=async e=>a.du.user.updatePreference.mutate(e),this.updateGuide=async e=>a.du.user.updateGuide.mutate(e),this.updateUserSettings=async(e,t)=>a.du.user.updateSettings.mutate(e,{signal:t}),this.resetUserSettings=async()=>a.du.user.resetSettings.mutate()}}let n=new r},67137:(e,t,i)=>{i.d(t,{R:()=>c});var a=i(77605),r=i(14306),n=i(38759),s=i(71457),o=i(12890);class l{async injectMPToken(){let e,t;if("undefined"==typeof localStorage||"active"===this.getTokenStatusFromCookie())return;let i=localStorage.getItem("_mpc");if(i)try{let a=atob(i),r=JSON.parse(a);e=r.clientId,t=r.clientSecret}catch(r){console.error("Failed to decode client data:",r);let i=await this.registerClient(),a=btoa(JSON.stringify({clientId:e=i.clientId,clientSecret:t=i.clientSecret}));localStorage.setItem("_mpc",a)}else{let i=await this.registerClient(),a=btoa(JSON.stringify({clientId:e=i.clientId,clientSecret:t=i.clientSecret}));localStorage.setItem("_mpc",a)}try{if(!(await a.du.market.registerM2MToken.query({clientId:e,clientSecret:t})).success){if(console.warn("Token registration failed, client credentials may be invalid. Clearing and retrying..."),localStorage.removeItem("_mpc"),this._isRetrying)console.error("Failed to re-register after credential invalidation");else{this._isRetrying=!0;try{await this.injectMPToken()}finally{this._isRetrying=!1}}return}}catch(e){return console.error("Failed to register M2M token:",e),null}}getTokenStatusFromCookie(){if("undefined"==typeof document)return null;for(let e of document.cookie.split(";")){let[t,i]=e.trim().split("=");if("mp_token_status"===t)return i}return null}constructor(){this._isRetrying=!1,this.getAssistantCategories=async(e={})=>{let t=r.J.getCurrentLanguage(),{source:i,...n}=e;return a.du.market.getAssistantCategories.query({...n,locale:t,source:i})},this.getAssistantDetail=async e=>{let t=r.J.getCurrentLanguage();return a.du.market.getAssistantDetail.query({identifier:e.identifier,locale:t,source:e.source,version:e.version})},this.getAssistantIdentifiers=async(e={})=>a.du.market.getAssistantIdentifiers.query(e),this.getAssistantList=async(e={})=>{let t=r.J.getCurrentLanguage();return a.du.market.getAssistantList.query({...e,locale:t,page:e.page?Number(e.page):1,pageSize:e.pageSize?Number(e.pageSize):20},{context:{showNotification:!1}})},this.getMcpCategories=async(e={})=>{let t=r.J.getCurrentLanguage();return a.du.market.getMcpCategories.query({...e,locale:t})},this.getMcpDetail=async e=>{let t=r.J.getCurrentLanguage();return a.du.market.getMcpDetail.query({...e,locale:t})},this.getMcpList=async(e={})=>{let t=r.J.getCurrentLanguage();return a.du.market.getMcpList.query({...e,locale:t,page:e.page?Number(e.page):1,pageSize:e.pageSize?Number(e.pageSize):20})},this.getMCPPluginList=async e=>{await this.injectMPToken();let t=r.J.getCurrentLanguage();return a.du.market.getMcpList.query({...e,locale:t,page:e.page?Number(e.page):1,pageSize:e.pageSize?Number(e.pageSize):21})},this.getMcpManifest=async e=>{let t=r.J.getCurrentLanguage();return a.du.market.getMcpManifest.query({...e,locale:t})},this.getMCPPluginManifest=async(e,t={})=>{let i=r.J.getCurrentLanguage();return a.du.market.getMcpManifest.query({identifier:e,install:t.install,locale:i})},this.registerClient=()=>a.du.market.registerClientInMarketplace.mutate({}),this.reportMcpInstallResult=async({success:e,manifest:t,errorMessage:i,errorCode:r,...l})=>{if(!s.U.userAllowTrace(n.k.getState()))return;await this.injectMPToken();let c={errorCode:e?void 0:r,errorMessage:e?void 0:i,manifest:e?t:void 0,success:e,...l};a.du.market.reportMcpInstallResult.mutate((0,o.j)(c)).catch(e=>{console.warn("Failed to report MCP installation result:",e)})},this.reportPluginCall=async e=>{s.U.userAllowTrace(n.k.getState())&&(await this.injectMPToken(),a.du.market.reportCall.mutate((0,o.j)(e)).catch(e=>{console.warn("Failed to report call:",e)}))},this.getModelCategories=async(e={})=>a.du.market.getModelCategories.query(e),this.getModelDetail=async e=>{let t=r.J.getCurrentLanguage();return a.du.market.getModelDetail.query({...e,locale:t})},this.getModelIdentifiers=async()=>a.du.market.getModelIdentifiers.query(),this.getModelList=async(e={})=>{let t=r.J.getCurrentLanguage();return a.du.market.getModelList.query({...e,locale:t,page:e.page?Number(e.page):1,pageSize:e.pageSize?Number(e.pageSize):20})},this.getPluginCategories=async(e={})=>{let t=r.J.getCurrentLanguage();return a.du.market.getPluginCategories.query({...e,locale:t})},this.getPluginDetail=async e=>{let t=r.J.getCurrentLanguage();return a.du.market.getPluginDetail.query({...e,locale:t})},this.getPluginIdentifiers=async()=>a.du.market.getPluginIdentifiers.query(),this.getPluginList=async(e={})=>{let t=r.J.getCurrentLanguage();return a.du.market.getPluginList.query({...e,locale:t,page:e.page?Number(e.page):1,pageSize:e.pageSize?Number(e.pageSize):20})},this.getProviderDetail=async e=>{let t=r.J.getCurrentLanguage();return a.du.market.getProviderDetail.query({...e,locale:t})},this.getProviderIdentifiers=async()=>a.du.market.getProviderIdentifiers.query(),this.getProviderList=async(e={})=>{let t=r.J.getCurrentLanguage();return a.du.market.getProviderList.query({...e,locale:t,page:e.page?Number(e.page):1,pageSize:e.pageSize?Number(e.pageSize):20})}}}let c=new l},68172:(e,t,i)=>{i.d(t,{w:()=>c});var a=i(55156);let r=e=>e.installedPlugins,n=e=>t=>{if(e)return r(t).find(t=>t.identifier===e)},s=e=>t=>{let i=t.oldPluginItems.find(t=>t.identifier===e);return i?{avatar:i.avatar,description:i.description,tags:i.tags,title:i.title}:n(e)(t)?.manifest?.meta},o=e=>t=>n(e)(t)?.manifest,l=e=>r(e).map(t=>({author:t.manifest?.author,createdAt:t.manifest?.createdAt||t.manifest?.createAt,homepage:t.manifest?.homepage,identifier:t.identifier,meta:s(t.identifier)(e),runtimeType:t.runtimeType,type:t.source||t.type,...s(t.identifier)(e)})),c={getCustomPluginById:e=>t=>r(t).find(t=>t.identifier===e&&"customPlugin"===t.type),getInstalledPluginById:n,getPluginMetaById:s,getPluginSettingsById:e=>t=>n(e)(t)?.settings||{},getToolManifestById:o,installedCustomPluginMetaList:e=>l(e).filter(e=>"customPlugin"===e.type),installedPluginManifestList:e=>r(e).map(e=>e.manifest).filter(e=>!!e),installedPluginMetaList:l,installedPlugins:r,isPluginHasUI:e=>t=>{let i=o(e)(t);return!!i?.ui},isPluginInstalled:e=>t=>r(t).some(t=>t.identifier===e),storeAndInstallPluginsIdList:e=>(0,a.A)([e.installedPlugins.map(e=>e.identifier),e.oldPluginItems.map(e=>e.identifier)].flat())}},71457:(e,t,i)=>{i.d(t,{U:()=>r});var a=i(74551);let r={hideSettingsMoveGuide:e=>e.preference.guide?.moveSettingsToAvatar,hideSyncAlert:e=>e.preference.hideSyncAlert,isPreferenceInit:e=>e.isUserStateInit,shouldTriggerFileInKnowledgeBaseTip:e=>"boolean"!=typeof e.preference.guide?.moveSettingsToAvatar,showUploadFileInKnowledgeBaseTip:e=>e.preference.guide?.uploadFileInKnowledgeBase,topicDisplayMode:e=>e.preference.topicDisplayMode||a.I4.topicDisplayMode,useCmdEnterToSend:e=>e.preference.useCmdEnterToSend||!1,userAllowTrace:e=>e.preference.telemetry}},73616:(e,t,i)=>{i.d(t,{FV:()=>s,SJ:()=>o,T6:()=>n});var a,r,n=((a={}).Installed="installed",a.MCP="mcp",a.Plugin="old",a),s=((r={}).FETCHING_MANIFEST="FETCHING_MANIFEST",r.INSTALLING_PLUGIN="INSTALLING_PLUGIN",r.COMPLETED="COMPLETED",r.ERROR="ERROR",r);let o={currentPluginPage:1,displayMode:"grid",listType:"mcp",oldPluginItems:[],pluginInstallLoading:{},pluginInstallProgress:{}}},74038:(e,t,i)=>{i.d(t,{getToolStoreState:()=>Q,j:()=>V});var a=i(50786),r=i(23993),n=i(41734);let s={builtinToolLoading:{},builtinTools:i(94399).F},o={customParams:{apiMode:"simple",enableSettings:!1,manifestMode:"url"},type:"customPlugin"};var l=i(73616);let c={installedPlugins:[],loadingInstallPlugins:!0,pluginsSettings:{},newCustomPlugin:o,...l.SJ,...s,categories:[],currentPage:1,mcpInstallAbortControllers:{},mcpInstallProgress:{},mcpPluginItems:[],mcpTestAbortControllers:{},mcpTestErrors:{},mcpTestLoading:{}};var u=i(61497);let d=(0,u.K)("builtinTool");var p=i(96987),g=i(3851),m=i(29914),h=i(10858),f=i(77605);class y{constructor(){this.installPlugin=async e=>{await f.du.plugin.createOrInstallPlugin.mutate(e)},this.getInstalledPlugins=()=>f.du.plugin.getPlugins.query(),this.uninstallPlugin=async e=>{await f.du.plugin.removePlugin.mutate({id:e})},this.createCustomPlugin=async e=>{await f.du.plugin.createPlugin.mutate({...e,type:"customPlugin"})},this.updatePlugin=async(e,t)=>{await f.du.plugin.updatePlugin.mutate({customParams:t.customParams,id:e,manifest:t.manifest,settings:t.settings})},this.updatePluginManifest=async(e,t)=>{await f.du.plugin.updatePlugin.mutate({id:e,manifest:t})},this.removeAllPlugins=async()=>{await f.du.plugin.removeAllPlugins.mutate()},this.updatePluginSettings=async(e,t,i)=>{await f.du.plugin.updatePlugin.mutate({id:e,settings:t},{signal:i})}}}let w=new y;var b=i(49565),I=i(23211),M=i(68172);let v=(0,u.K)("customPlugin");var P=i(68096),S=i.n(P),T=i(85601),C=i(61505),k=i(83897),x=i(85366),A=i(74551),N=i(67137),D=i(14306),L=i(49334),j=i(61451),_=i(32464),E=i(40616),O=i(55036);let F=S()("lobe-mcp:store:action"),U=(0,u.K)("mcpStore"),R=e=>{if(!e)return;let t=Object.entries(e).filter(([,e])=>null!=e);if(0!==t.length)return t.reduce((e,[t,i])=>(e[t]="string"==typeof i?i:String(i),e),{})};var q=i(19530),z=i(46265),G=i(67095),B=i(3937),W=i(64911);let H=(0,u.K)("pluginStore"),J="loadInstalledPlugins",Y=(0,n.t)("tools"),V=(0,r.h)()(Y((...e)=>({...c,...((e,t)=>({checkPluginsIsInstalled:async e=>{if(0===e.length)return;let{loadPluginStore:i,installPlugins:a}=t();0===B.f.onlinePluginStore(t()).length&&await i(),await a(e)},removeAllPlugins:async()=>{await w.removeAllPlugins(),await t().refreshPlugins()},updateInstallMcpPlugin:async(e,i)=>{let a=M.w.getInstalledPluginById(e)(t());a&&(await w.updatePlugin(e,{customParams:{mcp:(0,G.h)(a.customParams?.mcp,i)}}),await t().refreshPlugins())},updatePluginSettings:async(i,a,{override:r}={})=>{let n=t().updatePluginSettingsSignal;n&&n.abort(q.ve);let s=new AbortController,o=M.w.getPluginSettingsById(i)(t()),l=r?a:(0,G.h)(o,a);e({updatePluginSettingsSignal:s},!1,"create new Signal"),await w.updatePluginSettings(i,l,s.signal),await t().refreshPlugins()},useCheckPluginsIsInstalled:(e,i)=>(0,z.lA)(e?i:null,t().checkPluginsIsInstalled),validatePluginSettings:async e=>{let a=M.w.getToolManifestById(e)(t());if(!a||!a.settings)return;let r=M.w.getPluginSettingsById(e)(t()),{Validator:n}=await i.e(12504).then(i.bind(i,12504)),s=new n(a.settings).validate(r);return s.valid?{errors:[],valid:!0}:{errors:s.errors,valid:!1}}}))(...e),...((e,t)=>({installCustomPlugin:async i=>{await w.createCustomPlugin(i),await t().refreshPlugins(),e({newCustomPlugin:o},!1,v("saveToCustomPluginList"))},reinstallCustomPlugin:async e=>{let i=M.w.getCustomPluginById(e)(t());if(!i)return;let{refreshPlugins:a,updateInstallLoadingState:r}=t();try{let t;if(r(e,!0),i.customParams?.mcp){let e=i.customParams?.mcp?.url;if(!e)return;t=await h.S.getStreamableMcpServerManifest({auth:i.customParams.mcp.auth,headers:i.customParams.mcp.headers,identifier:i.identifier,metadata:{avatar:i.customParams.avatar,description:i.customParams.description},url:e})}else t=await b.Q.getToolManifest(i.customParams?.manifestUrl,i.customParams?.useProxy);r(e,!1),await w.updatePluginManifest(e,t),await a()}catch(n){r(e,!1),console.error(n);let i=M.w.getPluginMetaById(e)(t()),a=I.V.getPluginTitle(i);m.Ew.error({description:(0,p.t)(`error.${n.message}`,{error:n.cause,ns:"plugin"}),message:(0,p.t)("error.reinstallError",{name:a,ns:"plugin"})})}},uninstallCustomPlugin:async e=>{await w.uninstallPlugin(e),await t().refreshPlugins()},updateCustomPlugin:async(e,i)=>{let{reinstallCustomPlugin:a}=t();await w.updatePlugin(e,i),await a(e)},updateNewCustomPlugin:i=>{e({newCustomPlugin:(0,g.A)({},t().newCustomPlugin,i)},!1,v("updateNewDevPlugin"))}}))(...e),...((e,t)=>({installOldPlugin:async(e,i="plugin")=>{let a=B.f.getPluginById(e)(t());if(!a)return;let{updateInstallLoadingState:r,refreshPlugins:n,updatePluginInstallProgress:s}=t();try{r(e,!0),s(e,{progress:25,step:l.FV.FETCHING_MANIFEST});let t=await b.Q.getToolManifest(a.manifest);s(e,{progress:60,step:l.FV.INSTALLING_PLUGIN}),await w.installPlugin({identifier:a.identifier,manifest:t,type:i}),s(e,{progress:85,step:l.FV.INSTALLING_PLUGIN}),await n(),s(e,{progress:100,step:l.FV.COMPLETED}),await (0,E.y)(1e3),s(e,void 0),r(e,void 0)}catch(t){console.error(t),s(e,{error:t.message,progress:0,step:l.FV.ERROR}),r(e,void 0),m.Ew.error({description:(0,p.t)(`error.${t.message}`,{ns:"plugin"}),message:(0,p.t)("error.installError",{name:a.title,ns:"plugin"})})}},installPlugin:async(e,i="plugin")=>{let a=B.f.getPluginById(e)(t());if(!a)return;let{updateInstallLoadingState:r,refreshPlugins:n}=t();try{r(e,!0);let t=await b.Q.getToolManifest(a.manifest);await w.installPlugin({identifier:a.identifier,manifest:t,type:i}),await n(),r(e,void 0)}catch(t){console.error(t),r(e,void 0),m.Ew.error({description:(0,p.t)(`error.${t.message}`,{ns:"plugin"}),message:(0,p.t)("error.installError",{name:a.title,ns:"plugin"})})}},installPlugins:async e=>{let{installPlugin:i}=t();await Promise.all(e.map(e=>i(e)))},loadMorePlugins:()=>{let{oldPluginItems:i,pluginTotalCount:a,currentPluginPage:r}=t();i.length<(a||0)&&e((0,T.jM)(e=>{e.currentPluginPage=r+1}),!1,H("loadMorePlugins"))},loadPluginStore:async()=>{let t=D.J.getCurrentLanguage(),i=await b.Q.getOldPluginList({locale:t,page:1,pageSize:50});return e({oldPluginItems:i.items},!1,H("loadPluginList")),i.items},refreshPlugins:async()=>{await (0,W.j)(J)},resetPluginList:t=>{e((0,T.jM)(e=>{e.oldPluginItems=[],e.currentPluginPage=1,e.pluginSearchKeywords=t}),!1,H("resetPluginList"))},uninstallPlugin:async e=>{await w.uninstallPlugin(e),await t().refreshPlugins()},updateInstallLoadingState:(t,i)=>{e((0,T.jM)(e=>{e.pluginInstallLoading[t]=i}),!1,H("updateInstallLoadingState"))},updatePluginInstallProgress:(t,i)=>{e((0,T.jM)(e=>{e.pluginInstallProgress[t]=i}),!1,H(`updatePluginInstallProgress/${i?.step||"clear"}`))},useFetchInstalledPlugins:t=>(0,x.Ay)(t?J:null,w.getInstalledPlugins,{fallbackData:[],onSuccess:t=>{e({installedPlugins:t,loadingInstallPlugins:!1},!1,H("useFetchInstalledPlugins"))},revalidateOnFocus:!1,suspense:!0}),useFetchPluginList:t=>{let i=D.J.getCurrentLanguage();return(0,x.Ay)(["useFetchPluginList",i,...Object.values(t)].filter(Boolean).join("-"),async()=>b.Q.getOldPluginList(t),{onSuccess(i){e((0,T.jM)(e=>{e.pluginSearchLoading=!1,e.isPluginListInit||(e.activePluginIdentifier=i.items?.[0]?.identifier,e.isPluginListInit=!0,e.pluginTotalCount=i.totalCount),1===t.page?e.oldPluginItems=(0,C.A)(i.items,"identifier"):e.oldPluginItems=(0,C.A)([...e.oldPluginItems,...i.items],"identifier")}),!1,H("useFetchPluginList/onSuccess"))},revalidateOnFocus:!1})},useFetchPluginStore:()=>(0,x.Ay)("loadPluginStore",t().loadPluginStore,{revalidateOnFocus:!1})}))(...e),...((e,t)=>({toggleBuiltinToolLoading:(t,i)=>{e({builtinToolLoading:{[t]:i}},!1,d("toggleBuiltinToolLoading"))},transformApiArgumentsToAiState:async(e,i)=>{let{builtinToolLoading:a,toggleBuiltinToolLoading:r}=t();if(a[e])return;let{[e]:n}=t();if(!n)return JSON.stringify(i);r(e,!0);try{let t=await n(i);return r(e,!1),JSON.stringify(t)}catch(t){throw r(e,!1),t}}}))(...e),...((e,t)=>({cancelInstallMCPPlugin:async i=>{let a=t().mcpInstallAbortControllers[i];a&&(a.abort(),e((0,T.jM)(e=>{delete e.mcpInstallAbortControllers[i]}),!1,U("cancelInstallMCPPlugin/clearController"))),t().updateMCPInstallProgress(i,void 0),t().updateInstallLoadingState(i,void 0)},cancelMcpConnectionTest:i=>{let a=t().mcpTestAbortControllers[i];a&&(a.abort(),e((0,T.jM)(e=>{e.mcpTestLoading[i]=!1,delete e.mcpTestAbortControllers[i],delete e.mcpTestErrors[i]}),!1,U("cancelMcpConnectionTest")))},installMCPPlugin:async(i,a={})=>{let r,n,s,{resume:o=!1,config:l,skipDepsCheck:c}=a,u=R(l),d=L.y.getPluginById(i)(t());if(!d||!d.manifestUrl){let e=await N.R.getMcpDetail({identifier:i});if(!e)return;d=e}if(!d)return;let{updateInstallLoadingState:p,refreshPlugins:g,updateMCPInstallProgress:m}=t(),f=new AbortController;e((0,T.jM)(e=>{e.mcpInstallAbortControllers[i]=f}),!1,U("installMCPPlugin/setController"));let y=Date.now(),b=`LobeHub Desktop/${A.V_}`;try{let a,l,I;if(f.signal.aborted)return;if(o){let e=t().mcpInstallProgress[i];if(!e)return void console.error("No config info found for resume");r=e.manifest,s=e.connection?{...e.connection}:void 0,n=e.checkResult}else{if(m(i,{progress:15,step:_.cD.FETCHING_MANIFEST}),p(i,!0),f.signal.aborted)return;r=await N.R.getMCPPluginManifest(d.identifier,{install:!0});let e=Array.isArray(r.deploymentOptions)?r.deploymentOptions:[],t=e.find(e=>e?.connection?.url&&e?.connection?.type==="http")||e.find(e=>e?.connection?.url&&!e?.connection?.type),a=e.some(e=>{let t=e?.connection?.type;return!(!t&&e?.connection?.url)&&t&&"http"!==t});if(t&&(!a||!A.xl)&&t){F("HTTP MCP detected, skipping system dependency check"),s={auth:t.connection?.auth||{type:"none"},headers:t.connection?.headers,type:"http",url:t.connection?.url},F("Using HTTP connection: %O",{type:s.type,url:s.url});let e=t.connection?.configSchema;if((e=>{if(!e)return!1;let t=Array.isArray(e.required)&&e.required.some(Boolean),i=!!e.properties&&Object.values(e.properties).some(e=>e&&!0===e.required);return t||i})(e)&&!u)return m(i,{configSchema:e,connection:s,manifest:r,needsConfig:!0,progress:50,step:_.cD.CONFIGURATION_REQUIRED}),p(i,void 0),!1}else{if(m(i,{progress:30,step:_.cD.CHECKING_INSTALLATION}),f.signal.aborted)return;if(!(n=await h.S.checkInstallation(r,f.signal)).success)return void m(i,void 0);if(!c&&!n.allDependenciesMet)return m(i,{connection:n.connection,manifest:r,progress:40,step:_.cD.DEPENDENCIES_REQUIRED,systemDependencies:n.systemDependencies}),p(i,void 0),!1;if(n.needsConfig)return m(i,{checkResult:n,configSchema:n.configSchema,connection:n.connection,manifest:r,needsConfig:!0,progress:50,step:_.cD.CONFIGURATION_REQUIRED}),p(i,void 0),!1;s=n.connection}}if(s?.type==="http"){let e=R(s.headers);(e||u)&&(a={...e,...u})}if(s?.type==="stdio"){let e=R(s.env);(e||u)&&(l={...e,...u})}if(p(i,!0),m(i,{progress:70,step:_.cD.GETTING_SERVER_MANIFEST}),f.signal.aborted)return;if(s?.type==="stdio"&&(I=await h.S.getStdioMcpServerManifest({args:s.args,command:s.command,env:l,name:i},{avatar:d.icon,description:d.description,name:r.name},f.signal)),s?.type==="http"&&(I=await h.S.getStreamableMcpServerManifest({auth:s.auth,headers:a,identifier:i,metadata:{avatar:d.icon,description:d.description},url:s.url},f.signal)),I){let e=r?.version,t=I.version;e&&t?(0,k.valid)(e)&&(0,k.valid)(t)?I.version=(0,k.gt)(e,t)?e:t:I.version=e:I.version=e||t}if(f.signal.aborted)return;if(!I)return void m(i,void 0);if(m(i,{progress:90,step:_.cD.INSTALLING_PLUGIN}),f.signal.aborted||(await w.installPlugin({customParams:{mcp:s},identifier:d.identifier,manifest:I,settings:u,type:"plugin"}),f.signal.aborted))return;await g(),m(i,{progress:100,step:_.cD.COMPLETED});let M=Date.now()-y;return N.R.reportMcpInstallResult({identifier:d.identifier,installDurationMs:M,installParams:s,manifest:{prompts:I.prompts,resources:I.resources,tools:I.tools},platform:n?.platform||O.platform,success:!0,userAgent:b,version:I.version||r.version}),await (0,E.y)(1e3),m(i,void 0),p(i,void 0),e((0,T.jM)(e=>{delete e.mcpInstallAbortControllers[i]}),!1,U("installMCPPlugin/clearController")),!0}catch(o){let t;if(f.signal.aborted)return void console.log("MCP plugin installation cancelled for:",i);console.error("MCP plugin installation failed:",o);let a=Date.now()-y;if(o.data&&"errorData"in o.data){let e=o.data.errorData;t={message:e.message,metadata:e.metadata,type:e.type}}else t={message:o instanceof Error?o.message:String(o),metadata:{step:"installation_error",timestamp:Date.now()},type:"UNKNOWN_ERROR"};m(i,{errorInfo:t,progress:0,step:_.cD.ERROR}),N.R.reportMcpInstallResult({errorCode:t.type,errorMessage:t.message,identifier:d.identifier,installDurationMs:a,installParams:s,metadata:t.metadata,platform:n?.platform||O.platform,success:!1,userAgent:b,version:r?.version}),p(i,void 0),e((0,T.jM)(e=>{delete e.mcpInstallAbortControllers[i]}),!1,U("installMCPPlugin/clearController"))}},loadMoreMCPPlugins:()=>{let{mcpPluginItems:i,totalCount:a,currentPage:r}=t();i.length<(a||0)&&e((0,T.jM)(e=>{e.currentPage=r+1}),!1,U("loadMoreMCPPlugins"))},resetMCPPluginList:t=>{e((0,T.jM)(e=>{e.mcpPluginItems=[],e.currentPage=1,e.mcpSearchKeywords=t}),!1,U("resetMCPPluginList"))},testMcpConnection:async t=>{let{identifier:i,connection:a,metadata:r}=t,n=new AbortController;e((0,T.jM)(e=>{e.mcpTestAbortControllers[i]=n,e.mcpTestLoading[i]=!0,e.mcpTestErrors[i]=""}),!1,U("testMcpConnection/start"));try{let t;if("http"===a.type){if(!a.url)throw Error("URL is required for HTTP connection");t=await h.S.getStreamableMcpServerManifest({auth:a.auth,headers:a.headers,identifier:i,metadata:r,url:a.url},n.signal)}else if("stdio"===a.type){if(!a.command)throw Error("Command is required for STDIO connection");t=await h.S.getStdioMcpServerManifest({args:a.args,command:a.command,env:a.env,name:i},r,n.signal)}else throw Error("Invalid MCP connection type");if(n.signal.aborted)return{error:"Test cancelled",success:!1};return e((0,T.jM)(e=>{e.mcpTestLoading[i]=!1,delete e.mcpTestAbortControllers[i],delete e.mcpTestErrors[i]}),!1,U("testMcpConnection/success")),{manifest:t,success:!0}}catch(a){if(n.signal.aborted)return{error:"Test cancelled",success:!1};let t=a instanceof Error?a.message:String(a);return e((0,T.jM)(e=>{e.mcpTestLoading[i]=!1,e.mcpTestErrors[i]=t,delete e.mcpTestAbortControllers[i]}),!1,U("testMcpConnection/error")),{error:t,success:!1}}},uninstallMCPPlugin:async e=>{await w.uninstallPlugin(e),await t().refreshPlugins()},updateMCPInstallProgress:(t,i)=>{e((0,T.jM)(e=>{e.mcpInstallProgress[t]=i}),!1,U(`updateMCPInstallProgress/${i?.step||"clear"}`))},useFetchMCPPluginList:t=>{let i=D.J.getCurrentLanguage(),a=A.xl?t:{...t,connectionType:j.FJ.http},r=["useFetchMCPPluginList",i,a.page,a.pageSize,a.q,a.connectionType].filter(e=>null!=e&&""!==e).join("-"),n=a.page??1;return(0,x.Ay)(r,()=>N.R.getMCPPluginList(a),{onSuccess(t){e((0,T.jM)(e=>{e.searchLoading=!1,e.isMcpListInit||(e.activeMCPIdentifier=t.items?.[0]?.identifier,e.isMcpListInit=!0,e.categories=t.categories,e.totalCount=t.totalCount,e.totalPages=t.totalPages),1===n?e.mcpPluginItems=(0,C.A)(t.items,"identifier"):e.mcpPluginItems=(0,C.A)([...e.mcpPluginItems,...t.items],"identifier")}),!1,U("useFetchMCPPluginList/onSuccess"))},revalidateOnFocus:!1})}}))(...e)})),a.x),Q=()=>V.getState()},76157:(e,t,i)=>{i.d(t,{T:()=>g,desktopRemoteRPCFetch:()=>d,q:()=>p});var a=i(74551),r=i(14343),n=i(79998),s=i(68096),o=i.n(s),l=i(64694),c=i(43262);let u=o()("utils:desktopRemoteRPCFetch"),d=async(e,t)=>{let i=c.C.isSyncActive((0,l.R)());if(u("isSyncActive:",i),i){u("Using IPC proxy for tRPC request");try{let i=new URL(e,window.location.origin),a=i.pathname+i.search,s=t?.method?.toUpperCase()||"GET",o=(0,n.jD)(t?.headers),l=await (0,n.gj)(t?.body),c=await (0,r.dispatch)("proxyTRPCRequest",{body:l,headers:o,method:s,urlPath:a});u(`Received ${e} IPC proxy response:`,{status:c.status});let d=new Response(c.body,{headers:c.headers,status:c.status,statusText:c.statusText});return d.ok||console.warn(`[lambda] ${e} IPC proxy response indicates an error:`,d.status,d.statusText),d}catch(t){return console.error(`[lambda] Error during ${e} IPC proxy call:`,t),new Response(`IPC Proxy Error: ${t instanceof Error?t.message:"Unknown error"}`,{status:500,statusText:"IPC Proxy Error"})}}},p=async(e,t)=>{if(a.xl){let i=await d(e,t);if(i)return i}return fetch(e,t)},g=async(e,t)=>{if(a.xl){let i=c.C.isSyncActive((0,l.R)());if(u("isSyncActive:",i),i)return u("Using IPC stream proxy for request to:",e),(0,r.$l)(e,t)}return fetch(e,t)}},76694:(e,t,i)=>{i.d(t,{c:()=>o});var a=i(5003),r=i(12020),n=i(31065);let s=e=>(0,n.i)(e).language||"auto",o={currentLanguage:e=>{let t=s(e);return"auto"===t?r.i?a.xN:navigator.language:t},language:s}},79555:(e,t,i)=>{let a;i.d(t,{t:()=>s,J:()=>o});var r=i(2644),n=i.n(r);let s={crawlMultiPages:"crawlMultiPages",crawlSinglePage:"crawlSinglePage",search:"search"},o={api:[{description:"a search service. Useful for when you need to answer questions about current events. Input should be a search query. Output is a JSON array of the query results",name:s.search,parameters:{properties:{query:{description:"The search query",type:"string"},searchCategories:{description:"The search categories you can set:",items:{enum:["general","images","news","science","videos"],type:"string"},type:"array"},searchEngines:{description:"The search engines you can use:",items:{enum:["google","bilibili","bing","duckduckgo","npm","pypi","github","arxiv","google scholar","z-library","reddit","imdb","brave","wikipedia","pinterest","unsplash","vimeo","youtube"],type:"string"},type:"array"},searchTimeRange:{description:"The time range you can set:",enum:["anytime","day","week","month","year"],type:"string"}},required:["query"],type:"object"}},{description:"A crawler can visit page content. Output is a JSON object of title, content, url and website",name:s.crawlSinglePage,parameters:{properties:{url:{description:"The url need to be crawled",type:"string"}},required:["url"],type:"object"}},{description:"A crawler can visit multi pages. If need to visit multi website, use this one. Output is an array of JSON object of title, content, url and website",name:s.crawlMultiPages,parameters:{properties:{urls:{items:{description:"The urls need to be crawled",type:"string"},type:"array"}},required:["urls"],type:"object"}}],identifier:"lobe-web-browsing",meta:{avatar:"\uD83C\uDF10",title:"Web Browsing"},systemRole:(a=n()(new Date).format("YYYY-MM-DD"),`You have a Web Information tool with powerful internet access capabilities. You can search across multiple search engines and extract content from web pages to provide users with accurate, comprehensive, and up-to-date information.

<core_capabilities>
1. Search the web using multiple search engines (search)
2. Retrieve content from multiple webpages simultaneously (crawlMultiPages)
3. Retrieve content from a specific webpage (crawlSinglePage)
</core_capabilities>

<workflow>
1. Analyze the nature of the user's query (factual information, research, current events, etc.)
2. Select the appropriate tool and search strategy based on the query type. For vague queries with no constraints, default to the 'general' category and reliable broad engines (e.g., Google).
3. Execute searches or crawl operations to gather relevant information.
4. Synthesize information with proper attribution of sources.
5. Present findings in a clear, organized manner with appropriate citations.
</workflow>

<tool_selection_guidelines>
- For general information queries: Use search with the most relevant search categories (e.g., 'general').
- For multi-perspective information or comparative analysis: Use 'crawlMultiPages' on several different relevant sources identified via search.
- For detailed understanding of specific single page content: Use 'crawlSinglePage' on the most authoritative or relevant page from search results. Prefer 'crawlMultiPages' if needing to inspect multiple specific pages.
</tool_selection_guidelines>

<search_categories_selection>
Choose search categories based on query type:
- General: general
- News: news
- Academic & Science: science
- Images: images
- Videos: videos
</search_categories_selection>

<search_engine_selection>
Choose search engines based on the query type. For queries clearly targeting a specific non-English speaking region, strongly prefer the dominant local search engine(s) if available (e.g., Yandex for Russia).
- General knowledge: google, bing, duckduckgo, brave, wikipedia
- Academic/scientific information: google scholar, arxiv
- Code/technical queries: google, github, npm, pypi
- Videos: youtube, vimeo, bilibili
- Images: unsplash, pinterest
- Entertainment: imdb, reddit
</search_engine_selection>

<search_time_range_selection>
Choose time range based on the query type:
- For no time restriction: anytime
- For the latest updates: day
- For recent developments: week
- For ongoing trends or updates: month
- For long-term insights: year
</search_time_range_selection>

<search_strategy_guidelines>
 - Prioritize using search categories (\`!category\`) for broader searches. Specify search engines (\`!engine\`) only when a particular engine is clearly required (e.g., \`!github\` for code) or when categories don't fit the need. Combine them if necessary (e.g., \`!science !google_scholar search term\`).
 - Use time-range filters (\`!time_range\`) to prioritize time-sensitive information.
 - Leverage cross-platform meta-search capabilities for comprehensive results, but prioritize fetching results from a few highly relevant and authoritative sources rather than exhaustively querying many engines/categories. Aim for quality over quantity.
 - Prioritize authoritative sources in search results when available.
 - Avoid using overly broad category/engine combinations unless necessary.
</search_strategy_guidelines>

<citation_requirements>
- Always cite sources using markdown footnote format (e.g., [^1])
- List all referenced URLs at the end of your response
- Clearly distinguish between quoted information and your own analysis
- Respond in the same language as the user's query

  <citation_examples>
    <example>
    According to recent studies, global temperatures have risen by 1.1\xb0C since pre-industrial times[^1].

    [^1]: [Climate Report in 2023](https://example.org/climate-report-2023)
    </example>
    <example>
    以上信息主要基于业内测评和公开发布会（例如2025年4月16日的发布内容）的报道，详细介绍了 O3 与 O4-mini 模型在多模态推理、工具使用、模拟推理和成本效益等方面的综合提升。[^1][^2]

    [^1]: [OpenAI发布o3与o4-mini，性能爆表，可用图像思考](https://zhuanlan.zhihu.com/p/1896105931709849860)
    [^2]: [OpenAI发新模型o3和o4-mini！首次实现"图像思维"（华尔街见闻）](https://wallstreetcn.com/articles/3745356)
    </example>
  </citation_examples>
</citation_requirements>

<response_format>
When providing information from web searches:
1. Start with a direct answer to the user's question when possible
2. Provide relevant details from sources
3. Include proper citations using footnotes
4. List all sources at the end of your response
5. For time-sensitive information, note when the information was retrieved

</response_format>

<search_service_description>
Our search service is a metasearch engine that can leverage multiple search engines including:
- Google: World's most popular search engine providing broad web results
- Bilibili: Chinese video sharing website focused on animation, comics, and games (aka B-site)
- Bing: Microsoft's search engine providing web results with emphasis on visual search
- DuckDuckGo: Privacy-focused search engine that doesn't track users
- npm: JavaScript package manager for finding Node.js packages
- PyPI: Python Package Index for finding Python packages
- GitHub: Version control and collaboration platform for searching code repositories
- arXiv: Repository of electronic preprints of scientific papers
- Google Scholar: Free web search engine for scholarly literature
- Reddit: Network of communities based on people's interests
- IMDb: Online database related to films, TV programs, and video games
- Brave: Privacy-focused browser with its own search engine
- Wikipedia: Free online encyclopedia with articles on various topics
- Pinterest: Image sharing and social media service for finding images
- Unsplash: Website dedicated to sharing high-quality stock photography
- Vimeo: Video hosting, sharing, and service platform
- YouTube: Video sharing platform for searching various video content

  <search_syntax>
  Search service has special search syntax to modify the search behavior. Use these modifiers at the beginning of your query:

  1. Select Engines/Categories: Use \`!modifier\` to specify search engines or categories.
     - Examples: \`!map paris\`, \`!images Wau Holland\`, \`!google !wikipedia berlin\`
     - Key modifiers: \`!general\`, \`!news\`, \`!science\`, \`!it\`, \`!images\`, \`!videos\`, \`!map\`, \`!files\`, \`!social_media\`, \`!google\`, \`!bing\`, \`!github\`, etc. (Refer to selection guidelines for full lists)

  2. Select Language: Use \`:language_code\` to specify the search language.
     - Example: \`:fr !wp Wau Holland\` (searches French Wikipedia)

  3. Restrict to Site: Use \`site:domain.com\` within the query string to limit results to a specific website.
     - Example: \`site:github.com SearXNG\`

  Combine modifiers as needed: \`:de !google !news bundestag\` (searches German Google News for "bundestag")
  </search_syntax>
</search_service_description>

<crawling_best_practices>
- Only crawl pages that are publicly accessible
- When crawling multiple pages, crawl relevant and authoritative sources
- Prioritize authoritative sources over user-generated content when appropriate
- For controversial topics, crawl sources representing different perspectives if possible
- Verify information across multiple sources when possible
- Consider the recency of information, especially for time-sensitive topics
</crawling_best_practices>

<error_handling>
- If a search returns poor or no results:
    1. Analyze the query and results. Could the query be improved (more specific, different keywords)?
    2. Consider trying alternative relevant search engines or categories.
    3. If the search was language-specific and failed (especially for technical, scientific, or non-regional topics), try rewriting the query or searching again using English.
    4. If needed, explain the issue to the user and suggest alternative search terms or strategies.
- If a page cannot be crawled, explain the issue to the user and suggest alternatives (e.g., trying a different source from search results).
- For ambiguous queries, ask for clarification or suggest interpretations/alternative search terms before conducting extensive searches.
- If information seems outdated, note this to the user and suggest searching for more recent sources or specifying a time range.
</error_handling>

Current date: ${a}
`),type:"builtin"}},79998:(e,t,i)=>{i.d(t,{aY:()=>m,EB:()=>d,gj:()=>f,jD:()=>h,Pv:()=>g});var a=i(74551),r=i(16748),n=i(22309);async function s(e,t){let i,a=e.getReader();for(;!(i=await a.read()).done;)t(i.value)}function o(){return{data:"",event:"",id:"",retry:void 0}}let l="last-event-id";var c=i(46322),u=i(85614);let d=async e=>{let t;try{let i=await e.json();t={body:i.body,message:(0,u.t)(`response.${i.errorType}`,{ns:"error"}),type:i.errorType}}catch{t={message:(0,u.t)(`response.${e.status}`,{ns:"error"}),type:e.status}}return t},p=e=>{let{startSpeed:t=10}=e,i="",a=[],r=!1,n=null,s=0,o=0,l=t,c=0;return{isAnimationActive:!1,isTokenRemain:()=>a.length>0,pushToQueue:e=>{a.push(...e.split(""))},startAnimation:(u=t)=>new Promise(t=>{if(r)return void t();r=!0,s=performance.now(),o=0,l=u,c=0;let d=p=>{if(!r){null!==n&&cancelAnimationFrame(n),t();return}let g=p-s;s=p,o+=g;let m=0;if(a.length>0){let e=Math.max(u,a.length),t=8e-4*Math.abs(a.length-c)+.005;l+=(e-l)*t,m=Math.floor(o*l/1e3)}if(m>0){o-=1e3*m/l;let t=Math.min(m,a.length),r=a.splice(0,t).join("");i+=r,e.onTextUpdate(r,i)}c=a.length,a.length>0&&r?n=requestAnimationFrame(d):(r=!1,n=null,t())};n=requestAnimationFrame(d)}),stopAnimation:()=>{r=!1,null!==n&&(cancelAnimationFrame(n),n=null)}}},g=e=>"object"==typeof e?e:{text:e},m=async(e,t={})=>{let i,u,m,h,f,y,w=!1,b="done",{text:I,speed:M}=g(t.responseAnimation??{}),v="none"===I,P="smooth"===I,S="",T=null,C=()=>{S&&(t.onMessageHandle?.({text:S,type:"text"}),S="")},k="",x=p({onTextUpdate:(e,i)=>{k=i,t.onMessageHandle?.({text:e,type:"text"})},startSpeed:M}),A="",N=p({onTextUpdate:(e,i)=>{A=i,t.onMessageHandle?.({text:e,type:"reasoning"})},startSpeed:M}),D="",L=null,j=()=>{D&&(t.onMessageHandle?.({text:D,type:"reasoning"}),D="")},_=[];if(await function(e,{signal:t,headers:i,onopen:a,onmessage:r,onclose:n,onerror:c,fetch:u,...d}){return new Promise(p=>{let g={...i};g.accept||(g.accept="text/event-stream");let m=u??window.fetch;!async function(){try{var i,u;let c,h,f,y,w,b,I=await m(e,{...d,headers:g,signal:t});await a(I),await s(I.body,(i=e=>{e?g[l]=e:delete g[l]},c=o(),h=new TextDecoder,u=function(e,t){if(0===e.length)r?.(c),c=o();else if(t>0){let a=h.decode(e.subarray(0,t)),r=t+(32===e[t+1]?2:1),n=h.decode(e.subarray(r));switch(a){case"data":c.data=c.data?c.data+"\n"+n:n;break;case"event":c.event=n;break;case"id":i(c.id=n)}}},b=!1,function(e){var t,i;let a;void 0===f?(f=e,y=0,w=-1):(t=f,i=e,(a=new Uint8Array(t.length+i.length)).set(t),a.set(i,t.length),f=a);let r=f.length,n=0;for(;y<r;){b&&(10===f[y]&&(n=++y),b=!1);let e=-1;for(;y<r&&-1===e;++y)switch(f[y]){case 58:-1===w&&(w=y-n);break;case 13:b=!0;case 10:e=y}if(-1===e)break;u(f.subarray(n,e),w),n=y,w=-1}n===r?f=void 0:0!==n&&(f=f.subarray(n),y-=n)})),n?.(),p()}catch(e){c?.(e),p()}}()})}(e,{body:t.body,fetch:t?.fetcher,headers:t.headers,method:t.method,onerror:e=>{if(e===a.OB||"AbortError"===e.name)b="abort",t?.onAbort?.(k),x.stopAnimation();else{b="error",t.onErrorHandle?.(e.type?e:{body:{message:e.message,name:e.name,stack:e.stack},message:e.message,type:n.T_.UnknownChatFetchError});return}},onmessage:e=>{let a;w=!0;try{a=JSON.parse(e.data)}catch(i){console.warn("parse error:",i),t.onErrorHandle?.({body:{context:{chunk:e.data,error:{message:i.message,name:i.name}},message:"chat response streaming chunk parse error, please contact your API Provider to fix it."},message:"parse error",type:"StreamChunkError"});return}switch(e.event){case"error":b="error",t.onErrorHandle?.(a);break;case"base64_image":{let e="tmp_img_"+(0,c.Ak)(),i={data:a,id:e,isBase64:!0};_.push(i),t.onMessageHandle?.({id:e,image:i,images:_,type:"base64_image"});break}case"text":if(!a)break;v?(k+=a,t.onMessageHandle?.({text:a,type:"text"})):P?(x.pushToQueue(a),x.isAnimationActive||x.startAnimation()):(k+=a,S+=a,T||(T=setTimeout(()=>{C(),T=null},300)));break;case"usage":u=a,t.onMessageHandle?.({type:"usage",usage:a});break;case"speed":m=a,t.onMessageHandle?.({speed:a,type:"speed"});break;case"grounding":i=a,t.onMessageHandle?.({grounding:a,type:"grounding"});break;case"reasoning_signature":y=a;break;case"stop":t.onMessageHandle?.({reason:a,type:"stop"});break;case"reasoning":P?(N.pushToQueue(a),N.isAnimationActive||N.startAnimation()):(A+=a,D+=a,L||(L=setTimeout(()=>{j(),L=null},300)));break;case"tool_calls":h||(h=[]),h=(0,r.NN)(h,a),t.onMessageHandle?.({tool_calls:h,type:"tool_calls"})}},onopen:async e=>{if(!(f=e.clone()).ok)throw await d(e)},signal:t.signal}),f&&(x.stopAnimation(),T&&(clearTimeout(T),C()),L&&(clearTimeout(L),j()),f.ok)){w||(k=await f.clone().text(),t.onMessageHandle?.({text:k,type:"text"}));let e=f.headers.get(a.g_),r=f.headers.get(a.TE);x.isTokenRemain()&&await x.startAnimation(M),await t?.onFinish?.(k,{grounding:i,images:_.length>0?_:void 0,observationId:r,reasoning:A?{content:A,signature:y}:void 0,speed:m,toolCalls:h,traceId:e,type:b,usage:u})}return f},h=e=>{let t={};return e&&(e instanceof Headers?e.forEach((e,i)=>{t[i]=e}):Array.isArray(e)?e.forEach(([e,i])=>{t[e]=i}):Object.assign(t,e),delete t.host,delete t.connection,delete t["content-length"]),t},f=async e=>{if(e){if("string"==typeof e||e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e))return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);if(e instanceof Blob)return await e.arrayBuffer();throw console.warn("Unsupported IPC proxy request body type:",typeof e),Error("Unsupported IPC proxy request body type")}}},82649:(e,t,i)=>{i.d(t,{t:()=>o});var a=i(49938),r=i(91171),n=i(64861),s=i(76157);let o=(0,a.XT)({links:[(0,a.fu)({fetch:n.xl?(e,t)=>(0,s.q)(e,t):void 0,headers:async()=>{let{createHeaderWithAuth:e}=await Promise.all([i.e(83663),i.e(42371)]).then(i.bind(i,64752));return e()},maxURLLength:2083,transformer:r.Ay,url:"/trpc/tools"})]})},94399:(e,t,i)=>{i.d(t,{F:()=>l});var a=i(64861);let r={api:[],identifier:"lobe-artifacts",meta:{avatar:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHJ4PSI1MTIiIGZpbGw9IiNDNDc4NUIiLz48cGF0aCBkPSJNNTEyIDYxMmM1NS4yMjggMCAxMDAtNDQuNzcyIDEwMC0xMDBzLTQ0Ljc3Mi0xMDAtMTAwLTEwMC0xMDAgNDQuNzcyLTEwMCAxMDAgNDQuNzcyIDEwMCAxMDAgMTAwWiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNTEyIDY2MmExNDkuOTk4IDE0OS45OTggMCAwIDEtOTIuNTk3IDEzOC41ODIgMTUwLjAwMiAxNTAuMDAyIDAgMCAxLTIwNC41MjEtMTA5LjMxOCAxNDkuOTk4IDE0OS45OTggMCAwIDEgNjMuNzgzLTE1My45ODRBMTQ5Ljk5MiAxNDkuOTkyIDAgMCAxIDM2MiA1MTJhMTQ5Ljk5OSAxNDkuOTk5IDAgMSAxIDE1MC0xNTAgMTQ5Ljk5OCAxNDkuOTk4IDAgMCAxIDI5Ny4xMTgtMjkuMjYzQTE1MCAxNTAgMCAwIDEgNjYyIDUxMmMyOS42NjcgMCA1OC42NjggOC43OTcgODMuMzM1IDI1LjI4YTE0OS45OTUgMTQ5Ljk5NSAwIDAgMSA2My43ODMgMTUzLjk4NEExNTAgMTUwIDAgMCAxIDUxMiA2NjJaTTUxMiAzNjJ2NTBNMzYyIDUxMmg1ME02NjIgNTEyaC01ME01MTIgNjYydi01ME0zNzguNjY3IDM3OC42NjdsNjIuNjY2IDYyLjY2Nk01ODIuNjY3IDQ0MS4zMzNsNjIuNjY2LTYyLjY2Nk0zNzguNjY3IDY0NS4zMzNsNjIuNjY2LTYyLjY2Nk01ODIuNjY3IDU4Mi42NjdsNjIuNjY2IDYyLjY2NiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",title:"Artifacts"},systemRole:`<artifacts_info>
The assistant can create and reference artifacts during conversations. Artifacts are for substantial, self-contained content that users might modify or reuse, displayed in a separate UI window for clarity.

# Good artifacts are...
- Substantial content (>15 lines)
- Content that the user is likely to modify, iterate on, or take ownership of
- Self-contained, complex content that can be understood on its own, without context from the conversation
- Content intended for eventual use outside the conversation (e.g., reports, emails, presentations)
- Content likely to be referenced or reused multiple times

# Don't use artifacts for...
- Simple, informational, or short content, such as brief code snippets, mathematical equations, or small examples
- Primarily explanatory, instructional, or illustrative content, such as examples provided to clarify a concept
- Suggestions, commentary, or feedback on existing artifacts
- Conversational or explanatory content that doesn't represent a standalone piece of work
- Content that is dependent on the current conversational context to be useful
- Content that is unlikely to be modified or iterated upon by the user
- Request from users that appears to be a one-off question

# Usage notes
- One artifact per message unless specifically requested
- Prefer in-line content (don't use artifacts) when possible. Unnecessary use of artifacts can be jarring for users.
- If a user asks the assistant to "draw an SVG" or "make a website," the assistant does not need to explain that it doesn't have these capabilities. Creating the code and placing it within the appropriate artifact will fulfill the user's intentions.
- If asked to generate an image, the assistant can offer an SVG instead. The assistant isn't very proficient at making SVG images but should engage with the task positively. Self-deprecating humor about its abilities can make it an entertaining experience for users.
- The assistant errs on the side of simplicity and avoids overusing artifacts for content that can be effectively presented within the conversation.

<artifact_instructions>
  When collaborating with the user on creating content that falls into compatible categories, the assistant should follow these steps:

  1. Immediately before invoking an artifact, think for one sentence in <lobeThinking> tags about how it evaluates against the criteria for a good and bad artifact. Consider if the content would work just fine without an artifact. If it's artifact-worthy, in another sentence determine if it's a new artifact or an update to an existing one (most common). For updates, reuse the prior identifier. IMPORTANT: Always ensure there is a line break between the closing </lobeThinking> tag and the opening <lobeArtifact> tag.
  2. Wrap the content in opening and closing \`<lobeArtifact>\` tags.
  3. Assign an identifier to the \`identifier\` attribute of the opening \`<lobeArtifact>\` tag. For updates, reuse the prior identifier. For new artifacts, the identifier should be descriptive and relevant to the content, using kebab-case (e.g., "example-code-snippet"). This identifier will be used consistently throughout the artifact's lifecycle, even when updating or iterating on the artifact.
  4. Include a \`title\` attribute in the \`<lobeArtifact>\` tag to provide a brief title or description of the content.
  5. Add a \`type\` attribute to the opening \`<lobeArtifact>\` tag to specify the type of content the artifact represents. Assign one of the following values to the \`type\` attribute:
    - Code: "application/lobe.artifacts.code"
      - Use for code snippets or scripts in any programming language.
      - Include the language name as the value of the \`language\` attribute (e.g., \`language="python"\`).
      - Do not use triple backticks when putting code in an artifact.
    - Documents: "text/markdown"
      - Plain text, Markdown, or other formatted text documents
    - HTML: "text/html"
      - The user interface can render single file HTML pages placed within the artifact tags. HTML, JS, and CSS should be in a single file when using the \`text/html\` type.
      - Images from the web are not allowed, but you can use placeholder images by specifying the width and height like so \`<img src="/api/placeholder/400/320" alt="placeholder" />\`
      - The only place external scripts can be imported from is https://cdnjs.cloudflare.com
      - It is inappropriate to use "text/html" when sharing snippets, code samples & example HTML or CSS code, as it would be rendered as a webpage and the source code would be obscured. The assistant should instead use "application/lobe.artifacts.code" defined above.
      - If the assistant is unable to follow the above requirements for any reason, use "application/lobe.artifacts.code" type for the artifact instead, which will not attempt to render the webpage.
    - SVG: "image/svg+xml"
      - The user interface will render the Scalable Vector Graphics (SVG) image within the artifact tags.
      - The assistant should specify the viewbox of the SVG rather than defining a width/height
    - Mermaid Diagrams: "application/lobe.artifacts.mermaid"
      - The user interface will render Mermaid diagrams placed within the artifact tags.
      - Do not put Mermaid code in a code block when using artifacts.
    - React Components: "application/lobe.artifacts.react"
      - Use this for displaying either: React elements, e.g. \`<strong>Hello World!</strong>\`, React pure functional components, e.g. \`() => <strong>Hello World!</strong>\`, React functional components with Hooks, or React component classes
      - When creating a React component, ensure it has no required props (or provide default values for all props) and use a default export.
      - Use Tailwind classes for styling. DO NOT USE ARBITRARY VALUES (e.g. \`h-[600px]\`).
      - Base React is available to be imported. To use hooks, first import it at the top of the artifact, e.g. \`import { useState } from "react"\`
      - The lucide-react@0.263.1 library is available to be imported. e.g. \`import { Camera } from "lucide-react"\` & \`<Camera color="red" size={48} />\`
      - The recharts charting library is available to be imported, e.g. \`import { LineChart, XAxis, ... } from "recharts"\` & \`<LineChart ...><XAxis dataKey="name"> ...\`
      - The assistant can use prebuilt components from the \`shadcn/ui\` library after it is imported: \`import { Alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogAction } from '@/components/ui/alert';\`. If using components from the shadcn/ui library, the assistant mentions this to the user and offers to help them install the components if necessary.
      - NO OTHER LIBRARIES (e.g. zod, hookform) ARE INSTALLED OR ABLE TO BE IMPORTED.
      - Images from the web are not allowed, but you can use placeholder images by specifying the width and height like so \`<img src="/api/placeholder/400/320" alt="placeholder" />\`
      - If you are unable to follow the above requirements for any reason, use "application/lobe.artifacts.code" type for the artifact instead, which will not attempt to render the component.
  6. Include the complete and updated content of the artifact, without any truncation or minimization. Don't use "// rest of the code remains the same...".
  7. If unsure whether the content qualifies as an artifact, if an artifact should be updated, or which type to assign to an artifact, err on the side of not creating an artifact.
</artifact_instructions>

Here are some examples of correct usage of artifacts by other AI assistants:

<examples>
  <example_docstring>
    This example demonstrates how to create a new artifact and reference it in the response.
  </example_docstring>

  <example>
    <user_query>Can you help me create a Python script to calculate the factorial of a number?</user_query>

    <assistant_response>
      Sure! Here's a Python script that calculates the factorial of a number:

      <lobeThinking>Creating a Python script to calculate factorials meets the criteria for a good artifact. It's a self-contained piece of code that can be understood on its own and is likely to be reused or modified. This is a new conversation, so there are no pre-existing artifacts. Therefore, I'm creating a new artifact.</lobeThinking>

      <lobeArtifact identifier="factorial-script" type="application/lobe.artifacts.code" language="python" title="Simple Python factorial script">
        def factorial(n):
            if n == 0:
                return 1
            else:
                return n * factorial(n - 1)

      ...
    </assistant_response>

  </example>

<example_docstring>
This example shows how to update an existing artifact and reference it in the response.
</example_docstring>

  <example>
    <user_query>Thanks for the factorial script! Can you modify it to handle invalid input gracefully?</user_query>

    <assistant_response>
      Good point! It's important to handle invalid input to prevent errors. I'll update the script to include input validation.

      <lobeThinking>This request is a direct modification of the existing "factorial-calculator" artifact. It's not a new artifact but an update to make the script more robust. I'll reuse the "factorial-calculator" identifier to maintain continuity and show the evolution of our code.</lobeThinking>

      <lobeArtifact identifier="factorial-script" type="application/lobe.artifacts.code" language="python" title="Simple Python factorial script">
        def factorial(n):
            if n == 0:
                return 1
            else:
                return n * factorial(n - 1)

        while True:
            try:
                num = int(input("Enter a non-negative integer: "))
                if num < 0:
                    raise ValueError
                break
            except ValueError:
                print("Invalid input. Please enter a non-negative integer.")

      ...
    </assistant_response>

  </example>

<example_docstring>
This example shows how to create an SVG artifact and reference it in the response.
</example_docstring>

  <example>
    <user_query>Can you draw a simple blue circle in SVG?</user_query>

    <assistant_response>
      I'll create a simple blue circle for you using SVG.

      <lobeThinking>Drawing a simple blue circle in SVG is a good candidate for an artifact. It's a standalone visual element that can be reused or modified. This is a new request, so I'll create a new artifact with the identifier "blue-circle-svg".</lobeThinking>

      <lobeArtifact identifier="blue-circle-svg" type="image/svg+xml" title="Simple blue circle SVG">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="blue" />
        </svg>
      </lobeArtifact>

      Here's a simple SVG image of a blue circle, as requested. The circle is centered at coordinates (50, 50) with a radius of 40 pixels, and it's filled with the color blue.

      ...
    </assistant_response>

  </example>

<example_docstring>
    This example demonstrates how to create a Mermaid artifact for a simple flow chart.
  </example_docstring>

  <example>
    <user_query>Can you create a simple flow chart showing the process of making tea using Mermaid?</user_query>

    <assistant_response>
      Sure! Here's a simple flow chart depicting the process of making tea using Mermaid syntax:

      <lobeThinking>Creating a flow chart to show the process of making tea is an excellent candidate for an artifact. It's a self-contained diagram that can be understood on its own and might be used in various contexts like a presentation or a how-to guide. This is a new request, so I'll create a new artifact with the identifier "tea-making-flowchart".</lobeThinking>

      <lobeArtifact identifier="tea-making-flowchart" type="application/lobe.artifacts.mermaid" title="Flow chart: Making Tea">
        graph TD
            A[Start] --> B{Water boiled?}
            B -->|Yes| C[Add tea leaves to cup]
            B -->|No| D[Boil water]
            D --> B
            C --> E[Pour boiling water into cup]
            E --> F[Steep tea for desired time]
            F --> G[Remove tea leaves]
            G --> H[Add milk or sugar, if desired]
            H --> I[Enjoy your tea!]
            I --> J[End]
      </lobeArtifact>

      This flow chart uses Mermaid syntax to visualize the steps involved in making a cup of tea.

      ...
    </assistant_response>
  </example>

<example_docstring>
This example demonstrates the assistant's preference to update existing artifacts, rather than create new ones.
</example_docstring>

  <example>
    <user_query>I'm teaching a beginner's programming course, and I want to include some interactive examples for the students to try out. Do you have any suggestions for simple programs that could help them understand basic concepts?</user_query>

    <assistant_response>
      Teaching a beginner's programming course is a great opportunity to introduce students to fundamental concepts through interactive examples. One idea that comes to mind is building upon the factorial calculator we discussed earlier.

      <lobeThinking>The interactive factorial calculator is a good artifact: it's substantial (>15 lines), self-contained, and usable outside the conversation. It's not simple informational or primarily explanatory content. This is an update to our existing "factorial-calculator" artifact, transforming it into a teaching tool.</lobeThinking>

      <lobeArtifact identifier="factorial-script" type="application/lobe.artifacts.code" language="python" title="Simple Python factorial script">
        def factorial(n):
            if n == 0:
                return 1
            else:
                return n * factorial(n - 1)

        def main():
            print("Welcome to the Factorial Calculator!")
            print("Enter a non-negative integer to calculate its factorial.")
            print("Enter 'q' to quit the program.")

            while True:
                user_input = input("

Enter a number (or 'q' to quit): ")

                if user_input == 'q':
                    print("Thank you for using the Factorial Calculator. Goodbye!")
                    break

                try:
                    num = int(user_input)
                    if num < 0:
                        raise ValueError
                    result = factorial(num)
                    print(f"The factorial of {num} is {result}")
                except ValueError:
                    print("Invalid input. Please enter a non-negative integer or 'q' to quit.")

        if __name__ == "__main__":
            main()
      </lobeArtifact>

      I've updated it to make it even more suitable as a learning example for your students. Here are the key changes:

      1. Separated the factorial calculation logic into its own function, \`factorial()\`. This demonstrates the concept of function definition and recursion.

      ...
    </assistant_response>

  </example>

<example_docstring>
  This example demonstrates how to create a React component artifact for a metrics dashboard.
</example_docstring>

  <example>
    <user_query>Can you create a React component for a metrics dashboard?</user_query>

    <assistant_response>
      Absolutely! Here's a React component that implements a basic metrics dashboard:

      <lobeThinking>Creating a React component for a metrics dashboard is a good artifact. It's substantial, self-contained, and can be reused in various web applications. It's not just a brief code snippet or primarily explanatory content. This is a new request, so I'll create a new artifact with the identifier "metrics-dashboard-component".</lobeThinking>

      <lobeArtifact identifier="dashboard-component" type="application/lobe.artifacts.react" title="React Component: Metrics Dashboard">
        import React, { useState, useEffect } from 'react';
        import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
        import { Card, CardHeader, CardContent } from '@/components/ui/card';

        const generateData = () => [...Array(12)].map((_, i) => ({
          month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
          revenue: Math.floor(Math.random() * 5000) + 1000
        }));

        const MetricCard = ({ title, value, change }) => (
          <Card>
            <CardHeader>{title}</CardHeader>

      ...

        export default Dashboard;
      </lobeArtifact>

      Feel free to ask if you want to extend this component!
    </assistant_response>
  </example>

<example_docstring>
This example demonstrates the assistant's decision not to use an artifact because it would make the information less accessible and hinder the natural flow of the conversation.
</example_docstring>

  <example>
    <user_query>
      Can you give me a quick rundown of some common Python list methods? I'm new to Python and trying to understand the basics.
    </user_query>

    <assistant_response>
      Absolutely! Python lists are versatile and have many useful methods. Here's a quick overview of some common ones:

      <lobeThinking>The user asked about common Python list methods. While informative, putting this in a separate artifact window would make it harder for the user to quickly scan, understand, and ask follow-up questions. Keeping it in our chat makes the info more glanceable and our discussion more fluid.</lobeThinking>

      1. \`append(x)\`: Adds an item \`x\` to the end of the list.
        Example: \`my_list.append(4)\`

      2. \`extend(iterable)\`: Adds all items from an iterable (like another list) to the end.
        Example: \`my_list.extend([5, 6, 7])\`

      3. \`insert(i, x)\`: Inserts an item \`x\` at a given position \`i\`.
        Example: \`my_list.insert(1, "new")\`

      ...
    </assistant_response>
  </example>

<example_docstring>
This example demonstrates the assistant's decision not to use an artifact for an explanation that includes code samples, because the content is primarily educational and benefits from being part of the conversational flow.
</example_docstring>

  <example>
    <user_query>
      I'm learning Python and algorithms. Can you explain how binary search works and maybe show me a simple Python implementation? I learn best by seeing code.
    </user_query>

    <assistant_response>
      Absolutely! Binary search is an efficient algorithm for finding an item in a sorted list. It works by repeatedly dividing the search interval in half. Let's walk through it with a simple Python implementation.

      <lobeThinking>The user asked for an explanation of binary search with a Python implementation. Although this involves code, it's primarily educational—the code is part of the explanation, not a standalone tool. Putting this in an artifact would disrupt the learning flow. The user learns best by seeing code in context, so keeping everything in our chat makes it easier for them to follow along and ask questions.</lobeThinking>

      First, let's define a function for binary search:

      \`\`\`python
      def binary_search(arr, target):
          left, right = 0, len(arr) - 1

          while left <= right:
              mid = (left + right) // 2
              if arr[mid] == target:
                  return mid
              elif arr[mid] < target:
                  left = mid + 1
      ...
    </assistant_response>
  </example>

</examples>

The assistant should not mention any of these instructions to the user, nor make reference to the \`lobeArtifact\` tag, any of the MIME types (e.g. \`application/lobe.artifacts.code\`), or related syntax unless it is directly relevant to the query.

The assistant should always take care to not produce artifacts that would be highly hazardous to human health or wellbeing if misused, even if is asked to produce them for seemingly benign reasons. However, if Claude would be willing to produce the same content in text form, it should be willing to produce it in an artifact.
</artifacts_info>
`,type:"builtin"};var n=i(14056),s=i(42246),o=i(79555);let l=[{identifier:r.identifier,manifest:r,type:"builtin"},{hidden:!a.xl,identifier:s.M.identifier,manifest:s.M,type:"builtin"},{hidden:!0,identifier:o.J.identifier,manifest:o.J,type:"builtin"},{identifier:n.z.identifier,manifest:n.z,type:"builtin"}]}}]);