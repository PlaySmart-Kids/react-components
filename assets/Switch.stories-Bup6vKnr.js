import{b as i,M as m,d as l}from"./index-DVow2ixS.js";import{S as r}from"./Switch-BSYtxEl3.js";import{j as t,a as e,F as b}from"./Divider-DdokZ4G_.js";import{useMDXComponents as d}from"./index-BnapxFVb.js";import"./iframe-DCMQFdKf.js";import"../sb-preview/runtime.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./Anchor-Dh8oERsW.js";import"./CheckboxUtil-CqPWmFQ9.js";function n(o){const c=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},d(),o.components);return t(b,{children:[e(m,{title:"clients/ui/checkbox/Switch"}),`
`,t("div",{className:"preview-panel",children:[e(c.h1,{id:"switch-component",children:"Switch Component"}),t(c.p,{children:["The ",e(c.code,{children:"Switch"})," component is used to toggle a single setting on or off. It is the preferred method for adjusting settings on mobile devices. Here's an example of its usage."]})]}),`
`,e(l,{name:"Basic Checkbox",children:t("div",{className:"preview-panel",children:[t(c.h4,{id:"basic-switch",children:["Basic Switch",e("br",{}),e("br",{})]}),t(c.p,{children:["For the ",e(c.code,{children:"Switch"}),", use the ",e(c.code,{children:"title"})," prop to define the label for the option. The ",e(c.code,{children:"checked"})," prop sets the initial state to ",e(c.code,{children:"ON"})," (",e(c.code,{children:"true"}),") or ",e(c.code,{children:"OFF"})," (",e(c.code,{children:"false"}),"). By default, the switch is off. Toggling the ",e(c.code,{children:"Switch"})," will trigger the ",e(c.code,{children:"onChange"})," event."]}),e("br",{}),e("br",{}),t("div",{className:"flex-horizontal",children:[e(r,{title:"Option A",checked:!0,onChange:a=>{console.log("Switch A >>> "+a.currentTarget.checked)}}),e(r,{title:"Option B",onChange:a=>{console.log("Switch B >>> "+a.currentTarget.checked)}})]}),e(i,{code:`
<Switch title={'Option A'}
        checked={true}
        onChange={(e) => {
          console.log("Switch A >>> "+e.currentTarget.checked);
        }} />
<Switch title={'Option B'}
        onChange={(e) => {
          console.log("Switch B >>> "+e.currentTarget.checked);
        }} />
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Size",children:t("div",{className:"preview-panel",children:[t(c.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),t(c.p,{children:["The ",e(c.code,{children:"Switch"})," is available in two sizes: normal (default) and small. You can adjust the size using the ",e(c.code,{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{title:"Normal",checked:!0}),e(r,{size:"small",title:"Small"})]}),e(i,{code:`
<Switch title={'Normal'}
        checked={true} />
<Switch size="small"
        title={'Small'} />
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Color",children:t("div",{className:"preview-panel",children:[t(c.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(c.p,{children:["Use the ",e(c.code,{children:"color"})," prop to apply different color variants to represent specific option types. The default color is ",e(c.code,{children:"primary"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{color:"primary",title:"Primary",checked:!0}),e(r,{color:"secondary",title:"Secondary",checked:!0}),e(r,{color:"success",title:"Success",checked:!0}),e(r,{color:"info",title:"Info",checked:!0}),e(r,{color:"error",title:"Error",checked:!0}),e(r,{color:"warning",title:"Warning",checked:!0})]}),e(i,{code:`
<Switch color="primary"
        title={'Primary'}
        checked={true} />
<Switch color="secondary"
        title={'Secondary'}
        checked={true} />
<Switch color="success"
        title={'Success'}
        checked={true} />
<Switch color="info"
        title={'Info'}
        checked={true} />
<Switch color="error"
        title={'Error'}
        checked={true} />
<Switch color="warning"
        title={'Warning'}
        checked={true} />
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Anchor",children:t("div",{className:"preview-panel",children:[t(c.h4,{id:"anchor",children:["Anchor",e("br",{}),e("br",{})]}),t(c.p,{children:["Use the ",e(c.code,{children:"anchor"})," prop to adjust the position of the text or label on the ",e(c.code,{children:"Switch"})," component.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{anchor:"north",title:"Top",checked:!0}),e(r,{anchor:"south",title:"Bottom",checked:!0}),e(r,{anchor:"west",title:"Left",checked:!0}),e(r,{anchor:"east",title:"Right",checked:!0})]}),e(i,{code:`
<Switch anchor="north"
        title={'Top'}
        checked={true} />
<Switch anchor="south"
        title={'Bottom'}
        checked={true} />
<Switch anchor="west"
        title={'Left'}
        checked={true} />
<Switch anchor="east"
        title={'Right'}
        checked={true} />
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Appearance",children:t("div",{className:"preview-panel",children:[t(c.h4,{id:"appearance",children:["Appearance",e("br",{}),e("br",{})]}),t(c.p,{children:["Use the ",e(c.code,{children:"alwaysHighlight"})," prop to ensure the ",e(c.code,{children:"Switch"})," always displays color, regardless of whether it is on or off. By default, the switch does not always show the color.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{title:"Normal"}),e(r,{alwaysHighlight:!0,title:"Always Highlight"})]}),e(i,{code:`
<Switch title={'Normal'} />
<Switch alwaysHighlight={true}
        title={'Always Highlight'} />
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Enabled/Disabled",children:t("div",{className:"preview-panel",children:[t(c.h4,{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t(c.p,{children:["Use the ",e(c.code,{children:"disabled"})," prop to enable or disable the ",e(c.code,{children:"Switch"}),", with ",e(c.code,{children:"true"})," or ",e(c.code,{children:"false"})," as values. By default, the switch is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{checked:!0,title:"Option A"}),e(r,{disabled:!0,title:"Option B"})]}),e(i,{code:`
<Switch checked={true}
        title={'Option A'} />
<Switch disabled={true}
        title={'Option B'} />
`,language:"tsx",dark:!0})]})})]})}function k(o={}){const{wrapper:c}=Object.assign({},d(),o.components);return c?e(c,{...o,children:e(n,{...o})}):n(o)}const s=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-switch",children:["Basic Switch",e("br",{}),e("br",{})]}),t("p",{children:["For the ",e("code",{children:"Switch"}),", use the ",e("code",{children:"title"})," prop to define the label for the option. The ",e("code",{children:"checked"})," prop sets the initial state to ",e("code",{children:"ON"})," (",e("code",{children:"true"}),") or ",e("code",{children:"OFF"})," (",e("code",{children:"false"}),"). By default, the switch is off. Toggling the ",e("code",{children:"Switch"})," will trigger the ",e("code",{children:"onChange"})," event."]}),e("br",{}),e("br",{}),t("div",{className:"flex-horizontal",children:[e(r,{title:"Option A",checked:!0,onChange:o=>{console.log("Switch A >>> "+o.currentTarget.checked)}}),e(r,{title:"Option B",onChange:o=>{console.log("Switch B >>> "+o.currentTarget.checked)}})]}),e(i,{code:`
<Switch title={'Option A'}
        checked={true}
        onChange={(e) => {
          console.log("Switch A >>> "+e.currentTarget.checked);
        }} />
<Switch title={'Option B'}
        onChange={(e) => {
          console.log("Switch B >>> "+e.currentTarget.checked);
        }} />
`,language:"tsx",dark:!0})]});s.storyName="Basic Checkbox";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-switch">{"Basic Switch"}<br /><br /></h4><p>{"For the "}<code>{"Switch"}</code>{", use the "}<code>{"title"}</code>{" prop to define the label for the option. The "}<code>{"checked"}</code>{" prop sets the initial state to "}<code>{"ON"}</code>{" ("}<code>{"true"}</code>{") or "}<code>{"OFF"}</code>{" ("}<code>{"false"}</code>{"). By default, the switch is off. Toggling the "}<code>{"Switch"}</code>{" will trigger the "}<code>{"onChange"}</code>{" event."}</p><br /><br /><div className={"flex-horizontal"}><Switch title={"Option A"} checked={true} onChange={e => {
      console.log("Switch A >>> " + e.currentTarget.checked);
    }} /><Switch title={"Option B"} onChange={e => {
      console.log("Switch B >>> " + e.currentTarget.checked);
    }} /></div><Source code={\`
<Switch title={'Option A'}
        checked={true}
        onChange={(e) => {
          console.log("Switch A >>> "+e.currentTarget.checked);
        }} />
<Switch title={'Option B'}
        onChange={(e) => {
          console.log("Switch B >>> "+e.currentTarget.checked);
        }} />
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"Switch"})," is available in two sizes: normal (default) and small. You can adjust the size using the ",e("code",{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{title:"Normal",checked:!0}),e(r,{size:"small",title:"Small"})]}),e(i,{code:`
<Switch title={'Normal'}
        checked={true} />
<Switch size="small"
        title={'Small'} />
`,language:"tsx",dark:!0})]});p.storyName="Size";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"The "}<code>{"Switch"}</code>{" is available in two sizes: normal (default) and small. You can adjust the size using the "}<code>{"size"}</code>{" prop."}<br /><br /></p><div className={"flex-horizontal"}><Switch title={"Normal"} checked={true} /><Switch size="small" title={"Small"} /></div><Source code={\`
<Switch title={'Normal'}
        checked={true} />
<Switch size="small"
        title={'Small'} />
\`} language={"tsx"} dark={true} /></div>`}};const u=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"color"})," prop to apply different color variants to represent specific option types. The default color is ",e("code",{children:"primary"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{color:"primary",title:"Primary",checked:!0}),e(r,{color:"secondary",title:"Secondary",checked:!0}),e(r,{color:"success",title:"Success",checked:!0}),e(r,{color:"info",title:"Info",checked:!0}),e(r,{color:"error",title:"Error",checked:!0}),e(r,{color:"warning",title:"Warning",checked:!0})]}),e(i,{code:`
<Switch color="primary"
        title={'Primary'}
        checked={true} />
<Switch color="secondary"
        title={'Secondary'}
        checked={true} />
<Switch color="success"
        title={'Success'}
        checked={true} />
<Switch color="info"
        title={'Info'}
        checked={true} />
<Switch color="error"
        title={'Error'}
        checked={true} />
<Switch color="warning"
        title={'Warning'}
        checked={true} />
`,language:"tsx",dark:!0})]});u.storyName="Color";u.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"Use the "}<code>{"color"}</code>{" prop to apply different color variants to represent specific option types. The default color is "}<code>{"primary"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><Switch color="primary" title={"Primary"} checked={true} /><Switch color="secondary" title={"Secondary"} checked={true} /><Switch color="success" title={"Success"} checked={true} /><Switch color="info" title={"Info"} checked={true} /><Switch color="error" title={"Error"} checked={true} /><Switch color="warning" title={"Warning"} checked={true} /></div><Source code={\`
<Switch color="primary"
        title={'Primary'}
        checked={true} />
<Switch color="secondary"
        title={'Secondary'}
        checked={true} />
<Switch color="success"
        title={'Success'}
        checked={true} />
<Switch color="info"
        title={'Info'}
        checked={true} />
<Switch color="error"
        title={'Error'}
        checked={true} />
<Switch color="warning"
        title={'Warning'}
        checked={true} />
\`} language={"tsx"} dark={true} /></div>`}};const w=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"anchor",children:["Anchor",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"anchor"})," prop to adjust the position of the text or label on the ",e("code",{children:"Switch"})," component.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{anchor:"north",title:"Top",checked:!0}),e(r,{anchor:"south",title:"Bottom",checked:!0}),e(r,{anchor:"west",title:"Left",checked:!0}),e(r,{anchor:"east",title:"Right",checked:!0})]}),e(i,{code:`
<Switch anchor="north"
        title={'Top'}
        checked={true} />
<Switch anchor="south"
        title={'Bottom'}
        checked={true} />
<Switch anchor="west"
        title={'Left'}
        checked={true} />
<Switch anchor="east"
        title={'Right'}
        checked={true} />
`,language:"tsx",dark:!0})]});w.storyName="Anchor";w.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="anchor">{"Anchor"}<br /><br /></h4><p>{"Use the "}<code>{"anchor"}</code>{" prop to adjust the position of the text or label on the "}<code>{"Switch"}</code>{" component."}<br /><br /></p><div className={"flex-horizontal"}><Switch anchor="north" title={"Top"} checked={true} /><Switch anchor="south" title={"Bottom"} checked={true} /><Switch anchor="west" title={"Left"} checked={true} /><Switch anchor="east" title={"Right"} checked={true} /></div><Source code={\`
<Switch anchor="north"
        title={'Top'}
        checked={true} />
<Switch anchor="south"
        title={'Bottom'}
        checked={true} />
<Switch anchor="west"
        title={'Left'}
        checked={true} />
<Switch anchor="east"
        title={'Right'}
        checked={true} />
\`} language={"tsx"} dark={true} /></div>`}};const g=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"appearance",children:["Appearance",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"alwaysHighlight"})," prop to ensure the ",e("code",{children:"Switch"})," always displays color, regardless of whether it is on or off. By default, the switch does not always show the color.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{title:"Normal"}),e(r,{alwaysHighlight:!0,title:"Always Highlight"})]}),e(i,{code:`
<Switch title={'Normal'} />
<Switch alwaysHighlight={true}
        title={'Always Highlight'} />
`,language:"tsx",dark:!0})]});g.storyName="Appearance";g.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="appearance">{"Appearance"}<br /><br /></h4><p>{"Use the "}<code>{"alwaysHighlight"}</code>{" prop to ensure the "}<code>{"Switch"}</code>{" always displays color, regardless of whether it is on or off. By default, the switch does not always show the color."}<br /><br /></p><div className={"flex-horizontal"}><Switch title={"Normal"} /><Switch alwaysHighlight={true} title={"Always Highlight"} /></div><Source code={\`
<Switch title={'Normal'} />
<Switch alwaysHighlight={true}
        title={'Always Highlight'} />
\`} language={"tsx"} dark={true} /></div>`}};const S=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"disabled"})," prop to enable or disable the ",e("code",{children:"Switch"}),", with ",e("code",{children:"true"})," or ",e("code",{children:"false"})," as values. By default, the switch is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(r,{checked:!0,title:"Option A"}),e(r,{disabled:!0,title:"Option B"})]}),e(i,{code:`
<Switch checked={true}
        title={'Option A'} />
<Switch disabled={true}
        title={'Option B'} />
`,language:"tsx",dark:!0})]});S.storyName="Enabled/Disabled";S.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled">{"Enabled/Disabled"}<br /><br /></h4><p>{"Use the "}<code>{"disabled"}</code>{" prop to enable or disable the "}<code>{"Switch"}</code>{", with "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{" as values. By default, the switch is enabled."}<br /><br /></p><div className={"flex-horizontal"}><Switch checked={true} title={"Option A"} /><Switch disabled={true} title={"Option B"} /></div><Source code={\`
<Switch checked={true}
        title={'Option A'} />
<Switch disabled={true}
        title={'Option B'} />
\`} language={"tsx"} dark={true} /></div>`}};const h={title:"clients/ui/checkbox/Switch",tags:["stories-mdx"],includeStories:["basicCheckbox","size","color","anchor","appearance","enabledDisabled"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:k};const E=["basicCheckbox","size","color","anchor","appearance","enabledDisabled"];export{E as __namedExportsOrder,w as anchor,g as appearance,s as basicCheckbox,u as color,h as default,S as enabledDisabled,p as size};
