import{d1 as m,cp as _,P as h,d2 as d,u as f,C as F,a8 as o,d3 as b,K as v,e as n,y as l,aD as I,d4 as w,a as E}from"./index-31kweLEy.js";import{O}from"./WhereClause-CzW63au3.js";import{o as H}from"./floorFilterUtils-DZ5C6FQv.js";import{A as S,u as x,n as C}from"./I3SMeshView3D-DKoWvmHB.js";import{l as j}from"./LayerView3D-O_jQ-pYZ.js";import{a as Q,i as q,u as A,d as $,f as V,b as R,w as P}from"./SceneLayerView-BW1dX3ms.js";import{P as p,d as D,h as G,o as L}from"./I3SQueryFeatureStore-Xe8HQMWP.js";import{o as c}from"./I3SNode-D1IIBqD1.js";import{G as U}from"./I3SOverrides-DbSyXg1m.js";import{Y as M,Z as T,W as u}from"./I3SUtil-9DsBKWgZ.js";import{u as N,t as z}from"./TemporalSceneLayerView-CxDPZjYN.js";import{i as W}from"./PopupSceneLayerView-CNMRu1sL.js";import{u as Y}from"./popupUtils-DY_ZGt1b.js";import"./TimeOnly-B4m6uIrS.js";import"./Transform-ClsduP2H.js";import"./RenderTexture-caLSY54q.js";import"./SceneModification-Dsu2Pox4.js";import"./persistable-CFMGducF.js";import"./resourceExtension-kq4YGhHH.js";import"./Graphics3DObjectStates-DH-55gWy.js";import"./rendererConversion-D75Q72gf.js";import"./optimizedFeatureQueryEngineAdapter-CKBGVwLX.js";import"./PooledRBush-ByC12tkF.js";import"./quickselect-C83jmIMl.js";import"./WorkerHandle-937P6Tkp.js";import"./SceneLayerWorker-ORFkYjgx.js";import"./HeatmapDensity.glsl-DAo8LF5i.js";import"./timeSupport-BFg-34a8.js";import"./projectExtentUtils-C-J5EfqM.js";import"./dehydratedFeatureComparison-D1FHmocK.js";import"./queryForSymbologySnapping-DvoHJuw5.js";import"./hash-CcEbRgUF.js";import"./QueryEngine-CuBwqMJt.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DJy3tZvr.js";import"./utils-C8Gy-a6x.js";import"./ClassBreaksDefinition-Bv1xiyPE.js";import"./FeatureStore-qAjjyexd.js";import"./BoundsStore-Ip7CmhcT.js";import"./makeScheduleFunction-CggzEh3c.js";import"./LayerView-Ce93XxEc.js";import"./I3SBinaryReader-BQPJ9v6P.js";import"./meshFeatureSet-BLWnhzri.js";import"./Mesh-D-teRq7R.js";import"./MeshTransform-D9iuVHiE.js";import"./vertexSpaceConversion-ChElshod.js";import"./External-QYu-S7Ee.js";import"./infoFor3D-DsOdlPuA.js";import"./FeatureLayerView3D-DMceMWk0.js";import"./FeatureLayerViewBase3D-BcsA71aN.js";import"./EventedSet-Bp39dLGG.js";import"./RefreshableLayerView-CwMaEKEO.js";const y=R();let s=class extends S(N(z(W(j(P))))){constructor(){super(...arguments),this.type="scene-layer-3d",this._setVisibilityHiddenObjectIds=new m,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._pendingEditsQueue=Promise.resolve(),this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then(()=>{var r;M(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this.i3sOverrides=new U({view:this.view,layer:e,memoryController:i}),this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){var e;return this.layer.popupEnabled&&Y(this.layer,(e=this.view.popup)==null?void 0:e.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(e){this._set("filter",p.checkSupport(e)?e:null)}get viewFilter(){const e=this.mergedFilter,t=this.layerFilter;if(e==null&&t==null)return null;const i=this._get("viewFilter");return i==null?new p({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),addSqlFilter:(r,a)=>this.addSqlFilter(r,a,this.logError),addTimeFilter:(r,a)=>this.addTimeFilter(r,a)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get _floorFilterClause(){const e=H(this);return e!=null?O.create(e,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort((t,i)=>t-i):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort((e,t)=>e-t):null}get lodFactor(){var e,t,i,r;return((r=(i=(t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.sceneService)==null?void 0:i.object)==null?void 0:r.lodFactor)??1}get lodCrossfadeUncoveredDuration(){var e,t;return((t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.fadeDuration)??0}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??0}get visibleAtCurrentScale(){return _(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}initialize(){this._fieldsHelper=new Q({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,t=>this._rangeInfosChanged(t),h),this._updatingHandles.add(()=>this.layer.renderer,t=>this._updatingHandles.addPromise(this._rendererChange(t)),h);const e=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,e),this._updatingHandles.add(()=>this.mergedFilter,e),this._updatingHandles.add(()=>this._floorFilterClause,e),this._updatingHandles.add(()=>this._excludeObjectIdsSorted,e),this._updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,e),this._updatingHandles.add(()=>{var t;return(t=this.viewFilter)==null?void 0:t.sortedObjectIds},e),this._updatingHandles.add(()=>{var t;return(t=this.viewFilter)==null?void 0:t.parsedWhereClause},e),this._updatingHandles.add(()=>this.getTimeFilterDependencies(),e),this._updatingHandles.add(()=>{var t,i,r;return[(t=this.viewFilter)==null?void 0:t.parsedGeometry,(i=this.mergedFilter)==null?void 0:i.spatialRelationship,(r=this.layer.filter)==null?void 0:r.spatialRelationship]},()=>this._geometryFilterChange()),d()&&this.i3sOverrides.is3DOFL&&this._updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,e),this.addHandles(this.layer.on("apply-edits",t=>this._updatingHandles.addPromise(t.result))),this.addHandles(this.layer.on("edits",t=>{const i=this._pendingEditsQueue.then(()=>this._handleEdits(t)).then();this._pendingEditsQueue=i,this._updatingHandles.addPromise(i)}))}destroy(){this._fieldsHelper=f(this._fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&F.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){var t;const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return((t=this.mergedFilter)==null?void 0:t.createQuery(e))??new o(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(i=>{if(!(i!=null&&i.features))return i;const r=this.layer;for(const a of i.features)a.layer=r,a.sourceLayer=r;return i})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=x(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new D({layerView:this,priority:b.FEATURE_QUERY_ENGINE,spatialIndex:new G({featureAdapter:new L({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:e}),forAllFeatures:(t,i)=>this._forAllFeatures((r,a,g)=>t({id:r,index:a,meta:g}),i,C.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:T(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof o){const{set:i,handle:r}=t.acquireSet();return this.queryObjectIds(e).then(a=>t.setFeatureIds(i,a)),r}return super.highlight(e)}createInteractiveEditSession(e){return q(this._attributeEditingContext,e)}_createLayerGraphic(e){return new v({attributes:e,layer:this.layer,sourceLayer:this.layer})}getFilters(){const e=super.getFilters();d()&&this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&e.push((r,a)=>{a.node.index>=0&&u(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,r)});const t=this._setVisibilityHiddenObjectIdsSorted;t!=null&&e.push(r=>u(t,!1,r));const i=this._excludeObjectIdsSorted;return i!=null&&e.push(r=>u(i,!1,r)),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this.viewFilter!=null&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}setVisibility(e,t){t?this._setVisibilityHiddenObjectIds.delete(e):this._setVisibilityHiddenObjectIds.add(e)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||this.viewFilter!=null&&this.viewFilter.updating||this.i3sOverrides!=null&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():o.from(e))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes(t=>t!=null?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}async _handleEdits(e){const t=d(),i=this._attributeEditingContext,r=await A(i,e);t&&$(i,r),V(i,r)}get hasGeometryFilter(){const e=this.viewFilter;return(e==null?void 0:e.parsedGeometry)!=null}computeNodeFiltering(e){const t=this.viewFilter;return t==null||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?c.Unmodified:c.Culled}};n([l()],s.prototype,"i3slayer",null),n([l(I)],s.prototype,"updatingProgress",void 0),n([l({type:w})],s.prototype,"filter",null),n([l({readOnly:!0})],s.prototype,"viewFilter",null),n([l(y.requiredFields)],s.prototype,"requiredFields",null),n([l(y.availableFields)],s.prototype,"availableFields",void 0),n([l()],s.prototype,"_fieldsHelper",void 0),n([l()],s.prototype,"_floorFilterClause",null),n([l()],s.prototype,"_excludeObjectIdsSorted",null),n([l()],s.prototype,"_setVisibilityHiddenObjectIds",void 0),n([l()],s.prototype,"_setVisibilityHiddenObjectIdsSorted",null),n([l()],s.prototype,"lodFactor",null),n([l()],s.prototype,"updatingProgressValue",null),n([l({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),s=n([E("esri.views.3d.layers.SceneLayerView3D")],s);const Ye=s;export{Ye as default};