import{c1 as q,hM as A,h as ie,lZ as R,l_ as re,e as b,P as K,l$ as ae,u as y,bN as D,dl as ne,as as O,R as L,Q as oe,eq as C,aF as le,a0 as ue,m0 as pe,ep as me,m1 as he,aE as T,at as H,m2 as f,dk as w,ar as z,j as ce,e4 as E,bm as I,hT as j,iC as P,m3 as de,m4 as ge,m5 as ve,m6 as ye,r,m as n,a as G,j2 as Q,A as _e,j4 as fe,m7 as S,w as we,dm as be,m8 as Me,is as Le,iu as V,aL as $e,m9 as W,ma as k}from"./index-BGUxYM9l.js";import{geodesicDensify as x,simplify as M,geodesicLength as Ae,geodesicArea as Oe,planarLength as Se,planarArea as ke}from"./geometryEngine-DEWZpdAD.js";import{d as xe}from"./SnappingVisualizer2D-BUiRLUg2.js";import{l as qe}from"./Draw-BOqLm49X.js";import{E as B,p as Ce,P as Ge}from"./EditGeometryOperations-ChD0Qg6_.js";import{n as Ue,p as Re,E as De,f as Te}from"./InteractiveToolBase-pyVEGVSl.js";import{S as He}from"./GraphicManipulator-DJ98v1SG.js";import{e as ze}from"./SnappingContext-CI0swYrf.js";import{f as Ee}from"./SnappingDragPipelineStep-BplOt8wY.js";import{p as Ie,u as je}from"./MeasurementWidgetContent-D7q_OkeN.js";import"./geometryEngineBase-B0ZyeKAX.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-Du69Np28.js";import"./SnappingOperation-BoxxIQA5.js";import"./surfaceCoordinateSystems-DNwxd-4U.js";import"./dehydratedFeatureComparison-CySjiUjT.js";import"./mat2df64-C5HCLMgl.js";import"./drapedUtils-jHbHt_op.js";import"./PointSnappingHint-Ctr5WxjY.js";const v=1e5;let d=class extends Ue{constructor(e){super(e),this._measurementLayer=new A({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new A({internal:!0,listMode:"hide",visible:!1}),this._snappingLayer=new A({internal:!0,listMode:"hide",visible:!1}),this._updatingHandles=new ie,this._vertices=[],this._drawActive=!1,this.measurement=null,this.measurementLabel=null}initialize(){R("esri/core/t9n/Units").then(t=>{this.messages=t});const e=this.view;this._draw=new qe({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),e.focus(),this.addHandles([re(async()=>{this.messages=await R("esri/core/t9n/Units")}),b(()=>[this.unit,this.messages],()=>{this._updateGraphics()},K),b(()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor],()=>{if(!this._vertices.length)return;const t=this._vertices.map(({coord:s})=>s);for(const{handle:s}of this._vertices)s.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(t)})]),ae(this)}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=y(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=y(this._measurementLayer),this._manipulatorLayer=y(this._manipulatorLayer),this._snappingLayer=y(this._snappingLayer),this._updatingHandles=y(this._updatingHandles),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}get snappingOptions(){return this.snappingManager.options}get updating(){return this._updatingHandles.updating||this.snappingManager.updating}onActivate(){this._drawActive||this._vertices.length!==0||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0,this._snappingLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1,this._snappingLayer.visible=!1}reset(){this.manipulators.removeAll(),this._resetVertices(),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1}_getSnappingContext(e){return new ze({elevationInfo:{mode:"on-the-ground",offset:0},pointer:e,editGeometryOperations:new B(new Ce("point",Ge(!1,!1,this.view.spatialReference)),D.Local),visualizer:new xe(this._snappingLayer)})}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const{snappingManager:e}=this,t=this._draw.create("polyline",{mode:"click",snappingManager:e});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],s=>this._updateSketch(s.vertices)),t.on("draw-complete",()=>this._stopSketch())}_stopSketch(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach(({manipulator:e})=>{e.interactive=!0}),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const t=this.view.spatialReference;if(t&&(!Z(t)||ne())){for(;this._vertices.length>e.length;){const{handle:s,manipulator:a}=this._vertices.pop();s.remove(),this.manipulators.remove(a)}for(let s=this._vertices.length;s<e.length;s++){const[a,l]=e[s],u=new O({x:a,y:l,spatialReference:t}),o=Pe(u,this.view,this._manipulatorLayer);this.manipulators.add(o);const i=B.fromGeometry(u,D.Local);i.on("vertex-update",m=>{const h=m.vertices.at(0);h&&(this._vertices[s].coord=[h.pos[0],h.pos[1]],this._updateGraphics())});const p=Re(o,(m,h,_,X)=>{const Y=this._getSnappingContext(X),{snappingManager:ee}=this,te=this._updatingHandles,{snappingStep:se}=Ee({snappingContext:Y,snappingManager:ee,updatingHandles:te});h.next(De(this.view)).next($=>{if($.action==="start"){const U=new O($.mapStart);m.graphic.geometry=U,i.trySetGeometry(U)}return $}).next(...se).next(Te({operations:i})).next(()=>{m.graphic.geometry=i.data.geometry})});this._vertices.push({manipulator:o,coord:[a,l],handle:p})}if(this._vertices.length){const s=this._vertices.length-1,a=this._vertices[s],[l,u]=e[s];a.coord[0]===l&&a.coord[1]===u||(a.coord=[l,u],a.manipulator.graphic.geometry=new O({x:l,y:u,spatialReference:t}));const o=this._drawActive?this._vertices[s].manipulator:null;this.manipulators.forEach(({manipulator:i})=>{i.interactive=o==null||i!==o})}this._updateGraphics()}}_updateGraphics(){if(this._vertices.length<2)return void this._measurementLayer.removeAll();const e=Ve(this._vertices.map(({coord:_})=>_),this.view.spatialReference);if(!e)return;const{measurement:t,fillGeometry:s,outlineGeometry:a}=e;this._set("measurement",t);const l=t?Be(this.messages,t,this.unit):null;if(this._set("measurementLabel",l),!s&&!a)return;let u,o,i;const{graphics:p}=this._measurementLayer,m=p.length===3,{effectiveTheme:h}=this.view;m?(u=p.at(0),o=p.at(1),i=p.at(2)):(u=new L({symbol:new oe({color:C(h.accentColor,.3),outline:null})}),o=new L({symbol:new le({color:h.accentColor,width:2})}),i=new L({symbol:new ue({color:h.textColor,font:new pe({size:14,family:"sans-serif"}),haloColor:C(me(h.textColor,he.Low),.5),haloSize:2})}),p.removeAll(),p.addMany([u,o,i])),u.geometry=s,o.geometry=a,i.geometry=s==null?void 0:s.centroid,i.symbol.text=(l==null?void 0:l.area)??""}};function Pe(e,t,s){const l={style:"circle",color:C(t.effectiveTheme.accentColor,.5),outline:{type:"simple-line",width:0}},u=new T({...l,size:8}),o=new T({...l,size:1.5*8}),i=new L({geometry:e,symbol:u});return new He({view:t,layer:s,graphic:i,focusedSymbol:o})}function Ve(e,t){if(e.length===2){const p=new H({paths:[e],spatialReference:t});let m;if(t.isGeographic)if(q(t))m=f(p,v);else{const h=w(p,z.WGS84),_=f(h,v);m=w(_,t)}else m=t.isWebMercator?x(p,v,"meters"):p;return{measurement:null,fillGeometry:null,outlineGeometry:m}}e.push(e[0]);const s=new H({paths:[e],spatialReference:t}),a=new ce({rings:[e],spatialReference:t});let l,u,o=null,i=null;if(t.isGeographic)if(q(t)){if(o=f(s,v),i=f(a,v),i=M(i),!i)return null;l=E([s],"meters")[0],u=I([i],"square-meters")[0]}else{const p=z.WGS84,m=w(s,p),h=w(a,p);if(o=f(m,v),i=f(h,v),i=M(i),!i)return null;l=E([m],"meters")[0],u=I([i],"square-meters")[0],o=w(o,t),i=w(i,t)}else if(t.isWebMercator){if(o=x(s,v,"meters"),i=x(a,v,"meters"),i=M(i),!i)return null;l=Ae(s,"meters"),u=Oe(i,"square-meters")}else{if(o=s,i=M(a),!i)return null;l=Se(s,"meters"),u=ke(i,"square-meters")}return{measurement:{geometry:i,area:u,perimeter:l},fillGeometry:i,outlineGeometry:o}}function We(e){return e!=null}function Z(e){if(!e)return!1;const{isGeographic:t,isWebMercator:s,isWGS84:a}=e;return t&&!a&&!q(e)||!t&&!s}function Be(e,t,s){if(!t||!e)return null;const a={area:null,perimeter:null},{area:l,perimeter:u}=t;switch(s){case"metric":a.area=ge(e,l,"square-meters");break;case"imperial":a.area=de(e,l,"square-meters");break;default:{const i=j(l,"square-meters",s);a.area=P(e,i,s);break}}const o=Ne(s);if(o)switch(o){case"metric":a.perimeter=ye(e,u,"meters");break;case"imperial":a.perimeter=ve(e,u,"meters");break;default:{const i=j(u,"meters",o);a.perimeter=P(e,i,o);break}}else a.perimeter="";return a}function Ne(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-nautical-miles":return"nautical-miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}r([n()],d.prototype,"_drawActive",void 0),r([n({readOnly:!0})],d.prototype,"cursor",null),r([n({value:!0})],d.prototype,"editable",null),r([n({readOnly:!0})],d.prototype,"measurement",void 0),r([n({readOnly:!0})],d.prototype,"measurementLabel",void 0),r([n()],d.prototype,"messages",void 0),r([n({constructOnly:!0})],d.prototype,"snappingManager",void 0),r([n()],d.prototype,"unit",void 0),r([n()],d.prototype,"updating",null),r([n({constructOnly:!0})],d.prototype,"view",void 0),d=r([G("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],d);let g=class extends Ie{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views.",this._snappingManager=null,this.snappingOptions=new Q}initialize(){this.addHandles([b(()=>{var e;return(e=this.view)==null?void 0:e.spatialReference},()=>this.clear()),b(()=>this.unit,e=>{this.tool!=null&&(this.tool.unit=e)},K),b(()=>this.view,e=>{this._snappingManager=y(this._snappingManager),e&&(this._snappingManager=new fe({view:e,options:this.snappingOptions}))},_e),b(()=>this.snappingOptions,e=>{this._snappingManager&&e&&(this._snappingManager.options=e)})])}destroy(){this._snappingManager=y(this._snappingManager)}get measurement(){var e;return((e=this.tool)==null?void 0:e.measurement)??null}get measurementLabel(){var e;return((e=this.tool)==null?void 0:e.measurementLabel)??null}get state(){var e;return this.disabled||this.view==null||!We(this.view.spatialReference)?"disabled":(e=this.tool)!=null&&e.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return S}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;e!=null&&(await we(()=>e.ready),Z(e.spatialReference)&&await be()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new d({snappingManager:this._snappingManager,unit:this.unit,view:this.view,visible:this.visible})}_validateUnit(e){const{unitOptions:t,defaultUnit:s}=this;return e!=null&&t.includes(e)?e:t.includes(s)?s:t.length>0?t[0]:s}_validateUnits(e){if(e==null)return[];const t=e.filter(s=>S.includes(s));return t.length===0?S.slice():t}};r([n()],g.prototype,"_snappingManager",void 0),r([n(Me)],g.prototype,"defaultUnit",void 0),r([n({readOnly:!0})],g.prototype,"measurement",null),r([n({readOnly:!0})],g.prototype,"measurementLabel",null),r([n({type:Q,nonNullable:!0})],g.prototype,"snappingOptions",void 0),r([n({readOnly:!0})],g.prototype,"state",null),r([n({type:String})],g.prototype,"unit",null),r([n({type:[String]})],g.prototype,"unitOptions",null),g=r([G("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],g);const J=g,N="esri-area-measurement-2d",F={base:N,newMeasurementButton:`${N}__clear-button`};let c=class extends Le{constructor(e,t){super(e,t),this.messages=null,this.messagesUnits=null,this.messagesCommon=null,this.viewModel=new J}get active(){return this.viewModel.active}get icon(){return"measure-area"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get snappingOptions(){return this.viewModel.snappingOptions}set snappingOptions(e){this.viewModel.snappingOptions=e}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){const{messages:e,messagesCommon:t,messagesUnits:s,unit:a,unitOptions:l,viewModel:u,visible:o}=this,{active:i,measurementLabel:p,state:m,supported:h}=u;return V("div",{"aria-label":e.widgetLabel,class:this.classes(F.base,W.widget,W.panel),key:this,role:"region"},o?V(je,{active:i,measurementItems:[{key:"area",title:s==null?void 0:s.measures.area,value:p==null?void 0:p.area},{key:"perimeter",title:e.perimeter,value:p==null?void 0:p.perimeter}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:F.newMeasurementButton,state:m,supported:h,unit:a,unitOptions:l,onNewMeasurementClick:()=>{$e(u.start())},onUnitChange:_=>{this.unit=_}}):null)}};r([n({readOnly:!0})],c.prototype,"active",null),r([n()],c.prototype,"icon",null),r([n()],c.prototype,"label",null),r([n(),k("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],c.prototype,"messages",void 0),r([n(),k("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0),r([n(),k("esri/t9n/common")],c.prototype,"messagesCommon",void 0),r([n()],c.prototype,"snappingOptions",null),r([n()],c.prototype,"uiStrings",void 0),r([n()],c.prototype,"unit",null),r([n()],c.prototype,"unitOptions",null),r([n()],c.prototype,"view",null),r([n({type:J})],c.prototype,"viewModel",void 0),r([n({type:Boolean})],c.prototype,"visible",null),c=r([G("esri.widgets.AreaMeasurement2D")],c);const ht=c;export{ht as default};
