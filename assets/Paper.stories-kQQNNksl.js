import{a as e,D as l,f as p,g as c,G as m,j as a,T as n,P as h,c as g}from"./DefaultThemeProvider-DbvuuPiG.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";var d=(o=>(o.EXTRA_SMALL="xs",o.SMALL="sm",o.MEDIUM="md",o.LARGE="lg",o.EXTRA_LARGE="xl",o))(d||{});function u(o){return a("div",{style:{padding:"24px"},children:[a(n,{component:"h4",className:"title-space",children:["Paper demo",e(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("div",{className:"demo-panel",children:e(h,{...o,style:{width:"200px",height:"200px"},children:e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},className:g[`Border-Radius-${o.borderRadiusSize}`],children:"[Component]"})})})]})}const f={component:u,decorators:[o=>e(l,{children:e(o,{})})],argTypes:{shadowSize:{options:[0,1,2,4,8,12,16,20,24],control:{type:"radio"}},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},variant:{options:["empty","outlined","two_tones"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},paddingSize:{options:["none","xs","sm","md","lg","xl"],control:{type:"radio"}},borderRadiusSize:{options:["none","xs","sm","md","lg","xl"],control:{type:"radio"}}}},r={args:{color:p("secondary"),hue:c("main"),variant:m.EMPTY,shadowSize:2,paddingSize:d.MEDIUM,borderRadiusSize:void 0}};var t,i,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: ToColorType('secondary'),
    hue: ToColorHue('main'),
    variant: PaperVariant.EMPTY,
    shadowSize: 2,
    paddingSize: SpaceSize.MEDIUM,
    borderRadiusSize: undefined
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,f as default};
