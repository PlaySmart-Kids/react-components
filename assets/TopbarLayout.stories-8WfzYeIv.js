import{a as c,F as k,j as e,D as M}from"./DefaultThemeProvider-BRxWeqUn.js";import{T as v,C as N,M as R}from"./ProfileLink-D-xyNnIs.js";import{r as s}from"./index-BwDkhjyp.js";import{R as T}from"./MenuOption-DOBYa9tD.js";import{G as f}from"./DomUtil-Bdo5KM9z.js";import"./Button-BUJJgbwE.js";import{I as x}from"./IconButton-CNCH4a3g.js";import"./RadioButton-5xi1FwvH.js";import"./AlertButton-CMwO_hgE.js";import"./ActionBar-BCreBf28.js";import{c as z}from"./useResizeObserver-BXh6FCPJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColorUtil-BMWlsUCS.js";import"./useRipple-BRaxIdCd.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./index-B8XB3FuZ.js";import"./index-DOJJSfO9.js";const B="_TopbarRoot_27oae_1",w="_AppLogo_27oae_14",D="_Content_27oae_27",V="_MenuButton_27oae_32",A="_LinkButton_27oae_52",q="_ColumnItems_27oae_63",E="_Selected_27oae_103",j="_RowItems_27oae_108",t={TopbarRoot:B,AppLogo:w,Content:D,MenuButton:V,LinkButton:A,ColumnItems:q,Selected:E,RowItems:j};function m(a){const{children:i,menus:o,appName:C,appLogo:d,menuId:I}=a,[l,p]=s.useState(!0),[u,h]=s.useState(!1),y=`${a.smallScreenSize?f(a.smallScreenSize):f(700)}px`,_=z(`(max-width: ${y})`);return s.useEffect(()=>{p(!!_)},[_]),c(k,{children:[c("div",{className:t.TopbarRoot,children:[c("div",{className:t.AppLogo,children:[d&&e("img",{src:d,alt:"App logo"}),e(v,{component:"span",variant:"subtitle1",children:C})]}),e("nav",{className:l?t.ColumnItems:t.RowItems,children:(!l||u)&&e("ul",{children:o.map(n=>e("li",{className:N(n.id.startsWith(I)?t.Selected:void 0),onClick:n.onClick?L=>{n.onClick&&n.onClick(n,L)}:void 0,children:T(n,!0,!1)}))})}),l?e(x,{className:t.MenuButton,onClick:()=>h(!u),onBlur:()=>h(!1),children:e(R,{name:"menu",size:24})}):null]}),e("div",{className:t.Content,children:i})]})}try{m.displayName="TopbarLayout",m.__docgenInfo={description:"",displayName:"TopbarLayout",props:{menus:{defaultValue:null,description:"",name:"menus",required:!0,type:{name:"MenuOption[]"}},menuId:{defaultValue:null,description:"",name:"menuId",required:!0,type:{name:"string"}},appName:{defaultValue:null,description:"",name:"appName",required:!1,type:{name:"string"}},appLogo:{defaultValue:null,description:"",name:"appLogo",required:!1,type:{name:"string"}},smallScreenSize:{defaultValue:null,description:"",name:"smallScreenSize",required:!1,type:{name:"number"}}}}}catch{}function P(a){const[i,o]=s.useState(a.menuId);return s.useEffect(()=>{o(a.menuId)},[a.menuId]),e(m,{appName:"EZbiz Application",appLogo:"./svg/psk_logo.svg",menuId:i,menus:[{label:"Dashboard",icon:"dashboard",id:"/dashboard",onClick:()=>{o("/dashboard")}},{label:"Datasource",icon:"database",id:"/database",onClick:()=>{o("/database")}},{label:"Schema",icon:"schema",id:"/schema",onClick:()=>{o("/schema")}},{label:"Search",icon:"search",id:"/search",onClick:()=>{o("/search")}},{label:"CMS",icon:"favorite",id:"/cms",onClick:()=>{o("/cms")}}],smallScreenSize:720,children:e("div",{style:{height:"200px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"Content"})})}const ne={component:P,decorators:[a=>e(M,{children:e(a,{})})],argTypes:{menuId:{control:{type:"select"},options:["/dashboard","/database","/schema","/search","/cms"]}}},r={args:{menuId:"/dashboard"}};var S,b,g;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    menuId: '/dashboard'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const se=["Demo"];export{r as Demo,se as __namedExportsOrder,ne as default};