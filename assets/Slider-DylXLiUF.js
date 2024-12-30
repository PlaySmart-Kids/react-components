import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as l}from"./index-BrnU7xv7.js";import{ae as o,af as n}from"./index-DS4mN-Cx.js";import d from"./Slider.stories-CNFEvvdC.js";import{S as t}from"./Slider-C3pucIoE.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./ShapeType-C4Gft0bY.js";import"./IndicatorLabel-DNRmLhG1.js";import"./index-DjY7dx8f.js";import"./Tooltip.module-D77Rh_bi.js";import"./DomUtil-DAqrhrKT.js";import"./index-DJbli8uv.js";function r(i){const s={code:"code",h1:"h1",h3:"h3",p:"p",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{Meta:!0,of:d}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h1,{id:"slider-component",children:"Slider Component"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Slider"}),` component allows users to select a value from a given range by sliding a handle along a track. It's
commonly used for adjusting settings like volume, brightness, or selecting a single numerical value. Here's a simple
overview of how to use it.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"basic-slider",children:"Basic Slider"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Slider"})," component comes in two sizes: small and normal (default). Use the ",e.jsx(s.code,{children:"orientation"}),` prop to configure the
slider's direction as either `,e.jsx(s.code,{children:"horizontal"})," (default) or ",e.jsx(s.code,{children:"vertical"}),`. You can configure the slider's minimum value with
the `,e.jsx(s.code,{children:"min"})," prop and the maximum value with the ",e.jsx(s.code,{children:"max"}),` prop, both of which support integers and decimals. The
`,e.jsx(s.code,{children:"value"}),`prop sets the initial value when the slider is rendered. As you move the
slider, the displayed value updates dynamically. Adjusting the slider triggers the`,e.jsx(s.code,{children:"onChange"})," event."]}),e.jsx("br",{}),e.jsxs("div",{className:"flex-horizontal sb-unstyled no-gap",children:[e.jsxs("div",{children:[e.jsx(t,{size:"small",min:0,max:20,value:12,onChange:a=>{console.log("Slider 1  >>> value = "+a.currentTarget.value)}}),e.jsx("br",{}),e.jsx(t,{size:"small",min:-10,max:10,value:-5,onChange:a=>{console.log("Slider 2  >>> value = "+a.currentTarget.value)}})]}),e.jsx(t,{min:0,max:20,value:12,onChange:a=>{console.log("Slider 3 >>> value = "+a.currentTarget.value)}}),e.jsx(t,{orientation:"vertical",min:0,max:20,value:12,onChange:a=>{console.log("Slider 4 >>> value = "+a.currentTarget.value)}})]}),e.jsx(n,{code:`
<Slider size={'small'}
        min={0}
        max={20}
        value={12}
        onChange={(event) => {
          console.log("Slider 1  >>> value = " + event.currentTarget.value);
        }}
/>
<Slider size={'small'}
        min={-10}
        max={10}
        value={-5}
        onChange={(event) => {
          console.log("Slider 2  >>> value = " + event.currentTarget.value);
        }}
/>
<Slider min={0}
        max={20}
        value={12}
        onChange={(event) => {
          console.log("Slider 3 >>> value = " + event.currentTarget.value);
        }}
/>
<Slider orientation={'vertical'}
        min={0}
        max={20}
        value={12}
        onChange={(event) => {
          console.log("Slider 4 >>> value = " + event.currentTarget.value);
        }}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"labelposition",children:"labelPosition"}),e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"labelPosition"})," to display the current value as a label with the options, ",e.jsx(s.code,{children:"start"})," and ",e.jsx(s.code,{children:"end"}),"."]}),e.jsx("br",{}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsxs("div",{style:{paddingInline:40},children:[e.jsx(t,{min:0,max:10,value:4,step:1,labelPosition:"start"}),e.jsx("br",{}),e.jsx(t,{min:0,max:10,value:7,step:1,labelPosition:"end"})]}),e.jsx(t,{orientation:"vertical",min:0,max:10,value:5,step:1,labelPosition:"start"}),e.jsx("br",{}),e.jsx(t,{orientation:"vertical",min:0,max:10,value:10,step:1,labelPosition:"end"})]}),e.jsx(n,{code:`
<Slider
    min={0}
    max={10}
    value={4}
    step={1}
    labelPosition={'start'}
/>
<Slider
    min={0}
    max={10}
    value={7}
    step={1}
    labelPosition={'end'}
/>
<Slider
    orientation={'vertical'}
    min={0}
    max={10}
    value={5}
    step={1}
    labelPosition={'start'}
/>
<Slider
    orientation={'vertical'}
    min={0}
    max={10}
    value={10}
    step={1}
    labelPosition={'end'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"minfractionmaxfraction-and-step",children:"minFraction/maxFraction and Step"}),e.jsxs(s.p,{children:["You can define the fractional part using the ",e.jsx(s.code,{children:"minFraction"})," and ",e.jsx(s.code,{children:"maxFraction"}),` props, with a default value of 0 (no
decimal point). The displayed value will be rounded when no decimal places are specified. The
`,e.jsx(s.code,{children:"step"})," prop specifies the interval between valid values. To display scaling on the slider, set the ",e.jsx(s.code,{children:"showSteps"}),` prop to
`,e.jsx(s.code,{children:"true"}),", and to ensure values snap precisely to the steps when the slider is moved, set ",e.jsx(s.code,{children:"snapToStep"})," to ",e.jsx(s.code,{children:"true"}),"."]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(t,{min:0,max:20,minFraction:0,maxFraction:0,value:5,step:2,showSteps:!0,snapToStep:!0,labelPosition:"start"}),e.jsx("br",{}),e.jsx(t,{min:0,max:20,minFraction:0,maxFraction:0,value:10.5,step:2,showSteps:!0,snapToStep:!1,labelPosition:"start"}),e.jsx("br",{}),e.jsx(t,{min:0,max:20,minFraction:0,maxFraction:1,value:10.5,step:2,showSteps:!0,snapToStep:!1,labelPosition:"start"})]}),e.jsx(n,{code:`
<Slider
    min={0}
    max={20}
    minFraction={0}
    maxFraction={0}
    value={5}
    step={2}
    showSteps={true}
    snapToStep={true}
    labelPosition={'start'}
/>
<Slider
    min={0}
    max={20}
    minFraction={0}
    maxFraction={0}
    value={10.5}
    step={2}
    showSteps={true}
    snapToStep={false}
    labelPosition={'start'}
/>
<Slider
    min={0}
    max={20}
    minFraction={0}
    maxFraction={1}
    value={10.5}
    step={2}
    showSteps={true}
    snapToStep={false}
    labelPosition={'start'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"color",children:"Color"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"color"})," prop allows you to apply different color variants to represent various ",e.jsx(s.code,{children:"Slider"})," types, with ",e.jsx(s.code,{children:"Primary"}),`
as the default.`]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(t,{color:"primary",min:0,max:20,value:5,step:2}),e.jsx(t,{color:"info",min:0,max:20,value:8,step:2}),e.jsx(t,{color:"success",min:0,max:20,value:14,step:2}),e.jsx(t,{color:"warning",min:0,max:20,value:10,step:2}),e.jsx(t,{color:"error",min:0,max:20,value:12,step:2}),e.jsx(t,{color:"secondary",min:0,max:20,value:7,step:2})]}),e.jsx(n,{code:`
<Slider color={'primary'}
        min={0}
        max={20}
        value={5}
        step={2}
/>
<Slider color={'info'}
        min={0}
        max={20}
        value={8}
        step={2}
/>
<Slider color={'success'}
        min={0}
        max={20}
        value={14}
        step={2}
/>
<Slider color={'warning'}
        min={0}
        max={20}
        value={10}
        step={2}
/>
<Slider color={'error'}
        min={0}
        max={20}
        value={12}
        step={2}
/>
<Slider color={'secondary'}
        min={0}
        max={20}
        value={7}
        step={2}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"hue",children:"Hue"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"hue"})," prop lets you adjust the color tone of the ",e.jsx(s.code,{children:"Slider"}),` component, allowing you to select shades that match your
design style.`]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(t,{hue:"lighter",min:0,max:20,value:11,step:2,showSteps:!0,snapToStep:!0}),e.jsx(t,{hue:"light",min:0,max:20,value:5,step:2,showSteps:!0,snapToStep:!0}),e.jsx(t,{hue:"main",min:0,max:20,value:8,step:2,showSteps:!0,snapToStep:!0}),e.jsx(t,{hue:"dark",min:0,max:20,value:14,step:2,showSteps:!0,snapToStep:!0}),e.jsx(t,{hue:"darker",min:0,max:20,value:10,step:2,showSteps:!0,snapToStep:!0})]}),e.jsx(n,{code:`
<Slider hue={'lighter'}
        min={0}
        max={20}
        value={11}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<Slider hue={'light'}
        min={0}
        max={20}
        value={5}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<Slider hue={'main'}
        min={0}
        max={20}
        value={8}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<Slider hue={'dark'}
        min={0}
        max={20}
        value={14}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<Slider hue={'darker'}
        min={0}
        max={20}
        value={10}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"icon-and-full-width",children:"Icon and Full Width"}),e.jsxs(s.p,{children:["To display icons at the ends of the slider, specify an icon name (from Material Icons/Symbols) in the ",e.jsx(s.code,{children:"iconStart"}),` and
`,e.jsx(s.code,{children:"iconEnd"}),` props. For customization, you can use your own images as elements in these props. You can set the
`,e.jsx(s.code,{children:"fullWidth"})," prop to ",e.jsx(s.code,{children:"true"})," to adjust the ",e.jsx(s.code,{children:"Slider"})," extend to full width, depending on the size of its parent container."]}),e.jsx("br",{}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(t,{color:"success",size:"small",min:0,max:20,value:14,step:2,showSteps:!0,snapToStep:!0,iconStart:"music_note",iconEnd:"music_cast"})}),e.jsx("br",{}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(t,{color:"success",min:0,max:20,value:14,step:2,showSteps:!0,fullWidth:!0,iconStart:"music_note",iconEnd:"music_cast"})}),e.jsx(n,{code:`
<Slider color={'success'}
        size={'small'}
        min={0}
        max={20}
        value={14}
        step={2}
        showSteps={true}
        snapToStep={true}
        iconStart={'music_note'}
        iconEnd={'music_cast'}
/>
<Slider color={'success'}
        min={0}
        max={20}
        value={14}
        step={2}
        showSteps={true}
        fullWidth={true}
        iconStart={'music_note'}
        iconEnd={'music_cast'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"shape",children:"Shape"}),e.jsxs(s.p,{children:["To adjust the slider handle shape, set the ",e.jsx(s.code,{children:"thumbShape"})," prop to ",e.jsx(s.code,{children:"circle"})," (default), ",e.jsx(s.code,{children:"rounded"})," or ",e.jsx(s.code,{children:"rectangle"}),"."]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(t,{min:0,max:20,value:5,step:2,showSteps:!0,snapToStep:!0}),e.jsx(t,{color:"success",thumbShape:"rounded",min:0,max:20,value:10,step:2,showSteps:!0,snapToStep:!0}),e.jsx(t,{color:"secondary",thumbShape:"rectangle",min:0,max:20,value:15,step:2,showSteps:!0,snapToStep:!0})]}),e.jsx(n,{code:`
<Slider min={0}
        max={20}
        value={5}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<Slider color={'success'}
        thumbShape={'rounded'}
        min={0}
        max={20}
        value={10}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<Slider color={'secondary'}
        thumbShape={'rectangle'}
        min={0}
        max={20}
        value={15}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
`,language:"tsx",dark:!0})]})]})}function C(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{C as default};
