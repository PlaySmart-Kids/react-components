import{a as e,f as l,g as p,E as c,j as a,T as n,P as m,c as h}from"./Divider-DdokZ4G_.js";import"./index-BwDkhjyp.js";import{D as g}from"./DefaultThemeProvider-DWbcdqGt.js";import"./_commonjsHelpers-BosuxZz1.js";var d=(o=>(o.EXTRA_SMALL="xs",o.SMALL="sm",o.MEDIUM="md",o.LARGE="lg",o.EXTRA_LARGE="xl",o))(d||{});function u(o){return a("div",{style:{padding:"24px"},children:[a(n,{component:"h4",className:"title-space",children:["Paper demo",e(n,{component:"span",variant:"heading6",children:" (using controls to change properties of this widget)"})]}),e("div",{className:"demo-panel",children:e(m,{...o,style:{width:"200px",height:"200px"},children:e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},className:h[`Border-Radius-${o.borderRadiusSize}`],children:"[Component]"})})})]})}const E={component:u,decorators:[o=>e(g,{children:e(o,{})})],argTypes:{shadowSize:{options:[0,1,2,4,8,12,16,20,24],control:{type:"radio"}},color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},variant:{options:["empty","outlined","two_tones"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},paddingSize:{options:["none","xs","sm","md","lg","xl"],control:{type:"radio"}},borderRadiusSize:{options:["none","xs","sm","md","lg","xl"],control:{type:"radio"}}}},r={args:{color:l("secondary"),hue:p("main"),variant:c.EMPTY,shadowSize:2,paddingSize:d.MEDIUM,borderRadiusSize:void 0}};var t,i,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: ToColorType('secondary'),
    hue: ToColorHue('main'),
    variant: PaperVariant.EMPTY,
    shadowSize: 2,
    paddingSize: SpaceSize.MEDIUM,
    borderRadiusSize: undefined
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,E as default};
