import{j as e,D as d,a as i}from"./DefaultThemeProvider-BRxWeqUn.js";import{r as m}from"./index-BwDkhjyp.js";import{D as p}from"./AlertButton-w3-Pm3AX.js";import{B as h}from"./Button-d5JHbvBN.js";import"./IconButton-Bnr0018K.js";import"./RadioButton-Y6KMrBEL.js";import"./ActionBar-kvCOA1XB.js";import{T as s}from"./ProfileLink-D4SMWbXY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./ColorUtil-BMBEINyX.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-BRaxIdCd.js";import"./CheckboxUtil-CqPWmFQ9.js";function u(o){const[a,r]=m.useState(!1);return i("div",{style:{position:"relative",display:"flex",justifyContent:"center",padding:"20px",width:"400px",height:"200px",margin:"auto"},children:[e(h,{onClick:()=>{r(!a)},children:"Open Dialog"}),e(p,{title:o.title,open:a,compact:o.compact,fullWidth:o.fullWidth,showCloseIcon:o.showCloseIcon,backdropClosable:o.backdropClosable,shadowSize:o.shadowSize,onClose:()=>r(!1),children:i(s,{variant:"subtitle1",style:{textAlign:"center"},children:[e("br",{}),e("br",{}),e(s,{variant:"heading4",children:"Content"}),e("br",{}),e("br",{})]})})]})}const W={component:u,parameters:{layout:"padded"},decorators:[o=>e(d,{children:e(o,{})})],argTypes:{shadowSize:{options:[0,1,2,4,8,16,24],control:{type:"radio"}}}},t={args:{title:"Dialog title",showCloseIcon:!0,compact:!1,fullWidth:!1,backdropClosable:!0,shadowSize:4}};var l,n,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Dialog title',
    showCloseIcon: true,
    compact: false,
    fullWidth: false,
    backdropClosable: true,
    shadowSize: 4
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const O=["Demo"];export{t as Demo,O as __namedExportsOrder,W as default};
