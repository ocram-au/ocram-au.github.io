import{eK as a,Z as l}from"./index-CnMvbdm6.js";function i(n,r){return u(n==null?void 0:n.data.coordinateHelper.hasZ(),r)}function u(n,r){return!!n&&r.mode!=="on-the-ground"&&!a(r)}function s(n,r){let e=null;const t=n.events.on("grab-changed",o=>{e!=null&&(e.remove(),e=null),o.action==="start"&&(e=n.disableDisplay())});return l(()=>{e==null||e.remove(),t.remove()})}export{i as o,s as r};