import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{D as x}from"./DataTable-B0OTM8aw.js";import{r as i}from"./index-DJO9vBfz.js";import{D as y}from"./DefaultThemeProvider-DB5yquFP.js";import"./Table.module-GN5HgtVw.js";import"./Combobox-utIsBDyR.js";import"./InputUtil-CfDwzwTJ.js";import"./Button-HS4qhxue.js";import"./useTimeout-dnlj8An_.js";import"./index-DJbli8uv.js";import"./useRipple-C4DXtBro.js";import"./IconButton-BrX7Rpys.js";import"./ShapeType-C4Gft0bY.js";import"./RadioButton-Df7xQ-kQ.js";import"./CheckboxUtil-CqPWmFQ9.js";import"./AlertButton-BckD7m-D.js";import"./index-Cp9I2zMD.js";import"./ActionBar-CT_LrSiq.js";import"./GitHubSignInButton-CNsVBYTR.js";import"./SignInButton-CzdAjFiw.js";import"./GoogleSignInButton-kzQJV7M3.js";import"./FacebookSignInButton-B72-3NZb.js";import"./AppleSignInButton-DUM0IBSr.js";import"./Checkbox-DTNaYHYX.js";import"./Switch-BSBrATWg.js";import"./Tooltip-BaGgYEDs.js";import"./Tooltip.module-D77Rh_bi.js";import"./DomUtil-DAqrhrKT.js";import"./useResizeObserver-vZQY_nc8.js";import"./index-CikfRwdJ.js";const f=[{label:"Name",key:"name",className:"cell2"},{label:"Notes",key:"notes",className:"cell3"},{label:"Date created",key:"dateCreated",className:"cell4"},{label:"Expiration Date",key:"expiredDate",className:"cell5"},{label:"Status",key:"status",className:"cell6"}],k=[{key:"name",className:"cell2"},{key:"notes",className:"cell3"},{key:"dateCreated",className:"cell4"},{key:"expiredDate",className:"cell5"},{key:"status",className:"cell6"}];function D(e){const{hasPagination:l}=e,[p,u]=i.useState(0),[n,g]=i.useState(0),[s,w]=i.useState(12),o=[];for(let t=1;t<=100;t++)o.push({name:"Name "+t,notes:"Note#"+t,dateCreated:"03/20/2023",expiredDate:"03/20/2023",status:"Status"});return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
            .cell2 {
              width: 30%;
              text-align: center;
            }
            .cell3 {
              width: 30%;
              text-align: center;
            }
            .cell4 {
              width: 15%;
              text-align: center;
            }
            .cell5 {
              width: 15%;
              text-align: center;
            }
            .cell6 {
              width: 10%;
              text-align: center;
            }
            `}),a.jsx("div",{style:{width:"calc(100% - 80px)",marginInline:"40px",marginBlock:"20px",position:"relative",paddingBlockEnd:"20px"},children:a.jsx(x,{height:"calc(100vh - 40px)",showColumnDivider:e.showColumnDivider,showOutline:e.showOutline,compact:e.compact,color:e.color,hue:e.hue,borderRadius:e.borderRadius,shadowSize:e.shadowSize,shadowColor:e.shadowColor,hasCheckbox:e.hasCheckbox,headerFields:f,dataFields:k,rawData:l?o.filter((t,c)=>c>=n&&c<n+s):o,paginationInfo:l?{pageSize:s,totalPages:Math.ceil(o.length/s),page:p,pageSizeOptions:[12,30,40],totalRecords:o.length}:void 0,onChangePagination:t=>{u(t.page),g(t.page*t.pageSize),w(t.pageSize)}})})]})}const Z={title:"CLIENTS/ui/table/DataTable",component:D,decorators:[e=>a.jsx(y,{children:a.jsx(e,{})})],parameters:{},argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,1,2,6,4,8,12,16,20,24],control:{type:"radio"}},shadowColor:{options:[void 0,"primary","info","success","warning","error","secondary"],control:{type:"radio"}},hasPagination:{type:"boolean",defaultValue:!0}}},r={args:{color:"secondary",hue:"lighter",shadowSize:6,hasCheckbox:!0,borderRadius:16,shadowColor:void 0,hasPagination:!0,compact:!1,showOutline:!1,showColumnDivider:!1}};var m,d,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    hue: 'lighter',
    shadowSize: 6,
    hasCheckbox: true,
    borderRadius: 16,
    shadowColor: undefined,
    hasPagination: true,
    compact: false,
    showOutline: false,
    showColumnDivider: false
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const $=["Demo"];export{r as Demo,$ as __namedExportsOrder,Z as default};
