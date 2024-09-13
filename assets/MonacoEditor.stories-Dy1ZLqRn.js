import{a as r,F as e,j as s,T as l}from"./Divider-DdokZ4G_.js";import{D as d}from"./DefaultThemeProvider-DWbcdqGt.js";import{M as c}from"./MonacoEditor-D219lyK1.js";import"./useTimeout-CJ17nKGE.js";import"./index-BwDkhjyp.js";import"./DefaultMenu-BMBdQtBk.js";import"./Checkbox-CbJTyfsx.js";import"./Switch-BSYtxEl3.js";import"./Button-C-RRGble.js";import"./IconButton-BNmK_rQm.js";import"./RadioButton-65ds4XkE.js";import"./AlertButton-2B0HG_NZ.js";import"./ActionBar-BLcuPqV8.js";import"./Accordion-CS5EBwsm.js";import"./Input-D5bJgjba.js";import"./DateInput-CmGzaTWf.js";import"./TagInput-Bdqca-Fz.js";import"./ColorChooser-C_C_Rojr.js";import"./TabPanel-qRFHjRg3.js";import"./Tooltip-DHzZHThc.js";import"./Combobox-Cgg3BcSY.js";import"./Timer-BKmCN6ra.js";import"./Form-DSBgBOX4.js";import"./Slick-BDFa3WBn.js";import"./SlickFixedSize-B4NmhMdt.js";import"./Popover-C1-S52bD.js";import"./Slider-vGJTftp0.js";import"./RangeSlider-C1knu0w1.js";import"./Highlight-KTIa5Vpx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-DKEMF1mc.js";import"./index-DOJJSfO9.js";import"./DomUtil-Bdo5KM9z.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-V2LljsIL.js";import"./Anchor-Dh8oERsW.js";import"./index-B8XB3FuZ.js";import"./InputUtil-DkXrE-40.js";import"./index.browser-vcSNLBTf.js";import"./SizeWatcher-BDbsP5oN.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";function g(t){function n(){return s(e,{children:[r("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:r(l,{component:"h4",children:"Monaco demo (using controls to change properties of this widget)"})}),r("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r(c,{style:{padding:"0.5rem"},editorRef:p=>{console.log(p)},value:t.language==="javascript"?`
function printHelloworld() {
  console.log('hello world');
}
`.trim():t.language==="css"?`
.Test {
  background-color: blue;
}
`.trim():`
<h1>Hello World</h1>`.trim(),language:t.language,theme:t.theme,lineNumbers:t.lineNumbers,minimap:t.minimap,fontSize:t.fontSize})})]})}return r(e,{children:n()})}const ot={component:g,parameters:{layout:"padded"},decorators:[t=>r(d,{children:r(t,{})})],argTypes:{language:{options:["javascript","html","css"],control:{type:"radio"}},theme:{options:["vs-lite","vs-dark"],control:{type:"radio"}}}},o={args:{language:"javascript",theme:"vs-lite",lineNumbers:!0,minimap:!0,fontSize:12}};var i,m,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    theme: 'vs-lite',
    lineNumbers: true,
    minimap: true,
    fontSize: 12
  }
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const et=["Demo"];export{o as Demo,et as __namedExportsOrder,ot as default};
