import{a as h,j as c}from"./DefaultThemeProvider-BRxWeqUn.js";import{r as n}from"./index-BwDkhjyp.js";import{f as q,g as k,A as R,E as V,h as i,e as u,a as L,O as b,F as w,M as B}from"./ProfileLink-D-xyNnIs.js";import{P}from"./ColorUtil-BMWlsUCS.js";import{B as z}from"./Button-BUJJgbwE.js";import"./IconButton-CNCH4a3g.js";import"./RadioButton-5xi1FwvH.js";import"./AlertButton-CMwO_hgE.js";import"./ActionBar-BCreBf28.js";var _=(e=>(e.OUTLINED="outlined",e.FILLED="filled",e.TWO_TONES="two_tones",e))(_||{});function $(e){return e===void 0?"filled":e}const M="_Root_1dtyo_1",j={Root:M},D="_Root_6isq6_1",O="_Hide_6isq6_18",x="_IconSection_6isq6_22",G="_MessageSection_6isq6_27",F="_ActionSection_6isq6_32",m={Root:D,Hide:O,IconSection:x,MessageSection:G,ActionSection:F};function T(e){const{message:S,title:p,timeout:r,closeLabel:f,onClosed:a}=e,[s,g]=n.useState(!0),y=n.useRef(null),l=[m.Root],H=["subtitle1"],N=["body2"],t=q(e.color),o=k(e.hue),C=$(e.variant),A=R(e.shadowSize);let d;A>0&&l.push(V(A,t)),C===_.FILLED?(l.push(i("Background",t,o)),l.push(i("Border",t,o)),o===u.MAIN?(d="var(--common-white)",l.push(L[`Color-${t}-white`])):(d=`var(--${t}-${b[o]})`,l.push(i("Color",t,b[o])))):C===_.OUTLINED?(d=P(t,o),l.push(i("Border",t,o)),l.push(L["Background-transparent"]),l.push(i("Color",t,o))):(l.push(i("Border",t,o)),l.push(i("Color",t,o)),d=`var(--${t}-${o})`,o===u.LIGHTEST||o===u.LIGHTER||o===u.LIGHT?l.push(i("Background-alpha",t,u.LIGHTEST)):l.push(i("Background",t,u.LIGHTEST)));const v=n.useCallback(()=>{if(y.current!==null){const I=y.current;I.classList.toggle(m.Hide),setTimeout(()=>{I.classList.toggle(m.Hide),a&&a(),g(!1)},300)}else a&&a(),g(!1)},[]);return n.useEffect(()=>{g(!0)},[S,p]),n.useEffect(()=>{r&&r>0&&setTimeout(()=>{v()},r)},[v,r]),s?h("div",{className:l.join(" "),ref:y,children:[c("div",{className:m.IconSection,children:c(w,{iconSize:24,color:t,iconColor:d})}),h("div",{className:m.MessageSection,children:[e.title&&e.title!==""&&c("p",{className:H.join(" "),children:e.title}),c("p",{className:N.join(" "),children:e.message})]}),r!==void 0&&r>=0&&h("div",{className:m.ActionSection,children:[f&&c(z,{size:"small",color:t,hue:C===_.FILLED?u.WHITE:u.DARK,variant:"outlined",onClick:v,children:f}),!f&&c(B,{name:"cancel",onClick:v,color:d,size:24})]})]}):null}try{T.displayName="Alert",T.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},shadowSize:{defaultValue:null,description:"",name:"shadowSize",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"}]}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!1,type:{name:"number"}},closeLabel:{defaultValue:null,description:"",name:"closeLabel",required:!1,type:{name:"string"}},onClosed:{defaultValue:null,description:"",name:"onClosed",required:!1,type:{name:"(() => void)"}}}}}catch{}const U=n.createContext({addAlert:e=>{console.log(e)}});function E(e){const[S,p]=n.useState([]),r=n.useCallback(a=>{p(s=>[...s,a])},[]),f=n.useCallback(a=>{p(s=>(s.splice(a,1),[...s]))},[]);return h(U.Provider,{value:{addAlert:r},children:[c("div",{className:j.Root,children:S.map((a,s)=>c(T,{...a,onClosed:()=>{f(s)}},`alert_${s}`))}),e.children]})}try{E.displayName="AlertProvider",E.__docgenInfo={description:"",displayName:"AlertProvider",props:{}}}catch{}export{E as A,U as a,T as b};
