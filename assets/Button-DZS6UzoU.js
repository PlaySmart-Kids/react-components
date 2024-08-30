import{v as N,w as x,B as L,N as b,a as d,b as E,j as I,f as F,g as w}from"./DefaultThemeProvider-D8uc623f.js";import{r as p}from"./index-BwDkhjyp.js";import{P as O}from"./ColorUtil-Bbwy-7Wp.js";import"./useResizeObserver-BXh6FCPJ.js";import{u as T}from"./useRipple-gxOE-J9K.js";const W="_ButtonRoot_h6zja_1",k="_IconPanel_h6zja_21",D="_FlexPanel_h6zja_27",H="_Large_h6zja_35",A="_Small_h6zja_42",G="_Regular_h6zja_49",J="_Outlined_h6zja_56",K="_LargeCompact_h6zja_63",M="_SmallCompact_h6zja_67",Q="_RegularCompact_h6zja_71",e={ButtonRoot:W,IconPanel:k,FlexPanel:D,Large:H,Small:A,Regular:G,Outlined:J,LargeCompact:K,SmallCompact:M,RegularCompact:Q},m=p.forwardRef((o,f)=>{const{compact:_,noRippleEffect:v,type:h,style:y,iconStart:n,iconEnd:u,className:g,shadowSize:R,disabled:a,hue:z,variant:l,color:S,size:r,children:s,fullWidth:V,...j}=o,i=F(S),c=w(z),t=p.useRef(),C=N(e,r,V,_),P=x(e,l,i,c,r,R,a),q=T(t,t,l===void 0||l===L.FILLED?"#fff":O(i,b(c)),!v&&!a,!1),B=n!==void 0||u!==void 0;return d("button",{ref:f,type:h,style:y,className:E(e.ButtonRoot,g,e.FlexPanel,...C,...P),disabled:a,...j,children:[I("div",{ref:t}),B?d("div",{className:e.IconPanel,children:[n,s,u]}):s,q]})});try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},shadowSize:{defaultValue:null,description:"",name:"shadowSize",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},noRippleEffect:{defaultValue:null,description:"",name:"noRippleEffect",required:!1,type:{name:"boolean"}}}}}catch{}export{m as B};