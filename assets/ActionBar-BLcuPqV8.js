import{a as u,j as _,b as d,c}from"./Divider-DdokZ4G_.js";import{B as C}from"./Button-C-RRGble.js";import"./index-BwDkhjyp.js";function r(t,n,i,o){return n?u("div",{className:o,children:n.map((e,a)=>u(C,{...e,onClick:i?()=>i(e.action,e.actionData):void 0,children:e.label},`${t}_${a}`))}):null}const h="_ActionBarRoot_bwlc3_1",g="_ActionCenter_bwlc3_14",p={ActionBarRoot:h,ActionCenter:g};function A(t){const{useFullWidthOnCenterActions:n,leftActions:i,rightActions:o,centerActions:e,spaceBetween:a,onAction:s,style:f,className:m}=t,l=(y,B)=>{s&&s(y,B)};return _("div",{className:d(m,p.ActionBarRoot,a?c.JustifySpaceBetween:c.JustifyCenter),style:f,children:[r("left",i,l),r("center",e,l,d(p.ActionCenter,n?c.FullWidth:void 0)),r("right",o,l)]})}try{A.displayName="ActionBar",A.__docgenInfo={description:"",displayName:"ActionBar",props:{leftActions:{defaultValue:null,description:"",name:"leftActions",required:!1,type:{name:"ButtonAction<T>[]"}},rightActions:{defaultValue:null,description:"",name:"rightActions",required:!1,type:{name:"ButtonAction<T>[]"}},centerActions:{defaultValue:null,description:"",name:"centerActions",required:!1,type:{name:"ButtonAction<T>[]"}},useFullWidthOnCenterActions:{defaultValue:null,description:"",name:"useFullWidthOnCenterActions",required:!1,type:{name:"boolean"}},spaceBetween:{defaultValue:null,description:"",name:"spaceBetween",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"((action: string, actionData?: T) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{A};
