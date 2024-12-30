import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as o}from"./index-BrnU7xv7.js";import{ae as a,af as s}from"./index-DS4mN-Cx.js";import i from"./DefaultMenu.stories-DnXUpN35.js";import{D as l}from"./DefaultMenu-CabspXGA.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./ColorUtil-B4gL3Pif.js";import"./DomUtil-DAqrhrKT.js";function t(r){const n={code:"code",h1:"h1",h3:"h3",p:"p",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{Meta:!0,of:i}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h1,{id:"defaultmenu",children:"DefaultMenu"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DefaultMenu"}),` component is a flexible horizontal navigation menu positioned at the top of the screen or
vertically on the side as a dropdown list triggered by a click, enabling users to navigate to other web pages.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(n.h3,{id:"basic-defaultmenu",children:"Basic DefaultMenu"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DefaultMenu"})," component requires specific props to create navigation menus: ",e.jsx(n.code,{children:"menus"}),`, an array containing
`,e.jsx(n.code,{children:"label"})," for menu names and ",e.jsx(n.code,{children:"href"})," for page links, and ",e.jsx(n.code,{children:"pathName"})," to set the selected page link. The ",e.jsx(n.code,{children:"color"}),` prop is
used to define the menu's color, with `,e.jsx(n.code,{children:"teal"})," set as the default. The ",e.jsx(n.code,{children:"DefaultMenu"})," has a fixed position."]}),e.jsx("div",{className:"grid-vertical sb-unstyled",children:e.jsx(l,{menus:[{label:"Menu 1",href:"/menu1"},{label:"Menu 2",href:"/menu2"},{label:"Menu 3",href:"/menu3"}],pathName:"/menu2",color:"royalblue"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{code:`
<DefaultMenu
  menus={[
    { label: 'Menu 1', href: '/menu1' },
    { label: 'Menu 2', href: '/menu2' },
    { label: 'Menu 3', href: '/menu3' },
  ]}
  pathName={'/menu2'}
  color={'royalblue'}
/>
`,language:"tsx",dark:!0})]})]})}function w(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{w as default};
