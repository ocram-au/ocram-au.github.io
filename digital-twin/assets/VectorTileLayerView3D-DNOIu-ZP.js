import{pG as ze,pM as Ge,jf as ke,pK as Ve,N as qe,xc as Ye,f as Ne,gf as pe,ev as Ke,q8 as je,M as Xe,xf as me,tB as Q,p as Qe,lS as ge,x4 as V,pN as Y,sA as C,sB as A,yj as Z,yk as Ze,mk as ye,yl as Je,ym as le,yn as et,yo as tt,yp as it,yq as at,yr as oe,ys as nt,ct as st,o as rt,df as ot,uS as lt,yt as ct,wc as ht,pJ as J,n9 as F,k$ as B,yu as ve,yv as ie,sp as G,yw as ut,w2 as N,x7 as xe,yx as dt,vX as E,w0 as j,yy as ue,yz as re,c$ as we,F as ft,yA as _t,yB as pt,w as mt,e as gt,A as yt,q as vt,u as Se,r as W,m as q,a as xt}from"./index-BGUxYM9l.js";import{t as $}from"./Rect-BAnET0xx.js";import{u as wt}from"./rasterizingUtils-BkWUI0pa.js";import{Z as z,_ as $e,$ as Me}from"./definitions-DKtXO-DI.js";import{l as be}from"./StyleRepository-CQGf40_L.js";import{l as St}from"./LayerView3D-Ctou4QXc.js";import{p as Mt}from"./TiledLayerView3D-DII--Qtl.js";import{y as bt}from"./LayerView-BX05mm1U.js";let It=class{constructor(e,i,t){this._scale=e,this._shift=i,this._levelShift=t}getLevelRowColumn(e){const i=this.getLevelShift(e[0]),t=this._shift+i;return t?[e[0]-i,e[1]>>t,e[2]>>t]:e}getLevelShift(e){return Math.min(e,this._levelShift)}getOffset(e,i){let t=0,a=0;const n=this._shift+this.getLevelShift(e[0]);if(n){const s=(1<<n)-1,r=i/(this._scale*(1<<n-1));t=(e[2]&s)*r,a=(e[1]&s)*r}return[t,a]}getScale(e){return this._scale*(1<<this._shift+this.getLevelShift(e))}},ae=class{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new $(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new $;let t=null,a=-1;for(let n=0;n<this._free.length;++n){const s=this._free[n];e<=s.width&&i<=s.height&&(t===null||s.y<=t.y&&s.x<=t.x)&&(t=s,a=n)}return t===null?new $:(this._free.splice(a,1),t.width<t.height?(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new $(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new $(t.x,t.y+i,e,t.height-i))),new $(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}},Ie=class{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new ae(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],a=this._glyphSource,n=new Set,s=1/256;for(const o of i){const l=Math.floor(o*s);n.add(l)}const r=[];return n.forEach(o=>{const l=e+o;if(this._rangePromises.has(l))r.push(this._rangePromises.get(l));else{const c=a.getRange(e,o).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,c),r.push(c)}}),Promise.all(r).then(()=>{let o=this._glyphIndex[e];o||(o={},this._glyphIndex[e]=o);for(const l of i){const c=o[l];if(c){t[l]={sdf:!0,rect:c.rect,metrics:c.metrics,page:c.page,code:l};continue}const x=a.getGlyph(e,l);if(!(x!=null&&x.metrics))continue;const f=x.metrics;let y;if(f.width===0)y=new $(0,0,0,0);else{const u=f.width+6,_=f.height+2*3;let I=u%4?4-u%4:4,S=_%4?4-_%4:4;I===1&&(I=5),S===1&&(S=5),y=this._binPack.allocate(u+I,_+S),y.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new ae(this.width-4,this.height-4),y=this._binPack.allocate(u+I,_+S));const m=this._glyphData[this._currentPage],M=x.bitmap;let p,d;if(M)for(let v=0;v<_;v++){p=u*v,d=this.width*(y.y+v+1)+y.x;for(let b=0;b<u;b++)m[d+b+1]=M.at(p+b)}}o[l]={rect:y,metrics:f,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:y,metrics:f,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let a;for(const n in t)if(a=t[n],a.tileIDs.delete(e),a.tileIDs.size===0){const s=this._glyphData[a.page],r=a.rect;let o,l;for(let c=0;c<r.height;c++)for(o=this.width*(r.y+c)+r.x,l=0;l<r.width;l++)s[o+l]=0;delete t[n],this._dirties[a.page]=!0}}}bind(e,i,t,a=0){if(!this._textures[t]){const s=new ze;s.pixelFormat=Ge.ALPHA,s.wrapMode=ke.CLAMP_TO_EDGE,s.width=this.width,s.height=this.height,this._textures[t]=new Ve(e,s,new Uint8Array(this.width*this.height))}const n=this._textures[t];n.setSamplingMode(i),this._dirties[t]&&n.setData(this._glyphData[t]),e.bindTexture(n,a),this._dirties[t]=!1}destroy(){this.dispose()}dispose(){this._glyphData.length=0,this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}},de=class{constructor(e){if(this._metrics=[],!e)return void(this._allBitmaps=null);const i=new Map;let t=0;for(;e.next();)switch(e.tag()){case 1:{const s=e.getMessage();for(;s.next();)switch(s.tag()){case 3:{const r=s.getMessage();let o,l,c,x,f,y,g;for(;r.next();)switch(r.tag()){case 1:o=r.getUInt32();break;case 2:l=r.getBytes();break;case 3:c=r.getUInt32();break;case 4:x=r.getUInt32();break;case 5:f=r.getSInt32();break;case 6:y=r.getSInt32();break;case 7:g=r.getUInt32();break;default:r.skip()}if(r.release(),o){const u=(l==null?void 0:l.length)??0;this._metrics[o]={width:c,height:x,left:f,top:y,advance:g,startOffset:t,length:u},i.set(o,l),t+=u}break}default:s.skip()}s.release();break}default:e.skip()}const a=new Uint8Array(t),n=this._metrics;for(const[s,r]of i){const{startOffset:o,length:l}=n[s];if(r)for(let c=0;c<l;++c)a[o+c]=r[c]}this._allBitmaps=a}getMetrics(e){return this._metrics[e]}getBitmap(e){if(!this._allBitmaps)return;const i=this._metrics[e];if(i===void 0)return;const{startOffset:t,length:a}=i;return a!==0?new Dt(this._allBitmaps,t,a):void 0}},Pt=class{constructor(){this._ranges=[]}get ranges(){return this._ranges}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}},Pe=class{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const a=256*i,n=a+255;if(this._baseURL){const s=this._baseURL.replace("{fontstack}",e).replace("{range}",a+"-"+n);return qe(s,{responseType:"array-buffer"}).then(r=>{t.addRange(i,new de(new Ye(new Uint8Array(r.data),new DataView(r.data))))}).catch(()=>{t.addRange(i,new de)})}return t.addRange(i,new de),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const a=Math.floor(i/256),n=t.getRange(a);return n?{metrics:n.getMetrics(i),bitmap:n.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new Pt),i}},Dt=class{constructor(e,i,t){this._array=e,this._start=i,this.length=t}at(e){return 0<=e&&e<this.length?this._array[this._start+e]:void 0}};const Tt="dasharray-";let De=class Fe{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,i<=0&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new ae(e-4,i-4)}destroy(){this.dispose()}dispose(){this._binPack=null,this._mosaicsData.length=0,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new ae(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),a=new Uint32Array(i*t);this._mosaicsData[0]=a,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,a,n=this._mosaicRects[e];if(n)return n;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(Tt)?([t,a]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!(t!=null&&t.width)||!t.height||t.width<0||t.height<0))return null;const s=t.width,r=t.height,[o,l,c]=this._allocateImage(s,r);return o.width<=0?null:(this._copy(o,t,l,c,i,a),n={type:"sprite",rect:o,width:s,height:r,sdf:t.sdf,simplePattern:!1,rasterizationScale:t.pixelRatio??1,samplingMode:"Linear",page:l},this._mosaicRects[e]=n,n)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),a=t==null?void 0:t.rect;if(!a)return null;a.width=t.width,a.height=t.height;const n=t.width,s=t.height,r=2;return{tl:[a.x+r,a.y+r],br:[a.x+r+n,a.y+r+s],page:t.page}}bind(e,i,t=0,a=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;if(!this._textures[t]){const s=new ze;s.wrapMode=ke.CLAMP_TO_EDGE,s.width=this._size[t][0],s.height=this._size[t][1],this._textures[t]=new Ve(e,s,new Uint8Array(this._mosaicsData[t].buffer))}const n=this._textures[t];n.setSamplingMode(i),this._dirties[t]&&n.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(n,a),this._dirties[t]=!1}static _copyBits(e,i,t,a,n,s,r,o,l,c,x){let f=a*i+t,y=o*s+r;if(x){y-=s;for(let g=-1;g<=c;g++,f=((g+c)%c+a)*i+t,y+=s)for(let u=-1;u<=l;u++)n[y+u]=e[f+(u+l)%l]}else for(let g=0;g<c;g++){for(let u=0;u<l;u++)n[y+u]=e[f+u];f+=i,y+=s}}_copy(e,i,t,a,n,s){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const r=new Uint32Array(s?s.buffer:this._sprites.image.buffer),o=this._mosaicsData[t],l=2,c=s?i.width:this._sprites.width;Fe._copyBits(r,c,i.x,i.y,o,a[0],e.x+l,e.y+l,i.width,i.height,n),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const r=new $(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[r,this._mosaicsData.length-1,[e,i]]}let a=e%4?4-e%4:4,n=i%4?4-i%4:4;a===1&&(a=5),n===1&&(n=5);const s=this._binPack.allocate(e+a,i+n);return s.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new ae(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[s,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const a=t[1].split(",").map(Number),n=e.slice(e.lastIndexOf("-")+1),[s,r,o]=wt(a,n);return[{x:0,y:0,width:r,height:o,sdf:!0,pixelRatio:1},new Uint8Array(s.buffer)]}},Rt=class{constructor(e,i,t,a){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._sourceDataMaxLOD=a,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){var e,i,t;(e=this._connection)==null||e.close(),this._connection=null,this._styleRepository=null,this._layer=null,(i=this._spriteMosaic)==null||i.destroy(),this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=Ne(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&((t=this._startOptionsInputSignal)==null||t.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._requestSprite(e);const i=this._layer.currentStyleInfo.glyphsUrl,t=new Pe(i?pe(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new Ie(1024,1024,t),this._broadcastPromise=Ke("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(a=>{var n;if(this._layer&&((n=this._connection)==null||n.close(),this._connection=a,this._layer&&!this._connection.closed)){const s=a.broadcast("setStyle",{style:this._layer.currentStyleInfo.style,sourceDataMaxLOD:this._sourceDataMaxLOD},e);Promise.all(s).catch(r=>je(r))}})}_requestSprite(e){var s,r;(s=this._spriteSourceAbortController)==null||s.abort();const i=new AbortController;this._spriteSourceAbortController=i;const t=e==null?void 0:e.signal;this._inputSignalEventListener&&((r=this._startOptionsInputSignal)==null||r.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,t&&(this._inputSignalEventListener=Ct(i),t.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:a}=i,n={...e,signal:a};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,n),this._spriteSourcePromise.then(o=>{Xe(a),this._spriteMosaic=new De(1024,1024,250),this._spriteMosaic.setSpriteSource(o)})}async updateStyle(e){const i=[];for(const t of e)t.type===me.SPRITES_CHANGED?i.push({type:me.SPRITES_CHANGED,data:{spriteSource:null}}):i.push(t);return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",i)),this._broadcastPromise}setSpriteSource(e){const i=new De(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),this._spriteSourceAbortController=null,i}async setStyle(e,i,t){await this._broadcastPromise,this._styleRepository=e,this._sourceDataMaxLOD=t,this._requestSprite();const a=new Pe(this._layer.currentStyleInfo.glyphsUrl?pe(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new Ie(1024,1024,a),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",{style:i,sourceDataMaxLOD:this._sourceDataMaxLOD})),this._broadcastPromise}async fetchTileData(e,i){const t=await this._getRefKeys(e,i);return this._getSourcesData(Object.keys(this._layer.sourceNameToSource),t,i)}async fetchTilePBFs(e){const i=Object.keys(this._layer.sourceNameToSource),t={},a=await this._getRefKeys(e,t),n=[],s=[];for(let r=0;r<a.length;r++)if(a[r].value==null||i[r]==null)s.push(null);else{const o=a[r].value,l=this._getTilePayload(o,i[r],t);l.then(c=>{n.push({...c,key:o})}),s.push(l)}return Promise.all(s).then(()=>n)}async parseTileData(e,i){const t=e&&e.data;if(!t)return null;const{sourceName2DataAndRefKey:a,transferList:n}=t;return Object.keys(a).length===0?null:this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:a,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:n}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const a=Q.pool.acquire(e.id),n=this._layer.sourceNameToSource[i],{level:s,row:r,col:o}=a;Q.pool.release(a);try{return{protobuff:await n.requestTile(s,r,o,t),sourceName:i}}catch(l){if(Qe(l))throw l;return{protobuff:null,sourceName:i}}}async _getRefKeys(e,i){const t=this._layer.sourceNameToSource,a=new Array;for(const n in t){const s=t[n].getRefKey(e,i);a.push(s)}return ge(a)}_getSourcesData(e,i,t){const a=[];for(let n=0;n<i.length;n++)if(i[n].value==null||e[n]==null)a.push(null);else{const s=i[n].value,r=this._getTilePayload(s,e[n],t);a.push(r)}return ge(a).then(n=>{const s={},r=[];for(let o=0;o<n.length;o++){const l=n[o].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const c=i[o].value.id;s[l.sourceName]={refKey:c,protobuff:l.protobuff},r.push(l.protobuff)}}return{sourceName2DataAndRefKey:s,transferList:r}})}};function Ct(h){return()=>h.abort()}let ce=class{constructor(e,i){this.layerUIDs=[],this.isDestroyed=!1,this._data=e;let t=1;const a=new Uint32Array(e);this.layerUIDs=[];const n=a[t++];for(let s=0;s<n;s++)this.layerUIDs[s]=a[t++];this.bufferDataOffset=t,i&&(this.layer=i.getStyleLayerByUID(this.layerUIDs[0]))}get isPreparedForRendering(){return this._data==null}get offset(){return this.bufferDataOffset}get data(){return this._data}destroy(){this.isDestroyed||(this.doDestroy(),this._data=null,this.isDestroyed=!0)}prepareForRendering(e){this._data!=null&&(this.doPrepareForRendering(e,this._data,this.bufferDataOffset),this._data=null)}},At=class extends ce{constructor(e,i){super(e,i),this.type=V.LINE,this.lineIndexStart=0,this.lineIndexCount=0;const t=new Uint32Array(e);let a=this.bufferDataOffset;this.lineIndexStart=t[a++],this.lineIndexCount=t[a++];const n=t[a++];if(n>0){this.patternMap=new Map;for(let s=0;s<n;s++){const r=t[a++],o=t[a++],l=t[a++];this.patternMap.set(r,[o,l])}}this.bufferDataOffset=a}get usedMemory(){var e,i;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((i=this.vao)==null?void 0:i.cachedMemory)??0)}hasData(){return this.lineIndexCount>0}triangleCount(){return this.lineIndexCount/3}doDestroy(){this.vao=Y(this.vao)}doPrepareForRendering(e,i,t){const a=new Uint32Array(i),n=new Int32Array(a.buffer),s=a[t++],r=C.createVertex(e,A.STATIC_DRAW,new Int32Array(n.buffer,4*t,s));t+=s;const o=a[t++],l=C.createIndex(e,A.STATIC_DRAW,new Uint32Array(a.buffer,4*t,o));t+=o;const c=this.layer.lineMaterial;this.vao=new Z(e,c.getAttributeLocations(),c.getLayoutInfo(),new Map([["geometry",r]]),l)}},Lt=class extends ce{constructor(e,i){super(e,i),this.type=V.FILL,this.fillIndexStart=0,this.fillIndexCount=0,this.outlineIndexStart=0,this.outlineIndexCount=0;const t=new Uint32Array(e);let a=this.bufferDataOffset;this.fillIndexStart=t[a++],this.fillIndexCount=t[a++],this.outlineIndexStart=t[a++],this.outlineIndexCount=t[a++];const n=t[a++];if(n>0){this.patternMap=new Map;for(let s=0;s<n;s++){const r=t[a++],o=t[a++],l=t[a++];this.patternMap.set(r,[o,l])}}this.bufferDataOffset=a}get usedMemory(){var e,i,t;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((i=this.fillVAO)==null?void 0:i.cachedMemory)??0)+(((t=this.outlineVAO)==null?void 0:t.cachedMemory)??0)}hasData(){return this.fillIndexCount>0||this.outlineIndexCount>0}triangleCount(){return(this.fillIndexCount+this.outlineIndexCount)/3}doDestroy(){this.fillVAO=Y(this.fillVAO),this.outlineVAO=Y(this.outlineVAO)}doPrepareForRendering(e,i,t){const a=new Uint32Array(i),n=new Int32Array(a.buffer),s=a[t++],r=C.createVertex(e,A.STATIC_DRAW,new Int32Array(n.buffer,4*t,s));t+=s;const o=a[t++],l=C.createIndex(e,A.STATIC_DRAW,new Uint32Array(a.buffer,4*t,o));t+=o;const c=a[t++],x=C.createVertex(e,A.STATIC_DRAW,new Int32Array(n.buffer,4*t,c));t+=c;const f=a[t++],y=C.createIndex(e,A.STATIC_DRAW,new Uint32Array(a.buffer,4*t,f));t+=f;const g=this.layer,u=g.fillMaterial,_=g.outlineMaterial;this.fillVAO=new Z(e,u.getAttributeLocations(),u.getLayoutInfo(),new Map([["geometry",r]]),l),this.outlineVAO=new Z(e,_.getAttributeLocations(),_.getLayoutInfo(),new Map([["geometry",x]]),y)}},Et=class extends ce{constructor(e,i,t){super(e,i),this.type=V.SYMBOL,this.iconPerPageElementsMap=new Map,this.glyphPerPageElementsMap=new Map,this.symbolInstances=[],this.isIconSDF=!1,this.opacityChanged=!1,this.lastOpacityUpdate=0,this.symbols=[];const a=new Uint32Array(e),n=new Int32Array(e),s=new Float32Array(e);let r=this.bufferDataOffset;this.isIconSDF=!!a[r++];const o=a[r++],l=a[r++],c=a[r++],x=new Q(o,l,c,0),f=a[r++];for(let _=0;_<f;_++){const I=a[r++],S=a[r++],m=a[r++];this.iconPerPageElementsMap.set(I,[S,m])}const y=a[r++];for(let _=0;_<y;_++){const I=a[r++],S=a[r++],m=a[r++];this.glyphPerPageElementsMap.set(I,[S,m])}const g=a[r++],u=a[r++];this.iconOpacity=new Int32Array(g),this.textOpacity=new Int32Array(u),r=Ze(a,n,s,r,this.symbols,t,x),this.bufferDataOffset=r}get usedMemory(){var e,i,t;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((i=this.iconVAO)==null?void 0:i.cachedMemory)??0)+(((t=this.textVAO)==null?void 0:t.cachedMemory)??0)+ye(this.iconOpacity)+ye(this.textOpacity)}hasData(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0}triangleCount(){let e=0;for(const i of this.iconPerPageElementsMap.values())e+=i[1];for(const i of this.glyphPerPageElementsMap.values())e+=i[1];return e/3}doDestroy(){this.iconVAO=Y(this.iconVAO),this.textVAO=Y(this.textVAO)}updateOpacityInfo(){if(!this.opacityChanged)return;this.opacityChanged=!1;const e=this.iconOpacity,i=this.iconVAO.vertexBuffers.get("opacity");e.length>0&&e.byteLength===i.usedMemory&&i.setSubData(e,0,0,e.length);const t=this.textOpacity,a=this.textVAO.vertexBuffers.get("opacity");t.length>0&&t.byteLength===a.usedMemory&&a.setSubData(t,0,0,t.length)}doPrepareForRendering(e,i,t){const a=new Uint32Array(i),n=new Int32Array(a.buffer),s=a[t++],r=C.createVertex(e,A.STATIC_DRAW,new Int32Array(n.buffer,4*t,s));t+=s;const o=a[t++],l=C.createIndex(e,A.STATIC_DRAW,new Uint32Array(a.buffer,4*t,o));t+=o;const c=a[t++],x=C.createVertex(e,A.STATIC_DRAW,new Int32Array(n.buffer,4*t,c));t+=c;const f=a[t++],y=C.createIndex(e,A.STATIC_DRAW,new Uint32Array(a.buffer,4*t,f));t+=f;const g=C.createVertex(e,A.STATIC_DRAW,this.iconOpacity.buffer),u=C.createVertex(e,A.STATIC_DRAW,this.textOpacity.buffer),_=this.layer,I=_.iconMaterial,S=_.textMaterial;this.iconVAO=new Z(e,I.getAttributeLocations(),I.getLayoutInfo(),new Map([["geometry",r],["opacity",g]]),l),this.textVAO=new Z(e,S.getAttributeLocations(),S.getLayoutInfo(),new Map([["geometry",x],["opacity",u]]),y)}},Ut=class extends ce{constructor(e,i){super(e,i),this.type=V.CIRCLE,this.circleIndexStart=0,this.circleIndexCount=0;const t=new Uint32Array(e);let a=this.bufferDataOffset;this.circleIndexStart=t[a++],this.circleIndexCount=t[a++],this.bufferDataOffset=a}get usedMemory(){var e,i;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((i=this.vao)==null?void 0:i.cachedMemory)??0)}hasData(){return this.circleIndexCount>0}triangleCount(){return this.circleIndexCount/3}doDestroy(){this.vao=Y(this.vao)}doPrepareForRendering(e,i,t){const a=new Uint32Array(i),n=new Int32Array(a.buffer),s=a[t++],r=C.createVertex(e,A.STATIC_DRAW,new Int32Array(n.buffer,4*t,s));t+=s;const o=a[t++],l=C.createIndex(e,A.STATIC_DRAW,new Uint32Array(a.buffer,4*t,o));t+=o;const c=this.layer.circleMaterial;this.vao=new Z(e,c.getAttributeLocations(),c.getLayoutInfo(),new Map([["geometry",r]]),l)}};class fe extends Je{constructor(e,i,t,a,n,s,r,o=null){super(e,i,t,a,n,s,4096,4096),this.styleRepository=r,this._memCache=o,this.type="vector-tile",this._referenced=1,this._hasSymbolBuckets=!1,this._usedMemory=256,this.layerData=new Map,this.status="loading",this.allSymbolsFadingOut=!1,this.lastOpacityUpdate=0,this.symbols=new Map,this.isCoverage=!1,this.neededForCoverage=!1,this.decluttered=!1,this.parentTile=null,this.childrenTiles=new Set,this.featureIndex=null,this.triangleCount=0,this._processed=!1,this.id=e.id}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<le}get isHoldingForFade(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<le)}get wasRequested(){return this.status==="errored"||this.status==="loaded"||this.status==="reloading"}setData(e){this.changeDataImpl(e),this.requestRender(),this.ready(),this._processed=!0}deleteLayerData(e){var t,a;let i=!1;for(const n of e){const s=this.layerData.get(n);s&&(this._usedMemory-=s.usedMemory,s.type===V.SYMBOL&&this.symbols.delete(n)&&(i=!0),s.destroy(),this.layerData.delete(n))}(t=this._memCache)==null||t.updateSize(this.key.id,this),i&&((a=this.featureIndex)==null||a.clear(),this.emit("symbols-changed")),this.requestRender()}processed(){return this._processed}hasData(){return this.layerData.size>0}hasFeatures(){const e=this.layerData.values();for(const i of e)if(i.hasData())return!0;return!1}dispose(){this.status!=="unloaded"&&(fe._destroyRenderBuckets(this.layerData),this.layerData.clear(),this.featureIndex=null,this._usedMemory=0,this.destroy(),this.status="unloaded")}release(){--this._referenced==0&&(this.dispose(),this.stage=null)}retain(){++this._referenced}get cachedMemory(){return this._usedMemory}get usedMemory(){return this._usedMemory}get usedMemoryPerReference(){return this._usedMemory/(this._referenced||1)}changeDataImpl(e){var t,a;(t=this.featureIndex)==null||t.clear();let i=!1;if(e){const{bucketsWithData:n,emptyBuckets:s}=e,r=this._createRenderBuckets(n);if(s&&s.byteLength>0){const o=new Uint32Array(s);for(const l of o)this._deleteLayerData(l)}for(const[o,l]of r)this._deleteLayerData(o),l.type===V.SYMBOL&&(this.symbols.set(o,l.symbols),i=!0),this._usedMemory+=l.usedMemory,this.layerData.set(o,l);(a=this._memCache)==null||a.updateSize(this.key.id,this)}this._hasSymbolBuckets=!1;for(const n of this.layerData.values())n.type===V.SYMBOL&&(this._hasSymbolBuckets=!0);i&&this.emit("symbols-changed")}attachWithContext(e){this.stage={context:e,trashDisplayObject(i){i.processDetach()},untrashDisplayObject:()=>!1}}setTransform(e){super.setTransform(e);const i=this.resolution/(e.resolution*e.pixelRatio),t=this.width/this.rangeX*i,a=this.height/this.rangeY*i,n=[0,0];e.toScreen(n,[this.x,this.y]);const s=this.transforms.tileUnitsToPixels;et(s),tt(s,s,n),it(s,s,Math.PI*e.rotation/180),at(s,s,[t,a,1])}_createTransforms(){return{displayViewScreenMat3:oe(),tileMat3:oe(),tileUnitsToPixels:oe()}}static _destroyRenderBuckets(e){if(!e)return;const i=new Set;for(const t of e.values())i.has(t)||(t.destroy(),i.add(t));e.clear()}_createRenderBuckets(e){const i=new Map,t=new Map;for(const a of e){const n=this._deserializeBucket(a,t);for(const s of n.layerUIDs)i.set(s,n)}return i}_deserializeBucket(e,i){let t=i.get(e);if(t)return t;switch(new Uint32Array(e)[0]){case V.FILL:t=new Lt(e,this.styleRepository);break;case V.LINE:t=new At(e,this.styleRepository);break;case V.SYMBOL:t=new Et(e,this.styleRepository,this);break;case V.CIRCLE:t=new Ut(e,this.styleRepository)}return i.set(e,t),t}_deleteLayerData(e){if(!this.layerData.has(e))return;const i=this.layerData.get(e);this._usedMemory-=i.usedMemory,i.destroy(),this.layerData.delete(e)}}let Ot=class extends nt{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=Q.pool.acquire(e),t=i.level===0?null:Q.getId(i.level-1,i.row>>1,i.col>>1,i.world);return Q.pool.release(i),t}getTileCoverage(e,i,t=!0,a){const n=super.getTileCoverage(e,i,t,a);if(!n)return n;const s=1<<n.lodInfo.level;return n.spans=n.spans.filter(r=>r.row>=0&&r.row<s),n}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,a;for(let n=0;n<i.length-1;n++)if(a=i[n+1],e>a.scale)return t=i[n],t.level+(t.scale-e)/(t.scale-a.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],a=this.tileInfo.spatialReference;i=st.create({size:t,spatialReference:a}).lods.map(n=>({level:n.level,resolution:n.resolution,scale:n.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}},Te=class extends Rt{constructor(e,i,t,a){super(e,i,t,e.tileInfo.lods.length-1),this._memCache=a,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new Ot(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i){const t=new Q(e[0],e[1],e[2],0);let a=this._memCache.get(t.id);if(a)return a.retain(),a;const n=await this._getVectorTileData(t);if(rt(i),!this._layer)return null;if(a=this._memCache.get(t.id),a)return a.retain(),a;const s=this._layer.tileInfo.getTileBounds(ot(),t),r=this._tileInfoView.getTileResolution(e[0]);return a=new fe(t,r,s[0],s[3],512,512,this._styleRepository,this._memCache),a.setData(n),n&&(a.retain(),this._memCache.put(t.id,a,lt)),a.neededForCoverage=!0,a.transforms.tileUnitsToPixels=ct(1/8,0,0,0,1/8,0,0,0,1),a}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,a={signal:t.signal},n=this._getParsedVectorTileData(e,a).then(s=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),s)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,n),this._ongoingRequestToController.set(i,t),n}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}},ne=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const a of i)a.visible&&this.draw(e,a,t)}},zt=class extends ne{constructor(){super(...arguments),this._color=ht(1,0,0,1),this._patternMatrix=oe(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:a,requestRender:n,allowDelayedRender:s}=e;this._loadWGLResources(e);const r=e.displayLevel,o=e.styleLayer,l=o.backgroundMaterial,c=a.vectorTilesMaterialManager,x=o.getPaintValue("background-color",r),f=o.getPaintValue("background-opacity",r),y=o.getPaintValue("background-pattern",r),g=y!==void 0,u=1|window.devicePixelRatio,_=e.spriteMosaic;let I,S;const m=u>$e?2:1,M=this._programOptions;M.pattern=g;const p=c.getMaterialProgram(t,l,M);if(!s||n==null||p.compiled){if(t.bindVAO(this._vao),t.useProgram(p),g){const d=_.getMosaicItemPosition(y,!0);if(d!=null){const{tl:v,br:b,page:w}=d;I=b[0]-v[0],S=b[1]-v[1];const R=_.getPageSize(w);R!=null&&(_.bind(t,J.LINEAR,w,z),p.setUniform4f("u_tlbr",v[0],v[1],b[0],b[1]),p.setUniform2fv("u_mosaicSize",R),p.setUniform1i("u_texture",z))}p.setUniform1f("u_opacity",f)}else{const d=x[3]*f;this._color[0]=d*x[0],this._color[1]=d*x[1],this._color[2]=d*x[2],this._color[3]=d,p.setUniform4fv("u_color",this._color)}p.setUniform1f("u_depth",o.z||0);for(const d of i){if(p.setUniform1f("u_coord_range",d.rangeX),p.setUniformMatrix3fv("u_dvsMat3",d.transforms.displayViewScreenMat3),g){const v=Math.max(2**(Math.round(r)-d.key.level),1),b=m*d.width*v,w=b/ve(I),R=b/ve(S);this._patternMatrix[0]=w,this._patternMatrix[4]=R,p.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(F.EQUAL,0,255),t.drawArrays(B.TRIANGLE_STRIP,0,4)}}else n()}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,a=t.backgroundMaterial,n=new Int8Array([0,0,1,0,0,1,1,1]),s=C.createVertex(i,A.STATIC_DRAW,n),r=new Z(i,a.getAttributeLocations(),a.getLayoutInfo(),new Map([["geometry",s]]));this._vao=r}},kt=class extends ne{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:a,requiredLevel:n,state:s,painter:r,spriteMosaic:o,styleLayerUID:l,requestRender:c,allowDelayedRender:x}=e;if(!i.some(p=>{var d;return((d=p.layerData.get(l))==null?void 0:d.circleIndexCount)??!1}))return;const f=e.styleLayer,y=f.circleMaterial,g=r.vectorTilesMaterialManager,u=1.2,_=f.getPaintValue("circle-translate",a),I=f.getPaintValue("circle-translate-anchor",a),S=this._programOptions,m=g.getMaterialProgram(t,y,S);if(x&&c!=null&&!m.compiled)return void c();t.useProgram(m),m.setUniformMatrix3fv("u_displayMat3",I===ie.VIEWPORT?s.displayMat3:s.displayViewMat3),m.setUniform2fv("u_circleTranslation",_),m.setUniform1f("u_depth",f.z),m.setUniform1f("u_antialiasingWidth",u);let M=-1;for(const p of i){if(!p.layerData.has(l))continue;p.key.level!==M&&(M=p.key.level,y.setDataUniforms(m,a,f,M,o));const d=p.layerData.get(l);if(!d.circleIndexCount)continue;d.prepareForRendering(t);const v=d.vao;v!=null&&(t.bindVAO(v),m.setUniformMatrix3fv("u_dvsMat3",p.transforms.displayViewScreenMat3),n!==p.key.level?t.setStencilFunction(F.EQUAL,p.stencilRef,255):t.setStencilFunction(F.GREATER,255,255),t.drawElements(B.TRIANGLES,d.circleIndexCount,G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*d.circleIndexStart),p.triangleCount+=d.circleIndexCount/3)}}};const Re=1/65536;let Vt=class extends ne{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,renderPass:a,spriteMosaic:n,styleLayerUID:s}=e;let r=!1;for(const m of i)if(m.layerData.has(s)){const M=m.layerData.get(s);if(M.fillIndexCount>0||M.outlineIndexCount>0){r=!0;break}}if(!r)return;const o=e.styleLayer,l=o.getPaintProperty("fill-pattern"),c=l!==void 0,x=c&&l.isDataDriven;let f;if(c&&!x){const m=l.getValue(t);f=n.getMosaicItemPosition(m,!0)}const y=!c&&o.getPaintValue("fill-antialias",t);let g=!0,u=1;if(!c){const m=o.getPaintProperty("fill-color"),M=o.getPaintProperty("fill-opacity");if(!(m!=null&&m.isDataDriven)&&!(M!=null&&M.isDataDriven)){const p=o.getPaintValue("fill-color",t);u=o.getPaintValue("fill-opacity",t)*p[3],u>=1&&(g=!1)}}if(g&&a==="opaque")return;const _=o.getPaintValue("fill-translate",t),I=o.getPaintValue("fill-translate-anchor",t);(g||a!=="translucent")&&this._drawFill(e,s,o,i,_,I,c,f,x);const S=!o.hasDataDrivenOutlineColor&&o.outlineUsesFillColor&&u<1;y&&a!=="opaque"&&!S&&this._drawOutline(e,s,o,i,_,I)}_drawFill(e,i,t,a,n,s,r,o,l){if(r&&!l&&o==null)return;const{context:c,displayLevel:x,state:f,painter:y,pixelRatio:g,spriteMosaic:u,requestRender:_,allowDelayedRender:I}=e,S=t.fillMaterial,m=y.vectorTilesMaterialManager,M=g>$e?2:1,p=this._fillProgramOptions;p.pattern=r;const d=m.getMaterialProgram(c,S,p);if(I&&_!=null&&!d.compiled)return void _();if(c.useProgram(d),o!=null){const{page:b}=o,w=u.getPageSize(b);w!=null&&(u.bind(c,J.LINEAR,b,z),d.setUniform2fv("u_mosaicSize",w),d.setUniform1i("u_texture",z))}d.setUniformMatrix3fv("u_displayMat3",s===ie.VIEWPORT?f.displayMat3:f.displayViewMat3),d.setUniform2fv("u_fillTranslation",n),d.setUniform1f("u_depth",t.z+Re);let v=-1;for(const b of a){if(!b.layerData.has(i))continue;b.key.level!==v&&(v=b.key.level,S.setDataUniforms(d,x,t,v,u));const w=b.layerData.get(i);if(!w.fillIndexCount)continue;w.prepareForRendering(c);const R=w.fillVAO;if(R!=null){if(c.bindVAO(R),d.setUniformMatrix3fv("u_dvsMat3",b.transforms.displayViewScreenMat3),c.setStencilFunction(F.EQUAL,b.stencilRef,255),r){const P=Math.max(2**(Math.round(x)-b.key.level),1),T=b.rangeX/(M*b.width*P);d.setUniform1f("u_patternFactor",T)}if(l){const P=w.patternMap;if(!P)continue;for(const[T,L]of P){const K=u.getPageSize(T);K!=null&&(u.bind(c,J.LINEAR,T,z),d.setUniform2fv("u_mosaicSize",K),d.setUniform1i("u_texture",z),c.drawElements(B.TRIANGLES,L[1],G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L[0]))}}else c.drawElements(B.TRIANGLES,w.fillIndexCount,G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*w.fillIndexStart);b.triangleCount+=w.fillIndexCount/3}}}_drawOutline(e,i,t,a,n,s){const{context:r,displayLevel:o,state:l,painter:c,pixelRatio:x,spriteMosaic:f,requestRender:y,allowDelayedRender:g}=e,u=t.outlineMaterial,_=c.vectorTilesMaterialManager,I=.75/x,S=this._outlineProgramOptions,m=_.getMaterialProgram(r,u,S);if(g&&y!=null&&!m.compiled)return void y();r.useProgram(m),m.setUniformMatrix3fv("u_displayMat3",s===ie.VIEWPORT?l.displayMat3:l.displayViewMat3),m.setUniform2fv("u_fillTranslation",n),m.setUniform1f("u_depth",t.z+Re),m.setUniform1f("u_outline_width",I);let M=-1;for(const p of a){if(!p.layerData.has(i))continue;p.key.level!==M&&(M=p.key.level,u.setDataUniforms(m,o,t,M,f));const d=p.layerData.get(i);if(d.prepareForRendering(r),!d.outlineIndexCount)continue;const v=d.outlineVAO;v!=null&&(r.bindVAO(v),m.setUniformMatrix3fv("u_dvsMat3",p.transforms.displayViewScreenMat3),r.setStencilFunction(F.EQUAL,p.stencilRef,255),r.drawElements(B.TRIANGLES,d.outlineIndexCount,G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*d.outlineIndexStart),p.triangleCount+=d.outlineIndexCount/3)}}},Nt=class extends ne{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:a,state:n,painter:s,pixelRatio:r,spriteMosaic:o,styleLayerUID:l,requestRender:c,allowDelayedRender:x}=e;if(!i.some(P=>{var T;return((T=P.layerData.get(l))==null?void 0:T.lineIndexCount)??!1}))return;const f=e.styleLayer,y=f.lineMaterial,g=s.vectorTilesMaterialManager,u=f.getPaintValue("line-translate",a),_=f.getPaintValue("line-translate-anchor",a),I=f.getPaintProperty("line-pattern"),S=I!==void 0,m=S&&I.isDataDriven;let M,p;if(S&&!m){const P=I.getValue(a);M=o.getMosaicItemPosition(P)}let d=!1;if(!S){const P=f.getPaintProperty("line-dasharray");if(p=P!==void 0,d=p&&P.isDataDriven,p&&!d){const T=P.getValue(a),L=f.getDashKey(T,f.getLayoutValue("line-cap",a));M=o.getMosaicItemPosition(L)}}const v=1/r,b=this._programOptions;b.pattern=S,b.sdf=p;const w=g.getMaterialProgram(t,y,b);if(x&&c!=null&&!w.compiled)return void c();if(t.useProgram(w),w.setUniformMatrix3fv("u_displayViewMat3",n.displayViewMat3),w.setUniformMatrix3fv("u_displayMat3",_===ie.VIEWPORT?n.displayMat3:n.displayViewMat3),w.setUniform2fv("u_lineTranslation",u),w.setUniform1f("u_depth",f.z),w.setUniform1f("u_antialiasing",v),M&&M!=null){const{page:P}=M,T=o.getPageSize(P);T!=null&&(o.bind(t,J.LINEAR,P,z),w.setUniform2fv("u_mosaicSize",T),w.setUniform1i("u_texture",z))}let R=-1;for(const P of i){if(!P.layerData.has(l))continue;P.key.level!==R&&(R=P.key.level,y.setDataUniforms(w,a,f,R,o));const T=2**(a-R)/r;w.setUniform1f("u_zoomFactor",T);const L=P.layerData.get(l);if(!L.lineIndexCount)continue;L.prepareForRendering(t);const K=L.vao;if(K!=null){if(t.bindVAO(K),w.setUniformMatrix3fv("u_dvsMat3",P.transforms.displayViewScreenMat3),t.setStencilFunction(F.EQUAL,P.stencilRef,255),m||d){const se=L.patternMap;if(!se)continue;for(const[D,ee]of se){const O=o.getPageSize(D);O!=null&&(o.bind(t,J.LINEAR,D,z),w.setUniform2fv("u_mosaicSize",O),w.setUniform1i("u_texture",z),t.drawElements(B.TRIANGLES,ee[1],G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*ee[0]))}}else t.drawElements(B.TRIANGLES,L.lineIndexCount,G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L.lineIndexStart);P.triangleCount+=L.lineIndexCount/3}}}};const $t=256/360;function Ft(h,e){return(h%=e)>=0?h:h+e}function Ce(h){return Ft(h*$t,256)}const Bt=1/65536;let Wt=class extends ne{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=ut()}dispose(){}drawMany(e,i){const t=e.styleLayer;this._drawIcons(e,t,i),this._drawText(e,t,i)}_drawIcons(e,i,t){const{context:a,displayLevel:n,painter:s,spriteMosaic:r,state:o,styleLayerUID:l,requestRender:c,allowDelayedRender:x}=e,f=i.iconMaterial,y=s.vectorTilesMaterialManager;let g,u=!1;for(const w of t)if(w.layerData.has(l)&&(g=w.layerData.get(l),g.iconPerPageElementsMap.size>0)){u=!0;break}if(!u)return;const _=i.getPaintValue("icon-translate",n),I=i.getPaintValue("icon-translate-anchor",n);let S=i.getLayoutValue("icon-rotation-alignment",n);S===N.AUTO&&(S=i.getLayoutValue("symbol-placement",n)===xe.POINT?N.VIEWPORT:N.MAP);const m=S===N.MAP,M=i.getLayoutValue("icon-keep-upright",n)&&m,p=g.isIconSDF,d=this._iconProgramOptions;d.sdf=p;const v=y.getMaterialProgram(a,f,d);if(x&&c!=null&&!v.compiled)return void c();a.useProgram(v),v.setUniformMatrix3fv("u_displayViewMat3",S===N.MAP?o.displayViewMat3:o.displayMat3),v.setUniformMatrix3fv("u_displayMat3",I===ie.VIEWPORT?o.displayMat3:o.displayViewMat3),v.setUniform2fv("u_iconTranslation",_),v.setUniform1f("u_depth",i.z),v.setUniform1f("u_mapRotation",Ce(o.rotation)),v.setUniform1f("u_keepUpright",M?1:0),v.setUniform1f("u_level",10*n),v.setUniform1i("u_texture",z),v.setUniform1f("u_fadeDuration",le/1e3);let b=-1;for(const w of t){if(!w.layerData.has(l)||(w.key.level!==b&&(b=w.key.level,f.setDataUniforms(v,n,i,b,r)),g=w.layerData.get(l),g.iconPerPageElementsMap.size===0))continue;g.prepareForRendering(a),g.updateOpacityInfo();const R=g.iconVAO;if(R!=null){a.bindVAO(R),v.setUniformMatrix3fv("u_dvsMat3",w.transforms.displayViewScreenMat3),v.setUniform1f("u_time",(performance.now()-g.lastOpacityUpdate)/1e3);for(const[P,T]of g.iconPerPageElementsMap)this._renderIconRange(e,v,T,P,w)}}}_renderIconRange(e,i,t,a,n){const{context:s,spriteMosaic:r}=e;this._spritesTextureSize[0]=r.getWidth(a)/4,this._spritesTextureSize[1]=r.getHeight(a)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),r.bind(s,J.LINEAR,a,z),this._setStencilState(e,n),s.drawElements(B.TRIANGLES,t[1],G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),n.triangleCount+=t[1]/3}_drawText(e,i,t){const{context:a,displayLevel:n,glyphMosaic:s,painter:r,pixelRatio:o,spriteMosaic:l,state:c,styleLayerUID:x,requestRender:f,allowDelayedRender:y}=e,g=i.textMaterial,u=r.vectorTilesMaterialManager;let _,I=!1;for(const O of t)if(O.layerData.has(x)&&(_=O.layerData.get(x),_.glyphPerPageElementsMap.size>0)){I=!0;break}if(!I)return;const S=i.getPaintProperty("text-opacity");if(S&&!S.isDataDriven&&S.getValue(n)===0)return;const m=i.getPaintProperty("text-color"),M=!m||m.isDataDriven||m.getValue(n)[3]>0,p=i.getPaintProperty("text-halo-width"),d=i.getPaintProperty("text-halo-color"),v=(!p||p.isDataDriven||p.getValue(n)>0)&&(!d||d.isDataDriven||d.getValue(n)[3]>0);if(!M&&!v)return;const b=24/8;let w=i.getLayoutValue("text-rotation-alignment",n);w===N.AUTO&&(w=i.getLayoutValue("symbol-placement",n)===xe.POINT?N.VIEWPORT:N.MAP);const R=w===N.MAP,P=i.getLayoutValue("text-keep-upright",n)&&R,T=.8*b/o;this._glyphTextureSize||(this._glyphTextureSize=dt(s.width/4,s.height/4));const L=i.getPaintValue("text-translate",n),K=i.getPaintValue("text-translate-anchor",n),se=this._sdfProgramOptions,D=u.getMaterialProgram(a,g,se);if(y&&f!=null&&!D.compiled)return void f();a.useProgram(D),D.setUniformMatrix3fv("u_displayViewMat3",w===N.MAP?c.displayViewMat3:c.displayMat3),D.setUniformMatrix3fv("u_displayMat3",K===ie.VIEWPORT?c.displayMat3:c.displayViewMat3),D.setUniform2fv("u_textTranslation",L),D.setUniform1f("u_depth",i.z+Bt),D.setUniform2fv("u_mosaicSize",this._glyphTextureSize),D.setUniform1f("u_mapRotation",Ce(c.rotation)),D.setUniform1f("u_keepUpright",P?1:0),D.setUniform1f("u_level",10*n),D.setUniform1i("u_texture",Me),D.setUniform1f("u_antialiasingWidth",T),D.setUniform1f("u_fadeDuration",le/1e3);let ee=-1;for(const O of t){if(!O.layerData.has(x)||(O.key.level!==ee&&(ee=O.key.level,g.setDataUniforms(D,n,i,ee,l)),_=O.layerData.get(x),_.glyphPerPageElementsMap.size===0))continue;_.prepareForRendering(a),_.updateOpacityInfo();const _e=_.textVAO;if(_e==null)continue;a.bindVAO(_e),D.setUniformMatrix3fv("u_dvsMat3",O.transforms.displayViewScreenMat3),this._setStencilState(e,O);const Be=(performance.now()-_.lastOpacityUpdate)/1e3;D.setUniform1f("u_time",Be),_.glyphPerPageElementsMap.forEach((We,He)=>{this._renderGlyphRange(a,We,He,s,D,v,M,O)})}}_renderGlyphRange(e,i,t,a,n,s,r,o){a.bind(e,J.LINEAR,t,Me),s&&(n.setUniform1f("u_halo",1),e.drawElements(B.TRIANGLES,i[1],G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),o.triangleCount+=i[1]/3),r&&(n.setUniform1f("u_halo",0),e.drawElements(B.TRIANGLES,i[1],G.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),o.triangleCount+=i[1]/3)}_setStencilState(e,i){const{context:t,is3D:a,stencilSymbols:n}=e;if(t.setStencilTestEnabled(!0),n)return t.setStencilWriteMask(255),void t.setStencilFunction(F.ALWAYS,i.stencilRef,255);t.setStencilWriteMask(0),a?t.setStencilFunction(F.EQUAL,i.stencilRef,255):t.setStencilFunction(F.GREATER,255,255)}};const X={vtlBackground:zt,vtlFill:Vt,vtlLine:Nt,vtlCircle:kt,vtlSymbol:Wt},Ht={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};let Gt=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const a=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=a.exec(t);const s=[];for(;n!=null;)s.push({path:n[1],start:n.index,length:n[0].length}),n=a.exec(t);let r=0,o="";return s.forEach(l=>{o+=t.slice(r,l.start),o+=i.has(l.path)?"":this._resolve(l.path,i),r=l.start+l.length}),o+=t.slice(r),i.set(e,o),o}_read(e){return this._readFile(e)}};function qt(h){let e=Ht;return h.split("/").forEach(i=>{e&&(e=e[i])}),e}const Yt=new Gt(qt);function U(h){return Yt.resolveIncludes(h)}function Kt(h){const{options:e,value:i}=h;return typeof e[i]=="number"}function he(h){let e="";for(const i in h){const t=h[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(Kt(t)){const{value:a,options:n,namespace:s}=t,r=s?`${s}_`:"";for(const o in n)e+=`#define ${r}${o} ${n[o].toFixed()}
`;e+=`#define ${i} ${r}${a}
`}else{const a=t.options;let n=0;for(const s in a)e+=`#define ${a[s]} ${(n++).toFixed()}
`;e+=`#define ${i} ${a[t.value]}
`}}return e}const Ae=h=>he({PATTERN:h.pattern}),jt={shaders:h=>({vertexShader:Ae(h)+U("background/background.vert"),fragmentShader:Ae(h)+U("background/background.frag")})},Xt={shaders:h=>({vertexShader:U("circle/circle.vert"),fragmentShader:U("circle/circle.frag")})},Le=h=>he({PATTERN:h.pattern}),Qt={shaders:h=>({vertexShader:Le(h)+U("fill/fill.vert"),fragmentShader:Le(h)+U("fill/fill.frag")})},Zt={shaders:h=>({vertexShader:U("outline/outline.vert"),fragmentShader:U("outline/outline.frag")})},Ee=h=>he({SDF:h.sdf}),Jt={shaders:h=>({vertexShader:Ee(h)+U("icon/icon.vert"),fragmentShader:Ee(h)+U("icon/icon.frag")})},Ue=h=>he({PATTERN:h.pattern,SDF:h.sdf}),ei={shaders:h=>({vertexShader:Ue(h)+U("line/line.vert"),fragmentShader:Ue(h)+U("line/line.frag")})},ti={shaders:h=>({vertexShader:U("text/text.vert"),fragmentShader:U("text/text.frag")})};class ii{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const a=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(a))return this._programByKey.get(a);const n=this._getProgramTemplate(i.type),{shaders:s}=n,{vertexShader:r,fragmentShader:o}=s(t),l=i.getShaderHeader(),c=i.getShaderMain(),x=r.replace("#pragma header",l).replace("#pragma main",c),f=e.programCache.acquire(x,o,i.getAttributeLocations());return this._programByKey.set(a,f),f}_getMaterialOptionsValue(e,i){switch(e){case E.BACKGROUND:return(i.pattern?1:0)<<1;case E.FILL:return(i.pattern?1:0)<<1;case E.OUTLINE:return 0;case E.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1}case E.ICON:return(i.sdf?1:0)<<1;case E.CIRCLE:case E.TEXT:default:return 0}}_getProgramTemplate(e){switch(e){case E.BACKGROUND:return jt;case E.CIRCLE:return Xt;case E.FILL:return Qt;case E.ICON:return Jt;case E.LINE:return ei;case E.OUTLINE:return Zt;case E.TEXT:return ti;default:return null}}}const te=1e-6;class Oe{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache={vtlBackground:null,vtlFill:null,vtlLine:null,vtlCircle:null,vtlSymbol:null},this._vtlMaterialManager=new ii}dispose(){var e,i,t,a,n;(e=this._brushCache.vtlBackground)==null||e.dispose(),(i=this._brushCache.vtlFill)==null||i.dispose(),(t=this._brushCache.vtlLine)==null||t.dispose(),(a=this._brushCache.vtlCircle)==null||a.dispose(),(n=this._brushCache.vtlSymbol)==null||n.dispose(),this._brushCache=null,this._vtlMaterialManager=Y(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawSymbols(e,i,t){const a=t.layers;e.renderPass="translucent";let n=this._brushCache.vtlSymbol;n==null&&(n=new X.vtlSymbol,this._brushCache.vtlSymbol=n),H[0]=i;for(let s=0;s<a.length;s++){const r=a[s];if(r.type!==j.SYMBOL)continue;const o=r.getLayoutProperty("visibility");if(o&&o.getValue()===ue.NONE)continue;const l=e.displayLevel;r.minzoom!==void 0&&r.minzoom>l+te||r.maxzoom!==void 0&&r.maxzoom<=l-te||(e.styleLayerUID=r.uid,e.styleLayer=r,n.drawMany(e,H))}H[0]=null}drawBackground(e,i,t){if(t.backgroundBucketIds.length===0)return;const{context:a,displayLevel:n,requiredLevel:s}=e;i.key.level=s,a.setBlendingEnabled(!0),a.setDepthTestEnabled(!1),a.setStencilTestEnabled(!1),e.renderPass="background";let r=this._brushCache.vtlBackground;r==null&&(r=new X.vtlBackground,this._brushCache.vtlBackground=r),H[0]=i,t.backgroundBucketIds.forEach(o=>{const l=t.getLayerById(o);if(l.type!==j.BACKGROUND)return;const c=l.getLayoutProperty("visibility");c&&c.getValue()===ue.NONE||l.minzoom!==void 0&&l.minzoom>n+te||l.maxzoom!==void 0&&l.maxzoom<=n-te||(e.styleLayerUID=l.uid,e.styleLayer=l,r.drawMany(e,H))}),H[0]=null}drawTile(e,i,t,a){const{context:n}=e,s=t.layers;n.setBlendingEnabled(!1),n.setDepthTestEnabled(!0),n.setDepthWriteEnabled(!0),n.setDepthFunction(F.LEQUAL);const r=s.filter(o=>{if(a!=null&&a!==o.type||!i.layerData.has(o.uid))return!1;const l=o.getLayoutProperty("visibility");return(l==null?void 0:l.getValue())!==ue.NONE});e.renderPass="opaque";for(let o=r.length-1;o>=0;--o)this._renderStyleLayer(r[o],e,i);n.setDepthWriteEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunctionSeparate(re.ONE,re.ONE_MINUS_SRC_ALPHA,re.ONE,re.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent",r.forEach(o=>this._renderStyleLayer(o,e,i)),n.setDepthTestEnabled(!1),n.bindVAO()}_renderStyleLayer(e,i,t){const{renderPass:a}=i;let n;switch(e.type){case j.BACKGROUND:if(a!=="background")return;n=this._brushCache.vtlBackground,n||(n=new X.vtlBackground,this._brushCache.vtlBackground=n);break;case j.FILL:if(a!=="opaque"&&i.renderPass!=="translucent")return;n=this._brushCache.vtlFill,n==null&&(n=new X.vtlFill,this._brushCache.vtlFill=n);break;case j.LINE:if(a!=="translucent")return;n=this._brushCache.vtlLine,n==null&&(n=new X.vtlLine,this._brushCache.vtlLine=n);break;case j.CIRCLE:if(a!=="translucent")return;n=this._brushCache.vtlCircle,n==null&&(n=new X.vtlCircle,this._brushCache.vtlCircle=n);break;case j.SYMBOL:if(a!=="translucent")return;n=this._brushCache.vtlSymbol,n==null&&(n=new X.vtlSymbol,this._brushCache.vtlSymbol=n)}const{displayLevel:s}=i,{minzoom:r,maxzoom:o}=e;if(r!==void 0&&r>s+te||o!==void 0&&o<=s-te)return;const{context:l}=i;l.setStencilTestEnabled(!1),l.setStencilWriteMask(0),i.styleLayerUID=e.uid,i.styleLayer=e,H[0]=t,n.drawMany(i,H),H[0]=null}}const H=[null];let k=class extends Mt(St(bt)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d",this.levelShift=we("disable-feature:vtl-level-shift")?0:1}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new ft("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:h,spatialReference:e,state:i,viewingMode:t}=this.view,a=t==="local"&&!_t(e)||pt.force512VTL?this.layer.tileInfo:this.layer.tileInfo.getCompatibleForVTL(256),n=this._getTileInfoSupportError(a,this.layer.fullExtent);if(n!=null)return this.addResolvingPromise(Promise.reject(n));const s=mt(()=>{var u,_;return(_=(u=this.view)==null?void 0:u.basemapTerrain)==null?void 0:_.tilingSchemeLocked}).then(()=>{var d,v;const u=h.tilingScheme,_=u.pixelSize,I=_===256?1:2,S=(d=h.spatialReference)!=null&&d.isGeographic&&_===256?1:0,m=(v=h.spatialReference)!=null&&v.isGeographic||_!==256?0:1;let M;this.schemaHelper=new It(I,S,this.levelShift+m),M=_===256||_===512?this.layer.tileInfo.getCompatibleForVTL(_):this.layer.tileInfo;const p=this._getTileInfoCompatibilityError(M,u);if(p)throw p;this.tileInfo=M});this._tileHandlerController=new AbortController;const r=this.view.resourceController;this._memCache=r.memoryController.newCache(`vtl-${this.layer.uid}`,u=>u.release()),this.addHandles(gt(()=>this.view.qualitySettings.memoryLimit,u=>this._memCache.maxSize=Math.ceil(u/10*1048576),yt));const o=new be(this.layer.currentStyleInfo.style);this._tileHandler=new Te(this.layer,o,i.contentPixelRatio,this._memCache);const l=this._tileHandlerController.signal,c=ai(r),x=this._tileHandler.start({signal:l,schedule:c}),f=this._tileHandler.spriteMosaic;f.then(u=>{!vt(l)&&this._tileHandler&&(this.painter=new Oe(u,this._tileHandler.glyphMosaic))}),x.then(()=>this._tileHandlerController=null);const y=()=>{var p;this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const u=this.layer.currentStyleInfo.style,_=((p=this.view.state)==null?void 0:p.contentPixelRatio)??1,I=new be(u),S=new Te(this.layer,I,_,this._memCache),m=S.start({signal:this._tileHandlerController.signal,schedule:c}),M=S.spriteMosaic;m.then(()=>this._tileHandlerController=null),this._updatingHandles.addPromise(Promise.all([m,M]).then(([,d])=>{const v=this._tileHandler,b=this.painter;this.painter=new Oe(d,S.glyphMosaic),this._tileHandler=S,this.emit("data-changed"),v.destroy(),b&&b.dispose()}))};this._updatingHandles.add(()=>{var u;return{style:this.layer.currentStyleInfo.style,pixelRatio:(u=this.view.state)==null?void 0:u.contentPixelRatio}},y),this.addHandles([this.layer.on("paint-change",()=>this.emit("data-changed")),this.layer.on("style-layer-change",y),this.layer.on("delete-style-layer",y),this.layer.on("spriteSource-change",()=>this.emit("data-changed")),this.layer.on("layout-change",()=>this.emit("data-changed")),this.layer.on("style-layer-visibility-change",()=>this.emit("data-changed"))]);const g=Promise.all([s,x,f]);this.addResolvingPromise(g)}destroy(){this.painter=Y(this.painter),this._tileHandlerController=Ne(this._tileHandlerController),this._tileHandler=Se(this._tileHandler),this._memCache=Se(this._memCache)}get contentZoom(){return we("disable-feature:vtl-level-shift")?1:this.view.qualitySettings.tiledSurface.vtlContentZoom}get displayLevelRange(){const h=this.tileInfo.lods,e=this.layer.minScale||h[0].scale,i=this.layer.maxScale||h[h.length-1].scale,t=this.levelRangeFromScaleRange(e,i);return this.layer.maxScale?t.maxLevel++:t.maxLevel+=this.levelShift,t}get dataScaleRange(){const h=this.tileInfo.lods;return{minScale:h[0].scale,maxScale:h[h.length-1].scale}}get dataLevelRange(){const{minScale:h,maxScale:e}=this.dataScaleRange,i=this.levelRangeFromScaleRange(h,e);return i.minLevel===1&&this.tileInfo.size[0]===256&&(i.minLevel=0),i.maxLevel+=this.levelShift,i}async fetchTile(h,e){const i=this.schemaHelper.getLevelRowColumn(h);return this._tileHandler.getVectorTile(i,e)}get hasVisibleFeatures(){return!0}};W([q()],k.prototype,"layer",void 0),W([q()],k.prototype,"levelShift",void 0),W([q()],k.prototype,"contentZoom",null),W([q()],k.prototype,"displayLevelRange",null),W([q()],k.prototype,"tileInfo",void 0),W([q()],k.prototype,"dataScaleRange",null),W([q()],k.prototype,"dataLevelRange",null),W([q()],k.prototype,"updatingProgressValue",void 0),k=W([xt("esri.views.3d.layers.VectorTileLayerView3D")],k);const Ui=k;function ai(h){return e=>h.immediate.schedule(e)}export{Ui as default};
