import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as a,af as l}from"./index-DS4mN-Cx.js";import d from"./Input.stories-B8m8Ebhx.js";import{I as i}from"./Input-BXqaDr0Y.js";import{P as o}from"./PasswordInput-CwZj2So7.js";import{D as h}from"./DateInput-65P20iYT.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./InputUtil-CfDwzwTJ.js";import"./index-DJbli8uv.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";function n(s){const t={code:"code",h1:"h1",h3:"h3",p:"p",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{Meta:!0,of:d}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"input-component",children:"Input Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Input"})," component enables users to enter text into the input field. Here's how it works in practice."]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-input",children:"Basic Input"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Input"}),` component offers five types: text (default), password, email, number, and date. You can set the input
label using the `,e.jsx(t.code,{children:"title"})," prop and use ",e.jsx(t.code,{children:"placeholder"}),` prop to provide a short hint describing the expected value of a
input field. Typing in the input field triggers the `,e.jsx(t.code,{children:"onChange"})," event. Like the HTML date input, the ",e.jsx(t.code,{children:"DateInput"}),`
component enables users to enter dates either by selecting from a date picker or typing manually, with a distinct
appearance. Instead of the standard HTML password input, you can use the `,e.jsx(t.code,{children:"PasswordInput"}),` component to enter a
password, including an eye icon to toggle text visibility.`]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(i,{style:{width:"15rem"},title:"Email",type:"email"}),e.jsx(i,{style:{width:"15rem"},title:"Phone",placeholder:"(XXX) XXX-XXXX"}),e.jsx(i,{style:{width:"15rem"},title:"Age",type:"number"}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{style:{width:"15rem"},title:"HTML Date",type:"date"}),e.jsx(h,{style:{width:"15rem"},title:"DateInput"})]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{style:{width:"15rem"},title:"HTML Password",type:"password"}),e.jsx(o,{style:{width:"15rem"},title:"PasswordInput"})]})]}),e.jsx(l,{code:`
<Input style={{ width: '15rem' }}
       title={'Email'}
       type={'email'}
/>
<Input style={{ width: '15rem' }}
       title={'Phone'}
       placeholder={'(XXX) XXX-XXXX'}
/>
<Input style={{ width: '15rem' }}
       title={'Age'}
       type={'number'}
/>
<Input style={{ width: '15rem' }}
       title={'HTML Date'}
       type={'date'}
/>
<DateInput style={{ width: '15rem' }}
           title={'DateInput'}
/>
<Input style={{ width: '15rem' }}
       title={'HTML Password'}
       type={'password'}
/>
<PasswordInput style={{ width: '15rem' }}
               title={'PasswordInput'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"multiline-input",children:"Multiline Input"}),e.jsxs(t.p,{children:["All types of ",e.jsx(t.code,{children:"Input"}),` are single-line by default, but the text input can support multiple lines. To enable this, set
the `,e.jsx(t.code,{children:"multiLines"})," prop to ",e.jsx(t.code,{children:"true"}),". You can adjust the input field size by setting the ",e.jsx(t.code,{children:"rows"})," and ",e.jsx(t.code,{children:"cols"}),` prop. Set the
`,e.jsx(t.code,{children:"multiLineResizable"})," prop to ",e.jsx(t.code,{children:"true"}),` to enable resizing of the input field. The multiline input is not resizable by
default.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Input 1"}),e.jsx(i,{title:"Input 2",multiLines:!0,rows:3,cols:10}),e.jsx(i,{title:"Input 3",multiLines:!0})]}),e.jsx("br",{}),e.jsx("div",{className:"grid-vertical sb-unstyled",children:e.jsx(i,{title:"Input 4",multiLines:!0,multiLineResizeable:!0})}),e.jsx(l,{code:`
<div>
  <Input title={'Input 1'} />
  <Input title={'Input 2'} multiLines={true} rows={3} cols={10} />
  <Input title={'Input 3'} multiLines={true} />
</div>
<div>
  <Input title={'Input 4'}
         multiLines={true}
         multiLineResizeable={true}
  />
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"defaultvaluevalue",children:"defaultValue/value"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"defaultValue"})," prop sets the initial text in the ",e.jsx(t.code,{children:"Input"}),", while the ",e.jsx(t.code,{children:"value"}),` prop controls and consistently
maintains the input field's value.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Input 1: Default Value",defaultValue:"text 1"}),e.jsx(i,{title:"Input 2: Value",value:"text 2"})]}),e.jsx(l,{code:`
<Input title={'Input 1: Default Value'}
       defaultValue={'text 1'}
/>
<Input title={'Input 2: Value'}
       value={'text 2'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"size",children:"Size"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Input"})," component is available in three sizes: small, normal (default), and large. Use the ",e.jsx(t.code,{children:"size"}),` prop to modify
the input field size.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Small",size:"small"}),e.jsx(i,{title:"Normal"}),e.jsx(i,{title:"Large",size:"large"})]}),e.jsx(l,{code:`
<Input title={'Small'}
       size={'small'}
/>
<Input title={'Normal'} />
<Input title={'Large'}
       size={'large'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"color",children:"Color"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"color"})," prop lets you apply different color variants, each representing a specific input type, with ",e.jsx(t.code,{children:"primary"}),` as
the default color. Set the `,e.jsx(t.code,{children:"alwaysHighlight"})," prop to ",e.jsx(t.code,{children:"true"}),` for the input field to always display color; by default,
it is set to `,e.jsx(t.code,{children:"false"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Primary",alwaysHighlight:!0}),e.jsx(i,{title:"Info",color:"info",alwaysHighlight:!0}),e.jsx(i,{title:"Success",color:"success",alwaysHighlight:!0}),e.jsx(i,{title:"Warning",color:"warning",alwaysHighlight:!0}),e.jsx(i,{title:"Error",color:"error",alwaysHighlight:!0}),e.jsx(i,{title:"Secondary",color:"secondary",alwaysHighlight:!0})]}),e.jsx(l,{code:`
<Input title={'Primary'}
       alwaysHighlight={true}
/>
<Input title={'Info'}
       color={'info'}
       alwaysHighlight={true}
/>
<Input title={'Success'}
       color={'success'}
       alwaysHighlight={true}
/>
<Input title={'Warning'}
       color={'warning'}
       alwaysHighlight={true}
/>
<Input title={'Error'}
       color={'error'}
       alwaysHighlight={true}
/>
<Input title={'Secondary'}
       color={'secondary'}
       alwaysHighlight={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"hue",children:"Hue"}),e.jsxs(t.p,{children:["You can customize the color tone of the ",e.jsx(t.code,{children:"Input"})," component using the ",e.jsx(t.code,{children:"hue"}),` prop,
allowing you to select shades or tones that match your design preferences.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Lighter",hue:"lighter",alwaysHighlight:!0}),e.jsx(i,{title:"Light",hue:"light",alwaysHighlight:!0}),e.jsx(i,{title:"Main",alwaysHighlight:!0}),e.jsx(i,{title:"Dark",hue:"dark",alwaysHighlight:!0}),e.jsx(i,{title:"Darker",hue:"darker",alwaysHighlight:!0})]}),e.jsx(l,{code:`
<Input title={'Lighter'}
       hue={'lighter'}
       alwaysHighlight={true}
/>
<Input title={'Light'}
       hue={'light'}
       alwaysHighlight={true}
/>
<Input title={'Main'}
       alwaysHighlight={true}
/>
<Input title={'Dark'}
       hue={'dark'}
       alwaysHighlight={true}
/>
<Input title={'Darker'}
       hue={'darker'}
       alwaysHighlight={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"disabled"})," prop with a value of ",e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),` to enable or disable the input field. By default, the
`,e.jsx(t.code,{children:"Input"})," is enabled."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Enabled Input",alwaysHighlight:!0}),e.jsx(i,{title:"Disabled Input",disabled:!0})]}),e.jsx(l,{code:`
<Input title={'Enabled Input'}
       alwaysHighlight={true}
/>
<Input title={'Disabled Input'}
       disabled={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"shrink-title",children:"Shrink Title"}),e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"shrinkTitle"})," prop is set to ",e.jsx(t.code,{children:"true"}),` to make the label shrink or move up when text is entered in the
input field. Set the `,e.jsx(t.code,{children:"shrinkTitle"})," prop to ",e.jsx(t.code,{children:"false"})," to keep the label at the top."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Firstname"}),e.jsx(i,{title:"Lastname",shrinkTitle:!1})]}),e.jsx(l,{code:`
<Input title={'Firstname'} />
<Input title={'Lastname'}
       shrinkTitle={false}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"hint-and-full-width",children:"Hint and Full Width"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"hint"})," prop to add a description for the input field. You can adjust the ",e.jsx(t.code,{children:"Input"}),` extend to full width by
setting the `,e.jsx(t.code,{children:"fullWidth"})," prop to ",e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"})," (default), depending on the size of its parent container."]}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(i,{title:"Comment",hint:"* Maximum 200 characters",fullWidth:!0})}),e.jsx(l,{code:`
<Input title={'Comment'}
       hint={'* Maximum 200 characters'}
       fullWidth={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"compact",children:"Compact"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"compact"})," prop to reduce the padding of the ",e.jsx(t.code,{children:"Input"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{title:"Normal",defaultValue:"xxx"}),e.jsx(i,{title:"Compact",compact:!0,defaultValue:"xxx"})]}),e.jsx(l,{code:`
<Input title={'Normal'} defaultValue={'xxx'} />
<Input title={'Compact'}
       compact={true}
       defaultValue={'xxx'}
/>
`,language:"tsx",dark:!0})]})]})}function Y(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{Y as default};
