import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as a}from"./index-BrnU7xv7.js";import{ae as r,af as i}from"./index-DS4mN-Cx.js";import s from"./TopbarLayout.stories-BGyVIbWN.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./TopbarLayout-DAyzHkYU.js";import"./DomUtil-DAqrhrKT.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";function n(t){const o={code:"code",h1:"h1",h3:"h3",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{Meta:!0,of:s}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(o.h1,{id:"topbarlayout",children:"TopbarLayout"}),e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"TopbarLayout"}),` component is a responsive navigation bar that displays horizontally at the top of the screen or
vertically as a dropdown menu triggered by a click, adapting to screen size and enabling users to navigate to other
web pages.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(o.h3,{id:"basic-topbarlayout",children:"Basic TopbarLayout"}),e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"TopbarLayout"})," component requires specific props to create navigation menus: ",e.jsx(o.code,{children:"menus"}),", an array with ",e.jsx(o.code,{children:"label"}),` for
menu names, `,e.jsx(o.code,{children:"icon"})," for menu icons and ",e.jsx(o.code,{children:"id"})," for page links, corresponding to ",e.jsx(o.code,{children:"menuId"}),` to specify the selected page
link. Selecting a menu triggers the `,e.jsx(o.code,{children:"onClick"})," event. You can use the ",e.jsx(o.code,{children:"renderer"}),` prop to create a custom menu. It
provides `,e.jsx(o.code,{children:"appName"})," and ",e.jsx(o.code,{children:"appLogo"}),` props to display the app's name and logo at the front of the menu. Use the
`,e.jsx(o.code,{children:"smallScreenSize"}),` prop to specify the screen size at which the menu orientation switches for smaller screens. You can
also add child components to display content for each menu. The `,e.jsx(o.code,{children:"TopbarLayout"})," has a fixed position."]}),e.jsx(i,{code:`
const [menuId, setMenuId] = useState<string>(props.menuId);
return (
  <TopbarLayout
    appName={'EZbiz App'}
    appLogo={'./svg/psk_logo.svg'}
    menuId={menuId}
    menus={[
      {
        label: 'Dashboard',
        icon: 'dashboard',
        id: '/dashboard',
        onClick: () => {
          setMenuId('/dashboard');
        },
      },
      {
        label: 'Datasource',
        icon: 'database',
        id: '/database',
        onClick: () => {
          setMenuId('/database');
        },
      },
      {
        label: 'Schema',
        icon: 'schema',
        id: '/schema',
        onClick: () => {
          setMenuId('/schema');
        },
      },
      {
        label: 'Search',
        icon: 'search',
        id: '/search',
        onClick: () => {
          setMenuId('/search');
        },
      },
      {
        label: 'CMS',
        icon: 'favorite',
        id: '/cms',
        onClick: () => {
          setMenuId('/cms');
        },
      },
    ]}
    smallScreenSize={720}
  >
    <div
      style={{
        height: '200px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Content for {menuId}
    </div>
  </TopbarLayout>
);
`,language:"tsx",dark:!0})]})]})}function q(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{q as default};
