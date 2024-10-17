import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{b as C}from"./useTimeout-BASJc2V5.js";import{r as f}from"./index-DJO9vBfz.js";import{a as b,M as x,T as V,b as P,A as D,J as E,D as O,t as F}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./DefaultMenu-0LnC5aUz.js";import"./Checkbox-BUtrGLoq.js";import"./Switch-Cc-4px2g.js";import"./Button-Cm1yCUKV.js";import{I as G}from"./IconButton-6cAcpLD7.js";import"./RadioButton-BgQOW4iM.js";import"./AlertButton-CCPNF3gP.js";import"./ActionBar-BH2Q10LK.js";import"./AlertProvider-C-oN3SIy.js";import"./Accordion-86vzduSu.js";import"./Input-BlcUfh8C.js";import"./DateInput-Dtn0PVrU.js";import"./TagInput-BnWmWiHK.js";import"./ColorChooser-yIgpImAb.js";import"./TabPanel-B7mBcOuJ.js";import{T as J}from"./Tooltip-HoePrzzf.js";import"./Combobox-B0zNmVdd.js";import"./Timer-DCZNatUX.js";import"./Form-DRc6Jvp9.js";import"./Slick-CtfGjY_2.js";import"./SlickFixedSize-BSmCC2KH.js";import"./Popover-DPWhfdIS.js";import"./Slider-B3gjjnqV.js";import"./RangeSlider-Ce4tFgox.js";import"./MonacoEditor-CCmO9Yxd.js";import"./Highlight-Qmv9CNvH.js";import{R as I}from"./MenuOption-CFxhanOA.js";import{G as p}from"./DomUtil-Bdo5KM9z.js";import"./index-DJbli8uv.js";import"./index-CikfRwdJ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./ColorUtil-b9QtJkc2.js";import"./useRipple-BbkXZzvg.js";import"./index-Cp9I2zMD.js";import"./InputUtil-BONj-j-a.js";import"./index.browser-vcSNLBTf.js";import"./SizeWatcher-BDbsP5oN.js";import"./useResizeObserver-vZQY_nc8.js";import"./VerticalSlider.module-L3AsejcK.js";import"./index-BAi5cnyf.js";import"./Highlight-CBFUEUc4.js";const Q="_AppRoot_ppi13_1",Z="_AppSideBar_ppi13_10",H="_Selected_ppi13_33",K="_AppSideBarShadow_ppi13_41",U="_Close_ppi13_46",X="_AppContent_ppi13_68",Y="_BurgerMenuItem_ppi13_76",ee="_TopMenus_ppi13_88",te="_AppLogo_ppi13_94",ie="_MiddleMenus_ppi13_108",ne="_BottomMenus_ppi13_113",oe="_MenuItem_ppi13_118",re="_LongMenuItem_ppi13_148",o={AppRoot:Q,AppSideBar:Z,Selected:H,AppSideBarShadow:K,Close:U,AppContent:X,BurgerMenuItem:Y,TopMenus:ee,AppLogo:te,MiddleMenus:ie,BottomMenus:ne,MenuItem:oe,LongMenuItem:re};function B(t){const[_,d]=f.useState(!1),n=f.useRef(),{menuId:c,children:M,topMenus:N,regularMenus:T,bottomMenus:$,appLogo:w,appName:z}=t,g=(m,r)=>r.map((i,s)=>a?e.jsx(J,{title:i.label,anchor:D.EAST,children:j(m,s,i)},`tooltip_menu_${s}`):j(m,s,i)),j=(m,r,i)=>{const s=a;return e.jsx("li",{className:b(s?o.MenuItem:o.LongMenuItem,i.id.startsWith(c)?o.Selected:void 0),onClick:i.onClick?u=>{i.onClick&&i.onClick(i,u)}:void 0,children:i.href?e.jsx(E,{href:i.href,children:I(i,!a,s)}):I(i,!a,s)},`menu_${m}_${r}`)},h=`${t.sideBarWidth?p(t.sideBarWidth):p(250)}px`,y=`${t.smallSideBarWidth?p(t.smallSideBarWidth):p(65)}px`,W=`${t.mediumScreenSize?p(t.mediumScreenSize):p(1024)}px`,A=`${t.smallScreenSize?p(t.smallScreenSize):p(700)}px`,a=C(`(min-width: ${A}) and (max-width: ${W})`),l=C(`(max-width: ${A})`);f.useEffect(()=>{d(!1)},[a]);function q(m,r,i){return e.jsxs("nav",{ref:n,className:m,style:{width:i,left:r,gridTemplateRows:l?"auto auto 1fr auto":"auto 1fr auto"},children:[l&&e.jsx("ul",{children:e.jsx("li",{className:o.Close,onClick:s=>{if(!n.current)return;const u=n.current;u.style.transition="left var(--menu-animation-duration) ease-in, width var(--menu-animation-duration) ease-in",u.style.left=`calc(-1 * ${i})`,setTimeout(()=>{d(!1),u.style.transition="",u.style.left=""},250),s.stopPropagation()},children:e.jsx(G,{startBgWithTransparent:!0,shape:"rectangle",children:e.jsx(x,{name:"arrow_back",color:"white"})})})}),e.jsxs("ul",{className:o.TopMenus,children:[e.jsx("li",{children:e.jsxs("div",{className:o.AppLogo,children:[e.jsx("img",{src:w,alt:"App logo"}),!a&&e.jsx(V,{component:"span",variant:"subtitle1",children:z})]})}),g("header_menu_item",N)]}),e.jsx("ul",{className:o.MiddleMenus,children:g("regular_menu_item",T)}),e.jsx("ul",{className:o.BottomMenus,children:g("bottom_menu_item",$)})]})}function R(){return e.jsx("span",{className:b(o.BurgerMenuItem,P.Pointer),style:l&&!_?{visibility:"visible",opacity:"1"}:{},onClick:m=>{if(!n.current)return;const r=n.current;r.style.transition="left var(--menu-animation-duration) ease-in, width var(--menu-animation-duration) ease-in",r.style.left="0",setTimeout(()=>{d(!0),r.style.transition="",r.style.left=""},250),m.stopPropagation()},children:e.jsx(x,{name:"menu",size:20})})}return e.jsxs("div",{className:o.AppRoot,children:[R(),q(b(o.AppSideBar,l?o.AppSideBarShadow:void 0),l?_?"0":`-${h}`:"0",a?y:l?`min(90%,${h})`:h),e.jsx("div",{className:o.AppContent,style:{left:l?"0":a?y:h,width:l?"100%":a?`calc(100% - ${y})`:`calc(100% - ${h})`},children:M})]})}try{B.displayName="SidebarLayout",B.__docgenInfo={description:"",displayName:"SidebarLayout",props:{topMenus:{defaultValue:null,description:"",name:"topMenus",required:!0,type:{name:"MenuOption[]"}},regularMenus:{defaultValue:null,description:"",name:"regularMenus",required:!0,type:{name:"MenuOption[]"}},bottomMenus:{defaultValue:null,description:"",name:"bottomMenus",required:!0,type:{name:"MenuOption[]"}},menuId:{defaultValue:null,description:"",name:"menuId",required:!0,type:{name:"string"}},smallSideBarWidth:{defaultValue:null,description:"",name:"smallSideBarWidth",required:!1,type:{name:"number"}},sideBarWidth:{defaultValue:null,description:"",name:"sideBarWidth",required:!1,type:{name:"number"}},mediumScreenSize:{defaultValue:null,description:"",name:"mediumScreenSize",required:!1,type:{name:"number"}},smallScreenSize:{defaultValue:null,description:"",name:"smallScreenSize",required:!1,type:{name:"number"}},appLogo:{defaultValue:null,description:"",name:"appLogo",required:!1,type:{name:"string"}},appName:{defaultValue:null,description:"",name:"appName",required:!1,type:{name:"string"}}}}}catch{}function ae(t){const[_,d]=f.useState(t.menuId);f.useEffect(()=>{d(t.menuId)},[t.menuId]);const n=c=>{console.log(c.id),d(c.id)};return e.jsx(B,{appName:"EZbiz Application",appLogo:"./svg/psk_logo.svg",topMenus:[{id:"/profile",label:"Firstname's Profile",onClick:n,renderer:(c,M)=>M?e.jsx(x,{name:"person"}):e.jsx(F,{title:"Firstname Lastname",subtitle:"Admin"})}],menuId:_,regularMenus:[{label:"Dashboard",icon:"dashboard",id:"/dashboard",onClick:n},{label:"Datasource",icon:"database",id:"/datasource",onClick:n},{label:"Schema",icon:"schema",id:"/schema",onClick:n},{label:"Search",icon:"search",id:"/search",onClick:n},{label:"CMS",icon:"favorite",id:"/cms",onClick:n},{label:"Asset Management",icon:"perm_media",id:"/dam",onClick:n}],bottomMenus:[{label:"Policy",icon:"policy",id:"/policy",onClick:n},{label:"Logout",icon:"logout",id:"/logout"}],children:e.jsx("div",{style:{width:"100%",height:"400px",display:"flex",margin:"auto",textAlign:"center",alignItems:"center",justifyContent:"center"},children:"Content"})})}const Xe={component:ae,decorators:[t=>e.jsx(O,{children:e.jsx(t,{})})],argTypes:{menuId:{control:{type:"select"},options:["/profile","/dashboard","/datasource","/schema","/search","/cms","/dam","/policy"]}}},S={args:{menuId:"/dashboard"}};var L,k,v;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    menuId: '/dashboard'
  }
}`,...(v=(k=S.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const Ye=["Demo"];export{S as Demo,Ye as __namedExportsOrder,Xe as default};
