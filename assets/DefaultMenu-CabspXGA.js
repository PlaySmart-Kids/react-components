import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{r as h}from"./index-DJO9vBfz.js";import{ae as ee,ag as te,ah as ne,ac as A,c as T,e as re}from"./DefaultThemeProvider-DB5yquFP.js";import{N as oe}from"./ColorUtil-B4gL3Pif.js";import{G as ae}from"./DomUtil-DAqrhrKT.js";const ue="_HeaderPanel_wcx0m_1",ie="_navbar_wcx0m_11",ce="_navbar2_wcx0m_18",se="_MenuButton_wcx0m_46",le="_LinkButton_wcx0m_68",de="_ClickedButton_wcx0m_68",fe="_NormalButton_wcx0m_68",_e="_LinkButton2_wcx0m_101",ye="_RowItem_wcx0m_108",ge="_ImageButton_wcx0m_115",b={HeaderPanel:ue,navbar:ie,navbar2:ce,MenuButton:se,LinkButton:le,ClickedButton:de,NormalButton:fe,LinkButton2:_e,RowItem:ye,ImageButton:ge};var I={exports:{}},Z={};(function(n){"use client";Object.defineProperty(n,"__esModule",{value:!0});function e(r,c){for(var d in c)Object.defineProperty(r,d,{enumerable:!0,get:c[d]})}e(n,{PathParamsContext:function(){return a},PathnameContext:function(){return l},SearchParamsContext:function(){return t}});const o=h,t=(0,o.createContext)(null),l=(0,o.createContext)(null),a=(0,o.createContext)(null)})(Z);var B={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getSegmentValue",{enumerable:!0,get:function(){return o}});function o(t){return Array.isArray(t)?t[1]:t}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(B,B.exports);var me=B.exports,q={exports:{}},k={exports:{}},x={exports:{}},H={exports:{}},F={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"createAsyncLocalStorage",{enumerable:!0,get:function(){return a}});const o=new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class t{disable(){throw o}getStore(){}run(){throw o}exit(){throw o}enterWith(){throw o}}const l=globalThis.AsyncLocalStorage;function a(){return l?new l:new t}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(F,F.exports);var W=F.exports;(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"requestAsyncStorage",{enumerable:!0,get:function(){return t}});const t=(0,W.createAsyncLocalStorage)();(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(H,H.exports);var be=H.exports;(function(n,e){"TURBOPACK { transition: next-shared }";Object.defineProperty(e,"__esModule",{value:!0});function o(a,r){for(var c in r)Object.defineProperty(a,c,{enumerable:!0,get:r[c]})}o(e,{getExpectedRequestStore:function(){return l},requestAsyncStorage:function(){return t.requestAsyncStorage}});const t=be;function l(a){const r=t.requestAsyncStorage.getStore();if(r)return r;throw new Error("`"+a+"` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context")}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(x,x.exports);var ve=x.exports,G={exports:{}},U={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"actionAsyncStorage",{enumerable:!0,get:function(){return t}});const t=(0,W.createAsyncLocalStorage)();(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(U,U.exports);var Se=U.exports;(function(n,e){"TURBOPACK { transition: next-shared }";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"actionAsyncStorage",{enumerable:!0,get:function(){return o.actionAsyncStorage}});const o=Se;(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(G,G.exports);var pe=G.exports,D={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RedirectStatusCode",{enumerable:!0,get:function(){return o}});var o;(function(t){t[t.SeeOther=303]="SeeOther",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect"})(o||(o={})),(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(D,D.exports);var he=D.exports;(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});function o(i,_){for(var u in _)Object.defineProperty(i,u,{enumerable:!0,get:_[u]})}o(e,{RedirectType:function(){return c},getRedirectError:function(){return d},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return O},getURLFromRedirectError:function(){return j},isRedirectError:function(){return S},permanentRedirect:function(){return R},redirect:function(){return v}});const t=ve,l=pe,a=he,r="NEXT_REDIRECT";var c;(function(i){i.push="push",i.replace="replace"})(c||(c={}));function d(i,_,u){u===void 0&&(u=a.RedirectStatusCode.TemporaryRedirect);const f=new Error(r);f.digest=r+";"+_+";"+i+";"+u+";";const g=t.requestAsyncStorage.getStore();return g&&(f.mutableCookies=g.mutableCookies),f}function v(i,_){_===void 0&&(_="replace");const u=l.actionAsyncStorage.getStore();throw d(i,_,u!=null&&u.isAction?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function R(i,_){_===void 0&&(_="replace");const u=l.actionAsyncStorage.getStore();throw d(i,_,u!=null&&u.isAction?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function S(i){if(typeof i!="object"||i===null||!("digest"in i)||typeof i.digest!="string")return!1;const[_,u,f,g]=i.digest.split(";",4),s=Number(g);return _===r&&(u==="replace"||u==="push")&&typeof f=="string"&&!isNaN(s)&&s in a.RedirectStatusCode}function j(i){return S(i)?i.digest.split(";",3)[2]:null}function O(i){if(!S(i))throw new Error("Not a redirect error");return i.digest.split(";",2)[1]}function m(i){if(!S(i))throw new Error("Not a redirect error");return Number(i.digest.split(";",4)[3])}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(k,k.exports);var je=k.exports,V={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});function o(r,c){for(var d in c)Object.defineProperty(r,d,{enumerable:!0,get:c[d]})}o(e,{isNotFoundError:function(){return a},notFound:function(){return l}});const t="NEXT_NOT_FOUND";function l(){const r=new Error(t);throw r.digest=t,r}function a(r){return typeof r!="object"||r===null||!("digest"in r)?!1:r.digest===t}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(V,V.exports);var Re=V.exports;(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});function o(c,d){for(var v in d)Object.defineProperty(c,v,{enumerable:!0,get:d[v]})}o(e,{ReadonlyURLSearchParams:function(){return r},RedirectType:function(){return t.RedirectType},notFound:function(){return l.notFound},permanentRedirect:function(){return t.permanentRedirect},redirect:function(){return t.redirect}});const t=je,l=Re;class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class r extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(q,q.exports);var Pe=q.exports,K={};(function(n){"use client";Object.defineProperty(n,"__esModule",{value:!0});function e(r,c){for(var d in c)Object.defineProperty(r,d,{enumerable:!0,get:c[d]})}e(n,{ServerInsertedHTMLContext:function(){return l},useServerInsertedHTML:function(){return a}});const t=ee._(h),l=t.default.createContext(null);function a(r){const c=(0,t.useContext)(l);c&&c(r)}})(K);var C={exports:{}},N={},$;function Oe(){return $||($=1,function(n){Object.defineProperty(n,"__esModule",{value:!0});function e(a,r){for(var c in r)Object.defineProperty(a,c,{enumerable:!0,get:r[c]})}e(n,{BailoutToCSRError:function(){return t},isBailoutToCSRError:function(){return l}});const o="BAILOUT_TO_CLIENT_SIDE_RENDERING";class t extends Error{constructor(r){super("Bail out to client-side rendering: "+r),this.reason=r,this.digest=o}}function l(a){return typeof a!="object"||a===null||!("digest"in a)?!1:a.digest===o}}(N)),N}var E={exports:{}},w={exports:{}},X;function Me(){return X||(X=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"staticGenerationAsyncStorage",{enumerable:!0,get:function(){return t}});const t=(0,W.createAsyncLocalStorage)();(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)}(w,w.exports)),w.exports}var Y;function Ce(){return Y||(Y=1,function(n,e){"TURBOPACK { transition: next-shared }";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"staticGenerationAsyncStorage",{enumerable:!0,get:function(){return o.staticGenerationAsyncStorage}});const o=Me();(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)}(E,E.exports)),E.exports}var J;function Ee(){return J||(J=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"bailoutToClientRendering",{enumerable:!0,get:function(){return l}});const o=Oe(),t=Ce();function l(a){const r=t.staticGenerationAsyncStorage.getStore();if(!(r!=null&&r.forceStatic)&&r!=null&&r.isStaticGeneration)throw new o.BailoutToCSRError(a)}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)}(C,C.exports)),C.exports}(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});function o(u,f){for(var g in f)Object.defineProperty(u,g,{enumerable:!0,get:f[g]})}o(e,{ReadonlyURLSearchParams:function(){return d.ReadonlyURLSearchParams},RedirectType:function(){return d.RedirectType},ServerInsertedHTMLContext:function(){return v.ServerInsertedHTMLContext},notFound:function(){return d.notFound},permanentRedirect:function(){return d.permanentRedirect},redirect:function(){return d.redirect},useParams:function(){return O},usePathname:function(){return S},useRouter:function(){return j},useSearchParams:function(){return R},useSelectedLayoutSegment:function(){return _},useSelectedLayoutSegments:function(){return i},useServerInsertedHTML:function(){return v.useServerInsertedHTML}});const t=h,l=te,a=Z,r=me,c=ne,d=Pe,v=K;function R(){const u=(0,t.useContext)(a.SearchParamsContext),f=(0,t.useMemo)(()=>u?new d.ReadonlyURLSearchParams(u):null,[u]);if(typeof window>"u"){const{bailoutToClientRendering:g}=Ee();g("useSearchParams()")}return f}function S(){return(0,t.useContext)(a.PathnameContext)}function j(){const u=(0,t.useContext)(l.AppRouterContext);if(u===null)throw new Error("invariant expected app router to be mounted");return u}function O(){return(0,t.useContext)(a.PathParamsContext)}function m(u,f,g,s){g===void 0&&(g=!0),s===void 0&&(s=[]);let y;if(g)y=u[1][f];else{const z=u[1];var M;y=(M=z.children)!=null?M:Object.values(z)[0]}if(!y)return s;const L=y[0],P=(0,r.getSegmentValue)(L);return!P||P.startsWith(c.PAGE_SEGMENT_KEY)?s:(s.push(P),m(y,f,!1,s))}function i(u){u===void 0&&(u="children");const f=(0,t.useContext)(l.LayoutRouterContext);return f?m(f.tree,u):null}function _(u){u===void 0&&(u="children");const f=i(u);if(!f||f.length===0)return null;const g=u==="children"?f[0]:f[f.length-1];return g===c.DEFAULT_SEGMENT_KEY?null:g}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)})(I,I.exports);var we=I.exports,Le=we;function Q(n){const{menus:e,homeLabel:o,image:t,type:l}=n,[a,r]=h.useState(!0),[c,d]=h.useState(!1),[v,R]=h.useState(0),[S,j]=h.useState(-1),O=Le.usePathname(),m=n.pathName?n.pathName:O,i=f(n.color),_="rgba("+i.red+", "+i.green+", "+i.blue+", "+i.alpha+")";h.useEffect(()=>{const s=()=>{window.innerWidth<ae(720)?r(!0):r(!1),d(!1)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),h.useEffect(()=>{R(g(m))},[m]);function u(){return e.map((s,y)=>p.jsx(A,{className:T(l&&l==="right"?b.LinkButton2:void 0,m.startsWith(s.href)?b.ClickedButton:b.NormalButton),style:{background:m.startsWith(s.href)?S===y&&v===y?_:n.color:""},onMouseEnter:()=>j(y),onMouseLeave:()=>j(-1),onClick:()=>{R(y),d(!1)},href:s.href,children:s.label},`menu_${y}`))}function f(s){if(s===void 0||s==="")return{red:0,green:128,blue:128,alpha:.8};{if(!s.startsWith("#")){const P=oe(s);P!==void 0&&(s=P)}const y=parseInt(s.slice(1,3),16),M=parseInt(s.slice(3,5),16),L=parseInt(s.slice(5,7),16);return{red:y,green:M,blue:L,alpha:.8}}}function g(s){for(let y=0;y<e.length;y++)if(s.startsWith(e[y].href))return y;return 0}return p.jsxs("header",{className:b.HeaderPanel,children:[p.jsxs("nav",{className:b.RowItem,children:[o&&p.jsx(A,{href:"/Home",className:T(m.startsWith("/Home")?b.ClickedButton:b.NormalButton),style:{background:m.startsWith("/Home")?S===0&&v===0?_:n.color:""},onMouseEnter:()=>j(0),onMouseLeave:()=>j(-1),onClick:()=>{R(0)},children:o}),t&&p.jsx(A,{href:"/Home",className:b.ImageButton,children:p.jsx("img",{src:t,alt:"Home Logo"})}),(!a||c)&&p.jsx("div",{className:T(b.navbar,l&&l==="right"?b.navbar2:void 0),children:u()})]}),a?p.jsx("button",{className:b.MenuButton,onClick:()=>d(!c),children:p.jsx(re,{name:"menu",size:20,color:"white"})}):null]})}try{Q.displayName="DefaultMenu",Q.__docgenInfo={description:"",displayName:"DefaultMenu",props:{menus:{defaultValue:null,description:"",name:"menus",required:!0,type:{name:"DefaultMenuOption[]"}},pathName:{defaultValue:null,description:"",name:"pathName",required:!1,type:{name:"string"}},homeLabel:{defaultValue:null,description:"",name:"homeLabel",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}export{Q as D};