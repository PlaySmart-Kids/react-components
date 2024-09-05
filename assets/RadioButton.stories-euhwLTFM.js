import{b as n,M as B,d as l}from"./index-D8Bq1aUh.js";import{R as a}from"./RadioButton-CvYUyq31.js";import{j as t,a as e,F as R}from"./DefaultThemeProvider-DbvuuPiG.js";import"./index-BwDkhjyp.js";import{useMDXComponents as u}from"./index-BnapxFVb.js";import"./iframe-CIX_G1sr.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-CLSESEbx.js";import"./CheckboxUtil-CqPWmFQ9.js";function d(i){const o=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},u(),i.components);return t(R,{children:[e(B,{title:"clients/ui/button/RadioButton"}),`
`,t("div",{className:"preview-panel",children:[e(o.h1,{id:"radiobutton-component",children:"RadioButton Component"}),t(o.p,{children:["The ",e(o.code,{children:"RadioButton"})," component allows the user to select one option from a set of mutually exclusive choices. Here’s an example of how to use it."]})]}),`
`,e(l,{name:"Basic RadioButton",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"basic-radiobutton",children:["Basic RadioButton",e("br",{}),e("br",{})]}),t(o.p,{children:["For the ",e(o.code,{children:"RadioButton"}),", use the ",e(o.code,{children:"title"})," prop to set the text for the choices. You can assign a name and value to each button using the ",e(o.code,{children:"name"})," and ",e(o.code,{children:"value"})," props.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Choice #1",name:"choice",value:"1",onChange:r=>{console.log("hello >>> "+r.currentTarget.value)}}),e(a,{title:"Choice #2",name:"choice",value:"2",onChange:r=>{console.log("hello >>> "+r.currentTarget.value)}}),e(a,{title:"Choice #3",name:"choice",value:"3",onChange:r=>{console.log("hello >>> "+r.currentTarget.value)}})]}),e(n,{code:`
<div>
  <RadioButton title={'Choice #1'}
               name={'choice'}
               value={'1'} />
  <RadioButton title={'Choice #2'}
               name={'choice'}
               value={'2'} />
  <RadioButton title={'Choice #3'}
               name={'choice'}
               value={'3'} />
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Size",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"size",children:["Size",e("br",{}),e("br",{})]}),t(o.p,{children:["The ",e(o.code,{children:"RadioButton"})," is available in two sizes, normal (default) and small, which can be set using the ",e(o.code,{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Normal",name:"a",value:"0",checked:!0}),e(a,{size:"small",title:"Small",name:"a",value:"1"})]}),e(n,{code:`
<div>
  <RadioButton title={'Normal'}
               name={'a'}
               value={'0'}
               checked={true} />
  <RadioButton size="small"
               title={'Small'}
               name={'a'}
               value={'1'} />
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Color",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(o.p,{children:["You can use the ",e(o.code,{children:"color"})," prop to apply different color variants, each representing a specific button type. The ",e(o.code,{children:"primary"})," color is the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{color:"primary",title:"Primary",name:"b",value:"0"}),e(a,{color:"secondary",title:"Secondary",name:"b",value:"1"}),e(a,{color:"success",title:"Success",name:"b",value:"2",checked:!0}),e(a,{color:"info",title:"Info",name:"b",value:"3"}),e(a,{color:"error",title:"Error",name:"b",value:"4"}),e(a,{color:"warning",title:"Warning",name:"b",value:"5"})]}),e(n,{code:`
<div>
  <RadioButton color="primary"
               title={'Primary'}
               name={'b'}
               value={'0'} />
  <RadioButton color="secondary"
               title={'Secondary'}
               name={'b'}
               value={'1'} />
  <RadioButton color="success"
               title={'Success'}
               name={'b'}
               value={'2'}
               checked={true} />
  <RadioButton color="info"
               title={'Info'}
               name={'b'}
               value={'3'} />
  <RadioButton color="error"
               title={'Error'}
               name={'b'}
               value={'4'} />
  <RadioButton color="warning"
               title={'Warning'}
               name={'b'}
               value={'5'} />
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Hue",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t(o.p,{children:["You can customize the color tone of the RadioButton component with the ",e(o.code,{children:"hue"})," prop, enabling you to select shades or tones that fit your design preferences.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{hue:"light",title:"Light",name:"c",value:"0",checked:!0}),e(a,{hue:"main",title:"Normal",name:"c",value:"1"}),e(a,{hue:"dark",title:"Dark",name:"c",value:"2"}),e(a,{hue:"darker",title:"Darker",name:"c",value:"3"})]}),e(n,{code:`
<div>
  <RadioButton hue="light"
               title={'Light'}
               name={'c'}
               value={'0'}
               checked={true} />
  <RadioButton hue="main"
               title={'Normal'}
               name={'c'}
               value={'1'} />
  <RadioButton hue="dark"
               title={'Dark'}
               name={'c'}
               value={'2'} />
  <RadioButton hue="darker"
               title={'Darker'}
               name={'c'}
               value={'3'} />
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Checked/Unchecked Button",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"checkedunchecked-button",children:["Checked/Unchecked Button",e("br",{}),e("br",{})]}),t(o.p,{children:["Use the ",e(o.code,{children:"checked"})," prop to initially set the choice as selected (",e(o.code,{children:"true"}),") or deselected (",e(o.code,{children:"false"}),"). By default, the choice is deselected.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Option A",name:"d",value:"0"}),e(a,{checked:!0,title:"Option B",name:"d",value:"1"})]}),e(n,{code:`
<div>
  <RadioButton title={'Option A'}
               name={'d'}
               value={'0'} />
  <RadioButton checked={true}
               title={'Option B'}
               name={'d'}
               value={'1'} />
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Enabled/Disabled Button",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t(o.p,{children:["To enable or disable the ",e(o.code,{children:"RadioButton"}),", use the ",e(o.code,{children:"disabled"})," prop with a value of ",e(o.code,{children:"true"})," or ",e(o.code,{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"XSmall",name:"e",value:"0",checked:!0}),e(a,{title:"Small",name:"e",value:"1"}),e(a,{disabled:!0,title:"Medium (Out Of Stock)",name:"e",value:"2"}),e(a,{title:"Large",name:"e",value:"3"}),e(a,{title:"XLarge",name:"e",value:"4"})]}),e(n,{code:`
<div>
  <RadioButton title={'XSmall'}
               name={'e'}
               value={'0'}
               checked={true} />
  <RadioButton title={'Small'}
               name={'e'}
               value={'1'} />
  <RadioButton disabled={true}
               title={'Medium (Out Of Stock)'}
               name={'e'}
               value={'2'} />
  <RadioButton title={'Large'}
               name={'e'}
               value={'3'} />
  <RadioButton title={'XLarge'}
               name={'e'}
               value={'4'} />
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Ripple Effect",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t(o.p,{children:["By default, the ",e(o.code,{children:"RadioButton"})," includes a ripple effect when clicked, but you can disable it by setting ",e(o.code,{children:"noRippleEffect"})," to ",e(o.code,{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{noRippleEffect:"true",title:"Button with no Ripple Effect",name:"f",value:"0"}),e(a,{title:"Button with Ripple Effect",name:"f",value:"1",checked:!0})]}),e(n,{code:`
<div>
  <RadioButton noRippleEffect="true"
               title={'Button with no Ripple Effect'}
               name={'f'}
               value={'0'} />
  <RadioButton title={'Button with Ripple Effect'}
               name={'f'}
               value={'1'}
               checked={true} />
</div>
`,language:"tsx",dark:!0})]})})]})}function g(i={}){const{wrapper:o}=Object.assign({},u(),i.components);return o?e(o,{...i,children:e(d,{...i})}):d(i)}const h=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-radiobutton",children:["Basic RadioButton",e("br",{}),e("br",{})]}),t("p",{children:["For the ",e("code",{children:"RadioButton"}),", use the ",e("code",{children:"title"})," prop to set the text for the choices. You can assign a name and value to each button using the ",e("code",{children:"name"})," and ",e("code",{children:"value"})," props.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Choice #1",name:"choice",value:"1",onChange:i=>{console.log("hello >>> "+i.currentTarget.value)}}),e(a,{title:"Choice #2",name:"choice",value:"2",onChange:i=>{console.log("hello >>> "+i.currentTarget.value)}}),e(a,{title:"Choice #3",name:"choice",value:"3",onChange:i=>{console.log("hello >>> "+i.currentTarget.value)}})]}),e(n,{code:`
<div>
  <RadioButton title={'Choice #1'}
               name={'choice'}
               value={'1'} />
  <RadioButton title={'Choice #2'}
               name={'choice'}
               value={'2'} />
  <RadioButton title={'Choice #3'}
               name={'choice'}
               value={'3'} />
</div>
`,language:"tsx",dark:!0})]});h.storyName="Basic RadioButton";h.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-radiobutton">{"Basic RadioButton"}<br /><br /></h4><p>{"For the "}<code>{"RadioButton"}</code>{", use the "}<code>{"title"}</code>{" prop to set the text for the choices. You can assign a name and value to each button using the "}<code>{"name"}</code>{" and "}<code>{"value"}</code>{" props."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton title={"Choice #1"} name={"choice"} value={"1"} onChange={e => {
      console.log("hello >>> " + e.currentTarget.value);
    }} /><RadioButton title={"Choice #2"} name={"choice"} value={"2"} onChange={e => {
      console.log("hello >>> " + e.currentTarget.value);
    }} /><RadioButton title={"Choice #3"} name={"choice"} value={"3"} onChange={e => {
      console.log("hello >>> " + e.currentTarget.value);
    }} /></div><Source code={\`
<div>
  <RadioButton title={'Choice #1'}
               name={'choice'}
               value={'1'} />
  <RadioButton title={'Choice #2'}
               name={'choice'}
               value={'2'} />
  <RadioButton title={'Choice #3'}
               name={'choice'}
               value={'3'} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const s=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"size",children:["Size",e("br",{}),e("br",{})]}),t("p",{children:["The ",e("code",{children:"RadioButton"})," is available in two sizes, normal (default) and small, which can be set using the ",e("code",{children:"size"})," prop.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Normal",name:"a",value:"0",checked:!0}),e(a,{size:"small",title:"Small",name:"a",value:"1"})]}),e(n,{code:`
<div>
  <RadioButton title={'Normal'}
               name={'a'}
               value={'0'}
               checked={true} />
  <RadioButton size="small"
               title={'Small'}
               name={'a'}
               value={'1'} />
</div>
`,language:"tsx",dark:!0})]});s.storyName="Size";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="size">{"Size"}<br /><br /></h4><p>{"The "}<code>{"RadioButton"}</code>{" is available in two sizes, normal (default) and small, which can be set using the "}<code>{"size"}</code>{" prop."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton title={"Normal"} name={"a"} value={"0"} checked={true} /><RadioButton size="small" title={"Small"} name={"a"} value={"1"} /></div><Source code={\`
<div>
  <RadioButton title={'Normal'}
               name={'a'}
               value={'0'}
               checked={true} />
  <RadioButton size="small"
               title={'Small'}
               name={'a'}
               value={'1'} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["You can use the ",e("code",{children:"color"})," prop to apply different color variants, each representing a specific button type. The ",e("code",{children:"primary"})," color is the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{color:"primary",title:"Primary",name:"b",value:"0"}),e(a,{color:"secondary",title:"Secondary",name:"b",value:"1"}),e(a,{color:"success",title:"Success",name:"b",value:"2",checked:!0}),e(a,{color:"info",title:"Info",name:"b",value:"3"}),e(a,{color:"error",title:"Error",name:"b",value:"4"}),e(a,{color:"warning",title:"Warning",name:"b",value:"5"})]}),e(n,{code:`
<div>
  <RadioButton color="primary"
               title={'Primary'}
               name={'b'}
               value={'0'} />
  <RadioButton color="secondary"
               title={'Secondary'}
               name={'b'}
               value={'1'} />
  <RadioButton color="success"
               title={'Success'}
               name={'b'}
               value={'2'}
               checked={true} />
  <RadioButton color="info"
               title={'Info'}
               name={'b'}
               value={'3'} />
  <RadioButton color="error"
               title={'Error'}
               name={'b'}
               value={'4'} />
  <RadioButton color="warning"
               title={'Warning'}
               name={'b'}
               value={'5'} />
</div>
`,language:"tsx",dark:!0})]});m.storyName="Color";m.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"You can use the "}<code>{"color"}</code>{" prop to apply different color variants, each representing a specific button type. The "}<code>{"primary"}</code>{" color is the default."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton color="primary" title={"Primary"} name={"b"} value={"0"} /><RadioButton color="secondary" title={"Secondary"} name={"b"} value={"1"} /><RadioButton color="success" title={"Success"} name={"b"} value={"2"} checked={true} /><RadioButton color="info" title={"Info"} name={"b"} value={"3"} /><RadioButton color="error" title={"Error"} name={"b"} value={"4"} /><RadioButton color="warning" title={"Warning"} name={"b"} value={"5"} /></div><Source code={\`
<div>
  <RadioButton color="primary"
               title={'Primary'}
               name={'b'}
               value={'0'} />
  <RadioButton color="secondary"
               title={'Secondary'}
               name={'b'}
               value={'1'} />
  <RadioButton color="success"
               title={'Success'}
               name={'b'}
               value={'2'}
               checked={true} />
  <RadioButton color="info"
               title={'Info'}
               name={'b'}
               value={'3'} />
  <RadioButton color="error"
               title={'Error'}
               name={'b'}
               value={'4'} />
  <RadioButton color="warning"
               title={'Warning'}
               name={'b'}
               value={'5'} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const v=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t("p",{children:["You can customize the color tone of the RadioButton component with the ",e("code",{children:"hue"})," prop, enabling you to select shades or tones that fit your design preferences.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{hue:"light",title:"Light",name:"c",value:"0",checked:!0}),e(a,{hue:"main",title:"Normal",name:"c",value:"1"}),e(a,{hue:"dark",title:"Dark",name:"c",value:"2"}),e(a,{hue:"darker",title:"Darker",name:"c",value:"3"})]}),e(n,{code:`
<div>
  <RadioButton hue="light"
               title={'Light'}
               name={'c'}
               value={'0'}
               checked={true} />
  <RadioButton hue="main"
               title={'Normal'}
               name={'c'}
               value={'1'} />
  <RadioButton hue="dark"
               title={'Dark'}
               name={'c'}
               value={'2'} />
  <RadioButton hue="darker"
               title={'Darker'}
               name={'c'}
               value={'3'} />
</div>
`,language:"tsx",dark:!0})]});v.storyName="Hue";v.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"You can customize the color tone of the RadioButton component with the "}<code>{"hue"}</code>{" prop, enabling you to select shades or tones that fit your design preferences."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton hue="light" title={"Light"} name={"c"} value={"0"} checked={true} /><RadioButton hue="main" title={"Normal"} name={"c"} value={"1"} /><RadioButton hue="dark" title={"Dark"} name={"c"} value={"2"} /><RadioButton hue="darker" title={"Darker"} name={"c"} value={"3"} /></div><Source code={\`
<div>
  <RadioButton hue="light"
               title={'Light'}
               name={'c'}
               value={'0'}
               checked={true} />
  <RadioButton hue="main"
               title={'Normal'}
               name={'c'}
               value={'1'} />
  <RadioButton hue="dark"
               title={'Dark'}
               name={'c'}
               value={'2'} />
  <RadioButton hue="darker"
               title={'Darker'}
               name={'c'}
               value={'3'} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"checkedunchecked-button",children:["Checked/Unchecked Button",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"checked"})," prop to initially set the choice as selected (",e("code",{children:"true"}),") or deselected (",e("code",{children:"false"}),"). By default, the choice is deselected.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Option A",name:"d",value:"0"}),e(a,{checked:!0,title:"Option B",name:"d",value:"1"})]}),e(n,{code:`
<div>
  <RadioButton title={'Option A'}
               name={'d'}
               value={'0'} />
  <RadioButton checked={true}
               title={'Option B'}
               name={'d'}
               value={'1'} />
</div>
`,language:"tsx",dark:!0})]});p.storyName="Checked/Unchecked Button";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="checkedunchecked-button">{"Checked/Unchecked Button"}<br /><br /></h4><p>{"Use the "}<code>{"checked"}</code>{" prop to initially set the choice as selected ("}<code>{"true"}</code>{") or deselected ("}<code>{"false"}</code>{"). By default, the choice is deselected."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton title={"Option A"} name={"d"} value={"0"} /><RadioButton checked={true} title={"Option B"} name={"d"} value={"1"} /></div><Source code={\`
<div>
  <RadioButton title={'Option A'}
               name={'d'}
               value={'0'} />
  <RadioButton checked={true}
               title={'Option B'}
               name={'d'}
               value={'1'} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const b=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled-button",children:["Enabled/Disabled Button",e("br",{}),e("br",{})]}),t("p",{children:["To enable or disable the ",e("code",{children:"RadioButton"}),", use the ",e("code",{children:"disabled"})," prop with a value of ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"XSmall",name:"e",value:"0",checked:!0}),e(a,{title:"Small",name:"e",value:"1"}),e(a,{disabled:!0,title:"Medium (Out Of Stock)",name:"e",value:"2"}),e(a,{title:"Large",name:"e",value:"3"}),e(a,{title:"XLarge",name:"e",value:"4"})]}),e(n,{code:`
<div>
  <RadioButton title={'XSmall'}
               name={'e'}
               value={'0'}
               checked={true} />
  <RadioButton title={'Small'}
               name={'e'}
               value={'1'} />
  <RadioButton disabled={true}
               title={'Medium (Out Of Stock)'}
               name={'e'}
               value={'2'} />
  <RadioButton title={'Large'}
               name={'e'}
               value={'3'} />
  <RadioButton title={'XLarge'}
               name={'e'}
               value={'4'} />
</div>
`,language:"tsx",dark:!0})]});b.storyName="Enabled/Disabled Button";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled-button">{"Enabled/Disabled Button"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"RadioButton"}</code>{", use the "}<code>{"disabled"}</code>{" prop with a value of "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the button is enabled."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton title={"XSmall"} name={"e"} value={"0"} checked={true} /><RadioButton title={"Small"} name={"e"} value={"1"} /><RadioButton disabled={true} title={"Medium (Out Of Stock)"} name={"e"} value={"2"} /><RadioButton title={"Large"} name={"e"} value={"3"} /><RadioButton title={"XLarge"} name={"e"} value={"4"} /></div><Source code={\`
<div>
  <RadioButton title={'XSmall'}
               name={'e'}
               value={'0'}
               checked={true} />
  <RadioButton title={'Small'}
               name={'e'}
               value={'1'} />
  <RadioButton disabled={true}
               title={'Medium (Out Of Stock)'}
               name={'e'}
               value={'2'} />
  <RadioButton title={'Large'}
               name={'e'}
               value={'3'} />
  <RadioButton title={'XLarge'}
               name={'e'}
               value={'4'} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const f=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t("p",{children:["By default, the ",e("code",{children:"RadioButton"})," includes a ripple effect when clicked, but you can disable it by setting ",e("code",{children:"noRippleEffect"})," to ",e("code",{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{noRippleEffect:"true",title:"Button with no Ripple Effect",name:"f",value:"0"}),e(a,{title:"Button with Ripple Effect",name:"f",value:"1",checked:!0})]}),e(n,{code:`
<div>
  <RadioButton noRippleEffect="true"
               title={'Button with no Ripple Effect'}
               name={'f'}
               value={'0'} />
  <RadioButton title={'Button with Ripple Effect'}
               name={'f'}
               value={'1'}
               checked={true} />
</div>
`,language:"tsx",dark:!0})]});f.storyName="Ripple Effect";f.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"RadioButton"}</code>{" includes a ripple effect when clicked, but you can disable it by setting "}<code>{"noRippleEffect"}</code>{" to "}<code>{"true"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton noRippleEffect="true" title={"Button with no Ripple Effect"} name={"f"} value={"0"} /><RadioButton title={"Button with Ripple Effect"} name={"f"} value={"1"} checked={true} /></div><Source code={\`
<div>
  <RadioButton noRippleEffect="true"
               title={'Button with no Ripple Effect'}
               name={'f'}
               value={'0'} />
  <RadioButton title={'Button with Ripple Effect'}
               name={'f'}
               value={'1'}
               checked={true} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const c={title:"clients/ui/button/RadioButton",tags:["stories-mdx"],includeStories:["basicRadioButton","size","color","hue","checkedUncheckedButton","enabledDisabledButton","rippleEffect"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:g};const Y=["basicRadioButton","size","color","hue","checkedUncheckedButton","enabledDisabledButton","rippleEffect"];export{Y as __namedExportsOrder,h as basicRadioButton,p as checkedUncheckedButton,m as color,c as default,b as enabledDisabledButton,v as hue,f as rippleEffect,s as size};
