import{l as ve,g as Pe,f as Ne,h as F,c as x,a as q,j as p,M as Ve,i as X,b as Y,F as we,x as De}from"./DefaultThemeProvider-3jRHqMMg.js";import{R as Oe,r as I}from"./index-BwDkhjyp.js";import{C as o,a as Te}from"./InputUtil-CptuWz0N.js";const qe="_Root_1pkeh_1",ke="_Section_1pkeh_6",Ee="_InlineContainer_1pkeh_21",Se="_Input_1pkeh_29",Ae="_ExpandIcon_1pkeh_45",Fe="_ExpandIconRotate_1pkeh_51",Be="_ListPanel_1pkeh_55",He="_ListPanelPopup_1pkeh_74",Me="_ListItem_1pkeh_80",je="_ListCursor_1pkeh_91",We="_DefaultListItemRenderer_1pkeh_96",ze="_DefaultListItemRenderOnInput_1pkeh_108",Ke="_InputLabel_1pkeh_125",u={Root:qe,Section:ke,InlineContainer:Ee,Input:Se,ExpandIcon:Ae,ExpandIconRotate:Fe,ListPanel:Be,ListPanelPopup:He,ListItem:Me,ListCursor:je,DefaultListItemRenderer:We,DefaultListItemRenderOnInput:ze,InputLabel:Ke};function B(a,s){s.scrollTo({top:a-30,behavior:"instant"})}function Ue(a,s){s=s==="wrap"?"wrap":De(s),s==="wrap"?a.push(o.WrapPadding):s===X.SMALL?a.push(o.SmallPadding):s===X.LARGE?a.push(o.LargePadding):a.push(o.RegularPadding)}function $e(a,s,w,d,f,b,v,D,m,R,h,y,_,i,C){a?(s.push(o.DisableBorder),s.push(o.DisableOutline),d.push(x.DisableTextColor),(f!=null&&f.toString().trim().length>0||!m)&&(d.push(o.LabelSmaller),d.push(o.LabelMoveUpForComboBox)),w.push(x.DisableTextColor),h.push(x.DisableTextColor)):v||R!==""||D?(v&&(h.push(u.ExpandIconRotate),h.push(x.TextPrimary)),d.push(o.LabelMoveUpForComboBox),d.push(o.LabelSmaller),d.push(y),C&&(s.push(o.FocusBorder),s.push(_),s.push(i)),w.push(y)):((f!=null&&f.toString().trim().length>0||!m)&&(d.push(o.LabelSmaller),d.push(o.LabelMoveUpForComboBox)),b?(h.push(x.TextPrimary),d.push(o.LabelActiveColor)):(h.push(x.TextSecondary),d.push(o.LabelNormalColor)),C&&(b?s.push(o.HoverBorder):s.push(o.NormalBorder)))}function Ge(a,s){const[w,d]=I.useState(!0),[f,b]=I.useState(!1),[v,D]=I.useState(!1),[m,R]=I.useState(a.value),[h,y]=I.useState(""),_=I.useRef(null),i=I.useRef(null),{autoComplete:C,rootItemStyle:g,className:H,style:ee,hint:P,rootItemRenderer:te,listItemRenderer:ne,listItemStyle:ae,onChange:O,options:l,startAdornment:M,disabled:k,fullWidth:oe}=a,le=a.size==="wrap"?"":a.label,se=a.alwaysHighlight?a.alwaysHighlight:!1,re=a.shrinkLabel!==void 0?a.shrinkLabel:!0,N=a.size==="wrap"?a.size:ve(a.size),E=Pe(a.hue),S=Ne(a.color),V=[u.Root],j=[u.Section],W=[u.Section,"body2"],z=[u.InlineContainer],K=[u.Input],U=[o.LabelForComboBox],ue=F("Border",S,E),ie=F("Color",S,E),ce=F("Outline",S,E),$=[u.ExpandIcon],de=(e,n,t,r)=>r?r(e,n):p("span",{className:Y(u.DefaultListItemRenderer,t==null?void 0:t.className),style:t==null?void 0:t.style,children:e});function pe(){return e=>{e.currentTarget.setSelectionRange(0,e.currentTarget.value.length),e.stopPropagation()}}function fe(){return e=>{if(e.code)if(e.code==="Enter"){if(C){const n=C(h,l);R(n[0].value),i.current&&i.current.blur()}}else e.code==="Tab"&&i.current&&i.current.blur();e.stopPropagation()}}function me(){return e=>{y(e.currentTarget.value),e.stopPropagation()}}const he=(e,n,t,r)=>{const c=e.find(L=>L.value===n);if(c){if(t)return t(c.label,c.value,r||!1);{const L=u.DefaultListItemRenderOnInput+" "+(r?x.DisableTextColor:v?o.LabelActiveColor:o.LabelNormalColor)+" "+(g&&g.className?" "+g.className:""),T=g==null?void 0:g.style;if(C){const A=f?{paddingInline:"0px"}:{opacity:"0",paddingInline:"0px"};return q(we,{children:[p("input",{tabIndex:-1,ref:i,className:L,value:h,onChange:me(),onKeyDown:fe(),onBlur:Re=>{f&&setTimeout(()=>{b(!1),i.current&&i.current.blur()},300),Re.stopPropagation()},onFocus:pe(),style:{...A,...T}}),!f&&p("span",{className:[L,u.InputLabel].join(" "),children:c.label})]})}else return p("span",{className:L,style:T,children:c.label})}}else return t?t(null,null,r||!1):p("span",{className:Y(u.DefaultListItemRenderOnInput,g==null?void 0:g.className),style:g==null?void 0:g.style,children:" "})},ge=e=>{const n=e.currentTarget.getAttribute("data-index");if(n){const t=parseInt(n);l[t].value!==m&&(O?O(l[t].value,t,l):R(l[t].value),y(l[t].value))}b(!1)},G=e=>{let n=e.querySelector("[data-cursor]");return n===null&&(n=e.querySelector("[data-selected]")),n},J=(e,n)=>{const t=G(e);if(t!==null){const r=t.getAttribute("data-index");if(r!==null){const c=parseInt(r),L=e.querySelector('[data-index="'+(c+n)+'"]');if(L&&(L.setAttribute("data-cursor","true"),t.removeAttribute("data-cursor"),t.classList.toggle(u.ListCursor),c>=0&&c<l.length&&L.classList.toggle(u.ListCursor),_.current)){const T=_.current,A=L.offsetTop;B(A,T)}}}},Le=e=>{if(e.code)if(e.code==="Escape")b(!1),e.preventDefault(),e.stopPropagation();else if(e.code==="ArrowDown")J(e.currentTarget,1),e.preventDefault(),e.stopPropagation();else if(e.code==="ArrowUp")J(e.currentTarget,-1),e.preventDefault(),e.stopPropagation();else if(e.code==="Enter"){const n=G(e.currentTarget);if(n!=null){const t=n.getAttribute("data-index");if(t!=null){const r=parseInt(t);y(l[r].value),R(l[r].value),b(!1)}}e.preventDefault(),e.stopPropagation()}else{const n=l.findIndex(t=>t.value.toLowerCase().indexOf(e.key)===0);if(n>=0&&(l[n].value!==m&&(O?O(l[n].value,n,l):R(l[n].value),y(l[n].value)),_.current)){const t=_.current,c=t.querySelector('[data-index="'+n+'"]').offsetTop;B(c,t)}}},be=()=>{D(!0)},Ce=()=>{D(!1)},Ie=e=>{b(!1)},xe=e=>{e.stopPropagation()},_e=()=>{b(!0),i.current&&i.current.focus()},ye=e=>{const n=document.documentElement.clientHeight;e.currentTarget.getBoundingClientRect().top>n/2?d(!1):d(!0),f||b(!0),e.stopPropagation(),i.current!==null?(i.current.setSelectionRange(0,i.current.value.length),setTimeout(()=>{i.current&&i.current.focus()},200)):setTimeout(()=>{if(_.current){const r=_.current,c=r.querySelector("[data-selected]");if(c){const L=c.offsetTop;B(L,r)}}},(l.length/100+1)*100)};$e(k,j,W,U,m,v,f,se,re,P||"",$,ie,ue,ce,N!=="wrap"),Ue(z,N),oe?V.push(x.FullWidth):V.push(x.FitContentWidth),k&&V.push(x.DisableEvent),H&&V.push(H),N==="wrap"&&K.push(u.WrapPadding),I.useEffect(()=>{y(m)},[m]),I.useEffect(()=>{R(e=>e===a.value?e:a.value)},[a.value]);const Q=I.useMemo(()=>C&&h!=null&&h.trim().length>0?C(h,l):l,[C,h,l]);return q("div",{ref:s,className:V.join(" "),style:ee,"data-hint":P!==""?P:void 0,children:[q("div",{className:j.join(" "),tabIndex:0,onClick:ye,...C?{onKeyDown:Le}:{onBlur:Ie},onMouseEnter:be,onMouseLeave:Ce,onFocus:_e,onMouseDown:xe,children:[f&&!C&&p("div",{className:o.HiddenInput,onClick:e=>{e.stopPropagation(),e.preventDefault(),b(!1)}}),p("label",{className:U.join(" "),children:le}),N!=="wrap"&&M?p("span",{className:o.StartAdornmentContainer,children:M}):N!=="wrap"&&p("span",{className:o.NormalSpacing,children:" "}),q("span",{className:z.join(" "),children:[p(Ve,{name:"expand_more",className:$.join(" ")}),p("div",{className:K.join(" "),children:he(l,m,te,k)})]}),f&&p("div",{ref:_,className:u.ListPanel+" "+(w?"":u.ListPanelPopup),children:Q&&Q.map((e,n)=>p("span",{className:u.ListItem+" "+(e.value===m?u.ListCursor:""),"data-selected":e.value===m?!0:void 0,"data-cursor":e.value===m?!0:void 0,"data-index":`${n}`,onClick:ge,children:de(e.label,e.value,ae,ne)},`list_item_${n}`))})]}),Te(W,P)]})}const Z=Oe.forwardRef(Ge);try{Z.displayName="Combobox",Z.__docgenInfo={description:"",displayName:"Combobox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"((label: string, options: Option<L, V>[]) => Option<L, V>[])"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: V, index: number, options: Option<L, V>[]) => void)"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<L, V>[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"V"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"DefaultRenderer"}},alwaysHighlight:{defaultValue:null,description:"",name:"alwaysHighlight",required:!1,type:{name:"boolean"}},shrinkLabel:{defaultValue:null,description:"",name:"shrinkLabel",required:!1,type:{name:"boolean"}},rootItemRenderer:{defaultValue:null,description:"",name:"rootItemRenderer",required:!1,type:{name:"((label: L | null, value: V | null, disabled: boolean) => ReactNode)"}},rootItemStyle:{defaultValue:null,description:"",name:"rootItemStyle",required:!1,type:{name:"ItemStyle"}},listItemRenderer:{defaultValue:null,description:"",name:"listItemRenderer",required:!1,type:{name:"((label: L, value: V) => ReactNode)"}},listItemStyle:{defaultValue:null,description:"",name:"listItemStyle",required:!1,type:{name:"ItemStyle"}}}}}catch{}export{Z as C};
