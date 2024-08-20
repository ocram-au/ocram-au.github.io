import{am as n}from"./index-5d_Oj-E1.js";import{c as r}from"./observers-CsTRugDt.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */let t;const i={childList:!0};function m(o){t||(t=r("mutation",s)),t.observe(o.el,i)}function f(o){t.unobserve(o.el)}function s(o){o.forEach(({target:e})=>{n(e)})}export{m as c,f as d};
