import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as p}from"./index-BrnU7xv7.js";import{ae as r,af as a}from"./index-DS4mN-Cx.js";import m from"./Slick.stories-CONjrWpS.js";import{S as n}from"./Slick-B6TBkA8o.js";import{A as s}from"./Alert-PWQClZnu.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./index.browser-vcSNLBTf.js";import"./Button-HS4qhxue.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";function o(t){const i={code:"code",h1:"h1",h3:"h3",p:"p",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{Meta:!0,of:m}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h1,{id:"slick-component",children:"Slick Component"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Slick"}),` component allows users to create responsive and customizable carousels for displaying images, content, or
other elements in a visually appealing way. This `,e.jsx(i.code,{children:"Slick"})," component displays a specified number of content items, with each item's width adapting to the container's size. Here's a simple example of how to apply it."]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h3,{id:"basic-slick",children:"Basic Slick"}),e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Slick"})," component provides animation effects like ",e.jsx(i.code,{children:"slide"})," (default) and ",e.jsx(i.code,{children:"fade"})," using the ",e.jsx(i.code,{children:"animationType"}),` prop. Use
the `,e.jsx(i.code,{children:"itemsPerPage"})," prop to set the number of items displayed at once, and ",e.jsx(i.code,{children:"skipItems"}),` to control how many items are
skipped between views. You can also adjust the spacing between content and the arrows using the `,e.jsx(i.code,{children:"inlinePadding"}),`
prop and use the `,e.jsx(i.code,{children:"animationSpeedInMs"})," (in milliseconds) prop to control the scrolling animation speed."]}),e.jsx("div",{className:"grid-vertical sb-unstyled",children:e.jsxs(n,{animationType:"slide",itemsPerPage:3,skipItems:1,animationSpeedInMs:500,inlinePadding:50,children:[e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen01.png",width:"100%",alt:"image01"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen02.png",width:"100%",alt:"image02"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen03.png",width:"100%",alt:"image03"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen04.png",width:"100%",alt:"image04"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen05.png",width:"100%",alt:"image05"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen06.png",width:"100%",alt:"image06"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen07.png",width:"100%",alt:"image07"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen08.png",width:"100%",alt:"image08"}),e.jsx("img",{src:"https://playsmart-kids.appspot.com/images/screen09.png",width:"100%",alt:"image09"})]})}),e.jsx(a,{code:`
<Slick animationType={'slide'}
       itemsPerPage={3}
       skipItems={1}
       animationSpeedInMs={500}
       inlinePadding={50}
>
  <img
    src={'https://playsmart-kids.appspot.com/images/screen01.png'}
    width={'100%'}
    alt={'image01'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen02.png'}
    width={'100%'}
    alt={'image02'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen03.png'}
    width={'100%'}
    alt={'image03'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen04.png'}
    width={'100%'}
    alt={'image04'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen05.png'}
    width={'100%'}
    alt={'image05'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen06.png'}
    width={'100%'}
    alt={'image06'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen07.png'}
    width={'100%'}
    alt={'image07'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen08.png'}
    width={'100%'}
    alt={'image08'}
  />
  <img
    src={'https://playsmart-kids.appspot.com/images/screen09.png'}
    width={'100%'}
    alt={'image09'}
  />
</Slick>
`,language:"tsx",dark:!0})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(i.h3,{id:"infinite-looping-and-autoplay",children:"Infinite Looping and Autoplay"}),e.jsxs(i.p,{children:["Set the ",e.jsx(i.code,{children:"infiniteScroll"})," prop to ",e.jsx(i.code,{children:"true"})," to make the slide loop infinitely and you can use ",e.jsx(i.code,{children:"animationTimeout"}),` (in
milliseconds) to make the slides transition automatically, which the `,e.jsx(i.code,{children:"Slick"}),` does not
automatically play or loop the content by default.`]}),e.jsx("div",{className:"grid-vertical sb-unstyled",style:{padding:30},children:e.jsxs(n,{animationSpeedInMs:500,inlinePadding:50,animationType:"slide",itemsPerPage:1,skipItems:1,infiniteScroll:!0,animationTimeout:2e3,children:[e.jsx("div",{children:e.jsx(s,{variant:"two_tones",title:"Autoplay",message:"Slideshow #1",noIcon:!0})}),e.jsx("div",{children:e.jsx(s,{variant:"two_tones",title:"Autoplay",message:"Slideshow #2",noIcon:!0})}),e.jsx("div",{children:e.jsx(s,{variant:"two_tones",title:"Autoplay",message:"Slideshow #3",noIcon:!0})}),e.jsx("div",{children:e.jsx(s,{variant:"outlined",title:"Autoplay",message:"Slideshow #4",noIcon:!0})}),e.jsx("div",{children:e.jsx(s,{variant:"outlined",title:"Autoplay",message:"Slideshow #5",noIcon:!0})})]})}),e.jsx(a,{code:`
<Slick animationSpeedInMs={500}
       inlinePadding={50}
       animationType={'slide'}
       itemsPerPage={1}
       skipItems={1}
       infiniteScroll={true}
       animationTimeout={2000}
>
  <div><Alert variant="two_tones" title={'Autoplay'} message={'Slideshow #1'} noIcon={true} /></div>
  <div><Alert variant="two_tones" title={'Autoplay'} message={'Slideshow #2'} noIcon={true} /></div>
  <div><Alert variant="two_tones" title={'Autoplay'} message={'Slideshow #3'} noIcon={true} /></div>
  <div><Alert variant="outlined" title={'Autoplay'} message={'Slideshow #4'} noIcon={true} /></div>
  <div><Alert variant="outlined" title={'Autoplay'} message={'Slideshow #5'} noIcon={true} /></div>
</Slick>
`,language:"tsx",dark:!0})]})]})}function H(t={}){const{wrapper:i}={...p(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{H as default};
