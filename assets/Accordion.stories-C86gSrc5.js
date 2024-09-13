import{b as a,M as g,d as r}from"./index-DVow2ixS.js";import{A as n}from"./Accordion-CS5EBwsm.js";import{A as d}from"./AccordionPanel-KU5pkwSL.js";import"./DefaultThemeProvider-DWbcdqGt.js";import{j as o,a as i,F as b}from"./Divider-DdokZ4G_.js";import{useMDXComponents as m}from"./index-BnapxFVb.js";import"./iframe-DCMQFdKf.js";import"../sb-preview/runtime.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-DKEMF1mc.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-V2LljsIL.js";function u(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},m(),t.components);return o(b,{children:[i(g,{title:"clients/ui/accordion/Accordion"}),`
`,o("div",{className:"preview-panel",children:[i(e.h1,{id:"accordion-component",children:"Accordion Component"}),o(e.p,{children:["The ",i(e.code,{children:"Accordion"})," is useful for organizing large amounts of information on a single page, enhancing navigation, and minimizing the need for scrolling."]})]}),`
`,i(r,{name:"Controlled Accordion",children:o("div",{className:"preview-panel",children:[o(e.h4,{id:"construct-accordion",children:["Construct Accordion",i("br",{}),i("br",{})]}),o(e.p,{children:["To build an accordion, start by creating an ",i(e.code,{children:"AccordionPanel"})," and adding multiple ",i(e.code,{children:"Accordion"})," components. Use the ",i(e.code,{children:"expanded"})," prop with a boolean value to manage each Accordion's visibility, determining whether it remains open or closed. Set the title and value with the ",i(e.code,{children:"title"})," and ",i(e.code,{children:"value"})," props. Insert the content inside the ",i(e.code,{children:"<Accordion>"})," tag."]}),i("br",{}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{expanded:!0,title:"TITLE 1",value:"1",onChange:c=>console.log(c),children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{expanded:!1,title:"TITLE 2",value:"2",onChange:c=>console.log(c),children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 3",value:"3",onChange:c=>console.log(c),children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]})}),`
`,i(r,{name:"Uncontrolled Accordion",children:o("div",{className:"preview-panel",children:[o(e.h4,{id:"uncontrolled-accordion",children:["Uncontrolled Accordion",i("br",{}),i("br",{})]}),o(e.p,{children:["Use the ",i(e.code,{children:"defaultExpanded"})," prop with a ",i(e.code,{children:"boolean"})," value to set the initial state of the ",i(e.code,{children:"Accordion"}),". If this prop is not defined, the accordion will be closed by default."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{title:"TITLE 1",value:"1",defaultExpanded:!0,children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 2",value:"2",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 3",value:"3",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]})}),`
`,i(r,{name:"Color",children:o("div",{className:"preview-panel",children:[o(e.h4,{id:"color",children:["Color",i("br",{}),i("br",{})]}),o(e.p,{children:["Use the ",i(e.code,{children:"color"})," prop to apply different color variants for various content types, with ",i(e.code,{children:"primary"})," as the default color."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{color:"info",title:"TITLE 1",value:"1",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{color:"error",title:"TITLE 2",value:"2",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{color:"success",title:"TITLE 3",value:"3",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]})}),`
`,i(r,{name:"Hue",children:o("div",{className:"preview-panel",children:[o(e.h4,{id:"hue",children:["Hue",i("br",{}),i("br",{})]}),o(e.p,{children:["Customize the color tone of the ",i(e.code,{children:"Accordion"})," component with the ",i(e.code,{children:"hue"})," prop, allowing you to select specific shades or tones that match your design requirements."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{hue:"lighter",title:"TITLE 1",value:"1",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 2",value:"2",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{hue:"darker",title:"TITLE 3",value:"3",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]})}),`
`,i(r,{name:"Ripple Effect",children:o("div",{className:"preview-panel",children:[o(e.h4,{id:"ripple-effect",children:["Ripple Effect",i("br",{}),i("br",{})]}),o(e.p,{children:["By default, the ",i(e.code,{children:"Accordion"})," includes a ripple effect when clicked. You can disable this by setting the ",i(e.code,{children:"noRippleEffect"})," prop to ",i(e.code,{children:"true"}),"."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{noRippleEffect:!0,title:"TITLE 1",value:"1",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{noRippleEffect:!0,title:"TITLE 2",value:"2",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 3",value:"3",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]})})]})}function x(t={}){const{wrapper:e}=Object.assign({},m(),t.components);return e?i(e,{...t,children:i(u,{...t})}):u(t)}const s=()=>o("div",{className:"preview-panel",children:[o("h4",{id:"construct-accordion",children:["Construct Accordion",i("br",{}),i("br",{})]}),o("p",{children:["To build an accordion, start by creating an ",i("code",{children:"AccordionPanel"})," and adding multiple ",i("code",{children:"Accordion"})," components. Use the ",i("code",{children:"expanded"})," prop with a boolean value to manage each Accordion's visibility, determining whether it remains open or closed. Set the title and value with the ",i("code",{children:"title"})," and ",i("code",{children:"value"})," props. Insert the content inside the ",i("code",{children:"<Accordion>"})," tag."]}),i("br",{}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{expanded:!0,title:"TITLE 1",value:"1",onChange:t=>console.log(t),children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{expanded:!1,title:"TITLE 2",value:"2",onChange:t=>console.log(t),children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 3",value:"3",onChange:t=>console.log(t),children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]});s.storyName="Controlled Accordion";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="construct-accordion">{"Construct Accordion"}<br /><br /></h4><p>{"To build an accordion, start by creating an "}<code>{"AccordionPanel"}</code>{" and adding multiple "}<code>{"Accordion"}</code>{" components. Use the "}<code>{"expanded"}</code>{" prop with a boolean value to manage each Accordion's visibility, determining whether it remains open or closed. Set the title and value with the "}<code>{"title"}</code>{" and "}<code>{"value"}</code>{" props. Insert the content inside the "}<code>{"<Accordion>"}</code>{" tag."}</p><br /><br /><div className={"flex-horizontal"}><AccordionPanel><Accordion expanded={true} title={"TITLE 1"} value={"1"} onChange={value => console.log(value)}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion expanded={false} title={"TITLE 2"} value={"2"} onChange={value => console.log(value)}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion title={"TITLE 3"} value={"3"} onChange={value => console.log(value)}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion></AccordionPanel></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>o("div",{className:"preview-panel",children:[o("h4",{id:"uncontrolled-accordion",children:["Uncontrolled Accordion",i("br",{}),i("br",{})]}),o("p",{children:["Use the ",i("code",{children:"defaultExpanded"})," prop with a ",i("code",{children:"boolean"})," value to set the initial state of the ",i("code",{children:"Accordion"}),". If this prop is not defined, the accordion will be closed by default."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{title:"TITLE 1",value:"1",defaultExpanded:!0,children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 2",value:"2",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 3",value:"3",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]});p.storyName="Uncontrolled Accordion";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="uncontrolled-accordion">{"Uncontrolled Accordion"}<br /><br /></h4><p>{"Use the "}<code>{"defaultExpanded"}</code>{" prop with a "}<code>{"boolean"}</code>{" value to set the initial state of the "}<code>{"Accordion"}</code>{". If this prop is not defined, the accordion will be closed by default."}</p><br /><div className={"flex-horizontal"}><AccordionPanel><Accordion title={"TITLE 1"} value={"1"} defaultExpanded={true}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion title={"TITLE 2"} value={"2"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion title={"TITLE 3"} value={"3"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion></AccordionPanel></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const q=()=>o("div",{className:"preview-panel",children:[o("h4",{id:"color",children:["Color",i("br",{}),i("br",{})]}),o("p",{children:["Use the ",i("code",{children:"color"})," prop to apply different color variants for various content types, with ",i("code",{children:"primary"})," as the default color."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{color:"info",title:"TITLE 1",value:"1",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{color:"error",title:"TITLE 2",value:"2",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{color:"success",title:"TITLE 3",value:"3",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]});q.storyName="Color";q.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="color">{"Color"}<br /><br /></h4><p>{"Use the "}<code>{"color"}</code>{" prop to apply different color variants for various content types, with "}<code>{"primary"}</code>{" as the default color."}</p><br /><div className={"flex-horizontal"}><AccordionPanel><Accordion color={"info"} title={"TITLE 1"} value={"1"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion color={"error"} title={"TITLE 2"} value={"2"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion color={"success"} title={"TITLE 3"} value={"3"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion></AccordionPanel></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const h=()=>o("div",{className:"preview-panel",children:[o("h4",{id:"hue",children:["Hue",i("br",{}),i("br",{})]}),o("p",{children:["Customize the color tone of the ",i("code",{children:"Accordion"})," component with the ",i("code",{children:"hue"})," prop, allowing you to select specific shades or tones that match your design requirements."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{hue:"lighter",title:"TITLE 1",value:"1",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 2",value:"2",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{hue:"darker",title:"TITLE 3",value:"3",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]});h.storyName="Hue";h.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="hue">{"Hue"}<br /><br /></h4><p>{"Customize the color tone of the "}<code>{"Accordion"}</code>{" component with the "}<code>{"hue"}</code>{" prop, allowing you to select specific shades or tones that match your design requirements."}</p><br /><div className={"flex-horizontal"}><AccordionPanel><Accordion hue={"lighter"} title={"TITLE 1"} value={"1"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion title={"TITLE 2"} value={"2"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion hue={"darker"} title={"TITLE 3"} value={"3"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion></AccordionPanel></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const v=()=>o("div",{className:"preview-panel",children:[o("h4",{id:"ripple-effect",children:["Ripple Effect",i("br",{}),i("br",{})]}),o("p",{children:["By default, the ",i("code",{children:"Accordion"})," includes a ripple effect when clicked. You can disable this by setting the ",i("code",{children:"noRippleEffect"})," prop to ",i("code",{children:"true"}),"."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(d,{children:[i(n,{noRippleEffect:!0,title:"TITLE 1",value:"1",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{noRippleEffect:!0,title:"TITLE 2",value:"2",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(n,{title:"TITLE 3",value:"3",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(a,{code:`
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
`,language:"tsx",dark:!0})]});v.storyName="Ripple Effect";v.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="ripple-effect">{"Ripple Effect"}<br /><br /></h4><p>{"By default, the "}<code>{"Accordion"}</code>{" includes a ripple effect when clicked. You can disable this by setting the "}<code>{"noRippleEffect"}</code>{" prop to "}<code>{"true"}</code>{"."}</p><br /><div className={"flex-horizontal"}><AccordionPanel><Accordion noRippleEffect={true} title={"TITLE 1"} value={"1"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion noRippleEffect={true} title={"TITLE 2"} value={"2"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion title={"TITLE 3"} value={"3"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion></AccordionPanel></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const l={title:"clients/ui/accordion/Accordion",tags:["stories-mdx"],includeStories:["controlledAccordion","uncontrolledAccordion","color","hue","rippleEffect"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:x};const j=["controlledAccordion","uncontrolledAccordion","color","hue","rippleEffect"];export{j as __namedExportsOrder,q as color,s as controlledAccordion,l as default,h as hue,v as rippleEffect,p as uncontrolledAccordion};
