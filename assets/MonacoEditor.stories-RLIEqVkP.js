import{j as t,D as s,F as m}from"./DefaultThemeProvider-DIgWkiEK.js";import{M as c}from"./MonacoEditor-asmpnVql.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Highlight-C51BMvKo.js";function d(e){function i(){return t("div",{style:{position:"relative",padding:"20px",margin:"auto",gap:"15px",height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t(c,{style:{padding:"0.5rem"},editorRef:l=>{console.log(l)},value:e.language==="javascript"?`
function printHelloworld() {
  console.log('hello world');
}
`.trim():e.language==="css"?`
.Test {
  background-color: blue;
}
`.trim():`
<h1>Hello World</h1>`.trim(),language:e.language,theme:e.theme,lineNumbers:e.lineNumbers,minimap:e.minimap,fontSize:e.fontSize})})}return t(m,{children:i()})}const v={component:d,parameters:{layout:"padded"},decorators:[e=>t(s,{children:t(e,{})})],argTypes:{language:{options:["javascript","html","css"],control:{type:"radio"}},theme:{options:["vs-lite","vs-dark"],control:{type:"radio"}}}},a={args:{language:"javascript",theme:"vs-lite",lineNumbers:!0,minimap:!0,fontSize:12}};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    theme: 'vs-lite',
    lineNumbers: true,
    minimap: true,
    fontSize: 12
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const y=["Demo"];export{a as Demo,y as __namedExportsOrder,v as default};
