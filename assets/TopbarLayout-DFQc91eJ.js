import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as r,af as n}from"./index-5tMK-v8p.js";import s from"./TopbarLayout.stories-hSqEunPB.js";import"./index-DJO9vBfz.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-CikfRwdJ.js";import"./MenuOption-CFxhanOA.js";import"./DomUtil-Bdo5KM9z.js";import"./Button-Cm1yCUKV.js";import"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./useRipple-BbkXZzvg.js";import"./IconButton-6cAcpLD7.js";import"./RadioButton-BgQOW4iM.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-CCPNF3gP.js";import"./ActionBar-BH2Q10LK.js";function a(t){const o={h1:"h1",h3:"h3",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{Meta:!0,of:s}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(o.h1,{id:"topbarlayout",children:"TopbarLayout"}),e.jsx(o.h3,{id:"example",children:"Example"})," ",e.jsx(n,{code:`
<TopbarLayout
    appName={'EZbiz Application'}
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
      Content
    </div>
  </TopbarLayout>
`,language:"tsx",dark:!0})]})]})}function X(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{X as default};
