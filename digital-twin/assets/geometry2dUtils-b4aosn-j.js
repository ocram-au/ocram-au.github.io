import{cG as o,cH as A,cI as b,cJ as I,cK as d,cL as $,cM as M,cN as j}from"./index-CQXxPdCL.js";function m(t,s){return t[0]*s[1]-t[1]*s[0]}function q(t,s,n){const c=$(n,s)/M(n);return j(t,n,c)}function R(t,s,n,c,r=n){return o(p,c,n),o(y,s,r),q(N,y,p),A(t,r,N)}function Y(t,s,n,c){o(p,s,n);const r=c/b(p);return I(t,n,p,r)}function g(t,s){const n=t.start,c=t.end,r=s.start,h=s.end,e=o(p,c,n),a=o(l,h,r),i=m(e,a);if(Math.abs(i)<=v)return[];const u=o(y,n,r),E=m(a,u)/i,L=m(e,u)/i;if(E>=0){if(L>=0||s.type===f.LINE)return[I(N,n,e,E)]}else if(t.type===f.LINE&&(L>=0||s.type===f.LINE))return[I(N,n,e,E)];return[]}function G(t,s,n){const c=[],r=o(p,t.end,t.start),h=o(l,t.start,s),e=M(r),a=2*$(r,h),i=a*a-4*e*(M(h)-n*n);if(i===0){const u=-a/(2*e);(t.type===f.LINE||u>=0)&&c.push(I(N,t.start,r,u))}else if(i>0){const u=Math.sqrt(i),E=(-a+u)/(2*e);(t.type===f.LINE||E>=0)&&c.push(I(N,t.start,r,E));const L=(-a-u)/(2*e);(t.type===f.LINE||L>=0)&&c.push(I(y,t.start,r,L))}return c}var f;(function(t){t[t.RAY=0]="RAY",t[t.LINE=1]="LINE"})(f||(f={}));const v=1e-6,p=d(),l=d(),y=d(),N=d();export{R as I,Y as N,g as b,G as d,f as j};