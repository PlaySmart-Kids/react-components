import{j as r,D as u,a as e,F as h,T as i,L as g,d as b,M as s}from"./DefaultThemeProvider-D8uc623f.js";import{T as l}from"./Tooltip-CfdcR_vu.js";import{C}from"./Checkbox-DErxap5G.js";import{S as k}from"./Switch-D69I1jfz.js";import{A as f,T as p}from"./Anchor-Dh8oERsW.js";import"./index-BwDkhjyp.js";import{I as y}from"./Input-CXMM8YMK.js";import"./DateInput-COvj3fLt.js";import"./TagInput-BA0NpfUU.js";import"./Button-DZS6UzoU.js";import"./IconButton-Bkd6rzst.js";import{R as n}from"./RadioButton-OU_3mtva.js";import"./AlertButton-DzLDzLpu.js";import"./ActionBar-DVl6-47o.js";import{C as T}from"./Combobox-Mv6qnled.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ColorUtil-Bbwy-7Wp.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-gxOE-J9K.js";import"./InputUtil-DB9qJFib.js";function v(o){const t=p(o.anchor);return e(h,{children:[r(i,{variant:"heading4",children:"Tooltip demo (using controls to change properties of this widget)"}),e("div",{style:{position:"relative",padding:"20px",width:"80%",margin:"auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",flexGrow:1,flexBasis:1,gap:"1rem",height:"30rem",alignItems:"start"},children:[r(l,{title:"Label",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(g,{title:"label"})}),r(l,{title:"Checkbox",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(C,{title:"checkbox"})}),r(l,{title:"Input",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(y,{fullWidth:!0,title:"Input"})}),r(l,{title:"Typography",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(i,{component:"span",variant:"heading4",color:"primary",style:{height:"fit-content"},children:"Typography"})}),r(l,{title:"MatIcon",backgroundColor:o.backgroundColor,color:o.color,children:r(b,{name:"info",size:48})}),r(l,{title:"MatSymbol",backgroundColor:o.backgroundColor,color:o.color,children:r(s,{size:48,name:"info"})}),e("div",{children:[r(l,{title:"radio1",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(n,{title:"radio1",name:"group1"})}),r(l,{title:"radio2",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(n,{title:"radio2",name:"group1"})})]}),r(l,{title:"Combobox",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(T,{fullWidth:!0,options:[{label:"10",value:"10"},{label:"20",value:"20"},{label:"30",value:"30"},{label:"40",value:"40"}],label:"Combobox",value:"10"})}),r(l,{title:"Switch",anchor:t,backgroundColor:o.backgroundColor,color:o.color,children:r(k,{})}),r(l,{title:"Div",backgroundColor:o.backgroundColor,color:o.color,children:r("div",{children:"Normal DIV"})})]})]})}const J={component:v,parameters:{layout:"padded"},decorators:[o=>r(u,{children:r(o,{})})],argTypes:{anchor:{options:["north","east","south","west"],control:{type:"radio"}}}},a={args:{anchor:f.NORTH,backgroundColor:"",color:""}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    anchor: Anchor.NORTH,
    backgroundColor: '',
    color: ''
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const K=["Demo"];export{a as Demo,K as __namedExportsOrder,J as default};