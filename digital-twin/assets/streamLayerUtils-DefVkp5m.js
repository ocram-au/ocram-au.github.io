import{$ as m,j as c}from"./utils-C5JFyME6.js";import{fG as u,fH as y,fI as s,fL as f}from"./index-ClOzeblJ.js";const n="Stream Service",p="Feed",d="stream-layer-save",v="stream-layer-save-as";function l(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function i(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function I(r,e){const{parsedUrl:a,title:o,fullExtent:t}=r;e.url=a.path,e.title||(e.title=o),e.extent=null,t!=null&&(e.extent=await u(t)),y(e,s.METADATA),f(e,s.SINGLE_LAYER)}async function A(r,e){return m({layer:r,itemType:n,additionalItemType:p,validateLayer:l,createItemData:i,errorNamePrefix:d},e)}async function L(r,e,a){return c({layer:r,itemType:n,validateLayer:l,createItemData:i,errorNamePrefix:v,newItem:e,setItemProperties:I},a)}export{A as save,L as saveAs};