import{v as k}from"../chunks/chunk-26edff3a.js";import{s as z,y as d,t as s,u as r,x as o,F as m,z as y,A as F,B as C,C as D,D as N,v as w,E as S,G as b}from"../chunks/chunk-d006c356.js";function E(x,t){if(!x)throw Error(t)}const V=["C","C#","D","D#","E","F","F#","G","G#","A"],O=["C","Db","D","Eb","E","F","Gb","G","Ab","A"];class W{constructor(t,a,l,h){this.name=t,this.pitch=a||0,this.x=l||0,this.y=h||0}transpose(t,a){let l=this.name.slice(0,-1),h=Number(this.name.slice(-1));const g=a?O:V;let n=g.indexOf(l);for(let f=0;f<t;f++)n=(n+1)%12,n===0&&h++;return g[n]+String(h)}}const H={guitar6:["E2","A2","D3","G3","B3","E4"],guitar7:["B1","E2","A2","D3","G3","B3","E4"],guitarDropD:["D2","A2","D3","G3","B3","E4"],bass4:["E1","A1","D2","G2"],bass5:["B0","E1","A1","D2","G2"],ukulele:["C4","G3","E3","A2"]},U={guitar6:[10,13,17,26,36,46],guitar7:[10,13,17,26,36,46,59],guitarDropD:[10,13,17,26,36,46],bass4:[45,65,80,100],bass5:[45,65,80,100,130],ukulele:[28,32,40,28]};class A{constructor(t){this.svgHeight=t.height,this.svgWidth=t.width,this.tuning=H[t.instrument],this.useFlats=this.tuning.filter(i=>i.includes("b")).length>0,this.stringGauges=t.stringHasWidth?U[t.instrument]:void 0,this.strings=this.tuning.length,this.fretless=!!t.fretless,this.minFret=t.minFret??0,this.maxFret=t.maxFret??24,this.evenFactor=t.evenFactor??0;const a=t.padX??10,l=t.padY??10,h=t.nutWidth??0;E(this.minFret<=this.maxFret,"must contain at least one fret"),this.offsetX=a,this.minFret===0&&(this.offsetX+=h),this.scaleLength=1;const g=this.minFret>0?this.minFret-1:0,n=this.maxFret;this.frets=Array.from({length:n-g+1},(i,p)=>p+g);const f=this.getFretX(g),u=this.getFretX(n);let v=this.svgWidth-this.offsetX-a;E(v>10,"svg too small"),this.scaleLength=v/(u-f),this.offsetX-=this.getFretX(g,0),this.stringY=[];let e=l;const c=this.stringGauges?this.stringGauges.slice(0,this.strings).map(i=>Math.sqrt(i)).reduce((i,p)=>i+p):0;this.stringGap=(this.svgHeight-2*l-c)/(this.strings-1);for(let i=0;i<this.strings;++i)this.stringY.push(e),this.stringGauges&&(e+=Math.sqrt(this.stringGauges[i])),e+=this.stringGap}getFretX(t,a){if(a===void 0&&(a=this.offsetX),this.evenFactor>=.95)return this.scaleLength*.5/12*t+a;const l=.5*this.scaleLength/(1-1/(2-this.evenFactor));return l-l/(2-this.evenFactor)**(t/12)+a}getStringY(t){return this.stringY[t-1]}getFretSpaceX(t){return(this.getFretX(t)+this.getFretX(t-1))/2}getStringSpaceY(t){return this.getStringY(t)+this.stringGap/2}getNote(t,a){const l=this.tuning[this.strings-t],h=this.fretless?this.getFretX(a):this.getFretSpaceX(a),g=this.getStringY(t),n=new W(l).transpose(a,this.useFlats);return new W(n,0,h,g)}}const q=["height","width","viewBox"],L=C('<linearGradient id="board" x1="0" y1="100%" x2="0" y2="0"><stop offset="0%" stop-color="#100"></stop><stop offset="0.8%" stop-color="#877"></stop><stop offset="1.6%" stop-color="#402028"></stop><stop offset="98.5%" stop-color="#644"></stop><stop offset="99.5%" stop-color="#988"></stop><stop offset="100%" stop-color="#402028"></stop></linearGradient><filter id="shadow" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceAlpha" dx="0" dy="5"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="5"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter><linearGradient id="box-short" x1="0" y1="100%" x2="0" y2="0"><stop offset="0%" stop-color="#332"></stop><stop offset="8%" stop-color="#bba"></stop><stop offset="95%" stop-color="#bba"></stop><stop offset="100%" stop-color="#ddc"></stop></linearGradient><linearGradient id="box-long" x1="0" y1="100%" x2="0" y2="0"><stop offset="0%" stop-color="#332"></stop><stop offset="3%" stop-color="#bba"></stop><stop offset="98%" stop-color="#bba"></stop><stop offset="100%" stop-color="#ddc"></stop></linearGradient><linearGradient id="fret" x1="0" y1="0" x2="100%" y2="0"><stop offset="0%" stop-color="#000"></stop><stop offset="50%" stop-color="#ccc"></stop><stop offset="100%" stop-color="#888"></stop></linearGradient><linearGradient id="string" x1="0" y1="100%" x2="0" y2="0"><stop offset="0%" stop-color="#000"></stop><stop offset="50%" stop-color="#eee"></stop><stop offset="100%" stop-color="#aaa"></stop></linearGradient>',6),j=["id","height"],I=["height"],T={x:"0"},J=["width","height"],K={key:0},P=["cx","cy"],Q={key:1},R=["cx","cy"],Z=["cx","cy"],tt={key:1},et=["cx","cy"],st={key:1},rt=["cx","cy"],it=["cx","cy"],lt={key:2},ot=["width","height","x"],nt=["width","height"],at=["d"],ut=["d"],ht={filter:"url(#shadow)"},ct=["y"],dt=["width","height","fill"],gt=["x"],ft=["height","width"],pt=["y","height","width"],vt=["y","height","width"],mt=40,G=40,B=20,_=6,$=z({__name:"FB",props:{width:{default:1500},height:{default:200},scale:{default:1},instrument:{default:"bass4"},minFret:{default:0},maxFret:{default:24},evenFactor:{default:0},nutWidth:{default:40},fretSize:{default:10},marker:{type:Boolean,default:!0},fretless:{type:Boolean,default:!1}},setup(x){const t=x,a=[3,5,7,9,12,15,17,19,21,24],l=d(()=>u.value.strings),h=d(()=>t.height),g=d(()=>t.width),n=d(()=>400/t.scale),f=d(()=>n.value/t.height*t.width),u=d(()=>new A({width:f.value,height:n.value,instrument:t.instrument,minFret:t.minFret,maxFret:t.maxFret,padX:mt,padY:G,nutWidth:t.nutWidth,evenFactor:t.evenFactor,stringHasWidth:!0,fretless:t.fretless}));function v(e){let c=u.value.stringGauges[e-1];return Math.sqrt(c)}return(e,c)=>(s(),r("svg",{height:h.value,width:g.value,viewBox:"0 0 "+f.value+" "+n.value},[o("defs",null,[L,(s(!0),r(m,null,y(u.value.strings,i=>(s(),r("pattern",{id:"ring"+i,width:"3",height:v(i),patternUnits:"userSpaceOnUse"},[o("rect",{x:"0",y:"0",width:"3",height:v(i),fill:"url(#string)",stroke:"#333"},null,8,I)],8,j))),256))]),(s(),r("svg",T,[o("rect",{width:f.value,height:n.value,fill:"url(#board)"},null,8,J)])),(s(),r("svg",null,[!e.fretless&&e.marker?(s(),r("svg",K,[(s(),r(m,null,y(a,i=>o("g",null,[i%12!==0?(s(),r("circle",{key:0,cx:u.value.getFretSpaceX(i),cy:n.value/2,r:B,fill:"#ddd"},null,8,P)):(s(),r("g",Q,[o("circle",{cx:u.value.getFretSpaceX(i),cy:n.value*.25,r:B,fill:"#ddd"},null,8,R),o("circle",{cx:u.value.getFretSpaceX(i),cy:n.value*.75,r:B,fill:"#ddd"},null,8,Z)]))])),64))])):F("",!0),e.fretless&&e.marker?(s(),r("svg",tt,[(s(),r(m,null,y(a,i=>o("g",null,[i%12!==0?(s(),r("circle",{key:0,cx:u.value.getFretX(i),cy:n.value-_-10,r:_,fill:"#ddd"},null,8,et)):(s(),r("g",st,[o("circle",{cx:u.value.getFretX(i)-_*2,cy:n.value-_-10,r:_,fill:"#ddd"},null,8,rt),o("circle",{cx:u.value.getFretX(i)+_*2,cy:n.value-_-10,r:_,fill:"#ddd"},null,8,it)]))])),64))])):F("",!0),e.fretless?F("",!0):(s(),r("svg",lt,[(s(),r(m,null,y(24,i=>o("svg",{width:e.fretSize,height:n.value,x:u.value.getFretX(i)-e.fretSize/2},[o("rect",{width:e.fretSize,height:n.value,fill:"url(#fret)"},null,8,nt),o("path",{fill:"#ccc",d:"M0,0 C0,10 "+e.fretSize+",10 "+e.fretSize+",0"},null,8,at),o("path",{fill:"#888",d:"M0,"+n.value+" C0,"+(n.value-10)+" "+e.fretSize+","+(n.value-10)+" "+e.fretSize+","+n.value},null,8,ut)],8,ot)),64))]))])),(s(),r("svg",ht,[(s(!0),r(m,null,y(u.value.strings,i=>(s(),r("svg",{y:u.value.getStringY(i)},[o("rect",{width:f.value,height:v(i),fill:v(i)>4?"url(#ring"+i+")":"url(#string)"},null,8,dt)],8,ct))),256))])),(s(),r("svg",{x:u.value.offsetX-e.nutWidth},[o("rect",{y:"0",height:G-2,fill:"url(#box-short)",width:e.nutWidth,rx:"5",ry:"5"},null,8,ft),(s(!0),r(m,null,y(l.value-1,i=>(s(),r("rect",{y:u.value.getStringY(i)+v(i)+4,height:u.value.stringGap-8,fill:"url(#box-long)",width:e.nutWidth,rx:"5",ry:"5"},null,8,pt))),256)),o("rect",{y:u.value.getStringY(l.value)+v(l.value)+4,height:G-6,fill:"url(#box-short)",width:e.nutWidth,rx:"5",ry:"5"},null,8,vt)],8,gt))],8,q))}}),yt=["height","width","viewBox"],xt=["x1","x2","y1","y2"],_t={key:0},Ft=["x"],kt=["y1","y2"],wt=["transform"],St=["x","y"],bt=["x","y"],Xt={key:2},Gt=["cx","cy"],Bt={key:1},Yt=["cx","cy"],Dt=["cx","cy"],Et=["x1","x2","y1","y2"],X=30,Y=20,Wt=40,M=z({__name:"FBDiagram",props:{width:{default:1500},height:{default:200},scale:{default:1},instrument:{default:"bass4"},minFret:{default:0},maxFret:{default:24},evenFactor:{default:1},marker:{type:Boolean,default:!0},fretless:{type:Boolean,default:!1},pad:{type:Boolean,default:!0},fretMarker:{type:Boolean,default:!0},rotateMarker:{type:Boolean,default:!1}},setup(x){const t=x,a=d(()=>t.pad?40:0),l=d(()=>e.value.strings),h=d(()=>e.value.frets),g=d(()=>t.height),n=d(()=>t.width),f=d(()=>400/t.scale),u=d(()=>f.value/t.height*t.width),v=d(()=>[3,5,7,9,12,15,17,19,21,24].filter(c=>c>=t.minFret&&c<=t.maxFret)),e=d(()=>new A({width:u.value,height:f.value,instrument:t.instrument,minFret:t.minFret,maxFret:t.maxFret,padX:a.value,padY:Wt,nutWidth:X,evenFactor:t.evenFactor,fretless:t.fretless}));return(c,i)=>(s(),r("svg",{height:g.value,width:n.value,viewBox:"0 0 "+u.value+" "+f.value},[(s(),r("svg",null,[o("line",{x1:e.value.getFretX(0)-X/2+4,x2:e.value.getFretX(0)-X/2+4,y1:e.value.getStringY(1)-2,y2:e.value.getStringY(l.value)+2,stroke:"black","stroke-width":X},null,8,xt)])),c.fretless?F("",!0):(s(),r("g",_t,[(s(!0),r(m,null,y(h.value,p=>(s(),r("svg",{x:e.value.getFretX(p)},[o("line",{x1:"0",x2:"0",y1:e.value.getStringY(1)-2,y2:e.value.getStringY(l.value)+2,stroke:"black","stroke-width":8},null,8,kt)],8,Ft))),256))])),c.fretMarker&&c.minFret>1?(s(),r("g",{key:1,transform:c.rotateMarker?"rotate(-90)":void 0},[c.rotateMarker?(s(),r("text",{key:1,x:e.value.getFretX(c.minFret-1)-10,y:e.value.getStringY(1),style:{"font-size":"42px","font-style":"italic"}},D(c.minFret)+" fr ",9,bt)):(s(),r("text",{key:0,x:e.value.getFretX(c.minFret-1)+4,y:e.value.getStringY(1)-30,style:{"font-size":"48px","font-style":"italic"}},D(c.minFret)+" fr ",9,St))],8,wt)):F("",!0),c.marker?(s(),r("svg",Xt,[(s(!0),r(m,null,y(v.value,p=>(s(),r("g",null,[p%12!==0?(s(),r("circle",{key:0,cx:e.value.getFretSpaceX(p),cy:e.value.getStringSpaceY(Math.ceil(l.value/2)),r:Y},null,8,Gt)):(s(),r("g",Bt,[o("circle",{cx:e.value.getFretSpaceX(p),cy:e.value.getStringSpaceY(Math.ceil(Math.sqrt(l.value-1)-1)),r:Y},null,8,Yt),o("circle",{cx:e.value.getFretSpaceX(p),cy:e.value.getStringSpaceY(l.value-Math.ceil(Math.sqrt(l.value-1)-1)),r:Y},null,8,Dt)]))]))),256))])):F("",!0),(s(),r("svg",null,[(s(!0),r(m,null,y(l.value,p=>(s(),r("line",{x1:e.value.getFretX(0),x2:e.value.getFretX(25),y1:e.value.getStringY(p),y2:e.value.getStringY(p),stroke:"black","stroke-width":4},null,8,Et))),256))]))],8,yt))}}),$t={class:"fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll py-20"},Mt={class:"max-w-screen-lg mx-auto"},zt={class:"overflow-x-scroll pb-8"},At={class:"mt-8 flex justify-center space-x-4"},Ct={class:"mt-12 mx-4 flex flex-wrap justify-center items-center"},Ot={title:"Fretboard Demo"},Ht={__name:"index.page",setup(x){const t=N({moreStrings:!1,fretless:!1,isEven:!1,marker:!0});return(a,l)=>(s(),r("article",$t,[o("div",Mt,[o("div",zt,[w($,{fretless:t.fretless,"even-factor":t.isEven?.8:0,marker:t.marker,instrument:t.moreStrings?"guitar6":"bass4",class:"shadow-gray-500 shadow-lg"},null,8,["fretless","even-factor","marker","instrument"])]),o("div",At,[o("label",null,[S(o("input",{type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=h=>t.moreStrings=h)},null,512),[[k,t.moreStrings]]),b(" more strings ")]),o("label",null,[S(o("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=h=>t.fretless=h)},null,512),[[k,t.fretless]]),b(" fretless ")]),o("label",null,[S(o("input",{type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=h=>t.isEven=h)},null,512),[[k,t.isEven]]),b(" even fret space ")]),o("label",null,[S(o("input",{type:"checkbox","onUpdate:modelValue":l[3]||(l[3]=h=>t.marker=h)},null,512),[[k,t.marker]]),b(" marker ")])])]),o("div",Ct,[w(M,{class:"p-10 transform rotate-90",height:180,width:120,"min-fret":3,"max-fret":5,instrument:"guitar6",marker:!1,pad:!1,"rotate-marker":!0}),w(M,{class:"p-10",height:150,width:300,"min-fret":0,"max-fret":7,instrument:"guitar6","fret-marker":!1}),w($,{class:"p-10",height:150,width:200,scale:1.2,"min-fret":3,"max-fret":5})])]))}};export{Ht as default,Ot as frontmatter};
