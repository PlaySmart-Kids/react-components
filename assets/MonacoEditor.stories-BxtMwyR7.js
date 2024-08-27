import{j as r,D as s,F as o,a as l,T as d}from"./DefaultThemeProvider-3jRHqMMg.js";import{M as c}from"./MonacoEditor-DvcDKwnj.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-BwDkhjyp.js";import"./DefaultMenu-B21mEzSQ.js";import"./Checkbox-MznqVlSY.js";import"./Switch-cd7XreZG.js";import"./Button-Bmxau5DP.js";import"./IconButton-BO-tLsoF.js";import"./RadioButton-CYGO6mve.js";import"./AlertButton-CzVk3fXG.js";import"./ActionBar-BYC-azPa.js";import"./Accordion-BZHMyWdY.js";import"./Input-CiaMthXA.js";import"./DateInput-B2MfQc20.js";import"./TagInput-t91gr6Dq.js";import"./ColorChooser-DE8JJMKj.js";import"./TabPanel-BKEOUXml.js";import"./Tooltip-aKKjPPxB.js";import"./Combobox-lKDCkSJr.js";import"./Timer-CQHBXe3a.js";import"./Slick-BVohmkMR.js";import"./SlickFixedSize-DIog18Ex.js";import"./Popover-BUpnEduU.js";import"./Slider-DUy-UliW.js";import"./RangeSlider-CAwHC5IZ.js";import"./Highlight-CnRDj5PY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-CTP1cW_j.js";import"./DomUtil-Bdo5KM9z.js";import"./index-DOJJSfO9.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-DLxJhTTa.js";import"./Anchor-Dh8oERsW.js";import"./index-B8XB3FuZ.js";import"./InputUtil-CptuWz0N.js";import"./index.browser-vcSNLBTf.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";function g(t){function n(){return l(o,{children:[r("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:r(d,{component:"h4",children:"Monaco demo (using controls to change properties of this widget)"})}),r("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r(c,{style:{padding:"0.5rem"},editorRef:p=>{console.log(p)},value:t.language==="javascript"?`
function printHelloworld() {
  console.log('hello world');
}
`.trim():t.language==="css"?`
.Test {
  background-color: blue;
}
`.trim():`
<h1>Hello World</h1>`.trim(),language:t.language,theme:t.theme,lineNumbers:t.lineNumbers,minimap:t.minimap,fontSize:t.fontSize})})]})}return r(o,{children:n()})}const $={component:g,parameters:{layout:"padded"},decorators:[t=>r(s,{children:r(t,{})})],argTypes:{language:{options:["javascript","html","css"],control:{type:"radio"}},theme:{options:["vs-lite","vs-dark"],control:{type:"radio"}}}},e={args:{language:"javascript",theme:"vs-lite",lineNumbers:!0,minimap:!0,fontSize:12}};var i,m,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    theme: 'vs-lite',
    lineNumbers: true,
    minimap: true,
    fontSize: 12
  }
}`,...(a=(m=e.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const tt=["Demo"];export{e as Demo,tt as __namedExportsOrder,$ as default};
