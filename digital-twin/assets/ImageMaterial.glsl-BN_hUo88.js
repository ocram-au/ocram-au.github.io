import{wX as $,wY as I,wZ as O,dV as l,w_ as c,w$ as b,x0 as S,x1 as w,x2 as A,x3 as p,x4 as C,r0 as D,x5 as u,x6 as N,_ as R,x7 as V,uv as v,e as i,x8 as o,lR as P,x9 as L,xa as M,xb as F,xc as j,xd as U,xe as z,xf as B,xg as G,xh as W,xi as k,xj as q,xk as H,xl as Q,xm as X,xn as Y,xo as Z,kH as g,xp as y,xq as _,xr as J,xs as K,xt as ee,xu as te,qG as se,xv as ae,xw as re,m3 as ie,xx as oe}from"./index-ClOzeblJ.js";function E(s){const e=new $,{vertex:t,fragment:a}=e;return I(t,s),e.include(O,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(b,s),e.include(S,s),a.uniforms.add(new w("tex",n=>n.texture),new A("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.transparencyPassType===p.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.include(C),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(D)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===p.ColorAlpha?c`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;`:""}
      ${s.output===u.ObjectAndLayerIdColor?c`
              fragColor = vec4(0,0,0,1);`:""}
    }
    `),e}const ne=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));class x extends L{initializeProgram(e){return new M(e.rctx,x.shader.get().build(this.configuration),T)}_setPipelineState(e,t){const a=this.configuration,n=e===p.NONE,d=e===p.FrontFace;return F({blending:a.output===u.Color&&a.transparent?n?le:j(e):null,culling:U(a.cullFace),depthTest:{func:z(e)},depthWrite:n?a.writeDepth?B:null:G(e),drawBuffers:W(e),colorWrite:k,stencilWrite:a.hasOccludees?q:null,stencilTest:a.hasOccludees?t?H:Q:null,polygonOffset:n||d?null:X(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}x.shader=new N(ne,()=>R(()=>Promise.resolve().then(()=>de),void 0));const le=V(v.ONE,v.ONE_MINUS_SRC_ALPHA);class r extends Y{constructor(){super(...arguments),this.output=u.Color,this.cullFace=P.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:u.COUNT})],r.prototype,"output",void 0),i([o({count:P.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:p.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const T=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);let fe=class extends Z{constructor(e){super(e,new ue),this.supportsEdges=!0,this.produces=new Map([[g.OPAQUE_MATERIAL,t=>y(t)||_(t)&&!this.parameters.transparent],[g.TRANSPARENT_MATERIAL,t=>_(t)&&this.parameters.transparent&&this.parameters.writeDepth],[g.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>_(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[g.DRAPED_MATERIAL,t=>_(t)||y(t)]]),this._vertexAttributeLocations=T,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<J,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new pe(e)}createBufferWriter(){const e=K.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new ce(e)}};class pe extends ee{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(x,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output===u.Color&&this._updateOccludeeState(e),this._updateParameters(e)}}class ce extends te{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){se(f.size===1);const m=n.getField(h,ae);m&&re(f,m,d)}else ie(h,f,e,t,n,d)}}}class ue extends oe{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=P.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const de=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));export{fe as g};