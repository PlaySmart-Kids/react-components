import{j as k}from"./jsx-runtime-CkxqCPlQ.js";import{r as E}from"./index-DJO9vBfz.js";import{u as v}from"./useTimeout-BASJc2V5.js";const C=(h,a,y,d,u)=>{const[r,m]=E.useState([]);return E.useEffect(()=>{if(h.current&&a.current){const o=h.current,e=a.current,g=c=>{const n=e.getBoundingClientRect(),l=u?n.width/2:c.clientX-n.left,f=u?n.height/2:c.clientY-n.top,p=e.clientHeight,s=e.clientWidth;let t=(s+p)/2;t/Math.min(s,p)<1.5&&(t=t/2),m([...r,{top:f-t/2,left:l-t/2,height:t,width:t}])},w=c=>{const n=c.key;if(n===" "||n==="Enter"){const l=e.getBoundingClientRect(),f=l.width/2,p=l.height/2,s=e.clientHeight,t=e.clientWidth;let i=(t+s)/2;i/Math.min(t,s)<1.5&&(i=i/2),m([...r,{top:p-i/2,left:f-i/2,height:i,width:i}])}};return d&&(o.addEventListener("pointerdown",g),o.addEventListener("keydown",w)),()=>{d&&(o.removeEventListener("pointerdown",g),o.removeEventListener("keydown",w))}}},[a,h,r,d,u]),v({callback:()=>{r.length>0&&m([])},delay:1e3}),r.map((o,e)=>k.jsx("span",{style:{...o,position:"absolute",backgroundColor:y,pointerEvents:"none",opacity:"25%",transform:"scale(0)",animation:"ripple 0.6s ease-in",borderRadius:"50%"}},`ripper_${e}`))};export{C as u};
