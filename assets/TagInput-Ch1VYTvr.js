import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as o,af as l}from"./index-DS4mN-Cx.js";import h from"./TagInput.stories-BbKuUUUH.js";import{T as t}from"./TagInput-Dk5jByq5.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./InputUtil-CfDwzwTJ.js";function n(s){const a={code:"code",h1:"h1",h3:"h3",p:"p",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{Meta:!0,of:h}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h1,{id:"taginput-component",children:"TagInput Component"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"TagInput"}),` component allows users to enter text and create a new tag by pressing a key (such as Enter, Tab, or a
comma). These tags are usually shown as small, removable items. Here's a practical example of using it.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"basic-taginput",children:"Basic TagInput"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"TagInput"})," component features a ",e.jsx(a.code,{children:"title"})," prop to specify the input label. The ",e.jsx(a.code,{children:"defaultValues"}),` prop initializes the
values in the `,e.jsx(a.code,{children:"TagInput"})," as an array of strings, while the ",e.jsx(a.code,{children:"values"}),` prop manages and consistently maintains the tags
in the `,e.jsx(a.code,{children:"TagInput"}),". Clicking on a tag in the ",e.jsx(a.code,{children:"TagInput"}),` will remove it. Adding and removing tags triggers the
`,e.jsx(a.code,{children:"onChange"})," event."]}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsx(t,{title:"TagInput 1",defaultValues:["Tag 1","Tag 2"],onChange:i=>{console.log("onChange >>> TagInput 1 = "+i)}}),e.jsx(t,{title:"TagInput 2",values:["Tag A","Tag B"],onChange:i=>{console.log("onChange >>> TagInput 2 = "+i)}})]}),e.jsx(l,{code:`
<TagInput title={'TagInput 1'}
          defaultValues={['Tag 1', 'Tag 2']}
          onChange={(newValue) => {
            console.log("onChange >>> TagInput 1 = " + newValue);
          }}
/>
<TagInput title={'TagInput 2'}
          values={['Tag A', 'Tag B']}
          onChange={(newValue) => {
            console.log("onChange >>> TagInput 2 = " + newValue);
          }}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"size",children:"Size"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"TagInput"})," component is available in three sizes: small, normal (default), and large. Use the ",e.jsx(a.code,{children:"size"}),` prop to
adjust the size of the tag input.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{title:"Small",size:"small",values:["Tag A"]}),e.jsx(t,{title:"Normal",values:["Tag B"]}),e.jsx(t,{title:"Large",size:"large",values:["Tag C"]})]}),e.jsx(l,{code:`
<TagInput title={'Small'}
          size={'small'}
          values={['Tag A']}
/>
<TagInput title={'Normal'}
          values={['Tag B']}
/>
<TagInput title={'Large'}
          size={'large'}
          values={['Tag C']}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"color",children:"Color"}),e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"color"}),` prop allows you to apply various color variants, each corresponding to a specific input type and tags,
with `,e.jsx(a.code,{children:"primary"})," being the default color. You can set the ",e.jsx(a.code,{children:"alwaysHighlight"})," prop to ",e.jsx(a.code,{children:"true"}),` to ensure the tag input
always shows color; it is set to `,e.jsx(a.code,{children:"false"})," by default."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{title:"Primary",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Info",color:"info",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Success",color:"success",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Warning",color:"warning",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Error",color:"error",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Secondary",color:"secondary",alwaysHighlight:!0,values:["Tag A"]})]}),e.jsx(l,{code:`
<TagInput title={'Primary'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Info'}
          color={'info'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Success'}
          color={'success'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Warning'}
          color={'warning'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Error'}
          color={'error'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Secondary'}
          color={'secondary'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"hue",children:"Hue"}),e.jsxs(a.p,{children:["You can personalize the color tone of the input field and tags in the ",e.jsx(a.code,{children:"TagInput"})," component by using the ",e.jsx(a.code,{children:"hue"}),` prop,
which lets you choose shades or tones that align with your design preferences.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{title:"Lighter",hue:"lighter",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Light",hue:"light",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Main",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Dark",hue:"dark",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Darker",hue:"darker",alwaysHighlight:!0,values:["Tag A"]})]}),e.jsx(l,{code:`
<TagInput title={'Lighter'}
          hue={'lighter'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Light'}
          hue={'light'}
          alwaysHighlight={true
          values={['Tag A']}
/>
<TagInput title={'Main'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Dark'}
          hue={'dark'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
<TagInput title={'Darker'}
          hue={'darker'}
          alwaysHighlight={true}
          values={['Tag A']}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(a.p,{children:["Use the ",e.jsx(a.code,{children:"disabled"})," prop with a value of ",e.jsx(a.code,{children:"true"})," or ",e.jsx(a.code,{children:"false"}),` to enable or disable the tag input. The
`,e.jsx(a.code,{children:"TagInput"})," is enabled by default."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{title:"Enabled Input",alwaysHighlight:!0,values:["Tag A"]}),e.jsx(t,{title:"Disabled Input",disabled:!0,defaultValues:["Tag B"]})]}),e.jsx(l,{code:`
<TagInput title={'Enabled Input'}
          alwaysHighlight={true}
/>
<TagInput title={'Disabled Input'}
          disabled={true}
          defaultValues={['Tag B']}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"shrink-title",children:"Shrink Title"}),e.jsxs(a.p,{children:["By default, the ",e.jsx(a.code,{children:"shrinkTitle"})," prop is set to ",e.jsx(a.code,{children:"true"}),`, causing the label to shrink or move up when text is entered in
the input field or tags are added. To keep the label at the top, set the `,e.jsx(a.code,{children:"shrinkTitle"})," prop to ",e.jsx(a.code,{children:"false"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(t,{title:"TagInput 1"}),e.jsx(t,{title:"TagInput 2",shrinkTitle:!1})]}),e.jsx(l,{code:`
<TagInput title={'TagInput 1'} />
<TagInput title={'TagInput 2'}
           shrinkTitle={false}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(a.h3,{id:"hint-and-full-width",children:"Hint and Full Width"}),e.jsxs(a.p,{children:["Use the ",e.jsx(a.code,{children:"hint"})," prop to provide a description for the tag input. You can make the ",e.jsx(a.code,{children:"TagInput"}),` extend to full width by
setting the `,e.jsx(a.code,{children:"fullWidth"})," prop to ",e.jsx(a.code,{children:"true"})," or ",e.jsx(a.code,{children:"false"})," (default), depending on the size of its parent container."]}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(t,{title:"Categories",color:"success",hint:"* Up to 10 categories",fullWidth:!0,values:["Colors","Shapes","Numbers","Alphabets"]})}),e.jsx(l,{code:`
<TagInput title={'Categories'}
          color={'success'}
          hint={'* Up to 10 categories'}
          fullWidth={true}
          values={['Colors', 'Shapes', 'Numbers', 'Alphabets']}
/>
`,language:"tsx",dark:!0})]})]})}function b(s={}){const{wrapper:a}={...r(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(n,{...s})}):n(s)}export{b as default};
