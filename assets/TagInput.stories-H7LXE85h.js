import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{T as o}from"./TagInput-BnWmWiHK.js";import{D as d,T as r}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import"./InputUtil-BONj-j-a.js";import"./index-CikfRwdJ.js";function u(a){return e.jsxs("div",{style:{padding:"24px"},children:[e.jsxs(r,{component:"h4",className:"title-space",children:["Demo",e.jsx(r,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e.jsxs("div",{className:"flex-vertical",children:[e.jsx("h5",{children:"Controlled"}),e.jsx("br",{}),e.jsx(o,{...a,onChange:i=>{},values:a.values})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"Uncontrolled"}),e.jsx("br",{}),e.jsx(o,{...a,onChange:i=>{},values:void 0,defaultValues:a.values})]})}const x={title:"CLIENTS/ui/input/TagInput",component:u,decorators:[a=>e.jsx(d,{children:e.jsx(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},label:{defaultValue:"label"},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small"],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},alwaysHighlight:{defaultValue:!0,control:{type:"boolean"}},shrinkTitle:{defaultValue:!0,control:{type:"boolean"}},hint:{defaultValue:"",control:{type:"text"}}}},l={args:{color:"primary",size:"normal",hue:"main",label:"Label",fullWidth:!1,disabled:!1,hint:void 0,values:["hello"],shrinkTitle:!0,alwaysHighlight:!1}};var t,n,s;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    label: 'Label',
    fullWidth: false,
    disabled: false,
    hint: undefined,
    values: ['hello'],
    shrinkTitle: true,
    alwaysHighlight: false
  }
}`,...(s=(n=l.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const y=["Demo"];export{l as Demo,y as __namedExportsOrder,x as default};
