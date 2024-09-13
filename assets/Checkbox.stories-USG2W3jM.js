import{b as i,M as g,d as o}from"./index-DVow2ixS.js";import{C as c}from"./Checkbox-CbJTyfsx.js";import{j as t,a as e,F as y}from"./Divider-DdokZ4G_.js";import{useMDXComponents as a}from"./index-BnapxFVb.js";import"./iframe-DCMQFdKf.js";import"../sb-preview/runtime.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ColorUtil-DKEMF1mc.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-V2LljsIL.js";function n(l){const r=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},a(),l.components);return t(y,{children:[e(g,{title:"clients/ui/checkbox/Checkbox"}),`
`,t("div",{className:"preview-panel",children:[e(r.h1,{id:"checkbox-component",children:"Checkbox Component"}),t(r.p,{children:["The ",e(r.code,{children:"Checkbox"})," component enables users to select or deselect action items. It can be applied to a single option or a list of multiple items for user selection. Here’s an example of how to use it."]})]}),`
`,e(o,{name:"Basic Checkbox",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"basic-checkbox",children:["Basic Checkbox",e("br",{}),e("br",{})]}),t(r.p,{children:["For the ",e(r.code,{children:"Checkbox"}),", use the ",e(r.code,{children:"title"})," prop to define the text for the options. Use the ",e(r.code,{children:"checked"})," prop to initially set the option as selected (true) or deselected (false). By default, the option is deselected. Selecting a ",e(r.code,{children:"Checkbox"})," will trigger the onChange event.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Choice #1",onChange:d=>{console.log("Selected choice 1 >>> "+d.currentTarget.checked)}}),e(c,{title:"Choice #2",onChange:d=>{console.log("Selected choice 2 >>> "+d.currentTarget.checked)}}),e(c,{title:"Choice #3",onChange:d=>{console.log("Selected choice 3 >>> "+d.currentTarget.checked)}})]}),e(i,{code:`
<Checkbox title={'Choice #1'}
          onChange={(e) => {
            console.log("Selected choice 1 >>> "+e.currentTarget.checked);
          }} />
<Checkbox title={'Choice #2'}
          onChange={(e) => {
            console.log("Selected choice 2 >>> "+e.currentTarget.checked);
          }} />
<Checkbox title={'Choice #3'}
          onChange={(e) => {
            console.log("Selected choice 3 >>> "+e.currentTarget.checked);
          }} />
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Size",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),t(r.p,{children:["The ",e(r.code,{children:"Checkbox"})," comes in two sizes: normal (default) and small. You can set the size using the ",e(r.code,{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Normal",checked:!0}),e(c,{size:"small",title:"Small"})]}),e(i,{code:`
<Checkbox title={'Normal'}
          checked={true} />
<Checkbox size="small"
          title={'Small'} />
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Color",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(r.p,{children:["The ",e(r.code,{children:"color"})," prop allows you to apply different color variants, each representing a specific option type. The ",e(r.code,{children:"primary"})," color is the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{color:"primary",title:"Primary",checked:!0}),e(c,{color:"secondary",title:"Secondary",checked:!0}),e(c,{color:"success",title:"Success",checked:!0}),e(c,{color:"info",title:"Info",checked:!0}),e(c,{color:"error",title:"Error",checked:!0}),e(c,{color:"warning",title:"Warning",checked:!0})]}),e(i,{code:`
<Checkbox color="primary"
          title={'Primary'}
          checked={true} />
<Checkbox color="secondary"
          title={'Secondary'}
          checked={true} />
<Checkbox color="success"
          title={'Success'}
          checked={true} />
<Checkbox color="info"
          title={'Info'}
          checked={true} />
<Checkbox color="error"
          title={'Error'}
          checked={true} />
<Checkbox color="warning"
          title={'Warning'}
          checked={true} />
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Hue",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t(r.p,{children:["You can customize the color tone of the ",e(r.code,{children:"Checkbox"})," component using the ",e(r.code,{children:"hue"})," prop, allowing you to select shades or tones that match your design preferences.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{hue:"light",title:"Light",checked:!0}),e(c,{hue:"main",title:"Normal",checked:!0}),e(c,{hue:"dark",title:"Dark",checked:!0}),e(c,{hue:"darker",title:"Darker",checked:!0})]}),e(i,{code:`
<Checkbox hue="light"
          title={'Light'}
          checked={true} />
<Checkbox hue="main"
          title={'Normal'}
          checked={true} />
<Checkbox hue="dark"
          title={'Dark'}
          checked={true} />
<Checkbox hue="darker"
          title={'Darker'}
          checked={true} />
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Checked/Unchecked",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"checkedunchecked",children:["Checked/Unchecked",e("br",{}),e("br",{})]}),t(r.p,{children:["Use the ",e(r.code,{children:"checked"})," prop to initially set the option as selected (",e(r.code,{children:"true"}),") or deselected (",e(r.code,{children:"false"}),"). By default, the checkbox is deselected.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Option A"}),e(c,{checked:!0,title:"Option B"}),e(c,{checked:!0,title:"Option C"}),e(c,{title:"Option D"})]}),e(i,{code:`
<Checkbox title={'Option A'} />
<Checkbox checked={true}
          title={'Option B'} />
<Checkbox checked={true}
          title={'Option C'} />
<Checkbox title={'Option D'} />
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Enabled/Disabled",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t(r.p,{children:["To enable or disable the ",e(r.code,{children:"Checkbox"}),", use the ",e(r.code,{children:"disabled"})," prop with a value of ",e(r.code,{children:"true"})," or ",e(r.code,{children:"false"}),". By default, the checkbox is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Monday"}),e(c,{title:"Tuesday"}),e(c,{disabled:!0,checked:!0,title:"Wednesday"}),e(c,{title:"Thursday"}),e(c,{disabled:!0,title:"Friday"})]}),e(i,{code:`
<Checkbox title={'Monday'} />
<Checkbox title={'Tuesday'} />
<Checkbox disabled={true}
          checked={true}
          title={'Wednesday'} />
<Checkbox title={'Thursday'} />
<Checkbox disabled={true}
          title={'Friday'} />
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Indeterminate Checkbox",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"indeterminate-checkbox",children:["Indeterminate Checkbox",e("br",{}),e("br",{})]}),t(r.p,{children:[e(r.code,{children:"Indeterminate checkboxes"})," represent a state that is neither fully checked nor unchecked. They are often used in hierarchical checkbox groups to indicate that only some of the checkbox's child options are selected.",e("br",{}),e("br",{})]}),t("div",{className:"grid-vertical full-width no-gap",children:[e(c,{indeterminate:!0,checked:!0,title:"Fruits"}),t("ul",{style:{listStyleType:"none"},children:[e("li",{children:e(c,{title:"Apples"})}),e("li",{children:e(c,{title:"Bananas",checked:!0})}),e("li",{children:e(c,{title:"Mangoes",checked:!0})}),e("li",{children:e(c,{title:"Oranges"})})]})]}),e(i,{code:`
<div>
  <Checkbox indeterminate={true}
            checked={true}
            title={'Fruits'} />
  <ul style={{listStyleType: 'none'}}>
    <li><Checkbox title={'Apples'} /></li>
    <li><Checkbox title={'Bananas'} checked={true} /></li>
    <li><Checkbox title={'Mangoes'} checked={true} /></li>
    <li><Checkbox title={'Oranges'} /></li>
  </ul>
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Full Width",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t(r.p,{children:["To make the ",e(r.code,{children:"Checkbox"})," fill the width of its parent container, set the ",e(r.code,{children:"fullWidth"})," prop to ",e(r.code,{children:"true"})," or ",e(r.code,{children:"false"}),", depending on the desired layout.",e("br",{}),e("br",{})]}),t("div",{className:"grid-vertical full-width no-gap",children:[e(c,{fullWidth:!0,checked:!0,title:"Full Width #1"}),e(c,{fullWidth:!1,title:"Full Width #2"})]}),e(i,{code:`
<Checkbox fullWidth={true}
          checked={true}
          title={'Full Width #1'} />
<Checkbox fullWidth={true}
          title={'Full Width #2'} />
`,language:"tsx",dark:!0})]})}),`
`,e(o,{name:"Ripple Effect",children:t("div",{className:"preview-panel",children:[t(r.h4,{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t(r.p,{children:["By default, the ",e(r.code,{children:"Checkbox"})," has a ripple effect when clicked. To disable this effect, set the ",e(r.code,{children:"noRippleEffect"})," prop to true.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{noRippleEffect:"true",title:"Checkbox with no Ripple Effect"}),e(c,{title:"Checkbox with Ripple Effect",checked:!0})]}),e(i,{code:`
<Checkbox noRippleEffect="true"
          title={'Checkbox with no Ripple Effect'} />
<Checkbox title={'Checkbox with Ripple Effect'}
          checked={true} />
`,language:"tsx",dark:!0})]})})]})}function v(l={}){const{wrapper:r}=Object.assign({},a(),l.components);return r?e(r,{...l,children:e(n,{...l})}):n(l)}const s=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-checkbox",children:["Basic Checkbox",e("br",{}),e("br",{})]}),t("p",{children:["For the ",e("code",{children:"Checkbox"}),", use the ",e("code",{children:"title"})," prop to define the text for the options. Use the ",e("code",{children:"checked"})," prop to initially set the option as selected (true) or deselected (false). By default, the option is deselected. Selecting a ",e("code",{children:"Checkbox"})," will trigger the onChange event.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Choice #1",onChange:l=>{console.log("Selected choice 1 >>> "+l.currentTarget.checked)}}),e(c,{title:"Choice #2",onChange:l=>{console.log("Selected choice 2 >>> "+l.currentTarget.checked)}}),e(c,{title:"Choice #3",onChange:l=>{console.log("Selected choice 3 >>> "+l.currentTarget.checked)}})]}),e(i,{code:`
<Checkbox title={'Choice #1'}
          onChange={(e) => {
            console.log("Selected choice 1 >>> "+e.currentTarget.checked);
          }} />
<Checkbox title={'Choice #2'}
          onChange={(e) => {
            console.log("Selected choice 2 >>> "+e.currentTarget.checked);
          }} />
<Checkbox title={'Choice #3'}
          onChange={(e) => {
            console.log("Selected choice 3 >>> "+e.currentTarget.checked);
          }} />
`,language:"tsx",dark:!0})]});s.storyName="Basic Checkbox";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-checkbox">{"Basic Checkbox"}<br /><br /></h4><p>{"For the "}<code>{"Checkbox"}</code>{", use the "}<code>{"title"}</code>{" prop to define the text for the options. Use the "}<code>{"checked"}</code>{" prop to initially set the option as selected (true) or deselected (false). By default, the option is deselected. Selecting a "}<code>{"Checkbox"}</code>{" will trigger the onChange event."}<br /><br /></p><div className={"flex-horizontal"}><Checkbox title={"Choice #1"} onChange={e => {
      console.log("Selected choice 1 >>> " + e.currentTarget.checked);
    }} /><Checkbox title={"Choice #2"} onChange={e => {
      console.log("Selected choice 2 >>> " + e.currentTarget.checked);
    }} /><Checkbox title={"Choice #3"} onChange={e => {
      console.log("Selected choice 3 >>> " + e.currentTarget.checked);
    }} /></div><Source code={\`
<Checkbox title={'Choice #1'}
          onChange={(e) => {
            console.log("Selected choice 1 >>> "+e.currentTarget.checked);
          }} />
<Checkbox title={'Choice #2'}
          onChange={(e) => {
            console.log("Selected choice 2 >>> "+e.currentTarget.checked);
          }} />
<Checkbox title={'Choice #3'}
          onChange={(e) => {
            console.log("Selected choice 3 >>> "+e.currentTarget.checked);
          }} />
\`} language={"tsx"} dark={true} /></div>`}};const u=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"Checkbox"})," comes in two sizes: normal (default) and small. You can set the size using the ",e("code",{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Normal",checked:!0}),e(c,{size:"small",title:"Small"})]}),e(i,{code:`
<Checkbox title={'Normal'}
          checked={true} />
<Checkbox size="small"
          title={'Small'} />
`,language:"tsx",dark:!0})]});u.storyName="Size";u.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"The "}<code>{"Checkbox"}</code>{" comes in two sizes: normal (default) and small. You can set the size using the "}<code>{"size"}</code>{" prop."}<br /><br /></p><div className={"flex-horizontal"}><Checkbox title={"Normal"} checked={true} /><Checkbox size="small" title={"Small"} /></div><Source code={\`
<Checkbox title={'Normal'}
          checked={true} />
<Checkbox size="small"
          title={'Small'} />
\`} language={"tsx"} dark={true} /></div>`}};const k=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"color"})," prop allows you to apply different color variants, each representing a specific option type. The ",e("code",{children:"primary"})," color is the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{color:"primary",title:"Primary",checked:!0}),e(c,{color:"secondary",title:"Secondary",checked:!0}),e(c,{color:"success",title:"Success",checked:!0}),e(c,{color:"info",title:"Info",checked:!0}),e(c,{color:"error",title:"Error",checked:!0}),e(c,{color:"warning",title:"Warning",checked:!0})]}),e(i,{code:`
<Checkbox color="primary"
          title={'Primary'}
          checked={true} />
<Checkbox color="secondary"
          title={'Secondary'}
          checked={true} />
<Checkbox color="success"
          title={'Success'}
          checked={true} />
<Checkbox color="info"
          title={'Info'}
          checked={true} />
<Checkbox color="error"
          title={'Error'}
          checked={true} />
<Checkbox color="warning"
          title={'Warning'}
          checked={true} />
`,language:"tsx",dark:!0})]});k.storyName="Color";k.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"The "}<code>{"color"}</code>{" prop allows you to apply different color variants, each representing a specific option type. The "}<code>{"primary"}</code>{" color is the default."}<br /><br /></p><div className={"flex-horizontal"}><Checkbox color="primary" title={"Primary"} checked={true} /><Checkbox color="secondary" title={"Secondary"} checked={true} /><Checkbox color="success" title={"Success"} checked={true} /><Checkbox color="info" title={"Info"} checked={true} /><Checkbox color="error" title={"Error"} checked={true} /><Checkbox color="warning" title={"Warning"} checked={true} /></div><Source code={\`
<Checkbox color="primary"
          title={'Primary'}
          checked={true} />
<Checkbox color="secondary"
          title={'Secondary'}
          checked={true} />
<Checkbox color="success"
          title={'Success'}
          checked={true} />
<Checkbox color="info"
          title={'Info'}
          checked={true} />
<Checkbox color="error"
          title={'Error'}
          checked={true} />
<Checkbox color="warning"
          title={'Warning'}
          checked={true} />
\`} language={"tsx"} dark={true} /></div>`}};const b=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t("p",{children:["You can customize the color tone of the ",e("code",{children:"Checkbox"})," component using the ",e("code",{children:"hue"})," prop, allowing you to select shades or tones that match your design preferences.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{hue:"light",title:"Light",checked:!0}),e(c,{hue:"main",title:"Normal",checked:!0}),e(c,{hue:"dark",title:"Dark",checked:!0}),e(c,{hue:"darker",title:"Darker",checked:!0})]}),e(i,{code:`
<Checkbox hue="light"
          title={'Light'}
          checked={true} />
<Checkbox hue="main"
          title={'Normal'}
          checked={true} />
<Checkbox hue="dark"
          title={'Dark'}
          checked={true} />
<Checkbox hue="darker"
          title={'Darker'}
          checked={true} />
`,language:"tsx",dark:!0})]});b.storyName="Hue";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"You can customize the color tone of the "}<code>{"Checkbox"}</code>{" component using the "}<code>{"hue"}</code>{" prop, allowing you to select shades or tones that match your design preferences."}<br /><br /></p><div className={"flex-horizontal"}><Checkbox hue="light" title={"Light"} checked={true} /><Checkbox hue="main" title={"Normal"} checked={true} /><Checkbox hue="dark" title={"Dark"} checked={true} /><Checkbox hue="darker" title={"Darker"} checked={true} /></div><Source code={\`
<Checkbox hue="light"
          title={'Light'}
          checked={true} />
<Checkbox hue="main"
          title={'Normal'}
          checked={true} />
<Checkbox hue="dark"
          title={'Dark'}
          checked={true} />
<Checkbox hue="darker"
          title={'Darker'}
          checked={true} />
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"checkedunchecked",children:["Checked/Unchecked",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"checked"})," prop to initially set the option as selected (",e("code",{children:"true"}),") or deselected (",e("code",{children:"false"}),"). By default, the checkbox is deselected.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Option A"}),e(c,{checked:!0,title:"Option B"}),e(c,{checked:!0,title:"Option C"}),e(c,{title:"Option D"})]}),e(i,{code:`
<Checkbox title={'Option A'} />
<Checkbox checked={true}
          title={'Option B'} />
<Checkbox checked={true}
          title={'Option C'} />
<Checkbox title={'Option D'} />
`,language:"tsx",dark:!0})]});p.storyName="Checked/Unchecked";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="checkedunchecked">{"Checked/Unchecked"}<br /><br /></h4><p>{"Use the "}<code>{"checked"}</code>{" prop to initially set the option as selected ("}<code>{"true"}</code>{") or deselected ("}<code>{"false"}</code>{"). By default, the checkbox is deselected."}<br /><br /></p><div className={"flex-horizontal"}><Checkbox title={"Option A"} /><Checkbox checked={true} title={"Option B"} /><Checkbox checked={true} title={"Option C"} /><Checkbox title={"Option D"} /></div><Source code={\`
<Checkbox title={'Option A'} />
<Checkbox checked={true}
          title={'Option B'} />
<Checkbox checked={true}
          title={'Option C'} />
<Checkbox title={'Option D'} />
\`} language={"tsx"} dark={true} /></div>`}};const x=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t("p",{children:["To enable or disable the ",e("code",{children:"Checkbox"}),", use the ",e("code",{children:"disabled"})," prop with a value of ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the checkbox is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{title:"Monday"}),e(c,{title:"Tuesday"}),e(c,{disabled:!0,checked:!0,title:"Wednesday"}),e(c,{title:"Thursday"}),e(c,{disabled:!0,title:"Friday"})]}),e(i,{code:`
<Checkbox title={'Monday'} />
<Checkbox title={'Tuesday'} />
<Checkbox disabled={true}
          checked={true}
          title={'Wednesday'} />
<Checkbox title={'Thursday'} />
<Checkbox disabled={true}
          title={'Friday'} />
`,language:"tsx",dark:!0})]});x.storyName="Enabled/Disabled";x.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled">{"Enabled/Disabled"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"Checkbox"}</code>{", use the "}<code>{"disabled"}</code>{" prop with a value of "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the checkbox is enabled."}<br /><br /></p><div className={"flex-horizontal"}><Checkbox title={"Monday"} /><Checkbox title={"Tuesday"} /><Checkbox disabled={true} checked={true} title={"Wednesday"} /><Checkbox title={"Thursday"} /><Checkbox disabled={true} title={"Friday"} /></div><Source code={\`
<Checkbox title={'Monday'} />
<Checkbox title={'Tuesday'} />
<Checkbox disabled={true}
          checked={true}
          title={'Wednesday'} />
<Checkbox title={'Thursday'} />
<Checkbox disabled={true}
          title={'Friday'} />
\`} language={"tsx"} dark={true} /></div>`}};const C=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"indeterminate-checkbox",children:["Indeterminate Checkbox",e("br",{}),e("br",{})]}),t("p",{children:[e("code",{children:"Indeterminate checkboxes"})," represent a state that is neither fully checked nor unchecked. They are often used in hierarchical checkbox groups to indicate that only some of the checkbox's child options are selected.",e("br",{}),e("br",{})]}),t("div",{className:"grid-vertical full-width no-gap",children:[e(c,{indeterminate:!0,checked:!0,title:"Fruits"}),t("ul",{style:{listStyleType:"none"},children:[e("li",{children:e(c,{title:"Apples"})}),e("li",{children:e(c,{title:"Bananas",checked:!0})}),e("li",{children:e(c,{title:"Mangoes",checked:!0})}),e("li",{children:e(c,{title:"Oranges"})})]})]}),e(i,{code:`
<div>
  <Checkbox indeterminate={true}
            checked={true}
            title={'Fruits'} />
  <ul style={{listStyleType: 'none'}}>
    <li><Checkbox title={'Apples'} /></li>
    <li><Checkbox title={'Bananas'} checked={true} /></li>
    <li><Checkbox title={'Mangoes'} checked={true} /></li>
    <li><Checkbox title={'Oranges'} /></li>
  </ul>
</div>
`,language:"tsx",dark:!0})]});C.storyName="Indeterminate Checkbox";C.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="indeterminate-checkbox">{"Indeterminate Checkbox"}<br /><br /></h4><p><code>{"Indeterminate checkboxes"}</code>{" represent a state that is neither fully checked nor unchecked. They are often used in hierarchical checkbox groups to indicate that only some of the checkbox's child options are selected."}<br /><br /></p><div className={"grid-vertical full-width no-gap"}><Checkbox indeterminate={true} checked={true} title={"Fruits"} /><ul style={{
      listStyleType: "none"
    }}><li><Checkbox title={"Apples"} /></li><li><Checkbox title={"Bananas"} checked={true} /></li><li><Checkbox title={"Mangoes"} checked={true} /></li><li><Checkbox title={"Oranges"} /></li></ul></div><Source code={\`
<div>
  <Checkbox indeterminate={true}
            checked={true}
            title={'Fruits'} />
  <ul style={{listStyleType: 'none'}}>
    <li><Checkbox title={'Apples'} /></li>
    <li><Checkbox title={'Bananas'} checked={true} /></li>
    <li><Checkbox title={'Mangoes'} checked={true} /></li>
    <li><Checkbox title={'Oranges'} /></li>
  </ul>
</div>
\`} language={"tsx"} dark={true} /></div>`}};const f=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"full-width",children:["Full Width",e("br",{}),e("br",{})]}),t("p",{children:["To make the ",e("code",{children:"Checkbox"})," fill the width of its parent container, set the ",e("code",{children:"fullWidth"})," prop to ",e("code",{children:"true"})," or ",e("code",{children:"false"}),", depending on the desired layout.",e("br",{}),e("br",{})]}),t("div",{className:"grid-vertical full-width no-gap",children:[e(c,{fullWidth:!0,checked:!0,title:"Full Width #1"}),e(c,{fullWidth:!1,title:"Full Width #2"})]}),e(i,{code:`
<Checkbox fullWidth={true}
          checked={true}
          title={'Full Width #1'} />
<Checkbox fullWidth={true}
          title={'Full Width #2'} />
`,language:"tsx",dark:!0})]});f.storyName="Full Width";f.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="full-width">{"Full Width"}<br /><br /></h4><p>{"To make the "}<code>{"Checkbox"}</code>{" fill the width of its parent container, set the "}<code>{"fullWidth"}</code>{" prop to "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{", depending on the desired layout."}<br /><br /></p><div className={"grid-vertical full-width no-gap"}><Checkbox fullWidth={true} checked={true} title={"Full Width #1"} /><Checkbox fullWidth={false} title={"Full Width #2"} /></div><Source code={\`
<Checkbox fullWidth={true}
          checked={true}
          title={'Full Width #1'} />
<Checkbox fullWidth={true}
          title={'Full Width #2'} />
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t("p",{children:["By default, the ",e("code",{children:"Checkbox"})," has a ripple effect when clicked. To disable this effect, set the ",e("code",{children:"noRippleEffect"})," prop to true.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(c,{noRippleEffect:"true",title:"Checkbox with no Ripple Effect"}),e(c,{title:"Checkbox with Ripple Effect",checked:!0})]}),e(i,{code:`
<Checkbox noRippleEffect="true"
          title={'Checkbox with no Ripple Effect'} />
<Checkbox title={'Checkbox with Ripple Effect'}
          checked={true} />
`,language:"tsx",dark:!0})]});m.storyName="Ripple Effect";m.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"Checkbox"}</code>{" has a ripple effect when clicked. To disable this effect, set the "}<code>{"noRippleEffect"}</code>{" prop to true."}<br /><br /></p><div className={"flex-horizontal"}><Checkbox noRippleEffect="true" title={"Checkbox with no Ripple Effect"} /><Checkbox title={"Checkbox with Ripple Effect"} checked={true} /></div><Source code={\`
<Checkbox noRippleEffect="true"
          title={'Checkbox with no Ripple Effect'} />
<Checkbox title={'Checkbox with Ripple Effect'}
          checked={true} />
\`} language={"tsx"} dark={true} /></div>`}};const h={title:"clients/ui/checkbox/Checkbox",tags:["stories-mdx"],includeStories:["basicCheckbox","size","color","hue","checkedUnchecked","enabledDisabled","indeterminateCheckbox","fullWidth","rippleEffect"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:v};const L=["basicCheckbox","size","color","hue","checkedUnchecked","enabledDisabled","indeterminateCheckbox","fullWidth","rippleEffect"];export{L as __namedExportsOrder,s as basicCheckbox,p as checkedUnchecked,k as color,h as default,x as enabledDisabled,f as fullWidth,b as hue,C as indeterminateCheckbox,m as rippleEffect,u as size};
