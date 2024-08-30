import{j as r,D as s,F as o,a as l,T as d}from"./DefaultThemeProvider-D8uc623f.js";import{M as c}from"./MonacoEditor-4g9swfgF.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-BwDkhjyp.js";import"./DefaultMenu-N2DYu62v.js";import"./Checkbox-DErxap5G.js";import"./Switch-D69I1jfz.js";import"./Button-DZS6UzoU.js";import"./IconButton-Bkd6rzst.js";import"./RadioButton-OU_3mtva.js";import"./AlertButton-DzLDzLpu.js";import"./ActionBar-DVl6-47o.js";import"./Accordion-BH4r7nhe.js";import"./Input-CXMM8YMK.js";import"./DateInput-COvj3fLt.js";import"./TagInput-BA0NpfUU.js";import"./ColorChooser-YR-aEjKA.js";import"./TabPanel-BUHwZQ-J.js";import"./Tooltip-CfdcR_vu.js";import"./Combobox-Mv6qnled.js";import"./Timer-D-Xz_o28.js";import"./Form-CitkERq2.js";import"./Slick-hiPOD3iS.js";import"./SlickFixedSize-BWZFJpgJ.js";import"./Popover-CB8i3dj0.js";import"./Slider-Nery9PxC.js";import"./RangeSlider-ChaSH94v.js";import"./Highlight-B5XpmM3f.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-Bbwy-7Wp.js";import"./index-DOJJSfO9.js";import"./DomUtil-Bdo5KM9z.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-gxOE-J9K.js";import"./Anchor-Dh8oERsW.js";import"./index-B8XB3FuZ.js";import"./InputUtil-DB9qJFib.js";import"./index.browser-vcSNLBTf.js";import"./SizeWatcher-BDbsP5oN.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";function g(t){function n(){return l(o,{children:[r("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:r(d,{component:"h4",children:"Monaco demo (using controls to change properties of this widget)"})}),r("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r(c,{style:{padding:"0.5rem"},editorRef:p=>{console.log(p)},value:t.language==="javascript"?`
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
