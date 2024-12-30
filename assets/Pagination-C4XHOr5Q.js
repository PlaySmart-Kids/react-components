import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as l,af as t}from"./index-DS4mN-Cx.js";import g from"./Pagination.stories-D4Sjvouk.js";import{P as i}from"./DataTable-B0OTM8aw.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./DefaultMenu-CabspXGA.js";import"./ColorUtil-B4gL3Pif.js";import"./DomUtil-DAqrhrKT.js";import"./Checkbox-DTNaYHYX.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-C4DXtBro.js";import"./Switch-BSBrATWg.js";import"./Button-HS4qhxue.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./Alert-PWQClZnu.js";import"./AlertProvider-CSxl7Bna.js";import"./Accordion-7BL9lYKN.js";import"./Input-BXqaDr0Y.js";import"./InputUtil-CfDwzwTJ.js";import"./PasswordInput-CwZj2So7.js";import"./DateInput-65P20iYT.js";import"./TagInput-Dk5jByq5.js";import"./ColorChooser-B5FUsHpn.js";import"./index.browser-vcSNLBTf.js";import"./TabPanel-Bk8HrNlW.js";import"./SizeWatcher-BDbsP5oN.js";import"./Tooltip-BaGgYEDs.js";import"./Tooltip.module-D77Rh_bi.js";import"./Combobox-utIsBDyR.js";import"./Timer-h-JiAl7z.js";import"./Grid-BE_VkPio.js";import"./Slick-B6TBkA8o.js";import"./SlickFixedSize-CAkWqw8N.js";import"./useResizeObserver-vZQY_nc8.js";import"./Popover-BIDVtb57.js";import"./Slider-C3pucIoE.js";import"./IndicatorLabel-DNRmLhG1.js";import"./index-DjY7dx8f.js";import"./RangeSlider-DmSCO4u8.js";import"./MonacoEditor-CCmO9Yxd.js";import"./Highlight-CBFUEUc4.js";import"./Highlight-Qmv9CNvH.js";import"./Form-Bcy91KMB.js";import"./SidebarLayout-DZJ4f7TW.js";import"./TopbarLayout-DAyzHkYU.js";import"./Table-fdjFLj9c.js";import"./Table.module-GN5HgtVw.js";function n(o){const a={code:"code",h1:"h1",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{Meta:!0,of:g}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h1,{id:"pagination-component",children:"Pagination Component"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"Pagination"}),` component includes navigation controls, such as 'Next' and 'Previous' options along with numbered
page links, allowing users to quickly navigate to specific content sections. Here's how you can use it in practice.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"basic-pagination",children:"Basic Pagination"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"Pagination"})," component comes in two variants: filled (default) and outlined. You can use the ",e.jsx(a.code,{children:"totalPages"}),` prop to
specify the total number of pages and the `,e.jsx(a.code,{children:"page"}),` prop to set the current page, which defaults to 1. To display pages,
the `,e.jsx(a.code,{children:"totalPages"})," and ",e.jsx(a.code,{children:"page"})," prop are required. Changing the page in the ",e.jsx(a.code,{children:"Pagination"})," triggers the ",e.jsx(a.code,{children:"onChange"})," event."]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(i,{variant:"filled",totalPages:10,page:1,onChange:r=>{console.log("Pagination  >>> current page = "+r)}}),e.jsx(i,{variant:"outlined",totalPages:10,page:1})]}),e.jsx(t,{code:`
<Pagination variant={'filled'}
            totalPages={10}
            page={1}
            onChange={(value) => {
              console.log("Pagination  >>> current page = " + value);
            }}
/>
<Pagination variant={'outlined'}
            totalPages={10}
            page={1}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"display-page-links",children:"Display Page Links"}),e.jsxs(a.p,{children:["To truncate page links in a ",e.jsx(a.code,{children:"Pagination"})," component, you can use the ",e.jsx(a.code,{children:"endRemaining"})," and ",e.jsx(a.code,{children:"siblingRemaining"}),` to limit the
number of visible page links when there are many pages. The `,e.jsx(a.code,{children:"siblingRemaining"}),` prop defines the number of pages
displayed around the current page, whereas `,e.jsx(a.code,{children:"endRemaining"})," specifies the number of visible pages at both ends."]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(i,{color:"success",totalPages:10,page:4}),e.jsx(i,{color:"success",totalPages:10,page:4,endRemaining:0}),e.jsx(i,{color:"success",totalPages:10,page:4,siblingRemaining:0}),e.jsx(i,{color:"success",totalPages:10,page:4,endRemaining:0,siblingRemaining:0}),e.jsx(i,{totalPages:20,page:10,endRemaining:2}),e.jsx(i,{totalPages:20,page:10,siblingRemaining:2}),e.jsx(i,{totalPages:20,page:10,endRemaining:3,siblingRemaining:2})]}),e.jsx(t,{code:`
<Pagination color={'success'}
            totalPages={10}
            page={4}
/>
<Pagination color={'success'}
            totalPages={10}
            page={4}
            endRemaining={0}
/>
<Pagination color={'success'}
            totalPages={10}
            page={4}
            siblingRemaining={0}
/>
<Pagination color={'success'}
            totalPages={10}
            page={4}
            endRemaining={0}
            siblingRemaining={0}
/>
<Pagination totalPages={20}
            page={10}
            endRemaining={2}
/>
<Pagination totalPages={20}
            page={10}
            siblingRemaining={2}
/>
<Pagination totalPages={20}
            page={10}
            endRemaining={3}
            siblingRemaining={2}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"size-and-shape",children:"Size and Shape"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"size"})," prop allows you to set the ",e.jsx(a.code,{children:"Pagination"}),` component's size to small, normal (default), or large.
Use the `,e.jsx(a.code,{children:"shape"})," prop to customize how the current page looks."]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(i,{totalPages:10,page:2,size:"small",shape:"rounded"}),e.jsx(i,{totalPages:10,page:2,size:"normal",shape:"circle"}),e.jsx(i,{totalPages:10,page:2,size:"large",shape:"rectangle"})]}),e.jsx(t,{code:`
<Pagination totalPages={10}
            page={2}
            size={'small'}
            shape={'rounded'}
/>
<Pagination totalPages={10}
            page={2}
            size={'normal'}
            shape={'circle'}
/>
<Pagination totalPages={10}
            page={2}
            size={'large'}
            shape={'rectangle'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"color",children:"color"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"color"})," prop allows you to apply different color variants to represent various ",e.jsx(a.code,{children:"Pagination"})," types, with ",e.jsx(a.code,{children:"Primary"}),`
as the default.`]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(i,{totalPages:10,page:2,color:"primary"}),e.jsx(i,{totalPages:10,page:2,color:"info"}),e.jsx(i,{totalPages:10,page:1,color:"success"}),e.jsx(i,{totalPages:10,page:3,color:"warning"}),e.jsx(i,{totalPages:10,page:2,color:"error"}),e.jsx(i,{totalPages:10,page:2,color:"secondary"})]}),e.jsx(t,{code:`
<Pagination totalPages={10}
            page={2}
            color={'primary'}
/>
<Pagination totalPages={10}
            page={2}
            color={'info'}
/>
<Pagination totalPages={10}
            page={1}
            color={'success'}
/>
<Pagination totalPages={10}
            page={3}
            color={'warning'}
/>
<Pagination totalPages={10}
            page={2}
            color={'error'}
/>
<Pagination totalPages={10}
            page={2}
            color={'secondary'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"hue",children:"Hue"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"hue"})," prop allows you to adjust the color tone of the ",e.jsx(a.code,{children:"Pagination"}),` component, so you can choose shades that fit
your design style.`]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(i,{totalPages:10,page:3,hue:"lightest"}),e.jsx(i,{totalPages:10,page:3,hue:"lighter"}),e.jsx(i,{totalPages:10,page:1,hue:"light"}),e.jsx(i,{totalPages:10,page:2,hue:"main"}),e.jsx(i,{totalPages:10,page:3,hue:"dark"}),e.jsx(i,{totalPages:10,page:2,hue:"darker"}),e.jsx(i,{totalPages:10,page:3,hue:"darkest"})]}),e.jsx(t,{code:`
<Pagination totalPages={10}
            page={3}
            hue={'lightest'}
/>
<Pagination totalPages={10}
            page={3}
            hue={'lighter'}
/>
<Pagination totalPages={10}
            page={1}
            hue={'light'}
/>
<Pagination totalPages={10}
            page={2}
            hue={'main'}
/>
<Pagination totalPages={10}
            page={3}
            hue={'dark'}
/>
<Pagination totalPages={10}
            page={2}
            hue={'darker'}
/>
<Pagination totalPages={10}
            page={3}
            hue={'darkest'}
/>
`,language:"tsx",dark:!0})]})]})}function be(o={}){const{wrapper:a}={...s(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(n,{...o})}):n(o)}export{be as default};
