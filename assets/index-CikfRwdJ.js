function a(){return" "}function c(o,n){let t=o,e=n;o.length<n.length&&(t=n,e=o);const i=t.length;return i===0?1:(i-r(t,e))/parseFloat(String(i))}function r(o,n){const t=[];for(let e=0;e<=o.length;e++){let i=e;for(let _=0;_<=n.length;_++)if(e===0)t[_]=_;else if(_>0){let l=t[_-1];o.charAt(e-1)!==n.charAt(_-1)&&(l=Math.min(Math.min(l,i),t[_])+1),t[_-1]=i,i=l}e>0&&(t[n.length]=i)}return t[n.length]}function g(){console.log(`%c
 _____ ______     _
| ____|__  / |__ (_)____
|  _|   / /| '_ \\| |_  /
| |___ / /_| |_) | |/ /
|_____/____|_.__/|_/___|

Welcome to one of the libraries created by the EZbiz team! For suggestions or inquiries, please email us at playsmart.kids@gmail.com.

`,"font-family:monospace;color:blue; font-size: 12px;white-space: nowrap")}export{a as N,g as P,c as S};
