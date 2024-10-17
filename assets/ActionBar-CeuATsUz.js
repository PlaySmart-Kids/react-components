import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as m}from"./index-BrnU7xv7.js";import{ae as h,af as r}from"./index-0JuUIpxl.js";import p from"./ActionBar.stories-CTzU9n-S.js";import{A as l}from"./ActionBar-BH2Q10LK.js";import{B as o,C as n,M as s}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import"./iframe-BNRbnSEC.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./HeroImage-FMxAfIJu.js";import"./index-BAi5cnyf.js";import"./Button-Cm1yCUKV.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./index-CikfRwdJ.js";function d(c){const a={h1:"h1",h3:"h3",p:"p",...m(),...c.components};return t.jsxs(t.Fragment,{children:[t.jsx(h,{Meta:!0,of:p}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(a.h1,{id:"actionbar",children:"ActionBar"}),t.jsx(a.p,{children:".. More information about this component will be added here soon ..."})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(a.h3,{id:"example-1",children:"Example 1"}),t.jsx(a.p,{children:"Create ActionBar with 2 buttons in the center"}),t.jsx("div",{className:"flex-horizontal sb-unstyled",children:t.jsx(l,{style:{width:"20rem"},useFullWidthOnCenterActions:!1,onAction:(i,e)=>{console.log(i,e)},centerActions:[{label:"",variant:o.OUTLINED,color:n.PRIMARY,action:"action1",actionData:"data1",iconStart:t.jsx(s,{name:"home",size:20})},{label:"action2",variant:o.FILLED,color:n.PRIMARY,action:"action2",actionData:"data2"}]})}),t.jsx(r,{code:`
<ActionBar
  style={{ width: '20rem' }}
  spaceBetween={false}
  onAction={(action,actionData) => {
    console.log(action,actionData);
  }}
  useFullWidthOnCenterActions={false}
  centerActions={[
    {
      label: '',
      variant: ButtonVariant.OUTLINED,
      color: ColorType.PRIMARY,
      action: 'action1',
      actionData: 'data1',
      iconStart: <MatSymbol name={'home'} size={20} />,
    },
    {
      label: 'action2',
      variant: ButtonVariant.FILLED,
      color: ColorType.PRIMARY,
      action: 'action2',
      actionData: 'data2',
    },
  ]}
/>
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(a.h3,{id:"example-2",children:"Example 2"}),t.jsx(a.p,{children:"Create ActionBar with 2 buttons on the left side"}),t.jsx("div",{className:"flex-horizontal sb-unstyled",children:t.jsx(l,{style:{width:"20rem"},useFullWidthOnCenterActions:!0,onAction:(i,e)=>{console.log(i,e)},leftActions:[{label:"",variant:o.OUTLINED,color:n.PRIMARY,action:"action1",actionData:"data1",iconStart:t.jsx(s,{name:"home",size:20})},{label:"action2",variant:o.FILLED,color:n.PRIMARY,action:"action2",actionData:"data2"}]})}),t.jsx(r,{code:`
<ActionBar
  style={{ width: '20rem' }}
  spaceBetween={false}
  onAction={(action,actionData) => {
    console.log(action,actionData);
  }}
  useFullWidthOnCenterActions={true}
  leftActions= {[
    {
      label: '',
      variant: ButtonVariant.OUTLINED,
      color: ColorType.PRIMARY,
      action: 'action1',
      iconStart: <MatSymbol name={'home'} size={20} />,
    },
    {
      label: 'action2',
      variant: ButtonVariant.FILLED,
      color: ColorType.PRIMARY,
      action: 'action2',
    },
  ]}
/>
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(a.h3,{id:"example-3",children:"Example 3"}),t.jsx(a.p,{children:"Create ActionBar with 2 buttons on the right side"}),t.jsx("div",{className:"flex-horizontal sb-unstyled",children:t.jsx(l,{style:{width:"20rem"},useFullWidthOnCenterActions:!0,onAction:(i,e)=>{console.log(i,e)},rightActions:[{label:"",variant:o.OUTLINED,color:n.PRIMARY,action:"action1",actionData:"data1",iconStart:t.jsx(s,{name:"home",size:20})},{label:"action2",variant:o.FILLED,color:n.PRIMARY,action:"action2",actionData:"data2"}]})}),t.jsx(r,{code:`
<ActionBar
  style={{ width: '20rem' }}
  spaceBetween={false}
  onAction={(action,actionData) => {
    console.log(action,actionData);
  }}
  useFullWidthOnCenterActions={true}
  rightActions={[
    {
      label: '',
      variant: ButtonVariant.OUTLINED,
      color: ColorType.PRIMARY,
      action: 'action1',
      actionData: 'data1',
      iconStart: <MatSymbol name={'home'} size={20} />,
    },
    {
      label: 'action2',
      variant: ButtonVariant.FILLED,
      color: ColorType.PRIMARY,
      action: 'action2',
      actionData: 'data2',
    },
  ]}
/>
`,language:"tsx",dark:!0})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(a.h3,{id:"example-4",children:"Example 4"}),t.jsx(a.p,{children:"Create ActionBar with 2 buttons on the right side"}),t.jsx("div",{className:"flex-horizontal sb-unstyled",children:t.jsx(l,{style:{width:"20rem"},useFullWidthOnCenterActions:!0,onAction:(i,e)=>{console.log(i,e)},leftActions:[{label:"action1",variant:o.FILLED,color:n.PRIMARY,action:"action1",actionData:"data1"}],centerActions:[{label:"action2",variant:o.FILLED,color:n.PRIMARY,action:"action2",actionData:"data2"}],rightActions:[{label:"action3",variant:o.FILLED,color:n.PRIMARY,action:"action3",actionData:"data3"}]})}),t.jsx(r,{code:`
<ActionBar
      style={{ width: '20rem' }}
      useFullWidthOnCenterActions={true}
      onAction={(action,actionData) => {
        console.log(action,actionData);
      }}
      leftActions={[
        {
          label: 'action1',
          variant: ButtonVariant.FILLED,
          color: ColorType.PRIMARY,
          action: 'action1',
          actionData: 'data1',
        }
      ]}
      centerActions={[
        {
          label: 'action2',
          variant: ButtonVariant.FILLED,
          color: ColorType.PRIMARY,
          action: 'action2',
          actionData: 'data2',
        }
      ]}
      rightActions={[
        {
          label: 'action3',
          variant: ButtonVariant.FILLED,
          color: ColorType.PRIMARY,
          action: 'action3',
          actionData: 'data3',
        }
      ]}
    />
`,language:"tsx",dark:!0})]})]})}function Y(c={}){const{wrapper:a}={...m(),...c.components};return a?t.jsx(a,{...c,children:t.jsx(d,{...c})}):d(c)}export{Y as default};
