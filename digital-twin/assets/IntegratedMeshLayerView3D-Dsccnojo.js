import{cj as n,co as m,cp as l,P as p,K as d,e as i,y as e,aD as c,a as u}from"./index-ClOzeblJ.js";import{A as h}from"./I3SMeshView3D-CD_1UJRJ.js";import{l as g}from"./LayerView3D-CQRkny_U.js";import{y}from"./LayerView-CTQPmViI.js";import"./Transform-BWoskbCc.js";import"./RenderTexture-BDhrXi2v.js";import"./I3SOverrides-BuzuwTIR.js";import"./I3SNode-DDIYxrYY.js";import"./I3SUtil-jq2wwHwF.js";import"./I3SBinaryReader-BZ0Ocz_y.js";import"./meshFeatureSet-B5JdI4yB.js";import"./Mesh-C0iIc8kY.js";import"./MeshTransform-BIFDOkMw.js";import"./vertexSpaceConversion-123zGiSw.js";import"./External-BZZjkN_m.js";import"./infoFor3D-DsOdlPuA.js";import"./FeatureLayerView3D-BHVNliLe.js";import"./FeatureLayerViewBase3D-rr5mIoTF.js";import"./HeatmapDensity.glsl-o2fdYhtJ.js";import"./timeSupport-DiBWPSec.js";import"./projectExtentUtils-Dm15L6g2.js";import"./dehydratedFeatureComparison-CMd6IpEm.js";import"./queryForSymbologySnapping-DS7F7-ep.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-CW2xSYeU.js";import"./rendererConversion-BmtbSHj-.js";import"./optimizedFeatureQueryEngineAdapter-Cx7W0OBd.js";import"./PooledRBush-OWaDmARO.js";import"./quickselect-SG4KBEIz.js";import"./popupUtils-BTKYIjXJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-ujEhle5V.js";import"./WhereClause-XYFxqlAH.js";import"./TimeOnly-f9n-uNgn.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-Bo8R5uBD.js";import"./utils-C9GF_D4N.js";import"./ClassBreaksDefinition-CchT6Wr4.js";import"./FeatureStore-CvM22RQB.js";import"./BoundsStore-BoZwIxqF.js";import"./WorkerHandle-Cw5Kwhzd.js";import"./EventedSet-DiQjkRQk.js";import"./RefreshableLayerView-W-7fck6O.js";import"./SceneModification-BtrQWo_9.js";import"./persistable-kz0vDgU1.js";import"./resourceExtension-CTg0GFsJ.js";import"./SceneLayerWorker-bOxJ5Xrt.js";import"./makeScheduleFunction-CggzEh3c.js";const f=.2;let t=class extends h(g(y)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=!n("disable-feature:im-shading"),this.drapeTargetType=m.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var r;return((r=this._controller)==null?void 0:r.updatingProgress)??0}get lodFactor(){var r,o,a,s;return((s=(a=(o=(r=this.view)==null?void 0:r.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?f:1}get visibleAtCurrentScale(){return l(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){return new d({layer:this.layer,sourceLayer:this.layer})}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const r=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>r,()=>this._modifications=r.toArray(),p),"modifications")}};i([e()],t.prototype,"layer",void 0),i([e()],t.prototype,"i3slayer",null),i([e(c)],t.prototype,"updatingProgress",void 0),i([e()],t.prototype,"updatingProgressValue",null),i([e()],t.prototype,"lodFactor",null),i([e({readOnly:!0})],t.prototype,"progressiveLoadFactor",null),i([e({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=i([u("esri.views.3d.layers.IntegratedMeshLayerView3D")],t);const ut=t;export{ut as default};