import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{D as c}from"./DefaultThemeProvider-DB5yquFP.js";import{T as d}from"./TopbarLayout-DAyzHkYU.js";import{r as s}from"./index-DJO9vBfz.js";import"./index-CikfRwdJ.js";import"./DomUtil-DAqrhrKT.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./index-Cp9I2zMD.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";function p(o){const[t,e]=s.useState(o.menuId);return s.useEffect(()=>{e(o.menuId)},[o.menuId]),r.jsx(d,{appName:"EZbiz App",appLogo:"./svg/psk_logo.svg",menuId:t,menus:[{label:"Dashboard",icon:"dashboard",id:"/dashboard",onClick:()=>{e("/dashboard")}},{label:"Datasource",icon:"database",id:"/database",onClick:()=>{e("/database")}},{label:"Schema",icon:"schema",id:"/schema",onClick:()=>{e("/schema")}},{label:"Search",icon:"search",id:"/search",onClick:()=>{e("/search")}},{label:"CMS",icon:"favorite",id:"/cms",onClick:()=>{e("/cms")}}],smallScreenSize:720,children:r.jsxs("div",{style:{height:"200px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:["Content for ",t]})})}const w={component:p,decorators:[o=>r.jsx(c,{children:r.jsx(o,{})})],argTypes:{menuId:{control:{type:"select"},options:["/dashboard","/database","/schema","/search","/cms"]}}},a={args:{menuId:"/dashboard"}};var m,i,n;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    menuId: '/dashboard'
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const A=["Demo"];export{a as Demo,A as __namedExportsOrder,w as default};