import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as c,af as r}from"./index-DS4mN-Cx.js";import o from"./Grid.stories-dmYWfGAb.js";import{G as d,a as t}from"./Grid-BE_VkPio.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./index-DJbli8uv.js";import"./SizeWatcher-BDbsP5oN.js";import"./DomUtil-DAqrhrKT.js";function l(n){const i={code:"code",h1:"h1",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{Meta:!0,of:o}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h1,{id:"grid-component",children:"Grid Component"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Grid"}),` component is a layout control that organizes child components into a responsive grid that automatically
adjusts to various screen sizes and orientations. This `,e.jsx(i.code,{children:"Grid"}),` layout uses a horizontal arrangement, where the main
axis is horizontal, and the cross axis is vertical. Here's a demonstration of how it works.`]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h3,{id:"basic-grid",children:"Basic Grid"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Grid"})," component includes ",e.jsx(i.code,{children:"GridItem"})," as its child component to create columns and rows. Use the ",e.jsx(i.code,{children:"spacing"}),` prop to
add space between items both horizontally and vertically, with a maximum value of 4. To control specific directions,
use `,e.jsx(i.code,{children:"columnSpacing"})," for horizontal spacing (left/right) and ",e.jsx(i.code,{children:"rowSpacing"})," for vertical spacing (top/bottom)."]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",style:{background:"black",padding:10},children:[e.jsxs(d,{spacing:2,children:[e.jsx(t,{sm:3,md:2,children:e.jsx("div",{style:{background:"deepskyblue",textAlign:"center"},children:"Col 1"})}),e.jsx(t,{sm:3,md:4,children:e.jsx("div",{style:{background:"deepskyblue",textAlign:"center"},children:"Col 2"})}),e.jsx(t,{sm:3,md:4,children:e.jsx("div",{style:{background:"deepskyblue",textAlign:"center"},children:"Col 3"})}),e.jsx(t,{sm:3,md:2,children:e.jsx("div",{style:{background:"deepskyblue",textAlign:"center"},children:"Col 4"})})]}),e.jsxs(d,{rowSpacing:4,columnSpacing:0,children:[e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"#00cc00",textAlign:"center"},children:"Col 1"})}),e.jsx(t,{sm:4,md:6,children:e.jsx("div",{style:{background:"palegreen",textAlign:"center"},children:"Col 2"})}),e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"#00cc00",textAlign:"center"},children:"Col 3"})})]}),e.jsxs(d,{rowSpacing:0,columnSpacing:4,children:[e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"mediumpurple",textAlign:"center"},children:"Col 1"})}),e.jsx(t,{sm:4,md:6,children:e.jsx("div",{style:{background:"mediumpurple",textAlign:"center"},children:"Col 2"})}),e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"mediumpurple",textAlign:"center"},children:"Col 3"})})]})]}),e.jsx(r,{code:`
<div style={{ background: 'black', padding: 10 }}>
    <Grid spacing={2}>
      <GridItem sm={3} md={2}>
        <div style={{ background: 'deepskyblue', textAlign: 'center' }}>Col 1</div>
      </GridItem>
      <GridItem sm={3} md={4}>
        <div style={{ background: 'deepskyblue', textAlign: 'center' }}>Col 2</div>
      </GridItem>
      <GridItem sm={3} md={4}>
        <div style={{ background: 'deepskyblue', textAlign: 'center' }}>Col 3</div>
      </GridItem>
      <GridItem sm={3} md={2}>
        <div style={{ background: 'deepskyblue', textAlign: 'center' }}>Col 4</div>
      </GridItem>
    </Grid>
    <Grid rowSpacing={4} columnSpacing={0}>
      <GridItem sm={4} md={3}>
        <div style={{ background: '#00cc00', textAlign: 'center' }}>Col 1</div>
      </GridItem>
      <GridItem sm={4} md={6}>
        <div style={{ background: 'palegreen', textAlign: 'center' }}>Col 2</div>
      </GridItem>
      <GridItem sm={4} md={3}>
        <div style={{ background: '#00cc00', textAlign: 'center' }}>Col 3</div>
      </GridItem>
    </Grid>
    <Grid rowSpacing={0} columnSpacing={4}>
      <GridItem sm={4} md={3}>
        <div style={{ background: 'mediumpurple', textAlign: 'center' }}>Col 1</div>
      </GridItem>
      <GridItem sm={4} md={6}>
        <div style={{ background: 'mediumpurple', textAlign: 'center' }}>Col 2</div>
      </GridItem>
      <GridItem sm={4} md={3}>
        <div style={{ background: 'mediumpurple', textAlign: 'center' }}>Col 3</div>
      </GridItem>
    </Grid>
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h3,{id:"item-alignment",children:"Item Alignment"}),e.jsxs(i.p,{children:["Use the ",e.jsx(i.code,{children:"justifyContent"})," to align items along the main axis, with options such as ",e.jsx(i.code,{children:"start"}),", ",e.jsx(i.code,{children:"center"})," and ",e.jsx(i.code,{children:"end"}),`. Use the
`,e.jsx(i.code,{children:"alignItem"})," to align items along the cross axis, with ",e.jsx(i.code,{children:"start"}),",",e.jsx(i.code,{children:"center"}),", ",e.jsx(i.code,{children:"end"})," and ",e.jsx(i.code,{children:"baseline"})," options. The ",e.jsx(i.code,{children:"baseline"}),`
option in `,e.jsx(i.code,{children:"alignItem"})," aligns items along the text baseline, whereas the ",e.jsx(i.code,{children:"start"}),` option aligns items to the starting
edge
of their cell.`]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",style:{background:"black",padding:10},children:[e.jsxs(d,{justifyContent:"start",children:[e.jsx(t,{sm:4,md:6,children:e.jsx("div",{style:{background:"lightskyblue",textAlign:"center"},children:"justifyContent: 'start'"})}),e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"deepskyblue",textAlign:"center"},children:"Col 2"})})]}),e.jsxs(d,{justifyContent:"center",children:[e.jsx(t,{sm:3,md:2,children:e.jsx("div",{style:{background:"mediumpurple",textAlign:"center"},children:"Col 1"})}),e.jsx(t,{sm:4,md:6,children:e.jsx("div",{style:{background:"#b79fe7",textAlign:"center"},children:"justifyContent: 'center'"})}),e.jsx(t,{sm:3,md:2,children:e.jsx("div",{style:{background:"mediumpurple",textAlign:"center"},children:"Col 3"})})]}),e.jsxs(d,{justifyContent:"end",children:[e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"#ff9700",textAlign:"center"},children:"Col 1"})}),e.jsx(t,{sm:4,md:6,children:e.jsx("div",{style:{background:"gold",textAlign:"center"},children:"justifyContent: 'end'"})})]}),e.jsxs(d,{alignItem:"start",children:[e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"#00e600",textAlign:"center"},children:"alignItem: 'start'"})}),e.jsxs(t,{sm:4,md:4,children:[e.jsx("div",{style:{background:"#b1ffb1",textAlign:"center"},children:"Col 2"}),e.jsx("div",{style:{background:"#b1ffb1",textAlign:"center"},children:"Col 2"})]}),e.jsxs(t,{sm:4,md:5,children:[e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:"Col 3"}),e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:"Col 3"}),e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:"Col 3"})]})]}),e.jsxs(d,{alignItem:"center",children:[e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"#00e600",textAlign:"center"},children:"Col 1"})}),e.jsxs(t,{sm:4,md:4,children:[e.jsx("div",{style:{background:"#b1ffb1",textAlign:"center"},children:"alignItem: 'center'"}),e.jsx("div",{style:{background:"#b1ffb1",textAlign:"center"},children:" "})]}),e.jsxs(t,{sm:4,md:5,children:[e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:"Col 3"}),e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:"Col 3"}),e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:"Col 3"})]})]}),e.jsxs(d,{alignItem:"end",children:[e.jsx(t,{sm:4,md:3,children:e.jsx("div",{style:{background:"#00e600",textAlign:"center"},children:"Col 1"})}),e.jsxs(t,{sm:4,md:4,children:[e.jsx("div",{style:{background:"#b1ffb1",textAlign:"center"},children:"Col 2"}),e.jsx("div",{style:{background:"#b1ffb1",textAlign:"center"},children:"Col 2"})]}),e.jsxs(t,{sm:4,md:5,children:[e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:" "}),e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:" "}),e.jsx("div",{style:{background:"#00ab00",textAlign:"center"},children:"alignItem: 'end'"})]})]}),e.jsx("br",{}),e.jsxs(d,{alignItem:"baseline",spacing:10,children:[e.jsx(t,{sm:3,md:3,children:e.jsx("div",{style:{background:"whitesmoke",textAlign:"center",fontSize:30,lineHeight:"5rem"},children:"Col 1"})}),e.jsx(t,{sm:4,md:4,children:e.jsx("div",{style:{background:"whitesmoke",textAlign:"center",fontSize:16,lineHeight:"2rem"},children:e.jsx(i.p,{children:"alignItem: 'baseline'"})})}),e.jsx(t,{sm:2,md:2,children:e.jsx("div",{style:{background:"whitesmoke",textAlign:"center",fontSize:22,lineHeight:"4rem"},children:"Col 3"})}),e.jsx(t,{sm:3,md:3,children:e.jsx("div",{style:{background:"whitesmoke",textAlign:"center",fontSize:40,lineHeight:"7rem"},children:"Col 4"})})]})]}),e.jsx(r,{code:`
<div style={{ background: 'black', padding: 10 }}>
    <Grid justifyContent={'start'}>
      <GridItem sm={4} md={6}>
        <div style={{ background: 'lightskyblue', textAlign: 'center' }}>justifyContent: 'start'</div>
      </GridItem>
      <GridItem sm={4} md={3}>
        <div style={{ background: 'deepskyblue', textAlign: 'center' }}>Col 2</div>
      </GridItem>
    </Grid>
    <Grid justifyContent={'center'}>
      <GridItem sm={3} md={2}>
        <div style={{ background: 'mediumpurple', textAlign: 'center' }}>Col 1</div>
      </GridItem>
      <GridItem sm={4} md={6}>
        <div style={{ background: '#b79fe7', textAlign: 'center' }}>justifyContent: 'center'</div>
      </GridItem>
      <GridItem sm={3} md={2}>
        <div style={{ background: 'mediumpurple', textAlign: 'center' }}>Col 3</div>
      </GridItem>
    </Grid>
    <Grid justifyContent={'end'}>
      <GridItem sm={4} md={3}>
        <div style={{ background: '#ff9700', textAlign: 'center' }}>Col 1</div>
      </GridItem>
      <GridItem sm={4} md={6}>
        <div style={{ background: 'gold', textAlign: 'center' }}>justifyContent: 'end'</div>
      </GridItem>
    </Grid>
    <Grid alignItem={'start'}>
      <GridItem sm={4} md={3}>
        <div style={{ background: '#00e600', textAlign: 'center' }}>alignItem: 'start'</div>
      </GridItem>
      <GridItem sm={4} md={4}>
        <div style={{ background: '#b1ffb1', textAlign: 'center' }}>Col 2</div>
        <div style={{ background: '#b1ffb1', textAlign: 'center' }}>Col 2</div>
      </GridItem>
      <GridItem sm={4} md={5}>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>Col 3</div>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>Col 3</div>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>Col 3</div>
      </GridItem>
    </Grid>
    <Grid alignItem={'center'}>
      <GridItem sm={4} md={3}>
        <div style={{ background: '#00e600', textAlign: 'center' }}>Col 1</div>
      </GridItem>
      <GridItem sm={4} md={4}>
        <div style={{ background: '#b1ffb1', textAlign: 'center' }}>alignItem: 'center'</div>
        <div style={{ background: '#b1ffb1', textAlign: 'center' }}>&nbsp;</div>
      </GridItem>
      <GridItem sm={4} md={5}>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>Col 3</div>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>Col 3</div>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>Col 3</div>
      </GridItem>
    </Grid>
    <Grid alignItem={'end'}>
      <GridItem sm={4} md={3}>
        <div style={{ background: '#00e600', textAlign: 'center' }}>Col 1</div>
      </GridItem>
      <GridItem sm={4} md={4}>
        <div style={{ background: '#b1ffb1', textAlign: 'center' }}>Col 2</div>
        <div style={{ background: '#b1ffb1', textAlign: 'center' }}>Col 2</div>
      </GridItem>
      <GridItem sm={4} md={5}>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>&nbsp;</div>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>&nbsp;</div>
        <div style={{ background: '#00ab00', textAlign: 'center' }}>alignItem: 'end'</div>
      </GridItem>
    </Grid>
    <br />
    <Grid alignItem={'baseline'} spacing={10}>
      <GridItem sm={3} md={3}>
        <div style={{ background: 'whitesmoke', textAlign: 'center', fontSize: 30, lineHeight: '5rem' }}>Col 1</div>
      </GridItem>
      <GridItem sm={4} md={4}>
        <div style={{ background: 'whitesmoke', textAlign: 'center', fontSize: 16, lineHeight: '2rem' }}>
          alignItem: 'baseline'
        </div>
      </GridItem>
      <GridItem sm={2} md={2}>
        <div style={{ background: 'whitesmoke', textAlign: 'center', fontSize: 22, lineHeight: '4rem' }}>Col 3</div>
      </GridItem>
      <GridItem sm={3} md={3}>
        <div style={{ background: 'whitesmoke', textAlign: 'center', fontSize: 40, lineHeight: '7rem' }}>Col 4</div>
      </GridItem>
    </Grid>
</div>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h3,{id:"nested-grids",children:"Nested Grids"}),e.jsx(i.p,{children:`A nested grid refers to a grid within a grid. In layout design, you can place one Grid component inside another to
create multi-level structures. Nested grids are useful for complex layouts with varying alignments, spacing, or
element groupings within the main grid layout.`}),e.jsx("br",{}),e.jsx("div",{className:"grid-vertical sb-unstyled",style:{background:"black",padding:10},children:e.jsxs(d,{justifyContent:"center",alignItem:"end",columnSpacing:10,children:[e.jsx(t,{sm:10,md:6,children:e.jsxs(d,{alignItem:"end",children:[e.jsx(t,{sm:2,md:3,children:e.jsx("div",{style:{background:"orchid",textAlign:"center"},children:"X"})}),e.jsxs(t,{sm:2,md:3,children:[e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"})]}),e.jsxs(t,{sm:2,md:3,children:[e.jsx("div",{style:{background:"orchid",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"orchid",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"orchid",textAlign:"center"},children:"X"})]}),e.jsxs(t,{sm:2,md:3,children:[e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"})]}),e.jsxs(t,{sm:2,md:3,children:[e.jsx("div",{style:{background:"orchid",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"orchid",textAlign:"center"},children:"X"})]}),e.jsxs(t,{sm:2,md:3,children:[e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"}),e.jsx("div",{style:{background:"#f199f1",textAlign:"center"},children:"X"})]})]})}),e.jsx(t,{sm:10,md:6,children:e.jsxs(d,{alignItem:"end",children:[e.jsx(t,{sm:2,md:3,children:e.jsx("div",{style:{background:"violet",textAlign:"center"},children:"Col 1"})}),e.jsx(t,{sm:2,md:3,children:e.jsx("div",{style:{background:"#f4aff4",textAlign:"center"},children:"Col 2"})}),e.jsx(t,{sm:2,md:3,children:e.jsx("div",{style:{background:"violet",textAlign:"center"},children:"Col 3"})}),e.jsx(t,{sm:2,md:3,children:e.jsx("div",{style:{background:"#f4aff4",textAlign:"center"},children:"Col 4"})}),e.jsx(t,{sm:2,md:3,children:e.jsx("div",{style:{background:"violet",textAlign:"center"},children:"Col 5"})}),e.jsx(t,{sm:2,md:3,children:e.jsx("div",{style:{background:"#f4aff4",textAlign:"center"},children:"Col 6"})})]})})]})}),e.jsx(r,{code:`
<div style={{ background: 'black', padding: 10 }}>
    <Grid justifyContent={'center'} alignItem={'end'} columnSpacing={10}>
      <GridItem sm={10} md={6}>
        <Grid alignItem={'end'}>
          <GridItem sm={2} md={3}>
            <div style={{ background: 'orchid', textAlign: 'center' }}>X</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: 'orchid', textAlign: 'center' }}>X</div>
            <div style={{ background: 'orchid', textAlign: 'center' }}>X</div>
            <div style={{ background: 'orchid', textAlign: 'center' }}>X</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: 'orchid', textAlign: 'center' }}>X</div>
            <div style={{ background: 'orchid', textAlign: 'center' }}>X</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
            <div style={{ background: '#f199f1', textAlign: 'center' }}>X</div>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem sm={10} md={6}>
        <Grid alignItem={'end'}>
          <GridItem sm={2} md={3}>
            <div style={{ background: 'violet', textAlign: 'center' }}>Col 1</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: '#f4aff4', textAlign: 'center' }}>Col 2</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: 'violet', textAlign: 'center' }}>Col 3</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: '#f4aff4', textAlign: 'center' }}>Col 4</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: 'violet', textAlign: 'center' }}>Col 5</div>
          </GridItem>
          <GridItem sm={2} md={3}>
            <div style={{ background: '#f4aff4', textAlign: 'center' }}>Col 6</div>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
</div>
`,language:"tsx",dark:!0})]})]})}function C(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{C as default};
