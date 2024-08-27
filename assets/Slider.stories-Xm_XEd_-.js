import{j as e,D as f,a as r}from"./DefaultThemeProvider-DIgWkiEK.js";import{T as i,M as o}from"./ProfileLink-BbZ_QnTw.js";import{r as m}from"./index-BwDkhjyp.js";import{S as d}from"./Slider-Bp4Hqhtz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-DOJJSfO9.js";import"./index-BAi5cnyf.js";function h(a){const[s,n]=m.useState(a.value);return m.useEffect(()=>{n(a.value)},[a.value]),r("div",{style:{padding:"24px"},children:[r(i,{component:"h4",className:"title-space",children:["Slider Demo",e(i,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),r("div",{style:{display:"flex",justifyContent:"start",flexDirection:"column"},children:[e("div",{style:{display:"flex",width:"100%"},children:e(d,{...a,iconStart:e(o,{name:"volume_down"}),iconEnd:e(o,{name:"volume_up"}),value:s,onChange:l=>{n(l.target.value)}})}),e("div",{style:{height:"400px"},children:e(d,{...a,iconStart:e(o,{name:"volume_down"}),iconEnd:e(o,{name:"volume_up"}),value:s,onChange:l=>{n(l.target.value)},orientation:"vertical"})})]}),e("br",{})]})}const T={component:h,decorators:[a=>e(f,{children:e(a,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{defaultValue:"main",options:["light","main","dark","darker"],control:{type:"radio"}},size:{defaultValue:"normal",options:["normal","small"],control:{type:"radio"}},fullWidth:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}}}},t={args:{color:"primary",size:"normal",hue:"main",max:20,min:0,title:"Label",fullWidth:!1,disabled:!1,value:5,step:1,showSteps:!1,snapToStep:!1}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const _=["Demo"];export{t as Demo,_ as __namedExportsOrder,T as default};
