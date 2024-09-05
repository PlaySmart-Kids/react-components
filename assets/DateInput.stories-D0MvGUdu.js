import{a,D as d,j as o,T as t}from"./DefaultThemeProvider-DbvuuPiG.js";import{F as c,D as h}from"./DateInput-CGkz6UV5.js";import{r as y}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputUtil-CjrSpb8e.js";import"./index-DOJJSfO9.js";import"./Button-Bqv8ahTI.js";import"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import"./useRipple-CLSESEbx.js";import"./IconButton-BwGYpPpx.js";import"./RadioButton-CvYUyq31.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-CEMVheh8.js";import"./index-B8XB3FuZ.js";import"./ActionBar-CP_E9YHA.js";function u(e){const[s,m]=y.useState(e.value?e.value:"2024-01-01");return o("div",{style:{height:"100vh",padding:"24px",display:"block"},children:[o(t,{component:"h4",className:"title-space",children:["Demo",a(t,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),a("br",{}),a("br",{}),a("div",{className:"flex-horizontal full-width",children:a(h,{...e,onChange:p=>{m(p)},value:s,style:{minWidth:e.size==="wrap"?void 0:"200px"}})})]})}const W={component:u,decorators:[e=>a(d,{children:a(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small","wrap"],control:{type:"radio"}}}},r={args:{color:"primary",size:"normal",hue:"main",label:"Date",displayDateFormat:"MM/dd/yyyy",value:c(new Date),hint:"",fullWidth:!1,disabled:!1,alwaysHighlight:!1,allowTyping:!1}};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const E=["Demo"];export{r as Demo,E as __namedExportsOrder,W as default};
