import{t as i,_ as s}from"../chunks/chunk-df2143f9.js";import"../chunks/chunk-51184663.js";import{h as e}from"../chunks/chunk-23d6161b.js";import"../chunks/chunk-c27b6911.js";const l={title:"DevOps with GitLab+Kubernetes",theme:"./theme/basic",layout:"cover"},n=[];n.push({component:()=>e("div",{},[e("h1",{},["DevOps with GitLab+Kubernetes"]),`
`,e("p",{},["@yxonic"])]),config:{title:"DevOps with GitLab+Kubernetes",theme:"./theme/basic",layout:"cover"}});n.push({component:()=>e("div",{},[e("h1",{},["Contents"]),`
`,e("ul",{},[`
`,e("li",{},["GitLab"]),`
`,e("li",{},["Kubernetes"]),`
`,e("li",{},["Integrate GitLab with Kubernetes"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Decisions to be made first"]),`
`,e("ul",{},[`
`,e("li",{},[`Do we focus on how-to-use only, or also include how to install and manage?
`,e("ul",{},[`
`,e("li",{},["like, Linux usage or Linux installation & management?"]),`
`,e("li",{},["can be as simple as everything-on-cloud, or as complex as managing everything by hand"]),`
`]),`
`]),`
`,e("li",{},[`How to obtain GitLab and Kubernetes instances?
`,e("ul",{},[`
`,e("li",{},["managed vs self-hosted GitLab"]),`
`,e("li",{},["cloud vs existing cluster vs self-hosted Kubernetes"]),`
`]),`
`]),`
`,e("li",{},[`Do we start with stateless or stateful apps?
`,e("ul",{},[`
`,e("li",{},["stateless: all states are external to the cluster (in DB, Kafka, etc.); apps are merely computation"]),`
`,e("li",{},["stateful: apps have states in the cluster such as storage"]),`
`]),`
`]),`
`,e("li",{},[`Do we only deploy apps or also include infrastructure management?
`,e("ul",{},[`
`,e("li",{},["topics involving infrastructure: monitoring, logging, metrics, etc."]),`
`,e("li",{},["install DB or Kafka as cluster infrastructure can avoid expensive cloud services"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Deployment paradigms"]),`
`,e("div",{class:"grid grid-cols-3 gap-x-2 gap-y-4 place-items-center text-center text-sm"},[`
  `,e("div",{class:"p-2 border grid gap-2"},[`
    `,e("div",{class:"grid grid-cols-3 gap-2"},[`
      `,e("div",{class:"px-0.5 border"},["nginx"]),`
      `,e("div",{class:"px-0.5 border"},["backend"]),`
      `,e("div",{class:"px-0.5 border"},["DB"]),`
    `]),`
    `,e("div",{class:"px-0.5 border"},["Linux"]),`
  `]),`
  `,e("div",{class:"p-2 border grid gap-2"},[`
    `,e("div",{class:"flex gap-2"},[`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["nginx"]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["backend"]),`
      `,e("div",{class:"grid gap-2"},[`
        `,e("div",{class:"grid grid-cols-2 gap-2"},[`
          `,e("div",{class:"px-0.5 border"},["DB"]),`
          `,e("div",{class:"px-0.5 border"},["Kafka"]),`
        `]),`
        `,e("div",{class:"px-0.5 border"},["Docker"]),`
      `]),`
    `]),`
    `,e("div",{class:"px-0.5 border"},["Linux"]),`
  `]),`
  `,e("div",{class:"p-2 border grid gap-2"},[`
    `,e("div",{class:"grid grid-cols-4 gap-2"},[`
      `,e("div",{class:"px-0.5 border"},["nginx"]),`
      `,e("div",{class:"px-0.5 border"},["backend"]),`
      `,e("div",{class:"px-0.5 border"},["DB"]),`
      `,e("div",{class:"px-0.5 border"},["Kafka"]),`
    `]),`
    `,e("div",{class:"px-0.5 border"},["Docker"]),`
    `,e("div",{class:"px-0.5 border"},["Linux"]),`
  `]),`
  `,e("div",{},["bare metal"]),`
  `,e("div",{},["deploy services with docker"]),`
  `,e("div",{},["deploy everything with docker"]),`
  `,e("div",{class:"p-2 border grid gap-2"},[`
    `,e("div",{class:"flex gap-2"},[`
      `,e("div",{class:"grid gap-2"},[`
        `,e("div",{class:"grid grid-cols-2 gap-2"},[`
          `,e("div",{class:"px-0.5 border"},["nginx"]),`
          `,e("div",{class:"px-0.5 border"},["backend"]),`
        `]),`
        `,e("div",{class:"px-0.5 border"},["docker compose"]),`
      `]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["DB"]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["Kafka"]),`
    `]),`
    `,e("div",{class:"px-0.5 border"},["Docker"]),`
    `,e("div",{class:"px-0.5 border"},["Linux"]),`
  `]),`
  `,e("div",{class:"p-2 border grid gap-2"},[`
    `,e("div",{class:"flex gap-2"},[`
      `,e("div",{class:"grid gap-2"},[`
        `,e("div",{class:"grid grid-cols-2 gap-2"},[`
          `,e("div",{class:"px-0.5 border"},["nginx"]),`
          `,e("div",{class:"px-0.5 border"},["backend"]),`
        `]),`
        `,e("div",{class:"px-0.5 border"},["Kubernetes"]),`
      `]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["DB"]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["Kafka"]),`
    `]),`
    `,e("div",{class:"px-0.5 border"},["Docker"]),`
    `,e("div",{class:"px-0.5 border"},["Linux"]),`
  `]),`
  `,e("div",{class:"p-2 border grid gap-2"},[`
    `,e("div",{class:"grid grid-cols-4 gap-2"},[`
      `,e("div",{class:"px-0.5 border"},["nginx"]),`
      `,e("div",{class:"px-0.5 border"},["backend"]),`
      `,e("div",{class:"px-0.5 border"},["DB"]),`
      `,e("div",{class:"px-0.5 border"},["Kafka"]),`
    `]),`
    `,e("div",{class:"px-0.5 border"},["Kubernetes"]),`
    `,e("div",{class:"px-0.5 border"},["Docker"]),`
    `,e("div",{class:"px-0.5 border"},["Linux"]),`
  `]),`
  `,e("div",{},["manage deployment with docker compose"]),`
  `,e("div",{},["deploy app with Kubernetes"]),`
  `,e("div",{},["deploy everything with Kubernetes"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Cloud services"]),`
`,e("div",{class:"grid grid-cols-3 gap-x-2 gap-y-4 place-items-center text-center text-sm"},[`
  `,e("div",{class:"p-2 border border-dotted grid gap-2"},[`
    `,e("div",{class:"grid grid-cols-3 gap-2"},[`
      `,e("div",{class:"px-0.5 border"},["nginx"]),`
      `,e("div",{class:"px-0.5 border"},["backend"]),`
      `,e("div",{class:"px-0.5 border"},["DB"]),`
    `]),`
    `,e("div",{class:"px-0.5 border border-dotted"},["ECS"]),`
  `]),`
  `,e("div",{class:"p-2 border border-dotted grid gap-2"},[`
    `,e("div",{class:"flex gap-2"},[`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["nginx"]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["backend"]),`
      `,e("div",{class:"grid gap-2"},[`
        `,e("div",{class:"grid grid-cols-2 gap-2"},[`
          `,e("div",{class:"px-0.5 border"},["DB"]),`
          `,e("div",{class:"px-0.5 border"},["Kafka"]),`
        `]),`
        `,e("div",{class:"px-0.5 border"},["Docker"]),`
      `]),`
    `]),`
    `,e("div",{class:"px-0.5 border border-dotted"},["ECS"]),`
  `]),`
  `,e("div",{class:"flex gap-2"},[`
    `,e("div",{class:"p-2 border border-dotted grid gap-2"},[`
      `,e("div",{class:"grid grid-cols-2 gap-2"},[`
        `,e("div",{class:"px-0.5 border grid place-items-center"},["nginx"]),`
        `,e("div",{class:"px-0.5 border grid place-items-center"},["backend"]),`
      `]),`
      `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},["ECS"]),`
    `]),`
    `,e("div",{class:"flex flex-col w-12"},[`
      `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},["DB"]),`
      `,e("div",{class:"mt-2 px-0.5 border border-dotted grid place-items-center"},[`
        Kafka
      `]),`
    `]),`
  `]),`
  `,e("div",{},["ECS is just cloud Linux"]),`
  `,e("div",{},["we can install docker on ECS"]),`
  `,e("div",{},["ECS + cloud components"]),`
  `,e("div",{class:"flex gap-2"},[`
    `,e("div",{class:"p-2 border border-dotted grid gap-2"},[`
      `,e("div",{class:"grid grid-cols-2 gap-2"},[`
        `,e("div",{class:"px-0.5 border grid place-items-center"},["nginx"]),`
        `,e("div",{class:"px-0.5 border grid place-items-center"},["backend"]),`
      `]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["Kubernetes"]),`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["Docker"]),`
      `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},["ECS"]),`
    `]),`
    `,e("div",{class:"flex flex-col w-12"},[`
      `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},["DB"]),`
      `,e("div",{class:"mt-2 px-0.5 border border-dotted grid place-items-center"},[`
        Kafka
      `]),`
    `]),`
  `]),`
  `,e("div",{class:"flex gap-2"},[`
    `,e("div",{class:"p-2 border border-dotted grid gap-2"},[`
      `,e("div",{class:"grid grid-cols-2 gap-2"},[`
        `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},[`
          nginx
        `]),`
        `,e("div",{class:"px-0.5 border grid place-items-center"},["backend"]),`
      `]),`
      `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},[`
        Kubernetes
      `]),`
    `]),`
    `,e("div",{class:"flex flex-col w-12"},[`
      `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},["DB"]),`
      `,e("div",{class:"mt-2 px-0.5 border border-dotted grid place-items-center"},[`
        Kafka
      `]),`
      `,e("div",{class:"mt-2 px-0.5 border border-dotted grid place-items-center"},[`
        GitLab
      `]),`
    `]),`
  `]),`
  `,e("div",{class:"flex gap-2 items-center"},[`
    `,e("div",{class:"p-2 border border-dotted grid gap-2"},[`
      `,e("div",{class:"px-0.5 border grid place-items-center"},["backend"]),`
      `,e("div",{class:"px-0.5 border border-dotted grid place-items-center"},[`
        lambda
      `]),`
    `]),`
    `,e("div",{class:"px-0.5 w-10 border border-dotted grid place-items-center"},[`
      DB
    `]),`
    `,e("div",{class:"px-0.5 w-10 border border-dotted grid place-items-center"},[`
      Kafka
    `]),`
  `]),`
  `,e("div",{},["Kubernetes on ECS"]),`
  `,e("div",{},["managed Kubernetes cluster"]),`
  `,e("div",{},["serverless"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["CODIA architecture"]),`
`,e("div",{class:"mt-12 grid gap-4 place-items-center text-center"},[`
  `,e("div",{class:"flex gap-2"},[`
    `,e("div",{class:"p-2 border grid gap-2"},[`
      `,e("div",{class:"flex gap-2"},[`
        `,e("div",{class:"px-0.5 border grid place-items-center"},["GitLab"]),`
        `,e("div",{class:"grid gap-2"},[`
          `,e("div",{class:"flex gap-2"},[`
            `,e("div",{class:"grid gap-2"},[`
              `,e("div",{class:"grid grid-cols-2 gap-2"},[`
                `,e("div",{class:"px-0.5 border"},["nginx"]),`
                `,e("div",{class:"px-0.5 border"},["backend"]),`
              `]),`
              `,e("div",{class:"px-0.5 border"},["Kubernetes"]),`
            `]),`
            `,e("div",{class:"px-0.5 border grid place-items-center"},["Kafka"]),`
          `]),`
          `,e("div",{class:"px-0.5 border"},["Docker"]),`
        `]),`
      `]),`
      `,e("div",{class:"px-0.5 border"},["Linux"]),`
    `]),`
    `,e("div",{class:"flex flex-col w-12"},[`
      `,e("div",{class:"px-0.5 border border-dotted"},["DB"]),`
    `]),`
  `]),`
  `,e("div",{},[`
    self-hosted GitLab, hybrid cloud, deploy app with k8s, Kafka on docker to
    reduce cost
  `]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["GitLab"]),`
`,e("ul",{},[`
`,e("li",{},[`installation
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://about.gitlab.com/topics/ci-cd/"},["DevOps with GitLab"])]),`
`,e("li",{},[e("a",{href:"https://about.gitlab.com/install/"},["Optional: install GitLab"])]),`
`,e("li",{},[e("a",{href:"https://docs.gitlab.com/runner/"},["Optional: GitLab runner"])]),`
`]),`
`]),`
`,e("li",{},[`pipelines
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://docs.gitlab.com/ee/ci/quick_start/"},["Tutorial: GitLab CI/CD pipeline"])]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Kubernetes"]),`
`,e("ul",{},[`
`,e("li",{},[`minikube
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://kubernetes.io/zh-cn/docs/tutorials/hello-minikube/"},["Hello, minikube"])]),`
`,e("li",{},[e("a",{href:"https://kubernetes.io/zh-cn/docs/tutorials/kubernetes-basics/"},["Kubernetes basics"])]),`
`]),`
`]),`
`,e("li",{},[`helm
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://helm.sh/docs/intro/quickstart/"},["Helm quickstart"])]),`
`,e("li",{},[e("a",{href:"https://helm.sh/docs/chart_template_guide/getting_started/"},["Writing helm charts"])]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Integrate GitLab with Kubernetes"]),`
`,e("ul",{},[`
`,e("li",{},[`connecting GitLab with Kubernetes
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://docs.gitlab.com/ee/user/clusters/agent/install/index.html"},["Installing the agent for Kubernetes"])]),`
`]),`
`]),`
`,e("li",{},[`operating the cluster with GitLab pipelines
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://docs.gitlab.com/ee/user/clusters/agent/ci_cd_workflow.html"},["Using GitLab CI/CD with a Kubernetes cluster"])]),`
`,e("li",{},[e("a",{href:"https://git.bdaa.pro/codia/platform-next/-/blob/master/.gitlab-ci.yml"},["example configuration"])]),`
`]),`
`]),`
`])]),config:void 0});const r={setup(){return()=>e(s,{pages:n,theme:i})}};r.__hmrId="096f7e07";r.__file="/home/runner/work/yxonic.github.io/yxonic.github.io/src/slides/devops.page.mdx";export{r as default,l as frontmatter,n as pages};
