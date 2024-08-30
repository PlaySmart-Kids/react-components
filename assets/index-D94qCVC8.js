function a(o,n){let _=o,e=n;o.length<n.length&&(_=n,e=o);const i=_.length;return i===0?1:(i-r(_,e))/parseFloat(String(i))}function r(o,n){const _=[];for(let e=0;e<=o.length;e++){let i=e;for(let t=0;t<=n.length;t++)if(e===0)_[t]=t;else if(t>0){let l=_[t-1];o.charAt(e-1)!==n.charAt(t-1)&&(l=Math.min(Math.min(l,i),_[t])+1),_[t-1]=i,i=l}e>0&&(_[n.length]=i)}return _[n.length]}function c(){console.log(`%c
 _____ ______     _
| ____|__  / |__ (_)____
|  _|   / /| '_ \\| |_  /
| |___ / /_| |_) | |/ /
|_____/____|_.__/|_/___|

Welcome to one of the libraries created by the EZbiz team! For suggestions or inquiries, please email us at playsmart.kids@gmail.com.

`,"font-family:monospace;color:blue; font-size: 12px;white-space: nowrap")}export{c as P,a as S};
