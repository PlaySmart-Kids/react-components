import{j as o,D as c,a}from"./DefaultThemeProvider-DIgWkiEK.js";import{B as t}from"./Button-Ca8Pa7cJ.js";import{T as n,c as d,M as m}from"./ProfileLink-BbZ_QnTw.js";import{r as p}from"./index-BwDkhjyp.js";import"./ColorUtil-qZH_9PUB.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-DO5qTcIm.js";import"./_commonjsHelpers-BosuxZz1.js";function f(e){return p.useRef(),a("div",{style:{padding:"24px"},children:[a(n,{component:"h4",className:"title-space",children:["Button demo",o(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),a("div",{className:"demo-panel",children:[o(t,{...e,children:e.children}),a(t,{...e,children:[o(d,{name:"save",size:20}),e.children]}),a(t,{...e,children:[e.children,o(m,{name:"home",shape:"sharp",size:20})]})]})]})}const w={component:f,decorators:[e=>o(c,{children:o(e,{})})],argTypes:{onClick:{action:"clicked"},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},r={args:{variant:"filled",color:"primary",hue:"main",size:"normal",children:"Button",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var l,i,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const B=["Demo"];export{r as Demo,B as __namedExportsOrder,w as default};
