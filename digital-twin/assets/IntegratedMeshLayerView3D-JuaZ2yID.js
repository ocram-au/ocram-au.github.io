import{dv as n,dA as l,dB as m,P as p,E as d,e,y as i,c8 as c,a as u}from"./index-DenhEmYc.js";import{A as h}from"./I3SMeshView3D-hFy9omIs.js";import{l as g}from"./LayerView3D-BMVspx8y.js";import{y}from"./LayerView-CFi9jAHI.js";import"./Transform-CRl0Cvd6.js";import"./RenderTexture-YHGNqcCV.js";import"./I3SOverrides-BJtjd21d.js";import"./I3SNode-Do1-mU1m.js";import"./I3SUtil-D4E-fWCM.js";import"./I3SBinaryReader-5UljqFiE.js";import"./meshFeatureSet-BayL0qI4.js";import"./Mesh-DqRCjjqu.js";import"./MeshTransform-Vlr99SNx.js";import"./vertexSpaceConversion-CzNOHRn6.js";import"./External-B_EJMe0e.js";import"./infoFor3D-DsOdlPuA.js";import"./FeatureLayerView3D-LqYtvWLk.js";import"./FeatureLayerViewBase3D-VV8Sy4cH.js";import"./HeatmapDensity.glsl-pTDU8kNU.js";import"./timeSupport-XwFWxkJM.js";import"./projectExtentUtils-Cal1tR8b.js";import"./dehydratedFeatureComparison-DnyM2zay.js";import"./queryForSymbologySnapping-B4uLqi7T.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-BwsEmmUe.js";import"./optimizedFeatureQueryEngineAdapter-PE9GVdEw.js";import"./PooledRBush-C0iBXXtz.js";import"./quickselect-DJqVyp_C.js";import"./popupUtils-BMk83Ldi.js";import"./QueryEngine-DlfKqLfw.js";import"./WhereClause-Df1oY3qg.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-B-iHVOk7.js";import"./utils-XSNSW0vc.js";import"./ClassBreaksDefinition-Dsr3Tap2.js";import"./FeatureStore-CNNpxNAu.js";import"./BoundsStore-CnZO64QG.js";import"./WorkerHandle-qk6tXuq9.js";import"./EventedSet-DVoKSns6.js";import"./RefreshableLayerView-BnW0Po7s.js";import"./SceneModification-Dq6iH0iI.js";import"./SceneLayerWorker-C37_N6JC.js";import"./makeScheduleFunction-CggzEh3c.js";const v=.2;let t=class extends h(g(y)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=!n("disable-feature:im-shading"),this.drapeTargetType=l.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var r;return((r=this._controller)==null?void 0:r.updatingProgress)??0}get lodFactor(){var r,o,a,s;return((s=(a=(o=(r=this.view)==null?void 0:r.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?v:1}get visibleAtCurrentScale(){return m(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){return new d({layer:this.layer,sourceLayer:this.layer})}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const r=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>r,()=>this._modifications=r.toArray(),p),"modifications")}};e([i()],t.prototype,"layer",void 0),e([i()],t.prototype,"i3slayer",null),e([i(c)],t.prototype,"updatingProgress",void 0),e([i()],t.prototype,"updatingProgressValue",null),e([i()],t.prototype,"lodFactor",null),e([i({readOnly:!0})],t.prototype,"progressiveLoadFactor",null),e([i({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=e([u("esri.views.3d.layers.IntegratedMeshLayerView3D")],t);const nt=t;export{nt as default};