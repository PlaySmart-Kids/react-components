import{j as e,D as c,a as o,T as i}from"./DefaultThemeProvider-3jRHqMMg.js";import{F as h,D as r}from"./DateInput-B2MfQc20.js";import{r as y}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputUtil-CptuWz0N.js";import"./index-DOJJSfO9.js";import"./Button-Bmxau5DP.js";import"./ColorUtil-CTP1cW_j.js";import"./useResizeObserver-BXh6FCPJ.js";import"./useRipple-DLxJhTTa.js";import"./IconButton-BO-tLsoF.js";import"./RadioButton-CYGO6mve.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-CzVk3fXG.js";import"./index-B8XB3FuZ.js";import"./ActionBar-BYC-azPa.js";function u(a){const[m,d]=y.useState(a.value?a.value:"2024-01-01");return o("div",{style:{height:"100vh",padding:"24px"},children:[o(i,{component:"h4",className:"title-space",children:["Demo",e(i,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("br",{}),e(r,{...a,onChange:p=>{d(p)},value:m,style:{minWidth:a.size==="wrap"?void 0:"200px"}}),e("br",{}),e(r,{...a,style:{minWidth:a.size==="wrap"?void 0:"200px"}}),e("div",{className:"fix-panel fix-bottom fix-right",children:e(r,{...a,style:{minWidth:a.size==="wrap"?void 0:"200px"}})})]})}const k={component:u,decorators:[a=>e(c,{children:e(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small","wrap"],control:{type:"radio"}}}},t={args:{color:"primary",size:"normal",hue:"main",label:"Date",displayDateFormat:"MM/dd/yyyy",value:h(new Date),hint:"",fullWidth:!1,disabled:!1,alwaysHighlight:!1,allowTyping:!1}};var n,l,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const E=["Demo"];export{t as Demo,E as __namedExportsOrder,k as default};
