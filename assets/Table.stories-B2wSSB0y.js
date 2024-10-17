import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{s as l}from"./Table.module-BnBQsvRO.js";import{f as S,d as T,e as y,C as f,H as D,a as v,b as o,G as R,D as O}from"./DefaultThemeProvider-Ce-zb_Sa.js";import"./index-DJO9vBfz.js";import{G as V}from"./DomUtil-Bdo5KM9z.js";import{R as _}from"./index-DJbli8uv.js";import"./index-CikfRwdJ.js";function u(a){const{borderRadius:t,noShadow:h,children:i,compact:C,showOutline:m}=a,s=a.hue!==void 0?S(a.hue):T.LIGHT,d=a.color!==void 0?y(a.color):f.SECONDARY,j=a.shadowSize!==void 0?D(a.shadowSize):6,b=a.shadowColor!==void 0?y(a.shadowColor):f.SECONDARY,p=Array.isArray(i)?i:[i],r=p.find(c=>c.type==="thead"),N=p.filter(c=>c.type==="tbody");return e.jsx(e.Fragment,{children:e.jsxs("table",{className:v(l.RootWithoutFooter,C?l.CompactCell:void 0,o.HiddenOverflow,h?void 0:l.ShadowPanel,h?void 0:o[`Shadow-${j}-${b}-${s}`],m?l.TableOutline:void 0,m?o[`Outline-${d}-${s}`]:void 0),style:{borderRadius:`${V(t!==void 0?t:20)}px`},children:[r&&e.jsx("thead",{className:v(l.TableHead,o[`Background-${d}-${s}`],o[`Color-${d}-${R(s)}`],r.className),style:r.style,children:r.props.children}),N]})})}try{u.displayName="Table",u.__docgenInfo={description:"",displayName:"Table",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},shadowSize:{defaultValue:null,description:"",name:"shadowSize",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"}]}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},tbodyClassName:{defaultValue:null,description:"",name:"tbodyClassName",required:!1,type:{name:"string"}},theadClassName:{defaultValue:null,description:"",name:"theadClassName",required:!1,type:{name:"string"}},noShadow:{defaultValue:null,description:"",name:"noShadow",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:null,description:"",name:"showOutline",required:!1,type:{name:"boolean"}}}}}catch{}function $(a){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
            .cell1 {
              width: 10%;
              text-align: start;
            }
            .cell2 {
              width: 20%;
              text-align: start;
            }
            .cell3 {
              width: 30%;
              text-align: center;
            }
            .cell4 {
              width: 15%;
              text-align: start;
            }
            .cell5 {
              width: 15%;
              text-align: end;
            }
            .cell6 {
              width: 10%;
              text-align: end;
            }
            `}),e.jsx("div",{style:{width:"calc(100% - 80px)",marginInline:"40px",marginBlock:"20px",position:"relative",height:"100px"},children:e.jsxs(u,{...a,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"cell1",children:"Cell 1"}),e.jsx("th",{className:"cell2",children:"Cell 2"}),e.jsx("th",{className:"cell3",children:"Cell 3"}),e.jsx("th",{className:"cell4",children:"Cell 4"}),e.jsx("th",{className:"cell5",children:"Cell 5"}),e.jsx("th",{className:"cell6",children:"Cell 6"})]})}),e.jsx("tbody",{children:_(1,10).map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"cell1",children:"Data 1"}),e.jsx("td",{className:"cell2",children:"Data 2"}),e.jsx("td",{className:"cell3",children:"Data 3"}),e.jsx("td",{className:"cell4",children:"Data 4"}),e.jsx("td",{className:"cell5",children:"Data 5"}),e.jsx("td",{className:"cell6",children:"Data 6"})]},`row_${t}`))})]})})]})}const G={title:"CLIENTS/ui/table/Table",component:$,decorators:[a=>e.jsx(O,{children:e.jsx(a,{})})],parameters:{},argTypes:{color:{options:["primary","info","success","warning","error","secondary"],control:{type:"radio"}},hue:{options:["lightest","lighter","light","main","dark","darker","darkest"],control:{type:"radio"}},shadowSize:{defaultValue:4,options:[0,1,2,6,4,8,12,16,20,24],control:{type:"radio"}},shadowColor:{options:[void 0,"primary","info","success","warning","error","secondary"],control:{type:"radio"}}}},n={args:{color:"secondary",hue:"lighter",shadowSize:6,borderRadius:16,shadowColor:void 0,hasPagination:!0,compact:!1,showOutline:!1}};var x,w,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    hue: 'lighter',
    shadowSize: 6,
    borderRadius: 16,
    shadowColor: undefined,
    hasPagination: true,
    compact: false,
    showOutline: false
  }
}`,...(g=(w=n.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};const I=["Demo"];export{n as Demo,I as __namedExportsOrder,G as default};
