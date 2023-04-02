import{t,_ as l}from"../../chunks/8bae6656.js";import{h as n}from"../../chunks/ded0b38f.js";const o={title:"resume",theme:"./theme/basic",layout:"cover"},i=[];i.push({component:()=>n("div",{},[n("h1",{},["个人陈述"]),`
`,n("p",{},["@yxonic"])]),config:{title:"resume",theme:"./theme/basic",layout:"cover"}});i.push({component:()=>n("div",{},[n("h1",{},["简介"]),`
`,n("ul",{},[`
`,n("li",{},["中科大陈恩红老师博士生"]),`
`,n("li",{},["在实验室担任智慧教育方向研究组的组长"]),`
`,n("li",{},["研究兴趣和方向主要包括：教育数据挖掘，自然语言处理，强化学习"]),`
`,n("li",{},["在科研外有较多系统开发经历，带领开发智慧编程平台 CODIA 等"]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["个人经历：教育组"]),`
`,n("ul",{},[`
`,n("li",{},["在刘淇老师、黄振亚老师指导下成立教育组，作为组长领导组员探索教育数据挖掘相关领域，如问题理解、学生建模、自适应学习和推荐等，指导小组成员发表 20 余篇学术论文。"]),`
`,n("li",{},["定期组织小组讨论和技术报告，增强组内及组间的沟通和协作。"]),`
`,n("li",{},["搭建教育组网站分享小组研究进展和开放资源，促进开放研究。"]),`
`,n("li",{},["带领小组在 GitHub 上开源教育相关的数据、模型和工具等相关资源。"]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["个人经历：CODIA"]),`
`,n("ul",{},[`
`,n("li",{},["从零开始搭建智能在线编程平台 CODIA，使用 Vue + Node.js 设计并实现了初始网站架构和基于 GraphQL 的业务 API，并基于 gRPC 实现基础的微服务架构。"]),`
`,n("li",{},["将教育组的用户建模和自适应学习等相关研究应用到平台上，指导团队成员将知识追踪和试题推荐模型封装为 gRPC 服务，为用户提供智能诊断和推荐。"]),`
`,n("li",{},["搭建基于 GitLab 和 Kubernetes 的 DevOps+MLOps 平台，用于 CODIA 的持续部署，提高团队工作效率、降低协作成本。"]),`
`,n("li",{},["在中国科学技术大学推广使用，已多次作为多门编程和算法课程的教学平台，为计算机专业学生提供更好的学习体验。"]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["个人经历：教育部考试中心"]),`
`,n("ul",{},[`
`,n("li",{},["面向考试中心海量题库，训练基于大规模语义预训练的试题表征模型，提升试题属性自动标注效果。"]),`
`,n("li",{},["基于考试中心真实场景探索新的研究课题，例如试卷分割、试题查重、相似题推荐和替换等，相关成果用于开发考试中心内部工具。"]),`
`,n("li",{},["就如何将深度学习应用于传统教育技术中，在考试中心内部开展报告和讲座。"]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["个人经历：科大讯飞"]),`
`,n("ul",{},[`
`,n("li",{},["基于基础 NLP 技术开展题库建设、公式提取和相似题推荐等任务，并参与重构讯飞内部海量试题库以及相似题检索系统。"]),`
`,n("li",{},["使用深度学习方法进行试题理解和难度估计等任务，参与开发和优化相关模型，在高考试题难度预测准确性和稳定性指标上超过领域专家。"]),`
`,n("li",{},["在知识追踪任务中引入试题题面文本信息，实现了了一种试题增强的知识追踪方法，大幅提升学生得分预测的效果。"]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["研究成果：Spotlight"]),`
`,n("ul",{},[`
`,n("li",{},["任务：结构化图像转写（典型例子：公式识别为 LaTeX）"]),`
`,n("li",{},["挑战：attention 更注重内容相关，忽略图像内在结构"]),`
`,n("li",{},[`Spotlight 贡献：
`,n("ul",{},[`
`,n("li",{},["spotlight 每个时刻关注一个点，以围绕中心点的高斯分布作为权重聚合"]),`
`,n("li",{},["设计了两种策略控制聚焦中心的移动"]),`
`,n("li",{},["引入强化学习，帮助模型学习更加合理的阅读路径"]),`
`]),`
`]),`
`,n("li",{},[`以现在的研究观点来看，spotlight 可以和 multi-head attention 优势互补，可以从下面几个方向改进：
`,n("ul",{},[`
`,n("li",{},["实现 multi-head spotlight（近期工作）"]),`
`,n("li",{},["和 Transformer 架构适配，去掉序列依赖，从而能够和 multi-head attention 配合使用"]),`
`,n("li",{},["利用局部性特征，通过定义底层计算忽略低权重位置，从而降低复杂度、提高效率"]),`
`]),`
`]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["研究成果：QuesNet"]),`
`,n("ul",{},[`
`,n("li",{},["任务：无监督预训练试题表征"]),`
`,n("li",{},["挑战：domain-specific，多模态"]),`
`,n("li",{},[`QuesNet 贡献：
`,n("ul",{},[`
`,n("li",{},["多模态输入表示"]),`
`,n("li",{},["通过双向 LSTM 和 self attention，分别得到 token 层和问题层表征"]),`
`,n("li",{},["设计了双向 LSTM 上的类 BERT 预训练任务"]),`
`,n("li",{},["引入 domain-specific task 多任务学习"]),`
`]),`
`]),`
`,n("li",{},[`以现在的研究观点来看，QuesNet 可以从以下角度进一步改进：
`,n("ul",{},[`
`,n("li",{},["通用大模型 ",n("span",{class:"math math-inline"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",{},[n("mrow",{},[n("mo",{},["→"])]),n("annotation",{encoding:"application/x-tex"},["\\to"])])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:"height:0.3669em;"},[]),n("span",{class:"mrel"},["→"])])])])])," in-domain 大模型 ",n("span",{class:"math math-inline"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",{},[n("mrow",{},[n("mo",{},["→"])]),n("annotation",{encoding:"application/x-tex"},["\\to"])])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:"height:0.3669em;"},[]),n("span",{class:"mrel"},["→"])])])])])," domain-specific 任务微调"]),`
`,n("li",{},["架构上更好地适配教育 domain 的多模态输入，特别是数学公式、几何图形等"]),`
`]),`
`]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["研究成果：EKT 和 DTransformer"]),`
`,n("ul",{},[`
`,n("li",{},["任务：知识追踪"]),`
`,n("li",{},["目标：根据学生做题记录估计学生在每个时刻的知识掌握状态"]),`
`,n("li",{},[`EKT 贡献：
`,n("ul",{},[`
`,n("li",{},[n("strong",{},["第一个"]),"在 KT 中引入试题文本的工作（之前的工作均基于知识点 embedding）"]),`
`,n("li",{},["通过对文本 attention 聚合最相关的历史记录"]),`
`,n("li",{},["通过对知识矩阵 attention 形成每个知识点上的追踪"]),`
`]),`
`]),`
`,n("li",{},[`DTransformer 贡献：
`,n("ul",{},[`
`,n("li",{},[n("strong",{},["第一个"]),"使用 Transformer 诊断知识状态的工作（之前的工作只能做成绩预测）"]),`
`,n("li",{},["设计 DTransformer 架构，实现从问题层面到知识层面的能力诊断"]),`
`,n("li",{},["设计对比学习损失提升知识状态的稳定性"]),`
`]),`
`]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["Highlights"]),`
`,n("ul",{},[`
`,n("li",{},[`做有影响力的研究
`,n("ul",{},[`
`,n("li",{},["Google Scholar 总引用量 772, h-index 11"]),`
`]),`
`]),`
`,n("li",{},[`0-1 的实现能力
`,n("ul",{},[`
`,n("li",{},["代码能力：多年编程经历，熟悉多种编程语言，NOI 国家奖牌，并行优化比赛、RDMA 编程比赛第一"]),`
`,n("li",{},["工程能力：丰富的开源项目，CODIA 和 LUNA"]),`
`,n("li",{},["学习能力：涉猎广泛，喜欢跟踪前沿研究和技术"]),`
`]),`
`]),`
`])]),config:void 0});i.push({component:()=>n("div",{},[n("h1",{},["Q&A"]),`
`]),config:void 0});const e={setup(){return()=>n(l,{pages:i,theme:t})}};e.__hmrId="3b5dd257";e.__file="/home/runner/work/yxonic.github.io/yxonic.github.io/src/slides/resume.page.mdx";export{e as default,o as frontmatter,i as pages};
