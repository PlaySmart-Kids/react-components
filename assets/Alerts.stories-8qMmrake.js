import{j as e,D as _,a as D,F as T}from"./DefaultThemeProvider-BRxWeqUn.js";import{A as f,b as i,c as p}from"./AlertProvider-M_ZUlcLU.js";import{C as r}from"./ProfileLink-CUAQyePv.js";import"./index-BwDkhjyp.js";import"./ColorUtil-CBNsOe9z.js";import"./Button-D86MD7lw.js";import"./useResizeObserver-BXh6FCPJ.js";import"./index-DOJJSfO9.js";import"./useRipple-BRaxIdCd.js";import"./IconButton-3t77Cnkd.js";import"./RadioButton-CwwJ644n.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-aJ37WT_Z.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";function x(t){const g=[r.PRIMARY,r.INFO,r.WARNING,r.ERROR,r.SECONDARY],u=[i.FILLED,i.TWO_TONES,i.OUTLINED],m=[void 0,0];return e("div",{className:"center-panel flex-vertical",children:m.map(n=>g.map(s=>u.map(o=>D(T,{children:[e(p,{message:t.message,variant:o,color:s,timeout:n},`${o}_${s}_${m}_1`),e(p,{title:t.title,message:t.message,variant:o,color:s,timeout:n},`${o}_${s}_${m}_2`)]}))))})}const M={component:x,decorators:[t=>e(_,{children:e(f,{children:e(t,{})})})],argTypes:{title:{control:{type:"text"}},message:{control:{type:"text"}}}},a={args:{title:"Title",message:"Message"}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    message: 'Message'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const S=["Demo"];export{a as Demo,S as __namedExportsOrder,M as default};