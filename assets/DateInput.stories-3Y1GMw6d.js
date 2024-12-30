import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{F as m,D as o}from"./DateInput-65P20iYT.js";import{D as p,T as t}from"./DefaultThemeProvider-DB5yquFP.js";import"./index-DJO9vBfz.js";import"./InputUtil-CfDwzwTJ.js";import"./index-DJbli8uv.js";import"./index-CikfRwdJ.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./index-Cp9I2zMD.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";function d(r){return e.jsxs("div",{style:{height:"100vh",padding:"24px",display:"block"},children:[e.jsxs(t,{component:"h4",className:"title-space",children:["Demo",e.jsx(t,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flex-vertical full-width sb-unstyled",children:[e.jsx("h5",{children:"Controlled"}),e.jsx(o,{...r,onChange:n=>{console.log(n)},value:r.value,style:{minWidth:r.size==="wrap"?void 0:"200px"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Uncontrolled"}),e.jsx(o,{...r,value:void 0,defaultValue:void 0}),e.jsx("br",{}),e.jsx("br",{})]})]})}const O={title:"CLIENTS/ui/input/DateInput",component:d,decorators:[r=>e.jsx(p,{children:e.jsx(r,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}}}},a={args:{color:"primary",size:"normal",hue:"main",title:"Date",displayDateFormat:"MM/dd/yyyy",value:m(new Date),hint:"",fullWidth:!1,disabled:!1,alwaysHighlight:!1,allowTyping:!1}};var i,s,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    title: 'Date',
    displayDateFormat: 'MM/dd/yyyy',
    value: FormatISODate(new Date()),
    hint: '',
    fullWidth: false,
    disabled: false,
    alwaysHighlight: false,
    allowTyping: false
  }
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const W=["Demo"];export{a as Demo,W as __namedExportsOrder,O as default};
