import{a as u}from"./Divider-DdokZ4G_.js";import{r}from"./index-BwDkhjyp.js";const f=r.createContext(void 0);function o(t){const[n,i]=r.useState(t.variables?t.variables:{}),[l,s]=r.useState(!t.href),{href:a,children:d}=t;return r.useEffect(()=>{for(const[e,c]of Object.entries(n))document.documentElement.style.setProperty("--"+e,c)},[n]),r.useEffect(()=>{let e;return a&&(e=document.createElement("link"),e.rel="stylesheet",e.href=a,e.onload=function(){s(!0)},document.head.appendChild(e)),()=>{e&&document.head.removeChild(e)}},[a]),u(f.Provider,{value:{href:a,variables:n,setVariables:i},children:l&&d})}try{o.displayName="DefaultThemeProvider",o.__docgenInfo={description:"",displayName:"DefaultThemeProvider",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"",name:"variables",required:!1,type:{name:"{ [key: string]: string; }"}}}}}catch{}export{o as D};
