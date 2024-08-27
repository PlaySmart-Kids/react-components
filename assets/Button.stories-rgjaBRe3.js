import{j as o,D as c,a,T as n,d,M as p}from"./DefaultThemeProvider-CceS3XqJ.js";import{B as r}from"./Button-DWdng8ry.js";import{r as m}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-BhNK3fl1.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-IWfmJKz1.js";function f(e){return m.useRef(),a("div",{style:{padding:"24px"},children:[a(n,{component:"h4",className:"title-space",children:["Button demo",o(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),a("div",{className:"demo-panel",children:[o(r,{...e,children:e.children}),a(r,{...e,children:[o(d,{name:"save",size:20}),e.children]}),a(r,{...e,children:[e.children,o(p,{name:"home",shape:"sharp",size:20})]})]})]})}const k={component:f,decorators:[e=>o(c,{children:o(e,{})})],argTypes:{onClick:{action:"clicked"},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},t={args:{variant:"filled",color:"primary",hue:"main",size:"normal",children:"Button",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var l,i,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const w=["Demo"];export{t as Demo,w as __namedExportsOrder,k as default};
