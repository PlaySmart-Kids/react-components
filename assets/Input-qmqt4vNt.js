import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as l}from"./index-BrnU7xv7.js";import{ae as o,af as n}from"./index-5tMK-v8p.js";import d from"./Input.stories-Dj6UvMW_.js";import{I as i}from"./Input-BlcUfh8C.js";import"./index-DJO9vBfz.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-CikfRwdJ.js";import"./InputUtil-BONj-j-a.js";function r(s){const t={code:"code",h1:"h1",h3:"h3",p:"p",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{Meta:!0,of:d}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"input-component",children:"Input Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Input"})," component enables users to enter text into the input field. Here's how it works in practice."]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-input",children:"Basic Input"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Input"}),` component offers five types: text (default), password, email, number, and date. You can set the input
label using the `,e.jsx(t.code,{children:"title"})," prop and use ",e.jsx(t.code,{children:"placeholder"}),` prop to provide a short hint describing the expected value of a
input field.`]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(i,{style:{width:"15rem"},title:"Email",type:"email"}),e.jsx(i,{style:{width:"15rem"},title:"Password",type:"password"}),e.jsx(i,{style:{width:"15rem"},title:"Phone",placeholder:"XXX-XXX-XXXX"}),e.jsx(i,{style:{width:"15rem"},title:"Age",type:"number"}),e.jsx(i,{style:{width:"15rem"},title:"Today's Date",type:"date"})]}),e.jsx(n,{code:`
<Input style={{ width: '15rem' }}
       title={'Email'}
       type={'email'}
/>
<Input style={{ width: '15rem' }}
       title={'Password'}
       type={'password'}
/>
<Input style={{ width: '15rem' }}
       title={'Phone'}
       placeholder={'XXX-XXX-XXXX'}
/>
<Input style={{ width: '15rem' }}
       title={'Age'}
       type={'number'}
/>
<Input style={{ width: '15rem' }}
       title={'Today's Date'}
       type={'date'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"shrink-title",children:"Shrink Title"}),e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"shrinkTitle"})," prop to ",e.jsx(t.code,{children:"true"}),` to make the label shrink or move up when text is entered in the input field. By
default, it is set to `,e.jsx(t.code,{children:"false"}),", keeping the label at the top."]}),e.jsx("br",{}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(i,{style:{width:"15rem"},title:"Firstname",shrinkTitle:!0}),e.jsx(i,{style:{width:"15rem"},title:"Lastname",shrinkTitle:!1})]}),e.jsx(n,{code:`
<Input style={{ width: '15rem' }}
       title={'Firstname'}
       shrinkTitle={true}
/>
<Input style={{ width: '15rem' }}
       title={'Lastname'}
       shrinkTitle={false}
/>
`,language:"tsx",dark:!0})]})]})}function I(s={}){const{wrapper:t}={...l(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{I as default};
