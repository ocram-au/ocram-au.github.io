import{p as r,H as c,c as h,b as d}from"./index-CnMvbdm6.js";import{c as u}from"./observers-BNDrJVWu.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const p=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}",b=p,s=r(class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalOptionChange=h(this,"calciteInternalOptionChange",6),this.mutationObserver=u("mutation",()=>{this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}),this.disabled=!1,this.label=void 0,this.selected=void 0,this.value=void 0}handlePropChange(e,n,t){(t==="label"||t==="value")&&this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e},internallySetLabel:n,internallySetValue:t,label:l,value:a}=this;(!l||l===n)&&(this.label=e,this.internallySetLabel=e),(a==null||a===t)&&(this.value=e,this.internallySetValue=e)}connectedCallback(){var e;this.ensureTextContentDependentProps(),(e=this.mutationObserver)==null||e.observe(this.el,{attributeFilter:["label","value"],characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){return d("slot",{key:"be30f48bf31e3ac6c2c7935b3db7b15fd835cb1b"},this.label)}get el(){return this}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}static get style(){return b}},[1,"calcite-option",{disabled:[516],label:[1025],selected:[516],value:[1032]},void 0,{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}]);function i(){if(typeof customElements>"u")return;["calcite-option"].forEach(e=>{switch(e){case"calcite-option":customElements.get(e)||customElements.define(e,s);break}})}i();const g=s,v=i;export{g as CalciteOption,v as defineCustomElement};