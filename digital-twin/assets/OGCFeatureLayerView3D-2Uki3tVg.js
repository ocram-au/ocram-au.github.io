import{e as r,y as i,a as o,m as s}from"./index-ClOzeblJ.js";import{g as m}from"./FeatureLayerViewBase3D-rr5mIoTF.js";import"./HeatmapDensity.glsl-o2fdYhtJ.js";import"./timeSupport-DiBWPSec.js";import"./projectExtentUtils-Dm15L6g2.js";import"./dehydratedFeatureComparison-CMd6IpEm.js";import"./queryForSymbologySnapping-DS7F7-ep.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-CW2xSYeU.js";import"./rendererConversion-BmtbSHj-.js";import"./optimizedFeatureQueryEngineAdapter-Cx7W0OBd.js";import"./PooledRBush-OWaDmARO.js";import"./quickselect-SG4KBEIz.js";import"./popupUtils-BTKYIjXJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-ujEhle5V.js";import"./WhereClause-XYFxqlAH.js";import"./TimeOnly-f9n-uNgn.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-Bo8R5uBD.js";import"./utils-C9GF_D4N.js";import"./ClassBreaksDefinition-CchT6Wr4.js";import"./FeatureStore-CvM22RQB.js";import"./BoundsStore-BoZwIxqF.js";import"./LayerView3D-CQRkny_U.js";import"./WorkerHandle-Cw5Kwhzd.js";import"./EventedSet-DiQjkRQk.js";import"./LayerView-CTQPmViI.js";import"./RefreshableLayerView-W-7fck6O.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const B=t;export{B as default};