import{j as e,D as c,a,F as p,T as r}from"./DefaultThemeProvider-3jRHqMMg.js";import{r as m}from"./index-BwDkhjyp.js";import{D as h}from"./AlertButton-CzVk3fXG.js";import{B as u}from"./Button-Bmxau5DP.js";import"./IconButton-BO-tLsoF.js";import"./RadioButton-CYGO6mve.js";import"./ActionBar-BYC-azPa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./ColorUtil-CTP1cW_j.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-DLxJhTTa.js";import"./CheckboxUtil-CqPWmFQ9.js";function f(t){const[i,s]=m.useState(!1);return a(p,{children:[e("div",{style:{padding:"10px",display:"flex",justifyContent:"start",paddingBlockStart:"1rem"},children:e(r,{component:"h4",children:"Dialog demo (using controls to change properties of this widget)"})}),a("div",{style:{position:"relative",display:"flex",justifyContent:"center",padding:"20px",width:"400px",height:"200px",margin:"auto"},children:[e(u,{onClick:()=>{s(!i)},children:"Open Dialog"}),e(h,{title:t.title,open:i,compact:t.compact,fullWidth:t.fullWidth,showCloseIcon:t.showCloseIcon,backdropClosable:t.backdropClosable,shadowSize:t.shadowSize,onClose:()=>s(!1),children:a(r,{variant:"subtitle1",style:{textAlign:"center"},children:[e("br",{}),e("br",{}),e(r,{variant:"heading4",children:"Content"}),e("br",{}),e("br",{})]})})]})]})}const W={component:f,parameters:{layout:"padded"},decorators:[t=>e(c,{children:e(t,{})})],argTypes:{shadowSize:{options:[0,1,2,4,8,16,24],control:{type:"radio"}}}},o={args:{title:"Dialog title",showCloseIcon:!0,compact:!1,fullWidth:!1,backdropClosable:!0,shadowSize:4}};var l,n,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Dialog title',
    showCloseIcon: true,
    compact: false,
    fullWidth: false,
    backdropClosable: true,
    shadowSize: 4
  }
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const B=["Demo"];export{o as Demo,B as __namedExportsOrder,W as default};
