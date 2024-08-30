import{j as e,D as c,a as o,T as r}from"./DefaultThemeProvider-D8uc623f.js";import{T as p}from"./TagInput-BA0NpfUU.js";import{r as m}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputUtil-DB9qJFib.js";function h(l){const[i,d]=m.useState([]);return o("div",{style:{padding:"24px"},children:[o(r,{component:"h4",className:"title-space",children:["Demo",e(r,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("div",{className:"demo-panel",children:e(p,{...l,onChange:u=>{d(u)},values:i})})]})}const v={component:h,decorators:[l=>e(c,{children:e(l,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},label:{defaultValue:"label"},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small"],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},alwaysHighlight:{defaultValue:!0,control:{type:"boolean"}},shrinkLabel:{defaultValue:!0,control:{type:"boolean"}},hint:{defaultValue:"",control:{type:"text"}}}},a={args:{color:"primary",size:"normal",hue:"main",label:"Label",fullWidth:!1,disabled:!1,hint:void 0,values:["hello"],shrinkLabel:!0,alwaysHighlight:!1}};var t,n,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    label: 'Label',
    fullWidth: false,
    disabled: false,
    hint: undefined,
    values: ['hello'],
    shrinkLabel: true,
    alwaysHighlight: false
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const x=["Demo"];export{a as Demo,x as __namedExportsOrder,v as default};
