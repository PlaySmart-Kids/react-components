import{a as r,D as s,F as o,j as l,T as d}from"./DefaultThemeProvider-DbvuuPiG.js";import{M as c}from"./MonacoEditor-CUtaX08P.js";import"./useTimeout-CJ17nKGE.js";import"./index-BwDkhjyp.js";import"./DefaultMenu-BlcDDkEz.js";import"./Checkbox-BrRzgm1z.js";import"./Switch-CXxVHucP.js";import"./Button-Bqv8ahTI.js";import"./IconButton-BwGYpPpx.js";import"./RadioButton-CvYUyq31.js";import"./AlertButton-CEMVheh8.js";import"./ActionBar-CP_E9YHA.js";import"./Accordion-Dsqn61Yp.js";import"./Input-BROBnCH0.js";import"./DateInput-CGkz6UV5.js";import"./TagInput-Du6bFfjV.js";import"./ColorChooser-ChVYIljo.js";import"./TabPanel-BZo411ub.js";import"./Tooltip-pyG5DMgg.js";import"./Combobox-CyOlpwYz.js";import"./Timer-DpNhVmiX.js";import"./Form-CDI7ZleC.js";import"./Slick-BpbuyHDu.js";import"./SlickFixedSize-5jin2AXv.js";import"./Popover-DRTVdzI2.js";import"./Slider-1r7nu4Md.js";import"./RangeSlider-C5LnDJ_R.js";import"./Highlight-CMJ2AqdC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-Cr_cz2D9.js";import"./index-DOJJSfO9.js";import"./DomUtil-Bdo5KM9z.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-CLSESEbx.js";import"./Anchor-Dh8oERsW.js";import"./index-B8XB3FuZ.js";import"./InputUtil-CjrSpb8e.js";import"./index.browser-vcSNLBTf.js";import"./SizeWatcher-BDbsP5oN.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";function g(t){function n(){return l(o,{children:[r("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:r(d,{component:"h4",children:"Monaco demo (using controls to change properties of this widget)"})}),r("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r(c,{style:{padding:"0.5rem"},editorRef:p=>{console.log(p)},value:t.language==="javascript"?`
function printHelloworld() {
  console.log('hello world');
}
`.trim():t.language==="css"?`
.Test {
  background-color: blue;
}
`.trim():`
<h1>Hello World</h1>`.trim(),language:t.language,theme:t.theme,lineNumbers:t.lineNumbers,minimap:t.minimap,fontSize:t.fontSize})})]})}return r(o,{children:n()})}const rt={component:g,parameters:{layout:"padded"},decorators:[t=>r(s,{children:r(t,{})})],argTypes:{language:{options:["javascript","html","css"],control:{type:"radio"}},theme:{options:["vs-lite","vs-dark"],control:{type:"radio"}}}},e={args:{language:"javascript",theme:"vs-lite",lineNumbers:!0,minimap:!0,fontSize:12}};var i,m,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    theme: 'vs-lite',
    lineNumbers: true,
    minimap: true,
    fontSize: 12
  }
}`,...(a=(m=e.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const et=["Demo"];export{e as Demo,et as __namedExportsOrder,rt as default};
