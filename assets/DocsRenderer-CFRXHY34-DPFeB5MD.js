import{_ as p}from"./iframe-CigrDhte.js";import{R as e,r as c}from"./index-DJO9vBfz.js";import{ag as l,ah as h,ai as u,aj as E}from"./index-5tMK-v8p.js";import{renderElement as d,unmountElement as x}from"./react-18-BsJejteH.js";import"../sb-preview/runtime.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-Cp9I2zMD.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";var _={code:l,a:h,...u},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=E;return new Promise((a,m)=>{p(()=>import("./index-BrnU7xv7.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:i})=>d(e.createElement(D,{showException:m,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>a())})},this.unmount=t=>{x(t)}}};export{F as DocsRenderer,_ as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BrnU7xv7.js","./index-DJO9vBfz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
