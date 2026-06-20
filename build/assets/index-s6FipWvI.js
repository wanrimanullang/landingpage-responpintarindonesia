import{a as ri,b as ai,r as U,R as ii,L as ae,g as Wr,u as si,B as oi,c as li,d as Pe}from"./vendor-react-Cn2NrLb-.js";import{M as ci,S as ui,F as di,T as mi,I as pi,L as hi,Y as gi,a as It,P as At,b as pn,c as Jt,A as ot,Z as bt,B as fi,G as xi,N as bi,d as hn,e as yi,f as vi,g as Ur,h as Hr,i as Vr,j as qr,C as ki,k as On,l as nt,m as ji,H as Ln,n as wi,U as Ni,o as Ci,p as Bn,X as Si,q as Ii,r as Fn,s as Ai,t as _n,u as rt,E as Pi,v as Ti,w as Xt,x as Ri,D as Ei,y as Gr,z as Mi,J as Di,R as zi,K as Oi,O as Li,Q as Bi,V as Fi,W as _i,_ as vt,$ as Zt,a0 as en,a1 as Wn,a2 as Wi,a3 as Un,a4 as Hn,a5 as $r,a6 as Kr,a7 as Qr,a8 as Ui,a9 as Vn,aa as Hi}from"./vendor-icons-DkF1x8js.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Et={exports:{}},Ye={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn;function Vi(){if(qn)return Ye;qn=1;var e=ri(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(l,u,c){var d,m={},h=null,p=null;c!==void 0&&(h=""+c),u.key!==void 0&&(h=""+u.key),u.ref!==void 0&&(p=u.ref);for(d in u)a.call(u,d)&&!s.hasOwnProperty(d)&&(m[d]=u[d]);if(l&&l.defaultProps)for(d in u=l.defaultProps,u)m[d]===void 0&&(m[d]=u[d]);return{$$typeof:n,type:l,key:h,ref:p,props:m,_owner:i.current}}return Ye.Fragment=r,Ye.jsx=o,Ye.jsxs=o,Ye}var Gn;function qi(){return Gn||(Gn=1,Et.exports=Vi()),Et.exports}var t=qi(),dt={},$n;function Gi(){if($n)return dt;$n=1;var e=ai();return dt.createRoot=e.createRoot,dt.hydrateRoot=e.hydrateRoot,dt}var $i=Gi();function Kn(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Ki(...e){return n=>{let r=!1;const a=e.map(i=>{const s=Kn(i,n);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let i=0;i<a.length;i++){const s=a[i];typeof s=="function"?s():Kn(e[i],null)}}}}var Qi=Symbol.for("react.lazy"),kt=ii[" use ".trim().toString()];function Yi(e){return typeof e=="object"&&e!==null&&"then"in e}function Yr(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Qi&&"_payload"in e&&Yi(e._payload)}function Ji(e){const n=Zi(e),r=U.forwardRef((a,i)=>{let{children:s,...o}=a;Yr(s)&&typeof kt=="function"&&(s=kt(s._payload));const l=U.Children.toArray(s),u=l.find(ts);if(u){const c=u.props.children,d=l.map(m=>m===u?U.Children.count(c)>1?U.Children.only(null):U.isValidElement(c)?c.props.children:null:m);return t.jsx(n,{...o,ref:i,children:U.isValidElement(c)?U.cloneElement(c,void 0,d):null})}return t.jsx(n,{...o,ref:i,children:s})});return r.displayName=`${e}.Slot`,r}var Xi=Ji("Slot");function Zi(e){const n=U.forwardRef((r,a)=>{let{children:i,...s}=r;if(Yr(i)&&typeof kt=="function"&&(i=kt(i._payload)),U.isValidElement(i)){const o=rs(i),l=ns(s,i.props);return i.type!==U.Fragment&&(l.ref=a?Ki(a,o):o),U.cloneElement(i,l)}return U.Children.count(i)>1?U.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var es=Symbol("radix.slottable");function ts(e){return U.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===es}function ns(e,n){const r={...n};for(const a in n){const i=e[a],s=n[a];/^on[A-Z]/.test(a)?i&&s?r[a]=(...l)=>{const u=s(...l);return i(...l),u}:i&&(r[a]=i):a==="style"?r[a]={...i,...s}:a==="className"&&(r[a]=[i,s].filter(Boolean).join(" "))}return{...e,...r}}function rs(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Jr(e){var n,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=Jr(e[n]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function Xr(){for(var e,n,r=0,a="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=Jr(e))&&(a&&(a+=" "),a+=n);return a}const Qn=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Yn=Xr,as=(e,n)=>r=>{var a;if(n?.variants==null)return Yn(e,r?.class,r?.className);const{variants:i,defaultVariants:s}=n,o=Object.keys(i).map(c=>{const d=r?.[c],m=s?.[c];if(d===null)return null;const h=Qn(d)||Qn(m);return i[c][h]}),l=r&&Object.entries(r).reduce((c,d)=>{let[m,h]=d;return h===void 0||(c[m]=h),c},{}),u=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((c,d)=>{let{class:m,className:h,...p}=d;return Object.entries(p).every(k=>{let[j,w]=k;return Array.isArray(w)?w.includes({...s,...l}[j]):{...s,...l}[j]===w})?[...c,m,h]:c},[]);return Yn(e,o,u,r?.class,r?.className)},is=(e,n)=>{const r=new Array(e.length+n.length);for(let a=0;a<e.length;a++)r[a]=e[a];for(let a=0;a<n.length;a++)r[e.length+a]=n[a];return r},ss=(e,n)=>({classGroupId:e,validator:n}),Zr=(e=new Map,n=null,r)=>({nextPart:e,validators:n,classGroupId:r}),jt="-",Jn=[],os="arbitrary..",ls=e=>{const n=us(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return cs(o);const l=o.split(jt),u=l[0]===""&&l.length>1?1:0;return ea(l,u,n)},getConflictingClassGroupIds:(o,l)=>{if(l){const u=a[o],c=r[o];return u?c?is(c,u):u:c||Jn}return r[o]||Jn}}},ea=(e,n,r)=>{if(e.length-n===0)return r.classGroupId;const i=e[n],s=r.nextPart.get(i);if(s){const c=ea(e,n+1,s);if(c)return c}const o=r.validators;if(o===null)return;const l=n===0?e.join(jt):e.slice(n).join(jt),u=o.length;for(let c=0;c<u;c++){const d=o[c];if(d.validator(l))return d.classGroupId}},cs=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const n=e.slice(1,-1),r=n.indexOf(":"),a=n.slice(0,r);return a?os+a:void 0})(),us=e=>{const{theme:n,classGroups:r}=e;return ds(r,n)},ds=(e,n)=>{const r=Zr();for(const a in e){const i=e[a];gn(i,r,a,n)}return r},gn=(e,n,r,a)=>{const i=e.length;for(let s=0;s<i;s++){const o=e[s];ms(o,n,r,a)}},ms=(e,n,r,a)=>{if(typeof e=="string"){ps(e,n,r);return}if(typeof e=="function"){hs(e,n,r,a);return}gs(e,n,r,a)},ps=(e,n,r)=>{const a=e===""?n:ta(n,e);a.classGroupId=r},hs=(e,n,r,a)=>{if(fs(e)){gn(e(a),n,r,a);return}n.validators===null&&(n.validators=[]),n.validators.push(ss(r,e))},gs=(e,n,r,a)=>{const i=Object.entries(e),s=i.length;for(let o=0;o<s;o++){const[l,u]=i[o];gn(u,ta(n,l),r,a)}},ta=(e,n)=>{let r=e;const a=n.split(jt),i=a.length;for(let s=0;s<i;s++){const o=a[s];let l=r.nextPart.get(o);l||(l=Zr(),r.nextPart.set(o,l)),r=l}return r},fs=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,xs=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,r=Object.create(null),a=Object.create(null);const i=(s,o)=>{r[s]=o,n++,n>e&&(n=0,a=r,r=Object.create(null))};return{get(s){let o=r[s];if(o!==void 0)return o;if((o=a[s])!==void 0)return i(s,o),o},set(s,o){s in r?r[s]=o:i(s,o)}}},tn="!",Xn=":",bs=[],Zn=(e,n,r,a,i)=>({modifiers:e,hasImportantModifier:n,baseClassName:r,maybePostfixModifierPosition:a,isExternal:i}),ys=e=>{const{prefix:n,experimentalParseClassName:r}=e;let a=i=>{const s=[];let o=0,l=0,u=0,c;const d=i.length;for(let j=0;j<d;j++){const w=i[j];if(o===0&&l===0){if(w===Xn){s.push(i.slice(u,j)),u=j+1;continue}if(w==="/"){c=j;continue}}w==="["?o++:w==="]"?o--:w==="("?l++:w===")"&&l--}const m=s.length===0?i:i.slice(u);let h=m,p=!1;m.endsWith(tn)?(h=m.slice(0,-1),p=!0):m.startsWith(tn)&&(h=m.slice(1),p=!0);const k=c&&c>u?c-u:void 0;return Zn(s,p,h,k)};if(n){const i=n+Xn,s=a;a=o=>o.startsWith(i)?s(o.slice(i.length)):Zn(bs,!1,o,void 0,!0)}if(r){const i=a;a=s=>r({className:s,parseClassName:i})}return a},vs=e=>{const n=new Map;return e.orderSensitiveModifiers.forEach((r,a)=>{n.set(r,1e6+a)}),r=>{const a=[];let i=[];for(let s=0;s<r.length;s++){const o=r[s],l=o[0]==="[",u=n.has(o);l||u?(i.length>0&&(i.sort(),a.push(...i),i=[]),a.push(o)):i.push(o)}return i.length>0&&(i.sort(),a.push(...i)),a}},ks=e=>({cache:xs(e.cacheSize),parseClassName:ys(e),sortModifiers:vs(e),...ls(e)}),js=/\s+/,ws=(e,n)=>{const{parseClassName:r,getClassGroupId:a,getConflictingClassGroupIds:i,sortModifiers:s}=n,o=[],l=e.trim().split(js);let u="";for(let c=l.length-1;c>=0;c-=1){const d=l[c],{isExternal:m,modifiers:h,hasImportantModifier:p,baseClassName:k,maybePostfixModifierPosition:j}=r(d);if(m){u=d+(u.length>0?" "+u:u);continue}let w=!!j,y=a(w?k.substring(0,j):k);if(!y){if(!w){u=d+(u.length>0?" "+u:u);continue}if(y=a(k),!y){u=d+(u.length>0?" "+u:u);continue}w=!1}const z=h.length===0?"":h.length===1?h[0]:s(h).join(":"),I=p?z+tn:z,V=I+y;if(o.indexOf(V)>-1)continue;o.push(V);const q=i(y,w);for(let b=0;b<q.length;++b){const _=q[b];o.push(I+_)}u=d+(u.length>0?" "+u:u)}return u},Ns=(...e)=>{let n=0,r,a,i="";for(;n<e.length;)(r=e[n++])&&(a=na(r))&&(i&&(i+=" "),i+=a);return i},na=e=>{if(typeof e=="string")return e;let n,r="";for(let a=0;a<e.length;a++)e[a]&&(n=na(e[a]))&&(r&&(r+=" "),r+=n);return r},Cs=(e,...n)=>{let r,a,i,s;const o=u=>{const c=n.reduce((d,m)=>m(d),e());return r=ks(c),a=r.cache.get,i=r.cache.set,s=l,l(u)},l=u=>{const c=a(u);if(c)return c;const d=ws(u,r);return i(u,d),d};return s=o,(...u)=>s(Ns(...u))},Ss=[],re=e=>{const n=r=>r[e]||Ss;return n.isThemeGetter=!0,n},ra=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,aa=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Is=/^\d+\/\d+$/,As=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ps=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ts=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Rs=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Es=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Fe=e=>Is.test(e),W=e=>!!e&&!Number.isNaN(Number(e)),Te=e=>!!e&&Number.isInteger(Number(e)),Mt=e=>e.endsWith("%")&&W(e.slice(0,-1)),Ie=e=>As.test(e),Ms=()=>!0,Ds=e=>Ps.test(e)&&!Ts.test(e),ia=()=>!1,zs=e=>Rs.test(e),Os=e=>Es.test(e),Ls=e=>!T(e)&&!R(e),Bs=e=>Ve(e,la,ia),T=e=>ra.test(e),ze=e=>Ve(e,ca,Ds),Dt=e=>Ve(e,Hs,W),er=e=>Ve(e,sa,ia),Fs=e=>Ve(e,oa,Os),mt=e=>Ve(e,ua,zs),R=e=>aa.test(e),Je=e=>qe(e,ca),_s=e=>qe(e,Vs),tr=e=>qe(e,sa),Ws=e=>qe(e,la),Us=e=>qe(e,oa),pt=e=>qe(e,ua,!0),Ve=(e,n,r)=>{const a=ra.exec(e);return a?a[1]?n(a[1]):r(a[2]):!1},qe=(e,n,r=!1)=>{const a=aa.exec(e);return a?a[1]?n(a[1]):r:!1},sa=e=>e==="position"||e==="percentage",oa=e=>e==="image"||e==="url",la=e=>e==="length"||e==="size"||e==="bg-size",ca=e=>e==="length",Hs=e=>e==="number",Vs=e=>e==="family-name",ua=e=>e==="shadow",qs=()=>{const e=re("color"),n=re("font"),r=re("text"),a=re("font-weight"),i=re("tracking"),s=re("leading"),o=re("breakpoint"),l=re("container"),u=re("spacing"),c=re("radius"),d=re("shadow"),m=re("inset-shadow"),h=re("text-shadow"),p=re("drop-shadow"),k=re("blur"),j=re("perspective"),w=re("aspect"),y=re("ease"),z=re("animate"),I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],q=()=>[...V(),R,T],b=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto","contain","none"],N=()=>[R,T,u],B=()=>[Fe,"full","auto",...N()],E=()=>[Te,"none","subgrid",R,T],P=()=>["auto",{span:["full",Te,R,T]},Te,R,T],A=()=>[Te,"auto",R,T],G=()=>["auto","min","max","fr",R,T],D=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],S=()=>["start","end","center","stretch","center-safe","end-safe"],H=()=>["auto",...N()],Q=()=>[Fe,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],M=()=>[e,R,T],ge=()=>[...V(),tr,er,{position:[R,T]}],f=()=>["no-repeat",{repeat:["","x","y","space","round"]}],se=()=>["auto","cover","contain",Ws,Bs,{size:[R,T]}],de=()=>[Mt,Je,ze],g=()=>["","none","full",c,R,T],Z=()=>["",W,Je,ze],fe=()=>["solid","dashed","dotted","double"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ee=()=>[W,Mt,tr,er],be=()=>["","none",k,R,T],ye=()=>["none",W,R,T],ve=()=>["none",W,R,T],Ae=()=>[W,R,T],Le=()=>[Fe,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ie],breakpoint:[Ie],color:[Ms],container:[Ie],"drop-shadow":[Ie],ease:["in","out","in-out"],font:[Ls],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ie],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ie],shadow:[Ie],spacing:["px",W],text:[Ie],"text-shadow":[Ie],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Fe,T,R,w]}],container:["container"],columns:[{columns:[W,T,R,l]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:q()}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:B()}],"inset-x":[{"inset-x":B()}],"inset-y":[{"inset-y":B()}],start:[{start:B()}],end:[{end:B()}],top:[{top:B()}],right:[{right:B()}],bottom:[{bottom:B()}],left:[{left:B()}],visibility:["visible","invisible","collapse"],z:[{z:[Te,"auto",R,T]}],basis:[{basis:[Fe,"full","auto",l,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[W,Fe,"auto","initial","none",T]}],grow:[{grow:["",W,R,T]}],shrink:[{shrink:["",W,R,T]}],order:[{order:[Te,"first","last","none",R,T]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:P()}],"col-start":[{"col-start":A()}],"col-end":[{"col-end":A()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:P()}],"row-start":[{"row-start":A()}],"row-end":[{"row-end":A()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":G()}],"auto-rows":[{"auto-rows":G()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...D(),"normal"]}],"justify-items":[{"justify-items":[...S(),"normal"]}],"justify-self":[{"justify-self":["auto",...S()]}],"align-content":[{content:["normal",...D()]}],"align-items":[{items:[...S(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...S(),{baseline:["","last"]}]}],"place-content":[{"place-content":D()}],"place-items":[{"place-items":[...S(),"baseline"]}],"place-self":[{"place-self":["auto",...S()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:H()}],mx:[{mx:H()}],my:[{my:H()}],ms:[{ms:H()}],me:[{me:H()}],mt:[{mt:H()}],mr:[{mr:H()}],mb:[{mb:H()}],ml:[{ml:H()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[l,"screen",...Q()]}],"min-w":[{"min-w":[l,"screen","none",...Q()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",r,Je,ze]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,R,Dt]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Mt,T]}],"font-family":[{font:[_s,T,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,R,T]}],"line-clamp":[{"line-clamp":[W,"none",R,Dt]}],leading:[{leading:[s,...N()]}],"list-image":[{"list-image":["none",R,T]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",R,T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:M()}],"text-color":[{text:M()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:[W,"from-font","auto",R,ze]}],"text-decoration-color":[{decoration:M()}],"underline-offset":[{"underline-offset":[W,"auto",R,T]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R,T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R,T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ge()}],"bg-repeat":[{bg:f()}],"bg-size":[{bg:se()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Te,R,T],radial:["",R,T],conic:[Te,R,T]},Us,Fs]}],"bg-color":[{bg:M()}],"gradient-from-pos":[{from:de()}],"gradient-via-pos":[{via:de()}],"gradient-to-pos":[{to:de()}],"gradient-from":[{from:M()}],"gradient-via":[{via:M()}],"gradient-to":[{to:M()}],rounded:[{rounded:g()}],"rounded-s":[{"rounded-s":g()}],"rounded-e":[{"rounded-e":g()}],"rounded-t":[{"rounded-t":g()}],"rounded-r":[{"rounded-r":g()}],"rounded-b":[{"rounded-b":g()}],"rounded-l":[{"rounded-l":g()}],"rounded-ss":[{"rounded-ss":g()}],"rounded-se":[{"rounded-se":g()}],"rounded-ee":[{"rounded-ee":g()}],"rounded-es":[{"rounded-es":g()}],"rounded-tl":[{"rounded-tl":g()}],"rounded-tr":[{"rounded-tr":g()}],"rounded-br":[{"rounded-br":g()}],"rounded-bl":[{"rounded-bl":g()}],"border-w":[{border:Z()}],"border-w-x":[{"border-x":Z()}],"border-w-y":[{"border-y":Z()}],"border-w-s":[{"border-s":Z()}],"border-w-e":[{"border-e":Z()}],"border-w-t":[{"border-t":Z()}],"border-w-r":[{"border-r":Z()}],"border-w-b":[{"border-b":Z()}],"border-w-l":[{"border-l":Z()}],"divide-x":[{"divide-x":Z()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Z()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fe(),"hidden","none"]}],"divide-style":[{divide:[...fe(),"hidden","none"]}],"border-color":[{border:M()}],"border-color-x":[{"border-x":M()}],"border-color-y":[{"border-y":M()}],"border-color-s":[{"border-s":M()}],"border-color-e":[{"border-e":M()}],"border-color-t":[{"border-t":M()}],"border-color-r":[{"border-r":M()}],"border-color-b":[{"border-b":M()}],"border-color-l":[{"border-l":M()}],"divide-color":[{divide:M()}],"outline-style":[{outline:[...fe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[W,R,T]}],"outline-w":[{outline:["",W,Je,ze]}],"outline-color":[{outline:M()}],shadow:[{shadow:["","none",d,pt,mt]}],"shadow-color":[{shadow:M()}],"inset-shadow":[{"inset-shadow":["none",m,pt,mt]}],"inset-shadow-color":[{"inset-shadow":M()}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:M()}],"ring-offset-w":[{"ring-offset":[W,ze]}],"ring-offset-color":[{"ring-offset":M()}],"inset-ring-w":[{"inset-ring":Z()}],"inset-ring-color":[{"inset-ring":M()}],"text-shadow":[{"text-shadow":["none",h,pt,mt]}],"text-shadow-color":[{"text-shadow":M()}],opacity:[{opacity:[W,R,T]}],"mix-blend":[{"mix-blend":[...te(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[W]}],"mask-image-linear-from-pos":[{"mask-linear-from":ee()}],"mask-image-linear-to-pos":[{"mask-linear-to":ee()}],"mask-image-linear-from-color":[{"mask-linear-from":M()}],"mask-image-linear-to-color":[{"mask-linear-to":M()}],"mask-image-t-from-pos":[{"mask-t-from":ee()}],"mask-image-t-to-pos":[{"mask-t-to":ee()}],"mask-image-t-from-color":[{"mask-t-from":M()}],"mask-image-t-to-color":[{"mask-t-to":M()}],"mask-image-r-from-pos":[{"mask-r-from":ee()}],"mask-image-r-to-pos":[{"mask-r-to":ee()}],"mask-image-r-from-color":[{"mask-r-from":M()}],"mask-image-r-to-color":[{"mask-r-to":M()}],"mask-image-b-from-pos":[{"mask-b-from":ee()}],"mask-image-b-to-pos":[{"mask-b-to":ee()}],"mask-image-b-from-color":[{"mask-b-from":M()}],"mask-image-b-to-color":[{"mask-b-to":M()}],"mask-image-l-from-pos":[{"mask-l-from":ee()}],"mask-image-l-to-pos":[{"mask-l-to":ee()}],"mask-image-l-from-color":[{"mask-l-from":M()}],"mask-image-l-to-color":[{"mask-l-to":M()}],"mask-image-x-from-pos":[{"mask-x-from":ee()}],"mask-image-x-to-pos":[{"mask-x-to":ee()}],"mask-image-x-from-color":[{"mask-x-from":M()}],"mask-image-x-to-color":[{"mask-x-to":M()}],"mask-image-y-from-pos":[{"mask-y-from":ee()}],"mask-image-y-to-pos":[{"mask-y-to":ee()}],"mask-image-y-from-color":[{"mask-y-from":M()}],"mask-image-y-to-color":[{"mask-y-to":M()}],"mask-image-radial":[{"mask-radial":[R,T]}],"mask-image-radial-from-pos":[{"mask-radial-from":ee()}],"mask-image-radial-to-pos":[{"mask-radial-to":ee()}],"mask-image-radial-from-color":[{"mask-radial-from":M()}],"mask-image-radial-to-color":[{"mask-radial-to":M()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":V()}],"mask-image-conic-pos":[{"mask-conic":[W]}],"mask-image-conic-from-pos":[{"mask-conic-from":ee()}],"mask-image-conic-to-pos":[{"mask-conic-to":ee()}],"mask-image-conic-from-color":[{"mask-conic-from":M()}],"mask-image-conic-to-color":[{"mask-conic-to":M()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ge()}],"mask-repeat":[{mask:f()}],"mask-size":[{mask:se()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",R,T]}],filter:[{filter:["","none",R,T]}],blur:[{blur:be()}],brightness:[{brightness:[W,R,T]}],contrast:[{contrast:[W,R,T]}],"drop-shadow":[{"drop-shadow":["","none",p,pt,mt]}],"drop-shadow-color":[{"drop-shadow":M()}],grayscale:[{grayscale:["",W,R,T]}],"hue-rotate":[{"hue-rotate":[W,R,T]}],invert:[{invert:["",W,R,T]}],saturate:[{saturate:[W,R,T]}],sepia:[{sepia:["",W,R,T]}],"backdrop-filter":[{"backdrop-filter":["","none",R,T]}],"backdrop-blur":[{"backdrop-blur":be()}],"backdrop-brightness":[{"backdrop-brightness":[W,R,T]}],"backdrop-contrast":[{"backdrop-contrast":[W,R,T]}],"backdrop-grayscale":[{"backdrop-grayscale":["",W,R,T]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[W,R,T]}],"backdrop-invert":[{"backdrop-invert":["",W,R,T]}],"backdrop-opacity":[{"backdrop-opacity":[W,R,T]}],"backdrop-saturate":[{"backdrop-saturate":[W,R,T]}],"backdrop-sepia":[{"backdrop-sepia":["",W,R,T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",R,T]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[W,"initial",R,T]}],ease:[{ease:["linear","initial",y,R,T]}],delay:[{delay:[W,R,T]}],animate:[{animate:["none",z,R,T]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[j,R,T]}],"perspective-origin":[{"perspective-origin":q()}],rotate:[{rotate:ye()}],"rotate-x":[{"rotate-x":ye()}],"rotate-y":[{"rotate-y":ye()}],"rotate-z":[{"rotate-z":ye()}],scale:[{scale:ve()}],"scale-x":[{"scale-x":ve()}],"scale-y":[{"scale-y":ve()}],"scale-z":[{"scale-z":ve()}],"scale-3d":["scale-3d"],skew:[{skew:Ae()}],"skew-x":[{"skew-x":Ae()}],"skew-y":[{"skew-y":Ae()}],transform:[{transform:[R,T,"","none","gpu","cpu"]}],"transform-origin":[{origin:q()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Le()}],"translate-x":[{"translate-x":Le()}],"translate-y":[{"translate-y":Le()}],"translate-z":[{"translate-z":Le()}],"translate-none":["translate-none"],accent:[{accent:M()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:M()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R,T]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R,T]}],fill:[{fill:["none",...M()]}],"stroke-w":[{stroke:[W,Je,ze,Dt]}],stroke:[{stroke:["none",...M()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Gs=Cs(qs);function $s(...e){return Gs(Xr(e))}const Ks=as("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function wt({className:e,variant:n,size:r,asChild:a=!1,...i}){const s=a?Xi:"button";return t.jsx(s,{"data-slot":"button",className:$s(Ks({variant:n,size:r,className:e})),...i})}function da(){return t.jsx("img",{src:"/logo.png",alt:"ResponPintar Logo",className:"w-full h-full object-contain"})}const ma=U.createContext({isOpen:!1,openModal:()=>{},closeModal:()=>{}});function Qs({children:e}){const[n,r]=U.useState(!1);return t.jsx(ma.Provider,{value:{isOpen:n,openModal:()=>r(!0),closeModal:()=>r(!1)},children:e})}function fn(){return U.useContext(ma)}function Ys({theme:e,toggleTheme:n}){const{openModal:r}=fn();return t.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"flex items-center justify-between h-16",children:[t.jsxs(ae,{to:"/",className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[t.jsx("div",{className:"w-8 h-8",children:t.jsx(da,{})}),t.jsx("span",{className:"text-lg",children:"Respon Pintar"})]}),t.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[t.jsx(ae,{to:"/#features",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Features"}),t.jsx(ae,{to:"/about",className:"text-muted-foreground hover:text-foreground transition-colors",children:"About"}),t.jsx(ae,{to:"/blog",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Blog"}),t.jsx("button",{onClick:r,className:"text-muted-foreground hover:text-[var(--brand-primary)] font-medium transition-colors text-sm",children:"Try Demo"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("button",{onClick:n,className:"w-9 h-9 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-all hover:scale-105","aria-label":"Toggle theme",children:e==="light"?t.jsx(ci,{className:"w-5 h-5 text-foreground"}):t.jsx(ui,{className:"w-5 h-5 text-foreground"})}),t.jsx(wt,{asChild:!0,className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20",children:t.jsx("a",{href:"https://crm.responpintar.com/auth/login",target:"_blank",rel:"noopener noreferrer",children:"Try Now"})})]})]})})})}function Js(){const e=new Date().getFullYear();return t.jsxs("footer",{style:{background:"#0a0a0a",color:"#fff",overflow:"hidden",position:"relative"},children:[t.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"64px 32px 48px"},children:t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"48px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{maxWidth:"280px"},children:[t.jsxs(ae,{to:"/",style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px",textDecoration:"none"},children:[t.jsx("div",{style:{width:"32px",height:"32px"},children:t.jsx(da,{})}),t.jsx("span",{style:{color:"#fff",fontWeight:600},children:"Respon Pintar"})]}),t.jsx("p",{style:{color:"#666",fontSize:"14px",lineHeight:1.6},children:"Solusi AI Terdepan untuk Customer Service Automation"}),t.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"24px"},children:[t.jsx("a",{href:"#","aria-label":"Facebook",style:{color:"#666",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:t.jsx(di,{className:"w-5 h-5"})}),t.jsx("a",{href:"#","aria-label":"Twitter",style:{color:"#666",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:t.jsx(mi,{className:"w-5 h-5"})}),t.jsx("a",{href:"#","aria-label":"Instagram",style:{color:"#666",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:t.jsx(pi,{className:"w-5 h-5"})}),t.jsx("a",{href:"https://www.linkedin.com/company/109874968/","aria-label":"LinkedIn",style:{color:"#666",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:t.jsx(hi,{className:"w-5 h-5"})}),t.jsx("a",{href:"#","aria-label":"YouTube",style:{color:"#666",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:t.jsx(gi,{className:"w-5 h-5"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#fff",fontWeight:600,marginBottom:"20px",fontSize:"14px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Product"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("li",{children:t.jsx("a",{href:"#features",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"Features"})}),t.jsx("li",{children:t.jsx("a",{href:"#pricing",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"Pricing"})}),t.jsx("li",{children:t.jsx("a",{href:"#",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"Integrations"})}),t.jsx("li",{children:t.jsx("a",{href:"#",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"API Docs"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#fff",fontWeight:600,marginBottom:"20px",fontSize:"14px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Company"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("li",{children:t.jsx(ae,{to:"/about",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"About Us"})}),t.jsx("li",{children:t.jsx(ae,{to:"/blog",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"Blog"})}),t.jsx("li",{children:t.jsx(ae,{to:"/privacy",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"Privacy Policy"})}),t.jsx("li",{children:t.jsx(ae,{to:"/terms",style:{color:"#666",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#666",children:"Terms of Service"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#fff",fontWeight:600,marginBottom:"20px",fontSize:"14px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Contact"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("li",{style:{color:"#666",fontSize:"14px",display:"flex",gap:"8px",alignItems:"center"},children:[t.jsx(It,{className:"w-4 h-4"})," support@responpintar.com"]}),t.jsxs("li",{style:{color:"#666",fontSize:"14px",display:"flex",gap:"8px",alignItems:"center"},children:[t.jsx(At,{className:"w-4 h-4"})," +62 821-8988-5080"]}),t.jsxs("li",{style:{color:"#666",fontSize:"14px",display:"flex",gap:"8px",alignItems:"flex-start",lineHeight:1.5},children:[t.jsx(pn,{className:"w-4 h-4 mt-0.5"}),t.jsxs("span",{children:["Plaza Aminta 5th Floor/504,",t.jsx("br",{}),"South Jakarta 12310"]})]})]})]})]})}),t.jsx("div",{style:{height:"1px",background:"#1a1a1a",maxWidth:"1280px",margin:"0 auto 0"}}),t.jsx("div",{style:{padding:"0 24px",lineHeight:.85,overflow:"hidden",textAlign:"center",marginTop:"20px"},children:t.jsx("span",{style:{display:"block",fontFamily:"'Inter', 'SF Pro Display', sans-serif",fontWeight:900,fontSize:"clamp(80px, 18vw, 220px)",letterSpacing:"-0.03em",color:"#fff",opacity:.08,userSelect:"none",whiteSpace:"nowrap"},children:"ResponPintar"})}),t.jsxs("div",{style:{borderTop:"1px solid #1a1a1a",padding:"20px 32px",maxWidth:"1280px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[t.jsxs("p",{style:{color:"#444",fontSize:"13px"},children:["© ",e," Respon Pintar. All rights reserved."]}),t.jsxs("div",{style:{display:"flex",gap:"24px"},children:[t.jsx(ae,{to:"/privacy",style:{color:"#444",fontSize:"13px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#444",children:"Privacy"}),t.jsx(ae,{to:"/terms",style:{color:"#444",fontSize:"13px",textDecoration:"none",transition:"color 0.2s"},onMouseOver:n=>n.currentTarget.style.color="#fff",onMouseOut:n=>n.currentTarget.style.color="#444",children:"Terms"})]})]})]})}function Xs(){const{openModal:e}=fn();return t.jsxs("section",{className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl -z-10"}),t.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-gradient-end)]/10 rounded-full blur-3xl -z-10"}),t.jsx("div",{className:"max-w-7xl mx-auto",children:t.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border",children:[t.jsx(Jt,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"SaaS Platform for Response Automation"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl !leading-tight",children:["Boost Customer Response with"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"AI Technology"})]}),t.jsx("p",{className:"text-lg text-muted-foreground !leading-relaxed",children:"Automate customer responses, increase satisfaction, and save up to 70% of your time with an easy-to-use AI-powered chatbot platform."}),t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsxs(wt,{size:"lg",className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20 group",children:[t.jsx("a",{href:"https://crm.responpintar.com/auth/login",children:"Start Free"}),t.jsx(ot,{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"})]}),t.jsx("button",{onClick:e,children:t.jsx(wt,{size:"lg",variant:"outline",className:"border-border hover:bg-accent hover:scale-105 transition-all",children:"View Demo"})})]}),t.jsxs("div",{className:"flex flex-wrap gap-8 pt-4",children:[t.jsxs("div",{children:[t.jsx("div",{className:"flex items-baseline gap-1",children:t.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"10K+"})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Users"})]}),t.jsxs("div",{children:[t.jsx("div",{className:"flex items-baseline gap-1",children:t.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"98%"})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer Satisfaction"})]}),t.jsxs("div",{children:[t.jsx("div",{className:"flex items-baseline gap-1",children:t.jsx("span",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"24/7"})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Automated Support"})]})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl"}),t.jsxs("div",{className:"relative bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-border",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx(bt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm",children:"Respon Pintar AI"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),t.jsxs("div",{className:"flex gap-1",children:[t.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"flex justify-end",children:t.jsx("div",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]",children:t.jsx("p",{className:"text-sm",children:"How do I use the automation feature?"})})}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0",children:t.jsx(bt,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),t.jsx("div",{className:"bg-secondary px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]",children:t.jsx("p",{className:"text-sm",children:"Our automation feature is super easy! Just set up your response templates, and the AI will handle the rest automatically 24/7."})})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0",children:t.jsx(bt,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),t.jsx("div",{className:"bg-secondary px-4 py-2 rounded-2xl",children:t.jsxs("div",{className:"flex gap-1",children:[t.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"0ms"}}),t.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"150ms"}}),t.jsx("div",{className:"w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce",style:{animationDelay:"300ms"}})]})})]})]}),t.jsxs("div",{className:"flex gap-2 pt-4 border-t border-border",children:[t.jsx("div",{className:"flex-1 bg-secondary px-4 py-2 rounded-lg",children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Type a message..."})}),t.jsx("button",{className:"w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx(ot,{className:"w-5 h-5 text-white"})})]})]}),t.jsx("div",{className:"absolute -top-4 -right-4 bg-card border border-border rounded-xl shadow-lg p-3 animate-pulse",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500"}),t.jsx("span",{className:"text-xs",children:"AI Active"})]})}),t.jsx("div",{className:"absolute -bottom-4 -left-4 bg-card border border-border rounded-xl shadow-lg p-3",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Jt,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-xs",children:"Smart Response"})]})})]})]})})]})}const Zs=[{icon:fi,title:"Smart AI Chatbot",description:"An AI-powered chatbot that understands context and delivers natural, human-like responses."},{icon:xi,title:"Instant Automation",description:"Quick setup in minutes. Start serving your customers 24/7 right away."},{icon:bi,title:"Multi-Channel Support",description:"Integrate with WhatsApp, Instagram, Facebook, and other platforms in a single dashboard."},{icon:hn,title:"In-Depth Analytics",description:"Analytics dashboard for tracking performance, customer satisfaction, and business insights."},{icon:yi,title:"Guaranteed Security",description:"End-to-end encryption and international compliance standards to protect your data."},{icon:vi,title:"Real-time Response",description:"Response time under 1 second. Your customers never have to wait long."}];function eo(){return t.jsx("section",{id:"features",className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[t.jsx(Jt,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Key Features"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["Everything You Need for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service Automation"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"A complete platform with powerful features designed to maximize your efficiency and customer satisfaction."})]}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Zs.map((e,n)=>{const r=e.icon;return t.jsxs("div",{className:"group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(r,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"mb-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:e.description})]},n)})})]})})}const to=[{icon:Hr,title:"E-Commerce",description:"Automatically handle product inquiries, order tracking, and customer complaints.",benefits:["Increase conversion by 40%","Reduce cart abandonment","24/7 support at no extra cost"]},{icon:Vr,title:"Business & Corporate",description:"Automate customer support, lead generation, and internal communication.",benefits:["Save 60% on operational costs","Faster response times","Boost team productivity"]},{icon:qr,title:"Education",description:"Answer student questions, provide enrollment information, and learning guidance.",benefits:["Serve thousands of students at once","Accurate info 24/7","Increase engagement"]},{icon:ki,title:"Healthcare",description:"Schedule appointments, provide service information, and answer common medical FAQs.",benefits:["Reduce admin workload","Automatic appointment management","More efficient service"]}];function no(){return t.jsx("section",{id:"use-cases",className:"py-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[t.jsx(Ur,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Use Cases"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["Solutions for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Various Industries"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"From startups to enterprises, Respon Pintar helps businesses across sectors improve their customer experience."})]}),t.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:to.map((e,n)=>{const r=e.icon;return t.jsxs("div",{className:"group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",children:t.jsx(r,{className:"w-7 h-7 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"mb-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:e.description})]})]}),t.jsx("div",{className:"space-y-2 mt-6 pt-6 border-t border-border",children:e.benefits.map((a,i)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:a})]},i))})]},n)})})]})})}function ro(){return t.jsx("section",{id:"pricing",className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-4",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border",children:[t.jsx(On,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Pricing"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl",children:["The Right Solution for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Your Business"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"We provide custom packages tailored to your business needs. Contact our team for the best offer."})]}),t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-12 text-center shadow-xl",children:[t.jsx("div",{className:"w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx(On,{className:"w-10 h-10 text-white"})}),t.jsx("h3",{className:"text-2xl mb-4",children:"Get a Custom Quote"}),t.jsx("p",{className:"text-muted-foreground mb-8 max-w-2xl mx-auto",children:"Every business has unique needs. Our team will help you find the best solution with competitive pricing and features tailored to your requirements."}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto",children:[t.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[t.jsx(It,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),t.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"Email"}),t.jsx("p",{className:"text-sm",children:"support@responpintar.com"})]}),t.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[t.jsx(At,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),t.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"Phone"}),t.jsx("p",{className:"text-sm",children:"+62 821-8988-5080"})]}),t.jsxs("div",{className:"bg-secondary/50 rounded-xl p-4 border border-border",children:[t.jsx(nt,{className:"w-6 h-6 text-[var(--brand-primary)] mx-auto mb-2"}),t.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"WhatsApp"}),t.jsx("p",{className:"text-sm",children:"+62 821-8988-5080"})]})]}),t.jsx(wt,{size:"lg",className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-[var(--brand-primary)]/20",children:t.jsx("a",{href:"https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Contact Sales Team"})}),t.jsx("div",{className:"mt-8 pt-8 border-t border-border",children:t.jsxs("p",{className:"text-sm text-muted-foreground",children:["💡 ",t.jsx("strong",{children:"Free Trial Available:"})," Try our platform free for 14 days — no credit card required"]})})]}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-6 mt-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsxs("svg",{className:"w-8 h-8 mx-auto mb-2",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("circle",{cx:"16",cy:"16",r:"14",stroke:"var(--brand-primary)",strokeWidth:"2",opacity:"0.3"}),t.jsx("circle",{cx:"16",cy:"16",r:"9",stroke:"var(--brand-primary)",strokeWidth:"2",opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"16",r:"4",fill:"var(--brand-primary)"})]}),t.jsx("p",{className:"text-sm",children:"Custom Packages"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Tailored to your business needs"})]}),t.jsxs("div",{className:"text-center",children:[t.jsxs("svg",{className:"w-8 h-8 mx-auto mb-2",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("path",{d:"M16 3L28 16L16 29L4 16Z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("path",{d:"M16 9L23 16L16 23L9 16Z",fill:"var(--brand-primary)",fillOpacity:"0.5"})]}),t.jsx("p",{className:"text-sm",children:"Competitive Pricing"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Best value for your investment"})]}),t.jsxs("div",{className:"text-center",children:[t.jsxs("svg",{className:"w-8 h-8 mx-auto mb-2",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("circle",{cx:"8",cy:"16",r:"5",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("circle",{cx:"24",cy:"16",r:"5",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("path",{d:"M13 16H19",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"8",cy:"16",r:"2",fill:"var(--brand-primary)"}),t.jsx("circle",{cx:"24",cy:"16",r:"2",fill:"var(--brand-primary)"})]}),t.jsx("p",{className:"text-sm",children:"Dedicated Support"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Team ready to help 24/7"})]})]})]})]})})}const nr=[{name:"Bali Resort Tangerang",logo:"/our-clients/bali resort tangerang - our clients.png"},{name:"Geriya Selaras",logo:"/our-clients/geriya selaras - our clients.png"},{name:"Kesuma Agung Selaras",logo:"/our-clients/kesuma agung selaras - our clients.png"},{name:"MAS Group",logo:"/our-clients/mas group - our clients.png"},{name:"Naputa",logo:"/our-clients/naputa - our clients.png"},{name:"Sagara",logo:"/our-clients/sagara - our clients.png"},{name:"The Crest",logo:"/our-clients/the crest - our clients.png"},{name:"Vista Residence",logo:"/our-clients/vista residence - our clients.png"},{name:"Almeria Vista",logo:"/our-clients/almeria vista - our clients.png"},{name:"Avani Breeze",logo:"/our-clients/avani breeze - our clients.png"},{name:"Bale Raya",logo:"/our-clients/bale raya - our clients.jpg"},{name:"Green Vasanta",logo:"/our-clients/green vasanta - our clients.png"},{name:"Pesona Land",logo:"/our-clients/pesona land - our clients.png"},{name:"Tanari",logo:"/our-clients/tanari forest - our clients.png"},{name:"PropertyKlik",logo:"/our-clients/propertyklik - our clients.png"}],ao=[{name:"WhatsApp",color:"#25D366",icon:t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:t.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})},{name:"Instagram",color:"#E1306C",icon:t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:t.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})},{name:"Messenger",color:"#006AFF",icon:t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:t.jsx("path",{d:"M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z"})})},{name:"Telegram",color:"#26A5E4",icon:t.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:t.jsx("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"})})}];function io(){const e=[...nr,...nr];return t.jsxs("section",{id:"our-clients",className:"pt-10 pb-8 overflow-hidden border-b border-border bg-background",children:[t.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8",children:t.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[t.jsx("span",{className:"text-xs text-muted-foreground uppercase tracking-widest font-medium mr-2",children:"Connected on"}),ao.map(n=>t.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground transition-all hover:scale-105 hover:shadow-md",style:{color:n.color},title:n.name,children:[n.icon,t.jsx("span",{className:"text-foreground text-xs",children:n.name})]},n.name))]})}),t.jsx("div",{className:"h-px bg-border/50 mx-8 mb-8"}),t.jsx("div",{className:"relative w-full overflow-hidden",style:{maskImage:"linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"},children:t.jsx("div",{className:"flex animate-marquee whitespace-nowrap items-center",children:e.map((n,r)=>t.jsx("div",{className:"inline-flex flex-shrink-0 items-center justify-center px-8",children:t.jsx("img",{src:n.logo,alt:n.name,className:"h-9 w-auto max-w-[130px] object-contain opacity-40 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300",loading:"lazy"})},`${n.name}-${r}`))})})]})}function so(e={}){const{threshold:n=.1,rootMargin:r="0px",triggerOnce:a=!0}=e,i=U.useRef(null),[s,o]=U.useState(!1);return U.useEffect(()=>{const l=i.current;if(!l)return;const u=new IntersectionObserver(([c])=>{c.isIntersecting?(o(!0),a&&u.unobserve(l)):a||o(!1)},{threshold:n,rootMargin:r});return u.observe(l),()=>{u.unobserve(l)}},[n,r,a]),{ref:i,isVisible:s}}function ht({children:e,className:n="",delay:r=0,animation:a="fade-up"}){const{ref:i,isVisible:s}=so({threshold:.1,triggerOnce:!0}),o=()=>{const l="transition-all duration-1000 ease-out";if(!s)switch(a){case"fade-up":return`${l} opacity-0 translate-y-12`;case"fade-in":return`${l} opacity-0`;case"fade-left":return`${l} opacity-0 -translate-x-12`;case"fade-right":return`${l} opacity-0 translate-x-12`;case"scale":return`${l} opacity-0 scale-95`;default:return`${l} opacity-0 translate-y-12`}return`${l} opacity-100 translate-y-0 translate-x-0 scale-100`};return t.jsx("div",{ref:i,className:`${o()} ${n}`,style:{transitionDelay:`${r}ms`},children:e})}const zt=10,pa={property:"YOUR_PROPERTY_TOKEN",hospital:"YOUR_HOSPITAL_TOKEN",clinic:"YOUR_CLINIC_TOKEN",retail:"YOUR_RETAIL_TOKEN",bank:"YOUR_BANK_TOKEN",finance:"YOUR_FINANCE_TOKEN",education:"YOUR_EDUCATION_TOKEN",fnb:"YOUR_FNB_TOKEN",logistics:"YOUR_LOGISTICS_TOKEN",corporate:"YOUR_CORPORATE_TOKEN"},oo="https://chat.responpintar.com",Ot=[{id:"property",name:"Property / Real Estate",icon:ji},{id:"hospital",name:"Hospital",icon:Ln},{id:"clinic",name:"Clinic",icon:Ln},{id:"retail",name:"Retail",icon:Hr},{id:"bank",name:"Banking",icon:wi},{id:"finance",name:"Finance / Fintech",icon:hn},{id:"education",name:"Education",icon:qr},{id:"fnb",name:"F&B / Restaurant",icon:Ni},{id:"logistics",name:"Logistics",icon:Ci},{id:"corporate",name:"Corporate / Enterprise",icon:Vr}];function Lt(e,n){const r=n.toLowerCase();if(r.includes("price")||r.includes("cost")||r.includes("fee"))return"For detailed pricing and packages, please visit our Pricing page or speak with our sales team.";if(r.includes("location")||r.includes("address"))return"Our office is at Plaza Aminta 5th Floor/504, South Jakarta. Would you like to schedule a visit?";if(r.includes("hello")||r.includes("hi")||r.includes("hey"))return"Hello! Please let me know what you need — I'm happy to help.";switch(e){case"property":return"We have a wide selection of properties. Are you looking for residential, commercial, or investment?";case"hospital":case"clinic":return"We can help schedule a consultation or provide information about our healthcare services.";case"retail":return"Are you looking for a specific product, or need help tracking an existing order?";case"bank":case"finance":return"Our financial application process is simple and fast. Would you like a simulation?";case"education":return"We offer excellent programmes. Do you need information on enrollment or curriculum?";case"fnb":return"You can make a reservation or order from our menu directly through this chat.";case"logistics":return"Provide your tracking number for updates, or ask about our delivery services.";case"corporate":return"We're ready to serve your enterprise with customised B2B solutions. Which department can I connect you to?";default:return"Thank you for your message. We'll assist with your business needs shortly."}}async function lo(e,n,r){const a=pa[e];if(!a||a.startsWith("YOUR_"))return Lt(e,n);try{const i=await fetch(`${oo}/api/v1/widget/conversations`,{method:"POST",headers:{"Content-Type":"application/json",api_access_token:a},body:JSON.stringify({message:{content:n,message_type:"incoming"},contact_id:r})});if(!i.ok)throw new Error(`API error ${i.status}`);return(await i.json())?.messages?.[0]?.content||Lt(e,n)}catch{return Lt(e,n)}}function co(){const{isOpen:e,closeModal:n}=fn(),[r,a]=U.useState(null),[i,s]=U.useState(null),[o,l]=U.useState([]),[u,c]=U.useState(""),[d,m]=U.useState(0),[h,p]=U.useState(!1),[k,j]=U.useState(!1),[w,y]=U.useState(!1),z=U.useRef(null);U.useEffect(()=>{const E=P=>{P.key==="Escape"&&(w?y(!1):n())};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[n,w]),U.useEffect(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]),U.useEffect(()=>{z.current?.scrollIntoView({behavior:"smooth"})},[o,k]),U.useEffect(()=>{e||(a(null),s(null),l([]),c(""),m(0),p(!1),j(!1),y(!1))},[e]);const I=E=>{const P=Ot.find(D=>D.id===E)?.name||"your business",A=pa[E],G=A&&!A.startsWith("YOUR_");a(E),l([{id:"1",role:"ai",content:G?`Hello! I'm your AI assistant for ${P}. How can I help you today?`:`Hello! I'm a demo assistant for ${P}. How can I help you today?`,timestamp:new Date}]),m(0),p(!1),c(""),j(!1)},V=E=>{E!==r&&(o.length>0?(s(E),y(!0)):I(E))},q=()=>{i&&(I(i),s(null)),y(!1)},b=()=>{s(null),y(!1)},_=async E=>{if(E.preventDefault(),!u.trim()||h||!r)return;const P={id:Date.now().toString(),role:"user",content:u,timestamp:new Date};l(G=>[...G,P]),c("");const A=d+1;m(A),A>=zt&&p(!0),j(!0);try{const G=await lo(r,P.content);l(D=>[...D,{id:(Date.now()+1).toString(),role:"ai",content:G,timestamp:new Date}])}finally{j(!1)}};if(!e)return null;const N=!!r,B=Ot.find(E=>E.id===r)?.name;return t.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6",children:[t.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:n}),t.jsxs("div",{className:"relative w-full max-w-4xl h-[88vh] max-h-[720px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 fade-in duration-200 overflow-hidden",children:[t.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 border-b border-border bg-card flex-shrink-0",children:[t.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[t.jsx("div",{className:"w-7 h-7 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0",children:t.jsx(Bn,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),t.jsx("span",{className:"font-semibold text-sm text-foreground truncate",children:"AI Chatbot Demo"}),N?t.jsxs("span",{className:"hidden sm:flex items-center gap-1 ml-1 px-2 py-0.5 bg-green-500/10 text-green-700 rounded-full text-[11px] font-medium border border-green-500/20 flex-shrink-0",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),B]}):t.jsxs("span",{className:"hidden sm:flex items-center gap-1 ml-1 px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-[11px] flex-shrink-0",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-muted-foreground/50"}),"Waiting"]})]}),t.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[N&&t.jsxs("span",{className:"hidden md:block text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md",children:[zt-d," / ",zt," left"]}),t.jsx("button",{onClick:n,className:"w-8 h-8 rounded-lg flex items-center justify-center hover:bg-accent text-muted-foreground hover:text-foreground transition-colors","aria-label":"Close",children:t.jsx(Si,{className:"w-4 h-4"})})]})]}),t.jsxs("div",{className:"flex flex-1 overflow-hidden min-h-0",children:[t.jsxs("div",{className:"w-56 flex-shrink-0 border-r border-border bg-muted/20 flex flex-col overflow-y-auto",children:[t.jsxs("div",{className:"px-4 pt-4 pb-3 border-b border-border flex-shrink-0",children:[t.jsx("p",{className:"text-xs font-semibold text-foreground uppercase tracking-wide",children:"Select industry"}),t.jsx("p",{className:"text-[11px] text-muted-foreground mt-0.5 leading-relaxed",children:"Chat adapts to your sector"})]}),t.jsx("nav",{className:"p-2 space-y-0.5 flex-1",children:Ot.map(E=>{const P=E.icon,A=r===E.id;return t.jsxs("button",{onClick:()=>V(E.id),className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs transition-all
                      ${A?"bg-green-500/10 text-green-700 font-semibold border border-green-500/20":"text-muted-foreground hover:bg-card hover:text-foreground"}`,children:[t.jsx(P,{className:`w-3.5 h-3.5 flex-shrink-0 ${A?"text-green-600":""}`}),t.jsx("span",{className:"leading-snug flex-1 truncate",children:E.name}),A&&t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"})]},E.id)})})]}),t.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-w-0",children:[w&&t.jsxs("div",{className:"flex-shrink-0 mx-4 mt-3 mb-1 bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm animate-in slide-in-from-top-2 duration-200",children:[t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx(Ii,{className:"w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0"}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"text-sm font-semibold text-amber-900 mb-0.5",children:"End this chat?"}),t.jsx("p",{className:"text-xs text-amber-700 leading-relaxed",children:"Switching industry will clear your current conversation."})]})]}),t.jsxs("div",{className:"flex gap-2 mt-3",children:[t.jsx("button",{onClick:b,className:"flex-1 py-2 px-4 rounded-lg border border-amber-300 bg-white text-amber-800 text-sm font-medium hover:bg-amber-50 transition-colors",children:"Keep chatting"}),t.jsx("button",{onClick:q,className:"flex-1 py-2 px-4 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 transition-colors",children:"Yes, switch"})]})]}),t.jsx("div",{className:`flex-1 overflow-y-auto p-5 space-y-4 transition-colors duration-300 ${N?"bg-background":"bg-muted/10"}`,children:N?t.jsxs(t.Fragment,{children:[o.map(E=>t.jsx("div",{className:`flex ${E.role==="user"?"justify-end":"justify-start"}`,children:t.jsxs("div",{className:`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm
                        ${E.role==="user"?"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white rounded-br-sm":"bg-card border border-border text-foreground rounded-bl-sm"}`,children:[t.jsx("p",{children:E.content}),t.jsx("span",{className:`text-[10px] opacity-60 mt-1 block text-right ${E.role==="user"?"text-white/80":"text-muted-foreground"}`,children:E.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},E.id)),k&&t.jsx("div",{className:"flex justify-start",children:t.jsxs("div",{className:"bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1 shadow-sm",children:[t.jsx("div",{className:"w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"0ms"}}),t.jsx("div",{className:"w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"150ms"}}),t.jsx("div",{className:"w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})}),t.jsx("div",{ref:z})]}):t.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center gap-3",children:[t.jsx("div",{className:"w-14 h-14 rounded-full bg-muted flex items-center justify-center",children:t.jsx(Fn,{className:"w-7 h-7 text-muted-foreground/50"})}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed max-w-[210px]",children:"Select an industry on the left to start your demo"})]})}),t.jsx("div",{className:`p-4 border-t flex-shrink-0 transition-colors duration-300 bg-card ${N?"border-green-500/20":"border-border"}`,children:t.jsxs("form",{onSubmit:_,className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:u,onChange:E=>c(E.target.value),disabled:!N||h,placeholder:N?h?"Demo session ended":"Type a message...":"Select an industry first...",className:`flex-1 bg-background border rounded-xl py-2.5 px-4 text-sm placeholder:text-muted-foreground focus:outline-none disabled:opacity-50 transition-all
                    ${N&&!h?"border-green-400/50 focus:ring-2 focus:ring-green-500/30 focus:border-green-500":"border-input focus:ring-2 focus:ring-[var(--brand-primary)]/30"}`}),t.jsx("button",{type:"submit",disabled:!u.trim()||!N||h,className:`p-2.5 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0
                    ${N&&!h?"bg-green-500 hover:bg-green-600":"bg-[var(--brand-primary)] hover:opacity-90"}`,children:t.jsx(Ai,{className:"w-4 h-4"})})]})})]})]}),h&&t.jsx("div",{className:"absolute inset-0 bg-background/85 backdrop-blur-sm flex items-center justify-center p-6 z-20 animate-in fade-in duration-200",children:t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-7 max-w-sm w-full text-center shadow-2xl",children:[t.jsx("div",{className:"w-14 h-14 bg-[var(--brand-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-5",children:t.jsx(Bn,{className:"w-7 h-7 text-[var(--brand-primary)]"})}),t.jsx("h3",{className:"text-xl font-bold mb-2 text-foreground",children:"Demo Complete!"}),t.jsx("p",{className:"text-muted-foreground text-sm mb-6 leading-relaxed",children:"You've used all 10 messages. Want to see a full personalised demo for your business?"}),t.jsxs("div",{className:"space-y-2.5",children:[t.jsxs("a",{href:"https://wa.me/6282189885080?text=Hello%2C%20I%20would%20like%20to%20try%20the%20ResponPintar%20AI%20Chatbot",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-full py-2.5 px-4 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#20bd5a] transition-colors gap-2",children:[t.jsx(Fn,{className:"w-4 h-4"}),"Chat with our Team"]}),t.jsx(ae,{to:"/demo",onClick:n,className:"flex items-center justify-center w-full py-2.5 px-4 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors",children:"Book a Demo"}),t.jsx("button",{onClick:n,className:"w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1",children:"Close"})]})]})})]})]})}function uo(){return t.jsxs("main",{children:[t.jsx(Xs,{}),t.jsx(ht,{animation:"fade-up",delay:100,children:t.jsx(io,{})}),t.jsx(ht,{animation:"fade-up",delay:1e3,children:t.jsx(eo,{})}),t.jsx(ht,{animation:"fade-up",delay:150,children:t.jsx(no,{})}),t.jsx(ht,{animation:"fade-up",delay:100,children:t.jsx(ro,{})}),t.jsx(co,{})]})}function mo(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(_n,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Privacy Policy"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Privacy"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Policy"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Last updated: March 15, 2025"})]}),t.jsxs("div",{className:"space-y-12",children:[t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"1. Information We Collect"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We collect information that you provide directly to us, including:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"1.1. Information You Provide:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Account information (name, email, phone number)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Payment information (processed through secure payment gateways)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Content you upload or send through the service"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"1.2. Information We Collect Automatically:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Service usage and interaction data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Device and browser information"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Cookies and similar tracking technologies"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Location data (if you grant permission)"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Pi,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"2. Use of Information"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"The information we collect is used to:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"2.1. Primary Purposes:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Provide and improve our services"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Personalize user experience"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Send important information about the service"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Respond to your inquiries and requests"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"2.2. Secondary Purposes:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Product analysis and development"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Security and fraud prevention"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Compliance with legal obligations"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Sending marketing communications (with consent)"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Ti,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"3. Data Protection"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We implement strict security measures in accordance with industry standards to protect your data:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.1. Technical Security:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"End-to-end encryption for all sensitive data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Firewall and intrusion detection systems"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"24/7 security monitoring"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Regular encrypted data backups"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.2. Organizational Security:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Restricted access based on need-to-know principle"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Regular security training for employees"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Periodic security audits"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Security incident response procedures"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Xt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"4. Data Sharing"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We are committed to never selling or renting your personal data. Data is only shared in the following situations:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.1. Permitted Data Sharing:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"With your explicit consent"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"To comply with legal obligations"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"With service providers who assist operations (under confidentiality agreements)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"In the event of mergers, acquisitions, or asset sales (with notice)"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.2. Protections in Data Sharing:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Data processing agreements with third parties"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Security evaluation of business partners"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Restrictions on data usage"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to stop data sharing"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(_n,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"5. User Rights"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"In accordance with applicable data protection regulations, you have the following rights:"})]})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.1. Fundamental Rights:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to access your personal data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to request correction of inaccurate data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:'Right to request data deletion ("right to be forgotten")'})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to restrict data processing"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.2. Additional Rights:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to object to data processing"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to data portability"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to withdraw consent"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Right to file a complaint with a supervisory authority"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"6. Policy Changes"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"We may update this privacy policy from time to time to reflect changes in our practices or legal obligations. We will notify you of material changes through:"})]})]}),t.jsxs("div",{className:"ml-14",children:[t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Email to your registered address"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Notification on our platform"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Update of the policy effective date"})]})]}),t.jsx("p",{className:"text-muted-foreground mt-4",children:"Continued use of our services after such changes constitutes your acceptance of the updated policy."})]})]}),t.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8",children:[t.jsx("h2",{className:"text-2xl mb-6 text-center",children:"Contact Us"}),t.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"If you have questions about this privacy policy, please contact us:"}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(It,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Email"}),t.jsx("p",{className:"text-sm text-center",children:"support@responpintar.com"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(At,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Phone"}),t.jsx("p",{className:"text-sm",children:"+62 821-8988-5080"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(pn,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Address"}),t.jsx("p",{className:"text-sm text-center",children:"Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160"})]})]})]})]})]})})}function po(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(Ri,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Terms and Conditions"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Terms and"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Conditions"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Last updated: March 15, 2025"})]}),t.jsxs("div",{className:"space-y-12",children:[t.jsx("section",{className:"bg-card border border-border rounded-2xl p-8",children:t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"1. General Terms"}),t.jsx("p",{className:"text-muted-foreground leading-relaxed",children:'By using the ResponPintar service ("Service"), you agree to be bound by these terms and conditions ("Terms"). These Terms constitute a legally binding agreement between you and PT ResponPintar Indonesia ("We"). If you do not agree with these Terms, please do not use our Service.'})]})]})}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-2",children:"2. Definitions"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"In these Terms, the following terms have the meanings as defined:"})]})]}),t.jsxs("div",{className:"ml-14 space-y-3",children:[t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Service"'})," refers to the ResponPintar platform, including all features, functionality, and user interfaces"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"User"'})," is an individual or entity that has registered for and uses the Service"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Content"'})," includes all materials, data, text, images, video, audio, or other content created, uploaded, or transmitted through the Service"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Customer Data"'})," is information processed or stored by the User through the Service"]}),t.jsxs("div",{className:"text-muted-foreground",children:[t.jsx("span",{className:"text-foreground",children:'"Intellectual Property Rights"'})," includes copyrights, patents, trademarks, trade secrets, and other proprietary rights"]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(rt,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"3. Use of Service"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.1. Usage Requirements:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You must be at least 18 years old or the legal age in your jurisdiction"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Provide accurate and complete information during registration"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Maintain the confidentiality of your account credentials"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Be responsible for all activities under your account"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"3.2. Prohibited Activities:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Using the Service for illegal or unauthorized purposes"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Infringing on the intellectual property rights of others"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Uploading harmful or unlawful content"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Attempting to gain unauthorized access to the Service"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Ei,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"4. Subscription and Payment"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.1. Fees and Payment:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Payment is made in advance for the subscription period"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"All fees are in Rupiah and exclude taxes"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Payments are processed through official payment gateways"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You are responsible for all applicable fees and taxes"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"4.2. Changes and Cancellation:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We may change prices with 30 days' notice"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Cancellation can be done before the next billing period"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Refunds are subject to the applicable refund policy"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"No refunds for the current active period"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Gr,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"5. Intellectual Property Rights"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.1. Ownership:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"All Intellectual Property Rights in the Service belong to ResponPintar"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Users retain rights to their Customer Data"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Uploaded content remains the property of the uploader"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"5.2. License:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We grant a limited, non-exclusive license to use the Service"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You grant us a license to process Customer Data as required by the Service"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"The license terminates when use of the Service is discontinued"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Mi,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"6. Limitation of Liability"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"6.1. General Limitations:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:'The Service is provided "as is" without any warranties'})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We are not liable for indirect damages"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Our total liability is limited to the amount you have paid"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"6.2. Exclusions:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Data loss due to User negligence"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Service disruptions beyond our control"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Damage caused by User devices or connectivity"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Losses resulting from violation of these Terms"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Di,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"7. Termination of Service"})})]}),t.jsxs("div",{className:"space-y-4 ml-14",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"7.1. Termination by Us:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Violation of terms of use"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Failure to pay service fees"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Engaging in suspicious or harmful activities"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Upon request from competent authorities"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-2",children:"7.2. Termination by User:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"May terminate the service at any time"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Must provide written notice"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Responsible for backing up Customer Data"})]})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(zi,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"8. Changes to Terms"})})]}),t.jsxs("div",{className:"ml-14",children:[t.jsx("h3",{className:"text-lg mb-2",children:"8.1. Change Process:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"We reserve the right to modify these Terms at any time"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Material changes will be notified 30 days in advance"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Notification via email or platform"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Continued use constitutes acceptance of the changes"})]})]})]})]}),t.jsxs("section",{className:"bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Oi,{className:"w-5 h-5 text-white"})}),t.jsx("div",{children:t.jsx("h2",{className:"text-2xl mb-2",children:"9. Governing Law"})})]}),t.jsxs("div",{className:"ml-14",children:[t.jsx("h3",{className:"text-lg mb-2",children:"9.1. Jurisdiction:"}),t.jsxs("ul",{className:"space-y-2 text-muted-foreground",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"These Terms are governed by the laws of the Republic of Indonesia"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"Any dispute shall first be resolved through mediation"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"If mediation fails, disputes shall be resolved at the South Jakarta District Court"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-[var(--brand-primary)] mt-1",children:"•"}),t.jsx("span",{children:"You agree to submit to the exclusive jurisdiction of said court"})]})]})]})]}),t.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl p-8",children:[t.jsx("h2",{className:"text-2xl mb-6 text-center",children:"10. Contact"}),t.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"For questions or clarification about these Terms, please contact us at:"}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(It,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Email"}),t.jsx("p",{className:"text-sm text-center",children:"support@responpintar.com"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(At,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Phone"}),t.jsx("p",{className:"text-sm",children:"+62 821-8988-5080"})]}),t.jsxs("div",{className:"flex flex-col items-center gap-2 bg-card rounded-xl p-4 border border-border",children:[t.jsx(pn,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Address"}),t.jsx("p",{className:"text-sm text-center",children:"Plaza Aminta Jl. TB Simatupang Jakarta Selatan, 12160"})]})]})]})]})]})})}function ho(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(Xt,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"About Us"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Digital Transformation for"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),t.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"ResponPintar is a technology company focused on AI solutions for various industries, helping businesses solve customer service challenges with innovative and easy-to-use technology."})]}),t.jsx("section",{className:"mb-20",children:t.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border",children:[t.jsx(Li,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Our Story"})]}),t.jsxs("h2",{className:"text-3xl sm:text-4xl",children:["Building the Future of"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),t.jsxs("div",{className:"space-y-4 text-muted-foreground leading-relaxed",children:[t.jsx("p",{children:"ResponPintar was founded with the mission of empowering businesses across Southeast Asia with AI technology accessible to everyone. We understand that every industry has unique needs when it comes to serving their customers."}),t.jsx("p",{children:"From e-commerce to healthcare, from education to banking — we provide solutions that can be customized to meet the specific needs of every business. Our team consists of AI experts, experienced developers, and customer experience specialists dedicated to creating technology that truly makes a difference."}),t.jsx("p",{children:"We don't just provide a platform — we become a partner in your digital transformation journey. With 24/7 support and continuous innovation, we ensure your business stays one step ahead."})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl"}),t.jsx("div",{className:"relative bg-card border border-border rounded-2xl p-8 space-y-6",children:t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"10K+"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Users"})]}),t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"50M+"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Messages Processed"})]}),t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"98%"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer Satisfaction"})]}),t.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[t.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"24/7"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Support Available"})]})]})})]})]})}),t.jsx("section",{className:"mb-20",children:t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[t.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:t.jsx(Ur,{className:"w-7 h-7 text-white"})}),t.jsx("h2",{className:"text-2xl mb-4",children:"Our Vision"}),t.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To be the leader in digital transformation of customer service in Southeast Asia through sustainable and impactful AI innovation."})]}),t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[t.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:t.jsx(Bi,{className:"w-7 h-7 text-white"})}),t.jsx("h2",{className:"text-2xl mb-4",children:"Our Mission"}),t.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To empower every business with AI technology that is accessible, efficient, and affordable to improve the quality of their customer service."})]})]})}),t.jsxs("section",{className:"mb-20",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Our"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Values"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"The principles that guide every decision and innovation we make"})]}),t.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(bt,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Innovation"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Continuously innovating to deliver the best solutions"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(Xt,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Customer First"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer satisfaction is our top priority"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(Gr,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Excellence"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Committed to quality and excellence"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[t.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:t.jsx(Fi,{className:"w-6 h-6 text-white"})}),t.jsx("h3",{className:"text-lg mb-2",children:"Accessibility"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Technology accessible to everyone"})]})]})]}),t.jsxs("section",{className:"mb-20",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Industries We"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Serve"})]}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Custom solutions for various industry sectors"})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"E-Commerce",desc:"Quick responses for product inquiries and orders",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"6",y:"14",width:"28",height:"20",rx:"3",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("path",{d:"M14 14V10a6 6 0 0 1 12 0v4",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"20",cy:"25",r:"3",fill:"var(--brand-primary)",fillOpacity:"0.5"})]})},{title:"Healthcare",desc:"24/7 consultation and health information services",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"4",y:"4",width:"32",height:"32",rx:"8",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("path",{d:"M20 12v16M12 20h16",stroke:"var(--brand-primary)",strokeWidth:"3",strokeLinecap:"round"})]})},{title:"Education",desc:"Learning support and student administration",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("path",{d:"M20 8L4 18l16 10 16-10L20 8z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("path",{d:"M10 23v7l10 5 10-5v-7",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.05"}),t.jsx("line",{x1:"36",y1:"18",x2:"36",y2:"32",stroke:"var(--brand-primary)",strokeWidth:"2"})]})},{title:"Banking",desc:"Customer service and financial product information",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("path",{d:"M20 4L4 14h32L20 4z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("rect",{x:"4",y:"32",width:"32",height:"4",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.3"}),t.jsx("rect",{x:"9",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"}),t.jsx("rect",{x:"27",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"})]})},{title:"Hospitality",desc:"Better booking and guest service experience",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"6",y:"12",width:"28",height:"22",rx:"3",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("rect",{x:"16",y:"6",width:"8",height:"8",rx:"2",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),t.jsx("path",{d:"M6 20h28",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.4"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"6",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2"}),t.jsx("rect",{x:"22",y:"24",width:"6",height:"6",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2"})]})},{title:"Technology",desc:"Technical support and user onboarding",svg:t.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[t.jsx("rect",{x:"10",y:"4",width:"20",height:"32",rx:"4",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),t.jsx("line",{x1:"10",y1:"10",x2:"30",y2:"10",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.3"}),t.jsx("line",{x1:"10",y1:"30",x2:"30",y2:"30",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.3"}),t.jsx("circle",{cx:"20",cy:"33",r:"1.5",fill:"var(--brand-primary)",fillOpacity:"0.5"}),t.jsx("path",{d:"M16 18l3 3 5-6",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}].map((e,n)=>t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all",children:[t.jsx("div",{className:"mb-4",children:e.svg}),t.jsx("h3",{className:"text-lg mb-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:e.desc})]},n))})]}),t.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl p-12 text-center text-white",children:[t.jsx(hn,{className:"w-12 h-12 mx-auto mb-6"}),t.jsx("h2",{className:"text-3xl sm:text-4xl mb-4",children:"Ready to Transform Your Customer Service?"}),t.jsx("p",{className:"text-lg mb-8 opacity-90 max-w-2xl mx-auto",children:"Join thousands of businesses that have experienced the benefits of AI technology from ResponPintar"}),t.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[t.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:t.jsx("a",{href:"https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Contact Sales"})}),t.jsx("a",{href:"/demo",className:"px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all inline-block",children:"View Demo"})]})]})]})})}const le=[{slug:"bagaimana-ai-mengubah-landscape-customer-service-2025",title:"Bagaimana AI Mengubah Landscape Customer Service di 2025",excerpt:"Perkembangan AI telah membawa perubahan signifikan dalam cara bisnis berinteraksi dengan pelanggan mereka. Simak tren terbaru yang perlu Anda ketahui.",category:"Teknologi",date:"15 Mar 2025",image:"/images/blog/ai-customer-service.jpg",readTime:"8 menit",author:{name:"Dr. Sarah Wijaya",avatar:"SW"},content:`
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
    `}],go="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Nt(e){const[n,r]=U.useState(!1),a=()=>{r(!0)},{src:i,alt:s,style:o,className:l,...u}=e;return n?t.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${l??""}`,style:o,children:t.jsx("div",{className:"flex items-center justify-center w-full h-full",children:t.jsx("img",{src:go,alt:"Error loading image",...u,"data-original-url":i})})}):t.jsx("img",{src:i,alt:s,className:l,style:o,...u,onError:a})}function fo(){return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(_i,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm",children:"Blog & Insights"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Articles & Insights on"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),t.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"Learn the latest strategies, tips, and trends in customer service and AI to help your business grow"})]}),t.jsx("div",{className:"mb-16",children:t.jsx(ae,{to:`/blog/${le[0].slug}`,className:"group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 transition-all",children:t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"relative h-64 lg:h-auto",children:[t.jsx(Nt,{src:le[0].image,alt:le[0].title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute top-4 left-4",children:t.jsx("span",{className:"px-3 py-1 bg-[var(--brand-primary)] text-white text-xs rounded-full",children:"Featured"})})]}),t.jsxs("div",{className:"p-8 flex flex-col justify-center",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-muted-foreground",children:[t.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:le[0].category}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(vt,{className:"w-4 h-4"}),t.jsx("span",{children:le[0].date})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(Zt,{className:"w-4 h-4"}),t.jsx("span",{children:le[0].readTime})]})]}),t.jsx("h2",{className:"text-3xl mb-4 group-hover:text-[var(--brand-primary)] transition-colors",children:le[0].title}),t.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:le[0].excerpt}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx("span",{className:"text-white text-sm",children:le[0].author.avatar})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm",children:le[0].author.name}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Author"})]})]}),t.jsxs("div",{className:"flex items-center gap-2 text-[var(--brand-primary)] group-hover:gap-3 transition-all",children:[t.jsx("span",{className:"text-sm",children:"Read More"}),t.jsx(ot,{className:"w-4 h-4"})]})]})]})]})})}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:le.slice(1).map(e=>t.jsxs(ae,{to:`/blog/${e.slug}`,className:"group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all",children:[t.jsx("div",{className:"relative h-48 overflow-hidden",children:t.jsx(Nt,{src:e.image,alt:e.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3 text-xs text-muted-foreground",children:[t.jsx("span",{className:"px-2 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:e.category}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(vt,{className:"w-3 h-3"}),t.jsx("span",{children:e.date})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(Zt,{className:"w-3 h-3"}),t.jsx("span",{children:e.readTime})]})]}),t.jsx("h3",{className:"text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:e.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:e.excerpt}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx("span",{className:"text-white text-xs",children:e.author.avatar})}),t.jsx("span",{className:"text-xs",children:e.author.name})]}),t.jsx(ot,{className:"w-4 h-4 text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform"})]})]})]},e.slug))}),t.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl",children:[t.jsx("h2",{className:"text-2xl mb-6 text-center",children:"Categories"}),t.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:Array.from(new Set(le.map(e=>e.category))).map(e=>t.jsx("button",{className:"px-4 py-2 bg-card border border-border rounded-lg hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all",children:e},e))})]})]})})}function xo(e,n){const r={};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const bo=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yo=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,vo={};function rr(e,n){return(vo.jsx?yo:bo).test(e)}const ko=/[ \t\n\f\r]/g;function jo(e){return typeof e=="object"?e.type==="text"?ar(e.value):!1:ar(e)}function ar(e){return e.replace(ko,"")===""}class ct{constructor(n,r,a){this.normal=r,this.property=n,a&&(this.space=a)}}ct.prototype.normal={};ct.prototype.property={};ct.prototype.space=void 0;function ha(e,n){const r={},a={};for(const i of e)Object.assign(r,i.property),Object.assign(a,i.normal);return new ct(r,a,n)}function nn(e){return e.toLowerCase()}class ue{constructor(n,r){this.attribute=r,this.property=n}}ue.prototype.attribute="";ue.prototype.booleanish=!1;ue.prototype.boolean=!1;ue.prototype.commaOrSpaceSeparated=!1;ue.prototype.commaSeparated=!1;ue.prototype.defined=!1;ue.prototype.mustUseProperty=!1;ue.prototype.number=!1;ue.prototype.overloadedBoolean=!1;ue.prototype.property="";ue.prototype.spaceSeparated=!1;ue.prototype.space=void 0;let wo=0;const F=Oe(),ne=Oe(),rn=Oe(),v=Oe(),J=Oe(),Ue=Oe(),pe=Oe();function Oe(){return 2**++wo}const an=Object.freeze(Object.defineProperty({__proto__:null,boolean:F,booleanish:ne,commaOrSpaceSeparated:pe,commaSeparated:Ue,number:v,overloadedBoolean:rn,spaceSeparated:J},Symbol.toStringTag,{value:"Module"})),Bt=Object.keys(an);class xn extends ue{constructor(n,r,a,i){let s=-1;if(super(n,r),ir(this,"space",i),typeof a=="number")for(;++s<Bt.length;){const o=Bt[s];ir(this,Bt[s],(a&an[o])===an[o])}}}xn.prototype.defined=!0;function ir(e,n,r){r&&(e[n]=r)}function Ge(e){const n={},r={};for(const[a,i]of Object.entries(e.properties)){const s=new xn(a,e.transform(e.attributes||{},a),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(s.mustUseProperty=!0),n[a]=s,r[nn(a)]=a,r[nn(s.attribute)]=a}return new ct(n,r,e.space)}const ga=Ge({properties:{ariaActiveDescendant:null,ariaAtomic:ne,ariaAutoComplete:null,ariaBusy:ne,ariaChecked:ne,ariaColCount:v,ariaColIndex:v,ariaColSpan:v,ariaControls:J,ariaCurrent:null,ariaDescribedBy:J,ariaDetails:null,ariaDisabled:ne,ariaDropEffect:J,ariaErrorMessage:null,ariaExpanded:ne,ariaFlowTo:J,ariaGrabbed:ne,ariaHasPopup:null,ariaHidden:ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:J,ariaLevel:v,ariaLive:null,ariaModal:ne,ariaMultiLine:ne,ariaMultiSelectable:ne,ariaOrientation:null,ariaOwns:J,ariaPlaceholder:null,ariaPosInSet:v,ariaPressed:ne,ariaReadOnly:ne,ariaRelevant:null,ariaRequired:ne,ariaRoleDescription:J,ariaRowCount:v,ariaRowIndex:v,ariaRowSpan:v,ariaSelected:ne,ariaSetSize:v,ariaSort:null,ariaValueMax:v,ariaValueMin:v,ariaValueNow:v,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function fa(e,n){return n in e?e[n]:n}function xa(e,n){return fa(e,n.toLowerCase())}const No=Ge({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ue,acceptCharset:J,accessKey:J,action:null,allow:null,allowFullScreen:F,allowPaymentRequest:F,allowUserMedia:F,alt:null,as:null,async:F,autoCapitalize:null,autoComplete:J,autoFocus:F,autoPlay:F,blocking:J,capture:null,charSet:null,checked:F,cite:null,className:J,cols:v,colSpan:null,content:null,contentEditable:ne,controls:F,controlsList:J,coords:v|Ue,crossOrigin:null,data:null,dateTime:null,decoding:null,default:F,defer:F,dir:null,dirName:null,disabled:F,download:rn,draggable:ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:F,formTarget:null,headers:J,height:v,hidden:rn,high:v,href:null,hrefLang:null,htmlFor:J,httpEquiv:J,id:null,imageSizes:null,imageSrcSet:null,inert:F,inputMode:null,integrity:null,is:null,isMap:F,itemId:null,itemProp:J,itemRef:J,itemScope:F,itemType:J,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:F,low:v,manifest:null,max:null,maxLength:v,media:null,method:null,min:null,minLength:v,multiple:F,muted:F,name:null,nonce:null,noModule:F,noValidate:F,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:F,optimum:v,pattern:null,ping:J,placeholder:null,playsInline:F,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:F,referrerPolicy:null,rel:J,required:F,reversed:F,rows:v,rowSpan:v,sandbox:J,scope:null,scoped:F,seamless:F,selected:F,shadowRootClonable:F,shadowRootDelegatesFocus:F,shadowRootMode:null,shape:null,size:v,sizes:null,slot:null,span:v,spellCheck:ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:v,step:null,style:null,tabIndex:v,target:null,title:null,translate:null,type:null,typeMustMatch:F,useMap:null,value:ne,width:v,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:J,axis:null,background:null,bgColor:null,border:v,borderColor:null,bottomMargin:v,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:F,declare:F,event:null,face:null,frame:null,frameBorder:null,hSpace:v,leftMargin:v,link:null,longDesc:null,lowSrc:null,marginHeight:v,marginWidth:v,noResize:F,noHref:F,noShade:F,noWrap:F,object:null,profile:null,prompt:null,rev:null,rightMargin:v,rules:null,scheme:null,scrolling:ne,standby:null,summary:null,text:null,topMargin:v,valueType:null,version:null,vAlign:null,vLink:null,vSpace:v,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:F,disableRemotePlayback:F,prefix:null,property:null,results:v,security:null,unselectable:null},space:"html",transform:xa}),Co=Ge({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:pe,accentHeight:v,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:v,amplitude:v,arabicForm:null,ascent:v,attributeName:null,attributeType:null,azimuth:v,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:v,by:null,calcMode:null,capHeight:v,className:J,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:v,diffuseConstant:v,direction:null,display:null,dur:null,divisor:v,dominantBaseline:null,download:F,dx:null,dy:null,edgeMode:null,editable:null,elevation:v,enableBackground:null,end:null,event:null,exponent:v,externalResourcesRequired:null,fill:null,fillOpacity:v,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ue,g2:Ue,glyphName:Ue,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:v,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:v,horizOriginX:v,horizOriginY:v,id:null,ideographic:v,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:v,k:v,k1:v,k2:v,k3:v,k4:v,kernelMatrix:pe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:v,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:v,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:v,overlineThickness:v,paintOrder:null,panose1:null,path:null,pathLength:v,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:J,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:v,pointsAtY:v,pointsAtZ:v,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:pe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:pe,rev:pe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:pe,requiredFeatures:pe,requiredFonts:pe,requiredFormats:pe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:v,specularExponent:v,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:v,strikethroughThickness:v,string:null,stroke:null,strokeDashArray:pe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:v,strokeOpacity:v,strokeWidth:null,style:null,surfaceScale:v,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:pe,tabIndex:v,tableValues:null,target:null,targetX:v,targetY:v,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:pe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:v,underlineThickness:v,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:v,values:null,vAlphabetic:v,vMathematical:v,vectorEffect:null,vHanging:v,vIdeographic:v,version:null,vertAdvY:v,vertOriginX:v,vertOriginY:v,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:v,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:fa}),ba=Ge({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),ya=Ge({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:xa}),va=Ge({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),So={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Io=/[A-Z]/g,sr=/-[a-z]/g,Ao=/^data[-\w.:]+$/i;function Po(e,n){const r=nn(n);let a=n,i=ue;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&Ao.test(n)){if(n.charAt(4)==="-"){const s=n.slice(5).replace(sr,Ro);a="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=n.slice(4);if(!sr.test(s)){let o=s.replace(Io,To);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=xn}return new i(a,n)}function To(e){return"-"+e.toLowerCase()}function Ro(e){return e.charAt(1).toUpperCase()}const Eo=ha([ga,No,ba,ya,va],"html"),bn=ha([ga,Co,ba,ya,va],"svg");function Mo(e){return e.join(" ").trim()}var _e={},Ft,or;function Do(){if(or)return Ft;or=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,c="/",d="*",m="",h="comment",p="declaration";function k(w,y){if(typeof w!="string")throw new TypeError("First argument must be a string");if(!w)return[];y=y||{};var z=1,I=1;function V(D){var S=D.match(n);S&&(z+=S.length);var H=D.lastIndexOf(u);I=~H?D.length-H:I+D.length}function q(){var D={line:z,column:I};return function(S){return S.position=new b(D),B(),S}}function b(D){this.start=D,this.end={line:z,column:I},this.source=y.source}b.prototype.content=w;function _(D){var S=new Error(y.source+":"+z+":"+I+": "+D);if(S.reason=D,S.filename=y.source,S.line=z,S.column=I,S.source=w,!y.silent)throw S}function N(D){var S=D.exec(w);if(S){var H=S[0];return V(H),w=w.slice(H.length),S}}function B(){N(r)}function E(D){var S;for(D=D||[];S=P();)S!==!1&&D.push(S);return D}function P(){var D=q();if(!(c!=w.charAt(0)||d!=w.charAt(1))){for(var S=2;m!=w.charAt(S)&&(d!=w.charAt(S)||c!=w.charAt(S+1));)++S;if(S+=2,m===w.charAt(S-1))return _("End of comment missing");var H=w.slice(2,S-2);return I+=2,V(H),w=w.slice(S),I+=2,D({type:h,comment:H})}}function A(){var D=q(),S=N(a);if(S){if(P(),!N(i))return _("property missing ':'");var H=N(s),Q=D({type:p,property:j(S[0].replace(e,m)),value:H?j(H[0].replace(e,m)):m});return N(o),Q}}function G(){var D=[];E(D);for(var S;S=A();)S!==!1&&(D.push(S),E(D));return D}return B(),G()}function j(w){return w?w.replace(l,m):m}return Ft=k,Ft}var lr;function zo(){if(lr)return _e;lr=1;var e=_e&&_e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=r;const n=e(Do());function r(a,i){let s=null;if(!a||typeof a!="string")return s;const o=(0,n.default)(a),l=typeof i=="function";return o.forEach(u=>{if(u.type!=="declaration")return;const{property:c,value:d}=u;l?i(c,d,u):d&&(s=s||{},s[c]=d)}),s}return _e}var Xe={},cr;function Oo(){if(cr)return Xe;cr=1,Object.defineProperty(Xe,"__esModule",{value:!0}),Xe.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,s=function(c){return!c||r.test(c)||e.test(c)},o=function(c,d){return d.toUpperCase()},l=function(c,d){return"".concat(d,"-")},u=function(c,d){return d===void 0&&(d={}),s(c)?c:(c=c.toLowerCase(),d.reactCompat?c=c.replace(i,l):c=c.replace(a,l),c.replace(n,o))};return Xe.camelCase=u,Xe}var Ze,ur;function Lo(){if(ur)return Ze;ur=1;var e=Ze&&Ze.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},n=e(zo()),r=Oo();function a(i,s){var o={};return!i||typeof i!="string"||(0,n.default)(i,function(l,u){l&&u&&(o[(0,r.camelCase)(l,s)]=u)}),o}return a.default=a,Ze=a,Ze}var Bo=Lo();const Fo=Wr(Bo),ka=ja("end"),yn=ja("start");function ja(e){return n;function n(r){const a=r&&r.position&&r.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function _o(e){const n=yn(e),r=ka(e);if(n&&r)return{start:n,end:r}}function at(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?dr(e.position):"start"in e||"end"in e?dr(e):"line"in e||"column"in e?sn(e):""}function sn(e){return mr(e&&e.line)+":"+mr(e&&e.column)}function dr(e){return sn(e&&e.start)+"-"+sn(e&&e.end)}function mr(e){return e&&typeof e=="number"?e:1}class ie extends Error{constructor(n,r,a){super(),typeof r=="string"&&(a=r,r=void 0);let i="",s={},o=!1;if(r&&("line"in r&&"column"in r?s={place:r}:"start"in r&&"end"in r?s={place:r}:"type"in r?s={ancestors:[r],place:r.position}:s={...r}),typeof n=="string"?i=n:!s.cause&&n&&(o=!0,i=n.message,s.cause=n),!s.ruleId&&!s.source&&typeof a=="string"){const u=a.indexOf(":");u===-1?s.ruleId=a:(s.source=a.slice(0,u),s.ruleId=a.slice(u+1))}if(!s.place&&s.ancestors&&s.ancestors){const u=s.ancestors[s.ancestors.length-1];u&&(s.place=u.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=at(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ie.prototype.file="";ie.prototype.name="";ie.prototype.reason="";ie.prototype.message="";ie.prototype.stack="";ie.prototype.column=void 0;ie.prototype.line=void 0;ie.prototype.ancestors=void 0;ie.prototype.cause=void 0;ie.prototype.fatal=void 0;ie.prototype.place=void 0;ie.prototype.ruleId=void 0;ie.prototype.source=void 0;const vn={}.hasOwnProperty,Wo=new Map,Uo=/[A-Z]/g,Ho=new Set(["table","tbody","thead","tfoot","tr"]),Vo=new Set(["td","th"]),wa="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function qo(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=n.filePath||void 0;let a;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=Zo(r,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=Xo(r,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:a,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?bn:Eo,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},s=Na(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Na(e,n,r){if(n.type==="element")return Go(e,n,r);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return $o(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return Qo(e,n,r);if(n.type==="mdxjsEsm")return Ko(e,n);if(n.type==="root")return Yo(e,n,r);if(n.type==="text")return Jo(e,n)}function Go(e,n,r){const a=e.schema;let i=a;n.tagName.toLowerCase()==="svg"&&a.space==="html"&&(i=bn,e.schema=i),e.ancestors.push(n);const s=Sa(e,n.tagName,!1),o=el(e,n);let l=jn(e,n);return Ho.has(n.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!jo(u):!0})),Ca(e,o,s,n),kn(o,l),e.ancestors.pop(),e.schema=a,e.create(n,s,o,r)}function $o(e,n){if(n.data&&n.data.estree&&e.evaluater){const a=n.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}lt(e,n.position)}function Ko(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);lt(e,n.position)}function Qo(e,n,r){const a=e.schema;let i=a;n.name==="svg"&&a.space==="html"&&(i=bn,e.schema=i),e.ancestors.push(n);const s=n.name===null?e.Fragment:Sa(e,n.name,!0),o=tl(e,n),l=jn(e,n);return Ca(e,o,s,n),kn(o,l),e.ancestors.pop(),e.schema=a,e.create(n,s,o,r)}function Yo(e,n,r){const a={};return kn(a,jn(e,n)),e.create(n,e.Fragment,a,r)}function Jo(e,n){return n.value}function Ca(e,n,r,a){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(n.node=a)}function kn(e,n){if(n.length>0){const r=n.length>1?n:n[0];r&&(e.children=r)}}function Xo(e,n,r){return a;function a(i,s,o,l){const c=Array.isArray(o.children)?r:n;return l?c(s,o,l):c(s,o)}}function Zo(e,n){return r;function r(a,i,s,o){const l=Array.isArray(s.children),u=yn(a);return n(i,s,o,l,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function el(e,n){const r={};let a,i;for(i in n.properties)if(i!=="children"&&vn.call(n.properties,i)){const s=nl(e,i,n.properties[i]);if(s){const[o,l]=s;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Vo.has(n.tagName)?a=l:r[o]=l}}if(a){const s=r.style||(r.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return r}function tl(e,n){const r={};for(const a of n.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const s=a.data.estree.body[0];s.type;const o=s.expression;o.type;const l=o.properties[0];l.type,Object.assign(r,e.evaluater.evaluateExpression(l.argument))}else lt(e,n.position);else{const i=a.name;let s;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const l=a.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else lt(e,n.position);else s=a.value===null?!0:a.value;r[i]=s}return r}function jn(e,n){const r=[];let a=-1;const i=e.passKeys?new Map:Wo;for(;++a<n.children.length;){const s=n.children[a];let o;if(e.passKeys){const u=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(u){const c=i.get(u)||0;o=u+"-"+c,i.set(u,c+1)}}const l=Na(e,s,o);l!==void 0&&r.push(l)}return r}function nl(e,n,r){const a=Po(e.schema,n);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=a.commaSeparated?xo(r):Mo(r)),a.property==="style"){let i=typeof r=="object"?r:rl(e,String(r));return e.stylePropertyNameCase==="css"&&(i=al(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&a.space?So[a.property]||a.property:a.attribute,r]}}function rl(e,n){try{return Fo(n,{reactCompat:!0})}catch(r){if(e.ignoreInvalidStyle)return{};const a=r,i=new ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=wa+"#cannot-parse-style-attribute",i}}function Sa(e,n,r){let a;if(!r)a={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let s=-1,o;for(;++s<i.length;){const l=rr(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}a=o}else a=rr(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(a.type==="Literal"){const i=a.value;return vn.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(a);lt(e)}function lt(e,n){const r=new ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=wa+"#cannot-handle-mdx-estrees-without-createevaluater",r}function al(e){const n={};let r;for(r in e)vn.call(e,r)&&(n[il(r)]=e[r]);return n}function il(e){let n=e.replace(Uo,sl);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function sl(e){return"-"+e.toLowerCase()}const _t={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ol={};function ll(e,n){const r=ol,a=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,i=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return Ia(e,a,i)}function Ia(e,n,r){if(cl(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return pr(e.children,n,r)}return Array.isArray(e)?pr(e,n,r):""}function pr(e,n,r){const a=[];let i=-1;for(;++i<e.length;)a[i]=Ia(e[i],n,r);return a.join("")}function cl(e){return!!(e&&typeof e=="object")}const hr=document.createElement("i");function wn(e){const n="&"+e+";";hr.innerHTML=n;const r=hr.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===n?!1:r}function Ne(e,n,r,a){const i=e.length;let s=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,r=r>0?r:0,a.length<1e4)o=Array.from(a),o.unshift(n,r),e.splice(...o);else for(r&&e.splice(n,r);s<a.length;)o=a.slice(s,s+1e4),o.unshift(n,0),e.splice(...o),s+=1e4,n+=1e4}function xe(e,n){return e.length>0?(Ne(e,e.length,0,n),e):n}const gr={}.hasOwnProperty;function ul(e){const n={};let r=-1;for(;++r<e.length;)dl(n,e[r]);return n}function dl(e,n){let r;for(r in n){const i=(gr.call(e,r)?e[r]:void 0)||(e[r]={}),s=n[r];let o;if(s)for(o in s){gr.call(i,o)||(i[o]=[]);const l=s[o];ml(i[o],Array.isArray(l)?l:l?[l]:[])}}}function ml(e,n){let r=-1;const a=[];for(;++r<n.length;)(n[r].add==="after"?e:a).push(n[r]);Ne(e,0,0,a)}function Aa(e,n){const r=Number.parseInt(e,n);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function He(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const we=Me(/[A-Za-z]/),he=Me(/[\dA-Za-z]/),pl=Me(/[#-'*+\--9=?A-Z^-~]/);function on(e){return e!==null&&(e<32||e===127)}const ln=Me(/\d/),hl=Me(/[\dA-Fa-f]/),gl=Me(/[!-/:-@[-`{-~]/);function O(e){return e!==null&&e<-2}function ce(e){return e!==null&&(e<0||e===32)}function K(e){return e===-2||e===-1||e===32}const fl=Me(/\p{P}|\p{S}/u),xl=Me(/\s/);function Me(e){return n;function n(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function $e(e){const n=[];let r=-1,a=0,i=0;for(;++r<e.length;){const s=e.charCodeAt(r);let o="";if(s===37&&he(e.charCodeAt(r+1))&&he(e.charCodeAt(r+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(r+1);s<56320&&l>56319&&l<57344?(o=String.fromCharCode(s,l),i=1):o="�"}else o=String.fromCharCode(s);o&&(n.push(e.slice(a,r),encodeURIComponent(o)),a=r+i+1,o=""),i&&(r+=i,i=0)}return n.join("")+e.slice(a)}function X(e,n,r,a){const i=a?a-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(u){return K(u)?(e.enter(r),l(u)):n(u)}function l(u){return K(u)&&s++<i?(e.consume(u),l):(e.exit(r),n(u))}}const bl={tokenize:yl};function yl(e){const n=e.attempt(this.parser.constructs.contentInitial,a,i);let r;return n;function a(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),X(e,n,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const u=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=u),r=u,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return O(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),o)}}const vl={tokenize:kl},fr={tokenize:jl};function kl(e){const n=this,r=[];let a=0,i,s,o;return l;function l(I){if(a<r.length){const V=r[a];return n.containerState=V[1],e.attempt(V[0].continuation,u,c)(I)}return c(I)}function u(I){if(a++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&z();const V=n.events.length;let q=V,b;for(;q--;)if(n.events[q][0]==="exit"&&n.events[q][1].type==="chunkFlow"){b=n.events[q][1].end;break}y(a);let _=V;for(;_<n.events.length;)n.events[_][1].end={...b},_++;return Ne(n.events,q+1,0,n.events.slice(V)),n.events.length=_,c(I)}return l(I)}function c(I){if(a===r.length){if(!i)return h(I);if(i.currentConstruct&&i.currentConstruct.concrete)return k(I);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(fr,d,m)(I)}function d(I){return i&&z(),y(a),h(I)}function m(I){return n.parser.lazy[n.now().line]=a!==r.length,o=n.now().offset,k(I)}function h(I){return n.containerState={},e.attempt(fr,p,k)(I)}function p(I){return a++,r.push([n.currentConstruct,n.containerState]),h(I)}function k(I){if(I===null){i&&z(),y(0),e.consume(I);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),j(I)}function j(I){if(I===null){w(e.exit("chunkFlow"),!0),y(0),e.consume(I);return}return O(I)?(e.consume(I),w(e.exit("chunkFlow")),a=0,n.interrupt=void 0,l):(e.consume(I),j)}function w(I,V){const q=n.sliceStream(I);if(V&&q.push(null),I.previous=s,s&&(s.next=I),s=I,i.defineSkip(I.start),i.write(q),n.parser.lazy[I.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<o&&(!i.events[b][1].end||i.events[b][1].end.offset>o))return;const _=n.events.length;let N=_,B,E;for(;N--;)if(n.events[N][0]==="exit"&&n.events[N][1].type==="chunkFlow"){if(B){E=n.events[N][1].end;break}B=!0}for(y(a),b=_;b<n.events.length;)n.events[b][1].end={...E},b++;Ne(n.events,N+1,0,n.events.slice(_)),n.events.length=b}}function y(I){let V=r.length;for(;V-- >I;){const q=r[V];n.containerState=q[1],q[0].exit.call(n,e)}r.length=I}function z(){i.write([null]),s=void 0,i=void 0,n.containerState._closeFlow=void 0}}function jl(e,n,r){return X(e,e.attempt(this.parser.constructs.document,n,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function xr(e){if(e===null||ce(e)||xl(e))return 1;if(fl(e))return 2}function Nn(e,n,r){const a=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!a.includes(s)&&(n=s(n,r),a.push(s))}return n}const cn={name:"attention",resolveAll:wl,tokenize:Nl};function wl(e,n){let r=-1,a,i,s,o,l,u,c,d;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(a=r;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&n.sliceSerialize(e[a][1]).charCodeAt(0)===n.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[a][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;u=e[a][1].end.offset-e[a][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const m={...e[a][1].end},h={...e[r][1].start};br(m,-u),br(h,u),o={type:u>1?"strongSequence":"emphasisSequence",start:m,end:{...e[a][1].end}},l={type:u>1?"strongSequence":"emphasisSequence",start:{...e[r][1].start},end:h},s={type:u>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[r][1].start}},i={type:u>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[a][1].end={...o.start},e[r][1].start={...l.end},c=[],e[a][1].end.offset-e[a][1].start.offset&&(c=xe(c,[["enter",e[a][1],n],["exit",e[a][1],n]])),c=xe(c,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",s,n]]),c=xe(c,Nn(n.parser.constructs.insideSpan.null,e.slice(a+1,r),n)),c=xe(c,[["exit",s,n],["enter",l,n],["exit",l,n],["exit",i,n]]),e[r][1].end.offset-e[r][1].start.offset?(d=2,c=xe(c,[["enter",e[r][1],n],["exit",e[r][1],n]])):d=0,Ne(e,a-1,r-a+3,c),r=a+c.length-d-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function Nl(e,n){const r=this.parser.constructs.attentionMarkers.null,a=this.previous,i=xr(a);let s;return o;function o(u){return s=u,e.enter("attentionSequence"),l(u)}function l(u){if(u===s)return e.consume(u),l;const c=e.exit("attentionSequence"),d=xr(u),m=!d||d===2&&i||r.includes(u),h=!i||i===2&&d||r.includes(a);return c._open=!!(s===42?m:m&&(i||!h)),c._close=!!(s===42?h:h&&(d||!m)),n(u)}}function br(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Cl={name:"autolink",tokenize:Sl};function Sl(e,n,r){let a=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(p){return we(p)?(e.consume(p),o):p===64?r(p):c(p)}function o(p){return p===43||p===45||p===46||he(p)?(a=1,l(p)):c(p)}function l(p){return p===58?(e.consume(p),a=0,u):(p===43||p===45||p===46||he(p))&&a++<32?(e.consume(p),l):(a=0,c(p))}function u(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||on(p)?r(p):(e.consume(p),u)}function c(p){return p===64?(e.consume(p),d):pl(p)?(e.consume(p),c):r(p)}function d(p){return he(p)?m(p):r(p)}function m(p){return p===46?(e.consume(p),a=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):h(p)}function h(p){if((p===45||he(p))&&a++<63){const k=p===45?h:m;return e.consume(p),k}return r(p)}}const Pt={partial:!0,tokenize:Il};function Il(e,n,r){return a;function a(s){return K(s)?X(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||O(s)?n(s):r(s)}}const Pa={continuation:{tokenize:Pl},exit:Tl,name:"blockQuote",tokenize:Al};function Al(e,n,r){const a=this;return i;function i(o){if(o===62){const l=a.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),s}return r(o)}function s(o){return K(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function Pl(e,n,r){const a=this;return i;function i(o){return K(o)?X(e,s,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return e.attempt(Pa,n,r)(o)}}function Tl(e){e.exit("blockQuote")}const Ta={name:"characterEscape",tokenize:Rl};function Rl(e,n,r){return a;function a(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return gl(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):r(s)}}const Ra={name:"characterReference",tokenize:El};function El(e,n,r){const a=this;let i=0,s,o;return l;function l(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),u}function u(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),s=31,o=he,d(m))}function c(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,o=hl,d):(e.enter("characterReferenceValue"),s=7,o=ln,d(m))}function d(m){if(m===59&&i){const h=e.exit("characterReferenceValue");return o===he&&!wn(a.sliceSerialize(h))?r(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(m)&&i++<s?(e.consume(m),d):r(m)}}const yr={partial:!0,tokenize:Dl},vr={concrete:!0,name:"codeFenced",tokenize:Ml};function Ml(e,n,r){const a=this,i={partial:!0,tokenize:q};let s=0,o=0,l;return u;function u(b){return c(b)}function c(b){const _=a.events[a.events.length-1];return s=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,l=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(b)}function d(b){return b===l?(o++,e.consume(b),d):o<3?r(b):(e.exit("codeFencedFenceSequence"),K(b)?X(e,m,"whitespace")(b):m(b))}function m(b){return b===null||O(b)?(e.exit("codeFencedFence"),a.interrupt?n(b):e.check(yr,j,V)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(b))}function h(b){return b===null||O(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(b)):K(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),X(e,p,"whitespace")(b)):b===96&&b===l?r(b):(e.consume(b),h)}function p(b){return b===null||O(b)?m(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(b))}function k(b){return b===null||O(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(b)):b===96&&b===l?r(b):(e.consume(b),k)}function j(b){return e.attempt(i,V,w)(b)}function w(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),y}function y(b){return s>0&&K(b)?X(e,z,"linePrefix",s+1)(b):z(b)}function z(b){return b===null||O(b)?e.check(yr,j,V)(b):(e.enter("codeFlowValue"),I(b))}function I(b){return b===null||O(b)?(e.exit("codeFlowValue"),z(b)):(e.consume(b),I)}function V(b){return e.exit("codeFenced"),n(b)}function q(b,_,N){let B=0;return E;function E(S){return b.enter("lineEnding"),b.consume(S),b.exit("lineEnding"),P}function P(S){return b.enter("codeFencedFence"),K(S)?X(b,A,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):A(S)}function A(S){return S===l?(b.enter("codeFencedFenceSequence"),G(S)):N(S)}function G(S){return S===l?(B++,b.consume(S),G):B>=o?(b.exit("codeFencedFenceSequence"),K(S)?X(b,D,"whitespace")(S):D(S)):N(S)}function D(S){return S===null||O(S)?(b.exit("codeFencedFence"),_(S)):N(S)}}}function Dl(e,n,r){const a=this;return i;function i(o){return o===null?r(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s)}function s(o){return a.parser.lazy[a.now().line]?r(o):n(o)}}const Wt={name:"codeIndented",tokenize:Ol},zl={partial:!0,tokenize:Ll};function Ol(e,n,r){const a=this;return i;function i(c){return e.enter("codeIndented"),X(e,s,"linePrefix",5)(c)}function s(c){const d=a.events[a.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?o(c):r(c)}function o(c){return c===null?u(c):O(c)?e.attempt(zl,o,u)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||O(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),l)}function u(c){return e.exit("codeIndented"),n(c)}}function Ll(e,n,r){const a=this;return i;function i(o){return a.parser.lazy[a.now().line]?r(o):O(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):X(e,s,"linePrefix",5)(o)}function s(o){const l=a.events[a.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):O(o)?i(o):r(o)}}const Bl={name:"codeText",previous:_l,resolve:Fl,tokenize:Wl};function Fl(e){let n=e.length-4,r=3,a,i;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(a=r;++a<n;)if(e[a][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[n][1].type="codeTextPadding",r+=2,n-=2;break}}for(a=r-1,n++;++a<=n;)i===void 0?a!==n&&e[a][1].type!=="lineEnding"&&(i=a):(a===n||e[a][1].type==="lineEnding")&&(e[i][1].type="codeTextData",a!==i+2&&(e[i][1].end=e[a-1][1].end,e.splice(i+2,a-i-2),n-=a-i-2,a=i+2),i=void 0);return e}function _l(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Wl(e,n,r){let a=0,i,s;return o;function o(m){return e.enter("codeText"),e.enter("codeTextSequence"),l(m)}function l(m){return m===96?(e.consume(m),a++,l):(e.exit("codeTextSequence"),u(m))}function u(m){return m===null?r(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),u):m===96?(s=e.enter("codeTextSequence"),i=0,d(m)):O(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(m))}function c(m){return m===null||m===32||m===96||O(m)?(e.exit("codeTextData"),u(m)):(e.consume(m),c)}function d(m){return m===96?(e.consume(m),i++,d):i===a?(e.exit("codeTextSequence"),e.exit("codeText"),n(m)):(s.type="codeTextData",c(m))}}class Ul{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,r){const a=r??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(n,a):n>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(n,r,a){const i=r||0;this.setCursor(Math.trunc(n));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return a&&et(this.left,a),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),et(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),et(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const r=this.left.splice(n,Number.POSITIVE_INFINITY);et(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);et(this.left,r.reverse())}}}function et(e,n){let r=0;if(n.length<1e4)e.push(...n);else for(;r<n.length;)e.push(...n.slice(r,r+1e4)),r+=1e4}function Ea(e){const n={};let r=-1,a,i,s,o,l,u,c;const d=new Ul(e);for(;++r<d.length;){for(;r in n;)r=n[r];if(a=d.get(r),r&&a[1].type==="chunkFlow"&&d.get(r-1)[1].type==="listItemPrefix"&&(u=a[1]._tokenizer.events,s=0,s<u.length&&u[s][1].type==="lineEndingBlank"&&(s+=2),s<u.length&&u[s][1].type==="content"))for(;++s<u.length&&u[s][1].type!=="content";)u[s][1].type==="chunkText"&&(u[s][1]._isInFirstContentOfListItem=!0,s++);if(a[0]==="enter")a[1].contentType&&(Object.assign(n,Hl(d,r)),r=n[r],c=!0);else if(a[1]._container){for(s=r,i=void 0;s--;)if(o=d.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(a[1].end={...d.get(i)[1].start},l=d.slice(i,r),l.unshift(a),d.splice(i,r-i+1,l))}}return Ne(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function Hl(e,n){const r=e.get(n)[1],a=e.get(n)[2];let i=n-1;const s=[];let o=r._tokenizer;o||(o=a.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],c={};let d,m,h=-1,p=r,k=0,j=0;const w=[j];for(;p;){for(;e.get(++i)[1]!==p;);s.push(i),p._tokenizer||(d=a.sliceStream(p),p.next||d.push(null),m&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),m=p,p=p.next}for(p=r;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(j=h+1,w.push(j),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):w.pop(),h=w.length;h--;){const y=l.slice(w[h],w[h+1]),z=s.pop();u.push([z,z+y.length-1]),e.splice(z,2,y)}for(u.reverse(),h=-1;++h<u.length;)c[k+u[h][0]]=k+u[h][1],k+=u[h][1]-u[h][0]-1;return c}const Vl={resolve:Gl,tokenize:$l},ql={partial:!0,tokenize:Kl};function Gl(e){return Ea(e),e}function $l(e,n){let r;return a;function a(l){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):O(l)?e.check(ql,o,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function o(l){return e.consume(l),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,i}}function Kl(e,n,r){const a=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),X(e,s,"linePrefix")}function s(o){if(o===null||O(o))return r(o);const l=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):e.interrupt(a.parser.constructs.flow,r,n)(o)}}function Ma(e,n,r,a,i,s,o,l,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return m;function m(y){return y===60?(e.enter(a),e.enter(i),e.enter(s),e.consume(y),e.exit(s),h):y===null||y===32||y===41||on(y)?r(y):(e.enter(a),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),j(y))}function h(y){return y===62?(e.enter(s),e.consume(y),e.exit(s),e.exit(i),e.exit(a),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===62?(e.exit("chunkString"),e.exit(l),h(y)):y===null||y===60||O(y)?r(y):(e.consume(y),y===92?k:p)}function k(y){return y===60||y===62||y===92?(e.consume(y),p):p(y)}function j(y){return!d&&(y===null||y===41||ce(y))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(a),n(y)):d<c&&y===40?(e.consume(y),d++,j):y===41?(e.consume(y),d--,j):y===null||y===32||y===40||on(y)?r(y):(e.consume(y),y===92?w:j)}function w(y){return y===40||y===41||y===92?(e.consume(y),j):j(y)}}function Da(e,n,r,a,i,s){const o=this;let l=0,u;return c;function c(p){return e.enter(a),e.enter(i),e.consume(p),e.exit(i),e.enter(s),d}function d(p){return l>999||p===null||p===91||p===93&&!u||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?r(p):p===93?(e.exit(s),e.enter(i),e.consume(p),e.exit(i),e.exit(a),n):O(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),m(p))}function m(p){return p===null||p===91||p===93||O(p)||l++>999?(e.exit("chunkString"),d(p)):(e.consume(p),u||(u=!K(p)),p===92?h:m)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,m):m(p)}}function za(e,n,r,a,i,s){let o;return l;function l(h){return h===34||h===39||h===40?(e.enter(a),e.enter(i),e.consume(h),e.exit(i),o=h===40?41:h,u):r(h)}function u(h){return h===o?(e.enter(i),e.consume(h),e.exit(i),e.exit(a),n):(e.enter(s),c(h))}function c(h){return h===o?(e.exit(s),u(o)):h===null?r(h):O(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),X(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===o||h===null||O(h)?(e.exit("chunkString"),c(h)):(e.consume(h),h===92?m:d)}function m(h){return h===o||h===92?(e.consume(h),d):d(h)}}function it(e,n){let r;return a;function a(i){return O(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),r=!0,a):K(i)?X(e,a,r?"linePrefix":"lineSuffix")(i):n(i)}}const Ql={name:"definition",tokenize:Jl},Yl={partial:!0,tokenize:Xl};function Jl(e,n,r){const a=this;let i;return s;function s(p){return e.enter("definition"),o(p)}function o(p){return Da.call(a,e,l,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),u):r(p)}function u(p){return ce(p)?it(e,c)(p):c(p)}function c(p){return Ma(e,d,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(Yl,m,m)(p)}function m(p){return K(p)?X(e,h,"whitespace")(p):h(p)}function h(p){return p===null||O(p)?(e.exit("definition"),a.parser.defined.push(i),n(p)):r(p)}}function Xl(e,n,r){return a;function a(l){return ce(l)?it(e,i)(l):r(l)}function i(l){return za(e,s,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return K(l)?X(e,o,"whitespace")(l):o(l)}function o(l){return l===null||O(l)?n(l):r(l)}}const Zl={name:"hardBreakEscape",tokenize:ec};function ec(e,n,r){return a;function a(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return O(s)?(e.exit("hardBreakEscape"),n(s)):r(s)}}const tc={name:"headingAtx",resolve:nc,tokenize:rc};function nc(e,n){let r=e.length-2,a=3,i,s;return e[a][1].type==="whitespace"&&(a+=2),r-2>a&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(a===r-1||r-4>a&&e[r-2][1].type==="whitespace")&&(r-=a+1===r?2:4),r>a&&(i={type:"atxHeadingText",start:e[a][1].start,end:e[r][1].end},s={type:"chunkText",start:e[a][1].start,end:e[r][1].end,contentType:"text"},Ne(e,a,r-a+1,[["enter",i,n],["enter",s,n],["exit",s,n],["exit",i,n]])),e}function rc(e,n,r){let a=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&a++<6?(e.consume(d),o):d===null||ce(d)?(e.exit("atxHeadingSequence"),l(d)):r(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||O(d)?(e.exit("atxHeading"),n(d)):K(d)?X(e,l,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),l(d))}function c(d){return d===null||d===35||ce(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),c)}}const ac=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],kr=["pre","script","style","textarea"],ic={concrete:!0,name:"htmlFlow",resolveTo:lc,tokenize:cc},sc={partial:!0,tokenize:dc},oc={partial:!0,tokenize:uc};function lc(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function cc(e,n,r){const a=this;let i,s,o,l,u;return c;function c(g){return d(g)}function d(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),m}function m(g){return g===33?(e.consume(g),h):g===47?(e.consume(g),s=!0,j):g===63?(e.consume(g),i=3,a.interrupt?n:f):we(g)?(e.consume(g),o=String.fromCharCode(g),w):r(g)}function h(g){return g===45?(e.consume(g),i=2,p):g===91?(e.consume(g),i=5,l=0,k):we(g)?(e.consume(g),i=4,a.interrupt?n:f):r(g)}function p(g){return g===45?(e.consume(g),a.interrupt?n:f):r(g)}function k(g){const Z="CDATA[";return g===Z.charCodeAt(l++)?(e.consume(g),l===Z.length?a.interrupt?n:A:k):r(g)}function j(g){return we(g)?(e.consume(g),o=String.fromCharCode(g),w):r(g)}function w(g){if(g===null||g===47||g===62||ce(g)){const Z=g===47,fe=o.toLowerCase();return!Z&&!s&&kr.includes(fe)?(i=1,a.interrupt?n(g):A(g)):ac.includes(o.toLowerCase())?(i=6,Z?(e.consume(g),y):a.interrupt?n(g):A(g)):(i=7,a.interrupt&&!a.parser.lazy[a.now().line]?r(g):s?z(g):I(g))}return g===45||he(g)?(e.consume(g),o+=String.fromCharCode(g),w):r(g)}function y(g){return g===62?(e.consume(g),a.interrupt?n:A):r(g)}function z(g){return K(g)?(e.consume(g),z):E(g)}function I(g){return g===47?(e.consume(g),E):g===58||g===95||we(g)?(e.consume(g),V):K(g)?(e.consume(g),I):E(g)}function V(g){return g===45||g===46||g===58||g===95||he(g)?(e.consume(g),V):q(g)}function q(g){return g===61?(e.consume(g),b):K(g)?(e.consume(g),q):I(g)}function b(g){return g===null||g===60||g===61||g===62||g===96?r(g):g===34||g===39?(e.consume(g),u=g,_):K(g)?(e.consume(g),b):N(g)}function _(g){return g===u?(e.consume(g),u=null,B):g===null||O(g)?r(g):(e.consume(g),_)}function N(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||ce(g)?q(g):(e.consume(g),N)}function B(g){return g===47||g===62||K(g)?I(g):r(g)}function E(g){return g===62?(e.consume(g),P):r(g)}function P(g){return g===null||O(g)?A(g):K(g)?(e.consume(g),P):r(g)}function A(g){return g===45&&i===2?(e.consume(g),H):g===60&&i===1?(e.consume(g),Q):g===62&&i===4?(e.consume(g),se):g===63&&i===3?(e.consume(g),f):g===93&&i===5?(e.consume(g),ge):O(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(sc,de,G)(g)):g===null||O(g)?(e.exit("htmlFlowData"),G(g)):(e.consume(g),A)}function G(g){return e.check(oc,D,de)(g)}function D(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),S}function S(g){return g===null||O(g)?G(g):(e.enter("htmlFlowData"),A(g))}function H(g){return g===45?(e.consume(g),f):A(g)}function Q(g){return g===47?(e.consume(g),o="",M):A(g)}function M(g){if(g===62){const Z=o.toLowerCase();return kr.includes(Z)?(e.consume(g),se):A(g)}return we(g)&&o.length<8?(e.consume(g),o+=String.fromCharCode(g),M):A(g)}function ge(g){return g===93?(e.consume(g),f):A(g)}function f(g){return g===62?(e.consume(g),se):g===45&&i===2?(e.consume(g),f):A(g)}function se(g){return g===null||O(g)?(e.exit("htmlFlowData"),de(g)):(e.consume(g),se)}function de(g){return e.exit("htmlFlow"),n(g)}}function uc(e,n,r){const a=this;return i;function i(o){return O(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s):r(o)}function s(o){return a.parser.lazy[a.now().line]?r(o):n(o)}}function dc(e,n,r){return a;function a(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Pt,n,r)}}const mc={name:"htmlText",tokenize:pc};function pc(e,n,r){const a=this;let i,s,o;return l;function l(f){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(f),u}function u(f){return f===33?(e.consume(f),c):f===47?(e.consume(f),q):f===63?(e.consume(f),I):we(f)?(e.consume(f),N):r(f)}function c(f){return f===45?(e.consume(f),d):f===91?(e.consume(f),s=0,k):we(f)?(e.consume(f),z):r(f)}function d(f){return f===45?(e.consume(f),p):r(f)}function m(f){return f===null?r(f):f===45?(e.consume(f),h):O(f)?(o=m,Q(f)):(e.consume(f),m)}function h(f){return f===45?(e.consume(f),p):m(f)}function p(f){return f===62?H(f):f===45?h(f):m(f)}function k(f){const se="CDATA[";return f===se.charCodeAt(s++)?(e.consume(f),s===se.length?j:k):r(f)}function j(f){return f===null?r(f):f===93?(e.consume(f),w):O(f)?(o=j,Q(f)):(e.consume(f),j)}function w(f){return f===93?(e.consume(f),y):j(f)}function y(f){return f===62?H(f):f===93?(e.consume(f),y):j(f)}function z(f){return f===null||f===62?H(f):O(f)?(o=z,Q(f)):(e.consume(f),z)}function I(f){return f===null?r(f):f===63?(e.consume(f),V):O(f)?(o=I,Q(f)):(e.consume(f),I)}function V(f){return f===62?H(f):I(f)}function q(f){return we(f)?(e.consume(f),b):r(f)}function b(f){return f===45||he(f)?(e.consume(f),b):_(f)}function _(f){return O(f)?(o=_,Q(f)):K(f)?(e.consume(f),_):H(f)}function N(f){return f===45||he(f)?(e.consume(f),N):f===47||f===62||ce(f)?B(f):r(f)}function B(f){return f===47?(e.consume(f),H):f===58||f===95||we(f)?(e.consume(f),E):O(f)?(o=B,Q(f)):K(f)?(e.consume(f),B):H(f)}function E(f){return f===45||f===46||f===58||f===95||he(f)?(e.consume(f),E):P(f)}function P(f){return f===61?(e.consume(f),A):O(f)?(o=P,Q(f)):K(f)?(e.consume(f),P):B(f)}function A(f){return f===null||f===60||f===61||f===62||f===96?r(f):f===34||f===39?(e.consume(f),i=f,G):O(f)?(o=A,Q(f)):K(f)?(e.consume(f),A):(e.consume(f),D)}function G(f){return f===i?(e.consume(f),i=void 0,S):f===null?r(f):O(f)?(o=G,Q(f)):(e.consume(f),G)}function D(f){return f===null||f===34||f===39||f===60||f===61||f===96?r(f):f===47||f===62||ce(f)?B(f):(e.consume(f),D)}function S(f){return f===47||f===62||ce(f)?B(f):r(f)}function H(f){return f===62?(e.consume(f),e.exit("htmlTextData"),e.exit("htmlText"),n):r(f)}function Q(f){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),M}function M(f){return K(f)?X(e,ge,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):ge(f)}function ge(f){return e.enter("htmlTextData"),o(f)}}const Cn={name:"labelEnd",resolveAll:xc,resolveTo:bc,tokenize:yc},hc={tokenize:vc},gc={tokenize:kc},fc={tokenize:jc};function xc(e){let n=-1;const r=[];for(;++n<e.length;){const a=e[n][1];if(r.push(e[n]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const i=a.type==="labelImage"?4:2;a.type="data",n+=i}}return e.length!==r.length&&Ne(e,0,e.length,r),e}function bc(e,n){let r=e.length,a=0,i,s,o,l;for(;r--;)if(i=e[r][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[r][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[r][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=r,i.type!=="labelLink")){a=2;break}}else i.type==="labelEnd"&&(o=r);const u={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[s][1].start},end:{...e[o][1].end}},d={type:"labelText",start:{...e[s+a+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",u,n],["enter",c,n]],l=xe(l,e.slice(s+1,s+a+3)),l=xe(l,[["enter",d,n]]),l=xe(l,Nn(n.parser.constructs.insideSpan.null,e.slice(s+a+4,o-3),n)),l=xe(l,[["exit",d,n],e[o-2],e[o-1],["exit",c,n]]),l=xe(l,e.slice(o+1)),l=xe(l,[["exit",u,n]]),Ne(e,s,e.length,l),e}function yc(e,n,r){const a=this;let i=a.events.length,s,o;for(;i--;)if((a.events[i][1].type==="labelImage"||a.events[i][1].type==="labelLink")&&!a.events[i][1]._balanced){s=a.events[i][1];break}return l;function l(h){return s?s._inactive?m(h):(o=a.parser.defined.includes(He(a.sliceSerialize({start:s.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),u):r(h)}function u(h){return h===40?e.attempt(hc,d,o?d:m)(h):h===91?e.attempt(gc,d,o?c:m)(h):o?d(h):m(h)}function c(h){return e.attempt(fc,d,m)(h)}function d(h){return n(h)}function m(h){return s._balanced=!0,r(h)}}function vc(e,n,r){return a;function a(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),i}function i(m){return ce(m)?it(e,s)(m):s(m)}function s(m){return m===41?d(m):Ma(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function o(m){return ce(m)?it(e,u)(m):d(m)}function l(m){return r(m)}function u(m){return m===34||m===39||m===40?za(e,c,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):d(m)}function c(m){return ce(m)?it(e,d)(m):d(m)}function d(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),n):r(m)}}function kc(e,n,r){const a=this;return i;function i(l){return Da.call(a,e,s,o,"reference","referenceMarker","referenceString")(l)}function s(l){return a.parser.defined.includes(He(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?n(l):r(l)}function o(l){return r(l)}}function jc(e,n,r){return a;function a(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),n):r(s)}}const wc={name:"labelStartImage",resolveAll:Cn.resolveAll,tokenize:Nc};function Nc(e,n,r){const a=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):r(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(l):n(l)}}const Cc={name:"labelStartLink",resolveAll:Cn.resolveAll,tokenize:Sc};function Sc(e,n,r){const a=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(o):n(o)}}const Ut={name:"lineEnding",tokenize:Ic};function Ic(e,n){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),X(e,n,"linePrefix")}}const yt={name:"thematicBreak",tokenize:Ac};function Ac(e,n,r){let a=0,i;return s;function s(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):a>=3&&(c===null||O(c))?(e.exit("thematicBreak"),n(c)):r(c)}function u(c){return c===i?(e.consume(c),a++,u):(e.exit("thematicBreakSequence"),K(c)?X(e,l,"whitespace")(c):l(c))}}const oe={continuation:{tokenize:Ec},exit:Dc,name:"list",tokenize:Rc},Pc={partial:!0,tokenize:zc},Tc={partial:!0,tokenize:Mc};function Rc(e,n,r){const a=this,i=a.events[a.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const k=a.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!a.containerState.marker||p===a.containerState.marker:ln(p)){if(a.containerState.type||(a.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(yt,r,c)(p):c(p);if(!a.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(p)}return r(p)}function u(p){return ln(p)&&++o<10?(e.consume(p),u):(!a.interrupt||o<2)&&(a.containerState.marker?p===a.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):r(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||p,e.check(Pt,a.interrupt?r:d,e.attempt(Pc,h,m))}function d(p){return a.containerState.initialBlankLine=!0,s++,h(p)}function m(p){return K(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):r(p)}function h(p){return a.containerState.size=s+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Ec(e,n,r){const a=this;return a.containerState._closeFlow=void 0,e.check(Pt,i,s);function i(l){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,X(e,n,"listItemIndent",a.containerState.size+1)(l)}function s(l){return a.containerState.furtherBlankLines||!K(l)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,o(l)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(Tc,n,o)(l))}function o(l){return a.containerState._closeFlow=!0,a.interrupt=void 0,X(e,e.attempt(oe,n,r),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Mc(e,n,r){const a=this;return X(e,i,"listItemIndent",a.containerState.size+1);function i(s){const o=a.events[a.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===a.containerState.size?n(s):r(s)}}function Dc(e){e.exit(this.containerState.type)}function zc(e,n,r){const a=this;return X(e,i,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const o=a.events[a.events.length-1];return!K(s)&&o&&o[1].type==="listItemPrefixWhitespace"?n(s):r(s)}}const jr={name:"setextUnderline",resolveTo:Oc,tokenize:Lc};function Oc(e,n){let r=e.length,a,i,s;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){a=r;break}e[r][1].type==="paragraph"&&(i=r)}else e[r][1].type==="content"&&e.splice(r,1),!s&&e[r][1].type==="definition"&&(s=r);const o={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",o,n]),e.splice(s+1,0,["exit",e[a][1],n]),e[a][1].end={...e[s][1].end}):e[a][1]=o,e.push(["exit",o,n]),e}function Lc(e,n,r){const a=this;let i;return s;function s(c){let d=a.events.length,m;for(;d--;)if(a.events[d][1].type!=="lineEnding"&&a.events[d][1].type!=="linePrefix"&&a.events[d][1].type!=="content"){m=a.events[d][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||m)?(e.enter("setextHeadingLine"),i=c,o(c)):r(c)}function o(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),K(c)?X(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||O(c)?(e.exit("setextHeadingLine"),n(c)):r(c)}}const Bc={tokenize:Fc};function Fc(e){const n=this,r=e.attempt(Pt,a,e.attempt(this.parser.constructs.flowInitial,i,X(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Vl,i)),"linePrefix")));return r;function a(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),n.currentConstruct=void 0,r}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),n.currentConstruct=void 0,r}}const _c={resolveAll:La()},Wc=Oa("string"),Uc=Oa("text");function Oa(e){return{resolveAll:La(e==="text"?Hc:void 0),tokenize:n};function n(r){const a=this,i=this.parser.constructs[e],s=r.attempt(i,o,l);return o;function o(d){return c(d)?s(d):l(d)}function l(d){if(d===null){r.consume(d);return}return r.enter("data"),r.consume(d),u}function u(d){return c(d)?(r.exit("data"),s(d)):(r.consume(d),u)}function c(d){if(d===null)return!0;const m=i[d];let h=-1;if(m)for(;++h<m.length;){const p=m[h];if(!p.previous||p.previous.call(a,a.previous))return!0}return!1}}}function La(e){return n;function n(r,a){let i=-1,s;for(;++i<=r.length;)s===void 0?r[i]&&r[i][1].type==="data"&&(s=i,i++):(!r[i]||r[i][1].type!=="data")&&(i!==s+2&&(r[s][1].end=r[i-1][1].end,r.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(r,a):r}}function Hc(e,n){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const a=e[r-1][1],i=n.sliceStream(a);let s=i.length,o=-1,l=0,u;for(;s--;){const c=i[s];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(c===-2)u=!0,l++;else if(c!==-1){s++;break}}if(n._contentTypeTextTrailing&&r===e.length&&(l=0),l){const c={type:r===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:a.start._bufferIndex+o,_index:a.start._index+s,line:a.end.line,column:a.end.column-l,offset:a.end.offset-l},end:{...a.end}};a.end={...c.start},a.start.offset===a.end.offset?Object.assign(a,c):(e.splice(r,0,["enter",c,n],["exit",c,n]),r+=2)}r++}return e}const Vc={42:oe,43:oe,45:oe,48:oe,49:oe,50:oe,51:oe,52:oe,53:oe,54:oe,55:oe,56:oe,57:oe,62:Pa},qc={91:Ql},Gc={[-2]:Wt,[-1]:Wt,32:Wt},$c={35:tc,42:yt,45:[jr,yt],60:ic,61:jr,95:yt,96:vr,126:vr},Kc={38:Ra,92:Ta},Qc={[-5]:Ut,[-4]:Ut,[-3]:Ut,33:wc,38:Ra,42:cn,60:[Cl,mc],91:Cc,92:[Zl,Ta],93:Cn,95:cn,96:Bl},Yc={null:[cn,_c]},Jc={null:[42,95]},Xc={null:[]},Zc=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Jc,contentInitial:qc,disable:Xc,document:Vc,flow:$c,flowInitial:Gc,insideSpan:Yc,string:Kc,text:Qc},Symbol.toStringTag,{value:"Module"}));function eu(e,n,r){let a={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const i={},s=[];let o=[],l=[];const u={attempt:_(q),check:_(b),consume:z,enter:I,exit:V,interrupt:_(b,{interrupt:!0})},c={code:null,containerState:{},defineSkip:j,events:[],now:k,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:m};let d=n.tokenize.call(c,u);return n.resolveAll&&s.push(n),c;function m(P){return o=xe(o,P),w(),o[o.length-1]!==null?[]:(N(n,0),c.events=Nn(s,c.events,c),c.events)}function h(P,A){return nu(p(P),A)}function p(P){return tu(o,P)}function k(){const{_bufferIndex:P,_index:A,line:G,column:D,offset:S}=a;return{_bufferIndex:P,_index:A,line:G,column:D,offset:S}}function j(P){i[P.line]=P.column,E()}function w(){let P;for(;a._index<o.length;){const A=o[a._index];if(typeof A=="string")for(P=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===P&&a._bufferIndex<A.length;)y(A.charCodeAt(a._bufferIndex));else y(A)}}function y(P){d=d(P)}function z(P){O(P)?(a.line++,a.column=1,a.offset+=P===-3?2:1,E()):P!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===o[a._index].length&&(a._bufferIndex=-1,a._index++)),c.previous=P}function I(P,A){const G=A||{};return G.type=P,G.start=k(),c.events.push(["enter",G,c]),l.push(G),G}function V(P){const A=l.pop();return A.end=k(),c.events.push(["exit",A,c]),A}function q(P,A){N(P,A.from)}function b(P,A){A.restore()}function _(P,A){return G;function G(D,S,H){let Q,M,ge,f;return Array.isArray(D)?de(D):"tokenize"in D?de([D]):se(D);function se(te){return ee;function ee(be){const ye=be!==null&&te[be],ve=be!==null&&te.null,Ae=[...Array.isArray(ye)?ye:ye?[ye]:[],...Array.isArray(ve)?ve:ve?[ve]:[]];return de(Ae)(be)}}function de(te){return Q=te,M=0,te.length===0?H:g(te[M])}function g(te){return ee;function ee(be){return f=B(),ge=te,te.partial||(c.currentConstruct=te),te.name&&c.parser.constructs.disable.null.includes(te.name)?fe():te.tokenize.call(A?Object.assign(Object.create(c),A):c,u,Z,fe)(be)}}function Z(te){return P(ge,f),S}function fe(te){return f.restore(),++M<Q.length?g(Q[M]):H}}}function N(P,A){P.resolveAll&&!s.includes(P)&&s.push(P),P.resolve&&Ne(c.events,A,c.events.length-A,P.resolve(c.events.slice(A),c)),P.resolveTo&&(c.events=P.resolveTo(c.events,c))}function B(){const P=k(),A=c.previous,G=c.currentConstruct,D=c.events.length,S=Array.from(l);return{from:D,restore:H};function H(){a=P,c.previous=A,c.currentConstruct=G,c.events.length=D,l=S,E()}}function E(){a.line in i&&a.column<2&&(a.column=i[a.line],a.offset+=i[a.line]-1)}}function tu(e,n){const r=n.start._index,a=n.start._bufferIndex,i=n.end._index,s=n.end._bufferIndex;let o;if(r===i)o=[e[r].slice(a,s)];else{if(o=e.slice(r,i),a>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(a):o.shift()}s>0&&o.push(e[i].slice(0,s))}return o}function nu(e,n){let r=-1;const a=[];let i;for(;++r<e.length;){const s=e[r];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,a.push(o)}return a.join("")}function ru(e){const a={constructs:ul([Zc,...(e||{}).extensions||[]]),content:i(bl),defined:[],document:i(vl),flow:i(Bc),lazy:{},string:i(Wc),text:i(Uc)};return a;function i(s){return o;function o(l){return eu(a,s,l)}}}function au(e){for(;!Ea(e););return e}const wr=/[\0\t\n\r]/g;function iu(){let e=1,n="",r=!0,a;return i;function i(s,o,l){const u=[];let c,d,m,h,p;for(s=n+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),m=0,n="",r&&(s.charCodeAt(0)===65279&&m++,r=void 0);m<s.length;){if(wr.lastIndex=m,c=wr.exec(s),h=c&&c.index!==void 0?c.index:s.length,p=s.charCodeAt(h),!c){n=s.slice(m);break}if(p===10&&m===h&&a)u.push(-3),a=void 0;else switch(a&&(u.push(-5),a=void 0),m<h&&(u.push(s.slice(m,h)),e+=h-m),p){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:a=!0,e=1}m=h+1}return l&&(a&&u.push(-5),n&&u.push(n),u.push(null)),u}}const su=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ou(e){return e.replace(su,lu)}function lu(e,n,r){if(n)return n;if(r.charCodeAt(0)===35){const i=r.charCodeAt(1),s=i===120||i===88;return Aa(r.slice(s?2:1),s?16:10)}return wn(r)||e}const Ba={}.hasOwnProperty;function cu(e,n,r){return typeof n!="string"&&(r=n,n=void 0),uu(r)(au(ru(r).document().write(iu()(e,n,!0))))}function uu(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Dn),autolinkProtocol:B,autolinkEmail:B,atxHeading:s(Rn),blockQuote:s(ve),characterEscape:B,characterReference:B,codeFenced:s(Ae),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(Ae,o),codeText:s(Le,o),codeTextData:B,data:B,codeFlowValue:B,definition:s(Qa),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(Ya),hardBreakEscape:s(En),hardBreakTrailing:s(En),htmlFlow:s(Mn,o),htmlFlowData:B,htmlText:s(Mn,o),htmlTextData:B,image:s(Ja),label:o,link:s(Dn),listItem:s(Xa),listItemValue:h,listOrdered:s(zn,m),listUnordered:s(zn),paragraph:s(Za),reference:g,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(Rn),strong:s(ei),thematicBreak:s(ni)},exit:{atxHeading:u(),atxHeadingSequence:q,autolink:u(),autolinkEmail:ye,autolinkProtocol:be,blockQuote:u(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:fe,characterReferenceMarkerNumeric:fe,characterReferenceValue:te,characterReference:ee,codeFenced:u(w),codeFencedFence:j,codeFencedFenceInfo:p,codeFencedFenceMeta:k,codeFlowValue:E,codeIndented:u(y),codeText:u(S),codeTextData:E,data:E,definition:u(),definitionDestinationString:V,definitionLabelString:z,definitionTitleString:I,emphasis:u(),hardBreakEscape:u(A),hardBreakTrailing:u(A),htmlFlow:u(G),htmlFlowData:E,htmlText:u(D),htmlTextData:E,image:u(Q),label:ge,labelText:M,lineEnding:P,link:u(H),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:Z,resourceDestinationString:f,resourceTitleString:se,resource:de,setextHeading:u(N),setextHeadingLineSequence:_,setextHeadingText:b,strong:u(),thematicBreak:u()}};Fa(n,(e||{}).mdastExtensions||[]);const r={};return a;function a(x){let C={type:"root",children:[]};const L={stack:[C],tokenStack:[],config:n,enter:l,exit:c,buffer:o,resume:d,data:r},$=[];let Y=-1;for(;++Y<x.length;)if(x[Y][1].type==="listOrdered"||x[Y][1].type==="listUnordered")if(x[Y][0]==="enter")$.push(Y);else{const ke=$.pop();Y=i(x,ke,Y)}for(Y=-1;++Y<x.length;){const ke=n[x[Y][0]];Ba.call(ke,x[Y][1].type)&&ke[x[Y][1].type].call(Object.assign({sliceSerialize:x[Y][2].sliceSerialize},L),x[Y][1])}if(L.tokenStack.length>0){const ke=L.tokenStack[L.tokenStack.length-1];(ke[1]||Nr).call(L,void 0,ke[0])}for(C.position={start:Re(x.length>0?x[0][1].start:{line:1,column:1,offset:0}),end:Re(x.length>0?x[x.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<n.transforms.length;)C=n.transforms[Y](C)||C;return C}function i(x,C,L){let $=C-1,Y=-1,ke=!1,De,Ce,Ke,Qe;for(;++$<=L;){const me=x[$];switch(me[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{me[0]==="enter"?Y++:Y--,Qe=void 0;break}case"lineEndingBlank":{me[0]==="enter"&&(De&&!Qe&&!Y&&!Ke&&(Ke=$),Qe=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Qe=void 0}if(!Y&&me[0]==="enter"&&me[1].type==="listItemPrefix"||Y===-1&&me[0]==="exit"&&(me[1].type==="listUnordered"||me[1].type==="listOrdered")){if(De){let Be=$;for(Ce=void 0;Be--;){const Se=x[Be];if(Se[1].type==="lineEnding"||Se[1].type==="lineEndingBlank"){if(Se[0]==="exit")continue;Ce&&(x[Ce][1].type="lineEndingBlank",ke=!0),Se[1].type="lineEnding",Ce=Be}else if(!(Se[1].type==="linePrefix"||Se[1].type==="blockQuotePrefix"||Se[1].type==="blockQuotePrefixWhitespace"||Se[1].type==="blockQuoteMarker"||Se[1].type==="listItemIndent"))break}Ke&&(!Ce||Ke<Ce)&&(De._spread=!0),De.end=Object.assign({},Ce?x[Ce][1].start:me[1].end),x.splice(Ce||$,0,["exit",De,me[2]]),$++,L++}if(me[1].type==="listItemPrefix"){const Be={type:"listItem",_spread:!1,start:Object.assign({},me[1].start),end:void 0};De=Be,x.splice($,0,["enter",Be,me[2]]),$++,L++,Ke=void 0,Qe=!0}}}return x[C][1]._spread=ke,L}function s(x,C){return L;function L($){l.call(this,x($),$),C&&C.call(this,$)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(x,C,L){this.stack[this.stack.length-1].children.push(x),this.stack.push(x),this.tokenStack.push([C,L||void 0]),x.position={start:Re(C.start),end:void 0}}function u(x){return C;function C(L){x&&x.call(this,L),c.call(this,L)}}function c(x,C){const L=this.stack.pop(),$=this.tokenStack.pop();if($)$[0].type!==x.type&&(C?C.call(this,x,$[0]):($[1]||Nr).call(this,x,$[0]));else throw new Error("Cannot close `"+x.type+"` ("+at({start:x.start,end:x.end})+"): it’s not open");L.position.end=Re(x.end)}function d(){return ll(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function h(x){if(this.data.expectingFirstListItemValue){const C=this.stack[this.stack.length-2];C.start=Number.parseInt(this.sliceSerialize(x),10),this.data.expectingFirstListItemValue=void 0}}function p(){const x=this.resume(),C=this.stack[this.stack.length-1];C.lang=x}function k(){const x=this.resume(),C=this.stack[this.stack.length-1];C.meta=x}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x.replace(/(\r?\n|\r)$/g,"")}function z(x){const C=this.resume(),L=this.stack[this.stack.length-1];L.label=C,L.identifier=He(this.sliceSerialize(x)).toLowerCase()}function I(){const x=this.resume(),C=this.stack[this.stack.length-1];C.title=x}function V(){const x=this.resume(),C=this.stack[this.stack.length-1];C.url=x}function q(x){const C=this.stack[this.stack.length-1];if(!C.depth){const L=this.sliceSerialize(x).length;C.depth=L}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function _(x){const C=this.stack[this.stack.length-1];C.depth=this.sliceSerialize(x).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function B(x){const L=this.stack[this.stack.length-1].children;let $=L[L.length-1];(!$||$.type!=="text")&&($=ti(),$.position={start:Re(x.start),end:void 0},L.push($)),this.stack.push($)}function E(x){const C=this.stack.pop();C.value+=this.sliceSerialize(x),C.position.end=Re(x.end)}function P(x){const C=this.stack[this.stack.length-1];if(this.data.atHardBreak){const L=C.children[C.children.length-1];L.position.end=Re(x.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(C.type)&&(B.call(this,x),E.call(this,x))}function A(){this.data.atHardBreak=!0}function G(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x}function D(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x}function S(){const x=this.resume(),C=this.stack[this.stack.length-1];C.value=x}function H(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=C,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function Q(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=C,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function M(x){const C=this.sliceSerialize(x),L=this.stack[this.stack.length-2];L.label=ou(C),L.identifier=He(C).toLowerCase()}function ge(){const x=this.stack[this.stack.length-1],C=this.resume(),L=this.stack[this.stack.length-1];if(this.data.inReference=!0,L.type==="link"){const $=x.children;L.children=$}else L.alt=C}function f(){const x=this.resume(),C=this.stack[this.stack.length-1];C.url=x}function se(){const x=this.resume(),C=this.stack[this.stack.length-1];C.title=x}function de(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function Z(x){const C=this.resume(),L=this.stack[this.stack.length-1];L.label=C,L.identifier=He(this.sliceSerialize(x)).toLowerCase(),this.data.referenceType="full"}function fe(x){this.data.characterReferenceType=x.type}function te(x){const C=this.sliceSerialize(x),L=this.data.characterReferenceType;let $;L?($=Aa(C,L==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):$=wn(C);const Y=this.stack[this.stack.length-1];Y.value+=$}function ee(x){const C=this.stack.pop();C.position.end=Re(x.end)}function be(x){E.call(this,x);const C=this.stack[this.stack.length-1];C.url=this.sliceSerialize(x)}function ye(x){E.call(this,x);const C=this.stack[this.stack.length-1];C.url="mailto:"+this.sliceSerialize(x)}function ve(){return{type:"blockquote",children:[]}}function Ae(){return{type:"code",lang:null,meta:null,value:""}}function Le(){return{type:"inlineCode",value:""}}function Qa(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ya(){return{type:"emphasis",children:[]}}function Rn(){return{type:"heading",depth:0,children:[]}}function En(){return{type:"break"}}function Mn(){return{type:"html",value:""}}function Ja(){return{type:"image",title:null,url:"",alt:null}}function Dn(){return{type:"link",title:null,url:"",children:[]}}function zn(x){return{type:"list",ordered:x.type==="listOrdered",start:null,spread:x._spread,children:[]}}function Xa(x){return{type:"listItem",spread:x._spread,checked:null,children:[]}}function Za(){return{type:"paragraph",children:[]}}function ei(){return{type:"strong",children:[]}}function ti(){return{type:"text",value:""}}function ni(){return{type:"thematicBreak"}}}function Re(e){return{line:e.line,column:e.column,offset:e.offset}}function Fa(e,n){let r=-1;for(;++r<n.length;){const a=n[r];Array.isArray(a)?Fa(e,a):du(e,a)}}function du(e,n){let r;for(r in n)if(Ba.call(n,r))switch(r){case"canContainEols":{const a=n[r];a&&e[r].push(...a);break}case"transforms":{const a=n[r];a&&e[r].push(...a);break}case"enter":case"exit":{const a=n[r];a&&Object.assign(e[r],a);break}}}function Nr(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+at({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+at({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+at({start:n.start,end:n.end})+") is still open")}function mu(e){const n=this;n.parser=r;function r(a){return cu(a,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function pu(e,n){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,r),e.applyData(n,r)}function hu(e,n){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,r),[e.applyData(n,r),{type:"text",value:`
`}]}function gu(e,n){const r=n.value?n.value+`
`:"",a={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(a.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:a,children:[{type:"text",value:r}]};return n.meta&&(s.data={meta:n.meta}),e.patch(n,s),s=e.applyData(n,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(n,s),s}function fu(e,n){const r={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function xu(e,n){const r={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function bu(e,n){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(n.identifier).toUpperCase(),i=$e(a.toLowerCase()),s=e.footnoteOrder.indexOf(a);let o,l=e.footnoteCounts.get(a);l===void 0?(l=0,e.footnoteOrder.push(a),o=e.footnoteOrder.length):o=s+1,l+=1,e.footnoteCounts.set(a,l);const u={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+i,id:r+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(n,c),e.applyData(n,c)}function yu(e,n){const r={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function vu(e,n){if(e.options.allowDangerousHtml){const r={type:"raw",value:n.value};return e.patch(n,r),e.applyData(n,r)}}function _a(e,n){const r=n.referenceType;let a="]";if(r==="collapsed"?a+="[]":r==="full"&&(a+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+a}];const i=e.all(n),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=a:i.push({type:"text",value:a}),i}function ku(e,n){const r=String(n.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return _a(e,n);const i={src:$e(a.url||""),alt:n.alt};a.title!==null&&a.title!==void 0&&(i.title=a.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,s),e.applyData(n,s)}function ju(e,n){const r={src:$e(n.url)};n.alt!==null&&n.alt!==void 0&&(r.alt=n.alt),n.title!==null&&n.title!==void 0&&(r.title=n.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(n,a),e.applyData(n,a)}function wu(e,n){const r={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,r);const a={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(n,a),e.applyData(n,a)}function Nu(e,n){const r=String(n.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return _a(e,n);const i={href:$e(a.url||"")};a.title!==null&&a.title!==void 0&&(i.title=a.title);const s={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,s),e.applyData(n,s)}function Cu(e,n){const r={href:$e(n.url)};n.title!==null&&n.title!==void 0&&(r.title=n.title);const a={type:"element",tagName:"a",properties:r,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Su(e,n,r){const a=e.all(n),i=r?Iu(r):Wa(n),s={},o=[];if(typeof n.checked=="boolean"){const d=a[0];let m;d&&d.type==="element"&&d.tagName==="p"?m=d:(m={type:"element",tagName:"p",properties:{},children:[]},a.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<a.length;){const d=a[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const u=a[a.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:s,children:o};return e.patch(n,c),e.applyData(n,c)}function Iu(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const r=e.children;let a=-1;for(;!n&&++a<r.length;)n=Wa(r[a])}return n}function Wa(e){const n=e.spread;return n??e.children.length>1}function Au(e,n){const r={},a=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(r.start=n.start);++i<a.length;){const o=a[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const s={type:"element",tagName:n.ordered?"ol":"ul",properties:r,children:e.wrap(a,!0)};return e.patch(n,s),e.applyData(n,s)}function Pu(e,n){const r={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Tu(e,n){const r={type:"root",children:e.wrap(e.all(n))};return e.patch(n,r),e.applyData(n,r)}function Ru(e,n){const r={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Eu(e,n){const r=e.all(n),a=r.shift(),i=[];if(a){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(n.children[0],o),i.push(o)}if(r.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},l=yn(n.children[1]),u=ka(n.children[n.children.length-1]);l&&u&&(o.position={start:l,end:u}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,s),e.applyData(n,s)}function Mu(e,n,r){const a=r?r.children:void 0,s=(a?a.indexOf(n):1)===0?"th":"td",o=r&&r.type==="table"?r.align:void 0,l=o?o.length:n.children.length;let u=-1;const c=[];for(;++u<l;){const m=n.children[u],h={},p=o?o[u]:void 0;p&&(h.align=p);let k={type:"element",tagName:s,properties:h,children:[]};m&&(k.children=e.all(m),e.patch(m,k),k=e.applyData(m,k)),c.push(k)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(n,d),e.applyData(n,d)}function Du(e,n){const r={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}const Cr=9,Sr=32;function zu(e){const n=String(e),r=/\r?\n|\r/g;let a=r.exec(n),i=0;const s=[];for(;a;)s.push(Ir(n.slice(i,a.index),i>0,!0),a[0]),i=a.index+a[0].length,a=r.exec(n);return s.push(Ir(n.slice(i),i>0,!1)),s.join("")}function Ir(e,n,r){let a=0,i=e.length;if(n){let s=e.codePointAt(a);for(;s===Cr||s===Sr;)a++,s=e.codePointAt(a)}if(r){let s=e.codePointAt(i-1);for(;s===Cr||s===Sr;)i--,s=e.codePointAt(i-1)}return i>a?e.slice(a,i):""}function Ou(e,n){const r={type:"text",value:zu(String(n.value))};return e.patch(n,r),e.applyData(n,r)}function Lu(e,n){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,r),e.applyData(n,r)}const Bu={blockquote:pu,break:hu,code:gu,delete:fu,emphasis:xu,footnoteReference:bu,heading:yu,html:vu,imageReference:ku,image:ju,inlineCode:wu,linkReference:Nu,link:Cu,listItem:Su,list:Au,paragraph:Pu,root:Tu,strong:Ru,table:Eu,tableCell:Du,tableRow:Mu,text:Ou,thematicBreak:Lu,toml:gt,yaml:gt,definition:gt,footnoteDefinition:gt};function gt(){}const Ua=-1,Tt=0,st=1,Ct=2,Sn=3,In=4,An=5,Pn=6,Ha=7,Va=8,Ar=typeof self=="object"?self:globalThis,Fu=(e,n)=>{const r=(i,s)=>(e.set(s,i),i),a=i=>{if(e.has(i))return e.get(i);const[s,o]=n[i];switch(s){case Tt:case Ua:return r(o,i);case st:{const l=r([],i);for(const u of o)l.push(a(u));return l}case Ct:{const l=r({},i);for(const[u,c]of o)l[a(u)]=a(c);return l}case Sn:return r(new Date(o),i);case In:{const{source:l,flags:u}=o;return r(new RegExp(l,u),i)}case An:{const l=r(new Map,i);for(const[u,c]of o)l.set(a(u),a(c));return l}case Pn:{const l=r(new Set,i);for(const u of o)l.add(a(u));return l}case Ha:{const{name:l,message:u}=o;return r(new Ar[l](u),i)}case Va:return r(BigInt(o),i);case"BigInt":return r(Object(BigInt(o)),i);case"ArrayBuffer":return r(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return r(new DataView(l),o)}}return r(new Ar[s](o),i)};return a},Pr=e=>Fu(new Map,e)(0),We="",{toString:_u}={},{keys:Wu}=Object,tt=e=>{const n=typeof e;if(n!=="object"||!e)return[Tt,n];const r=_u.call(e).slice(8,-1);switch(r){case"Array":return[st,We];case"Object":return[Ct,We];case"Date":return[Sn,We];case"RegExp":return[In,We];case"Map":return[An,We];case"Set":return[Pn,We];case"DataView":return[st,r]}return r.includes("Array")?[st,r]:r.includes("Error")?[Ha,r]:[Ct,r]},ft=([e,n])=>e===Tt&&(n==="function"||n==="symbol"),Uu=(e,n,r,a)=>{const i=(o,l)=>{const u=a.push(o)-1;return r.set(l,u),u},s=o=>{if(r.has(o))return r.get(o);let[l,u]=tt(o);switch(l){case Tt:{let d=o;switch(u){case"bigint":l=Va,d=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([Ua],o)}return i([l,d],o)}case st:{if(u){let h=o;return u==="DataView"?h=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(h=new Uint8Array(o)),i([u,[...h]],o)}const d=[],m=i([l,d],o);for(const h of o)d.push(s(h));return m}case Ct:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(n&&"toJSON"in o)return s(o.toJSON());const d=[],m=i([l,d],o);for(const h of Wu(o))(e||!ft(tt(o[h])))&&d.push([s(h),s(o[h])]);return m}case Sn:return i([l,o.toISOString()],o);case In:{const{source:d,flags:m}=o;return i([l,{source:d,flags:m}],o)}case An:{const d=[],m=i([l,d],o);for(const[h,p]of o)(e||!(ft(tt(h))||ft(tt(p))))&&d.push([s(h),s(p)]);return m}case Pn:{const d=[],m=i([l,d],o);for(const h of o)(e||!ft(tt(h)))&&d.push(s(h));return m}}const{message:c}=o;return i([l,{name:u,message:c}],o)};return s},Tr=(e,{json:n,lossy:r}={})=>{const a=[];return Uu(!(n||r),!!n,new Map,a)(e),a},St=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Pr(Tr(e,n)):structuredClone(e):(e,n)=>Pr(Tr(e,n));function Hu(e,n){const r=[{type:"text",value:"↩"}];return n>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),r}function Vu(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function qu(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||Hu,a=e.options.footnoteBackLabel||Vu,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),m=String(c.identifier).toUpperCase(),h=$e(m.toLowerCase());let p=0;const k=[],j=e.footnoteCounts.get(m);for(;j!==void 0&&++p<=j;){k.length>0&&k.push({type:"text",value:" "});let z=typeof r=="string"?r:r(u,p);typeof z=="string"&&(z={type:"text",value:z}),k.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(u,p),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]})}const w=d[d.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const z=w.children[w.children.length-1];z&&z.type==="text"?z.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...k)}else d.push(...k);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(d,!0)};e.patch(c,y),l.push(y)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...St(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const qa=(function(e){if(e==null)return Qu;if(typeof e=="function")return Rt(e);if(typeof e=="object")return Array.isArray(e)?Gu(e):$u(e);if(typeof e=="string")return Ku(e);throw new Error("Expected function, string, or object as test")});function Gu(e){const n=[];let r=-1;for(;++r<e.length;)n[r]=qa(e[r]);return Rt(a);function a(...i){let s=-1;for(;++s<n.length;)if(n[s].apply(this,i))return!0;return!1}}function $u(e){const n=e;return Rt(r);function r(a){const i=a;let s;for(s in e)if(i[s]!==n[s])return!1;return!0}}function Ku(e){return Rt(n);function n(r){return r&&r.type===e}}function Rt(e){return n;function n(r,a,i){return!!(Yu(r)&&e.call(this,r,typeof a=="number"?a:void 0,i||void 0))}}function Qu(){return!0}function Yu(e){return e!==null&&typeof e=="object"&&"type"in e}const Ga=[],Ju=!0,Rr=!1,Xu="skip";function Zu(e,n,r,a){let i;typeof n=="function"&&typeof r!="function"?(a=r,r=n):i=n;const s=qa(i),o=a?-1:1;l(e,void 0,[])();function l(u,c,d){const m=u&&typeof u=="object"?u:{};if(typeof m.type=="string"){const p=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Ga,k,j,w;if((!n||s(u,c,d[d.length-1]||void 0))&&(p=ed(r(u,d)),p[0]===Rr))return p;if("children"in u&&u.children){const y=u;if(y.children&&p[0]!==Xu)for(j=(a?y.children.length:-1)+o,w=d.concat(y);j>-1&&j<y.children.length;){const z=y.children[j];if(k=l(z,j,w)(),k[0]===Rr)return k;j=typeof k[1]=="number"?k[1]:j+o}}return p}}}function ed(e){return Array.isArray(e)?e:typeof e=="number"?[Ju,e]:e==null?Ga:[e]}function $a(e,n,r,a){let i,s,o;typeof n=="function"&&typeof r!="function"?(s=void 0,o=n,i=r):(s=n,o=r,i=a),Zu(e,s,l,i);function l(u,c){const d=c[c.length-1],m=d?d.children.indexOf(u):void 0;return o(u,m,d)}}const un={}.hasOwnProperty,td={};function nd(e,n){const r=n||td,a=new Map,i=new Map,s=new Map,o={...Bu,...r.handlers},l={all:c,applyData:ad,definitionById:a,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:u,options:r,patch:rd,wrap:sd};return $a(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const m=d.type==="definition"?a:i,h=String(d.identifier).toUpperCase();m.has(h)||m.set(h,d)}}),l;function u(d,m){const h=d.type,p=l.handlers[h];if(un.call(l.handlers,h)&&p)return p(l,d,m);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in d){const{children:j,...w}=d,y=St(w);return y.children=l.all(d),y}return St(d)}return(l.options.unknownHandler||id)(l,d,m)}function c(d){const m=[];if("children"in d){const h=d.children;let p=-1;for(;++p<h.length;){const k=l.one(h[p],d);if(k){if(p&&h[p-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=Er(k.value)),!Array.isArray(k)&&k.type==="element")){const j=k.children[0];j&&j.type==="text"&&(j.value=Er(j.value))}Array.isArray(k)?m.push(...k):m.push(k)}}}return m}}function rd(e,n){e.position&&(n.position=_o(e))}function ad(e,n){let r=n;if(e&&e.data){const a=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof a=="string")if(r.type==="element")r.tagName=a;else{const o="children"in r?r.children:[r];r={type:"element",tagName:a,properties:{},children:o}}r.type==="element"&&s&&Object.assign(r.properties,St(s)),"children"in r&&r.children&&i!==null&&i!==void 0&&(r.children=i)}return r}function id(e,n){const r=n.data||{},a="value"in n&&!(un.call(r,"hProperties")||un.call(r,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function sd(e,n){const r=[];let a=-1;for(n&&r.push({type:"text",value:`
`});++a<e.length;)a&&r.push({type:"text",value:`
`}),r.push(e[a]);return n&&e.length>0&&r.push({type:"text",value:`
`}),r}function Er(e){let n=0,r=e.charCodeAt(n);for(;r===9||r===32;)n++,r=e.charCodeAt(n);return e.slice(n)}function Mr(e,n){const r=nd(e,n),a=r.one(e,void 0),i=qu(r),s=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function od(e,n){return e&&"run"in e?async function(r,a){const i=Mr(r,{file:a,...n});await e.run(i,a)}:function(r,a){return Mr(r,{file:a,...e||n})}}function Dr(e){if(e)throw e}var Ht,zr;function ld(){if(zr)return Ht;zr=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=function(c){return typeof Array.isArray=="function"?Array.isArray(c):n.call(c)==="[object Array]"},s=function(c){if(!c||n.call(c)!=="[object Object]")return!1;var d=e.call(c,"constructor"),m=c.constructor&&c.constructor.prototype&&e.call(c.constructor.prototype,"isPrototypeOf");if(c.constructor&&!d&&!m)return!1;var h;for(h in c);return typeof h>"u"||e.call(c,h)},o=function(c,d){r&&d.name==="__proto__"?r(c,d.name,{enumerable:!0,configurable:!0,value:d.newValue,writable:!0}):c[d.name]=d.newValue},l=function(c,d){if(d==="__proto__")if(e.call(c,d)){if(a)return a(c,d).value}else return;return c[d]};return Ht=function u(){var c,d,m,h,p,k,j=arguments[0],w=1,y=arguments.length,z=!1;for(typeof j=="boolean"&&(z=j,j=arguments[1]||{},w=2),(j==null||typeof j!="object"&&typeof j!="function")&&(j={});w<y;++w)if(c=arguments[w],c!=null)for(d in c)m=l(j,d),h=l(c,d),j!==h&&(z&&h&&(s(h)||(p=i(h)))?(p?(p=!1,k=m&&i(m)?m:[]):k=m&&s(m)?m:{},o(j,{name:d,newValue:u(z,k,h)})):typeof h<"u"&&o(j,{name:d,newValue:h}));return j},Ht}var cd=ld();const Vt=Wr(cd);function dn(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ud(){const e=[],n={run:r,use:a};return n;function r(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(u,...c){const d=e[++s];let m=-1;if(u){o(u);return}for(;++m<i.length;)(c[m]===null||c[m]===void 0)&&(c[m]=i[m]);i=c,d?dd(d,l)(...c):o(null,...c)}}function a(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function dd(e,n){let r;return a;function a(...o){const l=e.length>o.length;let u;l&&o.push(i);try{u=e.apply(this,o)}catch(c){const d=c;if(l&&r)throw d;return i(d)}l||(u&&u.then&&typeof u.then=="function"?u.then(s,i):u instanceof Error?i(u):s(u))}function i(o,...l){r||(r=!0,n(o,...l))}function s(o){i(null,o)}}const je={basename:md,dirname:pd,extname:hd,join:gd,sep:"/"};function md(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');ut(e);let r=0,a=-1,i=e.length,s;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){r=i+1;break}}else a<0&&(s=!0,a=i+1);return a<0?"":e.slice(r,a)}if(n===e)return"";let o=-1,l=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){r=i+1;break}}else o<0&&(s=!0,o=i+1),l>-1&&(e.codePointAt(i)===n.codePointAt(l--)?l<0&&(a=i):(l=-1,a=o));return r===a?a=o:a<0&&(a=e.length),e.slice(r,a)}function pd(e){if(ut(e),e.length===0)return".";let n=-1,r=e.length,a;for(;--r;)if(e.codePointAt(r)===47){if(a){n=r;break}}else a||(a=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function hd(e){ut(e);let n=e.length,r=-1,a=0,i=-1,s=0,o;for(;n--;){const l=e.codePointAt(n);if(l===47){if(o){a=n+1;break}continue}r<0&&(o=!0,r=n+1),l===46?i<0?i=n:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||r<0||s===0||s===1&&i===r-1&&i===a+1?"":e.slice(i,r)}function gd(...e){let n=-1,r;for(;++n<e.length;)ut(e[n]),e[n]&&(r=r===void 0?e[n]:r+"/"+e[n]);return r===void 0?".":fd(r)}function fd(e){ut(e);const n=e.codePointAt(0)===47;let r=xd(e,!n);return r.length===0&&!n&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),n?"/"+r:r}function xd(e,n){let r="",a=0,i=-1,s=0,o=-1,l,u;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(r.length<2||a!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(u=r.lastIndexOf("/"),u!==r.length-1){u<0?(r="",a=0):(r=r.slice(0,u),a=r.length-1-r.lastIndexOf("/")),i=o,s=0;continue}}else if(r.length>0){r="",a=0,i=o,s=0;continue}}n&&(r=r.length>0?r+"/..":"..",a=2)}else r.length>0?r+="/"+e.slice(i+1,o):r=e.slice(i+1,o),a=o-i-1;i=o,s=0}else l===46&&s>-1?s++:s=-1}return r}function ut(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const bd={cwd:yd};function yd(){return"/"}function mn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function vd(e){if(typeof e=="string")e=new URL(e);else if(!mn(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return kd(e)}function kd(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const n=e.pathname;let r=-1;for(;++r<n.length;)if(n.codePointAt(r)===37&&n.codePointAt(r+1)===50){const a=n.codePointAt(r+2);if(a===70||a===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const qt=["history","path","basename","stem","extname","dirname"];class Ka{constructor(n){let r;n?mn(n)?r={path:n}:typeof n=="string"||jd(n)?r={value:n}:r=n:r={},this.cwd="cwd"in r?"":bd.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<qt.length;){const s=qt[a];s in r&&r[s]!==void 0&&r[s]!==null&&(this[s]=s==="history"?[...r[s]]:r[s])}let i;for(i in r)qt.includes(i)||(this[i]=r[i])}get basename(){return typeof this.path=="string"?je.basename(this.path):void 0}set basename(n){$t(n,"basename"),Gt(n,"basename"),this.path=je.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?je.dirname(this.path):void 0}set dirname(n){Or(this.basename,"dirname"),this.path=je.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?je.extname(this.path):void 0}set extname(n){if(Gt(n,"extname"),Or(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=je.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){mn(n)&&(n=vd(n)),$t(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?je.basename(this.path,this.extname):void 0}set stem(n){$t(n,"stem"),Gt(n,"stem"),this.path=je.join(this.dirname||"",n+(this.extname||""))}fail(n,r,a){const i=this.message(n,r,a);throw i.fatal=!0,i}info(n,r,a){const i=this.message(n,r,a);return i.fatal=void 0,i}message(n,r,a){const i=new ie(n,r,a);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Gt(e,n){if(e&&e.includes(je.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+je.sep+"`")}function $t(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Or(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function jd(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const wd=(function(e){const a=this.constructor.prototype,i=a[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,a),s}),Nd={}.hasOwnProperty;class Tn extends wd{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ud()}copy(){const n=new Tn;let r=-1;for(;++r<this.attachers.length;){const a=this.attachers[r];n.use(...a)}return n.data(Vt(!0,{},this.namespace)),n}data(n,r){return typeof n=="string"?arguments.length===2?(Yt("data",this.frozen),this.namespace[n]=r,this):Nd.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Yt("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const i=r.call(n,...a);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const r=xt(n),a=this.parser||this.Parser;return Kt("parse",a),a(String(r),r)}process(n,r){const a=this;return this.freeze(),Kt("process",this.parser||this.Parser),Qt("process",this.compiler||this.Compiler),r?i(void 0,r):new Promise(i);function i(s,o){const l=xt(n),u=a.parse(l);a.run(u,l,function(d,m,h){if(d||!m||!h)return c(d);const p=m,k=a.stringify(p,h);Id(k)?h.value=k:h.result=k,c(d,h)});function c(d,m){d||!m?o(d):s?s(m):r(void 0,m)}}}processSync(n){let r=!1,a;return this.freeze(),Kt("processSync",this.parser||this.Parser),Qt("processSync",this.compiler||this.Compiler),this.process(n,i),Br("processSync","process",r),a;function i(s,o){r=!0,Dr(s),a=o}}run(n,r,a){Lr(n),this.freeze();const i=this.transformers;return!a&&typeof r=="function"&&(a=r,r=void 0),a?s(void 0,a):new Promise(s);function s(o,l){const u=xt(r);i.run(n,u,c);function c(d,m,h){const p=m||n;d?l(d):o?o(p):a(void 0,p,h)}}}runSync(n,r){let a=!1,i;return this.run(n,r,s),Br("runSync","run",a),i;function s(o,l){Dr(o),i=l,a=!0}}stringify(n,r){this.freeze();const a=xt(r),i=this.compiler||this.Compiler;return Qt("stringify",i),Lr(n),i(n,a)}use(n,...r){const a=this.attachers,i=this.namespace;if(Yt("use",this.frozen),n!=null)if(typeof n=="function")u(n,r);else if(typeof n=="object")Array.isArray(n)?l(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function s(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...m]=c;u(d,m)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=Vt(!0,i.settings,c.settings))}function l(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const m=c[d];s(m)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let m=-1,h=-1;for(;++m<a.length;)if(a[m][0]===c){h=m;break}if(h===-1)a.push([c,...d]);else if(d.length>0){let[p,...k]=d;const j=a[h][1];dn(j)&&dn(p)&&(p=Vt(!0,j,p)),a[h]=[c,p,...k]}}}}const Cd=new Tn().freeze();function Kt(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Qt(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Yt(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Lr(e){if(!dn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Br(e,n,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function xt(e){return Sd(e)?e:new Ka(e)}function Sd(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Id(e){return typeof e=="string"||Ad(e)}function Ad(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Pd="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Fr=[],_r={allowDangerousHtml:!0},Td=/^(https?|ircs?|mailto|xmpp)$/i,Rd=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ed(e){const n=Md(e),r=Dd(e);return zd(n.runSync(n.parse(r),r),e)}function Md(e){const n=e.rehypePlugins||Fr,r=e.remarkPlugins||Fr,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,..._r}:_r;return Cd().use(mu).use(r).use(od,a).use(n)}function Dd(e){const n=e.children||"",r=new Ka;return typeof n=="string"&&(r.value=n),r}function zd(e,n){const r=n.allowedElements,a=n.allowElement,i=n.components,s=n.disallowedElements,o=n.skipHtml,l=n.unwrapDisallowed,u=n.urlTransform||Od;for(const d of Rd)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Pd+d.id,void 0);return $a(e,c),qo(e,{Fragment:t.Fragment,components:i,ignoreInvalidStyle:!0,jsx:t.jsx,jsxs:t.jsxs,passKeys:!0,passNode:!0});function c(d,m,h){if(d.type==="raw"&&h&&typeof m=="number")return o?h.children.splice(m,1):h.children[m]={type:"text",value:d.value},m;if(d.type==="element"){let p;for(p in _t)if(Object.hasOwn(_t,p)&&Object.hasOwn(d.properties,p)){const k=d.properties[p],j=_t[p];(j===null||j.includes(d.tagName))&&(d.properties[p]=u(String(k||""),p,d))}}if(d.type==="element"){let p=r?!r.includes(d.tagName):s?s.includes(d.tagName):!1;if(!p&&a&&typeof m=="number"&&(p=!a(d,m,h)),p&&h&&typeof m=="number")return l&&d.children?h.children.splice(m,1,...d.children):h.children.splice(m,1),m}}}function Od(e){const n=e.indexOf(":"),r=e.indexOf("?"),a=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||r!==-1&&n>r||a!==-1&&n>a||Td.test(e.slice(0,n))?e:""}function Ld(){const{slug:e}=si(),n=le.find(a=>a.slug===e);if(!n)return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[t.jsx("h1",{className:"text-4xl mb-4",children:"Article Not Found"}),t.jsxs(ae,{to:"/blog",className:"inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline",children:[t.jsx(en,{className:"w-4 h-4"}),"Back to Blog"]})]})});const r=le.filter(a=>a.slug!==n.slug&&a.category===n.category).slice(0,3);return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs(ae,{to:"/blog",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors mb-8",children:[t.jsx(en,{className:"w-4 h-4"}),"Kembali ke Blog"]}),t.jsxs("article",{children:[t.jsxs("header",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm",children:[t.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)] border border-border",children:n.category}),t.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[t.jsx(vt,{className:"w-4 h-4"}),t.jsx("span",{children:n.date})]}),t.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[t.jsx(Zt,{className:"w-4 h-4"}),t.jsx("span",{children:n.readTime})]})]}),t.jsx("h1",{className:"text-4xl sm:text-5xl mb-6",children:n.title}),t.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:n.excerpt}),t.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-border",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx("span",{className:"text-white",children:n.author.avatar})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm",children:"Written by"}),t.jsx("p",{className:"",children:n.author.name})]})]}),t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent rounded-lg transition-colors",children:[t.jsx(Wn,{className:"w-4 h-4"}),t.jsx("span",{className:"text-sm",children:"Share"})]})]})]}),t.jsx("div",{className:"relative h-96 rounded-2xl overflow-hidden mb-8",children:t.jsx(Nt,{src:n.image,alt:n.title,className:"w-full h-full object-cover"})}),t.jsx("div",{className:"prose prose-lg max-w-none",children:t.jsx(Ed,{components:{h1:({node:a,...i})=>t.jsx("h1",{className:"text-3xl sm:text-4xl mt-8 mb-4",...i}),h2:({node:a,...i})=>t.jsx("h2",{className:"text-2xl sm:text-3xl mt-8 mb-4",...i}),h3:({node:a,...i})=>t.jsx("h3",{className:"text-xl sm:text-2xl mt-6 mb-3",...i}),h4:({node:a,...i})=>t.jsx("h4",{className:"text-lg sm:text-xl mt-4 mb-2",...i}),p:({node:a,...i})=>t.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",...i}),ul:({node:a,...i})=>t.jsx("ul",{className:"list-disc list-inside space-y-2 mb-4 text-muted-foreground",...i}),ol:({node:a,...i})=>t.jsx("ol",{className:"list-decimal list-inside space-y-2 mb-4 text-muted-foreground",...i}),li:({node:a,...i})=>t.jsx("li",{className:"ml-4",...i}),strong:({node:a,...i})=>t.jsx("strong",{className:"text-foreground",...i}),code:({node:a,...i})=>t.jsx("code",{className:"bg-secondary px-2 py-1 rounded text-sm",...i}),pre:({node:a,...i})=>t.jsx("pre",{className:"bg-secondary p-4 rounded-lg overflow-x-auto mb-4",...i}),blockquote:({node:a,...i})=>t.jsx("blockquote",{className:"border-l-4 border-[var(--brand-primary)] pl-4 italic my-4 text-muted-foreground",...i})},children:n.content})}),t.jsx("div",{className:"mt-12 pt-8 border-t border-border",children:t.jsx("div",{className:"flex items-center justify-between",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-sm text-muted-foreground",children:"Share this article:"}),t.jsx("button",{className:"p-2 hover:bg-secondary rounded-lg transition-colors",children:t.jsx(Wn,{className:"w-4 h-4"})})]})})}),t.jsx("div",{className:"mt-8 p-6 bg-secondary/50 rounded-xl border border-border",children:t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:t.jsx(Wi,{className:"w-8 h-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-1",children:"About the Author"}),t.jsx("p",{className:"mb-2",children:n.author.name}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Expert in customer service and AI technology with over 10 years of experience helping businesses with digital transformation."})]})]})})]}),r.length>0&&t.jsxs("div",{className:"mt-16",children:[t.jsxs("h2",{className:"text-2xl mb-8",children:["Related"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Articles"})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:r.map(a=>t.jsxs(ae,{to:`/blog/${a.slug}`,className:"group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--brand-primary)]/20 transition-all",children:[t.jsx("div",{className:"relative h-40 overflow-hidden",children:t.jsx(Nt,{src:a.image,alt:a.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),t.jsxs("div",{className:"p-4",children:[t.jsx("h3",{className:"text-sm mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:a.title}),t.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[t.jsx(vt,{className:"w-3 h-3"}),t.jsx("span",{children:a.date})]})]})]},a.slug))})]}),t.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl text-center text-white",children:[t.jsx("h2",{className:"text-2xl sm:text-3xl mb-4",children:"Ready to Transform Your Customer Service?"}),t.jsx("p",{className:"text-lg mb-6 opacity-90",children:"Join thousands of businesses that have experienced the benefits of AI"}),t.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:"Contact Us"})]})]})})}function Bd(){const[e,n]=U.useState(!0);return t.jsxs("main",{className:"pt-20 pb-0 min-h-screen flex flex-col",children:[t.jsx("div",{className:"px-4 sm:px-6 lg:px-8 py-6 border-b border-border bg-card/50 backdrop-blur-sm",children:t.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[t.jsx("div",{className:"flex items-center gap-4",children:t.jsxs(ae,{to:"/",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:[t.jsx(en,{className:"w-4 h-4"}),"Back to Home"]})}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Un,{className:"w-5 h-5 text-[var(--brand-primary)]"}),t.jsx("h1",{className:"text-lg font-semibold",children:"Book a Demo"})]}),t.jsx("div",{className:"w-24"})]})}),t.jsxs("div",{className:"flex-1 w-full relative",children:[e&&t.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-background gap-6",children:[t.jsxs("div",{className:"relative w-20 h-20",children:[t.jsx("div",{className:"absolute inset-0 rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-primary)",animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite"}}),t.jsx("div",{className:"absolute inset-[6px] rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-gradient-end)",animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.15s"}}),t.jsx("div",{className:"absolute inset-[12px] rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-primary)",opacity:.5,animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.3s"}}),t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:t.jsx(Un,{className:"w-6 h-6 text-[var(--brand-primary)]",style:{animation:"demo-pulse 2s ease-in-out infinite"}})})]}),t.jsxs("div",{className:"text-center space-y-2",children:[t.jsx("p",{className:"text-lg font-medium text-foreground",children:"Preparing your booking"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading schedule…"})]}),t.jsx("div",{className:"w-48 h-1 rounded-full bg-border overflow-hidden",children:t.jsx("div",{className:"h-full rounded-full",style:{background:"linear-gradient(90deg, var(--brand-gradient-start), var(--brand-gradient-end))",animation:"demo-shimmer 1.5s ease-in-out infinite"}})})]}),t.jsx("iframe",{src:"https://calendly.com/wanriparasians/konsultasi-omnichannel",title:"Book a Demo - Calendly",className:"w-full h-full border-0",style:{minHeight:"calc(100vh - 8rem)",opacity:e?0:1,transition:"opacity 0.5s ease-in-out"},loading:"lazy",allow:"payment",onLoad:()=>n(!1)})]}),t.jsx("style",{children:`
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
      `})]})}const Ee=[{id:1,title:"Buka Menu Integrasi",shortTitle:"Menu Integrasi",description:"Login ke dashboard utama Anda. Pada panel menu sebelah kiri, di bawah kategori COMMUNICATION, klik menu WA Chat atau arahkan ke halaman Integrate WABA (WhatsApp Business API).",tips:"Pastikan Anda sudah masuk ke akun ResponPintar dengan kredensial yang benar sebelum memulai proses integrasi.",image:"/tutorial-connected-whatsapp/step 1.png",icon:nt},{id:2,title:'Pilih Tab "QR Code Connection"',shortTitle:"QR Code Connection",description:"Di halaman integrasi, Anda akan melihat beberapa opsi koneksi yang tersedia. Klik tab QR Code Connection yang berada di sebelah kanan untuk menggunakan metode pemindaian kode yang cepat dan instan.",tips:"Metode QR Code Connection adalah cara termudah untuk menghubungkan WhatsApp Anda tanpa perlu konfigurasi teknis yang rumit.",image:"/tutorial-connected-whatsapp/step 2.png",icon:Hn},{id:3,title:"Buat QR Code",shortTitle:"Generate QR Code",description:'Pada halaman ini, berikan nama instance yang mudah dikenali (misalnya: "WhatsApp Tim Sales" atau "CS Utama") pada kolom yang tersedia. Setelah itu, klik tombol hijau bertuliskan Generate QR Code di bagian bawah layar.',tips:"Gunakan nama yang deskriptif agar mudah diidentifikasi, terutama jika tim Anda mengelola lebih dari satu nomor WhatsApp.",image:"/tutorial-connected-whatsapp/step 3.png",icon:Hn},{id:4,title:"Scan dengan Handphone Anda",shortTitle:"Scan QR Code",description:"Sistem akan menampilkan QR Code di sebelah kanan layar komputer Anda. Ambil handphone yang nomor WhatsApp-nya ingin dihubungkan, lalu ikuti langkah berikut:",subSteps:["Buka aplikasi WhatsApp di handphone Anda.","Ketuk ikon Titik Tiga (Menu) di pojok kanan atas atau buka Pengaturan (Settings), lalu pilih Linked Devices (Perangkat Tertaut).","Ketuk tombol Link a Device (Tautkan Perangkat).","Arahkan kamera handphone Anda ke layar komputer untuk memindai QR Code yang baru saja dibuat."],tips:"QR Code memiliki batas waktu aktif. Jika kedaluwarsa sebelum dipindai, klik tombol Refresh untuk membuat QR Code baru.",image:"/tutorial-connected-whatsapp/step 4.png",icon:$r},{id:5,title:"Tunggu Status Terhubung",shortTitle:"Status Terhubung",description:'Setelah QR Code berhasil dipindai, tunggu beberapa detik. Layar akan menampilkan notifikasi "Account Connected" dengan tanda centang hijau. Ini berarti WhatsApp Anda sudah berhasil ditautkan dan aktif di workspace ini.',tips:"Proses koneksi biasanya berlangsung kurang dari 30 detik. Pastikan kedua perangkat (komputer dan handphone) terhubung ke internet yang stabil.",image:"/tutorial-connected-whatsapp/step 5.png",icon:Kr},{id:6,title:"Mulai Membalas Pesan",shortTitle:"Mulai Balas Pesan",description:"Selesai! Sekarang Anda bisa masuk kembali ke menu WA Chat > Conversations. Semua pesan masuk dari pelanggan di WhatsApp tersebut sudah tersinkronisasi dan Anda maupun tim customer service dapat langsung membalasnya secara real-time dari satu platform terpusat.",tips:"Anda dapat menghubungkan beberapa nomor WhatsApp sekaligus dengan mengulangi proses ini. Semua percakapan akan terkelola dari satu dashboard yang sama.",image:"/tutorial-connected-whatsapp/step 6.png",icon:Qr}];function Fd(){const[e,n]=U.useState(0),r=Ee[e],a=r.icon;return t.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-14",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[t.jsx(nt,{className:"w-4 h-4 text-[var(--brand-primary)]"}),t.jsx("span",{className:"text-sm font-medium",children:"Tutorial Integrasi"})]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl mb-5 leading-tight tracking-tight",children:["Cara Menghubungkan"," ",t.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"WhatsApp"})," ","ke ResponPintar"]}),t.jsxs("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:["Integrasikan nomor WhatsApp bisnis Anda hanya dalam 6 langkah mudah menggunakan fitur"," ",t.jsx("strong",{className:"text-foreground",children:"QR Code Connection"})," — tanpa konfigurasi teknis yang rumit."]}),t.jsx("div",{className:"flex flex-wrap justify-center gap-6 mt-8",children:[{label:"Langkah Mudah",value:"6"},{label:"Waktu Setup",value:"< 2 Menit"},{label:"Tanpa Coding",value:"100%"}].map(i=>t.jsxs("div",{className:"flex flex-col items-center px-6 py-3 bg-card border border-border rounded-xl",children:[t.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:i.value}),t.jsx("span",{className:"text-xs text-muted-foreground mt-0.5",children:i.label})]},i.label))})]}),t.jsxs("div",{className:"grid lg:grid-cols-[300px_1fr] gap-8 items-start",children:[t.jsx("div",{className:"lg:sticky lg:top-28",children:t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-5 shadow-sm",children:[t.jsx("p",{className:"text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 px-1",children:"Langkah-langkah"}),t.jsx("nav",{className:"space-y-1",children:Ee.map((i,s)=>{i.icon;const o=s===e,l=s<e;return t.jsxs("button",{id:`tutorial-step-${i.id}`,onClick:()=>n(s),className:`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group
                        ${o?"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white shadow-md":l?"text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/5":"text-muted-foreground hover:bg-accent hover:text-foreground"}`,children:[t.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all
                        ${o?"bg-white/20":l?"bg-[var(--brand-primary)]/10":"bg-secondary"}`,children:l?t.jsx(Qr,{className:"w-4 h-4"}):t.jsx("span",{children:i.id})}),t.jsx("div",{className:"min-w-0 flex-1",children:t.jsx("p",{className:`text-sm font-medium truncate ${o?"text-white":""}`,children:i.shortTitle})}),o&&t.jsx(Ui,{className:"w-4 h-4 opacity-70 flex-shrink-0"})]},i.id)})}),t.jsxs("div",{className:"mt-5 pt-4 border-t border-border",children:[t.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground mb-2",children:[t.jsx("span",{children:"Progress"}),t.jsxs("span",{children:[e+1," / ",Ee.length]})]}),t.jsx("div",{className:"h-1.5 bg-secondary rounded-full overflow-hidden",children:t.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] transition-all duration-500",style:{width:`${(e+1)/Ee.length*100}%`}})})]})]})}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-7 shadow-sm",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[t.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0 shadow-md",children:t.jsx(a,{className:"w-7 h-7 text-white"})}),t.jsxs("div",{children:[t.jsxs("p",{className:"text-xs text-[var(--brand-primary)] font-semibold uppercase tracking-wider mb-1",children:["Langkah ",r.id," dari ",Ee.length]}),t.jsx("h2",{className:"text-2xl sm:text-3xl font-semibold text-foreground leading-tight",children:r.title})]})]}),t.jsx("p",{className:"text-base text-muted-foreground leading-relaxed mb-5",children:r.description}),r.subSteps&&t.jsx("ol",{className:"space-y-3 mb-5",children:r.subSteps.map((i,s)=>t.jsxs("li",{className:"flex gap-3",children:[t.jsx("span",{className:"w-6 h-6 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5",children:s+1}),t.jsx("p",{className:"text-sm text-foreground leading-relaxed",children:i})]},s))}),r.tips&&t.jsxs("div",{className:"flex gap-3 p-4 rounded-xl bg-[var(--brand-primary)]/5 border border-[var(--brand-primary)]/15",children:[t.jsx(Vn,{className:"w-4 h-4 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"}),t.jsxs("p",{className:"text-sm text-foreground/80 leading-relaxed",children:[t.jsx("strong",{className:"text-[var(--brand-primary)]",children:"Tips: "}),r.tips]})]})]}),t.jsxs("div",{className:"bg-card border border-border rounded-2xl overflow-hidden shadow-sm",children:[t.jsxs("div",{className:"px-6 py-4 border-b border-border flex items-center gap-3",children:[t.jsxs("div",{className:"flex gap-1.5",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-red-400"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-400"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-green-400"})]}),t.jsx("span",{className:"text-xs text-muted-foreground font-medium flex-1 text-center",children:"responpintar.com — dashboard.responpintar.com"})]}),t.jsxs("div",{className:"relative bg-secondary/30",children:[t.jsx("img",{src:r.image,alt:`Screenshot Langkah ${r.id}: ${r.title}`,className:"w-full object-cover object-top",style:{maxHeight:"520px"}}),t.jsxs("div",{className:"absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-full text-white text-xs font-semibold shadow-lg",children:["Langkah ",r.id]})]})]}),t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsx("button",{id:"tutorial-prev-btn",onClick:()=>n(i=>Math.max(0,i-1)),disabled:e===0,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-accent transition-all disabled:opacity-40 disabled:cursor-not-allowed",children:"← Sebelumnya"}),t.jsx("div",{className:"flex gap-1.5",children:Ee.map((i,s)=>t.jsx("button",{id:`tutorial-dot-${s+1}`,onClick:()=>n(s),className:`h-2 rounded-full transition-all duration-300
                      ${s===e?"w-6 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]":"w-2 bg-border hover:bg-muted-foreground"}`},s))}),e<Ee.length-1?t.jsxs("button",{id:"tutorial-next-btn",onClick:()=>n(i=>Math.min(Ee.length-1,i+1)),className:"flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md",children:["Selanjutnya ",t.jsx(ot,{className:"w-4 h-4"})]}):t.jsxs("a",{id:"tutorial-finish-btn",href:"https://dashboard.responpintar.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md",children:["Buka Dashboard ",t.jsx(Hi,{className:"w-4 h-4"})]})]})]})]}),t.jsxs("section",{className:"mt-16 bg-card border border-border rounded-2xl p-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:t.jsx(Vn,{className:"w-5 h-5 text-white"})}),t.jsx("h2",{className:"text-xl font-semibold",children:"Tips & Hal Penting"})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-5",children:[{icon:Kr,title:"Koneksi Internet Stabil",desc:"Pastikan handphone Anda memiliki koneksi internet yang stabil selama proses pemindaian agar integrasi berjalan lancar tanpa hambatan."},{icon:$r,title:"Putus Koneksi Kapan Saja",desc:"Jika ingin memutus koneksi, Anda bisa melakukannya kapan saja langsung dari menu Linked Devices di handphone Anda — aman dan mudah."},{icon:nt,title:"Multi-Nomor WhatsApp",desc:"ResponPintar mendukung pengelolaan beberapa nomor WhatsApp sekaligus dari satu dashboard yang sama untuk kemudahan tim Anda."}].map(i=>{const s=i.icon;return t.jsxs("div",{className:"flex gap-4 p-5 bg-secondary/40 rounded-xl border border-border hover:border-[var(--brand-primary)]/20 transition-all",children:[t.jsx("div",{className:"w-9 h-9 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0",children:t.jsx(s,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm font-semibold text-foreground mb-1",children:i.title}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:i.desc})]})]},i.title)})})]}),t.jsxs("section",{className:"mt-10 bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl p-10 text-center text-white",children:[t.jsx(nt,{className:"w-12 h-12 mx-auto mb-5 opacity-90"}),t.jsx("h2",{className:"text-2xl sm:text-3xl font-semibold mb-3",children:"Butuh Bantuan Lebih Lanjut?"}),t.jsx("p",{className:"text-base mb-7 opacity-90 max-w-xl mx-auto leading-relaxed",children:"Tim support ResponPintar siap membantu Anda 24/7. Hubungi kami melalui WhatsApp atau live chat langsung dari dashboard."}),t.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[t.jsx("a",{href:"https://wa.me/6282189885080?text=Halo,%20saya%20butuh%20bantuan%20untuk%20menghubungkan%20WhatsApp%20ke%20ResponPintar.",target:"_blank",rel:"noopener noreferrer",id:"cta-whatsapp-support",className:"px-7 py-3 bg-white text-[var(--brand-primary)] rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 text-sm",children:"Chat via WhatsApp"}),t.jsx("a",{href:"/demo",id:"cta-lihat-demo",className:"px-7 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all text-sm",children:"Lihat Demo Platform"})]})]})]})})}function _d(e){U.useEffect(()=>{window.chatwootSettings={hideMessageBubble:e.hideMessageBubble||!1,position:e.position||"right",locale:e.locale||"id",type:"expanded_bubble"};const n=document.createElement("script");return n.src=`${e.baseUrl}/packs/js/sdk.js`,n.async=!0,n.defer=!0,n.onload=()=>{window.chatwootSDK&&window.chatwootSDK.run({websiteToken:e.websiteToken,baseUrl:e.baseUrl})},n.onerror=()=>{console.error("Failed to load Chatwoot SDK")},document.body.appendChild(n),()=>{n.parentNode&&n.parentNode.removeChild(n);const r=document.querySelector(".woot-widget-holder");r&&r.remove()}},[e.websiteToken,e.baseUrl,e.hideMessageBubble,e.position,e.locale])}function Wd(){const[e,n]=U.useState("light");U.useEffect(()=>{const a=localStorage.getItem("theme");a?(n(a),document.documentElement.classList.toggle("dark",a==="dark")):(n("light"),document.documentElement.classList.remove("dark"))},[]);const r=()=>{const a=e==="light"?"dark":"light";n(a),document.documentElement.classList.toggle("dark",a==="dark"),localStorage.setItem("theme",a)};return _d({websiteToken:"AH84MtFe5Ux2XxicvHdu77PX",baseUrl:"https://chat.responpintar.com",position:"right",locale:"en"}),t.jsx(oi,{children:t.jsx(Qs,{children:t.jsxs("div",{className:"min-h-screen bg-background text-foreground transition-colors duration-300",children:[t.jsx(Ys,{theme:e,toggleTheme:r}),t.jsxs(li,{children:[t.jsx(Pe,{path:"/",element:t.jsx(uo,{})}),t.jsx(Pe,{path:"/privacy",element:t.jsx(mo,{})}),t.jsx(Pe,{path:"/terms",element:t.jsx(po,{})}),t.jsx(Pe,{path:"/about",element:t.jsx(ho,{})}),t.jsx(Pe,{path:"/blog",element:t.jsx(fo,{})}),t.jsx(Pe,{path:"/blog/:slug",element:t.jsx(Ld,{})}),t.jsx(Pe,{path:"/demo",element:t.jsx(Bd,{})}),t.jsx(Pe,{path:"/tutorial/connected-whatsapp",element:t.jsx(Fd,{})})]}),t.jsx(Js,{})]})})})}$i.createRoot(document.getElementById("root")).render(t.jsx(Wd,{}));
