import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as u,T as r,M as o}from"./DefaultThemeProvider-Ce-zb_Sa.js";import{r as i}from"./index-DJO9vBfz.js";import{R as m}from"./RangeSlider-Ce4tFgox.js";import"./index-CikfRwdJ.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-DJbli8uv.js";import"./index-BAi5cnyf.js";function f(a){const[l,n]=i.useState(a.values);return i.useEffect(()=>{n(a.values)},[a.values]),e.jsxs("div",{style:{padding:"24px"},children:[e.jsxs(r,{component:"h4",className:"title-space",children:["RangeSlider Demo",e.jsx(r,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"start",flexDirection:"column"},children:[e.jsx("div",{style:{display:"flex",width:"100%"},children:e.jsx(m,{...a,iconStart:e.jsx(o,{name:"volume_down"}),iconEnd:e.jsx(o,{name:"volume_up"}),values:l,onChange:t=>{n(t)}})}),e.jsx("div",{style:{height:"400px"},children:e.jsx(m,{...a,iconStart:e.jsx(o,{name:"volume_down"}),iconEnd:e.jsx(o,{name:"volume_up"}),values:l,onChange:t=>{n(t)},orientation:"vertical"})})]}),e.jsx("br",{})]})}const w={title:"CLIENTS/ui/slider/RangeSlider",component:f,decorators:[a=>e.jsx(u,{children:e.jsx(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["normal","small"],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},s={args:{color:"primary",size:"normal",hue:"main",max:20,min:0,title:"Label",fullWidth:!1,disabled:!1,values:[5,15],step:1,showSteps:!1,snapToStep:!1}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Demo"];export{s as Demo,D as __namedExportsOrder,w as default};
