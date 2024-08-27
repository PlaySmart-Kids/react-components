import{j as o,D as s,a as c}from"./DefaultThemeProvider-DIgWkiEK.js";import{B as d,C as m,T as t}from"./ProfileLink-BbZ_QnTw.js";import"./index-BwDkhjyp.js";import{A as p}from"./AlertButton-_3TgWXY4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Ca8Pa7cJ.js";import"./ColorUtil-qZH_9PUB.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-DO5qTcIm.js";import"./index-B8XB3FuZ.js";import"./ActionBar-CwKlden-.js";function f(e){return o("div",{style:{padding:"24px",display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:c(p,{buttonLabel:e.buttonLabel,color:e.color,hue:e.hue,variant:e.variant,shadowSize:e.shadowSize,compact:e.compact,fullWidth:e.fullWidth,size:e.size,disabled:e.disabled,spaceBetween:!1,dialogProps:{compact:e.compact},onAction:i=>{console.log(i)},leftActions:[{label:"Cancel",variant:d.OUTLINED,action:"action1"}],rightActions:[{label:"Done",color:m.PRIMARY,action:"action3"}],children:[o(t,{variant:"heading4",children:"Select action"}),o("br",{}),o(t,{variant:"body1",color:"secondary",children:"This is a test"}),o("br",{})]})})}const A={component:f,decorators:[e=>o(s,{children:o(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},a={args:{variant:"filled",color:"primary",hue:"main",buttonLabel:"Open",size:"normal",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var l,n,r;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'primary',
    hue: 'main',
    buttonLabel: 'Open',
    size: 'normal',
    fullWidth: false,
    shadowSize: 4,
    compact: false,
    disabled: false,
    noRippleEffect: false
  }
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const E=["Demo"];export{a as Demo,E as __namedExportsOrder,A as default};
