import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as l}from"./index-BrnU7xv7.js";import{ae as c,af as a}from"./index-DS4mN-Cx.js";import{A as o}from"./Accordion-7BL9lYKN.js";import{m as r,A as d}from"./Accordion.stories-2WW3-LAF.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./index-CikfRwdJ.js";function s(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",...l(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(c,{of:r}),`
`,i.jsxs("div",{className:"preview-panel",children:[i.jsx(e.h1,{id:"accordion-component",children:"Accordion Component"}),i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"Accordion"}),` is useful for organizing large amounts
of information on a single page, enhancing navigation, and minimizing the need
for scrolling.`]})]}),`
`,i.jsxs("div",{className:"preview-panel",children:[i.jsx(e.h3,{id:"construct-accordion",children:"Construct Accordion"}),i.jsxs(e.p,{children:["To build an accordion, start by creating an ",i.jsx(e.code,{children:"AccordionPanel"})," and adding multiple ",i.jsx(e.code,{children:"Accordion"}),` components. Use the
`,i.jsx(e.code,{children:"expanded"}),` prop with a boolean value to manage each Accordion's visibility, determining whether it remains open or
closed. Set the title and value with the `,i.jsx(e.code,{children:"title"})," and ",i.jsx(e.code,{children:"value"})," props. Insert the content inside the ",i.jsx(e.code,{children:"<Accordion>"})," tag."]}),i.jsx("div",{className:"flex-horizontal sb-unstyled",children:i.jsxs(d,{children:[i.jsx(o,{expanded:!0,title:"TITLE 1",value:"1",onChange:t=>console.log(t),children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i.jsx(o,{expanded:!1,title:"TITLE 2",value:"2",onChange:t=>console.log(t),children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i.jsx(o,{title:"TITLE 3",value:"3",onChange:t=>console.log(t),children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i.jsx(a,{code:`

  <AccordionPanel>
  <Accordion
    expanded={true}
    title={'TITLE 1'}
    value={'1'}
    onChange={(value) => setName(value)}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    expanded={false}
    title={'TITLE 2'}
    value={'2'}
    onChange={(value) => setName(value)}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    title={'TITLE 3'}
    value={'3'}
    onChange={(value) => setName(value)}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  </AccordionPanel>
`,language:"tsx",dark:!0})]}),`
`,i.jsxs("div",{className:"preview-panel",children:[i.jsx(e.h3,{id:"uncontrolled-accordion",children:"Uncontrolled Accordion"}),i.jsxs(e.p,{children:["Use the ",i.jsx(e.code,{children:"defaultExpanded"})," prop with a ",i.jsx(e.code,{children:"boolean"}),` value to set the initial state
of the `,i.jsx(e.code,{children:"Accordion"}),`. If this prop is not defined, the accordion will be closed
by default.`]}),i.jsx("div",{className:"flex-horizontal sb-unstyled",children:i.jsxs(d,{children:[i.jsx(o,{title:"TITLE 1",value:"1",defaultExpanded:!0,children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{title:"TITLE 2",value:"2",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{title:"TITLE 3",value:"3",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})})]})}),i.jsx(a,{code:`
<AccordionPanel>
  <Accordion
    title={'TITLE 1'}
    value={'1'}
    defaultExpanded={true}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    title={'TITLE 2'}
    value={'2'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    title={'TITLE 3'}
    value={'3'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
</AccordionPanel>
`,language:"tsx",dark:!0})]}),`
`,i.jsxs("div",{className:"preview-panel",children:[i.jsx(e.h3,{id:"color",children:"Color"}),i.jsxs(e.p,{children:["Use the ",i.jsx(e.code,{children:"color"}),` prop to apply different color variants for various content
types, with `,i.jsx(e.code,{children:"primary"})," as the default color."]}),i.jsx("div",{className:"flex-horizontal sb-unstyled",children:i.jsxs(d,{children:[i.jsx(o,{color:"info",title:"TITLE 1",value:"1",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{color:"error",title:"TITLE 2",value:"2",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{color:"success",title:"TITLE 3",value:"3",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})})]})}),i.jsx(a,{code:`
<AccordionPanel>
  <Accordion
    color={'info'}
    title={'TITLE 1'}
    value={'1'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    color={'error'}
    title={'TITLE 2'}
    value={'2'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    color={'success'}
    title={'TITLE 3'}
    value={'3'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
</AccordionPanel>
`,language:"tsx",dark:!0})]}),`
`,i.jsxs("div",{className:"preview-panel",children:[i.jsx(e.h3,{id:"hue",children:"Hue"}),i.jsxs(e.p,{children:["Customize the color tone of the ",i.jsx(e.code,{children:"Accordion"})," component with the ",i.jsx(e.code,{children:"hue"}),`
prop, allowing you to select specific shades or tones that match your design
requirements.`]}),i.jsx("br",{}),i.jsx("div",{className:"flex-horizontal sb-unstyled",children:i.jsxs(d,{children:[i.jsx(o,{hue:"lighter",title:"TITLE 1",value:"1",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{title:"TITLE 2",value:"2",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{hue:"darker",title:"TITLE 3",value:"3",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})})]})}),i.jsx(a,{code:`
<AccordionPanel>
  <Accordion
    hue={'lighter'}
    title={'TITLE 1'}
    value={'1'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    title={'TITLE 2'}
    value={'2'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    hue={'darker'}
    title={'TITLE 3'}
    value={'3'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
</AccordionPanel>
`,language:"tsx",dark:!0})]}),`
`,i.jsxs("div",{className:"preview-panel",children:[i.jsx(e.h3,{id:"ripple-effect",children:"Ripple Effect"}),i.jsxs(e.p,{children:["By default, the ",i.jsx(e.code,{children:"Accordion"}),` includes a ripple effect when clicked. You can
disable this by setting the `,i.jsx(e.code,{children:"noRippleEffect"})," prop to ",i.jsx(e.code,{children:"true"}),"."]}),i.jsx("div",{className:"flex-horizontal sb-unstyled",children:i.jsxs(d,{children:[i.jsx(o,{noRippleEffect:!0,title:"TITLE 1",value:"1",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{noRippleEffect:!0,title:"TITLE 2",value:"2",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})}),i.jsx(o,{title:"TITLE 3",value:"3",children:i.jsx(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`})})]})}),i.jsx(a,{code:`
<AccordionPanel>
  <Accordion
    noRippleEffect={true}
    title={'TITLE 1'}
    value={'1'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    noRippleEffect={true}
    title={'TITLE 2'}
    value={'2'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
  <Accordion
    title={'TITLE 3'}
    value={'3'}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Accordion>
</AccordionPanel>
`,language:"tsx",dark:!0})]})]})}function I(n={}){const{wrapper:e}={...l(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(s,{...n})}):s(n)}export{I as default};
