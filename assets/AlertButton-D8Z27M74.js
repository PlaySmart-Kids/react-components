import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as u,af as n}from"./index-5tMK-v8p.js";import{B as h}from"./Button-Cm1yCUKV.js";import{A as o}from"./AlertButton-CCPNF3gP.js";import{T as s,c as a}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import b from"./AlertButton.stories-7-FcyoQF.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./IconButton-6cAcpLD7.js";import"./RadioButton-BgQOW4iM.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ActionBar-BH2Q10LK.js";import"./index-CikfRwdJ.js";function r(l){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",...i(),...l.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:b,title:"clients/ui/button/AlertButton"}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h1,{id:"alertbutton-component",children:"AlertButton Component"}),t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"AlertButton"}),` component is designed to create an
alert dialog. You can add `,t.jsx(e.code,{children:"child components"}),` to display the title, message, or
buttons, allowing you to control and customize the dialog's behavior. Here's
an example of how to use it.`]}),t.jsx("div",{className:"flex-horizontal sb-unstyled",children:t.jsxs(o,{buttonLabel:"Alert Button",children:[t.jsx(s,{variant:"heading4",children:"Title"}),t.jsx("br",{}),t.jsxs("div",{className:"flex-horizontal",children:[t.jsx(a,{name:"info",size:30}),t.jsx(s,{variant:"body1",color:"secondary",children:t.jsx(e.p,{children:"This is the alert message!"})})]}),t.jsx("br",{}),t.jsx(h,{fullWidth:!0,color:"success",children:t.jsx(e.p,{children:"OK"})})]})}),t.jsx(n,{code:`
<AlertButton buttonLabel={"Button"}>
  <Typography variant={'heading4'}>Title</Typography>
  <br />
  <div className={'flex-horizontal'}>
    <MatIcon name={'info'} size={30} />
    <Typography variant={'body1'} color={'secondary'}>
      This is the alert message!
    </Typography>
  </div>
  <br />
  <Button fullWidth={true} color={'success'}>OK</Button>
</AlertButton>
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"basic-alertbutton",children:"Basic AlertButton"}),t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"AlertButton"}),` is offered in three variants: filled (default), outlined, and
text. The `,t.jsx(e.code,{children:"buttonLabel"})," prop allows you to set the button's text."]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{variant:"filled",buttonLabel:"Filled"}),t.jsx(o,{variant:"outlined",buttonLabel:"Outlined"}),t.jsx(o,{variant:"text",buttonLabel:"Text"})]}),t.jsx(n,{code:`
<AlertButton variant="filled" buttonLabel={"Filled"} />
<AlertButton variant="outlined" buttonLabel={"Outlined"} />
<AlertButton variant="text" buttonLabel={"Text"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"color",children:"Color"}),t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"color"}),` prop lets you apply different color variants to represent various button
types, with `,t.jsx(e.code,{children:"Primary"})," being the default."]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{color:"primary",buttonLabel:"Primary"}),t.jsx(o,{color:"secondary",buttonLabel:"Secondary"}),t.jsx(o,{color:"info",buttonLabel:"Info"}),t.jsx(o,{color:"error",buttonLabel:"Error"}),t.jsx(o,{color:"warning",buttonLabel:"Warning"}),t.jsx(o,{color:"success",buttonLabel:"Success"})]}),t.jsx(n,{code:`
<AlertButton color="primary" buttonLabel={"Primary"} />
<AlertButton color="secondary" buttonLabel={"Secondary"} />
<AlertButton color="info" buttonLabel={"Info"} />
<AlertButton color="error" buttonLabel={"Error"} />
<AlertButton color="warning" buttonLabel={"Warning"} />
<AlertButton color="success" buttonLabel={"Success"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"hue",children:"Hue"}),t.jsxs(e.p,{children:["You can customize the color tone of the ",t.jsx(e.code,{children:"AlertButton"}),` component using
the `,t.jsx(e.code,{children:"hue"}),` prop, enabling you to select specific shades or tones that match
your design needs.`]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{hue:"lightest",buttonLabel:"Lightest"}),t.jsx(o,{hue:"lighter",buttonLabel:"Lighter"}),t.jsx(o,{hue:"light",buttonLabel:"Light"}),t.jsx(o,{buttonLabel:"Normal"}),t.jsx(o,{hue:"dark",buttonLabel:"Dark"}),t.jsx(o,{hue:"darker",buttonLabel:"Darker"}),t.jsx(o,{hue:"darkest",buttonLabel:"Darkest"})]}),t.jsx(n,{code:`
<AlertButton hue="lightest" buttonLabel={"Lightest"} />
<AlertButton hue="lighter" buttonLabel={"Lighter"} />
<AlertButton hue="light" buttonLabel={"Light"} />
<AlertButton buttonLabel={"Normal"} />
<AlertButton hue="dark" buttonLabel={"Dark"} />
<AlertButton hue="darker" buttonLabel={"Darker"} />
<AlertButton hue="darkest" buttonLabel={"Darkest"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"size",children:"Size"}),t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"size"})," prop to adjust the ",t.jsx(e.code,{children:"AlertButton"})," component's size."]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{size:"small",buttonLabel:"Small"}),t.jsx(o,{size:"normal",buttonLabel:"Normal"}),t.jsx(o,{size:"large",buttonLabel:"Large"})]}),t.jsx(n,{code:`
<AlertButton size="small" buttonLabel={"Small"} />
<AlertButton size="normal" buttonLabel={"Normal"} />
<AlertButton size="large" buttonLabel={"Large"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"full-width",children:"Full Width"}),t.jsxs(e.p,{children:["You can make the ",t.jsx(e.code,{children:"AlertButton"}),` span the full width of its parent container by setting
the `,t.jsx(e.code,{children:"fullWidth"})," prop to ",t.jsx(e.code,{children:"true"})," or ",t.jsx(e.code,{children:"false"}),"."]}),t.jsx("div",{className:"grid-vertical full-width no-gap sb-unstyled",children:t.jsx(o,{fullWidth:!0,buttonLabel:"Full Width"})}),t.jsx(n,{code:`
<AlertButton fullWidth={true} buttonLabel={"Full Width"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"shadow-size",children:"Shadow Size"}),t.jsxs(e.p,{children:["The shadow size of the ",t.jsx(e.code,{children:"AlertButton"}),` is automatically
adjusted based on its overall size, but you can customize it further using the
`,t.jsx(e.code,{children:"shadowSize"})," prop. The shadow size is preset to 4 by default."]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{color:"info",buttonLabel:"Button 1"}),t.jsx(o,{shadowSize:10,color:"success",buttonLabel:"Button 2"}),t.jsx(o,{shadowSize:18,color:"warning",buttonLabel:"Button 3"})]}),t.jsx("br",{}),t.jsx(n,{code:`
<AlertButton color={'info'} buttonLabel={'Button 1'} />
<AlertButton shadowSize={10} color={'success'} buttonLabel={'Button 2'} />
<AlertButton shadowSize={18} color={'warning'} buttonLabel={'Button 3'} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h4,{id:"compact",children:"Compact"}),t.jsxs(e.p,{children:["Use the ",t.jsx(e.code,{children:"compact"})," prop to reduce the padding of the ",t.jsx(e.code,{children:"AlertButton"}),"."]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{buttonLabel:"Normal"}),t.jsx(o,{compact:!0,buttonLabel:"Compact"})]}),t.jsx(n,{code:`
<AlertButton buttonLabel={"Normal"} />
<AlertButton compact={true} buttonLabel={"Compact"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"enableddisabled-button",children:"Enabled/Disabled Button"}),t.jsxs(e.p,{children:["To enable or disable the ",t.jsx(e.code,{children:"AlertButton"}),", set the ",t.jsx(e.code,{children:"disabled"})," prop to ",t.jsx(e.code,{children:"true"}),` or
`,t.jsx(e.code,{children:"false"}),". By default, the button is enabled."]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{disabled:!0,buttonLabel:"Disabled"}),t.jsx(o,{buttonLabel:"Enabled"})]}),t.jsx(n,{code:`
<AlertButton disabled={true} buttonLabel={"Disabled"} />
<AlertButton buttonLabel={"Enabled"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"ripple-effect",children:"Ripple Effect"}),t.jsxs(e.p,{children:["By default, the ",t.jsx(e.code,{children:"AlertButton"}),` includes a ripple effect when clicked. To disable
this effect, set `,t.jsx(e.code,{children:"noRippleEffect"})," prop to ",t.jsx(e.code,{children:"true"}),"."]}),t.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[t.jsx(o,{buttonLabel:"Button with Ripple Effect"}),t.jsx(o,{noRippleEffect:!0,buttonLabel:"Button with no Ripple Effect"})]}),t.jsx(n,{code:`
<AlertButton buttonLabel={"Button with Ripple Effect"} />
<AlertButton noRippleEffect={true} buttonLabel={"Button with no Ripple Effect"} />
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"actions",children:"Actions"}),t.jsxs(e.p,{children:["When you click the ",t.jsx(e.code,{children:"AlertButton"}),` component, an alert dialog appears. You can add child components to display a title,
message, or buttons, giving you control over the
dialog's content and behavior. You can also use the `,t.jsx(e.code,{children:"onAction"}),", ",t.jsx(e.code,{children:"leftActions"}),", and ",t.jsx(e.code,{children:"rightActions"}),` props to trigger
actions and arrange button positions within the dialog.`]}),t.jsx("div",{className:"flex-horizontal sb-unstyled",children:t.jsxs(o,{buttonLabel:"Button",onAction:(c,d)=>alert(c,d),leftActions:[{label:"Back",action:"Click back button (left)",actionData:null}],rightActions:[{label:"Next",action:"Click next button (right)",actionData:null}],children:[t.jsx(s,{variant:"heading4",children:"Title"}),t.jsx("br",{}),t.jsxs("div",{className:"flex-horizontal",children:[t.jsx(a,{name:"info",size:30}),t.jsx(s,{variant:"body1",color:"secondary",children:t.jsx(e.p,{children:"This is the message!"})})]}),t.jsx("br",{})]})}),t.jsx(n,{code:`
<AlertButton buttonLabel={'Button'}
             onAction={(action, actionData) => alert(action, actionData)}
             leftActions={[{ label: 'Back', action: 'Click back button (left)', actionData: null }]}
             rightActions={[{ label: 'Next', action: 'Click next button (right)', actionData: null }]}>
  <Typography variant={'heading4'}>Title</Typography>
  <br />
  <div className={'flex-horizontal'}>
    <MatIcon name={'info'} size={30} />
    <Typography variant={'body1'} color={'secondary'}>
      This is the message!
    </Typography>
  </div>
  <br />
</AlertButton>
`,language:"tsx",dark:!0})]})]})}function M(l={}){const{wrapper:e}={...i(),...l.components};return e?t.jsx(e,{...l,children:t.jsx(r,{...l})}):r(l)}export{M as default};
