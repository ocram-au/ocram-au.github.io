const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LineOfSightAnalysisView3D-DudgKvjk.js","assets/index-CnMvbdm6.js","assets/index-CeVDQqKG.css","assets/AnalysisView3D-B9xSVW_7.js","assets/projectionUtils-Cj4ZNuhF.js","assets/ShadedColorMaterial.glsl-BsPDRek5.js","assets/manipulatorUtils-Co8lwBfQ.js","assets/Laserlines.glsl-D-7bsT9X.js","assets/VisualElement-Bqidtlk9.js","assets/AnalysisToolBase-rkEgv43-.js","assets/InteractiveToolBase-DRcSn_5o.js","assets/EditGeometryOperations-DpnESYwe.js","assets/LineVisualElement-DpdNK1XP.js","assets/Object3DVisualElement-YfRiuih3.js","assets/PointVisualElement-D0qGG0xr.js","assets/analysisViewUtils-BF8B3HVJ.js"])))=>i.map(i=>d[i]);
import{f as h,A as w,t as r,k as d,u as V,g as _,q as c,bY as u,e as a,y as n,a as p}from"./index-CnMvbdm6.js";import{l as A}from"./LayerView3D-Bw9GC62b.js";import{y as f}from"./LayerView-CrGTOnVo.js";const o="analysis-view-handles";let i=class extends A(f){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let e=this._analysisModule;if(e==null){const y=await this._loadAnalysisModule();this._analysisModule=y,e=y}const l=new e.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new r("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-DudgKvjk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))}};a([n()],i.prototype,"type",void 0),a([n()],i.prototype,"layer",void 0),a([n()],i.prototype,"analysisView",void 0),a([n()],i.prototype,"_createAnalysisViewTask",void 0),i=a([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};