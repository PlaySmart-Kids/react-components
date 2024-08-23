import{j as e,D as d,a as i}from"./DefaultThemeProvider-ZzgTeurK.js";import{r as m}from"./index-BwDkhjyp.js";import{D as p}from"./AlertButton-Cqe_ZMy9.js";import{B as h}from"./Button-Cp_l5BBr.js";import"./IconButton-BzkixA9j.js";import"./RadioButton-DYrnrWm6.js";import{T as s}from"./Badge-DwPYLl2q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./ColorUtil-DiQuQGrZ.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-CkSJz6hw.js";import"./CheckboxUtil-CqPWmFQ9.js";function f(t){const[a,r]=m.useState(!1);return i("div",{style:{position:"relative",display:"flex",justifyContent:"center",padding:"20px",width:"400px",height:"200px",margin:"auto"},children:[e(h,{onClick:()=>{r(!a)},children:"Open Dialog"}),e(p,{title:t.title,open:a,compact:t.compact,fullWidth:t.fullWidth,showCloseIcon:t.showCloseIcon,backdropClosable:t.backdropClosable,shadowSize:t.shadowSize,onClose:()=>r(!1),children:i(s,{variant:"subtitle1",style:{textAlign:"center"},children:[e("br",{}),e("br",{}),e(s,{variant:"heading4",children:"Content"}),e("br",{}),e("br",{})]})})]})}const T={component:f,parameters:{layout:"padded"},decorators:[t=>e(d,{href:"./_default.css",children:e(t,{})})],argTypes:{shadowSize:{options:[0,1,2,4,8,16,24],control:{type:"radio"}}}},o={args:{title:"Dialog title",showCloseIcon:!0,compact:!1,fullWidth:!1,backdropClosable:!0,shadowSize:8}};var l,n,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Dialog title',
    showCloseIcon: true,
    compact: false,
    fullWidth: false,
    backdropClosable: true,
    shadowSize: 8
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const W=["Demo"];export{o as Demo,W as __namedExportsOrder,T as default};
