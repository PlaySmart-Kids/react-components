import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as o}from"./index-BrnU7xv7.js";import{ae as a,af as l}from"./index-5tMK-v8p.js";import n from"./Alert.stories-BfizM9WL.js";import{A as t}from"./AlertProvider-D5iTJuzk.js";import"./index-DJO9vBfz.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-CikfRwdJ.js";import"./ColorUtil-b9QtJkc2.js";import"./Button-Cm1yCUKV.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./IconButton-6cAcpLD7.js";import"./RadioButton-BgQOW4iM.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-CCPNF3gP.js";import"./ActionBar-BH2Q10LK.js";function r(i){const s={code:"code",h1:"h1",h3:"h3",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{Meta:!0,of:n}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h1,{id:"alert-component",children:"Alert Component"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Alert"})," component is designed to display alert messages. Here's a quick guide on how to use it."]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"basic-alert",children:"Basic Alert"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Alert"})," component is available in three variants: filled (default), outlined, and two-tones. Use the ",e.jsx(s.code,{children:"title"}),` prop
to set the title and the `,e.jsx(s.code,{children:"message"})," prop to define the message content."]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(t,{variant:"filled",title:"Filled",message:"This is the message!"}),e.jsx(t,{variant:"outlined",title:"Outlined",message:"This is the message!"}),e.jsx(t,{variant:"two_tones",title:"Two tones",message:"This is the message!"})]}),e.jsx(l,{code:`
<Alert variant="filled" title={'Filled'} message={'This is the message!'}/>
<Alert variant="outlined" title={'Outlined'} message={'This is the message!'}/>
<Alert variant="two_tones" title={'Two tones'} message={'This is the message!'}/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"color",children:"Color"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"color"}),` prop allows you to apply different color variants to represent various message types, with Primary set as
the default.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{color:"primary",title:"Color",message:"Primary"}),e.jsx(t,{color:"secondary",title:"Color",message:"Secondary"}),e.jsx(t,{color:"info",title:"Color",message:"Info"}),e.jsx(t,{color:"error",title:"Color",message:"Error"}),e.jsx(t,{color:"warning",title:"Color",message:"Warning"}),e.jsx(t,{color:"success",title:"Color",message:"Success"})]}),e.jsx(l,{code:`
<Alert color="primary" title={'Color'} message={'Primary'} />
<Alert color="secondary" title={'Color'} message={'Secondary'} />
<Alert color="info" title={'Color'} message={'Info'} />
<Alert color="error" title={'Color'} message={'Error'} />
<Alert color="warning" title={'Color'} message={'Warning'} />
<Alert color="success" title={'Color'} message={'Success'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"hue",children:"Hue"}),e.jsxs(s.p,{children:["You can customize the color tone of the ",e.jsx(s.code,{children:"Alert"})," component with the ",e.jsx(s.code,{children:"hue"}),` prop, allowing you to choose specific shades
or tones that align with your design needs.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{hue:"lightest",title:"Hue",message:"Lightest"}),e.jsx(t,{hue:"lighter",title:"Hue",message:"Lighter"}),e.jsx(t,{hue:"light",title:"Hue",message:"Light"}),e.jsx(t,{hue:"main",title:"Hue",message:"Main"}),e.jsx(t,{hue:"dark",title:"Hue",message:"Dark"}),e.jsx(t,{hue:"darker",title:"Hue",message:"Darker"}),e.jsx(t,{hue:"darkest",title:"Hue",message:"Darkest"})]}),e.jsx(l,{code:`
<Alert hue="lightest" title={'Hue'} message={'Lightest'} />
<Alert hue="lighter" title={'Hue'} message={'Lighter'} />
<Alert hue="light" title={'Hue'} message={'Light'} />
<Alert hue="main" title={'Hue'} message={'Main'} />
<Alert hue="dark" title={'Hue'} message={'Dark'} />
<Alert hue="darker" title={'Hue'} message={'Darker'} />
<Alert hue="darkest" title={'Hue'} message={'Darkest'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"shadow-size",children:"Shadow Size"}),e.jsxs(s.p,{children:["The shadow size of the ",e.jsx(s.code,{children:"Alert"}),` component adjusts automatically based on its overall size, but you can further
customize it with the `,e.jsx(s.code,{children:"shadowSize"})," prop. The default shadow size is set to 4."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{color:"info",title:"Title",message:"This is the message!"}),e.jsx(t,{shadowSize:10,color:"success",title:"Title",message:"This is the message!"}),e.jsx(t,{shadowSize:18,color:"warning",title:"Title",message:"This is the message!"})]}),e.jsx("br",{}),e.jsx(l,{code:`
<Alert color="info" title={'Title'} message={'This is the message!'} />
<Alert shadowSize={10} color="success" title={'Title'} message={'This is the message!'} />
<Alert shadowSize={18} color="warning" title={'Title'} message={'This is the message!'} />
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"close-label",children:"Close Label"}),e.jsxs(s.p,{children:["You can include a close button in the ",e.jsx(s.code,{children:"Alert"})," component by specifying a string for the ",e.jsx(s.code,{children:"closeLabel"})," prop."]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(t,{title:"Title",message:"No close button"}),e.jsx(t,{closeLabel:"X",title:"Title",message:"Alert message with a close button"})]}),e.jsx(l,{code:`
<Alert title={'Title'} message={'No close button'} />
<Alert closeLabel={'X'} title={'Title'} message={'Alert message with a close button'} />
`,language:"tsx",dark:!0})]})]})}function D(i={}){const{wrapper:s}={...o(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{D as default};
