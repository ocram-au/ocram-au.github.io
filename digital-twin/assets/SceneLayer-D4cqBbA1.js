const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingSupport-Cl4ctUf1.js","assets/index-ClOzeblJ.js","assets/index-DWEircEM.css","assets/infoFor3D-DsOdlPuA.js"])))=>i.map(i=>d[i]);
import{e as i,y as a,a as b,j$ as G,gF as V,oK as se,aU as U,jf as k,g3 as ie,V as q,j as P,J as ae,aR as Q,aW as oe,r as v,aN as ne,a2 as le,gB as de,U as Y,aX as pe,m as u,bc as ue,_ as ee,jN as ce,l as ye,f as he,g as fe,g7 as me,k as ge,gp as ve,gq as we,g4 as be,eA as Ie,jO as Le,je as K,d2 as z,C as m,n as Fe,fZ as Se,a8 as _e,cR as $e,K as je,hK as Te,gS as J,oL as Oe,ar as Ee,gn as M,aO as R,a0 as xe,aB as Ae,gw as W,oM as Pe,gy as Re,oN as De,oO as Ne,le as Ue,gz as qe,jg as Ce,jh as Ge,ji as H,ga as Ve,oP as ke,hL as Qe,hM as Ke,hN as ze,jl as Je,os as Me,hO as We,z as He}from"./index-ClOzeblJ.js";import{$ as Be}from"./Mesh-C0iIc8kY.js";import{i as Ze,m as Xe}from"./uploadAssetErrors-cVQ4Fru_.js";import{L as Ye,C as B}from"./SceneService-CX1jeb09.js";import{s as et}from"./associatedFeatureServiceUtils-CMRrSHLl.js";import{s as tt}from"./capabilities-CAweHQni.js";import{p as te,a as rt,y as st,m as it}from"./I3SLayerDefinitions-BgvyzM53.js";import{r as at,t as ot}from"./infoFor3D-DsOdlPuA.js";import{b as nt}from"./fetchService-DhVwREaA.js";import{j as lt}from"./persistable-kz0vDgU1.js";import{$ as dt}from"./I3SUtil-jq2wwHwF.js";import{n as pt,p as ut}from"./popupUtils-BTKYIjXJ.js";import"./MeshTransform-BIFDOkMw.js";import"./vertexSpaceConversion-123zGiSw.js";import"./External-BZZjkN_m.js";import"./I3SIndexInfo-DEqi9qSi.js";import"./resourceExtension-CTg0GFsJ.js";import"./I3SBinaryReader-BZ0Ocz_y.js";function re({associatedLayer:e,serviceUpdateTimeStamp:t}){var p;const r=(p=e==null?void 0:e.editingInfo)==null?void 0:p.lastEditDate,s=e==null?void 0:e.serverGens,n=r!=null,l=t!=null,d=n&&l&&t.lastUpdate!==r.getTime();return n&&(d||!l&&(s==null?void 0:s.minServerGen)!==(s==null?void 0:s.serverGen))}const ct=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){var n;const r=(n=this.associatedLayer)==null?void 0:n.timeInfo;if(r==null)return null;const s=r.clone();return k(s,this.fieldsIndex),s}set timeInfo(r){k(r,this.fieldsIndex),this._override("timeInfo",r)}get timeExtent(){var r;return(r=this.associatedLayer)==null?void 0:r.timeExtent}set timeExtent(r){this._override("timeExtent",r)}get timeOffset(){var r;return(r=this.associatedLayer)==null?void 0:r.timeOffset}set timeOffset(r){this._override("timeOffset",r)}get datesInUnknownTimezone(){var r;return((r=this.associatedLayer)==null?void 0:r.datesInUnknownTimezone)??!1}set datesInUnknownTimezone(r){this._override("datesInUnknownTimezone",r)}async loadTimeInfoFromService(r){const{serviceTimeInfo:s}=this;if(s==null)return;const{startTimeField:n,endTimeField:l}=s;if(n==null&&l==null||re({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const d=async c=>{var _;let f=null;try{const L=await((_=this.fetchStatistics)==null?void 0:_.call(this,c,r));f=L==null?void 0:L.stats}catch{}if(f==null)return null;const{minTimeStr:I,min:O,maxTimeStr:E,max:x}=f,S=c===n?I??O:E??x;return S!=null?new Date(S):null},[p,y]=await Promise.all([d(n),d(l)]);if(n!=null&&p==null||l!=null&&y==null)return;const h=new V({start:p,end:y});this.setAtOrigin("timeInfo",new G({endField:l,startField:n,fullTimeExtent:h}),"service")}};return i([a({type:G,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),i([a({type:V,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),i([a({type:se,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),i([a({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),i([a({type:F,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=i([b("esri.layers.mixins.TemporalSceneLayer")],t),t};let F=class extends U{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};i([a({type:String})],F.prototype,"endTimeField",void 0),i([a({type:String})],F.prototype,"startTimeField",void 0),F=i([b("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],F);let g=class extends U{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([a({type:String,json:{read:!0,write:!0}})],g.prototype,"name",void 0),i([a({type:String,json:{read:!0,write:!0}})],g.prototype,"field",void 0),i([a({type:[Number],json:{read:!0,write:!0}})],g.prototype,"currentRangeExtent",void 0),i([a({type:[Number],json:{read:!0,write:!0}})],g.prototype,"fullRangeExtent",void 0),i([a({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=i([b("esri.layers.support.RangeInfo")],g);var j;let D=j=class extends ie(q.ofType(P)){constructor(e){super(e)}clone(){return new j(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(s=>{if(!t.equals(s.spatialReference)){if(!ae(s.spatialReference,t))return e!=null&&e.messages&&e.messages.push(new Q("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new P;oe(s,l,t),s=l}const n=s.toJSON(e);return delete n.spatialReference,n}).filter(s=>s!=null):(e!=null&&e.messages&&e.messages.push(new Q("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(s=>s.toJSON(e)))}static fromJSON(e,t){const r=new j;return e.forEach(s=>r.add(P.fromJSON(s,t))),r}};D=j=i([b("esri.layers.support.PolygonCollection")],D);const T=D;var N;let w=N=class extends U{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new T,this._geometriesSource=null}initialize(){this.addHandles(ne(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,le))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=T.fromJSON(e,r):this._geometriesSource={url:de(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:s}=this._geometriesSource,n=await Y(r,{responseType:"json",signal:t==null?void 0:t.signal}),l=e.toJSON(),d=n.data.map(p=>({...p,spatialReference:l}));this.geometries=T.fromJSON(d,s),this._geometriesSource=null}clone(){const e=new N({geometries:pe(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};i([a({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],w.prototype,"spatialRelationship",void 0),i([a({type:T,nonNullable:!0,json:{write:!0}}),lt({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],w.prototype,"geometries",void 0),i([v(["web-scene","portal-item"],"geometries")],w.prototype,"readGeometries",null),w=N=i([b("esri.layers.support.SceneFilter")],w);const yt=w;async function ht({fieldName:e,statisticsInfo:t,errorContext:r,fieldsIndex:s,path:n,customParameters:l,apiKey:d,signal:p}){if(t==null)throw new u(`${r}:no-cached-statistics`,"Cached statistics are not available for this layer");const y=s.get(e);if(y==null)throw new u(`${r}:field-unexisting`,`Field '${e}' does not exist on the layer`);const h=t.find(I=>I.name===y.name);if(h==null)throw new u(`${r}:no-cached-statistics`,"Cached statistics for this attribute are not available");const c=ue(n,h.href),{data:f}=await Y(c,{query:{f:"json",...l,token:d},responseType:"json",signal:p});return f}async function ft(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(mt(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function mt(e){const{BlobReader:t,ZipReader:r,BlobWriter:s}=await ee(()=>import("./zipjs-wrapper-2TwsqGJB.js"),[]),n=[];return(await new r(new t(e)).getEntries()).forEach(d=>{var h;if(d.directory||/^__MACOS/i.test(d.filename))return;const p=new s,y=(h=d.getData)==null?void 0:h.call(d,p).then(c=>new File([c],d.filename));y&&n.push(y)}),Promise.all(n)}const gt=new Set(["3DObject","Point"]),Z=We();let o=class extends ct(ce(Ye(ye(he(fe(me(ge(ve(we(be(He))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new q,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var s,n,l;const r=(n=(s=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:s.domains)==null?void 0:n[e];return r&&r.type!=="inherited"?r:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get fieldsIndex(){return new Ie(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:te.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&Le(this.associatedLayer)}get geometryType(){return vt[this.profile]||"mesh"}set renderer(e){K(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){var C;e=e??tt;const{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:d,supportsReturnServiceEditsInSourceSpatialReference:p},data:{supportsZ:y,supportsM:h,isVersioned:c,supportsAttachment:f},operations:{supportsEditing:I,supportsAdd:O,supportsUpdate:E,supportsDelete:x,supportsQuery:S,supportsQueryAttachments:_,supportsAsyncConvert3D:L}}=e,$=e.operations.supportsChangeTracking,A=!!((C=this.associatedLayer)!=null&&C.infoFor3D)&&z();return{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsReturnServiceEditsInSourceSpatialReference:p,supportsRollbackOnFailure:n,supportsGeometryUpdate:A&&d,supportsUploadWithItemId:l},data:{supportsAttachment:f,supportsZ:y,supportsM:h,isVersioned:c},operations:{supportsQuery:S,supportsQueryAttachments:_,supportsEditing:I&&$,supportsAdd:A&&O&&$,supportsDelete:A&&x&&$,supportsUpdate:E&&$,supportsAsyncConvert3D:L}}}get editingEnabled(){var e;return this._isOverridden("editingEnabled")?this._get("editingEnabled"):((e=this.associatedLayer)==null?void 0:e.editingEnabled)??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get relationships(){var e;return(e=this.associatedLayer)==null?void 0:e.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const r=t.store.profile;return r!=null&&X[r]?X[r]:(m.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}get useViewTime(){var e;return((e=this.associatedLayer)==null?void 0:e.useViewTime)??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Fe),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await Se(this,{origin:"service"},t),K(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){m.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){var t;const e=new _e;return this.geometryType==="mesh"?(t=this.associatedLayer)!=null&&t.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const s of r.features)s.layer=this,s.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new u("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new u("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){var s;const r=$e(this.fieldsIndex,await pt(this,ut(this)));return dt(((s=this.parsedUrl)==null?void 0:s.path)??"",this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new u("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new je;return s.attributes=r[0],s.layer=this,s.sourceLayer=this,s}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(m.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Te(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new u("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new u("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(B.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(B.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await ee(()=>import("./editingSupport-Cl4ctUf1.js"),__vite__mapDeps([0,1,2,3]));let s=t;await this.load();const n=this.associatedLayer;if(!n)throw new u(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,d=!!n.infoFor3D,p=(s==null?void 0:s.globalIdUsed)??!0;if(d&&l==null)throw new u(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(d&&!p)throw new u(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return J(n.url)&&d&&e.deleteFeatures!=null&&l!=null&&(s={...s,globalIdToObjectId:await Oe(n,e.deleteFeatures,l)}),r(this,n.source,e,s)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new u(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const r=c=>{throw m.getLogger(this).error(".convertMesh()",c.message),c};await this.load(),this.infoFor3D||r(new u("invalid:layer","SceneLayer has no capability for mesh conversion"));const s=await this.extractAndFilterFiles(e),n=s.reduce((c,f)=>at(this.infoFor3D,f)?c+1:c,0);n===0&&r(new Ze),n>1&&r(new Xe);const l=this.spatialReference,d=(t==null?void 0:t.location)??new Ee({x:0,y:0,z:0,spatialReference:l}),p=d.spatialReference.isGeographic?"local":"georeferenced",y=Be.createWithExternalSource(d,s,{vertexSpace:p}),[h]=await this.uploadAssets([y],t);return h}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await ft(e)).filter(r=>ot(t,r)):e}validateLayer(e){if(e.layerType&&!gt.has(e.layerType))throw new u("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new u("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new u("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,s){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const d=s&&s.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=d;break;case"vertex-reference-frame":n=!0,l=!d;break;default:n=!1}}if(!n)throw new u("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new u("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new u("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){var e,t,r;if(this._fieldUsageInfo={},this.fields)for(const s of this.fields){const n=!!((e=this.attributeStorageInfo)!=null&&e.some(p=>p.name===s.name)),l=!!((r=(t=this.associatedLayer)==null?void 0:t.fields)!=null&&r.some(p=>p&&s.name===p.name)),d={supportsLabelingInfo:n,supportsRenderer:n,supportsPopupTemplate:n||l,supportsLayerQuery:l};this._fieldUsageInfo[s.name]=d}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const r of this.associatedLayer.fields){const s=this.getField(r.name);s?(!s.domain&&r.domain&&(s.domain=r.domain.clone()),s.editable=r.editable,s.nullable=r.nullable,s.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=M(this);for(let r=0;r<e.length;r++){const s=e[r],n=this.originIdOf(s),l=this.associatedLayer.originIdOf(s);n<l&&(l===R.SERVICE||l===R.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],l)}}_applyAssociatedLayerExtentOverride(){var t,r,s;const e=(t=this.associatedLayer)==null?void 0:t.getAtOrigin("fullExtent","service");z()&&((r=this.associatedLayer)==null?void 0:r.infoFor3D)!=null&&e&&J((s=this.associatedLayer)==null?void 0:s.url)&&re(this)&&M(this).setAtOrigin("fullExtent",e.clone(),R.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:s}=await et(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),n=await nt.FeatureLayer();this.associatedLayer=new n({url:t,customParameters:this.customParameters,layerId:r,portalItem:s}),await this.associatedLayer.load()}catch(t){xe(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await Ae(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?m.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):m.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&W(m.getLogger(this),Pe("Mesh scene layers","relative-to-scene",e)),W(m.getLogger(this),Re("Scene layers",e))}async fetchStatistics(e,t){var r;return await ht({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:((r=this.parsedUrl)==null?void 0:r.path)??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t==null?void 0:t.signal})}};i([a({types:{key:"type",base:De,typeMap:{selection:Ne}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],o.prototype,"featureReduction",void 0),i([a({type:[g],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],o.prototype,"rangeInfos",void 0),i([a({json:{read:!1}})],o.prototype,"associatedLayer",void 0),i([a({type:["show","hide"]})],o.prototype,"listMode",void 0),i([a({type:["ArcGISSceneServiceLayer"]})],o.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),i([a({...Z.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"fields",void 0),i([a()],o.prototype,"types",null),i([a()],o.prototype,"typeIdField",null),i([a()],o.prototype,"templates",null),i([a()],o.prototype,"formTemplate",null),i([a({readOnly:!0,clonable:!1})],o.prototype,"fieldsIndex",null),i([a({type:Ue,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],o.prototype,"floorInfo",void 0),i([a(Z.outFields)],o.prototype,"outFields",void 0),i([a({type:te,readOnly:!0,json:{read:!1}})],o.prototype,"nodePages",void 0),i([v("service","nodePages",["nodePages","pointNodePages"])],o.prototype,"readNodePages",null),i([a({type:[rt],readOnly:!0})],o.prototype,"materialDefinitions",void 0),i([a({type:[st],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),i([a({type:[it],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),i([a({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),i([a({readOnly:!0})],o.prototype,"statisticsInfo",void 0),i([a({type:q.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],o.prototype,"excludeObjectIds",void 0),i([a({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),i([a({type:yt,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],o.prototype,"filter",void 0),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),i([a(qe)],o.prototype,"elevationInfo",null),i([a({readOnly:!0,json:{read:!1}})],o.prototype,"effectiveCapabilities",null),i([a({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),i([a({type:String})],o.prototype,"geometryType",null),i([a(Ce)],o.prototype,"labelsVisible",void 0),i([a({type:[Ge],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:H},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:H},write:!0}})],o.prototype,"labelingInfo",void 0),i([a(Ve)],o.prototype,"legendEnabled",void 0),i([a({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var s,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const r=(n=(s=t.layerDefinition)==null?void 0:s.drawingInfo)==null?void 0:n.transparency;return r!==void 0?ke(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],o.prototype,"opacity",void 0),i([a({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"priority",void 0),i([a({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"semantic",void 0),i([a({types:Qe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",null),i([a({json:{read:!1}})],o.prototype,"cachedDrawingInfo",void 0),i([v("service","cachedDrawingInfo")],o.prototype,"readCachedDrawingInfo",null),i([a({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),i([a({type:Boolean,json:{read:!1}})],o.prototype,"editingEnabled",null),i([a({readOnly:!0,json:{write:!1,read:!1}})],o.prototype,"infoFor3D",null),i([a({readOnly:!0,json:{write:!1,read:!1}})],o.prototype,"relationships",null),i([a(Ke)],o.prototype,"popupEnabled",void 0),i([a({type:ze,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),i([a({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),i([a({type:String,json:{read:!1}})],o.prototype,"objectIdField",void 0),i([v("service","objectIdField",["objectIdField","fields"])],o.prototype,"readObjectIdField",null),i([a({type:String,json:{read:!1}})],o.prototype,"globalIdField",void 0),i([v("service","globalIdField",["globalIdField","fields"])],o.prototype,"readGlobalIdField",null),i([a({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),i([a({type:String,json:{read:!1}})],o.prototype,"profile",void 0),i([v("service","profile",["store.profile"])],o.prototype,"readProfile",null),i([a({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),i([a(Je)],o.prototype,"screenSizePerspectiveEnabled",void 0),i([a({json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"serviceItemId",void 0),i([a(Me)],o.prototype,"useViewTime",null),o=i([b("esri.layers.SceneLayer")],o);const X={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},vt={"mesh-pyramids":"mesh",points:"point"},qt=o;export{qt as default};