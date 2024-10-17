import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{l as $,j as A,f as O,e as U,b as v,h,A as o,N as w,M as g,a as d}from"./DefaultThemeProvider-Ce-zb_Sa.js";import{r as C}from"./index-DJO9vBfz.js";import{P as I}from"./ColorUtil-b9QtJkc2.js";import"./useTimeout-BASJc2V5.js";import{u as V}from"./useRipple-BbkXZzvg.js";import{H as q,a as B}from"./CheckboxUtil-CqPWmFQ9.js";const K="_TooltipShell_1xgv0_1",P="_Root_1xgv0_5",G="_Label_1xgv0_22",J="_LabelDisable_1xgv0_30",Q="_LabelFontRegular_1xgv0_34",X="_LabelFontSmall_1xgv0_38",Y="_LabelEast_1xgv0_42",Z="_LabelSmallEast_1xgv0_46",ee="_LabelWest_1xgv0_50",te="_LabelSmallWest_1xgv0_54",le="_LabelSouth_1xgv0_58",ae="_LabelNorth_1xgv0_62",oe="_LabelSmallSouth_1xgv0_66",se="_LabelSmallNorth_1xgv0_70",ne="_Checked_1xgv0_82",ce="_Unchecked_1xgv0_82",re="_SmallerRadio_1xgv0_89",he="_CheckMark_1xgv0_94",fe="_Effect_1xgv0_112",_e="_EffectSmall_1xgv0_125",ie="_CheckedWest_1xgv0_144",ue="_EffectWest_1xgv0_149",me="_CheckedSmallWest_1xgv0_154",Se="_EffectSmallWest_1xgv0_159",de="_CheckedCenterSouth_1xgv0_164",Ce="_EffectCenterSouth_1xgv0_169",pe="_CheckedSmallCenterSouth_1xgv0_174",Le="_EffectSmallCenterSouth_1xgv0_179",be="_CheckedCenterNorth_1xgv0_184",xe="_EffectCenterNorth_1xgv0_190",Ee="_CheckedSmallCenterNorth_1xgv0_196",ke="_EffectSmallCenterNorth_1xgv0_202",e={TooltipShell:K,Root:P,Label:G,LabelDisable:J,LabelFontRegular:Q,LabelFontSmall:X,LabelEast:Y,LabelSmallEast:Z,LabelWest:ee,LabelSmallWest:te,LabelSouth:le,LabelNorth:ae,LabelSmallSouth:oe,LabelSmallNorth:se,Checked:ne,Unchecked:ce,SmallerRadio:re,CheckMark:he,Effect:fe,EffectSmall:_e,CheckedWest:ie,EffectWest:ue,CheckedSmallWest:me,EffectSmallWest:Se,CheckedCenterSouth:de,EffectCenterSouth:Ce,CheckedSmallCenterSouth:pe,EffectSmallCenterSouth:Le,CheckedCenterNorth:be,EffectCenterNorth:xe,CheckedSmallCenterNorth:Ee,EffectSmallCenterNorth:ke};function ve(t,l,f,_){_&&l.push(e.LabelDisable),f===h.NORMAL?(l.push(e.LabelFontRegular),t===o.WEST?l.push(e.LabelWest):t===o.EAST?l.push(e.LabelEast):t===o.SOUTH?l.push(e.LabelSouth):t===o.NORTH&&l.push(e.LabelNorth)):(l.push(e.LabelFontSmall),t===o.WEST?l.push(e.LabelSmallWest):t===o.EAST?l.push(e.LabelSmallEast):t===o.SOUTH?l.push(e.LabelSmallSouth):t===o.NORTH&&l.push(e.LabelSmallNorth))}const N=C.forwardRef((t,l)=>{const f=C.useRef(),_=C.useRef(),{className:p,checked:R,defaultChecked:W,noRippleEffect:T,value:j,name:y,disabled:a,onChange:L,title:z}=t,i=$(t.labelAnchor),u=[e.Root],b=[e.Label],x=[e.CheckMark],c=[],s=[],r=A(t.size),E=O(t.hue),k=U(t.color);ve(i,b,r,a);const D=a?"var(--gray-300-alpha)":`var(--${k}-${E})`;a&&(u.push(v.DisableEvent),x.push(v.DisableEvent));let m="",S=20;r===h.SMALL?(m=e.SmallerRadio,s.push(e.EffectSmall),S=16):s.push(e.Effect),p&&u.push(p),i===o.WEST?r===h.SMALL?(c.push(e.CheckedSmallWest),s.push(e.EffectSmallWest)):(c.push(e.CheckedWest),s.push(e.EffectWest)):i===o.NORTH?r===h.SMALL?(c.push(e.CheckedSmallCenterNorth),s.push(e.EffectSmallCenterNorth)):(c.push(e.CheckedCenterNorth),s.push(e.EffectCenterNorth)):i===o.SOUTH&&(r===h.SMALL?(c.push(e.CheckedSmallCenterSouth),s.push(e.EffectSmallCenterSouth)):(c.push(e.CheckedCenterSouth),s.push(e.EffectCenterSouth)));const M=V(f,_,I(k,w(E)),!T&&!a,!0),H=F=>{L&&!a&&L(F)};return n.jsx("div",{className:e.TooltipShell,ref:l,children:n.jsx("span",{ref:f,children:n.jsxs("label",{tabIndex:a?-1:0,onKeyDown:a?q:B,className:u.join(" "),children:[n.jsx("span",{className:b.join(" "),children:z}),n.jsx("input",{tabIndex:-1,type:"radio",checked:R,defaultChecked:W,value:j,name:y,onChange:H,disabled:a}),n.jsxs("span",{className:x.join(" "),children:[n.jsx(g,{name:"radio_button_unchecked",color:a?"var(--text-disabled)":"var(--gray-400)",className:`${e.Unchecked} ${m} ${d(...c)}`,size:S}),n.jsx(g,{name:"radio_button_checked",color:a?"var(--text-disabled)":D,className:`${e.Checked} ${m} ${d(...c)}`,size:S}),!a&&n.jsx("div",{className:d(...s),ref:_,children:M})]})]})})})});try{N.displayName="RadioButton",N.__docgenInfo={description:"",displayName:"RadioButton",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"SmallComponentSize"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},noRippleEffect:{defaultValue:null,description:"",name:"noRippleEffect",required:!1,type:{name:"boolean"}},labelAnchor:{defaultValue:null,description:"",name:"labelAnchor",required:!1,type:{name:"enum",value:[{value:'"north"'},{value:'"east"'},{value:'"south"'},{value:'"west"'},{value:'"start"'},{value:'"end"'}]}}}}}catch{}export{N as R};
