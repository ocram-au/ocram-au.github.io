import{m as c,ac as u,ad as a,ae as d}from"./index-31kweLEy.js";function p(e){return e==null||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function h(e,r){if(e==null)return null;if(!p(e))return new c("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return m(e,r);case"unique-value":return y(e,r);case"class-breaks":return f(e,r);case"dictionary":case"heatmap":return null}return null}function i(e,r){if(!r)return null;let n;if(n=Array.isArray(r)?r:[r],n.length>0){const s=n.map(t=>t.details.symbol.type||t.details.symbol.declaredClass).filter(t=>!!t);s.sort();const l=[];return s.forEach((t,o)=>{o!==0&&t===s[o-1]||l.push(t)}),new c("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${l.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}function m(e,r){const n={...u,...r,cimFallbackEnabled:!0};return i(e,a(e.symbol,n).error)}function y(e,r){var t;const n={...u,...r,cimFallbackEnabled:!0},s=(t=e.uniqueValueInfos)==null?void 0:t.map(o=>a(o.symbol,n).error).filter(d),l=a(e.defaultSymbol,n);return l.error&&(s==null||s.unshift(l.error)),i(e,s)}function f(e,r){const n={...u,...r,cimFallbackEnabled:!0},s=e.classBreakInfos.map(t=>a(t.symbol,n).error).filter(d),l=a(e.defaultSymbol,n);return l.error&&s.unshift(l.error),i(e,s)}export{h as s,p as t};