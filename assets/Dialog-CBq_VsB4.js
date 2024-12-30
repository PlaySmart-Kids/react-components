import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as a,af as l}from"./index-DS4mN-Cx.js";import c from"./Dialog.stories-dIXl9u9S.js";import{D as d}from"./AlertButton-BckD7m-D.js";import{r as p}from"./index-DJO9vBfz.js";import{B as h}from"./Button-HS4qhxue.js";import{T as i}from"./DefaultThemeProvider-DB5yquFP.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./index-CikfRwdJ.js";function m(){const[o,t]=p.useState(!1);return e.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",height:"100px",margin:"auto"},children:[e.jsx(h,{onClick:()=>{t(!o)},children:"Open Dialog"}),e.jsx(d,{title:"Title",open:o,compact:!1,fullWidth:!1,showCloseIcon:!0,backdropClosable:!1,shadowSize:4,onClose:()=>t(!1),onAction:s=>alert(s),leftActions:[{label:"Cancel",variant:"outlined",action:"leftActions >>> Click on Cancel!"}],rightActions:[{label:"OK",color:"primary",action:"rightActions >>> Click on OK!"}],children:e.jsxs(i,{variant:"subtitle1",style:{textAlign:"center"},children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{variant:"heading4",children:"Add Content Here"}),e.jsx("br",{}),e.jsx("br",{})]})})]})}function n(o){const t={code:"code",h1:"h1",h3:"h3",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{Meta:!0,of:c}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"dialog",children:"Dialog"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Dialog"}),` component is designed to display information or request input from the user. It generally displays as a
modal window that overlays the main application content, requiring the user to engage with it before returning to the
main interface.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-dialog",children:"Basic Dialog"}),e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"Dialog"}),", you can set the text title using the ",e.jsx(t.code,{children:"title"})," prop. To display the dialog box, set the ",e.jsx(t.code,{children:"open"}),` prop to
`,e.jsx(t.code,{children:"true"}),`. You can also include child components to show content or messages, and buttons, which let you control and
customize the dialog's behavior. Set the `,e.jsx(t.code,{children:"fullWidth"})," prop to ",e.jsx(t.code,{children:"true"}),` to make the dialog extend to the full width of
its parent container. Use the `,e.jsx(t.code,{children:"compact"})," prop to decrease the padding of the ",e.jsx(t.code,{children:"Dialog"}),`. To add a close icon, set the
`,e.jsx(t.code,{children:"showCloseIcon"})," prop to ",e.jsx(t.code,{children:"true"}),". You can customize the shadow size of the dialog box with the ",e.jsx(t.code,{children:"shadowSize"}),` prop, which
is set to 4 by default. Additionally, you can use the `,e.jsx(t.code,{children:"onClose"}),", ",e.jsx(t.code,{children:"onAction"}),", ",e.jsx(t.code,{children:"leftActions"}),", and ",e.jsx(t.code,{children:"rightActions"}),` props
to trigger actions and position buttons within the dialog. Here's an example of how to implement it.`]}),e.jsx("div",{className:"grid-vertical sb-unstyled",children:e.jsx(m,{})}),e.jsx(l,{code:`
const [open, setOpen] = useState<boolean>(false);
return (
  <div
    style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      height: '100px',
      margin: 'auto',
    }}
  >
    <Button
      onClick={() => {
        setOpen(!open);
      }}
    >
      Open Dialog
    </Button>
    <Dialog
      title={'Title'}
      open={open}
      compact={false}
      fullWidth={false}
      showCloseIcon={true}
      backdropClosable={false}
      shadowSize={4}
      onClose={() => setOpen(false)}
      onAction={(action) => alert(action)}
      leftActions={[
        {
          label: 'Cancel',
          variant: 'outlined',
          action: 'leftActions >>> Click on Cancel!',
        },
      ]}
      rightActions={[
        {
          label: 'OK',
          color: 'primary',
          action: 'rightActions >>> Click on OK!',
        },
      ]}
    >
      <Typography variant={'subtitle1'} style={{ textAlign: 'center' }}>
        <br />
        <br />
        <Typography variant={'heading4'}>Add Content Here</Typography>
        <br />
        <br />
      </Typography>
    </Dialog>
  </div>
);
`,language:"tsx",dark:!0})]})]})}function Y(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{Y as default};
