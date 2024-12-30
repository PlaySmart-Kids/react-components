import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as u}from"./DefaultThemeProvider-DB5yquFP.js";import{r as n}from"./index-DJO9vBfz.js";import{G as g}from"./GoogleSignInButton-kzQJV7M3.js";import"./index-CikfRwdJ.js";import"./SignInButton-CzdAjFiw.js";function h(r){const[t,d]=n.useState(),[l,c]=n.useState();return e.jsxs("div",{style:{padding:"24px"},children:[e.jsx(g,{clientId:"11141084637-8mtk9cd1khul74fgvduphr2ie7utia2i.apps.googleusercontent.com",...r,onChangeIdToken:(p,m)=>{c(p),d(m)}}),e.jsx("br",{}),e.jsx("br",{}),t&&e.jsxs(e.Fragment,{children:["Creditial: ",l,e.jsx("br",{})]}),t&&e.jsxs(e.Fragment,{children:["Email: ",t.email]})]})}const k={component:h,decorators:[r=>e.jsx(u,{children:e.jsx(r,{})})],argTypes:{theme:{options:["outline","filled"],control:{type:"radio"}},color:{options:["gray","blue","black"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"radio"}},type:{options:["standard","icon"],control:{type:"radio"}},shape:{options:["rectangle","circle","rounded"],control:{type:"radio"}}}},o={args:{width:300,theme:"filled",color:"blue",size:"large",type:"standard",shape:"rounded"}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: 300,
    theme: 'filled',
    color: 'blue',
    size: 'large',
    type: 'standard',
    shape: 'rounded'
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const E=["Demo"];export{o as Demo,E as __namedExportsOrder,k as default};
