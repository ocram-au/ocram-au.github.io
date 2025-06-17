import{CE as Pe,Cz as be,Bi as _,Bk as E,CH as ve,Bt as H,AJ as r,eh as z,Az as te,CC as De,AI as A,sU as we,hd as b,bg as ie,ay as h,aX as R,bj as F,D2 as Ee,bV as ne,Bh as se,BJ as M,aU as v,D3 as ae,ee as re,aw as le,bi as Ve,bf as xe,kU as Se,a_ as ye,bH as Ce,aY as Le,aW as oe,AL as ce,AM as he,_ as de,Br as Ae,bn as G,bx as N,CA as Me,pr as Te,bY as $e,BH as Re,C0 as Ue,bF as o,Bs as k,e7 as Oe,aV as O,k$ as Ie,cO as pe,bN as j,sM as qe,fO as Ne,sA as je,sB as ze,D4 as Be,r as g,B1 as x,CL as We,CM as X,D5 as He,D6 as Fe,pN as Ge,CN as c,D7 as U,D8 as ke,Cx as J,bz as Xe,r6 as Je,bB as Ye,bC as Ze,bD as Ke,bE as Qe,m as T,a as et,D9 as tt,eS as Y}from"./index-QRcEofMq.js";import{t as it}from"./VisualElement-CdATycF2.js";function ue(t,e){const n=t.fragment;n.include(Pe),t.include(be),n.uniforms.add(new _("globalAlpha",i=>i.globalAlpha),new E("glowColor",i=>i.glowColor),new _("glowWidth",(i,s)=>i.glowWidth*s.camera.pixelRatio),new _("glowFalloff",i=>i.glowFalloff),new E("innerColor",i=>i.innerColor),new _("innerWidth",(i,s)=>i.innerWidth*s.camera.pixelRatio),new ve("depthMap",i=>{var s;return(s=i.depth)==null?void 0:s.attachment}),new H("normalMap",i=>i.normals)),n.code.add(r`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),n.code.add(r`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(r`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(r`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),e.contrastControlEnabled?n.uniforms.add(new H("frameColor",(i,s)=>i.colors),new _("globalAlphaContrastBoost",i=>i.globalAlphaContrastBoost)).code.add(r`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):n.code.add(r`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const B=z(6);function fe(t){const e=new te;e.include(De),e.include(ue,t);const n=e.fragment;if(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)if(n.uniforms.add(new _("maxPixelDistance",(i,s)=>t.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin))),n.code.add(r`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.spherical){const i=(a,l,d)=>b(a,l.heightManifoldTarget,d.camera.viewMatrix),s=(a,l)=>b(a,[0,0,0],l.camera.viewMatrix);n.uniforms.add(new A("heightManifoldOrigin",(a,l)=>(i(f,a,l),s(V,l),ie(V,V,f),R(u,V),u[3]=F(V),u)),new Ee("globalOrigin",a=>s(f,a)),new _("cosSphericalAngleThreshold",(a,l)=>1-Math.max(2,ne(l.camera.eye,a.heightManifoldTarget)*l.camera.perRenderPixelRatio)/F(a.heightManifoldTarget))),n.code.add(r`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(r`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(t.pointDistanceEnabled&&(n.uniforms.add(new _("maxPixelDistance",(i,s)=>2*s.camera.computeScreenPixelSizeAt(i.pointDistanceTarget))),n.code.add(r`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),t.intersectsLineEnabled&&n.uniforms.add(new se("perScreenPixelRatio",i=>i.camera.perScreenPixelRatio)).code.add(r`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&n.code.add(r`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(r`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),t.heightManifoldEnabled){n.uniforms.add(new M("angleCutoff",s=>$(s)),new A("heightPlane",(s,a)=>ge(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,f),a.camera.viewMatrix)));const i=t.spherical?r`normalize(globalOrigin - pos)`:r`heightPlane.xyz`;n.main.add(r`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return t.pointDistanceEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new A("pointDistanceSphere",(i,s)=>nt(i,s))),n.main.add(r`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),t.lineVerticalPlaneEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new A("lineVerticalPlane",(i,s)=>st(i,s)),new E("lineVerticalStart",(i,s)=>at(i,s)),new E("lineVerticalEnd",(i,s)=>rt(i,s))),n.main.add(r`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),t.intersectsLineEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new E("intersectsLineStart",(i,s)=>b(f,i.lineStartWorld,s.camera.viewMatrix)),new E("intersectsLineEnd",(i,s)=>b(f,i.lineEndWorld,s.camera.viewMatrix)),new E("intersectsLineDirection",(i,s)=>(v(u,i.intersectsLineSegment.vector),u[3]=0,R(f,ae(u,u,s.camera.viewMatrix)))),new _("intersectsLineRadius",i=>i.intersectsLineRadius)),n.main.add(r`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(r`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),e}function $(t){return re(lt,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-z(2))))}function nt(t,e){return b(ye(I),t.pointDistanceOrigin,e.camera.viewMatrix),I[3]=ne(t.pointDistanceOrigin,t.pointDistanceTarget),I}function st(t,e){const n=Ce(t.lineVerticalPlaneSegment,.5,f),i=t.renderCoordsHelper.worldUpAtPosition(n,ot),s=R(V,t.lineVerticalPlaneSegment.vector),a=Le(f,i,s);return R(a,a),ge(t.lineVerticalPlaneSegment.origin,a,e.camera.viewMatrix)}function at(t,e){const n=v(f,t.lineVerticalPlaneSegment.origin);return t.renderCoordsHelper.setAltitude(n,0),b(n,n,e.camera.viewMatrix)}function rt(t,e){const n=oe(f,t.lineVerticalPlaneSegment.origin,t.lineVerticalPlaneSegment.vector);return t.renderCoordsHelper.setAltitude(n,0),b(n,n,e.camera.viewMatrix)}function ge(t,e,n){return b(Z,t,n),v(u,e),u[3]=0,ae(u,u,n),Ve(Z,u,ct)}const lt=le(),f=h(),u=we(),ot=h(),V=h(),Z=h(),ct=xe(),I=Se(),ht=Object.freeze(Object.defineProperty({__proto__:null,build:fe,defaultAngleCutoff:B},Symbol.toStringTag,{value:"Module"}));let dt=class extends Ae{constructor(){super(...arguments),this.innerColor=G(1,1,1),this.innerWidth=1,this.glowColor=G(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=z(6),this.pointDistanceOrigin=h(),this.pointDistanceTarget=h(),this.lineVerticalPlaneSegment=N(),this.intersectsLineSegment=N(),this.intersectsLineRadius=3,this.heightManifoldTarget=h(),this.lineStartWorld=h(),this.lineEndWorld=h()}};class pt extends ce{constructor(e,n){super(e,n,new he(ht,()=>de(()=>Promise.resolve().then(()=>Dt),void 0)))}}function _e(t){const e=new te;e.include(ue,t);const{vertex:n,fragment:i}=e;n.uniforms.add(new Me("modelView",(a,{camera:l})=>Te(ft,l.viewMatrix,a.origin)),new Re("proj",({camera:a})=>a.projectionMatrix),new _("glowWidth",(a,{camera:l})=>a.glowWidth*l.pixelRatio),new Ue("pixelToNDC",({camera:a})=>re(ut,2/a.fullViewport[2],2/a.fullViewport[3]))),e.attributes.add(o.START,"vec3"),e.attributes.add(o.END,"vec3"),t.spherical&&(e.attributes.add(o.START_UP,"vec3"),e.attributes.add(o.END_UP,"vec3")),e.attributes.add(o.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewSegmentNormal","vec3"),e.varyings.add("vViewStartNormal","vec3"),e.varyings.add("vViewEndNormal","vec3");const s=!t.spherical;return n.main.add(r`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${k(s,r`vec3 startUp = vec3(0, 0, 1);`)}
    ${k(s,r`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),i.uniforms.add(new se("perScreenPixelRatio",a=>a.camera.perScreenPixelRatio)),i.code.add(r`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),i.main.add(r`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),e}const ut=le(),ft=$e(),gt=Object.freeze(Object.defineProperty({__proto__:null,build:_e},Symbol.toStringTag,{value:"Module"}));class _t extends dt{constructor(){super(...arguments),this.origin=h()}}let q=class extends ce{constructor(e,n){super(e,n,new he(gt,()=>de(()=>Promise.resolve().then(()=>wt),void 0)),me)}};const me=new Map([[o.START,0],[o.END,1],[o.EXTRUDE,2],[o.START_UP,3],[o.END_UP,4]]);let K=class{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=h(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const n=Oe(3*e.length);let i=0;for(const s of e)n[i++]=s[0],n[i++]=s[1],n[i++]=s[2];this.buffers=[n]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const n=this._buffers[0],i=3*Math.floor(n.length/3/2);O(this._origin,n[i],n[i+1],n[i+2])}else O(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const n=this._ensureVAO(e);n!=null&&(e.bindVAO(n),e.drawArrays(Ie.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===j.Global?Pt:bt}_ensureVAO(e){return this._buffers==null?null:(this._vao??(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,n){const i=this._createDataBuffer(n);return this._dirty=!1,new qe(e,me,new Map([["data",Ne(this._layout)]]),new Map([["data",je.createVertex(e,ze.STATIC_DRAW,i)]]))}_ensureVertexData(e,n){var s;if(!this._dirty)return;const i=this._createDataBuffer(n);(s=e.vertexBuffers.get("data"))==null||s.setData(i),this._dirty=!1}_createDataBuffer(e){const n=e.reduce((m,p)=>m+Q(p),0);this._count=n;const i=this._layout.createBuffer(n),s=this._origin;let a=0,l=0;const d="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const m of e){for(let p=0;p<m.length;p+=3){const L=O(ee,m[p],m[p+1],m[p+2]);p===0?l=this._renderCoordsHelper.getAltitude(L):this._renderCoordsHelper.setAltitude(L,l);const P=a+2*p;d==null||d(p,P,m,L);const W=ie(ee,L,s);if(p<m.length-3){for(let D=0;D<6;D++)i.start.setVec(P+D,W);i.extrude.setValues(P,0,-1),i.extrude.setValues(P+1,1,-1),i.extrude.setValues(P+2,1,1),i.extrude.setValues(P+3,0,-1),i.extrude.setValues(P+4,1,1),i.extrude.setValues(P+5,0,1)}if(p>0)for(let D=-6;D<0;D++)i.end.setVec(P+D,W)}a+=Q(m)}return i.buffer}_setUpVectors(e,n,i,s,a){const l=this._renderCoordsHelper.worldUpAtPosition(a,mt);if(n<s.length-3)for(let d=0;d<6;d++)e.startUp.setVec(i+d,l);if(n>0)for(let d=-6;d<0;d++)e.endUp.setVec(i+d,l)}};function Q(t){return 3*(2*(t.length/3-1))}const mt=h(),ee=h(),Pt=pe().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE).vec3f(o.START_UP).vec3f(o.END_UP),bt=pe().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE);class C extends Be{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}g([x()],C.prototype,"contrastControlEnabled",void 0),g([x()],C.prototype,"spherical",void 0);class y extends C{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}g([x()],y.prototype,"heightManifoldEnabled",void 0),g([x()],y.prototype,"pointDistanceEnabled",void 0),g([x()],y.prototype,"lineVerticalPlaneEnabled",void 0),g([x()],y.prototype,"intersectsLineEnabled",void 0);let w=class extends We{constructor(t){super(t),this.produces=X.LASERLINES,this.consumes={required:[X.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new y,this._pathTechniqueConfiguration=new C,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new _t;const e=t.view._stage.renderView.techniques,n=new C;n.contrastControlEnabled=t.contrastControlEnabled,e.precompile(q,n)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===j.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(q,this._pathTechniqueConfiguration),this._blit=new He(this._techniques,Fe.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=Ge(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this.requestRender(c.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(t){v(this._passParameters.heightManifoldTarget,t),this.requestRender(c.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this.requestRender(c.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(t){v(this._passParameters.pointDistanceTarget,t),this.requestRender(c.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(t){v(this._passParameters.pointDistanceOrigin,t),this.requestRender(c.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this.requestRender(c.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){U(t,this._passParameters.lineVerticalPlaneSegment),this.requestRender(c.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this.requestRender(c.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(t){U(t,this._passParameters.intersectsLineSegment),this.requestRender(c.UPDATE)}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this.requestRender(c.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,this._pathVerticalPlaneData!=null&&this.requestRender(c.UPDATE))}set pathVerticalPlaneVertices(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new K(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}set pathVerticalPlaneBuffers(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new K(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}setParameters(t){ke(this._passParameters,t)&&this.requestRender(c.UPDATE)}precompile(){this._acquireTechnique()}render(t){const e=t.find(({name:l})=>l===this.produces);if(!this.bindParameters.decorations||this._blit==null)return e;const n=this.renderingContext,i=t.find(({name:l})=>l==="normals");this._passParameters.normals=i==null?void 0:i.getTexture();const s=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return n.bindFramebuffer(e.fbo),s(),e;this._passParameters.colors=e.getTexture();const a=this.fboCache.acquire(e.fbo.width,e.fbo.height,"laser lines");return n.bindFramebuffer(a.fbo),n.setClearColor(0,0,0,0),n.clear(J.COLOR|J.DEPTH),s(),n.unbindTexture(e.getTexture()),this._blit.blend(n,a,e,this.bindParameters)||this.requestRender(c.UPDATE),a.release(),e}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===j.Global,this._techniques.get(pt,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const t=this._acquireTechnique();if(t.compiled){const e=this.renderingContext;e.bindTechnique(t,this.bindParameters,this._passParameters),e.screen.draw()}else this.requestRender(c.UPDATE)}_renderPath(){if(this._pathVerticalPlaneData==null)return;const t=this._techniques.get(q,this._pathTechniqueConfiguration);if(t.compiled){const e=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,e.bindTechnique(t,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(e)}else this.requestRender(c.UPDATE)}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const t=this.bindParameters.camera,e=this._passParameters;if(this._intersectsLineInfinite){if(Xe(Je(e.intersectsLineSegment.origin,e.intersectsLineSegment.vector),S),S.c0=-Number.MAX_VALUE,!Ze(t.frustum,S))return!1;Ke(S,e.lineStartWorld),Qe(S,e.lineEndWorld)}else v(e.lineStartWorld,e.intersectsLineSegment.origin),oe(e.lineEndWorld,e.intersectsLineSegment.origin,e.intersectsLineSegment.vector);return!0}get test(){}};g([T({constructOnly:!0})],w.prototype,"contrastControlEnabled",void 0),g([T({constructOnly:!0})],w.prototype,"isDecoration",void 0),g([T()],w.prototype,"produces",void 0),g([T()],w.prototype,"consumes",void 0),w=g([et("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],w);const S=Ye();class Ct extends it{constructor(e){super(e),this._angleCutoff=B,this._style={},this._heightManifoldTarget=h(),this._heightManifoldEnabled=!1,this._intersectsLine=N(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){e!=null?(v(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(e==null)return void(this.intersectsLine=null);const n=this.view.renderCoordsHelper.worldUpAtPosition(e,vt);this.intersectsLine=tt(e,n),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){e!=null?(U(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=e!=null?U(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=e!=null?{origin:Y(e.origin),target:e.target?Y(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new w({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){this._renderer!=null&&this._renderer.setParameters(this._style)}_syncAngleCutoff(){var e;(e=this._renderer)==null||e.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const e=this._pointDistanceLine,n=e!=null;this._renderer.pointDistanceEnabled=n&&e.target!=null&&this.visible,n&&(this._renderer.pointDistanceOrigin=e.origin,e.target!=null&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){this._renderer!=null&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const vt=h(),Dt=Object.freeze(Object.defineProperty({__proto__:null,build:fe,defaultAngleCutoff:B},Symbol.toStringTag,{value:"Module"})),wt=Object.freeze(Object.defineProperty({__proto__:null,build:_e},Symbol.toStringTag,{value:"Module"}));export{Ct as c};
