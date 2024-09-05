import{b as c,M as f,d as r}from"./index-D8Bq1aUh.js";import{I as o}from"./IconButton-BwGYpPpx.js";import{j as n,a as e,d as t,M as i,F as z}from"./DefaultThemeProvider-DbvuuPiG.js";import"./index-BwDkhjyp.js";import{useMDXComponents as u}from"./index-BnapxFVb.js";import"./iframe-CIX_G1sr.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-CLSESEbx.js";function s(l){const a=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},u(),l.components);return n(z,{children:[e(f,{title:"clients/ui/button/IconButton"}),`
`,n("div",{className:"preview-panel",children:[e(a.h1,{id:"iconbutton-component",children:"IconButton Component"}),n(a.p,{children:["The ",e(a.code,{children:"IconButton"})," is a button that displays only an icon without a text label, typically used for performing minor actions with a single tap. Below is an example of how to use it."]})]}),`
`,e(r,{name:"Basic IconButton",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"basic-iconbutton",children:["Basic IconButton",e("br",{}),e("br",{})]}),n(a.p,{children:["The ",e(a.code,{children:"IconButton"})," is available in two variants: filled (default), and outlined. You can use ",e(a.code,{children:"MatIcon"})," or ",e(a.code,{children:"MatSymbol"})," (Material Icons/Symbols) to display the icons.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",children:e(t,{name:"delete"})}),e(o,{variant:"outlined",children:e(t,{name:"delete"})}),e(o,{variant:"filled",children:e(i,{name:"delete"})}),e(o,{variant:"outlined",children:e(i,{name:"delete"})})]}),e(c,{code:`
<IconButton variant="filled"><MatIcon name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatIcon name={'delete'} /></IconButton>

<IconButton variant="filled"><MatSymbol name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatSymbol name={'delete'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Shape",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"shape",children:["Shape",e("br",{}),e("br",{})]}),n(a.p,{children:["The ",e(a.code,{children:"IconButton"})," comes in three shapes: circle (default), rounded, and rectangle.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{shape:"circle",children:e(t,{name:"search"})}),e(o,{shape:"rounded",children:e(t,{name:"search"})}),e(o,{shape:"rectangle",children:e(t,{name:"search"})})]}),e(c,{code:`
<IconButton shape="circle"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rounded"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rectangle"><MatIcon name={'search'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Color",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),n(a.p,{children:["You can use the ",e(a.code,{children:"color"})," prop to assign different color variants to represent various button types. The ",e(a.code,{children:"primary"})," color is set as the default.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{color:"primary",children:e(t,{name:"search"})}),e(o,{color:"secondary",children:e(t,{name:"delete"})}),e(o,{color:"info",children:e(t,{name:"menu"})}),e(o,{color:"error",children:e(t,{name:"close"})}),e(o,{color:"warning",children:e(t,{name:"warning"})}),e(o,{color:"success",children:e(t,{name:"check"})})]}),e(c,{code:`
<IconButton color="primary"><MatIcon name={'search'} /></IconButton>
<IconButton color="secondary"><MatIcon name={'delete'} /></IconButton>
<IconButton color="info"><MatIcon name={'menu'} /></IconButton>
<IconButton color="error"><MatIcon name={'close'} /></IconButton>
<IconButton color="warning"><MatIcon name={'warning'} /></IconButton>
<IconButton color="success"><MatIcon name={'check'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Hue",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),n(a.p,{children:["You can adjust the color tone of the ",e(a.code,{children:"IconButton"})," component using the ",e(a.code,{children:"hue"})," prop, which lets you choose specific shades or tones to match your design needs.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",children:e(t,{name:"star"})}),e(o,{hue:"lighter",children:e(t,{name:"star"})}),e(o,{hue:"light",children:e(t,{name:"star"})}),e(o,{children:e(t,{name:"star"})}),e(o,{hue:"dark",children:e(t,{name:"star"})}),e(o,{hue:"darker",children:e(t,{name:"star"})}),e(o,{hue:"darkest",children:e(t,{name:"star"})})]}),e(c,{code:`
<IconButton hue="lightest"><MatIcon name={'star'} /></IconButton>
<IconButton hue="lighter"><MatIcon name={'star'} /></IconButton>
<IconButton hue="light"><MatIcon name={'star'} /></IconButton>
<IconButton><MatIcon name={'star'} /></IconButton>
<IconButton hue="dark"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darker"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darkest"><MatIcon name={'star'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Size",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),n(a.p,{children:["To adjust the size of the ",e(a.code,{children:"IconButton"})," component, use the ",e(a.code,{children:"size"})," prop.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{size:"small",children:e(t,{name:"home"})}),e(o,{size:"normal",children:e(t,{name:"home"})}),e(o,{size:"large",children:e(t,{name:"home"})}),e(o,{size:"extra_large",children:e(t,{name:"home"})})]}),e(c,{code:`
<IconButton size="small"><MatIcon name={'home'} /></IconButton>
<IconButton size="normal"><MatIcon name={'home'} /></IconButton>
<IconButton size="large"><MatIcon name={'home'} /></IconButton>
<IconButton size="extra_large"><MatIcon name={'home'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Shadow Size",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),n(a.p,{children:["By default, the ",e(a.code,{children:"IconButton"})," has no shadow. The shadow size is automatically determined by the button's overall size, but you can customize it using the ",e(a.code,{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{children:e(t,{name:"menu"})}),e(o,{shadowSize:8,children:e(t,{name:"menu"})})]}),e(c,{code:`
<IconButton><MatIcon name={'menu'} /></IconButton>
<IconButton shadowSize={8}><MatIcon name={'menu'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Enabled/Disabled Button",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),n(a.p,{children:["To enable or disable the ",e(a.code,{children:"IconButton"}),", use the ",e(a.code,{children:"disabled"})," prop with a value of ",e(a.code,{children:"true"})," or ",e(a.code,{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,children:e(t,{name:"save"})}),e(o,{children:e(t,{name:"save"})})]}),e(c,{code:`
<IconButton disabled={true}><MatIcon name={'save'} /></IconButton>
<IconButton><MatIcon name={'save'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Transparent Background",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"transparent-background",children:["Transparent Background",e("br",{}),e("br",{})]}),n(a.p,{children:["By default, the ",e(a.code,{children:"IconButton"})," has a background color. To make the button transparent, set ",e(a.code,{children:"startBgWithTransparent"})," to ",e(a.code,{children:"true"}),".",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{children:e(t,{name:"share"})}),e(o,{startBgWithTransparent:!0,children:e(t,{name:"share"})})]}),e(c,{code:`
<IconButton><MatIcon name={'share'} /></IconButton>
<IconButton startBgWithTransparent={true}><MatIcon name={'share'} /></IconButton>
`,language:"tsx",dark:!0})]})}),`
`,e(r,{name:"Ripple Effect",children:n("div",{className:"preview-panel",children:[n(a.h4,{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),n(a.p,{children:["By default, the ",e(a.code,{children:"IconButton"})," has a ripple effect when clicked. You can disable this by setting ",e(a.code,{children:"noRippleEffect"})," to ",e(a.code,{children:"true"}),".",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{children:e(t,{name:"check"})}),e(o,{noRippleEffect:!0,children:e(t,{name:"close"})})]}),e(c,{code:`
<IconButton><MatIcon name={'check'} /></IconButton>
<IconButton noRippleEffect={true}><MatIcon name={'close'} /></IconButton>
`,language:"tsx",dark:!0})]})})]})}function y(l={}){const{wrapper:a}=Object.assign({},u(),l.components);return a?e(a,{...l,children:e(s,{...l})}):s(l)}const h=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"basic-iconbutton",children:["Basic IconButton",e("br",{}),e("br",{})]}),n("p",{children:["The ",e("code",{children:"IconButton"})," is available in two variants: filled (default), and outlined. You can use ",e("code",{children:"MatIcon"})," or ",e("code",{children:"MatSymbol"})," (Material Icons/Symbols) to display the icons.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{variant:"filled",children:e(t,{name:"delete"})}),e(o,{variant:"outlined",children:e(t,{name:"delete"})}),e(o,{variant:"filled",children:e(i,{name:"delete"})}),e(o,{variant:"outlined",children:e(i,{name:"delete"})})]}),e(c,{code:`
<IconButton variant="filled"><MatIcon name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatIcon name={'delete'} /></IconButton>

<IconButton variant="filled"><MatSymbol name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatSymbol name={'delete'} /></IconButton>
`,language:"tsx",dark:!0})]});h.storyName="Basic IconButton";h.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-iconbutton">{"Basic IconButton"}<br /><br /></h4><p>{"The "}<code>{"IconButton"}</code>{" is available in two variants: filled (default), and outlined. You can use "}<code>{"MatIcon"}</code>{" or "}<code>{"MatSymbol"}</code>{" (Material Icons/Symbols) to display the icons."}<br /><br /></p><div className={"flex-horizontal"}><IconButton variant="filled"><MatIcon name={"delete"} /></IconButton><IconButton variant="outlined"><MatIcon name={"delete"} /></IconButton><IconButton variant="filled"><MatSymbol name={"delete"} /></IconButton><IconButton variant="outlined"><MatSymbol name={"delete"} /></IconButton></div><Source code={\`
<IconButton variant="filled"><MatIcon name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatIcon name={'delete'} /></IconButton>

<IconButton variant="filled"><MatSymbol name={'delete'} /></IconButton>
<IconButton variant="outlined"><MatSymbol name={'delete'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const I=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"shape",children:["Shape",e("br",{}),e("br",{})]}),n("p",{children:["The ",e("code",{children:"IconButton"})," comes in three shapes: circle (default), rounded, and rectangle.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{shape:"circle",children:e(t,{name:"search"})}),e(o,{shape:"rounded",children:e(t,{name:"search"})}),e(o,{shape:"rectangle",children:e(t,{name:"search"})})]}),e(c,{code:`
<IconButton shape="circle"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rounded"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rectangle"><MatIcon name={'search'} /></IconButton>
`,language:"tsx",dark:!0})]});I.storyName="Shape";I.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="shape">{"Shape"}<br /><br /></h4><p>{"The "}<code>{"IconButton"}</code>{" comes in three shapes: circle (default), rounded, and rectangle."}<br /><br /></p><div className={"flex-horizontal"}><IconButton shape="circle"><MatIcon name={"search"} /></IconButton><IconButton shape="rounded"><MatIcon name={"search"} /></IconButton><IconButton shape="rectangle"><MatIcon name={"search"} /></IconButton></div><Source code={\`
<IconButton shape="circle"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rounded"><MatIcon name={'search'} /></IconButton>
<IconButton shape="rectangle"><MatIcon name={'search'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),n("p",{children:["You can use the ",e("code",{children:"color"})," prop to assign different color variants to represent various button types. The ",e("code",{children:"primary"})," color is set as the default.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{color:"primary",children:e(t,{name:"search"})}),e(o,{color:"secondary",children:e(t,{name:"delete"})}),e(o,{color:"info",children:e(t,{name:"menu"})}),e(o,{color:"error",children:e(t,{name:"close"})}),e(o,{color:"warning",children:e(t,{name:"warning"})}),e(o,{color:"success",children:e(t,{name:"check"})})]}),e(c,{code:`
<IconButton color="primary"><MatIcon name={'search'} /></IconButton>
<IconButton color="secondary"><MatIcon name={'delete'} /></IconButton>
<IconButton color="info"><MatIcon name={'menu'} /></IconButton>
<IconButton color="error"><MatIcon name={'close'} /></IconButton>
<IconButton color="warning"><MatIcon name={'warning'} /></IconButton>
<IconButton color="success"><MatIcon name={'check'} /></IconButton>
`,language:"tsx",dark:!0})]});m.storyName="Color";m.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"You can use the "}<code>{"color"}</code>{" prop to assign different color variants to represent various button types. The "}<code>{"primary"}</code>{" color is set as the default."}<br /><br /></p><div className={"flex-horizontal"}><IconButton color="primary"><MatIcon name={"search"} /></IconButton><IconButton color="secondary"><MatIcon name={"delete"} /></IconButton><IconButton color="info"><MatIcon name={"menu"} /></IconButton><IconButton color="error"><MatIcon name={"close"} /></IconButton><IconButton color="warning"><MatIcon name={"warning"} /></IconButton><IconButton color="success"><MatIcon name={"check"} /></IconButton></div><Source code={\`
<IconButton color="primary"><MatIcon name={'search'} /></IconButton>
<IconButton color="secondary"><MatIcon name={'delete'} /></IconButton>
<IconButton color="info"><MatIcon name={'menu'} /></IconButton>
<IconButton color="error"><MatIcon name={'close'} /></IconButton>
<IconButton color="warning"><MatIcon name={'warning'} /></IconButton>
<IconButton color="success"><MatIcon name={'check'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const B=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),n("p",{children:["You can adjust the color tone of the ",e("code",{children:"IconButton"})," component using the ",e("code",{children:"hue"})," prop, which lets you choose specific shades or tones to match your design needs.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{hue:"lightest",children:e(t,{name:"star"})}),e(o,{hue:"lighter",children:e(t,{name:"star"})}),e(o,{hue:"light",children:e(t,{name:"star"})}),e(o,{children:e(t,{name:"star"})}),e(o,{hue:"dark",children:e(t,{name:"star"})}),e(o,{hue:"darker",children:e(t,{name:"star"})}),e(o,{hue:"darkest",children:e(t,{name:"star"})})]}),e(c,{code:`
<IconButton hue="lightest"><MatIcon name={'star'} /></IconButton>
<IconButton hue="lighter"><MatIcon name={'star'} /></IconButton>
<IconButton hue="light"><MatIcon name={'star'} /></IconButton>
<IconButton><MatIcon name={'star'} /></IconButton>
<IconButton hue="dark"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darker"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darkest"><MatIcon name={'star'} /></IconButton>
`,language:"tsx",dark:!0})]});B.storyName="Hue";B.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"You can adjust the color tone of the "}<code>{"IconButton"}</code>{" component using the "}<code>{"hue"}</code>{" prop, which lets you choose specific shades or tones to match your design needs."}<br /><br /></p><div className={"flex-horizontal"}><IconButton hue="lightest"><MatIcon name={"star"} /></IconButton><IconButton hue="lighter"><MatIcon name={"star"} /></IconButton><IconButton hue="light"><MatIcon name={"star"} /></IconButton><IconButton><MatIcon name={"star"} /></IconButton><IconButton hue="dark"><MatIcon name={"star"} /></IconButton><IconButton hue="darker"><MatIcon name={"star"} /></IconButton><IconButton hue="darkest"><MatIcon name={"star"} /></IconButton></div><Source code={\`
<IconButton hue="lightest"><MatIcon name={'star'} /></IconButton>
<IconButton hue="lighter"><MatIcon name={'star'} /></IconButton>
<IconButton hue="light"><MatIcon name={'star'} /></IconButton>
<IconButton><MatIcon name={'star'} /></IconButton>
<IconButton hue="dark"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darker"><MatIcon name={'star'} /></IconButton>
<IconButton hue="darkest"><MatIcon name={'star'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),n("p",{children:["To adjust the size of the ",e("code",{children:"IconButton"})," component, use the ",e("code",{children:"size"})," prop.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{size:"small",children:e(t,{name:"home"})}),e(o,{size:"normal",children:e(t,{name:"home"})}),e(o,{size:"large",children:e(t,{name:"home"})}),e(o,{size:"extra_large",children:e(t,{name:"home"})})]}),e(c,{code:`
<IconButton size="small"><MatIcon name={'home'} /></IconButton>
<IconButton size="normal"><MatIcon name={'home'} /></IconButton>
<IconButton size="large"><MatIcon name={'home'} /></IconButton>
<IconButton size="extra_large"><MatIcon name={'home'} /></IconButton>
`,language:"tsx",dark:!0})]});p.storyName="Size";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"To adjust the size of the "}<code>{"IconButton"}</code>{" component, use the "}<code>{"size"}</code>{" prop."}<br /><br /></p><div className={"flex-horizontal"}><IconButton size="small"><MatIcon name={"home"} /></IconButton><IconButton size="normal"><MatIcon name={"home"} /></IconButton><IconButton size="large"><MatIcon name={"home"} /></IconButton><IconButton size="extra_large"><MatIcon name={"home"} /></IconButton></div><Source code={\`
<IconButton size="small"><MatIcon name={'home'} /></IconButton>
<IconButton size="normal"><MatIcon name={'home'} /></IconButton>
<IconButton size="large"><MatIcon name={'home'} /></IconButton>
<IconButton size="extra_large"><MatIcon name={'home'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const b=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"shadow-size",children:["Shadow Size",e("br",{}),e("br",{})]}),n("p",{children:["By default, the ",e("code",{children:"IconButton"})," has no shadow. The shadow size is automatically determined by the button's overall size, but you can customize it using the ",e("code",{children:"shadowSize"})," prop.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{children:e(t,{name:"menu"})}),e(o,{shadowSize:8,children:e(t,{name:"menu"})})]}),e(c,{code:`
<IconButton><MatIcon name={'menu'} /></IconButton>
<IconButton shadowSize={8}><MatIcon name={'menu'} /></IconButton>
`,language:"tsx",dark:!0})]});b.storyName="Shadow Size";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="shadow-size">{"Shadow Size"}<br /><br /></h4><p>{"By default, the "}<code>{"IconButton"}</code>{" has no shadow. The shadow size is automatically determined by the button's overall size, but you can customize it using the "}<code>{"shadowSize"}</code>{" prop."}<br /><br /></p><div className={"flex-horizontal"}><IconButton><MatIcon name={"menu"} /></IconButton><IconButton shadowSize={8}><MatIcon name={"menu"} /></IconButton></div><Source code={\`
<IconButton><MatIcon name={'menu'} /></IconButton>
<IconButton shadowSize={8}><MatIcon name={'menu'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const v=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),n("p",{children:["To enable or disable the ",e("code",{children:"IconButton"}),", use the ",e("code",{children:"disabled"})," prop with a value of ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{disabled:!0,children:e(t,{name:"save"})}),e(o,{children:e(t,{name:"save"})})]}),e(c,{code:`
<IconButton disabled={true}><MatIcon name={'save'} /></IconButton>
<IconButton><MatIcon name={'save'} /></IconButton>
`,language:"tsx",dark:!0})]});v.storyName="Enabled/Disabled Button";v.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled-button">{"Enabled/Disabled Button"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"IconButton"}</code>{", use the "}<code>{"disabled"}</code>{" prop with a value of "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the button is enabled."}<br /><br /></p><div className={"flex-horizontal"}><IconButton disabled={true}><MatIcon name={"save"} /></IconButton><IconButton><MatIcon name={"save"} /></IconButton></div><Source code={\`
<IconButton disabled={true}><MatIcon name={'save'} /></IconButton>
<IconButton><MatIcon name={'save'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const g=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"transparent-background",children:["Transparent Background",e("br",{}),e("br",{})]}),n("p",{children:["By default, the ",e("code",{children:"IconButton"})," has a background color. To make the button transparent, set ",e("code",{children:"startBgWithTransparent"})," to ",e("code",{children:"true"}),".",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{children:e(t,{name:"share"})}),e(o,{startBgWithTransparent:!0,children:e(t,{name:"share"})})]}),e(c,{code:`
<IconButton><MatIcon name={'share'} /></IconButton>
<IconButton startBgWithTransparent={true}><MatIcon name={'share'} /></IconButton>
`,language:"tsx",dark:!0})]});g.storyName="Transparent Background";g.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="transparent-background">{"Transparent Background"}<br /><br /></h4><p>{"By default, the "}<code>{"IconButton"}</code>{" has a background color. To make the button transparent, set "}<code>{"startBgWithTransparent"}</code>{" to "}<code>{"true"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><IconButton><MatIcon name={"share"} /></IconButton><IconButton startBgWithTransparent={true}><MatIcon name={"share"} /></IconButton></div><Source code={\`
<IconButton><MatIcon name={'share'} /></IconButton>
<IconButton startBgWithTransparent={true}><MatIcon name={'share'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const M=()=>n("div",{className:"preview-panel",children:[n("h4",{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),n("p",{children:["By default, the ",e("code",{children:"IconButton"})," has a ripple effect when clicked. You can disable this by setting ",e("code",{children:"noRippleEffect"})," to ",e("code",{children:"true"}),".",e("br",{}),e("br",{})]}),n("div",{className:"flex-horizontal",children:[e(o,{children:e(t,{name:"check"})}),e(o,{noRippleEffect:!0,children:e(t,{name:"close"})})]}),e(c,{code:`
<IconButton><MatIcon name={'check'} /></IconButton>
<IconButton noRippleEffect={true}><MatIcon name={'close'} /></IconButton>
`,language:"tsx",dark:!0})]});M.storyName="Ripple Effect";M.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"IconButton"}</code>{" has a ripple effect when clicked. You can disable this by setting "}<code>{"noRippleEffect"}</code>{" to "}<code>{"true"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><IconButton><MatIcon name={"check"} /></IconButton><IconButton noRippleEffect={true}><MatIcon name={"close"} /></IconButton></div><Source code={\`
<IconButton><MatIcon name={'check'} /></IconButton>
<IconButton noRippleEffect={true}><MatIcon name={'close'} /></IconButton>
\`} language={"tsx"} dark={true} /></div>`}};const d={title:"clients/ui/button/IconButton",tags:["stories-mdx"],includeStories:["basicIconButton","shape","color","hue","size","shadowSize","enabledDisabledButton","transparentBackground","rippleEffect"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:y};const O=["basicIconButton","shape","color","hue","size","shadowSize","enabledDisabledButton","transparentBackground","rippleEffect"];export{O as __namedExportsOrder,h as basicIconButton,m as color,d as default,v as enabledDisabledButton,B as hue,M as rippleEffect,b as shadowSize,I as shape,p as size,g as transparentBackground};
