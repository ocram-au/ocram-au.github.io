const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CQXxPdCL.js","assets/index-WwsijMdg.css"])))=>i.map(i=>d[i]);
import{eF as C,gm as K,gl as X,cp as J,e as a,y as p,mM as ee,ee as te,aZ as q,aA as z,aB as re,gn as ie,a as V,aY as B,fM as se,Q as G,q as oe,jd as ne,fJ as ae,fD as le,fL as pe,fK as ue,U as ye,S as ce,g0 as he,aR as de,k as L,ag as P,V as fe,ci as M,fY as U,_ as me,bl as ge,d5 as we,L as be,mN as ve,n as H,mO as xe,bL as $e}from"./index-CQXxPdCL.js";import{n as T}from"./floorFilterUtils-DZ5C6FQv.js";import{o as Q}from"./drapedUtils-CUCnXbgs.js";import{n as Se}from"./sublayerUtils-BmgLgM09.js";import{n as Fe,p as Oe}from"./popupUtils-BGR3Rcn4.js";function je(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:n,height:s,historicMoment:c,layerOption:h,mapExtent:l,maxAllowableOffset:u,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,spatialReference:O,timeExtent:f,tolerance:F,width:w}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:R}=Ee(t),N=(e==null?void 0:e.geometry)!=null?e.geometry:null,v={historicMoment:c,geometryPrecision:n,maxAllowableOffset:u,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,tolerance:F},j=(N==null?void 0:N.toJSON())||r;v.imageDisplay=`${w},${s},${i}`,o&&(v.gdbVersion=o),j&&(delete j.spatialReference,v.geometry=JSON.stringify(j),v.geometryType=C(j));const A=O??(j==null?void 0:j.spatialReference)??(l==null?void 0:l.spatialReference);if(A&&(v.sr=K(A)),v.time=f?[f.start,f.end].join(","):null,l){const{xmin:k,ymin:Z,xmax:W,ymax:Y}=l;v.mapExtent=`${k},${Z},${W},${Y}`}return b&&(v.layerDefs=b),g&&!b&&(v.dynamicLayers=g),v.layers=h==="popup"?"visible":h,R&&!g&&(v.layers+=`:${R.join(",")}`),v}function Ee(t){var $,O;const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:n,layerOption:s,gdbVersion:c}=t,h=(O=($=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:$.layer)==null?void 0:O.serviceSublayers,l=s==="popup",u={},y=X({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const F=y===0,w=f.minScale===0||y<=f.minScale,g=f.maxScale===0||y>=f.maxScale;if(f.visible&&(F||w&&g))if(f.sublayers)f.sublayers.forEach(x);else{if((n==null?void 0:n.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)u.layerIds=[];else{const f=Se(m,h,c),F=m.map(w=>{const g=T(i,w);return w.toExportImageJSON(g)});if(f)u.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:b})=>b);n&&(g=g.filter(b=>n.includes(b))),u.layerIds=g}else n!=null&&n.length&&(u.layerIds=n);const w=Re(i,m);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(u.layerDefs=JSON.stringify(g))}}}return u}function Re(t,e){const i=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const n=T(t,r),s=J(n,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var I;let d=I=class extends B{static from(t){return se(I,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};a([p({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),a([p()],d.prototype,"floors",void 0),a([p({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),a([p({types:ee,json:{read:te,write:!0}})],d.prototype,"geometry",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"height",void 0),a([p({type:Date})],d.prototype,"historicMoment",void 0),a([q("historicMoment")],d.prototype,"writeHistoricMoment",null),a([p({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),a([p({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),a([p({type:z,json:{write:!0}})],d.prototype,"mapExtent",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),a([p({type:re,json:{write:!0}})],d.prototype,"spatialReference",void 0),a([p()],d.prototype,"sublayers",void 0),a([p({type:ie,json:{write:!0}})],d.prototype,"timeExtent",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=I=a([V("esri.rest.support.IdentifyParameters")],d);const D=d;let S=class extends B{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return G.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=ne.toJSON(o.type))}};a([p({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),a([p({type:G})],S.prototype,"feature",void 0),a([oe("feature",["attributes","geometry"])],S.prototype,"readFeature",null),a([q("feature")],S.prototype,"writeFeature",null),a([p({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),a([p({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=a([V("esri.rest.support.IdentifyResult")],S);const Ne=S;async function Pe(t,e,i){const o=(e=Ie(e)).geometry?[e.geometry]:[],r=ae(t);return r.path+="/identify",le(o).then(n=>{const s=je(e,{geometry:n==null?void 0:n[0]}),c=pe({...r.query,f:"json",...s}),h=ue(c,i);return ye(r.path,h).then(_e).then(l=>Ve(l,e.sublayers))})}function _e(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Ne.fromJSON(i)),e}function Ie(t){return t=D.from(t)}function Ve(t,e){if(!(e!=null&&e.length))return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}let _=null;function qe(t,e){return e.type==="tile"||e.type==="map-image"}let E=class extends ce{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=he(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([de(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var s,c;const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new L("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ge(i.sublayers,o,e);if(!r.length)return[];const n=await Ae(i,r);if(!((((c=(s=i.capabilities)==null?void 0:s.operations)==null?void 0:c.supportsIdentify)??!0)&&i.version>=10.5)&&!n)throw new L("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return P();let i=null;if(t instanceof G?i=[t]:fe.isCollection(t)&&t.length>0?i=t.toArray():Array.isArray(t)&&t.length>0&&(i=t),i=i==null?void 0:i.filter(M),!(i!=null&&i.length))return P();for(const o of i){const r=o.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(i),P(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async s=>{var l;s||(s=new U);let c=null;const h="visualVariables"in n?(l=n.visualVariables)==null?void 0:l.find(u=>u.type==="size"):void 0;h&&(_||(_=(await me(async()=>{const{getSize:u}=await import("./index-CQXxPdCL.js").then(y=>y.yj);return{getSize:u}},__vite__mapDeps([0,1]))).getSize),c=_(h,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),c||(c="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(r)&&(r.symbol=new U({style:"square",size:c,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const u=l.sourceLayer;ge(s,u,()=>new Map).set(l.getObjectId(),l)}const c=Array.from(s,([l,u])=>{const y=l.createQuery();return y.objectIds=[...u.keys()],y.outFields=[l.objectIdField],y.returnGeometry=!0,y.maxAllowableOffset=n,y.outSpatialReference=i.spatialReference,l.queryFeatures(y)}),h=await Promise.all(c);if(!this.destroyed)for(const{features:l}of h)for(const u of l){const y=u.sourceLayer,m=s.get(y).get(u.getObjectId());m&&o.includes(m)&&(m.geometry=u.geometry,r(m,"geometry"),this._featuresResolutions.set(m,n))}}_getTargetResolution(t){const e=t*we(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await Pe(this.layerView.layer.parsedUrl,o,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:n,view:{spatialReference:s,scale:c}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const h=Math.min(be("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?Q({renderer:$.renderer,pointerType:i==null?void 0:i.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,h),u=ve(c,s),y=Math.round(l.width/u),m=new z({xmin:l.center.x-u*y,ymin:l.center.y-u*y,xmax:l.center.x+u*y,ymax:l.center.y+u*y,spatialReference:l.spatialReference});return new D({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:y,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:n,tolerance:h,width:y})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,n=e.map(async({sublayer:s,popupTemplate:c})=>{var b;if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const h=s.createQuery(),l=Q({renderer:s.renderer,pointerType:i==null?void 0:i.pointerType}),u=this.createFetchPopupFeaturesQueryGeometry(t,l),y=new Set,[m]=await Promise.all([Fe(s,c),(b=s.renderer)==null?void 0:b.collectRequiredFields(y,s.fieldsIndex)]);H(i),xe(y,s.fieldsIndex,m);const x=Array.from(y).sort();h.geometry=u,h.outFields=x,h.timeExtent=r;const $=T(o,s);h.where=J(h.where,$);const O=this._getTargetResolution(u.width/l),f=await Te(c);H(i);const F=s.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(c);F||(h.maxAllowableOffset=O);let{features:w}=await s.queryFeatures(h,i);const g=F?0:O;w=await Le(s,w,i);for(const R of w)this._featuresResolutions.set(R,g);return w});return(await Promise.allSettled(n)).reduce((s,c)=>c.status==="fulfilled"?[...s,...c.value]:s,[]).filter(M)}};function Ge(t,e,i){const o=[];if(!t)return o;const r=n=>{const s=n.minScale===0||e<=n.minScale,c=n.maxScale===0||e>=n.maxScale;if(n.visible&&s&&c){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const h=Oe(n,{...i,defaultPopupTemplateEnabled:!1});h!=null&&o.unshift({sublayer:n,popupTemplate:h})}}};return t.map(r),o}function Te(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(i=>i.type==="expression")?$e():Promise.resolve()}async function Ae(t,e){var i,o;if((o=(i=t.capabilities)==null?void 0:i.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Le(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(n=>n?r:null))).then(r=>r.filter(n=>n!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}a([p({constructOnly:!0})],E.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),a([p({constructOnly:!0})],E.prototype,"layerView",void 0),a([p({constructOnly:!0})],E.prototype,"highlightGraphics",void 0),a([p({constructOnly:!0})],E.prototype,"highlightGraphicUpdated",void 0),a([p({constructOnly:!0})],E.prototype,"updatingHandles",void 0),E=a([V("esri.views.layers.support.MapServiceLayerViewHelper")],E);export{qe as U,E as _};