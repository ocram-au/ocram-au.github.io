import{$ as f,j as m}from"./utils-Ct4535uZ.js";import{gX as o,fI as p,fu as v,fp as I,fq as n,ft as d}from"./index-CQXxPdCL.js";const c="Group Layer",g="group-layer-save",A="group-layer-save-as",s=n.GROUP_LAYER_MAP;function i(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function P(e){return{isValid:p(e,s),errorMessage:`Layer.portalItem.typeKeywords should have '${s}'`}}function u(e,r){return{...v(e,"web-map",!0),initiator:r}}function l(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||(r.title=e.title),I(r,n.METADATA),d(r,s)}async function x(e,r){return f({layer:e,itemType:c,validateLayer:i,validateItem:P,createJSONContext:a=>u(a,e),createItemData:l,errorNamePrefix:g,saveResources:async(a,t)=>(e.sourceIsPortalItem||await a.removeAllResources().catch(()=>{}),o(e.resourceReferences,t))},r)}async function N(e,r,a){return m({layer:e,itemType:c,validateLayer:i,createJSONContext:t=>u(t,e),createItemData:l,errorNamePrefix:A,newItem:r,setItemProperties:R,saveResources:(t,y)=>o(e.resourceReferences,y)},a)}export{x as save,N as saveAs};