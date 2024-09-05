import{a as o,D as c,j as a,T as n,d,M as p}from"./DefaultThemeProvider-DbvuuPiG.js";import{B as t}from"./Button-Bqv8ahTI.js";import{r as m}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-CLSESEbx.js";function f(e){return m.useRef(),a("div",{style:{padding:"24px"},children:[a(n,{component:"h4",className:"title-space",children:["Button Demo",o(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),a("div",{className:"demo-panel",children:[o(t,{...e,children:e.children}),a(t,{...e,children:[o(d,{name:"save",size:20}),e.children]}),a(t,{...e,children:[e.children,o(p,{name:"home",shape:"sharp",size:20})]})]})]})}const D={component:f,decorators:[e=>o(c,{children:o(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},r={args:{variant:"filled",color:"primary",hue:"main",size:"normal",children:"Button",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var l,i,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'primary',
    hue: 'main',
    size: 'normal',
    children: 'Button',
    fullWidth: false,
    shadowSize: 4,
    compact: false,
    disabled: false,
    noRippleEffect: false
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const w=["Demo"];export{r as Demo,w as __namedExportsOrder,D as default};
