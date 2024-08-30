import{b as r,M as v,d as l}from"./index-BM8NPndo.js";import{B as o}from"./Button-DZS6UzoU.js";import{a as t,j as e,M as i,F as f}from"./DefaultThemeProvider-D8uc623f.js";import"./index-BwDkhjyp.js";import{useMDXComponents as c}from"./index-BnapxFVb.js";import"./iframe-BUcK-9rz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-Bbwy-7Wp.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-gxOE-J9K.js";function u(a){const n=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},c(),a.components);return t(f,{children:[e(v,{title:"clients/ui/button/Button"}),`
`,t("div",{className:"preview-panel",children:[e(n.h1,{id:"button-component",children:"Button Component"}),t(n.p,{children:["The ",e(n.code,{children:"Button"})," component is designed to trigger an action or event. Here's an example of its usage."]})]}),`
`,e(l,{name:"Basic Button",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"basic-button",children:["Basic Button",e("br",{}),e("br",{})]}),t(n.p,{children:["The ",e(n.code,{children:"Button"})," is available in three variants: filled (default), outlined, and text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",children:"Filled"}),e(o,{variant:"outlined",children:"Outlined"}),e(o,{variant:"text",children:"Text"})]}),e(r,{code:`
<Button variant="filled">Filled</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Color",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(n.p,{children:["You can use the ",e(n.code,{children:"color"})," prop to apply different color variants, representing various button types.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",children:"Primary"}),e(o,{color:"secondary",children:"Secondary"}),e(o,{color:"info",children:"Info"}),e(o,{color:"error",children:"Error"}),e(o,{color:"warning",children:"Warning"}),e(o,{color:"success",children:"Success"})]}),e(r,{code:`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Size",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),t(n.p,{children:["To adjust the size of the ",e(n.code,{children:"Button"})," component, use the ",e(n.code,{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",children:"Small"}),e(o,{size:"normal",children:"Normal"}),e(o,{size:"large",children:"Large"})]}),e(r,{code:`
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="large">Large</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Hue",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t(n.p,{children:["You can customize the color tone of the ",e(n.code,{children:"Button"})," component by using the ",e(n.code,{children:"hue"})," prop, allowing you to select specific shades or tones that align with your design requirements.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",children:"Lightest"}),e(o,{hue:"lighter",children:"Lighter"}),e(o,{hue:"light",children:"Light"}),e(o,{children:"Normal"}),e(o,{hue:"dark",children:"Dark"}),e(o,{hue:"darker",children:"Darker"}),e(o,{hue:"darkest",children:"Darkest"})]}),e(r,{code:`
<Button hue="lightest">Lightest</Button>
<Button hue="lighter">Lighter</Button>
<Button hue="light">Light</Button>
<Button>Normal</Button>
<Button hue="dark">Dark</Button>
<Button hue="darker">Darker</Button>
<Button hue="darkest">Darkest</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Button with Icon and Label",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"button-with-icon-and-label",children:["Button with Icon and Label",e("br",{}),e("br",{})]}),t(n.p,{children:["You can configure the ",e(n.code,{children:"Button"}),"'s icon and label in various ways, including arranging their positions with or without the ",e(n.code,{children:"iconStart"})," and ",e(n.code,{children:"iconEnd"})," props.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{iconStart:e(i,{name:"home",size:16}),children:"Home"}),e(o,{iconEnd:e(i,{name:"home",size:16}),children:"Home"}),t(o,{children:[e(i,{name:"home",size:16}),"Home"]}),t(o,{children:["Home",e(i,{name:"home",size:16})]})]}),e(r,{code:`
<Button iconStart={<MatSymbol name={'home'} size={16}/>}>Home</Button>
<Button iconEnd={<MatSymbol name={'home'} size={16}/>}>Home</Button>

<Button><MatSymbol name={'home'} size={16}/>Home</Button>
<Button>Home<MatSymbol name={'home'} size={16}/></Button>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Full Width",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t(n.p,{children:["You can make the ",e(n.code,{children:"Button"})," extend to full width by setting the ",e(n.code,{children:"fullWidth"})," prop to ",e(n.code,{children:"true"})," or ",e(n.code,{children:"false"}),", depending on the size of its parent container.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,children:"Full Width"})}),e(r,{code:`
<Button fullWidth={true}>Full Width</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Enabled/Disabled Button",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t(n.p,{children:["To enable or disable the ",e(n.code,{children:"Button"}),", use the ",e(n.code,{children:"disabled"})," prop with a value of ",e(n.code,{children:"true"})," or ",e(n.code,{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,children:"Disabled"}),e(o,{children:"Enabled"})]}),e(r,{code:`
<Button disabled={true}>Disabled</Button>
<Button>Enabled</Button>
`,language:"tsx",dark:!0})]})})]})}function z(a={}){const{wrapper:n}=Object.assign({},c(),a.components);return n?e(n,{...a,children:e(u,{...a})}):u(a)}const s=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-button",children:["Basic Button",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"Button"})," is available in three variants: filled (default), outlined, and text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",children:"Filled"}),e(o,{variant:"outlined",children:"Outlined"}),e(o,{variant:"text",children:"Text"})]}),e(r,{code:`
<Button variant="filled">Filled</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
`,language:"tsx",dark:!0})]});s.storyName="Basic Button";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-button">{"Basic Button"}<br /><br /></h4><p>{"The "}<code>{"Button"}</code>{" is available in three variants: filled (default), outlined, and text."}<br /><br /></p><div className={"flex-horizontal"}><Button variant="filled">{"Filled"}</Button><Button variant="outlined">{"Outlined"}</Button><Button variant="text">{"Text"}</Button></div><Source code={\`
<Button variant="filled">Filled</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
\`} language={"tsx"} dark={true} /></div>`}};const h=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["You can use the ",e("code",{children:"color"})," prop to apply different color variants, representing various button types.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",children:"Primary"}),e(o,{color:"secondary",children:"Secondary"}),e(o,{color:"info",children:"Info"}),e(o,{color:"error",children:"Error"}),e(o,{color:"warning",children:"Warning"}),e(o,{color:"success",children:"Success"})]}),e(r,{code:`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
`,language:"tsx",dark:!0})]});h.storyName="Color";h.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"You can use the "}<code>{"color"}</code>{" prop to apply different color variants, representing various button types."}<br /><br /></p><div className={"flex-horizontal"}><Button color="primary">{"Primary"}</Button><Button color="secondary">{"Secondary"}</Button><Button color="info">{"Info"}</Button><Button color="error">{"Error"}</Button><Button color="warning">{"Warning"}</Button><Button color="success">{"Success"}</Button></div><Source code={\`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
\`} language={"tsx"} dark={true} /></div>`}};const B=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),t("p",{children:["To adjust the size of the ",e("code",{children:"Button"})," component, use the ",e("code",{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",children:"Small"}),e(o,{size:"normal",children:"Normal"}),e(o,{size:"large",children:"Large"})]}),e(r,{code:`
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="large">Large</Button>
`,language:"tsx",dark:!0})]});B.storyName="Size";B.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"To adjust the size of the "}<code>{"Button"}</code>{" component, use the "}<code>{"size"}</code>{" prop."}<br /><br /></p><div className={"flex-horizontal"}><Button size="small">{"Small"}</Button><Button size="normal">{"Normal"}</Button><Button size="large">{"Large"}</Button></div><Source code={\`
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="large">Large</Button>
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t("p",{children:["You can customize the color tone of the ",e("code",{children:"Button"})," component by using the ",e("code",{children:"hue"})," prop, allowing you to select specific shades or tones that align with your design requirements.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",children:"Lightest"}),e(o,{hue:"lighter",children:"Lighter"}),e(o,{hue:"light",children:"Light"}),e(o,{children:"Normal"}),e(o,{hue:"dark",children:"Dark"}),e(o,{hue:"darker",children:"Darker"}),e(o,{hue:"darkest",children:"Darkest"})]}),e(r,{code:`
<Button hue="lightest">Lightest</Button>
<Button hue="lighter">Lighter</Button>
<Button hue="light">Light</Button>
<Button>Normal</Button>
<Button hue="dark">Dark</Button>
<Button hue="darker">Darker</Button>
<Button hue="darkest">Darkest</Button>
`,language:"tsx",dark:!0})]});m.storyName="Hue";m.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"You can customize the color tone of the "}<code>{"Button"}</code>{" component by using the "}<code>{"hue"}</code>{" prop, allowing you to select specific shades or tones that align with your design requirements."}<br /><br /></p><div className={"flex-horizontal"}><Button hue="lightest">{"Lightest"}</Button><Button hue="lighter">{"Lighter"}</Button><Button hue="light">{"Light"}</Button><Button>{"Normal"}</Button><Button hue="dark">{"Dark"}</Button><Button hue="darker">{"Darker"}</Button><Button hue="darkest">{"Darkest"}</Button></div><Source code={\`
<Button hue="lightest">Lightest</Button>
<Button hue="lighter">Lighter</Button>
<Button hue="light">Light</Button>
<Button>Normal</Button>
<Button hue="dark">Dark</Button>
<Button hue="darker">Darker</Button>
<Button hue="darkest">Darkest</Button>
\`} language={"tsx"} dark={true} /></div>`}};const b=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"button-with-icon-and-label",children:["Button with Icon and Label",e("br",{}),e("br",{})]}),t("p",{children:["You can configure the ",e("code",{children:"Button"}),"'s icon and label in various ways, including arranging their positions with or without the ",e("code",{children:"iconStart"})," and ",e("code",{children:"iconEnd"})," props.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{iconStart:e(i,{name:"home",size:16}),children:"Home"}),e(o,{iconEnd:e(i,{name:"home",size:16}),children:"Home"}),t(o,{children:[e(i,{name:"home",size:16}),"Home"]}),t(o,{children:["Home",e(i,{name:"home",size:16})]})]}),e(r,{code:`
<Button iconStart={<MatSymbol name={'home'} size={16}/>}>Home</Button>
<Button iconEnd={<MatSymbol name={'home'} size={16}/>}>Home</Button>

<Button><MatSymbol name={'home'} size={16}/>Home</Button>
<Button>Home<MatSymbol name={'home'} size={16}/></Button>
`,language:"tsx",dark:!0})]});b.storyName="Button with Icon and Label";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="button-with-icon-and-label">{"Button with Icon and Label"}<br /><br /></h4><p>{"You can configure the "}<code>{"Button"}</code>{"'s icon and label in various ways, including arranging their positions with or without the "}<code>{"iconStart"}</code>{" and "}<code>{"iconEnd"}</code>{" props."}<br /><br /></p><div className={"flex-horizontal"}><Button iconStart={<MatSymbol name={"home"} size={16} />}>{"Home"}</Button><Button iconEnd={<MatSymbol name={"home"} size={16} />}>{"Home"}</Button><Button><MatSymbol name={"home"} size={16} />{"Home"}</Button><Button>{"Home"}<MatSymbol name={"home"} size={16} /></Button></div><Source code={\`
<Button iconStart={<MatSymbol name={'home'} size={16}/>}>Home</Button>
<Button iconEnd={<MatSymbol name={'home'} size={16}/>}>Home</Button>

<Button><MatSymbol name={'home'} size={16}/>Home</Button>
<Button>Home<MatSymbol name={'home'} size={16}/></Button>
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t("p",{children:["You can make the ",e("code",{children:"Button"})," extend to full width by setting the ",e("code",{children:"fullWidth"})," prop to ",e("code",{children:"true"})," or ",e("code",{children:"false"}),", depending on the size of its parent container.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,children:"Full Width"})}),e(r,{code:`
<Button fullWidth={true}>Full Width</Button>
`,language:"tsx",dark:!0})]});p.storyName="Full Width";p.parameters={storySource:{source:'<div className={"preview-panel"}><h4 id="full-width">{"Full Width"}<br /><br /></h4><p>{"You can make the "}<code>{"Button"}</code>{" extend to full width by setting the "}<code>{"fullWidth"}</code>{" prop to "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{", depending on the size of its parent container."}<br /><br /></p><div className={"grid-vertical full-width"}><Button fullWidth={true}>{"Full Width"}</Button></div><Source code={`\n<Button fullWidth={true}>Full Width</Button>\n`} language={"tsx"} dark={true} /></div>'}};const g=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t("p",{children:["To enable or disable the ",e("code",{children:"Button"}),", use the ",e("code",{children:"disabled"})," prop with a value of ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,children:"Disabled"}),e(o,{children:"Enabled"})]}),e(r,{code:`
<Button disabled={true}>Disabled</Button>
<Button>Enabled</Button>
`,language:"tsx",dark:!0})]});g.storyName="Enabled/Disabled Button";g.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled-button">{"Enabled/Disabled Button"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"Button"}</code>{", use the "}<code>{"disabled"}</code>{" prop with a value of "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the button is enabled."}<br /><br /></p><div className={"flex-horizontal"}><Button disabled={true}>{"Disabled"}</Button><Button>{"Enabled"}</Button></div><Source code={\`
<Button disabled={true}>Disabled</Button>
<Button>Enabled</Button>
\`} language={"tsx"} dark={true} /></div>`}};const d={title:"clients/ui/button/Button",tags:["stories-mdx"],includeStories:["basicButton","color","size","hue","buttonWithIconAndLabel","fullWidth","enabledDisabledButton"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:z};const Y=["basicButton","color","size","hue","buttonWithIconAndLabel","fullWidth","enabledDisabledButton"];export{Y as __namedExportsOrder,s as basicButton,b as buttonWithIconAndLabel,h as color,d as default,g as enabledDisabledButton,p as fullWidth,m as hue,B as size};
