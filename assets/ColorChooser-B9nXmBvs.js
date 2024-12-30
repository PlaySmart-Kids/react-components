import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as i,af as a}from"./index-DS4mN-Cx.js";import c from"./ColorChooser.stories-0O6v2Dj4.js";import{C as l}from"./ColorChooser-B5FUsHpn.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./index.browser-vcSNLBTf.js";import"./ColorUtil-B4gL3Pif.js";function n(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{Meta:!0,of:c}),`
`,o.jsxs("div",{className:"preview-panel",children:[o.jsx(e.h1,{id:"colorchooser",children:"ColorChooser"}),o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"ColorChooser"}),` component lets users explore a range of color schemes, discovering beautiful harmonies, tints,
shades, and tones. It also offers options to adjust transparency and input both Hex codes and RGB values. Below is an
example of how to use it.`]})]}),`
`,o.jsxs("div",{className:"preview-panel",children:[o.jsx(e.h3,{id:"basic-colorchooser",children:"Basic ColorChooser"}),o.jsxs(e.p,{children:["Use the ",o.jsx(e.code,{children:"color"})," prop to set the initial color with a CSS color name or a HEX code (e.g., '#20b2aa') in ",o.jsx(e.code,{children:"String"}),`
format.
Selecting or adjusting a color will trigger the `,o.jsx(e.code,{children:"onChange"})," event."]}),o.jsx("div",{className:"flex-horizontal sb-unstyled",children:o.jsx(l,{color:"darkorchid",onChange:t=>{console.log("onChange >>> ColorChooser = "+t)}})}),o.jsx(a,{code:`
<ColorChooser color={'darkorchid'}
              onChange={(newColor) => {
                console.log("onChange >>> ColorChooser = " + newColor);
              }}
/>
`,nguage:"tsx",dark:!0})]})]})}function X(r={}){const{wrapper:e}={...s(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{X as default};
