import{t as i,_ as s}from"../chunks/chunk-4160ade9.js";import{h as e}from"../chunks/chunk-55bbd34f.js";const r={title:"WWW '23 Tracing Knowledge Instead of Patterns",theme:"./theme/basic",layout:"cover"},n=[];n.push({component:()=>e("div",{},[e("div",{class:"text-left"},[`
`,e("h1",{},["Tracing Knowledge Instead of Patterns: Stable Knowledge Tracing with Diagnostic Transformer"]),`
`,e("p",{},["Yu Yin*, Le Dai*, Zhenya Huang, Shuanghong Shen, Fei Wang, Qi Liu, Enhong Chen, Xin Li"]),`
`]),`
`,e("div",{class:"absolute top-6 left-12 grid items-center grid-cols-3"},[`
  `,e("img",{src:"https://www2023.thewebconf.org/www-logo2.svg",alt:"www2023",class:"h-14 p-2 bg-[#5d457bb3]"},[]),`
  `,e("img",{src:"/imgs/www23/ustc-logo.jpg",alt:"ustc logo",class:"h-12 ml-24"},[]),`
  `,e("img",{src:"/imgs/www23/iflytek-logo.jpg",alt:"iflytek logo",class:"ml-16 h-20"},[]),`
`]),`
`,e("div",{class:"absolute bottom-8 left-12"},[`
  The ACM Web Conference 2023, Austin, TX, USA
`])]),config:{title:"WWW '23 Tracing Knowledge Instead of Patterns",theme:"./theme/basic",layout:"cover"}});n.push({component:()=>e("div",{},[e("h1",{},["Outline"]),`
`,e("ul",{},[`
`,e("li",{},["Introduction"]),`
`,e("li",{},[`DTransformer
`,e("ul",{},[`
`,e("li",{},["the architecture"]),`
`,e("li",{},["the training process"]),`
`,e("li",{},["inference and tracing"]),`
`]),`
`]),`
`,e("li",{},["Experiments"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["What is Knowledge Tracing?"]),`
`,e("ul",{},[`
`,e("li",{},["Online learning systems have become more and more popular"]),`
`,e("li",{},[`It is important for a student to:
`,e("ul",{},[`
`,e("li",{},["understand how well they master each knowledge concepts"]),`
`,e("li",{},["trace the evolution of knowledge mastery"]),`
`]),`
`]),`
`,e("li",{},[`Crucial for building a personalized learning experience:
`,e("ul",{},[`
`,e("li",{},["provide detailed diagnosis other than a total score"]),`
`,e("li",{},["tell a student how fast they improve"]),`
`,e("li",{},["recommend exercises for a student based on their shortcomings"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["What is Knowledge Tracing?"]),`
`,e("ul",{},[`
`,e("li",{},[e("em",{},["Knowledge Tracing (KT)"]),`
`,e("ul",{},[`
`,e("li",{},[e("strong",{},["goal"]),": to trace the mastery of knowledge according to previous exercising records"]),`
`,e("li",{},["after every exercise, produce a diagnosis on every knowledge concepts"]),`
`]),`
`]),`
`]),`
`,e("div",{class:"mt-12 grid place-items-center grid-cols-1"},[`
  `,e("img",{src:"/imgs/www23/kt.jpg",alt:"KT",class:"h-48"},[]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["How is Knowledge Tracing done?"]),`
`,e("ul",{},[`
`,e("li",{},[`Knowledge mastery has no GT
`,e("ul",{},[`
`,e("li",{},["assumption: if a model traces knowledge mastery better, it should be able to more accurately predict whether a student answers the next question correctly"]),`
`,e("li",{},[e("em",{},["knowlege tracing"])," ",e("span",{class:"math math-inline"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",{},[e("mrow",{},[e("mo",{},["→"])]),e("annotation",{encoding:"application/x-tex"},["\\to"])])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:"height:0.3669em;"},[]),e("span",{class:"mrel"},["→"])])])])])," ",e("em",{},["next performance prediction"])]),`
`]),`
`]),`
`,e("li",{},[`Two problems:
`,e("ul",{},[`
`,e("li",{},["generating explicit knowledge mastery diagnosis is non-trivial"]),`
`,e("li",{},["more sensitive to response patterns in the exercising history"]),`
`]),`
`]),`
`,e("li",{},["What can we do about them?"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["A new paradigm"]),`
`,e("div",{class:"mt-16 grid grid-cols-2 place-items-center text-center"},[`
  `,e("div",{class:"grid gap-2 place-items-center"},[`
    `,e("div",{class:"border px-2"},["exercising history"]),`
    `,e("div",{class:"flex items-center"},[e("span",{class:"ml-11 text-3xl"},["↓"]),e("span",{},["predict"])]),`
    `,e("div",{class:"border w-36 px-2"},["next performance prediction"]),`
  `]),`
  `,e("div",{class:"grid gap-2 place-items-center"},[`
    `,e("div",{class:"border px-2"},["exercising history"]),`
    `,e("div",{class:"flex items-center"},[e("span",{class:"ml-11 text-3xl"},["↓"]),e("span",{},["diagnose"])]),`
    `,e("div",{class:"border px-2"},["knowlege states"]),`
    `,e("div",{class:"flex gap-2"},[`
      `,e("div",{class:"flex items-center"},[e("span",{},["read-out"]),e("span",{class:"text-3xl"},["↓"])]),`
      `,e("div",{class:"flex items-center"},[e("span",{class:"ml-11 text-3xl"},["↓"]),e("span",{},["contrastive"])]),`
    `]),`
    `,e("div",{class:"flex gap-2 -ml-8"},[`
      `,e("div",{class:"border w-36 px-2"},["next performance prediction"]),`
      `,e("div",{class:"border grid place-items-center px-2"},["state stablization"]),`
    `]),`
  `]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Our contributions"]),`
`,e("ul",{},[`
`,e("li",{},["We are the first to design a Transformer-based architecture that ",e("em",{},["explicitly"])," diagnose knowledge mastery."]),`
`,e("li",{},["We purpose the Temporal Cumulative Attention, and build two-level extractors for diagnosis purposes."]),`
`,e("li",{},["We ensure stable knowledge tracing with a constrastive loss, so that it is less sensitive to patterns."]),`
`]),`
`,e("div",{class:"mt-8 grid place-items-center"},[`
  `,e("img",{src:"/imgs/www23/arch.png",alt:"architecture",class:"h-56 outline outline-gray-200"},[]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["DTransformer: the model"]),`
`,e("ul",{},[`
`,e("li",{},["the building block: Temporal Cumulative Attention (TCA)"]),`
`,e("li",{},[`two-level extractor:
`,e("ul",{},[`
`,e("li",{},["question level: collect experiences relavant to each question to get question mastery"]),`
`,e("li",{},["knowledge level: collect question mastery results that are relavant to each knowledge concept"]),`
`]),`
`]),`
`]),`
`,e("div",{class:"mt-6 grid place-items-center relative"},[`
  `,e("img",{src:"/imgs/www23/arch.png",alt:"architecture",class:"h-56 outline outline-gray-200"},[]),`
  `,e("div",{class:"absolute border-4 border-red-600 top-0 left-50 right-94 bottom-0"},[]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["DTransformer: the training process"]),`
`,e("ul",{},[`
`,e("li",{},[`based on the problems we want to solve, the training process consists of two parts:
`,e("ul",{},[`
`,e("li",{},["next performance prediction with read-out mechanism"]),`
`,e("li",{},["stablize knowledge states with CL"]),`
`,e("li",{},["this ensures the knowledge states to be both accurate and stable"]),`
`]),`
`]),`
`]),`
`,e("div",{class:"mt-6 grid place-items-center relative"},[`
  `,e("img",{src:"/imgs/www23/arch.png",alt:"architecture",class:"h-56 outline outline-gray-200"},[]),`
  `,e("div",{class:"absolute border-4 border-red-600 top-0 left-95 right-50 bottom-0"},[]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["DTransformer: inference and tracing"]),`
`,e("ul",{},[`
`,e("li",{},["How do we get the explicit diagnosis?"]),`
`,e("li",{},[`with the read-out mechanism, we can:
`,e("ul",{},[`
`,e("li",{},["predict performance on any questions"]),`
`,e("li",{},["estimate/diagnose mastery on any knowledge concepts"]),`
`]),`
`]),`
`,e("li",{},[`explicit knowledge tracing:
`,e("ul",{},[`
`,e("li",{},["read-out knowledge mastery on every step"]),`
`,e("li",{},["see Appendix A.4 of our paper"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Experiments"]),`
`,e("ul",{},[`
`,e("li",{},["overall performance on next performance prediction task"]),`
`,e("li",{},["KT stability"]),`
`]),`
`,e("div",{class:"mt-4 grid place-items-center grid-cols-2"},[`
  `,e("img",{src:"/imgs/www23/exp1.png",alt:"overall performance",class:"h-48"},[]),`
  `,e("img",{src:"/imgs/www23/exp2.png",alt:"T+N prediction",class:"h-36"},[]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Case study"]),`
`,e("ul",{},[`
`,e("li",{},["the result of knowledge tracing for a student, on five knowledge concepts"]),`
`,e("li",{},["Temporal Cumulative Attention (TCA) visualized"]),`
`]),`
`,e("div",{class:"mt-4 grid place-items-center grid-cols-1"},[`
  `,e("img",{src:"/imgs/www23/exp3.png",alt:"visualizations",class:"h-64"},[]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Thank you!"]),`
`,e("p",{},["more resources and information about educational data mining:"]),`
`,e("ul",{},[`
`,e("li",{},["Source code:  ",e("a",{href:"https://github.com/yxonic/DTransformer"},[e("code",{},["github.com/yxonic/DTransformer"])])]),`
`,e("li",{},["My website (and this slides):  ",e("a",{href:"https://yxonic.github.io"},[e("code",{},["yxonic.github.io"])])]),`
`,e("li",{},["My Twitter / GitHub:  ",e("a",{href:"https://github.com/yxonic"},[e("code",{},["@yxonic"])])]),`
`])]),config:void 0});const t={setup(){return()=>e(s,{pages:n,theme:i})}};t.__hmrId="377996a4";t.__file="/home/runner/work/yxonic.github.io/yxonic.github.io/src/slides/www23.page.mdx";export{t as default,r as frontmatter,n as pages};
