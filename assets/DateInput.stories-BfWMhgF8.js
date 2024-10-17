import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{F as m,D as o}from"./DateInput-Dtn0PVrU.js";import{D as d,T as t}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import"./InputUtil-BONj-j-a.js";import"./index-DJbli8uv.js";import"./Button-Cm1yCUKV.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./useRipple-BbkXZzvg.js";import"./IconButton-6cAcpLD7.js";import"./RadioButton-BgQOW4iM.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-CCPNF3gP.js";import"./index-Cp9I2zMD.js";import"./ActionBar-BH2Q10LK.js";import"./index-CikfRwdJ.js";function p(a){return e.jsxs("div",{style:{height:"100vh",padding:"24px",display:"block"},children:[e.jsxs(t,{component:"h4",className:"title-space",children:["Demo",e.jsx(t,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flex-vertical full-width sb-unstyled",children:[e.jsx("h5",{children:"Controlled"}),e.jsx(o,{...a,onChange:n=>{console.log(n)},value:a.value,style:{minWidth:a.size==="wrap"?void 0:"200px"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Uncontrolled"}),e.jsx(o,{...a,value:void 0,defaultValue:a.value,style:{minWidth:a.size==="wrap"?void 0:"200px"}}),e.jsx("br",{}),e.jsx("br",{})]})]})}const S={title:"CLIENTS/ui/input/DateInput",component:p,decorators:[a=>e.jsx(d,{children:e.jsx(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small","wrap"],control:{type:"radio"}}}},r={args:{color:"primary",size:"normal",hue:"main",label:"Date",displayDateFormat:"MM/dd/yyyy",value:m(new Date),hint:"",fullWidth:!1,disabled:!1,alwaysHighlight:!1,allowTyping:!1}};var i,l,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    label: 'Date',
    displayDateFormat: 'MM/dd/yyyy',
    value: FormatISODate(new Date()),
    hint: '',
    fullWidth: false,
    disabled: false,
    alwaysHighlight: false,
    allowTyping: false
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const W=["Demo"];export{r as Demo,W as __namedExportsOrder,S as default};
