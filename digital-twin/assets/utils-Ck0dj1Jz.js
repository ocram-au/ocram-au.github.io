import{bE as G,bF as j,ax as z,bG as L,bH as O,bI as v,bJ as V,bK as _,bL as A,aB as B,bM as D,bN as P}from"./index-CQXxPdCL.js";import{c as T,B as R}from"./utils-CMnMOOCn.js";let m=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function K(t,e,o,r){const a=G(o)?j(o):null,u=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(i=>{const s=new z(i.geometry);return L(e,s,s),i.geometry=a?Y(s,u??0,r[0]):s,i})}function S(t,e=18,o,r,a){const u=new Float64Array(r*a);e=Math.round(D(e));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const N=P(o);for(const{geometry:d,attributes:M}of t){const{x:p,y:c}=d,I=Math.max(0,p-e),g=Math.max(0,c-e),F=Math.min(a,c+e),$=Math.min(r,p+e),h=+N(M);for(let f=g;f<F;f++)for(let b=I;b<$;b++){const y=f*r+b,w=O(b-p,f-c,e)*h,l=u[y]+=w;i=Math.min(i,l),s=Math.max(s,l)}}return{min:i,max:s}}function Z(t){const e=U.exec(t);if(!e)return null;const{hh:o,mm:r,ss:a,ms:u}=e.groups;return Number(o)*v.hours+Number(r)*v.minutes+Number(a)*v.seconds+Number(u||0)}async function W(t,e,o=!0){if(!e)return[];const{field:r,field2:a,field3:u,fieldDelimiter:i,fieldInfos:s,timeZone:N}=t,d=r&&(s==null?void 0:s.find(l=>l.name.toLowerCase()===r.toLowerCase())),M=!!d&&V(d),p=!!d&&_(d),c=t.valueExpression,I=t.normalizationType,g=t.normalizationField,F=t.normalizationTotal,$=[],h=t.viewInfoParams;let f=null,b=null;if(c){if(!m){const{arcadeUtils:l}=await A();m=l}m.hasGeometryOperations(c)&&await m.enableGeometryOperations(),f=m.createFunction(c),b=h?m.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new B(h.spatialReference)}):null}const y=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const x=l.attributes;let n;if(c){const E=w?{...l,layer:w}:l,C=m.createExecContext(E,b,N);n=m.executeFunction(f,C)}else x&&(n=x[r],a?(n=`${T(n)}${i}${T(x[a])}`,u&&(n=`${n}${i}${T(x[u])}`)):typeof n=="string"&&o&&(p?n=n?new Date(n).getTime():null:M&&(n=n?Z(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const E=x&&parseFloat(x[g]);n=R(n,I,E,F)}$.push(n)}),$}export{W as b,K as j,Z as w,S as x};