import{b as n,M as g,d as l}from"./index-DVow2ixS.js";import{R as a}from"./RadioButton-65ds4XkE.js";import{j as t,a as e,F as R}from"./Divider-DdokZ4G_.js";import{useMDXComponents as u}from"./index-BnapxFVb.js";import"./iframe-DCMQFdKf.js";import"../sb-preview/runtime.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-DKEMF1mc.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-V2LljsIL.js";import"./CheckboxUtil-CqPWmFQ9.js";function d(i){const o=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},u(),i.components);return t(R,{children:[e(g,{title:"clients/ui/button/RadioButton"}),`
`,t("div",{className:"preview-panel",children:[e(o.h1,{id:"radiobutton-component",children:"RadioButton Component"}),t(o.p,{children:["The ",e(o.code,{children:"RadioButton"})," component allows the user to select one option from a set of mutually exclusive choices. Here’s an example of how to use it."]})]}),`
`,e(l,{name:"Basic RadioButton",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"basic-radiobutton",children:["Basic RadioButton",e("br",{}),e("br",{})]}),t(o.p,{children:["For the ",e(o.code,{children:"RadioButton"}),", use the ",e(o.code,{children:"title"})," prop to specify the text for each choice. Assign a name to the ",e(o.code,{children:"name"})," prop (case-sensitive) to group radio buttons together (buttons with the same name belong to the same group). Use the ",e(o.code,{children:"value"})," prop to specify which button in the group is selected. Selecting a ",e(o.code,{children:"RadioButton"})," will trigger the ",e(o.code,{children:"onChange"})," event. ",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Choice #1",name:"choice",value:"1",onChange:r=>{console.log("Selected >>> "+r.currentTarget.value)}}),e(a,{title:"Choice #2",name:"choice",value:"2",onChange:r=>{console.log("Selected >>> "+r.currentTarget.value)}}),e(a,{title:"Choice #3",name:"choice",value:"3",onChange:r=>{console.log("Selected >>> "+r.currentTarget.value)}})]}),e(n,{code:`
<div>
  <RadioButton title={'Choice #1'}
               name={'choice'}
               value={'1'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
  <RadioButton title={'Choice #2'}
               name={'choice'}
               value={'2'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
  <RadioButton title={'Choice #3'}
               name={'choice'}
               value={'3'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
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
`,e(l,{name:"Color",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"color",children:["Color",e("br",{}),e("br",{})]}),t(o.p,{children:["You can use the ",e(o.code,{children:"color"})," prop to apply different color variants, each representing a specific option type. The ",e(o.code,{children:"primary"})," color is the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{color:"primary",title:"Primary",name:"b",value:"0"}),e(a,{color:"secondary",title:"Secondary",name:"b",value:"1"}),e(a,{color:"success",title:"Success",name:"b",value:"2",checked:!0}),e(a,{color:"info",title:"Info",name:"b",value:"3"}),e(a,{color:"error",title:"Error",name:"b",value:"4"}),e(a,{color:"warning",title:"Warning",name:"b",value:"5"})]}),e(n,{code:`
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
`,e(l,{name:"Hue",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t(o.p,{children:["You can customize the color tone of the ",e(o.code,{children:"RadioButton"})," component with the ",e(o.code,{children:"hue"})," prop, enabling you to select shades or tones that fit your design preferences.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{hue:"light",title:"Light",name:"c",value:"0",checked:!0}),e(a,{hue:"main",title:"Normal",name:"c",value:"1"}),e(a,{hue:"dark",title:"Dark",name:"c",value:"2"}),e(a,{hue:"darker",title:"Darker",name:"c",value:"3"})]}),e(n,{code:`
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
`,e(l,{name:"Checked/Unchecked",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"checkedunchecked",children:["Checked/Unchecked",e("br",{}),e("br",{})]}),t(o.p,{children:["Use the ",e(o.code,{children:"checked"})," prop to initially set the option as selected (",e(o.code,{children:"true"}),") or deselected (",e(o.code,{children:"false"}),"). By default, the option button is deselected.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Option A",name:"d",value:"0"}),e(a,{checked:!0,title:"Option B",name:"d",value:"1"}),e(a,{title:"Option C",name:"d",value:"2"}),e(a,{title:"Option D",name:"d",value:"3"})]}),e(n,{code:`
<div>
  <RadioButton title={'Option A'}
               name={'d'}
               value={'0'} />
  <RadioButton checked={true}
               title={'Option B'}
               name={'d'}
               value={'1'} />
  <RadioButton title={'Option C'}
               name={'d'}
               value={'2'} />
  <RadioButton title={'Option D'}
               name={'d'}
               value={'3'} />
</div>
`,language:"tsx",dark:!0})]})}),`
`,e(l,{name:"Enabled/Disabled",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t(o.p,{children:["To enable or disable the ",e(o.code,{children:"RadioButton"}),", use the ",e(o.code,{children:"disabled"})," prop with a value of ",e(o.code,{children:"true"})," or ",e(o.code,{children:"false"}),". By default, the option button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"XSmall",name:"e",value:"0",checked:!0}),e(a,{title:"Small",name:"e",value:"1"}),e(a,{disabled:!0,title:"Medium (Out Of Stock)",name:"e",value:"2"}),e(a,{title:"Large",name:"e",value:"3"}),e(a,{title:"XLarge",name:"e",value:"4"})]}),e(n,{code:`
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
`,e(l,{name:"Ripple Effect",children:t("div",{className:"preview-panel",children:[t(o.h4,{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t(o.p,{children:["By default, the ",e(o.code,{children:"RadioButton"})," includes a ripple effect when clicked, but you can disable it by setting ",e(o.code,{children:"noRippleEffect"})," to ",e(o.code,{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{noRippleEffect:"true",title:"Option with no Ripple Effect",name:"f",value:"0"}),e(a,{title:"Option with Ripple Effect",name:"f",value:"1",checked:!0})]}),e(n,{code:`
<div>
  <RadioButton noRippleEffect="true"
               title={'Option with no Ripple Effect'}
               name={'f'}
               value={'0'} />
  <RadioButton title={'Option with Ripple Effect'}
               name={'f'}
               value={'1'}
               checked={true} />
</div>
`,language:"tsx",dark:!0})]})})]})}function B(i={}){const{wrapper:o}=Object.assign({},u(),i.components);return o?e(o,{...i,children:e(d,{...i})}):d(i)}const h=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"basic-radiobutton",children:["Basic RadioButton",e("br",{}),e("br",{})]}),t("p",{children:["For the ",e("code",{children:"RadioButton"}),", use the ",e("code",{children:"title"})," prop to specify the text for each choice. Assign a name to the ",e("code",{children:"name"})," prop (case-sensitive) to group radio buttons together (buttons with the same name belong to the same group). Use the ",e("code",{children:"value"})," prop to specify which button in the group is selected. Selecting a ",e("code",{children:"RadioButton"})," will trigger the ",e("code",{children:"onChange"})," event. ",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Choice #1",name:"choice",value:"1",onChange:i=>{console.log("Selected >>> "+i.currentTarget.value)}}),e(a,{title:"Choice #2",name:"choice",value:"2",onChange:i=>{console.log("Selected >>> "+i.currentTarget.value)}}),e(a,{title:"Choice #3",name:"choice",value:"3",onChange:i=>{console.log("Selected >>> "+i.currentTarget.value)}})]}),e(n,{code:`
<div>
  <RadioButton title={'Choice #1'}
               name={'choice'}
               value={'1'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
  <RadioButton title={'Choice #2'}
               name={'choice'}
               value={'2'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
  <RadioButton title={'Choice #3'}
               name={'choice'}
               value={'3'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
</div>
`,language:"tsx",dark:!0})]});h.storyName="Basic RadioButton";h.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="basic-radiobutton">{"Basic RadioButton"}<br /><br /></h4><p>{"For the "}<code>{"RadioButton"}</code>{", use the "}<code>{"title"}</code>{" prop to specify the text for each choice. Assign a name to the "}<code>{"name"}</code>{" prop (case-sensitive) to group radio buttons together (buttons with the same name belong to the same group). Use the "}<code>{"value"}</code>{" prop to specify which button in the group is selected. Selecting a "}<code>{"RadioButton"}</code>{" will trigger the "}<code>{"onChange"}</code>{" event. "}<br /><br /></p><div className={"flex-horizontal"}><RadioButton title={"Choice #1"} name={"choice"} value={"1"} onChange={e => {
      console.log("Selected >>> " + e.currentTarget.value);
    }} /><RadioButton title={"Choice #2"} name={"choice"} value={"2"} onChange={e => {
      console.log("Selected >>> " + e.currentTarget.value);
    }} /><RadioButton title={"Choice #3"} name={"choice"} value={"3"} onChange={e => {
      console.log("Selected >>> " + e.currentTarget.value);
    }} /></div><Source code={\`
<div>
  <RadioButton title={'Choice #1'}
               name={'choice'}
               value={'1'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
  <RadioButton title={'Choice #2'}
               name={'choice'}
               value={'2'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
  <RadioButton title={'Choice #3'}
               name={'choice'}
               value={'3'}
               onChange={(e) => {
                 console.log("Selected >>> "+e.currentTarget.value);
               }} />
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
\`} language={"tsx"} dark={true} /></div>`}};const m=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"color",children:["Color",e("br",{}),e("br",{})]}),t("p",{children:["You can use the ",e("code",{children:"color"})," prop to apply different color variants, each representing a specific option type. The ",e("code",{children:"primary"})," color is the default.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{color:"primary",title:"Primary",name:"b",value:"0"}),e(a,{color:"secondary",title:"Secondary",name:"b",value:"1"}),e(a,{color:"success",title:"Success",name:"b",value:"2",checked:!0}),e(a,{color:"info",title:"Info",name:"b",value:"3"}),e(a,{color:"error",title:"Error",name:"b",value:"4"}),e(a,{color:"warning",title:"Warning",name:"b",value:"5"})]}),e(n,{code:`
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
`,language:"tsx",dark:!0})]});m.storyName="Color";m.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"You can use the "}<code>{"color"}</code>{" prop to apply different color variants, each representing a specific option type. The "}<code>{"primary"}</code>{" color is the default."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton color="primary" title={"Primary"} name={"b"} value={"0"} /><RadioButton color="secondary" title={"Secondary"} name={"b"} value={"1"} /><RadioButton color="success" title={"Success"} name={"b"} value={"2"} checked={true} /><RadioButton color="info" title={"Info"} name={"b"} value={"3"} /><RadioButton color="error" title={"Error"} name={"b"} value={"4"} /><RadioButton color="warning" title={"Warning"} name={"b"} value={"5"} /></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"hue",children:["Hue",e("br",{}),e("br",{})]}),t("p",{children:["You can customize the color tone of the ",e("code",{children:"RadioButton"})," component with the ",e("code",{children:"hue"})," prop, enabling you to select shades or tones that fit your design preferences.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{hue:"light",title:"Light",name:"c",value:"0",checked:!0}),e(a,{hue:"main",title:"Normal",name:"c",value:"1"}),e(a,{hue:"dark",title:"Dark",name:"c",value:"2"}),e(a,{hue:"darker",title:"Darker",name:"c",value:"3"})]}),e(n,{code:`
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
`,language:"tsx",dark:!0})]});p.storyName="Hue";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"You can customize the color tone of the "}<code>{"RadioButton"}</code>{" component with the "}<code>{"hue"}</code>{" prop, enabling you to select shades or tones that fit your design preferences."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton hue="light" title={"Light"} name={"c"} value={"0"} checked={true} /><RadioButton hue="main" title={"Normal"} name={"c"} value={"1"} /><RadioButton hue="dark" title={"Dark"} name={"c"} value={"2"} /><RadioButton hue="darker" title={"Darker"} name={"c"} value={"3"} /></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const v=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"checkedunchecked",children:["Checked/Unchecked",e("br",{}),e("br",{})]}),t("p",{children:["Use the ",e("code",{children:"checked"})," prop to initially set the option as selected (",e("code",{children:"true"}),") or deselected (",e("code",{children:"false"}),"). By default, the option button is deselected.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"Option A",name:"d",value:"0"}),e(a,{checked:!0,title:"Option B",name:"d",value:"1"}),e(a,{title:"Option C",name:"d",value:"2"}),e(a,{title:"Option D",name:"d",value:"3"})]}),e(n,{code:`
<div>
  <RadioButton title={'Option A'}
               name={'d'}
               value={'0'} />
  <RadioButton checked={true}
               title={'Option B'}
               name={'d'}
               value={'1'} />
  <RadioButton title={'Option C'}
               name={'d'}
               value={'2'} />
  <RadioButton title={'Option D'}
               name={'d'}
               value={'3'} />
</div>
`,language:"tsx",dark:!0})]});v.storyName="Checked/Unchecked";v.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="checkedunchecked">{"Checked/Unchecked"}<br /><br /></h4><p>{"Use the "}<code>{"checked"}</code>{" prop to initially set the option as selected ("}<code>{"true"}</code>{") or deselected ("}<code>{"false"}</code>{"). By default, the option button is deselected."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton title={"Option A"} name={"d"} value={"0"} /><RadioButton checked={true} title={"Option B"} name={"d"} value={"1"} /><RadioButton title={"Option C"} name={"d"} value={"2"} /><RadioButton title={"Option D"} name={"d"} value={"3"} /></div><Source code={\`
<div>
  <RadioButton title={'Option A'}
               name={'d'}
               value={'0'} />
  <RadioButton checked={true}
               title={'Option B'}
               name={'d'}
               value={'1'} />
  <RadioButton title={'Option C'}
               name={'d'}
               value={'2'} />
  <RadioButton title={'Option D'}
               name={'d'}
               value={'3'} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const b=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"enableddisabled",children:["Enabled/Disabled",e("br",{}),e("br",{})]}),t("p",{children:["To enable or disable the ",e("code",{children:"RadioButton"}),", use the ",e("code",{children:"disabled"})," prop with a value of ",e("code",{children:"true"})," or ",e("code",{children:"false"}),". By default, the option button is enabled.",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{title:"XSmall",name:"e",value:"0",checked:!0}),e(a,{title:"Small",name:"e",value:"1"}),e(a,{disabled:!0,title:"Medium (Out Of Stock)",name:"e",value:"2"}),e(a,{title:"Large",name:"e",value:"3"}),e(a,{title:"XLarge",name:"e",value:"4"})]}),e(n,{code:`
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
`,language:"tsx",dark:!0})]});b.storyName="Enabled/Disabled";b.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="enableddisabled">{"Enabled/Disabled"}<br /><br /></h4><p>{"To enable or disable the "}<code>{"RadioButton"}</code>{", use the "}<code>{"disabled"}</code>{" prop with a value of "}<code>{"true"}</code>{" or "}<code>{"false"}</code>{". By default, the option button is enabled."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton title={"XSmall"} name={"e"} value={"0"} checked={true} /><RadioButton title={"Small"} name={"e"} value={"1"} /><RadioButton disabled={true} title={"Medium (Out Of Stock)"} name={"e"} value={"2"} /><RadioButton title={"Large"} name={"e"} value={"3"} /><RadioButton title={"XLarge"} name={"e"} value={"4"} /></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const f=()=>t("div",{className:"preview-panel",children:[t("h4",{id:"ripple-effect",children:["Ripple Effect",e("br",{}),e("br",{})]}),t("p",{children:["By default, the ",e("code",{children:"RadioButton"})," includes a ripple effect when clicked, but you can disable it by setting ",e("code",{children:"noRippleEffect"})," to ",e("code",{children:"true"}),".",e("br",{}),e("br",{})]}),t("div",{className:"flex-horizontal",children:[e(a,{noRippleEffect:"true",title:"Option with no Ripple Effect",name:"f",value:"0"}),e(a,{title:"Option with Ripple Effect",name:"f",value:"1",checked:!0})]}),e(n,{code:`
<div>
  <RadioButton noRippleEffect="true"
               title={'Option with no Ripple Effect'}
               name={'f'}
               value={'0'} />
  <RadioButton title={'Option with Ripple Effect'}
               name={'f'}
               value={'1'}
               checked={true} />
</div>
`,language:"tsx",dark:!0})]});f.storyName="Ripple Effect";f.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"RadioButton"}</code>{" includes a ripple effect when clicked, but you can disable it by setting "}<code>{"noRippleEffect"}</code>{" to "}<code>{"true"}</code>{"."}<br /><br /></p><div className={"flex-horizontal"}><RadioButton noRippleEffect="true" title={"Option with no Ripple Effect"} name={"f"} value={"0"} /><RadioButton title={"Option with Ripple Effect"} name={"f"} value={"1"} checked={true} /></div><Source code={\`
<div>
  <RadioButton noRippleEffect="true"
               title={'Option with no Ripple Effect'}
               name={'f'}
               value={'0'} />
  <RadioButton title={'Option with Ripple Effect'}
               name={'f'}
               value={'1'}
               checked={true} />
</div>
\`} language={"tsx"} dark={true} /></div>`}};const c={title:"clients/ui/button/RadioButton",tags:["stories-mdx"],includeStories:["basicRadioButton","size","color","hue","checkedUnchecked","enabledDisabled","rippleEffect"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:B};const A=["basicRadioButton","size","color","hue","checkedUnchecked","enabledDisabled","rippleEffect"];export{A as __namedExportsOrder,h as basicRadioButton,v as checkedUnchecked,m as color,c as default,b as enabledDisabled,p as hue,f as rippleEffect,s as size};
