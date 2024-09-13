import{b as r,M as y,d as i}from"./index-DVow2ixS.js";import{B as o}from"./Button-C-RRGble.js";import{j as t,a as e,d as a,M as c,F as k}from"./Divider-DdokZ4G_.js";import"./index-BwDkhjyp.js";import{useMDXComponents as h}from"./index-BnapxFVb.js";import"./iframe-DCMQFdKf.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-DKEMF1mc.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-V2LljsIL.js";function u(l){const n=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},h(),l.components);return t(k,{children:[e(y,{title:"clients/ui/button/Button"}),`
`,t("div",{className:"preview-panel",children:[e(n.h1,{id:"button-component",children:"Button Component"}),t(n.p,{children:["The ",e(n.code,{children:"Button"})," component is designed to trigger an action or event, typically using the ",e(n.code,{children:"onClick"})," prop. Here's an example of its usage."]})]}),`
`,e(i,{name:"Basic Button",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"basic-button",children:["Basic Button",e("br",{}),e("br",{})]}),t(n.p,{children:["The ",e(n.code,{children:"Button"})," is available in three variants: filled (default), outlined, and text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",onClick:()=>alert("Filled button clicked!"),children:"Filled"}),e(o,{variant:"outlined",onClick:()=>alert("Outlined button clicked!"),children:"Outlined"}),e(o,{variant:"text",onClick:()=>alert("Text button clicked!"),children:"Text"})]}),e(r,{code:`
<Button variant="filled" onClick={() => alert('Filled button clicked!')}>Filled</Button>
<Button variant="outlined" onClick={() => alert('Outlined button clicked!')}>Outlined</Button>
<Button variant="text" onClick={() => alert('Text button clicked!')}>Text</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Color",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(n.p,{children:["You can use the ",e(n.code,{children:"color"})," prop to apply different color variants, representing various button types. ",e(n.code,{children:"Primary"})," is the default color.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",children:"Primary"}),e(o,{color:"secondary",children:"Secondary"}),e(o,{color:"info",children:"Info"}),e(o,{color:"error",children:"Error"}),e(o,{color:"warning",children:"Warning"}),e(o,{color:"success",children:"Success"})]}),e(r,{code:`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Hue",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t(n.p,{children:["You can customize the color tone of the ",e(n.code,{children:"Button"})," component by using the ",e(n.code,{children:"hue"})," prop, allowing you to select specific shades or tones that align with your design requirements.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",children:"Lightest"}),e(o,{hue:"lighter",children:"Lighter"}),e(o,{hue:"light",children:"Light"}),e(o,{children:"Normal"}),e(o,{hue:"dark",children:"Dark"}),e(o,{hue:"darker",children:"Darker"}),e(o,{hue:"darkest",children:"Darkest"})]}),e(r,{code:`
<Button hue="lightest">Lightest</Button>
<Button hue="lighter">Lighter</Button>
<Button hue="light">Light</Button>
<Button>Normal</Button>
<Button hue="dark">Dark</Button>
<Button hue="darker">Darker</Button>
<Button hue="darkest">Darkest</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Size",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),t(n.p,{children:["To adjust the size of the ",e(n.code,{children:"Button"})," component, use the ",e(n.code,{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",children:"Small"}),e(o,{size:"normal",children:"Normal"}),e(o,{size:"large",children:"Large"})]}),e(r,{code:`
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="large">Large</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Button with Icon and Label",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"button-with-icon-and-label",children:["Button with Icon and Label",e("br",{}),e("br",{})]}),t(n.p,{children:["You can configure the ",e(n.code,{children:"Button"}),"'s icon and label in various ways, including arranging their positions with or without the ",e(n.code,{children:"iconStart"})," and ",e(n.code,{children:"iconEnd"})," props. For icons, you can use ",e(n.code,{children:"MatIcon"})," or ",e(n.code,{children:"MatSymbol"})," (Material Icons/Symbols).",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{iconStart:e(a,{name:"home",size:16}),children:"Home"}),e(o,{iconEnd:e(a,{name:"home",size:16}),children:"Home"}),t(o,{children:[e(c,{name:"home",size:16}),"Home"]}),t(o,{children:["Home",e(c,{name:"home",size:16})]})]}),e(r,{code:`
<Button iconStart={<MatSymbol name={'home'} size={16}/>}>Home</Button>
<Button iconEnd={<MatSymbol name={'home'} size={16}/>}>Home</Button>

<Button><MatSymbol name={'home'} size={16}/>Home</Button>
<Button>Home<MatSymbol name={'home'} size={16}/></Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Full Width",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t(n.p,{children:["You can make the ",e(n.code,{children:"Button"})," extend to full width by setting the ",e(n.code,{children:"fullWidth"})," prop to ",e(n.code,{children:"true"})," or ",e(n.code,{children:"false"}),", depending on the size of its parent container.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,children:"Full Width"})}),e(r,{code:`
<Button fullWidth={true}>Full Width</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Shadow Size",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),t(n.p,{children:["The shadow size of the ",e(n.code,{children:"Button"})," is automatically determined by its overall size. However, you can also customize it using the ",e(n.code,{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{shadowSize:4,children:"Button"})}),e(r,{code:`
<Button shadowSize={4}>Button</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Compact",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"compact",children:["Compact",e("br",{}),e("br",{})]}),t(n.p,{children:["You can use the ",e(n.code,{children:"compact"})," prop to reduce the padding of the ",e(n.code,{children:"Button"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{children:"Normal"}),e(o,{compact:!0,children:"Compact"})]}),e(r,{code:`
<Button>Normal</Button>
<Button compact={true}>Compact</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Enabled/Disabled",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t(n.p,{children:["To enable or disable the ",e(n.code,{children:"Button"}),", use the ",e(n.code,{children:"disabled"})," prop with a value of ",e(n.code,{children:"true"})," or ",e(n.code,{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,children:"Disabled"}),e(o,{children:"Enabled"})]}),e(r,{code:`
<Button disabled={true}>Disabled</Button>
<Button>Enabled</Button>
`,language:"tsx",dark:!0})]})}),`
`,e(i,{name:"Ripple Effect",children:t("div",{className:"preview-panel",children:[t(n.h4,{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t(n.p,{children:["By default, the ",e(n.code,{children:"Button"})," has a ripple effect when clicked. You can disable this by setting ",e(n.code,{children:"noRippleEffect"})," to ",e(n.code,{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{children:"Button with Ripple Effect"}),e(o,{noRippleEffect:!0,children:"Button with no Ripple Effect"})]}),e(r,{code:`
<Button>Button with Ripple Effect</Button>
<Button noRippleEffect={true}>Button with no Ripple Effect</Button>
`,language:"tsx",dark:!0})]})})]})}function S(l={}){const{wrapper:n}=Object.assign({},h(),l.components);return n?e(n,{...l,children:e(u,{...l})}):u(l)}const s=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-button",children:["Basic Button",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"Button"})," is available in three variants: filled (default), outlined, and text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",onClick:()=>alert("Filled button clicked!"),children:"Filled"}),e(o,{variant:"outlined",onClick:()=>alert("Outlined button clicked!"),children:"Outlined"}),e(o,{variant:"text",onClick:()=>alert("Text button clicked!"),children:"Text"})]}),e(r,{code:`
<Button variant="filled" onClick={() => alert('Filled button clicked!')}>Filled</Button>
<Button variant="outlined" onClick={() => alert('Outlined button clicked!')}>Outlined</Button>
<Button variant="text" onClick={() => alert('Text button clicked!')}>Text</Button>
`,language:"tsx",dark:!0})]});s.storyName="Basic Button";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-button">{"Basic Button"}<br /><br /></h4><p>{"The "}<code>{"Button"}</code>{" is available in three variants: filled (default), outlined, and text."}<br /><br /></p><div className={"flex-horizontal"}><Button variant="filled" onClick={() => alert("Filled button clicked!")}>{"Filled"}</Button><Button variant="outlined" onClick={() => alert("Outlined button clicked!")}>{"Outlined"}</Button><Button variant="text" onClick={() => alert("Text button clicked!")}>{"Text"}</Button></div><Source code={\`
<Button variant="filled" onClick={() => alert('Filled button clicked!')}>Filled</Button>
<Button variant="outlined" onClick={() => alert('Outlined button clicked!')}>Outlined</Button>
<Button variant="text" onClick={() => alert('Text button clicked!')}>Text</Button>
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["You can use the ",e("code",{children:"color"})," prop to apply different color variants, representing various button types. ",e("code",{children:"Primary"})," is the default color.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",children:"Primary"}),e(o,{color:"secondary",children:"Secondary"}),e(o,{color:"info",children:"Info"}),e(o,{color:"error",children:"Error"}),e(o,{color:"warning",children:"Warning"}),e(o,{color:"success",children:"Success"})]}),e(r,{code:`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
`,language:"tsx",dark:!0})]});p.storyName="Color";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"You can use the "}<code>{"color"}</code>{" prop to apply different color variants, representing various button types. "}<code>{"Primary"}</code>{" is the default color."}<br /><br /></p><div className={"flex-horizontal"}><Button color="primary">{"Primary"}</Button><Button color="secondary">{"Secondary"}</Button><Button color="info">{"Info"}</Button><Button color="error">{"Error"}</Button><Button color="warning">{"Warning"}</Button><Button color="success">{"Success"}</Button></div><Source code={\`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
\`} language={"tsx"} dark={true} /></div>`}};const B=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t("p",{children:["You can customize the color tone of the ",e("code",{children:"Button"})," component by using the ",e("code",{children:"hue"})," prop, allowing you to select specific shades or tones that align with your design requirements.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",children:"Lightest"}),e(o,{hue:"lighter",children:"Lighter"}),e(o,{hue:"light",children:"Light"}),e(o,{children:"Normal"}),e(o,{hue:"dark",children:"Dark"}),e(o,{hue:"darker",children:"Darker"}),e(o,{hue:"darkest",children:"Darkest"})]}),e(r,{code:`
<Button hue="lightest">Lightest</Button>
<Button hue="lighter">Lighter</Button>
<Button hue="light">Light</Button>
<Button>Normal</Button>
<Button hue="dark">Dark</Button>
<Button hue="darker">Darker</Button>
<Button hue="darkest">Darkest</Button>
`,language:"tsx",dark:!0})]});B.storyName="Hue";B.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"You can customize the color tone of the "}<code>{"Button"}</code>{" component by using the "}<code>{"hue"}</code>{" prop, allowing you to select specific shades or tones that align with your design requirements."}<br /><br /></p><div className={"flex-horizontal"}><Button hue="lightest">{"Lightest"}</Button><Button hue="lighter">{"Lighter"}</Button><Button hue="light">{"Light"}</Button><Button>{"Normal"}</Button><Button hue="dark">{"Dark"}</Button><Button hue="darker">{"Darker"}</Button><Button hue="darkest">{"Darkest"}</Button></div><Source code={\`
<Button hue="lightest">Lightest</Button>
<Button hue="lighter">Lighter</Button>
<Button hue="light">Light</Button>
<Button>Normal</Button>
<Button hue="dark">Dark</Button>
<Button hue="darker">Darker</Button>
<Button hue="darkest">Darkest</Button>
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),t("p",{children:["To adjust the size of the ",e("code",{children:"Button"})," component, use the ",e("code",{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",children:"Small"}),e(o,{size:"normal",children:"Normal"}),e(o,{size:"large",children:"Large"})]}),e(r,{code:`
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="large">Large</Button>
`,language:"tsx",dark:!0})]});m.storyName="Size";m.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"To adjust the size of the "}<code>{"Button"}</code>{" component, use the "}<code>{"size"}</code>{" prop."}<br /><br /></p><div className={"flex-horizontal"}><Button size="small">{"Small"}</Button><Button size="normal">{"Normal"}</Button><Button size="large">{"Large"}</Button></div><Source code={\`
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="large">Large</Button>
\`} language={"tsx"} dark={true} /></div>`}};const b=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"button-with-icon-and-label",children:["Button with Icon and Label",e("br",{}),e("br",{})]}),t("p",{children:["You can configure the ",e("code",{children:"Button"}),"'s icon and label in various ways, including arranging their positions with or without the ",e("code",{children:"iconStart"})," and ",e("code",{children:"iconEnd"})," props. For icons, you can use ",e("code",{children:"MatIcon"})," or ",e("code",{children:"MatSymbol"})," (Material Icons/Symbols).",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{iconStart:e(a,{name:"home",size:16}),children:"Home"}),e(o,{iconEnd:e(a,{name:"home",size:16}),children:"Home"}),t(o,{children:[e(c,{name:"home",size:16}),"Home"]}),t(o,{children:["Home",e(c,{name:"home",size:16})]})]}),e(r,{code:`
<Button iconStart={<MatSymbol name={'home'} size={16}/>}>Home</Button>
<Button iconEnd={<MatSymbol name={'home'} size={16}/>}>Home</Button>

<Button><MatSymbol name={'home'} size={16}/>Home</Button>
<Button>Home<MatSymbol name={'home'} size={16}/></Button>
`,language:"tsx",dark:!0})]});b.storyName="Button with Icon and Label";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="button-with-icon-and-label">{"Button with Icon and Label"}<br /><br /></h4><p>{"You can configure the "}<code>{"Button"}</code>{"'s icon and label in various ways, including arranging their positions with or without the "}<code>{"iconStart"}</code>{" and "}<code>{"iconEnd"}</code>{" props. For icons, you can use "}<code>{"MatIcon"}</code>{" or "}<code>{"MatSymbol"}</code>{" (Material Icons/Symbols)."}<br /><br /></p><div className={"flex-horizontal"}><Button iconStart={<MatIcon name={"home"} size={16} />}>{"Home"}</Button><Button iconEnd={<MatIcon name={"home"} size={16} />}>{"Home"}</Button><Button><MatSymbol name={"home"} size={16} />{"Home"}</Button><Button>{"Home"}<MatSymbol name={"home"} size={16} /></Button></div><Source code={\`
<Button iconStart={<MatSymbol name={'home'} size={16}/>}>Home</Button>
<Button iconEnd={<MatSymbol name={'home'} size={16}/>}>Home</Button>

<Button><MatSymbol name={'home'} size={16}/>Home</Button>
<Button>Home<MatSymbol name={'home'} size={16}/></Button>
\`} language={"tsx"} dark={true} /></div>`}};const f=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t("p",{children:["You can make the ",e("code",{children:"Button"})," extend to full width by setting the ",e("code",{children:"fullWidth"})," prop to ",e("code",{children:"true"})," or ",e("code",{children:"false"}),", depending on the size of its parent container.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,children:"Full Width"})}),e(r,{code:`
<Button fullWidth={true}>Full Width</Button>
`,language:"tsx",dark:!0})]});f.storyName="Full Width";f.parameters={storySource:{source:'<div className={"preview-panel"}><h4 id="full-width">{"Full Width"}<br /><br /></h4><p>{"You can make the "}<code>{"Button"}</code>{" extend to full width by setting the "}<code>{"fullWidth"}</code>{" prop to "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{", depending on the size of its parent container."}<br /><br /></p><div className={"grid-vertical full-width"}><Button fullWidth={true}>{"Full Width"}</Button></div><Source code={`\n<Button fullWidth={true}>Full Width</Button>\n`} language={"tsx"} dark={true} /></div>'}};const g=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),t("p",{children:["The shadow size of the ",e("code",{children:"Button"})," is automatically determined by its overall size. However, you can also customize it using the ",e("code",{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{shadowSize:4,children:"Button"})}),e(r,{code:`
<Button shadowSize={4}>Button</Button>
`,language:"tsx",dark:!0})]});g.storyName="Shadow Size";g.parameters={storySource:{source:'<div className={"preview-panel"}><h4 id="shadow-size">{"Shadow Size"}<br /><br /></h4><p>{"The shadow size of the "}<code>{"Button"}</code>{" is automatically determined by its overall size. However, you can also customize it using the "}<code>{"shadowSize"}</code>{" prop."}<br /><br /></p><div className={"grid-vertical full-width"}><Button shadowSize={4}>{"Button"}</Button></div><Source code={`\n<Button shadowSize={4}>Button</Button>\n`} language={"tsx"} dark={true} /></div>'}};const v=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"compact",children:["Compact",e("br",{}),e("br",{})]}),t("p",{children:["You can use the ",e("code",{children:"compact"})," prop to reduce the padding of the ",e("code",{children:"Button"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{children:"Normal"}),e(o,{compact:!0,children:"Compact"})]}),e(r,{code:`
<Button>Normal</Button>
<Button compact={true}>Compact</Button>
`,language:"tsx",dark:!0})]});v.storyName="Compact";v.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="compact">{"Compact"}<br /><br /></h4><p>{"You can use the "}<code>{"compact"}</code>{" prop to reduce the padding of the "}<code>{"Button"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><Button>{"Normal"}</Button><Button compact={true}>{"Compact"}</Button></div><Source code={\`
<Button>Normal</Button>
<Button compact={true}>Compact</Button>
\`} language={"tsx"} dark={true} /></div>`}};const z=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t("p",{children:["To enable or disable the ",e("code",{children:"Button"}),", use the ",e("code",{children:"disabled"})," prop with a value of ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,children:"Disabled"}),e(o,{children:"Enabled"})]}),e(r,{code:`
<Button disabled={true}>Disabled</Button>
<Button>Enabled</Button>
`,language:"tsx",dark:!0})]});z.storyName="Enabled/Disabled";z.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled">{"Enabled/Disabled"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"Button"}</code>{", use the "}<code>{"disabled"}</code>{" prop with a value of "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the button is enabled."}<br /><br /></p><div className={"flex-horizontal"}><Button disabled={true}>{"Disabled"}</Button><Button>{"Enabled"}</Button></div><Source code={\`
<Button disabled={true}>Disabled</Button>
<Button>Enabled</Button>
\`} language={"tsx"} dark={true} /></div>`}};const w=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t("p",{children:["By default, the ",e("code",{children:"Button"})," has a ripple effect when clicked. You can disable this by setting ",e("code",{children:"noRippleEffect"})," to ",e("code",{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{children:"Button with Ripple Effect"}),e(o,{noRippleEffect:!0,children:"Button with no Ripple Effect"})]}),e(r,{code:`
<Button>Button with Ripple Effect</Button>
<Button noRippleEffect={true}>Button with no Ripple Effect</Button>
`,language:"tsx",dark:!0})]});w.storyName="Ripple Effect";w.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"Button"}</code>{" has a ripple effect when clicked. You can disable this by setting "}<code>{"noRippleEffect"}</code>{" to "}<code>{"true"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><Button>{"Button with Ripple Effect"}</Button><Button noRippleEffect={true}>{"Button with no Ripple Effect"}</Button></div><Source code={\`
<Button>Button with Ripple Effect</Button>
<Button noRippleEffect={true}>Button with no Ripple Effect</Button>
\`} language={"tsx"} dark={true} /></div>`}};const d={title:"clients/ui/button/Button",tags:["stories-mdx"],includeStories:["basicButton","color","hue","size","buttonWithIconAndLabel","fullWidth","shadowSize","compact","enabledDisabled","rippleEffect"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:S};const P=["basicButton","color","hue","size","buttonWithIconAndLabel","fullWidth","shadowSize","compact","enabledDisabled","rippleEffect"];export{P as __namedExportsOrder,s as basicButton,b as buttonWithIconAndLabel,p as color,v as compact,d as default,z as enabledDisabled,f as fullWidth,B as hue,w as rippleEffect,g as shadowSize,m as size};
