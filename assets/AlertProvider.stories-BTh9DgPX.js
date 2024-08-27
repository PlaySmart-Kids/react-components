import{j as t,D as n}from"./DefaultThemeProvider-BRxWeqUn.js";import{r as s}from"./index-BwDkhjyp.js";import{A as m,a as c}from"./AlertProvider-DlQk-4If.js";import{B as d}from"./Button-BUJJgbwE.js";import"./IconButton-CNCH4a3g.js";import"./RadioButton-5xi1FwvH.js";import"./AlertButton-CMwO_hgE.js";import"./ActionBar-BCreBf28.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ProfileLink-D-xyNnIs.js";import"./ColorUtil-BMWlsUCS.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-BRaxIdCd.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./index-B8XB3FuZ.js";let p=1;function u(e){const l=s.useContext(c);return t("div",{className:"center-panel full-height",children:t(d,{color:e.color,className:"flex-center",style:{zIndex:1e5},onClick:()=>{l.addAlert({title:e.title?`${e.title} (${p++})`:void 0,message:e.message,color:e.color,variant:e.variant,timeout:e.timeout,closeLabel:e.closeLabel})},children:"Add Alert"})})}const B={component:u,decorators:[e=>t(n,{children:t(m,{children:t(e,{})})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},variant:{options:["filled","outlined","two_tones"],control:{type:"radio"}},title:{control:{type:"text"}},closeLabel:{control:{type:"text"}}}},o={args:{title:"Title",message:"Message",color:"primary",variant:"filled",timeout:0,closeLabel:"Done"}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    message: 'Message',
    color: 'primary',
    variant: 'filled',
    timeout: 0,
    closeLabel: 'Done'
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const E=["Demo"];export{o as Demo,E as __namedExportsOrder,B as default};
