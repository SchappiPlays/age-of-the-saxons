var Fu=Object.defineProperty;var Ou=(i,e,t)=>e in i?Fu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var X=(i,e,t)=>Ou(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const xi=(i,e,t)=>i<e?e:i>t?t:i,Bu=(i,e,t)=>i===e?0:xi((t-i)/(e-i),0,1),Oa=(i,e,t)=>{const n=Bu(i,e,t);return n*n*(3-2*n)},ku=(i,e,t,n)=>{const s=t-i,r=n-e;return s*s+r*r},Ne=(i,e,t,n)=>Math.sqrt(ku(i,e,t,n));function en(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Or(i,e,t){let n=t^Math.imul(i|0,668265261)^Math.imul(e|0,374761393);return n=Math.imul(n^n>>>15,625341585),n^=n>>>13,n>>>0}const si=(i,e,t)=>e+i()*(t-e),bs=(i,e,t)=>Math.floor(e+i()*(t-e+1));function zo(i,e){return e[Math.floor(i()*e.length)]}function Ns(i,e,t){return Or(i,e,t)/4294967296}const Rl=i=>i*i*(3-2*i);function Ba(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=Rl(i-n),o=Rl(e-s),a=Ns(n,s,t),l=Ns(n+1,s,t),c=Ns(n,s+1,t),h=Ns(n+1,s+1,t),d=a+(l-a)*r,u=c+(h-c)*r;return d+(u-d)*o}function jn(i,e,t,n={}){const{octaves:s=5,frequency:r=1,amplitude:o=1,lacunarity:a=2,gain:l=.5}=n;let c=r,h=o,d=0,u=0;for(let f=0;f<s;f++)d+=Ba(i*c,e*c,t+f*8191)*h,u+=h,c*=a,h*=l;return d/u}function zu(i,e,t,n={}){const{octaves:s=4,frequency:r=1,lacunarity:o=2,gain:a=.5}=n;let l=r,c=1,h=0,d=0;for(let u=0;u<s;u++){const f=1-Math.abs(Ba(i*l,e*l,t+u*6151)*2-1);h+=f*f*c,d+=c,l*=o,c*=a}return h/d}const ka=9e4,yh=150,fi=i=>i*yh;var Ze=(i=>(i[i.Ocean=0]="Ocean",i[i.Shallows=1]="Shallows",i[i.Beach=2]="Beach",i[i.Marsh=3]="Marsh",i[i.Grassland=4]="Grassland",i[i.Meadow=5]="Meadow",i[i.Forest=6]="Forest",i[i.PineForest=7]="PineForest",i[i.Moor=8]="Moor",i[i.Rock=9]="Rock",i[i.Snow=10]="Snow",i))(Ze||{});const Er=1/44e3,Fs=1/6400,Cl=1/440,Pl=1/55,Ll=1/10800,Il=1/12e3,Gu=0;function Hu(i,e,t){const n=Math.hypot(i,e)/ka,s=(jn(i*Er*2,e*Er*2,t+77,{octaves:4})-.5)*.42,r=n+s;return 1-Oa(.55,1,r)}function Br(i,e,t){const n=Hu(i,e,t);if(n<=0)return-1;const s=jn(i*Er,e*Er,t,{octaves:4}),r=jn(i*Fs,e*Fs,t+1013,{octaves:5}),o=jn(i*Cl,e*Cl,t+2027,{octaves:3}),a=Oa(.55,.8,jn(i*Il,e*Il,t+3041,{octaves:3})),l=zu(i*Fs*1.7,e*Fs*1.7,t+4051,{octaves:5})*a,c=jn(i*Pl,e*Pl,t+7079,{octaves:3}),d=((s*.45+r*.3+o*.08)/.83+l*.4)*n+(c-.5)*.03*n;return xi((d-.34)*1.7,-1,1)}function Sh(i,e,t,n){const s=jn(i*Ll,e*Ll,n+5077,{octaves:4}),r=xi(t,0,1)*.35,o=(1-Oa(0,.05,t))*.08,a=(jn(i/900,e/900,n+8123,{octaves:3})-.5)*.3;return xi(s+o+a-r,0,1)}function bh(i,e){const t=xi(.5-i/(ka*2.2),0,1),n=xi(e,0,1)*.75;return xi(t-n,0,1)}function Eh(i,e,t){return i<-.1?0:i<Gu?1:i<.0032?2:i>.62?t<.25?10:9:i>.44?8:e>.82&&i<.025?3:e>.5?t<.4?7:6:e>.36?5:4}function wh(i,e,t){const n=Br(i,e,t),s=Sh(i,e,n,t),r=bh(e,n);return{height:n,moisture:s,temperature:r,biome:Eh(n,s,r)}}const Vi=i=>i===0||i===1;function Dl(i){switch(i){case 0:return 1/0;case 1:return 2.6;case 3:return 2;case 6:case 7:return 1.25;case 8:return 1.35;case 9:return 1.7;case 10:return 1.8;default:return 1}}function Vu(i,e,t){return Ba(i*.7,e*.7,t+9091)}const it=32;var qe=(i=>(i[i.OakTree=0]="OakTree",i[i.BirchTree=1]="BirchTree",i[i.PineTree=2]="PineTree",i[i.Boulder=3]="Boulder",i[i.FlintOutcrop=4]="FlintOutcrop",i[i.BerryBush=5]="BerryBush",i[i.ReedBed=6]="ReedBed",i[i.ClayBank=7]="ClayBank",i[i.BogIron=8]="BogIron",i))(qe||{});const Ul=(i,e)=>`${i},${e}`,sn=i=>Math.floor(i/it),Wu={[Ze.Forest]:[[0,.0425,2,3],[1,.0225,2,3],[5,.0063,5,12],[3,.005,20,40]],[Ze.PineForest]:[[2,.0525,2,3],[3,.007,20,40],[5,.003,4,9]],[Ze.Meadow]:[[0,.0045,2,3],[5,.0075,5,12],[3,.004,15,30]],[Ze.Grassland]:[[0,.0015,2,3],[3,.004,15,30],[4,.001,6,14]],[Ze.Marsh]:[[6,.035,8,20],[8,.003,4,10],[7,.005,10,25]],[Ze.Beach]:[[4,.005,6,14],[6,.002,6,14],[7,.0025,10,25]],[Ze.Moor]:[[3,.011,20,40],[4,.003,6,14],[8,.0015,4,10]],[Ze.Rock]:[[3,.024,25,50],[4,.005,8,18]]};function Xu(i,e,t,n){const s=i+32768&65535,r=e+32768&65535,o=n*it+t;return(s*65536+r)*1024+o}function qu(i,e,t){const n=new Array(it*it),s=[],r=en(Or(i,e,t)),o=i*it,a=e*it,l=it+1,c=new Float32Array(l*l);for(let h=0;h<=it;h++)for(let d=0;d<=it;d++)c[h*l+d]=Br(o+d,a+h,t);for(let h=0;h<it;h++)for(let d=0;d<it;d++){const u=o+d,f=a+h,g=wh(u,f,t);if(n[h*it+d]={biome:g.biome,height:g.height,jitter:Vu(u,f,t)},Vi(g.biome))continue;const M=Wu[g.biome];if(M){for(const[m,p,y,b]of M)if(r()<p){s.push({id:Xu(i,e,d,h),kind:m,x:u+si(r,.15,.85),y:f+si(r,.15,.85),amount:bs(r,y,b),scale:si(r,.82,1.18)});break}}}return{cx:i,cy:e,tiles:n,corners:c,resources:s,dirty:!1}}function Os(i,e,t){const n=it+1;return i.corners[t*n+e]}function $u(i,e,t){const n=(e%it+it)%it,s=(t%it+it)%it;return i.tiles[s*it+n]}const Yr={0:"Oak",1:"Birch",2:"Pine",3:"Boulder",4:"Flint outcrop",5:"Berry bush",6:"Reed bed",7:"Clay bank",8:"Bog iron"},Ye={log:{kind:"log",name:"Log",length:2,width:.25,thickness:.25,mass:140,fromItem:"log",bearing:2600,cylindrical:!0,colour:"#a87a4a",colourDark:"#7a5330",description:"A whole trunk. Heavy. Stack them for walls or span them as beams."},splitLog:{kind:"splitLog",name:"Split log",length:2,width:.25,thickness:.125,mass:70,bearing:1300,cylindrical:!0,halfRound:!0,colour:"#bb9059",colourDark:"#8a6b3c",description:"A trunk halved lengthwise. Flat face up makes a floor."},post:{kind:"post",name:"Post",length:1.25,width:.25,thickness:.25,mass:100,bearing:4200,cylindrical:!0,description:"A trunk stood upright and sunk in. Carries a roof.",colour:"#9c7245",colourDark:"#6d4c2b"},beam:{kind:"beam",name:"Beam",length:3,width:.2,thickness:.2,mass:150,bearing:2400,cylindrical:!0,description:"A long dressed timber for spanning between posts.",colour:"#b08954",colourDark:"#856236"},plank:{kind:"plank",name:"Plank",length:1.5,width:.12,thickness:.02,mass:14,fromItem:"plank",bearing:320,colour:"#b98f57",colourDark:"#7d5e33",description:"Light and quick to lay. Good for decks, doors and roofs."},stoneBlock:{kind:"stoneBlock",name:"Stone block",length:.25,width:.25,thickness:.25,mass:160,fromItem:"stone",bearing:9e3,colour:"#8d8d88",colourDark:"#5d5d59",description:"A dressed cube of stone. Will not burn and will not rot; stacks square."},stoneSlab:{kind:"stoneSlab",name:"Stone slab",length:.6,width:.5,thickness:.06,mass:200,bearing:7e3,colour:"#9a9a94",colourDark:"#66665f",description:"A broad flat stone. A hearth floor, or a threshold."},boulder:{kind:"boulder",name:"Boulder",length:.55,width:.55,thickness:.5,mass:240,bearing:12e3,round:!0,colour:"#8d8d88",colourDark:"#5d5d59",description:"An undressed stone, hauled whole. Heavy, but it will hold anything."},thatchBundle:{kind:"thatchBundle",name:"Thatch bundle",length:.9,width:.7,thickness:.12,mass:12,fromItem:"thatch",bearing:45,roofing:!0,colour:"#c9a94f",colourDark:"#8a7333",description:"Reed thatch. Sheds rain, but only over something that holds it up."}};function $i(i){const e=Math.cos(i.yaw),t=Math.sin(i.yaw),n=e*i.hx,s=t*i.hx,r=-t*i.hy,o=e*i.hy;return[{x:i.cx-n-r,y:i.cy-s-o},{x:i.cx+n-r,y:i.cy+s-o},{x:i.cx+n+r,y:i.cy+s+o},{x:i.cx-n+r,y:i.cy-s+o}]}function Nl(i,e,t){let n=1/0,s=-1/0;for(const r of i){const o=r.x*e+r.y*t;o<n&&(n=o),o>s&&(s=o)}return[n,s]}function kr(i,e,t=.02){const n=$i(i),s=$i(e);for(const r of[i,e]){const o=Math.cos(r.yaw),a=Math.sin(r.yaw);for(const[l,c]of[[o,a],[-a,o]]){const[h,d]=Nl(n,l,c),[u,f]=Nl(s,l,c);if(d-t<=u||f-t<=h)return!1}}return!0}function Th(i,e){let t=i;for(let n=0;n<e.length&&t.length!==0;n++){const s=e[n],r=e[(n+1)%e.length],o=r.x-s.x,a=r.y-s.y,l=h=>o*(h.y-s.y)-a*(h.x-s.x),c=t;t=[];for(let h=0;h<c.length;h++){const d=c[h],u=c[(h+c.length-1)%c.length],f=l(d),g=l(u);f>=0?(g<0&&t.push(Fl(u,d,g,f)),t.push(d)):g>=0&&t.push(Fl(u,d,g,f))}}return t}function Fl(i,e,t,n){const s=t/(t-n);return{x:i.x+(e.x-i.x)*s,y:i.y+(e.y-i.y)*s}}function Ah(i){let e=0;for(let t=0;t<i.length;t++){const n=i[t],s=i[(t+1)%i.length];e+=n.x*s.y-s.x*n.y}return Math.abs(e)/2}function Yu(i,e){return kr(i,e,0)?Ah(Th($i(i),$i(e))):0}function Ku(i,e){return kr(i,e,0)?Th($i(i),$i(e)):[]}const Zu=i=>4*i.hx*i.hy;let za=1;function xn(i){const e=Ye[i.kind];let t,n,s;i.upright?(t=e.width,n=e.thickness,s=e.length):(t=e.length,n=e.width,s=e.thickness);const r=Math.abs(Math.cos(i.yaw)),o=Math.abs(Math.sin(i.yaw)),a=(t*r+n*o)/2,l=(t*o+n*r)/2;return{x0:i.x-a,x1:i.x+a,y0:i.y-l,y1:i.y+l,z0:i.z,z1:i.z+s}}function Ht(i){const e=Ye[i.kind];let t,n,s;return i.upright?(t=e.width,n=e.thickness,s=e.length):(t=e.length,n=e.width,s=e.thickness),{cx:i.x,cy:i.y,hx:t/2,hy:n/2,yaw:i.yaw,z0:i.z,z1:i.z+s}}function Ju(i,e,t=.02){const n=Ht(i),s=Ht(e);return n.z0>=s.z1-t||n.z1<=s.z0+t?!1:kr(n,s,t)}function Ga(i,e){return Yu(Ht(i),Ht(e))}class Qu{constructor(){X(this,"cell",6);X(this,"buckets",new Map);X(this,"byId",new Map)}key(e,t){return`${e},${t}`}cellsFor(e){const t=[],n=Math.floor(e.x0/this.cell),s=Math.floor(e.x1/this.cell),r=Math.floor(e.y0/this.cell),o=Math.floor(e.y1/this.cell);for(let a=r;a<=o;a++)for(let l=n;l<=s;l++)t.push(this.key(l,a));return t}add(e){this.byId.set(e.id,e);for(const t of this.cellsFor(xn(e))){let n=this.buckets.get(t);n||this.buckets.set(t,n=[]),n.push(e)}}remove(e){this.byId.delete(e.id);for(const t of this.cellsFor(xn(e))){const n=this.buckets.get(t);if(!n)continue;const s=n.indexOf(e);s>=0&&n.splice(s,1),n.length===0&&this.buckets.delete(t)}}get(e){return this.byId.get(e)}get count(){return this.byId.size}query(e){const t=[],n=new Set;for(const s of this.cellsFor(e)){const r=this.buckets.get(s);if(r)for(const o of r){if(n.has(o.id))continue;n.add(o.id);const a=xn(o);a.x0<=e.x1&&a.x1>=e.x0&&a.y0<=e.y1&&a.y1>=e.y0&&a.z0<=e.z1&&a.z1>=e.z0&&t.push(o)}}return t}queryBroad(e){const t=new Set;for(const n of this.cellsFor(e)){const s=this.buckets.get(n);if(s)for(const r of s)t.add(r)}return[...t]}queryRadius(e,t,n){return this.query({x0:e-n,x1:e+n,y0:t-n,y1:t+n,z0:-99,z1:99}).filter(s=>(s.x-e)**2+(s.y-t)**2<=n*n)}all(){return[...this.byId.values()]}clear(){this.byId.clear(),this.buckets.clear()}}const ju=()=>za,ed=i=>{za=i};function pn(i,e,t,n,s,r,o=!1){return{id:za++,kind:i,x:e,y:t,z:n,yaw:s,upright:r,load:0,integrity:1,loose:o}}const ri={campfire:{kind:"campfire",name:"Campfire",w:1,h:1,cost:[{item:"log",count:2},{item:"stone",count:5}],work:6,description:"A ring of stones. Cooks food, gives light, keeps the cold off."},kiln:{kind:"kiln",name:"Kiln",w:2,h:2,cost:[{item:"stone",count:12},{item:"clay",count:8}],work:24,description:"Burns charcoal and fires pottery."},smithy:{kind:"smithy",name:"Smithy",w:2,h:2,cost:[{item:"stone",count:14},{item:"clay",count:6},{item:"log",count:4}],work:40,description:"Bloomery and anvil. Smelt bog iron, forge tools and blades."},dryingRack:{kind:"dryingRack",name:"Drying rack",w:2,h:1,cost:[{item:"log",count:2},{item:"rope",count:2}],work:8,description:"Preserves meat and cures hides."},quern:{kind:"quern",name:"Quern",w:1,h:1,cost:[{item:"stone",count:6}],work:10,description:"A hand mill for grinding grain."},loom:{kind:"loom",name:"Warp-weighted loom",w:2,h:1,cost:[{item:"log",count:3},{item:"rope",count:3},{item:"stone",count:4}],work:16,description:"Weaves cloth from wool and flax."}},vt={log:{id:"log",name:"Log",stack:20},plank:{id:"plank",name:"Plank",stack:40},stone:{id:"stone",name:"Stone",stack:40},flint:{id:"flint",name:"Flint",stack:40},reed:{id:"reed",name:"Reed",stack:60},thatch:{id:"thatch",name:"Thatch",stack:40},rope:{id:"rope",name:"Rope",stack:30},clay:{id:"clay",name:"Clay",stack:40},bogIron:{id:"bogIron",name:"Bog iron ore",stack:30},ironBloom:{id:"ironBloom",name:"Iron bloom",stack:20},ironBar:{id:"ironBar",name:"Iron bar",stack:20},charcoal:{id:"charcoal",name:"Charcoal",stack:40},berries:{id:"berries",name:"Berries",stack:40,nutrition:8},meat:{id:"meat",name:"Raw meat",stack:20,nutrition:10},cookedMeat:{id:"cookedMeat",name:"Roast meat",stack:20,nutrition:32},hide:{id:"hide",name:"Hide",stack:20},leather:{id:"leather",name:"Leather",stack:20},pot:{id:"pot",name:"Clay pot",stack:10},flintAxe:{id:"flintAxe",name:"Flint axe",stack:1,tool:!0,damage:6,chopPower:3.2,minePower:1.2},ironAxe:{id:"ironAxe",name:"Iron axe",stack:1,tool:!0,damage:11,chopPower:6,minePower:2},spear:{id:"spear",name:"Spear",stack:1,tool:!0,damage:14},seax:{id:"seax",name:"Seax",stack:1,tool:!0,damage:9},shield:{id:"shield",name:"Limewood shield",stack:1,tool:!0,damage:2},bow:{id:"bow",name:"Hunting bow",stack:1,tool:!0,damage:10}},td={[qe.OakTree]:{item:"log",per:0,tool:"chop"},[qe.BirchTree]:{item:"log",per:0,tool:"chop"},[qe.PineTree]:{item:"log",per:0,tool:"chop"},[qe.Boulder]:{item:"stone",per:1,tool:"mine"},[qe.FlintOutcrop]:{item:"flint",per:1,tool:"mine"},[qe.BerryBush]:{item:"berries",per:2,tool:"hand"},[qe.ReedBed]:{item:"reed",per:2,tool:"hand"},[qe.ClayBank]:{item:"clay",per:1,tool:"hand"},[qe.BogIron]:{item:"bogIron",per:1,tool:"mine"}},Ol=.22,nd=i=>i===qe.OakTree||i===qe.BirchTree||i===qe.PineTree,id=210,sd=120,rd=30,od=3,ad=3,ld=.15;function cd(i,e){const t=Ye[i.kind];return i.upright||t.round||i.kind==="stoneBlock"||i.kind==="stoneSlab"?!0:i.z>e+ld}let Ha=1,Va=1;const hd=()=>Ha,ud=i=>{Ha=i},dd=()=>Va,fd=i=>{Va=i};class pd{constructor(e){X(this,"seed");X(this,"chunks",new Map);X(this,"removedResources",new Set);X(this,"resourceAmounts",new Map);X(this,"regrowSites",new Map);X(this,"regrowClock",0);X(this,"pieces",new Qu);X(this,"fixtures",[]);X(this,"piles",[]);this.seed=e}getChunk(e,t){(!Number.isFinite(e)||!Number.isFinite(t))&&(e=0,t=0);const n=Ul(e,t);let s=this.chunks.get(n);if(!s){s=qu(e,t,this.seed),s.resources=s.resources.filter(r=>!this.removedResources.has(r.id));for(const r of s.resources){const o=this.resourceAmounts.get(r.id);o!==void 0&&(r.amount=o)}this.chunks.set(n,s)}return s}evictFarChunks(e,t,n){const s=sn(e),r=sn(t);for(const[o,a]of this.chunks)(Math.abs(a.cx-s)>n||Math.abs(a.cy-r)>n)&&this.chunks.delete(o)}tile(e,t){return $u(this.getChunk(sn(e),sn(t)),e,t)}biomeAt(e,t){return this.tile(e,t).biome}heightAt(e,t){return this.tile(Math.floor(e),Math.floor(t)).height}elevationAt(e,t){return Math.max(0,fi(this.heightAt(e,t)))}peekBiome(e,t){return wh(e,t,this.seed).biome}peekElevation(e,t){return Math.max(0,fi(Br(e,t,this.seed)))}walkable(e,t){return Number.isFinite(Dl(this.biomeAt(e,t)))}pieceBlocks(e,t,n=Ol){const s=this.elevationAt(Math.floor(e),Math.floor(t)),r=s+1.2,o={x0:e-n,x1:e+n,y0:t-n,y1:t+n,z0:s,z1:r},a={cx:e,cy:t,hx:n,hy:n,yaw:0};for(const l of this.pieces.query(o)){if(!cd(l,s))continue;const c=Ht(l);if(!(c.z0>=r)&&kr(c,a,0))return!0}return!1}canStand(e,t,n=Ol){return this.walkable(Math.floor(e),Math.floor(t))&&!this.pieceBlocks(e,t,n)}speedMultiplier(e,t){const n=Dl(this.biomeAt(e,t));return Number.isFinite(n)?1/n:0}resourcesNear(e,t,n){const s=[],r=sn(e-n),o=sn(e+n),a=sn(t-n),l=sn(t+n),c=n*n;for(let h=a;h<=l;h++)for(let d=r;d<=o;d++)for(const u of this.getChunk(d,h).resources){const f=u.x-e,g=u.y-t;f*f+g*g<=c&&s.push(u)}return s.sort((h,d)=>(h.x-e)**2+(h.y-t)**2-((d.x-e)**2+(d.y-t)**2)),s}findResource(e,t,n){return this.resourcesNear(t,n,48).find(s=>s.id===e)}harvest(e,t){const n=Math.min(t,e.amount);return e.amount-=n,this.resourceAmounts.set(e.id,e.amount),e.amount<=0&&this.removeResource(e),n}removeResource(e){this.removedResources.add(e.id),this.resourceAmounts.delete(e.id);const t=this.getChunk(sn(e.x),sn(e.y)),n=t.resources.indexOf(e);if(n>=0&&t.resources.splice(n,1),t.dirty=!0,nd(e.kind)){const s=e.id%sd;this.regrowSites.set(e.id,{x:e.x,y:e.y,kind:e.kind,scale:e.scale,amount:ad,readyAt:this.regrowClock+id+s})}}tickRegrow(e){if(this.regrowClock+=e,this.regrowSites.size!==0)for(const[t,n]of this.regrowSites){if(this.regrowClock<n.readyAt)continue;if(this.buildClaimsGround(n.x,n.y)){n.readyAt=this.regrowClock+rd;continue}this.removedResources.delete(t),this.resourceAmounts.delete(t);const s=this.chunks.get(Ul(sn(n.x),sn(n.y)));s&&(s.resources.push({id:t,kind:n.kind,x:n.x,y:n.y,amount:n.amount,scale:n.scale}),s.dirty=!0),this.regrowSites.delete(t)}}buildClaimsGround(e,t){for(const n of this.pieces.queryRadius(e,t,od))if(n.kind==="log"||n.kind==="stoneBlock"||n.kind==="stoneSlab")return!0;return!1}exportState(){return{removed:[...this.removedResources],amounts:[...this.resourceAmounts],regrow:[...this.regrowSites],regrowClock:this.regrowClock,pieces:this.pieces.all().map(e=>({...e})),fixtures:this.fixtures.map(e=>({...e,delivered:e.delivered.map(t=>({...t}))})),piles:this.piles.map(e=>({id:e.id,x:e.x,y:e.y,contents:[...e.contents]})),pieceId:ju(),fixtureId:hd(),pileId:dd()}}importState(e){this.removedResources=new Set(e.removed),this.resourceAmounts=new Map(e.amounts),this.regrowSites=new Map(e.regrow),this.regrowClock=e.regrowClock,this.chunks.clear(),this.pieces.clear();for(const t of e.pieces)this.pieces.add({...t});this.fixtures.length=0;for(const t of e.fixtures)this.fixtures.push({...t,delivered:t.delivered.map(n=>({...n}))});this.piles.length=0;for(const t of e.piles)this.piles.push({id:t.id,x:t.x,y:t.y,contents:new Map(t.contents)});ed(e.pieceId),ud(e.fixtureId),fd(e.pileId)}pieceAt(e,t){const n=this.pieces.query({x0:e,x1:e,y0:t,y1:t,z0:-50,z1:50}).filter(s=>{const r=xn(s);return e>=r.x0&&e<=r.x1&&t>=r.y0&&t<=r.y1});return n.sort((s,r)=>r.z-s.z),n[0]}canPlaceFixture(e,t,n){const s=ri[e];for(let r=n;r<n+s.h;r++)for(let o=t;o<t+s.w;o++){const a=this.biomeAt(o,r);if(Vi(a)||a===Ze.Rock||a===Ze.Snow||this.fixtureAt(o,r))return!1}return!0}placeFixtureSite(e,t,n){const s=ri[e],r={id:Ha++,kind:e,tx:t,ty:n,progress:0,delivered:[],hp:1,maxHp:s.work*6+40,fuel:e==="campfire"?0:void 0};return this.fixtures.push(r),r}fixtureAt(e,t){return this.fixtures.find(n=>{const s=ri[n.kind];return e>=n.tx&&e<n.tx+s.w&&t>=n.ty&&t<n.ty+s.h})}nearestFixture(e,t,n,s){let r,o=s*s;for(const a of this.fixtures){if(a.kind!==n||a.progress<1)continue;const l=(a.tx-e)**2+(a.ty-t)**2;l<o&&(o=l,r=a)}return r}destroyFixture(e){const t=this.fixtures.indexOf(e);t>=0&&this.fixtures.splice(t,1)}dropItems(e,t,n,s){const r=this.piles.find(a=>(a.x-e)**2+(a.y-t)**2<1.2),o=r??{id:Va++,x:e,y:t,contents:new Map};return o.contents.set(n,(o.contents.get(n)??0)+s),r||this.piles.push(o),o}pileNear(e,t,n=1.2){return this.piles.find(s=>(s.x-e)**2+(s.y-t)**2<=n*n)}removePile(e){const t=this.piles.indexOf(e);t>=0&&this.piles.splice(t,1)}larderCount(e){if(!e)return 0;const t=this.pileNear(e.x,e.y,1.5);if(!t)return 0;let n=0;for(const[s,r]of t.contents)(vt[s].nutrition??0)>0&&(n+=r);return n}takeFromLarder(e){if(!e)return null;const t=this.pileNear(e.x,e.y,1.5);if(!t)return null;let n=null,s=0;for(const[o,a]of t.contents){if(a<=0)continue;const l=vt[o].nutrition??0;l>s&&(s=l,n=o)}if(!n)return null;const r=(t.contents.get(n)??0)-1;return r<=0?t.contents.delete(n):t.contents.set(n,r),t.contents.size===0&&this.removePile(t),n}hasTimberWithin(e,t,n){for(let s=6;s<=n;s+=6){const r=Math.max(8,Math.floor(s/2));for(let o=0;o<r;o++){const a=o/r*Math.PI*2,l=this.peekBiome(Math.round(e+Math.cos(a)*s),Math.round(t+Math.sin(a)*s));if(l===Ze.Forest||l===Ze.PineForest)return!0}}return!1}findLandNear(e,t,n=400){for(let s=0;s<=n;s+=2){const r=Math.max(8,s*2);for(let o=0;o<r;o++){const a=o/r*Math.PI*2,l=Math.round(e+Math.cos(a)*s),c=Math.round(t+Math.sin(a)*s),h=this.peekBiome(l,c);if(!Vi(h)&&h!==Ze.Rock&&h!==Ze.Snow)return{x:l,y:c}}}return null}findLandingBeach(e,t){const n=Math.hypot(e,t)||1,s=e/n,r=t/n,o=d=>!Vi(this.peekBiome(Math.round(s*d),Math.round(r*d)));let a=0,l=ka*1.4;if(!o(a)){let d=!1;for(let u=0;u<l;u+=250)if(o(u)){a=u,d=!0;break}if(!d)return{x:0,y:0}}for(let d=0;d<40&&l-a>1;d++){const u=(a+l)/2;o(u)?a=u:l=u}let c=null;for(let d=0;d<900;d+=3){const u=a-d,f=Math.round(s*u),g=Math.round(r*u),M=this.peekBiome(f,g);if(!(M!==Ze.Beach&&M!==Ze.Grassland&&M!==Ze.Meadow&&M!==Ze.Forest)&&(c||(c={x:f,y:g}),this.hasTimberWithin(f,g,20)))return{x:f,y:g}}return c||(this.findLandNear(Math.round(s*a),Math.round(r*a),600)??{x:Math.round(s*a),y:Math.round(r*a)})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="185",md=0,Bl=1,gd=2,gr=1,Rh=2,ms=3,oi=0,Kt=1,ln=2,On=0,Wi=1,kl=2,zl=3,Gl=4,xd=5,pi=100,_d=101,vd=102,Md=103,yd=104,Sd=200,bd=201,Ed=202,wd=203,Go=204,Ho=205,Td=206,Ad=207,Rd=208,Cd=209,Pd=210,Ld=211,Id=212,Dd=213,Ud=214,Vo=0,Wo=1,Xo=2,Yi=3,qo=4,$o=5,Yo=6,Ko=7,Xa=0,Nd=1,Fd=2,An=0,Ch=1,Ph=2,Lh=3,Ih=4,Dh=5,Uh=6,Nh=7,Fh=300,vi=301,Ki=302,Kr=303,Zr=304,zr=306,Es=1e3,Fn=1001,Zo=1002,Ut=1003,Od=1004,Bs=1005,Gt=1006,Jr=1007,ti=1008,jt=1009,Oh=1010,Bh=1011,ws=1012,qa=1013,Cn=1014,mn=1015,kn=1016,$a=1017,Ya=1018,Ts=1020,kh=35902,zh=35899,Gh=1021,Hh=1022,gn=1023,zn=1026,gi=1027,Ka=1028,Za=1029,Mi=1030,Ja=1031,Qa=1033,xr=33776,_r=33777,vr=33778,Mr=33779,Jo=35840,Qo=35841,jo=35842,ea=35843,ta=36196,na=37492,ia=37496,sa=37488,ra=37489,wr=37490,oa=37491,aa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,xa=37818,_a=37819,va=37820,Ma=37821,ya=36492,Sa=36494,ba=36495,Ea=36283,wa=36284,Tr=36285,Ta=36286,Bd=3200,Aa=0,kd=1,ei="",on="srgb",Ar="srgb-linear",Rr="linear",rt="srgb",wi=7680,Hl=519,zd=512,Gd=513,Hd=514,ja=515,Vd=516,Wd=517,el=518,Xd=519,Vl=35044,Wl="300 es",Tn=2e3,As=2001;function qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $d(){const i=Cr("canvas");return i.style.display="block",i}const Xl={};function ql(...i){const e="THREE."+i.shift();console.log(e,...i)}function Vh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Vh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=Vh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){const e=i.join(" ");e in Xl||(Xl[e]=!0,Ie(...i))}function Yd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Kd={[Vo]:Wo,[Xo]:Yo,[qo]:Ko,[Yi]:$o,[Wo]:Vo,[Yo]:Xo,[Ko]:qo,[$o]:Yi};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,Ra=180/Math.PI;function Ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Zd(i,e){return(i%e+e)%e}function Qr(i,e,t){return(1-t)*i+t*e}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pl=class pl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pl.prototype.isVector2=!0;let ze=pl;class cn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+M*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+M*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ml=class ml{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ml.prototype.isVector3=!0;let L=ml;const jr=new L,$l=new cn,gl=class gl{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],y=s[1],b=s[4],v=s[7],T=s[2],E=s[5],R=s[8];return r[0]=o*M+a*y+l*T,r[3]=o*m+a*b+l*E,r[6]=o*p+a*v+l*R,r[1]=c*M+h*y+d*T,r[4]=c*m+h*b+d*E,r[7]=c*p+h*v+d*R,r[2]=u*M+f*y+g*T,r[5]=u*m+f*b+g*E,r[8]=u*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(s*c-h*n)*M,e[2]=(a*n-s*o)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eo.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gl.prototype.isMatrix3=!0;let Ue=gl;const eo=new Ue,Yl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const i={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ar]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const Xe=Jd();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=Cr("canvas")),Ti.width=e.width,Ti.height=e.height;const s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jd=0;class tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let ef=0;const no=new L;class Vt extends yi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Fn,s=Fn,r=Gt,o=ti,a=gn,l=jt,c=Vt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ps(),this.name="",this.source=new tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Fh;Vt.DEFAULT_ANISOTROPY=1;const xl=class xl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(f+1)/2,T=(p+1)/2,E=(h+u)/4,R=(d+M)/4,x=(g+m)/4;return b>v&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xl.prototype.isVector4=!0;let pt=xl;class tf extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Vt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends tf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wh extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nf extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fr=class Fr{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,M,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,M=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-M*c,t[9]=-a*l,t[2]=M-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u+M*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=M+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u-M*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=M-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,M=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=M-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-M*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,rf)}lookAt(e,t,n){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),qn.crossVectors(n,Jt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),qn.crossVectors(n,Jt)),qn.normalize(),ks.crossVectors(Jt,qn),s[0]=qn.x,s[4]=ks.x,s[8]=Jt.x,s[1]=qn.y,s[5]=ks.y,s[9]=Jt.y,s[2]=qn.z,s[6]=ks.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],y=n[3],b=n[7],v=n[11],T=n[15],E=s[0],R=s[4],x=s[8],w=s[12],C=s[1],P=s[5],I=s[9],W=s[13],K=s[2],B=s[6],$=s[10],G=s[14],j=s[3],te=s[7],re=s[11],ue=s[15];return r[0]=o*E+a*C+l*K+c*j,r[4]=o*R+a*P+l*B+c*te,r[8]=o*x+a*I+l*$+c*re,r[12]=o*w+a*W+l*G+c*ue,r[1]=h*E+d*C+u*K+f*j,r[5]=h*R+d*P+u*B+f*te,r[9]=h*x+d*I+u*$+f*re,r[13]=h*w+d*W+u*G+f*ue,r[2]=g*E+M*C+m*K+p*j,r[6]=g*R+M*P+m*B+p*te,r[10]=g*x+M*I+m*$+p*re,r[14]=g*w+M*W+m*G+p*ue,r[3]=y*E+b*C+v*K+T*j,r[7]=y*R+b*P+v*B+T*te,r[11]=y*x+b*I+v*$+T*re,r[15]=y*w+b*W+v*G+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],M=e[7],m=e[11],p=e[15],y=l*f-c*u,b=a*f-c*d,v=a*u-l*d,T=o*f-c*h,E=o*u-l*h,R=o*d-a*h;return t*(M*y-m*b+p*v)-n*(g*y-m*T+p*E)+s*(g*b-M*T+p*R)-r*(g*v-M*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],M=e[13],m=e[14],p=e[15],y=t*a-n*o,b=t*l-s*o,v=t*c-r*o,T=n*l-s*a,E=n*c-r*a,R=s*c-r*l,x=h*M-d*g,w=h*m-u*g,C=h*p-f*g,P=d*m-u*M,I=d*p-f*M,W=u*p-f*m,K=y*W-b*I+v*P+T*C-E*w+R*x;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/K;return e[0]=(a*W-l*I+c*P)*B,e[1]=(s*I-n*W-r*P)*B,e[2]=(M*R-m*E+p*T)*B,e[3]=(u*E-d*R-f*T)*B,e[4]=(l*C-o*W-c*w)*B,e[5]=(t*W-s*C+r*w)*B,e[6]=(m*v-g*R-p*b)*B,e[7]=(h*R-u*v+f*b)*B,e[8]=(o*I-a*C+c*x)*B,e[9]=(n*C-t*I-r*x)*B,e[10]=(g*E-M*v+p*y)*B,e[11]=(d*v-h*E-f*y)*B,e[12]=(a*w-o*P-l*x)*B,e[13]=(t*P-n*w+s*x)*B,e[14]=(M*b-g*T-m*y)*B,e[15]=(h*T-d*b+u*y)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,M=o*h,m=o*d,p=a*d,y=l*c,b=l*h,v=l*d,T=n.x,E=n.y,R=n.z;return s[0]=(1-(M+p))*T,s[1]=(f+v)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(u+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+b)*R,s[9]=(m-y)*R,s[10]=(1-(u+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ai.set(s[0],s[1],s[2]).length();const a=Ai.set(s[4],s[5],s[6]).length(),l=Ai.set(s[8],s[9],s[10]).length();r<0&&(o=-o),un.copy(this);const c=1/o,h=1/a,d=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Tn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===Tn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===As)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Tn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===Tn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===As)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fr.prototype.isMatrix4=!0;let je=Fr;const Ai=new L,un=new je,sf=new L(0,0,0),rf=new L(1,1,1),qn=new L,ks=new L,Jt=new L,Zl=new je,Jl=new cn;class Gn{constructor(e=0,t=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let of=0;const Ql=new L,Ri=new cn,Ln=new je,zs=new L,rs=new L,af=new L,lf=new cn,jl=new L(1,0,0),ec=new L(0,1,0),tc=new L(0,0,1),nc={type:"added"},cf={type:"removed"},Ci={type:"childadded",child:null},io={type:"childremoved",child:null};class Nt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new L,t=new Gn,n=new cn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ue}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(rs,zs,this.up):Ln.lookAt(zs,rs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cf),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ot extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hf={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Zd(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ro(o,r,e+1/3),this.g=ro(o,r,e),this.b=ro(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Xe.workingToColorSpace(zt.copy(this),e),Math.round($e(zt.r*255,0,255))*65536+Math.round($e(zt.g*255,0,255))*256+Math.round($e(zt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=on){Xe.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Gs);const n=Qr($n.h,Gs.h,t),s=Qr($n.s,Gs.s,t),r=Qr($n.l,Gs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new be;be.NAMES=Xh;class il{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uf extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new L,In=new L,oo=new L,Dn=new L,Pi=new L,Li=new L,ic=new L,ao=new L,lo=new L,co=new L,ho=new pt,uo=new pt,fo=new pt;class hn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),In.subVectors(n,t),oo.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(In),l=dn.dot(oo),c=In.dot(In),h=In.dot(oo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ho,r.x),o.addScaledVector(uo,r.y),o.addScaledVector(fo,r.z),o}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),In.subVectors(e,t),dn.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Pi.subVectors(s,n),Li.subVectors(r,n),ao.subVectors(e,n);const l=Pi.dot(ao),c=Li.dot(ao);if(l<=0&&c<=0)return t.copy(n);lo.subVectors(e,s);const h=Pi.dot(lo),d=Li.dot(lo);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pi,o);co.subVectors(e,r);const f=Pi.dot(co),g=Li.dot(co);if(g>=0&&f<=g)return t.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Li,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ic.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(ic,a);const p=1/(m+M+u);return o=M*p,a=u*p,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Si{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Vs.subVectors(this.max,os),Ii.subVectors(e.a,os),Di.subVectors(e.b,os),Ui.subVectors(e.c,os),Yn.subVectors(Di,Ii),Kn.subVectors(Ui,Di),li.subVectors(Ii,Ui);let t=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-li.z,li.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,li.z,0,-li.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-li.y,li.x,0];return!po(t,Ii,Di,Ui,Vs)||(t=[1,0,0,0,1,0,0,0,1],!po(t,Ii,Di,Ui,Vs))?!1:(Ws.crossVectors(Yn,Kn),t=[Ws.x,Ws.y,Ws.z],po(t,Ii,Di,Ui,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,Hs=new Si,Ii=new L,Di=new L,Ui=new L,Yn=new L,Kn=new L,li=new L,os=new L,Vs=new L,Ws=new L,ci=new L;function po(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Tt=new L,Xs=new ze;let df=0;class _n extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class qh extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class He extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ff=new Si,as=new L,mo=new L;class ts{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ff.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(mo)),this.expandByPoint(as.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pf=0;const rn=new je,go=new Nt,Ni=new L,Qt=new Si,ls=new Si,It=new L;class At extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?$h:qh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Qt.min,ls.min),Qt.expandByPoint(It),It.addVectors(Qt.max,ls.max),Qt.expandByPoint(It)):(Qt.expandByPoint(ls.min),Qt.expandByPoint(ls.max))}Qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),It.add(Ni)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new L,l[x]=new L;const c=new L,h=new L,d=new L,u=new ze,f=new ze,g=new ze,M=new L,m=new L;function p(x,w,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[x].add(M),a[w].add(M),a[C].add(M),l[x].add(m),l[w].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const C=y[x],P=C.start,I=C.count;for(let W=P,K=P+I;W<K;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const b=new L,v=new L,T=new L,E=new L;function R(x){T.fromBufferAttribute(s,x),E.copy(T);const w=a[x];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(E,w);const P=v.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,w=y.length;x<w;++x){const C=y[x],P=C.start,I=C.count;for(let W=P,K=P+I;W<K;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new _n(u,h,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mf=0;class ns extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Wi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Ho,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nn=new L,xo=new L,qs=new L,Zn=new L,_o=new L,$s=new L,vo=new L;class sl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xo.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(xo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qs),a=Zn.dot(this.direction),l=-Zn.dot(qs),c=Zn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xo).addScaledVector(qs,u),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){_o.subVectors(t,e),$s.subVectors(n,e),vo.crossVectors(_o,$s);let o=this.direction.dot(vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const l=a*this.direction.dot($s.crossVectors(Zn,$s));if(l<0)return null;const c=a*this.direction.dot(_o.cross(Zn));if(c<0||l+c>o)return null;const h=-a*Zn.dot(vo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hi extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sc=new je,hi=new sl,Ys=new ts,rc=new L,Ks=new L,Zs=new L,Js=new L,Mo=new L,Qs=new L,oc=new L,js=new L;class Ve extends Nt{constructor(e=new At,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Mo.fromBufferAttribute(d,e),o?Qs.addScaledVector(Mo,h):Qs.addScaledVector(Mo.sub(t),h))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(Ys.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Ys,rc)===null||hi.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(sc.copy(r).invert(),hi.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=b;v<T;v+=3){const E=a.getX(v),R=a.getX(v+1),x=a.getX(v+2);s=er(this,p,e,n,c,h,d,E,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=er(this,o,e,n,c,h,d,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=b;v<T;v+=3){const E=v,R=v+1,x=v+2;s=er(this,p,e,n,c,h,d,E,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const y=m,b=m+1,v=m+2;s=er(this,o,e,n,c,h,d,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function gf(i,e,t,n,s,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;js.copy(a),js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:i}}function er(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ks),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Js);const h=gf(i,e,t,n,Ks,Zs,Js,oc);if(h){const d=new L;hn.getBarycoord(oc,Ks,Zs,Js,d),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,d,new ze)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,l,c,d,new ze)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};hn.getNormal(Ks,Zs,Js,u.normal),h.face=u,h.barycoord=d}return h}class Yh extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ut,h=Ut,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends _n{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new je,lc=new je,tr=[],cc=new Si,xf=new je,cs=new Ve,hs=new ts;class nr extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),cc.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(cc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),hs.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fi),lc.multiplyMatrices(n,Fi),cs.matrixWorld=lc,cs.raycast(e,tr);for(let o=0,a=tr.length;o<a;o++){const l=tr[o];l.instanceId=r,l.object=this,t.push(l)}tr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yh(new Float32Array(s*this.count),s,this.count,Ka,mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yo=new L,_f=new L,vf=new Ue;class di{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yo.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(yo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vf.getNormalMatrix(e),s=this.coplanarPoint(yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new ts,Mf=new ze(.5,.5),ir=new L;class rl{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],y=r[12],b=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,p-g,T-y).normalize(),s[1].setComponents(c+o,f+h,p+g,T+y).normalize(),s[2].setComponents(c+a,f+d,p+M,T+b).normalize(),s[3].setComponents(c-a,f-d,p-M,T-b).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,T-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-v).normalize(),t===Tn)s[5].setComponents(c+l,f+u,p+m,T+v).normalize();else if(t===As)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=Mf.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ir.x=s.normal.x>0?e.max.x:e.min.x,ir.y=s.normal.y>0?e.max.y:e.min.y,ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kh extends ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pr=new L,Lr=new L,hc=new je,us=new sl,sr=new ts,So=new L,uc=new L;class yf extends Nt{constructor(e=new At,t=new Kh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pr.fromBufferAttribute(t,s-1),Lr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Lr);e.setAttribute("lineDistance",new He(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;hc.copy(s).invert(),us.copy(e.ray).applyMatrix4(hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let M=f,m=g-1;M<m;M+=c){const p=h.getX(M),y=h.getX(M+1),b=rr(this,e,us,l,p,y,M);b&&t.push(b)}if(this.isLineLoop){const M=h.getX(g-1),m=h.getX(f),p=rr(this,e,us,l,M,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let M=f,m=g-1;M<m;M+=c){const p=rr(this,e,us,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=rr(this,e,us,l,g-1,f,g-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Pr.fromBufferAttribute(a,s),Lr.fromBufferAttribute(a,r),t.distanceSqToSegment(Pr,Lr,So,uc)>n)return;So.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(So);if(!(c<e.near||c>e.far))return{distance:c,point:uc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const dc=new L,fc=new L;class Sf extends yf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dc.fromBufferAttribute(t,s),fc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dc.distanceTo(fc);e.setAttribute("lineDistance",new He(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zh extends Vt{constructor(e=[],t=vi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bf extends Vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi extends Vt{constructor(e,t,n=Cn,s,r,o,a=Ut,l=Ut,c,h=zn,d=1){if(h!==zn&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ef extends Zi{constructor(e,t=Cn,n=vi,s,r,o=Ut,a=Ut,l,c=zn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jh extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ht extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function g(M,m,p,y,b,v,T,E,R,x,w){const C=v/R,P=T/x,I=v/2,W=T/2,K=E/2,B=R+1,$=x+1;let G=0,j=0;const te=new L;for(let re=0;re<$;re++){const ue=re*P-W;for(let ve=0;ve<B;ve++){const et=ve*C-I;te[M]=et*y,te[m]=ue*b,te[p]=K,c.push(te.x,te.y,te.z),te[M]=0,te[m]=0,te[p]=E>0?1:-1,h.push(te.x,te.y,te.z),d.push(ve/R),d.push(1-re/x),G+=1}}for(let re=0;re<x;re++)for(let ue=0;ue<R;ue++){const ve=u+ue+B*re,et=u+ue+B*(re+1),mt=u+(ue+1)+B*(re+1),tt=u+(ue+1)+B*re;l.push(ve,et,tt),l.push(et,mt,tt),j+=6}a.addGroup(f,j,w),f+=j,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ut extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const M=[],m=n/2;let p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(f,2));function y(){const v=new L,T=new L;let E=0;const R=(t-e)/n;for(let x=0;x<=r;x++){const w=[],C=x/r,P=C*(t-e)+e;for(let I=0;I<=s;I++){const W=I/s,K=W*l+a,B=Math.sin(K),$=Math.cos(K);T.x=P*B,T.y=-C*n+m,T.z=P*$,d.push(T.x,T.y,T.z),v.set(B,R,$).normalize(),u.push(v.x,v.y,v.z),f.push(W,1-C),w.push(g++)}M.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){const C=M[w][x],P=M[w+1][x],I=M[w+1][x+1],W=M[w][x+1];(e>0||w!==0)&&(h.push(C,P,W),E+=3),(t>0||w!==r-1)&&(h.push(P,I,W),E+=3)}c.addGroup(p,E,0),p+=E}function b(v){const T=g,E=new ze,R=new L;let x=0;const w=v===!0?e:t,C=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const K=I/s*l+a,B=Math.cos(K),$=Math.sin(K);R.x=w*$,R.y=m*C,R.z=w*B,d.push(R.x,R.y,R.z),u.push(0,C,0),E.x=B*.5+.5,E.y=$*.5*C+.5,f.push(E.x,E.y),g++}for(let I=0;I<s;I++){const W=T+I,K=P+I;v===!0?h.push(K,K+1,W):h.push(K+1,K,W),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends ut{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Gr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const b=new L,v=new L,T=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],v),f(t[E+2],T),l(b,v,T,y)}function l(y,b,v,T){const E=T+1,R=[];for(let x=0;x<=E;x++){R[x]=[];const w=y.clone().lerp(v,x/E),C=b.clone().lerp(v,x/E),P=E-x;for(let I=0;I<=P;I++)I===0&&x===E?R[x][I]=w:R[x][I]=w.clone().lerp(C,I/P)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){const C=Math.floor(w/2);w%2===0?(u(R[x][C+1]),u(R[x+1][C]),u(R[x][C])):(u(R[x][C+1]),u(R[x+1][C+1]),u(R[x+1][C]))}}function c(y){const b=new L;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const y=new L;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const v=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(v,1-T)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const b=o[y+0],v=o[y+2],T=o[y+4],E=Math.max(b,v,T),R=Math.min(b,v,T);E>.9&&R<.1&&(b<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,b){const v=y*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){const y=new L,b=new L,v=new L,T=new L,E=new ze,R=new ze,x=new ze;for(let w=0,C=0;w<r.length;w+=9,C+=6){y.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),T.copy(y).add(b).add(v).divideScalar(3);const P=m(T);M(E,C+0,y,P),M(R,C+2,b,P),M(x,C+4,v,P)}}function M(y,b,v,T){T<0&&y.x===1&&(o[b]=y.x-1),v.x===0&&v.z===0&&(o[b]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.detail)}}const or=new L,ar=new L,bo=new L,lr=new hn;class wf extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(yr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:M,b:m,c:p}=lr;if(M.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),lr.getNormal(bo),d[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const b=(y+1)%3,v=d[y],T=d[b],E=lr[h[y]],R=lr[h[b]],x=`${v}_${T}`,w=`${T}_${v}`;w in u&&u[w]?(bo.dot(u[w].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),u[w]=null):x in u||(u[x]={index0:c[y],index1:c[b],normal:bo.clone()})}}for(const g in u)if(u[g]){const{index0:M,index1:m}=u[g];or.fromBufferAttribute(a,M),ar.fromBufferAttribute(a,m),f.push(or.x,or.y,or.z),f.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new He(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Hn extends ol{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hn(e.radius,e.detail)}}class Ls extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let b=0;b<c;b++){const v=b*d-r;g.push(v,-y,0),M.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const b=y+c*p,v=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;f.push(b,v,E),f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(M,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class vs extends At{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new L,g=new ze;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){const m=M*(n+1);for(let p=0;p<n;p++){const y=p+m,b=y,v=y+n+1,T=y+n+2,E=y+1;a.push(b,v,E),a.push(v,T,E)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Is extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n,v=o+b*a,T=e*Math.cos(v),E=Math.sqrt(e*e-T*T);let R=0;p===0&&o===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){const w=x/t,C=s+w*r;d.x=-E*Math.cos(C),d.y=T,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(w+R,1-b),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=h[p][y+1],v=h[p][y],T=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(b,v,E),(p!==n-1||l<Math.PI)&&f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(M,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class al extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let M=0;M<=n;M++){const m=o+M/n*a;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){const p=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,b=(s+1)*(M-1)+m,v=(s+1)*M+m;l.push(p,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(pc(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(pc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const s in n)e[s]=n[s]}return e}function pc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Af={clone:Ji,merge:Xt};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Pf extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends ns{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Xa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lf extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class If extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ll extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Df extends ll{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Eo=new je,mc=new L,gc=new L;class jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===As||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cr=new L,hr=new cn,Sn=new L;class eu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cr,hr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cr,hr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new L,xc=new ze,_c=new ze;class an extends eu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,xc,_c),t.subVectors(_c,xc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Uf extends jh{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class Nf extends ll{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hr extends eu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ff extends jh{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vc extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Ff}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Oi=-90,Bi=1;class Of extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const r=new an(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new an(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new an(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new an(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new an(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bf extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mc=new je;class kf{constructor(e,t,n=0,s=1/0){this.ray=new sl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(e,t=!0,n=[]){return Ca(e,this,n,t),n.sort(yc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ca(e[s],this,n,t);return n.sort(yc),n}}function yc(i,e){return i.distance-e.distance}function Ca(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ca(r[o],e,t,!0)}}const _l=class _l{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};_l.prototype.isMatrix2=!0;let Sc=_l;function bc(i,e,t,n){const s=zf(n);switch(t){case Gh:return i*e;case Ka:return i*e/s.components*s.byteLength;case Za:return i*e/s.components*s.byteLength;case Mi:return i*e*2/s.components*s.byteLength;case Ja:return i*e*2/s.components*s.byteLength;case Hh:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Qa:return i*e*4/s.components*s.byteLength;case xr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qo:case ea:return Math.max(i,16)*Math.max(e,8)/4;case Jo:case jo:return Math.max(i,8)*Math.max(e,8)/2;case ta:case na:case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ia:case wr:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ya:case Sa:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ea:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Tr:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zf(i){switch(i){case jt:case Oh:return{byteLength:1,components:1};case ws:case Bh:case kn:return{byteLength:2,components:1};case $a:case Ya:return{byteLength:2,components:4};case Cn:case qa:case mn:return{byteLength:4,components:1};case kh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gf(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,zp=`uniform sampler2D dfgLUT;
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
}`,Gp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`uniform float scale;
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,v0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,y0=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Hf,alphahash_pars_fragment:Vf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:$f,aomap_fragment:Yf,aomap_pars_fragment:Kf,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Qf,beginnormal_vertex:jf,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:xp,colorspace_fragment:_p,colorspace_pars_fragment:vp,envmap_fragment:Mp,envmap_common_pars_fragment:yp,envmap_pars_fragment:Sp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Up,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Dp,lights_toon_fragment:Np,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:kp,lights_physical_pars_fragment:zp,lights_fragment_begin:Gp,lights_fragment_maps:Hp,lights_fragment_end:Vp,lightprobes_pars_fragment:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Yp,map_fragment:Kp,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:Mm,dithering_pars_fragment:ym,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:zm,worldpos_vertex:Gm,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:$m,depth_vert:Ym,depth_frag:Km,distance_vert:Zm,distance_frag:Jm,equirect_vert:Qm,equirect_frag:jm,linedashed_vert:e0,linedashed_frag:t0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:x0,shadow_vert:_0,shadow_frag:v0,sprite_vert:M0,sprite_frag:y0},fe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},En={basic:{uniforms:Xt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Xt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Xt([fe.lights,fe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};En.physical={uniforms:Xt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ur={r:0,b:0,g:0},S0=new je,nu=new Ue;nu.set(-1,0,0,0,1,0,0,0,1);function b0(i,e,t,n,s,r){const o=new be(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function g(y){let b=!1;const v=f(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,b){const v=f(b);v&&(v.isCubeTexture||v.mapping===zr)?(c===void 0&&(c=new Ve(new ht(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ji(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nu),c.material.toneMapped=Xe.getTransfer(v.colorSpace)!==rt,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ve(new Ls(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ji(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(ur,Qh(i)),t.buffers.color.setClear(ur.r,ur.g,ur.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:M,dispose:p}}function E0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(P,I,W,K,B){let $=!1;const G=d(P,K,W,I);r!==G&&(r=G,c(r.object)),$=f(P,K,W,B),$&&g(P,K,W,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(P,I,W,K),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,I,W,K){const B=K.wireframe===!0;let $=n[I.id];$===void 0&&($={},n[I.id]=$);const G=P.isInstancedMesh===!0?P.id:0;let j=$[G];j===void 0&&(j={},$[G]=j);let te=j[W.id];te===void 0&&(te={},j[W.id]=te);let re=te[B];return re===void 0&&(re=u(l()),te[B]=re),re}function u(P){const I=[],W=[],K=[];for(let B=0;B<t;B++)I[B]=0,W[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:K,object:P,attributes:{},index:null}}function f(P,I,W,K){const B=r.attributes,$=I.attributes;let G=0;const j=W.getAttributes();for(const te in j)if(j[te].location>=0){const ue=B[te];let ve=$[te];if(ve===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==K}function g(P,I,W,K){const B={},$=I.attributes;let G=0;const j=W.getAttributes();for(const te in j)if(j[te].location>=0){let ue=$[te];ue===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),B[te]=ve,G++}r.attributes=B,r.attributesNum=G,r.index=K}function M(){const P=r.newAttributes;for(let I=0,W=P.length;I<W;I++)P[I]=0}function m(P){p(P,0)}function p(P,I){const W=r.newAttributes,K=r.enabledAttributes,B=r.attributeDivisors;W[P]=1,K[P]===0&&(i.enableVertexAttribArray(P),K[P]=1),B[P]!==I&&(i.vertexAttribDivisor(P,I),B[P]=I)}function y(){const P=r.newAttributes,I=r.enabledAttributes;for(let W=0,K=I.length;W<K;W++)I[W]!==P[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function b(P,I,W,K,B,$,G){G===!0?i.vertexAttribIPointer(P,I,W,B,$):i.vertexAttribPointer(P,I,W,K,B,$)}function v(P,I,W,K){M();const B=K.attributes,$=W.getAttributes(),G=I.defaultAttributeValues;for(const j in $){const te=$[j];if(te.location>=0){let re=B[j];if(re===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),re!==void 0){const ue=re.normalized,ve=re.itemSize,et=e.get(re);if(et===void 0)continue;const mt=et.buffer,tt=et.type,Q=et.bytesPerElement,oe=tt===i.INT||tt===i.UNSIGNED_INT||re.gpuType===qa;if(re.isInterleavedBufferAttribute){const ne=re.data,De=ne.stride,Fe=re.offset;if(ne.isInstancedInterleavedBuffer){for(let Pe=0;Pe<te.locationSize;Pe++)p(te.location+Pe,ne.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<te.locationSize;Pe++)m(te.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Pe=0;Pe<te.locationSize;Pe++)b(te.location+Pe,ve/te.locationSize,tt,ue,De*Q,(Fe+ve/te.locationSize*Pe)*Q,oe)}else{if(re.isInstancedBufferAttribute){for(let ne=0;ne<te.locationSize;ne++)p(te.location+ne,re.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ne=0;ne<te.locationSize;ne++)m(te.location+ne);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ne=0;ne<te.locationSize;ne++)b(te.location+ne,ve/te.locationSize,tt,ue,ve*Q,ve/te.locationSize*ne*Q,oe)}}else if(G!==void 0){const ue=G[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(te.location,ue);break;case 3:i.vertexAttrib3fv(te.location,ue);break;case 4:i.vertexAttrib4fv(te.location,ue);break;default:i.vertexAttrib1fv(te.location,ue)}}}}y()}function T(){w();for(const P in n){const I=n[P];for(const W in I){const K=I[W];for(const B in K){const $=K[B];for(const G in $)h($[G].object),delete $[G];delete K[B]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const W in I){const K=I[W];for(const B in K){const $=K[B];for(const G in $)h($[G].object),delete $[G];delete K[B]}}delete n[P.id]}function R(P){for(const I in n){const W=n[I];for(const K in W){const B=W[K];if(B[P.id]===void 0)continue;const $=B[P.id];for(const G in $)h($[G].object),delete $[G];delete B[P.id]}}}function x(P){for(const I in n){const W=n[I],K=P.isInstancedMesh===!0?P.id:0,B=W[K];if(B!==void 0){for(const $ in B){const G=B[$];for(const j in G)h(G[j].object),delete G[j];delete B[$]}delete W[K],Object.keys(W).length===0&&delete n[I]}}}function w(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function w0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function T0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==jt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!x)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:E}}function A0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new di,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,b=y*4;let v=p.clippingState||null;l.value=v,v=h(g,u,b,f);for(let T=0;T!==b;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==M;++b,v+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const ni=4,Ec=[.125,.215,.35,.446,.526,.582],mi=20,R0=256,ds=new Hr,wc=new be;let wo=null,To=0,Ao=0,Ro=!1;const C0=new L;class Tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=C0}=r;wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,To,Ao),this._renderer.xr.enabled=Ro,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:kn,format:gn,colorSpace:Ar,depthBuffer:!1},s=Ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P0(r)),this._blurMaterial=I0(r,e,t),this._ggxMaterial=L0(r,e,t)}return s}_compileMaterial(e){const t=new Ve(new At,e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,n,s,r){const l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(wc),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new ht,new Hi({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(wc),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const T=this._cubeSize;ki(s,v*T,b>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(M,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vi||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ds)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-ni?n-g+ni:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ki(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(a,ds),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ki(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(a,ds)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mi-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):mi;m>mi&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let y=0;for(let R=0;R<mi;++R){const x=R/M,w=Math.exp(-x*x/2);p.push(w),R===0?y+=w:R<m&&(y+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const v=this._sizeLods[s],T=3*v*(s>b-ni?s-b+ni:0),E=4*(this._cubeSize-v);ki(t,T,E,3*v,2*v),l.setRenderTarget(t),l.render(d,ds)}}function P0(i){const e=[],t=[],n=[];let s=i;const r=i-ni+1+Ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ni?l=Ec[o-i+ni-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,M=3,m=2,p=1,y=new Float32Array(M*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,x=E>2?0:-1,w=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];y.set(w,M*g*E),b.set(u,m*g*E);const C=[E,E,E,E,E,E];v.set(C,p*g*E)}const T=new At;T.setAttribute("position",new _n(y,M)),T.setAttribute("uv",new _n(b,m)),T.setAttribute("faceIndex",new _n(v,p)),n.push(new Ve(T,null)),s>ni&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ac(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function L0(i,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function I0(i,e,t){const n=new Float32Array(mi),s=new L(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Rc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Cc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Vr(){return`

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
	`}class iu extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ht(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:On});r.uniforms.tEquirect.value=t;const o=new Ve(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=Gt),new Of(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function D0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Kr||f===Zr)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new iu(g.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===Kr||f===Zr,M=f===vi||f===Ki;if(g||M){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Tc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new Tc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Kr?u.mapping=vi:f===Zr&&(u.mapping=Ki),u}function l(u){let f=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function U0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function N0(i,e,t,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(f!==null){const y=f.array;M=f.version;for(let b=0,v=y.length;b<v;b+=3){const T=y[b+0],E=y[b+1],R=y[b+2];u.push(T,E,E,R,R,T)}}else{const y=g.array;M=g.version;for(let b=0,v=y.length/3-1;b<v;b+=3){const T=b+0,E=b+1,R=b+2;u.push(T,E,E,R,R,T)}}const m=new(g.count>=65535?$h:qh)(u,1);m.version=M;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function F0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function O0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),M===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*E*4*d),x=new Wh(R,T,E,d);x.type=mn,x.needsUpdate=!0;const w=v*4;for(let P=0;P<d;P++){const I=p[P],W=y[P],K=b[P],B=T*E*4*P;for(let $=0;$<I.count;$++){const G=$*w;g===!0&&(s.fromBufferAttribute(I,$),R[B+G+0]=s.x,R[B+G+1]=s.y,R[B+G+2]=s.z,R[B+G+3]=0),M===!0&&(s.fromBufferAttribute(W,$),R[B+G+4]=s.x,R[B+G+5]=s.y,R[B+G+6]=s.z,R[B+G+7]=0),m===!0&&(s.fromBufferAttribute(K,$),R[B+G+8]=s.x,R[B+G+9]=s.y,R[B+G+10]=s.z,R[B+G+11]=K.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ze(T,E)},n.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function k0(i,e,t,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const z0={[Ch]:"LINEAR_TONE_MAPPING",[Ph]:"REINHARD_TONE_MAPPING",[Lh]:"CINEON_TONE_MAPPING",[Ih]:"ACES_FILMIC_TONE_MAPPING",[Uh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Dh]:"CUSTOM_TONE_MAPPING"};function G0(i,e,t,n,s,r){const o=new Rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Zi(e,t):void 0}),a=new Rn(e,t,{type:kn,depthBuffer:!1,stencilBuffer:!1}),l=new At;l.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new He([0,2,0,0,2,0],2));const c=new Pf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ve(l,c),d=new Hr(-1,1,1,-1,0,1);let u=null,f=null,g=!1,M,m=null,p=[],y=!1;this.setSize=function(b,v){o.setSize(b,v),a.setSize(b,v);for(let T=0;T<p.length;T++){const E=p[T];E.setSize&&E.setSize(b,v)}},this.setEffects=function(b){p=b,y=p.length>0&&p[0].isRenderPass===!0;const v=o.width,T=o.height;for(let E=0;E<p.length;E++){const R=p[E];R.setSize&&R.setSize(v,T)}},this.begin=function(b,v){if(g||b.toneMapping===An&&p.length===0)return!1;if(m=v,v!==null){const T=v.width,E=v.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return y===!1&&b.setRenderTarget(o),M=b.toneMapping,b.toneMapping=An,!0},this.hasRenderPass=function(){return y},this.end=function(b,v){b.toneMapping=M,g=!0;let T=o,E=a;for(let R=0;R<p.length;R++){const x=p[R];if(x.enabled!==!1&&(x.render(b,E,T,v),x.needsSwap!==!1)){const w=T;T=E,E=w}}if(u!==b.outputColorSpace||f!==b.toneMapping){u=b.outputColorSpace,f=b.toneMapping,c.defines={},Xe.getTransfer(u)===rt&&(c.defines.SRGB_TRANSFER="");const R=z0[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const su=new Vt,Pa=new Zi(1,1),ru=new Wh,ou=new nf,au=new Zh,Pc=[],Lc=[],Ic=new Float32Array(16),Dc=new Float32Array(9),Uc=new Float32Array(4);function is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Pc[s];if(r===void 0&&(r=new Float32Array(s),Pc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wr(i,e){let t=Lc[e];t===void 0&&(t=new Int32Array(e),Lc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Uc.set(n),i.uniformMatrix2fv(this.addr,!1,Uc),Pt(t,n)}}function $0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),Pt(t,n)}}function Y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ic.set(n),i.uniformMatrix4fv(this.addr,!1,Ic),Pt(t,n)}}function K0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function j0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pa.compareFunction=t.isReversedDepthBuffer()?el:ja,r=Pa):r=su,t.setTexture2D(e||r,s)}function sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ou,s)}function rg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||au,s)}function og(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ru,s)}function ag(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return $0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return j0;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function lg(i,e){i.uniform1fv(this.addr,e)}function cg(i,e){const t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function hg(i,e){const t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function ug(i,e){const t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function dg(i,e){const t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fg(i,e){const t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pg(i,e){const t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function xg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function vg(i,e){i.uniform1uiv(this.addr,e)}function Mg(i,e){i.uniform2uiv(this.addr,e)}function yg(i,e){i.uniform3uiv(this.addr,e)}function Sg(i,e){i.uniform4uiv(this.addr,e)}function bg(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Pa:o=su;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Eg(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ou,r[o])}function wg(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||au,r[o])}function Tg(i,e,t){const n=this.cache,s=e.length,r=Wr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ru,r[o])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return Mg;case 36295:return yg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ag(t.type)}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ag(t.type)}}class Pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Nc(i,e){i.seq.push(e),i.map[e.id]=e}function Lg(i,e,t){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),o=Co.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nc(t,c===void 0?new Rg(a,i,e):new Cg(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Pg(a),Nc(t,d)),t=d}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Lg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Fc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ig=37297;let Dg=0;function Ug(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Oc=new Ue;function Ng(i){Xe._getMatrix(Oc,Xe.workingColorSpace,i);const e=`mat3( ${Oc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ug(i.getShaderSource(e),a)}else return r}function Fg(i,e){const t=Ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Og={[Ch]:"Linear",[Ph]:"Reinhard",[Lh]:"Cineon",[Ih]:"ACESFilmic",[Uh]:"AgX",[Nh]:"Neutral",[Dh]:"Custom"};function Bg(i,e){const t=Og[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new L;function kg(){Xe.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Gg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function gs(i){return i!==""}function kc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Vg,Xg)}const Wg=new Map;function Xg(i,e){let t=ke[e];if(t===void 0){const n=Wg.get(e);if(n!==void 0)t=ke[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return La(t)}const qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(qg,$g)}function $g(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Yg={[gr]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};function Kg(i){return Yg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zg={[vi]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function Jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qg={[Ki]:"ENVMAP_MODE_REFRACTION"};function jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ex={[Xa]:"ENVMAP_BLENDING_MULTIPLY",[Nd]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ex[i.combine]||"ENVMAP_BLENDING_NONE"}function nx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ix(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Kg(t),c=Jg(t),h=jg(t),d=tx(t),u=nx(t),f=zg(t),g=Gg(r),M=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?ke.tonemapping_pars_fragment:"",t.toneMapping!==An?Bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Fg("linearToOutputTexel",t.outputColorSpace),kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=La(o),o=kc(o,t),o=zc(o,t),a=La(a),a=kc(a,t),a=zc(a,t),o=Gc(o),a=Gc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+o,v=y+p+a,T=Fc(s,s.VERTEX_SHADER,b),E=Fc(s,s.FRAGMENT_SHADER,v);s.attachShader(M,T),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(T)||"",K=s.getShaderInfoLog(E)||"",B=I.trim(),$=W.trim(),G=K.trim();let j=!0,te=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,E);else{const re=Bc(s,T,"vertex"),ue=Bc(s,E,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+re+`
`+ue)}else B!==""?Ie("WebGLProgram: Program Info Log:",B):($===""||G==="")&&(te=!1);te&&(P.diagnostics={runnable:j,programLog:B,vertexShader:{log:$,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(T),s.deleteShader(E),x=new Sr(s,M),w=Hg(s,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,Ig)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dg++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}let sx=0;class rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ox(e),t.set(e,n)),n}}class ox{constructor(e){this.id=sx++,this.code=e,this.usedTimes=0}}function ax(i){return i===Mi||i===wr||i===Tr}function lx(i,e,t,n,s,r){const o=new nl,a=new rx,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,C,P,I,W){const K=P.fog,B=I.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||$,G),te=j&&j.mapping===zr?j.image.height:null,re=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=ue!==void 0?ue.length:0;let et=0;B.morphAttributes.position!==void 0&&(et=1),B.morphAttributes.normal!==void 0&&(et=2),B.morphAttributes.color!==void 0&&(et=3);let mt,tt,Q,oe;if(re){const Se=En[re];mt=Se.vertexShader,tt=Se.fragmentShader}else{mt=x.vertexShader,tt=x.fragmentShader;const Se=a.getVertexShaderStage(x),xt=a.getFragmentShaderStage(x);a.update(x,Se,xt),Q=Se.id,oe=xt.id}const ne=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Pe=I.isBatchedMesh===!0,yt=!!x.map,We=!!x.matcap,at=!!j,nt=!!x.aoMap,Je=!!x.lightMap,Et=!!x.bumpMap&&x.wireframe===!1,Rt=!!x.normalMap,Lt=!!x.displacementMap,Ft=!!x.emissiveMap,gt=!!x.metalnessMap,wt=!!x.roughnessMap,U=x.anisotropy>0,qt=x.clearcoat>0,st=x.dispersion>0,A=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,H=U&&!!x.anisotropyMap,q=qt&&!!x.clearcoatMap,ie=qt&&!!x.clearcoatNormalMap,ae=qt&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,le=_&&!!x.sheenColorMap,Te=_&&!!x.sheenRoughnessMap,de=!!x.specularMap,ce=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Le=O&&!!x.transmissionMap,Oe=O&&!!x.thicknessMap,D=!!x.gradientMap,se=!!x.alphaMap,Z=x.alphaTest>0,he=!!x.alphaHash,ge=!!x.extensions;let ee=An;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ee=i.toneMapping);const we={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:mt,fragmentShader:tt,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:yt,matcap:We,envMap:at,envMapMode:at&&j.mapping,envMapCubeUVHeight:te,aoMap:nt,lightMap:Je,bumpMap:Et,normalMap:Rt,displacementMap:Lt,emissiveMap:Ft,normalMapObjectSpace:Rt&&x.normalMapType===kd,normalMapTangentSpace:Rt&&x.normalMapType===Aa,packedNormalMap:Rt&&x.normalMapType===Aa&&ax(x.normalMap.format),metalnessMap:gt,roughnessMap:wt,anisotropy:U,anisotropyMap:H,clearcoat:qt,clearcoatMap:q,clearcoatNormalMap:ie,clearcoatRoughnessMap:ae,dispersion:st,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:_,sheenColorMap:le,sheenRoughnessMap:Te,specularMap:de,specularColorMap:ce,specularIntensityMap:Ce,transmission:O,transmissionMap:Le,thicknessMap:Oe,gradientMap:D,opaque:x.transparent===!1&&x.blending===Wi&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:Z,alphaHash:he,combine:x.combine,mapUv:yt&&g(x.map.channel),aoMapUv:nt&&g(x.aoMap.channel),lightMapUv:Je&&g(x.lightMap.channel),bumpMapUv:Et&&g(x.bumpMap.channel),normalMapUv:Rt&&g(x.normalMap.channel),displacementMapUv:Lt&&g(x.displacementMap.channel),emissiveMapUv:Ft&&g(x.emissiveMap.channel),metalnessMapUv:gt&&g(x.metalnessMap.channel),roughnessMapUv:wt&&g(x.roughnessMap.channel),anisotropyMapUv:H&&g(x.anisotropyMap.channel),clearcoatMapUv:q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(x.sheenRoughnessMap.channel),specularMapUv:de&&g(x.specularMap.channel),specularColorMapUv:ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Ce&&g(x.specularIntensityMap.channel),transmissionMapUv:Le&&g(x.transmissionMap.channel),thicknessMapUv:Oe&&g(x.thicknessMap.channel),alphaMapUv:se&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Rt||U),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(yt||se),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:yt&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){const w=f[x.type];let C;if(w){const P=En[w];C=Af.clone(P.uniforms)}else C=x.uniforms;return C}function v(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new ix(i,w,x,s),c.push(C),h.set(w,C)),C}function T(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:R}}function cx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,M,m,p){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,g,M,m,p){const y=a(u,f,g,M,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function c(u,f,g,M,m,p){const y=a(u,f,g,M,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f,g){t.length>1&&t.sort(u||hx),n.length>1&&n.sort(f||Vc),s.length>1&&s.sort(f||Vc),g&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ux(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Wc,i.set(n,[o])):s>=r.length?(o=new Wc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new be};break;case"SpotLight":t={position:new L,direction:new L,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function fx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let px=0;function mx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gx(i){const e=new dx,t=fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new je,o=new je;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,y=0,b=0,v=0,T=0,E=0,R=0;c.sort(mx);for(let w=0,C=c.length;w<C;w++){const P=c[w],I=P.color,W=P.intensity,K=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Mi?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*W,d+=I.g*W,u+=I.b*W;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],W);R++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,j=t.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=$,f++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(I).multiplyScalar(W),$.distance=K,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[M]=$;const G=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,G.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[M]=G.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=B,v++}M++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(I).multiplyScalar(W),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=$,m++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const G=P.shadow,j=t.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=$,g++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(W),$.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==v||x.numSpotMaps!==T||x.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,x.directionalLength=f,x.pointLength=g,x.spotLength=M,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=v,x.numSpotMaps=T,x.numLightProbes=R,n.version=px++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const v=n.hemi[M];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Xc(i){const e=new gx(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function xx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xc(i),e.set(s,[a])):r>=o.length?(a=new Xc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`,Mx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],yx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qc=new je,fs=new L,Po=new L;function Sx(i,e,t){let n=new rl;const s=new ze,r=new ze,o=new pt,a=new Lf,l=new If,c={},h=t.maxTextureSize,d={[oi]:Kt,[Kt]:oi,[ln]:ln},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:_x,fragmentShader:vx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ve(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let p=this.type;this.render=function(E,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Rh&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gr);const w=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(On),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=p!==this.type;W&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(B=>B.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,B=E.length;K<B;K++){const $=E[K],G=$.shadow;if(G===void 0){Ie("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));const te=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=te,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ms){if($.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Rn(s.x,s.y,{format:Mi,type:kn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new Zi(s.x,s.y,mn),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=zn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut}else $.isPointLight?(G.map=new iu(s.x),G.map.depthTexture=new Ef(s.x,Cn)):(G.map=new Rn(s.x,s.y),G.map.depthTexture=new Zi(s.x,s.y,Cn)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=zn,this.type===gr?(G.map.depthTexture.compareFunction=te?el:ja,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut);G.camera.updateProjectionMatrix()}const re=G.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<re;ue++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ue),i.clear();else{ue===0&&(i.setRenderTarget(G.map),i.clear());const ve=G.getViewport(ue);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),I.viewport(o)}if($.isPointLight){const ve=G.camera,et=G.matrix,mt=$.distance||ve.far;mt!==ve.far&&(ve.far=mt,ve.updateProjectionMatrix()),fs.setFromMatrixPosition($.matrixWorld),ve.position.copy(fs),Po.copy(ve.position),Po.add(Mx[ue]),ve.up.copy(yx[ue]),ve.lookAt(Po),ve.updateMatrixWorld(),et.makeTranslation(-fs.x,-fs.y,-fs.z),qc.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),G._frustum.setFromProjectionMatrix(qc,ve.coordinateSystem,ve.reversedDepth)}else G.updateMatrices($);n=G.getFrustum(),v(R,x,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===ms&&y(G,x),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,P)};function y(E,R){const x=e.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(s.x,s.y,{format:Mi,type:kn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,x,u,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,x,f,M,null)}function b(E,R,x,w){let C=null;const P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=C.uuid,W=R.uuid;let K=c[I];K===void 0&&(K={},c[I]=K);let B=K[W];B===void 0&&(B=C.clone(),K[W]=B,R.addEventListener("dispose",T)),C=B}if(C.visible=R.visible,C.wireframe=R.wireframe,w===ms?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=i.properties.get(C);I.light=x}return C}function v(E,R,x,w,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ms)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const W=e.update(E),K=E.material;if(Array.isArray(K)){const B=W.groups;for(let $=0,G=B.length;$<G;$++){const j=B[$],te=K[j.materialIndex];if(te&&te.visible){const re=b(E,te,w,C);E.onBeforeShadow(i,E,R,x,W,re,j),i.renderBufferDirect(x,null,W,re,E,j),E.onAfterShadow(i,E,R,x,W,re,j)}}}else if(K.visible){const B=b(E,K,w,C);E.onBeforeShadow(i,E,R,x,W,B,null),i.renderBufferDirect(x,null,W,B,E,null),E.onAfterShadow(i,E,R,x,W,B,null)}}const I=E.children;for(let W=0,K=I.length;W<K;W++)v(I[W],R,x,w,C)}function T(E){E.target.removeEventListener("dispose",T);for(const x in c){const w=c[x],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function bx(i,e){function t(){let D=!1;const se=new pt;let Z=null;const he=new pt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!D&&(i.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){D=ge},setClear:function(ge,ee,we,Se,xt){xt===!0&&(ge*=Se,ee*=Se,we*=Se),se.set(ge,ee,we,Se),he.equals(se)===!1&&(i.clearColor(ge,ee,we,Se),he.copy(se))},reset:function(){D=!1,Z=null,he.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,Z=null,he=null,ge=null;return{setReversed:function(ee){if(se!==ee){const we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Se=ge;ge=null,this.setClear(Se)}},getReversed:function(){return se},setTest:function(ee){ee?ne(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ee){Z!==ee&&!D&&(i.depthMask(ee),Z=ee)},setFunc:function(ee){if(se&&(ee=Kd[ee]),he!==ee){switch(ee){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ee}},setLocked:function(ee){D=ee},setClear:function(ee){ge!==ee&&(ge=ee,se&&(ee=1-ee),i.clearDepth(ee))},reset:function(){D=!1,Z=null,he=null,ge=null,se=!1}}}function s(){let D=!1,se=null,Z=null,he=null,ge=null,ee=null,we=null,Se=null,xt=null;return{setTest:function(dt){D||(dt?ne(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(dt){se!==dt&&!D&&(i.stencilMask(dt),se=dt)},setFunc:function(dt,vn,Mn){(Z!==dt||he!==vn||ge!==Mn)&&(i.stencilFunc(dt,vn,Mn),Z=dt,he=vn,ge=Mn)},setOp:function(dt,vn,Mn){(ee!==dt||we!==vn||Se!==Mn)&&(i.stencilOp(dt,vn,Mn),ee=dt,we=vn,Se=Mn)},setLocked:function(dt){D=dt},setClear:function(dt){xt!==dt&&(i.clearStencil(dt),xt=dt)},reset:function(){D=!1,se=null,Z=null,he=null,ge=null,ee=null,we=null,Se=null,xt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,b=null,v=null,T=null,E=null,R=null,x=new be(0,0,0),w=0,C=!1,P=null,I=null,W=null,K=null,B=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),G=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),G=j>=2);let re=null,ue={};const ve=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),mt=new pt().fromArray(ve),tt=new pt().fromArray(et);function Q(D,se,Z,he){const ge=new Uint8Array(4),ee=i.createTexture();i.bindTexture(D,ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<Z;we++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(se+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ee}const oe={};oe[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Yi),Et(!1),Rt(Bl),ne(i.CULL_FACE),nt(On);function ne(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function De(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Fe(D,se){return u[D]!==se?(i.bindFramebuffer(D,se),u[D]=se,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Pe(D,se){let Z=g,he=!1;if(D){Z=f.get(se),Z===void 0&&(Z=[],f.set(se,Z));const ge=D.textures;if(Z.length!==ge.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,we=ge.length;ee<we;ee++)Z[ee]=i.COLOR_ATTACHMENT0+ee;Z.length=ge.length,he=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,he=!0);he&&i.drawBuffers(Z)}function yt(D){return M!==D?(i.useProgram(D),M=D,!0):!1}const We={[pi]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};We[Md]=i.MIN,We[yd]=i.MAX;const at={[Sd]:i.ZERO,[bd]:i.ONE,[Ed]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[Td]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Cd]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Id]:i.ONE_MINUS_CONSTANT_COLOR,[Dd]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(D,se,Z,he,ge,ee,we,Se,xt,dt){if(D===On){m===!0&&(De(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),D!==xd){if(D!==p||dt!==C){if((y!==pi||T!==pi)&&(i.blendEquation(i.FUNC_ADD),y=pi,T=pi),dt)switch(D){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",D);break}else switch(D){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",D);break}b=null,v=null,E=null,R=null,x.set(0,0,0),w=0,p=D,C=dt}return}ge=ge||se,ee=ee||Z,we=we||he,(se!==y||ge!==T)&&(i.blendEquationSeparate(We[se],We[ge]),y=se,T=ge),(Z!==b||he!==v||ee!==E||we!==R)&&(i.blendFuncSeparate(at[Z],at[he],at[ee],at[we]),b=Z,v=he,E=ee,R=we),(Se.equals(x)===!1||xt!==w)&&(i.blendColor(Se.r,Se.g,Se.b,xt),x.copy(Se),w=xt),p=D,C=!1}function Je(D,se){D.side===ln?De(i.CULL_FACE):ne(i.CULL_FACE);let Z=D.side===Kt;se&&(Z=!Z),Et(Z),D.blending===Wi&&D.transparent===!1?nt(On):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const he=D.stencilWrite;a.setTest(he),he&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function Rt(D){D!==md?(ne(i.CULL_FACE),D!==I&&(D===Bl?i.cullFace(i.BACK):D===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),I=D}function Lt(D){D!==W&&(G&&i.lineWidth(D),W=D)}function Ft(D,se,Z){D?(ne(i.POLYGON_OFFSET_FILL),(K!==se||B!==Z)&&(K=se,B=Z,o.getReversed()&&(se=-se),i.polygonOffset(se,Z))):De(i.POLYGON_OFFSET_FILL)}function gt(D){D?ne(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function wt(D){D===void 0&&(D=i.TEXTURE0+$-1),re!==D&&(i.activeTexture(D),re=D)}function U(D,se,Z){Z===void 0&&(re===null?Z=i.TEXTURE0+$-1:Z=re);let he=ue[Z];he===void 0&&(he={type:void 0,texture:void 0},ue[Z]=he),(he.type!==D||he.texture!==se)&&(re!==Z&&(i.activeTexture(Z),re=Z),i.bindTexture(D,se||oe[D]),he.type=D,he.texture=se)}function qt(){const D=ue[re];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function _(){try{i.texSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function O(){try{i.texSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function ie(){try{i.texStorage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function ae(){try{i.texStorage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function J(){try{i.texImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function le(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function Te(D,se){d[D]!==se&&(i.pixelStorei(D,se),d[D]=se)}function de(D){mt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),mt.copy(D))}function ce(D){tt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),tt.copy(D))}function Ce(D,se){let Z=c.get(se);Z===void 0&&(Z=new WeakMap,c.set(se,Z));let he=Z.get(D);he===void 0&&(he=i.getUniformBlockIndex(se,D.name),Z.set(D,he))}function Le(D,se){const he=c.get(se).get(D);l.get(se)!==he&&(i.uniformBlockBinding(se,he,D.__bindingPointIndex),l.set(se,he))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},re=null,ue={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,b=null,v=null,T=null,E=null,R=null,x=new be(0,0,0),w=0,C=!1,P=null,I=null,W=null,K=null,B=null,mt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:De,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:yt,setBlending:nt,setMaterial:Je,setFlipSided:Et,setCullFace:Rt,setLineWidth:Lt,setPolygonOffset:Ft,setScissorTest:gt,activeTexture:wt,bindTexture:U,unbindTexture:qt,compressedTexImage2D:st,compressedTexImage3D:A,texImage2D:Y,texImage3D:J,pixelStorei:Te,getParameter:le,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:ie,texStorage3D:ae,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:de,viewport:ce,reset:Oe}}function Ex(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return g?new OffscreenCanvas(A,_):Cr("canvas")}function m(A,_,O){let H=1;const q=st(A);if((q.width>O||q.height>O)&&(H=O/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(H*q.width),ae=Math.floor(H*q.height);u===void 0&&(u=M(ie,ae));const Y=_?M(ie,ae):u;return Y.width=ie,Y.height=ae,Y.getContext("2d").drawImage(A,0,0,ie,ae),Ie("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+ae+")."),Y}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,_,O,H,q,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&ae&&(Y=ae.R16_EXT),O===i.SHORT&&ae&&(Y=ae.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&ae&&(Y=ae.RG16_EXT),O===i.SHORT&&ae&&(Y=ae.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&ae&&(Y=ae.RGB16_EXT),O===i.SHORT&&ae&&(Y=ae.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const J=ie?Rr:Xe.getTransfer(q);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=J===rt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ae&&(Y=ae.RGBA16_EXT),O===i.SHORT&&ae&&(Y=ae.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(A,_){let O;return A?_===null||_===Cn||_===Ts?O=i.DEPTH24_STENCIL8:_===mn?O=i.DEPTH32F_STENCIL8:_===ws&&(O=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===Ts?O=i.DEPTH_COMPONENT24:_===mn?O=i.DEPTH_COMPONENT32F:_===ws&&(O=i.DEPTH_COMPONENT16),O}function E(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),P(_)}function w(A){const _=n.get(A);if(_.__webglInit===void 0)return;const O=A.source,H=f.get(O);if(H){const q=H[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(A),Object.keys(H).length===0&&f.delete(O)}n.remove(A)}function C(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const O=A.source,H=f.get(O);delete H[_.__cacheKey],o.memory.textures--}function P(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let q=0;q<_.__webglFramebuffer[H].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[H][q]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let H=0,q=O.length;H<q;H++){const ie=n.get(O[H]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(O[H])}n.remove(A)}let I=0;function W(){I=0}function K(){return I}function B(A){I=A}function $(){const A=I;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function G(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function j(A,_){const O=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const H=A.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{De(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function te(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){De(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function re(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){De(O,A,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ue(A,_){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Fe(O,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const ve={[Es]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},et={[Ut]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},mt={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Gd]:i.LESS,[ja]:i.LEQUAL,[Hd]:i.EQUAL,[el]:i.GEQUAL,[Vd]:i.GREATER,[Wd]:i.NOTEQUAL};function tt(A,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===Jr||_.magFilter===Bs||_.magFilter===ti||_.minFilter===Gt||_.minFilter===Jr||_.minFilter===Bs||_.minFilter===ti)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ve[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ve[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ve[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,et[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,mt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==Bs&&_.minFilter!==ti||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Q(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const H=_.source;let q=f.get(H);q===void 0&&(q={},f.set(H,q));const ie=G(_);if(ie!==A.__cacheKey){q[ie]===void 0&&(q[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),q[ie].usedTimes++;const ae=q[A.__cacheKey];ae!==void 0&&(q[A.__cacheKey].usedTimes--,ae.usedTimes===0&&C(_)),A.__cacheKey=ie,A.__webglTexture=q[ie].texture}return O}function oe(A,_,O){return Math.floor(Math.floor(A/O)/_)}function ne(A,_,O,H){const ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,H,_.data);else{ie.sort((Te,de)=>Te.start-de.start);let ae=0;for(let Te=1;Te<ie.length;Te++){const de=ie[ae],ce=ie[Te],Ce=de.start+de.count,Le=oe(ce.start,_.width,4),Oe=oe(de.start,_.width,4);ce.start<=Ce+1&&Le===Oe&&oe(ce.start+ce.count-1,_.width,4)===Le?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++ae,ie[ae]=ce)}ie.length=ae+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Te=0,de=ie.length;Te<de;Te++){const ce=ie[Te],Ce=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),Oe=Ce%_.width,D=Math.floor(Ce/_.width),se=Le,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Oe,D,se,Z,O,H,_.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function De(A,_,O){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);const q=Q(A,_),ie=_.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+O);const ae=n.get(ie);if(ie.version!==ae.__version||q===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Z=Xe.getPrimaries(Xe.workingColorSpace),he=_.colorSpace===ei?null:Xe.getPrimaries(_.colorSpace),ge=_.colorSpace===ei||Z===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let J=m(_.image,!1,s.maxTextureSize);J=qt(_,J);const le=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let de=v(_.internalFormat,le,Te,_.normalized,_.colorSpace,_.isVideoTexture);tt(H,_);let ce;const Ce=_.mipmaps,Le=_.isVideoTexture!==!0,Oe=ae.__version===void 0||q===!0,D=ie.dataReady,se=E(_,J);if(_.isDepthTexture)de=T(_.format===gi,_.type),Oe&&(Le?t.texStorage2D(i.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,le,Te,null));else if(_.isDataTexture)if(Ce.length>0){Le&&Oe&&t.texStorage2D(i.TEXTURE_2D,se,de,Ce[0].width,Ce[0].height);for(let Z=0,he=Ce.length;Z<he;Z++)ce=Ce[Z],Le?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Te,ce.data);_.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(i.TEXTURE_2D,se,de,J.width,J.height),D&&ne(_,J,le,Te)):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,le,Te,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,de,Ce[0].width,Ce[0].height,J.depth);for(let Z=0,he=Ce.length;Z<he;Z++)if(ce=Ce[Z],_.format!==gn)if(le!==null)if(Le){if(D)if(_.layerUpdates.size>0){const ge=bc(ce.width,ce.height,_.format,_.type);for(const ee of _.layerUpdates){const we=ce.data.subarray(ee*ge/ce.data.BYTES_PER_ELEMENT,(ee+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ee,ce.width,ce.height,1,le,we)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,le,Te,ce.data)}else{Le&&Oe&&t.texStorage2D(i.TEXTURE_2D,se,de,Ce[0].width,Ce[0].height);for(let Z=0,he=Ce.length;Z<he;Z++)ce=Ce[Z],_.format!==gn?le!==null?Le?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,ce.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(i.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Te,ce.data)}else if(_.isDataArrayTexture)if(Le){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,de,J.width,J.height,J.depth),D)if(_.layerUpdates.size>0){const Z=bc(J.width,J.height,_.format,_.type);for(const he of _.layerUpdates){const ge=J.data.subarray(he*Z/J.data.BYTES_PER_ELEMENT,(he+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,le,Te,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,Te,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,le,Te,J.data);else if(_.isData3DTexture)Le?(Oe&&t.texStorage3D(i.TEXTURE_3D,se,de,J.width,J.height,J.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,Te,J.data)):t.texImage3D(i.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,le,Te,J.data);else if(_.isFramebufferTexture){if(Oe)if(Le)t.texStorage2D(i.TEXTURE_2D,se,de,J.width,J.height);else{let Z=J.width,he=J.height;for(let ge=0;ge<se;ge++)t.texImage2D(i.TEXTURE_2D,ge,de,Z,he,0,le,Te,null),Z>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(_),Z.onpaint=he=>{const ge=he.changedElements;for(const ee of d)ge.includes(ee.image)&&(ee.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const ge=i.RGBA,ee=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ee,we,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Le&&Oe){const Z=st(Ce[0]);t.texStorage2D(i.TEXTURE_2D,se,de,Z.width,Z.height)}for(let Z=0,he=Ce.length;Z<he;Z++)ce=Ce[Z],Le?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le,Te,ce):t.texImage2D(i.TEXTURE_2D,Z,de,le,Te,ce);_.generateMipmaps=!1}else if(Le){if(Oe){const Z=st(J);t.texStorage2D(i.TEXTURE_2D,se,de,Z.width,Z.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Te,J)}else t.texImage2D(i.TEXTURE_2D,0,de,le,Te,J);p(_)&&y(H),ae.__version=ie.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Fe(A,_,O){if(_.image.length!==6)return;const H=Q(A,_),q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const ie=n.get(q);if(q.version!==ie.__version||H===!0){t.activeTexture(i.TEXTURE0+O);const ae=Xe.getPrimaries(Xe.workingColorSpace),Y=_.colorSpace===ei?null:Xe.getPrimaries(_.colorSpace),J=_.colorSpace===ei||ae===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!le&&!Te?de[ee]=m(_.image[ee],!0,s.maxCubemapSize):de[ee]=Te?_.image[ee].image:_.image[ee],de[ee]=qt(_,de[ee]);const ce=de[0],Ce=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),Oe=v(_.internalFormat,Ce,Le,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,se=ie.__version===void 0||H===!0,Z=q.dataReady;let he=E(_,ce);tt(i.TEXTURE_CUBE_MAP,_);let ge;if(le){D&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Oe,ce.width,ce.height);for(let ee=0;ee<6;ee++){ge=de[ee].mipmaps;for(let we=0;we<ge.length;we++){const Se=ge[we];_.format!==gn?Ce!==null?D?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Oe,Se.width,Se.height,0,Se.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Se.width,Se.height,Ce,Le,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Oe,Se.width,Se.height,0,Ce,Le,Se.data)}}}else{if(ge=_.mipmaps,D&&se){ge.length>0&&he++;const ee=st(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Ce,Le,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,de[ee].width,de[ee].height,0,Ce,Le,de[ee].data);for(let we=0;we<ge.length;we++){const xt=ge[we].image[ee].image;D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,xt.width,xt.height,Ce,Le,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Oe,xt.width,xt.height,0,Ce,Le,xt.data)}}else{D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Le,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Ce,Le,de[ee]);for(let we=0;we<ge.length;we++){const Se=ge[we];D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Ce,Le,Se.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Oe,Ce,Le,Se.image[ee])}}}p(_)&&y(i.TEXTURE_CUBE_MAP),ie.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Pe(A,_,O,H,q,ie){const ae=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),J=v(O.internalFormat,ae,Y,O.normalized,O.colorSpace),le=n.get(_),Te=n.get(O);if(Te.__renderTarget=_,!le.__hasExternalTextures){const de=Math.max(1,_.width>>ie),ce=Math.max(1,_.height>>ie);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,J,de,ce,_.depth,0,ae,Y,null):t.texImage2D(q,ie,J,de,ce,0,ae,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),wt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,q,Te.__webglTexture,0,gt(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,q,Te.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(A,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const H=_.depthTexture,q=H&&H.isDepthTexture?H.type:null,ie=T(_.stencilBuffer,q),ae=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),ie,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,A)}else{const H=_.textures;for(let q=0;q<H.length;q++){const ie=H[q],ae=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),J=v(ie.internalFormat,ae,Y,ie.normalized,ie.colorSpace);wt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),J,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(A,_,O){const H=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),tt(i.TEXTURE_CUBE_MAP,_.depthTexture);const le=r.convert(_.depthTexture.format),Te=r.convert(_.depthTexture.type);let de;_.depthTexture.format===zn?de=i.DEPTH_COMPONENT24:_.depthTexture.format===gi&&(de=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,_.width,_.height,0,le,Te,null)}}else j(_.depthTexture,0);const ie=q.__webglTexture,ae=gt(_),Y=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,J=_.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===zn)wt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,ie,0);else if(_.depthTexture.format===gi)wt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(A){const _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=H}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)We(_.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?We(_.__webglFramebuffer[0],A,0):We(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),yt(_.__webglDepthbuffer[H],A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),yt(_.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(A,_,O){const H=n.get(A);_!==void 0&&Pe(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&at(A)}function Je(A){const _=A.texture,O=n.get(A),H=n.get(_);A.addEventListener("dispose",x);const q=A.textures,ie=A.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,o.memory.textures++),ie){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[Y][J]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ae)for(let Y=0,J=q.length;Y<J;Y++){const le=n.get(q[Y]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&wt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){const J=q[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const le=r.convert(J.format,J.colorSpace),Te=r.convert(J.type),de=v(J.internalFormat,le,Te,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ce=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),tt(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Pe(O.__webglFramebuffer[Y][J],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Pe(O.__webglFramebuffer[Y],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Y=0,J=q.length;Y<J;Y++){const le=q[Y],Te=n.get(le);let de=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),tt(de,le),Pe(O.__webglFramebuffer,A,le,i.COLOR_ATTACHMENT0+Y,de,0),p(le)&&y(de)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,H.__webglTexture),tt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Pe(O.__webglFramebuffer[J],A,_,i.COLOR_ATTACHMENT0,Y,J);else Pe(O.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&y(Y),t.unbindTexture()}A.depthBuffer&&at(A)}function Et(A){const _=A.textures;for(let O=0,H=_.length;O<H;O++){const q=_[O];if(p(q)){const ie=b(A),ae=n.get(q).__webglTexture;t.bindTexture(ie,ae),y(ie),t.unbindTexture()}}}const Rt=[],Lt=[];function Ft(A){if(A.samples>0){if(wt(A)===!1){const _=A.textures,O=A.width,H=A.height;let q=i.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(A),Y=_.length>1;if(Y)for(let le=0;le<_.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<_.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Te=n.get(_[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,q,i.NEAREST),l===!0&&(Rt.length=0,Lt.length=0,Rt.push(i.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Rt.push(ie),Lt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<_.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Te=n.get(_[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function gt(A){return Math.min(s.maxSamples,A.samples)}function wt(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(A){const _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function qt(A,_){const O=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ar&&O!==ei&&(Xe.getTransfer(O)===rt?(H!==gn||q!==jt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",O)),_}function st(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.getTextureUnits=K,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=ue,this.rebindTextures=nt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wx(i,e){function t(n,s=ei){let r;const o=Xe.getTransfer(s);if(n===jt)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===gn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Ka)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===xr||n===_r||n===vr||n===Mr)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Qo||n===jo||n===ea)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===na||n===ia||n===sa||n===ra||n===wr||n===oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===na)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sa)return r.COMPRESSED_R11_EAC;if(n===ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return r.COMPRESSED_RG11_EAC;if(n===oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===Ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===la)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ca)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ga)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Sa||n===ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===wa||n===Tr||n===Ta)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ax=`
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

}`;class Rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Jh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:Tx,fragmentShader:Ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cx extends yi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Rx,p={},y=t.getContextAttributes();let b=null,v=null;const T=[],E=[],R=new ze;let x=null;const w=new an;w.viewport=new pt;const C=new an;C.viewport=new pt;const P=[w,C],I=new Bf;let W=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=T[Q];return oe===void 0&&(oe=new so,T[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=T[Q];return oe===void 0&&(oe=new so,T[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=T[Q];return oe===void 0&&(oe=new so,T[Q]=oe),oe.getHandSpace()};function B(Q){const oe=E.indexOf(Q.inputSource);if(oe===-1)return;const ne=T[oe];ne!==void 0&&(ne.update(Q.inputSource,Q.frame,c||o),ne.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",G);for(let Q=0;Q<T.length;Q++){const oe=E[Q];oe!==null&&(E[Q]=null,T[Q].disconnect(oe))}W=null,K=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(b),f=null,u=null,d=null,s=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,De=null,Fe=null;y.depth&&(Fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?gi:zn,De=y.stencil?Ts:Cn);const Pe={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Pe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Rn(u.textureWidth,u.textureHeight,{format:gn,type:jt,depthTexture:new Zi(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Rn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Q){for(let oe=0;oe<Q.removed.length;oe++){const ne=Q.removed[oe],De=E.indexOf(ne);De>=0&&(E[De]=null,T[De].disconnect(ne))}for(let oe=0;oe<Q.added.length;oe++){const ne=Q.added[oe];let De=E.indexOf(ne);if(De===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=E.length){E.push(ne),De=Pe;break}else if(E[Pe]===null){E[Pe]=ne,De=Pe;break}if(De===-1)break}const Fe=T[De];Fe&&Fe.connect(ne)}}const j=new L,te=new L;function re(Q,oe,ne){j.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(ne.matrixWorld);const De=j.distanceTo(te),Fe=oe.projectionMatrix.elements,Pe=ne.projectionMatrix.elements,yt=Fe[14]/(Fe[10]-1),We=Fe[14]/(Fe[10]+1),at=(Fe[9]+1)/Fe[5],nt=(Fe[9]-1)/Fe[5],Je=(Fe[8]-1)/Fe[0],Et=(Pe[8]+1)/Pe[0],Rt=yt*Je,Lt=yt*Et,Ft=De/(-Je+Et),gt=Ft*-Je;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(gt),Q.translateZ(Ft),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const wt=yt+Ft,U=We+Ft,qt=Rt-gt,st=Lt+(De-gt),A=at*We/U*wt,_=nt*We/U*wt;Q.projectionMatrix.makePerspective(qt,st,A,_,wt,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let oe=Q.near,ne=Q.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),I.near=C.near=w.near=oe,I.far=C.far=w.far=ne,(W!==I.near||K!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,K=I.far),I.layers.mask=Q.layers.mask|6,w.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const De=Q.parent,Fe=I.cameras;ue(I,De);for(let Pe=0;Pe<Fe.length;Pe++)ue(Fe[Pe],De);Fe.length===2?re(I,w,C):I.projectionMatrix.copy(w.projectionMatrix),ve(Q,I,De)};function ve(Q,oe,ne){ne===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(ne.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ra*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Q){return p[Q]};let et=null;function mt(Q,oe){if(h=oe.getViewerPose(c||o),g=oe,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;ne.length!==I.cameras.length&&(I.cameras.length=0,De=!0);for(let We=0;We<ne.length;We++){const at=ne[We];let nt=null;if(f!==null)nt=f.getViewport(at);else{const Et=d.getViewSubImage(u,at);nt=Et.viewport,We===0&&(e.setRenderTargetTextures(v,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(v))}let Je=P[We];Je===void 0&&(Je=new an,Je.layers.enable(We),Je.viewport=new pt,P[We]=Je),Je.matrix.fromArray(at.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(at.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(nt.x,nt.y,nt.width,nt.height),We===0&&(I.matrix.copy(Je.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),De===!0&&I.cameras.push(Je)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const We=d.getDepthInformation(ne[0]);We&&We.isValid&&We.texture&&m.init(We,s.renderState)}if(Fe&&Fe.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let We=0;We<ne.length;We++){const at=ne[We].camera;if(at){let nt=p[at];nt||(nt=new Jh,p[at]=nt);const Je=d.getCameraImage(at);nt.sourceTexture=Je}}}}for(let ne=0;ne<T.length;ne++){const De=E[ne],Fe=T[ne];De!==null&&Fe!==void 0&&Fe.update(De,oe,c||o)}et&&et(Q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const tt=new tu;tt.setAnimationLoop(mt),this.setAnimationLoop=function(Q){et=Q},this.dispose=function(){}}}const Px=new je,lu=new Ue;lu.set(-1,0,0,0,1,0,0,0,1);function Lx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ix(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const E=T.program;n.uniformBlockBinding(v,E)}function c(v,T){let E=s[v.id];E===void 0&&(m(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",y));const R=T.program;n.updateUBOMapping(v,R);const x=e.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){const T=d();v.__bindingPointIndex=T;const E=i.createBuffer(),R=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=s[v.id],E=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){const C=E[x];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)f(C[P],x,P,R);else f(C,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,T,E,R){if(M(v,T,E,R)===!0){const x=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){const I=w[P],W=p(I);g(I,v.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function M(v,T,E,R){const x=v.value,w=T+"_"+E;if(R[w]===void 0)return typeof x=="number"||typeof x=="boolean"?R[w]=x:ArrayBuffer.isView(x)?R[w]=x.slice():R[w]=x.clone(),!0;{const C=R[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){const T=v.uniforms;let E=0;const R=16;for(let w=0,C=T.length;w<C;w++){const P=Array.isArray(T[w])?T[w]:[T[w]];for(let I=0,W=P.length;I<W;I++){const K=P[I],B=Array.isArray(K.value)?K.value:[K.value];for(let $=0,G=B.length;$<G;$++){const j=B[$],te=p(j),re=E%R,ue=re%te.boundary,ve=re+ue;E+=ue,ve!==0&&R-ve<te.storage&&(E+=R-ve),K.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=te.storage}}}const x=E%R;return x>0&&(E+=R-x),v.__size=E,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),T}function y(v){const T=v.target;T.removeEventListener("dispose",y);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}const Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function Ux(){return bn===null&&(bn=new Yh(Dx,16,16,Mi,kn),bn.name="DFG_LUT",bn.minFilter=Gt,bn.magFilter=Gt,bn.wrapS=Fn,bn.wrapT=Fn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class Nx{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=jt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const M=f,m=new Set([Qa,Ja,Za]),p=new Set([jt,Cn,ws,Ts,$a,Ya]),y=new Uint32Array(4),b=new Int32Array(4),v=new L;let T=null,E=null;const R=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null,W=null,K=null,B=null;this._outputColorSpace=on;let $=0,G=0,j=null,te=-1,re=null;const ue=new pt,ve=new pt;let et=null;const mt=new be(0);let tt=0,Q=t.width,oe=t.height,ne=1,De=null,Fe=null;const Pe=new pt(0,0,Q,oe),yt=new pt(0,0,Q,oe);let We=!1;const at=new rl;let nt=!1,Je=!1;const Et=new je,Rt=new L,Lt=new pt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function wt(){return j===null?ne:1}let U=n;function qt(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",vn,!1),U===null){const N="webgl2";if(U=qt(N,S),U===null)throw qt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ke("WebGLRenderer: "+S.message),S}let st,A,_,O,H,q,ie,ae,Y,J,le,Te,de,ce,Ce,Le,Oe,D,se,Z,he,ge,ee;function we(){st=new U0(U),st.init(),he=new wx(U,st),A=new T0(U,st,e,he),_=new bx(U,st),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),W=U.createFramebuffer(),K=U.createFramebuffer(),B=U.createFramebuffer(),O=new O0(U),H=new cx,q=new Ex(U,st,_,H,A,he,O),ie=new D0(C),ae=new Gf(U),ge=new E0(U,ae),Y=new N0(U,ae,O,ge),J=new k0(U,Y,ae,ge,O),D=new B0(U,A,q),Ce=new A0(H),le=new lx(C,ie,st,A,ge,Ce),Te=new Lx(C,H),de=new ux,ce=new xx(st),Oe=new b0(C,ie,_,J,g,l),Le=new Sx(C,J,A),ee=new Ix(U,O,A,_),se=new w0(U,st,O),Z=new F0(U,st,O),O.programs=le.programs,C.capabilities=A,C.extensions=st,C.properties=H,C.renderLists=de,C.shadowMap=Le,C.state=_,C.info=O}we(),M!==jt&&(w=new G0(M,t.width,t.height,a,s,r));const Se=new Cx(C,U);this.xr=Se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=st.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=st.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Q,oe,!1))},this.getSize=function(S){return S.set(Q,oe)},this.setSize=function(S,N,V=!0){if(Se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,oe=N,t.width=Math.floor(S*ne),t.height=Math.floor(N*ne),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Q*ne,oe*ne).floor()},this.setDrawingBufferSize=function(S,N,V){Q=S,oe=N,ne=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(M===jt){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ue)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,N,V,k){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,N,V,k),_.viewport(ue.copy(Pe).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(yt)},this.setScissor=function(S,N,V,k){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,N,V,k),_.scissor(ve.copy(yt).multiplyScalar(ne).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){_.setScissorTest(We=S)},this.setOpaqueSort=function(S){De=S},this.setTransparentSort=function(S){Fe=S},this.getClearColor=function(S){return S.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let k=0;if(S){let z=!1;if(j!==null){const me=j.texture.format;z=m.has(me)}if(z){const me=j.texture.type,_e=p.has(me),pe=Oe.getClearColor(),Ee=Oe.getClearAlpha(),Ae=pe.r,Be=pe.g,Ge=pe.b;_e?(y[0]=Ae,y[1]=Be,y[2]=Ge,y[3]=Ee,U.clearBufferuiv(U.COLOR,0,y)):(b[0]=Ae,b[1]=Be,b[2]=Ge,b[3]=Ee,U.clearBufferiv(U.COLOR,0,b))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Oe.dispose(),de.dispose(),ce.dispose(),H.dispose(),ie.dispose(),J.dispose(),ge.dispose(),ee.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ml),Se.removeEventListener("sessionend",yl),ai.stop()};function xt(S){S.preventDefault(),ql("WebGLRenderer: Context Lost."),P=!0}function dt(){ql("WebGLRenderer: Context Restored."),P=!1;const S=O.autoReset,N=Le.enabled,V=Le.autoUpdate,k=Le.needsUpdate,z=Le.type;we(),O.autoReset=S,Le.enabled=N,Le.autoUpdate=V,Le.needsUpdate=k,Le.type=z}function vn(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Mn(S){const N=S.target;N.removeEventListener("dispose",Mn),Cu(N)}function Cu(S){Pu(S),H.remove(S)}function Pu(S){const N=H.get(S).programs;N!==void 0&&(N.forEach(function(V){le.releaseProgram(V)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,k,z,me){N===null&&(N=Ft);const _e=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=Du(S,N,V,k,z);_.setMaterial(k,_e);let Ee=V.index,Ae=1;if(k.wireframe===!0){if(Ee=Y.getWireframeAttribute(V),Ee===void 0)return;Ae=2}const Be=V.drawRange,Ge=V.attributes.position;let Re=Be.start*Ae,ot=(Be.start+Be.count)*Ae;me!==null&&(Re=Math.max(Re,me.start*Ae),ot=Math.min(ot,(me.start+me.count)*Ae)),Ee!==null?(Re=Math.max(Re,0),ot=Math.min(ot,Ee.count)):Ge!=null&&(Re=Math.max(Re,0),ot=Math.min(ot,Ge.count));const St=ot-Re;if(St<0||St===1/0)return;ge.setup(z,k,pe,V,Ee);let _t,lt=se;if(Ee!==null&&(_t=ae.get(Ee),lt=Z,lt.setIndex(_t)),z.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*wt()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(z.isLine){let Bt=k.linewidth;Bt===void 0&&(Bt=1),_.setLineWidth(Bt*wt()),z.isLineSegments?lt.setMode(U.LINES):z.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else z.isPoints?lt.setMode(U.POINTS):z.isSprite&&lt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(st.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Bt=z._multiDrawStarts,xe=z._multiDrawCounts,Zt=z._multiDrawCount,Qe=Ee?ae.get(Ee).bytesPerElement:1,nn=H.get(k).currentProgram.getUniforms();for(let yn=0;yn<Zt;yn++)nn.setValue(U,"_gl_DrawID",yn),lt.render(Bt[yn]/Qe,xe[yn])}else if(z.isInstancedMesh)lt.renderInstances(Re,St,z.count);else if(V.isInstancedBufferGeometry){const Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,Bt);lt.renderInstances(Re,St,xe)}else lt.render(Re,St)};function vl(S,N,V){S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,Us(S,N,V),S.side=oi,S.needsUpdate=!0,Us(S,N,V),S.side=ln):Us(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),E=ce.get(V),E.init(N),x.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const k=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let _e=0;_e<me.length;_e++){const pe=me[_e];vl(pe,V,z),k.add(pe)}else vl(me,V,z),k.add(me)}),E=x.pop(),k},this.compileAsync=function(S,N,V=null){const k=this.compile(S,N,V);return new Promise(z=>{function me(){if(k.forEach(function(_e){H.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){z(S);return}setTimeout(me,10)}st.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let qr=null;function Lu(S){qr&&qr(S)}function Ml(){ai.stop()}function yl(){ai.start()}const ai=new tu;ai.setAnimationLoop(Lu),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(S){qr=S,Se.setAnimationLoop(S),S===null?ai.stop():ai.start()},Se.addEventListener("sessionstart",Ml),Se.addEventListener("sessionend",yl),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(S,N);const V=Se.enabled===!0&&Se.isPresenting===!0,k=w!==null&&(j===null||V)&&w.begin(C,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(N),N=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,j),E=ce.get(S,x.length),E.init(N),E.state.textureUnits=q.getTextureUnits(),x.push(E),Et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),at.setFromProjectionMatrix(Et,Tn,N.reversedDepth),Je=this.localClippingEnabled,nt=Ce.init(this.clippingPlanes,Je),T=de.get(S,R.length),T.init(),R.push(T),Se.enabled===!0&&Se.isPresenting===!0){const _e=C.xr.getDepthSensingMesh();_e!==null&&$r(_e,N,-1/0,C.sortObjects)}$r(S,N,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(De,Fe,N.reversedDepth),gt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,gt&&Oe.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ce.beginShadows();const z=E.state.shadowsArray;if(Le.render(z,S,N),nt===!0&&Ce.endShadows(),(k&&w.hasRenderPass())===!1){const _e=T.opaque,pe=T.transmissive;if(E.setupLights(),N.isArrayCamera){const Ee=N.cameras;if(pe.length>0)for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ge=Ee[Ae];bl(_e,pe,S,Ge)}gt&&Oe.render(S);for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ge=Ee[Ae];Sl(T,S,Ge,Ge.viewport)}}else pe.length>0&&bl(_e,pe,S,N),gt&&Oe.render(S),Sl(T,S,N)}j!==null&&G===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),k&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),ge.resetDefaultState(),te=-1,re=null,x.pop(),x.length>0?(E=x[x.length-1],q.setTextureUnits(E.state.textureUnits),nt===!0&&Ce.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,I!==null&&I.renderEnd()};function $r(S,N,V,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||at.intersectsSprite(S)){k&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Et);const _e=J.update(S),pe=S.material;pe.visible&&T.push(S,_e,pe,V,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||at.intersectsObject(S))){const _e=J.update(S),pe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Lt.copy(_e.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(Et)),Array.isArray(pe)){const Ee=_e.groups;for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const Ge=Ee[Ae],Re=pe[Ge.materialIndex];Re&&Re.visible&&T.push(S,_e,Re,V,Lt.z,Ge)}}else pe.visible&&T.push(S,_e,pe,V,Lt.z,null)}}const me=S.children;for(let _e=0,pe=me.length;_e<pe;_e++)$r(me[_e],N,V,k)}function Sl(S,N,V,k){const{opaque:z,transmissive:me,transparent:_e}=S;E.setupLightsView(V),nt===!0&&Ce.setGlobalState(C.clippingPlanes,V),k&&_.viewport(ue.copy(k)),z.length>0&&Ds(z,N,V),me.length>0&&Ds(me,N,V),_e.length>0&&Ds(_e,N,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function bl(S,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Re=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Rn(1,1,{generateMipmaps:!0,type:Re?kn:jt,minFilter:ti,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const me=E.state.transmissionRenderTarget[k.id],_e=k.viewport||ue;me.setSize(_e.z*C.transmissionResolutionScale,_e.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(mt),tt=C.getClearAlpha(),tt<1&&C.setClearColor(16777215,.5),C.clear(),gt&&Oe.render(V);const Be=C.toneMapping;C.toneMapping=An;const Ge=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),nt===!0&&Ce.setGlobalState(C.clippingPlanes,k),Ds(S,V,k),q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me),st.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ot=0,St=N.length;ot<St;ot++){const _t=N[ot],{object:lt,geometry:Bt,material:xe,group:Zt}=_t;if(xe.side===ln&&lt.layers.test(k.layers)){const Qe=xe.side;xe.side=Kt,xe.needsUpdate=!0,El(lt,V,k,Bt,xe,Zt),xe.side=Qe,xe.needsUpdate=!0,Re=!0}}Re===!0&&(q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,Ee,Ae),C.setClearColor(mt,tt),Ge!==void 0&&(k.viewport=Ge),C.toneMapping=Be}function Ds(S,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let z=0,me=S.length;z<me;z++){const _e=S[z],{object:pe,geometry:Ee,group:Ae}=_e;let Be=_e.material;Be.allowOverride===!0&&k!==null&&(Be=k),pe.layers.test(V.layers)&&El(pe,N,V,Ee,Be,Ae)}}function El(S,N,V,k,z,me){S.onBeforeRender(C,N,V,k,z,me),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(C,N,V,k,S,me),z.transparent===!0&&z.side===ln&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,C.renderBufferDirect(V,N,k,z,S,me),z.side=oi,z.needsUpdate=!0,C.renderBufferDirect(V,N,k,z,S,me),z.side=ln):C.renderBufferDirect(V,N,k,z,S,me),S.onAfterRender(C,N,V,k,z,me)}function Us(S,N,V){N.isScene!==!0&&(N=Ft);const k=H.get(S),z=E.state.lights,me=E.state.shadowsArray,_e=z.state.version,pe=le.getParameters(S,z.state,me,N,V,E.state.lightProbeGridArray),Ee=le.getProgramCacheKey(pe);let Ae=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const Be=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=ie.get(S.envMap||k.environment,Be),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",Mn),Ae=new Map,k.programs=Ae);let Ge=Ae.get(Ee);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===_e)return Tl(S,pe),Ge}else pe.uniforms=le.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,V,pe),S.onBeforeCompile(pe,C),Ge=le.acquireProgram(pe,Ee),Ae.set(Ee,Ge),k.uniforms=pe.uniforms;const Re=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=Ce.uniform),Tl(S,pe),k.needsLights=Nu(S),k.lightsStateVersion=_e,k.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=Ge,k.uniformsList=null,Ge}function wl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Sr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Tl(S,N){const V=H.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Iu(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let V=0,k=S.length;V<k;V++){const z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function Du(S,N,V,k,z){N.isScene!==!0&&(N=Ft),q.resetTextureUnits();const me=N.fog,_e=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,pe=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Xe.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ae=ie.get(k.envMap||_e,Ee),Be=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,St=!!V.morphAttributes.color;let _t=An;k.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(_t=C.toneMapping);const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Bt=lt!==void 0?lt.length:0,xe=H.get(k),Zt=E.state.lights;if(nt===!0&&(Je===!0||S!==re)){const ft=S===re&&k.id===te;Ce.setState(k,S,ft)}let Qe=!1;k.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Zt.state.version||xe.outputColorSpace!==pe||z.isBatchedMesh&&xe.batching===!1||!z.isBatchedMesh&&xe.batching===!0||z.isBatchedMesh&&xe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&xe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&xe.instancing===!1||!z.isInstancedMesh&&xe.instancing===!0||z.isSkinnedMesh&&xe.skinning===!1||!z.isSkinnedMesh&&xe.skinning===!0||z.isInstancedMesh&&xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&xe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&xe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&xe.instancingMorph===!1&&z.morphTexture!==null||xe.envMap!==Ae||k.fog===!0&&xe.fog!==me||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ce.numPlanes||xe.numIntersection!==Ce.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==Ge||xe.morphTargets!==Re||xe.morphNormals!==ot||xe.morphColors!==St||xe.toneMapping!==_t||xe.morphTargetsCount!==Bt||!!xe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,xe.__version=k.version);let nn=xe.currentProgram;Qe===!0&&(nn=Us(k,N,z),I&&k.isNodeMaterial&&I.onUpdateProgram(k,nn,xe));let yn=!1,Vn=!1,bi=!1;const ct=nn.getUniforms(),bt=xe.uniforms;if(_.useProgram(nn.program)&&(yn=!0,Vn=!0,bi=!0),k.id!==te&&(te=k.id,Vn=!0),xe.needsLights){const ft=Iu(E.state.lightProbeGridArray,z);xe.lightProbeGrid!==ft&&(xe.lightProbeGrid=ft,Vn=!0)}if(yn||re!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(U,"projectionMatrix",S.projectionMatrix),ct.setValue(U,"viewMatrix",S.matrixWorldInverse);const Xn=ct.map.cameraPosition;Xn!==void 0&&Xn.setValue(U,Rt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),re!==S&&(re=S,Vn=!0,bi=!0)}if(xe.needsLights&&(Zt.state.directionalShadowMap.length>0&&ct.setValue(U,"directionalShadowMap",Zt.state.directionalShadowMap,q),Zt.state.spotShadowMap.length>0&&ct.setValue(U,"spotShadowMap",Zt.state.spotShadowMap,q),Zt.state.pointShadowMap.length>0&&ct.setValue(U,"pointShadowMap",Zt.state.pointShadowMap,q)),z.isSkinnedMesh){ct.setOptional(U,z,"bindMatrix"),ct.setOptional(U,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(U,"boneTexture",ft.boneTexture,q))}z.isBatchedMesh&&(ct.setOptional(U,z,"batchingTexture"),ct.setValue(U,"batchingTexture",z._matricesTexture,q),ct.setOptional(U,z,"batchingIdTexture"),ct.setValue(U,"batchingIdTexture",z._indirectTexture,q),ct.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(U,"batchingColorTexture",z._colorsTexture,q));const Wn=V.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&D.update(z,V,nn),(Vn||xe.receiveShadow!==z.receiveShadow)&&(xe.receiveShadow=z.receiveShadow,ct.setValue(U,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(bt.envMapIntensity.value=N.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=Ux()),Vn){if(ct.setValue(U,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&Uu(bt,bi),me&&k.fog===!0&&Te.refreshFogUniforms(bt,me),Te.refreshMaterialUniforms(bt,k,ne,oe,E.state.transmissionRenderTarget[S.id]),xe.needsLights&&xe.lightProbeGrid){const ft=xe.lightProbeGrid;bt.probesSH.value=ft.texture,bt.probesMin.value.copy(ft.boundingBox.min),bt.probesMax.value.copy(ft.boundingBox.max),bt.probesResolution.value.copy(ft.resolution)}Sr.upload(U,wl(xe),bt,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Sr.upload(U,wl(xe),bt,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(U,"center",z.center),ct.setValue(U,"modelViewMatrix",z.modelViewMatrix),ct.setValue(U,"normalMatrix",z.normalMatrix),ct.setValue(U,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){const ft=k.uniformsGroups;for(let Xn=0,Ei=ft.length;Xn<Ei;Xn++){const Al=ft[Xn];ee.update(Al,nn),ee.bind(Al,nn)}}return nn}function Uu(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Nu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,N,V){const k=H.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=N,H.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const V=H.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){j=S,$=N,G=V;let k=null,z=!1,me=!1;if(S){const pe=H.get(S);if(pe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),ue.copy(S.viewport),ve.copy(S.scissor),et=S.scissorTest,_.viewport(ue),_.scissor(ve),_.setScissorTest(et),te=-1;return}else if(pe.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(pe.__hasExternalTextures)q.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&H.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const Ae=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?k=Ae[N][V]:k=Ae[N],z=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?k=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[V]:k=Ae,ue.copy(S.viewport),ve.copy(S.scissor),et=S.scissorTest}else ue.copy(Pe).multiplyScalar(ne).floor(),ve.copy(yt).multiplyScalar(ne).floor(),et=We;if(V!==0&&(k=W),_.bindFramebuffer(U.FRAMEBUFFER,k)&&_.drawBuffers(S,k),_.viewport(ue),_.scissor(ve),_.setScissorTest(et),z){const pe=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,V)}else if(me){const pe=N;for(let Ee=0;Ee<S.textures.length;Ee++){const Ae=H.get(S.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,V,pe)}}else if(S!==null&&V!==0){const pe=H.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,V)}te=-1},this.readRenderTargetPixels=function(S,N,V,k,z,me,_e,pe=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){_.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Ae=S.textures[pe],Be=Ae.format,Ge=Ae.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ge)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&V>=0&&V<=S.height-z&&U.readPixels(N,V,k,z,he.convert(Be),he.convert(Ge),me)}finally{const Ae=j!==null?H.get(j).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,k,z,me,_e,pe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee)if(N>=0&&N<=S.width-k&&V>=0&&V<=S.height-z){_.bindFramebuffer(U.FRAMEBUFFER,Ee);const Ae=S.textures[pe],Be=Ae.format,Ge=Ae.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(N,V,k,z,he.convert(Be),he.convert(Ge),0);const ot=j!==null?H.get(j).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,ot);const St=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Yd(U,St,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.deleteBuffer(Re),U.deleteSync(St),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){const k=Math.pow(2,-V),z=Math.floor(S.image.width*k),me=Math.floor(S.image.height*k),_e=N!==null?N.x:0,pe=N!==null?N.y:0;q.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,_e,pe,z,me),_.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,k=null,z=0,me=0){let _e,pe,Ee,Ae,Be,Ge,Re,ot,St;const _t=S.isCompressedTexture?S.mipmaps[me]:S.image;if(V!==null)_e=V.max.x-V.min.x,pe=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,Ae=V.min.x,Be=V.min.y,Ge=V.isBox3?V.min.z:0;else{const bt=Math.pow(2,-z);_e=Math.floor(_t.width*bt),pe=Math.floor(_t.height*bt),S.isDataArrayTexture?Ee=_t.depth:S.isData3DTexture?Ee=Math.floor(_t.depth*bt):Ee=1,Ae=0,Be=0,Ge=0}k!==null?(Re=k.x,ot=k.y,St=k.z):(Re=0,ot=0,St=0);const lt=he.convert(N.format),Bt=he.convert(N.type);let xe;N.isData3DTexture?(q.setTexture3D(N,0),xe=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),xe=U.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),xe=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Zt=_.getParameter(U.UNPACK_ROW_LENGTH),Qe=_.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=_.getParameter(U.UNPACK_SKIP_PIXELS),yn=_.getParameter(U.UNPACK_SKIP_ROWS),Vn=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(U.UNPACK_SKIP_ROWS,Be),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const bi=S.isDataArrayTexture||S.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const bt=H.get(S),Wn=H.get(N),ft=H.get(bt.__renderTarget),Xn=H.get(Wn.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,ft.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Ei=0;Ei<Ee;Ei++)bi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(S).__webglTexture,z,Ge+Ei),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(N).__webglTexture,me,St+Ei)),U.blitFramebuffer(Ae,Be,_e,pe,Re,ot,_e,pe,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||H.has(S)){const bt=H.get(S),Wn=H.get(N);_.bindFramebuffer(U.READ_FRAMEBUFFER,K),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let ft=0;ft<Ee;ft++)bi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,z,Ge+ft):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,z),ct?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wn.__webglTexture,me,St+ft):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wn.__webglTexture,me),z!==0?U.blitFramebuffer(Ae,Be,_e,pe,Re,ot,_e,pe,U.COLOR_BUFFER_BIT,U.NEAREST):ct?U.copyTexSubImage3D(xe,me,Re,ot,St+ft,Ae,Be,_e,pe):U.copyTexSubImage2D(xe,me,Re,ot,Ae,Be,_e,pe);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(xe,me,Re,ot,St,_e,pe,Ee,lt,Bt,_t.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(xe,me,Re,ot,St,_e,pe,Ee,lt,_t.data):U.texSubImage3D(xe,me,Re,ot,St,_e,pe,Ee,lt,Bt,_t):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,Re,ot,_e,pe,lt,Bt,_t.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,Re,ot,_t.width,_t.height,lt,_t.data):U.texSubImage2D(U.TEXTURE_2D,me,Re,ot,_e,pe,lt,Bt,_t);_.pixelStorei(U.UNPACK_ROW_LENGTH,Zt),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),_.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),_.pixelStorei(U.UNPACK_SKIP_ROWS,yn),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Vn),me===0&&N.generateMipmaps&&U.generateMipmap(xe),_.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){$=0,G=0,j=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const F=.5;function Fx(i){const e=[],t=[],n=[],s=new Ue,r=new L,o=new L;for(const l of i){const c=l.geo.index?l.geo.toNonIndexed():l.geo,h=c.getAttribute("position"),d=c.getAttribute("normal");s.getNormalMatrix(l.matrix);for(let u=0;u<h.count;u++)r.fromBufferAttribute(h,u).applyMatrix4(l.matrix),e.push(r.x,r.y,r.z),o.fromBufferAttribute(d,u).applyMatrix3(s).normalize(),t.push(o.x,o.y,o.z),n.push(l.colour.r,l.colour.g,l.colour.b);c!==l.geo&&c.dispose(),l.geo.dispose()}const a=new At;return a.setAttribute("position",new He(e,3)),a.setAttribute("normal",new He(t,3)),a.setAttribute("color",new He(n,3)),a}function tn(i){return Fx(i.map(e=>{const t=new je,n=new cn;return e.rot&&n.setFromEuler(new Gn(e.rot[0],e.rot[1],e.rot[2])),t.compose(new L(...e.pos??[0,0,0]),n,new L(...e.scale??[1,1,1])),{geo:e.geo,colour:new be(e.colour),matrix:t}}))}function $c(i,e,t,n){const s=en(i),r=(1.5+s()*.55)*F,o=(.2+s()*.08)*F,a=(.34+s()*.1)*F,l=[],c=s()*Math.PI*2,h=(s()-.5)*.22,d=Math.cos(c)*h,u=Math.sin(c)*h;l.push({geo:new ut(a,a*(1.35+s()*.3),.18*F,7),colour:n,pos:[0,.08*F,0],rot:[u*.3,s()*3,-d*.3]});const f=r*.55,g=r*.5,M=(o+a)/2;l.push({geo:new ut(M,a,f,7),colour:n,pos:[0,f/2+.1*F,0],rot:[u,0,-d]});const m=d*f*.9,p=u*f*.9;l.push({geo:new ut(o,M*1.02,g,7),colour:n,pos:[m,f+g/2+.08*F,p],rot:[u*2.1,0,-d*2.1]});const y=r+.1*F,b=3+Math.floor(s()*3);let v=s()*Math.PI*2;for(let C=0;C<b;C++){v+=Math.PI*2/b+(s()-.5)*1.1;const P=.35+s()*.45,I=(.75+s()*.6)*F;l.push({geo:new ut(.05*F,.13*F,I,5),colour:n,pos:[m+Math.cos(v)*.24*F,y+(.2+s()*.25)*F,p+Math.sin(v)*.24*F],rot:[Math.sin(v)*P,0,-Math.cos(v)*P]})}const T=y+(.75+s()*.3)*F,E=m+(s()-.5)*.3*F,R=p+(s()-.5)*.3*F,x=.9+s()*.35,w=9+Math.floor(s()*4);for(let C=0;C<w;C++){const P=s()*Math.PI*2,I=Math.sqrt(s())*.85*F*x,W=(.42+s()*.38)*F;l.push({geo:new Hn(W,0),colour:s()<.35?e:t,pos:[E+Math.cos(P)*I,T+(s()-.45)*.55*F,R+Math.sin(P)*I*(.8+s()*.4)],scale:[1+s()*.35,.6+s()*.3,1+s()*.35],rot:[s()*3,s()*3,s()*3]})}for(let C=0;C<2;C++)l.push({geo:new Hn((.5+s()*.22)*F,0),colour:e,pos:[E+(s()-.5)*.5*F,T+(.3+s()*.25)*F,R+(s()-.5)*.5*F],scale:[1.1,.62,1.1],rot:[s()*3,s()*3,s()*3]});return tn(l)}function Ox(i,e,t){const n=en(i),s=(3.6+n()*1)*F,r=[{geo:new ut(.32*F,.46*F,.16*F,8),colour:"#4a3520",pos:[0,.07*F,0]},{geo:new ut(.2*F,.32*F,s*.6,8),colour:"#4a3520",pos:[0,s*.3,0]}],o=4+Math.floor(n()*2),a=n()*Math.PI*2,l=(n()-.5)*.12;for(let c=0;c<o;c++){const h=c/(o-1),d=(1.25-h*.92)*F*(.85+n()*.3),u=(1.05-h*.28)*F*(.85+n()*.3);r.push({geo:new Gr(d,u,7),colour:c%2===0?e:t,pos:[Math.cos(a)*l*h*3+(n()-.5)*.12*F,s*.24+h*s*.5+u*.28,Math.sin(a)*l*h*3+(n()-.5)*.12*F],rot:[(n()-.5)*.16,n()*3,(n()-.5)*.16]})}return tn(r)}function Bx(i,e,t,n=!1,s=14,r=991){const o=en(r),a=[],l=[],c=[],h=new be(i),d=new be(e),u=new be(t),f=.5,g=.5,M=n?Math.PI:Math.PI*2,m=[];for(let b=0;b<=s;b++)m.push(b===s&&!n?m[0]:.985+o()*.03);const p=(b,v,T,E,R,x,w)=>{a.push(b,v,T),l.push(E,R,x),c.push(w.r,w.g,w.b)};for(let b=0;b<s;b++){const v=b/s,T=(b+1)/s,E=-M/2+v*M,R=-M/2+T*M,x=m[b],w=m[b+1],C=Math.cos(E),P=Math.sin(E),I=Math.cos(R),W=Math.sin(R),K=[-.5,C*f*x,P*f*x],B=[.5,C*g*x,P*g*x],$=[.5,I*g*w,W*g*w],G=[-.5,I*f*w,W*f*w],j=d.clone().lerp(h,.72+(x-.92)*1.4),te=d.clone().lerp(h,.72+(w-.92)*1.4);for(const[re,ue,ve]of[[K,[0,C,P],j],[$,[0,I,W],te],[B,[0,C,P],j],[K,[0,C,P],j],[G,[0,I,W],te],[$,[0,I,W],te]])p(re[0],re[1],re[2],ue[0],ue[1],ue[2],ve)}for(const[b,v,T]of[[-.5,f,-1],[.5,g,1]])for(let E=0;E<s;E++){const R=E/s,x=(E+1)/s,w=-M/2+R*M,C=-M/2+x*M,P=m[E],I=m[E+1],W=[b,Math.cos(w)*v*P,Math.sin(w)*v*P],K=[b,Math.cos(C)*v*I,Math.sin(C)*v*I],B=[b,0,0],$=T>0?[B,W,K]:[B,K,W];for(const G of $)p(G[0],G[1],G[2],T,0,0,u)}if(n){const v=[[-.5,0,-f*m[0]],[.5,0,-g*m[0]],[.5,0,g*m[s]],[-.5,0,f*m[s]]];for(const T of[v[0],v[2],v[1],v[0],v[3],v[2]])p(T[0],T[1],T[2],0,1,0,u)}const y=new At;return y.setAttribute("position",new He(a,3)),y.setAttribute("normal",new He(l,3)),y.setAttribute("color",new He(c,3)),y}function kx(i=4242){const e=Ia(i,.5,"#8d8d88");e.computeBoundingBox();const t=e.boundingBox,n=new L;t.getSize(n);const s=Math.max(n.x,n.y,n.z)||1;return e.translate(-(t.min.x+t.max.x)/2,-t.min.y,-(t.min.z+t.max.z)/2),e.scale(1/s,1/s,1/s),e.computeVertexNormals(),e}function Ia(i,e,t){const n=en(i),s=new Hn(e,2),r=s.getAttribute("position"),o=new L,a=Array.from({length:5},()=>({dir:new L(n()*2-1,n()*2-1,n()*2-1).normalize(),amp:.12+n()*.16}));for(let l=0;l<r.count;l++){o.fromBufferAttribute(r,l);const c=o.clone().normalize();let h=1;for(const d of a)h+=Math.max(0,c.dot(d.dir))**2*d.amp;o.multiplyScalar(h),o.y*=.74,r.setXYZ(l,o.x,o.y,o.z)}return s.computeVertexNormals(),tn([{geo:s,colour:t,pos:[0,e*.5,0]}])}function zx(i){const e=en(i),t=[];for(let n=0;n<5;n++){const s=n/5*Math.PI*2,r=e()*.35*F;t.push({geo:new Hn((.4+e()*.25)*F,0),colour:n%2?"#3d6329":"#4e7a35",pos:[Math.cos(s)*r,(.35+e()*.2)*F,Math.sin(s)*r],scale:[1,.8,1]})}for(let n=0;n<6;n++){const s=e()*Math.PI*2;t.push({geo:new Hn(.06*F,0),colour:"#a8324a",pos:[Math.cos(s)*.45*F,(.4+e()*.35)*F,Math.sin(s)*.45*F]})}return tn(t)}function Gx(i){const e=en(i),t=[];for(let n=0;n<14;n++){const s=e()*Math.PI*2,r=e()*.5*F,o=(.9+e()*.8)*F;t.push({geo:new ut(.015*F,.03*F,o,3),colour:e()>.5?"#8f9a4e":"#6f7d3c",pos:[Math.cos(s)*r,o/2,Math.sin(s)*r],rot:[(e()-.5)*.3,0,(e()-.5)*.3]})}return tn(t)}function Hx(i){const e=en(i),t=new Is(.75*F,8,5,0,Math.PI*2,0,Math.PI/2),n=t.getAttribute("position"),s=new L;for(let r=0;r<n.count;r++)s.fromBufferAttribute(n,r).multiplyScalar(.85+e()*.3),n.setXYZ(r,s.x,s.y*.45,s.z);return t.computeVertexNormals(),tn([{geo:t,colour:"#a6835f"}])}function Vx(i){const e=en(i),t=[{geo:new ut(.7*F,.8*F,.12*F,9),colour:"#5d4a2e",pos:[0,.06*F,0]}];for(let n=0;n<8;n++){const s=e()*Math.PI*2,r=e()*.55*F;t.push({geo:new Hn((.08+e()*.1)*F,0),colour:e()>.4?"#8a4a22":"#a35c2a",pos:[Math.cos(s)*r,.12*F,Math.sin(s)*r]})}return tn(t)}function Wx(){const i=[];for(let e=0;e<8;e++){const t=e/8*Math.PI*2;i.push({geo:new Hn(.16*F,0),colour:e%2?"#7d7d76":"#9a9a92",pos:[Math.cos(t)*.55*F,.1*F,Math.sin(t)*.55*F],scale:[1,.7,1]})}for(let e=0;e<3;e++)i.push({geo:new ut(.07*F,.07*F,1.1*F,5),colour:"#5a3f24",pos:[0,.22*F,0],rot:[Math.PI/2.4,e/3*Math.PI,0]});return tn(i)}function Xx(){return tn([{geo:new ut(.55*F,1*F,1.5*F,10),colour:"#6f5b45",pos:[0,.75*F,0]},{geo:new al(.5*F,.12*F,6,12),colour:"#8a7157",pos:[0,1.5*F,0],rot:[Math.PI/2,0,0]},{geo:new ht(.45*F,.45*F,.3*F),colour:"#2a1a10",pos:[0,.32*F,.85*F]}])}function qx(){const i=[{geo:new ut(.4*F,.55*F,1.9*F,8),colour:"#6b6b64",pos:[-.8*F,.95*F,0]},{geo:new ht(.3*F,.35*F,.25*F),colour:"#241a12",pos:[-.8*F,.4*F,.5*F]},{geo:new ut(.32*F,.34*F,.7*F,8),colour:"#5a3f24",pos:[.9*F,.35*F,0]},{geo:new ht(.7*F,.2*F,.3*F),colour:"#3b3b40",pos:[.9*F,.8*F,0]},{geo:new ht(.25*F,.22*F,.28*F),colour:"#54545c",pos:[.9*F,.6*F,0]}];return tn(i)}function $x(){const i=[];for(const e of[-.9*F,.9*F])i.push({geo:new ut(.06*F,.07*F,1.6*F,5),colour:"#6b4d2c",pos:[e,.8*F,-.25*F],rot:[.2,0,0]}),i.push({geo:new ut(.06*F,.07*F,1.6*F,5),colour:"#6b4d2c",pos:[e,.8*F,.25*F],rot:[-.2,0,0]});i.push({geo:new ut(.05*F,.05*F,2.1*F,5),colour:"#7d5730",pos:[0,1.55*F,0],rot:[0,0,Math.PI/2]});for(let e=0;e<5;e++)i.push({geo:new ht(.16*F,.5*F,.04*F),colour:e%2?"#8a4536":"#9c5340",pos:[-.7*F+e*.35*F,1.28*F,0]});return tn(i)}function Yx(){return tn([{geo:new ut(.5*F,.55*F,.28*F,12),colour:"#77776f",pos:[0,.14*F,0]},{geo:new ut(.45*F,.48*F,.16*F,12),colour:"#92928a",pos:[0,.36*F,0]},{geo:new ut(.05*F,.05*F,.35*F,6),colour:"#6b4d2c",pos:[.3*F,.6*F,0]}])}function Kx(){const i=[{geo:new ut(.07*F,.08*F,2.2*F,5),colour:"#6b4d2c",pos:[-.8*F,1.1*F,0],rot:[.12,0,0]},{geo:new ut(.07*F,.08*F,2.2*F,5),colour:"#6b4d2c",pos:[.8*F,1.1*F,0],rot:[.12,0,0]},{geo:new ut(.06*F,.06*F,1.8*F,5),colour:"#7d5730",pos:[0,2.1*F,0],rot:[0,0,Math.PI/2]}];for(let e=0;e<9;e++)i.push({geo:new ht(.02*F,1.3*F,.02*F),colour:"#c8bda0",pos:[-.7*F+e*.175*F,1.4*F,.05*F]});return tn(i)}function Zx(){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d"),r=en(31337);for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=Math.round(255*(.93+r()*.14));s.fillStyle=`rgb(${c},${c},${c})`,s.fillRect(l*16,a*16,16,16)}s.strokeStyle="rgba(0,0,0,0.07)",s.lineWidth=1;for(let a=0;a<=4;a++)s.beginPath(),s.moveTo(a*16+.5,0),s.lineTo(a*16+.5,64),s.moveTo(0,a*16+.5),s.lineTo(64,a*16+.5),s.stroke();const o=new bf(n);return o.wrapS=Es,o.wrapT=Es,o.magFilter=Ut,o.minFilter=ti,o.anisotropy=4,o}let fr=null;function Jx(){return fr||(fr={resources:{[qe.OakTree]:[1,2,3].map(i=>$c(100+i,"#5f8a3a","#456628","#5c4227")),[qe.BirchTree]:[1,2,3].map(i=>$c(200+i,"#84a84e","#5f7f34","#c9c4b4")),[qe.PineTree]:[1,2,3].map(i=>Ox(300+i,"#3f6b3f","#2b4a2b")),[qe.Boulder]:[1,2,3].map(i=>Ia(400+i,.55*F,"#8d8d88")),[qe.FlintOutcrop]:[1,2].map(i=>Ia(500+i,.3*F,"#63616c")),[qe.BerryBush]:[1,2,3].map(i=>zx(600+i)),[qe.ReedBed]:[1,2,3].map(i=>Gx(700+i)),[qe.ClayBank]:[1,2].map(i=>Hx(800+i)),[qe.BogIron]:[1,2].map(i=>Vx(900+i))},fixtures:{campfire:Wx(),kiln:Xx(),smithy:qx(),dryingRack:$x(),quern:Yx(),loom:Kx()}},fr)}function Qx(i){const e=new Ve(new ut(.03*F,.03*F,i==="spear"?2*F:.9*F,5),new Yt({color:new be("#6b4d2c")})),t=new Yt({color:new be("#b8bcc4")});if(i==="axe"){const n=new Ve(new ht(.28*F,.24*F,.05*F),t);n.rotation.y=Math.PI/2,n.position.set(0,.4*F,.14*F),e.add(n)}else if(i==="spear"){const n=new Ve(new Gr(.06*F,.3*F,5),t);n.position.y=1.1*F,e.add(n)}else{const n=new Ve(new ht(.05*F,.5*F,.02*F),t);n.position.y=.6*F,e.add(n)}return e}const Me=.5,Lo={player:{skin:"#e8b49d",shirt:"#3f6f9e",pants:"#2f3f5c",shoe:"#332211",hair:"#3b2507"},settler:{skin:"#e0ab92",shirt:"#7a6a4e",pants:"#4a4033",shoe:"#332211",hair:"#4a3a26"},native:{skin:"#d9a37f",shirt:"#6b5a3e",pants:"#4a4030",shoe:"#2e2418",hair:"#2b1f12"}},zi=i=>new Yt({color:new be(i)});function Yc(i,e,t,n){const s=e==="left"?-1:1,r=new Ot;r.position.set(s*.28*Me,.5*Me,0),i.add(r);const o=new Ve(new ht(.1*Me,.28*Me,.1*Me),t);o.position.y=-.14*Me,o.castShadow=!0,r.add(o);const a=new Ot;a.position.y=-.28*Me,r.add(a);const l=new Ve(new ht(.085*Me,.26*Me,.085*Me),n);l.position.y=-.13*Me,l.castShadow=!0,a.add(l);const c=new Ot;c.position.y=-.28*Me,a.add(c);const h=new Ve(new ht(.07*Me,.07*Me,.05*Me),n);return c.add(h),{root:r,joint:a,hand:c}}function Kc(i,e,t,n){const s=e==="left"?-1:1,r=new Ot;r.position.set(s*.11*Me,0,0),i.add(r);const o=new Ve(new ht(.14*Me,.42*Me,.14*Me),t);o.position.y=-.21*Me,o.castShadow=!0,r.add(o);const a=new Ot;a.position.y=-.42*Me,r.add(a);const l=new Ve(new ht(.12*Me,.4*Me,.12*Me),t);l.position.y=-.2*Me,l.castShadow=!0,a.add(l);const c=new Ve(new ht(.13*Me,.07*Me,.24*Me),n);return c.position.set(0,-.43*Me,.04*Me),c.castShadow=!0,a.add(c),{root:r,joint:a}}function jx(i){const e=zi(i.skin),t=zi(i.shirt),n=zi(i.pants),s=zi(i.shoe),r=zi(i.hair),o=zi("#222222"),a=new Ot,l=.9*Me,c=new Ot;c.position.y=l,a.add(c);const h=new Ot;c.add(h);const d=new Ve(new ht(.44*Me,.55*Me,.22*Me),t);d.position.y=.3*Me,d.castShadow=!0,h.add(d);const u=new Ve(new ut(.06*Me,.07*Me,.1*Me,8),e);u.position.y=.62*Me,h.add(u);const f=new Ot;f.position.y=.76*Me,h.add(f);const g=new Ve(new ht(.22*Me,.24*Me,.22*Me),e);g.castShadow=!0,f.add(g);const M=new Ve(new ht(.235*Me,.09*Me,.235*Me),r);M.position.y=.1*Me,f.add(M);const m=new Ve(new ht(.235*Me,.14*Me,.06*Me),r);m.position.set(0,.02*Me,-.09*Me),f.add(m);const p=new Ve(new Is(.02*Me,6,6),o);p.position.set(-.06*Me,.03*Me,.11*Me),f.add(p);const y=p.clone();y.position.x=.06*Me,f.add(y);const b=Yc(h,"left",t,e),v=Yc(h,"right",t,e),T=Kc(c,"left",n,s),E=Kc(c,"right",n,s),R=new Ot;R.position.y=.62*Me,h.add(R);const x=new Ot;return x.rotation.set(.85,0,-.2),x.position.set(-.05*Me,-.02*Me,.05*Me),b.hand.add(x),{group:a,body:c,spine:h,torso:d,headGroup:f,leftArm:b,rightArm:v,leftLeg:T,rightLeg:E,carryPivot:R,toolPivot:x,hipHeight:l,walkPhase:0,walkBlend:0}}const Wt=(i,e,t)=>i+(e-i)*t,Zc=i=>i<0?0:i>1?1:i;function e_(i,e){const{dt:t}=e,n=Math.abs(e.speed),s=n>.15,r=Zc(e.effort??0);i.walkBlend+=((s?1:0)-i.walkBlend)*9*t,i.walkBlend=Zc(i.walkBlend);const o=i.walkBlend,a=Wt(4.2,2.9,r);i.walkPhase+=n*t*a;const l=i.walkPhase+(e.phaseOffset??0);if(e.sleeping){i.group.rotation.z=Math.PI/2.1,i.body.position.y=i.hipHeight*.35;return}i.group.rotation.z=0;const c=Wt(.025,.055,r)*Me;i.body.position.y=i.hipHeight+Math.cos(l*2)*c*o,i.body.position.x=Math.sin(l)*Wt(.018,.008,r)*Me*o;const h=Wt(.5,.85,r),d=Math.sin(l)*h*o;i.leftLeg.root.rotation.x=d,i.rightLeg.root.rotation.x=-d;const u=Wt(.7,1.25,r);if(i.leftLeg.joint.rotation.x=Math.max(0,-Math.sin(l))*u*o,i.rightLeg.joint.rotation.x=Math.max(0,Math.sin(l))*u*o,i.spine.rotation.x=Wt(.04,.5,r)*o,i.torso.rotation.y=Math.sin(l)*Wt(.04,.07,r)*o,i.headGroup.rotation.x=-i.spine.rotation.x*.6,e.carrying){i.leftArm.root.rotation.x=-2.35,i.rightArm.root.rotation.x=-2.35,i.leftArm.root.rotation.z=.25,i.rightArm.root.rotation.z=-.25,i.leftArm.joint.rotation.x=-.5,i.rightArm.joint.rotation.x=-.5;return}if(i.leftArm.root.rotation.z=0,i.rightArm.root.rotation.z=0,e.working){const p=(performance.now()/1e3*1.55+(e.phaseOffset??0))%1,y=-.5,b=-.95,v=.5,T=w=>w*w*(3-2*w);let E,R,x;if(p<.3){const w=T(p/.3);E=Wt(y,b,w),R=.05*w,x=0}else if(p<.5){const w=(p-.3)/.2;E=Wt(b,v,w*w),R=Wt(.05,.3,w),x=.55*w}else{const w=T((p-.5)/.5);E=Wt(v,y,w),R=Wt(.3,.05,w),x=.55*(1-w)}i.leftArm.root.rotation.x=E,i.leftArm.joint.rotation.x=-.35-x,i.rightArm.root.rotation.x=-.15,i.rightArm.joint.rotation.x=-.25,i.spine.rotation.x=R,i.headGroup.rotation.x=-R*.5;return}const f=Wt(.7,1.1,r);i.leftArm.root.rotation.x=-d*f,i.rightArm.root.rotation.x=d*f;const g=Wt(-.15,-1,r),M=Wt(.3,.45,r);i.leftArm.joint.rotation.x=o*(g-Math.max(0,Math.sin(l))*M),i.rightArm.joint.rotation.x=o*(g-Math.max(0,-Math.sin(l))*M)}var ye=(i=>(i[i.Idle=0]="Idle",i[i.Working=1]="Working",i[i.Moving=2]="Moving",i[i.Fighting=3]="Fighting",i[i.Fleeing=4]="Fleeing",i[i.Sleeping=5]="Sleeping",i))(ye||{});const pr={follow:"following you",chop:"felling timber",mine:"dressing stone",haul:"hauling timber",build:"raising the wall",forage:"foraging for food",stopped:"standing by"};let cl=1;const t_=()=>cl,n_=i=>{cl=i};function Da(i,e,t,n,s={}){return{id:cl++,name:i,faction:e,x:t,y:n,facing:Math.PI/4,hp:100,maxHp:100,hunger:85,stamina:100,warmth:70,morale:70,stance:0,carrying:null,inventory:new Map,equipped:null,order:"follow",dropPile:null,sourcePile:null,destPile:null,actionTimer:0,speed:3.1,...s}}const _i=(i,e)=>i.inventory.get(e)??0;function cu(i){let e=0;for(const t of i.inventory.values())e+=t;return e}const hu=60;function uu(i,e,t){const n=hu-cu(i),s=Math.max(0,Math.min(t,n));return s>0&&i.inventory.set(e,_i(i,e)+s),s}function Ms(i,e,t){const n=_i(i,e),s=Math.min(n,t);return s<=0?0:(n-s<=0?i.inventory.delete(e):i.inventory.set(e,n-s),s)}function i_(i){if(!i.carrying||i.carrying.kind==="log"||i.carrying.kind==="post")return 1;const e=Ye[i.carrying.kind].mass;return Math.max(.35,1-e/260)}function du(i,e){const t=i.stamina<20?.6:1,n=i.hunger<15?.7:1;return i.speed*e*i_(i)*t*n}function s_(i){const e=i.equipped?vt[i.equipped]:null;return(e==null?void 0:e.chopPower)??.35}function r_(i){const e=i.equipped?vt[i.equipped]:null;return(e==null?void 0:e.minePower)??.3}function o_(i){const e=i.equipped?vt[i.equipped]:null;return 4+((e==null?void 0:e.damage)??0)}function Ir(i,e){let t=null,n=0;for(const s of i.inventory.keys()){const r=vt[s];if(!r.tool)continue;const o=e==="chop"?r.chopPower??0:e==="mine"?r.minePower??0:r.damage??0;o>n&&(n=o,t=s)}t&&(i.equipped=t)}const Dt=i=>i.hp>0,Io=Math.PI*5/4,ys=Math.PI/6,Jc={[Ze.Ocean]:new be("#1a3658"),[Ze.Shallows]:new be("#2f6b8c"),[Ze.Beach]:new be("#cebd8e"),[Ze.Marsh]:new be("#566242"),[Ze.Grassland]:new be("#6e8a48"),[Ze.Meadow]:new be("#7c984e"),[Ze.Forest]:new be("#4a6838"),[Ze.PineForest]:new be("#3e583a"),[Ze.Moor]:new be("#746a4a"),[Ze.Rock]:new be("#7c7a74"),[Ze.Snow]:new be("#e2e6ec")},a_=2,l_=11,c_=3,h_=4,u_=7,d_=i=>i<=h_?1:i<=u_?2:4,Qc=45,Gi=128,f_=4,p_=90,ps=400;class m_{constructor(e){X(this,"scene",new uf);X(this,"renderer");X(this,"cam");X(this,"models");X(this,"groundCells");X(this,"chunkViews",new Map);X(this,"actorViews",new Map);X(this,"pieceMeshes",new Map);X(this,"fixtureGroup",new Ot);X(this,"pileGroup",new Ot);X(this,"ghostMesh");X(this,"highlight");X(this,"sun");X(this,"fill");X(this,"hemi");X(this,"water");X(this,"raycaster",new kf);X(this,"pointer",new ze);X(this,"pieceGeo",new Map);X(this,"snapMarkers");X(this,"dropMarker");X(this,"foodMarker");X(this,"pileRings",[]);X(this,"pileRingGeo",new vs(1.1,1.35,28));X(this,"pileRingMat",new Hi({color:"#e0bd52",transparent:!0,opacity:.5,side:ln}));X(this,"wallGhosts");X(this,"farMesh",null);X(this,"farState",{step:0,cx:Number.NaN,cy:Number.NaN});X(this,"fixtureStamp","");X(this,"pileStamp","");X(this,"pileGeo",new ut(.08,.08,.9,5));X(this,"pileMatA",new Yt({color:"#8a6136"}));X(this,"pileMatB",new Yt({color:"#6f4e2a"}));this.canvas=e,this.renderer=new Nx({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rh,this.scene.background=new be("#8fb3d0"),this.scene.fog=new il("#8fb3d0",60,190),this.cam=new Hr(-1,1,1,-1,.1,2e3),this.models=Jx(),this.groundCells=Zx(),this.hemi=new Df("#bcd8f0","#4a4632",.85),this.scene.add(this.hemi),this.sun=new vc("#fff2d5",1.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);const t=34;this.sun.shadow.camera.left=-t,this.sun.shadow.camera.right=t,this.sun.shadow.camera.top=t,this.sun.shadow.camera.bottom=-t,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=600,this.sun.shadow.bias=-8e-4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new vc("#b9d2ee",.45),this.fill.castShadow=!1,this.scene.add(this.fill),this.water=new Ve(new Ls(1200,1200),new Yt({color:new be("#2b5f85"),transparent:!0,opacity:.86})),this.water.rotation.x=-Math.PI/2,this.water.position.y=.02,this.water.receiveShadow=!0,this.scene.add(this.water),this.scene.add(this.fixtureGroup),this.scene.add(this.pileGroup),this.ghostMesh=new Ve(new ht(1,1,1),new Yt({color:"#8fd48f",transparent:!0,opacity:.55})),this.ghostMesh.visible=!1,this.scene.add(this.ghostMesh),this.highlight=new Sf(new wf(new ht(1,1,1)),new Kh({color:"#f0c419",depthTest:!1})),this.highlight.visible=!1,this.highlight.renderOrder=999,this.scene.add(this.highlight),this.snapMarkers=new nr(new Is(.045,6,4),new Hi({color:"#7fd1c0",transparent:!0,opacity:.55}),512),this.snapMarkers.count=0,this.snapMarkers.frustumCulled=!1,this.scene.add(this.snapMarkers),this.dropMarker=new Ve(new vs(1.1,1.35,28),new Hi({color:"#e0bd52",transparent:!0,opacity:.5,side:ln})),this.dropMarker.rotation.x=-Math.PI/2,this.dropMarker.visible=!1,this.scene.add(this.dropMarker),this.foodMarker=new Ve(new vs(1.1,1.35,28),new Hi({color:"#7fbf4f",transparent:!0,opacity:.5,side:ln})),this.foodMarker.rotation.x=-Math.PI/2,this.foodMarker.visible=!1,this.scene.add(this.foodMarker),this.wallGhosts=new nr(new ht(1,1,1),new Yt({color:"#e0bd52",transparent:!0,opacity:.32}),1024),this.wallGhosts.count=0,this.wallGhosts.frustumCulled=!1,this.scene.add(this.wallGhosts),this.resize()}geometryFor(e){let t=this.pieceGeo.get(e);if(!t){const n=Ye[e];n.round?t=kx(4242):n.cylindrical?t=Bx(n.colour,n.colourDark,"#c8a877",n.halfRound===!0,14,e.length*7919):t=new ht(1,1,1),this.pieceGeo.set(e,t)}return t}usesVertexColours(e){const t=Ye[e];return t.round===!0||t.cylindrical===!0}pieceScale(e,t,n){const s=Ye[e];return s.round?n.setScalar(s.length):t?n.set(s.width,s.length,s.thickness):n.set(s.length,s.thickness,s.width)}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${t}px`,this.updateProjection(e/t,this.cam.top||20)}updateProjection(e,t){this.cam.left=-t*e,this.cam.right=t*e,this.cam.top=t,this.cam.bottom=-t,this.cam.updateProjectionMatrix()}placeCamera(e,t){const n=window.innerWidth/window.innerHeight;this.updateProjection(n,e.zoom);const s=Math.cos(e.pitch),r=new L(Math.cos(e.yaw)*s*ps,Math.sin(e.pitch)*ps,Math.sin(e.yaw)*s*ps),o=new L(e.x,t,e.y);this.cam.position.copy(o).add(r),this.cam.lookAt(o),this.cam.updateMatrixWorld(),this.water.position.x=e.x,this.water.position.z=e.y;const a=Math.max(1200,e.zoom*90);this.water.scale.set(a/1200,a/1200,1)}buildChunkMesh(e,t=1){const n=[],s=[],r=[],o=[],a=e.cx*it,l=e.cy*it,c=new be;for(let u=0;u<it;u+=t)for(let f=0;f<it;f+=t){const g=e.tiles[u*it+f],M=fi(Os(e,f,u)),m=fi(Os(e,f+t,u)),p=fi(Os(e,f+t,u+t)),y=fi(Os(e,f,u+t));if(g.biome===Ze.Ocean)continue;c.copy(Jc[g.biome]);const b=.9+g.jitter*.2;c.multiplyScalar(b);const v=n.length/3,T=a+f,E=l+u;n.push(T,M,E,T+t,m,E,T+t,p,E+t,T,y,E+t);for(let R=0;R<4;R++)s.push(c.r,c.g,c.b);r.push(T,E,T+t,E,T+t,E+t,T,E+t),o.push(v,v+2,v+1,v,v+3,v+2)}const h=new At;h.setAttribute("position",new He(n,3)),h.setAttribute("color",new He(s,3)),h.setAttribute("uv",new He(r,2)),h.setIndex(o),h.computeVertexNormals();const d=new Ve(h,new Yt({vertexColors:!0,flatShading:!1,map:this.groundCells}));return d.receiveShadow=!0,d.castShadow=!1,d.userData.isTerrain=!0,d}buildChunkProps(e,t){const n=new Map;for(const c of e.resources){const h=this.models.resources[c.kind],d=c.id%h.length,u=`${c.kind}:${d}`;let f=n.get(u);f||n.set(u,f={geo:h[d],nodes:[]}),f.nodes.push(c)}const s=[],r=new je,o=new cn,a=new L,l=new L;for(const{geo:c,nodes:h}of n.values()){const d=new nr(c,new Yt({vertexColors:!0}),h.length);d.castShadow=!0,d.receiveShadow=!0,h.forEach((u,f)=>{l.set(u.x,t.elevationAt(u.x,u.y),u.y),o.setFromAxisAngle(new L(0,1,0),u.id%32*.196),a.setScalar(u.scale),r.compose(l,o,a),d.setMatrixAt(f,r)}),d.instanceMatrix.needsUpdate=!0,d.userData.nodes=h,s.push(d)}return s}viewChunksFor(e){if(e.zoom>=Qc)return f_;const t=window.innerWidth/window.innerHeight,n=e.zoom*t,s=e.zoom/Math.max(.25,Math.sin(e.pitch)),r=Math.hypot(n,s);return Math.max(a_,Math.min(l_,Math.ceil(r/it)+1))}syncFarField(e,t){if(t.zoom<Qc){this.farMesh&&(this.farMesh.visible=!1);return}const n=Math.max(4,Math.round(t.zoom/6)),s=Math.round(t.x/n)*n,r=Math.round(t.y/n)*n;if(this.farMesh&&this.farState.step===n&&this.farState.cx===s&&this.farState.cy===r){this.farMesh.visible=!0;return}this.farState={step:n,cx:s,cy:r};const o=[],a=[],l=[],c=new be,h=Gi*n/2,d=e.seed;for(let g=0;g<=Gi;g++)for(let M=0;M<=Gi;M++){const m=s-h+M*n,p=r-h+g*n,y=Br(m,p,d),b=Eh(y,Sh(m,p,y,d),bh(p,y));o.push(m,Math.max(0,fi(y)),p),c.copy(Jc[b]),a.push(c.r,c.g,c.b)}const u=Gi+1;for(let g=0;g<Gi;g++)for(let M=0;M<Gi;M++){const m=g*u+M;l.push(m,m+u,m+1,m+1,m+u,m+u+1)}const f=new At;f.setAttribute("position",new He(o,3)),f.setAttribute("color",new He(a,3)),f.setIndex(l),f.computeVertexNormals(),this.farMesh&&(this.scene.remove(this.farMesh),this.farMesh.geometry.dispose()),this.farMesh=new Ve(f,new Yt({vertexColors:!0})),this.farMesh.position.y=-.4,this.farMesh.renderOrder=-1,this.farMesh.frustumCulled=!1,this.scene.add(this.farMesh)}syncChunks(e,t){const n=Math.floor(t.x/it),s=Math.floor(t.y/it),r=new Set,o=this.viewChunksFor(t);for(let a=-o;a<=o;a++)for(let l=-o;l<=o;l++){const c=n+l,h=s+a,d=`${c},${h}`;r.add(d);const u=Math.max(Math.abs(l),Math.abs(a)),f=u<=c_&&t.zoom<p_,g=d_(u),M=e.getChunk(c,h),m=this.chunkViews.get(d);if(m&&!M.dirty&&m.hasProps===f&&m.lod===g)continue;m&&this.disposeChunkView(m);const p=this.buildChunkMesh(M,g),y=f?this.buildChunkProps(M,e):[];this.scene.add(p);for(const b of y)this.scene.add(b);this.chunkViews.set(d,{mesh:p,props:y,hasProps:f,lod:g}),M.dirty=!1}for(const[a,l]of this.chunkViews)r.has(a)||(this.disposeChunkView(l),this.chunkViews.delete(a))}disposeChunkView(e){this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();for(const t of e.props)this.scene.remove(t),t.material.dispose(),t.dispose()}invalidateAt(e,t,n){const s=`${Math.floor(t/it)},${Math.floor(n/it)}`,r=this.chunkViews.get(s);r&&(this.disposeChunkView(r),this.chunkViews.delete(s))}syncPieces(e,t){const n=new Map,s=Math.min(t.zoom*3,140),r=e.pieces.query({x0:t.x-s,x1:t.x+s,y0:t.y-s,y1:t.y+s,z0:-500,z1:500});for(const d of r){let u=n.get(d.kind);u||n.set(d.kind,u=[]),u.push(d)}const o=new je,a=new cn,l=new L(0,1,0),c=new L,h=new L;for(const[d,u]of n){let f=this.pieceMeshes.get(d);if(!f||f.count<u.length){f&&(this.scene.remove(f),f.dispose());const y=Ye[d],b=this.geometryFor(d),v=new Yt({color:this.usesVertexColours(d)?16777215:new be(y.colour),vertexColors:this.usesVertexColours(d)});f=new nr(b,v,Math.max(64,u.length*2)),f.castShadow=!0,f.receiveShadow=!0,f.userData.kind=d,this.pieceMeshes.set(d,f),this.scene.add(f)}const g=Ye[d],M=g.round===!0,m=g.cylindrical===!0,p=new cn().setFromAxisAngle(new L(0,0,1),Math.PI/2);u.forEach((y,b)=>{m?h.set(g.length,g.thickness,g.width):this.pieceScale(d,y.upright,h);const v=y.upright?g.length:g.thickness;c.set(y.x,M?y.z:y.z+v/2,y.y),a.setFromAxisAngle(l,-y.yaw),y.upright&&m&&a.multiply(p),o.compose(c,a,h),f.setMatrixAt(b,o)}),f.count=u.length,f.instanceMatrix.needsUpdate=!0,f.userData.pieces=u}for(const[d,u]of this.pieceMeshes)n.has(d)||(u.count=0,u.userData.pieces=[])}syncFixtures(e){const t=e.fixtures.map(n=>`${n.id}:${n.progress.toFixed(2)}`).join("|");if(t!==this.fixtureStamp){this.fixtureStamp=t;for(const n of[...this.fixtureGroup.children]){this.fixtureGroup.remove(n);const s=n;s.material&&s.material.dispose()}for(const n of e.fixtures){const s=ri[n.kind],r=n.tx+s.w/2,o=n.ty+s.h/2,a=new Ve(this.models.fixtures[n.kind],new Yt({vertexColors:!0,transparent:n.progress<1,opacity:n.progress<1?.35+n.progress*.5:1}));if(a.position.set(r,e.elevationAt(r,o),o),a.castShadow=!0,a.receiveShadow=!0,a.userData.fixture=n,this.fixtureGroup.add(a),n.kind==="campfire"&&n.progress>=1){const l=new Nf("#ff9a3c",2.2,14,2);l.position.set(r,e.elevationAt(r,o)+.5,o),this.fixtureGroup.add(l)}}}}syncPiles(e){let t=0;for(const r of e.piles)for(const o of r.contents.values())t+=o;const n=`${e.piles.length}:${t}`;if(n===this.pileStamp)return;this.pileStamp=n;for(const r of[...this.pileGroup.children])this.pileGroup.remove(r);const s=this.pileGeo;for(const r of e.piles){let o=0;for(const c of r.contents.values())o+=c;const a=Math.min(10,Math.ceil(o/4)),l=e.elevationAt(r.x,r.y);for(let c=0;c<a;c++){const h=new Ve(s,c%2?this.pileMatA:this.pileMatB),d=Math.floor(c/3);h.position.set(r.x+(c%3-1)*.2,l+.08+d*.16,r.y),h.rotation.z=Math.PI/2,h.castShadow=!0,h.userData.pile=r,this.pileGroup.add(h)}}}syncActors(e,t,n){const s=new Set;for(const r of t){if(r.hp<=0&&!r.isPlayer)continue;s.add(r.id);let o=this.actorViews.get(r.id);if(!o){const h=r.faction==="natives"?Lo.native:r.isPlayer?Lo.player:Lo.settler,d=jx(h);this.scene.add(d.group),o={rig:d,tool:null,toolKind:null,carry:null,lastX:r.x,lastY:r.y,speed:0},this.actorViews.set(r.id,o)}const a=o.rig.group;a.position.set(r.x,e.elevationAt(r.x,r.y),r.y),a.rotation.y=-r.facing+Math.PI/2;const l=Math.hypot(r.x-o.lastX,r.y-o.lastY),c=n>0?l/n:0;o.speed+=(c-o.speed)*Math.min(1,n*12),o.lastX=r.x,o.lastY=r.y,e_(o.rig,{speed:o.speed,dt:n,effort:Math.max(0,Math.min(1,(o.speed-2.2)/2.5)),working:r.actionTimer>0&&!r.carrying,carrying:r.carrying!==null,sleeping:r.stance===ye.Sleeping,phaseOffset:r.id%17*.37}),this.syncHeldItems(r,o)}for(const[r,o]of this.actorViews)s.has(r)||(this.scene.remove(o.rig.group),this.actorViews.delete(r))}syncHeldItems(e,t){if(e.carrying){const s=Ye[e.carrying.kind];if(!t.carry||t.carry.userData.kind!==e.carrying.kind){t.carry&&t.rig.carryPivot.remove(t.carry);const r=new Ve(this.geometryFor(e.carrying.kind),new Yt({color:this.usesVertexColours(e.carrying.kind)?16777215:new be(s.colour),vertexColors:this.usesVertexColours(e.carrying.kind)}));s.cylindrical?r.scale.set(s.length,s.thickness,s.width):this.pieceScale(e.carrying.kind,!1,r.scale),r.castShadow=!0,r.userData.kind=e.carrying.kind,s.round?(r.position.set(0,-.28,.3),r.rotation.set(.3,.6,0)):(r.position.set(0,.16,0),r.rotation.set(0,0,0)),t.rig.carryPivot.add(r),t.carry=r}}else t.carry&&(t.rig.carryPivot.remove(t.carry),t.carry.geometry.dispose(),t.carry=null);const n=e.carrying?null:g_(e.equipped);if(n!==t.toolKind){if(t.tool&&(t.rig.toolPivot.remove(t.tool),t.tool=null),n){const s=Qx(n);s.castShadow=!0,t.rig.toolPivot.add(s),t.tool=s}t.toolKind=n}}setPointer(e,t){this.pointer.x=e/window.innerWidth*2-1,this.pointer.y=-(t/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.cam)}pickGround(e,t,n){this.setPointer(e,t);const s=this.raycaster.ray,r=s.origin,o=s.direction;if(o.y>=-1e-6)return null;const a=(yh-r.y)/o.y,l=(0-r.y)/o.y;let c=Math.max(0,a);const h=Math.max(c,l),d=.6;let u=c;for(r.y+o.y*c-n.peekElevation(r.x+o.x*c,r.z+o.z*c);c<h;){c=Math.min(c+d,h);const f=r.x+o.x*c,g=r.z+o.z*c;if(r.y+o.y*c-n.peekElevation(f,g)<=0){let m=u,p=c;for(let v=0;v<12;v++){const T=(m+p)/2;r.y+o.y*T-n.peekElevation(r.x+o.x*T,r.z+o.z*T)>0?m=T:p=T}const y=r.x+o.x*p,b=r.z+o.z*p;return{x:y,y:b,z:n.peekElevation(y,b)}}u=c}return l>0?{x:r.x+o.x*l,y:r.z+o.z*l,z:0}:null}pickResource(e,t){const n=t.resourcesNear(e.x,e.y,1.2);return n.length?n[0]:null}pickPiece(e,t,n,s){this.setPointer(e,t);const r=this.raycaster.ray,o=n.pieces.queryRadius(s.x,s.y,14);let a=null,l=1/0;const c=.12;for(const h of o){const d=jc(r,h,c);d!==null&&d<l&&(l=d,a=h)}if(!a){let h=.3;for(const d of o){const u=Ht(d),f=Math.cos(u.yaw),g=Math.sin(u.yaw),M=s.x-u.cx,m=s.y-u.cy,p=Math.max(0,Math.abs(M*f+m*g)-u.hx),y=Math.max(0,Math.abs(-M*g+m*f)-u.hy),b=Math.hypot(p,y);b<h&&(h=b,a=d)}}return a}pickWallCell(e,t,n){this.setPointer(e,t);const s=this.raycaster.ray,r=.12;let o=null,a=1/0;for(const l of n){const c={kind:"log",x:l.x,y:l.y,z:l.z,yaw:0,upright:!0},h=jc(s,c,r);h!==null&&h<a&&(a=h,o={x:l.x,y:l.y})}return o}worldToScreen(e,t,n){const s=new L(e,n,t).project(this.cam);return{x:(s.x+1)/2*window.innerWidth,y:(1-s.y)/2*window.innerHeight,visible:s.z<1}}render(e,t,n,s={}){const r=e.elevationAt(t.x,t.y);this.placeCamera(t,r),this.syncFarField(e,t),this.syncChunks(e,t),this.syncPieces(e,t),this.syncFixtures(e),this.syncPiles(e),this.syncActors(e,n,s.dt??1/60),this.updateLighting(s.timeOfDay??.5,t,r),this.updateGhost(s.ghost),this.updateSnapMarkers(s.snapPoints,s.activeSnap),this.updateWallGhosts(s.wallCells);const o=s.stockpiles??(s.dropPoint?[{id:1,...s.dropPoint}]:[]);for(this.dropMarker.visible=!1;this.pileRings.length<o.length;){const a=new Ve(this.pileRingGeo,this.pileRingMat.clone());a.rotation.x=-Math.PI/2,this.scene.add(a),this.pileRings.push(a)}this.pileRings.forEach((a,l)=>{const c=o[l];if(!c){a.visible=!1;return}a.visible=!0,a.position.set(c.x,e.elevationAt(c.x,c.y)+.04,c.y);const h=a.material;h.opacity=c.id===s.activePileId?.9:.5}),s.foodPile?(this.foodMarker.visible=!0,this.foodMarker.position.set(s.foodPile.x,e.elevationAt(s.foodPile.x,s.foodPile.y)+.04,s.foodPile.y)):this.foodMarker.visible=!1,this.updateHighlight(e,s.hoveredPiece,s.hoveredResourceId),this.renderer.render(this.scene,this.cam)}updateLighting(e,t,n){const s=e*Math.PI*2-Math.PI/2,r=Math.sin(s),o=Math.max(0,r);this.sun.position.set(t.x+Math.cos(s*.6)*120,n+40+o*180,t.y+90),this.sun.target.position.set(t.x,n,t.y),this.fill.position.set(t.x-Math.cos(s*.6)*90,n+30,t.y-70),this.fill.intensity=.28+o*.3,this.sun.intensity=.25+o*1.7;const a=1-Math.min(1,o*2.2);this.sun.color.setRGB(1,.95-a*.22,.84-a*.36),this.hemi.intensity=.62+o*.7;const l=new be().setRGB(.1+o*.48,.14+o*.58,.22+o*.62);this.scene.background.copy(l);const c=this.scene.fog;c.color.copy(l);const h=t.zoom*(3+o*5);c.near=ps+t.zoom*.8,c.far=ps+h}updateSnapMarkers(e,t){if(!e||e.length===0){this.snapMarkers.count=0;return}const n=new je,s=new L,r=new cn,o=new L,a=Math.min(e.length,512);for(let l=0;l<a;l++){const c=e[l],h=t!=null&&Math.abs(c.x-t.x)<1e-6&&Math.abs(c.y-t.y)<1e-6&&Math.abs(c.z-t.z)<1e-6;s.set(c.x,c.z+.03,c.y),o.setScalar(h?2.1:1),n.compose(s,r,o),this.snapMarkers.setMatrixAt(l,n)}this.snapMarkers.count=a,this.snapMarkers.instanceMatrix.needsUpdate=!0}updateWallGhosts(e){if(!e||e.length===0){this.wallGhosts.count=0;return}const t=Ye.log,n=new je,s=new cn().setFromAxisAngle(new L(0,0,1),Math.PI/2),r=new L(t.length,t.thickness,t.width),o=new L,a=Math.min(e.length,1024);for(let l=0;l<a;l++){const c=e[l];o.set(c.x,c.z+t.length/2,c.y),n.compose(o,s,r),this.wallGhosts.setMatrixAt(l,n)}this.wallGhosts.count=a,this.wallGhosts.instanceMatrix.needsUpdate=!0}updateGhost(e){if(!e){this.ghostMesh.visible=!1;return}const t=Ye[e.kind],n=t.cylindrical?new L(t.length,t.thickness,t.width):this.pieceScale(e.kind,e.upright,new L);this.ghostMesh.visible=!0,this.ghostMesh.geometry=this.geometryFor(e.kind),this.ghostMesh.scale.copy(n);const s=e.upright?t.length:t.thickness;this.ghostMesh.position.set(e.x,t.round?e.z:e.z+s/2,e.y),this.ghostMesh.quaternion.identity(),this.ghostMesh.rotateY(-e.yaw),e.upright&&t.cylindrical&&this.ghostMesh.rotateZ(Math.PI/2),this.ghostMesh.material.color.set(e.ok?"#8fd48f":"#d4694a")}updateHighlight(e,t,n){if(t){const s=xn(t);this.highlight.visible=!0,this.highlight.scale.set(s.x1-s.x0,s.z1-s.z0,s.y1-s.y0),this.highlight.position.set((s.x0+s.x1)/2,(s.z0+s.z1)/2,(s.y0+s.y1)/2),this.highlight.rotation.y=0;return}if(n!=null)for(const s of this.chunkViews.values())for(const r of s.props){const o=r.userData.nodes,a=o==null?void 0:o.find(l=>l.id===n);if(a){this.highlight.visible=!0,this.highlight.scale.set(1.4,3.2,1.4),this.highlight.position.set(a.x,e.elevationAt(a.x,a.y)+1.6,a.y);return}}this.highlight.visible=!1}dispose(){this.renderer.dispose()}}function jc(i,e,t=0){const n=Ye[e.kind],s=e.upright?n.width:n.length,r=e.upright?n.length:n.thickness,o=e.upright?n.thickness:n.width,a=e.x,l=e.z+r/2,c=e.y,h=Math.cos(e.yaw),d=Math.sin(e.yaw),u=i.origin.x-a,f=i.origin.y-l,g=i.origin.z-c,M=u*h-g*d,m=u*d+g*h,p=i.direction.x*h-i.direction.z*d,y=i.direction.x*d+i.direction.z*h,b=[s/2+t,r/2+t,o/2+t],v=[M,f,m],T=[p,i.direction.y,y];let E=-1/0,R=1/0;for(let x=0;x<3;x++){if(Math.abs(T[x])<1e-9){if(v[x]<-b[x]||v[x]>b[x])return null;continue}const w=1/T[x];let C=(-b[x]-v[x])*w,P=(b[x]-v[x])*w;if(C>P&&([C,P]=[P,C]),C>E&&(E=C),P<R&&(R=P),E>R)return null}return R<0?null:Math.max(E,0)}function g_(i){if(!i)return null;const e=vt[i];return e!=null&&e.tool?i==="spear"?"spear":i==="flintAxe"||i==="ironAxe"?"axe":"blade":null}class x_{constructor(e){X(this,"down",new Set);X(this,"pressedThisFrame",new Set);X(this,"releasedThisFrame",new Set);X(this,"mouseX",0);X(this,"mouseY",0);X(this,"wheelDelta",0);X(this,"leftDown",!1);X(this,"rightDown",!1);X(this,"middleDown",!1);X(this,"leftClicked",!1);X(this,"rightClicked",!1);X(this,"dragX",0);X(this,"dragY",0);window.addEventListener("keydown",t=>{if(t.metaKey||t.ctrlKey)return;const n=t.key.toLowerCase();this.down.has(n)||this.pressedThisFrame.add(n),this.down.add(n),["tab"," ","arrowup","arrowdown","arrowleft","arrowright"].includes(n)&&t.preventDefault()}),window.addEventListener("keyup",t=>{const n=t.key.toLowerCase();this.down.delete(n),this.releasedThisFrame.add(n)}),window.addEventListener("blur",()=>{this.down.clear(),this.leftDown=!1,this.rightDown=!1}),e.addEventListener("mousemove",t=>{this.dragX+=t.clientX-this.mouseX,this.dragY+=t.clientY-this.mouseY,this.mouseX=t.clientX,this.mouseY=t.clientY}),e.addEventListener("mousedown",t=>{t.button===0&&(this.leftDown=!0,this.leftClicked=!0),t.button===1&&(this.middleDown=!0,t.preventDefault()),t.button===2&&(this.rightDown=!0,this.rightClicked=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.leftDown=!1),t.button===1&&(this.middleDown=!1),t.button===2&&(this.rightDown=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{this.wheelDelta+=t.deltaY,t.preventDefault()},{passive:!1})}isDown(e){return this.down.has(e)}pressed(e){return this.pressedThisFrame.has(e)}released(e){return this.releasedThisFrame.has(e)}endFrame(){this.pressedThisFrame.clear(),this.releasedThisFrame.clear(),this.wheelDelta=0,this.leftClicked=!1,this.rightClicked=!1,this.dragX=0,this.dragY=0}moveVector(){let e=0,t=0;this.isDown("w")&&(t+=1),this.isDown("s")&&(t-=1),this.isDown("a")&&(e-=1),this.isDown("d")&&(e+=1);const n=Math.hypot(e,t);return n>0?{x:e/n,y:t/n}:{x:0,y:0}}}const fu=["log","boulder","plank","thatchBundle"],pu=["campfire","kiln","smithy","dryingRack"];class __{constructor(e){X(this,"root");X(this,"vitals");X(this,"pack");X(this,"status");X(this,"builder");X(this,"tip");X(this,"logEl");X(this,"banner");X(this,"help");X(this,"roster");X(this,"pileTool");X(this,"pileToolStamp","");X(this,"rosterStamp","");X(this,"floaterLayer");X(this,"floaterPool",[]);X(this,"pileLayer");X(this,"pilePool",[]);X(this,"messages",[]);X(this,"onSelect");X(this,"onOrder");X(this,"onOrderAll");X(this,"onLocate");X(this,"onAssignPile");X(this,"onPickPileSlot");X(this,"onRemovePile");this.root=e,this.root.innerHTML=`
      <div class="panel" id="status"></div>
      <div class="panel" id="vitals"></div>
      <div class="panel" id="pack"></div>
      <div class="panel" id="builder"></div>
      <div class="panel" id="log"></div>
      <div class="panel" id="help"></div>
      <div id="tip"></div>
      <div id="banner"></div>
      <div id="floaters"></div>
      <div id="pileLabels"></div>
      <div class="panel" id="pileTool"></div>
      <div class="panel" id="roster"></div>
    `,this.pileTool=e.querySelector("#pileTool"),this.roster=e.querySelector("#roster"),this.floaterLayer=e.querySelector("#floaters"),this.pileLayer=e.querySelector("#pileLabels"),this.status=e.querySelector("#status"),this.vitals=e.querySelector("#vitals"),this.pack=e.querySelector("#pack"),this.builder=e.querySelector("#builder"),this.tip=e.querySelector("#tip"),this.logEl=e.querySelector("#log"),this.banner=e.querySelector("#banner"),this.help=e.querySelector("#help"),this.help.innerHTML=`
      <b>WASD</b> walk &nbsp; <b>scroll</b> zoom<br>
      <b>&larr; &rarr;</b> turn view 90&deg; &nbsp; <b>&uarr; &darr;</b> tilt 15&deg;<br>
      <b>/</b> reset view<br>
      <b>left click</b> chop / mine / gather berries<br>
      <span style="color:var(--ink-dim)">set a settler to Forage to stock the larder &mdash; everyone eats from it</span><br>
      <b>right click</b> a log, boulder or piece to pick up<br>
      <b>left click</b> set the carried piece down<br>
      <b>Q</b> / <b>E</b> turn 90&deg; &nbsp; <b>F</b> upright &nbsp; <b>V</b>/<b>B</b> raise<br>
      <b>right click</b> a settler to order them<br>
      <b>right click</b> ground to set the timber pile<br>
      <b>1&ndash;4</b> pieces &nbsp; <b>5&ndash;8</b> fixtures<br>
      <b>G</b> set pile 1 &nbsp; <b>T</b> set larder<br>
      <b>P</b> stockpile tool (place piles 1&ndash;5)<br>
      <span style="color:var(--ink-dim)">assign each settler's pile in the roster</span><br>
      <b>K</b> wall tool &nbsp; <b>M</b> crew roster<br>
      <b>O</b> save game &nbsp; <b>L</b> load game<br>
      <b>C</b> craft &nbsp; <b>H</b> hide this
    `}log(e){this.messages.unshift({text:e,age:0}),this.messages.length>8&&this.messages.pop()}showBanner(e,t,n=5200){this.banner.innerHTML=`${e}<span class="sub">${t}</span>`,this.banner.classList.add("show"),setTimeout(()=>this.banner.classList.remove("show"),n)}toggleHelp(){this.help.classList.toggle("hidden")}setPileLabels(e){for(;this.pilePool.length<e.length;){const t=document.createElement("div");t.className="pile-label",this.pileLayer.appendChild(t),this.pilePool.push(t)}this.pilePool.forEach((t,n)=>{const s=e[n];if(!s||!s.visible){t.style.display="none";return}t.style.display="block",t.style.transform=`translate(-50%, -50%) translate(${s.x}px, ${s.y}px)`,t.classList.toggle("sel",s.highlight),t.innerHTML!==s.text&&(t.innerHTML=s.text)})}setFloaters(e){for(;this.floaterPool.length<e.length;){const t=document.createElement("div");t.className="floater",this.floaterLayer.appendChild(t),this.floaterPool.push(t)}this.floaterPool.forEach((t,n)=>{const s=e[n];if(!s||!s.visible){t.style.display="none";return}t.style.display="block",t.style.transform=`translate(-50%, -50%) translate(${s.x}px, ${s.y}px)`,t.style.color=s.colour,t.style.opacity=String(s.alpha),t.textContent!==s.text&&(t.textContent=s.text)})}setPileTool(e,t,n,s){if(!e){this.pileTool.style.display="none",this.pileToolStamp="";return}this.pileTool.style.display="block";const r=`${t}|${n.join(",")}|${s}`;if(r===this.pileToolStamp)return;this.pileToolStamp=r;const o=[];for(let a=1;a<=s;a++){const l=n.includes(a),c=`${a===t?"active":""} ${l?"placed":"empty"}`;o.push(`<span class="pile-slot">
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
    `;for(const a of this.pileTool.querySelectorAll("button[data-slot]"))a.onclick=()=>{var l;return(l=this.onPickPileSlot)==null?void 0:l.call(this,Number(a.dataset.slot))};for(const a of this.pileTool.querySelectorAll("button[data-remove]"))a.onclick=()=>{var l;return(l=this.onRemovePile)==null?void 0:l.call(this,Number(a.dataset.remove))}}setRoster(e,t,n=[],s=null){if(!e){this.roster.style.display="none",this.rosterStamp="";return}this.roster.style.display="block";const r=n.length>=2,o=d=>d??s,a=(d,u,f,g)=>`
      <span class="pile-pick"><i>${g}</i>${n.map(M=>`<button data-assign="${d}" data-role="${u}" data-pile="${M}" class="${o(f)===M?"on":""}">${M}</button>`).join("")}</span>`,l=d=>r?d.order==="chop"||d.order==="mine"?a(d.id,"drop",d.dropPile,"stack at"):d.order==="build"?a(d.id,"source",d.sourcePile,"take from"):d.order==="haul"?a(d.id,"source",d.sourcePile,"take from")+a(d.id,"dest",d.destPile,"carry to"):"":"",c=t.map(d=>`${d.id}:${d.order}:${d.dropPile}:${d.sourcePile}:${d.destPile}`).join("|")+`#${n.join(",")}/${s}`;if(c===this.rosterStamp){for(const d of t){const u=this.roster.querySelector(`[data-row="${d.id}"] .st`);u&&(u.textContent=`${d.status} · ${Math.round(d.distance)} tiles away`)}return}this.rosterStamp=c;const h=[["follow","Follow"],["chop","Fell"],["mine","Mine"],["build","Build"],["haul","Haul"],["forage","Forage"],["stopped","Stop"]];this.roster.innerHTML=`
      <h3>The crew <span class="dim">&mdash; M to close</span></h3>
      <div class="roster-all">
        <span class="dim">everyone:</span>
        ${h.map(([d,u])=>`<button data-all="${d}">${u}</button>`).join("")}
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
              ${h.map(([u,f])=>`<button data-id="${d.id}" data-order="${u}" class="${d.order===u?"on":""}">${f}</button>`).join("")}
            </div>
            ${l(d)?`<div class="piles">${l(d)}</div>`:""}
          </div>`).join("")}
      </div>
      ${t.length===0?'<div class="dim">Nobody left to command.</div>':""}
    `;for(const d of this.roster.querySelectorAll("button[data-all]"))d.onclick=()=>{var u;return(u=this.onOrderAll)==null?void 0:u.call(this,d.dataset.all)};for(const d of this.roster.querySelectorAll("button[data-order]"))d.onclick=()=>{var u;return(u=this.onOrder)==null?void 0:u.call(this,Number(d.dataset.id),d.dataset.order)};for(const d of this.roster.querySelectorAll("[data-locate]"))d.onclick=()=>{var u;return(u=this.onLocate)==null?void 0:u.call(this,Number(d.dataset.locate))};for(const d of this.roster.querySelectorAll("button[data-assign]"))d.onclick=()=>{var u;return(u=this.onAssignPile)==null?void 0:u.call(this,Number(d.dataset.assign),d.dataset.role,Number(d.dataset.pile))}}setTip(e,t,n,s){if(!e){this.tip.style.display="none";return}this.tip.style.display="block",this.tip.innerHTML=`<span class="t">${e}</span>${t?`<span class="hint">${t}</span>`:""}`;const r=this.tip.offsetWidth,o=this.tip.offsetHeight;this.tip.style.left=`${Math.min(window.innerWidth-r-8,n+16)}px`,this.tip.style.top=`${Math.min(window.innerHeight-o-8,s+16)}px`}update(e,t,n){for(const o of this.messages)o.age+=n;this.status.innerHTML=`
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
      ${s("health",e.hp/e.maxHp*100,"#c0503f")}
      ${s("vigour",e.stamina,"#7fbf5f")}
      ${s("hunger",e.hunger,"#d9a441")}
      ${s("warmth",e.warmth,"#5aa9c9")}
      ${e.carrying?`<div class="bar"><label>carrying</label><span style="color:var(--gold)">${Ye[e.carrying.kind].name}</span></div>`:""}
    `;const r=[...e.inventory.entries()].filter(([,o])=>o>0);this.pack.innerHTML=r.length?r.map(([o,a])=>`<div class="slot ${e.equipped===o?"equipped":""}"><span class="n">${a}</span>${vt[o].name}</div>`).join(""):'<div class="slot">empty pack</div>',this.renderBuilder(e,t.selection),this.logEl.innerHTML=this.messages.map(o=>`<div class="${o.age<2.5?"fresh":""}">${o.text}</div>`).join("")}renderBuilder(e,t){const n=["<h3>Pieces</h3>"];fu.forEach((s,r)=>{const o=Ye[s],a=o.fromItem,l=a?e.inventory.get(a)??0:0,c=!a||l>0,h=(t==null?void 0:t.mode)==="piece"&&t.kind===s;n.push(`
        <div class="row ${h?"active":""} ${c?"":"locked"}" data-mode="piece" data-kind="${s}">
          <span><span class="key">${r+1}</span>${o.name}</span>
          <span class="cost">${a?`${l} ${vt[a].name.toLowerCase()}`:"shaped"}</span>
        </div>`)}),n.push('<h3 style="margin-top:12px">Fixtures</h3>'),pu.forEach((s,r)=>{const o=ri[s],a=o.cost.every(c=>(e.inventory.get(c.item)??0)>=c.count),l=(t==null?void 0:t.mode)==="fixture"&&t.kind===s;n.push(`
        <div class="row ${l?"active":""} ${a?"":"locked"}" data-mode="fixture" data-kind="${s}">
          <span><span class="key">${r+5}</span>${o.name}</span>
          <span class="cost">${o.cost.map(c=>`${c.count} ${vt[c.item].name.toLowerCase()}`).join(", ")}</span>
        </div>`)}),this.builder.innerHTML=n.join("");for(const s of this.builder.querySelectorAll(".row"))s.onclick=()=>{var a;if(s.classList.contains("locked"))return;const r=s.dataset.mode,o=s.dataset.kind;(a=this.onSelect)==null||a.call(this,r==="piece"?{mode:"piece",kind:o}:{mode:"fixture",kind:o})}}}const v_=1.6;function Xr(i,e,t,n){const s=td[e.kind];let r;s.tool==="chop"?(Ir(i,"chop"),r=s_(i)):s.tool==="mine"?(Ir(i,"mine"),r=r_(i)):r=1;const o=s.tool==="hand"?.6:3.2;if(i.stamina<=0)return{gained:0,depleted:!1};i.stamina=Math.max(0,i.stamina-o*n);const a=v_*r*n,l=t.harvest(e,a);if(l<=0)return{gained:0,depleted:e.amount<=0};const h=(e._frac??0)+l*s.per,d=Math.floor(h);return e._frac=h-d,d>0&&uu(i,s.item,d),{gained:d,depleted:e.amount<=0,item:s.item}}const hl=i=>i===qe.OakTree||i===qe.BirchTree||i===qe.PineTree;function ul(i,e,t,n){const s=e+Math.cos(n)*.6,r=t+Math.sin(n)*.6,o=i.elevationAt(s,r);i.pieces.add(pn("log",s,r,o,n,!1,!0))}const M_=i=>i===qe.Boulder;function mu(i,e){i.removeResource(e);const t=i.elevationAt(e.x,e.y);i.pieces.add(pn("stoneBlock",e.x,e.y,t,0,!1,!0))}function y_(i,e,t){const n=ri[e.kind];for(const r of n.cost){const o=e.delivered.find(c=>c.item===r.item),a=(o==null?void 0:o.count)??0;if(a>=r.count)continue;const l=Ms(i,r.item,r.count-a);l>0&&(o?o.count+=l:e.delivered.push({item:r.item,count:l}))}return n.cost.every(r=>{var o;return(((o=e.delivered.find(a=>a.item===r.item))==null?void 0:o.count)??0)>=r.count})?(i.stamina=Math.max(0,i.stamina-2*t),e.progress=Math.min(1,e.progress+t/n.work),e.progress>=1?(e.hp=e.maxHp,!0):!1):!1}const S_=3.5,Do=4,eh=1.4,b_=["log","beam","post","splitLog","plank","stoneBlock","stoneSlab","boulder","thatchBundle"];function E_(i,e,t,n){const s=Ye[n],r=Math.max(0,b_.indexOf(n)),o=t.x+(r-1)*eh,a=t.y,l=e.queryRadius(o,a,eh*.6).filter(M=>M.kind===n).length,c=Math.floor(l/Do),h=l%Do,d=Math.max(s.width,s.thickness)+.02,u=a+(h-(Do-1)/2)*d,g=i.elevationAt(o,u)+c*s.thickness;return{x:o,y:u,z:g,yaw:0,upright:!1}}function gu(i,e){return i.queryRadius(e.x,e.y,.2).some(t=>t.upright&&Math.hypot(t.x-e.x,t.y-e.y)<.15)}function w_(i,e,t){let n=null,s=1/0;for(const r of e){if(gu(i,r))continue;const o=(r.x-t.x)**2+(r.y-t.y)**2;o<s&&(s=o,n=r)}return n}function dl(i,e,t,n){return i.queryRadius(t.x,t.y,n).filter(r=>r.loose===!0).filter(r=>Math.hypot(r.x-e.x,r.y-e.y)>S_).sort((r,o)=>(r.x-t.x)**2+(r.y-t.y)**2-((o.x-t.x)**2+(o.y-t.y)**2))}const xs=.5,T_=4e3,A_=.45,Uo=(i,e)=>(i&65535)*65536+(e&65535),Qn=i=>(i+.5)*xs;function R_(i,e,t,n,s){const r=Math.floor(e/xs),o=Math.floor(t/xs),a=Math.floor(n/xs),l=Math.floor(s/xs);if(r===a&&o===l)return[{x:n,y:s}];const c=new Map,h=(p,y)=>{if(p===a&&y===l||p===r&&y===o)return i.canStand(Qn(p),Qn(y));const b=Uo(p,y);let v=c.get(b);return v===void 0&&(v=i.canStand(Qn(p),Qn(y),A_),c.set(b,v)),v},d=(p,y)=>{const b=Math.abs(p-a),v=Math.abs(y-l);return b+v+(Math.SQRT2-2)*Math.min(b,v)},u=[],f=new Map,g={cx:r,cy:o,g:0,f:d(r,o),parent:null};u.push(g),f.set(Uo(r,o),0);let M=0,m=g;for(;u.length>0&&M<T_;){let p=0;for(let b=1;b<u.length;b++)u[b].f<u[p].f&&(p=b);const y=u.splice(p,1)[0];if(M++,y.cx===a&&y.cy===l)return th(y,n,s);d(y.cx,y.cy)<d(m.cx,m.cy)&&(m=y);for(let b=-1;b<=1;b++)for(let v=-1;v<=1;v++){if(v===0&&b===0)continue;const T=y.cx+v,E=y.cy+b;if(!h(T,E)||v!==0&&b!==0&&(!h(y.cx+v,y.cy)||!h(y.cx,y.cy+b)))continue;const R=v!==0&&b!==0?Math.SQRT2:1,x=y.g+R,w=Uo(T,E);x>=(f.get(w)??1/0)||(f.set(w,x),u.push({cx:T,cy:E,g:x,f:x+d(T,E),parent:y}))}}return m!==g?th(m,Qn(m.cx),Qn(m.cy)):null}function th(i,e,t){const n=[];for(let r=i;r;r=r.parent)n.push(r);n.reverse();const s=n.map(r=>({x:Qn(r.cx),y:Qn(r.cy)}));return s[s.length-1]={x:e,y:t},C_(s)}function C_(i){if(i.length<=2)return i;const e=[i[0]];for(let t=1;t<i.length-1;t++){const n=e[e.length-1],s=i[t],r=i[t+1],o=(s.x-n.x)*(r.y-n.y)-(s.y-n.y)*(r.x-n.x);Math.abs(o)>1e-6&&e.push(s)}return e.push(i[i.length-1]),e}const nh=Math.PI/2,ih=.125,Ss=.25,Qi=i=>Math.floor(i/Ss)*Ss+Ss/2,sh=8,rh=3,P_=1,oh=5,L_=.45,I_=.1,Rs=.01;function Ua(i,e,t,n,s,r){return{id:-1,kind:i,x:e,y:t,z:n,yaw:s,upright:r,load:0,integrity:1}}function xu(i,e,t,n,s,r){return xn(Ua(i,e,t,n,s,r))}function ji(i,e,t,n,s,r,o,a=-1/0){const l=i.elevationAt(n,s);if(Vi(i.biomeAt(Math.floor(n),Math.floor(s))))return{ok:!1,z:l,support:0,supporters:[],reason:"In the water"};const c=xu(t,n,s,-50,r,o),h=e.query({...c,z0:-50,z1:50}),d=Ua(t,n,s,-50,r,o);let u=l;for(const b of h){if(Ga(d,b)<=.02)continue;const v=Ht(b).z1;v>u&&v>=a-Rs&&(u=v)}const f=Math.max(u,a===-1/0?u:a),g=Ua(t,n,s,f,r,o);for(const b of h)if(Ju(g,b))return{ok:!1,z:f,support:0,supporters:[],reason:"Blocked by another piece"};const M=D_(g,f,l,h),{support:m,supporters:p}=M;if(!M.stable)return{ok:!1,z:f,support:m,supporters:p,reason:M.reason};const y=Ye[t];for(const b of p){const v=Ye[b.kind],T=y.mass/Math.max(1,p.length);if(b.load+T>v.bearing)return{ok:!1,z:f,support:m,supporters:p,reason:`The ${v.name.toLowerCase()} below would give way`}}return{ok:!0,z:f,support:m,supporters:p}}function D_(i,e,t,n){const s=Ht(i),r=Zu(s);if(Math.abs(e-t)<=Rs)return{stable:!0,support:1,supporters:[]};const o=[],a=[];let l=0;for(const h of n){const d=Ht(h).z1;if(d>e+Rs||d<e-I_)continue;const u=Ku(s,Ht(h));if(u.length===0)continue;const f=Ah(u);f<=0||(l+=f,a.push(...u),o.push(h))}return{stable:!0,support:r>0?Math.min(1,l/r):0,supporters:o}}function es(i,e,t,n,s,r,o){const a=pn(e,t,n,o.z,s,r);return i.add(a),_u(i,[a,...o.supporters]),a}function _u(i,e){const t=new Set,n=[...e],s=4e3;for(;n.length&&t.size<s;){const o=n.shift();t.has(o)||(t.add(o),n.push(...Dr(i,o),...vu(i,o)))}for(const o of t)o.load=0;const r=[...t].sort((o,a)=>a.z-o.z);for(const o of r){const a=Dr(i,o);if(a.length===0)continue;const l=(Ye[o.kind].mass+o.load)/a.length;for(const c of a)c.load+=l}}function Dr(i,e){const t=xn(e);return i.query({...t,z0:t.z0-.1,z1:t.z0+.1}).filter(n=>n.id!==e.id&&Math.abs(Ht(n).z1-Ht(e).z0)<=Rs).filter(n=>Ga(e,n)>0)}function vu(i,e){const t=xn(e);return i.query({...t,z0:t.z1-.1,z1:t.z1+.1}).filter(n=>n.id!==e.id&&Math.abs(Ht(n).z0-Ht(e).z1)<=Rs).filter(n=>Ga(e,n)>0)}function U_(i,e,t){const n=[],s=Dr(e,t);e.remove(t);const r=[...s,...n.flatMap(o=>Dr(e,o))].filter(o=>e.get(o.id)!==void 0);return r.length&&_u(e,r),{removed:[t],collapsed:n}}function N_(i){const e=Ye[i.kind],t=Math.cos(i.yaw),n=Math.sin(i.yaw),s=[];if(i.upright){const h=e.length,d=Math.max(e.width,e.thickness)/2,u=[{x:t,y:n},{x:-t,y:-n},{x:-n,y:t},{x:n,y:-t}];for(const f of u){for(let g=0;g<sh;g++){const M=(g+1)/(sh+1)*h;s.push({x:i.x+f.x*d,y:i.y+f.y*d,z:i.z+M,nx:f.x,ny:f.y,kind:"side",host:i})}s.push({x:i.x+f.x*d,y:i.y+f.y*d,z:i.z,nx:f.x,ny:f.y,kind:"bottom",host:i})}return s.push({x:i.x,y:i.y,z:i.z+h,nx:0,ny:0,kind:"top",host:i}),s}const r=Ht(i),o=t,a=n,l=-n,c=t;for(const h of[-1,1])for(let d=0;d<rh;d++){const u=-r.hx+d*(2*r.hx)/(rh-1);s.push({x:r.cx+o*u+l*h*r.hy,y:r.cy+a*u+c*h*r.hy,z:r.z0,nx:l*h,ny:c*h,kind:"side",host:i})}for(const h of[-1,1])for(let d=0;d<P_;d++)s.push({x:r.cx+o*h*r.hx+l*0,y:r.cy+a*h*r.hx+c*0,z:r.z0,nx:o*h,ny:a*h,kind:"end",host:i});for(let h=0;h<oh;h++){const d=-r.hx+h*(2*r.hx)/(oh-1);s.push({x:r.cx+o*d,y:r.cy+a*d,z:r.z1,nx:0,ny:0,kind:"top",host:i})}return s}function Mu(i,e){return!(e&&i.host.upright&&i.kind==="side")}function F_(i,e,t){if(i.kind!=="top")return!0;const n=Ht(i.host),s=Math.cos(n.yaw),r=Math.sin(n.yaw),o=e-n.cx,a=t-n.cy,l=Math.abs(o*s+a*r),c=Math.abs(-o*r+a*s),h=.1;return l<=n.hx+h&&c<=n.hy+h}function yu(i,e,t,n=3){const s=[];for(const r of i.queryRadius(e,t,n))s.push(...N_(r));return s}function Su(i,e,t,n,s=0){if(i.kind==="top")return{x:i.x,y:i.y,z:i.z,yaw:t};const r=Ye[e],o=(n?r.width:r.length)/2,a=(n?r.thickness:r.width)/2,l=Math.atan2(i.ny,i.nx);return s%2===0?{x:i.x+i.nx*o,y:i.y+i.ny*o,z:i.z,yaw:l}:{x:i.x+i.nx*a,y:i.y+i.ny*a,z:i.z,yaw:l+Math.PI/2}}function O_(i,e,t,n,s,r){const o=yu(i,t,n,3).filter(h=>Mu(h,r)).filter(h=>F_(h,t,n));if(o.length===0)return null;let a=null,l=L_;for(const h of o){const d=Math.hypot(h.x-t,h.y-n);d<l&&(l=d,a=h)}if(!a)return null;const c=Su(a,e,s,r);return{x:c.x,y:c.y,yaw:c.yaw,point:a}}function B_(i,e,t,n,s,r,o=.3){const a=O_(i,e,t,n,s,r);if(a)return{x:a.x,y:a.y,yaw:a.yaw};const l=Ye[e],c=l.length===l.width&&l.width===l.thickness;if(r||c)return{x:Qi(t),y:Qi(n),yaw:s};const h=xu(e,t,n,0,s,r),d=(h.x1-h.x0)/2,u=(h.y1-h.y0)/2,f=i.query({x0:h.x0-1.5,x1:h.x1+1.5,y0:h.y0-1.5,y1:h.y1+1.5,z0:-50,z1:50}),g=[],M=[];for(const p of f){const y=xn(p);g.push(y.x1+d,y.x0-d,y.x0+d,y.x1-d,(y.x0+y.x1)/2),M.push(y.y1+u,y.y0-u,y.y0+u,y.y1-u,(y.y0+y.y1)/2)}const m=(p,y)=>{let b=p,v=o;for(const T of y){const E=Math.abs(T-p);E<v&&(v=E,b=T)}return b===p?Math.round(p/ih)*ih:b};return{x:m(t,g),y:m(n,M),yaw:s}}const No=i=>({job:null,leaderId:i,path:null,think:0}),wn=1.6,bu=4.5,Na=new Map,ah=.25,k_=.3,z_=1.5;function G_(i,e,t,n,s){const r=Math.hypot(n-e,s-t),o=Math.max(1,Math.ceil(r/.2));for(let a=1;a<=o;a++){const l=a/o;if(!i.canStand(e+(n-e)*l,t+(s-t)*l))return!1}return!0}function lh(i,e,t,n,s){const r=t-i.x,o=n-i.y,a=Math.hypot(r,o);if(a<=s||a===0)return e.canStand(t,n)&&(i.x=t,i.y=n),"arrived";i.facing=Math.atan2(o,r);const l=i.x+r/a*s,c=i.y+o/a*s,h=i.x,d=i.y;return e.canStand(l,c)?(i.x=l,i.y=c):e.canStand(l,i.y)?i.x=l:e.canStand(i.x,c)&&(i.y=c),Math.hypot(i.x-h,i.y-d)>s*.25?"moved":"stuck"}function Mt(i,e,t,n,s){const r=e.speedMultiplier(Math.floor(i.x),Math.floor(i.y));if(r<=0)return!1;const o=du(i,r)*s,a=Ne(i.x,i.y,t,n),l=()=>Ne(i.x,i.y,t,n)<=o+1e-6;let c=Na.get(i.id);if((!c||Ne(c.goalX,c.goalY,t,n)>z_)&&(c={goalX:t,goalY:n,waypoints:[],cooldown:0,lastGoalDist:a,stall:0},Na.set(i.id,c)),c.goalX=t,c.goalY=n,c.cooldown-=s,c.waypoints.length>0){let u=0;for(let M=c.waypoints.length-1;M>0;M--)if(G_(e,i.x,i.y,c.waypoints[M].x,c.waypoints[M].y)){u=M;break}u>0&&c.waypoints.splice(0,u);const f=c.waypoints[0];if(Ne(i.x,i.y,f.x,f.y)<=k_)return c.waypoints.shift(),c.waypoints.length===0&&(c.stall=0,c.lastGoalDist=Ne(i.x,i.y,t,n)),l();lh(i,e,f.x,f.y,o);const g=Ne(i.x,i.y,t,n);return c.stall=c.lastGoalDist-g>o*.2?0:c.stall+s,c.lastGoalDist=g,c.stall>ah&&c.cooldown<=0&&ch(c,e,i,t,n),!1}if(lh(i,e,t,n,o)==="arrived")return c.stall=0,l();const d=Ne(i.x,i.y,t,n);return c.stall=c.lastGoalDist-d>o*.2?0:c.stall+s,c.lastGoalDist=d,c.stall>ah&&c.cooldown<=0&&ch(c,e,i,t,n),!1}function ch(i,e,t,n,s){const r=R_(e,t.x,t.y,n,s);i.waypoints=r??[],i.cooldown=r?.6:1,i.stall=0}function hh(i){Na.delete(i)}function Eu(i,e){if(!e.canStand(i.x,i.y))for(let t=.3;t<=2.5;t+=.3)for(let n=0;n<12;n++){const s=n/12*Math.PI*2,r=i.x+Math.cos(s)*t,o=i.y+Math.sin(s)*t;if(e.canStand(r,o)){i.x=r,i.y=o;return}}}function H_(i,e,t,n){if(!i.carrying)return!1;const s=Ne(i.x,i.y,t.x,t.y),r=.7;if(s<.45){let a=i.x-t.x,l=i.y-t.y;Math.hypot(a,l)<.001&&(a=1,l=0);const c=Math.hypot(a,l);return i.stance=ye.Moving,Mt(i,e,t.x+a/c*r,t.y+l/c*r,n),!1}if(s>wn)return i.stance=ye.Moving,Mt(i,e,t.x,t.y,n),!1;i.stance=ye.Working,i.actionTimer=.3;const o=ji(e,e.pieces,i.carrying.kind,t.x,t.y,0,!0);return o.ok?(es(e.pieces,i.carrying.kind,t.x,t.y,0,!0,o),i.carrying=null,Eu(i,e),!0):!1}function V_(i,e,t,n,s,r){if(!Dt(i))return;if(Eu(i,t),e.think-=r,i.stamina<8){i.stance=ye.Sleeping,i.stamina=Math.min(100,i.stamina+9*r);return}if(i.stance===ye.Sleeping){if(i.stamina=Math.min(100,i.stamina+9*r),i.stamina<65)return;i.stance=ye.Idle}if(i.order==="stopped"){i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*r);return}if(i.order==="chop"){X_(i,t,n,r);return}if(i.order==="mine"){q_(i,t,n,r);return}if(i.order==="build"){$_(i,t,n,r);return}if(i.order==="haul"){K_(i,t,n,r);return}if(i.order==="forage"){j_(i,t,n,r);return}if(!e.job&&e.think<=0&&(e.job=n.claim(i,t),e.think=.4),e.job){ev(i,e,e.job,t,n,s,r)&&(n.complete(e.job),e.job=null);return}const o=e.leaderId!==null?s.find(a=>a.id===e.leaderId):void 0;if(o&&Ne(i.x,i.y,o.x,o.y)>bu){i.stance=ye.Moving;const l=(i.id%5-2)*.9;Mt(i,t,o.x+l,o.y+l*.6,r);return}i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*r)}const wu=45,Tu=40,W_=i=>i===qe.OakTree||i===qe.BirchTree||i===qe.PineTree;function Cs(i,e){const t=i.pileOrDefault(e);return t?{x:t.x,y:t.y}:null}function fl(i,e,t,n){const s=i.carrying;if(!s)return!0;if(!t)return!1;if(Ne(i.x,i.y,t.x,t.y)>1.6)return i.stance=ye.Moving,Mt(i,e,t.x,t.y,n),!1;const r=E_(e,e.pieces,t,s.kind),o=ji(e,e.pieces,s.kind,r.x,r.y,r.yaw,r.upright,r.z);if(o.ok){const l=es(e.pieces,s.kind,r.x,r.y,r.yaw,r.upright,o);return s.kind==="log"&&(l.loose=!0),i.carrying=null,!0}const a=ji(e,e.pieces,s.kind,i.x,i.y,s.yaw,s.upright);if(a.ok){const l=es(e.pieces,s.kind,i.x,i.y,s.yaw,s.upright,a);return s.kind==="log"&&(l.loose=!0),i.carrying=null,!0}return!1}function X_(i,e,t,n){const s=Cs(t,i.dropPile);if(i.carrying){fl(i,e,s,n);return}if(s){const l=dl(e.pieces,s,i,3);if(l.length>0){const c=l[0];Ne(i.x,i.y,c.x,c.y)>1.6?(i.stance=ye.Moving,Mt(i,e,c.x,c.y,n)):(i.carrying={kind:c.kind,yaw:c.yaw,upright:c.upright,lift:0},e.pieces.remove(c));return}}const r=e.resourcesNear(i.x,i.y,Tu).filter(l=>W_(l.kind));if(r.length===0){i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}const o=r[0];if(Ne(i.x,i.y,o.x,o.y)>wn){i.stance=ye.Moving,Mt(i,e,o.x,o.y,n);return}i.stance=ye.Working,i.actionTimer=.35,i.facing=Math.atan2(o.y-i.y,o.x-i.x),Xr(i,o,e,n).depleted&&hl(o.kind)&&ul(e,o.x,o.y,i.facing)}function q_(i,e,t,n){const s=Cs(t,i.dropPile);if(i.carrying){fl(i,e,s,n);return}if(s){const a=dl(e.pieces,s,i,3);if(a.length>0){const l=a[0];Ne(i.x,i.y,l.x,l.y)>1.6?(i.stance=ye.Moving,Mt(i,e,l.x,l.y,n)):(i.carrying={kind:l.kind,yaw:l.yaw,upright:l.upright,lift:0},e.pieces.remove(l));return}}const r=e.resourcesNear(i.x,i.y,Tu).filter(a=>M_(a.kind));if(r.length===0){i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}const o=r[0];if(Ne(i.x,i.y,o.x,o.y)>wn){i.stance=ye.Moving,Mt(i,e,o.x,o.y,n);return}i.stance=ye.Working,i.actionTimer=.35,i.facing=Math.atan2(o.y-i.y,o.x-i.x),i.stamina=Math.max(0,i.stamina-3.2*n),mu(e,o)}function $_(i,e,t,n){const s=w_(e.pieces,t.wallCells,i);if(!s){i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}if(i.carrying){H_(i,e,s,n);return}const r=Cs(t,i.sourcePile),o=h=>h.kind==="log"&&!h.upright,a=[];r&&a.push(...e.pieces.queryRadius(r.x,r.y,Y_).filter(o)),a.push(...e.pieces.queryRadius(i.x,i.y,wu).filter(h=>o(h)&&h.loose));let l=null,c=1/0;for(const h of a){const d=(h.x-i.x)**2+(h.y-i.y)**2;d<c&&(c=d,l=h)}if(!l){i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}if(Ne(i.x,i.y,l.x,l.y)>wn){i.stance=ye.Moving,Mt(i,e,l.x,l.y,n);return}i.carrying={kind:l.kind,yaw:l.yaw,upright:l.upright,lift:0},e.pieces.remove(l)}const Y_=6;function K_(i,e,t,n){const s=Cs(t,i.destPile);if(!s){i.stance=ye.Idle;return}const r=Cs(t,i.sourcePile)??s;if(i.carrying){fl(i,e,s,n);return}const o=dl(e.pieces,s,r,wu);if(o.length===0){i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}let a=o[0],l=1/0;for(const c of o){const h=Ne(i.x,i.y,c.x,c.y);h<l&&(l=h,a=c)}if(l>1.6){i.stance=ye.Moving,Mt(i,e,a.x,a.y,n);return}i.carrying={kind:a.kind,yaw:a.yaw,upright:a.upright,lift:0},e.pieces.remove(a)}const Z_=45,J_=12,Au=i=>(vt[i].nutrition??0)>0;function Q_(i){let e=0;for(const[t,n]of i.inventory)Au(t)&&(e+=n);return e}function j_(i,e,t,n){const s=t.foodPile,r=Q_(i),o=e.resourcesNear(i.x,i.y,Z_).filter(l=>l.kind===qe.BerryBush);if(s&&r>0&&(r>=J_||o.length===0)){if(Ne(i.x,i.y,s.x,s.y)>1.6){i.stance=ye.Moving,Mt(i,e,s.x,s.y,n);return}for(const[l,c]of[...i.inventory])Au(l)&&(Ms(i,l,c),e.dropItems(s.x,s.y,l,c));return}if(o.length===0){i.stance=ye.Idle,i.stamina=Math.min(100,i.stamina+3.5*n);return}const a=o[0];if(Ne(i.x,i.y,a.x,a.y)>wn){i.stance=ye.Moving,Mt(i,e,a.x,a.y,n);return}i.stance=ye.Working,i.actionTimer=.35,i.facing=Math.atan2(a.y-i.y,a.x-i.x),Xr(i,a,e,n)}function ev(i,e,t,n,s,r,o){switch(t.kind){case"harvest":{const a=t.nodeId!==void 0?n.findResource(t.nodeId,i.x,i.y):void 0;return a?cu(i)>=hu&&s.dropPoint?(i.stance=ye.Moving,Mt(i,n,s.dropPoint.x,s.dropPoint.y,o)&&uh(i,n,s),!1):Ne(i.x,i.y,a.x,a.y)>wn?(i.stance=ye.Moving,Mt(i,n,a.x,a.y,o),!1):(i.stance=ye.Working,i.actionTimer=.35,i.facing=Math.atan2(a.y-i.y,a.x-i.x),Xr(i,a,n,o).depleted?(hl(a.kind)&&ul(n,a.x,a.y,i.facing),!0):!1):!0}case"haulItems":return s.dropPoint?(i.stance=ye.Moving,Mt(i,n,s.dropPoint.x,s.dropPoint.y,o)?(uh(i,n,s),!0):!1):!0;case"haulPiece":{const a=t.pieceId!==void 0?n.pieces.get(t.pieceId):void 0;if(!a||t.tx===void 0||t.ty===void 0)return!0;if(!i.carrying)return Ne(i.x,i.y,a.x,a.y)>wn?(i.stance=ye.Moving,Mt(i,n,a.x,a.y,o),!1):(i.carrying={kind:a.kind,yaw:a.yaw,upright:a.upright,lift:0},n.pieces.remove(a),!1);if(i.stance=ye.Moving,Mt(i,n,t.tx,t.ty,o)){const l=i.carrying,c=tv(n,t.tx,t.ty,l.kind,l.yaw,l.upright);return i.carrying=null,c?es(n.pieces,l.kind,c.x,c.y,l.yaw,l.upright,c.result):n.pieces.add(pn(l.kind,i.x,i.y,n.elevationAt(i.x,i.y),l.yaw,l.upright)),!0}return!1}case"buildFixture":{const a=n.fixtures.find(h=>h.id===t.fixtureId);if(!a||a.progress>=1)return!0;const c=ri[a.kind].cost.find(h=>{var u;return(((u=a.delivered.find(f=>f.item===h.item))==null?void 0:u.count)??0)+_i(i,h.item)<h.count});if(c&&s.dropPoint){const h=n.pileNear(s.dropPoint.x,s.dropPoint.y,2.5);if(h&&(h.contents.get(c.item)??0)>0){if(Ne(i.x,i.y,h.x,h.y)>wn)return i.stance=ye.Moving,Mt(i,n,h.x,h.y,o),!1;const d=Math.min(c.count,h.contents.get(c.item)??0);return h.contents.set(c.item,(h.contents.get(c.item)??0)-d),(h.contents.get(c.item)??0)<=0&&h.contents.delete(c.item),h.contents.size===0&&n.removePile(h),i.inventory.set(c.item,_i(i,c.item)+d),!1}}return Ne(i.x,i.y,a.tx+.5,a.ty+.5)>wn?(i.stance=ye.Moving,Mt(i,n,a.tx+.5,a.ty+.5,o),!1):(i.stance=ye.Working,i.actionTimer=.3,y_(i,a,o))}case"attack":{const a=r.find(l=>l.id===t.actorId);return!a||!Dt(a)?!0:(Ir(i,"fight"),Ne(i.x,i.y,a.x,a.y)>wn?(i.stance=ye.Moving,Mt(i,n,a.x,a.y,o),!1):(i.stance=ye.Fighting,!1))}case"guard":return t.tx===void 0||t.ty===void 0?!0:(Ne(i.x,i.y,t.tx,t.ty)>1.5?(i.stance=ye.Moving,Mt(i,n,t.tx,t.ty,o)):i.stance=ye.Idle,!1);case"follow":{const a=r.find(l=>l.id===t.actorId);return a?(Ne(i.x,i.y,a.x,a.y)>bu&&(i.stance=ye.Moving,Mt(i,n,a.x,a.y,o)),!1):!0}default:return!0}}function uh(i,e,t){if(t.dropPoint)for(const[n,s]of[...i.inventory])vt[n].tool||(e.dropItems(t.dropPoint.x,t.dropPoint.y,n,s),i.inventory.delete(n))}function tv(i,e,t,n,s,r){for(let o=0;o<=4;o+=.5){const a=o===0?1:Math.max(6,Math.round(o*8));for(let l=0;l<a;l++){const c=l/a*Math.PI*2,h=e+Math.cos(c)*o,d=t+Math.sin(c)*o,u=ji(i,i.pieces,n,h,d,s,r);if(u.ok)return{x:h,y:d,result:u}}}return null}const nv=i=>i===qe.OakTree||i===qe.BirchTree||i===qe.PineTree,br=5;class iv{constructor(){X(this,"jobs",[]);X(this,"stockpiles",[]);X(this,"foodPile",null);X(this,"designated",new Set);X(this,"wallLines",[]);X(this,"nextWallLineId",1)}pileById(e){if(e!=null)return this.stockpiles.find(t=>t.id===e)}defaultPile(){let e;for(const t of this.stockpiles)(!e||t.id<e.id)&&(e=t);return e}pileOrDefault(e){return this.pileById(e)??this.defaultPile()}setPile(e,t,n){const s=this.pileById(e);if(s)return s.x=t,s.y=n,s;const r={id:e,x:t,y:n};return this.stockpiles.push(r),this.stockpiles.sort((o,a)=>o.id-a.id),r}freePileId(){for(let e=1;e<=br;e++)if(!this.pileById(e))return e;return null}removePile(e){this.stockpiles=this.stockpiles.filter(t=>t.id!==e)}get dropPoint(){const e=this.defaultPile();return e?{x:e.x,y:e.y}:null}set dropPoint(e){var t;e&&this.setPile(((t=this.defaultPile())==null?void 0:t.id)??1,e.x,e.y)}get wallCells(){return this.wallLines.flatMap(e=>e.cells)}hasWallCell(e,t){return this.wallLines.some(n=>n.cells.some(s=>Math.abs(s.x-e)<1e-6&&Math.abs(s.y-t)<1e-6))}addWallLine(e){const t=e.filter(n=>!this.hasWallCell(n.x,n.y));t.length&&this.wallLines.push({id:this.nextWallLineId++,cells:t})}addWallCell(e,t){this.addWallLine([{x:e,y:t}])}clearWallPlan(){this.wallLines=[]}removeWallLineAt(e,t,n=.2){const s=n*n,r=this.wallLines.findIndex(a=>a.cells.some(l=>(l.x-e)**2+(l.y-t)**2<=s));if(r<0)return 0;const[o]=this.wallLines.splice(r,1);return o.cells.length}designate(e,t=1){nv(e.kind)||this.designated.has(e.id)||(this.designated.add(e.id),this.jobs.push({kind:"harvest",nodeId:e.id,tx:Math.floor(e.x),ty:Math.floor(e.y),priority:t}))}undesignate(e){this.designated.delete(e),this.jobs=this.jobs.filter(t=>t.nodeId!==e)}exportState(){return{stockpiles:this.stockpiles.map(e=>({...e})),foodPile:this.foodPile?{...this.foodPile}:null,wallLines:this.wallLines.map(e=>({id:e.id,cells:e.cells.map(t=>({...t}))})),nextWallLineId:this.nextWallLineId,designated:[...this.designated]}}importState(e){this.stockpiles=e.stockpiles.map(t=>({...t})),this.foodPile=e.foodPile?{...e.foodPile}:null,this.wallLines=e.wallLines.map(t=>({id:t.id,cells:t.cells.map(n=>({...n}))})),this.nextWallLineId=e.nextWallLineId,this.designated.clear();for(const t of e.designated)this.designated.add(t);this.jobs=[]}addFixtureJob(e,t=2){this.jobs.some(n=>n.fixtureId===e.id)||this.jobs.push({kind:"buildFixture",fixtureId:e.id,tx:e.tx,ty:e.ty,priority:t})}addHaulPiece(e,t,n,s=2){this.jobs.push({kind:"haulPiece",pieceId:e.id,tx:t,ty:n,priority:s})}claim(e,t){let n=null,s=-1/0;for(const r of this.jobs){if(r.claimedBy!==void 0||r.kind==="harvest"&&r.nodeId!==void 0&&!t.findResource(r.nodeId,e.x,e.y))continue;if(r.kind==="buildFixture"&&r.fixtureId!==void 0){const l=t.fixtures.find(c=>c.id===r.fixtureId);if(!l||l.progress>=1)continue}const o=Math.hypot((r.tx??e.x)-e.x,(r.ty??e.y)-e.y),a=r.priority*100-o;a>s&&(s=a,n=r)}return n&&(n.claimedBy=e.id),n}release(e){e.claimedBy=void 0}complete(e){e.nodeId!==void 0&&this.designated.delete(e.nodeId);const t=this.jobs.indexOf(e);t>=0&&this.jobs.splice(t,1)}releaseAllFor(e){for(const t of this.jobs)t.claimedBy===e&&(t.claimedBy=void 0)}get pending(){return this.jobs.length}}const sv=1.7,rv=1.15,mr=new Map,Ru=(i,e)=>i.faction!==e.faction&&i.faction!=="wildlife"&&e.faction!=="wildlife";function ov(i,e,t){for(const n of i){const s=(mr.get(n.id)??0)-e;mr.set(n.id,Math.max(0,s))}for(const n of i){if(!Dt(n)||n.stance!==ye.Fighting||(mr.get(n.id)??0)>0)continue;const s=i.find(a=>Dt(a)&&Ru(n,a)&&Ne(n.x,n.y,a.x,a.y)<=sv);if(!s)continue;mr.set(n.id,rv),n.actionTimer=.3,n.facing=Math.atan2(s.y-n.y,s.x-n.x);const r=.72+n.stamina/100*.24;if(Math.random()>r){t.push({x:s.x,y:s.y,text:"miss",kind:"miss"});continue}const o=o_(n)*(.8+Math.random()*.4);s.hp-=o,n.stamina=Math.max(0,n.stamina-4),t.push({x:s.x,y:s.y,text:`-${Math.round(o)}`,kind:"hit"}),s.hp<=0?(s.hp=0,s.stance=ye.Idle,t.push({x:s.x,y:s.y,text:`${s.name} falls`,kind:"death"})):s.stance!==ye.Fighting&&(s.stance=s.morale<30?ye.Fleeing:ye.Fighting)}}const av=7;function lv(i){for(const e of i){if(!Dt(e)||e.stance===ye.Fleeing||e.stance===ye.Sleeping||e.isPlayer)continue;i.find(n=>Dt(n)&&Ru(e,n)&&Ne(e.x,e.y,n.x,n.y)<=av)?e.stance=ye.Fighting:e.stance===ye.Fighting&&(e.stance=ye.Idle)}}const ii=900,cv=["Ael","Bed","Cyne","Deor","Ead","Fris","Garn","Hroth","Ing","Leof","Mael","Nor","Osric","Pen","Read","Sig","Tor","Wyn","Yric","Beorn"],hv=["ham","ton","wic","burh","ford","stead","leah","cot","dun","mere"],uv=["Aedred","Beorhtric","Cuthwine","Dunstan","Eanfrith","Frithuwald","Godgifu","Hereward","Ingeld","Leofwine","Mildthryth","Osgar","Raedwald","Sigeberht","Tostig","Wulfstan","Yffe","Aethelflaed","Beorhtwynn","Ceolwulf","Eadgyth","Hild","Osthryth","Wilfrid"];function dh(i,e,t){const n=i.peekBiome(e,t);return n===Ze.Grassland||n===Ze.Meadow||n===Ze.Forest}function dv(i,e,t){const n=Or(e,t,i.seed^24301),s=en(n);if(s()>.62)return null;const r=Math.round(e*ii+si(s,.15,.85)*ii),o=Math.round(t*ii+si(s,.15,.85)*ii);if(!dh(i,r,o)){const a=i.findLandNear(r,o,120);return!a||!dh(i,a.x,a.y)?null:fh(s,a.x,a.y,e,t)}return fh(s,r,o,e,t)}function fh(i,e,t,n,s){const r=bs(i,6,34),o=i(),a=o<.18?"hostile":o<.72?"wary":"friendly";return{id:`v${n},${s}`,x:e,y:t,name:zo(i,cv)+zo(i,hv),population:r,disposition:a,standing:a==="friendly"?25:a==="hostile"?-45:0,materialised:!1,wealth:bs(i,20,220),warriors:Math.max(2,Math.floor(r*si(i,.18,.4)))}}function fv(i,e,t,n,s){const r=[],o=Math.floor((e-n)/ii),a=Math.floor((e+n)/ii),l=Math.floor((t-n)/ii),c=Math.floor((t+n)/ii);for(let h=l;h<=c;h++)for(let d=o;d<=a;d++){const u=`${d},${h}`;let f=s.get(u);f===void 0&&(f=dv(i,d,h),s.set(u,f)),f&&Math.hypot(f.x-e,f.y-t)<=n&&r.push(f)}return r}function pv(i,e){if(e.materialised)return[];e.materialised=!0;const t=en(Or(Math.round(e.x),Math.round(e.y),i.seed^48879)),n=[],s=Math.max(2,Math.round(e.population/4));for(let r=0;r<s;r++){const o=r/s*Math.PI*2+t()*.6,a=si(t,5,6+s*1.6),l=Math.round(e.x+Math.cos(o)*a),c=Math.round(e.y+Math.sin(o)*a);Vi(i.peekBiome(l,c))||mv(i,l,c,t)}if(i.canPlaceFixture("campfire",Math.round(e.x),Math.round(e.y))){const r=i.placeFixtureSite("campfire",Math.round(e.x),Math.round(e.y));r.progress=1,r.hp=r.maxHp}for(let r=0;r<e.population;r++){const o=t()*Math.PI*2,a=si(t,1,10),l=r<e.warriors,c=Da(zo(t,uv),"natives",e.x+Math.cos(o)*a,e.y+Math.sin(o)*a,{maxHp:l?120:90,hp:l?120:90,speed:l?3.2:2.9});l?(c.inventory.set("spear",1),c.equipped="spear"):c.inventory.set("seax",1),n.push(c)}return n}function mv(i,e,t,n){const s=bs(n,3,4),r=bs(n,3,4),o=i.elevationAt(e,t),a=Ye.log.thickness,l=Ye.post.length,c=Math.max(3,Math.round(.65/a)),h=[[e-s/2,t-r/2],[e+s/2,t-r/2],[e-s/2,t+r/2],[e+s/2,t+r/2]];for(const[m,p]of h)i.pieces.add(pn("post",m,p,o,0,!0));const d=o+l;for(let m=0;m<c;m++){const p=o+m*a;i.pieces.add(pn("log",e,t-r/2,p,0,!1)),i.pieces.add(pn("log",e-s/2,t,p,Math.PI/2,!1)),i.pieces.add(pn("log",e+s/2,t,p,Math.PI/2,!1)),m>0&&i.pieces.add(pn("log",e,t+r/2,p,0,!1))}const u=Math.max(d,o+c*a);i.pieces.add(pn("beam",e,t,u,0,!1));const f=Ye.thatchBundle,g=Math.ceil(s/f.length)+1,M=Math.ceil(r/f.width)+1;for(let m=0;m<M;m++)for(let p=0;p<g;p++)i.pieces.add(pn("thatchBundle",e-s/2+(p+.5)*f.length,t-r/2+(m+.5)*f.width,u+Ye.beam.thickness,0,!1))}const Fo={wary:"Wary",friendly:"Friendly",hostile:"Hostile"},ph=.8,gv=.5;function Ur(i,e,t,n){return{x0:i,x1:i+1,y0:e,y1:e+1,z0:t,z1:n}}function _s(i,e,t){const n=i.elevationAt(e,t),s=i.pieces.query(Ur(e,t,n+.01,n+gv));if(s.length===0)return!1;let r=0;const o=Ur(e,t,-50,50);for(const a of s){const l=xn(a),c=Math.min(l.x1,o.x1)-Math.max(l.x0,o.x0),h=Math.min(l.y1,o.y1)-Math.max(l.y0,o.y0);c>0&&h>0&&(r+=c*h)}return r>.4}function Fa(i,e,t){const n=i.elevationAt(e,t),s=i.pieces.query(Ur(e,t,n+ph,n+ph+2.5));let r=0,o=!1;const a=Ur(e,t,-50,50);for(const u of s){const f=xn(u),g=Math.min(f.x1,a.x1)-Math.max(f.x0,a.x0),M=Math.min(f.y1,a.y1)-Math.max(f.y0,a.y0);g>0&&M>0&&(r+=g*M,Ye[u.kind].roofing&&(o=!0))}r=Math.min(1,r);let l=0;_s(i,e+1,t)&&l++,_s(i,e-1,t)&&l++,_s(i,e,t+1)&&l++,_s(i,e,t-1)&&l++;const c=r>.5,h=c&&l>=3;let d=r*.55+l/4*.35;return o&&(d+=.1),{roofed:c,cover:r,walls:l,enclosed:h,quality:Math.min(1,d),weathertight:o}}function xv(i,e,t,n=400){if(!Fa(i,e,t).roofed)return{tiles:0,quality:0,enclosed:!1};const r=new Set,o=[[e,t]];let a=0,l=0,c=!1;for(;o.length&&a<n;){const[h,d]=o.shift(),u=`${h},${d}`;if(r.has(u))continue;r.add(u);const f=Fa(i,h,d);if(!f.roofed){c=!0;continue}a++,l+=f.quality;for(const[g,M]of[[1,0],[-1,0],[0,1],[0,-1]])_s(i,h+g,d+M)||o.push([h+g,d+M])}return{tiles:a,quality:a>0?l/a:0,enclosed:!c&&a>0}}const mh=["Wulfhere","Eadgar","Beorn","Hild","Cynric","Aelfwyn","Oswine","Godric","Leofa","Saewine","Merewald","Eanswith"],_v=10,vv=20260720,Oo="settlement.save",gh=2,Mv=i=>({...i,inventory:[...i.inventory]}),yv=i=>({...i,inventory:new Map(i.inventory)}),Sv=24,Bo=5,xh=5.5,_h=8,Nr=Math.PI/12,bv=Math.PI/36,Ev=Math.PI/2-.001,ko=i=>Math.max(bv,Math.min(Ev,ys+Math.round((i-ys)/Nr)*Nr)),vh=Math.PI/2,wv=i=>Math.round(i/(Math.PI/2))*(Math.PI/2);function Mh(i,e){const t=e.x-i.x,n=e.y-i.y,s=Math.max(1,Math.round(Math.hypot(t,n)/Ss)),r=[],o=new Set;for(let a=0;a<=s;a++){const l=Qi(i.x+t*a/s),c=Qi(i.y+n*a/s),h=`${l},${c}`;o.has(h)||(o.add(h),r.push({x:l,y:c}))}return r}class Tv{constructor(e,t){X(this,"world");X(this,"renderer");X(this,"input");X(this,"hud");X(this,"board",new iv);X(this,"camera",{x:0,y:0,yaw:Io,pitch:ys,zoom:8});X(this,"cursor",{x:0,y:0,z:0});X(this,"hoveredNodeId",null);X(this,"hoveredPiece",null);X(this,"player");X(this,"actors",[]);X(this,"ai",new Map);X(this,"villageCache",new Map);X(this,"knownVillages",[]);X(this,"selection",{mode:"piece",kind:"log"});X(this,"carryLift",0);X(this,"combatEvents",[]);X(this,"floaters",[]);X(this,"time",9);X(this,"day",1);X(this,"lastFrame",performance.now());X(this,"activeNode",null);X(this,"rosterOpen",!1);X(this,"lastGoodPlayer",{x:0,y:0});X(this,"playerDeathShown",!1);X(this,"hungerHintShown",!1);X(this,"wallMode",!1);X(this,"wallDragStart",null);X(this,"wallPreview",[]);X(this,"wasLeftDown",!1);X(this,"pileMode",!1);X(this,"activePileSlot",1);X(this,"targetYaw",Io);X(this,"targetPitch",ys);X(this,"snapPoints",[]);X(this,"snapBase",null);X(this,"activeSnap",null);X(this,"snapTurns",0);X(this,"frameDt",1/60);X(this,"shelterTimer",0);X(this,"needsTimer",0);X(this,"cachedRoom",{tiles:0,quality:0,enclosed:!1});X(this,"frameErrors",0);const n=vv;this.world=new pd(n),this.renderer=new m_(e),this.input=new x_(e),this.hud=new __(t),this.hud.onSelect=a=>this.selection=a,this.hud.onOrder=(a,l)=>{const c=this.actors.find(h=>h.id===a);c&&this.setOrder(c,l)},this.hud.onOrderAll=a=>{const l=this.crew();for(const c of l)this.setOrder(c,a,!0);this.hud.log(`The whole crew is ${pr[a]}.`)},this.hud.onLocate=a=>{const l=this.actors.find(c=>c.id===a);l&&(this.camera.x=l.x,this.camera.y=l.y,this.hud.log(`Looking at ${l.name}.`))},this.hud.onAssignPile=(a,l,c)=>{const h=this.actors.find(u=>u.id===a);if(!h)return;l==="drop"?h.dropPile=c:l==="source"?h.sourcePile=c:h.destPile=c;const d=l==="drop"?"stacks at":l==="source"?"takes from":"carries to";this.hud.log(`${h.name} ${d} pile ${c}.`)},this.hud.onPickPileSlot=a=>{this.activePileSlot=a},this.hud.onRemovePile=a=>{this.board.removePile(a),this.hud.log(`Pile ${a} removed.`)};const s=en(n^4149),r=s()*Math.PI*2,o=this.world.findLandingBeach(Math.cos(r),Math.sin(r));this.player=Da("You","settlers",o.x,o.y,{isPlayer:!0,speed:3.6}),this.player.inventory.set("flintAxe",1),this.player.inventory.set("berries",6),this.player.equipped="flintAxe",this.actors.push(this.player);for(let a=0;a<10;a++){const l=Da(mh[a%mh.length],"settlers",o.x+(s()-.5)*8,o.y+(s()-.5)*8);l.inventory.set("berries",3),a<4&&l.inventory.set("flintAxe",1),(a===4||a===5)&&l.inventory.set("spear",1),this.actors.push(l),this.ai.set(l.id,No(this.player.id))}this.lastGoodPlayer={x:o.x,y:o.y},this.board.setPile(1,o.x,o.y),this.board.foodPile={x:o.x+3,y:o.y+3},this.camera.x=o.x,this.camera.y=o.y,this.renderer.resize(),window.addEventListener("resize",()=>this.renderer.resize()),this.hud.log("You drag the boat above the tideline."),requestAnimationFrame(()=>this.frame())}get cursorWorld(){return this.cursor}floater(e,t,n,s="#e8e2d4"){this.floaters.push({x:e,y:t,text:n,life:1.4,colour:s})}updatePicking(){const e=this.renderer.pickGround(this.input.mouseX,this.input.mouseY,this.world);e&&(this.cursor=e);const t=Ne(this.player.x,this.player.y,this.cursor.x,this.cursor.y)>80,n=t?null:this.renderer.pickResource(this.cursor,this.world);this.hoveredNodeId=(n==null?void 0:n.id)??null,this.hoveredPiece=this.player.carrying||t?null:this.renderer.pickPiece(this.input.mouseX,this.input.mouseY,this.world,this.player),this.updateSnapTarget()}nearestLiftablePiece(e){const t=this.world.pieces.queryRadius(this.player.x,this.player.y,e);if(!t.length)return null;let n=null,s=1/0;for(const r of t){const o=vu(this.world.pieces,r).length,l=Ne(this.player.x,this.player.y,r.x,r.y)+o*6;l<s&&(s=l,n=r)}return n}updateSnapTarget(){const e=this.player.carrying;if(!e){this.snapPoints=[],this.activeSnap=null;return}const t=this.renderer.pickPiece(this.input.mouseX,this.input.mouseY,this.world,this.cursor);this.snapPoints=yu(this.world.pieces,this.cursor.x,this.cursor.y,5).filter(r=>Mu(r,e.upright)).filter(r=>r.kind!=="top"||(t==null?void 0:t.id)===r.host.id);let n=null,s=Sv;for(const r of this.snapPoints){const o=this.renderer.worldToScreen(r.x,r.y,r.z);if(!o.visible)continue;const a=Math.hypot(o.x-this.input.mouseX,o.y-this.input.mouseY);a<s&&(s=a,n=r)}this.snapBase=n,this.activeSnap=n}plannedPlacement(){const e=this.player;if(!e.carrying)return null;let t,n,s,r;if(this.activeSnap){const a=Su(this.activeSnap,e.carrying.kind,e.carrying.yaw,e.carrying.upright,this.snapTurns);t=a.x,n=a.y,s=a.yaw,r=this.activeSnap.kind==="bottom"?this.world.elevationAt(a.x,a.y):a.z}else{const a=B_(this.world.pieces,e.carrying.kind,this.cursor.x,this.cursor.y,e.carrying.yaw,e.carrying.upright);t=a.x,n=a.y,s=a.yaw,r=this.world.elevationAt(t,n)+this.carryLift}const o=ji(this.world,this.world.pieces,e.carrying.kind,t,n,s,e.carrying.upright,r);return{x:t,y:n,yaw:s,result:o}}get hoveredNode(){if(this.hoveredNodeId!=null)return this.world.findResource(this.hoveredNodeId,this.player.x,this.player.y)}update(e){this.updateTime(e),this.updatePicking(),this.updatePlayer(e),this.updateCamera(e),this.updateVillages();for(const t of this.actors){if(t===this.player||!Dt(t))continue;const n=this.ai.get(t.id);n&&V_(t,n,this.world,this.board,this.actors,e)}lv(this.actors),ov(this.actors,e,this.combatEvents);for(const t of this.combatEvents)this.floater(t.x,t.y,t.text,t.kind==="death"?"#e0bd52":t.kind==="miss"?"#8b8578":"#d4694a"),t.kind==="death"&&this.hud.log(t.text);if(this.combatEvents.length=0,this.updateNeeds(e),this.world.tickRegrow(e),!Dt(this.player)&&!this.playerDeathShown){this.playerDeathShown=!0;const t=this.player.hunger<=0?"starved":this.player.warmth<18?"frozen":"fallen";this.hud.showBanner("You have "+t,"Your people carry on without you.",999999),this.hud.log("You have died.")}for(const t of this.actors)t.actionTimer>0&&(t.actionTimer-=e);for(const t of this.actors)Dt(t)||(this.board.releaseAllFor(t.id),hh(t.id));this.actors=this.actors.filter(t=>Dt(t)||t===this.player);for(const t of this.floaters)t.life-=e;this.floaters=this.floaters.filter(t=>t.life>0),this.world.evictFarChunks(Math.floor(this.camera.x),Math.floor(this.camera.y),this.renderer.viewChunksFor(this.camera)+2)}updateTime(e){this.time+=e/_v,this.time>=24&&(this.time-=24,this.day++,this.hud.log(`Day ${this.day} breaks.`))}updateNeeds(e){if(this.needsTimer+=e,this.needsTimer<.5)return;const t=this.needsTimer;this.needsTimer=0;const n=this.time<6||this.time>20;for(const s of this.actors){if(!Dt(s))continue;if(s.hunger=Math.max(0,s.hunger-t*.22),s.hunger<35){let l=null,c=0;for(const h of s.inventory.keys()){const d=vt[h].nutrition??0;d>c&&(c=d,l=h)}if(l)Ms(s,l,1),s.hunger=Math.min(100,s.hunger+(vt[l].nutrition??0)),s.isPlayer&&this.floater(s.x,s.y,`ate ${vt[l].name.toLowerCase()}`,"#9ac36a");else{const h=this.world.takeFromLarder(this.board.foodPile);h&&(s.hunger=Math.min(100,s.hunger+(vt[h].nutrition??0)),s.isPlayer&&this.floater(s.x,s.y,`ate ${vt[h].name.toLowerCase()} from the larder`,"#9ac36a"))}}s.hunger<=0&&(s.stamina=Math.max(0,s.stamina-t*2),s.morale=Math.max(0,s.morale-t*2)),s.isPlayer&&s.hunger<30&&!this.hungerHintShown&&([...s.inventory.keys()].some(c=>(vt[c].nutrition??0)>0)||(this.hungerHintShown=!0,this.hud.log("Hungry. Left-click a berry bush to gather food — you eat it automatically.")));const r=Fa(this.world,Math.floor(s.x),Math.floor(s.y)),o=this.world.nearestFixture(s.x,s.y,"campfire",6)!==void 0,a=n?r.quality>.4||o?62:22:72+r.quality*18;s.warmth+=(a-s.warmth)*t*.22,s.warmth<18&&(s.stamina=Math.max(0,s.stamina-t*1.5),s.morale=Math.max(0,s.morale-t*1.5)),s.stance===ye.Idle&&(s.stamina=Math.min(100,s.stamina+t*3))}}updatePlayer(e){const t=this.player;if(!Dt(t))return;Number.isFinite(t.x)&&Number.isFinite(t.y)?(this.lastGoodPlayer.x=t.x,this.lastGoodPlayer.y=t.y):(t.x=this.lastGoodPlayer.x,t.y=this.lastGoodPlayer.y);const n=this.input.moveVector();if(n.x!==0||n.y!==0){const s=Math.cos(this.camera.yaw),r=Math.sin(this.camera.yaw),o=-n.y*s-n.x*-r,a=-n.y*r-n.x*s,l=Math.hypot(o,a)||1,c=this.world.speedMultiplier(Math.floor(t.x),Math.floor(t.y)),h=du(t,c),d=t.x+o/l*h*e,u=t.y+a/l*h*e;Number.isFinite(d)&&this.world.canStand(d,t.y)&&(t.x=d),Number.isFinite(u)&&this.world.canStand(t.x,u)&&(t.y=u),t.facing=Math.atan2(a,o),t.stance=ye.Moving,t.stamina=Math.max(0,t.stamina-e*.5)}else t.stance===ye.Moving&&(t.stance=ye.Idle);this.handleHotkeys(),this.wallMode?this.updateWallTool():this.pileMode?this.updatePileTool():(this.handleCarry(e),this.handleClicks(e))}updatePileTool(){const e=this.input;for(let t=1;t<=br;t++)e.pressed(String(t))&&(this.activePileSlot=t);if(e.leftClicked||e.rightClicked){const t=Math.round(this.cursor.x),n=Math.round(this.cursor.y),s=!this.board.pileById(this.activePileSlot),r=this.board.stockpiles.length;this.board.setPile(this.activePileSlot,t,n),this.hud.log(`Pile ${this.activePileSlot} placed.`),s&&r===1&&this.hud.log("Now open the roster (M) to choose which pile each worker uses.")}this.wasLeftDown=e.leftDown}updateWallTool(){const e=this.input,t={x:Qi(this.cursor.x),y:Qi(this.cursor.y)};if(e.leftClicked&&(this.wallDragStart=t),this.wallPreview=this.wallDragStart&&e.leftDown?Mh(this.wallDragStart,t):[],this.wasLeftDown&&!e.leftDown&&this.wallDragStart){const n=Mh(this.wallDragStart,t);this.board.addWallLine(n),this.wallDragStart=null,this.wallPreview=[],this.hud.log(`Wall outlined — ${this.board.wallCells.length} posts planned. Set a crew to build.`)}if(e.rightClicked&&!this.tryPickUp(!0)){const s=this.renderer.pickWallCell(e.mouseX,e.mouseY,this.wallGhostCells())??t,r=this.board.removeWallLineAt(s.x,s.y,Ss*.7);r&&this.hud.log(`Removed a wall line (${r} post${r>1?"s":""}).`)}this.wasLeftDown=e.leftDown}handleHotkeys(){const e=this.input;if(this.pileMode||(fu.forEach((t,n)=>{e.pressed(String(n+1))&&(this.selection={mode:"piece",kind:t})}),pu.forEach((t,n)=>{e.pressed(String(n+5))&&(this.selection={mode:"fixture",kind:t})})),e.pressed("h")&&this.hud.toggleHelp(),e.pressed("m")&&(this.rosterOpen=!this.rosterOpen),e.pressed("k")&&(this.wallMode=!this.wallMode,this.wallDragStart=null,this.wallPreview=[],this.hud.log(this.wallMode?"Wall tool: left-drag to draw a line, right-click a line to delete it, K to finish.":"Wall tool off.")),e.pressed("p")&&(this.pileMode=!this.pileMode,this.pileMode&&this.wallMode&&(this.wallMode=!1),this.hud.log(this.pileMode?`Stockpile tool: press 1-${br} to pick a pile, click the ground (either button) to place it. P to finish.`:"Stockpile tool off.")),e.pressed("g")&&(this.board.setPile(1,Math.floor(this.player.x),Math.floor(this.player.y)),this.hud.log("Pile 1 set. Haulers stack timber here by default.")),e.pressed("t")&&(this.board.foodPile={x:Math.floor(this.player.x),y:Math.floor(this.player.y)},this.hud.log("Larder set. Foragers will bring food here.")),e.pressed("c")&&this.craftBest(),e.pressed("o")&&this.saveGame(),e.pressed("l")&&this.loadGame(),this.player.carrying){const t=this.player.carrying,n=this.frameDt,s=this.snapBase!==null&&this.snapBase.kind!=="top";e.pressed("q")&&(s?this.snapTurns-=1:t.yaw-=nh),e.pressed("e")&&(s?this.snapTurns+=1:t.yaw+=nh),e.pressed("f")&&(t.upright=!t.upright,this.hud.log(t.upright?"Stood on end.":"Laid flat.")),e.isDown("v")&&(this.carryLift+=.5*n),e.isDown("b")&&(this.carryLift=Math.max(0,this.carryLift-.5*n))}e.wheelDelta!==0&&(this.camera.zoom=Math.max(6,Math.min(450,this.camera.zoom*(1+e.wheelDelta*.0012)))),e.pressed("arrowleft")&&(this.targetYaw-=vh),e.pressed("arrowright")&&(this.targetYaw+=vh),e.pressed("arrowup")&&(this.targetPitch=ko(this.targetPitch+Nr)),e.pressed("arrowdown")&&(this.targetPitch=ko(this.targetPitch-Nr)),e.middleDown&&e.dragY!==0&&(this.targetPitch=ko(this.targetPitch+e.dragY*.004)),e.pressed("/")&&(this.targetYaw=Io,this.targetPitch=ys,this.hud.log("View reset."))}handleCarry(e){var s;if(!this.input.pressed("e"))return;const n=this.player;if(!n.carrying&&!this.tryPickUp(!1)&&((s=this.selection)==null?void 0:s.mode)==="piece"){const r=Ye[this.selection.kind];r.fromItem&&_i(n,r.fromItem)>0?(Ms(n,r.fromItem,1),n.carrying={kind:this.selection.kind,yaw:0,upright:!1,lift:0},this.carryLift=0):this.hud.log(`No ${r.fromItem?vt[r.fromItem].name.toLowerCase():"material"} to hand.`)}}tryPickUp(e){const t=this.player;if(t.carrying)return!1;const n=xh,s=this.world.resourcesNear(this.cursor.x,this.cursor.y,1.4).find(a=>a.kind===qe.Boulder&&Ne(t.x,t.y,a.x,a.y)<n);if(s)return this.world.removeResource(s),t.carrying={kind:"boulder",yaw:0,upright:!1,lift:0},this.carryLift=0,this.hud.log("You heave the boulder up. Heavy going."),!0;const r=this.hoveredPiece&&Ne(t.x,t.y,this.hoveredPiece.x,this.hoveredPiece.y)<n?this.hoveredPiece:null,o=e?r:r??this.nearestLiftablePiece(n);if(o){const a=U_(this.world,this.world.pieces,o);if(t.carrying={kind:o.kind,yaw:wv(o.yaw),upright:o.upright,lift:0},this.carryLift=0,a.collapsed.length){this.hud.log(`${a.collapsed.length} piece(s) came down with it.`);for(const l of a.collapsed){const c=Ye[l.kind].fromItem;c&&this.world.dropItems(l.x,l.y,c,1)}}return!0}return!1}handleClicks(e){var r,o;const t=this.input,n=this.player,s=this.cursorWorld;if(n.carrying)t.leftClicked&&this.tryPlaceCarried();else if(((r=this.selection)==null?void 0:r.mode)==="fixture"&&t.leftClicked)this.tryPlaceFixture(this.selection.kind,Math.floor(s.x),Math.floor(s.y));else if(t.leftClicked&&((o=this.hoveredNode)==null?void 0:o.kind)===qe.Boulder&&Ne(n.x,n.y,this.hoveredNode.x,this.hoveredNode.y)<Bo){const a=this.hoveredNode;mu(this.world,a),n.stance=ye.Working,n.actionTimer=.3,n.facing=Math.atan2(a.y-n.y,a.x-n.x),this.hud.log("You knock the boulder square. A tidy block."),this.floater(a.x,a.y,"dressed","#c8c8c2")}else if(t.leftDown){const a=this.hoveredNode;if(a&&Ne(n.x,n.y,a.x,a.y)<Bo){this.activeNode=a,n.stance=ye.Working,n.actionTimer=.3,n.facing=Math.atan2(a.y-n.y,a.x-n.x);const l=Xr(n,a,this.world,e);l.gained>0&&l.item&&this.floater(a.x,a.y,`+${l.gained} ${vt[l.item].name}`),l.depleted&&(hl(a.kind)?(ul(this.world,a.x,a.y,n.facing),this.hud.log(`${Yr[a.kind]} felled. The trunk lies where it fell.`),this.floater(a.x,a.y,"timber!","#e0bd52")):this.hud.log(`${Yr[a.kind]} exhausted.`),this.activeNode=null)}else{const l=this.actors.find(c=>c.faction!=="settlers"&&Dt(c)&&Ne(c.x,c.y,s.x,s.y)<1.2);l&&Ne(n.x,n.y,l.x,l.y)<2&&(Ir(n,"fight"),n.stance=ye.Fighting)}}else this.activeNode&&(this.activeNode=null,n.stance===ye.Working&&(n.stance=ye.Idle));if(t.rightClicked&&!this.tryPickUp(!0)){const a=this.settlerUnderCursor();a?this.cycleOrder(a):this.setDeliveryPoint(Math.round(s.x),Math.round(s.y))}}settlerUnderCursor(){let e=null,t=42;for(const n of this.actors){if(n===this.player||n.faction!=="settlers"||!Dt(n))continue;const s=this.renderer.worldToScreen(n.x,n.y,this.world.elevationAt(n.x,n.y)+.45);if(!s.visible)continue;const r=Math.hypot(s.x-this.input.mouseX,s.y-this.input.mouseY);r<t&&(t=r,e=n)}return e}cycleOrder(e){const t={follow:"chop",chop:"mine",mine:"build",build:"haul",haul:"forage",forage:"stopped",stopped:"follow"};this.setOrder(e,t[e.order])}setOrder(e,t,n=!1){if(e.order=t,e.order==="stopped"&&e.carrying){const s=ji(this.world,this.world.pieces,e.carrying.kind,e.x,e.y,e.carrying.yaw,e.carrying.upright);s.ok&&es(this.world.pieces,e.carrying.kind,e.x,e.y,e.carrying.yaw,e.carrying.upright,s),e.carrying=null}n||this.hud.log(`${e.name} is ${pr[e.order]}.`),(e.order==="haul"||e.order==="chop"||e.order==="mine")&&!this.board.dropPoint&&this.hud.log("Right-click open ground to set where they should stack it.")}crew(){return this.actors.filter(e=>e.faction==="settlers"&&!e.isPlayer&&Dt(e))}hasSave(){try{return localStorage.getItem(Oo)!==null}catch{return!1}}saveGame(){const e={version:gh,seed:this.world.seed,day:this.day,time:this.time,camera:{...this.camera,targetYaw:this.targetYaw,targetPitch:this.targetPitch},world:this.world.exportState(),board:this.board.exportState(),actors:this.actors.map(Mv),playerId:this.player.id,actorId:t_(),villages:this.knownVillages,flags:{playerDeathShown:this.playerDeathShown,hungerHintShown:this.hungerHintShown}};try{localStorage.setItem(Oo,JSON.stringify(e)),this.hud.log(`Game saved — day ${this.day}, ${String(Math.floor(this.time)).padStart(2,"0")}:00.`)}catch(t){this.hud.log("Could not save the game."),console.error("[save]",t)}}loadGame(){let e;try{e=localStorage.getItem(Oo)}catch{e=null}if(!e){this.hud.log("No saved game to load.");return}let t;try{t=JSON.parse(e)}catch{this.hud.log("The saved game is corrupt.");return}if(t.version!==gh||t.seed!==this.world.seed){this.hud.log("That save is from a different version and cannot be loaded.");return}this.world.importState(t.world),this.board.importState(t.board),this.actors=t.actors.map(yv),this.player=this.actors.find(n=>n.id===t.playerId)??this.actors[0],this.ai.clear();for(const n of this.actors)hh(n.id),n.isPlayer||this.ai.set(n.id,No(this.player.id));n_(t.actorId),this.day=t.day,this.time=t.time,this.camera.x=t.camera.x,this.camera.y=t.camera.y,this.camera.yaw=t.camera.yaw,this.camera.pitch=t.camera.pitch,this.camera.zoom=t.camera.zoom,this.targetYaw=t.camera.targetYaw,this.targetPitch=t.camera.targetPitch,this.knownVillages=t.villages??[],this.villageCache.clear(),this.playerDeathShown=t.flags.playerDeathShown,this.hungerHintShown=t.flags.hungerHintShown,this.lastGoodPlayer={x:this.player.x,y:this.player.y},this.activeNode=null,this.hoveredPiece=null,this.hoveredNodeId=null,this.wallDragStart=null,this.wallPreview=[],this.hud.log(`Game loaded — day ${this.day}, ${String(Math.floor(this.time)).padStart(2,"0")}:00.`)}wallGhostCells(){const e=[...this.board.wallCells,...this.wallPreview],t=[],n=new Set;for(const s of e){const r=`${s.x},${s.y}`;n.has(r)||(n.add(r),!gu(this.world.pieces,s)&&t.push({x:s.x,y:s.y,z:this.world.elevationAt(s.x,s.y)}))}return t}setDeliveryPoint(e,t){this.board.dropPoint={x:e,y:t};const n=this.actors.filter(s=>s.order==="haul").length;this.hud.log(n>0?`Timber will be stacked here. ${n} hauling.`:"Timber will be stacked here. Right-click a settler to set them hauling.")}tryPlaceCarried(){const e=this.player;if(!e.carrying)return;const t=this.plannedPlacement();if(t){if(!t.result.ok){this.hud.log(t.result.reason??"It will not sit there.");return}if(Ne(e.x,e.y,t.x,t.y)>_h){this.hud.log("Too far to reach.");return}es(this.world.pieces,e.carrying.kind,t.x,t.y,t.yaw,e.carrying.upright,t.result),e.carrying=null,this.carryLift=0,this.activeSnap=null,this.snapBase=null,this.snapTurns=0,e.stamina=Math.max(0,e.stamina-1.5)}}tryPlaceFixture(e,t,n){const s=ri[e];if(!this.world.canPlaceFixture(e,t,n)){this.hud.log("The ground will not take it.");return}const r=s.cost.filter(a=>_i(this.player,a.item)<a.count);if(r.length){this.hud.log(`Need ${r.map(a=>`${a.count} ${vt[a.item].name.toLowerCase()}`).join(", ")}.`);return}const o=this.world.placeFixtureSite(e,t,n);this.board.addFixtureJob(o),this.hud.log(`${s.name} site marked. Settlers will raise it.`)}craftBest(){const e=this.player,t=[{out:"plank",need:[{item:"log",count:1}],count:4},{out:"rope",need:[{item:"reed",count:4}],count:1},{out:"thatch",need:[{item:"reed",count:5}],count:2}];for(const n of t)if(n.need.every(s=>_i(e,s.item)>=s.count)){for(const s of n.need)Ms(e,s.item,s.count);uu(e,n.out,n.count),this.hud.log(`Made ${n.count} ${vt[n.out].name.toLowerCase()}.`);return}this.hud.log("Nothing to hand that you can work.")}updateCamera(e){this.camera.x+=(this.player.x-this.camera.x)*Math.min(1,e*6),this.camera.y+=(this.player.y-this.camera.y)*Math.min(1,e*6),this.camera.yaw+=(this.targetYaw-this.camera.yaw)*Math.min(1,e*9),this.camera.pitch+=(this.targetPitch-this.camera.pitch)*Math.min(1,e*9)}updateVillages(){const e=fv(this.world,this.player.x,this.player.y,260,this.villageCache);for(const t of e){if(t.materialised||Ne(this.player.x,this.player.y,t.x,t.y)>90)continue;const n=pv(this.world,t);for(const s of n)this.actors.push(s),this.ai.set(s.id,No(null));this.knownVillages.push(t),this.hud.showBanner(t.name,`${Fo[t.disposition]} · ${t.population} souls`,4200),this.hud.log(`You come upon ${t.name}. They look ${Fo[t.disposition].toLowerCase()}.`)}}draw(e){var l;const t=this.cursorWorld,n=this.player,s=this.plannedPlacement(),r=s?{kind:n.carrying.kind,x:s.x,y:s.y,z:s.result.z,yaw:s.yaw,upright:n.carrying.upright,ok:s.result.ok&&Ne(n.x,n.y,s.x,s.y)<=_h}:void 0;this.renderer.render(this.world,this.camera,this.actors,{ghost:r,snapPoints:n.carrying?this.snapPoints:void 0,activeSnap:this.activeSnap,stockpiles:this.board.stockpiles,activePileId:this.pileMode?this.activePileSlot:null,foodPile:this.board.foodPile,wallCells:this.wallGhostCells(),hoveredPiece:this.hoveredPiece,hoveredResourceId:this.hoveredNodeId,timeOfDay:this.time/24,dt:e}),this.drawFloaters(),this.drawPileLabels(),this.hud.setPileTool(this.pileMode,this.activePileSlot,this.board.stockpiles.map(c=>c.id),br),this.updateTooltip(t,this.hoveredPiece),this.shelterTimer-=e,this.shelterTimer<=0&&(this.shelterTimer=.5,this.cachedRoom=xv(this.world,Math.floor(n.x),Math.floor(n.y)));const o=this.cachedRoom,a=this.knownVillages.map(c=>({name:c.name,distance:Ne(n.x,n.y,c.x,c.y),disposition:Fo[c.disposition]})).sort((c,h)=>c.distance-h.distance)[0];this.hud.setRoster(this.rosterOpen,this.crew().map(c=>({id:c.id,name:c.name,order:c.order,status:c.carrying?`carrying a ${Ye[c.carrying.kind].name.toLowerCase()}`:pr[c.order],distance:Ne(n.x,n.y,c.x,c.y),dropPile:c.dropPile,sourcePile:c.sourcePile,destPile:c.destPile})),this.board.stockpiles.map(c=>c.id),((l=this.board.defaultPile())==null?void 0:l.id)??null),this.hud.update(n,{day:this.day,hour:this.time,settlers:this.actors.filter(c=>c.faction==="settlers"&&Dt(c)).length,hauling:this.actors.filter(c=>(c.order==="haul"||c.order==="chop"||c.order==="mine")&&Dt(c)).length,pending:this.board.pending,pieces:this.world.pieces.count,larder:this.world.larderCount(this.board.foodPile),selection:this.selection,nearestVillage:a,shelter:o.tiles>0?`${o.enclosed?"enclosed":"partial"}, ${o.tiles} tiles`:void 0},e)}drawPileLabels(){const e=this.crew();this.hud.setPileLabels(this.board.stockpiles.map(t=>{var c;const n=this.renderer.worldToScreen(t.x,t.y,this.world.elevationAt(t.x,t.y)+1.4),s=(c=this.board.defaultPile())==null?void 0:c.id,r=e.filter(h=>(h.order==="chop"||h.order==="mine")&&(h.dropPile??s)===t.id||h.order==="haul"&&(h.destPile??s)===t.id).length,o=e.filter(h=>(h.order==="haul"||h.order==="build")&&(h.sourcePile??s)===t.id).length,a=[];r&&a.push(`${r} in`),o&&a.push(`${o} out`);const l=a.length?`<span class="role">${a.join(" · ")}</span>`:"";return{x:n.x,y:n.y,text:`Pile ${t.id}${l}`,highlight:this.pileMode&&t.id===this.activePileSlot,visible:n.visible}}))}drawFloaters(){this.hud.setFloaters(this.floaters.map(e=>{const t=this.renderer.worldToScreen(e.x,e.y,this.world.elevationAt(e.x,e.y)+2);return{x:t.x,y:t.y-(1.4-e.life)*26,text:e.text,colour:e.colour,alpha:Math.min(1,e.life),visible:t.visible}}))}updateTooltip(e,t){const n=this.player;if(n.carrying){const a=Ye[n.carrying.kind];let l="left click to set down · Q/E turn 90° · F upright · V/B raise";if(this.activeSnap){const c=this.activeSnap.host,d=Math.abs(Math.cos(n.carrying.yaw-c.yaw)*Math.cos((c.upright,0)))<.5,u=this.activeSnap.kind==="top"?`on top, ${d?"across":"along"} the ${Ye[c.kind].name.toLowerCase()}`:this.activeSnap.kind==="bottom"?"at the foot, flat on the ground":`out from the ${Ye[c.kind].name.toLowerCase()}`,f=this.activeSnap.kind==="top"?"turn 90°":"out / alongside";l=`${u} · Q/E ${f} · left click to set`}this.hud.setTip(`Carrying ${a.name}`,l,this.input.mouseX,this.input.mouseY);return}if(t&&Ne(n.x,n.y,t.x,t.y)<xh){const a=Ye[t.kind];this.hud.setTip(a.name,`bearing ${Math.round(t.load)}/${a.bearing} · right click to lift`,this.input.mouseX,this.input.mouseY);return}const s=this.hoveredNode;if(s){const a=Ne(n.x,n.y,s.x,s.y)<Bo;this.hud.setTip(`${Yr[s.kind]} (${Math.ceil(s.amount)})`,a?"hold left click to work":"too far to reach",this.input.mouseX,this.input.mouseY);return}const r=this.settlerUnderCursor();if(r){const a=r.carrying?` · carrying a ${Ye[r.carrying.kind].name.toLowerCase()}`:"";this.hud.setTip(`${r.name} · ${pr[r.order]}${a}`,"right click to change their orders",this.input.mouseX,this.input.mouseY);return}const o=this.actors.find(a=>a!==n&&Dt(a)&&Ne(a.x,a.y,this.cursor.x,this.cursor.y)<1);if(o){this.hud.setTip(`${o.name} · ${o.faction==="natives"?"islander":"settler"}`,`${Math.round(o.hp)}/${o.maxHp} health`,this.input.mouseX,this.input.mouseY);return}if(!n.carrying){this.hud.setTip("Ground","right click to set where timber is stacked",this.input.mouseX,this.input.mouseY);return}this.hud.setTip(null,null,0,0)}frame(){const e=performance.now(),t=Math.min(.05,(e-this.lastFrame)/1e3);this.lastFrame=e,this.frameDt=t;try{this.update(t),this.draw(t)}catch(n){this.reportFrameError(n)}this.input.endFrame(),requestAnimationFrame(()=>this.frame())}reportFrameError(e){if(this.frameErrors++,console.error("[frame error]",e),this.frameErrors<=3){const t=e instanceof Error?e.message:String(e);this.hud.log(`Something glitched: ${t}`)}}}const Av=document.getElementById("game"),Rv=document.getElementById("hud"),Cv=new Tv(Av,Rv);window.game=Cv;
