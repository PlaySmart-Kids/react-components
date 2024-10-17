import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{D as u,T as r,M as o}from"./DefaultThemeProvider-Ce-zb_Sa.js";import{r as i}from"./index-DJO9vBfz.js";import{S as m}from"./Slider-B3gjjnqV.js";import"./index-CikfRwdJ.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-DJbli8uv.js";import"./index-BAi5cnyf.js";function f(a){const[l,n]=i.useState(a.value);return i.useEffect(()=>{n(a.value)},[a.value]),e.jsxs("div",{style:{padding:"24px"},children:[e.jsxs(r,{component:"h4",className:"title-space",children:["Slider Demo",e.jsx(r,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"start",flexDirection:"column"},children:[e.jsx("div",{style:{display:"flex",width:"100%"},children:e.jsx(m,{...a,iconStart:e.jsx(o,{name:"volume_down"}),iconEnd:e.jsx(o,{name:"volume_up"}),value:l,onChange:s=>{n(s.target.value)}})}),e.jsx("div",{style:{height:"400px"},children:e.jsx(m,{...a,iconStart:e.jsx(o,{name:"volume_down"}),iconEnd:e.jsx(o,{name:"volume_up"}),value:l,onChange:s=>{n(s.target.value)},orientation:"vertical"})})]}),e.jsx("br",{})]})}const w={title:"CLIENTS/ui/slider/Slider",component:f,decorators:[a=>e.jsx(u,{children:e.jsx(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["normal","small"],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},t={args:{color:"primary",size:"normal",hue:"main",max:20,min:0,title:"Label",fullWidth:!1,disabled:!1,value:5,step:1,showSteps:!1,snapToStep:!1}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    max: 20,
    min: 0,
    title: 'Label',
    fullWidth: false,
    disabled: false,
    value: 5,
    step: 1,
    showSteps: false,
    snapToStep: false
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Demo"];export{t as Demo,D as __namedExportsOrder,w as default};
