import{j as r,b as B,a as c,f as V,g as k}from"./DefaultThemeProvider-DbvuuPiG.js";import{r as n}from"./index-BwDkhjyp.js";import{P as q}from"./ColorUtil-Cr_cz2D9.js";import"./useTimeout-CJ17nKGE.js";import{u as b}from"./useRipple-CLSESEbx.js";const C="_AccordionRoot_1gwuu_1",R="_AccordionHeader_1gwuu_6",S="_AccordionBody_1gwuu_14",d={AccordionRoot:C,AccordionHeader:R,AccordionBody:S};function s(a){const{noRippleEffect:o,className:u,style:p,onChange:i,expanded:f,title:m,children:g,color:y,hue:x}=a,[h,_]=n.useState(),l=n.useRef(),H=V(y),A=k(x),E=b(l,l,q(H,A),!o,!1),v=t=>{if(t.stopPropagation(),t.currentTarget&&t.currentTarget.nextSibling&&(i&&i(f?void 0:h),a.expanded===void 0)){const e=t.currentTarget.nextSibling;e.style.maxHeight===""||e.style.maxHeight==="0px"?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingBlockStart="",e.style.paddingBlockEnd=""):(e.style.maxHeight="0px",e.style.paddingBlock="0px")}};return n.useEffect(()=>{l&&_(t=>t!==a.value?a.value:t)},[l,a.value]),n.useEffect(()=>{const t=setTimeout(()=>{if(l.current){const e=l.current.nextSibling;a.expanded===void 0&&a.defaultExpanded!==void 0?a.defaultExpanded?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingBlockStart="",e.style.paddingBlockEnd=""):(e.style.maxHeight="0px",e.style.paddingBlock="0px"):a.expanded?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingBlockStart="",e.style.paddingBlockEnd=""):(e.style.maxHeight="0px",e.style.paddingBlock="0px")}},100);return()=>{clearTimeout(t)}},[l,a.expanded,a.defaultExpanded]),r("div",{className:B(d.AccordionRoot,u),style:p,children:[r("div",{ref:l,onClick:v,className:d.AccordionHeader,children:[!o&&c("div",{style:{overflow:"hidden",width:"100%",height:"10px"},children:E}),m]}),c("div",{className:d.AccordionBody,children:g})]})}try{s.displayName="Accordion",s.__docgenInfo={description:"",displayName:"Accordion",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},defaultExpanded:{defaultValue:null,description:"",name:"defaultExpanded",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},noRippleEffect:{defaultValue:null,description:"",name:"noRippleEffect",required:!1,type:{name:"boolean"}}}}}catch{}export{s as A};
