import{gX as $,hx as T,gZ as O,bS as P,bT as E,bU as F,bV as L,gY as M,he as R,hd as N,hy as U,z as _,hp as v,h6 as g,hz as x,hA as j,hB as J,U as b,cy as q,hC as A,h9 as V,hD as k,t as S,m as z,e as i,y as o,hE as I,bZ as Z,cs as B,b$ as C,a as D,X as G,hF as H}from"./index-uWjCvim1.js";import{m as K,f as W,t as X}from"./SublayersOwner-D9ySJQ5j.js";import{t as Y}from"./imageBitmapUtils-CoX0d2_m.js";import"./QueryTask-BGiGcDr5.js";import"./infoFor3D-DsOdlPuA.js";import"./executeForIds-NmR5dAuD.js";import"./executeQueryPBF-BgLpzoTj.js";let a=class extends $(T(O(K(W(P(E(F(L(M(R(N(G)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new U({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,t){var h,u,f;if(!this.loaded||!e)return;const s=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray();let n=!1;const m=v(t.origin);if((h=this.capabilities)!=null&&h.operations.supportsExportMap&&((f=(u=this.capabilities)==null?void 0:u.exportMap)!=null&&f.supportsDynamicLayers)){if(m===g.PORTAL_ITEM){const l=this.createSublayersForOrigin("service").sublayers;n=x(s,l,g.SERVICE)}else if(m>g.PORTAL_ITEM){const l=this.createSublayersForOrigin("portal-item");n=x(s,l.sublayers,v(l.origin))}}const c=[],d={writeSublayerStructure:n,...t};let y=n||this.hasVisibleLayersForOrigin(m);s.forEach(l=>{const w=l.write({},d);c.push(w),y=y||l.originOf("visible")==="user"}),c.some(l=>Object.keys(l).length>1)&&(r.layers=c),y&&(r.visibleLayers=s.filter(l=>l.visible).map(l=>l.id))}createExportImageParameters(e,r,p,t){const s=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=j({extent:e,width:r})*s;const n=this._exportImageParameters.toJSON(),m=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,d=J(c);n.dpi*=s;const y={};if(t!=null&&t.timeExtent){const{start:h,end:u}=t.timeExtent.toJSON();y.time=h&&u&&h===u?""+h:`${h??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:r+","+p,...n,...m,...y}}async fetchImage(e,r,p,t){const{data:s}=await this._fetchImage("image",e,r,p,t);return s}async fetchImageBitmap(e,r,p,t){const{data:s,url:n}=await this._fetchImage("blob",e,r,p,t);return Y(s,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await b(this.url,r),{extent:t,fullExtent:s,timeExtent:n}=p,m=t||s;return{fullExtent:m&&q.fromJSON(m),timeExtent:n&&A.fromJSON({start:n[0],end:n[1]})}}loadAll(){return V(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return k(this,e)}async _fetchImage(e,r,p,t,s){var c,d,y;const n={responseType:e,signal:(s==null?void 0:s.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(((c=n.query)==null?void 0:c.dynamicLayers)!=null&&!((y=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&y.supportsDynamicLayers))throw new S("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:h}=await b(m,n);return{data:h,url:m}}catch(h){throw z(h)?h:new S("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:h})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await b(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};i([o(I("dateFieldsTimeReference"))],a.prototype,"dateFieldsTimeZone",void 0),i([o({type:Boolean})],a.prototype,"datesInUnknownTimezone",void 0),i([o()],a.prototype,"dpi",void 0),i([o()],a.prototype,"gdbVersion",void 0),i([o()],a.prototype,"imageFormat",void 0),i([Z("imageFormat",["supportedImageFormatTypes"])],a.prototype,"readImageFormat",null),i([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],a.prototype,"imageMaxHeight",void 0),i([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],a.prototype,"imageMaxWidth",void 0),i([o()],a.prototype,"imageTransparency",void 0),i([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],a.prototype,"isReference",void 0),i([o({json:{read:!1,write:!1}})],a.prototype,"labelsVisible",void 0),i([o({type:["ArcGISMapServiceLayer"]})],a.prototype,"operationalLayerType",void 0),i([o({json:{read:!1,write:!1}})],a.prototype,"popupEnabled",void 0),i([o(I("preferredTimeReference"))],a.prototype,"preferredTimeZone",void 0),i([o()],a.prototype,"sourceJSON",void 0),i([o({json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),i([B("sublayers",{layers:{type:[X]},visibleLayers:{type:[H]}})],a.prototype,"writeSublayers",null),i([o({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([o({json:{read:!1},readOnly:!0,value:"map-image"})],a.prototype,"type",void 0),i([o(C)],a.prototype,"url",void 0),a=i([D("esri.layers.MapImageLayer")],a);const oe=a;export{oe as default};