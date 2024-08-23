import{j as o,D as m,a as t}from"./DefaultThemeProvider-ZzgTeurK.js";import{S as p}from"./Switch-B1n1Zc7F.js";import{r as n}from"./index-BwDkhjyp.js";import{T as c}from"./Badge-DwPYLl2q.js";import"./Anchor-Dh8oERsW.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./_commonjsHelpers-BosuxZz1.js";function g(e){const[d,a]=n.useState(e.checked?e.checked:!1);return n.useEffect(()=>{e.checked&&a(e.checked)},[e.checked]),t("div",{style:{padding:"10px"},children:[t(c,{component:"h4",className:"title-space",children:["Switch demo",o(c,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),o("div",{className:"demo-panel",children:o(p,{...e,checked:d,onChange:h=>{a(h.currentTarget.checked)}})})]})}const C={component:g,decorators:[e=>o(m,{href:"./_default.css",children:o(e,{})})],argTypes:{onChange:{action:"changed"},size:{options:["normal","small"],control:{type:"radio"}},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},checked:{options:[!0,!1,void 0],control:{type:"radio"}},anchor:{options:["north","east","west","south"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},alwaysHighlight:{control:{type:"boolean"}}}},r={args:{size:"normal",title:"Title",color:"primary",checked:void 0,anchor:"north",alwaysHighlight:!1}};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    title: 'Title',
    color: 'primary',
    checked: undefined,
    anchor: 'north',
    alwaysHighlight: false
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const D=["Demo"];export{r as Demo,D as __namedExportsOrder,C as default};
