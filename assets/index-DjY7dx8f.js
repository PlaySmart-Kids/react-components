function o(i,e,u,r){return isNaN(i)?0:parseFloat(i.toLocaleString("en-US",{useGrouping:!0,minimumFractionDigits:e!==void 0?e:2,maximumFractionDigits:u!==void 0?u:2}))}function t(i,e,u,r){return i!==void 0?isNaN(i)?t(0,e,u):i.toLocaleString("en-US",{useGrouping:!0,minimumFractionDigits:e!==void 0?e:2,maximumFractionDigits:u!==void 0?u:2}):""}export{t as N,o as a};