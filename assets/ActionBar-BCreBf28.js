import{j as u,a as B}from"./DefaultThemeProvider-BRxWeqUn.js";import{B as _}from"./Button-BUJJgbwE.js";import{C as d,a as r}from"./ProfileLink-D-xyNnIs.js";import"./index-BwDkhjyp.js";function l(t,n,o,c){return n?u("div",{className:c,children:n.map((e,i)=>u(_,{...e,onClick:o?()=>o(e.action,e.actionData):void 0,children:e.label},`${t}_${i}`))}):null}const y="_ActionBarRoot_bwlc3_1",C="_ActionCenter_bwlc3_14",A={ActionBarRoot:y,ActionCenter:C};function p(t){const{useFullWidthOnCenterActions:n,leftActions:o,rightActions:c,centerActions:e,spaceBetween:i,onAction:s}=t,a=(f,m)=>{s&&s(f,m)};return console.log(i),B("div",{className:d(A.ActionBarRoot,i?r.JustifySpaceBetween:r.JustifyCenter),children:[l("left",o,a),l("center",e,a,d(A.ActionCenter,n?r.FullWidth:void 0)),l("right",c,a)]})}try{p.displayName="ActionBar",p.__docgenInfo={description:"",displayName:"ActionBar",props:{leftActions:{defaultValue:null,description:"",name:"leftActions",required:!1,type:{name:"ButtonAction<T>[]"}},rightActions:{defaultValue:null,description:"",name:"rightActions",required:!1,type:{name:"ButtonAction<T>[]"}},centerActions:{defaultValue:null,description:"",name:"centerActions",required:!1,type:{name:"ButtonAction<T>[]"}},useFullWidthOnCenterActions:{defaultValue:null,description:"",name:"useFullWidthOnCenterActions",required:!1,type:{name:"boolean"}},spaceBetween:{defaultValue:null,description:"",name:"spaceBetween",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"((action: string, actionData?: T) => void)"}}}}}catch{}export{p as A};