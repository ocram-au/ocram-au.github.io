import{aB as d,df as f,V as m,C as a,e as l,y as n,a as u}from"./index-ClOzeblJ.js";import{l as p}from"./LayerView3D-CQRkny_U.js";import{p as c}from"./TiledLayerView3D-BsTvvX5B.js";import{i as y}from"./fetchTile-B8s-zMSn.js";import{y as g}from"./LayerView-CTQPmViI.js";import{i as I}from"./RefreshableLayerView-W-7fck6O.js";let r=class extends I(c(p(g))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet(t=>this._getTileInfoSupportError(t.tileInfo,t.fullExtent));const e=d(()=>{var t,i;return(i=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const t=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent));t!=null&&(t.id!==null&&this.layer.activeLayer.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),t.tileInfo&&(this.tileInfo=t.tileInfo),this.layer.fullExtent=t.fullExtent)});this.addResolvingPromise(e),this.when(()=>this._postInitialize())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return e!=null&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async fetchTile(e,t){return y(this,e,t)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add(()=>{var e,t;return(t=(e=this.layer)==null?void 0:e.activeLayer)==null?void 0:t.styleId},()=>this.refresh()),this._updatingHandles.add(()=>{var e;return(e=this.layer)==null?void 0:e.activeLayer},e=>{const t=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent),!0);t&&t.id!=null&&e.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getCompatibleTileInfoMatrixSet(e,t=!1){const i=f(this.layer);if(i!=null){if(m.isCollection(i))return i.find(h=>{const s=e(h);return s!=null&&(t?a.getLogger(this).error("The selected tile matrix set is not compatible with the view",s):this.addResolvingPromise(Promise.reject(s))),s==null});const o=e(i);return o!=null&&(t?a.getLogger(this).error("The selected tile matrix set is not compatible with the view",o):this.addResolvingPromise(Promise.reject(o))),i}return null}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};l([n()],r.prototype,"layer",void 0),l([n()],r.prototype,"suspended",void 0),l([n()],r.prototype,"tileInfo",void 0),r=l([u("esri.views.3d.layers.WMTSLayerView3D")],r);const M=r;export{M as default};