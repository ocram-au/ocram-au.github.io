import{e as r,y as i,a as o,t as s}from"./index-CnMvbdm6.js";import{g as m}from"./FeatureLayerViewBase3D-BuszJRzz.js";import"./HeatmapDensity.glsl-Ck8-H1-Z.js";import"./timeSupport-wI7XZFUF.js";import"./projectExtentUtils-BO1kReoJ.js";import"./dehydratedFeatureComparison-cCWB-Bs1.js";import"./queryForSymbologySnapping-rXUyCWwk.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-BOMpc8Y0.js";import"./optimizedFeatureQueryEngineAdapter-DoWPFAMc.js";import"./PooledRBush-DjlJ-0ca.js";import"./quickselect-Dt69GVnw.js";import"./popupUtils-ChYOAPox.js";import"./QueryEngine-thJFuFOh.js";import"./WhereClause-0JuZbZ1m.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-Bpw4V5xg.js";import"./utils-DxnqirXF.js";import"./ClassBreaksDefinition-8yObgNEC.js";import"./FeatureStore-D8k4fmcL.js";import"./BoundsStore-CMWUFKPt.js";import"./LayerView3D-Bw9GC62b.js";import"./WorkerHandle-BIlUISGu.js";import"./EventedSet-bbnjaFlf.js";import"./LayerView-CrGTOnVo.js";import"./RefreshableLayerView-B0CtTdhY.js";const l=a=>{let e=class extends a{get availableFields(){return this.layer.fieldsIndex.fields.map(p=>p.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const k=t;export{k as default};