import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as b,af as o}from"./index-5tMK-v8p.js";import"./DefaultThemeProvider-Ce-zb_Sa.js";import{m as n,S as r}from"./Combobox.stories-4t7X4cad.js";import"./index-DJO9vBfz.js";import{C as a}from"./Combobox-B0zNmVdd.js";import"./iframe-CigrDhte.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./index-CikfRwdJ.js";import"./InputUtil-BONj-j-a.js";function s(t){const e={code:"code",h1:"h1",h3:"h3",p:"p",...i(),...t.components};return l.jsxs(l.Fragment,{children:[l.jsx(b,{Meta:!0,of:n}),`
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h1,{id:"combobox",children:"Combobox"}),l.jsxs(e.p,{children:["The ",l.jsx(e.code,{children:"Combobox"}),` component allows users to select values from a predefined list through a dropdown menu or type in the
input field to filter the options within the list, making it easier for users to find and select the desired item.
Here’s how to get started with it.`]})]}),`
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"basic-combobox",children:"Basic Combobox"}),l.jsxs(e.p,{children:["Use the ",l.jsx(e.code,{children:"label"})," prop in the ",l.jsx(e.code,{children:"Combobox"}),` to specify the input label. You can provide the predefined list of options by
passing an array of objects to the `,l.jsx(e.code,{children:"options"}),` prop, where each object includes a label and value. Use the
`,l.jsx(e.code,{children:"defaultValue"})," prop to set the initial selection of the ",l.jsx(e.code,{children:"Combobox"}),". The ",l.jsx(e.code,{children:"autoComplete"}),` prop allows users to type in
the input field to
filter options within
the list, helping them quickly find and select the desired item. Choosing an option in the `,l.jsx(e.code,{children:"Combobox"}),` triggers the
`,l.jsx(e.code,{children:"onChange"})," event."]}),l.jsx("br",{}),l.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[l.jsx(a,{style:{width:"10rem"},label:"List A",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1",onChange:u=>{console.log("Combobox List A >>> "+u)}}),l.jsx(a,{style:{width:"15rem"},label:"Option with autocomplete",options:[{label:"100",value:"100"},{label:"200",value:"200"},{label:"300",value:"300"}],defaultValue:"100",autoComplete:r})]}),l.jsx(o,{code:`
<Combobox style={{ width: '10rem }}
          label={'List A'}
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
          label={'Option with autocomplete'}
          options={[
            { label: '100', value: '100' },
            { label: '200', value: '200' },
            { label: '300', value: '300' },
          ]}
          defaultValue={'100'}
          autoComplete={SortOptionsByLabelAndSearch}
/>
`,language:"tsx",dark:!0})]}),`
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"hint-and-full-width",children:"Hint and Full Width"}),l.jsxs(e.p,{children:["Use the ",l.jsx(e.code,{children:"hint"})," prop to add a description for the ",l.jsx(e.code,{children:"Combobox"}),". You can adjust the ",l.jsx(e.code,{children:"Combobox"}),` extend to full width by
setting the `,l.jsx(e.code,{children:"fullWidth"})," prop to ",l.jsx(e.code,{children:"true"})," or ",l.jsx(e.code,{children:"false"}),", depending on the size of its parent container."]}),l.jsx("br",{}),l.jsx("div",{className:"grid-vertical full-width no-gap sb-unstyled",children:l.jsx(a,{label:"Sport",options:[{label:"Basketball",value:"S1"},{label:"Football",value:"S2"},{label:"Golf",value:"S3"},{label:"Tennis",value:"S4"},{label:"Volleyball",value:"s5"}],defaultValue:"S1",hint:"* Required",fullWidth:!0})}),l.jsx(o,{code:`
<Combobox label={'Sport'}
          options={[
            { label: 'Basketball', value: 'S1' },
            { label: 'Football', value: 'S2' },
            { label: 'Golf', value: 'S3' },
            { label: 'Tennis', value: 'S4' },
            { label: 'Volleyball', value: 's5' },
          ]}
          defaultValue={'S1'}
          hint={'* Required'}
          fullWidth={true}
/>
`,language:"tsx",dark:!0})]}),`
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"defaultvaluevalue",children:"defaultValue/value"}),l.jsxs(e.p,{children:["The ",l.jsx(e.code,{children:"defaultValue"})," prop specifies the initial selection of the ",l.jsx(e.code,{children:"Combobox"})," as a string, whereas the ",l.jsx(e.code,{children:"value"}),` prop
controls and maintains a consistent selection in the combo box.`]}),l.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[l.jsx(a,{style:{width:"15rem"},label:"List A: Default Value",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),l.jsx(a,{style:{width:"15rem"},label:"List B: Value",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],value:"B2"})]}),l.jsx(o,{code:`
<Combobox style={{ width: '15rem' }}
          label={'List A: Default Value'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox style={{ width: '15rem' }}
          label={'List B: Value'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          value={'B2'}
/>
`,language:"tsx",dark:!0})]}),`
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"size",children:"Size"}),l.jsxs(e.p,{children:["The ",l.jsx(e.code,{children:"Combobox"}),` is available in four sizes: wrap (borderless for a minimized look), small, normal (default) and large.
You can set the size using the `,l.jsx(e.code,{children:"size"})," prop."]}),l.jsx("br",{}),l.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[l.jsx(a,{size:"wrap",options:[{label:"T1",value:"T1"},{label:"T2",value:"T2"},{label:"T3",value:"T3"}],defaultValue:"T1"}),l.jsx(a,{label:"Small",size:"small",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),l.jsx(a,{label:"Normal",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],defaultValue:"B1"}),l.jsx(a,{label:"Large",size:"large",options:[{label:"C1",value:"C1"},{label:"C2",value:"C2"},{label:"C3",value:"C3"}],defaultValue:"C1"})]}),l.jsx(o,{code:`
<Combobox size={'wrap'}
          options={[
            { label: 'T1', value: 'T1' },
            { label: 'T2', value: 'T2' },
            { label: 'T3', value: 'T3' },
          ]}
          defaultValue={'T1'}
/>
<Combobox label={'Small'}
          size={'small'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox label={'Normal'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          defaultValue={'B1'}
/>
<Combobox label={'Large'}
          size={'large'}
          options={[
            { label: 'C1', value: 'C1' },
            { label: 'C2', value: 'C2' },
            { label: 'C3', value: 'C3' },
          ]}
          defaultValue={'C1'}
/>
`,language:"tsx",dark:!0})]}),`
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"color",children:"Color"}),l.jsxs(e.p,{children:["The ",l.jsx(e.code,{children:"color"})," prop lets you apply different color variants, each representing a specific option type, with ",l.jsx(e.code,{children:"primary"}),` as
the default color. To ensure the Switch consistently displays color, use the `,l.jsx(e.code,{children:"alwaysHighlight"})," prop."]}),l.jsx("br",{}),l.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[l.jsx(a,{label:"List A",alwaysHighlight:!0,options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),l.jsx(a,{label:"List B",alwaysHighlight:!0,color:"info",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],defaultValue:"B1"}),l.jsx(a,{label:"List C",alwaysHighlight:!0,color:"success",options:[{label:"C1",value:"C1"},{label:"C2",value:"C2"},{label:"C3",value:"C3"}],defaultValue:"C1"}),l.jsx(a,{label:"List D",alwaysHighlight:!0,color:"warning",options:[{label:"D1",value:"D1"},{label:"D2",value:"D2"},{label:"D3",value:"D3"}],defaultValue:"D1"}),l.jsx(a,{label:"List E",alwaysHighlight:!0,color:"error",options:[{label:"E1",value:"E1"},{label:"E2",value:"E2"},{label:"E3",value:"E3"}],defaultValue:"E1"}),l.jsx(a,{label:"List F",alwaysHighlight:!0,color:"secondary",options:[{label:"F1",value:"F1"},{label:"F2",value:"F2"},{label:"F3",value:"F3"}],defaultValue:"F1"})]}),l.jsx(o,{code:`
<Combobox label={'List A'}
          alwaysHighlight={true}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox label={'List B'}
          alwaysHighlight={true}
          color={'info'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          defaultValue={'B1'}
/>
<Combobox label={'List C'}
          alwaysHighlight={true}
          color={'success'}
          options={[
            { label: 'C1', value: 'C1' },
            { label: 'C2', value: 'C2' },
            { label: 'C3', value: 'C3' },
          ]}
          defaultValue={'C1'}
/>
<Combobox label={'List D'}
          alwaysHighlight={true}
          color={'warning'}
          options={[
            { label: 'D1', value: 'D1' },
            { label: 'D2', value: 'D2' },
            { label: 'D3', value: 'D3' },
          ]}
          defaultValue={'D1'}
/>
<Combobox label={'List E'}
          alwaysHighlight={true}
          color={'error'}
          options={[
            { label: 'E1', value: 'E1' },
            { label: 'E2', value: 'E2' },
            { label: 'E3', value: 'E3' },
          ]}
          defaultValue={'E1'}
/>
<Combobox label={'List F'}
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
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"hue",children:"Hue"}),l.jsxs(e.p,{children:["You can customize the color tone of the ",l.jsx(e.code,{children:"Combobox"})," component using the ",l.jsx(e.code,{children:"hue"}),` prop,
allowing you to select shades or tones that match your design preferences.`]}),l.jsx("br",{}),l.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[l.jsx(a,{label:"List A",alwaysHighlight:!0,hue:"lightest",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A1"}),l.jsx(a,{label:"List B",alwaysHighlight:!0,hue:"lighter",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],defaultValue:"B1"}),l.jsx(a,{label:"List C",alwaysHighlight:!0,hue:"light",options:[{label:"C1",value:"C1"},{label:"C2",value:"C2"},{label:"C3",value:"C3"}],defaultValue:"C1"}),l.jsx(a,{label:"List D",alwaysHighlight:!0,options:[{label:"D1",value:"D1"},{label:"D2",value:"D2"},{label:"D3",value:"D3"}],defaultValue:"D1"}),l.jsx(a,{label:"List E",alwaysHighlight:!0,hue:"dark",options:[{label:"E1",value:"E1"},{label:"E2",value:"E2"},{label:"E3",value:"E3"}],defaultValue:"E1"}),l.jsx(a,{label:"List F",alwaysHighlight:!0,hue:"darker",options:[{label:"F1",value:"F1"},{label:"F2",value:"F2"},{label:"F3",value:"F3"}],defaultValue:"F1"}),l.jsx(a,{label:"List G",alwaysHighlight:!0,hue:"darkest",options:[{label:"G1",value:"G1"},{label:"G2",value:"G2"},{label:"G3",value:"G3"}],defaultValue:"G1"})]}),l.jsx(o,{code:`
<Combobox label={'List A'}
          alwaysHighlight={true}
          hue={'lightest'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A1'}
/>
<Combobox label={'List B'}
          alwaysHighlight={true}
          hue={'lighter'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          defaultValue={'B1'}
/>
<Combobox label={'List C'}
          alwaysHighlight={true}
          hue={'light'}
          options={[
            { label: 'C1', value: 'C1' },
            { label: 'C2', value: 'C2' },
            { label: 'C3', value: 'C3' },
          ]}
          defaultValue={'C1'}
/>
<Combobox label={'List D'}
          alwaysHighlight={true}
          options={[
            { label: 'D1', value: 'D1' },
            { label: 'D2', value: 'D2' },
            { label: 'D3', value: 'D3' },
          ]}
          defaultValue={'D1'}
/>
<Combobox label={'List E'}
          alwaysHighlight={true}
          hue={'dark'}
          options={[
            { label: 'E1', value: 'E1' },
            { label: 'E2', value: 'E2' },
            { label: 'E3', value: 'E3' },
          ]}
          defaultValue={'E1'}
/>
<Combobox label={'List F'}
          alwaysHighlight={true}
          hue={'darker'}
          options={[
            { label: 'F1', value: 'F1' },
            { label: 'F2', value: 'F2' },
            { label: 'F3', value: 'F3' },
          ]}
          defaultValue={'F1'}
/>
<Combobox label={'List G'}
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
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"enableddisabled",children:"Enabled/Disabled"}),l.jsxs(e.p,{children:["Use the ",l.jsx(e.code,{children:"disabled"})," prop with a value of ",l.jsx(e.code,{children:"true"})," or ",l.jsx(e.code,{children:"false"}),` to enable or disable the Combobox. By default, the
`,l.jsx(e.code,{children:"Combobox"})," is enabled."]}),l.jsx("br",{}),l.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[l.jsx(a,{label:"List A",options:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3"}],defaultValue:"A3",disabled:!0}),l.jsx(a,{label:"List B",options:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}],defaultValue:"B2",alwaysHighlight:!0})]}),l.jsx(o,{code:`
<Combobox label={'List A'}
          options={[
            { label: 'A1', value: 'A1' },
            { label: 'A2', value: 'A2' },
            { label: 'A3', value: 'A3' },
          ]}
          defaultValue={'A2'}
          disabled={true}
/>
<Combobox label={'List B'}
          options={[
            { label: 'B1', value: 'B1' },
            { label: 'B2', value: 'B2' },
            { label: 'B3', value: 'B3' },
          ]}
          defaultValue={'B2'}
          alwaysHighlight={true}
/>
`,language:"tsx",dark:!0})]}),`
`,l.jsxs("div",{className:"preview-panel",children:[l.jsx(e.h3,{id:"shrink-label",children:"Shrink Label"}),l.jsxs(e.p,{children:["Set the ",l.jsx(e.code,{children:"shrinkTitle"})," prop to ",l.jsx(e.code,{children:"true"}),` to make the label to shrink or move up when an option is selected or when the
combo box is focused. By default, it's set to `,l.jsx(e.code,{children:"false"}),", keeping the label positioned at the top."]}),l.jsx("br",{}),l.jsxs("div",{className:"flex-horizontal sb-unstyled",children:[l.jsx(a,{style:{width:"10rem"},label:"Label A",options:[{label:"Item 1",value:"I1"},{label:"Item 2",value:"I2"},{label:"Item 3",value:"I3"},{label:"Item 4",value:"I4"}],shrinkTitle:!0}),l.jsx(a,{style:{width:"10rem"},label:"Label B",options:[{label:"Item 1",value:"I1"},{label:"Item 2",value:"I2"},{label:"Item 3",value:"I3"},{label:"Item 4",value:"I4"}],shrinkTitle:!1})]}),l.jsx(o,{code:`
<Combobox style={{ width: '10rem' }}
          label={'Label A'}
          options={[
            { label: 'Item 1', value: 'I1' },
            { label: 'Item 2', value: 'I2' },
            { label: 'Item 3', value: 'I3' },
            { label: 'Item 4', value: 'I4' },
          ]}
          shrinkTitle={true}
/>
<Combobox style={{ width: '10rem' }}
          label={'Label B'}
          options={[
            { label: 'Item 1', value: 'I1' },
            { label: 'Item 2', value: 'I2' },
            { label: 'Item 3', value: 'I3' },
            { label: 'Item 4', value: 'I4' },
          ]}
          shrinkTitle={false}
/>
`,language:"tsx",dark:!0})]})]})}function y(t={}){const{wrapper:e}={...i(),...t.components};return e?l.jsx(e,{...t,children:l.jsx(s,{...t})}):s(t)}export{y as default};
