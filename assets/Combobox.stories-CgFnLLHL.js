import{a as e,j as i,T as t}from"./Divider-DdokZ4G_.js";import{C as a}from"./Combobox-Cgg3BcSY.js";import"./index-BwDkhjyp.js";import{S as o}from"./index-D94qCVC8.js";import{D as v}from"./DefaultThemeProvider-DWbcdqGt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputUtil-DkXrE-40.js";function c(l,d){return[...d].sort((b,m)=>o(m.label.toUpperCase(),l.toUpperCase())-o(b.label.toUpperCase(),l.toUpperCase()))}function h(l){return i("div",{style:{height:"100vh",padding:"24px"},children:[i(t,{component:"h4",className:"title-space",children:["Demo",e(t,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("br",{}),e(a,{...l,style:{minWidth:l.size==="wrap"?void 0:"250px"}}),e("br",{}),e(a,{style:{minWidth:l.size==="wrap"?void 0:"250px"},options:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"500",label:"500"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"}],color:l.color,value:"10",hint:l.hint,fullWidth:l.fullWidth,disabled:l.disabled,size:l.size,alwaysHighlight:l.alwaysHighlight,label:l.label+" (Auto Complete)",autoComplete:c}),e("div",{style:{display:"flex",justifyContent:"start",paddingBlockStart:"20px"},children:e(a,{...l,size:"wrap"})}),e("div",{className:"fix-panel fix-bottom fix-right",children:e(a,{...l,style:{minWidth:l.size==="wrap"?void 0:"250px"}})})]})}const z={component:h,decorators:[l=>e(v,{children:e(l,{})})],argTypes:{onChange:{action:"changed"},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small"],control:{type:"radio"}}}},n={args:{color:"primary",size:"normal",label:"Title",options:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"}],value:"70",hint:"",fullWidth:!1,disabled:!1,shrinkLabel:!0,alwaysHighlight:!1}};var r,s,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    label: 'Title',
    options: [{
      value: '10',
      label: '10'
    }, {
      value: '20',
      label: '20'
    }, {
      value: '30',
      label: '30'
    }, {
      value: '40',
      label: '40'
    }, {
      value: '50',
      label: '50'
    }, {
      value: '60',
      label: '60'
    }, {
      value: '70',
      label: '70'
    }, {
      value: '80',
      label: '80'
    }, {
      value: '90',
      label: '90'
    }],
    value: '70',
    hint: '',
    fullWidth: false,
    disabled: false,
    shrinkLabel: true,
    alwaysHighlight: false
  }
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const S=["Demo"];export{n as Demo,S as __namedExportsOrder,z as default};
