import{eA as O,m as I,eB as Q,eD as Z,eC as A,eE as C,eH as F,eI as w,eJ as k,eK as P,ez as S,cx as v}from"./index-ClOzeblJ.js";import{t as $,n as G}from"./objectIdUtils-4dd1rf9p.js";import{m as z}from"./FeatureStore-CvM22RQB.js";import{$ as L,x as E,j as _}from"./QueryEngine-ujEhle5V.js";import{i as B,o as H,c as W}from"./clientSideDefaults-xJTNVdx-.js";import{j as J,f as g,p as T,d as j,y as D}from"./sourceUtils-9siGwI11.js";import"./BoundsStore-BoZwIxqF.js";import"./PooledRBush-OWaDmARO.js";import"./quickselect-SG4KBEIz.js";import"./optimizedFeatureQueryEngineAdapter-Cx7W0OBd.js";import"./WhereClause-XYFxqlAH.js";import"./TimeOnly-f9n-uNgn.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-Bo8R5uBD.js";import"./utils-C9GF_D4N.js";import"./ClassBreaksDefinition-CchT6Wr4.js";import"./date-M6n_RqpC.js";const K=S,N={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},U={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function V(h){return v(h)?h.z!=null:!!h.hasZ}function X(h){return v(h)?h.m!=null:!!h.hasM}class ge{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:a}=e,n=this._inferLayerProperties(a,e.fields),o=e.fields||[],u=e.hasM!=null?e.hasM:!!n.hasM,y=e.hasZ!=null?e.hasZ:!!n.hasZ,p=!e.spatialReference&&!n.spatialReference,d=p?K:e.spatialReference||n.spatialReference,m=p?N:null,c=e.geometryType||n.geometryType,l=!c;let t=e.objectIdField||n.objectIdField,r=e.timeInfo;const f=new O(o);if(!l&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!c))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&t!==n.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),t=n.objectIdField),t&&!n.objectIdField){const s=f.get(t);s?(t=s.name,s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):o.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of o){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===t&&(s.type="esriFieldTypeOID"),!Q.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s});s.length==null&&(s.length=Z(s))}const b={};for(const s of o)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const q=A(s);q!==void 0&&(b[s.name]=q)}if(r){if(r.startTimeField){const s=f.get(r.startTimeField);s?(r.startTimeField=s.name,s.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const s=f.get(r.endTimeField);s?(r.endTimeField=s.name,s.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const s=f.get(r.trackIdField);s?r.trackIdField=s.name:(r.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:r}}),r=null)}const x=f.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??C}:null;this._createDefaultAttributes=B(b,t);const R={warnings:i,featureErrors:[],layerDefinition:{...U,drawingInfo:H(c),templates:W(b),extent:m,geometryType:c,objectIdField:t,fields:o,hasZ:y,hasM:u,timeInfo:r,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new L({fieldsIndex:O.fromLayerJSON({fields:o,timeInfo:r,dateFieldsTimeReference:x}),geometryType:c,hasM:u,hasZ:y,objectIdField:t,spatialReference:d,featureStore:new z({geometryType:c,hasM:u,hasZ:y}),timeInfo:r,cacheSpatialQueries:!0}),!(a!=null&&a.length))return this._nextObjectId=$,R;const M=G(t,a);return this._nextObjectId=M+1,await E(a,d),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:i,geometryType:a}=this._queryEngine;return await Promise.all([J(i,a),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let a,n,o=null,u=null,y=null;for(const p of e){const d=p.geometry;if(d!=null&&(o||(o=F(d)),u||(u=d.spatialReference),a==null&&(a=V(d)),n==null&&(n=X(d)),o&&u&&a!=null&&n!=null))break}if(i&&i.length){let p=null;i.some(d=>{const m=d.type==="esriFieldTypeOID",c=!d.type&&d.name&&d.name.toLowerCase()==="objectid";return p=d,m||c})&&(y=p.name)}return{geometryType:o,spatialReference:u,objectIdField:y,hasM:n,hasZ:a}}async _loadInitialFeatures(e,i){const{geometryType:a,hasM:n,hasZ:o,objectIdField:u,spatialReference:y,featureStore:p,fieldsIndex:d}=this._queryEngine,m=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==F(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),f=T(d,r,t.attributes,!0);f?e.featureErrors.push(f):(this._assignObjectId(r,t.attributes,!0),t.attributes=r,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[u]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,y)),m.push(t))}p.addMany(w([],m,a,o,n,u));const{fullExtent:c,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=c,l){const{start:t,end:r}=l;e.layerDefinition.timeInfo.timeExtent=[t,r]}return e}async _applyEdits(e){const{adds:i,updates:a,deletes:n}=e,o={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(o,i),a!=null&&a.length&&this._applyUpdateEdits(o,a),n==null?void 0:n.length){for(const p of n)o.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:u,timeExtent:y}=await this._queryEngine.fetchRecomputedExtents();return{extent:u,timeExtent:y,featureEditResults:o}}_applyAddEdits(e,i){const{addResults:a}=e,{geometryType:n,hasM:o,hasZ:u,objectIdField:y,spatialReference:p,featureStore:d,fieldsIndex:m}=this._queryEngine,c=[];for(const l of i){if(l.geometry&&n!==F(l.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=T(m,t,l.attributes);if(r)a.push(r);else{if(this._assignObjectId(t,l.attributes),l.attributes=t,l.uid!=null){const f=l.attributes[y];e.uidToObjectId[l.uid]=f}if(l.geometry!=null){const f=l.geometry.spatialReference??p;l.geometry=_(D(l.geometry,f),f,p)}c.push(l),a.push(j(l.attributes[y]))}}d.addMany(w([],c,n,u,o,y))}_applyUpdateEdits({updateResults:e},i){const{geometryType:a,hasM:n,hasZ:o,objectIdField:u,spatialReference:y,featureStore:p,fieldsIndex:d}=this._queryEngine;for(const m of i){const{attributes:c,geometry:l}=m,t=c==null?void 0:c[u];if(t==null){e.push(g(`Identifier field ${u} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const r=k(p.getFeature(t),a,o,n);if(l!=null){if(a!==F(l)){e.push(g("Incorrect geometry type."));continue}const f=l.spatialReference??y;r.geometry=_(D(l,f),f,y)}if(c){const f=T(d,r.attributes,c);if(f){e.push(f);continue}}p.add(P(r,a,o,n,u)),e.push(j(t))}}_assignObjectId(e,i,a=!1){const n=this._queryEngine.objectIdField;a&&i&&isFinite(i[n])?e[n]=i[n]:e[n]=this._nextObjectId++}}export{ge as default};