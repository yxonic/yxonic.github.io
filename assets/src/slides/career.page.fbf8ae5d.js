import{t,_ as a}from"../../chunks/8bae6656.js";import{h as e}from"../../chunks/ded0b38f.js";const r={title:"Career",theme:"./theme/basic",layout:"cover"},n=[];n.push({component:()=>e("div",{},[e("h1",{},["Career"]),`
`,e("p",{},["@yxonic"])]),config:{title:"Career",theme:"./theme/basic",layout:"cover"}});n.push({component:()=>e("div",{},[e("h1",{},["个人陈述"]),`
`,e("ul",{},[`
`,e("li",{},["中科大陈恩红老师博士生"]),`
`,e("li",{},["在实验室担任智慧教育方向研究组的组长"]),`
`,e("li",{},["研究兴趣和方向主要包括：教育数据挖掘，自然语言处理，强化学习"]),`
`,e("li",{},["在科研外有较多系统开发经历，带领开发智慧编程平台 CODIA、教育知识图谱平台 LUNA 等"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["个人经历：教育组"]),`
`,e("ul",{},[`
`,e("li",{},["built up a research group that explores educational data mining topics such as question understanding, student modeling, and adaptive learning and recommendation."]),`
`,e("li",{},["mentored group members with relevant research interests; organized regular group discussion and technical report to improve communication and collaboration."]),`
`,e("li",{},["promoted open research by setting up public website for group resources; co-leaded the team to open source educational data and model on GitHub"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["个人经历：CODIA"]),`
`,e("ul",{},[`
`,e("li",{},["built an intelligent online programming platform from scratch; designed and implemented the initial architecture with Node.js + Vue."]),`
`,e("li",{},["applied user modeling and adaptive learning research from BASE group onto the platform; wrapped knowledge tracing and exercise recommendation models as micro-services."]),`
`,e("li",{},["promoted the platform for the use of several programming and algorithm classes at USTC, providing improved learning experience for computer science students"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["个人经历：考试中心"]),`
`,e("ul",{},[`
`,e("li",{},["implemented a pre-trained question representation model for question auto-annotation."]),`
`,e("li",{},["discovered novel research topics such as test paper segmentation from real-world scenarios in NEEA."]),`
`,e("li",{},["gave talks and lectures on the principles and applications of ML/DL in educational technology."]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["个人经历：科大讯飞"]),`
`,e("ul",{},[`
`,e("li",{},["used NLP techniques to carry out formula extraction and similar question recommendation tasks."]),`
`,e("li",{},["conducted question understanding and diﬀiculty estimation with deep learning methods."]),`
`,e("li",{},["designed an exercise-enhanced knowledge tracing method for improved student performance prediction."]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["研究成果：Spotlight"]),`
`,e("ul",{},[`
`,e("li",{},["任务：结构化图像转写（典型例子：公式识别为 LaTeX）"]),`
`,e("li",{},["attention 更注重内容相关，忽略图像内在结构"]),`
`,e("li",{},["spotlight 每个时刻关注一个点，以围绕中心点的高斯分布作为权重聚合"]),`
`,e("li",{},["设计了两种策略控制聚焦中心的移动"]),`
`,e("li",{},["引入强化学习，帮助模型学习更加合理的阅读路径"]),`
`,e("li",{},[`以现在的研究观点来看，spotlight 可以和 multi-head attention 优势互补，可以从下面几个方向改进：
`,e("ul",{},[`
`,e("li",{},["实现 multi-head spotlight（近期工作）"]),`
`,e("li",{},["和 Transformer 架构适配，去掉序列依赖，从而能够和 multi-head attention 配合使用"]),`
`,e("li",{},["利用局部性特征，通过定义底层计算忽略低权重位置，从而降低复杂度、提高效率"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["研究成果：QuesNet"]),`
`,e("ul",{},[`
`,e("li",{},["任务：无监督预训练试题表征"]),`
`,e("li",{},["挑战：domain-specific，多模态"]),`
`,e("li",{},["多模态输入表示"]),`
`,e("li",{},["通过双向 LSTM 和 self attention，分别得到 token 层和问题层表征"]),`
`,e("li",{},["设计了双向 LSTM 上的类 BERT 预训练任务"]),`
`,e("li",{},["引入 domain-specific task 多任务学习"]),`
`,e("li",{},[`以现在的研究观点来看，QuesNet 可以从以下角度进一步改进：
`,e("ul",{},[`
`,e("li",{},["通用大模型 ",e("span",{class:"math math-inline"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",{},[e("mrow",{},[e("mo",{},["→"])]),e("annotation",{encoding:"application/x-tex"},["\\to"])])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:"height:0.3669em;"},[]),e("span",{class:"mrel"},["→"])])])])])," in-domain 大模型 ",e("span",{class:"math math-inline"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",{},[e("mrow",{},[e("mo",{},["→"])]),e("annotation",{encoding:"application/x-tex"},["\\to"])])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:"height:0.3669em;"},[]),e("span",{class:"mrel"},["→"])])])])])," domain-specific 任务微调"]),`
`,e("li",{},["架构上更好地适配教育 domain 的多模态输入，特别是数学公式、几何图形等"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["研究成果：EKT 和 DTransformer"]),`
`,e("ul",{},[`
`,e("li",{},["任务：知识追踪"]),`
`,e("li",{},["目标：根据学生做题记录估计学生在每个时刻的知识掌握状态"]),`
`,e("li",{},[`EKT 贡献：
`,e("ul",{},[`
`,e("li",{},[e("strong",{},["第一个"]),"在 KT 中引入试题文本的工作（之前的工作均基于知识点 embedding）"]),`
`,e("li",{},["通过对文本 attention 聚合最相关的历史记录"]),`
`,e("li",{},["通过对知识矩阵 attention 形成每个知识点上的追踪"]),`
`]),`
`]),`
`,e("li",{},[`DTransformer 贡献：
`,e("ul",{},[`
`,e("li",{},[e("strong",{},["第一个"]),"使用 Transformer 诊断知识状态的工作（之前的工作只能做成绩预测）"]),`
`,e("li",{},["设计 DTransformer 架构，实现从问题层面到知识层面的能力诊断"]),`
`,e("li",{},["设计对比学习损失提升知识状态的稳定性"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Highlights"]),`
`,e("ul",{},[`
`,e("li",{},[`做有影响力的研究
`,e("ul",{},[`
`,e("li",{},["Google Scholar 总引用量 772, h-index 11"]),`
`]),`
`]),`
`,e("li",{},[`0-1 的实现能力
`,e("ul",{},[`
`,e("li",{},["代码能力：多年编程经历，熟悉多种编程语言，NOI 国家奖牌，并行优化比赛、RDMA 编程比赛第一"]),`
`,e("li",{},["工程能力：丰富的开源项目，CODIA 和 LUNA"]),`
`,e("li",{},["学习能力：涉猎广泛，喜欢跟踪前沿研究和技术"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("h1",{},["Q&A"]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Reference"]),`
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://sites.google.com/view/datascience-cheat-sheets"},["Preparation cheet sheet"])]),`
`,e("li",{},[e("a",{href:"https://towardsdatascience.com/types-of-machine-learning-interviews-and-how-to-ace-them-51587a95f847"},["ML interview"])]),`
`,e("li",{},[e("a",{href:"https://towardsdatascience.com/how-to-prepare-for-a-behavioral-soft-skills-interview-cheat-sheet-9347aaeaef82"},["Soft skill interview"])]),`
`,e("li",{},[e("a",{href:"https://towardsdatascience.com/what-is-machine-learning-system-design-interview-and-how-to-prepare-for-it-537d1271d754"},["ML system interview"])]),`
`,e("li",{},[e("a",{href:"https://aqeel-anwar.medium.com/machine-learning-resume-that-got-me-shortlisted-for-meta-microsoft-nvidia-uber-samsung-intel-220761c1a850"},["Resume"])]),`
`,e("li",{},[e("a",{href:"https://aqeel-anwar.medium.com/the-dos-and-donts-of-a-software-engineer-resume-to-get-you-shortlisted-for-interviews-more-7d6a926156c0"},["Resume dos and don'ts"])]),`
`,e("li",{},[e("a",{href:"https://arxiv.org/abs/2201.00650"},["deep learning interviews"])]),`
`])]),config:void 0});const i={setup(){return()=>e(a,{pages:n,theme:t})}};i.__hmrId="71f983b4";i.__file="/home/runner/work/yxonic.github.io/yxonic.github.io/src/slides/career.page.mdx";export{i as default,r as frontmatter,n as pages};
