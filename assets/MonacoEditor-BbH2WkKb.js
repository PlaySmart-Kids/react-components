import{f as k,g as M,H as P,I as $,h as m,m as f,c as J,O as w,a as z,j as c,J as j,M as B}from"./DefaultThemeProvider-CceS3XqJ.js";import{r,R as N}from"./index-BwDkhjyp.js";import{P as O}from"./ColorUtil-BhNK3fl1.js";import{B as D}from"./Button-DWdng8ry.js";import"./IconButton-CV0o4IDr.js";import"./RadioButton-L8TSjxiY.js";import"./AlertButton-Bl5qQM9O.js";import"./ActionBar-lQzOkDNJ.js";import{r as L}from"./TabPanel-Dtub5vqz.js";import{G as h}from"./DomUtil-Bdo5KM9z.js";import{M as F}from"./Highlight-BYFZzPJH.js";var x=(e=>(e.OUTLINED="outlined",e.FILLED="filled",e.TWO_TONES="two_tones",e))(x||{});function W(e){return e===void 0?"filled":e}const U="_Root_1dtyo_1",K={Root:U},Q="_Root_6isq6_1",X="_Hide_6isq6_18",Y="_IconSection_6isq6_22",Z="_MessageSection_6isq6_27",ee="_ActionSection_6isq6_32",I={Root:Q,Hide:X,IconSection:Y,MessageSection:Z,ActionSection:ee};function V(e){const{message:a,title:t,timeout:s,closeLabel:d,onClosed:u}=e,[o,p]=r.useState(!0),_=r.useRef(null),l=[I.Root],v=["subtitle1"],q=["body2"],n=k(e.color),i=M(e.hue),C=W(e.variant),E=P(e.shadowSize);let y;E>0&&l.push($(E,n)),C===x.FILLED?(l.push(m("Background",n,i)),l.push(m("Border",n,i)),i===f.MAIN?(y="var(--common-white)",l.push(J[`Color-${n}-white`])):(y=`var(--${n}-${w[i]})`,l.push(m("Color",n,w[i])))):C===x.OUTLINED?(y=O(n,i),l.push(m("Border",n,i)),l.push(J["Background-transparent"]),l.push(m("Color",n,i))):(l.push(m("Border",n,i)),l.push(m("Color",n,i)),y=`var(--${n}-${i})`,i===f.LIGHTEST||i===f.LIGHTER||i===f.LIGHT?l.push(m("Background-alpha",n,f.LIGHTEST)):l.push(m("Background",n,f.LIGHTEST)));const S=r.useCallback(()=>{if(_.current!==null){const T=_.current;T.classList.toggle(I.Hide),setTimeout(()=>{T.classList.toggle(I.Hide),u&&u(),p(!1)},300)}else u&&u(),p(!1)},[]);return r.useEffect(()=>{p(!0)},[a,t]),r.useEffect(()=>{s&&s>0&&setTimeout(()=>{S()},s)},[S,s]),o?z("div",{className:l.join(" "),ref:_,children:[c("div",{className:I.IconSection,children:c(j,{iconSize:24,color:n,iconColor:y})}),z("div",{className:I.MessageSection,children:[e.title&&e.title!==""&&c("p",{className:v.join(" "),children:e.title}),c("p",{className:q.join(" "),children:e.message})]}),s!==void 0&&s>=0&&z("div",{className:I.ActionSection,children:[d&&c(D,{size:"small",color:n,hue:C===x.FILLED?f.WHITE:f.DARK,variant:"outlined",onClick:S,children:d}),!d&&c(B,{name:"cancel",onClick:S,color:y,size:24})]})]}):null}try{V.displayName="Alert",V.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},shadowSize:{defaultValue:null,description:"",name:"shadowSize",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"}]}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!1,type:{name:"number"}},closeLabel:{defaultValue:null,description:"",name:"closeLabel",required:!1,type:{name:"string"}},onClosed:{defaultValue:null,description:"",name:"onClosed",required:!1,type:{name:"(() => void)"}}}}}catch{}const te=r.createContext({addAlert:e=>{console.log(e)}});function R(e){const[a,t]=r.useState([]),s=r.useCallback(u=>{t(o=>[...o,u])},[]),d=r.useCallback(u=>{t(o=>(o.splice(u,1),[...o]))},[]);return z(te.Provider,{value:{addAlert:s},children:[c("div",{className:K.Root,children:a.map((u,o)=>c(V,{...u,onClosed:()=>{d(o)}},`alert_${o}`))}),e.children]})}try{R.displayName="AlertProvider",R.__docgenInfo={description:"",displayName:"AlertProvider",props:{}}}catch{}const ae="_Container_1xz1f_1",le="_Alignstart_1xz1f_9",ne="_Aligncenter_1xz1f_13",se="_Alignend_1xz1f_17",ie="_Alignbaseline_1xz1f_21",ue="_Justifystart_1xz1f_25",re="_Justifycenter_1xz1f_29",oe="_Justifyend_1xz1f_33",ce="_Justifyspacebetween_1xz1f_37",_e="_Justifyspacearound_1xz1f_41",me="_Justifyspaceevenly_1xz1f_45",de="_Item0_5_1xz1f_49",fe="_Item1_1xz1f_55",pe="_Item1_5_1xz1f_61",ve="_Item2_1xz1f_67",ye="_Item2_5_1xz1f_73",Ie="_Item3_1xz1f_79",ge="_Item3_5_1xz1f_85",Se="_Item4_1xz1f_91",he="_Item4_5_1xz1f_97",ze="_Item5_1xz1f_103",xe="_Item5_5_1xz1f_109",Ae="_Item6_1xz1f_115",qe="_Item6_5_1xz1f_121",Ce="_Item7_1xz1f_127",Ne="_Item7_5_1xz1f_133",Ve="_Item8_1xz1f_139",be="_Item8_5_1xz1f_145",Ee="_Item9_1xz1f_151",Te="_Item9_5_1xz1f_157",Je="_Item10_1xz1f_163",we="_Item10_5_1xz1f_169",Le="_Item11_1xz1f_175",Re="_Item11_5_1xz1f_181",He="_Item12_1xz1f_187",Ge="_Spacing0_1xz1f_193",ke="_Spacing1_1xz1f_197",Me="_Item_1xz1f_49",Pe="_Spacing2_1xz1f_207",$e="_Spacing3_1xz1f_217",je="_Spacing4_1xz1f_227",g={Container:ae,Alignstart:le,Aligncenter:ne,Alignend:se,Alignbaseline:ie,Justifystart:ue,Justifycenter:re,Justifyend:oe,Justifyspacebetween:ce,Justifyspacearound:_e,Justifyspaceevenly:me,Item0_5:de,Item1:fe,Item1_5:pe,Item2:ve,Item2_5:ye,Item3:Ie,Item3_5:ge,Item4:Se,Item4_5:he,Item5:ze,Item5_5:xe,Item6:Ae,Item6_5:qe,Item7:Ce,Item7_5:Ne,Item8:Ve,Item8_5:be,Item9:Ee,Item9_5:Te,Item10:Je,Item10_5:we,Item11:Le,Item11_5:Re,Item12:He,Spacing0:Ge,Spacing1:ke,Item:Me,Spacing2:Pe,Spacing3:$e,Spacing4:je};function Be(e,a,t,s){return e===null?12:e==="lg"?s===void 0?t===void 0?a===void 0?12:a:t:s:e==="md"?t===void 0?a===void 0?12:a:t:a===void 0?12:a}function b(e){const a=[];a.push(g.Item);const t=Be(e.size,e.sm,e.md,e.lg);return a.push(g["Item"+t]),e.className&&a.push(e.className),c("div",{className:a.join(" "),style:e.style,children:e.children})}try{b.displayName="GridItem",b.__docgenInfo={description:"",displayName:"GridItem",props:{sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:'"0_5"'},{value:'"1_5"'},{value:'"2_5"'},{value:'"3_5"'},{value:'"4_5"'},{value:'"5_5"'},{value:'"6_5"'},{value:'"7_5"'},{value:'"8_5"'},{value:'"9_5"'},{value:'"10_5"'},{value:'"11_5"'}]}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:'"0_5"'},{value:'"1_5"'},{value:'"2_5"'},{value:'"3_5"'},{value:'"4_5"'},{value:'"5_5"'},{value:'"6_5"'},{value:'"7_5"'},{value:'"8_5"'},{value:'"9_5"'},{value:'"10_5"'},{value:'"11_5"'}]}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:'"0_5"'},{value:'"1_5"'},{value:'"2_5"'},{value:'"3_5"'},{value:'"4_5"'},{value:'"5_5"'},{value:'"6_5"'},{value:'"7_5"'},{value:'"8_5"'},{value:'"9_5"'},{value:'"10_5"'},{value:'"11_5"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}function A(e){if(Array.isArray(e)){const a=[];return e.forEach(t=>{t.type===N.Fragment?Array.isArray(t.props.children)?t.props.children.forEach(s=>a.push(...A(s))):a.push(t.props.children):Array.isArray(t)?a.push(...A(t)):a.push(t)}),a}else return typeof e=="string"?[e]:e.type===N.Fragment?A(e.props.children):[e]}function H(e){const[a,t]=r.useState(null),{className:s,spacing:d,justifyContent:u,alignItem:o}=e,p=r.useRef();r.useEffect(()=>{const l=p.current;if(l){const v=l.clientWidth;v<h(576)?t("sm"):v<h(768)?t("md"):t("lg"),L.observe(l,q=>{const n=q.contentRect.width;n<h(576)?t("sm"):n<h(768)?t("md"):t("lg")})}return()=>{l&&L.unobserve(l)}},[p]);const _=[];return _.push(g.Container),o&&_.push(g["Align"+o]),u&&_.push(g["Justify"+u]),d&&_.push(g["Spacing"+d]),s&&_.push(s),c("div",{ref:p,className:_.join(" "),style:e.style,children:e.children&&a!==null&&A(e.children).map((l,v)=>typeof l=="string"||l.type===N.Fragment?l:r.createElement(b,{...l.props,size:a,key:`grid_${v}_${a}`}))})}try{H.displayName="Grid",H.__docgenInfo={description:"",displayName:"Grid",props:{alignItem:{defaultValue:null,description:"",name:"alignItem",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"spacebetween"'},{value:'"spacearound"'},{value:'"spaceevenly"'}]}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}function G(e){return c(F,{...e})}try{G.displayName="MonacoEditor",G.__docgenInfo={description:"",displayName:"MonacoEditor",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},language:{defaultValue:null,description:"",name:"language",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newValue: string) => void)"}},editorRef:{defaultValue:null,description:"",name:"editorRef",required:!1,type:{name:"((editor: any) => void)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},lineNumbers:{defaultValue:null,description:"",name:"lineNumbers",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"number"}},minimap:{defaultValue:null,description:"",name:"minimap",required:!1,type:{name:"boolean"}}}}}catch{}export{R as A,H as G,G as M,te as a,V as b,b as c};