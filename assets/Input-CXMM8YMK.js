import{f as de,g as ce,h as j,c as g,a as E,j as r,b as Y}from"./DefaultThemeProvider-D8uc623f.js";import{r as p}from"./index-BwDkhjyp.js";import{C as e,P as me,a as he}from"./InputUtil-DB9qJFib.js";function fe(t,l,u,n,d,f,b,I,c,m,L,h,x,T,C,S){t?(l.push(e.DisableBorder),l.push(e.DisableOutline),n.push(g.DisableTextColor),(d!=null&&d.toString().trim().length>0||f||!m)&&(n.push(e.LabelSmaller),n.push(e.LabelMoveUp),C&&n.push(e.LabelMoveUpCompact)),u.push(g.DisableTextColor)):I||L!==""||c?(n.push(e.LabelMoveUp),C&&n.push(e.LabelMoveUpCompact),n.push(e.LabelSmaller),n.push(h),l.push(e.FocusBorder),l.push(x),l.push(T),u.push(h)):((d!=null&&d.toString().trim().length>0||f||S==="date"||!m)&&(n.push(e.LabelSmaller),n.push(e.LabelMoveUp),C&&n.push(e.LabelMoveUpCompact)),b?n.push(e.LabelActiveColor):n.push(e.LabelNormalColor),u.push(h),b?l.push(e.HoverBorder):l.push(e.NormalBorder))}const Z=p.forwardRef((t,l)=>{const[u,n]=p.useState(!1),[d,f]=p.useState(!1),[b,I]=p.useState(!1),c=p.useRef(),[m,L]=p.useState(""),h=()=>{I(!1),n(!0)},x=()=>{n(!1)},T=()=>{f(!0)},C=()=>{f(!1)},S=a=>{if(N){const v=a.currentTarget.querySelector("textarea");v&&v.focus()}else{const v=a.currentTarget.querySelector("input");v&&v.focus()}},F=a=>{$?$(a):L(a.target.value)},{value:B,defaultValue:U,className:_,style:ee,autoComplete:k,name:te,hint:i,rows:D,cols:W,type:s,maxLength:z,fullWidth:ne,title:O,size:ae,onChange:$,disabled:A,startAdornment:G,endAdornment:J,inputProps:le,textAreaProps:ue,inputRenderer:K,compact:o,placeholder:H}=t,N=t.type==="text"?t.multiLines:!1,V=[e.InputRoot],M=[e.Section],w=[e.HintSection,"body2"],q=[e.Label],Q=[e.InputContainer],y=[e.Input];o&&(q.push(e.LabelCompact),y.push(e.InputCompact),w.push(e.HintSectionCompact));const P=de(t.color),R=ce(t.hue),se=t.alwaysHighlight?t.alwaysHighlight:!1,oe=t.shrinkTitle!==void 0?t.shrinkTitle:!0,re=j("Border",P,R),ie=j("Color",P,R),pe=j("Outline",P,R);fe(A,M,w,q,m,b,d,u,se,oe,i||"",ie,re,pe,o,s),me(Q,ae,o),s==="password"&&y.push(e.PasswordInput),ne?V.push(g.FullWidth):V.push(g.FitContentWidth),A&&V.push(g.DisableEvent),_&&M.push(_);const X=q.indexOf(e.LabelMoveUp)>=0;return p.useEffect(()=>{L(a=>a!==t.value?t.value?t.value:"":a)},[t.value]),E("div",{ref:l,className:V.join(" "),style:ee,children:[E("div",{className:M.join(" "),onClick:S,onMouseEnter:T,onMouseLeave:C,children:[G?r("span",{ref:c,className:Y(e.StartAdornmentContainer,o?e.StartAdornmentContainerCompact:void 0),children:G}):r("span",{className:o?e.CompactSpacing:e.NormalSpacing,children:" "}),E("span",{className:Q.join(" "),children:[r("label",{className:q.join(" "),style:{marginInlineStart:`-${c&&c.current&&X?c.current.clientWidth-(o?8:16):0}px`},children:X?O:H&&H.trim()!==""?H:O}),N&&r("textarea",{style:u||s!=="text"?{}:{opacity:"0"},className:y.join(" "),...ue,onChange:a=>{F(a)},maxLength:z,onFocus:h,onBlur:x,"data-hint":i!==""?i:void 0,rows:D||5,cols:W||80,value:m,defaultValue:U,disabled:A,autoComplete:k}),!N&&r("input",{style:u||s!=="text"?{}:{opacity:"0"},name:te,className:y.join(" "),...le,onChange:a=>{F(a)},onAnimationStart:()=>{I(!0)},"data-hint":i!==""?i:void 0,maxLength:z,onFocus:h,onBlur:x,value:m,defaultValue:U,disabled:A,type:s==="number"||s==="date"?"date":s,autoComplete:k}),!u&&s==="text"&&r("div",{className:[...y,N?e.CustomTextArea:e.CustomInput].join(" "),children:K?K(B):B})]}),J?r("span",{className:Y(e.EndAdornmentContainer,o?e.EndAdornmentContainerCompact:void 0),children:J}):r("span",{className:o?e.CompactSpacing:e.NormalSpacing,children:" "})]}),he(w,i)]})});try{Z.displayName="Input",Z.__docgenInfo={description:"",displayName:"Input",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<InputElement>) => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!1,type:{name:"((value: string | number) => ReactNode)"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},multiLines:{defaultValue:null,description:"",name:"multiLines",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},textAreaProps:{defaultValue:null,description:"",name:"textAreaProps",required:!1,type:{name:"TextareaHTMLAttributes<HTMLTextAreaElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"tel"'},{value:'"email"'},{value:'"date"'},{value:'"password"'}]}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"DefaultRenderer"}},alwaysHighlight:{defaultValue:null,description:"",name:"alwaysHighlight",required:!1,type:{name:"boolean"}},shrinkTitle:{defaultValue:null,description:"",name:"shrinkTitle",required:!1,type:{name:"boolean"}}}}}catch{}export{Z as I};