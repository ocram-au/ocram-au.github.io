import{bp as z,bR as B,hv as J,bw as A,bk as w,cg as U,hw as Q,f0 as V,U as X,hx as Z,hy as H,cj as Y,hz as ee,m as g,hA as te,a8 as ne,av as G,J as re,bQ as ae,hB as oe,hC as O,hD as se,bv as ie,ck as F,c$ as le,cX as W,c9 as I,hE as N,hi as ce,hF as ue,hG as fe,dt as he}from"./index-31kweLEy.js";import{I as pe}from"./I3SBinaryReader-BQPJ9v6P.js";function de(e,t,n,r,a){const o=n==="east-north-up"?z(e):ye(e,t,r),s=A();return B(r,o,s,a),s}const K=1,_=5-K;function ye(e,t,n){const r=w(),a=e[3],o=2**(Math.ceil(Math.log(a)*Math.LOG2E/_)*_+K);if(n.isGeographic){const c=o/J(n).radius*180/Math.PI,l=Math.round(e[1]/c),d=Math.max(-90,Math.min(90,l*c)),f=c/Math.cos((Math.abs(d)-c/2)/180*Math.PI),y=Math.round(e[0]/f)*f;r[0]=y,r[1]=d}else{const c=Math.round(e[0]/o),l=Math.round(e[1]/o);r[0]=c*o,r[1]=l*o}const s=e[2]+t,i=Math.round(s/o);return r[2]=i*o,r}function P(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function _e(e){var t;if(Y("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const r of n.geometryBuffers)if(((t=r.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function Le(e,t,n,r){n.traverse(t,a=>{const o=a.serviceMbsInIndexSR;return(o!=null&&me(e,o))!==S.OUTSIDE&&(r(a),!0)})}function qe(e,t,n){let r=0,a=0;for(let o=0;o<t.length&&r<e.length;o++)e[r]===t[o]&&(n(o)&&(e[a]=e[r],a++),r++);e.length=a}function Ae(e,t,n){let r=0,a=0;for(;r<n.length;)ee(e,n[r])>=0===t&&(n[a]=n[r],a++),r++;n.length=a}const T=U();function Ge(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return T[0]=(e[0]-t.position[0])/t.rotationScale[0],T[1]=(e[1]-t.position[1])/t.rotationScale[4],T[2]=(e[2]-t.position[0])/t.rotationScale[0],T[3]=(e[3]-t.position[1])/t.rotationScale[4],T}var S;function me(e,t){const n=t[0],r=t[1],a=t[3],o=e[0]-n,s=n-e[2],i=e[1]-r,c=r-e[3],l=Math.max(o,s,0),d=Math.max(i,c,0),f=l*l+d*d;return f>a*a?S.OUTSIDE:f>0?S.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,s,i,c)>a?S.INSIDE:S.INTERSECTS_CENTER_INSIDE}function be(e,t,n){const r=[],a=n==null?void 0:n.missingFields,o=n==null?void 0:n.originalFields;for(const s of e){const i=s.toLowerCase();let c=!1;for(const l of t)if(i===l.name.toLowerCase()){r.push(l.name),c=!0,o&&o.push(s);break}!c&&a&&a.push(s)}return r}async function Ke(e,t,n,r,a,o){if(t.length===0)return[];const s=e.attributeStorageInfo;if(e.associatedLayer!=null)try{return await we(e.associatedLayer,t,n,r,o)}catch(i){if(e.associatedLayer.loaded)throw i}if(s){const i=ge(t,n,a);if(i==null)throw new g("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path;return(await Promise.all(i.map(l=>Se(c,s,l.node,l.indices,r,e.apiKey,e.customParameters,o).then(d=>{for(let f=0;f<l.graphics.length;f++){const y=l.graphics[f],m=d[f];if(y.attributes)for(const u in y.attributes)u in m||(m[u]=y.attributes[u]);y.attributes=m}return l.graphics})))).flat()}throw new g("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function ge(e,t,n){const r=new Map,a=[],o=n();for(const s of e){const i=s.attributes[t];for(let c=0;c<o.length;c++){const l=o[c],d=l.featureIds.indexOf(i);if(d>=0){let f=r.get(l.node);f||(f={node:l.node,indices:[],graphics:[]},a.push(f),r.set(l.node,f)),f.indices.push(d),f.graphics.push(s);for(let y=c;y>0;y--)o[y]=o[y-1];o[0]=l;break}}}return a}async function we(e,t,n,r,a){t.sort((l,d)=>l.attributes[n]-d.attributes[n]);const o=t.map(l=>l.attributes[n]),s=[],i=be(r,e.fields,{originalFields:s}),c=await j(e,o,i,a);for(let l=0;l<t.length;l++){const d=t[l],f=c[l],y={};if(d.attributes)for(const m in d.attributes)y[m]=d.attributes[m];for(let m=0;m<s.length;m++)y[s[m]]=f[i[m]];d.attributes=y}return t}function j(e,t,n,r){const a=e.capabilities.query.maxRecordCount;if(a!=null&&t.length>a){const s=te(t,a);return Promise.all(s.map(i=>j(e,i,n,r))).then(i=>i.flat())}const o=new ne({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(o,r).then(s=>{if(s&&s.features&&s.features.length===t.length)return s.features.map(i=>i.attributes);throw new g("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function Se(e,t,n,r,a,o,s,i){return Ie(e,t,n.resources.attributes,r,a,o,s,i)}async function Ie(e,t,n,r,a,o,s,i){const c=[];for(const f of t)if(f&&a.includes(f.name)){const y=`${e}/nodes/${n}/attributes/${f.key}/0`;c.push({url:y,storageInfo:f})}const l=await Promise.allSettled(c.map(f=>X(f.url,{responseType:"array-buffer",query:{...s,token:o},signal:i==null?void 0:i.signal}).then(y=>pe(f.storageInfo,y.data)))),d=[];for(const f of r){const y={};for(let m=0;m<l.length;m++){const u=l[m];if(u.status==="fulfilled"){const h=u.value;y[c[m].storageInfo.name]=ve(h,f)}}d.push(y)}return d}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(S||(S={}));const Te=-32768,Ee=-(2**31);function ve(e,t){if(!e)return null;const n=e[t];return Z(e)?n===Te?null:n:H(e)?n===Ee?null:n:n!=n?null:n}function Me(e){const t=e.store,n=t.indexCRS||t.geographicCRS,r=n===void 0?t.indexWKT:void 0;if(r){if(!e.spatialReference)throw new g("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new g("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=n?new G(P(n)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function Re(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,r=n===void 0?t.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new g("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new g("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=n?new G(P(n)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function Pe(e,t){return t==null?"@null":t===ae(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function D(e,t,n){if(!re(e,t))throw new g("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(n==="local"&&!xe(e,t))throw new g("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function je(e,t,n){var r,a,o,s;if(((r=e.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)!==((a=t.serviceUpdateTimeStamp)==null?void 0:a.lastUpdate)||!n.isEmpty||((o=e.associatedLayer)==null?void 0:o.url)!==((s=t.associatedLayer)==null?void 0:s.url))throw new g("layerview:recycle-failed")}function xe(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function $e(e,t,n){const r=Me(e),a=Re(e);D(r,t,n),D(a,t,n)}function Ce(e){var t;return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function ze(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ce(e.store.defaultGeometrySchema))throw new g("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function Be(e,t){$e(e,t.spatialReference,t.viewingMode)}function Ne(e){var t;return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function Je(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ne(e.store.defaultGeometrySchema))throw new g("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Qe(e,t){D(e.spatialReference,t.spatialReference,t.viewingMode)}function ke(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function De(e){return e.type==="mesh-3d"}function Ve(e){var n;if(e==null||!ke(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const r of t){if(!De(r)||r.symbolLayers.length===0)return!0;for(const a of r.symbolLayers.items)if(a.type!=="fill"||((n=a.material)==null?void 0:n.color)==null||a.material.colorMixMode!=="replace")return!0}return!1}const Xe=Q({color:[0,0,0,0],opacity:0});class Ue{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Ze(e){const t=new Ue;let n=!1,r=!1;for(const a of e.symbolLayers.items)if(a.type==="fill"&&a.enabled){const o=a.material,s=a.edges;if(o!=null&&!n){const i=o.color,c=oe(o.colorMixMode);t.material=i!=null?{color:[i.r/255,i.g/255,i.b/255],alpha:i.a,colorMixMode:c}:{color:[1,1,1],alpha:1,colorMixMode:O.Multiply},t.castShadows=a.castShadows,n=!0}s==null||r||(t.edgeMaterial=se(s,{}),r=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:O.Multiply}),t}function He(e,t){return(0|e)+(0|t)|0}function Ye(e,t,n,r,a,o,s){if(!o||o.length===0||t==null||!e.serviceMbsInIndexSR)return null;const i=de(e.serviceMbsInIndexSR,a,"none",n,t);ie(R,i);let c=null;const l=()=>{if(!c)if(c=Oe,F(M),e.serviceObbInIndexSR!=null){e.serviceObbInIndexSR.transform(L,n,t,a,s),L.getCorners(c);for(const u of c)I(u,u,R),N(M,u)}else{const u=e.serviceMbsInIndexSR;if(!u)return;const h=u[3];W(fe(u),n,p,t),I(p,p,R),p[2]+=a;for(let b=0;b<8;++b){const E=1&b?h:-h,x=2&b?h:-h,$=4&b?h:-h,v=c[b];he(v,[p[0]+E,p[1]+x,p[2]+$]),N(M,v)}}};let d=1/0,f=-1/0;const y=u=>{if(u.type!=="replace")return;const h=u.geometry;if(!(h!=null&&h.hasZ))return;F(k);const b=h.spatialReference||r,E=h.rings.reduce((x,$)=>$.reduce((v,C)=>(le(p,C[0],C[1],C[2]),W(p,b,p,t),I(p,p,R),N(k,p),Math.min(p[2],v)),x),1/0);l(),ce(M,k)&&(d=Math.min(d,E),f=Math.max(f,E))};if(o.forEach(u=>y(u)),d===1/0)return null;const m=(u,h,b)=>{I(p,b,i),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2],h+=24,b[2]=d,I(p,b,i),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2],h+=24,b[2]=f,I(p,b,i),u[h]=p[0],u[h+1]=p[1],u[h+2]=p[2]};for(let u=0;u<8;++u)m(q.data,3*u,c[u]);return ue(q)}function et(e){return e[3]>=0}function tt(e){e!=null&&(e[3]=-1)}const Oe=[w(),w(),w(),w(),w(),w(),w(),w()],k=U(),M=U(),L=new V,p=w(),q={data:new Array(72),size:3,exclusive:!0,stride:3},R=A();export{Ie as $,Ke as A,qe as D,S as F,Re as H,Pe as J,be as L,_e as N,me as O,ve as Q,Ae as W,D as X,je as Y,Me as Z,de as a,Je as b,He as d,Xe as f,tt as g,Ye as h,Le as k,Ze as m,Be as n,ze as o,Ge as q,Qe as s,$e as t,Ve as u,et as y};