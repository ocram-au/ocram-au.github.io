import{ae as d,gV as S,dt as r,f1 as u,c9 as p,j as b,e as o,y as c,a as g,bw as j,bk as v}from"./index-ClOzeblJ.js";import{d as y}from"./TileTreeDebugger-BxKRcUMi.js";let h=class extends y{constructor(a){super(a)}getTiles(){const a=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,i=this.nodeSR;return a.map(l=>z(l,t,i)).filter(d).sort((l,s)=>l.lij[0]===s.lij[0]?l.label>s.label?-1:1:l.lij[0]-s.lij[0])}};function z(a,t,i){const l=a.serviceObbInIndexSR;if(l==null||t==null)return null;S(n,l.quaternion),r(e,l.center),u(e,i,0,e,t,0,1),n[12]=e[0],n[13]=e[1],n[14]=e[2];const s=[[],[],[]];p(e,l.halfSize,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),r(e,l.halfSize),e[0]=-e[0],p(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),r(e,l.halfSize),e[0]=-e[0],e[1]=-e[1],p(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),r(e,l.halfSize),e[1]=-e[1],p(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),r(e,l.halfSize),e[0]=-e[0],e[2]=-e[2],p(e,e,n),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),r(e,l.halfSize),e[2]=-e[2],p(e,e,n),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),r(e,l.halfSize),e[1]=-e[1],e[2]=-e[2],p(e,e,n),u(e,t,0,e,i,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new b({rings:s,spatialReference:i});return{lij:[a.level,a.childCount,0],label:a.id,geometry:f}}o([c({constructOnly:!0})],h.prototype,"lv",void 0),o([c({constructOnly:!0})],h.prototype,"nodeSR",void 0),h=o([g("esri.views.3d.layers.support.I3STreeDebugger")],h);const n=j(),e=v();export{h as I3STreeDebugger};