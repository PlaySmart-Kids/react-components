import{a as P,j as p}from"./DefaultThemeProvider-BRxWeqUn.js";import{r}from"./index-BwDkhjyp.js";import{c as se,d as ue,e as A,f as V,L as oe}from"./ProfileLink-BQnI0M2i.js";import{C as e,P as re,a as ie}from"./InputUtil-Bs_DcTQd.js";const de="_FitContent_1nlum_1",ce="_TagPanel_1nlum_5",pe="_InputContainer_1nlum_11",me="_Label_1nlum_19",L={FitContent:de,TagPanel:ce,InputContainer:pe,Label:me};function fe(n,u,o,a,l,i,g,y,I,m,q,d,v,T){n?(u.push(e.DisableBorder),u.push(e.DisableOutline),a.push(V.DisableTextColor),(l!=null&&l.length>0||i||!m)&&(a.push(e.LabelSmaller),a.push(e.LabelMoveUp)),o.push(V.DisableTextColor)):y||q!==""||I?(a.push(e.LabelMoveUp),a.push(e.LabelSmaller),a.push(d),u.push(e.FocusBorder),u.push(v),u.push(T),o.push(d)):((l!=null&&l.length>0||i||!m)&&(a.push(e.LabelSmaller),a.push(e.LabelMoveUp)),g?a.push(e.LabelActiveColor):a.push(e.LabelNormalColor),o.push(d),g?u.push(e.HoverBorder):u.push(e.NormalBorder))}const D=r.forwardRef((n,u)=>{const[o,a]=r.useState(""),[l,i]=r.useState(n.values?n.values:[]),[g,y]=r.useState(!1),[I,m]=r.useState(!1),[q,d]=r.useState(!1),v=()=>{d(!1),y(!0)},T=s=>{if(s.code==="Enter"){const t=[...l,s.currentTarget.value];a(""),c?c(t):i(t)}else if(s.code==="Backspace"&&l.length>0){const t=[...l];t.splice(t.length-1,1),a(""),c?c(t):i(t)}},j=s=>{a(s.currentTarget.value)},B=s=>{y(!1),a("")},E=()=>{m(!0)},R=()=>{m(!1)},z=s=>{const t=s.currentTarget.querySelector("input");t&&t.focus()},{className:w,style:W,name:O,hint:f,maxLength:U,fullWidth:K,label:$,size:G,onChange:c,getLabelColor:H,disabled:_,startAdornment:J,endAdornment:Q,inputProps:X}=n,Y=r.useRef(null),h=[e.InputRoot],F=[e.Section],S=[e.Section,"body2"],M=[e.Label],k=[L.InputContainer],Z=[e.Input],C=se(n.color),b=ue(n.hue),ee=n.alwaysHighlight?n.alwaysHighlight:!1,ne=n.shrinkLabel!==void 0?n.shrinkLabel:!0,ae=A("Border",C,b),te=A("Color",C,b),le=A("Outline",C,b);return fe(_,F,S,M,l,q,I,g,ee,ne,f||"",te,ae,le),re(k,G),K?h.push(V.FullWidth):h.push(L.FitContent),_&&h.push(V.DisableEvent),w&&h.push(w),r.useEffect(()=>{i(n.values?n.values:[])},[n.values]),P("div",{ref:u,className:h.join(" "),style:W,children:[P("div",{className:F.join(" "),onClick:z,onMouseEnter:E,onMouseLeave:R,children:[p("span",{className:e.StartAdornmentContainer,children:J}),P("span",{className:k.join(" "),children:[p("label",{className:M.join(" "),children:$}),l.map((s,t)=>p(oe,{color:H?H(s):C,hue:b,title:s,className:L.Label,onClick:x=>{const N=[...l];N.splice(t,1),c?c(N):i(N),x.stopPropagation(),x.preventDefault()}},`tag_${t}`)),p("div",{className:L.TagPanel,children:p("input",{ref:Y,name:O,className:Z.join(" "),...X,onAnimationStart:()=>{d(!0)},"data-hint":f!==""?f:void 0,maxLength:U,onFocus:v,onKeyDown:T,onBlur:B,onChange:j,value:o,disabled:_,size:Math.max(o==null?void 0:o.length,1),type:"text",autoComplete:"false"})})]}),p("span",{className:e.EndAdornmentContainer,children:Q})]}),ie(S,f)]})});try{D.displayName="TagInput",D.__docgenInfo={description:"",displayName:"TagInput",props:{values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newValue: string[]) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},getLabelColor:{defaultValue:null,description:"",name:"getLabelColor",required:!1,type:{name:"((value: string) => ColorType)"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"DefaultRenderer"}},alwaysHighlight:{defaultValue:null,description:"",name:"alwaysHighlight",required:!1,type:{name:"boolean"}},shrinkLabel:{defaultValue:null,description:"",name:"shrinkLabel",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{D as T};