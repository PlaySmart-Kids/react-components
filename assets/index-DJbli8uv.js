import{r as o}from"./index-DJO9vBfz.js";function e(n){return n&&typeof n=="object"&&!Array.isArray(n)}function u(n,s){const t={...n};return e(n)&&e(s)&&Object.keys(s).forEach(r=>{e(s[r])&&r in n?t[r]=u(n[r],s[r]):t[r]=s[r]}),t}function l(n,s){return n.split(".").reduceRight((r,f)=>({[f]:r}),s)}function i(n){if(n===void 0)return;if(n===null)return null;if(typeof n!=="object"||o.isValidElement(n))return n;if(Array.isArray(n)){const t=[];for(const r of n)t.push(i(r));return t}else{const t={};for(const r of Object.keys(n))t[r]=i(n[r]);return t}}function p(n,s){const t=[];for(let r=n;r<=s;r++)t.push(r);return t}const c=()=>{};export{l as C,u as D,c as E,p as R,i as a};
