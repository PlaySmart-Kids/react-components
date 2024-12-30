import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as o}from"./index-BrnU7xv7.js";import{ae as a,af as s}from"./index-DS4mN-Cx.js";import l from"./Form.stories-BS1IvYwe.js";import{F as m}from"./Form-Bcy91KMB.js";import{r as u}from"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./index-DJbli8uv.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./Grid-BE_VkPio.js";import"./SizeWatcher-BDbsP5oN.js";import"./DomUtil-DAqrhrKT.js";import"./Combobox-utIsBDyR.js";import"./InputUtil-CfDwzwTJ.js";import"./Input-BXqaDr0Y.js";import"./PasswordInput-CwZj2So7.js";import"./DateInput-65P20iYT.js";import"./TagInput-Dk5jByq5.js";import"./Checkbox-DTNaYHYX.js";import"./Switch-BSBrATWg.js";function p(){const[r,i]=u.useState({firstname:"",lastname:"",email:"",password:"",gender:"",accept:!1,plan:""}),n=t=>t==="firstname"?r.firstname:t==="lastname"?r.lastname:t==="email"?r.email:t==="password"?r.password:t==="gender"?r.gender:t==="accept"?r.accept:r.plan;return e.jsx(m,{onSubmit:t=>(t.preventDefault(),console.log("Submit Form"),!1),items:[{id:"firstname",gridSizes:{md:6},model:{title:"Firstname",renderer:"input",rendererProps:{type:"text",required:!0},binding:n}},{id:"lastname",gridSizes:{md:6},model:{title:"Lastname",renderer:"input",rendererProps:{type:"text",required:!0},binding:n}},{id:"email",gridSizes:{md:12},model:{title:"Email",renderer:"input",rendererProps:{type:"email",required:!0},binding:n}},{id:"password",gridSizes:{md:12},model:{title:"Password",renderer:"input",rendererProps:{type:"password",required:!0},binding:n}},{id:"gender",gridSizes:{md:12},model:{title:"",renderer:"radio",options:[{label:"Male",value:"M"},{label:"Female",value:"F"}],binding:n}},{id:"plan",gridSizes:{md:12},model:{title:"Select your plan",renderer:"combobox",options:[{label:"Basic",value:"1"},{label:"Standard",value:"2"},{label:"Premium",value:"3"}],binding:n}},{id:"accept",gridSizes:{md:12},model:{title:"I agree to the Terms and Conditions",renderer:"checkbox",binding:n}},{id:"submit",gridSizes:{md:12},model:{title:"Sign Up",renderer:"submit"}}],value:r,onChangeSomeValues:t=>{console.log(t),i({...r,...t})}})}function d(r){const i={code:"code",h1:"h1",h3:"h3",p:"p",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{Meta:!0,of:l}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h1,{id:"form-component",children:"Form Component"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Form"}),` component allows users to input, submit, and manage data. Forms are commonly used
for purposes such as user registration, surveys, contact forms, and order forms. Here's how to implement it.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h3,{id:"basic-form",children:"Basic Form"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Form"}),` component are used to collect information from users and may include various elements such as input fields,
buttons, combo boxes, radio buttons, and checkboxes.`]}),e.jsx("div",{className:"grid-vertical sb-unstyled",style:{width:"80%",padding:20},children:e.jsx(p,{})}),e.jsx(s,{code:`
const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    accept: false,
    plan: '',
  });
const defaultBinding = (id: string) => {
  if (id === 'firstname') {
    return value.firstname;
  } else if (id === 'lastname') {
    return value.lastname;
  } else if (id === 'email') {
    return value.email;
  } else if (id === 'password') {
    return value.password;
  } else if (id === 'gender') {
    return value.gender;
  } else if (id === 'accept') {
    return value.accept;
  } else {
    return value.plan;
  }
};
return (
  <Form
    onSubmit={(e) => {
      e.preventDefault();
      console.log('Submit Form');
      return false;
    }}
    items={[
      {
        id: 'firstname',
        gridSizes: { md: 6 },
        model: {
          title: 'Firstname',
          renderer: 'input',
          rendererProps: { type: 'text', required: true },
          binding: defaultBinding,
        },
      },
      {
        id: 'lastname',
        gridSizes: { md: 6 },
        model: {
          title: 'Lastname',
          renderer: 'input',
          rendererProps: { type: 'text', required: true },
          binding: defaultBinding,
        },
      },
      {
        id: 'email',
        gridSizes: { md: 12 },
        model: {
          title: 'Email',
          renderer: 'input',
          rendererProps: { type: 'email', required: true },
          binding: defaultBinding,
        },
      },
      {
        id: 'password',
        gridSizes: { md: 12 },
        model: {
          title: 'Password',
          renderer: 'input',
          rendererProps: { type: 'password', required: true },
          binding: defaultBinding,
        },
      },
      {
        id: 'gender',
        gridSizes: { md: 12 },
        model: {
          title: '',
          renderer: 'radio',
          options: [
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F' },
          ],
          binding: defaultBinding,
        },
      },
      {
        id: 'plan',
        gridSizes: { md: 12 },
        model: {
          title: 'Select your plan',
          renderer: 'combobox',
          options: [
            { label: 'Basic', value: '1' },
            { label: 'Standard', value: '2' },
            { label: 'Premium', value: '3' },
          ],
          binding: defaultBinding,
        },
      },
      {
        id: 'accept',
        gridSizes: { md: 12 },
        model: {
          title: 'I agree to the Terms and Conditions',
          renderer: 'checkbox',
          binding: defaultBinding,
        },
      },
      {
        id: 'submit',
        gridSizes: { md: 12 },
        model: {
          title: 'Sign Up',
          renderer: 'submit',
        },
      },
    ]}
    value={value}
    onChangeSomeValues={(newValue) => {
      console.log(newValue);
      setValue({
        ...value,
        ...newValue,
      });
    }}
  />
);
`,language:"tsx",dark:!0})]})]})}function Z(r={}){const{wrapper:i}={...o(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(d,{...r})}):d(r)}export{Z as default};
