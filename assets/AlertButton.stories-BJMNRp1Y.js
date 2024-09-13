import{a as o,j as n,F as c,T as a,B as d,C as p}from"./Divider-DdokZ4G_.js";import"./index-BwDkhjyp.js";import{D as m}from"./DefaultThemeProvider-DWbcdqGt.js";import{A as f}from"./AlertButton-2B0HG_NZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-C-RRGble.js";import"./ColorUtil-DKEMF1mc.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-V2LljsIL.js";import"./index-B8XB3FuZ.js";import"./ActionBar-BLcuPqV8.js";function u(e){return n(c,{children:[o("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:o(a,{component:"h4",children:"Alert demo (using controls to change properties of this widget)"})}),o("div",{style:{padding:"24px",display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:n(f,{buttonLabel:e.buttonLabel,color:e.color,hue:e.hue,variant:e.variant,shadowSize:e.shadowSize,compact:e.compact,fullWidth:e.fullWidth,size:e.size,disabled:e.disabled,spaceBetween:!1,dialogProps:{compact:e.compact},onAction:s=>{console.log(s)},leftActions:[{label:"Cancel",variant:d.OUTLINED,action:"action1"}],rightActions:[{label:"Done",color:p.PRIMARY,action:"action2"}],children:[o(a,{variant:"heading4",children:"Select action"}),o("br",{}),o(a,{variant:"body1",color:"secondary",children:"This is a test"}),o("br",{})]})})]})}const j={component:u,decorators:[e=>o(m,{children:o(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},t={args:{variant:"filled",color:"primary",hue:"main",buttonLabel:"Open",size:"normal",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var l,i,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const B=["Demo"];export{t as Demo,B as __namedExportsOrder,j as default};
