import{j as e,D as l,a}from"./DefaultThemeProvider-DIgWkiEK.js";import{T as t,L as d}from"./ProfileLink-BbZ_QnTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";function c(r){return a("div",{style:{padding:"24px"},children:[a(t,{component:"h4",className:"title-space",children:["Label demo",e(t,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("div",{className:"demo-panel",children:e(d,{...r})})]})}const g={component:c,decorators:[r=>e(l,{children:e(r,{})})],argTypes:{title:{control:{type:"text"}},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},o={args:{title:"Label",variant:"filled",color:"primary",hue:"main",disabled:void 0}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Label',
    variant: 'filled',
    color: 'primary',
    hue: 'main',
    disabled: undefined
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const f=["Demo"];export{o as Demo,f as __namedExportsOrder,g as default};
