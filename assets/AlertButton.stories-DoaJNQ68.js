import{j as e,D as s,a as d}from"./DefaultThemeProvider-BRxWeqUn.js";import{B as m,C as t,T as l}from"./ProfileLink-CUAQyePv.js";import"./index-BwDkhjyp.js";import{A as p}from"./AlertButton-aJ37WT_Z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-D86MD7lw.js";import"./ColorUtil-CBNsOe9z.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-BRaxIdCd.js";import"./index-B8XB3FuZ.js";function f(o){return e("div",{style:{padding:"24px",display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:d(p,{buttonLabel:o.buttonLabel,color:o.color,hue:o.hue,variant:o.variant,shadowSize:o.shadowSize,compact:o.compact,fullWidth:o.fullWidth,size:o.size,disabled:o.disabled,dialogProps:{compact:o.compact},onAction:c=>{console.log(c)},leftActions:[{label:"action1",variant:m.OUTLINED,action:"action1"}],centerActions:[{label:"action2",color:t.INFO,action:"action2"}],rightActions:[{label:"action3",color:t.PRIMARY,action:"action3"}],children:[e(l,{variant:"heading4",children:"Select action"}),e("br",{}),e(l,{variant:"body1",color:"secondary",children:"This is a test"}),e("br",{})]})})}const w={component:f,decorators:[o=>e(s,{children:e(o,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:8,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},a={args:{variant:"filled",color:"primary",hue:"main",buttonLabel:"Open",size:"normal",fullWidth:!1,shadowSize:8,compact:!1,disabled:!1,noRippleEffect:!1}};var n,i,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'primary',
    hue: 'main',
    buttonLabel: 'Open',
    size: 'normal',
    fullWidth: false,
    shadowSize: 8,
    compact: false,
    disabled: false,
    noRippleEffect: false
  }
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const D=["Demo"];export{a as Demo,D as __namedExportsOrder,w as default};
