import{e as i,y as o,a as p}from"./index-ClOzeblJ.js";import{N as a}from"./DynamicLayerView3D-BHKdk2Rz.js";import{y as m}from"./ExportImageParameters-DMNOLvLT.js";import{i as n}from"./timeSupport-DiBWPSec.js";import{_ as l}from"./MapServiceLayerViewHelper-B4TouB8m.js";import{r as h}from"./drapedUtils-Bh40OKN1.js";import"./LayerView3D-CQRkny_U.js";import"./projectExtentUtils-Dm15L6g2.js";import"./ImageMaterial.glsl-BN_hUo88.js";import"./LayerView-CTQPmViI.js";import"./RefreshableLayerView-W-7fck6O.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BX1bu0Sc.js";import"./popupUtils-BTKYIjXJ.js";const u=r=>{let e=class extends r{initialize(){this.exportImageParameters=new m({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var t;return((t=this.view)==null?void 0:t.floors)??null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var t;return n(this.layer,(t=this.view)==null?void 0:t.timeExtent,this._get("timeExtent"))}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}};return i([o()],e.prototype,"exportImageParameters",void 0),i([o({readOnly:!0})],e.prototype,"floors",null),i([o({readOnly:!0})],e.prototype,"exportImageVersion",null),i([o()],e.prototype,"layer",void 0),i([o()],e.prototype,"suspended",void 0),i([o({readOnly:!0})],e.prototype,"timeExtent",null),e=i([p("esri.views.layers.MapImageLayerView")],e),e};let s=class extends u(a){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add(()=>this.exportImageVersion,()=>this._updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new l({createFetchPopupFeaturesQueryGeometry:(r,e)=>h(r,e,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){var r;(r=this._popupHighlightHelper)==null||r.destroy()}fetchPopupFeaturesAtLocation(r,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(r,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};s=i([p("esri.views.3d.layers.MapImageLayerView3D")],s);const F=s;export{F as default};