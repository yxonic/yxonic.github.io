import{t,_ as a}from"../chunks/chunk-df2143f9.js";import"../chunks/chunk-51184663.js";import{h as e}from"../chunks/chunk-23d6161b.js";import"../chunks/chunk-c27b6911.js";const c={title:"Learn Bevy",theme:"./theme/basic",layout:"cover"},n=[];n.push({component:()=>e("div",{},[e("h1",{},["Learn Bevy"]),`
`,e("p",{},["@yxonic"])]),config:{title:"Learn Bevy",theme:"./theme/basic",layout:"cover"}});n.push({component:()=>e("div",{},[e("h1",{},["Content"]),`
`,e("ul",{},[`
`,e("li",{},["Introduction"]),`
`,e("li",{},["Quickstart"]),`
`,e("li",{},["Development and debugging"]),`
`,e("li",{},["World"]),`
`,e("li",{},["Rendering"]),`
`,e("li",{},["Physics"]),`
`,e("li",{},["Control"]),`
`,e("li",{},["Game state management"]),`
`,e("li",{},["UI"]),`
`,e("li",{},["Visual effects"]),`
`,e("li",{},["Audio"]),`
`,e("li",{},["2D"]),`
`,e("li",{},["Game release"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Introduction"]),`
`,e("ul",{},[`
`,e("li",{},["Bevy is a game engine that provides first-class low-level mechanisms for game developing"]),`
`,e("li",{},['Instead of feature-full, Bevy is more like "mechanism-full"']),`
`,e("li",{},["We may use these mechanisms to create our own features, strategies, fancy ideas, and eventually, ",e("em",{},["games"])]),`
`,e("li",{},["Building games from low-level mechanisms is overwhelming at first. We want to alleviate this initial pain."]),`
`,e("li",{},["This guide takes a top-down approach to give you a creator's guidance to learning Bevy."]),`
`,e("li",{},[`Some questions I will try to answer:
`,e("ul",{},[`
`,e("li",{},["How to start creating from scratch?"]),`
`,e("li",{},["When creating something, what mechanisms can you use?"]),`
`,e("li",{},["When you want to change something, what parts should you adjust?"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Brief introduction to Bevy"]),`
`,e("ul",{},[`
`,e("li",{},["Bevy is a refreshingly simple data-driven game engine built in Rust. ",e("em",{},["(",e("a",{href:"https://bevyengine.org"},["https://bevyengine.org"]),")"])]),`
`,e("li",{},[`Compared with other game engines, Bevy is representing and tracking the internal data more elegantly
`,e("ul",{},[`
`,e("li",{},["it helps you materialize the imaginary game world as concrete data"]),`
`,e("li",{},["it organizes data as Entity-Component-System (ECS), a time-tested paradigm seen in many other engines"]),`
`,e("li",{},["...yet it leverages advanced Rust features to make it refreshingly simple for us to use"]),`
`]),`
`]),`
`,e("li",{},[`How is my experience working with Bevy?
`,e("ul",{},[`
`,e("li",{},["Accurate: I fully control the code, the code fully controls the game world"]),`
`,e("li",{},["Confident: less unexpected behaviors or mysterious bugs, thanks to Rust and Bevy's clear architecture"]),`
`,e("li",{},["Creative: put things together creatively, or craft your own features, all as I want"]),`
`,e("li",{},["Agile: I can build, publish and iterate your game real quick"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Quickstart ",e("code",{},["ch01"])]),`
`,e("ul",{},[`
`,e("li",{},["Launch the game"]),`
`,e("li",{},["Import a model"]),`
`,e("li",{},["See through a camera"]),`
`,e("li",{},["Move objects"]),`
`,e("li",{},["Respond to events"]),`
`,e("li",{},["Manage behaviors with states"]),`
`,e("li",{},["Recap"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Launch the game ",e("code",{},["ch01/step-1"])]),`
`,e("ul",{},[`
`,e("li",{},["Install Rust: ",e("a",{href:"https://www.rust-lang.org/learn/get-started"},["Rust official guide"]),", ",e("a",{href:"https://bevyengine.org/learn/book/getting-started/setup/#rust-setup"},["Bevy Book installing rust and OS dependencies"])]),`
`,e("li",{},[`Start a new project:
`,e("pre",{},[e("code",{class:"language-bash"},[`cargo new learn_bevy_game
cd learn_bevy_game
`])]),`
`]),`
`,e("li",{},[`Add Bevy as dependency (with a link-time optimization):
`,e("pre",{},[e("code",{class:"language-bash"},[`cargo add bevy --features dynamic_linking
`])]),`
`]),`
`,e("li",{},["Apply an optimization for debugging experience: add the following lines to ",e("code",{},["Cargo.toml"]),`
`,e("pre",{},[e("code",{class:"language-toml"},[`[profile.dev.package."*"]
opt-level = 3
`])]),`
`]),`
`,e("li",{},[`Test the game (which is just a hello world program for now):
`,e("pre",{},[e("code",{class:"language-bash"},[`cargo run # this could take some time; later builds would be a lot faster
`])]),`
`]),`
`,e("li",{},["Read more about the optimizations and building commands: ",e("a",{href:"https://bevyengine.org/learn/book/getting-started/setup/"},["bevy book"]),", ",e("a",{href:"https://bevy-cheatbook.github.io/pitfalls/performance.html"},["unofficial bevy cheatbook"])]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Import a model ",e("code",{},["ch01/step-2-1"])]),`
`,e("ul",{},[`
`,e("li",{},["Setup a window, a main game loop, and other main features with ",e("code",{},["DefaultPlugins"]),`
`,e("ul",{},[`
`,e("li",{},["Bevy at its core is just a skeleton for supporting the ECS paradigm"]),`
`,e("li",{},["a new Bevy app contains nothing; we add ECS to it to give it meanings"]),`
`,e("li",{},["a plugin is a pack of ECS items that work together to handle a specific aspect of the game"]),`
`,e("li",{},["window management, game loop, input management, logging, are all supported through some default plugins"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Import a model ",e("code",{},["ch01/step-2-2"])]),`
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://github.com/bevyengine/bevy/raw/main/assets/models/animated/Fox.glb"},["Download"])," a model to ",e("code",{},["assets/models/Fox.glb"]),`
`,e("ul",{},[`
`,e("li",{},["you can design your 3D model ",e("em",{},["visually"])," with software like Blender"]),`
`,e("li",{},["then you can export it to formats like glTF (or its binary version ",e("code",{},[".glb"]),") to use it ",e("em",{},["programmatically"])," in Bevy"]),`
`]),`
`]),`
`,e("li",{},[`Load this model in Bevy app
`,e("ul",{},[`
`,e("li",{},["in the code we add ",e("code",{},["load_scene_system"])," at ",e("code",{},["Startup"])," phase of the game"]),`
`,e("li",{},["scene is kind of like a container; we can put one or more models, lights and cameras together as a scene"]),`
`,e("li",{},["here we load a scene with an ",e("code",{},["AssetServer"]),", and spawn it in ",e("code",{},["load_scene_system"]),` (systems are just functions)
`,e("pre",{},[e("code",{class:"language-rs"},[`commands.spawn(SceneBundle {
    scene: asset_server.load("models/Fox.glb#Scene0"),
    ..default()
});
`])]),`
`]),`
`]),`
`]),`
`,e("li",{},[`Observe it in the window with a camera
`,e("ul",{},[`
`,e("li",{},[`let's set up a default camera for now
`,e("pre",{},[e("code",{class:"language-rs"},[`commands.spawn(Camera3dBundle::default());
`])]),`
`]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Import a model"]),`
`,e("ul",{},[`
`,e("li",{},["Now run the game with ",e("code",{},["cargo run"]),", you'll see something like this:"]),`
`]),`
`,e("div",{class:"grid px-32"},[`
`,e("p",{},[e("img",{src:"/imgs/bevy/ch01_2_2.png",alt:"part of the fox"},[])]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["See through a camera"]),`
`,e("ul",{},[`
`,e("li",{},["We are now already seeing the 3D game world in the window, through a ",e("em",{},["camera"])]),`
`,e("li",{},[`The mechanism of a camera
`,e("ul",{},[`
`,e("li",{},["without a camera, the world is just a bunch of data describing what everything is and where they are"]),`
`,e("li",{},["a camera uses such information to calculate what we should see from a certain point of view"]),`
`,e("li",{},["specifically, given object shapes, positions, environment lightings, etc., the camera will compute colors of each pixels on the screen, as if we were seeing things directly from there; this process is called ",e("em",{},["rendering"])]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["See through a camera ",e("code",{},["ch01/step-3"])]),`
`,e("ul",{},[`
`,e("li",{},[`Let's move our camera to a more comfortable position [TODO]
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://bevy-cheatbook.github.io/features/coords.html"},["https://bevy-cheatbook.github.io/features/coords.html"])]),`
`,e("li",{},[e("a",{href:"https://bevy-cheatbook.github.io/features/transforms.html"},["https://bevy-cheatbook.github.io/features/transforms.html"])]),`
`]),`
`]),`
`,e("li",{},[`Then, we add some lights to make this scene look more natural [TODO]
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://github.com/bevyengine/bevy/blob/main/examples/3d/load_gltf.rs"},["https://github.com/bevyengine/bevy/blob/main/examples/3d/load_gltf.rs"])]),`
`]),`
`]),`
`,e("li",{},["Also change background color to give us a more lively feel [TODO]"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Move objects"]),`
`,e("ul",{},[`
`,e("li",{},["Write a system to move the fox around [TODO]"]),`
`,e("li",{},[`Trigger an animation when moving [TODO]
`,e("ul",{},[`
`,e("li",{},[e("a",{href:"https://github.com/bevyengine/bevy/blob/main/examples/animation/animated_fox.rs"},["https://github.com/bevyengine/bevy/blob/main/examples/animation/animated_fox.rs"])]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Respond to events"]),`
`,e("ul",{},[`
`,e("li",{},["Bind systems to keyboard events [TODO]"]),`
`,e("li",{},["The discreteness of time, i.e. frames [TODO]"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Manage behaviors with states"]),`
`,e("ul",{},[`
`,e("li",{},["Fox state: running, idle [TODO]"]),`
`,e("li",{},["Make the fox come back after idling for some while [TODO]"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Recap"]),`
`,e("ul",{},[`
`,e("li",{},[`Game development mindset
`,e("ul",{},[`
`,e("li",{},["describe the game world"]),`
`,e("li",{},["game ",e("span",{class:"math math-inline"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",{},[e("mrow",{},[e("mo",{},["→"])]),e("annotation",{encoding:"application/x-tex"},["\\to"])])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:"height:0.3669em;"},[]),e("span",{class:"mrel"},["→"])])])])])," player: what will player see (with rendering)"]),`
`,e("li",{},["player ",e("span",{class:"math math-inline"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",{},[e("mrow",{},[e("mo",{},["→"])]),e("annotation",{encoding:"application/x-tex"},["\\to"])])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:"height:0.3669em;"},[]),e("span",{class:"mrel"},["→"])])])])])," game: how will our game react to players (with events)"]),`
`,e("li",{},["the evolution of the game world: state machines"]),`
`]),`
`]),`
`])]),config:void 0});n.push({component:()=>e("h1",{},[]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Development and debugging"]),`
`,e("ul",{},[`
`,e("li",{},["Project structure"]),`
`,e("li",{},["Workflow"]),`
`,e("li",{},["Asset management"]),`
`,e("li",{},["Logging"]),`
`,e("li",{},["Debugging"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["World"]),`
`,e("ul",{},[`
`,e("li",{},["Scene"]),`
`,e("li",{},["Coordinates and transform"]),`
`,e("li",{},["Spawn and discard"]),`
`,e("li",{},["Time"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Rendering"]),`
`,e("ul",{},[`
`,e("li",{},["PBR: basic idea"]),`
`,e("li",{},["Mesh"]),`
`,e("li",{},["Material"]),`
`,e("li",{},["Texture"]),`
`,e("li",{},["Light"]),`
`,e("li",{},["Camera"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Physics"]),`
`,e("ul",{},[`
`,e("li",{},["Rigid-body"]),`
`,e("li",{},["Movement"]),`
`,e("li",{},["Collision"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Control"]),`
`,e("ul",{},[`
`,e("li",{},["Character control"]),`
`,e("li",{},["Animation"]),`
`,e("li",{},["Camera control"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Game state management"]),`
`,e("ul",{},[`
`,e("li",{},["Custom events"]),`
`,e("li",{},["State machine"]),`
`,e("li",{},["Scheduling"]),`
`,e("li",{},["Database"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["UI"]),`
`,e("ul",{},[`
`,e("li",{},["Text rendering"]),`
`,e("li",{},["Overlays"]),`
`,e("li",{},[e("code",{},["egui"])]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Visual Effects"]),`
`,e("ul",{},[`
`,e("li",{},["Realistic or artistic"]),`
`,e("li",{},["Shader"]),`
`,e("li",{},["Particle"]),`
`])]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Audio"]),`
`,e("ul",{},[`
`,e("li",{},["Play"]),`
`,e("li",{},["Blend"]),`
`,e("li",{},["Generate"]),`
`,e("li",{},["3D audio"]),`
`])]),config:void 0});n.push({component:()=>e("h1",{},["2D"]),config:void 0});n.push({component:()=>e("div",{},[e("h1",{},["Game release"]),`
`,e("ul",{},[`
`,e("li",{},["Before releasing"]),`
`,e("li",{},["Build command"]),`
`,e("li",{},["Optimizations"]),`
`,e("li",{},["Cross-platform support"]),`
`])]),config:void 0});const i={setup(){return()=>e(a,{pages:n,theme:t})}};i.__hmrId="50a4355e";i.__file="/home/runner/work/yxonic.github.io/yxonic.github.io/src/slides/bevy.page.mdx";export{i as default,c as frontmatter,n as pages};
