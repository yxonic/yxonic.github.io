function A(e,t){let n;{var i=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=i}return n.stack=ge(n.stack,t),n}function ge(e,t){if(!e)return e;const n=pe(e);let i=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:i<t&&he(o)?(i++,!1):!0).join(`
`)}function he(e){return e.startsWith("    at ")}function pe(e){return e.split(/\r?\n/)}function k(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function L(e){return Array.from(new Set(e))}const m=k("assertPackageInstances.ts",{instances:[]}),X="Make sure your client-side code doesn't load",ee=`Server Routing and Client Routing both loaded. ${X} both at the same time.`,N=`vite-plugin-ssr loaded twice. ${X} vite-plugin-ssr twice (in order to reduce client size).`;function D(){{const e=L(m.instances);if(e.length>1){const t=`Multiple versions \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Make sure only one version is loaded.`;h(!1,t)}}m.checkSingleInstance&&m.instances.length>1&&h(!1,N)}function It(e){h(m.isClientRouting!==!0,ee),h(m.isClientRouting===void 0,N),m.isClientRouting=!1,e&&(m.checkSingleInstance=!0),D()}function kt(e){h(m.isClientRouting!==!1,ee),h(m.isClientRouting===void 0,N),m.isClientRouting=!0,e&&(m.checkSingleInstance=!0),D()}function me(e){m.instances.push(e),D()}const ve="0.4.93",R={projectName:"vite-plugin-ssr",projectVersion:ve,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"};me(R.projectVersion);const b=k("assert.ts",{alreadyLogged:new Set}),w=`[${R.npmPackageName}@${R.projectVersion}]`,ye=`${w}[Bug]`,Ee=`${w}[Wrong Usage]`,$e=`${w}[Warning]`,be=`${w}[Info]`,z=2;function r(e,t){var n;if(e)return;const i=(()=>{if(!t)return null;const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${R.projectName} maintainers; you can ignore this): ${o}`})(),s=A([`${ye} You stumbled upon a bug in ${R.projectName}'s source code.`,`Reach out at ${R.githubRepository}/issues/new or ${R.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${R.projectName} more robust.`,i].filter(Boolean).join(" "),z);throw(n=b.onBeforeLog)===null||n===void 0||n.call(b),s}function h(e,t){var n;if(e)return;const i=t.startsWith("[")?"":" ",s=`${Ee}${i}${t}`,o=A(s,z);throw(n=b.onBeforeLog)===null||n===void 0||n.call(b),o}function Re(e){const t=e.startsWith("[")?"":" ";return A(`${w}${t}${e}`,z)}function te(e,t,{onlyOnce:n,showStackTrace:i}){var s;if(e)return;const o=`${$e} ${t}`;if(n){const{alreadyLogged:a}=b,l=n===!0?o:n;if(a.has(l))return;a.add(l)}(s=b.onBeforeLog)===null||s===void 0||s.call(b),console.warn(i?new Error(o):o)}function Lt(e,t,{onlyOnce:n}){var i;if(e)return;const s=`${be} ${t}`;if(n){const{alreadyLogged:o}=b,a=s;if(o.has(a))return;o.add(a)}(i=b.onBeforeLog)===null||i===void 0||i.call(b),console.log(s)}const _e=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],ne=["vue","svelte","marko","md","mdx"],Pe=[..._e,...ne];function ie(e){const t=Pe.some(n=>e.endsWith("."+n));return r(!we(e)||t),t}function we(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Se(e){return ne.some(t=>e.endsWith("."+t))}function I(e,t,n){return typeof e=="string"?G(e.split(""),t,n).join(""):G(e,t,n)}function G(e,t,n){const i=[];let s=t>=0?t:e.length+t;r(s>=0&&s<=e.length);let o=n>=0?n:e.length+n;for(r(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const a=e[s];r(a!==void 0),i.push(a),s++}return i}function je(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function Ie(e,t){r(je(e),{url:e}),r(t.startsWith("/"),{url:e,baseServer:t});const[n,...i]=e.split("#");r(n!==void 0);const s=["",...i].join("#")||null;r(s===null||s.startsWith("#"));const o=s===null?"":O(s.slice(1)),[a,...l]=n.split("?");r(a!==void 0);const c=["",...l].join("?")||null;r(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},f={};Array.from(new URLSearchParams(c||"")).forEach(([y,U])=>{u[y]=U,f[y]=[...f[y]||[],U]});const{origin:d,pathnameResolved:$}=Le(a,t);r(d===null||d===O(d),{origin:d}),r($.startsWith("/"),{url:e,pathnameResolved:$}),r(d===null||e.startsWith(d),{url:e,origin:d});const p=a.slice((d||"").length);{const y=`${d||""}${p}${c||""}${s||""}`;r(e===y,{url:e,urlRecreated:y})}let{pathname:v,hasBaseServer:S}=Te($,t);return v=ke(v),r(v.startsWith("/")),{origin:d,pathname:v,pathnameOriginal:p,hasBaseServer:S,search:u,searchAll:f,searchOriginal:c,hash:o,hashOriginal:s}}function O(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function ke(e){return e.split("/").map(t=>O(t).split("/").join("%2F")).join("/")}function Le(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let i,s;try{const o=new URL(e);i=o.origin,s=o.pathname}catch{i=null;let a=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);a=a||"http://fake.example.org"+t,s=new URL(e,a).pathname}return r(s.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:s}),r(s===s.split("?")[0].split("#")[0]),{origin:i,pathnameResolved:s}}function Fe(e){r(e.startsWith("/")),r(!e.includes("?")),r(!e.includes("#"))}function Te(e,t){Fe(e),r(We(t));let n=e;if(r(n.startsWith("/")),r(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let i=t;return t.endsWith("/")&&n===I(t,0,-1)&&(i=I(t,0,-1),r(n===i)),n.startsWith(i)?(r(n.startsWith("/")||n.startsWith("http")),r(n.startsWith(i)),n=n.slice(i.length),n.startsWith("/")||(n="/"+n),r(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function We(e){return e.startsWith("/")}function V(e,t){Object.assign(e,t)}function F(e){return e instanceof Function||typeof e=="function"}function E(e){return typeof e=="object"&&e!==null}function Ft(e){return(t,n)=>{const i=e(t),s=e(n);return i===s?0:i>s?-1:1}}function Oe(e){return(t,n)=>{const i=e(t),s=e(n);if(r([!0,!1,null].includes(i)),r([!0,!1,null].includes(s)),i===s)return 0;if(i===!0||s===!1)return-1;if(s===!0||i===!1)return 1;r(!1)}}function Ce(e){return Oe(t=>{const n=e(t);return n===null?null:!n})}function xe(){return typeof window<"u"&&typeof window.scrollY=="number"}function g(e,t,n="unknown"){if(!E(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const i=e[t];return n==="array"?Array.isArray(i):n==="object"?E(i):n==="string[]"?Array.isArray(i)&&i.every(s=>typeof s=="string"):n==="function"?F(i):Array.isArray(n)?typeof i=="string"&&n.includes(i):n==="null"?i===null:n==="undefined"?i===void 0:n==="true"?i===!0:n==="false"?i===!1:typeof i===n}function Ae(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Ne=e=>e!=null,De="\\";function se(e){r(e&&!e.includes(De),`Wrongly formatted path: ${e}`)}const M=/[^a-zA-Z-_]/;function re(e){return ze(e)!==null}function ze(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[l,...c]=e.split("/");t=l,e=c.join("/"),r(t&&t.startsWith("@"))}if(e==="")return null;const[n,...i]=e.split("/"),s=n,o=i.length===0?null:i.join("/");return r(s),M.test(s)||t&&M.test(t.slice(1))?null:{npmPackageName:t?`${t}/${s}`:s,modulePath:o}}function Ve(e,t){{const n=Object.keys(e).filter(o=>o!=="default"),i=n.join(", "),s=n.length===1?"is":"are";h(n.length===0,`${t} has \`export { ${i} }\` which ${s} forbidden: ${t} should have a single \`export default\` instead`)}h(g(e,"default"),`${t} should have a \`export default\``)}function Be(e){return Object.entries(e)}const Ue=["clientRouting"];function Ge(e){Ue.forEach(t=>{if(r(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;h(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${n})`),h(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const oe=["render","clientRouting","prerender","doNotPrerender"];function Me(e,t){h(!oe.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function Tt(e,t,n){const i=e.configSources[t];if(!i||B(e,t))return null;const{configValue:s,configSrc:o}=i;return h(typeof s===n,`${o} has an invalid type \`${typeof s}\`: is should be a ${n} instead`),s}function Wt(e,t){const n=e.configSources[t];if(!n||B(e,t))return null;if(n.codeFilePath2!==null)return n.codeFilePath2;const{configValue:i,configSrc:s}=n;h(typeof i=="string",`${s} has an invalid type \`${typeof i}\`: it should be a \`string\` instead`),h(!1,`${s} has an invalid value \`${i}\`: it should be a file path instead`)}function He(e,t){const n=e.configSources[t];return!n||B(e,t)?null:n.configSrc}function B(e,t){const n=e.configSources[t];if(!n)return!0;const{codeFilePath2:i,configValue:s}=n;return i?!1:s==null}function Ye(e,t){const n=t.find(i=>i.pageId2===e);return r(t.length>0),r(n),n}function Je(e,t){const n={};if(e.forEach(o=>{qe(o).forEach(({exportName:l,exportValue:c,isFromDefaultExport:u})=>{var f;r(l!=="default"),n[l]=(f=n[l])!==null&&f!==void 0?f:[],n[l].push({exportValue:c,exportSource:`${o.filePath} > ${u?`\`export default { ${l} }\``:`\`export { ${l} }\``}`,filePath:o.filePath,_filePath:o.filePath,_fileType:o.fileType,_isFromDefaultExport:u})})}),t){const{configValues:o}=t;Be(o).forEach(([a,l])=>{var c;const u=a,f=He(t,a);r(f),n[u]=(c=n[u])!==null&&c!==void 0?c:[],n[u].push({exportValue:l,exportSource:f,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})})}const i=Ke(),s={};return Object.entries(n).forEach(([o,a])=>{a.forEach(({exportValue:l,_fileType:c,_isFromDefaultExport:u})=>{var f;s[o]=(f=s[o])!==null&&f!==void 0?f:l,c===".page"&&!u&&(o in i||(i[o]=l))})}),r(!("default"in s)),r(!("default"in n)),{exports:s,exportsAll:n,pageExports:i}}function qe(e){const{filePath:t,fileExports:n}=e;r(n),r(ie(t));const i=[];return Object.entries(n).sort(Ce(([s])=>s==="default")).forEach(([s,o])=>{let a=s==="default";if(a)if(Se(t))s="Page";else{h(E(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([l,c])=>{Me(l,t),i.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}i.push({exportName:s,exportValue:o,isFromDefaultExport:a})}),i.forEach(({exportName:s,isFromDefaultExport:o})=>{r(!(o&&oe.includes(s)))}),i}function Ke(){return new Proxy({},{get(...e){return xe()||te(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function Qe(e){const t=".page.",n=I(e.split(t),0,-1).join(t);return r(!n.includes("\\")),n}function P(e){se(e),r(e.startsWith("/")||re(e),{filePath:e})}function Ot(e,t){if(t.length>0){const i=t.filter(s=>s.isErrorPage);return i.length===0?null:(h(i.length===1,"Only one error page can be defined"),i[0].pageId2)}const n=L(e.map(({pageId:i})=>i).filter(i=>T(i)));if(h(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const i=n[0];return r(i),i}return null}function T(e,t){return r(!e.includes("\\")),e.includes("/_error")}function Ze(e,t){if(t.length>0){const n=t.find(i=>i.pageId2===e);return r(n),n.isErrorPage}else return T(e)}const Xe=[".page",".page.server",".page.route",".page.client",".css"];function et(e){if(se(e),e.endsWith(".css"))return r(re(e),e),".css";r(ie(e),e);const n=e.split("/").slice(-1)[0].split("."),i=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(r(i==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";r(!1,e)}function ae(e){const t=o=>s.pageId===o||s.isDefaultPageFile&&(H(s.filePath)||tt(o,s.filePath)),n=et(e),s={filePath:e,fileType:n,isEnv:o=>{if(r(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";r(!1)},isRelevant:t,isDefaultPageFile:C(e),isRendererPageFile:n!==".css"&&C(e)&&H(e),isErrorPageFile:T(e),pageId:Qe(e)};return s}function C(e){return P(e),T(e)?!1:e.includes("/_default")}function H(e){return P(e),e.includes("/renderer/")}function tt(e,t){P(e),P(t),r(!e.endsWith("/")),r(!t.endsWith("/")),r(C(t));const n=I(t.split("/"),0,-1).filter(i=>i!=="_default").join("/");return e.startsWith(n)}function nt(e){r(Array.isArray(e)||e===null),r(e!==null),e.forEach(t=>{r(E(t)),r(g(t,"pageId2","string")),r(g(t,"pageConfigFilePathAll","string[]")),r(g(t,"routeFilesystem","string")||g(t,"routeFilesystem","null")),r(g(t,"routeFilesystemDefinedBy","string")),r(g(t,"loadCodeFiles","function")),r(g(t,"isErrorPage","boolean")),r(g(t,"configSources","object")),le(t.configSources,!1)})}function it(e){le(e,!0)}function le(e,t){r(E(e)),Object.entries(e).forEach(([n,i])=>{if(r(E(i)||i===null),i===null){r(t);return}if(r(g(i,"configSrc","string")),r(g(i,"configFilePath2","string")||g(i,"configFilePath2","null")),r(g(i,"c_env","string")),r(g(i,"codeFilePath2","string")||g(i,"codeFilePath2","null")),t&&r(g(i,"configValue")),i.codeFilePath2){const{codeFilePath2:s}=i;if(n==="route"){r(g(i,"configValue"));const{configValue:o}=i,a=typeof o;h(a==="string"||F(o),`${s} has a default export with an invalid type '${a}': the default export should be a string or a function`)}}})}function st(e){r(g(e,"isGeneratedFile")),r(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),r(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),r(g(e,"pageFilesLazy","object")),r(g(e,"pageFilesEager","object")),r(g(e,"pageFilesExportNamesLazy","object")),r(g(e,"pageFilesExportNamesEager","object")),r(g(e.pageFilesLazy,".page")),r(g(e.pageFilesLazy,".page.client")||g(e.pageFilesLazy,".page.server")),r(g(e,"pageFilesList","string[]")),r(g(e,"invalidator","object")||g(e,"invalidator","null")),e.invalidator&&Object.keys(e.invalidator).forEach(o=>{const a=o.split("/").slice(-1)[0];r(a.startsWith("+"))}),r(g(e,"pageConfigs")),r(g(e,"pageConfigGlobal"));const{pageConfigs:t,pageConfigGlobal:n}=e;nt(t),it(n);const i={};j(e.pageFilesLazy).forEach(({filePath:o,pageFile:a,globValue:l})=>{var c;a=i[o]=(c=i[o])!==null&&c!==void 0?c:a;const u=l;Y(u),a.loadFile=async()=>{"fileExports"in a||(a.fileExports=await u(),Ge(a))}}),j(e.pageFilesExportNamesLazy).forEach(({filePath:o,pageFile:a,globValue:l})=>{var c;a=i[o]=(c=i[o])!==null&&c!==void 0?c:a;const u=l;Y(u),a.loadExportNames=async()=>{if(!("exportNames"in a)){const f=await u();h("exportNames"in f,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),r(g(f,"exportNames","string[]"),a.filePath),a.exportNames=f.exportNames}}}),j(e.pageFilesEager).forEach(({filePath:o,pageFile:a,globValue:l})=>{var c;a=i[o]=(c=i[o])!==null&&c!==void 0?c:a;const u=l;r(E(u)),a.fileExports=u}),j(e.pageFilesExportNamesEager).forEach(({filePath:o,pageFile:a,globValue:l})=>{var c;a=i[o]=(c=i[o])!==null&&c!==void 0?c:a;const u=l;r(E(u)),r(g(u,"exportNames","string[]"),a.filePath),a.exportNames=u.exportNames}),e.pageFilesList.forEach(o=>{var a;i[o]=(a=i[o])!==null&&a!==void 0?a:ae(o)});const s=Object.values(i);return s.forEach(({filePath:o})=>{r(!o.includes("\\"))}),{pageFiles:s,pageConfigs:t,pageConfigGlobal:n}}function j(e){const t=[];return Object.entries(e).forEach(([n,i])=>{r(Xe.includes(n)),r(E(i)),Object.entries(i).forEach(([s,o])=>{const a=ae(s);r(a.fileType===n),t.push({filePath:s,pageFile:a,globValue:o})})}),t}function Y(e){r(F(e))}const _=k("setPageFiles.ts",{});function Ct(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:i}=st(e);_.pageFilesAll=t,_.pageConfigs=n,_.pageConfigGlobal=i}async function xt(e,t){e?(r(!_.pageFilesGetter),r(t===void 0)):(r(_.pageFilesGetter),r(typeof t=="boolean"),(!_.pageFilesAll||!t)&&await _.pageFilesGetter());const{pageFilesAll:n,pageConfigs:i,pageConfigGlobal:s}=_;r(n&&i&&s);const o=rt(n,i);return{pageFilesAll:n,allPageIds:o,pageConfigs:i,pageConfigGlobal:s}}function rt(e,t){const n=e.filter(({isDefaultPageFile:o})=>!o).map(({pageId:o})=>o),i=L(n),s=t.map(o=>o.pageId2);return[...i,...s]}function ot(e,t){return ce(e,t,!0)}function At(e,t){return ce(e,t,!1)}function ce(e,t,n){const i=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(p=>p.isRelevant(t)&&p.fileType!==".page.route").sort(at(n,t)),o=p=>{const v=s.filter(y=>y.pageId===t&&y.isEnv(p?"CLIENT_AND_SERVER":i));h(v.length<=1,`Merge the following files into a single file: ${v.map(y=>y.filePath).join(" ")}`);const S=v[0];return r(S===void 0||!S.isDefaultPageFile),S},a=o(!1),l=o(!0),c=p=>s.filter(v=>v.isRendererPageFile&&v.isEnv(p?"CLIENT_AND_SERVER":i))[0],u=c(!1),f=c(!0),d=s.filter(p=>p.isDefaultPageFile&&!p.isRendererPageFile&&(p.isEnv(i)||p.isEnv("CLIENT_AND_SERVER")));return[a,l,...d,u,f].filter(Ne)}function at(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",i=-1,s=1,o=0;return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return i;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return s;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return i;if(!u&&c)return s;r(c===u)}{const c=J(t,a.filePath),u=J(t,l.filePath);if(c<u)return i;if(u<c)return s;r(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return i;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return s}return o}}function J(e,t){P(e),P(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const i=e.slice(n),s=t.slice(n),o=i.split("/").length,a=s.split("/").length;return o+a}const lt="modulepreload",ct=function(e){return"/"+e},q={},Nt=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=ct(o),o in q)return;q[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let f=s.length-1;f>=0;f--){const d=s[f];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":lt,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function Dt(e){const t=window.location.href,{origin:n,searchOriginal:i,hashOriginal:s,pathnameOriginal:o}=Ie(t,"/");let a;if(e!=null&&e.withoutHash){a=`${o}${i||""}`;const l=`${n||""}${a}${s||""}`;r(t===l,{url:t,urlRecreated:l})}else{a=`${o}${i||""}${s||""}`;const l=`${n||""}${a}`;r(t===l,{url:t,urlRecreated:l})}return a}function K(e){const t=e/1e3;if(t<120){const n=Q(t);return`${n} second${Z(n)}`}{const n=t/60,i=Q(n);return`${i} minute${Z(i)}`}}function Q(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function Z(e){return e==="1"?"":"s"}function ut(e,t,n){const{timeoutErr:i,timeoutWarn:s}=ft(t);let o,a;const l=new Promise((d,$)=>{o=p=>{c(),d(p)},a=p=>{c(),$(p)}}),c=()=>{clearTimeout(u),clearTimeout(f)},u=setTimeout(()=>{const d=`${w}[Warning] The ${t}() hook defined by ${n} is taking more than ${K(s)}`;console.warn(d)},s),f=setTimeout(()=>{const d=Re(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${K(i)}`);a(d)},i);return(async()=>{try{const d=await e();o(d)}catch(d){a(d)}})(),l}function ft(e){let t=4e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=10*60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}const dt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],i=t[2];return new RegExp(n,i)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function ue(e){const t=JSON.parse(e);return fe(t)}function fe(e){return typeof e=="string"?gt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=fe(n)}),e)}function gt(e){for(const{match:t,deserialize:n}of dt)if(t(e))return n(e,ue);return e}function zt(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;r(t);const n=ue(t);r(g(n,"pageContext","object"));const{pageContext:i}=n;return r(g(i,"_pageId","string")),V(i,{_pageContextRetrievedFromServer:{...i},_comesDirectlyFromServer:!0}),i}function x(e,t){if(!(t in e.exports))return null;const n=e.exports[t],i=e.exportsAll[t][0];r(i.exportValue===n);const s=i.exportSource;return r(s),r(!t.endsWith(")")),h(F(n),`hook ${t}() defined by ${s} should be a function`),{hook:n,hookSrc:s}}function Vt(e,t){x(e,t)}function ht(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[i])=>Ae(n,i)).forEach(([n,i])=>{e[n]=i})}function pt(e){mt(e),vt(e)}function mt(e){Ze(e._pageId,e._pageConfigs)&&r(g(e,"is404","boolean"))}function vt(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!E(t)){te(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const W=k("releasePageContext.ts",{});function yt(e,t){if(t){const s=e;r([!0,!1].includes(s.isHydration)),r([!0,!1,null].includes(s.isBackwardNavigation))}else{const s=e;r(s.isHydration===!0),r(s.isBackwardNavigation===null)}r("exports"in e),r("exportsAll"in e),r("pageExports"in e),r(E(e.pageExports));const n=e.exports.Page;V(e,{Page:n}),_t(e),ht(e),r([!0,!1].includes(e._comesDirectlyFromServer));const i=e._comesDirectlyFromServer?bt(e):e;return pt(e),i}const Et=["then","toJSON"],$t=["_pageId"];function bt(e){return new Proxy(e,{get:n});function t(i){return!(i in e||Et.includes(i)||typeof i=="symbol"||typeof i!="string"||i.startsWith("__v_"))}function n(i,s){return W.disableAssertPassToClient!==s&&Rt(e._pageContextRetrievedFromServer,s,t(s)),W.disableAssertPassToClient=s,window.setTimeout(()=>{W.disableAssertPassToClient=void 0},0),e[s]}}function Rt(e,t,n){if(!n||e===null)return;const i=Object.keys(e).filter(s=>!$t.includes(s));h(!1,[`pageContext.${t} isn't available in the browser.`,`Make sure to add '${t}' to passToClient`,`(passToClient is [${i.map(s=>`'${s}'`).join(", ")}]),`,"see https://vite-plugin-ssr.com/passToClient"].join(" "))}function _t(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function Pt(e,t){var n;const i=e.filter(o=>o.pageId2===t);return r(i.length<=1),(n=i[0])!==null&&n!==void 0?n:null}async function wt(e,t){const n={};return!t&&"configValues"in e||((await e.loadCodeFiles()).forEach(({configName:s,codeFilePath3:o,codeFileExports:a})=>{s!=="clientEntry"&&Ve(a,o),r(!(s in n)),n[s]=a.default}),Object.entries(e.configSources).map(([s,o])=>{o.codeFilePath2||(r(!(s in n)),n[s]=o.configValue)}),V(e,{configValues:n})),e}const de="__whileFetchingAssets";async function Bt(e,t,n){const i=ot(e,n),s=Pt(t,n);let o;try{o=(await Promise.all([s&&wt(s,!1),...i.map(d=>{var $;return($=d.loadFile)===null||$===void 0?void 0:$.call(d)})]))[0]}catch(f){throw f&&Object.assign(f,{[de]:!0}),f}const{exports:a,exportsAll:l,pageExports:c}=Je(i,o);return{exports:a,exportsAll:l,pageExports:c,_pageFilesLoaded:i}}function Ut(e){return e?e[de]===!0:!1}async function Gt(e,t){const n=yt(e,t);let i=null,s;i=x(e,"render"),s="render";{const l=x(e,"onRenderClient");l&&(i=l,s="onClientRender")}if(!i){const l=St(e);if(e._pageConfigs.length>0)jt(e._pageId,e._pageConfigs,l);else{const c=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+l:u="One of the following files should export a `render()` hook: "+c.map(f=>f.filePath).join(" "),h(!1,u)}}r(i);const o=i.hook;r(s);const a=await ut(()=>o(n),"render",i.hookSrc);h(a===void 0,`The ${s}() hook defined by ${i.hookSrc} isn't allowed to return a value`)}function St(e){let t;try{t=e.urlOriginal}catch{}return t=t??window.location.href,t}function jt(e,t,n){var i,s;const o=Ye(e,t);r(!(!((i=o.configSources.onRenderClient)===null||i===void 0)&&i.configValue)),r(((s=o.configSources.clientRouting)===null||s===void 0?void 0:s.configValue)===!0);const a=[];let l=[];t.forEach(f=>{l.push(...f.pageConfigFilePathAll);const d=f.configSources.onRenderClient;d&&d.configValue&&a.push(d.configSrc)}),l=L(l);const c="- ",u=`No onRenderClient() hook found for URL \`${n}\`. (A onRenderClient() hook is required when using Client Routing: the config \`clientRouting\` is \`true\` for the URL \`${n}\`.)`;if(a.length===0)h(!1,[`${u} No onRenderClient() hook is defined by any of your page config files. Your page config files (which none of them defines \`onClientRender()\`):`,...l.map(f=>c+f)].join(`
`));else{const f=a.length>=2;h(!1,[`${u} Note that onRenderClient() is defined at:`,...a.map(d=>`${c}${d}`),`but ${f?"none of them":"it doesn't"} apply to the URL \`${n}\`.`].join(`
`))}}export{xt as A,We as B,ot as C,Tt as D,Pt as E,je as F,Lt as G,Ut as H,Vt as I,Gt as J,kt as K,It as L,Nt as _,r as a,T as b,h as c,g as d,te as e,E as f,Ct as g,Ft as h,F as i,k as j,Dt as k,At as l,Oe as m,zt as n,V as o,Ie as p,Bt as q,Ot as r,I as s,x as t,yt as u,ut as v,Ye as w,Wt as x,ue as y,Re as z};
