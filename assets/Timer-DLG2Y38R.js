import{j as T,F as y}from"./DefaultThemeProvider-ZzgTeurK.js";import{r as c}from"./index-BwDkhjyp.js";function f(e){const[I,w]=c.useState();return c.useEffect(()=>{const l=e.untilTimeInMs,a=window.setInterval(()=>{o()},e.waitInMS);function o(){let n=e.countUp?Date.now()-l:l-Date.now();n<0&&(n=0,a&&window.clearInterval(a),e.onEnd&&e.onEnd());let t=Math.floor(n/1e3),i=Math.floor(t/60),r=Math.floor(i/60);const u=n%1e3;t=(n-u)/1e3;const d=t%60;i=(t-d)/60;const s=i%60,m=(i-s)/60;r=(r-m)/60;const M=r/24;w({days:M,ms:u,secs:d,mins:s,hrs:m%24})}return o(),()=>window.clearInterval(a)},[e,e.untilTimeInMs,e.waitInMS]),T(y,{children:e.renderer(I)})}try{f.displayName="Timer",f.__docgenInfo={description:"",displayName:"Timer",props:{untilTimeInMs:{defaultValue:null,description:"",name:"untilTimeInMs",required:!0,type:{name:"number"}},countUp:{defaultValue:null,description:"",name:"countUp",required:!1,type:{name:"boolean"}},waitInMS:{defaultValue:null,description:"",name:"waitInMS",required:!0,type:{name:"number"}},renderer:{defaultValue:null,description:"",name:"renderer",required:!0,type:{name:"(timeData?: TimeData | undefined) => ReactNode"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"(() => void)"}}}}}catch{}export{f as T};
