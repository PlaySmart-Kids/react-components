import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as l,af as s}from"./index-5tMK-v8p.js";import{I as o}from"./IconButton-6cAcpLD7.js";import{c as t,M as c}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import d from"./IconButton.stories-CUrGXBhE.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./index-CikfRwdJ.js";function r(a){const n={code:"code",h1:"h1",h3:"h3",p:"p",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d,title:"clients/ui/button/IconButton"}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h1,{id:"iconbutton-component",children:"IconButton Component"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"IconButton"}),` is a button that displays only an icon
without a text label, typically used for performing minor actions with a
single tap. Below is an example of how to use it.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"basic-iconbutton",children:"Basic IconButton"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"IconButton"})," is available in two variants: filled (default), and outlined. You can use ",e.jsx(n.code,{children:"MatIcon"})," or ",e.jsx(n.code,{children:"MatSymbol"}),`
(Material Icons/Symbols) to display the icons.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{variant:"filled",children:e.jsx(t,{name:"delete"})}),e.jsx(o,{variant:"outlined",children:e.jsx(t,{name:"delete"})}),e.jsx(o,{variant:"filled",children:e.jsx(c,{name:"delete"})}),e.jsx(o,{variant:"outlined",children:e.jsx(c,{name:"delete"})})]}),e.jsx(s,{code:`
<IconButton variant="filled"><MatIcon name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatIcon name={'delete'} /></IconButton>
<IconButton variant="filled"><MatSymbol name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatSymbol name={'delete'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"shape",children:"Shape"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"IconButton"}),` comes in three shapes: circle (default), rounded,
and rectangle.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{shape:"circle",children:e.jsx(t,{name:"search"})}),e.jsx(o,{shape:"rounded",children:e.jsx(t,{name:"search"})}),e.jsx(o,{shape:"rectangle",children:e.jsx(t,{name:"search"})})]}),e.jsx(s,{code:`
<IconButton shape="circle"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rounded"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rectangle"><MatIcon name={'search'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"color",children:"Color"}),e.jsxs(n.p,{children:["You can use the ",e.jsx(n.code,{children:"color"}),` prop to assign different color variants to represent various
button types. The `,e.jsx(n.code,{children:"primary"})," color is set as the default."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{color:"primary",children:e.jsx(t,{name:"search"})}),e.jsx(o,{color:"secondary",children:e.jsx(t,{name:"delete"})}),e.jsx(o,{color:"info",children:e.jsx(t,{name:"menu"})}),e.jsx(o,{color:"error",children:e.jsx(t,{name:"close"})}),e.jsx(o,{color:"warning",children:e.jsx(t,{name:"warning"})}),e.jsx(o,{color:"success",children:e.jsx(t,{name:"check"})})]}),e.jsx(s,{code:`
<IconButton color="primary"><MatIcon name={'search'} /></IconButton>
<IconButton color="secondary"><MatIcon name={'delete'} /></IconButton>
<IconButton color="info"><MatIcon name={'menu'} /></IconButton>
<IconButton color="error"><MatIcon name={'close'} /></IconButton>
<IconButton color="warning"><MatIcon name={'warning'} /></IconButton>
<IconButton color="success"><MatIcon name={'check'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"hue",children:"Hue"}),e.jsxs(n.p,{children:["You can adjust the color tone of the ",e.jsx(n.code,{children:"IconButton"}),` component using the
`,e.jsx(n.code,{children:"hue"}),` prop, which lets you choose specific shades or tones to match your
design needs.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{hue:"lightest",children:e.jsx(t,{name:"star"})}),e.jsx(o,{hue:"lighter",children:e.jsx(t,{name:"star"})}),e.jsx(o,{hue:"light",children:e.jsx(t,{name:"star"})}),e.jsx(o,{children:e.jsx(t,{name:"star"})}),e.jsx(o,{hue:"dark",children:e.jsx(t,{name:"star"})}),e.jsx(o,{hue:"darker",children:e.jsx(t,{name:"star"})}),e.jsx(o,{hue:"darkest",children:e.jsx(t,{name:"star"})})]}),e.jsx(s,{code:`
<IconButton hue="lightest"><MatIcon name={'star'} /></IconButton>
<IconButton hue="lighter"><MatIcon name={'star'} /></IconButton>
<IconButton hue="light"><MatIcon name={'star'} /></IconButton>
<IconButton><MatIcon name={'star'} /></IconButton>
<IconButton hue="dark"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darker"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darkest"><MatIcon name={'star'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"size",children:"Size"}),e.jsxs(n.p,{children:["To adjust the size of the ",e.jsx(n.code,{children:"IconButton"})," component, use the ",e.jsx(n.code,{children:"size"})," prop."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{size:"small",children:e.jsx(t,{name:"home"})}),e.jsx(o,{size:"normal",children:e.jsx(t,{name:"home"})}),e.jsx(o,{size:"large",children:e.jsx(t,{name:"home"})}),e.jsx(o,{size:"extra_large",children:e.jsx(t,{name:"home"})})]}),e.jsx(s,{code:`
<IconButton size="small"><MatIcon name={'home'} /></IconButton>
<IconButton size="normal"><MatIcon name={'home'} /></IconButton>
<IconButton size="large"><MatIcon name={'home'} /></IconButton>
<IconButton size="extra_large"><MatIcon name={'home'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"shadow-size",children:"Shadow Size"}),e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"IconButton"}),` has no shadow. The shadow size is automatically determined
by the button's overall size, but you can customize it using the `,e.jsx(n.code,{children:"shadowSize"}),` prop. The default setting for shadow
size is 4.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{color:"info",children:e.jsx(t,{name:"menu"})}),e.jsx(o,{color:"success",shadowSize:10,children:e.jsx(t,{name:"check"})}),e.jsx(o,{color:"warning",shadowSize:18,children:e.jsx(t,{name:"warning"})})]}),e.jsx("br",{}),e.jsx(s,{code:`
<IconButton color={'info'}><MatIcon name={'menu'} /></IconButton>
<IconButton color={'success'} shadowSize={10}><MatIcon name={'check'} /></IconButton>
<IconButton color={'warning'} shadowSize={18}><MatIcon name={'warning'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"enableddisabled-button",children:"Enabled/Disabled Button"}),e.jsxs(n.p,{children:["To enable or disable the ",e.jsx(n.code,{children:"IconButton"}),", use the ",e.jsx(n.code,{children:"disabled"}),` prop with a value of
`,e.jsx(n.code,{children:"true"})," or ",e.jsx(n.code,{children:"false"}),". By default, the button is enabled."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{disabled:!0,children:e.jsx(t,{name:"save"})}),e.jsx(o,{children:e.jsx(t,{name:"save"})})]}),e.jsx(s,{code:`
<IconButton disabled={true}><MatIcon name={'save'} /></IconButton>
<IconButton><MatIcon name={'save'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"transparent-background",children:"Transparent Background"}),e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"IconButton"}),` has a background color. To make the button transparent,
set `,e.jsx(n.code,{children:"startBgWithTransparent"})," to ",e.jsx(n.code,{children:"true"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{children:e.jsx(t,{name:"share"})}),e.jsx(o,{startBgWithTransparent:!0,children:e.jsx(t,{name:"share"})})]}),e.jsx(s,{code:`
<IconButton><MatIcon name={'share'} /></IconButton>
<IconButton startBgWithTransparent={true}><MatIcon name={'share'} /></IconButton>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"ripple-effect",children:"Ripple Effect"}),e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"IconButton"}),` has a ripple effect when
clicked. You can disable this by setting `,e.jsx(n.code,{children:"noRippleEffect"})," to ",e.jsx(n.code,{children:"true"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(o,{children:e.jsx(t,{name:"check"})}),e.jsx(o,{noRippleEffect:!0,children:e.jsx(t,{name:"close"})})]}),e.jsx(s,{code:`
<IconButton><MatIcon name={'check'} /></IconButton>
<IconButton noRippleEffect={true}><MatIcon name={'close'} /></IconButton>
`,language:"tsx",dark:!0})]})]})}function N(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{N as default};
