import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as r,af as c}from"./index-DS4mN-Cx.js";import l from"./TabPanel.stories-D2WPZkYN.js";import{T as d,a}from"./TabPanel-Bk8HrNlW.js";import{r as h}from"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./SizeWatcher-BDbsP5oN.js";function p(){const[n,t]=h.useState(1);return e.jsxs("div",{style:{width:"100%"},children:[e.jsxs(d,{color:"info",justifyContent:"space-evenly",value:n,onChange:o=>{t(o),console.log("TabPanel  >>> TAB "+o)},children:[e.jsx(a,{value:1,children:" Section 1 "}),e.jsx(a,{value:2,children:" Section 2 "}),e.jsx(a,{value:3,children:" Section 3 "}),e.jsx(a,{value:4,children:" Section 4 "})]}),e.jsxs("div",{style:{display:"flex",height:"300px",borderRadius:"3px",backgroundColor:"#d7ecff"},children:[n===1&&e.jsx("div",{style:{margin:"auto"},children:"Display content for Section 1"}),n===2&&e.jsx("div",{style:{margin:"auto"},children:"Display content for Section 2"}),n===3&&e.jsx("div",{style:{margin:"auto"},children:"Display content for Section 3"}),n===4&&e.jsx("div",{style:{margin:"auto"},children:"Display content for Section 4"})]})]})}function i(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{Meta:!0,of:l}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"tabpanel-component",children:"TabPanel Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TabPanel"}),` component is used to organize and display content in separate sections or panels, where each section
can be accessed by clicking on a tab. Tabs help manage space efficiently and improve user experience by grouping
related content. Here's a basic example of how to create a tab.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-tabpanel",children:"Basic TabPanel"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TabPanel"})," component features the ",e.jsx(t.code,{children:"color"})," prop to apply different color variants to represent various ",e.jsx(t.code,{children:"TabPanel"}),`
types, with `,e.jsx(t.code,{children:"Primary"}),` as the default setting. Use the
`,e.jsx(t.code,{children:"justifyContent"})," prop to arrange the position of tab headers with options of ",e.jsx(t.code,{children:"start"})," (default), ",e.jsx(t.code,{children:"center"}),", ",e.jsx(t.code,{children:"end"}),` or
`,e.jsx(t.code,{children:"space-evenly"}),`. You can add child components to display content for each section, linked to the selected tab headers,
giving you control over the tab's content and behavior. Use the `,e.jsx(t.code,{children:"value"}),` prop to specify the initially selected tab.
Selecting a tab header dynamically updates the selected tab's value and triggers the `,e.jsx(t.code,{children:"onChange"}),` event. The width of
the `,e.jsx(t.code,{children:"TabPanel"})," is determined by the size of its parent container."]}),e.jsx("div",{className:"grid-vertical sb-unstyled",children:e.jsx(p,{})}),e.jsx(c,{code:`
const [tab, setTab] = useState(1);
return (
  <div style={{ width: '100%' }}>
    <TabPanel
      color={'info'}
      justifyContent={'space-evenly'}
      value={tab}
      onChange={(value) => {
        setTab(value);
        console.log('TabPanel  >>> TAB ' + value);
      }}
    >
      <Tab value={1}> TAB 1 </Tab>
      <Tab value={2}> TAB 2 </Tab>
      <Tab value={3}> TAB 3 </Tab>
      <Tab value={4}> TAB 4 </Tab>
    </TabPanel>
    <div
      style={{
        display: 'flex',
        height: '300px',
        borderRadius: '3px',
        backgroundColor: '#d7ecff',
      }}
    >
      {tab === 1 && <div style={{ margin: 'auto' }}>Display content for TAB 1</div>}
      {tab === 2 && <div style={{ margin: 'auto' }}>Display content for TAB 2</div>}
      {tab === 3 && <div style={{ margin: 'auto' }}>Display content for TAB 3</div>}
      {tab === 4 && <div style={{ margin: 'auto' }}>Display content for TAB 4</div>}
    </div>
  </div>
);
`,language:"tsx",dark:!0})]})]})}function D(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{D as default};
