const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-D4j1BNmj.js","assets/button-BgvD8Si2.js","assets/index-B6FTDkqq.js","assets/index-D4oqiS0E.css","assets/form-L1qwuhVS.js","assets/dom-Vy7LB1jE.js","assets/guid-DP-7rFCR.js","assets/interactive-C5xfXyQt.js","assets/label-2qkmYse5.js","assets/component-thCpPSLC.js","assets/loadable-Ce8ni0lG.js","assets/t9n-ANo2-0Vg.js","assets/key-Dalt3dqL.js","assets/observers-CsYAaMas.js","assets/icon-kkJxg-GV.js","assets/loader-eW1v7Fhf.js","assets/calcite-icon-DwaOmKtu.js","assets/calcite-input-CGIgaOLE.js","assets/input2-hVT8efGS.js","assets/input-message-B5dJ38vr.js","assets/progress-Bqt1synY.js","assets/calcite-dropdown-DwMd9g8O.js","assets/floating-ui-BCjI6E7S.js","assets/debounce-BXUnv6U0.js","assets/openCloseComponent-BKB-5DOZ.js","assets/calcite-dropdown-item-CITsxJYG.js","assets/resources3-C4pSbRAc.js","assets/calcite-dropdown-group-C3V-lKyK.js"])))=>i.map(i=>d[i]);
import{wh as Ut,wi as Ht,wj as qt,af as Yt,c0 as Tt,e2 as mt,t as P,e3 as Xt,wk as C,qo as H,pv as Bt,ij as T,pr as Nt,ef as Et,sP as Mt,e as l,y as a,a as p,S as Kt,i8 as E,ia as s,lV as q,gP as Gt,qn as O,tz as _t,wl as h,wm as Zt,i9 as ct,bY as w,oZ as yt,l as jt,wn as Wt,wo as Jt,jX as Qt,wp as It,ik as te,wq as ee,wr as ne,ws as ie,f as S,ci as oe,wt as se,pO as le,u as gt,A as z,id as re}from"./index-B6FTDkqq.js";import{k as ae,x as wt,C as ce,F as de,S as ue,U as M,q as pe}from"./quantityFormatUtils-DxfBnOcx.js";function dt(){return Ht()}function Ye(){return Ut()}function ut(e,t){const n=[];e=(e=(e=e.replaceAll(/[\u00B0\u00BA]/g,"^")).replaceAll("′","'")).replaceAll("″",'"');const i=fe(t);return qt.dmsToGeog(i,1,[e],n)?new Yt(n[0][0],n[0][1],Tt.WGS84):null}function he(e){var t;return e&&dt()?C(e)??((t=ut(`0° 0' 0" N | ${e}`))==null?void 0:t.longitude)??null:null}function ve(e){var t;return e&&dt()?C(e)??((t=ut(`${e} | 00° 00' 00" E`))==null?void 0:t.latitude)??null:null}function fe(e){let t=null;if(e||(e=Tt.WGS84),e.wkid){if(t=mt.geogcs(e.wkid),!t)throw new P("coordinate-formatter:invalid-spatial-reference","wkid is not valid")}else{if(!e.wkt2&&!e.wkt)throw new P("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing");if(t=mt.fromString(Xt.PE_TYPE_GEOGCS,e.wkt2||e.wkt),!t)throw new P("coordinate-formatter:invalid-spatial-reference","wkt is not valid")}return t}const R=1,Dt=6;function me(e,t){return{angleRelative:_e,direction:ye,directionRelative:ge,directionRelativeBilateral:we,latitudeDecimalDegrees:be,longitudeDecimalDegrees:$e,area:(n,i)=>ae(e,n,i??t.area),length:(n,i,o)=>wt(e,n,i??t.length,o),lengthRelative:(n,i)=>ce(e,n,i??t.length),totalLength:(n,i)=>wt(e,n,i??t.length),verticalLength:(n,i)=>de(e,n,i??t.length),verticalLengthRelative:(n,i)=>ue(e,n,i??t.verticalLength),percentage:xe,scalar:Ot,scale:ke}}function _e(e){return T(e,{signDisplay:"exceptZero",...pt(R)})}function ye(e){return M(e,e.rotationType,R)}function ge(e){const t=Nt(e);return T(t,{style:"unit",unitDisplay:"narrow",unit:"degree",signDisplay:t>0?"never":"exceptZero",...pt(R)})}function we(e){return M(e,e.rotationType,R)}function $e(e){return At(e,Lt)}function be(e){return At(e,Rt)}function Xe(e){return Vt(e,Lt)}function Be(e){return Vt(e,Rt)}function At(e,t){return M(Et(e,"degrees"),"geographic",Dt,t,!1)}function Vt(e,t){const i=t.normalize(Et(e,"degrees").value,void 0,!1);return Ot(H(i),Dt)}function xe(e){return T(e.value,{style:"percent"})}function ke(e){return T(e,{style:"percent",maximumFractionDigits:0})}function Ot(e,t){return T(e.value,pt(t))}function pt(e){return{minimumFractionDigits:e,maximumFractionDigits:e}}function Ne(e){return(t,n)=>{const i=C(t);return i!=null?e(i,n):null}}const Ce=e=>{let t=`[-+]?[0-9${e.thousands}]+`;return e.decimal!==""&&(t+=`${e.decimal}[0-9]+`),new RegExp(`^(${t}\\s*)${e.separator}(\\s*${t})$`,"i")},Te=" ",St=[];for(const e of[",","\\|","\\s+"])for(const t of["\\.",",",""])for(const n of["",",","\\.",Te,"\\s+"])e!==t&&e!==n&&t!==n&&St.push({separator:e,decimal:t,thousands:n,pattern:Ce({decimal:t,thousands:n,separator:e})});function Ke(e){for(const{decimal:t,thousands:n,pattern:i}of St){i.lastIndex=0;const o=e.match(i);if(!o)continue;const r=C($t(o[1],t,n)),d=C($t(o[2],t,n));if(r!=null&&d!=null)return{x:H(r),y:H(d)}}return null}function $t(e,t,n){let i=e.replaceAll(/[\s+]/g,"");return n!==""&&(i=i.replaceAll(n,"")),t!==""&&(i=i.replaceAll(t,".")),i}function Ge(e){if(!e||C(e)!=null||!dt())return null;const t=ut(e),n=L(t==null?void 0:t.latitude),i=L(t==null?void 0:t.longitude);return i!=null&&n!=null?{latitude:n,longitude:i}:null}function Ze(e){return L(he(e))}function je(e){return L(ve(e))}function L(e){return e!=null?Bt(e,"degrees","geographic"):null}const Lt=new Mt(-180,180),Rt=new Mt(-90,90);let b=class extends Kt{constructor(t){super(t),this.helpMessage=void 0,this.viewType=void 0}get visibleElements(){return this.sketchOptions.tooltips.visibleElements}get allFields(){return[]}get editableFields(){return this.allFields.filter(t=>t.visible&&!t.readOnly)}clearInputValues(){this.allFields.forEach(t=>t.clearInputValue())}};l([a()],b.prototype,"sketchOptions",void 0),l([a()],b.prototype,"visibleElements",null),l([a()],b.prototype,"helpMessage",void 0),l([a()],b.prototype,"viewType",void 0),l([a()],b.prototype,"allFields",null),l([a()],b.prototype,"editableFields",null),b=l([p("esri.views.interactive.tooltip.infos.SketchTooltipInfo")],b);const f="esri-tooltip",Ee=`${f}-content`,Me=`${f}-content--input`,Ie=`${f}-content__header`,De=`${f}-content__header__spacer`,bt=`${f}-content__header__actions`,Pt=`${f}-draw-header-actions`,Ae=`${f}-table`,Ve=`${f}-help-message`,Oe=`${f}-help-message__text`,Se=`${f}-help-message__icon`,D=`${f}-field`,A={base:D,inputMode:`${D}--input`,title:`${D}__title`,value:`${D}__value`};let u=class extends E{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return s("div",{class:this.classes({[A.base]:!0,[A.inputMode]:this.mode==="input"})},s("div",{class:A.title},this.title),s("div",{class:A.value},this.value))}};l([a()],u.prototype,"hidden",void 0),l([a()],u.prototype,"mode",void 0),l([a()],u.prototype,"title",void 0),l([a()],u.prototype,"value",void 0),u=l([p("esri.views.interactive.tooltip.components.TooltipField")],u);const Le={base:`${f}-value-by-value`};let $=class extends E{constructor(){super(...arguments),this.divider="×"}render(){return s("div",{class:Le.base},s("span",null,this.left),s("span",null,this.divider),s("span",null,this.right))}};l([a()],$.prototype,"left",void 0),l([a()],$.prototype,"divider",void 0),l([a()],$.prototype,"right",void 0),$=l([p("esri.views.interactive.tooltip.components.ValueByValue")],$);let c=class extends E{constructor(){super(...arguments),this._focusAbortController=new AbortController,this._transition=null,this._mode="feedback",this._getFormatters=Gt(me),this._onDiscard=()=>{this.info.clearInputValues(),this.exitInputMode()},this._onCommit=(e,t)=>{if(t==="commit-and-exit")return void this.exitInputMode();if(t==="commit-on-blur")return;const n=this._getFocusableElements(),i=n.length,o=n.indexOf(e);if(o===-1)return void this.exitInputMode();const r=((o+(t==="commit-and-next"?1:-1))%i+i)%i;V(n.at(r))},this._handleTab=e=>{if(e.code!==O.next)return;const t=this._getFocusableElements(),n=t.at(0),i=t.at(-1);n&&i&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),V(i)):document.activeElement===i&&(e.preventDefault(),V(n)))}}get mode(){return this._mode}get _displayUnits(){const e=_t(this.tooltip.view);return{length:e,verticalLength:e,area:e,angle:"degrees"}}get _inputUnitInfos(){const e=this._messagesUnits,t=m=>({unit:m,abbreviation:te(e,m,"abbr")}),n=_t(this.tooltip.view),i=t(ee(n)),o=t(ne(n)),r=t(ie(n)),d=t("degrees");return{length:i,lengthRelative:i,verticalLength:o,verticalLengthRelative:o,area:r,direction:d,orientation:d,rotation:d,longitudeLatitude:d}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,sketchOptions:this.info.sketchOptions,onCommit:this._onCommit,onDiscard:this._onDiscard}}render(){const{visibleElements:e}=this.info.sketchOptions.tooltips,t=this._renderedContent,n=this._renderedActions,i=this._renderedHelpMessage,o=t.length>0,r=o||!!i,d=this.mode==="input";return s("div",{class:Zt(Ee,d&&Me),onkeydown:this._handleTab},d&&r&&e.header?s("div",{class:Ie,key:"header"},s("calcite-button",{appearance:"transparent","data-testid":"tooltip-back-button",iconFlipRtl:"both",iconStart:"chevron-left",key:"discard-button",kind:"neutral",onclick:this._onDiscard,scale:"s",tabIndex:-1}),n.length>0?s(h,null,s("div",{class:De,key:"spacer"}),s("div",{class:bt,key:"actions"},n)):null):null,o?s("div",{class:Ae,key:"content"},...t):null,i)}_renderActions(){return null}loadDependencies(){return ct({button:()=>w(()=>import("./calcite-button-D4j1BNmj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),icon:()=>w(()=>import("./calcite-icon-DwaOmKtu.js"),__vite__mapDeps([16,14,2,3,5,6,13])),input:()=>w(()=>import("./calcite-input-CGIgaOLE.js"),__vite__mapDeps([17,18,2,3,5,6,4,7,12,8,9,10,11,13,19,14,20]))})}async enterInputMode(e){try{await this._transitionTo("input"),await this._focusField(e)}catch(t){yt(t)}}async exitInputMode({focusOnView:e=!0}={}){var t;try{const{container:n,info:i}=this;i.clearInputValues();const o=e?(t=n==null?void 0:n.closest(".esri-view"))==null?void 0:t.querySelector(".esri-view-surface"):null;await this._transitionTo("feedback"),o instanceof HTMLElement&&o.focus()}catch(n){yt(n)}}get _renderedContent(){return xt(this._renderContent())}get _renderedActions(){return xt(this._renderActions())}get _renderedHelpMessage(){const{sketchOptions:e,visibleElements:t}=this.info;if(!t.helpMessage)return null;const n=e.tooltips.helpMessage??this._defaultHelpMessage;if(!n)return null;const i=e.tooltips.helpMessageIcon??"information";return s("div",{class:Ve,key:"help-message"},i?s("calcite-icon",{class:Se,icon:i,scale:"s"}):null,s("div",{class:Oe},n))}get _defaultHelpMessage(){var i,o,r;const{helpMessage:e,viewType:t}=this.info;if(e==null)return null;const n=t==="3d"?"helpMessages3d":"helpMessages2d";return(r=(o=(i=this._messagesTooltip)==null?void 0:i.sketch)==null?void 0:o[n])==null?void 0:r[e]}async _focusField(e){var o;(o=this._focusAbortController)==null||o.abort(),this._focusAbortController=new AbortController;const{signal:t}=this._focusAbortController;await this._waitForInputs(),jt(t);const n=this._getFocusableInputs(),i=e?n.find(r=>r.getAttribute("data-field-name")===e):n.at(0);await V(i)}async _transitionTo(e){var i,o;if(this._mode===e)return;const t=()=>{this._mode=e};if(!((i=this.domNode)!=null&&i.firstChild)||!document.startViewTransition||Wt())return void t();this.autoRenderingEnabled=!1,(o=this._transition)==null||o.skipTransition();const n=this._transition=document.startViewTransition(()=>{if(!this.destroyed)return this.autoRenderingEnabled=!0,t(),this.renderNow(),Jt()});try{await this._transition.finished}finally{n===this._transition&&(this._transition=null)}}async _waitForInputs(){const e=()=>{var t;return Array.from(((t=this.domNode)==null?void 0:t.querySelectorAll("calcite-input"))??[])};for(;e().length===0;)await Qt(Re);await It()}_getFocusableInputs(){var e;return Array.from(((e=this.domNode)==null?void 0:e.querySelectorAll("calcite-input:not([read-only]):not([disabled])"))??[])}_getFocusableElements(){var t;const e=(t=this.domNode)==null?void 0:t.querySelector(`.${Pt}`);return[...Array.from((e==null?void 0:e.querySelectorAll(`.${bt} calcite-button:not([disabled])`))??[]),...this._getFocusableInputs()]}};async function V(e){await(e==null?void 0:e.setFocus())}function xt(e){return(Array.isArray(e)?e:[e]).flat(10).filter(t=>!!t)}l([q("esri/core/t9n/Units"),a()],c.prototype,"_messagesUnits",void 0),l([q("esri/views/interactive/tooltip/t9n/Tooltip"),a()],c.prototype,"_messagesTooltip",void 0),l([a()],c.prototype,"info",void 0),l([a()],c.prototype,"tooltip",void 0),l([a()],c.prototype,"_mode",void 0),l([a()],c.prototype,"mode",null),l([a()],c.prototype,"_displayUnits",null),l([a()],c.prototype,"_inputUnitInfos",null),l([a()],c.prototype,"_formatters",null),l([a()],c.prototype,"fieldContext",null),l([a()],c.prototype,"_renderedContent",null),l([a()],c.prototype,"_renderedActions",null),l([a()],c.prototype,"_renderedHelpMessage",null),l([a()],c.prototype,"_defaultHelpMessage",null),c=l([p("esri.views.interactive.tooltip.content.TooltipContent")],c);const Re=20;let Y=class extends c{_renderContent(){const{area:t,radius:n,xSize:i,ySize:o,visibleElements:r}=this.info,d=this._messagesTooltip.sketch,m=this._formatters;return s(h,null,r.radius&&n!=null?s(u,{title:d.radius,value:m.length(n)}):null,r.size&&i!=null&&o!=null?s(u,{title:d.size,value:s($,{left:m.length(i),right:m.length(o)})}):null,r.area?s(u,{title:d.area,value:m.area(t)}):null)}};Y=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],Y);const _=`${f}-editable-field`,v={base:_,inputMode:`${_}--input`,feedbackMode:`${_}--feedback`,readOnly:`${_}--read-only`,locked:`${_}--locked`,title:`${_}__title`,value:`${_}__value`,valueContent:`${_}__value__content`,valueContentReadOnly:`${_}__value__content--read-only`,lockIcon:`${_}__lock-icon`,input:`${_}__input`,inputSuffix:`${_}__input-suffix`,button:`${_}__button`},F={lock:"lock",unlock:"unlock"};let y=class extends E{constructor(){super(...arguments),this._input=null,this._onKeyDown=t=>{t.key===O.discard&&this.mode==="input"&&this._input&&this.context.onDiscard(this._input)},this._onInputKeyDown=t=>{const n=this._input;if(n)switch(t.key){case O.commit:return this.field.onCommit("commit-and-exit",n,this.context);case O.next:{t.preventDefault(),t.stopPropagation();const i=t.shiftKey?"commit-and-previous":"commit-and-next";return this.field.onCommit(i,n,this.context)}}},this._onInput=t=>{this.field.onInput(t.target.value)},this._onInputBlur=()=>{const t=this._input;t&&this.field.onCommit("commit-on-blur",t,this.context)},this._selectText=()=>{const t=()=>{var n;this._input===document.activeElement&&((n=this._input)==null||n.selectText())};t(),It().then(t)}}initialize(){this.addHandles(S(()=>this._rawDisplayValue,()=>{const{committed:t,inputValue:n}=this.field;t||n||this._input!==document.activeElement||this._selectText()}))}loadDependencies(){return ct({button:()=>w(()=>import("./calcite-button-D4j1BNmj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),icon:()=>w(()=>import("./calcite-icon-DwaOmKtu.js"),__vite__mapDeps([16,14,2,3,5,6,13])),input:()=>w(()=>import("./calcite-input-CGIgaOLE.js"),__vite__mapDeps([17,18,2,3,5,6,4,7,12,8,9,10,11,13,19,14,20]))})}render(){const{field:t,mode:n}=this,i=n==="input",{locked:o,readOnly:r}=t;return s("div",{class:this.classes({[v.base]:!0,[v.feedbackMode]:n==="feedback",[v.inputMode]:n==="input",[v.locked]:o,[v.readOnly]:r})},s("div",{class:v.title,key:"title"},this._title),s("div",{class:v.value,key:"value",onkeydown:this._onKeyDown},i?this._renderValueInputMode():this._renderValueFeedbackMode()))}get _formattedValue(){return this.field.getFormattedValue(this.context)||kt}get _rawDisplayValue(){return this.field.getRawDisplayValue(this.context)}get _suffix(){return this.field.getSuffix(this.context)}get _title(){const{title:t}=this.field;return typeof t=="string"?t:t(this.context)}_renderValueFeedbackMode(){return s(h,null,s("div",{class:v.valueContent,key:"value-feedback"},this._formattedValue),this.field.locked&&this.mode!=="input"?s("calcite-icon",{class:v.lockIcon,icon:F.lock,key:"icon",scale:"s"}):null)}_renderValueInputMode(){return this.field.readOnly?this._renderValueReadOnly():this._renderValueWritable()}_renderValueReadOnly(){return s("div",{class:this.classes(v.valueContent,v.valueContentReadOnly),key:"value-read-only"},this._formattedValue)}_renderValueWritable(){var m;const{field:t}=this,{name:n,invalid:i,locked:o}=t,r=((m=this.context)==null?void 0:m.messages.sketch)??{},d=o?r.unlockConstraint:r.lockConstraint;return s(h,null,s("calcite-input",{afterCreate:I=>{this._input=I},class:v.input,"data-field-name":n,"data-testid":`tooltip-field-${n}`,onblur:this._onInputBlur,onfocus:this._selectText,onkeydown:this._onInputKeyDown,scale:"s",status:i?"invalid":"idle",type:"text",value:this._rawDisplayValue??kt,onCalciteInputInput:this._onInput}),s("div",{class:v.inputSuffix,key:"suffix"},this._suffix),t.lockable?s("calcite-button",{alignment:"center",appearance:"transparent",class:v.button,"data-testid":`tooltip-field-${n}-lock`,iconStart:o?F.lock:F.unlock,key:"lock",kind:"neutral",label:d,onclick:()=>{t.toggleLock(this.context)},scale:"s",tabIndex:-1,title:d}):s("div",{key:"lock-empty"}))}};l([a()],y.prototype,"field",void 0),l([a()],y.prototype,"context",void 0),l([a()],y.prototype,"mode",void 0),l([a()],y.prototype,"_input",void 0),l([a()],y.prototype,"_formattedValue",null),l([a()],y.prototype,"_rawDisplayValue",null),l([a()],y.prototype,"_suffix",null),l([a()],y.prototype,"_title",null),y=l([p("esri.views.interactive.tooltip.components.TooltipEditableField")],y);const kt="—";function x(e){const t=e.fields.filter(n=>(n==null?void 0:n.visible)===!0);return t.length===0?null:s(h,null,t.map(n=>s(y,{context:e.context,field:n,key:n.id,mode:e.mode})))}let X=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(x,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0,o.orientation?n.orientation:void 0,o.scale?n.scale:void 0],mode:i})}};X=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],X);let B=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{elevation:o,visibleElements:r}=n;return s(x,{context:t,fields:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0,r.elevation?o:void 0],mode:i})}};B=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],B);const U={absolute:"absolute-direction",relative:"relative-direction"};let k=class extends E{constructor(e){super(e),this.visibleElements={}}render(){return s("div",{class:Pt},this._isElementVisible("direction")?s(Pe,{messages:this.messages,sketchOptions:this.sketchOptions}):null)}loadDependencies(){return ct({button:()=>w(()=>import("./calcite-button-D4j1BNmj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),dropdown:()=>w(()=>import("./calcite-dropdown-DwMd9g8O.js"),__vite__mapDeps([21,2,3,5,6,22,23,7,12,10,13,24])),"dropdown-item":()=>w(()=>import("./calcite-dropdown-item-CITsxJYG.js"),__vite__mapDeps([25,2,3,5,6,10,9,7,26,14,13])),"dropdown-group":()=>w(()=>import("./calcite-dropdown-group-C3V-lKyK.js"),__vite__mapDeps([27,2,3,13,26]))})}_isElementVisible(e){var t;return((t=this.visibleElements)==null?void 0:t[e])??this.sketchOptions.tooltips.visibleElements[e]}};function Pe(e){var d,m,I,ht;const{directionMode:t}=e.sketchOptions.values,n=(d=e.messages)==null?void 0:d.sketch,i=(m=n==null?void 0:n.directionModeSelect)==null?void 0:m.title,o="absolute",r="relative";return s("calcite-dropdown",{key:"direction-mode",placement:"bottom-end",scale:"s",widthScale:"s",onCalciteDropdownSelect:zt=>{var vt,ft;const Ft=(ft=(vt=zt.target.selectedItems)==null?void 0:vt[0])==null?void 0:ft.getAttribute("data-mode");e.sketchOptions.values.directionMode=Ft??"absolute"}},s("calcite-button",{alignment:"end",appearance:"transparent",iconStart:U[t],kind:"neutral",label:i,scale:"s",slot:"trigger",title:i}),s("calcite-dropdown-group",{selectionMode:"single"},s("calcite-dropdown-item",{"data-mode":r,"data-testid":"tooltip-direction-mode-relative",iconStart:U.relative,key:"relative",selected:t===r},(I=n==null?void 0:n.directionModeSelect)==null?void 0:I.relative),s("calcite-dropdown-item",{"data-mode":o,"data-testid":"tooltip-direction-mode-absolute",iconStart:U.absolute,key:"absolute",selected:t===o},(ht=n==null?void 0:n.directionModeSelect)==null?void 0:ht.absolute)))}l([q("esri/views/interactive/tooltip/t9n/Tooltip"),a()],k.prototype,"messages",void 0),l([a()],k.prototype,"sketchOptions",void 0),l([a()],k.prototype,"visibleElements",void 0),k=l([p("esri.views.interactive.tooltip.components.DrawHeaderActions")],k);let N=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{xyMode:o,visibleElements:r}=n;return s(x,{context:t,fields:[...o==="direction-distance"?[r.direction?n.direction:void 0,r.distance?n.distance:void 0]:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0],r.elevation?n.elevation:void 0,r.area?n.area:void 0],mode:i})}_renderActions(){const{xyMode:t,sketchOptions:n}=this.info;return s(k,{sketchOptions:n,visibleElements:{direction:t==="direction-distance"}})}};N=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],N);let K=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{xyMode:o,visibleElements:r}=n;return s(x,{context:t,fields:[...o==="direction-distance"?[r.direction?n.direction:void 0,r.distance?n.distance:void 0]:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0],r.elevation?n.elevation:void 0,r.totalLength?n.totalLength:void 0],mode:i})}_renderActions(){const{xyMode:t,sketchOptions:n}=this.info;return s(k,{sketchOptions:n,visibleElements:{direction:t==="direction-distance"}})}};K=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],K);let G=class extends c{_renderContent(){const{area:t,xSize:n,ySize:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,d=this._formatters;return s(h,null,o.size&&n!=null&&i!=null?s(u,{title:r.size,value:s($,{left:d.length(n),right:d.length(i)})}):null,o.area?s(u,{title:r.area,value:d.area(t)}):null)}};G=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],G);let Z=class extends c{_renderContent(){const{angle:t,visibleElements:n}=this.info,i=this._messagesTooltip.sketch;return s(h,null,n.rotation?s(u,{title:i.rotation,value:this._formatters.angleRelative(t)}):null)}};Z=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],Z);let j=class extends c{_renderContent(){const t=this.info,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.size?s(u,{title:i.size,value:s($,{left:o.length(t.xSize),right:o.length(t.ySize)})}):null,n.scale?s(u,{title:i.scale,value:s($,{left:o.scale(t.xScale),right:o.scale(t.yScale)})}):null)}};j=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],j);let W=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(x,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0],mode:i})}};W=l([p("esri.views.interactive.tooltip.content.TooltipContentMovePoint")],W);let J=class extends c{_renderContent(){const{area:t,distance:n,totalLength:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,d=this._formatters;return s(h,null,o.distance?s(u,{title:r.distance,value:d.lengthRelative(n)}):null,o.area&&t!=null?s(u,{title:r.area,value:d.area(t)}):null,o.totalLength&&i!=null?s(u,{title:r.totalLength,value:d.length(i)}):null)}};J=l([p("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],J);let Q=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(x,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0,o.area&&n.geometryType==="polygon"?n.area:null,o.totalLength&&n.geometryType==="polyline"?n.totalLength:null],mode:i})}};Q=l([p("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")],Q);let tt=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.orientation&&t.orientation!=null?s(u,{key:"orientation",title:i.orientation,value:M(t.orientation,t.rotationType,t.orientationPrecision)}):null,n.size&&t.size!=null?s(u,{key:"size",title:i.size,value:o.length(t.size,t.sizeUnit,t.sizePrecision)}):null)}};tt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],tt);let et=class extends c{_renderContent(){const{fieldContext:e,info:t,mode:n}=this,{visibleElements:i}=t;return s(x,{context:e,fields:[i.coordinates?t.effectiveX:void 0,i.coordinates?t.effectiveY:void 0,i.elevation?t.elevation:void 0,i.orientation?t.orientation:void 0,i.scale?t.scale:void 0],mode:n})}};et=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")],et);let nt=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(x,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0],mode:i})}};nt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformPoint")],nt);let it=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch;return s(h,null,n.rotation&&t.rotation!=null?s(u,{key:"rotation",title:i.rotation,value:pe(t.rotation,t.rotationType,t.rotationPrecision)}):null,n.orientation&&t.orientation!=null?s(u,{key:"orientation",title:i.orientation,value:M(t.orientation,t.rotationType,t.orientationPrecision)}):null)}};it=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],it);let ot=class extends c{_renderContent(){const{info:e}=this,{visibleElements:t}=e,n=this._messagesTooltip.sketch,i=this._formatters;return s(h,null,t.scale&&e.scale!=null?s(u,{key:"scale",title:n.scale,value:i.percentage(e.scale)}):null,t.size&&e.size!=null?s(u,{key:"size",title:n.size,value:i.length(e.size,e.sizeUnit,e.sizePrecision)}):null)}};ot=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],ot);let st=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.distance?s(u,{title:i.distance,value:o.length(t.distance)}):null)}};st=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslate")],st);let lt=class extends c{_renderContent(){const{distance:e,elevation:t,area:n,totalLength:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,d=this._formatters;return s(h,null,o.distance?s(u,{title:r.distance,value:d.length(e)}):null,o.elevation&&(t==null?void 0:t.actual)!=null?s(u,{title:r.elevation,value:d.verticalLength(t.actual)}):null,o.area&&n!=null?s(u,{title:r.area,value:d.area(n)}):null,o.totalLength&&i!=null?s(u,{title:r.totalLength,value:d.length(i)}):null)}};lt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],lt);let rt=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.distance?s(u,{title:i.distance,value:o.length(t.distance)}):null)}};rt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")],rt);let at=class extends c{_renderContent(){const{info:e}=this,{visibleElements:t}=e,n=this._messagesTooltip.sketch;return s(h,null,t.distance?s(u,{title:n.distance,value:this._formatters.verticalLengthRelative(e.distance)}):null)}};at=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateZ")],at);function ze(e,t){if(t==null)return null;const n=document.createElement("div");switch(t.type){case"draw-point":return new B({tooltip:e,info:t,container:n});case"draw-polygon":return new N({tooltip:e,info:t,container:n});case"draw-polyline":return new K({tooltip:e,info:t,container:n});case"draw-mesh":return new X({tooltip:e,info:t,container:n});case"draw-rectangle":return new G({tooltip:e,info:t,container:n});case"draw-circle":return new Y({tooltip:e,info:t,container:n});case"extent-rotate":return new Z({tooltip:e,info:t,container:n});case"extent-scale":return new j({tooltip:e,info:t,container:n});case"move-point":return new W({tooltip:e,info:t,container:n});case"selected-vertex":return new Q({tooltip:e,info:t,container:n});case"transform-absolute":return new tt({tooltip:e,info:t,container:n});case"transform-point":return new nt({tooltip:e,info:t,container:n});case"transform-mesh":return new et({tooltip:e,info:t,container:n});case"transform-rotate":return new it({tooltip:e,info:t,container:n});case"transform-scale":return new ot({tooltip:e,info:t,container:n});case"translate":return new st({tooltip:e,info:t,container:n});case"translate-vertex":return new lt({tooltip:e,info:t,container:n});case"translate-z":return new at({tooltip:e,info:t,container:n});case"translate-xy":return new rt({tooltip:e,info:t,container:n});case"reshape-edge-offset":return new J({tooltip:e,info:t,container:n})}}const Fe={base:`${f}`};let g=class extends oe.EventedAccessor{constructor(e){super(e),this.info=null,this.position=null,this.content=null,this.contentContainer=(()=>{const t=document.createElement("div");return t.classList.add(Fe.base),se(t),t})()}initialize(){const{contentContainer:e}=this;this.addHandles([S(()=>{var t;return(t=this.view.overlay)==null?void 0:t.surface},t=>{e.remove(),t==null||t.appendChild(e)},z),S(()=>this.info,(t,n)=>{if(this.content!=null&&t!=null&&n!=null&&t.type===n.type)this.content.info=t;else{this.content=gt(this.content);const i=ze(this,t);i&&(this.content=i,i.container&&e.appendChild(i.container),this.exitInputMode())}},z),S(()=>({container:this.contentContainer,content:this.content,screenPoint:this._screenPoint,positionMode:this.positionMode,position:this.position}),Ue,z),le(this.contentContainer,"paste",t=>{this.emit("paste",t)})])}destroy(){this.info=null,this.content=gt(this.content),this.contentContainer.remove()}get positionMode(){var e;return((e=this.content)==null?void 0:e.mode)==="input"?"fixed":"follow-cursor"}get mode(){var e;return((e=this.content)==null?void 0:e.mode)??"feedback"}get _screenPoint(){const{inputManager:e}=this.view;return e!=null&&e.multiTouchActive?null:e==null?void 0:e.latestPointerLocation}get visible(){var e;return((e=this.contentContainer)==null?void 0:e.style.display)!=="none"}clear(){this.info=null}async enterInputMode(e){var t;await((t=this.content)==null?void 0:t.enterInputMode(e))}async exitInputMode(e){var t;await((t=this.content)==null?void 0:t.exitInputMode(e))}};function Ue(e){if(e.positionMode==="fixed"&&!e.position)return;const{style:t}=e.container,n=e.position??e.screenPoint;if(n!=null&&e.content!=null){t.display="block";const i=re(e.container),o=`translate(${Math.round(n.x)+Ct[0]*(i?-1:1)}px, ${Math.round(n.y)+Ct[1]}px)`;t.transform=i?`translate(-100%, 0) ${o}`:o}else t.display="none"}l([a({nonNullable:!0})],g.prototype,"view",void 0),l([a()],g.prototype,"info",void 0),l([a()],g.prototype,"positionMode",null),l([a()],g.prototype,"position",void 0),l([a()],g.prototype,"content",void 0),l([a()],g.prototype,"mode",null),l([a()],g.prototype,"contentContainer",void 0),l([a()],g.prototype,"_screenPoint",null),g=l([p("esri.views.interactive.tooltip.Tooltip")],g);const Ct=[20,20];export{Be as A,Ne as B,Ge as G,Ze as H,je as J,L as K,Xe as L,Ke as M,dt as _,g as h,b as r,Ye as w};