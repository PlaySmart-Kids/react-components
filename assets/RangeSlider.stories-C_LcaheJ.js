import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{D as p,T as r}from"./DefaultThemeProvider-DB5yquFP.js";import{r as s}from"./index-DJO9vBfz.js";import{S as u}from"./ShapeType-C4Gft0bY.js";import{R as l}from"./RangeSlider-DmSCO4u8.js";import"./index-CikfRwdJ.js";import"./IndicatorLabel-DNRmLhG1.js";import"./index-DjY7dx8f.js";import"./Tooltip.module-D77Rh_bi.js";import"./DomUtil-DAqrhrKT.js";import"./index-DJbli8uv.js";function h(e){const[a,t]=s.useState(e.values);return s.useEffect(()=>{t(e.values)},[e.values]),o.jsxs("div",{style:{padding:"24px"},children:[o.jsxs(r,{component:"h4",className:"title-space",children:["RangeSlider Demo",o.jsx(r,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"start",flexDirection:"column"},children:[o.jsx("div",{style:{display:"flex",width:"100%"},children:o.jsx(l,{...e,iconStart:e.iconStart,iconEnd:e.iconEnd,values:a,onChange:i=>{t(i)}})}),o.jsx("div",{style:{height:"100px",width:"400px",display:"flex",justifyContent:"center"},children:o.jsx(l,{...e,iconStart:e.iconStart,iconEnd:e.iconEnd,values:a,onChange:i=>{t(i)},orientation:"vertical"})})]}),o.jsx("br",{})]})}const w={title:"CLIENTS/ui/slider/RangeSlider",component:h,decorators:[e=>o.jsx(p,{children:o.jsx(e,{})})],argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lighter","light","main","dark","darker"],control:{type:"radio"}},size:{options:["normal","small"],control:{type:"radio"}},fullWidth:{control:{type:"boolean"}},thumbShape:{options:["circle","rounded","rectangle"],control:{type:"radio"}},labelPosition:{options:[void 0,"start","end"],control:{type:"radio"}}}},n={args:{color:"primary",size:"normal",hue:"main",max:20,min:0,fullWidth:!1,values:[5,15],step:1,showSteps:!1,snapToStep:!1,iconStart:"volume_down",iconEnd:"volume_up",thumbShape:u.CIRCLE,labelPosition:void 0,minFraction:0,maxFraction:0}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'normal',
    hue: 'main',
    max: 20,
    min: 0,
    fullWidth: false,
    values: [5, 15],
    step: 1,
    showSteps: false,
    snapToStep: false,
    iconStart: 'volume_down',
    iconEnd: 'volume_up',
    thumbShape: ShapeType.CIRCLE,
    labelPosition: undefined,
    minFraction: 0,
    maxFraction: 0
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Demo"];export{n as Demo,D as __namedExportsOrder,w as default};
