import{t as u,bW as f,ce as m,ck as d,q as p,n as g,e as n,y as h,a as v}from"./index-CnMvbdm6.js";import{s as w,a as $}from"./LercDecoder-DmOyg8Hw.js";import{l as D}from"./LayerView3D-Bw9GC62b.js";import{p as T}from"./TiledLayerView3D-DOjzOkx9.js";import{y as b}from"./LayerView-CrGTOnVo.js";import"./WorkerHandle-BIlUISGu.js";let r=class extends T(D(b)){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var i,o,c;const e=this.view,t=(i=e.map)==null?void 0:i.allLayers,s=t&&t.includes(this.layer),a=(c=(o=e.map)==null?void 0:o.ground)==null?void 0:c.layers,l=a&&a.includes(this.layer);if(s&&!l){const y=new u("layerview:elevation-layer-only",`3D elevation layer '${this.layer.id}' can only be added to layers in map.ground`);this.addResolvingPromise(Promise.reject(y))}this._lercDecoder=w(e.resourceController),this._addTilingSchemeMatchPromise()}destroy(){this._lercDecoder=f(this._lercDecoder)}async fetchTile(e,t){const s=this.layer;if(m(s)){const o=await s.fetchTile(e[0],e[1],e[2],{noDataValue:d,signal:t.signal});return p(t)?void g.getLogger(this).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."):o}const a=this.getTileUrl(e),l=await t.requester.request(a,"binary",t),i=await this._lercDecoder.decode(l,{noDataValue:d},t.signal);if(i)return new $(i);throw new Error("LERC decoding failed")}};n([h()],r.prototype,"layer",void 0),n([h()],r.prototype,"tileInfo",null),r=n([v("esri.views.3d.layers.ElevationLayerView3D")],r);const V=r;export{V as default};