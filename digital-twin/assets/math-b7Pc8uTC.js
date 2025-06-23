/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */const o=(n,t,e)=>Math.max(t,Math.min(n,e)),c=new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),h=n=>{const t=(""+n).match(c);return!t||parseInt(t[1])===0?0:Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0))};function m(n,t,e,r,a){return(n-t)*(a-r)/(e-t)+r}function u(n,t,e){return n<e?-1:n>t-e?1:0}export{u as g,o as m,m as o,h as s};
