import{$ as p,j as f}from"./utils-CjWoM8cU.js";import{hd as s,fM as y,fG as d,fH as v,fI as x}from"./index-31kweLEy.js";const n="Media Layer",I="media-layer-save",E="media-layer-save-as",o=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function u(e){return y(e,"portal-item",!0)}function l(e){return e.layerJSON}async function c(e,t){t.extent=e.fullExtent?await d(e.fullExtent):null}async function N(e,t){t.title||(t.title=e.title),await c(e,t),v(t,x.METADATA)}async function M(e,t){return p({layer:e,itemType:n,validateLayer:i,createJSONContext:a=>u(a),createItemData:l,errorNamePrefix:I,supplementalUnsupportedErrors:o,setItemProperties:c,saveResources:(a,r)=>s(e.resourceReferences,r)},t)}async function P(e,t,a){return f({layer:e,itemType:n,validateLayer:i,createJSONContext:r=>u(r),createItemData:l,errorNamePrefix:E,supplementalUnsupportedErrors:o,newItem:t,setItemProperties:N,saveResources:(r,m)=>s(e.resourceReferences,m)},a)}export{M as save,P as saveAs};