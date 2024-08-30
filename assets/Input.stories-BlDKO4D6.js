import{j as a,D as f,a as r,T as i,e as o}from"./DefaultThemeProvider-D8uc623f.js";import{r as t}from"./index-BwDkhjyp.js";import{I as h}from"./Input-CXMM8YMK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputUtil-DB9qJFib.js";function g(e){const[c,n]=t.useState();t.useState("10000"),t.useState("2024-01-01"),t.useEffect(()=>{n(e.value)},[e.value]);const p=m=>{n(m.currentTarget.value)};return r("div",{style:{padding:"24px"},children:[r(i,{component:"h4",className:"title-space",children:["Input demo",a(i,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),a("div",{className:"demo-panel",style:{display:"flex",paddingBlockStart:o(30),marginInline:"auto",marginBlockStart:"0",flexDirection:"column",gap:o(20),justifyContent:"start",alignItems:"start",width:e.fullWidth?"100%":o(200)},children:a(h,{...e,value:c,onChange:p})})]})}const b={component:g,decorators:[e=>a(f,{children:a(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},title:{defaultValue:"Title"},placeholder:{defaultValue:""},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},type:{defaultValue:"text",options:["text","password","email","number"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small"],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},hint:{defaultValue:"",control:{type:"text"}},alwaysHighlight:{defaultValue:!1,control:{type:"boolean"}},shrinkTitle:{defaultValue:!0,control:{type:"boolean"}},compact:{defaultValue:!1,control:{type:"boolean"}}}},l={args:{color:"primary",size:"normal",hue:"main",type:"text",title:"Title",fullWidth:!1,disabled:!1,multiLines:!1,hint:void 0,value:"hello",shrinkTitle:!0,alwaysHighlight:!1,compact:!1,placeholder:""}};var s,u,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    value: 'hello',
    shrinkTitle: true,
    alwaysHighlight: false,
    compact: false,
    placeholder: ''
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const k=["Demo"];export{l as Demo,k as __namedExportsOrder,b as default};
