import{eu as y,ev as C,as as f,aE as $,by as b,ew as q,ex as x,ey as R,ez as U,a_ as j,eA as m,eB as w,b7 as A,eC as F}from"./index-CnMvbdm6.js";function Z(t,s=B()){return W(t,s,!1)}function W(t,s,r=t.hasZ){const l=y(t.spatialReference),a=C(l);if(a==null)return null;const d=(i,o)=>!(o.length<2)&&($(i,o[0],o[1],r&&o[2]||0),!0);let h=0;for(const i of t.rings){const o=i.length;if(o<3)continue;const{positionsWorldCoords:e}=s;for(;e.length<o;)e.push(f());const g=k,u=$(z,0,0,0),v=1/o;for(let n=0;n<o;n++){if(!d(g,i[n])||!b(g,t.spatialReference,e[n],l))return null;q(u,u,e[n],v)}const p=x(e[0],e[1],u,R());if(U(j(p))===0)continue;for(let n=0;n<o;n++)m(p,u,e[n],e[n]);const c=E(e);for(let n=0;n<c.length;n+=3)h+=w(e[c[n]],e[c[n+1]],e[c[n+2]])}return A(h,a)}const k=f(),z=f();function B(){return{positionsWorldCoords:[]}}function E(t){return F(K(t),[],2)}function K(t){const s=new Float64Array(2*t.length);for(let r=0;r<t.length;++r){const l=t[r],a=2*r;s[a]=l[0],s[a+1]=l[1]}return s}export{B as U,Z as j,E as k};