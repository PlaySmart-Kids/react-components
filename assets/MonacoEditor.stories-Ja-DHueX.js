import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as l,T as m}from"./DefaultThemeProvider-DB5yquFP.js";import{M as d}from"./MonacoEditor-CCmO9Yxd.js";import"./index-DJO9vBfz.js";import"./index-CikfRwdJ.js";import"./Highlight-CBFUEUc4.js";function c(t){function i(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:e.jsx(m,{component:"h4",children:"Monaco demo (using controls to change properties of this widget)"})}),e.jsx("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(d,{style:{padding:"0.5rem"},editorRef:s=>{console.log(s)},value:t.language==="javascript"?`
function printHelloworld() {
  console.log('hello world');
}
`.trim():t.language==="css"?`
.Test {
  background-color: blue;
}
`.trim():`
<h1>Hello World</h1>`.trim(),language:t.language,theme:t.theme,lineNumbers:t.lineNumbers,minimap:t.minimap,fontSize:t.fontSize})})]})}return e.jsx(e.Fragment,{children:i()})}const j={title:"CLIENTS/ui/thridparty/MonacoEditor",component:c,parameters:{layout:"padded"},decorators:[t=>e.jsx(l,{children:e.jsx(t,{})})],argTypes:{language:{options:["javascript","html","css"],control:{type:"radio"}},theme:{options:["vs-lite","vs-dark"],control:{type:"radio"}}}},r={args:{language:"javascript",theme:"vs-lite",lineNumbers:!0,minimap:!0,fontSize:12}};var o,n,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    theme: 'vs-lite',
    lineNumbers: true,
    minimap: true,
    fontSize: 12
  }
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const y=["Demo"];export{r as Demo,y as __namedExportsOrder,j as default};
