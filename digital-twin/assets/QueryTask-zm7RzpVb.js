const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/meshFeatureSet-BLWnhzri.js","assets/index-31kweLEy.js","assets/index-Bkubs9t2.css","assets/Mesh-D-teRq7R.js","assets/MeshTransform-D9iuVHiE.js","assets/vertexSpaceConversion-ChElshod.js","assets/External-QYu-S7Ee.js","assets/infoFor3D-DsOdlPuA.js","assets/executeRelationshipQuery-B69Zw0aa.js","assets/queryAttachments-DiBzR660.js","assets/executeTopFeaturesQuery-eVm3Ypxq.js","assets/queryTopFeatures-Bj-xbJiT.js","assets/executeForTopIds-CtMXaTJQ.js","assets/executeForTopExtents-ri7FCxGb.js","assets/executeForTopCount-Cy01ONYA.js"])))=>i.map(i=>d[i]);
import{f$ as _,i$ as T,a8 as S,au as j,e as n,y as l,j0 as D,a as A,S as N,ej as Q,cj as $,j1 as P,bg as q,gX as p,_ as u,m as f,ch as L}from"./index-31kweLEy.js";import{u as h,i as y}from"./infoFor3D-DsOdlPuA.js";import{s as z,a as J}from"./executeForIds-CoNJ4Jvv.js";import{n as C}from"./executeQueryPBF-GojWvLCZ.js";async function U(e,t,r){const o=_(e),s=await T(o,S.from(t),{...r}),i=s.data.extent;return!i||isNaN(i.xmin)||isNaN(i.ymin)||isNaN(i.xmax)||isNaN(i.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:j.fromJSON(i)}}let a=class extends N{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,s=$("featurelayer-pbf-statistics"),i=!o||s;let d;if(this.pbfSupported&&i)try{d=await C(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&i||(d=await P(this.url,r,t)),this._normalizeFields(d.fields),d}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return q.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(u(()=>import("./meshFeatureSet-BLWnhzri.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return z(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return U(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return J(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([u(()=>import("./index-31kweLEy.js").then(s=>s.zw),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-B69Zw0aa.js"),__vite__mapDeps([8,1,2]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([u(()=>import("./index-31kweLEy.js").then(s=>s.zw),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-B69Zw0aa.js"),__vite__mapDeps([8,1,2]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await p(u(()=>import("./queryAttachments-DiBzR660.js"),__vite__mapDeps([9,1,2])),t),i=_(this.url);return s(i,await(this.queryAttachmentsSupported?r(i,e,t):o(i,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(u(()=>import("./executeTopFeaturesQuery-eVm3Ypxq.js"),__vite__mapDeps([10,1,2,11])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(u(()=>import("./executeForTopIds-CtMXaTJQ.js"),__vite__mapDeps([12,1,2,11])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(u(()=>import("./executeForTopExtents-ri7FCxGb.js"),__vite__mapDeps([13,1,2,11])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(u(()=>import("./executeForTopCount-Cy01ONYA.js"),__vite__mapDeps([14,1,2,11])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,i=h("model/gltf-binary",o)??y("glb",o),d=h("model/gltf+json",o)??y("gltf",o);for(const c of s){if(c===i){t.formatOf3DObjects=c;break}c!==d||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new f("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!L(t.outSpatialReference,this.sourceSpatialReference))throw new f("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:x,translationX:b,translationY:F,translationZ:O,scaleX:g,scaleY:R,scaleZ:V,rotationX:E,rotationY:w,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(c,m,x,b,F,O,g,R,V,E,w,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:D})],a.prototype,"dynamicDataSource",void 0),n([l()],a.prototype,"fieldsIndex",void 0),n([l()],a.prototype,"gdbVersion",void 0),n([l()],a.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],a.prototype,"parsedUrl",null),n([l()],a.prototype,"pbfSupported",void 0),n([l()],a.prototype,"queryAttachmentsSupported",void 0),n([l()],a.prototype,"sourceSpatialReference",void 0),n([l({type:String})],a.prototype,"url",void 0),a=n([A("esri.layers.graphics.sources.support.QueryTask")],a);const G=a;export{G as x};