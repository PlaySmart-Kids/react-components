import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as d}from"./index-BrnU7xv7.js";import{ae as u,af as m}from"./index-DS4mN-Cx.js";import{m as h,L as s,a as i,b as n}from"./List.stories-JNvs3gdJ.js";import{M as r}from"./DefaultThemeProvider-DB5yquFP.js";import"./index-DJO9vBfz.js";import{G as p,a as l}from"./Grid-BE_VkPio.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./DefaultMenu-CabspXGA.js";import"./ColorUtil-B4gL3Pif.js";import"./DomUtil-DAqrhrKT.js";import"./Checkbox-DTNaYHYX.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./useRipple-C4DXtBro.js";import"./Switch-BSBrATWg.js";import"./Button-HS4qhxue.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./Alert-PWQClZnu.js";import"./AlertProvider-CSxl7Bna.js";import"./Accordion-7BL9lYKN.js";import"./Input-BXqaDr0Y.js";import"./InputUtil-CfDwzwTJ.js";import"./PasswordInput-CwZj2So7.js";import"./DateInput-65P20iYT.js";import"./index-CikfRwdJ.js";import"./TagInput-Dk5jByq5.js";import"./ColorChooser-B5FUsHpn.js";import"./index.browser-vcSNLBTf.js";import"./TabPanel-Bk8HrNlW.js";import"./SizeWatcher-BDbsP5oN.js";import"./Tooltip-BaGgYEDs.js";import"./Tooltip.module-D77Rh_bi.js";import"./Combobox-utIsBDyR.js";import"./Timer-h-JiAl7z.js";import"./Slick-B6TBkA8o.js";import"./SlickFixedSize-CAkWqw8N.js";import"./useResizeObserver-vZQY_nc8.js";import"./Popover-BIDVtb57.js";import"./Slider-C3pucIoE.js";import"./IndicatorLabel-DNRmLhG1.js";import"./index-DjY7dx8f.js";import"./RangeSlider-DmSCO4u8.js";import"./MonacoEditor-CCmO9Yxd.js";import"./Highlight-CBFUEUc4.js";import"./Highlight-Qmv9CNvH.js";import"./Form-Bcy91KMB.js";import"./SidebarLayout-DZJ4f7TW.js";import"./TopbarLayout-DAyzHkYU.js";import"./DataTable-B0OTM8aw.js";import"./Table.module-GN5HgtVw.js";import"./Table-fdjFLj9c.js";function c(o){const e={code:"code",h1:"h1",h3:"h3",p:"p",...d(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{Meta:!0,of:h}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h1,{id:"list-component",children:"List Component"}),t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"List"})," component is used to create a vertical list of items in a column, such as a menu."]})]}),`
`,t.jsxs("div",{className:"preview-panel",children:[t.jsx(e.h3,{id:"basic-list",children:"Basic List"}),t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"List"})," component uses ",t.jsx(e.code,{children:"ListItem"})," as its child to build a menu list and ",t.jsx(e.code,{children:"ListDivider"}),` to add horizontal separators
between items. You can customize the list's appearance through various `,t.jsx(e.code,{children:"ListItem"})," props, including ",t.jsx(e.code,{children:"title"}),`,
`,t.jsx(e.code,{children:"subTitle"}),", ",t.jsx(e.code,{children:"color"}),", ",t.jsx(e.code,{children:"hue"}),", ",t.jsx(e.code,{children:"selected"})," (",t.jsx(e.code,{children:"true"})," or ",t.jsx(e.code,{children:"false"})," as a default), ",t.jsx(e.code,{children:"showSolidBackground"})," (",t.jsx(e.code,{children:"true"})," or ",t.jsx(e.code,{children:"false"}),` as a
default), `,t.jsx(e.code,{children:"noRippleEffect"})," (",t.jsx(e.code,{children:"true"})," or ",t.jsx(e.code,{children:"false"})," as a default), and ",t.jsx(e.code,{children:"compact"})," (",t.jsx(e.code,{children:"true"})," or ",t.jsx(e.code,{children:"false"}),` as a default). For
displaying icons, you can specify an icon name (from Material Icons/Symbols) in the `,t.jsx(e.code,{children:"iconStart"})," and ",t.jsx(e.code,{children:"iconEnd"}),` props,
or use custom images as elements in these props. The `,t.jsx(e.code,{children:"alignIcon"})," prop, with options ",t.jsx(e.code,{children:"start"})," (default), ",t.jsx(e.code,{children:"center"}),`, and
`,t.jsx(e.code,{children:"end"}),", allows you to vertically align the icon. The ",t.jsx(e.code,{children:"value"}),` prop specifies the item's value passed to the
`,t.jsx(e.code,{children:"onSelectListItem"}),` event, which is triggered when an item in the List is selected. The following examples demonstrate
its use.`]}),t.jsx("div",{className:"grid-vertical sb-unstyled",style:{background:"white",padding:10},children:t.jsxs(p,{alignItem:"start",spacing:20,children:[t.jsx(l,{sm:12,md:6,lg:4,children:t.jsxs("div",{className:"grid-vertical sb-unstyled",style:{background:"white",padding:10},children:[t.jsx("div",{style:{textAlign:"center"},children:"List 1"}),t.jsx("div",{style:{textAlign:"center",fontSize:12,paddingBottom:20,height:"3rem"},children:t.jsx(e.p,{children:"(List with subtitles and center-aligned custom icons)"})}),t.jsx("div",{children:t.jsxs(s,{onSelectListItem:a=>console.log(a),children:[t.jsx(i,{iconEnd:t.jsx(r,{name:"local_convenience_store",size:30}),alignIcon:"center",title:"title 1",subTitle:"sub 1",value:"item1"}),t.jsx(i,{selected:!0,iconEnd:t.jsx(r,{name:"new_releases",size:30}),alignIcon:"center",title:"title 2",subTitle:"sub 2",value:"item2"}),t.jsx(i,{iconEnd:t.jsx(r,{name:"alarm",size:30}),alignIcon:"center",title:"title 3",subTitle:"sub 3",value:"item3"}),t.jsx(i,{iconEnd:t.jsx(r,{name:"crisis_alert",size:30}),alignIcon:"center",title:"title 4",subTitle:"sub 4",value:"item4"})]})})]})}),t.jsx(l,{sm:12,md:6,lg:4,children:t.jsxs("div",{className:"grid-vertical sb-unstyled",style:{background:"white",padding:10},children:[t.jsx("div",{style:{textAlign:"center"},children:"List 2"}),t.jsx("div",{style:{textAlign:"center",fontSize:12,paddingBottom:20,height:"3rem"},children:t.jsx(e.p,{children:"(List with solid background and no subtitles)"})}),t.jsx("div",{children:t.jsxs(s,{children:[t.jsx(i,{color:"warning",hue:"lighter",iconStart:"public",title:"title 1",subTitle:"",showSolidBackground:!0}),t.jsx(i,{color:"warning",hue:"lighter",iconStart:"star_half",title:"title 2",subTitle:"",showSolidBackground:!0}),t.jsx(i,{color:"warning",hue:"lighter",iconStart:"library_music",title:"title 3",subTitle:"",showSolidBackground:!0}),t.jsx(i,{color:"warning",hue:"lighter",iconStart:"app_registration",title:"title 4",subTitle:"",showSolidBackground:!0}),t.jsx(i,{color:"warning",hue:"lighter",iconStart:"psychology",title:"title 5",subTitle:"",showSolidBackground:!0})]})})]})}),t.jsx(l,{sm:12,md:6,lg:4,children:t.jsxs("div",{className:"grid-vertical sb-unstyled",style:{background:"white",padding:10},children:[t.jsx("div",{style:{textAlign:"center"},children:"List 3"}),t.jsx("div",{style:{textAlign:"center",fontSize:12,paddingBottom:20,height:"3rem"},children:t.jsx(e.p,{children:"(Compact list with dividers)"})}),t.jsx("div",{children:t.jsxs(s,{children:[t.jsx(i,{color:"info",hue:"light",title:"title 1",subTitle:"",compact:!0,showSolidBackground:!0}),t.jsx(n,{showSolidBackground:!0,color:"info",hue:"light"}),t.jsx(i,{color:"info",hue:"light",iconStart:"palette",title:"title 2",subTitle:"",compact:!0,showSolidBackground:!0}),t.jsx(i,{color:"info",hue:"light",iconStart:"imagesmode",title:"title 3",subTitle:"",compact:!0,showSolidBackground:!0}),t.jsx(i,{color:"info",hue:"light",iconStart:"photo_camera",title:"title 4",subTitle:"sub 4",compact:!0,showSolidBackground:!0}),t.jsx(n,{showSolidBackground:!0,color:"info",hue:"light"}),t.jsx(i,{color:"info",hue:"light",iconEnd:"stacked_email",title:"title 5",subTitle:"sub 5",compact:!0,showSolidBackground:!0})]})})]})})]})}),t.jsx(m,{code:`
<div>
  <List onSelectListItem={(value) => console.log(value)}>
    <ListItem
      iconEnd={<MatSymbol name={'local_convenience_store'} size={30} />}
      alignIcon={'center'}
      title={'title 1'}
      subTitle={'sub 1'}
      value={'item1'}
    />
    <ListItem
      selected={true}
      iconEnd={<MatSymbol name={'new_releases'} size={30} />}
      alignIcon={'center'}
      title={'title 2'}
      subTitle={'sub 2'}
      value={'item2'}
    />
    <ListItem
      iconEnd={<MatSymbol name={'alarm'} size={30} />}
      alignIcon={'center'}
      title={'title 3'}
      subTitle={'sub 3'}
      value={'item3'}
    />
    <ListItem
      iconEnd={<MatSymbol name={'crisis_alert'} size={30} />}
      alignIcon={'center'}
      title={'title 4'}
      subTitle={'sub 4'}
      value={'item4'}
    />
  </List>
</div>
<div>
  <List>
    <ListItem
      color={'warning'}
      hue={'lighter'}
      iconStart={'public'}
      title={'title 1'}
      subTitle={''}
      showSolidBackground={true}
    />
    <ListItem
      color={'warning'}
      hue={'lighter'}
      iconStart={'star_half'}
      title={'title 2'}
      subTitle={''}
      showSolidBackground={true}
    />
    <ListItem
      color={'warning'}
      hue={'lighter'}
      iconStart={'library_music'}
      title={'title 3'}
      subTitle={''}
      showSolidBackground={true}
    />
    <ListItem
      color={'warning'}
      hue={'lighter'}
      iconStart={'app_registration'}
      title={'title 4'}
      subTitle={''}
      showSolidBackground={true}
    />
    <ListItem
      color={'warning'}
      hue={'lighter'}
      iconStart={'psychology'}
      title={'title 5'}
      subTitle={''}
      showSolidBackground={true}
    />
  </List>
</div>
<div>
  <List>
    <ListItem
      color={'info'}
      hue={'light'}
      title={'title 1'}
      subTitle={''}
      compact={true}
      showSolidBackground={true}
    />
    <ListDivider
      showSolidBackground={true}
      color={'info'}
      hue={'light'}
    />
    <ListItem
      color={'info'}
      hue={'light'}
      iconStart={'palette'}
      title={'title 2'}
      subTitle={''}
      compact={true}
      showSolidBackground={true}
    />
    <ListItem
      color={'info'}
      hue={'light'}
      iconStart={'imagesmode'}
      title={'title 3'}
      subTitle={''}
      compact={true}
      showSolidBackground={true}
    />
    <ListItem
      color={'info'}
      hue={'light'}
      iconStart={'photo_camera'}
      title={'title 4'}
      subTitle={'sub 4'}
      compact={true}
      showSolidBackground={true}
    />
    <ListDivider
      showSolidBackground={true}
      color={'info'}
      hue={'light'}
    />
    <ListItem
      color={'info'}
      hue={'light'}
      iconEnd={'stacked_email'}
      title={'title 5'}
      subTitle={'sub 5'}
      compact={true}
      showSolidBackground={true}
    />
  </List>
</div>
`,language:"tsx",dark:!0})]})]})}function It(o={}){const{wrapper:e}={...d(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(c,{...o})}):c(o)}export{It as default};
