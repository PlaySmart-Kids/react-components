import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as c}from"./index-BrnU7xv7.js";import{ae as d,af as o}from"./index-0JuUIpxl.js";import{B as n}from"./Button-Cm1yCUKV.js";import{c as s,M as l}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import a from"./Button.stories-Be6kA9fv.js";import"./iframe-BNRbnSEC.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./index-CikfRwdJ.js";function r(i){const t={code:"code",h1:"h1",h3:"h3",p:"p",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,title:"clients/ui/button/Button"}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"button-component",children:"Button Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Button"}),` component is designed to trigger an action or
event, typically using the `,e.jsx(t.code,{children:"onClick"})," prop. Here's an example of its usage."]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-button",children:"Basic Button"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Button"}),` is available in three variants: filled (default), outlined, and
text.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{variant:"filled",onClick:()=>alert("Filled button clicked!"),children:"Filled"}),e.jsx(n,{variant:"outlined",onClick:()=>alert("Outlined button clicked!"),children:"Outlined"}),e.jsx(n,{variant:"text",onClick:()=>alert("Text button clicked!"),children:"Text"})]}),e.jsx(o,{code:`
<Button variant="filled" onClick={() => alert('Filled button clicked!')}>Filled</Button>
<Button variant="outlined" onClick={() => alert('Outlined button clicked!')}>Outlined</Button>
<Button variant="text" onClick={() => alert('Text button clicked!')}>Text</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"color",children:"Color"}),e.jsxs(t.p,{children:["You can use the ",e.jsx(t.code,{children:"color"}),` prop to apply different color variants, representing
various button types. `,e.jsx(t.code,{children:"Primary"})," is the default color."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{color:"primary",children:"Primary"}),e.jsx(n,{color:"secondary",children:"Secondary"}),e.jsx(n,{color:"info",children:"Info"}),e.jsx(n,{color:"error",children:"Error"}),e.jsx(n,{color:"warning",children:"Warning"}),e.jsx(n,{color:"success",children:"Success"})]}),e.jsx(o,{code:`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"hue",children:"Hue"}),e.jsxs(t.p,{children:["You can customize the color tone of the ",e.jsx(t.code,{children:"Button"})," component by using the ",e.jsx(t.code,{children:"hue"}),`
prop, allowing you to select specific shades or tones that align with your design
requirements.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{hue:"lightest",children:"Lightest"}),e.jsx(n,{hue:"lighter",children:"Lighter"}),e.jsx(n,{hue:"light",children:"Light"}),e.jsx(n,{children:"Normal"}),e.jsx(n,{hue:"dark",children:"Dark"}),e.jsx(n,{hue:"darker",children:"Darker"}),e.jsx(n,{hue:"darkest",children:"Darkest"})]}),e.jsx(o,{code:`
<Button hue="lightest">Lightest</Button>
<Button hue="lighter">Lighter</Button>
<Button hue="light">Light</Button>
<Button>Normal</Button>
<Button hue="dark">Dark</Button>
<Button hue="darker">Darker</Button>
<Button hue="darkest">Darkest</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"size",children:"Size"}),e.jsxs(t.p,{children:["To adjust the size of the ",e.jsx(t.code,{children:"Button"})," component, use the ",e.jsx(t.code,{children:"size"})," prop."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{size:"small",children:"Small"}),e.jsx(n,{size:"normal",children:"Normal"}),e.jsx(n,{size:"large",children:"Large"})]}),e.jsx(o,{code:`
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="large">Large</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"button-with-icon-and-label",children:"Button with Icon and Label"}),e.jsxs(t.p,{children:["You can configure the ",e.jsx(t.code,{children:"Button"}),`'s icon and label in various ways, including arranging their positions with or without
the `,e.jsx(t.code,{children:"iconStart"})," and ",e.jsx(t.code,{children:"iconEnd"})," props. For icons, you can use ",e.jsx(t.code,{children:"MatIcon"})," or ",e.jsx(t.code,{children:"MatSymbol"}),` (Material
Icons/Symbols).`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{iconStart:e.jsx(s,{name:"home",size:16}),children:"Home"}),e.jsx(n,{iconEnd:e.jsx(s,{name:"home",size:16}),children:"Home"}),e.jsxs(n,{children:[e.jsx(l,{name:"home",size:16}),"Home"]}),e.jsxs(n,{children:["Home",e.jsx(l,{name:"home",size:16})]})]}),e.jsx(o,{code:`
<Button iconStart={<MatSymbol name={'home'} size={16}/>}>Home</Button>
<Button iconEnd={<MatSymbol name={'home'} size={16}/>}>Home</Button>

                    <Button><MatSymbol name={'home'} size={16}/>Home</Button>
                    <Button>Home<MatSymbol name={'home'} size={16}/></Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"full-width",children:"Full Width"}),e.jsxs(t.p,{children:["You can make the ",e.jsx(t.code,{children:"Button"})," extend to full width by setting the ",e.jsx(t.code,{children:"fullWidth"}),` prop
to `,e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),", depending on the size of its parent container."]}),e.jsx("div",{className:"grid-vertical full-width no-gap sb-unstyled",children:e.jsx(n,{fullWidth:!0,children:"Full Width"})}),e.jsx(o,{code:`
<Button fullWidth={true}>Full Width</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"shadow-size",children:"Shadow Size"}),e.jsxs(t.p,{children:["The shadow size of the ",e.jsx(t.code,{children:"Button"}),` is automatically determined by its overall size.
However, you can also customize it using the `,e.jsx(t.code,{children:"shadowSize"})," prop. By default, the shadow size is set to 4."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{color:"info",children:"Button 1"}),e.jsx(n,{color:"success",shadowSize:10,children:"Button 2"}),e.jsx(n,{color:"warning",shadowSize:18,children:"Button 3"})]}),e.jsx("br",{}),e.jsx(o,{code:`
<Button color={'info'}>Button 1</Button>
<Button color={'success'} shadowSize={10}>Button 2</Button>
<Button color={'warning'} shadowSize={18}>Button 3</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"compact",children:"Compact"}),e.jsxs(t.p,{children:["You can use the ",e.jsx(t.code,{children:"compact"})," prop to reduce the padding of the ",e.jsx(t.code,{children:"Button"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{children:"Normal"}),e.jsx(n,{compact:!0,children:"Compact"})]}),e.jsx(o,{code:`
<Button>Normal</Button>
<Button compact={true}>Compact</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(t.p,{children:["To enable or disable the ",e.jsx(t.code,{children:"Button"}),", use the ",e.jsx(t.code,{children:"disabled"})," prop with a value of ",e.jsx(t.code,{children:"true"}),`
or `,e.jsx(t.code,{children:"false"}),". By default, the button is enabled."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{disabled:!0,children:"Disabled"}),e.jsx(n,{children:"Enabled"})]}),e.jsx(o,{code:`
<Button disabled={true}>Disabled</Button>
<Button>Enabled</Button>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"ripple-effect",children:"Ripple Effect"}),e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"Button"}),` has a ripple effect when clicked. You can disable this
by setting `,e.jsx(t.code,{children:"noRippleEffect"})," to ",e.jsx(t.code,{children:"true"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(n,{children:"Button with Ripple Effect"}),e.jsx(n,{noRippleEffect:!0,children:"Button with no Ripple Effect"})]}),e.jsx(o,{code:`
<Button>Button with Ripple Effect</Button>
<Button noRippleEffect={true}>Button with no Ripple Effect</Button>
`,language:"tsx",dark:!0})]})]})}function E(i={}){const{wrapper:t}={...c(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{E as default};
