import{j as o,D as p,a}from"./DefaultThemeProvider-BRxWeqUn.js";import{f as l,g as m,y as c,T as n,P as h,a as y}from"./ProfileLink-D-xyNnIs.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";var d=(e=>(e.EXTRA_SMALL="xs",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.EXTRA_LARGE="xl",e))(d||{});function g(e){return a("div",{style:{padding:"24px"},children:[a(n,{component:"h4",className:"title-space",children:["Paper demo",o(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),o("div",{className:"demo-panel",children:o(h,{...e,style:{width:"200px",height:"200px"},children:o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},className:y[`Border-Radius-${e.borderRadiusSize}`],children:"[Component]"})})})]})}const v={component:g,decorators:[e=>o(p,{children:o(e,{})})],argTypes:{shadowSize:{options:[0,1,2,4,8,12,16,20,24],control:{type:"radio"}},type:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},variant:{options:["empty","outlined","two_tones"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},paddingSize:{options:["none","xs","sm","md","lg","xl"],control:{type:"radio"}},borderRadiusSize:{options:["none","xs","sm","md","lg","xl"],control:{type:"radio"}}}},r={args:{type:l("secondary"),hue:m("main"),variant:c.EMPTY,shadowSize:2,paddingSize:d.MEDIUM,borderRadiusSize:void 0}};var t,i,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    type: ToColorType('secondary'),
    hue: ToColorHue('main'),
    variant: PaperVariant.EMPTY,
    shadowSize: 2,
    paddingSize: SpaceSize.MEDIUM,
    borderRadiusSize: undefined
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const E=["Demo"];export{r as Demo,E as __namedExportsOrder,v as default};
