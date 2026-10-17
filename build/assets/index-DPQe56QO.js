import{a as Er,b as Nr,r as f,L as X,g as fa,u as Sr,B as Cr,R as Ar,c as me}from"./vendor-react-BlSyxUUn.js";import{L as Ir,T as Br,I as Pr,F as Tr,Y as Rr,B as Dr,H as Et,S as Fr,a as Mr,b as ba,G as Lr,U as Or,c as zr,d as _r,e as Nt,X as Wr,f as ya,M as zn,g as ka,h as _n,i as Ce,E as Hr,j as Ur,k as un,l as xn,P as Zn,m as va,n as Vr,D as qr,A as ja,C as Kr,o as $r,p as Gr,q as Yr,r as Qr,R as Jr,Z as et,s as nt,t as Xr,u as dn,v as mn,w as Ye,x as Qe,y as St,z as tt,J as Ct,K as Je,Q as Wn,N as wa,W as Ea,O as Ze,V as Na,_ as at,$ as Sa,a0 as Hn,a1 as Zr,a2 as ei,a3 as ni,a4 as ti,a5 as ai,a6 as ri,a7 as ii,a8 as si,a9 as oi,aa as li}from"./vendor-icons-DTA0K0qe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var jn={exports:{}},We={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var At;function ci(){if(At)return We;At=1;var e=Er(),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(l,u,c){var d,m={},h=null,p=null;c!==void 0&&(h=""+c),u.key!==void 0&&(h=""+u.key),u.ref!==void 0&&(p=u.ref);for(d in u)r.call(u,d)&&!s.hasOwnProperty(d)&&(m[d]=u[d]);if(l&&l.defaultProps)for(d in u=l.defaultProps,u)m[d]===void 0&&(m[d]=u[d]);return{$$typeof:t,type:l,key:h,ref:p,props:m,_owner:i.current}}return We.Fragment=a,We.jsx=o,We.jsxs=o,We}var It;function ui(){return It||(It=1,jn.exports=ci()),jn.exports}var n=ui(),rn={},Bt;function di(){if(Bt)return rn;Bt=1;var e=Nr();return rn.createRoot=e.createRoot,rn.hydrateRoot=e.hydrateRoot,rn}var mi=di();function pi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"}))}const hi=f.forwardRef(pi);function gi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"}))}const xi=f.forwardRef(gi);function fi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"}))}const bi=f.forwardRef(fi);function yi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"}))}const ki=f.forwardRef(yi);function vi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))}const Ca=f.forwardRef(vi);function ji({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"}))}const wi=f.forwardRef(ji);function Ei({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const Ni=f.forwardRef(Ei);function Si({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const Aa=f.forwardRef(Si);function Ci({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"}))}const Ai=f.forwardRef(Ci);function Ii({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"}))}const Bi=f.forwardRef(Ii);function Pi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"}))}const Ti=f.forwardRef(Pi);function Ri({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))}const Di=f.forwardRef(Ri);function Fi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))}const Mi=f.forwardRef(Fi);function Li({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))}const Ia=f.forwardRef(Li);function Oi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))}const zi=f.forwardRef(Oi);function _i({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const Wi=f.forwardRef(_i);function Hi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"}))}const Ui=f.forwardRef(Hi);function Vi({title:e,titleId:t,...a},r){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?f.createElement("title",{id:t},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}))}const qi=f.forwardRef(Vi);function Ba(){return n.jsx("img",{src:"/logo.png",alt:"ResponPintar Logo",className:"w-full h-full object-contain"})}const Pa=f.createContext({isOpen:!1,openModal:()=>{},closeModal:()=>{}});function Ki({children:e}){const[t,a]=f.useState(!1);return n.jsx(Pa.Provider,{value:{isOpen:t,openModal:()=>a(!0),closeModal:()=>a(!1)},children:e})}function rt(){return f.useContext(Pa)}const Pt={positive:{border:"rgba(143,227,176,0.4)",color:"#8FE3B0",glow:"0 0 6px rgba(143,227,176,0.8)"},neutral:{border:"rgba(244,245,247,0.2)",color:"#AEB4BD",glow:""},pending:{border:"rgba(255,200,100,0.4)",color:"#FFC864",glow:"0 0 6px rgba(255,200,100,0.6)"}};function en({label:e,variant:t="positive",className:a=""}){const r=Pt[t]||Pt.positive;return n.jsxs("span",{className:`inline-flex items-center gap-2 whitespace-nowrap border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${a}`,style:{borderColor:r.border,color:r.color},children:[n.jsx("span",{"aria-hidden":"true",className:"h-[5px] w-[5px] rounded-full shrink-0",style:{backgroundColor:r.color,boxShadow:r.glow||void 0}}),e]})}function $i({theme:e,toggleTheme:t}){const{openModal:a}=rt();return n.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[rgba(244,245,247,0.08)] transition-all duration-300",children:n.jsx("div",{className:"max-w-[1400px] mx-auto px-6 lg:px-16",children:n.jsxs("div",{className:"flex items-center justify-between h-18 sm:h-20",children:[n.jsxs(X,{to:"/",className:"flex items-center gap-3 group text-[#E9EBEF] no-underline transition-opacity",children:[n.jsx("div",{className:"w-8 h-8 rounded border border-[rgba(244,245,247,0.14)] bg-[#111214] p-1 flex items-center justify-center group-hover:border-[#8FE3B0]/50 transition-colors",children:n.jsx(Ba,{})}),n.jsxs("div",{className:"flex flex-col",children:[n.jsx("span",{className:"font-bold tracking-tight text-base sm:text-lg text-[#E9EBEF] leading-tight",children:"Respon Pintar"}),n.jsx("span",{className:"font-mono text-[9px] uppercase tracking-[0.16em] text-[#636B76]",children:"Omnichannel Platform"})]})]}),n.jsxs("div",{className:"hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.14em]",children:[n.jsx("a",{href:"/#features",className:"text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors",children:"Features"}),n.jsx("a",{href:"/#use-cases",className:"text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors",children:"Use Cases"}),n.jsx("a",{href:"/#pricing",className:"text-[#AEB4BD] hover:text-[#E9EBEF] transition-colors",children:"Pricing"}),n.jsxs("button",{onClick:a,className:"text-[#8FE3B0] hover:text-[#8FE3B0]/80 transition-colors cursor-pointer flex items-center gap-1",children:[n.jsx("span",{children:"Try Demo"}),n.jsx("span",{children:"▸"})]})]}),n.jsxs("div",{className:"flex items-center gap-3.5",children:[n.jsx(en,{label:"OMNICHANNEL LIVE",variant:"positive",className:"hidden lg:inline-flex"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded border border-[rgba(244,245,247,0.1)] bg-[#111214] text-[#AEB4BD] hover:text-[#E9EBEF] hover:border-[rgba(244,245,247,0.25)] flex items-center justify-center transition-all cursor-pointer","aria-label":"Toggle theme",children:e==="light"?n.jsx(Mi,{className:"w-4 h-4 text-[#AEB4BD]"}):n.jsx(Wi,{className:"w-4 h-4 text-[#AEB4BD]"})}),n.jsx("a",{href:"https://crm.responpintar.com/auth/login",target:"_blank",rel:"noopener noreferrer",className:"border border-white bg-[#E9EBEF] text-[#0B0C0E] font-medium px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_12px_rgba(255,255,255,0.15)]",children:"Mulai Sekarang →"})]})]})})})}function Ta({className:e=""}){return n.jsx("hr",{className:`border-0 h-px ${e}`,style:{background:"linear-gradient(90deg, transparent 0%, rgba(90,96,112,0.5) 20%, rgba(200,205,213,0.35) 50%, rgba(90,96,112,0.5) 80%, transparent 100%)"}})}function Gi(){const e=new Date().getFullYear();return n.jsxs("footer",{className:"relative bg-[#0B0C0E] text-[#E9EBEF] border-t border-[rgba(244,245,247,0.08)] overflow-hidden",children:[n.jsx("div",{className:"border-b border-[rgba(244,245,247,0.06)] bg-[#111214]/60",children:n.jsxs("div",{className:"max-w-[1400px] mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#636B76] uppercase tracking-[0.14em]",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(en,{label:"ALL SYSTEMS OPERATIONAL",variant:"positive"}),n.jsx("span",{className:"hidden sm:inline",children:"· P95 LATENCY < 380MS"}),n.jsx("span",{className:"hidden md:inline",children:"· ISO 27001 COMPLIANT"})]}),n.jsx("div",{className:"text-[#8A9099]",children:n.jsx("span",{children:"RESPON PINTAR ORCHESTRATION LAYER v2.4"})})]})}),n.jsx("div",{className:"max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12",children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12",children:[n.jsxs("div",{className:"lg:col-span-2 space-y-5",children:[n.jsxs(X,{to:"/",className:"inline-flex items-center gap-3 no-underline",children:[n.jsx("div",{className:"w-8 h-8 rounded border border-[rgba(244,245,247,0.14)] bg-[#111214] p-1 flex items-center justify-center",children:n.jsx(Ba,{})}),n.jsx("span",{className:"text-xl font-bold tracking-tight text-[#E9EBEF]",children:"Respon Pintar"})]}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed max-w-sm font-normal",children:"Solusi platform omnichannel terdepan untuk integrasi WhatsApp Business API, Instagram DM, Telegram, dan Live Chat dalam satu dashboard terpusat dengan multi-CS inbox."}),n.jsx("div",{className:"flex items-center gap-2 pt-2",children:[{icon:Ir,href:"https://www.linkedin.com/company/109874968/",label:"LinkedIn"},{icon:Br,href:"#",label:"Twitter"},{icon:Pr,href:"#",label:"Instagram"},{icon:Tr,href:"#",label:"Facebook"},{icon:Rr,href:"#",label:"YouTube"}].map(t=>n.jsx("a",{href:t.href,"aria-label":t.label,className:"w-8 h-8 rounded border border-[rgba(244,245,247,0.1)] bg-white/[0.02] text-[#AEB4BD] hover:text-[#8FE3B0] hover:border-[#8FE3B0]/40 flex items-center justify-center transition-colors",children:n.jsx(t.icon,{className:"w-4 h-4"})},t.label))})]}),n.jsxs("div",{children:[n.jsx("p",{className:"label-mono text-[#E9EBEF] mb-5 tracking-[0.14em]",children:"Product"}),n.jsxs("ul",{className:"space-y-3 font-mono text-[12px] text-[#AEB4BD]",children:[n.jsx("li",{children:n.jsx("a",{href:"/#features",className:"hover:text-[#8FE3B0] transition-colors",children:"Omnichannel Inbox"})}),n.jsx("li",{children:n.jsx("a",{href:"/#use-cases",className:"hover:text-[#8FE3B0] transition-colors",children:"Industry Blueprints"})}),n.jsx("li",{children:n.jsx("a",{href:"/#pricing",className:"hover:text-[#8FE3B0] transition-colors",children:"Pricing Plans"})}),n.jsx("li",{children:n.jsx("a",{href:"https://api.responpintar.com",target:"_blank",rel:"noreferrer",className:"hover:text-[#8FE3B0] transition-colors",children:"API & Webhook Docs"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"label-mono text-[#E9EBEF] mb-5 tracking-[0.14em]",children:"Company"}),n.jsxs("ul",{className:"space-y-3 font-mono text-[12px] text-[#AEB4BD]",children:[n.jsx("li",{children:n.jsx(X,{to:"/about",className:"hover:text-[#8FE3B0] transition-colors",children:"About Us"})}),n.jsx("li",{children:n.jsx(X,{to:"/blog",className:"hover:text-[#8FE3B0] transition-colors",children:"Engineering Blog"})}),n.jsx("li",{children:n.jsx(X,{to:"/privacy",className:"hover:text-[#8FE3B0] transition-colors",children:"Privacy Policy"})}),n.jsx("li",{children:n.jsx(X,{to:"/terms",className:"hover:text-[#8FE3B0] transition-colors",children:"Terms of Service"})}),n.jsx("li",{children:n.jsx(X,{to:"/delete-account",className:"hover:text-[#8FE3B0] transition-colors",children:"Hapus Akun"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"label-mono text-[#E9EBEF] mb-5 tracking-[0.14em]",children:"Direct Dispatch"}),n.jsxs("ul",{className:"space-y-3.5 font-mono text-[12px] text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-center gap-2.5",children:[n.jsx(Aa,{className:"w-4 h-4 text-[#8FE3B0] shrink-0"}),n.jsx("span",{className:"truncate",children:"support@responpintar.com"})]}),n.jsxs("li",{className:"flex items-center gap-2.5",children:[n.jsx(Ia,{className:"w-4 h-4 text-[#8FE3B0] shrink-0"}),n.jsx("span",{children:"+62 821-8988-5080"})]}),n.jsxs("li",{className:"flex items-start gap-2.5 text-[11px] leading-relaxed",children:[n.jsx(Di,{className:"w-4 h-4 text-[#8FE3B0] shrink-0 mt-0.5"}),n.jsx("span",{children:"Plaza Aminta 5th Fl/504, South Jakarta 12310"})]})]})]})]})}),n.jsx(Ta,{className:"opacity-40"}),n.jsx("div",{className:"py-2 overflow-hidden text-center select-none pointer-events-none",children:n.jsx("span",{className:"block font-bold leading-none tracking-tight",style:{fontSize:"clamp(3rem, 14vw, 12rem)",color:"transparent",WebkitTextStroke:"1px rgba(244, 245, 247, 0.04)"},children:"ResponPintar"})}),n.jsx("div",{className:"border-t border-[rgba(244,245,247,0.06)] py-6 bg-[#0B0C0E]",children:n.jsxs("div",{className:"max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#636B76]",children:[n.jsxs("p",{children:["© ",e," Respon Pintar Indonesia. All rights reserved."]}),n.jsxs("div",{className:"flex gap-6",children:[n.jsx(X,{to:"/privacy",className:"hover:text-[#AEB4BD] transition-colors",children:"Privacy"}),n.jsx(X,{to:"/terms",className:"hover:text-[#AEB4BD] transition-colors",children:"Terms"}),n.jsx(X,{to:"/delete-account",className:"hover:text-[#AEB4BD] transition-colors",children:"Hapus Akun"})]})]})})]})}function fn({children:e,className:t="",onClick:a,hoverGlow:r=!0}){const i=f.useRef(null),s=f.useCallback(o=>{const l=i.current;if(!l)return;const u=l.getBoundingClientRect(),c=(o.clientX-u.left)/u.width*100,d=(o.clientY-u.top)/u.height*100;l.style.setProperty("--moat-x",`${c.toFixed(1)}%`),l.style.setProperty("--moat-y",`${d.toFixed(1)}%`)},[]);return n.jsxs("div",{ref:i,onMouseMove:s,onClick:a,className:`group panel-jamie ticks-jamie relative overflow-hidden transition-all duration-300 ${a?"cursor-pointer hover:border-[rgba(244,245,247,0.18)]":""} ${t}`,style:{backgroundColor:"rgba(17, 18, 20, 0.88)"},children:[n.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-y-0 -left-[60%] w-[50%] -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[360%] transition-transform duration-700 ease-out z-10",style:{background:"linear-gradient(90deg, transparent 0%, rgba(233, 235, 239, 0.05) 50%, transparent 100%)"}}),r&&n.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10",style:{background:"radial-gradient(18rem circle at var(--moat-x, 50%) var(--moat-y, 50%), rgba(233, 235, 239, 0.065), transparent 70%)"}}),n.jsx("div",{className:"relative z-20 w-full h-full",children:e})]})}function Q({children:e,delay:t=0,className:a=""}){const r=f.useRef(null);return f.useEffect(()=>{const i=r.current;if(!i)return;const s=()=>{setTimeout(()=>{i&&(i.style.opacity="1",i.style.transform="none")},t)};if(typeof IntersectionObserver>"u"){s();return}const o=i.getBoundingClientRect();if(o.top<window.innerHeight+100&&o.bottom>-100){s();return}const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(s(),l.unobserve(i))},{threshold:.01,rootMargin:"150px 0px 150px 0px"});return l.observe(i),()=>l.disconnect()},[t]),n.jsx("div",{ref:r,className:a,style:{opacity:0,transform:"translateY(16px)",transition:"opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",willChange:"opacity, transform"},children:e})}function Yi(){const{openModal:e}=rt();return n.jsx("section",{className:"pt-36 sm:pt-44 pb-24 sm:pb-32 px-6 lg:px-16 relative overflow-hidden border-b border-[rgba(244,245,247,0.08)]",children:n.jsx("div",{className:"max-w-[1400px] mx-auto",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",children:[n.jsxs("div",{className:"space-y-8",children:[n.jsx(Q,{children:n.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[n.jsx("p",{className:"font-mono text-[11px] uppercase tracking-[0.16em] text-[#8A9099]",children:"Respon Pintar / Platform Omnichannel"}),n.jsx(en,{label:"LIVE SYNC",variant:"positive"})]})}),n.jsx(Q,{delay:80,children:n.jsxs("h1",{className:"text-display font-bold tracking-tight text-[#E9EBEF]",children:["Satu Inbox."," ",n.jsx("span",{className:"chrome-text block",children:"Semua Percakapan."})]})}),n.jsx(Q,{delay:160,children:n.jsx("p",{className:"text-base sm:text-[17px] text-[#AEB4BD] font-normal leading-relaxed max-w-xl",children:"Kelola pesan WhatsApp Business, Instagram DM, Telegram, dan Live Chat dalam satu sistem terpusat. Respon pelanggan lebih cepat, delegasi tim CS otomatis, dan tingkatkan konversi penjualan bisnis Anda."})}),n.jsx(Q,{delay:240,children:n.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[n.jsx("a",{href:"https://crm.responpintar.com/auth/login",target:"_blank",rel:"noopener noreferrer",className:"bg-[#E9EBEF] text-[#0B0C0E] px-7 py-3.5 text-xs font-mono uppercase tracking-[0.1em] font-medium border border-white hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] no-underline",children:"Mulai Sekarang"}),n.jsx("button",{onClick:e,className:"bg-transparent text-[#E9EBEF] px-7 py-3.5 text-xs font-mono uppercase tracking-[0.1em] font-medium border border-[rgba(244,245,247,0.2)] hover:border-[rgba(244,245,247,0.45)] hover:bg-white/[0.04] transition-all cursor-pointer",children:"Coba Demo"}),n.jsx("a",{href:"#features",className:"text-[#AEB4BD] hover:text-[#E9EBEF] underline underline-offset-4 text-xs font-mono uppercase tracking-[0.1em] font-medium transition-colors ml-1",children:"Pelajari fitur"})]})}),n.jsx(Q,{delay:320,children:n.jsxs("div",{className:"grid grid-cols-3 gap-6 pt-8 border-t border-[rgba(244,245,247,0.08)] max-w-lg",children:[n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1",children:"CHANNELS SYNCED"}),n.jsx("p",{className:"text-2xl sm:text-3xl font-mono font-bold text-[#E9EBEF]",children:"100%"}),n.jsx("p",{className:"text-[11px] text-[#AEB4BD] mt-0.5",children:"real-time webhook"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1",children:"AVG FIRST REPLY"}),n.jsx("p",{className:"text-2xl sm:text-3xl font-mono font-bold text-[#8FE3B0]",children:"< 45s"}),n.jsx("p",{className:"text-[11px] text-[#AEB4BD] mt-0.5",children:"multi-agent speed"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.14em] text-[#636B76] mb-1",children:"SYSTEM UPTIME"}),n.jsx("p",{className:"text-2xl sm:text-3xl font-mono font-bold text-[#E9EBEF]",children:"99.98%"}),n.jsx("p",{className:"text-[11px] text-[#AEB4BD] mt-0.5",children:"SLA production"})]})]})})]}),n.jsx("div",{children:n.jsx(Q,{delay:120,children:n.jsxs(fn,{className:"p-7 sm:p-8 shadow-2xl border border-[rgba(244,245,247,0.1)]",children:[n.jsxs("div",{className:"flex items-center justify-between pb-5 border-b border-[rgba(244,245,247,0.08)]",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-9 h-9 rounded border border-[rgba(244,245,247,0.14)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0]",children:n.jsx(Ca,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold text-[#E9EBEF]",children:"Respon Pintar Omnichannel Desk"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#8FE3B0] animate-pulse"}),n.jsx("p",{className:"font-mono text-[10px] text-[#8FE3B0] uppercase tracking-wider",children:"4 Channels Active · WhatsApp / IG / TG / Web"})]})]})]}),n.jsx("div",{className:"flex items-center gap-1.5 font-mono text-[10px] text-[#8A9099] border border-[rgba(244,245,247,0.1)] px-2 py-0.5 bg-[#0B0C0E]",children:n.jsx("span",{children:"MULTI-AGENT"})})]}),n.jsxs("div",{className:"flex items-center gap-2 pt-4 pb-2 border-b border-[rgba(244,245,247,0.06)] font-mono text-[10px]",children:[n.jsx("span",{className:"px-2.5 py-1 bg-[#8FE3B0]/15 text-[#8FE3B0] border border-[#8FE3B0]/30 font-semibold",children:"WhatsApp (+62 821-xxxx)"}),n.jsx("span",{className:"px-2.5 py-1 text-[#636B76] border border-transparent",children:"Instagram Direct"}),n.jsx("span",{className:"px-2.5 py-1 text-[#636B76] border border-transparent",children:"Telegram"}),n.jsx("span",{className:"px-2.5 py-1 text-[#636B76] border border-transparent",children:"Live Chat"})]}),n.jsxs("div",{className:"py-6 space-y-4 font-mono text-xs",children:[n.jsx("div",{className:"flex justify-start",children:n.jsxs("div",{className:"border border-[rgba(244,245,247,0.12)] bg-[#1a1c1f] text-[#E9EBEF] px-4 py-3 max-w-[85%] space-y-1",children:[n.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#636B76]",children:[n.jsx("span",{children:"Customer (Budi Santoso)"}),n.jsx("span",{children:"14:02 WIB"})]}),n.jsx("p",{className:"text-[12px] leading-relaxed font-sans text-[#AEB4BD]",children:"Halo kak, mau tanya nomor resi untuk pesanan #RP-9921 kemarin sudah dikirimkan belum ya?"})]})}),n.jsx("div",{className:"flex justify-end",children:n.jsxs("div",{className:"border border-[#8FE3B0]/30 bg-[#0B0C0E] px-4 py-3 text-[#E9EBEF] max-w-[88%] space-y-2",children:[n.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#8FE3B0] border-b border-[rgba(244,245,247,0.06)] pb-1.5",children:[n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx(Ni,{className:"w-3.5 h-3.5 text-[#8FE3B0]"}),n.jsx("span",{children:"Agent Sarah (CS Tim 1)"})]}),n.jsx("span",{children:"14:02 WIB"})]}),n.jsxs("p",{className:"text-[12px] text-[#E9EBEF] leading-relaxed font-sans",children:["Halo Pak Budi! Pesanan #RP-9921 sudah dikirim via J&T dengan nomor resi ",n.jsx("strong",{className:"text-[#8FE3B0]",children:"JT881928301"}),". Paket dalam perjalanan dan estimasi tiba esok siang ya."]}),n.jsxs("div",{className:"flex gap-2 pt-1 font-mono",children:[n.jsx("span",{className:"text-[9px] uppercase px-1.5 py-0.5 border border-[#8FE3B0]/30 text-[#8FE3B0] bg-[#8FE3B0]/5",children:"Auto-Track J&T"}),n.jsx("span",{className:"text-[9px] uppercase px-1.5 py-0.5 border border-[rgba(244,245,247,0.1)] text-[#8A9099]",children:"CRM Sync OK"})]})]})}),n.jsxs("div",{className:"flex items-center justify-between pt-2 text-[#636B76] text-[10px]",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"terminal-caret","aria-hidden":"true"}),n.jsx("span",{children:"Delegasi otomatis: Sesuai giliran agen aktif"})]}),n.jsx("span",{className:"text-[#8FE3B0]",children:"Respon: 24 detik"})]})]}),n.jsxs("div",{className:"pt-4 border-t border-[rgba(244,245,247,0.08)] flex items-center justify-between text-[10px] font-mono text-[#636B76]",children:[n.jsx("span",{children:"OMNICHANNEL DESK"}),n.jsx("span",{className:"text-[#8A9099]",children:"SINGLE INBOX · ZERO CHAT LOSS"})]})]})})})]})})})}const Qi=[{icon:Ti,number:"01",badge:"UNIFIED INBOX",title:"Satu Inbox Semua Channel",description:"Gabungkan pesan WhatsApp Business, Instagram DM, Telegram, dan Live Chat ke dalam satu dasbor terpadu tanpa perlu login bolak-balik antar aplikasi."},{icon:Ca,number:"02",badge:"OFFICIAL API",title:"Official WhatsApp Business API",description:"Akses resmi Meta Cloud API dengan dukungan centang hijau (verified badge), broadcast pesan massal aman, dan integrasi webhook multi-nomor."},{icon:qi,number:"03",badge:"ROUTING",title:"Delegasi & Auto-Assignment CS",description:"Distribusi pesan pelanggan secara otomatis ke agen CS yang sedang aktif berdasarkan giliran (round-robin), divisi, atau keahlian tanpa rebutan chat."},{icon:xi,number:"04",badge:"QUICK ACTION",title:"Template Pesan & Auto-Reply",description:"Jawab pertanyaan sering ditanyakan dalam 1 klik dengan quick replies, katalog harga instan, dan auto-responder saat jam operasional toko tutup."},{icon:Bi,number:"05",badge:"CRM SYNC",title:"Profil Pelanggan & Riwayat Order",description:"Simpan histori chat, data pembelian, catatan khusus pelanggan, dan integrasikan ke sistem e-commerce atau database internal bisnis Anda."},{icon:ki,number:"06",badge:"ANALYTICS",title:"Real-time CS Analytics & SLA",description:"Pantau waktu respon agen, kepuasan pelanggan (CSAT), volume chat per jam, dan evaluasi produktivitas tim customer support secara transparan."}];function Ji(){return n.jsx("section",{id:"features",className:"py-28 sm:py-36 px-6 lg:px-16 border-b border-[rgba(244,245,247,0.08)] relative",children:n.jsxs("div",{className:"max-w-[1400px] mx-auto",children:[n.jsxs("div",{className:"max-w-3xl mb-18 space-y-4",children:[n.jsx(Q,{children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("p",{className:"label-mono text-[#8FE3B0]",children:"01 · CORE OMNICHANNEL FEATURES"}),n.jsx(en,{label:"ALL-IN-ONE DESK",variant:"positive"})]})}),n.jsx(Q,{delay:80,children:n.jsxs("h2",{className:"text-display font-bold tracking-tight text-[#E9EBEF]",children:["Semua Fitur untuk"," ",n.jsx("span",{className:"chrome-text block",children:"Customer Service Modern."})]})}),n.jsx(Q,{delay:160,children:n.jsx("p",{className:"text-base sm:text-[17px] text-[#AEB4BD] font-normal leading-relaxed max-w-2xl",children:"Tingkatkan efisiensi komunikasi bisnis Anda. Berikan respon secepat kilat kepada pelanggan di channel manapun mereka menghubungi Anda."})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Qi.map((e,t)=>{const a=e.icon;return n.jsx(Q,{delay:t*70,children:n.jsxs(fn,{className:"p-8 sm:p-9 flex flex-col justify-between h-full border border-[rgba(244,245,247,0.08)]",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-6 font-mono text-[11px]",children:[n.jsxs("span",{className:"text-[#636B76]",children:[e.number," // FITUR"]}),n.jsx("span",{className:"border border-[rgba(244,245,247,0.12)] px-2.5 py-0.5 text-[#8FE3B0] bg-[#8FE3B0]/5 uppercase tracking-wider text-[10px]",children:e.badge})]}),n.jsx("div",{className:"w-11 h-11 rounded border border-[rgba(244,245,247,0.14)] bg-[#1a1c1f] flex items-center justify-center text-[#E9EBEF] mb-6",children:n.jsx(a,{className:"w-5 h-5 text-[#8FE3B0]"})}),n.jsx("h3",{className:"text-xl font-bold text-[#E9EBEF] mb-3",children:e.title}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed font-normal",children:e.description})]}),n.jsxs("div",{className:"pt-6 mt-6 border-t border-[rgba(244,245,247,0.06)] flex items-center justify-between text-[10px] font-mono text-[#636B76]",children:[n.jsx("span",{children:"OMNICHANNEL READY"}),n.jsx("span",{className:"text-[#8A9099]",children:"ACTIVE SYNC"})]})]})},e.number)})})]})})}const Xi=[{icon:zi,number:"01",industry:"RETAIL & E-COMMERCE",title:"Automasi Pesanan & Cek Resi Cepat",description:"Terima pesanan dari Instagram DM dan WhatsApp dalam 1 inbox. Kirim update resi ekspedisi dan notifikasi pembayaran otomatis tanpa ketik manual satu per satu.",benefits:["Peningkatan konversi checkout hingga +40%","Eliminasi antrean chat saat flash sale & promo tanggal kembar","Integrasi langsung ke sistem pesanan dan katalog produk"]},{icon:bi,number:"02",industry:"FINANCE & CORPORATE",title:"Kualifikasi Prospek & Eskalasi Tiket",description:"Saring pesan masuk dari website dan Telegram, lalu delegasikan prospek bernilai tinggi langsung ke account manager dengan pembagian tugas yang adil.",benefits:["Hemat hingga 60% biaya operasional customer service","Waktu respon pertama kurang dari 45 detik","Keamanan data pelanggan dengan enkripsi standar enterprise"]},{icon:hi,number:"03",industry:"EDUCATION & KURSUS",title:"Informasi Pendaftaran & Konseling",description:"Layanan calon siswa baru via WhatsApp dan Live Chat website. Bagikan informasi biaya studi, jadwal pendaftaran, dan reminder seleksi secara massal.",benefits:["Layani ribuan pendaftar bersamaan tanpa kendala nomor diblokir","Multi-admin CS dapat menjawab dari perangkat berbeda","Follow-up otomatis calon pendaftar via WhatsApp blast resmi"]},{icon:Ai,number:"04",industry:"KLINIK & HEALTHCARE",title:"Reservasi Jadwal & Pengingat Pasien",description:"Kelola booking jadwal dokter dan kirim pengingat konsultasi otomatis sebelum hari pemeriksaan untuk mencegah pasien lupa atau terlambat datang.",benefits:["Turunkan angka no-show pasien hingga 35%","Manajemen antrean janji temu lebih teratur dan rapi","Respon cepat pertanyaan jadwal praktek dan fasilitas klinik"]}];function Zi(){return n.jsx("section",{id:"use-cases",className:"py-28 sm:py-36 px-6 lg:px-16 border-b border-[rgba(244,245,247,0.08)] relative",children:n.jsxs("div",{className:"max-w-[1400px] mx-auto",children:[n.jsxs("div",{className:"max-w-3xl mb-18 space-y-4",children:[n.jsx(Q,{children:n.jsx("p",{className:"label-mono text-[#8FE3B0]",children:"02 · INDUSTRY BLUEPRINTS"})}),n.jsx(Q,{delay:80,children:n.jsxs("h2",{className:"text-display font-bold tracking-tight text-[#E9EBEF]",children:["Solusi Tepat untuk"," ",n.jsx("span",{className:"chrome-text block",children:"Berbagai Industri."})]})}),n.jsx(Q,{delay:160,children:n.jsx("p",{className:"text-base sm:text-[17px] text-[#AEB4BD] font-normal leading-relaxed max-w-2xl",children:"Dari UMKM berkembang hingga korporasi besar, Respon Pintar membantu tim CS Anda melayani pelanggan lebih cepat, teratur, dan profesional."})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10",children:Xi.map((e,t)=>{const a=e.icon;return n.jsx(Q,{delay:t*90,children:n.jsxs(fn,{className:"p-8 sm:p-10 flex flex-col justify-between h-full border border-[rgba(244,245,247,0.08)]",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-6 font-mono text-[11px]",children:[n.jsxs("span",{className:"text-[#636B76]",children:[e.number," // BLUEPRINT"]}),n.jsx("span",{className:"border border-[rgba(244,245,247,0.12)] px-2.5 py-0.5 text-[#AEB4BD] bg-white/[0.02] uppercase tracking-wider text-[10px]",children:e.industry})]}),n.jsxs("div",{className:"flex items-start gap-4 mb-5",children:[n.jsx("div",{className:"w-11 h-11 rounded border border-[rgba(244,245,247,0.14)] bg-[#1a1c1f] flex items-center justify-center text-[#8FE3B0] shrink-0",children:n.jsx(a,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:e.title}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed font-normal",children:e.description})]})]}),n.jsx(Ta,{className:"my-6 opacity-40"}),n.jsx("div",{className:"space-y-3 font-mono text-[12px]",children:e.benefits.map((r,i)=>n.jsxs("div",{className:"flex items-center gap-2.5 text-[#AEB4BD]",children:[n.jsx("span",{className:"text-[#8FE3B0] font-bold select-none",children:"▸"}),n.jsx("span",{children:r})]},i))})]}),n.jsxs("div",{className:"pt-6 mt-8 border-t border-[rgba(244,245,247,0.06)] flex items-center justify-between text-[10px] font-mono text-[#636B76]",children:[n.jsx("span",{children:"IMPLEMENTASI CEPAT"}),n.jsx("span",{className:"text-[#8FE3B0]",children:"OMNICHANNEL CS"})]})]})},e.number)})})]})})}function es(){return f.useEffect(()=>{const e=document.createElement("script");return e.src="https://api.responpintar.com/api/plan-snippets/widget.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),n.jsx("section",{id:"pricing",className:"py-28 sm:py-36 px-6 lg:px-16 relative",children:n.jsxs("div",{className:"max-w-[1400px] mx-auto",children:[n.jsxs("div",{className:"max-w-3xl mb-18 space-y-4",children:[n.jsx(Q,{children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("p",{className:"label-mono text-[#8FE3B0]",children:"03 · COMMERCIAL INDEX"}),n.jsx(en,{label:"PAKET TRANSPARAN",variant:"positive"})]})}),n.jsx(Q,{delay:80,children:n.jsxs("h2",{className:"text-display font-bold tracking-tight text-[#E9EBEF]",children:["Investasi Terbaik untuk"," ",n.jsx("span",{className:"chrome-text block",children:"Efisiensi Tim CS."})]})}),n.jsx(Q,{delay:160,children:n.jsx("p",{className:"text-base sm:text-[17px] text-[#AEB4BD] font-normal leading-relaxed max-w-2xl",children:"Pilih paket omnichannel yang sesuai dengan jumlah agen CS dan volume pesan bisnis Anda. Tanpa biaya tersembunyi, siap pakai dalam waktu singkat."})})]}),n.jsx(Q,{delay:180,children:n.jsx("div",{className:"w-full mb-18",children:n.jsx("div",{className:"w-full text-[#E9EBEF]","data-wapi-snippet":"36058ade7948a5937101b838"})})}),n.jsx("div",{className:"max-w-4xl mx-auto",children:n.jsx(Q,{delay:240,children:n.jsx(fn,{className:"p-8 sm:p-14 border border-[rgba(244,245,247,0.12)]",children:n.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-6",children:[n.jsx("div",{className:"w-14 h-14 mx-auto rounded border border-[#8FE3B0]/40 bg-[#8FE3B0]/10 flex items-center justify-center text-[#8FE3B0] shadow-[0_0_15px_rgba(143,227,176,0.2)]",children:n.jsx(Ui,{className:"w-7 h-7"})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.16em] text-[#8FE3B0] mb-2",children:"KONSULTASI PAKET ENTERPRISE"}),n.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-[#E9EBEF]",children:"Butuh Solusi Custom Multi-Nomor atau Dedicated Server?"})]}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed font-normal",children:"Setiap perusahaan memiliki alur kerja unik. Tim kami siap membantu mengatur integrasi sistem omnichannel, verifikasi centang hijau WhatsApp, dan alur tiket sesuai SOP tim Anda."}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left font-mono",children:[n.jsxs("div",{className:"border border-[rgba(244,245,247,0.08)] bg-[#111214] p-5 text-center",children:[n.jsx(Aa,{className:"w-5 h-5 text-[#8FE3B0] mx-auto mb-2"}),n.jsx("p",{className:"text-[10px] text-[#636B76] uppercase tracking-wider mb-1",children:"Email"}),n.jsx("p",{className:"text-xs text-[#E9EBEF] truncate",children:"support@responpintar.com"})]}),n.jsxs("div",{className:"border border-[rgba(244,245,247,0.08)] bg-[#111214] p-5 text-center",children:[n.jsx(Ia,{className:"w-5 h-5 text-[#8FE3B0] mx-auto mb-2"}),n.jsx("p",{className:"text-[10px] text-[#636B76] uppercase tracking-wider mb-1",children:"Telepon"}),n.jsx("p",{className:"text-xs text-[#E9EBEF]",children:"+62 821-8988-5080"})]}),n.jsxs("div",{className:"border border-[rgba(244,245,247,0.08)] bg-[#111214] p-5 text-center",children:[n.jsx(wi,{className:"w-5 h-5 text-[#8FE3B0] mx-auto mb-2"}),n.jsx("p",{className:"text-[10px] text-[#636B76] uppercase tracking-wider mb-1",children:"WhatsApp"}),n.jsx("p",{className:"text-xs text-[#8FE3B0]",children:"+62 821-8988-5080"})]})]}),n.jsx("div",{className:"pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono",children:n.jsx("a",{href:"https://wa.me/6282189885080?text=Halo%20ResponPintar,%20saya%20ingin%20konsultasi%20paket%20omnichannel.",target:"_blank",rel:"noopener noreferrer",className:"bg-[#E9EBEF] text-[#0B0C0E] border border-white font-medium px-8 py-3.5 uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] no-underline",children:"Hubungi Tim Sales →"})}),n.jsx("div",{className:"pt-4 border-t border-[rgba(244,245,247,0.06)] text-[11px] font-mono text-[#636B76]",children:n.jsxs("p",{children:["💡 ",n.jsx("strong",{className:"text-[#AEB4BD]",children:"14 Hari Free Trial:"})," Coba fitur omnichannel tanpa resiko kartu kredit."]})})]})})})})]})})}const wn=10,Ra={property:"YOUR_PROPERTY_TOKEN",hospital:"YOUR_HOSPITAL_TOKEN",clinic:"YOUR_CLINIC_TOKEN",retail:"YOUR_RETAIL_TOKEN",bank:"YOUR_BANK_TOKEN",finance:"YOUR_FINANCE_TOKEN",education:"YOUR_EDUCATION_TOKEN",fnb:"YOUR_FNB_TOKEN",logistics:"YOUR_LOGISTICS_TOKEN",corporate:"YOUR_CORPORATE_TOKEN"},ns="https://chat.responpintar.com",En=[{id:"property",name:"Property / Real Estate",icon:Dr},{id:"hospital",name:"Hospital",icon:Et},{id:"clinic",name:"Clinic",icon:Et},{id:"retail",name:"Retail",icon:Fr},{id:"bank",name:"Banking",icon:Mr},{id:"finance",name:"Finance / Fintech",icon:ba},{id:"education",name:"Education",icon:Lr},{id:"fnb",name:"F&B / Restaurant",icon:Or},{id:"logistics",name:"Logistics",icon:zr},{id:"corporate",name:"Corporate / Enterprise",icon:_r}];function Nn(e,t){const a=t.toLowerCase();if(a.includes("price")||a.includes("cost")||a.includes("fee"))return"For detailed pricing and packages, please visit our Pricing page or speak with our sales team.";if(a.includes("location")||a.includes("address"))return"Our office is at Plaza Aminta 5th Floor/504, South Jakarta. Would you like to schedule a visit?";if(a.includes("hello")||a.includes("hi")||a.includes("hey"))return"Hello! Please let me know what you need — I'm happy to help.";switch(e){case"property":return"We have a wide selection of properties. Are you looking for residential, commercial, or investment?";case"hospital":case"clinic":return"We can help schedule a consultation or provide information about our healthcare services.";case"retail":return"Are you looking for a specific product, or need help tracking an existing order?";case"bank":case"finance":return"Our financial application process is simple and fast. Would you like a simulation?";case"education":return"We offer excellent programmes. Do you need information on enrollment or curriculum?";case"fnb":return"You can make a reservation or order from our menu directly through this chat.";case"logistics":return"Provide your tracking number for updates, or ask about our delivery services.";case"corporate":return"We're ready to serve your enterprise with customised B2B solutions. Which department can I connect you to?";default:return"Thank you for your message. We'll assist with your business needs shortly."}}async function ts(e,t,a){const r=Ra[e];if(!r||r.startsWith("YOUR_"))return Nn(e,t);try{const i=await fetch(`${ns}/api/v1/widget/conversations`,{method:"POST",headers:{"Content-Type":"application/json",api_access_token:r},body:JSON.stringify({message:{content:t,message_type:"incoming"},contact_id:a})});if(!i.ok)throw new Error(`API error ${i.status}`);return(await i.json())?.messages?.[0]?.content||Nn(e,t)}catch{return Nn(e,t)}}function as(){const{isOpen:e,closeModal:t}=rt(),[a,r]=f.useState(null),[i,s]=f.useState(null),[o,l]=f.useState([]),[u,c]=f.useState(""),[d,m]=f.useState(0),[h,p]=f.useState(!1),[k,y]=f.useState(!1),[N,v]=f.useState(!1),P=f.useRef(null);f.useEffect(()=>{const B=I=>{I.key==="Escape"&&(N?v(!1):t())};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[t,N]),f.useEffect(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]),f.useEffect(()=>{P.current?.scrollIntoView({behavior:"smooth"})},[o,k]),f.useEffect(()=>{e||(r(null),s(null),l([]),c(""),m(0),p(!1),y(!1),v(!1))},[e]);const C=B=>{const I=En.find(T=>T.id===B)?.name||"your business",A=Ra[B],_=A&&!A.startsWith("YOUR_");r(B),l([{id:"1",role:"ai",content:_?`Hello! I'm your AI assistant for ${I}. How can I help you today?`:`Hello! I'm a demo assistant for ${I}. How can I help you today?`,timestamp:new Date}]),m(0),p(!1),c(""),y(!1)},H=B=>{B!==a&&(o.length>0?(s(B),v(!0)):C(B))},U=()=>{i&&(C(i),s(null)),v(!1)},j=()=>{s(null),v(!1)},O=async B=>{if(B.preventDefault(),!u.trim()||h||!a)return;const I={id:Date.now().toString(),role:"user",content:u,timestamp:new Date};l(_=>[..._,I]),c("");const A=d+1;m(A),A>=wn&&p(!0),y(!0);try{const _=await ts(a,I.content);l(T=>[...T,{id:(Date.now()+1).toString(),role:"ai",content:_,timestamp:new Date}])}finally{y(!1)}};if(!e)return null;const M=!!a,z=En.find(B=>B.id===a)?.name;return n.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6",children:[n.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:t}),n.jsxs("div",{className:"relative w-full max-w-4xl h-[88vh] max-h-[720px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 fade-in duration-200 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 border-b border-border bg-card flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[n.jsx("div",{className:"w-7 h-7 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0",children:n.jsx(Nt,{className:"w-4 h-4 text-[var(--brand-primary)]"})}),n.jsx("span",{className:"font-semibold text-sm text-foreground truncate",children:"AI Chatbot Demo"}),M?n.jsxs("span",{className:"hidden sm:flex items-center gap-1 ml-1 px-2 py-0.5 bg-green-500/10 text-green-700 rounded-full text-[11px] font-medium border border-green-500/20 flex-shrink-0",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),z]}):n.jsxs("span",{className:"hidden sm:flex items-center gap-1 ml-1 px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-[11px] flex-shrink-0",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-muted-foreground/50"}),"Waiting"]})]}),n.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[M&&n.jsxs("span",{className:"hidden md:block text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md",children:[wn-d," / ",wn," left"]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg flex items-center justify-center hover:bg-accent text-muted-foreground hover:text-foreground transition-colors","aria-label":"Close",children:n.jsx(Wr,{className:"w-4 h-4"})})]})]}),n.jsxs("div",{className:"flex flex-1 overflow-hidden min-h-0",children:[n.jsxs("div",{className:"w-56 flex-shrink-0 border-r border-border bg-muted/20 flex flex-col overflow-y-auto",children:[n.jsxs("div",{className:"px-4 pt-4 pb-3 border-b border-border flex-shrink-0",children:[n.jsx("p",{className:"text-xs font-semibold text-foreground uppercase tracking-wide",children:"Select industry"}),n.jsx("p",{className:"text-[11px] text-muted-foreground mt-0.5 leading-relaxed",children:"Chat adapts to your sector"})]}),n.jsx("nav",{className:"p-2 space-y-0.5 flex-1",children:En.map(B=>{const I=B.icon,A=a===B.id;return n.jsxs("button",{onClick:()=>H(B.id),className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs transition-all
                      ${A?"bg-green-500/10 text-green-700 font-semibold border border-green-500/20":"text-muted-foreground hover:bg-card hover:text-foreground"}`,children:[n.jsx(I,{className:`w-3.5 h-3.5 flex-shrink-0 ${A?"text-green-600":""}`}),n.jsx("span",{className:"leading-snug flex-1 truncate",children:B.name}),A&&n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"})]},B.id)})})]}),n.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-w-0",children:[N&&n.jsxs("div",{className:"flex-shrink-0 mx-4 mt-3 mb-1 bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm animate-in slide-in-from-top-2 duration-200",children:[n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx(ya,{className:"w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0"}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("p",{className:"text-sm font-semibold text-amber-900 mb-0.5",children:"End this chat?"}),n.jsx("p",{className:"text-xs text-amber-700 leading-relaxed",children:"Switching industry will clear your current conversation."})]})]}),n.jsxs("div",{className:"flex gap-2 mt-3",children:[n.jsx("button",{onClick:j,className:"flex-1 py-2 px-4 rounded-lg border border-amber-300 bg-white text-amber-800 text-sm font-medium hover:bg-amber-50 transition-colors",children:"Keep chatting"}),n.jsx("button",{onClick:U,className:"flex-1 py-2 px-4 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 transition-colors",children:"Yes, switch"})]})]}),n.jsx("div",{className:`flex-1 overflow-y-auto p-5 space-y-4 transition-colors duration-300 ${M?"bg-background":"bg-muted/10"}`,children:M?n.jsxs(n.Fragment,{children:[o.map(B=>n.jsx("div",{className:`flex ${B.role==="user"?"justify-end":"justify-start"}`,children:n.jsxs("div",{className:`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm
                        ${B.role==="user"?"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] text-white rounded-br-sm":"bg-card border border-border text-foreground rounded-bl-sm"}`,children:[n.jsx("p",{children:B.content}),n.jsx("span",{className:`text-[10px] opacity-60 mt-1 block text-right ${B.role==="user"?"text-white/80":"text-muted-foreground"}`,children:B.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},B.id)),k&&n.jsx("div",{className:"flex justify-start",children:n.jsxs("div",{className:"bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1 shadow-sm",children:[n.jsx("div",{className:"w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"0ms"}}),n.jsx("div",{className:"w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"150ms"}}),n.jsx("div",{className:"w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})}),n.jsx("div",{ref:P})]}):n.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center gap-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-full bg-muted flex items-center justify-center",children:n.jsx(zn,{className:"w-7 h-7 text-muted-foreground/50"})}),n.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed max-w-[210px]",children:"Select an industry on the left to start your demo"})]})}),n.jsx("div",{className:`p-4 border-t flex-shrink-0 transition-colors duration-300 bg-card ${M?"border-green-500/20":"border-border"}`,children:n.jsxs("form",{onSubmit:O,className:"flex items-center gap-2",children:[n.jsx("input",{type:"text",value:u,onChange:B=>c(B.target.value),disabled:!M||h,placeholder:M?h?"Demo session ended":"Type a message...":"Select an industry first...",className:`flex-1 bg-background border rounded-xl py-2.5 px-4 text-sm placeholder:text-muted-foreground focus:outline-none disabled:opacity-50 transition-all
                    ${M&&!h?"border-green-400/50 focus:ring-2 focus:ring-green-500/30 focus:border-green-500":"border-input focus:ring-2 focus:ring-[var(--brand-primary)]/30"}`}),n.jsx("button",{type:"submit",disabled:!u.trim()||!M||h,className:`p-2.5 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0
                    ${M&&!h?"bg-green-500 hover:bg-green-600":"bg-[var(--brand-primary)] hover:opacity-90"}`,children:n.jsx(ka,{className:"w-4 h-4"})})]})})]})]}),h&&n.jsx("div",{className:"absolute inset-0 bg-background/85 backdrop-blur-sm flex items-center justify-center p-6 z-20 animate-in fade-in duration-200",children:n.jsxs("div",{className:"bg-card border border-border rounded-2xl p-7 max-w-sm w-full text-center shadow-2xl",children:[n.jsx("div",{className:"w-14 h-14 bg-[var(--brand-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-5",children:n.jsx(Nt,{className:"w-7 h-7 text-[var(--brand-primary)]"})}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-foreground",children:"Demo Complete!"}),n.jsx("p",{className:"text-muted-foreground text-sm mb-6 leading-relaxed",children:"You've used all 10 messages. Want to see a full personalised demo for your business?"}),n.jsxs("div",{className:"space-y-2.5",children:[n.jsxs("a",{href:"https://wa.me/6282189885080?text=Hello%2C%20I%20would%20like%20to%20try%20the%20ResponPintar%20AI%20Chatbot",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-full py-2.5 px-4 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#20bd5a] transition-colors gap-2",children:[n.jsx(zn,{className:"w-4 h-4"}),"Chat with our Team"]}),n.jsx(X,{to:"/demo",onClick:t,className:"flex items-center justify-center w-full py-2.5 px-4 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors",children:"Book a Demo"}),n.jsx("button",{onClick:t,className:"w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1",children:"Close"})]})]})})]})]})}function bn(){const e=f.useRef(null),t=f.useRef({x:-9999,y:-9999}),a=f.useRef(0);return f.useEffect(()=>{const r=e.current;if(!r)return;const i=r.getContext("2d");if(!i)return;const o=window.innerWidth<768?0:420,l=130,u=()=>{r&&(r.width=window.innerWidth,r.height=window.innerHeight)};u(),window.addEventListener("resize",u);const c=Array.from({length:o},()=>({x:Math.random()*r.width,y:Math.random()*r.height,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,size:Math.random()*1.2+.2,opacity:Math.random()*.4+.08})),d=h=>{t.current={x:h.clientX,y:h.clientY}};window.addEventListener("mousemove",d);const m=()=>{i.clearRect(0,0,r.width,r.height);const{x:h,y:p}=t.current;for(let k=0;k<c.length;k++){const y=c[k];y.x+=y.vx,y.y+=y.vy,y.x<0&&(y.x=r.width),y.x>r.width&&(y.x=0),y.y<0&&(y.y=r.height),y.y>r.height&&(y.y=0);const N=y.x-h,v=y.y-p,P=Math.sqrt(N*N+v*v);if(P<l&&P>0){const C=(l-P)/l;y.vx+=N/P*C*.28,y.vy+=v/P*C*.28}y.vx*=.985,y.vy*=.985,i.beginPath(),i.arc(y.x,y.y,y.size,0,Math.PI*2),i.fillStyle=`rgba(233, 235, 239, ${y.opacity})`,i.fill()}for(let k=0;k<c.length;k++)for(let y=k+1;y<c.length;y++){const N=c[k].x-c[y].x,v=c[k].y-c[y].y,P=Math.sqrt(N*N+v*v);P<70&&(i.beginPath(),i.strokeStyle=`rgba(233, 235, 239, ${(1-P/70)*.09})`,i.lineWidth=.5,i.moveTo(c[k].x,c[k].y),i.lineTo(c[y].x,c[y].y),i.stroke())}a.current=requestAnimationFrame(m)};return o>0&&m(),()=>{cancelAnimationFrame(a.current),window.removeEventListener("resize",u),window.removeEventListener("mousemove",d)}},[]),n.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#0B0C0E]",children:[n.jsx("div",{className:"absolute inset-0","aria-hidden":"true",style:{background:["radial-gradient(70rem 26rem at 72% 82%, rgba(233,235,239,0.07), transparent 62%)","radial-gradient(46rem 18rem at 24% 96%, rgba(174,180,189,0.05), transparent 66%)","repeating-linear-gradient(90deg, rgba(244,245,247,0.02) 0 1px, transparent 1px 96px)","repeating-linear-gradient(0deg, rgba(244,245,247,0.016) 0 1px, transparent 1px 96px)"].join(","),maskImage:"radial-gradient(120% 90% at 50% 42%, black 60%, transparent 100%)",WebkitMaskImage:"radial-gradient(120% 90% at 50% 42%, black 60%, transparent 100%)"}}),n.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full",style:{mixBlendMode:"screen",opacity:.6}})]})}function rs(){return n.jsxs("main",{className:"jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]",children:[n.jsx(bn,{}),n.jsxs("div",{className:"relative z-10 w-full",children:[n.jsx(Yi,{}),n.jsx(Ji,{}),n.jsx(Zi,{}),n.jsx(es,{}),n.jsx(as,{})]})]})}function is(){return n.jsxs("main",{className:"jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0] pt-36 sm:pt-44 pb-28 sm:pb-36 px-6 lg:px-16",children:[n.jsx(bn,{}),n.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto space-y-12 sm:space-y-14",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(244,245,247,0.12)] bg-[#16181D]/80 text-[#AEB4BD] text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-md",children:[n.jsx(_n,{className:"w-3.5 h-3.5 text-[#8FE3B0]"}),n.jsx("span",{children:"Legal & Privacy Compliance"})]}),n.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E9EBEF] mb-4",children:["Kebijakan ",n.jsx("span",{className:"chrome-text",children:"Privasi"})]}),n.jsx("p",{className:"text-sm font-mono text-[#636B76] max-w-xl mx-auto",children:"Terakhir diperbarui: 15 Maret 2025 • PT Respon Pintar Indonesia (Omnichannel Customer Service)"})]}),n.jsxs("div",{className:"space-y-8 sm:space-y-10",children:[n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Ce,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"1. Informasi yang Kami Kumpulkan"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Kami mengumpulkan data yang Anda berikan secara langsung saat menggunakan platform omnichannel Respon Pintar:"})]})]}),n.jsxs("div",{className:"space-y-6 sm:ml-14",children:[n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"1.1. Informasi yang Anda Berikan:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Informasi akun bisnis (nama perusahaan, email kerja, nomor telepon resmi)"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Informasi pembayaran dan tagihan (diproses melalui payment gateway berlisensi PCI-DSS)"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Pesan, berkas, dan data kontak pelanggan yang dikelola melalui integrasi WhatsApp, Instagram, Telegram, dan Live Chat"})]})]})]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"1.2. Informasi yang Dikumpulkan Secara Otomatis:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Log aktivitas platform, waktu respon agen (SLA), dan metrik interaksi percakapan"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Data perangkat dan browser agen CS untuk keperluan audit keamanan"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Kuki sesi (session cookies) untuk otentikasi login aman"})]})]})]})]})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Hr,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"2. Penggunaan Informasi"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Informasi yang kami kumpulkan digunakan secara eksklusif untuk tujuan operasional omnichannel:"})]})]}),n.jsxs("div",{className:"space-y-6 sm:ml-14",children:[n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"2.1. Tujuan Utama Layanan:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Menyalurkan pesan real-time dari WhatsApp, Instagram, Telegram ke inbox terpadu agen CS Anda"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Menjalankan auto-assignment tiket pesan ke tim customer service yang tersedia"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Menampilkan profil riwayat transaksi pelanggan (CRM sync) kepada agen saat percakapan berlangsung"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Menyediakan analitik performa CS dan laporan Service Level Agreement (SLA)"})]})]})]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"2.2. Keamanan & Kepatuhan:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Pencegahan penipuan, akses ilegal, atau serangan siber ke sistem backend omnichannel"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Kepatuhan terhadap regulasi UU Perlindungan Data Pribadi (UU PDP No. 27/2022)"})]})]})]})]})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Ur,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"3. Perlindungan & Keamanan Data"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Kami menerapkan standar keamanan data enterprise untuk menjaga kerahasiaan percakapan pelanggan bisnis Anda:"})]})]}),n.jsxs("div",{className:"space-y-6 sm:ml-14",children:[n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"3.1. Keamanan Teknis:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Enkripsi TLS 1.3 saat transmisi data (in-transit) dan enkripsi AES-256 untuk penyimpanan (at-rest)"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Isolasi database multi-tenant sehingga data percakapan antar perusahaan tidak pernah bercampur"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Pemantauan keamanan 24/7 dan pencadangan data otomatis terenkripsi harian"})]})]})]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"3.2. Akses & Tata Kelola:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Akses internal berbasis Role-Based Access Control (RBAC) dengan prinsip need-to-know ketat"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Audit keamanan berkala dan peninjauan log akses secara berkala"})]})]})]})]})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(un,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"4. Pembagian Data ke Pihak Ketiga"}),n.jsxs("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:["Kami berkomitmen penuh ",n.jsx("strong",{children:"tidak pernah menjual atau menyewakan"})," data bisnis maupun pesan pelanggan Anda kepada pihak mana pun. Data hanya dibagikan untuk kepentingan teknis:"]})]})]}),n.jsx("div",{className:"space-y-6 sm:ml-14",children:n.jsx("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Penyedia Channel Resmi (Meta Cloud API untuk WhatsApp & Instagram DM, Telegram Bot API) sesuai kebutuhan transmisi pesan"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Penyedia Infrastruktur Cloud Berstandar ISO 27001 / SOC 2 dengan perjanjian kerahasiaan ketat"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Kewajiban hukum resmi dari instansi pemerintah yang berwenang sesuai undang-undang Republik Indonesia"})]})]})})})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(_n,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"5. Hak Pemilik Data (Data Rights)"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Sesuai UU PDP Republik Indonesia, pengguna platform dan pelanggan memiliki hak penuh atas data pribadinya:"})]})]}),n.jsx("div",{className:"space-y-4 sm:ml-14",children:n.jsx("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Hak untuk mengakses dan meminta salinan ekspor data riwayat kontak"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Hak untuk memperbarui dan mengoreksi data profil yang tidak akurat"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsxs("span",{children:["Hak untuk mengajukan penghapusan akun dan pemusnahan data permanen melalui formulir khusus di ",n.jsx("a",{href:"/delete-account",className:"underline underline-offset-4 text-[#E9EBEF] hover:text-[#8FE3B0] transition",children:"Halaman Hapus Akun"})]})]})]})})})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.12)] backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]",children:[n.jsx("h2",{className:"text-2xl font-bold mb-3 text-center text-[#E9EBEF]",children:"Kontak Petugas Perlindungan Data"}),n.jsx("p",{className:"text-sm sm:text-base text-[#AEB4BD] text-center mb-8 max-w-xl mx-auto",children:"Jika Anda memiliki pertanyaan mengenai kebijakan privasi atau ingin menjalankan hak atas data Anda, hubungi tim kami:"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center",children:[n.jsx(xn,{className:"w-5 h-5 text-[#8FE3B0]"}),n.jsx("p",{className:"text-xs font-mono uppercase tracking-wider text-[#636B76]",children:"Email"}),n.jsx("a",{href:"mailto:support@responpintar.com",className:"text-sm text-[#E9EBEF] hover:underline",children:"support@responpintar.com"})]}),n.jsxs("div",{className:"flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center",children:[n.jsx(Zn,{className:"w-5 h-5 text-[#8FE3B0]"}),n.jsx("p",{className:"text-xs font-mono uppercase tracking-wider text-[#636B76]",children:"WhatsApp Support"}),n.jsx("a",{href:"https://wa.me/6282189885080",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#E9EBEF] hover:underline",children:"+62 821-8988-5080"})]}),n.jsxs("div",{className:"flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center",children:[n.jsx(va,{className:"w-5 h-5 text-[#8FE3B0]"}),n.jsx("p",{className:"text-xs font-mono uppercase tracking-wider text-[#636B76]",children:"Kantor"}),n.jsx("p",{className:"text-xs sm:text-sm text-[#AEB4BD] text-center",children:"Plaza Aminta Lt. 5, Jl. TB Simatupang, Jakarta Selatan"})]})]})]})]})]})]})}function ss(){return n.jsxs("main",{className:"jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0] pt-36 sm:pt-44 pb-28 sm:pb-36 px-6 lg:px-16",children:[n.jsx(bn,{}),n.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto space-y-12 sm:space-y-14",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(244,245,247,0.12)] bg-[#16181D]/80 text-[#AEB4BD] text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-md",children:[n.jsx(Vr,{className:"w-3.5 h-3.5 text-[#8FE3B0]"}),n.jsx("span",{children:"Ketentuan Layanan & Kontrak"})]}),n.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E9EBEF] mb-4",children:["Syarat & ",n.jsx("span",{className:"chrome-text",children:"Ketentuan"})]}),n.jsx("p",{className:"text-sm font-mono text-[#636B76] max-w-xl mx-auto",children:"Terakhir diperbarui: 15 Maret 2025 • PT Respon Pintar Indonesia (Platform Omnichannel Customer Service)"})]}),n.jsxs("div",{className:"space-y-8 sm:space-y-10",children:[n.jsx("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:n.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Ce,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"1. Ketentuan Umum"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:'Dengan mendaftar, mengakses, atau menggunakan platform ResponPintar ("Layanan"), Anda menyatakan setuju untuk terikat secara hukum dengan Syarat & Ketentuan ini ("Ketentuan"). Ketentuan ini merupakan perjanjian yang mengikat antara Anda atau entitas bisnis yang Anda wakili dengan PT Respon Pintar Indonesia ("Kami").'})]})]})}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Ce,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"2. Definisi Istilah"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Dalam Syarat dan Ketentuan ini, istilah-istilah berikut memiliki arti:"})]})]}),n.jsxs("div",{className:"space-y-3 sm:ml-14",children:[n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed",children:[n.jsx("strong",{className:"text-[#E9EBEF] font-semibold",children:'"Layanan"'})," mengacu pada seluruh ekosistem platform ResponPintar, mencakup dashboard omnichannel, antarmuka agen CS terpadu, webhook, dan integrasi API pesan."]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed",children:[n.jsx("strong",{className:"text-[#E9EBEF] font-semibold",children:'"Pengguna / Pelanggan"'})," adalah perorangan, perusahaan, atau instansi yang mendaftarkan akun untuk mengelola customer service via ResponPintar."]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed",children:[n.jsx("strong",{className:"text-[#E9EBEF] font-semibold",children:'"Data Pelanggan"'})," adalah seluruh konten pesan, nomor kontak, histori obrolan, dan informasi kontak yang masuk melalui saluran omnichannel Anda."]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-4 text-sm text-[#AEB4BD] leading-relaxed",children:[n.jsx("strong",{className:"text-[#E9EBEF] font-semibold",children:'"Kanal Terhubung"'})," meliputi WhatsApp Business API resmi, Instagram Direct Message, Telegram, dan Live Chat web widget."]})]})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Ce,{className:"w-5 h-5"})}),n.jsx("div",{children:n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"3. Ketentuan Penggunaan Layanan Omnichannel"})})]}),n.jsxs("div",{className:"space-y-6 sm:ml-14",children:[n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"3.1. Kewajiban Pengguna:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Menjaga kerahasiaan kredensial login akun supervisor maupun agen CS Anda"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Mematuhi kebijakan penggunaan resmi dari Meta (WhatsApp Business Commerce Policy & Terms)"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Hanya mengirimkan pesan broadcast (opt-in) kepada pelanggan yang telah memberikan izin"})]})]})]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"3.2. Larangan & Pembatasan:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-red-400 mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Dilarang keras menyebarkan pesan spam massal tanpa izin, phishing, perjudian, atau konten melanggar UU ITE"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-red-400 mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Dilarang melakukan reverse engineering, decompile, atau merusak stabilitas server API ResponPintar"})]})]})]})]})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(qr,{className:"w-5 h-5"})}),n.jsx("div",{children:n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"4. Biaya Langganan & Pembayaran"})})]}),n.jsxs("div",{className:"space-y-6 sm:ml-14",children:[n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"4.1. Ketentuan Tagihan:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Paket langganan omnichannel dibayarkan di muka per bulan atau per tahun sesuai tier yang dipilih"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Biaya percakapan WhatsApp Business API resmi (Meta conversation fee) ditagihkan sesuai tarif resmi Meta tanpa markup tersembunyi"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Semua tagihan disajikan dalam mata uang Rupiah (IDR) dan mencantumkan faktur pajak resmi"})]})]})]}),n.jsxs("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:[n.jsx("h3",{className:"text-base font-semibold text-[#E9EBEF] mb-3",children:"4.2. Kebijakan Pembatalan & Pengembalian Dana:"}),n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Pengguna dapat membatalkan langganan kapan saja sebelum siklus tagihan berikutnya dimulai"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Sisa kuota atau sisa periode aktif yang belum terpakai bersifat non-refundable sesuai ketentuan industri SaaS"})]})]})]})]})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(ja,{className:"w-5 h-5"})}),n.jsx("div",{children:n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"5. Hak Kekayaan Intelektual"})})]}),n.jsx("div",{className:"space-y-4 sm:ml-14",children:n.jsx("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Hak cipta, source code sistem omnichannel, merek dagang, dan logo ResponPintar adalah milik eksklusif PT Respon Pintar Indonesia"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Anda tetap memiliki kepemilikan mutlak 100% atas seluruh Data Pelanggan dan histori percakapan bisnis Anda"})]})]})})})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Kr,{className:"w-5 h-5"})}),n.jsx("div",{children:n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"6. Batasan Tanggung Jawab & Jaminan SLA"})})]}),n.jsx("div",{className:"space-y-4 sm:ml-14",children:n.jsx("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:n.jsxs("ul",{className:"space-y-2.5 text-sm sm:text-base text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"Kami memberikan komitmen uptime server backend sebesar 99.9%"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx("span",{className:"text-[#8FE3B0] mt-1 font-bold",children:"•"}),n.jsx("span",{children:"ResponPintar tidak bertanggung jawab atas gangguan transmisi pesan yang disebabkan oleh downtime server pihak ketiga Meta/WhatsApp Cloud API, Telegram, atau force majeure"})]})]})})})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:[n.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx($r,{className:"w-5 h-5"})}),n.jsx("div",{children:n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"7. Penghentian & Penghapusan Akun"})})]}),n.jsx("div",{className:"space-y-4 sm:ml-14",children:n.jsx("div",{className:"bg-[#16181D]/60 border border-[rgba(244,245,247,0.06)] rounded-xl p-5",children:n.jsxs("p",{className:"text-sm sm:text-base text-[#AEB4BD] leading-relaxed mb-4",children:["Pengguna berhak mengajukan penghapusan akun kapan saja. Penghapusan akun akan memusnahkan seluruh token integrasi WhatsApp dan histori percakapan permanen sesuai prosedur yang tercantum di ",n.jsx("a",{href:"/delete-account",className:"underline underline-offset-4 text-[#E9EBEF] hover:text-[#8FE3B0] transition",children:"Halaman Penghapusan Akun"}),"."]})})})]}),n.jsx("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[rgba(244,245,247,0.16)]",children:n.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Gr,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF] mb-2",children:"8. Hukum yang Berlaku & Yurisdiksi"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Syarat & Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan terlebih dahulu melalui musyawarah mufakat, atau melalui yurisdiksi Pengadilan Negeri Jakarta Selatan."})]})]})}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.12)] backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]",children:[n.jsx("h2",{className:"text-2xl font-bold mb-3 text-center text-[#E9EBEF]",children:"Kontak Resmi Bantuan Legal"}),n.jsx("p",{className:"text-sm sm:text-base text-[#AEB4BD] text-center mb-8 max-w-xl mx-auto",children:"Untuk pertanyaan mengenai ketentuan layanan atau penandatanganan Perjanjian Kerahasiaan (NDA) enterprise:"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center",children:[n.jsx(xn,{className:"w-5 h-5 text-[#8FE3B0]"}),n.jsx("p",{className:"text-xs font-mono uppercase tracking-wider text-[#636B76]",children:"Email Legal"}),n.jsx("a",{href:"mailto:support@responpintar.com",className:"text-sm text-[#E9EBEF] hover:underline",children:"support@responpintar.com"})]}),n.jsxs("div",{className:"flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center",children:[n.jsx(Zn,{className:"w-5 h-5 text-[#8FE3B0]"}),n.jsx("p",{className:"text-xs font-mono uppercase tracking-wider text-[#636B76]",children:"WhatsApp Support"}),n.jsx("a",{href:"https://wa.me/6282189885080",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#E9EBEF] hover:underline",children:"+62 821-8988-5080"})]}),n.jsxs("div",{className:"flex flex-col items-center gap-2 bg-[#16181D]/80 rounded-xl p-5 border border-[rgba(244,245,247,0.08)] text-center",children:[n.jsx(va,{className:"w-5 h-5 text-[#8FE3B0]"}),n.jsx("p",{className:"text-xs font-mono uppercase tracking-wider text-[#636B76]",children:"Kantor"}),n.jsx("p",{className:"text-xs sm:text-sm text-[#AEB4BD] text-center",children:"Plaza Aminta Lt. 5, Jl. TB Simatupang, Jakarta Selatan"})]})]})]})]})]})]})}function os(){return n.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-16",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[n.jsx(un,{className:"w-4 h-4 text-[var(--brand-primary)]"}),n.jsx("span",{className:"text-sm",children:"About Us"})]}),n.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Digital Transformation for"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),n.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"ResponPintar is a technology company focused on AI solutions for various industries, helping businesses solve customer service challenges with innovative and easy-to-use technology."})]}),n.jsx("section",{className:"mb-20",children:n.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border",children:[n.jsx(Yr,{className:"w-4 h-4 text-[var(--brand-primary)]"}),n.jsx("span",{className:"text-sm",children:"Our Story"})]}),n.jsxs("h2",{className:"text-3xl sm:text-4xl",children:["Building the Future of"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),n.jsxs("div",{className:"space-y-4 text-muted-foreground leading-relaxed",children:[n.jsx("p",{children:"ResponPintar was founded with the mission of empowering businesses across Southeast Asia with AI technology accessible to everyone. We understand that every industry has unique needs when it comes to serving their customers."}),n.jsx("p",{children:"From e-commerce to healthcare, from education to banking — we provide solutions that can be customized to meet the specific needs of every business. Our team consists of AI experts, experienced developers, and customer experience specialists dedicated to creating technology that truly makes a difference."}),n.jsx("p",{children:"We don't just provide a platform — we become a partner in your digital transformation journey. With 24/7 support and continuous innovation, we ensure your business stays one step ahead."})]})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] opacity-20 blur-3xl rounded-3xl"}),n.jsx("div",{className:"relative bg-card border border-border rounded-2xl p-8 space-y-6",children:n.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[n.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[n.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"10K+"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Users"})]}),n.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[n.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"50M+"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Messages Processed"})]}),n.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[n.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"98%"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer Satisfaction"})]}),n.jsxs("div",{className:"text-center p-6 bg-secondary/50 rounded-xl border border-border",children:[n.jsx("div",{className:"text-3xl bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-2",children:"24/7"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Support Available"})]})]})})]})]})}),n.jsx("section",{className:"mb-20",children:n.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[n.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[n.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:n.jsx(Qr,{className:"w-7 h-7 text-white"})}),n.jsx("h2",{className:"text-2xl mb-4",children:"Our Vision"}),n.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To be the leader in digital transformation of customer service in Southeast Asia through sustainable and impactful AI innovation."})]}),n.jsxs("div",{className:"bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 transition-all",children:[n.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-6",children:n.jsx(Jr,{className:"w-7 h-7 text-white"})}),n.jsx("h2",{className:"text-2xl mb-4",children:"Our Mission"}),n.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To empower every business with AI technology that is accessible, efficient, and affordable to improve the quality of their customer service."})]})]})}),n.jsxs("section",{className:"mb-20",children:[n.jsxs("div",{className:"text-center mb-12",children:[n.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Our"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Values"})]}),n.jsx("p",{className:"text-lg text-muted-foreground",children:"The principles that guide every decision and innovation we make"})]}),n.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[n.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[n.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:n.jsx(et,{className:"w-6 h-6 text-white"})}),n.jsx("h3",{className:"text-lg mb-2",children:"Innovation"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Continuously innovating to deliver the best solutions"})]}),n.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[n.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:n.jsx(un,{className:"w-6 h-6 text-white"})}),n.jsx("h3",{className:"text-lg mb-2",children:"Customer First"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Customer satisfaction is our top priority"})]}),n.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[n.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:n.jsx(ja,{className:"w-6 h-6 text-white"})}),n.jsx("h3",{className:"text-lg mb-2",children:"Excellence"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Committed to quality and excellence"})]}),n.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all group",children:[n.jsx("div",{className:"w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:n.jsx(nt,{className:"w-6 h-6 text-white"})}),n.jsx("h3",{className:"text-lg mb-2",children:"Accessibility"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Technology accessible to everyone"})]})]})]}),n.jsxs("section",{className:"mb-20",children:[n.jsxs("div",{className:"text-center mb-12",children:[n.jsxs("h2",{className:"text-3xl sm:text-4xl mb-4",children:["Industries We"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Serve"})]}),n.jsx("p",{className:"text-lg text-muted-foreground",children:"Custom solutions for various industry sectors"})]}),n.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"E-Commerce",desc:"Quick responses for product inquiries and orders",svg:n.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[n.jsx("rect",{x:"6",y:"14",width:"28",height:"20",rx:"3",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),n.jsx("path",{d:"M14 14V10a6 6 0 0 1 12 0v4",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("circle",{cx:"20",cy:"25",r:"3",fill:"var(--brand-primary)",fillOpacity:"0.5"})]})},{title:"Healthcare",desc:"24/7 consultation and health information services",svg:n.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[n.jsx("rect",{x:"4",y:"4",width:"32",height:"32",rx:"8",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),n.jsx("path",{d:"M20 12v16M12 20h16",stroke:"var(--brand-primary)",strokeWidth:"3",strokeLinecap:"round"})]})},{title:"Education",desc:"Learning support and student administration",svg:n.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[n.jsx("path",{d:"M20 8L4 18l16 10 16-10L20 8z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),n.jsx("path",{d:"M10 23v7l10 5 10-5v-7",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.05"}),n.jsx("line",{x1:"36",y1:"18",x2:"36",y2:"32",stroke:"var(--brand-primary)",strokeWidth:"2"})]})},{title:"Banking",desc:"Customer service and financial product information",svg:n.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[n.jsx("path",{d:"M20 4L4 14h32L20 4z",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),n.jsx("rect",{x:"4",y:"32",width:"32",height:"4",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.3"}),n.jsx("rect",{x:"9",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"}),n.jsx("rect",{x:"18",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"}),n.jsx("rect",{x:"27",y:"16",width:"4",height:"16",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2",stroke:"var(--brand-primary)",strokeWidth:"1"})]})},{title:"Hospitality",desc:"Better booking and guest service experience",svg:n.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[n.jsx("rect",{x:"6",y:"12",width:"28",height:"22",rx:"3",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),n.jsx("rect",{x:"16",y:"6",width:"8",height:"8",rx:"2",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.15"}),n.jsx("path",{d:"M6 20h28",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.4"}),n.jsx("rect",{x:"12",y:"24",width:"6",height:"6",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2"}),n.jsx("rect",{x:"22",y:"24",width:"6",height:"6",rx:"1",fill:"var(--brand-primary)",fillOpacity:"0.2"})]})},{title:"Technology",desc:"Technical support and user onboarding",svg:n.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-10 h-10",children:[n.jsx("rect",{x:"10",y:"4",width:"20",height:"32",rx:"4",stroke:"var(--brand-primary)",strokeWidth:"2",fill:"var(--brand-primary)",fillOpacity:"0.1"}),n.jsx("line",{x1:"10",y1:"10",x2:"30",y2:"10",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.3"}),n.jsx("line",{x1:"10",y1:"30",x2:"30",y2:"30",stroke:"var(--brand-primary)",strokeWidth:"1.5",opacity:"0.3"}),n.jsx("circle",{cx:"20",cy:"33",r:"1.5",fill:"var(--brand-primary)",fillOpacity:"0.5"}),n.jsx("path",{d:"M16 18l3 3 5-6",stroke:"var(--brand-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}].map((e,t)=>n.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 hover:border-[var(--brand-primary)]/20 hover:shadow-lg transition-all",children:[n.jsx("div",{className:"mb-4",children:e.svg}),n.jsx("h3",{className:"text-lg mb-2",children:e.title}),n.jsx("p",{className:"text-sm text-muted-foreground",children:e.desc})]},t))})]}),n.jsxs("section",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl p-12 text-center text-white",children:[n.jsx(ba,{className:"w-12 h-12 mx-auto mb-6"}),n.jsx("h2",{className:"text-3xl sm:text-4xl mb-4",children:"Ready to Transform Your Customer Service?"}),n.jsx("p",{className:"text-lg mb-8 opacity-90 max-w-2xl mx-auto",children:"Join thousands of businesses that have experienced the benefits of AI technology from ResponPintar"}),n.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[n.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:n.jsx("a",{href:"https://wa.me/6282189885080?text=Hello,%20I%20got%20information%20from%20the%20ResponPintar%20website.%20May%20I%20know%20more%20about%20the%20application?",target:"_blank",rel:"noopener noreferrer",children:"Contact Sales"})}),n.jsx("a",{href:"/demo",className:"px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all inline-block",children:"View Demo"})]})]})]})})}const ne=[{slug:"bagaimana-ai-mengubah-landscape-customer-service-2025",title:"Bagaimana AI Mengubah Landscape Customer Service di 2025",excerpt:"Perkembangan AI telah membawa perubahan signifikan dalam cara bisnis berinteraksi dengan pelanggan mereka. Simak tren terbaru yang perlu Anda ketahui.",category:"Teknologi",date:"15 Mar 2025",image:"/images/blog/ai-customer-service.jpg",readTime:"8 menit",author:{name:"Dr. Sarah Wijaya",avatar:"SW"},content:`
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
    `}],ls="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function pn(e){const[t,a]=f.useState(!1),r=()=>{a(!0)},{src:i,alt:s,style:o,className:l,...u}=e;return t?n.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${l??""}`,style:o,children:n.jsx("div",{className:"flex items-center justify-center w-full h-full",children:n.jsx("img",{src:ls,alt:"Error loading image",...u,"data-original-url":i})})}):n.jsx("img",{src:i,alt:s,className:l,style:o,...u,onError:r})}function cs(){return n.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-16",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6",children:[n.jsx(Xr,{className:"w-4 h-4 text-[var(--brand-primary)]"}),n.jsx("span",{className:"text-sm",children:"Blog & Insights"})]}),n.jsxs("h1",{className:"text-4xl sm:text-5xl mb-4",children:["Articles & Insights on"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Customer Service"})]}),n.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"Learn the latest strategies, tips, and trends in customer service and AI to help your business grow"})]}),n.jsx("div",{className:"mb-16",children:n.jsx(X,{to:`/blog/${ne[0].slug}`,className:"group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 transition-all",children:n.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[n.jsxs("div",{className:"relative h-64 lg:h-auto",children:[n.jsx(pn,{src:ne[0].image,alt:ne[0].title,className:"w-full h-full object-cover"}),n.jsx("div",{className:"absolute top-4 left-4",children:n.jsx("span",{className:"px-3 py-1 bg-[var(--brand-primary)] text-white text-xs rounded-full",children:"Featured"})})]}),n.jsxs("div",{className:"p-8 flex flex-col justify-center",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-muted-foreground",children:[n.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:ne[0].category}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(dn,{className:"w-4 h-4"}),n.jsx("span",{children:ne[0].date})]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(mn,{className:"w-4 h-4"}),n.jsx("span",{children:ne[0].readTime})]})]}),n.jsx("h2",{className:"text-3xl mb-4 group-hover:text-[var(--brand-primary)] transition-colors",children:ne[0].title}),n.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:ne[0].excerpt}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:n.jsx("span",{className:"text-white text-sm",children:ne[0].author.avatar})}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm",children:ne[0].author.name}),n.jsx("p",{className:"text-xs text-muted-foreground",children:"Author"})]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-[var(--brand-primary)] group-hover:gap-3 transition-all",children:[n.jsx("span",{className:"text-sm",children:"Read More"}),n.jsx(Ye,{className:"w-4 h-4"})]})]})]})]})})}),n.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:ne.slice(1).map(e=>n.jsxs(X,{to:`/blog/${e.slug}`,className:"group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/20 transition-all",children:[n.jsx("div",{className:"relative h-48 overflow-hidden",children:n.jsx(pn,{src:e.image,alt:e.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),n.jsxs("div",{className:"p-6",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-3 text-xs text-muted-foreground",children:[n.jsx("span",{className:"px-2 py-1 bg-secondary rounded-full text-[var(--brand-primary)]",children:e.category}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(dn,{className:"w-3 h-3"}),n.jsx("span",{children:e.date})]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(mn,{className:"w-3 h-3"}),n.jsx("span",{children:e.readTime})]})]}),n.jsx("h3",{className:"text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:e.title}),n.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:e.excerpt}),n.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:n.jsx("span",{className:"text-white text-xs",children:e.author.avatar})}),n.jsx("span",{className:"text-xs",children:e.author.name})]}),n.jsx(Ye,{className:"w-4 h-4 text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform"})]})]})]},e.slug))}),n.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)]/10 to-[var(--brand-gradient-end)]/10 border border-[var(--brand-primary)]/20 rounded-2xl",children:[n.jsx("h2",{className:"text-2xl mb-6 text-center",children:"Categories"}),n.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:Array.from(new Set(ne.map(e=>e.category))).map(e=>n.jsx("button",{className:"px-4 py-2 bg-card border border-border rounded-lg hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all",children:e},e))})]})]})})}function us(e,t){const a={};return(e[e.length-1]===""?[...e,""]:e).join((a.padRight?" ":"")+","+(a.padLeft===!1?"":" ")).trim()}const ds=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ms=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ps={};function Tt(e,t){return(ps.jsx?ms:ds).test(e)}const hs=/[ \t\n\f\r]/g;function gs(e){return typeof e=="object"?e.type==="text"?Rt(e.value):!1:Rt(e)}function Rt(e){return e.replace(hs,"")===""}class nn{constructor(t,a,r){this.normal=a,this.property=t,r&&(this.space=r)}}nn.prototype.normal={};nn.prototype.property={};nn.prototype.space=void 0;function Da(e,t){const a={},r={};for(const i of e)Object.assign(a,i.property),Object.assign(r,i.normal);return new nn(a,r,t)}function Un(e){return e.toLowerCase()}class ae{constructor(t,a){this.attribute=a,this.property=t}}ae.prototype.attribute="";ae.prototype.booleanish=!1;ae.prototype.boolean=!1;ae.prototype.commaOrSpaceSeparated=!1;ae.prototype.commaSeparated=!1;ae.prototype.defined=!1;ae.prototype.mustUseProperty=!1;ae.prototype.number=!1;ae.prototype.overloadedBoolean=!1;ae.prototype.property="";ae.prototype.spaceSeparated=!1;ae.prototype.space=void 0;let xs=0;const F=Ae(),G=Ae(),Vn=Ae(),w=Ae(),K=Ae(),De=Ae(),ie=Ae();function Ae(){return 2**++xs}const qn=Object.freeze(Object.defineProperty({__proto__:null,boolean:F,booleanish:G,commaOrSpaceSeparated:ie,commaSeparated:De,number:w,overloadedBoolean:Vn,spaceSeparated:K},Symbol.toStringTag,{value:"Module"})),Sn=Object.keys(qn);class it extends ae{constructor(t,a,r,i){let s=-1;if(super(t,a),Dt(this,"space",i),typeof r=="number")for(;++s<Sn.length;){const o=Sn[s];Dt(this,Sn[s],(r&qn[o])===qn[o])}}}it.prototype.defined=!0;function Dt(e,t,a){a&&(e[t]=a)}function Me(e){const t={},a={};for(const[r,i]of Object.entries(e.properties)){const s=new it(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,a[Un(r)]=r,a[Un(s.attribute)]=r}return new nn(t,a,e.space)}const Fa=Me({properties:{ariaActiveDescendant:null,ariaAtomic:G,ariaAutoComplete:null,ariaBusy:G,ariaChecked:G,ariaColCount:w,ariaColIndex:w,ariaColSpan:w,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:G,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:G,ariaFlowTo:K,ariaGrabbed:G,ariaHasPopup:null,ariaHidden:G,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:w,ariaLive:null,ariaModal:G,ariaMultiLine:G,ariaMultiSelectable:G,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:w,ariaPressed:G,ariaReadOnly:G,ariaRelevant:null,ariaRequired:G,ariaRoleDescription:K,ariaRowCount:w,ariaRowIndex:w,ariaRowSpan:w,ariaSelected:G,ariaSetSize:w,ariaSort:null,ariaValueMax:w,ariaValueMin:w,ariaValueNow:w,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Ma(e,t){return t in e?e[t]:t}function La(e,t){return Ma(e,t.toLowerCase())}const fs=Me({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:De,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:F,allowPaymentRequest:F,allowUserMedia:F,alt:null,as:null,async:F,autoCapitalize:null,autoComplete:K,autoFocus:F,autoPlay:F,blocking:K,capture:null,charSet:null,checked:F,cite:null,className:K,cols:w,colSpan:null,content:null,contentEditable:G,controls:F,controlsList:K,coords:w|De,crossOrigin:null,data:null,dateTime:null,decoding:null,default:F,defer:F,dir:null,dirName:null,disabled:F,download:Vn,draggable:G,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:F,formTarget:null,headers:K,height:w,hidden:Vn,high:w,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:F,inputMode:null,integrity:null,is:null,isMap:F,itemId:null,itemProp:K,itemRef:K,itemScope:F,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:F,low:w,manifest:null,max:null,maxLength:w,media:null,method:null,min:null,minLength:w,multiple:F,muted:F,name:null,nonce:null,noModule:F,noValidate:F,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:F,optimum:w,pattern:null,ping:K,placeholder:null,playsInline:F,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:F,referrerPolicy:null,rel:K,required:F,reversed:F,rows:w,rowSpan:w,sandbox:K,scope:null,scoped:F,seamless:F,selected:F,shadowRootClonable:F,shadowRootDelegatesFocus:F,shadowRootMode:null,shape:null,size:w,sizes:null,slot:null,span:w,spellCheck:G,src:null,srcDoc:null,srcLang:null,srcSet:null,start:w,step:null,style:null,tabIndex:w,target:null,title:null,translate:null,type:null,typeMustMatch:F,useMap:null,value:G,width:w,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:w,borderColor:null,bottomMargin:w,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:F,declare:F,event:null,face:null,frame:null,frameBorder:null,hSpace:w,leftMargin:w,link:null,longDesc:null,lowSrc:null,marginHeight:w,marginWidth:w,noResize:F,noHref:F,noShade:F,noWrap:F,object:null,profile:null,prompt:null,rev:null,rightMargin:w,rules:null,scheme:null,scrolling:G,standby:null,summary:null,text:null,topMargin:w,valueType:null,version:null,vAlign:null,vLink:null,vSpace:w,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:F,disableRemotePlayback:F,prefix:null,property:null,results:w,security:null,unselectable:null},space:"html",transform:La}),bs=Me({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ie,accentHeight:w,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:w,amplitude:w,arabicForm:null,ascent:w,attributeName:null,attributeType:null,azimuth:w,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:w,by:null,calcMode:null,capHeight:w,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:w,diffuseConstant:w,direction:null,display:null,dur:null,divisor:w,dominantBaseline:null,download:F,dx:null,dy:null,edgeMode:null,editable:null,elevation:w,enableBackground:null,end:null,event:null,exponent:w,externalResourcesRequired:null,fill:null,fillOpacity:w,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:De,g2:De,glyphName:De,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:w,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:w,horizOriginX:w,horizOriginY:w,id:null,ideographic:w,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:w,k:w,k1:w,k2:w,k3:w,k4:w,kernelMatrix:ie,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:w,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:w,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:w,overlineThickness:w,paintOrder:null,panose1:null,path:null,pathLength:w,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:w,pointsAtY:w,pointsAtZ:w,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ie,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ie,rev:ie,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ie,requiredFeatures:ie,requiredFonts:ie,requiredFormats:ie,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:w,specularExponent:w,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:w,strikethroughThickness:w,string:null,stroke:null,strokeDashArray:ie,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:w,strokeOpacity:w,strokeWidth:null,style:null,surfaceScale:w,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ie,tabIndex:w,tableValues:null,target:null,targetX:w,targetY:w,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ie,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:w,underlineThickness:w,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:w,values:null,vAlphabetic:w,vMathematical:w,vectorEffect:null,vHanging:w,vIdeographic:w,version:null,vertAdvY:w,vertOriginX:w,vertOriginY:w,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:w,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ma}),Oa=Me({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),za=Me({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:La}),_a=Me({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),ys={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ks=/[A-Z]/g,Ft=/-[a-z]/g,vs=/^data[-\w.:]+$/i;function js(e,t){const a=Un(t);let r=t,i=ae;if(a in e.normal)return e.property[e.normal[a]];if(a.length>4&&a.slice(0,4)==="data"&&vs.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Ft,Es);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Ft.test(s)){let o=s.replace(ks,ws);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=it}return new i(r,t)}function ws(e){return"-"+e.toLowerCase()}function Es(e){return e.charAt(1).toUpperCase()}const Ns=Da([Fa,fs,Oa,za,_a],"html"),st=Da([Fa,bs,Oa,za,_a],"svg");function Ss(e){return e.join(" ").trim()}var Te={},Cn,Mt;function Cs(){if(Mt)return Cn;Mt=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,a=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,c="/",d="*",m="",h="comment",p="declaration";function k(N,v){if(typeof N!="string")throw new TypeError("First argument must be a string");if(!N)return[];v=v||{};var P=1,C=1;function H(T){var S=T.match(t);S&&(P+=S.length);var V=T.lastIndexOf(u);C=~V?T.length-V:C+T.length}function U(){var T={line:P,column:C};return function(S){return S.position=new j(T),z(),S}}function j(T){this.start=T,this.end={line:P,column:C},this.source=v.source}j.prototype.content=N;function O(T){var S=new Error(v.source+":"+P+":"+C+": "+T);if(S.reason=T,S.filename=v.source,S.line=P,S.column=C,S.source=N,!v.silent)throw S}function M(T){var S=T.exec(N);if(S){var V=S[0];return H(V),N=N.slice(V.length),S}}function z(){M(a)}function B(T){var S;for(T=T||[];S=I();)S!==!1&&T.push(S);return T}function I(){var T=U();if(!(c!=N.charAt(0)||d!=N.charAt(1))){for(var S=2;m!=N.charAt(S)&&(d!=N.charAt(S)||c!=N.charAt(S+1));)++S;if(S+=2,m===N.charAt(S-1))return O("End of comment missing");var V=N.slice(2,S-2);return C+=2,H(V),N=N.slice(S),C+=2,T({type:h,comment:V})}}function A(){var T=U(),S=M(r);if(S){if(I(),!M(i))return O("property missing ':'");var V=M(s),Y=T({type:p,property:y(S[0].replace(e,m)),value:V?y(V[0].replace(e,m)):m});return M(o),Y}}function _(){var T=[];B(T);for(var S;S=A();)S!==!1&&(T.push(S),B(T));return T}return z(),_()}function y(N){return N?N.replace(l,m):m}return Cn=k,Cn}var Lt;function As(){if(Lt)return Te;Lt=1;var e=Te&&Te.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Te,"__esModule",{value:!0}),Te.default=a;const t=e(Cs());function a(r,i){let s=null;if(!r||typeof r!="string")return s;const o=(0,t.default)(r),l=typeof i=="function";return o.forEach(u=>{if(u.type!=="declaration")return;const{property:c,value:d}=u;l?i(c,d,u):d&&(s=s||{},s[c]=d)}),s}return Te}var He={},Ot;function Is(){if(Ot)return He;Ot=1,Object.defineProperty(He,"__esModule",{value:!0}),He.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,a=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,s=function(c){return!c||a.test(c)||e.test(c)},o=function(c,d){return d.toUpperCase()},l=function(c,d){return"".concat(d,"-")},u=function(c,d){return d===void 0&&(d={}),s(c)?c:(c=c.toLowerCase(),d.reactCompat?c=c.replace(i,l):c=c.replace(r,l),c.replace(t,o))};return He.camelCase=u,He}var Ue,zt;function Bs(){if(zt)return Ue;zt=1;var e=Ue&&Ue.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},t=e(As()),a=Is();function r(i,s){var o={};return!i||typeof i!="string"||(0,t.default)(i,function(l,u){l&&u&&(o[(0,a.camelCase)(l,s)]=u)}),o}return r.default=r,Ue=r,Ue}var Ps=Bs();const Ts=fa(Ps),Wa=Ha("end"),ot=Ha("start");function Ha(e){return t;function t(a){const r=a&&a.position&&a.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Rs(e){const t=ot(e),a=Wa(e);if(t&&a)return{start:t,end:a}}function Ke(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?_t(e.position):"start"in e||"end"in e?_t(e):"line"in e||"column"in e?Kn(e):""}function Kn(e){return Wt(e&&e.line)+":"+Wt(e&&e.column)}function _t(e){return Kn(e&&e.start)+"-"+Kn(e&&e.end)}function Wt(e){return e&&typeof e=="number"?e:1}class Z extends Error{constructor(t,a,r){super(),typeof a=="string"&&(r=a,a=void 0);let i="",s={},o=!1;if(a&&("line"in a&&"column"in a?s={place:a}:"start"in a&&"end"in a?s={place:a}:"type"in a?s={ancestors:[a],place:a.position}:s={...a}),typeof t=="string"?i=t:!s.cause&&t&&(o=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?s.ruleId=r:(s.source=r.slice(0,u),s.ruleId=r.slice(u+1))}if(!s.place&&s.ancestors&&s.ancestors){const u=s.ancestors[s.ancestors.length-1];u&&(s.place=u.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ke(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Z.prototype.file="";Z.prototype.name="";Z.prototype.reason="";Z.prototype.message="";Z.prototype.stack="";Z.prototype.column=void 0;Z.prototype.line=void 0;Z.prototype.ancestors=void 0;Z.prototype.cause=void 0;Z.prototype.fatal=void 0;Z.prototype.place=void 0;Z.prototype.ruleId=void 0;Z.prototype.source=void 0;const lt={}.hasOwnProperty,Ds=new Map,Fs=/[A-Z]/g,Ms=new Set(["table","tbody","thead","tfoot","tr"]),Ls=new Set(["td","th"]),Ua="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Os(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const a=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Ks(a,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=qs(a,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:a,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?st:Ns,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Va(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Va(e,t,a){if(t.type==="element")return zs(e,t,a);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return _s(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Hs(e,t,a);if(t.type==="mdxjsEsm")return Ws(e,t);if(t.type==="root")return Us(e,t,a);if(t.type==="text")return Vs(e,t)}function zs(e,t,a){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=st,e.schema=i),e.ancestors.push(t);const s=Ka(e,t.tagName,!1),o=$s(e,t);let l=ut(e,t);return Ms.has(t.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!gs(u):!0})),qa(e,o,s,t),ct(o,l),e.ancestors.pop(),e.schema=r,e.create(t,s,o,a)}function _s(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Xe(e,t.position)}function Ws(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Xe(e,t.position)}function Hs(e,t,a){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=st,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Ka(e,t.name,!0),o=Gs(e,t),l=ut(e,t);return qa(e,o,s,t),ct(o,l),e.ancestors.pop(),e.schema=r,e.create(t,s,o,a)}function Us(e,t,a){const r={};return ct(r,ut(e,t)),e.create(t,e.Fragment,r,a)}function Vs(e,t){return t.value}function qa(e,t,a,r){typeof a!="string"&&a!==e.Fragment&&e.passNode&&(t.node=r)}function ct(e,t){if(t.length>0){const a=t.length>1?t:t[0];a&&(e.children=a)}}function qs(e,t,a){return r;function r(i,s,o,l){const c=Array.isArray(o.children)?a:t;return l?c(s,o,l):c(s,o)}}function Ks(e,t){return a;function a(r,i,s,o){const l=Array.isArray(s.children),u=ot(r);return t(i,s,o,l,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function $s(e,t){const a={};let r,i;for(i in t.properties)if(i!=="children"&&lt.call(t.properties,i)){const s=Ys(e,i,t.properties[i]);if(s){const[o,l]=s;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Ls.has(t.tagName)?r=l:a[o]=l}}if(r){const s=a.style||(a.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return a}function Gs(e,t){const a={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const o=s.expression;o.type;const l=o.properties[0];l.type,Object.assign(a,e.evaluater.evaluateExpression(l.argument))}else Xe(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else Xe(e,t.position);else s=r.value===null?!0:r.value;a[i]=s}return a}function ut(e,t){const a=[];let r=-1;const i=e.passKeys?new Map:Ds;for(;++r<t.children.length;){const s=t.children[r];let o;if(e.passKeys){const u=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(u){const c=i.get(u)||0;o=u+"-"+c,i.set(u,c+1)}}const l=Va(e,s,o);l!==void 0&&a.push(l)}return a}function Ys(e,t,a){const r=js(e.schema,t);if(!(a==null||typeof a=="number"&&Number.isNaN(a))){if(Array.isArray(a)&&(a=r.commaSeparated?us(a):Ss(a)),r.property==="style"){let i=typeof a=="object"?a:Qs(e,String(a));return e.stylePropertyNameCase==="css"&&(i=Js(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?ys[r.property]||r.property:r.attribute,a]}}function Qs(e,t){try{return Ts(t,{reactCompat:!0})}catch(a){if(e.ignoreInvalidStyle)return{};const r=a,i=new Z("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Ua+"#cannot-parse-style-attribute",i}}function Ka(e,t,a){let r;if(!a)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,o;for(;++s<i.length;){const l=Tt(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=o}else r=Tt(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return lt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Xe(e)}function Xe(e,t){const a=new Z("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=Ua+"#cannot-handle-mdx-estrees-without-createevaluater",a}function Js(e){const t={};let a;for(a in e)lt.call(e,a)&&(t[Xs(a)]=e[a]);return t}function Xs(e){let t=e.replace(Fs,Zs);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Zs(e){return"-"+e.toLowerCase()}const An={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},eo={};function no(e,t){const a=eo,r=typeof a.includeImageAlt=="boolean"?a.includeImageAlt:!0,i=typeof a.includeHtml=="boolean"?a.includeHtml:!0;return $a(e,r,i)}function $a(e,t,a){if(to(e)){if("value"in e)return e.type==="html"&&!a?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ht(e.children,t,a)}return Array.isArray(e)?Ht(e,t,a):""}function Ht(e,t,a){const r=[];let i=-1;for(;++i<e.length;)r[i]=$a(e[i],t,a);return r.join("")}function to(e){return!!(e&&typeof e=="object")}const Ut=document.createElement("i");function dt(e){const t="&"+e+";";Ut.innerHTML=t;const a=Ut.textContent;return a.charCodeAt(a.length-1)===59&&e!=="semi"||a===t?!1:a}function ge(e,t,a,r){const i=e.length;let s=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,a=a>0?a:0,r.length<1e4)o=Array.from(r),o.unshift(t,a),e.splice(...o);else for(a&&e.splice(t,a);s<r.length;)o=r.slice(s,s+1e4),o.unshift(t,0),e.splice(...o),s+=1e4,t+=1e4}function oe(e,t){return e.length>0?(ge(e,e.length,0,t),e):t}const Vt={}.hasOwnProperty;function ao(e){const t={};let a=-1;for(;++a<e.length;)ro(t,e[a]);return t}function ro(e,t){let a;for(a in t){const i=(Vt.call(e,a)?e[a]:void 0)||(e[a]={}),s=t[a];let o;if(s)for(o in s){Vt.call(i,o)||(i[o]=[]);const l=s[o];io(i[o],Array.isArray(l)?l:l?[l]:[])}}}function io(e,t){let a=-1;const r=[];for(;++a<t.length;)(t[a].add==="after"?e:r).push(t[a]);ge(e,0,0,r)}function Ga(e,t){const a=Number.parseInt(e,t);return a<9||a===11||a>13&&a<32||a>126&&a<160||a>55295&&a<57344||a>64975&&a<65008||(a&65535)===65535||(a&65535)===65534||a>1114111?"�":String.fromCodePoint(a)}function Fe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const he=Ee(/[A-Za-z]/),se=Ee(/[\dA-Za-z]/),so=Ee(/[#-'*+\--9=?A-Z^-~]/);function $n(e){return e!==null&&(e<32||e===127)}const Gn=Ee(/\d/),oo=Ee(/[\dA-Fa-f]/),lo=Ee(/[!-/:-@[-`{-~]/);function R(e){return e!==null&&e<-2}function te(e){return e!==null&&(e<0||e===32)}function W(e){return e===-2||e===-1||e===32}const co=Ee(/\p{P}|\p{S}/u),uo=Ee(/\s/);function Ee(e){return t;function t(a){return a!==null&&a>-1&&e.test(String.fromCharCode(a))}}function Le(e){const t=[];let a=-1,r=0,i=0;for(;++a<e.length;){const s=e.charCodeAt(a);let o="";if(s===37&&se(e.charCodeAt(a+1))&&se(e.charCodeAt(a+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(a+1);s<56320&&l>56319&&l<57344?(o=String.fromCharCode(s,l),i=1):o="�"}else o=String.fromCharCode(s);o&&(t.push(e.slice(r,a),encodeURIComponent(o)),r=a+i+1,o=""),i&&(a+=i,i=0)}return t.join("")+e.slice(r)}function $(e,t,a,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(u){return W(u)?(e.enter(a),l(u)):t(u)}function l(u){return W(u)&&s++<i?(e.consume(u),l):(e.exit(a),t(u))}}const mo={tokenize:po};function po(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let a;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),$(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const u=e.enter("chunkText",{contentType:"text",previous:a});return a&&(a.next=u),a=u,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return R(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),o)}}const ho={tokenize:go},qt={tokenize:xo};function go(e){const t=this,a=[];let r=0,i,s,o;return l;function l(C){if(r<a.length){const H=a[r];return t.containerState=H[1],e.attempt(H[0].continuation,u,c)(C)}return c(C)}function u(C){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&P();const H=t.events.length;let U=H,j;for(;U--;)if(t.events[U][0]==="exit"&&t.events[U][1].type==="chunkFlow"){j=t.events[U][1].end;break}v(r);let O=H;for(;O<t.events.length;)t.events[O][1].end={...j},O++;return ge(t.events,U+1,0,t.events.slice(H)),t.events.length=O,c(C)}return l(C)}function c(C){if(r===a.length){if(!i)return h(C);if(i.currentConstruct&&i.currentConstruct.concrete)return k(C);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(qt,d,m)(C)}function d(C){return i&&P(),v(r),h(C)}function m(C){return t.parser.lazy[t.now().line]=r!==a.length,o=t.now().offset,k(C)}function h(C){return t.containerState={},e.attempt(qt,p,k)(C)}function p(C){return r++,a.push([t.currentConstruct,t.containerState]),h(C)}function k(C){if(C===null){i&&P(),v(0),e.consume(C);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),y(C)}function y(C){if(C===null){N(e.exit("chunkFlow"),!0),v(0),e.consume(C);return}return R(C)?(e.consume(C),N(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(C),y)}function N(C,H){const U=t.sliceStream(C);if(H&&U.push(null),C.previous=s,s&&(s.next=C),s=C,i.defineSkip(C.start),i.write(U),t.parser.lazy[C.start.line]){let j=i.events.length;for(;j--;)if(i.events[j][1].start.offset<o&&(!i.events[j][1].end||i.events[j][1].end.offset>o))return;const O=t.events.length;let M=O,z,B;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){if(z){B=t.events[M][1].end;break}z=!0}for(v(r),j=O;j<t.events.length;)t.events[j][1].end={...B},j++;ge(t.events,M+1,0,t.events.slice(O)),t.events.length=j}}function v(C){let H=a.length;for(;H-- >C;){const U=a[H];t.containerState=U[1],U[0].exit.call(t,e)}a.length=C}function P(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function xo(e,t,a){return $(e,e.attempt(this.parser.constructs.document,t,a),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Kt(e){if(e===null||te(e)||uo(e))return 1;if(co(e))return 2}function mt(e,t,a){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,a),r.push(s))}return t}const Yn={name:"attention",resolveAll:fo,tokenize:bo};function fo(e,t){let a=-1,r,i,s,o,l,u,c,d;for(;++a<e.length;)if(e[a][0]==="enter"&&e[a][1].type==="attentionSequence"&&e[a][1]._close){for(r=a;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[a][1]).charCodeAt(0)){if((e[r][1]._close||e[a][1]._open)&&(e[a][1].end.offset-e[a][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[a][1].end.offset-e[a][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[a][1].end.offset-e[a][1].start.offset>1?2:1;const m={...e[r][1].end},h={...e[a][1].start};$t(m,-u),$t(h,u),o={type:u>1?"strongSequence":"emphasisSequence",start:m,end:{...e[r][1].end}},l={type:u>1?"strongSequence":"emphasisSequence",start:{...e[a][1].start},end:h},s={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[a][1].start}},i={type:u>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[a][1].start={...l.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=oe(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=oe(c,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",s,t]]),c=oe(c,mt(t.parser.constructs.insideSpan.null,e.slice(r+1,a),t)),c=oe(c,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[a][1].end.offset-e[a][1].start.offset?(d=2,c=oe(c,[["enter",e[a][1],t],["exit",e[a][1],t]])):d=0,ge(e,r-1,a-r+3,c),a=r+c.length-d-2;break}}for(a=-1;++a<e.length;)e[a][1].type==="attentionSequence"&&(e[a][1].type="data");return e}function bo(e,t){const a=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Kt(r);let s;return o;function o(u){return s=u,e.enter("attentionSequence"),l(u)}function l(u){if(u===s)return e.consume(u),l;const c=e.exit("attentionSequence"),d=Kt(u),m=!d||d===2&&i||a.includes(u),h=!i||i===2&&d||a.includes(r);return c._open=!!(s===42?m:m&&(i||!h)),c._close=!!(s===42?h:h&&(d||!m)),t(u)}}function $t(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const yo={name:"autolink",tokenize:ko};function ko(e,t,a){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(p){return he(p)?(e.consume(p),o):p===64?a(p):c(p)}function o(p){return p===43||p===45||p===46||se(p)?(r=1,l(p)):c(p)}function l(p){return p===58?(e.consume(p),r=0,u):(p===43||p===45||p===46||se(p))&&r++<32?(e.consume(p),l):(r=0,c(p))}function u(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||$n(p)?a(p):(e.consume(p),u)}function c(p){return p===64?(e.consume(p),d):so(p)?(e.consume(p),c):a(p)}function d(p){return se(p)?m(p):a(p)}function m(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):h(p)}function h(p){if((p===45||se(p))&&r++<63){const k=p===45?h:m;return e.consume(p),k}return a(p)}}const yn={partial:!0,tokenize:vo};function vo(e,t,a){return r;function r(s){return W(s)?$(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||R(s)?t(s):a(s)}}const Ya={continuation:{tokenize:wo},exit:Eo,name:"blockQuote",tokenize:jo};function jo(e,t,a){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),s}return a(o)}function s(o){return W(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function wo(e,t,a){const r=this;return i;function i(o){return W(o)?$(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return e.attempt(Ya,t,a)(o)}}function Eo(e){e.exit("blockQuote")}const Qa={name:"characterEscape",tokenize:No};function No(e,t,a){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return lo(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):a(s)}}const Ja={name:"characterReference",tokenize:So};function So(e,t,a){const r=this;let i=0,s,o;return l;function l(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),u}function u(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),s=31,o=se,d(m))}function c(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,o=oo,d):(e.enter("characterReferenceValue"),s=7,o=Gn,d(m))}function d(m){if(m===59&&i){const h=e.exit("characterReferenceValue");return o===se&&!dt(r.sliceSerialize(h))?a(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(m)&&i++<s?(e.consume(m),d):a(m)}}const Gt={partial:!0,tokenize:Ao},Yt={concrete:!0,name:"codeFenced",tokenize:Co};function Co(e,t,a){const r=this,i={partial:!0,tokenize:U};let s=0,o=0,l;return u;function u(j){return c(j)}function c(j){const O=r.events[r.events.length-1];return s=O&&O[1].type==="linePrefix"?O[2].sliceSerialize(O[1],!0).length:0,l=j,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(j)}function d(j){return j===l?(o++,e.consume(j),d):o<3?a(j):(e.exit("codeFencedFenceSequence"),W(j)?$(e,m,"whitespace")(j):m(j))}function m(j){return j===null||R(j)?(e.exit("codeFencedFence"),r.interrupt?t(j):e.check(Gt,y,H)(j)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(j))}function h(j){return j===null||R(j)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(j)):W(j)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),$(e,p,"whitespace")(j)):j===96&&j===l?a(j):(e.consume(j),h)}function p(j){return j===null||R(j)?m(j):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(j))}function k(j){return j===null||R(j)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(j)):j===96&&j===l?a(j):(e.consume(j),k)}function y(j){return e.attempt(i,H,N)(j)}function N(j){return e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),v}function v(j){return s>0&&W(j)?$(e,P,"linePrefix",s+1)(j):P(j)}function P(j){return j===null||R(j)?e.check(Gt,y,H)(j):(e.enter("codeFlowValue"),C(j))}function C(j){return j===null||R(j)?(e.exit("codeFlowValue"),P(j)):(e.consume(j),C)}function H(j){return e.exit("codeFenced"),t(j)}function U(j,O,M){let z=0;return B;function B(S){return j.enter("lineEnding"),j.consume(S),j.exit("lineEnding"),I}function I(S){return j.enter("codeFencedFence"),W(S)?$(j,A,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):A(S)}function A(S){return S===l?(j.enter("codeFencedFenceSequence"),_(S)):M(S)}function _(S){return S===l?(z++,j.consume(S),_):z>=o?(j.exit("codeFencedFenceSequence"),W(S)?$(j,T,"whitespace")(S):T(S)):M(S)}function T(S){return S===null||R(S)?(j.exit("codeFencedFence"),O(S)):M(S)}}}function Ao(e,t,a){const r=this;return i;function i(o){return o===null?a(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s)}function s(o){return r.parser.lazy[r.now().line]?a(o):t(o)}}const In={name:"codeIndented",tokenize:Bo},Io={partial:!0,tokenize:Po};function Bo(e,t,a){const r=this;return i;function i(c){return e.enter("codeIndented"),$(e,s,"linePrefix",5)(c)}function s(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?o(c):a(c)}function o(c){return c===null?u(c):R(c)?e.attempt(Io,o,u)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||R(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),l)}function u(c){return e.exit("codeIndented"),t(c)}}function Po(e,t,a){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?a(o):R(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):$(e,s,"linePrefix",5)(o)}function s(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):R(o)?i(o):a(o)}}const To={name:"codeText",previous:Do,resolve:Ro,tokenize:Fo};function Ro(e){let t=e.length-4,a=3,r,i;if((e[a][1].type==="lineEnding"||e[a][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=a;++r<t;)if(e[r][1].type==="codeTextData"){e[a][1].type="codeTextPadding",e[t][1].type="codeTextPadding",a+=2,t-=2;break}}for(r=a-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Do(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Fo(e,t,a){let r=0,i,s;return o;function o(m){return e.enter("codeText"),e.enter("codeTextSequence"),l(m)}function l(m){return m===96?(e.consume(m),r++,l):(e.exit("codeTextSequence"),u(m))}function u(m){return m===null?a(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),u):m===96?(s=e.enter("codeTextSequence"),i=0,d(m)):R(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(m))}function c(m){return m===null||m===32||m===96||R(m)?(e.exit("codeTextData"),u(m)):(e.consume(m),c)}function d(m){return m===96?(e.consume(m),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(s.type="codeTextData",c(m))}}class Mo{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,a){const r=a??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,a,r){const i=a||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ve(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ve(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ve(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const a=this.left.splice(t,Number.POSITIVE_INFINITY);Ve(this.right,a.reverse())}else{const a=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ve(this.left,a.reverse())}}}function Ve(e,t){let a=0;if(t.length<1e4)e.push(...t);else for(;a<t.length;)e.push(...t.slice(a,a+1e4)),a+=1e4}function Xa(e){const t={};let a=-1,r,i,s,o,l,u,c;const d=new Mo(e);for(;++a<d.length;){for(;a in t;)a=t[a];if(r=d.get(a),a&&r[1].type==="chunkFlow"&&d.get(a-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,s=0,s<u.length&&u[s][1].type==="lineEndingBlank"&&(s+=2),s<u.length&&u[s][1].type==="content"))for(;++s<u.length&&u[s][1].type!=="content";)u[s][1].type==="chunkText"&&(u[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Lo(d,a)),a=t[a],c=!0);else if(r[1]._container){for(s=a,i=void 0;s--;)if(o=d.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,a),l.unshift(r),d.splice(i,a-i+1,l))}}return ge(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function Lo(e,t){const a=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let o=a._tokenizer;o||(o=r.parser[a.contentType](a.start),a._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],c={};let d,m,h=-1,p=a,k=0,y=0;const N=[y];for(;p;){for(;e.get(++i)[1]!==p;);s.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),m&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),m=p,p=p.next}for(p=a;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(y=h+1,N.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):N.pop(),h=N.length;h--;){const v=l.slice(N[h],N[h+1]),P=s.pop();u.push([P,P+v.length-1]),e.splice(P,2,v)}for(u.reverse(),h=-1;++h<u.length;)c[k+u[h][0]]=k+u[h][1],k+=u[h][1]-u[h][0]-1;return c}const Oo={resolve:_o,tokenize:Wo},zo={partial:!0,tokenize:Ho};function _o(e){return Xa(e),e}function Wo(e,t){let a;return r;function r(l){return e.enter("content"),a=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):R(l)?e.check(zo,o,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),a.next=e.enter("chunkContent",{contentType:"content",previous:a}),a=a.next,i}}function Ho(e,t,a){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),$(e,s,"linePrefix")}function s(o){if(o===null||R(o))return a(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,a,t)(o)}}function Za(e,t,a,r,i,s,o,l,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return m;function m(v){return v===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(v),e.exit(s),h):v===null||v===32||v===41||$n(v)?a(v):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),y(v))}function h(v){return v===62?(e.enter(s),e.consume(v),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(v))}function p(v){return v===62?(e.exit("chunkString"),e.exit(l),h(v)):v===null||v===60||R(v)?a(v):(e.consume(v),v===92?k:p)}function k(v){return v===60||v===62||v===92?(e.consume(v),p):p(v)}function y(v){return!d&&(v===null||v===41||te(v))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(v)):d<c&&v===40?(e.consume(v),d++,y):v===41?(e.consume(v),d--,y):v===null||v===32||v===40||$n(v)?a(v):(e.consume(v),v===92?N:y)}function N(v){return v===40||v===41||v===92?(e.consume(v),y):y(v)}}function er(e,t,a,r,i,s){const o=this;let l=0,u;return c;function c(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(s),d}function d(p){return l>999||p===null||p===91||p===93&&!u||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?a(p):p===93?(e.exit(s),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):R(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),m(p))}function m(p){return p===null||p===91||p===93||R(p)||l++>999?(e.exit("chunkString"),d(p)):(e.consume(p),u||(u=!W(p)),p===92?h:m)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,m):m(p)}}function nr(e,t,a,r,i,s){let o;return l;function l(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),o=h===40?41:h,u):a(h)}function u(h){return h===o?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(s),c(h))}function c(h){return h===o?(e.exit(s),u(o)):h===null?a(h):R(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),$(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===o||h===null||R(h)?(e.exit("chunkString"),c(h)):(e.consume(h),h===92?m:d)}function m(h){return h===o||h===92?(e.consume(h),d):d(h)}}function $e(e,t){let a;return r;function r(i){return R(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a=!0,r):W(i)?$(e,r,a?"linePrefix":"lineSuffix")(i):t(i)}}const Uo={name:"definition",tokenize:qo},Vo={partial:!0,tokenize:Ko};function qo(e,t,a){const r=this;let i;return s;function s(p){return e.enter("definition"),o(p)}function o(p){return er.call(r,e,l,a,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=Fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),u):a(p)}function u(p){return te(p)?$e(e,c)(p):c(p)}function c(p){return Za(e,d,a,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(Vo,m,m)(p)}function m(p){return W(p)?$(e,h,"whitespace")(p):h(p)}function h(p){return p===null||R(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):a(p)}}function Ko(e,t,a){return r;function r(l){return te(l)?$e(e,i)(l):a(l)}function i(l){return nr(e,s,a,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return W(l)?$(e,o,"whitespace")(l):o(l)}function o(l){return l===null||R(l)?t(l):a(l)}}const $o={name:"hardBreakEscape",tokenize:Go};function Go(e,t,a){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return R(s)?(e.exit("hardBreakEscape"),t(s)):a(s)}}const Yo={name:"headingAtx",resolve:Qo,tokenize:Jo};function Qo(e,t){let a=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),a-2>r&&e[a][1].type==="whitespace"&&(a-=2),e[a][1].type==="atxHeadingSequence"&&(r===a-1||a-4>r&&e[a-2][1].type==="whitespace")&&(a-=r+1===a?2:4),a>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[a][1].end},s={type:"chunkText",start:e[r][1].start,end:e[a][1].end,contentType:"text"},ge(e,r,a-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function Jo(e,t,a){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&r++<6?(e.consume(d),o):d===null||te(d)?(e.exit("atxHeadingSequence"),l(d)):a(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||R(d)?(e.exit("atxHeading"),t(d)):W(d)?$(e,l,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),l(d))}function c(d){return d===null||d===35||te(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),c)}}const Xo=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Qt=["pre","script","style","textarea"],Zo={concrete:!0,name:"htmlFlow",resolveTo:tl,tokenize:al},el={partial:!0,tokenize:il},nl={partial:!0,tokenize:rl};function tl(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function al(e,t,a){const r=this;let i,s,o,l,u;return c;function c(x){return d(x)}function d(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),m}function m(x){return x===33?(e.consume(x),h):x===47?(e.consume(x),s=!0,y):x===63?(e.consume(x),i=3,r.interrupt?t:g):he(x)?(e.consume(x),o=String.fromCharCode(x),N):a(x)}function h(x){return x===45?(e.consume(x),i=2,p):x===91?(e.consume(x),i=5,l=0,k):he(x)?(e.consume(x),i=4,r.interrupt?t:g):a(x)}function p(x){return x===45?(e.consume(x),r.interrupt?t:g):a(x)}function k(x){const ue="CDATA[";return x===ue.charCodeAt(l++)?(e.consume(x),l===ue.length?r.interrupt?t:A:k):a(x)}function y(x){return he(x)?(e.consume(x),o=String.fromCharCode(x),N):a(x)}function N(x){if(x===null||x===47||x===62||te(x)){const ue=x===47,Ne=o.toLowerCase();return!ue&&!s&&Qt.includes(Ne)?(i=1,r.interrupt?t(x):A(x)):Xo.includes(o.toLowerCase())?(i=6,ue?(e.consume(x),v):r.interrupt?t(x):A(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?a(x):s?P(x):C(x))}return x===45||se(x)?(e.consume(x),o+=String.fromCharCode(x),N):a(x)}function v(x){return x===62?(e.consume(x),r.interrupt?t:A):a(x)}function P(x){return W(x)?(e.consume(x),P):B(x)}function C(x){return x===47?(e.consume(x),B):x===58||x===95||he(x)?(e.consume(x),H):W(x)?(e.consume(x),C):B(x)}function H(x){return x===45||x===46||x===58||x===95||se(x)?(e.consume(x),H):U(x)}function U(x){return x===61?(e.consume(x),j):W(x)?(e.consume(x),U):C(x)}function j(x){return x===null||x===60||x===61||x===62||x===96?a(x):x===34||x===39?(e.consume(x),u=x,O):W(x)?(e.consume(x),j):M(x)}function O(x){return x===u?(e.consume(x),u=null,z):x===null||R(x)?a(x):(e.consume(x),O)}function M(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||te(x)?U(x):(e.consume(x),M)}function z(x){return x===47||x===62||W(x)?C(x):a(x)}function B(x){return x===62?(e.consume(x),I):a(x)}function I(x){return x===null||R(x)?A(x):W(x)?(e.consume(x),I):a(x)}function A(x){return x===45&&i===2?(e.consume(x),V):x===60&&i===1?(e.consume(x),Y):x===62&&i===4?(e.consume(x),ce):x===63&&i===3?(e.consume(x),g):x===93&&i===5?(e.consume(x),xe):R(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(el,fe,_)(x)):x===null||R(x)?(e.exit("htmlFlowData"),_(x)):(e.consume(x),A)}function _(x){return e.check(nl,T,fe)(x)}function T(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),S}function S(x){return x===null||R(x)?_(x):(e.enter("htmlFlowData"),A(x))}function V(x){return x===45?(e.consume(x),g):A(x)}function Y(x){return x===47?(e.consume(x),o="",le):A(x)}function le(x){if(x===62){const ue=o.toLowerCase();return Qt.includes(ue)?(e.consume(x),ce):A(x)}return he(x)&&o.length<8?(e.consume(x),o+=String.fromCharCode(x),le):A(x)}function xe(x){return x===93?(e.consume(x),g):A(x)}function g(x){return x===62?(e.consume(x),ce):x===45&&i===2?(e.consume(x),g):A(x)}function ce(x){return x===null||R(x)?(e.exit("htmlFlowData"),fe(x)):(e.consume(x),ce)}function fe(x){return e.exit("htmlFlow"),t(x)}}function rl(e,t,a){const r=this;return i;function i(o){return R(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s):a(o)}function s(o){return r.parser.lazy[r.now().line]?a(o):t(o)}}function il(e,t,a){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(yn,t,a)}}const sl={name:"htmlText",tokenize:ol};function ol(e,t,a){const r=this;let i,s,o;return l;function l(g){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(g),u}function u(g){return g===33?(e.consume(g),c):g===47?(e.consume(g),U):g===63?(e.consume(g),C):he(g)?(e.consume(g),M):a(g)}function c(g){return g===45?(e.consume(g),d):g===91?(e.consume(g),s=0,k):he(g)?(e.consume(g),P):a(g)}function d(g){return g===45?(e.consume(g),p):a(g)}function m(g){return g===null?a(g):g===45?(e.consume(g),h):R(g)?(o=m,Y(g)):(e.consume(g),m)}function h(g){return g===45?(e.consume(g),p):m(g)}function p(g){return g===62?V(g):g===45?h(g):m(g)}function k(g){const ce="CDATA[";return g===ce.charCodeAt(s++)?(e.consume(g),s===ce.length?y:k):a(g)}function y(g){return g===null?a(g):g===93?(e.consume(g),N):R(g)?(o=y,Y(g)):(e.consume(g),y)}function N(g){return g===93?(e.consume(g),v):y(g)}function v(g){return g===62?V(g):g===93?(e.consume(g),v):y(g)}function P(g){return g===null||g===62?V(g):R(g)?(o=P,Y(g)):(e.consume(g),P)}function C(g){return g===null?a(g):g===63?(e.consume(g),H):R(g)?(o=C,Y(g)):(e.consume(g),C)}function H(g){return g===62?V(g):C(g)}function U(g){return he(g)?(e.consume(g),j):a(g)}function j(g){return g===45||se(g)?(e.consume(g),j):O(g)}function O(g){return R(g)?(o=O,Y(g)):W(g)?(e.consume(g),O):V(g)}function M(g){return g===45||se(g)?(e.consume(g),M):g===47||g===62||te(g)?z(g):a(g)}function z(g){return g===47?(e.consume(g),V):g===58||g===95||he(g)?(e.consume(g),B):R(g)?(o=z,Y(g)):W(g)?(e.consume(g),z):V(g)}function B(g){return g===45||g===46||g===58||g===95||se(g)?(e.consume(g),B):I(g)}function I(g){return g===61?(e.consume(g),A):R(g)?(o=I,Y(g)):W(g)?(e.consume(g),I):z(g)}function A(g){return g===null||g===60||g===61||g===62||g===96?a(g):g===34||g===39?(e.consume(g),i=g,_):R(g)?(o=A,Y(g)):W(g)?(e.consume(g),A):(e.consume(g),T)}function _(g){return g===i?(e.consume(g),i=void 0,S):g===null?a(g):R(g)?(o=_,Y(g)):(e.consume(g),_)}function T(g){return g===null||g===34||g===39||g===60||g===61||g===96?a(g):g===47||g===62||te(g)?z(g):(e.consume(g),T)}function S(g){return g===47||g===62||te(g)?z(g):a(g)}function V(g){return g===62?(e.consume(g),e.exit("htmlTextData"),e.exit("htmlText"),t):a(g)}function Y(g){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),le}function le(g){return W(g)?$(e,xe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g):xe(g)}function xe(g){return e.enter("htmlTextData"),o(g)}}const pt={name:"labelEnd",resolveAll:dl,resolveTo:ml,tokenize:pl},ll={tokenize:hl},cl={tokenize:gl},ul={tokenize:xl};function dl(e){let t=-1;const a=[];for(;++t<e.length;){const r=e[t][1];if(a.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==a.length&&ge(e,0,e.length,a),e}function ml(e,t){let a=e.length,r=0,i,s,o,l;for(;a--;)if(i=e[a][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[a][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[a][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=a,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=a);const u={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[s][1].start},end:{...e[o][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",u,t],["enter",c,t]],l=oe(l,e.slice(s+1,s+r+3)),l=oe(l,[["enter",d,t]]),l=oe(l,mt(t.parser.constructs.insideSpan.null,e.slice(s+r+4,o-3),t)),l=oe(l,[["exit",d,t],e[o-2],e[o-1],["exit",c,t]]),l=oe(l,e.slice(o+1)),l=oe(l,[["exit",u,t]]),ge(e,s,e.length,l),e}function pl(e,t,a){const r=this;let i=r.events.length,s,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(h){return s?s._inactive?m(h):(o=r.parser.defined.includes(Fe(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),u):a(h)}function u(h){return h===40?e.attempt(ll,d,o?d:m)(h):h===91?e.attempt(cl,d,o?c:m)(h):o?d(h):m(h)}function c(h){return e.attempt(ul,d,m)(h)}function d(h){return t(h)}function m(h){return s._balanced=!0,a(h)}}function hl(e,t,a){return r;function r(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),i}function i(m){return te(m)?$e(e,s)(m):s(m)}function s(m){return m===41?d(m):Za(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function o(m){return te(m)?$e(e,u)(m):d(m)}function l(m){return a(m)}function u(m){return m===34||m===39||m===40?nr(e,c,a,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):d(m)}function c(m){return te(m)?$e(e,d)(m):d(m)}function d(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),t):a(m)}}function gl(e,t,a){const r=this;return i;function i(l){return er.call(r,e,s,o,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(Fe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):a(l)}function o(l){return a(l)}}function xl(e,t,a){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):a(s)}}const fl={name:"labelStartImage",resolveAll:pt.resolveAll,tokenize:bl};function bl(e,t,a){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):a(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?a(l):t(l)}}const yl={name:"labelStartLink",resolveAll:pt.resolveAll,tokenize:kl};function kl(e,t,a){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?a(o):t(o)}}const Bn={name:"lineEnding",tokenize:vl};function vl(e,t){return a;function a(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),$(e,t,"linePrefix")}}const cn={name:"thematicBreak",tokenize:jl};function jl(e,t,a){let r=0,i;return s;function s(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||R(c))?(e.exit("thematicBreak"),t(c)):a(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),W(c)?$(e,l,"whitespace")(c):l(c))}}const ee={continuation:{tokenize:Sl},exit:Al,name:"list",tokenize:Nl},wl={partial:!0,tokenize:Il},El={partial:!0,tokenize:Cl};function Nl(e,t,a){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const k=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Gn(p)){if(r.containerState.type||(r.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(cn,a,c)(p):c(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(p)}return a(p)}function u(p){return Gn(p)&&++o<10?(e.consume(p),u):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):a(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(yn,r.interrupt?a:d,e.attempt(wl,h,m))}function d(p){return r.containerState.initialBlankLine=!0,s++,h(p)}function m(p){return W(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):a(p)}function h(p){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function Sl(e,t,a){const r=this;return r.containerState._closeFlow=void 0,e.check(yn,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,$(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!W(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(El,t,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,$(e,e.attempt(ee,t,a),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Cl(e,t,a){const r=this;return $(e,i,"listItemIndent",r.containerState.size+1);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(s):a(s)}}function Al(e){e.exit(this.containerState.type)}function Il(e,t,a){const r=this;return $(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const o=r.events[r.events.length-1];return!W(s)&&o&&o[1].type==="listItemPrefixWhitespace"?t(s):a(s)}}const Jt={name:"setextUnderline",resolveTo:Bl,tokenize:Pl};function Bl(e,t){let a=e.length,r,i,s;for(;a--;)if(e[a][0]==="enter"){if(e[a][1].type==="content"){r=a;break}e[a][1].type==="paragraph"&&(i=a)}else e[a][1].type==="content"&&e.splice(a,1),!s&&e[a][1].type==="definition"&&(s=a);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",o,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function Pl(e,t,a){const r=this;let i;return s;function s(c){let d=r.events.length,m;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){m=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||m)?(e.enter("setextHeadingLine"),i=c,o(c)):a(c)}function o(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),W(c)?$(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||R(c)?(e.exit("setextHeadingLine"),t(c)):a(c)}}const Tl={tokenize:Rl};function Rl(e){const t=this,a=e.attempt(yn,r,e.attempt(this.parser.constructs.flowInitial,i,$(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Oo,i)),"linePrefix")));return a;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,a}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,a}}const Dl={resolveAll:ar()},Fl=tr("string"),Ml=tr("text");function tr(e){return{resolveAll:ar(e==="text"?Ll:void 0),tokenize:t};function t(a){const r=this,i=this.parser.constructs[e],s=a.attempt(i,o,l);return o;function o(d){return c(d)?s(d):l(d)}function l(d){if(d===null){a.consume(d);return}return a.enter("data"),a.consume(d),u}function u(d){return c(d)?(a.exit("data"),s(d)):(a.consume(d),u)}function c(d){if(d===null)return!0;const m=i[d];let h=-1;if(m)for(;++h<m.length;){const p=m[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function ar(e){return t;function t(a,r){let i=-1,s;for(;++i<=a.length;)s===void 0?a[i]&&a[i][1].type==="data"&&(s=i,i++):(!a[i]||a[i][1].type!=="data")&&(i!==s+2&&(a[s][1].end=a[i-1][1].end,a.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(a,r):a}}function Ll(e,t){let a=0;for(;++a<=e.length;)if((a===e.length||e[a][1].type==="lineEnding")&&e[a-1][1].type==="data"){const r=e[a-1][1],i=t.sliceStream(r);let s=i.length,o=-1,l=0,u;for(;s--;){const c=i[s];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(c===-2)u=!0,l++;else if(c!==-1){s++;break}}if(t._contentTypeTextTrailing&&a===e.length&&(l=0),l){const c={type:a===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:r.start._bufferIndex+o,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(a,0,["enter",c,t],["exit",c,t]),a+=2)}a++}return e}const Ol={42:ee,43:ee,45:ee,48:ee,49:ee,50:ee,51:ee,52:ee,53:ee,54:ee,55:ee,56:ee,57:ee,62:Ya},zl={91:Uo},_l={[-2]:In,[-1]:In,32:In},Wl={35:Yo,42:cn,45:[Jt,cn],60:Zo,61:Jt,95:cn,96:Yt,126:Yt},Hl={38:Ja,92:Qa},Ul={[-5]:Bn,[-4]:Bn,[-3]:Bn,33:fl,38:Ja,42:Yn,60:[yo,sl],91:yl,92:[$o,Qa],93:pt,95:Yn,96:To},Vl={null:[Yn,Dl]},ql={null:[42,95]},Kl={null:[]},$l=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ql,contentInitial:zl,disable:Kl,document:Ol,flow:Wl,flowInitial:_l,insideSpan:Vl,string:Hl,text:Ul},Symbol.toStringTag,{value:"Module"}));function Gl(e,t,a){let r={_bufferIndex:-1,_index:0,line:a&&a.line||1,column:a&&a.column||1,offset:a&&a.offset||0};const i={},s=[];let o=[],l=[];const u={attempt:O(U),check:O(j),consume:P,enter:C,exit:H,interrupt:O(j,{interrupt:!0})},c={code:null,containerState:{},defineSkip:y,events:[],now:k,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:m};let d=t.tokenize.call(c,u);return t.resolveAll&&s.push(t),c;function m(I){return o=oe(o,I),N(),o[o.length-1]!==null?[]:(M(t,0),c.events=mt(s,c.events,c),c.events)}function h(I,A){return Ql(p(I),A)}function p(I){return Yl(o,I)}function k(){const{_bufferIndex:I,_index:A,line:_,column:T,offset:S}=r;return{_bufferIndex:I,_index:A,line:_,column:T,offset:S}}function y(I){i[I.line]=I.column,B()}function N(){let I;for(;r._index<o.length;){const A=o[r._index];if(typeof A=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<A.length;)v(A.charCodeAt(r._bufferIndex));else v(A)}}function v(I){d=d(I)}function P(I){R(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,B()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=I}function C(I,A){const _=A||{};return _.type=I,_.start=k(),c.events.push(["enter",_,c]),l.push(_),_}function H(I){const A=l.pop();return A.end=k(),c.events.push(["exit",A,c]),A}function U(I,A){M(I,A.from)}function j(I,A){A.restore()}function O(I,A){return _;function _(T,S,V){let Y,le,xe,g;return Array.isArray(T)?fe(T):"tokenize"in T?fe([T]):ce(T);function ce(J){return Oe;function Oe(je){const Ie=je!==null&&J[je],Be=je!==null&&J.null,an=[...Array.isArray(Ie)?Ie:Ie?[Ie]:[],...Array.isArray(Be)?Be:Be?[Be]:[]];return fe(an)(je)}}function fe(J){return Y=J,le=0,J.length===0?V:x(J[le])}function x(J){return Oe;function Oe(je){return g=z(),xe=J,J.partial||(c.currentConstruct=J),J.name&&c.parser.constructs.disable.null.includes(J.name)?Ne():J.tokenize.call(A?Object.assign(Object.create(c),A):c,u,ue,Ne)(je)}}function ue(J){return I(xe,g),S}function Ne(J){return g.restore(),++le<Y.length?x(Y[le]):V}}}function M(I,A){I.resolveAll&&!s.includes(I)&&s.push(I),I.resolve&&ge(c.events,A,c.events.length-A,I.resolve(c.events.slice(A),c)),I.resolveTo&&(c.events=I.resolveTo(c.events,c))}function z(){const I=k(),A=c.previous,_=c.currentConstruct,T=c.events.length,S=Array.from(l);return{from:T,restore:V};function V(){r=I,c.previous=A,c.currentConstruct=_,c.events.length=T,l=S,B()}}function B(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Yl(e,t){const a=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let o;if(a===i)o=[e[a].slice(r,s)];else{if(o=e.slice(a,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}s>0&&o.push(e[i].slice(0,s))}return o}function Ql(e,t){let a=-1;const r=[];let i;for(;++a<e.length;){const s=e[a];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,r.push(o)}return r.join("")}function Jl(e){const r={constructs:ao([$l,...(e||{}).extensions||[]]),content:i(mo),defined:[],document:i(ho),flow:i(Tl),lazy:{},string:i(Fl),text:i(Ml)};return r;function i(s){return o;function o(l){return Gl(r,s,l)}}}function Xl(e){for(;!Xa(e););return e}const Xt=/[\0\t\n\r]/g;function Zl(){let e=1,t="",a=!0,r;return i;function i(s,o,l){const u=[];let c,d,m,h,p;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),m=0,t="",a&&(s.charCodeAt(0)===65279&&m++,a=void 0);m<s.length;){if(Xt.lastIndex=m,c=Xt.exec(s),h=c&&c.index!==void 0?c.index:s.length,p=s.charCodeAt(h),!c){t=s.slice(m);break}if(p===10&&m===h&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),m<h&&(u.push(s.slice(m,h)),e+=h-m),p){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}m=h+1}return l&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const ec=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function nc(e){return e.replace(ec,tc)}function tc(e,t,a){if(t)return t;if(a.charCodeAt(0)===35){const i=a.charCodeAt(1),s=i===120||i===88;return Ga(a.slice(s?2:1),s?16:10)}return dt(a)||e}const rr={}.hasOwnProperty;function ac(e,t,a){return typeof t!="string"&&(a=t,t=void 0),rc(a)(Xl(Jl(a).document().write(Zl()(e,t,!0))))}function rc(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(jt),autolinkProtocol:z,autolinkEmail:z,atxHeading:s(yt),blockQuote:s(Be),characterEscape:z,characterReference:z,codeFenced:s(an),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(an,o),codeText:s(gr,o),codeTextData:z,data:z,codeFlowValue:z,definition:s(xr),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(fr),hardBreakEscape:s(kt),hardBreakTrailing:s(kt),htmlFlow:s(vt,o),htmlFlowData:z,htmlText:s(vt,o),htmlTextData:z,image:s(br),label:o,link:s(jt),listItem:s(yr),listItemValue:h,listOrdered:s(wt,m),listUnordered:s(wt),paragraph:s(kr),reference:x,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(yt),strong:s(vr),thematicBreak:s(wr)},exit:{atxHeading:u(),atxHeadingSequence:U,autolink:u(),autolinkEmail:Ie,autolinkProtocol:je,blockQuote:u(),characterEscapeValue:B,characterReferenceMarkerHexadecimal:Ne,characterReferenceMarkerNumeric:Ne,characterReferenceValue:J,characterReference:Oe,codeFenced:u(N),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:k,codeFlowValue:B,codeIndented:u(v),codeText:u(S),codeTextData:B,data:B,definition:u(),definitionDestinationString:H,definitionLabelString:P,definitionTitleString:C,emphasis:u(),hardBreakEscape:u(A),hardBreakTrailing:u(A),htmlFlow:u(_),htmlFlowData:B,htmlText:u(T),htmlTextData:B,image:u(Y),label:xe,labelText:le,lineEnding:I,link:u(V),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ue,resourceDestinationString:g,resourceTitleString:ce,resource:fe,setextHeading:u(M),setextHeadingLineSequence:O,setextHeadingText:j,strong:u(),thematicBreak:u()}};ir(t,(e||{}).mdastExtensions||[]);const a={};return r;function r(b){let E={type:"root",children:[]};const D={stack:[E],tokenStack:[],config:t,enter:l,exit:c,buffer:o,resume:d,data:a},L=[];let q=-1;for(;++q<b.length;)if(b[q][1].type==="listOrdered"||b[q][1].type==="listUnordered")if(b[q][0]==="enter")L.push(q);else{const de=L.pop();q=i(b,de,q)}for(q=-1;++q<b.length;){const de=t[b[q][0]];rr.call(de,b[q][1].type)&&de[b[q][1].type].call(Object.assign({sliceSerialize:b[q][2].sliceSerialize},D),b[q][1])}if(D.tokenStack.length>0){const de=D.tokenStack[D.tokenStack.length-1];(de[1]||Zt).call(D,void 0,de[0])}for(E.position={start:we(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:we(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<t.transforms.length;)E=t.transforms[q](E)||E;return E}function i(b,E,D){let L=E-1,q=-1,de=!1,Se,be,ze,_e;for(;++L<=D;){const re=b[L];switch(re[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{re[0]==="enter"?q++:q--,_e=void 0;break}case"lineEndingBlank":{re[0]==="enter"&&(Se&&!_e&&!q&&!ze&&(ze=L),_e=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:_e=void 0}if(!q&&re[0]==="enter"&&re[1].type==="listItemPrefix"||q===-1&&re[0]==="exit"&&(re[1].type==="listUnordered"||re[1].type==="listOrdered")){if(Se){let Pe=L;for(be=void 0;Pe--;){const ye=b[Pe];if(ye[1].type==="lineEnding"||ye[1].type==="lineEndingBlank"){if(ye[0]==="exit")continue;be&&(b[be][1].type="lineEndingBlank",de=!0),ye[1].type="lineEnding",be=Pe}else if(!(ye[1].type==="linePrefix"||ye[1].type==="blockQuotePrefix"||ye[1].type==="blockQuotePrefixWhitespace"||ye[1].type==="blockQuoteMarker"||ye[1].type==="listItemIndent"))break}ze&&(!be||ze<be)&&(Se._spread=!0),Se.end=Object.assign({},be?b[be][1].start:re[1].end),b.splice(be||L,0,["exit",Se,re[2]]),L++,D++}if(re[1].type==="listItemPrefix"){const Pe={type:"listItem",_spread:!1,start:Object.assign({},re[1].start),end:void 0};Se=Pe,b.splice(L,0,["enter",Pe,re[2]]),L++,D++,ze=void 0,_e=!0}}}return b[E][1]._spread=de,D}function s(b,E){return D;function D(L){l.call(this,b(L),L),E&&E.call(this,L)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(b,E,D){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([E,D||void 0]),b.position={start:we(E.start),end:void 0}}function u(b){return E;function E(D){b&&b.call(this,D),c.call(this,D)}}function c(b,E){const D=this.stack.pop(),L=this.tokenStack.pop();if(L)L[0].type!==b.type&&(E?E.call(this,b,L[0]):(L[1]||Zt).call(this,b,L[0]));else throw new Error("Cannot close `"+b.type+"` ("+Ke({start:b.start,end:b.end})+"): it’s not open");D.position.end=we(b.end)}function d(){return no(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function h(b){if(this.data.expectingFirstListItemValue){const E=this.stack[this.stack.length-2];E.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function p(){const b=this.resume(),E=this.stack[this.stack.length-1];E.lang=b}function k(){const b=this.resume(),E=this.stack[this.stack.length-1];E.meta=b}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const b=this.resume(),E=this.stack[this.stack.length-1];E.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const b=this.resume(),E=this.stack[this.stack.length-1];E.value=b.replace(/(\r?\n|\r)$/g,"")}function P(b){const E=this.resume(),D=this.stack[this.stack.length-1];D.label=E,D.identifier=Fe(this.sliceSerialize(b)).toLowerCase()}function C(){const b=this.resume(),E=this.stack[this.stack.length-1];E.title=b}function H(){const b=this.resume(),E=this.stack[this.stack.length-1];E.url=b}function U(b){const E=this.stack[this.stack.length-1];if(!E.depth){const D=this.sliceSerialize(b).length;E.depth=D}}function j(){this.data.setextHeadingSlurpLineEnding=!0}function O(b){const E=this.stack[this.stack.length-1];E.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function z(b){const D=this.stack[this.stack.length-1].children;let L=D[D.length-1];(!L||L.type!=="text")&&(L=jr(),L.position={start:we(b.start),end:void 0},D.push(L)),this.stack.push(L)}function B(b){const E=this.stack.pop();E.value+=this.sliceSerialize(b),E.position.end=we(b.end)}function I(b){const E=this.stack[this.stack.length-1];if(this.data.atHardBreak){const D=E.children[E.children.length-1];D.position.end=we(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(E.type)&&(z.call(this,b),B.call(this,b))}function A(){this.data.atHardBreak=!0}function _(){const b=this.resume(),E=this.stack[this.stack.length-1];E.value=b}function T(){const b=this.resume(),E=this.stack[this.stack.length-1];E.value=b}function S(){const b=this.resume(),E=this.stack[this.stack.length-1];E.value=b}function V(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const E=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=E,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function Y(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const E=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=E,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function le(b){const E=this.sliceSerialize(b),D=this.stack[this.stack.length-2];D.label=nc(E),D.identifier=Fe(E).toLowerCase()}function xe(){const b=this.stack[this.stack.length-1],E=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){const L=b.children;D.children=L}else D.alt=E}function g(){const b=this.resume(),E=this.stack[this.stack.length-1];E.url=b}function ce(){const b=this.resume(),E=this.stack[this.stack.length-1];E.title=b}function fe(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function ue(b){const E=this.resume(),D=this.stack[this.stack.length-1];D.label=E,D.identifier=Fe(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function Ne(b){this.data.characterReferenceType=b.type}function J(b){const E=this.sliceSerialize(b),D=this.data.characterReferenceType;let L;D?(L=Ga(E,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):L=dt(E);const q=this.stack[this.stack.length-1];q.value+=L}function Oe(b){const E=this.stack.pop();E.position.end=we(b.end)}function je(b){B.call(this,b);const E=this.stack[this.stack.length-1];E.url=this.sliceSerialize(b)}function Ie(b){B.call(this,b);const E=this.stack[this.stack.length-1];E.url="mailto:"+this.sliceSerialize(b)}function Be(){return{type:"blockquote",children:[]}}function an(){return{type:"code",lang:null,meta:null,value:""}}function gr(){return{type:"inlineCode",value:""}}function xr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function fr(){return{type:"emphasis",children:[]}}function yt(){return{type:"heading",depth:0,children:[]}}function kt(){return{type:"break"}}function vt(){return{type:"html",value:""}}function br(){return{type:"image",title:null,url:"",alt:null}}function jt(){return{type:"link",title:null,url:"",children:[]}}function wt(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function yr(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function kr(){return{type:"paragraph",children:[]}}function vr(){return{type:"strong",children:[]}}function jr(){return{type:"text",value:""}}function wr(){return{type:"thematicBreak"}}}function we(e){return{line:e.line,column:e.column,offset:e.offset}}function ir(e,t){let a=-1;for(;++a<t.length;){const r=t[a];Array.isArray(r)?ir(e,r):ic(e,r)}}function ic(e,t){let a;for(a in t)if(rr.call(t,a))switch(a){case"canContainEols":{const r=t[a];r&&e[a].push(...r);break}case"transforms":{const r=t[a];r&&e[a].push(...r);break}case"enter":case"exit":{const r=t[a];r&&Object.assign(e[a],r);break}}}function Zt(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ke({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ke({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ke({start:t.start,end:t.end})+") is still open")}function sc(e){const t=this;t.parser=a;function a(r){return ac(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function oc(e,t){const a={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,a),e.applyData(t,a)}function lc(e,t){const a={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,a),[e.applyData(t,a),{type:"text",value:`
`}]}function cc(e,t){const a=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:a}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function uc(e,t){const a={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function dc(e,t){const a={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function mc(e,t){const a=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Le(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=s+1,l+=1,e.footnoteCounts.set(r,l);const u={type:"element",tagName:"a",properties:{href:"#"+a+"fn-"+i,id:a+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function pc(e,t){const a={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function hc(e,t){if(e.options.allowDangerousHtml){const a={type:"raw",value:t.value};return e.patch(t,a),e.applyData(t,a)}}function sr(e,t){const a=t.referenceType;let r="]";if(a==="collapsed"?r+="[]":a==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function gc(e,t){const a=String(t.identifier).toUpperCase(),r=e.definitionById.get(a);if(!r)return sr(e,t);const i={src:Le(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function xc(e,t){const a={src:Le(t.url)};t.alt!==null&&t.alt!==void 0&&(a.alt=t.alt),t.title!==null&&t.title!==void 0&&(a.title=t.title);const r={type:"element",tagName:"img",properties:a,children:[]};return e.patch(t,r),e.applyData(t,r)}function fc(e,t){const a={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,a);const r={type:"element",tagName:"code",properties:{},children:[a]};return e.patch(t,r),e.applyData(t,r)}function bc(e,t){const a=String(t.identifier).toUpperCase(),r=e.definitionById.get(a);if(!r)return sr(e,t);const i={href:Le(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function yc(e,t){const a={href:Le(t.url)};t.title!==null&&t.title!==void 0&&(a.title=t.title);const r={type:"element",tagName:"a",properties:a,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function kc(e,t,a){const r=e.all(t),i=a?vc(a):or(t),s={},o=[];if(typeof t.checked=="boolean"){const d=r[0];let m;d&&d.type==="element"&&d.tagName==="p"?m=d:(m={type:"element",tagName:"p",properties:{},children:[]},r.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:s,children:o};return e.patch(t,c),e.applyData(t,c)}function vc(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const a=e.children;let r=-1;for(;!t&&++r<a.length;)t=or(a[r])}return t}function or(e){const t=e.spread;return t??e.children.length>1}function jc(e,t){const a={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(a.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){a.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:a,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function wc(e,t){const a={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Ec(e,t){const a={type:"root",children:e.wrap(e.all(t))};return e.patch(t,a),e.applyData(t,a)}function Nc(e,t){const a={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Sc(e,t){const a=e.all(t),r=a.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(a.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(a,!0)},l=ot(t.children[1]),u=Wa(t.children[t.children.length-1]);l&&u&&(o.position={start:l,end:u}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function Cc(e,t,a){const r=a?a.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",o=a&&a.type==="table"?a.align:void 0,l=o?o.length:t.children.length;let u=-1;const c=[];for(;++u<l;){const m=t.children[u],h={},p=o?o[u]:void 0;p&&(h.align=p);let k={type:"element",tagName:s,properties:h,children:[]};m&&(k.children=e.all(m),e.patch(m,k),k=e.applyData(m,k)),c.push(k)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function Ac(e,t){const a={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}const ea=9,na=32;function Ic(e){const t=String(e),a=/\r?\n|\r/g;let r=a.exec(t),i=0;const s=[];for(;r;)s.push(ta(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=a.exec(t);return s.push(ta(t.slice(i),i>0,!1)),s.join("")}function ta(e,t,a){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===ea||s===na;)r++,s=e.codePointAt(r)}if(a){let s=e.codePointAt(i-1);for(;s===ea||s===na;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Bc(e,t){const a={type:"text",value:Ic(String(t.value))};return e.patch(t,a),e.applyData(t,a)}function Pc(e,t){const a={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,a),e.applyData(t,a)}const Tc={blockquote:oc,break:lc,code:cc,delete:uc,emphasis:dc,footnoteReference:mc,heading:pc,html:hc,imageReference:gc,image:xc,inlineCode:fc,linkReference:bc,link:yc,listItem:kc,list:jc,paragraph:wc,root:Ec,strong:Nc,table:Sc,tableCell:Ac,tableRow:Cc,text:Bc,thematicBreak:Pc,toml:sn,yaml:sn,definition:sn,footnoteDefinition:sn};function sn(){}const lr=-1,kn=0,Ge=1,hn=2,ht=3,gt=4,xt=5,ft=6,cr=7,ur=8,aa=typeof self=="object"?self:globalThis,Rc=(e,t)=>{const a=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,o]=t[i];switch(s){case kn:case lr:return a(o,i);case Ge:{const l=a([],i);for(const u of o)l.push(r(u));return l}case hn:{const l=a({},i);for(const[u,c]of o)l[r(u)]=r(c);return l}case ht:return a(new Date(o),i);case gt:{const{source:l,flags:u}=o;return a(new RegExp(l,u),i)}case xt:{const l=a(new Map,i);for(const[u,c]of o)l.set(r(u),r(c));return l}case ft:{const l=a(new Set,i);for(const u of o)l.add(r(u));return l}case cr:{const{name:l,message:u}=o;return a(new aa[l](u),i)}case ur:return a(BigInt(o),i);case"BigInt":return a(Object(BigInt(o)),i);case"ArrayBuffer":return a(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return a(new DataView(l),o)}}return a(new aa[s](o),i)};return r},ra=e=>Rc(new Map,e)(0),Re="",{toString:Dc}={},{keys:Fc}=Object,qe=e=>{const t=typeof e;if(t!=="object"||!e)return[kn,t];const a=Dc.call(e).slice(8,-1);switch(a){case"Array":return[Ge,Re];case"Object":return[hn,Re];case"Date":return[ht,Re];case"RegExp":return[gt,Re];case"Map":return[xt,Re];case"Set":return[ft,Re];case"DataView":return[Ge,a]}return a.includes("Array")?[Ge,a]:a.includes("Error")?[cr,a]:[hn,a]},on=([e,t])=>e===kn&&(t==="function"||t==="symbol"),Mc=(e,t,a,r)=>{const i=(o,l)=>{const u=r.push(o)-1;return a.set(l,u),u},s=o=>{if(a.has(o))return a.get(o);let[l,u]=qe(o);switch(l){case kn:{let d=o;switch(u){case"bigint":l=ur,d=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([lr],o)}return i([l,d],o)}case Ge:{if(u){let h=o;return u==="DataView"?h=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(h=new Uint8Array(o)),i([u,[...h]],o)}const d=[],m=i([l,d],o);for(const h of o)d.push(s(h));return m}case hn:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(t&&"toJSON"in o)return s(o.toJSON());const d=[],m=i([l,d],o);for(const h of Fc(o))(e||!on(qe(o[h])))&&d.push([s(h),s(o[h])]);return m}case ht:return i([l,o.toISOString()],o);case gt:{const{source:d,flags:m}=o;return i([l,{source:d,flags:m}],o)}case xt:{const d=[],m=i([l,d],o);for(const[h,p]of o)(e||!(on(qe(h))||on(qe(p))))&&d.push([s(h),s(p)]);return m}case ft:{const d=[],m=i([l,d],o);for(const h of o)(e||!on(qe(h)))&&d.push(s(h));return m}}const{message:c}=o;return i([l,{name:u,message:c}],o)};return s},ia=(e,{json:t,lossy:a}={})=>{const r=[];return Mc(!(t||a),!!t,new Map,r)(e),r},gn=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ra(ia(e,t)):structuredClone(e):(e,t)=>ra(ia(e,t));function Lc(e,t){const a=[{type:"text",value:"↩"}];return t>1&&a.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),a}function Oc(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function zc(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=e.options.footnoteBackContent||Lc,r=e.options.footnoteBackLabel||Oc,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),m=String(c.identifier).toUpperCase(),h=Le(m.toLowerCase());let p=0;const k=[],y=e.footnoteCounts.get(m);for(;y!==void 0&&++p<=y;){k.length>0&&k.push({type:"text",value:" "});let P=typeof a=="string"?a:a(u,p);typeof P=="string"&&(P={type:"text",value:P}),k.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,p),className:["data-footnote-backref"]},children:Array.isArray(P)?P:[P]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const P=N.children[N.children.length-1];P&&P.type==="text"?P.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...k)}else d.push(...k);const v={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(d,!0)};e.patch(c,v),l.push(v)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...gn(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const dr=(function(e){if(e==null)return Uc;if(typeof e=="function")return vn(e);if(typeof e=="object")return Array.isArray(e)?_c(e):Wc(e);if(typeof e=="string")return Hc(e);throw new Error("Expected function, string, or object as test")});function _c(e){const t=[];let a=-1;for(;++a<e.length;)t[a]=dr(e[a]);return vn(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function Wc(e){const t=e;return vn(a);function a(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function Hc(e){return vn(t);function t(a){return a&&a.type===e}}function vn(e){return t;function t(a,r,i){return!!(Vc(a)&&e.call(this,a,typeof r=="number"?r:void 0,i||void 0))}}function Uc(){return!0}function Vc(e){return e!==null&&typeof e=="object"&&"type"in e}const mr=[],qc=!0,sa=!1,Kc="skip";function $c(e,t,a,r){let i;typeof t=="function"&&typeof a!="function"?(r=a,a=t):i=t;const s=dr(i),o=r?-1:1;l(e,void 0,[])();function l(u,c,d){const m=u&&typeof u=="object"?u:{};if(typeof m.type=="string"){const p=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=mr,k,y,N;if((!t||s(u,c,d[d.length-1]||void 0))&&(p=Gc(a(u,d)),p[0]===sa))return p;if("children"in u&&u.children){const v=u;if(v.children&&p[0]!==Kc)for(y=(r?v.children.length:-1)+o,N=d.concat(v);y>-1&&y<v.children.length;){const P=v.children[y];if(k=l(P,y,N)(),k[0]===sa)return k;y=typeof k[1]=="number"?k[1]:y+o}}return p}}}function Gc(e){return Array.isArray(e)?e:typeof e=="number"?[qc,e]:e==null?mr:[e]}function pr(e,t,a,r){let i,s,o;typeof t=="function"&&typeof a!="function"?(s=void 0,o=t,i=a):(s=t,o=a,i=r),$c(e,s,l,i);function l(u,c){const d=c[c.length-1],m=d?d.children.indexOf(u):void 0;return o(u,m,d)}}const Qn={}.hasOwnProperty,Yc={};function Qc(e,t){const a=t||Yc,r=new Map,i=new Map,s=new Map,o={...Tc,...a.handlers},l={all:c,applyData:Xc,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:u,options:a,patch:Jc,wrap:eu};return pr(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const m=d.type==="definition"?r:i,h=String(d.identifier).toUpperCase();m.has(h)||m.set(h,d)}}),l;function u(d,m){const h=d.type,p=l.handlers[h];if(Qn.call(l.handlers,h)&&p)return p(l,d,m);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in d){const{children:y,...N}=d,v=gn(N);return v.children=l.all(d),v}return gn(d)}return(l.options.unknownHandler||Zc)(l,d,m)}function c(d){const m=[];if("children"in d){const h=d.children;let p=-1;for(;++p<h.length;){const k=l.one(h[p],d);if(k){if(p&&h[p-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=oa(k.value)),!Array.isArray(k)&&k.type==="element")){const y=k.children[0];y&&y.type==="text"&&(y.value=oa(y.value))}Array.isArray(k)?m.push(...k):m.push(k)}}}return m}}function Jc(e,t){e.position&&(t.position=Rs(e))}function Xc(e,t){let a=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(a.type==="element")a.tagName=r;else{const o="children"in a?a.children:[a];a={type:"element",tagName:r,properties:{},children:o}}a.type==="element"&&s&&Object.assign(a.properties,gn(s)),"children"in a&&a.children&&i!==null&&i!==void 0&&(a.children=i)}return a}function Zc(e,t){const a=t.data||{},r="value"in t&&!(Qn.call(a,"hProperties")||Qn.call(a,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function eu(e,t){const a=[];let r=-1;for(t&&a.push({type:"text",value:`
`});++r<e.length;)r&&a.push({type:"text",value:`
`}),a.push(e[r]);return t&&e.length>0&&a.push({type:"text",value:`
`}),a}function oa(e){let t=0,a=e.charCodeAt(t);for(;a===9||a===32;)t++,a=e.charCodeAt(t);return e.slice(t)}function la(e,t){const a=Qc(e,t),r=a.one(e,void 0),i=zc(a),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function nu(e,t){return e&&"run"in e?async function(a,r){const i=la(a,{file:r,...t});await e.run(i,r)}:function(a,r){return la(a,{file:r,...e||t})}}function ca(e){if(e)throw e}var Pn,ua;function tu(){if(ua)return Pn;ua=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,a=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(c){return typeof Array.isArray=="function"?Array.isArray(c):t.call(c)==="[object Array]"},s=function(c){if(!c||t.call(c)!=="[object Object]")return!1;var d=e.call(c,"constructor"),m=c.constructor&&c.constructor.prototype&&e.call(c.constructor.prototype,"isPrototypeOf");if(c.constructor&&!d&&!m)return!1;var h;for(h in c);return typeof h>"u"||e.call(c,h)},o=function(c,d){a&&d.name==="__proto__"?a(c,d.name,{enumerable:!0,configurable:!0,value:d.newValue,writable:!0}):c[d.name]=d.newValue},l=function(c,d){if(d==="__proto__")if(e.call(c,d)){if(r)return r(c,d).value}else return;return c[d]};return Pn=function u(){var c,d,m,h,p,k,y=arguments[0],N=1,v=arguments.length,P=!1;for(typeof y=="boolean"&&(P=y,y=arguments[1]||{},N=2),(y==null||typeof y!="object"&&typeof y!="function")&&(y={});N<v;++N)if(c=arguments[N],c!=null)for(d in c)m=l(y,d),h=l(c,d),y!==h&&(P&&h&&(s(h)||(p=i(h)))?(p?(p=!1,k=m&&i(m)?m:[]):k=m&&s(m)?m:{},o(y,{name:d,newValue:u(P,k,h)})):typeof h<"u"&&o(y,{name:d,newValue:h}));return y},Pn}var au=tu();const Tn=fa(au);function Jn(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ru(){const e=[],t={run:a,use:r};return t;function a(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(u,...c){const d=e[++s];let m=-1;if(u){o(u);return}for(;++m<i.length;)(c[m]===null||c[m]===void 0)&&(c[m]=i[m]);i=c,d?iu(d,l)(...c):o(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function iu(e,t){let a;return r;function r(...o){const l=e.length>o.length;let u;l&&o.push(i);try{u=e.apply(this,o)}catch(c){const d=c;if(l&&a)throw d;return i(d)}l||(u&&u.then&&typeof u.then=="function"?u.then(s,i):u instanceof Error?i(u):s(u))}function i(o,...l){a||(a=!0,t(o,...l))}function s(o){i(null,o)}}const pe={basename:su,dirname:ou,extname:lu,join:cu,sep:"/"};function su(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');tn(e);let a=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){a=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(a,r)}if(t===e)return"";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){a=i+1;break}}else o<0&&(s=!0,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return a===r?r=o:r<0&&(r=e.length),e.slice(a,r)}function ou(e){if(tn(e),e.length===0)return".";let t=-1,a=e.length,r;for(;--a;)if(e.codePointAt(a)===47){if(r){t=a;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function lu(e){tn(e);let t=e.length,a=-1,r=0,i=-1,s=0,o;for(;t--;){const l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}a<0&&(o=!0,a=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||a<0||s===0||s===1&&i===a-1&&i===r+1?"":e.slice(i,a)}function cu(...e){let t=-1,a;for(;++t<e.length;)tn(e[t]),e[t]&&(a=a===void 0?e[t]:a+"/"+e[t]);return a===void 0?".":uu(a)}function uu(e){tn(e);const t=e.codePointAt(0)===47;let a=du(e,!t);return a.length===0&&!t&&(a="."),a.length>0&&e.codePointAt(e.length-1)===47&&(a+="/"),t?"/"+a:a}function du(e,t){let a="",r=0,i=-1,s=0,o=-1,l,u;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(a.length<2||r!==2||a.codePointAt(a.length-1)!==46||a.codePointAt(a.length-2)!==46){if(a.length>2){if(u=a.lastIndexOf("/"),u!==a.length-1){u<0?(a="",r=0):(a=a.slice(0,u),r=a.length-1-a.lastIndexOf("/")),i=o,s=0;continue}}else if(a.length>0){a="",r=0,i=o,s=0;continue}}t&&(a=a.length>0?a+"/..":"..",r=2)}else a.length>0?a+="/"+e.slice(i+1,o):a=e.slice(i+1,o),r=o-i-1;i=o,s=0}else l===46&&s>-1?s++:s=-1}return a}function tn(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const mu={cwd:pu};function pu(){return"/"}function Xn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function hu(e){if(typeof e=="string")e=new URL(e);else if(!Xn(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return gu(e)}function gu(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let a=-1;for(;++a<t.length;)if(t.codePointAt(a)===37&&t.codePointAt(a+1)===50){const r=t.codePointAt(a+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Rn=["history","path","basename","stem","extname","dirname"];class hr{constructor(t){let a;t?Xn(t)?a={path:t}:typeof t=="string"||xu(t)?a={value:t}:a=t:a={},this.cwd="cwd"in a?"":mu.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Rn.length;){const s=Rn[r];s in a&&a[s]!==void 0&&a[s]!==null&&(this[s]=s==="history"?[...a[s]]:a[s])}let i;for(i in a)Rn.includes(i)||(this[i]=a[i])}get basename(){return typeof this.path=="string"?pe.basename(this.path):void 0}set basename(t){Fn(t,"basename"),Dn(t,"basename"),this.path=pe.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?pe.dirname(this.path):void 0}set dirname(t){da(this.basename,"dirname"),this.path=pe.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?pe.extname(this.path):void 0}set extname(t){if(Dn(t,"extname"),da(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pe.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Xn(t)&&(t=hu(t)),Fn(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?pe.basename(this.path,this.extname):void 0}set stem(t){Fn(t,"stem"),Dn(t,"stem"),this.path=pe.join(this.dirname||"",t+(this.extname||""))}fail(t,a,r){const i=this.message(t,a,r);throw i.fatal=!0,i}info(t,a,r){const i=this.message(t,a,r);return i.fatal=void 0,i}message(t,a,r){const i=new Z(t,a,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Dn(e,t){if(e&&e.includes(pe.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+pe.sep+"`")}function Fn(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function da(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function xu(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const fu=(function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s}),bu={}.hasOwnProperty;class bt extends fu{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ru()}copy(){const t=new bt;let a=-1;for(;++a<this.attachers.length;){const r=this.attachers[a];t.use(...r)}return t.data(Tn(!0,{},this.namespace)),t}data(t,a){return typeof t=="string"?arguments.length===2?(On("data",this.frozen),this.namespace[t]=a,this):bu.call(this.namespace,t)&&this.namespace[t]||void 0:t?(On("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[a,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=a.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const a=ln(t),r=this.parser||this.Parser;return Mn("parse",r),r(String(a),a)}process(t,a){const r=this;return this.freeze(),Mn("process",this.parser||this.Parser),Ln("process",this.compiler||this.Compiler),a?i(void 0,a):new Promise(i);function i(s,o){const l=ln(t),u=r.parse(l);r.run(u,l,function(d,m,h){if(d||!m||!h)return c(d);const p=m,k=r.stringify(p,h);vu(k)?h.value=k:h.result=k,c(d,h)});function c(d,m){d||!m?o(d):s?s(m):a(void 0,m)}}}processSync(t){let a=!1,r;return this.freeze(),Mn("processSync",this.parser||this.Parser),Ln("processSync",this.compiler||this.Compiler),this.process(t,i),pa("processSync","process",a),r;function i(s,o){a=!0,ca(s),r=o}}run(t,a,r){ma(t),this.freeze();const i=this.transformers;return!r&&typeof a=="function"&&(r=a,a=void 0),r?s(void 0,r):new Promise(s);function s(o,l){const u=ln(a);i.run(t,u,c);function c(d,m,h){const p=m||t;d?l(d):o?o(p):r(void 0,p,h)}}}runSync(t,a){let r=!1,i;return this.run(t,a,s),pa("runSync","run",r),i;function s(o,l){ca(o),i=l,r=!0}}stringify(t,a){this.freeze();const r=ln(a),i=this.compiler||this.Compiler;return Ln("stringify",i),ma(t),i(t,r)}use(t,...a){const r=this.attachers,i=this.namespace;if(On("use",this.frozen),t!=null)if(typeof t=="function")u(t,a);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...m]=c;u(d,m)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=Tn(!0,i.settings,c.settings))}function l(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const m=c[d];s(m)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let m=-1,h=-1;for(;++m<r.length;)if(r[m][0]===c){h=m;break}if(h===-1)r.push([c,...d]);else if(d.length>0){let[p,...k]=d;const y=r[h][1];Jn(y)&&Jn(p)&&(p=Tn(!0,y,p)),r[h]=[c,p,...k]}}}}const yu=new bt().freeze();function Mn(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ln(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function On(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ma(e){if(!Jn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function pa(e,t,a){if(!a)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ln(e){return ku(e)?e:new hr(e)}function ku(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function vu(e){return typeof e=="string"||ju(e)}function ju(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const wu="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",ha=[],ga={allowDangerousHtml:!0},Eu=/^(https?|ircs?|mailto|xmpp)$/i,Nu=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Su(e){const t=Cu(e),a=Au(e);return Iu(t.runSync(t.parse(a),a),e)}function Cu(e){const t=e.rehypePlugins||ha,a=e.remarkPlugins||ha,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ga}:ga;return yu().use(sc).use(a).use(nu,r).use(t)}function Au(e){const t=e.children||"",a=new hr;return typeof t=="string"&&(a.value=t),a}function Iu(e,t){const a=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,u=t.urlTransform||Bu;for(const d of Nu)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+wu+d.id,void 0);return pr(e,c),Os(e,{Fragment:n.Fragment,components:i,ignoreInvalidStyle:!0,jsx:n.jsx,jsxs:n.jsxs,passKeys:!0,passNode:!0});function c(d,m,h){if(d.type==="raw"&&h&&typeof m=="number")return o?h.children.splice(m,1):h.children[m]={type:"text",value:d.value},m;if(d.type==="element"){let p;for(p in An)if(Object.hasOwn(An,p)&&Object.hasOwn(d.properties,p)){const k=d.properties[p],y=An[p];(y===null||y.includes(d.tagName))&&(d.properties[p]=u(String(k||""),p,d))}}if(d.type==="element"){let p=a?!a.includes(d.tagName):s?s.includes(d.tagName):!1;if(!p&&r&&typeof m=="number"&&(p=!r(d,m,h)),p&&h&&typeof m=="number")return l&&d.children?h.children.splice(m,1,...d.children):h.children.splice(m,1),m}}}function Bu(e){const t=e.indexOf(":"),a=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||a!==-1&&t>a||r!==-1&&t>r||Eu.test(e.slice(0,t))?e:""}function Pu(){const{slug:e}=Sr(),t=ne.find(r=>r.slug===e);if(!t)return n.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[n.jsx("h1",{className:"text-4xl mb-4",children:"Article Not Found"}),n.jsxs(X,{to:"/blog",className:"inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline",children:[n.jsx(Qe,{className:"w-4 h-4"}),"Back to Blog"]})]})});const a=ne.filter(r=>r.slug!==t.slug&&r.category===t.category).slice(0,3);return n.jsx("main",{className:"pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsxs(X,{to:"/blog",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors mb-8",children:[n.jsx(Qe,{className:"w-4 h-4"}),"Kembali ke Blog"]}),n.jsxs("article",{children:[n.jsxs("header",{className:"mb-8",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm",children:[n.jsx("span",{className:"px-3 py-1 bg-secondary rounded-full text-[var(--brand-primary)] border border-border",children:t.category}),n.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[n.jsx(dn,{className:"w-4 h-4"}),n.jsx("span",{children:t.date})]}),n.jsxs("div",{className:"flex items-center gap-1 text-muted-foreground",children:[n.jsx(mn,{className:"w-4 h-4"}),n.jsx("span",{children:t.readTime})]})]}),n.jsx("h1",{className:"text-4xl sm:text-5xl mb-6",children:t.title}),n.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:t.excerpt}),n.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-border",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center",children:n.jsx("span",{className:"text-white",children:t.author.avatar})}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm",children:"Written by"}),n.jsx("p",{className:"",children:t.author.name})]})]}),n.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent rounded-lg transition-colors",children:[n.jsx(St,{className:"w-4 h-4"}),n.jsx("span",{className:"text-sm",children:"Share"})]})]})]}),n.jsx("div",{className:"relative h-96 rounded-2xl overflow-hidden mb-8",children:n.jsx(pn,{src:t.image,alt:t.title,className:"w-full h-full object-cover"})}),n.jsx("div",{className:"prose prose-lg max-w-none",children:n.jsx(Su,{components:{h1:({node:r,...i})=>n.jsx("h1",{className:"text-3xl sm:text-4xl mt-8 mb-4",...i}),h2:({node:r,...i})=>n.jsx("h2",{className:"text-2xl sm:text-3xl mt-8 mb-4",...i}),h3:({node:r,...i})=>n.jsx("h3",{className:"text-xl sm:text-2xl mt-6 mb-3",...i}),h4:({node:r,...i})=>n.jsx("h4",{className:"text-lg sm:text-xl mt-4 mb-2",...i}),p:({node:r,...i})=>n.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",...i}),ul:({node:r,...i})=>n.jsx("ul",{className:"list-disc list-inside space-y-2 mb-4 text-muted-foreground",...i}),ol:({node:r,...i})=>n.jsx("ol",{className:"list-decimal list-inside space-y-2 mb-4 text-muted-foreground",...i}),li:({node:r,...i})=>n.jsx("li",{className:"ml-4",...i}),strong:({node:r,...i})=>n.jsx("strong",{className:"text-foreground",...i}),code:({node:r,...i})=>n.jsx("code",{className:"bg-secondary px-2 py-1 rounded text-sm",...i}),pre:({node:r,...i})=>n.jsx("pre",{className:"bg-secondary p-4 rounded-lg overflow-x-auto mb-4",...i}),blockquote:({node:r,...i})=>n.jsx("blockquote",{className:"border-l-4 border-[var(--brand-primary)] pl-4 italic my-4 text-muted-foreground",...i})},children:t.content})}),n.jsx("div",{className:"mt-12 pt-8 border-t border-border",children:n.jsx("div",{className:"flex items-center justify-between",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm text-muted-foreground",children:"Share this article:"}),n.jsx("button",{className:"p-2 hover:bg-secondary rounded-lg transition-colors",children:n.jsx(St,{className:"w-4 h-4"})})]})})}),n.jsx("div",{className:"mt-8 p-6 bg-secondary/50 rounded-xl border border-border",children:n.jsxs("div",{className:"flex items-start gap-4",children:[n.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] flex items-center justify-center flex-shrink-0",children:n.jsx(tt,{className:"w-8 h-8 text-white"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg mb-1",children:"About the Author"}),n.jsx("p",{className:"mb-2",children:t.author.name}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Expert in customer service and AI technology with over 10 years of experience helping businesses with digital transformation."})]})]})})]}),a.length>0&&n.jsxs("div",{className:"mt-16",children:[n.jsxs("h2",{className:"text-2xl mb-8",children:["Related"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Articles"})]}),n.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:a.map(r=>n.jsxs(X,{to:`/blog/${r.slug}`,className:"group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--brand-primary)]/20 transition-all",children:[n.jsx("div",{className:"relative h-40 overflow-hidden",children:n.jsx(pn,{src:r.image,alt:r.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),n.jsxs("div",{className:"p-4",children:[n.jsx("h3",{className:"text-sm mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2",children:r.title}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[n.jsx(dn,{className:"w-3 h-3"}),n.jsx("span",{children:r.date})]})]})]},r.slug))})]}),n.jsxs("div",{className:"mt-16 p-8 bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] rounded-2xl text-center text-white",children:[n.jsx("h2",{className:"text-2xl sm:text-3xl mb-4",children:"Ready to Transform Your Customer Service?"}),n.jsx("p",{className:"text-lg mb-6 opacity-90",children:"Join thousands of businesses that have experienced the benefits of AI"}),n.jsx("button",{className:"px-8 py-3 bg-white text-[var(--brand-primary)] rounded-lg hover:bg-gray-100 transition-all hover:scale-105",children:"Contact Us"})]})]})})}function Tu(){const[e,t]=f.useState(!0);return n.jsxs("main",{className:"pt-20 pb-0 min-h-screen flex flex-col",children:[n.jsx("div",{className:"px-4 sm:px-6 lg:px-8 py-6 border-b border-border bg-card/50 backdrop-blur-sm",children:n.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[n.jsx("div",{className:"flex items-center gap-4",children:n.jsxs(X,{to:"/",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--brand-primary)] transition-colors",children:[n.jsx(Qe,{className:"w-4 h-4"}),"Back to Home"]})}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Ct,{className:"w-5 h-5 text-[var(--brand-primary)]"}),n.jsx("h1",{className:"text-lg font-semibold",children:"Book a Demo"})]}),n.jsx("div",{className:"w-24"})]})}),n.jsxs("div",{className:"flex-1 w-full relative",children:[e&&n.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-background gap-6",children:[n.jsxs("div",{className:"relative w-20 h-20",children:[n.jsx("div",{className:"absolute inset-0 rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-primary)",animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite"}}),n.jsx("div",{className:"absolute inset-[6px] rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-gradient-end)",animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.15s"}}),n.jsx("div",{className:"absolute inset-[12px] rounded-full border-[3px] border-transparent",style:{borderTopColor:"var(--brand-primary)",opacity:.5,animation:"demo-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite 0.3s"}}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx(Ct,{className:"w-6 h-6 text-[var(--brand-primary)]",style:{animation:"demo-pulse 2s ease-in-out infinite"}})})]}),n.jsxs("div",{className:"text-center space-y-2",children:[n.jsx("p",{className:"text-lg font-medium text-foreground",children:"Preparing your booking"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading schedule…"})]}),n.jsx("div",{className:"w-48 h-1 rounded-full bg-border overflow-hidden",children:n.jsx("div",{className:"h-full rounded-full",style:{background:"linear-gradient(90deg, var(--brand-gradient-start), var(--brand-gradient-end))",animation:"demo-shimmer 1.5s ease-in-out infinite"}})})]}),n.jsx("iframe",{src:"https://calendly.com/wanriparasians/konsultasi-omnichannel",title:"Book a Demo - Calendly",className:"w-full h-full border-0",style:{minHeight:"calc(100vh - 8rem)",opacity:e?0:1,transition:"opacity 0.5s ease-in-out"},loading:"lazy",allow:"payment",onLoad:()=>t(!1)})]}),n.jsx("style",{children:`
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
      `})]})}function Ru(e){const[t,a]=f.useState(()=>typeof window<"u"?window.matchMedia(e).matches:!1);return f.useEffect(()=>{const r=window.matchMedia(e),i=s=>a(s.matches);return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[e]),t}const ke=[{id:1,title:"Buka Menu Integrasi",shortTitle:"Integrasi",description:"Login ke dashboard utama Anda. Pada panel menu sebelah kiri, di bawah kategori COMMUNICATION, klik menu WA Chat atau arahkan ke halaman Integrate WABA (WhatsApp Business API).",tips:"Pastikan Anda sudah masuk ke akun ResponPintar dengan kredensial yang benar sebelum memulai proses integrasi.",image:"/tutorial-connected-whatsapp/step 1.png",icon:Je},{id:2,title:'Pilih Tab "QR Code Connection"',shortTitle:"QR Code",description:"Di halaman integrasi, Anda akan melihat beberapa opsi koneksi. Klik tab QR Code Connection yang berada di sebelah kanan untuk menggunakan metode pemindaian kode yang cepat dan instan.",tips:"Metode QR Code Connection adalah cara termudah untuk menghubungkan WhatsApp Anda tanpa konfigurasi teknis yang rumit.",image:"/tutorial-connected-whatsapp/step 2.png",icon:Wn},{id:3,title:"Buat QR Code",shortTitle:"Generate",description:'Berikan nama instance yang mudah dikenali (misalnya: "WhatsApp Tim Sales") pada kolom yang tersedia. Setelah itu, klik tombol hijau bertuliskan Generate QR Code.',tips:"Gunakan nama yang deskriptif agar mudah diidentifikasi, terutama jika tim Anda mengelola lebih dari satu nomor WhatsApp.",image:"/tutorial-connected-whatsapp/step 3.png",icon:Wn},{id:4,title:"Scan dengan Handphone",shortTitle:"Scan",description:"Sistem akan menampilkan QR Code di layar komputer Anda. Ambil handphone yang nomor WhatsApp-nya ingin dihubungkan, lalu ikuti langkah berikut:",subSteps:["Buka aplikasi WhatsApp di handphone Anda.","Ketuk ikon Titik Tiga (⋮) atau buka Settings → Linked Devices.","Ketuk tombol Link a Device.","Arahkan kamera ke layar komputer untuk memindai QR Code."],tips:"QR Code memiliki batas waktu aktif. Jika kedaluwarsa, klik Refresh untuk membuat QR Code baru.",image:"/tutorial-connected-whatsapp/step 4.png",icon:wa},{id:5,title:"Tunggu Status Terhubung",shortTitle:"Terhubung",description:'Setelah QR Code berhasil dipindai, tunggu beberapa detik. Layar akan menampilkan notifikasi "Account Connected" dengan tanda centang hijau — WhatsApp Anda sudah aktif di workspace ini.',tips:"Proses koneksi biasanya berlangsung kurang dari 30 detik. Pastikan kedua perangkat terhubung ke internet yang stabil.",image:"/tutorial-connected-whatsapp/step 5.png",icon:Ea},{id:6,title:"Mulai Membalas Pesan",shortTitle:"Selesai",description:"Selesai! Masuk ke menu WA Chat → Conversations. Semua pesan pelanggan sudah tersinkronisasi dan tim Anda bisa langsung membalas secara real-time dari satu platform terpusat.",tips:"Anda dapat menghubungkan beberapa nomor WhatsApp sekaligus dengan mengulangi proses ini.",image:"/tutorial-connected-whatsapp/step 6.png",icon:Ze}];function Du(){const[e,t]=f.useState(0),[a,r]=f.useState(!1),i=Ru("(min-width: 1024px)"),s=ke[e],o=s.icon;f.useEffect(()=>{r(!1)},[e]);const l=f.useCallback(()=>{e<ke.length-1&&t(m=>m+1)},[e]),u=f.useCallback(()=>{e>0&&t(m=>m-1)},[e]);f.useEffect(()=>{const m=h=>{h.key==="ArrowRight"&&l(),h.key==="ArrowLeft"&&u()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[l,u]);const c=i?n.jsxs("aside",{style:{width:240,flexShrink:0,position:"sticky",top:96,alignSelf:"start"},children:[n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:2},children:ke.map((m,h)=>{const p=h===e,k=h<e;return n.jsxs("button",{id:`tutorial-step-${m.id}`,onClick:()=>t(h),style:{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:10,border:"none",cursor:"pointer",textAlign:"left",transition:"all 150ms ease",background:p?"color-mix(in srgb, var(--brand-primary) 8%, transparent)":"transparent",color:p?"var(--brand-primary)":k?"var(--foreground)":"var(--muted-foreground, #888)"},onMouseEnter:y=>{p||(y.currentTarget.style.background="var(--accent, #f5f5f5)")},onMouseLeave:y=>{p||(y.currentTarget.style.background="transparent")},children:[n.jsx("span",{style:{width:24,height:24,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,flexShrink:0,background:p?"var(--brand-primary)":k?"color-mix(in srgb, var(--brand-primary) 12%, transparent)":"var(--secondary, #eee)",color:p?"#fff":k?"var(--brand-primary)":"var(--muted-foreground, #888)",transition:"all 150ms ease"},children:k?n.jsx(Ze,{style:{width:14,height:14}}):m.id}),n.jsx("span",{style:{fontSize:13,fontWeight:p?600:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m.shortTitle})]},m.id)})}),n.jsxs("div",{style:{marginTop:24,paddingTop:16,borderTop:"1px solid var(--border)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--muted-foreground, #888)",marginBottom:6,fontWeight:500},children:[n.jsx("span",{children:"Progress"}),n.jsxs("span",{children:[e+1,"/",ke.length]})]}),n.jsx("div",{style:{height:4,background:"var(--secondary, #eee)",borderRadius:999,overflow:"hidden"},children:n.jsx("div",{style:{height:"100%",borderRadius:999,background:"var(--brand-primary)",transition:"width 500ms cubic-bezier(.4,0,.2,1)",width:`${(e+1)/ke.length*100}%`}})})]})]}):null,d=i?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[n.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:ke.map((m,h)=>n.jsx("button",{onClick:()=>t(h),style:{border:"none",cursor:"pointer",borderRadius:999,transition:"all 300ms ease",background:h===e?"var(--brand-primary)":h<e?"color-mix(in srgb, var(--brand-primary) 35%, transparent)":"var(--border)",width:h===e?28:8,height:8,padding:0},"aria-label":`Step ${h+1}`},h))}),n.jsxs("span",{style:{fontSize:12,fontWeight:500,color:"var(--muted-foreground, #888)",fontVariantNumeric:"tabular-nums"},children:[e+1," / ",ke.length]})]});return n.jsxs("main",{className:"pt-20 pb-16",children:[n.jsx("header",{className:"px-4 sm:px-6 lg:px-8",style:{paddingTop:32,paddingBottom:i?56:40},children:n.jsxs("div",{style:{maxWidth:640,margin:"0 auto",textAlign:"center"},children:[n.jsxs("div",{className:"inline-flex",style:{alignItems:"center",gap:6,padding:"6px 14px",borderRadius:999,background:"color-mix(in srgb, var(--brand-primary) 6%, transparent)",border:"1px solid color-mix(in srgb, var(--brand-primary) 12%, transparent)",marginBottom:24},children:[n.jsx(Wn,{style:{width:14,height:14,color:"var(--brand-primary)"}}),n.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--brand-primary)",letterSpacing:"0.02em"},children:"Tutorial Integrasi"})]}),n.jsxs("h1",{className:"text-3xl sm:text-4xl",style:{fontWeight:700,letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:14},children:["Hubungkan"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"WhatsApp"})," ","ke ResponPintar"]}),n.jsxs("p",{style:{fontSize:i?15:14,color:"var(--muted-foreground, #888)",lineHeight:1.65,maxWidth:480,margin:"0 auto"},children:["6 langkah mudah menggunakan ",n.jsx("strong",{style:{color:"var(--foreground)",fontWeight:500},children:"QR Code Connection"})," — tanpa konfigurasi teknis."]}),n.jsx("div",{className:"flex",style:{justifyContent:"center",gap:i?16:10,marginTop:28,flexWrap:"wrap"},children:[{value:"6 Langkah",emoji:"✦"},{value:"< 2 Menit",emoji:"⚡"},{value:"Tanpa Coding",emoji:"🛠"}].map((m,h)=>n.jsxs("div",{className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",background:"var(--card)",border:"1px solid var(--border)",borderRadius:8,fontSize:13,fontWeight:500,color:"var(--foreground)"},children:[n.jsx("span",{style:{fontSize:12},children:m.emoji}),m.value]},h))})]})}),n.jsx("div",{className:"px-4 sm:px-6 lg:px-8",children:n.jsx("div",{style:{maxWidth:960,margin:"0 auto"},children:n.jsxs("div",{style:{display:"flex",gap:i?48:0,alignItems:"flex-start"},children:[c,n.jsxs("div",{style:{flex:1,minWidth:0},children:[d,n.jsxs("div",{style:{borderRadius:16,border:"1px solid var(--border)",background:"var(--card)",padding:i?32:20,marginBottom:20},children:[n.jsxs("div",{className:"flex",style:{alignItems:"flex-start",gap:14,marginBottom:16},children:[n.jsx("div",{style:{width:i?44:40,height:i?44:40,borderRadius:12,flexShrink:0,background:"color-mix(in srgb, var(--brand-primary) 10%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(o,{style:{width:20,height:20,color:"var(--brand-primary)"}})}),n.jsxs("div",{style:{minWidth:0,flex:1},children:[n.jsxs("p",{style:{fontSize:11,color:"var(--brand-primary)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:2},children:["Langkah ",s.id]}),n.jsx("h2",{style:{fontSize:i?22:19,fontWeight:700,color:"var(--foreground)",letterSpacing:"-0.01em",lineHeight:1.25},children:s.title})]})]}),n.jsx("p",{style:{fontSize:i?15:14,color:"var(--muted-foreground, #888)",lineHeight:1.7,marginBottom:16},children:s.description}),s.subSteps&&n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:16},children:s.subSteps.map((m,h)=>n.jsxs("div",{className:"flex",style:{alignItems:"flex-start",gap:10},children:[n.jsx("span",{style:{width:20,height:20,borderRadius:"50%",flexShrink:0,background:"color-mix(in srgb, var(--brand-primary) 10%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--brand-primary)",fontSize:10,fontWeight:700,marginTop:2},children:h+1}),n.jsx("p",{style:{fontSize:13,color:"var(--foreground)",lineHeight:1.6,opacity:.85},children:m})]},h))}),s.tips&&n.jsxs("div",{className:"flex",style:{gap:10,padding:14,borderRadius:12,background:"color-mix(in srgb, #F59E0B 5%, transparent)",border:"1px solid color-mix(in srgb, #F59E0B 12%, transparent)"},children:[n.jsx(Na,{style:{width:16,height:16,color:"#D97706",flexShrink:0,marginTop:2}}),n.jsx("p",{style:{fontSize:13,color:"var(--foreground)",lineHeight:1.6,opacity:.8},children:s.tips})]})]}),n.jsxs("div",{style:{borderRadius:16,border:"1px solid var(--border)",background:"var(--card)",overflow:"hidden",marginBottom:20},children:[n.jsxs("div",{className:"flex",style:{alignItems:"center",gap:12,padding:"10px 16px",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--secondary, #f5f5f5) 40%, transparent)"},children:[n.jsxs("div",{className:"flex",style:{gap:6},children:[n.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#FF5F57"}}),n.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#FEBC2E"}}),n.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#28C840"}})]}),n.jsx("div",{style:{flex:1,maxWidth:280,margin:"0 auto"},children:n.jsx("div",{style:{background:"color-mix(in srgb, var(--background) 80%, transparent)",border:"1px solid color-mix(in srgb, var(--border) 50%, transparent)",borderRadius:6,padding:"4px 12px",textAlign:"center"},children:n.jsx("span",{style:{fontSize:10,color:"var(--muted-foreground, #888)",fontWeight:500},children:"dashboard.responpintar.com"})})}),n.jsx("div",{style:{width:52}})]}),n.jsxs("div",{className:"relative",style:{background:"color-mix(in srgb, var(--secondary, #f5f5f5) 20%, transparent)",overflow:"hidden"},children:[n.jsx("img",{src:s.image,alt:`Langkah ${s.id}: ${s.title}`,style:{width:"100%",height:"auto",display:"block",transition:"opacity 300ms ease",opacity:a?1:0},onLoad:()=>r(!0),draggable:!1}),!a&&n.jsx("div",{className:"absolute inset-0 flex",style:{alignItems:"center",justifyContent:"center"},children:n.jsx("div",{className:"animate-spin",style:{width:32,height:32,border:"2px solid var(--border)",borderTopColor:"var(--brand-primary)",borderRadius:"50%"}})})]})]}),n.jsxs("div",{className:"flex",style:{alignItems:"center",justifyContent:"space-between",paddingTop:4},children:[n.jsxs("button",{id:"tutorial-prev-btn",onClick:u,disabled:e===0,className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",fontSize:13,fontWeight:500,color:"var(--foreground)",cursor:e===0?"not-allowed":"pointer",opacity:e===0?.3:1,transition:"all 150ms ease"},children:[n.jsx(Qe,{style:{width:14,height:14}}),i&&n.jsx("span",{children:"Sebelumnya"})]}),i&&n.jsx("div",{className:"flex",style:{alignItems:"center",gap:4},children:ke.map((m,h)=>n.jsx("button",{id:`tutorial-dot-${h+1}`,onClick:()=>t(h),style:{border:"none",padding:0,cursor:"pointer",borderRadius:999,transition:"all 300ms ease",background:h===e?"var(--brand-primary)":"var(--border)",width:h===e?24:6,height:6},"aria-label":`Step ${h+1}`},h))}),e<ke.length-1?n.jsxs("button",{id:"tutorial-next-btn",onClick:l,className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",borderRadius:10,border:"none",background:"var(--brand-primary)",color:"#fff",fontSize:13,fontWeight:500,cursor:"pointer",transition:"all 150ms ease"},children:[n.jsx("span",{children:i?"Selanjutnya":"Lanjut"}),n.jsx(Ye,{style:{width:14,height:14}})]}):n.jsxs("a",{id:"tutorial-finish-btn",href:"https://crm.responpintar.com",target:"_blank",rel:"noopener noreferrer",className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",borderRadius:10,border:"none",background:"var(--brand-primary)",color:"#fff",fontSize:13,fontWeight:500,textDecoration:"none",cursor:"pointer"},children:["Dashboard ",n.jsx(at,{style:{width:14,height:14}})]})]})]})]})})}),n.jsx("section",{className:"px-4 sm:px-6 lg:px-8",style:{marginTop:i?80:56},children:n.jsxs("div",{style:{maxWidth:880,margin:"0 auto"},children:[n.jsxs("div",{className:"flex",style:{alignItems:"center",gap:10,marginBottom:24},children:[n.jsx(Sa,{style:{width:16,height:16,color:"var(--brand-primary)"}}),n.jsx("h2",{style:{fontSize:i?20:18,fontWeight:700,letterSpacing:"-0.01em"},children:"Tips Penting"})]}),n.jsx("div",{className:"grid sm:grid-cols-3",style:{gap:16},children:[{icon:Ea,title:"Koneksi Stabil",desc:"Pastikan handphone memiliki koneksi internet yang stabil selama proses pemindaian QR Code."},{icon:wa,title:"Putus Kapan Saja",desc:"Putus koneksi kapan saja dari menu Linked Devices di handphone Anda."},{icon:Je,title:"Multi-Nomor",desc:"Kelola beberapa nomor WhatsApp sekaligus dari satu dashboard."}].map(m=>{const h=m.icon;return n.jsxs("div",{style:{padding:20,borderRadius:14,border:"1px solid var(--border)",background:"var(--card)",transition:"border-color 200ms ease"},onMouseEnter:p=>p.currentTarget.style.borderColor="color-mix(in srgb, var(--brand-primary) 25%, transparent)",onMouseLeave:p=>p.currentTarget.style.borderColor="var(--border)",children:[n.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"color-mix(in srgb, var(--brand-primary) 8%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12},children:n.jsx(h,{style:{width:16,height:16,color:"var(--brand-primary)"}})}),n.jsx("p",{style:{fontSize:14,fontWeight:600,color:"var(--foreground)",marginBottom:4},children:m.title}),n.jsx("p",{style:{fontSize:12,color:"var(--muted-foreground, #888)",lineHeight:1.6},children:m.desc})]},m.title)})})]})}),n.jsx("section",{className:"px-4 sm:px-6 lg:px-8",style:{marginTop:i?48:40},children:n.jsx("div",{style:{maxWidth:880,margin:"0 auto"},children:n.jsxs("div",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]",style:{borderRadius:16,padding:i?"48px 40px":"36px 24px",textAlign:"center",color:"#fff"},children:[n.jsx(Je,{style:{width:40,height:40,margin:"0 auto 16px",opacity:.8}}),n.jsx("h2",{style:{fontSize:i?24:20,fontWeight:700,marginBottom:8,letterSpacing:"-0.01em"},children:"Butuh Bantuan?"}),n.jsx("p",{style:{fontSize:14,opacity:.8,maxWidth:400,margin:"0 auto 24px",lineHeight:1.65},children:"Tim support ResponPintar siap membantu Anda 24/7 melalui WhatsApp atau live chat."}),n.jsxs("div",{className:"flex",style:{justifyContent:"center",gap:12,flexWrap:"wrap"},children:[n.jsx("a",{href:"https://wa.me/6282189885080?text=Halo,%20saya%20butuh%20bantuan%20untuk%20menghubungkan%20WhatsApp%20ke%20ResponPintar.",target:"_blank",rel:"noopener noreferrer",id:"cta-whatsapp-support",style:{padding:"10px 24px",background:"#fff",color:"var(--brand-primary)",borderRadius:10,fontWeight:600,fontSize:13,textDecoration:"none",transition:"transform 150ms ease"},children:"Chat via WhatsApp"}),n.jsx("a",{href:"/demo",id:"cta-lihat-demo",style:{padding:"10px 24px",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",color:"#fff",borderRadius:10,fontWeight:600,fontSize:13,textDecoration:"none"},children:"Lihat Demo"})]})]})})})]})}function Fu(e){const[t,a]=f.useState(()=>typeof window<"u"?window.matchMedia(e).matches:!1);return f.useEffect(()=>{const r=window.matchMedia(e),i=s=>a(s.matches);return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[e]),t}const ve=[{id:1,title:"Akses Menu Automation Builder",shortTitle:"Automation",description:'Login ke dashboard Respon Pintar di crm.responpintar.com. Pada sidebar sebelah kiri, cari bagian AUTOMATION, lalu klik menu "Automation Builder".',tips:'Menu Automation Builder berada di bawah section "CONTACTS & AUDIENCE".',image:"/tutorial-setup-workflow/1.png",icon:Hn},{id:2,title:"Membuat Flow Baru",shortTitle:"New Flow",description:'Setelah masuk ke halaman Automation Builder, Anda akan melihat daftar flow yang sudah ada. Klik tombol "+ Add New Flow" berwarna hijau di pojok kanan atas.',tips:"Di tabel Anda bisa melihat flow yang sudah ada dengan informasi Platform, Nodes, Status, dan tanggal pembuatan.",image:"/tutorial-setup-workflow/2.png",icon:Zr},{id:3,title:"Pilih Channel WhatsApp",shortTitle:"WhatsApp",description:'Akan muncul popup "Choose Automation Channel". Pilih "WhatsApp" dari daftar pilihan yang tersedia untuk mengirim automated messages, catalog templates, dan menjalankan interactive chats.',tips:"Channel lain yang tersedia: All Channels, Telegram Bot, Facebook, Instagram.",image:"/tutorial-setup-workflow/3.png",icon:Je},{id:4,title:"Tambahkan Automation Entry",shortTitle:"Entry",description:'Setelah memilih channel, Anda akan masuk ke Flow Editor. Di panel kanan, lihat bagian "Flow Toolkit". Pada section START, klik dan drag komponen "Automation Entry" ke canvas editor.',tips:"Flow Toolkit berisi komponen: START (Automation Entry), MESSAGING (Send Message, Send Template), INTERACTIONS (Attach Media, Send Location), dan UTILITIES (Wait Timer, Wait for Reply).",image:"/tutorial-setup-workflow/4.png",icon:ei},{id:5,title:'Pilih Trigger "All Messages"',shortTitle:"Trigger",description:'Setelah Automation Entry ditambahkan, akan muncul popup "Activation Method". Pilih "All Messages" agar flow akan aktif untuk SEMUA pesan masuk.',tips:"Pilihan Activation Method lainnya: Exact Match (cocok persis), Partial Match (mengandung kata), Starts With (dimulai dengan kata), Order Events.",image:"/tutorial-setup-workflow/5.png",icon:ni},{id:6,title:"Tambahkan External API",shortTitle:"API",description:'Scroll ke bawah pada Flow Toolkit di panel kanan. Cari section INTEGRATIONS, lalu klik dan drag komponen "External API" ke canvas. Hubungkan node "All Messages" dengan node "External API" dengan menarik garis dari output ke input.',tips:"Komponen Integrations lainnya: Webhook, Save Response, Google Sheets, Calendar Event.",image:"/tutorial-setup-workflow/6.png",icon:ti},{id:7,title:"Konfigurasi HTTP Method POST",shortTitle:"POST",description:'Klik node External API yang sudah ditambahkan. Akan muncul panel konfigurasi di sebelah kanan. Pada field "HTTP Method", klik dropdown dan pilih "POST".',tips:"HTTP Method yang tersedia: GET, POST (pilih ini), PUT, DELETE.",image:"/tutorial-setup-workflow/7.png",icon:ai},{id:8,title:"Masukkan URL Webhook",shortTitle:"Webhook",description:'Pada field "API URL", masukkan URL webhook: https://workflow.responpintar.com/webhook/general-webhook. Pastikan HTTP Method sudah terisi POST.',tips:"URL ini adalah endpoint standar untuk semua client baru. Jangan mengubah URL ini kecuali ada instruksi khusus.",image:"/tutorial-setup-workflow/8.png",icon:nt},{id:9,title:"Konfigurasi Body Parameter",shortTitle:"Parameter",description:'Ini adalah langkah PALING PENTING. Klik "+ Add" pada bagian BODY, lalu isi parameter sesuai kebutuhan client.',subSteps:["name: {{contact_name}} - Nama kontak (otomatis)","phone_number: {{senderNumber}} - Nomor pengirim (otomatis)","referrer_source: Whatsapp - Diisi manual","project_name: [Nama Project] - Diisi sesuai client","last_message: {{message}} - Pesan terakhir (otomatis)","project_id: [ID Project] - Diisi sesuai client"],tips:"Variable dalam {{...}} akan otomatis terisi dari data pesan masuk. Parameter lainnya harus diisi MANUAL sesuai data client.",image:"/tutorial-setup-workflow/9.png",icon:Ce},{id:10,title:"Simpan dan Publish Flow",shortTitle:"Publish",description:'Setelah semua konfigurasi selesai, berikan nama Flow yang sesuai di bagian atas (contoh: "AI" atau nama client). Perhatikan jumlah Nodes yang ditampilkan (harus "2 Nodes"). Klik tombol "Update" atau "Publish" berwarna merah untuk menyimpan dan mengaktifkan flow.',tips:"Checklist sebelum publish: Nama flow sesuai, Automation Entry terhubung ke External API, URL webhook benar, HTTP Method = POST, Body parameter lengkap.",image:"/tutorial-setup-workflow/10.png",icon:Ze}];function Mu(){const[e,t]=f.useState(0),[a,r]=f.useState(!1),i=Fu("(min-width: 1024px)"),s=ve[e],o=s.icon;f.useEffect(()=>{r(!1)},[e]);const l=f.useCallback(()=>{e<ve.length-1&&t(m=>m+1)},[e]),u=f.useCallback(()=>{e>0&&t(m=>m-1)},[e]);f.useEffect(()=>{const m=h=>{h.key==="ArrowRight"&&l(),h.key==="ArrowLeft"&&u()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[l,u]);const c=i?n.jsxs("aside",{style:{width:240,flexShrink:0,position:"sticky",top:96,alignSelf:"start"},children:[n.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:2},children:ve.map((m,h)=>{const p=h===e,k=h<e;return n.jsxs("button",{id:`tutorial-step-${m.id}`,onClick:()=>t(h),style:{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:10,border:"none",cursor:"pointer",textAlign:"left",transition:"all 150ms ease",background:p?"color-mix(in srgb, var(--brand-primary) 8%, transparent)":"transparent",color:p?"var(--brand-primary)":k?"var(--foreground)":"var(--muted-foreground, #888)"},onMouseEnter:y=>{p||(y.currentTarget.style.background="var(--accent, #f5f5f5)")},onMouseLeave:y=>{p||(y.currentTarget.style.background="transparent")},children:[n.jsx("span",{style:{width:24,height:24,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,flexShrink:0,background:p?"var(--brand-primary)":k?"color-mix(in srgb, var(--brand-primary) 12%, transparent)":"var(--secondary, #eee)",color:p?"#fff":k?"var(--brand-primary)":"var(--muted-foreground, #888)",transition:"all 150ms ease"},children:k?n.jsx(Ze,{style:{width:14,height:14}}):m.id}),n.jsx("span",{style:{fontSize:13,fontWeight:p?600:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m.shortTitle})]},m.id)})}),n.jsxs("div",{style:{marginTop:24,paddingTop:16,borderTop:"1px solid var(--border)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--muted-foreground, #888)",marginBottom:6,fontWeight:500},children:[n.jsx("span",{children:"Progress"}),n.jsxs("span",{children:[e+1,"/",ve.length]})]}),n.jsx("div",{style:{height:4,background:"var(--secondary, #eee)",borderRadius:999,overflow:"hidden"},children:n.jsx("div",{style:{height:"100%",borderRadius:999,background:"var(--brand-primary)",transition:"width 500ms cubic-bezier(.4,0,.2,1)",width:`${(e+1)/ve.length*100}%`}})})]})]}):null,d=i?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[n.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:ve.map((m,h)=>n.jsx("button",{onClick:()=>t(h),style:{border:"none",cursor:"pointer",borderRadius:999,transition:"all 300ms ease",background:h===e?"var(--brand-primary)":h<e?"color-mix(in srgb, var(--brand-primary) 35%, transparent)":"var(--border)",width:h===e?28:8,height:8,padding:0},"aria-label":`Step ${h+1}`},h))}),n.jsxs("span",{style:{fontSize:12,fontWeight:500,color:"var(--muted-foreground, #888)",fontVariantNumeric:"tabular-nums"},children:[e+1," / ",ve.length]})]});return n.jsxs("main",{className:"pt-20 pb-16",children:[n.jsx("header",{className:"px-4 sm:px-6 lg:px-8",style:{paddingTop:32,paddingBottom:i?56:40},children:n.jsxs("div",{style:{maxWidth:640,margin:"0 auto",textAlign:"center"},children:[n.jsxs("div",{className:"inline-flex",style:{alignItems:"center",gap:6,padding:"6px 14px",borderRadius:999,background:"color-mix(in srgb, var(--brand-primary) 6%, transparent)",border:"1px solid color-mix(in srgb, var(--brand-primary) 12%, transparent)",marginBottom:24},children:[n.jsx(et,{style:{width:14,height:14,color:"var(--brand-primary)"}}),n.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--brand-primary)",letterSpacing:"0.02em"},children:"Tutorial Automation"})]}),n.jsxs("h1",{className:"text-3xl sm:text-4xl",style:{fontWeight:700,letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:14},children:["Setup"," ",n.jsx("span",{className:"bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent",children:"Workflow"})," ","Automation"]}),n.jsxs("p",{style:{fontSize:i?15:14,color:"var(--muted-foreground, #888)",lineHeight:1.65,maxWidth:480,margin:"0 auto"},children:["10 langkah mudah menggunakan ",n.jsx("strong",{style:{color:"var(--foreground)",fontWeight:500},children:"Automation Builder"})," — hubungkan WhatsApp ke sistem webhook."]}),n.jsx("div",{className:"flex",style:{justifyContent:"center",gap:i?16:10,marginTop:28,flexWrap:"wrap"},children:[{value:"10 Langkah",emoji:"✦"},{value:"10-15 Menit",emoji:"⚡"},{value:"No Coding",emoji:"🛠"}].map((m,h)=>n.jsxs("div",{className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",background:"var(--card)",border:"1px solid var(--border)",borderRadius:8,fontSize:13,fontWeight:500,color:"var(--foreground)"},children:[n.jsx("span",{style:{fontSize:12},children:m.emoji}),m.value]},h))})]})}),n.jsx("div",{className:"px-4 sm:px-6 lg:px-8",children:n.jsx("div",{style:{maxWidth:960,margin:"0 auto"},children:n.jsxs("div",{style:{display:"flex",gap:i?48:0,alignItems:"flex-start"},children:[c,n.jsxs("div",{style:{flex:1,minWidth:0},children:[d,n.jsxs("div",{style:{borderRadius:16,border:"1px solid var(--border)",background:"var(--card)",padding:i?32:20,marginBottom:20},children:[n.jsxs("div",{className:"flex",style:{alignItems:"flex-start",gap:14,marginBottom:16},children:[n.jsx("div",{style:{width:i?44:40,height:i?44:40,borderRadius:12,flexShrink:0,background:"color-mix(in srgb, var(--brand-primary) 10%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(o,{style:{width:20,height:20,color:"var(--brand-primary)"}})}),n.jsxs("div",{style:{minWidth:0,flex:1},children:[n.jsxs("p",{style:{fontSize:11,color:"var(--brand-primary)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:2},children:["Langkah ",s.id]}),n.jsx("h2",{style:{fontSize:i?22:19,fontWeight:700,color:"var(--foreground)",letterSpacing:"-0.01em",lineHeight:1.25},children:s.title})]})]}),n.jsx("p",{style:{fontSize:i?15:14,color:"var(--muted-foreground, #888)",lineHeight:1.7,marginBottom:16},children:s.description}),s.subSteps&&n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:16},children:s.subSteps.map((m,h)=>n.jsxs("div",{className:"flex",style:{alignItems:"flex-start",gap:10},children:[n.jsx("span",{style:{width:20,height:20,borderRadius:"50%",flexShrink:0,background:"color-mix(in srgb, var(--brand-primary) 10%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--brand-primary)",fontSize:10,fontWeight:700,marginTop:2},children:h+1}),n.jsx("p",{style:{fontSize:13,color:"var(--foreground)",lineHeight:1.6,opacity:.85},children:m})]},h))}),s.tips&&n.jsxs("div",{className:"flex",style:{gap:10,padding:14,borderRadius:12,background:"color-mix(in srgb, #F59E0B 5%, transparent)",border:"1px solid color-mix(in srgb, #F59E0B 12%, transparent)"},children:[n.jsx(Na,{style:{width:16,height:16,color:"#D97706",flexShrink:0,marginTop:2}}),n.jsx("p",{style:{fontSize:13,color:"var(--foreground)",lineHeight:1.6,opacity:.8},children:s.tips})]})]}),n.jsxs("div",{style:{borderRadius:16,border:"1px solid var(--border)",background:"var(--card)",overflow:"hidden",marginBottom:20},children:[n.jsxs("div",{className:"flex",style:{alignItems:"center",gap:12,padding:"10px 16px",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--secondary, #f5f5f5) 40%, transparent)"},children:[n.jsxs("div",{className:"flex",style:{gap:6},children:[n.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#FF5F57"}}),n.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#FEBC2E"}}),n.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#28C840"}})]}),n.jsx("div",{style:{flex:1,maxWidth:280,margin:"0 auto"},children:n.jsx("div",{style:{background:"color-mix(in srgb, var(--background) 80%, transparent)",border:"1px solid color-mix(in srgb, var(--border) 50%, transparent)",borderRadius:6,padding:"4px 12px",textAlign:"center"},children:n.jsx("span",{style:{fontSize:10,color:"var(--muted-foreground, #888)",fontWeight:500},children:"crm.responpintar.com"})})}),n.jsx("div",{style:{width:52}})]}),n.jsxs("div",{className:"relative",style:{background:"color-mix(in srgb, var(--secondary, #f5f5f5) 20%, transparent)",overflow:"hidden"},children:[n.jsx("img",{src:s.image,alt:`Langkah ${s.id}: ${s.title}`,style:{width:"100%",height:"auto",display:"block",transition:"opacity 300ms ease",opacity:a?1:0},onLoad:()=>r(!0),draggable:!1}),!a&&n.jsx("div",{className:"absolute inset-0 flex",style:{alignItems:"center",justifyContent:"center"},children:n.jsx("div",{className:"animate-spin",style:{width:32,height:32,border:"2px solid var(--border)",borderTopColor:"var(--brand-primary)",borderRadius:"50%"}})})]})]}),n.jsxs("div",{className:"flex",style:{alignItems:"center",justifyContent:"space-between",paddingTop:4},children:[n.jsxs("button",{id:"tutorial-prev-btn",onClick:u,disabled:e===0,className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",fontSize:13,fontWeight:500,color:"var(--foreground)",cursor:e===0?"not-allowed":"pointer",opacity:e===0?.3:1,transition:"all 150ms ease"},children:[n.jsx(Qe,{style:{width:14,height:14}}),i&&n.jsx("span",{children:"Sebelumnya"})]}),i&&n.jsx("div",{className:"flex",style:{alignItems:"center",gap:4},children:ve.map((m,h)=>n.jsx("button",{id:`tutorial-dot-${h+1}`,onClick:()=>t(h),style:{border:"none",padding:0,cursor:"pointer",borderRadius:999,transition:"all 300ms ease",background:h===e?"var(--brand-primary)":"var(--border)",width:h===e?24:6,height:6},"aria-label":`Step ${h+1}`},h))}),e<ve.length-1?n.jsxs("button",{id:"tutorial-next-btn",onClick:l,className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",borderRadius:10,border:"none",background:"var(--brand-primary)",color:"#fff",fontSize:13,fontWeight:500,cursor:"pointer",transition:"all 150ms ease"},children:[n.jsx("span",{children:i?"Selanjutnya":"Lanjut"}),n.jsx(Ye,{style:{width:14,height:14}})]}):n.jsxs("a",{id:"tutorial-finish-btn",href:"https://crm.responpintar.com",target:"_blank",rel:"noopener noreferrer",className:"flex",style:{alignItems:"center",gap:6,padding:"8px 16px",borderRadius:10,border:"none",background:"var(--brand-primary)",color:"#fff",fontSize:13,fontWeight:500,textDecoration:"none",cursor:"pointer"},children:["Dashboard ",n.jsx(at,{style:{width:14,height:14}})]})]})]})]})})}),n.jsx("section",{className:"px-4 sm:px-6 lg:px-8",style:{marginTop:i?80:56},children:n.jsxs("div",{style:{maxWidth:880,margin:"0 auto"},children:[n.jsxs("div",{className:"flex",style:{alignItems:"center",gap:10,marginBottom:24},children:[n.jsx(Sa,{style:{width:16,height:16,color:"var(--brand-primary)"}}),n.jsx("h2",{style:{fontSize:i?20:18,fontWeight:700,letterSpacing:"-0.01em"},children:"Tips Penting"})]}),n.jsx("div",{className:"grid sm:grid-cols-3",style:{gap:16},children:[{icon:Hn,title:"Satu Flow Per Client",desc:"Setiap client memerlukan flow tersendiri dengan project_id dan parameter yang berbeda."},{icon:nt,title:"URL Webhook Standar",desc:"URL webhook sama untuk semua client: workflow.responpintar.com/webhook/general-webhook"},{icon:Ce,title:"Parameter Wajib",desc:"Pastikan parameter wajib (name, phone_number, project_id, dll) terisi dengan benar."}].map(m=>{const h=m.icon;return n.jsxs("div",{style:{padding:20,borderRadius:14,border:"1px solid var(--border)",background:"var(--card)",transition:"border-color 200ms ease"},onMouseEnter:p=>p.currentTarget.style.borderColor="color-mix(in srgb, var(--brand-primary) 25%, transparent)",onMouseLeave:p=>p.currentTarget.style.borderColor="var(--border)",children:[n.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"color-mix(in srgb, var(--brand-primary) 8%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12},children:n.jsx(h,{style:{width:16,height:16,color:"var(--brand-primary)"}})}),n.jsx("p",{style:{fontSize:14,fontWeight:600,color:"var(--foreground)",marginBottom:4},children:m.title}),n.jsx("p",{style:{fontSize:12,color:"var(--muted-foreground, #888)",lineHeight:1.6},children:m.desc})]},m.title)})})]})}),n.jsx("section",{className:"px-4 sm:px-6 lg:px-8",style:{marginTop:i?48:40},children:n.jsx("div",{style:{maxWidth:880,margin:"0 auto"},children:n.jsxs("div",{className:"bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)]",style:{borderRadius:16,padding:i?"48px 40px":"36px 24px",textAlign:"center",color:"#fff"},children:[n.jsx(Hn,{style:{width:40,height:40,margin:"0 auto 16px",opacity:.8}}),n.jsx("h2",{style:{fontSize:i?24:20,fontWeight:700,marginBottom:8,letterSpacing:"-0.01em"},children:"Butuh Bantuan?"}),n.jsx("p",{style:{fontSize:14,opacity:.8,maxWidth:400,margin:"0 auto 24px",lineHeight:1.65},children:"Tim support ResponPintar siap membantu Anda 24/7 melalui WhatsApp atau live chat."}),n.jsxs("div",{className:"flex",style:{justifyContent:"center",gap:12,flexWrap:"wrap"},children:[n.jsx("a",{href:"https://wa.me/6282189885080?text=Halo,%20saya%20butuh%20bantuan%20untuk%20setup%20workflow%20automation%20di%20ResponPintar.",target:"_blank",rel:"noopener noreferrer",id:"cta-whatsapp-support",style:{padding:"10px 24px",background:"#fff",color:"var(--brand-primary)",borderRadius:10,fontWeight:600,fontSize:13,textDecoration:"none",transition:"transform 150ms ease"},children:"Chat via WhatsApp"}),n.jsx("a",{href:"/demo",id:"cta-lihat-demo",style:{padding:"10px 24px",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",color:"#fff",borderRadius:10,fontWeight:600,fontSize:13,textDecoration:"none"},children:"Lihat Demo"})]})]})})})]})}function Lu(){return n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(244,245,247,0.12)] bg-[#16181D]/80 text-[#AEB4BD] text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-md",children:[n.jsx(ri,{className:"w-3.5 h-3.5 text-[#8FE3B0]"}),n.jsx("span",{children:"Pengelolaan Akun & Data Pribadi"})]}),n.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E9EBEF] mb-4",children:["Penghapusan Akun &"," ",n.jsx("span",{className:"chrome-text",children:"Data Pengguna"})]}),n.jsx("p",{className:"text-base sm:text-lg text-[#AEB4BD] max-w-2xl mx-auto leading-relaxed",children:"Respon Pintar menghargai privasi dan hak kepemilikan data bisnis Anda sesuai regulasi UU PDP No. 27/2022, Google Play Store Data Safety, dan Apple App Store Guidelines. Anda dapat menghapus akun dan seluruh data saluran omnichannel terkait kapan saja."}),n.jsx("p",{className:"text-xs sm:text-sm font-mono text-[#636B76] mt-3",children:"Terakhir diperbarui: 17 Oktober 2026 • Platform Omnichannel Customer Service"})]})}function Ou(){return n.jsxs("div",{className:"bg-red-950/20 border border-red-500/30 rounded-2xl p-6 sm:p-8 flex items-start gap-4 sm:gap-5 backdrop-blur-md shadow-[0_4px_24px_rgba(220,38,38,0.1)]",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400",children:n.jsx(ya,{className:"w-5 h-5"})}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("h2",{className:"text-base sm:text-lg font-bold text-red-200",children:"Peringatan Penting Sebelum Menghapus Akun"}),n.jsxs("p",{className:"text-sm sm:text-base text-red-300/80 leading-relaxed",children:["Penghapusan akun bersifat ",n.jsx("strong",{className:"text-red-200",children:"permanen dan tidak dapat dibatalkan"})," setelah masa tenggang berakhir. Seluruh integrasi WhatsApp Business API, Instagram DM, Telegram, dan live chat inbox agen CS Anda akan terputus seketika. Sisa kuota pesan atau masa aktif langganan otomatis hangus (non-refundable)."]})]})]})}function zu(){return n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8",children:[n.jsxs("div",{className:"flex items-start gap-4 sm:gap-5",children:[n.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(Ce,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]",children:"Panduan Cara Menghapus Akun"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Pilih salah satu metode penghapusan akun di bawah ini sesuai dengan kenyamanan dan kondisi akses akun Anda."})]})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-2",children:[n.jsxs("div",{className:"bg-[#16181D]/80 border border-[rgba(244,245,247,0.08)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[rgba(244,245,247,0.2)] transition shadow-sm",children:[n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"w-8 h-8 rounded-xl bg-[#8FE3B0]/15 border border-[#8FE3B0]/30 text-[#8FE3B0] text-sm flex items-center justify-center font-bold",children:"A"}),n.jsx("h3",{className:"font-bold text-lg text-[#E9EBEF]",children:"Secara Mandiri via Dashboard"})]}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed",children:"Metode tercepat jika Anda masih memiliki akses login aktif ke akun Respon Pintar:"}),n.jsxs("ol",{className:"space-y-4 text-sm text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]",children:"1"}),n.jsxs("span",{className:"leading-relaxed",children:["Buka dan login ke dashboard"," ",n.jsx("a",{href:"https://app.responpintar.com",target:"_blank",rel:"noopener noreferrer",className:"text-[#8FE3B0] font-medium underline underline-offset-4 hover:opacity-80",children:"app.responpintar.com"})]})]}),n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]",children:"2"}),n.jsxs("span",{className:"leading-relaxed",children:["Buka menu ",n.jsx("strong",{className:"text-[#E9EBEF]",children:"Profil / Pengaturan Akun"})," di pojok kanan atas."]})]}),n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]",children:"3"}),n.jsxs("span",{className:"leading-relaxed",children:["Gulir ke bagian paling bawah pada menu ",n.jsx("strong",{className:"text-[#E9EBEF]",children:"Zona Berbahaya (Danger Zone)"}),"."]})]}),n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]",children:"4"}),n.jsxs("span",{className:"leading-relaxed",children:["Klik tombol ",n.jsx("strong",{className:"text-[#E9EBEF]",children:"Hapus Akun Saya"})," dan masukkan password akun untuk konfirmasi."]})]}),n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[rgba(244,245,247,0.12)] bg-[#111214] text-[#E9EBEF]",children:"5"}),n.jsx("span",{className:"leading-relaxed",children:"Konfirmasi penghapusan. Akun Anda akan masuk masa tenggang selama 14 hari."})]})]})]}),n.jsx("div",{className:"mt-8 pt-6 border-t border-[rgba(244,245,247,0.08)]",children:n.jsxs("a",{href:"https://app.responpintar.com",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[rgba(244,245,247,0.2)] bg-transparent hover:bg-white/5 text-sm font-semibold text-[#E9EBEF] transition-all duration-200 w-full sm:w-auto",children:[n.jsx("span",{children:"Buka Dashboard Respon Pintar"}),n.jsx(at,{className:"w-4 h-4 text-[#AEB4BD]"})]})})]}),n.jsxs("div",{className:"bg-[#16181D]/80 border border-[rgba(244,245,247,0.08)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[rgba(244,245,247,0.2)] transition shadow-sm",children:[n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"w-8 h-8 rounded-xl bg-[#8FE3B0]/15 border border-[#8FE3B0]/30 text-[#8FE3B0] text-sm flex items-center justify-center font-bold",children:"B"}),n.jsx("h3",{className:"font-bold text-lg text-[#E9EBEF]",children:"Permintaan via Formulir Web / Email"})]}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed",children:"Gunakan metode ini jika Anda lupa kredensial login atau telah meng-uninstall aplikasi dari perangkat:"}),n.jsxs("ul",{className:"space-y-4 text-sm text-[#AEB4BD]",children:[n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"text-[#8FE3B0] text-lg leading-none mt-0.5 flex-shrink-0",children:"•"}),n.jsx("span",{className:"leading-relaxed",children:"Isi formulir pengajuan penghapusan akun yang tersedia di bagian bawah halaman ini."})]}),n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"text-[#8FE3B0] text-lg leading-none mt-0.5 flex-shrink-0",children:"•"}),n.jsx("span",{className:"leading-relaxed",children:"Tim verifikasi kami akan mengirimkan email konfirmasi ke alamat email terdaftar dalam 1–3 hari kerja."})]}),n.jsxs("li",{className:"flex items-start gap-3.5",children:[n.jsx("span",{className:"text-[#8FE3B0] text-lg leading-none mt-0.5 flex-shrink-0",children:"•"}),n.jsx("span",{className:"leading-relaxed",children:"Setelah verifikasi kepemilikan akun berhasil, akun Anda akan dijadwalkan untuk dihapus secara permanen."})]})]})]}),n.jsx("div",{className:"mt-8 pt-6 border-t border-[rgba(244,245,247,0.08)]",children:n.jsxs("a",{href:"#request-form",className:"inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#E9EBEF] text-[#0B0C0E] border border-white hover:bg-white text-sm font-semibold transition-all duration-200 w-full sm:w-auto shadow-sm",children:[n.jsx("span",{children:"Langsung ke Formulir Pengajuan"}),n.jsx(Ye,{className:"w-4 h-4"})]})})]})]})]})}const _u=[{icon:tt,colorClass:"bg-blue-500/10 text-blue-400 border border-blue-500/20",title:"Data Profil & Akun",description:"Nama lengkap, alamat email, nomor telepon, foto profil, dan kredensial login akun Anda."},{icon:zn,colorClass:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",title:"Bot & Workflow Otomatisasi",description:"Seluruh alur percakapan bot, logic AI prompt, template pesan cepat, dan respon otomatis."},{icon:un,colorClass:"bg-purple-500/10 text-purple-400 border border-purple-500/20",title:"Daftar Kontak Pelanggan",description:"Database nomor kontak pelanggan, label, tag segmentasi, serta catatan khusus pelanggan."},{icon:Je,colorClass:"bg-amber-500/10 text-amber-400 border border-amber-500/20",title:"Riwayat Percakapan",description:"Seluruh log chat masuk dan keluar WhatsApp, Instagram DM, Telegram, audio, dan dokumen lampiran."},{icon:et,colorClass:"bg-rose-500/10 text-rose-400 border border-rose-500/20",title:"Sesi Integrasi Saluran",description:"Token WhatsApp Business Cloud API, webhook URL, token Telegram, dan kredensial integrasi."},{icon:ii,colorClass:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",title:"Metode Pembayaran Tersimpan",description:"Profil langganan berulang dan token kartu kredit yang terhubung pada payment gateway."}];function Wu(){return n.jsxs("div",{className:"space-y-12",children:[n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8",children:[n.jsxs("div",{className:"flex items-start gap-4 sm:gap-5",children:[n.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(tt,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]",children:"Data yang Akan Dihapus Permanen"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Berikut adalah rincian data pribadi dan data operasional saluran omnichannel yang akan dimusnahkan secara permanen dari server Respon Pintar:"})]})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2",children:_u.map((e,t)=>{const a=e.icon;return n.jsxs("div",{className:"p-6 rounded-2xl border border-[rgba(244,245,247,0.08)] bg-[#16181D]/80 space-y-3 hover:border-[rgba(244,245,247,0.2)] transition shadow-sm",children:[n.jsx("div",{className:`w-10 h-10 rounded-xl ${e.colorClass} flex items-center justify-center`,children:n.jsx(a,{className:"w-5 h-5"})}),n.jsx("h3",{className:"font-bold text-base text-[#E9EBEF]",children:e.title}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed",children:e.description})]},t)})})]}),n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8",children:[n.jsxs("div",{className:"flex items-start gap-4 sm:gap-5",children:[n.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(_n,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]",children:"Data yang Tetap Disimpan & Alasannya"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Sesuai dengan peraturan perundang-undangan Republik Indonesia, beberapa jenis data tertentu tetap wajib kami simpan dalam batas waktu tertentu:"})]})]}),n.jsx("div",{className:"overflow-x-auto rounded-xl border border-[rgba(244,245,247,0.08)] bg-[#16181D]/60",children:n.jsxs("table",{className:"w-full min-w-[640px] border-collapse text-left",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"border-b border-[rgba(244,245,247,0.08)] bg-[#16181D]",children:[n.jsx("th",{className:"py-4 px-5 text-xs font-mono uppercase tracking-wider text-[#AEB4BD]",style:{width:"30%"},children:"Jenis Data"}),n.jsx("th",{className:"py-4 px-5 text-xs font-mono uppercase tracking-wider text-[#AEB4BD]",style:{width:"52%"},children:"Dasar Hukum & Alasan"}),n.jsx("th",{className:"py-4 px-5 text-xs font-mono uppercase tracking-wider text-[#AEB4BD] text-center",style:{width:"18%"},children:"Masa Retensi"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{className:"border-b border-[rgba(244,245,247,0.06)] hover:bg-white/[0.02]",children:[n.jsx("td",{className:"py-4 px-5 font-semibold text-[#E9EBEF] text-sm",children:"Catatan Transaksi & Faktur Pajak"}),n.jsx("td",{className:"py-4 px-5 text-sm text-[#AEB4BD] leading-relaxed",children:"Kepatuhan terhadap UU Perpajakan Republik Indonesia dan kewajiban audit laporan keuangan resmi perusahaan."}),n.jsx("td",{className:"py-4 px-5 text-center",children:n.jsx("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#8FE3B0]/10 text-[#8FE3B0] border border-[#8FE3B0]/20",children:"5 Tahun"})})]}),n.jsxs("tr",{className:"hover:bg-white/[0.02]",children:[n.jsx("td",{className:"py-4 px-5 font-semibold text-[#E9EBEF] text-sm",children:"Log Akses Keamanan Teranonim"}),n.jsxs("td",{className:"py-4 px-5 text-sm text-[#AEB4BD] leading-relaxed",children:["Audit pencegahan serangan siber dan deteksi aktivitas mencurigakan (",n.jsx("em",{children:"fraud prevention"}),"), tanpa menyimpan informasi identitas pribadi (PII)."]}),n.jsx("td",{className:"py-4 px-5 text-center",children:n.jsx("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#8FE3B0]/10 text-[#8FE3B0] border border-[#8FE3B0]/20",children:"12 Bulan"})})]})]})]})})]})]})}const xa=[{step:"Tahap 1: Pengajuan & Verifikasi (Hari ke-1)",description:"Permintaan diterima oleh sistem. Integrasi bot omnichannel langsung dinonaktifkan dan email konfirmasi otomatis dikirimkan ke alamat email terdaftar."},{step:"Tahap 2: Masa Tenggang (Grace Period Hari ke-1 s/d 14)",description:"Akun berstatus non-aktif. Anda masih dapat membatalkan permintaan jika berubah pikiran cukup dengan login kembali atau menghubungi tim bantuan kami."},{step:"Tahap 3: Pemusnahan Data Produksi (Hari ke-14)",description:"Seluruh database aktif, histori chat WhatsApp, daftar kontak, alur auto-assignment, serta kredensial akun dihapus secara permanen dari server utama."},{step:"Tahap 4: Pembersihan Salinan Backup (Hari ke-30 s/d 90)",description:"Seluruh arsip cadangan sistem di server cloud terenkripsi otomatis tertimpa dan terhapus sesuai standar siklus retensi keamanan ISO & UU PDP."}];function Hu(){return n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8",children:[n.jsxs("div",{className:"flex items-start gap-4 sm:gap-5",children:[n.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(mn,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]",children:"Jadwal & Tahapan Proses (Timeline)"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Prosedur pembersihan data dilakukan secara bertahap untuk memastikan keamanan dan mencegah penghapusan yang tidak disengaja."})]})]}),n.jsx("div",{className:"flex flex-col gap-0 pt-2",children:xa.map((e,t)=>{const a=t===xa.length-1;return n.jsxs("div",{className:"flex gap-4 sm:gap-6 relative",children:[n.jsxs("div",{className:"flex flex-col items-center flex-shrink-0 w-6",children:[n.jsx("div",{className:"w-4 h-4 rounded-full bg-[#8FE3B0] border-2 border-[#0B0C0E] shadow-[0_0_10px_rgba(143,227,176,0.5)] mt-1"}),!a&&n.jsx("div",{className:"w-[2px] flex-grow bg-[rgba(244,245,247,0.12)] my-2 min-h-[56px]"})]}),n.jsxs("div",{className:"pb-8 flex-1",children:[n.jsx("h3",{className:"text-base sm:text-lg font-bold text-[#E9EBEF] mb-1.5 leading-snug",children:e.step}),n.jsx("p",{className:"text-sm text-[#AEB4BD] leading-relaxed",children:e.description})]})]},t)})})]})}function Uu(){const[e,t]=f.useState(""),[a,r]=f.useState(""),[i,s]=f.useState(""),[o,l]=f.useState(""),[u,c]=f.useState(!1),[d,m]=f.useState(!1),h=p=>{if(p.preventDefault(),!u){alert("Harap centang konfirmasi bahwa Anda memahami penghapusan data bersifat permanen.");return}const k=encodeURIComponent(`Permintaan Penghapusan Akun - ${e}`),y=encodeURIComponent(`Halo Tim Support Respon Pintar,

Saya ingin mengajukan permohonan penghapusan akun dan seluruh data terkait:

- Email Terdaftar: ${e}
- Nomor WhatsApp/Telepon: ${a}
- Alasan Penghapusan: ${i||"Tidak disebutkan"}
- Catatan Tambahan: ${o||"-"}

Saya mengonfirmasi bahwa saya memahami tindakan ini bersifat permanen dan data saya tidak dapat dipulihkan.

Terima kasih.`);window.location.href=`mailto:support@responpintar.com?subject=${k}&body=${y}`,m(!0)};return n.jsxs("section",{id:"request-form",className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8 scroll-mt-28",children:[n.jsxs("div",{className:"flex items-start gap-4 sm:gap-5",children:[n.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(xn,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]",children:"Formulir Pengajuan Penghapusan Akun"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Isi formulir di bawah ini dengan lengkap jika Anda ingin tim verifikasi kami memproses pembersihan akun dan seluruh saluran integrasi Anda."})]})]}),d?n.jsxs("div",{className:"bg-[#8FE3B0]/10 border border-[#8FE3B0]/30 rounded-2xl p-8 text-center space-y-4",children:[n.jsx(Ze,{className:"w-12 h-12 text-[#8FE3B0] mx-auto"}),n.jsx("h3",{className:"text-xl font-bold text-[#E9EBEF]",children:"Permintaan Berhasil Disiapkan"}),n.jsxs("p",{className:"text-sm sm:text-base text-[#AEB4BD] max-w-xl mx-auto leading-relaxed",children:["Aplikasi email Anda seharusnya terbuka dengan rincian permintaan terisi otomatis. Silakan klik ",n.jsx("strong",{className:"text-[#E9EBEF]",children:'"Kirim"'})," pada email Anda. Tim kami akan memverifikasi permohonan dalam waktu 1–3 hari kerja."]}),n.jsx("div",{className:"pt-2",children:n.jsx("button",{type:"button",onClick:()=>m(!1),className:"text-sm font-semibold text-[#8FE3B0] underline underline-offset-4 hover:opacity-80 transition cursor-pointer",children:"Kirim pengajuan lain"})})]}):n.jsxs("form",{onSubmit:h,className:"space-y-6 pt-2",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"email",className:"block text-sm font-semibold mb-2.5 text-[#E9EBEF]",children:["Alamat Email Terdaftar ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{id:"email",type:"email",required:!0,value:e,onChange:p=>t(p.target.value),placeholder:"nama@perusahaan.com",className:"w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] placeholder:text-[#636B76] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition"})]}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"phone",className:"block text-sm font-semibold mb-2.5 text-[#E9EBEF]",children:["Nomor WhatsApp / Telepon ",n.jsx("span",{className:"text-red-400",children:"*"})]}),n.jsx("input",{id:"phone",type:"tel",required:!0,value:a,onChange:p=>r(p.target.value),placeholder:"+62 812-xxxx-xxxx",className:"w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] placeholder:text-[#636B76] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition"})]})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"reason",className:"block text-sm font-semibold mb-2.5 text-[#E9EBEF]",children:"Alasan Penghapusan (Opsional)"}),n.jsxs("select",{id:"reason",value:i,onChange:p=>s(p.target.value),className:"w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition",children:[n.jsx("option",{value:"",className:"bg-[#16181D] text-[#AEB4BD]",children:"Pilih alasan penghapusan..."}),n.jsx("option",{value:"Tidak lagi membutuhkan layanan",className:"bg-[#16181D] text-[#E9EBEF]",children:"Tidak lagi membutuhkan layanan"}),n.jsx("option",{value:"Beralih ke platform lain",className:"bg-[#16181D] text-[#E9EBEF]",children:"Beralih ke platform lain"}),n.jsx("option",{value:"Bisnis sudah tidak beroperasi",className:"bg-[#16181D] text-[#E9EBEF]",children:"Bisnis sudah tidak beroperasi"}),n.jsx("option",{value:"Kekhawatiran privasi data",className:"bg-[#16181D] text-[#E9EBEF]",children:"Kekhawatiran privasi data"}),n.jsx("option",{value:"Kendala teknis / fitur",className:"bg-[#16181D] text-[#E9EBEF]",children:"Kendala teknis / fitur"}),n.jsx("option",{value:"Lainnya",className:"bg-[#16181D] text-[#E9EBEF]",children:"Lainnya"})]})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"notes",className:"block text-sm font-semibold mb-2.5 text-[#E9EBEF]",children:"Catatan Tambahan (Opsional)"}),n.jsx("textarea",{id:"notes",rows:4,value:o,onChange:p=>l(p.target.value),placeholder:"Tuliskan informasi atau pertanyaan tambahan untuk tim verifikasi kami...",className:"w-full px-4 py-3.5 rounded-xl border border-[rgba(244,245,247,0.12)] bg-[#16181D] text-[#E9EBEF] placeholder:text-[#636B76] text-sm focus:outline-none focus:border-[#8FE3B0]/60 transition resize-y"})]}),n.jsx("div",{className:"rounded-xl bg-[#16181D]/80 border border-[rgba(244,245,247,0.08)] p-5",children:n.jsxs("label",{className:"flex items-start gap-3.5 cursor-pointer select-none",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:p=>c(p.target.checked),required:!0,className:"w-5 h-5 mt-0.5 rounded border-[rgba(244,245,247,0.2)] bg-[#0B0C0E] text-[#8FE3B0] focus:ring-0 cursor-pointer flex-shrink-0"}),n.jsxs("span",{className:"text-xs sm:text-sm text-[#AEB4BD] leading-relaxed",children:["Saya menyatakan secara sadar bahwa saya adalah pemilik sah akun di atas dan memahami bahwa seluruh data, konfigurasi bot omnichannel, kontak, dan riwayat chat akan ",n.jsx("strong",{className:"text-[#E9EBEF]",children:"dihapus secara permanen"})," setelah masa tenggang berakhir serta tidak dapat dipulihkan kembali."]})]})}),n.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[n.jsxs("button",{type:"submit",disabled:!u,className:"inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-[0_4px_14px_rgba(220,38,38,0.3)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",children:[n.jsx(ka,{className:"w-4 h-4"}),n.jsx("span",{children:"Kirim Permintaan Hapus Akun"})]}),n.jsxs("span",{className:"text-xs sm:text-sm text-[#636B76] text-center sm:text-left",children:["Atau kirimkan email langsung ke"," ",n.jsx("a",{href:"mailto:support@responpintar.com",className:"text-[#8FE3B0] font-medium underline underline-offset-4 hover:opacity-80",children:"support@responpintar.com"})]})]})]})]})}const Vu=[{question:"Apakah akun yang sudah dihapus dapat dipulihkan kembali?",answer:"Akun yang diajukan untuk dihapus memiliki masa tenggang (grace period) selama 14 hari. Dalam kurun waktu tersebut, Anda dapat membatalkan proses penghapusan dengan cara login kembali ke dashboard Respon Pintar atau menghubungi tim support. Setelah 14 hari, seluruh data akun akan dihapus permanen dan tidak dapat dipulihkan kembali."},{question:"Berapa lama proses penghapusan data secara menyeluruh?",answer:"Penghapusan data dari sistem produksi aktif dilakukan tepat setelah masa tenggang 14 hari berakhir. Untuk salinan cadangan (encrypted backup archives), data akan terhapus dan ditimpa secara otomatis dalam kurun waktu 30 hingga 90 hari sesuai siklus retensi backup."},{question:"Apakah data kontak dan pelanggan saya juga ikut terhapus?",answer:"Ya. Seluruh data kontak pelanggan, riwayat percakapan (chat logs), tag kontak, dan variabel kustom saluran WhatsApp, Instagram, dan Telegram yang Anda simpan di Respon Pintar akan ikut terhapus secara permanen dari server kami."},{question:"Bagaimana dengan sisa masa aktif langganan atau kuota pesan saya?",answer:"Sesuai Ketentuan Layanan (Terms of Service), sisa masa aktif paket berlangganan atau kuota pesan yang belum terpakai akan otomatis hangus saat akun dihapus dan tidak dapat dikembalikan atau diuangkan (non-refundable)."},{question:"Apakah koneksi WhatsApp Business saya akan langsung terputus?",answer:"Ya. Sesi integrasi WhatsApp Cloud API / QR session akan langsung dinonaktifkan seketika proses penghapusan akun dimulai, sehingga sistem omnichannel tidak lagi menerima atau merespons pesan masuk dari pelanggan Anda."}];function qu(){const[e,t]=f.useState(null),a=r=>{t(e===r?null:r)};return n.jsxs("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-8",children:[n.jsxs("div",{className:"flex items-start gap-4 sm:gap-5",children:[n.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(244,245,247,0.12)] flex items-center justify-center flex-shrink-0 text-[#8FE3B0]",children:n.jsx(si,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#E9EBEF]",children:"Pertanyaan yang Sering Diajukan (FAQ)"}),n.jsx("p",{className:"text-[#AEB4BD] text-sm sm:text-base leading-relaxed",children:"Jawaban seputar kebijakan penghapusan akun, pemulihan data, dan retensi sistem di Respon Pintar."})]})]}),n.jsx("div",{className:"flex flex-col gap-3.5 pt-1",children:Vu.map((r,i)=>{const s=e===i;return n.jsxs("div",{className:"rounded-xl border border-[rgba(244,245,247,0.08)] bg-[#16181D]/60 hover:border-[rgba(244,245,247,0.16)] transition-all overflow-hidden",children:[n.jsxs("button",{type:"button",onClick:()=>a(i),className:"w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-[#E9EBEF] cursor-pointer gap-4",children:[n.jsx("span",{children:r.question}),s?n.jsx(oi,{className:"w-5 h-5 text-[#8FE3B0] flex-shrink-0"}):n.jsx(li,{className:"w-5 h-5 text-[#636B76] flex-shrink-0"})]}),s&&n.jsx("div",{className:"px-5 pb-5 pt-1 text-sm text-[#AEB4BD] leading-relaxed border-t border-[rgba(244,245,247,0.06)]",children:r.answer})]},i)})})]})}function Ku(){return n.jsx("section",{className:"bg-[#111214]/90 border border-[rgba(244,245,247,0.08)] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]",children:n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8",children:[n.jsxs("div",{className:"space-y-2",children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#E9EBEF]",children:"Butuh Bantuan Lebih Lanjut?"}),n.jsx("p",{className:"text-sm sm:text-base text-[#AEB4BD] max-w-lg leading-relaxed",children:"Jika Anda memiliki pertanyaan khusus mengenai perlindungan data pribadi atau menghadapi kendala saat proses pengajuan, tim dukungan kami siap membantu Anda."})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-3.5 flex-shrink-0",children:[n.jsxs("a",{href:"mailto:support@responpintar.com",className:"inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[rgba(244,245,247,0.2)] bg-transparent hover:bg-white/5 text-sm font-semibold text-[#E9EBEF] transition-all",children:[n.jsx(xn,{className:"w-4 h-4 text-[#8FE3B0]"}),n.jsx("span",{children:"support@responpintar.com"})]}),n.jsxs("a",{href:"https://wa.me/6282189885080?text=Halo%20Tim%20Respon%20Pintar,%20saya%20ingin%20bertanya%20mengenai%20penghapusan%20akun",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#E9EBEF] text-[#0B0C0E] border border-white hover:bg-white text-sm font-semibold transition-all shadow-sm",children:[n.jsx(Zn,{className:"w-4 h-4 text-[#0B0C0E]"}),n.jsx("span",{children:"WhatsApp Support"})]})]})]})})}function $u(){return f.useEffect(()=>{const e=document.title;return document.title="Hapus Akun & Data Pribadi | Respon Pintar (Omnichannel Platform)",()=>{document.title=e}},[]),n.jsxs("main",{className:"jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative overflow-hidden font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0] pt-36 sm:pt-44 pb-28 sm:pb-36 px-6 lg:px-16",children:[n.jsx(bn,{}),n.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto delete-account-container space-y-12 sm:space-y-16",children:[n.jsx(Lu,{}),n.jsx(Ou,{}),n.jsx(zu,{}),n.jsx(Wu,{}),n.jsx(Hu,{}),n.jsx(Uu,{}),n.jsx(qu,{}),n.jsx(Ku,{})]})]})}function Gu(){const[e,t]=f.useState("light");f.useEffect(()=>{const r=localStorage.getItem("theme");r?(t(r),document.documentElement.classList.toggle("dark",r==="dark")):(t("dark"),document.documentElement.classList.add("dark"))},[]);const a=()=>{const r=e==="light"?"dark":"light";t(r),document.documentElement.classList.toggle("dark",r==="dark"),localStorage.setItem("theme",r)};return n.jsx(Cr,{children:n.jsx(Ki,{children:n.jsxs("div",{className:"jamie-root min-h-screen bg-[#0B0C0E] text-[#E9EBEF] relative font-sans selection:bg-[#8FE3B0]/20 selection:text-[#8FE3B0]",children:[n.jsx($i,{theme:e,toggleTheme:a}),n.jsxs(Ar,{children:[n.jsx(me,{path:"/",element:n.jsx(rs,{})}),n.jsx(me,{path:"/privacy",element:n.jsx(is,{})}),n.jsx(me,{path:"/terms",element:n.jsx(ss,{})}),n.jsx(me,{path:"/about",element:n.jsx(os,{})}),n.jsx(me,{path:"/blog",element:n.jsx(cs,{})}),n.jsx(me,{path:"/blog/:slug",element:n.jsx(Pu,{})}),n.jsx(me,{path:"/demo",element:n.jsx(Tu,{})}),n.jsx(me,{path:"/delete-account",element:n.jsx($u,{})}),n.jsx(me,{path:"/tutorial/connected-whatsapp",element:n.jsx(Du,{})}),n.jsx(me,{path:"/tutorial/setup-workflow",element:n.jsx(Mu,{})})]}),n.jsx(Gi,{})]})})})}mi.createRoot(document.getElementById("root")).render(n.jsx(Gu,{}));
