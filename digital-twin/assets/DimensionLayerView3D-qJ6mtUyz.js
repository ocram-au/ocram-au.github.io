const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DimensionAnalysisView3D-ozkt8JNI.js","assets/index-CnMvbdm6.js","assets/index-CeVDQqKG.css","assets/AnalysisView3D-B9xSVW_7.js","assets/LengthDimension-BsTQBZmM.js","assets/Segment-B9V3-PDM.js","assets/VisualElement-Bqidtlk9.js","assets/TextOverlayItem-CVJ-yuWO.js","assets/automaticLengthMeasurementUtils-toXf84F7.js","assets/ShadedColorMaterial.glsl-BsPDRek5.js","assets/dragEventPipeline3D-BhMs0_4r.js","assets/InteractiveToolBase-DRcSn_5o.js","assets/EditGeometryOperations-DpnESYwe.js","assets/ImageMaterial.glsl-DPWG4Ito.js","assets/Factory-H-71M75S.js","assets/SnappingVisualizer3D-C7YGIPwe.js","assets/ExtendedLineVisualElement-CAipz35u.js","assets/vec4f32-CjrfB-0a.js","assets/EngineVisualElement-xfPquzak.js","assets/Laserlines.glsl-D-7bsT9X.js","assets/PointVisualElement-D0qGG0xr.js","assets/Object3DVisualElement-YfRiuih3.js","assets/RightAngleQuadVisualElement-DooBkXzq.js","assets/SnappingContext-CHV65FEb.js","assets/PointSnappingHint-BbX2_9xW.js","assets/LineVisualElement-DpdNK1XP.js","assets/VerticesVisualElement-CWbBjnNW.js","assets/SnappingDragPipelineStep-DY8sr0Fx.js","assets/dehydratedFeatureComparison-cCWB-Bs1.js","assets/SnappingManagerPool-9A-kmYkC.js","assets/SnappingOperation-d9cbzsM8.js","assets/AnalysisToolBase-rkEgv43-.js","assets/ToolIntersector-C0DeYYhk.js","assets/quantityFormatUtils-DQYE663i.js","assets/projectionUtils-Cj4ZNuhF.js","assets/analysisViewUtils-BF8B3HVJ.js"])))=>i.map(i=>d[i]);
import{e as a,y as t,a as o,V as h,cf as w,f as u,A as c,t as V,k as d,u as p,g as _,q as m,bY as v}from"./index-CnMvbdm6.js";import{l as A}from"./LayerView3D-Bw9GC62b.js";import{y as f}from"./LayerView-CrGTOnVo.js";const D=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),s=a([o("esri.views.layers.DimensionLayerView")],s),s},y="analysis-view-handles";let n=class extends A(D(f)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},c),y)}destroy(){this.removeHandles(y),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new V("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-ozkt8JNI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]))}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([o("esri.views.3d.layers.DimensionLayerView3D")],n);const L=n;export{L as default};