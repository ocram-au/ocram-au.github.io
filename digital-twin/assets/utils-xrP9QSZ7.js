import{cP as G,cQ as V,af as j,cR as z,cS as O,cT as v,cU as P,cV as R,cW as U,c0 as Y,cX as _,cY as A}from"./index-B6FTDkqq.js";import{c as E,B as D}from"./utils-dZTjTTMU.js";let m=null;const L=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function S(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function Q(t,e,o,r){const a=G(o)?V(o):null,c=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(i=>{const s=new j(i.geometry);return z(e,s,s),i.geometry=a?S(s,c??0,r[0]):s,i})}function X(t,e=18,o,r,a){const c=new Float64Array(r*a);e=Math.round(_(e));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const N=A(o);for(const{geometry:h,attributes:g}of t){const{x:$,y:u}=h,I=Math.max(0,$-e),M=Math.max(0,u-e),F=Math.min(a,u+e),y=Math.min(r,$+e),p=+N(g);for(let f=M;f<F;f++)for(let d=I;d<y;d++){const b=f*r+d,w=O(d-$,f-u,e)*p,l=c[b]+=w;i=Math.min(i,l),s=Math.max(s,l)}}return{min:i,max:s}}function W(t){const e=L.exec(t);if(!e)return null;const{hh:o,mm:r,ss:a,ms:c}=e.groups;return Number(o)*v.hours+Number(r)*v.minutes+Number(a)*v.seconds+Number(c||0)}async function k(t,e,o=!0){if(!e)return[];const{field:r,field2:a,field3:c,fieldDelimiter:i,fieldInfos:s,timeZone:N}=t,h=r&&(s==null?void 0:s.find(l=>l.name.toLowerCase()===r.toLowerCase())),g=!!h&&P(h),$=!!h&&R(h),u=t.valueExpression,I=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,y=[],p=t.viewInfoParams;let f=null,d=null;if(u){if(!m){const{arcadeUtils:l}=await U();m=l}m.hasGeometryOperations(u)&&await m.enableGeometryOperations(),f=m.createFunction(u),d=p?m.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new Y(p.spatialReference)}):null}const b=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&b?{fields:b}:null;return e.forEach(l=>{const x=l.attributes;let n;if(u){const T=w?{...l,layer:w}:l,C=m.createExecContext(T,d,N);n=m.executeFunction(f,C)}else x&&(n=x[r],a?(n=`${E(n)}${i}${E(x[a])}`,c&&(n=`${n}${i}${E(x[c])}`)):typeof n=="string"&&o&&($?n=n?new Date(n).getTime():null:g&&(n=n?W(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const T=x&&parseFloat(x[M]);n=D(n,I,T,F)}y.push(n)}),y}export{k as b,Q as j,W as w,X as x};