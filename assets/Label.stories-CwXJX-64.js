import{j as e,D as f,a as d}from"./DefaultThemeProvider-B0MfXXxB.js";import{C as r,B as t,a as b,T as n,L as c}from"./ProfileLink-DICP74ZS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";function v(a){const h=[r.PRIMARY,r.INFO,r.WARNING,r.ERROR,r.SECONDARY],y=[t.FILLED,t.OUTLINED,t.TEXT],g=[b.MAIN];return d("div",{style:{padding:"24px"},children:[d(n,{component:"h4",className:"title-space",children:["Label demo",e(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("div",{className:"demo-panel",children:e(c,{...a})}),e(n,{component:"h4",children:" Variants "}),e("br",{}),e("div",{className:"story-grid-5-x child-margin-auto",children:y.map(i=>h.map(s=>g.map(l=>e(c,{...a,color:s,variant:i,hue:l},`${s}_${i}_${l}`))))})]})}const T={component:v,decorators:[a=>e(f,{children:e(a,{})})],argTypes:{title:{control:{type:"text"}},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["light","main","dark","darker"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},o={args:{title:"Label",variant:"filled",color:"primary",hue:"main",disabled:void 0}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Label',
    variant: 'filled',
    color: 'primary',
    hue: 'main',
    disabled: undefined
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const R=["Demo"];export{o as Demo,R as __namedExportsOrder,T as default};
