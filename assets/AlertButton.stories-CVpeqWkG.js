import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{D as s,T as a,B as c,C as d}from"./DefaultThemeProvider-DB5yquFP.js";import"./index-DJO9vBfz.js";import{A as p}from"./AlertButton-BckD7m-D.js";import"./index-CikfRwdJ.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./index-Cp9I2zMD.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";function m(e){return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:t.jsx(a,{component:"h4",children:"Alert demo (using controls to change properties of this widget)"})}),t.jsx("div",{style:{padding:"24px",display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},children:t.jsxs(p,{buttonLabel:e.buttonLabel,color:e.color,hue:e.hue,variant:e.variant,shadowSize:e.shadowSize,compact:e.compact,fullWidth:e.fullWidth,size:e.size,disabled:e.disabled,spaceBetween:!1,dialogProps:{compact:e.compact},onAction:l=>{console.log(l)},leftActions:[{label:"Cancel",variant:c.OUTLINED,action:"action1"}],rightActions:[{label:"Done",color:d.PRIMARY,action:"action2"}],children:[t.jsx(a,{variant:"heading4",children:"Select action"}),t.jsx("br",{}),t.jsx(a,{variant:"body1",color:"secondary",children:"This is a test"}),t.jsx("br",{})]})})]})}const V={title:"CLIENTS/ui/button/AlertButton",component:m,decorators:[e=>t.jsx(s,{children:t.jsx(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},variant:{options:["filled","outlined","text"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,2,4,8,12,16,20,24],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},noRippleEffect:{control:{type:"boolean"}}}},o={args:{variant:"filled",color:"primary",hue:"main",buttonLabel:"Open",size:"normal",fullWidth:!1,shadowSize:4,compact:!1,disabled:!1,noRippleEffect:!1}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const W=["Demo"];export{o as Demo,W as __namedExportsOrder,V as default};
