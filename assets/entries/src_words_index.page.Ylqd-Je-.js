import{B as $,s as w,a as S,U as I,D as p,R as N,b as P}from"../chunks/chunk-m2EXufmb.js";import{w as d,x as l,X as s,V as f,T as h,A as u,O as E,P as H,Y as v,Z as m,R as K,y,z as g,_ as F,C as T,U as L}from"../chunks/chunk-zQavgIRI.js";import{v as U,T as R}from"../chunks/chunk-VmWf5zw0.js";var z={root:"p-card p-component",header:"p-card-header",body:"p-card-body",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},V=$.extend({name:"card",classes:z}),M={name:"BaseCard",extends:w,style:V},k={name:"Card",extends:M};function Z(e,t,n,a,o,r){return d(),l("div",s({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(d(),l("div",s({key:0,class:e.cx("header")},e.ptm("header")),[f(e.$slots,"header")],16)):h("",!0),u("div",s({class:e.cx("body")},e.ptm("body")),[e.$slots.title?(d(),l("div",s({key:0,class:e.cx("title")},e.ptm("title")),[f(e.$slots,"title")],16)):h("",!0),e.$slots.subtitle?(d(),l("div",s({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[f(e.$slots,"subtitle")],16)):h("",!0),u("div",s({class:e.cx("content")},e.ptm("content")),[f(e.$slots,"content")],16),e.$slots.footer?(d(),l("div",s({key:2,class:e.cx("footer")},e.ptm("footer")),[f(e.$slots,"footer")],16)):h("",!0)],16)],16)}k.render=Z;var D={name:"ChevronDownIcon",extends:S},q=u("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1),X=[q];function Y(e,t,n,a,o,r){return d(),l("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),X,16)}D.render=Y;var O={name:"ChevronRightIcon",extends:S},G=u("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),J=[G];function Q(e,t,n,a,o,r){return d(),l("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),J,16)}O.render=Q;var W=`
@layer primevue {
    .p-accordion-header-action {
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        position: relative;
        text-decoration: none;
    }
    
    .p-accordion-header-action:focus {
        z-index: 1;
    }
    
    .p-accordion-header-text {
        line-height: 1;
    }
}
`,ee={root:"p-accordion p-component",tab:{root:function(t){var n=t.instance,a=t.index;return["p-accordion-tab",{"p-accordion-tab-active":n.isTabActive(a)}]},header:function(t){var n=t.instance,a=t.tab,o=t.index;return["p-accordion-header",{"p-highlight":n.isTabActive(o),"p-disabled":n.getTabProp(a,"disabled")}]},headerAction:"p-accordion-header-link p-accordion-header-action",headerIcon:"p-accordion-toggle-icon",headerTitle:"p-accordion-header-text",toggleableContent:"p-toggleable-content",content:"p-accordion-content"}},te=$.extend({name:"accordion",css:W,classes:ee}),ne={name:"BaseAccordion",extends:w,props:{multiple:{type:Boolean,default:!1},activeIndex:{type:[Number,Array],default:null},lazy:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:te,provide:function(){return{$parentInstance:this}}},_={name:"Accordion",extends:ne,emits:["update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex}},watch:{"$attrs.id":function(t){this.id=t||I()},activeIndex:function(t){this.d_activeIndex=t}},mounted:function(){this.id=this.id||I()},methods:{isAccordionTab:function(t){return t.type.name==="AccordionTab"},isTabActive:function(t){return this.multiple?this.d_activeIndex&&this.d_activeIndex.includes(t):this.d_activeIndex===t},getTabProp:function(t,n){return t.props?t.props[n]:void 0},getKey:function(t,n){return this.getTabProp(t,"header")||n},getTabHeaderActionId:function(t){return"".concat(this.id,"_").concat(t,"_header_action")},getTabContentId:function(t){return"".concat(this.id,"_").concat(t,"_content")},getTabPT:function(t,n,a){var o=this.tabs.length,r={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:o,first:a===0,last:a===o-1,active:this.isTabActive(a)}};return s(this.ptm("tab.".concat(n),{tab:r}),this.ptm("accordiontab.".concat(n),{accordiontab:r}),this.ptm("accordiontab.".concat(n),r),this.ptmo(this.getTabProp(t,"pt"),n,r))},onTabClick:function(t,n,a){this.changeActiveIndex(t,n,a),this.$emit("tab-click",{originalEvent:t,index:a})},onTabKeyDown:function(t,n,a){switch(t.code){case"ArrowDown":this.onTabArrowDownKey(t);break;case"ArrowUp":this.onTabArrowUpKey(t);break;case"Home":this.onTabHomeKey(t);break;case"End":this.onTabEndKey(t);break;case"Enter":case"Space":this.onTabEnterKey(t,n,a);break}},onTabArrowDownKey:function(t){var n=this.findNextHeaderAction(t.target.parentElement.parentElement);n?this.changeFocusedTab(t,n):this.onTabHomeKey(t),t.preventDefault()},onTabArrowUpKey:function(t){var n=this.findPrevHeaderAction(t.target.parentElement.parentElement);n?this.changeFocusedTab(t,n):this.onTabEndKey(t),t.preventDefault()},onTabHomeKey:function(t){var n=this.findFirstHeaderAction();this.changeFocusedTab(t,n),t.preventDefault()},onTabEndKey:function(t){var n=this.findLastHeaderAction();this.changeFocusedTab(t,n),t.preventDefault()},onTabEnterKey:function(t,n,a){this.changeActiveIndex(t,n,a),t.preventDefault()},findNextHeaderAction:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.nextElementSibling,o=p.findSingle(a,'[data-pc-section="header"]');return o?p.getAttribute(o,"data-p-disabled")?this.findNextHeaderAction(o.parentElement):p.findSingle(o,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.previousElementSibling,o=p.findSingle(a,'[data-pc-section="header"]');return o?p.getAttribute(o,"data-p-disabled")?this.findPrevHeaderAction(o.parentElement):p.findSingle(o,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$el.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$el.lastElementChild,!0)},changeActiveIndex:function(t,n,a){if(!this.getTabProp(n,"disabled")){var o=this.isTabActive(a),r=o?"tab-close":"tab-open";this.multiple?o?this.d_activeIndex=this.d_activeIndex.filter(function(i){return i!==a}):this.d_activeIndex?this.d_activeIndex.push(a):this.d_activeIndex=[a]:this.d_activeIndex=this.d_activeIndex===a?null:a,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit(r,{originalEvent:t,index:a})}},changeFocusedTab:function(t,n){if(n&&(p.focus(n),this.selectOnFocus)){var a=parseInt(n.parentElement.parentElement.dataset.pcIndex,10),o=this.tabs[a];this.changeActiveIndex(t,o,a)}}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(n,a){return t.isAccordionTab(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(o){t.isAccordionTab(o)&&n.push(o)}),n},[])}},components:{ChevronDownIcon:D,ChevronRightIcon:O},directives:{ripple:N}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(a){ae(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ae(e,t,n){return t=re(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=ie(e,"string");return A(t)=="symbol"?t:String(t)}function ie(e,t){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(A(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oe=["data-pc-index","data-p-active"],ce=["data-p-highlight","data-p-disabled"],se=["id","tabindex","aria-disabled","aria-expanded","aria-controls","onClick","onKeydown"],de=["id","aria-labelledby"];function le(e,t,n,a,o,r){return d(),l("div",s({class:e.cx("root")},e.ptm("root")),[(d(!0),l(E,null,H(r.tabs,function(i,c){return d(),l("div",s({key:r.getKey(i,c),class:e.cx("tab.root",{tab:i,index:c})},r.getTabPT(i,"root",c),{"data-pc-name":"accordiontab","data-pc-index":c,"data-p-active":r.isTabActive(c)}),[u("div",s({style:r.getTabProp(i,"headerStyle"),class:[e.cx("tab.header",{tab:i,index:c}),r.getTabProp(i,"headerClass")]},b(b({},r.getTabProp(i,"headerProps")),r.getTabPT(i,"header",c)),{"data-p-highlight":r.isTabActive(c),"data-p-disabled":r.getTabProp(i,"disabled")}),[u("a",s({id:r.getTabHeaderActionId(c),class:e.cx("tab.headerAction"),tabindex:r.getTabProp(i,"disabled")?-1:e.tabindex,role:"button","aria-disabled":r.getTabProp(i,"disabled"),"aria-expanded":r.isTabActive(c),"aria-controls":r.getTabContentId(c),onClick:function(C){return r.onTabClick(C,i,c)},onKeydown:function(C){return r.onTabKeyDown(C,i,c)}},b(b({},r.getTabProp(i,"headeractionprops")),r.getTabPT(i,"headeraction",c))),[i.children&&i.children.headericon?(d(),v(m(i.children.headericon),{key:0,isTabActive:r.isTabActive(c),active:r.isTabActive(c),index:c},null,8,["isTabActive","active","index"])):r.isTabActive(c)?(d(),v(m(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),s({key:1,class:[e.cx("tab.headerIcon"),e.collapseIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",c)),null,16,["class"])):(d(),v(m(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronRightIcon"),s({key:2,class:[e.cx("tab.headerIcon"),e.expandIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",c)),null,16,["class"])),i.props&&i.props.header?(d(),l("span",s({key:3,class:e.cx("tab.headerTitle")},r.getTabPT(i,"headertitle",c)),K(i.props.header),17)):h("",!0),i.children&&i.children.header?(d(),v(m(i.children.header),{key:4})):h("",!0)],16,se)],16,ce),y(R,s({name:"p-toggleable-content"},r.getTabPT(i,"transition",c)),{default:g(function(){return[!e.lazy||r.isTabActive(c)?F((d(),l("div",s({key:0,id:r.getTabContentId(c),style:r.getTabProp(i,"contentStyle"),class:[e.cx("tab.toggleableContent"),r.getTabProp(i,"contentClass")],role:"region","aria-labelledby":r.getTabHeaderActionId(c)},b(b({},r.getTabProp(i,"contentProps")),r.getTabPT(i,"toggleablecontent",c))),[u("div",s({class:e.cx("tab.content")},r.getTabPT(i,"content",c)),[(d(),v(m(i)))],16)],16,de)),[[U,e.lazy?!0:r.isTabActive(c)]]):h("",!0)]}),_:2},1040)],16,oe)}),128))],16)}_.render=le;var ue={},pe={name:"BaseAccordionTab",extends:w,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:ue,provide:function(){return{$parentInstance:this}}},B={name:"AccordionTab",extends:pe};function he(e,t,n,a,o,r){return f(e.$slots,"default")}B.render=he;const be={class:"m-0"},fe={class:"flex justify-end"},ve=u("span",null,null,-1),ye={__name:"index.page",setup(e){const t=[{word:"cat",definition:"猫"},{word:"shark",definition:"鲨鱼"},{word:"elephant",definition:"大象"}];return(n,a)=>(d(),v(T(k),{class:"max-w-sm mx-auto"},{title:g(()=>[L("猫")]),content:g(()=>[y(T(_),null,{default:g(()=>[(d(),l(E,null,H(t,o=>y(T(B),{key:o.word,header:o.word},{default:g(()=>[u("p",be,K(o.definition),1)]),_:2},1032,["header"])),64))]),_:1})]),footer:g(()=>[u("div",fe,[ve,y(T(P),{label:"Skip",text:""}),y(T(P),{label:"Next",class:"ml-4"})])]),_:1}))}};export{ye as default};