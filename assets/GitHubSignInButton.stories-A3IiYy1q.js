import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{V as v,D as w}from"./DefaultThemeProvider-Ce-zb_Sa.js";import{r as I}from"./index-DJO9vBfz.js";import{S as x}from"./SignInButton-B22cl3qw.js";import"./index-CikfRwdJ.js";const k="_GitHubSmallIcon_1epma_1",B="_GitHubMediumIcon_1epma_11",O="_GitHubLargeIcon_1epma_21",j="_GitHubBlackFilled_1epma_31",S="_GitHubGrayFilled_1epma_39",C="_GitHubBlackOutline_1epma_47",q="_GitHubGrayOutline_1epma_58",n={GitHubSmallIcon:k,GitHubMediumIcon:B,GitHubLargeIcon:O,GitHubBlackFilled:j,GitHubGrayFilled:S,GitHubBlackOutline:C,GitHubGrayOutline:q};function c(t){const{type:l,width:r,color:a,theme:d,size:u,shape:f}=t;function g(G){const s=window.parent?window.parent.location.href:window.location.href;console.log(s);const y=`https://github.com/login/oauth/authorize?client_id=${G}&redirect_uri=${encodeURI(s)}&scope=read:user`,i=window.open(y,"_blank","width=500,height=600");if(i){const _=window.setInterval(()=>{try{if(i.location.href.includes("&code=")||i.location.href.includes("?code=")){window.clearInterval(_);const m=new URLSearchParams(i.location.search).get("code");i.close(),t.onChange&&t.onChange(m||"")}}catch{}},1e3)}}return e.jsx(x,{filledClassName:a==="black"?n.GitHubBlackFilled:n.GitHubGrayFilled,outlineClassName:a==="black"?n.GitHubBlackOutline:n.GitHubGrayOutline,icon:e.jsx("div",{className:u==="small"?n.GitHubSmallIcon:u==="medium"?n.GitHubMediumIcon:n.GitHubLargeIcon,children:e.jsx(v,{color:d==="filled"?a==="gray"?"black":"white":"black"})}),iconBgColor:"transparent",provider:"GitHub",size:u,type:l,theme:d,shape:f,width:r,onClick:()=>{g(t.clientId)}})}try{c.displayName="GitHubSignInButton",c.__docgenInfo={description:"",displayName:"GitHubSignInButton",props:{clientId:{defaultValue:null,description:"",name:"clientId",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((creditial: string) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"medium"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"enum",value:[{value:'"signin_with"'},{value:'"continue_with"'},{value:'"signin"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rectangle"'},{value:'"circle"'},{value:'"rounded"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}}}}}catch{}function V(t){const[l,r]=I.useState();return e.jsxs("div",{style:{padding:"24px"},children:[e.jsx(c,{clientId:window&&window.location.href.indexOf("localhost")>=0?"Ov23liuOhfnUqgth72jB":"Ov23liYdObbBZNA4x3OA",...t,onChange:a=>{r(a)}}),e.jsx("br",{}),e.jsx("br",{}),l&&e.jsxs(e.Fragment,{children:["Code: ",l]})]})}const L={component:V,decorators:[t=>e.jsx(w,{children:e.jsx(t,{})})],argTypes:{theme:{options:["outline","filled"],control:{type:"radio"}},color:{options:["gray","black"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"radio"}},type:{options:["standard","icon"],control:{type:"radio"}},shape:{options:["rectangle","circle","rounded"],control:{type:"radio"}}}},o={args:{width:300,theme:"filled",color:"black",size:"large",type:"standard",shape:"rounded"}};var p,h,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    width: 300,
    theme: 'filled',
    color: 'black',
    size: 'large',
    type: 'standard',
    shape: 'rounded'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const U=["Demo"];export{o as Demo,U as __namedExportsOrder,L as default};
