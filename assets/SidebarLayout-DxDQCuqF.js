import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as n}from"./index-BrnU7xv7.js";import{ae as r,af as a}from"./index-DS4mN-Cx.js";import s from"./SidebarLayout.stories-BKML0Yvt.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./DefaultMenu-CabspXGA.js";import"./ColorUtil-B4gL3Pif.js";import"./DomUtil-DAqrhrKT.js";import"./Checkbox-DTNaYHYX.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-C4DXtBro.js";import"./Switch-BSBrATWg.js";import"./Button-HS4qhxue.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./Alert-PWQClZnu.js";import"./AlertProvider-CSxl7Bna.js";import"./Accordion-7BL9lYKN.js";import"./Input-BXqaDr0Y.js";import"./InputUtil-CfDwzwTJ.js";import"./PasswordInput-CwZj2So7.js";import"./DateInput-65P20iYT.js";import"./TagInput-Dk5jByq5.js";import"./ColorChooser-B5FUsHpn.js";import"./index.browser-vcSNLBTf.js";import"./TabPanel-Bk8HrNlW.js";import"./SizeWatcher-BDbsP5oN.js";import"./Tooltip-BaGgYEDs.js";import"./Tooltip.module-D77Rh_bi.js";import"./Combobox-utIsBDyR.js";import"./Timer-h-JiAl7z.js";import"./Grid-BE_VkPio.js";import"./Slick-B6TBkA8o.js";import"./SlickFixedSize-CAkWqw8N.js";import"./useResizeObserver-vZQY_nc8.js";import"./Popover-BIDVtb57.js";import"./Slider-C3pucIoE.js";import"./IndicatorLabel-DNRmLhG1.js";import"./index-DjY7dx8f.js";import"./RangeSlider-DmSCO4u8.js";import"./MonacoEditor-CCmO9Yxd.js";import"./Highlight-CBFUEUc4.js";import"./Highlight-Qmv9CNvH.js";import"./Form-Bcy91KMB.js";import"./SidebarLayout-DZJ4f7TW.js";import"./TopbarLayout-DAyzHkYU.js";import"./DataTable-B0OTM8aw.js";import"./Table.module-GN5HgtVw.js";import"./Table-fdjFLj9c.js";function t(o){const i={code:"code",h1:"h1",h3:"h3",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{Meta:!0,of:s}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h1,{id:"sidebarlayout",children:"SidebarLayout"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"SidebarLayout"}),` component is a vertical navigation menu typically positioned on the left side of the screen. It is
a responsive and interactive sidebar that can collapse or adapt based on user actions. This menu is commonly used to
enhance user experience in applications, especially when space is limited or a persistent navigation element is
required.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h3,{id:"basic-sidebarlayout",children:"Basic SidebarLayout"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"SidebarLayout"})," component consists of ",e.jsx(i.code,{children:"topMenus"}),", ",e.jsx(i.code,{children:"regularMenus"})," and ",e.jsx(i.code,{children:"bottomMenus"}),`. These menus contain an array
with `,e.jsx(i.code,{children:"label"})," for menu names, ",e.jsx(i.code,{children:"icon"})," for menu icons and ",e.jsx(i.code,{children:"id"})," for page links, corresponding to ",e.jsx(i.code,{children:"menuId"}),` to specify the
selected page link. You can use the `,e.jsx(i.code,{children:"renderer"})," prop to create a custom menu. Selecting a menu triggers the ",e.jsx(i.code,{children:"onClick"}),`
event. The `,e.jsx(i.code,{children:"appName"})," and ",e.jsx(i.code,{children:"appLogo"}),` props allow you to display the app's name and logo in top of the menu. Use the
`,e.jsx(i.code,{children:"smallScreenSize"})," and ",e.jsx(i.code,{children:"mediumScreenSize"}),` props to define the screen sizes where the menu becomes responsive and
collapsible into sidebar with icons or a hamburger menu. You can also add child components to display content for each
menu. The `,e.jsx(i.code,{children:"SidebarLayout"})," is positioned fixed."]}),e.jsx(a,{code:`
<SidebarLayout
  appName={'EZbiz Application'}
  appLogo={'./svg/psk_logo.svg'}
  topMenus={[
    {
      id: '/profile',
      label: "Firstname's Profile",
      onClick: handleClick,
      renderer: (menu, compact) => {
        if (compact) {
          return <MatSymbol name={'person'} />;
        } else {
          return (
            <ProfileLink title={'Firstname Lastname'} subtitle={'Admin'} />
          );
        }
      },
    },
  ]}
  menuId={menuId}
  regularMenus={[
    {
      label: 'Dashboard',
      icon: 'dashboard',
      id: '/dashboard',
      onClick: handleClick,
    },
    {
      label: 'Datasource',
      icon: 'database',
      id: '/datasource',
      onClick: handleClick,
    },
    {
      label: 'Schema',
      icon: 'schema',
      id: '/schema',
      onClick: handleClick,
    },
    {
      label: 'Search',
      icon: 'search',
      id: '/search',
      onClick: handleClick,
    },
    { label: 'CMS', icon: 'favorite', id: '/cms', onClick: handleClick },
    {
      label: 'Asset Management',
      icon: 'perm_media',
      id: '/dam',
      onClick: handleClick,
    },
  ]}
  bottomMenus={[
    {
      label: 'Policy',
      icon: 'policy',
      id: '/policy',
      onClick: handleClick,
    },
    { label: 'Logout', icon: 'logout', id: '/logout' },
  ]}
>
  <div
    style={{
      width: '100%',
      height: '400px',
      display: 'flex',
      margin: 'auto',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    Content
  </div>
</SidebarLayout>
 `,language:"tsx",dark:!0})]})]})}function ye(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(t,{...o})}):t(o)}export{ye as default};
