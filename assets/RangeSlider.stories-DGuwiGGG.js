import{j as e,D as f,a as r}from"./DefaultThemeProvider-ZzgTeurK.js";import{T as i,M as o}from"./Badge-DwPYLl2q.js";import{r as d}from"./index-BwDkhjyp.js";import{R as m}from"./RangeSlider-BIKqFbQT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VerticalSlider.module-Dlu2mDNt.js";import"./index-DOJJSfO9.js";function h(a){const[s,t]=d.useState(a.values);return d.useEffect(()=>{t(a.values)},[a.values]),r("div",{style:{padding:"24px"},children:[r(i,{component:"h4",className:"title-space",children:["RangeSlider Demo",e(i,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),r("div",{style:{display:"flex",justifyContent:"start",flexDirection:"column"},children:[e("div",{style:{display:"flex",width:"100%"},children:e(m,{...a,iconStart:e(o,{name:"volume_down"}),iconEnd:e(o,{name:"volume_up"}),values:s,onChange:l=>{t(l)}})}),e("div",{style:{height:"400px"},children:e(m,{...a,iconStart:e(o,{name:"volume_down"}),iconEnd:e(o,{name:"volume_up"}),values:s,onChange:l=>{t(l)},orientation:"vertical"})})]}),e("br",{})]})}const D={component:h,decorators:[a=>e(f,{href:"./_default.css",children:e(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["normal","small"],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},n={args:{color:"primary",size:"normal",hue:"main",max:20,min:0,title:"Label",fullWidth:!1,disabled:!1,values:[5,15],step:1,showSteps:!1,snapToStep:!1}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    max: 20,
    min: 0,
    title: 'Label',
    fullWidth: false,
    disabled: false,
    values: [5, 15],
    step: 1,
    showSteps: false,
    snapToStep: false
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const _=["Demo"];export{n as Demo,_ as __namedExportsOrder,D as default};
