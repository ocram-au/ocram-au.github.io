import{bP as q,bB as L,bQ as P,bR as Q,bS as v,bT as N,bU as $,bV as x,bW as A,bX as y,bY as M,bz as h,bZ as W,b_ as S,b$ as j,c0 as z,c1 as X,c2 as Z,c3 as _,c4 as D,c5 as H,c6 as V,c7 as I,c8 as J,c9 as K,bA as E,ca as nn,bo as tn,B as en,cb as d,cc as rn,cd as on}from"./index-CQXxPdCL.js";const g=()=>en.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function vn(n,t,{vertexSpace:e,spatialReference:o}){if(e.type==="georeferenced"){const u=n;if(!d(t,u,o))return!1;const{origin:c}=e;return rn(n,u,c),!0}const r=$(o),a=n;if(!d(t,a,r))return!1;const{origin:l}=e,s=C;if(!x(o,l,s,r))return!1;const i=h(C,s);return i!=null&&(on(n,a,i),!0)}function xn(n,t,e){const{vertexSpace:o,transform:r,vertexAttributes:a}=n,l=w(n.spatialReference,e,p.SOURCE|p.TARGET);if(q(o,t)&&(!r||L(r.localMatrix,P))&&Q(l,1)){const{position:s,normal:i,tangent:u}=a,c=e==null?void 0:e.allowBufferReuse;return{position:c?s:s.slice(),normal:c?i:i==null?void 0:i.slice(),tangent:c?u:u==null?void 0:u.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?un(n,n.vertexSpace,t.origin,e):ln(n,n.vertexSpace,t.origin,e);case"georeferenced":return t.type==="local"?sn(n,n.vertexSpace,t.origin,e):an(n,n.vertexSpace,t.origin,e)}}function an({vertexAttributes:n,transform:t,spatialReference:e},{origin:o},r,a){const{position:l,normal:s,tangent:i}=t?F(n,t.localMatrix):n,u=new Float64Array(l.length);let c=l;if(o&&(c=v(u,c,o)),r){const b=N(k,r);c=v(u,c,b)}w(e,a,p.NONE);const m=a==null?void 0:a.allowBufferReuse;return{position:c!==n.position||m?c:c.slice(),normal:s!==n.normal||m?s:s==null?void 0:s.slice(),tangent:i!==n.tangent||m?i:i==null?void 0:i.slice()}}function ln({spatialReference:n,vertexAttributes:t,transform:e},{origin:o},r,a){const l=$(n);if(!x(n,o,f,l))return A(g(),n,l),null;e&&y(f,f,e.localMatrix),Y(f,n,a,p.SOURCE);const s=new Float64Array(t.position.length),i=fn(t.position,f,n,s);if(!i)return null;const u=gn(i,s,t.normal,f,n);if(t.normal&&!u)return null;const c=pn(i,s,t.tangent,f,n);if(t.tangent&&!c)return null;if(r){const m=N(k,r);v(i,i,m)}return{position:i,normal:u,tangent:c}}function sn({vertexAttributes:n,spatialReference:t,transform:e},{origin:o},r,a){const l=$(t);if(!x(t,r,f,l))return A(g(),t,l),null;const s=1/w(t,a,p.TARGET);M(f,f,[s,s,s]);const i=h(R,f),{position:u,normal:c,tangent:m}=cn(n,o,e),b=new Float64Array(u.length),T=mn(u,t,i,b);if(!T)return null;const O=W(bn,i),U=An(c,u,b,t,O,c!==n.normal?c:void 0);if(!U&&c)return null;const G=$n(m,u,b,t,O,m!==n.tangent?m:void 0);return!G&&m?null:{position:T,normal:U,tangent:G}}function cn(n,t,e){if(!t)return n;if(!e){const{position:r,normal:a,tangent:l}=n;return{position:v(new Float64Array(r.length),r,t),tangent:l,normal:a}}const o=F(n,e.localMatrix);return v(o.position,o.position,t),o}function un({vertexAttributes:n,spatialReference:t,transform:e},{origin:o},r,a){const l=$(t);if(!x(t,o,f,l))return A(g(),t,l),null;if(e&&y(f,f,e.localMatrix),!x(t,r,R,l))return A(g(),l,t),null;h(R,R);const s=y(f,R,f);return Y(s,t,a,p.SOURCE|p.TARGET),F(n,s)}function F(n,t){const e=new Float64Array(n.position.length);S(e,n.position,t);const o=n.normal?new Float32Array(n.normal.length):null,r=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&j(n.normal,o,t),r&&n.tangent&&z(n.tangent,r,t),{position:e,normal:o,tangent:r}}function fn(n,t,e,o){S(o,n,t);const r=new Float64Array(n.length);return X(o,r,e)?r:(A(g(),$(e),e),null)}function gn(n,t,e,o,r){if(e==null)return null;const a=new Float32Array(e.length);return j(e,a,o),Z(a,n,t,r,a)?a:(A(g(),$(r),r),null)}function pn(n,t,e,o,r){if(e==null)return null;const a=new Float32Array(e.length);return z(e,a,o),_(a,n,t,r,a)?a:(A(g(),$(r),r),null)}function Y(n,t,e,o){const r=w(t,e,o);r!==1&&M(n,n,[r,r,r])}function w(n,t,e){const o=!!(e&p.SOURCE),r=!!(e&p.TARGET),a=t==null?void 0:t.sourceUnit,l=t==null?void 0:t.targetUnit;if(!a&&!l)return 1;let s=B(a,n);!o&&a&&s!==1&&(g().warn("source unit conversion not supported"),s=1);let i=1/B(l,n);return!r&&l&&i!==1&&(g().warn("target unit conversion not supported"),i=1),s*i}function mn(n,t,e,o){const r=D(n,t,o);if(!r)return A(g(),t,$(t)),null;const a=new Float64Array(r.length);return S(a,r,e),a}function An(n,t,e,o,r,a){if(n==null)return null;const l=a??new Float32Array(n.length);return H(n,t,e,o,l)?(V(l,l,r),l):(A(g(),o,$(o)),null)}function $n(n,t,e,o,r,a){if(n==null)return null;const l=a??new Float32Array(n.length);return I(n,t,e,o,l)?(V(l,l,r,4),l):(A(g(),o,$(o)),null)}function B(n,t){if(n==null)return 1;const e=J(t);return 1/K(e,"meters",n)}const f=E(),R=E(),bn=nn(),k=tn(),C=E();var p;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(p||(p={}));export{xn as M,vn as N,B as X};