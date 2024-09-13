import{i as Te,h as $,N as j,k as be,j as U,b as h,c as ae,a as l,f as Ce,g as $e,l as _e}from"./Divider-DdokZ4G_.js";import{v as Ne,h as We,I as ie}from"./VerticalSlider.module-L3AsejcK.js";import{R as qe}from"./index-DOJJSfO9.js";import{N as Ae}from"./index-BAi5cnyf.js";import{r as _}from"./index-BwDkhjyp.js";const oe=_.forwardRef((w,le)=>{const[V,F]=_.useState(w.values),u=_.useRef(),c=_.useRef(),{iconStart:se,iconEnd:ue,size:ce,color:de,hue:pe,onChange:N,disabled:W,max:q,min:f,step:A,showSteps:me,fullWidth:he,orientation:fe,snapToStep:H}=w;_.useEffect(()=>{F(e=>e[0]===w.values[0]&&e[1]===w.values[1]?e:w.values)},[w.values]);const M=Ce(de),R=$e(pe),D=Math.max(q,f),E=Math.min(q,f),d=D-E,ge=_e(ce);let B=Math.min(V[0],V[1]),z=Math.max(V[0],V[1]);B=Math.max(Math.min(B,D),E),z=Math.max(Math.min(z,D),E);const a=A?Math.abs(A):void 0,g=ge===Te.SMALL,k=g?12:20,G=g?4:8,L=g?6:12,x=d===0?0:(B-f)*100/d,T=d===0?0:(z-f)*100/d,J=100-T,n=fe==="vertical",i=n?Ne:We,K=$("Background",M,R),ye=$("Border",M,j(j(R))),P=$("Background-alpha",M,be(R)),Q=$("Background",M,j(R)),Z=$("Outline-alpha",M,R),ee=e=>{if(!u.current||!c.current)return;const t=parseFloat(u.current.value),p=[parseFloat(c.current.value),t];F(p),N&&N(p)},ve=e=>{if(!u.current||!c.current)return;e.preventDefault(),e.stopPropagation();const t=e.currentTarget.querySelectorAll("span"),r=t.item(3),p=t.item(4),m=X(r,e.clientX,e.clientY),I=X(p,e.clientX,e.clientY);m?(t.item(3).style.outlineWidth=`${L}px`,t.item(4).style.outlineWidth="",e.currentTarget.setAttribute("data-pressed-from","upper")):I&&(t.item(4).style.outlineWidth=`${L}px`,t.item(3).style.outlineWidth="",e.currentTarget.setAttribute("data-pressed-from","lower"))},X=(e,t,r)=>ie(e.getBoundingClientRect(),t,r)?(e.style.outlineWidth===""&&(e.style.outlineWidth=`${G}px`),!0):(e.style.outlineWidth!==""&&(e.style.outlineWidth=""),!1),Se=e=>{if(!u.current||!c.current)return;e.preventDefault(),e.stopPropagation();const t=e.currentTarget.getAttribute("data-pressed-from"),r=e.currentTarget.querySelectorAll("span"),p=r.item(3),m=r.item(4),I=t==="upper"?p:m,o=t==="upper"?u:c;if(t!==null&&e.currentTarget.getAttribute("data-ignore-move")===null&&o.current){X(I,e.clientX,e.clientY);const y=e.currentTarget.getBoundingClientRect();let v=n?y.height-(e.clientY-y.top):e.clientX-y.left;const S=n?y.height:y.width;v<0?v=0:v>S&&(v=S);let s=v/S*d+f;a&&H&&(s=Math.round(s/a)*a);const O=t==="upper"?[V[0],s]:[s,V[1]];r.item(0).style.transition="none",r.item(1).style.transition="none",r.item(2).style.transition="none",r.item(3).style.transition="none",r.item(4).style.transition="none",te(O)}},we=e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.removeAttribute("data-pressed-from");const t=e.currentTarget.querySelectorAll("span");t.item(0).style.transition="",t.item(1).style.transition="",t.item(2).style.transition="",t.item(3).style.transition="",t.item(4).style.transition="",t.item(3).style.outlineWidth="",t.item(4).style.outlineWidth=""};function te(e){F(e),N&&N(e)}const Ie=e=>{if(!u.current||!c.current)return;e.stopPropagation(),e.preventDefault();const t=e.currentTarget.getBoundingClientRect(),r=e.clientX,p=e.clientY;let m=n?t.height-(p-t.top):r-t.left;const I=n?t.height:t.width;m<0?m=0:m>I&&(m=I);let o=m/I*d+f;a&&H&&(o=Math.round(o/a)*a);const y=parseFloat(u.current.value),v=parseFloat(c.current.value),S=(y+v)/2,s=e.currentTarget.querySelectorAll("span"),O=s.item(3),xe=s.item(4),Y=o<S?c:u,b=o<S?xe:O,Me=o>=S?o:y,Re=[o<S?o:v,Me];if(Y&&Y.current){Y.current.value=Ae(o,0,3);const C=e.currentTarget;b.style.outlineWidth=`${L}px`,b.style.transition="",s.item(0).style.transition="",s.item(1).style.transition="",s.item(2).style.transition="",C.removeAttribute("data-pressed-from");const ne=C.getAttribute("data-ignore-move");ne!=null&&window.clearInterval(parseInt(ne));const re=window.setInterval(()=>{C.getAttribute("data-pressed-from")===null&&(C.removeAttribute("data-ignore-move"),ie(b.getBoundingClientRect(),r,p)?b.style.outlineWidth=`${G}px`:b.style.outlineWidth="",window.clearInterval(re))},300);C.setAttribute("data-ignore-move",re.toFixed()),te(Re)}};function Ve(){return me&&a!==void 0&&a>0?l("div",{className:h(i.StepsPanel,g?i.SmallStepsPanel:void 0),style:{gridTemplateColumns:n?void 0:`repeat(${Math.round(d/a)},1fr)`,gridTemplateRows:n?`repeat(${Math.round(d/a)},1fr)`:void 0},children:qe(1,Math.round(d/a)).map(e=>l("div",{className:ye,children:" "},`slider_step_${e}`))}):null}return U("div",{ref:le,className:h(i.Root,g?i.RootSmall:void 0,he?n?ae.FullHeight:ae.FullWidth:void 0),children:[l("div",{children:se}),U("div",{className:h(i.BarPanel),onClick:Ie,onMouseDown:ve,onMouseMove:Se,onMouseOut:we,children:[U("div",{className:h(i.Bar,g?i.SmallBar:void 0),children:[Ve(),l("input",{ref:c,tabIndex:-1,type:"range",onChange:ee,"data-indicator-type":"lower",disabled:W,max:q,min:f,step:A,value:B}),l("input",{ref:u,tabIndex:-1,type:"range","data-indicator-type":"upper",onChange:ee,disabled:W,max:q,min:f,step:A,value:z}),l("span",{className:h(P),style:{width:n?void 0:`${x}%`,height:n?`${J}%`:void 0}}),l("span",{className:h(K),style:{width:n?void 0:`${T-x}%`,height:n?`${T-x}%`:void 0}}),l("span",{className:h(P),style:{width:n?void 0:`${J}%`,height:n?`${x}%`:void 0}})]}),l("span",{className:h(i.Indicator,Q,Z,g?i.IndicatorSmall:void 0),"data-indicator-type":"upper",style:{left:n?void 0:`calc(${T}% - ${k/2}px)`,top:n?`calc(${100-T}% - ${k/2}px)`:void 0,pointerEvents:W?"none":void 0}}),l("span",{className:h(i.Indicator,Q,Z,g?i.IndicatorSmall:void 0),"data-indicator-type":"lower",style:{left:n?void 0:`calc(${x}% - ${k/2}px)`,top:n?`calc(${100-x}% - ${k/2}px)`:void 0,pointerEvents:W?"none":void 0}})]}),l("div",{children:ue})]})});try{oe.displayName="RangeSlider",oe.__docgenInfo={description:"",displayName:"RangeSlider",props:{iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"ReactNode"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | SmallComponentSize"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},snapToStep:{defaultValue:null,description:"",name:"snapToStep",required:!1,type:{name:"boolean"}},showSteps:{defaultValue:null,description:"",name:"showSteps",required:!1,type:{name:"boolean"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}}}}}catch{}export{oe as R};
