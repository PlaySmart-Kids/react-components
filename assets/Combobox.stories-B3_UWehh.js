import{j as n,D as g,a as h}from"./DefaultThemeProvider-DIgWkiEK.js";import{C as o}from"./Combobox-DQym25nE.js";import{T as d}from"./ProfileLink-BbZ_QnTw.js";import"./index-BwDkhjyp.js";import"./InputUtil-DvwfxGld.js";import"./_commonjsHelpers-BosuxZz1.js";function c(e,t){let l=e,a=t;e.length<t.length&&(l=t,a=e);const r=l.length;return r===0?1:(r-f(l,a))/parseFloat(String(r))}function f(e,t){const l=[];for(let a=0;a<=e.length;a++){let r=a;for(let i=0;i<=t.length;i++)if(a===0)l[i]=i;else if(i>0){let u=l[i-1];e.charAt(a-1)!==t.charAt(i-1)&&(u=Math.min(Math.min(u,r),l[i])+1),l[i-1]=r,r=u}a>0&&(l[t.length]=r)}return l[t.length]}function p(e,t){return[...t].sort((l,a)=>c(a.label.toUpperCase(),e.toUpperCase())-c(l.label.toUpperCase(),e.toUpperCase()))}function y(e){return h("div",{style:{height:"100vh",padding:"24px"},children:[h(d,{component:"h4",className:"title-space",children:["Demo",n(d,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),n("br",{}),n(o,{...e,style:{minWidth:e.size==="wrap"?void 0:"250px"}}),n("br",{}),n(o,{style:{minWidth:e.size==="wrap"?void 0:"250px"},options:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"500",label:"500"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"}],color:e.color,value:"10",hint:e.hint,fullWidth:e.fullWidth,disabled:e.disabled,size:e.size,alwaysHighlight:e.alwaysHighlight,label:e.label+" (Auto Complete)",autoComplete:p}),n("div",{style:{display:"flex",justifyContent:"start",paddingBlockStart:"20px"},children:n(o,{...e,size:"wrap"})}),n("div",{className:"fix-panel fix-bottom fix-right",children:n(o,{...e,style:{minWidth:e.size==="wrap"?void 0:"250px"}})})]})}const S={component:y,decorators:[e=>n(g,{children:n(e,{})})],argTypes:{onChange:{action:"changed"},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},size:{defaultValue:"normal",options:["large","normal","small"],control:{type:"radio"}}}},s={args:{color:"primary",size:"normal",label:"Title",options:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"}],value:"70",hint:"",fullWidth:!1,disabled:!1,shrinkLabel:!0,alwaysHighlight:!1}};var b,m,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const T=["Demo"];export{s as Demo,T as __namedExportsOrder,S as default};
