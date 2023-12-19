import{i as A,l as rt,a as at,b as bt,c as At,d as I,e as Et,h as Tt,B as _t,f as B,g as Nt,j as Lt,t as It,k as Ot,m as wt,n as Dt,o as ct,p as Pt,q as Mt,r as $t,s as ft,u as xt}from"./chunk-zQavgIRI.js";const Bt="http://www.w3.org/2000/svg",b=typeof document<"u"?document:null,K=b&&b.createElement("template"),Rt={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const o=e?b.createElementNS(Bt,t):b.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>b.createTextNode(t),createComment:t=>b.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>b.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,o,r){const a=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{K.innerHTML=s?`<svg>${t}</svg>`:t;const c=K.content;if(s){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},g="transition",_="animation",L=Symbol("_vtc"),lt=(t,{slots:e})=>Tt(_t,Ft(t),e);lt.displayName="Transition";const ut={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};lt.props=B({},Nt,ut);const S=(t,e=[])=>{A(t)?t.forEach(n=>n(...e)):t&&t(...e)},W=t=>t?A(t)?t.some(e=>e.length>1):t.length>1:!1;function Ft(t){const e={};for(const i in t)i in ut||(e[i]=t[i]);if(t.css===!1)return e;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:f=r,appearActiveClass:l=a,appearToClass:u=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,T=Ht(o),mt=T&&T[0],gt=T&&T[1],{onBeforeEnter:F,onEnter:H,onEnterCancelled:V,onLeave:q,onLeaveCancelled:ht,onBeforeAppear:Ct=F,onAppear:St=H,onAppearCancelled:vt=V}=e,O=(i,d,C)=>{v(i,d?u:c),v(i,d?l:a),C&&C()},y=(i,d)=>{i._isLeaving=!1,v(i,p),v(i,E),v(i,m),d&&d()},z=i=>(d,C)=>{const U=i?St:H,j=()=>O(d,i,C);S(U,[d,j]),X(()=>{v(d,i?f:r),h(d,i?u:c),W(U)||G(d,s,mt,j)})};return B(e,{onBeforeEnter(i){S(F,[i]),h(i,r),h(i,a)},onBeforeAppear(i){S(Ct,[i]),h(i,f),h(i,l)},onEnter:z(!1),onAppear:z(!0),onLeave(i,d){i._isLeaving=!0;const C=()=>y(i,d);h(i,p),yt(),h(i,m),X(()=>{i._isLeaving&&(v(i,p),h(i,E),W(q)||G(i,s,gt,C))}),S(q,[i,C])},onEnterCancelled(i){O(i,!1),S(V,[i])},onAppearCancelled(i){O(i,!0),S(vt,[i])},onLeaveCancelled(i){y(i),S(ht,[i])}})}function Ht(t){if(t==null)return null;if(Lt(t))return[w(t.enter),w(t.leave)];{const e=w(t);return[e,e]}}function w(t){return It(t)}function h(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[L]||(t[L]=new Set)).add(e)}function v(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[L];n&&(n.delete(e),n.size||(t[L]=void 0))}function X(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Vt=0;function G(t,e,n,s){const o=t._endId=++Vt,r=()=>{o===t._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:c,propCount:f}=qt(t,e);if(!a)return s();const l=a+"end";let u=0;const p=()=>{t.removeEventListener(l,m),r()},m=E=>{E.target===t&&++u>=f&&p()};setTimeout(()=>{u<f&&p()},c+1),t.addEventListener(l,m)}function qt(t,e){const n=window.getComputedStyle(t),s=T=>(n[T]||"").split(", "),o=s(`${g}Delay`),r=s(`${g}Duration`),a=J(o,r),c=s(`${_}Delay`),f=s(`${_}Duration`),l=J(c,f);let u=null,p=0,m=0;e===g?a>0&&(u=g,p=a,m=r.length):e===_?l>0&&(u=_,p=l,m=f.length):(p=Math.max(a,l),u=p>0?a>l?g:_:null,m=u?u===g?r.length:f.length:0);const E=u===g&&/\b(transform|all)(,|$)/.test(s(`${g}Property`).toString());return{type:u,timeout:p,propCount:m,hasTransform:E}}function J(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Q(n)+Q(t[s])))}function Q(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yt(){return document.body.offsetHeight}function zt(t,e,n){const s=t[L];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const R=Symbol("_vod"),ce={beforeMount(t,{value:e},{transition:n}){t[R]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):N(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),N(t,!0),s.enter(t)):s.leave(t,()=>{N(t,!1)}):N(t,e))},beforeUnmount(t,{value:e}){N(t,e)}};function N(t,e){t.style.display=e?t[R]:"none"}const Ut=Symbol("");function jt(t,e,n){const s=t.style,o=I(n);if(n&&!o){if(e&&!I(e))for(const r in e)n[r]==null&&x(s,r,"");for(const r in n)x(s,r,n[r])}else{const r=s.display;if(o){if(e!==n){const a=s[Ut];a&&(n+=";"+a),s.cssText=n}}else e&&t.removeAttribute("style");R in t&&(s.display=r)}}const Y=/\s*!important$/;function x(t,e,n){if(A(n))n.forEach(s=>x(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Kt(t,e);Y.test(n)?t.setProperty(ct(s),n.replace(Y,""),"important"):t[s]=n}}const Z=["Webkit","Moz","ms"],D={};function Kt(t,e){const n=D[e];if(n)return n;let s=Pt(e);if(s!=="filter"&&s in t)return D[e]=s;s=Mt(s);for(let o=0;o<Z.length;o++){const r=Z[o]+s;if(r in t)return D[e]=r}return e}const k="http://www.w3.org/1999/xlink";function Wt(t,e,n,s,o){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(k,e.slice(6,e.length)):t.setAttributeNS(k,e,n);else{const r=$t(e);n==null||r&&!ft(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Xt(t,e,n,s,o,r,a){if(e==="innerHTML"||e==="textContent"){s&&a(s,o,r),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let f=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ft(n):n==null&&l==="string"?(n="",f=!0):l==="number"&&(n=0,f=!0)}try{t[e]=n}catch{}f&&t.removeAttribute(e)}function dt(t,e,n,s){t.addEventListener(e,n,s)}function Gt(t,e,n,s){t.removeEventListener(e,n,s)}const tt=Symbol("_vei");function Jt(t,e,n,s,o=null){const r=t[tt]||(t[tt]={}),a=r[e];if(s&&a)a.value=s;else{const[c,f]=Qt(e);if(s){const l=r[e]=kt(s,o);dt(t,c,l,f)}else a&&(Gt(t,c,a,f),r[e]=void 0)}}const et=/(?:Once|Passive|Capture)$/;function Qt(t){let e;if(et.test(t)){e={};let s;for(;s=t.match(et);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ct(t.slice(2)),e]}let P=0;const Yt=Promise.resolve(),Zt=()=>P||(Yt.then(()=>P=0),P=Date.now());function kt(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;xt(te(s,n.value),e,5,[s])};return n.value=t,n.attached=Zt(),n}function te(t,e){if(A(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const nt=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ee=(t,e,n,s,o=!1,r,a,c,f)=>{e==="class"?zt(t,s,o):e==="style"?jt(t,n,s):Ot(e)?wt(e)||Jt(t,e,n,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ne(t,e,s,o))?Xt(t,e,s,r,a,c,f):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wt(t,e,s,o))};function ne(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&nt(e)&&Dt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return nt(e)&&I(n)?!1:e in t}const st=t=>{const e=t.props["onUpdate:modelValue"]||!1;return A(e)?n=>At(e,n):e},M=Symbol("_assign"),fe={deep:!0,created(t,e,n){t[M]=st(n),dt(t,"change",()=>{const s=t._modelValue,o=se(t),r=t.checked,a=t[M];if(A(s)){const c=rt(s,o),f=c!==-1;if(r&&!f)a(s.concat(o));else if(!r&&f){const l=[...s];l.splice(c,1),a(l)}}else if(at(s)){const c=new Set(s);r?c.add(o):c.delete(o),a(c)}else a(pt(t,r))})},mounted:ot,beforeUpdate(t,e,n){t[M]=st(n),ot(t,e,n)}};function ot(t,{value:e,oldValue:n},s){t._modelValue=e,A(e)?t.checked=rt(e,s.props.value)>-1:at(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=bt(e,pt(t,!0)))}function se(t){return"_value"in t?t._value:t.value}function pt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const oe=B({patchProp:ee},Rt);let $,it=!1;function ie(){return $=it?$:Et(oe),it=!0,$}const le=(...t)=>{const e=ie().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=re(s);if(o)return n(o,!0,o instanceof SVGElement)},e};function re(t){return I(t)?document.querySelector(t):t}export{lt as T,fe as a,le as c,ce as v};
