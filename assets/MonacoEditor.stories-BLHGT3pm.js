import{j as r,D as s,F as o,a as l,T as d}from"./DefaultThemeProvider-CceS3XqJ.js";import{M as c}from"./MonacoEditor-BbH2WkKb.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-BwDkhjyp.js";import"./DefaultMenu-DrbZCX1M.js";import"./Checkbox-Crf4IYYd.js";import"./Switch-DyS42yT5.js";import"./Button-DWdng8ry.js";import"./IconButton-CV0o4IDr.js";import"./RadioButton-L8TSjxiY.js";import"./AlertButton-Bl5qQM9O.js";import"./ActionBar-lQzOkDNJ.js";import"./Accordion-mGQDXIhO.js";import"./Input-BOD7sVhO.js";import"./DateInput-CRuefpYB.js";import"./TagInput-CJ-68Deh.js";import"./ColorChooser-of-r3nZR.js";import"./TabPanel-Dtub5vqz.js";import"./Tooltip-BIUPYRQR.js";import"./Combobox-Cm7sHgsr.js";import"./Timer-DxfItEFQ.js";import"./Slick-CVcHhaA7.js";import"./SlickFixedSize-1Bf83lP4.js";import"./Popover-BCv4VnZ1.js";import"./Slider-DdcvAXIx.js";import"./RangeSlider-jmTK5zst.js";import"./Highlight-BYFZzPJH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-BhNK3fl1.js";import"./DomUtil-Bdo5KM9z.js";import"./index-DOJJSfO9.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-IWfmJKz1.js";import"./Anchor-Dh8oERsW.js";import"./index-B8XB3FuZ.js";import"./InputUtil-DZ0Wu5-M.js";import"./index.browser-vcSNLBTf.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";function g(t){function n(){return l(o,{children:[r("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:r(d,{component:"h4",children:"Monaco demo (using controls to change properties of this widget)"})}),r("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r(c,{style:{padding:"0.5rem"},editorRef:p=>{console.log(p)},value:t.language==="javascript"?`
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
