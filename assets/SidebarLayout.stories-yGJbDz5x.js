import{a as _,b as A,j as e,M as B,T as D,c as E,G as O,D as j,t as G}from"./DefaultThemeProvider-3jRHqMMg.js";import{c as k}from"./useResizeObserver-BXh6FCPJ.js";import{r as f}from"./index-BwDkhjyp.js";import"./DefaultMenu-B21mEzSQ.js";import"./Checkbox-MznqVlSY.js";import"./Switch-cd7XreZG.js";import"./Button-Bmxau5DP.js";import{I as F}from"./IconButton-BO-tLsoF.js";import"./RadioButton-CYGO6mve.js";import"./AlertButton-CzVk3fXG.js";import"./ActionBar-BYC-azPa.js";import"./MonacoEditor-DvcDKwnj.js";import"./Accordion-BZHMyWdY.js";import"./Input-CiaMthXA.js";import"./DateInput-B2MfQc20.js";import"./TagInput-t91gr6Dq.js";import"./ColorChooser-DE8JJMKj.js";import"./TabPanel-BKEOUXml.js";import{T as Q}from"./Tooltip-aKKjPPxB.js";import"./Combobox-lKDCkSJr.js";import"./Timer-CQHBXe3a.js";import"./Slick-BVohmkMR.js";import"./SlickFixedSize-DIog18Ex.js";import"./Popover-BUpnEduU.js";import"./Slider-DUy-UliW.js";import"./RangeSlider-CAwHC5IZ.js";import"./Highlight-CnRDj5PY.js";import{A as Z}from"./Anchor-Dh8oERsW.js";import{R as v}from"./MenuOption-C6y3qll3.js";import{G as c}from"./DomUtil-Bdo5KM9z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DOJJSfO9.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ColorUtil-CTP1cW_j.js";import"./useRipple-DLxJhTTa.js";import"./index-B8XB3FuZ.js";import"./InputUtil-CptuWz0N.js";import"./index.browser-vcSNLBTf.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";const H="_AppRoot_ch29c_1",J="_AppSideBar_ch29c_10",K="_Selected_ch29c_33",U="_AppSideBarShadow_ch29c_41",X="_Close_ch29c_46",Y="_AppContent_ch29c_68",ee="_BurgerMenuItem_ch29c_76",te="_TopMenus_ch29c_88",ne="_AppLogo_ch29c_94",ie="_MiddleMenus_ch29c_108",oe="_BottomMenus_ch29c_113",ae="_MenuItem_ch29c_118",re="_LongMenuItem_ch29c_148",o={AppRoot:H,AppSideBar:J,Selected:K,AppSideBarShadow:U,Close:X,AppContent:Y,BurgerMenuItem:ee,TopMenus:te,AppLogo:ne,MiddleMenus:ie,BottomMenus:oe,MenuItem:ae,LongMenuItem:re};function C(t){const[S,d]=f.useState(!1),i=f.useRef(),{menuId:p,children:g,topMenus:T,regularMenus:w,bottomMenus:$,appLogo:W,appName:q}=t,y=(m,r)=>r.map((n,l)=>a?e(Q,{title:n.label,anchor:Z.EAST,children:I(m,l,n)}):I(m,l,n)),I=(m,r,n)=>{const l=a;return e("li",{className:A(l?o.MenuItem:o.LongMenuItem,n.id.startsWith(p)?o.Selected:void 0),onClick:n.onClick?u=>{n.onClick&&n.onClick(n,u)}:void 0,children:n.href?e(O,{href:n.href,children:v(n,!a,l)}):v(n,!a,l)})},h=`${t.sideBarWidth?c(t.sideBarWidth):c(250)}px`,b=`${t.smallSideBarWidth?c(t.smallSideBarWidth):c(65)}px`,V=`${t.mediumScreenSize?c(t.mediumScreenSize):c(1024)}px`,L=`${t.smallScreenSize?c(t.smallScreenSize):c(700)}px`,a=k(`(min-width: ${L}) and (max-width: ${V})`),s=k(`(max-width: ${L})`);f.useEffect(()=>{d(!1)},[a]);function P(m,r,n){return _("nav",{ref:i,className:m,style:{width:n,left:r,gridTemplateRows:s?"auto auto 1fr auto":"auto 1fr auto"},children:[s&&e("ul",{children:e("li",{className:o.Close,onClick:l=>{if(!i.current)return;const u=i.current;u.style.transition="left var(--menu-animation-duration) ease-in, width var(--menu-animation-duration) ease-in",u.style.left=`calc(-1 * ${n})`,setTimeout(()=>{d(!1),u.style.transition="",u.style.left=""},250),l.stopPropagation()},children:e(F,{children:e(B,{name:"arrow_back",size:23,color:"white"})})})}),_("ul",{className:o.TopMenus,children:[e("li",{children:_("div",{className:o.AppLogo,children:[e("img",{src:W,alt:"App logo"}),!a&&e(D,{component:"span",variant:"subtitle1",children:q})]})}),y("header_menu_item",T)]}),e("ul",{className:o.MiddleMenus,children:y("regular_menu_item",w)}),e("ul",{className:o.BottomMenus,children:y("bottom_menu_item",$)})]})}function R(){return e("span",{className:A(o.BurgerMenuItem,E.Pointer),style:s&&!S?{visibility:"visible",opacity:"1"}:{},onClick:m=>{if(!i.current)return;const r=i.current;r.style.transition="left var(--menu-animation-duration) ease-in, width var(--menu-animation-duration) ease-in",r.style.left="0",setTimeout(()=>{d(!0),r.style.transition="",r.style.left=""},250),m.stopPropagation()},children:e(B,{name:"menu",size:24})})}return _("div",{className:o.AppRoot,children:[R(),P(A(o.AppSideBar,s?o.AppSideBarShadow:void 0),s?S?"0":`-${h}`:"0",a?b:s?`min(90%,${h})`:h),e("div",{className:o.AppContent,style:{left:s?"0":a?b:h,width:s?"100%":a?`calc(100% - ${b})`:`calc(100% - ${h})`},children:g})]})}try{C.displayName="SidebarLayout",C.__docgenInfo={description:"",displayName:"SidebarLayout",props:{topMenus:{defaultValue:null,description:"",name:"topMenus",required:!0,type:{name:"MenuOption[]"}},regularMenus:{defaultValue:null,description:"",name:"regularMenus",required:!0,type:{name:"MenuOption[]"}},bottomMenus:{defaultValue:null,description:"",name:"bottomMenus",required:!0,type:{name:"MenuOption[]"}},menuId:{defaultValue:null,description:"",name:"menuId",required:!0,type:{name:"string"}},smallSideBarWidth:{defaultValue:null,description:"",name:"smallSideBarWidth",required:!1,type:{name:"number"}},sideBarWidth:{defaultValue:null,description:"",name:"sideBarWidth",required:!1,type:{name:"number"}},mediumScreenSize:{defaultValue:null,description:"",name:"mediumScreenSize",required:!1,type:{name:"number"}},smallScreenSize:{defaultValue:null,description:"",name:"smallScreenSize",required:!1,type:{name:"number"}},appLogo:{defaultValue:null,description:"",name:"appLogo",required:!1,type:{name:"string"}},appName:{defaultValue:null,description:"",name:"appName",required:!1,type:{name:"string"}}}}}catch{}function se(t){const[S,d]=f.useState(t.menuId);f.useEffect(()=>{d(t.menuId)},[t.menuId]);const i=p=>{console.log(p.id),d(p.id)};return e(C,{appName:"EZbiz Application",appLogo:"./svg/psk_logo.svg",topMenus:[{id:"/profile",label:"Firstname's Profile",onClick:i,renderer:(p,g)=>g?e(B,{name:"person"}):e(G,{title:"Firstname Lastname",subtitle:"Admin"})}],menuId:S,regularMenus:[{label:"Dashboard",icon:"dashboard",id:"/dashboard",onClick:i},{label:"Datasource",icon:"database",id:"/datasource",onClick:i},{label:"Schema",icon:"schema",id:"/schema",onClick:i},{label:"Search",icon:"search",id:"/search",onClick:i},{label:"CMS",icon:"favorite",id:"/cms",onClick:i},{label:"Asset Management",icon:"perm_media",id:"/dam",onClick:i}],bottomMenus:[{label:"Policy",icon:"policy",id:"/policy",onClick:i},{label:"Logout",icon:"logout",id:"/logout"}],children:e("div",{style:{width:"100%",height:"400px",display:"flex",margin:"auto",textAlign:"center",alignItems:"center",justifyContent:"center"},children:"Content"})})}const He={component:se,decorators:[t=>e(j,{children:e(t,{})})],argTypes:{menuId:{control:{type:"select"},options:["/profile","/dashboard","/datasource","/schema","/search","/cms","/dam","/policy"]}}},M={args:{menuId:"/dashboard"}};var x,N,z;M.parameters={...M.parameters,docs:{...(x=M.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    menuId: '/dashboard'
  }
}`,...(z=(N=M.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const Je=["Demo"];export{M as Demo,Je as __namedExportsOrder,He as default};