import{a as o,D as c,j as n,F as d,T as a,B as p,C as m}from"./DefaultThemeProvider-DbvuuPiG.js";import"./index-BwDkhjyp.js";import{A as f}from"./AlertButton-CEMVheh8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Bqv8ahTI.js";import"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-CLSESEbx.js";import"./index-B8XB3FuZ.js";import"./ActionBar-CP_E9YHA.js";function u(e){return n(d,{children:[o("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:o(a,{component:"h4",children:"Alert demo (using controls to change properties of this widget)"})}),o("div",{style:{padding:"24px",display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:n(f,{buttonLabel:e.buttonLabel,color:e.color,hue:e.hue,variant:e.variant,shadowSize:e.shadowSize,compact:e.compact,fullWidth:e.fullWidth,size:e.size,disabled:e.disabled,spaceBetween:!1,dialogProps:{compact:e.compact},onAction:s=>{console.log(s)},leftActions:[{label:"Cancel",variant:p.OUTLINED,action:"action1"}],rightActions:[{label:"Done",color:m.PRIMARY,action:"action2"}],children:[o(a,{variant:"heading4",children:"Select action"}),o("br",{}),o(a,{variant:"body1",color:"secondary",children:"This is a test"}),o("br",{})]})})]})}const T={component:u,decorators:[e=>o(c,{children:o(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},t={args:{variant:"filled",color:"primary",hue:"main",buttonLabel:"Open",size:"normal",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var l,i,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const j=["Demo"];export{t as Demo,j as __namedExportsOrder,T as default};
