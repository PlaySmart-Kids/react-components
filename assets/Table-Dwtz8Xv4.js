import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as d,af as i}from"./index-DS4mN-Cx.js";import a from"./Table.stories-C-K8ALId.js";import{T as c}from"./Table-fdjFLj9c.js";import{R as l}from"./index-DJbli8uv.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./Table.module-GN5HgtVw.js";import"./DomUtil-DAqrhrKT.js";function n(o){const t={code:"code",h1:"h1",h3:"h3",p:"p",td:"td",tr:"tr",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{Meta:!0,of:a}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"table-component",children:"Table Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Table"}),` component is built as an HTML table for presenting data in rows and columns, but it offers unique styles
and additional features. Here's a demonstration of its usage.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-table",children:"Basic Table"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Table"})," component follows the same structure as an HTML table, using tags like ",e.jsx(t.code,{children:"thead"}),", ",e.jsx(t.code,{children:"tbody"}),", ",e.jsx(t.code,{children:"tfoot"}),", ",e.jsx(t.code,{children:"th"}),`,
`,e.jsx(t.code,{children:"tr"}),", and ",e.jsx(t.code,{children:"td"}),". It also includes props for customizing its appearance, such as ",e.jsx(t.code,{children:"color"})," and ",e.jsx(t.code,{children:"hue"}),` to adjust the table's
color and color tone, `,e.jsx(t.code,{children:"borderRadius"})," for rounded corners, ",e.jsx(t.code,{children:"showOutline"}),` to display the table borders (true/false),
`,e.jsx(t.code,{children:"showColumnDivider"})," to display the column dividers (true/false), ",e.jsx(t.code,{children:"shadowSize"})," and ",e.jsx(t.code,{children:"shadowColor"}),` to define the shadow's
size and color, and `,e.jsx(t.code,{children:"compact"})," to minimize padding in rows and columns (true/false). The width of the ",e.jsx(t.code,{children:"Table"}),` adjusts
according to its parent container's size. You can also customize the text alignment in each column using your own
style, with the default alignment of headers set to center and others to left.`]}),e.jsx("br",{}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsxs(c,{color:"success",hue:"lighter",borderRadius:10,showOutline:!0,showColumnDivider:!0,shadowSize:4,shadowColor:"secondary",compact:!0,children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{colSpan:1,children:"Heading 1"}),e.jsx("th",{colSpan:2,children:"Heading 2"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Topic 1"}),e.jsx("th",{children:"Topic 2"}),e.jsx("th",{children:"Topic 3"})]})]}),e.jsx("tbody",{children:l(1,3).map(r=>e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Data 1"}),e.jsx(t.td,{style:{textAlign:"center"},children:"Data 2"}),e.jsx(t.td,{style:{textAlign:"right"},children:"Data 3"})]},`row_${r}`))}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:1,children:"Foot 1"}),e.jsx("td",{colSpan:2,style:{textAlign:"right"},children:e.jsx(t.p,{children:"Total: xxxxx"})})]})})]})}),e.jsx(i,{code:`
<div>
  <Table
    color={'success'}
    hue={'lighter'}
    borderRadius={10}
    showOutline={true}
    showColumnDivider={true}
    shadowSize={4}
    shadowColor={'secondary'}
    compact={true}
  >
    <thead>
    <tr>
      <th colSpan={1}>Heading 1</th>
      <th colSpan={2}>Heading 2</th>
    </tr>
    <tr>
      <th>Topic 1</th>
      <th>Topic 2</th>
      <th>Topic 3</th>
    </tr>
    </thead>
    <tbody>
    {Ranges(1, 3).map((count) => (
      <tr key={\`row_\${count}\`}>
        <td>Data 1</td>
        <td style={{ textAlign: 'center' }}>Data 2</td>
        <td style={{ textAlign: 'right' }}>Data 3</td>
      </tr>
    ))}
    </tbody>
    <tfoot>
    <tr>
      <td colSpan={1}>Foot 1</td>
      <td colSpan={2} style={{ textAlign: 'right' }}>Total: xxxxx</td>
    </tr>
    </tfoot>
  </Table>
</div>
`,language:"tsx",dark:!0})]})]})}function z(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{z as default};
