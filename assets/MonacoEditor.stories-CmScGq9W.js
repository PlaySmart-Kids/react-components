import{j as t,D as l,F as m}from"./DefaultThemeProvider-BRxWeqUn.js";import{M as s}from"./MonacoEditor-CgCBQMFB.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Highlight-BrxCH9gJ.js";function c(e){function o(){return t("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t(s,{style:{padding:"0.5rem"},value:e.language==="javascript"?`
function printHelloworld() {
  console.log('hello world');
}
`.trim():e.language==="css"?`
.Test {
  background-color: blue;
}
`.trim():`
<h1>Hello World</h1>`.trim(),language:e.language,theme:e.theme,lineNumbers:e.lineNumbers,minimap:e.minimap,fontSize:e.fontSize})})}return t(m,{children:o()})}const f={component:c,parameters:{layout:"padded"},decorators:[e=>t(l,{children:t(e,{})})],argTypes:{language:{options:["javascript","html","css"],control:{type:"radio"}},theme:{options:["vs-lite","vs-dark"],control:{type:"radio"}}}},a={args:{language:"javascript",theme:"vs-lite",lineNumbers:!0,minimap:!0,fontSize:12}};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    theme: 'vs-lite',
    lineNumbers: true,
    minimap: true,
    fontSize: 12
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const v=["Demo"];export{a as Demo,v as __namedExportsOrder,f as default};
