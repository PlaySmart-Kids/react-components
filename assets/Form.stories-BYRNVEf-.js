import{j as r,D as u,a as s,F as c,T as g}from"./DefaultThemeProvider-D8uc623f.js";import{r as a}from"./index-BwDkhjyp.js";import{F as x}from"./Form-CitkERq2.js";import{D as b,a as f}from"./index-DOJJSfO9.js";import{B as S}from"./Button-DZS6UzoU.js";import"./IconButton-Bkd6rzst.js";import"./RadioButton-OU_3mtva.js";import"./AlertButton-DzLDzLpu.js";import"./ActionBar-DVl6-47o.js";import"./_commonjsHelpers-BosuxZz1.js";import"./SizeWatcher-BDbsP5oN.js";import"./DomUtil-Bdo5KM9z.js";import"./Combobox-Mv6qnled.js";import"./InputUtil-DB9qJFib.js";import"./Input-CXMM8YMK.js";import"./DateInput-COvj3fLt.js";import"./TagInput-BA0NpfUU.js";import"./ColorUtil-Bbwy-7Wp.js";import"./useResizeObserver-BXh6FCPJ.js";import"./useRipple-gxOE-J9K.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./index-B8XB3FuZ.js";function h(){const[i,o]=a.useState(!1),[e,l]=a.useState({text1:"text1",test2:"test2",test3:"",number:0,date:"2023-01-01",option:"1",radio:"2"});return s(c,{children:[" ",r("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:r(g,{component:"h4",children:"Form demo"})}),s("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:"2rem",justifyContent:"center",padding:"20px",width:"80%",margin:"auto"},children:[r(x,{onChangeItem:p=>{l(b(f(e),p))},value:e,onError:()=>{o(!1)},onSuccess:()=>{o(!0)},items:[{id:"text1",gridSizes:{xs:12},model:{required:!0,label:"Text1",renderer:"text",binding:()=>e.text1}},{id:"number",gridSizes:{xs:12},model:{required:!0,label:"Number",renderer:"text",binding:()=>e.number}},{id:"date",gridSizes:{xs:12},model:{label:"Date",renderer:"date",binding:()=>e.date}},{id:"option",gridSizes:{xs:12},model:{label:"Option",renderer:"combobox",binding:()=>e.option,options:[{label:"1",value:"1"},{label:"2",value:"2"}]}},{id:"radio",gridSizes:{xs:12},model:{label:"Radio",renderer:"radio",binding:()=>e.radio,options:[{label:"1",value:"1"},{label:"2",value:"2"}]}},{id:"test2",gridSizes:{xs:6,md:6},model:{required:!0,label:"Test2",renderer:"text",binding:()=>e.test2}},{id:"test3",gridSizes:{xs:6,md:6},model:{required:!0,label:"Test3",renderer:"text",binding:()=>e.test3}}]}),r(S,{disabled:!i,children:"Submit"})]})]})}const H={component:h,decorators:[i=>r(u,{children:r(i,{})})],argTypes:{}},t={args:{}};var d,n,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const J=["Demo"];export{t as Demo,J as __namedExportsOrder,H as default};