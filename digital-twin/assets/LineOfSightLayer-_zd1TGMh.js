import{V as n,hu as l,bT as o,bV as y,hv as r,f as p,A as d,dz as h,e as s,y as i,hw as u,a as g,X as f}from"./index-CnMvbdm6.js";const c=n.ofType(l);let t=class extends o(y(f)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new r,this.opacity=1}initialize(){this.addHandles(p(()=>this.analysis,(e,a)=>{a!=null&&a.parent===this&&(a.parent=null),e!=null&&(e.parent=this)},d))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return(e=this.analysis)==null?void 0:e.observer}set observer(e){const{analysis:a}=this;a&&(a.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new n}set targets(e){var a;h(e,(a=this.analysis)==null?void 0:a.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new r)}};s([i({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),s([i({type:["LineOfSightLayer"]})],t.prototype,"operationalLayerType",void 0),s([i({type:u,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],t.prototype,"observer",null),s([i({type:c,json:{read:!0,write:{ignoreOrigin:!0}}})],t.prototype,"targets",null),s([i({nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"analysis",void 0),s([i({readOnly:!0})],t.prototype,"fullExtent",null),s([i({readOnly:!0})],t.prototype,"spatialReference",null),s([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],t.prototype,"opacity",void 0),s([i({type:["show","hide"]})],t.prototype,"listMode",void 0),t=s([g("esri.layers.LineOfSightLayer")],t);const w=t;export{w as default};