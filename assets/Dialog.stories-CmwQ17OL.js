import{j as e,D as d,a as i}from"./DefaultThemeProvider-B0MfXXxB.js";import{r as m}from"./index-BwDkhjyp.js";import{D as p}from"./AlertButton-BHPhph74.js";import{B as h}from"./Button-67xmFC_M.js";import"./IconButton-DNQZuW95.js";import"./RadioButton-BDz5Z2Rl.js";import{T as s}from"./ProfileLink-DICP74ZS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./ColorUtil-lGoxO2Iu.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-BwNxic67.js";import"./CheckboxUtil-CqPWmFQ9.js";function u(o){const[a,r]=m.useState(!1);return i("div",{style:{position:"relative",display:"flex",justifyContent:"center",padding:"20px",width:"400px",height:"200px",margin:"auto"},children:[e(h,{onClick:()=>{r(!a)},children:"Open Dialog"}),e(p,{title:o.title,open:a,compact:o.compact,fullWidth:o.fullWidth,showCloseIcon:o.showCloseIcon,backdropClosable:o.backdropClosable,shadowSize:o.shadowSize,onClose:()=>r(!1),children:i(s,{variant:"subtitle1",style:{textAlign:"center"},children:[e("br",{}),e("br",{}),e(s,{variant:"heading4",children:"Content"}),e("br",{}),e("br",{})]})})]})}const T={component:u,parameters:{layout:"padded"},decorators:[o=>e(d,{children:e(o,{})})],argTypes:{shadowSize:{options:[0,1,2,4,8,16,24],control:{type:"radio"}}}},t={args:{title:"Dialog title",showCloseIcon:!0,compact:!1,fullWidth:!1,backdropClosable:!0,shadowSize:8}};var l,n,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Dialog title',
    showCloseIcon: true,
    compact: false,
    fullWidth: false,
    backdropClosable: true,
    shadowSize: 8
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const W=["Demo"];export{t as Demo,W as __namedExportsOrder,T as default};
