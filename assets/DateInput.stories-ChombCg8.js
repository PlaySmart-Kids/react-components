import{j as e,D as c,a as o}from"./DefaultThemeProvider-BRxWeqUn.js";import{F as h,D as r}from"./DateInput-Db52jTb7.js";import{T as i}from"./ProfileLink-D-xyNnIs.js";import{r as y}from"./index-BwDkhjyp.js";import"./InputUtil-BlrBRMKB.js";import"./index-DOJJSfO9.js";import"./Button-BUJJgbwE.js";import"./ColorUtil-BMWlsUCS.js";import"./useResizeObserver-BXh6FCPJ.js";import"./useRipple-BRaxIdCd.js";import"./IconButton-CNCH4a3g.js";import"./RadioButton-5xi1FwvH.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-CMwO_hgE.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ActionBar-BCreBf28.js";function u(a){const[m,d]=y.useState(a.value?a.value:"2024-01-01");return o("div",{style:{height:"100vh",padding:"24px"},children:[o(i,{component:"h4",className:"title-space",children:["Demo",e(i,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("br",{}),e(r,{...a,onChange:p=>{d(p)},value:m,style:{minWidth:a.size==="wrap"?void 0:"200px"}}),e("br",{}),e(r,{...a,style:{minWidth:a.size==="wrap"?void 0:"200px"}}),e("div",{className:"fix-panel fix-bottom fix-right",children:e(r,{...a,style:{minWidth:a.size==="wrap"?void 0:"200px"}})})]})}const E={component:u,decorators:[a=>e(c,{children:e(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small","wrap"],control:{type:"radio"}}}},t={args:{color:"primary",size:"normal",hue:"main",label:"Date",displayDateFormat:"MM/dd/yyyy",value:h(new Date),hint:"",fullWidth:!1,disabled:!1,alwaysHighlight:!1,allowTyping:!1}};var n,l,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const H=["Demo"];export{t as Demo,H as __namedExportsOrder,E as default};
