import{fv as w,fk as b,fw as j,bI as M,fq as G,fx as O,fy as g}from"./index-ClOzeblJ.js";import{CIMSymbolRasterizer as R}from"./CIMSymbolRasterizer-B0vL1vgQ.js";const y=new R(null),f=w(b.size),S=w(b.maxSize),C=w(b.lineWidth),V=1;async function $(i,e,o){const l=e==null?void 0:e.size;let t=l!=null&&typeof l=="object"&&"width"in l?l.width:l,n=l!=null&&typeof l=="object"&&"height"in l?l.height:l;if(t==null||n==null)if(o==="esriGeometryPolygon")t=f,n=f;else{const a=await q(i,e,o);a&&(t=a.width,n=a.height),o==="esriGeometryPolyline"&&(t=C),t=t!=null&&isFinite(t)?Math.min(t,S):f,n=n!=null&&isFinite(n)?Math.max(Math.min(n,S),V):f}return e.style==="legend"&&o==="esriGeometryPolyline"&&(t=C),{width:t,height:n}}async function q(i,e,o){const{feature:l,fieldMap:t,viewParams:n}=e.cimOptions||e,a=await O.resolveSymbolOverrides(i.data,l,null,t,o,null,n);if(!a)return null;(i=i.clone()).data={type:"CIMSymbolReference",symbol:a},i.data.primitiveOverrides=void 0;const r=[];return g.fetchResources(a,y.resourceManager,r),g.fetchFonts(a,y.resourceManager,r),r.length>0&&await Promise.all(r),g.getEnvelope(a,null,y.resourceManager)}async function E(i,e={}){var v;const{node:o,opacity:l,symbolConfig:t}=e,n=t!=null&&typeof t=="object"&&"isSquareFill"in t&&t.isSquareFill,a=e.cimOptions||e,r=a.geometryType||j((v=i==null?void 0:i.data)==null?void 0:v.symbol),m=await $(i,e,r),{feature:I,fieldMap:P}=a,x=n||r!=="esriGeometryPolygon"?"preview":"legend",h=await y.rasterizeCIMSymbolAsync(i,I,m,x,P,r,null,a.viewParams,a.allowScalingUp);if(!h)return null;const{width:L,height:z}=h,c=document.createElement("canvas");c.width=L,c.height=z,c.getContext("2d").putImageData(h,0,0);const d=M(m.width),p=M(m.height),s=new Image(d,p);s.src=c.toDataURL(),s.ariaLabel=e.ariaLabel??null,s.alt=e.ariaLabel??"",l!=null&&(s.style.opacity=`${l}`);let u=s;if(e.effectView!=null){const F={shape:{type:"image",x:0,y:0,width:d,height:p,src:s.src},fill:null,stroke:null,offset:[0,0]};u=G([[F]],[d,p],{effectView:e.effectView,ariaLabel:e.ariaLabel})}return o&&u&&o.appendChild(u),u}export{E as previewCIMSymbol};