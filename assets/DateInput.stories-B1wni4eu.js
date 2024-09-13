import{a,j as o,T as t}from"./Divider-DdokZ4G_.js";import{F as d,D as c}from"./DateInput-CmGzaTWf.js";import{r as h}from"./index-BwDkhjyp.js";import{D as y}from"./DefaultThemeProvider-DWbcdqGt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputUtil-DkXrE-40.js";import"./index-DOJJSfO9.js";import"./Button-C-RRGble.js";import"./ColorUtil-DKEMF1mc.js";import"./useTimeout-CJ17nKGE.js";import"./useRipple-V2LljsIL.js";import"./IconButton-BNmK_rQm.js";import"./RadioButton-65ds4XkE.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-2B0HG_NZ.js";import"./index-B8XB3FuZ.js";import"./ActionBar-BLcuPqV8.js";function u(e){const[s,m]=h.useState(e.value?e.value:"2024-01-01");return o("div",{style:{height:"100vh",padding:"24px",display:"block"},children:[o(t,{component:"h4",className:"title-space",children:["Demo",a(t,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),a("br",{}),a("br",{}),a("div",{className:"flex-horizontal full-width",children:a(c,{...e,onChange:p=>{m(p)},value:s,style:{minWidth:e.size==="wrap"?void 0:"200px"}})})]})}const E={component:u,decorators:[e=>a(y,{children:a(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small","wrap"],control:{type:"radio"}}}},r={args:{color:"primary",size:"normal",hue:"main",label:"Date",displayDateFormat:"MM/dd/yyyy",value:d(new Date),hint:"",fullWidth:!1,disabled:!1,alwaysHighlight:!1,allowTyping:!1}};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const H=["Demo"];export{r as Demo,H as __namedExportsOrder,E as default};
