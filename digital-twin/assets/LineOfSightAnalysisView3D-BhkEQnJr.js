import{e as o,y as r,a as D,S as k,as as m,cu as W,cF as ue,pC as Ne,ql as Ue,cO as Be,rT as We,aO as Ae,b1 as qe,b2 as te,aP as Ze,aR as Je,aS as Ke,aH as Xe,af as Ee,rU as Qe,b5 as x,rV as q,rW as Ye,rX as et,rY as Y,qi as tt,aK as T,aL as de,aG as j,aF as N,be as ce,ci as He,h as pe,av as ge,kq as ie,au as Z,bF as it,rZ as se,aZ as B,re as F,n as ne,r_ as ve,ie as J,hI as K,P as R,g as me,k as nt,ay as st,Z as De,r$ as ot,s0 as at,hi as _e,dw as rt,s1 as lt,s2 as ye,s3 as ut,F as v,eM as dt,oN as ct,jN as Me,f as ke,s4 as G,bb as ht,A as pt,u as $,hw as be,bk as gt,hu as fe,s5 as oe,mL as Ce,iq as we,mG as vt,pE as mt,cC as A,bM as _t,V as yt}from"./index-uWjCvim1.js";import{s as bt}from"./AnalysisView3D-C3rHpx2o.js";import{t as Oe}from"./projectionUtils-BpqYGWie.js";import{e as xe,f as Fe,a as ze}from"./ShadedColorMaterial.glsl-Bof8Rnv1.js";import{r as Ge}from"./manipulatorUtils-zPs_1jic.js";import{c as ft}from"./Laserlines.glsl-DpSbpS_T.js";import{o as Ct}from"./AnalysisToolBase-B7ZsxupG.js";import{p as Te}from"./InteractiveToolBase-HIhqS879.js";import{f as ae}from"./LineVisualElement-DOOuN4-D.js";import{x as Ie}from"./PointVisualElement-B2guYBW7.js";import{a as wt,v as Ot}from"./analysisViewUtils-DhQviPgi.js";import"./VisualElement-CR1nrhh4.js";import"./EditGeometryOperations-DmwIM_x3.js";import"./Object3DVisualElement-QdF8BP1v.js";let E=class extends k{constructor(e){super(e),this.target=null,this.intersectedGraphic=null,this.intersectedLocation=null,this.elevationAlignedTargetLocation=null,this.visible=void 0}};o([r()],E.prototype,"target",void 0),o([r()],E.prototype,"intersectedGraphic",void 0),o([r()],E.prototype,"intersectedLocation",void 0),o([r()],E.prototype,"elevationAlignedTargetLocation",void 0),o([r({type:Boolean})],E.prototype,"visible",void 0),E=o([D("esri.views.3d.analysis.LineOfSightAnalysisResult")],E);let H=class extends k{constructor(e){super(e),this.elevationAlignedTargetLocation=null,this.inputPoints={isValid:!1,observer:m(),observerSurfaceNormal:null,observerFeatureId:null,target:m(),targetSurfaceNormal:null,targetFeatureId:null,observerAdjusted:m(),targetAdjusted:m()},this.computationResult={start:m(),end:m(),intersection:m(),isValid:!1,isTargetVisible:!1},this.result=null}notifyResultChanged(){this.notifyChange("computationResult")}notifyInputPointsChanged(){this.notifyChange("inputPoints")}};o([r()],H.prototype,"target",void 0),o([r()],H.prototype,"elevationAlignedTargetLocation",void 0),o([r()],H.prototype,"inputPoints",void 0),o([r()],H.prototype,"computationResult",void 0),o([r()],H.prototype,"result",void 0),H=o([D("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],H);var he;let I=he=class extends k{constructor(t){super(t)}clone(){return new he({type:this.type,id:W(this.id),mapPoint:W(this.mapPoint),renderPoint:ue(this.renderPoint),normal:W(this.normal),ray:W(this.ray),graphic:this.graphic})}equals(t){return this.type===t.type&&this.id===t.id&&Ne(this.mapPoint,t.mapPoint)&&Ue(this.renderPoint,t.renderPoint)&&Be(this.normal,t.normal)&&We(this.ray,t.ray)&&this.graphic===t.graphic}};o([r()],I.prototype,"type",void 0),o([r({constructOnly:!0})],I.prototype,"id",void 0),o([r({constructOnly:!0})],I.prototype,"mapPoint",void 0),o([r({constructOnly:!0})],I.prototype,"renderPoint",void 0),o([r({constructOnly:!0})],I.prototype,"normal",void 0),o([r({constructOnly:!0})],I.prototype,"graphic",void 0),o([r({constructOnly:!0})],I.prototype,"ray",void 0),I=he=o([D("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],I);let z=class extends k{constructor(e){super(e),this._terrainIntersectionOptionsLayerUids=new Set(["terrain"])}initialize(){this.intersector=qe(this.view.state.viewingMode),this.intersector.options.hud=!1,this.intersector.options.store=te.MIN}getScreenPointIntersection(e){const i=Ze(e,Je.get()),n=Ke(this.view.state.camera,i,re);return this._getRayIntersection(n)}_getRayIntersection(e,i){if(e==null||this.view.sceneIntersectionHelper==null)return null;const{intersector:n}=this;n.options.store=te.MIN,this.view.sceneIntersectionHelper.intersectToolIntersectorRay(e,n,i);const s=n.results.min,a=m();if(!s.getIntersectionPoint(a)||(i==null?void 0:i.maxDistance)!=null&&Xe(a,e.origin)>i.maxDistance**2)return null;const l=this.view.renderCoordsHelper.fromRenderCoords(a,new Ee({spatialReference:this.view.spatialReference})),h=ue(s.normal);if(Qe(s))return new I({type:x.OBJECT,id:`${s.target.layerUid}/${s.target.nodeIndex}/${s.target.componentIndex}`,mapPoint:l,renderPoint:a,normal:h,ray:q(e),graphic:null});if(Ye(s))return new I({type:x.OBJECT,id:`${s.target.layerUid}/${s.target.graphicUid}`,mapPoint:l,renderPoint:a,normal:h,ray:q(e),graphic:null});if(et(s))return new I({type:x.TERRAIN,id:s.target.lij.slice(),mapPoint:l,renderPoint:a,normal:h,ray:q(e),graphic:null});const d=Y(s,this.view);if(d!=null){const c=d.layer,u=d.sourceLayer;let p;return u&&u.type==="scene"?p=tt(d,u.objectIdField):p=d.uid,new I({type:x.OBJECT,id:`${c==null?void 0:c.uid}/${p}`,mapPoint:l,renderPoint:a,normal:h,ray:q(e),graphic:d})}return null}updateFromGroundIntersection(e,i,n){const s=Tt,a=It,l=Pt,h=Pe;T(a,e),this.view.renderCoordsHelper.worldUpAtPosition(a,l),de(l,l);const d=this.view.basemapTerrain.visibleElevationBounds,c=(i>=0?1:-1)*((d?Math.abs(d.max-d.min):100)+Math.abs(i));j(h,l,c),N(s,a,h),ce(s,a,re);const u=this._getRayIntersection(re,{include:this._terrainIntersectionOptionsLayerUids,maxDistance:c});if(u!=null){const p=Pe;return j(p,l,i),N(n,u.renderPoint,p),ue(u.normal)}return T(n,e),null}};o([r()],z.prototype,"view",void 0),o([r()],z.prototype,"intersector",void 0),z=o([D("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],z);const Tt=m(),It=m(),Pt=m(),Pe=m(),re=Ae();let y=class extends He.EventedMixin(k){constructor(t){super(t),this.updateOnCameraChange=!0,this._observerGroundOffsetRenderSpace=0,this._effectiveObserverElevationMode="absolute-height",this._observerFeatureId=null,this._updatingHandles=new pe,this._frameTask=ge,this._computationHandles=new ie,this._externalObserverUpdate=!0}initialize(){var e;const t=(e=this.view.resourceController)==null?void 0:e.scheduler;this._frameTask=t?t.registerTask(Z.LINE_OF_SIGHT_TOOL):ge,this._intersector=new z({view:this.view}),this.addHandles([this._connectObserver(),this._connectComputations(),this._connectTargets()])}destroy(){this._computationHandles.destroy(),this._computations.removeAll(),this._updatingHandles.destroy()}get updating(){return this._frameTask.updating||this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(t){this._frameTask.priority=t}get _computations(){return this.analysisViewData.computations}get _elevationAlignedObserverPositionRenderSpace(){return this.analysisViewData.observerEngineLocation}set _elevationAlignedObserverPositionRenderSpace(t){this.analysisViewData.observerEngineLocation=t}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._elevationAlignedObserverPositionRenderSpace)}_computeResult(t){const e=t.computation,{inputPoints:i,computationResult:n}=e,{observerAdjusted:s,targetAdjusted:a}=i,{start:l,end:h}=n;T(l,s),T(h,a),this._canCompute(e)?this._computeIntersection(t):Lt(t),e.notifyResultChanged(),this.emit("result-changed",{target:t.computation.target,result:e.result})}_updateAdjustedPointsFromFeatures(t){const e=this.view,{sceneIntersectionHelper:i}=e,{inputPoints:n}=t,{observerAdjusted:s,observerFeatureId:a,targetFeatureId:l,targetAdjusted:h}=n;if(a==null&&l==null)return;const d=it(s,h),c=this._intersector.intersector,u=ce(n.observer,n.target,Re);c.options.store=te.ALL,i.intersectToolIntersectorRay(u,c);let p=null,g=null,C=null,b=null;for(const w of c.results.all){const _=Y(w,this.view);if(_==null||w.distanceInRenderSpace==null)continue;const L=se(_);L!=null&&(a!=null&&L===a&&(p==null&&(p=Le(w,e,d)),w.distanceInRenderSpace<p&&(C=w)),l!=null&&L===l&&(g==null&&(g=Le(w,e,d)),b==null&&w.distanceInRenderSpace<d&&d-w.distanceInRenderSpace<g&&(b=w)))}C!=null&&C.getIntersectionPoint(s)&&(n.observerSurfaceNormal=C.getTransformedNormal(m())),b!=null&&b.getIntersectionPoint(h)&&(n.targetSurfaceNormal=b.getTransformedNormal(m()))}_adjustStartEndPositions(t){const e=this._screenPixelSize,i=this.view,{inputPoints:n}=t,{observer:s,observerSurfaceNormal:a,target:l,targetSurfaceNormal:h,observerAdjusted:d,targetAdjusted:c}=n,u=ee;T(d,s),T(c,l),this._updateAdjustedPointsFromFeatures(t),a!=null?T(u,a):B(u,c,d);const p=e;de(u,u),j(u,u,Math.min(p,1)),N(d,d,u),h!=null?T(u,h):B(u,d,c);const g=i.state.camera.computeScreenPixelSizeAt(c);de(u,u),j(u,u,Math.min(g,1)),N(c,c,u)}_computeIntersection({computation:t,interpolationInfo:e}){const{view:i}=this,{sceneIntersectionHelper:n,renderCoordsHelper:s}=i;if(n==null)return;const a=this._intersector.intersector,{computationResult:l,inputPoints:h}=t,{observer:d,target:c}=h,{start:u,end:p}=l,g=ce(u,p,Re);a.options.store=te.MIN,n.intersectToolIntersectorRay(g,a);const C=a.results.min,b=l.intersection,w=ee;let _=!0;if(C!=null&&C.getIntersectionPoint(b)){T(e.originalIntersection,b),T(e.originalObserver,u),T(e.originalTarget,p),s.fromRenderCoords(b,w,i.spatialReference);const P=1-F(p,c)/F(u,c);_=F(d,b)>=P*F(d,c)}const L=new Ee(w,i.spatialReference);{const{result:P,target:S}=t;P!=null?(P.target=S,P.intersectedGraphic=_?null:Y(C,i),P.intersectedLocation=_?null:L,P.visible=_):t.result=new E({target:S,elevationAlignedTargetLocation:t.elevationAlignedTargetLocation,intersectedGraphic:_?null:Y(C,i),intersectedLocation:_?null:L,visible:_})}l.isValid=h.isValid=!0,l.isTargetVisible=_}_canCompute(t){const e=this.analysisViewData.elevationAlignedObserver,i=this.view.frustum;if(e==null||t.elevationAlignedTargetLocation==null||i==null)return!1;const{observerAdjusted:n,targetAdjusted:s}=t.inputPoints,a=i.intersectsPoint(n),l=i.intersectsPoint(s);return a&&l}_onObserverPositionChange(t,e,i,n,s){if(this._externalObserverUpdate=s,t==null)return this.analysisViewData.elevationAlignedObserver=null,void(this._observerFeatureId=null);if(e==null)return Oe(this.analysis,t.spatialReference,ne.getLogger(this)),void(this.analysisViewData.elevationAlignedObserver=null);const a=Ve(e,i),{absoluteZ:l,elevation:h}=ve(e.x,e.y,e.z,this.view.spatialReference,this.view,a),d=e.clone();d.z=l,this._effectiveObserverElevationMode=a.mode,this.analysisViewData.elevationAlignedObserver=d;const c=m();this.view.renderCoordsHelper.toRenderCoords(d,c),this._elevationAlignedObserverPositionRenderSpace=c,this._observerGroundOffsetRenderSpace=l-h,this._observerFeatureId=se(n),this.priority=Z.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onObserverRenderSpacePositionChangeForComputation(t,e,i,n,s){const{inputPoints:a}=t;switch(T(a.observer,e),a.observerFeatureId=s,a.observerSurfaceNormal=null,n){case"on-the-ground":case"relative-to-ground":{const l=this._intersector.updateFromGroundIntersection(a.observer,i,a.observer);a.observerFeatureId==null&&(a.observerSurfaceNormal=l)}}this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=Z.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onTargetPositionChange(t,e,i,n,s,a=!0){const l=t.inputPoints;if(a&&(l.isValid=!1),i==null)return e!=null&&Oe(this.analysis,e.spatialReference,ne.getLogger(this)),t.elevationAlignedTargetLocation=null,void t.notifyInputPointsChanged();const h=Ve(i,n),{absoluteZ:d,elevation:c}=ve(i.x,i.y,i.z,this.view.spatialReference,this.view,h),u=i.clone();switch(u.z=d,t.elevationAlignedTargetLocation=u,this.view.renderCoordsHelper.toRenderCoords(t.elevationAlignedTargetLocation,l.target),l.targetFeatureId=se(s),l.targetSurfaceNormal=null,h.mode){case"on-the-ground":case"relative-to-ground":{const p=this._intersector.updateFromGroundIntersection(l.target,d-c,l.target);l.targetFeatureId==null&&(l.targetSurfaceNormal=p)}}this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=Z.LINE_OF_SIGHT_TOOL_INTERACTIVE}_connectComputationToTarget(t){return J([this._updatingHandles.add(()=>({computation:t,targetPosition:t.target.position,targetElevationInfo:t.target.elevationInfo,targetFeatureInfo:t.target.feature,projectedTargetPosition:K(t.target.position,this.view.spatialReference)}),({computation:e,targetPosition:i,targetElevationInfo:n,targetFeatureInfo:s,projectedTargetPosition:a})=>{a.pending==null?this._onTargetPositionChange(e,i,a.geometry,n,s):this._updatingHandles.addPromise(a.pending)},R)])}_connectComputationToObserver(t){return this._updatingHandles.add(()=>({computation:t,observer:this.analysisViewData.elevationAlignedObserver}),({computation:e})=>{this._externalObserverUpdate&&(e.inputPoints.isValid=!1,e.notifyInputPointsChanged())},R)}_connectComputationToRenderSpaceObserver(t){return this._updatingHandles.add(()=>({computation:t,observer:this._elevationAlignedObserverPositionRenderSpace,observerGroundOffset:this._observerGroundOffsetRenderSpace,observerElevationMode:this._effectiveObserverElevationMode,observerFeatureId:this._observerFeatureId}),({computation:e,observer:i,observerGroundOffset:n,observerElevationMode:s,observerFeatureId:a})=>{this._onObserverRenderSpacePositionChangeForComputation(e,i,n,s,a)},R)}_connectComputationToCamera(t){return this._updatingHandles.add(()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty}),({isDirty:e})=>{!this.updateOnCameraChange||t.inputPoints.isValid&&!e||t.notifyInputPointsChanged()})}_connectComputationToSlicePlane(t){return this._updatingHandles.add(()=>this.view.slicePlane,()=>{t.inputPoints.isValid=!1,t.notifyInputPointsChanged()})}_connectComputationToElevation(t){const e=(i,n)=>{const s=this.analysis.observer,a=t.target;let l=null,h=null,d=null,c=null,u=null,p=null;if((s==null?void 0:s.position)!=null){const g=K(s.position,this.view.spatialReference);if(g.pending!=null)return this._updatingHandles.addPromise(g.pending),void g.pending.finally(()=>e(i,n));l=g.geometry,h=s.elevationInfo,d=s.feature}if(a.position!=null){const g=K(a.position,this.view.spatialReference);if(g.pending!=null)return this._updatingHandles.addPromise(g.pending),void g.pending.finally(()=>e(i,n));c=g.geometry,u=a.elevationInfo,p=a.feature}l==null&&c==null||(lt(i,n,X,this.view.spatialReference),l!=null&&ye(X,l)&&this._onObserverPositionChange(s!=null?s.position:null,l,h,d,!1),c!=null&&ye(X,c)&&this._onTargetPositionChange(t,a.position,c,u,p,!1),l!=null&&c!=null&&ut(X,l,c)&&t.notifyInputPointsChanged())};return this.view.elevationProvider.on("elevation-change",({extent:i,spatialReference:n})=>e(i,n))}_connectComputationToTask(t){let e=null;const i={computation:t,interpolationInfo:{originalIntersection:m(),originalObserver:m(),originalTarget:m()}};return J([this._updatingHandles.add(()=>t.inputPoints,()=>{e=me(e),e=nt(async n=>{await st(this._frameTask.schedule(()=>this._computeResult(i),n))})},{initial:!0,equals:()=>!1}),De(()=>e=me(e))])}_connectComputation(t){const e=this._computationHandles;e.has(t)||e.add([this._connectComputationToTarget(t),this._connectComputationToObserver(t),this._connectComputationToRenderSpaceObserver(t),this._connectComputationToCamera(t),this._connectComputationToSlicePlane(t),this._connectComputationToElevation(t),this._connectComputationToTask(t)],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_onComputationCollectionChange({added:t,removed:e}){for(const i of e)this._disconnectComputation(i);for(const i of t)this._connectComputation(i)}_onTargetCollectionChange({added:t,removed:e}){for(const i of e)this._removeTarget(i);for(const i of t)this._addTarget(i)}_onCursorTargetChange(t,e){e!=null&&this._removeTarget(e),t!=null&&this._addTarget(t)}_addTarget(t){this._computations.some(e=>e.target===t)||this._computations.add(new H({target:t}))}_removeTarget(t){const e=this._computations.findIndex(i=>i.target===t);this._computations.removeAt(e)}_connectObserver(){return J([this._updatingHandles.add(()=>({observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,projectedObserverPosition:K(this.analysis.observer!=null?this.analysis.observer.position:null,this.view.spatialReference),observerElevationInfo:this.analysis.observer!=null?this.analysis.observer.elevationInfo:null,observerFeatureInfo:this.analysis.observer!=null?this.analysis.observer.feature:null}),({observerPosition:t,projectedObserverPosition:e,observerElevationInfo:i,observerFeatureInfo:n})=>{e.pending==null?this._onObserverPositionChange(t,e.geometry,i,n,!0):this._updatingHandles.addPromise(e.pending)},R)])}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this._computations,t=>this._onComputationCollectionChange(t),{initial:!0,final:!0})}_connectTargets(){return J([this._updatingHandles.addOnCollectionChange(()=>this.analysis.targets,t=>this._onTargetCollectionChange(t),{initial:!0,final:!0}),this._updatingHandles.add(()=>this.analysisViewData.cursorTarget,(t,e)=>{this._onCursorTargetChange(t,e)})])}get _isCameraDirty(){const t=this.analysisViewData.elevationAlignedObserver,{view:e}=this,{renderCoordsHelper:i}=e;if(t==null||i==null)return!1;const n=ee;i.toRenderCoords(t,n);const s=e.state.camera.computeScreenPixelSizeAt(n);return Math.abs((s-this._screenPixelSize)/this._screenPixelSize)>Vt}};function Le(t,e,i){if(ot(t)){const n=at(t,e);if(n!=null)return Math.min(n*Rt,i)}return 1e-5*i}function Ve(t,e){return t.hasZ?e??{mode:"absolute-height",offset:0}:{mode:"on-the-ground",offset:0}}function Lt({computation:t,interpolationInfo:e}){const{computationResult:i,inputPoints:n}=t,{start:s,end:a,intersection:l}=i,{originalIntersection:h,originalObserver:d,originalTarget:c}=e;if(T(l,h),n.isValid){const u=ee,p=F(d,h)/F(d,c);_e(u,s,d),j(u,u,1-p),N(l,l,u),_e(u,a,c),j(u,u,p),N(l,l,u),i.isValid=!0}else t.result=null,i.isValid=!1,i.isTargetVisible=!1}o([r({constructOnly:!0})],y.prototype,"analysis",void 0),o([r({constructOnly:!0})],y.prototype,"analysisViewData",void 0),o([r({constructOnly:!0})],y.prototype,"view",void 0),o([r()],y.prototype,"updating",null),o([r()],y.prototype,"priority",null),o([r()],y.prototype,"updateOnCameraChange",void 0),o([r()],y.prototype,"_computations",null),o([r()],y.prototype,"_elevationAlignedObserverPositionRenderSpace",null),o([r()],y.prototype,"_observerGroundOffsetRenderSpace",void 0),o([r()],y.prototype,"_effectiveObserverElevationMode",void 0),o([r()],y.prototype,"_observerFeatureId",void 0),o([r()],y.prototype,"_screenPixelSize",null),o([r({readOnly:!0})],y.prototype,"_updatingHandles",void 0),o([r()],y.prototype,"_frameTask",void 0),o([r()],y.prototype,"_isCameraDirty",null),y=o([D("esri.views.3d.analysis.LineOfSight.LineOfSightController")],y);const Vt=.1,ee=m(),Re=Ae(),X=rt(),Rt=.05;let St=class{constructor(){this.glowWidth=8,this.innerWidth=.75}};const $t=new St;function At(t){const e=t.accentColor;return{glowColor:e,innerColor:dt(e),globalAlpha:.75*e.a}}class Et{constructor(){this.size=.5}}const Ht=new Et;function Se(t){return ct(t.accentColor,.75)}class Dt{constructor(){this.size=.5,this.visibleColor=new v([3,252,111,.75]),this.occludedColor=new v([252,3,69,.75]),this.undefinedColor=new v([127,127,127,.75])}}const Mt=new Dt;let kt=class{constructor(){this.innerWidth=2,this.outerWidth=8,this.visibleInnerColor=new v([3,252,111,1]),this.visibleOuterColor=new v([3,252,111,.15]),this.occludedInnerColor=new v([252,3,69,1]),this.occludedOuterColor=new v([252,3,69,.1]),this.undefinedInnerColor=new v([255,255,255,1]),this.undefinedOuterColor=new v([127,127,127,.2])}};const Q=new kt;class xt extends xe{constructor(e,i){const n=Fe(Se(e.effectiveTheme)),s=Me(n,Ht.size,32,32),a=new ze(s);super({view:e,renderObjects:[a],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),Ge(this),this.themeHandle=ke(()=>({color:Se(e.effectiveTheme)}),l=>{n.setParameters(l)})}destroy(){this.themeHandle.remove(),super.destroy()}}let Ft=class extends xe{constructor(e,i){const{size:n,visibleColor:s,occludedColor:a,undefinedColor:l}=Mt;super({view:e,renderObjects:[le(n,s,G.Custom1),le(n,a,G.Custom2),le(n,l,G.Custom3)],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),Ge(this)}};function le(t,e,i){return new ze(Me(Fe(v.toUnitRGBA(e)),t,32,32),i)}var M;(function(t){t.Ready="ready",t.Creating="creating",t.Created="created"})(M||(M={}));let O=class extends Ct{constructor(e){super(e),this.removeIncompleteOnCancel=!1,this.analysisViewData=null,this._latestPointerMovePointerType=null,this._laserlineVisualElement=null,this._grabbedManipulator=null,this._analysisHandles=new ie,this._updatingHandles=new pe,this._manipulatorHandles=new ie,this._targetTrackerManipulator=null}initialize(){this._intersector=new z({view:this.view}),this.addHandles(ke(()=>this.state,e=>{e===M.Created&&this.finishToolCreation()},pt)),this._observerManipulator=this._createObserverManipulator(),this._createLaserLine(),this.addHandles([this._updatingHandles.add(()=>{var e;return(e=this.analysisViewData)==null?void 0:e.elevationAlignedObserver},e=>this._onObserverLocationChange(e),R),this._updatingHandles.add(()=>At(this.view.effectiveTheme),({glowColor:e,innerColor:i,globalAlpha:n})=>this._updateLaserLineStyle(e,i,n),R),this._updatingHandles.add(()=>this._laserLineRendererDependencies(),e=>this._updateLaserLineRenderer(e)),this._connectComputations(),this._updatingHandles.addWhen(()=>!this._shouldRenderTracker,()=>this._clearCursorTracker(),R)])}destroy(){this._updatingHandles=$(this._updatingHandles),this._manipulatorHandles=$(this._manipulatorHandles),this._analysisHandles=$(this._analysisHandles),this._observerManipulator=null,this._clearCursorTracker(),this._removeLaserLine(),this._intersector=null,this._set("analysis",null)}get state(){var e;return this.active?this.hasGrabbedManipulators?M.Created:M.Creating:((e=this.analysis.observer)==null?void 0:e.position)!=null?M.Created:M.Ready}get cursor(){return this.active&&this._showTracker?"crosshair":null}get updating(){return this.analysisViewData!=null&&this.analysisViewData.updating||this._updatingHandles.updating}get _showTracker(){return this.active&&this._latestPointerMovePointerType==="mouse"}get _shouldRenderTracker(){var e;return this._showTracker&&((e=this.analysis.observer)==null?void 0:e.position)!=null&&!this.hasGrabbedManipulators}continue(){this.view.activeTool=this}stop(){this.view.activeTool=null}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}onInputEvent(e){switch(e.type){case"immediate-double-click":this._doubleClickHandler(e);break;case"key-down":this._keyDownHandler(e);break;case"pointer-move":this._pointerMoveHandler(e)}}onInputEventAfter(e){e.type==="immediate-click"&&this._clickHandler(e)}onShow(){}onHide(){}onDeactivate(){this._clearCursorTracker()}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,e=>this._onComputationsCollectionChange(e),{initial:!0,final:!0})}_onComputationsCollectionChange({added:e,removed:i}){for(const n of i)this._disconnectComputation(n);for(const n of e)this._connectComputation(n)}_connectComputation(e){if(this.destroyed)return void ne.getLogger(this).warn("Attempting to connect an analysis to a destroyed LineOfSight tool. Ignoring.");const i=this._analysisHandles;if(i.has(e))return;const n=this._createTargetManipulator(e.target);this._targetTrackerManipulator==null&&n.metadata.target===this.analysisViewData.cursorTarget&&(this._targetTrackerManipulator=n,this._targetTrackerManipulator.available=!1,this._targetTrackerManipulator.interactive=!1,this._updateLaserLineRenderer()),i.add([this._updatingHandles.add(()=>jt(e),()=>Gt(n,e),R),this._updatingHandles.add(()=>e.elevationAlignedTargetLocation,s=>this._onTargetLocationChange(s,n),R)],e)}_disconnectComputation(e){if(this.destroyed)return void ne.getLogger(this).warn("Attempting to disconnect an analysis from a destroyed LineOfSight tool. Ignoring.");this._analysisHandles.remove(e);const i=this._getTargetManipulator(e.target);i!=null&&(this.manipulators.remove(i),this._manipulatorHandles.remove(i),this._targetTrackerManipulator!=null&&this._targetTrackerManipulator===i&&(this._targetTrackerManipulator=null))}_clearCursorTracker(){this.analysisViewData.cursorTarget=$(this.analysisViewData.cursorTarget)}_createTargetManipulator(e){const i={target:e,type:"target"},n=new Ft(this.view,i);return this._manipulatorHandles.add([this._createTargetManipulatorDragPipeline(n),n.events.on("grab-changed",s=>this._manipulatorGrabChanged(n,s)),n.events.on("immediate-click",s=>this._manipulatorClick(n,s))],n),this.manipulators.add(n),e.position!=null?n.elevationAlignedLocation=e.position:n.available=!1,n}_getTargetManipulator(e){let i=null;return this.manipulators.forEach(n=>{const s=n.manipulator;i==null&&s.metadata.type==="target"&&s.metadata.target===e&&(i=s)}),i}_createObserverManipulator(){const e=new xt(this.view,{type:"observer",intersection:null});return this._manipulatorHandles.add([this._createObserverManipulatorDragPipeline(e),e.events.on("grab-changed",i=>this._manipulatorGrabChanged(e,i)),e.events.on("immediate-click",i=>this._manipulatorClick(e,i))],e),this.manipulators.add(e),e}_screenToIntersection(){return e=>{const i=this._intersector.getScreenPointIntersection(e.screenEnd);return i==null?null:{...e,intersection:i}}}_createTargetManipulatorDragPipeline(e){return Te(e,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateTargetDragStep(e)).next(()=>this._updateLaserLineRenderer()),s.next(zt(e.metadata.target)).next(()=>this._updateLaserLineRenderer())})}_createObserverManipulatorDragPipeline(e){return Te(e,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateObserverDragStep()).next(()=>this._updateLaserLineRenderer()),s.next(this._cancelObserverDragStep()).next(()=>this._updateLaserLineRenderer())})}_updateObserverDragStep(){return e=>(e.intersection.mapPoint!=null?(this.analysis.observer==null&&(this.analysis.observer=new be),this._updateFromIntersection(this.analysis.observer,e.intersection)):this.analysis.observer=null,e)}_cancelObserverDragStep(){var i;const e=((i=this.analysis.observer)==null?void 0:i.position)!=null?this.analysis.observer.clone():null;return n=>(this.analysis.observer=e,n)}_updateTargetDragStep(e){return i=>{this._updateFromIntersection(e.metadata.target,i.intersection);const n=i.intersection.mapPoint;return n!=null&&(e.elevationAlignedLocation=n),i}}_manipulatorGrabChanged(e,i){switch(i.action){case"start":this._grabbedManipulator=e;break;case"end":this._grabbedManipulator===e&&(this._grabbedManipulator=null)}}_laserLineRendererDependencies(){return{laserlineVisualElement:this._laserlineVisualElement,grabbedManipulator:this._grabbedManipulator,shouldRenderTracker:this._shouldRenderTracker,observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,visible:this.visible}}_updateLaserLineRenderer(e=this._laserLineRendererDependencies()){const{laserlineVisualElement:i,grabbedManipulator:n,shouldRenderTracker:s,observerPosition:a,visible:l}=e;if(i==null)return;const h=n??(s&&a!=null?this._targetTrackerManipulator:null);h!=null&&l?(i.visible=!0,i.heightManifoldTarget=h.renderLocation,h!==this._observerManipulator?i.lineVerticalPlaneSegment=gt(this._observerManipulator.renderLocation,h.renderLocation,Nt):i.lineVerticalPlaneSegment=null):(i.visible=!1,i.heightManifoldTarget=null,i.lineVerticalPlaneSegment=null)}_createLaserLine(){this._removeLaserLine();const{glowWidth:e,innerWidth:i}=$t;this._laserlineVisualElement=new ft({view:this.view,attached:!0,visible:this.visible,style:{glowWidth:e,innerWidth:i},isDecoration:!0})}_removeLaserLine(){this._laserlineVisualElement!=null&&(this._laserlineVisualElement.destroy(),this._laserlineVisualElement=null)}_updateLaserLineStyle(e,i,n){const s=this._laserlineVisualElement;if(s==null)return;const a=s.style;s.style={...a,glowColor:v.toUnitRGB(e),innerColor:v.toUnitRGB(i),globalAlpha:n}}_onObserverLocationChange(e){e!=null?(this._observerManipulator.metadata.intersection=null,this._observerManipulator.available=!0,this._observerManipulator.elevationAlignedLocation=e):this._observerManipulator.available=!1}_onTargetLocationChange(e,i){e!=null?(i.elevationAlignedLocation=e,i!==this._targetTrackerManipulator&&(i.available=!0)):i.available=!1}_addPointFromClickEvent(e){var n;const i=this._intersector.getScreenPointIntersection(e);if((i==null?void 0:i.mapPoint)!=null)if(((n=this.analysis.observer)==null?void 0:n.position)!=null){this._clearCursorTracker();const s=new fe;this._updateFromIntersection(s,i),this.analysis.targets.add(s)}else{const s=new be;this._updateFromIntersection(s,i),this.analysis.observer=s}}_clickHandler(e){this.active&&e.button!==oe.Right&&(this._addPointFromClickEvent(Ce(e)),e.stopPropagation())}_doubleClickHandler(e){this.active&&e.button!==oe.Right&&(this.stop(),e.stopPropagation())}_keyDownHandler(e){this.active&&e.key==="Escape"&&(this.stop(),e.stopPropagation())}_pointerMoveHandler(e){var s;if(this.hasGrabbedManipulators||(this._latestPointerMovePointerType=e.pointerType,this._updateLaserLineRenderer(),!this._showTracker||((s=this.analysis.observer)==null?void 0:s.position)==null))return;const i=Ce(e),n=this._intersector.getScreenPointIntersection(i);(n==null?void 0:n.mapPoint)!=null&&(this.analysisViewData.cursorTarget==null&&(this.analysisViewData.cursorTarget=new fe),this._updateFromIntersection(this.analysisViewData.cursorTarget,n),this._updateLaserLineRenderer())}_updateFromIntersection(e,i){if(i.mapPoint==null)return e.position=null,e.elevationInfo=null,void(e.feature=null);switch(i.type){case x.OBJECT:if(i.graphic!=null){const s=i.graphic,a=vt(s);a.mode==="on-the-ground"&&(a.mode="relative-to-ground",a.offset=0),e.elevationInfo=new we(a),e.feature=s}else e.elevationInfo=null,e.feature=null;break;case x.TERRAIN:e.elevationInfo=new we({mode:"on-the-ground"}),e.feature=null;break;default:e.elevationInfo=null,e.feature=null}const n=i.mapPoint.clone();n.z=mt(this.view,n,{mode:"absolute-height",offset:0},e.elevationInfo),e.position=n}_manipulatorClick(e,i){if(e.metadata.type==="observer"||e.grabbing||e.dragging||i.button!==oe.Right||this.analysis.targets.length<=1)return;const{target:n}=e.metadata;this.analysis.targets.remove(n),i.stopPropagation()}get testInfo(){}};function zt(t){var i;const e=(i=t.position)==null?void 0:i.clone();return n=>(t.position=e,n)}function Gt(t,e){const{isValid:i,isTargetVisible:n}=e.computationResult;t.state=i?n?G.Custom1:G.Custom2:G.Custom3}function jt(t){const{isValid:e,isTargetVisible:i}=t.computationResult;return{isValid:e,isTargetVisible:i}}o([r({constructOnly:!0})],O.prototype,"view",void 0),o([r({constructOnly:!0})],O.prototype,"analysis",void 0),o([r({readOnly:!0})],O.prototype,"state",null),o([r({readOnly:!0})],O.prototype,"cursor",null),o([r()],O.prototype,"removeIncompleteOnCancel",void 0),o([r({readOnly:!0})],O.prototype,"updating",null),o([r({constructOnly:!0})],O.prototype,"analysisViewData",void 0),o([r({readOnly:!0})],O.prototype,"_showTracker",null),o([r()],O.prototype,"_latestPointerMovePointerType",void 0),o([r()],O.prototype,"_shouldRenderTracker",null),o([r()],O.prototype,"_laserlineVisualElement",void 0),o([r()],O.prototype,"_grabbedManipulator",void 0),O=o([D("esri.views.3d.analysis.LineOfSight.LineOfSightTool")],O);const Nt=ht();class Ut{constructor(e,i,n,s){this.visibleLineVisualElement=e,this.occludedLineVisualElement=i,this.undefinedLineVisualElement=n,this.targetVisualElement=s}destroy(){this.visibleLineVisualElement.destroy(),this.occludedLineVisualElement.destroy(),this.undefinedLineVisualElement.destroy(),this.targetVisualElement.destroy()}}let V=class extends k{constructor(t){super(t),this._lineOfSightVisualElements=new Array,this._computationHandles=new ie,this._updatingHandles=new pe}initialize(){this.addHandles(this._connectComputations()),this._createObserverVisualization()}destroy(){this._updatingHandles=$(this._updatingHandles),this._computationHandles=$(this._computationHandles),this._observerVisualElement=$(this._observerVisualElement)}get visible(){return this.analysisViewData.visible}get updating(){return this._updatingHandles.updating}get interactiveAndEditable(){return this.analysisViewData.interactive&&this.analysisViewData.editable}get test(){}_createLineOfSightVisualization(){const t=Q,e=this.view,i=this.isDecoration,n={view:e,attached:!0,width:t.outerWidth,innerWidth:t.innerWidth,isDecoration:i},s=v.toUnitRGBA(t.visibleOuterColor),a=v.toUnitRGBA(t.visibleInnerColor),l=v.toUnitRGBA(t.occludedOuterColor),h=v.toUnitRGBA(t.occludedInnerColor),d=v.toUnitRGBA(t.undefinedOuterColor),c=v.toUnitRGBA(t.undefinedInnerColor),u=new ae({...n,color:s,innerColor:a}),p=new ae({...n,color:l,innerColor:h}),g=new ae({...n,color:d,innerColor:c}),C=new Ie({view:e,attached:!0,...$e,size:8,isDecoration:i}),b=new Ut(u,p,g,C);return this._lineOfSightVisualElements.push(b),b}_destroyLineOfSightVisualization(t){t.destroy(),this._lineOfSightVisualElements.splice(this._lineOfSightVisualElements.indexOf(t),1)}_updateLineOfSightVisualization(t,e,i){const n=Q,{computationResult:s,inputPoints:a}=t,{start:l,end:h,intersection:d,isValid:c,isTargetVisible:u}=s,{observer:p}=a,g=Zt;g[12]=p[0],g[13]=p[1],g[14]=p[2];const C=B(Bt,l,p),b=B(Wt,h,p),w=B(qt,d,p),{visibleLineVisualElement:_,occludedLineVisualElement:L,undefinedLineVisualElement:P,targetVisualElement:S}=e,je=this.analysisViewData.elevationAlignedObserver==null||t.elevationAlignedTargetLocation==null,U=this.visible&&!je;_.visible=U,L.visible=U,P.visible=U,S.visible=U,S.attached=!i.interactiveAndEditable,U&&(_.geometry=null,L.geometry=null,P.geometry=null,S.geometry=t.elevationAlignedTargetLocation,c?u?(_.geometry=[[A(C),A(b)]],_.transform=g,_.color=v.toUnitRGBA(n.visibleOuterColor),S.color=v.toUnitRGBA(n.visibleInnerColor)):(_.geometry=[[A(C),A(w)]],_.transform=g,_.color=v.toUnitRGBA(n.occludedOuterColor),L.geometry=[[A(w),A(b)]],L.transform=g,S.color=v.toUnitRGBA(n.occludedInnerColor)):(P.geometry=[[A(C),A(b)]],P.transform=g,S.color=v.toUnitRGBA(n.undefinedInnerColor)))}_getLineOfSightVisualizationDependencies(t){const{computationResult:e}=t,{occludedOuterColor:i,visibleOuterColor:n}=Q;return{computationResult:e,occludedOuterColor:i,visibleOuterColor:n,visible:this.visible,interactiveAndEditable:this.interactiveAndEditable}}_connectComputation(t){const e=this._computationHandles;if(e.has(t))return;const i=this._createLineOfSightVisualization();e.add([this._updatingHandles.add(()=>this._getLineOfSightVisualizationDependencies(t),n=>this._updateLineOfSightVisualization(t,i,n),{initial:!0,equals:()=>!1}),De(()=>this._destroyLineOfSightVisualization(i))],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,t=>this._onComputationsCollectionChange(t),{initial:!0,final:!0})}_onComputationsCollectionChange({added:t,removed:e}){for(const i of e)this._disconnectComputation(i);for(const i of t)this._connectComputation(i)}_createObserverVisualization(){const t=v.toUnitRGBA(Q.visibleInnerColor),e=new Ie({view:this.view,color:t,...$e,isDecoration:this.isDecoration});this._observerVisualElement=e,this.addHandles(this._updatingHandles.add(()=>({observer:this.analysisViewData.elevationAlignedObserver,interactiveAndEditable:this.interactiveAndEditable,visible:this.visible}),({observer:i,interactiveAndEditable:n,visible:s})=>{i!=null&&!n&&s?(e.geometry=i,this._observerVisualElement.attached=!0):e.attached=!1},R))}};o([r({constructOnly:!0})],V.prototype,"analysis",void 0),o([r({constructOnly:!0})],V.prototype,"analysisViewData",void 0),o([r({constructOnly:!0})],V.prototype,"view",void 0),o([r({readOnly:!0})],V.prototype,"visible",null),o([r({constructOnly:!0})],V.prototype,"isDecoration",void 0),o([r()],V.prototype,"updating",null),o([r()],V.prototype,"interactiveAndEditable",null),o([r()],V.prototype,"test",null),V=o([D("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],V);const $e={size:6,pixelSnappingEnabled:!1,primitive:"circle",elevationInfo:{mode:"absolute-height",offset:0},outlineSize:0},Bt=m(),Wt=m(),qt=m(),Zt=_t();let f=class extends bt(He.EventedMixin(k)){constructor(t){super(t),this.type="line-of-sight-view-3d",this.analysis=null,this.tool=null,this.computations=new yt,this.elevationAlignedObserver=null,this.observerEngineLocation=m(),this.cursorTarget=null,this.editable=!0}initialize(){const t=this.view,e=this.analysis;this._analysisController=new y({analysis:e,analysisViewData:this,view:t}),this._analysisVisualization=new V({analysis:e,analysisViewData:this,view:t,isDecoration:!this.parent}),this.addHandles([this._analysisController.on("result-changed",i=>{i.target!==this.cursorTarget&&this.emit("result-changed",i)}),wt(this,O)])}destroy(){Ot(this),this._analysisController=$(this._analysisController),this._analysisVisualization=$(this._analysisVisualization)}get results(){return this.computations.map(t=>t.result)}get priority(){return this._analysisController.priority}set priority(t){this._analysisController.priority=t}get updating(){return this._analysisController!=null&&this._analysisController.updating||this._analysisVisualization!=null&&this._analysisVisualization.updating}getResultForTarget(t){var e;return(e=this.computations.find(i=>i.target===t))==null?void 0:e.result}get testInfo(){}};o([r({readOnly:!0})],f.prototype,"type",void 0),o([r({constructOnly:!0,nonNullable:!0})],f.prototype,"analysis",void 0),o([r()],f.prototype,"tool",void 0),o([r({readOnly:!0})],f.prototype,"results",null),o([r()],f.prototype,"priority",null),o([r()],f.prototype,"computations",void 0),o([r()],f.prototype,"elevationAlignedObserver",void 0),o([r()],f.prototype,"observerEngineLocation",void 0),o([r()],f.prototype,"cursorTarget",void 0),o([r()],f.prototype,"updating",null),o([r()],f.prototype,"editable",void 0),o([r()],f.prototype,"_analysisController",void 0),o([r()],f.prototype,"_analysisVisualization",void 0),f=o([D("esri.views.3d.analysis.LineOfSightAnalysisView3D")],f);const mi=f;export{mi as default};