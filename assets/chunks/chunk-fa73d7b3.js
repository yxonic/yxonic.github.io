import{B as x,C as I,D as L,u as $,E as B,G as P,H as _,I as p,J as y,K as W,d as R,o as M,c as O,b as j,L as k,n as S,M as H}from"./chunk-90a40ea9.js";function E(e){return B()?(P(e),!0):!1}function w(e){return typeof e=="function"?e():$(e)}const T=typeof window<"u"&&typeof document<"u",V=Object.prototype.toString,D=e=>V.call(e)==="[object Object]",K=()=>{};function G(e,t=!0){x()?I(e):t?e():L(e)}function v(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const h=T?window:void 0;function A(...e){let t,n,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,s]=e,t=h):[t,n,o,s]=e,!t)return K;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const c=[],i=()=>{c.forEach(u=>u()),c.length=0},a=(u,d,f,m)=>(u.addEventListener(d,f,m),()=>u.removeEventListener(d,f,m)),r=y(()=>[v(t),w(s)],([u,d])=>{if(i(),!u)return;const f=D(d)?{...d}:d;c.push(...n.flatMap(m=>o.map(z=>a(u,m,z,f))))},{immediate:!0,flush:"post"}),l=()=>{r(),i()};return E(l),l}function Q(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function oe(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:s=h,eventName:c="keydown",passive:i=!1,dedupe:a=!1}=o,r=Q(t);return A(s,c,u=>{u.repeat&&w(a)||r(u)&&n(u)},i)}function Y(){const e=p(!1);return x()&&I(()=>{e.value=!0}),e}function C(e){const t=Y();return _(()=>(t.value,!!e()))}function J(e,t={}){const{window:n=h}=t,o=C(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const c=p(!1),i=l=>{c.value=l.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",i):s.removeListener(i))},r=W(()=>{o.value&&(a(),s=n.matchMedia(w(e)),"addEventListener"in s?s.addEventListener("change",i):s.addListener(i),c.value=s.matches)});return E(()=>{r(),a(),s=void 0}),c}function U(e,t,n={}){const{window:o=h,...s}=n;let c;const i=C(()=>o&&"ResizeObserver"in o),a=()=>{c&&(c.disconnect(),c=void 0)},r=_(()=>Array.isArray(e)?e.map(d=>v(d)):[v(e)]),l=y(r,d=>{if(a(),i.value&&o){c=new ResizeObserver(t);for(const f of d)f&&c.observe(f,s)}},{immediate:!0,flush:"post",deep:!0}),u=()=>{a(),l()};return E(u),{isSupported:i,stop:u}}function q(e,t={width:0,height:0},n={}){const{window:o=h,box:s="content-box"}=n,c=_(()=>{var r,l;return(l=(r=v(e))==null?void 0:r.namespaceURI)==null?void 0:l.includes("svg")}),i=p(t.width),a=p(t.height);return U(e,([r])=>{const l=s==="border-box"?r.borderBoxSize:s==="content-box"?r.contentBoxSize:r.devicePixelContentBoxSize;if(o&&c.value){const u=v(e);if(u){const d=o.getComputedStyle(u);i.value=Number.parseFloat(d.width),a.value=Number.parseFloat(d.height)}}else if(l){const u=Array.isArray(l)?l:[l];i.value=u.reduce((d,{inlineSize:f})=>d+f,0),a.value=u.reduce((d,{blockSize:f})=>d+f,0)}else i.value=r.contentRect.width,a.value=r.contentRect.height},n),y(()=>v(e),r=>{i.value=r?t.width:0,a.value=r?t.height:0}),{width:i,height:a}}function ie(e={}){const{window:t=h,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:c=!0}=e,i=p(n),a=p(o),r=()=>{t&&(c?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};if(r(),G(r),A("resize",r,{passive:!0}),s){const l=J("(orientation: portrait)");y(l,()=>r())}return{width:i,height:a}}const b=1280,g=720,X=R({__name:"PageContainer",setup(e){const t=b/g,n=p(null),{width:o,height:s}=q(n),c=_(()=>o.value/s.value>t?s.value/g:o.value/b);return(i,a)=>(M(),O("div",{ref_key:"container",ref:n,class:S(i.$style["vslides-page-container"])},[j("div",{class:S(i.$style["vslides-page"]),style:H({width:`${b}px`,height:`${g}px`,transform:`translate(-50%, -50%) scale(${c.value})`})},[k(i.$slots,"default")],6)],2))}}),Z={"vslides-page-container":"_vslides-page-container_1io7s_2","vslides-page":"_vslides-page_1io7s_2"},N=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},F={$style:Z},re=N(X,[["__cssModules",F]]);const ee={},te={class:"vslides-end-page"};function ne(e,t){return M(),O("div",te,"END")}const ce=N(ee,[["render",ne]]);export{ce as E,re as P,N as _,oe as o,ie as u};
