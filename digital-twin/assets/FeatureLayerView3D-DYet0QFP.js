import{e as i,y as p,a as m,cA as l,cB as n,t as o,w as y,c5 as c}from"./index-B6FTDkqq.js";import{g as d}from"./FeatureLayerViewBase3D-CQigyHWl.js";import"./HeatmapDensity.glsl-CjZ3RsiK.js";import"./timeSupport-CUtkbmSE.js";import"./projectExtentUtils-74u3ERLo.js";import"./dehydratedFeatureComparison-DTJgVKfs.js";import"./queryForSymbologySnapping-ByRnvmHz.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-D94WUpEz.js";import"./optimizedFeatureQueryEngineAdapter-C-wQCKpF.js";import"./PooledRBush-BnMb8sOh.js";import"./quickselect-DO3ernqi.js";import"./popupUtils-psWR8V_O.js";import"./QueryEngine-FXykRKac.js";import"./WhereClause-JhZerCEJ.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-xrP9QSZ7.js";import"./utils-dZTjTTMU.js";import"./ClassBreaksDefinition-BV-os3in.js";import"./FeatureStore-ZJ1ttLno.js";import"./BoundsStore-Bd0IKyn2.js";import"./LayerView3D-BR71YyJD.js";import"./WorkerHandle-DuPEE_IW.js";import"./EventedSet-CGBUFCWR.js";import"./LayerView-Caw2GMiN.js";import"./RefreshableLayerView-BwshdPOz.js";let t=class extends d{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=l()}initialize(){var a;const{layer:e,view:r}=this;(a=n(e))!=null&&a.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new o("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),e.infoFor3D!=null&&(this.direct3DObjectFeatureLayerDisplayEnabled?this.addResolvingPromise((async()=>{const s=await y(()=>this.graphicsPipeline);this.destroyed||s.destroyed||(s.suspendResumeExtentMode="computed")})()):this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||c(e.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e,r;return(r=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:r.spatialReference}};i([p({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),i([p()],t.prototype,"layer",void 0),t=i([m("esri.views.3d.layers.FeatureLayerView3D")],t);const V=t;export{V as default};