import{j as o,D as n,a as l,F as s,T as p}from"./DefaultThemeProvider-D8uc623f.js";import{r as c}from"./index-BwDkhjyp.js";import{A as d,a as g}from"./MonacoEditor-4g9swfgF.js";import{B as u}from"./Button-DZS6UzoU.js";import"./IconButton-Bkd6rzst.js";import"./RadioButton-OU_3mtva.js";import"./AlertButton-DzLDzLpu.js";import"./ActionBar-DVl6-47o.js";import"./useResizeObserver-BXh6FCPJ.js";import"./DefaultMenu-N2DYu62v.js";import"./Checkbox-DErxap5G.js";import"./Switch-D69I1jfz.js";import"./Accordion-BH4r7nhe.js";import"./Input-CXMM8YMK.js";import"./DateInput-COvj3fLt.js";import"./TagInput-BA0NpfUU.js";import"./ColorChooser-YR-aEjKA.js";import"./TabPanel-BUHwZQ-J.js";import"./Tooltip-CfdcR_vu.js";import"./Combobox-Mv6qnled.js";import"./Timer-D-Xz_o28.js";import"./Form-CitkERq2.js";import"./Slick-hiPOD3iS.js";import"./SlickFixedSize-BWZFJpgJ.js";import"./Popover-CB8i3dj0.js";import"./Slider-Nery9PxC.js";import"./RangeSlider-ChaSH94v.js";import"./Highlight-B5XpmM3f.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-Bbwy-7Wp.js";import"./useRipple-gxOE-J9K.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./index-B8XB3FuZ.js";import"./index-DOJJSfO9.js";import"./DomUtil-Bdo5KM9z.js";import"./Anchor-Dh8oERsW.js";import"./InputUtil-DB9qJFib.js";import"./index.browser-vcSNLBTf.js";import"./SizeWatcher-BDbsP5oN.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";let f=1;function y(t){const m=c.useContext(g);return l(s,{children:[o("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:o(p,{component:"h4",children:"AlertProvider demo (using controls to change properties of this widget)"})}),o("div",{className:"center-panel full-height",children:o(u,{color:t.color,className:"flex-center",style:{zIndex:1e5},onClick:()=>{m.addAlert({title:t.title?`${t.title} (${f++})`:void 0,message:t.message,color:t.color,variant:t.variant,timeout:t.timeout,closeLabel:t.closeLabel})},children:"Add Alert"})})]})}const it={component:y,decorators:[t=>o(n,{children:o(d,{children:o(t,{})})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},variant:{options:["filled","outlined","two_tones"],control:{type:"radio"}},title:{control:{type:"text"}},closeLabel:{control:{type:"text"}}}},e={args:{title:"Title",message:"Message",color:"primary",variant:"filled",timeout:0,closeLabel:"Done"}};var r,i,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    message: 'Message',
    color: 'primary',
    variant: 'filled',
    timeout: 0,
    closeLabel: 'Done'
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const at=["Demo"];export{e as Demo,at as __namedExportsOrder,it as default};