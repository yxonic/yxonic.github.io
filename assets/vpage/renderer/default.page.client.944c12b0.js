import{G as u,H as T,I as w,J as R,K as L,L as O,M as P,N,O as x,P as I,Q as H,R as _,S as M,f as B,h as z}from"../../chunks/ded0b38f.js";const D="http://www.w3.org/2000/svg",l=typeof document<"u"?document:null,g=l&&l.createElement("template"),W={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?l.createElementNS(D,e):l.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const f=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{g.innerHTML=i?`<svg>${e}</svg>`:e;const c=g.content;if(i){const o=c.firstChild;for(;o.firstChild;)c.appendChild(o.firstChild);c.removeChild(o)}t.insertBefore(c,n)}return[f?f.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function q(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function $(e,t,n){const i=e.style,s=u(n);if(n&&!s){if(t&&!u(t))for(const r in t)n[r]==null&&m(i,r,"");for(const r in n)m(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function m(e,t,n){if(P(n))n.forEach(i=>m(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=j(e,t);h.test(n)?e.setProperty(N(i),n.replace(h,""),"important"):e[i]=n}}const S=["Webkit","Moz","ms"],a={};function j(e,t){const n=a[t];if(n)return n;let i=x(t);if(i!=="filter"&&i in e)return a[t]=i;i=I(i);for(let s=0;s<S.length;s++){const r=S[s]+i;if(r in e)return a[t]=r}return t}const b="http://www.w3.org/1999/xlink";function F(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(b,t.slice(6,t.length)):e.setAttributeNS(b,t,n);else{const r=H(t);n==null||r&&!_(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function J(e,t,n,i,s,r,f){if(t==="innerHTML"||t==="textContent"){i&&f(i,s,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const o=n??"";(e.value!==o||e.tagName==="OPTION")&&(e.value=o),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=_(n):n==null&&o==="string"?(n="",c=!0):o==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function K(e,t,n,i){e.addEventListener(t,n,i)}function Q(e,t,n,i){e.removeEventListener(t,n,i)}function U(e,t,n,i,s=null){const r=e._vei||(e._vei={}),f=r[t];if(i&&f)f.value=i;else{const[c,o]=X(t);if(i){const v=r[t]=Z(i,s);K(e,c,v,o)}else f&&(Q(e,c,f,o),r[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function X(e){let t;if(A.test(e)){t={};let i;for(;i=e.match(A);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):N(e.slice(2)),t]}let p=0;const G=Promise.resolve(),Y=()=>p||(G.then(()=>p=0),p=Date.now());function Z(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;M(V(i,n.value),t,5,[i])};return n.value=e,n.attached=Y(),n}function V(e,t){if(P(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const C=/^on[a-z]/,y=(e,t,n,i,s=!1,r,f,c,o)=>{t==="class"?q(e,i,s):t==="style"?$(e,n,i):R(t)?L(t)||U(e,t,n,i,f):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):k(e,t,i,s))?J(e,t,i,r,f,c,o):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),F(e,t,i,s))};function k(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&C.test(t)&&O(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||C.test(t)&&u(n)?!1:t in e}const tt=w({patchProp:y},W);let d,E=!1;function et(){return d=E?d:T(tt),E=!0,d}const nt=(...e)=>{const t=et().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=it(i);if(s)return n(s,!0,s instanceof SVGElement)},t};function it(e){return u(e)?document.querySelector(e):e}const st=Symbol();function rt(e,t){e.provide(st,t)}function ot(e){const{Page:t,pageProps:n}=e,i=B({render(){return z(t,n||{})}}),s=nt(i);return rt(s,e),s}function ft(e){ot(e).mount("#app")}export{ft as render};