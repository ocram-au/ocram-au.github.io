import{dd as i,de as a}from"./index-CQXxPdCL.js";function s(n,r,o,t=!1){const e=i(n,r);return e==null?null:(e.hasZ&&!t||o==null||(e.z=a(o,e)??0),e)}function c(n,r,o){o.warnOnce(`Failed to project analysis geometry (id: '${n.id}'), projection from spatial reference (wkid: '${r.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}export{s as r,c as t};