import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{A as l,a as n}from"./AlertProvider-CSxl7Bna.js";import{B as s}from"./Button-HS4qhxue.js";import"./IconButton-BrX7Rpys.js";import"./RadioButton-Df7xQ-kQ.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import{D as c,T as d}from"./DefaultThemeProvider-DB5yquFP.js";import"./useTimeout-dnlj8An_.js";import"./DefaultMenu-CabspXGA.js";import"./Checkbox-DTNaYHYX.js";import"./Switch-BSBrATWg.js";import"./Alert-PWQClZnu.js";import"./Accordion-7BL9lYKN.js";import"./Input-BXqaDr0Y.js";import"./PasswordInput-CwZj2So7.js";import"./DateInput-65P20iYT.js";import"./TagInput-Dk5jByq5.js";import"./ColorChooser-B5FUsHpn.js";import"./TabPanel-Bk8HrNlW.js";import"./Tooltip-BaGgYEDs.js";import"./Combobox-utIsBDyR.js";import"./Timer-h-JiAl7z.js";import"./Grid-BE_VkPio.js";import"./Slick-B6TBkA8o.js";import"./SlickFixedSize-CAkWqw8N.js";import"./Popover-BIDVtb57.js";import"./Slider-C3pucIoE.js";import"./RangeSlider-DmSCO4u8.js";import"./MonacoEditor-CCmO9Yxd.js";import"./Highlight-Qmv9CNvH.js";import"./Form-Bcy91KMB.js";import"./SidebarLayout-DZJ4f7TW.js";import"./TopbarLayout-DAyzHkYU.js";import"./DataTable-B0OTM8aw.js";import"./Table-fdjFLj9c.js";import"./useRipple-C4DXtBro.js";import"./ShapeType-C4Gft0bY.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./index-Cp9I2zMD.js";import"./SignInButton-CzdAjFiw.js";import"./index-CikfRwdJ.js";import"./index-DJbli8uv.js";import"./ColorUtil-B4gL3Pif.js";import"./DomUtil-DAqrhrKT.js";import"./InputUtil-CfDwzwTJ.js";import"./index.browser-vcSNLBTf.js";import"./SizeWatcher-BDbsP5oN.js";import"./Tooltip.module-D77Rh_bi.js";import"./useResizeObserver-vZQY_nc8.js";import"./IndicatorLabel-DNRmLhG1.js";import"./index-DjY7dx8f.js";import"./Highlight-CBFUEUc4.js";import"./Table.module-GN5HgtVw.js";let x=1;function u(t){const p=a.useContext(n);return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:o.jsx(d,{component:"h4",children:"AlertProvider demo (using controls to change properties of this widget)"})}),o.jsx("div",{className:"center-panel full-height",children:o.jsx(s,{color:t.color,className:"flex-center",style:{zIndex:1e5},onClick:()=>{p.addAlert({title:t.title?`${t.title} (${x++})`:void 0,message:t.message,color:t.color,variant:t.variant,timeout:t.timeout,closeLabel:t.closeLabel})},children:"Add Alert"})})]})}const jt={title:"CLIENTS/ui/alert/AlertProvider",component:u,decorators:[t=>o.jsx(c,{children:o.jsx(l,{children:o.jsx(t,{})})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},variant:{options:["filled","outlined","two_tones"],control:{type:"radio"}},title:{control:{type:"text"}},closeLabel:{control:{type:"text"}}}},r={args:{title:"Title",message:"Message",color:"primary",variant:"filled",timeout:0,closeLabel:"Done"}};var e,i,m;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    message: 'Message',
    color: 'primary',
    variant: 'filled',
    timeout: 0,
    closeLabel: 'Done'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["Demo"];export{r as Demo,At as __namedExportsOrder,jt as default};
