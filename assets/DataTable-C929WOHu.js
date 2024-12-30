import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as l}from"./index-BrnU7xv7.js";import{ae as u,af as j}from"./index-DS4mN-Cx.js";import g from"./DataTable.stories-DEXIBUyE.js";import{r as i}from"./index-DJO9vBfz.js";import{D as f}from"./DataTable-B0OTM8aw.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./Table.module-GN5HgtVw.js";import"./Combobox-utIsBDyR.js";import"./InputUtil-CfDwzwTJ.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./Checkbox-DTNaYHYX.js";import"./Switch-BSBrATWg.js";import"./Tooltip-BaGgYEDs.js";import"./Tooltip.module-D77Rh_bi.js";import"./DomUtil-DAqrhrKT.js";import"./useResizeObserver-vZQY_nc8.js";function b(){const o=[{label:"Name",key:"name",className:"header"},{label:"Notes",key:"notes",className:"header"},{label:"Date created",key:"dateCreated",className:"header"},{label:"Status",key:"status",className:"header"}],a=[{key:"name",className:"data_left"},{key:"notes",className:"data_left"},{key:"dateCreated",className:"data_center"},{key:"status",className:"data_right"}],[h,m]=i.useState(0),[r,p]=i.useState(0),[s,x]=i.useState(15),n=[];for(let t=1;t<=25;t++)n.push({name:"Name "+t,notes:"Note "+t,dateCreated:"06/01/2024",status:"Status"});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
            .header {
              width: 25%;
              text-align: center;
            }
            .data_left {
              width: 25%;
              text-align: left;
            }
            .data_right {
              width: 25%;
              text-align: right;
            }
            .data_center {
              width: 25%;
              text-align: center;
            }
        `}),e.jsx(f,{height:"calc(65vh)",hasCheckbox:!0,color:"primary",hue:"lighter",borderRadius:10,showOutline:!0,showColumnDivider:!0,shadowSize:4,shadowColor:"secondary",compact:!0,headerFields:o,dataFields:a,rawData:n.filter((t,d)=>d>=r&&d<r+s),paginationInfo:{pageSize:s,totalPages:Math.ceil(n.length/s),page:h,pageSizeOptions:[15,20,30],totalRecords:n.length},onChangePagination:t=>{m(t.page),p(t.page*t.pageSize),x(t.pageSize)}})]})}function c(o){const a={code:"code",h1:"h1",h3:"h3",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{Meta:!0,of:g}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h1,{id:"datatable-component",children:"DataTable Component"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"DataTable"}),` component is a table element that offers advanced features for displaying data in rows and columns,
including efficient management of large datasets through pagination and dynamic loading. Here's a sample
implementation.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"basic-datatable",children:"Basic DataTable"}),e.jsxs(a.p,{children:["To populate a ",e.jsx(a.code,{children:"DataTable"})," with headers and data, the ",e.jsx(a.code,{children:"headerFields"}),", ",e.jsx(a.code,{children:"dataFields"})," and ",e.jsx(a.code,{children:"rawData"}),` props are required.
The
`,e.jsx(a.code,{children:"headerFields"})," is an array of header objects, each containing ",e.jsx(a.code,{children:"label"})," for the header title, ",e.jsx(a.code,{children:"key"}),` to uniquely identify
the column, and `,e.jsx(a.code,{children:"classname"})," for column styling. The ",e.jsx(a.code,{children:"dataFields"}),` is an array of data field objects, each containing a
`,e.jsx(a.code,{children:"key"})," that must match the corresponding ",e.jsx(a.code,{children:"key"})," in ",e.jsx(a.code,{children:"headerFields"})," and ",e.jsx(a.code,{children:"classname"}),` for column-specific styling. The
`,e.jsx(a.code,{children:"rawData"})," is an array of data objects representing the table's contents."]}),e.jsxs(a.p,{children:["It also features a ",e.jsx(a.code,{children:"Checkbox"})," component for data selection and a ",e.jsx(a.code,{children:"pagination"}),` component to display data in separate
pages, controlled by the `,e.jsx(a.code,{children:"hasCheckbox"})," and ",e.jsx(a.code,{children:"hasPagination"})," props (true/false). The ",e.jsx(a.code,{children:"paginationInfo"}),` prop is an object
containing the information such as `,e.jsx(a.code,{children:"pageSize"}),", ",e.jsx(a.code,{children:"totalPages"}),", ",e.jsx(a.code,{children:"page"}),", ",e.jsx(a.code,{children:"pageSizeOptions"}),", ",e.jsx(a.code,{children:"totalRecords"}),`, and
`,e.jsx(a.code,{children:"numberOfPages"}),". Navigating between pages triggers the ",e.jsx(a.code,{children:"onChangePagination"})," event."]}),e.jsxs(a.p,{children:["Additional props are available for customizing its appearance, such as ",e.jsx(a.code,{children:"color"})," and ",e.jsx(a.code,{children:"hue"}),` to adjust
the table's color and color tone, `,e.jsx(a.code,{children:"borderRadius"})," for rounded corners, ",e.jsx(a.code,{children:"showOutline"}),` to toggle the table borders
(true/false), `,e.jsx(a.code,{children:"showColumnDivider"})," to toggle the visibility of column dividers (true/false), ",e.jsx(a.code,{children:"shadowSize"}),` and
`,e.jsx(a.code,{children:"shadowColor"})," to define the shadow's size and color, and ",e.jsx(a.code,{children:"compact"}),` to minimize padding in rows and columns
(true/false). The width of the `,e.jsx(a.code,{children:"DataTable"})," automatically adjusts to fit the size of its parent container."]}),e.jsx("br",{}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(b,{})}),e.jsx(j,{code:`
<div>
  xxx
</div>
`,language:"tsx",dark:!0})]})]})}function oe(o={}){const{wrapper:a}={...l(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(c,{...o})}):c(o)}export{oe as default};
