import{y0 as I,y5 as O,y2 as b,bq as l,x$ as c,y3 as A,y8 as S,yz as C,x_ as w,ya as p,y4 as x,t6 as D,y1 as u,yA as N,wb as v,e as i,yc as o,jM as P,yd as R,bY as L,ye as M,yf as V,yg as F,yh as j,yj as z,yk as B,yB as U,yl as G,ym as W,yn as H,yo as k,yC as q,yD as J,yE as K,yF as Q,yG as Y,mt as f,yH as E,yI as g,yJ as X,yK as Z,yL as ee,yM as te,sL as se,yN as ae,yO as re,nT as ie,yu as oe}from"./index-DenhEmYc.js";function T(s){const e=new I,{vertex:t,fragment:a}=e;return O(t,s),e.include(b,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(A,s),e.include(S,s),a.uniforms.add(new C("tex",n=>n.texture),new w("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.transparencyPassType===p.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.include(x),a.code.add(c`
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
    `),e}const ne=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class _ extends V{initializeProgram(e){return new F(e.rctx,_.shader.get().build(this.configuration),$)}_setPipelineState(e,t){const a=this.configuration,n=e===p.NONE,d=e===p.FrontFace;return j({blending:a.output===u.Color&&a.transparent?n?le:z(e):null,culling:B(a.cullFace),depthTest:{func:U(e)},depthWrite:n?a.writeDepth?G:null:W(e),drawBuffers:H(e),colorWrite:k,stencilWrite:a.hasOccludees?q:null,stencilTest:a.hasOccludees?t?J:K:null,polygonOffset:n||d?null:Q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new R(ne,()=>L(()=>Promise.resolve().then(()=>de),void 0));const le=N(v.ONE,v.ONE_MINUS_SRC_ALPHA);class r extends M{constructor(){super(...arguments),this.output=u.Color,this.cullFace=P.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:u.COUNT})],r.prototype,"output",void 0),i([o({count:P.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:p.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const $=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);let ye=class extends Y{constructor(e){super(e,new ue),this.supportsEdges=!0,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>E(t)||g(t)&&!this.parameters.transparent],[f.TRANSPARENT_MATERIAL,t=>g(t)&&this.parameters.transparent&&this.parameters.writeDepth],[f.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>g(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>g(t)||E(t)]]),this._vertexAttributeLocations=$,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<X,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new pe(e)}createBufferWriter(){const e=Z.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new ce(e)}};class pe extends ee{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output===u.Color&&this._updateOccludeeState(e),this._updateParameters(e)}}class ce extends te{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const y=a.attributes.get(h);if(y)if(h===l.PERSPECTIVEDIVIDE){se(y.size===1);const m=n.getField(h,ae);m&&re(y,m,d)}else ie(h,y,e,t,n,d)}}}class ue extends oe{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=P.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const de=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{ye as g};