const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ManipulatedObject3DMediaElement-1isMGiIB.js","assets/index-CnMvbdm6.js","assets/index-CeVDQqKG.css","assets/EditGeometryOperations-DpnESYwe.js","assets/VideoElement-BPZcJ-K3.js","assets/MediaElementView-5m4tpjKv.js","assets/normalizeUtilsSync-jLHKY0Te.js","assets/editingTools-B-ZYdeQx.js","assets/quantityFormatUtils-DQYE663i.js","assets/TextOverlayItem-CVJ-yuWO.js","assets/automaticLengthMeasurementUtils-toXf84F7.js","assets/SnappingVisualizer3D-C7YGIPwe.js","assets/ExtendedLineVisualElement-CAipz35u.js","assets/vec4f32-CjrfB-0a.js","assets/EngineVisualElement-xfPquzak.js","assets/VisualElement-Bqidtlk9.js","assets/Laserlines.glsl-D-7bsT9X.js","assets/PointVisualElement-D0qGG0xr.js","assets/Object3DVisualElement-YfRiuih3.js","assets/RightAngleQuadVisualElement-DooBkXzq.js","assets/SnappingContext-CHV65FEb.js","assets/PointSnappingHint-BbX2_9xW.js","assets/settings-Ce7pCOsg.js","assets/GraphicState-CCUiEW6B.js","assets/VerticesVisualElement-CWbBjnNW.js","assets/ShadedColorMaterial.glsl-BsPDRek5.js","assets/editPlaneUtils-BVxqKbP6.js","assets/Tooltip-DBY2YFpB.js","assets/dehydratedFeatureComparison-cCWB-Bs1.js","assets/surfaceCoordinateSystems-Dch9uGAt.js","assets/InteractiveToolBase-DRcSn_5o.js","assets/SnappingDragPipelineStep-DY8sr0Fx.js","assets/SnappingOperation-d9cbzsM8.js","assets/mat2df64-C5HCLMgl.js","assets/automaticAreaMeasurementUtils-6sKS5ij2.js","assets/MeshTransform-DYXn8ECv.js","assets/euclideanAreaMeasurementUtils-yJ-rhlx-.js","assets/geodesicAreaMeasurementUtils-BRc0zOz4.js","assets/manipulatorUtils-Co8lwBfQ.js","assets/MoveManipulation-Bt4JndPG.js","assets/dragEventPipeline3D-BhMs0_4r.js","assets/SelectedVertexTooltipInfo-C3MmA6Cb.js","assets/TranslateTooltipInfo-DIX-0mDa.js","assets/SlicePlaneMaterial.glsl-VB-r2cTE.js","assets/sliceToolConfig-CxZRlRTI.js","assets/ImageMaterial.glsl-DPWG4Ito.js","assets/projectionUtils-Cj4ZNuhF.js","assets/LineVisualElement-DpdNK1XP.js","assets/Factory-H-71M75S.js","assets/ExtentScaleTooltipInfo-ByMS2tAV.js","assets/GraphicManipulator-3LMi3ZVt.js","assets/drapedUtils-D5yMrxDq.js"])))=>i.map(i=>d[i]);
import{e as a,y as o,a as f,S as j,h as k,az as C,Z as g,ar as U,g as R,iG as L,P as A,o7 as d,mM as T,u as W,bY as M,e1 as O,o8 as N,eL as K,iE as Y,o9 as Z,oa as q,dB as B,O as F,Q,f as J,A as X,cj as I,eR as ee,ie as te,i0 as ie,bK as ne,bq as u,bL as b,bi as se,iZ as P,ob as re,br as v,t as ae,i_ as oe,i$ as H,dj as le}from"./index-CnMvbdm6.js";import{m as de,j as ce}from"./MediaElementView-5m4tpjKv.js";import{l as he}from"./LayerView3D-Bw9GC62b.js";import{e as pe}from"./mat2df64-C5HCLMgl.js";import{a as me}from"./SnappingManagerPool-9A-kmYkC.js";import{g as _e}from"./ImageMaterial.glsl-DPWG4Ito.js";import{y as ue}from"./LayerView-CrGTOnVo.js";import"./normalizeUtilsSync-jLHKY0Te.js";const S=Symbol(),x=Symbol(),$=1,ye=10;let c=class extends j{get updating(){return this._updatingHandles.updating}get _preferredInteractionTool(){var e;return((e=this.options)==null?void 0:e.tool)??"transform"}get _toolType(){switch(this._preferredInteractionTool){case"transform":return"transform-3d";case"reshape":return"reshape-3d"}}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}constructor(e){super(e),this.enabled=!1,this._updatingHandles=new k,this._isOpacityToggled=!1,this._factor=$,this._tool=null,this._object=null,this._createToolAbortController=null,this._onPointerMove=C(async t=>{const i=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(t));this.destroyed||(this.removeHandles(x),i&&i!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(g(()=>this.view.cursor=null),x)))}),this._tmpMat2=pe(),this._tmpVec2=U()}destroy(){this._createToolAbortController=R(this._createToolAbortController)}initialize(){this.addHandles([L(this._updatingHandles),this._updatingHandles.add(()=>this.enabled,e=>this._enableDisable(e),A),this._updatingHandles.add(()=>this._preferredInteractionTool,e=>this._preferredInteractionToolChanged(e))])}_enableDisable(e){if(!e)return void this.removeHandles(S);this._dynamicImports();const{view:t}=this,i=new q;i.add(d.undo,()=>{var n,s,r;(s=(n=this._object)==null?void 0:n.operations)==null||s.undo(),(r=this._object)==null||r.emit("modified-externally")}),i.add(d.redo,()=>{var n,s,r;(s=(n=this._object)==null?void 0:n.operations)==null||s.redo(),(r=this._object)==null||r.emit("modified-externally")}),i.addToggle(d.preserveAspectRatio,n=>{var s;((s=this._tool)==null?void 0:s.type)==="transform-3d"&&(this._tool.preserveAspectRatio=n.type==="key-down")}),i.addToggle(d.rotateIncrements,n=>{var s;((s=this._tool)==null?void 0:s.type)==="transform-3d"&&(this._tool.snapRotation=n.type==="key-down")}),i.add(d.toggleOpacity,()=>{var s;const n=(s=this._object)==null?void 0:s.element;n&&(n.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled)}),i.add(d.moveUp,()=>this._move(0,this._factor)),i.add(d.moveDown,()=>this._move(0,-this._factor)),i.add(d.moveRight,()=>this._move(this._factor,0)),i.add(d.moveLeft,()=>this._move(-this._factor,0)),i.addToggle(d.factorModifier,n=>this._factor=n.type==="key-down"?ye:$),this._isOpacityToggled=!1,this.addHandles([i.register(t,T.TOOL),g(()=>{this._isOpacityToggled&&this.selectedElement&&(this.selectedElement.opacity*=2,this._isOpacityToggled=!1)}),t.on("immediate-click",n=>this._onClick(n),T.TOOL),t.on("pointer-move",n=>this._onPointerMove(n).catch(()=>{}),T.TOOL),this._updatingHandles.add(()=>this._validatedSelectedElement,(n,s)=>{s&&n!==s&&this._isOpacityToggled&&(s.opacity*=2,this._isOpacityToggled=!1),this._selectedElementChanged(n)},A),g(()=>{t.cursor=null,this._removeTool()})],S)}async _onClick(e){await this._updatingHandles.addPromise(e.async(async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))}))}async _selectedElementChanged(e){var t;e!=null&&e.georeference?((t=this._object)==null?void 0:t.element)!==e&&await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}async _recreateTool(){this._createToolAbortController=R(this._createToolAbortController),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this._createToolAbortController=t;const{ManipulatedObject3DMediaElement:i,ExtentTransformTool:n,ReshapeTool3D:s}=await this._dynamicImports();if(t.signal.aborted)return;const{view:r,layer:l,_toolType:_}=this;switch(this._object=new i({view:r,layer:l,element:e,tool:this._preferredInteractionTool}),_){case"transform-3d":{this._tool=new n({view:r,object:this._object});const h=r.inputManager;h.isModifierKeyDown(d.rotateIncrements.key)&&(this._tool.snapRotation=!0),h.isModifierKeyDown(d.preserveAspectRatio.key)&&(this._tool.preserveAspectRatio=!0)}break;case"reshape-3d":{const h=me(r);this.addHandles(h,this._tool);const{snappingManager:p}=h;this._tool=new s({view:r,object:this._object,enableMidpoints:!1,enableZShape:!1,snappingManager:p,enableMoveObject:!1,autoHideManipulators:!0,enableDeleteVertices:!1})}}this.addHandles([g(()=>{this._object=W(this._object),this._tool&&(r.tools.remove(this._tool),this._tool=null)})],this._tool),r.addAndActivateTool(this._tool)}_preferredInteractionToolChanged(e){const{_tool:t}=this;if(!t)return;if(this._toolType!==t.type)return void this._updatingHandles.addPromise(this._recreateTool());const{_object:i}=this;i&&(i.tool=e)}async _dynamicImports(){const[{ManipulatedObject3DMediaElement:e},{ExtentTransformTool:t,ReshapeTool3D:i}]=await Promise.all([M(()=>import("./ManipulatedObject3DMediaElement-1isMGiIB.js"),__vite__mapDeps([0,1,2,3,4,5,6])),M(()=>import("./editingTools-B-ZYdeQx.js"),__vite__mapDeps([7,1,2,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,3,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]))]);return{ManipulatedObject3DMediaElement:e,ExtentTransformTool:t,ReshapeTool3D:i}}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return(t==null?void 0:t.type)==="media"?t.element:null}_removeTool(){this._tool&&this.removeHandles(this._tool)}_move(e,t){const{view:i,_object:n}=this,s=n==null?void 0:n.operations;if(!s)return;const r=i.overlayPixelSizeInMapUnits(i.pointsOfInterest.focus.location)*O(i.spatialReference)/O(s.data.spatialReference),{_tmpMat2:l,_tmpVec2:_}=this,h=N(l,K(360-this.view.camera.heading)),p=Y(_,r*e,r*t);Z(p,p,h),s.move(p[0],p[1],0),n.emit("modified-externally")}};a([o({constructOnly:!0})],c.prototype,"view",void 0),a([o({constructOnly:!0})],c.prototype,"layer",void 0),a([o()],c.prototype,"selectedElement",void 0),a([o()],c.prototype,"enabled",void 0),a([o()],c.prototype,"options",void 0),a([o()],c.prototype,"updating",null),a([o()],c.prototype,"_preferredInteractionTool",null),a([o()],c.prototype,"_validatedSelectedElement",null),c=a([f("esri.views.3d.layers.support.MediaLayerInteraction")],c);let E=class extends j{constructor(){super(...arguments),this.tool="transform"}};a([o()],E.prototype,"tool",void 0),E=a([f("esri.views.3d.layers.support.MediaLayerInteractionOptions")],E);const ge=e=>{let t=class extends e{constructor(...i){super(...i),this.layer=null,this.interactive=!1,this.interactionOptions=new E,this.selectedElement=null}};return a([o()],t.prototype,"layer",void 0),a([o()],t.prototype,"interactive",void 0),a([o()],t.prototype,"interactionOptions",void 0),a([o()],t.prototype,"selectedElement",void 0),t=a([f("esri.views.layers.MediaLayerView")],t),t};let m=class extends he(ge(ue)){get interactive(){return this._interaction.enabled}set interactive(e){this._interaction&&(this._interaction.enabled=e)}get selectedElement(){return this._interaction.selectedElement}set selectedElement(e){this._interaction&&(this._interaction.selectedElement=e)}get visibleAtCurrentScale(){return B(this.layer.effectiveScaleRange,this.view.terrainScale)}constructor(e){super(e),this.type="media-3d",this.drapeSourceType=F.RasterImage,this.updatePolicy=Q.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=C(async(n,s,r)=>{const l=await this._collectMediaElements(n,s,r);this._synchronizeRenderElements(l)},0);const{view:t,layer:i}=e;this._interaction=new c({view:t,layer:i}),this.addHandles(J(()=>this.interactionOptions,n=>this._interaction.options=n,X))}initialize(){const{view:e,layer:t}=this;this._renderer=e.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const i=()=>this._updateWithLastDrapingExtent();this.addHandles([g(()=>e.basemapTerrain.overlayManager.unregisterDrapeSource(this)),I(()=>t.effectiveSource,"change",i),I(()=>t.effectiveSource,"refresh",i)]),this._updatingHandles.add(()=>this.suspended,i)}setDrapingExtent(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}getHit(e){const t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}isUpdating(){return super.isUpdating()||this._interaction.updating}_updateWithLastDrapingExtent(){if(this._lastDrapingExtent==null||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:e,spatialReference:t}=this._lastDrapingExtent;this._updatingHandles.addPromise(this._update(e,t).catch(()=>{}))}async _collectMediaElements(e,t,i){const n=this.layer.effectiveSource;return n==null?new Set:new Set((await Promise.all(e.map(s=>n.queryElements(ee(s.extent,t),{signal:i})))).flat())}_synchronizeRenderElements(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}_synchronizeRenderElementsRemove(e){const t=[];this._renderedElements.forEach((i,n)=>{e.has(n)||(i.renderData!=null&&t.push(i.renderData.renderGeometry),this._removeElement(n,i),this.emit("element-render-changed",{element:n}))})}_synchronizeRenderElementsAdd(e){for(const t of e)this._renderedElements.has(t)||this._createRenderElement(t)}_removeElement(e,{renderData:t,handle:i}){this._destroyRenderData(e,t),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),i.remove()}async _createRenderElement(e){const t=new de({spatialReference:this.view.spatialReference,element:e}),i={renderData:null,handle:te([this._updatingHandles.add(()=>e.opacity,n=>{i.renderData!=null&&i.renderData.material.setParameters({opacity:n})}),this._updatingHandles.add(()=>t.coords,()=>{i.renderData!=null?this._updateGeometry(t,i,i.renderData):this._initializeRenderData(t,i)}),this._updatingHandles.add(()=>e.content,()=>this._initializeRenderData(t,i)),L(t)])};this._renderedElements.set(e,i),this._uidToElement.set(e.uid,e),this._updatingHandles.addPromise(e.load().catch(()=>{})),this._initializeRenderData(t,i)}_initializeRenderData(e,t){const{coords:i,element:n}=e,{contentWidth:s,contentHeight:r}=n;if(i==null||n.content==null)return void(t.renderData=this._destroyRenderData(n,t.renderData));if(t.renderData!=null)return;const l=this._createTexture(n.content),_=l.load(this.view._stage.renderView.renderingContext);this.view._stage.add(l),ie(_)&&this._updatingHandles.addPromise(_);const h=new _e({initTextureTransparent:!0,textureId:l.id,opacity:n.opacity,transparent:!0,perspectiveInterpolation:!0}),p=this._getPositionAttributeArray(i),G=[0,0,1,0,1,1,0,1],z=this._getPerspectiveDivideAttributeArray(p,s,r),w=[0,1,2,0,2,3],V=new ne(h,[[u.POSITION,new b(p,w,3,!0)],[u.UV0,new b(G,w,2,!0)],[u.PERSPECTIVEDIVIDE,new b(z,w,1,!0)]]),D=new se(V,{layerUid:this.layer.uid,graphicUid:n.uid});this._renderer.addGeometries([D],P.ADD),t.renderData={renderGeometry:D,texture:l,material:h},this.emit("element-render-changed",{element:n})}_updateGeometry(e,t,i){const{coords:n,element:s}=e;if(n==null||s.content==null)return void(t.renderData=this._destroyRenderData(s,t.renderData));const r=this._getPositionAttributeArray(n);i.renderGeometry.geometry.setAttributeData(u.POSITION,r);const l=this._getPerspectiveDivideAttributeArray(r,s.contentWidth,s.contentHeight);i.renderGeometry.geometry.setAttributeData(u.PERSPECTIVEDIVIDE,l),i.renderGeometry.geometry.invalidateBoundingInfo(),this._renderer.modifyGeometries([i.renderGeometry],re.GEOMETRY),this.emit("element-render-changed",{element:s})}_getPositionAttributeArray(e){const[t,i,n,s]=e.rings[0];return[t[0],t[1],v,s[0],s[1],v,n[0],n[1],v,i[0],i[1],v]}_getPerspectiveDivideAttributeArray(e,t,i){ce(y,[0,0,t,0,t,i,0,i],[e[0],e[1],e[3],e[4],e[6],e[7],e[9],e[10]]);const n=y[6]/y[8]*t,s=y[7]/y[8]*i;return[1,1+n,1+n+s,1+s]}_destroyRenderData(e,t){if(t==null)return null;const i=t.texture;return i.unload(),this.view._stage.remove(i),this._renderer.removeGeometries([t.renderGeometry],P.REMOVE),this.emit("element-render-changed",{element:e}),null}_createTexture(e){const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,i=e instanceof HTMLImageElement?e.naturalHeight:e.height;if("getFrame"in e)throw new ae("media-layer-view-3d","animation is not supported");return new oe(e,{wrap:{s:H.CLAMP_TO_EDGE,t:H.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:t,height:i,mipmap:!0,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){}};a([o({readOnly:!0})],m.prototype,"type",void 0),a([o()],m.prototype,"layer",void 0),a([o()],m.prototype,"interactive",null),a([o()],m.prototype,"selectedElement",null),a([o({readOnly:!0})],m.prototype,"visibleAtCurrentScale",null),m=a([f("esri.views.3d.layers.MediaLayerView3D")],m);const y=le(),Ae=m;export{Ae as default};