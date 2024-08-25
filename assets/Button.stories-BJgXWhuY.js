import{j as o,D as c,a}from"./DefaultThemeProvider-B0MfXXxB.js";import{B as r}from"./Button-67xmFC_M.js";import{T as t,c as d,M as m}from"./ProfileLink-DICP74ZS.js";import{r as p}from"./index-BwDkhjyp.js";import"./ColorUtil-lGoxO2Iu.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-BwNxic67.js";import"./_commonjsHelpers-BosuxZz1.js";function f(e){return p.useRef(),a("div",{style:{padding:"24px"},children:[a(t,{component:"h4",className:"title-space",children:["Button demo",o(t,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),a("div",{className:"demo-panel",children:[o(r,{...e,children:e.children}),a(r,{...e,children:[o(d,{name:"save"}),e.children]}),a(r,{...e,children:[e.children,o(m,{name:"home"})]})]})]})}const B={component:f,decorators:[e=>o(c,{children:o(e,{})})],argTypes:{onClick:{action:"clicked"},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["light","main","dark","darker"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:8,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},n={args:{variant:"filled",color:"primary",children:"Button",size:"normal",fullWidth:!1,shadowSize:8,compact:!1,hue:"main",disabled:!1,noRippleEffect:!1}};var l,i,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'primary',
    children: 'Button',
    size: 'normal',
    fullWidth: false,
    shadowSize: 8,
    compact: false,
    hue: 'main',
    disabled: false,
    noRippleEffect: false
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const D=["Demo"];export{n as Demo,D as __namedExportsOrder,B as default};
