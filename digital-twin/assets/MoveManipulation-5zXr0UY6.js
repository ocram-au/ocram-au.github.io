import{kq as X,ci as W,u as J,Z as j,ie as L,r6 as na,r7 as ra,bI as q,aE as b,bC as $,p8 as w,r8 as d,r9 as oa,d5 as I,p7 as la,bc as f,p9 as R,bG as K,jM as Q,bd as D,f as z,P as aa,F as Y,bM as U,aU as ua,ra as ca,ax as ha,nO as pa,rb as da,rc as _a,rd as Ma,re as fa,aZ as ma,aL as G,aJ as ga,aM as k,aG as va,rf as wa,as as F,bx as xa,dv as ya,dx as Ta}from"./index-uWjCvim1.js";import{e as P,a as _,f as S}from"./ShadedColorMaterial.glsl-Bof8Rnv1.js";import{D as ta,G as Ea}from"./dragEventPipeline3D-BrSJ2cUJ.js";import{f as Aa,g as Sa,p as C,M as ea,m as ba,j as N,w as $a}from"./InteractiveToolBase-HIhqS879.js";import{j as Da}from"./settings-B8WaBv8K.js";var M;(function(l){l[l.TRANSLATE_Z=0]="TRANSLATE_Z",l[l.TRANSLATE_XY=1]="TRANSLATE_XY",l[l.SCALE=2]="SCALE",l[l.ROTATE=3]="ROTATE",l[l.SCALE_ROTATE=4]="SCALE_ROTATE"})(M||(M={}));let O=class{constructor(){this._available=!0}set location(a){this._forEachManipulator3D(t=>t.location=a)}set elevationAlignedLocation(a){this._forEachManipulator3D(t=>t.elevationAlignedLocation=a)}set elevationInfo(a){this._forEachManipulator3D(t=>t.elevationInfo=a)}get renderLocation(){let a;return this._forEachManipulator3D(t=>{a||(a=t.renderLocation)}),a}get available(){return this._available}set available(a){this._available=a,this._forEachManipulator3D(t=>t.available=a)}get hovering(){return this.someManipulator(a=>a.hovering)}get grabbing(){return this.someManipulator(a=>a.grabbing)}get dragging(){return this.someManipulator(a=>a.dragging)}get selected(){return this.someManipulator(a=>a.selected)}hasManipulator(a){return this.someManipulator(t=>t===a)}someManipulator(a){let t=!1;return this.forEachManipulator(e=>{!t&&a(e)&&(t=!0)}),t}_forEachManipulator3D(a){this.forEachManipulator((t,e)=>{t instanceof P&&a(t,e)})}};const Pa=128,m=70,Oa=80,ia=.02,Ia=54,La=100,Ra=Math.ceil(m/3*2),sa=160,ka=.5,Ba=24,Va=9,Wa=sa+30,Ja=sa+53,Ka=60,Qa=23,at=5*Math.PI/12,tt=1*Math.PI/3,et=10,it=.2,st=30,nt=53,rt=.2,ot=.3,lt=200,ut=3,ct=1e6;function Z(l,a,t){const e=(i,s)=>{a({action:i,object:l,dxScreen:s.screenDeltaX,dyScreen:s.screenDeltaY})};return t((i,s,r)=>(s.next(n=>(n.action==="start"&&e("start",n),n)).next(Aa(l)).next(n=>{switch(n.action){case"start":case"update":(n.translationX||n.translationY||n.translationZ)&&e("update",n);break;case"end":e("end",n)}return n}),{steps:s,cancel:r=r.next(Sa(l)).next(n=>(e("end",{screenDeltaX:0,screenDeltaY:0}),n))}))}function ht(l){if((l==null?void 0:l.axis)==null)return 1;const{mapStart:a,mapEnd:t,axis:e}=l,i=[t.x-a.x,t.y-a.y];return i[0]*e[0]+i[1]*e[1]>0?1:-1}let Xa=class extends O{constructor(a){super(),this._handles=new X,this._arrowManipulatorInfos=new Array,this._angle=0,this._scale=1,this._radius=m,this._updateAfterDrag=!1,this.events=new W,this._tool=a.tool,this._view=a.view,this._opaqueMaterial=this._createMaterial(),this._transparentMaterial=this._createMaterial(.5),a.radius!=null&&(this._radius=a.radius),this._createManipulators(),this.forEachManipulator(t=>this._tool.manipulators.add(t))}set orthogonalAvailable(a){this._arrowManipulatorInfos.length>=3&&(this._arrowManipulatorInfos[1].manipulator.available=a,this._arrowManipulatorInfos[3].manipulator.available=a)}destroy(){this._handles=J(this._handles),this.forEachManipulator(a=>{this._tool.manipulators.remove(a),a.destroy()}),this._tool=null,this._view=null,this._arrowManipulatorInfos.length=0}forEachManipulator(a){for(const{manipulator:t}of this._arrowManipulatorInfos)a(t,M.TRANSLATE_XY)}createManipulatedObjectDragPipeline(a,t,e){if(!t.operations)return j();const i=t.operations.data.spatialReference,s=t.graphic;return Z(t,e,r=>this.createDragPipeline((n,o,u,c,h)=>({steps:o,cancel:u}=a(n,o,u,c,h),r(n,o,u)),t.elevationInfo,i,s))}createDragPipeline(a,t,e,i){return L(this._arrowManipulatorInfos.map(({manipulator:s},r)=>C(s,(n,o,u,c,h)=>{const p=o.next(g=>({...g,manipulatorType:M.TRANSLATE_XY})).next(ea(this._view,n.elevationAlignedLocation)).next(ta(this._view,n.elevationAlignedLocation,t,e,i)).next(ba(n.location,this.angle+(r+1)*Math.PI*.5)).next(N());a(n,p,u,c,h)})))}get angle(){return this._angle}set angle(a){this._angle=a,this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}get displayScale(){return this._scale}set displayScale(a){this._scale=a,this._updateManipulatorTransform()}get radius(){return this._radius}set radius(a){this._radius!==a&&(this._radius=a,this._updateManipulators())}_updateManipulators(){for(let a=0;a<this._arrowManipulatorInfos.length;a++)this._updateArrowManipulator(this._arrowManipulatorInfos[a],a);this._updateManipulatorTransform()}_updateArrowManipulator({manipulator:a,transform:t},e){const i=this._radius/m,s=Ia*i,r=s*Math.sqrt(3)/2,n=na(this._opaqueMaterial,r,s/2,s/2,ia);ra(n,q(w.get(),b($.get(),0,-r/3,0))),a.renderObjects=[new _(n,d.Focused),new _(n.instantiate({material:this._transparentMaterial}),d.Unfocused)],a.radius=r/3*2*1.2;const o=oa(w.get(),e*Math.PI/2),u=q(w.get(),b($.get(),0,La*i,0));I(t,o,u)}_createManipulators(){for(let a=0;a<4;a++){const t=this._createArrowManipulator(a);this._arrowManipulatorInfos.push(t)}this._updateManipulatorTransform()}_updateManipulatorTransform(){const a=this.angle,t=la(w.get(),a,f(0,0,1));if(t==null)return;const e=R(w.get(),b($.get(),this.displayScale,this.displayScale,this.displayScale)),i=I(w.get(),e,t);for(const s of this._arrowManipulatorInfos){const r=I(w.get(),i,s.transform);s.manipulator.modelTransform=r}}_createArrowManipulator(a){const t=new P({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:f(0,0,1)}}),e={manipulator:t,transform:U()};return this._updateArrowManipulator(e,a),this._handles.add(t.events.on("drag",i=>{this._updateAfterDrag&&i.action==="end"&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)})),e}_createMaterial(a=1){const t=new K({cullFace:Q.Back,renderOccluded:D.Transparent,isDecoration:!0});return this._handles.add(z(()=>Y.toUnitRGBA(this._view.effectiveTheme.accentColor),e=>{e[3]*=a,t.setParameters({color:e})},aa)),t}get test(){}};class ja{constructor(){this._view=null,this._elevationInfo=null,this._lastDragEvent=null,this._next=null,this._enabled=!1}get enabled(){return this._enabled}set enabled(a){if(this._enabled!==a&&this._lastDragEvent!=null&&this._next!=null){const t=this._lastDragEvent.mapEnd,e=this._snap(this._lastDragEvent.screenEnd);if(e!=null){const i={action:"update",mapStart:this._lastDragEvent.mapStart,mapEnd:a===!0?e:t,screenStart:this._lastDragEvent.screenEnd,screenEnd:this._lastDragEvent.screenEnd};this._next.execute(i)}}this._enabled=a}_snap(a){const t=this._view!=null?this._view.toMap(a,{exclude:[]}):null;return t!=null&&this._view!=null&&(t.z=ua(t,this._view,this._elevationInfo)),t}createDragEventPipelineStep(a,t){this._view=a,this._elevationInfo=t,this._lastDragEvent=null;const e=new $a;return this._next=e,[i=>{if(this._lastDragEvent=i.action!=="end"?{...i}:null,this._enabled){const s=this._snap(i.screenEnd);return s!=null?{action:i.action,mapStart:i.mapStart,mapEnd:s,screenStart:i.screenStart,screenEnd:i.screenEnd}:null}return{action:i.action,mapStart:i.mapStart,mapEnd:i.mapEnd,screenStart:i.screenStart,screenEnd:i.screenEnd}},e]}}class za extends O{constructor(a){super(),this._handles=new X,this._snapToScene=new ja,this._scale=1,this._radius=m,this._view=a.view,this._tool=a.tool,this._discMaterial=this._createMaterial(),this._discMaterialTransparent=this._createMaterial(.5),a.snapToScene!=null&&(this.snapToScene=a.snapToScene),a.radius!=null&&(this._radius=a.radius),this._createManipulator(),this.forEachManipulator(t=>this._tool.manipulators.add(t))}destroy(){this._handles=J(this._handles),this.forEachManipulator(a=>{this._tool.manipulators.remove(a),a.destroy()}),this._tool=null,this._view=null,this._manipulator=null}forEachManipulator(a){a(this._manipulator,M.TRANSLATE_XY)}get displayScale(){return this._scale}set displayScale(a){this._scale=a,this._updateManipulatorTransform()}get snapToScene(){return this._snapToScene.enabled}set snapToScene(a){this._snapToScene.enabled=a}get radius(){return this._radius}set radius(a){a!==this._radius&&(this._radius=a,this._updateManipulator())}get discManipulator(){return this._manipulator}createManipulatedObjectDragPipeline(a,t,e){if(!t.operations)return j();const i=t.graphic,s=t.elevationInfo,r=t.operations.data.spatialReference;return Z(t,e,n=>this.createDragPipeline((o,u,c,h,p)=>({steps:u,cancel:c}=a(o,u,c,h,p),n(o,u,c)),s,r,i))}createDragPipeline(a,t,e,i){const s=this._view;return C(this._manipulator,(r,n,o,u,c)=>{const h=n.next(ea(s,r.elevationAlignedLocation)).next(ta(s,r.elevationAlignedLocation,t,e,i)).next(...this._snapToScene.createDragEventPipelineStep(s,t)).next(p=>({...p,manipulatorType:M.TRANSLATE_XY})).next(N());a(r,h,o,u,c)})}_updateManipulatorTransform(){const a=R(w.get(),b($.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=a}_createManipulator(){const a=this._view;this._manipulator=new P({view:a,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:f(0,0,1)},worldOriented:!0}),this._updateManipulator()}_updateManipulator(){const a=ca(this._discMaterial,ia,1,Pa,f(0,0,1),f(0,0,0));a.transformation=R(U(),f(this._radius,this._radius,this._radius)),this._manipulator.renderObjects=[new _(a,d.Focused),new _(a.instantiate({material:this._discMaterialTransparent}),d.Unfocused)],this._manipulator.radius=Oa*(this._radius/m)}_createMaterial(a=1){const t=new K({cullFace:Q.Back,renderOccluded:D.Transparent,isDecoration:!0});return this._handles.add(z(()=>Y.toUnitRGBA(this._view.effectiveTheme.accentColor),e=>{e[3]*=a,t.setParameters({color:e})},aa)),t}get test(){}}class Ya extends O{constructor(a){super(),this._radius=m,this.events=new W,this._tool=a.tool,this._view=a.view;const t=new Da({getTheme:()=>this._view.effectiveTheme});this._settings=t,a.radius!=null&&(this._radius=a.radius);const e=this._view.effectiveTheme.accentColor;this._materials={materialUnfocused:S(v(e,1,.25),D.Occlude),materialFocused:S(v(e,1,0),D.Occlude),materialOccludedUnfocused:S(v(e,.7,0),t.zManipulator.renderOccluded),materialOccludedFocused:S(v(e,.85,0),t.zManipulator.renderOccluded)},this._themeHandle=z(()=>this._view.effectiveTheme.accentColor,i=>{const s=v(i,1,.25),r=v(i,1,0),n=v(i,.7,0),o=v(i,.85,0),{materialUnfocused:u,materialFocused:c,materialOccludedUnfocused:h,materialOccludedFocused:p}=this._materials;u.setParameters({color:s}),c.setParameters({color:r}),h.setParameters({color:n}),p.setParameters({color:o})}),this._createManipulator(),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._themeHandle=ha(this._themeHandle),this._manipulator.applyObjectTransform=Fa,this.forEachManipulator(a=>{this._tool.manipulators.remove(a),a.destroy()})}forEachManipulator(a){a(this._manipulator,M.TRANSLATE_Z)}createManipulatedObjectDragPipeline(a,t,e){if(!t.operations)return j();const i=t.operations.data.spatialReference;return Z(t,e,s=>this.createDragPipeline((r,n,o,u,c)=>({steps:n,cancel:o}=a(r,n,o,u,c),s(r,n,o)),i))}createDragPipeline(a,t){const e=this._view;return C(this._manipulator,(i,s,r,n,o)=>{const u=s.next(c=>({...c,manipulatorType:M.TRANSLATE_Z})).next(Ea(e,i.renderLocation,t)).next(N());a(i,u,r,n,o)})}get radius(){return this._radius}set radius(a){a!==this._radius&&(this._radius=a,this._updateManipulator())}_updateManipulator(){const a=this._settings,t=this._radius/m,e=a.zManipulator.height*t,i=a.zManipulator.coneHeight*t,s=a.zManipulator.coneWidth*t,r=a.zManipulator.width*t,n=[f(0,0,0),f(0,0,e)],o=[f(0,0,0),f(0,0,e+i)],u=(H=>{const T=U();return pa(T,T,[0,0,e]),da(T,T,Math.PI/2),T})(),{materialUnfocused:c,materialFocused:h,materialOccludedUnfocused:p,materialOccludedFocused:g}=this._materials,E=_a(c,n,r/2,16,!1),y=Ma(c,i,s/2,16,!1);y.transformation=u,this._manipulator.renderObjects=[new _(y,d.Unfocused),new _(E,d.Unfocused),new _(y.instantiate({material:h}),d.Focused),new _(E.instantiate({material:h}),d.Focused),new _(y.instantiate({material:p}),d.Unfocused),new _(E.instantiate({material:p}),d.Unfocused),new _(y.instantiate({material:g}),d.Focused),new _(E.instantiate({material:g}),d.Focused)],this._manipulator.radius=r/2+2,this._manipulator.collisionType={type:"line",paths:[o]}}_createManipulator(){const a=this._view,t=new P({view:a,autoScaleRenderObjects:!1,worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});t.applyObjectTransform=e=>{const i=a.state.camera,s=B;a.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,s);const r=fa(i.eye,s),n=i.computeRenderPixelSizeAtDist(r),o=ma(A,s,i.eye);G(o,o);const u=Ua;a.renderCoordsHelper.worldUpAtPosition(B,u);const c=Math.abs(ga(o,u)),h=k(A,o,u),p=k(A,h,u),g=xa(c,.01,1),E=1-Math.sqrt(1-g*g)/g/i.fullWidth,y=this._settings,H=this._radius/m,T=y.zManipulator.width*H;va(p,G(p,p),(1/E-1)*r+n*T),e[12]-=A[0],e[13]-=A[1],e[14]-=A[2]},this._manipulator=t,this._updateManipulator()}get test(){}}function v(l,a,t){const e=wa(l,t);return e.a*=a,Y.toUnitRGBA(e)}const B=F(),A=F(),Ua=F(),Fa=()=>{};class dt extends O{constructor(a){super(),this._handles=new X,this._interactive=!0;const{tool:t,view:e,snapToScene:i,radius:s}=a;this._view=e,this.xyManipulation=new za({tool:t,view:e,snapToScene:i,radius:s}),this.xyAxisManipulation=new Xa({tool:t,view:e,radius:s}),this.zManipulation=new Ya({tool:t,view:e,radius:s}),this.xyManipulation.available=a.xyAvailable,this.xyAxisManipulation.available=a.xyAxisAvailable,this.zManipulation.available=a.zAvailable,this._autoHideXYAxis(),this.forEachManipulator(r=>this._handles.add(r.events.on("grab-changed",()=>this._updateManipulatorInteractivity())))}destroy(){this._handles.destroy(),this.xyManipulation.destroy(),this.xyAxisManipulation.destroy(),this.zManipulation.destroy()}createManipulatedObjectDragPipeline(a,t,e){return L([this.xyManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>a(x.XY,i,s,r,n,o),t,e),this.xyAxisManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>a(x.XY_AXIS,i,s,r,n,o),t,e),this.zManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>a(x.Z,i,s,r,n,o),t,e)])}createDragPipeline(a,t,e,i){return L([this.xyManipulation.createDragPipeline((s,r,n,o,u)=>a(x.XY,s,r,n,o,u),t,e,i),this.xyAxisManipulation.createDragPipeline((s,r,n,o,u)=>a(x.XY_AXIS,s,r,n,o,u),t,e,i),this.zManipulation.createDragPipeline((s,r,n,o,u)=>a(x.Z,s,r,n,o,u),e)])}set snapToScene(a){this.xyManipulation.snapToScene=a}set angle(a){this.xyAxisManipulation.angle=a}set interactive(a){this._interactive!==a&&(this._interactive=a,this._updateManipulatorInteractivity())}set radius(a){this.xyAxisManipulation.radius=a,this.xyManipulation.radius=a,this.zManipulation.radius=a}set displayScale(a){this.xyManipulation.displayScale=a,this.xyAxisManipulation.displayScale=a}forEachManipulator(a){this.xyManipulation.forEachManipulator(t=>a(t,M.TRANSLATE_XY)),this.xyAxisManipulation.forEachManipulator(t=>a(t,M.TRANSLATE_XY)),this.zManipulation.forEachManipulator(t=>a(t,M.TRANSLATE_Z))}get _xyAxisVisible(){const a=this.xyManipulation.someManipulator(t=>t.focused)||this.xyAxisManipulation.someManipulator(t=>t.focused);return this._view.inputManager&&this._view.inputManager.latestPointerType==="touch"||a}_autoHideXYAxis(){const a=this.xyAxisManipulation,t=this.xyManipulation;if(ya("esri-mobile"))return;const e=[];t.forEachManipulator(s=>e.push(s)),a.forEachManipulator(s=>e.push(s));const i=()=>{const s=[];this._xyAxisVisible||a.forEachManipulator(r=>s.push(r.disableDisplay())),this._handles.remove(V),this._handles.add(s,V)};for(const s of e)this._handles.add(s.events.on("focus-changed",i));this._view.inputManager&&this._handles.add(Ta(()=>{var s;return(s=this._view.inputManager)==null?void 0:s.latestPointerType},i)),i()}_updateManipulatorInteractivity(){const a=this.grabbing;this.forEachManipulator(t=>{t.interactive=!a&&this._interactive||t.grabbing})}static radiusForSymbol(a){const t=a!=null&&a.type==="point-3d"&&a.symbolLayers;return t&&t.some(e=>e.type==="icon")?Ra:m}}const V="disable-xy-axis-display";var x;(function(l){l[l.XY=0]="XY",l[l.XY_AXIS=1]="XY_AXIS",l[l.Z=2]="Z"})(x||(x={}));export{M as A,sa as I,ka as P,m as a,ht as b,x as c,Wa as d,et as e,it as f,st as g,Pa as h,Ba as i,nt as j,rt as k,Va as l,ot as m,Z as n,Ra as o,Ja as p,lt as q,Ka as r,Qa as s,O as t,dt as u,ut as v,tt as w,at as x,ct as y};