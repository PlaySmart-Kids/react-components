import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as l}from"./index-BrnU7xv7.js";import{ae as o,af as t}from"./index-DS4mN-Cx.js";import d from"./RangeSlider.stories-C_LcaheJ.js";import{R as a}from"./RangeSlider-DmSCO4u8.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./ShapeType-C4Gft0bY.js";import"./IndicatorLabel-DNRmLhG1.js";import"./index-DjY7dx8f.js";import"./Tooltip.module-D77Rh_bi.js";import"./DomUtil-DAqrhrKT.js";import"./index-DJbli8uv.js";function i(r){const s={code:"code",h1:"h1",h3:"h3",p:"p",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{Meta:!0,of:d}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h1,{id:"rangeslider-component",children:"RangeSlider Component"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"RangeSlider"}),` component allows users to select a range of values by adjusting two slider handles, typically for
specifying a minimum and maximum value. It is commonly used in applications where filtering data or specifying a range
is needed, such as price filtering, date ranges, or other settings within a specific range. Here's how it works.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"basic-rangeslider",children:"Basic RangeSlider"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"RangeSlider"})," component comes in two sizes: small and normal (default). Use the ",e.jsx(s.code,{children:"orientation"}),` prop to set the
slider's direction as either `,e.jsx(s.code,{children:"horizontal"})," (default) or ",e.jsx(s.code,{children:"vertical"}),`. You can set the ranged slider's minimum value
using the `,e.jsx(s.code,{children:"min"})," prop and the maximum value using the ",e.jsx(s.code,{children:"max"}),` prop, both of which can be integers and decimals. The
`,e.jsx(s.code,{children:"values"}),` prop sets the initial range and dynamically updates displayed ranged values for both handles as they are
adjusted and also triggering the `,e.jsx(s.code,{children:"onChange"})," event."]}),e.jsx("br",{}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsxs("div",{style:{paddingInline:20},children:[e.jsx(a,{size:"small",min:0,max:20,values:[0,10],onChange:n=>{console.log("Slider 1  >>> value = "+n.currentTarget.value)}}),e.jsx("br",{}),e.jsx(a,{size:"small",min:-20,max:20,values:[-5,10],onChange:n=>{console.log("Slider 2  >>> value = "+n.currentTarget.value)}})]}),e.jsx(a,{min:0,max:20,values:[0,12],onChange:n=>{console.log("Slider 3 >>> value = "+n.currentTarget.value)}}),e.jsx(a,{orientation:"vertical",min:0,max:20,values:[0,12],onChange:n=>{console.log("Slider 4 >>> value = "+n.currentTarget.value)}})]}),e.jsx(t,{code:`
<RangeSlider size={'small'}
        min={0}
        max={20}
        values={[0, 10]}
        onChange={(event) => {
          console.log("Slider 1  >>> value = " + event.currentTarget.value);
        }}
/>
<RangeSlider size={'small'}
        min={-20}
        max={20}
        values={[-5, 10]}
        onChange={(event) => {
          console.log("Slider 2  >>> value = " + event.currentTarget.value);
        }}
/>
<RangeSlider min={0}
        max={20}
        values={[0, 12]}
        onChange={(event) => {
          console.log("Slider 3 >>> value = " + event.currentTarget.value);
        }}
/>
<RangeSlider orientation={'vertical'}
        min={0}
        max={20}
        values={[0, 12]}
        onChange={(event) => {
          console.log("Slider 4 >>> value = " + event.currentTarget.value);
        }}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"labelposition",children:"labelPosition"}),e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"labelPosition"})," to display the current range as a label with the options, ",e.jsx(s.code,{children:"start"})," and ",e.jsx(s.code,{children:"end"}),"."]}),e.jsx("br",{}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsxs("div",{style:{paddingInline:40},children:[e.jsx(a,{min:0,max:10,values:[4,8],step:1,labelPosition:"start"}),e.jsx("br",{}),e.jsx(a,{min:-10,max:0,values:[-9,-4],step:1,labelPosition:"end"})]}),e.jsx(a,{orientation:"vertical",min:0,max:10,values:[1,8],step:2,labelPosition:"start"}),e.jsx("br",{}),e.jsx(a,{orientation:"vertical",min:-10,max:10,values:[-5,5],step:2,labelPosition:"end"})]}),e.jsx(t,{code:`
<RangeSlider
    min={0}
    max={10}
    values={[4, 8]}
    step={1}
    labelPosition={'start'}
/>
<RangeSlider
    min={-10}
    max={0}
    values={[-9, -4]}
    step={1}
    labelPosition={'end'}
/>
<RangeSlider
    orientation={'vertical'}
    min={0}
    max={10}
    values={[1, 8]}
    step={2}
    labelPosition={'start'}
/>
<RangeSlider
    orientation={'vertical'}
    min={-10}
    max={10}
    values={[-5, 5]}
    step={2}
    labelPosition={'end'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"minfractionmaxfraction-and-step",children:"minFraction/maxFraction and Step"}),e.jsxs(s.p,{children:["You can specify the fractional part using the ",e.jsx(s.code,{children:"minFraction"})," and ",e.jsx(s.code,{children:"maxFraction"}),` props, with a default value of 0 (no
decimal point). The displayed ranged values will be rounded when no decimal places are specified. The `,e.jsx(s.code,{children:"step"}),` prop
defines the interval between valid ranged values. Set the `,e.jsx(s.code,{children:"showSteps"})," prop to ",e.jsx(s.code,{children:"true"}),` to display the scale on the
ranged slider, and set `,e.jsx(s.code,{children:"snapToStep"})," to ",e.jsx(s.code,{children:"true"})," to make values snap precisely to the steps when the slider is moved."]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(a,{min:0,max:20,minFraction:0,maxFraction:0,values:[2,5],step:2,showSteps:!0,snapToStep:!0,labelPosition:"start"}),e.jsx("br",{}),e.jsx(a,{min:0,max:20,minFraction:0,maxFraction:0,values:[2,10.5],step:2,showSteps:!0,snapToStep:!1,labelPosition:"start"}),e.jsx("br",{}),e.jsx(a,{min:0,max:20,minFraction:0,maxFraction:1,values:[2,10.5],step:2,showSteps:!0,snapToStep:!1,labelPosition:"start"})]}),e.jsx(t,{code:`
<RangeSlider
    min={0}
    max={20}
    minFraction={0}
    maxFraction={0}
    values={[2, 5]}
    step={2}
    showSteps={true}
    snapToStep={true}
    labelPosition={'start'}
/>
<RangeSlider
    min={0}
    max={20}
    minFraction={0}
    maxFraction={0}
    values={[2, 10.5]}
    step={2}
    showSteps={true}
    snapToStep={false}
    labelPosition={'start'}
/>
<RangeSlider
    min={0}
    max={20}
    minFraction={0}
    maxFraction={1}
    values={[2, 10.5]}
    step={2}
    showSteps={true}
    snapToStep={false}
    labelPosition={'start'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"color",children:"Color"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"color"})," prop lets you apply different color variants for various types of ",e.jsx(s.code,{children:"RangeSlider"}),", with ",e.jsx(s.code,{children:"Primary"}),` set as the
default.`]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(a,{color:"primary",min:0,max:20,values:[0,5],step:2}),e.jsx(a,{color:"info",min:0,max:20,values:[0,8],step:2}),e.jsx(a,{color:"success",min:0,max:20,values:[0,14],step:2}),e.jsx(a,{color:"warning",min:0,max:20,values:[0,10],step:2}),e.jsx(a,{color:"error",min:0,max:20,values:[0,12],step:2}),e.jsx(a,{color:"secondary",min:0,max:20,values:[0,7],step:2})]}),e.jsx(t,{code:`
<RangeSlider color={'primary'}
        min={0}
        max={20}
        values={[0, 5]}
        step={2}
/>
<RangeSlider color={'info'}
        min={0}
        max={20}
        values={[0, 8]}
        step={2}
/>
<RangeSlider color={'success'}
        min={0}
        max={20}
        values={[0, 14]}
        step={2}
/>
<RangeSlider color={'warning'}
        min={0}
        max={20}
        values={[0, 10]}
        step={2}
/>
<RangeSlider color={'error'}
        min={0}
        max={20}
        values={[0, 12]}
        step={2}
/>
<RangeSlider color={'secondary'}
        min={0}
        max={20}
        values={[0, 7]}
        step={2}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"hue",children:"Hue"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"hue"})," prop allows you to adjust the color tone of the ",e.jsx(s.code,{children:"RangeSlider"}),` component, enabling you to choose shades that
align with your design style.`]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(a,{hue:"lighter",min:0,max:20,values:[0,11],step:2,showSteps:!0,snapToStep:!0}),e.jsx(a,{hue:"light",min:0,max:20,values:[0,5],step:2,showSteps:!0,snapToStep:!0}),e.jsx(a,{hue:"main",min:0,max:20,values:[0,8],step:2,showSteps:!0,snapToStep:!0}),e.jsx(a,{hue:"dark",min:0,max:20,values:[0,14],step:2,showSteps:!0,snapToStep:!0}),e.jsx(a,{hue:"darker",min:0,max:20,values:[0,10],step:2,showSteps:!0,snapToStep:!0})]}),e.jsx(t,{code:`
<RangeSlider hue={'lighter'}
        min={0}
        max={20}
        values={[0, 11]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<RangeSlider hue={'light'}
        min={0}
        max={20}
        values={[0, 5]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<RangeSlider hue={'main'}
        min={0}
        max={20}
        values={[0, 8]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<RangeSlider hue={'dark'}
        min={0}
        max={20}
        values={[0, 14]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<RangeSlider hue={'darker'}
        min={0}
        max={20}
        values={[0, 10]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"icon-and-full-width",children:"Icon and Full Width"}),e.jsxs(s.p,{children:[`To display icons at the ends of the ranged slider, provide an icon name (from Material Icons/Symbols) in the
`,e.jsx(s.code,{children:"iconStart"})," and ",e.jsx(s.code,{children:"iconEnd"}),` props, or customize them with your own images as elements in these props. You can set the
`,e.jsx(s.code,{children:"fullWidth"})," prop to ",e.jsx(s.code,{children:"true"})," to make the ",e.jsx(s.code,{children:"Slider"})," extend to full width, depending on the size of its parent container."]}),e.jsx("br",{}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(a,{color:"info",size:"small",min:-20,max:20,values:[-10,10],step:2,showSteps:!0,snapToStep:!0,iconStart:"thermometer_minus",iconEnd:"thermometer_add"})}),e.jsx("br",{}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(a,{color:"info",min:-20,max:20,values:[-10,10],step:2,showSteps:!0,fullWidth:!0,iconStart:"thermometer_minus",iconEnd:"thermometer_add"})}),e.jsx(t,{code:`
<RangeSlider color={'info'}
        size={'small'}
        min={-20}
        max={20}
        values={[-10, 10]}
        step={2}
        showSteps={true}
        snapToStep={true}
        iconStart={'thermometer_minus'}
        iconEnd={'thermometer_add'}
/>
<RangeSlider color={'info'}
        min={-20}
        max={20}
        values={[-10, 10]}
        step={2}
        showSteps={true}
        fullWidth={true}
        iconStart={'thermometer_minus'}
        iconEnd={'thermometer_add'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(s.h3,{id:"shape",children:"Shape"}),e.jsxs(s.p,{children:["To adjust the shape of the ranged slider handle, set the ",e.jsx(s.code,{children:"thumbShape"})," prop to ",e.jsx(s.code,{children:"circle"})," (default), ",e.jsx(s.code,{children:"rounded"}),` or
`,e.jsx(s.code,{children:"rectangle"}),"."]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(a,{min:0,max:20,values:[0,5],step:2,showSteps:!0,snapToStep:!0}),e.jsx(a,{color:"success",thumbShape:"rounded",min:0,max:20,values:[0,10],step:2,showSteps:!0,snapToStep:!0}),e.jsx(a,{color:"secondary",thumbShape:"rectangle",min:0,max:20,values:[0,15],step:2,showSteps:!0,snapToStep:!0})]}),e.jsx(t,{code:`
<RangeSlider min={0}
        max={20}
        values={[0, 5]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<RangeSlider color={'success'}
        thumbShape={'rounded'}
        min={0}
        max={20}
        values={[0, 10]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
<RangeSlider color={'secondary'}
        thumbShape={'rectangle'}
        min={0}
        max={20}
        values={[0,15]}
        step={2}
        showSteps={true}
        snapToStep={true}
/>
`,language:"tsx",dark:!0})]})]})}function k(r={}){const{wrapper:s}={...l(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{k as default};
