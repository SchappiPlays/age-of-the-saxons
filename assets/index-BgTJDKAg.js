var yd=Object.defineProperty;var Sd=(i,e,t)=>e in i?yd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var G=(i,e,t)=>Sd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Hn=(i,e,t)=>i<e?e:i>t?t:i,bd=(i,e,t)=>i===e?0:Hn((t-i)/(e-i),0,1),tn=(i,e,t)=>{const n=bd(i,e,t);return n*n*(3-2*n)},Ed=(i,e,t,n)=>{const s=t-i,r=n-e;return s*s+r*r},Ue=(i,e,t,n)=>Math.sqrt(Ed(i,e,t,n));function sn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function to(i,e,t){let n=t^Math.imul(i|0,668265261)^Math.imul(e|0,374761393);return n=Math.imul(n^n>>>15,625341585),n^=n>>>13,n>>>0}const di=(i,e,t)=>e+i()*(t-e),Ls=(i,e,t)=>Math.floor(e+i()*(t-e+1));function ra(i,e){return e[Math.floor(i()*e.length)]}function $s(i,e,t){return to(i,e,t)/4294967296}const jl=i=>i*i*(3-2*i);function sl(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=jl(i-n),o=jl(e-s),a=$s(n,s,t),l=$s(n+1,s,t),c=$s(n,s+1,t),u=$s(n+1,s+1,t),d=a+(l-a)*r,h=c+(u-c)*r;return d+(h-d)*o}function hn(i,e,t,n={}){const{octaves:s=5,frequency:r=1,amplitude:o=1,lacunarity:a=2,gain:l=.5}=n;let c=r,u=o,d=0,h=0;for(let f=0;f<s;f++)d+=sl(i*c,e*c,t+f*8191)*u,h+=u,c*=a,u*=l;return d/h}function wd(i,e,t,n={}){const{octaves:s=4,frequency:r=1,lacunarity:o=2,gain:a=.5}=n;let l=r,c=1,u=0,d=0;for(let h=0;h<s;h++){const f=1-Math.abs(sl(i*l,e*l,t+h*6151)*2-1);u+=f*f*c,d+=c,l*=o,c*=a}return u/d}const ts=13500,nu=150,Mi=i=>i*nu;var Pe=(i=>(i[i.Ocean=0]="Ocean",i[i.Shallows=1]="Shallows",i[i.Beach=2]="Beach",i[i.Marsh=3]="Marsh",i[i.Grassland=4]="Grassland",i[i.Meadow=5]="Meadow",i[i.Forest=6]="Forest",i[i.PineForest=7]="PineForest",i[i.Moor=8]="Moor",i[i.Rock=9]="Rock",i[i.Snow=10]="Snow",i))(Pe||{});const ec=1/44e3,qs=1/6400,tc=1/440,nc=1/55,ic=1/10800,sc=1/12e3,Td=0,fo=[[-3.02,58.64],[-3.09,58.44],[-3.39,58.12],[-3.8,57.86],[-4.18,57.58],[-3.63,57.66],[-3.28,57.72],[-2.07,57.7],[-1.78,57.5],[-2.08,57.15],[-2.21,56.9],[-2.47,56.71],[-2.75,56.47],[-2.59,56.28],[-3.18,55.98],[-2.6,56.06],[-2.14,55.9],[-2,55.77],[-1.72,55.55],[-1.58,55.24],[-1.42,55.01],[-1.32,54.83],[-1.18,54.69],[-1.14,54.62],[-.77,54.55],[-.61,54.49],[-.39,54.28],[-.08,54.12],[-.19,53.9],[.13,53.58],[-.34,53.73],[-.04,53.59],[.16,53.48],[.29,53.24],[.35,53.14],[.13,52.97],[.26,52.79],[.49,52.94],[.94,52.97],[1.3,52.93],[1.73,52.68],[1.75,52.6],[1.75,52.47],[1.6,52.1],[1.28,51.95],[1.05,51.78],[.92,51.62],[.72,51.53],[.4,51.46],[.74,51.44],[1.16,51.37],[1.4,51.38],[1.42,51.36],[1.33,51.13],[1.08,51.07],[.97,50.91],[.58,50.86],[.29,50.73],[-.14,50.82],[-.79,50.72],[-1.09,50.79],[-1.4,50.72],[-1.87,50.71],[-2.03,50.68],[-2.46,50.51],[-2.94,50.7],[-3.53,50.61],[-3.65,50.22],[-4.13,50.34],[-4.65,50.32],[-5.05,50.19],[-5.2,49.96],[-5.72,50.07],[-5.54,50.2],[-5.05,50.41],[-4.65,50.6],[-4.53,51],[-4.2,51.08],[-3.83,51.22],[-3,51.2],[-2.72,51.5],[-3,51.4],[-3.18,51.46],[-3.57,51.4],[-3.99,51.61],[-4.18,51.57],[-4.31,51.57],[-4.29,51.73],[-4.69,51.68],[-5.08,51.62],[-5.31,51.7],[-5.19,51.87],[-5.31,52],[-4.66,52.12],[-4.36,52.21],[-4.06,52.42],[-4.05,52.55],[-4.06,52.72],[-4.1,52.86],[-4.42,52.89],[-4.76,52.79],[-4.5,52.94],[-4.2,53],[-4.63,53.31],[-4.28,53.42],[-3.83,53.33],[-3.5,53.32],[-3.36,53.35],[-3.18,53.35],[-3,53.41],[-3.05,53.65],[-3.05,53.82],[-2.98,53.93],[-2.87,54.1],[-3.24,54.11],[-3.4,54.3],[-3.61,54.51],[-3.57,54.65],[-3.5,54.85],[-3.4,54.98],[-4.05,54.77],[-4.86,54.63],[-5.12,54.84],[-5.02,55],[-4.86,55.2],[-4.63,55.46],[-4.86,55.7],[-5.2,55.58],[-5.8,55.31],[-5.6,55.75],[-5.4,56.02],[-5.47,56.41],[-5.75,56.55],[-6.23,56.73],[-5.83,57],[-5.71,57.28],[-5.8,57.43],[-5.65,57.7],[-5.16,57.9],[-5.3,58.25],[-4.72,58.55],[-5,58.62],[-4.5,58.55],[-4.09,58.57],[-3.37,58.67]],Ys=(()=>{const i=fo.reduce((u,d)=>u+d[1],0)/fo.length,e=Math.cos(i*Math.PI/180),t=fo.map(([u,d])=>[u*e,d]);let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const[u,d]of t)n=Math.min(n,u),s=Math.max(s,u),r=Math.min(r,d),o=Math.max(o,d);const a=(n+s)/2,l=(r+o)/2,c=1.8/Math.max(s-n,o-r);return t.map(([u,d])=>[(u-a)*c,-(d-l)*c])})(),kt=480,li=1.05,Ks=Ad();function Ad(){const i=new Float32Array(kt*kt);for(let e=0;e<kt;e++){const t=-li+e/(kt-1)*2*li;for(let n=0;n<kt;n++){const s=-li+n/(kt-1)*2*li;let r=1/0,o=!1;for(let a=0,l=Ys.length-1;a<Ys.length;l=a++){const[c,u]=Ys[a],[d,h]=Ys[l];u>t!=h>t&&s<(d-c)*(t-u)/(h-u)+c&&(o=!o),r=Math.min(r,Rd(s,t,c,u,d,h))}i[e*kt+n]=o?r:-r}}return i}function Rd(i,e,t,n,s,r){const o=s-t,a=r-n,l=o*o+a*a||1e-9,c=Hn(((i-t)*o+(e-n)*a)/l,0,1),u=t+c*o,d=n+c*a;return Math.hypot(i-u,e-d)}function Cd(i,e){const t=(i+li)/(2*li)*(kt-1),n=(e+li)/(2*li)*(kt-1);if(t<0||n<0||t>kt-1||n>kt-1)return-1;const s=Math.floor(t),r=Math.floor(n),o=Math.min(s+1,kt-1),a=Math.min(r+1,kt-1),l=t-s,c=n-r,u=Ks[r*kt+s],d=Ks[r*kt+o],h=Ks[a*kt+s],f=Ks[a*kt+o];return(u*(1-l)+d*l)*(1-c)+(h*(1-l)+f*l)*c}function rl(i,e,t){const n=i/ts,s=e/ts,r=(hn(i/6e3,e/6e3,t+77,{octaves:3})-.5)*.009+(hn(i/820,e/820,t+211,{octaves:5})-.5)*.011,o=(hn(i/6e3,e/6e3,t+131,{octaves:3})-.5)*.009+(hn(i/820,e/820,t+271,{octaves:5})-.5)*.011,l=.7-Cd(n+r,s+o)*2.4;return 1-tn(.6,.85,l)}function no(i,e,t){const n=rl(i,e,t);if(n<=0)return-1;const s=hn(i*ec,e*ec,t,{octaves:4}),r=hn(i*qs,e*qs,t+1013,{octaves:5}),o=hn(i*tc,e*tc,t+2027,{octaves:3}),a=tn(.55,.8,hn(i*sc,e*sc,t+3041,{octaves:3})),l=wd(i*qs*1.7,e*qs*1.7,t+4051,{octaves:5})*a,c=hn(i*nc,e*nc,t+7079,{octaves:3}),d=(((s*.45+r*.3+o*.08)/.83+l*.4)*n-.34)*3,h=Hn(.5+e/(ts*2.2),0,1),f=.615,m=f+.06+h*.025,_=m+.05,g=.052+h*.04,p=g+.022,y=tn(f-.09,f,n),b=tn(f,m,n),M=tn(f+.55*(m-f),_,n),T=-.16*(1-y)+g*b+(p-g)*M,w=tn(_,_+.14,n);let A=T*(1-w)+d*w+(c-.5)*.06*w;const x=.04+h*.034,C=-1+tn(f,m,n)*(1+x+(c-.5)*.02);return A=Math.max(A,C),Hn(A,-1,1)}function iu(i,e,t,n){const s=hn(i*ic,e*ic,n+5077,{octaves:4}),r=Hn(t,0,1)*.35,o=(hn(i/900,e/900,n+8123,{octaves:3})-.5)*.34,a=hn(i/5200,e/5200,n+9187,{octaves:3}),l=(1-tn(.34,.52,a))*.5,c=1-tn(.715,.86,rl(i,e,n)),u=(1-tn(.12,.2,t))*.6*c,d=Math.max(u,l*tn(.03,.075,t)),h=tn(.055,.125,t)*.3;return Hn(s+o-r-d+h+.06,0,1)}function su(i,e){const t=Hn(.5+i/(ts*2.2),0,1),n=Hn(e,0,1)*.75;return Hn(t-n,0,1)}function ru(i,e,t){return 1-tn(.72,.86,rl(i,e,t))}function ou(i,e,t,n=1){return i<-.1?0:i<Td?1:n>.4&&i<.03+t*.034?2:i>.62?t<.25?10:9:i>.44?8:e>.86&&i<.025?3:e>.43?t<.4?7:6:e>.3?5:4}function au(i,e,t){const n=no(i,e,t),s=iu(i,e,n,t),r=su(e,n),o=ru(i,e,t);return{height:n,moisture:s,temperature:r,biome:ou(n,s,r,o)}}const Ji=i=>i===0||i===1;function rc(i){switch(i){case 0:return 1/0;case 1:return 2.6;case 3:return 2;case 6:case 7:return 1.25;case 8:return 1.35;case 9:return 1.7;case 10:return 1.8;default:return 1}}function Pd(i,e,t){return sl(i*.7,e*.7,t+9091)}const st=32;var Ye=(i=>(i[i.OakTree=0]="OakTree",i[i.BirchTree=1]="BirchTree",i[i.PineTree=2]="PineTree",i[i.Boulder=3]="Boulder",i[i.FlintOutcrop=4]="FlintOutcrop",i[i.BerryBush=5]="BerryBush",i[i.ReedBed=6]="ReedBed",i[i.ClayBank=7]="ClayBank",i[i.BogIron=8]="BogIron",i))(Ye||{});const oc=(i,e)=>`${i},${e}`,on=i=>Math.floor(i/st),Ld={[Pe.Forest]:[[0,.0425,2,3],[1,.0225,2,3],[5,.0063,5,12],[3,.005,20,40]],[Pe.PineForest]:[[2,.0525,2,3],[3,.007,20,40],[5,.003,4,9]],[Pe.Meadow]:[[0,.0045,2,3],[5,.0075,5,12],[3,.004,15,30]],[Pe.Grassland]:[[0,.0015,2,3],[3,.004,15,30],[4,.001,6,14]],[Pe.Marsh]:[[6,.035,8,20],[8,.003,4,10],[7,.005,10,25]],[Pe.Beach]:[[4,.005,6,14],[6,.002,6,14],[7,.0025,10,25]],[Pe.Moor]:[[3,.011,20,40],[4,.003,6,14],[8,.0015,4,10]],[Pe.Rock]:[[3,.024,25,50],[4,.005,8,18]]};function Id(i,e,t,n){const s=i+32768&65535,r=e+32768&65535,o=n*st+t;return(s*65536+r)*1024+o}function Dd(i,e,t){const n=new Array(st*st),s=[],r=sn(to(i,e,t)),o=i*st,a=e*st,l=st+1,c=new Float32Array(l*l);for(let u=0;u<=st;u++)for(let d=0;d<=st;d++)c[u*l+d]=no(o+d,a+u,t);for(let u=0;u<st;u++)for(let d=0;d<st;d++){const h=o+d,f=a+u,m=au(h,f,t);if(n[u*st+d]={biome:m.biome,height:m.height,jitter:Pd(h,f,t)},Ji(m.biome))continue;const _=Ld[m.biome];if(_){for(const[g,p,y,b]of _)if(r()<p){s.push({id:Id(i,e,d,u),kind:g,x:h+di(r,.15,.85),y:f+di(r,.15,.85),amount:Ls(r,y,b),scale:di(r,.82,1.18)});break}}}return{cx:i,cy:e,tiles:n,corners:c,resources:s,dirty:!1}}function Zs(i,e,t){const n=st+1;return i.corners[t*n+e]}function Nd(i,e,t){const n=(e%st+st)%st,s=(t%st+st)%st;return i.tiles[s*st+n]}const po={0:"Oak",1:"Birch",2:"Pine",3:"Boulder",4:"Flint outcrop",5:"Berry bush",6:"Reed bed",7:"Clay bank",8:"Bog iron"},Je={log:{kind:"log",name:"Log",length:2,width:.25,thickness:.25,mass:140,fromItem:"log",bearing:2600,cylindrical:!0,colour:"#a87a4a",colourDark:"#7a5330",description:"A whole trunk. Heavy. Stack them for walls or span them as beams."},splitLog:{kind:"splitLog",name:"Split log",length:2,width:.25,thickness:.125,mass:70,bearing:1300,cylindrical:!0,halfRound:!0,colour:"#bb9059",colourDark:"#8a6b3c",description:"A trunk halved lengthwise. Flat face up makes a floor."},post:{kind:"post",name:"Post",length:1.25,width:.25,thickness:.25,mass:100,bearing:4200,cylindrical:!0,description:"A trunk stood upright and sunk in. Carries a roof.",colour:"#9c7245",colourDark:"#6d4c2b"},beam:{kind:"beam",name:"Beam",length:3,width:.2,thickness:.2,mass:150,bearing:2400,cylindrical:!0,description:"A long dressed timber for spanning between posts.",colour:"#b08954",colourDark:"#856236"},plank:{kind:"plank",name:"Plank",length:1.5,width:.12,thickness:.02,mass:14,fromItem:"plank",bearing:320,colour:"#b98f57",colourDark:"#7d5e33",description:"Light and quick to lay. Good for decks, doors and roofs."},stoneBlock:{kind:"stoneBlock",name:"Stone block",length:.25,width:.25,thickness:.25,mass:160,fromItem:"stone",bearing:9e3,colour:"#8d8d88",colourDark:"#5d5d59",description:"A dressed cube of stone. Will not burn and will not rot; stacks square."},stoneSlab:{kind:"stoneSlab",name:"Stone slab",length:.6,width:.5,thickness:.06,mass:200,bearing:7e3,colour:"#9a9a94",colourDark:"#66665f",description:"A broad flat stone. A hearth floor, or a threshold."},boulder:{kind:"boulder",name:"Boulder",length:.55,width:.55,thickness:.5,mass:240,bearing:12e3,round:!0,colour:"#8d8d88",colourDark:"#5d5d59",description:"An undressed stone, hauled whole. Heavy, but it will hold anything."},thatchBundle:{kind:"thatchBundle",name:"Thatch bundle",length:.9,width:.7,thickness:.12,mass:12,fromItem:"thatch",bearing:45,roofing:!0,colour:"#c9a94f",colourDark:"#8a7333",description:"Reed thatch. Sheds rain, but only over something that holds it up."}};function ns(i){const e=Math.cos(i.yaw),t=Math.sin(i.yaw),n=e*i.hx,s=t*i.hx,r=-t*i.hy,o=e*i.hy;return[{x:i.cx-n-r,y:i.cy-s-o},{x:i.cx+n-r,y:i.cy+s-o},{x:i.cx+n+r,y:i.cy+s+o},{x:i.cx-n+r,y:i.cy-s+o}]}function ac(i,e,t){let n=1/0,s=-1/0;for(const r of i){const o=r.x*e+r.y*t;o<n&&(n=o),o>s&&(s=o)}return[n,s]}function io(i,e,t=.02){const n=ns(i),s=ns(e);for(const r of[i,e]){const o=Math.cos(r.yaw),a=Math.sin(r.yaw);for(const[l,c]of[[o,a],[-a,o]]){const[u,d]=ac(n,l,c),[h,f]=ac(s,l,c);if(d-t<=h||f-t<=u)return!1}}return!0}function lu(i,e){let t=i;for(let n=0;n<e.length&&t.length!==0;n++){const s=e[n],r=e[(n+1)%e.length],o=r.x-s.x,a=r.y-s.y,l=u=>o*(u.y-s.y)-a*(u.x-s.x),c=t;t=[];for(let u=0;u<c.length;u++){const d=c[u],h=c[(u+c.length-1)%c.length],f=l(d),m=l(h);f>=0?(m<0&&t.push(lc(h,d,m,f)),t.push(d)):m>=0&&t.push(lc(h,d,m,f))}}return t}function lc(i,e,t,n){const s=t/(t-n);return{x:i.x+(e.x-i.x)*s,y:i.y+(e.y-i.y)*s}}function cu(i){let e=0;for(let t=0;t<i.length;t++){const n=i[t],s=i[(t+1)%i.length];e+=n.x*s.y-s.x*n.y}return Math.abs(e)/2}function Ud(i,e){return io(i,e,0)?cu(lu(ns(i),ns(e))):0}function Fd(i,e){return io(i,e,0)?lu(ns(i),ns(e)):[]}const Od=i=>4*i.hx*i.hy;let ol=1;function Mn(i){const e=Je[i.kind];let t,n,s;i.upright?(t=e.width,n=e.thickness,s=e.length):(t=e.length,n=e.width,s=e.thickness);const r=Math.abs(Math.cos(i.yaw)),o=Math.abs(Math.sin(i.yaw)),a=(t*r+n*o)/2,l=(t*o+n*r)/2;return{x0:i.x-a,x1:i.x+a,y0:i.y-l,y1:i.y+l,z0:i.z,z1:i.z+s}}function Wt(i){const e=Je[i.kind];let t,n,s;return i.upright?(t=e.width,n=e.thickness,s=e.length):(t=e.length,n=e.width,s=e.thickness),{cx:i.x,cy:i.y,hx:t/2,hy:n/2,yaw:i.yaw,z0:i.z,z1:i.z+s}}function kd(i,e,t=.02){const n=Wt(i),s=Wt(e);return n.z0>=s.z1-t||n.z1<=s.z0+t?!1:io(n,s,t)}function al(i,e){return Ud(Wt(i),Wt(e))}class Bd{constructor(){G(this,"cell",6);G(this,"buckets",new Map);G(this,"byId",new Map)}key(e,t){return`${e},${t}`}cellsFor(e){const t=[],n=Math.floor(e.x0/this.cell),s=Math.floor(e.x1/this.cell),r=Math.floor(e.y0/this.cell),o=Math.floor(e.y1/this.cell);for(let a=r;a<=o;a++)for(let l=n;l<=s;l++)t.push(this.key(l,a));return t}add(e){this.byId.set(e.id,e);for(const t of this.cellsFor(Mn(e))){let n=this.buckets.get(t);n||this.buckets.set(t,n=[]),n.push(e)}}remove(e){this.byId.delete(e.id);for(const t of this.cellsFor(Mn(e))){const n=this.buckets.get(t);if(!n)continue;const s=n.indexOf(e);s>=0&&n.splice(s,1),n.length===0&&this.buckets.delete(t)}}get(e){return this.byId.get(e)}get count(){return this.byId.size}query(e){const t=[],n=new Set;for(const s of this.cellsFor(e)){const r=this.buckets.get(s);if(r)for(const o of r){if(n.has(o.id))continue;n.add(o.id);const a=Mn(o);a.x0<=e.x1&&a.x1>=e.x0&&a.y0<=e.y1&&a.y1>=e.y0&&a.z0<=e.z1&&a.z1>=e.z0&&t.push(o)}}return t}queryBroad(e){const t=new Set;for(const n of this.cellsFor(e)){const s=this.buckets.get(n);if(s)for(const r of s)t.add(r)}return[...t]}queryRadius(e,t,n){return this.query({x0:e-n,x1:e+n,y0:t-n,y1:t+n,z0:-99,z1:99}).filter(s=>(s.x-e)**2+(s.y-t)**2<=n*n)}all(){return[...this.byId.values()]}clear(){this.byId.clear(),this.buckets.clear()}}const zd=()=>ol,Gd=i=>{ol=i};function xn(i,e,t,n,s,r,o=!1){return{id:ol++,kind:i,x:e,y:t,z:n,yaw:s,upright:r,load:0,integrity:1,loose:o}}const yn={campfire:{kind:"campfire",name:"Campfire",w:1,h:1,cost:[{item:"log",count:2},{item:"stone",count:5}],work:6,description:"A ring of stones. Cooks food, gives light, keeps the cold off."},kiln:{kind:"kiln",name:"Kiln",w:2,h:2,cost:[{item:"stone",count:12},{item:"clay",count:8}],work:24,description:"Burns charcoal and fires pottery."},smithy:{kind:"smithy",name:"Smithy",w:2,h:2,cost:[{item:"stone",count:14},{item:"clay",count:6},{item:"log",count:4}],work:40,description:"Bloomery and anvil. Smelt bog iron, forge tools and blades."},dryingRack:{kind:"dryingRack",name:"Drying rack",w:2,h:1,cost:[{item:"log",count:2},{item:"rope",count:2}],work:8,description:"Preserves meat and cures hides."},quern:{kind:"quern",name:"Quern",w:1,h:1,cost:[{item:"stone",count:6}],work:10,description:"A hand mill for grinding grain."},loom:{kind:"loom",name:"Warp-weighted loom",w:2,h:1,cost:[{item:"log",count:3},{item:"rope",count:3},{item:"stone",count:4}],work:16,description:"Weaves cloth from wool and flax."}},pt={log:{id:"log",name:"Log",stack:20},plank:{id:"plank",name:"Plank",stack:40},stone:{id:"stone",name:"Stone",stack:40},flint:{id:"flint",name:"Flint",stack:40},reed:{id:"reed",name:"Reed",stack:60},thatch:{id:"thatch",name:"Thatch",stack:40},rope:{id:"rope",name:"Rope",stack:30},clay:{id:"clay",name:"Clay",stack:40},bogIron:{id:"bogIron",name:"Bog iron ore",stack:30},ironBloom:{id:"ironBloom",name:"Iron bloom",stack:20},ironBar:{id:"ironBar",name:"Iron bar",stack:20},charcoal:{id:"charcoal",name:"Charcoal",stack:40},berries:{id:"berries",name:"Berries",stack:40,nutrition:8},meat:{id:"meat",name:"Raw meat",stack:20,nutrition:10},cookedMeat:{id:"cookedMeat",name:"Roast meat",stack:20,nutrition:32},hide:{id:"hide",name:"Hide",stack:20},leather:{id:"leather",name:"Leather",stack:20},pot:{id:"pot",name:"Clay pot",stack:10},flintAxe:{id:"flintAxe",name:"Flint axe",stack:1,tool:!0,damage:6,chopPower:3.2,minePower:1.2},ironAxe:{id:"ironAxe",name:"Iron axe",stack:1,tool:!0,damage:11,chopPower:6,minePower:2},spear:{id:"spear",name:"Spear",stack:1,tool:!0,damage:14},seax:{id:"seax",name:"Seax",stack:1,tool:!0,damage:9},shield:{id:"shield",name:"Limewood shield",stack:1,tool:!0,damage:2},bow:{id:"bow",name:"Hunting bow",stack:1,tool:!0,damage:10}},Hd={[Ye.OakTree]:{item:"log",per:0,tool:"chop"},[Ye.BirchTree]:{item:"log",per:0,tool:"chop"},[Ye.PineTree]:{item:"log",per:0,tool:"chop"},[Ye.Boulder]:{item:"stone",per:1,tool:"mine"},[Ye.FlintOutcrop]:{item:"flint",per:1,tool:"mine"},[Ye.BerryBush]:{item:"berries",per:2,tool:"hand"},[Ye.ReedBed]:{item:"reed",per:2,tool:"hand"},[Ye.ClayBank]:{item:"clay",per:1,tool:"hand"},[Ye.BogIron]:{item:"bogIron",per:1,tool:"mine"}},cc=.22,Vd=i=>i===Ye.OakTree||i===Ye.BirchTree||i===Ye.PineTree,Wd=210,Xd=120,$d=30,qd=3,Yd=3,Kd=.15;function Zd(i,e){const t=Je[i.kind];return i.upright||t.round||i.kind==="stoneBlock"||i.kind==="stoneSlab"?!0:i.z>e+Kd}let ll=1,cl=1;const Jd=()=>ll,Qd=i=>{ll=i},jd=()=>cl,ef=i=>{cl=i};class tf{constructor(e){G(this,"seed");G(this,"chunks",new Map);G(this,"removedResources",new Set);G(this,"resourceAmounts",new Map);G(this,"regrowSites",new Map);G(this,"regrowClock",0);G(this,"pieces",new Bd);G(this,"fixtures",[]);G(this,"piles",[]);this.seed=e}getChunk(e,t){(!Number.isFinite(e)||!Number.isFinite(t))&&(e=0,t=0);const n=oc(e,t);let s=this.chunks.get(n);if(!s){s=Dd(e,t,this.seed),s.resources=s.resources.filter(r=>!this.removedResources.has(r.id));for(const r of s.resources){const o=this.resourceAmounts.get(r.id);o!==void 0&&(r.amount=o)}this.chunks.set(n,s)}return s}evictFarChunks(e,t,n){const s=on(e),r=on(t);for(const[o,a]of this.chunks)(Math.abs(a.cx-s)>n||Math.abs(a.cy-r)>n)&&this.chunks.delete(o)}tile(e,t){return Nd(this.getChunk(on(e),on(t)),e,t)}biomeAt(e,t){return this.tile(e,t).biome}heightAt(e,t){return this.tile(Math.floor(e),Math.floor(t)).height}elevationAt(e,t){return Math.max(0,Mi(this.heightAt(e,t)))}peekBiome(e,t){return au(e,t,this.seed).biome}peekElevation(e,t){return Math.max(0,Mi(no(e,t,this.seed)))}walkable(e,t){return Number.isFinite(rc(this.biomeAt(e,t)))}pieceBlocks(e,t,n=cc){const s=this.elevationAt(Math.floor(e),Math.floor(t)),r=s+1.2,o={x0:e-n,x1:e+n,y0:t-n,y1:t+n,z0:s,z1:r},a={cx:e,cy:t,hx:n,hy:n,yaw:0};for(const l of this.pieces.query(o)){if(!Zd(l,s))continue;const c=Wt(l);if(!(c.z0>=r)&&io(c,a,0))return!0}return!1}canStand(e,t,n=cc){return this.walkable(Math.floor(e),Math.floor(t))&&!this.pieceBlocks(e,t,n)}speedMultiplier(e,t){const n=rc(this.biomeAt(e,t));return Number.isFinite(n)?1/n:0}resourcesNear(e,t,n){const s=[],r=on(e-n),o=on(e+n),a=on(t-n),l=on(t+n),c=n*n;for(let u=a;u<=l;u++)for(let d=r;d<=o;d++)for(const h of this.getChunk(d,u).resources){const f=h.x-e,m=h.y-t;f*f+m*m<=c&&s.push(h)}return s.sort((u,d)=>(u.x-e)**2+(u.y-t)**2-((d.x-e)**2+(d.y-t)**2)),s}findResource(e,t,n){return this.resourcesNear(t,n,48).find(s=>s.id===e)}harvest(e,t){const n=Math.min(t,e.amount);return e.amount-=n,this.resourceAmounts.set(e.id,e.amount),e.amount<=0&&this.removeResource(e),n}removeResource(e){this.removedResources.add(e.id),this.resourceAmounts.delete(e.id);const t=this.getChunk(on(e.x),on(e.y)),n=t.resources.indexOf(e);if(n>=0&&t.resources.splice(n,1),t.dirty=!0,Vd(e.kind)){const s=e.id%Xd;this.regrowSites.set(e.id,{x:e.x,y:e.y,kind:e.kind,scale:e.scale,amount:Yd,readyAt:this.regrowClock+Wd+s})}}tickRegrow(e){if(this.regrowClock+=e,this.regrowSites.size!==0)for(const[t,n]of this.regrowSites){if(this.regrowClock<n.readyAt)continue;if(this.buildClaimsGround(n.x,n.y)){n.readyAt=this.regrowClock+$d;continue}this.removedResources.delete(t),this.resourceAmounts.delete(t);const s=this.chunks.get(oc(on(n.x),on(n.y)));s&&(s.resources.push({id:t,kind:n.kind,x:n.x,y:n.y,amount:n.amount,scale:n.scale}),s.dirty=!0),this.regrowSites.delete(t)}}buildClaimsGround(e,t){for(const n of this.pieces.queryRadius(e,t,qd))if(n.kind==="log"||n.kind==="stoneBlock"||n.kind==="stoneSlab")return!0;return!1}exportState(){return{removed:[...this.removedResources],amounts:[...this.resourceAmounts],regrow:[...this.regrowSites],regrowClock:this.regrowClock,pieces:this.pieces.all().map(e=>({...e})),fixtures:this.fixtures.map(e=>({...e,delivered:e.delivered.map(t=>({...t}))})),piles:this.piles.map(e=>({id:e.id,x:e.x,y:e.y,contents:[...e.contents]})),pieceId:zd(),fixtureId:Jd(),pileId:jd()}}importState(e){this.removedResources=new Set(e.removed),this.resourceAmounts=new Map(e.amounts),this.regrowSites=new Map(e.regrow),this.regrowClock=e.regrowClock,this.chunks.clear(),this.pieces.clear();for(const t of e.pieces)this.pieces.add({...t});this.fixtures.length=0;for(const t of e.fixtures)this.fixtures.push({...t,delivered:t.delivered.map(n=>({...n}))});this.piles.length=0;for(const t of e.piles)this.piles.push({id:t.id,x:t.x,y:t.y,contents:new Map(t.contents)});Gd(e.pieceId),Qd(e.fixtureId),ef(e.pileId)}pieceAt(e,t){const n=this.pieces.query({x0:e,x1:e,y0:t,y1:t,z0:-50,z1:50}).filter(s=>{const r=Mn(s);return e>=r.x0&&e<=r.x1&&t>=r.y0&&t<=r.y1});return n.sort((s,r)=>r.z-s.z),n[0]}canPlaceFixture(e,t,n){const s=yn[e];for(let r=n;r<n+s.h;r++)for(let o=t;o<t+s.w;o++){const a=this.biomeAt(o,r);if(Ji(a)||a===Pe.Rock||a===Pe.Snow||this.fixtureAt(o,r))return!1}return!0}placeFixtureSite(e,t,n){const s=yn[e],r={id:ll++,kind:e,tx:t,ty:n,progress:0,delivered:[],hp:1,maxHp:s.work*6+40,fuel:e==="campfire"?0:void 0};return this.fixtures.push(r),r}fixtureAt(e,t){return this.fixtures.find(n=>{const s=yn[n.kind];return e>=n.tx&&e<n.tx+s.w&&t>=n.ty&&t<n.ty+s.h})}nearestFixture(e,t,n,s){let r,o=s*s;for(const a of this.fixtures){if(a.kind!==n||a.progress<1)continue;const l=(a.tx-e)**2+(a.ty-t)**2;l<o&&(o=l,r=a)}return r}destroyFixture(e){const t=this.fixtures.indexOf(e);t>=0&&this.fixtures.splice(t,1)}dropItems(e,t,n,s){const r=this.piles.find(a=>(a.x-e)**2+(a.y-t)**2<1.2),o=r??{id:cl++,x:e,y:t,contents:new Map};return o.contents.set(n,(o.contents.get(n)??0)+s),r||this.piles.push(o),o}pileNear(e,t,n=1.2){return this.piles.find(s=>(s.x-e)**2+(s.y-t)**2<=n*n)}removePile(e){const t=this.piles.indexOf(e);t>=0&&this.piles.splice(t,1)}larderCount(e){if(!e)return 0;const t=this.pileNear(e.x,e.y,1.5);if(!t)return 0;let n=0;for(const[s,r]of t.contents)(pt[s].nutrition??0)>0&&(n+=r);return n}takeFromLarder(e){if(!e)return null;const t=this.pileNear(e.x,e.y,1.5);if(!t)return null;let n=null,s=0;for(const[o,a]of t.contents){if(a<=0)continue;const l=pt[o].nutrition??0;l>s&&(s=l,n=o)}if(!n)return null;const r=(t.contents.get(n)??0)-1;return r<=0?t.contents.delete(n):t.contents.set(n,r),t.contents.size===0&&this.removePile(t),n}hasTimberWithin(e,t,n){for(let s=6;s<=n;s+=6){const r=Math.max(8,Math.floor(s/2));for(let o=0;o<r;o++){const a=o/r*Math.PI*2,l=this.peekBiome(Math.round(e+Math.cos(a)*s),Math.round(t+Math.sin(a)*s));if(l===Pe.Forest||l===Pe.PineForest)return!0}}return!1}findSpawnNear(e,t){const n=a=>a===Pe.Beach||a===Pe.Grassland||a===Pe.Meadow||a===Pe.Forest||a===Pe.PineForest,s=Math.round(e),r=Math.round(t);if(n(this.peekBiome(s,r)))return{x:s,y:r};let o=null;for(let a=6;a<=6e3;a+=6){const l=Math.max(10,Math.round(a/3));for(let c=0;c<l;c++){const u=c/l*Math.PI*2,d=Math.round(e+Math.cos(u)*a),h=Math.round(t+Math.sin(u)*a),f=this.peekBiome(d,h);if(n(f)&&(o||(o={x:d,y:h}),this.hasTimberWithin(d,h,26)))return{x:d,y:h}}}return o??this.findLandNear(s,r,6e3)??{x:s,y:r}}findLandNear(e,t,n=400){for(let s=0;s<=n;s+=2){const r=Math.max(8,s*2);for(let o=0;o<r;o++){const a=o/r*Math.PI*2,l=Math.round(e+Math.cos(a)*s),c=Math.round(t+Math.sin(a)*s),u=this.peekBiome(l,c);if(!Ji(u)&&u!==Pe.Rock&&u!==Pe.Snow)return{x:l,y:c}}}return null}findLandingBeach(e,t){const n=Math.hypot(e,t)||1,s=e/n,r=t/n,o=d=>!Ji(this.peekBiome(Math.round(s*d),Math.round(r*d)));let a=0,l=ts*1.4;if(!o(a)){let d=!1;for(let h=0;h<l;h+=250)if(o(h)){a=h,d=!0;break}if(!d)return{x:0,y:0}}for(let d=0;d<40&&l-a>1;d++){const h=(a+l)/2;o(h)?a=h:l=h}let c=null;for(let d=0;d<900;d+=3){const h=a-d,f=Math.round(s*h),m=Math.round(r*h),_=this.peekBiome(f,m);if(!(_!==Pe.Beach&&_!==Pe.Grassland&&_!==Pe.Meadow&&_!==Pe.Forest)&&(c||(c={x:f,y:m}),this.hasTimberWithin(f,m,20)))return{x:f,y:m}}return c||(this.findLandNear(Math.round(s*a),Math.round(r*a),600)??{x:Math.round(s*a),y:Math.round(r*a)})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="185",nf=0,hc=1,sf=2,Dr=1,hu=2,Es=3,fi=0,Jt=1,un=2,Vn=0,Qi=1,uc=2,dc=3,fc=4,rf=5,yi=100,of=101,af=102,lf=103,cf=104,hf=200,uf=201,df=202,ff=203,oa=204,aa=205,pf=206,mf=207,gf=208,xf=209,_f=210,vf=211,Mf=212,yf=213,Sf=214,la=0,ca=1,ha=2,is=3,ua=4,da=5,fa=6,pa=7,ul=0,bf=1,Ef=2,Ln=0,uu=1,du=2,fu=3,pu=4,mu=5,gu=6,xu=7,_u=300,wi=301,ss=302,mo=303,go=304,so=306,Is=1e3,Gn=1001,ma=1002,Nt=1003,wf=1004,Js=1005,Vt=1006,xo=1007,ci=1008,nn=1009,vu=1010,Mu=1011,Ds=1012,dl=1013,Dn=1014,_n=1015,$n=1016,fl=1017,pl=1018,Ns=1020,yu=35902,Su=35899,bu=1021,Eu=1022,vn=1023,qn=1026,bi=1027,ml=1028,gl=1029,Ti=1030,xl=1031,_l=1033,Nr=33776,Ur=33777,Fr=33778,Or=33779,ga=35840,xa=35841,_a=35842,va=35843,Ma=36196,ya=37492,Sa=37496,ba=37488,Ea=37489,Hr=37490,wa=37491,Ta=37808,Aa=37809,Ra=37810,Ca=37811,Pa=37812,La=37813,Ia=37814,Da=37815,Na=37816,Ua=37817,Fa=37818,Oa=37819,ka=37820,Ba=37821,za=36492,Ga=36494,Ha=36495,Va=36283,Wa=36284,Vr=36285,Xa=36286,Tf=3200,$a=0,Af=1,ai="",ln="srgb",Wr="srgb-linear",Xr="linear",ot="srgb",Ii=7680,pc=519,Rf=512,Cf=513,Pf=514,vl=515,Lf=516,If=517,Ml=518,Df=519,mc=35044,gc="300 es",Pn=2e3,Us=2001;function Nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uf(){const i=$r("canvas");return i.style.display="block",i}const xc={};function _c(...i){const e="THREE."+i.shift();console.log(e,...i)}function wu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=wu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=wu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ji(...i){const e=i.join(" ");e in xc||(xc[e]=!0,De(...i))}function Ff(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Of={[la]:ca,[ha]:fa,[ua]:pa,[is]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:is};class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,qa=180/Math.PI;function Gs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function kf(i,e){return(i%e+e)%e}function _o(i,e,t){return(1-t)*i+t*e}function fs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Bl=class Bl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bl.prototype.isVector2=!0;let He=Bl;class dn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==h||c!==f||u!==m){let g=l*h+c*f+u*m+d*_;g<0&&(h=-h,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const y=Math.acos(g),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,l=l*p+h*a,c=c*p+f*a,u=u*p+m*a,d=d*p+_*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+m*a,d=d*p+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zl=class zl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;let I=zl;const vo=new I,vc=new dn,Gl=class Gl{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],y=s[1],b=s[4],M=s[7],T=s[2],w=s[5],A=s[8];return r[0]=o*_+a*y+l*T,r[3]=o*g+a*b+l*w,r[6]=o*p+a*M+l*A,r[1]=c*_+u*y+d*T,r[4]=c*g+u*b+d*w,r[7]=c*p+u*M+d*A,r[2]=h*_+f*y+m*T,r[5]=h*g+f*b+m*w,r[8]=h*p+f*M+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,m=t*d+n*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gl.prototype.isMatrix3=!0;let Fe=Gl;const Mo=new Fe,Mc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){const i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wr]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:Mc,fromXYZ:yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Mc,fromXYZ:yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const qe=Bf();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=$r("canvas")),Di.width=e.width,Di.height=e.height;const s=Di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gf=0;class yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yo(s[o].image)):r.push(yo(s[o]))}else r=yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Hf=0;const So=new I;class Xt extends Ri{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Gn,s=Gn,r=Vt,o=ci,a=vn,l=nn,c=Xt.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Gs(),this.name="",this.source=new yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=_u;Xt.DEFAULT_ANISOTROPY=1;const Hl=class Hl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(f+1)/2,T=(p+1)/2,w=(u+h)/4,A=(d+_)/4,x=(m+g)/4;return b>M&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;let gt=Hl;class Vf extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Xt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Vf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tu extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eo=class eo{constructor(e,t,n,s,r,o,a,l,c,u,d,h,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,f,m,_,g)}set(e,t,n,s,r,o,a,l,c,u,d,h,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,$f)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),jn.crossVectors(n,jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),jn.crossVectors(n,jt)),jn.normalize(),Qs.crossVectors(jt,jn),s[0]=jn.x,s[4]=Qs.x,s[8]=jt.x,s[1]=jn.y,s[5]=Qs.y,s[9]=jt.y,s[2]=jn.z,s[6]=Qs.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],b=n[7],M=n[11],T=n[15],w=s[0],A=s[4],x=s[8],E=s[12],C=s[1],L=s[5],D=s[9],X=s[13],K=s[2],k=s[6],q=s[10],H=s[14],j=s[3],te=s[7],re=s[11],ue=s[15];return r[0]=o*w+a*C+l*K+c*j,r[4]=o*A+a*L+l*k+c*te,r[8]=o*x+a*D+l*q+c*re,r[12]=o*E+a*X+l*H+c*ue,r[1]=u*w+d*C+h*K+f*j,r[5]=u*A+d*L+h*k+f*te,r[9]=u*x+d*D+h*q+f*re,r[13]=u*E+d*X+h*H+f*ue,r[2]=m*w+_*C+g*K+p*j,r[6]=m*A+_*L+g*k+p*te,r[10]=m*x+_*D+g*q+p*re,r[14]=m*E+_*X+g*H+p*ue,r[3]=y*w+b*C+M*K+T*j,r[7]=y*A+b*L+M*k+T*te,r[11]=y*x+b*D+M*q+T*re,r[15]=y*E+b*X+M*H+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],y=l*f-c*h,b=a*f-c*d,M=a*h-l*d,T=o*f-c*u,w=o*h-l*u,A=o*d-a*u;return t*(_*y-g*b+p*M)-n*(m*y-g*T+p*w)+s*(m*b-_*T+p*A)-r*(m*M-_*w+g*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=t*a-n*o,b=t*l-s*o,M=t*c-r*o,T=n*l-s*a,w=n*c-r*a,A=s*c-r*l,x=u*_-d*m,E=u*g-h*m,C=u*p-f*m,L=d*g-h*_,D=d*p-f*_,X=h*p-f*g,K=y*X-b*D+M*L+T*C-w*E+A*x;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/K;return e[0]=(a*X-l*D+c*L)*k,e[1]=(s*D-n*X-r*L)*k,e[2]=(_*A-g*w+p*T)*k,e[3]=(h*w-d*A-f*T)*k,e[4]=(l*C-o*X-c*E)*k,e[5]=(t*X-s*C+r*E)*k,e[6]=(g*M-m*A-p*b)*k,e[7]=(u*A-h*M+f*b)*k,e[8]=(o*D-a*C+c*x)*k,e[9]=(n*C-t*D-r*x)*k,e[10]=(m*w-_*M+p*y)*k,e[11]=(d*M-u*w-f*y)*k,e[12]=(a*E-o*L-l*x)*k,e[13]=(t*L-n*E+s*x)*k,e[14]=(_*b-m*T-g*y)*k,e[15]=(u*T-d*b+h*y)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,m=r*d,_=o*u,g=o*d,p=a*d,y=l*c,b=l*u,M=l*d,T=n.x,w=n.y,A=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+M)*T,s[2]=(m-b)*T,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(h+p))*w,s[6]=(g+y)*w,s[7]=0,s[8]=(m+b)*A,s[9]=(g-y)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ni.set(s[0],s[1],s[2]).length();const a=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(o=-o),pn.copy(this);const c=1/o,u=1/a,d=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Pn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Pn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Us)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Pn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Pn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Us)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};eo.prototype.isMatrix4=!0;let et=eo;const Ni=new I,pn=new et,Xf=new I(0,0,0),$f=new I(1,1,1),jn=new I,Qs=new I,jt=new I,Sc=new et,bc=new dn;class Yn{constructor(e=0,t=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const Ec=new I,Ui=new dn,Un=new et,js=new I,ps=new I,Yf=new I,Kf=new dn,wc=new I(1,0,0),Tc=new I(0,1,0),Ac=new I(0,0,1),Rc={type:"added"},Zf={type:"removed"},Fi={type:"childadded",child:null},bo={type:"childremoved",child:null};class Ut extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,t=new Yn,n=new dn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Fe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ps,js,this.up):Un.lookAt(js,ps,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Un),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bt extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},er={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=kf(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wo(o,r,e+1/3),this.g=wo(o,r,e),this.b=wo(o,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return qe.workingToColorSpace(Ht.copy(this),e),Math.round(Ke(Ht.r*255,0,255))*65536+Math.round(Ke(Ht.g*255,0,255))*256+Math.round(Ke(Ht.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ln){qe.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,s=Ht.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(er);const n=_o(ei.h,er.h,t),s=_o(ei.s,er.s,t),r=_o(ei.l,er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Se;Se.NAMES=Au;class bl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qf extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new I,Fn=new I,To=new I,On=new I,Oi=new I,ki=new I,Cc=new I,Ao=new I,Ro=new I,Co=new I,Po=new gt,Lo=new gt,Io=new gt;class fn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Fn.subVectors(n,t),To.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Fn),l=mn.dot(To),c=Fn.dot(Fn),u=Fn.dot(To),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Po.setScalar(0),Lo.setScalar(0),Io.setScalar(0),Po.fromBufferAttribute(e,t),Lo.fromBufferAttribute(e,n),Io.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Po,r.x),o.addScaledVector(Lo,r.y),o.addScaledVector(Io,r.z),o}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Fn.subVectors(e,t),mn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),mn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Oi.subVectors(s,n),ki.subVectors(r,n),Ao.subVectors(e,n);const l=Oi.dot(Ao),c=ki.dot(Ao);if(l<=0&&c<=0)return t.copy(n);Ro.subVectors(e,s);const u=Oi.dot(Ro),d=ki.dot(Ro);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Oi,o);Co.subVectors(e,r);const f=Oi.dot(Co),m=ki.dot(Co);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ki,a);const g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return Cc.subVectors(r,s),a=(d-u)/(d-u+(f-m)),t.copy(s).addScaledVector(Cc,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Oi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ci{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),nr.subVectors(this.max,ms),Bi.subVectors(e.a,ms),zi.subVectors(e.b,ms),Gi.subVectors(e.c,ms),ti.subVectors(zi,Bi),ni.subVectors(Gi,zi),mi.subVectors(Bi,Gi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!Do(t,Bi,zi,Gi,nr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,Bi,zi,Gi,nr))?!1:(ir.crossVectors(ti,ni),t=[ir.x,ir.y,ir.z],Do(t,Bi,zi,Gi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,tr=new Ci,Bi=new I,zi=new I,Gi=new I,ti=new I,ni=new I,mi=new I,ms=new I,nr=new I,ir=new I,gi=new I;function Do(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const At=new I,sr=new He;let jf=0;class Sn extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cu extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ep=new Ci,gs=new I,No=new I;class hs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ep.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(No)),this.expandByPoint(gs.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tp=0;const an=new et,Uo=new Ut,Hi=new I,en=new Ci,xs=new Ci,Dt=new I;class Rt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?Cu:Ru)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(en.min,xs.min),en.expandByPoint(Dt),Dt.addVectors(en.max,xs.max),en.expandByPoint(Dt)):(en.expandByPoint(xs.min),en.expandByPoint(xs.max))}en.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Dt.add(Hi)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;const c=new I,u=new I,d=new I,h=new He,f=new He,m=new He,_=new I,g=new I;function p(x,E,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),u.sub(c),d.sub(c),f.sub(h),m.sub(h);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(L),a[x].add(_),a[E].add(_),a[C].add(_),l[x].add(g),l[E].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,E=y.length;x<E;++x){const C=y[x],L=C.start,D=C.count;for(let X=L,K=L+D;X<K;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new I,M=new I,T=new I,w=new I;function A(x){T.fromBufferAttribute(s,x),w.copy(T);const E=a[x];b.copy(E),b.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(w,E);const L=M.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,L)}for(let x=0,E=y.length;x<E;++x){const C=y[x],L=C.start,D=C.count;for(let X=L,K=L+D;X<K;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[m++]=c[f++]}return new Sn(h,u,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let np=0;class us extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Qi,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bn=new I,Fo=new I,rr=new I,ii=new I,Oo=new I,or=new I,ko=new I;class El{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fo.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(rr),a=ii.dot(this.direction),l=-ii.dot(rr),c=ii.lengthSq(),u=Math.abs(1-o*o);let d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=r*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fo).addScaledVector(rr,h),f}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){Oo.subVectors(t,e),or.subVectors(n,e),ko.crossVectors(Oo,or);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(or.crossVectors(ii,or));if(l<0)return null;const c=a*this.direction.dot(Oo.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(ko);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zi extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pc=new et,xi=new El,ar=new hs,Lc=new I,lr=new I,cr=new I,hr=new I,Bo=new I,ur=new I,Ic=new I,dr=new I;class ze extends Ut{constructor(e=new Rt,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Bo.fromBufferAttribute(d,e),o?ur.addScaledVector(Bo,u):ur.addScaledVector(Bo.sub(t),u))}t.add(ur)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(ar.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ar,Lc)===null||xi.origin.distanceToSquared(Lc)>(e.far-e.near)**2))&&(Pc.copy(r).invert(),xi.copy(e.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,T=b;M<T;M+=3){const w=a.getX(M),A=a.getX(M+1),x=a.getX(M+2);s=fr(this,p,e,n,c,u,d,w,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);s=fr(this,o,e,n,c,u,d,y,b,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,T=b;M<T;M+=3){const w=M,A=M+1,x=M+2;s=fr(this,p,e,n,c,u,d,w,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=g,b=g+1,M=g+2;s=fr(this,o,e,n,c,u,d,y,b,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function ip(i,e,t,n,s,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===fi,a),l===null)return null;dr.copy(a),dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:i}}function fr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,lr),i.getVertexPosition(l,cr),i.getVertexPosition(c,hr);const u=ip(i,e,t,n,lr,cr,hr,Ic);if(u){const d=new I;fn.getBarycoord(Ic,lr,cr,hr,d),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new He)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,l,c,d,new He)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};fn.getNormal(lr,cr,hr,h.normal),u.face=h,u.barycoord=d}return u}class Pu extends Xt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Nt,u=Nt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends Sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new et,Nc=new et,pr=[],Uc=new Ci,sp=new et,_s=new ze,vs=new hs;class mr extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Uc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Uc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),vs.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),e.ray.intersectsSphere(vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),Nc.multiplyMatrices(n,Vi),_s.matrixWorld=Nc,_s.raycast(e,pr);for(let o=0,a=pr.length;o<a;o++){const l=pr[o];l.instanceId=r,l.object=this,t.push(l)}pr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pu(new Float32Array(s*this.count),s,this.count,ml,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zo=new I,rp=new I,op=new Fe;class vi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=zo.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||op.getNormalMatrix(e),s=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new hs,ap=new He(.5,.5),gr=new I;class wl{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],y=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-o,f-u,p-m,T-y).normalize(),s[1].setComponents(c+o,f+u,p+m,T+y).normalize(),s[2].setComponents(c+a,f+d,p+_,T+b).normalize(),s[3].setComponents(c-a,f-d,p-_,T-b).normalize(),n)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,f-h,p-g,T-M).normalize();else if(s[4].setComponents(c-l,f-h,p-g,T-M).normalize(),t===Pn)s[5].setComponents(c+l,f+h,p+g,T+M).normalize();else if(t===Us)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=ap.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(gr.x=s.normal.x>0?e.max.x:e.min.x,gr.y=s.normal.y>0?e.max.y:e.min.y,gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lu extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qr=new I,Yr=new I,Fc=new et,Ms=new El,xr=new hs,Go=new I,Oc=new I;class lp extends Ut{constructor(e=new Rt,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qr.fromBufferAttribute(t,s-1),Yr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qr.distanceTo(Yr);e.setAttribute("lineDistance",new Xe(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,e.ray.intersectsSphere(xr)===!1)return;Fc.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Fc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=u.getX(_),y=u.getX(_+1),b=_r(this,e,Ms,l,p,y,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=_r(this,e,Ms,l,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=_r(this,e,Ms,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=_r(this,e,Ms,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _r(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(qr.fromBufferAttribute(a,s),Yr.fromBufferAttribute(a,r),t.distanceSqToSegment(qr,Yr,Go,Oc)>n)return;Go.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Go);if(!(c<e.near||c>e.far))return{distance:c,point:Oc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const kc=new I,Bc=new I;class cp extends lp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)kc.fromBufferAttribute(t,s),Bc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kc.distanceTo(Bc);e.setAttribute("lineDistance",new Xe(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Iu extends Xt{constructor(e=[],t=wi,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hp extends Xt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends Xt{constructor(e,t,n=Dn,s,r,o,a=Nt,l=Nt,c,u=qn,d=1){if(u!==qn&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class up extends rs{constructor(e,t=Dn,n=wi,s,r,o=Nt,a=Nt,l,c=qn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Du extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class We extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function m(_,g,p,y,b,M,T,w,A,x,E){const C=M/A,L=T/x,D=M/2,X=T/2,K=w/2,k=A+1,q=x+1;let H=0,j=0;const te=new I;for(let re=0;re<q;re++){const ue=re*L-X;for(let Me=0;Me<k;Me++){const tt=Me*C-D;te[_]=tt*y,te[g]=ue*b,te[p]=K,c.push(te.x,te.y,te.z),te[_]=0,te[g]=0,te[p]=w>0?1:-1,u.push(te.x,te.y,te.z),d.push(Me/A),d.push(1-re/x),H+=1}}for(let re=0;re<x;re++)for(let ue=0;ue<A;ue++){const Me=h+ue+k*re,tt=h+ue+k*(re+1),xt=h+(ue+1)+k*(re+1),nt=h+(ue+1)+k*re;l.push(Me,tt,nt),l.push(tt,xt,nt),j+=6}a.addGroup(f,j,E),f+=j,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new We(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lt extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let m=0;const _=[],g=n/2;let p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function y(){const M=new I,T=new I;let w=0;const A=(t-e)/n;for(let x=0;x<=r;x++){const E=[],C=x/r,L=C*(t-e)+e;for(let D=0;D<=s;D++){const X=D/s,K=X*l+a,k=Math.sin(K),q=Math.cos(K);T.x=L*k,T.y=-C*n+g,T.z=L*q,d.push(T.x,T.y,T.z),M.set(k,A,q).normalize(),h.push(M.x,M.y,M.z),f.push(X,1-C),E.push(m++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const C=_[E][x],L=_[E+1][x],D=_[E+1][x+1],X=_[E][x+1];(e>0||E!==0)&&(u.push(C,L,X),w+=3),(t>0||E!==r-1)&&(u.push(L,D,X),w+=3)}c.addGroup(p,w,0),p+=w}function b(M){const T=m,w=new He,A=new I;let x=0;const E=M===!0?e:t,C=M===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),m++;const L=m;for(let D=0;D<=s;D++){const K=D/s*l+a,k=Math.cos(K),q=Math.sin(K);A.x=E*q,A.y=g*C,A.z=E*k,d.push(A.x,A.y,A.z),h.push(0,C,0),w.x=k*.5+.5,w.y=q*.5*C+.5,f.push(w.x,w.y),m++}for(let D=0;D<s;D++){const X=T+D,K=L+D;M===!0?u.push(K,K+1,X):u.push(K+1,K,X),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ro extends lt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ro(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tl extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const b=new I,M=new I,T=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],M),f(t[w+2],T),l(b,M,T,y)}function l(y,b,M,T){const w=T+1,A=[];for(let x=0;x<=w;x++){A[x]=[];const E=y.clone().lerp(M,x/w),C=b.clone().lerp(M,x/w),L=w-x;for(let D=0;D<=L;D++)D===0&&x===w?A[x][D]=E:A[x][D]=E.clone().lerp(C,D/L)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){const C=Math.floor(E/2);E%2===0?(h(A[x][C+1]),h(A[x+1][C]),h(A[x][C])):(h(A[x][C+1]),h(A[x+1][C+1]),h(A[x+1][C]))}}function c(y){const b=new I;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function u(){const y=new I;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const M=g(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(M,1-T)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){const b=o[y+0],M=o[y+2],T=o[y+4],w=Math.max(b,M,T),A=Math.min(b,M,T);w>.9&&A<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,b){const M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function m(){const y=new I,b=new I,M=new I,T=new I,w=new He,A=new He,x=new He;for(let E=0,C=0;E<r.length;E+=9,C+=6){y.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),w.set(o[C+0],o[C+1]),A.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),T.copy(y).add(b).add(M).divideScalar(3);const L=g(T);_(w,C+0,y,L),_(A,C+2,b,L),_(x,C+4,M,L)}}function _(y,b,M,T){T<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.vertices,e.indices,e.radius,e.detail)}}const vr=new I,Mr=new I,Ho=new I,yr=new fn;class dp extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(kr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:p}=yr;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),yr.getNormal(Ho),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const b=(y+1)%3,M=d[y],T=d[b],w=yr[u[y]],A=yr[u[b]],x=`${M}_${T}`,E=`${T}_${M}`;E in h&&h[E]?(Ho.dot(h[E].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),h[E]=null):x in h||(h[x]={index0:c[y],index1:c[b],normal:Ho.clone()})}}for(const m in h)if(h[m]){const{index0:_,index1:g}=h[m];vr.fromBufferAttribute(a,_),Mr.fromBufferAttribute(a,g),f.push(vr.x,vr.y,vr.z),f.push(Mr.x,Mr.y,Mr.z)}this.setAttribute("position",new Xe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Kn extends Tl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kn(e.radius,e.detail)}}class Hs extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const y=p*h-o;for(let b=0;b<c;b++){const M=b*d-r;m.push(M,-y,0),_.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const b=y+c*p,M=y+c*(p+1),T=y+1+c*(p+1),w=y+1+c*p;f.push(b,M,w),f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rs extends Rt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new I,m=new He;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const y=p+g,b=y,M=y+n+1,T=y+n+2,w=y+1;a.push(b,M,w),a.push(M,T,w)}}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vs extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,h=new I,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const y=[],b=p/n,M=o+b*a,T=e*Math.cos(M),w=Math.sqrt(e*e-T*T);let A=0;p===0&&o===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const E=x/t,C=s+E*r;d.x=-w*Math.cos(C),d.y=T,d.z=w*Math.sin(C),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(E+A,1-b),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=u[p][y+1],M=u[p][y],T=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&f.push(b,M,w),(p!==n-1||l<Math.PI)&&f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Al extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new I,f=new I,m=new I;for(let _=0;_<=n;_++){const g=o+_/n*a;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const p=(s+1)*_+g-1,y=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,M=(s+1)*_+g;l.push(p,y,M),l.push(y,b,M)}this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(zc(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(zc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const s in n)e[s]=n[s]}return e}function zc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const pp={clone:os,merge:Yt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xp extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ot extends us{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=ul,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _p extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rl extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Mp extends Rl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Vo=new et,Gc=new I,Hc=new I;class Uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Us||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sr=new I,br=new dn,Tn=new I;class Fu extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sr,br,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sr,br,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new I,Vc=new He,Wc=new He;class cn extends Fu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Wc),t.subVectors(Wc,Vc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yp extends Uu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Sp extends Rl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class oo extends Fu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bp extends Uu{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xc extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new bp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Wi=-90,Xi=1;class Ep extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const r=new cn(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const o=new cn(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const a=new cn(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const l=new cn(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new cn(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class wp extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $c=new et;class Tp{constructor(e,t,n=0,s=1/0){this.ray=new El(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $c.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($c),this}intersectObject(e,t=!0,n=[]){return Ya(e,this,n,t),n.sort(qc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ya(e[s],this,n,t);return n.sort(qc),n}}function qc(i,e){return i.distance-e.distance}function Ya(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ya(r[o],e,t,!0)}}const Vl=class Vl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Vl.prototype.isMatrix2=!0;let Yc=Vl;function Kc(i,e,t,n){const s=Ap(n);switch(t){case bu:return i*e;case ml:return i*e/s.components*s.byteLength;case gl:return i*e/s.components*s.byteLength;case Ti:return i*e*2/s.components*s.byteLength;case xl:return i*e*2/s.components*s.byteLength;case Eu:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case _l:return i*e*4/s.components*s.byteLength;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:case va:return Math.max(i,16)*Math.max(e,8)/4;case ga:case _a:return Math.max(i,8)*Math.max(e,8)/2;case Ma:case ya:case ba:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Hr:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case za:case Ga:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Va:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vr:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ap(i){switch(i){case nn:case vu:return{byteLength:1,components:1};case Ds:case Mu:case $n:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Dn:case dl:case _n:return{byteLength:4,components:1};case yu:case Su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ou(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rp(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Lp,alphamap_pars_fragment:Ip,alphatest_fragment:Dp,alphatest_pars_fragment:Np,aomap_fragment:Up,aomap_pars_fragment:Fp,batching_pars_vertex:Op,batching_vertex:kp,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Gp,iridescence_fragment:Hp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Kp,color_pars_vertex:Zp,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:ym,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:xm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:Mm,lights_toon_fragment:Sm,lights_toon_pars_fragment:bm,lights_phong_fragment:Em,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,lightprobes_pars_fragment:Lm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Um,map_fragment:Fm,map_pars_fragment:Om,map_particle_fragment:km,map_particle_pars_fragment:Bm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:$m,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:Km,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:t0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:d0,shadowmap_vertex:f0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:x0,skinnormal_vertex:_0,specularmap_fragment:v0,specularmap_pars_fragment:M0,tonemapping_fragment:y0,tonemapping_pars_fragment:S0,transmission_fragment:b0,transmission_pars_fragment:E0,uv_pars_fragment:w0,uv_pars_vertex:T0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:L0,backgroundCube_frag:I0,cube_vert:D0,cube_frag:N0,depth_vert:U0,depth_frag:F0,distance_vert:O0,distance_frag:k0,equirect_vert:B0,equirect_frag:z0,linedashed_vert:G0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:$0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:K0,meshnormal_frag:Z0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:j0,meshphysical_frag:eg,meshtoon_vert:tg,meshtoon_frag:ng,points_vert:ig,points_frag:sg,shadow_vert:rg,shadow_frag:og,sprite_vert:ag,sprite_frag:lg},fe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Rn={basic:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Yt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Yt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Yt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Yt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Yt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Yt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Yt([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Yt([fe.lights,fe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Rn.physical={uniforms:Yt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Er={r:0,b:0,g:0},cg=new et,ku=new Fe;ku.set(-1,0,0,0,1,0,0,0,1);function hg(i,e,t,n,s,r){const o=new Se(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function m(y){let b=!1;const M=f(y);M===null?g(o,a):M&&M.isColor&&(g(M,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,b){const M=f(b);M&&(M.isCubeTexture||M.mapping===so)?(c===void 0&&(c=new ze(new We(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:os(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ku),c.material.toneMapped=qe.getTransfer(M.colorSpace)!==ot,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ze(new Hs(2,2),new Nn({name:"BackgroundMaterial",uniforms:os(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=qe.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(Er,Nu(i)),t.buffers.color.setClear(Er.r,Er.g,Er.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:_,dispose:p}}function ug(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(L,D,X,K,k){let q=!1;const H=d(L,K,X,D);r!==H&&(r=H,c(r.object)),q=f(L,K,X,k),q&&m(L,K,X,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(L,D,X,K),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,D,X,K){const k=K.wireframe===!0;let q=n[D.id];q===void 0&&(q={},n[D.id]=q);const H=L.isInstancedMesh===!0?L.id:0;let j=q[H];j===void 0&&(j={},q[H]=j);let te=j[X.id];te===void 0&&(te={},j[X.id]=te);let re=te[k];return re===void 0&&(re=h(l()),te[k]=re),re}function h(L){const D=[],X=[],K=[];for(let k=0;k<t;k++)D[k]=0,X[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:K,object:L,attributes:{},index:null}}function f(L,D,X,K){const k=r.attributes,q=D.attributes;let H=0;const j=X.getAttributes();for(const te in j)if(j[te].location>=0){const ue=k[te];let Me=q[te];if(Me===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(Me=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(Me=L.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==K}function m(L,D,X,K){const k={},q=D.attributes;let H=0;const j=X.getAttributes();for(const te in j)if(j[te].location>=0){let ue=q[te];ue===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor));const Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),k[te]=Me,H++}r.attributes=k,r.attributesNum=H,r.index=K}function _(){const L=r.newAttributes;for(let D=0,X=L.length;D<X;D++)L[D]=0}function g(L){p(L,0)}function p(L,D){const X=r.newAttributes,K=r.enabledAttributes,k=r.attributeDivisors;X[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),k[L]!==D&&(i.vertexAttribDivisor(L,D),k[L]=D)}function y(){const L=r.newAttributes,D=r.enabledAttributes;for(let X=0,K=D.length;X<K;X++)D[X]!==L[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function b(L,D,X,K,k,q,H){H===!0?i.vertexAttribIPointer(L,D,X,k,q):i.vertexAttribPointer(L,D,X,K,k,q)}function M(L,D,X,K){_();const k=K.attributes,q=X.getAttributes(),H=D.defaultAttributeValues;for(const j in q){const te=q[j];if(te.location>=0){let re=k[j];if(re===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),re!==void 0){const ue=re.normalized,Me=re.itemSize,tt=e.get(re);if(tt===void 0)continue;const xt=tt.buffer,nt=tt.type,Q=tt.bytesPerElement,oe=nt===i.INT||nt===i.UNSIGNED_INT||re.gpuType===dl;if(re.isInterleavedBufferAttribute){const ne=re.data,Ne=ne.stride,Oe=re.offset;if(ne.isInstancedInterleavedBuffer){for(let Le=0;Le<te.locationSize;Le++)p(te.location+Le,ne.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Le=0;Le<te.locationSize;Le++)g(te.location+Le);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Le=0;Le<te.locationSize;Le++)b(te.location+Le,Me/te.locationSize,nt,ue,Ne*Q,(Oe+Me/te.locationSize*Le)*Q,oe)}else{if(re.isInstancedBufferAttribute){for(let ne=0;ne<te.locationSize;ne++)p(te.location+ne,re.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ne=0;ne<te.locationSize;ne++)g(te.location+ne);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let ne=0;ne<te.locationSize;ne++)b(te.location+ne,Me/te.locationSize,nt,ue,Me*Q,Me/te.locationSize*ne*Q,oe)}}else if(H!==void 0){const ue=H[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(te.location,ue);break;case 3:i.vertexAttrib3fv(te.location,ue);break;case 4:i.vertexAttrib4fv(te.location,ue);break;default:i.vertexAttrib1fv(te.location,ue)}}}}y()}function T(){E();for(const L in n){const D=n[L];for(const X in D){const K=D[X];for(const k in K){const q=K[k];for(const H in q)u(q[H].object),delete q[H];delete K[k]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const X in D){const K=D[X];for(const k in K){const q=K[k];for(const H in q)u(q[H].object),delete q[H];delete K[k]}}delete n[L.id]}function A(L){for(const D in n){const X=n[D];for(const K in X){const k=X[K];if(k[L.id]===void 0)continue;const q=k[L.id];for(const H in q)u(q[H].object),delete q[H];delete k[L.id]}}}function x(L){for(const D in n){const X=n[D],K=L.isInstancedMesh===!0?L.id:0,k=X[K];if(k!==void 0){for(const q in k){const H=k[q];for(const j in H)u(H[j].object),delete H[j];delete k[q]}delete X[K],Object.keys(X).length===0&&delete n[D]}}}function E(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function dg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_n&&!x)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:w}}function pg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new vi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const y=r?0:n,b=y*4;let M=p.clippingState||null;l.value=M,M=u(m,h,b,f);for(let T=0;T!==b;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,M=f;b!==_;++b,M+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const hi=4,Zc=[.125,.215,.35,.446,.526,.582],Si=20,mg=256,ys=new oo,Jc=new Se;let Wo=null,Xo=0,$o=0,qo=!1;const gg=new I;class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=gg}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,$o),this._renderer.xr.enabled=qo,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:$n,format:vn,colorSpace:Wr,depthBuffer:!1},s=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xg(r)),this._blurMaterial=vg(r,e,t),this._ggxMaterial=_g(r,e,t)}return s}_compileMaterial(e){const t=new ze(new Rt,e);this._renderer.compile(t,ys)}_sceneToCubeUV(e,t,n,s,r){const l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Jc),d.toneMapping=Ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new We,new Zi({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Jc),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const T=this._cubeSize;$i(s,M*T,b>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===wi||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-hi?n-m+hi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,$i(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,ys),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,$i(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(a,ys)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Si;g>Si&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);const p=[];let y=0;for(let A=0;A<Si;++A){const x=A/_,E=Math.exp(-x*x/2);p.push(E),A===0?y+=E:A<g&&(y+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=m,h.mipInt.value=b-n;const M=this._sizeLods[s],T=3*M*(s>b-hi?s-b+hi:0),w=4*(this._cubeSize-M);$i(t,T,w,3*M,2*M),l.setRenderTarget(t),l.render(d,ys)}}function xg(i){const e=[],t=[],n=[];let s=i;const r=i-hi+1+Zc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-hi?l=Zc[o-i+hi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),b=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,x=w>2?0:-1,E=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];y.set(E,_*m*w),b.set(h,g*m*w);const C=[w,w,w,w,w,w];M.set(C,p*m*w)}const T=new Rt;T.setAttribute("position",new Sn(y,_)),T.setAttribute("uv",new Sn(b,g)),T.setAttribute("faceIndex",new Sn(M,p)),n.push(new ze(T,null)),s>hi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function jc(i,e,t){const n=new In(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _g(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ao(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vg(i,e,t){const n=new Float32Array(Si),s=new I(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function eh(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function th(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bu extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Iu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new We(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Vn});r.uniforms.tEquirect.value=t;const o=new ze(s,r),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Vt),new Ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function Mg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===mo||f===go)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new Bu(m.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,m=f===mo||f===go,_=f===wi||f===ss;if(m||_){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Qc(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Qc(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,f){return f===mo?h.mapping=wi:f===go&&(h.mapping=ss),h}function l(h){let f=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function yg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ji("WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let b=0,M=y.length;b<M;b+=3){const T=y[b+0],w=y[b+1],A=y[b+2];h.push(T,w,w,A,A,T)}}else{const y=m.array;_=m.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const T=b+0,w=b+1,A=b+2;h.push(T,w,w,A,A,T)}}const g=new(m.count>=65535?Cu:Ru)(h,1);g.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function bg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Eg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wg(i,e,t){const n=new WeakMap,s=new gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let T=a.attributes.position.count*M,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*d),x=new Tu(A,T,w,d);x.type=_n,x.needsUpdate=!0;const E=M*4;for(let L=0;L<d;L++){const D=p[L],X=y[L],K=b[L],k=T*w*4*L;for(let q=0;q<D.count;q++){const H=q*E;m===!0&&(s.fromBufferAttribute(D,q),A[k+H+0]=s.x,A[k+H+1]=s.y,A[k+H+2]=s.z,A[k+H+3]=0),_===!0&&(s.fromBufferAttribute(X,q),A[k+H+4]=s.x,A[k+H+5]=s.y,A[k+H+6]=s.z,A[k+H+7]=0),g===!0&&(s.fromBufferAttribute(K,q),A[k+H+8]=s.x,A[k+H+9]=s.y,A[k+H+10]=s.z,A[k+H+11]=K.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new He(T,w)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Tg(i,e,t,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Ag={[uu]:"LINEAR_TONE_MAPPING",[du]:"REINHARD_TONE_MAPPING",[fu]:"CINEON_TONE_MAPPING",[pu]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[xu]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function Rg(i,e,t,n,s,r){const o=new In(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new rs(e,t):void 0}),a=new In(e,t,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Rt;l.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Xe([0,2,0,0,2,0],2));const c=new xp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ze(l,c),d=new oo(-1,1,1,-1,0,1);let h=null,f=null,m=!1,_,g=null,p=[],y=!1;this.setSize=function(b,M){o.setSize(b,M),a.setSize(b,M);for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(b,M)}},this.setEffects=function(b){p=b,y=p.length>0&&p[0].isRenderPass===!0;const M=o.width,T=o.height;for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(M,T)}},this.begin=function(b,M){if(m||b.toneMapping===Ln&&p.length===0)return!1;if(g=M,M!==null){const T=M.width,w=M.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return y===!1&&b.setRenderTarget(o),_=b.toneMapping,b.toneMapping=Ln,!0},this.hasRenderPass=function(){return y},this.end=function(b,M){b.toneMapping=_,m=!0;let T=o,w=a;for(let A=0;A<p.length;A++){const x=p[A];if(x.enabled!==!1&&(x.render(b,w,T,M),x.needsSwap!==!1)){const E=T;T=w,w=E}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,c.defines={},qe.getTransfer(h)===ot&&(c.defines.SRGB_TRANSFER="");const A=Ag[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(g),b.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const zu=new Xt,Ka=new rs(1,1),Gu=new Tu,Hu=new Wf,Vu=new Iu,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Lt(t,n)}}function Ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Lt(t,n)}}function Ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Lt(t,n)}}function Fg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function zg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Wg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ka.compareFunction=t.isReversedDepthBuffer()?Ml:vl,r=Ka):r=zu,t.setTexture2D(e||r,s)}function Xg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hu,s)}function $g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vu,s)}function qg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gu,s)}function Yg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Ig;case 35674:return Dg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return kg;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return Gg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return qg}}function Kg(i,e){i.uniform1fv(this.addr,e)}function Zg(i,e){const t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Jg(i,e){const t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function Qg(i,e){const t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function jg(i,e){const t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ex(i,e){const t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tx(i,e){const t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nx(i,e){i.uniform1iv(this.addr,e)}function ix(i,e){i.uniform2iv(this.addr,e)}function sx(i,e){i.uniform3iv(this.addr,e)}function rx(i,e){i.uniform4iv(this.addr,e)}function ox(i,e){i.uniform1uiv(this.addr,e)}function ax(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function cx(i,e){i.uniform4uiv(this.addr,e)}function hx(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ka:o=zu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ux(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hu,r[o])}function dx(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vu,r[o])}function fx(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gu,r[o])}function px(i){switch(i){case 5126:return Kg;case 35664:return Zg;case 35665:return Jg;case 35666:return Qg;case 35674:return jg;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}class mx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yg(t.type)}}class gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=px(t.type)}}class xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function ah(i,e){i.seq.push(e),i.map[e.id]=e}function _x(i,e,t){const n=i.name,s=n.length;for(Yo.lastIndex=0;;){const r=Yo.exec(n),o=Yo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ah(t,c===void 0?new mx(a,i,e):new gx(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new xx(a),ah(t,d)),t=d}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);_x(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function lh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vx=37297;let Mx=0;function yx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ch=new Fe;function Sx(i){qe._getMatrix(ch,qe.workingColorSpace,i);const e=`mat3( ${ch.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yx(i.getShaderSource(e),a)}else return r}function bx(i,e){const t=Sx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ex={[uu]:"Linear",[du]:"Reinhard",[fu]:"Cineon",[pu]:"ACESFilmic",[gu]:"AgX",[xu]:"Neutral",[mu]:"Custom"};function wx(i,e){const t=Ex[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new I;function Tx(){qe.getLuminanceCoefficients(wr);const i=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function Rx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ws(i){return i!==""}function uh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(Px,Ix)}const Lx=new Map;function Ix(i,e){let t=Ge[e];if(t===void 0){const n=Lx.get(e);if(n!==void 0)t=Ge[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Za(t)}const Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(Dx,Nx)}function Nx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ux={[Dr]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Fx(i){return Ux[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ox={[wi]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE_UV"};function kx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ox[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bx={[ss]:"ENVMAP_MODE_REFRACTION"};function zx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gx={[ul]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function Hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gx[i.combine]||"ENVMAP_BLENDING_NONE"}function Vx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fx(t),c=kx(t),u=zx(t),d=Hx(t),h=Vx(t),f=Ax(t),m=Rx(r),_=s.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ws).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(g=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ln?wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),Tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=Za(o),o=uh(o,t),o=dh(o,t),a=Za(a),a=uh(a,t),a=dh(a,t),o=fh(o),a=fh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+g+o,M=y+p+a,T=lh(s,s.VERTEX_SHADER,b),w=lh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,T),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(T)||"",K=s.getShaderInfoLog(w)||"",k=D.trim(),q=X.trim(),H=K.trim();let j=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const re=hh(s,T,"vertex"),ue=hh(s,w,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+re+`
`+ue)}else k!==""?De("WebGLProgram: Program Info Log:",k):(q===""||H==="")&&(te=!1);te&&(L.diagnostics={runnable:j,programLog:k,vertexShader:{log:q,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(T),s.deleteShader(w),x=new Br(s,_),E=Cx(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,vx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Xx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qx(e),t.set(e,n)),n}}class qx{constructor(e){this.id=Xx++,this.code=e,this.usedTimes=0}}function Yx(i){return i===Ti||i===Hr||i===Vr}function Kx(i,e,t,n,s,r){const o=new Sl,a=new $x,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,C,L,D,X){const K=L.fog,k=D.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||q,H),te=j&&j.mapping===so?j.image.height:null,re=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Me=ue!==void 0?ue.length:0;let tt=0;k.morphAttributes.position!==void 0&&(tt=1),k.morphAttributes.normal!==void 0&&(tt=2),k.morphAttributes.color!==void 0&&(tt=3);let xt,nt,Q,oe;if(re){const be=Rn[re];xt=be.vertexShader,nt=be.fragmentShader}else{xt=x.vertexShader,nt=x.fragmentShader;const be=a.getVertexShaderStage(x),vt=a.getFragmentShaderStage(x);a.update(x,be,vt),Q=be.id,oe=vt.id}const ne=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,St=!!x.map,$e=!!x.matcap,ct=!!j,it=!!x.aoMap,Qe=!!x.lightMap,wt=!!x.bumpMap&&x.wireframe===!1,Ct=!!x.normalMap,It=!!x.displacementMap,Ft=!!x.emissiveMap,_t=!!x.metalnessMap,Tt=!!x.roughnessMap,U=x.anisotropy>0,Kt=x.clearcoat>0,rt=x.dispersion>0,R=x.iridescence>0,v=x.sheen>0,O=x.transmission>0,V=U&&!!x.anisotropyMap,$=Kt&&!!x.clearcoatMap,ie=Kt&&!!x.clearcoatNormalMap,ae=Kt&&!!x.clearcoatRoughnessMap,Y=R&&!!x.iridescenceMap,J=R&&!!x.iridescenceThicknessMap,le=v&&!!x.sheenColorMap,Te=v&&!!x.sheenRoughnessMap,de=!!x.specularMap,ce=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Ie=O&&!!x.transmissionMap,ke=O&&!!x.thicknessMap,N=!!x.gradientMap,se=!!x.alphaMap,Z=x.alphaTest>0,he=!!x.alphaHash,ge=!!x.extensions;let ee=Ln;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ee=i.toneMapping);const we={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:xt,fragmentShader:nt,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Le,batchingColor:Le&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:St,matcap:$e,envMap:ct,envMapMode:ct&&j.mapping,envMapCubeUVHeight:te,aoMap:it,lightMap:Qe,bumpMap:wt,normalMap:Ct,displacementMap:It,emissiveMap:Ft,normalMapObjectSpace:Ct&&x.normalMapType===Af,normalMapTangentSpace:Ct&&x.normalMapType===$a,packedNormalMap:Ct&&x.normalMapType===$a&&Yx(x.normalMap.format),metalnessMap:_t,roughnessMap:Tt,anisotropy:U,anisotropyMap:V,clearcoat:Kt,clearcoatMap:$,clearcoatNormalMap:ie,clearcoatRoughnessMap:ae,dispersion:rt,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:v,sheenColorMap:le,sheenRoughnessMap:Te,specularMap:de,specularColorMap:ce,specularIntensityMap:Ce,transmission:O,transmissionMap:Ie,thicknessMap:ke,gradientMap:N,opaque:x.transparent===!1&&x.blending===Qi&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:Z,alphaHash:he,combine:x.combine,mapUv:St&&m(x.map.channel),aoMapUv:it&&m(x.aoMap.channel),lightMapUv:Qe&&m(x.lightMap.channel),bumpMapUv:wt&&m(x.bumpMap.channel),normalMapUv:Ct&&m(x.normalMap.channel),displacementMapUv:It&&m(x.displacementMap.channel),emissiveMapUv:Ft&&m(x.emissiveMap.channel),metalnessMapUv:_t&&m(x.metalnessMap.channel),roughnessMapUv:Tt&&m(x.roughnessMap.channel),anisotropyMapUv:V&&m(x.anisotropyMap.channel),clearcoatMapUv:$&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(x.sheenRoughnessMap.channel),specularMapUv:de&&m(x.specularMap.channel),specularColorMapUv:ce&&m(x.specularColorMap.channel),specularIntensityMapUv:Ce&&m(x.specularIntensityMap.channel),transmissionMapUv:Ie&&m(x.transmissionMap.channel),thicknessMapUv:ke&&m(x.thicknessMap.channel),alphaMapUv:se&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ct||U),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(St||se),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:St&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(E,x),y(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){const E=f[x.type];let C;if(E){const L=Rn[E];C=pp.clone(L.uniforms)}else C=x.uniforms;return C}function M(x,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new Wx(i,E,x,s),c.push(C),u.set(E,C)),C}function T(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:A}}function Zx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,_,g,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=m,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=g,y.group=p),e++,y}function l(h,f,m,_,g,p){const y=a(h,f,m,_,g,p);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):t.push(y)}function c(h,f,m,_,g,p){const y=a(h,f,m,_,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,f,m){t.length>1&&t.sort(h||Jx),n.length>1&&n.sort(f||mh),s.length>1&&s.sort(f||mh),m&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Qx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Se};break;case"SpotLight":t={position:new I,direction:new I,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i){const e=new jx,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new et,o=new et;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,b=0,M=0,T=0,w=0,A=0;c.sort(n_);for(let E=0,C=c.length;E<C;E++){const L=c[E],D=L.color,X=L.intensity,K=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ti?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=D.r*X,d+=D.g*X,h+=D.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],X);A++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,j=t.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(D).multiplyScalar(X),q.distance=K,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;const H=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,H.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=H.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=k,M++}_++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(D).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=q,g++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const H=L.shadow,j=t.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=q,m++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=A,n.version=t_++)}function l(c,u){let d=0,h=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function xh(i){const e=new i_(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function s_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xh(i),e.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],l_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],_h=new et,Ss=new I,Ko=new I;function c_(i,e,t){let n=new wl;const s=new He,r=new He,o=new gt,a=new _p,l=new vp,c={},u=t.maxTextureSize,d={[fi]:Jt,[Jt]:fi,[un]:un},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Rt;m.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let p=this.type;this.render=function(w,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===hu&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dr);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Vn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=p!==this.type;X&&A.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(k=>k.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,k=w.length;K<k;K++){const q=w[K],H=q.shadow;if(H===void 0){De("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));const te=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Es){if(q.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new In(s.x,s.y,{format:Ti,type:$n,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new rs(s.x,s.y,_n),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=qn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt}else q.isPointLight?(H.map=new Bu(s.x),H.map.depthTexture=new up(s.x,Dn)):(H.map=new In(s.x,s.y),H.map.depthTexture=new rs(s.x,s.y,Dn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=qn,this.type===Dr?(H.map.depthTexture.compareFunction=te?Ml:vl,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt);H.camera.updateProjectionMatrix()}const re=H.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<re;ue++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ue),i.clear();else{ue===0&&(i.setRenderTarget(H.map),i.clear());const Me=H.getViewport(ue);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),D.viewport(o)}if(q.isPointLight){const Me=H.camera,tt=H.matrix,xt=q.distance||Me.far;xt!==Me.far&&(Me.far=xt,Me.updateProjectionMatrix()),Ss.setFromMatrixPosition(q.matrixWorld),Me.position.copy(Ss),Ko.copy(Me.position),Ko.add(a_[ue]),Me.up.copy(l_[ue]),Me.lookAt(Ko),Me.updateMatrixWorld(),tt.makeTranslation(-Ss.x,-Ss.y,-Ss.z),_h.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(_h,Me.coordinateSystem,Me.reversedDepth)}else H.updateMatrices(q);n=H.getFrustum(),M(A,x,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Es&&y(H,x),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,L)};function y(w,A){const x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new In(s.x,s.y,{format:Ti,type:$n})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,x,f,_,null)}function b(w,A,x,E){let C=null;const L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=C.uuid,X=A.uuid;let K=c[D];K===void 0&&(K={},c[D]=K);let k=K[X];k===void 0&&(k=C.clone(),K[X]=k,A.addEventListener("dispose",T)),C=k}if(C.visible=A.visible,C.wireframe=A.wireframe,E===Es?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=x}return C}function M(w,A,x,E,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Es)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const X=e.update(w),K=w.material;if(Array.isArray(K)){const k=X.groups;for(let q=0,H=k.length;q<H;q++){const j=k[q],te=K[j.materialIndex];if(te&&te.visible){const re=b(w,te,E,C);w.onBeforeShadow(i,w,A,x,X,re,j),i.renderBufferDirect(x,null,X,re,w,j),w.onAfterShadow(i,w,A,x,X,re,j)}}}else if(K.visible){const k=b(w,K,E,C);w.onBeforeShadow(i,w,A,x,X,k,null),i.renderBufferDirect(x,null,X,k,w,null),w.onAfterShadow(i,w,A,x,X,k,null)}}const D=w.children;for(let X=0,K=D.length;X<K;X++)M(D[X],A,x,E,C)}function T(w){w.target.removeEventListener("dispose",T);for(const x in c){const E=c[x],C=w.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function h_(i,e){function t(){let N=!1;const se=new gt;let Z=null;const he=new gt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){N=ge},setClear:function(ge,ee,we,be,vt){vt===!0&&(ge*=be,ee*=be,we*=be),se.set(ge,ee,we,be),he.equals(se)===!1&&(i.clearColor(ge,ee,we,be),he.copy(se))},reset:function(){N=!1,Z=null,he.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,Z=null,he=null,ge=null;return{setReversed:function(ee){if(se!==ee){const we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const be=ge;ge=null,this.setClear(be)}},getReversed:function(){return se},setTest:function(ee){ee?ne(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(ee){Z!==ee&&!N&&(i.depthMask(ee),Z=ee)},setFunc:function(ee){if(se&&(ee=Of[ee]),he!==ee){switch(ee){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ee}},setLocked:function(ee){N=ee},setClear:function(ee){ge!==ee&&(ge=ee,se&&(ee=1-ee),i.clearDepth(ee))},reset:function(){N=!1,Z=null,he=null,ge=null,se=!1}}}function s(){let N=!1,se=null,Z=null,he=null,ge=null,ee=null,we=null,be=null,vt=null;return{setTest:function(dt){N||(dt?ne(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(dt){se!==dt&&!N&&(i.stencilMask(dt),se=dt)},setFunc:function(dt,bn,En){(Z!==dt||he!==bn||ge!==En)&&(i.stencilFunc(dt,bn,En),Z=dt,he=bn,ge=En)},setOp:function(dt,bn,En){(ee!==dt||we!==bn||be!==En)&&(i.stencilOp(dt,bn,En),ee=dt,we=bn,be=En)},setLocked:function(dt){N=dt},setClear:function(dt){vt!==dt&&(i.clearStencil(dt),vt=dt)},reset:function(){N=!1,se=null,Z=null,he=null,ge=null,ee=null,we=null,be=null,vt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,y=null,b=null,M=null,T=null,w=null,A=null,x=new Se(0,0,0),E=0,C=!1,L=null,D=null,X=null,K=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),H=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),H=j>=2);let re=null,ue={};const Me=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),xt=new gt().fromArray(Me),nt=new gt().fromArray(tt);function Q(N,se,Z,he){const ge=new Uint8Array(4),ee=i.createTexture();i.bindTexture(N,ee),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<Z;we++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(se+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ee}const oe={};oe[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(is),wt(!1),Ct(hc),ne(i.CULL_FACE),it(Vn);function ne(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Ne(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Oe(N,se){return h[N]!==se?(i.bindFramebuffer(N,se),h[N]=se,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Le(N,se){let Z=m,he=!1;if(N){Z=f.get(se),Z===void 0&&(Z=[],f.set(se,Z));const ge=N.textures;if(Z.length!==ge.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,we=ge.length;ee<we;ee++)Z[ee]=i.COLOR_ATTACHMENT0+ee;Z.length=ge.length,he=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,he=!0);he&&i.drawBuffers(Z)}function St(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const $e={[yi]:i.FUNC_ADD,[of]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};$e[lf]=i.MIN,$e[cf]=i.MAX;const ct={[hf]:i.ZERO,[uf]:i.ONE,[df]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[gf]:i.DST_COLOR,[pf]:i.DST_ALPHA,[ff]:i.ONE_MINUS_SRC_COLOR,[aa]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[mf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[yf]:i.CONSTANT_ALPHA,[Sf]:i.ONE_MINUS_CONSTANT_ALPHA};function it(N,se,Z,he,ge,ee,we,be,vt,dt){if(N===Vn){g===!0&&(Ne(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),N!==rf){if(N!==p||dt!==C){if((y!==yi||T!==yi)&&(i.blendEquation(i.FUNC_ADD),y=yi,T=yi),dt)switch(N){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}b=null,M=null,w=null,A=null,x.set(0,0,0),E=0,p=N,C=dt}return}ge=ge||se,ee=ee||Z,we=we||he,(se!==y||ge!==T)&&(i.blendEquationSeparate($e[se],$e[ge]),y=se,T=ge),(Z!==b||he!==M||ee!==w||we!==A)&&(i.blendFuncSeparate(ct[Z],ct[he],ct[ee],ct[we]),b=Z,M=he,w=ee,A=we),(be.equals(x)===!1||vt!==E)&&(i.blendColor(be.r,be.g,be.b,vt),x.copy(be),E=vt),p=N,C=!1}function Qe(N,se){N.side===un?Ne(i.CULL_FACE):ne(i.CULL_FACE);let Z=N.side===Jt;se&&(Z=!Z),wt(Z),N.blending===Qi&&N.transparent===!1?it(Vn):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const he=N.stencilWrite;a.setTest(he),he&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function Ct(N){N!==nf?(ne(i.CULL_FACE),N!==D&&(N===hc?i.cullFace(i.BACK):N===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),D=N}function It(N){N!==X&&(H&&i.lineWidth(N),X=N)}function Ft(N,se,Z){N?(ne(i.POLYGON_OFFSET_FILL),(K!==se||k!==Z)&&(K=se,k=Z,o.getReversed()&&(se=-se),i.polygonOffset(se,Z))):Ne(i.POLYGON_OFFSET_FILL)}function _t(N){N?ne(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Tt(N){N===void 0&&(N=i.TEXTURE0+q-1),re!==N&&(i.activeTexture(N),re=N)}function U(N,se,Z){Z===void 0&&(re===null?Z=i.TEXTURE0+q-1:Z=re);let he=ue[Z];he===void 0&&(he={type:void 0,texture:void 0},ue[Z]=he),(he.type!==N||he.texture!==se)&&(re!==Z&&(i.activeTexture(Z),re=Z),i.bindTexture(N,se||oe[N]),he.type=N,he.texture=se)}function Kt(){const N=ue[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function v(){try{i.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ie(){try{i.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ae(){try{i.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Y(){try{i.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function J(){try{i.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function le(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Te(N,se){d[N]!==se&&(i.pixelStorei(N,se),d[N]=se)}function de(N){xt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),xt.copy(N))}function ce(N){nt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}function Ce(N,se){let Z=c.get(se);Z===void 0&&(Z=new WeakMap,c.set(se,Z));let he=Z.get(N);he===void 0&&(he=i.getUniformBlockIndex(se,N.name),Z.set(N,he))}function Ie(N,se){const he=c.get(se).get(N);l.get(se)!==he&&(i.uniformBlockBinding(se,he,N.__bindingPointIndex),l.set(se,he))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ue={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,y=null,b=null,M=null,T=null,w=null,A=null,x=new Se(0,0,0),E=0,C=!1,L=null,D=null,X=null,K=null,k=null,xt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Ne,bindFramebuffer:Oe,drawBuffers:Le,useProgram:St,setBlending:it,setMaterial:Qe,setFlipSided:wt,setCullFace:Ct,setLineWidth:It,setPolygonOffset:Ft,setScissorTest:_t,activeTexture:Tt,bindTexture:U,unbindTexture:Kt,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:Y,texImage3D:J,pixelStorei:Te,getParameter:le,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:ie,texStorage3D:ae,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:de,viewport:ce,reset:ke}}function u_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return m?new OffscreenCanvas(R,v):$r("canvas")}function g(R,v,O){let V=1;const $=rt(R);if(($.width>O||$.height>O)&&(V=O/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(V*$.width),ae=Math.floor(V*$.height);h===void 0&&(h=_(ie,ae));const Y=v?_(ie,ae):h;return Y.width=ie,Y.height=ae,Y.getContext("2d").drawImage(R,0,0,ie,ae),De("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ie+"x"+ae+")."),Y}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,v,O,V,$,ie=!1){if(R!==null){if(i[R]!==void 0)return i[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;V&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&ae&&(Y=ae.R16_EXT),O===i.SHORT&&ae&&(Y=ae.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&ae&&(Y=ae.RG16_EXT),O===i.SHORT&&ae&&(Y=ae.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&ae&&(Y=ae.RGB16_EXT),O===i.SHORT&&ae&&(Y=ae.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const J=ie?Xr:qe.getTransfer($);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=J===ot?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ae&&(Y=ae.RGBA16_EXT),O===i.SHORT&&ae&&(Y=ae.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(R,v){let O;return R?v===null||v===Dn||v===Ns?O=i.DEPTH24_STENCIL8:v===_n?O=i.DEPTH32F_STENCIL8:v===Ds&&(O=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Dn||v===Ns?O=i.DEPTH_COMPONENT24:v===_n?O=i.DEPTH_COMPONENT32F:v===Ds&&(O=i.DEPTH_COMPONENT16),O}function w(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){const v=R.target;v.removeEventListener("dispose",x),L(v)}function E(R){const v=n.get(R);if(v.__webglInit===void 0)return;const O=R.source,V=f.get(O);if(V){const $=V[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(R),Object.keys(V).length===0&&f.delete(O)}n.remove(R)}function C(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const O=R.source,V=f.get(O);delete V[v.__cacheKey],o.memory.textures--}function L(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let $=0;$<v.__webglFramebuffer[V].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[V][$]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=R.textures;for(let V=0,$=O.length;V<$;V++){const ie=n.get(O[V]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(O[V])}n.remove(R)}let D=0;function X(){D=0}function K(){return D}function k(R){D=R}function q(){const R=D;return R>=s.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function H(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function j(R,v){const O=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const V=R.image;if(V===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(O,R,v);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function te(R,v){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Ne(O,R,v);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function re(R,v){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Ne(O,R,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function ue(R,v){const O=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){Oe(O,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const Me={[Is]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},tt={[Nt]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},xt={[Rf]:i.NEVER,[Df]:i.ALWAYS,[Cf]:i.LESS,[vl]:i.LEQUAL,[Pf]:i.EQUAL,[Ml]:i.GEQUAL,[Lf]:i.GREATER,[If]:i.NOTEQUAL};function nt(R,v){if(v.type===_n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===xo||v.magFilter===Js||v.magFilter===ci||v.minFilter===Vt||v.minFilter===xo||v.minFilter===Js||v.minFilter===ci)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Me[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Me[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Me[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nt||v.minFilter!==Js&&v.minFilter!==ci||v.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Q(R,v){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const V=v.source;let $=f.get(V);$===void 0&&($={},f.set(V,$));const ie=H(v);if(ie!==R.__cacheKey){$[ie]===void 0&&($[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[ie].usedTimes++;const ae=$[R.__cacheKey];ae!==void 0&&($[R.__cacheKey].usedTimes--,ae.usedTimes===0&&C(v)),R.__cacheKey=ie,R.__webglTexture=$[ie].texture}return O}function oe(R,v,O){return Math.floor(Math.floor(R/O)/v)}function ne(R,v,O,V){const ie=R.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,V,v.data);else{ie.sort((Te,de)=>Te.start-de.start);let ae=0;for(let Te=1;Te<ie.length;Te++){const de=ie[ae],ce=ie[Te],Ce=de.start+de.count,Ie=oe(ce.start,v.width,4),ke=oe(de.start,v.width,4);ce.start<=Ce+1&&Ie===ke&&oe(ce.start+ce.count-1,v.width,4)===Ie?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++ae,ie[ae]=ce)}ie.length=ae+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Te=0,de=ie.length;Te<de;Te++){const ce=ie[Te],Ce=Math.floor(ce.start/4),Ie=Math.ceil(ce.count/4),ke=Ce%v.width,N=Math.floor(Ce/v.width),se=Ie,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ke,N,se,Z,O,V,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function Ne(R,v,O){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);const $=Q(R,v),ie=v.source;t.bindTexture(V,R.__webglTexture,i.TEXTURE0+O);const ae=n.get(ie);if(ie.version!==ae.__version||$===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Z=qe.getPrimaries(qe.workingColorSpace),he=v.colorSpace===ai?null:qe.getPrimaries(v.colorSpace),ge=v.colorSpace===ai||Z===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=g(v.image,!1,s.maxTextureSize);J=Kt(v,J);const le=r.convert(v.format,v.colorSpace),Te=r.convert(v.type);let de=M(v.internalFormat,le,Te,v.normalized,v.colorSpace,v.isVideoTexture);nt(V,v);let ce;const Ce=v.mipmaps,Ie=v.isVideoTexture!==!0,ke=ae.__version===void 0||$===!0,N=ie.dataReady,se=w(v,J);if(v.isDepthTexture)de=T(v.format===bi,v.type),ke&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,le,Te,null));else if(v.isDataTexture)if(Ce.length>0){Ie&&ke&&t.texStorage2D(i.TEXTURE_2D,se,de,Ce[0].width,Ce[0].height);for(let Z=0,he=Ce.length;Z<he;Z++)ce=Ce[Z],Ie?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Te,ce.data);v.generateMipmaps=!1}else Ie?(ke&&t.texStorage2D(i.TEXTURE_2D,se,de,J.width,J.height),N&&ne(v,J,le,Te)):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,le,Te,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,de,Ce[0].width,Ce[0].height,J.depth);for(let Z=0,he=Ce.length;Z<he;Z++)if(ce=Ce[Z],v.format!==vn)if(le!==null)if(Ie){if(N)if(v.layerUpdates.size>0){const ge=Kc(ce.width,ce.height,v.format,v.type);for(const ee of v.layerUpdates){const we=ce.data.subarray(ee*ge/ce.data.BYTES_PER_ELEMENT,(ee+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ee,ce.width,ce.height,1,le,we)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,le,Te,ce.data)}else{Ie&&ke&&t.texStorage2D(i.TEXTURE_2D,se,de,Ce[0].width,Ce[0].height);for(let Z=0,he=Ce.length;Z<he;Z++)ce=Ce[Z],v.format!==vn?le!==null?Ie?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Te,ce.data)}else if(v.isDataArrayTexture)if(Ie){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,de,J.width,J.height,J.depth),N)if(v.layerUpdates.size>0){const Z=Kc(J.width,J.height,v.format,v.type);for(const he of v.layerUpdates){const ge=J.data.subarray(he*Z/J.data.BYTES_PER_ELEMENT,(he+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,le,Te,ge)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,Te,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,le,Te,J.data);else if(v.isData3DTexture)Ie?(ke&&t.texStorage3D(i.TEXTURE_3D,se,de,J.width,J.height,J.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,Te,J.data)):t.texImage3D(i.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,le,Te,J.data);else if(v.isFramebufferTexture){if(ke)if(Ie)t.texStorage2D(i.TEXTURE_2D,se,de,J.width,J.height);else{let Z=J.width,he=J.height;for(let ge=0;ge<se;ge++)t.texImage2D(i.TEXTURE_2D,ge,de,Z,he,0,le,Te,null),Z>>=1,he>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(v),Z.onpaint=he=>{const ge=he.changedElements;for(const ee of d)ge.includes(ee.image)&&(ee.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const ge=i.RGBA,ee=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ee,we,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ie&&ke){const Z=rt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,se,de,Z.width,Z.height)}for(let Z=0,he=Ce.length;Z<he;Z++)ce=Ce[Z],Ie?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le,Te,ce):t.texImage2D(i.TEXTURE_2D,Z,de,le,Te,ce);v.generateMipmaps=!1}else if(Ie){if(ke){const Z=rt(J);t.texStorage2D(i.TEXTURE_2D,se,de,Z.width,Z.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Te,J)}else t.texImage2D(i.TEXTURE_2D,0,de,le,Te,J);p(v)&&y(V),ae.__version=ie.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Oe(R,v,O){if(v.image.length!==6)return;const V=Q(R,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const ie=n.get($);if($.version!==ie.__version||V===!0){t.activeTexture(i.TEXTURE0+O);const ae=qe.getPrimaries(qe.workingColorSpace),Y=v.colorSpace===ai?null:qe.getPrimaries(v.colorSpace),J=v.colorSpace===ai||ae===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!le&&!Te?de[ee]=g(v.image[ee],!0,s.maxCubemapSize):de[ee]=Te?v.image[ee].image:v.image[ee],de[ee]=Kt(v,de[ee]);const ce=de[0],Ce=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),ke=M(v.internalFormat,Ce,Ie,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,se=ie.__version===void 0||V===!0,Z=$.dataReady;let he=w(v,ce);nt(i.TEXTURE_CUBE_MAP,v);let ge;if(le){N&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ke,ce.width,ce.height);for(let ee=0;ee<6;ee++){ge=de[ee].mipmaps;for(let we=0;we<ge.length;we++){const be=ge[we];v.format!==vn?Ce!==null?N?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,ke,be.width,be.height,0,be.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,be.width,be.height,Ce,Ie,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,ke,be.width,be.height,0,Ce,Ie,be.data)}}}else{if(ge=v.mipmaps,N&&se){ge.length>0&&he++;const ee=rt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Ce,Ie,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,de[ee].width,de[ee].height,0,Ce,Ie,de[ee].data);for(let we=0;we<ge.length;we++){const vt=ge[we].image[ee].image;N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,vt.width,vt.height,Ce,Ie,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,ke,vt.width,vt.height,0,Ce,Ie,vt.data)}}else{N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Ie,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,Ce,Ie,de[ee]);for(let we=0;we<ge.length;we++){const be=ge[we];N?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Ce,Ie,be.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,ke,Ce,Ie,be.image[ee])}}}p(v)&&y(i.TEXTURE_CUBE_MAP),ie.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Le(R,v,O,V,$,ie){const ae=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),J=M(O.internalFormat,ae,Y,O.normalized,O.colorSpace),le=n.get(v),Te=n.get(O);if(Te.__renderTarget=v,!le.__hasExternalTextures){const de=Math.max(1,v.width>>ie),ce=Math.max(1,v.height>>ie);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ie,J,de,ce,v.depth,0,ae,Y,null):t.texImage2D($,ie,J,de,ce,0,ae,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,$,Te.__webglTexture,0,_t(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,$,Te.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(R,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const V=v.depthTexture,$=V&&V.isDepthTexture?V.type:null,ie=T(v.stencilBuffer,$),ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(v),ie,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,R)}else{const V=v.textures;for(let $=0;$<V.length;$++){const ie=V[$],ae=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),J=M(ie.internalFormat,ae,Y,ie.normalized,ie.colorSpace);Tt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(v),J,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(R,v,O){const V=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),nt(i.TEXTURE_CUBE_MAP,v.depthTexture);const le=r.convert(v.depthTexture.format),Te=r.convert(v.depthTexture.type);let de;v.depthTexture.format===qn?de=i.DEPTH_COMPONENT24:v.depthTexture.format===bi&&(de=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,v.width,v.height,0,le,Te,null)}}else j(v.depthTexture,0);const ie=$.__webglTexture,ae=_t(v),Y=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,J=v.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===qn)Tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,ie,0);else if(v.depthTexture.format===bi)Tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(R){const v=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=V}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)$e(v.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?$e(v.__webglFramebuffer[0],R,0):$e(v.__webglFramebuffer,R,0)}else if(O){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),St(v.__webglDepthbuffer[V],R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ie)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),St(v.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,v,O){const V=n.get(R);v!==void 0&&Le(V.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ct(R)}function Qe(R){const v=R.texture,O=n.get(R),V=n.get(v);R.addEventListener("dispose",x);const $=R.textures,ie=R.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,o.memory.textures++),ie){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let J=0;J<v.mipmaps.length;J++)O.__webglFramebuffer[Y][J]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ae)for(let Y=0,J=$.length;Y<J;Y++){const le=n.get($[Y]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Tt(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const J=$[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const le=r.convert(J.format,J.colorSpace),Te=r.convert(J.type),de=M(J.internalFormat,le,Te,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),ce=_t(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),St(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),nt(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(O.__webglFramebuffer[Y][J],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Le(O.__webglFramebuffer[Y],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(v)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Y=0,J=$.length;Y<J;Y++){const le=$[Y],Te=n.get(le);let de=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),nt(de,le),Le(O.__webglFramebuffer,R,le,i.COLOR_ATTACHMENT0+Y,de,0),p(le)&&y(de)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,V.__webglTexture),nt(Y,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(O.__webglFramebuffer[J],R,v,i.COLOR_ATTACHMENT0,Y,J);else Le(O.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,Y,0);p(v)&&y(Y),t.unbindTexture()}R.depthBuffer&&ct(R)}function wt(R){const v=R.textures;for(let O=0,V=v.length;O<V;O++){const $=v[O];if(p($)){const ie=b(R),ae=n.get($).__webglTexture;t.bindTexture(ie,ae),y(ie),t.unbindTexture()}}}const Ct=[],It=[];function Ft(R){if(R.samples>0){if(Tt(R)===!1){const v=R.textures,O=R.width,V=R.height;let $=i.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(R),Y=v.length>1;if(Y)for(let le=0;le<v.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<v.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Te=n.get(v[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,$,i.NEAREST),l===!0&&(Ct.length=0,It.length=0,Ct.push(i.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ct.push(ie),It.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<v.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Te=n.get(v[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function Tt(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(R){const v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Kt(R,v){const O=R.colorSpace,V=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Wr&&O!==ai&&(qe.getTransfer(O)===ot?(V!==vn||$!==nn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",O)),v}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.getTextureUnits=K,this.setTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=ue,this.rebindTextures=it,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d_(i,e){function t(n,s=ai){let r;const o=qe.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Eu)return i.RGB;if(n===vn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===Nr||n===Ur||n===Fr||n===Or)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===xa||n===_a||n===va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===ya||n===Sa||n===ba||n===Ea||n===Hr||n===wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===ya)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ba)return r.COMPRESSED_R11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===ka||n===Ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===Ga||n===Ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===za)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Va||n===Wa||n===Vr||n===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Ri{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new m_,p={},y=t.getContextAttributes();let b=null,M=null;const T=[],w=[],A=new He;let x=null;const E=new cn;E.viewport=new gt;const C=new cn;C.viewport=new gt;const L=[E,C],D=new wp;let X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=T[Q];return oe===void 0&&(oe=new Eo,T[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=T[Q];return oe===void 0&&(oe=new Eo,T[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=T[Q];return oe===void 0&&(oe=new Eo,T[Q]=oe),oe.getHandSpace()};function k(Q){const oe=w.indexOf(Q.inputSource);if(oe===-1)return;const ne=T[oe];ne!==void 0&&(ne.update(Q.inputSource,Q.frame,c||o),ne.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",H);for(let Q=0;Q<T.length;Q++){const oe=w[Q];oe!==null&&(w[Q]=null,T[Q].disconnect(oe))}X=null,K=null,g.reset();for(const Q in p)delete p[Q];e.setRenderTarget(b),f=null,h=null,d=null,s=null,M=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ne=null,Oe=null;y.depth&&(Oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?bi:qn,Ne=y.stencil?Ns:Dn);const Le={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new In(h.textureWidth,h.textureHeight,{format:vn,type:nn,depthTexture:new rs(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new In(f.framebufferWidth,f.framebufferHeight,{format:vn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Q){for(let oe=0;oe<Q.removed.length;oe++){const ne=Q.removed[oe],Ne=w.indexOf(ne);Ne>=0&&(w[Ne]=null,T[Ne].disconnect(ne))}for(let oe=0;oe<Q.added.length;oe++){const ne=Q.added[oe];let Ne=w.indexOf(ne);if(Ne===-1){for(let Le=0;Le<T.length;Le++)if(Le>=w.length){w.push(ne),Ne=Le;break}else if(w[Le]===null){w[Le]=ne,Ne=Le;break}if(Ne===-1)break}const Oe=T[Ne];Oe&&Oe.connect(ne)}}const j=new I,te=new I;function re(Q,oe,ne){j.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(ne.matrixWorld);const Ne=j.distanceTo(te),Oe=oe.projectionMatrix.elements,Le=ne.projectionMatrix.elements,St=Oe[14]/(Oe[10]-1),$e=Oe[14]/(Oe[10]+1),ct=(Oe[9]+1)/Oe[5],it=(Oe[9]-1)/Oe[5],Qe=(Oe[8]-1)/Oe[0],wt=(Le[8]+1)/Le[0],Ct=St*Qe,It=St*wt,Ft=Ne/(-Qe+wt),_t=Ft*-Qe;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_t),Q.translateZ(Ft),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Oe[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Tt=St+Ft,U=$e+Ft,Kt=Ct-_t,rt=It+(Ne-_t),R=ct*$e/U*Tt,v=it*$e/U*Tt;Q.projectionMatrix.makePerspective(Kt,rt,R,v,Tt,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let oe=Q.near,ne=Q.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),D.near=C.near=E.near=oe,D.far=C.far=E.far=ne,(X!==D.near||K!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,K=D.far),D.layers.mask=Q.layers.mask|6,E.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;const Ne=Q.parent,Oe=D.cameras;ue(D,Ne);for(let Le=0;Le<Oe.length;Le++)ue(Oe[Le],Ne);Oe.length===2?re(D,E,C):D.projectionMatrix.copy(E.projectionMatrix),Me(Q,D,Ne)};function Me(Q,oe,ne){ne===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(ne.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Q){return p[Q]};let tt=null;function xt(Q,oe){if(u=oe.getViewerPose(c||o),m=oe,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ne=!1;ne.length!==D.cameras.length&&(D.cameras.length=0,Ne=!0);for(let $e=0;$e<ne.length;$e++){const ct=ne[$e];let it=null;if(f!==null)it=f.getViewport(ct);else{const wt=d.getViewSubImage(h,ct);it=wt.viewport,$e===0&&(e.setRenderTargetTextures(M,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(M))}let Qe=L[$e];Qe===void 0&&(Qe=new cn,Qe.layers.enable($e),Qe.viewport=new gt,L[$e]=Qe),Qe.matrix.fromArray(ct.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ct.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(it.x,it.y,it.width,it.height),$e===0&&(D.matrix.copy(Qe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ne===!0&&D.cameras.push(Qe)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const $e=d.getDepthInformation(ne[0]);$e&&$e.isValid&&$e.texture&&g.init($e,s.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let $e=0;$e<ne.length;$e++){const ct=ne[$e].camera;if(ct){let it=p[ct];it||(it=new Du,p[ct]=it);const Qe=d.getCameraImage(ct);it.sourceTexture=Qe}}}}for(let ne=0;ne<T.length;ne++){const Ne=w[ne],Oe=T[ne];Ne!==null&&Oe!==void 0&&Oe.update(Ne,oe,c||o)}tt&&tt(Q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const nt=new Ou;nt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){tt=Q},this.dispose=function(){}}}const x_=new et,Wu=new Fe;Wu.set(-1,0,0,0,1,0,0,0,1);function __(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,M=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Wu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const w=T.program;n.uniformBlockBinding(M,w)}function c(M,T){let w=s[M.id];w===void 0&&(g(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",y));const A=T.program;n.updateUBOMapping(M,A);const x=e.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){const T=d();M.__bindingPointIndex=T;const w=i.createBuffer(),A=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=s[M.id],w=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,E=w.length;x<E;x++){const C=w[x];if(Array.isArray(C))for(let L=0,D=C.length;L<D;L++)f(C[L],x,L,A);else f(C,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,T,w,A){if(_(M,T,w,A)===!0){const x=M.__offset,E=M.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){const D=E[L],X=p(D);m(D,M.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function m(M,T,w){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,w)}function _(M,T,w,A){const x=M.value,E=T+"_"+w;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const C=A[E];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(M){const T=M.uniforms;let w=0;const A=16;for(let E=0,C=T.length;E<C;E++){const L=Array.isArray(T[E])?T[E]:[T[E]];for(let D=0,X=L.length;D<X;D++){const K=L[D],k=Array.isArray(K.value)?K.value:[K.value];for(let q=0,H=k.length;q<H;q++){const j=k[q],te=p(j),re=w%A,ue=re%te.boundary,Me=re+ue;w+=ue,Me!==0&&A-Me<te.storage&&(w+=A-Me),K.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=te.storage}}}const x=w%A;return x>0&&(w+=A-x),M.__size=w,M.__cache={},this}function p(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),T}function y(M){const T=M.target;T.removeEventListener("dispose",y);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}const M_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function y_(){return An===null&&(An=new Pu(M_,16,16,Ti,$n),An.name="DFG_LUT",An.minFilter=Vt,An.magFilter=Vt,An.wrapS=Gn,An.wrapT=Gn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class S_{constructor(e={}){const{canvas:t=Uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,g=new Set([_l,xl,gl]),p=new Set([nn,Dn,Ds,Ns,fl,pl]),y=new Uint32Array(4),b=new Int32Array(4),M=new I;let T=null,w=null;const A=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,D=null,X=null,K=null,k=null;this._outputColorSpace=ln;let q=0,H=0,j=null,te=-1,re=null;const ue=new gt,Me=new gt;let tt=null;const xt=new Se(0);let nt=0,Q=t.width,oe=t.height,ne=1,Ne=null,Oe=null;const Le=new gt(0,0,Q,oe),St=new gt(0,0,Q,oe);let $e=!1;const ct=new wl;let it=!1,Qe=!1;const wt=new et,Ct=new I,It=new gt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Tt(){return j===null?ne:1}let U=n;function Kt(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",bn,!1),U===null){const F="webgl2";if(U=Kt(F,S),U===null)throw Kt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ze("WebGLRenderer: "+S.message),S}let rt,R,v,O,V,$,ie,ae,Y,J,le,Te,de,ce,Ce,Ie,ke,N,se,Z,he,ge,ee;function we(){rt=new yg(U),rt.init(),he=new d_(U,rt),R=new fg(U,rt,e,he),v=new h_(U,rt),R.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),X=U.createFramebuffer(),K=U.createFramebuffer(),k=U.createFramebuffer(),O=new Eg(U),V=new Zx,$=new u_(U,rt,v,V,R,he,O),ie=new Mg(C),ae=new Rp(U),ge=new ug(U,ae),Y=new Sg(U,ae,O,ge),J=new Tg(U,Y,ae,ge,O),N=new wg(U,R,$),Ce=new pg(V),le=new Kx(C,ie,rt,R,ge,Ce),Te=new __(C,V),de=new Qx,ce=new s_(rt),ke=new hg(C,ie,v,J,m,l),Ie=new c_(C,J,R),ee=new v_(U,O,R,v),se=new dg(U,rt,O),Z=new bg(U,rt,O),O.programs=le.programs,C.capabilities=R,C.extensions=rt,C.properties=V,C.renderLists=de,C.shadowMap=Ie,C.state=v,C.info=O}we(),_!==nn&&(E=new Rg(_,t.width,t.height,a,s,r));const be=new g_(C,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Q,oe,!1))},this.getSize=function(S){return S.set(Q,oe)},this.setSize=function(S,F,W=!0){if(be.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,oe=F,t.width=Math.floor(S*ne),t.height=Math.floor(F*ne),W===!0&&(t.style.width=S+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Q*ne,oe*ne).floor()},this.setDrawingBufferSize=function(S,F,W){Q=S,oe=F,ne=W,t.width=Math.floor(S*W),t.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===nn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ue)},this.getViewport=function(S){return S.copy(Le)},this.setViewport=function(S,F,W,B){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,F,W,B),v.viewport(ue.copy(Le).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,F,W,B){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,F,W,B),v.scissor(Me.copy(St).multiplyScalar(ne).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){v.setScissorTest($e=S)},this.setOpaqueSort=function(S){Ne=S},this.setTransparentSort=function(S){Oe=S},this.getClearColor=function(S){return S.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,W=!0){let B=0;if(S){let z=!1;if(j!==null){const me=j.texture.format;z=g.has(me)}if(z){const me=j.texture.type,ve=p.has(me),pe=ke.getClearColor(),Ee=ke.getClearAlpha(),Ae=pe.r,Be=pe.g,Ve=pe.b;ve?(y[0]=Ae,y[1]=Be,y[2]=Ve,y[3]=Ee,U.clearBufferuiv(U.COLOR,0,y)):(b[0]=Ae,b[1]=Be,b[2]=Ve,b[3]=Ee,U.clearBufferiv(U.COLOR,0,b))}else B|=U.COLOR_BUFFER_BIT}F&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),ke.dispose(),de.dispose(),ce.dispose(),V.dispose(),ie.dispose(),J.dispose(),ge.dispose(),ee.dispose(),le.dispose(),be.dispose(),be.removeEventListener("sessionstart",Xl),be.removeEventListener("sessionend",$l),pi.stop()};function vt(S){S.preventDefault(),_c("WebGLRenderer: Context Lost."),L=!0}function dt(){_c("WebGLRenderer: Context Restored."),L=!1;const S=O.autoReset,F=Ie.enabled,W=Ie.autoUpdate,B=Ie.needsUpdate,z=Ie.type;we(),O.autoReset=S,Ie.enabled=F,Ie.autoUpdate=W,Ie.needsUpdate=B,Ie.type=z}function bn(S){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function En(S){const F=S.target;F.removeEventListener("dispose",En),pd(F)}function pd(S){md(S),V.remove(S)}function md(S){const F=V.get(S).programs;F!==void 0&&(F.forEach(function(W){le.releaseProgram(W)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,B,z,me){F===null&&(F=Ft);const ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=_d(S,F,W,B,z);v.setMaterial(B,ve);let Ee=W.index,Ae=1;if(B.wireframe===!0){if(Ee=Y.getWireframeAttribute(W),Ee===void 0)return;Ae=2}const Be=W.drawRange,Ve=W.attributes.position;let Re=Be.start*Ae,at=(Be.start+Be.count)*Ae;me!==null&&(Re=Math.max(Re,me.start*Ae),at=Math.min(at,(me.start+me.count)*Ae)),Ee!==null?(Re=Math.max(Re,0),at=Math.min(at,Ee.count)):Ve!=null&&(Re=Math.max(Re,0),at=Math.min(at,Ve.count));const bt=at-Re;if(bt<0||bt===1/0)return;ge.setup(z,B,pe,W,Ee);let Mt,ht=se;if(Ee!==null&&(Mt=ae.get(Ee),ht=Z,ht.setIndex(Mt)),z.isMesh)B.wireframe===!0?(v.setLineWidth(B.wireframeLinewidth*Tt()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(z.isLine){let zt=B.linewidth;zt===void 0&&(zt=1),v.setLineWidth(zt*Tt()),z.isLineSegments?ht.setMode(U.LINES):z.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else z.isPoints?ht.setMode(U.POINTS):z.isSprite&&ht.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const zt=z._multiDrawStarts,_e=z._multiDrawCounts,Qt=z._multiDrawCount,je=Ee?ae.get(Ee).bytesPerElement:1,rn=V.get(B).currentProgram.getUniforms();for(let wn=0;wn<Qt;wn++)rn.setValue(U,"_gl_DrawID",wn),ht.render(zt[wn]/je,_e[wn])}else if(z.isInstancedMesh)ht.renderInstances(Re,bt,z.count);else if(W.isInstancedBufferGeometry){const zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,zt);ht.renderInstances(Re,bt,_e)}else ht.render(Re,bt)};function Wl(S,F,W){S.transparent===!0&&S.side===un&&S.forceSinglePass===!1?(S.side=Jt,S.needsUpdate=!0,Xs(S,F,W),S.side=fi,S.needsUpdate=!0,Xs(S,F,W),S.side=un):Xs(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),w=ce.get(W),w.init(F),x.push(w),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights();const B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let ve=0;ve<me.length;ve++){const pe=me[ve];Wl(pe,W,z),B.add(pe)}else Wl(me,W,z),B.add(me)}),w=x.pop(),B},this.compileAsync=function(S,F,W=null){const B=this.compile(S,F,W);return new Promise(z=>{function me(){if(B.forEach(function(ve){V.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){z(S);return}setTimeout(me,10)}rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ho=null;function gd(S){ho&&ho(S)}function Xl(){pi.stop()}function $l(){pi.start()}const pi=new Ou;pi.setAnimationLoop(gd),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(S){ho=S,be.setAnimationLoop(S),S===null?pi.stop():pi.start()},be.addEventListener("sessionstart",Xl),be.addEventListener("sessionend",$l),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(S,F);const W=be.enabled===!0&&be.isPresenting===!0,B=E!==null&&(j===null||W)&&E.begin(C,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,F,j),w=ce.get(S,x.length),w.init(F),w.state.textureUnits=$.getTextureUnits(),x.push(w),wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ct.setFromProjectionMatrix(wt,Pn,F.reversedDepth),Qe=this.localClippingEnabled,it=Ce.init(this.clippingPlanes,Qe),T=de.get(S,A.length),T.init(),A.push(T),be.enabled===!0&&be.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&uo(ve,F,-1/0,C.sortObjects)}uo(S,F,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(Ne,Oe,F.reversedDepth),_t=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,_t&&ke.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Ce.beginShadows();const z=w.state.shadowsArray;if(Ie.render(z,S,F),it===!0&&Ce.endShadows(),(B&&E.hasRenderPass())===!1){const ve=T.opaque,pe=T.transmissive;if(w.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(pe.length>0)for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ve=Ee[Ae];Yl(ve,pe,S,Ve)}_t&&ke.render(S);for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ve=Ee[Ae];ql(T,S,Ve,Ve.viewport)}}else pe.length>0&&Yl(ve,pe,S,F),_t&&ke.render(S),ql(T,S,F)}j!==null&&H===0&&($.updateMultisampleRenderTarget(j),$.updateRenderTargetMipmap(j)),B&&E.end(C),S.isScene===!0&&S.onAfterRender(C,S,F),ge.resetDefaultState(),te=-1,re=null,x.pop(),x.length>0?(w=x[x.length-1],$.setTextureUnits(w.state.textureUnits),it===!0&&Ce.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,D!==null&&D.renderEnd()};function uo(S,F,W,B){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ct.intersectsSprite(S)){B&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(wt);const ve=J.update(S),pe=S.material;pe.visible&&T.push(S,ve,pe,W,It.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ct.intersectsObject(S))){const ve=J.update(S),pe=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),It.copy(ve.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(wt)),Array.isArray(pe)){const Ee=ve.groups;for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ve=Ee[Ae],Re=pe[Ve.materialIndex];Re&&Re.visible&&T.push(S,ve,Re,W,It.z,Ve)}}else pe.visible&&T.push(S,ve,pe,W,It.z,null)}}const me=S.children;for(let ve=0,pe=me.length;ve<pe;ve++)uo(me[ve],F,W,B)}function ql(S,F,W,B){const{opaque:z,transmissive:me,transparent:ve}=S;w.setupLightsView(W),it===!0&&Ce.setGlobalState(C.clippingPlanes,W),B&&v.viewport(ue.copy(B)),z.length>0&&Ws(z,F,W),me.length>0&&Ws(me,F,W),ve.length>0&&Ws(ve,F,W),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Yl(S,F,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Re=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new In(1,1,{generateMipmaps:!0,type:Re?$n:nn,minFilter:ci,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const me=w.state.transmissionRenderTarget[B.id],ve=B.viewport||ue;me.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(xt),nt=C.getClearAlpha(),nt<1&&C.setClearColor(16777215,.5),C.clear(),_t&&ke.render(W);const Be=C.toneMapping;C.toneMapping=Ln;const Ve=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),it===!0&&Ce.setGlobalState(C.clippingPlanes,B),Ws(S,W,B),$.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,bt=F.length;at<bt;at++){const Mt=F[at],{object:ht,geometry:zt,material:_e,group:Qt}=Mt;if(_e.side===un&&ht.layers.test(B.layers)){const je=_e.side;_e.side=Jt,_e.needsUpdate=!0,Kl(ht,W,B,zt,_e,Qt),_e.side=je,_e.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,Ee,Ae),C.setClearColor(xt,nt),Ve!==void 0&&(B.viewport=Ve),C.toneMapping=Be}function Ws(S,F,W){const B=F.isScene===!0?F.overrideMaterial:null;for(let z=0,me=S.length;z<me;z++){const ve=S[z],{object:pe,geometry:Ee,group:Ae}=ve;let Be=ve.material;Be.allowOverride===!0&&B!==null&&(Be=B),pe.layers.test(W.layers)&&Kl(pe,F,W,Ee,Be,Ae)}}function Kl(S,F,W,B,z,me){S.onBeforeRender(C,F,W,B,z,me),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(C,F,W,B,S,me),z.transparent===!0&&z.side===un&&z.forceSinglePass===!1?(z.side=Jt,z.needsUpdate=!0,C.renderBufferDirect(W,F,B,z,S,me),z.side=fi,z.needsUpdate=!0,C.renderBufferDirect(W,F,B,z,S,me),z.side=un):C.renderBufferDirect(W,F,B,z,S,me),S.onAfterRender(C,F,W,B,z,me)}function Xs(S,F,W){F.isScene!==!0&&(F=Ft);const B=V.get(S),z=w.state.lights,me=w.state.shadowsArray,ve=z.state.version,pe=le.getParameters(S,z.state,me,F,W,w.state.lightProbeGridArray),Ee=le.getProgramCacheKey(pe);let Ae=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,B.fog=F.fog;const Be=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=ie.get(S.envMap||B.environment,Be),B.envMapRotation=B.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",En),Ae=new Map,B.programs=Ae);let Ve=Ae.get(Ee);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===ve)return Jl(S,pe),Ve}else pe.uniforms=le.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,W,pe),S.onBeforeCompile(pe,C),Ve=le.acquireProgram(pe,Ee),Ae.set(Ee,Ve),B.uniforms=pe.uniforms;const Re=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=Ce.uniform),Jl(S,pe),B.needsLights=Md(S),B.lightsStateVersion=ve,B.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=Ve,B.uniformsList=null,Ve}function Zl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Br.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Jl(S,F){const W=V.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function xd(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,B=S.length;W<B;W++){const z=S[W];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function _d(S,F,W,B,z){F.isScene!==!0&&(F=Ft),$.resetTextureUnits();const me=F.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?F.environment:null,pe=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qe.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=ie.get(B.envMap||ve,Ee),Be=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color;let Mt=Ln;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Mt=C.toneMapping);const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=ht!==void 0?ht.length:0,_e=V.get(B),Qt=w.state.lights;if(it===!0&&(Qe===!0||S!==re)){const ft=S===re&&B.id===te;Ce.setState(B,S,ft)}let je=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Qt.state.version||_e.outputColorSpace!==pe||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==Ae||B.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ce.numPlanes||_e.numIntersection!==Ce.numIntersection)||_e.vertexAlphas!==Be||_e.vertexTangents!==Ve||_e.morphTargets!==Re||_e.morphNormals!==at||_e.morphColors!==bt||_e.toneMapping!==Mt||_e.morphTargetsCount!==zt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,_e.__version=B.version);let rn=_e.currentProgram;je===!0&&(rn=Xs(B,F,z),D&&B.isNodeMaterial&&D.onUpdateProgram(B,rn,_e));let wn=!1,Zn=!1,Pi=!1;const ut=rn.getUniforms(),Et=_e.uniforms;if(v.useProgram(rn.program)&&(wn=!0,Zn=!0,Pi=!0),B.id!==te&&(te=B.id,Zn=!0),_e.needsLights){const ft=xd(w.state.lightProbeGridArray,z);_e.lightProbeGrid!==ft&&(_e.lightProbeGrid=ft,Zn=!0)}if(wn||re!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",S.projectionMatrix),ut.setValue(U,"viewMatrix",S.matrixWorldInverse);const Qn=ut.map.cameraPosition;Qn!==void 0&&Qn.setValue(U,Ct.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),re!==S&&(re=S,Zn=!0,Pi=!0)}if(_e.needsLights&&(Qt.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",Qt.state.directionalShadowMap,$),Qt.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",Qt.state.spotShadowMap,$),Qt.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",Qt.state.pointShadowMap,$)),z.isSkinnedMesh){ut.setOptional(U,z,"bindMatrix"),ut.setOptional(U,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ut.setValue(U,"boneTexture",ft.boneTexture,$))}z.isBatchedMesh&&(ut.setOptional(U,z,"batchingTexture"),ut.setValue(U,"batchingTexture",z._matricesTexture,$),ut.setOptional(U,z,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",z._indirectTexture,$),ut.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",z._colorsTexture,$));const Jn=W.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&N.update(z,W,rn),(Zn||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,ut.setValue(U,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&F.environment!==null&&(Et.envMapIntensity.value=F.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=y_()),Zn){if(ut.setValue(U,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&vd(Et,Pi),me&&B.fog===!0&&Te.refreshFogUniforms(Et,me),Te.refreshMaterialUniforms(Et,B,ne,oe,w.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){const ft=_e.lightProbeGrid;Et.probesSH.value=ft.texture,Et.probesMin.value.copy(ft.boundingBox.min),Et.probesMax.value.copy(ft.boundingBox.max),Et.probesResolution.value.copy(ft.resolution)}Br.upload(U,Zl(_e),Et,$)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Br.upload(U,Zl(_e),Et,$),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(U,"center",z.center),ut.setValue(U,"modelViewMatrix",z.modelViewMatrix),ut.setValue(U,"normalMatrix",z.normalMatrix),ut.setValue(U,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ft=B.uniformsGroups;for(let Qn=0,Li=ft.length;Qn<Li;Qn++){const Ql=ft[Qn];ee.update(Ql,rn),ee.bind(Ql,rn)}}return rn}function vd(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Md(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,F,W){const B=V.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=F,V.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const W=V.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,W=0){j=S,q=F,H=W;let B=null,z=!1,me=!1;if(S){const pe=V.get(S);if(pe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),ue.copy(S.viewport),Me.copy(S.scissor),tt=S.scissorTest,v.viewport(ue),v.scissor(Me),v.setScissorTest(tt),te=-1;return}else if(pe.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(pe.__hasExternalTextures)$.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&V.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const Ae=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?B=Ae[F][W]:B=Ae[F],z=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?B=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[W]:B=Ae,ue.copy(S.viewport),Me.copy(S.scissor),tt=S.scissorTest}else ue.copy(Le).multiplyScalar(ne).floor(),Me.copy(St).multiplyScalar(ne).floor(),tt=$e;if(W!==0&&(B=X),v.bindFramebuffer(U.FRAMEBUFFER,B)&&v.drawBuffers(S,B),v.viewport(ue),v.scissor(Me),v.setScissorTest(tt),z){const pe=V.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,W)}else if(me){const pe=F;for(let Ee=0;Ee<S.textures.length;Ee++){const Ae=V.get(S.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,W,pe)}}else if(S!==null&&W!==0){const pe=V.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,W)}te=-1},this.readRenderTargetPixels=function(S,F,W,B,z,me,ve,pe=0){if(!(S&&S.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){v.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Ae=S.textures[pe],Be=Ae.format,Ve=Ae.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!R.textureFormatReadable(Be)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ve)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-B&&W>=0&&W<=S.height-z&&U.readPixels(F,W,B,z,he.convert(Be),he.convert(Ve),me)}finally{const Ae=j!==null?V.get(j).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,F,W,B,z,me,ve,pe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee)if(F>=0&&F<=S.width-B&&W>=0&&W<=S.height-z){v.bindFramebuffer(U.FRAMEBUFFER,Ee);const Ae=S.textures[pe],Be=Ae.format,Ve=Ae.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!R.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(F,W,B,z,he.convert(Be),he.convert(Ve),0);const at=j!==null?V.get(j).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,at);const bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ff(U,bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.deleteBuffer(Re),U.deleteSync(bt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,W=0){const B=Math.pow(2,-W),z=Math.floor(S.image.width*B),me=Math.floor(S.image.height*B),ve=F!==null?F.x:0,pe=F!==null?F.y:0;$.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ve,pe,z,me),v.unbindTexture()},this.copyTextureToTexture=function(S,F,W=null,B=null,z=0,me=0){let ve,pe,Ee,Ae,Be,Ve,Re,at,bt;const Mt=S.isCompressedTexture?S.mipmaps[me]:S.image;if(W!==null)ve=W.max.x-W.min.x,pe=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Be=W.min.y,Ve=W.isBox3?W.min.z:0;else{const Et=Math.pow(2,-z);ve=Math.floor(Mt.width*Et),pe=Math.floor(Mt.height*Et),S.isDataArrayTexture?Ee=Mt.depth:S.isData3DTexture?Ee=Math.floor(Mt.depth*Et):Ee=1,Ae=0,Be=0,Ve=0}B!==null?(Re=B.x,at=B.y,bt=B.z):(Re=0,at=0,bt=0);const ht=he.convert(F.format),zt=he.convert(F.type);let _e;F.isData3DTexture?($.setTexture3D(F,0),_e=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),_e=U.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),_e=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Qt=v.getParameter(U.UNPACK_ROW_LENGTH),je=v.getParameter(U.UNPACK_IMAGE_HEIGHT),rn=v.getParameter(U.UNPACK_SKIP_PIXELS),wn=v.getParameter(U.UNPACK_SKIP_ROWS),Zn=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Mt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),v.pixelStorei(U.UNPACK_SKIP_ROWS,Be),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const Pi=S.isDataArrayTexture||S.isData3DTexture,ut=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Et=V.get(S),Jn=V.get(F),ft=V.get(Et.__renderTarget),Qn=V.get(Jn.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,ft.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Li=0;Li<Ee;Li++)Pi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(S).__webglTexture,z,Ve+Li),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(F).__webglTexture,me,bt+Li)),U.blitFramebuffer(Ae,Be,ve,pe,Re,at,ve,pe,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||V.has(S)){const Et=V.get(S),Jn=V.get(F);v.bindFramebuffer(U.READ_FRAMEBUFFER,K),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let ft=0;ft<Ee;ft++)Pi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.__webglTexture,z,Ve+ft):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,z),ut?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jn.__webglTexture,me,bt+ft):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jn.__webglTexture,me),z!==0?U.blitFramebuffer(Ae,Be,ve,pe,Re,at,ve,pe,U.COLOR_BUFFER_BIT,U.NEAREST):ut?U.copyTexSubImage3D(_e,me,Re,at,bt+ft,Ae,Be,ve,pe):U.copyTexSubImage2D(_e,me,Re,at,Ae,Be,ve,pe);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(_e,me,Re,at,bt,ve,pe,Ee,ht,zt,Mt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(_e,me,Re,at,bt,ve,pe,Ee,ht,Mt.data):U.texSubImage3D(_e,me,Re,at,bt,ve,pe,Ee,ht,zt,Mt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,Re,at,ve,pe,ht,zt,Mt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,Re,at,Mt.width,Mt.height,ht,Mt.data):U.texSubImage2D(U.TEXTURE_2D,me,Re,at,ve,pe,ht,zt,Mt);v.pixelStorei(U.UNPACK_ROW_LENGTH,Qt),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),v.pixelStorei(U.UNPACK_SKIP_PIXELS,rn),v.pixelStorei(U.UNPACK_SKIP_ROWS,wn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Zn),me===0&&F.generateMipmaps&&U.generateMipmap(_e),v.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){q=0,H=0,j=null,v.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const P=.5;function b_(i){const e=[],t=[],n=[],s=new Fe,r=new I,o=new I;for(const l of i){const c=l.geo.index?l.geo.toNonIndexed():l.geo,u=c.getAttribute("position"),d=c.getAttribute("normal");s.getNormalMatrix(l.matrix);for(let h=0;h<u.count;h++)r.fromBufferAttribute(u,h).applyMatrix4(l.matrix),e.push(r.x,r.y,r.z),o.fromBufferAttribute(d,h).applyMatrix3(s).normalize(),t.push(o.x,o.y,o.z),n.push(l.colour.r,l.colour.g,l.colour.b);c!==l.geo&&c.dispose(),l.geo.dispose()}const a=new Rt;return a.setAttribute("position",new Xe(e,3)),a.setAttribute("normal",new Xe(t,3)),a.setAttribute("color",new Xe(n,3)),a}function $t(i){return b_(i.map(e=>{const t=new et,n=new dn;return e.rot&&n.setFromEuler(new Yn(e.rot[0],e.rot[1],e.rot[2])),t.compose(new I(...e.pos??[0,0,0]),n,new I(...e.scale??[1,1,1])),{geo:e.geo,colour:new Se(e.colour),matrix:t}}))}function vh(i,e,t,n){const s=sn(i),r=(1.5+s()*.55)*P,o=(.2+s()*.08)*P,a=(.34+s()*.1)*P,l=[],c=s()*Math.PI*2,u=(s()-.5)*.22,d=Math.cos(c)*u,h=Math.sin(c)*u;l.push({geo:new lt(a,a*(1.35+s()*.3),.18*P,7),colour:n,pos:[0,.08*P,0],rot:[h*.3,s()*3,-d*.3]});const f=r*.55,m=r*.5,_=(o+a)/2;l.push({geo:new lt(_,a,f,7),colour:n,pos:[0,f/2+.1*P,0],rot:[h,0,-d]});const g=d*f*.9,p=h*f*.9;l.push({geo:new lt(o,_*1.02,m,7),colour:n,pos:[g,f+m/2+.08*P,p],rot:[h*2.1,0,-d*2.1]});const y=r+.1*P,b=3+Math.floor(s()*3);let M=s()*Math.PI*2;for(let C=0;C<b;C++){M+=Math.PI*2/b+(s()-.5)*1.1;const L=.35+s()*.45,D=(.75+s()*.6)*P;l.push({geo:new lt(.05*P,.13*P,D,5),colour:n,pos:[g+Math.cos(M)*.24*P,y+(.2+s()*.25)*P,p+Math.sin(M)*.24*P],rot:[Math.sin(M)*L,0,-Math.cos(M)*L]})}const T=y+(.75+s()*.3)*P,w=g+(s()-.5)*.3*P,A=p+(s()-.5)*.3*P,x=.9+s()*.35,E=9+Math.floor(s()*4);for(let C=0;C<E;C++){const L=s()*Math.PI*2,D=Math.sqrt(s())*.85*P*x,X=(.42+s()*.38)*P;l.push({geo:new Kn(X,0),colour:s()<.35?e:t,pos:[w+Math.cos(L)*D,T+(s()-.45)*.55*P,A+Math.sin(L)*D*(.8+s()*.4)],scale:[1+s()*.35,.6+s()*.3,1+s()*.35],rot:[s()*3,s()*3,s()*3]})}for(let C=0;C<2;C++)l.push({geo:new Kn((.5+s()*.22)*P,0),colour:e,pos:[w+(s()-.5)*.5*P,T+(.3+s()*.25)*P,A+(s()-.5)*.5*P],scale:[1.1,.62,1.1],rot:[s()*3,s()*3,s()*3]});return $t(l)}function E_(i,e,t){const n=sn(i),s=(3.6+n()*1)*P,r=[{geo:new lt(.32*P,.46*P,.16*P,8),colour:"#4a3520",pos:[0,.07*P,0]},{geo:new lt(.2*P,.32*P,s*.6,8),colour:"#4a3520",pos:[0,s*.3,0]}],o=4+Math.floor(n()*2),a=n()*Math.PI*2,l=(n()-.5)*.12;for(let c=0;c<o;c++){const u=c/(o-1),d=(1.25-u*.92)*P*(.85+n()*.3),h=(1.05-u*.28)*P*(.85+n()*.3);r.push({geo:new ro(d,h,7),colour:c%2===0?e:t,pos:[Math.cos(a)*l*u*3+(n()-.5)*.12*P,s*.24+u*s*.5+h*.28,Math.sin(a)*l*u*3+(n()-.5)*.12*P],rot:[(n()-.5)*.16,n()*3,(n()-.5)*.16]})}return $t(r)}function w_(i,e,t,n=!1,s=14,r=991){const o=sn(r),a=[],l=[],c=[],u=new Se(i),d=new Se(e),h=new Se(t),f=.5,m=.5,_=n?Math.PI:Math.PI*2,g=[];for(let b=0;b<=s;b++)g.push(b===s&&!n?g[0]:.985+o()*.03);const p=(b,M,T,w,A,x,E)=>{a.push(b,M,T),l.push(w,A,x),c.push(E.r,E.g,E.b)};for(let b=0;b<s;b++){const M=b/s,T=(b+1)/s,w=-_/2+M*_,A=-_/2+T*_,x=g[b],E=g[b+1],C=Math.cos(w),L=Math.sin(w),D=Math.cos(A),X=Math.sin(A),K=[-.5,C*f*x,L*f*x],k=[.5,C*m*x,L*m*x],q=[.5,D*m*E,X*m*E],H=[-.5,D*f*E,X*f*E],j=d.clone().lerp(u,.72+(x-.92)*1.4),te=d.clone().lerp(u,.72+(E-.92)*1.4);for(const[re,ue,Me]of[[K,[0,C,L],j],[q,[0,D,X],te],[k,[0,C,L],j],[K,[0,C,L],j],[H,[0,D,X],te],[q,[0,D,X],te]])p(re[0],re[1],re[2],ue[0],ue[1],ue[2],Me)}for(const[b,M,T]of[[-.5,f,-1],[.5,m,1]])for(let w=0;w<s;w++){const A=w/s,x=(w+1)/s,E=-_/2+A*_,C=-_/2+x*_,L=g[w],D=g[w+1],X=[b,Math.cos(E)*M*L,Math.sin(E)*M*L],K=[b,Math.cos(C)*M*D,Math.sin(C)*M*D],k=[b,0,0],q=T>0?[k,X,K]:[k,K,X];for(const H of q)p(H[0],H[1],H[2],T,0,0,h)}if(n){const M=[[-.5,0,-f*g[0]],[.5,0,-m*g[0]],[.5,0,m*g[s]],[-.5,0,f*g[s]]];for(const T of[M[0],M[2],M[1],M[0],M[3],M[2]])p(T[0],T[1],T[2],0,1,0,h)}const y=new Rt;return y.setAttribute("position",new Xe(a,3)),y.setAttribute("normal",new Xe(l,3)),y.setAttribute("color",new Xe(c,3)),y}function T_(i=4242){const e=Ja(i,.5,"#8d8d88");e.computeBoundingBox();const t=e.boundingBox,n=new I;t.getSize(n);const s=Math.max(n.x,n.y,n.z)||1;return e.translate(-(t.min.x+t.max.x)/2,-t.min.y,-(t.min.z+t.max.z)/2),e.scale(1/s,1/s,1/s),e.computeVertexNormals(),e}function Ja(i,e,t){const n=sn(i),s=new Kn(e,2),r=s.getAttribute("position"),o=new I,a=Array.from({length:5},()=>({dir:new I(n()*2-1,n()*2-1,n()*2-1).normalize(),amp:.12+n()*.16}));for(let l=0;l<r.count;l++){o.fromBufferAttribute(r,l);const c=o.clone().normalize();let u=1;for(const d of a)u+=Math.max(0,c.dot(d.dir))**2*d.amp;o.multiplyScalar(u),o.y*=.74,r.setXYZ(l,o.x,o.y,o.z)}return s.computeVertexNormals(),$t([{geo:s,colour:t,pos:[0,e*.5,0]}])}function A_(i){const e=sn(i),t=[];for(let n=0;n<5;n++){const s=n/5*Math.PI*2,r=e()*.35*P;t.push({geo:new Kn((.4+e()*.25)*P,0),colour:n%2?"#3d6329":"#4e7a35",pos:[Math.cos(s)*r,(.35+e()*.2)*P,Math.sin(s)*r],scale:[1,.8,1]})}for(let n=0;n<6;n++){const s=e()*Math.PI*2;t.push({geo:new Kn(.06*P,0),colour:"#a8324a",pos:[Math.cos(s)*.45*P,(.4+e()*.35)*P,Math.sin(s)*.45*P]})}return $t(t)}function R_(i){const e=sn(i),t=[];for(let n=0;n<14;n++){const s=e()*Math.PI*2,r=e()*.5*P,o=(.9+e()*.8)*P;t.push({geo:new lt(.015*P,.03*P,o,3),colour:e()>.5?"#8f9a4e":"#6f7d3c",pos:[Math.cos(s)*r,o/2,Math.sin(s)*r],rot:[(e()-.5)*.3,0,(e()-.5)*.3]})}return $t(t)}function C_(i){const e=sn(i),t=new Vs(.75*P,8,5,0,Math.PI*2,0,Math.PI/2),n=t.getAttribute("position"),s=new I;for(let r=0;r<n.count;r++)s.fromBufferAttribute(n,r).multiplyScalar(.85+e()*.3),n.setXYZ(r,s.x,s.y*.45,s.z);return t.computeVertexNormals(),$t([{geo:t,colour:"#a6835f"}])}function P_(i){const e=sn(i),t=[{geo:new lt(.7*P,.8*P,.12*P,9),colour:"#5d4a2e",pos:[0,.06*P,0]}];for(let n=0;n<8;n++){const s=e()*Math.PI*2,r=e()*.55*P;t.push({geo:new Kn((.08+e()*.1)*P,0),colour:e()>.4?"#8a4a22":"#a35c2a",pos:[Math.cos(s)*r,.12*P,Math.sin(s)*r]})}return $t(t)}function L_(){const i=[];for(let e=0;e<8;e++){const t=e/8*Math.PI*2;i.push({geo:new Kn(.16*P,0),colour:e%2?"#7d7d76":"#9a9a92",pos:[Math.cos(t)*.55*P,.1*P,Math.sin(t)*.55*P],scale:[1,.7,1]})}for(let e=0;e<3;e++)i.push({geo:new lt(.07*P,.07*P,1.1*P,5),colour:"#5a3f24",pos:[0,.22*P,0],rot:[Math.PI/2.4,e/3*Math.PI,0]});return $t(i)}function I_(){return $t([{geo:new lt(.55*P,1*P,1.5*P,10),colour:"#6f5b45",pos:[0,.75*P,0]},{geo:new Al(.5*P,.12*P,6,12),colour:"#8a7157",pos:[0,1.5*P,0],rot:[Math.PI/2,0,0]},{geo:new We(.45*P,.45*P,.3*P),colour:"#2a1a10",pos:[0,.32*P,.85*P]}])}function D_(){const i=[{geo:new lt(.4*P,.55*P,1.9*P,8),colour:"#6b6b64",pos:[-.8*P,.95*P,0]},{geo:new We(.3*P,.35*P,.25*P),colour:"#241a12",pos:[-.8*P,.4*P,.5*P]},{geo:new lt(.32*P,.34*P,.7*P,8),colour:"#5a3f24",pos:[.9*P,.35*P,0]},{geo:new We(.7*P,.2*P,.3*P),colour:"#3b3b40",pos:[.9*P,.8*P,0]},{geo:new We(.25*P,.22*P,.28*P),colour:"#54545c",pos:[.9*P,.6*P,0]}];return $t(i)}function N_(){const i=[];for(const e of[-.9*P,.9*P])i.push({geo:new lt(.06*P,.07*P,1.6*P,5),colour:"#6b4d2c",pos:[e,.8*P,-.25*P],rot:[.2,0,0]}),i.push({geo:new lt(.06*P,.07*P,1.6*P,5),colour:"#6b4d2c",pos:[e,.8*P,.25*P],rot:[-.2,0,0]});i.push({geo:new lt(.05*P,.05*P,2.1*P,5),colour:"#7d5730",pos:[0,1.55*P,0],rot:[0,0,Math.PI/2]});for(let e=0;e<5;e++)i.push({geo:new We(.16*P,.5*P,.04*P),colour:e%2?"#8a4536":"#9c5340",pos:[-.7*P+e*.35*P,1.28*P,0]});return $t(i)}function U_(){return $t([{geo:new lt(.5*P,.55*P,.28*P,12),colour:"#77776f",pos:[0,.14*P,0]},{geo:new lt(.45*P,.48*P,.16*P,12),colour:"#92928a",pos:[0,.36*P,0]},{geo:new lt(.05*P,.05*P,.35*P,6),colour:"#6b4d2c",pos:[.3*P,.6*P,0]}])}function F_(){const i=[{geo:new lt(.07*P,.08*P,2.2*P,5),colour:"#6b4d2c",pos:[-.8*P,1.1*P,0],rot:[.12,0,0]},{geo:new lt(.07*P,.08*P,2.2*P,5),colour:"#6b4d2c",pos:[.8*P,1.1*P,0],rot:[.12,0,0]},{geo:new lt(.06*P,.06*P,1.8*P,5),colour:"#7d5730",pos:[0,2.1*P,0],rot:[0,0,Math.PI/2]}];for(let e=0;e<9;e++)i.push({geo:new We(.02*P,1.3*P,.02*P),colour:"#c8bda0",pos:[-.7*P+e*.175*P,1.4*P,.05*P]});return $t(i)}function O_(){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d"),r=sn(31337);for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=Math.round(255*(.93+r()*.14));s.fillStyle=`rgb(${c},${c},${c})`,s.fillRect(l*16,a*16,16,16)}s.strokeStyle="rgba(0,0,0,0.07)",s.lineWidth=1;for(let a=0;a<=4;a++)s.beginPath(),s.moveTo(a*16+.5,0),s.lineTo(a*16+.5,64),s.moveTo(0,a*16+.5),s.lineTo(64,a*16+.5),s.stroke();const o=new hp(n);return o.wrapS=Is,o.wrapT=Is,o.magFilter=Nt,o.minFilter=ci,o.anisotropy=4,o}function k_(i){const e=[],t=(a,l,c,u,d,h)=>e.push({geo:new We(a*P,l*P,c*P),colour:u,pos:[d[0]*P,d[1]*P,d[2]*P],rot:h});if(i==="fowl"){const a="#6f5738";t(.28,.26,.4,a,[0,.28,0]),t(.2,.18,.16,a,[0,.42,.24]),t(.06,.06,.12,"#c9a24a",[0,.4,.36]),t(.22,.14,.22,"#57432c",[0,.3,-.16],[.4,0,0]);for(const l of[-.07,.07])t(.04,.18,.04,"#b08a3a",[l,.09,.02]);return $t(e)}const n={deer:{body:"#8a5a3c",leg:"#5f3d26",legH:.9,len:1.15,girth:.4,shoulder:1,headL:.34},boar:{body:"#43362a",leg:"#2e2419",legH:.6,len:1.05,girth:.5,shoulder:.78,headL:.4},wolf:{body:"#797d80",leg:"#5a5d60",legH:.72,len:1.1,girth:.34,shoulder:.82,headL:.32}}[i],s=n.shoulder;for(const a of[-1,1])for(const l of[-1,1])t(.1,n.legH,.1,n.leg,[a*n.girth*.42,n.legH/2,l*n.len*.36]);t(n.girth,n.girth*.95,n.len,n.body,[0,s,0]),i==="boar"&&t(n.girth*1.05,n.girth*.7,n.len*.4,n.body,[0,s+n.girth*.35,.05]),t(n.girth*.55,.42,n.girth*.55,n.body,[0,s+.12,n.len*.5],[-.6,0,0]);const r=s+.34,o=n.len*.5+n.headL*.5;if(t(n.girth*.5,n.girth*.5,n.headL,n.body,[0,r,o]),i==="deer"){for(const a of[-.06,.06])t(.05,.14,.05,n.body,[a,r+.16,o]);for(const a of[-.08,.08])t(.04,.34,.04,"#d8cba6",[a,r+.3,o-.04],[.2,0,a*2]),t(.04,.16,.04,"#d8cba6",[a*1.7,r+.44,o-.02],[.1,0,a*3]);t(.1,.22,.1,n.body,[0,s+.04,-n.len*.52],[.5,0,0])}else if(i==="boar"){for(const a of[-.1,.1])t(.05,.07,.14,"#e8e0cf",[a,r-.06,o+.14],[.6,0,0]);t(.16,.14,.1,"#574636",[0,r-.04,o+.16])}else{for(const a of[-.08,.08])t(.06,.12,.05,n.leg,[a,r+.16,o-.06]);t(.09,.09,.5,n.leg,[0,s+.06,-n.len*.55],[.35,0,0])}return $t(e)}function B_(){const i=[],e=12*P,t=1.85*P,n=21,s="#5a4429",r="#6f5433",o="#584428",a="#42311d",l="#3a2c1a",c="#6a5030",u=m=>t*(1-Math.pow(Math.abs(m),2.6)),d=m=>.62*P+.62*P*m*m,h=2*e/(n-1)*1.3;for(let m=0;m<n;m++){const _=-1+2*m/(n-1),g=u(_);if(g<.05*P)continue;const p=d(_);i.push({geo:new We(g*2,p,h),colour:s,pos:[0,p/2,_*e]})}const f=(m,_,g,p,y)=>{for(let b=-1;b<=1;b+=2)for(let M=0;M<n-1;M++){const T=-1+2*M/(n-1),w=-1+2*(M+1)/(n-1),A=(T+w)/2,x=u(A);if(x<.06*P)continue;const E=(u(w)-u(T))*b,C=(w-T)*e;i.push({geo:new We(_,g,Math.hypot(E,C)+.03*P),colour:p,pos:[b*(x+y),d(A)*m,A*e],rot:[0,Math.atan2(E,C),0]})}};for(let m=0;m<4;m++)f(.28+m*.2,.05*P,.14*P,m%2?r:o,.02*P);f(1,.12*P,.12*P,c,0);for(let m=0;m<n-1;m++){const _=(-1+2*m/(n-1)+(-1+2*(m+1)/(n-1)))/2;u(_)<.05*P||i.push({geo:new We(.17*P,.18*P,h),colour:a,pos:[0,.04*P,_*e]})}for(let m=0;m<8;m++){const _=-.82+m/7*1.64;i.push({geo:new We(u(_)*1.3,.05*P,2*e/8*.95),colour:"#4d3b22",pos:[0,d(_)-.12*P,_*e]})}for(let m=0;m<9;m++){const _=-.8+m/8*1.6;i.push({geo:new We(u(_)*2+.12*P,.08*P,.24*P),colour:r,pos:[0,d(_)-.04*P,_*e]})}for(const m of[-1,1]){const _=m*e,g=d(1);i.push({geo:new We(.18*P,2*P,.22*P),colour:a,pos:[0,g+.6*P,_+m*.22*P],rot:[m*.5,0,0]}),i.push({geo:new We(.18*P,.18*P,.42*P),colour:l,pos:[0,g+1.5*P,_+m*.78*P],rot:[m*.7,0,0]}),i.push({geo:new We(.24*P,.24*P,.24*P),colour:l,pos:[0,g+1.66*P,_+m*1*P],rot:[0,Math.PI/4,m*.3]})}for(const m of[-1,1])i.push({geo:new lt(.032*P,.032*P,4.4*P,5),colour:"#7d5f38",pos:[m*.42*P,d(0)+.08*P,m*.4*P],rot:[.5,m*.3,Math.PI/2]}),i.push({geo:new We(.03*P,.62*P,.24*P),colour:"#8a6b3f",pos:[m*2*P,d(0)-.3*P,m*2*P],rot:[.3,m*.3,.4]});return $t(i)}let Tr=null;function z_(){return Tr||(Tr={resources:{[Ye.OakTree]:[1,2,3].map(i=>vh(100+i,"#5f8a3a","#456628","#5c4227")),[Ye.BirchTree]:[1,2,3].map(i=>vh(200+i,"#84a84e","#5f7f34","#c9c4b4")),[Ye.PineTree]:[1,2,3].map(i=>E_(300+i,"#3f6b3f","#2b4a2b")),[Ye.Boulder]:[1,2,3].map(i=>Ja(400+i,.55*P,"#8d8d88")),[Ye.FlintOutcrop]:[1,2].map(i=>Ja(500+i,.3*P,"#63616c")),[Ye.BerryBush]:[1,2,3].map(i=>A_(600+i)),[Ye.ReedBed]:[1,2,3].map(i=>R_(700+i)),[Ye.ClayBank]:[1,2].map(i=>C_(800+i)),[Ye.BogIron]:[1,2].map(i=>P_(900+i))},fixtures:{campfire:L_(),kiln:I_(),smithy:D_(),dryingRack:N_(),quern:U_(),loom:F_()}},Tr)}function G_(i){const e=i==="spear"?2*P:i==="blade"?.3*P:.9*P,t=new ze(new lt(.03*P,.03*P,e,5),new Ot({color:new Se("#6b4d2c")})),n=new Ot({color:new Se("#b8bcc4")});if(i==="axe"){const s=new ze(new We(.28*P,.24*P,.05*P),n);s.rotation.y=Math.PI/2,s.position.set(0,.4*P,.14*P),t.add(s)}else if(i==="spear"){const s=new ze(new ro(.06*P,.3*P,5),n);s.position.y=1.1*P,t.add(s)}else{const s=e/2;t.add(H_(new We(.05*P,.04*P,.06*P),"#4a3a24",[0,s,0]));const r=new ze(new We(.1*P,.3*P,.02*P),n);r.position.set(.02*P,s+.17*P,0),t.add(r);const o=new ze(new We(.1*P,.12*P,.02*P),n);o.position.set(.01*P,s+.35*P,0),o.rotation.z=.6,t.add(o)}return t}function H_(i,e,t){const n=new ze(i,new Ot({color:new Se(e)}));return n.position.set(...t),n}const Xn={deer:{name:"Red deer",hp:34,speed:3.1,meleeBonus:0,temper:"flee",senseRange:8,loot:[{item:"meat",count:3},{item:"hide",count:1}],biomes:[Pe.Forest,Pe.Meadow,Pe.Grassland],scale:1,weight:1},boar:{name:"Wild boar",hp:46,speed:2.7,meleeBonus:7,temper:"skittish-fight",senseRange:6,loot:[{item:"meat",count:4},{item:"hide",count:1}],biomes:[Pe.Forest,Pe.PineForest],scale:.92,weight:.7},fowl:{name:"Wildfowl",hp:10,speed:3,meleeBonus:0,temper:"flee",senseRange:6,loot:[{item:"meat",count:1}],biomes:[Pe.Grassland,Pe.Meadow,Pe.Marsh],scale:.5,weight:.4},wolf:{name:"Grey wolf",hp:40,speed:3.7,meleeBonus:9,temper:"predator",senseRange:10,loot:[{item:"meat",count:1},{item:"hide",count:1}],biomes:[Pe.Forest,Pe.PineForest,Pe.Moor],scale:.85,weight:.5}},V_=Object.keys(Xn),ye=.5,Zo={player:{skin:"#e8b49d",shirt:"#3f6f9e",pants:"#2f3f5c",shoe:"#332211",hair:"#3b2507"},settler:{skin:"#e0ab92",shirt:"#7a6a4e",pants:"#4a4033",shoe:"#332211",hair:"#4a3a26"},native:{skin:"#d9a37f",shirt:"#6b5a3e",pants:"#4a4030",shoe:"#2e2418",hair:"#2b1f12"}},qi=i=>new Ot({color:new Se(i)});function Mh(i,e,t,n){const s=e==="left"?-1:1,r=new Bt;r.position.set(s*.28*ye,.5*ye,0),i.add(r);const o=new ze(new We(.1*ye,.28*ye,.1*ye),t);o.position.y=-.14*ye,o.castShadow=!0,r.add(o);const a=new Bt;a.position.y=-.28*ye,r.add(a);const l=new ze(new We(.085*ye,.26*ye,.085*ye),n);l.position.y=-.13*ye,l.castShadow=!0,a.add(l);const c=new Bt;c.position.y=-.28*ye,a.add(c);const u=new ze(new We(.07*ye,.07*ye,.05*ye),n);return c.add(u),{root:r,joint:a,hand:c}}function yh(i,e,t,n){const s=e==="left"?-1:1,r=new Bt;r.position.set(s*.11*ye,0,0),i.add(r);const o=new ze(new We(.14*ye,.42*ye,.14*ye),t);o.position.y=-.21*ye,o.castShadow=!0,r.add(o);const a=new Bt;a.position.y=-.42*ye,r.add(a);const l=new ze(new We(.12*ye,.4*ye,.12*ye),t);l.position.y=-.2*ye,l.castShadow=!0,a.add(l);const c=new ze(new We(.13*ye,.07*ye,.24*ye),n);return c.position.set(0,-.43*ye,.04*ye),c.castShadow=!0,a.add(c),{root:r,joint:a}}function W_(i){const e=qi(i.skin),t=qi(i.shirt),n=qi(i.pants),s=qi(i.shoe),r=qi(i.hair),o=qi("#222222"),a=new Bt,l=.9*ye,c=new Bt;c.position.y=l,a.add(c);const u=new Bt;c.add(u);const d=new ze(new We(.44*ye,.55*ye,.22*ye),t);d.position.y=.3*ye,d.castShadow=!0,u.add(d);const h=new ze(new lt(.06*ye,.07*ye,.1*ye,8),e);h.position.y=.62*ye,u.add(h);const f=new Bt;f.position.y=.76*ye,u.add(f);const m=new ze(new We(.22*ye,.24*ye,.22*ye),e);m.castShadow=!0,f.add(m);const _=new ze(new We(.235*ye,.09*ye,.235*ye),r);_.position.y=.1*ye,f.add(_);const g=new ze(new We(.235*ye,.14*ye,.06*ye),r);g.position.set(0,.02*ye,-.09*ye),f.add(g);const p=new ze(new Vs(.02*ye,6,6),o);p.position.set(-.06*ye,.03*ye,.11*ye),f.add(p);const y=p.clone();y.position.x=.06*ye,f.add(y);const b=Mh(u,"left",t,e),M=Mh(u,"right",t,e),T=yh(c,"left",n,s),w=yh(c,"right",n,s),A=new Bt;A.position.y=.62*ye,u.add(A);const x=new Bt;return x.rotation.set(.85,0,-.2),x.position.set(-.05*ye,-.02*ye,.05*ye),b.hand.add(x),{group:a,body:c,spine:u,torso:d,headGroup:f,leftArm:b,rightArm:M,leftLeg:T,rightLeg:w,carryPivot:A,toolPivot:x,hipHeight:l,walkPhase:0,walkBlend:0}}const qt=(i,e,t)=>i+(e-i)*t,Sh=i=>i<0?0:i>1?1:i;function X_(i,e){const{dt:t}=e,n=Math.abs(e.speed),s=n>.15,r=Sh(e.effort??0);i.walkBlend+=((s?1:0)-i.walkBlend)*9*t,i.walkBlend=Sh(i.walkBlend);const o=i.walkBlend,a=qt(4.2,2.9,r);i.walkPhase+=n*t*a;const l=i.walkPhase+(e.phaseOffset??0);if(e.sleeping){i.group.rotation.z=Math.PI/2.1,i.body.position.y=i.hipHeight*.35;return}i.group.rotation.z=0;const c=qt(.025,.055,r)*ye;i.body.position.y=i.hipHeight+Math.cos(l*2)*c*o,i.body.position.x=Math.sin(l)*qt(.018,.008,r)*ye*o;const u=qt(.5,.85,r),d=Math.sin(l)*u*o;i.leftLeg.root.rotation.x=d,i.rightLeg.root.rotation.x=-d;const h=qt(.7,1.25,r);if(i.leftLeg.joint.rotation.x=Math.max(0,-Math.sin(l))*h*o,i.rightLeg.joint.rotation.x=Math.max(0,Math.sin(l))*h*o,i.spine.rotation.x=qt(.04,.5,r)*o,i.torso.rotation.y=Math.sin(l)*qt(.04,.07,r)*o,i.headGroup.rotation.x=-i.spine.rotation.x*.6,e.carrying){i.leftArm.root.rotation.x=-2.35,i.rightArm.root.rotation.x=-2.35,i.leftArm.root.rotation.z=.25,i.rightArm.root.rotation.z=-.25,i.leftArm.joint.rotation.x=-.5,i.rightArm.joint.rotation.x=-.5;return}if(i.leftArm.root.rotation.z=0,i.rightArm.root.rotation.z=0,e.working){const p=(performance.now()/1e3*1.55+(e.phaseOffset??0))%1,y=-.5,b=-.95,M=.5,T=E=>E*E*(3-2*E);let w,A,x;if(p<.3){const E=T(p/.3);w=qt(y,b,E),A=.05*E,x=0}else if(p<.5){const E=(p-.3)/.2;w=qt(b,M,E*E),A=qt(.05,.3,E),x=.55*E}else{const E=T((p-.5)/.5);w=qt(M,y,E),A=qt(.3,.05,E),x=.55*(1-E)}i.leftArm.root.rotation.x=w,i.leftArm.joint.rotation.x=-.35-x,i.rightArm.root.rotation.x=-.15,i.rightArm.joint.rotation.x=-.25,i.spine.rotation.x=A,i.headGroup.rotation.x=-A*.5;return}const f=qt(.7,1.1,r);i.leftArm.root.rotation.x=-d*f,i.rightArm.root.rotation.x=d*f;const m=qt(-.15,-1,r),_=qt(.3,.45,r);i.leftArm.joint.rotation.x=o*(m-Math.max(0,Math.sin(l))*_),i.rightArm.joint.rotation.x=o*(m-Math.max(0,-Math.sin(l))*_)}var xe=(i=>(i[i.Idle=0]="Idle",i[i.Working=1]="Working",i[i.Moving=2]="Moving",i[i.Fighting=3]="Fighting",i[i.Fleeing=4]="Fleeing",i[i.Sleeping=5]="Sleeping",i))(xe||{});const Ar={follow:"following you",chop:"felling timber",mine:"dressing stone",haul:"hauling timber",build:"raising the wall",forage:"foraging for food",stopped:"standing by"};let Cl=1;const $_=()=>Cl,q_=i=>{Cl=i};function Kr(i,e,t,n,s={}){return{id:Cl++,name:i,faction:e,x:t,y:n,facing:Math.PI/4,hp:100,maxHp:100,hunger:85,stamina:100,warmth:70,morale:70,stance:0,carrying:null,inventory:new Map,equipped:null,order:"follow",dropPile:null,sourcePile:null,destPile:null,actionTimer:0,speed:3.1,...s}}const Ai=(i,e)=>i.inventory.get(e)??0;function Xu(i){let e=0;for(const t of i.inventory.values())e+=t;return e}const $u=60;function Pl(i,e,t){const n=$u-Xu(i),s=Math.max(0,Math.min(t,n));return s>0&&i.inventory.set(e,Ai(i,e)+s),s}function Fs(i,e,t){const n=Ai(i,e),s=Math.min(n,t);return s<=0?0:(n-s<=0?i.inventory.delete(e):i.inventory.set(e,n-s),s)}function Y_(i){if(!i.carrying||i.carrying.kind==="log"||i.carrying.kind==="post")return 1;const e=Je[i.carrying.kind].mass;return Math.max(.35,1-e/260)}function qu(i,e){const t=i.stamina<20?.6:1,n=i.hunger<15?.7:1;return i.speed*e*Y_(i)*t*n}function K_(i){const e=i.equipped?pt[i.equipped]:null;return(e==null?void 0:e.chopPower)??.35}function Z_(i){const e=i.equipped?pt[i.equipped]:null;return(e==null?void 0:e.minePower)??.3}function J_(i){const e=i.equipped?pt[i.equipped]:null;return 4+((e==null?void 0:e.damage)??0)+(i.meleeBonus??0)}function Zr(i,e){let t=null,n=0;for(const s of i.inventory.keys()){const r=pt[s];if(!r.tool)continue;const o=e==="chop"?r.chopPower??0:e==="mine"?r.minePower??0:r.damage??0;o>n&&(n=o,t=s)}t&&(i.equipped=t)}const mt=i=>i.hp>0,Jo=Math.PI*3/4,Cs=Math.PI/6,bh={[Pe.Ocean]:new Se("#1a3658"),[Pe.Shallows]:new Se("#2f6b8c"),[Pe.Beach]:new Se("#cebd8e"),[Pe.Marsh]:new Se("#566242"),[Pe.Grassland]:new Se("#6e8a48"),[Pe.Meadow]:new Se("#7c984e"),[Pe.Forest]:new Se("#4a6838"),[Pe.PineForest]:new Se("#3e583a"),[Pe.Moor]:new Se("#746a4a"),[Pe.Rock]:new Se("#7c7a74"),[Pe.Snow]:new Se("#e2e6ec")},Q_=2,j_=11,ev=6,tv=10,nv=i=>i<=ev?1:i<=tv?2:4,Eh=68,Yi=128,wh=8,bs=400;class iv{constructor(e){G(this,"scene",new Qf);G(this,"boatMesh",null);G(this,"beastPhase",0);G(this,"renderer");G(this,"cam");G(this,"models");G(this,"groundCells");G(this,"chunkViews",new Map);G(this,"actorViews",new Map);G(this,"pieceMeshes",new Map);G(this,"fixtureGroup",new Bt);G(this,"pileGroup",new Bt);G(this,"ghostMesh");G(this,"highlight");G(this,"sun");G(this,"fill");G(this,"hemi");G(this,"water");G(this,"raycaster",new Tp);G(this,"pointer",new He);G(this,"pieceGeo",new Map);G(this,"snapMarkers");G(this,"dropMarker");G(this,"foodMarker");G(this,"pileRings",[]);G(this,"pileRingGeo",new Rs(1.1,1.35,28));G(this,"pileRingMat",new Zi({color:"#e0bd52",transparent:!0,opacity:.5,side:un}));G(this,"wallGhosts");G(this,"farMesh",null);G(this,"farState",{step:0,cx:Number.NaN,cy:Number.NaN});G(this,"fixtureStamp","");G(this,"pileStamp","");G(this,"pileGeo",new lt(.08,.08,.9,5));G(this,"pileMatA",new Ot({color:"#8a6136"}));G(this,"pileMatB",new Ot({color:"#6f4e2a"}));this.canvas=e,this.renderer=new S_({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hu,this.scene.background=new Se("#8fb3d0"),this.scene.fog=new bl("#8fb3d0",60,190),this.cam=new oo(-1,1,1,-1,.1,2e3),this.models=z_(),this.groundCells=O_(),this.hemi=new Mp("#bcd8f0","#4a4632",.85),this.scene.add(this.hemi),this.sun=new Xc("#fff2d5",1.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);const t=34;this.sun.shadow.camera.left=-t,this.sun.shadow.camera.right=t,this.sun.shadow.camera.top=t,this.sun.shadow.camera.bottom=-t,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=600,this.sun.shadow.bias=-8e-4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Xc("#b9d2ee",.45),this.fill.castShadow=!1,this.scene.add(this.fill),this.water=new ze(new Hs(1200,1200),new Ot({color:new Se("#2b5f85"),transparent:!0,opacity:.86})),this.water.rotation.x=-Math.PI/2,this.water.position.y=.02,this.water.receiveShadow=!0,this.scene.add(this.water),this.scene.add(this.fixtureGroup),this.scene.add(this.pileGroup),this.ghostMesh=new ze(new We(1,1,1),new Ot({color:"#8fd48f",transparent:!0,opacity:.55})),this.ghostMesh.visible=!1,this.scene.add(this.ghostMesh),this.highlight=new cp(new dp(new We(1,1,1)),new Lu({color:"#f0c419",depthTest:!1})),this.highlight.visible=!1,this.highlight.renderOrder=999,this.scene.add(this.highlight),this.snapMarkers=new mr(new Vs(.045,6,4),new Zi({color:"#7fd1c0",transparent:!0,opacity:.55}),512),this.snapMarkers.count=0,this.snapMarkers.frustumCulled=!1,this.scene.add(this.snapMarkers),this.dropMarker=new ze(new Rs(1.1,1.35,28),new Zi({color:"#e0bd52",transparent:!0,opacity:.5,side:un})),this.dropMarker.rotation.x=-Math.PI/2,this.dropMarker.visible=!1,this.scene.add(this.dropMarker),this.foodMarker=new ze(new Rs(1.1,1.35,28),new Zi({color:"#7fbf4f",transparent:!0,opacity:.5,side:un})),this.foodMarker.rotation.x=-Math.PI/2,this.foodMarker.visible=!1,this.scene.add(this.foodMarker),this.wallGhosts=new mr(new We(1,1,1),new Ot({color:"#e0bd52",transparent:!0,opacity:.32}),1024),this.wallGhosts.count=0,this.wallGhosts.frustumCulled=!1,this.scene.add(this.wallGhosts),this.resize()}geometryFor(e){let t=this.pieceGeo.get(e);if(!t){const n=Je[e];n.round?t=T_(4242):n.cylindrical?t=w_(n.colour,n.colourDark,"#c8a877",n.halfRound===!0,14,e.length*7919):t=new We(1,1,1),this.pieceGeo.set(e,t)}return t}usesVertexColours(e){const t=Je[e];return t.round===!0||t.cylindrical===!0}pieceScale(e,t,n){const s=Je[e];return s.round?n.setScalar(s.length):t?n.set(s.width,s.length,s.thickness):n.set(s.length,s.thickness,s.width)}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${t}px`,this.updateProjection(e/t,this.cam.top||20)}updateProjection(e,t){this.cam.left=-t*e,this.cam.right=t*e,this.cam.top=t,this.cam.bottom=-t,this.cam.updateProjectionMatrix()}placeCamera(e,t){const n=window.innerWidth/window.innerHeight;this.updateProjection(n,e.zoom);const s=Math.cos(e.pitch),r=new I(Math.cos(e.yaw)*s*bs,Math.sin(e.pitch)*bs,Math.sin(e.yaw)*s*bs),o=new I(e.x,t,e.y);this.cam.position.copy(o).add(r),this.cam.lookAt(o),this.cam.updateMatrixWorld(),this.water.position.x=e.x,this.water.position.z=e.y;const a=Math.max(1200,e.zoom*90);this.water.scale.set(a/1200,a/1200,1)}buildChunkMesh(e,t=1){const n=[],s=[],r=[],o=[],a=e.cx*st,l=e.cy*st,c=new Se;for(let h=0;h<st;h+=t)for(let f=0;f<st;f+=t){const m=e.tiles[h*st+f],_=Mi(Zs(e,f,h)),g=Mi(Zs(e,f+t,h)),p=Mi(Zs(e,f+t,h+t)),y=Mi(Zs(e,f,h+t));if(m.biome===Pe.Ocean)continue;c.copy(bh[m.biome]);const b=.9+m.jitter*.2;c.multiplyScalar(b);const M=1/t,T=(g-_+p-y)*.5*M,w=(y-_+p-g)*.5*M,A=Math.hypot(T,1,w),x=(T*.6+.7+w*.6)/(A*1.104),E=Math.max(.55,Math.min(1.4,1+(x-.634)*1.3));c.multiplyScalar(E);const C=n.length/3,L=a+f,D=l+h;n.push(L,_,D,L+t,g,D,L+t,p,D+t,L,y,D+t);for(let X=0;X<4;X++)s.push(c.r,c.g,c.b);r.push(L,D,L+t,D,L+t,D+t,L,D+t),o.push(C,C+2,C+1,C,C+3,C+2)}const u=new Rt;u.setAttribute("position",new Xe(n,3)),u.setAttribute("color",new Xe(s,3)),u.setAttribute("uv",new Xe(r,2)),u.setIndex(o),u.computeVertexNormals();const d=new ze(u,new Ot({vertexColors:!0,flatShading:!1,map:this.groundCells}));return d.receiveShadow=!0,d.castShadow=!1,d.userData.isTerrain=!0,d}buildChunkProps(e,t){const n=new Map;for(const c of e.resources){const u=this.models.resources[c.kind],d=c.id%u.length,h=`${c.kind}:${d}`;let f=n.get(h);f||n.set(h,f={geo:u[d],nodes:[]}),f.nodes.push(c)}const s=[],r=new et,o=new dn,a=new I,l=new I;for(const{geo:c,nodes:u}of n.values()){const d=new mr(c,new Ot({vertexColors:!0}),u.length);d.castShadow=!0,d.receiveShadow=!0,u.forEach((h,f)=>{l.set(h.x,t.elevationAt(h.x,h.y),h.y),o.setFromAxisAngle(new I(0,1,0),h.id%32*.196),a.setScalar(h.scale),r.compose(l,o,a),d.setMatrixAt(f,r)}),d.instanceMatrix.needsUpdate=!0,d.userData.nodes=u,s.push(d)}return s}viewChunksFor(e){if(e.zoom>=Eh)return wh;const t=window.innerWidth/window.innerHeight,n=e.zoom*t,s=e.zoom/Math.max(.25,Math.sin(e.pitch)),r=Math.hypot(n,s);return Math.max(Q_,Math.min(j_,Math.ceil(r/st)+1))}syncFarField(e,t){if(t.zoom<Eh){this.farMesh&&(this.farMesh.visible=!1);return}const n=Math.max(4,Math.round(t.zoom/6)),s=Math.round(t.x/n)*n,r=Math.round(t.y/n)*n;if(this.farMesh&&this.farState.step===n&&this.farState.cx===s&&this.farState.cy===r){this.farMesh.visible=!0;return}this.farState={step:n,cx:s,cy:r};const o=[],a=[],l=[],c=new Se,u=Yi*n/2,d=e.seed;for(let _=0;_<=Yi;_++)for(let g=0;g<=Yi;g++){const p=s-u+g*n,y=r-u+_*n,b=no(p,y,d),M=ou(b,iu(p,y,b,d),su(y,b),ru(p,y,d));o.push(p,Math.max(0,Mi(b)),y),c.copy(bh[M]),a.push(c.r,c.g,c.b)}const h=(wh-.5)*st,f=Yi+1;for(let _=0;_<Yi;_++)for(let g=0;g<Yi;g++){const p=s-u+(g+.5)*n,y=r-u+(_+.5)*n;if(Math.abs(p-s)<h&&Math.abs(y-r)<h)continue;const b=_*f+g;l.push(b,b+f,b+1,b+1,b+f,b+f+1)}const m=new Rt;m.setAttribute("position",new Xe(o,3)),m.setAttribute("color",new Xe(a,3)),m.setIndex(l),m.computeVertexNormals(),this.farMesh&&(this.scene.remove(this.farMesh),this.farMesh.geometry.dispose()),this.farMesh=new ze(m,new Ot({vertexColors:!0})),this.farMesh.position.y=-.4,this.farMesh.renderOrder=-1,this.farMesh.frustumCulled=!1,this.scene.add(this.farMesh)}syncChunks(e,t){const n=Math.floor(t.x/st),s=Math.floor(t.y/st),r=new Set,o=this.viewChunksFor(t);for(let a=-o;a<=o;a++)for(let l=-o;l<=o;l++){const c=n+l,u=s+a,d=`${c},${u}`;r.add(d);const h=Math.max(Math.abs(l),Math.abs(a)),f=!0,m=nv(h),_=e.getChunk(c,u),g=this.chunkViews.get(d);if(g&&!_.dirty&&g.hasProps===f&&g.lod===m)continue;g&&this.disposeChunkView(g);const p=this.buildChunkMesh(_,m),y=this.buildChunkProps(_,e);this.scene.add(p);for(const b of y)this.scene.add(b);this.chunkViews.set(d,{mesh:p,props:y,hasProps:f,lod:m}),_.dirty=!1}for(const[a,l]of this.chunkViews)r.has(a)||(this.disposeChunkView(l),this.chunkViews.delete(a))}disposeChunkView(e){this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();for(const t of e.props)this.scene.remove(t),t.material.dispose(),t.dispose()}placeBoat(e,t,n,s){this.boatMesh||(this.boatMesh=new ze(B_(),new Ot({vertexColors:!0})),this.boatMesh.position.set(e,n-.05,t),this.boatMesh.rotation.y=s,this.boatMesh.castShadow=!0,this.boatMesh.receiveShadow=!0,this.scene.add(this.boatMesh))}invalidateAt(e,t,n){const s=`${Math.floor(t/st)},${Math.floor(n/st)}`,r=this.chunkViews.get(s);r&&(this.disposeChunkView(r),this.chunkViews.delete(s))}syncPieces(e,t){const n=new Map,s=Math.min(t.zoom*3,140),r=e.pieces.query({x0:t.x-s,x1:t.x+s,y0:t.y-s,y1:t.y+s,z0:-500,z1:500});for(const d of r){let h=n.get(d.kind);h||n.set(d.kind,h=[]),h.push(d)}const o=new et,a=new dn,l=new I(0,1,0),c=new I,u=new I;for(const[d,h]of n){let f=this.pieceMeshes.get(d);if(!f||f.count<h.length){f&&(this.scene.remove(f),f.dispose());const y=Je[d],b=this.geometryFor(d),M=new Ot({color:this.usesVertexColours(d)?16777215:new Se(y.colour),vertexColors:this.usesVertexColours(d)});f=new mr(b,M,Math.max(64,h.length*2)),f.castShadow=!0,f.receiveShadow=!0,f.userData.kind=d,this.pieceMeshes.set(d,f),this.scene.add(f)}const m=Je[d],_=m.round===!0,g=m.cylindrical===!0,p=new dn().setFromAxisAngle(new I(0,0,1),Math.PI/2);h.forEach((y,b)=>{g?u.set(m.length,m.thickness,m.width):this.pieceScale(d,y.upright,u);const M=y.upright?m.length:m.thickness;c.set(y.x,_?y.z:y.z+M/2,y.y),a.setFromAxisAngle(l,-y.yaw),y.upright&&g&&a.multiply(p),o.compose(c,a,u),f.setMatrixAt(b,o)}),f.count=h.length,f.instanceMatrix.needsUpdate=!0,f.userData.pieces=h}for(const[d,h]of this.pieceMeshes)n.has(d)||(h.count=0,h.userData.pieces=[])}syncFixtures(e){const t=e.fixtures.map(n=>`${n.id}:${n.progress.toFixed(2)}`).join("|");if(t!==this.fixtureStamp){this.fixtureStamp=t;for(const n of[...this.fixtureGroup.children]){this.fixtureGroup.remove(n);const s=n;s.material&&s.material.dispose()}for(const n of e.fixtures){const s=yn[n.kind],r=n.tx+s.w/2,o=n.ty+s.h/2,a=new ze(this.models.fixtures[n.kind],new Ot({vertexColors:!0,transparent:n.progress<1,opacity:n.progress<1?.35+n.progress*.5:1}));if(a.position.set(r,e.elevationAt(r,o),o),a.castShadow=!0,a.receiveShadow=!0,a.userData.fixture=n,this.fixtureGroup.add(a),n.kind==="campfire"&&n.progress>=1){const l=new Sp("#ff9a3c",2.2,14,2);l.position.set(r,e.elevationAt(r,o)+.5,o),this.fixtureGroup.add(l)}}}}syncPiles(e){let t=0;for(const r of e.piles)for(const o of r.contents.values())t+=o;const n=`${e.piles.length}:${t}`;if(n===this.pileStamp)return;this.pileStamp=n;for(const r of[...this.pileGroup.children])this.pileGroup.remove(r);const s=this.pileGeo;for(const r of e.piles){let o=0;for(const c of r.contents.values())o+=c;const a=Math.min(10,Math.ceil(o/4)),l=e.elevationAt(r.x,r.y);for(let c=0;c<a;c++){const u=new ze(s,c%2?this.pileMatA:this.pileMatB),d=Math.floor(c/3);u.position.set(r.x+(c%3-1)*.2,l+.08+d*.16,r.y),u.rotation.z=Math.PI/2,u.castShadow=!0,u.userData.pile=r,this.pileGroup.add(u)}}}syncActors(e,t,n){var r;const s=new Set;for(const o of t){if(o.hp<=0&&!o.isPlayer)continue;s.add(o.id);let a=this.actorViews.get(o.id);a||(a=this.spawnActorView(o));const l=Math.hypot(o.x-a.lastX,o.y-a.lastY),c=n>0?l/n:0;a.speed+=(c-a.speed)*Math.min(1,n*12),a.lastX=o.x,a.lastY=o.y;const u=e.elevationAt(o.x,o.y);if(a.beast){const h=a.speed>.4?Math.sin(this.beastPhase*9+o.id)*.04:0;a.beast.position.set(o.x,u+h,o.y),a.beast.rotation.y=-o.facing+Math.PI/2;continue}const d=a.rig.group;d.position.set(o.x,u,o.y),d.rotation.y=-o.facing+Math.PI/2,X_(a.rig,{speed:a.speed,dt:n,effort:Math.max(0,Math.min(1,(a.speed-2.2)/2.5)),working:o.actionTimer>0&&!o.carrying,carrying:o.carrying!==null,sleeping:o.stance===xe.Sleeping,phaseOffset:o.id%17*.37}),this.syncHeldItems(o,a)}this.beastPhase+=n;for(const[o,a]of this.actorViews)s.has(o)||(this.scene.remove(((r=a.rig)==null?void 0:r.group)??a.beast),this.actorViews.delete(o))}spawnActorView(e){const t={rig:null,beast:null,tool:null,toolKind:null,carry:null,lastX:e.x,lastY:e.y,speed:0};if(e.faction==="wildlife"&&e.species){const n=new ze(k_(e.species),new Ot({vertexColors:!0})),s=Xn[e.species].scale;n.scale.setScalar(s),this.scene.add(n),t.beast=n}else{const n=e.faction==="natives"?Zo.native:e.isPlayer?Zo.player:Zo.settler;t.rig=W_(n),this.scene.add(t.rig.group)}return this.actorViews.set(e.id,t),t}syncHeldItems(e,t){const n=t.rig;if(!n)return;if(e.carrying){const r=Je[e.carrying.kind];if(!t.carry||t.carry.userData.kind!==e.carrying.kind){t.carry&&n.carryPivot.remove(t.carry);const o=new ze(this.geometryFor(e.carrying.kind),new Ot({color:this.usesVertexColours(e.carrying.kind)?16777215:new Se(r.colour),vertexColors:this.usesVertexColours(e.carrying.kind)}));r.cylindrical?o.scale.set(r.length,r.thickness,r.width):this.pieceScale(e.carrying.kind,!1,o.scale),o.castShadow=!0,o.userData.kind=e.carrying.kind,r.round?(o.position.set(0,-.28,.3),o.rotation.set(.3,.6,0)):(o.position.set(0,.16,0),o.rotation.set(0,0,0)),n.carryPivot.add(o),t.carry=o}}else t.carry&&(n.carryPivot.remove(t.carry),t.carry.geometry.dispose(),t.carry=null);const s=e.carrying?null:sv(e.equipped);if(s!==t.toolKind){if(t.tool&&(n.toolPivot.remove(t.tool),t.tool=null),s){const r=G_(s);r.castShadow=!0,n.toolPivot.add(r),t.tool=r}t.toolKind=s}}setPointer(e,t){this.pointer.x=e/window.innerWidth*2-1,this.pointer.y=-(t/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.cam)}pickGround(e,t,n){this.setPointer(e,t);const s=this.raycaster.ray,r=s.origin,o=s.direction;if(o.y>=-1e-6)return null;const a=(nu-r.y)/o.y,l=(0-r.y)/o.y;let c=Math.max(0,a);const u=Math.max(c,l),d=.6;let h=c;for(r.y+o.y*c-n.peekElevation(r.x+o.x*c,r.z+o.z*c);c<u;){c=Math.min(c+d,u);const f=r.x+o.x*c,m=r.z+o.z*c;if(r.y+o.y*c-n.peekElevation(f,m)<=0){let g=h,p=c;for(let M=0;M<12;M++){const T=(g+p)/2;r.y+o.y*T-n.peekElevation(r.x+o.x*T,r.z+o.z*T)>0?g=T:p=T}const y=r.x+o.x*p,b=r.z+o.z*p;return{x:y,y:b,z:n.peekElevation(y,b)}}h=c}return l>0?{x:r.x+o.x*l,y:r.z+o.z*l,z:0}:null}pickResource(e,t){const n=t.resourcesNear(e.x,e.y,1.2);return n.length?n[0]:null}pickPiece(e,t,n,s){this.setPointer(e,t);const r=this.raycaster.ray,o=n.pieces.queryRadius(s.x,s.y,14);let a=null,l=1/0;const c=.12;for(const u of o){const d=Th(r,u,c);d!==null&&d<l&&(l=d,a=u)}if(!a){let u=.3;for(const d of o){const h=Wt(d),f=Math.cos(h.yaw),m=Math.sin(h.yaw),_=s.x-h.cx,g=s.y-h.cy,p=Math.max(0,Math.abs(_*f+g*m)-h.hx),y=Math.max(0,Math.abs(-_*m+g*f)-h.hy),b=Math.hypot(p,y);b<u&&(u=b,a=d)}}return a}pickWallCell(e,t,n){this.setPointer(e,t);const s=this.raycaster.ray,r=.12;let o=null,a=1/0;for(const l of n){const c={kind:"log",x:l.x,y:l.y,z:l.z,yaw:0,upright:!0},u=Th(s,c,r);u!==null&&u<a&&(a=u,o={x:l.x,y:l.y})}return o}worldToScreen(e,t,n){const s=new I(e,n,t).project(this.cam);return{x:(s.x+1)/2*window.innerWidth,y:(1-s.y)/2*window.innerHeight,visible:s.z<1}}render(e,t,n,s={}){const r=e.elevationAt(t.x,t.y);this.placeCamera(t,r),this.syncFarField(e,t),this.syncChunks(e,t),this.syncPieces(e,t),this.syncFixtures(e),this.syncPiles(e),this.syncActors(e,n,s.dt??1/60),this.updateLighting(s.timeOfDay??.5,t,r),this.updateGhost(s.ghost),this.updateSnapMarkers(s.snapPoints,s.activeSnap),this.updateWallGhosts(s.wallCells);const o=s.stockpiles??(s.dropPoint?[{id:1,...s.dropPoint}]:[]);for(this.dropMarker.visible=!1;this.pileRings.length<o.length;){const a=new ze(this.pileRingGeo,this.pileRingMat.clone());a.rotation.x=-Math.PI/2,this.scene.add(a),this.pileRings.push(a)}this.pileRings.forEach((a,l)=>{const c=o[l];if(!c){a.visible=!1;return}a.visible=!0,a.position.set(c.x,e.elevationAt(c.x,c.y)+.04,c.y);const u=a.material;u.opacity=c.id===s.activePileId?.9:.5}),s.foodPile?(this.foodMarker.visible=!0,this.foodMarker.position.set(s.foodPile.x,e.elevationAt(s.foodPile.x,s.foodPile.y)+.04,s.foodPile.y)):this.foodMarker.visible=!1,this.updateHighlight(e,s.hoveredPiece,s.hoveredResourceId),this.renderer.render(this.scene,this.cam)}updateLighting(e,t,n){const s=e*Math.PI*2-Math.PI/2,r=Math.sin(s),o=Math.max(0,r);this.sun.position.set(t.x+Math.cos(s*.6)*120,n+40+o*180,t.y+90),this.sun.target.position.set(t.x,n,t.y),this.fill.position.set(t.x-Math.cos(s*.6)*90,n+30,t.y-70),this.fill.intensity=.28+o*.3,this.sun.intensity=.25+o*1.7;const a=1-Math.min(1,o*2.2);this.sun.color.setRGB(1,.95-a*.22,.84-a*.36),this.hemi.intensity=.62+o*.7;const l=new Se().setRGB(.1+o*.48,.14+o*.58,.22+o*.62);this.scene.background.copy(l);const c=this.scene.fog;c.color.copy(l);const u=t.zoom*(3+o*5);c.near=bs+t.zoom*.8,c.far=bs+u}updateSnapMarkers(e,t){if(!e||e.length===0){this.snapMarkers.count=0;return}const n=new et,s=new I,r=new dn,o=new I,a=Math.min(e.length,512);for(let l=0;l<a;l++){const c=e[l],u=t!=null&&Math.abs(c.x-t.x)<1e-6&&Math.abs(c.y-t.y)<1e-6&&Math.abs(c.z-t.z)<1e-6;s.set(c.x,c.z+.03,c.y),o.setScalar(u?2.1:1),n.compose(s,r,o),this.snapMarkers.setMatrixAt(l,n)}this.snapMarkers.count=a,this.snapMarkers.instanceMatrix.needsUpdate=!0}updateWallGhosts(e){if(!e||e.length===0){this.wallGhosts.count=0;return}const t=Je.log,n=new et,s=new dn().setFromAxisAngle(new I(0,0,1),Math.PI/2),r=new I(t.length,t.thickness,t.width),o=new I,a=Math.min(e.length,1024);for(let l=0;l<a;l++){const c=e[l];o.set(c.x,c.z+t.length/2,c.y),n.compose(o,s,r),this.wallGhosts.setMatrixAt(l,n)}this.wallGhosts.count=a,this.wallGhosts.instanceMatrix.needsUpdate=!0}updateGhost(e){if(!e){this.ghostMesh.visible=!1;return}const t=Je[e.kind],n=t.cylindrical?new I(t.length,t.thickness,t.width):this.pieceScale(e.kind,e.upright,new I);this.ghostMesh.visible=!0,this.ghostMesh.geometry=this.geometryFor(e.kind),this.ghostMesh.scale.copy(n);const s=e.upright?t.length:t.thickness;this.ghostMesh.position.set(e.x,t.round?e.z:e.z+s/2,e.y),this.ghostMesh.quaternion.identity(),this.ghostMesh.rotateY(-e.yaw),e.upright&&t.cylindrical&&this.ghostMesh.rotateZ(Math.PI/2),this.ghostMesh.material.color.set(e.ok?"#8fd48f":"#d4694a")}updateHighlight(e,t,n){if(t){const s=Mn(t);this.highlight.visible=!0,this.highlight.scale.set(s.x1-s.x0,s.z1-s.z0,s.y1-s.y0),this.highlight.position.set((s.x0+s.x1)/2,(s.z0+s.z1)/2,(s.y0+s.y1)/2),this.highlight.rotation.y=0;return}if(n!=null)for(const s of this.chunkViews.values())for(const r of s.props){const o=r.userData.nodes,a=o==null?void 0:o.find(l=>l.id===n);if(a){this.highlight.visible=!0,this.highlight.scale.set(1.4,3.2,1.4),this.highlight.position.set(a.x,e.elevationAt(a.x,a.y)+1.6,a.y);return}}this.highlight.visible=!1}dispose(){this.renderer.dispose()}}function Th(i,e,t=0){const n=Je[e.kind],s=e.upright?n.width:n.length,r=e.upright?n.length:n.thickness,o=e.upright?n.thickness:n.width,a=e.x,l=e.z+r/2,c=e.y,u=Math.cos(e.yaw),d=Math.sin(e.yaw),h=i.origin.x-a,f=i.origin.y-l,m=i.origin.z-c,_=h*u-m*d,g=h*d+m*u,p=i.direction.x*u-i.direction.z*d,y=i.direction.x*d+i.direction.z*u,b=[s/2+t,r/2+t,o/2+t],M=[_,f,g],T=[p,i.direction.y,y];let w=-1/0,A=1/0;for(let x=0;x<3;x++){if(Math.abs(T[x])<1e-9){if(M[x]<-b[x]||M[x]>b[x])return null;continue}const E=1/T[x];let C=(-b[x]-M[x])*E,L=(b[x]-M[x])*E;if(C>L&&([C,L]=[L,C]),C>w&&(w=C),L<A&&(A=L),w>A)return null}return A<0?null:Math.max(w,0)}function sv(i){if(!i)return null;const e=pt[i];return e!=null&&e.tool?i==="spear"?"spear":i==="flintAxe"||i==="ironAxe"?"axe":"blade":null}class rv{constructor(e){G(this,"down",new Set);G(this,"pressedThisFrame",new Set);G(this,"releasedThisFrame",new Set);G(this,"mouseX",0);G(this,"mouseY",0);G(this,"wheelDelta",0);G(this,"leftDown",!1);G(this,"rightDown",!1);G(this,"middleDown",!1);G(this,"leftClicked",!1);G(this,"rightClicked",!1);G(this,"dragX",0);G(this,"dragY",0);window.addEventListener("keydown",t=>{if(t.metaKey||t.ctrlKey)return;const n=t.key.toLowerCase();this.down.has(n)||this.pressedThisFrame.add(n),this.down.add(n),["tab"," ","arrowup","arrowdown","arrowleft","arrowright"].includes(n)&&t.preventDefault()}),window.addEventListener("keyup",t=>{const n=t.key.toLowerCase();this.down.delete(n),this.releasedThisFrame.add(n)}),window.addEventListener("blur",()=>{this.down.clear(),this.leftDown=!1,this.rightDown=!1}),e.addEventListener("mousemove",t=>{this.dragX+=t.clientX-this.mouseX,this.dragY+=t.clientY-this.mouseY,this.mouseX=t.clientX,this.mouseY=t.clientY}),e.addEventListener("mousedown",t=>{t.button===0&&(this.leftDown=!0,this.leftClicked=!0),t.button===1&&(this.middleDown=!0,t.preventDefault()),t.button===2&&(this.rightDown=!0,this.rightClicked=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.leftDown=!1),t.button===1&&(this.middleDown=!1),t.button===2&&(this.rightDown=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{this.wheelDelta+=t.deltaY,t.preventDefault()},{passive:!1})}isDown(e){return this.down.has(e)}pressed(e){return this.pressedThisFrame.has(e)}released(e){return this.releasedThisFrame.has(e)}endFrame(){this.pressedThisFrame.clear(),this.releasedThisFrame.clear(),this.wheelDelta=0,this.leftClicked=!1,this.rightClicked=!1,this.dragX=0,this.dragY=0}moveVector(){let e=0,t=0;this.isDown("w")&&(t+=1),this.isDown("s")&&(t-=1),this.isDown("a")&&(e-=1),this.isDown("d")&&(e+=1);const n=Math.hypot(e,t);return n>0?{x:e/n,y:t/n}:{x:0,y:0}}}const Os=[{id:"plank",name:"Planks",out:{item:"plank",count:4},in:[{item:"log",count:1}],time:3},{id:"rope",name:"Rope",out:{item:"rope",count:1},in:[{item:"reed",count:4}],time:3},{id:"thatch",name:"Thatch bundle",out:{item:"thatch",count:2},in:[{item:"reed",count:5}],time:3},{id:"flintAxe",name:"Flint axe",out:{item:"flintAxe",count:1},in:[{item:"flint",count:3},{item:"log",count:1},{item:"rope",count:1}],time:6},{id:"spear",name:"Spear",out:{item:"spear",count:1},in:[{item:"flint",count:2},{item:"log",count:1},{item:"rope",count:1}],time:5},{id:"bow",name:"Hunting bow",out:{item:"bow",count:1},in:[{item:"log",count:1},{item:"rope",count:2}],time:6},{id:"cookedMeat",name:"Roast meat",out:{item:"cookedMeat",count:1},in:[{item:"meat",count:1}],time:4,station:"campfire"},{id:"charcoal",name:"Charcoal",out:{item:"charcoal",count:4},in:[{item:"log",count:2}],time:8,station:"kiln"},{id:"pot",name:"Clay pot",out:{item:"pot",count:1},in:[{item:"clay",count:3}],time:5,station:"kiln"},{id:"ironBloom",name:"Smelt bloom",out:{item:"ironBloom",count:1},in:[{item:"bogIron",count:3},{item:"charcoal",count:3}],time:14,station:"smithy"},{id:"ironBar",name:"Forge iron bar",out:{item:"ironBar",count:2},in:[{item:"ironBloom",count:1},{item:"charcoal",count:2}],time:10,station:"smithy"},{id:"ironAxe",name:"Iron axe",out:{item:"ironAxe",count:1},in:[{item:"ironBar",count:2},{item:"log",count:1}],time:12,station:"smithy"},{id:"seax",name:"Seax",out:{item:"seax",count:1},in:[{item:"ironBar",count:1},{item:"leather",count:1}],time:10,station:"smithy"},{id:"shield",name:"Limewood shield",out:{item:"shield",count:1},in:[{item:"plank",count:6},{item:"leather",count:1},{item:"ironBar",count:1}],time:12},{id:"leather",name:"Tan leather",out:{item:"leather",count:1},in:[{item:"hide",count:1}],time:6}];new Map(Os.map(i=>[i.id,i]));const Qa=["campfire","kiln","smithy","dryingRack"],Yu=[{label:"Axe",options:["ironAxe","flintAxe"]},{label:"Seax",options:["seax"]},{label:"Spear",options:["spear"]},{label:"Bow",options:["bow"]}];class ov{constructor(e){G(this,"root");G(this,"vitals");G(this,"pack");G(this,"status");G(this,"builder");G(this,"tip");G(this,"logEl");G(this,"banner");G(this,"help");G(this,"helpHint");G(this,"roster");G(this,"pileTool");G(this,"pileToolStamp","");G(this,"mapEl");G(this,"mapCoords");G(this,"mapCanvas");G(this,"rosterStamp","");G(this,"floaterLayer");G(this,"floaterPool",[]);G(this,"pileLayer");G(this,"pilePool",[]);G(this,"messages",[]);G(this,"onSelect");G(this,"onOrder");G(this,"onOrderAll");G(this,"onLocate");G(this,"onAssignPile");G(this,"onPickPileSlot");G(this,"onRemovePile");G(this,"onCraft");G(this,"onSelectTool");G(this,"hotbar");G(this,"crafting");G(this,"craftEls",new Map);this.root=e,this.root.innerHTML=`
      <div class="panel" id="status"></div>
      <div class="panel" id="vitals"></div>
      <div class="panel" id="pack"></div>
      <div class="panel" id="hotbar"></div>
      <div class="panel" id="builder"></div>
      <div class="panel" id="log"></div>
      <div class="panel" id="help"></div>
      <div id="helpHint"></div>
      <div id="tip"></div>
      <div id="banner"></div>
      <div id="floaters"></div>
      <div id="pileLabels"></div>
      <div class="panel" id="pileTool"></div>
      <div class="panel" id="map">
        <h3>The island <span class="dim">&mdash; N to close</span></h3>
        <canvas id="mapCanvas" width="600" height="600"></canvas>
        <div class="map-coords" id="mapCoords">scroll to zoom · drag to pan · click to copy</div>
        <div class="map-legend">
          <span><i style="background:#dfe3ea"></i>you</span>
          <span><i style="background:#e0bd52"></i>home</span>
          <span><i style="background:#7fbf4f"></i>friendly</span>
          <span><i style="background:#d9a441"></i>wary</span>
          <span><i style="background:#c0503f"></i>hostile</span>
        </div>
      </div>
      <div class="panel" id="roster"></div>
      <div class="panel" id="crafting"></div>
    `,this.crafting=e.querySelector("#crafting"),this.buildCraftingPanel(),this.pileTool=e.querySelector("#pileTool"),this.mapEl=e.querySelector("#map"),this.mapCanvas=e.querySelector("#mapCanvas"),this.mapCoords=e.querySelector("#mapCoords"),this.roster=e.querySelector("#roster"),this.floaterLayer=e.querySelector("#floaters"),this.pileLayer=e.querySelector("#pileLabels"),this.status=e.querySelector("#status"),this.vitals=e.querySelector("#vitals"),this.pack=e.querySelector("#pack"),this.hotbar=e.querySelector("#hotbar"),this.builder=e.querySelector("#builder"),this.tip=e.querySelector("#tip"),this.logEl=e.querySelector("#log"),this.banner=e.querySelector("#banner"),this.help=e.querySelector("#help"),this.helpHint=e.querySelector("#helpHint");const t=n=>`<span class="hk">${n}</span>`;this.help.innerHTML=`
      <h3>Controls <span class="dim">&mdash; H to close</span></h3>
      <div class="help-grid">
        <div class="hl">Move</div>
        <div>${t("WASD")} walk &nbsp; ${t("Shift")} sprint &nbsp; ${t("scroll")} zoom<br>${t("&larr; &rarr;")} turn &nbsp; ${t("&uarr; &darr;")} tilt &nbsp; ${t("/")} reset</div>

        <div class="hl">Gather</div>
        <div>${t("L-click")} a tree, rock or bush</div>

        <div class="hl">Build</div>
        <div>${t("R-click")} lift &nbsp; ${t("L-click")} set down<br>${t("Q")}${t("E")} turn &nbsp; ${t("F")} upright &nbsp; ${t("V")}${t("B")} raise<br>${t("5&ndash;8")} fixtures</div>

        <div class="hl">Command</div>
        <div>${t("R-click")} a settler &nbsp; ${t("M")} roster<br>${t("K")} wall tool &nbsp; ${t("P")} stockpiles</div>

        <div class="hl">Stores</div>
        <div>${t("G")} pile 1 &nbsp; ${t("T")} larder</div>

        <div class="hl">Menus</div>
        <div>${t("C")} craft &nbsp; ${t("N")} map &nbsp; ${t("O")} save &nbsp; ${t("L")} load</div>
      </div>
    `,this.help.classList.add("hidden"),this.helpHint.innerHTML=`${t("H")} controls`}log(e){this.messages.unshift({text:e,age:0}),this.messages.length>8&&this.messages.pop()}showBanner(e,t,n=5200){this.banner.innerHTML=`${e}<span class="sub">${t}</span>`,this.banner.classList.add("show"),setTimeout(()=>this.banner.classList.remove("show"),n)}toggleHelp(){this.help.classList.toggle("hidden"),this.helpHint.style.display=this.help.classList.contains("hidden")?"block":"none"}setMapVisible(e){this.mapEl.style.display=e?"block":"none"}setMapCoords(e){this.mapCoords.textContent=e}buildCraftingPanel(){const e=Os.map(t=>{const n=`<span class="cr-out">${t.out.count}&times; ${pt[t.out.item].name}</span>`,s=t.station?`<span class="cr-station">needs ${yn[t.station].name}</span>`:"",r=t.in.map(o=>`<span class="cr-in" data-item="${o.item}">${pt[o.item].name} 0/${o.count}</span>`).join("");return`
        <div class="cr-row" data-recipe="${t.id}">
          <div class="cr-main">${n}${s}<button class="cr-btn" data-craft="${t.id}">make</button></div>
          <div class="cr-ins">${r}</div>
        </div>`}).join("");this.crafting.innerHTML=`
      <h3>Crafting <span class="dim">&mdash; C to close</span></h3>
      <div class="cr-list">${e}</div>
      <div class="dim">Materials come from your pack and nearby stores.</div>
    `;for(const t of Os){const n=this.crafting.querySelector(`.cr-row[data-recipe="${t.id}"]`),s=n.querySelector(".cr-btn");s.onclick=()=>{var a;return(a=this.onCraft)==null?void 0:a.call(this,t.id)};const r=new Map;for(const a of t.in){const l=n.querySelector(`.cr-in[data-item="${a.item}"]`);l&&r.set(a.item,l)}const o=n.querySelector(".cr-station")??void 0;this.craftEls.set(t.id,{row:n,btn:s,inputs:r,station:o})}this.crafting.style.display="none"}setCrafting(e,t){if(!e){this.crafting.style.display="none";return}this.crafting.style.display="block";for(const n of t){const s=this.craftEls.get(n.id);if(s){for(const r of n.inputs){const o=s.inputs.get(r.item);o&&(o.textContent=`${pt[r.item].name} ${r.have}/${r.need}`,o.classList.toggle("short",r.have<r.need))}s.station&&s.station.classList.toggle("far",n.stationNear===!1),s.row.classList.toggle("ready",n.craftable),s.btn.disabled=!n.craftable}}}setPileLabels(e){for(;this.pilePool.length<e.length;){const t=document.createElement("div");t.className="pile-label",this.pileLayer.appendChild(t),this.pilePool.push(t)}this.pilePool.forEach((t,n)=>{const s=e[n];if(!s||!s.visible){t.style.display="none";return}t.style.display="block",t.style.transform=`translate(-50%, -50%) translate(${s.x}px, ${s.y}px)`,t.classList.toggle("sel",s.highlight),t.innerHTML!==s.text&&(t.innerHTML=s.text)})}setFloaters(e){for(;this.floaterPool.length<e.length;){const t=document.createElement("div");t.className="floater",this.floaterLayer.appendChild(t),this.floaterPool.push(t)}this.floaterPool.forEach((t,n)=>{const s=e[n];if(!s||!s.visible){t.style.display="none";return}t.style.display="block",t.style.transform=`translate(-50%, -50%) translate(${s.x}px, ${s.y}px)`,t.style.color=s.colour,t.style.opacity=String(s.alpha),t.textContent!==s.text&&(t.textContent=s.text)})}setPileTool(e,t,n,s){if(!e){this.pileTool.style.display="none",this.pileToolStamp="";return}this.pileTool.style.display="block";const r=`${t}|${n.join(",")}|${s}`;if(r===this.pileToolStamp)return;this.pileToolStamp=r;const o=[];for(let a=1;a<=s;a++){const l=n.includes(a),c=`${a===t?"active":""} ${l?"placed":"empty"}`;o.push(`<span class="pile-slot">
          <button data-slot="${a}" class="${c}">${a}</button>
          ${l?`<button data-remove="${a}" class="rm" title="remove pile ${a}">&times;</button>`:""}
        </span>`)}this.pileTool.innerHTML=`
      <h3>Stockpile tool <span class="dim">&mdash; P to finish</span></h3>
      <div class="pile-slots">${o.join("")}</div>
      <ol class="pile-steps">
        <li><b>Pick a pile</b> above (or press 1&ndash;${s})</li>
        <li><b>Click the ground</b> &mdash; either mouse button &mdash; to place or move pile ${t}</li>
        <li>Open the roster (<b>M</b>) to send each settler to a pile</li>
      </ol>
      <div class="dim">Use the <b>&times;</b> above to remove a pile.</div>
    `;for(const a of this.pileTool.querySelectorAll("button[data-slot]"))a.onclick=()=>{var l;return(l=this.onPickPileSlot)==null?void 0:l.call(this,Number(a.dataset.slot))};for(const a of this.pileTool.querySelectorAll("button[data-remove]"))a.onclick=()=>{var l;return(l=this.onRemovePile)==null?void 0:l.call(this,Number(a.dataset.remove))}}setRoster(e,t,n=[],s=null){if(!e){this.roster.style.display="none",this.rosterStamp="";return}this.roster.style.display="block";const r=n.length>=2,o=d=>d??s,a=(d,h,f,m)=>`
      <span class="pile-pick"><i>${m}</i>${n.map(_=>`<button data-assign="${d}" data-role="${h}" data-pile="${_}" class="${o(f)===_?"on":""}">${_}</button>`).join("")}</span>`,l=d=>r?d.order==="chop"||d.order==="mine"?a(d.id,"drop",d.dropPile,"stack at"):d.order==="build"?a(d.id,"source",d.sourcePile,"take from"):d.order==="haul"?a(d.id,"source",d.sourcePile,"take from")+a(d.id,"dest",d.destPile,"carry to"):"":"",c=t.map(d=>`${d.id}:${d.order}:${d.dropPile}:${d.sourcePile}:${d.destPile}`).join("|")+`#${n.join(",")}/${s}`;if(c===this.rosterStamp){for(const d of t){const h=this.roster.querySelector(`[data-row="${d.id}"] .st`);h&&(h.textContent=`${d.status} · ${Math.round(d.distance)} tiles away`)}return}this.rosterStamp=c;const u=[["follow","Follow"],["chop","Fell"],["mine","Mine"],["build","Build"],["haul","Haul"],["forage","Forage"],["stopped","Stop"]];this.roster.innerHTML=`
      <h3>The crew <span class="dim">&mdash; M to close</span></h3>
      <div class="roster-all">
        <span class="dim">everyone:</span>
        ${u.map(([d,h])=>`<button data-all="${d}">${h}</button>`).join("")}
      </div>
      ${r?'<div class="roster-hint">Each worker can use a different pile &mdash; the numbers below set which.</div>':'<div class="roster-hint dim">Tip: press <b>P</b> to lay out more piles, then route each worker between them here.</div>'}
      <div class="roster-list">
        ${t.map(d=>`
          <div class="roster-row" data-row="${d.id}">
            <div class="who">
              <span class="nm" data-locate="${d.id}">${d.name}</span>
              <span class="st">${d.status} · ${Math.round(d.distance)} tiles away</span>
            </div>
            <div class="acts">
              ${u.map(([h,f])=>`<button data-id="${d.id}" data-order="${h}" class="${d.order===h?"on":""}">${f}</button>`).join("")}
            </div>
            ${l(d)?`<div class="piles">${l(d)}</div>`:""}
          </div>`).join("")}
      </div>
      ${t.length===0?'<div class="dim">Nobody left to command.</div>':""}
    `;for(const d of this.roster.querySelectorAll("button[data-all]"))d.onclick=()=>{var h;return(h=this.onOrderAll)==null?void 0:h.call(this,d.dataset.all)};for(const d of this.roster.querySelectorAll("button[data-order]"))d.onclick=()=>{var h;return(h=this.onOrder)==null?void 0:h.call(this,Number(d.dataset.id),d.dataset.order)};for(const d of this.roster.querySelectorAll("[data-locate]"))d.onclick=()=>{var h;return(h=this.onLocate)==null?void 0:h.call(this,Number(d.dataset.locate))};for(const d of this.roster.querySelectorAll("button[data-assign]"))d.onclick=()=>{var h;return(h=this.onAssignPile)==null?void 0:h.call(this,Number(d.dataset.assign),d.dataset.role,Number(d.dataset.pile))}}setTip(e,t,n,s){if(!e){this.tip.style.display="none";return}this.tip.style.display="block",this.tip.innerHTML=`<span class="t">${e}</span>${t?`<span class="hint">${t}</span>`:""}`;const r=this.tip.offsetWidth,o=this.tip.offsetHeight;this.tip.style.left=`${Math.min(window.innerWidth-r-8,n+16)}px`,this.tip.style.top=`${Math.min(window.innerHeight-o-8,s+16)}px`}update(e,t,n){for(const o of this.messages)o.age+=n;this.status.innerHTML=`
      <div><span class="k">Day</span>${t.day}, ${String(Math.floor(t.hour)).padStart(2,"0")}:00</div>
      <div><span class="k">Settlers</span>${t.settlers}${t.hauling?` (${t.hauling} working)`:""}</div>
      <div><span class="k">Work queued</span>${t.pending}</div>
      <div><span class="k">Larder</span>${t.larder} food</div>
      <div><span class="k">Pieces laid</span>${t.pieces}</div>
      ${t.shelter?`<div><span class="k">Shelter</span>${t.shelter}</div>`:""}
      ${t.nearestVillage?`<div><span class="k">Nearest</span>${t.nearestVillage.name} &middot; ${Math.round(t.nearestVillage.distance)} tiles &middot; ${t.nearestVillage.disposition}</div>`:""}
    `;const s=(o,a,l)=>`
      <div class="bar"><label>${o}</label>
        <div class="track"><div class="fill" style="width:${Math.max(0,Math.min(100,a))}%;background:${l}"></div></div>
      </div>`;this.vitals.innerHTML=`
      <div class="name">${e.name}</div>
      <div class="bar zoom"><label>zoom</label>
        <div class="track"><div class="fill" style="width:${t.zoom}%;background:#8fb0c8"></div></div>
        <span class="barval">${t.zoom}%</span>
      </div>
      ${s("health",e.hp/e.maxHp*100,"#c0503f")}
      ${s("vigour",e.stamina,"#7fbf5f")}
      ${s("hunger",e.hunger,"#d9a441")}
      ${s("warmth",e.warmth,"#5aa9c9")}
      ${e.carrying?`<div class="bar"><label>carrying</label><span style="color:var(--gold)">${Je[e.carrying.kind].name}</span></div>`:""}
    `;const r=[...e.inventory.entries()].filter(([,o])=>o>0);this.pack.innerHTML=r.length?r.map(([o,a])=>`<div class="slot ${e.equipped===o?"equipped":""}"><span class="n">${a}</span>${pt[o].name}</div>`).join(""):'<div class="slot">empty pack</div>',this.renderHotbar(e),this.renderBuilder(t.selection,t.buildableFixtures),this.logEl.innerHTML=this.messages.map(o=>`<div class="${o.age<2.5?"fresh":""}">${o.text}</div>`).join("")}renderHotbar(e){this.hotbar.innerHTML=Yu.map((t,n)=>{const s=t.options.find(a=>(e.inventory.get(a)??0)>0),r=s?e.equipped===s?"equipped":"":"empty",o=s?pt[s].name:t.label;return`<div class="hslot ${r}" data-item="${s??""}"><span class="n">${n+1}</span>${o}</div>`}).join("");for(const t of this.hotbar.querySelectorAll(".hslot"))t.onclick=()=>{var s;const n=t.dataset.item;n&&((s=this.onSelectTool)==null||s.call(this,n))}}renderBuilder(e,t={}){const n=["<h3>Fixtures</h3>"];Qa.forEach((s,r)=>{const o=yn[s],a=t[s]??!1,l=(e==null?void 0:e.mode)==="fixture"&&e.kind===s;n.push(`
        <div class="row ${l?"active":""} ${a?"ready":"locked"}" data-mode="fixture" data-kind="${s}">
          <span><span class="key">${r+5}</span>${o.name}</span>
          <span class="cost">${o.cost.map(c=>`${c.count} ${pt[c.item].name.toLowerCase()}`).join(", ")}</span>
        </div>`)}),this.builder.innerHTML=n.join("");for(const s of this.builder.querySelectorAll(".row"))s.onclick=()=>{var a;if(s.classList.contains("locked"))return;const r=s.dataset.mode,o=s.dataset.kind;(a=this.onSelect)==null||a.call(this,r==="piece"?{mode:"piece",kind:o}:{mode:"fixture",kind:o})}}}const Ll="settlement.cursor",av=40,lv="button, .mm-btn, .row, .hslot, .cr-row, .cr-btn, [data-act], select, label, a";function cv(){let i=document.getElementById("cursorStyle");return i||(i=document.createElement("style"),i.id="cursorStyle",document.head.appendChild(i)),i}function Ah(i,e){cv().textContent=`
    *, html, body, #game, .panel, input {
      cursor: url(${i.url}) ${i.hotX} ${i.hotY}, auto !important;
    }
    ${lv} {
      cursor: url(${e.url}) ${e.hotX} ${e.hotY}, auto !important;
    }`}function Il(i){const e=document.createElement("canvas");return e.width=i,e.height=i,[e,e.getContext("2d")]}function Ku(i,e,t,n,s){const r=i.createLinearGradient(e,t,n,s);return r.addColorStop(0,"#f6de88"),r.addColorStop(.5,"#e6c463"),r.addColorStop(1,"#b0842d"),r}function Rr(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}let Cr=null;function hv(){if(Cr)return Cr;const[i,e]=Il(28),t=[[2,2],[2,21],[7,16.5],[10.5,23.5],[13.7,22],[10.2,15.5],[18,15.5]];e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(const[n,s]of t.slice(1))e.lineTo(n,s);return e.closePath(),e.fillStyle=Ku(e,2,2,17,22),e.fill(),e.lineJoin="round",e.lineWidth=1.6,e.strokeStyle="#241606",e.stroke(),e.beginPath(),e.moveTo(3.4,4),e.lineTo(3.4,16),e.lineWidth=1.1,e.strokeStyle="rgba(255, 247, 218, 0.85)",e.stroke(),Cr={url:i.toDataURL("image/png"),hotX:2,hotY:2},Cr}let Pr=null;function uv(){if(Pr)return Pr;const[i,e]=Il(28);e.lineJoin="round",e.lineCap="round";const t=()=>{e.lineWidth=1.5,e.strokeStyle="#241606",e.stroke()},n=(s,r,o,a)=>{e.fillStyle=Ku(e,s,r,o,a),e.fill()};Rr(e,5,12.5,16.5,12,5),n(5,12.5,20,24.5),t();for(const s of[11.4,14.7,18])Rr(e,s,10.6,3.2,4.4,1.5),n(s,10.6,s+3.2,15),t();return Rr(e,6.4,2.5,4.3,12,2.1),n(6.4,2.5,10.7,14),t(),e.save(),e.translate(5.4,16),e.rotate(-.55),Rr(e,-3.4,-2,4,6.6,2),n(-3.4,-2,.6,4.6),t(),e.restore(),e.beginPath(),e.moveTo(7.7,4),e.lineTo(7.7,12.5),e.lineWidth=1,e.strokeStyle="rgba(255, 247, 218, 0.8)",e.stroke(),Pr={url:i.toDataURL("image/png"),hotX:8,hotY:2},Pr}function Zu(){try{return localStorage.getItem(Ll)}catch{return null}}function Dl(){const i=Zu();if(i){const e={url:i,hotX:0,hotY:0};Ah(e,e)}else Ah(hv(),uv())}const dv=()=>Zu()!==null;function fv(){Dl()}function pv(){try{localStorage.removeItem(Ll)}catch{}Dl()}function mv(i,e){const t=new FileReader;t.onerror=()=>e==null?void 0:e(!1),t.onload=()=>{const n=new Image;n.onerror=()=>e==null?void 0:e(!1),n.onload=()=>{const s=Math.min(1,av/Math.max(n.width,n.height)),r=Math.max(1,Math.round(n.width*s)),o=Math.max(1,Math.round(n.height*s)),[a,l]=Il(1);a.width=r,a.height=o,l.imageSmoothingEnabled=!1,l.drawImage(n,0,0,r,o);try{localStorage.setItem(Ll,a.toDataURL("image/png"))}catch{}Dl(),e==null||e(!0)},n.src=t.result},t.readAsDataURL(i)}const Rh={a:"ᚪ",b:"ᛒ",c:"ᚳ",d:"ᛞ",e:"ᛖ",f:"ᚠ",g:"ᚷ",h:"ᚻ",i:"ᛁ",j:"ᛄ",k:"ᚳ",l:"ᛚ",m:"ᛗ",n:"ᚾ",o:"ᚩ",p:"ᛈ",q:"ᚳ",r:"ᚱ",s:"ᛋ",t:"ᛏ",u:"ᚢ",v:"ᚠ",w:"ᚹ",x:"ᛉ",y:"ᚣ",z:"ᛋ"};function gv(i){const e=i.toLowerCase();let t="";for(let n=0;n<e.length;n++){const s=e.slice(n,n+2);s==="th"?(t+="ᚦ",n++):s==="ng"?(t+="ᛝ",n++):s==="ea"?(t+="ᛠ",n++):e[n]===" "?t+="᛫":Rh[e[n]]&&(t+=Rh[e[n]])}return t}function zn(i,e,t={}){return`<button class="${["mm-btn",t.primary?"mm-primary":"",t.small?"mm-small":""].filter(Boolean).join(" ")}" data-act="${i}"${t.disabled?" disabled":""}>
      <span class="mm-btn-label">${e}</span>
      <span class="mm-btn-runes" aria-hidden="true">${gv(e)}</span>
    </button>`}function xv(i){const e=document.createElement("div");e.id="mainMenu",document.body.appendChild(e);const t=`
    <div class="mm-kicker">A.D. 449</div>
    <h1 class="mm-title">Age of the Saxons</h1>
    <div class="mm-runes" aria-hidden="true">ᚪᚷᛖ᛫ᚩᚠ᛫ᚦᛖ᛫ᛋᚪᛉᚩᚾᛋ</div>
    <div class="mm-rule" aria-hidden="true">ᛝ</div>`;let n=i.hasSave;const s=()=>`
    <div class="mm-panel">
      ${t}
      <div class="mm-buttons">
        ${zn("begin",n?"New landing":"Come ashore",{primary:!0})}
        ${n?zn("continue","Continue"):""}
        ${zn("settings","Settings")}
        ${zn("credits","Credits")}
      </div>
    </div>`,r=()=>`
    <div class="mm-panel">
      ${t}
      <h2 class="mm-subhead">Settings</h2>
      <div class="mm-rows">
        <div class="mm-row">
          <span>Cursor <small class="mm-hint">upload a small image</small></span>
          <span class="mm-inline">
            ${zn("cursor-upload","Upload",{small:!0})}
            ${zn("cursor-reset","Reset",{small:!0,disabled:!dv()})}
          </span>
        </div>
        <div class="mm-row">
          <span>Saved game</span>
          ${zn("delete",n?"Delete save":"No save",{small:!0,disabled:!n})}
        </div>
      </div>
      <input type="file" id="mmCursorFile" accept="image/*" hidden>
      <div class="mm-buttons">
        ${zn("back","Back")}
      </div>
    </div>`,o=()=>`
    <div class="mm-panel">
      ${t}
      <h2 class="mm-subhead">Credits</h2>
      <div class="mm-credits">
        <p><span class="mm-role">Design &amp; code</span>Lucas Schappi</p>
        <p><span class="mm-role">Built with</span>Claude Code</p>
        <p><span class="mm-role">Engine</span>TypeScript · Three.js · Vite</p>
      </div>
      <div class="mm-buttons">
        ${zn("back","Back")}
      </div>
    </div>`;function a(l){e.innerHTML=l();for(const u of e.querySelectorAll(".mm-btn"))u.addEventListener("click",()=>{var d;switch(u.dataset.act){case"begin":i.onBegin();break;case"continue":i.onContinue();break;case"settings":a(r);break;case"credits":a(o);break;case"delete":i.onDeleteSave(),n=!1,a(r);break;case"cursor-upload":(d=e.querySelector("#mmCursorFile"))==null||d.click();break;case"cursor-reset":pv(),a(r);break;case"back":a(s);break}});const c=e.querySelector("#mmCursorFile");c&&c.addEventListener("change",()=>{var d;const u=(d=c.files)==null?void 0:d[0];u&&mv(u,()=>a(r))})}a(s)}const _v=1.6;function co(i,e,t,n){const s=Hd[e.kind];let r;s.tool==="chop"?(Zr(i,"chop"),r=K_(i)):s.tool==="mine"?(Zr(i,"mine"),r=Z_(i)):r=1;const o=s.tool==="hand"?.6:3.2;if(i.stamina<=0)return{gained:0,depleted:!1};i.stamina=Math.max(0,i.stamina-o*n);const a=_v*r*n,l=t.harvest(e,a);if(l<=0)return{gained:0,depleted:e.amount<=0};const u=(e._frac??0)+l*s.per,d=Math.floor(u);return e._frac=u-d,d>0&&Pl(i,s.item,d),{gained:d,depleted:e.amount<=0,item:s.item}}const Nl=i=>i===Ye.OakTree||i===Ye.BirchTree||i===Ye.PineTree;function Ul(i,e,t,n){const s=e+Math.cos(n)*.6,r=t+Math.sin(n)*.6,o=i.elevationAt(s,r);i.pieces.add(xn("log",s,r,o,n,!1,!0))}const vv=i=>i===Ye.Boulder;function Ju(i,e){i.removeResource(e);const t=i.elevationAt(e.x,e.y);i.pieces.add(xn("stoneBlock",e.x,e.y,t,0,!1,!0))}function Mv(i,e,t){const n=yn[e.kind];for(const r of n.cost){const o=e.delivered.find(c=>c.item===r.item),a=(o==null?void 0:o.count)??0;if(a>=r.count)continue;const l=Fs(i,r.item,r.count-a);l>0&&(o?o.count+=l:e.delivered.push({item:r.item,count:l}))}return n.cost.every(r=>{var o;return(((o=e.delivered.find(a=>a.item===r.item))==null?void 0:o.count)??0)>=r.count})?(i.stamina=Math.max(0,i.stamina-2*t),e.progress=Math.min(1,e.progress+t/n.work),e.progress>=1?(e.hp=e.maxHp,!0):!1):!1}const yv=3.5,Qo=4,Ch=1.4,Sv=["log","beam","post","splitLog","plank","stoneBlock","stoneSlab","boulder","thatchBundle"];function bv(i,e,t,n){const s=Je[n],r=Math.max(0,Sv.indexOf(n)),o=t.x+(r-1)*Ch,a=t.y,l=e.queryRadius(o,a,Ch*.6).filter(_=>_.kind===n).length,c=Math.floor(l/Qo),u=l%Qo,d=Math.max(s.width,s.thickness)+.02,h=a+(u-(Qo-1)/2)*d,m=i.elevationAt(o,h)+c*s.thickness;return{x:o,y:h,z:m,yaw:0,upright:!1}}function Qu(i,e){return i.queryRadius(e.x,e.y,.2).some(t=>t.upright&&Math.hypot(t.x-e.x,t.y-e.y)<.15)}function Ev(i,e,t){let n=null,s=1/0;for(const r of e){if(Qu(i,r))continue;const o=(r.x-t.x)**2+(r.y-t.y)**2;o<s&&(s=o,n=r)}return n}function Fl(i,e,t,n){return i.queryRadius(t.x,t.y,n).filter(r=>r.loose===!0).filter(r=>Math.hypot(r.x-e.x,r.y-e.y)>yv).sort((r,o)=>(r.x-t.x)**2+(r.y-t.y)**2-((o.x-t.x)**2+(o.y-t.y)**2))}const Ts=.5,wv=4e3,Tv=.45,jo=(i,e)=>(i&65535)*65536+(e&65535),oi=i=>(i+.5)*Ts;function Av(i,e,t,n,s){const r=Math.floor(e/Ts),o=Math.floor(t/Ts),a=Math.floor(n/Ts),l=Math.floor(s/Ts);if(r===a&&o===l)return[{x:n,y:s}];const c=new Map,u=(p,y)=>{if(p===a&&y===l||p===r&&y===o)return i.canStand(oi(p),oi(y));const b=jo(p,y);let M=c.get(b);return M===void 0&&(M=i.canStand(oi(p),oi(y),Tv),c.set(b,M)),M},d=(p,y)=>{const b=Math.abs(p-a),M=Math.abs(y-l);return b+M+(Math.SQRT2-2)*Math.min(b,M)},h=[],f=new Map,m={cx:r,cy:o,g:0,f:d(r,o),parent:null};h.push(m),f.set(jo(r,o),0);let _=0,g=m;for(;h.length>0&&_<wv;){let p=0;for(let b=1;b<h.length;b++)h[b].f<h[p].f&&(p=b);const y=h.splice(p,1)[0];if(_++,y.cx===a&&y.cy===l)return Ph(y,n,s);d(y.cx,y.cy)<d(g.cx,g.cy)&&(g=y);for(let b=-1;b<=1;b++)for(let M=-1;M<=1;M++){if(M===0&&b===0)continue;const T=y.cx+M,w=y.cy+b;if(!u(T,w)||M!==0&&b!==0&&(!u(y.cx+M,y.cy)||!u(y.cx,y.cy+b)))continue;const A=M!==0&&b!==0?Math.SQRT2:1,x=y.g+A,E=jo(T,w);x>=(f.get(E)??1/0)||(f.set(E,x),h.push({cx:T,cy:w,g:x,f:x+d(T,w),parent:y}))}}return g!==m?Ph(g,oi(g.cx),oi(g.cy)):null}function Ph(i,e,t){const n=[];for(let r=i;r;r=r.parent)n.push(r);n.reverse();const s=n.map(r=>({x:oi(r.cx),y:oi(r.cy)}));return s[s.length-1]={x:e,y:t},Rv(s)}function Rv(i){if(i.length<=2)return i;const e=[i[0]];for(let t=1;t<i.length-1;t++){const n=e[e.length-1],s=i[t],r=i[t+1],o=(s.x-n.x)*(r.y-n.y)-(s.y-n.y)*(r.x-n.x);Math.abs(o)>1e-6&&e.push(s)}return e.push(i[i.length-1]),e}const Lh=Math.PI/2,Ih=.125,Ps=.25,as=i=>Math.floor(i/Ps)*Ps+Ps/2,Dh=8,Nh=3,Cv=1,Uh=5,Pv=.45,Lv=.1,ks=.01;function ja(i,e,t,n,s,r){return{id:-1,kind:i,x:e,y:t,z:n,yaw:s,upright:r,load:0,integrity:1}}function ju(i,e,t,n,s,r){return Mn(ja(i,e,t,n,s,r))}function ls(i,e,t,n,s,r,o,a=-1/0){const l=i.elevationAt(n,s);if(Ji(i.biomeAt(Math.floor(n),Math.floor(s))))return{ok:!1,z:l,support:0,supporters:[],reason:"In the water"};const c=ju(t,n,s,-50,r,o),u=e.query({...c,z0:-50,z1:50}),d=ja(t,n,s,-50,r,o);let h=l;for(const b of u){if(al(d,b)<=.02)continue;const M=Wt(b).z1;M>h&&M>=a-ks&&(h=M)}const f=Math.max(h,a===-1/0?h:a),m=ja(t,n,s,f,r,o);for(const b of u)if(kd(m,b))return{ok:!1,z:f,support:0,supporters:[],reason:"Blocked by another piece"};const _=Iv(m,f,l,u),{support:g,supporters:p}=_;if(!_.stable)return{ok:!1,z:f,support:g,supporters:p,reason:_.reason};const y=Je[t];for(const b of p){const M=Je[b.kind],T=y.mass/Math.max(1,p.length);if(b.load+T>M.bearing)return{ok:!1,z:f,support:g,supporters:p,reason:`The ${M.name.toLowerCase()} below would give way`}}return{ok:!0,z:f,support:g,supporters:p}}function Iv(i,e,t,n){const s=Wt(i),r=Od(s);if(Math.abs(e-t)<=ks)return{stable:!0,support:1,supporters:[]};const o=[],a=[];let l=0;for(const u of n){const d=Wt(u).z1;if(d>e+ks||d<e-Lv)continue;const h=Fd(s,Wt(u));if(h.length===0)continue;const f=cu(h);f<=0||(l+=f,a.push(...h),o.push(u))}return{stable:!0,support:r>0?Math.min(1,l/r):0,supporters:o}}function cs(i,e,t,n,s,r,o){const a=xn(e,t,n,o.z,s,r);return i.add(a),ed(i,[a,...o.supporters]),a}function ed(i,e){const t=new Set,n=[...e],s=4e3;for(;n.length&&t.size<s;){const o=n.shift();t.has(o)||(t.add(o),n.push(...Jr(i,o),...td(i,o)))}for(const o of t)o.load=0;const r=[...t].sort((o,a)=>a.z-o.z);for(const o of r){const a=Jr(i,o);if(a.length===0)continue;const l=(Je[o.kind].mass+o.load)/a.length;for(const c of a)c.load+=l}}function Jr(i,e){const t=Mn(e);return i.query({...t,z0:t.z0-.1,z1:t.z0+.1}).filter(n=>n.id!==e.id&&Math.abs(Wt(n).z1-Wt(e).z0)<=ks).filter(n=>al(e,n)>0)}function td(i,e){const t=Mn(e);return i.query({...t,z0:t.z1-.1,z1:t.z1+.1}).filter(n=>n.id!==e.id&&Math.abs(Wt(n).z0-Wt(e).z1)<=ks).filter(n=>al(e,n)>0)}function Dv(i,e,t){const n=[],s=Jr(e,t);e.remove(t);const r=[...s,...n.flatMap(o=>Jr(e,o))].filter(o=>e.get(o.id)!==void 0);return r.length&&ed(e,r),{removed:[t],collapsed:n}}function Nv(i){const e=Je[i.kind],t=Math.cos(i.yaw),n=Math.sin(i.yaw),s=[];if(i.upright){const u=e.length,d=Math.max(e.width,e.thickness)/2,h=[{x:t,y:n},{x:-t,y:-n},{x:-n,y:t},{x:n,y:-t}];for(const f of h){for(let m=0;m<Dh;m++){const _=(m+1)/(Dh+1)*u;s.push({x:i.x+f.x*d,y:i.y+f.y*d,z:i.z+_,nx:f.x,ny:f.y,kind:"side",host:i})}s.push({x:i.x+f.x*d,y:i.y+f.y*d,z:i.z,nx:f.x,ny:f.y,kind:"bottom",host:i})}return s.push({x:i.x,y:i.y,z:i.z+u,nx:0,ny:0,kind:"top",host:i}),s}const r=Wt(i),o=t,a=n,l=-n,c=t;for(const u of[-1,1])for(let d=0;d<Nh;d++){const h=-r.hx+d*(2*r.hx)/(Nh-1);s.push({x:r.cx+o*h+l*u*r.hy,y:r.cy+a*h+c*u*r.hy,z:r.z0,nx:l*u,ny:c*u,kind:"side",host:i})}for(const u of[-1,1])for(let d=0;d<Cv;d++)s.push({x:r.cx+o*u*r.hx+l*0,y:r.cy+a*u*r.hx+c*0,z:r.z0,nx:o*u,ny:a*u,kind:"end",host:i});for(let u=0;u<Uh;u++){const d=-r.hx+u*(2*r.hx)/(Uh-1);s.push({x:r.cx+o*d,y:r.cy+a*d,z:r.z1,nx:0,ny:0,kind:"top",host:i})}return s}function nd(i,e){return!(e&&i.host.upright&&i.kind==="side")}function Uv(i,e,t){if(i.kind!=="top")return!0;const n=Wt(i.host),s=Math.cos(n.yaw),r=Math.sin(n.yaw),o=e-n.cx,a=t-n.cy,l=Math.abs(o*s+a*r),c=Math.abs(-o*r+a*s),u=.1;return l<=n.hx+u&&c<=n.hy+u}function id(i,e,t,n=3){const s=[];for(const r of i.queryRadius(e,t,n))s.push(...Nv(r));return s}function sd(i,e,t,n,s=0){if(i.kind==="top")return{x:i.x,y:i.y,z:i.z,yaw:t};const r=Je[e],o=(n?r.width:r.length)/2,a=(n?r.thickness:r.width)/2,l=Math.atan2(i.ny,i.nx);return s%2===0?{x:i.x+i.nx*o,y:i.y+i.ny*o,z:i.z,yaw:l}:{x:i.x+i.nx*a,y:i.y+i.ny*a,z:i.z,yaw:l+Math.PI/2}}function Fv(i,e,t,n,s,r){const o=id(i,t,n,3).filter(u=>nd(u,r)).filter(u=>Uv(u,t,n));if(o.length===0)return null;let a=null,l=Pv;for(const u of o){const d=Math.hypot(u.x-t,u.y-n);d<l&&(l=d,a=u)}if(!a)return null;const c=sd(a,e,s,r);return{x:c.x,y:c.y,yaw:c.yaw,point:a}}function Ov(i,e,t,n,s,r,o=.3){const a=Fv(i,e,t,n,s,r);if(a)return{x:a.x,y:a.y,yaw:a.yaw};const l=Je[e],c=l.length===l.width&&l.width===l.thickness;if(r||c)return{x:as(t),y:as(n),yaw:s};const u=ju(e,t,n,0,s,r),d=(u.x1-u.x0)/2,h=(u.y1-u.y0)/2,f=i.query({x0:u.x0-1.5,x1:u.x1+1.5,y0:u.y0-1.5,y1:u.y1+1.5,z0:-50,z1:50}),m=[],_=[];for(const p of f){const y=Mn(p);m.push(y.x1+d,y.x0-d,y.x0+d,y.x1-d,(y.x0+y.x1)/2),_.push(y.y1+h,y.y0-h,y.y0+h,y.y1-h,(y.y0+y.y1)/2)}const g=(p,y)=>{let b=p,M=o;for(const T of y){const w=Math.abs(T-p);w<M&&(M=w,b=T)}return b===p?Math.round(p/Ih)*Ih:b};return{x:g(t,m),y:g(n,_),yaw:s}}const ea=i=>({job:null,leaderId:i,path:null,think:0}),Cn=1.6,rd=4.5,el=new Map,Fh=.25,kv=.3,Bv=1.5;function zv(i,e,t,n,s){const r=Math.hypot(n-e,s-t),o=Math.max(1,Math.ceil(r/.2));for(let a=1;a<=o;a++){const l=a/o;if(!i.canStand(e+(n-e)*l,t+(s-t)*l))return!1}return!0}function Oh(i,e,t,n,s){const r=t-i.x,o=n-i.y,a=Math.hypot(r,o);if(a<=s||a===0)return e.canStand(t,n)&&(i.x=t,i.y=n),"arrived";i.facing=Math.atan2(o,r);const l=i.x+r/a*s,c=i.y+o/a*s,u=i.x,d=i.y;return e.canStand(l,c)?(i.x=l,i.y=c):e.canStand(l,i.y)?i.x=l:e.canStand(i.x,c)&&(i.y=c),Math.hypot(i.x-u,i.y-d)>s*.25?"moved":"stuck"}function yt(i,e,t,n,s){const r=e.speedMultiplier(Math.floor(i.x),Math.floor(i.y));if(r<=0)return!1;const o=qu(i,r)*s,a=Ue(i.x,i.y,t,n),l=()=>Ue(i.x,i.y,t,n)<=o+1e-6;let c=el.get(i.id);if((!c||Ue(c.goalX,c.goalY,t,n)>Bv)&&(c={goalX:t,goalY:n,waypoints:[],cooldown:0,lastGoalDist:a,stall:0},el.set(i.id,c)),c.goalX=t,c.goalY=n,c.cooldown-=s,c.waypoints.length>0){let h=0;for(let _=c.waypoints.length-1;_>0;_--)if(zv(e,i.x,i.y,c.waypoints[_].x,c.waypoints[_].y)){h=_;break}h>0&&c.waypoints.splice(0,h);const f=c.waypoints[0];if(Ue(i.x,i.y,f.x,f.y)<=kv)return c.waypoints.shift(),c.waypoints.length===0&&(c.stall=0,c.lastGoalDist=Ue(i.x,i.y,t,n)),l();Oh(i,e,f.x,f.y,o);const m=Ue(i.x,i.y,t,n);return c.stall=c.lastGoalDist-m>o*.2?0:c.stall+s,c.lastGoalDist=m,c.stall>Fh&&c.cooldown<=0&&kh(c,e,i,t,n),!1}if(Oh(i,e,t,n,o)==="arrived")return c.stall=0,l();const d=Ue(i.x,i.y,t,n);return c.stall=c.lastGoalDist-d>o*.2?0:c.stall+s,c.lastGoalDist=d,c.stall>Fh&&c.cooldown<=0&&kh(c,e,i,t,n),!1}function kh(i,e,t,n,s){const r=Av(e,t.x,t.y,n,s);i.waypoints=r??[],i.cooldown=r?.6:1,i.stall=0}function Bh(i){el.delete(i)}function od(i,e){if(!e.canStand(i.x,i.y))for(let t=.3;t<=2.5;t+=.3)for(let n=0;n<12;n++){const s=n/12*Math.PI*2,r=i.x+Math.cos(s)*t,o=i.y+Math.sin(s)*t;if(e.canStand(r,o)){i.x=r,i.y=o;return}}}function Gv(i,e,t,n){if(!i.carrying)return!1;const s=Ue(i.x,i.y,t.x,t.y),r=.7;if(s<.45){let a=i.x-t.x,l=i.y-t.y;Math.hypot(a,l)<.001&&(a=1,l=0);const c=Math.hypot(a,l);return i.stance=xe.Moving,yt(i,e,t.x+a/c*r,t.y+l/c*r,n),!1}if(s>Cn)return i.stance=xe.Moving,yt(i,e,t.x,t.y,n),!1;i.stance=xe.Working,i.actionTimer=.3;const o=ls(e,e.pieces,i.carrying.kind,t.x,t.y,0,!0);return o.ok?(cs(e.pieces,i.carrying.kind,t.x,t.y,0,!0,o),i.carrying=null,od(i,e),!0):!1}function Hv(i,e,t,n,s,r){if(!mt(i))return;if(od(i,t),e.think-=r,i.stamina<8){i.stance=xe.Sleeping,i.stamina=Math.min(100,i.stamina+9*r);return}if(i.stance===xe.Sleeping){if(i.stamina=Math.min(100,i.stamina+9*r),i.stamina<65)return;i.stance=xe.Idle}if(i.order==="stopped"){i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*r);return}if(i.order==="chop"){Wv(i,t,n,r);return}if(i.order==="mine"){Xv(i,t,n,r);return}if(i.order==="build"){$v(i,t,n,r);return}if(i.order==="haul"){Yv(i,t,n,r);return}if(i.order==="forage"){Qv(i,t,n,r);return}if(!e.job&&e.think<=0&&(e.job=n.claim(i,t),e.think=.4),e.job){jv(i,e,e.job,t,n,s,r)&&(n.complete(e.job),e.job=null);return}const o=e.leaderId!==null?s.find(a=>a.id===e.leaderId):void 0;if(o&&Ue(i.x,i.y,o.x,o.y)>rd){i.stance=xe.Moving;const l=(i.id%5-2)*.9;yt(i,t,o.x+l,o.y+l*.6,r);return}i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*r)}const ad=45,ld=40,Vv=i=>i===Ye.OakTree||i===Ye.BirchTree||i===Ye.PineTree;function Bs(i,e){const t=i.pileOrDefault(e);return t?{x:t.x,y:t.y}:null}function Ol(i,e,t,n){const s=i.carrying;if(!s)return!0;if(!t)return!1;if(Ue(i.x,i.y,t.x,t.y)>1.6)return i.stance=xe.Moving,yt(i,e,t.x,t.y,n),!1;const r=bv(e,e.pieces,t,s.kind),o=ls(e,e.pieces,s.kind,r.x,r.y,r.yaw,r.upright,r.z);if(o.ok){const l=cs(e.pieces,s.kind,r.x,r.y,r.yaw,r.upright,o);return s.kind==="log"&&(l.loose=!0),i.carrying=null,!0}const a=ls(e,e.pieces,s.kind,i.x,i.y,s.yaw,s.upright);if(a.ok){const l=cs(e.pieces,s.kind,i.x,i.y,s.yaw,s.upright,a);return s.kind==="log"&&(l.loose=!0),i.carrying=null,!0}return!1}function Wv(i,e,t,n){const s=Bs(t,i.dropPile);if(i.carrying){Ol(i,e,s,n);return}if(s){const l=Fl(e.pieces,s,i,3);if(l.length>0){const c=l[0];Ue(i.x,i.y,c.x,c.y)>1.6?(i.stance=xe.Moving,yt(i,e,c.x,c.y,n)):(i.carrying={kind:c.kind,yaw:c.yaw,upright:c.upright,lift:0},e.pieces.remove(c));return}}const r=e.resourcesNear(i.x,i.y,ld).filter(l=>Vv(l.kind));if(r.length===0){i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}const o=r[0];if(Ue(i.x,i.y,o.x,o.y)>Cn){i.stance=xe.Moving,yt(i,e,o.x,o.y,n);return}i.stance=xe.Working,i.actionTimer=.35,i.facing=Math.atan2(o.y-i.y,o.x-i.x),co(i,o,e,n).depleted&&Nl(o.kind)&&Ul(e,o.x,o.y,i.facing)}function Xv(i,e,t,n){const s=Bs(t,i.dropPile);if(i.carrying){Ol(i,e,s,n);return}if(s){const a=Fl(e.pieces,s,i,3);if(a.length>0){const l=a[0];Ue(i.x,i.y,l.x,l.y)>1.6?(i.stance=xe.Moving,yt(i,e,l.x,l.y,n)):(i.carrying={kind:l.kind,yaw:l.yaw,upright:l.upright,lift:0},e.pieces.remove(l));return}}const r=e.resourcesNear(i.x,i.y,ld).filter(a=>vv(a.kind));if(r.length===0){i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}const o=r[0];if(Ue(i.x,i.y,o.x,o.y)>Cn){i.stance=xe.Moving,yt(i,e,o.x,o.y,n);return}i.stance=xe.Working,i.actionTimer=.35,i.facing=Math.atan2(o.y-i.y,o.x-i.x),i.stamina=Math.max(0,i.stamina-3.2*n),Ju(e,o)}function $v(i,e,t,n){const s=Ev(e.pieces,t.wallCells,i);if(!s){i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}if(i.carrying){Gv(i,e,s,n);return}const r=Bs(t,i.sourcePile),o=u=>u.kind==="log"&&!u.upright,a=[];r&&a.push(...e.pieces.queryRadius(r.x,r.y,qv).filter(o)),a.push(...e.pieces.queryRadius(i.x,i.y,ad).filter(u=>o(u)&&u.loose));let l=null,c=1/0;for(const u of a){const d=(u.x-i.x)**2+(u.y-i.y)**2;d<c&&(c=d,l=u)}if(!l){i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}if(Ue(i.x,i.y,l.x,l.y)>Cn){i.stance=xe.Moving,yt(i,e,l.x,l.y,n);return}i.carrying={kind:l.kind,yaw:l.yaw,upright:l.upright,lift:0},e.pieces.remove(l)}const qv=6;function Yv(i,e,t,n){const s=Bs(t,i.destPile);if(!s){i.stance=xe.Idle;return}const r=Bs(t,i.sourcePile)??s;if(i.carrying){Ol(i,e,s,n);return}const o=Fl(e.pieces,s,r,ad);if(o.length===0){i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}let a=o[0],l=1/0;for(const c of o){const u=Ue(i.x,i.y,c.x,c.y);u<l&&(l=u,a=c)}if(l>1.6){i.stance=xe.Moving,yt(i,e,a.x,a.y,n);return}i.carrying={kind:a.kind,yaw:a.yaw,upright:a.upright,lift:0},e.pieces.remove(a)}const Kv=45,Zv=12,cd=i=>(pt[i].nutrition??0)>0;function Jv(i){let e=0;for(const[t,n]of i.inventory)cd(t)&&(e+=n);return e}function Qv(i,e,t,n){const s=t.foodPile,r=Jv(i),o=e.resourcesNear(i.x,i.y,Kv).filter(l=>l.kind===Ye.BerryBush);if(s&&r>0&&(r>=Zv||o.length===0)){if(Ue(i.x,i.y,s.x,s.y)>1.6){i.stance=xe.Moving,yt(i,e,s.x,s.y,n);return}for(const[l,c]of[...i.inventory])cd(l)&&(Fs(i,l,c),e.dropItems(s.x,s.y,l,c));return}if(o.length===0){i.stance=xe.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}const a=o[0];if(Ue(i.x,i.y,a.x,a.y)>Cn){i.stance=xe.Moving,yt(i,e,a.x,a.y,n);return}i.stance=xe.Working,i.actionTimer=.35,i.facing=Math.atan2(a.y-i.y,a.x-i.x),co(i,a,e,n)}function jv(i,e,t,n,s,r,o){switch(t.kind){case"harvest":{const a=t.nodeId!==void 0?n.findResource(t.nodeId,i.x,i.y):void 0;return a?Xu(i)>=$u&&s.dropPoint?(i.stance=xe.Moving,yt(i,n,s.dropPoint.x,s.dropPoint.y,o)&&zh(i,n,s),!1):Ue(i.x,i.y,a.x,a.y)>Cn?(i.stance=xe.Moving,yt(i,n,a.x,a.y,o),!1):(i.stance=xe.Working,i.actionTimer=.35,i.facing=Math.atan2(a.y-i.y,a.x-i.x),co(i,a,n,o).depleted?(Nl(a.kind)&&Ul(n,a.x,a.y,i.facing),!0):!1):!0}case"haulItems":return s.dropPoint?(i.stance=xe.Moving,yt(i,n,s.dropPoint.x,s.dropPoint.y,o)?(zh(i,n,s),!0):!1):!0;case"haulPiece":{const a=t.pieceId!==void 0?n.pieces.get(t.pieceId):void 0;if(!a||t.tx===void 0||t.ty===void 0)return!0;if(!i.carrying)return Ue(i.x,i.y,a.x,a.y)>Cn?(i.stance=xe.Moving,yt(i,n,a.x,a.y,o),!1):(i.carrying={kind:a.kind,yaw:a.yaw,upright:a.upright,lift:0},n.pieces.remove(a),!1);if(i.stance=xe.Moving,yt(i,n,t.tx,t.ty,o)){const l=i.carrying,c=eM(n,t.tx,t.ty,l.kind,l.yaw,l.upright);return i.carrying=null,c?cs(n.pieces,l.kind,c.x,c.y,l.yaw,l.upright,c.result):n.pieces.add(xn(l.kind,i.x,i.y,n.elevationAt(i.x,i.y),l.yaw,l.upright)),!0}return!1}case"buildFixture":{const a=n.fixtures.find(u=>u.id===t.fixtureId);if(!a||a.progress>=1)return!0;const c=yn[a.kind].cost.find(u=>{var h;return(((h=a.delivered.find(f=>f.item===u.item))==null?void 0:h.count)??0)+Ai(i,u.item)<u.count});if(c&&s.dropPoint){const u=n.pileNear(s.dropPoint.x,s.dropPoint.y,2.5);if(u&&(u.contents.get(c.item)??0)>0){if(Ue(i.x,i.y,u.x,u.y)>Cn)return i.stance=xe.Moving,yt(i,n,u.x,u.y,o),!1;const d=Math.min(c.count,u.contents.get(c.item)??0);return u.contents.set(c.item,(u.contents.get(c.item)??0)-d),(u.contents.get(c.item)??0)<=0&&u.contents.delete(c.item),u.contents.size===0&&n.removePile(u),i.inventory.set(c.item,Ai(i,c.item)+d),!1}}return Ue(i.x,i.y,a.tx+.5,a.ty+.5)>Cn?(i.stance=xe.Moving,yt(i,n,a.tx+.5,a.ty+.5,o),!1):(i.stance=xe.Working,i.actionTimer=.3,Mv(i,a,o))}case"attack":{const a=r.find(l=>l.id===t.actorId);return!a||!mt(a)?!0:(Zr(i,"fight"),Ue(i.x,i.y,a.x,a.y)>Cn?(i.stance=xe.Moving,yt(i,n,a.x,a.y,o),!1):(i.stance=xe.Fighting,!1))}case"guard":return t.tx===void 0||t.ty===void 0?!0:(Ue(i.x,i.y,t.tx,t.ty)>1.5?(i.stance=xe.Moving,yt(i,n,t.tx,t.ty,o)):i.stance=xe.Idle,!1);case"follow":{const a=r.find(l=>l.id===t.actorId);return a?(Ue(i.x,i.y,a.x,a.y)>rd&&(i.stance=xe.Moving,yt(i,n,a.x,a.y,o)),!1):!0}default:return!0}}function zh(i,e,t){if(t.dropPoint)for(const[n,s]of[...i.inventory])pt[n].tool||(e.dropItems(t.dropPoint.x,t.dropPoint.y,n,s),i.inventory.delete(n))}function eM(i,e,t,n,s,r){for(let o=0;o<=4;o+=.5){const a=o===0?1:Math.max(6,Math.round(o*8));for(let l=0;l<a;l++){const c=l/a*Math.PI*2,u=e+Math.cos(c)*o,d=t+Math.sin(c)*o,h=ls(i,i.pieces,n,u,d,s,r);if(h.ok)return{x:u,y:d,result:h}}}return null}const tM=i=>i===Ye.OakTree||i===Ye.BirchTree||i===Ye.PineTree,zr=5;class nM{constructor(){G(this,"jobs",[]);G(this,"stockpiles",[]);G(this,"foodPile",null);G(this,"designated",new Set);G(this,"wallLines",[]);G(this,"nextWallLineId",1)}pileById(e){if(e!=null)return this.stockpiles.find(t=>t.id===e)}defaultPile(){let e;for(const t of this.stockpiles)(!e||t.id<e.id)&&(e=t);return e}pileOrDefault(e){return this.pileById(e)??this.defaultPile()}setPile(e,t,n){const s=this.pileById(e);if(s)return s.x=t,s.y=n,s;const r={id:e,x:t,y:n};return this.stockpiles.push(r),this.stockpiles.sort((o,a)=>o.id-a.id),r}freePileId(){for(let e=1;e<=zr;e++)if(!this.pileById(e))return e;return null}removePile(e){this.stockpiles=this.stockpiles.filter(t=>t.id!==e)}get dropPoint(){const e=this.defaultPile();return e?{x:e.x,y:e.y}:null}set dropPoint(e){var t;e&&this.setPile(((t=this.defaultPile())==null?void 0:t.id)??1,e.x,e.y)}get wallCells(){return this.wallLines.flatMap(e=>e.cells)}hasWallCell(e,t){return this.wallLines.some(n=>n.cells.some(s=>Math.abs(s.x-e)<1e-6&&Math.abs(s.y-t)<1e-6))}addWallLine(e){const t=e.filter(n=>!this.hasWallCell(n.x,n.y));t.length&&this.wallLines.push({id:this.nextWallLineId++,cells:t})}addWallCell(e,t){this.addWallLine([{x:e,y:t}])}clearWallPlan(){this.wallLines=[]}removeWallLineAt(e,t,n=.2){const s=n*n,r=this.wallLines.findIndex(a=>a.cells.some(l=>(l.x-e)**2+(l.y-t)**2<=s));if(r<0)return 0;const[o]=this.wallLines.splice(r,1);return o.cells.length}designate(e,t=1){tM(e.kind)||this.designated.has(e.id)||(this.designated.add(e.id),this.jobs.push({kind:"harvest",nodeId:e.id,tx:Math.floor(e.x),ty:Math.floor(e.y),priority:t}))}undesignate(e){this.designated.delete(e),this.jobs=this.jobs.filter(t=>t.nodeId!==e)}exportState(){return{stockpiles:this.stockpiles.map(e=>({...e})),foodPile:this.foodPile?{...this.foodPile}:null,wallLines:this.wallLines.map(e=>({id:e.id,cells:e.cells.map(t=>({...t}))})),nextWallLineId:this.nextWallLineId,designated:[...this.designated]}}importState(e){this.stockpiles=e.stockpiles.map(t=>({...t})),this.foodPile=e.foodPile?{...e.foodPile}:null,this.wallLines=e.wallLines.map(t=>({id:t.id,cells:t.cells.map(n=>({...n}))})),this.nextWallLineId=e.nextWallLineId,this.designated.clear();for(const t of e.designated)this.designated.add(t);this.jobs=[]}addFixtureJob(e,t=2){this.jobs.some(n=>n.fixtureId===e.id)||this.jobs.push({kind:"buildFixture",fixtureId:e.id,tx:e.tx,ty:e.ty,priority:t})}addHaulPiece(e,t,n,s=2){this.jobs.push({kind:"haulPiece",pieceId:e.id,tx:t,ty:n,priority:s})}claim(e,t){let n=null,s=-1/0;for(const r of this.jobs){if(r.claimedBy!==void 0||r.kind==="harvest"&&r.nodeId!==void 0&&!t.findResource(r.nodeId,e.x,e.y))continue;if(r.kind==="buildFixture"&&r.fixtureId!==void 0){const l=t.fixtures.find(c=>c.id===r.fixtureId);if(!l||l.progress>=1)continue}const o=Math.hypot((r.tx??e.x)-e.x,(r.ty??e.y)-e.y),a=r.priority*100-o;a>s&&(s=a,n=r)}return n&&(n.claimedBy=e.id),n}release(e){e.claimedBy=void 0}complete(e){e.nodeId!==void 0&&this.designated.delete(e.nodeId);const t=this.jobs.indexOf(e);t>=0&&this.jobs.splice(t,1)}releaseAllFor(e){for(const t of this.jobs)t.claimedBy===e&&(t.claimedBy=void 0)}get pending(){return this.jobs.length}}const iM=15,Gh=34,sM=52,rM=88,oM=1.6;function tl(i){return i.faction!=="wildlife"||!i.species?!1:Xn[i.species].temper==="predator"||i.provoked===!0}function aM(i,e,t){const n=Xn[i];return Kr(n.name,"wildlife",e,t,{species:i,hp:n.hp,maxHp:n.hp,speed:n.speed,meleeBonus:n.meleeBonus,morale:100,stance:xe.Idle,impulse:0,heading:0,targetId:null})}function Hh(i,e,t,n){let s=0;for(const r of i)r.faction==="wildlife"&&mt(r)&&s++;for(let r=0;r<10&&s<iM;r++){const o=Math.random()*Math.PI*2,a=Gh+Math.random()*(sM-Gh),l=t+Math.cos(o)*a,c=n+Math.sin(o)*a;if(!e.canStand(l,c))continue;const u=e.biomeAt(Math.floor(l),Math.floor(c)),d=V_.filter(_=>Xn[_].biomes.includes(u));if(!d.length)continue;let h=0;for(const _ of d)h+=Xn[_].weight;let f=Math.random()*h,m=d[0];for(const _ of d)if(f-=Xn[_].weight,f<=0){m=_;break}i.push(aM(m,l,c)),s++}}function lM(i,e,t){for(let n=i.length-1;n>=0;n--){const s=i[n];s.faction==="wildlife"&&mt(s)&&Ue(s.x,s.y,e,t)>rM&&i.splice(n,1)}}function ta(i,e,t,n,s){const r=t*n,o=i.x+Math.cos(e)*r,a=i.y+Math.sin(e)*r;s.canStand(o,a)?(i.x=o,i.y=a,i.facing=e):(i.heading=Math.random()*Math.PI*2,i.impulse=.4)}function cM(i,e,t){for(const n of i){if(n.faction!=="wildlife"||!mt(n)||!n.species)continue;const s=Xn[n.species];let r=null,o=1/0;for(const a of i){if(a.faction!=="settlers"||!mt(a))continue;const l=Ue(n.x,n.y,a.x,a.y);l<o&&(o=l,r=a)}if(tl(n)&&r&&o<=s.senseRange){n.targetId=r.id,o<=oM?(n.stance=xe.Fighting,n.facing=Math.atan2(r.y-n.y,r.x-n.x)):(n.stance=xe.Moving,ta(n,Math.atan2(r.y-n.y,r.x-n.x),s.speed*1.05,t,e));continue}if(r&&o<=s.senseRange){n.stance=xe.Fleeing,n.targetId=null;const a=Math.atan2(n.y-r.y,n.x-r.x),l=o<2.5?1.08:1;ta(n,a,s.speed*l,t,e);continue}n.targetId=null,n.provoked=!1,n.impulse=(n.impulse??0)-t,(n.impulse??0)<=0&&(Math.random()<.55?(n.impulse=1.5+Math.random()*2.5,n.stance=xe.Idle):(n.impulse=1+Math.random()*2,n.heading=Math.random()*Math.PI*2,n.stance=xe.Moving)),n.stance===xe.Moving&&n.heading!=null&&ta(n,n.heading,s.speed*.34,t,e)}}const Vh=1.7,hM=1.15,Lr=new Map,hd=(i,e)=>{if(i.faction===e.faction)return!1;const t=i.faction==="wildlife",n=e.faction==="wildlife";return t&&n?!1:t?tl(i):n?tl(e):!0};function uM(i,e,t){for(const n of i){const s=(Lr.get(n.id)??0)-e;Lr.set(n.id,Math.max(0,s))}for(const n of i){if(!mt(n)||n.stance!==xe.Fighting||(Lr.get(n.id)??0)>0)continue;let s;if(n.targetId!=null){const a=i.find(l=>l.id===n.targetId);a&&mt(a)&&Ue(n.x,n.y,a.x,a.y)<=Vh?s=a:(!a||!mt(a))&&(n.targetId=null)}if(s||(s=i.find(a=>mt(a)&&hd(n,a)&&Ue(n.x,n.y,a.x,a.y)<=Vh)),!s)continue;Lr.set(n.id,hM),n.actionTimer=.3,n.facing=Math.atan2(s.y-n.y,s.x-n.x);const r=.72+n.stamina/100*.24;if(Math.random()>r){t.push({x:s.x,y:s.y,text:"miss",kind:"miss"});continue}const o=J_(n)*(.8+Math.random()*.4);if(s.hp-=o,n.stamina=Math.max(0,n.stamina-4),t.push({x:s.x,y:s.y,text:`-${Math.round(o)}`,kind:"hit"}),s.faction==="wildlife"&&(s.provoked=!0),s.hp<=0){if(s.hp=0,s.stance=xe.Idle,s.faction==="wildlife"&&s.species){const a=Xn[s.species].loot;for(const c of a)Pl(n,c.item,c.count);const l=a.map(c=>`${c.count} ${c.item}`).join(", ");t.push({x:s.x,y:s.y,text:`${s.name}: ${l}`,kind:"death"})}else t.push({x:s.x,y:s.y,text:`${s.name} falls`,kind:"death"});n.targetId=null}else s.stance!==xe.Fighting&&s.faction!=="wildlife"&&(s.stance=s.morale<30?xe.Fleeing:xe.Fighting)}}const dM=7;function fM(i){for(const e of i){if(!mt(e)||e.stance===xe.Fleeing||e.stance===xe.Sleeping||e.isPlayer)continue;i.find(n=>mt(n)&&hd(e,n)&&Ue(e.x,e.y,n.x,n.y)<=dM)?e.stance=xe.Fighting:e.stance===xe.Fighting&&(e.stance=xe.Idle)}}const Ei=12;function ud(i){return i==="log"?"log":i==="stone"?"stoneBlock":null}function Gr(i,e,t){let n=Ai(e,t);const s=ud(t);if(s)for(const o of i.pieces.queryRadius(e.x,e.y,Ei))o.kind===s&&!o.upright&&n++;const r=Ei*Ei;for(const o of i.piles)(o.x-e.x)**2+(o.y-e.y)**2<=r&&(n+=o.contents.get(t)??0);return n}function dd(i,e,t,n){let s=n;const r=Math.min(s,Ai(e,t));r>0&&(Fs(e,t,r),s-=r);const o=ud(t);if(s>0&&o)for(const l of i.pieces.queryRadius(e.x,e.y,Ei)){if(s<=0)break;l.kind===o&&!l.upright&&(i.pieces.remove(l),s--)}const a=Ei*Ei;for(const l of i.piles){if(s<=0)break;if((l.x-e.x)**2+(l.y-e.y)**2>a)continue;const c=l.contents.get(t)??0;if(c<=0)continue;const u=Math.min(s,c);c-u<=0?l.contents.delete(t):l.contents.set(t,c-u),s-=u}}function nl(i,e,t){const n=t.in.every(r=>Gr(i,e,r.item)>=r.count),s=t.station!==void 0&&i.nearestFixture(e.x,e.y,t.station,Ei)===void 0;return{ok:n&&!s,hasMaterials:n,needsStation:s}}function pM(i,e,t){if(!nl(i,e,t).ok)return!1;for(const n of t.in)dd(i,e,n.item,n.count);return Pl(e,t.out.item,t.out.count),!0}const ui=900,mM=["Ael","Bed","Cyne","Deor","Ead","Fris","Garn","Hroth","Ing","Leof","Mael","Nor","Osric","Pen","Read","Sig","Tor","Wyn","Yric","Beorn"],gM=["ham","ton","wic","burh","ford","stead","leah","cot","dun","mere"],xM=["Aedred","Beorhtric","Cuthwine","Dunstan","Eanfrith","Frithuwald","Godgifu","Hereward","Ingeld","Leofwine","Mildthryth","Osgar","Raedwald","Sigeberht","Tostig","Wulfstan","Yffe","Aethelflaed","Beorhtwynn","Ceolwulf","Eadgyth","Hild","Osthryth","Wilfrid"];function Wh(i,e,t){const n=i.peekBiome(e,t);return n===Pe.Grassland||n===Pe.Meadow||n===Pe.Forest}function _M(i,e,t){const n=to(e,t,i.seed^24301),s=sn(n);if(s()>.62)return null;const r=Math.round(e*ui+di(s,.15,.85)*ui),o=Math.round(t*ui+di(s,.15,.85)*ui);if(!Wh(i,r,o)){const a=i.findLandNear(r,o,120);return!a||!Wh(i,a.x,a.y)?null:Xh(s,a.x,a.y,e,t)}return Xh(s,r,o,e,t)}function Xh(i,e,t,n,s){const r=Ls(i,6,34),o=i(),a=o<.18?"hostile":o<.72?"wary":"friendly";return{id:`v${n},${s}`,x:e,y:t,name:ra(i,mM)+ra(i,gM),population:r,disposition:a,standing:a==="friendly"?25:a==="hostile"?-45:0,materialised:!1,wealth:Ls(i,20,220),warriors:Math.max(2,Math.floor(r*di(i,.18,.4)))}}function vM(i,e,t,n,s){const r=[],o=Math.floor((e-n)/ui),a=Math.floor((e+n)/ui),l=Math.floor((t-n)/ui),c=Math.floor((t+n)/ui);for(let u=l;u<=c;u++)for(let d=o;d<=a;d++){const h=`${d},${u}`;let f=s.get(h);f===void 0&&(f=_M(i,d,u),s.set(h,f)),f&&Math.hypot(f.x-e,f.y-t)<=n&&r.push(f)}return r}function MM(i,e){if(e.materialised)return[];e.materialised=!0;const t=sn(to(Math.round(e.x),Math.round(e.y),i.seed^48879)),n=[],s=Math.max(2,Math.round(e.population/4));for(let r=0;r<s;r++){const o=r/s*Math.PI*2+t()*.6,a=di(t,5,6+s*1.6),l=Math.round(e.x+Math.cos(o)*a),c=Math.round(e.y+Math.sin(o)*a);Ji(i.peekBiome(l,c))||yM(i,l,c,t)}if(i.canPlaceFixture("campfire",Math.round(e.x),Math.round(e.y))){const r=i.placeFixtureSite("campfire",Math.round(e.x),Math.round(e.y));r.progress=1,r.hp=r.maxHp}for(let r=0;r<e.population;r++){const o=t()*Math.PI*2,a=di(t,1,10),l=r<e.warriors,c=Kr(ra(t,xM),"natives",e.x+Math.cos(o)*a,e.y+Math.sin(o)*a,{maxHp:l?120:90,hp:l?120:90,speed:l?3.2:2.9});l?(c.inventory.set("spear",1),c.equipped="spear"):c.inventory.set("seax",1),n.push(c)}return n}function yM(i,e,t,n){const s=Ls(n,3,4),r=Ls(n,3,4),o=i.elevationAt(e,t),a=Je.log.thickness,l=Je.post.length,c=Math.max(3,Math.round(.65/a)),u=[[e-s/2,t-r/2],[e+s/2,t-r/2],[e-s/2,t+r/2],[e+s/2,t+r/2]];for(const[g,p]of u)i.pieces.add(xn("post",g,p,o,0,!0));const d=o+l;for(let g=0;g<c;g++){const p=o+g*a;i.pieces.add(xn("log",e,t-r/2,p,0,!1)),i.pieces.add(xn("log",e-s/2,t,p,Math.PI/2,!1)),i.pieces.add(xn("log",e+s/2,t,p,Math.PI/2,!1)),g>0&&i.pieces.add(xn("log",e,t+r/2,p,0,!1))}const h=Math.max(d,o+c*a);i.pieces.add(xn("beam",e,t,h,0,!1));const f=Je.thatchBundle,m=Math.ceil(s/f.length)+1,_=Math.ceil(r/f.width)+1;for(let g=0;g<_;g++)for(let p=0;p<m;p++)i.pieces.add(xn("thatchBundle",e-s/2+(p+.5)*f.length,t-r/2+(g+.5)*f.width,h+Je.beam.thickness,0,!1))}const na={wary:"Wary",friendly:"Friendly",hostile:"Hostile"},$h=.8,SM=.5;function Qr(i,e,t,n){return{x0:i,x1:i+1,y0:e,y1:e+1,z0:t,z1:n}}function As(i,e,t){const n=i.elevationAt(e,t),s=i.pieces.query(Qr(e,t,n+.01,n+SM));if(s.length===0)return!1;let r=0;const o=Qr(e,t,-50,50);for(const a of s){const l=Mn(a),c=Math.min(l.x1,o.x1)-Math.max(l.x0,o.x0),u=Math.min(l.y1,o.y1)-Math.max(l.y0,o.y0);c>0&&u>0&&(r+=c*u)}return r>.4}function il(i,e,t){const n=i.elevationAt(e,t),s=i.pieces.query(Qr(e,t,n+$h,n+$h+2.5));let r=0,o=!1;const a=Qr(e,t,-50,50);for(const h of s){const f=Mn(h),m=Math.min(f.x1,a.x1)-Math.max(f.x0,a.x0),_=Math.min(f.y1,a.y1)-Math.max(f.y0,a.y0);m>0&&_>0&&(r+=m*_,Je[h.kind].roofing&&(o=!0))}r=Math.min(1,r);let l=0;As(i,e+1,t)&&l++,As(i,e-1,t)&&l++,As(i,e,t+1)&&l++,As(i,e,t-1)&&l++;const c=r>.5,u=c&&l>=3;let d=r*.55+l/4*.35;return o&&(d+=.1),{roofed:c,cover:r,walls:l,enclosed:u,quality:Math.min(1,d),weathertight:o}}function bM(i,e,t,n=400){if(!il(i,e,t).roofed)return{tiles:0,quality:0,enclosed:!1};const r=new Set,o=[[e,t]];let a=0,l=0,c=!1;for(;o.length&&a<n;){const[u,d]=o.shift(),h=`${u},${d}`;if(r.has(h))continue;r.add(h);const f=il(i,u,d);if(!f.roofed){c=!0;continue}a++,l+=f.quality;for(const[m,_]of[[1,0],[-1,0],[0,1],[0,-1]])As(i,u+m,d+_)||o.push([u+m,d+_])}return{tiles:a,quality:a>0?l/a:0,enclosed:!c&&a>0}}const EM=["Wulfhere","Eadgar","Beorn","Hild","Cynric","Aelfwyn","Oswine","Godric","Leofa","Saewine","Merewald","Eanswith","Aethelred","Osric","Wynflaed","Beorhtric","Cuthbert","Eadgyth","Frithuwald","Hereric","Ceolwulf","Sigeberht","Aelfgifu","Deormund","Osgar","Wihtred","Leofric","Burghild","Egbert","Sunngifu","Aldhelm","Beornwulf","Coenred","Dunstan","Eadwig","Godgifu","Heahmund","Osthryth","Raedwald","Selwyn","Theodric","Wilfrun"],wM=10,TM=20260720,ri=ts*1.03,AM=150,qh="scroll to zoom · drag to pan · click to copy",Yh={x:2435,y:10077},kl=6,zs=450;function RM(i){const e=(Math.log(zs)-Math.log(i))/(Math.log(zs)-Math.log(kl));return Math.round(Math.max(0,Math.min(1,e))*100)}function Kh(i){const e=Math.max(0,Math.min(1,i/100));return Math.exp(Math.log(zs)-e*(Math.log(zs)-Math.log(kl)))}const Zh=[[26,54,88],[47,107,140],[206,189,142],[86,98,66],[110,138,72],[124,152,78],[74,104,56],[62,88,58],[116,106,74],[124,122,116],[226,230,236]],Ir="settlement.save",Jh=2,CM=i=>({...i,inventory:[...i.inventory]}),PM=i=>({...i,inventory:new Map(i.inventory)}),LM=24,ia=5,Qh=5.5,jh=8,jr=Math.PI/12,IM=Math.PI/36,DM=Math.PI/2-.001,sa=i=>Math.max(IM,Math.min(DM,Cs+Math.round((i-Cs)/jr)*jr)),eu=Math.PI/2,NM=i=>Math.round(i/(Math.PI/2))*(Math.PI/2);function tu(i,e){const t=e.x-i.x,n=e.y-i.y,s=Math.max(1,Math.round(Math.hypot(t,n)/Ps)),r=[],o=new Set;for(let a=0;a<=s;a++){const l=as(i.x+t*a/s),c=as(i.y+n*a/s),u=`${l},${c}`;o.has(u)||(o.add(u),r.push({x:l,y:c}))}return r}class UM{constructor(e,t){G(this,"world");G(this,"renderer");G(this,"input");G(this,"hud");G(this,"board",new nM);G(this,"camera",{x:0,y:0,yaw:Jo,pitch:Cs,zoom:Kh(30)});G(this,"introZoomTarget",Kh(93));G(this,"cursor",{x:0,y:0,z:0});G(this,"hoveredNodeId",null);G(this,"hoveredPiece",null);G(this,"player");G(this,"actors",[]);G(this,"ai",new Map);G(this,"villageCache",new Map);G(this,"knownVillages",[]);G(this,"selection",{mode:"piece",kind:"log"});G(this,"carryLift",0);G(this,"combatEvents",[]);G(this,"floaters",[]);G(this,"time",9);G(this,"day",1);G(this,"lastFrame",performance.now());G(this,"activeNode",null);G(this,"rosterOpen",!1);G(this,"craftOpen",!1);G(this,"mapOpen",!1);G(this,"mapView",{cx:0,cy:0,span:ri});G(this,"mapRegion",null);G(this,"mapRegionKey","");G(this,"mapDrag",null);G(this,"lastGoodPlayer",{x:0,y:0});G(this,"playerDeathShown",!1);G(this,"hungerHintShown",!1);G(this,"wallMode",!1);G(this,"wallDragStart",null);G(this,"wallPreview",[]);G(this,"wasLeftDown",!1);G(this,"pileMode",!1);G(this,"activePileSlot",1);G(this,"targetYaw",Jo);G(this,"targetPitch",Cs);G(this,"snapPoints",[]);G(this,"snapBase",null);G(this,"activeSnap",null);G(this,"snapTurns",0);G(this,"frameDt",1/60);G(this,"shelterTimer",0);G(this,"needsTimer",0);G(this,"wildlifeTimer",0);G(this,"autosaveTimer",40);G(this,"cachedRoom",{tiles:0,quality:0,enclosed:!1});G(this,"started",!1);G(this,"frameErrors",0);const n=TM;this.world=new tf(n),this.renderer=new iv(e),this.input=new rv(e),this.hud=new ov(t),this.hud.onSelect=h=>this.selection=h,this.hud.onSelectTool=h=>{(this.player.inventory.get(h)??0)>0&&(this.player.equipped=h)},this.hud.onOrder=(h,f)=>{const m=this.actors.find(_=>_.id===h);m&&this.setOrder(m,f)},this.hud.onOrderAll=h=>{const f=this.crew();for(const m of f)this.setOrder(m,h,!0);this.hud.log(`The whole crew is ${Ar[h]}.`)},this.hud.onLocate=h=>{const f=this.actors.find(m=>m.id===h);f&&(this.camera.x=f.x,this.camera.y=f.y,this.hud.log(`Looking at ${f.name}.`))},this.hud.onAssignPile=(h,f,m)=>{const _=this.actors.find(p=>p.id===h);if(!_)return;f==="drop"?_.dropPile=m:f==="source"?_.sourcePile=m:_.destPile=m;const g=f==="drop"?"stacks at":f==="source"?"takes from":"carries to";this.hud.log(`${_.name} ${g} pile ${m}.`)},this.hud.onPickPileSlot=h=>{this.activePileSlot=h},this.hud.onRemovePile=h=>{this.board.removePile(h),this.hud.log(`Pile ${h} removed.`)},this.hud.onCraft=h=>this.craftRecipe(h);const s=this.hud.mapCanvas,r=h=>{const f=s.getBoundingClientRect(),m=(h.clientX-f.left)/f.width,_=(h.clientY-f.top)/f.height;return{fx:m,fy:_,inside:m>=0&&m<=1&&_>=0&&_<=1}},o=(h,f)=>this.hud.setMapCoords(`x ${Math.round(h).toLocaleString()}   ·   y ${Math.round(f).toLocaleString()}`);s.addEventListener("mousemove",h=>{if(this.mapDrag)return;const{fx:f,fy:m}=r(h),_=this.mapFromCanvas(f,m);o(_.x,_.y)}),s.addEventListener("mouseleave",()=>{this.mapDrag||this.hud.setMapCoords(qh)}),s.addEventListener("wheel",h=>{h.preventDefault();const{fx:f,fy:m}=r(h),_=this.mapFromCanvas(f,m);this.mapView.span*=h.deltaY>0?1.18:1/1.18,this.clampMapView(),this.mapView.cx=_.x-(2*f-1)*this.mapView.span,this.mapView.cy=_.y-(2*m-1)*this.mapView.span,this.clampMapView()},{passive:!1}),s.addEventListener("mousedown",h=>{this.mapDrag={sx:h.clientX,sy:h.clientY,moved:0,cx:this.mapView.cx,cy:this.mapView.cy}}),window.addEventListener("mousemove",h=>{const f=this.mapDrag;if(!f)return;const m=s.getBoundingClientRect(),_=h.clientX-f.sx,g=h.clientY-f.sy;f.moved=Math.max(f.moved,Math.hypot(_,g));const p=2*this.mapView.span/m.width;this.mapView.cx=f.cx-_*p,this.mapView.cy=f.cy-g*p,this.clampMapView()}),window.addEventListener("mouseup",h=>{var M;const f=this.mapDrag;if(!f||(this.mapDrag=null,f.moved>=5))return;const{fx:m,fy:_,inside:g}=r(h);if(!g)return;const p=this.mapFromCanvas(m,_),y=`${Math.round(p.x)}, ${Math.round(p.y)}`,b=()=>this.hud.setMapCoords(`✓ copied  ${y}`);try{const T=(M=navigator.clipboard)==null?void 0:M.writeText(y);T?T.then(b,()=>o(p.x,p.y)):o(p.x,p.y)}catch{o(p.x,p.y)}});const a=sn(n^4149),l=this.world.findSpawnNear(Yh.x,Yh.y);this.player=Kr("You","settlers",l.x,l.y,{isPlayer:!0,speed:3.6}),this.player.inventory.set("flintAxe",1),this.player.inventory.set("seax",1),this.player.inventory.set("berries",6),this.player.equipped="flintAxe",this.actors.push(this.player);const c=[...EM];for(let h=c.length-1;h>0;h--){const f=Math.floor(Math.random()*(h+1));[c[h],c[f]]=[c[f],c[h]]}for(let h=0;h<10;h++){const f=Kr(c[h%c.length],"settlers",l.x+(a()-.5)*8,l.y+(a()-.5)*8);f.inventory.set("berries",3),h<4&&f.inventory.set("flintAxe",1),(h===4||h===5)&&f.inventory.set("spear",1),this.actors.push(f),this.ai.set(f.id,ea(this.player.id))}this.lastGoodPlayer={x:l.x,y:l.y},this.board.setPile(1,l.x,l.y),this.board.foodPile={x:l.x+3,y:l.y+3},this.camera.x=l.x,this.camera.y=l.y,this.renderer.resize(),window.addEventListener("resize",()=>this.renderer.resize()),this.hud.log("You drag the boat above the tideline.");for(let h=0;h<3;h++)Hh(this.actors,this.world,l.x,l.y);const u=l.x+6,d=l.y+1;this.renderer.placeBoat(u,d,this.world.elevationAt(u,d),.5)}begin(){var e,t;this.started||(this.started=!0,(e=document.getElementById("mainMenu"))==null||e.remove(),(t=document.getElementById("hud"))==null||t.style.removeProperty("visibility"),requestAnimationFrame(()=>this.frame()))}get cursorWorld(){return this.cursor}floater(e,t,n,s="#e8e2d4"){this.floaters.push({x:e,y:t,text:n,life:1.4,colour:s})}updatePicking(){const e=this.renderer.pickGround(this.input.mouseX,this.input.mouseY,this.world);e&&(this.cursor=e);const t=Ue(this.player.x,this.player.y,this.cursor.x,this.cursor.y)>80,n=t?null:this.renderer.pickResource(this.cursor,this.world);this.hoveredNodeId=(n==null?void 0:n.id)??null,this.hoveredPiece=this.player.carrying||t?null:this.renderer.pickPiece(this.input.mouseX,this.input.mouseY,this.world,this.player),this.updateSnapTarget()}nearestLiftablePiece(e){const t=this.world.pieces.queryRadius(this.player.x,this.player.y,e);if(!t.length)return null;let n=null,s=1/0;for(const r of t){const o=td(this.world.pieces,r).length,l=Ue(this.player.x,this.player.y,r.x,r.y)+o*6;l<s&&(s=l,n=r)}return n}updateSnapTarget(){const e=this.player.carrying;if(!e){this.snapPoints=[],this.activeSnap=null;return}const t=this.renderer.pickPiece(this.input.mouseX,this.input.mouseY,this.world,this.cursor);this.snapPoints=id(this.world.pieces,this.cursor.x,this.cursor.y,5).filter(r=>nd(r,e.upright)).filter(r=>r.kind!=="top"||(t==null?void 0:t.id)===r.host.id);let n=null,s=LM;for(const r of this.snapPoints){const o=this.renderer.worldToScreen(r.x,r.y,r.z);if(!o.visible)continue;const a=Math.hypot(o.x-this.input.mouseX,o.y-this.input.mouseY);a<s&&(s=a,n=r)}this.snapBase=n,this.activeSnap=n}plannedPlacement(){const e=this.player;if(!e.carrying)return null;let t,n,s,r;if(this.activeSnap){const a=sd(this.activeSnap,e.carrying.kind,e.carrying.yaw,e.carrying.upright,this.snapTurns);t=a.x,n=a.y,s=a.yaw,r=this.activeSnap.kind==="bottom"?this.world.elevationAt(a.x,a.y):a.z}else{const a=Ov(this.world.pieces,e.carrying.kind,this.cursor.x,this.cursor.y,e.carrying.yaw,e.carrying.upright);t=a.x,n=a.y,s=a.yaw,r=this.world.elevationAt(t,n)+this.carryLift}const o=ls(this.world,this.world.pieces,e.carrying.kind,t,n,s,e.carrying.upright,r);return{x:t,y:n,yaw:s,result:o}}get hoveredNode(){if(this.hoveredNodeId!=null)return this.world.findResource(this.hoveredNodeId,this.player.x,this.player.y)}update(e){this.updateTime(e),this.autosaveTimer-=e,this.autosaveTimer<=0&&(this.autosaveTimer=40,this.saveGame(!0)),this.updatePicking(),this.updatePlayer(e),this.updateCamera(e),this.updateVillages();for(const t of this.actors){if(t===this.player||!mt(t))continue;const n=this.ai.get(t.id);n&&Hv(t,n,this.world,this.board,this.actors,e)}cM(this.actors,this.world,e),this.wildlifeTimer-=e,this.wildlifeTimer<=0&&(this.wildlifeTimer=1.5,Hh(this.actors,this.world,this.player.x,this.player.y),lM(this.actors,this.player.x,this.player.y)),fM(this.actors),uM(this.actors,e,this.combatEvents);for(const t of this.combatEvents)this.floater(t.x,t.y,t.text,t.kind==="death"?"#e0bd52":t.kind==="miss"?"#8b8578":"#d4694a"),t.kind==="death"&&this.hud.log(t.text);if(this.combatEvents.length=0,this.updateNeeds(e),this.world.tickRegrow(e),!mt(this.player)&&!this.playerDeathShown){this.playerDeathShown=!0;const t=this.player.hunger<=0?"starved":this.player.warmth<18?"frozen":"fallen";this.hud.showBanner("You have "+t,"Your people carry on without you.",999999),this.hud.log("You have died.")}for(const t of this.actors)t.actionTimer>0&&(t.actionTimer-=e);for(const t of this.actors)mt(t)||(this.board.releaseAllFor(t.id),Bh(t.id));this.actors=this.actors.filter(t=>mt(t)||t===this.player);for(const t of this.floaters)t.life-=e;this.floaters=this.floaters.filter(t=>t.life>0),this.world.evictFarChunks(Math.floor(this.camera.x),Math.floor(this.camera.y),this.renderer.viewChunksFor(this.camera)+2)}updateTime(e){this.time+=e/wM,this.time>=24&&(this.time-=24,this.day++,this.hud.log(`Day ${this.day} breaks.`))}updateNeeds(e){if(this.needsTimer+=e,this.needsTimer<.5)return;const t=this.needsTimer;this.needsTimer=0;const n=this.time<6||this.time>20;for(const s of this.actors){if(!mt(s))continue;if(s.hunger=Math.max(0,s.hunger-t*.22),s.hunger<35){let l=null,c=0;for(const u of s.inventory.keys()){const d=pt[u].nutrition??0;d>c&&(c=d,l=u)}if(l)Fs(s,l,1),s.hunger=Math.min(100,s.hunger+(pt[l].nutrition??0)),s.isPlayer&&this.floater(s.x,s.y,`ate ${pt[l].name.toLowerCase()}`,"#9ac36a");else{const u=this.world.takeFromLarder(this.board.foodPile);u&&(s.hunger=Math.min(100,s.hunger+(pt[u].nutrition??0)),s.isPlayer&&this.floater(s.x,s.y,`ate ${pt[u].name.toLowerCase()} from the larder`,"#9ac36a"))}}s.hunger<=0&&(s.stamina=Math.max(0,s.stamina-t*2),s.morale=Math.max(0,s.morale-t*2)),s.isPlayer&&s.hunger<30&&!this.hungerHintShown&&([...s.inventory.keys()].some(c=>(pt[c].nutrition??0)>0)||(this.hungerHintShown=!0,this.hud.log("Hungry. Left-click a berry bush to gather food — you eat it automatically.")));const r=il(this.world,Math.floor(s.x),Math.floor(s.y)),o=this.world.nearestFixture(s.x,s.y,"campfire",6)!==void 0,a=n?r.quality>.4||o?62:22:72+r.quality*18;s.warmth+=(a-s.warmth)*t*.22,s.warmth<18&&(s.stamina=Math.max(0,s.stamina-t*1.5),s.morale=Math.max(0,s.morale-t*1.5)),s.stance===xe.Idle&&(s.stamina=Math.min(100,s.stamina+t*3))}}updatePlayer(e){const t=this.player;if(!mt(t))return;Number.isFinite(t.x)&&Number.isFinite(t.y)?(this.lastGoodPlayer.x=t.x,this.lastGoodPlayer.y=t.y):(t.x=this.lastGoodPlayer.x,t.y=this.lastGoodPlayer.y);const n=this.input.moveVector();if(n.x!==0||n.y!==0){const s=Math.cos(this.camera.yaw),r=Math.sin(this.camera.yaw),o=-n.y*s-n.x*-r,a=-n.y*r-n.x*s,l=Math.hypot(o,a)||1,c=this.world.speedMultiplier(Math.floor(t.x),Math.floor(t.y)),u=this.input.isDown("shift")&&t.stamina>2,d=qu(t,c)*(u?1.6:1),h=t.x+o/l*d*e,f=t.y+a/l*d*e;Number.isFinite(h)&&this.world.canStand(h,t.y)&&(t.x=h),Number.isFinite(f)&&this.world.canStand(t.x,f)&&(t.y=f),t.facing=Math.atan2(a,o),t.stance=xe.Moving,t.stamina=Math.max(0,t.stamina-e*(u?7:.5))}else t.stance===xe.Moving&&(t.stance=xe.Idle);this.handleHotkeys(),this.wallMode?this.updateWallTool():this.pileMode?this.updatePileTool():(this.handleCarry(e),this.handleClicks(e))}updatePileTool(){const e=this.input;for(let t=1;t<=zr;t++)e.pressed(String(t))&&(this.activePileSlot=t);if(e.leftClicked||e.rightClicked){const t=Math.round(this.cursor.x),n=Math.round(this.cursor.y),s=!this.board.pileById(this.activePileSlot),r=this.board.stockpiles.length;this.board.setPile(this.activePileSlot,t,n),this.hud.log(`Pile ${this.activePileSlot} placed.`),s&&r===1&&this.hud.log("Now open the roster (M) to choose which pile each worker uses.")}this.wasLeftDown=e.leftDown}updateWallTool(){const e=this.input,t={x:as(this.cursor.x),y:as(this.cursor.y)};if(e.leftClicked&&(this.wallDragStart=t),this.wallPreview=this.wallDragStart&&e.leftDown?tu(this.wallDragStart,t):[],this.wasLeftDown&&!e.leftDown&&this.wallDragStart){const n=tu(this.wallDragStart,t);this.board.addWallLine(n),this.wallDragStart=null,this.wallPreview=[],this.hud.log(`Wall outlined — ${this.board.wallCells.length} posts planned. Set a crew to build.`)}if(e.rightClicked&&!this.tryPickUp(!0)){const s=this.renderer.pickWallCell(e.mouseX,e.mouseY,this.wallGhostCells())??t,r=this.board.removeWallLineAt(s.x,s.y,Ps*.7);r&&this.hud.log(`Removed a wall line (${r} post${r>1?"s":""}).`)}this.wasLeftDown=e.leftDown}equipTool(e){const t=e.find(n=>(this.player.inventory.get(n)??0)>0);t&&(this.player.equipped=t)}handleHotkeys(){const e=this.input;if(this.pileMode||(Yu.forEach((t,n)=>{e.pressed(String(n+1))&&this.equipTool(t.options)}),Qa.forEach((t,n)=>{e.pressed(String(n+5))&&(this.selection={mode:"fixture",kind:t})})),e.pressed("h")&&this.hud.toggleHelp(),e.pressed("m")&&(this.rosterOpen=!this.rosterOpen),e.pressed("n")&&(this.mapOpen=!this.mapOpen,this.hud.setMapVisible(this.mapOpen),this.mapOpen&&(this.mapView={cx:0,cy:0,span:ri},this.mapRegion=null,this.mapRegionKey="",this.hud.setMapCoords(qh),this.drawMap())),e.pressed("k")&&(this.wallMode=!this.wallMode,this.wallDragStart=null,this.wallPreview=[],this.hud.log(this.wallMode?"Wall tool: left-drag to draw a line, right-click a line to delete it, K to finish.":"Wall tool off.")),e.pressed("p")&&(this.pileMode=!this.pileMode,this.pileMode&&this.wallMode&&(this.wallMode=!1),this.hud.log(this.pileMode?`Stockpile tool: press 1-${zr} to pick a pile, click the ground (either button) to place it. P to finish.`:"Stockpile tool off.")),e.pressed("g")&&(this.board.setPile(1,Math.floor(this.player.x),Math.floor(this.player.y)),this.hud.log("Pile 1 set. Haulers stack timber here by default.")),e.pressed("t")&&(this.board.foodPile={x:Math.floor(this.player.x),y:Math.floor(this.player.y)},this.hud.log("Larder set. Foragers will bring food here.")),e.pressed("c")&&(this.craftOpen=!this.craftOpen),e.pressed("o")&&this.saveGame(),e.pressed("l")&&this.loadGame(),this.player.carrying){const t=this.player.carrying,n=this.frameDt,s=this.snapBase!==null&&this.snapBase.kind!=="top";e.pressed("q")&&(s?this.snapTurns-=1:t.yaw-=Lh),e.pressed("e")&&(s?this.snapTurns+=1:t.yaw+=Lh),e.pressed("f")&&(t.upright=!t.upright,this.hud.log(t.upright?"Stood on end.":"Laid flat.")),e.isDown("v")&&(this.carryLift+=.5*n),e.isDown("b")&&(this.carryLift=Math.max(0,this.carryLift-.5*n))}e.wheelDelta!==0&&(this.introZoomTarget=null,this.camera.zoom=Math.max(kl,Math.min(zs,this.camera.zoom*(1+e.wheelDelta*.0012)))),e.pressed("arrowleft")&&(this.targetYaw-=eu),e.pressed("arrowright")&&(this.targetYaw+=eu),e.pressed("arrowup")&&(this.targetPitch=sa(this.targetPitch+jr)),e.pressed("arrowdown")&&(this.targetPitch=sa(this.targetPitch-jr)),e.middleDown&&e.dragY!==0&&(this.targetPitch=sa(this.targetPitch+e.dragY*.004)),e.pressed("/")&&(this.targetYaw=Jo,this.targetPitch=Cs,this.hud.log("View reset."))}handleCarry(e){var s;if(!this.input.pressed("e"))return;const n=this.player;if(!n.carrying&&!this.tryPickUp(!1)&&((s=this.selection)==null?void 0:s.mode)==="piece"){const r=Je[this.selection.kind];r.fromItem&&Ai(n,r.fromItem)>0?(Fs(n,r.fromItem,1),n.carrying={kind:this.selection.kind,yaw:0,upright:!1,lift:0},this.carryLift=0):this.hud.log(`No ${r.fromItem?pt[r.fromItem].name.toLowerCase():"material"} to hand.`)}}tryPickUp(e){const t=this.player;if(t.carrying)return!1;const n=Qh,s=this.world.resourcesNear(this.cursor.x,this.cursor.y,1.4).find(a=>a.kind===Ye.Boulder&&Ue(t.x,t.y,a.x,a.y)<n);if(s)return this.world.removeResource(s),t.carrying={kind:"boulder",yaw:0,upright:!1,lift:0},this.carryLift=0,this.hud.log("You heave the boulder up. Heavy going."),!0;const r=this.hoveredPiece&&Ue(t.x,t.y,this.hoveredPiece.x,this.hoveredPiece.y)<n?this.hoveredPiece:null,o=e?r:r??this.nearestLiftablePiece(n);if(o){const a=Dv(this.world,this.world.pieces,o);if(t.carrying={kind:o.kind,yaw:NM(o.yaw),upright:o.upright,lift:0},this.carryLift=0,a.collapsed.length){this.hud.log(`${a.collapsed.length} piece(s) came down with it.`);for(const l of a.collapsed){const c=Je[l.kind].fromItem;c&&this.world.dropItems(l.x,l.y,c,1)}}return!0}return!1}handleClicks(e){var r,o;const t=this.input,n=this.player,s=this.cursorWorld;if(n.carrying)t.leftClicked&&this.tryPlaceCarried();else if(((r=this.selection)==null?void 0:r.mode)==="fixture"&&t.leftClicked)this.tryPlaceFixture(this.selection.kind,Math.floor(s.x),Math.floor(s.y));else if(t.leftClicked&&((o=this.hoveredNode)==null?void 0:o.kind)===Ye.Boulder&&Ue(n.x,n.y,this.hoveredNode.x,this.hoveredNode.y)<ia){const a=this.hoveredNode;Ju(this.world,a),n.stance=xe.Working,n.actionTimer=.3,n.facing=Math.atan2(a.y-n.y,a.x-n.x),this.hud.log("You knock the boulder square. A tidy block."),this.floater(a.x,a.y,"dressed","#c8c8c2")}else if(t.leftDown){const a=this.hoveredNode;if(a&&Ue(n.x,n.y,a.x,a.y)<ia){this.activeNode=a,n.stance=xe.Working,n.actionTimer=.3,n.facing=Math.atan2(a.y-n.y,a.x-n.x);const l=co(n,a,this.world,e);l.gained>0&&l.item&&this.floater(a.x,a.y,`+${l.gained} ${pt[l.item].name}`),l.depleted&&(Nl(a.kind)?(Ul(this.world,a.x,a.y,n.facing),this.hud.log(`${po[a.kind]} felled. The trunk lies where it fell.`),this.floater(a.x,a.y,"timber!","#e0bd52")):this.hud.log(`${po[a.kind]} exhausted.`),this.activeNode=null)}else{const l=this.actors.find(c=>c.faction!=="settlers"&&mt(c)&&Ue(c.x,c.y,s.x,s.y)<1.4);l&&Ue(n.x,n.y,l.x,l.y)<2.2&&(Zr(n,"fight"),n.stance=xe.Fighting,n.targetId=l.id)}}else this.activeNode&&(this.activeNode=null,n.stance===xe.Working&&(n.stance=xe.Idle));if(t.rightClicked&&!this.tryPickUp(!0)){const a=this.settlerUnderCursor();a?this.cycleOrder(a):this.setDeliveryPoint(Math.round(s.x),Math.round(s.y))}}settlerUnderCursor(){let e=null,t=42;for(const n of this.actors){if(n===this.player||n.faction!=="settlers"||!mt(n))continue;const s=this.renderer.worldToScreen(n.x,n.y,this.world.elevationAt(n.x,n.y)+.45);if(!s.visible)continue;const r=Math.hypot(s.x-this.input.mouseX,s.y-this.input.mouseY);r<t&&(t=r,e=n)}return e}cycleOrder(e){const t={follow:"chop",chop:"mine",mine:"build",build:"haul",haul:"forage",forage:"stopped",stopped:"follow"};this.setOrder(e,t[e.order])}setOrder(e,t,n=!1){if(e.order=t,e.order==="stopped"&&e.carrying){const s=ls(this.world,this.world.pieces,e.carrying.kind,e.x,e.y,e.carrying.yaw,e.carrying.upright);s.ok&&cs(this.world.pieces,e.carrying.kind,e.x,e.y,e.carrying.yaw,e.carrying.upright,s),e.carrying=null}n||this.hud.log(`${e.name} is ${Ar[e.order]}.`),(e.order==="haul"||e.order==="chop"||e.order==="mine")&&!this.board.dropPoint&&this.hud.log("Right-click open ground to set where they should stack it.")}crew(){return this.actors.filter(e=>e.faction==="settlers"&&!e.isPlayer&&mt(e))}mapFromCanvas(e,t){const{cx:n,cy:s,span:r}=this.mapView;return{x:n+(2*e-1)*r,y:s+(2*t-1)*r}}clampMapView(){this.mapView.span=Math.max(AM,Math.min(ri,this.mapView.span)),this.mapView.cx=Math.max(-ri,Math.min(ri,this.mapView.cx)),this.mapView.cy=Math.max(-ri,Math.min(ri,this.mapView.cy))}buildMapRegion(){const t=document.createElement("canvas");t.width=320,t.height=320;const n=t.getContext("2d"),s=n.createImageData(320,320),{cx:r,cy:o,span:a}=this.mapView;for(let l=0;l<320;l++){const c=o-a+(l+.5)/320*2*a;for(let u=0;u<320;u++){const d=r-a+(u+.5)/320*2*a,h=this.world.peekBiome(Math.round(d),Math.round(c)),f=Zh[h]??Zh[Pe.Ocean],m=(l*320+u)*4;s.data[m]=f[0],s.data[m+1]=f[1],s.data[m+2]=f[2],s.data[m+3]=255}}return n.putImageData(s,0,0),t}drawMap(){const{cx:e,cy:t,span:n}=this.mapView,s=`${Math.round(e)},${Math.round(t)},${Math.round(n)}`;(!this.mapRegion||s!==this.mapRegionKey)&&(this.mapRegion=this.buildMapRegion(),this.mapRegionKey=s);const r=this.hud.mapCanvas,o=r.getContext("2d");if(!o)return;const a=r.width,l=r.height,c=(f,m)=>({x:(f-(e-n))/(2*n)*a,y:(m-(t-n))/(2*n)*l});o.imageSmoothingEnabled=n>ri*.35,o.clearRect(0,0,a,l),o.drawImage(this.mapRegion,0,0,a,l);const u=(f,m,_,g,p="#0d1620")=>{const y=c(f,m);o.beginPath(),o.arc(y.x,y.y,_,0,Math.PI*2),o.fillStyle=g,o.fill(),o.lineWidth=1.5,o.strokeStyle=p,o.stroke()};for(const f of this.knownVillages){const m=f.disposition==="friendly"?"#7fbf4f":f.disposition==="hostile"?"#c0503f":"#d9a441";u(f.x,f.y,4,m)}const d=this.board.pileById(1);d&&u(d.x,d.y,4.5,"#e0bd52");const h=c(this.player.x,this.player.y);o.beginPath(),o.arc(h.x,h.y,9,0,Math.PI*2),o.fillStyle="rgba(223,227,234,0.25)",o.fill(),u(this.player.x,this.player.y,4.5,"#dfe3ea"),o.fillStyle="rgba(244,236,216,0.8)",o.font="600 14px system-ui, sans-serif",o.textAlign="center",o.fillText("N",a/2,16)}hasSave(){try{return localStorage.getItem(Ir)!==null}catch{return!1}}deleteSave(){try{localStorage.removeItem(Ir)}catch{}}saveGame(e=!1){const t={version:Jh,seed:this.world.seed,day:this.day,time:this.time,camera:{...this.camera,targetYaw:this.targetYaw,targetPitch:this.targetPitch},world:this.world.exportState(),board:this.board.exportState(),actors:this.actors.map(CM),playerId:this.player.id,actorId:$_(),villages:this.knownVillages,flags:{playerDeathShown:this.playerDeathShown,hungerHintShown:this.hungerHintShown}};try{localStorage.setItem(Ir,JSON.stringify(t)),this.hud.log(e?"Autosaved.":`Game saved — day ${this.day}, ${String(Math.floor(this.time)).padStart(2,"0")}:00.`)}catch(n){this.hud.log("Could not save the game."),console.error("[save]",n)}}loadGame(){let e;try{e=localStorage.getItem(Ir)}catch{e=null}if(!e){this.hud.log("No saved game to load.");return}let t;try{t=JSON.parse(e)}catch{this.hud.log("The saved game is corrupt.");return}if(t.version!==Jh||t.seed!==this.world.seed){this.hud.log("That save is from a different version and cannot be loaded.");return}this.world.importState(t.world),this.board.importState(t.board),this.actors=t.actors.map(PM),this.player=this.actors.find(n=>n.id===t.playerId)??this.actors[0],this.ai.clear();for(const n of this.actors)Bh(n.id),n.isPlayer||this.ai.set(n.id,ea(this.player.id));q_(t.actorId),this.day=t.day,this.time=t.time,this.camera.x=t.camera.x,this.camera.y=t.camera.y,this.camera.yaw=t.camera.yaw,this.camera.pitch=t.camera.pitch,this.camera.zoom=t.camera.zoom,this.targetYaw=t.camera.targetYaw,this.targetPitch=t.camera.targetPitch,this.knownVillages=t.villages??[],this.villageCache.clear(),this.playerDeathShown=t.flags.playerDeathShown,this.hungerHintShown=t.flags.hungerHintShown,this.lastGoodPlayer={x:this.player.x,y:this.player.y},this.activeNode=null,this.hoveredPiece=null,this.hoveredNodeId=null,this.wallDragStart=null,this.wallPreview=[],this.hud.log(`Game loaded — day ${this.day}, ${String(Math.floor(this.time)).padStart(2,"0")}:00.`)}wallGhostCells(){const e=[...this.board.wallCells,...this.wallPreview],t=[],n=new Set;for(const s of e){const r=`${s.x},${s.y}`;n.has(r)||(n.add(r),!Qu(this.world.pieces,s)&&t.push({x:s.x,y:s.y,z:this.world.elevationAt(s.x,s.y)}))}return t}setDeliveryPoint(e,t){this.board.dropPoint={x:e,y:t};const n=this.actors.filter(s=>s.order==="haul").length;this.hud.log(n>0?`Timber will be stacked here. ${n} hauling.`:"Timber will be stacked here. Right-click a settler to set them hauling.")}tryPlaceCarried(){const e=this.player;if(!e.carrying)return;const t=this.plannedPlacement();if(t){if(!t.result.ok){this.hud.log(t.result.reason??"It will not sit there.");return}if(Ue(e.x,e.y,t.x,t.y)>jh){this.hud.log("Too far to reach.");return}cs(this.world.pieces,e.carrying.kind,t.x,t.y,t.yaw,e.carrying.upright,t.result),e.carrying=null,this.carryLift=0,this.activeSnap=null,this.snapBase=null,this.snapTurns=0,e.stamina=Math.max(0,e.stamina-1.5)}}tryPlaceFixture(e,t,n){const s=yn[e];if(!this.world.canPlaceFixture(e,t,n)){this.hud.log("The ground will not take it.");return}const r=s.cost.filter(a=>Gr(this.world,this.player,a.item)<a.count);if(r.length){this.hud.log(`Need ${r.map(a=>`${a.count} ${pt[a.item].name.toLowerCase()}`).join(", ")} — stand near your stores.`);return}for(const a of s.cost)dd(this.world,this.player,a.item,a.count);const o=this.world.placeFixtureSite(e,t,n);o.progress=1,o.hp=o.maxHp,this.hud.log(`${s.name} raised.`)}craftRecipe(e){const t=Os.find(s=>s.id===e);if(!t)return;const n=nl(this.world,this.player,t);if(n.needsStation&&t.station){this.hud.log(`Need a ${yn[t.station].name.toLowerCase()} nearby.`);return}if(!n.hasMaterials){this.hud.log("Not enough materials to hand.");return}pM(this.world,this.player,t)&&this.hud.log(`Crafted ${t.out.count} ${pt[t.out.item].name.toLowerCase()}.`)}updateCrafting(){if(!this.craftOpen){this.hud.setCrafting(!1,[]);return}const e=Os.map(t=>{const n=nl(this.world,this.player,t);return{id:t.id,inputs:t.in.map(s=>({item:s.item,have:Gr(this.world,this.player,s.item),need:s.count})),stationNear:t.station?!n.needsStation:void 0,craftable:n.ok}});this.hud.setCrafting(!0,e)}updateCamera(e){this.camera.x+=(this.player.x-this.camera.x)*Math.min(1,e*6),this.camera.y+=(this.player.y-this.camera.y)*Math.min(1,e*6),this.camera.yaw+=(this.targetYaw-this.camera.yaw)*Math.min(1,e*9),this.camera.pitch+=(this.targetPitch-this.camera.pitch)*Math.min(1,e*9),this.introZoomTarget!==null&&(this.camera.zoom+=(this.introZoomTarget-this.camera.zoom)*Math.min(1,e*1.1),Math.abs(this.camera.zoom-this.introZoomTarget)<.15&&(this.camera.zoom=this.introZoomTarget,this.introZoomTarget=null))}updateVillages(){const e=vM(this.world,this.player.x,this.player.y,260,this.villageCache);for(const t of e){if(t.materialised||Ue(this.player.x,this.player.y,t.x,t.y)>90)continue;const n=MM(this.world,t);for(const s of n)this.actors.push(s),this.ai.set(s.id,ea(null));this.knownVillages.push(t),this.hud.showBanner(t.name,`${na[t.disposition]} · ${t.population} souls`,4200),this.hud.log(`You come upon ${t.name}. They look ${na[t.disposition].toLowerCase()}.`)}}draw(e){var l;const t=this.cursorWorld,n=this.player,s=this.plannedPlacement(),r=s?{kind:n.carrying.kind,x:s.x,y:s.y,z:s.result.z,yaw:s.yaw,upright:n.carrying.upright,ok:s.result.ok&&Ue(n.x,n.y,s.x,s.y)<=jh}:void 0;this.renderer.render(this.world,this.camera,this.actors,{ghost:r,snapPoints:n.carrying?this.snapPoints:void 0,activeSnap:this.activeSnap,stockpiles:this.board.stockpiles,activePileId:this.pileMode?this.activePileSlot:null,foodPile:this.board.foodPile,wallCells:this.wallGhostCells(),hoveredPiece:this.hoveredPiece,hoveredResourceId:this.hoveredNodeId,timeOfDay:this.time/24,dt:e}),this.drawFloaters(),this.drawPileLabels(),this.updateCrafting(),this.mapOpen&&this.drawMap(),this.hud.setPileTool(this.pileMode,this.activePileSlot,this.board.stockpiles.map(c=>c.id),zr),this.updateTooltip(t,this.hoveredPiece),this.shelterTimer-=e,this.shelterTimer<=0&&(this.shelterTimer=.5,this.cachedRoom=bM(this.world,Math.floor(n.x),Math.floor(n.y)));const o=this.cachedRoom,a=this.knownVillages.map(c=>({name:c.name,distance:Ue(n.x,n.y,c.x,c.y),disposition:na[c.disposition]})).sort((c,u)=>c.distance-u.distance)[0];this.hud.setRoster(this.rosterOpen,this.crew().map(c=>({id:c.id,name:c.name,order:c.order,status:c.carrying?`carrying a ${Je[c.carrying.kind].name.toLowerCase()}`:Ar[c.order],distance:Ue(n.x,n.y,c.x,c.y),dropPile:c.dropPile,sourcePile:c.sourcePile,destPile:c.destPile})),this.board.stockpiles.map(c=>c.id),((l=this.board.defaultPile())==null?void 0:l.id)??null),this.hud.update(n,{day:this.day,hour:this.time,settlers:this.actors.filter(c=>c.faction==="settlers"&&mt(c)).length,hauling:this.actors.filter(c=>(c.order==="haul"||c.order==="chop"||c.order==="mine")&&mt(c)).length,pending:this.board.pending,pieces:this.world.pieces.count,larder:this.world.larderCount(this.board.foodPile),zoom:RM(this.camera.zoom),buildableFixtures:Object.fromEntries(Qa.map(c=>[c,yn[c].cost.every(u=>Gr(this.world,this.player,u.item)>=u.count)])),selection:this.selection,nearestVillage:a,shelter:o.tiles>0?`${o.enclosed?"enclosed":"partial"}, ${o.tiles} tiles`:void 0},e)}drawPileLabels(){const e=this.crew();this.hud.setPileLabels(this.board.stockpiles.map(t=>{var c;const n=this.renderer.worldToScreen(t.x,t.y,this.world.elevationAt(t.x,t.y)+1.4),s=(c=this.board.defaultPile())==null?void 0:c.id,r=e.filter(u=>(u.order==="chop"||u.order==="mine")&&(u.dropPile??s)===t.id||u.order==="haul"&&(u.destPile??s)===t.id).length,o=e.filter(u=>(u.order==="haul"||u.order==="build")&&(u.sourcePile??s)===t.id).length,a=[];r&&a.push(`${r} in`),o&&a.push(`${o} out`);const l=a.length?`<span class="role">${a.join(" · ")}</span>`:"";return{x:n.x,y:n.y,text:`Pile ${t.id}${l}`,highlight:this.pileMode&&t.id===this.activePileSlot,visible:n.visible}}))}drawFloaters(){this.hud.setFloaters(this.floaters.map(e=>{const t=this.renderer.worldToScreen(e.x,e.y,this.world.elevationAt(e.x,e.y)+2);return{x:t.x,y:t.y-(1.4-e.life)*26,text:e.text,colour:e.colour,alpha:Math.min(1,e.life),visible:t.visible}}))}updateTooltip(e,t){const n=this.player;if(n.carrying){const a=Je[n.carrying.kind];let l="left click to set down · Q/E turn 90° · F upright · V/B raise";if(this.activeSnap){const c=this.activeSnap.host,d=Math.abs(Math.cos(n.carrying.yaw-c.yaw)*Math.cos((c.upright,0)))<.5,h=this.activeSnap.kind==="top"?`on top, ${d?"across":"along"} the ${Je[c.kind].name.toLowerCase()}`:this.activeSnap.kind==="bottom"?"at the foot, flat on the ground":`out from the ${Je[c.kind].name.toLowerCase()}`,f=this.activeSnap.kind==="top"?"turn 90°":"out / alongside";l=`${h} · Q/E ${f} · left click to set`}this.hud.setTip(`Carrying ${a.name}`,l,this.input.mouseX,this.input.mouseY);return}if(t&&Ue(n.x,n.y,t.x,t.y)<Qh){const a=Je[t.kind];this.hud.setTip(a.name,`bearing ${Math.round(t.load)}/${a.bearing} · right click to lift`,this.input.mouseX,this.input.mouseY);return}const s=this.hoveredNode;if(s){const a=Ue(n.x,n.y,s.x,s.y)<ia;this.hud.setTip(`${po[s.kind]} (${Math.ceil(s.amount)})`,a?"hold left click to work":"too far to reach",this.input.mouseX,this.input.mouseY);return}const r=this.settlerUnderCursor();if(r){const a=r.carrying?` · carrying a ${Je[r.carrying.kind].name.toLowerCase()}`:"";this.hud.setTip(`${r.name} · ${Ar[r.order]}${a}`,"right click to change their orders",this.input.mouseX,this.input.mouseY);return}const o=this.actors.find(a=>a!==n&&mt(a)&&Ue(a.x,a.y,this.cursor.x,this.cursor.y)<1);if(o){const a=o.faction==="natives"?"islander":o.faction==="wildlife"?"wild beast":"settler",l=o.faction==="wildlife"?`${Math.round(o.hp)}/${o.maxHp} · hold left click to hunt`:`${Math.round(o.hp)}/${o.maxHp} health`;this.hud.setTip(`${o.name} · ${a}`,l,this.input.mouseX,this.input.mouseY);return}if(!n.carrying){this.hud.setTip("Ground","right click to set where timber is stacked",this.input.mouseX,this.input.mouseY);return}this.hud.setTip(null,null,0,0)}frame(){const e=performance.now(),t=Math.min(.05,(e-this.lastFrame)/1e3);this.lastFrame=e,this.frameDt=t;try{this.update(t),this.draw(t)}catch(n){this.reportFrameError(n)}this.input.endFrame(),requestAnimationFrame(()=>this.frame())}reportFrameError(e){if(this.frameErrors++,console.error("[frame error]",e),this.frameErrors<=3){const t=e instanceof Error?e.message:String(e);this.hud.log(`Something glitched: ${t}`)}}}const FM=document.getElementById("game"),fd=document.getElementById("hud"),Ki=new UM(FM,fd);window.game=Ki;fv();fd.style.visibility="hidden";xv({hasSave:Ki.hasSave(),onBegin:()=>Ki.begin(),onContinue:()=>{Ki.loadGame(),Ki.begin()},onDeleteSave:()=>Ki.deleteSave()});
