import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as n,af as i}from"./index-5tMK-v8p.js";import{S as l}from"./Switch-Cc-4px2g.js";import d from"./Switch.stories-sUTtaGMM.js";import"./index-DJO9vBfz.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-CikfRwdJ.js";import"./CheckboxUtil-CqPWmFQ9.js";function c(s){const t={code:"code",h1:"h1",h3:"h3",p:"p",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:d,title:"clients/ui/checkbox/Switch"}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"switch-component",children:"Switch Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Switch"}),` component is used to toggle a single setting
on or off. It is the preferred method for adjusting settings on mobile
devices. Here's an example of its usage.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-switch",children:"Basic Switch"}),e.jsxs(t.p,{children:["For the ",e.jsx(t.code,{children:"Switch"}),", use the ",e.jsx(t.code,{children:"title"}),` prop to define the label for the option. The
`,e.jsx(t.code,{children:"defaultChecked"})," prop sets the initial state to ON (",e.jsx(t.code,{children:"true"}),") or OFF (",e.jsx(t.code,{children:"false"}),`). By
default, the switch is OFF. Toggling the `,e.jsx(t.code,{children:"Switch"})," will trigger the ",e.jsx(t.code,{children:"onChange"}),`
event.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Option A",defaultChecked:!0,onChange:o=>{console.log("Switch A >>> "+o.currentTarget.checked)}}),e.jsx(l,{title:"Option B",onChange:o=>{console.log("Switch B >>> "+o.currentTarget.checked)}})]}),e.jsx(i,{code:`
<Switch title={'Option A'}
        defaultChecked={true}
        onChange={(e) => {
          console.log("Switch A >>> "+e.currentTarget.checked);
        }} />
<Switch title={'Option B'}
        onChange={(e) => {
          console.log("Switch B >>> "+e.currentTarget.checked);
        }} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"size",children:"Size"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Switch"}),` is available in two sizes: normal (default) and small. You can adjust
the size using the `,e.jsx(t.code,{children:"size"})," prop."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Normal",defaultChecked:!0}),e.jsx(l,{size:"small",title:"Small"})]}),e.jsx(i,{code:`
<Switch title={'Normal'}
        defaultChecked={true} />
<Switch size="small"
        title={'Small'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"color",children:"Color"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"color"}),` prop to apply different color variants to represent specific
option types. The default color is `,e.jsx(t.code,{children:"primary"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{color:"primary",title:"Primary",defaultChecked:!0}),e.jsx(l,{color:"secondary",title:"Secondary",defaultChecked:!0}),e.jsx(l,{color:"success",title:"Success",defaultChecked:!0}),e.jsx(l,{color:"info",title:"Info",defaultChecked:!0}),e.jsx(l,{color:"error",title:"Error",defaultChecked:!0}),e.jsx(l,{color:"warning",title:"Warning",defaultChecked:!0})]}),e.jsx(i,{code:`
<Switch color="primary"
        title={'Primary'}
        defaultChecked={true} />
<Switch color="secondary"
        title={'Secondary'}
        defaultChecked={true} />
<Switch color="success"
        title={'Success'}
        defaultChecked={true} />
<Switch color="info"
        title={'Info'}
        defaultChecked={true} />
<Switch color="error"
        title={'Error'}
        defaultChecked={true} />
<Switch color="warning"
        title={'Warning'}
        defaultChecked={true} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"label-anchor",children:"Label Anchor"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"labelAnchor"})," prop to adjust the position of the label on the ",e.jsx(t.code,{children:"Switch"}),` component. By default, the label is
positioned to the right.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{labelAnchor:"north",title:"Top"}),e.jsx(l,{labelAnchor:"south",title:"Bottom"}),e.jsx(l,{labelAnchor:"west",title:"Left"}),e.jsx(l,{labelAnchor:"east",title:"Right"})]}),e.jsx(i,{code:`
<Switch labelAnchor="north"
        title={'Top'} />
<Switch labelAnchor="south"
        title={'Bottom'} />
<Switch labelAnchor="west"
        title={'Left'} />
<Switch labelAnchor="east"
        title={'Right'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"appearance",children:"Appearance"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"alwaysHighlight"})," prop to ensure the ",e.jsx(t.code,{children:"Switch"}),` always displays color,
regardless of whether it is on or off. By default, the switch does not always
show the color.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Normal"}),e.jsx(l,{alwaysHighlight:!0,title:"Always Highlight"})]}),e.jsx(i,{code:`
<Switch title={'Normal'} />
<Switch alwaysHighlight={true}
        title={'Always Highlight'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"defaultcheckedchecked",children:"defaultChecked/checked"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"defaultChecked"})," prop allows you to set the initial state of the Switch to ON (",e.jsx(t.code,{children:"true"}),") or OFF (",e.jsx(t.code,{children:"false"}),`). In
contrast,
the `,e.jsx(t.code,{children:"checked"}),` prop provides continuous control over the state, ensuring consistency. By default, the Switch is OFF if
neither prop is specified.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{defaultChecked:!0,title:"Uncontrolled Option"}),e.jsx(l,{checked:!0,title:"Controlled Option"})]}),e.jsx(i,{code:`
<Switch defaultChecked={true}
        title={'Uncontrolled Option'} />
<Switch checked={true}
        title={'Controlled Option'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"disabled"})," prop to enable or disable the ",e.jsx(t.code,{children:"Switch"}),", with ",e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),`
as values. By default, the switch is enabled.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{disabled:!0,title:"Option A"}),e.jsx(l,{title:"Option B",defaultChecked:!0})]}),e.jsx(i,{code:`
<Switch disabled={true}
        title={'Option A'} />
<Switch title={'Option B'}
        defaultChecked={true} />
`,language:"tsx",dark:!0})]})]})}function y(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(c,{...s})}):c(s)}export{y as default};
