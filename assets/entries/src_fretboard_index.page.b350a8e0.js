import{v as $}from"../chunks/chunk-deda75e7.js";import{s as I,L as v,R as O,N as V,t as r,u as l,x as o,F as y,y as _,D as w,A as Q,S as Y,B as N,T as Z,v as M,U as B,E as G}from"../chunks/chunk-23d6161b.js";import{_ as q}from"../chunks/chunk-c27b6911.js";function L(b,t){if(!b)throw Error(t)}const tt=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],et=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];class U{constructor(t,a){this.name=t,this.pitch=a||0}transpose(t,a){let u=this.name.slice(0,-1),d=Number(this.name.slice(-1));const p=a?et:tt;let c=p.indexOf(u);for(let h=0;h<t;h++)c=(c+1)%12,c===0&&d++;return new U(p[c]+String(d))}}class st{constructor(t,a,u,d,p){this.string=t,this.fret=a,this.tag=u,this.fg=d,this.bg=p}}const rt={guitar6:["E2","A2","D3","G3","B3","E4"],guitar7:["B1","E2","A2","D3","G3","B3","E4"],guitarDropD:["D2","A2","D3","G3","B3","E4"],bass4:["E1","A1","D2","G2"],bass5:["B0","E1","A1","D2","G2"],ukulele:["G4","C4","E4","A4"]},R={guitar6:[10,13,17,26,36,46],guitar7:[10,13,17,26,36,46,59],guitarDropD:[10,13,17,26,36,46],bass4:[45,65,80,100],bass5:[45,65,80,100,130],ukulele:[14,16,20,14]};class H{constructor(t){this.reverseStrings=!1,this.svgHeight=t.height,this.svgWidth=t.width,this.stringGauges=t.stringHasWidth?R[t.instrument]:void 0,this.strings=R[t.instrument].length,this.fretless=!!t.fretless,this.minFret=t.minFret??0,this.maxFret=t.maxFret??24,this.evenFactor=t.evenFactor??0;const a=t.padX??10,u=t.padY??10,d=t.nutWidth??0;L(this.minFret<=this.maxFret,"must contain at least one fret"),this.offsetX=a,this.minFret===0&&(this.offsetX+=d),this.scaleLength=1;const p=this.minFret>0?this.minFret-1:0,c=this.maxFret;this.frets=Array.from({length:c-p+1},(x,S)=>S+p);const h=this.getFretX(p),f=this.getFretX(c);let e=this.svgWidth-this.offsetX-a;L(e>10,"svg too small"),this.scaleLength=e/(f-h),this.offsetX-=this.getFretX(p,0),this.stringY=[];let m=u;const F=this.stringGauges?this.stringGauges.slice(0,this.strings).map(x=>Math.sqrt(x)).reduce((x,S)=>x+S):0;this.stringGap=(this.svgHeight-2*u-F)/(this.strings-1);for(let x=0;x<this.strings;++x)this.stringY.push(m),this.stringGauges&&(m+=Math.sqrt(this.stringGauges[x])),m+=this.stringGap;t.reverseStrings&&(this.reverseStrings=!0,this.stringY=this.stringY.reverse())}getFretX(t,a){if(a===void 0&&(a=this.offsetX),this.evenFactor>=.95)return this.scaleLength*.5/12*t+a;const u=.5*this.scaleLength/(1-1/(2-this.evenFactor));return u-u/(2-this.evenFactor)**(t/12)+a}getFretSpaceX(t){return(this.getFretX(t)+this.getFretX(t-1)+4)/2}getNoteX(t){return this.fretless||t===0?this.getFretX(t):this.getFretSpaceX(t)}getStringY(t){return this.stringY[t-1]}getStringSpaceY(t){return this.getStringY(t)+(this.stringGauges?Math.sqrt(this.stringGauges[t-1]):0)+this.stringGap/2}getNoteY(t){return this.stringY[t-1]+(this.stringGauges?Math.sqrt(this.stringGauges[t-1])/2:0)}getNoteFromPos(t,a){let u=this.frets[0]-1,d=this.frets[this.frets.length-1]+1;for(;u<d-1;){let h=Math.floor((u+d)/2);(this.fretless?this.getFretSpaceX(h+1)>t:this.getFretX(h)>t)?d=h:u=h}const p=d;if(p<this.minFret||p>this.maxFret)return;for(u=0,d=this.strings+1;u<d-1;){let h=Math.floor((u+d)/2);(this.reverseStrings?this.getStringSpaceY(h)<a:this.getStringSpaceY(h)>a)?d=h:u=h}const c=this.reverseStrings?u:d;if(!(c<1||c>this.strings))return{string:c,fret:p}}}class P{constructor(t){this.tuning=[],this.useFlats=!1,this.tags={},this.setInstrument(t.instrument),this.setTags(t.tags),t.useFlats!==void 0&&(this.useFlats=t.useFlats),this.colorMap=t.colorMap??{default:{fg:"black",bg:"white"},highlight:{fg:"white",bg:"black"},inactive:{fg:"black",bg:"#999999"},selected:{fg:"white",bg:"#dd0000"}}}setInstrument(t){this.tuning=rt[t],this.useFlats=this.tuning.filter(a=>a.includes("b")).length>0}setTags(t){this.tags=Object.fromEntries((t??[]).map(a=>[[a.string,a.fret],a]))}getNoteTag(t,a,u="default"){const d=this.tuning[this.tuning.length-t],c=new U(d).transpose(a,this.useFlats).name.slice(0,-1),{fg:h,bg:f}=this.colorMap[u];return new st(t,a,c,h,f)}getAllTags(){return Object.values(this.tags).filter(({string:t})=>t<=this.tuning.length).map(t=>this.getNoteTag(t.string,t.fret,t.style))}setTag(t,a,u="default"){this.tags[String([t,a])]={string:t,fret:a,style:u}}removeTag(t,a){delete this.tags[String([t,a])]}toggleTag(t,a){const u=this.tags[String([t,a])];u===void 0?this.setTag(t,a,"default"):u.style===void 0||u.style==="default"?u.style="highlight":this.removeTag(t,a)}}const lt=["height","width","viewBox"],at=Q('<linearGradient id="board" x1="0" y1="100%" x2="0" y2="0" data-v-6db9a4d8><stop offset="0%" stop-color="#100" data-v-6db9a4d8></stop><stop offset="0.8%" stop-color="#877" data-v-6db9a4d8></stop><stop offset="1.6%" stop-color="#402028" data-v-6db9a4d8></stop><stop offset="98.5%" stop-color="#644" data-v-6db9a4d8></stop><stop offset="99.5%" stop-color="#988" data-v-6db9a4d8></stop><stop offset="100%" stop-color="#402028" data-v-6db9a4d8></stop></linearGradient><filter id="shadow" x="-20%" y="-20%" width="200%" height="200%" data-v-6db9a4d8><feOffset result="offOut" in="SourceAlpha" dx="0" dy="5" data-v-6db9a4d8></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" data-v-6db9a4d8></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal" data-v-6db9a4d8></feBlend></filter><linearGradient id="box-short" x1="0" y1="100%" x2="0" y2="0" data-v-6db9a4d8><stop offset="0%" stop-color="#332" data-v-6db9a4d8></stop><stop offset="8%" stop-color="#bba" data-v-6db9a4d8></stop><stop offset="95%" stop-color="#bba" data-v-6db9a4d8></stop><stop offset="100%" stop-color="#ddc" data-v-6db9a4d8></stop></linearGradient><linearGradient id="box-long" x1="0" y1="100%" x2="0" y2="0" data-v-6db9a4d8><stop offset="0%" stop-color="#332" data-v-6db9a4d8></stop><stop offset="3%" stop-color="#bba" data-v-6db9a4d8></stop><stop offset="98%" stop-color="#bba" data-v-6db9a4d8></stop><stop offset="100%" stop-color="#ddc" data-v-6db9a4d8></stop></linearGradient><linearGradient id="fret" x1="0" y1="0" x2="100%" y2="0" data-v-6db9a4d8><stop offset="0%" stop-color="#000" data-v-6db9a4d8></stop><stop offset="50%" stop-color="#ccc" data-v-6db9a4d8></stop><stop offset="100%" stop-color="#888" data-v-6db9a4d8></stop></linearGradient><linearGradient id="string" x1="0" y1="100%" x2="0" y2="0" data-v-6db9a4d8><stop offset="0%" stop-color="#000" data-v-6db9a4d8></stop><stop offset="50%" stop-color="#eee" data-v-6db9a4d8></stop><stop offset="100%" stop-color="#aaa" data-v-6db9a4d8></stop></linearGradient>',6),it=["id","height"],nt=["height"],ot={x:"0"},ut=["width","height"],gt={key:0},ct=["cx","cy"],dt={key:1},ht=["cx","cy"],ft=["cx","cy"],vt={key:1},pt=["cx","cy"],mt={key:1},yt=["cx","cy"],_t=["cx","cy"],xt={key:2},Ft=["width","height","x"],bt=["width","height"],St=["d"],kt=["d"],wt={filter:"url(#shadow)"},Xt=["y"],Yt=["width","height","fill"],$t=["x"],Bt=["height","width"],Gt=["y","height","width"],Nt=["y","height","width"],Mt=["cx","cy","fill"],Tt=["x","y","fill","stroke"],Dt=40,z=40,E=20,X=6,Wt=35,zt=I({__name:"FB",props:{width:{default:1500},height:{default:200},scale:{default:1},instrument:{default:"bass4"},useFlats:{type:Boolean},minFret:{default:0},maxFret:{default:24},evenFactor:{default:0},nutWidth:{default:40},fretSize:{default:10},marker:{type:Boolean,default:!0},fretless:{type:Boolean,default:!1},tags:{}},setup(b){const t=b,a=[3,5,7,9,12,15,17,19,21,24],u=v(()=>f.value.strings),d=v(()=>t.height),p=v(()=>t.width),c=v(()=>2*t.height/t.scale),h=v(()=>2*t.width/t.scale),f=v(()=>new H({width:h.value,height:c.value,instrument:t.instrument,minFret:t.minFret,maxFret:t.maxFret,padX:Dt,padY:z,nutWidth:t.nutWidth,evenFactor:t.evenFactor,stringHasWidth:!0,fretless:t.fretless})),e=O(new P({instrument:t.instrument,useFlats:t.useFlats,tags:t.tags}));V([()=>t.instrument,()=>t.useFlats],()=>{e.value.setInstrument(t.instrument),t.useFlats!==void 0&&(e.value.useFlats=t.useFlats),Y(e)});const m=v(()=>e.value.getAllTags().map(n=>({...n,x:f.value.getNoteX(n.fret),y:f.value.getNoteY(n.string)})));function F(n){let s=f.value.stringGauges[n-1];return Math.sqrt(s)}function x(n,s){return n=n/p.value*h.value,s=s/d.value*c.value,f.value.getNoteFromPos(n,s)}function S(n){if(!(n!=null&&n.currentTarget))return;const s=n.currentTarget.getBoundingClientRect(),g=n.clientX-s.left,k=n.clientY-s.top,W=x(g,k);W!==void 0&&(e.value.toggleTag(W.string,W.fret),Y(e))}function i(n,s){}return(n,s)=>(r(),l("div",null,[(r(),l("svg",{height:d.value,width:p.value,viewBox:"0 0 "+h.value+" "+c.value,class:"select-none",onClick:S,onMousemove:s[0]||(s[0]=g=>(g.offsetX,g.offsetY,void 0))},[o("defs",null,[at,(r(!0),l(y,null,_(f.value.strings,g=>(r(),l("pattern",{id:"ring"+g,width:"3",height:F(g),patternUnits:"userSpaceOnUse"},[o("rect",{x:"0",y:"0",width:"3",height:F(g),fill:"url(#string)",stroke:"#333"},null,8,nt)],8,it))),256))]),(r(),l("svg",ot,[o("rect",{width:h.value,height:c.value,fill:"url(#board)"},null,8,ut)])),(r(),l("svg",null,[!n.fretless&&n.marker?(r(),l("svg",gt,[(r(),l(y,null,_(a,g=>o("g",null,[g%12!==0?(r(),l("circle",{key:0,cx:f.value.getFretSpaceX(g),cy:c.value/2,r:E,fill:"#ddd"},null,8,ct)):(r(),l("g",dt,[o("circle",{cx:f.value.getFretSpaceX(g),cy:c.value*.25,r:E,fill:"#ddd"},null,8,ht),o("circle",{cx:f.value.getFretSpaceX(g),cy:c.value*.75,r:E,fill:"#ddd"},null,8,ft)]))])),64))])):w("",!0),n.fretless&&n.marker?(r(),l("svg",vt,[(r(),l(y,null,_(a,g=>o("g",null,[g%12!==0?(r(),l("circle",{key:0,cx:f.value.getFretX(g),cy:c.value-X-10,r:X,fill:"#ddd"},null,8,pt)):(r(),l("g",mt,[o("circle",{cx:f.value.getFretX(g)-X*2,cy:c.value-X-10,r:X,fill:"#ddd"},null,8,yt),o("circle",{cx:f.value.getFretX(g)+X*2,cy:c.value-X-10,r:X,fill:"#ddd"},null,8,_t)]))])),64))])):w("",!0),n.fretless?w("",!0):(r(),l("svg",xt,[(r(),l(y,null,_(24,g=>o("svg",{width:n.fretSize,height:c.value,x:f.value.getFretX(g)-n.fretSize/2},[o("rect",{width:n.fretSize,height:c.value,fill:"url(#fret)"},null,8,bt),o("path",{fill:"#ccc",d:"M0,0 C0,10 "+n.fretSize+",10 "+n.fretSize+",0"},null,8,St),o("path",{fill:"#888",d:"M0,"+c.value+" C0,"+(c.value-10)+" "+n.fretSize+","+(c.value-10)+" "+n.fretSize+","+c.value},null,8,kt)],8,Ft)),64))]))])),(r(),l("svg",wt,[(r(!0),l(y,null,_(f.value.strings,g=>(r(),l("svg",{y:f.value.getStringY(g)},[o("rect",{width:h.value,height:F(g),fill:F(g)>5?"url(#ring"+g+")":"url(#string)"},null,8,Yt)],8,Xt))),256))])),(r(),l("svg",{x:f.value.offsetX-n.nutWidth},[o("rect",{y:"0",height:z-2,fill:"url(#box-short)",width:n.nutWidth,rx:"5",ry:"5"},null,8,Bt),(r(!0),l(y,null,_(u.value-1,g=>(r(),l("rect",{y:f.value.getStringY(g)+F(g)+4,height:f.value.stringGap-8,fill:"url(#box-long)",width:n.nutWidth,rx:"5",ry:"5"},null,8,Gt))),256)),o("rect",{y:f.value.getStringY(u.value)+F(u.value)+4,height:z-6,fill:"url(#box-short)",width:n.nutWidth,rx:"5",ry:"5"},null,8,Nt)],8,$t)),(r(!0),l(y,null,_(m.value,g=>(r(),l("g",null,[o("circle",{cx:g.x,cy:g.y,r:Wt,fill:g.bg,filter:"url(#shadow)"},null,8,Mt),o("text",{x:g.x,y:g.y+12,"text-anchor":"middle",fill:g.fg,stroke:g.fg,style:{"font-size":"36px",cursor:"default"}},N(g.tag),9,Tt)]))),256))],40,lt))]))}});const j=q(zt,[["__scopeId","data-v-6db9a4d8"]]),Et=["height","width","viewBox"],Ct=["x1","x2","y1","y2"],At={key:0},It=["x"],Ot=["y1","y2"],Vt={key:1},qt=["x","y"],Ut={key:2},Ht=["cx","cy"],Pt={key:1},Lt=["cx","cy"],Rt=["cx","cy"],jt=["x1","x2","y1","y2"],Jt=["cx","cy","r","fill"],Kt=["cx","cy","fill"],Qt=["x","y","fill","stroke"],Zt=40,te=80,T=30,C=20,J=30,ee=I({__name:"FBDiagram",props:{width:{default:1500},height:{default:200},scale:{default:1},instrument:{default:"bass4"},useFlats:{type:Boolean},minFret:{default:0},maxFret:{default:24},evenFactor:{default:1},marker:{type:Boolean,default:!0},fretNote:{type:Boolean,default:!0},fretless:{type:Boolean,default:!1},tags:{}},setup(b){const t=b,a=v(()=>e.value.strings),u=v(()=>e.value.frets),d=v(()=>t.height),p=v(()=>t.width),c=v(()=>2*t.height/t.scale),h=v(()=>2*t.width/t.scale),f=v(()=>[3,5,7,9,12,15,17,19,21,24].filter(i=>i>=t.minFret&&i<=t.maxFret)),e=v(()=>new H({width:h.value,height:c.value,instrument:t.instrument,minFret:t.minFret,maxFret:t.maxFret,padX:Zt,padY:te,nutWidth:T,evenFactor:t.evenFactor,fretless:t.fretless})),m=O(new P({instrument:t.instrument,useFlats:t.useFlats,tags:t.tags}));V([()=>t.instrument,()=>t.useFlats],()=>{m.value.setInstrument(t.instrument),t.useFlats!==void 0&&(m.value.useFlats=t.useFlats),Y(m)});const F=v(()=>m.value.getAllTags().map(i=>({...i,x:e.value.getNoteX(i.fret),y:e.value.getNoteY(i.string)})));function x(i,n){return i=i/p.value*h.value,n=n/d.value*c.value,e.value.getNoteFromPos(i,n)}function S(i){if(!(i!=null&&i.currentTarget))return;const n=i.currentTarget.getBoundingClientRect(),s=i.clientX-n.left,g=i.clientY-n.top,k=x(s,g);k!==void 0&&(m.value.toggleTag(k.string,k.fret),Y(m))}return(i,n)=>(r(),l("div",null,[(r(),l("svg",{height:d.value,width:p.value,viewBox:"0 0 "+h.value+" "+c.value,class:"select-none",onClick:S},[(r(),l("svg",null,[o("line",{x1:e.value.getFretX(0)-T/2+4,x2:e.value.getFretX(0)-T/2+4,y1:e.value.getStringY(1)-2,y2:e.value.getStringY(a.value)+2,stroke:"black","stroke-width":T},null,8,Ct)])),i.fretless?w("",!0):(r(),l("g",At,[(r(!0),l(y,null,_(u.value,s=>(r(),l("svg",{x:e.value.getFretX(s)},[o("line",{x1:"0",x2:"0",y1:e.value.getStringY(1)-2,y2:e.value.getStringY(a.value)+2,stroke:"black","stroke-width":8},null,8,Ot)],8,It))),256))])),i.fretNote&&i.minFret>1?(r(),l("g",Vt,[o("text",{x:e.value.getNoteX(i.minFret),y:e.value.getStringY(1)-30,"text-anchor":"middle",style:{"font-size":"48px","font-style":"italic"}},N(i.minFret)+" fr ",9,qt)])):w("",!0),i.marker&&!i.fretless?(r(),l("svg",Ut,[(r(!0),l(y,null,_(f.value,s=>(r(),l("g",null,[s%12!==0?(r(),l("circle",{key:0,cx:e.value.getFretSpaceX(s),cy:e.value.getStringSpaceY(Math.ceil(a.value/2)),r:C},null,8,Ht)):(r(),l("g",Pt,[o("circle",{cx:e.value.getFretSpaceX(s),cy:e.value.getStringSpaceY(Math.ceil(Math.sqrt(a.value-1)-1)),r:C},null,8,Lt),o("circle",{cx:e.value.getFretSpaceX(s),cy:e.value.getStringSpaceY(a.value-Math.ceil(Math.sqrt(a.value-1)-1)),r:C},null,8,Rt)]))]))),256))])):w("",!0),(r(),l("svg",null,[(r(!0),l(y,null,_(a.value,s=>(r(),l("line",{x1:e.value.getFretX(0),x2:e.value.getFretX(25),y1:e.value.getStringY(s),y2:e.value.getStringY(s),stroke:"black","stroke-width":4},null,8,jt))),256))])),(r(!0),l(y,null,_(F.value,s=>(r(),l("g",null,[o("circle",{cx:s.x,cy:s.y,r:J+4,fill:s.fg},null,8,Jt),o("circle",{cx:s.x,cy:s.y,r:J,fill:s.bg},null,8,Kt),o("text",{x:s.x,y:s.y+12,"text-anchor":"middle",fill:s.fg,stroke:s.fg,style:{"font-size":"36px",cursor:"default"}},N(s.tag),9,Qt)]))),256))],8,Et))]))}});const se=q(ee,[["__scopeId","data-v-bdb7170b"]]),re=["height","width","viewBox"],le=["y1","y2","x1","x2"],ae={key:0},ie=["y"],ne=["x1","x2"],oe={key:1},ue=["y","x"],ge={key:2},ce=["cy","cx"],de={key:1},he=["cy","cx"],fe=["cy","cx"],ve=["y1","y2","x1","x2"],pe=["cx","cy","r","fill"],me=["cx","cy","fill"],ye=["y","x","fill","stroke"],_e=20,xe=80,D=30,A=20,K=30,Fe=I({__name:"ChordDiagram",props:{width:{default:1500},height:{default:200},scale:{default:1},instrument:{default:"bass4"},useFlats:{type:Boolean},minFret:{default:0},maxFret:{default:24},evenFactor:{default:1},marker:{type:Boolean,default:!0},fretNote:{type:Boolean,default:!0},fretless:{type:Boolean,default:!1},tags:{}},setup(b){const t=b,a=v(()=>e.value.strings),u=v(()=>e.value.frets),d=v(()=>t.height),p=v(()=>t.width),c=v(()=>2*t.height/t.scale),h=v(()=>2*t.width/t.scale),f=v(()=>[3,5,7,9,12,15,17,19,21,24].filter(i=>i>=t.minFret&&i<=t.maxFret)),e=v(()=>new H({width:c.value,height:h.value,instrument:t.instrument,minFret:t.minFret,maxFret:t.maxFret,padX:_e,padY:xe,nutWidth:D,evenFactor:t.evenFactor,fretless:t.fretless,reverseStrings:!0})),m=O(new P({instrument:t.instrument,useFlats:t.useFlats,tags:t.tags}));V([()=>t.instrument,()=>t.useFlats],()=>{m.value.setInstrument(t.instrument),t.useFlats!==void 0&&(m.value.useFlats=t.useFlats),Y(m)});const F=v(()=>m.value.getAllTags().map(i=>({...i,x:e.value.getNoteX(i.fret),y:e.value.getNoteY(i.string)})));function x(i,n){return i=i/p.value*h.value,n=n/d.value*c.value,e.value.getNoteFromPos(n,i)}function S(i){if(!(i!=null&&i.currentTarget))return;const n=i.currentTarget.getBoundingClientRect(),s=i.clientX-n.left,g=i.clientY-n.top,k=x(s,g);k!==void 0&&(m.value.toggleTag(k.string,k.fret),Y(m))}return(i,n)=>(r(),l("div",null,[(r(),l("svg",{height:d.value,width:p.value,viewBox:"0 0 "+h.value+" "+(c.value+4),class:"select-none",onClick:S},[(r(),l("svg",null,[o("line",{y1:e.value.getFretX(0)-D/2+4,y2:e.value.getFretX(0)-D/2+4,x1:e.value.getStringY(1)+2,x2:e.value.getStringY(a.value)-2,stroke:"black","stroke-width":D},null,8,le)])),i.fretless?w("",!0):(r(),l("g",ae,[(r(!0),l(y,null,_(u.value,s=>(r(),l("svg",{y:e.value.getFretX(s)},[o("line",{y1:"0",y2:"0",x1:e.value.getStringY(1)+2,x2:e.value.getStringY(a.value)-2,stroke:"black","stroke-width":8},null,8,ne)],8,ie))),256))])),i.fretNote&&i.minFret>1?(r(),l("g",oe,[o("text",{y:e.value.getNoteX(i.minFret)+8,x:e.value.getStringY(1)+40,"text-anchor":"middle",style:{"font-size":"42px","font-style":"italic"}},N(i.minFret)+" fr ",9,ue)])):w("",!0),i.marker?(r(),l("svg",ge,[(r(!0),l(y,null,_(f.value,s=>(r(),l("g",null,[s%12!==0?(r(),l("circle",{key:0,cy:e.value.getFretSpaceX(s),cx:e.value.getStringSpaceY(Math.ceil(a.value/2)),r:A},null,8,ce)):(r(),l("g",de,[o("circle",{cy:e.value.getFretSpaceX(s),cx:e.value.getStringSpaceY(Math.ceil(Math.sqrt(a.value-1)-1)),r:A},null,8,he),o("circle",{cy:e.value.getFretSpaceX(s),cx:e.value.getStringSpaceY(a.value-Math.ceil(Math.sqrt(a.value-1)-1)),r:A},null,8,fe)]))]))),256))])):w("",!0),(r(),l("svg",null,[(r(!0),l(y,null,_(a.value,s=>(r(),l("line",{y1:e.value.getFretX(e.value.frets[0]),y2:e.value.getFretX(i.maxFret),x1:e.value.getStringY(s),x2:e.value.getStringY(s),stroke:"black","stroke-width":4},null,8,ve))),256))])),(r(!0),l(y,null,_(F.value,s=>(r(),l("g",null,[o("circle",{cx:s.y,cy:s.x,r:K+4,fill:s.fg},null,8,pe),o("circle",{cx:s.y,cy:s.x,r:K,fill:s.bg},null,8,me),o("text",{y:s.x+12,x:s.y,"text-anchor":"middle",fill:s.fg,stroke:s.fg,style:{"font-size":"36px",cursor:"default"}},N(s.tag),9,ye)]))),256))],8,re))]))}});const be=q(Fe,[["__scopeId","data-v-c11e942a"]]),Se={class:"fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll py-20"},ke={class:"max-w-screen-lg mx-auto"},we={class:"overflow-x-scroll pb-8"},Xe={class:"mt-8 flex justify-center space-x-4"},Ye={class:"mt-12 mx-4 flex flex-wrap justify-center items-center"},Ne={title:"Fretboard Demo"},Me={__name:"index.page",setup(b){const t=Z({moreStrings:!1,useFlats:!1,fretless:!1,isEven:!1,marker:!0});return(a,u)=>(r(),l("article",Se,[o("div",ke,[o("div",we,[M(j,{fretless:t.fretless,"even-factor":t.isEven?.8:0,marker:t.marker,instrument:t.moreStrings?"guitar6":"bass4","use-flats":t.useFlats,class:"shadow-gray-500 shadow-lg"},null,8,["fretless","even-factor","marker","instrument","use-flats"])]),o("div",Xe,[o("label",null,[B(o("input",{type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=d=>t.moreStrings=d)},null,512),[[$,t.moreStrings]]),G(" more strings ")]),o("label",null,[B(o("input",{type:"checkbox","onUpdate:modelValue":u[1]||(u[1]=d=>t.useFlats=d)},null,512),[[$,t.useFlats]]),G(" sharp/flat ")]),o("label",null,[B(o("input",{type:"checkbox","onUpdate:modelValue":u[2]||(u[2]=d=>t.fretless=d)},null,512),[[$,t.fretless]]),G(" fretless ")]),o("label",null,[B(o("input",{type:"checkbox","onUpdate:modelValue":u[3]||(u[3]=d=>t.isEven=d)},null,512),[[$,t.isEven]]),G(" even fret space ")]),o("label",null,[B(o("input",{type:"checkbox","onUpdate:modelValue":u[4]||(u[4]=d=>t.marker=d)},null,512),[[$,t.marker]]),G(" marker ")])])]),o("div",Ye,[M(be,{class:"p-10",height:140,width:180,scale:.8,"max-fret":3,instrument:"guitar6","use-flats":t.useFlats,marker:!1,tags:[{string:5,fret:3,style:"highlight"},{string:4,fret:2,style:"default"},{string:3,fret:0,style:"default"},{string:2,fret:1,style:"highlight"},{string:1,fret:0,style:"default"}]},null,8,["use-flats"]),M(se,{class:"p-10",height:180,width:300,scale:.72,"min-fret":5,"max-fret":12,instrument:"guitar6","use-flats":t.useFlats,fretless:t.fretless,marker:t.marker,tags:[{string:6,fret:5,style:"highlight"},{string:6,fret:8},{string:5,fret:7},{string:4,fret:5},{string:4,fret:7,style:"highlight"},{string:4,fret:10},{string:3,fret:9},{string:3,fret:12},{string:2,fret:10,style:"highlight"},{string:1,fret:8},{string:1,fret:12}]},null,8,["use-flats","fretless","marker"]),M(j,{class:"p-10",height:150,width:200,scale:.9,"min-fret":3,"max-fret":5,"use-flats":t.useFlats,fretless:t.fretless,marker:t.marker,tags:[{string:4,fret:3},{string:3,fret:5,style:"highlight"},{string:2,fret:5}]},null,8,["use-flats","fretless","marker"])])]))}};export{Me as default,Ne as frontmatter};
