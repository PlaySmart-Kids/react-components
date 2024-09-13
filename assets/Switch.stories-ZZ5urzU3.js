import{a as o,j as t,T as n}from"./Divider-DdokZ4G_.js";import{S as m}from"./Switch-BSYtxEl3.js";import{r as c}from"./index-BwDkhjyp.js";import{D as p}from"./DefaultThemeProvider-DWbcdqGt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Anchor-Dh8oERsW.js";import"./CheckboxUtil-CqPWmFQ9.js";function g(e){const[d,a]=c.useState(e.checked?e.checked:!1);return c.useEffect(()=>{e.checked&&a(e.checked)},[e.checked]),t("div",{style:{padding:"10px"},children:[t(n,{component:"h4",className:"title-space",children:["Switch Demo",o(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),o("div",{className:"demo-panel",children:o(m,{...e,checked:d,onChange:h=>{a(h.currentTarget.checked)}})})]})}const D={component:g,decorators:[e=>o(p,{children:o(e,{})})],argTypes:{onChange:{action:"changed"},size:{options:["normal","small"],control:{type:"radio"}},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},checked:{options:[!0,!1,void 0],control:{type:"radio"}},anchor:{options:["north","east","west","south"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},alwaysHighlight:{control:{type:"boolean"}}}},r={args:{size:"normal",title:"Title",color:"primary",checked:void 0,anchor:"north",alwaysHighlight:!1}};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    title: 'Title',
    color: 'primary',
    checked: undefined,
    anchor: 'north',
    alwaysHighlight: false
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["Demo"];export{r as Demo,C as __namedExportsOrder,D as default};
