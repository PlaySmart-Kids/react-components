import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as d}from"./index-BrnU7xv7.js";import{ae as c,af as a}from"./index-0JuUIpxl.js";import{R as l}from"./RadioButton-BgQOW4iM.js";import s from"./RadioButton.stories-BfOgw8Hv.js";import"./index-DJO9vBfz.js";import"./iframe-BNRbnSEC.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-CikfRwdJ.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./CheckboxUtil-CqPWmFQ9.js";function i(o){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"radiobutton-component",children:"RadioButton Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"RadioButton"}),` component allows the user to
select one option from a set of mutually exclusive choices. Here’s an example
of how to use it.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-radiobutton",children:"Basic RadioButton"}),e.jsxs(t.p,{children:["For the ",e.jsx(t.code,{children:"RadioButton"}),", use the ",e.jsx(t.code,{children:"title"}),` prop to specify
the text for each choice. Assign a name to the `,e.jsx(t.code,{children:"name"}),` prop (case-sensitive) to
group radio buttons together (buttons with the same name belong to the same
group). Use the `,e.jsx(t.code,{children:"value"}),` prop to specify which button in the group is selected.
Selecting a `,e.jsx(t.code,{children:"RadioButton"})," will trigger the ",e.jsx(t.code,{children:"onChange"})," event."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Choice #1",name:"choice",value:"1",onChange:n=>{console.log("Selected >>> "+n.currentTarget.value)}}),e.jsx(l,{title:"Choice #2",name:"choice",value:"2",onChange:n=>{console.log("Selected >>> "+n.currentTarget.value)}}),e.jsx(l,{title:"Choice #3",name:"choice",value:"3",onChange:n=>{console.log("Selected >>> "+n.currentTarget.value)}})]}),e.jsx(a,{code:`
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
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h4,{id:"size",children:"Size"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"RadioButton"}),` is available in two sizes, normal (default) and small, which
can be set using the `,e.jsx(t.code,{children:"size"})," prop."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Normal",name:"a",value:"0",defaultChecked:!0}),e.jsx(l,{size:"small",title:"Small",name:"a",value:"1"})]}),e.jsx(a,{code:`
<div>
<RadioButton title={'Normal'}
             name={'a'}
             value={'0'}
             defaultChecked={true} />
<RadioButton size="small"
             title={'Small'}
             name={'a'}
             value={'1'} />
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h4,{id:"color",children:"Color"}),e.jsxs(t.p,{children:["You can use the ",e.jsx(t.code,{children:"color"}),` prop to apply different color variants, each representing
a specific option type. The `,e.jsx(t.code,{children:"primary"})," color is the default."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{color:"primary",title:"Primary",name:"b",value:"0"}),e.jsx(l,{color:"secondary",title:"Secondary",name:"b",value:"1"}),e.jsx(l,{color:"success",title:"Success",name:"b",value:"2",defaultChecked:!0}),e.jsx(l,{color:"info",title:"Info",name:"b",value:"3"}),e.jsx(l,{color:"error",title:"Error",name:"b",value:"4"}),e.jsx(l,{color:"warning",title:"Warning",name:"b",value:"5"})]}),e.jsx(a,{code:`
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
             defaultChecked={true} />
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
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"hue",children:"Hue"}),e.jsxs(t.p,{children:["You can customize the color tone of the ",e.jsx(t.code,{children:"RadioButton"})," component with the ",e.jsx(t.code,{children:"hue"}),`
prop, enabling you to select shades or tones that fit your design preferences.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{hue:"light",title:"Light",name:"c",value:"0",defaultChecked:!0}),e.jsx(l,{hue:"main",title:"Normal",name:"c",value:"1"}),e.jsx(l,{hue:"dark",title:"Dark",name:"c",value:"2"}),e.jsx(l,{hue:"darker",title:"Darker",name:"c",value:"3"})]}),e.jsx(a,{code:`
<div>
<RadioButton hue="light"
             title={'Light'}
             name={'c'}
             value={'0'}
             defaultChecked={true} />
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
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"defaultcheckedchecked",children:"defaultChecked/checked"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"defaultChecked"})," prop lets you set the initial state of the ",e.jsx(t.code,{children:"RadioButton"})," as either selected (",e.jsx(t.code,{children:"true"}),`) or
deselected (`,e.jsx(t.code,{children:"false"}),"). Meanwhile, the ",e.jsx(t.code,{children:"checked"}),` prop can be used to control and maintain the radio button's state. By
default, the option button is deselected.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Uncontrolled 1",name:"uc",value:"u1",defaultChecked:!0}),e.jsx(l,{title:"Uncontrolled 2",name:"uc",value:"u2"}),e.jsx(l,{title:"Uncontrolled 3",name:"uc",value:"u3"})]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Controlled 1",name:"ct",value:"c1"}),e.jsx(l,{title:"Controlled 2",name:"ct",value:"c2",checked:!0}),e.jsx(l,{title:"Controlled 3",name:"ct",value:"c3"})]}),e.jsx(a,{code:`
<div>
  <RadioButton defaultChecked={true}
               title={'Uncontrolled 1'}
               name={'uc'}
               value={'u1'} />
  <RadioButton title={'Uncontrolled 2'}
               name={'uc'}
               value={'u2'} />
  <RadioButton title={'Uncontrolled 3'}
               name={'uc'}
               value={'u3'} />
</div>
<div>
  <RadioButton title={'Controlled 1'}
               name={'ct'}
               value={'c1'} />
  <RadioButton checked={true}
               title={'Controlled 2'}
               name={'ct'}
               value={'c2'} />
  <RadioButton title={'Controlled 3'}
               name={'ct'}
               value={'c3'} />
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(t.p,{children:["To enable or disable the ",e.jsx(t.code,{children:"RadioButton"}),", use the ",e.jsx(t.code,{children:"disabled"}),` prop with a value of
`,e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),". By default, the option button is enabled."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"XSmall",name:"d",value:"0",defaultChecked:!0}),e.jsx(l,{title:"Small",name:"d",value:"1"}),e.jsx(l,{disabled:!0,title:"Medium (Out Of Stock)",name:"d",value:"2"}),e.jsx(l,{title:"Large",name:"d",value:"3"}),e.jsx(l,{title:"XLarge",name:"d",value:"4"})]}),e.jsx(a,{code:`
<div>
<RadioButton title={'XSmall'}
             name={'d'}
             value={'0'}
             defaultChecked={true} />
<RadioButton title={'Small'}
             name={'d'}
             value={'1'} />
<RadioButton disabled={true}
             title={'Medium (Out Of Stock)'}
             name={'d'}
             value={'2'} />
<RadioButton title={'Large'}
             name={'d'}
             value={'3'} />
<RadioButton title={'XLarge'}
             name={'d'}
             value={'4'} />
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"label-anchor",children:"Label Anchor"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"labelAnchor"})," prop to adjust the label's position on the ",e.jsx(t.code,{children:"RadioButton"}),` component. By default, the label is
positioned on the right.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{labelAnchor:"north",title:"Top",name:"e",value:"1"}),e.jsx(l,{labelAnchor:"south",title:"Bottom",name:"e",value:"2"}),e.jsx(l,{labelAnchor:"west",title:"Left",name:"e",value:"3"}),e.jsx(l,{labelAnchor:"east",title:"Right",name:"e",value:"4"})]}),e.jsx(a,{code:`
<div>
  <RadioButton labelAnchor="north"
               title={'Top'}
               name={'e'}
               value={'1'} />
  <RadioButton labelAnchor="south"
               title={'Bottom'}
               name={'e'}
               value={'2'} />
  <RadioButton labelAnchor="west"
               title={'Left'}
               name={'e'}
               value={'3'} />
  <RadioButton labelAnchor="east"
               title={'Right'}
               name={'e'}
               value={'4'} />
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"ripple-effect",children:"Ripple Effect"}),e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"RadioButton"}),` includes a ripple effect when clicked, but you can
disable it by setting `,e.jsx(t.code,{children:"noRippleEffect"})," to ",e.jsx(t.code,{children:"true"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{noRippleEffect:"true",title:"Option with no Ripple Effect",name:"f",value:"0"}),e.jsx(l,{title:"Option with Ripple Effect",name:"f",value:"1",defaultChecked:!0})]}),e.jsx(a,{code:`
<div>
<RadioButton noRippleEffect="true"
             title={'Option with no Ripple Effect'}
             name={'f'}
             value={'0'} />
<RadioButton title={'Option with Ripple Effect'}
             name={'f'}
             value={'1'}
             defaultChecked={true} />
</div>
`,language:"tsx",dark:!0})]})]})}function S(o={}){const{wrapper:t}={...d(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{S as default};
