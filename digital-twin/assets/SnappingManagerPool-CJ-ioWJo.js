import{ix as r,am as s,f as p,P as c,V as u,iy as f,iz as l,iA as d,Z as g,iB as y}from"./index-DenhEmYc.js";function m(n,e){const i=new r({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:e==null?void 0:e.distance,touchSensitivityMultiplier:(e==null?void 0:e.touchSensitivityMultiplier)??s.touchSensitivityMultiplier});return{...p(()=>{var t,a;return((a=(t=n.map)==null?void 0:t.allLayers)==null?void 0:a.toArray())??[]},t=>{i.featureSources=new u(t.map(a=>new f({layer:a})))},c),options:i}}const o=new Map;function $(n){if(!o.has(n)){const t=m(n,{distance:10}),a=w(n,t.options);o.set(n,{referenceCount:0,snappingManager:a,remove:()=>{t.remove(),a.destroy()}})}const e=o.get(n);e.referenceCount++;const i=g(()=>v(n,e));return{snappingManager:e.snappingManager,...i}}function v(n,e){e.referenceCount--,e.referenceCount>0||y(()=>{e.referenceCount===0&&(e.remove(),o.delete(n))})}function w(n,e){return new l({view:n,options:e,snappingEnginesFactory:(i,t)=>[new d({view:n,spatialReference:n.spatialReference,options:t})]})}export{$ as a};