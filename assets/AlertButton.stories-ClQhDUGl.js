import{b as l,M as A,d as n}from"./index-D8Bq1aUh.js";import{B as v}from"./Button-Bqv8ahTI.js";import{A as o}from"./AlertButton-CEMVheh8.js";import{j as t,a as e,F as y,T as u}from"./DefaultThemeProvider-DbvuuPiG.js";import"./index-BwDkhjyp.js";import{useMDXComponents as c}from"./index-BnapxFVb.js";import"./iframe-CIX_G1sr.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-CLSESEbx.js";import"./ActionBar-CP_E9YHA.js";function d(a){const r=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},c(),a.components);return t(y,{children:[e(A,{title:"clients/ui/button/AlertButton"}),`
`,t("div",{className:"preview-panel",children:[e(r.h1,{id:"alertbutton-component",children:"AlertButton Component"}),t(r.p,{children:["The ",e(r.code,{children:"AlertButton"})," component is designed to create an alert dialog. You can add ",e(r.code,{children:"child components"})," to display the title, message, or buttons, allowing you to control and customize the dialog's behavior. Here's an example of how to use it."]}),e("div",{className:"flex-horizontal",children:t(o,{buttonLabel:"Button",children:[e(u,{variant:"heading4",children:"Title"}),e("br",{}),e(u,{variant:"body1",color:"secondary",children:e(r.p,{children:"This is the message!"})}),e("br",{}),e(v,{fullWidth:!0,color:"success",children:"OK"})]})}),e(l,{code:`
<AlertButton buttonLabel={"Button"}>
  <Typography variant={'heading4'}>Title</Typography>
  <br />
  <Typography variant={'body1'} color={'secondary'}>
    This is the message!
  </Typography>
  <br />
  <Button fullWidth={true} color={'success'}>OK</Button>
</AlertButton>
`,language:"tsx",dark:!0})]}),`
`,e(n,{name:"Basic AlertButton",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"basic-alertbutton",children:["Basic AlertButton",e("br",{}),e("br",{})]}),t(r.p,{children:["The ",e(r.code,{children:"AlertButton"})," is offered in three variants: filled (default), outlined, and text. The ",e(r.code,{children:"buttonLabel"})," prop allows you to set the button's text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",buttonLabel:"Filled"}),e(o,{variant:"outlined",buttonLabel:"Outlined"}),e(o,{variant:"text",buttonLabel:"Text"})]}),e(l,{code:`
<AlertButton variant="filled" buttonLabel={"Filled"} />
<AlertButton variant="outlined" buttonLabel={"Outlined"} />
<AlertButton variant="text" buttonLabel={"Text"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Color",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(r.p,{children:["The ",e(r.code,{children:"color"})," prop lets you apply different color variants to represent various button types, with ",e(r.code,{children:"Primary"})," being the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",buttonLabel:"Primary"}),e(o,{color:"secondary",buttonLabel:"Secondary"}),e(o,{color:"info",buttonLabel:"Info"}),e(o,{color:"error",buttonLabel:"Error"}),e(o,{color:"warning",buttonLabel:"Warning"}),e(o,{color:"success",buttonLabel:"Success"})]}),e(l,{code:`
<AlertButton color="primary" buttonLabel={"Primary"} />
<AlertButton color="secondary" buttonLabel={"Secondary"} />
<AlertButton color="info" buttonLabel={"Info"} />
<AlertButton color="error" buttonLabel={"Error"} />
<AlertButton color="warning" buttonLabel={"Warning"} />
<AlertButton color="success" buttonLabel={"Success"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Hue",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t(r.p,{children:["You can customize the color tone of the ",e(r.code,{children:"AlertButton"})," component using the ",e(r.code,{children:"hue"})," prop, enabling you to select specific shades or tones that match your design needs.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",buttonLabel:"Lightest"}),e(o,{hue:"lighter",buttonLabel:"Lighter"}),e(o,{hue:"light",buttonLabel:"Light"}),e(o,{buttonLabel:"Normal"}),e(o,{hue:"dark",buttonLabel:"Dark"}),e(o,{hue:"darker",buttonLabel:"Darker"}),e(o,{hue:"darkest",buttonLabel:"Darkest"})]}),e(l,{code:`
<AlertButton hue="lightest" buttonLabel={"Lightest"} />
<AlertButton hue="lighter" buttonLabel={"Lighter"} />
<AlertButton hue="light" buttonLabel={"Light"} />
<AlertButton buttonLabel={"Normal"} />
<AlertButton hue="dark" buttonLabel={"Dark"} />
<AlertButton hue="darker" buttonLabel={"Darker"} />
<AlertButton hue="darkest" buttonLabel={"Darkest"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Size",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),t(r.p,{children:["Use the ",e(r.code,{children:"size"})," prop to adjust the ",e(r.code,{children:"AlertButton"})," component's size.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",buttonLabel:"Small"}),e(o,{size:"normal",buttonLabel:"Normal"}),e(o,{size:"large",buttonLabel:"Large"})]}),e(l,{code:`
<AlertButton size="small" buttonLabel={"Small"} />
<AlertButton size="normal" buttonLabel={"Normal"} />
<AlertButton size="large" buttonLabel={"Large"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Full Width",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t(r.p,{children:["You can make the ",e(r.code,{children:"AlertButton"})," span the full width of its parent container by setting the ",e(r.code,{children:"fullWidth"})," prop to ",e(r.code,{children:"true"})," or ",e(r.code,{children:"false"}),".",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,buttonLabel:"Full Width"})}),e(l,{code:`
<AlertButton fullWidth={true} buttonLabel={"Full Width"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Shadow Size",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),t(r.p,{children:["The shadow size of the ",e(r.code,{children:"AlertButton"})," is automatically adjusted based on its overall size, but you can customize it further using the ",e(r.code,{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{shadowSize:4,buttonLabel:"Button"})}),e(l,{code:`
<AlertButton shadowSize={4} buttonLabel={"Button"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Compact",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"compact",children:["Compact",e("br",{}),e("br",{})]}),t(r.p,{children:["Use the ",e(r.code,{children:"compact"})," prop to reduce the padding of the ",e(r.code,{children:"AlertButton"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Normal"}),e(o,{compact:!0,buttonLabel:"Compact"})]}),e(l,{code:`
<AlertButton buttonLabel={"Normal"} />
<AlertButton compact={true} buttonLabel={"Compact"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Enabled/Disabled Button",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t(r.p,{children:["To enable or disable the ",e(r.code,{children:"AlertButton"}),", set the ",e(r.code,{children:"disabled"})," prop to ",e(r.code,{children:"true"})," or ",e(r.code,{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,buttonLabel:"Disabled"}),e(o,{buttonLabel:"Enabled"})]}),e(l,{code:`
<AlertButton disabled={true} buttonLabel={"Disabled"} />
<AlertButton buttonLabel={"Enabled"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Ripple Effect",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t(r.p,{children:["By default, the ",e(r.code,{children:"AlertButton"})," includes a ripple effect when clicked. To disable this effect, set ",e(r.code,{children:"noRippleEffect"})," prop to ",e(r.code,{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Button with Ripple Effect"}),e(o,{noRippleEffect:!0,buttonLabel:"Button with no Ripple Effect"})]}),e(l,{code:`
<AlertButton buttonLabel={"Button with Ripple Effect"} />
<AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} />
`,language:"tsx",dark:!0})]})})]})}function w(a={}){const{wrapper:r}=Object.assign({},c(),a.components);return r?e(r,{...a,children:e(d,{...a})}):d(a)}const b=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-alertbutton",children:["Basic AlertButton",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"AlertButton"})," is offered in three variants: filled (default), outlined, and text. The ",e("code",{children:"buttonLabel"})," prop allows you to set the button's text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",buttonLabel:"Filled"}),e(o,{variant:"outlined",buttonLabel:"Outlined"}),e(o,{variant:"text",buttonLabel:"Text"})]}),e(l,{code:`
<AlertButton variant="filled" buttonLabel={"Filled"} />
<AlertButton variant="outlined" buttonLabel={"Outlined"} />
<AlertButton variant="text" buttonLabel={"Text"} />
`,language:"tsx",dark:!0})]});b.storyName="Basic AlertButton";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-alertbutton">{"Basic AlertButton"}<br /><br /></h4><p>{"The "}<code>{"AlertButton"}</code>{" is offered in three variants: filled (default), outlined, and text. The "}<code>{"buttonLabel"}</code>{" prop allows you to set the button's text."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton variant="filled" buttonLabel={"Filled"} /><AlertButton variant="outlined" buttonLabel={"Outlined"} /><AlertButton variant="text" buttonLabel={"Text"} /></div><Source code={\`
<AlertButton variant="filled" buttonLabel={"Filled"} />
<AlertButton variant="outlined" buttonLabel={"Outlined"} />
<AlertButton variant="text" buttonLabel={"Text"} />
\`} language={"tsx"} dark={true} /></div>`}};const s=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"color"})," prop lets you apply different color variants to represent various button types, with ",e("code",{children:"Primary"})," being the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",buttonLabel:"Primary"}),e(o,{color:"secondary",buttonLabel:"Secondary"}),e(o,{color:"info",buttonLabel:"Info"}),e(o,{color:"error",buttonLabel:"Error"}),e(o,{color:"warning",buttonLabel:"Warning"}),e(o,{color:"success",buttonLabel:"Success"})]}),e(l,{code:`
<AlertButton color="primary" buttonLabel={"Primary"} />
<AlertButton color="secondary" buttonLabel={"Secondary"} />
<AlertButton color="info" buttonLabel={"Info"} />
<AlertButton color="error" buttonLabel={"Error"} />
<AlertButton color="warning" buttonLabel={"Warning"} />
<AlertButton color="success" buttonLabel={"Success"} />
`,language:"tsx",dark:!0})]});s.storyName="Color";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"The "}<code>{"color"}</code>{" prop lets you apply different color variants to represent various button types, with "}<code>{"Primary"}</code>{" being the default."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton color="primary" buttonLabel={"Primary"} /><AlertButton color="secondary" buttonLabel={"Secondary"} /><AlertButton color="info" buttonLabel={"Info"} /><AlertButton color="error" buttonLabel={"Error"} /><AlertButton color="warning" buttonLabel={"Warning"} /><AlertButton color="success" buttonLabel={"Success"} /></div><Source code={\`
<AlertButton color="primary" buttonLabel={"Primary"} />
<AlertButton color="secondary" buttonLabel={"Secondary"} />
<AlertButton color="info" buttonLabel={"Info"} />
<AlertButton color="error" buttonLabel={"Error"} />
<AlertButton color="warning" buttonLabel={"Warning"} />
<AlertButton color="success" buttonLabel={"Success"} />
\`} language={"tsx"} dark={true} /></div>`}};const h=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t("p",{children:["You can customize the color tone of the ",e("code",{children:"AlertButton"})," component using the ",e("code",{children:"hue"})," prop, enabling you to select specific shades or tones that match your design needs.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",buttonLabel:"Lightest"}),e(o,{hue:"lighter",buttonLabel:"Lighter"}),e(o,{hue:"light",buttonLabel:"Light"}),e(o,{buttonLabel:"Normal"}),e(o,{hue:"dark",buttonLabel:"Dark"}),e(o,{hue:"darker",buttonLabel:"Darker"}),e(o,{hue:"darkest",buttonLabel:"Darkest"})]}),e(l,{code:`
<AlertButton hue="lightest" buttonLabel={"Lightest"} />
<AlertButton hue="lighter" buttonLabel={"Lighter"} />
<AlertButton hue="light" buttonLabel={"Light"} />
<AlertButton buttonLabel={"Normal"} />
<AlertButton hue="dark" buttonLabel={"Dark"} />
<AlertButton hue="darker" buttonLabel={"Darker"} />
<AlertButton hue="darkest" buttonLabel={"Darkest"} />
`,language:"tsx",dark:!0})]});h.storyName="Hue";h.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"You can customize the color tone of the "}<code>{"AlertButton"}</code>{" component using the "}<code>{"hue"}</code>{" prop, enabling you to select specific shades or tones that match your design needs."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton hue="lightest" buttonLabel={"Lightest"} /><AlertButton hue="lighter" buttonLabel={"Lighter"} /><AlertButton hue="light" buttonLabel={"Light"} /><AlertButton buttonLabel={"Normal"} /><AlertButton hue="dark" buttonLabel={"Dark"} /><AlertButton hue="darker" buttonLabel={"Darker"} /><AlertButton hue="darkest" buttonLabel={"Darkest"} /></div><Source code={\`
<AlertButton hue="lightest" buttonLabel={"Lightest"} />
<AlertButton hue="lighter" buttonLabel={"Lighter"} />
<AlertButton hue="light" buttonLabel={"Light"} />
<AlertButton buttonLabel={"Normal"} />
<AlertButton hue="dark" buttonLabel={"Dark"} />
<AlertButton hue="darker" buttonLabel={"Darker"} />
<AlertButton hue="darkest" buttonLabel={"Darkest"} />
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"size"})," prop to adjust the ",e("code",{children:"AlertButton"})," component's size.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",buttonLabel:"Small"}),e(o,{size:"normal",buttonLabel:"Normal"}),e(o,{size:"large",buttonLabel:"Large"})]}),e(l,{code:`
<AlertButton size="small" buttonLabel={"Small"} />
<AlertButton size="normal" buttonLabel={"Normal"} />
<AlertButton size="large" buttonLabel={"Large"} />
`,language:"tsx",dark:!0})]});p.storyName="Size";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"Use the "}<code>{"size"}</code>{" prop to adjust the "}<code>{"AlertButton"}</code>{" component's size."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton size="small" buttonLabel={"Small"} /><AlertButton size="normal" buttonLabel={"Normal"} /><AlertButton size="large" buttonLabel={"Large"} /></div><Source code={\`
<AlertButton size="small" buttonLabel={"Small"} />
<AlertButton size="normal" buttonLabel={"Normal"} />
<AlertButton size="large" buttonLabel={"Large"} />
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t("p",{children:["You can make the ",e("code",{children:"AlertButton"})," span the full width of its parent container by setting the ",e("code",{children:"fullWidth"})," prop to ",e("code",{children:"true"})," or ",e("code",{children:"false"}),".",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,buttonLabel:"Full Width"})}),e(l,{code:`
<AlertButton fullWidth={true} buttonLabel={"Full Width"} />
`,language:"tsx",dark:!0})]});m.storyName="Full Width";m.parameters={storySource:{source:'<div className={"preview-panel"}><h4 id="full-width">{"Full Width"}<br /><br /></h4><p>{"You can make the "}<code>{"AlertButton"}</code>{" span the full width of its parent container by setting the "}<code>{"fullWidth"}</code>{" prop to "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{"."}<br /><br /></p><div className={"grid-vertical full-width"}><AlertButton fullWidth={true} buttonLabel={"Full Width"} /></div><Source code={`\n<AlertButton fullWidth={true} buttonLabel={"Full Width"} />\n`} language={"tsx"} dark={true} /></div>'}};const f=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),t("p",{children:["The shadow size of the ",e("code",{children:"AlertButton"})," is automatically adjusted based on its overall size, but you can customize it further using the ",e("code",{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{shadowSize:4,buttonLabel:"Button"})}),e(l,{code:`
<AlertButton shadowSize={4} buttonLabel={"Button"} />
`,language:"tsx",dark:!0})]});f.storyName="Shadow Size";f.parameters={storySource:{source:'<div className={"preview-panel"}><h4 id="shadow-size">{"Shadow Size"}<br /><br /></h4><p>{"The shadow size of the "}<code>{"AlertButton"}</code>{" is automatically adjusted based on its overall size, but you can customize it further using the "}<code>{"shadowSize"}</code>{" prop."}<br /><br /></p><div className={"grid-vertical full-width"}><AlertButton shadowSize={4} buttonLabel={"Button"} /></div><Source code={`\n<AlertButton shadowSize={4} buttonLabel={"Button"} />\n`} language={"tsx"} dark={true} /></div>'}};const L=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"compact",children:["Compact",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"compact"})," prop to reduce the padding of the ",e("code",{children:"AlertButton"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Normal"}),e(o,{compact:!0,buttonLabel:"Compact"})]}),e(l,{code:`
<AlertButton buttonLabel={"Normal"} />
<AlertButton compact={true} buttonLabel={"Compact"} />
`,language:"tsx",dark:!0})]});L.storyName="Compact";L.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="compact">{"Compact"}<br /><br /></h4><p>{"Use the "}<code>{"compact"}</code>{" prop to reduce the padding of the "}<code>{"AlertButton"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton buttonLabel={"Normal"} /><AlertButton compact={true} buttonLabel={"Compact"} /></div><Source code={\`
<AlertButton buttonLabel={"Normal"} />
<AlertButton compact={true} buttonLabel={"Compact"} />
\`} language={"tsx"} dark={true} /></div>`}};const B=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t("p",{children:["To enable or disable the ",e("code",{children:"AlertButton"}),", set the ",e("code",{children:"disabled"})," prop to ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,buttonLabel:"Disabled"}),e(o,{buttonLabel:"Enabled"})]}),e(l,{code:`
<AlertButton disabled={true} buttonLabel={"Disabled"} />
<AlertButton buttonLabel={"Enabled"} />
`,language:"tsx",dark:!0})]});B.storyName="Enabled/Disabled Button";B.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled-button">{"Enabled/Disabled Button"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"AlertButton"}</code>{", set the "}<code>{"disabled"}</code>{" prop to "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the button is enabled."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton disabled={true} buttonLabel={"Disabled"} /><AlertButton buttonLabel={"Enabled"} /></div><Source code={\`
<AlertButton disabled={true} buttonLabel={"Disabled"} />
<AlertButton buttonLabel={"Enabled"} />
\`} language={"tsx"} dark={true} /></div>`}};const g=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t("p",{children:["By default, the ",e("code",{children:"AlertButton"})," includes a ripple effect when clicked. To disable this effect, set ",e("code",{children:"noRippleEffect"})," prop to ",e("code",{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Button with Ripple Effect"}),e(o,{noRippleEffect:!0,buttonLabel:"Button with no Ripple Effect"})]}),e(l,{code:`
<AlertButton buttonLabel={"Button with Ripple Effect"} />
<AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} />
`,language:"tsx",dark:!0})]});g.storyName="Ripple Effect";g.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"AlertButton"}</code>{" includes a ripple effect when clicked. To disable this effect, set "}<code>{"noRippleEffect"}</code>{" prop to "}<code>{"true"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton buttonLabel={"Button with Ripple Effect"} /><AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} /></div><Source code={\`
<AlertButton buttonLabel={"Button with Ripple Effect"} />
<AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} />
\`} language={"tsx"} dark={true} /></div>`}};const i={title:"clients/ui/button/AlertButton",tags:["stories-mdx"],includeStories:["basicAlertButton","color","hue","size","fullWidth","shadowSize","compact","enabledDisabledButton","rippleEffect"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const H=["basicAlertButton","color","hue","size","fullWidth","shadowSize","compact","enabledDisabledButton","rippleEffect"];export{H as __namedExportsOrder,b as basicAlertButton,s as color,L as compact,i as default,B as enabledDisabledButton,m as fullWidth,h as hue,g as rippleEffect,f as shadowSize,p as size};
