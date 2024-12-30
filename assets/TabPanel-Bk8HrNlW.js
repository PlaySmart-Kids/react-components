import{j as y}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{r as k}from"./SizeWatcher-BDbsP5oN.js";import{f as E,a as V,c as q,k as I,N as L}from"./DefaultThemeProvider-DB5yquFP.js";const P="_TabPanelRoot_5d8rc_1",B="_VerticalAlign_5d8rc_15",S="_Tab_5d8rc_1",R="_TabDisabled_5d8rc_48",D="_TabActive_5d8rc_53",M="_TabBar_5d8rc_228",b={TabPanelRoot:P,VerticalAlign:B,Tab:S,TabDisabled:R,TabActive:D,"TabActive-primary-light":"_TabActive-primary-light_5d8rc_60","TabActive-info-light":"_TabActive-info-light_5d8rc_64","TabActive-error-light":"_TabActive-error-light_5d8rc_68","TabActive-success-light":"_TabActive-success-light_5d8rc_72","TabActive-warning-light":"_TabActive-warning-light_5d8rc_76","TabActive-secondary-light":"_TabActive-secondary-light_5d8rc_80","TabActive-primary-lighter":"_TabActive-primary-lighter_5d8rc_84","TabActive-info-lighter":"_TabActive-info-lighter_5d8rc_88","TabActive-error-lighter":"_TabActive-error-lighter_5d8rc_92","TabActive-success-lighter":"_TabActive-success-lighter_5d8rc_96","TabActive-warning-lighter":"_TabActive-warning-lighter_5d8rc_100","TabActive-secondary-lighter":"_TabActive-secondary-lighter_5d8rc_104","TabActive-primary-lightest":"_TabActive-primary-lightest_5d8rc_108","TabActive-info-lightest":"_TabActive-info-lightest_5d8rc_112","TabActive-error-lightest":"_TabActive-error-lightest_5d8rc_116","TabActive-success-lightest":"_TabActive-success-lightest_5d8rc_120","TabActive-warning-lightest":"_TabActive-warning-lightest_5d8rc_124","TabActive-secondary-lightest":"_TabActive-secondary-lightest_5d8rc_128","TabActive-primary-main":"_TabActive-primary-main_5d8rc_132","TabActive-info-main":"_TabActive-info-main_5d8rc_136","TabActive-error-main":"_TabActive-error-main_5d8rc_140","TabActive-success-main":"_TabActive-success-main_5d8rc_144","TabActive-warning-main":"_TabActive-warning-main_5d8rc_148","TabActive-secondary-main":"_TabActive-secondary-main_5d8rc_152","TabActive-primary-dark":"_TabActive-primary-dark_5d8rc_156","TabActive-info-dark":"_TabActive-info-dark_5d8rc_160","TabActive-error-dark":"_TabActive-error-dark_5d8rc_164","TabActive-success-dark":"_TabActive-success-dark_5d8rc_168","TabActive-warning-dark":"_TabActive-warning-dark_5d8rc_172","TabActive-secondary-dark":"_TabActive-secondary-dark_5d8rc_176","TabActive-primary-darker":"_TabActive-primary-darker_5d8rc_180","TabActive-info-darker":"_TabActive-info-darker_5d8rc_184","TabActive-error-darker":"_TabActive-error-darker_5d8rc_188","TabActive-success-darker":"_TabActive-success-darker_5d8rc_192","TabActive-warning-darker":"_TabActive-warning-darker_5d8rc_196","TabActive-secondary-darker":"_TabActive-secondary-darker_5d8rc_200","TabActive-primary-darkest":"_TabActive-primary-darkest_5d8rc_204","TabActive-info-darkest":"_TabActive-info-darkest_5d8rc_208","TabActive-error-darkest":"_TabActive-error-darkest_5d8rc_212","TabActive-success-darkest":"_TabActive-success-darkest_5d8rc_216","TabActive-warning-darkest":"_TabActive-warning-darkest_5d8rc_220","TabActive-secondary-darkest":"_TabActive-secondary-darkest_5d8rc_224",TabBar:M};function x(i){const c=[b.Tab],{onClick:T,className:o,style:r,children:l}=i;return o&&c.push(o),y.jsxs("span",{className:c.join(" "),style:r,onClick:T,children:[l,y.jsx("div",{})]})}try{x.displayName="Tab",x.__docgenInfo={description:"",displayName:"Tab",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLSpanElement, MouseEvent>) => void)"}},onNextTab:{defaultValue:null,description:"",name:"onNextTab",required:!1,type:{name:"((forward: boolean) => void)"}}}}}catch{}function C(i){const[c,T]=n.useState(i.value),{onChange:o,children:r}=i,l=n.useRef(),g=E(i.color),h=V.MAIN,N=i.justifyContent?i.justifyContent:"start",m=e=>{let a=r.findIndex(t=>t.props.value===c);a<0||(e?a++:a--,a<0?d(r[r.length-1].props.value):a>=r.length?d(r[0].props.value):d(r[a].props.value))},d=e=>{if(e!==c){const a=c;let t=r.findIndex(s=>s.props.value===e),_=r.findIndex(s=>s.props.value===a);if(t<0&&(t=0),_<0&&(_=0),l.current){const s=l.current,v=s.children[_],f=s.children[t],w=v.lastChild,A=f.lastChild,j=f.offsetLeft+A.offsetLeft,p=s.lastChild;p.style.left=j+"px",p.style.width=A.offsetWidth+"px",p.style.opacity="1",w.style.opacity="0",A.style.opacity="0",setTimeout(()=>{A.style.opacity="1",p.style.opacity="0",o&&o(e,a),T(e)},300)}else o&&o(e,a),T(e)}},u=n.useCallback(()=>{if(l.current){let e=r.findIndex(f=>f.props.value===c);const a=l.current;e<0&&(e=0);const t=a.children[e],_=t.lastChild,s=t.offsetLeft+_.offsetLeft,v=a.lastChild;v.style.left=s+"px",v.style.width=_.offsetWidth+"px",v.style.opacity="0"}},[c,r]);return n.useEffect(()=>{T(e=>e===i.value?e:i.value)},[i.value]),n.useEffect(()=>{u()},[u]),n.useEffect(()=>{const e=l.current;return e&&k.observe(e,()=>{u()}),()=>{e&&k.unobserve(e)}},[u]),y.jsxs("div",{className:b.TabPanelRoot,style:{justifyContent:N},ref:l,tabIndex:0,onKeyDown:e=>{const{code:a}=e;a==="ArrowLeft"?m(!1):(a==="ArrowRight"||a==="Space")&&m(!0),e.stopPropagation()},children:[r.map((e,a)=>{let t=`tab_${a}`;return e.props.disabled?(t=t+"_not_select",n.cloneElement(e,{className:b.TabDisabled,onClick:()=>{d(e.props.value)},selected:!1,key:t})):e.props.value===c?(t=t+"_selected",n.cloneElement(e,{className:b.TabActive+" "+b[`TabActive-${g}-${h}`],onClick:()=>d(e.props.value),onNextTab:m,selected:!0,key:t})):(t=t+"_not_select",n.cloneElement(e,{className:"",onClick:()=>d(e.props.value),selected:!1,key:t}))}),y.jsx("div",{className:q(b.TabBar,I(g,L(h)))})]})}try{C.displayName="TabPanel",C.__docgenInfo={description:"",displayName:"TabPanel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T, oldValue: T) => void)"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"JustifyContent"}}}}}catch{}export{C as T,x as a};
