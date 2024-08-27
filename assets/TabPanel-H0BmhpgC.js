import{a as C,j as E}from"./DefaultThemeProvider-BaYT9d3z.js";import{r}from"./index-BwDkhjyp.js";import{r as h}from"./SizeWatcher-BDbsP5oN.js";const S="_Root_1ddyj_1",V="_VerticalAlign_1ddyj_16",A="_Tab_1ddyj_22",I="_TabEqual_1ddyj_49",k="_TabDisabled_1ddyj_53",B="_TabActive_1ddyj_58",L="_TabBar_1ddyj_66",i={Root:S,VerticalAlign:V,Tab:A,TabEqual:I,TabDisabled:k,TabActive:B,TabBar:L};function q(s){const n=[i.Tab],{onClick:b,className:c,style:d,children:l}=s;return c&&n.push(c),C("span",{className:n.join(" "),style:d,onClick:b,children:[l,E("div",{})]})}try{q.displayName="Tab",q.__docgenInfo={description:"",displayName:"Tab",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLSpanElement, MouseEvent>) => void)"}},onNextTab:{defaultValue:null,description:"",name:"onNextTab",required:!1,type:{name:"((forward: boolean) => void)"}}}}}catch{}function N(s){const[n,b]=r.useState(s.value),{equalSize:c,onChange:d,children:l}=s,u=r.useRef(),x=e=>{let a=l.findIndex(t=>t.props.value===n);a<0||(e?a++:a--,a<0?f(l[l.length-1].props.value):a>=l.length?f(l[0].props.value):f(l[a].props.value))},f=e=>{if(e!==n){const a=n;let t=l.findIndex(o=>o.props.value===e),p=l.findIndex(o=>o.props.value===a);if(t<0&&(t=0),p<0&&(p=0),u.current){const o=u.current,y=o.children[p],T=o.children[t],g=y.lastChild,_=T.lastChild,j=T.offsetLeft+_.offsetLeft,v=o.lastChild;v.style.left=j+"px",v.style.width=_.offsetWidth+"px",v.style.opacity="1",g.style.opacity="0",_.style.opacity="0",setTimeout(()=>{_.style.opacity="1",v.style.opacity="0",d?d(e,a):b(e)},300)}else d?d(e,a):b(e)}},m=r.useCallback(()=>{if(u.current){let e=l.findIndex(T=>T.props.value===n);const a=u.current;e<0&&(e=0);const t=a.children[e],p=t.lastChild,o=t.offsetLeft+p.offsetLeft,y=a.lastChild;y.style.left=o+"px",y.style.width=p.offsetWidth+"px",y.style.opacity="0"}},[n,l]);return r.useEffect(()=>{b(e=>e===s.value?e:s.value)},[s.value]),r.useEffect(()=>{m()},[m]),r.useEffect(()=>{const e=u.current;return e&&h.observe(e,()=>{m()}),()=>{e&&h.unobserve(e)}},[m]),C("div",{className:i.Root,ref:u,tabIndex:0,onKeyDown:e=>{const{code:a}=e;a==="ArrowLeft"?x(!1):(a==="ArrowRight"||a==="Space")&&x(!0),e.stopPropagation()},children:[l.map((e,a)=>{let t=`tab_${a}`;return e.props.disabled?(t=t+"_not_select",r.cloneElement(e,{className:(c?i.TabEqual+" ":"")+i.TabDisabled,onClick:()=>{f(e.props.value)},selected:!1,key:t})):e.props.value===n?(t=t+"_selected",r.cloneElement(e,{className:(c?i.TabEqual+" ":"")+i.TabActive,onClick:()=>f(e.props.value),onNextTab:x,selected:!0,key:t})):(t=t+"_not_select",r.cloneElement(e,{className:c?i.TabEqual:"",onClick:()=>f(e.props.value),selected:!1,key:t}))}),E("div",{className:i.TabBar})]})}try{N.displayName="TabPanel",N.__docgenInfo={description:"",displayName:"TabPanel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T, oldValue: T) => void)"}},equalSize:{defaultValue:null,description:"",name:"equalSize",required:!1,type:{name:"boolean"}}}}}catch{}export{N as T,q as a};