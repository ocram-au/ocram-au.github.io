import{v as w,t as v,fn as f,fq as p}from"./index-CnMvbdm6.js";import{s as S}from"./associatedFeatureServiceUtils-COr4kv2i.js";import{b as I,i as h,a as M}from"./fetchService-B2dndHyQ.js";class P{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(t,a){const r=this._serviceMetadatas.get(t);if(r)return r;const s=await I(t,a);return this._serviceMetadatas.set(t,s),s}async fetchItemData(t){const{id:a}=t;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await t.fetchData();return r.set(a,s),s}async fetchCustomParameters(t,a){const r=await this.fetchItemData(t);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function m(e){const t={id:e.id,name:e.name},a=h(e.type);return a!=="FeatureLayer"&&(t.layerType=a),t}async function T(e,t,a){var r,s,n;if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const c=await a.fetchServiceMetadata(t,{customParameters:(r=y(e))==null?void 0:r.customParameters});(e=e||{}).layers=e.layers||((s=c==null?void 0:c.layers)==null?void 0:s.map(m)),e.tables=e.tables||((n=c==null?void 0:c.tables)==null?void 0:n.map(m))}return e}function y(e){if(!e)return null;const{layers:t,tables:a}=e;return t!=null&&t.length?t[0]:a!=null&&a.length?a[0]:null}function G(e,t){return t==null?null:[...e.layers||[],...e.tables||[]].find(a=>a.id===t)}function ae(e,t){return[...e.layers||[],...e.tables||[]].filter(({layerType:a})=>a?a===t:t==="ArcGISFeatureLayer")}function L(e){var t,a;return(((t=e==null?void 0:e.layers)==null?void 0:t.length)??0)+(((a=e==null?void 0:e.tables)==null?void 0:a.length)??0)}function re(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function C(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function F(e,t,a){var n,c,l,i;if(!(e!=null&&e.url))return t??{};if(t??(t={}),!t.layers){const u=await a.fetchServiceMetadata(e.url);t.layers=(n=u.layers)==null?void 0:n.map(m)}const{serverUrl:r,portalItem:s}=await S(e.url,{sceneLayerItem:e,customParameters:(c=y(t))==null?void 0:c.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return t.tables=[],t;if(!t.tables&&s){const u=await s.fetchData();if(u!=null&&u.tables)t.tables=u.tables.map(m);else{const o=await a.fetchServiceMetadata(r,{customParameters:(l=y(u))==null?void 0:l.customParameters});t.tables=(i=o==null?void 0:o.tables)==null?void 0:i.map(m)}}if(t.tables)for(const u of t.tables)u.url=`${r}/${u.id}`;return t}async function D(e){let{portalItem:t}=e;!t||t instanceof w||(t=new w(t));const a=await O(t);return new a.constructor({portalItem:t,...a.properties})}async function O(e){await e.load();const t=new P;return _(await N(e,t))}async function N(e,t){switch(e.type){case"3DTiles Service":return A();case"CSV":return x();case"Feature Collection":return V(e);case"Feature Service":return j(e,t);case"Feed":return H();case"GeoJson":return k();case"Group Layer":return Q();case"Image Service":return W(e,t);case"KML":return R();case"Knowledge Graph Layer":return q();case"Map Service":return $(e,t);case"Media Layer":return X();case"Scene Service":return K(e,t);case"Stream Service":return J();case"Vector Tile Service":return U();case"WFS":return z();case"WMS":return E();case"WMTS":return B();default:throw new v("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function _(e){const t=e.className,a=M[t];return{constructor:await a(),properties:e.properties}}async function $(e,t){return await Y(e,t)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function j(e,t){const a=await b(e,t);if(typeof a=="object"){const{sourceJSON:r,className:s}=a,n={sourceJSON:r};return a.id!=null&&(n.layerId=a.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function K(e,t){var r;const a=await b(e,t,async()=>{try{if(!e.url)return[];const{serverUrl:s}=await S(e.url,{sceneLayerItem:e}),n=await t.fetchServiceMetadata(s);return(n==null?void 0:n.tables)??[]}catch{return[]}});if(typeof a=="object"){const s={};let n;if(a.id!=null?(s.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const l of Object.keys(f))if(e.typeKeywords.includes(l))return{className:f[l]}}const c=await t.fetchServiceMetadata(n,{customParameters:await t.fetchCustomParameters(e,l=>{var i;return(i=y(l))==null?void 0:i.customParameters})});return{className:f[c==null?void 0:c.layerType]||"SceneLayer",properties:s}}if(a===!1){const s=await t.fetchServiceMetadata(e.url);if((s==null?void 0:s.layerType)==="Voxel")return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function V(e){await e.load();const t=p(e,"Map Notes"),a=p(e,"Markup");if(t||a)return{className:"MapNotesLayer"};if(p(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return L(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function W(e,t){var i,u,o;await e.load();const a=((i=e.typeKeywords)==null?void 0:i.map(g=>g.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await t.fetchItemData(e),s=r==null?void 0:r.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)}),c=(u=n.cacheType)==null?void 0:u.toLowerCase(),l=(o=n.capabilities)==null?void 0:o.toLowerCase().includes("tilesonly");return c==="map"||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function J(){return{className:"StreamLayer"}}function U(){return{className:"VectorTileLayer"}}function k(){return{className:"GeoJSONLayer"}}function A(){return{className:"IntegratedMesh3DTilesLayer"}}function x(){return{className:"CSVLayer"}}function R(){return{className:"KMLLayer"}}function q(){return{className:"KnowledgeGraphLayer"}}function z(){return{className:"WFSLayer"}}function E(){return{className:"WMSLayer"}}function B(){return{className:"WMTSLayer"}}function H(){return{className:"StreamLayer"}}function Q(){return{className:"GroupLayer"}}function X(){return{className:"MediaLayer"}}async function Y(e,t){const{tileInfo:a}=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)});return a}async function b(e,t,a){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const i=await t.fetchServiceMetadata(r,{customParameters:await t.fetchCustomParameters(e,u=>{var o;return(o=y(u))==null?void 0:o.customParameters})});return{id:i.id,className:h(i.type),sourceJSON:i}}return{}}await e.load();let c=await t.fetchItemData(e);if(n){const i=await T(c,r,t),u=d(i);if(typeof u=="object"){const o=G(i,u.id);u.className=C(o==null?void 0:o.layerType)}return u}if(s==="Scene Service"&&(c=await F(e,c,t)),L(c)>0)return d(c);const l=await t.fetchServiceMetadata(r);return a&&(l.tables=await a()),d(l)}function d(e){var t;return L(e)===1&&{id:(t=y(e))==null?void 0:t.id}}const se=Object.freeze(Object.defineProperty({__proto__:null,fromItem:D,selectLayerClassPath:N},Symbol.toStringTag,{value:"Module"}));export{T as a,re as c,N as d,P as e,C as i,ae as n,F as o,se as p,y as s,m as t,L as u};