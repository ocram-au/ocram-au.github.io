import{bL as q,bx as z,bM as P,bN as Q,bO as x,bP as d,bQ as $,bR as R,bS as b,bT as y,bU as B,bv as h,bV as W,bW as S,bX as j,bY as k,bZ as X,b_ as Z,b$ as _,c0 as D,c1 as H,c2 as L,c3 as I,c4 as J,c5 as K,bw as E,c6 as nn,bk as tn,C as en,c7 as G,c8 as rn,c9 as on}from"./index-ClOzeblJ.js";const g=()=>en.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function xn(n,t,{vertexSpace:e,spatialReference:o}){if(e.type==="georeferenced"){const u=n;if(!G(t,u,o))return!1;const{origin:c}=e;return rn(n,u,c),!0}const r=$(o),a=n;if(!G(t,a,r))return!1;const{origin:l}=e,s=M;if(!R(o,l,s,r))return!1;const i=h(M,s);return i!=null&&(on(n,a,i),!0)}function Rn(n,t,e){const{vertexSpace:o,transform:r,vertexAttributes:a}=n,l=w(n.spatialReference,e,p.SOURCE|p.TARGET);if(q(o,t)&&(!r||z(r.localMatrix,P))&&Q(l,1)){const{position:s,normal:i,tangent:u}=a,c=e==null?void 0:e.allowBufferReuse;return{position:c?s:s.slice(),normal:c?i:i==null?void 0:i.slice(),tangent:c?u:u==null?void 0:u.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?un(n,n.vertexSpace,t.origin,e):ln(n,n.vertexSpace,t.origin,e);case"georeferenced":return t.type==="local"?sn(n,n.vertexSpace,t.origin,e):an(n,n.vertexSpace,t.origin,e)}}function an({vertexAttributes:n,transform:t,spatialReference:e},{origin:o},r,a){const{position:l,normal:s,tangent:i}=t?F(n,t.localMatrix):n,u=new Float64Array(l.length);let c=l;if(o&&(c=x(u,c,o)),r){const A=d(Y,r);c=x(u,c,A)}w(e,a,p.NONE);const m=a==null?void 0:a.allowBufferReuse;return{position:c!==n.position||m?c:c.slice(),normal:s!==n.normal||m?s:s==null?void 0:s.slice(),tangent:i!==n.tangent||m?i:i==null?void 0:i.slice()}}function ln({spatialReference:n,vertexAttributes:t,transform:e},{origin:o},r,a){const l=$(n);if(!R(n,o,f,l))return b(g(),n,l),null;e&&y(f,f,e.localMatrix),V(f,n,a,p.SOURCE);const s=new Float64Array(t.position.length),i=fn(t.position,f,n,s);if(!i)return null;const u=gn(i,s,t.normal,f,n);if(t.normal&&!u)return null;const c=pn(i,s,t.tangent,f,n);if(t.tangent&&!c)return null;if(r){const m=d(Y,r);x(i,i,m)}return{position:i,normal:u,tangent:c}}function sn({vertexAttributes:n,spatialReference:t,transform:e},{origin:o},r,a){const l=$(t);if(!R(t,r,f,l))return b(g(),t,l),null;const s=1/w(t,a,p.TARGET);B(f,f,[s,s,s]);const i=h(v,f),{position:u,normal:c,tangent:m}=cn(n,o,e),A=new Float64Array(u.length),T=mn(u,t,i,A);if(!T)return null;const O=W(An,i),U=bn(c,u,A,t,O,c!==n.normal?c:void 0);if(!U&&c)return null;const C=$n(m,u,A,t,O,m!==n.tangent?m:void 0);return!C&&m?null:{position:T,normal:U,tangent:C}}function cn(n,t,e){if(!t)return n;if(!e){const{position:r,normal:a,tangent:l}=n;return{position:x(new Float64Array(r.length),r,t),tangent:l,normal:a}}const o=F(n,e.localMatrix);return x(o.position,o.position,t),o}function un({vertexAttributes:n,spatialReference:t,transform:e},{origin:o},r,a){const l=$(t);if(!R(t,o,f,l))return b(g(),t,l),null;if(e&&y(f,f,e.localMatrix),!R(t,r,v,l))return b(g(),l,t),null;h(v,v);const s=y(f,v,f);return V(s,t,a,p.SOURCE|p.TARGET),F(n,s)}function F(n,t){const e=new Float64Array(n.position.length);S(e,n.position,t);const o=n.normal?new Float32Array(n.normal.length):null,r=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&j(n.normal,o,t),r&&n.tangent&&k(n.tangent,r,t),{position:e,normal:o,tangent:r}}function fn(n,t,e,o){S(o,n,t);const r=new Float64Array(n.length);return X(o,r,e)?r:(b(g(),$(e),e),null)}function gn(n,t,e,o,r){if(e==null)return null;const a=new Float32Array(e.length);return j(e,a,o),Z(a,n,t,r,a)?a:(b(g(),$(r),r),null)}function pn(n,t,e,o,r){if(e==null)return null;const a=new Float32Array(e.length);return k(e,a,o),_(a,n,t,r,a)?a:(b(g(),$(r),r),null)}function V(n,t,e,o){const r=w(t,e,o);r!==1&&B(n,n,[r,r,r])}function w(n,t,e){const o=!!(e&p.SOURCE),r=!!(e&p.TARGET),a=t==null?void 0:t.sourceUnit,l=t==null?void 0:t.targetUnit;if(!a&&!l)return 1;let s=N(a,n);!o&&a&&s!==1&&(g().warn("source unit conversion not supported"),s=1);let i=1/N(l,n);return!r&&l&&i!==1&&(g().warn("target unit conversion not supported"),i=1),s*i}function mn(n,t,e,o){const r=D(n,t,o);if(!r)return b(g(),t,$(t)),null;const a=new Float64Array(r.length);return S(a,r,e),a}function bn(n,t,e,o,r,a){if(n==null)return null;const l=a??new Float32Array(n.length);return H(n,t,e,o,l)?(L(l,l,r),l):(b(g(),o,$(o)),null)}function $n(n,t,e,o,r,a){if(n==null)return null;const l=a??new Float32Array(n.length);return I(n,t,e,o,l)?(L(l,l,r,4),l):(b(g(),o,$(o)),null)}function N(n,t){if(n==null)return 1;const e=J(t);return 1/K(e,"meters",n)}const f=E(),v=E(),An=nn(),Y=tn(),M=E();var p;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(p||(p={}));export{Rn as M,xn as N,N as X};