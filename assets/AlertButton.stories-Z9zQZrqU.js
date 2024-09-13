import{b as r,M as A,d as n}from"./index-DVow2ixS.js";import{B as v}from"./Button-C-RRGble.js";import{A as o}from"./AlertButton-2B0HG_NZ.js";import{j as t,a as e,F as y,T as u,d as z}from"./Divider-DdokZ4G_.js";import"./index-BwDkhjyp.js";import{useMDXComponents as c}from"./index-BnapxFVb.js";import"./iframe-DCMQFdKf.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-DKEMF1mc.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-V2LljsIL.js";import"./ActionBar-BLcuPqV8.js";function d(a){const l=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},c(),a.components);return t(y,{children:[e(A,{title:"clients/ui/button/AlertButton"}),`
`,t("div",{className:"preview-panel",children:[e(l.h1,{id:"alertbutton-component",children:"AlertButton Component"}),t(l.p,{children:["The ",e(l.code,{children:"AlertButton"})," component is designed to create an alert dialog. You can add ",e(l.code,{children:"child components"})," to display the title, message, or buttons, allowing you to control and customize the dialog's behavior. Here's an example of how to use it."]}),e("div",{className:"flex-horizontal",children:t(o,{buttonLabel:"Button",children:[e(u,{variant:"heading4",children:"Title"}),e("br",{}),t("div",{className:"flex-horizontal",children:[e(z,{name:"info",size:30}),e(u,{variant:"body1",color:"secondary",children:e(l.p,{children:"This is the message!"})})]}),e("br",{}),e(v,{fullWidth:!0,color:"success",children:"OK"})]})}),e(r,{code:`
<AlertButton buttonLabel={"Button"}>
  <Typography variant={'heading4'}>Title</Typography>
  <br />
  <div className={'flex-horizontal'}>
    <MatIcon name={'info'} size={30} />
    <Typography variant={'body1'} color={'secondary'}>
      This is the message!
    </Typography>
  </div>
  <br />
  <Button fullWidth={true} color={'success'}>OK</Button>
</AlertButton>
`,language:"tsx",dark:!0})]}),`
`,e(n,{name:"Basic AlertButton",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"basic-alertbutton",children:["Basic AlertButton",e("br",{}),e("br",{})]}),t(l.p,{children:["The ",e(l.code,{children:"AlertButton"})," is offered in three variants: filled (default), outlined, and text. The ",e(l.code,{children:"buttonLabel"})," prop allows you to set the button's text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",buttonLabel:"Filled"}),e(o,{variant:"outlined",buttonLabel:"Outlined"}),e(o,{variant:"text",buttonLabel:"Text"})]}),e(r,{code:`
<AlertButton variant="filled" buttonLabel={"Filled"} />
<AlertButton variant="outlined" buttonLabel={"Outlined"} />
<AlertButton variant="text" buttonLabel={"Text"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Color",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(l.p,{children:["The ",e(l.code,{children:"color"})," prop lets you apply different color variants to represent various button types, with ",e(l.code,{children:"Primary"})," being the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",buttonLabel:"Primary"}),e(o,{color:"secondary",buttonLabel:"Secondary"}),e(o,{color:"info",buttonLabel:"Info"}),e(o,{color:"error",buttonLabel:"Error"}),e(o,{color:"warning",buttonLabel:"Warning"}),e(o,{color:"success",buttonLabel:"Success"})]}),e(r,{code:`
<AlertButton color="primary" buttonLabel={"Primary"} />
<AlertButton color="secondary" buttonLabel={"Secondary"} />
<AlertButton color="info" buttonLabel={"Info"} />
<AlertButton color="error" buttonLabel={"Error"} />
<AlertButton color="warning" buttonLabel={"Warning"} />
<AlertButton color="success" buttonLabel={"Success"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Hue",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t(l.p,{children:["You can customize the color tone of the ",e(l.code,{children:"AlertButton"})," component using the ",e(l.code,{children:"hue"})," prop, enabling you to select specific shades or tones that match your design needs.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",buttonLabel:"Lightest"}),e(o,{hue:"lighter",buttonLabel:"Lighter"}),e(o,{hue:"light",buttonLabel:"Light"}),e(o,{buttonLabel:"Normal"}),e(o,{hue:"dark",buttonLabel:"Dark"}),e(o,{hue:"darker",buttonLabel:"Darker"}),e(o,{hue:"darkest",buttonLabel:"Darkest"})]}),e(r,{code:`
<AlertButton hue="lightest" buttonLabel={"Lightest"} />
<AlertButton hue="lighter" buttonLabel={"Lighter"} />
<AlertButton hue="light" buttonLabel={"Light"} />
<AlertButton buttonLabel={"Normal"} />
<AlertButton hue="dark" buttonLabel={"Dark"} />
<AlertButton hue="darker" buttonLabel={"Darker"} />
<AlertButton hue="darkest" buttonLabel={"Darkest"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Size",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),t(l.p,{children:["Use the ",e(l.code,{children:"size"})," prop to adjust the ",e(l.code,{children:"AlertButton"})," component's size.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",buttonLabel:"Small"}),e(o,{size:"normal",buttonLabel:"Normal"}),e(o,{size:"large",buttonLabel:"Large"})]}),e(r,{code:`
<AlertButton size="small" buttonLabel={"Small"} />
<AlertButton size="normal" buttonLabel={"Normal"} />
<AlertButton size="large" buttonLabel={"Large"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Full Width",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t(l.p,{children:["You can make the ",e(l.code,{children:"AlertButton"})," span the full width of its parent container by setting the ",e(l.code,{children:"fullWidth"})," prop to ",e(l.code,{children:"true"})," or ",e(l.code,{children:"false"}),".",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,buttonLabel:"Full Width"})}),e(r,{code:`
<AlertButton fullWidth={true} buttonLabel={"Full Width"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Shadow Size",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),t(l.p,{children:["The shadow size of the ",e(l.code,{children:"AlertButton"})," is automatically adjusted based on its overall size, but you can customize it further using the ",e(l.code,{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{shadowSize:4,buttonLabel:"Button"})}),e(r,{code:`
<AlertButton shadowSize={4} buttonLabel={"Button"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Compact",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"compact",children:["Compact",e("br",{}),e("br",{})]}),t(l.p,{children:["Use the ",e(l.code,{children:"compact"})," prop to reduce the padding of the ",e(l.code,{children:"AlertButton"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Normal"}),e(o,{compact:!0,buttonLabel:"Compact"})]}),e(r,{code:`
<AlertButton buttonLabel={"Normal"} />
<AlertButton compact={true} buttonLabel={"Compact"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Enabled/Disabled Button",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t(l.p,{children:["To enable or disable the ",e(l.code,{children:"AlertButton"}),", set the ",e(l.code,{children:"disabled"})," prop to ",e(l.code,{children:"true"})," or ",e(l.code,{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,buttonLabel:"Disabled"}),e(o,{buttonLabel:"Enabled"})]}),e(r,{code:`
<AlertButton disabled={true} buttonLabel={"Disabled"} />
<AlertButton buttonLabel={"Enabled"} />
`,language:"tsx",dark:!0})]})}),`
`,e(n,{name:"Ripple Effect",children:t("div",{className:"preview-panel",children:[t(l.h4,{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t(l.p,{children:["By default, the ",e(l.code,{children:"AlertButton"})," includes a ripple effect when clicked. To disable this effect, set ",e(l.code,{children:"noRippleEffect"})," prop to ",e(l.code,{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Button with Ripple Effect"}),e(o,{noRippleEffect:!0,buttonLabel:"Button with no Ripple Effect"})]}),e(r,{code:`
<AlertButton buttonLabel={"Button with Ripple Effect"} />
<AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} />
`,language:"tsx",dark:!0})]})})]})}function w(a={}){const{wrapper:l}=Object.assign({},c(),a.components);return l?e(l,{...a,children:e(d,{...a})}):d(a)}const b=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-alertbutton",children:["Basic AlertButton",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"AlertButton"})," is offered in three variants: filled (default), outlined, and text. The ",e("code",{children:"buttonLabel"})," prop allows you to set the button's text.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",buttonLabel:"Filled"}),e(o,{variant:"outlined",buttonLabel:"Outlined"}),e(o,{variant:"text",buttonLabel:"Text"})]}),e(r,{code:`
<AlertButton variant="filled" buttonLabel={"Filled"} />
<AlertButton variant="outlined" buttonLabel={"Outlined"} />
<AlertButton variant="text" buttonLabel={"Text"} />
`,language:"tsx",dark:!0})]});b.storyName="Basic AlertButton";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-alertbutton">{"Basic AlertButton"}<br /><br /></h4><p>{"The "}<code>{"AlertButton"}</code>{" is offered in three variants: filled (default), outlined, and text. The "}<code>{"buttonLabel"}</code>{" prop allows you to set the button's text."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton variant="filled" buttonLabel={"Filled"} /><AlertButton variant="outlined" buttonLabel={"Outlined"} /><AlertButton variant="text" buttonLabel={"Text"} /></div><Source code={\`
<AlertButton variant="filled" buttonLabel={"Filled"} />
<AlertButton variant="outlined" buttonLabel={"Outlined"} />
<AlertButton variant="text" buttonLabel={"Text"} />
\`} language={"tsx"} dark={true} /></div>`}};const s=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"color"})," prop lets you apply different color variants to represent various button types, with ",e("code",{children:"Primary"})," being the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{color:"primary",buttonLabel:"Primary"}),e(o,{color:"secondary",buttonLabel:"Secondary"}),e(o,{color:"info",buttonLabel:"Info"}),e(o,{color:"error",buttonLabel:"Error"}),e(o,{color:"warning",buttonLabel:"Warning"}),e(o,{color:"success",buttonLabel:"Success"})]}),e(r,{code:`
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
\`} language={"tsx"} dark={true} /></div>`}};const h=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t("p",{children:["You can customize the color tone of the ",e("code",{children:"AlertButton"})," component using the ",e("code",{children:"hue"})," prop, enabling you to select specific shades or tones that match your design needs.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",buttonLabel:"Lightest"}),e(o,{hue:"lighter",buttonLabel:"Lighter"}),e(o,{hue:"light",buttonLabel:"Light"}),e(o,{buttonLabel:"Normal"}),e(o,{hue:"dark",buttonLabel:"Dark"}),e(o,{hue:"darker",buttonLabel:"Darker"}),e(o,{hue:"darkest",buttonLabel:"Darkest"})]}),e(r,{code:`
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
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"size"})," prop to adjust the ",e("code",{children:"AlertButton"})," component's size.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{size:"small",buttonLabel:"Small"}),e(o,{size:"normal",buttonLabel:"Normal"}),e(o,{size:"large",buttonLabel:"Large"})]}),e(r,{code:`
<AlertButton size="small" buttonLabel={"Small"} />
<AlertButton size="normal" buttonLabel={"Normal"} />
<AlertButton size="large" buttonLabel={"Large"} />
`,language:"tsx",dark:!0})]});p.storyName="Size";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"Use the "}<code>{"size"}</code>{" prop to adjust the "}<code>{"AlertButton"}</code>{" component's size."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton size="small" buttonLabel={"Small"} /><AlertButton size="normal" buttonLabel={"Normal"} /><AlertButton size="large" buttonLabel={"Large"} /></div><Source code={\`
<AlertButton size="small" buttonLabel={"Small"} />
<AlertButton size="normal" buttonLabel={"Normal"} />
<AlertButton size="large" buttonLabel={"Large"} />
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t("p",{children:["You can make the ",e("code",{children:"AlertButton"})," span the full width of its parent container by setting the ",e("code",{children:"fullWidth"})," prop to ",e("code",{children:"true"})," or ",e("code",{children:"false"}),".",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{fullWidth:!0,buttonLabel:"Full Width"})}),e(r,{code:`
<AlertButton fullWidth={true} buttonLabel={"Full Width"} />
`,language:"tsx",dark:!0})]});m.storyName="Full Width";m.parameters={storySource:{source:'<div className={"preview-panel"}><h4 id="full-width">{"Full Width"}<br /><br /></h4><p>{"You can make the "}<code>{"AlertButton"}</code>{" span the full width of its parent container by setting the "}<code>{"fullWidth"}</code>{" prop to "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{"."}<br /><br /></p><div className={"grid-vertical full-width"}><AlertButton fullWidth={true} buttonLabel={"Full Width"} /></div><Source code={`\n<AlertButton fullWidth={true} buttonLabel={"Full Width"} />\n`} language={"tsx"} dark={true} /></div>'}};const f=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),t("p",{children:["The shadow size of the ",e("code",{children:"AlertButton"})," is automatically adjusted based on its overall size, but you can customize it further using the ",e("code",{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),e("div",{className:"grid-vertical full-width",children:e(o,{shadowSize:4,buttonLabel:"Button"})}),e(r,{code:`
<AlertButton shadowSize={4} buttonLabel={"Button"} />
`,language:"tsx",dark:!0})]});f.storyName="Shadow Size";f.parameters={storySource:{source:'<div className={"preview-panel"}><h4 id="shadow-size">{"Shadow Size"}<br /><br /></h4><p>{"The shadow size of the "}<code>{"AlertButton"}</code>{" is automatically adjusted based on its overall size, but you can customize it further using the "}<code>{"shadowSize"}</code>{" prop."}<br /><br /></p><div className={"grid-vertical full-width"}><AlertButton shadowSize={4} buttonLabel={"Button"} /></div><Source code={`\n<AlertButton shadowSize={4} buttonLabel={"Button"} />\n`} language={"tsx"} dark={true} /></div>'}};const L=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"compact",children:["Compact",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"compact"})," prop to reduce the padding of the ",e("code",{children:"AlertButton"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Normal"}),e(o,{compact:!0,buttonLabel:"Compact"})]}),e(r,{code:`
<AlertButton buttonLabel={"Normal"} />
<AlertButton compact={true} buttonLabel={"Compact"} />
`,language:"tsx",dark:!0})]});L.storyName="Compact";L.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="compact">{"Compact"}<br /><br /></h4><p>{"Use the "}<code>{"compact"}</code>{" prop to reduce the padding of the "}<code>{"AlertButton"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton buttonLabel={"Normal"} /><AlertButton compact={true} buttonLabel={"Compact"} /></div><Source code={\`
<AlertButton buttonLabel={"Normal"} />
<AlertButton compact={true} buttonLabel={"Compact"} />
\`} language={"tsx"} dark={true} /></div>`}};const B=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t("p",{children:["To enable or disable the ",e("code",{children:"AlertButton"}),", set the ",e("code",{children:"disabled"})," prop to ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,buttonLabel:"Disabled"}),e(o,{buttonLabel:"Enabled"})]}),e(r,{code:`
<AlertButton disabled={true} buttonLabel={"Disabled"} />
<AlertButton buttonLabel={"Enabled"} />
`,language:"tsx",dark:!0})]});B.storyName="Enabled/Disabled Button";B.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled-button">{"Enabled/Disabled Button"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"AlertButton"}</code>{", set the "}<code>{"disabled"}</code>{" prop to "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the button is enabled."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton disabled={true} buttonLabel={"Disabled"} /><AlertButton buttonLabel={"Enabled"} /></div><Source code={\`
<AlertButton disabled={true} buttonLabel={"Disabled"} />
<AlertButton buttonLabel={"Enabled"} />
\`} language={"tsx"} dark={true} /></div>`}};const g=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t("p",{children:["By default, the ",e("code",{children:"AlertButton"})," includes a ripple effect when clicked. To disable this effect, set ",e("code",{children:"noRippleEffect"})," prop to ",e("code",{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(o,{buttonLabel:"Button with Ripple Effect"}),e(o,{noRippleEffect:!0,buttonLabel:"Button with no Ripple Effect"})]}),e(r,{code:`
<AlertButton buttonLabel={"Button with Ripple Effect"} />
<AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} />
`,language:"tsx",dark:!0})]});g.storyName="Ripple Effect";g.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"AlertButton"}</code>{" includes a ripple effect when clicked. To disable this effect, set "}<code>{"noRippleEffect"}</code>{" prop to "}<code>{"true"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><AlertButton buttonLabel={"Button with Ripple Effect"} /><AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} /></div><Source code={\`
<AlertButton buttonLabel={"Button with Ripple Effect"} />
<AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} />
\`} language={"tsx"} dark={true} /></div>`}};const i={title:"clients/ui/button/AlertButton",tags:["stories-mdx"],includeStories:["basicAlertButton","color","hue","size","fullWidth","shadowSize","compact","enabledDisabledButton","rippleEffect"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const H=["basicAlertButton","color","hue","size","fullWidth","shadowSize","compact","enabledDisabledButton","rippleEffect"];export{H as __namedExportsOrder,b as basicAlertButton,s as color,L as compact,i as default,B as enabledDisabledButton,m as fullWidth,h as hue,g as rippleEffect,f as shadowSize,p as size};
