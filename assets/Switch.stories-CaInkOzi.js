import{a as o,D as m,j as t,T as n}from"./DefaultThemeProvider-DbvuuPiG.js";import{S as p}from"./Switch-CXxVHucP.js";import{r as c}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Anchor-Dh8oERsW.js";import"./CheckboxUtil-CqPWmFQ9.js";function g(e){const[d,r]=c.useState(e.checked?e.checked:!1);return c.useEffect(()=>{e.checked&&r(e.checked)},[e.checked]),t("div",{style:{padding:"10px"},children:[t(n,{component:"h4",className:"title-space",children:["Switch demo",o(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),o("div",{className:"demo-panel",children:o(p,{...e,checked:d,onChange:h=>{r(h.currentTarget.checked)}})})]})}const x={component:g,decorators:[e=>o(m,{children:o(e,{})})],argTypes:{onChange:{action:"changed"},size:{options:["normal","small"],control:{type:"radio"}},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},checked:{options:[!0,!1,void 0],control:{type:"radio"}},anchor:{options:["north","east","west","south"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},alwaysHighlight:{control:{type:"boolean"}}}},a={args:{size:"normal",title:"Title",color:"primary",checked:void 0,anchor:"north",alwaysHighlight:!1}};var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    title: 'Title',
    color: 'primary',
    checked: undefined,
    anchor: 'north',
    alwaysHighlight: false
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["Demo"];export{a as Demo,C as __namedExportsOrder,x as default};
