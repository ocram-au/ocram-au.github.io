import{cj as n,co as m,cp as l,P as p,K as d,e as i,y as e,aD as c,a as u}from"./index-31kweLEy.js";import{A as h}from"./I3SMeshView3D-DKoWvmHB.js";import{l as g}from"./LayerView3D-O_jQ-pYZ.js";import{y}from"./LayerView-Ce93XxEc.js";import"./Transform-ClsduP2H.js";import"./RenderTexture-caLSY54q.js";import"./I3SOverrides-DbSyXg1m.js";import"./I3SNode-D1IIBqD1.js";import"./I3SUtil-9DsBKWgZ.js";import"./I3SBinaryReader-BQPJ9v6P.js";import"./meshFeatureSet-BLWnhzri.js";import"./Mesh-D-teRq7R.js";import"./MeshTransform-D9iuVHiE.js";import"./vertexSpaceConversion-ChElshod.js";import"./External-QYu-S7Ee.js";import"./infoFor3D-DsOdlPuA.js";import"./FeatureLayerView3D-DMceMWk0.js";import"./FeatureLayerViewBase3D-BcsA71aN.js";import"./HeatmapDensity.glsl-DAo8LF5i.js";import"./timeSupport-BFg-34a8.js";import"./projectExtentUtils-C-J5EfqM.js";import"./dehydratedFeatureComparison-D1FHmocK.js";import"./queryForSymbologySnapping-DvoHJuw5.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-DH-55gWy.js";import"./rendererConversion-D75Q72gf.js";import"./optimizedFeatureQueryEngineAdapter-CKBGVwLX.js";import"./PooledRBush-ByC12tkF.js";import"./quickselect-C83jmIMl.js";import"./popupUtils-DY_ZGt1b.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-CuBwqMJt.js";import"./WhereClause-CzW63au3.js";import"./TimeOnly-B4m6uIrS.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DJy3tZvr.js";import"./utils-C8Gy-a6x.js";import"./ClassBreaksDefinition-Bv1xiyPE.js";import"./FeatureStore-qAjjyexd.js";import"./BoundsStore-Ip7CmhcT.js";import"./WorkerHandle-937P6Tkp.js";import"./EventedSet-Bp39dLGG.js";import"./RefreshableLayerView-CwMaEKEO.js";import"./SceneModification-Dsu2Pox4.js";import"./persistable-CFMGducF.js";import"./resourceExtension-kq4YGhHH.js";import"./SceneLayerWorker-ORFkYjgx.js";import"./makeScheduleFunction-CggzEh3c.js";const f=.2;let t=class extends h(g(y)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=!n("disable-feature:im-shading"),this.drapeTargetType=m.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var r;return((r=this._controller)==null?void 0:r.updatingProgress)??0}get lodFactor(){var r,o,a,s;return((s=(a=(o=(r=this.view)==null?void 0:r.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?f:1}get visibleAtCurrentScale(){return l(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){return new d({layer:this.layer,sourceLayer:this.layer})}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const r=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>r,()=>this._modifications=r.toArray(),p),"modifications")}};i([e()],t.prototype,"layer",void 0),i([e()],t.prototype,"i3slayer",null),i([e(c)],t.prototype,"updatingProgress",void 0),i([e()],t.prototype,"updatingProgressValue",null),i([e()],t.prototype,"lodFactor",null),i([e({readOnly:!0})],t.prototype,"progressiveLoadFactor",null),i([e({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=i([u("esri.views.3d.layers.IntegratedMeshLayerView3D")],t);const ut=t;export{ut as default};