import{cc as k,c0 as V,gc as Y,E as J,m1 as T,e as n,y as u,a as w,S as M,pY as z,q9 as W,l as q,cf as X,o_ as K,qa as U,u as E,f as R,Q as _,qb as ee,P as D,A as $,dx as te,qc as re,dZ as se,cj as A,a3 as Q,dO as j,n as C,$ as Z,dX as G,cW as ie,oX as H,qd as ae,oY as L,qe as oe,qf as ne,oU as v,qg as I,t as P,qh as le,qi as ue,c8 as ce}from"./index-B6FTDkqq.js";import{a as de,C as pe,T as he,u as ye}from"./HeatmapDensity.glsl-CjZ3RsiK.js";import{l as me}from"./LayerView3D-BR71YyJD.js";import{h as fe}from"./WorkerHandle-DuPEE_IW.js";import{h as ge}from"./EventedSet-CGBUFCWR.js";import{p as S,n as Fe}from"./popupUtils-psWR8V_O.js";import{y as we}from"./LayerView-Caw2GMiN.js";import{i as _e}from"./RefreshableLayerView-BwshdPOz.js";class be extends k{constructor(t,e,r,i,l,o){super(t.usedMemory,t.displayedFeatures,t.totalFeatures,t.maximumFeatures,t.nodes,t.core),this.storedFeatures=e,this.totalVertices=r,this.partial=i,this.mode=l,this.symbolComplexity=o}}class xe{constructor(t){this._controller=t,this._handle=new qe(e=>t.schedule(e))}destroy(){this._handle.destroy()}invoke(t,e){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof V&&(t.options={...t.options,sourceSpatialReference:t.options.sourceSpatialReference.toJSON()}),this._handle.invoke(t,e).then(r=>{let i=0,l=0;const o=V.fromJSON(r.spatialReference);r.spatialReference=o;const d=async c=>{const a=r.fields;if(a){for(;i<a.length;)if(a[i]=Y.fromJSON(a[i]),i++,c.madeProgress())return this._controller.reschedule(m=>d(m))}const h=r.features;for(;l<h.length;){const m=h[l];++l,m.uid=J.generateUID();const p=m.geometry;if(p!=null&&(p.spatialReference=o,ve(p),c.madeProgress()))return this._controller.reschedule(g=>d(g))}return r};return this._controller.schedule(c=>d(c))})):Promise.resolve(null)}}function ve(s){switch(s.type){case"polyline":s.paths.reduce((t,e)=>t+e.length,0)<T&&(s.paths=s.hasZ||s.hasM?s.paths.map(t=>t.map(e=>[e[0],e[1],e[2]])):s.paths.map(t=>t.map(e=>[e[0],e[1]])));break;case"polygon":s.rings.reduce((t,e)=>t+e.length,0)<T&&(s.rings=s.hasZ||s.hasM?s.rings.map(t=>t.map(e=>[e[0],e[1],e[2]])):s.rings.map(t=>t.map(e=>[e[0],e[1]])))}}class qe extends fe{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},t)}}let F=class extends M{constructor(s){super(s)}get implicitFields(){var r;if(!((r=this.layer.outFields)==null?void 0:r.includes("*")))return new Set;const t=new Set(this.layerView.requiredFields),e=new Set(this.layerView.availableFields);return z(e,t)}get queryFeaturesDehydrated(){var l;const{layer:s}=this,t=s.capabilities,e=t&&t.query,r=e&&e.supportsFormatPBF,i=s.parsedUrl;if(r){this._decoder==null&&(this._decoder=new xe(this.controller));const o={sourceSpatialReference:((l=s.spatialReference)==null?void 0:l.toJSON())??null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:B};return(d,c)=>W(i,d,"pbf",this._createRequestOptions(c)).then(a=>(q(c),this._decoder!=null?this._decoder.invoke({buffer:a.data,options:o},c.signal):Promise.reject(X())))}return(o,d)=>K(i,o,s.spatialReference,this._createRequestOptions(d)).then(c=>U(c.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:B}))}queryFeatureCount(s,t){return this.layer.queryFeatureCount(s,t)}destroy(){this._decoder=E(this._decoder)}_createRequestOptions(s){return{...s,query:{...this.layer.customParameters,token:this.layer.apiKey,...s==null?void 0:s.query}}}};n([u({constructOnly:!0})],F.prototype,"layer",void 0),n([u({constructOnly:!0})],F.prototype,"layerView",void 0),n([u({constructOnly:!0})],F.prototype,"controller",void 0),n([u({readOnly:!0})],F.prototype,"implicitFields",null),n([u({readOnly:!0})],F.prototype,"queryFeaturesDehydrated",null),F=n([w("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],F);let b=class extends M{constructor(s){super(s)}queryFeaturesDehydrated(s,t){return this.layer.queryFeatures(s,t)}queryFeatureCount(s,t){return this.layer.queryFeatureCount(s,t)}};n([u({constructOnly:!0})],b.prototype,"layer",void 0),n([u({readOnly:!0})],b.prototype,"queryFeaturesDehydrated",null),b=n([w("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],b);let O=class extends M{constructor(s){super(s)}queryFeaturesDehydrated(s,t){return this.layer.queryFeatures(s,t)}};n([u({constructOnly:!0})],O.prototype,"layer",void 0),O=n([w("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileOGCServiceQuery3D")],O);let x=class extends M{constructor(s){super(s)}queryFeaturesDehydrated(s,t){return this.source.queryFeaturesJSON(s,t).then(U,e=>{if(e&&e.name==="query-features-json:unsupported")return this.layer.queryFeatures(s,t);throw e})}queryFeatureCount(s,t){return this.layer.queryFeatureCount(s,t)}};function Pe(s,t){const{layer:e}=s;return e.type==="feature"&&e.source.type==="feature-layer"||e.type==="catalog-footprint"?"infoFor3D"in e&&e.infoFor3D!=null?new b({layer:e}):new F({layer:e,layerView:s,controller:t}):e.type==="feature"&&e.source.type==="memory"||e.type==="csv"||e.type==="geojson"||e.type==="oriented-imagery"||e.type==="wfs"?new x({layer:e,source:e.source}):e.type==="ogc-feature"?new O({layer:e}):null}n([u({constructOnly:!0})],x.prototype,"layer",void 0),n([u({constructOnly:!0})],x.prototype,"source",void 0),x=n([w("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],x);const B=1024;class Oe{constructor(t){this._memoryCache=null,this._capabilities=null;const e=t.layerView.layer;this._layerView=t.layerView,this.objectIdField=e.objectIdField,this.globalIdField="globalIdField"in e?e.globalIdField:null,this._returnZ=t.returnZ,this._returnM=t.returnM;const r=this._layerView.view.resourceController;this.query=Pe(this._layerView,r.normal),r&&this._memoryCacheEnabled&&(this._memoryCache=r.memoryController.newCache(`fl-${e.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=E(this._memoryCache),this.query.destroy()}createQuery(){const t=this._layerView.layer.createQuery();return t.outFields=this._layerView.availableFields,t.returnZ=this._returnZ,t.returnM=this._returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const t=this._layerView.view.resourceController;return t?t.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return this._capabilities!=null||(this._capabilities=de(this._layerView.layer)),this._capabilities}logFetchError(t,e){t.error("#fetchTile()",this._layerView.layer,(e==null?void 0:e.message)??e)}}let y=class extends pe{constructor(t){super(t),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles(R(()=>({controller:this.controller,suspended:this.suspended}),({controller:t,suspended:e})=>{t&&!e&&this._needsRefresh&&(t.refetch(),this._needsRefresh=!1)}))}destroy(){this._fetcherContext=E(this._fetcherContext)}get maximumNumberOfFeatures(){var t;return((t=this.controller)==null?void 0:t.maximumNumberOfFeatures)??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(t){this._set("maximumNumberOfFeatures",t),this.controller&&(this.controller.maximumNumberOfFeatures=t)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var r,i;let t=0;if((r=this.controller)!=null&&r.updating){const l=this.controller.updatingRemaining,o=Math.max(this.controller.updatingTotal,this._controllerTotal);o>0&&(t=(o-l)/o,this._controllerTotal=o)}let e=0;if((i=this.processor)!=null&&i.updating){const l=this.processor.updatingRemaining,o=Math.max(l,this._processorTotal);o>0&&(e=(o-l)/o,this._processorTotal=o)}return .5*(t+e)}get updatePolicy(){if(!this.controller)return _.ASYNC;switch(this.controller.mode){case"snapshot":{const t=Re.get(this.layer.geometryType);return t==null||this.controller.serviceDataCount>t?_.ASYNC:_.SYNC}case"tiles":return _.ASYNC}}get usedMemory(){var t,e;return(((t=this.processor)==null?void 0:t.usedMemory)??0)+(((e=this.controller)==null?void 0:e.memoryForUnusedFeatures)??0)}get unloadedMemory(){var l,o,d,c;const t=((l=this.processor)==null?void 0:l.unprocessedMemoryEstimate)??0,e=((o=this.controller)==null?void 0:o.expectedFeatureDiff)??0,r=((d=this.processor)==null?void 0:d.loadedFeatures)??0,i=r+e>0?r/(r+e):1;return t+e*(((c=this.processor)==null?void 0:c.usedMemoryPerFeature)??0)*i}get ignoresMemoryFactor(){var t;return(t=this.controller)==null?void 0:t.hasMaximumNumberOfFeaturesOverride}get performanceInfo(){var i,l,o,d,c,a;const t=(i=this.controller)==null?void 0:i.displayFeatureLimit,e=t!=null?t.averageSymbolComplexity:void 0,r=e!=null?`f:${e.verticesPerFeature},v:${e.verticesPerCoordinate}`:"n/a";return new be(super.performanceInfo,((o=(l=this.controller)==null?void 0:l.performanceInfo)==null?void 0:o.storedFeatures)??0,((c=(d=this.controller)==null?void 0:d.performanceInfo)==null?void 0:c.totalVertices)??0,this.maximumNumberOfFeaturesExceeded,((a=this.controller)==null?void 0:a.mode)??"n/a",r)}async doRefresh(t){const{controller:e,processor:r,suspended:i}=this;t&&e&&(i?this._needsRefresh=!0:(e.refetch(),this._needsRefresh=!1)),r.refreshFilter()}setVisibility(t,e){var r;(r=this.processor)==null||r.setObjectIdVisibility(t,e)}getMissingAttributesForFeature(t){return this.controller.getMissingAttributesForFeature(t)}getHydratedGeometry(t){const e=this.graphics3DProcessor;if(e==null)return null;const r=e.graphics3DGraphicsByObjectID;if(r==null)return null;const i=r.get(t);return i==null?null:ee(i.graphic.geometry)}createController(){this._fetcherContext=new Oe({layerView:this.layerView,returnZ:this.hasZ,returnM:this.hasM});const t=new he({layerView:this.layerView,context:this._fetcherContext,graphics:new ge,extent:this.clippingExtent});return this.updatingHandles.add(()=>t.serviceDataExtent,e=>{this.processor&&(this.processor.dataExtent=e)},D),this.addHandles(R(()=>this.suspended&&this.layerView.updateSuspended,e=>{e?t.suspend():t.resume()},$)),this.updatingHandles.add(()=>{var e;return(e=this.processor)==null?void 0:e.displayFeatureLimit},e=>t.displayFeatureLimit=e,D),this.addHandles(te(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),t}beforeSetController(t){t.maximumNumberOfFeatures=this.maximumNumberOfFeatures}get test(){return{controller:this.controller,graphics3DProcessor:this.graphics3DProcessor,heatmapProcessor:this.heatmapProcessor,loadedGraphics:this.loadedGraphics}}};n([u()],y.prototype,"layerView",void 0),n([u()],y.prototype,"controller",void 0),n([u()],y.prototype,"_controllerTotal",void 0),n([u()],y.prototype,"_processorTotal",void 0),n([u()],y.prototype,"_needsRefresh",void 0),n([u()],y.prototype,"maximumNumberOfFeatures",null),n([u()],y.prototype,"maximumNumberOfFeaturesExceeded",null),n([u()],y.prototype,"updatingProgressValue",null),n([u()],y.prototype,"updatePolicy",null),n([u()],y.prototype,"suspendResumeExtentMode",void 0),y=n([w("esri.views.3d.layers.graphics.FeatureGraphics3DGraphicsPipeline")],y);const Re=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),Me=s=>{let t=class extends s{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([R(()=>{var r;const e=this.layer;return[e&&"elevationInfo"in e?(r=e.elevationInfo)==null?void 0:r.featureExpressionInfo:null,e&&"displayField"in e?e.displayField:null,e&&"timeInfo"in e&&e.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),$),A(()=>{var e;return(e=this.view)==null?void 0:e.floors},"change",()=>this._handleRequiredFieldsChange()),A(()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:r},requiredFields:i}=this;return"outFields"in e&&e.outFields?Q(r,[...j(r,e.outFields),...i]):Q(r,i)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){C.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},r=this.filter!=null?this.filter.createQuery(e):new Z(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const i=G(this);i!=null&&(r.where=r.where?`(${r.where}) AND (${i})`:i)}return this.timeExtent!=null&&(r.timeExtent=r.timeExtent!=null?r.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),r}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new Z(e)}queryFeatures(e,r){throw new Error("missing implementation")}queryObjectIds(e,r){throw new Error("missing implementation")}queryFeatureCount(e,r){throw new Error("missing implementation")}queryExtent(e,r){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,r){return this._validateFetchPopupFeatures(e,r),this._fetchPopupFeatures(e,r)}_loadArcadeModules(e){var r;return(r=e.expressionInfos)!=null&&r.length||Array.isArray(e.content)&&e.content.some(i=>i.type==="expression")?ie():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e=this.view.type==="3d",{layer:r,layer:{fieldsIndex:i,objectIdField:l}}=this,o="renderer"in r&&r.renderer,d="orderBy"in r&&r.orderBy,c="featureReduction"in r?r.featureReduction:null,a=new Set,h=await Promise.allSettled([o?o.collectRequiredFields(a,i):null,H(a,r),e&&"elevationInfo"in r?ae(a,r):null,this.filter!=null?L(a,r,this.filter):null,e||this.featureEffect==null?null:L(a,r,this.featureEffect.filter),!e&&c?oe(a,r,c):null,!e&&d?ne(a,r,d):null]);if("timeInfo"in r&&r.timeInfo&&this.timeExtent&&v(a,r.fieldsIndex,[r.timeInfo.startField,r.timeInfo.endField]),"floorInfo"in r&&r.floorInfo&&v(a,r.fieldsIndex,[r.floorInfo.floorField]),r.type==="feature"&&e&&r.infoFor3D!=null&&(r.globalIdField==null&&C.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),v(a,r.fieldsIndex,[r.globalIdField])),r.type==="subtype-group"){I(a,i,r.subtypeField);const p=r.sublayers.map(g=>{var N;return Promise.all([(N=g.renderer)==null?void 0:N.collectRequiredFields(a,i),H(a,g)])});await Promise.allSettled(p)}if(r.type==="catalog-footprint"&&r.parent){const p=r.parent;v(a,i,[p.itemNameField,p.itemSourceField,p.itemTypeField,p.maxScaleField,p.minScaleField])}for(const p of h)p.status==="rejected"&&C.getLogger(this).error(p.reason);I(a,i,l),e&&"displayField"in r&&r.displayField&&I(a,i,r.displayField);const m=Array.from(a).sort();this._set("requiredFields",m)}_validateFetchPopupFeatures(e,r){if(r!=null)for(const i of e){const l=i.origin&&"layer"in i.origin?i.origin.layer:i.layer;if("popupEnabled"in l&&!l.popupEnabled)throw new P("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:l});if(i.isAggregate){const o="featureReduction"in l?l.featureReduction:null;if(!(o&&"popupTemplate"in o&&o.popupEnabled&&o.popupTemplate))throw new P("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:l})}else if("popupTemplate"in l&&!S(l,r))throw new P("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:l})}}_popupFeatureHasRequiredFields(e,r){return le(r,e)}async _fetchPopupFeatures(e,r){var d;const i=new Array(e.length),l=new Map,o=await this._createPopupQuery(e.map(c=>{var a;return((a=c.origin)==null?void 0:a.layer)??c.layer}),r);for(let c=0;c<e.length;c++){const a=e[c];if(a.isAggregate){i[c]=a;continue}const h=((d=a.origin)==null?void 0:d.layer)??a.layer;if(!h||!("popupEnabled"in h))continue;const m=j(this.layer.fieldsIndex,o.outFields),p=S(h,r);if(p==null)continue;const g=await this._loadArcadeModules(p);q(r),g&&g.arcadeUtils.hasGeometryOperations(p)||!this._popupFeatureHasRequiredFields(a,m)?l.set(a.getObjectId(),{graphic:a,index:c}):i[c]=a}if(this.layer.type==="stream"||l.size===0)return i.filter(Boolean);o.objectIds=Array.from(l.keys());try{const c=await this.layer.queryFeatures(o,r);for(const a of c.features){const{graphic:{geometry:h,origin:m},index:p}=l.get(a.getObjectId());a.geometry||(a.geometry=h),a.origin=m,i[p]=a}}catch{}return i.filter(Boolean)}async _createPopupQuery(e,r){const i=this.layer.createQuery(),l=new Set;let o=!1;const d=e??[this.layer];for(const c of d){if(!("popupEnabled"in c))continue;const a=S(c,r);if(a==null)continue;const h=await this._loadArcadeModules(a);q(r);const m=h&&h.arcadeUtils.hasGeometryOperations(a);o=!(this.layer.geometryType!=="point"&&!m);const p=await Fe(this.layer,a);q(r);for(const g of p)l.add(g)}if(i.returnGeometry=o,i.returnZ=o,i.returnM=o,i.outFields=Array.from(l),i.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const c=G(this);c!=null&&(i.where=i.where?`(${i.where}) AND (${c})`:c)}return i}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}getTest(){}get test(){}};return n([u()],t.prototype,"_updatingRequiredFieldsPromise",void 0),n([u({readOnly:!0})],t.prototype,"availableFields",null),n([u({readOnly:!0})],t.prototype,"dataUpdating",void 0),n([u({type:re})],t.prototype,"featureEffect",null),n([u({type:se})],t.prototype,"filter",void 0),n([u()],t.prototype,"layer",void 0),n([u({type:Number})],t.prototype,"maximumNumberOfFeatures",null),n([u({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),n([u({readOnly:!0})],t.prototype,"requiredFields",void 0),n([u()],t.prototype,"suspended",void 0),n([u()],t.prototype,"view",void 0),t=n([w("esri.views.layers.FeatureLayerView")],t),t};let f=class extends _e(ye(Me(me(we)))){constructor(s){super(s)}initialize(){this.addHandles(R(()=>this._updatingRequiredFieldsPromise,s=>this._updatingHandles.addPromise(s),$))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=E(this._fetcherContext)}get maximumNumberOfFeatures(){return this.graphicsPipeline.maximumNumberOfFeatures}set maximumNumberOfFeatures(s){this.graphicsPipeline.maximumNumberOfFeatures=s}get maximumNumberOfFeaturesExceeded(){return this.graphicsPipeline!=null&&!this.suspended&&this.graphicsPipeline.maximumNumberOfFeaturesExceeded}get updatingProgressValue(){var s;return((s=this.graphicsPipeline)==null?void 0:s.updatingProgressValue)??0}get updatePolicy(){var s;return((s=this.graphicsPipeline)==null?void 0:s.updatePolicy)??_.ASYNC}get hasZ(){const s=this.layer,t=s.capabilities&&s.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in s&&s.returnZ!=null?s.returnZ:t.supportsZ)}get hasM(){const s=this.layer,t=s.capabilities&&s.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in s&&s.returnM!=null&&s.returnM}setVisibility(s,t){var e;(e=this.graphicsPipeline)==null||e.setVisibility(s,t)}createQuery(){return super.createQuery()}queryFeatures(s,t){const e=()=>super.queryFeatures(s,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(s),e):e()}createGraphicsPipeline(){return new y({layerView:this})}async doRefresh(s){return await this.graphicsPipeline.doRefresh(s)}_popupFeatureHasRequiredFields(s,t){if(!super._popupFeatureHasRequiredFields(s,t))return!1;const e=ue(s,this.layer.objectIdField);if(e==null)return!0;const r=this.graphicsPipeline.getMissingAttributesForFeature(e);if(r==null)return!0;for(const i of t)if(r.has(i))return!1;return!0}get usedMemory(){var s;return((s=this.graphicsPipeline)==null?void 0:s.usedMemory)??0}get unloadedMemory(){var s;return((s=this.graphicsPipeline)==null?void 0:s.unloadedMemory)??0}get ignoresMemoryFactor(){var s;return((s=this.graphicsPipeline)==null?void 0:s.ignoresMemoryFactor)??!1}async _queryFeaturesMesh(s,t){await this._validateQueryFeaturesMesh(s);const e=await t(),r=this.graphicsPipeline;if(s!=null&&s.outStatistics||r==null)return e;const i=this.layer.objectIdField,l=[];for(const o of e.features)if(o.geometry){const d=r.getHydratedGeometry(o.attributes[i]);d&&(o.geometry=d,l.push(o))}else l.push(o);return e.features=l,e}async _validateQueryFeaturesMesh(s){if(!s)return;const t=r=>{throw new P("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${r}'`)},e=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const r of e)s[r]!=null&&t(r);"returnM"in s&&s.returnM&&t("returnM"),"returnCentroid"in s&&s.returnCentroid&&t("returnCentroid"),s.outSpatialReference==null||s.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get test(){}};n([u()],f.prototype,"layer",void 0),n([u()],f.prototype,"graphicsPipeline",void 0),n([u()],f.prototype,"maximumNumberOfFeatures",null),n([u()],f.prototype,"maximumNumberOfFeaturesExceeded",null),n([u(ce)],f.prototype,"updatingProgress",void 0),n([u({readOnly:!0})],f.prototype,"updatingProgressValue",null),n([u({readOnly:!0})],f.prototype,"updatePolicy",null),n([u({readOnly:!0})],f.prototype,"hasZ",null),n([u({readOnly:!0})],f.prototype,"hasM",null),f=n([w("esri.views.3d.layers.FeatureLayerViewBase3D")],f);const Ae=f;export{Ae as g};