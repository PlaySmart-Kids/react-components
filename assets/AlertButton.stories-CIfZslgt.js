import{j as a,D as m,a as p}from"./DefaultThemeProvider-ZzgTeurK.js";import{C as e,B as t,a as f,b as n,T as i}from"./Badge-DwPYLl2q.js";import"./index-BwDkhjyp.js";import{A as u}from"./AlertButton-Cqe_ZMy9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Cp_l5BBr.js";import"./ColorUtil-DiQuQGrZ.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-CkSJz6hw.js";import"./index-B8XB3FuZ.js";function h(o){return e.PRIMARY,e.INFO,e.WARNING,e.ERROR,e.SECONDARY,t.FILLED,t.OUTLINED,t.TEXT,f.MAIN,n.LARGE,n.NORMAL,n.SMALL,a("div",{style:{padding:"24px",display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:p(u,{buttonLabel:o.buttonLabel,color:o.color,hue:o.hue,shadowSize:o.shadowSize,compact:o.compact,fullWidth:o.fullWidth,size:o.size,disabled:o.disabled,dialogProps:{compact:o.compact},onAction:d=>{console.log(d)},leftActions:[{label:"action1",variant:t.OUTLINED,action:"action1"}],centerActions:[{label:"action2",color:e.INFO,action:"action2"}],rightActions:[{label:"action3",color:e.PRIMARY,action:"action3"}],children:[a(i,{variant:"heading4",children:"Select action"}),a("br",{}),a(i,{variant:"body1",color:"secondary",children:"This is a test"}),a("br",{})]})})}const T={component:h,decorators:[o=>a(m,{href:"./_default.css",children:a(o,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["light","main","dark","darker"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:8,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},l={args:{variant:"filled",color:"primary",buttonLabel:"Open",size:"normal",fullWidth:!1,shadowSize:8,compact:!1,hue:"main",disabled:!1,noRippleEffect:!1}};var r,c,s;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'primary',
    buttonLabel: 'Open',
    size: 'normal',
    fullWidth: false,
    shadowSize: 8,
    compact: false,
    hue: 'main',
    disabled: false,
    noRippleEffect: false
  }
}`,...(s=(c=l.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const D=["Demo"];export{l as Demo,D as __namedExportsOrder,T as default};
