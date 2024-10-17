import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{D as s,T as o,k as l}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import{I as d}from"./Input-BlcUfh8C.js";import"./index-CikfRwdJ.js";import"./InputUtil-BONj-j-a.js";function u(e){return t.jsxs("div",{style:{padding:"24px"},children:[t.jsxs(o,{component:"h4",className:"title-space",children:["Input demo",t.jsx(o,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),t.jsx("div",{className:"demo-panel",style:{display:"flex",paddingBlockStart:l(30),marginInline:"auto",marginBlockStart:"0",flexDirection:"column",gap:l(20),justifyContent:"start",alignItems:"start",width:e.fullWidth?"100%":l(200)},children:t.jsx(d,{...e,defaultValue:e.defaultValue,value:e.value===""?void 0:e.value})})]})}const g={title:"CLIENTS/ui/input/Input",component:u,decorators:[e=>t.jsx(s,{children:t.jsx(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},title:{defaultValue:"Title"},placeholder:{defaultValue:""},hue:{options:["light","main","dark","darker"],control:{type:"radio"}},type:{options:["text","password","email","number","date","email"],control:{type:"radio"}},size:{options:["large","normal","small"],control:{type:"radio"}},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},hint:{control:{type:"text"}},alwaysHighlight:{control:{type:"boolean"}},shrinkTitle:{control:{type:"boolean"}},value:{control:{type:"text"}},compact:{defaultValue:!1,control:{type:"boolean"}}}},a={args:{color:"primary",size:"normal",hue:"main",type:"text",title:"Title",fullWidth:!1,disabled:!1,multiLines:!1,hint:void 0,value:"",defaultValue:"defaultValue",shrinkTitle:!0,alwaysHighlight:!1,compact:!1,placeholder:""}};var n,i,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    type: 'text',
    title: 'Title',
    fullWidth: false,
    disabled: false,
    multiLines: false,
    hint: undefined,
    value: '',
    defaultValue: 'defaultValue',
    shrinkTitle: true,
    alwaysHighlight: false,
    compact: false,
    placeholder: ''
  }
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const x=["Demo"];export{a as Demo,x as __namedExportsOrder,g as default};
