import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as t}from"./Button-Cm1yCUKV.js";import{D as i,T as r,c,M as d}from"./DefaultThemeProvider-Ce-zb_Sa.js";import{r as m}from"./index-DJO9vBfz.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./index-CikfRwdJ.js";function p(o){return m.useRef(),e.jsxs("div",{style:{padding:"24px"},children:[e.jsxs(r,{component:"h4",className:"title-space",children:["Button Demo",e.jsx(r,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e.jsxs("div",{className:"demo-panel",children:[e.jsx(t,{...o,children:o.children}),e.jsxs(t,{...o,children:[e.jsx(c,{name:"save",size:20}),o.children]}),e.jsxs(t,{...o,children:[o.children,e.jsx(d,{name:"home",shape:"sharp",size:20})]})]})]})}const z={component:p,title:"CLIENTS/ui/button/Button",decorators:[o=>e.jsx(i,{children:e.jsx(o,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},a={args:{variant:"filled",color:"primary",hue:"main",size:"normal",children:"Button",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var n,l,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const E=["Demo"];export{a as Demo,E as __namedExportsOrder,z as default};
