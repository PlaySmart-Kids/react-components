import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as m,af as a}from"./index-5tMK-v8p.js";import n from"./SidebarLayout.stories-CJyreZoO.js";import"./index-DJO9vBfz.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./useTimeout-BASJc2V5.js";import"./index-DJbli8uv.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-CikfRwdJ.js";import"./DefaultMenu-0LnC5aUz.js";import"./DomUtil-Bdo5KM9z.js";import"./Checkbox-BUtrGLoq.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ColorUtil-b9QtJkc2.js";import"./useRipple-BbkXZzvg.js";import"./Switch-Cc-4px2g.js";import"./Button-Cm1yCUKV.js";import"./IconButton-6cAcpLD7.js";import"./RadioButton-BgQOW4iM.js";import"./AlertButton-CCPNF3gP.js";import"./ActionBar-BH2Q10LK.js";import"./AlertProvider-D5iTJuzk.js";import"./Accordion-86vzduSu.js";import"./Input-BlcUfh8C.js";import"./InputUtil-BONj-j-a.js";import"./DateInput-Dtn0PVrU.js";import"./TagInput-BnWmWiHK.js";import"./ColorChooser-yIgpImAb.js";import"./index.browser-vcSNLBTf.js";import"./TabPanel-B7mBcOuJ.js";import"./SizeWatcher-BDbsP5oN.js";import"./Tooltip-HoePrzzf.js";import"./Combobox-B0zNmVdd.js";import"./Timer-DCZNatUX.js";import"./Form-DRc6Jvp9.js";import"./Slick-CtfGjY_2.js";import"./SlickFixedSize-BSmCC2KH.js";import"./useResizeObserver-vZQY_nc8.js";import"./Popover-DPWhfdIS.js";import"./Slider-B3gjjnqV.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";import"./RangeSlider-Ce4tFgox.js";import"./MonacoEditor-CCmO9Yxd.js";import"./Highlight-CBFUEUc4.js";import"./Highlight-Qmv9CNvH.js";import"./MenuOption-CFxhanOA.js";function e(o){const t={h1:"h1",h3:"h3",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(m,{Meta:!0,of:n}),`
`,i.jsxs("div",{className:"preview-panel",children:[i.jsx(t.h1,{id:"sidebarlayout",children:"SidebarLayout"}),i.jsx(t.h3,{id:"example",children:"Example"}),i.jsx(a,{code:`
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
 `,language:"tsx",dark:!0})]})]})}function ai(o={}){const{wrapper:t}={...r(),...o.components};return t?i.jsx(t,{...o,children:i.jsx(e,{...o})}):e(o)}export{ai as default};
