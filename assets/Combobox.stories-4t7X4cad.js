import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{C as t}from"./Combobox-B0zNmVdd.js";import{D as m,T as n}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import{S as i}from"./index-CikfRwdJ.js";function o(l,b){return[...b].sort((d,h)=>i(h.label.toUpperCase(),l.toUpperCase())-i(d.label.toUpperCase(),l.toUpperCase()))}function v(l){return e.jsxs("div",{style:{height:"100vh",padding:"24px"},children:[e.jsxs(n,{component:"h4",className:"title-space",children:["Demo",e.jsx(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e.jsx("br",{}),e.jsx("h5",{children:"Controlled"}),e.jsx("br",{}),e.jsx(t,{...l,style:{minWidth:l.size==="wrap"?void 0:"250px"}}),e.jsx("div",{style:{display:"flex",justifyContent:"start",paddingBlockStart:"20px"},children:e.jsx(t,{...l,size:"wrap"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h5",{children:"Uncontrolled"}),e.jsx("br",{}),e.jsx(t,{style:{minWidth:l.size==="wrap"?void 0:"250px"},options:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"500",label:"500"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"}],color:l.color,defaultValue:"10",shrinkTitle:l.shrinkTitle,hint:l.hint,fullWidth:l.fullWidth,disabled:l.disabled,size:l.size,alwaysHighlight:l.alwaysHighlight,label:l.label+" (Auto Complete)",autoComplete:o}),e.jsx("br",{}),e.jsx(t,{style:{minWidth:l.size==="wrap"?void 0:"250px"},options:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"500",label:"500"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"}],shrinkTitle:l.shrinkTitle,color:l.color,hint:l.hint,fullWidth:l.fullWidth,disabled:l.disabled,size:l.size,alwaysHighlight:l.alwaysHighlight,label:l.label+" (Auto Complete : no default value)",autoComplete:o})]})}const c={title:"CLIENTS/ui/combobox/Combobox",component:v,decorators:[l=>e.jsx(m,{children:e.jsx(l,{})})],argTypes:{onChange:{action:"changed"},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small"],control:{type:"radio"}}}},a={args:{color:"primary",hue:"main",size:"normal",label:"Title",options:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"}],value:"70",hint:"",fullWidth:!1,disabled:!1,shrinkTitle:!0,alwaysHighlight:!1}};var r,s,u;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    hue: 'main',
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
    shrinkTitle: true,
    alwaysHighlight: false
  }
}`,...(u=(s=a.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const g=["Demo"],C=Object.freeze(Object.defineProperty({__proto__:null,Demo:a,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{C,o as S,c as m};
