import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as r,af as c}from"./index-5tMK-v8p.js";import{C as l}from"./Checkbox-BUtrGLoq.js";import h from"./Checkbox.stories-hj-SLRz7.js";import"./index-DJO9vBfz.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-CikfRwdJ.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";function d(i){const t={code:"code",h1:"h1",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"checkbox-component",children:"Checkbox Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Checkbox"}),` component enables users to select or
deselect action items. It can be applied to a single option or a list of
multiple items for user selection. Here’s an example of how to use it.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-checkbox",children:"Basic Checkbox"}),e.jsxs(t.p,{children:["For the ",e.jsx(t.code,{children:"Checkbox"}),", use the ",e.jsx(t.code,{children:"title"}),` prop to define the text for the options.
Use the `,e.jsx(t.code,{children:"defaultChecked"})," prop to initially set the option as selected (",e.jsx(t.code,{children:"true"}),`) or deselected
(`,e.jsx(t.code,{children:"false"}),"). By default, the option is deselected. Selecting a ",e.jsx(t.code,{children:"Checkbox"}),` will trigger
the onChange event.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Choice #1",defaultChecked:!0,onChange:o=>{console.log("Selected choice 1 >>> "+o.currentTarget.checked)}}),e.jsx(l,{title:"Choice #2",onChange:o=>{console.log("Selected choice 2 >>> "+o.currentTarget.checked)}}),e.jsx(l,{title:"Choice #3",onChange:o=>{console.log("Selected choice 3 >>> "+o.currentTarget.checked)}})]}),e.jsx(c,{code:`
<Checkbox title={'Choice #1'}
        defaultChecked={true}
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
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"size",children:"Size"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Checkbox"}),` comes in two sizes: normal (default) and small. You can set the
size using the `,e.jsx(t.code,{children:"size"})," prop."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Normal",defaultChecked:!0}),e.jsx(l,{size:"small",title:"Small"})]}),e.jsx(c,{code:`
<Checkbox title={'Normal'} defaultChecked={true} />
<Checkbox size="small" title={'Small'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"color",children:"Color"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"color"}),` prop allows you to apply different color variants, each
representing a specific option type. The `,e.jsx(t.code,{children:"primary"})," color is the default."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{color:"primary",title:"Primary",defaultChecked:!0}),e.jsx(l,{color:"secondary",title:"Secondary",defaultChecked:!0}),e.jsx(l,{color:"success",title:"Success",defaultChecked:!0}),e.jsx(l,{color:"info",title:"Info",defaultChecked:!0}),e.jsx(l,{color:"error",title:"Error",defaultChecked:!0}),e.jsx(l,{color:"warning",title:"Warning",defaultChecked:!0})]}),e.jsx(c,{code:`
<Checkbox color="primary" title={'Primary'} defaultChecked={true} />
<Checkbox color="secondary" title={'Secondary'} defaultChecked={true} />
<Checkbox color="success" title={'Success'} defaultChecked={true} />
<Checkbox color="info" title={'Info'} defaultChecked={true} />
<Checkbox color="error" title={'Error'} defaultChecked={true} />
<Checkbox color="warning" title={'Warning'} defaultChecked={true} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"hue",children:"Hue"}),e.jsxs(t.p,{children:["You can customize the color tone of the ",e.jsx(t.code,{children:"Checkbox"})," component using the ",e.jsx(t.code,{children:"hue"}),` prop,
allowing you to select shades or tones that match your design preferences.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{hue:"light",title:"Light",defaultChecked:!0}),e.jsx(l,{hue:"main",title:"Normal",defaultChecked:!0}),e.jsx(l,{hue:"dark",title:"Dark",defaultChecked:!0}),e.jsx(l,{hue:"darker",title:"Darker",defaultChecked:!0})]}),e.jsx(c,{code:`
<Checkbox hue="light" title={'Light'} defaultChecked={true} />
<Checkbox hue="main" title={'Normal'} defaultChecked={true} />
<Checkbox hue="dark" title={'Dark'} defaultChecked={true} />
<Checkbox hue="darker" title={'Darker'} defaultChecked={true} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"defaultcheckedchecked",children:"defaultChecked/checked"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"defaultChecked"})," prop allows you to set the initial state of the checkbox as either selected (",e.jsx(t.code,{children:"true"}),`) or
deselected
(`,e.jsx(t.code,{children:"false"}),"). Meanwhile, the ",e.jsx(t.code,{children:"checked"}),` prop can be used to control and keep the checkbox's state consistent. By default,
the
checkbox is deselected.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{defaultChecked:!0,title:"Uncontrolled Option"}),e.jsx(l,{checked:!0,title:"Controlled Option"})]}),e.jsx(c,{code:`
<Checkbox defaultChecked={true} title={'Uncontrolled Option'} />
<Checkbox checked={true} title={'Controlled Option'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(t.p,{children:["To enable or disable the ",e.jsx(t.code,{children:"Checkbox"}),", use the ",e.jsx(t.code,{children:"disabled"}),`
prop with a value of `,e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),". By default, the checkbox is enabled."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Monday"}),e.jsx(l,{title:"Tuesday"}),e.jsx(l,{disabled:!0,defaultChecked:!0,title:"Wednesday"}),e.jsx(l,{title:"Thursday"}),e.jsx(l,{disabled:!0,title:"Friday"})]}),e.jsx(c,{code:`
<Checkbox title={'Monday'} />
<Checkbox title={'Tuesday'} />
<Checkbox disabled={true} defaultChecked={true} title={'Wednesday'} />
<Checkbox title={'Thursday'} />
<Checkbox disabled={true} title={'Friday'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"indeterminate-checkbox",children:"Indeterminate Checkbox"}),e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Indeterminate checkboxes"}),` represent a state that is neither fully checked nor
unchecked. They are often used in hierarchical checkbox groups to indicate that
only some of the checkbox's child options are selected.`]}),e.jsxs("div",{className:"grid-vertical full-width no-gap sb-unstyled",children:[e.jsx(l,{indeterminate:!0,defaultChecked:!0,title:"Select All"}),e.jsxs("ul",{style:{listStyleType:"none"},children:[e.jsx("li",{children:e.jsx(l,{title:"Apples",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(l,{title:"Bananas",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(l,{title:"Mangoes",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(l,{title:"Oranges",defaultChecked:!0})})]})]}),e.jsx(c,{code:`
<div>
<Checkbox indeterminate={true}
          defaultChecked={true}
          title={'Select All'} />
<ul style={{listStyleType: 'none'}}>
  <li><Checkbox title={'Apples'} defaultChecked={true} /></li>
  <li><Checkbox title={'Bananas'} defaultChecked={true} /></li>
  <li><Checkbox title={'Mangoes'} defaultChecked={true} /></li>
  <li><Checkbox title={'Oranges'} defaultChecked={true} /></li>
</ul>
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"label-anchor",children:"Label Anchor"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"labelAnchor"}),` prop to adjust the position of the text or label
on the `,e.jsx(t.code,{children:"Checkbox"})," component. By default, the label is located on the right."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{labelAnchor:"north",title:"Top"}),e.jsx(l,{labelAnchor:"south",title:"Bottom"}),e.jsx(l,{labelAnchor:"west",title:"Left"}),e.jsx(l,{labelAnchor:"east",title:"Right"})]}),e.jsx(c,{code:`
<Checkbox labelAnchor="north" title={'Top'} />
<Checkbox labelAnchor="south" title={'Bottom'} />
<Checkbox labelAnchor="west" title={'Left'} />
<Checkbox labelAnchor="east" title={'Right'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"full-width",children:"Full Width"}),e.jsxs(t.p,{children:["To make the ",e.jsx(t.code,{children:"Checkbox"})," fill the width of its parent container, set the ",e.jsx(t.code,{children:"fullWidth"}),`
prop to `,e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),", depending on the desired layout."]}),e.jsxs("div",{className:"grid-vertical full-width no-gap sb-unstyled",children:[e.jsx(l,{fullWidth:!0,defaultChecked:!0,title:"Full Width #1"}),e.jsx(l,{fullWidth:!1,title:"Full Width #2"})]}),e.jsx(c,{code:`
<Checkbox fullWidth={true} defaultChecked={true} title={'Full Width #1'} />
<Checkbox fullWidth={false} title={'Full Width #2'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"ripple-effect",children:"Ripple Effect"}),e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"Checkbox"}),` has a ripple effect when clicked. To disable this
effect, set the `,e.jsx(t.code,{children:"noRippleEffect"})," prop to true."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{noRippleEffect:"true",title:"Checkbox with no Ripple Effect"}),e.jsx(l,{title:"Checkbox with Ripple Effect",defaultChecked:!0})]}),e.jsx(c,{code:`
<Checkbox noRippleEffect="true" title={'Checkbox with no Ripple Effect'} />
<Checkbox title={'Checkbox with Ripple Effect'} defaultChecked={true} />
`,language:"tsx",dark:!0})]})]})}function z(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(d,{...i})}):d(i)}export{z as default};
