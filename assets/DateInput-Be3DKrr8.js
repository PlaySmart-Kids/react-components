import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as d,af as a}from"./index-DS4mN-Cx.js";import o from"./DateInput.stories-3Y1GMw6d.js";import{D as l}from"./DateInput-65P20iYT.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./InputUtil-CfDwzwTJ.js";import"./index-DJbli8uv.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";function n(i){const t={code:"code",h1:"h1",h3:"h3",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{Meta:!0,of:o}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"dateinput-component",children:"DateInput Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DateInput"}),` component allows users to enter a date into the field through a date picker or type in the input
field. Here's an example of its usage.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-dateinput",children:"Basic DateInput"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DateInput"})," component includes the ",e.jsx(t.code,{children:"title"})," prop to define the input label. Use the ",e.jsx(t.code,{children:"allowTyping"}),` prop to enable
typing in option. Changing the date in the `,e.jsx(t.code,{children:"DateInput"})," triggers the ",e.jsx(t.code,{children:"onChange"})," event."]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(l,{title:"Date 1",defaultValue:"2024-10-01",onChange:s=>{console.log("onChange >>> DateInput 1 = "+s)}}),e.jsx(l,{title:"Date 2: Type in",allowTyping:!0,onChange:s=>{console.log("onChange >>> DateInput 2 = "+s)}})]}),e.jsx(a,{code:`
<DateInput title={'Date 1'}
           defaultValue={'2024-10-01'}
           onChange={(newDate) => {
             console.log("onChange >>> DateInput 1 = " + newDate);
           }}
/>
<DateInput title={'Date 2: Type in'}
           allowTyping={true}
           onChange={(newDate) => {
             console.log("onChange >>> DateInput 2 = " + newDate);
           }}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"date-format",children:"Date Format"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"displayDateFormat"}),` prop to specify the format for displaying the date, such as M/d/yy, yyyy-MM-dd, MM-dd-yy.
The default format is `,e.jsx(t.code,{children:"MM/dd/yyyy"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Default: MM/dd/yyyy",defaultValue:"2024-10-01"}),e.jsx(l,{title:"Date: M/d/yy",defaultValue:"2024-10-01",displayDateFormat:"M/d/yy"}),e.jsx(l,{title:"Date: MM-dd-yy",defaultValue:"2024-10-01",displayDateFormat:"MM-dd-yy"}),e.jsx(l,{title:"Date: yyyy-MM-dd",defaultValue:"2024-10-01",displayDateFormat:"yyyy-MM-dd"})]}),e.jsx(a,{code:`
<DateInput title={'Default: MM/dd/yyyy'}
           defaultValue={'2024-10-01'}
/>
<DateInput title={'Date: M/d/yy'}
           defaultValue={'2024-10-01'}
           displayDateFormat={'M/d/yy'}
/>
<DateInput title={'Date: MM-dd-yy'}
           defaultValue={'2024-10-01'}
           displayDateFormat={'MM-dd-yy'}
/>
<DateInput title={'Date: yyyy-MM-dd'}
           defaultValue={'2024-10-01'}
           displayDateFormat={'yyyy-MM-dd'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"defaultvaluevalue",children:"defaultValue/value"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"defaultValue"})," prop initializes the date using the HTML date format ",e.jsx(t.code,{children:"yyyy-MM-dd"}),", while the ",e.jsx(t.code,{children:"value"}),` prop manages
and consistently maintains the date's value in the `,e.jsx(t.code,{children:"DateInput"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Date 1: Default Value",defaultValue:"2024-10-01"}),e.jsx(l,{title:"Date 2: Value",value:"2024-10-01"})]}),e.jsx(a,{code:`
<DateInput title={'Date 1: Default Value'}
           defaultValue={'2024-10-01'}
/>
<DateInput title={'Date 2: Value'}
           value={'2024-10-01'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"size",children:"Size"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DateInput"})," component is available in three sizes: small, normal (default), and large. Use the ",e.jsx(t.code,{children:"size"}),` prop to
adjust the size of the input field.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Small",size:"small"}),e.jsx(l,{title:"Normal"}),e.jsx(l,{title:"Large",size:"large"})]}),e.jsx(a,{code:`
<DateInput title={'Small'}
           size={'small'}
/>
<DateInput title={'Normal'}
/>
<DateInput title={'Large'}
           size={'large'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"color",children:"Color"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"color"})," prop lets you apply different color variants, each representing a specific input type, with ",e.jsx(t.code,{children:"primary"}),` as
the default color. Set the `,e.jsx(t.code,{children:"alwaysHighlight"})," prop to ",e.jsx(t.code,{children:"true"}),` for the input field to always display color; by default,
it is set to `,e.jsx(t.code,{children:"false"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Primary",alwaysHighlight:!0}),e.jsx(l,{title:"Info",color:"info",alwaysHighlight:!0}),e.jsx(l,{title:"Success",color:"success",alwaysHighlight:!0}),e.jsx(l,{title:"Warning",color:"warning",alwaysHighlight:!0}),e.jsx(l,{title:"Error",color:"error",alwaysHighlight:!0}),e.jsx(l,{title:"Secondary",color:"secondary",alwaysHighlight:!0})]}),e.jsx(a,{code:`
<DateInput title={'Primary'}
           alwaysHighlight={true}
/>
<DateInput title={'Info'}
           color={'info'}
           alwaysHighlight={true}
/>
<DateInput title={'Success'}
           color={'success'}
           alwaysHighlight={true}
/>
<DateInput title={'Warning'}
           color={'warning'}
           alwaysHighlight={true}
/>
<DateInput title={'Error'}
           color={'error'}
           alwaysHighlight={true}
/>
<DateInput title={'Secondary'}
           color={'secondary'}
           alwaysHighlight={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"hue",children:"Hue"}),e.jsxs(t.p,{children:["You can customize the color tone of the ",e.jsx(t.code,{children:"DateInput"})," component using the ",e.jsx(t.code,{children:"hue"}),` prop,
allowing you to select shades or tones that match your design preferences.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Lighter",hue:"lighter",alwaysHighlight:!0}),e.jsx(l,{title:"Light",hue:"light",alwaysHighlight:!0}),e.jsx(l,{title:"Main",alwaysHighlight:!0}),e.jsx(l,{title:"Dark",hue:"dark",alwaysHighlight:!0}),e.jsx(l,{title:"Darker",hue:"darker",alwaysHighlight:!0})]}),e.jsx(a,{code:`
<DateInput title={'Lighter'}
           hue={'lighter'}
           alwaysHighlight={true}
/>
<DateInput title={'Light'}
           hue={'light'}
           alwaysHighlight={true}
/>
<DateInput title={'Main'}
           alwaysHighlight={true}
/>
<DateInput title={'Dark'}
           hue={'dark'}
           alwaysHighlight={true}
/>
<DateInput title={'Darker'}
           hue={'darker'}
           alwaysHighlight={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"disabled"})," prop with a value of ",e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"}),` to enable or disable the input field. By default, the
`,e.jsx(t.code,{children:"DateInput"})," is enabled."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Enabled Input",alwaysHighlight:!0}),e.jsx(l,{title:"Disabled Input",disabled:!0})]}),e.jsx(a,{code:`
<DateInput title={'Enabled Input'}
           alwaysHighlight={true}
/>
<DateInput title={'Disabled Input'}
           disabled={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"shrink-title",children:"Shrink Title"}),e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"shrinkTitle"})," prop is set to ",e.jsx(t.code,{children:"true"}),` to make the label shrink or move up when text is entered in the
input field. Set the `,e.jsx(t.code,{children:"shrinkTitle"})," prop to ",e.jsx(t.code,{children:"false"})," to keep the label at the top."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(l,{title:"Date 1"}),e.jsx(l,{title:"Date 2",shrinkTitle:!1})]}),e.jsx(a,{code:`
<DateInput title={'Date 1'} />
<DateInput title={'Date 2'}
           shrinkTitle={false}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"hint-and-full-width",children:"Hint and Full Width"}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"hint"})," prop to add a description for the input field. You can adjust the ",e.jsx(t.code,{children:"DateInput"}),` extend to full width by
setting the `,e.jsx(t.code,{children:"fullWidth"})," prop to ",e.jsx(t.code,{children:"true"})," or ",e.jsx(t.code,{children:"false"})," (default), depending on the size of its parent container."]}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(l,{title:"Date",hint:"* Required",fullWidth:!0})}),e.jsx(a,{code:`
<DateInput title={'Date'}
           hint={'* Required'}
           fullWidth={true}
/>
`,language:"tsx",dark:!0})]})]})}function B(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{B as default};
