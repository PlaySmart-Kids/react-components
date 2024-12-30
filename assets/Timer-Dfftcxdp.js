import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as o}from"./index-BrnU7xv7.js";import{ae as a,af as c}from"./index-DS4mN-Cx.js";import l from"./Timer.stories-CXZaAUke.js";import{T as i}from"./Timer-h-JiAl7z.js";import"./index-DJO9vBfz.js";import"./iframe-ByIxP18h.js";import"../sb-preview/runtime.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./DefaultThemeProvider-DB5yquFP.js";import"./index-CikfRwdJ.js";function r(s){const t={code:"code",h1:"h1",h3:"h3",p:"p",span:"span",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{Meta:!0,of:l}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h1,{id:"timer-component",children:"Timer Component"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Timer"})," component is used to display countdowns or count-up timers. Here's a practical example."]})]}),`
`,e.jsxs("div",{className:"preview-panel",children:[e.jsx(t.h3,{id:"basic-timer",children:"Basic Timer"}),e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Timer"})," component provides the ",e.jsx(t.code,{children:"untilTimeInMs"}),` prop to set the countdown start time in milliseconds and the
`,e.jsx(t.code,{children:"waitInMS"}),` prop to define the time interval between updates, also in milliseconds. By default, the timer functions as
a countdown, but you can set the `,e.jsx(t.code,{children:"countUp"})," prop to ",e.jsx(t.code,{children:"true"})," to switch it to a count-up timer. The ",e.jsx(t.code,{children:"renderer"}),` prop allows
you to add a custom component for the timer display, with `,e.jsx(t.code,{children:"timeData"}),` as a parameter representing the current time
values.`]}),e.jsx("br",{}),e.jsxs("div",{className:"grid-vertical sb-unstyled",children:[e.jsxs("div",{className:"flex-horizontal sb-unstyled full-width",style:{padding:10},children:[e.jsx("div",{style:{width:"15rem",fontSize:20},children:"[ Countdown Timer ]"}),e.jsx(i,{countUp:!1,untilTimeInMs:new Date().getTime()+1*60*1e3,waitInMS:1e3,renderer:n=>n?e.jsxs(t.span,{style:{fontSize:40,color:"black"},children:[n.mins," : ",n.secs<10?"0"+n.secs:n.secs]}):null})]}),e.jsxs("div",{className:"flex-horizontal sb-unstyled full-width",style:{padding:10},children:[e.jsx("div",{style:{width:"15rem",fontSize:20},children:"[ Count-Up Timer ]"}),e.jsx(i,{countUp:!0,untilTimeInMs:new Date().getTime()+1*60*1e3,waitInMS:1e3,renderer:n=>n?e.jsxs(t.span,{style:{fontSize:40,color:"blue"},children:[n.mins," : ",n.secs<10?"0"+n.secs:n.secs]}):null})]})]}),e.jsx(c,{code:`
<Timer
  countUp={false}
  untilTimeInMs={new Date().getTime() + 1 * 60 * 1000}
  waitInMS={1000}
  renderer={(timeData) => {
    return timeData ? (
      <span style={{ fontSize: 40, color: 'black' }}>
        {timeData.mins} : {timeData.secs < 10 ? '0' + timeData.secs : timeData.secs}
      </span>
    ) : null;
  }}
/>
<Timer
  countUp={true}
  untilTimeInMs={new Date().getTime() + 1 * 60 * 1000}
  waitInMS={1000}
  renderer={(timeData) => {
    return timeData ? (
      <span style={{ fontSize: 40, color: 'blue' }}>
        {timeData.mins} : {timeData.secs < 10 ? '0' + timeData.secs : timeData.secs}
      </span>
    ) : null;
  }}
/>
`,language:"tsx",dark:!0})]})]})}function D(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{D as default};
