import{b as d,M as q,d as l}from"./index-D8Bq1aUh.js";import{A as a}from"./Accordion-Dsqn61Yp.js";import{A as c}from"./AccordionPanel-CjKad_mn.js";import{j as o,a as i,F as v}from"./DefaultThemeProvider-DbvuuPiG.js";import{useMDXComponents as m}from"./index-BnapxFVb.js";import"./iframe-CIX_G1sr.js";import"../sb-preview/runtime.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import"./index-DOJJSfO9.js";import"./useRipple-CLSESEbx.js";function u(n){const e=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4"},m(),n.components);return o(v,{children:[i(q,{title:"clients/ui/accordion/Accordion"}),`
`,o("div",{className:"preview-panel",children:[i(e.h1,{id:"accordion-component",children:"Accordion Component"}),o(e.p,{children:["The ",i(e.code,{children:"Accordion"})," are useful for managing large amounts of information on a single page, improving navigation, and reducing the need for scrolling."]})]}),`
`,i(l,{name:"Controlled Accordion",children:o("div",{className:"preview-panel",children:[o(e.h4,{id:"construct-accordion",children:["Construct Accordion",i("br",{}),i("br",{})]}),o(e.p,{children:["Create ",i(e.code,{children:"AccordionPanel"})," and then add multiple ",i(e.code,{children:"Accordion"})," into the panel. Control the visibility of the ",i(e.code,{children:"Accordion"})," by assign boolean value to ",i(e.code,{children:"expand"})," attribute."]}),i("br",{}),i("br",{}),i("div",{className:"flex-horizontal",children:o(c,{children:[i(a,{expanded:!0,title:"TITLE 1",value:"1",onChange:t=>setName(t),children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{expanded:!1,title:"TITLE 2",value:"2",onChange:t=>setName(t),children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{expanded:!1,title:"TITLE 3",value:"3",onChange:t=>setName(t),children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(d,{code:`
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
    expanded={false}
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
`,i(l,{name:"Uncontrolled Accordion",children:o("div",{className:"preview-panel",children:[o(e.h4,{id:"uncontrolled-accordion",children:["Uncontrolled Accordion",i("br",{}),i("br",{})]}),o(e.p,{children:["Using ",i(e.code,{children:"defaultExpanded"})," to setup initial behavior of Accordion."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(c,{children:[i(a,{title:"TITLE 1",value:"1",defaultExpanded:!0,children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{title:"TITLE 2",value:"2",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{title:"TITLE 3",value:"3",children:i(e.p,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(d,{code:`
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
`,language:"tsx",dark:!0})]})})]})}function g(n={}){const{wrapper:e}=Object.assign({},m(),n.components);return e?i(e,{...n,children:i(u,{...n})}):u(n)}const s=()=>o("div",{className:"preview-panel",children:[o("h4",{id:"construct-accordion",children:["Construct Accordion",i("br",{}),i("br",{})]}),o("p",{children:["Create ",i("code",{children:"AccordionPanel"})," and then add multiple ",i("code",{children:"Accordion"})," into the panel. Control the visibility of the ",i("code",{children:"Accordion"})," by assign boolean value to ",i("code",{children:"expand"})," attribute."]}),i("br",{}),i("br",{}),i("div",{className:"flex-horizontal",children:o(c,{children:[i(a,{expanded:!0,title:"TITLE 1",value:"1",onChange:n=>setName(n),children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{expanded:!1,title:"TITLE 2",value:"2",onChange:n=>setName(n),children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{expanded:!1,title:"TITLE 3",value:"3",onChange:n=>setName(n),children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(d,{code:`
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
    expanded={false}
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
`,language:"tsx",dark:!0})]});s.storyName="Controlled Accordion";s.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="construct-accordion">{"Construct Accordion"}<br /><br /></h4><p>{"Create "}<code>{"AccordionPanel"}</code>{" and then add multiple "}<code>{"Accordion"}</code>{" into the panel. Control the visibility of the "}<code>{"Accordion"}</code>{" by assign boolean value to "}<code>{"expand"}</code>{" attribute."}</p><br /><br /><div className={"flex-horizontal"}><AccordionPanel><Accordion expanded={true} title={"TITLE 1"} value={"1"} onChange={value => setName(value)}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion expanded={false} title={"TITLE 2"} value={"2"} onChange={value => setName(value)}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion expanded={false} title={"TITLE 3"} value={"3"} onChange={value => setName(value)}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion></AccordionPanel></div><Source code={\`
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
    expanded={false}
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
\`} language={"tsx"} dark={true} /></div>`}};const p=()=>o("div",{className:"preview-panel",children:[o("h4",{id:"uncontrolled-accordion",children:["Uncontrolled Accordion",i("br",{}),i("br",{})]}),o("p",{children:["Using ",i("code",{children:"defaultExpanded"})," to setup initial behavior of Accordion."]}),i("br",{}),i("div",{className:"flex-horizontal",children:o(c,{children:[i(a,{title:"TITLE 1",value:"1",defaultExpanded:!0,children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{title:"TITLE 2",value:"2",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})}),i(a,{title:"TITLE 3",value:"3",children:i("p",{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`})})]})}),i(d,{code:`
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
`,language:"tsx",dark:!0})]});p.storyName="Uncontrolled Accordion";p.parameters={storySource:{source:`<div className={"preview-panel"}><h4 id="uncontrolled-accordion">{"Uncontrolled Accordion"}<br /><br /></h4><p>{"Using "}<code>{"defaultExpanded"}</code>{" to setup initial behavior of Accordion."}</p><br /><div className={"flex-horizontal"}><AccordionPanel><Accordion title={"TITLE 1"} value={"1"} defaultExpanded={true}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion title={"TITLE 2"} value={"2"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion><Accordion title={"TITLE 3"} value={"3"}><p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\\naliquip ex ea commodo consequat."}</p></Accordion></AccordionPanel></div><Source code={\`
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
\`} language={"tsx"} dark={true} /></div>`}};const r={title:"clients/ui/accordion/Accordion",tags:["stories-mdx"],includeStories:["controlledAccordion","uncontrolledAccordion"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:g};const S=["controlledAccordion","uncontrolledAccordion"];export{S as __namedExportsOrder,s as controlledAccordion,r as default,p as uncontrolledAccordion};
