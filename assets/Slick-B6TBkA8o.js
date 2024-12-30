import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{r as I}from"./index-DJO9vBfz.js";import{a as Z}from"./useTimeout-dnlj8An_.js";import{n as E}from"./index.browser-vcSNLBTf.js";import{c as V,a6 as U,M as X}from"./DefaultThemeProvider-DB5yquFP.js";const ee="_Root_1nsef_1",te="_Container_1nsef_6",ne="_ScrollPanel_1nsef_16",ie="_Panel_1nsef_23",re="_NextButton_1nsef_28",ae="_BackButton_1nsef_48",k={Root:ee,Container:te,ScrollPanel:ne,Panel:ie,NextButton:re,BackButton:ae};function H(a){var z;const{itemsPerPage:r,inlinePadding:C,infiniteScroll:x,animationType:b,arrowStyle:u,rootStyle:N,arrowRenderer:S,animationTimeout:w}=a,g=a.animationSpeedInMs<=0?350:a.animationSpeedInMs,s=Math.max(Math.min(r,a.skipItems),1),h=a.children?Array.isArray(a.children)?a.children.length:1:0,[c,O]=I.useState(),[F,d]=Z({isActive:!0,overflow:!1,currentItem:0,currentViews:[],refreshId:E(),itemWidth:0,targetItemWidth:0,targetItemHeight:0}),{isActive:P,overflow:f,currentItem:l,currentViews:R,refreshId:$,itemWidth:y,targetItemWidth:B,targetItemHeight:j}=F,G=I.useCallback(e=>{O(e),e&&new ResizeObserver(n=>{n.length>0&&d({targetItemWidth:n[0].contentRect.width/r,targetItemHeight:n[0].contentRect.height})}).observe(e)},[d,r]);I.useEffect(()=>{if(c){const e=c.clientWidth;let t=e/Math.min(r,h);B>0&&(t=B);const n=Array.isArray(a.children)?a.children.length*t:t,i=e<n;i&&!f?d({overflow:!0}):!i&&f&&d({overflow:!1}),d({itemWidth:t})}},[c,d,r,f,a.children,B,h]);const p=I.useCallback(e=>{if(d({isActive:!1}),c&&c.firstChild){if(b==="slide"){const t=c.firstChild;let n=r*y;const i=s*y;if(n=e<l?n-i:n+i,t.children)for(let o=0;o<t.children.length;o++)t.children[o].style.transitionDuration=`${g}ms`,t.children[o].style.transform=`translate(-${n}px, 0)`}else{const t=c.firstChild;if(e<l)for(let n=0;n<t.children.length;n++){const i=t.children[n];n>=0&&n<r?(i.style.opacity="1",i.style.zIndex="999"):(i.style.opacity="0",i.style.removeProperty("z-index"))}else for(let n=0,i=t.children.length;n<i;n++){const o=t.children[n];n>=i-r?(o.style.opacity="1",o.style.zIndex="999"):(o.style.opacity="0",o.style.removeProperty("z-index"))}}setTimeout(()=>{d({currentItem:e,isActive:!0,refreshId:E()})},g+100)}},[g,b,l,c,d,y,r,s]),A=e=>{e.stopPropagation(),e.preventDefault()},D=I.useCallback(e=>{e&&(e.preventDefault(),e.stopPropagation()),!(!P||!f)&&(x?p(l+s):l+s<h&&p(Math.min(h-1,l+s)))},[l,p,x,P,f,s,h]),T=I.useCallback(e=>{e&&(e.preventDefault(),e.stopPropagation()),!(!P||!f)&&(x?p(l-s):l-s>=0&&p(Math.max(0,l-s)))},[l,p,x,P,f,s]),q=e=>{if(c&&c.firstChild&&e&&e.currentTarget.getAttribute("data-slick-drag")==="true"){e.currentTarget.setAttribute("data-slick-drag","false"),e.stopPropagation(),e.preventDefault();const t=e.currentTarget.getAttribute("data-slick-x");if(t){const n=parseInt(t),i=e.clientX-n,o=r*-y,M=Math.abs(i/y);if(M<.5){const v=c.firstChild;for(let _=0;_<v.children.length;_++){const W=v.children[_];W.style.transitionDuration=`${g*M}ms`,W.style.transform=`translate(${o}px, 0)`}}else i<0?p(x?l+s:Math.max(0,l+s)):p(x?l-s:Math.max(0,l-s))}}},L=e=>{e.stopPropagation(),e.preventDefault(),!(!P||!f)&&(e.currentTarget.setAttribute("data-slick-drag","true"),e.currentTarget.setAttribute("data-slick-x",e.clientX.toFixed(0)))},J=e=>{if(e.stopPropagation(),e.preventDefault(),c&&c.firstChild&&e.currentTarget.getAttribute("data-slick-drag")==="true"){const t=e.currentTarget.getAttribute("data-slick-x");if(t){const n=parseInt(t),i=e.clientX-n,o=r*-y+i,M=c.firstChild;for(let v=0;v<M.children.length;v++){const _=M.children[v];_.style.transitionDuration="0s",_.style.transform=`translate(${o}px, 0)`}}}},K=()=>f?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:V(k.BackButton,u==null?void 0:u.className),style:{...u==null?void 0:u.style,visibility:!x&&l<=0?"hidden":"visible"},onMouseUp:A,onMouseDown:A,onClick:T,children:S?U(S,!0):m.jsx(X,{name:"chevron_left",size:48})}),m.jsx("div",{className:V(k.NextButton,u==null?void 0:u.className),style:{...u==null?void 0:u.style,visibility:!x&&l+s>=h-1?"hidden":"visible"},onMouseUp:A,onMouseDown:A,onClick:D,children:S?U(S,!1):m.jsx(X,{name:"chevron_right",size:48})})]}):null,Q=e=>e.map((t,n)=>{const i=r*-y*Math.floor(n/r);return m.jsx("div",{className:k.Panel,style:{transitionDuration:`${g}ms`,transform:`translate(${i}px)`,width:y+"px",opacity:t.index>=0&&t.index<r?1:0,zIndex:t.index>=0&&t.index<r?999:"unset"},children:t.element},`slick_${n}`)}),Y=e=>{const t=`${r*-y}px`,n=f?`translate(${t}, 0)`:void 0;return e.map((i,o)=>m.jsx("div",{className:k.Panel,style:{transitionDuration:`${g}ms`,transform:n,width:y+"px"},children:i.element},`slick_${o}`))};return I.useEffect(()=>{let e;return w?e=window.setInterval(()=>{w<0?T(null):D(null)},Math.max(Math.abs(w),g)):e=0,()=>{e&&clearInterval(e)}},[g,w,T,D]),I.useEffect(()=>{if(f&&Array.isArray(a.children)){const e=[];for(let t=-r;t<r*2;t++){let n=0;if(b==="fade"?t<0?n=t+(r-s):t>=r?n=t-(r-s):n=t:n=t,n+=l,n<0){const i=Math.abs((h+n)%h);e.push({index:t,element:a.children[i]})}else{const i=n%h;e.push({index:t,element:a.children[i]})}}d({currentViews:e})}else if(Array.isArray(a.children)){const e=[];for(let t=0;t<a.children.length;t++)e.push({index:t,element:a.children[t]});d({currentViews:e})}else d({currentViews:[{index:0,element:a.children}]})},[$,d,l,P,a.children,f,r,h,b,s]),m.jsxs("div",{className:V(k.Root,(z=a.rootStyle)==null?void 0:z.className),style:{minHeight:j?j+"px":void 0,position:"relative",...N==null?void 0:N.style},children:[m.jsx("div",{ref:G,className:k.Container,style:C?{left:`${C}px`,right:`${C}px`}:{},children:m.jsxs("div",{tabIndex:-1,className:k.ScrollPanel,...b==="slide"?{onPointerUp:q,onPointerLeave:q,onPointerDown:L,onPointerMove:J}:{},children:[b==="slide"&&Y(R),b==="fade"&&Q(R)]},$)}),K()]})}try{H.displayName="Slick",H.__docgenInfo={description:"",displayName:"Slick",props:{itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},inlinePadding:{defaultValue:null,description:"",name:"inlinePadding",required:!1,type:{name:"number"}},infiniteScroll:{defaultValue:null,description:"",name:"infiniteScroll",required:!1,type:{name:"boolean"}},animationSpeedInMs:{defaultValue:null,description:"",name:"animationSpeedInMs",required:!0,type:{name:"number"}},animationType:{defaultValue:null,description:"",name:"animationType",required:!0,type:{name:"enum",value:[{value:'"fade"'},{value:'"slide"'}]}},animationTimeout:{defaultValue:null,description:"",name:"animationTimeout",required:!0,type:{name:"number"}},skipItems:{defaultValue:null,description:"",name:"skipItems",required:!0,type:{name:"number"}},rootStyle:{defaultValue:null,description:"",name:"rootStyle",required:!1,type:{name:"ItemStyle"}},arrowRenderer:{defaultValue:null,description:"",name:"arrowRenderer",required:!1,type:{name:"GenericRenderer<boolean>"}},arrowStyle:{defaultValue:null,description:"",name:"arrowStyle",required:!1,type:{name:"ItemStyle"}}}}}catch{}export{H as S};
