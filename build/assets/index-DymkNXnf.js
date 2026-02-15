function _g(n,a){for(var i=0;i<a.length;i++){const o=a[i];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in n)){const c=Object.getOwnPropertyDescriptor(o,u);c&&Object.defineProperty(n,u,c.get?c:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(u){if(u.ep)return;u.ep=!0;const c=i(u);fetch(u.href,c)}})();function ou(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sl={exports:{}},za={},jl={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function Dg(){if(pm)return Ie;pm=1;var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function b(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,M={};function I(P,O,S){this.props=P,this.context=O,this.refs=M,this.updater=S||k}I.prototype.isReactComponent={},I.prototype.setState=function(P,O){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,O,"setState")},I.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=I.prototype;function U(P,O,S){this.props=P,this.context=O,this.refs=M,this.updater=S||k}var B=U.prototype=new R;B.constructor=U,z(B,I.prototype),B.isPureReactComponent=!0;var Z=Array.isArray,ce=Object.prototype.hasOwnProperty,D={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function Q(P,O,S){var ie,we={},pe=null,xe=null;if(O!=null)for(ie in O.ref!==void 0&&(xe=O.ref),O.key!==void 0&&(pe=""+O.key),O)ce.call(O,ie)&&!le.hasOwnProperty(ie)&&(we[ie]=O[ie]);var Ce=arguments.length-2;if(Ce===1)we.children=S;else if(1<Ce){for(var Ae=Array(Ce),Oe=0;Oe<Ce;Oe++)Ae[Oe]=arguments[Oe+2];we.children=Ae}if(P&&P.defaultProps)for(ie in Ce=P.defaultProps,Ce)we[ie]===void 0&&(we[ie]=Ce[ie]);return{$$typeof:n,type:P,key:pe,ref:xe,props:we,_owner:D.current}}function de(P,O){return{$$typeof:n,type:P.type,key:O,ref:P.ref,props:P.props,_owner:P._owner}}function ge(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function J(P){var O={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(S){return O[S]})}var Y=/\/+/g;function je(P,O){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):O.toString(36)}function te(P,O,S,ie,we){var pe=typeof P;(pe==="undefined"||pe==="boolean")&&(P=null);var xe=!1;if(P===null)xe=!0;else switch(pe){case"string":case"number":xe=!0;break;case"object":switch(P.$$typeof){case n:case a:xe=!0}}if(xe)return xe=P,we=we(xe),P=ie===""?"."+je(xe,0):ie,Z(we)?(S="",P!=null&&(S=P.replace(Y,"$&/")+"/"),te(we,O,S,"",function(Oe){return Oe})):we!=null&&(ge(we)&&(we=de(we,S+(!we.key||xe&&xe.key===we.key?"":(""+we.key).replace(Y,"$&/")+"/")+P)),O.push(we)),1;if(xe=0,ie=ie===""?".":ie+":",Z(P))for(var Ce=0;Ce<P.length;Ce++){pe=P[Ce];var Ae=ie+je(pe,Ce);xe+=te(pe,O,S,Ae,we)}else if(Ae=b(P),typeof Ae=="function")for(P=Ae.call(P),Ce=0;!(pe=P.next()).done;)pe=pe.value,Ae=ie+je(pe,Ce++),xe+=te(pe,O,S,Ae,we);else if(pe==="object")throw O=String(P),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return xe}function G(P,O,S){if(P==null)return P;var ie=[],we=0;return te(P,ie,"","",function(pe){return O.call(S,pe,we++)}),ie}function me(P){if(P._status===-1){var O=P._result;O=O(),O.then(function(S){(P._status===0||P._status===-1)&&(P._status=1,P._result=S)},function(S){(P._status===0||P._status===-1)&&(P._status=2,P._result=S)}),P._status===-1&&(P._status=0,P._result=O)}if(P._status===1)return P._result.default;throw P._result}var ye={current:null},_={transition:null},se={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:_,ReactCurrentOwner:D};function w(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:G,forEach:function(P,O,S){G(P,function(){O.apply(this,arguments)},S)},count:function(P){var O=0;return G(P,function(){O++}),O},toArray:function(P){return G(P,function(O){return O})||[]},only:function(P){if(!ge(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Ie.Component=I,Ie.Fragment=i,Ie.Profiler=u,Ie.PureComponent=U,Ie.StrictMode=o,Ie.Suspense=h,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Ie.act=w,Ie.cloneElement=function(P,O,S){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ie=z({},P.props),we=P.key,pe=P.ref,xe=P._owner;if(O!=null){if(O.ref!==void 0&&(pe=O.ref,xe=D.current),O.key!==void 0&&(we=""+O.key),P.type&&P.type.defaultProps)var Ce=P.type.defaultProps;for(Ae in O)ce.call(O,Ae)&&!le.hasOwnProperty(Ae)&&(ie[Ae]=O[Ae]===void 0&&Ce!==void 0?Ce[Ae]:O[Ae])}var Ae=arguments.length-2;if(Ae===1)ie.children=S;else if(1<Ae){Ce=Array(Ae);for(var Oe=0;Oe<Ae;Oe++)Ce[Oe]=arguments[Oe+2];ie.children=Ce}return{$$typeof:n,type:P.type,key:we,ref:pe,props:ie,_owner:xe}},Ie.createContext=function(P){return P={$$typeof:m,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:c,_context:P},P.Consumer=P},Ie.createElement=Q,Ie.createFactory=function(P){var O=Q.bind(null,P);return O.type=P,O},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(P){return{$$typeof:f,render:P}},Ie.isValidElement=ge,Ie.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:me}},Ie.memo=function(P,O){return{$$typeof:g,type:P,compare:O===void 0?null:O}},Ie.startTransition=function(P){var O=_.transition;_.transition={};try{P()}finally{_.transition=O}},Ie.unstable_act=w,Ie.useCallback=function(P,O){return ye.current.useCallback(P,O)},Ie.useContext=function(P){return ye.current.useContext(P)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(P){return ye.current.useDeferredValue(P)},Ie.useEffect=function(P,O){return ye.current.useEffect(P,O)},Ie.useId=function(){return ye.current.useId()},Ie.useImperativeHandle=function(P,O,S){return ye.current.useImperativeHandle(P,O,S)},Ie.useInsertionEffect=function(P,O){return ye.current.useInsertionEffect(P,O)},Ie.useLayoutEffect=function(P,O){return ye.current.useLayoutEffect(P,O)},Ie.useMemo=function(P,O){return ye.current.useMemo(P,O)},Ie.useReducer=function(P,O,S){return ye.current.useReducer(P,O,S)},Ie.useRef=function(P){return ye.current.useRef(P)},Ie.useState=function(P){return ye.current.useState(P)},Ie.useSyncExternalStore=function(P,O,S){return ye.current.useSyncExternalStore(P,O,S)},Ie.useTransition=function(){return ye.current.useTransition()},Ie.version="18.3.1",Ie}var fm;function lu(){return fm||(fm=1,jl.exports=Dg()),jl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Fg(){if(hm)return za;hm=1;var n=lu(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function m(f,h,g){var x,v={},b=null,k=null;g!==void 0&&(b=""+g),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(k=h.ref);for(x in h)o.call(h,x)&&!c.hasOwnProperty(x)&&(v[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)v[x]===void 0&&(v[x]=h[x]);return{$$typeof:a,type:f,key:b,ref:k,props:v,_owner:u.current}}return za.Fragment=i,za.jsx=m,za.jsxs=m,za}var gm;function Og(){return gm||(gm=1,Sl.exports=Fg()),Sl.exports}var s=Og(),cs={},Cl={exports:{}},kt={},Nl={exports:{}},Pl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function Bg(){return xm||(xm=1,(function(n){function a(_,se){var w=_.length;_.push(se);e:for(;0<w;){var P=w-1>>>1,O=_[P];if(0<u(O,se))_[P]=se,_[w]=O,w=P;else break e}}function i(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var se=_[0],w=_.pop();if(w!==se){_[0]=w;e:for(var P=0,O=_.length,S=O>>>1;P<S;){var ie=2*(P+1)-1,we=_[ie],pe=ie+1,xe=_[pe];if(0>u(we,w))pe<O&&0>u(xe,we)?(_[P]=xe,_[pe]=w,P=pe):(_[P]=we,_[ie]=w,P=ie);else if(pe<O&&0>u(xe,w))_[P]=xe,_[pe]=w,P=pe;else break e}}return se}function u(_,se){var w=_.sortIndex-se.sortIndex;return w!==0?w:_.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var m=Date,f=m.now();n.unstable_now=function(){return m.now()-f}}var h=[],g=[],x=1,v=null,b=3,k=!1,z=!1,M=!1,I=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(_){for(var se=i(g);se!==null;){if(se.callback===null)o(g);else if(se.startTime<=_)o(g),se.sortIndex=se.expirationTime,a(h,se);else break;se=i(g)}}function Z(_){if(M=!1,B(_),!z)if(i(h)!==null)z=!0,me(ce);else{var se=i(g);se!==null&&ye(Z,se.startTime-_)}}function ce(_,se){z=!1,M&&(M=!1,R(Q),Q=-1),k=!0;var w=b;try{for(B(se),v=i(h);v!==null&&(!(v.expirationTime>se)||_&&!J());){var P=v.callback;if(typeof P=="function"){v.callback=null,b=v.priorityLevel;var O=P(v.expirationTime<=se);se=n.unstable_now(),typeof O=="function"?v.callback=O:v===i(h)&&o(h),B(se)}else o(h);v=i(h)}if(v!==null)var S=!0;else{var ie=i(g);ie!==null&&ye(Z,ie.startTime-se),S=!1}return S}finally{v=null,b=w,k=!1}}var D=!1,le=null,Q=-1,de=5,ge=-1;function J(){return!(n.unstable_now()-ge<de)}function Y(){if(le!==null){var _=n.unstable_now();ge=_;var se=!0;try{se=le(!0,_)}finally{se?je():(D=!1,le=null)}}else D=!1}var je;if(typeof U=="function")je=function(){U(Y)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,G=te.port2;te.port1.onmessage=Y,je=function(){G.postMessage(null)}}else je=function(){I(Y,0)};function me(_){le=_,D||(D=!0,je())}function ye(_,se){Q=I(function(){_(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_continueExecution=function(){z||k||(z=!0,me(ce))},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(_){switch(b){case 1:case 2:case 3:var se=3;break;default:se=b}var w=b;b=se;try{return _()}finally{b=w}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(_,se){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var w=b;b=_;try{return se()}finally{b=w}},n.unstable_scheduleCallback=function(_,se,w){var P=n.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?P+w:P):w=P,_){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=w+O,_={id:x++,callback:se,priorityLevel:_,startTime:w,expirationTime:O,sortIndex:-1},w>P?(_.sortIndex=w,a(g,_),i(h)===null&&_===i(g)&&(M?(R(Q),Q=-1):M=!0,ye(Z,w-P))):(_.sortIndex=O,a(h,_),z||k||(z=!0,me(ce))),_},n.unstable_shouldYield=J,n.unstable_wrapCallback=function(_){var se=b;return function(){var w=b;b=se;try{return _.apply(this,arguments)}finally{b=w}}}})(Pl)),Pl}var ym;function Ug(){return ym||(ym=1,Nl.exports=Bg()),Nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Hg(){if(vm)return kt;vm=1;var n=lu(),a=Ug();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,u={};function c(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(u[e]=t,e=0;e<t.length;e++)o.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function b(e){return h.call(v,e)?!0:h.call(x,e)?!1:g.test(e)?v[e]=!0:(x[e]=!0,!1)}function k(e,t,r,l){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,t,r,l){if(t===null||typeof t>"u"||k(e,t,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,r,l,d,p,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=p,this.removeEmptyString=y}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(R,U);I[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(R,U);I[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(R,U);I[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function B(e,t,r,l){var d=I.hasOwnProperty(t)?I[t]:null;(d!==null?d.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z(t,r,d,l)&&(r=null),l||d===null?b(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):d.mustUseProperty?e[d.propertyName]=r===null?d.type===3?!1:"":r:(t=d.attributeName,l=d.attributeNamespace,r===null?e.removeAttribute(t):(d=d.type,r=d===3||d===4&&r===!0?"":""+r,l?e.setAttributeNS(l,t,r):e.setAttribute(t,r))))}var Z=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),D=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),J=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),_=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var w=Object.assign,P;function O(e){if(P===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return`
`+P+e}var S=!1;function ie(e,t){if(!e||S)return"";S=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var l=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){l=T}e.call(t.prototype)}else{try{throw Error()}catch(T){l=T}e()}}catch(T){if(T&&l&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),p=l.stack.split(`
`),y=d.length-1,j=p.length-1;1<=y&&0<=j&&d[y]!==p[j];)j--;for(;1<=y&&0<=j;y--,j--)if(d[y]!==p[j]){if(y!==1||j!==1)do if(y--,j--,0>j||d[y]!==p[j]){var C=`
`+d[y].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=y&&0<=j);break}}}finally{S=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?O(e):""}function we(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case D:return"Portal";case de:return"Profiler";case Q:return"StrictMode";case je:return"Suspense";case te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=Ae(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var d=r.get,p=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(y){l=""+y,p.call(this,y)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ct(e){e._valueTracker||(e._valueTracker=Oe(e))}function on(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),l="";return e&&(l=Ae(e)?e.checked?"true":"false":e.value),e=l,e!==r?(t.setValue(e),!0):!1}function ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qr(e,t){var r=t.checked;return w({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Kr(e,t){var r=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;r=Ce(t.value!=null?t.value:r),e._wrapperState={initialChecked:l,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yr(e,t){t=t.checked,t!=null&&B(e,"checked",t,!1)}function cr(e,t){Yr(e,t);var r=Ce(t.value),l=t.type;if(r!=null)l==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dr(e,t.type,r):t.hasOwnProperty("defaultValue")&&dr(e,t.type,Ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Za(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function dr(e,t,r){(t!=="number"||ur(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var kn=Array.isArray;function bn(e,t,r,l){if(e=e.options,t){t={};for(var d=0;d<r.length;d++)t["$"+r[d]]=!0;for(r=0;r<e.length;r++)d=t.hasOwnProperty("$"+e[r].value),e[r].selected!==d&&(e[r].selected=d),d&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Ce(r),t=null,d=0;d<e.length;d++){if(e[d].value===r){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Xr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return w({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ei(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i(92));if(kn(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ce(r)}}function ti(e,t){var r=Ce(t.value),l=Ce(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),l!=null&&(e.defaultValue=""+l)}function ni(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function F(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function K(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?F(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ve,Ee=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,l,d){MSApp.execUnsafeLocalFunction(function(){return e(t,r,l,d)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ve=ve||document.createElement("div"),ve.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ve.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Re(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ln=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(e){ln.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),at[t]=at[e]})});function Mt(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||at.hasOwnProperty(e)&&at[e]?(""+t).trim():t+"px"}function wn(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var l=r.indexOf("--")===0,d=Mt(r,t[r],l);r==="float"&&(r="cssFloat"),l?e.setProperty(r,d):e[r]=d}}var qn=w({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(e,t){if(t){if(qn[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Yt(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,mr=null,pr=null;function Au(e){if(e=va(e)){if(typeof Fs!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Ci(t),Fs(e.stateNode,e.type,t))}}function Ru(e){mr?pr?pr.push(e):pr=[e]:mr=e}function Tu(){if(mr){var e=mr,t=pr;if(pr=mr=null,Au(e),t)for(e=0;e<t.length;e++)Au(t[e])}}function Mu(e,t){return e(t)}function zu(){}var Os=!1;function Lu(e,t,r){if(Os)return e(t,r);Os=!0;try{return Mu(e,t,r)}finally{Os=!1,(mr!==null||pr!==null)&&(zu(),Tu())}}function Jr(e,t){var r=e.stateNode;if(r===null)return null;var l=Ci(r);if(l===null)return null;r=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var Bs=!1;if(f)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Bs=!1}function Hf(e,t,r,l,d,p,y,j,C){var T=Array.prototype.slice.call(arguments,3);try{t.apply(r,T)}catch(V){this.onError(V)}}var ea=!1,ri=null,ai=!1,Us=null,Vf={onError:function(e){ea=!0,ri=e}};function Wf(e,t,r,l,d,p,y,j,C){ea=!1,ri=null,Hf.apply(Vf,arguments)}function $f(e,t,r,l,d,p,y,j,C){if(Wf.apply(this,arguments),ea){if(ea){var T=ri;ea=!1,ri=null}else throw Error(i(198));ai||(ai=!0,Us=T)}}function Gn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function _u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Du(e){if(Gn(e)!==e)throw Error(i(188))}function qf(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,l=t;;){var d=r.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){r=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===r)return Du(d),e;if(p===l)return Du(d),t;p=p.sibling}throw Error(i(188))}if(r.return!==l.return)r=d,l=p;else{for(var y=!1,j=d.child;j;){if(j===r){y=!0,r=d,l=p;break}if(j===l){y=!0,l=d,r=p;break}j=j.sibling}if(!y){for(j=p.child;j;){if(j===r){y=!0,r=p,l=d;break}if(j===l){y=!0,l=p,r=d;break}j=j.sibling}if(!y)throw Error(i(189))}}if(r.alternate!==l)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function Fu(e){return e=qf(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Bu=a.unstable_scheduleCallback,Uu=a.unstable_cancelCallback,Gf=a.unstable_shouldYield,Qf=a.unstable_requestPaint,Ge=a.unstable_now,Kf=a.unstable_getCurrentPriorityLevel,Hs=a.unstable_ImmediatePriority,Hu=a.unstable_UserBlockingPriority,ii=a.unstable_NormalPriority,Yf=a.unstable_LowPriority,Vu=a.unstable_IdlePriority,si=null,Xt=null;function Xf(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:eh,Jf=Math.log,Zf=Math.LN2;function eh(e){return e>>>=0,e===0?32:31-(Jf(e)/Zf|0)|0}var oi=64,li=4194304;function ta(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,d=e.suspendedLanes,p=e.pingedLanes,y=r&268435455;if(y!==0){var j=y&~d;j!==0?l=ta(j):(p&=y,p!==0&&(l=ta(p)))}else y=r&~d,y!==0?l=ta(y):p!==0&&(l=ta(p));if(l===0)return 0;if(t!==0&&t!==l&&(t&d)===0&&(d=l&-l,p=t&-t,d>=p||d===16&&(p&4194240)!==0))return t;if((l&4)!==0&&(l|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)r=31-Ut(t),d=1<<r,l|=e[r],t&=~d;return l}function th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nh(e,t){for(var r=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes;0<p;){var y=31-Ut(p),j=1<<y,C=d[y];C===-1?((j&r)===0||(j&l)!==0)&&(d[y]=th(j,t)):C<=t&&(e.expiredLanes|=j),p&=~j}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=oi;return oi<<=1,(oi&4194240)===0&&(oi=64),e}function Ws(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function na(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=r}function rh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<r;){var d=31-Ut(r),p=1<<d;t[d]=0,l[d]=-1,e[d]=-1,r&=~p}}function $s(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var l=31-Ut(r),d=1<<l;d&t|e[l]&t&&(e[l]|=t),r&=~d}}var Le=0;function $u(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var qu,qs,Gu,Qu,Ku,Gs=!1,ci=[],Sn=null,jn=null,Cn=null,ra=new Map,aa=new Map,Nn=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(t.pointerId)}}function ia(e,t,r,l,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},t!==null&&(t=va(t),t!==null&&qs(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function ih(e,t,r,l,d){switch(t){case"focusin":return Sn=ia(Sn,e,t,r,l,d),!0;case"dragenter":return jn=ia(jn,e,t,r,l,d),!0;case"mouseover":return Cn=ia(Cn,e,t,r,l,d),!0;case"pointerover":var p=d.pointerId;return ra.set(p,ia(ra.get(p)||null,e,t,r,l,d)),!0;case"gotpointercapture":return p=d.pointerId,aa.set(p,ia(aa.get(p)||null,e,t,r,l,d)),!0}return!1}function Xu(e){var t=Qn(e.target);if(t!==null){var r=Gn(t);if(r!==null){if(t=r.tag,t===13){if(t=_u(r),t!==null){e.blockedOn=t,Ku(e.priority,function(){Gu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Nt=l,r.target.dispatchEvent(l),Nt=null}else return t=va(r),t!==null&&qs(t),e.blockedOn=r,!1;t.shift()}return!0}function Ju(e,t,r){di(e)&&r.delete(t)}function sh(){Gs=!1,Sn!==null&&di(Sn)&&(Sn=null),jn!==null&&di(jn)&&(jn=null),Cn!==null&&di(Cn)&&(Cn=null),ra.forEach(Ju),aa.forEach(Ju)}function sa(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,sh)))}function oa(e){function t(d){return sa(d,e)}if(0<ci.length){sa(ci[0],e);for(var r=1;r<ci.length;r++){var l=ci[r];l.blockedOn===e&&(l.blockedOn=null)}}for(Sn!==null&&sa(Sn,e),jn!==null&&sa(jn,e),Cn!==null&&sa(Cn,e),ra.forEach(t),aa.forEach(t),r=0;r<Nn.length;r++)l=Nn[r],l.blockedOn===e&&(l.blockedOn=null);for(;0<Nn.length&&(r=Nn[0],r.blockedOn===null);)Xu(r),r.blockedOn===null&&Nn.shift()}var fr=Z.ReactCurrentBatchConfig,mi=!0;function oh(e,t,r,l){var d=Le,p=fr.transition;fr.transition=null;try{Le=1,Qs(e,t,r,l)}finally{Le=d,fr.transition=p}}function lh(e,t,r,l){var d=Le,p=fr.transition;fr.transition=null;try{Le=4,Qs(e,t,r,l)}finally{Le=d,fr.transition=p}}function Qs(e,t,r,l){if(mi){var d=Ks(e,t,r,l);if(d===null)po(e,t,l,pi,r),Yu(e,l);else if(ih(d,e,t,r,l))l.stopPropagation();else if(Yu(e,l),t&4&&-1<ah.indexOf(e)){for(;d!==null;){var p=va(d);if(p!==null&&qu(p),p=Ks(e,t,r,l),p===null&&po(e,t,l,pi,r),p===d)break;d=p}d!==null&&l.stopPropagation()}else po(e,t,l,null,r)}}var pi=null;function Ks(e,t,r,l){if(pi=null,e=Ds(l),e=Qn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=_u(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pi=e,null}function Zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kf()){case Hs:return 1;case Hu:return 4;case ii:case Yf:return 16;case Vu:return 536870912;default:return 16}default:return 16}}var Pn=null,Ys=null,fi=null;function ec(){if(fi)return fi;var e,t=Ys,r=t.length,l,d="value"in Pn?Pn.value:Pn.textContent,p=d.length;for(e=0;e<r&&t[e]===d[e];e++);var y=r-e;for(l=1;l<=y&&t[r-l]===d[p-l];l++);return fi=d.slice(e,1<l?1-l:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function tc(){return!1}function Pt(e){function t(r,l,d,p,y){this._reactName=r,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(r=e[j],this[j]=r?r(p):p[j]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?gi:tc,this.isPropagationStopped=tc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Pt(hr),la=w({},hr,{view:0,detail:0}),uh=Pt(la),Js,Zs,ua,xi=w({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ua&&(ua&&e.type==="mousemove"?(Js=e.screenX-ua.screenX,Zs=e.screenY-ua.screenY):Zs=Js=0,ua=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),nc=Pt(xi),ch=w({},xi,{dataTransfer:0}),dh=Pt(ch),mh=w({},la,{relatedTarget:0}),eo=Pt(mh),ph=w({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),fh=Pt(ph),hh=w({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gh=Pt(hh),xh=w({},hr,{data:0}),rc=Pt(xh),yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function to(){return bh}var wh=w({},la,{key:function(e){if(e.key){var t=yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sh=Pt(wh),jh=w({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=Pt(jh),Ch=w({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),Nh=Pt(Ch),Ph=w({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eh=Pt(Ph),Ih=w({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=Pt(Ih),Rh=[9,13,27,32],no=f&&"CompositionEvent"in window,ca=null;f&&"documentMode"in document&&(ca=document.documentMode);var Th=f&&"TextEvent"in window&&!ca,ic=f&&(!no||ca&&8<ca&&11>=ca),sc=" ",oc=!1;function lc(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function Mh(e,t){switch(e){case"compositionend":return uc(t);case"keypress":return t.which!==32?null:(oc=!0,sc);case"textInput":return e=t.data,e===sc&&oc?null:e;default:return null}}function zh(e,t){if(gr)return e==="compositionend"||!no&&lc(e,t)?(e=ec(),fi=Ys=Pn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ic&&t.locale!=="ko"?null:t.data;default:return null}}var Lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lh[e.type]:t==="textarea"}function dc(e,t,r,l){Ru(l),t=wi(t,"onChange"),0<t.length&&(r=new Xs("onChange","change",null,r,l),e.push({event:r,listeners:t}))}var da=null,ma=null;function _h(e){Ic(e,0)}function yi(e){var t=br(e);if(on(t))return e}function Dh(e,t){if(e==="change")return t}var mc=!1;if(f){var ro;if(f){var ao="oninput"in document;if(!ao){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),ao=typeof pc.oninput=="function"}ro=ao}else ro=!1;mc=ro&&(!document.documentMode||9<document.documentMode)}function fc(){da&&(da.detachEvent("onpropertychange",hc),ma=da=null)}function hc(e){if(e.propertyName==="value"&&yi(ma)){var t=[];dc(t,ma,e,Ds(e)),Lu(_h,t)}}function Fh(e,t,r){e==="focusin"?(fc(),da=t,ma=r,da.attachEvent("onpropertychange",hc)):e==="focusout"&&fc()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(ma)}function Bh(e,t){if(e==="click")return yi(t)}function Uh(e,t){if(e==="input"||e==="change")return yi(t)}function Hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Hh;function pa(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var d=r[l];if(!h.call(t,d)||!Ht(e[d],t[d]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,t){var r=gc(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=t&&l>=t)return{node:r,offset:t-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=gc(r)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vc(){for(var e=window,t=ur();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ur(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vh(e){var t=vc(),r=e.focusedElem,l=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&yc(r.ownerDocument.documentElement,r)){if(l!==null&&io(r)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=r.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!e.extend&&p>l&&(d=l,l=p,p=d),d=xc(r,p);var y=xc(r,l);d&&y&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),p>l?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wh=f&&"documentMode"in document&&11>=document.documentMode,xr=null,so=null,fa=null,oo=!1;function kc(e,t,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;oo||xr==null||xr!==ur(l)||(l=xr,"selectionStart"in l&&io(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&pa(fa,l)||(fa=l,l=wi(so,"onSelect"),0<l.length&&(t=new Xs("onSelect","select",null,t,r),e.push({event:t,listeners:l}),t.target=xr)))}function vi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var yr={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},lo={},bc={};f&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function ki(e){if(lo[e])return lo[e];if(!yr[e])return e;var t=yr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in bc)return lo[e]=t[r];return e}var wc=ki("animationend"),Sc=ki("animationiteration"),jc=ki("animationstart"),Cc=ki("transitionend"),Nc=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Nc.set(e,t),c(t,[e])}for(var uo=0;uo<Pc.length;uo++){var co=Pc[uo],$h=co.toLowerCase(),qh=co[0].toUpperCase()+co.slice(1);En($h,"on"+qh)}En(wc,"onAnimationEnd"),En(Sc,"onAnimationIteration"),En(jc,"onAnimationStart"),En("dblclick","onDoubleClick"),En("focusin","onFocus"),En("focusout","onBlur"),En(Cc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Ec(e,t,r){var l=e.type||"unknown-event";e.currentTarget=r,$f(l,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],d=l.event;l=l.listeners;e:{var p=void 0;if(t)for(var y=l.length-1;0<=y;y--){var j=l[y],C=j.instance,T=j.currentTarget;if(j=j.listener,C!==p&&d.isPropagationStopped())break e;Ec(d,j,T),p=C}else for(y=0;y<l.length;y++){if(j=l[y],C=j.instance,T=j.currentTarget,j=j.listener,C!==p&&d.isPropagationStopped())break e;Ec(d,j,T),p=C}}}if(ai)throw e=Us,ai=!1,Us=null,e}function Be(e,t){var r=t[vo];r===void 0&&(r=t[vo]=new Set);var l=e+"__bubble";r.has(l)||(Ac(t,e,2,!1),r.add(l))}function mo(e,t,r){var l=0;t&&(l|=4),Ac(r,e,l,t)}var bi="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[bi]){e[bi]=!0,o.forEach(function(r){r!=="selectionchange"&&(Gh.has(r)||mo(r,!1,e),mo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bi]||(t[bi]=!0,mo("selectionchange",!1,t))}}function Ac(e,t,r,l){switch(Zu(t)){case 1:var d=oh;break;case 4:d=lh;break;default:d=Qs}r=d.bind(null,t,r,e),d=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(t,r,{capture:!0,passive:d}):e.addEventListener(t,r,!0):d!==void 0?e.addEventListener(t,r,{passive:d}):e.addEventListener(t,r,!1)}function po(e,t,r,l,d){var p=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var j=l.stateNode.containerInfo;if(j===d||j.nodeType===8&&j.parentNode===d)break;if(y===4)for(y=l.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;y=y.return}for(;j!==null;){if(y=Qn(j),y===null)return;if(C=y.tag,C===5||C===6){l=p=y;continue e}j=j.parentNode}}l=l.return}Lu(function(){var T=p,V=Ds(r),W=[];e:{var H=Nc.get(e);if(H!==void 0){var X=Xs,ne=e;switch(e){case"keypress":if(hi(r)===0)break e;case"keydown":case"keyup":X=Sh;break;case"focusin":ne="focus",X=eo;break;case"focusout":ne="blur",X=eo;break;case"beforeblur":case"afterblur":X=eo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=dh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Nh;break;case wc:case Sc:case jc:X=fh;break;case Cc:X=Eh;break;case"scroll":X=uh;break;case"wheel":X=Ah;break;case"copy":case"cut":case"paste":X=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=ac}var oe=(t&4)!==0,Qe=!oe&&e==="scroll",E=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=T,A;N!==null;){A=N;var q=A.stateNode;if(A.tag===5&&q!==null&&(A=q,E!==null&&(q=Jr(N,E),q!=null&&oe.push(xa(N,q,A)))),Qe)break;N=N.return}0<oe.length&&(H=new X(H,ne,null,r,V),W.push({event:H,listeners:oe}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",H&&r!==Nt&&(ne=r.relatedTarget||r.fromElement)&&(Qn(ne)||ne[un]))break e;if((X||H)&&(H=V.window===V?V:(H=V.ownerDocument)?H.defaultView||H.parentWindow:window,X?(ne=r.relatedTarget||r.toElement,X=T,ne=ne?Qn(ne):null,ne!==null&&(Qe=Gn(ne),ne!==Qe||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(X=null,ne=T),X!==ne)){if(oe=nc,q="onMouseLeave",E="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(oe=ac,q="onPointerLeave",E="onPointerEnter",N="pointer"),Qe=X==null?H:br(X),A=ne==null?H:br(ne),H=new oe(q,N+"leave",X,r,V),H.target=Qe,H.relatedTarget=A,q=null,Qn(V)===T&&(oe=new oe(E,N+"enter",ne,r,V),oe.target=A,oe.relatedTarget=Qe,q=oe),Qe=q,X&&ne)t:{for(oe=X,E=ne,N=0,A=oe;A;A=vr(A))N++;for(A=0,q=E;q;q=vr(q))A++;for(;0<N-A;)oe=vr(oe),N--;for(;0<A-N;)E=vr(E),A--;for(;N--;){if(oe===E||E!==null&&oe===E.alternate)break t;oe=vr(oe),E=vr(E)}oe=null}else oe=null;X!==null&&Rc(W,H,X,oe,!1),ne!==null&&Qe!==null&&Rc(W,Qe,ne,oe,!0)}}e:{if(H=T?br(T):window,X=H.nodeName&&H.nodeName.toLowerCase(),X==="select"||X==="input"&&H.type==="file")var ue=Dh;else if(cc(H))if(mc)ue=Uh;else{ue=Oh;var fe=Fh}else(X=H.nodeName)&&X.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ue=Bh);if(ue&&(ue=ue(e,T))){dc(W,ue,r,V);break e}fe&&fe(e,H,T),e==="focusout"&&(fe=H._wrapperState)&&fe.controlled&&H.type==="number"&&dr(H,"number",H.value)}switch(fe=T?br(T):window,e){case"focusin":(cc(fe)||fe.contentEditable==="true")&&(xr=fe,so=T,fa=null);break;case"focusout":fa=so=xr=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,kc(W,r,V);break;case"selectionchange":if(Wh)break;case"keydown":case"keyup":kc(W,r,V)}var he;if(no)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else gr?lc(e,r)&&(ke="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ke="onCompositionStart");ke&&(ic&&r.locale!=="ko"&&(gr||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&gr&&(he=ec()):(Pn=V,Ys="value"in Pn?Pn.value:Pn.textContent,gr=!0)),fe=wi(T,ke),0<fe.length&&(ke=new rc(ke,e,null,r,V),W.push({event:ke,listeners:fe}),he?ke.data=he:(he=uc(r),he!==null&&(ke.data=he)))),(he=Th?Mh(e,r):zh(e,r))&&(T=wi(T,"onBeforeInput"),0<T.length&&(V=new rc("onBeforeInput","beforeinput",null,r,V),W.push({event:V,listeners:T}),V.data=he))}Ic(W,t)})}function xa(e,t,r){return{instance:e,listener:t,currentTarget:r}}function wi(e,t){for(var r=t+"Capture",l=[];e!==null;){var d=e,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Jr(e,r),p!=null&&l.unshift(xa(e,p,d)),p=Jr(e,t),p!=null&&l.push(xa(e,p,d))),e=e.return}return l}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rc(e,t,r,l,d){for(var p=t._reactName,y=[];r!==null&&r!==l;){var j=r,C=j.alternate,T=j.stateNode;if(C!==null&&C===l)break;j.tag===5&&T!==null&&(j=T,d?(C=Jr(r,p),C!=null&&y.unshift(xa(r,C,j))):d||(C=Jr(r,p),C!=null&&y.push(xa(r,C,j)))),r=r.return}y.length!==0&&e.push({event:t,listeners:y})}var Qh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(Qh,`
`).replace(Kh,"")}function Si(e,t,r){if(t=Tc(t),Tc(e)!==t&&r)throw Error(i(425))}function ji(){}var fo=null,ho=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=typeof setTimeout=="function"?setTimeout:void 0,Yh=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc<"u"?function(e){return Mc.resolve(null).then(e).catch(Jh)}:xo;function Jh(e){setTimeout(function(){throw e})}function yo(e,t){var r=t,l=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(l===0){e.removeChild(d),oa(t);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=d}while(r);oa(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+kr,ya="__reactProps$"+kr,un="__reactContainer$"+kr,vo="__reactEvents$"+kr,Zh="__reactListeners$"+kr,eg="__reactHandles$"+kr;function Qn(e){var t=e[Jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[un]||r[Jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=zc(e);e!==null;){if(r=e[Jt])return r;e=zc(e)}return t}e=r,r=e.parentNode}return null}function va(e){return e=e[Jt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ci(e){return e[ya]||null}var ko=[],wr=-1;function An(e){return{current:e}}function Ue(e){0>wr||(e.current=ko[wr],ko[wr]=null,wr--)}function _e(e,t){wr++,ko[wr]=e.current,e.current=t}var Rn={},lt=An(Rn),ht=An(!1),Kn=Rn;function Sr(e,t){var r=e.type.contextTypes;if(!r)return Rn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in r)d[p]=t[p];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function gt(e){return e=e.childContextTypes,e!=null}function Ni(){Ue(ht),Ue(lt)}function Lc(e,t,r){if(lt.current!==Rn)throw Error(i(168));_e(lt,t),_e(ht,r)}function _c(e,t,r){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var d in l)if(!(d in t))throw Error(i(108,xe(e)||"Unknown",d));return w({},r,l)}function Pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Kn=lt.current,_e(lt,e),_e(ht,ht.current),!0}function Dc(e,t,r){var l=e.stateNode;if(!l)throw Error(i(169));r?(e=_c(e,t,Kn),l.__reactInternalMemoizedMergedChildContext=e,Ue(ht),Ue(lt),_e(lt,e)):Ue(ht),_e(ht,r)}var cn=null,Ei=!1,bo=!1;function Fc(e){cn===null?cn=[e]:cn.push(e)}function tg(e){Ei=!0,Fc(e)}function Tn(){if(!bo&&cn!==null){bo=!0;var e=0,t=Le;try{var r=cn;for(Le=1;e<r.length;e++){var l=r[e];do l=l(!0);while(l!==null)}cn=null,Ei=!1}catch(d){throw cn!==null&&(cn=cn.slice(e+1)),Bu(Hs,Tn),d}finally{Le=t,bo=!1}}return null}var jr=[],Cr=0,Ii=null,Ai=0,zt=[],Lt=0,Yn=null,dn=1,mn="";function Xn(e,t){jr[Cr++]=Ai,jr[Cr++]=Ii,Ii=e,Ai=t}function Oc(e,t,r){zt[Lt++]=dn,zt[Lt++]=mn,zt[Lt++]=Yn,Yn=e;var l=dn;e=mn;var d=32-Ut(l)-1;l&=~(1<<d),r+=1;var p=32-Ut(t)+d;if(30<p){var y=d-d%5;p=(l&(1<<y)-1).toString(32),l>>=y,d-=y,dn=1<<32-Ut(t)+d|r<<d|l,mn=p+e}else dn=1<<p|r<<d|l,mn=e}function wo(e){e.return!==null&&(Xn(e,1),Oc(e,1,0))}function So(e){for(;e===Ii;)Ii=jr[--Cr],jr[Cr]=null,Ai=jr[--Cr],jr[Cr]=null;for(;e===Yn;)Yn=zt[--Lt],zt[Lt]=null,mn=zt[--Lt],zt[Lt]=null,dn=zt[--Lt],zt[Lt]=null}var Et=null,It=null,He=!1,Vt=null;function Bc(e,t){var r=Ot(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Uc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,It=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yn!==null?{id:dn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ot(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Et=e,It=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(He){var t=It;if(t){var r=t;if(!Uc(e,t)){if(jo(e))throw Error(i(418));t=In(r.nextSibling);var l=Et;t&&Uc(e,t)?Bc(l,r):(e.flags=e.flags&-4097|2,He=!1,Et=e)}}else{if(jo(e))throw Error(i(418));e.flags=e.flags&-4097|2,He=!1,Et=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function Ri(e){if(e!==Et)return!1;if(!He)return Hc(e),He=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=It)){if(jo(e))throw Vc(),Error(i(418));for(;t;)Bc(e,t),t=In(t.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){It=In(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}It=null}}else It=Et?In(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=It;e;)e=In(e.nextSibling)}function Nr(){It=Et=null,He=!1}function No(e){Vt===null?Vt=[e]:Vt.push(e)}var ng=Z.ReactCurrentBatchConfig;function ka(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var l=r.stateNode}if(!l)throw Error(i(147,e));var d=l,p=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===p?t.ref:(t=function(y){var j=d.refs;y===null?delete j[p]:j[p]=y},t._stringRef=p,t)}if(typeof e!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Ti(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wc(e){var t=e._init;return t(e._payload)}function $c(e){function t(E,N){if(e){var A=E.deletions;A===null?(E.deletions=[N],E.flags|=16):A.push(N)}}function r(E,N){if(!e)return null;for(;N!==null;)t(E,N),N=N.sibling;return null}function l(E,N){for(E=new Map;N!==null;)N.key!==null?E.set(N.key,N):E.set(N.index,N),N=N.sibling;return E}function d(E,N){return E=Bn(E,N),E.index=0,E.sibling=null,E}function p(E,N,A){return E.index=A,e?(A=E.alternate,A!==null?(A=A.index,A<N?(E.flags|=2,N):A):(E.flags|=2,N)):(E.flags|=1048576,N)}function y(E){return e&&E.alternate===null&&(E.flags|=2),E}function j(E,N,A,q){return N===null||N.tag!==6?(N=xl(A,E.mode,q),N.return=E,N):(N=d(N,A),N.return=E,N)}function C(E,N,A,q){var ue=A.type;return ue===le?V(E,N,A.props.children,q,A.key):N!==null&&(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===me&&Wc(ue)===N.type)?(q=d(N,A.props),q.ref=ka(E,N,A),q.return=E,q):(q=ns(A.type,A.key,A.props,null,E.mode,q),q.ref=ka(E,N,A),q.return=E,q)}function T(E,N,A,q){return N===null||N.tag!==4||N.stateNode.containerInfo!==A.containerInfo||N.stateNode.implementation!==A.implementation?(N=yl(A,E.mode,q),N.return=E,N):(N=d(N,A.children||[]),N.return=E,N)}function V(E,N,A,q,ue){return N===null||N.tag!==7?(N=ir(A,E.mode,q,ue),N.return=E,N):(N=d(N,A),N.return=E,N)}function W(E,N,A){if(typeof N=="string"&&N!==""||typeof N=="number")return N=xl(""+N,E.mode,A),N.return=E,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ce:return A=ns(N.type,N.key,N.props,null,E.mode,A),A.ref=ka(E,null,N),A.return=E,A;case D:return N=yl(N,E.mode,A),N.return=E,N;case me:var q=N._init;return W(E,q(N._payload),A)}if(kn(N)||se(N))return N=ir(N,E.mode,A,null),N.return=E,N;Ti(E,N)}return null}function H(E,N,A,q){var ue=N!==null?N.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return ue!==null?null:j(E,N,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ce:return A.key===ue?C(E,N,A,q):null;case D:return A.key===ue?T(E,N,A,q):null;case me:return ue=A._init,H(E,N,ue(A._payload),q)}if(kn(A)||se(A))return ue!==null?null:V(E,N,A,q,null);Ti(E,A)}return null}function X(E,N,A,q,ue){if(typeof q=="string"&&q!==""||typeof q=="number")return E=E.get(A)||null,j(N,E,""+q,ue);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case ce:return E=E.get(q.key===null?A:q.key)||null,C(N,E,q,ue);case D:return E=E.get(q.key===null?A:q.key)||null,T(N,E,q,ue);case me:var fe=q._init;return X(E,N,A,fe(q._payload),ue)}if(kn(q)||se(q))return E=E.get(A)||null,V(N,E,q,ue,null);Ti(N,q)}return null}function ne(E,N,A,q){for(var ue=null,fe=null,he=N,ke=N=0,rt=null;he!==null&&ke<A.length;ke++){he.index>ke?(rt=he,he=null):rt=he.sibling;var Me=H(E,he,A[ke],q);if(Me===null){he===null&&(he=rt);break}e&&he&&Me.alternate===null&&t(E,he),N=p(Me,N,ke),fe===null?ue=Me:fe.sibling=Me,fe=Me,he=rt}if(ke===A.length)return r(E,he),He&&Xn(E,ke),ue;if(he===null){for(;ke<A.length;ke++)he=W(E,A[ke],q),he!==null&&(N=p(he,N,ke),fe===null?ue=he:fe.sibling=he,fe=he);return He&&Xn(E,ke),ue}for(he=l(E,he);ke<A.length;ke++)rt=X(he,E,ke,A[ke],q),rt!==null&&(e&&rt.alternate!==null&&he.delete(rt.key===null?ke:rt.key),N=p(rt,N,ke),fe===null?ue=rt:fe.sibling=rt,fe=rt);return e&&he.forEach(function(Un){return t(E,Un)}),He&&Xn(E,ke),ue}function oe(E,N,A,q){var ue=se(A);if(typeof ue!="function")throw Error(i(150));if(A=ue.call(A),A==null)throw Error(i(151));for(var fe=ue=null,he=N,ke=N=0,rt=null,Me=A.next();he!==null&&!Me.done;ke++,Me=A.next()){he.index>ke?(rt=he,he=null):rt=he.sibling;var Un=H(E,he,Me.value,q);if(Un===null){he===null&&(he=rt);break}e&&he&&Un.alternate===null&&t(E,he),N=p(Un,N,ke),fe===null?ue=Un:fe.sibling=Un,fe=Un,he=rt}if(Me.done)return r(E,he),He&&Xn(E,ke),ue;if(he===null){for(;!Me.done;ke++,Me=A.next())Me=W(E,Me.value,q),Me!==null&&(N=p(Me,N,ke),fe===null?ue=Me:fe.sibling=Me,fe=Me);return He&&Xn(E,ke),ue}for(he=l(E,he);!Me.done;ke++,Me=A.next())Me=X(he,E,ke,Me.value,q),Me!==null&&(e&&Me.alternate!==null&&he.delete(Me.key===null?ke:Me.key),N=p(Me,N,ke),fe===null?ue=Me:fe.sibling=Me,fe=Me);return e&&he.forEach(function(Lg){return t(E,Lg)}),He&&Xn(E,ke),ue}function Qe(E,N,A,q){if(typeof A=="object"&&A!==null&&A.type===le&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ce:e:{for(var ue=A.key,fe=N;fe!==null;){if(fe.key===ue){if(ue=A.type,ue===le){if(fe.tag===7){r(E,fe.sibling),N=d(fe,A.props.children),N.return=E,E=N;break e}}else if(fe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===me&&Wc(ue)===fe.type){r(E,fe.sibling),N=d(fe,A.props),N.ref=ka(E,fe,A),N.return=E,E=N;break e}r(E,fe);break}else t(E,fe);fe=fe.sibling}A.type===le?(N=ir(A.props.children,E.mode,q,A.key),N.return=E,E=N):(q=ns(A.type,A.key,A.props,null,E.mode,q),q.ref=ka(E,N,A),q.return=E,E=q)}return y(E);case D:e:{for(fe=A.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===A.containerInfo&&N.stateNode.implementation===A.implementation){r(E,N.sibling),N=d(N,A.children||[]),N.return=E,E=N;break e}else{r(E,N);break}else t(E,N);N=N.sibling}N=yl(A,E.mode,q),N.return=E,E=N}return y(E);case me:return fe=A._init,Qe(E,N,fe(A._payload),q)}if(kn(A))return ne(E,N,A,q);if(se(A))return oe(E,N,A,q);Ti(E,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,N!==null&&N.tag===6?(r(E,N.sibling),N=d(N,A),N.return=E,E=N):(r(E,N),N=xl(A,E.mode,q),N.return=E,E=N),y(E)):r(E,N)}return Qe}var Pr=$c(!0),qc=$c(!1),Mi=An(null),zi=null,Er=null,Po=null;function Eo(){Po=Er=zi=null}function Io(e){var t=Mi.current;Ue(Mi),e._currentValue=t}function Ao(e,t,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===r)break;e=e.return}}function Ir(e,t){zi=e,Po=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(xt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(zi===null)throw Error(i(308));Er=e,zi.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Jn=null;function Ro(e){Jn===null?Jn=[e]:Jn.push(e)}function Gc(e,t,r,l){var d=t.interleaved;return d===null?(r.next=r,Ro(t)):(r.next=d.next,d.next=r),t.interleaved=r,pn(e,l)}function pn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mn=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var d=l.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),l.pending=t,pn(e,r)}return d=l.interleaved,d===null?(t.next=t,Ro(l)):(t.next=d.next,d.next=t),l.interleaved=t,pn(e,r)}function Li(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,$s(e,r)}}function Kc(e,t){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var d=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var y={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};p===null?d=p=y:p=p.next=y,r=r.next}while(r!==null);p===null?d=p=t:p=p.next=t}else d=p=t;r={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function _i(e,t,r,l){var d=e.updateQueue;Mn=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,j=d.shared.pending;if(j!==null){d.shared.pending=null;var C=j,T=C.next;C.next=null,y===null?p=T:y.next=T,y=C;var V=e.alternate;V!==null&&(V=V.updateQueue,j=V.lastBaseUpdate,j!==y&&(j===null?V.firstBaseUpdate=T:j.next=T,V.lastBaseUpdate=C))}if(p!==null){var W=d.baseState;y=0,V=T=C=null,j=p;do{var H=j.lane,X=j.eventTime;if((l&H)===H){V!==null&&(V=V.next={eventTime:X,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var ne=e,oe=j;switch(H=t,X=r,oe.tag){case 1:if(ne=oe.payload,typeof ne=="function"){W=ne.call(X,W,H);break e}W=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=oe.payload,H=typeof ne=="function"?ne.call(X,W,H):ne,H==null)break e;W=w({},W,H);break e;case 2:Mn=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,H=d.effects,H===null?d.effects=[j]:H.push(j))}else X={eventTime:X,lane:H,tag:j.tag,payload:j.payload,callback:j.callback,next:null},V===null?(T=V=X,C=W):V=V.next=X,y|=H;if(j=j.next,j===null){if(j=d.shared.pending,j===null)break;H=j,j=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(V===null&&(C=W),d.baseState=C,d.firstBaseUpdate=T,d.lastBaseUpdate=V,t=d.shared.interleaved,t!==null){d=t;do y|=d.lane,d=d.next;while(d!==t)}else p===null&&(d.shared.lanes=0);tr|=y,e.lanes=y,e.memoizedState=W}}function Yc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],d=l.callback;if(d!==null){if(l.callback=null,l=r,typeof d!="function")throw Error(i(191,d));d.call(l)}}}var ba={},Zt=An(ba),wa=An(ba),Sa=An(ba);function Zn(e){if(e===ba)throw Error(i(174));return e}function Mo(e,t){switch(_e(Sa,t),_e(wa,e),_e(Zt,ba),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:K(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=K(t,e)}Ue(Zt),_e(Zt,t)}function Ar(){Ue(Zt),Ue(wa),Ue(Sa)}function Xc(e){Zn(Sa.current);var t=Zn(Zt.current),r=K(t,e.type);t!==r&&(_e(wa,e),_e(Zt,r))}function zo(e){wa.current===e&&(Ue(Zt),Ue(wa))}var Ve=An(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=[];function _o(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var Fi=Z.ReactCurrentDispatcher,Do=Z.ReactCurrentBatchConfig,er=0,We=null,Je=null,tt=null,Oi=!1,ja=!1,Ca=0,rg=0;function ut(){throw Error(i(321))}function Fo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ht(e[r],t[r]))return!1;return!0}function Oo(e,t,r,l,d,p){if(er=p,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?og:lg,e=r(l,d),ja){p=0;do{if(ja=!1,Ca=0,25<=p)throw Error(i(301));p+=1,tt=Je=null,t.updateQueue=null,Fi.current=ug,e=r(l,d)}while(ja)}if(Fi.current=Hi,t=Je!==null&&Je.next!==null,er=0,tt=Je=We=null,Oi=!1,t)throw Error(i(300));return e}function Bo(){var e=Ca!==0;return Ca=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?We.memoizedState=tt=e:tt=tt.next=e,tt}function Dt(){if(Je===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=tt===null?We.memoizedState:tt.next;if(t!==null)tt=t,Je=e;else{if(e===null)throw Error(i(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},tt===null?We.memoizedState=tt=e:tt=tt.next=e}return tt}function Na(e,t){return typeof t=="function"?t(e):t}function Uo(e){var t=Dt(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var l=Je,d=l.baseQueue,p=r.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}l.baseQueue=d=p,r.pending=null}if(d!==null){p=d.next,l=l.baseState;var j=y=null,C=null,T=p;do{var V=T.lane;if((er&V)===V)C!==null&&(C=C.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),l=T.hasEagerState?T.eagerState:e(l,T.action);else{var W={lane:V,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};C===null?(j=C=W,y=l):C=C.next=W,We.lanes|=V,tr|=V}T=T.next}while(T!==null&&T!==p);C===null?y=l:C.next=j,Ht(l,t.memoizedState)||(xt=!0),t.memoizedState=l,t.baseState=y,t.baseQueue=C,r.lastRenderedState=l}if(e=r.interleaved,e!==null){d=e;do p=d.lane,We.lanes|=p,tr|=p,d=d.next;while(d!==e)}else d===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ho(e){var t=Dt(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var l=r.dispatch,d=r.pending,p=t.memoizedState;if(d!==null){r.pending=null;var y=d=d.next;do p=e(p,y.action),y=y.next;while(y!==d);Ht(p,t.memoizedState)||(xt=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),r.lastRenderedState=p}return[p,l]}function Jc(){}function Zc(e,t){var r=We,l=Dt(),d=t(),p=!Ht(l.memoizedState,d);if(p&&(l.memoizedState=d,xt=!0),l=l.queue,Vo(nd.bind(null,r,l,e),[e]),l.getSnapshot!==t||p||tt!==null&&tt.memoizedState.tag&1){if(r.flags|=2048,Pa(9,td.bind(null,r,l,d,t),void 0,null),nt===null)throw Error(i(349));(er&30)!==0||ed(r,t,d)}return d}function ed(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function td(e,t,r,l){t.value=r,t.getSnapshot=l,rd(t)&&ad(e)}function nd(e,t,r){return r(function(){rd(t)&&ad(e)})}function rd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ht(e,r)}catch{return!0}}function ad(e){var t=pn(e,1);t!==null&&Gt(t,e,1,-1)}function id(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},t.queue=e,e=e.dispatch=sg.bind(null,We,e),[t.memoizedState,e]}function Pa(e,t,r,l){return e={tag:e,create:t,destroy:r,deps:l,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,t.lastEffect=e)),e}function sd(){return Dt().memoizedState}function Bi(e,t,r,l){var d=en();We.flags|=e,d.memoizedState=Pa(1|t,r,void 0,l===void 0?null:l)}function Ui(e,t,r,l){var d=Dt();l=l===void 0?null:l;var p=void 0;if(Je!==null){var y=Je.memoizedState;if(p=y.destroy,l!==null&&Fo(l,y.deps)){d.memoizedState=Pa(t,r,p,l);return}}We.flags|=e,d.memoizedState=Pa(1|t,r,p,l)}function od(e,t){return Bi(8390656,8,e,t)}function Vo(e,t){return Ui(2048,8,e,t)}function ld(e,t){return Ui(4,2,e,t)}function ud(e,t){return Ui(4,4,e,t)}function cd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,r){return r=r!=null?r.concat([e]):null,Ui(4,4,cd.bind(null,t,e),r)}function Wo(){}function md(e,t){var r=Dt();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&Fo(t,l[1])?l[0]:(r.memoizedState=[e,t],e)}function pd(e,t){var r=Dt();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&Fo(t,l[1])?l[0]:(e=e(),r.memoizedState=[e,t],e)}function fd(e,t,r){return(er&21)===0?(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=r):(Ht(r,t)||(r=Wu(),We.lanes|=r,tr|=r,e.baseState=!0),t)}function ag(e,t){var r=Le;Le=r!==0&&4>r?r:4,e(!0);var l=Do.transition;Do.transition={};try{e(!1),t()}finally{Le=r,Do.transition=l}}function hd(){return Dt().memoizedState}function ig(e,t,r){var l=Fn(e);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},gd(e))xd(t,r);else if(r=Gc(e,t,r,l),r!==null){var d=ft();Gt(r,e,l,d),yd(r,t,l)}}function sg(e,t,r){var l=Fn(e),d={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(gd(e))xd(t,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var y=t.lastRenderedState,j=p(y,r);if(d.hasEagerState=!0,d.eagerState=j,Ht(j,y)){var C=t.interleaved;C===null?(d.next=d,Ro(t)):(d.next=C.next,C.next=d),t.interleaved=d;return}}catch{}finally{}r=Gc(e,t,d,l),r!==null&&(d=ft(),Gt(r,e,l,d),yd(r,t,l))}}function gd(e){var t=e.alternate;return e===We||t!==null&&t===We}function xd(e,t){ja=Oi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function yd(e,t,r){if((r&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,$s(e,r)}}var Hi={readContext:_t,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},og={readContext:_t,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:od,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Bi(4194308,4,cd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var r=en();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var l=en();return t=r!==void 0?r(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=ig.bind(null,We,e),[l.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:id,useDebugValue:Wo,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=id(!1),t=e[0];return e=ag.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var l=We,d=en();if(He){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),nt===null)throw Error(i(349));(er&30)!==0||ed(l,t,r)}d.memoizedState=r;var p={value:r,getSnapshot:t};return d.queue=p,od(nd.bind(null,l,p,e),[e]),l.flags|=2048,Pa(9,td.bind(null,l,p,r,t),void 0,null),r},useId:function(){var e=en(),t=nt.identifierPrefix;if(He){var r=mn,l=dn;r=(l&~(1<<32-Ut(l)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ca++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=rg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lg={readContext:_t,useCallback:md,useContext:_t,useEffect:Vo,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:ud,useMemo:pd,useReducer:Uo,useRef:sd,useState:function(){return Uo(Na)},useDebugValue:Wo,useDeferredValue:function(e){var t=Dt();return fd(t,Je.memoizedState,e)},useTransition:function(){var e=Uo(Na)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:hd,unstable_isNewReconciler:!1},ug={readContext:_t,useCallback:md,useContext:_t,useEffect:Vo,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:ud,useMemo:pd,useReducer:Ho,useRef:sd,useState:function(){return Ho(Na)},useDebugValue:Wo,useDeferredValue:function(e){var t=Dt();return Je===null?t.memoizedState=e:fd(t,Je.memoizedState,e)},useTransition:function(){var e=Ho(Na)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:hd,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=w({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function $o(e,t,r,l){t=e.memoizedState,r=r(l,t),r=r==null?t:w({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Vi={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var l=ft(),d=Fn(e),p=fn(l,d);p.payload=t,r!=null&&(p.callback=r),t=zn(e,p,d),t!==null&&(Gt(t,e,d,l),Li(t,e,d))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var l=ft(),d=Fn(e),p=fn(l,d);p.tag=1,p.payload=t,r!=null&&(p.callback=r),t=zn(e,p,d),t!==null&&(Gt(t,e,d,l),Li(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ft(),l=Fn(e),d=fn(r,l);d.tag=2,t!=null&&(d.callback=t),t=zn(e,d,l),t!==null&&(Gt(t,e,l,r),Li(t,e,l))}};function vd(e,t,r,l,d,p,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,y):t.prototype&&t.prototype.isPureReactComponent?!pa(r,l)||!pa(d,p):!0}function kd(e,t,r){var l=!1,d=Rn,p=t.contextType;return typeof p=="object"&&p!==null?p=_t(p):(d=gt(t)?Kn:lt.current,l=t.contextTypes,p=(l=l!=null)?Sr(e,d):Rn),t=new t(r,p),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vi,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=p),t}function bd(e,t,r,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,l),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function qo(e,t,r,l){var d=e.stateNode;d.props=r,d.state=e.memoizedState,d.refs={},To(e);var p=t.contextType;typeof p=="object"&&p!==null?d.context=_t(p):(p=gt(t)?Kn:lt.current,d.context=Sr(e,p)),d.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&($o(e,t,p,r),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&Vi.enqueueReplaceState(d,d.state,null),_i(e,r,d,l),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var r="",l=t;do r+=we(l),l=l.return;while(l);var d=r}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:t,stack:d,digest:null}}function Go(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Qo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var cg=typeof WeakMap=="function"?WeakMap:Map;function wd(e,t,r){r=fn(-1,r),r.tag=3,r.payload={element:null};var l=t.value;return r.callback=function(){Yi||(Yi=!0,ul=l),Qo(e,t)},r}function Sd(e,t,r){r=fn(-1,r),r.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var d=t.value;r.payload=function(){return l(d)},r.callback=function(){Qo(e,t)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(r.callback=function(){Qo(e,t),typeof l!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),r}function jd(e,t,r){var l=e.pingCache;if(l===null){l=e.pingCache=new cg;var d=new Set;l.set(t,d)}else d=l.get(t),d===void 0&&(d=new Set,l.set(t,d));d.has(r)||(d.add(r),e=jg.bind(null,e,t,r),t.then(e,e))}function Cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nd(e,t,r,l,d){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=fn(-1,1),t.tag=2,zn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var dg=Z.ReactCurrentOwner,xt=!1;function pt(e,t,r,l){t.child=e===null?qc(t,null,r,l):Pr(t,e.child,r,l)}function Pd(e,t,r,l,d){r=r.render;var p=t.ref;return Ir(t,d),l=Oo(e,t,r,l,p,d),r=Bo(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,hn(e,t,d)):(He&&r&&wo(t),t.flags|=1,pt(e,t,l,d),t.child)}function Ed(e,t,r,l,d){if(e===null){var p=r.type;return typeof p=="function"&&!gl(p)&&p.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=p,Id(e,t,p,l,d)):(e=ns(r.type,null,l,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,(e.lanes&d)===0){var y=p.memoizedProps;if(r=r.compare,r=r!==null?r:pa,r(y,l)&&e.ref===t.ref)return hn(e,t,d)}return t.flags|=1,e=Bn(p,l),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,r,l,d){if(e!==null){var p=e.memoizedProps;if(pa(p,l)&&e.ref===t.ref)if(xt=!1,t.pendingProps=l=p,(e.lanes&d)!==0)(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,hn(e,t,d)}return Ko(e,t,r,l,d)}function Ad(e,t,r){var l=t.pendingProps,d=l.children,p=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Mr,At),At|=r;else{if((r&1073741824)===0)return e=p!==null?p.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Mr,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:r,_e(Mr,At),At|=l}else p!==null?(l=p.baseLanes|r,t.memoizedState=null):l=r,_e(Mr,At),At|=l;return pt(e,t,d,r),t.child}function Rd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ko(e,t,r,l,d){var p=gt(r)?Kn:lt.current;return p=Sr(t,p),Ir(t,d),r=Oo(e,t,r,l,p,d),l=Bo(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,hn(e,t,d)):(He&&l&&wo(t),t.flags|=1,pt(e,t,r,d),t.child)}function Td(e,t,r,l,d){if(gt(r)){var p=!0;Pi(t)}else p=!1;if(Ir(t,d),t.stateNode===null)$i(e,t),kd(t,r,l),qo(t,r,l,d),l=!0;else if(e===null){var y=t.stateNode,j=t.memoizedProps;y.props=j;var C=y.context,T=r.contextType;typeof T=="object"&&T!==null?T=_t(T):(T=gt(r)?Kn:lt.current,T=Sr(t,T));var V=r.getDerivedStateFromProps,W=typeof V=="function"||typeof y.getSnapshotBeforeUpdate=="function";W||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(j!==l||C!==T)&&bd(t,y,l,T),Mn=!1;var H=t.memoizedState;y.state=H,_i(t,l,y,d),C=t.memoizedState,j!==l||H!==C||ht.current||Mn?(typeof V=="function"&&($o(t,r,V,l),C=t.memoizedState),(j=Mn||vd(t,r,j,l,H,C,T))?(W||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),y.props=l,y.state=C,y.context=T,l=j):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{y=t.stateNode,Qc(e,t),j=t.memoizedProps,T=t.type===t.elementType?j:Wt(t.type,j),y.props=T,W=t.pendingProps,H=y.context,C=r.contextType,typeof C=="object"&&C!==null?C=_t(C):(C=gt(r)?Kn:lt.current,C=Sr(t,C));var X=r.getDerivedStateFromProps;(V=typeof X=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(j!==W||H!==C)&&bd(t,y,l,C),Mn=!1,H=t.memoizedState,y.state=H,_i(t,l,y,d);var ne=t.memoizedState;j!==W||H!==ne||ht.current||Mn?(typeof X=="function"&&($o(t,r,X,l),ne=t.memoizedState),(T=Mn||vd(t,r,T,l,H,ne,C)||!1)?(V||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,ne,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,ne,C)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||j===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=ne),y.props=l,y.state=ne,y.context=C,l=T):(typeof y.componentDidUpdate!="function"||j===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),l=!1)}return Yo(e,t,r,l,p,d)}function Yo(e,t,r,l,d,p){Rd(e,t);var y=(t.flags&128)!==0;if(!l&&!y)return d&&Dc(t,r,!1),hn(e,t,p);l=t.stateNode,dg.current=t;var j=y&&typeof r.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&y?(t.child=Pr(t,e.child,null,p),t.child=Pr(t,null,j,p)):pt(e,t,j,p),t.memoizedState=l.state,d&&Dc(t,r,!0),t.child}function Md(e){var t=e.stateNode;t.pendingContext?Lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lc(e,t.context,!1),Mo(e,t.containerInfo)}function zd(e,t,r,l,d){return Nr(),No(d),t.flags|=256,pt(e,t,r,l),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,t,r){var l=t.pendingProps,d=Ve.current,p=!1,y=(t.flags&128)!==0,j;if((j=y)||(j=e!==null&&e.memoizedState===null?!1:(d&2)!==0),j?(p=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),_e(Ve,d&1),e===null)return Co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(y=l.children,e=l.fallback,p?(l=t.mode,p=t.child,y={mode:"hidden",children:y},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=y):p=rs(y,l,0,null),e=ir(e,l,r,null),p.return=t,e.return=t,p.sibling=e,t.child=p,t.child.memoizedState=Jo(r),t.memoizedState=Xo,e):Zo(t,y));if(d=e.memoizedState,d!==null&&(j=d.dehydrated,j!==null))return mg(e,t,y,l,j,d,r);if(p){p=l.fallback,y=t.mode,d=e.child,j=d.sibling;var C={mode:"hidden",children:l.children};return(y&1)===0&&t.child!==d?(l=t.child,l.childLanes=0,l.pendingProps=C,t.deletions=null):(l=Bn(d,C),l.subtreeFlags=d.subtreeFlags&14680064),j!==null?p=Bn(j,p):(p=ir(p,y,r,null),p.flags|=2),p.return=t,l.return=t,l.sibling=p,t.child=l,l=p,p=t.child,y=e.child.memoizedState,y=y===null?Jo(r):{baseLanes:y.baseLanes|r,cachePool:null,transitions:y.transitions},p.memoizedState=y,p.childLanes=e.childLanes&~r,t.memoizedState=Xo,l}return p=e.child,e=p.sibling,l=Bn(p,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=r),l.return=t,l.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=l,t.memoizedState=null,l}function Zo(e,t){return t=rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,r,l){return l!==null&&No(l),Pr(t,e.child,null,r),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mg(e,t,r,l,d,p,y){if(r)return t.flags&256?(t.flags&=-257,l=Go(Error(i(422))),Wi(e,t,y,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(p=l.fallback,d=t.mode,l=rs({mode:"visible",children:l.children},d,0,null),p=ir(p,d,y,null),p.flags|=2,l.return=t,p.return=t,l.sibling=p,t.child=l,(t.mode&1)!==0&&Pr(t,e.child,null,y),t.child.memoizedState=Jo(y),t.memoizedState=Xo,p);if((t.mode&1)===0)return Wi(e,t,y,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var j=l.dgst;return l=j,p=Error(i(419)),l=Go(p,l,void 0),Wi(e,t,y,l)}if(j=(y&e.childLanes)!==0,xt||j){if(l=nt,l!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|y))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,pn(e,d),Gt(l,e,d,-1))}return hl(),l=Go(Error(i(421))),Wi(e,t,y,l)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=Cg.bind(null,e),d._reactRetry=t,null):(e=p.treeContext,It=In(d.nextSibling),Et=t,He=!0,Vt=null,e!==null&&(zt[Lt++]=dn,zt[Lt++]=mn,zt[Lt++]=Yn,dn=e.id,mn=e.overflow,Yn=t),t=Zo(t,l.children),t.flags|=4096,t)}function _d(e,t,r){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ao(e.return,t,r)}function el(e,t,r,l,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:d}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=r,p.tailMode=d)}function Dd(e,t,r){var l=t.pendingProps,d=l.revealOrder,p=l.tail;if(pt(e,t,l.children,r),l=Ve.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,r,t);else if(e.tag===19)_d(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(_e(Ve,l),(t.mode&1)===0)t.memoizedState=null;else switch(d){case"forwards":for(r=t.child,d=null;r!==null;)e=r.alternate,e!==null&&Di(e)===null&&(d=r),r=r.sibling;r=d,r===null?(d=t.child,t.child=null):(d=r.sibling,r.sibling=null),el(t,!1,d,r,p);break;case"backwards":for(r=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Di(e)===null){t.child=d;break}e=d.sibling,d.sibling=r,r=d,d=e}el(t,!0,r,null,p);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=Bn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Bn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function pg(e,t,r){switch(t.tag){case 3:Md(t),Nr();break;case 5:Xc(t);break;case 1:gt(t.type)&&Pi(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,d=t.memoizedProps.value;_e(Mi,l._currentValue),l._currentValue=d;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(_e(Ve,Ve.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ld(e,t,r):(_e(Ve,Ve.current&1),e=hn(e,t,r),e!==null?e.sibling:null);_e(Ve,Ve.current&1);break;case 19:if(l=(r&t.childLanes)!==0,(e.flags&128)!==0){if(l)return Dd(e,t,r);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_e(Ve,Ve.current),l)break;return null;case 22:case 23:return t.lanes=0,Ad(e,t,r)}return hn(e,t,r)}var Fd,tl,Od,Bd;Fd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},tl=function(){},Od=function(e,t,r,l){var d=e.memoizedProps;if(d!==l){e=t.stateNode,Zn(Zt.current);var p=null;switch(r){case"input":d=Qr(e,d),l=Qr(e,l),p=[];break;case"select":d=w({},d,{value:void 0}),l=w({},l,{value:void 0}),p=[];break;case"textarea":d=Xr(e,d),l=Xr(e,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=ji)}it(r,l);var y;r=null;for(T in d)if(!l.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var j=d[T];for(y in j)j.hasOwnProperty(y)&&(r||(r={}),r[y]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(u.hasOwnProperty(T)?p||(p=[]):(p=p||[]).push(T,null));for(T in l){var C=l[T];if(j=d?.[T],l.hasOwnProperty(T)&&C!==j&&(C!=null||j!=null))if(T==="style")if(j){for(y in j)!j.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(r||(r={}),r[y]="");for(y in C)C.hasOwnProperty(y)&&j[y]!==C[y]&&(r||(r={}),r[y]=C[y])}else r||(p||(p=[]),p.push(T,r)),r=C;else T==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,j=j?j.__html:void 0,C!=null&&j!==C&&(p=p||[]).push(T,C)):T==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(T,""+C):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(u.hasOwnProperty(T)?(C!=null&&T==="onScroll"&&Be("scroll",e),p||j===C||(p=[])):(p=p||[]).push(T,C))}r&&(p=p||[]).push("style",r);var T=p;(t.updateQueue=T)&&(t.flags|=4)}},Bd=function(e,t,r,l){r!==l&&(t.flags|=4)};function Ea(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(t)for(var d=e.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=r,t}function fg(e,t,r){var l=t.pendingProps;switch(So(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return gt(t.type)&&Ni(),ct(t),null;case 3:return l=t.stateNode,Ar(),Ue(ht),Ue(lt),_o(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vt!==null&&(ml(Vt),Vt=null))),tl(e,t),ct(t),null;case 5:zo(t);var d=Zn(Sa.current);if(r=t.type,e!==null&&t.stateNode!=null)Od(e,t,r,l,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(i(166));return ct(t),null}if(e=Zn(Zt.current),Ri(t)){l=t.stateNode,r=t.type;var p=t.memoizedProps;switch(l[Jt]=t,l[ya]=p,e=(t.mode&1)!==0,r){case"dialog":Be("cancel",l),Be("close",l);break;case"iframe":case"object":case"embed":Be("load",l);break;case"video":case"audio":for(d=0;d<ha.length;d++)Be(ha[d],l);break;case"source":Be("error",l);break;case"img":case"image":case"link":Be("error",l),Be("load",l);break;case"details":Be("toggle",l);break;case"input":Kr(l,p),Be("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Be("invalid",l);break;case"textarea":ei(l,p),Be("invalid",l)}it(r,p),d=null;for(var y in p)if(p.hasOwnProperty(y)){var j=p[y];y==="children"?typeof j=="string"?l.textContent!==j&&(p.suppressHydrationWarning!==!0&&Si(l.textContent,j,e),d=["children",j]):typeof j=="number"&&l.textContent!==""+j&&(p.suppressHydrationWarning!==!0&&Si(l.textContent,j,e),d=["children",""+j]):u.hasOwnProperty(y)&&j!=null&&y==="onScroll"&&Be("scroll",l)}switch(r){case"input":Ct(l),Za(l,p,!0);break;case"textarea":Ct(l),ni(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ji)}l=d,t.updateQueue=l,l!==null&&(t.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=F(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=y.createElement(r,{is:l.is}):(e=y.createElement(r),r==="select"&&(y=e,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):e=y.createElementNS(e,r),e[Jt]=t,e[ya]=l,Fd(e,t,!1,!1),t.stateNode=e;e:{switch(y=Yt(r,l),r){case"dialog":Be("cancel",e),Be("close",e),d=l;break;case"iframe":case"object":case"embed":Be("load",e),d=l;break;case"video":case"audio":for(d=0;d<ha.length;d++)Be(ha[d],e);d=l;break;case"source":Be("error",e),d=l;break;case"img":case"image":case"link":Be("error",e),Be("load",e),d=l;break;case"details":Be("toggle",e),d=l;break;case"input":Kr(e,l),d=Qr(e,l),Be("invalid",e);break;case"option":d=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},d=w({},l,{value:void 0}),Be("invalid",e);break;case"textarea":ei(e,l),d=Xr(e,l),Be("invalid",e);break;default:d=l}it(r,d),j=d;for(p in j)if(j.hasOwnProperty(p)){var C=j[p];p==="style"?wn(e,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Ee(e,C)):p==="children"?typeof C=="string"?(r!=="textarea"||C!=="")&&Re(e,C):typeof C=="number"&&Re(e,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(u.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Be("scroll",e):C!=null&&B(e,p,C,y))}switch(r){case"input":Ct(e),Za(e,l,!1);break;case"textarea":Ct(e),ni(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Ce(l.value));break;case"select":e.multiple=!!l.multiple,p=l.value,p!=null?bn(e,!!l.multiple,p,!1):l.defaultValue!=null&&bn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=ji)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)Bd(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(r=Zn(Sa.current),Zn(Zt.current),Ri(t)){if(l=t.stateNode,r=t.memoizedProps,l[Jt]=t,(p=l.nodeValue!==r)&&(e=Et,e!==null))switch(e.tag){case 3:Si(l.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(l.nodeValue,r,(e.mode&1)!==0)}p&&(t.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[Jt]=t,t.stateNode=l}return ct(t),null;case 13:if(Ue(Ve),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(He&&It!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Vc(),Nr(),t.flags|=98560,p=!1;else if(p=Ri(t),l!==null&&l.dehydrated!==null){if(e===null){if(!p)throw Error(i(318));if(p=t.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Jt]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ct(t),p=!1}else Vt!==null&&(ml(Vt),Vt=null),p=!0;if(!p)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ve.current&1)!==0?Ze===0&&(Ze=3):hl())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Ar(),tl(e,t),e===null&&ga(t.stateNode.containerInfo),ct(t),null;case 10:return Io(t.type._context),ct(t),null;case 17:return gt(t.type)&&Ni(),ct(t),null;case 19:if(Ue(Ve),p=t.memoizedState,p===null)return ct(t),null;if(l=(t.flags&128)!==0,y=p.rendering,y===null)if(l)Ea(p,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(y=Di(e),y!==null){for(t.flags|=128,Ea(p,!1),l=y.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=r,r=t.child;r!==null;)p=r,e=l,p.flags&=14680066,y=p.alternate,y===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=y.childLanes,p.lanes=y.lanes,p.child=y.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=y.memoizedProps,p.memoizedState=y.memoizedState,p.updateQueue=y.updateQueue,p.type=y.type,e=y.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _e(Ve,Ve.current&1|2),t.child}e=e.sibling}p.tail!==null&&Ge()>zr&&(t.flags|=128,l=!0,Ea(p,!1),t.lanes=4194304)}else{if(!l)if(e=Di(y),e!==null){if(t.flags|=128,l=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!He)return ct(t),null}else 2*Ge()-p.renderingStartTime>zr&&r!==1073741824&&(t.flags|=128,l=!0,Ea(p,!1),t.lanes=4194304);p.isBackwards?(y.sibling=t.child,t.child=y):(r=p.last,r!==null?r.sibling=y:t.child=y,p.last=y)}return p.tail!==null?(t=p.tail,p.rendering=t,p.tail=t.sibling,p.renderingStartTime=Ge(),t.sibling=null,r=Ve.current,_e(Ve,l?r&1|2:r&1),t):(ct(t),null);case 22:case 23:return fl(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(At&1073741824)!==0&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function hg(e,t){switch(So(t),t.tag){case 1:return gt(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),Ue(ht),Ue(lt),_o(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return zo(t),null;case 13:if(Ue(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ue(Ve),null;case 4:return Ar(),null;case 10:return Io(t.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var qi=!1,dt=!1,gg=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Tr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){qe(e,t,l)}else r.current=null}function nl(e,t,r){try{r()}catch(l){qe(e,t,l)}}var Ud=!1;function xg(e,t){if(fo=mi,e=vc(),io(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break e}var y=0,j=-1,C=-1,T=0,V=0,W=e,H=null;t:for(;;){for(var X;W!==r||d!==0&&W.nodeType!==3||(j=y+d),W!==p||l!==0&&W.nodeType!==3||(C=y+l),W.nodeType===3&&(y+=W.nodeValue.length),(X=W.firstChild)!==null;)H=W,W=X;for(;;){if(W===e)break t;if(H===r&&++T===d&&(j=y),H===p&&++V===l&&(C=y),(X=W.nextSibling)!==null)break;W=H,H=W.parentNode}W=X}r=j===-1||C===-1?null:{start:j,end:C}}else r=null}r=r||{start:0,end:0}}else r=null;for(ho={focusedElem:e,selectionRange:r},mi=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var ne=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var oe=ne.memoizedProps,Qe=ne.memoizedState,E=t.stateNode,N=E.getSnapshotBeforeUpdate(t.elementType===t.type?oe:Wt(t.type,oe),Qe);E.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var A=t.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(q){qe(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return ne=Ud,Ud=!1,ne}function Ia(e,t,r){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&e)===e){var p=d.destroy;d.destroy=void 0,p!==void 0&&nl(t,r,p)}d=d.next}while(d!==l)}}function Gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var l=r.create;r.destroy=l()}r=r.next}while(r!==t)}}function rl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Hd(e){var t=e.alternate;t!==null&&(e.alternate=null,Hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[ya],delete t[vo],delete t[Zh],delete t[eg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vd(e){return e.tag===5||e.tag===3||e.tag===4}function Wd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ji));else if(l!==4&&(e=e.child,e!==null))for(al(e,t,r),e=e.sibling;e!==null;)al(e,t,r),e=e.sibling}function il(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(il(e,t,r),e=e.sibling;e!==null;)il(e,t,r),e=e.sibling}var st=null,$t=!1;function Ln(e,t,r){for(r=r.child;r!==null;)$d(e,t,r),r=r.sibling}function $d(e,t,r){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(si,r)}catch{}switch(r.tag){case 5:dt||Tr(r,t);case 6:var l=st,d=$t;st=null,Ln(e,t,r),st=l,$t=d,st!==null&&($t?(e=st,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):st.removeChild(r.stateNode));break;case 18:st!==null&&($t?(e=st,r=r.stateNode,e.nodeType===8?yo(e.parentNode,r):e.nodeType===1&&yo(e,r),oa(e)):yo(st,r.stateNode));break;case 4:l=st,d=$t,st=r.stateNode.containerInfo,$t=!0,Ln(e,t,r),st=l,$t=d;break;case 0:case 11:case 14:case 15:if(!dt&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,y=p.destroy;p=p.tag,y!==void 0&&((p&2)!==0||(p&4)!==0)&&nl(r,t,y),d=d.next}while(d!==l)}Ln(e,t,r);break;case 1:if(!dt&&(Tr(r,t),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(j){qe(r,t,j)}Ln(e,t,r);break;case 21:Ln(e,t,r);break;case 22:r.mode&1?(dt=(l=dt)||r.memoizedState!==null,Ln(e,t,r),dt=l):Ln(e,t,r);break;default:Ln(e,t,r)}}function qd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new gg),t.forEach(function(l){var d=Ng.bind(null,e,l);r.has(l)||(r.add(l),l.then(d,d))})}}function qt(e,t){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var d=r[l];try{var p=e,y=t,j=y;e:for(;j!==null;){switch(j.tag){case 5:st=j.stateNode,$t=!1;break e;case 3:st=j.stateNode.containerInfo,$t=!0;break e;case 4:st=j.stateNode.containerInfo,$t=!0;break e}j=j.return}if(st===null)throw Error(i(160));$d(p,y,d),st=null,$t=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(T){qe(d,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}function Gd(e,t){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),tn(e),l&4){try{Ia(3,e,e.return),Gi(3,e)}catch(oe){qe(e,e.return,oe)}try{Ia(5,e,e.return)}catch(oe){qe(e,e.return,oe)}}break;case 1:qt(t,e),tn(e),l&512&&r!==null&&Tr(r,r.return);break;case 5:if(qt(t,e),tn(e),l&512&&r!==null&&Tr(r,r.return),e.flags&32){var d=e.stateNode;try{Re(d,"")}catch(oe){qe(e,e.return,oe)}}if(l&4&&(d=e.stateNode,d!=null)){var p=e.memoizedProps,y=r!==null?r.memoizedProps:p,j=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{j==="input"&&p.type==="radio"&&p.name!=null&&Yr(d,p),Yt(j,y);var T=Yt(j,p);for(y=0;y<C.length;y+=2){var V=C[y],W=C[y+1];V==="style"?wn(d,W):V==="dangerouslySetInnerHTML"?Ee(d,W):V==="children"?Re(d,W):B(d,V,W,T)}switch(j){case"input":cr(d,p);break;case"textarea":ti(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var X=p.value;X!=null?bn(d,!!p.multiple,X,!1):H!==!!p.multiple&&(p.defaultValue!=null?bn(d,!!p.multiple,p.defaultValue,!0):bn(d,!!p.multiple,p.multiple?[]:"",!1))}d[ya]=p}catch(oe){qe(e,e.return,oe)}}break;case 6:if(qt(t,e),tn(e),l&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,p=e.memoizedProps;try{d.nodeValue=p}catch(oe){qe(e,e.return,oe)}}break;case 3:if(qt(t,e),tn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{oa(t.containerInfo)}catch(oe){qe(e,e.return,oe)}break;case 4:qt(t,e),tn(e);break;case 13:qt(t,e),tn(e),d=e.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ll=Ge())),l&4&&qd(e);break;case 22:if(V=r!==null&&r.memoizedState!==null,e.mode&1?(dt=(T=dt)||V,qt(t,e),dt=T):qt(t,e),tn(e),l&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!V&&(e.mode&1)!==0)for(ee=e,V=e.child;V!==null;){for(W=ee=V;ee!==null;){switch(H=ee,X=H.child,H.tag){case 0:case 11:case 14:case 15:Ia(4,H,H.return);break;case 1:Tr(H,H.return);var ne=H.stateNode;if(typeof ne.componentWillUnmount=="function"){l=H,r=H.return;try{t=l,ne.props=t.memoizedProps,ne.state=t.memoizedState,ne.componentWillUnmount()}catch(oe){qe(l,r,oe)}}break;case 5:Tr(H,H.return);break;case 22:if(H.memoizedState!==null){Yd(W);continue}}X!==null?(X.return=H,ee=X):Yd(W)}V=V.sibling}e:for(V=null,W=e;;){if(W.tag===5){if(V===null){V=W;try{d=W.stateNode,T?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(j=W.stateNode,C=W.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,j.style.display=Mt("display",y))}catch(oe){qe(e,e.return,oe)}}}else if(W.tag===6){if(V===null)try{W.stateNode.nodeValue=T?"":W.memoizedProps}catch(oe){qe(e,e.return,oe)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===e)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===e)break e;for(;W.sibling===null;){if(W.return===null||W.return===e)break e;V===W&&(V=null),W=W.return}V===W&&(V=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:qt(t,e),tn(e),l&4&&qd(e);break;case 21:break;default:qt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Vd(r)){var l=r;break e}r=r.return}throw Error(i(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Re(d,""),l.flags&=-33);var p=Wd(e);il(e,p,d);break;case 3:case 4:var y=l.stateNode.containerInfo,j=Wd(e);al(e,j,y);break;default:throw Error(i(161))}}catch(C){qe(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yg(e,t,r){ee=e,Qd(e)}function Qd(e,t,r){for(var l=(e.mode&1)!==0;ee!==null;){var d=ee,p=d.child;if(d.tag===22&&l){var y=d.memoizedState!==null||qi;if(!y){var j=d.alternate,C=j!==null&&j.memoizedState!==null||dt;j=qi;var T=dt;if(qi=y,(dt=C)&&!T)for(ee=d;ee!==null;)y=ee,C=y.child,y.tag===22&&y.memoizedState!==null?Xd(d):C!==null?(C.return=y,ee=C):Xd(d);for(;p!==null;)ee=p,Qd(p),p=p.sibling;ee=d,qi=j,dt=T}Kd(e)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ee=p):Kd(e)}}function Kd(e){for(;ee!==null;){var t=ee;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:dt||Gi(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!dt)if(r===null)l.componentDidMount();else{var d=t.elementType===t.type?r.memoizedProps:Wt(t.type,r.memoizedProps);l.componentDidUpdate(d,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=t.updateQueue;p!==null&&Yc(t,p,l);break;case 3:var y=t.updateQueue;if(y!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yc(t,y,r)}break;case 5:var j=t.stateNode;if(r===null&&t.flags&4){r=j;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&r.focus();break;case"img":C.src&&(r.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var V=T.memoizedState;if(V!==null){var W=V.dehydrated;W!==null&&oa(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}dt||t.flags&512&&rl(t)}catch(H){qe(t,t.return,H)}}if(t===e){ee=null;break}if(r=t.sibling,r!==null){r.return=t.return,ee=r;break}ee=t.return}}function Yd(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ee=r;break}ee=t.return}}function Xd(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Gi(4,t)}catch(C){qe(t,r,C)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var d=t.return;try{l.componentDidMount()}catch(C){qe(t,d,C)}}var p=t.return;try{rl(t)}catch(C){qe(t,p,C)}break;case 5:var y=t.return;try{rl(t)}catch(C){qe(t,y,C)}}}catch(C){qe(t,t.return,C)}if(t===e){ee=null;break}var j=t.sibling;if(j!==null){j.return=t.return,ee=j;break}ee=t.return}}var vg=Math.ceil,Qi=Z.ReactCurrentDispatcher,sl=Z.ReactCurrentOwner,Ft=Z.ReactCurrentBatchConfig,Te=0,nt=null,Ye=null,ot=0,At=0,Mr=An(0),Ze=0,Aa=null,tr=0,Ki=0,ol=0,Ra=null,yt=null,ll=0,zr=1/0,gn=null,Yi=!1,ul=null,_n=null,Xi=!1,Dn=null,Ji=0,Ta=0,cl=null,Zi=-1,es=0;function ft(){return(Te&6)!==0?Ge():Zi!==-1?Zi:Zi=Ge()}function Fn(e){return(e.mode&1)===0?1:(Te&2)!==0&&ot!==0?ot&-ot:ng.transition!==null?(es===0&&(es=Wu()),es):(e=Le,e!==0||(e=window.event,e=e===void 0?16:Zu(e.type)),e)}function Gt(e,t,r,l){if(50<Ta)throw Ta=0,cl=null,Error(i(185));na(e,r,l),((Te&2)===0||e!==nt)&&(e===nt&&((Te&2)===0&&(Ki|=r),Ze===4&&On(e,ot)),vt(e,l),r===1&&Te===0&&(t.mode&1)===0&&(zr=Ge()+500,Ei&&Tn()))}function vt(e,t){var r=e.callbackNode;nh(e,t);var l=ui(e,e===nt?ot:0);if(l===0)r!==null&&Uu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(r!=null&&Uu(r),t===1)e.tag===0?tg(Zd.bind(null,e)):Fc(Zd.bind(null,e)),Xh(function(){(Te&6)===0&&Tn()}),r=null;else{switch($u(l)){case 1:r=Hs;break;case 4:r=Hu;break;case 16:r=ii;break;case 536870912:r=Vu;break;default:r=ii}r=om(r,Jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jd(e,t){if(Zi=-1,es=0,(Te&6)!==0)throw Error(i(327));var r=e.callbackNode;if(Lr()&&e.callbackNode!==r)return null;var l=ui(e,e===nt?ot:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=ts(e,l);else{t=l;var d=Te;Te|=2;var p=tm();(nt!==e||ot!==t)&&(gn=null,zr=Ge()+500,rr(e,t));do try{wg();break}catch(j){em(e,j)}while(!0);Eo(),Qi.current=p,Te=d,Ye!==null?t=0:(nt=null,ot=0,t=Ze)}if(t!==0){if(t===2&&(d=Vs(e),d!==0&&(l=d,t=dl(e,d))),t===1)throw r=Aa,rr(e,0),On(e,l),vt(e,Ge()),r;if(t===6)On(e,l);else{if(d=e.current.alternate,(l&30)===0&&!kg(d)&&(t=ts(e,l),t===2&&(p=Vs(e),p!==0&&(l=p,t=dl(e,p))),t===1))throw r=Aa,rr(e,0),On(e,l),vt(e,Ge()),r;switch(e.finishedWork=d,e.finishedLanes=l,t){case 0:case 1:throw Error(i(345));case 2:ar(e,yt,gn);break;case 3:if(On(e,l),(l&130023424)===l&&(t=ll+500-Ge(),10<t)){if(ui(e,0)!==0)break;if(d=e.suspendedLanes,(d&l)!==l){ft(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=xo(ar.bind(null,e,yt,gn),t);break}ar(e,yt,gn);break;case 4:if(On(e,l),(l&4194240)===l)break;for(t=e.eventTimes,d=-1;0<l;){var y=31-Ut(l);p=1<<y,y=t[y],y>d&&(d=y),l&=~p}if(l=d,l=Ge()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*vg(l/1960))-l,10<l){e.timeoutHandle=xo(ar.bind(null,e,yt,gn),l);break}ar(e,yt,gn);break;case 5:ar(e,yt,gn);break;default:throw Error(i(329))}}}return vt(e,Ge()),e.callbackNode===r?Jd.bind(null,e):null}function dl(e,t){var r=Ra;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=ts(e,t),e!==2&&(t=yt,yt=r,t!==null&&ml(t)),e}function ml(e){yt===null?yt=e:yt.push.apply(yt,e)}function kg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var d=r[l],p=d.getSnapshot;d=d.value;try{if(!Ht(p(),d))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~ol,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ut(t),l=1<<r;e[r]=-1,t&=~l}}function Zd(e){if((Te&6)!==0)throw Error(i(327));Lr();var t=ui(e,0);if((t&1)===0)return vt(e,Ge()),null;var r=ts(e,t);if(e.tag!==0&&r===2){var l=Vs(e);l!==0&&(t=l,r=dl(e,l))}if(r===1)throw r=Aa,rr(e,0),On(e,t),vt(e,Ge()),r;if(r===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,yt,gn),vt(e,Ge()),null}function pl(e,t){var r=Te;Te|=1;try{return e(t)}finally{Te=r,Te===0&&(zr=Ge()+500,Ei&&Tn())}}function nr(e){Dn!==null&&Dn.tag===0&&(Te&6)===0&&Lr();var t=Te;Te|=1;var r=Ft.transition,l=Le;try{if(Ft.transition=null,Le=1,e)return e()}finally{Le=l,Ft.transition=r,Te=t,(Te&6)===0&&Tn()}}function fl(){At=Mr.current,Ue(Mr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Yh(r)),Ye!==null)for(r=Ye.return;r!==null;){var l=r;switch(So(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ni();break;case 3:Ar(),Ue(ht),Ue(lt),_o();break;case 5:zo(l);break;case 4:Ar();break;case 13:Ue(Ve);break;case 19:Ue(Ve);break;case 10:Io(l.type._context);break;case 22:case 23:fl()}r=r.return}if(nt=e,Ye=e=Bn(e.current,null),ot=At=t,Ze=0,Aa=null,ol=Ki=tr=0,yt=Ra=null,Jn!==null){for(t=0;t<Jn.length;t++)if(r=Jn[t],l=r.interleaved,l!==null){r.interleaved=null;var d=l.next,p=r.pending;if(p!==null){var y=p.next;p.next=d,l.next=y}r.pending=l}Jn=null}return e}function em(e,t){do{var r=Ye;try{if(Eo(),Fi.current=Hi,Oi){for(var l=We.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Oi=!1}if(er=0,tt=Je=We=null,ja=!1,Ca=0,sl.current=null,r===null||r.return===null){Ze=1,Aa=t,Ye=null;break}e:{var p=e,y=r.return,j=r,C=t;if(t=ot,j.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var T=C,V=j,W=V.tag;if((V.mode&1)===0&&(W===0||W===11||W===15)){var H=V.alternate;H?(V.updateQueue=H.updateQueue,V.memoizedState=H.memoizedState,V.lanes=H.lanes):(V.updateQueue=null,V.memoizedState=null)}var X=Cd(y);if(X!==null){X.flags&=-257,Nd(X,y,j,p,t),X.mode&1&&jd(p,T,t),t=X,C=T;var ne=t.updateQueue;if(ne===null){var oe=new Set;oe.add(C),t.updateQueue=oe}else ne.add(C);break e}else{if((t&1)===0){jd(p,T,t),hl();break e}C=Error(i(426))}}else if(He&&j.mode&1){var Qe=Cd(y);if(Qe!==null){(Qe.flags&65536)===0&&(Qe.flags|=256),Nd(Qe,y,j,p,t),No(Rr(C,j));break e}}p=C=Rr(C,j),Ze!==4&&(Ze=2),Ra===null?Ra=[p]:Ra.push(p),p=y;do{switch(p.tag){case 3:p.flags|=65536,t&=-t,p.lanes|=t;var E=wd(p,C,t);Kc(p,E);break e;case 1:j=C;var N=p.type,A=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(_n===null||!_n.has(A)))){p.flags|=65536,t&=-t,p.lanes|=t;var q=Sd(p,j,t);Kc(p,q);break e}}p=p.return}while(p!==null)}rm(r)}catch(ue){t=ue,Ye===r&&r!==null&&(Ye=r=r.return);continue}break}while(!0)}function tm(){var e=Qi.current;return Qi.current=Hi,e===null?Hi:e}function hl(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),nt===null||(tr&268435455)===0&&(Ki&268435455)===0||On(nt,ot)}function ts(e,t){var r=Te;Te|=2;var l=tm();(nt!==e||ot!==t)&&(gn=null,rr(e,t));do try{bg();break}catch(d){em(e,d)}while(!0);if(Eo(),Te=r,Qi.current=l,Ye!==null)throw Error(i(261));return nt=null,ot=0,Ze}function bg(){for(;Ye!==null;)nm(Ye)}function wg(){for(;Ye!==null&&!Gf();)nm(Ye)}function nm(e){var t=sm(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?rm(e):Ye=t,sl.current=null}function rm(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=fg(r,t,At),r!==null){Ye=r;return}}else{if(r=hg(r,t),r!==null){r.flags&=32767,Ye=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Ye=null;return}}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Ze===0&&(Ze=5)}function ar(e,t,r){var l=Le,d=Ft.transition;try{Ft.transition=null,Le=1,Sg(e,t,r,l)}finally{Ft.transition=d,Le=l}return null}function Sg(e,t,r,l){do Lr();while(Dn!==null);if((Te&6)!==0)throw Error(i(327));r=e.finishedWork;var d=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var p=r.lanes|r.childLanes;if(rh(e,p),e===nt&&(Ye=nt=null,ot=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Xi||(Xi=!0,om(ii,function(){return Lr(),null})),p=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||p){p=Ft.transition,Ft.transition=null;var y=Le;Le=1;var j=Te;Te|=4,sl.current=null,xg(e,r),Gd(r,e),Vh(ho),mi=!!fo,ho=fo=null,e.current=r,yg(r),Qf(),Te=j,Le=y,Ft.transition=p}else e.current=r;if(Xi&&(Xi=!1,Dn=e,Ji=d),p=e.pendingLanes,p===0&&(_n=null),Xf(r.stateNode),vt(e,Ge()),t!==null)for(l=e.onRecoverableError,r=0;r<t.length;r++)d=t[r],l(d.value,{componentStack:d.stack,digest:d.digest});if(Yi)throw Yi=!1,e=ul,ul=null,e;return(Ji&1)!==0&&e.tag!==0&&Lr(),p=e.pendingLanes,(p&1)!==0?e===cl?Ta++:(Ta=0,cl=e):Ta=0,Tn(),null}function Lr(){if(Dn!==null){var e=$u(Ji),t=Ft.transition,r=Le;try{if(Ft.transition=null,Le=16>e?16:e,Dn===null)var l=!1;else{if(e=Dn,Dn=null,Ji=0,(Te&6)!==0)throw Error(i(331));var d=Te;for(Te|=4,ee=e.current;ee!==null;){var p=ee,y=p.child;if((ee.flags&16)!==0){var j=p.deletions;if(j!==null){for(var C=0;C<j.length;C++){var T=j[C];for(ee=T;ee!==null;){var V=ee;switch(V.tag){case 0:case 11:case 15:Ia(8,V,p)}var W=V.child;if(W!==null)W.return=V,ee=W;else for(;ee!==null;){V=ee;var H=V.sibling,X=V.return;if(Hd(V),V===T){ee=null;break}if(H!==null){H.return=X,ee=H;break}ee=X}}}var ne=p.alternate;if(ne!==null){var oe=ne.child;if(oe!==null){ne.child=null;do{var Qe=oe.sibling;oe.sibling=null,oe=Qe}while(oe!==null)}}ee=p}}if((p.subtreeFlags&2064)!==0&&y!==null)y.return=p,ee=y;else e:for(;ee!==null;){if(p=ee,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ia(9,p,p.return)}var E=p.sibling;if(E!==null){E.return=p.return,ee=E;break e}ee=p.return}}var N=e.current;for(ee=N;ee!==null;){y=ee;var A=y.child;if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,ee=A;else e:for(y=N;ee!==null;){if(j=ee,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:Gi(9,j)}}catch(ue){qe(j,j.return,ue)}if(j===y){ee=null;break e}var q=j.sibling;if(q!==null){q.return=j.return,ee=q;break e}ee=j.return}}if(Te=d,Tn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(si,e)}catch{}l=!0}return l}finally{Le=r,Ft.transition=t}}return!1}function am(e,t,r){t=Rr(r,t),t=wd(e,t,1),e=zn(e,t,1),t=ft(),e!==null&&(na(e,1,t),vt(e,t))}function qe(e,t,r){if(e.tag===3)am(e,e,r);else for(;t!==null;){if(t.tag===3){am(t,e,r);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_n===null||!_n.has(l))){e=Rr(r,e),e=Sd(t,e,1),t=zn(t,e,1),e=ft(),t!==null&&(na(t,1,e),vt(t,e));break}}t=t.return}}function jg(e,t,r){var l=e.pingCache;l!==null&&l.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&r,nt===e&&(ot&r)===r&&(Ze===4||Ze===3&&(ot&130023424)===ot&&500>Ge()-ll?rr(e,0):ol|=r),vt(e,t)}function im(e,t){t===0&&((e.mode&1)===0?t=1:(t=li,li<<=1,(li&130023424)===0&&(li=4194304)));var r=ft();e=pn(e,t),e!==null&&(na(e,t,r),vt(e,r))}function Cg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),im(e,r)}function Ng(e,t){var r=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(r=d.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(t),im(e,r)}var sm;sm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)xt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return xt=!1,pg(e,t,r);xt=(e.flags&131072)!==0}else xt=!1,He&&(t.flags&1048576)!==0&&Oc(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;$i(e,t),e=t.pendingProps;var d=Sr(t,lt.current);Ir(t,r),d=Oo(null,t,l,e,d,r);var p=Bo();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(l)?(p=!0,Pi(t)):p=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,To(t),d.updater=Vi,t.stateNode=d,d._reactInternals=t,qo(t,l,e,r),t=Yo(null,t,l,!0,p,r)):(t.tag=0,He&&p&&wo(t),pt(null,t,d,r),t=t.child),t;case 16:l=t.elementType;e:{switch($i(e,t),e=t.pendingProps,d=l._init,l=d(l._payload),t.type=l,d=t.tag=Eg(l),e=Wt(l,e),d){case 0:t=Ko(null,t,l,e,r);break e;case 1:t=Td(null,t,l,e,r);break e;case 11:t=Pd(null,t,l,e,r);break e;case 14:t=Ed(null,t,l,Wt(l.type,e),r);break e}throw Error(i(306,l,""))}return t;case 0:return l=t.type,d=t.pendingProps,d=t.elementType===l?d:Wt(l,d),Ko(e,t,l,d,r);case 1:return l=t.type,d=t.pendingProps,d=t.elementType===l?d:Wt(l,d),Td(e,t,l,d,r);case 3:e:{if(Md(t),e===null)throw Error(i(387));l=t.pendingProps,p=t.memoizedState,d=p.element,Qc(e,t),_i(t,l,null,r);var y=t.memoizedState;if(l=y.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){d=Rr(Error(i(423)),t),t=zd(e,t,l,r,d);break e}else if(l!==d){d=Rr(Error(i(424)),t),t=zd(e,t,l,r,d);break e}else for(It=In(t.stateNode.containerInfo.firstChild),Et=t,He=!0,Vt=null,r=qc(t,null,l,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nr(),l===d){t=hn(e,t,r);break e}pt(e,t,l,r)}t=t.child}return t;case 5:return Xc(t),e===null&&Co(t),l=t.type,d=t.pendingProps,p=e!==null?e.memoizedProps:null,y=d.children,go(l,d)?y=null:p!==null&&go(l,p)&&(t.flags|=32),Rd(e,t),pt(e,t,y,r),t.child;case 6:return e===null&&Co(t),null;case 13:return Ld(e,t,r);case 4:return Mo(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Pr(t,null,l,r):pt(e,t,l,r),t.child;case 11:return l=t.type,d=t.pendingProps,d=t.elementType===l?d:Wt(l,d),Pd(e,t,l,d,r);case 7:return pt(e,t,t.pendingProps,r),t.child;case 8:return pt(e,t,t.pendingProps.children,r),t.child;case 12:return pt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(l=t.type._context,d=t.pendingProps,p=t.memoizedProps,y=d.value,_e(Mi,l._currentValue),l._currentValue=y,p!==null)if(Ht(p.value,y)){if(p.children===d.children&&!ht.current){t=hn(e,t,r);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var j=p.dependencies;if(j!==null){y=p.child;for(var C=j.firstContext;C!==null;){if(C.context===l){if(p.tag===1){C=fn(-1,r&-r),C.tag=2;var T=p.updateQueue;if(T!==null){T=T.shared;var V=T.pending;V===null?C.next=C:(C.next=V.next,V.next=C),T.pending=C}}p.lanes|=r,C=p.alternate,C!==null&&(C.lanes|=r),Ao(p.return,r,t),j.lanes|=r;break}C=C.next}}else if(p.tag===10)y=p.type===t.type?null:p.child;else if(p.tag===18){if(y=p.return,y===null)throw Error(i(341));y.lanes|=r,j=y.alternate,j!==null&&(j.lanes|=r),Ao(y,r,t),y=p.sibling}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===t){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}pt(e,t,d.children,r),t=t.child}return t;case 9:return d=t.type,l=t.pendingProps.children,Ir(t,r),d=_t(d),l=l(d),t.flags|=1,pt(e,t,l,r),t.child;case 14:return l=t.type,d=Wt(l,t.pendingProps),d=Wt(l.type,d),Ed(e,t,l,d,r);case 15:return Id(e,t,t.type,t.pendingProps,r);case 17:return l=t.type,d=t.pendingProps,d=t.elementType===l?d:Wt(l,d),$i(e,t),t.tag=1,gt(l)?(e=!0,Pi(t)):e=!1,Ir(t,r),kd(t,l,d),qo(t,l,d,r),Yo(null,t,l,!0,e,r);case 19:return Dd(e,t,r);case 22:return Ad(e,t,r)}throw Error(i(156,t.tag))};function om(e,t){return Bu(e,t)}function Pg(e,t,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,r,l){return new Pg(e,t,r,l)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Y)return 11;if(e===G)return 14}return 2}function Bn(e,t){var r=e.alternate;return r===null?(r=Ot(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ns(e,t,r,l,d,p){var y=2;if(l=e,typeof e=="function")gl(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case le:return ir(r.children,d,p,t);case Q:y=8,d|=8;break;case de:return e=Ot(12,r,t,d|2),e.elementType=de,e.lanes=p,e;case je:return e=Ot(13,r,t,d),e.elementType=je,e.lanes=p,e;case te:return e=Ot(19,r,t,d),e.elementType=te,e.lanes=p,e;case ye:return rs(r,d,p,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:y=10;break e;case J:y=9;break e;case Y:y=11;break e;case G:y=14;break e;case me:y=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Ot(y,r,t,d),t.elementType=e,t.type=l,t.lanes=p,t}function ir(e,t,r,l){return e=Ot(7,e,l,t),e.lanes=r,e}function rs(e,t,r,l){return e=Ot(22,e,l,t),e.elementType=ye,e.lanes=r,e.stateNode={isHidden:!1},e}function xl(e,t,r){return e=Ot(6,e,null,t),e.lanes=r,e}function yl(e,t,r){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ig(e,t,r,l,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ws(0),this.expirationTimes=Ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vl(e,t,r,l,d,p,y,j,C){return e=new Ig(e,t,r,j,C),t===1?(t=1,p===!0&&(t|=8)):t=0,p=Ot(3,null,null,t),e.current=p,p.stateNode=e,p.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},To(p),e}function Ag(e,t,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:l==null?null:""+l,children:e,containerInfo:t,implementation:r}}function lm(e){if(!e)return Rn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var r=e.type;if(gt(r))return _c(e,r,t)}return t}function um(e,t,r,l,d,p,y,j,C){return e=vl(r,l,!0,e,d,p,y,j,C),e.context=lm(null),r=e.current,l=ft(),d=Fn(r),p=fn(l,d),p.callback=t??null,zn(r,p,d),e.current.lanes=d,na(e,d,l),vt(e,l),e}function as(e,t,r,l){var d=t.current,p=ft(),y=Fn(d);return r=lm(r),t.context===null?t.context=r:t.pendingContext=r,t=fn(p,y),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=zn(d,t,y),e!==null&&(Gt(e,d,y,p),Li(e,d,y)),y}function is(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function kl(e,t){cm(e,t),(e=e.alternate)&&cm(e,t)}function Rg(){return null}var dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function bl(e){this._internalRoot=e}ss.prototype.render=bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));as(e,t,null,null)},ss.prototype.unmount=bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){as(null,e,null,null)}),t[un]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nn.length&&t!==0&&t<Nn[r].priority;r++);Nn.splice(r,0,e),r===0&&Xu(e)}};function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mm(){}function Tg(e,t,r,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var T=is(y);p.call(T)}}var y=um(t,l,e,0,null,!1,!1,"",mm);return e._reactRootContainer=y,e[un]=y.current,ga(e.nodeType===8?e.parentNode:e),nr(),y}for(;d=e.lastChild;)e.removeChild(d);if(typeof l=="function"){var j=l;l=function(){var T=is(C);j.call(T)}}var C=vl(e,0,!1,null,null,!1,!1,"",mm);return e._reactRootContainer=C,e[un]=C.current,ga(e.nodeType===8?e.parentNode:e),nr(function(){as(t,C,r,l)}),C}function ls(e,t,r,l,d){var p=r._reactRootContainer;if(p){var y=p;if(typeof d=="function"){var j=d;d=function(){var C=is(y);j.call(C)}}as(t,y,e,d)}else y=Tg(r,t,e,d,l);return is(y)}qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ta(t.pendingLanes);r!==0&&($s(t,r|1),vt(t,Ge()),(Te&6)===0&&(zr=Ge()+500,Tn()))}break;case 13:nr(function(){var l=pn(e,1);if(l!==null){var d=ft();Gt(l,e,1,d)}}),kl(e,1)}},qs=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var r=ft();Gt(t,e,134217728,r)}kl(e,134217728)}},Gu=function(e){if(e.tag===13){var t=Fn(e),r=pn(e,t);if(r!==null){var l=ft();Gt(r,e,t,l)}kl(e,t)}},Qu=function(){return Le},Ku=function(e,t){var r=Le;try{return Le=e,t()}finally{Le=r}},Fs=function(e,t,r){switch(t){case"input":if(cr(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var l=r[t];if(l!==e&&l.form===e.form){var d=Ci(l);if(!d)throw Error(i(90));on(l),cr(l,d)}}}break;case"textarea":ti(e,r);break;case"select":t=r.value,t!=null&&bn(e,!!r.multiple,t,!1)}},Mu=pl,zu=nr;var Mg={usingClientEntryPoint:!1,Events:[va,br,Ci,Ru,Tu,pl]},Ma={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zg={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||Rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{si=us.inject(zg),Xt=us}catch{}}return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mg,kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wl(t))throw Error(i(200));return Ag(e,t,null,r)},kt.createRoot=function(e,t){if(!wl(e))throw Error(i(299));var r=!1,l="",d=dm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=vl(e,1,!1,null,null,r,!1,l,d),e[un]=t.current,ga(e.nodeType===8?e.parentNode:e),new bl(t)},kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Fu(t),e=e===null?null:e.stateNode,e},kt.flushSync=function(e){return nr(e)},kt.hydrate=function(e,t,r){if(!os(t))throw Error(i(200));return ls(null,e,t,!0,r)},kt.hydrateRoot=function(e,t,r){if(!wl(e))throw Error(i(405));var l=r!=null&&r.hydratedSources||null,d=!1,p="",y=dm;if(r!=null&&(r.unstable_strictMode===!0&&(d=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),t=um(t,null,e,1,r??null,d,!1,p,y),e[un]=t.current,ga(e),l)for(e=0;e<l.length;e++)r=l[e],d=r._getVersion,d=d(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,d]:t.mutableSourceEagerHydrationData.push(r,d);return new ss(t)},kt.render=function(e,t,r){if(!os(t))throw Error(i(200));return ls(null,e,t,!1,r)},kt.unmountComponentAtNode=function(e){if(!os(e))throw Error(i(40));return e._reactRootContainer?(nr(function(){ls(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1},kt.unstable_batchedUpdates=pl,kt.unstable_renderSubtreeIntoContainer=function(e,t,r,l){if(!os(r))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ls(e,t,r,!1,l)},kt.version="18.3.1-next-f1338f8080-20240426",kt}var km;function Vg(){if(km)return Cl.exports;km=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Cl.exports=Hg(),Cl.exports}var bm;function Wg(){if(bm)return cs;bm=1;var n=Vg();return cs.createRoot=n.createRoot,cs.hydrateRoot=n.hydrateRoot,cs}var $g=Wg(),L=lu();const qg=ou(L),Gg=_g({__proto__:null,default:qg},[L]);/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wm="popstate";function Qg(n={}){function a(o,u){let{pathname:c,search:m,hash:f}=o.location;return $l("",{pathname:c,search:m,hash:f},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(o,u){return typeof u=="string"?u:$a(u)}return Yg(a,i,null,n)}function $e(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function Qt(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Kg(){return Math.random().toString(36).substring(2,10)}function Sm(n,a){return{usr:n.state,key:n.key,idx:a}}function $l(n,a,i=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?Hr(a):a,state:i,key:a&&a.key||o||Kg()}}function $a({pathname:n="/",search:a="",hash:i=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Hr(n){let a={};if(n){let i=n.indexOf("#");i>=0&&(a.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(a.search=n.substring(o),n=n.substring(0,o)),n&&(a.pathname=n)}return a}function Yg(n,a,i,o={}){let{window:u=document.defaultView,v5Compat:c=!1}=o,m=u.history,f="POP",h=null,g=x();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function x(){return(m.state||{idx:null}).idx}function v(){f="POP";let I=x(),R=I==null?null:I-g;g=I,h&&h({action:f,location:M.location,delta:R})}function b(I,R){f="PUSH";let U=$l(M.location,I,R);g=x()+1;let B=Sm(U,g),Z=M.createHref(U);try{m.pushState(B,"",Z)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;u.location.assign(Z)}c&&h&&h({action:f,location:M.location,delta:1})}function k(I,R){f="REPLACE";let U=$l(M.location,I,R);g=x();let B=Sm(U,g),Z=M.createHref(U);m.replaceState(B,"",Z),c&&h&&h({action:f,location:M.location,delta:0})}function z(I){return Xg(I)}let M={get action(){return f},get location(){return n(u,m)},listen(I){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(wm,v),h=I,()=>{u.removeEventListener(wm,v),h=null}},createHref(I){return a(u,I)},createURL:z,encodeLocation(I){let R=z(I);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:b,replace:k,go(I){return m.go(I)}};return M}function Xg(n,a=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$e(i,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:$a(n);return o=o.replace(/ $/,"%20"),!a&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function Cp(n,a,i="/"){return Jg(n,a,i,!1)}function Jg(n,a,i,o){let u=typeof a=="string"?Hr(a):a,c=vn(u.pathname||"/",i);if(c==null)return null;let m=Np(n);Zg(m);let f=null;for(let h=0;f==null&&h<m.length;++h){let g=cx(c);f=lx(m[h],g,o)}return f}function Np(n,a=[],i=[],o="",u=!1){let c=(m,f,h=u,g)=>{let x={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&h)return;$e(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let v=yn([o,x.relativePath]),b=i.concat(x);m.children&&m.children.length>0&&($e(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Np(m.children,a,b,v,h)),!(m.path==null&&!m.index)&&a.push({path:v,score:sx(v,m.index),routesMeta:b})};return n.forEach((m,f)=>{if(m.path===""||!m.path?.includes("?"))c(m,f);else for(let h of Pp(m.path))c(m,f,!0,h)}),a}function Pp(n){let a=n.split("/");if(a.length===0)return[];let[i,...o]=a,u=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return u?[c,""]:[c];let m=Pp(o.join("/")),f=[];return f.push(...m.map(h=>h===""?c:[c,h].join("/"))),u&&f.push(...m),f.map(h=>n.startsWith("/")&&h===""?"/":h)}function Zg(n){n.sort((a,i)=>a.score!==i.score?i.score-a.score:ox(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var ex=/^:[\w-]+$/,tx=3,nx=2,rx=1,ax=10,ix=-2,jm=n=>n==="*";function sx(n,a){let i=n.split("/"),o=i.length;return i.some(jm)&&(o+=ix),a&&(o+=nx),i.filter(u=>!jm(u)).reduce((u,c)=>u+(ex.test(c)?tx:c===""?rx:ax),o)}function ox(n,a){return n.length===a.length&&n.slice(0,-1).every((o,u)=>o===a[u])?n[n.length-1]-a[a.length-1]:0}function lx(n,a,i=!1){let{routesMeta:o}=n,u={},c="/",m=[];for(let f=0;f<o.length;++f){let h=o[f],g=f===o.length-1,x=c==="/"?a:a.slice(c.length)||"/",v=bs({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},x),b=h.route;if(!v&&g&&i&&!o[o.length-1].route.index&&(v=bs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!v)return null;Object.assign(u,v.params),m.push({params:u,pathname:yn([c,v.pathname]),pathnameBase:hx(yn([c,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(c=yn([c,v.pathnameBase]))}return m}function bs(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=ux(n.path,n.caseSensitive,n.end),u=a.match(i);if(!u)return null;let c=u[0],m=c.replace(/(.)\/+$/,"$1"),f=u.slice(1);return{params:o.reduce((g,{paramName:x,isOptional:v},b)=>{if(x==="*"){let z=f[b]||"";m=c.slice(0,c.length-z.length).replace(/(.)\/+$/,"$1")}const k=f[b];return v&&!k?g[x]=void 0:g[x]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:m,pattern:n}}function ux(n,a=!1,i=!0){Qt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,f,h)=>(o.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),o]}function cx(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Qt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function vn(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}var dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mx=n=>dx.test(n);function px(n,a="/"){let{pathname:i,search:o="",hash:u=""}=typeof n=="string"?Hr(n):n,c;if(i)if(mx(i))c=i;else{if(i.includes("//")){let m=i;i=i.replace(/\/\/+/g,"/"),Qt(!1,`Pathnames cannot have embedded double slashes - normalizing ${m} -> ${i}`)}i.startsWith("/")?c=Cm(i.substring(1),"/"):c=Cm(i,a)}else c=a;return{pathname:c,search:gx(o),hash:xx(u)}}function Cm(n,a){let i=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function El(n,a,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fx(n){return n.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Ep(n){let a=fx(n);return a.map((i,o)=>o===a.length-1?i.pathname:i.pathnameBase)}function Ip(n,a,i,o=!1){let u;typeof n=="string"?u=Hr(n):(u={...n},$e(!u.pathname||!u.pathname.includes("?"),El("?","pathname","search",u)),$e(!u.pathname||!u.pathname.includes("#"),El("#","pathname","hash",u)),$e(!u.search||!u.search.includes("#"),El("#","search","hash",u)));let c=n===""||u.pathname==="",m=c?"/":u.pathname,f;if(m==null)f=i;else{let v=a.length-1;if(!o&&m.startsWith("..")){let b=m.split("/");for(;b[0]==="..";)b.shift(),v-=1;u.pathname=b.join("/")}f=v>=0?a[v]:"/"}let h=px(u,f),g=m&&m!=="/"&&m.endsWith("/"),x=(c||m===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(g||x)&&(h.pathname+="/"),h}var yn=n=>n.join("/").replace(/\/\/+/g,"/"),hx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),gx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,xx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function yx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function vx(n){return n.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ap=["POST","PUT","PATCH","DELETE"];new Set(Ap);var kx=["GET",...Ap];new Set(kx);var Vr=L.createContext(null);Vr.displayName="DataRouter";var As=L.createContext(null);As.displayName="DataRouterState";L.createContext(!1);var Rp=L.createContext({isTransitioning:!1});Rp.displayName="ViewTransition";var bx=L.createContext(new Map);bx.displayName="Fetchers";var wx=L.createContext(null);wx.displayName="Await";var Kt=L.createContext(null);Kt.displayName="Navigation";var Qa=L.createContext(null);Qa.displayName="Location";var sn=L.createContext({outlet:null,matches:[],isDataRoute:!1});sn.displayName="Route";var uu=L.createContext(null);uu.displayName="RouteError";function Sx(n,{relative:a}={}){$e(Ka(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=L.useContext(Kt),{hash:u,pathname:c,search:m}=Ya(n,{relative:a}),f=c;return i!=="/"&&(f=c==="/"?i:yn([i,c])),o.createHref({pathname:f,search:m,hash:u})}function Ka(){return L.useContext(Qa)!=null}function or(){return $e(Ka(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Qa).location}var Tp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mp(n){L.useContext(Kt).static||L.useLayoutEffect(n)}function jx(){let{isDataRoute:n}=L.useContext(sn);return n?Fx():Cx()}function Cx(){$e(Ka(),"useNavigate() may be used only in the context of a <Router> component.");let n=L.useContext(Vr),{basename:a,navigator:i}=L.useContext(Kt),{matches:o}=L.useContext(sn),{pathname:u}=or(),c=JSON.stringify(Ep(o)),m=L.useRef(!1);return Mp(()=>{m.current=!0}),L.useCallback((h,g={})=>{if(Qt(m.current,Tp),!m.current)return;if(typeof h=="number"){i.go(h);return}let x=Ip(h,JSON.parse(c),u,g.relative==="path");n==null&&a!=="/"&&(x.pathname=x.pathname==="/"?a:yn([a,x.pathname])),(g.replace?i.replace:i.push)(x,g.state,g)},[a,i,c,u,n])}L.createContext(null);function Nx(){let{matches:n}=L.useContext(sn),a=n[n.length-1];return a?a.params:{}}function Ya(n,{relative:a}={}){let{matches:i}=L.useContext(sn),{pathname:o}=or(),u=JSON.stringify(Ep(i));return L.useMemo(()=>Ip(n,JSON.parse(u),o,a==="path"),[n,u,o,a])}function Px(n,a){return zp(n,a)}function zp(n,a,i,o,u){$e(Ka(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=L.useContext(Kt),{matches:m}=L.useContext(sn),f=m[m.length-1],h=f?f.params:{},g=f?f.pathname:"/",x=f?f.pathnameBase:"/",v=f&&f.route;{let U=v&&v.path||"";Lp(g,!v||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let b=or(),k;if(a){let U=typeof a=="string"?Hr(a):a;$e(x==="/"||U.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),k=U}else k=b;let z=k.pathname||"/",M=z;if(x!=="/"){let U=x.replace(/^\//,"").split("/");M="/"+z.replace(/^\//,"").split("/").slice(U.length).join("/")}let I=Cp(n,{pathname:M});Qt(v||I!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Qt(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=Tx(I&&I.map(U=>Object.assign({},U,{params:Object.assign({},h,U.params),pathname:yn([x,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:yn([x,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),m,i,o,u);return a&&R?L.createElement(Qa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},R):R}function Ex(){let n=Dx(),a=yx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",n),m=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:c},"ErrorBoundary")," or"," ",L.createElement("code",{style:c},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},a),i?L.createElement("pre",{style:u},i):null,m)}var Ix=L.createElement(Ex,null),Ax=class extends L.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?L.createElement(sn.Provider,{value:this.props.routeContext},L.createElement(uu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Rx({routeContext:n,match:a,children:i}){let o=L.useContext(Vr);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),L.createElement(sn.Provider,{value:n},i)}function Tx(n,a=[],i=null,o=null,u=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(a.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,m=i?.errors;if(m!=null){let x=c.findIndex(v=>v.route.id&&m?.[v.route.id]!==void 0);$e(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let f=!1,h=-1;if(i)for(let x=0;x<c.length;x++){let v=c[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=x),v.route.id){let{loaderData:b,errors:k}=i,z=v.route.loader&&!b.hasOwnProperty(v.route.id)&&(!k||k[v.route.id]===void 0);if(v.route.lazy||z){f=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}let g=i&&o?(x,v)=>{o(x,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:vx(i.matches),errorInfo:v})}:void 0;return c.reduceRight((x,v,b)=>{let k,z=!1,M=null,I=null;i&&(k=m&&v.route.id?m[v.route.id]:void 0,M=v.route.errorElement||Ix,f&&(h<0&&b===0?(Lp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,I=null):h===b&&(z=!0,I=v.route.hydrateFallbackElement||null)));let R=a.concat(c.slice(0,b+1)),U=()=>{let B;return k?B=M:z?B=I:v.route.Component?B=L.createElement(v.route.Component,null):v.route.element?B=v.route.element:B=x,L.createElement(Rx,{match:v,routeContext:{outlet:x,matches:R,isDataRoute:i!=null},children:B})};return i&&(v.route.ErrorBoundary||v.route.errorElement||b===0)?L.createElement(Ax,{location:i.location,revalidation:i.revalidation,component:M,error:k,children:U(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:g}):U()},null)}function cu(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mx(n){let a=L.useContext(Vr);return $e(a,cu(n)),a}function zx(n){let a=L.useContext(As);return $e(a,cu(n)),a}function Lx(n){let a=L.useContext(sn);return $e(a,cu(n)),a}function du(n){let a=Lx(n),i=a.matches[a.matches.length-1];return $e(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function _x(){return du("useRouteId")}function Dx(){let n=L.useContext(uu),a=zx("useRouteError"),i=du("useRouteError");return n!==void 0?n:a.errors?.[i]}function Fx(){let{router:n}=Mx("useNavigate"),a=du("useNavigate"),i=L.useRef(!1);return Mp(()=>{i.current=!0}),L.useCallback(async(u,c={})=>{Qt(i.current,Tp),i.current&&(typeof u=="number"?await n.navigate(u):await n.navigate(u,{fromRouteId:a,...c}))},[n,a])}var Nm={};function Lp(n,a,i){!a&&!Nm[n]&&(Nm[n]=!0,Qt(!1,i))}L.memo(Ox);function Ox({routes:n,future:a,state:i,unstable_onError:o}){return zp(n,void 0,i,o,a)}function Wn(n){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bx({basename:n="/",children:a=null,location:i,navigationType:o="POP",navigator:u,static:c=!1,unstable_useTransitions:m}){$e(!Ka(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),h=L.useMemo(()=>({basename:f,navigator:u,static:c,unstable_useTransitions:m,future:{}}),[f,u,c,m]);typeof i=="string"&&(i=Hr(i));let{pathname:g="/",search:x="",hash:v="",state:b=null,key:k="default"}=i,z=L.useMemo(()=>{let M=vn(g,f);return M==null?null:{location:{pathname:M,search:x,hash:v,state:b,key:k},navigationType:o}},[f,g,x,v,b,k,o]);return Qt(z!=null,`<Router basename="${f}"> is not able to match the URL "${g}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:L.createElement(Kt.Provider,{value:h},L.createElement(Qa.Provider,{children:a,value:z}))}function Ux({children:n,location:a}){return Px(ql(n),a)}function ql(n,a=[]){let i=[];return L.Children.forEach(n,(o,u)=>{if(!L.isValidElement(o))return;let c=[...a,u];if(o.type===L.Fragment){i.push.apply(i,ql(o.props.children,c));return}$e(o.type===Wn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!o.props.index||!o.props.children,"An index route cannot have child routes.");let m={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=ql(o.props.children,c)),i.push(m)}),i}var ys="get",vs="application/x-www-form-urlencoded";function Rs(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function Hx(n){return Rs(n)&&n.tagName.toLowerCase()==="button"}function Vx(n){return Rs(n)&&n.tagName.toLowerCase()==="form"}function Wx(n){return Rs(n)&&n.tagName.toLowerCase()==="input"}function $x(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qx(n,a){return n.button===0&&(!a||a==="_self")&&!$x(n)}var ds=null;function Gx(){if(ds===null)try{new FormData(document.createElement("form"),0),ds=!1}catch{ds=!0}return ds}var Qx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Il(n){return n!=null&&!Qx.has(n)?(Qt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vs}"`),null):n}function Kx(n,a){let i,o,u,c,m;if(Vx(n)){let f=n.getAttribute("action");o=f?vn(f,a):null,i=n.getAttribute("method")||ys,u=Il(n.getAttribute("enctype"))||vs,c=new FormData(n)}else if(Hx(n)||Wx(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||f.getAttribute("action");if(o=h?vn(h,a):null,i=n.getAttribute("formmethod")||f.getAttribute("method")||ys,u=Il(n.getAttribute("formenctype"))||Il(f.getAttribute("enctype"))||vs,c=new FormData(f,n),!Gx()){let{name:g,type:x,value:v}=n;if(x==="image"){let b=g?`${g}.`:"";c.append(`${b}x`,"0"),c.append(`${b}y`,"0")}else g&&c.append(g,v)}}else{if(Rs(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ys,o=null,u=vs,m=n}return c&&u==="text/plain"&&(m=c,c=void 0),{action:o,method:i.toLowerCase(),encType:u,formData:c,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mu(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function Yx(n,a,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${i}`:a&&vn(o.pathname,a)==="/"?o.pathname=`${a.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function Xx(n,a){if(n.id in a)return a[n.id];try{let i=await import(n.module);return a[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Zx(n,a,i){let o=await Promise.all(n.map(async u=>{let c=a.routes[u.route.id];if(c){let m=await Xx(c,i);return m.links?m.links():[]}return[]}));return ry(o.flat(1).filter(Jx).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Pm(n,a,i,o,u,c){let m=(h,g)=>i[g]?h.route.id!==i[g].route.id:!0,f=(h,g)=>i[g].pathname!==h.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==h.params["*"];return c==="assets"?a.filter((h,g)=>m(h,g)||f(h,g)):c==="data"?a.filter((h,g)=>{let x=o.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(m(h,g)||f(h,g))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function ey(n,a,{includeHydrateFallback:i}={}){return ty(n.map(o=>{let u=a.routes[o.route.id];if(!u)return[];let c=[u.module];return u.clientActionModule&&(c=c.concat(u.clientActionModule)),u.clientLoaderModule&&(c=c.concat(u.clientLoaderModule)),i&&u.hydrateFallbackModule&&(c=c.concat(u.hydrateFallbackModule)),u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function ty(n){return[...new Set(n)]}function ny(n){let a={},i=Object.keys(n).sort();for(let o of i)a[o]=n[o];return a}function ry(n,a){let i=new Set;return new Set(a),n.reduce((o,u)=>{let c=JSON.stringify(ny(u));return i.has(c)||(i.add(c),o.push({key:c,link:u})),o},[])}function _p(){let n=L.useContext(Vr);return mu(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ay(){let n=L.useContext(As);return mu(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var pu=L.createContext(void 0);pu.displayName="FrameworkContext";function Dp(){let n=L.useContext(pu);return mu(n,"You must render this element inside a <HydratedRouter> element"),n}function iy(n,a){let i=L.useContext(pu),[o,u]=L.useState(!1),[c,m]=L.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:g,onMouseLeave:x,onTouchStart:v}=a,b=L.useRef(null);L.useEffect(()=>{if(n==="render"&&m(!0),n==="viewport"){let M=R=>{R.forEach(U=>{m(U.isIntersecting)})},I=new IntersectionObserver(M,{threshold:.5});return b.current&&I.observe(b.current),()=>{I.disconnect()}}},[n]),L.useEffect(()=>{if(o){let M=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(M)}}},[o]);let k=()=>{u(!0)},z=()=>{u(!1),m(!1)};return i?n!=="intent"?[c,b,{}]:[c,b,{onFocus:La(f,k),onBlur:La(h,z),onMouseEnter:La(g,k),onMouseLeave:La(x,z),onTouchStart:La(v,k)}]:[!1,b,{}]}function La(n,a){return i=>{n&&n(i),i.defaultPrevented||a(i)}}function sy({page:n,...a}){let{router:i}=_p(),o=L.useMemo(()=>Cp(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?L.createElement(ly,{page:n,matches:o,...a}):null}function oy(n){let{manifest:a,routeModules:i}=Dp(),[o,u]=L.useState([]);return L.useEffect(()=>{let c=!1;return Zx(n,a,i).then(m=>{c||u(m)}),()=>{c=!0}},[n,a,i]),o}function ly({page:n,matches:a,...i}){let o=or(),{manifest:u,routeModules:c}=Dp(),{basename:m}=_p(),{loaderData:f,matches:h}=ay(),g=L.useMemo(()=>Pm(n,a,h,u,o,"data"),[n,a,h,u,o]),x=L.useMemo(()=>Pm(n,a,h,u,o,"assets"),[n,a,h,u,o]),v=L.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let z=new Set,M=!1;if(a.forEach(R=>{let U=u.routes[R.route.id];!U||!U.hasLoader||(!g.some(B=>B.route.id===R.route.id)&&R.route.id in f&&c[R.route.id]?.shouldRevalidate||U.hasClientLoader?M=!0:z.add(R.route.id))}),z.size===0)return[];let I=Yx(n,m,"data");return M&&z.size>0&&I.searchParams.set("_routes",a.filter(R=>z.has(R.route.id)).map(R=>R.route.id).join(",")),[I.pathname+I.search]},[m,f,o,u,g,a,n,c]),b=L.useMemo(()=>ey(x,u),[x,u]),k=oy(x);return L.createElement(L.Fragment,null,v.map(z=>L.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...i})),b.map(z=>L.createElement("link",{key:z,rel:"modulepreload",href:z,...i})),k.map(({key:z,link:M})=>L.createElement("link",{key:z,nonce:i.nonce,...M})))}function uy(...n){return a=>{n.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var Fp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fp&&(window.__reactRouterVersion="7.10.1")}catch{}function cy({basename:n,children:a,unstable_useTransitions:i,window:o}){let u=L.useRef();u.current==null&&(u.current=Qg({window:o,v5Compat:!0}));let c=u.current,[m,f]=L.useState({action:c.action,location:c.location}),h=L.useCallback(g=>{i===!1?f(g):L.startTransition(()=>f(g))},[i]);return L.useLayoutEffect(()=>c.listen(h),[c,h]),L.createElement(Bx,{basename:n,children:a,location:m.location,navigationType:m.action,navigator:c,unstable_useTransitions:i===!0})}var Op=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=L.forwardRef(function({onClick:a,discover:i="render",prefetch:o="none",relative:u,reloadDocument:c,replace:m,state:f,target:h,to:g,preventScrollReset:x,viewTransition:v,...b},k){let{basename:z,unstable_useTransitions:M}=L.useContext(Kt),I=typeof g=="string"&&Op.test(g),R,U=!1;if(typeof g=="string"&&I&&(R=g,Fp))try{let ge=new URL(window.location.href),J=g.startsWith("//")?new URL(ge.protocol+g):new URL(g),Y=vn(J.pathname,z);J.origin===ge.origin&&Y!=null?g=Y+J.search+J.hash:U=!0}catch{Qt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=Sx(g,{relative:u}),[Z,ce,D]=iy(o,b),le=fy(g,{replace:m,state:f,target:h,preventScrollReset:x,relative:u,viewTransition:v,unstable_useTransitions:M});function Q(ge){a&&a(ge),ge.defaultPrevented||le(ge)}let de=L.createElement("a",{...b,...D,href:R||B,onClick:U||c?a:Q,ref:uy(k,ce),target:h,"data-discover":!I&&i==="render"?"true":void 0});return Z&&!I?L.createElement(L.Fragment,null,de,L.createElement(sy,{page:B})):de});Ke.displayName="Link";var dy=L.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:o="",end:u=!1,style:c,to:m,viewTransition:f,children:h,...g},x){let v=Ya(m,{relative:g.relative}),b=or(),k=L.useContext(As),{navigator:z,basename:M}=L.useContext(Kt),I=k!=null&&vy(v)&&f===!0,R=z.encodeLocation?z.encodeLocation(v).pathname:v.pathname,U=b.pathname,B=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;i||(U=U.toLowerCase(),B=B?B.toLowerCase():null,R=R.toLowerCase()),B&&M&&(B=vn(B,M)||B);const Z=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let ce=U===R||!u&&U.startsWith(R)&&U.charAt(Z)==="/",D=B!=null&&(B===R||!u&&B.startsWith(R)&&B.charAt(R.length)==="/"),le={isActive:ce,isPending:D,isTransitioning:I},Q=ce?a:void 0,de;typeof o=="function"?de=o(le):de=[o,ce?"active":null,D?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let ge=typeof c=="function"?c(le):c;return L.createElement(Ke,{...g,"aria-current":Q,className:de,ref:x,style:ge,to:m,viewTransition:f},typeof h=="function"?h(le):h)});dy.displayName="NavLink";var my=L.forwardRef(({discover:n="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:u,state:c,method:m=ys,action:f,onSubmit:h,relative:g,preventScrollReset:x,viewTransition:v,...b},k)=>{let{unstable_useTransitions:z}=L.useContext(Kt),M=xy(),I=yy(f,{relative:g}),R=m.toLowerCase()==="get"?"get":"post",U=typeof f=="string"&&Op.test(f),B=Z=>{if(h&&h(Z),Z.defaultPrevented)return;Z.preventDefault();let ce=Z.nativeEvent.submitter,D=ce?.getAttribute("formmethod")||m,le=()=>M(ce||Z.currentTarget,{fetcherKey:a,method:D,navigate:i,replace:u,state:c,relative:g,preventScrollReset:x,viewTransition:v});z&&i!==!1?L.startTransition(()=>le()):le()};return L.createElement("form",{ref:k,method:R,action:I,onSubmit:o?h:B,...b,"data-discover":!U&&n==="render"?"true":void 0})});my.displayName="Form";function py(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bp(n){let a=L.useContext(Vr);return $e(a,py(n)),a}function fy(n,{target:a,replace:i,state:o,preventScrollReset:u,relative:c,viewTransition:m,unstable_useTransitions:f}={}){let h=jx(),g=or(),x=Ya(n,{relative:c});return L.useCallback(v=>{if(qx(v,a)){v.preventDefault();let b=i!==void 0?i:$a(g)===$a(x),k=()=>h(n,{replace:b,state:o,preventScrollReset:u,relative:c,viewTransition:m});f?L.startTransition(()=>k()):k()}},[g,h,x,i,o,a,n,u,c,m,f])}var hy=0,gy=()=>`__${String(++hy)}__`;function xy(){let{router:n}=Bp("useSubmit"),{basename:a}=L.useContext(Kt),i=_x(),o=n.fetch,u=n.navigate;return L.useCallback(async(c,m={})=>{let{action:f,method:h,encType:g,formData:x,body:v}=Kx(c,a);if(m.navigate===!1){let b=m.fetcherKey||gy();await o(b,i,m.action||f,{preventScrollReset:m.preventScrollReset,formData:x,body:v,formMethod:m.method||h,formEncType:m.encType||g,flushSync:m.flushSync})}else await u(m.action||f,{preventScrollReset:m.preventScrollReset,formData:x,body:v,formMethod:m.method||h,formEncType:m.encType||g,replace:m.replace,state:m.state,fromRouteId:i,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,u,a,i])}function yy(n,{relative:a}={}){let{basename:i}=L.useContext(Kt),o=L.useContext(sn);$e(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),c={...Ya(n||".",{relative:a})},m=or();if(n==null){c.search=m.search;let f=new URLSearchParams(c.search),h=f.getAll("index");if(h.some(x=>x==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let x=f.toString();c.search=x?`?${x}`:""}}return(!n||n===".")&&u.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:yn([i,c.pathname])),$a(c)}function vy(n,{relative:a}={}){let i=L.useContext(Rp);$e(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Bp("useViewTransitionState"),u=Ya(n,{relative:a});if(!i.isTransitioning)return!1;let c=vn(i.currentLocation.pathname,o)||i.currentLocation.pathname,m=vn(i.nextLocation.pathname,o)||i.nextLocation.pathname;return bs(u.pathname,m)!=null||bs(u.pathname,c)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),by=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,i,o)=>o?o.toUpperCase():i.toLowerCase()),Em=n=>{const a=by(n);return a.charAt(0).toUpperCase()+a.slice(1)},Up=(...n)=>n.filter((a,i,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=L.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:u="",children:c,iconNode:m,...f},h)=>L.createElement("svg",{ref:h,...wy,width:a,height:a,stroke:n,strokeWidth:o?Number(i)*24/Number(a):i,className:Up("lucide",u),...f},[...m.map(([g,x])=>L.createElement(g,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(n,a)=>{const i=L.forwardRef(({className:o,...u},c)=>L.createElement(Sy,{ref:c,iconNode:a,className:Up(`lucide-${ky(Em(n))}`,`lucide-${n}`,o),...u}));return i.displayName=Em(n),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Gl=Se("arrow-left",jy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ws=Se("arrow-right",Cy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Hp=Se("award",Ny);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ey=Se("book-open",Py);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Ay=Se("bot",Iy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Vp=Se("building-2",Ry);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],qa=Se("calendar",Ty);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],zy=Se("chart-column",My);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],_y=Se("circle-alert",Ly);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Fy=Se("circle-x",Dy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Ss=Se("clock",Oy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Im=Se("crown",By);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Hy=Se("dollar-sign",Uy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Wy=Se("eye",Vy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],qy=Se("facebook",$y);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ua=Se("file-text",Gy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]],Ky=Se("gavel",Qy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Xy=Se("globe",Yy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Zy=Se("graduation-cap",Jy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],tv=Se("heart",ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],rv=Se("instagram",nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],iv=Se("linkedin",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ov=Se("lock",sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Ts=Se("mail",lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],fu=Se("map-pin",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],dv=Se("message-circle",cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],pv=Se("message-square",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],hv=Se("moon",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Ms=Se("phone",gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],yv=Se("refresh-cw",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],kv=Se("rocket",vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],wv=Se("scale",bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Am=Se("share-2",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ql=Se("shield",jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Nv=Se("shopping-cart",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Rm=Se("sparkles",Pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],Iv=Se("stethoscope",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Rv=Se("sun",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Mv=Se("target",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Lv=Se("trending-up",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Dv=Se("twitter",_v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ov=Se("user",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Kl=Se("users",Bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Hv=Se("youtube",Uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Or=Se("zap",Vv);function Tm(n,a){if(typeof n=="function")return n(a);n!=null&&(n.current=a)}function Wv(...n){return a=>{let i=!1;const o=n.map(u=>{const c=Tm(u,a);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let u=0;u<o.length;u++){const c=o[u];typeof c=="function"?c():Tm(n[u],null)}}}}var $v=Symbol.for("react.lazy"),js=Gg[" use ".trim().toString()];function qv(n){return typeof n=="object"&&n!==null&&"then"in n}function Wp(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===$v&&"_payload"in n&&qv(n._payload)}function Gv(n){const a=Kv(n),i=L.forwardRef((o,u)=>{let{children:c,...m}=o;Wp(c)&&typeof js=="function"&&(c=js(c._payload));const f=L.Children.toArray(c),h=f.find(Xv);if(h){const g=h.props.children,x=f.map(v=>v===h?L.Children.count(g)>1?L.Children.only(null):L.isValidElement(g)?g.props.children:null:v);return s.jsx(a,{...m,ref:u,children:L.isValidElement(g)?L.cloneElement(g,void 0,x):null})}return s.jsx(a,{...m,ref:u,children:c})});return i.displayName=`${n}.Slot`,i}var Qv=Gv("Slot");function Kv(n){const a=L.forwardRef((i,o)=>{let{children:u,...c}=i;if(Wp(u)&&typeof js=="function"&&(u=js(u._payload)),L.isValidElement(u)){const m=Zv(u),f=Jv(c,u.props);return u.type!==L.Fragment&&(f.ref=o?Wv(o,m):m),L.cloneElement(u,f)}return L.Children.count(u)>1?L.Children.only(null):null});return a.displayName=`${n}.SlotClone`,a}var Yv=Symbol("radix.slottable");function Xv(n){return L.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Yv}function Jv(n,a){const i={...a};for(const o in a){const u=n[o],c=a[o];/^on[A-Z]/.test(o)?u&&c?i[o]=(...f)=>{const h=c(...f);return u(...f),h}:u&&(i[o]=u):o==="style"?i[o]={...u,...c}:o==="className"&&(i[o]=[u,c].filter(Boolean).join(" "))}return{...n,...i}}function Zv(n){let a=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,i=a&&"isReactWarning"in a&&a.isReactWarning;return i?n.ref:(a=Object.getOwnPropertyDescriptor(n,"ref")?.get,i=a&&"isReactWarning"in a&&a.isReactWarning,i?n.props.ref:n.props.ref||n.ref)}function $p(n){var a,i,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(a=0;a<u;a++)n[a]&&(i=$p(n[a]))&&(o&&(o+=" "),o+=i)}else for(i in n)n[i]&&(o&&(o+=" "),o+=i);return o}function qp(){for(var n,a,i=0,o="",u=arguments.length;i<u;i++)(n=arguments[i])&&(a=$p(n))&&(o&&(o+=" "),o+=a);return o}const Mm=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,zm=qp,e1=(n,a)=>i=>{var o;if(a?.variants==null)return zm(n,i?.class,i?.className);const{variants:u,defaultVariants:c}=a,m=Object.keys(u).map(g=>{const x=i?.[g],v=c?.[g];if(x===null)return null;const b=Mm(x)||Mm(v);return u[g][b]}),f=i&&Object.entries(i).reduce((g,x)=>{let[v,b]=x;return b===void 0||(g[v]=b),g},{}),h=a==null||(o=a.compoundVariants)===null||o===void 0?void 0:o.reduce((g,x)=>{let{class:v,className:b,...k}=x;return Object.entries(k).every(z=>{let[M,I]=z;return Array.isArray(I)?I.includes({...c,...f}[M]):{...c,...f}[M]===I})?[...g,v,b]:g},[]);return zm(n,m,h,i?.class,i?.className)},t1=(n,a)=>{const i=new Array(n.length+a.length);for(let o=0;o<n.length;o++)i[o]=n[o];for(let o=0;o<a.length;o++)i[n.length+o]=a[o];return i},n1=(n,a)=>({classGroupId:n,validator:a}),Gp=(n=new Map,a=null,i)=>({nextPart:n,validators:a,classGroupId:i}),Cs="-",Lm=[],r1="arbitrary..",a1=n=>{const a=s1(n),{conflictingClassGroups:i,conflictingClassGroupModifiers:o}=n;return{getClassGroupId:m=>{if(m.startsWith("[")&&m.endsWith("]"))return i1(m);const f=m.split(Cs),h=f[0]===""&&f.length>1?1:0;return Qp(f,h,a)},getConflictingClassGroupIds:(m,f)=>{if(f){const h=o[m],g=i[m];return h?g?t1(g,h):h:g||Lm}return i[m]||Lm}}},Qp=(n,a,i)=>{if(n.length-a===0)return i.classGroupId;const u=n[a],c=i.nextPart.get(u);if(c){const g=Qp(n,a+1,c);if(g)return g}const m=i.validators;if(m===null)return;const f=a===0?n.join(Cs):n.slice(a).join(Cs),h=m.length;for(let g=0;g<h;g++){const x=m[g];if(x.validator(f))return x.classGroupId}},i1=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const a=n.slice(1,-1),i=a.indexOf(":"),o=a.slice(0,i);return o?r1+o:void 0})(),s1=n=>{const{theme:a,classGroups:i}=n;return o1(i,a)},o1=(n,a)=>{const i=Gp();for(const o in n){const u=n[o];hu(u,i,o,a)}return i},hu=(n,a,i,o)=>{const u=n.length;for(let c=0;c<u;c++){const m=n[c];l1(m,a,i,o)}},l1=(n,a,i,o)=>{if(typeof n=="string"){u1(n,a,i);return}if(typeof n=="function"){c1(n,a,i,o);return}d1(n,a,i,o)},u1=(n,a,i)=>{const o=n===""?a:Kp(a,n);o.classGroupId=i},c1=(n,a,i,o)=>{if(m1(n)){hu(n(o),a,i,o);return}a.validators===null&&(a.validators=[]),a.validators.push(n1(i,n))},d1=(n,a,i,o)=>{const u=Object.entries(n),c=u.length;for(let m=0;m<c;m++){const[f,h]=u[m];hu(h,Kp(a,f),i,o)}},Kp=(n,a)=>{let i=n;const o=a.split(Cs),u=o.length;for(let c=0;c<u;c++){const m=o[c];let f=i.nextPart.get(m);f||(f=Gp(),i.nextPart.set(m,f)),i=f}return i},m1=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,p1=n=>{if(n<1)return{get:()=>{},set:()=>{}};let a=0,i=Object.create(null),o=Object.create(null);const u=(c,m)=>{i[c]=m,a++,a>n&&(a=0,o=i,i=Object.create(null))};return{get(c){let m=i[c];if(m!==void 0)return m;if((m=o[c])!==void 0)return u(c,m),m},set(c,m){c in i?i[c]=m:u(c,m)}}},Yl="!",_m=":",f1=[],Dm=(n,a,i,o,u)=>({modifiers:n,hasImportantModifier:a,baseClassName:i,maybePostfixModifierPosition:o,isExternal:u}),h1=n=>{const{prefix:a,experimentalParseClassName:i}=n;let o=u=>{const c=[];let m=0,f=0,h=0,g;const x=u.length;for(let M=0;M<x;M++){const I=u[M];if(m===0&&f===0){if(I===_m){c.push(u.slice(h,M)),h=M+1;continue}if(I==="/"){g=M;continue}}I==="["?m++:I==="]"?m--:I==="("?f++:I===")"&&f--}const v=c.length===0?u:u.slice(h);let b=v,k=!1;v.endsWith(Yl)?(b=v.slice(0,-1),k=!0):v.startsWith(Yl)&&(b=v.slice(1),k=!0);const z=g&&g>h?g-h:void 0;return Dm(c,k,b,z)};if(a){const u=a+_m,c=o;o=m=>m.startsWith(u)?c(m.slice(u.length)):Dm(f1,!1,m,void 0,!0)}if(i){const u=o;o=c=>i({className:c,parseClassName:u})}return o},g1=n=>{const a=new Map;return n.orderSensitiveModifiers.forEach((i,o)=>{a.set(i,1e6+o)}),i=>{const o=[];let u=[];for(let c=0;c<i.length;c++){const m=i[c],f=m[0]==="[",h=a.has(m);f||h?(u.length>0&&(u.sort(),o.push(...u),u=[]),o.push(m)):u.push(m)}return u.length>0&&(u.sort(),o.push(...u)),o}},x1=n=>({cache:p1(n.cacheSize),parseClassName:h1(n),sortModifiers:g1(n),...a1(n)}),y1=/\s+/,v1=(n,a)=>{const{parseClassName:i,getClassGroupId:o,getConflictingClassGroupIds:u,sortModifiers:c}=a,m=[],f=n.trim().split(y1);let h="";for(let g=f.length-1;g>=0;g-=1){const x=f[g],{isExternal:v,modifiers:b,hasImportantModifier:k,baseClassName:z,maybePostfixModifierPosition:M}=i(x);if(v){h=x+(h.length>0?" "+h:h);continue}let I=!!M,R=o(I?z.substring(0,M):z);if(!R){if(!I){h=x+(h.length>0?" "+h:h);continue}if(R=o(z),!R){h=x+(h.length>0?" "+h:h);continue}I=!1}const U=b.length===0?"":b.length===1?b[0]:c(b).join(":"),B=k?U+Yl:U,Z=B+R;if(m.indexOf(Z)>-1)continue;m.push(Z);const ce=u(R,I);for(let D=0;D<ce.length;++D){const le=ce[D];m.push(B+le)}h=x+(h.length>0?" "+h:h)}return h},k1=(...n)=>{let a=0,i,o,u="";for(;a<n.length;)(i=n[a++])&&(o=Yp(i))&&(u&&(u+=" "),u+=o);return u},Yp=n=>{if(typeof n=="string")return n;let a,i="";for(let o=0;o<n.length;o++)n[o]&&(a=Yp(n[o]))&&(i&&(i+=" "),i+=a);return i},b1=(n,...a)=>{let i,o,u,c;const m=h=>{const g=a.reduce((x,v)=>v(x),n());return i=x1(g),o=i.cache.get,u=i.cache.set,c=f,f(h)},f=h=>{const g=o(h);if(g)return g;const x=v1(h,i);return u(h,x),x};return c=m,(...h)=>c(k1(...h))},w1=[],et=n=>{const a=i=>i[n]||w1;return a.isThemeGetter=!0,a},Xp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Jp=/^\((?:(\w[\w-]*):)?(.+)\)$/i,S1=/^\d+\/\d+$/,j1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,N1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,P1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,E1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_r=n=>S1.test(n),Pe=n=>!!n&&!Number.isNaN(Number(n)),Hn=n=>!!n&&Number.isInteger(Number(n)),Al=n=>n.endsWith("%")&&Pe(n.slice(0,-1)),xn=n=>j1.test(n),I1=()=>!0,A1=n=>C1.test(n)&&!N1.test(n),Zp=()=>!1,R1=n=>P1.test(n),T1=n=>E1.test(n),M1=n=>!re(n)&&!ae(n),z1=n=>Wr(n,nf,Zp),re=n=>Xp.test(n),sr=n=>Wr(n,rf,A1),Rl=n=>Wr(n,O1,Pe),Fm=n=>Wr(n,ef,Zp),L1=n=>Wr(n,tf,T1),ms=n=>Wr(n,af,R1),ae=n=>Jp.test(n),_a=n=>$r(n,rf),_1=n=>$r(n,B1),Om=n=>$r(n,ef),D1=n=>$r(n,nf),F1=n=>$r(n,tf),ps=n=>$r(n,af,!0),Wr=(n,a,i)=>{const o=Xp.exec(n);return o?o[1]?a(o[1]):i(o[2]):!1},$r=(n,a,i=!1)=>{const o=Jp.exec(n);return o?o[1]?a(o[1]):i:!1},ef=n=>n==="position"||n==="percentage",tf=n=>n==="image"||n==="url",nf=n=>n==="length"||n==="size"||n==="bg-size",rf=n=>n==="length",O1=n=>n==="number",B1=n=>n==="family-name",af=n=>n==="shadow",U1=()=>{const n=et("color"),a=et("font"),i=et("text"),o=et("font-weight"),u=et("tracking"),c=et("leading"),m=et("breakpoint"),f=et("container"),h=et("spacing"),g=et("radius"),x=et("shadow"),v=et("inset-shadow"),b=et("text-shadow"),k=et("drop-shadow"),z=et("blur"),M=et("perspective"),I=et("aspect"),R=et("ease"),U=et("animate"),B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ce=()=>[...Z(),ae,re],D=()=>["auto","hidden","clip","visible","scroll"],le=()=>["auto","contain","none"],Q=()=>[ae,re,h],de=()=>[_r,"full","auto",...Q()],ge=()=>[Hn,"none","subgrid",ae,re],J=()=>["auto",{span:["full",Hn,ae,re]},Hn,ae,re],Y=()=>[Hn,"auto",ae,re],je=()=>["auto","min","max","fr",ae,re],te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],G=()=>["start","end","center","stretch","center-safe","end-safe"],me=()=>["auto",...Q()],ye=()=>[_r,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Q()],_=()=>[n,ae,re],se=()=>[...Z(),Om,Fm,{position:[ae,re]}],w=()=>["no-repeat",{repeat:["","x","y","space","round"]}],P=()=>["auto","cover","contain",D1,z1,{size:[ae,re]}],O=()=>[Al,_a,sr],S=()=>["","none","full",g,ae,re],ie=()=>["",Pe,_a,sr],we=()=>["solid","dashed","dotted","double"],pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],xe=()=>[Pe,Al,Om,Fm],Ce=()=>["","none",z,ae,re],Ae=()=>["none",Pe,ae,re],Oe=()=>["none",Pe,ae,re],Ct=()=>[Pe,ae,re],on=()=>[_r,"full",...Q()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xn],breakpoint:[xn],color:[I1],container:[xn],"drop-shadow":[xn],ease:["in","out","in-out"],font:[M1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xn],shadow:[xn],spacing:["px",Pe],text:[xn],"text-shadow":[xn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",_r,re,ae,I]}],container:["container"],columns:[{columns:[Pe,re,ae,f]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ce()}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:le()}],"overscroll-x":[{"overscroll-x":le()}],"overscroll-y":[{"overscroll-y":le()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:de()}],"inset-x":[{"inset-x":de()}],"inset-y":[{"inset-y":de()}],start:[{start:de()}],end:[{end:de()}],top:[{top:de()}],right:[{right:de()}],bottom:[{bottom:de()}],left:[{left:de()}],visibility:["visible","invisible","collapse"],z:[{z:[Hn,"auto",ae,re]}],basis:[{basis:[_r,"full","auto",f,...Q()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Pe,_r,"auto","initial","none",re]}],grow:[{grow:["",Pe,ae,re]}],shrink:[{shrink:["",Pe,ae,re]}],order:[{order:[Hn,"first","last","none",ae,re]}],"grid-cols":[{"grid-cols":ge()}],"col-start-end":[{col:J()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":ge()}],"row-start-end":[{row:J()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":je()}],"auto-rows":[{"auto-rows":je()}],gap:[{gap:Q()}],"gap-x":[{"gap-x":Q()}],"gap-y":[{"gap-y":Q()}],"justify-content":[{justify:[...te(),"normal"]}],"justify-items":[{"justify-items":[...G(),"normal"]}],"justify-self":[{"justify-self":["auto",...G()]}],"align-content":[{content:["normal",...te()]}],"align-items":[{items:[...G(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...G(),{baseline:["","last"]}]}],"place-content":[{"place-content":te()}],"place-items":[{"place-items":[...G(),"baseline"]}],"place-self":[{"place-self":["auto",...G()]}],p:[{p:Q()}],px:[{px:Q()}],py:[{py:Q()}],ps:[{ps:Q()}],pe:[{pe:Q()}],pt:[{pt:Q()}],pr:[{pr:Q()}],pb:[{pb:Q()}],pl:[{pl:Q()}],m:[{m:me()}],mx:[{mx:me()}],my:[{my:me()}],ms:[{ms:me()}],me:[{me:me()}],mt:[{mt:me()}],mr:[{mr:me()}],mb:[{mb:me()}],ml:[{ml:me()}],"space-x":[{"space-x":Q()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Q()}],"space-y-reverse":["space-y-reverse"],size:[{size:ye()}],w:[{w:[f,"screen",...ye()]}],"min-w":[{"min-w":[f,"screen","none",...ye()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[m]},...ye()]}],h:[{h:["screen","lh",...ye()]}],"min-h":[{"min-h":["screen","lh","none",...ye()]}],"max-h":[{"max-h":["screen","lh",...ye()]}],"font-size":[{text:["base",i,_a,sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,ae,Rl]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Al,re]}],"font-family":[{font:[_1,re,a]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[u,ae,re]}],"line-clamp":[{"line-clamp":[Pe,"none",ae,Rl]}],leading:[{leading:[c,...Q()]}],"list-image":[{"list-image":["none",ae,re]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ae,re]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:_()}],"text-color":[{text:_()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...we(),"wavy"]}],"text-decoration-thickness":[{decoration:[Pe,"from-font","auto",ae,sr]}],"text-decoration-color":[{decoration:_()}],"underline-offset":[{"underline-offset":[Pe,"auto",ae,re]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ae,re]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ae,re]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:se()}],"bg-repeat":[{bg:w()}],"bg-size":[{bg:P()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Hn,ae,re],radial:["",ae,re],conic:[Hn,ae,re]},F1,L1]}],"bg-color":[{bg:_()}],"gradient-from-pos":[{from:O()}],"gradient-via-pos":[{via:O()}],"gradient-to-pos":[{to:O()}],"gradient-from":[{from:_()}],"gradient-via":[{via:_()}],"gradient-to":[{to:_()}],rounded:[{rounded:S()}],"rounded-s":[{"rounded-s":S()}],"rounded-e":[{"rounded-e":S()}],"rounded-t":[{"rounded-t":S()}],"rounded-r":[{"rounded-r":S()}],"rounded-b":[{"rounded-b":S()}],"rounded-l":[{"rounded-l":S()}],"rounded-ss":[{"rounded-ss":S()}],"rounded-se":[{"rounded-se":S()}],"rounded-ee":[{"rounded-ee":S()}],"rounded-es":[{"rounded-es":S()}],"rounded-tl":[{"rounded-tl":S()}],"rounded-tr":[{"rounded-tr":S()}],"rounded-br":[{"rounded-br":S()}],"rounded-bl":[{"rounded-bl":S()}],"border-w":[{border:ie()}],"border-w-x":[{"border-x":ie()}],"border-w-y":[{"border-y":ie()}],"border-w-s":[{"border-s":ie()}],"border-w-e":[{"border-e":ie()}],"border-w-t":[{"border-t":ie()}],"border-w-r":[{"border-r":ie()}],"border-w-b":[{"border-b":ie()}],"border-w-l":[{"border-l":ie()}],"divide-x":[{"divide-x":ie()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ie()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...we(),"hidden","none"]}],"divide-style":[{divide:[...we(),"hidden","none"]}],"border-color":[{border:_()}],"border-color-x":[{"border-x":_()}],"border-color-y":[{"border-y":_()}],"border-color-s":[{"border-s":_()}],"border-color-e":[{"border-e":_()}],"border-color-t":[{"border-t":_()}],"border-color-r":[{"border-r":_()}],"border-color-b":[{"border-b":_()}],"border-color-l":[{"border-l":_()}],"divide-color":[{divide:_()}],"outline-style":[{outline:[...we(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Pe,ae,re]}],"outline-w":[{outline:["",Pe,_a,sr]}],"outline-color":[{outline:_()}],shadow:[{shadow:["","none",x,ps,ms]}],"shadow-color":[{shadow:_()}],"inset-shadow":[{"inset-shadow":["none",v,ps,ms]}],"inset-shadow-color":[{"inset-shadow":_()}],"ring-w":[{ring:ie()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:_()}],"ring-offset-w":[{"ring-offset":[Pe,sr]}],"ring-offset-color":[{"ring-offset":_()}],"inset-ring-w":[{"inset-ring":ie()}],"inset-ring-color":[{"inset-ring":_()}],"text-shadow":[{"text-shadow":["none",b,ps,ms]}],"text-shadow-color":[{"text-shadow":_()}],opacity:[{opacity:[Pe,ae,re]}],"mix-blend":[{"mix-blend":[...pe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":pe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":xe()}],"mask-image-linear-to-pos":[{"mask-linear-to":xe()}],"mask-image-linear-from-color":[{"mask-linear-from":_()}],"mask-image-linear-to-color":[{"mask-linear-to":_()}],"mask-image-t-from-pos":[{"mask-t-from":xe()}],"mask-image-t-to-pos":[{"mask-t-to":xe()}],"mask-image-t-from-color":[{"mask-t-from":_()}],"mask-image-t-to-color":[{"mask-t-to":_()}],"mask-image-r-from-pos":[{"mask-r-from":xe()}],"mask-image-r-to-pos":[{"mask-r-to":xe()}],"mask-image-r-from-color":[{"mask-r-from":_()}],"mask-image-r-to-color":[{"mask-r-to":_()}],"mask-image-b-from-pos":[{"mask-b-from":xe()}],"mask-image-b-to-pos":[{"mask-b-to":xe()}],"mask-image-b-from-color":[{"mask-b-from":_()}],"mask-image-b-to-color":[{"mask-b-to":_()}],"mask-image-l-from-pos":[{"mask-l-from":xe()}],"mask-image-l-to-pos":[{"mask-l-to":xe()}],"mask-image-l-from-color":[{"mask-l-from":_()}],"mask-image-l-to-color":[{"mask-l-to":_()}],"mask-image-x-from-pos":[{"mask-x-from":xe()}],"mask-image-x-to-pos":[{"mask-x-to":xe()}],"mask-image-x-from-color":[{"mask-x-from":_()}],"mask-image-x-to-color":[{"mask-x-to":_()}],"mask-image-y-from-pos":[{"mask-y-from":xe()}],"mask-image-y-to-pos":[{"mask-y-to":xe()}],"mask-image-y-from-color":[{"mask-y-from":_()}],"mask-image-y-to-color":[{"mask-y-to":_()}],"mask-image-radial":[{"mask-radial":[ae,re]}],"mask-image-radial-from-pos":[{"mask-radial-from":xe()}],"mask-image-radial-to-pos":[{"mask-radial-to":xe()}],"mask-image-radial-from-color":[{"mask-radial-from":_()}],"mask-image-radial-to-color":[{"mask-radial-to":_()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[Pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":xe()}],"mask-image-conic-to-pos":[{"mask-conic-to":xe()}],"mask-image-conic-from-color":[{"mask-conic-from":_()}],"mask-image-conic-to-color":[{"mask-conic-to":_()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:se()}],"mask-repeat":[{mask:w()}],"mask-size":[{mask:P()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ae,re]}],filter:[{filter:["","none",ae,re]}],blur:[{blur:Ce()}],brightness:[{brightness:[Pe,ae,re]}],contrast:[{contrast:[Pe,ae,re]}],"drop-shadow":[{"drop-shadow":["","none",k,ps,ms]}],"drop-shadow-color":[{"drop-shadow":_()}],grayscale:[{grayscale:["",Pe,ae,re]}],"hue-rotate":[{"hue-rotate":[Pe,ae,re]}],invert:[{invert:["",Pe,ae,re]}],saturate:[{saturate:[Pe,ae,re]}],sepia:[{sepia:["",Pe,ae,re]}],"backdrop-filter":[{"backdrop-filter":["","none",ae,re]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[Pe,ae,re]}],"backdrop-contrast":[{"backdrop-contrast":[Pe,ae,re]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Pe,ae,re]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Pe,ae,re]}],"backdrop-invert":[{"backdrop-invert":["",Pe,ae,re]}],"backdrop-opacity":[{"backdrop-opacity":[Pe,ae,re]}],"backdrop-saturate":[{"backdrop-saturate":[Pe,ae,re]}],"backdrop-sepia":[{"backdrop-sepia":["",Pe,ae,re]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Q()}],"border-spacing-x":[{"border-spacing-x":Q()}],"border-spacing-y":[{"border-spacing-y":Q()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ae,re]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Pe,"initial",ae,re]}],ease:[{ease:["linear","initial",R,ae,re]}],delay:[{delay:[Pe,ae,re]}],animate:[{animate:["none",U,ae,re]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,ae,re]}],"perspective-origin":[{"perspective-origin":ce()}],rotate:[{rotate:Ae()}],"rotate-x":[{"rotate-x":Ae()}],"rotate-y":[{"rotate-y":Ae()}],"rotate-z":[{"rotate-z":Ae()}],scale:[{scale:Oe()}],"scale-x":[{"scale-x":Oe()}],"scale-y":[{"scale-y":Oe()}],"scale-z":[{"scale-z":Oe()}],"scale-3d":["scale-3d"],skew:[{skew:Ct()}],"skew-x":[{"skew-x":Ct()}],"skew-y":[{"skew-y":Ct()}],transform:[{transform:[ae,re,"","none","gpu","cpu"]}],"transform-origin":[{origin:ce()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:on()}],"translate-x":[{"translate-x":on()}],"translate-y":[{"translate-y":on()}],"translate-z":[{"translate-z":on()}],"translate-none":["translate-none"],accent:[{accent:_()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:_()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ae,re]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Q()}],"scroll-mx":[{"scroll-mx":Q()}],"scroll-my":[{"scroll-my":Q()}],"scroll-ms":[{"scroll-ms":Q()}],"scroll-me":[{"scroll-me":Q()}],"scroll-mt":[{"scroll-mt":Q()}],"scroll-mr":[{"scroll-mr":Q()}],"scroll-mb":[{"scroll-mb":Q()}],"scroll-ml":[{"scroll-ml":Q()}],"scroll-p":[{"scroll-p":Q()}],"scroll-px":[{"scroll-px":Q()}],"scroll-py":[{"scroll-py":Q()}],"scroll-ps":[{"scroll-ps":Q()}],"scroll-pe":[{"scroll-pe":Q()}],"scroll-pt":[{"scroll-pt":Q()}],"scroll-pr":[{"scroll-pr":Q()}],"scroll-pb":[{"scroll-pb":Q()}],"scroll-pl":[{"scroll-pl":Q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ae,re]}],fill:[{fill:["none",..._()]}],"stroke-w":[{stroke:[Pe,_a,sr,Rl]}],stroke:[{stroke:["none",..._()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},H1=b1(U1);function V1(...n){return H1(qp(n))}const W1=e1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Ns({className:n,variant:a,size:i,asChild:o=!1,...u}){const c=o?Qv:"button";return s.jsx(c,{"data-slot":"button",className:V1(W1({variant:a,size:i,className:n})),...u})}const Bm={p1c229800:"M13.4469 19.597C13.3234 19.5156 13.3955 19.3258 13.4469 19.2411C16.5327 15.6409 22.5804 8.57727 23.1327 7.90308L23.3622 7.59256C23.568 7.38916 23.6538 7.37222 23.7224 7.38917C23.963 7.38419 23.9279 7.69922 23.8935 7.85176L21.5263 15.1735C21.2793 15.7022 21.4234 15.7666 21.5263 15.7327H28.3192C28.525 15.7327 28.405 15.97 28.3192 16.0887C25.1286 19.7326 18.7166 27.0407 18.593 27.1221C18.4387 27.2237 18.3357 27.2746 18.1814 27.2237C18.0579 27.1831 18.0613 26.9695 18.0784 26.8678L20.1883 19.6987H13.8586C13.7729 19.6987 13.5704 19.6783 13.4469 19.597Z",p29467930:"M23.6206 32.8459L12.4536 41.8455C11.6302 42.2014 10.2408 41.9472 9.93199 41.032V40.5744V32.9985C9.93199 32.9646 9.90112 32.8866 9.77761 32.8459H9.57177L6.92005 32.8186C3.72946 32.3355 1.02922 30.863 0 25.5242V6.96578C0.102922 4.77944 1.69822 1.16944 6.89579 0H34.8392C37.6181 0 41.632 3.20324 41.8893 6.60986V25.7785C41.2718 30.4562 37.3608 32.49 35.045 32.8459H23.6206ZM22.0768 29.1851C19.418 31.2867 14.0798 35.5306 13.9974 35.6933C13.8327 35.856 13.7916 35.6594 13.7916 35.5407V29.5919C13.7916 28.9817 13.174 28.9817 13.1226 28.9817H7.15309C7.02959 28.9817 6.82717 28.9139 6.74141 28.88C5.30049 28.5241 4.01397 26.6937 3.75666 25.4226V6.96578C4.16835 5.08451 5.71218 4.11845 7.20456 3.76254H34.8392C36.5889 4.27099 37.8239 5.54212 38.1327 7.01662V25.7785C37.7622 27.7309 35.3538 29.0326 35.045 28.9817H22.437C22.3547 28.9817 22.1626 29.1173 22.0768 29.1851Z"};function sf(){return s.jsx("div",{className:"relative size-full","data-name":"logo",children:s.jsxs("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 42 42",children:[s.jsxs("g",{clipPath:"url(#clip0_1_90)",id:"logo",children:[s.jsx("g",{filter:"url(#filter0_dd_1_90)",id:"Vector 3",children:s.jsx("path",{clipRule:"evenodd",d:Bm.p29467930,fill:"var(--fill-0, #14956F)",fillRule:"evenodd"})}),s.jsx("g",{filter:"url(#filter1_dd_1_90)",id:"Group 1",children:s.jsx("path",{d:Bm.p1c229800,fill:"var(--fill-0, #14956F)",id:"Vector 2"})})]}),s.jsxs("defs",{children:[s.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",height:"55",id:"filter0_dd_1_90",width:"54.8893",x:"-7",y:"-6",children:[s.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),s.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),s.jsx("feOffset",{dx:"2",dy:"3"}),s.jsx("feGaussianBlur",{stdDeviation:"2"}),s.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),s.jsx("feBlend",{in2:"BackgroundImageFix",mode:"normal",result:"effect1_dropShadow_1_90"}),s.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),s.jsx("feOffset",{dx:"-2",dy:"-1"}),s.jsx("feGaussianBlur",{stdDeviation:"2.5"}),s.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),s.jsx("feBlend",{in2:"effect1_dropShadow_1_90",mode:"normal",result:"effect2_dropShadow_1_90"}),s.jsx("feBlend",{in:"SourceGraphic",in2:"effect2_dropShadow_1_90",mode:"normal",result:"shape"})]}),s.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",height:"32.8595",id:"filter1_dd_1_90",width:"28.0541",x:"6.37874",y:"1.3842",children:[s.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),s.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),s.jsx("feOffset",{dx:"2",dy:"3"}),s.jsx("feGaussianBlur",{stdDeviation:"2"}),s.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),s.jsx("feBlend",{in2:"BackgroundImageFix",mode:"normal",result:"effect1_dropShadow_1_90"}),s.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),s.jsx("feOffset",{dx:"-2",dy:"-1"}),s.jsx("feGaussianBlur",{stdDeviation:"2.5"}),s.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),s.jsx("feBlend",{in2:"effect1_dropShadow_1_90",mode:"normal",result:"effect2_dropShadow_1_90"}),s.jsx("feBlend",{in:"SourceGraphic",in2:"effect2_dropShadow_1_90",mode:"normal",result:"shape"})]}),s.jsx("clipPath",{id:"clip0_1_90",children:s.jsx("rect",{fill:"white",height:"42",width:"41.8893"})})]})]})})}function $1({theme:n,toggleTheme:a}){return s.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex items-center justify-between h-16",children:[s.jsxs(Ke,{to:"/",className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[s.jsx("div",{className:"w-8 h-8",children:s.jsx(sf,{})}),s.jsx("span",{className:"text-lg",children:"Respon Pintar"})]}),s.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[s.jsx(Ke,{to:"/#features",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Features"}),s.jsx(Ke,{to:"/#use-cases",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Use Cases"}),s.jsx(Ke,{to:"/about",className:"text-muted-foreground hover:text-foreground transition-colors",children:"About"}),s.jsx(Ke,{to:"/blog",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Blog"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("button",{onClick:a,className:"w-9 h-9 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-all hover:scale-105","aria-label":"Toggle theme",children:n==="light"?s.jsx(hv,{className:"w-5 h-5 text-foreground"}):s.jsx(Rv,{className:"w-5 h-5 text-foreground"})}),s.jsx(Ns,{asChild:!0,className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20",children:s.jsx("a",{href:"https://wa.me/620811552477?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Try Now"})})]})]})})})}function q1(){const n=new Date().getFullYear();return s.jsx("footer",{className:"bg-muted/30 border-t border-border",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs(Ke,{to:"/",className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[s.jsx("div",{className:"w-8 h-8",children:s.jsx(sf,{})}),s.jsx("span",{className:"text-lg",children:"Respon Pintar"})]}),s.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"A leading SaaS platform for customer service automation powered by AI technology that helps businesses improve efficiency and customer satisfaction."}),s.jsxs("div",{className:"flex gap-3 pt-4",children:[s.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"Facebook",children:s.jsx(qy,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),s.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"Twitter",children:s.jsx(Dv,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),s.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"Instagram",children:s.jsx(rv,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),s.jsx("a",{href:"https://www.linkedin.com/company/109874968/",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"LinkedIn",children:s.jsx(iv,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),s.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"YouTube",children:s.jsx(Hv,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"mb-4",children:"Product"}),s.jsxs("ul",{className:"space-y-3",children:[s.jsx("li",{children:s.jsx("a",{href:"#features",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Features"})}),s.jsx("li",{children:s.jsx("a",{href:"#pricing",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Pricing"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Integrations"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"API Documentation"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Changelog"})})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"mb-4",children:"Company"}),s.jsxs("ul",{className:"space-y-3",children:[s.jsx("li",{children:s.jsx(Ke,{to:"/about",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"About Us"})}),s.jsx("li",{children:s.jsx(Ke,{to:"/blog",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Blog"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Careers"})}),s.jsx("li",{children:s.jsx(Ke,{to:"/privacy",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Privacy Policy"})}),s.jsx("li",{children:s.jsx(Ke,{to:"/terms",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Terms of Service"})})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"mb-4",children:"Contact Us"}),s.jsxs("ul",{className:"space-y-3",children:[s.jsxs("li",{className:"flex items-start gap-3",children:[s.jsx(Ts,{className:"w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Email"}),s.jsx("a",{href:"mailto:hello@responpintar.com",className:"text-sm hover:text-[var(--brand-primary)] transition-colors",children:"support@responpintar.com"})]})]}),s.jsxs("li",{className:"flex items-start gap-3",children:[s.jsx(Ms,{className:"w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Phone"}),s.jsx("a",{href:"tel:+6281234567890",className:"text-sm hover:text-[var(--brand-primary)] transition-colors",children:"+62 811-552-477"})]})]}),s.jsxs("li",{className:"flex items-start gap-3",children:[s.jsx(fu,{className:"w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Address"}),s.jsxs("p",{className:"text-sm",children:["Plaza Aminta 5th Floor/504, Jl. TB Simatupang Kav. 10,",s.jsx("br",{}),"Pondok Pinang, Kebayoran Lama,",s.jsx("br",{}),"South Jakarta, DKI Jakarta,",s.jsx("br",{}),"Postal Code: 12310"]})]})]})]})]})]}),s.jsx("div",{className:"pt-8 border-t border-border",children:s.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[s.jsxs("p",{className:"text-sm text-muted-foreground",children:["© ",n," Respon Pintar. All rights reserved."]}),s.jsxs("div",{className:"flex gap-6",children:[s.jsx(Ke,{to:"/privacy",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Privacy"}),s.jsx(Ke,{to:"/terms",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Terms"}),s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Cookies"})]})]})})]})})}function G1(){return s.jsxs("section",{className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl -z-10"}),s.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-gradient-end)]/10 rounded-full blur-3xl -z-10"}),s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border",children:[s.jsx(Rm,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"SaaS Platform for Response Automation"})]}),s.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl !leading-tight",children:["Boost Customer Response with"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"AI Technology"})]}),s.jsx("p",{className:"text-lg text-muted-foreground !leading-relaxed",children:"Automate customer responses, increase satisfaction, and save up to 70% of your time with an easy-to-use AI-powered chatbot platform."}),s.jsxs("div",{className:"flex flex-wrap gap-4",children:[s.jsxs(Ns,{size:"lg",className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20 group",children:[s.jsx("a",{href:"https://wa.me/620811552477?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",children:"Start Free"}),s.jsx(ws,{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"})]}),s.jsx(Ke,{to:"/demo",children:s.jsx(Ns,{size:"lg",variant:"outline",className:"border-border hover:bg-accent hover:scale-105 transition-all",children:"View Demo"})})]}),s.jsxs("div",{className:"flex flex-wrap gap-8 pt-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"flex items-baseline gap-1",children:s.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"10K+"})}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Users"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"flex items-baseline gap-1",children:s.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"98%"})}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer Satisfaction"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"flex items-baseline gap-1",children:s.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"24/7"})}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Automated Support"})]})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl"}),s.jsxs("div",{className:"relative bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-border",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:s.jsx(Or,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm",children:"Respon Pintar AI"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"})]})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx("div",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]",children:s.jsx("p",{className:"text-sm",children:"How do I use the automation feature?"})})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0",children:s.jsx(Or,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),s.jsx("div",{className:"bg-secondary px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]",children:s.jsx("p",{className:"text-sm",children:"Our automation feature is super easy! Just set up your response templates, and the AI will handle the rest automatically 24/7."})})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0",children:s.jsx(Or,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),s.jsx("div",{className:"bg-secondary px-4 py-2 rounded-2xl",children:s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"0ms"}}),s.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"150ms"}}),s.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"300ms"}})]})})]})]}),s.jsxs("div",{className:"flex gap-2 pt-4 border-t border-border",children:[s.jsx("div",{className:"flex-1 bg-secondary px-4 py-2 rounded-lg",children:s.jsx("p",{className:"text-sm text-muted-foreground",children:"Type a message..."})}),s.jsx("button",{className:"w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:s.jsx(ws,{className:"w-5 h-5 text-white"})})]})]}),s.jsx("div",{className:"absolute -top-4 -right-4 bg-card border border-border rounded-xl shadow-lg p-3 animate-pulse",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500"}),s.jsx("span",{className:"text-xs",children:"AI Active"})]})}),s.jsx("div",{className:"absolute -bottom-4 -left-4 bg-card border border-border rounded-xl shadow-lg p-3",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Rm,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-xs",children:"Smart Response"})]})})]})]})})]})}const Q1=[{icon:Ay,title:"Smart AI Chatbot",description:"An AI-powered chatbot that understands context and delivers natural, human-like responses."},{icon:Or,title:"Instant Automation",description:"Quick setup in minutes. Start serving your customers 24/7 right away."},{icon:pv,title:"Multi-Channel Support",description:"Integrate with WhatsApp, Instagram, Facebook, and other platforms in a single dashboard."},{icon:zy,title:"In-Depth Analytics",description:"Analytics dashboard for tracking performance, customer satisfaction, and business insights."},{icon:Ql,title:"Guaranteed Security",description:"End-to-end encryption and international compliance standards to protect your data."},{icon:Ss,title:"Real-time Response",description:"Response time under 1 second. Your customers never have to wait long."}];function K1(){return s.jsx("section",{id:"features",className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[s.jsx(Or,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"Key Features"})]}),s.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["Everything You Need for"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service Automation"})]}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"A complete platform with powerful features designed to maximize your efficiency and customer satisfaction."})]}),s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Q1.map((n,a)=>{const i=n.icon;return s.jsxs("div",{className:"group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer",children:[s.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:s.jsx(i,{className:"w-6 h-6 text-white"})}),s.jsx("h3",{className:"mb-2",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:n.description})]},a)})})]})})}const Y1=[{icon:Nv,title:"E-Commerce",description:"Automatically handle product inquiries, order tracking, and customer complaints.",benefits:["Increase conversion by 40%","Reduce cart abandonment","24/7 support at no extra cost"]},{icon:Vp,title:"Business & Corporate",description:"Automate customer support, lead generation, and internal communication.",benefits:["Save 60% on operational costs","Faster response times","Boost team productivity"]},{icon:Zy,title:"Education",description:"Answer student questions, provide enrollment information, and learning guidance.",benefits:["Serve thousands of students at once","Accurate info 24/7","Increase engagement"]},{icon:Iv,title:"Healthcare",description:"Schedule appointments, provide service information, and answer common medical FAQs.",benefits:["Reduce admin workload","Automatic appointment management","More efficient service"]}];function X1(){return s.jsx("section",{id:"use-cases",className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[s.jsx(Vp,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"Use Cases"})]}),s.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["Solutions for"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Various Industries"})]}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"From startups to enterprises, Respon Pintar helps businesses across sectors improve their customer experience."})]}),s.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Y1.map((n,a)=>{const i=n.icon;return s.jsxs("div",{className:"group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all duration-300",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",children:s.jsx(i,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"mb-2",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.description})]})]}),s.jsx("div",{className:"space-y-2 mt-6 pt-6 border-t border-border",children:n.benefits.map((o,u)=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:o})]},u))})]},a)})})]})})}function J1(){return s.jsx("section",{id:"pricing",className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[s.jsx(Im,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"Pricing"})]}),s.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["The Right Solution for"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Your Business"})]}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"We provide custom packages tailored to your business needs. Contact our team for the best offer."})]}),s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"bg-card border border-border rounded-2xl p-12 text-center shadow-xl",children:[s.jsx("div",{className:"w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:s.jsx(Im,{className:"w-10 h-10 text-white"})}),s.jsx("h3",{className:"text-2xl mb-4",children:"Get a Custom Quote"}),s.jsx("p",{className:"text-muted-foreground mb-8 max-w-2xl mx-auto",children:"Every business has unique needs. Our team will help you find the best solution with competitive pricing and features tailored to your requirements."}),s.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto",children:[s.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[s.jsx(Ts,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),s.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"Email"}),s.jsx("p",{className:"text-sm",children:"support@responpintar.com"})]}),s.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[s.jsx(Ms,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),s.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"Phone"}),s.jsx("p",{className:"text-sm",children:"+62 811-552-477"})]}),s.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[s.jsx(dv,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),s.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"WhatsApp"}),s.jsx("p",{className:"text-sm",children:"+62 811-552-477"})]})]}),s.jsx(Ns,{size:"lg",className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20",children:"Contact Sales Team"}),s.jsx("div",{className:"mt-8 pt-8 border-t border-border",children:s.jsxs("p",{className:"text-sm text-muted-foreground",children:["💡 ",s.jsx("strong",{children:"Free Trial Available:"})," Try our platform free for 14 days — no credit card required"]})})]}),s.jsxs("div",{className:"grid sm:grid-cols-3 gap-6 mt-8",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"🎯"}),s.jsx("p",{className:"text-sm",children:"Custom Packages"}),s.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Tailored to your business needs"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("p",{className:"text-sm",children:"Competitive Pricing"}),s.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Best value for your investment"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"🤝"}),s.jsx("p",{className:"text-sm",children:"Dedicated Support"}),s.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Team ready to help 24/7"})]})]})]})]})})}const Z1=[{name:"Bali Resort Tangerang",logo:"/our-clients/bali resort tangerang - our clients.png"},{name:"Geriya Selaras",logo:"/our-clients/geriya selaras - our clients.png"},{name:"Kesuma Agung Selaras",logo:"/our-clients/kesuma agung selaras - our clients.png"},{name:"MAS Group",logo:"/our-clients/mas group - our clients.png"},{name:"Naputa",logo:"/our-clients/naputa - our clients.png"},{name:"Sagara",logo:"/our-clients/sagara - our clients.png"},{name:"The Crest",logo:"/our-clients/the crest - our clients.png"},{name:"Vista Residence",logo:"/our-clients/vista residence - our clients.png"}];function e0(){return s.jsxs("section",{id:"our-clients",className:"py-20 relative overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-primary)]/[0.03] to-transparent pointer-events-none"}),s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("span",{className:"inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] mb-4",children:"Trusted Partners"}),s.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Trusted by"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Leading Companies"})]}),s.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto text-lg",children:"Join the many companies that have entrusted their customer service to ResponPintar"})]}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",children:Z1.map((n,a)=>s.jsxs("div",{className:"group relative",style:{animationDelay:`${a*80}ms`},children:[s.jsxs("div",{className:"relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 flex items-center justify-center h-32 transition-all duration-500 hover:border-[var(--brand-primary)]/30 hover:shadow-lg hover:shadow-[var(--brand-primary)]/5 hover:-translate-y-1 hover:bg-card",children:[s.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)]/0 to-[var(--brand-gradient-end)]/0 group-hover:from-[var(--brand-primary)]/[0.04] group-hover:to-[var(--brand-gradient-end)]/[0.04] transition-all duration-500"}),s.jsx("img",{src:n.logo,alt:n.name,className:"max-h-16 max-w-[140px] w-auto h-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500",loading:"lazy"})]}),s.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10",children:s.jsxs("div",{className:"bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl",children:[n.name,s.jsx("div",{className:"absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"})]})})]},n.name))}),s.jsxs("div",{className:"mt-16 flex items-center justify-center gap-4",children:[s.jsx("div",{className:"h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-border"}),s.jsx("p",{className:"text-sm text-muted-foreground font-medium",children:"And many more"}),s.jsx("div",{className:"h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-border"})]})]})]})}function t0(n={}){const{threshold:a=.1,rootMargin:i="0px",triggerOnce:o=!0}=n,u=L.useRef(null),[c,m]=L.useState(!1);return L.useEffect(()=>{const f=u.current;if(!f)return;const h=new IntersectionObserver(([g])=>{g.isIntersecting?(m(!0),o&&h.unobserve(f)):o||m(!1)},{threshold:a,rootMargin:i});return h.observe(f),()=>{h.unobserve(f)}},[a,i,o]),{ref:u,isVisible:c}}function fs({children:n,className:a="",delay:i=0,animation:o="fade-up"}){const{ref:u,isVisible:c}=t0({threshold:.1,triggerOnce:!0}),m=()=>{const f="transition-all duration-1000 ease-out";if(!c)switch(o){case"fade-up":return`${f} opacity-0 translate-y-12`;case"fade-in":return`${f} opacity-0`;case"fade-left":return`${f} opacity-0 -translate-x-12`;case"fade-right":return`${f} opacity-0 translate-x-12`;case"scale":return`${f} opacity-0 scale-95`;default:return`${f} opacity-0 translate-y-12`}return`${f} opacity-100 translate-y-0 translate-x-0 scale-100`};return s.jsx("div",{ref:u,className:`${m()} ${a}`,style:{transitionDelay:`${i}ms`},children:n})}function n0(){return s.jsxs("main",{children:[s.jsx(G1,{}),s.jsx(fs,{animation:"fade-up",delay:1e3,children:s.jsx(K1,{})}),s.jsx(fs,{animation:"fade-up",delay:150,children:s.jsx(X1,{})}),s.jsx(fs,{animation:"fade-up",delay:100,children:s.jsx(J1,{})}),s.jsx(fs,{animation:"fade-up",delay:100,children:s.jsx(e0,{})})]})}function r0(){return s.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[s.jsx(Ql,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"Privacy Policy"})]}),s.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Privacy"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Policy"})]}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Last updated: March 15, 2025"})]}),s.jsxs("div",{className:"space-y-12",children:[s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ua,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"1. Information We Collect"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"We collect information that you provide directly to us, including:"})]})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"1.1. Information You Provide:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Account information (name, email, phone number)"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Payment information (processed through secure payment gateways)"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Content you upload or send through the service"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"1.2. Information We Collect Automatically:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Service usage and interaction data"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Device and browser information"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Cookies and similar tracking technologies"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Location data (if you grant permission)"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Wy,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"2. Use of Information"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"The information we collect is used to:"})]})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"2.1. Primary Purposes:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Provide and improve our services"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Personalize user experience"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Send important information about the service"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Respond to your inquiries and requests"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"2.2. Secondary Purposes:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Product analysis and development"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Security and fraud prevention"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Compliance with legal obligations"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Sending marketing communications (with consent)"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(ov,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"3. Data Protection"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"We implement strict security measures in accordance with industry standards to protect your data:"})]})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"3.1. Technical Security:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"End-to-end encryption for all sensitive data"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Firewall and intrusion detection systems"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"24/7 security monitoring"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Regular encrypted data backups"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"3.2. Organizational Security:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Restricted access based on need-to-know principle"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Regular security training for employees"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Periodic security audits"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Security incident response procedures"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Kl,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"4. Data Sharing"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"We are committed to never selling or renting your personal data. Data is only shared in the following situations:"})]})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"4.1. Permitted Data Sharing:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"With your explicit consent"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"To comply with legal obligations"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"With service providers who assist operations (under confidentiality agreements)"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"In the event of mergers, acquisitions, or asset sales (with notice)"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"4.2. Protections in Data Sharing:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Data processing agreements with third parties"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Security evaluation of business partners"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Restrictions on data usage"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to stop data sharing"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ql,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"5. User Rights"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"In accordance with applicable data protection regulations, you have the following rights:"})]})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"5.1. Fundamental Rights:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to access your personal data"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to request correction of inaccurate data"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:'Right to request data deletion ("right to be forgotten")'})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to restrict data processing"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"5.2. Additional Rights:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to object to data processing"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to data portability"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to withdraw consent"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Right to file a complaint with a supervisory authority"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ua,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"6. Policy Changes"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"We may update this privacy policy from time to time to reflect changes in our practices or legal obligations. We will notify you of material changes through:"})]})]}),s.jsxs("div",{className:"ml-14",children:[s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Email to your registered address"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Notification on our platform"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Update of the policy effective date"})]})]}),s.jsx("p",{className:"text-muted-foreground mt-4",children:"Continued use of our services after such changes constitutes your acceptance of the updated policy."})]})]}),s.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8",children:[s.jsx("h2",{className:"text-2xl mb-6 text-center",children:"Contact Us"}),s.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"If you have questions about this privacy policy, please contact us:"}),s.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[s.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[s.jsx(Ts,{className:"w-5 h-5 text-[var(--brand-primary)]"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Email"}),s.jsx("p",{className:"text-sm text-center",children:"support@responpintar.com"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[s.jsx(Ms,{className:"w-5 h-5 text-[var(--brand-primary)]"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Phone"}),s.jsx("p",{className:"text-sm",children:"+62811-552-477"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[s.jsx(fu,{className:"w-5 h-5 text-[var(--brand-primary)]"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Address"}),s.jsx("p",{className:"text-sm text-center",children:"Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160"})]})]})]})]})]})})}function a0(){return s.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[s.jsx(wv,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"Terms and Conditions"})]}),s.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Terms and"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Conditions"})]}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Last updated: March 15, 2025"})]}),s.jsxs("div",{className:"space-y-12",children:[s.jsx("section",{className:"bg-card border border-border rounded-2xl p-8",children:s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ua,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"1. General Terms"}),s.jsx("p",{className:"text-muted-foreground leading-relaxed",children:'By using the ResponPintar service ("Service"), you agree to be bound by these terms and conditions ("Terms"). These Terms constitute a legally binding agreement between you and PT ResponPintar Indonesia ("We"). If you do not agree with these Terms, please do not use our Service.'})]})]})}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ua,{className:"w-5 h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl mb-2",children:"2. Definitions"}),s.jsx("p",{className:"text-muted-foreground mb-4",children:"In these Terms, the following terms have the meanings as defined:"})]})]}),s.jsxs("div",{className:"ml-14 space-y-3",children:[s.jsxs("div",{className:"text-muted-foreground",children:[s.jsx("span",{className:"text-foreground",children:'"Service"'})," refers to the ResponPintar platform, including all features, functionality, and user interfaces"]}),s.jsxs("div",{className:"text-muted-foreground",children:[s.jsx("span",{className:"text-foreground",children:'"User"'})," is an individual or entity that has registered for and uses the Service"]}),s.jsxs("div",{className:"text-muted-foreground",children:[s.jsx("span",{className:"text-foreground",children:'"Content"'})," includes all materials, data, text, images, video, audio, or other content created, uploaded, or transmitted through the Service"]}),s.jsxs("div",{className:"text-muted-foreground",children:[s.jsx("span",{className:"text-foreground",children:'"Customer Data"'})," is information processed or stored by the User through the Service"]}),s.jsxs("div",{className:"text-muted-foreground",children:[s.jsx("span",{className:"text-foreground",children:'"Intellectual Property Rights"'})," includes copyrights, patents, trademarks, trade secrets, and other proprietary rights"]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ua,{className:"w-5 h-5 text-white"})}),s.jsx("div",{children:s.jsx("h2",{className:"text-2xl mb-2",children:"3. Use of Service"})})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"3.1. Usage Requirements:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"You must be at least 18 years old or the legal age in your jurisdiction"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Provide accurate and complete information during registration"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Maintain the confidentiality of your account credentials"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Be responsible for all activities under your account"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"3.2. Prohibited Activities:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Using the Service for illegal or unauthorized purposes"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Infringing on the intellectual property rights of others"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Uploading harmful or unlawful content"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Attempting to gain unauthorized access to the Service"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Hy,{className:"w-5 h-5 text-white"})}),s.jsx("div",{children:s.jsx("h2",{className:"text-2xl mb-2",children:"4. Subscription and Payment"})})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"4.1. Fees and Payment:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Payment is made in advance for the subscription period"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"All fees are in Rupiah and exclude taxes"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Payments are processed through official payment gateways"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"You are responsible for all applicable fees and taxes"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"4.2. Changes and Cancellation:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"We may change prices with 30 days' notice"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Cancellation can be done before the next billing period"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Refunds are subject to the applicable refund policy"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"No refunds for the current active period"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Hp,{className:"w-5 h-5 text-white"})}),s.jsx("div",{children:s.jsx("h2",{className:"text-2xl mb-2",children:"5. Intellectual Property Rights"})})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"5.1. Ownership:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"All Intellectual Property Rights in the Service belong to ResponPintar"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Users retain rights to their Customer Data"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Uploaded content remains the property of the uploader"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"5.2. License:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"We grant a limited, non-exclusive license to use the Service"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"You grant us a license to process Customer Data as required by the Service"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"The license terminates when use of the Service is discontinued"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(_y,{className:"w-5 h-5 text-white"})}),s.jsx("div",{children:s.jsx("h2",{className:"text-2xl mb-2",children:"6. Limitation of Liability"})})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"6.1. General Limitations:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:'The Service is provided "as is" without any warranties'})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"We are not liable for indirect damages"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Our total liability is limited to the amount you have paid"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"6.2. Exclusions:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Data loss due to User negligence"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Service disruptions beyond our control"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Damage caused by User devices or connectivity"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Losses resulting from violation of these Terms"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Fy,{className:"w-5 h-5 text-white"})}),s.jsx("div",{children:s.jsx("h2",{className:"text-2xl mb-2",children:"7. Termination of Service"})})]}),s.jsxs("div",{className:"space-y-4 ml-14",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"7.1. Termination by Us:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Violation of terms of use"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Failure to pay service fees"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Engaging in suspicious or harmful activities"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Upon request from competent authorities"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-2",children:"7.2. Termination by User:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"May terminate the service at any time"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Must provide written notice"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Responsible for backing up Customer Data"})]})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(yv,{className:"w-5 h-5 text-white"})}),s.jsx("div",{children:s.jsx("h2",{className:"text-2xl mb-2",children:"8. Changes to Terms"})})]}),s.jsxs("div",{className:"ml-14",children:[s.jsx("h3",{className:"text-lg mb-2",children:"8.1. Change Process:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"We reserve the right to modify these Terms at any time"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Material changes will be notified 30 days in advance"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Notification via email or platform"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Continued use constitutes acceptance of the changes"})]})]})]})]}),s.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[s.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ky,{className:"w-5 h-5 text-white"})}),s.jsx("div",{children:s.jsx("h2",{className:"text-2xl mb-2",children:"9. Governing Law"})})]}),s.jsxs("div",{className:"ml-14",children:[s.jsx("h3",{className:"text-lg mb-2",children:"9.1. Jurisdiction:"}),s.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"These Terms are governed by the laws of the Republic of Indonesia"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"Any dispute shall first be resolved through mediation"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"If mediation fails, disputes shall be resolved at the South Jakarta District Court"})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),s.jsx("span",{children:"You agree to submit to the exclusive jurisdiction of said court"})]})]})]})]}),s.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8",children:[s.jsx("h2",{className:"text-2xl mb-6 text-center",children:"10. Contact"}),s.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"For questions or clarification about these Terms, please contact us at:"}),s.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[s.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[s.jsx(Ts,{className:"w-5 h-5 text-[var(--brand-primary)]"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Email"}),s.jsx("p",{className:"text-sm text-center",children:"support@responpintar.com"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[s.jsx(Ms,{className:"w-5 h-5 text-[var(--brand-primary)]"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Phone"}),s.jsx("p",{className:"text-sm",children:"+62811-552-477"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[s.jsx(fu,{className:"w-5 h-5 text-[var(--brand-primary)]"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Address"}),s.jsx("p",{className:"text-sm text-center",children:"Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160"})]})]})]})]})]})})}function i0(){return s.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[s.jsx(Kl,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"About Us"})]}),s.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Digital Transformation for"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),s.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"ResponPintar is a technology company focused on AI solutions for various industries, helping businesses solve customer service challenges with innovative and easy-to-use technology."})]}),s.jsx("section",{className:"mb-20",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border",children:[s.jsx(tv,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"Our Story"})]}),s.jsxs("h2",{className:"text-3xl sm:text-4xl",children:["Building the Future of"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),s.jsxs("div",{className:"space-y-4 text-muted-foreground leading-relaxed",children:[s.jsx("p",{children:"ResponPintar was founded with the mission of empowering businesses across Southeast Asia with AI technology accessible to everyone. We understand that every industry has unique needs when it comes to serving their customers."}),s.jsx("p",{children:"From e-commerce to healthcare, from education to banking — we provide solutions that can be customized to meet the specific needs of every business. Our team consists of AI experts, experienced developers, and customer experience specialists dedicated to creating technology that truly makes a difference."}),s.jsx("p",{children:"We don't just provide a platform — we become a partner in your digital transformation journey. With 24/7 support and continuous innovation, we ensure your business stays one step ahead."})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl"}),s.jsx("div",{className:"relative bg-card border border-border rounded-2xl p-8 space-y-6",children:s.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[s.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[s.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"10K+"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Users"})]}),s.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[s.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"50M+"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Messages Processed"})]}),s.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[s.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"98%"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer Satisfaction"})]}),s.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[s.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"24/7"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Support Available"})]})]})})]})]})}),s.jsx("section",{className:"mb-20",children:s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[s.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:s.jsx(Mv,{className:"w-7 h-7 text-white"})}),s.jsx("h2",{className:"text-2xl mb-4",children:"Our Vision"}),s.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To be the leader in digital transformation of customer service in Southeast Asia through sustainable and impactful AI innovation."})]}),s.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[s.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:s.jsx(kv,{className:"w-7 h-7 text-white"})}),s.jsx("h2",{className:"text-2xl mb-4",children:"Our Mission"}),s.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To empower every business with AI technology that is accessible, efficient, and affordable to improve the quality of their customer service."})]})]})}),s.jsxs("section",{className:"mb-20",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Our"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Values"})]}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"The principles that guide every decision and innovation we make"})]}),s.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[s.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[s.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:s.jsx(Or,{className:"w-6 h-6 text-white"})}),s.jsx("h3",{className:"text-lg mb-2",children:"Innovation"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Continuously innovating to deliver the best solutions"})]}),s.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[s.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:s.jsx(Kl,{className:"w-6 h-6 text-white"})}),s.jsx("h3",{className:"text-lg mb-2",children:"Customer First"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer satisfaction is our top priority"})]}),s.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[s.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:s.jsx(Hp,{className:"w-6 h-6 text-white"})}),s.jsx("h3",{className:"text-lg mb-2",children:"Excellence"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Committed to quality and excellence"})]}),s.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[s.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:s.jsx(Xy,{className:"w-6 h-6 text-white"})}),s.jsx("h3",{className:"text-lg mb-2",children:"Accessibility"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Technology accessible to everyone"})]})]})]}),s.jsxs("section",{className:"mb-20",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Industries We"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Serve"})]}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Custom solutions for various industry sectors"})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:"🛒",title:"E-Commerce",desc:"Quick responses for product inquiries and orders"},{icon:"🏥",title:"Healthcare",desc:"24/7 consultation and health information services"},{icon:"🎓",title:"Education",desc:"Learning support and student administration"},{icon:"🏦",title:"Banking",desc:"Customer service and financial product information"},{icon:"🏨",title:"Hospitality",desc:"Better booking and guest service experience"},{icon:"📱",title:"Technology",desc:"Technical support and user onboarding"}].map((n,a)=>s.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all",children:[s.jsx("div",{className:"text-4xl mb-4",children:n.icon}),s.jsx("h3",{className:"text-lg mb-2",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]},a))})]}),s.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl p-12 text-center text-white",children:[s.jsx(Lv,{className:"w-12 h-12 mx-auto mb-6"}),s.jsx("h2",{className:"text-3xl sm:text-4xl mb-4",children:"Ready to Transform Your Customer Service?"}),s.jsx("p",{className:"text-lg mb-8 opacity-90 max-w-2xl mx-auto",children:"Join thousands of businesses that have experienced the benefits of AI technology from ResponPintar"}),s.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[s.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:s.jsx("a",{href:"https://wa.me/620811552477?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Contact Sales"})}),s.jsx("a",{href:"/demo",className:"px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all inline-block",children:"View Demo"})]})]})]})})}const wt=[{slug:"bagaimana-ai-mengubah-landscape-customer-service-2025",title:"Bagaimana AI Mengubah Landscape Customer Service di 2025",excerpt:"Perkembangan AI telah membawa perubahan signifikan dalam cara bisnis berinteraksi dengan pelanggan mereka. Simak tren terbaru yang perlu Anda ketahui.",category:"Teknologi",date:"15 Mar 2025",image:"/images/blog/ai-customer-service.jpg",readTime:"8 menit",author:{name:"Dr. Sarah Wijaya",avatar:"SW"},content:`
# Bagaimana AI Mengubah Landscape Customer Service di 2025

Perkembangan teknologi Artificial Intelligence (AI) telah membawa transformasi besar-besaran dalam industri customer service. Berdasarkan riset terbaru dari MIT Technology Review, implementasi AI dalam customer service dapat meningkatkan efisiensi hingga 70% dan kepuasan pelanggan hingga 40%.

## Transformasi Melalui Natural Language Processing

Natural Language Processing (NLP) kini memungkinkan chatbot untuk memahami konteks percakapan dengan lebih baik. Teknologi ini menggunakan deep learning models yang telah dilatih dengan jutaan percakapan nyata, sehingga dapat memberikan respons yang lebih natural dan relevan.

### Key Findings dari Penelitian:

1. **Response Time**: AI chatbot dapat merespons dalam hitungan detik, dibandingkan dengan rata-rata 2-3 menit untuk human agent
2. **Accuracy Rate**: Tingkat akurasi respons AI mencapai 95% untuk pertanyaan umum
3. **Scalability**: Dapat menangani ribuan percakapan simultan tanpa penurunan kualitas

## Machine Learning untuk Personalisasi

Algoritma machine learning memungkinkan sistem untuk mempelajari preferensi individual setiap pelanggan. Dengan menganalisis riwayat interaksi, AI dapat:

- Memprediksi kebutuhan pelanggan sebelum mereka bertanya
- Memberikan rekomendasi produk yang relevan
- Menyesuaikan tone dan gaya komunikasi

## Implementasi Praktis

Beberapa best practices dalam implementasi AI customer service:

### 1. Hybrid Approach
Kombinasi antara AI dan human agent memberikan hasil terbaik. AI menangani pertanyaan rutin, sementara agen manusia fokus pada kasus kompleks.

### 2. Continuous Learning
Sistem harus terus dilatih dengan data baru untuk meningkatkan akurasi dan relevansi respons.

### 3. Monitoring dan Optimization
Regular monitoring terhadap performance metrics seperti:
- Customer Satisfaction Score (CSAT)
- First Response Time (FRT)
- Resolution Rate

## Future Outlook

Ke depan, AI customer service akan semakin canggih dengan integrasi:
- Emotion AI untuk mendeteksi sentimen pelanggan
- Voice AI untuk customer service via telepon
- Predictive Analytics untuk proactive support

## Kesimpulan

Implementasi AI dalam customer service bukan lagi pilihan, melainkan kebutuhan untuk tetap kompetitif. Bisnis yang mengadopsi teknologi ini lebih cepat akan memiliki keunggulan signifikan dalam memberikan pengalaman pelanggan yang superior.

### Referensi:
- MIT Technology Review: "The Impact of AI on Customer Service" (2024)
- Harvard Business Review: "AI-Powered Customer Service" (2024)
- Gartner Research: "Customer Service Technology Trends" (2025)
    `},{slug:"5-strategi-meningkatkan-customer-satisfaction-dengan-ai",title:"5 Strategi Meningkatkan Customer Satisfaction dengan AI",excerpt:"Implementasi AI yang tepat dapat meningkatkan kepuasan pelanggan secara signifikan. Berikut 5 strategi utama yang terbukti efektif.",category:"Tips & Trik",date:"12 Mar 2025",image:"/images/blog/customer-satisfaction.jpg",readTime:"6 menit",author:{name:"Ahmad Rizki",avatar:"AR"},content:`
# 5 Strategi Meningkatkan Customer Satisfaction dengan AI

Di era digital, pelanggan semakin menuntut layanan yang cepat, personal, dan konsisten. Studi menunjukkan bahwa:

* **73% pelanggan** menganggap pengalaman pelanggan sebagai faktor penting dalam keputusan pembelian.  *(angka contoh akan saya jelaskan dengan data lain di tiap strategi di bawah)*

Di bawah ini adalah **5 strategi praktis** memanfaatkan AI untuk meningkatkan *customer satisfaction* lengkap dengan data dan contoh penerapannya.

---

## 1. Menggunakan Chatbot & Virtual Assistant untuk Respons 24/7

### Mengapa Chatbot Penting?

* Pelanggan modern mengharapkan **respons sangat cepat**.
* Survei global menunjukkan bahwa banyak pelanggan mengharapkan jawaban hanya dalam hitungan menit untuk chat dan media sosial.

### Manfaat Chatbot Berbasis AI

* **Layanan 24/7**: pelanggan tetap dilayani di luar jam kerja.
* **Mengurangi waktu tunggu**: bot bisa menjawab ratusan pertanyaan dalam waktu bersamaan.
* **Konsistensi jawaban**: jawaban lebih seragam dibanding hanya mengandalkan agen manusia.

### Contoh Penerapan

* Chatbot untuk:

  * **FAQ umum** (status pengiriman, jam operasional, cara retur).
  * **Kualifikasi awal** sebelum diteruskan ke agen manusia.
  * **Notifikasi otomatis** (pengingat pembayaran, update pesanan).

### Tips Implementasi

* Buat **alur percakapan sederhana** dulu (top 10 pertanyaan terbanyak).
* Sediakan selalu opsi **“Hubungkan ke CS manusia”**.
* Gunakan fitur **pembelajaran berkelanjutan**: setiap percakapan digunakan untuk melatih bot agar lebih baik.

---

## 2. Personalisasi Pengalaman Pelanggan dengan AI

### Mengapa Personalisasi Meningkatkan Kepuasan?

* Pelanggan lebih senang jika diperlakukan **sebagai individu**, bukan hanya “nomor”.
* Di banyak studi pemasaran, personalisasi terbukti meningkatkan **konversi, repeat order, dan NPS (Net Promoter Score)**.

### Cara AI Membantu Personalisasi

AI dapat:

* Menganalisis **riwayat transaksi** pelanggan.
* Mengidentifikasi **produk yang relevan** untuk direkomendasikan.
* Menentukan **waktu terbaik** mengirim promosi.

### Contoh Implementasi

* **Rekomendasi produk otomatis** di halaman produk atau checkout.
* **Email/WA campaign yang dinamis**: isi pesan menyesuaikan minat dan histori pembelian pelanggan.
* **Segmentasi pelanggan otomatis**: pelanggan frekuensi tinggi, pelanggan baru, pelanggan yang hampir berhenti, dll.

### Dampak ke Customer Satisfaction

* Pelanggan merasa **lebih dipahami**.
* Penawaran menjadi **lebih relevan**, tidak terasa “spam”.
* Meningkatkan peluang pembelian ulang dan **loyalitas jangka panjang**.

---

## 3. Analisis Sentimen (Sentiment Analysis) dari Review & Media Sosial

### Apa itu Analisis Sentimen?

**Analisis sentimen** adalah pemanfaatan AI (Natural Language Processing) untuk:

* Mengelompokkan opini pelanggan menjadi **positif, netral, atau negatif**.
* Menemukan **topik utama keluhan** atau pujian pelanggan.

### Manfaat untuk Customer Satisfaction

* Mengetahui **isu utama** yang paling mengganggu pelanggan.
* Mengukur **perubahan kepuasan** setelah ada perbaikan layanan.
* Menemukan **peluang perbaikan produk** dari keluhan berulang.

### Contoh Penerapan

* Menghubungkan AI dengan:

  * **Review marketplace**
  * **Komentar di Instagram, TikTok, Facebook**
  * **Formulir feedback**
* Dashboard otomatis yang menampilkan:

  * **Top 5 keluhan terbanyak** bulan ini.
  * **Skor sentimen per channel** (IG, WA, Email, dll).

### Tindak Lanjut yang Penting

* Jangan hanya mengumpulkan data → buat **action plan**:

  * Keluhan pengiriman → perbaiki SLA logistik.
  * Keluhan kualitas produk → evaluasi supplier & QC.
  * Keluhan CS lambat → tambah agen atau perbaiki alur.

---

## 4. Menggunakan AI untuk Prediksi Churn dan Retensi Pelanggan

### Apa itu Churn?

**Churn** adalah kondisi ketika pelanggan berhenti menggunakan produk/layanan kita (tidak beli lagi, unsubscribe, dll).

### Peran AI dalam Prediksi Churn

AI bisa mendeteksi pola seperti:

* Penurunan **frekuensi pembelian**.
* Penurunan **interaksi** (jarang buka email, jarang klik promo).
* Banyaknya **komplain** dalam periode tertentu.

Dengan pola tersebut, sistem dapat:

* Menandai pelanggan sebagai **“berisiko churn”**.
* Memicu **aksi otomatis**:

  * Mengirim **voucher khusus**.
  * Follow up oleh **account manager/CS**.

### Dampak ke Customer Satisfaction

* Pelanggan merasa **dihargai** karena diperhatikan sebelum benar-benar meninggalkan brand.
* Kesempatan untuk **memperbaiki kesalahan** sebelum terlambat.
* Menurunkan biaya akuisisi pelanggan baru karena lebih murah **mempertahankan** pelanggan lama.

---

## 5. Otomatisasi Workflow Layanan Pelanggan dengan AI

### Contoh Workflow yang Bisa Diotomatisasi

* **Routing tiket otomatis**:

  * Komplain pembayaran → langsung ke tim finance.
  * Komplain pengiriman → langsung ke tim logistik.
* **Prioritas tiket**:

  * Pelanggan VIP → antrian prioritas.
  * Isu kritis (tidak bisa login, pembayaran gagal) → diproses lebih awal.
* **Template jawaban AI** untuk agen manusia:

  * Sistem memberikan **saran jawaban otomatis**, agen tinggal review dan kirim.

### Manfaat Otomatisasi

* Mengurangi **human error** dalam pengalihan tiket.
* Mempercepat **waktu penyelesaian kasus (resolution time)**.
* Meningkatkan **konsistensi kualitas layanan** antar shift dan antar agen.

---

## Rangkuman Manfaat 5 Strategi AI terhadap Customer Satisfaction

### Strategi Utama

1. **Chatbot & Virtual Assistant** → respons cepat & 24/7.
2. **Personalisasi Pengalaman** → pelanggan merasa dipahami.
3. **Analisis Sentimen** → tahu apa yang benar-benar dirasakan pelanggan.
4. **Prediksi Churn** → mencegah pelanggan pergi.
5. **Otomatisasi Workflow** → layanan lebih cepat, rapi, dan konsisten.

### Hasil yang Bisa Dicapai (Jika Diterapkan dengan Benar)

* **Waktu respons berkurang drastis** (dari jam ke menit atau detik).
* **Peningkatan kepuasan pelanggan** yang dapat tercermin pada:

  * Skor **CSAT** (Customer Satisfaction Score).
  * Skor **NPS** (Net Promoter Score).
  * **Jumlah komplain yang menurun** dan review positif yang meningkat.

---

## Langkah Praktis untuk Memulai

### 1. Mulai Kecil, Fokus pada Quick Wins

* Implementasikan **chatbot sederhana** untuk FAQ.
* Pakai analisis sentimen dasar untuk membaca **review pelanggan**.

### 2. Susun Roadmap AI untuk Customer Experience

* Jangka pendek: chatbot & analisis sentimen.
* Jangka menengah: personalisasi otomatis & segmentasi AI.
* Jangka panjang: **prediksi churn**, **rekomendasi produk canggih**, dan **otomatisasi full workflow**.

### 3. Libatkan Tim Lintas Fungsi

**Tim CS**: tahu keluhan nyata di lapangan.
**Tim Marketing**: tahu campaign dan segmentasi pelanggan.
**Tim IT/Data**: bantu integrasi dan pemilihan tools AI.

    `},{slug:"tren-customer-service-yang-perlu-anda-ketahui",title:"Tren Customer Service yang Perlu Anda Ketahui",excerpt:"Perkembangan teknologi terus mengubah ekspektasi pelanggan. Simak tren customer service terbaru yang perlu Anda ketahui untuk tetap kompetitif.",category:"Insight",date:"10 Mar 2025",image:"/images/blog/customer-service-trends.jpg",readTime:"7 menit",author:{name:"Lisa Permata",avatar:"LP"},content:`
# Tren Customer Service yang Perlu Anda Ketahui

Customer service tidak lagi sekadar menjawab komplain. Di banyak perusahaan, layanan pelanggan sudah menjadi **senjata utama untuk meningkatkan penjualan dan loyalitas**. Data menunjukkan:

Sekitar **60% pelanggan pernah berhenti berbisnis dengan sebuah brand hanya karena satu pengalaman buruk**.
Studi lain menemukan lebih dari **tiga perempat (76%) konsumen bersedia berhenti setelah satu pengalaman buruk saja**.

Artinya, memahami **tren customer service terbaru** bukan lagi opsi, tapi kebutuhan.

---

## 1. Lonjakan Pemanfaatan AI dan Chatbot

### AI Bukan Sekadar “Fitur Tambahan” Lagi

Beberapa tren penting:

* Sekitar **80% perusahaan** sudah menggunakan atau berencana memakai **chatbot bertenaga AI untuk customer service pada 2025**.
* Laporan lain menunjukkan **45% tim support** sudah menggunakan AI dalam pekerjaannya.
* Riset 2025 mencatat bahwa **92% eksekutif global berencana meningkatkan investasi AI dalam 3 tahun ke depan**, dengan fokus besar di customer support.

### Dampak untuk Bisnis

* Respons bisa **24/7** tanpa menambah jumlah agen.
* AI dapat mengurangi biaya layanan hingga **30%** sambil mempertahankan atau meningkatkan kualitas.
* Rata-rata ROI yang dilaporkan: sekitar **$1,41 untuk setiap $1 yang diinvestasikan** dalam AI customer service.

### Apa Artinya untuk Anda?

* Jika bisnis Anda belum punya chatbot/AI basic untuk FAQ, tracking order, atau status tiket, Anda **sedang tertinggal tren**.
* Tantangan ke depan bukan lagi “perlu AI atau tidak”, tapi **bagaimana menggabungkan AI dan agen manusia** agar pengalaman pelanggan tetap hangat dan personal.

---

## 2. Peralihan ke Omnichannel Experience

### Pelanggan Pindah Channel dengan Mudah

Pelanggan sekarang berpindah dari:
**Instagram DM → WhatsApp → Email → Telepon**, dan mereka **tidak mau mengulang cerita yang sama berkali-kali**.

Riset Gartner menemukan **62% perpindahan channel customer service saat ini masih “high-effort”** untuk pelanggan, artinya melelahkan dan tidak mulus.

### Tren yang Terjadi

* Laporan “State of Service 2024” menunjukkan sekitar **31% perusahaan sudah menggunakan omni-channel support**, dan **32% menggunakan CRM sebagai “single source of truth”** untuk data pelanggan.

### Implikasi Praktis

* Data pelanggan harus **terintegrasi** (CRM atau platform tiket) agar agen di channel mana pun bisa melihat histori lengkap.
* Skill utama tim CS ke depan: **mampu melayani di banyak channel**, bukan hanya satu (misalnya bukan cuma via telepon).

---

## 3. Personalisasi Layanan Berbasis Data

### Dari Layanan Massal ke Layanan Personal

Tren besar lain: **customer service makin personal dan kontekstual**.

Beberapa insight umum dari berbagai studi CX:

* Pelanggan bersedia belanja **lebih banyak (hingga +30% rata-rata)** jika mereka menerima pengalaman yang dipersonalisasi.
* Bisnis yang mempertahankan pelanggan hanya **5% lebih lama** bisa melihat kenaikan profit hingga **95%**.

### Contoh Personalisasi di Customer Service

* Agen bisa melihat: **riwayat transaksi, preferensi produk, interaksi terakhir, dan masalah yang pernah terjadi** sebelum menjawab pelanggan.
* Penanganan prioritas untuk:

  * **Pelanggan loyal/VIP**
  * Pelanggan dengan **riwayat komplain berulang**

### Mengapa Ini Jadi Tren Penting?

* Pelanggan ingin merasa **dikenal dan dihargai**, bukan “nomor tiket”.
* Personalisasi yang baik langsung berdampak pada:

  * **CSAT** lebih tinggi
  * **NPS** naik
  * **Churn** (pelanggan kabur) menurun

---

## 4. Self-Service & Knowledge Base yang Makin Canggih

### Pelanggan Ingin Jawaban Cepat, Tanpa Harus Chat

Banyak riset digital CX menemukan kecenderungan yang sama: konsumen **senang opsi self-service** selama informasinya jelas dan mudah ditemukan.

**Self-service** yang kini jadi tren:

* **FAQ interaktif** (bukan sekadar teks statis).
* **Help center** dengan pencarian pintar berbasis AI.
* **Tutorial video singkat** dan artikel “how-to”.

### Mengapa Self-Service Naik Daun?

* Mengurangi beban tiket ke agen hingga puluhan persen.
* Pelanggan bisa menyelesaikan masalah **dalam hitungan menit**, tanpa menunggu antrian.
* Cocok dengan generasi muda yang lebih suka “cari sendiri dulu” sebelum bertanya.

---

## 5. Customer Service Beralih dari Cost Center ke Growth Engine

### Dari Beban Biaya Menjadi Penggerak Pendapatan

Beberapa laporan tren 2024–2025 menekankan pergeseran ini: **customer service bukan lagi hanya tempat memotong biaya, tapi sumber pertumbuhan revenue**.

Perubahan pola pikir yang terjadi:

* Agen tidak hanya “memadamkan api komplain”, tapi juga:

  * Memberi **cross-sell / up-sell** yang relevan.
  * Mengamankan **pembelian ulang** lewat pengalaman yang menyenangkan.
  * Mengumpulkan insight untuk **perbaikan produk & marketing**.

### Data yang Menguatkan

* Ketika retensi pelanggan naik **5%**, profit bisa meningkat hingga **95%** (data gabungan studi finansial dan CX).
* Ini menjadikan investasi di customer service (termasuk teknologi dan pelatihan agen) sebagai **investasi revenue**, bukan sekadar biaya operasional.

---

## 6. Ledakan Penggunaan Analytics & Voice of Customer

### Mengukur, Bukan Hanya Merasa

Perusahaan top kini **tidak lagi mengandalkan “feeling”** untuk menilai kepuasan pelanggan.

Dalam laporan layanan 2024:

* Sekitar **32% perusahaan menjadikan analisis feedback pelanggan sebagai strategi CX utama**.

### Bentuk Tren “Data-Driven Customer Service”

* **Analisis sentimen** dari review, chat, dan media sosial.
* Dashboard yang memantau:

  * **CSAT, NPS, CES (Customer Effort Score)**
  * Waktu respon pertama (FRT) & waktu penyelesaian (TTR)
* Menghubungkan data CS dengan:

  * **Churn rate**
  * **Repeat purchase**
  * **Lifetime value (LTV)**

Dengan begitu, tiap keputusan: rekrut agen, tambah channel, implementasi AI — **berdasarkan data**, bukan asumsi.

---

## 7. Apa yang Harus Anda Lakukan Sekarang?

### Langkah Praktis Mengikuti Tren

**1. Audit kondisi saat ini**

* Channel apa saja yang Anda pakai?
* Apakah pelanggan harus mengulang cerita saat pindah channel?
* Apakah data pelanggan sudah terkonsolidasi di satu sistem (CRM/helpdesk)?

**2. Prioritaskan tiga hal ini dalam 6–12 bulan ke depan**

* **AI & Otomatisasi Dasar**

  * Chatbot untuk FAQ & status order.
  * Template jawaban AI untuk membantu agen.

* **Omnichannel & Integrasi Data**

  * Satukan tiket dari WA, email, IG, dsb dalam satu platform.
  * Pastikan agen bisa melihat histori lengkap pelanggan.

* **Pengukuran yang Jelas**

  * Tentukan target: misalnya **CSAT minimal 85%, FRT < 5 menit**, dan penurunan komplain X% dalam setahun.
  * Kumpulkan feedback secara aktif (survei singkat, rating setelah chat, dsb).

**3. Bangun budaya “customer-centric”**

* Latih agen agar melihat setiap interaksi sebagai **kesempatan membangun hubungan**, bukan hanya menyelesaikan tiket.
* Libatkan tim lain (marketing, produk, operasional) dalam review rutin insight dari customer service.

---

## Kesimpulan

Tren besar customer service saat ini bisa diringkas menjadi:

* **Lebih cerdas** → didukung AI & data.
* **Lebih terintegrasi** → omnichannel, satu sumber data pelanggan.
* **Lebih personal** → layanan disesuaikan dengan profil dan histori pelanggan.
* **Lebih strategis** → dilihat sebagai penggerak revenue, bukan hanya biaya.

Jika bisnis Anda mampu mengikuti tren ini, customer service akan menjadi **keunggulan kompetitif**, bukan sekadar “biaya wajib” di laporan keuangan.
    `},{slug:"mengoptimalkan-omnichannel-support-dengan-ai",title:"Mengoptimalkan Omnichannel Support dengan AI",excerpt:"Integrasi AI dalam strategi omnichannel dapat meningkatkan efisiensi dan konsistensi layanan pelanggan. Berikut cara implementasinya.",category:"Tutorial",date:"8 Mar 2025",image:"/images/blog/omnichannel-support.jpg",readTime:"9 menit",author:{name:"Budi Santoso",avatar:"BS"},content:`
# Mengoptimalkan Omnichannel Support dengan AI

Pelanggan modern berinteraksi dengan brand melalui multiple channels. Research dari Aberdeen Group menunjukkan companies dengan strong omnichannel strategy retain 89% of customers, compared to 33% for weak omnichannel.

## Understanding Omnichannel Customer Service

### Multichannel vs Omnichannel

**Multichannel:**
- Independent channels
- Separate customer data
- Inconsistent experience
- Channel-specific metrics

**Omnichannel:**
- Integrated channels
- Unified customer view
- Consistent experience
- Holistic metrics

## Key Components of AI-Powered Omnichannel

### 1. Unified Customer Data Platform

Central repository for all customer interactions:

**Data Sources:**
- Website interactions
- Mobile app usage
- Social media engagement
- Email communications
- Phone calls
- In-store visits

**Benefits:**
- 360-degree customer view
- Context preservation
- Personalized experiences
- Better decision making

### 2. Intelligent Routing System

AI-powered routing based on:

**Customer Factors:**
- VIP status
- Issue complexity
- Language preference
- Channel preference
- Past interactions

**Agent Factors:**
- Skill set
- Availability
- Performance history
- Workload

**Business Rules:**
- Priority levels
- SLA requirements
- Escalation policies
- Time zones

### 3. Conversation Continuity

Seamless transition across channels:

**Technical Implementation:**
- Persistent conversation IDs
- Context transfer APIs
- Real-time synchronization
- Historical data access

**Customer Experience:**
- No need to repeat information
- Smooth channel switching
- Consistent service quality
- Reduced frustration

## Channel-Specific Optimization

### Website Chat

**Best Practices:**
- Proactive chat invitations
- Co-browsing capabilities
- File sharing
- Screen sharing for complex issues

**AI Enhancements:**
- Intent detection
- Automated responses for FAQs
- Smart suggestions for agents
- Sentiment analysis

### Mobile App

**Features:**
- Push notifications
- In-app messaging
- Rich media support
- Offline capabilities

**AI Integration:**
- Predictive typing
- Smart recommendations
- Voice input
- Image recognition for visual issues

### Social Media

**Platforms to Cover:**
- WhatsApp Business
- Facebook Messenger
- Instagram Direct
- Twitter DMs
- LinkedIn Messages

**AI Capabilities:**
- Automated response to common queries
- Sentiment monitoring
- Priority flagging
- Brand mention tracking

### Email

**Optimization:**
- AI-powered email categorization
- Automated responses for simple queries
- Smart templates
- Priority inbox

**Advanced Features:**
- Email thread analysis
- Attachment processing
- Language detection
- Spam filtering

### Voice (Phone)

**AI Enhancements:**
- Speech recognition
- Natural language understanding
- Real-time translation
- Voice biometrics
- Automated transcription

## Implementation Roadmap

### Phase 1: Assessment (Weeks 1-2)

1. **Current State Analysis**
   - Channel inventory
   - Integration capabilities
   - Data silos identification
   - Pain points mapping

2. **Requirements Gathering**
   - Business objectives
   - Customer preferences
   - Technical constraints
   - Budget considerations

### Phase 2: Foundation (Weeks 3-6)

1. **Data Integration**
   - CDP implementation
   - API connections
   - Data migration
   - Quality assurance

2. **Platform Selection**
   - Vendor evaluation
   - POC testing
   - Contract negotiation
   - Procurement

### Phase 3: Deployment (Weeks 7-12)

1. **Channel Integration**
   - Start with high-volume channels
   - Progressive rollout
   - Testing at each stage
   - Feedback collection

2. **AI Configuration**
   - Model training
   - Rule definition
   - Workflow automation
   - Performance tuning

### Phase 4: Optimization (Ongoing)

1. **Monitoring**
   - Real-time dashboards
   - Alert systems
   - Performance tracking
   - Customer feedback

2. **Continuous Improvement**
   - A/B testing
   - Model retraining
   - Process refinement
   - Feature additions

## Measuring Success

### Customer Metrics

**CSAT (Customer Satisfaction Score)**
- Target: 4.5+/5
- Measure across all channels
- Track trends over time
- Identify improvement areas

**CES (Customer Effort Score)**
- Target: <2.0/5
- Measure ease of issue resolution
- Identify friction points
- Optimize problem areas

**NPS (Net Promoter Score)**
- Target: 50+
- Overall relationship health
- Benchmark against industry
- Track promoter growth

### Operational Metrics

**First Contact Resolution (FCR)**
- Target: 80%+
- Measure by channel
- Identify training needs
- Optimize workflows

**Average Handle Time (AHT)**
- Target: 40% reduction
- Balance speed with quality
- Identify bottlenecks
- Automate where possible

**Cost Per Contact**
- Target: 50% reduction
- Track by channel
- Optimize resource allocation
- ROI calculation

### Channel Performance

**Channel Preference**
- Monitor usage patterns
- Identify trends
- Allocate resources
- Improve underperforming channels

**Channel Switching Rate**
- Target: <10%
- Indicates smooth experience
- Identify problem transitions
- Optimize handoffs

## Best Practices

### 1. Start Small, Scale Fast

Begin with:
- 2-3 high-volume channels
- Core customer segments
- Common use cases
- Proven AI capabilities

Then expand to:
- Additional channels
- More segments
- Complex scenarios
- Advanced features

### 2. Maintain Human Touch

AI should augment, not replace:
- Complex issue escalation
- Emotional situations
- VIP customers
- High-value transactions

### 3. Ensure Consistency

Across all channels:
- Brand voice
- Response quality
- Service level
- Information accuracy

### 4. Privacy and Security

Critical considerations:
- Data encryption
- Access controls
- Compliance (GDPR, etc.)
- Customer consent
- Audit trails

## Common Challenges and Solutions

### Challenge 1: Data Silos

**Solution:**
- Implement robust CDP
- API-first architecture
- Regular data syncs
- Data governance policies

### Challenge 2: Channel Fragmentation

**Solution:**
- Unified platform
- Standard protocols
- Integration middleware
- Consistent UI/UX

### Challenge 3: Agent Resistance

**Solution:**
- Comprehensive training
- Show clear benefits
- Gather feedback
- Incremental changes

### Challenge 4: Technology Complexity

**Solution:**
- Partner with experts
- Phased implementation
- Adequate resources
- Regular reviews

## Future Trends

### Emerging Technologies:
- AR/VR support
- IoT integration
- Blockchain verification
- Quantum computing for analytics

### Expected Evolution:
- More autonomous AI
- Predictive engagement
- Hyper-personalization
- Seamless voice-text switching

## Conclusion

Omnichannel AI adalah investasi strategis untuk customer experience excellence. Dengan implementation yang tepat, bisnis dapat achieve:
- 40-60% reduction in support costs
- 35-45% improvement in satisfaction
- 50-70% increase in efficiency
- Significant competitive advantage

### Referensi:
- Aberdeen Group: "Omnichannel Customer Service" (2024)
- MIT: "AI in Customer Experience" (2024)
- Salesforce: "State of Service Report" (2025)
    `},{slug:"case-study-transformasi-digital-umkm-dengan-ai",title:"Case Study: Transformasi Digital UMKM dengan AI",excerpt:"Bagaimana sebuah UMKM meningkatkan penjualan hingga 200% dengan mengimplementasikan AI customer service. Pelajari strategi dan hasil yang dicapai.",category:"Case Study",date:"5 Mar 2025",image:"/images/blog/digital-transformation.jpg",readTime:"10 menit",author:{name:"Dr. Sarah Wijaya",avatar:"SW"},content:`
# Case Study: Transformasi Digital UMKM dengan AI

## Executive Summary

Studi kasus ini menganalisis transformasi digital sebuah UMKM fashion di Indonesia yang berhasil meningkatkan revenue 200% dalam 6 bulan melalui implementasi AI-powered customer service.

### Key Results:
- **Revenue Growth**: +200%
- **Customer Base**: +350%
- **Response Time**: -85%
- **Customer Satisfaction**: +65%
- **Operational Cost**: -40%

## Company Background

**Industry**: Fashion Retail (Online)
**Size**: 5 employees
**Location**: Jakarta, Indonesia
**Annual Revenue (Before)**: Rp 500 juta
**Channels**: Instagram, WhatsApp, Marketplace

### Initial Challenges:

1. **Limited Resources**
   - Small team overwhelmed
   - 16-hour workday
   - No time for growth activities

2. **Customer Service Issues**
   - Average response time: 4-6 hours
   - Inconsistent information
   - Lost sales due to slow response
   - Customer complaints increasing

3. **Scalability Problems**
   - Can't handle peak periods
   - Manual order processing
   - Inventory tracking issues
   - Payment reconciliation errors

## The Journey

### Month 1-2: Assessment & Planning

**Discovery Phase:**
- Analyzed 3 months of customer interactions
- Identified top 20 queries (covered 80% of all questions)
- Mapped customer journey
- Evaluated available solutions

**Key Insights:**
- 60% queries were product information
- 25% were order status
- 10% were payment related
- 5% were complex issues

**Solution Design:**
- AI chatbot for common queries
- WhatsApp Business API integration
- Instagram automation
- Human handoff for complex issues

### Month 3-4: Implementation

**Phase 1: WhatsApp Bot**

Setup includes:
- Product catalog integration
- Order tracking automation
- Payment confirmation
- FAQ responses

**Initial Results:**
- 70% queries automated
- Response time: 30 seconds
- Customer feedback: 4.2/5

**Phase 2: Instagram Integration**

Features:
- DM auto-response
- Story engagement
- Product recommendations
- Appointment booking

**Impact:**
- Instagram engagement +180%
- Story conversion +45%
- New followers +120%

### Month 5-6: Optimization

**AI Training:**
- Added local language (Bahasa Indonesia)
- Included slang and abbreviations
- Personalized responses
- Context understanding

**Process Improvements:**
- Automated order confirmation
- Payment gateway integration
- Inventory sync
- Analytics dashboard

## Detailed Results Analysis

### Revenue Metrics

**Before AI Implementation:**
- Monthly Revenue: Rp 42 juta
- Orders per Month: 180
- Average Order Value: Rp 235,000
- Conversion Rate: 2.5%

**After AI Implementation:**
- Monthly Revenue: Rp 126 juta (+200%)
- Orders per Month: 625 (+247%)
- Average Order Value: Rp 202,000
- Conversion Rate: 8.5% (+240%)

### Operational Efficiency

**Response Time:**
- Before: 4-6 hours
- After: 30 seconds (AI), 15 minutes (human)
- Improvement: 85% faster

**Team Productivity:**
- Before: 180 orders/month/person
- After: 625 orders/month/person
- Improvement: 247% increase

**Customer Service Hours:**
- Before: 16 hours/day
- After: 24 hours/day (AI) + 8 hours (human oversight)
- Coverage: 24/7

### Customer Experience

**Satisfaction Score:**
- Before: 3.2/5
- After: 4.8/5
- Improvement: +50%

**Common Feedback Before:**
- "Slow response"
- "Difficult to get information"
- "Unclear order status"

**Common Feedback After:**
- "Quick response"
- "Easy to order"
- "Great experience"
- "Very helpful"

## Key Success Factors

### 1. Right Technology Choice

**Why ResponPintar:**
- Easy to implement
- Bahasa Indonesia support
- WhatsApp integration
- Affordable pricing
- Good customer support

### 2. Proper Training

**Data Preparation:**
- 6 months of chat history
- Product information
- Common scenarios
- Edge cases

**Continuous Improvement:**
- Weekly model updates
- New product additions
- Seasonal adjustments
- Customer feedback integration

### 3. Human-AI Collaboration

**Hybrid Model:**
- AI handles 85% queries
- Human for complex issues
- Seamless handoff
- Context preservation

**Team Role Evolution:**
- From reactive CS to proactive engagement
- Focus on customer relationships
- Strategic planning
- Business development

### 4. Multi-Channel Strategy

**Integrated Approach:**
- WhatsApp primary channel
- Instagram for discovery
- Marketplace for reach
- Website for brand building

**Consistent Experience:**
- Same information across channels
- Unified customer data
- Coordinated campaigns
- Centralized analytics

## Lessons Learned

### What Worked Well

1. **Start with Main Pain Points**
   - Focus on high-impact areas
   - Quick wins build momentum
   - Demonstrate value early

2. **Involve Team Early**
   - Get buy-in
   - Address concerns
   - Train properly
   - Celebrate success

3. **Iterate Quickly**
   - Launch MVP fast
   - Gather feedback
   - Improve continuously
   - Don't wait for perfect

### Challenges Overcome

1. **Initial Skepticism**
   - **Challenge**: Team doubted AI capability
   - **Solution**: Pilot with limited scope, show results
   - **Outcome**: Team became advocates

2. **Customer Adaptation**
   - **Challenge**: Some customers preferred human chat
   - **Solution**: Clear option to speak with human
   - **Outcome**: 95% happy with AI

3. **Technical Issues**
   - **Challenge**: Integration complexities
   - **Solution**: Expert support from ResponPintar
   - **Outcome**: Smooth implementation

## ROI Analysis

### Investment

**Initial Cost:**
- Platform setup: Rp 2 juta
- Training: Rp 1 juta
- Integration: Rp 1.5 juta
**Total**: Rp 4.5 juta

**Monthly Cost:**
- Platform subscription: Rp 500,000
- Maintenance: Rp 200,000
**Total**: Rp 700,000/month

### Returns

**Revenue Increase:**
- Additional monthly revenue: Rp 84 juta
- Annual additional revenue: Rp 1 miliar

**Cost Savings:**
- Reduced CS staff need: Rp 5 juta/month
- Operational efficiency: Rp 3 juta/month
**Total savings**: Rp 8 juta/month

**ROI Calculation:**
- Monthly net benefit: Rp 91.3 juta
- Payback period: < 1 month
- Annual ROI: 2,024%

## Scaling Plans

### Next 6 Months

1. **Geographic Expansion**
   - Target 3 new cities
   - Local partnerships
   - Regional distribution

2. **Product Line Extension**
   - Add accessories
   - Expand size range
   - Seasonal collections

3. **Technology Enhancement**
   - Visual AI for styling
   - AR try-on
   - Personalized recommendations

### Long-term Vision

**Year 2:**
- Revenue target: Rp 5 miliar
- Team expansion to 20
- Own physical store
- Private label launch

**Year 3:**
- Franchise model
- Regional presence
- Export capability
- Industry leadership

## Recommendations for Other UMKMs

### 1. Start Now

Don't wait for:
- Perfect timing
- More resources
- Complete knowledge
- Competitor movement

### 2. Choose Right Partner

Look for:
- Local language support
- Proven track record
- Good customer service
- Affordable pricing
- Scalability

### 3. Focus on Customer

Remember:
- Technology serves customers
- Maintain personal touch
- Listen to feedback
- Continuously improve

### 4. Measure Everything

Track:
- Key metrics
- Customer satisfaction
- ROI
- Team performance

## Conclusion

AI-powered customer service bukan hanya untuk perusahaan besar. UMKM dapat achieve significant benefits dengan implementation yang tepat. Kunci sukses:

1. **Clear objectives**
2. **Right technology**
3. **Proper training**
4. **Continuous improvement**
5. **Customer focus**

Transformasi digital is journey, not destination. Start small, learn fast, scale smart.

### Referensi:
- Company Internal Data (2024-2025)
- McKinsey: "SME Digital Transformation" (2024)
- World Bank: "Indonesia UMKM Report" (2024)
    `},{slug:"pentingnya-data-analytics-dalam-customer-service",title:"Pentingnya Data Analytics dalam Customer Service",excerpt:"Analisis data yang tepat dapat membantu bisnis memahami pelanggan dengan lebih baik dan membuat keputusan yang lebih informed. Simak panduan lengkapnya.",category:"Data Analytics",date:"3 Mar 2025",image:"/images/blog/business-efficiency.jpg",readTime:"8 menit",author:{name:"Ahmad Rizki",avatar:"AR"},content:`
# Pentingnya Data Analytics dalam Customer Service

Data is the new oil. Dalam konteks customer service, data analytics enables businesses to transform raw customer interaction data into actionable insights. Research dari MIT Sloan menunjukkan data-driven companies are 23x more likely to acquire customers.

## Understanding Customer Service Analytics

### What is Customer Service Analytics?

Process of:
- Collecting customer interaction data
- Analyzing patterns and trends
- Extracting actionable insights
- Making data-driven decisions

### Types of Data

**Quantitative Data:**
- Response times
- Resolution rates
- Customer satisfaction scores
- Volume metrics
- Cost per contact

**Qualitative Data:**
- Customer feedback
- Conversation transcripts
- Social media mentions
- Survey comments
- Support tickets

## Key Metrics to Track

### 1. Customer Satisfaction (CSAT)

**Definition:*Measures satisfaction with specific interaction

**Calculation:**
\`\`\`
CSAT = (Number of Satisfied Customers / Total Responses) × 100
\`\`\`

**Best Practices:**
- Survey immediately after interaction
- Use simple 1-5 scale
- Ask specific questions
- Follow up on low scores

**Benchmark:*80%+ satisfaction

### 2. Net Promoter Score (NPS)

**Definition:*Measures customer loyalty and likelihood to recommend

**Calculation:**
\`\`\`
NPS = % Promoters (9-10) - % Detractors (0-6)
\`\`\`

**Interpretation:**
- >50: Excellent
- 30-50: Good
- 0-30: Needs improvement
- <0: Critical issues

**Action Items:**
- Contact detractors
- Understand promoters
- Close feedback loop
- Track trends

### 3. Customer Effort Score (CES)

**Definition:*Measures ease of getting issue resolved

**Question:*"How easy was it to resolve your issue?"

**Scale:*1 (Very Difficult) to 5 (Very Easy)

**Why Important:**
- 96% high-effort customers become disloyal
- Low effort = high retention
- Correlates with purchase behavior

### 4. First Contact Resolution (FCR)

**Definition:*% of issues resolved in first interaction

**Calculation:**
\`\`\`
FCR = (Issues Resolved First Contact / Total Issues) × 100
\`\`\`

**Impact:**
- 1% FCR increase = 1% CSAT increase
- Reduces cost per contact
- Improves efficiency

**Target:*70-75%

### 5. Average Handle Time (AHT)

**Components:**
- Talk time
- Hold time
- After-call work

**Calculation:**
\`\`\`
AHT = (Total Handle Time) / (Number of Contacts)
\`\`\`

**Caution:**
- Balance speed with quality
- Don't rush customers
- Focus on resolution

## Advanced Analytics Techniques

### 1. Sentiment Analysis

**Purpose:*Understand customer emotions

**Technology:**
- Natural Language Processing
- Machine Learning models
- Emotion detection algorithms

**Application:**
- Real-time alerts for negative sentiment
- Trend analysis
- Product feedback
- Brand health monitoring

**Example Insights:**
- 60% positive mentions for Product A
- Increasing frustration about checkout
- High satisfaction with delivery

### 2. Predictive Analytics

**Use Cases:**

**Churn Prediction:**
- Identify at-risk customers
- Proactive retention
- Targeted offers

**Demand Forecasting:**
- Predict support volume
- Optimize staffing
- Resource planning

**Issue Prevention:**
- Predict technical problems
- Proactive notifications
- Preventive maintenance

### 3. Text Analytics

**Capabilities:**
- Topic extraction
- Keyword analysis
- Pattern recognition
- Trend identification

**Benefits:**
- Understand common issues
- Identify knowledge gaps
- Improve self-service
- Optimize training

### 4. Customer Journey Analytics

**Tracks:**
- Touchpoint interactions
- Channel preferences
- Pain points
- Drop-off points

**Insights:**
- Optimize customer journey
- Remove friction
- Improve conversion
- Enhance experience

## Implementation Framework

### Phase 1: Data Collection

**Sources:**
- CRM system
- Chat transcripts
- Call recordings
- Email threads
- Social media
- Surveys
- Website analytics

**Best Practices:**
- Ensure data quality
- Maintain consistency
- Protect privacy
- Enable real-time collection

### Phase 2: Data Integration

**Challenges:**
- Data silos
- Format inconsistencies
- Volume management
- Real-time processing

**Solutions:**
- Data warehouse
- ETL processes
- API integrations
- Cloud infrastructure

### Phase 3: Analysis

**Tools:**
- Business Intelligence platforms
- Statistical software
- Machine learning tools
- Visualization tools

**Techniques:**
- Descriptive analytics (what happened)
- Diagnostic analytics (why it happened)
- Predictive analytics (what will happen)
- Prescriptive analytics (what to do)

### Phase 4: Visualization

**Dashboard Components:**
- Real-time metrics
- Trend charts
- Comparison views
- Drill-down capability
- Alert notifications

**Best Practices:**
- Keep it simple
- Focus on actionable metrics
- Use appropriate charts
- Enable interactivity
- Mobile-friendly

### Phase 5: Action

**Decision Making:**
- Data-driven insights
- A/B testing
- Continuous optimization
- Feedback loops

**Implementation:**
- Prioritize actions
- Measure impact
- Iterate quickly
- Scale successes

## Common Use Cases

### 1. Optimizing Response Times

**Analysis:**
- Peak hours identification
- Channel performance
- Agent productivity
- Queue management

**Actions:**
- Adjust staffing
- Implement AI chatbots
- Optimize workflows
- Set realistic SLAs

### 2. Improving Resolution Rates

**Analysis:**
- Common issues
- Resolution patterns
- Agent performance
- Knowledge gaps

**Actions:**
- Update knowledge base
- Agent training
- Process improvements
- Tool enhancements

### 3. Reducing Customer Churn

**Analysis:**
- Churn indicators
- Customer lifecycle
- Interaction patterns
- Satisfaction trends

**Actions:**
- Proactive outreach
- Targeted offers
- Experience improvements
- Win-back campaigns

### 4. Personalizing Experience

**Analysis:**
- Customer preferences
- Behavior patterns
- Purchase history
- Interaction history

**Actions:**
- Personalized recommendations
- Customized communication
- Tailored offers
- Channel optimization

## Tools and Technologies

### Analytics Platforms

**Enterprise:**
- Tableau
- Power BI
- Qlik
- Looker

**Specialized:**
- Zendesk Analytics
- Salesforce Einstein
- Freshdesk Analytics
- ResponPintar Analytics

### Machine Learning Tools

**Frameworks:**
- TensorFlow
- PyTorch
- Scikit-learn
- XGBoost

**Cloud Services:**
- AWS SageMaker
- Google Cloud AI
- Azure ML
- IBM Watson

## Best Practices

### 1. Start with Clear Objectives

Define:
- What questions to answer
- Which metrics matter
- Success criteria
- Timeline

### 2. Ensure Data Quality

Requirements:
- Accuracy
- Completeness
- Consistency
- Timeliness

### 3. Make it Actionable

Focus on:
- Metrics that drive decisions
- Clear visualizations
- Regular reporting
- Stakeholder alignment

### 4. Protect Privacy

Compliance:
- GDPR
- Data protection laws
- Customer consent
- Secure storage
- Access controls

### 5. Foster Data Culture

Encourage:
- Data literacy
- Evidence-based decisions
- Experimentation
- Continuous learning

## Measuring ROI

### Cost Components

**Technology:**
- Analytics platform
- Storage
- Integration
- Maintenance

**People:**
- Data analysts
- Training
- Change management

### Benefits

**Direct:**
- Cost reduction
- Revenue increase
- Efficiency gains

**Indirect:**
- Better decisions
- Customer retention
- Brand reputation
- Competitive advantage

**ROI Calculation:**
\`\`\`
ROI = (Benefit - Cost) / Cost × 100
\`\`\`

## Future Trends

### Emerging Technologies

**AI/ML Advances:**
- Automated insights
- Anomaly detection
- Predictive models
- Natural language queries

**Real-time Analytics:**
- Stream processing
- Instant dashboards
- Automated alerts
- Dynamic optimization

**Advanced Visualization:**
- AR/VR dashboards
- Interactive reports
- Predictive interfaces
- Voice-activated analytics

## Conclusion

Data analytics is no longer optional in customer service. It's essential for:
- Understanding customers
- Improving operations
- Driving decisions
- Maintaining competitiveness

Key takeaways:
1. Start with clear objectives
2. Collect quality data
3. Use appropriate tools
4. Make it actionable
5. Measure and optimize

Success requires combination of:
- Right technology
- Skilled people
- Data-driven culture
- Continuous improvement

### Referensi:
- MIT Sloan: "Data-Driven Decision Making" (2024)
- Harvard Business Review: "Analytics in Service" (2024)
- Gartner: "Customer Analytics Trends" (2025)
    `},{slug:"membangun-chatbot-yang-efektif-untuk-bisnis",title:"Membangun Chatbot yang Efektif untuk Bisnis",excerpt:"Panduan lengkap untuk merancang dan mengimplementasikan chatbot yang benar-benar memberikan nilai bagi bisnis dan pelanggan Anda.",category:"Tutorial",date:"1 Mar 2025",image:"/images/blog/chatbot-whatsapp.jpg",readTime:"12 menit",author:{name:"Budi Santoso",avatar:"BS"},content:`
# Membangun Chatbot yang Efektif untuk Bisnis

Chatbot yang dirancang dengan baik can handle 80% of routine customer inquiries, according to IBM. Namun, implementasi yang buruk dapat frustrate customers dan harm brand reputation. Guide ini provides comprehensive framework untuk building effective chatbot.

## Understanding Chatbot Fundamentals

### Types of Chatbots

**1. Rule-Based Chatbots**
- Follows predefined rules
- Decision tree logic
- Limited flexibility
- Easy to implement
- Predictable responses

**Use Cases:**
- Simple FAQs
- Form filling
- Basic navigation
- Appointment booking

**2. AI-Powered Chatbots**
- Natural language understanding
- Context awareness
- Learning capability
- Complex conversations
- Personalized responses

**Use Cases:**
- Complex inquiries
- Product recommendations
- Technical support
- Sales assistance

**3. Hybrid Chatbots**
- Combines rule-based and AI
- Best of both worlds
- Fallback mechanisms
- Scalable approach

**Recommended for:*Most businesses

### Key Components

**Natural Language Processing (NLP):**
- Intent recognition
- Entity extraction
- Sentiment analysis
- Language detection

**Dialog Management:**
- Conversation flow
- Context tracking
- State management
- Error handling

**Integration Layer:**
- CRM connection
- Database access
- API calls
- Third-party services

**Analytics:**
- Usage tracking
- Performance metrics
- User feedback
- Optimization insights

## Planning Phase

### 1. Define Objectives

**Business Goals:**
- Cost reduction target: 40%
- Response time goal: <30 seconds
- Resolution rate: 70%+
- Customer satisfaction: 4.5+/5

**Use Cases:**
- Which questions to automate
- Customer journey touchpoints
- Channel priorities
- Success criteria

### 2. Analyze Customer Interactions

**Data Collection:**
- Review 3-6 months of interactions
- Identify top 20 queries
- Map conversation patterns
- Note pain points

**Analysis:**
- Query frequency
- Complexity levels
- Resolution times
- Common obstacles

**Example Output:**
\`\`\`
Top Queries:
1. Order status (35%)
2. Product info (20%)
3. Returns policy (15%)
4. Payment methods (10%)
5. Store locations (8%)
Others (12%)
\`\`\`

### 3. Design Conversation Flows

**Best Practices:**

**Keep it Simple:**
- Clear options
- Short messages
- Logical progression
- Easy navigation

**Be Natural:**
- Conversational tone
- Avoid jargon
- Use customer language
- Inject personality

**Plan for Errors:**
- Misunderstanding responses
- Fallback options
- Human handoff triggers
- Recovery paths

**Example Flow:**
\`\`\`
User: "Where's my order?"
Bot: "I'd be happy to help track your order! Could you provide your order number? It should be in your confirmation email."
User: "ORDER123"
Bot: "Thanks! Let me check... Your order #ORDER123 is out for delivery and should arrive today by 5 PM. Need anything else?"
\`\`\`

## Development Phase

### 1. Choose Platform

**Considerations:**

**Technical:**
- NLP capabilities
- Integration options
- Scalability
- Customization

**Business:**
- Pricing model
- Support quality
- Training required
- Time to deploy

**Popular Options:**
- ResponPintar (Indonesia-focused)
- Dialogflow (Google)
- Microsoft Bot Framework
- IBM Watson

### 2. Build Knowledge Base

**Content Sources:**
- FAQ documents
- Product catalogs
- Policy documents
- Support tickets
- Website content

**Organization:**
- Categories
- Tags
- Search optimization
- Version control

**Maintenance:**
- Regular updates
- New product additions
- Policy changes
- Seasonal adjustments

### 3. Train NLP Model

**Training Data:**
- Real customer queries
- Variations and synonyms
- Contextual examples
- Edge cases

**Intent Creation:**
\`\`\`
Intent: track_order
Examples:
- "Where is my order?"
- "Track my package"
- "Order status check"
- "When will it arrive?"
- "Has my order shipped?"
\`\`\`

**Entity Definition:**
\`\`\`
Entity: order_number
Pattern: ORDER[0-9]{3,6}
Examples:
- "ORDER123"
- "ORDER456789"
\`\`\`

### 4. Implement Integrations

**Essential Integrations:**

**CRM System:**
- Customer data access
- History retrieval
- Contact updates

**Order Management:**
- Status checking
- Tracking info
- Cancellation processing

**Payment Gateway:**
- Transaction verification
- Refund processing
- Payment methods

**Knowledge Base:**
- Article retrieval
- Search functionality
- Content updates

## Testing Phase

### 1. Functional Testing

**Test Cases:**
- Happy path scenarios
- Edge cases
- Error conditions
- Integration points

**Checklist:**
- ✓ Intent recognition accuracy
- ✓ Entity extraction
- ✓ Response relevance
- ✓ Context handling
- ✓ Integration functionality
- ✓ Error recovery

### 2. User Acceptance Testing

**Participants:**
- Customer service team
- Beta customers
- Stakeholders
- Technical team

**Feedback Areas:**
- Ease of use
- Response quality
- Navigation clarity
- Missing features

### 3. Performance Testing

**Metrics:**
- Response latency
- Concurrent users
- System stability
- Error rates

**Load Testing:**
- Simulate peak traffic
- Stress testing
- Failover scenarios
- Recovery time

## Launch Phase

### 1. Soft Launch

**Strategy:**
- Limited audience
- Single channel
- Monitored closely
- Quick iterations

**Duration:*2-4 weeks

**Goals:**
- Validate functionality
- Gather real feedback
- Fine-tune responses
- Build confidence

### 2. Gradual Rollout

**Phase 1:*10% of traffic
**Phase 2:** 25% of traffic
**Phase 3:** 50% of traffic
**Phase 4:** 100% of traffic

**Monitoring:**
- Success metrics
- Error rates
- User satisfaction
- System performance

### 3. Full Launch

**Communication:**
- Announce to customers
- Train support team
- Update documentation
- Marketing campaign

**Support:**
- 24/7 monitoring
- Escalation procedures
- Rapid response team
- Feedback channels

## Optimization Phase

### 1. Monitor Performance

**Daily Metrics:**
- Conversation volume
- Resolution rate
- Response accuracy
- User satisfaction

**Weekly Analysis:**
- Trend identification
- Issue patterns
- Optimization opportunities
- Feature requests

**Monthly Review:**
- Goal achievement
- ROI calculation
- Strategic adjustments
- Roadmap updates

### 2. Continuous Improvement

**Model Retraining:**
- New queries analysis
- Failed interactions review
- Intent refinement
- Entity updates

**Frequency:** Weekly or bi-weekly

**Content Updates:**
- New FAQs
- Policy changes
- Product updates
- Seasonal adjustments

### 3. A/B Testing

**Test Variables:**
- Greeting messages
- Response phrasing
- Button labels
- Conversation flows

**Methodology:**
- Define hypothesis
- Split traffic 50/50
- Run for 2+ weeks
- Analyze results
- Implement winner

## Advanced Features

### 1. Personalization

**Data Utilization:**
- Customer name
- Purchase history
- Preferences
- Location
- Previous interactions

**Implementation:**
\`\`\`
"Welcome back, Sarah! I see you recently ordered the Blue Dress. Need help with that or looking for something new?"
\`\`\`

### 2. Proactive Engagement

**Triggers:**
- Time on page
- Cart abandonment
- Scroll depth
- Exit intent

**Examples:**
- "Looks like you're interested in our Summer Collection. Can I help you find the perfect item?"
- "Need help completing your order?"

### 3. Multilingual Support

**Implementation:**
- Language detection
- Translation engine
- Culturally appropriate responses
- Local content

**Benefits:**
- Wider reach
- Better experience
- Competitive advantage

### 4. Voice Integration

**Capabilities:**
- Voice input
- Speech synthesis
- Natural conversations
- Accessibility

**Use Cases:**
- Phone support
- Smart speakers
- Hands-free scenarios
- Visually impaired users

## Common Pitfalls to Avoid

### 1. Over-Promising

**Don't:**
- Claim human-level understanding
- Hide that it's a bot
- Promise what it can't deliver

**Do:**
- Be transparent
- Set clear expectations
- Provide easy opt-out

### 2. Poor Handoff

**Problems:**
- Lost context
- Information repetition
- Frustrated customers

**Solution:**
- Seamless transfer
- Context preservation
- Human notification
- Follow-up tracking

### 3. Neglecting Maintenance

**Consequences:**
- Outdated information
- Declining accuracy
- Increasing errors
- User frustration

**Prevention:**
- Regular updates
- Monitoring alerts
- Scheduled reviews
- Version control

### 4. Ignoring Feedback

**Impact:**
- Missed improvements
- Persistent issues
- Lost opportunities

**Solution:**
- Feedback collection
- Analysis process
- Action planning
- Communication loop

## Measuring Success

### Key Metrics

**Operational:**
- Automation rate: 80%+
- Average resolution time: <2 min
- Conversations handled: Track growth
- Cost per conversation: Reduce 40%

**Quality:**
- CSAT score: 4.5+/5
- Task completion rate: 85%+
- Containment rate: 75%+
- NPS impact: Positive

**Business:**
- Cost savings: Calculate ROI
- Revenue impact: Track conversions
- Efficiency gains: Measure time saved
- Competitive advantage: Market position

## Conclusion

Effective chatbot requires:
1. **Clear objectives**
2. **Solid planning**
3. **Quality implementation**
4. **Continuous optimization**
5. **User focus**

Success factors:
- Understanding customer needs
- Appropriate technology choice
- Comprehensive testing
- Ongoing maintenance
- Data-driven improvements

Start small, iterate fast, scale smart. Remember: chatbot should augment human service, not replace personal touch where it matters.

### Referensi:
- IBM: "Chatbot Development Best Practices" (2024)
- Gartner: "Conversational AI" (2025)
- MIT: "Human-AI Interaction" (2024)
    `},{slug:"strategi-customer-retention-dengan-ai",title:"Strategi Customer Retention dengan AI",excerpt:"Mempertahankan pelanggan lebih penting dari akuisisi. Pelajari bagaimana AI dapat membantu meningkatkan customer retention rate hingga 50%.",category:"Insight",date:"28 Feb 2025",image:"/images/blog/customer-experience.jpg",readTime:"9 menit",author:{name:"Lisa Permata",avatar:"LP"},content:`
# Strategi Customer Retention dengan AI

According to Bain & Company, increasing customer retention by 5% can increase profits by 25-95%. AI provides powerful tools untuk implement effective retention strategies at scale.

## Understanding Customer Retention

### Why Retention Matters

**Economics:**
- 5-25x cheaper than acquisition
- Existing customers spend 67% more
- Higher lifetime value
- Lower marketing cost

**Business Impact:**
- Predictable revenue
- Positive word-of-mouth
- Market advantage
- Sustainable growth

### Retention Metrics

**Customer Retention Rate (CRR):**
\`\`\`
CRR = ((E-N)/S) × 100

E = customers at end of period
N = new customers during period
S = customers at start of period
\`\`\`

**Target:** 85%+ annually

**Customer Lifetime Value (CLV):**
\`\`\`
CLV = (Average Purchase Value × Purchase Frequency × Customer Lifespan)
\`\`\`

**Churn Rate:**
\`\`\`
Churn = (Lost Customers / Total Customers) × 100
\`\`\`

**Target:** <5% monthly

## AI-Powered Retention Strategies

### 1. Predictive Churn Prevention

**How It Works:**

**Data Collection:**
- Usage patterns
- Engagement metrics
- Support interactions
- Payment history
- Feature adoption

**ML Model:**
- Identifies churn indicators
- Calculates risk scores
- Predicts timing
- Recommends actions

**Implementation:**
\`\`\`
High-Risk Indicators:
- Decreased login frequency
- Declining feature usage
- Support ticket increase
- Payment delays
- Negative feedback
\`\`\`

**Intervention:**
- Automated outreach
- Personalized offers
- Proactive support
- Success manager assignment

**Results:**
- 40-60% churn reduction
- Early problem identification
- Targeted resource allocation
- ROI: 10-15x

### 2. Personalized Engagement

**Segmentation:**

**Behavioral:**
- Power users
- Regular users
- At-risk users
- Dormant users

**Value-Based:**
- High-value customers
- Growing accounts
- Standard customers
- Trial users

**AI Application:**
- Dynamic segmentation
- Micro-targeting
- Personalized content
- Optimal timing

**Tactics:**

**For Power Users:**
- Advanced features
- Beta access
- Community leadership
- Exclusive events

**For At-Risk:**
- Check-in calls
- Usage tips
- Special offers
- Win-back campaigns

**Impact:**
- 35% engagement increase
- 28% retention improvement
- Higher satisfaction
- Better relationships

### 3. Proactive Support

**Prediction:**
- Identify potential issues
- Forecast problems
- Anticipate needs
- Plan interventions

**Examples:**

**Technical Issues:**
- "We noticed your integration stopped. Let me help fix it."
- Automated diagnostics
- Proactive resolution

**Usage Optimization:**
- "You're not using Feature X which could save you 2 hours/week."
- Guided walkthroughs
- Best practices

**Renewal Management:**
- "Your subscription renews in 30 days. Let's review your usage."
- Value demonstration
- Plan optimization

**Benefits:**
- 45% fewer support tickets
- 50% faster resolution
- Higher satisfaction
- Stronger relationships

### 4. Loyalty Programs

**AI Enhancement:**

**Personalized Rewards:**
- Individual preferences
- Behavioral triggers
- Value optimization
- Surprise & delight

**Dynamic Tiers:**
- Automated progression
- Custom benefits
- Gamification
- Social proof

**Predictive Offers:**
- Right reward
- Right time
- Right channel
- Maximum impact

**Implementation:**
\`\`\`
Example Program:
- Bronze: Basic support, 5% discount
- Silver: Priority support, 10% discount, early access
- Gold: Dedicated manager, 15% discount, custom features
- Platinum: White-glove service, 20% discount, roadmap input
\`\`\`

**Results:**
- 30% increase in repeat purchases
- 25% higher customer value
- 40% more referrals
- Stronger brand loyalty

### 5. Customer Success Automation

**AI-Driven Success:**

**Onboarding:**
- Personalized journey
- Progress tracking
- Automated nudges
- Success metrics

**Adoption:**
- Feature recommendations
- Usage optimization
- Best practices
- Training content

**Expansion:**
- Upsell opportunities
- Cross-sell recommendations
- Upgrade timing
- Value demonstration

**Health Scoring:**
\`\`\`
Health Score Components:
- Product usage (40%)
- Feature adoption (25%)
- Support satisfaction (20%)
- Payment history (10%)
- Engagement level (5%)

Actions by Score:
- Green (80-100): Expansion focus
- Yellow (60-79): Engagement boost
- Red (<60): Retention intervention
\`\`\`

## Implementation Framework

### Phase 1: Foundation (Month 1-2)

**Data Setup:**
- Integrate data sources
- Define metrics
- Build dashboard
- Set benchmarks

**Model Training:**
- Historical data
- Churn indicators
- Success patterns
- Initial predictions

### Phase 2: Pilot (Month 3-4)

**Limited Scope:**
- High-value segment
- Single use case
- Closely monitored
- Quick iterations

**Learning:**
- Model accuracy
- Intervention effectiveness
- Resource requirements
- ROI validation

### Phase 3: Scale (Month 5-6)

**Expansion:**
- All segments
- Multiple strategies
- Channel integration
- Team enablement

**Optimization:**
- Model refinement
- Process improvement
- Automation increase
- Cost optimization

### Phase 4: Maturity (Ongoing)

**Advanced Features:**
- Predictive analytics
- Prescriptive recommendations
- Automated workflows
- AI-driven decisions

## Technology Stack

### Core Components

**Customer Data Platform:**
- Segment
- mParticle
- Tealium

**Analytics:**
- Amplitude
- Mixpanel
- Heap

**ML Platform:**
- Google Cloud AI
- AWS SageMaker
- Azure ML

**Engagement:**
- Braze
- Iterable
- Customer.io

**AI Chatbot:**
- ResponPintar
- Intercom
- Drift

## Best Practices

### 1. Data Quality

**Requirements:**
- Completeness
- Accuracy
- Timeliness
- Consistency

**Processes:**
- Validation rules
- Regular audits
- Cleaning procedures
- Governance policies

### 2. Privacy & Ethics

**Considerations:**
- Transparent data usage
- Customer consent
- Opt-out options
- Regulatory compliance

**Implementation:**
- Privacy by design
- Data minimization
- Secure storage
- Access controls

### 3. Human Touch

**Balance:**
- Automate routine
- Personalize important
- Human for complex
- Escalation paths

**Guidelines:**
- Critical moments need humans
- Emotional issues need empathy
- High-value needs attention
- Automation supports, not replaces

### 4. Continuous Improvement

**Cycle:**
1. Measure results
2. Analyze performance
3. Identify opportunities
4. Implement changes
5. Validate impact
6. Repeat

**Frequency:**
- Daily monitoring
- Weekly reviews
- Monthly optimization
- Quarterly strategy

## Measuring Success

### Key Metrics

**Retention:**
- Retention rate
- Churn rate
- Customer lifespan
- Cohort analysis

**Engagement:**
- Active users
- Feature adoption
- Session frequency
- Time in product

**Financial:**
- Customer lifetime value
- Revenue per customer
- Gross retention rate
- Net retention rate

**Satisfaction:**
- NPS
- CSAT
- Customer effort score
- Referral rate

### ROI Calculation

**Costs:**
- Technology: $X/month
- Resources: $Y/month
- Implementation: $Z one-time

**Benefits:**
- Reduced churn: $A/month
- Increased upsells: $B/month
- Lower support costs: $C/month
- Referral revenue: $D/month

**ROI:**
\`\`\`
Monthly ROI = ((A+B+C+D) - (X+Y)) / (X+Y) × 100
\`\`\`

**Typical Results:**
- First year ROI: 200-300%
- Steady state ROI: 500-800%
- Payback period: 3-6 months

## Case Studies

### SaaS Company

**Challenge:**
- 15% monthly churn
- Low engagement
- Expensive acquisition

**Solution:**
- Predictive churn model
- Automated interventions
- Customer success program

**Results:**
- Churn reduced to 5%
- 40% higher engagement
- 3x lifetime value
- ROI: 650%

### E-Commerce

**Challenge:**
- One-time buyers
- Low repeat rate
- High acquisition cost

**Solution:**
- Personalization engine
- Loyalty program
- Proactive recommendations

**Results:**
- 45% repeat purchase increase
- 35% higher average order
- 60% more referrals
- ROI: 420%

## Future Trends

### Emerging Technologies

**Hyper-Personalization:**
- Individual AI models
- Real-time adaptation
- Contextual experiences
- Predictive engagement

**Autonomous Success:**
- Self-optimizing systems
- Automated decision-making
- Minimal human intervention
- Continuous learning

**Emotional AI:**
- Sentiment detection
- Empathy modeling
- Emotional intelligence
- Relationship building

## Conclusion

AI-powered retention strategies provide:
- Proactive churn prevention
- Personalized experiences
- Operational efficiency
- Measurable results
- Competitive advantage

Success requires:
1. Quality data
2. Right technology
3. Clear strategy
4. Continuous optimization
5. Customer focus

Remember: technology enables, but relationships matter. Use AI to scale personal touch, not replace it.

### Referensi:
- Bain & Company: "Customer Retention Economics" (2024)
- Harvard Business Review: "The Value of Keeping Customers" (2024)
- McKinsey: "AI in Customer Retention" (2025)
    `},{slug:"mengintegrasikan-ai-dengan-crm-untuk-hasil-maksimal",title:"Mengintegrasikan AI dengan CRM untuk Hasil Maksimal",excerpt:"Kombinasi AI dan CRM dapat menghasilkan insights yang powerful untuk meningkatkan customer relationship management. Panduan praktis implementasinya.",category:"Tutorial",date:"26 Feb 2025",image:"/images/blog/ai-automation.jpg",readTime:"11 menit",author:{name:"Dr. Sarah Wijaya",avatar:"SW"},content:`
# Mengintegrasikan AI dengan CRM untuk Hasil Maksimal

Integration of AI with CRM systems represents the future of customer relationship management. According to Salesforce Research, AI-integrated CRMs can increase sales productivity by 30% and customer satisfaction by 35%.

## Understanding AI-CRM Integration

### What is AI-CRM Integration?

**Definition:**
Process of connecting AI capabilities with CRM systems untuk:
- Automate tasks
- Generate insights
- Predict behaviors
- Personalize interactions
- Optimize workflows

### Benefits

**For Sales:**
- Lead scoring
- Opportunity prediction
- Pipeline optimization
- Deal acceleration
- Forecast accuracy

**For Marketing:**
- Audience segmentation
- Campaign optimization
- Content personalization
- Channel selection
- ROI improvement

**For Service:**
- Case routing
- Response automation
- Issue prediction
- Customer satisfaction
- Retention improvement

**For Management:**
- Data-driven decisions
- Performance insights
- Resource optimization
- Strategic planning
- Competitive advantage

## Core AI Capabilities in CRM

### 1. Predictive Lead Scoring

**Traditional Approach:**
- Manual scoring
- Simple rules
- Limited factors
- Subjective judgment

**AI Approach:**
- Machine learning models
- Multiple data points
- Continuous learning
- Objective scoring

**Implementation:**

**Data Points:**
- Demographics
- Firmographics
- Behavioral data
- Engagement history
- Social signals
- Website activity

**Model Training:**
\`\`\`
Historical Data:
- Won deals characteristics
- Lost opportunities patterns
- Timeline analysis
- Success factors

Output:
- Lead score (0-100)
- Conversion probability
- Recommended actions
- Priority level
\`\`\`

**Results:**
- 50% increase in conversion
- 35% reduction in sales cycle
- 40% better resource allocation
- 60% improvement in forecast accuracy

### 2. Intelligent Customer Segmentation

**AI Enhancement:**

**Dynamic Segments:**
- Real-time updates
- Behavioral triggers
- Predictive grouping
- Micro-segmentation

**Multidimensional Analysis:**
- Purchase patterns
- Engagement levels
- Product preferences
- Communication preferences
- Lifetime value
- Churn risk

**Example Segments:**
\`\`\`
High-Value At-Risk:
- CLV > $10,000
- Engagement declining
- Support issues increasing
- Last purchase > 90 days
Action: Retention campaign

Growth Opportunity:
- Current spend moderate
- High engagement
- Expanding usage
- Positive feedback
Action: Upsell/cross-sell

Champions:
- High CLV
- Strong engagement
- Low support needs
- Positive referrals
Action: Advocacy program
\`\`\`

### 3. Automated Data Enrichment

**Capabilities:**

**Contact Information:**
- Email validation
- Phone verification
- Address normalization
- Job title updates
- Company changes

**Company Data:**
- Firmographics
- Technographics
- Funding information
- News mentions
- Social presence

**Behavioral Data:**
- Website visits
- Content engagement
- Email interactions
- Social media activity
- Event participation

**Sources:**
- Public databases
- Social media APIs
- Third-party providers
- Web scraping
- User contributions

**Benefits:**
- 90%+ data accuracy
- Automated updates
- Time savings
- Better personalization
- Improved targeting

### 4. Intelligent Recommendations

**For Sales:**
- Next best action
- Upsell opportunities
- Cross-sell products
- Engagement timing
- Communication channel

**For Marketing:**
- Content recommendations
- Campaign targeting
- Channel selection
- Timing optimization
- Budget allocation

**For Service:**
- Solution suggestions
- Knowledge articles
- Product recommendations
- Escalation triggers
- Follow-up actions

**Implementation:**
\`\`\`
Recommendation Engine:
Input:
- Customer profile
- Current context
- Historical data
- Business rules

Processing:
- Pattern recognition
- Collaborative filtering
- Content analysis
- Success probability

Output:
- Top 3 recommendations
- Confidence scores
- Expected outcomes
- Implementation steps
\`\`\`

### 5. Conversational AI

**Integration Points:**

**Lead Capture:**
- Website chat
- Form filling
- Qualification
- Scheduling

**Customer Service:**
- Issue resolution
- Product information
- Order tracking
- Returns processing

**Sales Assistance:**
- Product recommendations
- Quote generation
- Objection handling
- Demo scheduling

**CRM Synchronization:**
- Automatic logging
- Contact updates
- Activity tracking
- Task creation
- Follow-up reminders

## Integration Architecture

### System Components

**CRM Platform:**
- Salesforce
- HubSpot
- Microsoft Dynamics
- Zoho CRM

**AI Layer:**
- ResponPintar (Chatbot)
- Einstein AI (Salesforce)
- Watson AI (IBM)
- Custom ML models

**Data Platform:**
- Customer Data Platform
- Data warehouse
- Real-time streaming
- Analytics engine

**Integration Layer:**
- APIs
- Webhooks
- ETL processes
- Message queues

### Data Flow

**Inbound:**
\`\`\`
Customer Interaction
    ↓
AI Processing
    ↓
Insight Generation
    ↓
CRM Update
    ↓
Action Triggering
\`\`\`

**Outbound:**
\`\`\`
CRM Event
    ↓
AI Analysis
    ↓
Recommendation
    ↓
User Interface
    ↓
Action Execution
\`\`\`

## Implementation Guide

### Phase 1: Planning (Weeks 1-2)

**Assessment:**
- Current CRM capabilities
- Business objectives
- Data availability
- Technical constraints
- Resource requirements

**Strategy:**
- Priority use cases
- Success metrics
- Implementation timeline
- Budget allocation
- Risk mitigation

### Phase 2: Data Preparation (Weeks 3-4)

**Data Audit:**
- Quality assessment
- Completeness check
- Consistency validation
- Duplication removal

**Data Enhancement:**
- Missing data completion
- Standardization
- Enrichment
- Historical analysis

### Phase 3: AI Model Development (Weeks 5-8)

**Model Selection:**
- Use case requirements
- Data characteristics
- Performance expectations
- Resource constraints

**Training:**
- Historical data
- Feature engineering
- Model training
- Validation testing
- Accuracy tuning

### Phase 4: Integration (Weeks 9-12)

**Technical Integration:**
- API development
- Webhook setup
- Data synchronization
- Error handling

**Testing:**
- Functional testing
- Integration testing
- Performance testing
- User acceptance testing

### Phase 5: Deployment (Weeks 13-14)

**Rollout Strategy:**
- Pilot group
- Gradual expansion
- Full deployment
- Monitoring

**Training:**
- User guides
- Hands-on sessions
- Best practices
- Support resources

### Phase 6: Optimization (Ongoing)

**Monitoring:**
- Performance metrics
- User feedback
- Error rates
- Business impact

**Improvement:**
- Model retraining
- Process refinement
- Feature additions
- Bug fixes

## Use Case Examples

### Sales Automation

**Scenario:** Lead Prioritization

**Without AI:**
- Manual review: 30 min/lead
- Subjective scoring
- Inconsistent follow-up
- Missed opportunities

**With AI:**
- Automatic scoring: Real-time
- Objective evaluation
- Prioritized queue
- Automated routing
- Suggested actions

**Results:**
- 45% more qualified leads contacted
- 30% shorter sales cycle
- 25% higher win rate
- 40% better forecast accuracy

### Marketing Personalization

**Scenario:** Email Campaign Optimization

**Without AI:**
- Generic campaigns
- Manual segmentation
- Basic personalization
- Trial-and-error timing

**With AI:**
- Dynamic segments
- Individual personalization
- Predictive content
- Optimal timing
- A/B testing automation

**Results:**
- 60% higher open rates
- 85% better click-through
- 120% more conversions
- 55% lower unsubscribe rate

### Customer Service

**Scenario:** Case Management

**Without AI:**
- Manual routing
- Reactive support
- Inconsistent quality
- Long resolution times

**With AI:**
- Intelligent routing
- Proactive alerts
- Suggested solutions
- Automated responses
- Escalation prediction

**Results:**
- 70% cases auto-resolved
- 50% faster resolution
- 35% lower costs
- 40% higher satisfaction

## Best Practices

### 1. Start with Clear Objectives

**Define:**
- Specific goals
- Success metrics
- Expected outcomes
- Timeline
- Budget

### 2. Ensure Data Quality

**Requirements:**
- Accurate
- Complete
- Consistent
- Timely
- Relevant

**Processes:**
- Data governance
- Quality monitoring
- Regular audits
- Cleanup procedures

### 3. Prioritize User Adoption

**Strategies:**
- Involve users early
- Provide training
- Show value quickly
- Gather feedback
- Iterate based on input

### 4. Monitor Performance

**Metrics:**
- Technical performance
- Business impact
- User satisfaction
- ROI
- Adoption rates

**Frequency:**
- Real-time monitoring
- Daily checks
- Weekly reviews
- Monthly analysis
- Quarterly strategy

### 5. Maintain Privacy & Compliance

**Considerations:**
- Data protection
- Consent management
- Regulatory compliance
- Security measures
- Audit trails

## Measuring Success

### KPIs

**Efficiency:**
- Time saved per user
- Automation rate
- Process completion time
- Error reduction

**Effectiveness:**
- Conversion improvement
- Revenue impact
- Customer satisfaction
- Retention increase

**Adoption:**
- Active users
- Feature utilization
- User satisfaction
- Training completion

### ROI Calculation

**Costs:**
- Software licenses
- Implementation
- Training
- Maintenance
- Support

**Benefits:**
- Productivity gains
- Revenue increase
- Cost reduction
- Risk mitigation
- Competitive advantage

**Formula:**
\`\`\`
ROI = (Total Benefits - Total Costs) / Total Costs × 100
\`\`\`

**Typical ROI:**
- Year 1: 150-250%
- Year 2: 300-500%
- Year 3+: 500-800%

## Future Trends

### Emerging Capabilities

**Advanced Analytics:**
- Real-time insights
- Predictive analytics
- Prescriptive recommendations
- Autonomous actions

**Natural Interactions:**
- Voice interfaces
- Visual recognition
- Gesture control
- Thought integration

**Hyper-Automation:**
- End-to-end automation
- Self-optimizing systems
- Minimal human intervention
- Continuous improvement

## Conclusion

AI-CRM integration is transformation necessity untuk:
- Competitive advantage
- Operational excellence
- Customer satisfaction
- Revenue growth
- Market leadership

Success requires:
1. Clear strategy
2. Quality data
3. Right technology
4. User adoption
5. Continuous optimization

Future belongs to businesses yang successfully blend:
- Human creativity
- AI capabilities
- Data insights
- Customer focus

Start journey today untuk stay ahead tomorrow.

### Referensi:
- Salesforce Research: "State of Sales & Marketing" (2025)
- Gartner: "CRM Technology Trends" (2025)
- Forrester: "AI in CRM" (2024)
    `},{slug:"future-of-customer-service-2025-dan-beyond",title:"Future of Customer Service: 2025 dan Beyond",excerpt:"Prediksi dan tren customer service masa depan yang akan mengubah cara bisnis berinteraksi dengan pelanggan. Bersiaplah untuk transformasi besar.",category:"Insight",date:"24 Feb 2025",image:"/images/blog/ai-technology.jpg",readTime:"10 menit",author:{name:"Ahmad Rizki",avatar:"AR"},content:`
# Future of Customer Service: 2025 dan Beyond

The customer service landscape is evolving rapidly. According to Gartner, by 2027, 70% of customer interactions will involve emerging technologies such as machine learning, chatbots, and mobile messaging. Let's explore what the future holds.

## Mega Trends Shaping the Future

### 1. Autonomous Customer Service

**Vision:** Self-healing, self-optimizing systems that require minimal human intervention.

**Components:**

**AI Agents:**
- Autonomous decision-making
- Continuous learning
- Proactive problem-solving
- Context-aware responses

**Self-Service Evolution:**
- Intuitive interfaces
- Voice-first experiences
- Visual search
- AR/VR guidance

**Predictive Support:**
- Issue prevention
- Proactive outreach
- Automated resolutions
- Anticipatory service

**Impact by 2027:**
- 90% issues resolved without human
- 95% reduction in wait times
- 50% lower operational costs
- 60% higher customer satisfaction

### 2. Hyper-Personalization at Scale

**Trend:** From segment-based to individual-level personalization.

**Enabling Technologies:**

**AI/ML:**
- Individual preference models
- Real-time adaptation
- Contextual understanding
- Behavioral prediction

**Data Integration:**
- 360-degree customer view
- Cross-channel tracking
- Historical analysis
- External data sources

**Dynamic Content:**
- Personalized recommendations
- Adaptive interfaces
- Custom workflows
- Individual pricing

**Examples:**

**Banking:**
- Personalized financial advice
- Custom product bundles
- Individual risk assessment
- Tailored communication

**Retail:**
- Personal stylist AI
- Size prediction
- Preference learning
- Dynamic pricing

**Healthcare:**
- Personalized treatment plans
- Individual health monitoring
- Custom medication schedules
- Tailored wellness programs

### 3. Emotional Intelligence in AI

**Development:** AI that understands and responds to human emotions.

**Capabilities:**

**Emotion Detection:**
- Voice tone analysis
- Facial expression recognition
- Text sentiment analysis
- Behavioral pattern matching

**Empathetic Responses:**
- Emotional mirroring
- Appropriate reactions
- Compassionate language
- Supportive guidance

**Mental Health Support:**
- Stress detection
- Crisis intervention
- Therapeutic conversations
- Wellbeing monitoring

**Applications:**

**Customer Service:**
- Detect frustration → Escalate
- Recognize satisfaction → Upsell
- Identify confusion → Simplify
- Sense urgency → Prioritize

**Healthcare:**
- Patient emotional support
- Mental health screening
- Therapy assistance
- Caregiver guidance

**Education:**
- Student engagement monitoring
- Learning difficulty detection
- Motivation enhancement
- Personalized encouragement

### 4. Immersive Support Experiences

**Evolution:** Beyond text and voice to fully immersive interactions.

**Technologies:**

**Augmented Reality (AR):**
- Visual troubleshooting
- Product demonstrations
- Installation guidance
- Virtual try-on

**Virtual Reality (VR):**
- Immersive training
- Virtual showrooms
- Experience previews
- Remote collaboration

**Mixed Reality (MR):**
- Hybrid environments
- Real-world integration
- Interactive guides
- Enhanced visualization

**Use Cases:**

**Retail:**
- Virtual shopping
- Try before buy
- Store navigation
- Product visualization

**Technical Support:**
- Visual diagnostics
- Step-by-step repairs
- Expert overlay
- Interactive manuals

**Real Estate:**
- Virtual tours
- Property visualization
- Design customization
- Neighborhood exploration

### 5. Blockchain for Trust & Transparency

**Application:** Building trust through verifiable, transparent interactions.

**Use Cases:**

**Transaction Verification:**
- Immutable records
- Proof of service
- Warranty tracking
- Ownership verification

**Data Privacy:**
- Customer data control
- Permission management
- Usage tracking
- Consent verification

**Loyalty Programs:**
- Fraud prevention
- Cross-brand points
- Transparent redemption
- Automatic rewards

**Service Level Agreements:**
- Performance tracking
- Automatic compensation
- Dispute resolution
- Contract enforcement

### 6. Voice-First Revolution

**Shift:** Voice becoming primary interface for customer service.

**Advancements:**

**Natural Conversations:**
- Human-like dialogue
- Context understanding
- Multi-turn conversations
- Accent recognition

**Multimodal Integration:**
- Voice + visual
- Speech + gesture
- Audio + haptic
- Sound + smell

**Ambient Computing:**
- Always listening
- Context-aware
- Proactive assistance
- Invisible interfaces

**Scenarios:**

**Home:**
- Smart home control
- Shopping assistance
- Information queries
- Entertainment selection

**Car:**
- Navigation help
- Service scheduling
- Emergency assistance
- Entertainment control

**Office:**
- Meeting scheduling
- Task management
- Information retrieval
- Collaboration tools

### 7. Quantum Computing Impact

**Potential:** Exponential increase in processing power enabling new possibilities.

**Applications:**

**Real-Time Personalization:**
- Process massive datasets instantly
- Individual-level optimization
- Complex pattern recognition
- Instant recommendations

**Advanced Predictions:**
- Accurate forecasting
- Risk assessment
- Opportunity identification
- Trend prediction

**Complex Problem Solving:**
- Route optimization
- Resource allocation
- Scheduling
- Supply chain optimization

**Security:**
- Quantum encryption
- Fraud detection
- Identity verification
- Threat prevention

### 8. Sustainable Customer Service

**Imperative:** Environmental responsibility in service delivery.

**Strategies:**

**Digital-First:**
- Paperless operations
- Remote support
- Virtual interactions
- E-documentation

**Energy Efficiency:**
- Green data centers
- Optimized algorithms
- Renewable energy
- Carbon offsetting

**Circular Economy:**
- Product longevity
- Repair services
- Recycling programs
- Sustainable packaging

**Transparency:**
- Carbon footprint disclosure
- Sustainability reporting
- Green certifications
- Impact measurement

## Emerging Technologies

### 1. Generative AI

**Capabilities:**
- Content creation
- Design generation
- Code writing
- Problem solving

**Customer Service Applications:**
- Dynamic responses
- Personalized content
- Custom solutions
- Creative assistance

### 2. Internet of Things (IoT)

**Integration:**
- Connected devices
- Real-time monitoring
- Predictive maintenance
- Automatic support

**Examples:**
- Smart home support
- Vehicle diagnostics
- Healthcare monitoring
- Industrial equipment

### 3. 5G & Edge Computing

**Benefits:**
- Ultra-low latency
- High bandwidth
- Real-time processing
- Enhanced mobile experiences

**Applications:**
- AR/VR support
- Video consultation
- IoT connectivity
- Instant access

### 4. Neuromorphic Computing

**Concept:** Brain-inspired computing for more human-like AI.

**Advantages:**
- Energy efficient
- Faster learning
- Better pattern recognition
- Adaptive behavior

## Workforce Transformation

### New Roles

**AI Trainers:**
- Model training
- Data labeling
- Quality assurance
- Bias detection

**Experience Designers:**
- Journey mapping
- Interface design
- Interaction design
- Accessibility

**Customer Success Managers:**
- Strategic relationships
- Value optimization
- Growth opportunities
- Advocacy building

**Ethics Officers:**
- AI ethics
- Privacy protection
- Bias mitigation
- Transparency

### Skill Requirements

**Technical:**
- Data literacy
- AI understanding
- Digital fluency
- System thinking

**Soft Skills:**
- Emotional intelligence
- Complex problem-solving
- Creativity
- Adaptability
- Ethical judgment

**Hybrid Skills:**
- Tech + empathy
- Data + storytelling
- Automation + human touch
- AI + ethics

## Challenges & Considerations

### 1. Privacy & Security

**Concerns:**
- Data breaches
- Privacy violations
- Surveillance fears
- Trust erosion

**Solutions:**
- Privacy by design
- Encryption
- Transparent policies
- User control

### 2. Ethical AI

**Issues:**
- Bias
- Fairness
- Transparency
- Accountability

**Approaches:**
- Ethical frameworks
- Diverse teams
- Regular audits
- Stakeholder engagement

### 3. Digital Divide

**Problem:**
- Unequal access
- Technology gap
- Skills disparity
- Economic barriers

**Mitigation:**
- Inclusive design
- Multiple channels
- Education programs
- Affordable solutions

### 4. Job Displacement

**Reality:**
- Automation impact
- Role evolution
- Skill mismatch
- Transition challenges

**Strategy:**
- Reskilling programs
- Role transformation
- Human-AI collaboration
- Safety nets

## Preparing for the Future

### For Businesses

**Short-Term (1-2 years):**
1. Implement AI chatbots
2. Enhance data infrastructure
3. Train team on AI tools
4. Pilot new technologies

**Medium-Term (3-5 years):**
1. Scale AI across touchpoints
2. Develop omnichannel excellence
3. Build predictive capabilities
4. Transform workforce

**Long-Term (5+ years):**
1. Achieve autonomous service
2. Master hyper-personalization
3. Lead with innovation
4. Create new paradigms

### For Professionals

**Immediate:**
- Learn AI basics
- Develop data literacy
- Enhance soft skills
- Stay curious

**Near-Term:**
- Specialize in AI domain
- Master new tools
- Build hybrid skills
- Network actively

**Future:**
- Become T-shaped professional
- Lead transformation
- Mentor others
- Shape the future

## Predictions by Year

**2025:**
- 50% customer interactions AI-powered
- Voice-first mainstream
- AR support common
- Hyper-personalization standard

**2026:**
- 70% issues resolved autonomously
- Emotion AI widespread
- Blockchain adoption growing
- IoT integration deep

**2027:**
- 85% contacts self-service
- Immersive experiences normal
- Quantum applications emerging
- Sustainable service standard

**2030:**
- Fully autonomous service systems
- Brain-computer interfaces early adoption
- AGI assistance
- Seamless human-AI collaboration

## Conclusion

The future of customer service is:
- **Autonomous** yet human-centric
- **Intelligent** and empathetic
- **Immersive** and engaging
- **Sustainable** and ethical
- **Personalized** at scale

Success requires:
1. **Embrace change**
2. **Invest in technology**
3. **Develop people**
4. **Maintain ethics**
5. **Focus on customers**

The question isn't whether to transform, but how fast and how well. Organizations that act now akan lead tomorrow.

Future is not something we enter. Future is something we create. Start creating yours today.

### Referensi:
- Gartner: "Future of Customer Service" (2025)
- MIT Technology Review: "Emerging Technologies" (2025)
- World Economic Forum: "Future of Work" (2024)
- McKinsey: "Customer Experience 2030" (2024)
    `}],s0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Ps(n){const[a,i]=L.useState(!1),o=()=>{i(!0)},{src:u,alt:c,style:m,className:f,...h}=n;return a?s.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:m,children:s.jsx("div",{className:"flex items-center justify-center w-full h-full",children:s.jsx("img",{src:s0,alt:"Error loading image",...h,"data-original-url":u})})}):s.jsx("img",{src:u,alt:c,className:f,style:m,...h,onError:o})}function o0(){return s.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[s.jsx(Ey,{className:"w-4 h-4 text-[var(--brand-primary)]"}),s.jsx("span",{className:"text-sm",children:"Blog & Insights"})]}),s.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Articles & Insights on"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),s.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"Learn the latest strategies, tips, and trends in customer service and AI to help your business grow"})]}),s.jsx("div",{className:"mb-16",children:s.jsx(Ke,{to:`/blog/${wt[0].slug}`,className:"group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 transition-all",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"relative h-64 lg:h-auto",children:[s.jsx(Ps,{src:wt[0].image,alt:wt[0].title,className:"w-full h-full object-cover"}),s.jsx("div",{className:"absolute top-4 left-4",children:s.jsx("span",{className:"px-3 py-1 bg-[var(--brand-primary)] text-white text-xs rounded-full",children:"Featured"})})]}),s.jsxs("div",{className:"p-8 flex flex-col justify-center",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-muted-foreground",children:[s.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:wt[0].category}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(qa,{className:"w-4 h-4"}),s.jsx("span",{children:wt[0].date})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(Ss,{className:"w-4 h-4"}),s.jsx("span",{children:wt[0].readTime})]})]}),s.jsx("h2",{className:"text-3xl mb-4 group-hover:text-[var(--brand-primary)] transition-colors",children:wt[0].title}),s.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:wt[0].excerpt}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:s.jsx("span",{className:"text-white text-sm",children:wt[0].author.avatar})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm",children:wt[0].author.name}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Author"})]})]}),s.jsxs("div",{className:"flex items-center gap-2 text-[var(--brand-primary)] group-hover:gap-3 transition-all",children:[s.jsx("span",{className:"text-sm",children:"Read More"}),s.jsx(ws,{className:"w-4 h-4"})]})]})]})]})})}),s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:wt.slice(1).map(n=>s.jsxs(Ke,{to:`/blog/${n.slug}`,className:"group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all",children:[s.jsx("div",{className:"relative h-48 overflow-hidden",children:s.jsx(Ps,{src:n.image,alt:n.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-3 text-xs text-muted-foreground",children:[s.jsx("span",{className:"px-2 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:n.category}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(qa,{className:"w-3 h-3"}),s.jsx("span",{children:n.date})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(Ss,{className:"w-3 h-3"}),s.jsx("span",{children:n.readTime})]})]}),s.jsx("h3",{className:"text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:n.excerpt}),s.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:s.jsx("span",{className:"text-white text-xs",children:n.author.avatar})}),s.jsx("span",{className:"text-xs",children:n.author.name})]}),s.jsx(ws,{className:"w-4 h-4 text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform"})]})]})]},n.slug))}),s.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl",children:[s.jsx("h2",{className:"text-2xl mb-6 text-center",children:"Categories"}),s.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:Array.from(new Set(wt.map(n=>n.category))).map(n=>s.jsx("button",{className:"px-4 py-2 bg-card border border-border rounded-lg hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all",children:n},n))})]})]})})}function l0(n,a){const i={};return(n[n.length-1]===""?[...n,""]:n).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const u0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,c0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,d0={};function Um(n,a){return(d0.jsx?c0:u0).test(n)}const m0=/[ \t\n\f\r]/g;function p0(n){return typeof n=="object"?n.type==="text"?Hm(n.value):!1:Hm(n)}function Hm(n){return n.replace(m0,"")===""}class Xa{constructor(a,i,o){this.normal=i,this.property=a,o&&(this.space=o)}}Xa.prototype.normal={};Xa.prototype.property={};Xa.prototype.space=void 0;function of(n,a){const i={},o={};for(const u of n)Object.assign(i,u.property),Object.assign(o,u.normal);return new Xa(i,o,a)}function Xl(n){return n.toLowerCase()}class jt{constructor(a,i){this.attribute=i,this.property=a}}jt.prototype.attribute="";jt.prototype.booleanish=!1;jt.prototype.boolean=!1;jt.prototype.commaOrSpaceSeparated=!1;jt.prototype.commaSeparated=!1;jt.prototype.defined=!1;jt.prototype.mustUseProperty=!1;jt.prototype.number=!1;jt.prototype.overloadedBoolean=!1;jt.prototype.property="";jt.prototype.spaceSeparated=!1;jt.prototype.space=void 0;let f0=0;const Ne=lr(),Xe=lr(),Jl=lr(),$=lr(),De=lr(),Br=lr(),Rt=lr();function lr(){return 2**++f0}const Zl=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ne,booleanish:Xe,commaOrSpaceSeparated:Rt,commaSeparated:Br,number:$,overloadedBoolean:Jl,spaceSeparated:De},Symbol.toStringTag,{value:"Module"})),Tl=Object.keys(Zl);class gu extends jt{constructor(a,i,o,u){let c=-1;if(super(a,i),Vm(this,"space",u),typeof o=="number")for(;++c<Tl.length;){const m=Tl[c];Vm(this,Tl[c],(o&Zl[m])===Zl[m])}}}gu.prototype.defined=!0;function Vm(n,a,i){i&&(n[a]=i)}function qr(n){const a={},i={};for(const[o,u]of Object.entries(n.properties)){const c=new gu(o,n.transform(n.attributes||{},o),u,n.space);n.mustUseProperty&&n.mustUseProperty.includes(o)&&(c.mustUseProperty=!0),a[o]=c,i[Xl(o)]=o,i[Xl(c.attribute)]=o}return new Xa(a,i,n.space)}const lf=qr({properties:{ariaActiveDescendant:null,ariaAtomic:Xe,ariaAutoComplete:null,ariaBusy:Xe,ariaChecked:Xe,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:De,ariaCurrent:null,ariaDescribedBy:De,ariaDetails:null,ariaDisabled:Xe,ariaDropEffect:De,ariaErrorMessage:null,ariaExpanded:Xe,ariaFlowTo:De,ariaGrabbed:Xe,ariaHasPopup:null,ariaHidden:Xe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:De,ariaLevel:$,ariaLive:null,ariaModal:Xe,ariaMultiLine:Xe,ariaMultiSelectable:Xe,ariaOrientation:null,ariaOwns:De,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:Xe,ariaReadOnly:Xe,ariaRelevant:null,ariaRequired:Xe,ariaRoleDescription:De,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:Xe,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null},transform(n,a){return a==="role"?a:"aria-"+a.slice(4).toLowerCase()}});function uf(n,a){return a in n?n[a]:a}function cf(n,a){return uf(n,a.toLowerCase())}const h0=qr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Br,acceptCharset:De,accessKey:De,action:null,allow:null,allowFullScreen:Ne,allowPaymentRequest:Ne,allowUserMedia:Ne,alt:null,as:null,async:Ne,autoCapitalize:null,autoComplete:De,autoFocus:Ne,autoPlay:Ne,blocking:De,capture:null,charSet:null,checked:Ne,cite:null,className:De,cols:$,colSpan:null,content:null,contentEditable:Xe,controls:Ne,controlsList:De,coords:$|Br,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ne,defer:Ne,dir:null,dirName:null,disabled:Ne,download:Jl,draggable:Xe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ne,formTarget:null,headers:De,height:$,hidden:Jl,high:$,href:null,hrefLang:null,htmlFor:De,httpEquiv:De,id:null,imageSizes:null,imageSrcSet:null,inert:Ne,inputMode:null,integrity:null,is:null,isMap:Ne,itemId:null,itemProp:De,itemRef:De,itemScope:Ne,itemType:De,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ne,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:Ne,muted:Ne,name:null,nonce:null,noModule:Ne,noValidate:Ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ne,optimum:$,pattern:null,ping:De,placeholder:null,playsInline:Ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ne,referrerPolicy:null,rel:De,required:Ne,reversed:Ne,rows:$,rowSpan:$,sandbox:De,scope:null,scoped:Ne,seamless:Ne,selected:Ne,shadowRootClonable:Ne,shadowRootDelegatesFocus:Ne,shadowRootMode:null,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:Xe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:Ne,useMap:null,value:Xe,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:De,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ne,declare:Ne,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:Ne,noHref:Ne,noShade:Ne,noWrap:Ne,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:Xe,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ne,disableRemotePlayback:Ne,prefix:null,property:null,results:$,security:null,unselectable:null},space:"html",transform:cf}),g0=qr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Rt,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:De,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:Ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Br,g2:Br,glyphName:Br,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:Rt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:De,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Rt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Rt,rev:Rt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Rt,requiredFeatures:Rt,requiredFonts:Rt,requiredFormats:Rt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:Rt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Rt,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Rt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:uf}),df=qr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,a){return"xlink:"+a.slice(5).toLowerCase()}}),mf=qr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:cf}),pf=qr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,a){return"xml:"+a.slice(3).toLowerCase()}}),x0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},y0=/[A-Z]/g,Wm=/-[a-z]/g,v0=/^data[-\w.:]+$/i;function k0(n,a){const i=Xl(a);let o=a,u=jt;if(i in n.normal)return n.property[n.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&v0.test(a)){if(a.charAt(4)==="-"){const c=a.slice(5).replace(Wm,w0);o="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=a.slice(4);if(!Wm.test(c)){let m=c.replace(y0,b0);m.charAt(0)!=="-"&&(m="-"+m),a="data"+m}}u=gu}return new u(o,a)}function b0(n){return"-"+n.toLowerCase()}function w0(n){return n.charAt(1).toUpperCase()}const S0=of([lf,h0,df,mf,pf],"html"),xu=of([lf,g0,df,mf,pf],"svg");function j0(n){return n.join(" ").trim()}var Dr={},Ml,$m;function C0(){if($m)return Ml;$m=1;var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a=/\n/g,i=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,u=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m=/^[;\s]*/,f=/^\s+|\s+$/g,h=`
`,g="/",x="*",v="",b="comment",k="declaration";function z(I,R){if(typeof I!="string")throw new TypeError("First argument must be a string");if(!I)return[];R=R||{};var U=1,B=1;function Z(te){var G=te.match(a);G&&(U+=G.length);var me=te.lastIndexOf(h);B=~me?te.length-me:B+te.length}function ce(){var te={line:U,column:B};return function(G){return G.position=new D(te),de(),G}}function D(te){this.start=te,this.end={line:U,column:B},this.source=R.source}D.prototype.content=I;function le(te){var G=new Error(R.source+":"+U+":"+B+": "+te);if(G.reason=te,G.filename=R.source,G.line=U,G.column=B,G.source=I,!R.silent)throw G}function Q(te){var G=te.exec(I);if(G){var me=G[0];return Z(me),I=I.slice(me.length),G}}function de(){Q(i)}function ge(te){var G;for(te=te||[];G=J();)G!==!1&&te.push(G);return te}function J(){var te=ce();if(!(g!=I.charAt(0)||x!=I.charAt(1))){for(var G=2;v!=I.charAt(G)&&(x!=I.charAt(G)||g!=I.charAt(G+1));)++G;if(G+=2,v===I.charAt(G-1))return le("End of comment missing");var me=I.slice(2,G-2);return B+=2,Z(me),I=I.slice(G),B+=2,te({type:b,comment:me})}}function Y(){var te=ce(),G=Q(o);if(G){if(J(),!Q(u))return le("property missing ':'");var me=Q(c),ye=te({type:k,property:M(G[0].replace(n,v)),value:me?M(me[0].replace(n,v)):v});return Q(m),ye}}function je(){var te=[];ge(te);for(var G;G=Y();)G!==!1&&(te.push(G),ge(te));return te}return de(),je()}function M(I){return I?I.replace(f,v):v}return Ml=z,Ml}var qm;function N0(){if(qm)return Dr;qm=1;var n=Dr&&Dr.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default=i;const a=n(C0());function i(o,u){let c=null;if(!o||typeof o!="string")return c;const m=(0,a.default)(o),f=typeof u=="function";return m.forEach(h=>{if(h.type!=="declaration")return;const{property:g,value:x}=h;f?u(g,x,h):x&&(c=c||{},c[g]=x)}),c}return Dr}var Da={},Gm;function P0(){if(Gm)return Da;Gm=1,Object.defineProperty(Da,"__esModule",{value:!0}),Da.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,a=/-([a-z])/g,i=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,u=/^-(ms)-/,c=function(g){return!g||i.test(g)||n.test(g)},m=function(g,x){return x.toUpperCase()},f=function(g,x){return"".concat(x,"-")},h=function(g,x){return x===void 0&&(x={}),c(g)?g:(g=g.toLowerCase(),x.reactCompat?g=g.replace(u,f):g=g.replace(o,f),g.replace(a,m))};return Da.camelCase=h,Da}var Fa,Qm;function E0(){if(Qm)return Fa;Qm=1;var n=Fa&&Fa.__importDefault||function(u){return u&&u.__esModule?u:{default:u}},a=n(N0()),i=P0();function o(u,c){var m={};return!u||typeof u!="string"||(0,a.default)(u,function(f,h){f&&h&&(m[(0,i.camelCase)(f,c)]=h)}),m}return o.default=o,Fa=o,Fa}var I0=E0();const A0=ou(I0),ff=hf("end"),yu=hf("start");function hf(n){return a;function a(i){const o=i&&i.position&&i.position[n]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function R0(n){const a=yu(n),i=ff(n);if(a&&i)return{start:a,end:i}}function Ha(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Km(n.position):"start"in n||"end"in n?Km(n):"line"in n||"column"in n?eu(n):""}function eu(n){return Ym(n&&n.line)+":"+Ym(n&&n.column)}function Km(n){return eu(n&&n.start)+"-"+eu(n&&n.end)}function Ym(n){return n&&typeof n=="number"?n:1}class mt extends Error{constructor(a,i,o){super(),typeof i=="string"&&(o=i,i=void 0);let u="",c={},m=!1;if(i&&("line"in i&&"column"in i?c={place:i}:"start"in i&&"end"in i?c={place:i}:"type"in i?c={ancestors:[i],place:i.position}:c={...i}),typeof a=="string"?u=a:!c.cause&&a&&(m=!0,u=a.message,c.cause=a),!c.ruleId&&!c.source&&typeof o=="string"){const h=o.indexOf(":");h===-1?c.ruleId=o:(c.source=o.slice(0,h),c.ruleId=o.slice(h+1))}if(!c.place&&c.ancestors&&c.ancestors){const h=c.ancestors[c.ancestors.length-1];h&&(c.place=h.position)}const f=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=u,this.line=f?f.line:void 0,this.name=Ha(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=m&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const vu={}.hasOwnProperty,T0=new Map,M0=/[A-Z]/g,z0=new Set(["table","tbody","thead","tfoot","tr"]),L0=new Set(["td","th"]),gf="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function _0(n,a){if(!a||a.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=a.filePath||void 0;let o;if(a.development){if(typeof a.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=W0(i,a.jsxDEV)}else{if(typeof a.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof a.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=V0(i,a.jsx,a.jsxs)}const u={Fragment:a.Fragment,ancestors:[],components:a.components||{},create:o,elementAttributeNameCase:a.elementAttributeNameCase||"react",evaluater:a.createEvaluater?a.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:a.ignoreInvalidStyle||!1,passKeys:a.passKeys!==!1,passNode:a.passNode||!1,schema:a.space==="svg"?xu:S0,stylePropertyNameCase:a.stylePropertyNameCase||"dom",tableCellAlignToStyle:a.tableCellAlignToStyle!==!1},c=xf(u,n,void 0);return c&&typeof c!="string"?c:u.create(n,u.Fragment,{children:c||void 0},void 0)}function xf(n,a,i){if(a.type==="element")return D0(n,a,i);if(a.type==="mdxFlowExpression"||a.type==="mdxTextExpression")return F0(n,a);if(a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement")return B0(n,a,i);if(a.type==="mdxjsEsm")return O0(n,a);if(a.type==="root")return U0(n,a,i);if(a.type==="text")return H0(n,a)}function D0(n,a,i){const o=n.schema;let u=o;a.tagName.toLowerCase()==="svg"&&o.space==="html"&&(u=xu,n.schema=u),n.ancestors.push(a);const c=vf(n,a.tagName,!1),m=$0(n,a);let f=bu(n,a);return z0.has(a.tagName)&&(f=f.filter(function(h){return typeof h=="string"?!p0(h):!0})),yf(n,m,c,a),ku(m,f),n.ancestors.pop(),n.schema=o,n.create(a,c,m,i)}function F0(n,a){if(a.data&&a.data.estree&&n.evaluater){const o=a.data.estree.body[0];return o.type,n.evaluater.evaluateExpression(o.expression)}Ga(n,a.position)}function O0(n,a){if(a.data&&a.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(a.data.estree);Ga(n,a.position)}function B0(n,a,i){const o=n.schema;let u=o;a.name==="svg"&&o.space==="html"&&(u=xu,n.schema=u),n.ancestors.push(a);const c=a.name===null?n.Fragment:vf(n,a.name,!0),m=q0(n,a),f=bu(n,a);return yf(n,m,c,a),ku(m,f),n.ancestors.pop(),n.schema=o,n.create(a,c,m,i)}function U0(n,a,i){const o={};return ku(o,bu(n,a)),n.create(a,n.Fragment,o,i)}function H0(n,a){return a.value}function yf(n,a,i,o){typeof i!="string"&&i!==n.Fragment&&n.passNode&&(a.node=o)}function ku(n,a){if(a.length>0){const i=a.length>1?a:a[0];i&&(n.children=i)}}function V0(n,a,i){return o;function o(u,c,m,f){const g=Array.isArray(m.children)?i:a;return f?g(c,m,f):g(c,m)}}function W0(n,a){return i;function i(o,u,c,m){const f=Array.isArray(c.children),h=yu(o);return a(u,c,m,f,{columnNumber:h?h.column-1:void 0,fileName:n,lineNumber:h?h.line:void 0},void 0)}}function $0(n,a){const i={};let o,u;for(u in a.properties)if(u!=="children"&&vu.call(a.properties,u)){const c=G0(n,u,a.properties[u]);if(c){const[m,f]=c;n.tableCellAlignToStyle&&m==="align"&&typeof f=="string"&&L0.has(a.tagName)?o=f:i[m]=f}}if(o){const c=i.style||(i.style={});c[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return i}function q0(n,a){const i={};for(const o of a.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&n.evaluater){const c=o.data.estree.body[0];c.type;const m=c.expression;m.type;const f=m.properties[0];f.type,Object.assign(i,n.evaluater.evaluateExpression(f.argument))}else Ga(n,a.position);else{const u=o.name;let c;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&n.evaluater){const f=o.value.data.estree.body[0];f.type,c=n.evaluater.evaluateExpression(f.expression)}else Ga(n,a.position);else c=o.value===null?!0:o.value;i[u]=c}return i}function bu(n,a){const i=[];let o=-1;const u=n.passKeys?new Map:T0;for(;++o<a.children.length;){const c=a.children[o];let m;if(n.passKeys){const h=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(h){const g=u.get(h)||0;m=h+"-"+g,u.set(h,g+1)}}const f=xf(n,c,m);f!==void 0&&i.push(f)}return i}function G0(n,a,i){const o=k0(n.schema,a);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=o.commaSeparated?l0(i):j0(i)),o.property==="style"){let u=typeof i=="object"?i:Q0(n,String(i));return n.stylePropertyNameCase==="css"&&(u=K0(u)),["style",u]}return[n.elementAttributeNameCase==="react"&&o.space?x0[o.property]||o.property:o.attribute,i]}}function Q0(n,a){try{return A0(a,{reactCompat:!0})}catch(i){if(n.ignoreInvalidStyle)return{};const o=i,u=new mt("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw u.file=n.filePath||void 0,u.url=gf+"#cannot-parse-style-attribute",u}}function vf(n,a,i){let o;if(!i)o={type:"Literal",value:a};else if(a.includes(".")){const u=a.split(".");let c=-1,m;for(;++c<u.length;){const f=Um(u[c])?{type:"Identifier",name:u[c]}:{type:"Literal",value:u[c]};m=m?{type:"MemberExpression",object:m,property:f,computed:!!(c&&f.type==="Literal"),optional:!1}:f}o=m}else o=Um(a)&&!/^[a-z]/.test(a)?{type:"Identifier",name:a}:{type:"Literal",value:a};if(o.type==="Literal"){const u=o.value;return vu.call(n.components,u)?n.components[u]:u}if(n.evaluater)return n.evaluater.evaluateExpression(o);Ga(n)}function Ga(n,a){const i=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:a,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=n.filePath||void 0,i.url=gf+"#cannot-handle-mdx-estrees-without-createevaluater",i}function K0(n){const a={};let i;for(i in n)vu.call(n,i)&&(a[Y0(i)]=n[i]);return a}function Y0(n){let a=n.replace(M0,X0);return a.slice(0,3)==="ms-"&&(a="-"+a),a}function X0(n){return"-"+n.toLowerCase()}const zl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},J0={};function Z0(n,a){const i=J0,o=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,u=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return kf(n,o,u)}function kf(n,a,i){if(ek(n)){if("value"in n)return n.type==="html"&&!i?"":n.value;if(a&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Xm(n.children,a,i)}return Array.isArray(n)?Xm(n,a,i):""}function Xm(n,a,i){const o=[];let u=-1;for(;++u<n.length;)o[u]=kf(n[u],a,i);return o.join("")}function ek(n){return!!(n&&typeof n=="object")}const Jm=document.createElement("i");function wu(n){const a="&"+n+";";Jm.innerHTML=a;const i=Jm.textContent;return i.charCodeAt(i.length-1)===59&&n!=="semi"||i===a?!1:i}function an(n,a,i,o){const u=n.length;let c=0,m;if(a<0?a=-a>u?0:u+a:a=a>u?u:a,i=i>0?i:0,o.length<1e4)m=Array.from(o),m.unshift(a,i),n.splice(...m);else for(i&&n.splice(a,i);c<o.length;)m=o.slice(c,c+1e4),m.unshift(a,0),n.splice(...m),c+=1e4,a+=1e4}function Bt(n,a){return n.length>0?(an(n,n.length,0,a),n):a}const Zm={}.hasOwnProperty;function tk(n){const a={};let i=-1;for(;++i<n.length;)nk(a,n[i]);return a}function nk(n,a){let i;for(i in a){const u=(Zm.call(n,i)?n[i]:void 0)||(n[i]={}),c=a[i];let m;if(c)for(m in c){Zm.call(u,m)||(u[m]=[]);const f=c[m];rk(u[m],Array.isArray(f)?f:f?[f]:[])}}}function rk(n,a){let i=-1;const o=[];for(;++i<a.length;)(a[i].add==="after"?n:o).push(a[i]);an(n,0,0,o)}function bf(n,a){const i=Number.parseInt(n,a);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function Ur(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const rn=$n(/[A-Za-z]/),Tt=$n(/[\dA-Za-z]/),ak=$n(/[#-'*+\--9=?A-Z^-~]/);function tu(n){return n!==null&&(n<32||n===127)}const nu=$n(/\d/),ik=$n(/[\dA-Fa-f]/),sk=$n(/[!-/:-@[-`{-~]/);function be(n){return n!==null&&n<-2}function St(n){return n!==null&&(n<0||n===32)}function ze(n){return n===-2||n===-1||n===32}const ok=$n(/\p{P}|\p{S}/u),lk=$n(/\s/);function $n(n){return a;function a(i){return i!==null&&i>-1&&n.test(String.fromCharCode(i))}}function Gr(n){const a=[];let i=-1,o=0,u=0;for(;++i<n.length;){const c=n.charCodeAt(i);let m="";if(c===37&&Tt(n.charCodeAt(i+1))&&Tt(n.charCodeAt(i+2)))u=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(m=String.fromCharCode(c));else if(c>55295&&c<57344){const f=n.charCodeAt(i+1);c<56320&&f>56319&&f<57344?(m=String.fromCharCode(c,f),u=1):m="�"}else m=String.fromCharCode(c);m&&(a.push(n.slice(o,i),encodeURIComponent(m)),o=i+u+1,m=""),u&&(i+=u,u=0)}return a.join("")+n.slice(o)}function Fe(n,a,i,o){const u=o?o-1:Number.POSITIVE_INFINITY;let c=0;return m;function m(h){return ze(h)?(n.enter(i),f(h)):a(h)}function f(h){return ze(h)&&c++<u?(n.consume(h),f):(n.exit(i),a(h))}}const uk={tokenize:ck};function ck(n){const a=n.attempt(this.parser.constructs.contentInitial,o,u);let i;return a;function o(f){if(f===null){n.consume(f);return}return n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),Fe(n,a,"linePrefix")}function u(f){return n.enter("paragraph"),c(f)}function c(f){const h=n.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=h),i=h,m(f)}function m(f){if(f===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(f);return}return be(f)?(n.consume(f),n.exit("chunkText"),c):(n.consume(f),m)}}const dk={tokenize:mk},ep={tokenize:pk};function mk(n){const a=this,i=[];let o=0,u,c,m;return f;function f(B){if(o<i.length){const Z=i[o];return a.containerState=Z[1],n.attempt(Z[0].continuation,h,g)(B)}return g(B)}function h(B){if(o++,a.containerState._closeFlow){a.containerState._closeFlow=void 0,u&&U();const Z=a.events.length;let ce=Z,D;for(;ce--;)if(a.events[ce][0]==="exit"&&a.events[ce][1].type==="chunkFlow"){D=a.events[ce][1].end;break}R(o);let le=Z;for(;le<a.events.length;)a.events[le][1].end={...D},le++;return an(a.events,ce+1,0,a.events.slice(Z)),a.events.length=le,g(B)}return f(B)}function g(B){if(o===i.length){if(!u)return b(B);if(u.currentConstruct&&u.currentConstruct.concrete)return z(B);a.interrupt=!!(u.currentConstruct&&!u._gfmTableDynamicInterruptHack)}return a.containerState={},n.check(ep,x,v)(B)}function x(B){return u&&U(),R(o),b(B)}function v(B){return a.parser.lazy[a.now().line]=o!==i.length,m=a.now().offset,z(B)}function b(B){return a.containerState={},n.attempt(ep,k,z)(B)}function k(B){return o++,i.push([a.currentConstruct,a.containerState]),b(B)}function z(B){if(B===null){u&&U(),R(0),n.consume(B);return}return u=u||a.parser.flow(a.now()),n.enter("chunkFlow",{_tokenizer:u,contentType:"flow",previous:c}),M(B)}function M(B){if(B===null){I(n.exit("chunkFlow"),!0),R(0),n.consume(B);return}return be(B)?(n.consume(B),I(n.exit("chunkFlow")),o=0,a.interrupt=void 0,f):(n.consume(B),M)}function I(B,Z){const ce=a.sliceStream(B);if(Z&&ce.push(null),B.previous=c,c&&(c.next=B),c=B,u.defineSkip(B.start),u.write(ce),a.parser.lazy[B.start.line]){let D=u.events.length;for(;D--;)if(u.events[D][1].start.offset<m&&(!u.events[D][1].end||u.events[D][1].end.offset>m))return;const le=a.events.length;let Q=le,de,ge;for(;Q--;)if(a.events[Q][0]==="exit"&&a.events[Q][1].type==="chunkFlow"){if(de){ge=a.events[Q][1].end;break}de=!0}for(R(o),D=le;D<a.events.length;)a.events[D][1].end={...ge},D++;an(a.events,Q+1,0,a.events.slice(le)),a.events.length=D}}function R(B){let Z=i.length;for(;Z-- >B;){const ce=i[Z];a.containerState=ce[1],ce[0].exit.call(a,n)}i.length=B}function U(){u.write([null]),c=void 0,u=void 0,a.containerState._closeFlow=void 0}}function pk(n,a,i){return Fe(n,n.attempt(this.parser.constructs.document,a,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function tp(n){if(n===null||St(n)||lk(n))return 1;if(ok(n))return 2}function Su(n,a,i){const o=[];let u=-1;for(;++u<n.length;){const c=n[u].resolveAll;c&&!o.includes(c)&&(a=c(a,i),o.push(c))}return a}const ru={name:"attention",resolveAll:fk,tokenize:hk};function fk(n,a){let i=-1,o,u,c,m,f,h,g,x;for(;++i<n.length;)if(n[i][0]==="enter"&&n[i][1].type==="attentionSequence"&&n[i][1]._close){for(o=i;o--;)if(n[o][0]==="exit"&&n[o][1].type==="attentionSequence"&&n[o][1]._open&&a.sliceSerialize(n[o][1]).charCodeAt(0)===a.sliceSerialize(n[i][1]).charCodeAt(0)){if((n[o][1]._close||n[i][1]._open)&&(n[i][1].end.offset-n[i][1].start.offset)%3&&!((n[o][1].end.offset-n[o][1].start.offset+n[i][1].end.offset-n[i][1].start.offset)%3))continue;h=n[o][1].end.offset-n[o][1].start.offset>1&&n[i][1].end.offset-n[i][1].start.offset>1?2:1;const v={...n[o][1].end},b={...n[i][1].start};np(v,-h),np(b,h),m={type:h>1?"strongSequence":"emphasisSequence",start:v,end:{...n[o][1].end}},f={type:h>1?"strongSequence":"emphasisSequence",start:{...n[i][1].start},end:b},c={type:h>1?"strongText":"emphasisText",start:{...n[o][1].end},end:{...n[i][1].start}},u={type:h>1?"strong":"emphasis",start:{...m.start},end:{...f.end}},n[o][1].end={...m.start},n[i][1].start={...f.end},g=[],n[o][1].end.offset-n[o][1].start.offset&&(g=Bt(g,[["enter",n[o][1],a],["exit",n[o][1],a]])),g=Bt(g,[["enter",u,a],["enter",m,a],["exit",m,a],["enter",c,a]]),g=Bt(g,Su(a.parser.constructs.insideSpan.null,n.slice(o+1,i),a)),g=Bt(g,[["exit",c,a],["enter",f,a],["exit",f,a],["exit",u,a]]),n[i][1].end.offset-n[i][1].start.offset?(x=2,g=Bt(g,[["enter",n[i][1],a],["exit",n[i][1],a]])):x=0,an(n,o-1,i-o+3,g),i=o+g.length-x-2;break}}for(i=-1;++i<n.length;)n[i][1].type==="attentionSequence"&&(n[i][1].type="data");return n}function hk(n,a){const i=this.parser.constructs.attentionMarkers.null,o=this.previous,u=tp(o);let c;return m;function m(h){return c=h,n.enter("attentionSequence"),f(h)}function f(h){if(h===c)return n.consume(h),f;const g=n.exit("attentionSequence"),x=tp(h),v=!x||x===2&&u||i.includes(h),b=!u||u===2&&x||i.includes(o);return g._open=!!(c===42?v:v&&(u||!b)),g._close=!!(c===42?b:b&&(x||!v)),a(h)}}function np(n,a){n.column+=a,n.offset+=a,n._bufferIndex+=a}const gk={name:"autolink",tokenize:xk};function xk(n,a,i){let o=0;return u;function u(k){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(k),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),c}function c(k){return rn(k)?(n.consume(k),m):k===64?i(k):g(k)}function m(k){return k===43||k===45||k===46||Tt(k)?(o=1,f(k)):g(k)}function f(k){return k===58?(n.consume(k),o=0,h):(k===43||k===45||k===46||Tt(k))&&o++<32?(n.consume(k),f):(o=0,g(k))}function h(k){return k===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(k),n.exit("autolinkMarker"),n.exit("autolink"),a):k===null||k===32||k===60||tu(k)?i(k):(n.consume(k),h)}function g(k){return k===64?(n.consume(k),x):ak(k)?(n.consume(k),g):i(k)}function x(k){return Tt(k)?v(k):i(k)}function v(k){return k===46?(n.consume(k),o=0,x):k===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(k),n.exit("autolinkMarker"),n.exit("autolink"),a):b(k)}function b(k){if((k===45||Tt(k))&&o++<63){const z=k===45?b:v;return n.consume(k),z}return i(k)}}const zs={partial:!0,tokenize:yk};function yk(n,a,i){return o;function o(c){return ze(c)?Fe(n,u,"linePrefix")(c):u(c)}function u(c){return c===null||be(c)?a(c):i(c)}}const wf={continuation:{tokenize:kk},exit:bk,name:"blockQuote",tokenize:vk};function vk(n,a,i){const o=this;return u;function u(m){if(m===62){const f=o.containerState;return f.open||(n.enter("blockQuote",{_container:!0}),f.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(m),n.exit("blockQuoteMarker"),c}return i(m)}function c(m){return ze(m)?(n.enter("blockQuotePrefixWhitespace"),n.consume(m),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),a):(n.exit("blockQuotePrefix"),a(m))}}function kk(n,a,i){const o=this;return u;function u(m){return ze(m)?Fe(n,c,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):c(m)}function c(m){return n.attempt(wf,a,i)(m)}}function bk(n){n.exit("blockQuote")}const Sf={name:"characterEscape",tokenize:wk};function wk(n,a,i){return o;function o(c){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(c),n.exit("escapeMarker"),u}function u(c){return sk(c)?(n.enter("characterEscapeValue"),n.consume(c),n.exit("characterEscapeValue"),n.exit("characterEscape"),a):i(c)}}const jf={name:"characterReference",tokenize:Sk};function Sk(n,a,i){const o=this;let u=0,c,m;return f;function f(v){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(v),n.exit("characterReferenceMarker"),h}function h(v){return v===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(v),n.exit("characterReferenceMarkerNumeric"),g):(n.enter("characterReferenceValue"),c=31,m=Tt,x(v))}function g(v){return v===88||v===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(v),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),c=6,m=ik,x):(n.enter("characterReferenceValue"),c=7,m=nu,x(v))}function x(v){if(v===59&&u){const b=n.exit("characterReferenceValue");return m===Tt&&!wu(o.sliceSerialize(b))?i(v):(n.enter("characterReferenceMarker"),n.consume(v),n.exit("characterReferenceMarker"),n.exit("characterReference"),a)}return m(v)&&u++<c?(n.consume(v),x):i(v)}}const rp={partial:!0,tokenize:Ck},ap={concrete:!0,name:"codeFenced",tokenize:jk};function jk(n,a,i){const o=this,u={partial:!0,tokenize:ce};let c=0,m=0,f;return h;function h(D){return g(D)}function g(D){const le=o.events[o.events.length-1];return c=le&&le[1].type==="linePrefix"?le[2].sliceSerialize(le[1],!0).length:0,f=D,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),x(D)}function x(D){return D===f?(m++,n.consume(D),x):m<3?i(D):(n.exit("codeFencedFenceSequence"),ze(D)?Fe(n,v,"whitespace")(D):v(D))}function v(D){return D===null||be(D)?(n.exit("codeFencedFence"),o.interrupt?a(D):n.check(rp,M,Z)(D)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),b(D))}function b(D){return D===null||be(D)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),v(D)):ze(D)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),Fe(n,k,"whitespace")(D)):D===96&&D===f?i(D):(n.consume(D),b)}function k(D){return D===null||be(D)?v(D):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),z(D))}function z(D){return D===null||be(D)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),v(D)):D===96&&D===f?i(D):(n.consume(D),z)}function M(D){return n.attempt(u,Z,I)(D)}function I(D){return n.enter("lineEnding"),n.consume(D),n.exit("lineEnding"),R}function R(D){return c>0&&ze(D)?Fe(n,U,"linePrefix",c+1)(D):U(D)}function U(D){return D===null||be(D)?n.check(rp,M,Z)(D):(n.enter("codeFlowValue"),B(D))}function B(D){return D===null||be(D)?(n.exit("codeFlowValue"),U(D)):(n.consume(D),B)}function Z(D){return n.exit("codeFenced"),a(D)}function ce(D,le,Q){let de=0;return ge;function ge(G){return D.enter("lineEnding"),D.consume(G),D.exit("lineEnding"),J}function J(G){return D.enter("codeFencedFence"),ze(G)?Fe(D,Y,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(G):Y(G)}function Y(G){return G===f?(D.enter("codeFencedFenceSequence"),je(G)):Q(G)}function je(G){return G===f?(de++,D.consume(G),je):de>=m?(D.exit("codeFencedFenceSequence"),ze(G)?Fe(D,te,"whitespace")(G):te(G)):Q(G)}function te(G){return G===null||be(G)?(D.exit("codeFencedFence"),le(G)):Q(G)}}}function Ck(n,a,i){const o=this;return u;function u(m){return m===null?i(m):(n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),c)}function c(m){return o.parser.lazy[o.now().line]?i(m):a(m)}}const Ll={name:"codeIndented",tokenize:Pk},Nk={partial:!0,tokenize:Ek};function Pk(n,a,i){const o=this;return u;function u(g){return n.enter("codeIndented"),Fe(n,c,"linePrefix",5)(g)}function c(g){const x=o.events[o.events.length-1];return x&&x[1].type==="linePrefix"&&x[2].sliceSerialize(x[1],!0).length>=4?m(g):i(g)}function m(g){return g===null?h(g):be(g)?n.attempt(Nk,m,h)(g):(n.enter("codeFlowValue"),f(g))}function f(g){return g===null||be(g)?(n.exit("codeFlowValue"),m(g)):(n.consume(g),f)}function h(g){return n.exit("codeIndented"),a(g)}}function Ek(n,a,i){const o=this;return u;function u(m){return o.parser.lazy[o.now().line]?i(m):be(m)?(n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),u):Fe(n,c,"linePrefix",5)(m)}function c(m){const f=o.events[o.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(m):be(m)?u(m):i(m)}}const Ik={name:"codeText",previous:Rk,resolve:Ak,tokenize:Tk};function Ak(n){let a=n.length-4,i=3,o,u;if((n[i][1].type==="lineEnding"||n[i][1].type==="space")&&(n[a][1].type==="lineEnding"||n[a][1].type==="space")){for(o=i;++o<a;)if(n[o][1].type==="codeTextData"){n[i][1].type="codeTextPadding",n[a][1].type="codeTextPadding",i+=2,a-=2;break}}for(o=i-1,a++;++o<=a;)u===void 0?o!==a&&n[o][1].type!=="lineEnding"&&(u=o):(o===a||n[o][1].type==="lineEnding")&&(n[u][1].type="codeTextData",o!==u+2&&(n[u][1].end=n[o-1][1].end,n.splice(u+2,o-u-2),a-=o-u-2,o=u+2),u=void 0);return n}function Rk(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Tk(n,a,i){let o=0,u,c;return m;function m(v){return n.enter("codeText"),n.enter("codeTextSequence"),f(v)}function f(v){return v===96?(n.consume(v),o++,f):(n.exit("codeTextSequence"),h(v))}function h(v){return v===null?i(v):v===32?(n.enter("space"),n.consume(v),n.exit("space"),h):v===96?(c=n.enter("codeTextSequence"),u=0,x(v)):be(v)?(n.enter("lineEnding"),n.consume(v),n.exit("lineEnding"),h):(n.enter("codeTextData"),g(v))}function g(v){return v===null||v===32||v===96||be(v)?(n.exit("codeTextData"),h(v)):(n.consume(v),g)}function x(v){return v===96?(n.consume(v),u++,x):u===o?(n.exit("codeTextSequence"),n.exit("codeText"),a(v)):(c.type="codeTextData",g(v))}}class Mk{constructor(a){this.left=a?[...a]:[],this.right=[]}get(a){if(a<0||a>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+a+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return a<this.left.length?this.left[a]:this.right[this.right.length-a+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(a,i){const o=i??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(a,o):a>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-a+this.left.length).reverse():this.left.slice(a).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(a,i,o){const u=i||0;this.setCursor(Math.trunc(a));const c=this.right.splice(this.right.length-u,Number.POSITIVE_INFINITY);return o&&Oa(this.left,o),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(a){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(a)}pushMany(a){this.setCursor(Number.POSITIVE_INFINITY),Oa(this.left,a)}unshift(a){this.setCursor(0),this.right.push(a)}unshiftMany(a){this.setCursor(0),Oa(this.right,a.reverse())}setCursor(a){if(!(a===this.left.length||a>this.left.length&&this.right.length===0||a<0&&this.left.length===0))if(a<this.left.length){const i=this.left.splice(a,Number.POSITIVE_INFINITY);Oa(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-a,Number.POSITIVE_INFINITY);Oa(this.left,i.reverse())}}}function Oa(n,a){let i=0;if(a.length<1e4)n.push(...a);else for(;i<a.length;)n.push(...a.slice(i,i+1e4)),i+=1e4}function Cf(n){const a={};let i=-1,o,u,c,m,f,h,g;const x=new Mk(n);for(;++i<x.length;){for(;i in a;)i=a[i];if(o=x.get(i),i&&o[1].type==="chunkFlow"&&x.get(i-1)[1].type==="listItemPrefix"&&(h=o[1]._tokenizer.events,c=0,c<h.length&&h[c][1].type==="lineEndingBlank"&&(c+=2),c<h.length&&h[c][1].type==="content"))for(;++c<h.length&&h[c][1].type!=="content";)h[c][1].type==="chunkText"&&(h[c][1]._isInFirstContentOfListItem=!0,c++);if(o[0]==="enter")o[1].contentType&&(Object.assign(a,zk(x,i)),i=a[i],g=!0);else if(o[1]._container){for(c=i,u=void 0;c--;)if(m=x.get(c),m[1].type==="lineEnding"||m[1].type==="lineEndingBlank")m[0]==="enter"&&(u&&(x.get(u)[1].type="lineEndingBlank"),m[1].type="lineEnding",u=c);else if(!(m[1].type==="linePrefix"||m[1].type==="listItemIndent"))break;u&&(o[1].end={...x.get(u)[1].start},f=x.slice(u,i),f.unshift(o),x.splice(u,i-u+1,f))}}return an(n,0,Number.POSITIVE_INFINITY,x.slice(0)),!g}function zk(n,a){const i=n.get(a)[1],o=n.get(a)[2];let u=a-1;const c=[];let m=i._tokenizer;m||(m=o.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(m._contentTypeTextTrailing=!0));const f=m.events,h=[],g={};let x,v,b=-1,k=i,z=0,M=0;const I=[M];for(;k;){for(;n.get(++u)[1]!==k;);c.push(u),k._tokenizer||(x=o.sliceStream(k),k.next||x.push(null),v&&m.defineSkip(k.start),k._isInFirstContentOfListItem&&(m._gfmTasklistFirstContentOfListItem=!0),m.write(x),k._isInFirstContentOfListItem&&(m._gfmTasklistFirstContentOfListItem=void 0)),v=k,k=k.next}for(k=i;++b<f.length;)f[b][0]==="exit"&&f[b-1][0]==="enter"&&f[b][1].type===f[b-1][1].type&&f[b][1].start.line!==f[b][1].end.line&&(M=b+1,I.push(M),k._tokenizer=void 0,k.previous=void 0,k=k.next);for(m.events=[],k?(k._tokenizer=void 0,k.previous=void 0):I.pop(),b=I.length;b--;){const R=f.slice(I[b],I[b+1]),U=c.pop();h.push([U,U+R.length-1]),n.splice(U,2,R)}for(h.reverse(),b=-1;++b<h.length;)g[z+h[b][0]]=z+h[b][1],z+=h[b][1]-h[b][0]-1;return g}const Lk={resolve:Dk,tokenize:Fk},_k={partial:!0,tokenize:Ok};function Dk(n){return Cf(n),n}function Fk(n,a){let i;return o;function o(f){return n.enter("content"),i=n.enter("chunkContent",{contentType:"content"}),u(f)}function u(f){return f===null?c(f):be(f)?n.check(_k,m,c)(f):(n.consume(f),u)}function c(f){return n.exit("chunkContent"),n.exit("content"),a(f)}function m(f){return n.consume(f),n.exit("chunkContent"),i.next=n.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,u}}function Ok(n,a,i){const o=this;return u;function u(m){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),Fe(n,c,"linePrefix")}function c(m){if(m===null||be(m))return i(m);const f=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(m):n.interrupt(o.parser.constructs.flow,i,a)(m)}}function Nf(n,a,i,o,u,c,m,f,h){const g=h||Number.POSITIVE_INFINITY;let x=0;return v;function v(R){return R===60?(n.enter(o),n.enter(u),n.enter(c),n.consume(R),n.exit(c),b):R===null||R===32||R===41||tu(R)?i(R):(n.enter(o),n.enter(m),n.enter(f),n.enter("chunkString",{contentType:"string"}),M(R))}function b(R){return R===62?(n.enter(c),n.consume(R),n.exit(c),n.exit(u),n.exit(o),a):(n.enter(f),n.enter("chunkString",{contentType:"string"}),k(R))}function k(R){return R===62?(n.exit("chunkString"),n.exit(f),b(R)):R===null||R===60||be(R)?i(R):(n.consume(R),R===92?z:k)}function z(R){return R===60||R===62||R===92?(n.consume(R),k):k(R)}function M(R){return!x&&(R===null||R===41||St(R))?(n.exit("chunkString"),n.exit(f),n.exit(m),n.exit(o),a(R)):x<g&&R===40?(n.consume(R),x++,M):R===41?(n.consume(R),x--,M):R===null||R===32||R===40||tu(R)?i(R):(n.consume(R),R===92?I:M)}function I(R){return R===40||R===41||R===92?(n.consume(R),M):M(R)}}function Pf(n,a,i,o,u,c){const m=this;let f=0,h;return g;function g(k){return n.enter(o),n.enter(u),n.consume(k),n.exit(u),n.enter(c),x}function x(k){return f>999||k===null||k===91||k===93&&!h||k===94&&!f&&"_hiddenFootnoteSupport"in m.parser.constructs?i(k):k===93?(n.exit(c),n.enter(u),n.consume(k),n.exit(u),n.exit(o),a):be(k)?(n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),x):(n.enter("chunkString",{contentType:"string"}),v(k))}function v(k){return k===null||k===91||k===93||be(k)||f++>999?(n.exit("chunkString"),x(k)):(n.consume(k),h||(h=!ze(k)),k===92?b:v)}function b(k){return k===91||k===92||k===93?(n.consume(k),f++,v):v(k)}}function Ef(n,a,i,o,u,c){let m;return f;function f(b){return b===34||b===39||b===40?(n.enter(o),n.enter(u),n.consume(b),n.exit(u),m=b===40?41:b,h):i(b)}function h(b){return b===m?(n.enter(u),n.consume(b),n.exit(u),n.exit(o),a):(n.enter(c),g(b))}function g(b){return b===m?(n.exit(c),h(m)):b===null?i(b):be(b)?(n.enter("lineEnding"),n.consume(b),n.exit("lineEnding"),Fe(n,g,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),x(b))}function x(b){return b===m||b===null||be(b)?(n.exit("chunkString"),g(b)):(n.consume(b),b===92?v:x)}function v(b){return b===m||b===92?(n.consume(b),x):x(b)}}function Va(n,a){let i;return o;function o(u){return be(u)?(n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),i=!0,o):ze(u)?Fe(n,o,i?"linePrefix":"lineSuffix")(u):a(u)}}const Bk={name:"definition",tokenize:Hk},Uk={partial:!0,tokenize:Vk};function Hk(n,a,i){const o=this;let u;return c;function c(k){return n.enter("definition"),m(k)}function m(k){return Pf.call(o,n,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(k)}function f(k){return u=Ur(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),k===58?(n.enter("definitionMarker"),n.consume(k),n.exit("definitionMarker"),h):i(k)}function h(k){return St(k)?Va(n,g)(k):g(k)}function g(k){return Nf(n,x,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(k)}function x(k){return n.attempt(Uk,v,v)(k)}function v(k){return ze(k)?Fe(n,b,"whitespace")(k):b(k)}function b(k){return k===null||be(k)?(n.exit("definition"),o.parser.defined.push(u),a(k)):i(k)}}function Vk(n,a,i){return o;function o(f){return St(f)?Va(n,u)(f):i(f)}function u(f){return Ef(n,c,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function c(f){return ze(f)?Fe(n,m,"whitespace")(f):m(f)}function m(f){return f===null||be(f)?a(f):i(f)}}const Wk={name:"hardBreakEscape",tokenize:$k};function $k(n,a,i){return o;function o(c){return n.enter("hardBreakEscape"),n.consume(c),u}function u(c){return be(c)?(n.exit("hardBreakEscape"),a(c)):i(c)}}const qk={name:"headingAtx",resolve:Gk,tokenize:Qk};function Gk(n,a){let i=n.length-2,o=3,u,c;return n[o][1].type==="whitespace"&&(o+=2),i-2>o&&n[i][1].type==="whitespace"&&(i-=2),n[i][1].type==="atxHeadingSequence"&&(o===i-1||i-4>o&&n[i-2][1].type==="whitespace")&&(i-=o+1===i?2:4),i>o&&(u={type:"atxHeadingText",start:n[o][1].start,end:n[i][1].end},c={type:"chunkText",start:n[o][1].start,end:n[i][1].end,contentType:"text"},an(n,o,i-o+1,[["enter",u,a],["enter",c,a],["exit",c,a],["exit",u,a]])),n}function Qk(n,a,i){let o=0;return u;function u(x){return n.enter("atxHeading"),c(x)}function c(x){return n.enter("atxHeadingSequence"),m(x)}function m(x){return x===35&&o++<6?(n.consume(x),m):x===null||St(x)?(n.exit("atxHeadingSequence"),f(x)):i(x)}function f(x){return x===35?(n.enter("atxHeadingSequence"),h(x)):x===null||be(x)?(n.exit("atxHeading"),a(x)):ze(x)?Fe(n,f,"whitespace")(x):(n.enter("atxHeadingText"),g(x))}function h(x){return x===35?(n.consume(x),h):(n.exit("atxHeadingSequence"),f(x))}function g(x){return x===null||x===35||St(x)?(n.exit("atxHeadingText"),f(x)):(n.consume(x),g)}}const Kk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ip=["pre","script","style","textarea"],Yk={concrete:!0,name:"htmlFlow",resolveTo:Zk,tokenize:eb},Xk={partial:!0,tokenize:nb},Jk={partial:!0,tokenize:tb};function Zk(n){let a=n.length;for(;a--&&!(n[a][0]==="enter"&&n[a][1].type==="htmlFlow"););return a>1&&n[a-2][1].type==="linePrefix"&&(n[a][1].start=n[a-2][1].start,n[a+1][1].start=n[a-2][1].start,n.splice(a-2,2)),n}function eb(n,a,i){const o=this;let u,c,m,f,h;return g;function g(S){return x(S)}function x(S){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(S),v}function v(S){return S===33?(n.consume(S),b):S===47?(n.consume(S),c=!0,M):S===63?(n.consume(S),u=3,o.interrupt?a:w):rn(S)?(n.consume(S),m=String.fromCharCode(S),I):i(S)}function b(S){return S===45?(n.consume(S),u=2,k):S===91?(n.consume(S),u=5,f=0,z):rn(S)?(n.consume(S),u=4,o.interrupt?a:w):i(S)}function k(S){return S===45?(n.consume(S),o.interrupt?a:w):i(S)}function z(S){const ie="CDATA[";return S===ie.charCodeAt(f++)?(n.consume(S),f===ie.length?o.interrupt?a:Y:z):i(S)}function M(S){return rn(S)?(n.consume(S),m=String.fromCharCode(S),I):i(S)}function I(S){if(S===null||S===47||S===62||St(S)){const ie=S===47,we=m.toLowerCase();return!ie&&!c&&ip.includes(we)?(u=1,o.interrupt?a(S):Y(S)):Kk.includes(m.toLowerCase())?(u=6,ie?(n.consume(S),R):o.interrupt?a(S):Y(S)):(u=7,o.interrupt&&!o.parser.lazy[o.now().line]?i(S):c?U(S):B(S))}return S===45||Tt(S)?(n.consume(S),m+=String.fromCharCode(S),I):i(S)}function R(S){return S===62?(n.consume(S),o.interrupt?a:Y):i(S)}function U(S){return ze(S)?(n.consume(S),U):ge(S)}function B(S){return S===47?(n.consume(S),ge):S===58||S===95||rn(S)?(n.consume(S),Z):ze(S)?(n.consume(S),B):ge(S)}function Z(S){return S===45||S===46||S===58||S===95||Tt(S)?(n.consume(S),Z):ce(S)}function ce(S){return S===61?(n.consume(S),D):ze(S)?(n.consume(S),ce):B(S)}function D(S){return S===null||S===60||S===61||S===62||S===96?i(S):S===34||S===39?(n.consume(S),h=S,le):ze(S)?(n.consume(S),D):Q(S)}function le(S){return S===h?(n.consume(S),h=null,de):S===null||be(S)?i(S):(n.consume(S),le)}function Q(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||St(S)?ce(S):(n.consume(S),Q)}function de(S){return S===47||S===62||ze(S)?B(S):i(S)}function ge(S){return S===62?(n.consume(S),J):i(S)}function J(S){return S===null||be(S)?Y(S):ze(S)?(n.consume(S),J):i(S)}function Y(S){return S===45&&u===2?(n.consume(S),me):S===60&&u===1?(n.consume(S),ye):S===62&&u===4?(n.consume(S),P):S===63&&u===3?(n.consume(S),w):S===93&&u===5?(n.consume(S),se):be(S)&&(u===6||u===7)?(n.exit("htmlFlowData"),n.check(Xk,O,je)(S)):S===null||be(S)?(n.exit("htmlFlowData"),je(S)):(n.consume(S),Y)}function je(S){return n.check(Jk,te,O)(S)}function te(S){return n.enter("lineEnding"),n.consume(S),n.exit("lineEnding"),G}function G(S){return S===null||be(S)?je(S):(n.enter("htmlFlowData"),Y(S))}function me(S){return S===45?(n.consume(S),w):Y(S)}function ye(S){return S===47?(n.consume(S),m="",_):Y(S)}function _(S){if(S===62){const ie=m.toLowerCase();return ip.includes(ie)?(n.consume(S),P):Y(S)}return rn(S)&&m.length<8?(n.consume(S),m+=String.fromCharCode(S),_):Y(S)}function se(S){return S===93?(n.consume(S),w):Y(S)}function w(S){return S===62?(n.consume(S),P):S===45&&u===2?(n.consume(S),w):Y(S)}function P(S){return S===null||be(S)?(n.exit("htmlFlowData"),O(S)):(n.consume(S),P)}function O(S){return n.exit("htmlFlow"),a(S)}}function tb(n,a,i){const o=this;return u;function u(m){return be(m)?(n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),c):i(m)}function c(m){return o.parser.lazy[o.now().line]?i(m):a(m)}}function nb(n,a,i){return o;function o(u){return n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),n.attempt(zs,a,i)}}const rb={name:"htmlText",tokenize:ab};function ab(n,a,i){const o=this;let u,c,m;return f;function f(w){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(w),h}function h(w){return w===33?(n.consume(w),g):w===47?(n.consume(w),ce):w===63?(n.consume(w),B):rn(w)?(n.consume(w),Q):i(w)}function g(w){return w===45?(n.consume(w),x):w===91?(n.consume(w),c=0,z):rn(w)?(n.consume(w),U):i(w)}function x(w){return w===45?(n.consume(w),k):i(w)}function v(w){return w===null?i(w):w===45?(n.consume(w),b):be(w)?(m=v,ye(w)):(n.consume(w),v)}function b(w){return w===45?(n.consume(w),k):v(w)}function k(w){return w===62?me(w):w===45?b(w):v(w)}function z(w){const P="CDATA[";return w===P.charCodeAt(c++)?(n.consume(w),c===P.length?M:z):i(w)}function M(w){return w===null?i(w):w===93?(n.consume(w),I):be(w)?(m=M,ye(w)):(n.consume(w),M)}function I(w){return w===93?(n.consume(w),R):M(w)}function R(w){return w===62?me(w):w===93?(n.consume(w),R):M(w)}function U(w){return w===null||w===62?me(w):be(w)?(m=U,ye(w)):(n.consume(w),U)}function B(w){return w===null?i(w):w===63?(n.consume(w),Z):be(w)?(m=B,ye(w)):(n.consume(w),B)}function Z(w){return w===62?me(w):B(w)}function ce(w){return rn(w)?(n.consume(w),D):i(w)}function D(w){return w===45||Tt(w)?(n.consume(w),D):le(w)}function le(w){return be(w)?(m=le,ye(w)):ze(w)?(n.consume(w),le):me(w)}function Q(w){return w===45||Tt(w)?(n.consume(w),Q):w===47||w===62||St(w)?de(w):i(w)}function de(w){return w===47?(n.consume(w),me):w===58||w===95||rn(w)?(n.consume(w),ge):be(w)?(m=de,ye(w)):ze(w)?(n.consume(w),de):me(w)}function ge(w){return w===45||w===46||w===58||w===95||Tt(w)?(n.consume(w),ge):J(w)}function J(w){return w===61?(n.consume(w),Y):be(w)?(m=J,ye(w)):ze(w)?(n.consume(w),J):de(w)}function Y(w){return w===null||w===60||w===61||w===62||w===96?i(w):w===34||w===39?(n.consume(w),u=w,je):be(w)?(m=Y,ye(w)):ze(w)?(n.consume(w),Y):(n.consume(w),te)}function je(w){return w===u?(n.consume(w),u=void 0,G):w===null?i(w):be(w)?(m=je,ye(w)):(n.consume(w),je)}function te(w){return w===null||w===34||w===39||w===60||w===61||w===96?i(w):w===47||w===62||St(w)?de(w):(n.consume(w),te)}function G(w){return w===47||w===62||St(w)?de(w):i(w)}function me(w){return w===62?(n.consume(w),n.exit("htmlTextData"),n.exit("htmlText"),a):i(w)}function ye(w){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(w),n.exit("lineEnding"),_}function _(w){return ze(w)?Fe(n,se,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):se(w)}function se(w){return n.enter("htmlTextData"),m(w)}}const ju={name:"labelEnd",resolveAll:lb,resolveTo:ub,tokenize:cb},ib={tokenize:db},sb={tokenize:mb},ob={tokenize:pb};function lb(n){let a=-1;const i=[];for(;++a<n.length;){const o=n[a][1];if(i.push(n[a]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const u=o.type==="labelImage"?4:2;o.type="data",a+=u}}return n.length!==i.length&&an(n,0,n.length,i),n}function ub(n,a){let i=n.length,o=0,u,c,m,f;for(;i--;)if(u=n[i][1],c){if(u.type==="link"||u.type==="labelLink"&&u._inactive)break;n[i][0]==="enter"&&u.type==="labelLink"&&(u._inactive=!0)}else if(m){if(n[i][0]==="enter"&&(u.type==="labelImage"||u.type==="labelLink")&&!u._balanced&&(c=i,u.type!=="labelLink")){o=2;break}}else u.type==="labelEnd"&&(m=i);const h={type:n[c][1].type==="labelLink"?"link":"image",start:{...n[c][1].start},end:{...n[n.length-1][1].end}},g={type:"label",start:{...n[c][1].start},end:{...n[m][1].end}},x={type:"labelText",start:{...n[c+o+2][1].end},end:{...n[m-2][1].start}};return f=[["enter",h,a],["enter",g,a]],f=Bt(f,n.slice(c+1,c+o+3)),f=Bt(f,[["enter",x,a]]),f=Bt(f,Su(a.parser.constructs.insideSpan.null,n.slice(c+o+4,m-3),a)),f=Bt(f,[["exit",x,a],n[m-2],n[m-1],["exit",g,a]]),f=Bt(f,n.slice(m+1)),f=Bt(f,[["exit",h,a]]),an(n,c,n.length,f),n}function cb(n,a,i){const o=this;let u=o.events.length,c,m;for(;u--;)if((o.events[u][1].type==="labelImage"||o.events[u][1].type==="labelLink")&&!o.events[u][1]._balanced){c=o.events[u][1];break}return f;function f(b){return c?c._inactive?v(b):(m=o.parser.defined.includes(Ur(o.sliceSerialize({start:c.end,end:o.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(b),n.exit("labelMarker"),n.exit("labelEnd"),h):i(b)}function h(b){return b===40?n.attempt(ib,x,m?x:v)(b):b===91?n.attempt(sb,x,m?g:v)(b):m?x(b):v(b)}function g(b){return n.attempt(ob,x,v)(b)}function x(b){return a(b)}function v(b){return c._balanced=!0,i(b)}}function db(n,a,i){return o;function o(v){return n.enter("resource"),n.enter("resourceMarker"),n.consume(v),n.exit("resourceMarker"),u}function u(v){return St(v)?Va(n,c)(v):c(v)}function c(v){return v===41?x(v):Nf(n,m,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function m(v){return St(v)?Va(n,h)(v):x(v)}function f(v){return i(v)}function h(v){return v===34||v===39||v===40?Ef(n,g,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):x(v)}function g(v){return St(v)?Va(n,x)(v):x(v)}function x(v){return v===41?(n.enter("resourceMarker"),n.consume(v),n.exit("resourceMarker"),n.exit("resource"),a):i(v)}}function mb(n,a,i){const o=this;return u;function u(f){return Pf.call(o,n,c,m,"reference","referenceMarker","referenceString")(f)}function c(f){return o.parser.defined.includes(Ur(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?a(f):i(f)}function m(f){return i(f)}}function pb(n,a,i){return o;function o(c){return n.enter("reference"),n.enter("referenceMarker"),n.consume(c),n.exit("referenceMarker"),u}function u(c){return c===93?(n.enter("referenceMarker"),n.consume(c),n.exit("referenceMarker"),n.exit("reference"),a):i(c)}}const fb={name:"labelStartImage",resolveAll:ju.resolveAll,tokenize:hb};function hb(n,a,i){const o=this;return u;function u(f){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(f),n.exit("labelImageMarker"),c}function c(f){return f===91?(n.enter("labelMarker"),n.consume(f),n.exit("labelMarker"),n.exit("labelImage"),m):i(f)}function m(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?i(f):a(f)}}const gb={name:"labelStartLink",resolveAll:ju.resolveAll,tokenize:xb};function xb(n,a,i){const o=this;return u;function u(m){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(m),n.exit("labelMarker"),n.exit("labelLink"),c}function c(m){return m===94&&"_hiddenFootnoteSupport"in o.parser.constructs?i(m):a(m)}}const _l={name:"lineEnding",tokenize:yb};function yb(n,a){return i;function i(o){return n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),Fe(n,a,"linePrefix")}}const ks={name:"thematicBreak",tokenize:vb};function vb(n,a,i){let o=0,u;return c;function c(g){return n.enter("thematicBreak"),m(g)}function m(g){return u=g,f(g)}function f(g){return g===u?(n.enter("thematicBreakSequence"),h(g)):o>=3&&(g===null||be(g))?(n.exit("thematicBreak"),a(g)):i(g)}function h(g){return g===u?(n.consume(g),o++,h):(n.exit("thematicBreakSequence"),ze(g)?Fe(n,f,"whitespace")(g):f(g))}}const bt={continuation:{tokenize:Sb},exit:Cb,name:"list",tokenize:wb},kb={partial:!0,tokenize:Nb},bb={partial:!0,tokenize:jb};function wb(n,a,i){const o=this,u=o.events[o.events.length-1];let c=u&&u[1].type==="linePrefix"?u[2].sliceSerialize(u[1],!0).length:0,m=0;return f;function f(k){const z=o.containerState.type||(k===42||k===43||k===45?"listUnordered":"listOrdered");if(z==="listUnordered"?!o.containerState.marker||k===o.containerState.marker:nu(k)){if(o.containerState.type||(o.containerState.type=z,n.enter(z,{_container:!0})),z==="listUnordered")return n.enter("listItemPrefix"),k===42||k===45?n.check(ks,i,g)(k):g(k);if(!o.interrupt||k===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),h(k)}return i(k)}function h(k){return nu(k)&&++m<10?(n.consume(k),h):(!o.interrupt||m<2)&&(o.containerState.marker?k===o.containerState.marker:k===41||k===46)?(n.exit("listItemValue"),g(k)):i(k)}function g(k){return n.enter("listItemMarker"),n.consume(k),n.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||k,n.check(zs,o.interrupt?i:x,n.attempt(kb,b,v))}function x(k){return o.containerState.initialBlankLine=!0,c++,b(k)}function v(k){return ze(k)?(n.enter("listItemPrefixWhitespace"),n.consume(k),n.exit("listItemPrefixWhitespace"),b):i(k)}function b(k){return o.containerState.size=c+o.sliceSerialize(n.exit("listItemPrefix"),!0).length,a(k)}}function Sb(n,a,i){const o=this;return o.containerState._closeFlow=void 0,n.check(zs,u,c);function u(f){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Fe(n,a,"listItemIndent",o.containerState.size+1)(f)}function c(f){return o.containerState.furtherBlankLines||!ze(f)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,m(f)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,n.attempt(bb,a,m)(f))}function m(f){return o.containerState._closeFlow=!0,o.interrupt=void 0,Fe(n,n.attempt(bt,a,i),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function jb(n,a,i){const o=this;return Fe(n,u,"listItemIndent",o.containerState.size+1);function u(c){const m=o.events[o.events.length-1];return m&&m[1].type==="listItemIndent"&&m[2].sliceSerialize(m[1],!0).length===o.containerState.size?a(c):i(c)}}function Cb(n){n.exit(this.containerState.type)}function Nb(n,a,i){const o=this;return Fe(n,u,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function u(c){const m=o.events[o.events.length-1];return!ze(c)&&m&&m[1].type==="listItemPrefixWhitespace"?a(c):i(c)}}const sp={name:"setextUnderline",resolveTo:Pb,tokenize:Eb};function Pb(n,a){let i=n.length,o,u,c;for(;i--;)if(n[i][0]==="enter"){if(n[i][1].type==="content"){o=i;break}n[i][1].type==="paragraph"&&(u=i)}else n[i][1].type==="content"&&n.splice(i,1),!c&&n[i][1].type==="definition"&&(c=i);const m={type:"setextHeading",start:{...n[o][1].start},end:{...n[n.length-1][1].end}};return n[u][1].type="setextHeadingText",c?(n.splice(u,0,["enter",m,a]),n.splice(c+1,0,["exit",n[o][1],a]),n[o][1].end={...n[c][1].end}):n[o][1]=m,n.push(["exit",m,a]),n}function Eb(n,a,i){const o=this;let u;return c;function c(g){let x=o.events.length,v;for(;x--;)if(o.events[x][1].type!=="lineEnding"&&o.events[x][1].type!=="linePrefix"&&o.events[x][1].type!=="content"){v=o.events[x][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||v)?(n.enter("setextHeadingLine"),u=g,m(g)):i(g)}function m(g){return n.enter("setextHeadingLineSequence"),f(g)}function f(g){return g===u?(n.consume(g),f):(n.exit("setextHeadingLineSequence"),ze(g)?Fe(n,h,"lineSuffix")(g):h(g))}function h(g){return g===null||be(g)?(n.exit("setextHeadingLine"),a(g)):i(g)}}const Ib={tokenize:Ab};function Ab(n){const a=this,i=n.attempt(zs,o,n.attempt(this.parser.constructs.flowInitial,u,Fe(n,n.attempt(this.parser.constructs.flow,u,n.attempt(Lk,u)),"linePrefix")));return i;function o(c){if(c===null){n.consume(c);return}return n.enter("lineEndingBlank"),n.consume(c),n.exit("lineEndingBlank"),a.currentConstruct=void 0,i}function u(c){if(c===null){n.consume(c);return}return n.enter("lineEnding"),n.consume(c),n.exit("lineEnding"),a.currentConstruct=void 0,i}}const Rb={resolveAll:Af()},Tb=If("string"),Mb=If("text");function If(n){return{resolveAll:Af(n==="text"?zb:void 0),tokenize:a};function a(i){const o=this,u=this.parser.constructs[n],c=i.attempt(u,m,f);return m;function m(x){return g(x)?c(x):f(x)}function f(x){if(x===null){i.consume(x);return}return i.enter("data"),i.consume(x),h}function h(x){return g(x)?(i.exit("data"),c(x)):(i.consume(x),h)}function g(x){if(x===null)return!0;const v=u[x];let b=-1;if(v)for(;++b<v.length;){const k=v[b];if(!k.previous||k.previous.call(o,o.previous))return!0}return!1}}}function Af(n){return a;function a(i,o){let u=-1,c;for(;++u<=i.length;)c===void 0?i[u]&&i[u][1].type==="data"&&(c=u,u++):(!i[u]||i[u][1].type!=="data")&&(u!==c+2&&(i[c][1].end=i[u-1][1].end,i.splice(c+2,u-c-2),u=c+2),c=void 0);return n?n(i,o):i}}function zb(n,a){let i=0;for(;++i<=n.length;)if((i===n.length||n[i][1].type==="lineEnding")&&n[i-1][1].type==="data"){const o=n[i-1][1],u=a.sliceStream(o);let c=u.length,m=-1,f=0,h;for(;c--;){const g=u[c];if(typeof g=="string"){for(m=g.length;g.charCodeAt(m-1)===32;)f++,m--;if(m)break;m=-1}else if(g===-2)h=!0,f++;else if(g!==-1){c++;break}}if(a._contentTypeTextTrailing&&i===n.length&&(f=0),f){const g={type:i===n.length||h||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?m:o.start._bufferIndex+m,_index:o.start._index+c,line:o.end.line,column:o.end.column-f,offset:o.end.offset-f},end:{...o.end}};o.end={...g.start},o.start.offset===o.end.offset?Object.assign(o,g):(n.splice(i,0,["enter",g,a],["exit",g,a]),i+=2)}i++}return n}const Lb={42:bt,43:bt,45:bt,48:bt,49:bt,50:bt,51:bt,52:bt,53:bt,54:bt,55:bt,56:bt,57:bt,62:wf},_b={91:Bk},Db={[-2]:Ll,[-1]:Ll,32:Ll},Fb={35:qk,42:ks,45:[sp,ks],60:Yk,61:sp,95:ks,96:ap,126:ap},Ob={38:jf,92:Sf},Bb={[-5]:_l,[-4]:_l,[-3]:_l,33:fb,38:jf,42:ru,60:[gk,rb],91:gb,92:[Wk,Sf],93:ju,95:ru,96:Ik},Ub={null:[ru,Rb]},Hb={null:[42,95]},Vb={null:[]},Wb=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Hb,contentInitial:_b,disable:Vb,document:Lb,flow:Fb,flowInitial:Db,insideSpan:Ub,string:Ob,text:Bb},Symbol.toStringTag,{value:"Module"}));function $b(n,a,i){let o={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const u={},c=[];let m=[],f=[];const h={attempt:le(ce),check:le(D),consume:U,enter:B,exit:Z,interrupt:le(D,{interrupt:!0})},g={code:null,containerState:{},defineSkip:M,events:[],now:z,parser:n,previous:null,sliceSerialize:b,sliceStream:k,write:v};let x=a.tokenize.call(g,h);return a.resolveAll&&c.push(a),g;function v(J){return m=Bt(m,J),I(),m[m.length-1]!==null?[]:(Q(a,0),g.events=Su(c,g.events,g),g.events)}function b(J,Y){return Gb(k(J),Y)}function k(J){return qb(m,J)}function z(){const{_bufferIndex:J,_index:Y,line:je,column:te,offset:G}=o;return{_bufferIndex:J,_index:Y,line:je,column:te,offset:G}}function M(J){u[J.line]=J.column,ge()}function I(){let J;for(;o._index<m.length;){const Y=m[o._index];if(typeof Y=="string")for(J=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===J&&o._bufferIndex<Y.length;)R(Y.charCodeAt(o._bufferIndex));else R(Y)}}function R(J){x=x(J)}function U(J){be(J)?(o.line++,o.column=1,o.offset+=J===-3?2:1,ge()):J!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===m[o._index].length&&(o._bufferIndex=-1,o._index++)),g.previous=J}function B(J,Y){const je=Y||{};return je.type=J,je.start=z(),g.events.push(["enter",je,g]),f.push(je),je}function Z(J){const Y=f.pop();return Y.end=z(),g.events.push(["exit",Y,g]),Y}function ce(J,Y){Q(J,Y.from)}function D(J,Y){Y.restore()}function le(J,Y){return je;function je(te,G,me){let ye,_,se,w;return Array.isArray(te)?O(te):"tokenize"in te?O([te]):P(te);function P(pe){return xe;function xe(Ce){const Ae=Ce!==null&&pe[Ce],Oe=Ce!==null&&pe.null,Ct=[...Array.isArray(Ae)?Ae:Ae?[Ae]:[],...Array.isArray(Oe)?Oe:Oe?[Oe]:[]];return O(Ct)(Ce)}}function O(pe){return ye=pe,_=0,pe.length===0?me:S(pe[_])}function S(pe){return xe;function xe(Ce){return w=de(),se=pe,pe.partial||(g.currentConstruct=pe),pe.name&&g.parser.constructs.disable.null.includes(pe.name)?we():pe.tokenize.call(Y?Object.assign(Object.create(g),Y):g,h,ie,we)(Ce)}}function ie(pe){return J(se,w),G}function we(pe){return w.restore(),++_<ye.length?S(ye[_]):me}}}function Q(J,Y){J.resolveAll&&!c.includes(J)&&c.push(J),J.resolve&&an(g.events,Y,g.events.length-Y,J.resolve(g.events.slice(Y),g)),J.resolveTo&&(g.events=J.resolveTo(g.events,g))}function de(){const J=z(),Y=g.previous,je=g.currentConstruct,te=g.events.length,G=Array.from(f);return{from:te,restore:me};function me(){o=J,g.previous=Y,g.currentConstruct=je,g.events.length=te,f=G,ge()}}function ge(){o.line in u&&o.column<2&&(o.column=u[o.line],o.offset+=u[o.line]-1)}}function qb(n,a){const i=a.start._index,o=a.start._bufferIndex,u=a.end._index,c=a.end._bufferIndex;let m;if(i===u)m=[n[i].slice(o,c)];else{if(m=n.slice(i,u),o>-1){const f=m[0];typeof f=="string"?m[0]=f.slice(o):m.shift()}c>0&&m.push(n[u].slice(0,c))}return m}function Gb(n,a){let i=-1;const o=[];let u;for(;++i<n.length;){const c=n[i];let m;if(typeof c=="string")m=c;else switch(c){case-5:{m="\r";break}case-4:{m=`
`;break}case-3:{m=`\r
`;break}case-2:{m=a?" ":"	";break}case-1:{if(!a&&u)continue;m=" ";break}default:m=String.fromCharCode(c)}u=c===-2,o.push(m)}return o.join("")}function Qb(n){const o={constructs:tk([Wb,...(n||{}).extensions||[]]),content:u(uk),defined:[],document:u(dk),flow:u(Ib),lazy:{},string:u(Tb),text:u(Mb)};return o;function u(c){return m;function m(f){return $b(o,c,f)}}}function Kb(n){for(;!Cf(n););return n}const op=/[\0\t\n\r]/g;function Yb(){let n=1,a="",i=!0,o;return u;function u(c,m,f){const h=[];let g,x,v,b,k;for(c=a+(typeof c=="string"?c.toString():new TextDecoder(m||void 0).decode(c)),v=0,a="",i&&(c.charCodeAt(0)===65279&&v++,i=void 0);v<c.length;){if(op.lastIndex=v,g=op.exec(c),b=g&&g.index!==void 0?g.index:c.length,k=c.charCodeAt(b),!g){a=c.slice(v);break}if(k===10&&v===b&&o)h.push(-3),o=void 0;else switch(o&&(h.push(-5),o=void 0),v<b&&(h.push(c.slice(v,b)),n+=b-v),k){case 0:{h.push(65533),n++;break}case 9:{for(x=Math.ceil(n/4)*4,h.push(-2);n++<x;)h.push(-1);break}case 10:{h.push(-4),n=1;break}default:o=!0,n=1}v=b+1}return f&&(o&&h.push(-5),a&&h.push(a),h.push(null)),h}}const Xb=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Jb(n){return n.replace(Xb,Zb)}function Zb(n,a,i){if(a)return a;if(i.charCodeAt(0)===35){const u=i.charCodeAt(1),c=u===120||u===88;return bf(i.slice(c?2:1),c?16:10)}return wu(i)||n}const Rf={}.hasOwnProperty;function ew(n,a,i){return typeof a!="string"&&(i=a,a=void 0),tw(i)(Kb(Qb(i).document().write(Yb()(n,a,!0))))}function tw(n){const a={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(dr),autolinkProtocol:de,autolinkEmail:de,atxHeading:c(Kr),blockQuote:c(Oe),characterEscape:de,characterReference:de,codeFenced:c(Ct),codeFencedFenceInfo:m,codeFencedFenceMeta:m,codeIndented:c(Ct,m),codeText:c(on,m),codeTextData:de,data:de,codeFlowValue:de,definition:c(ur),definitionDestinationString:m,definitionLabelString:m,definitionTitleString:m,emphasis:c(Qr),hardBreakEscape:c(Yr),hardBreakTrailing:c(Yr),htmlFlow:c(cr,m),htmlFlowData:de,htmlText:c(cr,m),htmlTextData:de,image:c(Za),label:m,link:c(dr),listItem:c(bn),listItemValue:b,listOrdered:c(kn,v),listUnordered:c(kn),paragraph:c(Xr),reference:S,referenceString:m,resourceDestinationString:m,resourceTitleString:m,setextHeading:c(Kr),strong:c(ei),thematicBreak:c(ni)},exit:{atxHeading:h(),atxHeadingSequence:ce,autolink:h(),autolinkEmail:Ae,autolinkProtocol:Ce,blockQuote:h(),characterEscapeValue:ge,characterReferenceMarkerHexadecimal:we,characterReferenceMarkerNumeric:we,characterReferenceValue:pe,characterReference:xe,codeFenced:h(I),codeFencedFence:M,codeFencedFenceInfo:k,codeFencedFenceMeta:z,codeFlowValue:ge,codeIndented:h(R),codeText:h(G),codeTextData:ge,data:ge,definition:h(),definitionDestinationString:Z,definitionLabelString:U,definitionTitleString:B,emphasis:h(),hardBreakEscape:h(Y),hardBreakTrailing:h(Y),htmlFlow:h(je),htmlFlowData:ge,htmlText:h(te),htmlTextData:ge,image:h(ye),label:se,labelText:_,lineEnding:J,link:h(me),listItem:h(),listOrdered:h(),listUnordered:h(),paragraph:h(),referenceString:ie,resourceDestinationString:w,resourceTitleString:P,resource:O,setextHeading:h(Q),setextHeadingLineSequence:le,setextHeadingText:D,strong:h(),thematicBreak:h()}};Tf(a,(n||{}).mdastExtensions||[]);const i={};return o;function o(F){let K={type:"root",children:[]};const ve={stack:[K],tokenStack:[],config:a,enter:f,exit:g,buffer:m,resume:x,data:i},Ee=[];let Re=-1;for(;++Re<F.length;)if(F[Re][1].type==="listOrdered"||F[Re][1].type==="listUnordered")if(F[Re][0]==="enter")Ee.push(Re);else{const at=Ee.pop();Re=u(F,at,Re)}for(Re=-1;++Re<F.length;){const at=a[F[Re][0]];Rf.call(at,F[Re][1].type)&&at[F[Re][1].type].call(Object.assign({sliceSerialize:F[Re][2].sliceSerialize},ve),F[Re][1])}if(ve.tokenStack.length>0){const at=ve.tokenStack[ve.tokenStack.length-1];(at[1]||lp).call(ve,void 0,at[0])}for(K.position={start:Vn(F.length>0?F[0][1].start:{line:1,column:1,offset:0}),end:Vn(F.length>0?F[F.length-2][1].end:{line:1,column:1,offset:0})},Re=-1;++Re<a.transforms.length;)K=a.transforms[Re](K)||K;return K}function u(F,K,ve){let Ee=K-1,Re=-1,at=!1,ln,Mt,wn,qn;for(;++Ee<=ve;){const it=F[Ee];switch(it[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{it[0]==="enter"?Re++:Re--,qn=void 0;break}case"lineEndingBlank":{it[0]==="enter"&&(ln&&!qn&&!Re&&!wn&&(wn=Ee),qn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:qn=void 0}if(!Re&&it[0]==="enter"&&it[1].type==="listItemPrefix"||Re===-1&&it[0]==="exit"&&(it[1].type==="listUnordered"||it[1].type==="listOrdered")){if(ln){let Yt=Ee;for(Mt=void 0;Yt--;){const Nt=F[Yt];if(Nt[1].type==="lineEnding"||Nt[1].type==="lineEndingBlank"){if(Nt[0]==="exit")continue;Mt&&(F[Mt][1].type="lineEndingBlank",at=!0),Nt[1].type="lineEnding",Mt=Yt}else if(!(Nt[1].type==="linePrefix"||Nt[1].type==="blockQuotePrefix"||Nt[1].type==="blockQuotePrefixWhitespace"||Nt[1].type==="blockQuoteMarker"||Nt[1].type==="listItemIndent"))break}wn&&(!Mt||wn<Mt)&&(ln._spread=!0),ln.end=Object.assign({},Mt?F[Mt][1].start:it[1].end),F.splice(Mt||Ee,0,["exit",ln,it[2]]),Ee++,ve++}if(it[1].type==="listItemPrefix"){const Yt={type:"listItem",_spread:!1,start:Object.assign({},it[1].start),end:void 0};ln=Yt,F.splice(Ee,0,["enter",Yt,it[2]]),Ee++,ve++,wn=void 0,qn=!0}}}return F[K][1]._spread=at,ve}function c(F,K){return ve;function ve(Ee){f.call(this,F(Ee),Ee),K&&K.call(this,Ee)}}function m(){this.stack.push({type:"fragment",children:[]})}function f(F,K,ve){this.stack[this.stack.length-1].children.push(F),this.stack.push(F),this.tokenStack.push([K,ve||void 0]),F.position={start:Vn(K.start),end:void 0}}function h(F){return K;function K(ve){F&&F.call(this,ve),g.call(this,ve)}}function g(F,K){const ve=this.stack.pop(),Ee=this.tokenStack.pop();if(Ee)Ee[0].type!==F.type&&(K?K.call(this,F,Ee[0]):(Ee[1]||lp).call(this,F,Ee[0]));else throw new Error("Cannot close `"+F.type+"` ("+Ha({start:F.start,end:F.end})+"): it’s not open");ve.position.end=Vn(F.end)}function x(){return Z0(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function b(F){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(F),10),this.data.expectingFirstListItemValue=void 0}}function k(){const F=this.resume(),K=this.stack[this.stack.length-1];K.lang=F}function z(){const F=this.resume(),K=this.stack[this.stack.length-1];K.meta=F}function M(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function I(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function R(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F.replace(/(\r?\n|\r)$/g,"")}function U(F){const K=this.resume(),ve=this.stack[this.stack.length-1];ve.label=K,ve.identifier=Ur(this.sliceSerialize(F)).toLowerCase()}function B(){const F=this.resume(),K=this.stack[this.stack.length-1];K.title=F}function Z(){const F=this.resume(),K=this.stack[this.stack.length-1];K.url=F}function ce(F){const K=this.stack[this.stack.length-1];if(!K.depth){const ve=this.sliceSerialize(F).length;K.depth=ve}}function D(){this.data.setextHeadingSlurpLineEnding=!0}function le(F){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(F).codePointAt(0)===61?1:2}function Q(){this.data.setextHeadingSlurpLineEnding=void 0}function de(F){const ve=this.stack[this.stack.length-1].children;let Ee=ve[ve.length-1];(!Ee||Ee.type!=="text")&&(Ee=ti(),Ee.position={start:Vn(F.start),end:void 0},ve.push(Ee)),this.stack.push(Ee)}function ge(F){const K=this.stack.pop();K.value+=this.sliceSerialize(F),K.position.end=Vn(F.end)}function J(F){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ve=K.children[K.children.length-1];ve.position.end=Vn(F.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&a.canContainEols.includes(K.type)&&(de.call(this,F),ge.call(this,F))}function Y(){this.data.atHardBreak=!0}function je(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F}function te(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F}function G(){const F=this.resume(),K=this.stack[this.stack.length-1];K.value=F}function me(){const F=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";F.type+="Reference",F.referenceType=K,delete F.url,delete F.title}else delete F.identifier,delete F.label;this.data.referenceType=void 0}function ye(){const F=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";F.type+="Reference",F.referenceType=K,delete F.url,delete F.title}else delete F.identifier,delete F.label;this.data.referenceType=void 0}function _(F){const K=this.sliceSerialize(F),ve=this.stack[this.stack.length-2];ve.label=Jb(K),ve.identifier=Ur(K).toLowerCase()}function se(){const F=this.stack[this.stack.length-1],K=this.resume(),ve=this.stack[this.stack.length-1];if(this.data.inReference=!0,ve.type==="link"){const Ee=F.children;ve.children=Ee}else ve.alt=K}function w(){const F=this.resume(),K=this.stack[this.stack.length-1];K.url=F}function P(){const F=this.resume(),K=this.stack[this.stack.length-1];K.title=F}function O(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function ie(F){const K=this.resume(),ve=this.stack[this.stack.length-1];ve.label=K,ve.identifier=Ur(this.sliceSerialize(F)).toLowerCase(),this.data.referenceType="full"}function we(F){this.data.characterReferenceType=F.type}function pe(F){const K=this.sliceSerialize(F),ve=this.data.characterReferenceType;let Ee;ve?(Ee=bf(K,ve==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ee=wu(K);const Re=this.stack[this.stack.length-1];Re.value+=Ee}function xe(F){const K=this.stack.pop();K.position.end=Vn(F.end)}function Ce(F){ge.call(this,F);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(F)}function Ae(F){ge.call(this,F);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(F)}function Oe(){return{type:"blockquote",children:[]}}function Ct(){return{type:"code",lang:null,meta:null,value:""}}function on(){return{type:"inlineCode",value:""}}function ur(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Qr(){return{type:"emphasis",children:[]}}function Kr(){return{type:"heading",depth:0,children:[]}}function Yr(){return{type:"break"}}function cr(){return{type:"html",value:""}}function Za(){return{type:"image",title:null,url:"",alt:null}}function dr(){return{type:"link",title:null,url:"",children:[]}}function kn(F){return{type:"list",ordered:F.type==="listOrdered",start:null,spread:F._spread,children:[]}}function bn(F){return{type:"listItem",spread:F._spread,checked:null,children:[]}}function Xr(){return{type:"paragraph",children:[]}}function ei(){return{type:"strong",children:[]}}function ti(){return{type:"text",value:""}}function ni(){return{type:"thematicBreak"}}}function Vn(n){return{line:n.line,column:n.column,offset:n.offset}}function Tf(n,a){let i=-1;for(;++i<a.length;){const o=a[i];Array.isArray(o)?Tf(n,o):nw(n,o)}}function nw(n,a){let i;for(i in a)if(Rf.call(a,i))switch(i){case"canContainEols":{const o=a[i];o&&n[i].push(...o);break}case"transforms":{const o=a[i];o&&n[i].push(...o);break}case"enter":case"exit":{const o=a[i];o&&Object.assign(n[i],o);break}}}function lp(n,a){throw n?new Error("Cannot close `"+n.type+"` ("+Ha({start:n.start,end:n.end})+"): a different token (`"+a.type+"`, "+Ha({start:a.start,end:a.end})+") is open"):new Error("Cannot close document, a token (`"+a.type+"`, "+Ha({start:a.start,end:a.end})+") is still open")}function rw(n){const a=this;a.parser=i;function i(o){return ew(o,{...a.data("settings"),...n,extensions:a.data("micromarkExtensions")||[],mdastExtensions:a.data("fromMarkdownExtensions")||[]})}}function aw(n,a){const i={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(a),!0)};return n.patch(a,i),n.applyData(a,i)}function iw(n,a){const i={type:"element",tagName:"br",properties:{},children:[]};return n.patch(a,i),[n.applyData(a,i),{type:"text",value:`
`}]}function sw(n,a){const i=a.value?a.value+`
`:"",o={},u=a.lang?a.lang.split(/\s+/):[];u.length>0&&(o.className=["language-"+u[0]]);let c={type:"element",tagName:"code",properties:o,children:[{type:"text",value:i}]};return a.meta&&(c.data={meta:a.meta}),n.patch(a,c),c=n.applyData(a,c),c={type:"element",tagName:"pre",properties:{},children:[c]},n.patch(a,c),c}function ow(n,a){const i={type:"element",tagName:"del",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function lw(n,a){const i={type:"element",tagName:"em",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function uw(n,a){const i=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",o=String(a.identifier).toUpperCase(),u=Gr(o.toLowerCase()),c=n.footnoteOrder.indexOf(o);let m,f=n.footnoteCounts.get(o);f===void 0?(f=0,n.footnoteOrder.push(o),m=n.footnoteOrder.length):m=c+1,f+=1,n.footnoteCounts.set(o,f);const h={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+u,id:i+"fnref-"+u+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(m)}]};n.patch(a,h);const g={type:"element",tagName:"sup",properties:{},children:[h]};return n.patch(a,g),n.applyData(a,g)}function cw(n,a){const i={type:"element",tagName:"h"+a.depth,properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function dw(n,a){if(n.options.allowDangerousHtml){const i={type:"raw",value:a.value};return n.patch(a,i),n.applyData(a,i)}}function Mf(n,a){const i=a.referenceType;let o="]";if(i==="collapsed"?o+="[]":i==="full"&&(o+="["+(a.label||a.identifier)+"]"),a.type==="imageReference")return[{type:"text",value:"!["+a.alt+o}];const u=n.all(a),c=u[0];c&&c.type==="text"?c.value="["+c.value:u.unshift({type:"text",value:"["});const m=u[u.length-1];return m&&m.type==="text"?m.value+=o:u.push({type:"text",value:o}),u}function mw(n,a){const i=String(a.identifier).toUpperCase(),o=n.definitionById.get(i);if(!o)return Mf(n,a);const u={src:Gr(o.url||""),alt:a.alt};o.title!==null&&o.title!==void 0&&(u.title=o.title);const c={type:"element",tagName:"img",properties:u,children:[]};return n.patch(a,c),n.applyData(a,c)}function pw(n,a){const i={src:Gr(a.url)};a.alt!==null&&a.alt!==void 0&&(i.alt=a.alt),a.title!==null&&a.title!==void 0&&(i.title=a.title);const o={type:"element",tagName:"img",properties:i,children:[]};return n.patch(a,o),n.applyData(a,o)}function fw(n,a){const i={type:"text",value:a.value.replace(/\r?\n|\r/g," ")};n.patch(a,i);const o={type:"element",tagName:"code",properties:{},children:[i]};return n.patch(a,o),n.applyData(a,o)}function hw(n,a){const i=String(a.identifier).toUpperCase(),o=n.definitionById.get(i);if(!o)return Mf(n,a);const u={href:Gr(o.url||"")};o.title!==null&&o.title!==void 0&&(u.title=o.title);const c={type:"element",tagName:"a",properties:u,children:n.all(a)};return n.patch(a,c),n.applyData(a,c)}function gw(n,a){const i={href:Gr(a.url)};a.title!==null&&a.title!==void 0&&(i.title=a.title);const o={type:"element",tagName:"a",properties:i,children:n.all(a)};return n.patch(a,o),n.applyData(a,o)}function xw(n,a,i){const o=n.all(a),u=i?yw(i):zf(a),c={},m=[];if(typeof a.checked=="boolean"){const x=o[0];let v;x&&x.type==="element"&&x.tagName==="p"?v=x:(v={type:"element",tagName:"p",properties:{},children:[]},o.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:a.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let f=-1;for(;++f<o.length;){const x=o[f];(u||f!==0||x.type!=="element"||x.tagName!=="p")&&m.push({type:"text",value:`
`}),x.type==="element"&&x.tagName==="p"&&!u?m.push(...x.children):m.push(x)}const h=o[o.length-1];h&&(u||h.type!=="element"||h.tagName!=="p")&&m.push({type:"text",value:`
`});const g={type:"element",tagName:"li",properties:c,children:m};return n.patch(a,g),n.applyData(a,g)}function yw(n){let a=!1;if(n.type==="list"){a=n.spread||!1;const i=n.children;let o=-1;for(;!a&&++o<i.length;)a=zf(i[o])}return a}function zf(n){const a=n.spread;return a??n.children.length>1}function vw(n,a){const i={},o=n.all(a);let u=-1;for(typeof a.start=="number"&&a.start!==1&&(i.start=a.start);++u<o.length;){const m=o[u];if(m.type==="element"&&m.tagName==="li"&&m.properties&&Array.isArray(m.properties.className)&&m.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const c={type:"element",tagName:a.ordered?"ol":"ul",properties:i,children:n.wrap(o,!0)};return n.patch(a,c),n.applyData(a,c)}function kw(n,a){const i={type:"element",tagName:"p",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function bw(n,a){const i={type:"root",children:n.wrap(n.all(a))};return n.patch(a,i),n.applyData(a,i)}function ww(n,a){const i={type:"element",tagName:"strong",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function Sw(n,a){const i=n.all(a),o=i.shift(),u=[];if(o){const m={type:"element",tagName:"thead",properties:{},children:n.wrap([o],!0)};n.patch(a.children[0],m),u.push(m)}if(i.length>0){const m={type:"element",tagName:"tbody",properties:{},children:n.wrap(i,!0)},f=yu(a.children[1]),h=ff(a.children[a.children.length-1]);f&&h&&(m.position={start:f,end:h}),u.push(m)}const c={type:"element",tagName:"table",properties:{},children:n.wrap(u,!0)};return n.patch(a,c),n.applyData(a,c)}function jw(n,a,i){const o=i?i.children:void 0,c=(o?o.indexOf(a):1)===0?"th":"td",m=i&&i.type==="table"?i.align:void 0,f=m?m.length:a.children.length;let h=-1;const g=[];for(;++h<f;){const v=a.children[h],b={},k=m?m[h]:void 0;k&&(b.align=k);let z={type:"element",tagName:c,properties:b,children:[]};v&&(z.children=n.all(v),n.patch(v,z),z=n.applyData(v,z)),g.push(z)}const x={type:"element",tagName:"tr",properties:{},children:n.wrap(g,!0)};return n.patch(a,x),n.applyData(a,x)}function Cw(n,a){const i={type:"element",tagName:"td",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}const up=9,cp=32;function Nw(n){const a=String(n),i=/\r?\n|\r/g;let o=i.exec(a),u=0;const c=[];for(;o;)c.push(dp(a.slice(u,o.index),u>0,!0),o[0]),u=o.index+o[0].length,o=i.exec(a);return c.push(dp(a.slice(u),u>0,!1)),c.join("")}function dp(n,a,i){let o=0,u=n.length;if(a){let c=n.codePointAt(o);for(;c===up||c===cp;)o++,c=n.codePointAt(o)}if(i){let c=n.codePointAt(u-1);for(;c===up||c===cp;)u--,c=n.codePointAt(u-1)}return u>o?n.slice(o,u):""}function Pw(n,a){const i={type:"text",value:Nw(String(a.value))};return n.patch(a,i),n.applyData(a,i)}function Ew(n,a){const i={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(a,i),n.applyData(a,i)}const Iw={blockquote:aw,break:iw,code:sw,delete:ow,emphasis:lw,footnoteReference:uw,heading:cw,html:dw,imageReference:mw,image:pw,inlineCode:fw,linkReference:hw,link:gw,listItem:xw,list:vw,paragraph:kw,root:bw,strong:ww,table:Sw,tableCell:Cw,tableRow:jw,text:Pw,thematicBreak:Ew,toml:hs,yaml:hs,definition:hs,footnoteDefinition:hs};function hs(){}const Lf=-1,Ls=0,Wa=1,Es=2,Cu=3,Nu=4,Pu=5,Eu=6,_f=7,Df=8,mp=typeof self=="object"?self:globalThis,Aw=(n,a)=>{const i=(u,c)=>(n.set(c,u),u),o=u=>{if(n.has(u))return n.get(u);const[c,m]=a[u];switch(c){case Ls:case Lf:return i(m,u);case Wa:{const f=i([],u);for(const h of m)f.push(o(h));return f}case Es:{const f=i({},u);for(const[h,g]of m)f[o(h)]=o(g);return f}case Cu:return i(new Date(m),u);case Nu:{const{source:f,flags:h}=m;return i(new RegExp(f,h),u)}case Pu:{const f=i(new Map,u);for(const[h,g]of m)f.set(o(h),o(g));return f}case Eu:{const f=i(new Set,u);for(const h of m)f.add(o(h));return f}case _f:{const{name:f,message:h}=m;return i(new mp[f](h),u)}case Df:return i(BigInt(m),u);case"BigInt":return i(Object(BigInt(m)),u);case"ArrayBuffer":return i(new Uint8Array(m).buffer,m);case"DataView":{const{buffer:f}=new Uint8Array(m);return i(new DataView(f),m)}}return i(new mp[c](m),u)};return o},pp=n=>Aw(new Map,n)(0),Fr="",{toString:Rw}={},{keys:Tw}=Object,Ba=n=>{const a=typeof n;if(a!=="object"||!n)return[Ls,a];const i=Rw.call(n).slice(8,-1);switch(i){case"Array":return[Wa,Fr];case"Object":return[Es,Fr];case"Date":return[Cu,Fr];case"RegExp":return[Nu,Fr];case"Map":return[Pu,Fr];case"Set":return[Eu,Fr];case"DataView":return[Wa,i]}return i.includes("Array")?[Wa,i]:i.includes("Error")?[_f,i]:[Es,i]},gs=([n,a])=>n===Ls&&(a==="function"||a==="symbol"),Mw=(n,a,i,o)=>{const u=(m,f)=>{const h=o.push(m)-1;return i.set(f,h),h},c=m=>{if(i.has(m))return i.get(m);let[f,h]=Ba(m);switch(f){case Ls:{let x=m;switch(h){case"bigint":f=Df,x=m.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+h);x=null;break;case"undefined":return u([Lf],m)}return u([f,x],m)}case Wa:{if(h){let b=m;return h==="DataView"?b=new Uint8Array(m.buffer):h==="ArrayBuffer"&&(b=new Uint8Array(m)),u([h,[...b]],m)}const x=[],v=u([f,x],m);for(const b of m)x.push(c(b));return v}case Es:{if(h)switch(h){case"BigInt":return u([h,m.toString()],m);case"Boolean":case"Number":case"String":return u([h,m.valueOf()],m)}if(a&&"toJSON"in m)return c(m.toJSON());const x=[],v=u([f,x],m);for(const b of Tw(m))(n||!gs(Ba(m[b])))&&x.push([c(b),c(m[b])]);return v}case Cu:return u([f,m.toISOString()],m);case Nu:{const{source:x,flags:v}=m;return u([f,{source:x,flags:v}],m)}case Pu:{const x=[],v=u([f,x],m);for(const[b,k]of m)(n||!(gs(Ba(b))||gs(Ba(k))))&&x.push([c(b),c(k)]);return v}case Eu:{const x=[],v=u([f,x],m);for(const b of m)(n||!gs(Ba(b)))&&x.push(c(b));return v}}const{message:g}=m;return u([f,{name:h,message:g}],m)};return c},fp=(n,{json:a,lossy:i}={})=>{const o=[];return Mw(!(a||i),!!a,new Map,o)(n),o},Is=typeof structuredClone=="function"?(n,a)=>a&&("json"in a||"lossy"in a)?pp(fp(n,a)):structuredClone(n):(n,a)=>pp(fp(n,a));function zw(n,a){const i=[{type:"text",value:"↩"}];return a>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(a)}]}),i}function Lw(n,a){return"Back to reference "+(n+1)+(a>1?"-"+a:"")}function _w(n){const a=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",i=n.options.footnoteBackContent||zw,o=n.options.footnoteBackLabel||Lw,u=n.options.footnoteLabel||"Footnotes",c=n.options.footnoteLabelTagName||"h2",m=n.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let h=-1;for(;++h<n.footnoteOrder.length;){const g=n.footnoteById.get(n.footnoteOrder[h]);if(!g)continue;const x=n.all(g),v=String(g.identifier).toUpperCase(),b=Gr(v.toLowerCase());let k=0;const z=[],M=n.footnoteCounts.get(v);for(;M!==void 0&&++k<=M;){z.length>0&&z.push({type:"text",value:" "});let U=typeof i=="string"?i:i(h,k);typeof U=="string"&&(U={type:"text",value:U}),z.push({type:"element",tagName:"a",properties:{href:"#"+a+"fnref-"+b+(k>1?"-"+k:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(h,k),className:["data-footnote-backref"]},children:Array.isArray(U)?U:[U]})}const I=x[x.length-1];if(I&&I.type==="element"&&I.tagName==="p"){const U=I.children[I.children.length-1];U&&U.type==="text"?U.value+=" ":I.children.push({type:"text",value:" "}),I.children.push(...z)}else x.push(...z);const R={type:"element",tagName:"li",properties:{id:a+"fn-"+b},children:n.wrap(x,!0)};n.patch(g,R),f.push(R)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...Is(m),id:"footnote-label"},children:[{type:"text",value:u}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(f,!0)},{type:"text",value:`
`}]}}const Ff=(function(n){if(n==null)return Bw;if(typeof n=="function")return _s(n);if(typeof n=="object")return Array.isArray(n)?Dw(n):Fw(n);if(typeof n=="string")return Ow(n);throw new Error("Expected function, string, or object as test")});function Dw(n){const a=[];let i=-1;for(;++i<n.length;)a[i]=Ff(n[i]);return _s(o);function o(...u){let c=-1;for(;++c<a.length;)if(a[c].apply(this,u))return!0;return!1}}function Fw(n){const a=n;return _s(i);function i(o){const u=o;let c;for(c in n)if(u[c]!==a[c])return!1;return!0}}function Ow(n){return _s(a);function a(i){return i&&i.type===n}}function _s(n){return a;function a(i,o,u){return!!(Uw(i)&&n.call(this,i,typeof o=="number"?o:void 0,u||void 0))}}function Bw(){return!0}function Uw(n){return n!==null&&typeof n=="object"&&"type"in n}const Of=[],Hw=!0,hp=!1,Vw="skip";function Ww(n,a,i,o){let u;typeof a=="function"&&typeof i!="function"?(o=i,i=a):u=a;const c=Ff(u),m=o?-1:1;f(n,void 0,[])();function f(h,g,x){const v=h&&typeof h=="object"?h:{};if(typeof v.type=="string"){const k=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(h.type+(k?"<"+k+">":""))+")"})}return b;function b(){let k=Of,z,M,I;if((!a||c(h,g,x[x.length-1]||void 0))&&(k=$w(i(h,x)),k[0]===hp))return k;if("children"in h&&h.children){const R=h;if(R.children&&k[0]!==Vw)for(M=(o?R.children.length:-1)+m,I=x.concat(R);M>-1&&M<R.children.length;){const U=R.children[M];if(z=f(U,M,I)(),z[0]===hp)return z;M=typeof z[1]=="number"?z[1]:M+m}}return k}}}function $w(n){return Array.isArray(n)?n:typeof n=="number"?[Hw,n]:n==null?Of:[n]}function Bf(n,a,i,o){let u,c,m;typeof a=="function"&&typeof i!="function"?(c=void 0,m=a,u=i):(c=a,m=i,u=o),Ww(n,c,f,u);function f(h,g){const x=g[g.length-1],v=x?x.children.indexOf(h):void 0;return m(h,v,x)}}const au={}.hasOwnProperty,qw={};function Gw(n,a){const i=a||qw,o=new Map,u=new Map,c=new Map,m={...Iw,...i.handlers},f={all:g,applyData:Kw,definitionById:o,footnoteById:u,footnoteCounts:c,footnoteOrder:[],handlers:m,one:h,options:i,patch:Qw,wrap:Xw};return Bf(n,function(x){if(x.type==="definition"||x.type==="footnoteDefinition"){const v=x.type==="definition"?o:u,b=String(x.identifier).toUpperCase();v.has(b)||v.set(b,x)}}),f;function h(x,v){const b=x.type,k=f.handlers[b];if(au.call(f.handlers,b)&&k)return k(f,x,v);if(f.options.passThrough&&f.options.passThrough.includes(b)){if("children"in x){const{children:M,...I}=x,R=Is(I);return R.children=f.all(x),R}return Is(x)}return(f.options.unknownHandler||Yw)(f,x,v)}function g(x){const v=[];if("children"in x){const b=x.children;let k=-1;for(;++k<b.length;){const z=f.one(b[k],x);if(z){if(k&&b[k-1].type==="break"&&(!Array.isArray(z)&&z.type==="text"&&(z.value=gp(z.value)),!Array.isArray(z)&&z.type==="element")){const M=z.children[0];M&&M.type==="text"&&(M.value=gp(M.value))}Array.isArray(z)?v.push(...z):v.push(z)}}}return v}}function Qw(n,a){n.position&&(a.position=R0(n))}function Kw(n,a){let i=a;if(n&&n.data){const o=n.data.hName,u=n.data.hChildren,c=n.data.hProperties;if(typeof o=="string")if(i.type==="element")i.tagName=o;else{const m="children"in i?i.children:[i];i={type:"element",tagName:o,properties:{},children:m}}i.type==="element"&&c&&Object.assign(i.properties,Is(c)),"children"in i&&i.children&&u!==null&&u!==void 0&&(i.children=u)}return i}function Yw(n,a){const i=a.data||{},o="value"in a&&!(au.call(i,"hProperties")||au.call(i,"hChildren"))?{type:"text",value:a.value}:{type:"element",tagName:"div",properties:{},children:n.all(a)};return n.patch(a,o),n.applyData(a,o)}function Xw(n,a){const i=[];let o=-1;for(a&&i.push({type:"text",value:`
`});++o<n.length;)o&&i.push({type:"text",value:`
`}),i.push(n[o]);return a&&n.length>0&&i.push({type:"text",value:`
`}),i}function gp(n){let a=0,i=n.charCodeAt(a);for(;i===9||i===32;)a++,i=n.charCodeAt(a);return n.slice(a)}function xp(n,a){const i=Gw(n,a),o=i.one(n,void 0),u=_w(i),c=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return u&&c.children.push({type:"text",value:`
`},u),c}function Jw(n,a){return n&&"run"in n?async function(i,o){const u=xp(i,{file:o,...a});await n.run(u,o)}:function(i,o){return xp(i,{file:o,...n||a})}}function yp(n){if(n)throw n}var Dl,vp;function Zw(){if(vp)return Dl;vp=1;var n=Object.prototype.hasOwnProperty,a=Object.prototype.toString,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=function(g){return typeof Array.isArray=="function"?Array.isArray(g):a.call(g)==="[object Array]"},c=function(g){if(!g||a.call(g)!=="[object Object]")return!1;var x=n.call(g,"constructor"),v=g.constructor&&g.constructor.prototype&&n.call(g.constructor.prototype,"isPrototypeOf");if(g.constructor&&!x&&!v)return!1;var b;for(b in g);return typeof b>"u"||n.call(g,b)},m=function(g,x){i&&x.name==="__proto__"?i(g,x.name,{enumerable:!0,configurable:!0,value:x.newValue,writable:!0}):g[x.name]=x.newValue},f=function(g,x){if(x==="__proto__")if(n.call(g,x)){if(o)return o(g,x).value}else return;return g[x]};return Dl=function h(){var g,x,v,b,k,z,M=arguments[0],I=1,R=arguments.length,U=!1;for(typeof M=="boolean"&&(U=M,M=arguments[1]||{},I=2),(M==null||typeof M!="object"&&typeof M!="function")&&(M={});I<R;++I)if(g=arguments[I],g!=null)for(x in g)v=f(M,x),b=f(g,x),M!==b&&(U&&b&&(c(b)||(k=u(b)))?(k?(k=!1,z=v&&u(v)?v:[]):z=v&&c(v)?v:{},m(M,{name:x,newValue:h(U,z,b)})):typeof b<"u"&&m(M,{name:x,newValue:b}));return M},Dl}var e2=Zw();const Fl=ou(e2);function iu(n){if(typeof n!="object"||n===null)return!1;const a=Object.getPrototypeOf(n);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function t2(){const n=[],a={run:i,use:o};return a;function i(...u){let c=-1;const m=u.pop();if(typeof m!="function")throw new TypeError("Expected function as last argument, not "+m);f(null,...u);function f(h,...g){const x=n[++c];let v=-1;if(h){m(h);return}for(;++v<u.length;)(g[v]===null||g[v]===void 0)&&(g[v]=u[v]);u=g,x?n2(x,f)(...g):m(null,...g)}}function o(u){if(typeof u!="function")throw new TypeError("Expected `middelware` to be a function, not "+u);return n.push(u),a}}function n2(n,a){let i;return o;function o(...m){const f=n.length>m.length;let h;f&&m.push(u);try{h=n.apply(this,m)}catch(g){const x=g;if(f&&i)throw x;return u(x)}f||(h&&h.then&&typeof h.then=="function"?h.then(c,u):h instanceof Error?u(h):c(h))}function u(m,...f){i||(i=!0,a(m,...f))}function c(m){u(null,m)}}const nn={basename:r2,dirname:a2,extname:i2,join:s2,sep:"/"};function r2(n,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');Ja(n);let i=0,o=-1,u=n.length,c;if(a===void 0||a.length===0||a.length>n.length){for(;u--;)if(n.codePointAt(u)===47){if(c){i=u+1;break}}else o<0&&(c=!0,o=u+1);return o<0?"":n.slice(i,o)}if(a===n)return"";let m=-1,f=a.length-1;for(;u--;)if(n.codePointAt(u)===47){if(c){i=u+1;break}}else m<0&&(c=!0,m=u+1),f>-1&&(n.codePointAt(u)===a.codePointAt(f--)?f<0&&(o=u):(f=-1,o=m));return i===o?o=m:o<0&&(o=n.length),n.slice(i,o)}function a2(n){if(Ja(n),n.length===0)return".";let a=-1,i=n.length,o;for(;--i;)if(n.codePointAt(i)===47){if(o){a=i;break}}else o||(o=!0);return a<0?n.codePointAt(0)===47?"/":".":a===1&&n.codePointAt(0)===47?"//":n.slice(0,a)}function i2(n){Ja(n);let a=n.length,i=-1,o=0,u=-1,c=0,m;for(;a--;){const f=n.codePointAt(a);if(f===47){if(m){o=a+1;break}continue}i<0&&(m=!0,i=a+1),f===46?u<0?u=a:c!==1&&(c=1):u>-1&&(c=-1)}return u<0||i<0||c===0||c===1&&u===i-1&&u===o+1?"":n.slice(u,i)}function s2(...n){let a=-1,i;for(;++a<n.length;)Ja(n[a]),n[a]&&(i=i===void 0?n[a]:i+"/"+n[a]);return i===void 0?".":o2(i)}function o2(n){Ja(n);const a=n.codePointAt(0)===47;let i=l2(n,!a);return i.length===0&&!a&&(i="."),i.length>0&&n.codePointAt(n.length-1)===47&&(i+="/"),a?"/"+i:i}function l2(n,a){let i="",o=0,u=-1,c=0,m=-1,f,h;for(;++m<=n.length;){if(m<n.length)f=n.codePointAt(m);else{if(f===47)break;f=47}if(f===47){if(!(u===m-1||c===1))if(u!==m-1&&c===2){if(i.length<2||o!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(h=i.lastIndexOf("/"),h!==i.length-1){h<0?(i="",o=0):(i=i.slice(0,h),o=i.length-1-i.lastIndexOf("/")),u=m,c=0;continue}}else if(i.length>0){i="",o=0,u=m,c=0;continue}}a&&(i=i.length>0?i+"/..":"..",o=2)}else i.length>0?i+="/"+n.slice(u+1,m):i=n.slice(u+1,m),o=m-u-1;u=m,c=0}else f===46&&c>-1?c++:c=-1}return i}function Ja(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const u2={cwd:c2};function c2(){return"/"}function su(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function d2(n){if(typeof n=="string")n=new URL(n);else if(!su(n)){const a=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw a.code="ERR_INVALID_ARG_TYPE",a}if(n.protocol!=="file:"){const a=new TypeError("The URL must be of scheme file");throw a.code="ERR_INVALID_URL_SCHEME",a}return m2(n)}function m2(n){if(n.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const a=n.pathname;let i=-1;for(;++i<a.length;)if(a.codePointAt(i)===37&&a.codePointAt(i+1)===50){const o=a.codePointAt(i+2);if(o===70||o===102){const u=new TypeError("File URL path must not include encoded / characters");throw u.code="ERR_INVALID_FILE_URL_PATH",u}}return decodeURIComponent(a)}const Ol=["history","path","basename","stem","extname","dirname"];class Uf{constructor(a){let i;a?su(a)?i={path:a}:typeof a=="string"||p2(a)?i={value:a}:i=a:i={},this.cwd="cwd"in i?"":u2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Ol.length;){const c=Ol[o];c in i&&i[c]!==void 0&&i[c]!==null&&(this[c]=c==="history"?[...i[c]]:i[c])}let u;for(u in i)Ol.includes(u)||(this[u]=i[u])}get basename(){return typeof this.path=="string"?nn.basename(this.path):void 0}set basename(a){Ul(a,"basename"),Bl(a,"basename"),this.path=nn.join(this.dirname||"",a)}get dirname(){return typeof this.path=="string"?nn.dirname(this.path):void 0}set dirname(a){kp(this.basename,"dirname"),this.path=nn.join(a||"",this.basename)}get extname(){return typeof this.path=="string"?nn.extname(this.path):void 0}set extname(a){if(Bl(a,"extname"),kp(this.dirname,"extname"),a){if(a.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(a.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=nn.join(this.dirname,this.stem+(a||""))}get path(){return this.history[this.history.length-1]}set path(a){su(a)&&(a=d2(a)),Ul(a,"path"),this.path!==a&&this.history.push(a)}get stem(){return typeof this.path=="string"?nn.basename(this.path,this.extname):void 0}set stem(a){Ul(a,"stem"),Bl(a,"stem"),this.path=nn.join(this.dirname||"",a+(this.extname||""))}fail(a,i,o){const u=this.message(a,i,o);throw u.fatal=!0,u}info(a,i,o){const u=this.message(a,i,o);return u.fatal=void 0,u}message(a,i,o){const u=new mt(a,i,o);return this.path&&(u.name=this.path+":"+u.name,u.file=this.path),u.fatal=!1,this.messages.push(u),u}toString(a){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(a||void 0).decode(this.value)}}function Bl(n,a){if(n&&n.includes(nn.sep))throw new Error("`"+a+"` cannot be a path: did not expect `"+nn.sep+"`")}function Ul(n,a){if(!n)throw new Error("`"+a+"` cannot be empty")}function kp(n,a){if(!n)throw new Error("Setting `"+a+"` requires `path` to be set too")}function p2(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const f2=(function(n){const o=this.constructor.prototype,u=o[n],c=function(){return u.apply(c,arguments)};return Object.setPrototypeOf(c,o),c}),h2={}.hasOwnProperty;class Iu extends f2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=t2()}copy(){const a=new Iu;let i=-1;for(;++i<this.attachers.length;){const o=this.attachers[i];a.use(...o)}return a.data(Fl(!0,{},this.namespace)),a}data(a,i){return typeof a=="string"?arguments.length===2?(Wl("data",this.frozen),this.namespace[a]=i,this):h2.call(this.namespace,a)&&this.namespace[a]||void 0:a?(Wl("data",this.frozen),this.namespace=a,this):this.namespace}freeze(){if(this.frozen)return this;const a=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const u=i.call(a,...o);typeof u=="function"&&this.transformers.use(u)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(a){this.freeze();const i=xs(a),o=this.parser||this.Parser;return Hl("parse",o),o(String(i),i)}process(a,i){const o=this;return this.freeze(),Hl("process",this.parser||this.Parser),Vl("process",this.compiler||this.Compiler),i?u(void 0,i):new Promise(u);function u(c,m){const f=xs(a),h=o.parse(f);o.run(h,f,function(x,v,b){if(x||!v||!b)return g(x);const k=v,z=o.stringify(k,b);y2(z)?b.value=z:b.result=z,g(x,b)});function g(x,v){x||!v?m(x):c?c(v):i(void 0,v)}}}processSync(a){let i=!1,o;return this.freeze(),Hl("processSync",this.parser||this.Parser),Vl("processSync",this.compiler||this.Compiler),this.process(a,u),wp("processSync","process",i),o;function u(c,m){i=!0,yp(c),o=m}}run(a,i,o){bp(a),this.freeze();const u=this.transformers;return!o&&typeof i=="function"&&(o=i,i=void 0),o?c(void 0,o):new Promise(c);function c(m,f){const h=xs(i);u.run(a,h,g);function g(x,v,b){const k=v||a;x?f(x):m?m(k):o(void 0,k,b)}}}runSync(a,i){let o=!1,u;return this.run(a,i,c),wp("runSync","run",o),u;function c(m,f){yp(m),u=f,o=!0}}stringify(a,i){this.freeze();const o=xs(i),u=this.compiler||this.Compiler;return Vl("stringify",u),bp(a),u(a,o)}use(a,...i){const o=this.attachers,u=this.namespace;if(Wl("use",this.frozen),a!=null)if(typeof a=="function")h(a,i);else if(typeof a=="object")Array.isArray(a)?f(a):m(a);else throw new TypeError("Expected usable value, not `"+a+"`");return this;function c(g){if(typeof g=="function")h(g,[]);else if(typeof g=="object")if(Array.isArray(g)){const[x,...v]=g;h(x,v)}else m(g);else throw new TypeError("Expected usable value, not `"+g+"`")}function m(g){if(!("plugins"in g)&&!("settings"in g))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(g.plugins),g.settings&&(u.settings=Fl(!0,u.settings,g.settings))}function f(g){let x=-1;if(g!=null)if(Array.isArray(g))for(;++x<g.length;){const v=g[x];c(v)}else throw new TypeError("Expected a list of plugins, not `"+g+"`")}function h(g,x){let v=-1,b=-1;for(;++v<o.length;)if(o[v][0]===g){b=v;break}if(b===-1)o.push([g,...x]);else if(x.length>0){let[k,...z]=x;const M=o[b][1];iu(M)&&iu(k)&&(k=Fl(!0,M,k)),o[b]=[g,k,...z]}}}}const g2=new Iu().freeze();function Hl(n,a){if(typeof a!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Vl(n,a){if(typeof a!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function Wl(n,a){if(a)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function bp(n){if(!iu(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function wp(n,a,i){if(!i)throw new Error("`"+n+"` finished async. Use `"+a+"` instead")}function xs(n){return x2(n)?n:new Uf(n)}function x2(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function y2(n){return typeof n=="string"||v2(n)}function v2(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const k2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Sp=[],jp={allowDangerousHtml:!0},b2=/^(https?|ircs?|mailto|xmpp)$/i,w2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function S2(n){const a=j2(n),i=C2(n);return N2(a.runSync(a.parse(i),i),n)}function j2(n){const a=n.rehypePlugins||Sp,i=n.remarkPlugins||Sp,o=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...jp}:jp;return g2().use(rw).use(i).use(Jw,o).use(a)}function C2(n){const a=n.children||"",i=new Uf;return typeof a=="string"&&(i.value=a),i}function N2(n,a){const i=a.allowedElements,o=a.allowElement,u=a.components,c=a.disallowedElements,m=a.skipHtml,f=a.unwrapDisallowed,h=a.urlTransform||P2;for(const x of w2)Object.hasOwn(a,x.from)&&(""+x.from+(x.to?"use `"+x.to+"` instead":"remove it")+k2+x.id,void 0);return Bf(n,g),_0(n,{Fragment:s.Fragment,components:u,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function g(x,v,b){if(x.type==="raw"&&b&&typeof v=="number")return m?b.children.splice(v,1):b.children[v]={type:"text",value:x.value},v;if(x.type==="element"){let k;for(k in zl)if(Object.hasOwn(zl,k)&&Object.hasOwn(x.properties,k)){const z=x.properties[k],M=zl[k];(M===null||M.includes(x.tagName))&&(x.properties[k]=h(String(z||""),k,x))}}if(x.type==="element"){let k=i?!i.includes(x.tagName):c?c.includes(x.tagName):!1;if(!k&&o&&typeof v=="number"&&(k=!o(x,v,b)),k&&b&&typeof v=="number")return f&&x.children?b.children.splice(v,1,...x.children):b.children.splice(v,1),v}}}function P2(n){const a=n.indexOf(":"),i=n.indexOf("?"),o=n.indexOf("#"),u=n.indexOf("/");return a===-1||u!==-1&&a>u||i!==-1&&a>i||o!==-1&&a>o||b2.test(n.slice(0,a))?n:""}function E2(){const{slug:n}=Nx(),a=wt.find(o=>o.slug===n);if(!a)return s.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[s.jsx("h1",{className:"text-4xl mb-4",children:"Article Not Found"}),s.jsxs(Ke,{to:"/blog",className:"inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline",children:[s.jsx(Gl,{className:"w-4 h-4"}),"Back to Blog"]})]})});const i=wt.filter(o=>o.slug!==a.slug&&o.category===a.category).slice(0,3);return s.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs(Ke,{to:"/blog",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors mb-8",children:[s.jsx(Gl,{className:"w-4 h-4"}),"Kembali ke Blog"]}),s.jsxs("article",{children:[s.jsxs("header",{className:"mb-8",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm",children:[s.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)] border border-border",children:a.category}),s.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[s.jsx(qa,{className:"w-4 h-4"}),s.jsx("span",{children:a.date})]}),s.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[s.jsx(Ss,{className:"w-4 h-4"}),s.jsx("span",{children:a.readTime})]})]}),s.jsx("h1",{className:"text-4xl sm:text-5xl mb-6",children:a.title}),s.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:a.excerpt}),s.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-border",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:s.jsx("span",{className:"text-white",children:a.author.avatar})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm",children:"Written by"}),s.jsx("p",{className:"",children:a.author.name})]})]}),s.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent rounded-lg transition-colors",children:[s.jsx(Am,{className:"w-4 h-4"}),s.jsx("span",{className:"text-sm",children:"Share"})]})]})]}),s.jsx("div",{className:"relative h-96 rounded-2xl overflow-hidden mb-8",children:s.jsx(Ps,{src:a.image,alt:a.title,className:"w-full h-full object-cover"})}),s.jsx("div",{className:"prose prose-lg max-w-none",children:s.jsx(S2,{components:{h1:({node:o,...u})=>s.jsx("h1",{className:"text-3xl sm:text-4xl mt-8 mb-4",...u}),h2:({node:o,...u})=>s.jsx("h2",{className:"text-2xl sm:text-3xl mt-8 mb-4",...u}),h3:({node:o,...u})=>s.jsx("h3",{className:"text-xl sm:text-2xl mt-6 mb-3",...u}),h4:({node:o,...u})=>s.jsx("h4",{className:"text-lg sm:text-xl mt-4 mb-2",...u}),p:({node:o,...u})=>s.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",...u}),ul:({node:o,...u})=>s.jsx("ul",{className:"list-disc list-inside space-y-2 mb-4 text-muted-foreground",...u}),ol:({node:o,...u})=>s.jsx("ol",{className:"list-decimal list-inside space-y-2 mb-4 text-muted-foreground",...u}),li:({node:o,...u})=>s.jsx("li",{className:"ml-4",...u}),strong:({node:o,...u})=>s.jsx("strong",{className:"text-foreground",...u}),code:({node:o,...u})=>s.jsx("code",{className:"bg-secondary px-2 py-1 rounded text-sm",...u}),pre:({node:o,...u})=>s.jsx("pre",{className:"bg-secondary p-4 rounded-lg overflow-x-auto mb-4",...u}),blockquote:({node:o,...u})=>s.jsx("blockquote",{className:"border-l-4 border-[var(--brand-primary)] pl-4 italic my-4 text-muted-foreground",...u})},children:a.content})}),s.jsx("div",{className:"mt-12 pt-8 border-t border-border",children:s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm text-muted-foreground",children:"Share this article:"}),s.jsx("button",{className:"p-2 hover:bg-secondary rounded-lg transition-colors",children:s.jsx(Am,{className:"w-4 h-4"})})]})})}),s.jsx("div",{className:"mt-8 p-6 bg-secondary/50 rounded-xl border border-border",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:s.jsx(Ov,{className:"w-8 h-8 text-white"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg mb-1",children:"About the Author"}),s.jsx("p",{className:"mb-2",children:a.author.name}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Expert in customer service and AI technology with over 10 years of experience helping businesses with digital transformation."})]})]})})]}),i.length>0&&s.jsxs("div",{className:"mt-16",children:[s.jsxs("h2",{className:"text-2xl mb-8",children:["Related"," ",s.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Articles"})]}),s.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:i.map(o=>s.jsxs(Ke,{to:`/blog/${o.slug}`,className:"group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--brand-primary)]/20 transition-all",children:[s.jsx("div",{className:"relative h-40 overflow-hidden",children:s.jsx(Ps,{src:o.image,alt:o.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),s.jsxs("div",{className:"p-4",children:[s.jsx("h3",{className:"text-sm mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:o.title}),s.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[s.jsx(qa,{className:"w-3 h-3"}),s.jsx("span",{children:o.date})]})]})]},o.slug))})]}),s.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl text-center text-white",children:[s.jsx("h2",{className:"text-2xl sm:text-3xl mb-4",children:"Ready to Transform Your Customer Service?"}),s.jsx("p",{className:"text-lg mb-6 opacity-90",children:"Join thousands of businesses that have experienced the benefits of AI"}),s.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:"Contact Us"})]})]})})}function I2(){return s.jsxs("main",{className:"pt-20 pb-0 min-h-screen flex flex-col",children:[s.jsx("div",{className:"px-4 sm:px-6 lg:px-8 py-6 border-b border-border bg-card/50 backdrop-blur-sm",children:s.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[s.jsx("div",{className:"flex items-center gap-4",children:s.jsxs(Ke,{to:"/",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:[s.jsx(Gl,{className:"w-4 h-4"}),"Back to Home"]})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(qa,{className:"w-5 h-5 text-[var(--brand-primary)]"}),s.jsx("h1",{className:"text-lg font-semibold",children:"Book a Demo"})]}),s.jsx("div",{className:"w-24"})," "]})}),s.jsx("div",{className:"flex-1 w-full",children:s.jsx("iframe",{src:"https://calendly.com/wanriparasians/konsultasi-omnichannel",title:"Book a Demo - Calendly",className:"w-full h-full border-0",style:{minHeight:"calc(100vh - 8rem)"},loading:"lazy",allow:"payment"})})]})}function A2(n){L.useEffect(()=>{window.chatwootSettings={hideMessageBubble:n.hideMessageBubble||!1,position:n.position||"right",locale:n.locale||"id",type:"expanded_bubble"};const a=document.createElement("script");return a.src=`${n.baseUrl}/packs/js/sdk.js`,a.async=!0,a.defer=!0,a.onload=()=>{window.chatwootSDK&&window.chatwootSDK.run({websiteToken:n.websiteToken,baseUrl:n.baseUrl})},a.onerror=()=>{console.error("Failed to load Chatwoot SDK")},document.body.appendChild(a),()=>{a.parentNode&&a.parentNode.removeChild(a);const i=document.querySelector(".woot-widget-holder");i&&i.remove()}},[n.websiteToken,n.baseUrl,n.hideMessageBubble,n.position,n.locale])}function R2(){const[n,a]=L.useState("light");L.useEffect(()=>{const o=localStorage.getItem("theme");o?(a(o),document.documentElement.classList.toggle("dark",o==="dark")):(a("light"),document.documentElement.classList.remove("dark"))},[]);const i=()=>{const o=n==="light"?"dark":"light";a(o),document.documentElement.classList.toggle("dark",o==="dark"),localStorage.setItem("theme",o)};return A2({websiteToken:"AH84MtFe5Ux2XxicvHdu77PX",baseUrl:"https://chat.responpintar.com",position:"right",locale:"en"}),s.jsx(cy,{children:s.jsxs("div",{className:"min-h-screen bg-background text-foreground transition-colors duration-300",children:[s.jsx($1,{theme:n,toggleTheme:i}),s.jsxs(Ux,{children:[s.jsx(Wn,{path:"/",element:s.jsx(n0,{})}),s.jsx(Wn,{path:"/privacy",element:s.jsx(r0,{})}),s.jsx(Wn,{path:"/terms",element:s.jsx(a0,{})}),s.jsx(Wn,{path:"/about",element:s.jsx(i0,{})}),s.jsx(Wn,{path:"/blog",element:s.jsx(o0,{})}),s.jsx(Wn,{path:"/blog/:slug",element:s.jsx(E2,{})}),s.jsx(Wn,{path:"/demo",element:s.jsx(I2,{})})]}),s.jsx(q1,{})]})})}$g.createRoot(document.getElementById("root")).render(s.jsx(R2,{}));
