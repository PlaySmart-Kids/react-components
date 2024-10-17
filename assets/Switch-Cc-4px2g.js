import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{r as u}from"./index-DJO9vBfz.js";import{b as S,j as N,e as V,l as P,h as R,A as i}from"./DefaultThemeProvider-Ce-zb_Sa.js";import{a as z}from"./CheckboxUtil-CqPWmFQ9.js";const B="_SwitchRoot_y56t7_1",D="_SwitchRootVertical_y56t7_8",q="_SwitchRootHorizontal_y56t7_12",A="_TogglePanel_y56t7_20",O="_ToggleSmallerPanel_y56t7_33",U="_IndicatorPanel_y56t7_40",M="_Label_y56t7_44",K="_LabelDisable_y56t7_50",W="_LabelRegular_y56t7_54",$="_LabelSmall_y56t7_60",F="_Unchecked_y56t7_66",G="_Checked_y56t7_73",J="_SmallerCheckBox_y56t7_80",Q="_Effect_y56t7_85",X="_EffectSmaller_y56t7_96",Y="_EffectChecked_y56t7_107",Z="_EffectSmallerChecked_y56t7_111",ee="_SwitchRootDisable_y56t7_122",ae="_Indicator_y56t7_40",le="_IndicatorSmaller_y56t7_139",te="_IndicatorChecked_y56t7_146",ce="_IndicatorSmallerChecked_y56t7_150",ne="_Bar_y56t7_154",oe="_BarSmaller_y56t7_164",e={SwitchRoot:B,SwitchRootVertical:D,SwitchRootHorizontal:q,TogglePanel:A,ToggleSmallerPanel:O,IndicatorPanel:U,Label:M,LabelDisable:K,LabelRegular:W,LabelSmall:$,Unchecked:F,Checked:G,SmallerCheckBox:J,Effect:Q,EffectSmaller:X,EffectChecked:Y,EffectSmallerChecked:Z,SwitchRootDisable:ee,Indicator:ae,IndicatorSmaller:le,IndicatorChecked:te,IndicatorSmallerChecked:ce,Bar:ne,BarSmaller:oe};function ie(a,m,d){d&&a.push(e.LabelDisable),m===R.NORMAL?a.push(e.LabelRegular):a.push(e.LabelSmall)}const I=u.forwardRef((a,m)=>{const{className:d,disabled:t,onChange:y,title:n}=a,h=[e.TogglePanel,S.FitContentWidth],[g,C]=u.useState(),_=[e.Label,S.Pointer],b=[e.Bar],f=[e.Indicator],k=N(a.size),p=V(a.color),o=P(a.labelAnchor),w=a.alwaysHighlight===void 0?!1:a.alwaysHighlight;ie(_,k,t);const r=a.checked===void 0?g===void 0?!1:g:a.checked,E=t?"var(--gray-200)":r||w?`var(--${p}-light-alpha)`:"var(--gray-400)",L=t?"var(--gray-400)":r||w?`var(--${p}-main)`:"var(--gray-200)";t&&h.push(S.DisableEvent),d&&h.push(d);const s=[];k===R.SMALL?(h.push(e.ToggleSmallerPanel),f.push(e.IndicatorSmaller),s.push(e.EffectSmaller),b.push(e.BarSmaller),r&&(f.push(e.IndicatorSmallerChecked),s.push(e.EffectSmallerChecked))):(s.push(e.Effect),r&&(f.push(e.IndicatorChecked),s.push(e.EffectChecked)));const x=c=>{t||(y&&y(c),C(c.target.checked))},T=(c,j,v,H)=>l.jsxs("div",{children:[l.jsx("div",{className:c.join(" "),style:{backgroundColor:v}}),l.jsx("div",{className:s.join(" ")}),l.jsx("div",{className:j.join(" "),style:{backgroundColor:H}})]});return u.useEffect(()=>{C(c=>c===a.defaultChecked?c:a.defaultChecked)},[a.defaultChecked]),l.jsxs("label",{tabIndex:0,ref:m,onKeyDown:z,className:e.SwitchRoot+" "+(t?e.SwitchRootDisable:"")+" "+(o===i.NORTH||o===i.SOUTH?e.SwitchRootVertical:e.SwitchRootHorizontal),children:[l.jsx("input",{tabIndex:-1,type:"checkbox",onChange:x,disabled:t||!1,checked:r,defaultChecked:a.defaultChecked?a.defaultChecked:!1}),n&&n!==""&&(o===i.NORTH||o===i.WEST)&&l.jsx("span",{className:_.join(" "),children:n}),l.jsx("div",{className:h.join(" "),children:T(b,f,E,L)}),n&&n!==""&&(o===i.SOUTH||o===i.EAST)&&l.jsx("span",{className:_.join(" "),children:n})]})});try{I.displayName="Switch",I.__docgenInfo={description:"",displayName:"Switch",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},alwaysHighlight:{defaultValue:null,description:"",name:"alwaysHighlight",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | SmallComponentSize"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},labelAnchor:{defaultValue:null,description:"",name:"labelAnchor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}export{I as S};
