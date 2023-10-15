import{i as a,l as N,a as T,b as M,c as H,d,e as B,f as q,g as z,j as D,k as W,m as O,n as U,o as $,p as j,q as R,r as F}from"./chunk-b403f1cd.js";const V="http://www.w3.org/2000/svg",u=typeof document<"u"?document:null,S=u&&u.createElement("template"),X={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?u.createElementNS(V,t):u.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>u.createTextNode(t),createComment:t=>u.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>u.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const c=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{S.innerHTML=i?`<svg>${t}</svg>`:t;const r=S.content;if(i){const f=r.firstChild;for(;f.firstChild;)r.appendChild(f.firstChild);r.removeChild(f)}e.insertBefore(r,n)}return[c?c.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function J(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function K(t,e,n){const i=t.style,s=d(n);if(n&&!s){if(e&&!d(e))for(const o in e)n[o]==null&&g(i,o,"");for(const o in n)g(i,o,n[o])}else{const o=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=o)}}const A=/\s*!important$/;function g(t,e,n){if(a(n))n.forEach(i=>g(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Q(t,e);A.test(n)?t.setProperty(O(i),n.replace(A,""),"important"):t[i]=n}}const C=["Webkit","Moz","ms"],p={};function Q(t,e){const n=p[e];if(n)return n;let i=U(e);if(i!=="filter"&&i in t)return p[e]=i;i=$(i);for(let s=0;s<C.length;s++){const o=C[s]+i;if(o in t)return p[e]=o}return e}const _="http://www.w3.org/1999/xlink";function Y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_,e.slice(6,e.length)):t.setAttributeNS(_,e,n);else{const o=j(e);n==null||o&&!R(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Z(t,e,n,i,s,o,c){if(e==="innerHTML"||e==="textContent"){i&&c(i,s,o),t[e]=n??"";return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){t._value=n;const l=r==="OPTION"?t.getAttribute("value"):t.value,b=n??"";l!==b&&(t.value=b),n==null&&t.removeAttribute(e);return}let f=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=R(n):n==null&&l==="string"?(n="",f=!0):l==="number"&&(n=0,f=!0)}try{t[e]=n}catch{}f&&t.removeAttribute(e)}function I(t,e,n,i){t.addEventListener(e,n,i)}function G(t,e,n,i){t.removeEventListener(e,n,i)}function y(t,e,n,i,s=null){const o=t._vei||(t._vei={}),c=o[e];if(i&&c)c.value=i;else{const[r,f]=k(e);if(i){const l=o[e]=nt(i,s);I(t,r,l,f)}else c&&(G(t,r,c,f),o[e]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function k(t){let e;if(E.test(t)){e={};let i;for(;i=t.match(E);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):O(t.slice(2)),e]}let m=0;const tt=Promise.resolve(),et=()=>m||(tt.then(()=>m=0),m=Date.now());function nt(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;F(it(i,n.value),e,5,[i])};return n.value=t,n.attached=et(),n}function it(t,e){if(a(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const v=/^on[a-z]/,st=(t,e,n,i,s=!1,o,c,r,f)=>{e==="class"?J(t,i,s):e==="style"?K(t,n,i):z(e)?D(e)||y(t,e,n,i,c):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ot(t,e,i,s))?Z(t,e,i,o,c,r,f):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Y(t,e,i,s))};function ot(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&v.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||v.test(e)&&d(n)?!1:e in t}const P=t=>{const e=t.props["onUpdate:modelValue"]||!1;return a(e)?n=>H(e,n):e},at={deep:!0,created(t,e,n){t._assign=P(n),I(t,"change",()=>{const i=t._modelValue,s=rt(t),o=t.checked,c=t._assign;if(a(i)){const r=N(i,s),f=r!==-1;if(o&&!f)c(i.concat(s));else if(!o&&f){const l=[...i];l.splice(r,1),c(l)}}else if(T(i)){const r=new Set(i);o?r.add(s):r.delete(s),c(r)}else c(L(t,o))})},mounted:w,beforeUpdate(t,e,n){t._assign=P(n),w(t,e,n)}};function w(t,{value:e,oldValue:n},i){t._modelValue=e,a(e)?t.checked=N(e,i.props.value)>-1:T(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=M(e,L(t,!0)))}function rt(t){return"_value"in t?t._value:t.value}function L(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ct=q({patchProp:st},X);let h,x=!1;function ft(){return h=x?h:B(ct),x=!0,h}const dt=(...t)=>{const e=ft().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=lt(i);if(s)return n(s,!0,s instanceof SVGElement)},e};function lt(t){return d(t)?document.querySelector(t):t}export{dt as c,at as v};
