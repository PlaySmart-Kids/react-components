import{j as k}from"./DefaultThemeProvider-CceS3XqJ.js";import{r as E}from"./index-BwDkhjyp.js";import{u as v}from"./useResizeObserver-BXh6FCPJ.js";const b=(p,a,y,d,u)=>{const[r,m]=E.useState([]);return E.useEffect(()=>{if(p.current&&a.current){const o=p.current,e=a.current,g=c=>{const n=e.getBoundingClientRect(),l=u?n.width/2:c.clientX-n.left,f=u?n.height/2:c.clientY-n.top,h=e.clientHeight,s=e.clientWidth;let t=(s+h)/2;t/Math.min(s,h)<1.5&&(t=t/2),m([...r,{top:f-t/2,left:l-t/2,height:t,width:t}])},w=c=>{const n=c.key;if(n===" "||n==="Enter"){const l=e.getBoundingClientRect(),f=l.width/2,h=l.height/2,s=e.clientHeight,t=e.clientWidth;let i=(t+s)/2;i/Math.min(t,s)<1.5&&(i=i/2),m([...r,{top:h-i/2,left:f-i/2,height:i,width:i}])}};return d&&(o.addEventListener("pointerdown",g),o.addEventListener("keydown",w)),()=>{d&&(o.removeEventListener("pointerdown",g),o.removeEventListener("keydown",w))}}},[a,p,r,d,u]),v({callback:()=>{r.length>0&&m([])},delay:1e3}),r.map((o,e)=>k("span",{style:{...o,position:"absolute",backgroundColor:y,opacity:"25%",transform:"scale(0)",animation:"ripple 0.6s ease-in",borderRadius:"50%"}},`ripper_${e}`))};export{b as u};