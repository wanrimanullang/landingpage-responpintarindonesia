import{a as La,b as Oa,r as ee,R as Ba,L as ae,g as Ar,u as Fa,B as _a,c as Ua,d as Me}from"./vendor-react-Bsn08DoD.js";import{M as Va,S as Ha,F as Wa,T as qa,I as Ga,L as Ka,Y as $a,a as St,P as It,b as ln,c as Pn,A as bt,Z as Ue,B as Qa,d as Ya,C as Ja,e as Kt,f as yt,g as Pr,h as Xa,G as Za,i as ei,j as Rn,k as ti,l as rt,E as ni,m as ri,U as $t,n as ai,D as ii,o as Rr,p as si,q as oi,R as li,r as ci,H as ui,s as di,t as mi,u as pi,v as hi,w as gi,x as We,y as Qt,z as Tn,J as fi}from"./vendor-icons-BSOogntx.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Tt={exports:{}},Je={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function xi(){if(En)return Je;En=1;var e=La(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(l,u,c){var d,m={},g=null,p=null;c!==void 0&&(g=""+c),u.key!==void 0&&(g=""+u.key),u.ref!==void 0&&(p=u.ref);for(d in u)a.call(u,d)&&!s.hasOwnProperty(d)&&(m[d]=u[d]);if(l&&l.defaultProps)for(d in u=l.defaultProps,u)m[d]===void 0&&(m[d]=u[d]);return{$$typeof:n,type:l,key:g,ref:p,props:m,_owner:i.current}}return Je.Fragment=r,Je.jsx=o,Je.jsxs=o,Je}var Mn;function bi(){return Mn||(Mn=1,Tt.exports=xi()),Tt.exports}var t=bi(),ut={},Dn;function yi(){if(Dn)return ut;Dn=1;var e=Oa();return ut.createRoot=e.createRoot,ut.hydrateRoot=e.hydrateRoot,ut}var vi=yi();function zn(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function ki(...e){return n=>{let r=!1;const a=e.map(i=>{const s=zn(i,n);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let i=0;i<a.length;i++){const s=a[i];typeof s=="function"?s():zn(e[i],null)}}}}var ji=Symbol.for("react.lazy"),vt=Ba[" use ".trim().toString()];function wi(e){return typeof e=="object"&&e!==null&&"then"in e}function Tr(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===ji&&"_payload"in e&&wi(e._payload)}function Ni(e){const n=Si(e),r=ee.forwardRef((a,i)=>{let{children:s,...o}=a;Tr(s)&&typeof vt=="function"&&(s=vt(s._payload));const l=ee.Children.toArray(s),u=l.find(Ai);if(u){const c=u.props.children,d=l.map(m=>m===u?ee.Children.count(c)>1?ee.Children.only(null):ee.isValidElement(c)?c.props.children:null:m);return t.jsx(n,{...o,ref:i,children:ee.isValidElement(c)?ee.cloneElement(c,void 0,d):null})}return t.jsx(n,{...o,ref:i,children:s})});return r.displayName=`${e}.Slot`,r}var Ci=Ni("Slot");function Si(e){const n=ee.forwardRef((r,a)=>{let{children:i,...s}=r;if(Tr(i)&&typeof vt=="function"&&(i=vt(i._payload)),ee.isValidElement(i)){const o=Ri(i),l=Pi(s,i.props);return i.type!==ee.Fragment&&(l.ref=a?ki(a,o):o),ee.cloneElement(i,l)}return ee.Children.count(i)>1?ee.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var Ii=Symbol("radix.slottable");function Ai(e){return ee.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ii}function Pi(e,n){const r={...n};for(const a in n){const i=e[a],s=n[a];/^on[A-Z]/.test(a)?i&&s?r[a]=(...l)=>{const u=s(...l);return i(...l),u}:i&&(r[a]=i):a==="style"?r[a]={...i,...s}:a==="className"&&(r[a]=[i,s].filter(Boolean).join(" "))}return{...e,...r}}function Ri(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Er(e){var n,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=Er(e[n]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function Mr(){for(var e,n,r=0,a="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=Er(e))&&(a&&(a+=" "),a+=n);return a}const Ln=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,On=Mr,Ti=(e,n)=>r=>{var a;if(n?.variants==null)return On(e,r?.class,r?.className);const{variants:i,defaultVariants:s}=n,o=Object.keys(i).map(c=>{const d=r?.[c],m=s?.[c];if(d===null)return null;const g=Ln(d)||Ln(m);return i[c][g]}),l=r&&Object.entries(r).reduce((c,d)=>{let[m,g]=d;return g===void 0||(c[m]=g),c},{}),u=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((c,d)=>{let{class:m,className:g,...p}=d;return Object.entries(p).every(k=>{let[j,N]=k;return Array.isArray(N)?N.includes({...s,...l}[j]):{...s,...l}[j]===N})?[...c,m,g]:c},[]);return On(e,o,u,r?.class,r?.className)},Ei=(e,n)=>{const r=new Array(e.length+n.length);for(let a=0;a<e.length;a++)r[a]=e[a];for(let a=0;a<n.length;a++)r[e.length+a]=n[a];return r},Mi=(e,n)=>({classGroupId:e,validator:n}),Dr=(e=new Map,n=null,r)=>({nextPart:e,validators:n,classGroupId:r}),kt="-",Bn=[],Di="arbitrary..",zi=e=>{const n=Oi(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return Li(o);const l=o.split(kt),u=l[0]===""&&l.length>1?1:0;return zr(l,u,n)},getConflictingClassGroupIds:(o,l)=>{if(l){const u=a[o],c=r[o];return u?c?Ei(c,u):u:c||Bn}return r[o]||Bn}}},zr=(e,n,r)=>{if(e.length-n===0)return r.classGroupId;const i=e[n],s=r.nextPart.get(i);if(s){const c=zr(e,n+1,s);if(c)return c}const o=r.validators;if(o===null)return;const l=n===0?e.join(kt):e.slice(n).join(kt),u=o.length;for(let c=0;c<u;c++){const d=o[c];if(d.validator(l))return d.classGroupId}},Li=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const n=e.slice(1,-1),r=n.indexOf(":"),a=n.slice(0,r);return a?Di+a:void 0})(),Oi=e=>{const{theme:n,classGroups:r}=e;return Bi(r,n)},Bi=(e,n)=>{const r=Dr();for(const a in e){const i=e[a];cn(i,r,a,n)}return r},cn=(e,n,r,a)=>{const i=e.length;for(let s=0;s<i;s++){const o=e[s];Fi(o,n,r,a)}},Fi=(e,n,r,a)=>{if(typeof e=="string"){_i(e,n,r);return}if(typeof e=="function"){Ui(e,n,r,a);return}Vi(e,n,r,a)},_i=(e,n,r)=>{const a=e===""?n:Lr(n,e);a.classGroupId=r},Ui=(e,n,r,a)=>{if(Hi(e)){cn(e(a),n,r,a);return}n.validators===null&&(n.validators=[]),n.validators.push(Mi(r,e))},Vi=(e,n,r,a)=>{const i=Object.entries(e),s=i.length;for(let o=0;o<s;o++){const[l,u]=i[o];cn(u,Lr(n,l),r,a)}},Lr=(e,n)=>{let r=e;const a=n.split(kt),i=a.length;for(let s=0;s<i;s++){const o=a[s];let l=r.nextPart.get(o);l||(l=Dr(),r.nextPart.set(o,l)),r=l}return r},Hi=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Wi=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,r=Object.create(null),a=Object.create(null);const i=(s,o)=>{r[s]=o,n++,n>e&&(n=0,a=r,r=Object.create(null))};return{get(s){let o=r[s];if(o!==void 0)return o;if((o=a[s])!==void 0)return i(s,o),o},set(s,o){s in r?r[s]=o:i(s,o)}}},Yt="!",Fn=":",qi=[],_n=(e,n,r,a,i)=>({modifiers:e,hasImportantModifier:n,baseClassName:r,maybePostfixModifierPosition:a,isExternal:i}),Gi=e=>{const{prefix:n,experimentalParseClassName:r}=e;let a=i=>{const s=[];let o=0,l=0,u=0,c;const d=i.length;for(let j=0;j<d;j++){const N=i[j];if(o===0&&l===0){if(N===Fn){s.push(i.slice(u,j)),u=j+1;continue}if(N==="/"){c=j;continue}}N==="["?o++:N==="]"?o--:N==="("?l++:N===")"&&l--}const m=s.length===0?i:i.slice(u);let g=m,p=!1;m.endsWith(Yt)?(g=m.slice(0,-1),p=!0):m.startsWith(Yt)&&(g=m.slice(1),p=!0);const k=c&&c>u?c-u:void 0;return _n(s,p,g,k)};if(n){const i=n+Fn,s=a;a=o=>o.startsWith(i)?s(o.slice(i.length)):_n(qi,!1,o,void 0,!0)}if(r){const i=a;a=s=>r({className:s,parseClassName:i})}return a},Ki=e=>{const n=new Map;return e.orderSensitiveModifiers.forEach((r,a)=>{n.set(r,1e6+a)}),r=>{const a=[];let i=[];for(let s=0;s<r.length;s++){const o=r[s],l=o[0]==="[",u=n.has(o);l||u?(i.length>0&&(i.sort(),a.push(...i),i=[]),a.push(o)):i.push(o)}return i.length>0&&(i.sort(),a.push(...i)),a}},$i=e=>({cache:Wi(e.cacheSize),parseClassName:Gi(e),sortModifiers:Ki(e),...zi(e)}),Qi=/\s+/,Yi=(e,n)=>{const{parseClassName:r,getClassGroupId:a,getConflictingClassGroupIds:i,sortModifiers:s}=n,o=[],l=e.trim().split(Qi);let u="";for(let c=l.length-1;c>=0;c-=1){const d=l[c],{isExternal:m,modifiers:g,hasImportantModifier:p,baseClassName:k,maybePostfixModifierPosition:j}=r(d);if(m){u=d+(u.length>0?" "+u:u);continue}let N=!!j,y=a(N?k.substring(0,j):k);if(!y){if(!N){u=d+(u.length>0?" "+u:u);continue}if(y=a(k),!y){u=d+(u.length>0?" "+u:u);continue}N=!1}const D=g.length===0?"":g.length===1?g[0]:s(g).join(":"),S=p?D+Yt:D,H=S+y;if(o.indexOf(H)>-1)continue;o.push(H);const W=i(y,N);for(let b=0;b<W.length;++b){const U=W[b];o.push(S+U)}u=d+(u.length>0?" "+u:u)}return u},Ji=(...e)=>{let n=0,r,a,i="";for(;n<e.length;)(r=e[n++])&&(a=Or(r))&&(i&&(i+=" "),i+=a);return i},Or=e=>{if(typeof e=="string")return e;let n,r="";for(let a=0;a<e.length;a++)e[a]&&(n=Or(e[a]))&&(r&&(r+=" "),r+=n);return r},Xi=(e,...n)=>{let r,a,i,s;const o=u=>{const c=n.reduce((d,m)=>m(d),e());return r=$i(c),a=r.cache.get,i=r.cache.set,s=l,l(u)},l=u=>{const c=a(u);if(c)return c;const d=Yi(u,r);return i(u,d),d};return s=o,(...u)=>s(Ji(...u))},Zi=[],re=e=>{const n=r=>r[e]||Zi;return n.isThemeGetter=!0,n},Br=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Fr=/^\((?:(\w[\w-]*):)?(.+)\)$/i,es=/^\d+\/\d+$/,ts=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ns=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,rs=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,as=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,is=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Be=e=>es.test(e),F=e=>!!e&&!Number.isNaN(Number(e)),Pe=e=>!!e&&Number.isInteger(Number(e)),Et=e=>e.endsWith("%")&&F(e.slice(0,-1)),Ie=e=>ts.test(e),ss=()=>!0,os=e=>ns.test(e)&&!rs.test(e),_r=()=>!1,ls=e=>as.test(e),cs=e=>is.test(e),us=e=>!A(e)&&!P(e),ds=e=>qe(e,Hr,_r),A=e=>Br.test(e),De=e=>qe(e,Wr,os),Mt=e=>qe(e,fs,F),Un=e=>qe(e,Ur,_r),ms=e=>qe(e,Vr,cs),dt=e=>qe(e,qr,ls),P=e=>Fr.test(e),Xe=e=>Ge(e,Wr),ps=e=>Ge(e,xs),Vn=e=>Ge(e,Ur),hs=e=>Ge(e,Hr),gs=e=>Ge(e,Vr),mt=e=>Ge(e,qr,!0),qe=(e,n,r)=>{const a=Br.exec(e);return a?a[1]?n(a[1]):r(a[2]):!1},Ge=(e,n,r=!1)=>{const a=Fr.exec(e);return a?a[1]?n(a[1]):r:!1},Ur=e=>e==="position"||e==="percentage",Vr=e=>e==="image"||e==="url",Hr=e=>e==="length"||e==="size"||e==="bg-size",Wr=e=>e==="length",fs=e=>e==="number",xs=e=>e==="family-name",qr=e=>e==="shadow",bs=()=>{const e=re("color"),n=re("font"),r=re("text"),a=re("font-weight"),i=re("tracking"),s=re("leading"),o=re("breakpoint"),l=re("container"),u=re("spacing"),c=re("radius"),d=re("shadow"),m=re("inset-shadow"),g=re("text-shadow"),p=re("drop-shadow"),k=re("blur"),j=re("perspective"),N=re("aspect"),y=re("ease"),D=re("animate"),S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],W=()=>[...H(),P,A],b=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],I=()=>[P,A,u],B=()=>[Be,"full","auto",...I()],q=()=>[Pe,"none","subgrid",P,A],E=()=>["auto",{span:["full",Pe,P,A]},Pe,P,A],T=()=>[Pe,"auto",P,A],K=()=>["auto","min","max","fr",P,A],M=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],C=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...I()],$=()=>[Be,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],R=()=>[e,P,A],ge=()=>[...H(),Vn,Un,{position:[P,A]}],f=()=>["no-repeat",{repeat:["","x","y","space","round"]}],se=()=>["auto","cover","contain",hs,ds,{size:[P,A]}],de=()=>[Et,Xe,De],h=()=>["","none","full",c,P,A],X=()=>["",F,Xe,De],fe=()=>["solid","dashed","dotted","double"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>[F,Et,Vn,Un],be=()=>["","none",k,P,A],ye=()=>["none",F,P,A],ve=()=>["none",F,P,A],Ae=()=>[F,P,A],Le=()=>[Be,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ie],breakpoint:[Ie],color:[ss],container:[Ie],"drop-shadow":[Ie],ease:["in","out","in-out"],font:[us],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ie],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ie],shadow:[Ie],spacing:["px",F],text:[Ie],"text-shadow":[Ie],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Be,A,P,N]}],container:["container"],columns:[{columns:[F,A,P,l]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:W()}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:B()}],"inset-x":[{"inset-x":B()}],"inset-y":[{"inset-y":B()}],start:[{start:B()}],end:[{end:B()}],top:[{top:B()}],right:[{right:B()}],bottom:[{bottom:B()}],left:[{left:B()}],visibility:["visible","invisible","collapse"],z:[{z:[Pe,"auto",P,A]}],basis:[{basis:[Be,"full","auto",l,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[F,Be,"auto","initial","none",A]}],grow:[{grow:["",F,P,A]}],shrink:[{shrink:["",F,P,A]}],order:[{order:[Pe,"first","last","none",P,A]}],"grid-cols":[{"grid-cols":q()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":q()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":K()}],"auto-rows":[{"auto-rows":K()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...M(),"normal"]}],"justify-items":[{"justify-items":[...C(),"normal"]}],"justify-self":[{"justify-self":["auto",...C()]}],"align-content":[{content:["normal",...M()]}],"align-items":[{items:[...C(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...C(),{baseline:["","last"]}]}],"place-content":[{"place-content":M()}],"place-items":[{"place-items":[...C(),"baseline"]}],"place-self":[{"place-self":["auto",...C()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:$()}],w:[{w:[l,"screen",...$()]}],"min-w":[{"min-w":[l,"screen","none",...$()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...$()]}],h:[{h:["screen","lh",...$()]}],"min-h":[{"min-h":["screen","lh","none",...$()]}],"max-h":[{"max-h":["screen","lh",...$()]}],"font-size":[{text:["base",r,Xe,De]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,P,Mt]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Et,A]}],"font-family":[{font:[ps,A,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,P,A]}],"line-clamp":[{"line-clamp":[F,"none",P,Mt]}],leading:[{leading:[s,...I()]}],"list-image":[{"list-image":["none",P,A]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",P,A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:R()}],"text-color":[{text:R()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:[F,"from-font","auto",P,De]}],"text-decoration-color":[{decoration:R()}],"underline-offset":[{"underline-offset":[F,"auto",P,A]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",P,A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",P,A]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ge()}],"bg-repeat":[{bg:f()}],"bg-size":[{bg:se()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Pe,P,A],radial:["",P,A],conic:[Pe,P,A]},gs,ms]}],"bg-color":[{bg:R()}],"gradient-from-pos":[{from:de()}],"gradient-via-pos":[{via:de()}],"gradient-to-pos":[{to:de()}],"gradient-from":[{from:R()}],"gradient-via":[{via:R()}],"gradient-to":[{to:R()}],rounded:[{rounded:h()}],"rounded-s":[{"rounded-s":h()}],"rounded-e":[{"rounded-e":h()}],"rounded-t":[{"rounded-t":h()}],"rounded-r":[{"rounded-r":h()}],"rounded-b":[{"rounded-b":h()}],"rounded-l":[{"rounded-l":h()}],"rounded-ss":[{"rounded-ss":h()}],"rounded-se":[{"rounded-se":h()}],"rounded-ee":[{"rounded-ee":h()}],"rounded-es":[{"rounded-es":h()}],"rounded-tl":[{"rounded-tl":h()}],"rounded-tr":[{"rounded-tr":h()}],"rounded-br":[{"rounded-br":h()}],"rounded-bl":[{"rounded-bl":h()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fe(),"hidden","none"]}],"divide-style":[{divide:[...fe(),"hidden","none"]}],"border-color":[{border:R()}],"border-color-x":[{"border-x":R()}],"border-color-y":[{"border-y":R()}],"border-color-s":[{"border-s":R()}],"border-color-e":[{"border-e":R()}],"border-color-t":[{"border-t":R()}],"border-color-r":[{"border-r":R()}],"border-color-b":[{"border-b":R()}],"border-color-l":[{"border-l":R()}],"divide-color":[{divide:R()}],"outline-style":[{outline:[...fe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[F,P,A]}],"outline-w":[{outline:["",F,Xe,De]}],"outline-color":[{outline:R()}],shadow:[{shadow:["","none",d,mt,dt]}],"shadow-color":[{shadow:R()}],"inset-shadow":[{"inset-shadow":["none",m,mt,dt]}],"inset-shadow-color":[{"inset-shadow":R()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:R()}],"ring-offset-w":[{"ring-offset":[F,De]}],"ring-offset-color":[{"ring-offset":R()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":R()}],"text-shadow":[{"text-shadow":["none",g,mt,dt]}],"text-shadow-color":[{"text-shadow":R()}],opacity:[{opacity:[F,P,A]}],"mix-blend":[{"mix-blend":[...te(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[F]}],"mask-image-linear-from-pos":[{"mask-linear-from":Z()}],"mask-image-linear-to-pos":[{"mask-linear-to":Z()}],"mask-image-linear-from-color":[{"mask-linear-from":R()}],"mask-image-linear-to-color":[{"mask-linear-to":R()}],"mask-image-t-from-pos":[{"mask-t-from":Z()}],"mask-image-t-to-pos":[{"mask-t-to":Z()}],"mask-image-t-from-color":[{"mask-t-from":R()}],"mask-image-t-to-color":[{"mask-t-to":R()}],"mask-image-r-from-pos":[{"mask-r-from":Z()}],"mask-image-r-to-pos":[{"mask-r-to":Z()}],"mask-image-r-from-color":[{"mask-r-from":R()}],"mask-image-r-to-color":[{"mask-r-to":R()}],"mask-image-b-from-pos":[{"mask-b-from":Z()}],"mask-image-b-to-pos":[{"mask-b-to":Z()}],"mask-image-b-from-color":[{"mask-b-from":R()}],"mask-image-b-to-color":[{"mask-b-to":R()}],"mask-image-l-from-pos":[{"mask-l-from":Z()}],"mask-image-l-to-pos":[{"mask-l-to":Z()}],"mask-image-l-from-color":[{"mask-l-from":R()}],"mask-image-l-to-color":[{"mask-l-to":R()}],"mask-image-x-from-pos":[{"mask-x-from":Z()}],"mask-image-x-to-pos":[{"mask-x-to":Z()}],"mask-image-x-from-color":[{"mask-x-from":R()}],"mask-image-x-to-color":[{"mask-x-to":R()}],"mask-image-y-from-pos":[{"mask-y-from":Z()}],"mask-image-y-to-pos":[{"mask-y-to":Z()}],"mask-image-y-from-color":[{"mask-y-from":R()}],"mask-image-y-to-color":[{"mask-y-to":R()}],"mask-image-radial":[{"mask-radial":[P,A]}],"mask-image-radial-from-pos":[{"mask-radial-from":Z()}],"mask-image-radial-to-pos":[{"mask-radial-to":Z()}],"mask-image-radial-from-color":[{"mask-radial-from":R()}],"mask-image-radial-to-color":[{"mask-radial-to":R()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":H()}],"mask-image-conic-pos":[{"mask-conic":[F]}],"mask-image-conic-from-pos":[{"mask-conic-from":Z()}],"mask-image-conic-to-pos":[{"mask-conic-to":Z()}],"mask-image-conic-from-color":[{"mask-conic-from":R()}],"mask-image-conic-to-color":[{"mask-conic-to":R()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ge()}],"mask-repeat":[{mask:f()}],"mask-size":[{mask:se()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",P,A]}],filter:[{filter:["","none",P,A]}],blur:[{blur:be()}],brightness:[{brightness:[F,P,A]}],contrast:[{contrast:[F,P,A]}],"drop-shadow":[{"drop-shadow":["","none",p,mt,dt]}],"drop-shadow-color":[{"drop-shadow":R()}],grayscale:[{grayscale:["",F,P,A]}],"hue-rotate":[{"hue-rotate":[F,P,A]}],invert:[{invert:["",F,P,A]}],saturate:[{saturate:[F,P,A]}],sepia:[{sepia:["",F,P,A]}],"backdrop-filter":[{"backdrop-filter":["","none",P,A]}],"backdrop-blur":[{"backdrop-blur":be()}],"backdrop-brightness":[{"backdrop-brightness":[F,P,A]}],"backdrop-contrast":[{"backdrop-contrast":[F,P,A]}],"backdrop-grayscale":[{"backdrop-grayscale":["",F,P,A]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[F,P,A]}],"backdrop-invert":[{"backdrop-invert":["",F,P,A]}],"backdrop-opacity":[{"backdrop-opacity":[F,P,A]}],"backdrop-saturate":[{"backdrop-saturate":[F,P,A]}],"backdrop-sepia":[{"backdrop-sepia":["",F,P,A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",P,A]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[F,"initial",P,A]}],ease:[{ease:["linear","initial",y,P,A]}],delay:[{delay:[F,P,A]}],animate:[{animate:["none",D,P,A]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[j,P,A]}],"perspective-origin":[{"perspective-origin":W()}],rotate:[{rotate:ye()}],"rotate-x":[{"rotate-x":ye()}],"rotate-y":[{"rotate-y":ye()}],"rotate-z":[{"rotate-z":ye()}],scale:[{scale:ve()}],"scale-x":[{"scale-x":ve()}],"scale-y":[{"scale-y":ve()}],"scale-z":[{"scale-z":ve()}],"scale-3d":["scale-3d"],skew:[{skew:Ae()}],"skew-x":[{"skew-x":Ae()}],"skew-y":[{"skew-y":Ae()}],transform:[{transform:[P,A,"","none","gpu","cpu"]}],"transform-origin":[{origin:W()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Le()}],"translate-x":[{"translate-x":Le()}],"translate-y":[{"translate-y":Le()}],"translate-z":[{"translate-z":Le()}],"translate-none":["translate-none"],accent:[{accent:R()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:R()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",P,A]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",P,A]}],fill:[{fill:["none",...R()]}],"stroke-w":[{stroke:[F,Xe,De,Mt]}],stroke:[{stroke:["none",...R()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},ys=Xi(bs);function vs(...e){return ys(Mr(e))}const ks=Ti("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function jt({className:e,variant:n,size:r,asChild:a=!1,...i}){const s=a?Ci:"button";return t.jsx(s,{"data-slot":"button",className:vs(ks({variant:n,size:r,className:e})),...i})}const Hn={p1c229800:"M13.4469 19.597C13.3234 19.5156 13.3955 19.3258 13.4469 19.2411C16.5327 15.6409 22.5804 8.57727 23.1327 7.90308L23.3622 7.59256C23.568 7.38916 23.6538 7.37222 23.7224 7.38917C23.963 7.38419 23.9279 7.69922 23.8935 7.85176L21.5263 15.1735C21.2793 15.7022 21.4234 15.7666 21.5263 15.7327H28.3192C28.525 15.7327 28.405 15.97 28.3192 16.0887C25.1286 19.7326 18.7166 27.0407 18.593 27.1221C18.4387 27.2237 18.3357 27.2746 18.1814 27.2237C18.0579 27.1831 18.0613 26.9695 18.0784 26.8678L20.1883 19.6987H13.8586C13.7729 19.6987 13.5704 19.6783 13.4469 19.597Z",p29467930:"M23.6206 32.8459L12.4536 41.8455C11.6302 42.2014 10.2408 41.9472 9.93199 41.032V40.5744V32.9985C9.93199 32.9646 9.90112 32.8866 9.77761 32.8459H9.57177L6.92005 32.8186C3.72946 32.3355 1.02922 30.863 0 25.5242V6.96578C0.102922 4.77944 1.69822 1.16944 6.89579 0H34.8392C37.6181 0 41.632 3.20324 41.8893 6.60986V25.7785C41.2718 30.4562 37.3608 32.49 35.045 32.8459H23.6206ZM22.0768 29.1851C19.418 31.2867 14.0798 35.5306 13.9974 35.6933C13.8327 35.856 13.7916 35.6594 13.7916 35.5407V29.5919C13.7916 28.9817 13.174 28.9817 13.1226 28.9817H7.15309C7.02959 28.9817 6.82717 28.9139 6.74141 28.88C5.30049 28.5241 4.01397 26.6937 3.75666 25.4226V6.96578C4.16835 5.08451 5.71218 4.11845 7.20456 3.76254H34.8392C36.5889 4.27099 37.8239 5.54212 38.1327 7.01662V25.7785C37.7622 27.7309 35.3538 29.0326 35.045 28.9817H22.437C22.3547 28.9817 22.1626 29.1173 22.0768 29.1851Z"};function Gr(){return t.jsx("div",{className:"relative size-full","data-name":"logo",children:t.jsxs("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 42 42",children:[t.jsxs("g",{clipPath:"url(#clip0_1_90)",id:"logo",children:[t.jsx("g",{filter:"url(#filter0_dd_1_90)",id:"Vector 3",children:t.jsx("path",{clipRule:"evenodd",d:Hn.p29467930,fill:"var(--fill-0, #14956F)",fillRule:"evenodd"})}),t.jsx("g",{filter:"url(#filter1_dd_1_90)",id:"Group 1",children:t.jsx("path",{d:Hn.p1c229800,fill:"var(--fill-0, #14956F)",id:"Vector 2"})})]}),t.jsxs("defs",{children:[t.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",height:"55",id:"filter0_dd_1_90",width:"54.8893",x:"-7",y:"-6",children:[t.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),t.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),t.jsx("feOffset",{dx:"2",dy:"3"}),t.jsx("feGaussianBlur",{stdDeviation:"2"}),t.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),t.jsx("feBlend",{in2:"BackgroundImageFix",mode:"normal",result:"effect1_dropShadow_1_90"}),t.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),t.jsx("feOffset",{dx:"-2",dy:"-1"}),t.jsx("feGaussianBlur",{stdDeviation:"2.5"}),t.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),t.jsx("feBlend",{in2:"effect1_dropShadow_1_90",mode:"normal",result:"effect2_dropShadow_1_90"}),t.jsx("feBlend",{in:"SourceGraphic",in2:"effect2_dropShadow_1_90",mode:"normal",result:"shape"})]}),t.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",height:"32.8595",id:"filter1_dd_1_90",width:"28.0541",x:"6.37874",y:"1.3842",children:[t.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),t.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),t.jsx("feOffset",{dx:"2",dy:"3"}),t.jsx("feGaussianBlur",{stdDeviation:"2"}),t.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),t.jsx("feBlend",{in2:"BackgroundImageFix",mode:"normal",result:"effect1_dropShadow_1_90"}),t.jsx("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),t.jsx("feOffset",{dx:"-2",dy:"-1"}),t.jsx("feGaussianBlur",{stdDeviation:"2.5"}),t.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),t.jsx("feBlend",{in2:"effect1_dropShadow_1_90",mode:"normal",result:"effect2_dropShadow_1_90"}),t.jsx("feBlend",{in:"SourceGraphic",in2:"effect2_dropShadow_1_90",mode:"normal",result:"shape"})]}),t.jsx("clipPath",{id:"clip0_1_90",children:t.jsx("rect",{fill:"white",height:"42",width:"41.8893"})})]})]})})}function js({theme:e,toggleTheme:n}){return t.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"flex items-center justify-between h-16",children:[t.jsxs(ae,{to:"/",className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[t.jsx("div",{className:"w-8 h-8",children:t.jsx(Gr,{})}),t.jsx("span",{className:"text-lg",children:"Respon Pintar"})]}),t.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[t.jsx(ae,{to:"/#features",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Features"}),t.jsx(ae,{to:"/#use-cases",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Use Cases"}),t.jsx(ae,{to:"/about",className:"text-muted-foreground hover:text-foreground transition-colors",children:"About"}),t.jsx(ae,{to:"/blog",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Blog"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("button",{onClick:n,className:"w-9 h-9 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-all hover:scale-105","aria-label":"Toggle theme",children:e==="light"?t.jsx(Va,{className:"w-5 h-5 text-foreground"}):t.jsx(Ha,{className:"w-5 h-5 text-foreground"})}),t.jsx(jt,{asChild:!0,className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20",children:t.jsx("a",{href:"https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Try Now"})})]})]})})})}function ws(){const e=new Date().getFullYear();return t.jsx("footer",{className:"bg-muted/30 border-t border-border",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs(ae,{to:"/",className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[t.jsx("div",{className:"w-8 h-8",children:t.jsx(Gr,{})}),t.jsx("span",{className:"text-lg",children:"Respon Pintar"})]}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"A leading SaaS platform for customer service automation powered by AI technology that helps businesses improve efficiency and customer satisfaction."}),t.jsxs("div",{className:"flex gap-3 pt-4",children:[t.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"Facebook",children:t.jsx(Wa,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),t.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"Twitter",children:t.jsx(qa,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),t.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"Instagram",children:t.jsx(Ga,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),t.jsx("a",{href:"https://www.linkedin.com/company/109874968/",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"LinkedIn",children:t.jsx(Ka,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})}),t.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-[var(--brand-gradient-start)] hover:to-[var(--brand-gradient-end)] flex items-center justify-center transition-all hover:scale-110 group","aria-label":"YouTube",children:t.jsx($a,{className:"w-4 h-4 text-muted-foreground group-hover:text-white transition-colors"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"mb-4",children:"Product"}),t.jsxs("ul",{className:"space-y-3",children:[t.jsx("li",{children:t.jsx("a",{href:"#features",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Features"})}),t.jsx("li",{children:t.jsx("a",{href:"#pricing",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Pricing"})}),t.jsx("li",{children:t.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Integrations"})}),t.jsx("li",{children:t.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"API Documentation"})}),t.jsx("li",{children:t.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Changelog"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"mb-4",children:"Company"}),t.jsxs("ul",{className:"space-y-3",children:[t.jsx("li",{children:t.jsx(ae,{to:"/about",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"About Us"})}),t.jsx("li",{children:t.jsx(ae,{to:"/blog",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Blog"})}),t.jsx("li",{children:t.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Careers"})}),t.jsx("li",{children:t.jsx(ae,{to:"/privacy",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Privacy Policy"})}),t.jsx("li",{children:t.jsx(ae,{to:"/terms",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Terms of Service"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"mb-4",children:"Contact Us"}),t.jsxs("ul",{className:"space-y-3",children:[t.jsxs("li",{className:"flex items-start gap-3",children:[t.jsx(St,{className:"w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Email"}),t.jsx("a",{href:"mailto:hello@responpintar.com",className:"text-sm hover:text-[var(--brand-primary)] transition-colors",children:"support@responpintar.com"})]})]}),t.jsxs("li",{className:"flex items-start gap-3",children:[t.jsx(It,{className:"w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Phone"}),t.jsx("a",{href:"tel:+6282189885080",className:"text-sm hover:text-[var(--brand-primary)] transition-colors",children:"+62 821-8988-5080"})]})]}),t.jsxs("li",{className:"flex items-start gap-3",children:[t.jsx(ln,{className:"w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Address"}),t.jsxs("p",{className:"text-sm",children:["Plaza Aminta 5th Floor/504, Jl. TB Simatupang Kav. 10,",t.jsx("br",{}),"Pondok Pinang, Kebayoran Lama,",t.jsx("br",{}),"South Jakarta, DKI Jakarta,",t.jsx("br",{}),"Postal Code: 12310"]})]})]})]})]})]}),t.jsx("div",{className:"pt-8 border-t border-border",children:t.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[t.jsxs("p",{className:"text-sm text-muted-foreground",children:["© ",e," Respon Pintar. All rights reserved."]}),t.jsxs("div",{className:"flex gap-6",children:[t.jsx(ae,{to:"/privacy",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Privacy"}),t.jsx(ae,{to:"/terms",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Terms"}),t.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:"Cookies"})]})]})})]})})}function Ns(){return t.jsxs("section",{className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl -z-10"}),t.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-gradient-end)]/10 rounded-full blur-3xl -z-10"}),t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border",children:[t.jsx(Pn,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"SaaS Platform for Response Automation"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl !leading-tight",children:["Boost Customer Response with"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"AI Technology"})]}),t.jsx("p",{className:"text-lg text-muted-foreground !leading-relaxed",children:"Automate customer responses, increase satisfaction, and save up to 70% of your time with an easy-to-use AI-powered chatbot platform."}),t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsxs(jt,{size:"lg",className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20 group",children:[t.jsx("a",{href:"https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",children:"Start Free"}),t.jsx(bt,{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"})]}),t.jsx(ae,{to:"/demo",children:t.jsx(jt,{size:"lg",variant:"outline",className:"border-border hover:bg-accent hover:scale-105 transition-all",children:"View Demo"})})]}),t.jsxs("div",{className:"flex flex-wrap gap-8 pt-4",children:[t.jsxs("div",{children:[t.jsx("div",{className:"flex items-baseline gap-1",children:t.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"10K+"})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Users"})]}),t.jsxs("div",{children:[t.jsx("div",{className:"flex items-baseline gap-1",children:t.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"98%"})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer Satisfaction"})]}),t.jsxs("div",{children:[t.jsx("div",{className:"flex items-baseline gap-1",children:t.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"24/7"})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Automated Support"})]})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl"}),t.jsxs("div",{className:"relative bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-border",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx(Ue,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm",children:"Respon Pintar AI"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),t.jsxs("div",{className:"flex gap-1",children:[t.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"flex justify-end",children:t.jsx("div",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]",children:t.jsx("p",{className:"text-sm",children:"How do I use the automation feature?"})})}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0",children:t.jsx(Ue,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),t.jsx("div",{className:"bg-secondary px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]",children:t.jsx("p",{className:"text-sm",children:"Our automation feature is super easy! Just set up your response templates, and the AI will handle the rest automatically 24/7."})})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0",children:t.jsx(Ue,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),t.jsx("div",{className:"bg-secondary px-4 py-2 rounded-2xl",children:t.jsxs("div",{className:"flex gap-1",children:[t.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"0ms"}}),t.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"150ms"}}),t.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"300ms"}})]})})]})]}),t.jsxs("div",{className:"flex gap-2 pt-4 border-t border-border",children:[t.jsx("div",{className:"flex-1 bg-secondary px-4 py-2 rounded-lg",children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Type a message..."})}),t.jsx("button",{className:"w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx(bt,{className:"w-5 h-5 text-white"})})]})]}),t.jsx("div",{className:"absolute -top-4 -right-4 bg-card border border-border rounded-xl shadow-lg p-3 animate-pulse",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500"}),t.jsx("span",{className:"text-xs",children:"AI Active"})]})}),t.jsx("div",{className:"absolute -bottom-4 -left-4 bg-card border border-border rounded-xl shadow-lg p-3",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Pn,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-xs",children:"Smart Response"})]})})]})]})})]})}const Cs=[{icon:Qa,title:"Smart AI Chatbot",description:"An AI-powered chatbot that understands context and delivers natural, human-like responses."},{icon:Ue,title:"Instant Automation",description:"Quick setup in minutes. Start serving your customers 24/7 right away."},{icon:Ya,title:"Multi-Channel Support",description:"Integrate with WhatsApp, Instagram, Facebook, and other platforms in a single dashboard."},{icon:Ja,title:"In-Depth Analytics",description:"Analytics dashboard for tracking performance, customer satisfaction, and business insights."},{icon:Kt,title:"Guaranteed Security",description:"End-to-end encryption and international compliance standards to protect your data."},{icon:yt,title:"Real-time Response",description:"Response time under 1 second. Your customers never have to wait long."}];function Ss(){return t.jsx("section",{id:"features",className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[t.jsx(Ue,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Key Features"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["Everything You Need for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service Automation"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"A complete platform with powerful features designed to maximize your efficiency and customer satisfaction."})]}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Cs.map((e,n)=>{const r=e.icon;return t.jsxs("div",{className:"group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(r,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"mb-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:e.description})]},n)})})]})})}const Is=[{icon:Xa,title:"E-Commerce",description:"Automatically handle product inquiries, order tracking, and customer complaints.",benefits:["Increase conversion by 40%","Reduce cart abandonment","24/7 support at no extra cost"]},{icon:Pr,title:"Business & Corporate",description:"Automate customer support, lead generation, and internal communication.",benefits:["Save 60% on operational costs","Faster response times","Boost team productivity"]},{icon:Za,title:"Education",description:"Answer student questions, provide enrollment information, and learning guidance.",benefits:["Serve thousands of students at once","Accurate info 24/7","Increase engagement"]},{icon:ei,title:"Healthcare",description:"Schedule appointments, provide service information, and answer common medical FAQs.",benefits:["Reduce admin workload","Automatic appointment management","More efficient service"]}];function As(){return t.jsx("section",{id:"use-cases",className:"py-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[t.jsx(Pr,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Use Cases"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["Solutions for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Various Industries"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"From startups to enterprises, Respon Pintar helps businesses across sectors improve their customer experience."})]}),t.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Is.map((e,n)=>{const r=e.icon;return t.jsxs("div",{className:"group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",children:t.jsx(r,{className:"w-7 h-7 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"mb-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:e.description})]})]}),t.jsx("div",{className:"space-y-2 mt-6 pt-6 border-t border-border",children:e.benefits.map((a,i)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:a})]},i))})]},n)})})]})})}function Ps(){return t.jsx("section",{id:"pricing",className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[t.jsx(Rn,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Pricing"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["The Right Solution for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Your Business"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"We provide custom packages tailored to your business needs. Contact our team for the best offer."})]}),t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-12 text-center shadow-xl",children:[t.jsx("div",{className:"w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx(Rn,{className:"w-10 h-10 text-white"})}),t.jsx("h3",{className:"text-2xl mb-4",children:"Get a Custom Quote"}),t.jsx("p",{className:"text-muted-foreground mb-8 max-w-2xl mx-auto",children:"Every business has unique needs. Our team will help you find the best solution with competitive pricing and features tailored to your requirements."}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto",children:[t.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[t.jsx(St,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),t.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"Email"}),t.jsx("p",{className:"text-sm",children:"support@responpintar.com"})]}),t.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[t.jsx(It,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),t.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"Phone"}),t.jsx("p",{className:"text-sm",children:"+62 811-552-477"})]}),t.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[t.jsx(ti,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),t.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"WhatsApp"}),t.jsx("p",{className:"text-sm",children:"+62 811-552-477"})]})]}),t.jsx(jt,{size:"lg",className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20",children:t.jsx("a",{href:"https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Contact Sales Team"})}),t.jsx("div",{className:"mt-8 pt-8 border-t border-border",children:t.jsxs("p",{className:"text-sm text-muted-foreground",children:["💡 ",t.jsx("strong",{children:"Free Trial Available:"})," Try our platform free for 14 days — no credit card required"]})})]}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-6 mt-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsxs("svg",{className:"w-8 h-8 mx-auto mb-2",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("circle",{cx:"16",cy:"16",r:"14",stroke:"var(--brand-primary)",strokeWidth:"2",opacity:"0.3"}),t.jsx("circle",{cx:"16",cy:"16",r:"9",stroke:"var(--brand-primary)",strokeWidth:"2",opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"16",r:"4",fill:"var(--brand-primary)"})]}),t.jsx("p",{className:"text-sm",children:"Custom Packages"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Tailored to your business needs"})]}),t.jsxs("div",{className:"text-center",children:[t.jsxs("svg",{className:"w-8 h-8 mx-auto mb-2",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("path",{d:"M16 3L28 16L16 29L4 16Z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("path",{d:"M16 9L23 16L16 23L9 16Z",fill:"var(--brand-primary)",fillOpacity:"0.5"})]}),t.jsx("p",{className:"text-sm",children:"Competitive Pricing"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Best value for your investment"})]}),t.jsxs("div",{className:"text-center",children:[t.jsxs("svg",{className:"w-8 h-8 mx-auto mb-2",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("circle",{cx:"8",cy:"16",r:"5",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("circle",{cx:"24",cy:"16",r:"5",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("path",{d:"M13 16H19",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"8",cy:"16",r:"2",fill:"var(--brand-primary)"}),t.jsx("circle",{cx:"24",cy:"16",r:"2",fill:"var(--brand-primary)"})]}),t.jsx("p",{className:"text-sm",children:"Dedicated Support"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Team ready to help 24/7"})]})]})]})]})})}const Rs=[{name:"Bali Resort Tangerang",logo:"/our-clients/bali resort tangerang - our clients.png"},{name:"Geriya Selaras",logo:"/our-clients/geriya selaras - our clients.png"},{name:"Kesuma Agung Selaras",logo:"/our-clients/kesuma agung selaras - our clients.png"},{name:"MAS Group",logo:"/our-clients/mas group - our clients.png"},{name:"Naputa",logo:"/our-clients/naputa - our clients.png"},{name:"Sagara",logo:"/our-clients/sagara - our clients.png"},{name:"The Crest",logo:"/our-clients/the crest - our clients.png"},{name:"Vista Residence",logo:"/our-clients/vista residence - our clients.png"}];function Ts(){return t.jsxs("section",{id:"our-clients",className:"py-20 relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-primary)]/[0.03] to-transparent pointer-events-none"}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("span",{className:"inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] mb-4",children:"Trusted Partners"}),t.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Trusted by"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Leading Companies"})]}),t.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto text-lg",children:"Join the many companies that have entrusted their customer service to ResponPintar"})]}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",children:Rs.map((e,n)=>t.jsxs("div",{className:"group relative",style:{animationDelay:`${n*80}ms`},children:[t.jsxs("div",{className:"relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 flex items-center justify-center h-32 transition-all duration-500 hover:border-[var(--brand-primary)]/30 hover:shadow-lg hover:shadow-[var(--brand-primary)]/5 hover:-translate-y-1 hover:bg-card",children:[t.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)]/0 to-[var(--brand-gradient-end)]/0 group-hover:from-[var(--brand-primary)]/[0.04] group-hover:to-[var(--brand-gradient-end)]/[0.04] transition-all duration-500"}),t.jsx("img",{src:e.logo,alt:e.name,className:"max-h-16 max-w-[140px] w-auto h-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500",loading:"lazy"})]}),t.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10",children:t.jsxs("div",{className:"bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl",children:[e.name,t.jsx("div",{className:"absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"})]})})]},e.name))}),t.jsxs("div",{className:"mt-16 flex items-center justify-center gap-4",children:[t.jsx("div",{className:"h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-border"}),t.jsx("p",{className:"text-sm text-muted-foreground font-medium",children:"And many more"}),t.jsx("div",{className:"h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-border"})]})]})]})}function Es(e={}){const{threshold:n=.1,rootMargin:r="0px",triggerOnce:a=!0}=e,i=ee.useRef(null),[s,o]=ee.useState(!1);return ee.useEffect(()=>{const l=i.current;if(!l)return;const u=new IntersectionObserver(([c])=>{c.isIntersecting?(o(!0),a&&u.unobserve(l)):a||o(!1)},{threshold:n,rootMargin:r});return u.observe(l),()=>{u.unobserve(l)}},[n,r,a]),{ref:i,isVisible:s}}function pt({children:e,className:n="",delay:r=0,animation:a="fade-up"}){const{ref:i,isVisible:s}=Es({threshold:.1,triggerOnce:!0}),o=()=>{const l="transition-all duration-1000 ease-out";if(!s)switch(a){case"fade-up":return`${l} opacity-0 translate-y-12`;case"fade-in":return`${l} opacity-0`;case"fade-left":return`${l} opacity-0 -translate-x-12`;case"fade-right":return`${l} opacity-0 translate-x-12`;case"scale":return`${l} opacity-0 scale-95`;default:return`${l} opacity-0 translate-y-12`}return`${l} opacity-100 translate-y-0 translate-x-0 scale-100`};return t.jsx("div",{ref:i,className:`${o()} ${n}`,style:{transitionDelay:`${r}ms`},children:e})}function Ms(){return t.jsxs("main",{children:[t.jsx(Ns,{}),t.jsx(pt,{animation:"fade-up",delay:1e3,children:t.jsx(Ss,{})}),t.jsx(pt,{animation:"fade-up",delay:150,children:t.jsx(As,{})}),t.jsx(pt,{animation:"fade-up",delay:100,children:t.jsx(Ps,{})}),t.jsx(pt,{animation:"fade-up",delay:100,children:t.jsx(Ts,{})})]})}function Ds(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(Kt,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Privacy Policy"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Privacy"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Policy"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Last updated: March 15, 2025"})]}),t.jsxs("div",{className:"space-y-12",children:[t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"1. Information We Collect"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We collect information that you provide directly to us, including:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"1.1. Information You Provide:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Account information (name, email, phone number)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Payment information (processed through secure payment gateways)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Content you upload or send through the service"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"1.2. Information We Collect Automatically:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Service usage and interaction data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Device and browser information"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Cookies and similar tracking technologies"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Location data (if you grant permission)"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(ni,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"2. Use of Information"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"The information we collect is used to:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"2.1. Primary Purposes:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Provide and improve our services"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Personalize user experience"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Send important information about the service"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Respond to your inquiries and requests"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"2.2. Secondary Purposes:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Product analysis and development"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Security and fraud prevention"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Compliance with legal obligations"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Sending marketing communications (with consent)"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(ri,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"3. Data Protection"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We implement strict security measures in accordance with industry standards to protect your data:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.1. Technical Security:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"End-to-end encryption for all sensitive data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Firewall and intrusion detection systems"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"24/7 security monitoring"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Regular encrypted data backups"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.2. Organizational Security:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Restricted access based on need-to-know principle"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Regular security training for employees"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Periodic security audits"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Security incident response procedures"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx($t,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"4. Data Sharing"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We are committed to never selling or renting your personal data. Data is only shared in the following situations:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.1. Permitted Data Sharing:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"With your explicit consent"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"To comply with legal obligations"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"With service providers who assist operations (under confidentiality agreements)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"In the event of mergers, acquisitions, or asset sales (with notice)"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.2. Protections in Data Sharing:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Data processing agreements with third parties"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Security evaluation of business partners"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Restrictions on data usage"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to stop data sharing"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Kt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"5. User Rights"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"In accordance with applicable data protection regulations, you have the following rights:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.1. Fundamental Rights:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to access your personal data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to request correction of inaccurate data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:'Right to request data deletion ("right to be forgotten")'})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to restrict data processing"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.2. Additional Rights:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to object to data processing"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to data portability"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to withdraw consent"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to file a complaint with a supervisory authority"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"6. Policy Changes"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We may update this privacy policy from time to time to reflect changes in our practices or legal obligations. We will notify you of material changes through:"})]})]}),t.jsxs("div",{className:"ml-14",children:[t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Email to your registered address"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Notification on our platform"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Update of the policy effective date"})]})]}),t.jsx("p",{className:"text-muted-foreground mt-4",children:"Continued use of our services after such changes constitutes your acceptance of the updated policy."})]})]}),t.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8",children:[t.jsx("h2",{className:"text-2xl mb-6 text-center",children:"Contact Us"}),t.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"If you have questions about this privacy policy, please contact us:"}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(St,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Email"}),t.jsx("p",{className:"text-sm text-center",children:"support@responpintar.com"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(It,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Phone"}),t.jsx("p",{className:"text-sm",children:"+62 821-8988-5080"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(ln,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Address"}),t.jsx("p",{className:"text-sm text-center",children:"Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160"})]})]})]})]})]})})}function zs(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(ai,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Terms and Conditions"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Terms and"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Conditions"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Last updated: March 15, 2025"})]}),t.jsxs("div",{className:"space-y-12",children:[t.jsx("section",{className:"bg-card border border-border rounded-2xl p-8",children:t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"1. General Terms"}),t.jsx("p",{className:"text-muted-foreground leading-relaxed",children:'By using the ResponPintar service ("Service"), you agree to be bound by these terms and conditions ("Terms"). These Terms constitute a legally binding agreement between you and PT ResponPintar Indonesia ("We"). If you do not agree with these Terms, please do not use our Service.'})]})]})}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"2. Definitions"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"In these Terms, the following terms have the meanings as defined:"})]})]}),t.jsxs("div",{className:"ml-14 space-y-3",children:[t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Service"'})," refers to the ResponPintar platform, including all features, functionality, and user interfaces"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"User"'})," is an individual or entity that has registered for and uses the Service"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Content"'})," includes all materials, data, text, images, video, audio, or other content created, uploaded, or transmitted through the Service"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Customer Data"'})," is information processed or stored by the User through the Service"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Intellectual Property Rights"'})," includes copyrights, patents, trademarks, trade secrets, and other proprietary rights"]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"3. Use of Service"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.1. Usage Requirements:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You must be at least 18 years old or the legal age in your jurisdiction"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Provide accurate and complete information during registration"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Maintain the confidentiality of your account credentials"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Be responsible for all activities under your account"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.2. Prohibited Activities:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Using the Service for illegal or unauthorized purposes"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Infringing on the intellectual property rights of others"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Uploading harmful or unlawful content"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Attempting to gain unauthorized access to the Service"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(ii,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"4. Subscription and Payment"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.1. Fees and Payment:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Payment is made in advance for the subscription period"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"All fees are in Rupiah and exclude taxes"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Payments are processed through official payment gateways"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You are responsible for all applicable fees and taxes"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.2. Changes and Cancellation:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We may change prices with 30 days' notice"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Cancellation can be done before the next billing period"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Refunds are subject to the applicable refund policy"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"No refunds for the current active period"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Rr,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"5. Intellectual Property Rights"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.1. Ownership:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"All Intellectual Property Rights in the Service belong to ResponPintar"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Users retain rights to their Customer Data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Uploaded content remains the property of the uploader"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.2. License:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We grant a limited, non-exclusive license to use the Service"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You grant us a license to process Customer Data as required by the Service"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"The license terminates when use of the Service is discontinued"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(si,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"6. Limitation of Liability"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"6.1. General Limitations:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:'The Service is provided "as is" without any warranties'})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We are not liable for indirect damages"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Our total liability is limited to the amount you have paid"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"6.2. Exclusions:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Data loss due to User negligence"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Service disruptions beyond our control"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Damage caused by User devices or connectivity"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Losses resulting from violation of these Terms"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(oi,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"7. Termination of Service"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"7.1. Termination by Us:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Violation of terms of use"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Failure to pay service fees"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Engaging in suspicious or harmful activities"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Upon request from competent authorities"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"7.2. Termination by User:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"May terminate the service at any time"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Must provide written notice"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Responsible for backing up Customer Data"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(li,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"8. Changes to Terms"})})]}),t.jsxs("div",{className:"ml-14",children:[t.jsx("h3",{className:"text-lg mb-2",children:"8.1. Change Process:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We reserve the right to modify these Terms at any time"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Material changes will be notified 30 days in advance"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Notification via email or platform"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Continued use constitutes acceptance of the changes"})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(ci,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"9. Governing Law"})})]}),t.jsxs("div",{className:"ml-14",children:[t.jsx("h3",{className:"text-lg mb-2",children:"9.1. Jurisdiction:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"These Terms are governed by the laws of the Republic of Indonesia"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Any dispute shall first be resolved through mediation"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"If mediation fails, disputes shall be resolved at the South Jakarta District Court"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You agree to submit to the exclusive jurisdiction of said court"})]})]})]})]}),t.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8",children:[t.jsx("h2",{className:"text-2xl mb-6 text-center",children:"10. Contact"}),t.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"For questions or clarification about these Terms, please contact us at:"}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(St,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Email"}),t.jsx("p",{className:"text-sm text-center",children:"support@responpintar.com"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(It,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Phone"}),t.jsx("p",{className:"text-sm",children:"+62 821-8988-5080"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(ln,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Address"}),t.jsx("p",{className:"text-sm text-center",children:"Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160"})]})]})]})]})]})})}function Ls(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx($t,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"About Us"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Digital Transformation for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),t.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"ResponPintar is a technology company focused on AI solutions for various industries, helping businesses solve customer service challenges with innovative and easy-to-use technology."})]}),t.jsx("section",{className:"mb-20",children:t.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border",children:[t.jsx(ui,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Our Story"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl",children:["Building the Future of"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),t.jsxs("div",{className:"space-y-4 text-muted-foreground leading-relaxed",children:[t.jsx("p",{children:"ResponPintar was founded with the mission of empowering businesses across Southeast Asia with AI technology accessible to everyone. We understand that every industry has unique needs when it comes to serving their customers."}),t.jsx("p",{children:"From e-commerce to healthcare, from education to banking — we provide solutions that can be customized to meet the specific needs of every business. Our team consists of AI experts, experienced developers, and customer experience specialists dedicated to creating technology that truly makes a difference."}),t.jsx("p",{children:"We don't just provide a platform — we become a partner in your digital transformation journey. With 24/7 support and continuous innovation, we ensure your business stays one step ahead."})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl"}),t.jsx("div",{className:"relative bg-card border border-border rounded-2xl p-8 space-y-6",children:t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"10K+"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Users"})]}),t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"50M+"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Messages Processed"})]}),t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"98%"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer Satisfaction"})]}),t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"24/7"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Support Available"})]})]})})]})]})}),t.jsx("section",{className:"mb-20",children:t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[t.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:t.jsx(di,{className:"w-7 h-7 text-white"})}),t.jsx("h2",{className:"text-2xl mb-4",children:"Our Vision"}),t.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To be the leader in digital transformation of customer service in Southeast Asia through sustainable and impactful AI innovation."})]}),t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[t.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:t.jsx(mi,{className:"w-7 h-7 text-white"})}),t.jsx("h2",{className:"text-2xl mb-4",children:"Our Mission"}),t.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To empower every business with AI technology that is accessible, efficient, and affordable to improve the quality of their customer service."})]})]})}),t.jsxs("section",{className:"mb-20",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Our"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Values"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"The principles that guide every decision and innovation we make"})]}),t.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(Ue,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Innovation"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Continuously innovating to deliver the best solutions"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx($t,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Customer First"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer satisfaction is our top priority"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(Rr,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Excellence"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Committed to quality and excellence"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(pi,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Accessibility"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Technology accessible to everyone"})]})]})]}),t.jsxs("section",{className:"mb-20",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Industries We"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Serve"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Custom solutions for various industry sectors"})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"E-Commerce",desc:"Quick responses for product inquiries and orders",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"6",y:"14",width:"28",height:"20",rx:"3",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("path",{d:"M14 14V10a6 6 0 0 1 12 0v4",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"20",cy:"25",r:"3",fill:"var(--brand-primary)",fillOpacity:"0.5"})]})},{title:"Healthcare",desc:"24/7 consultation and health information services",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"4",y:"4",width:"32",height:"32",rx:"8",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("path",{d:"M20 12v16M12 20h16",stroke:"var(--brand-primary)",strokeWidth:"3",strokeLinecap:"round"})]})},{title:"Education",desc:"Learning support and student administration",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("path",{d:"M20 8L4 18l16 10 16-10L20 8z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("path",{d:"M10 23v7l10 5 10-5v-7",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.05"}),t.jsx("line",{x1:"36",y1:"18",x2:"36",y2:"32",stroke:"var(--brand-primary)",strokeWidth:"2"})]})},{title:"Banking",desc:"Customer service and financial product information",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("path",{d:"M20 4L4 14h32L20 4z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("rect",{x:"4",y:"32",width:"32",height:"4",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.3"}),t.jsx("rect",{x:"9",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"}),t.jsx("rect",{x:"27",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"})]})},{title:"Hospitality",desc:"Better booking and guest service experience",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"6",y:"12",width:"28",height:"22",rx:"3",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("rect",{x:"16",y:"6",width:"8",height:"8",rx:"2",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("path",{d:"M6 20h28",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.4"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"6",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2"}),t.jsx("rect",{x:"22",y:"24",width:"6",height:"6",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2"})]})},{title:"Technology",desc:"Technical support and user onboarding",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"10",y:"4",width:"20",height:"32",rx:"4",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("line",{x1:"10",y1:"10",x2:"30",y2:"10",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.3"}),t.jsx("line",{x1:"10",y1:"30",x2:"30",y2:"30",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.3"}),t.jsx("circle",{cx:"20",cy:"33",r:"1.5",fill:"var(--brand-primary)",fillOpacity:"0.5"}),t.jsx("path",{d:"M16 18l3 3 5-6",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}].map((e,n)=>t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all",children:[t.jsx("div",{className:"mb-4",children:e.svg}),t.jsx("h3",{className:"text-lg mb-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:e.desc})]},n))})]}),t.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl p-12 text-center text-white",children:[t.jsx(hi,{className:"w-12 h-12 mx-auto mb-6"}),t.jsx("h2",{className:"text-3xl sm:text-4xl mb-4",children:"Ready to Transform Your Customer Service?"}),t.jsx("p",{className:"text-lg mb-8 opacity-90 max-w-2xl mx-auto",children:"Join thousands of businesses that have experienced the benefits of AI technology from ResponPintar"}),t.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[t.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:t.jsx("a",{href:"https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Contact Sales"})}),t.jsx("a",{href:"/demo",className:"px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all inline-block",children:"View Demo"})]})]})]})})}const le=[{slug:"bagaimana-ai-mengubah-landscape-customer-service-2025",title:"Bagaimana AI Mengubah Landscape Customer Service di 2025",excerpt:"Perkembangan AI telah membawa perubahan signifikan dalam cara bisnis berinteraksi dengan pelanggan mereka. Simak tren terbaru yang perlu Anda ketahui.",category:"Teknologi",date:"15 Mar 2025",image:"/images/blog/ai-customer-service.jpg",readTime:"8 menit",author:{name:"Dr. Sarah Wijaya",avatar:"SW"},content:`
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
    `}],Os="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function wt(e){const[n,r]=ee.useState(!1),a=()=>{r(!0)},{src:i,alt:s,style:o,className:l,...u}=e;return n?t.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${l??""}`,style:o,children:t.jsx("div",{className:"flex items-center justify-center w-full h-full",children:t.jsx("img",{src:Os,alt:"Error loading image",...u,"data-original-url":i})})}):t.jsx("img",{src:i,alt:s,className:l,style:o,...u,onError:a})}function Bs(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(gi,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Blog & Insights"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Articles & Insights on"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),t.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"Learn the latest strategies, tips, and trends in customer service and AI to help your business grow"})]}),t.jsx("div",{className:"mb-16",children:t.jsx(ae,{to:`/blog/${le[0].slug}`,className:"group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 transition-all",children:t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"relative h-64 lg:h-auto",children:[t.jsx(wt,{src:le[0].image,alt:le[0].title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute top-4 left-4",children:t.jsx("span",{className:"px-3 py-1 bg-[var(--brand-primary)] text-white text-xs rounded-full",children:"Featured"})})]}),t.jsxs("div",{className:"p-8 flex flex-col justify-center",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-muted-foreground",children:[t.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:le[0].category}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(We,{className:"w-4 h-4"}),t.jsx("span",{children:le[0].date})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(yt,{className:"w-4 h-4"}),t.jsx("span",{children:le[0].readTime})]})]}),t.jsx("h2",{className:"text-3xl mb-4 group-hover:text-[var(--brand-primary)] transition-colors",children:le[0].title}),t.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:le[0].excerpt}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx("span",{className:"text-white text-sm",children:le[0].author.avatar})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm",children:le[0].author.name}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Author"})]})]}),t.jsxs("div",{className:"flex items-center gap-2 text-[var(--brand-primary)] group-hover:gap-3 transition-all",children:[t.jsx("span",{className:"text-sm",children:"Read More"}),t.jsx(bt,{className:"w-4 h-4"})]})]})]})]})})}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:le.slice(1).map(e=>t.jsxs(ae,{to:`/blog/${e.slug}`,className:"group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all",children:[t.jsx("div",{className:"relative h-48 overflow-hidden",children:t.jsx(wt,{src:e.image,alt:e.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3 text-xs text-muted-foreground",children:[t.jsx("span",{className:"px-2 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:e.category}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(We,{className:"w-3 h-3"}),t.jsx("span",{children:e.date})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(yt,{className:"w-3 h-3"}),t.jsx("span",{children:e.readTime})]})]}),t.jsx("h3",{className:"text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:e.excerpt}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx("span",{className:"text-white text-xs",children:e.author.avatar})}),t.jsx("span",{className:"text-xs",children:e.author.name})]}),t.jsx(bt,{className:"w-4 h-4 text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform"})]})]})]},e.slug))}),t.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl",children:[t.jsx("h2",{className:"text-2xl mb-6 text-center",children:"Categories"}),t.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:Array.from(new Set(le.map(e=>e.category))).map(e=>t.jsx("button",{className:"px-4 py-2 bg-card border border-border rounded-lg hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all",children:e},e))})]})]})})}function Fs(e,n){const r={};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const _s=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Us=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Vs={};function Wn(e,n){return(Vs.jsx?Us:_s).test(e)}const Hs=/[ \t\n\f\r]/g;function Ws(e){return typeof e=="object"?e.type==="text"?qn(e.value):!1:qn(e)}function qn(e){return e.replace(Hs,"")===""}class lt{constructor(n,r,a){this.normal=r,this.property=n,a&&(this.space=a)}}lt.prototype.normal={};lt.prototype.property={};lt.prototype.space=void 0;function Kr(e,n){const r={},a={};for(const i of e)Object.assign(r,i.property),Object.assign(a,i.normal);return new lt(r,a,n)}function Jt(e){return e.toLowerCase()}class ue{constructor(n,r){this.attribute=r,this.property=n}}ue.prototype.attribute="";ue.prototype.booleanish=!1;ue.prototype.boolean=!1;ue.prototype.commaOrSpaceSeparated=!1;ue.prototype.commaSeparated=!1;ue.prototype.defined=!1;ue.prototype.mustUseProperty=!1;ue.prototype.number=!1;ue.prototype.overloadedBoolean=!1;ue.prototype.property="";ue.prototype.spaceSeparated=!1;ue.prototype.space=void 0;let qs=0;const O=ze(),ne=ze(),Xt=ze(),v=ze(),Y=ze(),Ve=ze(),pe=ze();function ze(){return 2**++qs}const Zt=Object.freeze(Object.defineProperty({__proto__:null,boolean:O,booleanish:ne,commaOrSpaceSeparated:pe,commaSeparated:Ve,number:v,overloadedBoolean:Xt,spaceSeparated:Y},Symbol.toStringTag,{value:"Module"})),Dt=Object.keys(Zt);class un extends ue{constructor(n,r,a,i){let s=-1;if(super(n,r),Gn(this,"space",i),typeof a=="number")for(;++s<Dt.length;){const o=Dt[s];Gn(this,Dt[s],(a&Zt[o])===Zt[o])}}}un.prototype.defined=!0;function Gn(e,n,r){r&&(e[n]=r)}function Ke(e){const n={},r={};for(const[a,i]of Object.entries(e.properties)){const s=new un(a,e.transform(e.attributes||{},a),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(s.mustUseProperty=!0),n[a]=s,r[Jt(a)]=a,r[Jt(s.attribute)]=a}return new lt(n,r,e.space)}const $r=Ke({properties:{ariaActiveDescendant:null,ariaAtomic:ne,ariaAutoComplete:null,ariaBusy:ne,ariaChecked:ne,ariaColCount:v,ariaColIndex:v,ariaColSpan:v,ariaControls:Y,ariaCurrent:null,ariaDescribedBy:Y,ariaDetails:null,ariaDisabled:ne,ariaDropEffect:Y,ariaErrorMessage:null,ariaExpanded:ne,ariaFlowTo:Y,ariaGrabbed:ne,ariaHasPopup:null,ariaHidden:ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Y,ariaLevel:v,ariaLive:null,ariaModal:ne,ariaMultiLine:ne,ariaMultiSelectable:ne,ariaOrientation:null,ariaOwns:Y,ariaPlaceholder:null,ariaPosInSet:v,ariaPressed:ne,ariaReadOnly:ne,ariaRelevant:null,ariaRequired:ne,ariaRoleDescription:Y,ariaRowCount:v,ariaRowIndex:v,ariaRowSpan:v,ariaSelected:ne,ariaSetSize:v,ariaSort:null,ariaValueMax:v,ariaValueMin:v,ariaValueNow:v,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Qr(e,n){return n in e?e[n]:n}function Yr(e,n){return Qr(e,n.toLowerCase())}const Gs=Ke({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ve,acceptCharset:Y,accessKey:Y,action:null,allow:null,allowFullScreen:O,allowPaymentRequest:O,allowUserMedia:O,alt:null,as:null,async:O,autoCapitalize:null,autoComplete:Y,autoFocus:O,autoPlay:O,blocking:Y,capture:null,charSet:null,checked:O,cite:null,className:Y,cols:v,colSpan:null,content:null,contentEditable:ne,controls:O,controlsList:Y,coords:v|Ve,crossOrigin:null,data:null,dateTime:null,decoding:null,default:O,defer:O,dir:null,dirName:null,disabled:O,download:Xt,draggable:ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:O,formTarget:null,headers:Y,height:v,hidden:Xt,high:v,href:null,hrefLang:null,htmlFor:Y,httpEquiv:Y,id:null,imageSizes:null,imageSrcSet:null,inert:O,inputMode:null,integrity:null,is:null,isMap:O,itemId:null,itemProp:Y,itemRef:Y,itemScope:O,itemType:Y,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:O,low:v,manifest:null,max:null,maxLength:v,media:null,method:null,min:null,minLength:v,multiple:O,muted:O,name:null,nonce:null,noModule:O,noValidate:O,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:O,optimum:v,pattern:null,ping:Y,placeholder:null,playsInline:O,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:O,referrerPolicy:null,rel:Y,required:O,reversed:O,rows:v,rowSpan:v,sandbox:Y,scope:null,scoped:O,seamless:O,selected:O,shadowRootClonable:O,shadowRootDelegatesFocus:O,shadowRootMode:null,shape:null,size:v,sizes:null,slot:null,span:v,spellCheck:ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:v,step:null,style:null,tabIndex:v,target:null,title:null,translate:null,type:null,typeMustMatch:O,useMap:null,value:ne,width:v,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Y,axis:null,background:null,bgColor:null,border:v,borderColor:null,bottomMargin:v,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:O,declare:O,event:null,face:null,frame:null,frameBorder:null,hSpace:v,leftMargin:v,link:null,longDesc:null,lowSrc:null,marginHeight:v,marginWidth:v,noResize:O,noHref:O,noShade:O,noWrap:O,object:null,profile:null,prompt:null,rev:null,rightMargin:v,rules:null,scheme:null,scrolling:ne,standby:null,summary:null,text:null,topMargin:v,valueType:null,version:null,vAlign:null,vLink:null,vSpace:v,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:O,disableRemotePlayback:O,prefix:null,property:null,results:v,security:null,unselectable:null},space:"html",transform:Yr}),Ks=Ke({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:pe,accentHeight:v,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:v,amplitude:v,arabicForm:null,ascent:v,attributeName:null,attributeType:null,azimuth:v,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:v,by:null,calcMode:null,capHeight:v,className:Y,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:v,diffuseConstant:v,direction:null,display:null,dur:null,divisor:v,dominantBaseline:null,download:O,dx:null,dy:null,edgeMode:null,editable:null,elevation:v,enableBackground:null,end:null,event:null,exponent:v,externalResourcesRequired:null,fill:null,fillOpacity:v,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ve,g2:Ve,glyphName:Ve,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:v,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:v,horizOriginX:v,horizOriginY:v,id:null,ideographic:v,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:v,k:v,k1:v,k2:v,k3:v,k4:v,kernelMatrix:pe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:v,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:v,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:v,overlineThickness:v,paintOrder:null,panose1:null,path:null,pathLength:v,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Y,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:v,pointsAtY:v,pointsAtZ:v,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:pe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:pe,rev:pe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:pe,requiredFeatures:pe,requiredFonts:pe,requiredFormats:pe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:v,specularExponent:v,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:v,strikethroughThickness:v,string:null,stroke:null,strokeDashArray:pe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:v,strokeOpacity:v,strokeWidth:null,style:null,surfaceScale:v,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:pe,tabIndex:v,tableValues:null,target:null,targetX:v,targetY:v,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:pe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:v,underlineThickness:v,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:v,values:null,vAlphabetic:v,vMathematical:v,vectorEffect:null,vHanging:v,vIdeographic:v,version:null,vertAdvY:v,vertOriginX:v,vertOriginY:v,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:v,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Qr}),Jr=Ke({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Xr=Ke({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Yr}),Zr=Ke({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),$s={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Qs=/[A-Z]/g,Kn=/-[a-z]/g,Ys=/^data[-\w.:]+$/i;function Js(e,n){const r=Jt(n);let a=n,i=ue;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&Ys.test(n)){if(n.charAt(4)==="-"){const s=n.slice(5).replace(Kn,Zs);a="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=n.slice(4);if(!Kn.test(s)){let o=s.replace(Qs,Xs);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=un}return new i(a,n)}function Xs(e){return"-"+e.toLowerCase()}function Zs(e){return e.charAt(1).toUpperCase()}const eo=Kr([$r,Gs,Jr,Xr,Zr],"html"),dn=Kr([$r,Ks,Jr,Xr,Zr],"svg");function to(e){return e.join(" ").trim()}var Fe={},zt,$n;function no(){if($n)return zt;$n=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,c="/",d="*",m="",g="comment",p="declaration";function k(N,y){if(typeof N!="string")throw new TypeError("First argument must be a string");if(!N)return[];y=y||{};var D=1,S=1;function H(M){var C=M.match(n);C&&(D+=C.length);var _=M.lastIndexOf(u);S=~_?M.length-_:S+M.length}function W(){var M={line:D,column:S};return function(C){return C.position=new b(M),B(),C}}function b(M){this.start=M,this.end={line:D,column:S},this.source=y.source}b.prototype.content=N;function U(M){var C=new Error(y.source+":"+D+":"+S+": "+M);if(C.reason=M,C.filename=y.source,C.line=D,C.column=S,C.source=N,!y.silent)throw C}function I(M){var C=M.exec(N);if(C){var _=C[0];return H(_),N=N.slice(_.length),C}}function B(){I(r)}function q(M){var C;for(M=M||[];C=E();)C!==!1&&M.push(C);return M}function E(){var M=W();if(!(c!=N.charAt(0)||d!=N.charAt(1))){for(var C=2;m!=N.charAt(C)&&(d!=N.charAt(C)||c!=N.charAt(C+1));)++C;if(C+=2,m===N.charAt(C-1))return U("End of comment missing");var _=N.slice(2,C-2);return S+=2,H(_),N=N.slice(C),S+=2,M({type:g,comment:_})}}function T(){var M=W(),C=I(a);if(C){if(E(),!I(i))return U("property missing ':'");var _=I(s),$=M({type:p,property:j(C[0].replace(e,m)),value:_?j(_[0].replace(e,m)):m});return I(o),$}}function K(){var M=[];q(M);for(var C;C=T();)C!==!1&&(M.push(C),q(M));return M}return B(),K()}function j(N){return N?N.replace(l,m):m}return zt=k,zt}var Qn;function ro(){if(Qn)return Fe;Qn=1;var e=Fe&&Fe.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default=r;const n=e(no());function r(a,i){let s=null;if(!a||typeof a!="string")return s;const o=(0,n.default)(a),l=typeof i=="function";return o.forEach(u=>{if(u.type!=="declaration")return;const{property:c,value:d}=u;l?i(c,d,u):d&&(s=s||{},s[c]=d)}),s}return Fe}var Ze={},Yn;function ao(){if(Yn)return Ze;Yn=1,Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,s=function(c){return!c||r.test(c)||e.test(c)},o=function(c,d){return d.toUpperCase()},l=function(c,d){return"".concat(d,"-")},u=function(c,d){return d===void 0&&(d={}),s(c)?c:(c=c.toLowerCase(),d.reactCompat?c=c.replace(i,l):c=c.replace(a,l),c.replace(n,o))};return Ze.camelCase=u,Ze}var et,Jn;function io(){if(Jn)return et;Jn=1;var e=et&&et.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},n=e(ro()),r=ao();function a(i,s){var o={};return!i||typeof i!="string"||(0,n.default)(i,function(l,u){l&&u&&(o[(0,r.camelCase)(l,s)]=u)}),o}return a.default=a,et=a,et}var so=io();const oo=Ar(so),ea=ta("end"),mn=ta("start");function ta(e){return n;function n(r){const a=r&&r.position&&r.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function lo(e){const n=mn(e),r=ea(e);if(n&&r)return{start:n,end:r}}function at(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Xn(e.position):"start"in e||"end"in e?Xn(e):"line"in e||"column"in e?en(e):""}function en(e){return Zn(e&&e.line)+":"+Zn(e&&e.column)}function Xn(e){return en(e&&e.start)+"-"+en(e&&e.end)}function Zn(e){return e&&typeof e=="number"?e:1}class ie extends Error{constructor(n,r,a){super(),typeof r=="string"&&(a=r,r=void 0);let i="",s={},o=!1;if(r&&("line"in r&&"column"in r?s={place:r}:"start"in r&&"end"in r?s={place:r}:"type"in r?s={ancestors:[r],place:r.position}:s={...r}),typeof n=="string"?i=n:!s.cause&&n&&(o=!0,i=n.message,s.cause=n),!s.ruleId&&!s.source&&typeof a=="string"){const u=a.indexOf(":");u===-1?s.ruleId=a:(s.source=a.slice(0,u),s.ruleId=a.slice(u+1))}if(!s.place&&s.ancestors&&s.ancestors){const u=s.ancestors[s.ancestors.length-1];u&&(s.place=u.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=at(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ie.prototype.file="";ie.prototype.name="";ie.prototype.reason="";ie.prototype.message="";ie.prototype.stack="";ie.prototype.column=void 0;ie.prototype.line=void 0;ie.prototype.ancestors=void 0;ie.prototype.cause=void 0;ie.prototype.fatal=void 0;ie.prototype.place=void 0;ie.prototype.ruleId=void 0;ie.prototype.source=void 0;const pn={}.hasOwnProperty,co=new Map,uo=/[A-Z]/g,mo=new Set(["table","tbody","thead","tfoot","tr"]),po=new Set(["td","th"]),na="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ho(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=n.filePath||void 0;let a;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=jo(r,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=ko(r,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:a,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?dn:eo,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},s=ra(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function ra(e,n,r){if(n.type==="element")return go(e,n,r);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return fo(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return bo(e,n,r);if(n.type==="mdxjsEsm")return xo(e,n);if(n.type==="root")return yo(e,n,r);if(n.type==="text")return vo(e,n)}function go(e,n,r){const a=e.schema;let i=a;n.tagName.toLowerCase()==="svg"&&a.space==="html"&&(i=dn,e.schema=i),e.ancestors.push(n);const s=ia(e,n.tagName,!1),o=wo(e,n);let l=gn(e,n);return mo.has(n.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!Ws(u):!0})),aa(e,o,s,n),hn(o,l),e.ancestors.pop(),e.schema=a,e.create(n,s,o,r)}function fo(e,n){if(n.data&&n.data.estree&&e.evaluater){const a=n.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}ot(e,n.position)}function xo(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);ot(e,n.position)}function bo(e,n,r){const a=e.schema;let i=a;n.name==="svg"&&a.space==="html"&&(i=dn,e.schema=i),e.ancestors.push(n);const s=n.name===null?e.Fragment:ia(e,n.name,!0),o=No(e,n),l=gn(e,n);return aa(e,o,s,n),hn(o,l),e.ancestors.pop(),e.schema=a,e.create(n,s,o,r)}function yo(e,n,r){const a={};return hn(a,gn(e,n)),e.create(n,e.Fragment,a,r)}function vo(e,n){return n.value}function aa(e,n,r,a){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(n.node=a)}function hn(e,n){if(n.length>0){const r=n.length>1?n:n[0];r&&(e.children=r)}}function ko(e,n,r){return a;function a(i,s,o,l){const c=Array.isArray(o.children)?r:n;return l?c(s,o,l):c(s,o)}}function jo(e,n){return r;function r(a,i,s,o){const l=Array.isArray(s.children),u=mn(a);return n(i,s,o,l,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function wo(e,n){const r={};let a,i;for(i in n.properties)if(i!=="children"&&pn.call(n.properties,i)){const s=Co(e,i,n.properties[i]);if(s){const[o,l]=s;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&po.has(n.tagName)?a=l:r[o]=l}}if(a){const s=r.style||(r.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return r}function No(e,n){const r={};for(const a of n.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const s=a.data.estree.body[0];s.type;const o=s.expression;o.type;const l=o.properties[0];l.type,Object.assign(r,e.evaluater.evaluateExpression(l.argument))}else ot(e,n.position);else{const i=a.name;let s;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const l=a.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else ot(e,n.position);else s=a.value===null?!0:a.value;r[i]=s}return r}function gn(e,n){const r=[];let a=-1;const i=e.passKeys?new Map:co;for(;++a<n.children.length;){const s=n.children[a];let o;if(e.passKeys){const u=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(u){const c=i.get(u)||0;o=u+"-"+c,i.set(u,c+1)}}const l=ra(e,s,o);l!==void 0&&r.push(l)}return r}function Co(e,n,r){const a=Js(e.schema,n);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=a.commaSeparated?Fs(r):to(r)),a.property==="style"){let i=typeof r=="object"?r:So(e,String(r));return e.stylePropertyNameCase==="css"&&(i=Io(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&a.space?$s[a.property]||a.property:a.attribute,r]}}function So(e,n){try{return oo(n,{reactCompat:!0})}catch(r){if(e.ignoreInvalidStyle)return{};const a=r,i=new ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=na+"#cannot-parse-style-attribute",i}}function ia(e,n,r){let a;if(!r)a={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let s=-1,o;for(;++s<i.length;){const l=Wn(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}a=o}else a=Wn(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(a.type==="Literal"){const i=a.value;return pn.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(a);ot(e)}function ot(e,n){const r=new ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=na+"#cannot-handle-mdx-estrees-without-createevaluater",r}function Io(e){const n={};let r;for(r in e)pn.call(e,r)&&(n[Ao(r)]=e[r]);return n}function Ao(e){let n=e.replace(uo,Po);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Po(e){return"-"+e.toLowerCase()}const Lt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ro={};function To(e,n){const r=Ro,a=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,i=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return sa(e,a,i)}function sa(e,n,r){if(Eo(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return er(e.children,n,r)}return Array.isArray(e)?er(e,n,r):""}function er(e,n,r){const a=[];let i=-1;for(;++i<e.length;)a[i]=sa(e[i],n,r);return a.join("")}function Eo(e){return!!(e&&typeof e=="object")}const tr=document.createElement("i");function fn(e){const n="&"+e+";";tr.innerHTML=n;const r=tr.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===n?!1:r}function Ne(e,n,r,a){const i=e.length;let s=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,r=r>0?r:0,a.length<1e4)o=Array.from(a),o.unshift(n,r),e.splice(...o);else for(r&&e.splice(n,r);s<a.length;)o=a.slice(s,s+1e4),o.unshift(n,0),e.splice(...o),s+=1e4,n+=1e4}function xe(e,n){return e.length>0?(Ne(e,e.length,0,n),e):n}const nr={}.hasOwnProperty;function Mo(e){const n={};let r=-1;for(;++r<e.length;)Do(n,e[r]);return n}function Do(e,n){let r;for(r in n){const i=(nr.call(e,r)?e[r]:void 0)||(e[r]={}),s=n[r];let o;if(s)for(o in s){nr.call(i,o)||(i[o]=[]);const l=s[o];zo(i[o],Array.isArray(l)?l:l?[l]:[])}}}function zo(e,n){let r=-1;const a=[];for(;++r<n.length;)(n[r].add==="after"?e:a).push(n[r]);Ne(e,0,0,a)}function oa(e,n){const r=Number.parseInt(e,n);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function He(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const we=Te(/[A-Za-z]/),he=Te(/[\dA-Za-z]/),Lo=Te(/[#-'*+\--9=?A-Z^-~]/);function tn(e){return e!==null&&(e<32||e===127)}const nn=Te(/\d/),Oo=Te(/[\dA-Fa-f]/),Bo=Te(/[!-/:-@[-`{-~]/);function z(e){return e!==null&&e<-2}function ce(e){return e!==null&&(e<0||e===32)}function G(e){return e===-2||e===-1||e===32}const Fo=Te(/\p{P}|\p{S}/u),_o=Te(/\s/);function Te(e){return n;function n(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function $e(e){const n=[];let r=-1,a=0,i=0;for(;++r<e.length;){const s=e.charCodeAt(r);let o="";if(s===37&&he(e.charCodeAt(r+1))&&he(e.charCodeAt(r+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(r+1);s<56320&&l>56319&&l<57344?(o=String.fromCharCode(s,l),i=1):o="�"}else o=String.fromCharCode(s);o&&(n.push(e.slice(a,r),encodeURIComponent(o)),a=r+i+1,o=""),i&&(r+=i,i=0)}return n.join("")+e.slice(a)}function J(e,n,r,a){const i=a?a-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(u){return G(u)?(e.enter(r),l(u)):n(u)}function l(u){return G(u)&&s++<i?(e.consume(u),l):(e.exit(r),n(u))}}const Uo={tokenize:Vo};function Vo(e){const n=e.attempt(this.parser.constructs.contentInitial,a,i);let r;return n;function a(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),J(e,n,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const u=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=u),r=u,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return z(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),o)}}const Ho={tokenize:Wo},rr={tokenize:qo};function Wo(e){const n=this,r=[];let a=0,i,s,o;return l;function l(S){if(a<r.length){const H=r[a];return n.containerState=H[1],e.attempt(H[0].continuation,u,c)(S)}return c(S)}function u(S){if(a++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&D();const H=n.events.length;let W=H,b;for(;W--;)if(n.events[W][0]==="exit"&&n.events[W][1].type==="chunkFlow"){b=n.events[W][1].end;break}y(a);let U=H;for(;U<n.events.length;)n.events[U][1].end={...b},U++;return Ne(n.events,W+1,0,n.events.slice(H)),n.events.length=U,c(S)}return l(S)}function c(S){if(a===r.length){if(!i)return g(S);if(i.currentConstruct&&i.currentConstruct.concrete)return k(S);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(rr,d,m)(S)}function d(S){return i&&D(),y(a),g(S)}function m(S){return n.parser.lazy[n.now().line]=a!==r.length,o=n.now().offset,k(S)}function g(S){return n.containerState={},e.attempt(rr,p,k)(S)}function p(S){return a++,r.push([n.currentConstruct,n.containerState]),g(S)}function k(S){if(S===null){i&&D(),y(0),e.consume(S);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),j(S)}function j(S){if(S===null){N(e.exit("chunkFlow"),!0),y(0),e.consume(S);return}return z(S)?(e.consume(S),N(e.exit("chunkFlow")),a=0,n.interrupt=void 0,l):(e.consume(S),j)}function N(S,H){const W=n.sliceStream(S);if(H&&W.push(null),S.previous=s,s&&(s.next=S),s=S,i.defineSkip(S.start),i.write(W),n.parser.lazy[S.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<o&&(!i.events[b][1].end||i.events[b][1].end.offset>o))return;const U=n.events.length;let I=U,B,q;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){if(B){q=n.events[I][1].end;break}B=!0}for(y(a),b=U;b<n.events.length;)n.events[b][1].end={...q},b++;Ne(n.events,I+1,0,n.events.slice(U)),n.events.length=b}}function y(S){let H=r.length;for(;H-- >S;){const W=r[H];n.containerState=W[1],W[0].exit.call(n,e)}r.length=S}function D(){i.write([null]),s=void 0,i=void 0,n.containerState._closeFlow=void 0}}function qo(e,n,r){return J(e,e.attempt(this.parser.constructs.document,n,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ar(e){if(e===null||ce(e)||_o(e))return 1;if(Fo(e))return 2}function xn(e,n,r){const a=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!a.includes(s)&&(n=s(n,r),a.push(s))}return n}const rn={name:"attention",resolveAll:Go,tokenize:Ko};function Go(e,n){let r=-1,a,i,s,o,l,u,c,d;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(a=r;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&n.sliceSerialize(e[a][1]).charCodeAt(0)===n.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[a][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;u=e[a][1].end.offset-e[a][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const m={...e[a][1].end},g={...e[r][1].start};ir(m,-u),ir(g,u),o={type:u>1?"strongSequence":"emphasisSequence",start:m,end:{...e[a][1].end}},l={type:u>1?"strongSequence":"emphasisSequence",start:{...e[r][1].start},end:g},s={type:u>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[r][1].start}},i={type:u>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[a][1].end={...o.start},e[r][1].start={...l.end},c=[],e[a][1].end.offset-e[a][1].start.offset&&(c=xe(c,[["enter",e[a][1],n],["exit",e[a][1],n]])),c=xe(c,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",s,n]]),c=xe(c,xn(n.parser.constructs.insideSpan.null,e.slice(a+1,r),n)),c=xe(c,[["exit",s,n],["enter",l,n],["exit",l,n],["exit",i,n]]),e[r][1].end.offset-e[r][1].start.offset?(d=2,c=xe(c,[["enter",e[r][1],n],["exit",e[r][1],n]])):d=0,Ne(e,a-1,r-a+3,c),r=a+c.length-d-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function Ko(e,n){const r=this.parser.constructs.attentionMarkers.null,a=this.previous,i=ar(a);let s;return o;function o(u){return s=u,e.enter("attentionSequence"),l(u)}function l(u){if(u===s)return e.consume(u),l;const c=e.exit("attentionSequence"),d=ar(u),m=!d||d===2&&i||r.includes(u),g=!i||i===2&&d||r.includes(a);return c._open=!!(s===42?m:m&&(i||!g)),c._close=!!(s===42?g:g&&(d||!m)),n(u)}}function ir(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const $o={name:"autolink",tokenize:Qo};function Qo(e,n,r){let a=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(p){return we(p)?(e.consume(p),o):p===64?r(p):c(p)}function o(p){return p===43||p===45||p===46||he(p)?(a=1,l(p)):c(p)}function l(p){return p===58?(e.consume(p),a=0,u):(p===43||p===45||p===46||he(p))&&a++<32?(e.consume(p),l):(a=0,c(p))}function u(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||tn(p)?r(p):(e.consume(p),u)}function c(p){return p===64?(e.consume(p),d):Lo(p)?(e.consume(p),c):r(p)}function d(p){return he(p)?m(p):r(p)}function m(p){return p===46?(e.consume(p),a=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):g(p)}function g(p){if((p===45||he(p))&&a++<63){const k=p===45?g:m;return e.consume(p),k}return r(p)}}const At={partial:!0,tokenize:Yo};function Yo(e,n,r){return a;function a(s){return G(s)?J(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||z(s)?n(s):r(s)}}const la={continuation:{tokenize:Xo},exit:Zo,name:"blockQuote",tokenize:Jo};function Jo(e,n,r){const a=this;return i;function i(o){if(o===62){const l=a.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),s}return r(o)}function s(o){return G(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function Xo(e,n,r){const a=this;return i;function i(o){return G(o)?J(e,s,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return e.attempt(la,n,r)(o)}}function Zo(e){e.exit("blockQuote")}const ca={name:"characterEscape",tokenize:el};function el(e,n,r){return a;function a(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return Bo(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):r(s)}}const ua={name:"characterReference",tokenize:tl};function tl(e,n,r){const a=this;let i=0,s,o;return l;function l(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),u}function u(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),s=31,o=he,d(m))}function c(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,o=Oo,d):(e.enter("characterReferenceValue"),s=7,o=nn,d(m))}function d(m){if(m===59&&i){const g=e.exit("characterReferenceValue");return o===he&&!fn(a.sliceSerialize(g))?r(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(m)&&i++<s?(e.consume(m),d):r(m)}}const sr={partial:!0,tokenize:rl},or={concrete:!0,name:"codeFenced",tokenize:nl};function nl(e,n,r){const a=this,i={partial:!0,tokenize:W};let s=0,o=0,l;return u;function u(b){return c(b)}function c(b){const U=a.events[a.events.length-1];return s=U&&U[1].type==="linePrefix"?U[2].sliceSerialize(U[1],!0).length:0,l=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(b)}function d(b){return b===l?(o++,e.consume(b),d):o<3?r(b):(e.exit("codeFencedFenceSequence"),G(b)?J(e,m,"whitespace")(b):m(b))}function m(b){return b===null||z(b)?(e.exit("codeFencedFence"),a.interrupt?n(b):e.check(sr,j,H)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||z(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(b)):G(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),J(e,p,"whitespace")(b)):b===96&&b===l?r(b):(e.consume(b),g)}function p(b){return b===null||z(b)?m(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(b))}function k(b){return b===null||z(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(b)):b===96&&b===l?r(b):(e.consume(b),k)}function j(b){return e.attempt(i,H,N)(b)}function N(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),y}function y(b){return s>0&&G(b)?J(e,D,"linePrefix",s+1)(b):D(b)}function D(b){return b===null||z(b)?e.check(sr,j,H)(b):(e.enter("codeFlowValue"),S(b))}function S(b){return b===null||z(b)?(e.exit("codeFlowValue"),D(b)):(e.consume(b),S)}function H(b){return e.exit("codeFenced"),n(b)}function W(b,U,I){let B=0;return q;function q(C){return b.enter("lineEnding"),b.consume(C),b.exit("lineEnding"),E}function E(C){return b.enter("codeFencedFence"),G(C)?J(b,T,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):T(C)}function T(C){return C===l?(b.enter("codeFencedFenceSequence"),K(C)):I(C)}function K(C){return C===l?(B++,b.consume(C),K):B>=o?(b.exit("codeFencedFenceSequence"),G(C)?J(b,M,"whitespace")(C):M(C)):I(C)}function M(C){return C===null||z(C)?(b.exit("codeFencedFence"),U(C)):I(C)}}}function rl(e,n,r){const a=this;return i;function i(o){return o===null?r(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s)}function s(o){return a.parser.lazy[a.now().line]?r(o):n(o)}}const Ot={name:"codeIndented",tokenize:il},al={partial:!0,tokenize:sl};function il(e,n,r){const a=this;return i;function i(c){return e.enter("codeIndented"),J(e,s,"linePrefix",5)(c)}function s(c){const d=a.events[a.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?o(c):r(c)}function o(c){return c===null?u(c):z(c)?e.attempt(al,o,u)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||z(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),l)}function u(c){return e.exit("codeIndented"),n(c)}}function sl(e,n,r){const a=this;return i;function i(o){return a.parser.lazy[a.now().line]?r(o):z(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):J(e,s,"linePrefix",5)(o)}function s(o){const l=a.events[a.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):z(o)?i(o):r(o)}}const ol={name:"codeText",previous:cl,resolve:ll,tokenize:ul};function ll(e){let n=e.length-4,r=3,a,i;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(a=r;++a<n;)if(e[a][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[n][1].type="codeTextPadding",r+=2,n-=2;break}}for(a=r-1,n++;++a<=n;)i===void 0?a!==n&&e[a][1].type!=="lineEnding"&&(i=a):(a===n||e[a][1].type==="lineEnding")&&(e[i][1].type="codeTextData",a!==i+2&&(e[i][1].end=e[a-1][1].end,e.splice(i+2,a-i-2),n-=a-i-2,a=i+2),i=void 0);return e}function cl(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ul(e,n,r){let a=0,i,s;return o;function o(m){return e.enter("codeText"),e.enter("codeTextSequence"),l(m)}function l(m){return m===96?(e.consume(m),a++,l):(e.exit("codeTextSequence"),u(m))}function u(m){return m===null?r(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),u):m===96?(s=e.enter("codeTextSequence"),i=0,d(m)):z(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(m))}function c(m){return m===null||m===32||m===96||z(m)?(e.exit("codeTextData"),u(m)):(e.consume(m),c)}function d(m){return m===96?(e.consume(m),i++,d):i===a?(e.exit("codeTextSequence"),e.exit("codeText"),n(m)):(s.type="codeTextData",c(m))}}class dl{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,r){const a=r??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(n,a):n>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(n,r,a){const i=r||0;this.setCursor(Math.trunc(n));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return a&&tt(this.left,a),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),tt(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),tt(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const r=this.left.splice(n,Number.POSITIVE_INFINITY);tt(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);tt(this.left,r.reverse())}}}function tt(e,n){let r=0;if(n.length<1e4)e.push(...n);else for(;r<n.length;)e.push(...n.slice(r,r+1e4)),r+=1e4}function da(e){const n={};let r=-1,a,i,s,o,l,u,c;const d=new dl(e);for(;++r<d.length;){for(;r in n;)r=n[r];if(a=d.get(r),r&&a[1].type==="chunkFlow"&&d.get(r-1)[1].type==="listItemPrefix"&&(u=a[1]._tokenizer.events,s=0,s<u.length&&u[s][1].type==="lineEndingBlank"&&(s+=2),s<u.length&&u[s][1].type==="content"))for(;++s<u.length&&u[s][1].type!=="content";)u[s][1].type==="chunkText"&&(u[s][1]._isInFirstContentOfListItem=!0,s++);if(a[0]==="enter")a[1].contentType&&(Object.assign(n,ml(d,r)),r=n[r],c=!0);else if(a[1]._container){for(s=r,i=void 0;s--;)if(o=d.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(a[1].end={...d.get(i)[1].start},l=d.slice(i,r),l.unshift(a),d.splice(i,r-i+1,l))}}return Ne(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function ml(e,n){const r=e.get(n)[1],a=e.get(n)[2];let i=n-1;const s=[];let o=r._tokenizer;o||(o=a.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],c={};let d,m,g=-1,p=r,k=0,j=0;const N=[j];for(;p;){for(;e.get(++i)[1]!==p;);s.push(i),p._tokenizer||(d=a.sliceStream(p),p.next||d.push(null),m&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),m=p,p=p.next}for(p=r;++g<l.length;)l[g][0]==="exit"&&l[g-1][0]==="enter"&&l[g][1].type===l[g-1][1].type&&l[g][1].start.line!==l[g][1].end.line&&(j=g+1,N.push(j),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):N.pop(),g=N.length;g--;){const y=l.slice(N[g],N[g+1]),D=s.pop();u.push([D,D+y.length-1]),e.splice(D,2,y)}for(u.reverse(),g=-1;++g<u.length;)c[k+u[g][0]]=k+u[g][1],k+=u[g][1]-u[g][0]-1;return c}const pl={resolve:gl,tokenize:fl},hl={partial:!0,tokenize:xl};function gl(e){return da(e),e}function fl(e,n){let r;return a;function a(l){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):z(l)?e.check(hl,o,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function o(l){return e.consume(l),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,i}}function xl(e,n,r){const a=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),J(e,s,"linePrefix")}function s(o){if(o===null||z(o))return r(o);const l=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):e.interrupt(a.parser.constructs.flow,r,n)(o)}}function ma(e,n,r,a,i,s,o,l,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return m;function m(y){return y===60?(e.enter(a),e.enter(i),e.enter(s),e.consume(y),e.exit(s),g):y===null||y===32||y===41||tn(y)?r(y):(e.enter(a),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),j(y))}function g(y){return y===62?(e.enter(s),e.consume(y),e.exit(s),e.exit(i),e.exit(a),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===62?(e.exit("chunkString"),e.exit(l),g(y)):y===null||y===60||z(y)?r(y):(e.consume(y),y===92?k:p)}function k(y){return y===60||y===62||y===92?(e.consume(y),p):p(y)}function j(y){return!d&&(y===null||y===41||ce(y))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(a),n(y)):d<c&&y===40?(e.consume(y),d++,j):y===41?(e.consume(y),d--,j):y===null||y===32||y===40||tn(y)?r(y):(e.consume(y),y===92?N:j)}function N(y){return y===40||y===41||y===92?(e.consume(y),j):j(y)}}function pa(e,n,r,a,i,s){const o=this;let l=0,u;return c;function c(p){return e.enter(a),e.enter(i),e.consume(p),e.exit(i),e.enter(s),d}function d(p){return l>999||p===null||p===91||p===93&&!u||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?r(p):p===93?(e.exit(s),e.enter(i),e.consume(p),e.exit(i),e.exit(a),n):z(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),m(p))}function m(p){return p===null||p===91||p===93||z(p)||l++>999?(e.exit("chunkString"),d(p)):(e.consume(p),u||(u=!G(p)),p===92?g:m)}function g(p){return p===91||p===92||p===93?(e.consume(p),l++,m):m(p)}}function ha(e,n,r,a,i,s){let o;return l;function l(g){return g===34||g===39||g===40?(e.enter(a),e.enter(i),e.consume(g),e.exit(i),o=g===40?41:g,u):r(g)}function u(g){return g===o?(e.enter(i),e.consume(g),e.exit(i),e.exit(a),n):(e.enter(s),c(g))}function c(g){return g===o?(e.exit(s),u(o)):g===null?r(g):z(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),J(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(g))}function d(g){return g===o||g===null||z(g)?(e.exit("chunkString"),c(g)):(e.consume(g),g===92?m:d)}function m(g){return g===o||g===92?(e.consume(g),d):d(g)}}function it(e,n){let r;return a;function a(i){return z(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),r=!0,a):G(i)?J(e,a,r?"linePrefix":"lineSuffix")(i):n(i)}}const bl={name:"definition",tokenize:vl},yl={partial:!0,tokenize:kl};function vl(e,n,r){const a=this;let i;return s;function s(p){return e.enter("definition"),o(p)}function o(p){return pa.call(a,e,l,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),u):r(p)}function u(p){return ce(p)?it(e,c)(p):c(p)}function c(p){return ma(e,d,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(yl,m,m)(p)}function m(p){return G(p)?J(e,g,"whitespace")(p):g(p)}function g(p){return p===null||z(p)?(e.exit("definition"),a.parser.defined.push(i),n(p)):r(p)}}function kl(e,n,r){return a;function a(l){return ce(l)?it(e,i)(l):r(l)}function i(l){return ha(e,s,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return G(l)?J(e,o,"whitespace")(l):o(l)}function o(l){return l===null||z(l)?n(l):r(l)}}const jl={name:"hardBreakEscape",tokenize:wl};function wl(e,n,r){return a;function a(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return z(s)?(e.exit("hardBreakEscape"),n(s)):r(s)}}const Nl={name:"headingAtx",resolve:Cl,tokenize:Sl};function Cl(e,n){let r=e.length-2,a=3,i,s;return e[a][1].type==="whitespace"&&(a+=2),r-2>a&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(a===r-1||r-4>a&&e[r-2][1].type==="whitespace")&&(r-=a+1===r?2:4),r>a&&(i={type:"atxHeadingText",start:e[a][1].start,end:e[r][1].end},s={type:"chunkText",start:e[a][1].start,end:e[r][1].end,contentType:"text"},Ne(e,a,r-a+1,[["enter",i,n],["enter",s,n],["exit",s,n],["exit",i,n]])),e}function Sl(e,n,r){let a=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&a++<6?(e.consume(d),o):d===null||ce(d)?(e.exit("atxHeadingSequence"),l(d)):r(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||z(d)?(e.exit("atxHeading"),n(d)):G(d)?J(e,l,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),l(d))}function c(d){return d===null||d===35||ce(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),c)}}const Il=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],lr=["pre","script","style","textarea"],Al={concrete:!0,name:"htmlFlow",resolveTo:Tl,tokenize:El},Pl={partial:!0,tokenize:Dl},Rl={partial:!0,tokenize:Ml};function Tl(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function El(e,n,r){const a=this;let i,s,o,l,u;return c;function c(h){return d(h)}function d(h){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(h),m}function m(h){return h===33?(e.consume(h),g):h===47?(e.consume(h),s=!0,j):h===63?(e.consume(h),i=3,a.interrupt?n:f):we(h)?(e.consume(h),o=String.fromCharCode(h),N):r(h)}function g(h){return h===45?(e.consume(h),i=2,p):h===91?(e.consume(h),i=5,l=0,k):we(h)?(e.consume(h),i=4,a.interrupt?n:f):r(h)}function p(h){return h===45?(e.consume(h),a.interrupt?n:f):r(h)}function k(h){const X="CDATA[";return h===X.charCodeAt(l++)?(e.consume(h),l===X.length?a.interrupt?n:T:k):r(h)}function j(h){return we(h)?(e.consume(h),o=String.fromCharCode(h),N):r(h)}function N(h){if(h===null||h===47||h===62||ce(h)){const X=h===47,fe=o.toLowerCase();return!X&&!s&&lr.includes(fe)?(i=1,a.interrupt?n(h):T(h)):Il.includes(o.toLowerCase())?(i=6,X?(e.consume(h),y):a.interrupt?n(h):T(h)):(i=7,a.interrupt&&!a.parser.lazy[a.now().line]?r(h):s?D(h):S(h))}return h===45||he(h)?(e.consume(h),o+=String.fromCharCode(h),N):r(h)}function y(h){return h===62?(e.consume(h),a.interrupt?n:T):r(h)}function D(h){return G(h)?(e.consume(h),D):q(h)}function S(h){return h===47?(e.consume(h),q):h===58||h===95||we(h)?(e.consume(h),H):G(h)?(e.consume(h),S):q(h)}function H(h){return h===45||h===46||h===58||h===95||he(h)?(e.consume(h),H):W(h)}function W(h){return h===61?(e.consume(h),b):G(h)?(e.consume(h),W):S(h)}function b(h){return h===null||h===60||h===61||h===62||h===96?r(h):h===34||h===39?(e.consume(h),u=h,U):G(h)?(e.consume(h),b):I(h)}function U(h){return h===u?(e.consume(h),u=null,B):h===null||z(h)?r(h):(e.consume(h),U)}function I(h){return h===null||h===34||h===39||h===47||h===60||h===61||h===62||h===96||ce(h)?W(h):(e.consume(h),I)}function B(h){return h===47||h===62||G(h)?S(h):r(h)}function q(h){return h===62?(e.consume(h),E):r(h)}function E(h){return h===null||z(h)?T(h):G(h)?(e.consume(h),E):r(h)}function T(h){return h===45&&i===2?(e.consume(h),_):h===60&&i===1?(e.consume(h),$):h===62&&i===4?(e.consume(h),se):h===63&&i===3?(e.consume(h),f):h===93&&i===5?(e.consume(h),ge):z(h)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Pl,de,K)(h)):h===null||z(h)?(e.exit("htmlFlowData"),K(h)):(e.consume(h),T)}function K(h){return e.check(Rl,M,de)(h)}function M(h){return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),C}function C(h){return h===null||z(h)?K(h):(e.enter("htmlFlowData"),T(h))}function _(h){return h===45?(e.consume(h),f):T(h)}function $(h){return h===47?(e.consume(h),o="",R):T(h)}function R(h){if(h===62){const X=o.toLowerCase();return lr.includes(X)?(e.consume(h),se):T(h)}return we(h)&&o.length<8?(e.consume(h),o+=String.fromCharCode(h),R):T(h)}function ge(h){return h===93?(e.consume(h),f):T(h)}function f(h){return h===62?(e.consume(h),se):h===45&&i===2?(e.consume(h),f):T(h)}function se(h){return h===null||z(h)?(e.exit("htmlFlowData"),de(h)):(e.consume(h),se)}function de(h){return e.exit("htmlFlow"),n(h)}}function Ml(e,n,r){const a=this;return i;function i(o){return z(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s):r(o)}function s(o){return a.parser.lazy[a.now().line]?r(o):n(o)}}function Dl(e,n,r){return a;function a(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(At,n,r)}}const zl={name:"htmlText",tokenize:Ll};function Ll(e,n,r){const a=this;let i,s,o;return l;function l(f){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(f),u}function u(f){return f===33?(e.consume(f),c):f===47?(e.consume(f),W):f===63?(e.consume(f),S):we(f)?(e.consume(f),I):r(f)}function c(f){return f===45?(e.consume(f),d):f===91?(e.consume(f),s=0,k):we(f)?(e.consume(f),D):r(f)}function d(f){return f===45?(e.consume(f),p):r(f)}function m(f){return f===null?r(f):f===45?(e.consume(f),g):z(f)?(o=m,$(f)):(e.consume(f),m)}function g(f){return f===45?(e.consume(f),p):m(f)}function p(f){return f===62?_(f):f===45?g(f):m(f)}function k(f){const se="CDATA[";return f===se.charCodeAt(s++)?(e.consume(f),s===se.length?j:k):r(f)}function j(f){return f===null?r(f):f===93?(e.consume(f),N):z(f)?(o=j,$(f)):(e.consume(f),j)}function N(f){return f===93?(e.consume(f),y):j(f)}function y(f){return f===62?_(f):f===93?(e.consume(f),y):j(f)}function D(f){return f===null||f===62?_(f):z(f)?(o=D,$(f)):(e.consume(f),D)}function S(f){return f===null?r(f):f===63?(e.consume(f),H):z(f)?(o=S,$(f)):(e.consume(f),S)}function H(f){return f===62?_(f):S(f)}function W(f){return we(f)?(e.consume(f),b):r(f)}function b(f){return f===45||he(f)?(e.consume(f),b):U(f)}function U(f){return z(f)?(o=U,$(f)):G(f)?(e.consume(f),U):_(f)}function I(f){return f===45||he(f)?(e.consume(f),I):f===47||f===62||ce(f)?B(f):r(f)}function B(f){return f===47?(e.consume(f),_):f===58||f===95||we(f)?(e.consume(f),q):z(f)?(o=B,$(f)):G(f)?(e.consume(f),B):_(f)}function q(f){return f===45||f===46||f===58||f===95||he(f)?(e.consume(f),q):E(f)}function E(f){return f===61?(e.consume(f),T):z(f)?(o=E,$(f)):G(f)?(e.consume(f),E):B(f)}function T(f){return f===null||f===60||f===61||f===62||f===96?r(f):f===34||f===39?(e.consume(f),i=f,K):z(f)?(o=T,$(f)):G(f)?(e.consume(f),T):(e.consume(f),M)}function K(f){return f===i?(e.consume(f),i=void 0,C):f===null?r(f):z(f)?(o=K,$(f)):(e.consume(f),K)}function M(f){return f===null||f===34||f===39||f===60||f===61||f===96?r(f):f===47||f===62||ce(f)?B(f):(e.consume(f),M)}function C(f){return f===47||f===62||ce(f)?B(f):r(f)}function _(f){return f===62?(e.consume(f),e.exit("htmlTextData"),e.exit("htmlText"),n):r(f)}function $(f){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),R}function R(f){return G(f)?J(e,ge,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):ge(f)}function ge(f){return e.enter("htmlTextData"),o(f)}}const bn={name:"labelEnd",resolveAll:_l,resolveTo:Ul,tokenize:Vl},Ol={tokenize:Hl},Bl={tokenize:Wl},Fl={tokenize:ql};function _l(e){let n=-1;const r=[];for(;++n<e.length;){const a=e[n][1];if(r.push(e[n]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const i=a.type==="labelImage"?4:2;a.type="data",n+=i}}return e.length!==r.length&&Ne(e,0,e.length,r),e}function Ul(e,n){let r=e.length,a=0,i,s,o,l;for(;r--;)if(i=e[r][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[r][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[r][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=r,i.type!=="labelLink")){a=2;break}}else i.type==="labelEnd"&&(o=r);const u={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[s][1].start},end:{...e[o][1].end}},d={type:"labelText",start:{...e[s+a+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",u,n],["enter",c,n]],l=xe(l,e.slice(s+1,s+a+3)),l=xe(l,[["enter",d,n]]),l=xe(l,xn(n.parser.constructs.insideSpan.null,e.slice(s+a+4,o-3),n)),l=xe(l,[["exit",d,n],e[o-2],e[o-1],["exit",c,n]]),l=xe(l,e.slice(o+1)),l=xe(l,[["exit",u,n]]),Ne(e,s,e.length,l),e}function Vl(e,n,r){const a=this;let i=a.events.length,s,o;for(;i--;)if((a.events[i][1].type==="labelImage"||a.events[i][1].type==="labelLink")&&!a.events[i][1]._balanced){s=a.events[i][1];break}return l;function l(g){return s?s._inactive?m(g):(o=a.parser.defined.includes(He(a.sliceSerialize({start:s.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(g),e.exit("labelMarker"),e.exit("labelEnd"),u):r(g)}function u(g){return g===40?e.attempt(Ol,d,o?d:m)(g):g===91?e.attempt(Bl,d,o?c:m)(g):o?d(g):m(g)}function c(g){return e.attempt(Fl,d,m)(g)}function d(g){return n(g)}function m(g){return s._balanced=!0,r(g)}}function Hl(e,n,r){return a;function a(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),i}function i(m){return ce(m)?it(e,s)(m):s(m)}function s(m){return m===41?d(m):ma(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function o(m){return ce(m)?it(e,u)(m):d(m)}function l(m){return r(m)}function u(m){return m===34||m===39||m===40?ha(e,c,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):d(m)}function c(m){return ce(m)?it(e,d)(m):d(m)}function d(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),n):r(m)}}function Wl(e,n,r){const a=this;return i;function i(l){return pa.call(a,e,s,o,"reference","referenceMarker","referenceString")(l)}function s(l){return a.parser.defined.includes(He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?n(l):r(l)}function o(l){return r(l)}}function ql(e,n,r){return a;function a(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),n):r(s)}}const Gl={name:"labelStartImage",resolveAll:bn.resolveAll,tokenize:Kl};function Kl(e,n,r){const a=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):r(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(l):n(l)}}const $l={name:"labelStartLink",resolveAll:bn.resolveAll,tokenize:Ql};function Ql(e,n,r){const a=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(o):n(o)}}const Bt={name:"lineEnding",tokenize:Yl};function Yl(e,n){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),J(e,n,"linePrefix")}}const xt={name:"thematicBreak",tokenize:Jl};function Jl(e,n,r){let a=0,i;return s;function s(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):a>=3&&(c===null||z(c))?(e.exit("thematicBreak"),n(c)):r(c)}function u(c){return c===i?(e.consume(c),a++,u):(e.exit("thematicBreakSequence"),G(c)?J(e,l,"whitespace")(c):l(c))}}const oe={continuation:{tokenize:tc},exit:rc,name:"list",tokenize:ec},Xl={partial:!0,tokenize:ac},Zl={partial:!0,tokenize:nc};function ec(e,n,r){const a=this,i=a.events[a.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const k=a.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!a.containerState.marker||p===a.containerState.marker:nn(p)){if(a.containerState.type||(a.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(xt,r,c)(p):c(p);if(!a.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(p)}return r(p)}function u(p){return nn(p)&&++o<10?(e.consume(p),u):(!a.interrupt||o<2)&&(a.containerState.marker?p===a.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):r(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||p,e.check(At,a.interrupt?r:d,e.attempt(Xl,g,m))}function d(p){return a.containerState.initialBlankLine=!0,s++,g(p)}function m(p){return G(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),g):r(p)}function g(p){return a.containerState.size=s+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function tc(e,n,r){const a=this;return a.containerState._closeFlow=void 0,e.check(At,i,s);function i(l){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,J(e,n,"listItemIndent",a.containerState.size+1)(l)}function s(l){return a.containerState.furtherBlankLines||!G(l)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,o(l)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(Zl,n,o)(l))}function o(l){return a.containerState._closeFlow=!0,a.interrupt=void 0,J(e,e.attempt(oe,n,r),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function nc(e,n,r){const a=this;return J(e,i,"listItemIndent",a.containerState.size+1);function i(s){const o=a.events[a.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===a.containerState.size?n(s):r(s)}}function rc(e){e.exit(this.containerState.type)}function ac(e,n,r){const a=this;return J(e,i,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const o=a.events[a.events.length-1];return!G(s)&&o&&o[1].type==="listItemPrefixWhitespace"?n(s):r(s)}}const cr={name:"setextUnderline",resolveTo:ic,tokenize:sc};function ic(e,n){let r=e.length,a,i,s;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){a=r;break}e[r][1].type==="paragraph"&&(i=r)}else e[r][1].type==="content"&&e.splice(r,1),!s&&e[r][1].type==="definition"&&(s=r);const o={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",o,n]),e.splice(s+1,0,["exit",e[a][1],n]),e[a][1].end={...e[s][1].end}):e[a][1]=o,e.push(["exit",o,n]),e}function sc(e,n,r){const a=this;let i;return s;function s(c){let d=a.events.length,m;for(;d--;)if(a.events[d][1].type!=="lineEnding"&&a.events[d][1].type!=="linePrefix"&&a.events[d][1].type!=="content"){m=a.events[d][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||m)?(e.enter("setextHeadingLine"),i=c,o(c)):r(c)}function o(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),G(c)?J(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||z(c)?(e.exit("setextHeadingLine"),n(c)):r(c)}}const oc={tokenize:lc};function lc(e){const n=this,r=e.attempt(At,a,e.attempt(this.parser.constructs.flowInitial,i,J(e,e.attempt(this.parser.constructs.flow,i,e.attempt(pl,i)),"linePrefix")));return r;function a(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),n.currentConstruct=void 0,r}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),n.currentConstruct=void 0,r}}const cc={resolveAll:fa()},uc=ga("string"),dc=ga("text");function ga(e){return{resolveAll:fa(e==="text"?mc:void 0),tokenize:n};function n(r){const a=this,i=this.parser.constructs[e],s=r.attempt(i,o,l);return o;function o(d){return c(d)?s(d):l(d)}function l(d){if(d===null){r.consume(d);return}return r.enter("data"),r.consume(d),u}function u(d){return c(d)?(r.exit("data"),s(d)):(r.consume(d),u)}function c(d){if(d===null)return!0;const m=i[d];let g=-1;if(m)for(;++g<m.length;){const p=m[g];if(!p.previous||p.previous.call(a,a.previous))return!0}return!1}}}function fa(e){return n;function n(r,a){let i=-1,s;for(;++i<=r.length;)s===void 0?r[i]&&r[i][1].type==="data"&&(s=i,i++):(!r[i]||r[i][1].type!=="data")&&(i!==s+2&&(r[s][1].end=r[i-1][1].end,r.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(r,a):r}}function mc(e,n){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const a=e[r-1][1],i=n.sliceStream(a);let s=i.length,o=-1,l=0,u;for(;s--;){const c=i[s];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(c===-2)u=!0,l++;else if(c!==-1){s++;break}}if(n._contentTypeTextTrailing&&r===e.length&&(l=0),l){const c={type:r===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:a.start._bufferIndex+o,_index:a.start._index+s,line:a.end.line,column:a.end.column-l,offset:a.end.offset-l},end:{...a.end}};a.end={...c.start},a.start.offset===a.end.offset?Object.assign(a,c):(e.splice(r,0,["enter",c,n],["exit",c,n]),r+=2)}r++}return e}const pc={42:oe,43:oe,45:oe,48:oe,49:oe,50:oe,51:oe,52:oe,53:oe,54:oe,55:oe,56:oe,57:oe,62:la},hc={91:bl},gc={[-2]:Ot,[-1]:Ot,32:Ot},fc={35:Nl,42:xt,45:[cr,xt],60:Al,61:cr,95:xt,96:or,126:or},xc={38:ua,92:ca},bc={[-5]:Bt,[-4]:Bt,[-3]:Bt,33:Gl,38:ua,42:rn,60:[$o,zl],91:$l,92:[jl,ca],93:bn,95:rn,96:ol},yc={null:[rn,cc]},vc={null:[42,95]},kc={null:[]},jc=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:vc,contentInitial:hc,disable:kc,document:pc,flow:fc,flowInitial:gc,insideSpan:yc,string:xc,text:bc},Symbol.toStringTag,{value:"Module"}));function wc(e,n,r){let a={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const i={},s=[];let o=[],l=[];const u={attempt:U(W),check:U(b),consume:D,enter:S,exit:H,interrupt:U(b,{interrupt:!0})},c={code:null,containerState:{},defineSkip:j,events:[],now:k,parser:e,previous:null,sliceSerialize:g,sliceStream:p,write:m};let d=n.tokenize.call(c,u);return n.resolveAll&&s.push(n),c;function m(E){return o=xe(o,E),N(),o[o.length-1]!==null?[]:(I(n,0),c.events=xn(s,c.events,c),c.events)}function g(E,T){return Cc(p(E),T)}function p(E){return Nc(o,E)}function k(){const{_bufferIndex:E,_index:T,line:K,column:M,offset:C}=a;return{_bufferIndex:E,_index:T,line:K,column:M,offset:C}}function j(E){i[E.line]=E.column,q()}function N(){let E;for(;a._index<o.length;){const T=o[a._index];if(typeof T=="string")for(E=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===E&&a._bufferIndex<T.length;)y(T.charCodeAt(a._bufferIndex));else y(T)}}function y(E){d=d(E)}function D(E){z(E)?(a.line++,a.column=1,a.offset+=E===-3?2:1,q()):E!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===o[a._index].length&&(a._bufferIndex=-1,a._index++)),c.previous=E}function S(E,T){const K=T||{};return K.type=E,K.start=k(),c.events.push(["enter",K,c]),l.push(K),K}function H(E){const T=l.pop();return T.end=k(),c.events.push(["exit",T,c]),T}function W(E,T){I(E,T.from)}function b(E,T){T.restore()}function U(E,T){return K;function K(M,C,_){let $,R,ge,f;return Array.isArray(M)?de(M):"tokenize"in M?de([M]):se(M);function se(te){return Z;function Z(be){const ye=be!==null&&te[be],ve=be!==null&&te.null,Ae=[...Array.isArray(ye)?ye:ye?[ye]:[],...Array.isArray(ve)?ve:ve?[ve]:[]];return de(Ae)(be)}}function de(te){return $=te,R=0,te.length===0?_:h(te[R])}function h(te){return Z;function Z(be){return f=B(),ge=te,te.partial||(c.currentConstruct=te),te.name&&c.parser.constructs.disable.null.includes(te.name)?fe():te.tokenize.call(T?Object.assign(Object.create(c),T):c,u,X,fe)(be)}}function X(te){return E(ge,f),C}function fe(te){return f.restore(),++R<$.length?h($[R]):_}}}function I(E,T){E.resolveAll&&!s.includes(E)&&s.push(E),E.resolve&&Ne(c.events,T,c.events.length-T,E.resolve(c.events.slice(T),c)),E.resolveTo&&(c.events=E.resolveTo(c.events,c))}function B(){const E=k(),T=c.previous,K=c.currentConstruct,M=c.events.length,C=Array.from(l);return{from:M,restore:_};function _(){a=E,c.previous=T,c.currentConstruct=K,c.events.length=M,l=C,q()}}function q(){a.line in i&&a.column<2&&(a.column=i[a.line],a.offset+=i[a.line]-1)}}function Nc(e,n){const r=n.start._index,a=n.start._bufferIndex,i=n.end._index,s=n.end._bufferIndex;let o;if(r===i)o=[e[r].slice(a,s)];else{if(o=e.slice(r,i),a>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(a):o.shift()}s>0&&o.push(e[i].slice(0,s))}return o}function Cc(e,n){let r=-1;const a=[];let i;for(;++r<e.length;){const s=e[r];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,a.push(o)}return a.join("")}function Sc(e){const a={constructs:Mo([jc,...(e||{}).extensions||[]]),content:i(Uo),defined:[],document:i(Ho),flow:i(oc),lazy:{},string:i(uc),text:i(dc)};return a;function i(s){return o;function o(l){return wc(a,s,l)}}}function Ic(e){for(;!da(e););return e}const ur=/[\0\t\n\r]/g;function Ac(){let e=1,n="",r=!0,a;return i;function i(s,o,l){const u=[];let c,d,m,g,p;for(s=n+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),m=0,n="",r&&(s.charCodeAt(0)===65279&&m++,r=void 0);m<s.length;){if(ur.lastIndex=m,c=ur.exec(s),g=c&&c.index!==void 0?c.index:s.length,p=s.charCodeAt(g),!c){n=s.slice(m);break}if(p===10&&m===g&&a)u.push(-3),a=void 0;else switch(a&&(u.push(-5),a=void 0),m<g&&(u.push(s.slice(m,g)),e+=g-m),p){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:a=!0,e=1}m=g+1}return l&&(a&&u.push(-5),n&&u.push(n),u.push(null)),u}}const Pc=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Rc(e){return e.replace(Pc,Tc)}function Tc(e,n,r){if(n)return n;if(r.charCodeAt(0)===35){const i=r.charCodeAt(1),s=i===120||i===88;return oa(r.slice(s?2:1),s?16:10)}return fn(r)||e}const xa={}.hasOwnProperty;function Ec(e,n,r){return typeof n!="string"&&(r=n,n=void 0),Mc(r)(Ic(Sc(r).document().write(Ac()(e,n,!0))))}function Mc(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(In),autolinkProtocol:B,autolinkEmail:B,atxHeading:s(Nn),blockQuote:s(ve),characterEscape:B,characterReference:B,codeFenced:s(Ae),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(Ae,o),codeText:s(Le,o),codeTextData:B,data:B,codeFlowValue:B,definition:s(Aa),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(Pa),hardBreakEscape:s(Cn),hardBreakTrailing:s(Cn),htmlFlow:s(Sn,o),htmlFlowData:B,htmlText:s(Sn,o),htmlTextData:B,image:s(Ra),label:o,link:s(In),listItem:s(Ta),listItemValue:g,listOrdered:s(An,m),listUnordered:s(An),paragraph:s(Ea),reference:h,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(Nn),strong:s(Ma),thematicBreak:s(za)},exit:{atxHeading:u(),atxHeadingSequence:W,autolink:u(),autolinkEmail:ye,autolinkProtocol:be,blockQuote:u(),characterEscapeValue:q,characterReferenceMarkerHexadecimal:fe,characterReferenceMarkerNumeric:fe,characterReferenceValue:te,characterReference:Z,codeFenced:u(N),codeFencedFence:j,codeFencedFenceInfo:p,codeFencedFenceMeta:k,codeFlowValue:q,codeIndented:u(y),codeText:u(C),codeTextData:q,data:q,definition:u(),definitionDestinationString:H,definitionLabelString:D,definitionTitleString:S,emphasis:u(),hardBreakEscape:u(T),hardBreakTrailing:u(T),htmlFlow:u(K),htmlFlowData:q,htmlText:u(M),htmlTextData:q,image:u($),label:ge,labelText:R,lineEnding:E,link:u(_),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:X,resourceDestinationString:f,resourceTitleString:se,resource:de,setextHeading:u(I),setextHeadingLineSequence:U,setextHeadingText:b,strong:u(),thematicBreak:u()}};ba(n,(e||{}).mdastExtensions||[]);const r={};return a;function a(x){let w={type:"root",children:[]};const L={stack:[w],tokenStack:[],config:n,enter:l,exit:c,buffer:o,resume:d,data:r},V=[];let Q=-1;for(;++Q<x.length;)if(x[Q][1].type==="listOrdered"||x[Q][1].type==="listUnordered")if(x[Q][0]==="enter")V.push(Q);else{const ke=V.pop();Q=i(x,ke,Q)}for(Q=-1;++Q<x.length;){const ke=n[x[Q][0]];xa.call(ke,x[Q][1].type)&&ke[x[Q][1].type].call(Object.assign({sliceSerialize:x[Q][2].sliceSerialize},L),x[Q][1])}if(L.tokenStack.length>0){const ke=L.tokenStack[L.tokenStack.length-1];(ke[1]||dr).call(L,void 0,ke[0])}for(w.position={start:Re(x.length>0?x[0][1].start:{line:1,column:1,offset:0}),end:Re(x.length>0?x[x.length-2][1].end:{line:1,column:1,offset:0})},Q=-1;++Q<n.transforms.length;)w=n.transforms[Q](w)||w;return w}function i(x,w,L){let V=w-1,Q=-1,ke=!1,Ee,Ce,Qe,Ye;for(;++V<=L;){const me=x[V];switch(me[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{me[0]==="enter"?Q++:Q--,Ye=void 0;break}case"lineEndingBlank":{me[0]==="enter"&&(Ee&&!Ye&&!Q&&!Qe&&(Qe=V),Ye=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ye=void 0}if(!Q&&me[0]==="enter"&&me[1].type==="listItemPrefix"||Q===-1&&me[0]==="exit"&&(me[1].type==="listUnordered"||me[1].type==="listOrdered")){if(Ee){let Oe=V;for(Ce=void 0;Oe--;){const Se=x[Oe];if(Se[1].type==="lineEnding"||Se[1].type==="lineEndingBlank"){if(Se[0]==="exit")continue;Ce&&(x[Ce][1].type="lineEndingBlank",ke=!0),Se[1].type="lineEnding",Ce=Oe}else if(!(Se[1].type==="linePrefix"||Se[1].type==="blockQuotePrefix"||Se[1].type==="blockQuotePrefixWhitespace"||Se[1].type==="blockQuoteMarker"||Se[1].type==="listItemIndent"))break}Qe&&(!Ce||Qe<Ce)&&(Ee._spread=!0),Ee.end=Object.assign({},Ce?x[Ce][1].start:me[1].end),x.splice(Ce||V,0,["exit",Ee,me[2]]),V++,L++}if(me[1].type==="listItemPrefix"){const Oe={type:"listItem",_spread:!1,start:Object.assign({},me[1].start),end:void 0};Ee=Oe,x.splice(V,0,["enter",Oe,me[2]]),V++,L++,Qe=void 0,Ye=!0}}}return x[w][1]._spread=ke,L}function s(x,w){return L;function L(V){l.call(this,x(V),V),w&&w.call(this,V)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(x,w,L){this.stack[this.stack.length-1].children.push(x),this.stack.push(x),this.tokenStack.push([w,L||void 0]),x.position={start:Re(w.start),end:void 0}}function u(x){return w;function w(L){x&&x.call(this,L),c.call(this,L)}}function c(x,w){const L=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==x.type&&(w?w.call(this,x,V[0]):(V[1]||dr).call(this,x,V[0]));else throw new Error("Cannot close `"+x.type+"` ("+at({start:x.start,end:x.end})+"): it’s not open");L.position.end=Re(x.end)}function d(){return To(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function g(x){if(this.data.expectingFirstListItemValue){const w=this.stack[this.stack.length-2];w.start=Number.parseInt(this.sliceSerialize(x),10),this.data.expectingFirstListItemValue=void 0}}function p(){const x=this.resume(),w=this.stack[this.stack.length-1];w.lang=x}function k(){const x=this.resume(),w=this.stack[this.stack.length-1];w.meta=x}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const x=this.resume(),w=this.stack[this.stack.length-1];w.value=x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const x=this.resume(),w=this.stack[this.stack.length-1];w.value=x.replace(/(\r?\n|\r)$/g,"")}function D(x){const w=this.resume(),L=this.stack[this.stack.length-1];L.label=w,L.identifier=He(this.sliceSerialize(x)).toLowerCase()}function S(){const x=this.resume(),w=this.stack[this.stack.length-1];w.title=x}function H(){const x=this.resume(),w=this.stack[this.stack.length-1];w.url=x}function W(x){const w=this.stack[this.stack.length-1];if(!w.depth){const L=this.sliceSerialize(x).length;w.depth=L}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function U(x){const w=this.stack[this.stack.length-1];w.depth=this.sliceSerialize(x).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function B(x){const L=this.stack[this.stack.length-1].children;let V=L[L.length-1];(!V||V.type!=="text")&&(V=Da(),V.position={start:Re(x.start),end:void 0},L.push(V)),this.stack.push(V)}function q(x){const w=this.stack.pop();w.value+=this.sliceSerialize(x),w.position.end=Re(x.end)}function E(x){const w=this.stack[this.stack.length-1];if(this.data.atHardBreak){const L=w.children[w.children.length-1];L.position.end=Re(x.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(w.type)&&(B.call(this,x),q.call(this,x))}function T(){this.data.atHardBreak=!0}function K(){const x=this.resume(),w=this.stack[this.stack.length-1];w.value=x}function M(){const x=this.resume(),w=this.stack[this.stack.length-1];w.value=x}function C(){const x=this.resume(),w=this.stack[this.stack.length-1];w.value=x}function _(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const w=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=w,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function $(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const w=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=w,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function R(x){const w=this.sliceSerialize(x),L=this.stack[this.stack.length-2];L.label=Rc(w),L.identifier=He(w).toLowerCase()}function ge(){const x=this.stack[this.stack.length-1],w=this.resume(),L=this.stack[this.stack.length-1];if(this.data.inReference=!0,L.type==="link"){const V=x.children;L.children=V}else L.alt=w}function f(){const x=this.resume(),w=this.stack[this.stack.length-1];w.url=x}function se(){const x=this.resume(),w=this.stack[this.stack.length-1];w.title=x}function de(){this.data.inReference=void 0}function h(){this.data.referenceType="collapsed"}function X(x){const w=this.resume(),L=this.stack[this.stack.length-1];L.label=w,L.identifier=He(this.sliceSerialize(x)).toLowerCase(),this.data.referenceType="full"}function fe(x){this.data.characterReferenceType=x.type}function te(x){const w=this.sliceSerialize(x),L=this.data.characterReferenceType;let V;L?(V=oa(w,L==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=fn(w);const Q=this.stack[this.stack.length-1];Q.value+=V}function Z(x){const w=this.stack.pop();w.position.end=Re(x.end)}function be(x){q.call(this,x);const w=this.stack[this.stack.length-1];w.url=this.sliceSerialize(x)}function ye(x){q.call(this,x);const w=this.stack[this.stack.length-1];w.url="mailto:"+this.sliceSerialize(x)}function ve(){return{type:"blockquote",children:[]}}function Ae(){return{type:"code",lang:null,meta:null,value:""}}function Le(){return{type:"inlineCode",value:""}}function Aa(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Pa(){return{type:"emphasis",children:[]}}function Nn(){return{type:"heading",depth:0,children:[]}}function Cn(){return{type:"break"}}function Sn(){return{type:"html",value:""}}function Ra(){return{type:"image",title:null,url:"",alt:null}}function In(){return{type:"link",title:null,url:"",children:[]}}function An(x){return{type:"list",ordered:x.type==="listOrdered",start:null,spread:x._spread,children:[]}}function Ta(x){return{type:"listItem",spread:x._spread,checked:null,children:[]}}function Ea(){return{type:"paragraph",children:[]}}function Ma(){return{type:"strong",children:[]}}function Da(){return{type:"text",value:""}}function za(){return{type:"thematicBreak"}}}function Re(e){return{line:e.line,column:e.column,offset:e.offset}}function ba(e,n){let r=-1;for(;++r<n.length;){const a=n[r];Array.isArray(a)?ba(e,a):Dc(e,a)}}function Dc(e,n){let r;for(r in n)if(xa.call(n,r))switch(r){case"canContainEols":{const a=n[r];a&&e[r].push(...a);break}case"transforms":{const a=n[r];a&&e[r].push(...a);break}case"enter":case"exit":{const a=n[r];a&&Object.assign(e[r],a);break}}}function dr(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+at({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+at({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+at({start:n.start,end:n.end})+") is still open")}function zc(e){const n=this;n.parser=r;function r(a){return Ec(a,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Lc(e,n){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,r),e.applyData(n,r)}function Oc(e,n){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,r),[e.applyData(n,r),{type:"text",value:`
`}]}function Bc(e,n){const r=n.value?n.value+`
`:"",a={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(a.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:a,children:[{type:"text",value:r}]};return n.meta&&(s.data={meta:n.meta}),e.patch(n,s),s=e.applyData(n,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(n,s),s}function Fc(e,n){const r={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function _c(e,n){const r={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Uc(e,n){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(n.identifier).toUpperCase(),i=$e(a.toLowerCase()),s=e.footnoteOrder.indexOf(a);let o,l=e.footnoteCounts.get(a);l===void 0?(l=0,e.footnoteOrder.push(a),o=e.footnoteOrder.length):o=s+1,l+=1,e.footnoteCounts.set(a,l);const u={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+i,id:r+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(n,c),e.applyData(n,c)}function Vc(e,n){const r={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Hc(e,n){if(e.options.allowDangerousHtml){const r={type:"raw",value:n.value};return e.patch(n,r),e.applyData(n,r)}}function ya(e,n){const r=n.referenceType;let a="]";if(r==="collapsed"?a+="[]":r==="full"&&(a+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+a}];const i=e.all(n),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=a:i.push({type:"text",value:a}),i}function Wc(e,n){const r=String(n.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return ya(e,n);const i={src:$e(a.url||""),alt:n.alt};a.title!==null&&a.title!==void 0&&(i.title=a.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,s),e.applyData(n,s)}function qc(e,n){const r={src:$e(n.url)};n.alt!==null&&n.alt!==void 0&&(r.alt=n.alt),n.title!==null&&n.title!==void 0&&(r.title=n.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(n,a),e.applyData(n,a)}function Gc(e,n){const r={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,r);const a={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(n,a),e.applyData(n,a)}function Kc(e,n){const r=String(n.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return ya(e,n);const i={href:$e(a.url||"")};a.title!==null&&a.title!==void 0&&(i.title=a.title);const s={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,s),e.applyData(n,s)}function $c(e,n){const r={href:$e(n.url)};n.title!==null&&n.title!==void 0&&(r.title=n.title);const a={type:"element",tagName:"a",properties:r,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Qc(e,n,r){const a=e.all(n),i=r?Yc(r):va(n),s={},o=[];if(typeof n.checked=="boolean"){const d=a[0];let m;d&&d.type==="element"&&d.tagName==="p"?m=d:(m={type:"element",tagName:"p",properties:{},children:[]},a.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<a.length;){const d=a[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const u=a[a.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:s,children:o};return e.patch(n,c),e.applyData(n,c)}function Yc(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const r=e.children;let a=-1;for(;!n&&++a<r.length;)n=va(r[a])}return n}function va(e){const n=e.spread;return n??e.children.length>1}function Jc(e,n){const r={},a=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(r.start=n.start);++i<a.length;){const o=a[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const s={type:"element",tagName:n.ordered?"ol":"ul",properties:r,children:e.wrap(a,!0)};return e.patch(n,s),e.applyData(n,s)}function Xc(e,n){const r={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Zc(e,n){const r={type:"root",children:e.wrap(e.all(n))};return e.patch(n,r),e.applyData(n,r)}function eu(e,n){const r={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function tu(e,n){const r=e.all(n),a=r.shift(),i=[];if(a){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(n.children[0],o),i.push(o)}if(r.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},l=mn(n.children[1]),u=ea(n.children[n.children.length-1]);l&&u&&(o.position={start:l,end:u}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,s),e.applyData(n,s)}function nu(e,n,r){const a=r?r.children:void 0,s=(a?a.indexOf(n):1)===0?"th":"td",o=r&&r.type==="table"?r.align:void 0,l=o?o.length:n.children.length;let u=-1;const c=[];for(;++u<l;){const m=n.children[u],g={},p=o?o[u]:void 0;p&&(g.align=p);let k={type:"element",tagName:s,properties:g,children:[]};m&&(k.children=e.all(m),e.patch(m,k),k=e.applyData(m,k)),c.push(k)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(n,d),e.applyData(n,d)}function ru(e,n){const r={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}const mr=9,pr=32;function au(e){const n=String(e),r=/\r?\n|\r/g;let a=r.exec(n),i=0;const s=[];for(;a;)s.push(hr(n.slice(i,a.index),i>0,!0),a[0]),i=a.index+a[0].length,a=r.exec(n);return s.push(hr(n.slice(i),i>0,!1)),s.join("")}function hr(e,n,r){let a=0,i=e.length;if(n){let s=e.codePointAt(a);for(;s===mr||s===pr;)a++,s=e.codePointAt(a)}if(r){let s=e.codePointAt(i-1);for(;s===mr||s===pr;)i--,s=e.codePointAt(i-1)}return i>a?e.slice(a,i):""}function iu(e,n){const r={type:"text",value:au(String(n.value))};return e.patch(n,r),e.applyData(n,r)}function su(e,n){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,r),e.applyData(n,r)}const ou={blockquote:Lc,break:Oc,code:Bc,delete:Fc,emphasis:_c,footnoteReference:Uc,heading:Vc,html:Hc,imageReference:Wc,image:qc,inlineCode:Gc,linkReference:Kc,link:$c,listItem:Qc,list:Jc,paragraph:Xc,root:Zc,strong:eu,table:tu,tableCell:ru,tableRow:nu,text:iu,thematicBreak:su,toml:ht,yaml:ht,definition:ht,footnoteDefinition:ht};function ht(){}const ka=-1,Pt=0,st=1,Nt=2,yn=3,vn=4,kn=5,jn=6,ja=7,wa=8,gr=typeof self=="object"?self:globalThis,lu=(e,n)=>{const r=(i,s)=>(e.set(s,i),i),a=i=>{if(e.has(i))return e.get(i);const[s,o]=n[i];switch(s){case Pt:case ka:return r(o,i);case st:{const l=r([],i);for(const u of o)l.push(a(u));return l}case Nt:{const l=r({},i);for(const[u,c]of o)l[a(u)]=a(c);return l}case yn:return r(new Date(o),i);case vn:{const{source:l,flags:u}=o;return r(new RegExp(l,u),i)}case kn:{const l=r(new Map,i);for(const[u,c]of o)l.set(a(u),a(c));return l}case jn:{const l=r(new Set,i);for(const u of o)l.add(a(u));return l}case ja:{const{name:l,message:u}=o;return r(new gr[l](u),i)}case wa:return r(BigInt(o),i);case"BigInt":return r(Object(BigInt(o)),i);case"ArrayBuffer":return r(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return r(new DataView(l),o)}}return r(new gr[s](o),i)};return a},fr=e=>lu(new Map,e)(0),_e="",{toString:cu}={},{keys:uu}=Object,nt=e=>{const n=typeof e;if(n!=="object"||!e)return[Pt,n];const r=cu.call(e).slice(8,-1);switch(r){case"Array":return[st,_e];case"Object":return[Nt,_e];case"Date":return[yn,_e];case"RegExp":return[vn,_e];case"Map":return[kn,_e];case"Set":return[jn,_e];case"DataView":return[st,r]}return r.includes("Array")?[st,r]:r.includes("Error")?[ja,r]:[Nt,r]},gt=([e,n])=>e===Pt&&(n==="function"||n==="symbol"),du=(e,n,r,a)=>{const i=(o,l)=>{const u=a.push(o)-1;return r.set(l,u),u},s=o=>{if(r.has(o))return r.get(o);let[l,u]=nt(o);switch(l){case Pt:{let d=o;switch(u){case"bigint":l=wa,d=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([ka],o)}return i([l,d],o)}case st:{if(u){let g=o;return u==="DataView"?g=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(g=new Uint8Array(o)),i([u,[...g]],o)}const d=[],m=i([l,d],o);for(const g of o)d.push(s(g));return m}case Nt:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(n&&"toJSON"in o)return s(o.toJSON());const d=[],m=i([l,d],o);for(const g of uu(o))(e||!gt(nt(o[g])))&&d.push([s(g),s(o[g])]);return m}case yn:return i([l,o.toISOString()],o);case vn:{const{source:d,flags:m}=o;return i([l,{source:d,flags:m}],o)}case kn:{const d=[],m=i([l,d],o);for(const[g,p]of o)(e||!(gt(nt(g))||gt(nt(p))))&&d.push([s(g),s(p)]);return m}case jn:{const d=[],m=i([l,d],o);for(const g of o)(e||!gt(nt(g)))&&d.push(s(g));return m}}const{message:c}=o;return i([l,{name:u,message:c}],o)};return s},xr=(e,{json:n,lossy:r}={})=>{const a=[];return du(!(n||r),!!n,new Map,a)(e),a},Ct=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?fr(xr(e,n)):structuredClone(e):(e,n)=>fr(xr(e,n));function mu(e,n){const r=[{type:"text",value:"↩"}];return n>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),r}function pu(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function hu(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||mu,a=e.options.footnoteBackLabel||pu,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),m=String(c.identifier).toUpperCase(),g=$e(m.toLowerCase());let p=0;const k=[],j=e.footnoteCounts.get(m);for(;j!==void 0&&++p<=j;){k.length>0&&k.push({type:"text",value:" "});let D=typeof r=="string"?r:r(u,p);typeof D=="string"&&(D={type:"text",value:D}),k.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+g+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(u,p),className:["data-footnote-backref"]},children:Array.isArray(D)?D:[D]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const D=N.children[N.children.length-1];D&&D.type==="text"?D.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...k)}else d.push(...k);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+g},children:e.wrap(d,!0)};e.patch(c,y),l.push(y)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ct(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Na=(function(e){if(e==null)return bu;if(typeof e=="function")return Rt(e);if(typeof e=="object")return Array.isArray(e)?gu(e):fu(e);if(typeof e=="string")return xu(e);throw new Error("Expected function, string, or object as test")});function gu(e){const n=[];let r=-1;for(;++r<e.length;)n[r]=Na(e[r]);return Rt(a);function a(...i){let s=-1;for(;++s<n.length;)if(n[s].apply(this,i))return!0;return!1}}function fu(e){const n=e;return Rt(r);function r(a){const i=a;let s;for(s in e)if(i[s]!==n[s])return!1;return!0}}function xu(e){return Rt(n);function n(r){return r&&r.type===e}}function Rt(e){return n;function n(r,a,i){return!!(yu(r)&&e.call(this,r,typeof a=="number"?a:void 0,i||void 0))}}function bu(){return!0}function yu(e){return e!==null&&typeof e=="object"&&"type"in e}const Ca=[],vu=!0,br=!1,ku="skip";function ju(e,n,r,a){let i;typeof n=="function"&&typeof r!="function"?(a=r,r=n):i=n;const s=Na(i),o=a?-1:1;l(e,void 0,[])();function l(u,c,d){const m=u&&typeof u=="object"?u:{};if(typeof m.type=="string"){const p=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(g,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return g;function g(){let p=Ca,k,j,N;if((!n||s(u,c,d[d.length-1]||void 0))&&(p=wu(r(u,d)),p[0]===br))return p;if("children"in u&&u.children){const y=u;if(y.children&&p[0]!==ku)for(j=(a?y.children.length:-1)+o,N=d.concat(y);j>-1&&j<y.children.length;){const D=y.children[j];if(k=l(D,j,N)(),k[0]===br)return k;j=typeof k[1]=="number"?k[1]:j+o}}return p}}}function wu(e){return Array.isArray(e)?e:typeof e=="number"?[vu,e]:e==null?Ca:[e]}function Sa(e,n,r,a){let i,s,o;typeof n=="function"&&typeof r!="function"?(s=void 0,o=n,i=r):(s=n,o=r,i=a),ju(e,s,l,i);function l(u,c){const d=c[c.length-1],m=d?d.children.indexOf(u):void 0;return o(u,m,d)}}const an={}.hasOwnProperty,Nu={};function Cu(e,n){const r=n||Nu,a=new Map,i=new Map,s=new Map,o={...ou,...r.handlers},l={all:c,applyData:Iu,definitionById:a,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:u,options:r,patch:Su,wrap:Pu};return Sa(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const m=d.type==="definition"?a:i,g=String(d.identifier).toUpperCase();m.has(g)||m.set(g,d)}}),l;function u(d,m){const g=d.type,p=l.handlers[g];if(an.call(l.handlers,g)&&p)return p(l,d,m);if(l.options.passThrough&&l.options.passThrough.includes(g)){if("children"in d){const{children:j,...N}=d,y=Ct(N);return y.children=l.all(d),y}return Ct(d)}return(l.options.unknownHandler||Au)(l,d,m)}function c(d){const m=[];if("children"in d){const g=d.children;let p=-1;for(;++p<g.length;){const k=l.one(g[p],d);if(k){if(p&&g[p-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=yr(k.value)),!Array.isArray(k)&&k.type==="element")){const j=k.children[0];j&&j.type==="text"&&(j.value=yr(j.value))}Array.isArray(k)?m.push(...k):m.push(k)}}}return m}}function Su(e,n){e.position&&(n.position=lo(e))}function Iu(e,n){let r=n;if(e&&e.data){const a=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof a=="string")if(r.type==="element")r.tagName=a;else{const o="children"in r?r.children:[r];r={type:"element",tagName:a,properties:{},children:o}}r.type==="element"&&s&&Object.assign(r.properties,Ct(s)),"children"in r&&r.children&&i!==null&&i!==void 0&&(r.children=i)}return r}function Au(e,n){const r=n.data||{},a="value"in n&&!(an.call(r,"hProperties")||an.call(r,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Pu(e,n){const r=[];let a=-1;for(n&&r.push({type:"text",value:`
`});++a<e.length;)a&&r.push({type:"text",value:`
`}),r.push(e[a]);return n&&e.length>0&&r.push({type:"text",value:`
`}),r}function yr(e){let n=0,r=e.charCodeAt(n);for(;r===9||r===32;)n++,r=e.charCodeAt(n);return e.slice(n)}function vr(e,n){const r=Cu(e,n),a=r.one(e,void 0),i=hu(r),s=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function Ru(e,n){return e&&"run"in e?async function(r,a){const i=vr(r,{file:a,...n});await e.run(i,a)}:function(r,a){return vr(r,{file:a,...e||n})}}function kr(e){if(e)throw e}var Ft,jr;function Tu(){if(jr)return Ft;jr=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=function(c){return typeof Array.isArray=="function"?Array.isArray(c):n.call(c)==="[object Array]"},s=function(c){if(!c||n.call(c)!=="[object Object]")return!1;var d=e.call(c,"constructor"),m=c.constructor&&c.constructor.prototype&&e.call(c.constructor.prototype,"isPrototypeOf");if(c.constructor&&!d&&!m)return!1;var g;for(g in c);return typeof g>"u"||e.call(c,g)},o=function(c,d){r&&d.name==="__proto__"?r(c,d.name,{enumerable:!0,configurable:!0,value:d.newValue,writable:!0}):c[d.name]=d.newValue},l=function(c,d){if(d==="__proto__")if(e.call(c,d)){if(a)return a(c,d).value}else return;return c[d]};return Ft=function u(){var c,d,m,g,p,k,j=arguments[0],N=1,y=arguments.length,D=!1;for(typeof j=="boolean"&&(D=j,j=arguments[1]||{},N=2),(j==null||typeof j!="object"&&typeof j!="function")&&(j={});N<y;++N)if(c=arguments[N],c!=null)for(d in c)m=l(j,d),g=l(c,d),j!==g&&(D&&g&&(s(g)||(p=i(g)))?(p?(p=!1,k=m&&i(m)?m:[]):k=m&&s(m)?m:{},o(j,{name:d,newValue:u(D,k,g)})):typeof g<"u"&&o(j,{name:d,newValue:g}));return j},Ft}var Eu=Tu();const _t=Ar(Eu);function sn(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Mu(){const e=[],n={run:r,use:a};return n;function r(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(u,...c){const d=e[++s];let m=-1;if(u){o(u);return}for(;++m<i.length;)(c[m]===null||c[m]===void 0)&&(c[m]=i[m]);i=c,d?Du(d,l)(...c):o(null,...c)}}function a(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function Du(e,n){let r;return a;function a(...o){const l=e.length>o.length;let u;l&&o.push(i);try{u=e.apply(this,o)}catch(c){const d=c;if(l&&r)throw d;return i(d)}l||(u&&u.then&&typeof u.then=="function"?u.then(s,i):u instanceof Error?i(u):s(u))}function i(o,...l){r||(r=!0,n(o,...l))}function s(o){i(null,o)}}const je={basename:zu,dirname:Lu,extname:Ou,join:Bu,sep:"/"};function zu(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');ct(e);let r=0,a=-1,i=e.length,s;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){r=i+1;break}}else a<0&&(s=!0,a=i+1);return a<0?"":e.slice(r,a)}if(n===e)return"";let o=-1,l=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){r=i+1;break}}else o<0&&(s=!0,o=i+1),l>-1&&(e.codePointAt(i)===n.codePointAt(l--)?l<0&&(a=i):(l=-1,a=o));return r===a?a=o:a<0&&(a=e.length),e.slice(r,a)}function Lu(e){if(ct(e),e.length===0)return".";let n=-1,r=e.length,a;for(;--r;)if(e.codePointAt(r)===47){if(a){n=r;break}}else a||(a=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Ou(e){ct(e);let n=e.length,r=-1,a=0,i=-1,s=0,o;for(;n--;){const l=e.codePointAt(n);if(l===47){if(o){a=n+1;break}continue}r<0&&(o=!0,r=n+1),l===46?i<0?i=n:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||r<0||s===0||s===1&&i===r-1&&i===a+1?"":e.slice(i,r)}function Bu(...e){let n=-1,r;for(;++n<e.length;)ct(e[n]),e[n]&&(r=r===void 0?e[n]:r+"/"+e[n]);return r===void 0?".":Fu(r)}function Fu(e){ct(e);const n=e.codePointAt(0)===47;let r=_u(e,!n);return r.length===0&&!n&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),n?"/"+r:r}function _u(e,n){let r="",a=0,i=-1,s=0,o=-1,l,u;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(r.length<2||a!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(u=r.lastIndexOf("/"),u!==r.length-1){u<0?(r="",a=0):(r=r.slice(0,u),a=r.length-1-r.lastIndexOf("/")),i=o,s=0;continue}}else if(r.length>0){r="",a=0,i=o,s=0;continue}}n&&(r=r.length>0?r+"/..":"..",a=2)}else r.length>0?r+="/"+e.slice(i+1,o):r=e.slice(i+1,o),a=o-i-1;i=o,s=0}else l===46&&s>-1?s++:s=-1}return r}function ct(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Uu={cwd:Vu};function Vu(){return"/"}function on(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Hu(e){if(typeof e=="string")e=new URL(e);else if(!on(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Wu(e)}function Wu(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const n=e.pathname;let r=-1;for(;++r<n.length;)if(n.codePointAt(r)===37&&n.codePointAt(r+1)===50){const a=n.codePointAt(r+2);if(a===70||a===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Ut=["history","path","basename","stem","extname","dirname"];class Ia{constructor(n){let r;n?on(n)?r={path:n}:typeof n=="string"||qu(n)?r={value:n}:r=n:r={},this.cwd="cwd"in r?"":Uu.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Ut.length;){const s=Ut[a];s in r&&r[s]!==void 0&&r[s]!==null&&(this[s]=s==="history"?[...r[s]]:r[s])}let i;for(i in r)Ut.includes(i)||(this[i]=r[i])}get basename(){return typeof this.path=="string"?je.basename(this.path):void 0}set basename(n){Ht(n,"basename"),Vt(n,"basename"),this.path=je.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?je.dirname(this.path):void 0}set dirname(n){wr(this.basename,"dirname"),this.path=je.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?je.extname(this.path):void 0}set extname(n){if(Vt(n,"extname"),wr(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=je.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){on(n)&&(n=Hu(n)),Ht(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?je.basename(this.path,this.extname):void 0}set stem(n){Ht(n,"stem"),Vt(n,"stem"),this.path=je.join(this.dirname||"",n+(this.extname||""))}fail(n,r,a){const i=this.message(n,r,a);throw i.fatal=!0,i}info(n,r,a){const i=this.message(n,r,a);return i.fatal=void 0,i}message(n,r,a){const i=new ie(n,r,a);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Vt(e,n){if(e&&e.includes(je.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+je.sep+"`")}function Ht(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function wr(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function qu(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Gu=(function(e){const a=this.constructor.prototype,i=a[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,a),s}),Ku={}.hasOwnProperty;class wn extends Gu{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Mu()}copy(){const n=new wn;let r=-1;for(;++r<this.attachers.length;){const a=this.attachers[r];n.use(...a)}return n.data(_t(!0,{},this.namespace)),n}data(n,r){return typeof n=="string"?arguments.length===2?(Gt("data",this.frozen),this.namespace[n]=r,this):Ku.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Gt("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const i=r.call(n,...a);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const r=ft(n),a=this.parser||this.Parser;return Wt("parse",a),a(String(r),r)}process(n,r){const a=this;return this.freeze(),Wt("process",this.parser||this.Parser),qt("process",this.compiler||this.Compiler),r?i(void 0,r):new Promise(i);function i(s,o){const l=ft(n),u=a.parse(l);a.run(u,l,function(d,m,g){if(d||!m||!g)return c(d);const p=m,k=a.stringify(p,g);Yu(k)?g.value=k:g.result=k,c(d,g)});function c(d,m){d||!m?o(d):s?s(m):r(void 0,m)}}}processSync(n){let r=!1,a;return this.freeze(),Wt("processSync",this.parser||this.Parser),qt("processSync",this.compiler||this.Compiler),this.process(n,i),Cr("processSync","process",r),a;function i(s,o){r=!0,kr(s),a=o}}run(n,r,a){Nr(n),this.freeze();const i=this.transformers;return!a&&typeof r=="function"&&(a=r,r=void 0),a?s(void 0,a):new Promise(s);function s(o,l){const u=ft(r);i.run(n,u,c);function c(d,m,g){const p=m||n;d?l(d):o?o(p):a(void 0,p,g)}}}runSync(n,r){let a=!1,i;return this.run(n,r,s),Cr("runSync","run",a),i;function s(o,l){kr(o),i=l,a=!0}}stringify(n,r){this.freeze();const a=ft(r),i=this.compiler||this.Compiler;return qt("stringify",i),Nr(n),i(n,a)}use(n,...r){const a=this.attachers,i=this.namespace;if(Gt("use",this.frozen),n!=null)if(typeof n=="function")u(n,r);else if(typeof n=="object")Array.isArray(n)?l(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function s(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...m]=c;u(d,m)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=_t(!0,i.settings,c.settings))}function l(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const m=c[d];s(m)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let m=-1,g=-1;for(;++m<a.length;)if(a[m][0]===c){g=m;break}if(g===-1)a.push([c,...d]);else if(d.length>0){let[p,...k]=d;const j=a[g][1];sn(j)&&sn(p)&&(p=_t(!0,j,p)),a[g]=[c,p,...k]}}}}const $u=new wn().freeze();function Wt(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function qt(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Gt(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Nr(e){if(!sn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Cr(e,n,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function ft(e){return Qu(e)?e:new Ia(e)}function Qu(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Yu(e){return typeof e=="string"||Ju(e)}function Ju(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Xu="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Sr=[],Ir={allowDangerousHtml:!0},Zu=/^(https?|ircs?|mailto|xmpp)$/i,ed=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function td(e){const n=nd(e),r=rd(e);return ad(n.runSync(n.parse(r),r),e)}function nd(e){const n=e.rehypePlugins||Sr,r=e.remarkPlugins||Sr,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ir}:Ir;return $u().use(zc).use(r).use(Ru,a).use(n)}function rd(e){const n=e.children||"",r=new Ia;return typeof n=="string"&&(r.value=n),r}function ad(e,n){const r=n.allowedElements,a=n.allowElement,i=n.components,s=n.disallowedElements,o=n.skipHtml,l=n.unwrapDisallowed,u=n.urlTransform||id;for(const d of ed)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Xu+d.id,void 0);return Sa(e,c),ho(e,{Fragment:t.Fragment,components:i,ignoreInvalidStyle:!0,jsx:t.jsx,jsxs:t.jsxs,passKeys:!0,passNode:!0});function c(d,m,g){if(d.type==="raw"&&g&&typeof m=="number")return o?g.children.splice(m,1):g.children[m]={type:"text",value:d.value},m;if(d.type==="element"){let p;for(p in Lt)if(Object.hasOwn(Lt,p)&&Object.hasOwn(d.properties,p)){const k=d.properties[p],j=Lt[p];(j===null||j.includes(d.tagName))&&(d.properties[p]=u(String(k||""),p,d))}}if(d.type==="element"){let p=r?!r.includes(d.tagName):s?s.includes(d.tagName):!1;if(!p&&a&&typeof m=="number"&&(p=!a(d,m,g)),p&&g&&typeof m=="number")return l&&d.children?g.children.splice(m,1,...d.children):g.children.splice(m,1),m}}}function id(e){const n=e.indexOf(":"),r=e.indexOf("?"),a=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||r!==-1&&n>r||a!==-1&&n>a||Zu.test(e.slice(0,n))?e:""}function sd(){const{slug:e}=Fa(),n=le.find(a=>a.slug===e);if(!n)return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[t.jsx("h1",{className:"text-4xl mb-4",children:"Article Not Found"}),t.jsxs(ae,{to:"/blog",className:"inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline",children:[t.jsx(Qt,{className:"w-4 h-4"}),"Back to Blog"]})]})});const r=le.filter(a=>a.slug!==n.slug&&a.category===n.category).slice(0,3);return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs(ae,{to:"/blog",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors mb-8",children:[t.jsx(Qt,{className:"w-4 h-4"}),"Kembali ke Blog"]}),t.jsxs("article",{children:[t.jsxs("header",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm",children:[t.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)] border border-border",children:n.category}),t.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[t.jsx(We,{className:"w-4 h-4"}),t.jsx("span",{children:n.date})]}),t.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[t.jsx(yt,{className:"w-4 h-4"}),t.jsx("span",{children:n.readTime})]})]}),t.jsx("h1",{className:"text-4xl sm:text-5xl mb-6",children:n.title}),t.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:n.excerpt}),t.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-border",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx("span",{className:"text-white",children:n.author.avatar})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm",children:"Written by"}),t.jsx("p",{className:"",children:n.author.name})]})]}),t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent rounded-lg transition-colors",children:[t.jsx(Tn,{className:"w-4 h-4"}),t.jsx("span",{className:"text-sm",children:"Share"})]})]})]}),t.jsx("div",{className:"relative h-96 rounded-2xl overflow-hidden mb-8",children:t.jsx(wt,{src:n.image,alt:n.title,className:"w-full h-full object-cover"})}),t.jsx("div",{className:"prose prose-lg max-w-none",children:t.jsx(td,{components:{h1:({node:a,...i})=>t.jsx("h1",{className:"text-3xl sm:text-4xl mt-8 mb-4",...i}),h2:({node:a,...i})=>t.jsx("h2",{className:"text-2xl sm:text-3xl mt-8 mb-4",...i}),h3:({node:a,...i})=>t.jsx("h3",{className:"text-xl sm:text-2xl mt-6 mb-3",...i}),h4:({node:a,...i})=>t.jsx("h4",{className:"text-lg sm:text-xl mt-4 mb-2",...i}),p:({node:a,...i})=>t.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",...i}),ul:({node:a,...i})=>t.jsx("ul",{className:"list-disc list-inside space-y-2 mb-4 text-muted-foreground",...i}),ol:({node:a,...i})=>t.jsx("ol",{className:"list-decimal list-inside space-y-2 mb-4 text-muted-foreground",...i}),li:({node:a,...i})=>t.jsx("li",{className:"ml-4",...i}),strong:({node:a,...i})=>t.jsx("strong",{className:"text-foreground",...i}),code:({node:a,...i})=>t.jsx("code",{className:"bg-secondary px-2 py-1 rounded text-sm",...i}),pre:({node:a,...i})=>t.jsx("pre",{className:"bg-secondary p-4 rounded-lg overflow-x-auto mb-4",...i}),blockquote:({node:a,...i})=>t.jsx("blockquote",{className:"border-l-4 border-[var(--brand-primary)] pl-4 italic my-4 text-muted-foreground",...i})},children:n.content})}),t.jsx("div",{className:"mt-12 pt-8 border-t border-border",children:t.jsx("div",{className:"flex items-center justify-between",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-sm text-muted-foreground",children:"Share this article:"}),t.jsx("button",{className:"p-2 hover:bg-secondary rounded-lg transition-colors",children:t.jsx(Tn,{className:"w-4 h-4"})})]})})}),t.jsx("div",{className:"mt-8 p-6 bg-secondary/50 rounded-xl border border-border",children:t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(fi,{className:"w-8 h-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-1",children:"About the Author"}),t.jsx("p",{className:"mb-2",children:n.author.name}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Expert in customer service and AI technology with over 10 years of experience helping businesses with digital transformation."})]})]})})]}),r.length>0&&t.jsxs("div",{className:"mt-16",children:[t.jsxs("h2",{className:"text-2xl mb-8",children:["Related"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Articles"})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:r.map(a=>t.jsxs(ae,{to:`/blog/${a.slug}`,className:"group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--brand-primary)]/20 transition-all",children:[t.jsx("div",{className:"relative h-40 overflow-hidden",children:t.jsx(wt,{src:a.image,alt:a.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),t.jsxs("div",{className:"p-4",children:[t.jsx("h3",{className:"text-sm mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:a.title}),t.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[t.jsx(We,{className:"w-3 h-3"}),t.jsx("span",{children:a.date})]})]})]},a.slug))})]}),t.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl text-center text-white",children:[t.jsx("h2",{className:"text-2xl sm:text-3xl mb-4",children:"Ready to Transform Your Customer Service?"}),t.jsx("p",{className:"text-lg mb-6 opacity-90",children:"Join thousands of businesses that have experienced the benefits of AI"}),t.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:"Contact Us"})]})]})})}function od(){const[e,n]=ee.useState(!0);return t.jsxs("main",{className:"pt-20 pb-0 min-h-screen flex flex-col",children:[t.jsx("div",{className:"px-4 sm:px-6 lg:px-8 py-6 border-b border-border bg-card/50 backdrop-blur-sm",children:t.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[t.jsx("div",{className:"flex items-center gap-4",children:t.jsxs(ae,{to:"/",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:[t.jsx(Qt,{className:"w-4 h-4"}),"Back to Home"]})}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(We,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("h1",{className:"text-lg font-semibold",children:"Book a Demo"})]}),t.jsx("div",{className:"w-24"})]})}),t.jsxs("div",{className:"flex-1 w-full relative",children:[e&&t.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-background gap-6",children:[t.jsxs("div",{className:"relative w-20 h-20",children:[t.jsx("div",{className:"absolute inset-0 rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-primary)",animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite"}}),t.jsx("div",{className:"absolute inset-[6px] rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-gradient-end)",animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.15s"}}),t.jsx("div",{className:"absolute inset-[12px] rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-primary)",opacity:.5,animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.3s"}}),t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:t.jsx(We,{className:"w-6 h-6 text-[var(--brand-primary)]",style:{animation:"demo-pulse 2s ease-in-out infinite"}})})]}),t.jsxs("div",{className:"text-center space-y-2",children:[t.jsx("p",{className:"text-lg font-medium text-foreground",children:"Preparing your booking"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading schedule…"})]}),t.jsx("div",{className:"w-48 h-1 rounded-full bg-border overflow-hidden",children:t.jsx("div",{className:"h-full rounded-full",style:{background:"linear-gradient(90deg, var(--brand-gradient-start), var(--brand-gradient-end))",animation:"demo-shimmer 1.5s ease-in-out infinite"}})})]}),t.jsx("iframe",{src:"https://calendly.com/wanriparasians/konsultasi-omnichannel",title:"Book a Demo - Calendly",className:"w-full h-full border-0",style:{minHeight:"calc(100vh - 8rem)",opacity:e?0:1,transition:"opacity 0.5s ease-in-out"},loading:"lazy",allow:"payment",onLoad:()=>n(!1)})]}),t.jsx("style",{children:`
        @keyframes demo-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes demo-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes demo-shimmer {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 100%; margin-left: 0%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `})]})}function ld(e){ee.useEffect(()=>{window.chatwootSettings={hideMessageBubble:e.hideMessageBubble||!1,position:e.position||"right",locale:e.locale||"id",type:"expanded_bubble"};const n=document.createElement("script");return n.src=`${e.baseUrl}/packs/js/sdk.js`,n.async=!0,n.defer=!0,n.onload=()=>{window.chatwootSDK&&window.chatwootSDK.run({websiteToken:e.websiteToken,baseUrl:e.baseUrl})},n.onerror=()=>{console.error("Failed to load Chatwoot SDK")},document.body.appendChild(n),()=>{n.parentNode&&n.parentNode.removeChild(n);const r=document.querySelector(".woot-widget-holder");r&&r.remove()}},[e.websiteToken,e.baseUrl,e.hideMessageBubble,e.position,e.locale])}function cd(){const[e,n]=ee.useState("light");ee.useEffect(()=>{const a=localStorage.getItem("theme");a?(n(a),document.documentElement.classList.toggle("dark",a==="dark")):(n("light"),document.documentElement.classList.remove("dark"))},[]);const r=()=>{const a=e==="light"?"dark":"light";n(a),document.documentElement.classList.toggle("dark",a==="dark"),localStorage.setItem("theme",a)};return ld({websiteToken:"AH84MtFe5Ux2XxicvHdu77PX",baseUrl:"https://chat.responpintar.com",position:"right",locale:"en"}),t.jsx(_a,{children:t.jsxs("div",{className:"min-h-screen bg-background text-foreground transition-colors duration-300",children:[t.jsx(js,{theme:e,toggleTheme:r}),t.jsxs(Ua,{children:[t.jsx(Me,{path:"/",element:t.jsx(Ms,{})}),t.jsx(Me,{path:"/privacy",element:t.jsx(Ds,{})}),t.jsx(Me,{path:"/terms",element:t.jsx(zs,{})}),t.jsx(Me,{path:"/about",element:t.jsx(Ls,{})}),t.jsx(Me,{path:"/blog",element:t.jsx(Bs,{})}),t.jsx(Me,{path:"/blog/:slug",element:t.jsx(sd,{})}),t.jsx(Me,{path:"/demo",element:t.jsx(od,{})})]}),t.jsx(ws,{})]})})}vi.createRoot(document.getElementById("root")).render(t.jsx(cd,{}));
