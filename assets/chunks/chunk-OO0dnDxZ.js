import{u}from"./chunk-9rAokE7f.js";import{v,F as m,M as f,w as l,x as i,A as g,V as h,S as c,W as $}from"./chunk-zQavgIRI.js";import{_ as d}from"./chunk-x3n3nnut.js";const s=1280,a=720,y=v({__name:"PageContainer",setup(_){const t=s/a,n=m(null),{width:o,height:r}=u(n),p=f(()=>o.value/r.value>t?r.value/a:o.value/s);return(e,k)=>(l(),i("div",{ref_key:"container",ref:n,class:c(e.$style["vslides-page-container"])},[g("div",{class:c(e.$style["vslides-page"]),style:$({width:`${s}px`,height:`${a}px`,transform:`translate(-50%, -50%) scale(${p.value})`})},[h(e.$slots,"default")],6)],2))}}),E={"vslides-page-container":"_vslides-page-container_1io7s_2","vslides-page":"_vslides-page_1io7s_2"},x={$style:E},M=d(y,[["__cssModules",x]]),C={},P={class:"vslides-end-page"};function S(_,t){return l(),i("div",P,"END")}const N=d(C,[["render",S]]);export{N as E,M as P};