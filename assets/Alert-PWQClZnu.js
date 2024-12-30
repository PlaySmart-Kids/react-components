import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";import{f as N,g as V,p as A,Z as z,k as I,G as _,a as s,h as p,q as L,s as R,Q as w,m as k,M as q,aa as M}from"./DefaultThemeProvider-DB5yquFP.js";import{B}from"./Button-HS4qhxue.js";import"./IconButton-BrX7Rpys.js";import"./RadioButton-Df7xQ-kQ.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";var v=(e=>(e.OUTLINED="outlined",e.FILLED="filled",e.TWO_TONES="two_tones",e))(v||{});function D(e){return e===void 0?"filled":e}const O="_Root_6isq6_1",$="_Hide_6isq6_18",F="_IconSection_6isq6_22",W="_MessageSection_6isq6_27",U="_ActionSection_6isq6_32",u={Root:O,Hide:$,IconSection:F,MessageSection:W,ActionSection:U};function C(e){const{message:E,title:H,timeout:i,closeLabel:r,onClosed:d,noIcon:j,icon:m}=e,[x,h]=c.useState(!0),S=c.useRef(null),l=[u.Root],G=["subtitle1"],b=["body2"],t=N(e.color),o=V(e.hue),g=D(e.variant),y=A(e.shadowSize);let n;y>0&&l.push(z(y,t)),g===v.FILLED?(l.push(I(t,o)),l.push(_(t,o)),o===s.MAIN?(n="var(--common-white)",l.push(p(t,s.WHITE))):(n=`var(--${t}-${L(o)})`,l.push(p(t,L(o))))):g===v.OUTLINED?(n=R(t,o),l.push(_(t,o)),l.push(w()),l.push(p(t,o))):(l.push(_(t,o)),l.push(p(t,o)),n=`var(--${t}-${o})`,o===s.LIGHTEST||o===s.LIGHTER||o===s.LIGHT?l.push(k(t,s.LIGHTEST)):l.push(I(t,s.LIGHTEST)));const f=c.useCallback(()=>{if(S.current!==null){const T=S.current;T.classList.toggle(u.Hide),setTimeout(()=>{T.classList.toggle(u.Hide),d&&d(),h(!1)},300)}else d&&d(),h(!1)},[]);return c.useEffect(()=>{h(!0)},[E,H]),c.useEffect(()=>{i&&i>0&&setTimeout(()=>{f()},i)},[f,i]),x?a.jsxs("div",{className:l.join(" "),ref:S,children:[!j&&a.jsx("div",{className:u.IconSection,children:m?typeof m=="string"?a.jsx(q,{name:m,size:24,color:t}):m:a.jsx(M,{iconSize:24,color:t,iconColor:n})}),a.jsxs("div",{className:u.MessageSection,children:[e.title&&e.title!==""&&a.jsx("p",{className:G.join(" "),children:e.title}),a.jsx("p",{className:b.join(" "),children:e.message})]}),i!==void 0&&i>=0||r!==""&&r!==void 0&&a.jsxs("div",{className:u.ActionSection,children:[r&&a.jsx(B,{size:"small",color:t,hue:g===v.FILLED?s.WHITE:s.DARK,variant:"outlined",onClick:f,children:r}),!r&&a.jsx(q,{name:"cancel",onClick:f,color:n,size:20})]})]}):null}try{C.displayName="Alert",C.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},shadowSize:{defaultValue:null,description:"",name:"shadowSize",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"}]}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!1,type:{name:"number"}},closeLabel:{defaultValue:null,description:"",name:"closeLabel",required:!1,type:{name:"string"}},onClosed:{defaultValue:null,description:"",name:"onClosed",required:!1,type:{name:"(() => void)"}},noIcon:{defaultValue:null,description:"",name:"noIcon",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}export{C as A};
