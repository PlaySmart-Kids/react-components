import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as n,af as t}from"./index-DS4mN-Cx.js";import"./DefaultThemeProvider-DB5yquFP.js";import{m as r,S as d}from"./Combobox.stories-1L6kWV-0.js";import"./index-DJO9vBfz.js";import{C as a}from"./Combobox-utIsBDyR.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./index-CikfRwdJ.js";import"./InputUtil-CfDwzwTJ.js";function i(o){const l={code:"code",h1:"h1",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{Meta:!0,of:r}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h1,{id:"combobox",children:"Combobox"}),e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"Combobox"}),` component allows users to select values from a predefined list through a dropdown menu or type in the
input field to filter the options within the list, making it easier for users to find and select the desired item.
Here's how to get started with it.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"basic-combobox",children:"Basic Combobox"}),e.jsxs(l.p,{children:["Use the ",e.jsx(l.code,{children:"label"})," prop in the ",e.jsx(l.code,{children:"Combobox"}),` to specify the input label. You can provide the predefined list of options by
passing an array of objects to the `,e.jsx(l.code,{children:"options"}),` prop, where each object includes a label and value. Use the
`,e.jsx(l.code,{children:"defaultValue"})," prop to set the initial selection of the ",e.jsx(l.code,{children:"Combobox"}),". The ",e.jsx(l.code,{children:"autoComplete"}),` prop allows users to type in
the input field to
filter options within
the list, helping them quickly find and select the desired item. Choosing an option in the `,e.jsx(l.code,{children:"Combobox"}),` triggers the
`,e.jsx(l.code,{children:"onChange"})," event."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(a,{style:{width:"10rem"},title:"List A",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1",onChange:u=>{console.log("Combobox List A >>> "+u)}}),e.jsx(a,{style:{width:"15rem"},title:"Option with autocomplete",options:[{label:"100",value:"100"},{label:"200",value:"200"},{label:"300",value:"300"}],defaultValue:"100",autoComplete:d})]}),e.jsx(t,{code:`
<Combobox style={{ width: '10rem' }}
          title={'List A'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
          onChange={(value) => {
            alert("Combobox List A >>> " + value);
          }}
/>
<Combobox style={{ width: '15rem' }}
          title={'Option with autocomplete'}
          options={[
            { label: '100', value: '100' },
            { label: '200', value: '200' },
            { label: '300', value: '300' },
          ]}
          defaultValue={'100'}
          autoComplete={SortOptionsByLabelAndSearch}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"defaultvaluevalue",children:"defaultValue/value"}),e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"defaultValue"})," prop specifies the initial selection of the ",e.jsx(l.code,{children:"Combobox"})," as a string, whereas the ",e.jsx(l.code,{children:"value"}),` prop
controls and maintains a consistent selection in the combo box.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(a,{style:{width:"15rem"},title:"List A: Default Value",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),e.jsx(a,{style:{width:"15rem"},title:"List B: Value",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],value:"B2"})]}),e.jsx(t,{code:`
<Combobox style={{ width: '15rem' }}
          title={'List A: Default Value'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox style={{ width: '15rem' }}
          title={'List B: Value'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          value={'B2'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"size",children:"Size"}),e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"Combobox"}),` is available in four sizes: wrap (borderless for a minimized look), small, normal (default) and large.
You can set the size using the `,e.jsx(l.code,{children:"size"})," prop."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(a,{size:"wrap",options:[{label:"T1",value:"T1"},{label:"T2",value:"T2"},{label:"T3",value:"T3"}],defaultValue:"T1"}),e.jsx(a,{title:"Small",size:"small",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),e.jsx(a,{title:"Normal",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],defaultValue:"B1"}),e.jsx(a,{title:"Large",size:"large",options:[{label:"C1",value:"C1"},{label:"C2",value:"C2"},{label:"C3",value:"C3"}],defaultValue:"C1"})]}),e.jsx(t,{code:`
<Combobox size={'wrap'}
          options={[
            { label: 'T1', value: 'T1' },
            { label: 'T2', value: 'T2' },
            { label: 'T3', value: 'T3' },
          ]}
          defaultValue={'T1'}
/>
<Combobox title={'Small'}
          size={'small'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox title={'Normal'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          defaultValue={'B1'}
/>
<Combobox title={'Large'}
          size={'large'}
          options={[
            { label: 'C1', value: 'C1' },
            { label: 'C2', value: 'C2' },
            { label: 'C3', value: 'C3' },
          ]}
          defaultValue={'C1'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"color",children:"Color"}),e.jsxs(l.p,{children:["The ",e.jsx(l.code,{children:"color"})," prop lets you apply different color variants, each representing a specific option type, with ",e.jsx(l.code,{children:"primary"}),` as
the default color. To ensure the `,e.jsx(l.code,{children:"Combobox"})," consistently displays color, set the ",e.jsx(l.code,{children:"alwaysHighlight"})," prop to ",e.jsx(l.code,{children:"true"}),`; by
default it is set to `,e.jsx(l.code,{children:"false"}),"."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(a,{title:"List A",alwaysHighlight:!0,options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),e.jsx(a,{title:"List B",alwaysHighlight:!0,color:"info",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],defaultValue:"B1"}),e.jsx(a,{title:"List C",alwaysHighlight:!0,color:"success",options:[{label:"C1",value:"C1"},{label:"C2",value:"C2"},{label:"C3",value:"C3"}],defaultValue:"C1"}),e.jsx(a,{title:"List D",alwaysHighlight:!0,color:"warning",options:[{label:"D1",value:"D1"},{label:"D2",value:"D2"},{label:"D3",value:"D3"}],defaultValue:"D1"}),e.jsx(a,{title:"List E",alwaysHighlight:!0,color:"error",options:[{label:"E1",value:"E1"},{label:"E2",value:"E2"},{label:"E3",value:"E3"}],defaultValue:"E1"}),e.jsx(a,{title:"List F",alwaysHighlight:!0,color:"secondary",options:[{label:"F1",value:"F1"},{label:"F2",value:"F2"},{label:"F3",value:"F3"}],defaultValue:"F1"})]}),e.jsx(t,{code:`
<Combobox title={'List A'}
          alwaysHighlight={true}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox title={'List B'}
          alwaysHighlight={true}
          color={'info'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          defaultValue={'B1'}
/>
<Combobox title={'List C'}
          alwaysHighlight={true}
          color={'success'}
          options={[
            { label: 'C1', value: 'C1' },
            { label: 'C2', value: 'C2' },
            { label: 'C3', value: 'C3' },
          ]}
          defaultValue={'C1'}
/>
<Combobox title={'List D'}
          alwaysHighlight={true}
          color={'warning'}
          options={[
            { label: 'D1', value: 'D1' },
            { label: 'D2', value: 'D2' },
            { label: 'D3', value: 'D3' },
          ]}
          defaultValue={'D1'}
/>
<Combobox title={'List E'}
          alwaysHighlight={true}
          color={'error'}
          options={[
            { label: 'E1', value: 'E1' },
            { label: 'E2', value: 'E2' },
            { label: 'E3', value: 'E3' },
          ]}
          defaultValue={'E1'}
/>
<Combobox title={'List F'}
          alwaysHighlight={true}
          color={'secondary'}
          options={[
            { label: 'F1', value: 'F1' },
            { label: 'F2', value: 'F2' },
            { label: 'F3', value: 'F3' },
          ]}
          defaultValue={'F1'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"hue",children:"Hue"}),e.jsxs(l.p,{children:["You can customize the color tone of the ",e.jsx(l.code,{children:"Combobox"})," component using the ",e.jsx(l.code,{children:"hue"}),` prop,
allowing you to select shades or tones that match your design preferences.`]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(a,{title:"List A",alwaysHighlight:!0,hue:"lightest",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),e.jsx(a,{title:"List B",alwaysHighlight:!0,hue:"lighter",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],defaultValue:"B1"}),e.jsx(a,{title:"List C",alwaysHighlight:!0,hue:"light",options:[{label:"C1",value:"C1"},{label:"C2",value:"C2"},{label:"C3",value:"C3"}],defaultValue:"C1"}),e.jsx(a,{title:"List D",alwaysHighlight:!0,options:[{label:"D1",value:"D1"},{label:"D2",value:"D2"},{label:"D3",value:"D3"}],defaultValue:"D1"}),e.jsx(a,{title:"List E",alwaysHighlight:!0,hue:"dark",options:[{label:"E1",value:"E1"},{label:"E2",value:"E2"},{label:"E3",value:"E3"}],defaultValue:"E1"}),e.jsx(a,{title:"List F",alwaysHighlight:!0,hue:"darker",options:[{label:"F1",value:"F1"},{label:"F2",value:"F2"},{label:"F3",value:"F3"}],defaultValue:"F1"}),e.jsx(a,{title:"List G",alwaysHighlight:!0,hue:"darkest",options:[{label:"G1",value:"G1"},{label:"G2",value:"G2"},{label:"G3",value:"G3"}],defaultValue:"G1"})]}),e.jsx(t,{code:`
<Combobox title={'List A'}
          alwaysHighlight={true}
          hue={'lightest'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox title={'List B'}
          alwaysHighlight={true}
          hue={'lighter'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          defaultValue={'B1'}
/>
<Combobox title={'List C'}
          alwaysHighlight={true}
          hue={'light'}
          options={[
            { label: 'C1', value: 'C1' },
            { label: 'C2', value: 'C2' },
            { label: 'C3', value: 'C3' },
          ]}
          defaultValue={'C1'}
/>
<Combobox title={'List D'}
          alwaysHighlight={true}
          options={[
            { label: 'D1', value: 'D1' },
            { label: 'D2', value: 'D2' },
            { label: 'D3', value: 'D3' },
          ]}
          defaultValue={'D1'}
/>
<Combobox title={'List E'}
          alwaysHighlight={true}
          hue={'dark'}
          options={[
            { label: 'E1', value: 'E1' },
            { label: 'E2', value: 'E2' },
            { label: 'E3', value: 'E3' },
          ]}
          defaultValue={'E1'}
/>
<Combobox title={'List F'}
          alwaysHighlight={true}
          hue={'darker'}
          options={[
            { label: 'F1', value: 'F1' },
            { label: 'F2', value: 'F2' },
            { label: 'F3', value: 'F3' },
          ]}
          defaultValue={'F1'}
/>
<Combobox title={'List G'}
          alwaysHighlight={true}
          hue={'darkest'}
          options={[
            { label: 'G1', value: 'G1' },
            { label: 'G2', value: 'G2' },
            { label: 'G3', value: 'G3' },
          ]}
          defaultValue={'G1'}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),e.jsxs(l.p,{children:["Use the ",e.jsx(l.code,{children:"disabled"})," prop with a value of ",e.jsx(l.code,{children:"true"})," or ",e.jsx(l.code,{children:"false"}),` to enable or disable the Combobox. By default, the
`,e.jsx(l.code,{children:"Combobox"})," is enabled."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(a,{style:{width:"10rem"},title:"List A",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A3",disabled:!0}),e.jsx(a,{style:{width:"10rem"},title:"List B",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],alwaysHighlight:!0})]}),e.jsx(t,{code:`
<Combobox style={{ width: '10rem' }}
          title={'List A'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A2'}
          disabled={true}
/>
<Combobox style={{ width: '10rem' }}
          title={'List B'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          alwaysHighlight={true}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"shrink-title",children:"Shrink Title"}),e.jsxs(l.p,{children:["By default, the ",e.jsx(l.code,{children:"shrinkTitle"})," prop is set to ",e.jsx(l.code,{children:"true"}),` to make the label to shrink or move up when an option is selected
or when the combo box is focused. Set the `,e.jsx(l.code,{children:"shrinkTitle"})," prop to ",e.jsx(l.code,{children:"false"})," to keep the label positioned at the top."]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[e.jsx(a,{style:{width:"10rem"},title:"Label A",options:[{label:"Item 1",value:"I1"},{label:"Item 2",value:"I2"},{label:"Item 3",value:"I3"},{label:"Item 4",value:"I4"}]}),e.jsx(a,{style:{width:"10rem"},title:"Label B",options:[{label:"Item 1",value:"I1"},{label:"Item 2",value:"I2"},{label:"Item 3",value:"I3"},{label:"Item 4",value:"I4"}],shrinkTitle:!1})]}),e.jsx(t,{code:`
<Combobox style={{ width: '10rem' }}
          title={'Label A'}
          options={[
            { label: 'Item 1', value: 'I1' },
            { label: 'Item 2', value: 'I2' },
            { label: 'Item 3', value: 'I3' },
            { label: 'Item 4', value: 'I4' },
          ]}
/>
<Combobox style={{ width: '10rem' }}
          title={'Label B'}
          options={[
            { label: 'Item 1', value: 'I1' },
            { label: 'Item 2', value: 'I2' },
            { label: 'Item 3', value: 'I3' },
            { label: 'Item 4', value: 'I4' },
          ]}
          shrinkTitle={false}
/>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(l.h3,{id:"hint-and-full-width",children:"Hint and Full Width"}),e.jsxs(l.p,{children:["You can adjust the ",e.jsx(l.code,{children:"Combobox"})," extend to full width by setting the ",e.jsx(l.code,{children:"fullWidth"})," prop to ",e.jsx(l.code,{children:"true"})," or ",e.jsx(l.code,{children:"false"}),` (default),
depending on
the size of its parent container. Use the `,e.jsx(l.code,{children:"hint"})," prop to add a description for the ",e.jsx(l.code,{children:"Combobox"}),". When ",e.jsx(l.code,{children:"hint"}),` is added,
the `,e.jsx(l.code,{children:"alwaysHighlight"})," prop automatically sets to ",e.jsx(l.code,{children:"true"})," and the ",e.jsx(l.code,{children:"shrinkTitle"})," prop to ",e.jsx(l.code,{children:"false"}),"."]}),e.jsx("div",{className:"flex-horizontal sb-unstyled full-width",children:e.jsx(a,{title:"Sport",options:[{label:"Basketball",value:"S1"},{label:"Football",value:"S2"},{label:"Golf",value:"S3"},{label:"Tennis",value:"S4"},{label:"Volleyball",value:"s5"}],hint:"* Required",fullWidth:!0})}),e.jsx(t,{code:`
<Combobox title={'Sport'}
          options={[
            { label: 'Basketball', value: 'S1' },
            { label: 'Football', value: 'S2' },
            { label: 'Golf', value: 'S3' },
            { label: 'Tennis', value: 'S4' },
            { label: 'Volleyball', value: 's5' },
          ]}
          hint={'* Required'}
          fullWidth={true}
/>
`,language:"tsx",dark:!0})]})]})}function y(o={}){const{wrapper:l}={...s(),...o.components};return l?e.jsx(l,{...o,children:e.jsx(i,{...o})}):i(o)}export{y as default};
