import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as u}from"./index-BrnU7xv7.js";import{ae as f,af as v}from"./index-DS4mN-Cx.js";import x from"./Popover.stories-DEjOdsp7.js";import{P as h}from"./Popover-BIDVtb57.js";import{r as s}from"./index-DJO9vBfz.js";import{B as c}from"./Button-HS4qhxue.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./DomUtil-DAqrhrKT.js";function g(){const[n,t]=s.useState(),[m,a]=s.useState(),[r,l]=s.useState(0),[i,p]=s.useState(0);return o.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",padding:"20px",margin:"auto",gap:"150px",height:"150px"},children:[o.jsx(c,{color:"info",style:{width:"5rem"},onClick:e=>{t(e.currentTarget)},children:r%2===0?"South":"North"}),o.jsx(h,{anchor:r%2===0?"south":"north",shiftY:r%2===0?0:10,shiftX:r%2===0?0:20,anchorRef:n,onClose:()=>{l(r+1),t(void 0),console.log("onClose  >>> Popover 1")},children:o.jsx(c,{color:"info",variant:"text",onClick:e=>{l(r+1),e.stopPropagation(),e.preventDefault(),t(void 0),console.log("onClick  >>> Tooltip 1")},children:"Tooltip 1"})}),o.jsx(c,{color:"warning",style:{width:"5rem"},onClick:e=>{a(e.currentTarget)},children:i%2===0?"West":"East"}),o.jsx(h,{anchor:i%2===0?"west":"east",anchorRef:m,onClose:()=>{p(i+1),a(void 0),console.log("onClose  >>> Popover 2")},children:o.jsx(c,{color:"warning",variant:"text",onClick:e=>{p(i+1),e.stopPropagation(),e.preventDefault(),a(void 0),console.log("onClick  >>> Tooltip 2")},children:"Tooltip 2"})})]})}function d(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",...u(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(f,{Meta:!0,of:x}),`
`,o.jsxs("div",{className:"preview-panel",children:[o.jsx(t.h1,{id:"popover-component",children:"Popover Component"}),o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"Popover"}),` component is designed to display extra information or content in response to user clicks. It's used for
tooltips and additional details related to specific elements, enhancing user experience by providing contextual
information without navigating away from the current view. Here's a sample to demonstrate its use.`]})]}),`
`,o.jsxs("div",{className:"preview-panel",children:[o.jsx(t.h3,{id:"basic-popover",children:"Basic Popover"}),o.jsxs(t.p,{children:["In the ",o.jsx(t.code,{children:"Popover"}),`, you can add child components like buttons to display content as tooltip text, allowing you to
control and customize the popover's behavior. Use the `,o.jsx(t.code,{children:"anchor"}),` prop to set the position of the tooltip text in the
`,o.jsx(t.code,{children:"Popover"})," component, with options such as ",o.jsx(t.code,{children:"north"}),", ",o.jsx(t.code,{children:"south"}),", ",o.jsx(t.code,{children:"east"})," and ",o.jsx(t.code,{children:"west"}),`. By default, the tooltip text is placed
at the top. The `,o.jsx(t.code,{children:"onClose"})," event is triggered when the ",o.jsx(t.code,{children:"Popover"})," transitions from visible to hidden."]}),o.jsx("div",{className:"grid-vertical sb-unstyled",children:o.jsx(g,{})}),o.jsx(v,{code:`
const [anchorRef1, setAnchorRef1] = useState<HTMLButtonElement>();
const [anchorRef2, setAnchorRef2] = useState<HTMLButtonElement>();
const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);
return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '20px',
      margin: 'auto',
      gap: '150px',
      height: '100px',
    }}
  >
    <Button
      color={'info'}
      style={{ width: '5rem' }}
      onClick={(event) => {
        setAnchorRef1(event.currentTarget);
      }}
    >
      {count1 % 2 === 0 ? 'South' : 'North'}
    </Button>
    <Popover
      anchor={count1 % 2 === 0 ? 'south' : 'north'}
      anchorRef={anchorRef1}
      onClose={() => {
        setCount1(count1 + 1);
        setAnchorRef1(undefined);
      }}
    >
      <Button
        color={'info'}
        variant={'text'}
        onClick={(event) => {
          setCount1(count1 + 1);
          event.stopPropagation();
          event.preventDefault();
          setAnchorRef1(undefined);
        }}
      >
        Tooltip 1
      </Button>
    </Popover>
    <Button
      color={'warning'}
      style={{ width: '5rem' }}
      onClick={(event) => {
        setAnchorRef2(event.currentTarget);
      }}
    >
      {count2 % 2 === 0 ? 'West' : 'East'}
    </Button>
    <Popover
      anchor={count2 % 2 === 0 ? 'west' : 'east'}
      anchorRef={anchorRef2}
      onClose={() => {
        setCount2(count2 + 1);
        setAnchorRef2(undefined);
      }}
    >
      <Button
        color={'warning'}
        variant={'text'}
        onClick={(event) => {
          setCount2(count2 + 1);
          event.stopPropagation();
          event.preventDefault();
          setAnchorRef2(undefined);
        }}
      >
        Tooltip 2
      </Button>
    </Popover>
  </div>
);
`,language:"tsx",dark:!0})]})]})}function K(n={}){const{wrapper:t}={...u(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(d,{...n})}):d(n)}export{K as default};
