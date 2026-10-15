(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const xf=""+new URL("nunito-latin-600-normal-Br8yIETf.woff2",import.meta.url).href,Mf=""+new URL("nunito-latin-700-normal-Dort48En.woff2",import.meta.url).href,Sf=""+new URL("nunito-latin-800-normal-Dz8SOQK_.woff2",import.meta.url).href,yf=""+new URL("nunito-latin-900-normal-BVB1fGs6.woff2",import.meta.url).href,bf=""+new URL("dancing-script-latin-700-normal-CX8AaSVl.woff2",import.meta.url).href,Ef=[["Nunito",xf,"600"],["Nunito",Mf,"700"],["Nunito",Sf,"800"],["Nunito",yf,"900"],["Dancing Script",bf,"700"]];function wf(){return typeof FontFace>"u"||!document.fonts?Promise.resolve():Promise.all(Ef.map(([i,t,e])=>{const n=new FontFace(i,`url(${t}) format('woff2')`,{weight:e,display:"swap"});return document.fonts.add(n),n.load().catch(()=>{})}))}const an=8,hr=an*an,Yi=[5,6,7,8,9,10],Hh=i=>Yi.includes(i),Tf={5:"Tiny",6:"Small",7:"Cozy",8:"Classic",9:"Big",10:"Grand"},Te=-1,Re=99,ti=[{name:"Sprout",hint:"Tier 1 · Common",mergePoints:0},{name:"Tree",hint:"Tier 2 · Growing",mergePoints:20},{name:"Cottage",hint:"Tier 3 · Cosy",mergePoints:90},{name:"Windmill",hint:"Tier 4 · Special",mergePoints:350},{name:"Little Castle",hint:"Tier 5 · Rare",mergePoints:1200},{name:"Palace",hint:"Tier 6 · Grand",mergePoints:4e3},{name:"Observatory",hint:"Tier 7 · Lofty",mergePoints:13e3},{name:"Sky Isle",hint:"Tier 8 · Legendary",mergePoints:42e3}],Af=4,Gn=ti.length-1,Vh={name:"Rock",hint:"Obstacle"},ln={minGroup:3,groupSizeBonus:.5,comboMultipliers:[1,2,3,4,5],festivalPoints:15e4,rockMinGroup:0,rockCrumblePoints:40,rockBreakTier:3,placePoints:1,spawnPhases:[{fromTurn:1,tiers:[75,25],rock:0},{fromTurn:11,tiers:[60,30,8],rock:7},{fromTurn:31,tiers:[52,32,11],rock:12},{fromTurn:61,tiers:[48,32,12,2],rock:17},{fromTurn:101,tiers:[45,32,13,3],rock:23},{fromTurn:161,tiers:[43,32,14,3],rock:30},{fromTurn:241,tiers:[42,32,14,3],rock:40}],assistFillRatio:.7,assistChance:.35,crowdedRatio:.78};function $a(i,t=ln){return i===Re?t.rockMinGroup>0?t.rockMinGroup:1/0:t.minGroup}function nn(i){return i===Re?Vh.name:ti[i]?.name??"Empty"}function Cf(i){return i===Re?Vh.hint:ti[i]?.hint??""}function Ya(i){return Math.round(Math.sqrt(i.length))}function qa(i=an){return new Array(i*i).fill(Te)}function Sr(i,t=an){return{x:i%t,y:Math.floor(i/t)}}function Rf(i,t,e=an){return t*e+i}function uc(i,t=an){const{x:e,y:n}=Sr(i,t),s=[];return e>0&&s.push(i-1),e<t-1&&s.push(i+1),n>0&&s.push(i-t),n<t-1&&s.push(i+t),s}function Wh(i,t=an){const{x:e,y:n}=Sr(i,t);return e===0||n===0||e===t-1||n===t-1}function Br(i,t,e=i[t]){const n=Ya(i),s=new Set([t]),r=[t];for(;r.length;){const a=r.pop();for(const o of uc(a,n))!s.has(o)&&i[o]===e&&(s.add(o),r.push(o))}return[...s].sort((a,o)=>a-o)}function Li(i){const t=[];return i.forEach((e,n)=>e===Te&&t.push(n)),t}function Pf(i){let t=0;for(const e of i)e!==Te&&t++;return t}function Lf(i,t=an){const e=qa(t);return i.forEach((n,s)=>[...n.replace(/\s+/g,"")].forEach((r,a)=>{r!=="."&&(e[Rf(a,s,t)]=r==="R"?99:Number(r)-1)})),e}const Df=/^(\d{4})-(\d{2})-(\d{2})$/,Xh=864e5,Ls=(i,t=2)=>String(i).padStart(t,"0");function If(i){return`${Ls(i.getFullYear(),4)}-${Ls(i.getMonth()+1)}-${Ls(i.getDate())}`}function Na(i){const t=Df.exec(i);if(!t)return NaN;const[e,n,s]=[Number(t[1]),Number(t[2]),Number(t[3])],r=Date.UTC(e,n-1,s),a=new Date(r);return a.getUTCFullYear()===e&&a.getUTCMonth()===n-1&&a.getUTCDate()===s?r:NaN}function Nf(i){const t=new Date(i);return`${Ls(t.getUTCFullYear(),4)}-${Ls(t.getUTCMonth()+1)}-${Ls(t.getUTCDate())}`}function qi(i){return typeof i=="string"&&Number.isFinite(Na(i))}function Uf(i,t){return Math.round((Na(t)-Na(i))/Xh)}function $h(i){const t=Na(i);return Number.isFinite(t)?Nf(t-Xh):""}function hc(i){const t=i+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),[((e^e>>>14)>>>0)/4294967296,t]}function Yh(){return typeof crypto<"u"&&"getRandomValues"in crypto?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*2**32)>>>0}function Ff(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function dc(i,t=hr){return t===hr?i:Math.max(1,Math.round(1+(i-1)*(hr/t)))}function su(i,t=hr){let e=1;for(;dc(e,t)<i;)e++;return e}function qh(i,t=ln){let e=t.spawnPhases[0];for(const n of t.spawnPhases)i>=n.fromTurn&&(e=n);return e}function ol(i,t=ln){const e=qh(i,t),n=e.tiers.map((r,a)=>[a,r]);e.rock>0&&n.push([Re,e.rock]);const s=n.reduce((r,[,a])=>r+a,0);return n.filter(([,r])=>r>0).map(([r,a])=>[r,a/s])}function ru(i,t,e){const[n,s]=hc(t),r=ol(i,e);let a=0;for(const[o,l]of r)if(a+=l,n<a)return[o,s];return[r[r.length-1][0],s]}function Of(i,t,e){for(const n of Li(i)){const s=[...i];s[n]=t;const r=$a(t,e);if(Br(s,n,t).length>=r)return!0}return!1}function Ka(i,t,e,n=ln){t=dc(t,i.length);let[s,r]=ru(t,e,n);if(Pf(i)/i.length>=n.assistFillRatio&&Li(i).length>0&&!Of(i,s,n)){const[o,l]=hc(r);r=l,o<n.assistChance&&([s,r]=ru(t,r,n))}return[s,r]}function au(i){const t=i.map(([s,r])=>({piece:s,exact:r*100,percent:Math.floor(r*100)}));let e=100-t.reduce((s,r)=>s+r.percent,0);const n=[...t].sort((s,r)=>r.exact-r.percent-(s.exact-s.percent));for(const s of n){if(e<=0)break;s.percent++,e--}return t.map(({piece:s,percent:r})=>({piece:s,percent:r}))}function Bf(i,t=ln,e=hr){const n=dc(i,e),s=qh(n,t),r=t.spawnPhases[t.spawnPhases.indexOf(s)+1],a=su(s.fromTurn,e),o=r?su(r.fromTurn,e):null;return{from:a,to:o!==null?o-1:null,rows:au(ol(n,t)),next:r&&o!==null?{at:o,rows:au(ol(r.fromTurn,t))}:null}}function fc(i,t=ln,e=an){const n={board:qa(e),score:0,turn:1,next:0,stash:Te,rng:i>>>0,over:!1,lastChain:0,bestChain:0,highestTier:0,merges:0,seed:i>>>0,festivals:0,rocksShattered:0},[s,r]=Ka(n.board,n.turn,n.rng,t);return{...n,next:s,rng:r}}function Kh(i,t=ln){const e=t.comboMultipliers;return e[Math.min(i-1,e.length-1)]}function kf(i,t,e,n=ln){const s=ti[i].mergePoints,r=1+n.groupSizeBonus*Math.max(0,t-n.minGroup);return Math.round(s*r*Kh(e,n))}function zf(i,t,e=ln){const n=[];let s=0;for(;;){const r=i[t];if(r===Te)break;const a=Br(i,t,r),o=$a(r,e);if(a.length<o)break;if(r===Re){for(const u of a)i[u]=Te;n.push({kind:"crumble",cells:a,target:t,points:e.rockCrumblePoints*a.length});break}s++;const l=Kh(s,e);if(r===Gn){for(const h of a)i[h]=Te;const u=1+e.groupSizeBonus*(a.length-e.minGroup),f=Math.round(e.festivalPoints*u*l);n.push({kind:"festival",step:s,cells:a,target:t,points:f,multiplier:l});break}for(const u of a)i[u]=Te;i[t]=r+1;const c=r+1>=e.rockBreakTier?Gf(i,a):[];if(n.push({kind:"merge",step:s,fromTier:r,toTier:r+1,cells:a,target:t,points:kf(r+1,a.length,s,e),multiplier:l}),c.length){for(const u of c)i[u]=Te;n.push({kind:"crumble",cells:c,target:t,points:e.rockCrumblePoints*c.length})}}return n}function Gf(i,t){const e=new Set,n=Ya(i);for(const s of t)for(const r of uc(s,n))i[r]===Re&&e.add(r);return[...e].sort((s,r)=>s-r)}function Za(i,t,e=ln){if(i.over||!Number.isInteger(t)||t<0||t>=i.board.length||i.board[t]!==Te)return{state:i,events:[],points:0,accepted:!1};const n=[...i.board],s=i.next;n[t]=s;const r=[{kind:"place",index:t,piece:s,points:e.placePoints}],a=zf(n,t,e);r.push(...a);const o=r.reduce((y,T)=>y+T.points,0),l=a.filter(y=>y.kind==="merge"||y.kind==="festival").length;let c=i.highestTier,u=i.festivals??0,f=i.rocksShattered??0;for(const y of a)y.kind==="merge"&&(c=Math.max(c,y.toTier)),y.kind==="festival"&&(c=Gn,u++),y.kind==="crumble"&&(f+=y.cells.length);s!==Re&&(c=Math.max(c,s));const h=i.turn+1,[d,g]=Ka(n,h,i.rng,e),M=Li(n).length===0,p=!!i.pieceLimit&&h>i.pieceLimit,m=M||p;return{accepted:!0,events:r,points:o,state:{...i,board:n,score:i.score+o,turn:h,next:d,rng:g,over:m,lastChain:l,bestChain:Math.max(i.bestChain,l),highestTier:c,merges:i.merges+l,festivals:u,rocksShattered:f,...m?{endReason:M?"full":"limit"}:{}}}}function Hf(i,t=ln){if(i.over)return i;if(i.stash===Te){const[e,n]=Ka(i.board,i.turn,i.rng,t);return{...i,stash:i.next,next:e,rng:n}}return{...i,stash:i.next,next:i.stash}}function pc(i,t,e=ln){const n=[];for(const s of Li(i)){const r=[...i];r[s]=t;const a=$a(t,e);Br(r,s,t).length>=a&&n.push(s)}return n}const Un=i=>typeof i=="number"&&Number.isInteger(i),mo=i=>Un(i)&&(i===Te||i===Re||i>=0&&i<=Gn),ou=i=>Un(i)&&i>=0,os=(i,t)=>i===void 0||t(i);function Ji(i){if(!i||typeof i!="object")return!1;const t=i;return Array.isArray(t.board)&&Hh(Math.sqrt(t.board.length))&&t.board.every(mo)&&Un(t.score)&&t.score>=0&&Un(t.turn)&&t.turn>=1&&mo(t.next)&&t.next!==Te&&mo(t.stash)&&Un(t.rng)&&typeof t.over=="boolean"&&Un(t.lastChain)&&Un(t.bestChain)&&Un(t.highestTier)&&Un(t.merges)&&Un(t.seed)&&os(t.festivals,ou)&&os(t.rocksShattered,ou)&&os(t.mode,n=>n==="classic"||n==="daily")&&os(t.dailyKey,qi)&&os(t.pieceLimit,n=>Un(n)&&n>0)&&os(t.endReason,n=>n==="full"||n==="limit")&&(t.mode!=="daily"||t.dailyKey!==void 0)?(Object.isExtensible(t)&&(t.festivals??(t.festivals=0),t.rocksShattered??(t.rocksShattered=0)),!0):!1}const yr=120,Vf="2026-10-13",Wf=3,Xf=4,$f=new Set([27,28,35,36]),Yf=1540483477,qf=200;function Bs(i){return Uf(Vf,i)+1}function Kf(i){return Ff("little-nook/daily/"+i)}function Zf(i,t){const e=qa();let n=(i^Yf)>>>0;const s=()=>{const[a,o]=hc(n);return n=o,a},r=(a,o)=>{for(let l=0;l<qf;l++){const c=a(),u=Math.floor(s()*e.length);if(!(e[u]!==Te||!o(u))){if(e[u]=c,Br(e,u,c).length<$a(c,t))return;e[u]=Te}}};for(let a=0;a<Wf;a++)r(()=>Re,o=>!$f.has(o));for(let a=0;a<Xf;a++)r(()=>s()<.6?0:1,()=>!0);return e}function Zh(i,t=ln){const e=Kf(i),n=fc(e,t),s=Zf(e,t),[r,a]=Ka(s,n.turn,e,t);return{...n,board:s,next:r,rng:a,mode:"daily",dailyKey:i,pieceLimit:yr}}const Jh=20,Qh=60;function Jf(){return{v:1,rounds:0,pieces:0,built:new Array(Gn+1).fill(0),festivals:0,rocksShattered:0,bestClassic:0,bestDaily:0,bestChain:0,biggestMove:0,mostFestivals:0,longestRound:0,recent:[],daily:{lastKey:null,streak:0,bestStreak:0,scores:{}}}}const Kn=i=>typeof i=="number"&&Number.isSafeInteger(i)&&i>=0,Ea=i=>!!i&&typeof i=="object"&&!Array.isArray(i),Qf=i=>i==="classic"||i==="daily";function jf(i){return Ea(i)&&qi(i.date)&&Qf(i.mode)&&Kn(i.score)&&Kn(i.turns)&&Kn(i.top)&&i.top<=Gn&&Kn(i.chain)&&Kn(i.festivals)}function jh(i){if(!Ea(i)||i.v!==1||!["rounds","pieces","festivals","rocksShattered","bestClassic","bestDaily","bestChain","biggestMove","mostFestivals","longestRound"].every(r=>Kn(i[r])))return!1;const e=i.built;if(!Array.isArray(e)||e.length<5||e.length>Gn+1||!e.every(Kn)||e[0]!==0||!Array.isArray(i.recent)||i.recent.length>Jh||!i.recent.every(jf))return!1;const n=i.daily;if(!Ea(n)||!(n.lastKey===null||qi(n.lastKey))||!Kn(n.streak)||!Kn(n.bestStreak)||!Ea(n.scores))return!1;const s=Object.entries(n.scores);if(!(s.length<=Qh&&s.every(([r,a])=>qi(r)&&Kn(a))))return!1;if(e.length<Gn+1&&Object.isExtensible(e))for(;e.length<Gn+1;)e.push(0);return!0}function tp(i,t,e){const n=[...i.built];let{pieces:s,festivals:r,rocksShattered:a}=i;for(const l of t)l.kind==="place"?s++:l.kind==="merge"?n[l.toTier]=(n[l.toTier]??0)+1:l.kind==="festival"?r++:l.kind==="crumble"&&(a+=l.cells.length);const o=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;return{...i,built:n,pieces:s,festivals:r,rocksShattered:a,biggestMove:Math.max(i.biggestMove,o)}}const ep=i=>i.toLocaleString("en-US"),qs=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.floor(i)):0;function td(i,t){const e=i.daily.lastKey;return e!==null&&(e===t||e===$h(t))?i.daily.streak:0}const np=(i,t,e=t+"s")=>`${i} ${i===1?t:e}`,lu=["Best","2nd best","3rd best"];function ip(i){const t=Object.keys(i).sort().reverse().slice(0,Qh),e={};for(const n of t.reverse())e[n]=i[n];return e}function sp(i,t,e){const n=t.mode??"classic",s=qs(t.score),r=qs(t.turn-1),a=qs(t.bestChain),o=qs(t.festivals),l=Math.min(Gn,qs(t.highestTier)),c=e.slice(0,10),h=[{date:qi(c)?c:qi(t.dailyKey)?t.dailyKey:"1970-01-01",mode:n,score:s,turns:r,top:l,chain:a,festivals:o},...i.recent].slice(0,Jh);let d=i.daily;const g=n==="daily"&&qi(t.dailyKey)?t.dailyKey:null;if(g){const v=ip({...d.scores,[g]:Math.max(d.scores[g]??0,s)}),{lastKey:w}=d;if(w!==null&&g<w)d={...d,scores:v};else{const R=w===g?d.streak:w===$h(g)?d.streak+1:1;d={lastKey:g,streak:R,bestStreak:Math.max(d.bestStreak,R),scores:v}}}const M={...i,built:[...i.built],rounds:i.rounds+1,longestRound:Math.max(i.longestRound,r),bestChain:Math.max(i.bestChain,a),mostFestivals:Math.max(i.mostFestivals,o),bestClassic:n==="classic"?Math.max(i.bestClassic,s):i.bestClassic,bestDaily:n==="daily"?Math.max(i.bestDaily,s):i.bestDaily,recent:h,daily:{...d,scores:{...d.scores}}},p=[],m=i.rounds>0,y=Object.keys(i.daily.scores).length>0||i.bestDaily>0,T=n==="daily"&&y&&s>i.bestDaily;T&&p.push(`Best daily yet: ${ep(s)}`),m&&a>=2&&a>i.bestChain&&p.push(`Best chain ever: ×${a}`),m&&o>i.mostFestivals&&p.push(`New record: ${np(o,"festival")} in a round`),m&&r>i.longestRound&&p.push(`New record: longest round (${r} turns)`),g&&d.streak>=2&&d.streak>i.daily.streak&&p.push(`Daily streak: ${d.streak} days`);const x=h.filter(v=>v.mode===n),E=x.slice(1),b=1+E.filter(v=>v.score>s).length,C=E.some(v=>v.score<s);if(x.length>=3&&b<=lu.length&&C&&!T){const v=n==="daily"?"dailies":x.length<h.length?"classic rounds":"rounds";p.push(`${lu[b-1]} of your last ${x.length} ${v}`)}return{journal:M,highlights:p}}function rp(i,t,e=ln){const n=Za(i,t,e),s=n.state.board;let r=n.points*2+Li(s).length*6;const a=s[t];if(a!==Te){Br(s,t,a).length===2&&(r+=18+a*6);const l=Ya(s);for(const c of uc(t,l))s[c]!==Te&&s[c]!==a&&(r-=3);a===Re&&Wh(t,l)&&(r+=10)}return r}const cu="littleNook.best",ap="littleNookBest",uu="littleNook.sound",hu="littleNook.seenHelp",op="littleNook.game",du="littleNook.view",fu="littleNook.roundStartBest",pu="littleNook.music",mu="littleNook.motion",gu="littleNook.journal",go="littleNook.daily",_u="littleNook.haptics",vu="littleNook.coachDone",xu="littleNook.size";function ar(i,t=8){return t===8?i:`${i}.${t}`}const wa=(i=8)=>ar(op,i);function lp(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}class cp{constructor(t=lp()){this.store=t,this.memoBest=new Map,this.memoJournal=null}get(t){try{return this.store?.getItem(t)??null}catch{return null}}set(t,e){try{this.store?.setItem(t,e)}catch{}}getBest(t=8){const e=this.get(ar(cu,t))??(t===8?this.get(ap):null)??0,n=Number(e),s=Number.isFinite(n)&&n>0?Math.floor(n):0,r=Math.max(this.memoBest.get(t)??0,s);return this.memoBest.set(t,r),r}submitScore(t,e=8){const n=Math.floor(t);return n>this.getBest(e)?(this.memoBest.set(e,n),this.set(ar(cu,e),String(n)),!0):!1}getSize(t){const e=Number(this.get(xu));return t(e)?e:8}setSize(t){this.set(xu,String(t))}getSound(){return this.get(uu)!=="off"}setSound(t){this.set(uu,t?"on":"off")}hasSeenHelp(){return this.get(hu)==="1"}markHelpSeen(){this.set(hu,"1")}getRoundStartBest(t=8){const e=this.get(ar(fu,t)),n=Number(e);return e!==null&&e!==""&&Number.isFinite(n)&&n>=0?n:null}setRoundStartBest(t,e=8){this.set(ar(fu,e),String(t))}getMusic(){return this.get(pu)!=="off"}setMusic(t){this.set(pu,t?"on":"off")}getMotion(){const t=this.get(mu);return t==="on"||t==="off"?t:"system"}setMotion(t){this.set(mu,t)}getView(){return this.get(du)}setView(t){this.set(du,t)}saveGame(t,e=8){this.set(wa(e),JSON.stringify(t))}clearGame(t=8){this.set(wa(t),"")}loadGame(t,e=8){return this.load(wa(e),t)}saveDaily(t){this.set(go,JSON.stringify(t))}clearDaily(){this.set(go,"")}loadDaily(t){return this.load(go,t)}getJournal(){return this.memoJournal??this.load(gu,jh)??Jf()}saveJournal(t){this.memoJournal=t,this.set(gu,JSON.stringify(t))}adoptJournal(t){this.memoJournal=t}getHaptics(){return this.get(_u)!=="off"}setHaptics(t){this.set(_u,t?"on":"off")}getCoachDone(){return this.get(vu)==="1"}setCoachDone(){this.set(vu,"1")}load(t,e){const n=this.get(t);if(!n)return null;try{const s=JSON.parse(n);return e(s)?s:null}catch{return null}}}const mc="186",up=0,Mu=1,hp=2,dr=1,dp=2,or=3,Qi=0,hn=1,Fn=2,gi=0,fr=1,Rs=2,Su=3,yu=4,fp=5,Cs=100,pp=101,mp=102,gp=103,_p=104,vp=200,xp=201,Mp=202,Sp=203,ed=204,nd=205,yp=206,bp=207,Ep=208,wp=209,Tp=210,Ap=211,Cp=212,Rp=213,Pp=214,ll=0,cl=1,ul=2,br=3,hl=4,dl=5,fl=6,pl=7,id=0,Lp=1,Dp=2,Qn=0,sd=1,rd=2,ad=3,od=4,ld=5,cd=6,gc=7,ud=300,ji=301,ks=302,_o=303,vo=304,Ja=306,ml=1e3,pi=1001,gl=1002,Xe=1003,Ip=1004,Xr=1005,Je=1006,xo=1007,Vi=1008,_n=1009,hd=1010,dd=1011,Er=1012,_c=1013,ei=1014,Bn=1015,ni=1016,vc=1017,xc=1018,wr=1020,fd=35902,pd=35899,md=1021,gd=1022,kn=1023,xi=1026,Wi=1027,Mc=1028,Sc=1029,ts=1030,yc=1031,bc=1033,Ta=33776,Aa=33777,Ca=33778,Ra=33779,_l=35840,vl=35841,xl=35842,Ml=35843,Sl=36196,yl=37492,bl=37496,El=37488,wl=37489,Ua=37490,Tl=37491,Al=37808,Cl=37809,Rl=37810,Pl=37811,Ll=37812,Dl=37813,Il=37814,Nl=37815,Ul=37816,Fl=37817,Ol=37818,Bl=37819,kl=37820,zl=37821,Gl=36492,Hl=36494,Vl=36495,Wl=36283,Xl=36284,Fa=36285,$l=36286,Np=3200,Yl=0,Up=1,Pi="",Ke="srgb",Oa="srgb-linear",Ba="linear",_e="srgb",Mo=7680,Fp=519,Op=512,Bp=513,kp=514,Ec=515,zp=516,Gp=517,wc=518,Hp=519,_d=35044,bu="300 es",Zn=2e3,Tr=2001;function Vp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wp(){const i=ka("canvas");return i.style.display="block",i}const Eu={};function za(...i){const t="THREE."+i.shift();console.log(t,...i)}function vd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=vd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=vd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ds(...i){const t=i.join(" ");t in Eu||(Eu[t]=!0,Xt(...i))}function Xp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $p={[ll]:cl,[ul]:fl,[hl]:pl,[br]:dl,[cl]:ll,[fl]:ul,[pl]:hl,[dl]:br};class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const pr=Math.PI/180,Ar=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Tc(i,t){return(i%t+t)%t}function Yp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qp(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function Kp(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function Zp(i,t=1){return t-Math.abs(Tc(i,t*2)-t)}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tm(i,t){return i+Math.random()*(t-i)}function em(i){return i*(.5-Math.random())}function nm(i){i!==void 0&&(wu=i);let t=wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function im(i){return i*pr}function sm(i){return i*Ar}function rm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function om(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lm(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const cm={DEG2RAD:pr,RAD2DEG:Ar,generateUUID:jn,clamp:te,euclideanModulo:Tc,mapLinear:Yp,inverseLerp:qp,lerp:mr,damp:Kp,pingpong:Zp,smoothstep:Jp,smootherstep:Qp,randInt:jp,randFloat:tm,randFloatSpread:em,seededRandom:nm,degToRad:im,radToDeg:sm,isPowerOfTwo:rm,ceilPowerOfTwo:am,floorPowerOfTwo:om,setQuaternionFromProperEuler:lm,normalize:ve,denormalize:On},Vc=class Vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;let ut=Vc;class Si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==d||u!==g){let p=l*h+c*d+u*g+f*M;p<0&&(h=-h,d=-d,g=-g,M=-M,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T,l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+M*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+M*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wc=class Wc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wc.prototype.isVector3=!0;let P=Wc;const So=new P,Tu=new Si,Xc=class Xc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],M=s[0],p=s[3],m=s[6],y=s[1],T=s[4],x=s[7],E=s[2],b=s[5],C=s[8];return r[0]=a*M+o*y+l*E,r[3]=a*p+o*T+l*b,r[6]=a*m+o*x+l*C,r[1]=c*M+u*y+f*E,r[4]=c*p+u*T+f*b,r[7]=c*m+u*x+f*C,r[2]=h*M+d*y+g*E,r[5]=h*p+d*T+g*b,r[8]=h*m+d*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=f*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yo.makeScale(t,e)),this}rotate(t){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xc.prototype.isMatrix3=!0;let Kt=Xc;const yo=new Kt,Au=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function um(){const i={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oa]:{primaries:t,whitePoint:n,transfer:Ba,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const re=um();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ls;class hm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ls===void 0&&(ls=ka("canvas")),ls.width=t.width,ls.height=t.height;const s=ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ka("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dm=0;class Ac{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bo(s[a].image)):r.push(bo(s[a]))}else r=bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let fm=0;const Eo=new P;class Qe extends is{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=pi,s=pi,r=Je,a=Vi,o=kn,l=_n,c=Qe.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=jn(),this.name="",this.source=new Ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ml:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ml:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=ud;Qe.DEFAULT_ANISOTROPY=1;const $c=class $c{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,x=(d+1)/2,E=(m+1)/2,b=(u+h)/4,C=(f+M)/4,v=(g+p)/4;return T>x&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=C/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-M)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$c.prototype.isVector4=!0;let Pe=$c;class pm extends is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ac(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends pm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xd extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mm extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Xa=class Xa{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,M,p)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,M,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,d=a*f,g=o*u,M=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,M=c*f;e[0]=h+M*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,M=c*f;e[0]=h-M*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,g=o*u,M=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+M,e[1]=l*f,e[5]=M*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=M-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-M*f}else if(t.order==="XZY"){const h=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+M,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gm,t,_m)}lookAt(t,e,n){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),wi.crossVectors(n,fn),wi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),wi.crossVectors(n,fn)),wi.normalize(),$r.crossVectors(fn,wi),s[0]=wi.x,s[4]=$r.x,s[8]=fn.x,s[1]=wi.y,s[5]=$r.y,s[9]=fn.y,s[2]=wi.z,s[6]=$r.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],M=n[6],p=n[10],m=n[14],y=n[3],T=n[7],x=n[11],E=n[15],b=s[0],C=s[4],v=s[8],w=s[12],R=s[1],D=s[5],F=s[9],V=s[13],N=s[2],k=s[6],Y=s[10],$=s[14],ot=s[3],q=s[7],et=s[11],st=s[15];return r[0]=a*b+o*R+l*N+c*ot,r[4]=a*C+o*D+l*k+c*q,r[8]=a*v+o*F+l*Y+c*et,r[12]=a*w+o*V+l*$+c*st,r[1]=u*b+f*R+h*N+d*ot,r[5]=u*C+f*D+h*k+d*q,r[9]=u*v+f*F+h*Y+d*et,r[13]=u*w+f*V+h*$+d*st,r[2]=g*b+M*R+p*N+m*ot,r[6]=g*C+M*D+p*k+m*q,r[10]=g*v+M*F+p*Y+m*et,r[14]=g*w+M*V+p*$+m*st,r[3]=y*b+T*R+x*N+E*ot,r[7]=y*C+T*D+x*k+E*q,r[11]=y*v+T*F+x*Y+E*et,r[15]=y*w+T*V+x*$+E*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],M=t[7],p=t[11],m=t[15],y=l*d-c*h,T=o*d-c*f,x=o*h-l*f,E=a*d-c*u,b=a*h-l*u,C=a*f-o*u;return e*(M*y-p*T+m*x)-n*(g*y-p*E+m*b)+s*(g*T-M*E+m*C)-r*(g*x-M*b+p*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],M=t[13],p=t[14],m=t[15],y=e*o-n*a,T=e*l-s*a,x=e*c-r*a,E=n*l-s*o,b=n*c-r*o,C=s*c-r*l,v=u*M-f*g,w=u*p-h*g,R=u*m-d*g,D=f*p-h*M,F=f*m-d*M,V=h*m-d*p,N=y*V-T*F+x*D+E*R-b*w+C*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return t[0]=(o*V-l*F+c*D)*k,t[1]=(s*F-n*V-r*D)*k,t[2]=(M*C-p*b+m*E)*k,t[3]=(h*b-f*C-d*E)*k,t[4]=(l*R-a*V-c*w)*k,t[5]=(e*V-s*R+r*w)*k,t[6]=(p*x-g*C-m*T)*k,t[7]=(u*C-h*x+d*T)*k,t[8]=(a*F-o*R+c*v)*k,t[9]=(n*R-e*F-r*v)*k,t[10]=(g*b-M*x+m*y)*k,t[11]=(f*x-u*b-d*y)*k,t[12]=(o*w-a*D-l*v)*k,t[13]=(e*D-n*w+s*v)*k,t[14]=(M*T-g*E-p*y)*k,t[15]=(u*E-f*T+h*y)*k,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,M=a*u,p=a*f,m=o*f,y=l*c,T=l*u,x=l*f,E=n.x,b=n.y,C=n.z;return s[0]=(1-(M+m))*E,s[1]=(d+x)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(h+m))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(g+T)*C,s[9]=(p-y)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);const c=1/a,u=1/o,f=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Zn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Tr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Zn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Zn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Tr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Xa.prototype.isMatrix4=!0;let le=Xa;const cs=new P,Dn=new le,gm=new P(0,0,0),_m=new P(1,1,1),wi=new P,$r=new P,fn=new P,Ru=new le,Pu=new Si;class ii{constructor(t=0,e=0,n=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Cc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vm=0;const Lu=new P,us=new Si,ai=new le,Yr=new P,Ks=new P,xm=new P,Mm=new Si,Du=new P(1,0,0),Iu=new P(0,1,0),Nu=new P(0,0,1),Uu={type:"added"},Sm={type:"removed"},hs={type:"childadded",child:null},wo={type:"childremoved",child:null};class Ge extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new P,e=new ii,n=new Si,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Du,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Du,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ks,Yr,this.up):ai.lookAt(Yr,Ks,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ai),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uu),hs.child=t,this.dispatchEvent(hs),hs.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sm),wo.child=t,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uu),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new P(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jn extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Tc(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ao(a,r,t+1/3),this.g=Ao(a,r,t),this.b=Ao(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return re.workingToColorSpace(qe.copy(this),t),Math.round(te(qe.r*255,0,255))*65536+Math.round(te(qe.g*255,0,255))*256+Math.round(te(qe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ke){re.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(qr);const n=mr(Ti.h,qr.h,e),s=mr(Ti.s,qr.s,e),r=mr(Ti.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new kt;kt.NAMES=Md;class Fu extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const In=new P,oi=new P,Co=new P,li=new P,ds=new P,fs=new P,Ou=new P,Ro=new P,Po=new P,Lo=new P,Do=new Pe,Io=new Pe,No=new Pe;class wn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),oi.subVectors(n,e),Co.subVectors(t,e);const a=In.dot(In),o=In.dot(oi),l=In.dot(Co),c=oi.dot(oi),u=oi.dot(Co),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Do.setScalar(0),Io.setScalar(0),No.setScalar(0),Do.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(Io,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),oi.subVectors(t,e),In.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),In.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ds.subVectors(s,n),fs.subVectors(r,n),Ro.subVectors(t,n);const l=ds.dot(Ro),c=fs.dot(Ro);if(l<=0&&c<=0)return e.copy(n);Po.subVectors(t,s);const u=ds.dot(Po),f=fs.dot(Po);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ds,a);Lo.subVectors(t,r);const d=ds.dot(Lo),g=fs.dot(Lo);if(g>=0&&d<=g)return e.copy(r);const M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(fs,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Ou.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Ou,o);const m=1/(p+M+h);return a=M*m,o=h*m,e.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Di{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Zr.subVectors(this.max,Zs),ps.subVectors(t.a,Zs),ms.subVectors(t.b,Zs),gs.subVectors(t.c,Zs),Ai.subVectors(ms,ps),Ci.subVectors(gs,ms),Ui.subVectors(ps,gs);let e=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Ui.z,Ui.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Ui.z,0,-Ui.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Ui.y,Ui.x,0];return!Uo(e,ps,ms,gs,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,ps,ms,gs,Zr))?!1:(Jr.crossVectors(Ai,Ci),e=[Jr.x,Jr.y,Jr.z],Uo(e,ps,ms,gs,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ci=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,Kr=new Di,ps=new P,ms=new P,gs=new P,Ai=new P,Ci=new P,Ui=new P,Zs=new P,Zr=new P,Jr=new P,Fi=new P;function Uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);const o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ne=new P,Qr=new ut;let bm=0;class sn extends is{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_d,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Sd extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yd extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Em=new Di,Js=new P,Fo=new P;class kr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Em.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Fo)),this.expandByPoint(Js.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wm=0;const yn=new le,Oo=new Ge,_s=new P,pn=new Di,Qs=new Di,ze=new P;class Ve extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?yd:Sd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ee(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(pn.min,Qs.min),pn.expandByPoint(ze),ze.addVectors(pn.max,Qs.max),pn.expandByPoint(ze)):(pn.expandByPoint(Qs.min),pn.expandByPoint(Qs.max))}pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ze.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(t,c),ze.add(_s)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;const c=new P,u=new P,f=new P,h=new ut,d=new ut,g=new ut,M=new P,p=new P;function m(v,w,R){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[v].add(M),o[w].add(M),o[R].add(M),l[v].add(p),l[w].add(p),l[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,w=y.length;v<w;++v){const R=y[v],D=R.start,F=R.count;for(let V=D,N=D+F;V<N;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new P,x=new P,E=new P,b=new P;function C(v){E.fromBufferAttribute(s,v),b.copy(E);const w=o[v];T.copy(w),T.sub(E.multiplyScalar(E.dot(w))).normalize(),x.crossVectors(b,w);const D=x.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,w=y.length;v<w;++v){const R=y[v],D=R.start,F=R.count;for(let V=D,N=D+F;V<N;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,f=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),M=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new sn(h,u,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_d,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const tn=new P;class Ga{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ga(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bo=new P,Am=new P,Cm=new Kt;class hi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bo.subVectors(n,e).cross(Am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Bo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cm.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Rm=0;class ss extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=fr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=nd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bd extends ss{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const js=new P,xs=new P,Ms=new P,Ss=new ut,tr=new ut,Ed=new le,jr=new P,er=new P,ta=new P,Bu=new ut,ko=new ut,ku=new ut;class Pm extends Ge{constructor(t=new bd){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tm(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Ga(n,3,0,!1)),vs.setAttribute("uv",new Ga(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Ed.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-Ms.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ea(jr.set(-.5,-.5,0),Ms,a,xs,s,r),ea(er.set(.5,-.5,0),Ms,a,xs,s,r),ea(ta.set(.5,.5,0),Ms,a,xs,s,r),Bu.set(0,0),ko.set(1,0),ku.set(1,1);let o=t.ray.intersectTriangle(jr,er,ta,!1,js);if(o===null&&(ea(er.set(-.5,.5,0),Ms,a,xs,s,r),ko.set(0,1),o=t.ray.intersectTriangle(jr,ta,er,!1,js),o===null))return;const l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:wn.getInterpolation(js,jr,er,ta,Bu,ko,ku,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ea(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*Ss.x-s*Ss.y,tr.y=s*Ss.x+r*Ss.y):tr.copy(Ss),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(Ed)}const ui=new P,zo=new P,na=new P,ia=new P;class wd{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zo.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ia.copy(this.origin).sub(zo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(na),o=ia.dot(this.direction),l=-ia.dot(na),c=ia.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zo).addScaledVector(na,h),d}intersectSphere(t,e){if(t.radius<0)return null;ui.subVectors(t.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,M=e.y-a.y,p=e.z-a.z,m=n.x-a.x,y=n.y-a.y,T=n.z-a.z,x=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let C,v,w,R,D,F,V,N,k,Y,$,ot;if(x>=E&&x>=b?(w=l,F=f,k=g,ot=m,l>=0?(C=c,v=u,R=h,D=d,V=M,N=p,Y=y,$=T):(C=u,v=c,R=d,D=h,V=p,N=M,Y=T,$=y)):E>=b?(w=c,F=h,k=M,ot=y,c>=0?(C=u,v=l,R=d,D=f,V=p,N=g,Y=T,$=m):(C=l,v=u,R=f,D=d,V=g,N=p,Y=m,$=T)):(w=u,F=d,k=p,ot=T,u>=0?(C=l,v=c,R=f,D=h,V=g,N=M,Y=m,$=y):(C=c,v=l,R=h,D=f,V=M,N=g,Y=y,$=m)),w===0)return null;const q=C/w,et=v/w,st=1/w,Nt=R-q*F,Ct=D-et*F,ce=V-q*k,ee=N-et*k,ae=Y-q*ot,J=$-et*ot,nt=ae*ee-J*ce,St=Nt*J-Ct*ae,Ht=ce*Ct-ee*Nt;if(s){if(nt<0||St<0||Ht<0)return null}else if((nt<0||St<0||Ht<0)&&(nt>0||St>0||Ht>0))return null;const wt=nt+St+Ht;if(wt===0)return null;const Vt=st*(nt*F+St*k+Ht*ot);return(wt>0?Vt<0:Vt>0)?null:this.at(Vt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fi extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zu=new le,Oi=new wd,sa=new kr,Gu=new P,ra=new P,aa=new P,oa=new P,Go=new P,la=new P,Hu=new P,ca=new P;class Ae extends Ge{constructor(t=new Ve,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Go.fromBufferAttribute(f,t),a?la.addScaledVector(Go,u):la.addScaledVector(Go.sub(e),u))}e.add(la)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(sa.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(sa,Gu)===null||Oi.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(zu.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(zu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),T=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,E=T;x<E;x+=3){const b=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=ua(this,m,t,n,c,u,f,b,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const y=o.getX(p),T=o.getX(p+1),x=o.getX(p+2);s=ua(this,a,t,n,c,u,f,y,T,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),T=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,E=T;x<E;x+=3){const b=x,C=x+1,v=x+2;s=ua(this,m,t,n,c,u,f,b,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const y=p,T=p+1,x=p+2;s=ua(this,a,t,n,c,u,f,y,T,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Lm(i,t,e,n,s,r,a,o){let l;if(t.side===hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Qi,o),l===null)return null;ca.copy(o),ca.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:i}}function ua(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ra),i.getVertexPosition(l,aa),i.getVertexPosition(c,oa);const u=Lm(i,t,e,n,ra,aa,oa,Hu);if(u){const f=new P;wn.getBarycoord(Hu,ra,aa,oa,f),s&&(u.uv=wn.getInterpolatedAttribute(s,o,l,c,f,new ut)),r&&(u.uv1=wn.getInterpolatedAttribute(r,o,l,c,f,new ut)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,l,c,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};wn.getNormal(ra,aa,oa,h.normal),u.face=h,u.barycoord=f}return u}class Td extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Xe,u=Xe,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vu extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ys=new le,Wu=new le,ha=[],Xu=new Di,Dm=new le,nr=new Ae,ir=new kr;class $u extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),Xu.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(Xu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),ir.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),Wu.multiplyMatrices(n,ys),nr.matrixWorld=Wu,nr.raycast(t,ha);for(let a=0,o=ha.length;a<o;a++){const l=ha[a];l.instanceId=r,l.object=this,e.push(l)}ha.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Td(new Float32Array(s*this.count),s,this.count,Mc,Bn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bi=new kr,Im=new ut(.5,.5),da=new P;class Rc{constructor(t=new hi,e=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],M=r[9],p=r[10],m=r[11],y=r[12],T=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-a,d-u,m-g,E-y).normalize(),s[1].setComponents(c+a,d+u,m+g,E+y).normalize(),s[2].setComponents(c+o,d+f,m+M,E+T).normalize(),s[3].setComponents(c-o,d-f,m-M,E-T).normalize(),n)s[4].setComponents(l,h,p,x).normalize(),s[5].setComponents(c-l,d-h,m-p,E-x).normalize();else if(s[4].setComponents(c-l,d-h,m-p,E-x).normalize(),e===Zn)s[5].setComponents(c+l,d+h,m+p,E+x).normalize();else if(e===Tr)s[5].setComponents(l,h,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);const e=Im.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ad extends Qe{constructor(t=[],e=ji,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qa extends Qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends Qe{constructor(t,e,n=ei,s,r,a,o=Xe,l=Xe,c,u=xi,f=1){if(u!==xi&&u!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Nm extends Cr{constructor(t,e=ei,n=ji,s,r,a=Xe,o=Xe,l,c=xi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Cd extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hn extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(f,2));function g(M,p,m,y,T,x,E,b,C,v,w){const R=x/C,D=E/v,F=x/2,V=E/2,N=b/2,k=C+1,Y=v+1;let $=0,ot=0;const q=new P;for(let et=0;et<Y;et++){const st=et*D-V;for(let Nt=0;Nt<k;Nt++){const Ct=Nt*R-F;q[M]=Ct*y,q[p]=st*T,q[m]=N,c.push(q.x,q.y,q.z),q[M]=0,q[p]=0,q[m]=b>0?1:-1,u.push(q.x,q.y,q.z),f.push(Nt/C),f.push(1-et/v),$+=1}}for(let et=0;et<v;et++)for(let st=0;st<C;st++){const Nt=h+st+k*et,Ct=h+st+k*(et+1),ce=h+(st+1)+k*(et+1),ee=h+(st+1)+k*et;l.push(Nt,Ct,ee),l.push(Ct,ce,ee),ot+=6}o.addGroup(d,ot,w),d+=ot,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $s extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const M=[],p=n/2;let m=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2));function y(){const x=new P,E=new P;let b=0;const C=(e-t)/n;for(let v=0;v<=r;v++){const w=[],R=v/r,D=R*(e-t)+t;for(let F=0;F<=s;F++){const V=F/s,N=V*l+o,k=Math.sin(N),Y=Math.cos(N);E.x=D*k,E.y=-R*n+p,E.z=D*Y,f.push(E.x,E.y,E.z),x.set(k,C,Y).normalize(),h.push(x.x,x.y,x.z),d.push(V,1-R),w.push(g++)}M.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const R=M[w][v],D=M[w+1][v],F=M[w+1][v+1],V=M[w][v+1];(t>0||w!==0)&&(u.push(R,D,V),b+=3),(e>0||w!==r-1)&&(u.push(D,F,V),b+=3)}c.addGroup(m,b,0),m+=b}function T(x){const E=g,b=new ut,C=new P;let v=0;const w=x===!0?t:e,R=x===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,p*R,0),h.push(0,R,0),d.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const N=F/s*l+o,k=Math.cos(N),Y=Math.sin(N);C.x=w*Y,C.y=p*R,C.z=w*k,f.push(C.x,C.y,C.z),h.push(0,R,0),b.x=k*.5+.5,b.y=Y*.5*R+.5,d.push(b.x,b.y),g++}for(let F=0;F<s;F++){const V=E+F,N=D+F;x===!0?u.push(N,N+1,V):u.push(N+1,N,V),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rr extends $s{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Rr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zr extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new P,x=new P,E=new P;for(let b=0;b<e.length;b+=3)d(e[b+0],T),d(e[b+1],x),d(e[b+2],E),l(T,x,E,y)}function l(y,T,x,E){const b=E+1,C=[];for(let v=0;v<=b;v++){C[v]=[];const w=y.clone().lerp(x,v/b),R=T.clone().lerp(x,v/b),D=b-v;for(let F=0;F<=D;F++)F===0&&v===b?C[v][F]=w:C[v][F]=w.clone().lerp(R,F/D)}for(let v=0;v<b;v++)for(let w=0;w<2*(b-v)-1;w++){const R=Math.floor(w/2);w%2===0?(h(C[v][R+1]),h(C[v+1][R]),h(C[v][R])):(h(C[v][R+1]),h(C[v+1][R+1]),h(C[v+1][R]))}}function c(y){const T=new P;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(y),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function u(){const y=new P;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const x=p(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;a.push(x,1-E)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const T=a[y+0],x=a[y+2],E=a[y+4],b=Math.max(T,x,E),C=Math.min(T,x,E);b>.9&&C<.1&&(T<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,T){const x=y*3;T.x=t[x+0],T.y=t[x+1],T.z=t[x+2]}function g(){const y=new P,T=new P,x=new P,E=new P,b=new ut,C=new ut,v=new ut;for(let w=0,R=0;w<r.length;w+=9,R+=6){y.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),E.copy(y).add(T).add(x).divideScalar(3);const D=p(E);M(b,R+0,y,D),M(C,R+2,T,D),M(v,R+4,x,D)}}function M(y,T,x,E){E<0&&y.x===1&&(a[T]=y.x-1),x.x===0&&x.z===0&&(a[T]=E/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.vertices,t.indices,t.radius,t.detail)}}class Pc extends zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pc(t.radius,t.detail)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(te(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lc extends ri{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Um extends Lc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Yu=new P,qu=new P,Ho=new Dc,Vo=new Dc,Wo=new Dc;class Fm extends ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(qu.subVectors(s[0],s[1]).add(s[0]),c=qu);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),Ho.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,M,p),Vo.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,M,p),Wo.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,M,p)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Vo.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Wo.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ho.calc(l),Vo.calc(l),Wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ku(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Om(i,t){const e=1-i;return e*e*t}function Bm(i,t){return 2*(1-i)*i*t}function km(i,t){return i*i*t}function gr(i,t,e,n){return Om(i,t)+Bm(i,e)+km(i,n)}function zm(i,t){const e=1-i;return e*e*e*t}function Gm(i,t){const e=1-i;return 3*e*e*i*t}function Hm(i,t){return 3*(1-i)*i*i*t}function Vm(i,t){return i*i*i*t}function _r(i,t,e,n,s){return zm(i,t)+Gm(i,e)+Hm(i,n)+Vm(i,s)}class Rd extends ri{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wm extends ri{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y),_r(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pd extends ri{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xm extends ri{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ld extends ri{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $m extends ri{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y),gr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ku(o,l.x,c.x,u.x,f.x),Ku(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var ql=Object.freeze({__proto__:null,ArcCurve:Um,CatmullRomCurve3:Fm,CubicBezierCurve:Rd,CubicBezierCurve3:Wm,EllipseCurve:Lc,LineCurve:Pd,LineCurve3:Xm,QuadraticBezierCurve:Ld,QuadraticBezierCurve3:$m,SplineCurve:Dd});class Ym extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ql[s.type]().fromJSON(s))}return this}}class Zu extends Ym{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pd(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ld(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Rd(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Lc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gr extends Zu{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Zu().fromJSON(s))}return this}}function qm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Id(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){const d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Pr(r,a,e,o,l,c,0),a}function Id(i,t,e,n,s){let r;if(s===u0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ju(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ju(a/n|0,i[a],i[a+1],r);return r&&zs(r,r.next)&&(Dr(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||Le(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&s0(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Zm(i,n,s,r):Km(i)){t.push(l.i,i.i,c.i),Dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jm(es(i),t),Pr(i,t,e,n,s,r,2)):a===2&&Qm(i,t,e,n,s,r):Pr(es(i),t,e,n,s,r,1);break}}}function Km(i){const t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&lr(s,o,r,l,a,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zm(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Le(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,f,h),M=Math.max(o,l,c),p=Math.max(u,f,h),m=Kl(d,g,t,e,n),y=Kl(M,p,t,e,n);let T=i.prevZ,x=i.nextZ;for(;T&&T.z>=m&&x&&x.z<=y;){if(T.x>=d&&T.x<=M&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&lr(o,u,l,f,c,h,T.x,T.y)&&Le(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=d&&x.x<=M&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&lr(o,u,l,f,c,h,x.x,x.y)&&Le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=m;){if(T.x>=d&&T.x<=M&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&lr(o,u,l,f,c,h,T.x,T.y)&&Le(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=M&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&lr(o,u,l,f,c,h,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!zs(n,s)&&Ud(n,e,e.next,s)&&Lr(n,s)&&Lr(s,n)&&(t.push(n.i,e.i,s.i),Dr(e),Dr(e.next),e=i=s),e=e.next}while(e!==i);return es(e)}function Qm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o0(a,o)){let l=Fd(a,o);a=es(a,a.next),l=es(l,l.next),Pr(a,t,e,n,s,r,0),Pr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jm(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Id(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(a0(c))}s.sort(t0);for(let r=0;r<s.length;r++)e=e0(s[r],e);return e}function t0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function e0(i,t){const e=n0(i,t);if(!e)return t;const n=Fd(e,i);return es(n,n.next),es(e,e.next)}function n0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(zs(i,e))return e;do{if(zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Nd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Lr(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&i0(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function i0(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function s0(i,t,e,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,r0(s)}function r0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function a0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Nd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function lr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Nd(i,t,e,n,s,r,a,o)}function o0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!l0(i,t)&&(Lr(i,t)&&Lr(t,i)&&c0(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||zs(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zs(i,t){return i.x===t.x&&i.y===t.y}function Ud(i,t,e,n){const s=pa(Le(i,t,e)),r=pa(Le(i,t,n)),a=pa(Le(e,n,i)),o=pa(Le(e,n,t));return!!(s!==r&&a!==o||s===0&&fa(i,e,t)||r===0&&fa(i,n,t)||a===0&&fa(e,i,n)||o===0&&fa(e,t,n))}function fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pa(i){return i>0?1:i<0?-1:0}function l0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ud(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function c0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fd(i,t){const e=Zl(i.i,i.x,i.y),n=Zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(i,t,e,n){const s=Zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class h0{static triangulate(t,e,n=2){return qm(t,e,n)}}class mi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return mi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Qu(t),ju(n,t);let a=t.length;e.forEach(Qu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ju(n,e[l]);const o=h0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Qu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ju(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ic extends Ve{constructor(t=new Gr([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:d0;let T,x=!1,E,b,C,v;if(m){T=m.getSpacedPoints(u),x=!0,h=!1;const it=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(u,it),b=new P,C=new P,v=new P}h||(p=0,d=0,g=0,M=0);const w=o.extractPoints(c);let R=w.shape;const D=w.holes;if(!mi.isClockWise(R)){R=R.reverse();for(let it=0,lt=D.length;it<lt;it++){const ct=D[it];mi.isClockWise(ct)&&(D[it]=ct.reverse())}}function V(it){const ct=10000000000000001e-36;let ht=it[0];for(let pt=1;pt<=it.length;pt++){const zt=pt%it.length,Bt=it[zt],Wt=Bt.x-ht.x,qt=Bt.y-ht.y,L=Wt*Wt+qt*qt,de=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ht.x),Math.abs(ht.y)),ne=ct*de*de;if(L<=ne){it.splice(zt,1),pt--;continue}ht=Bt}}V(R),D.forEach(V);const N=D.length,k=R;for(let it=0;it<N;it++){const lt=D[it];R=R.concat(lt)}function Y(it,lt,ct){return lt||se("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(lt,ct)}const $=R.length;function ot(it,lt,ct){let ht,pt,zt;const Bt=it.x-lt.x,Wt=it.y-lt.y,qt=ct.x-it.x,L=ct.y-it.y,de=Bt*Bt+Wt*Wt,ne=Bt*L-Wt*qt;if(Math.abs(ne)>Number.EPSILON){const A=Math.sqrt(de),_=Math.sqrt(qt*qt+L*L),B=lt.x-Wt/A,H=lt.y+Bt/A,K=ct.x-L/_,dt=ct.y+qt/_,ft=((K-B)*L-(dt-H)*qt)/(Bt*L-Wt*qt);ht=B+Bt*ft-it.x,pt=H+Wt*ft-it.y;const Z=ht*ht+pt*pt;if(Z<=2)return new ut(ht,pt);zt=Math.sqrt(Z/2)}else{let A=!1;Bt>Number.EPSILON?qt>Number.EPSILON&&(A=!0):Bt<-Number.EPSILON?qt<-Number.EPSILON&&(A=!0):Math.sign(Wt)===Math.sign(L)&&(A=!0),A?(ht=-Wt,pt=Bt,zt=Math.sqrt(de)):(ht=Bt,pt=Wt,zt=Math.sqrt(de/2))}return new ut(ht/zt,pt/zt)}const q=[];for(let it=0,lt=k.length,ct=lt-1,ht=it+1;it<lt;it++,ct++,ht++)ct===lt&&(ct=0),ht===lt&&(ht=0),q[it]=ot(k[it],k[ct],k[ht]);const et=[];let st,Nt=q.concat();for(let it=0,lt=N;it<lt;it++){const ct=D[it];st=[];for(let ht=0,pt=ct.length,zt=pt-1,Bt=ht+1;ht<pt;ht++,zt++,Bt++)zt===pt&&(zt=0),Bt===pt&&(Bt=0),st[ht]=ot(ct[ht],ct[zt],ct[Bt]);et.push(st),Nt=Nt.concat(st)}let Ct;if(p===0)Ct=mi.triangulateShape(k,D);else{const it=[],lt=[];for(let ct=0;ct<p;ct++){const ht=ct/p,pt=d*Math.cos(ht*Math.PI/2),zt=g*Math.sin(ht*Math.PI/2)+M;for(let Bt=0,Wt=k.length;Bt<Wt;Bt++){const qt=Y(k[Bt],q[Bt],zt);St(qt.x,qt.y,-pt),ht===0&&it.push(qt)}for(let Bt=0,Wt=N;Bt<Wt;Bt++){const qt=D[Bt];st=et[Bt];const L=[];for(let de=0,ne=qt.length;de<ne;de++){const A=Y(qt[de],st[de],zt);St(A.x,A.y,-pt),ht===0&&L.push(A)}ht===0&&lt.push(L)}}Ct=mi.triangulateShape(it,lt)}const ce=Ct.length,ee=g+M;for(let it=0;it<$;it++){const lt=h?Y(R[it],Nt[it],ee):R[it];x?(C.copy(E.normals[0]).multiplyScalar(lt.x),b.copy(E.binormals[0]).multiplyScalar(lt.y),v.copy(T[0]).add(C).add(b),St(v.x,v.y,v.z)):St(lt.x,lt.y,0)}for(let it=1;it<=u;it++)for(let lt=0;lt<$;lt++){const ct=h?Y(R[lt],Nt[lt],ee):R[lt];x?(C.copy(E.normals[it]).multiplyScalar(ct.x),b.copy(E.binormals[it]).multiplyScalar(ct.y),v.copy(T[it]).add(C).add(b),St(v.x,v.y,v.z)):St(ct.x,ct.y,f/u*it)}for(let it=p-1;it>=0;it--){const lt=it/p,ct=d*Math.cos(lt*Math.PI/2),ht=g*Math.sin(lt*Math.PI/2)+M;for(let pt=0,zt=k.length;pt<zt;pt++){const Bt=Y(k[pt],q[pt],ht);St(Bt.x,Bt.y,f+ct)}for(let pt=0,zt=D.length;pt<zt;pt++){const Bt=D[pt];st=et[pt];for(let Wt=0,qt=Bt.length;Wt<qt;Wt++){const L=Y(Bt[Wt],st[Wt],ht);x?St(L.x,L.y+T[u-1].y,T[u-1].x+ct):St(L.x,L.y,f+ct)}}}ae(),J();function ae(){const it=s.length/3;if(h){let lt=0,ct=$*lt;for(let ht=0;ht<ce;ht++){const pt=Ct[ht];Ht(pt[2]+ct,pt[1]+ct,pt[0]+ct)}lt=u+p*2,ct=$*lt;for(let ht=0;ht<ce;ht++){const pt=Ct[ht];Ht(pt[0]+ct,pt[1]+ct,pt[2]+ct)}}else{for(let lt=0;lt<ce;lt++){const ct=Ct[lt];Ht(ct[2],ct[1],ct[0])}for(let lt=0;lt<ce;lt++){const ct=Ct[lt];Ht(ct[0]+$*u,ct[1]+$*u,ct[2]+$*u)}}n.addGroup(it,s.length/3-it,0)}function J(){const it=s.length/3;let lt=0;nt(k,lt),lt+=k.length;for(let ct=0,ht=D.length;ct<ht;ct++){const pt=D[ct];nt(pt,lt),lt+=pt.length}n.addGroup(it,s.length/3-it,1)}function nt(it,lt){let ct=it.length;for(;--ct>=0;){const ht=ct;let pt=ct-1;pt<0&&(pt=it.length-1);for(let zt=0,Bt=u+p*2;zt<Bt;zt++){const Wt=$*zt,qt=$*(zt+1),L=lt+ht+Wt,de=lt+pt+Wt,ne=lt+pt+qt,A=lt+ht+qt;wt(L,de,ne,A)}}}function St(it,lt,ct){l.push(it),l.push(lt),l.push(ct)}function Ht(it,lt,ct){Vt(it),Vt(lt),Vt(ct);const ht=s.length/3,pt=y.generateTopUV(n,s,ht-3,ht-2,ht-1);ge(pt[0]),ge(pt[1]),ge(pt[2])}function wt(it,lt,ct,ht){Vt(it),Vt(lt),Vt(ht),Vt(lt),Vt(ct),Vt(ht);const pt=s.length/3,zt=y.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);ge(zt[0]),ge(zt[1]),ge(zt[3]),ge(zt[1]),ge(zt[2]),ge(zt[3])}function Vt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function ge(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return f0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ql[s.type]().fromJSON(s)),new Ic(n,t.options)}}const d0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ut(r,a),new ut(o,l),new ut(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-f),new ut(h,1-g),new ut(M,1-m)]:[new ut(o,1-l),new ut(u,1-f),new ut(d,1-g),new ut(p,1-m)]}};function f0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Nc extends zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nc(t.radius,t.detail)}}class ns extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],M=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let T=0;T<c;T++){const x=T*f-r;g.push(x,-y,0),M.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const T=y+c*m,x=y+c*(m+1),E=y+1+c*(m+1),b=y+1+c*m;d.push(T,x,b),d.push(x,E,b)}this.setIndex(d),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(M,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.width,t.height,t.widthSegments,t.heightSegments)}}class vr extends Ve{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new P,g=new ut;for(let M=0;M<=s;M++){for(let p=0;p<=n;p++){const m=r+p/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let M=0;M<s;M++){const p=M*(n+1);for(let m=0;m<n;m++){const y=m+p,T=y,x=y+n+1,E=y+n+2,b=y+1;o.push(T,x,b),o.push(x,E,b)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ja extends Ve{constructor(t=new Gr([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(a,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const g=h.holes;mi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];mi.isClockWise(y)===!0&&(g[p]=y.reverse())}const M=mi.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];d=d.concat(y)}for(let p=0,m=d.length;p<m;p++){const y=d[p];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,m=M.length;p<m;p++){const y=M[p],T=y[0]+f,x=y[1]+f,E=y[2]+f;n.push(T,x,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return p0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new ja(n,t.curveSegments)}}function p0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class to extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new P,h=new P,d=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){const y=[],T=m/n,x=a+T*o,E=t*Math.cos(x),b=Math.sqrt(t*t-E*E);let C=0;m===0&&a===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){const w=v/e,R=s+w*r;f.x=-b*Math.cos(R),f.y=E,f.z=b*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),p.push(w+C,1-T),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const T=u[m][y+1],x=u[m][y],E=u[m+1][y],b=u[m+1][y+1];(m!==0||a>0)&&d.push(T,x,b),(m!==n-1||l<Math.PI)&&d.push(x,E,b)}this.setIndex(d),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(M,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uc extends zr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Uc(t.radius,t.detail)}}class m0 extends ss{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new kt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Gs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(th(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(th(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=Gs(i[e]);for(const s in n)t[s]=n[s]}return t}function th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function g0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Od(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const _0={clone:Gs,merge:en};var v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=g0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class M0 extends si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ir extends ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class S0 extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class y0 extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bd extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class eh extends Bd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Xo=new le,nh=new P,ih=new P;class b0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Tr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ma=new P,ga=new Si,$n=new P;class kd extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ma,ga,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ma,ga,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new P,sh=new ut,rh=new ut;class En extends kd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Nr extends kd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class E0 extends b0{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _a extends Bd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new E0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const bs=-90,Es=1;class w0 extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(bs,Es,t,e);s.layers=this.layers,this.add(s);const r=new En(bs,Es,t,e);r.layers=this.layers,this.add(r);const a=new En(bs,Es,t,e);a.layers=this.layers,this.add(a);const o=new En(bs,Es,t,e);o.layers=this.layers,this.add(o);const l=new En(bs,Es,t,e);l.layers=this.layers,this.add(l);const c=new En(bs,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class T0 extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ah=new le;class A0{constructor(t,e,n=0,s=1/0){this.ray=new wd(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return Jl(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,n,e);return n.sort(oh),n}}function oh(i,t){return i.distance-t.distance}function Jl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Jl(r[a],t,e,!0)}}const Yc=class Yc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yc.prototype.isMatrix2=!0;let lh=Yc;function ch(i,t,e,n){const s=C0(n);switch(e){case md:return i*t;case Mc:return i*t/s.components*s.byteLength;case Sc:return i*t/s.components*s.byteLength;case ts:return i*t*2/s.components*s.byteLength;case yc:return i*t*2/s.components*s.byteLength;case gd:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case bc:return i*t*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case _l:case xl:return Math.max(i,8)*Math.max(t,8)/2;case Sl:case yl:case El:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bl:case Ua:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C0(i){switch(i){case _n:case hd:return{byteLength:1,components:1};case Er:case dd:case ni:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case ei:case _c:case Bn:return{byteLength:4,components:1};case fd:case pd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function zd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function R0(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,yg=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Cg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Rg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,t_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,p_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,m_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
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
#endif`,v_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,M_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L_=`uniform sampler2D t2D;
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`#include <common>
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
}`,O_=`#if DEPTH_PACKING == 3200
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
}`,B_=`#define DISTANCE
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
}`,k_=`#define DISTANCE
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,X_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,Y_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,K_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,J_=`#define NORMAL
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
}`,Q_=`#define PHONG
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
}`,j_=`#define PHONG
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
}`,tv=`#define STANDARD
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
}`,ev=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,nv=`#define TOON
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
}`,iv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 color;
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
}`,lv=`uniform float rotation;
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
}`,cv=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:I0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:F0,aomap_pars_fragment:O0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:G0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:W0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:q0,color_fragment:K0,color_pars_fragment:Z0,color_pars_vertex:J0,color_vertex:Q0,common:j0,cube_uv_reflection_fragment:tg,defaultnormal_vertex:eg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:ag,colorspace_pars_fragment:og,envmap_fragment:lg,envmap_common_pars_fragment:cg,envmap_pars_fragment:ug,envmap_pars_vertex:hg,envmap_physical_pars_fragment:yg,envmap_vertex:dg,fog_vertex:fg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:vg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:bg,lights_toon_pars_fragment:Eg,lights_phong_fragment:wg,lights_phong_pars_fragment:Tg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Cg,lights_fragment_begin:Rg,lights_fragment_maps:Pg,lights_fragment_end:Lg,lightprobes_pars_fragment:Dg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:kg,map_particle_pars_fragment:zg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Vg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:$g,morphtarget_vertex:Yg,normal_fragment_begin:qg,normal_fragment_maps:Kg,normal_pars_fragment:Zg,normal_pars_vertex:Jg,normal_vertex:Qg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:t_,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,opaque_fragment:s_,packing:r_,premultiplied_alpha_fragment:a_,project_vertex:o_,dithering_fragment:l_,dithering_pars_fragment:c_,roughnessmap_fragment:u_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:f_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:__,skinning_vertex:v_,skinnormal_vertex:x_,specularmap_fragment:M_,specularmap_pars_fragment:S_,tonemapping_fragment:y_,tonemapping_pars_fragment:b_,transmission_fragment:E_,transmission_pars_fragment:w_,uv_pars_fragment:T_,uv_pars_vertex:A_,uv_vertex:C_,worldpos_vertex:R_,background_vert:P_,background_frag:L_,backgroundCube_vert:D_,backgroundCube_frag:I_,cube_vert:N_,cube_frag:U_,depth_vert:F_,depth_frag:O_,distance_vert:B_,distance_frag:k_,equirect_vert:z_,equirect_frag:G_,linedashed_vert:H_,linedashed_frag:V_,meshbasic_vert:W_,meshbasic_frag:X_,meshlambert_vert:$_,meshlambert_frag:Y_,meshmatcap_vert:q_,meshmatcap_frag:K_,meshnormal_vert:Z_,meshnormal_frag:J_,meshphong_vert:Q_,meshphong_frag:j_,meshphysical_vert:tv,meshphysical_frag:ev,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:sv,points_frag:rv,shadow_vert:av,shadow_frag:ov,sprite_vert:lv,sprite_frag:cv},Mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},qn={basic:{uniforms:en([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:en([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:en([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:en([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:en([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:en([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:en([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:en([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:en([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:en([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:en([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:en([Mt.common,Mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:en([Mt.lights,Mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};qn.physical={uniforms:en([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const va={r:0,b:0,g:0},uv=new le,Gd=new Kt;Gd.set(-1,0,0,0,1,0,0,0,1);function hv(i,t,e,n,s,r){const a=new kt(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const x=y.backgroundBlurriness>0;T=t.get(T,x)}return T}function g(y){let T=!1;const x=d(y);x===null?p(a,o):x&&x.isColor&&(p(x,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,T){const x=d(T);x&&(x.isCubeTexture||x.mapping===Ja)?(c===void 0&&(c=new Ae(new Hn(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Gs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gd),c.material.toneMapped=re.getTransfer(x.colorSpace)!==_e,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ae(new ns(2,2),new si({name:"BackgroundMaterial",uniforms:Gs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=re.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,T){y.getRGB(va,Od(i)),e.buffers.color.setClear(va.r,va.g,va.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:M,dispose:m}}function dv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,F,V,N,k){let Y=!1;const $=f(D,N,V,F);r!==$&&(r=$,c(r.object)),Y=d(D,N,V,k),Y&&g(D,N,V,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(D,F,V,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,F,V,N){const k=N.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const $=D.isInstancedMesh===!0?D.id:0;let ot=Y[$];ot===void 0&&(ot={},Y[$]=ot);let q=ot[V.id];q===void 0&&(q={},ot[V.id]=q);let et=q[k];return et===void 0&&(et=h(l()),q[k]=et),et}function h(D){const F=[],V=[],N=[];for(let k=0;k<e;k++)F[k]=0,V[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,F,V,N){const k=r.attributes,Y=F.attributes;let $=0;const ot=V.getAttributes();for(const q in ot)if(ot[q].location>=0){const st=k[q];let Nt=Y[q];if(Nt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Nt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Nt=D.instanceColor)),st===void 0||st.attribute!==Nt||Nt&&st.data!==Nt.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function g(D,F,V,N){const k={},Y=F.attributes;let $=0;const ot=V.getAttributes();for(const q in ot)if(ot[q].location>=0){let st=Y[q];st===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(st=D.instanceColor));const Nt={};Nt.attribute=st,st&&st.data&&(Nt.data=st.data),k[q]=Nt,$++}r.attributes=k,r.attributesNum=$,r.index=N}function M(){const D=r.newAttributes;for(let F=0,V=D.length;F<V;F++)D[F]=0}function p(D){m(D,0)}function m(D,F){const V=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;V[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),k[D]!==F&&(i.vertexAttribDivisor(D,F),k[D]=F)}function y(){const D=r.newAttributes,F=r.enabledAttributes;for(let V=0,N=F.length;V<N;V++)F[V]!==D[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function T(D,F,V,N,k,Y,$){$===!0?i.vertexAttribIPointer(D,F,V,k,Y):i.vertexAttribPointer(D,F,V,N,k,Y)}function x(D,F,V,N){M();const k=N.attributes,Y=V.getAttributes(),$=F.defaultAttributeValues;for(const ot in Y){const q=Y[ot];if(q.location>=0){let et=k[ot];if(et===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),et!==void 0){const st=et.normalized,Nt=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;const ce=Ct.buffer,ee=Ct.type,ae=Ct.bytesPerElement,J=ee===i.INT||ee===i.UNSIGNED_INT||et.gpuType===_c;if(et.isInterleavedBufferAttribute){const nt=et.data,St=nt.stride,Ht=et.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<q.locationSize;wt++)m(q.location+wt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<q.locationSize;wt++)p(q.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let wt=0;wt<q.locationSize;wt++)T(q.location+wt,Nt/q.locationSize,ee,st,St*ae,(Ht+Nt/q.locationSize*wt)*ae,J)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)m(q.location+nt,et.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<q.locationSize;nt++)p(q.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let nt=0;nt<q.locationSize;nt++)T(q.location+nt,Nt/q.locationSize,ee,st,Nt*ae,Nt/q.locationSize*nt*ae,J)}}else if($!==void 0){const st=$[ot];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(q.location,st);break;case 3:i.vertexAttrib3fv(q.location,st);break;case 4:i.vertexAttrib4fv(q.location,st);break;default:i.vertexAttrib1fv(q.location,st)}}}}y()}function E(){w();for(const D in n){const F=n[D];for(const V in F){const N=F[V];for(const k in N){const Y=N[k];for(const $ in Y)u(Y[$].object),delete Y[$];delete N[k]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const V in F){const N=F[V];for(const k in N){const Y=N[k];for(const $ in Y)u(Y[$].object),delete Y[$];delete N[k]}}delete n[D.id]}function C(D){for(const F in n){const V=n[F];for(const N in V){const k=V[N];if(k[D.id]===void 0)continue;const Y=k[D.id];for(const $ in Y)u(Y[$].object),delete Y[$];delete k[D.id]}}}function v(D){for(const F in n){const V=n[F],N=D.isInstancedMesh===!0?D.id:0,k=V[N];if(k!==void 0){for(const Y in k){const $=k[Y];for(const ot in $)u($[ot].object),delete $[ot];delete k[Y]}delete V[N],Object.keys(V).length===0&&delete n[F]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function fv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_n&&C!==Bn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:x,maxSamples:E,samples:b}}function mv(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hi,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,T=y*4;let x=m.clippingState||null;l.value=x,x=u(g,h,T,d);for(let E=0;E!==T;++E)x[E]=e[E];m.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const m=d+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,x=d;T!==M;++T,x+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}const Ps=4,gv=6,_v=20,vv=256,sr=new Nr,uh=new kt;let $o=null,Yo=0,qo=0,Ko=!1;const xv=new P,ki=new P;class hh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=xv}=r;$o=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Yo,qo),this._renderer.xr.enabled=Ko,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:ni,format:kn,colorSpace:Oa,depthBuffer:!1},s=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mv(r)),this._blurMaterial=yv(r,t,e),this._ggxMaterial=Sv(r,t,e)}return s}_compileMaterial(t){const e=new Ae(new Ve,t);this._renderer.compile(e,sr)}_sceneToCubeUV(t,e,n,s,r){const l=new En(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(uh),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new Hn,new fi({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let m=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(uh),m=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const E=this._cubeSize;ws(s,x*E,T>2?E:0,E,E),f.setRenderTarget(s),m&&f.render(M,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ji||t.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,M=this._sizeLods[n],p=3*M*(n>g-Ps?n-g+Ps:0),m=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,ws(r,p,m,3*M,2*M),s.setRenderTarget(r),s.render(o,sr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ws(t,p,m,3*M,2*M),s.setRenderTarget(t),s.render(o,sr)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),h=4*(this._cubeSize-u);ws(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,sr)}}function Mv(i){const t=[],e=[];let n=i;const s=i-Ps+1+gv;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let m=0;m<f;m++){const y=m%3*2/3-1,T=m>2?0:-1,x=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(x,d*h*m);for(let E=0;E<h;E++){const b=u[E*2]*2-1,C=u[E*2+1]*2-1;m===0?ki.set(1,C,b):m===1?ki.set(-b,1,-C):m===2?ki.set(-b,C,1):m===3?ki.set(-1,C,-b):m===4?ki.set(-b,-1,C):ki.set(b,C,-1),ki.toArray(M,(m*h+E)*d)}}const p=new Ve;p.setAttribute("position",new sn(g,d)),p.setAttribute("outputDirection",new sn(M,d)),e.push(new Ae(p,null)),n>Ps&&n--}return{lodMeshes:e,sizeLods:t}}function dh(i,t,e){const n=new An(i,t,e);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sv(i,t,e){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function yv(i,t,e){return new si({name:"SphericalGaussianBlur",defines:{SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function fh(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ph(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hd extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ad(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hn(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:gi});r.uniforms.tEquirect.value=e;const a=new Ae(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Je),new w0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function bv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===_o||d===vo)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Hd(g.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===_o||d===vo,M=d===ji||d===ks;if(g||M){let p=e.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new hh(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return g&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new hh(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,d){return d===_o?h.mapping=ji:d===vo&&(h.mapping=ks),h}function l(h){let d=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ev(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function wv(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let M=0;if(g===void 0)return;if(d!==null){const y=d.array;M=d.version;for(let T=0,x=y.length;T<x;T+=3){const E=y[T+0],b=y[T+1],C=y[T+2];h.push(E,b,b,C,C,E)}}else{const y=g.array;M=g.version;for(let T=0,x=y.length/3-1;T<x;T+=3){const E=T+0,b=T+1,C=T+2;h.push(E,b,b,C,C,E)}}const p=new(g.count>=65535?yd:Sd)(h,1);p.version=M;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Tv(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let M=0;for(let p=0;p<d;p++)M+=h[p];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Av(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cv(i,t,e){const n=new WeakMap,s=new Pe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;d===!0&&(T=1),g===!0&&(T=2),M===!0&&(T=3);let x=o.attributes.position.count*T,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*E*4*f),C=new xd(b,x,E,f);C.type=Bn,C.needsUpdate=!0;const v=T*4;for(let R=0;R<f;R++){const D=p[R],F=m[R],V=y[R],N=x*E*4*R;for(let k=0;k<D.count;k++){const Y=k*v;d===!0&&(s.fromBufferAttribute(D,k),b[N+Y+0]=s.x,b[N+Y+1]=s.y,b[N+Y+2]=s.z,b[N+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,k),b[N+Y+4]=s.x,b[N+Y+5]=s.y,b[N+Y+6]=s.z,b[N+Y+7]=0),M===!0&&(s.fromBufferAttribute(V,k),b[N+Y+8]=s.x,b[N+Y+9]=s.y,b[N+Y+10]=s.z,b[N+Y+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new ut(x,E)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Rv(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Pv={[sd]:"LINEAR_TONE_MAPPING",[rd]:"REINHARD_TONE_MAPPING",[ad]:"CINEON_TONE_MAPPING",[od]:"ACES_FILMIC_TONE_MAPPING",[cd]:"AGX_TONE_MAPPING",[gc]:"NEUTRAL_TONE_MAPPING",[ld]:"CUSTOM_TONE_MAPPING"};function Lv(i,t,e,n,s,r){const a=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ve;c.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ee([0,2,0,0,2,0],2));const u=new M0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ae(c,u),h=new Nr(-1,1,1,-1,0,1);let d=null,g=null,M=!1,p,m=null,y=[],T=!1;this.setSize=function(x,E){a.setSize(x,E),o!==null&&o.setSize(x,E),l!==null&&l.setSize(x,E);for(let b=0;b<y.length;b++){const C=y[b];C.setSize&&C.setSize(x,E)}},this.setEffects=function(x){y=x,T=y.length>0&&y[0].isRenderPass===!0;const E=a.width,b=a.height;y.length>0&&o===null&&(o=new An(E,b,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new An(E,b,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){const v=y[C];v.setSize&&v.setSize(E,b)}},this.begin=function(x,E){if(M||x.toneMapping===Qn&&y.length===0)return!1;if(m=E,E!==null){const b=E.width,C=E.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return T===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=Qn,!0},this.hasRenderPass=function(){return T},this.end=function(x,E){x.toneMapping=p,M=!0;let b=a,C=o;for(let v=0;v<y.length;v++){const w=y[v];w.enabled!==!1&&(w.render(x,C,b,E),w.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,u.defines={},re.getTransfer(d)===_e&&(u.defines.SRGB_TRANSFER="");const v=Pv[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(f,h),m=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Vd=new Qe,Ql=new Cr(1,1),Wd=new xd,Xd=new mm,$d=new Ad,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function Ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function no(i,t){let e=gh[t];e===void 0&&(e=new Int32Array(t),gh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Fv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),ke(e,n)}}function Ov(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),ke(e,n)}}function Bv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),ke(e,n)}}function kv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Vv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Yv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=e.isReversedDepthBuffer()?wc:Ec,r=Ql):r=Vd,e.setTexture2D(t||r,s)}function qv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xd,s)}function Kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$d,s)}function Zv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wd,s)}function Jv(i){switch(i){case 5126:return Dv;case 35664:return Iv;case 35665:return Nv;case 35666:return Uv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Gv;case 35669:case 35673:return Hv;case 5125:return Vv;case 36294:return Wv;case 36295:return Xv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}function Qv(i,t){i.uniform1fv(this.addr,t)}function jv(i,t){const e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function tx(i,t){const e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function ex(i,t){const e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function nx(i,t){const e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ix(i,t){const e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sx(i,t){const e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rx(i,t){i.uniform1iv(this.addr,t)}function ax(i,t){i.uniform2iv(this.addr,t)}function ox(i,t){i.uniform3iv(this.addr,t)}function lx(i,t){i.uniform4iv(this.addr,t)}function cx(i,t){i.uniform1uiv(this.addr,t)}function ux(i,t){i.uniform2uiv(this.addr,t)}function hx(i,t){i.uniform3uiv(this.addr,t)}function dx(i,t){i.uniform4uiv(this.addr,t)}function fx(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ql:a=Vd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function px(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xd,r[a])}function mx(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$d,r[a])}function gx(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wd,r[a])}function _x(i){switch(i){case 5126:return Qv;case 35664:return jv;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return hx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}class vx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jv(e.type)}}class xx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_x(e.type)}}class Mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Mh(i,t){i.seq.push(t),i.map[t.id]=t}function Sx(i,t,e){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),a=Zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mh(e,c===void 0?new vx(o,i,t):new xx(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Mx(o),Mh(e,f)),e=f}}}class Pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sx(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Sh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yx=37297;let bx=0;function Ex(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const yh=new Kt;function wx(i){re._getMatrix(yh,re.workingColorSpace,i);const t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Ba:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ex(i.getShaderSource(t),o)}else return r}function Tx(i,t){const e=wx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Ax={[sd]:"Linear",[rd]:"Reinhard",[ad]:"Cineon",[od]:"ACESFilmic",[cd]:"AgX",[gc]:"Neutral",[ld]:"Custom"};function Cx(i,t){const e=Ax[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xa=new P;function Rx(){re.getLuminanceCoefficients(xa);const i=xa.x.toFixed(4),t=xa.y.toFixed(4),e=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Lx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cr(i){return i!==""}function Eh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(Ix,Ux)}const Nx=new Map;function Ux(i,t){let e=jt[t];if(e===void 0){const n=Nx.get(t);if(n!==void 0)e=jt[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return jl(e)}const Fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(i){return i.replace(Fx,Ox)}function Ox(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Bx={[dr]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function kx(i){return Bx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zx={[ji]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[Ja]:"ENVMAP_TYPE_CUBE_UV"};function Gx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hx={[ks]:"ENVMAP_MODE_REFRACTION"};function Vx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Wx={[id]:"ENVMAP_BLENDING_MULTIPLY",[Lp]:"ENVMAP_BLENDING_MIX",[Dp]:"ENVMAP_BLENDING_ADD"};function Xx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wx[i.combine]||"ENVMAP_BLENDING_NONE"}function $x(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Yx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=kx(e),c=Gx(e),u=Vx(e),f=Xx(e),h=$x(e),d=Px(e),g=Lx(r),M=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(p=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Tx("linearToOutputTexel",e.outputColorSpace),Rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=jl(a),a=Eh(a,e),a=wh(a,e),o=jl(o),o=Eh(o,e),o=wh(o,e),a=Th(a),o=Th(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=y+p+a,x=y+m+o,E=Sh(s,s.VERTEX_SHADER,T),b=Sh(s,s.FRAGMENT_SHADER,x);s.attachShader(M,E),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(b)||"",k=F.trim(),Y=V.trim(),$=N.trim();let ot=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,b);else{const et=bh(s,E,"vertex"),st=bh(s,b,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+et+`
`+st)}else k!==""?Xt("WebGLProgram: Program Info Log:",k):(Y===""||$==="")&&(q=!1);q&&(D.diagnostics={runnable:ot,programLog:k,vertexShader:{log:Y,prefix:p},fragmentShader:{log:$,prefix:m}})}s.deleteShader(E),s.deleteShader(b),v=new Pa(s,M),w=Dx(s,M)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,yx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}let qx=0;class Kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zx(t),e.set(t,n)),n}}class Zx{constructor(t){this.id=qx++,this.code=t,this.usedTimes=0}}function Jx(i){return i===ts||i===Ua||i===Fa}function Qx(i,t,e,n,s,r){const a=new Cc,o=new Kx,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,w,R,D,F,V){const N=D.fog,k=F.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ot=t.get(v.envMap||Y,$),q=ot&&ot.mapping===Ja?ot.image.height:null,et=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Nt=st!==void 0?st.length:0;let Ct=0;k.morphAttributes.position!==void 0&&(Ct=1),k.morphAttributes.normal!==void 0&&(Ct=2),k.morphAttributes.color!==void 0&&(Ct=3);let ce,ee,ae,J;if(et){const ye=qn[et];ce=ye.vertexShader,ee=ye.fragmentShader}else{ce=v.vertexShader,ee=v.fragmentShader;const ye=o.getVertexShaderStage(v),fe=o.getFragmentShaderStage(v);o.update(v,ye,fe),ae=ye.id,J=fe.id}const nt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,Vt=!!v.map,ge=!!v.matcap,it=!!ot,lt=!!v.aoMap,ct=!!v.lightMap,ht=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,zt=!!v.displacementMap,Bt=!!v.emissiveMap,Wt=!!v.metalnessMap,qt=!!v.roughnessMap,L=v.anisotropy>0,de=v.clearcoat>0,ne=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,H=v.transmission>0,K=L&&!!v.anisotropyMap,dt=de&&!!v.clearcoatMap,ft=de&&!!v.clearcoatNormalMap,Z=de&&!!v.clearcoatRoughnessMap,tt=_&&!!v.iridescenceMap,mt=_&&!!v.iridescenceThicknessMap,Ut=B&&!!v.sheenColorMap,xt=B&&!!v.sheenRoughnessMap,gt=!!v.specularMap,Ft=!!v.specularColorMap,Gt=!!v.specularIntensityMap,Jt=H&&!!v.transmissionMap,U=H&&!!v.thicknessMap,_t=!!v.gradientMap,j=!!v.alphaMap,vt=v.alphaTest>0,Et=!!v.alphaHash,at=!!v.extensions;let Ot=Qn;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const Lt={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:ce,fragmentShader:ee,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:ge,envMap:it,envMapMode:it&&ot.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:ct,bumpMap:ht,normalMap:pt,displacementMap:zt,emissiveMap:Bt,normalMapObjectSpace:pt&&v.normalMapType===Up,normalMapTangentSpace:pt&&v.normalMapType===Yl,packedNormalMap:pt&&v.normalMapType===Yl&&Jx(v.normalMap.format),metalnessMap:Wt,roughnessMap:qt,anisotropy:L,anisotropyMap:K,clearcoat:de,clearcoatMap:dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Z,dispersion:ne,retroreflection:A,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:mt,sheen:B,sheenColorMap:Ut,sheenRoughnessMap:xt,specularMap:gt,specularColorMap:Ft,specularIntensityMap:Gt,transmission:H,transmissionMap:Jt,thicknessMap:U,gradientMap:_t,opaque:v.transparent===!1&&v.blending===fr&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:vt,alphaHash:Et,combine:v.combine,mapUv:Vt&&g(v.map.channel),aoMapUv:lt&&g(v.aoMap.channel),lightMapUv:ct&&g(v.lightMap.channel),bumpMapUv:ht&&g(v.bumpMap.channel),normalMapUv:pt&&g(v.normalMap.channel),displacementMapUv:zt&&g(v.displacementMap.channel),emissiveMapUv:Bt&&g(v.emissiveMap.channel),metalnessMapUv:Wt&&g(v.metalnessMap.channel),roughnessMapUv:qt&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:dt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(v.sheenRoughnessMap.channel),specularMapUv:gt&&g(v.specularMap.channel),specularColorMapUv:Ft&&g(v.specularColorMap.channel),specularIntensityMapUv:Gt&&g(v.specularIntensityMap.channel),transmissionMapUv:Jt&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(pt||L),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Vt||j),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:St,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Ct,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fn,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const w=d[v.type];let R;if(w){const D=qn[w];R=_0.clone(D.uniforms)}else R=v.uniforms;return R}function x(v,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new Yx(i,w,v,s),c.push(R),u.set(w,R)),R}function E(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:T,acquireProgram:x,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:C}}function jx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,M,p,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=p,y.group=m),t++,y}function l(h,d,g,M,p,m,y){y.reversedDepth===!0&&(p=-p);const T=o(h,d,g,M,p,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(h,d,g,M,p,m){const y=o(h,d,g,M,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||tM),n.length>1&&n.sort(d||Ch),s.length>1&&s.sort(d||Ch)}function f(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function eM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rh,i.set(n,[a])):s>=r.length?(a=new Rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function nM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function iM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sM=0;function rM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function aM(i){const t=new nM,e=iM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new le,a=new le;function o(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,M=0,p=0,m=0,y=0,T=0,x=0,E=0,b=0,C=0,v=0,w=0,R=0;c.sort(rM);for(let F=0,V=c.length;F<V;F++){const N=c[F],k=N.color,Y=N.intensity,$=N.distance;let ot=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ts?ot=N.shadow.map.texture:ot=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*Y,f+=k.g*Y,h+=k.b*Y;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],Y);R++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const et=N.shadow,st=e.get(N);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[g]=st,n.sunShadowMap[g]=ot;const Nt=et.getViewportCount();for(let Ct=0;Ct<Nt;Ct++)n.sunShadowMatrix[M+Ct]=et.getMatrix(Ct),n.sunShadowCascade[M+Ct]=et._cascadeData[Ct];M+=Nt,g++}n.sun[d]=q,d++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const et=N.shadow,st=e.get(N);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,n.directionalShadow[p]=st,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=N.shadow.matrix,E++}n.directional[p]=q,p++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(k).multiplyScalar(Y),q.distance=$,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[y]=q;const et=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,et.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[y]=et.matrix,N.castShadow){const st=e.get(N);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,n.spotShadow[y]=st,n.spotShadowMap[y]=ot,C++}y++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(k).multiplyScalar(Y),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=q,T++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const et=N.shadow,st=e.get(N);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,st.shadowCameraNear=et.camera.near,st.shadowCameraFar=et.camera.far,n.pointShadow[m]=st,n.pointShadowMap[m]=ot,n.pointShadowMatrix[m]=N.shadow.matrix,b++}n.point[m]=q,m++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(Y),q.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[x]=q,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const D=n.hash;(D.sunLength!==d||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==C||D.numSpotMaps!==v||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=y,n.rectArea.length=T,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.sunLength=d,D.directionalLength=p,D.pointLength=m,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=C,D.numSpotMaps=v,D.numLightProbes=R,n.version=sM++)}function l(c,u){let f=0,h=0,d=0,g=0,M=0,p=0;const m=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const x=c[y];if(x.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),f++}else if(x.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(x.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Ph(i){const t=new aM(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function oM(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ph(i),t.set(s,[o])):r>=a.length?(o=new Ph(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
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
}`,uM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],hM=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Lh=new le,rr=new P,Jo=new P;function dM(i,t,e){let n=new Rc;const s=new ut,r=new ut,a=new Pe,o=new S0,l=new y0,c={},u=e.maxTextureSize,f={[Qi]:hn,[hn]:Qi,[Fn]:Fn},h=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:lM,fragmentShader:cM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ae(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let m=this.type;this.render=function(b,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===dp&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=m!==this.type;V&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=b.length;N<k;N++){const Y=b[N],$=Y.shadow;if($===void 0){Xt("WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ot=$.getFrameExtents();s.multiply(ot),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,$.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=q,$.map===null||V===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===or){if(Y.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new An(s.x,s.y,{format:ts,type:ni,minFilter:Je,magFilter:Je,generateMipmaps:!1}),$.map.texture.name=Y.name+".shadowMap",$.map.depthTexture=new Cr(s.x,s.y,Bn),$.map.depthTexture.name=Y.name+".shadowMapDepth",$.map.depthTexture.format=xi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Xe,$.map.depthTexture.magFilter=Xe}else Y.isPointLight?($.map=new Hd(s.x),$.map.depthTexture=new Nm(s.x,ei)):($.map=new An(s.x,s.y),$.map.depthTexture=new Cr(s.x,s.y,ei)),$.map.depthTexture.name=Y.name+".shadowMap",$.map.depthTexture.format=xi,this.type===dr?($.map.depthTexture.compareFunction=q?wc:Ec,$.map.depthTexture.minFilter=Je,$.map.depthTexture.magFilter=Je):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Xe,$.map.depthTexture.magFilter=Xe);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);const et=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Y.isPointLight!==!0&&$.updateMatrices(Y,v);for(let st=0;st<et;st++){const Nt=$.getCamera(st);if(Y.isPointLight){const Ct=$.camera,ce=$.matrix,ee=Y.distance||Ct.far;ee!==Ct.far&&(Ct.far=ee,Ct.updateProjectionMatrix()),rr.setFromMatrixPosition(Y.matrixWorld),Ct.position.copy(rr),Jo.copy(Ct.position),Jo.add(uM[st]),Ct.up.copy(hM[st]),Ct.lookAt(Jo),Ct.updateMatrixWorld(),ce.makeTranslation(-rr.x,-rr.y,-rr.z),Lh.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Lh,Ct.coordinateSystem,Ct.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,st),i.clear();else{st===0&&(i.setRenderTarget($.map),i.clear());const Ct=$.getViewport(st);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),F.viewport(a)}n=$.getFrustum(st),x(C,v,Nt,Y,this.type)}$.isPointLightShadow!==!0&&this.type===or&&y($,v),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,D)};function y(b,C){const v=t.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new An(s.x,s.y,{format:ts,type:ni}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,d,M,null)}function T(b,C,v,w){let R=null;const D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=R.uuid,V=C.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let k=N[V];k===void 0&&(k=R.clone(),N[V]=k,C.addEventListener("dispose",E)),R=k}if(R.visible=C.visible,R.wireframe=C.wireframe,w===or?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=i.properties.get(R);F.light=v}return R}function x(b,C,v,w,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===or)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const V=t.update(b),N=b.material;if(Array.isArray(N)){const k=V.groups;for(let Y=0,$=k.length;Y<$;Y++){const ot=k[Y],q=N[ot.materialIndex];if(q&&q.visible){const et=T(b,q,w,R);b.onBeforeShadow(i,b,C,v,V,et,ot),i.renderBufferDirect(v,null,V,et,b,ot),b.onAfterShadow(i,b,C,v,V,et,ot)}}}else if(N.visible){const k=T(b,N,w,R);b.onBeforeShadow(i,b,C,v,V,k,null),i.renderBufferDirect(v,null,V,k,b,null),b.onAfterShadow(i,b,C,v,V,k,null)}}const F=b.children;for(let V=0,N=F.length;V<N;V++)x(F[V],C,v,w,R)}function E(b){b.target.removeEventListener("dispose",E);for(const v in c){const w=c[v],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function fM(i,t){function e(){let U=!1;const _t=new Pe;let j=null;const vt=new Pe(0,0,0,0);return{setMask:function(Et){j!==Et&&!U&&(i.colorMask(Et,Et,Et,Et),j=Et)},setLocked:function(Et){U=Et},setClear:function(Et,at,Ot,Lt,ye){ye===!0&&(Et*=Lt,at*=Lt,Ot*=Lt),_t.set(Et,at,Ot,Lt),vt.equals(_t)===!1&&(i.clearColor(Et,at,Ot,Lt),vt.copy(_t))},reset:function(){U=!1,j=null,vt.set(-1,0,0,0)}}}function n(){let U=!1,_t=!1,j=null,vt=null,Et=null;return{setReversed:function(at){if(_t!==at){const Ot=t.get("EXT_clip_control");at?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),_t=at;const Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(at){at?nt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(at){j!==at&&!U&&(i.depthMask(at),j=at)},setFunc:function(at){if(_t&&(at=$p[at]),vt!==at){switch(at){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case ul:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=at}},setLocked:function(at){U=at},setClear:function(at){Et!==at&&(Et=at,_t&&(at=1-at),i.clearDepth(at))},reset:function(){U=!1,j=null,vt=null,Et=null,_t=!1}}}function s(){let U=!1,_t=null,j=null,vt=null,Et=null,at=null,Ot=null,Lt=null,ye=null;return{setTest:function(fe){U||(fe?nt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(fe){_t!==fe&&!U&&(i.stencilMask(fe),_t=fe)},setFunc:function(fe,Ln,Wn){(j!==fe||vt!==Ln||Et!==Wn)&&(i.stencilFunc(fe,Ln,Wn),j=fe,vt=Ln,Et=Wn)},setOp:function(fe,Ln,Wn){(at!==fe||Ot!==Ln||Lt!==Wn)&&(i.stencilOp(fe,Ln,Wn),at=fe,Ot=Ln,Lt=Wn)},setLocked:function(fe){U=fe},setClear:function(fe){ye!==fe&&(i.clearStencil(fe),ye=fe)},reset:function(){U=!1,_t=null,j=null,vt=null,Et=null,at=null,Ot=null,Lt=null,ye=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],M=null,p=!1,m=null,y=null,T=null,x=null,E=null,b=null,C=null,v=new kt(0,0,0),w=0,R=!1,D=null,F=null,V=null,N=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ot=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=ot>=1):q.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=ot>=2);let et=null,st={};const Nt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),ce=new Pe().fromArray(Nt),ee=new Pe().fromArray(Ct);function ae(U,_t,j,vt){const Et=new Uint8Array(4),at=i.createTexture();i.bindTexture(U,at),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<j;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return at}const J={};J[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(br),ht(!1),pt(Mu),nt(i.CULL_FACE),lt(gi);function nt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function St(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ht(U,_t){return h[U]!==_t?(i.bindFramebuffer(U,_t),h[U]=_t,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function wt(U,_t){let j=g,vt=!1;if(U){j=d.get(_t),j===void 0&&(j=[],d.set(_t,j));const Et=U.textures;if(j.length!==Et.length||j[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ot=Et.length;at<Ot;at++)j[at]=i.COLOR_ATTACHMENT0+at;j.length=Et.length,vt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,vt=!0);vt&&i.drawBuffers(j)}function Vt(U){return M!==U?(i.useProgram(U),M=U,!0):!1}const ge={[Cs]:i.FUNC_ADD,[pp]:i.FUNC_SUBTRACT,[mp]:i.FUNC_REVERSE_SUBTRACT};ge[gp]=i.MIN,ge[_p]=i.MAX;const it={[vp]:i.ZERO,[xp]:i.ONE,[Mp]:i.SRC_COLOR,[ed]:i.SRC_ALPHA,[Tp]:i.SRC_ALPHA_SATURATE,[Ep]:i.DST_COLOR,[yp]:i.DST_ALPHA,[Sp]:i.ONE_MINUS_SRC_COLOR,[nd]:i.ONE_MINUS_SRC_ALPHA,[wp]:i.ONE_MINUS_DST_COLOR,[bp]:i.ONE_MINUS_DST_ALPHA,[Ap]:i.CONSTANT_COLOR,[Cp]:i.ONE_MINUS_CONSTANT_COLOR,[Rp]:i.CONSTANT_ALPHA,[Pp]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(U,_t,j,vt,Et,at,Ot,Lt,ye,fe){if(U===gi){p===!0&&(St(i.BLEND),p=!1);return}if(p===!1&&(nt(i.BLEND),p=!0),U!==fp){if(U!==m||fe!==R){if((y!==Cs||E!==Cs)&&(i.blendEquation(i.FUNC_ADD),y=Cs,E=Cs),fe)switch(U){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.ONE,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",U);break}else switch(U){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Su:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",U);break}T=null,x=null,b=null,C=null,v.set(0,0,0),w=0,m=U,R=fe}return}Et=Et||_t,at=at||j,Ot=Ot||vt,(_t!==y||Et!==E)&&(i.blendEquationSeparate(ge[_t],ge[Et]),y=_t,E=Et),(j!==T||vt!==x||at!==b||Ot!==C)&&(i.blendFuncSeparate(it[j],it[vt],it[at],it[Ot]),T=j,x=vt,b=at,C=Ot),(Lt.equals(v)===!1||ye!==w)&&(i.blendColor(Lt.r,Lt.g,Lt.b,ye),v.copy(Lt),w=ye),m=U,R=!1}function ct(U,_t){U.side===Fn?St(i.CULL_FACE):nt(i.CULL_FACE);let j=U.side===hn;_t&&(j=!j),ht(j),U.blending===fr&&U.transparent===!1?lt(gi):lt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const vt=U.stencilWrite;o.setTest(vt),vt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(U){D!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),D=U)}function pt(U){U!==up?(nt(i.CULL_FACE),U!==F&&(U===Mu?i.cullFace(i.BACK):U===hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),F=U}function zt(U){U!==V&&($&&i.lineWidth(U),V=U)}function Bt(U,_t,j){U?(nt(i.POLYGON_OFFSET_FILL),(N!==_t||k!==j)&&(N=_t,k=j,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,j))):St(i.POLYGON_OFFSET_FILL)}function Wt(U){U?nt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function qt(U){U===void 0&&(U=i.TEXTURE0+Y-1),et!==U&&(i.activeTexture(U),et=U)}function L(U,_t,j){j===void 0&&(et===null?j=i.TEXTURE0+Y-1:j=et);let vt=st[j];vt===void 0&&(vt={type:void 0,texture:void 0},st[j]=vt),(vt.type!==U||vt.texture!==_t)&&(et!==j&&(i.activeTexture(j),et=j),i.bindTexture(U,_t||J[U]),vt.type=U,vt.texture=_t)}function de(){const U=st[et];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function dt(){try{i.texStorage2D(...arguments)}catch(U){se("WebGLState:",U)}}function ft(){try{i.texStorage3D(...arguments)}catch(U){se("WebGLState:",U)}}function Z(){try{i.texImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function tt(){try{i.texImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function mt(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function Ut(U,_t){f[U]!==_t&&(i.pixelStorei(U,_t),f[U]=_t)}function xt(U){ce.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function gt(U){ee.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Ft(U,_t){let j=c.get(_t);j===void 0&&(j=new WeakMap,c.set(_t,j));let vt=j.get(U);vt===void 0&&(vt=i.getUniformBlockIndex(_t,U.name),j.set(U,vt))}function Gt(U,_t){const vt=c.get(_t).get(U);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,U.__bindingPointIndex),l.set(_t,vt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},et=null,st={},h={},d=new WeakMap,g=[],M=null,p=!1,m=null,y=null,T=null,x=null,E=null,b=null,C=null,v=new kt(0,0,0),w=0,R=!1,D=null,F=null,V=null,N=null,k=null,ce.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:St,bindFramebuffer:Ht,drawBuffers:wt,useProgram:Vt,setBlending:lt,setMaterial:ct,setFlipSided:ht,setCullFace:pt,setLineWidth:zt,setPolygonOffset:Bt,setScissorTest:Wt,activeTexture:qt,bindTexture:L,unbindTexture:de,compressedTexImage2D:ne,compressedTexImage3D:A,texImage2D:Z,texImage3D:tt,pixelStorei:Ut,getParameter:mt,updateUBOMapping:Ft,uniformBlockBinding:Gt,texStorage2D:dt,texStorage3D:ft,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:xt,viewport:gt,reset:Jt}}function pM(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return g?new OffscreenCanvas(A,_):ka("canvas")}function p(A,_,B){let H=1;const K=ne(A);if((K.width>B||K.height>B)&&(H=B/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const dt=Math.floor(H*K.width),ft=Math.floor(H*K.height);h===void 0&&(h=M(dt,ft));const Z=_?M(dt,ft):h;return Z.width=dt,Z.height=ft,Z.getContext("2d").drawImage(A,0,0,dt,ft),Xt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+dt+"x"+ft+")."),Z}else return"data"in A&&Xt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,_,B,H,K,dt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft;H&&(ft=t.get("EXT_texture_norm16"),ft||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&ft&&(Z=ft.R16_EXT),B===i.SHORT&&ft&&(Z=ft.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&ft&&(Z=ft.RG16_EXT),B===i.SHORT&&ft&&(Z=ft.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGB16_EXT),B===i.SHORT&&ft&&(Z=ft.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){const tt=dt?Ba:re.getTransfer(K);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=tt===_e?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGBA16_EXT),B===i.SHORT&&ft&&(Z=ft.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(A,_){let B;return A?_===null||_===ei||_===wr?B=i.DEPTH24_STENCIL8:_===Bn?B=i.DEPTH32F_STENCIL8:_===Er&&(B=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===wr?B=i.DEPTH_COMPONENT24:_===Bn?B=i.DEPTH_COMPONENT32F:_===Er&&(B=i.DEPTH_COMPONENT16),B}function b(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==Je?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){const _=A.target;_.removeEventListener("dispose",C),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function v(A){const _=A.target;_.removeEventListener("dispose",v),D(_)}function w(A){const _=n.get(A);if(_.__webglInit===void 0)return;const B=A.source,H=d.get(B);if(H){const K=H[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(A),Object.keys(H).length===0&&d.delete(B)}n.remove(A)}function R(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const B=A.source,H=d.get(B);delete H[_.__cacheKey],a.memory.textures--}function D(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let K=0;K<_.__webglFramebuffer[H].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[H][K]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=A.textures;for(let H=0,K=B.length;H<K;H++){const dt=n.get(B[H]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(A)}let F=0;function V(){F=0}function N(){return F}function k(A){F=A}function Y(){const A=F;return A>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function $(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ot(A,_){const B=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const H=A.image;if(H===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function q(A,_){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){St(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function et(A,_){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){St(B,A,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function st(A,_){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ht(B,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const Nt={[ml]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},Ct={[Xe]:i.NEAREST,[Ip]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},ce={[Op]:i.NEVER,[Hp]:i.ALWAYS,[Bp]:i.LESS,[Ec]:i.LEQUAL,[kp]:i.EQUAL,[wc]:i.GEQUAL,[zp]:i.GREATER,[Gp]:i.NOTEQUAL};function ee(A,_){if(_.type===Bn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Je||_.magFilter===xo||_.magFilter===Xr||_.magFilter===Vi||_.minFilter===Je||_.minFilter===xo||_.minFilter===Xr||_.minFilter===Vi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Nt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Nt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Nt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ct[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ct[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ce[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xe||_.minFilter!==Xr&&_.minFilter!==Vi||_.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ae(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));const H=_.source;let K=d.get(H);K===void 0&&(K={},d.set(H,K));const dt=$(_);if(dt!==A.__cacheKey){K[dt]===void 0&&(K[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[dt].usedTimes++;const ft=K[A.__cacheKey];ft!==void 0&&(K[A.__cacheKey].usedTimes--,ft.usedTimes===0&&R(_)),A.__cacheKey=dt,A.__webglTexture=K[dt].texture}return B}function J(A,_,B){return Math.floor(Math.floor(A/B)/_)}function nt(A,_,B,H){const dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,H,_.data);else{dt.sort((Ut,xt)=>Ut.start-xt.start);let ft=0;for(let Ut=1;Ut<dt.length;Ut++){const xt=dt[ft],gt=dt[Ut],Ft=xt.start+xt.count,Gt=J(gt.start,_.width,4),Jt=J(xt.start,_.width,4);gt.start<=Ft+1&&Gt===Jt&&J(gt.start+gt.count-1,_.width,4)===Gt?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++ft,dt[ft]=gt)}dt.length=ft+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ut=0,xt=dt.length;Ut<xt;Ut++){const gt=dt[Ut],Ft=Math.floor(gt.start/4),Gt=Math.ceil(gt.count/4),Jt=Ft%_.width,U=Math.floor(Ft/_.width),_t=Gt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Jt,U,_t,j,B,H,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function St(A,_,B){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);const K=ae(A,_),dt=_.source;e.bindTexture(H,A.__webglTexture,i.TEXTURE0+B);const ft=n.get(dt);if(dt.version!==ft.__version||K===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=re.getPrimaries(re.workingColorSpace),vt=_.colorSpace===Pi?null:re.getPrimaries(_.colorSpace),Et=_.colorSpace===Pi||j===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=p(_.image,!1,s.maxTextureSize);tt=de(_,tt);const mt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type);let xt=x(_.internalFormat,mt,Ut,_.normalized,_.colorSpace,_.isVideoTexture);ee(H,_);let gt;const Ft=_.mipmaps,Gt=_.isVideoTexture!==!0,Jt=ft.__version===void 0||K===!0,U=dt.dataReady,_t=b(_,tt);if(_.isDepthTexture)xt=E(_.format===Wi,_.type),Jt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,xt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,xt,tt.width,tt.height,0,mt,Ut,null));else if(_.isDataTexture)if(Ft.length>0){Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,_t,xt,Ft[0].width,Ft[0].height);for(let j=0,vt=Ft.length;j<vt;j++)gt=Ft[j],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,j,xt,gt.width,gt.height,0,mt,Ut,gt.data);_.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(i.TEXTURE_2D,_t,xt,tt.width,tt.height),U&&nt(_,tt,mt,Ut)):e.texImage2D(i.TEXTURE_2D,0,xt,tt.width,tt.height,0,mt,Ut,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Gt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,xt,Ft[0].width,Ft[0].height,tt.depth);for(let j=0,vt=Ft.length;j<vt;j++)if(gt=Ft[j],_.format!==kn)if(mt!==null)if(Gt){if(U)if(_.layerUpdates.size>0){const Et=ch(gt.width,gt.height,_.format,_.type);for(const at of _.layerUpdates){const Ot=gt.data.subarray(at*Et/gt.data.BYTES_PER_ELEMENT,(at+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,at,gt.width,gt.height,1,mt,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,xt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,tt.depth,mt,Ut,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,xt,gt.width,gt.height,tt.depth,0,mt,Ut,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,_t,xt,Ft[0].width,Ft[0].height);for(let j=0,vt=Ft.length;j<vt;j++)gt=Ft[j],_.format!==kn?mt!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,xt,gt.width,gt.height,0,gt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,j,xt,gt.width,gt.height,0,mt,Ut,gt.data)}else if(_.isDataArrayTexture)if(Gt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,xt,tt.width,tt.height,tt.depth),U)if(_.layerUpdates.size>0){const j=ch(tt.width,tt.height,_.format,_.type);for(const vt of _.layerUpdates){const Et=tt.data.subarray(vt*j/tt.data.BYTES_PER_ELEMENT,(vt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,tt.width,tt.height,1,mt,Ut,Et)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ut,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,tt.width,tt.height,tt.depth,0,mt,Ut,tt.data);else if(_.isData3DTexture)Gt?(Jt&&e.texStorage3D(i.TEXTURE_3D,_t,xt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ut,tt.data)):e.texImage3D(i.TEXTURE_3D,0,xt,tt.width,tt.height,tt.depth,0,mt,Ut,tt.data);else if(_.isFramebufferTexture){if(Jt)if(Gt)e.texStorage2D(i.TEXTURE_2D,_t,xt,tt.width,tt.height);else{let j=tt.width,vt=tt.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,xt,j,vt,0,mt,Ut,null),j>>=1,vt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),f.add(_),j.onpaint=vt=>{const Et=vt.changedElements;for(const at of f)Et.includes(at.image)&&(at.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const Et=i.RGBA,at=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,at,Ot,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Gt&&Jt){const j=ne(Ft[0]);e.texStorage2D(i.TEXTURE_2D,_t,xt,j.width,j.height)}for(let j=0,vt=Ft.length;j<vt;j++)gt=Ft[j],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt,Ut,gt):e.texImage2D(i.TEXTURE_2D,j,xt,mt,Ut,gt);_.generateMipmaps=!1}else if(Gt){if(Jt){const j=ne(tt);e.texStorage2D(i.TEXTURE_2D,_t,xt,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ut,tt)}else e.texImage2D(i.TEXTURE_2D,0,xt,mt,Ut,tt);m(_)&&y(H),ft.__version=dt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ht(A,_,B){if(_.image.length!==6)return;const H=ae(A,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const dt=n.get(K);if(K.version!==dt.__version||H===!0){e.activeTexture(i.TEXTURE0+B);const ft=re.getPrimaries(re.workingColorSpace),Z=_.colorSpace===Pi?null:re.getPrimaries(_.colorSpace),tt=_.colorSpace===Pi||ft===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const mt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ut=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let at=0;at<6;at++)!mt&&!Ut?xt[at]=p(_.image[at],!0,s.maxCubemapSize):xt[at]=Ut?_.image[at].image:_.image[at],xt[at]=de(_,xt[at]);const gt=xt[0],Ft=r.convert(_.format,_.colorSpace),Gt=r.convert(_.type),Jt=x(_.internalFormat,Ft,Gt,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,_t=dt.__version===void 0||H===!0,j=K.dataReady;let vt=b(_,gt);ee(i.TEXTURE_CUBE_MAP,_);let Et;if(mt){U&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,gt.width,gt.height);for(let at=0;at<6;at++){Et=xt[at].mipmaps;for(let Ot=0;Ot<Et.length;Ot++){const Lt=Et[Ot];_.format!==kn?Ft!==null?U?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Lt.width,Lt.height,Ft,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,Jt,Lt.width,Lt.height,0,Lt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Lt.width,Lt.height,Ft,Gt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,Jt,Lt.width,Lt.height,0,Ft,Gt,Lt.data)}}}else{if(Et=_.mipmaps,U&&_t){Et.length>0&&vt++;const at=ne(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,at.width,at.height)}for(let at=0;at<6;at++)if(Ut){U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,xt[at].width,xt[at].height,Ft,Gt,xt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,xt[at].width,xt[at].height,0,Ft,Gt,xt[at].data);for(let Ot=0;Ot<Et.length;Ot++){const ye=Et[Ot].image[at].image;U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,ye.width,ye.height,Ft,Gt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,Jt,ye.width,ye.height,0,Ft,Gt,ye.data)}}else{U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ft,Gt,xt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,Ft,Gt,xt[at]);for(let Ot=0;Ot<Et.length;Ot++){const Lt=Et[Ot];U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,Ft,Gt,Lt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,Jt,Ft,Gt,Lt.image[at])}}}m(_)&&y(i.TEXTURE_CUBE_MAP),dt.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function wt(A,_,B,H,K,dt){const ft=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),tt=x(B.internalFormat,ft,Z,B.normalized,B.colorSpace),mt=n.get(_),Ut=n.get(B);if(Ut.__renderTarget=_,!mt.__hasExternalTextures){const xt=Math.max(1,_.width>>dt),gt=Math.max(1,_.height>>dt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,dt,tt,xt,gt,_.depth,0,ft,Z,null):e.texImage2D(K,dt,tt,xt,gt,0,ft,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),qt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,K,Ut.__webglTexture,0,Wt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,K,Ut.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(A,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const H=_.depthTexture,K=H&&H.isDepthTexture?H.type:null,dt=E(_.stencilBuffer,K),ft=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(_),dt,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,A)}else{const H=_.textures;for(let K=0;K<H.length;K++){const dt=H[K],ft=r.convert(dt.format,dt.colorSpace),Z=r.convert(dt.type),tt=x(dt.internalFormat,ft,Z,dt.normalized,dt.colorSpace);qt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(_),tt,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(A,_,B){const H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ee(i.TEXTURE_CUBE_MAP,_.depthTexture);const mt=r.convert(_.depthTexture.format),Ut=r.convert(_.depthTexture.type);let xt;_.depthTexture.format===xi?xt=i.DEPTH_COMPONENT24:_.depthTexture.format===Wi&&(xt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,_.width,_.height,0,mt,Ut,null)}}else ot(_.depthTexture,0);const dt=K.__webglTexture,ft=Wt(_),Z=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,tt=_.depthTexture.format===Wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===xi)qt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,dt,0);else if(_.depthTexture.format===Wi)qt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Z,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Z,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(A){const _=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=H}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)ge(_.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?ge(_.__webglFramebuffer[0],A,0):ge(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Vt(_.__webglDepthbuffer[H],A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,dt)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Vt(_.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,_,B){const H=n.get(A);_!==void 0&&wt(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&it(A)}function ct(A){const _=A.texture,B=n.get(A),H=n.get(_);A.addEventListener("dispose",v);const K=A.textures,dt=A.isWebGLCubeRenderTarget===!0,ft=K.length>1;if(ft||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),dt){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let tt=0;tt<_.mipmaps.length;tt++)B.__webglFramebuffer[Z][tt]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Z=0,tt=K.length;Z<tt;Z++){const mt=n.get(K[Z]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&qt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const tt=K[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const mt=r.convert(tt.format,tt.colorSpace),Ut=r.convert(tt.type),xt=x(tt.internalFormat,mt,Ut,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),gt=Wt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,xt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ee(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)wt(B.__webglFramebuffer[Z][tt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else wt(B.__webglFramebuffer[Z],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(_)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Z=0,tt=K.length;Z<tt;Z++){const mt=K[Z],Ut=n.get(mt);let xt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Ut.__webglTexture),ee(xt,mt),wt(B.__webglFramebuffer,A,mt,i.COLOR_ATTACHMENT0+Z,xt,0),m(mt)&&y(xt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,H.__webglTexture),ee(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)wt(B.__webglFramebuffer[tt],A,_,i.COLOR_ATTACHMENT0,Z,tt);else wt(B.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Z,0);m(_)&&y(Z),e.unbindTexture()}A.depthBuffer&&it(A)}function ht(A){const _=A.textures;for(let B=0,H=_.length;B<H;B++){const K=_[B];if(m(K)){const dt=T(A),ft=n.get(K).__webglTexture;e.bindTexture(dt,ft),y(dt),e.unbindTexture()}}}const pt=[],zt=[];function Bt(A){if(A.samples>0){if(qt(A)===!1){const _=A.textures,B=A.width,H=A.height;let K=i.COLOR_BUFFER_BIT;const dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(A),Z=_.length>1;if(Z)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);const Ut=n.get(_[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,K,i.NEAREST),l===!0&&(pt.length=0,zt.length=0,pt.push(i.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pt.push(dt),zt.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);const Ut=n.get(_[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Wt(A){return Math.min(s.maxSamples,A.samples)}function qt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function de(A,_){const B=A.colorSpace,H=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Oa&&B!==Pi&&(re.getTransfer(B)===_e?(H!==kn||K!==_n)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",B)),_}function ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=ot,this.setTexture2DArray=q,this.setTexture3D=et,this.setTextureCube=st,this.rebindTextures=lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function mM(i,t){function e(n,s=Pi){let r;const a=re.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hd)return i.BYTE;if(n===dd)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===md)return i.ALPHA;if(n===gd)return i.RGB;if(n===kn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===Mc)return i.RED;if(n===Sc)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===bc)return i.RGBA_INTEGER;if(n===Ta||n===Aa||n===Ca||n===Ra)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===vl||n===xl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===yl||n===bl||n===El||n===wl||n===Ua||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===yl)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===El)return r.COMPRESSED_R11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Al||n===Cl||n===Rl||n===Pl||n===Ll||n===Dl||n===Il||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Al)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Hl||n===Vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wl||n===Xl||n===Fa||n===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const gM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Cd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:gM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xM extends is{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",p=new vM,m={},y=e.getContextAttributes();let T=null,x=null;const E=[],b=[],C=new ut;let v=null,w=null;const R=new En;R.viewport=new Pe;const D=new En;D.viewport=new Pe;const F=[R,D],V=new T0;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=E[J];return nt===void 0&&(nt=new To,E[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=E[J];return nt===void 0&&(nt=new To,E[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=E[J];return nt===void 0&&(nt=new To,E[J]=nt),nt.getHandSpace()};function Y(J){const nt=b.indexOf(J.inputSource);if(nt===-1)return;const St=E[nt];St!==void 0&&(St.update(J.inputSource,J.frame,c||a),St.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ot);for(let J=0;J<E.length;J++){const nt=b[J];nt!==null&&(b[J]=null,E[J].disconnect(nt))}N=null,k=null,p.reset();for(const J in m)delete m[J];if(t.setRenderTarget(T),d=null,h=null,f=null,s=null,x=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ot),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ht=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=y.stencil?Wi:xi,Ht=y.stencil?wr:ei);const Vt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new An(h.textureWidth,h.textureHeight,{format:kn,type:_n,depthTexture:new Cr(h.textureWidth,h.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const St={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new An(d.framebufferWidth,d.framebufferHeight,{format:kn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ot(J){for(let nt=0;nt<J.removed.length;nt++){const St=J.removed[nt],Ht=b.indexOf(St);Ht>=0&&(b[Ht]=null,E[Ht].disconnect(St))}for(let nt=0;nt<J.added.length;nt++){const St=J.added[nt];let Ht=b.indexOf(St);if(Ht===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=b.length){b.push(St),Ht=Vt;break}else if(b[Vt]===null){b[Vt]=St,Ht=Vt;break}if(Ht===-1)break}const wt=E[Ht];wt&&wt.connect(St)}}const q=new P,et=new P;function st(J,nt,St){q.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(St.matrixWorld);const Ht=q.distanceTo(et),wt=nt.projectionMatrix.elements,Vt=St.projectionMatrix.elements,ge=wt[14]/(wt[10]-1),it=wt[14]/(wt[10]+1),lt=(wt[9]+1)/wt[5],ct=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],pt=(Vt[8]+1)/Vt[0],zt=ge*ht,Bt=ge*pt,Wt=Ht/(-ht+pt),qt=Wt*-ht;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qt),J.translateZ(Wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const L=ge+Wt,de=it+Wt,ne=zt-qt,A=Bt+(Ht-qt),_=lt*it/de*L,B=ct*it/de*L;J.projectionMatrix.makePerspective(ne,A,_,B,L,de),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Nt(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let nt=J.near,St=J.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(St=p.depthFar)),V.near=D.near=R.near=nt,V.far=D.far=R.far=St,(N!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,k=V.far),V.layers.mask=J.layers.mask|6,R.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const Ht=J.parent,wt=V.cameras;Nt(V,Ht);for(let Vt=0;Vt<wt.length;Vt++)Nt(wt[Vt],Ht);wt.length===2?st(V,R,D):V.projectionMatrix.copy(R.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Ct(J,V,Ht)};function Ct(J,nt,St){St===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ar*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(J){return m[J]};let ce=null;function ee(J,nt){if(u=nt.getViewerPose(c||a),g=nt,u!==null){const St=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Ht=!1;St.length!==V.cameras.length&&(V.cameras.length=0,Ht=!0);for(let it=0;it<St.length;it++){const lt=St[it];let ct=null;if(d!==null)ct=d.getViewport(lt);else{const pt=f.getViewSubImage(h,lt);ct=pt.viewport,it===0&&(t.setRenderTargetTextures(x,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(x))}let ht=F[it];ht===void 0&&(ht=new En,ht.layers.enable(it),ht.viewport=new Pe,F[it]=ht),ht.matrix.fromArray(lt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(lt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),it===0&&(V.matrix.copy(ht.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ht===!0&&V.cameras.push(ht)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const it=f.getDepthInformation(St[0]);it&&it.isValid&&it.texture&&p.init(it,s.renderState)}if(wt&&wt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let it=0;it<St.length;it++){const lt=St[it].camera;if(lt){let ct=m[lt];ct||(ct=new Cd,m[lt]=ct);const ht=f.getCameraImage(lt);ct.sourceTexture=ht}}}}for(let St=0;St<E.length;St++){const Ht=b[St],wt=E[St];Ht!==null&&wt!==void 0&&wt.update(Ht,nt,c||a)}ce&&ce(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ae=new zd;ae.setAnimationLoop(ee),this.setAnimationLoop=function(J){ce=J},this.dispose=function(){}}}const MM=new le,Yd=new Kt;Yd.set(-1,0,0,0,1,0,0,0,1);function SM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Od(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,T,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),T=y.envMap,x=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Yd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yM(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const b=E.program;n.uniformBlockBinding(x,b)}function c(x,E){let b=s[x.id];b===void 0&&(p(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",y));const C=E.program;n.updateUBOMapping(x,C);const v=t.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const E=f();x.__bindingPointIndex=E;const b=i.createBuffer(),C=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const E=s[x.id],b=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,w=b.length;v<w;v++){const R=b[v];if(Array.isArray(R))for(let D=0,F=R.length;D<F;D++)d(R[D],v,D,C);else d(R,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,E,b,C){if(M(x,E,b,C)===!0){const v=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let D=0;D<w.length;D++){const F=w[D],V=m(F);g(F,x.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,E,b){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,b)}function M(x,E,b,C){const v=x.value,w=E+"_"+b;if(C[w]===void 0)return typeof v=="number"||typeof v=="boolean"?C[w]=v:ArrayBuffer.isView(v)?C[w]=v.slice():C[w]=v.clone(),!0;{const R=C[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(x){const E=x.uniforms;let b=0;const C=16;for(let w=0,R=E.length;w<R;w++){const D=Array.isArray(E[w])?E[w]:[E[w]];for(let F=0,V=D.length;F<V;F++){const N=D[F],k=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,$=k.length;Y<$;Y++){const ot=k[Y],q=m(ot),et=b%C,st=et%q.boundary,Nt=et+st;b+=st,Nt!==0&&C-Nt<q.storage&&(b+=C-Nt),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=q.storage}}}const v=b%C;return v>0&&(b+=C-v),x.__size=b,x.__cache={},this}function m(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",x),E}function y(x){const E=x.target;E.removeEventListener("dispose",y);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const bM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function EM(){return Yn===null&&(Yn=new Td(bM,16,16,ts,ni),Yn.name="DFG_LUT",Yn.minFilter=Je,Yn.magFilter=Je,Yn.wrapS=pi,Yn.wrapT=pi,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class wM{constructor(t={}){const{canvas:e=Wp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=d,p=new Set([bc,yc,Sc]),m=new Set([_n,ei,Er,wr,vc,xc]),y=new Uint32Array(4),T=new Int32Array(4),x=new P;let E=null,b=null;const C=[],v=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,F=null,V=null,N=null,k=null;this._outputColorSpace=Ke;let Y=0,$=0,ot=null,q=-1,et=null;const st=new Pe,Nt=new Pe;let Ct=null;const ce=new kt(0);let ee=0,ae=e.width,J=e.height,nt=1,St=null,Ht=null;const wt=new Pe(0,0,ae,J),Vt=new Pe(0,0,ae,J);let ge=!1;const it=new Rc;let lt=!1,ct=!1;const ht=new le,pt=new P,zt=new Pe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function qt(){return ot===null?nt:1}let L=n;function de(S,I){return e.getContext(S,I)}let ne,A,_,B,H,K,dt,ft,Z,tt,mt,Ut,xt,gt,Ft,Gt,Jt,U,_t,j,vt,Et,at;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),L===null){const I="webgl2";if(L=de(I,S),L===null)throw de(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(S){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),se("WebGLRenderer: "+S.message),S}function Ot(){ne=new Ev(L),ne.init(),vt=new mM(L,ne),A=new pv(L,ne,t,vt),_=new fM(L,ne),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),V=L.createFramebuffer(),N=L.createFramebuffer(),k=L.createFramebuffer(),B=new Av(L),H=new jx,K=new pM(L,ne,_,H,A,vt,B),dt=new bv(R),ft=new R0(L),Et=new dv(L,ft),Z=new wv(L,ft,B,Et),tt=new Rv(L,Z,ft,Et,B),U=new Cv(L,A,K),Ft=new mv(H),mt=new Qx(R,dt,ne,A,Et,Ft),Ut=new SM(R,H),xt=new eM,gt=new oM(ne),Jt=new hv(R,dt,_,tt,g,l),Gt=new dM(R,tt,A),at=new yM(L,B,A,_),_t=new fv(L,ne,B),j=new Tv(L,ne,B),B.programs=mt.programs,R.capabilities=A,R.extensions=ne,R.properties=H,R.renderLists=xt,R.shadowMap=Gt,R.state=_,R.info=B}M!==_n&&(w=new Lv(M,e.width,e.height,o,s,r));const Lt=new xM(R,L);this.xr=Lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(ae,J,!1))},this.getSize=function(S){return S.set(ae,J)},this.setSize=function(S,I,W=!0){if(Lt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=S,J=I,e.width=Math.floor(S*nt),e.height=Math.floor(I*nt),W===!0&&(e.style.width=S+"px",e.style.height=I+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(ae*nt,J*nt).floor()},this.setDrawingBufferSize=function(S,I,W){ae=S,J=I,nt=W,e.width=Math.floor(S*W),e.height=Math.floor(I*W),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(M===_n){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(st)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,I,W,z){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,I,W,z),_.viewport(st.copy(wt).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy(Vt)},this.setScissor=function(S,I,W,z){S.isVector4?Vt.set(S.x,S.y,S.z,S.w):Vt.set(S,I,W,z),_.scissor(Nt.copy(Vt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){_.setScissorTest(ge=S)},this.setOpaqueSort=function(S){St=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,W=!0){let z=0;if(S){let G=!1;if(ot!==null){const bt=ot.texture.format;G=p.has(bt)}if(G){const bt=ot.texture.type,At=m.has(bt),yt=Jt.getClearColor(),Rt=Jt.getClearAlpha(),It=yt.r,Qt=yt.g,ie=yt.b;At?(y[0]=It,y[1]=Qt,y[2]=ie,y[3]=Rt,L.clearBufferuiv(L.COLOR,0,y)):(T[0]=It,T[1]=Qt,T[2]=ie,T[3]=Rt,L.clearBufferiv(L.COLOR,0,T))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),Jt.dispose(),xt.dispose(),gt.dispose(),H.dispose(),dt.dispose(),tt.dispose(),Et.dispose(),at.dispose(),mt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Kc),Lt.removeEventListener("sessionend",Zc),Ni.stop()};function ye(S){S.preventDefault(),za("WebGLRenderer: Context Lost."),D=!0}function fe(){za("WebGLRenderer: Context Restored."),D=!1;const S=B.autoReset,I=Gt.enabled,W=Gt.autoUpdate,z=Gt.needsUpdate,G=Gt.type;Ot(),B.autoReset=S,Gt.enabled=I,Gt.autoUpdate=W,Gt.needsUpdate=z,Gt.type=G}function Ln(S){se("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wn(S){const I=S.target;I.removeEventListener("dispose",Wn),df(I)}function df(S){ff(S),H.remove(S)}function ff(S){const I=H.get(S).programs;I!==void 0&&(I.forEach(function(W){mt.releaseProgram(W)}),S.isShaderMaterial&&mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,W,z,G,bt){I===null&&(I=Bt);const At=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=gf(S,I,W,z,G);_.setMaterial(z,At);let Rt=W.index,It=1;if(z.wireframe===!0){if(Rt=Z.getWireframeAttribute(W),Rt===void 0)return;It=2}const Qt=W.drawRange,ie=W.attributes.position;let Pt=Qt.start*It,pe=(Qt.start+Qt.count)*It;bt!==null&&(Pt=Math.max(Pt,bt.start*It),pe=Math.min(pe,(bt.start+bt.count)*It)),Rt!==null?(Pt=Math.max(Pt,0),pe=Math.min(pe,Rt.count)):ie!=null&&(Pt=Math.max(Pt,0),pe=Math.min(pe,ie.count));const Ie=pe-Pt;if(Ie<0||Ie===1/0)return;Et.setup(G,z,yt,W,Rt);let we,Se=_t;if(Rt!==null&&(we=ft.get(Rt),Se=j,Se.setIndex(we)),G.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*qt()),Se.setMode(L.LINES)):Se.setMode(L.TRIANGLES);else if(G.isLine){let $e=z.linewidth;$e===void 0&&($e=1),_.setLineWidth($e*qt()),G.isLineSegments?Se.setMode(L.LINES):G.isLineLoop?Se.setMode(L.LINE_LOOP):Se.setMode(L.LINE_STRIP)}else G.isPoints?Se.setMode(L.POINTS):G.isSprite&&Se.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $e=G._multiDrawStarts,Tt=G._multiDrawCounts,je=G._multiDrawCount,oe=Rt?ft.get(Rt).bytesPerElement:1,Sn=H.get(z).currentProgram.getUniforms();for(let Xn=0;Xn<je;Xn++)Sn.setValue(L,"_gl_DrawID",Xn),Se.render($e[Xn]/oe,Tt[Xn])}else if(G.isInstancedMesh)Se.renderInstances(Pt,Ie,G.count);else if(W.isInstancedBufferGeometry){const $e=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,$e);Se.renderInstances(Pt,Ie,Tt)}else Se.render(Pt,Ie)};function qc(S,I,W,z){F!==null&&S.isNodeMaterial&&F.setObject(z,S),lt===!0&&Ft.setState(S,W,!1),S.transparent===!0&&S.side===Fn&&S.forceSinglePass===!1?(S.side=hn,S.needsUpdate=!0,Wr(S,I,z),S.side=Qi,S.needsUpdate=!0,Wr(S,I,z),S.side=Fn):Wr(S,I,z)}this.compile=function(S,I,W=null){W===null&&(W=S),F!==null&&F.renderStart(S,I,W),b=gt.get(W),b.init(I),v.push(b),W.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),S!==W&&S.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),ct=this.localClippingEnabled,lt=Ft.init(this.clippingPlanes,ct),lt===!0&&Ft.setGlobalState(this.clippingPlanes,I),F!==null&&Gt.render(b.state.shadowsArray,W,I);const z=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const bt=G.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){const yt=bt[At];qc(yt,W,I,G),z.add(yt)}else qc(bt,W,I,G),z.add(bt)}),b=v.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(S,I,W=null){const z=this.compile(S,I,W);return new Promise(G=>{function bt(){if(z.forEach(function(At){const Rt=H.get(At).currentProgram;(Rt===void 0||Rt.isReady())&&z.delete(At)}),z.size===0){G(S);return}setTimeout(bt,10)}ne.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let fo=null;function pf(S){fo&&fo(S)}function Kc(){Ni.stop()}function Zc(){Ni.start()}const Ni=new zd;Ni.setAnimationLoop(pf),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(S){fo=S,Lt.setAnimationLoop(S),S===null?Ni.stop():Ni.start()},Lt.addEventListener("sessionstart",Kc),Lt.addEventListener("sessionend",Zc),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(S,I);const W=Lt.enabled===!0&&Lt.isPresenting===!0,z=w!==null&&(ot===null||W)&&w.begin(R,ot);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(I),I=Lt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,I,ot),b=gt.get(S,v.length),b.init(I),b.state.textureUnits=K.getTextureUnits(),v.push(b),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),it.setFromProjectionMatrix(ht,Zn,I.reversedDepth),ct=this.localClippingEnabled,lt=Ft.init(this.clippingPlanes,ct),E=xt.get(S,C.length),E.init(),C.push(E),Lt.enabled===!0&&Lt.isPresenting===!0){const At=R.xr.getDepthSensingMesh();At!==null&&po(At,I,-1/0,R.sortObjects)}po(S,I,0,R.sortObjects),E.finish(),F!==null&&F.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(St,Ht),Wt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Wt&&Jt.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Ft.beginShadows();const G=b.state.shadowsArray;if(Gt.render(G,S,I),lt===!0&&Ft.endShadows(),(z&&w.hasRenderPass())===!1){const At=E.opaque,yt=E.transmissive;if(b.setupLights(),I.isArrayCamera){const Rt=I.cameras;if(yt.length>0)for(let It=0,Qt=Rt.length;It<Qt;It++){const ie=Rt[It];Qc(At,yt,S,ie)}Wt&&Jt.render(S);for(let It=0,Qt=Rt.length;It<Qt;It++){const ie=Rt[It];Jc(E,S,ie,ie.viewport)}}else yt.length>0&&Qc(At,yt,S,I),Wt&&Jt.render(S),Jc(E,S,I)}ot!==null&&$===0&&(K.updateMultisampleRenderTarget(ot),K.updateRenderTargetMipmap(ot)),z&&w.end(R),S.isScene===!0&&S.onAfterRender(R,S,I),Et.resetDefaultState(),q=-1,et=null,v.pop(),v.length>0?(b=v[v.length-1],K.setTextureUnits(b.state.textureUnits),lt===!0&&Ft.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function po(S,I,W,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(it)){z&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);const At=tt.update(S),yt=S.material;yt.visible&&E.push(S,At,yt,W,zt.z,null,I)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(it))){const At=tt.update(S),yt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(yt)){const Rt=At.groups;for(let It=0,Qt=Rt.length;It<Qt;It++){const ie=Rt[It],Pt=yt[ie.materialIndex];Pt&&Pt.visible&&E.push(S,At,Pt,W,zt.z,ie,I)}}else yt.visible&&E.push(S,At,yt,W,zt.z,null,I)}}const bt=S.children;for(let At=0,yt=bt.length;At<yt;At++)po(bt[At],I,W,z)}function Jc(S,I,W,z){const{opaque:G,transmissive:bt,transparent:At}=S;b.setupLightsView(W),lt===!0&&Ft.setGlobalState(R.clippingPlanes,W),z&&_.viewport(st.copy(z)),G.length>0&&Vr(G,I,W),bt.length>0&&Vr(bt,I,W),At.length>0&&Vr(At,I,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Qc(S,I,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const Pt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new An(1,1,{generateMipmaps:!0,type:Pt?ni:_n,minFilter:Vi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}const bt=b.state.transmissionRenderTarget[z.id],At=z.viewport||st;bt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);const yt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(ce),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&Jt.render(W);const Qt=R.toneMapping;R.toneMapping=Qn;const ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),lt===!0&&Ft.setGlobalState(R.clippingPlanes,z),Vr(S,W,z),K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let pe=0,Ie=I.length;pe<Ie;pe++){const we=I[pe],{object:Se,geometry:$e,material:Tt,group:je}=we;if(Tt.side===Fn&&Se.layers.test(z.layers)){const oe=Tt.side;Tt.side=hn,Tt.needsUpdate=!0,jc(Se,W,z,$e,Tt,je),Tt.side=oe,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt))}R.setRenderTarget(yt,Rt,It),R.setClearColor(ce,ee),ie!==void 0&&(z.viewport=ie),R.toneMapping=Qt}function Vr(S,I,W){const z=I.isScene===!0?I.overrideMaterial:null;for(let G=0,bt=S.length;G<bt;G++){const At=S[G],{object:yt,geometry:Rt,group:It}=At;let Qt=At.material;Qt.allowOverride===!0&&z!==null&&(Qt=z),yt.layers.test(W.layers)&&jc(yt,I,W,Rt,Qt,It)}}function jc(S,I,W,z,G,bt){F!==null&&G.isNodeMaterial&&F.setObject(S,G),S.onBeforeRender(R,I,W,z,G,bt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(R,I,W,z,S,bt),G.transparent===!0&&G.side===Fn&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,R.renderBufferDirect(W,I,z,G,S,bt),G.side=Qi,G.needsUpdate=!0,R.renderBufferDirect(W,I,z,G,S,bt),G.side=Fn):R.renderBufferDirect(W,I,z,G,S,bt),S.onAfterRender(R,I,W,z,G,bt)}function Wr(S,I,W){I.isScene!==!0&&(I=Bt);const z=H.get(S),G=b.state.lights,bt=b.state.shadowsArray,At=G.state.version,yt=mt.getParameters(S,G.state,bt,I,W,b.state.lightProbeGridArray),Rt=mt.getProgramCacheKey(yt);let It=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const Qt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=dt.get(S.envMap||z.environment,Qt),z.envMapRotation=z.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",Wn),It=new Map,z.programs=It);let ie=It.get(Rt);if(ie!==void 0){if(z.currentProgram===ie&&z.lightsStateVersion===At)return eu(S,yt),ie}else yt.uniforms=mt.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,W,yt),S.onBeforeCompile(yt,R),ie=mt.acquireProgram(yt,Rt),It.set(Rt,ie),z.uniforms=yt.uniforms;const Pt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),eu(S,yt),z.needsLights=vf(S),z.lightsStateVersion=At,z.needsLights&&(Pt.ambientLightColor.value=G.state.ambient,Pt.lightProbe.value=G.state.probe,Pt.sunLights.value=G.state.sun,Pt.sunLightShadows.value=G.state.sunShadow,Pt.directionalLights.value=G.state.directional,Pt.directionalLightShadows.value=G.state.directionalShadow,Pt.spotLights.value=G.state.spot,Pt.spotLightShadows.value=G.state.spotShadow,Pt.rectAreaLights.value=G.state.rectArea,Pt.ltc_1.value=G.state.rectAreaLTC1,Pt.ltc_2.value=G.state.rectAreaLTC2,Pt.pointLights.value=G.state.point,Pt.pointLightShadows.value=G.state.pointShadow,Pt.hemisphereLights.value=G.state.hemi,Pt.sunShadowMatrix.value=G.state.sunShadowMatrix,Pt.sunShadowCascade.value=G.state.sunShadowCascade,Pt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pt.spotLightMatrix.value=G.state.spotLightMatrix,Pt.spotLightMap.value=G.state.spotLightMap,Pt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=ie,z.uniformsList=null,ie}function tu(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Pa.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function eu(S,I){const W=H.get(S);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function mf(S,I){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(I.matrixWorld);for(let W=0,z=S.length;W<z;W++){const G=S[W];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function gf(S,I,W,z,G){I.isScene!==!0&&(I=Bt),K.resetTextureUnits();const bt=I.fog,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,yt=ot===null?R.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:re.workingColorSpace,Rt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,It=dt.get(z.envMap||At,Rt),Qt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ie=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!W.morphAttributes.position,pe=!!W.morphAttributes.normal,Ie=!!W.morphAttributes.color;let we=Qn;z.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(we=R.toneMapping);const Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$e=Se!==void 0?Se.length:0,Tt=H.get(z),je=b.state.lights;if(lt===!0&&(ct===!0||S!==et)){const be=S===et&&z.id===q;Ft.setState(z,S,be)}let oe=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==je.state.version||Tt.outputColorSpace!==yt||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==It||z.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ft.numPlanes||Tt.numIntersection!==Ft.numIntersection)||Tt.vertexAlphas!==Qt||Tt.vertexTangents!==ie||Tt.morphTargets!==Pt||Tt.morphNormals!==pe||Tt.morphColors!==Ie||Tt.toneMapping!==we||Tt.morphTargetsCount!==$e||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Tt.__version=z.version);let Sn=Tt.currentProgram;oe===!0&&(Sn=Wr(z,I,G),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Sn,Tt));let Xn=!1,yi=!1,rs=!1;const Me=Sn.getUniforms(),De=Tt.uniforms;if(_.useProgram(Sn.program)&&(Xn=!0,yi=!0,rs=!0),z.id!==q&&(q=z.id,yi=!0),Tt.needsLights){const be=mf(b.state.lightProbeGridArray,G);Tt.lightProbeGrid!==be&&(Tt.lightProbeGrid=be,yi=!0)}if(Xn||et!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Me.setValue(L,"projectionMatrix",S.projectionMatrix),Me.setValue(L,"viewMatrix",S.matrixWorldInverse);const Ei=Me.map.cameraPosition;Ei!==void 0&&Ei.setValue(L,pt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&Me.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Me.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),et!==S&&(et=S,yi=!0,rs=!0)}if(Tt.needsLights&&(je.state.sunShadowMap.length>0&&Me.setValue(L,"sunShadowMap",je.state.sunShadowMap,K),je.state.directionalShadowMap.length>0&&Me.setValue(L,"directionalShadowMap",je.state.directionalShadowMap,K),je.state.spotShadowMap.length>0&&Me.setValue(L,"spotShadowMap",je.state.spotShadowMap,K),je.state.pointShadowMap.length>0&&Me.setValue(L,"pointShadowMap",je.state.pointShadowMap,K)),G.isSkinnedMesh){Me.setOptional(L,G,"bindMatrix"),Me.setOptional(L,G,"bindMatrixInverse");const be=G.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Me.setValue(L,"boneTexture",be.boneTexture,K))}G.isBatchedMesh&&(Me.setOptional(L,G,"batchingTexture"),Me.setValue(L,"batchingTexture",G._matricesTexture,K),Me.setOptional(L,G,"batchingIdTexture"),Me.setValue(L,"batchingIdTexture",G._indirectTexture,K),Me.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Me.setValue(L,"batchingColorTexture",G._colorsTexture,K));const bi=W.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&U.update(G,W,Sn),(yi||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,Me.setValue(L,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(De.envMapIntensity.value=I.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=EM()),yi){if(Me.setValue(L,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&_f(De,rs),bt&&z.fog===!0&&Ut.refreshFogUniforms(De,bt),Ut.refreshMaterialUniforms(De,z,nt,J,b.state.transmissionRenderTarget[S.id]),Tt.needsLights&&Tt.lightProbeGrid){const be=Tt.lightProbeGrid;De.probesSH.value=be.texture,De.probesMin.value.copy(be.boundingBox.min),De.probesMax.value.copy(be.boundingBox.max),De.probesResolution.value.copy(be.resolution)}Pa.upload(L,tu(Tt),De,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pa.upload(L,tu(Tt),De,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Me.setValue(L,"center",G.center),Me.setValue(L,"modelViewMatrix",G.modelViewMatrix),Me.setValue(L,"normalMatrix",G.normalMatrix),Me.setValue(L,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const be=z.uniformsGroups;for(let Ei=0,as=be.length;Ei<as;Ei++){const iu=be[Ei];at.update(iu,Sn),at.bind(iu,Sn)}}return Sn}function _f(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function vf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(S,I,W){const z=H.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=I,H.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const W=H.get(S);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,W=0){ot=S,Y=I,$=W;let z=null,G=!1,bt=!1;if(S){const yt=H.get(S);if(yt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,yt.__webglFramebuffer),st.copy(S.viewport),Nt.copy(S.scissor),Ct=S.scissorTest,_.viewport(st),_.scissor(Nt),_.setScissorTest(Ct),q=-1;return}else if(yt.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(yt.__hasExternalTextures)K.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Qt=S.depthTexture;if(yt.__boundDepthTexture!==Qt){if(Qt!==null&&H.has(Qt)&&(S.width!==Qt.image.width||S.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(bt=!0);const It=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[I])?z=It[I][W]:z=It[I],G=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?z=H.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?z=It[W]:z=It,st.copy(S.viewport),Nt.copy(S.scissor),Ct=S.scissorTest}else st.copy(wt).multiplyScalar(nt).floor(),Nt.copy(Vt).multiplyScalar(nt).floor(),Ct=ge;if(W!==0&&(z=V),_.bindFramebuffer(L.FRAMEBUFFER,z)&&_.drawBuffers(S,z),_.viewport(st),_.scissor(Nt),_.setScissorTest(Ct),G){const yt=H.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,W)}else if(bt){const yt=I;for(let Rt=0;Rt<S.textures.length;Rt++){const It=H.get(S.textures[Rt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Rt,It.__webglTexture,W,yt)}}else if(S!==null&&W!==0){const yt=H.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yt.__webglTexture,W)}q=-1};function nu(S){const I=H.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=A.textureFormatReadable(S.format),I.__typeReadable=A.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,W,z,G,bt,At,yt=0){if(!(S&&S.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt){_.bindFramebuffer(L.FRAMEBUFFER,Rt);try{const It=S.textures[yt],Qt=It.format,ie=It.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt);const Pt=nu(It);if(Pt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&W>=0&&W<=S.height-G&&L.readPixels(I,W,z,G,vt.convert(Qt),vt.convert(ie),bt)}finally{const It=ot!==null?H.get(ot).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,I,W,z,G,bt,At,yt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt)if(I>=0&&I<=S.width-z&&W>=0&&W<=S.height-G){_.bindFramebuffer(L.FRAMEBUFFER,Rt);const It=S.textures[yt],Qt=It.format,ie=It.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt);const Pt=nu(It);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.bufferData(L.PIXEL_PACK_BUFFER,bt.byteLength,L.STREAM_READ),L.readPixels(I,W,z,G,vt.convert(Qt),vt.convert(ie),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Ie=ot!==null?H.get(ot).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ie);const we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xp(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,bt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(pe),L.deleteSync(we),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,W=0){const z=Math.pow(2,-W),G=Math.floor(S.image.width*z),bt=Math.floor(S.image.height*z),At=I!==null?I.x:0,yt=I!==null?I.y:0;K.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,At,yt,G,bt),_.unbindTexture()},this.copyTextureToTexture=function(S,I,W=null,z=null,G=0,bt=0){let At,yt,Rt,It,Qt,ie,Pt,pe,Ie;const we=S.isCompressedTexture?S.mipmaps[bt]:S.image;if(W!==null)At=W.max.x-W.min.x,yt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Qt=W.min.y,ie=W.isBox3?W.min.z:0;else{const De=Math.pow(2,-G);At=Math.floor(we.width*De),yt=Math.floor(we.height*De),S.isDataArrayTexture?Rt=we.depth:S.isData3DTexture?Rt=Math.floor(we.depth*De):Rt=1,It=0,Qt=0,ie=0}z!==null?(Pt=z.x,pe=z.y,Ie=z.z):(Pt=0,pe=0,Ie=0);const Se=vt.convert(I.format),$e=vt.convert(I.type);let Tt;I.isData3DTexture?(K.setTexture3D(I,0),Tt=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(K.setTexture2DArray(I,0),Tt=L.TEXTURE_2D_ARRAY):(K.setTexture2D(I,0),Tt=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const je=_.getParameter(L.UNPACK_ROW_LENGTH),oe=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=_.getParameter(L.UNPACK_SKIP_PIXELS),Xn=_.getParameter(L.UNPACK_SKIP_ROWS),yi=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,we.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,we.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,It),_.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ie);const rs=S.isDataArrayTexture||S.isData3DTexture,Me=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const De=H.get(S),bi=H.get(I),be=H.get(De.__renderTarget),Ei=H.get(bi.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,be.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let as=0;as<Rt;as++)rs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(S).__webglTexture,G,ie+as),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(I).__webglTexture,bt,Ie+as)),L.blitFramebuffer(It,Qt,At,yt,Pt,pe,At,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||H.has(S)){const De=H.get(S),bi=H.get(I);_.bindFramebuffer(L.READ_FRAMEBUFFER,N),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let be=0;be<Rt;be++)rs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,G,ie+be):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,G),Me?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bi.__webglTexture,bt,Ie+be):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bi.__webglTexture,bt),G!==0?L.blitFramebuffer(It,Qt,At,yt,Pt,pe,At,yt,L.COLOR_BUFFER_BIT,L.NEAREST):Me?L.copyTexSubImage3D(Tt,bt,Pt,pe,Ie+be,It,Qt,At,yt):L.copyTexSubImage2D(Tt,bt,Pt,pe,It,Qt,At,yt);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Me?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Tt,bt,Pt,pe,Ie,At,yt,Rt,Se,$e,we.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,bt,Pt,pe,Ie,At,yt,Rt,Se,we.data):L.texSubImage3D(Tt,bt,Pt,pe,Ie,At,yt,Rt,Se,$e,we):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,bt,Pt,pe,At,yt,Se,$e,we.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,bt,Pt,pe,we.width,we.height,Se,we.data):L.texSubImage2D(L.TEXTURE_2D,bt,Pt,pe,At,yt,Se,$e,we);_.pixelStorei(L.UNPACK_ROW_LENGTH,je),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),_.pixelStorei(L.UNPACK_SKIP_ROWS,Xn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,yi),bt===0&&I.generateMipmaps&&L.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Y=0,$=0,ot=null,_.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const TM=.001;function AM(i,t){return{col:{x:Math.cos(i),y:Math.sin(t)*Math.sin(i)},row:{x:-Math.sin(i),y:Math.sin(t)*Math.cos(i)}}}function CM(i,t,e=TM){const n=g=>{const M=Math.hypot(g.x,g.y)||1;return{x:g.x/M,y:g.y/M}},s=n(i),r=n(t),a=g=>g<-e?-1:1,o=Math.abs(s.x)-Math.abs(r.x),l=o>e?!0:o<-e?!1:a(s.x)*s.y>=a(r.x)*r.y-e,c=l?s:r,u=l?r:s,f=a(c.x),h=a(u.y),d=(g,M)=>g?{dx:M,dy:0}:{dx:0,dy:M};return{ArrowRight:d(l,f),ArrowLeft:d(l,-f),ArrowDown:d(!l,h),ArrowUp:d(!l,-h)}}function RM(i,t){const{col:e,row:n}=AM(i,t);return CM(e,n)}function PM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ve;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Dh(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let M=0;M<a[u].length;++M)d.push(a[u][M][h]);const g=Dh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Dh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new sn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const M=u.getComponent(h,g);o.setComponent(h+f,g,M)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const O={tile:4892789,tileEdge:3969122,grassEdge:4035684,soilLight:10847856,grassTop:4168809,grassTop2:3904867,grassLight:6074495,grassDark:3111504,grassLip:3837279,soil:9334878,soilDark:6967879,soilDeep:4864563,cliff:7232080,cliffDark:5785150,cliffDeep:3812646,leafLight:9360293,leaf:7127183,leafMid:5154935,leafDark:3836512,pine:3115612,pineLight:4826221,pineDark:2388041,trunk:5914422,trunkDark:4534314,wall:16050388,timber:7031354,roof:14709567,roofDark:12145966,roofLight:15698774,stone:13616826,stoneDark:11182228,castleWall:15985371,castleShade:14340029,castleRoof:5604310,gold:15909198,windowLit:16765806,door:8014899,millWall:15918800,sail:14914627,sailDark:12086572,marble:16250094,dome:9418984,domeDark:6984652,cloud:16514045,water:9425898,rock:14868183,rockLight:15986923,rockDark:12564654,moss:5941367,flag:14829627,flowerPink:15965112,flowerYellow:15981647,flowerWhite:16775144,mushroom:14240058,smoke:16053490,white:16513006};function X(i,t,e={}){const n=new le().compose(new P(...e.p??[0,0,0]),new Si().setFromEuler(new ii(...e.r??[0,0,0])),new P(...e.s??[1,1,1]));return{geo:i.clone().applyMatrix4(n),color:t}}function tc(i,t,e,n,s=0,r=1){const a=new le().compose(new P(t,e,n),new Si().setFromEuler(new ii(0,s,0)),new P(r,r,r));return i.map(o=>({geo:o.geo.clone().applyMatrix4(a),color:o.color}))}function bn(i,t=.5,e=0){const n=i.map(({geo:r,color:a})=>{const o=r.index?r.toNonIndexed():r.clone();for(const f of Object.keys(o.attributes))f!=="position"&&o.deleteAttribute(f);const l=o.getAttribute("position"),c=new Float32Array(l.count*3),u=new kt(a);for(let f=0;f<l.count;f++){const h=l.getY(f)-e,d=t>0?.74+.26*Math.min(1,Math.max(0,h/t)):1;c[f*3]=u.r*d,c[f*3+1]=u.g*d,c[f*3+2]=u.b*d}return o.setAttribute("color",new sn(c,3)),o}),s=PM(n,!1);return s.computeVertexNormals(),s.computeBoundingSphere(),s}const Dt=(i,t,e)=>new Hn(i,t,e),ue=(i,t,e,n=8)=>new $s(i,t,e,n),Cn=(i,t,e=8)=>new Rr(i,t,e),Ce=(i,t=0)=>new Nc(i,t);function vn(i,t,e){const n=i.index?i.toNonIndexed():i,s=n.getAttribute("position"),r=c=>`${s.getX(c).toFixed(3)},${s.getY(c).toFixed(3)},${s.getZ(c).toFixed(3)}`,a=new Map;let o=e;const l=()=>(o=o*16807%2147483647,o/2147483647-.5);for(let c=0;c<s.count;c++){const u=r(c);a.has(u)||a.set(u,[l()*t,l()*t,l()*t]);const f=a.get(u);s.setXYZ(c,s.getX(c)+f[0],s.getY(c)+f[1],s.getZ(c)+f[2])}return n}function Fc(i,t,e){const n=new Gr;n.moveTo(-t/2,0),n.lineTo(t/2,0),n.lineTo(0,e),n.closePath();const s=new Ic(n,{depth:i,bevelEnabled:!1});return s.translate(0,0,-i/2),s.rotateY(Math.PI/2),s}function Qo(i,t){const e=new to(1,7,4);e.scale(i/2,.035,t/2);const n=e.getAttribute("position");for(let s=0;s<n.count;s++){const a=(n.getX(s)/(i/2)+1)/2;n.setZ(s,n.getZ(s)*(1-Math.pow(a,3)*.75)),n.setY(s,n.getY(s)+a*a*.05)}return e.translate(i/2,0,0),e}function LM(){return[X(ue(.14,.17,.05,9),O.soil,{p:[0,.025,0]}),X(Ce(.12,1),O.soilLight,{p:[0,.045,0],s:[1.15,.45,1.15]}),X(Ce(.025,0),O.stone,{p:[.11,.06,.05]}),X(ue(.03,.04,.3,6),O.leafMid,{p:[0,.17,0]}),X(Qo(.34,.23),O.leaf,{p:[0,.31,0],r:[.15,.25,.5]}),X(Qo(.34,.23),O.leafLight,{p:[0,.31,0],r:[-.15,Math.PI+.25,.5]}),X(Qo(.15,.1),O.leafLight,{p:[0,.32,0],r:[0,-Math.PI/2,1.15]})]}function qd(){return[X(ue(.055,.085,.36,6),O.trunk,{p:[0,.18,0]}),X(ue(.02,.03,.16,5),O.trunk,{p:[.08,.34,0],r:[0,0,-.7]}),X(vn(Ce(.3,1),.04,11),O.leafMid,{p:[0,.6,0],s:[1,.92,1]}),X(vn(Ce(.2,1),.03,12),O.leaf,{p:[.14,.74,.08]}),X(vn(Ce(.18,1),.03,13),O.leaf,{p:[-.14,.72,-.06]}),X(vn(Ce(.16,1),.03,14),O.leafLight,{p:[0,.86,.02]}),X(vn(Ce(.16,0),.02,15),O.leafDark,{p:[.05,.46,.2]})]}function DM(){return[X(ue(.05,.07,.24,6),O.trunkDark,{p:[0,.12,0]}),X(Cn(.32,.42,7),O.pineDark,{p:[0,.4,0]}),X(Cn(.26,.38,7),O.pine,{p:[0,.62,0],r:[0,.3,0]}),X(Cn(.18,.34,7),O.pineLight,{p:[0,.84,0],r:[0,.6,0]})]}function IM(i){return[X(ue(.008,.008,.08,4),O.leafMid,{p:[0,.04,0]}),X(Ce(.03,0),i,{p:[0,.09,0]})]}function NM(i=1){return[X(vn(Ce(.26,1),.06,30+i),O.rock,{p:[-.04,.17,0],r:[.3,.5,.2],s:[1.1,.78,1]}),X(vn(Ce(.16,0),.04,31+i),O.rockDark,{p:[.2,.1,.13],r:[.6,.1,.9],s:[1,.8,1]}),X(vn(Ce(.1,0),.03,32+i),O.rockLight,{p:[.1,.07,-.21],r:[.2,.8,.1]}),X(vn(Ce(.09,0),.02,33+i),O.moss,{p:[-.1,.32,.03],s:[1.5,.35,1.3]})]}function UM(){return[X(Dt(.68,.06,.56),O.stone,{p:[0,.03,0]}),X(Dt(.58,.36,.46),O.wall,{p:[0,.24,0]}),X(Fc(.72,.6,.34),O.roof,{p:[0,.42,0]}),X(Dt(.74,.025,.05),O.roofDark,{p:[0,.48,.21],r:[-.85,0,0]}),X(Dt(.74,.025,.05),O.roofDark,{p:[0,.48,-.21],r:[.85,0,0]}),X(Dt(.74,.025,.05),O.roofDark,{p:[0,.6,.1],r:[-.85,0,0]}),X(Dt(.74,.025,.05),O.roofDark,{p:[0,.6,-.1],r:[.85,0,0]}),X(Dt(.76,.05,.06),O.roofLight,{p:[0,.76,0]}),X(Dt(.1,.26,.1),O.stone,{p:[.18,.7,-.1]}),X(Dt(.13,.04,.13),O.stoneDark,{p:[.18,.84,-.1]}),X(Dt(.035,.36,.035),O.timber,{p:[-.29,.24,.23]}),X(Dt(.035,.36,.035),O.timber,{p:[.29,.24,.23]}),X(Dt(.035,.36,.035),O.timber,{p:[-.29,.24,-.23]}),X(Dt(.035,.36,.035),O.timber,{p:[.29,.24,-.23]}),X(Dt(.58,.03,.02),O.timber,{p:[0,.4,.235]}),X(Dt(.02,.03,.46),O.timber,{p:[.295,.4,0]}),X(Dt(.02,.03,.46),O.timber,{p:[-.295,.4,0]}),X(Dt(.12,.17,.02),O.door,{p:[0,.145,.235]}),X(ue(.06,.06,.02,8),O.door,{p:[0,.23,.235],r:[Math.PI/2,0,0]}),X(Ce(.012,0),O.gold,{p:[.035,.15,.25]}),...[-.17,.17].flatMap(t=>[X(Dt(.1,.1,.02),O.windowLit,{p:[t,.26,.235]}),X(Dt(.1,.012,.025),O.timber,{p:[t,.26,.24]}),X(Dt(.012,.1,.025),O.timber,{p:[t,.26,.24]}),X(Dt(.12,.03,.05),O.door,{p:[t,.2,.25]}),X(Ce(.022,0),O.flowerPink,{p:[t-.03,.225,.26]}),X(Ce(.022,0),O.flowerYellow,{p:[t+.02,.225,.26]})]),X(Dt(.02,.1,.1),O.windowLit,{p:[.295,.26,0]}),X(Dt(.02,.1,.1),O.windowLit,{p:[-.295,.26,0]}),X(vn(Ce(.07,0),.01,41),O.leafMid,{p:[-.29,.06,.27]}),X(vn(Ce(.06,0),.01,42),O.leaf,{p:[.3,.05,.28]})]}function FM(){return[X(ue(.34,.37,.06,8),O.stone,{p:[0,.03,0]}),X(ue(.2,.29,.72,8),O.millWall,{p:[0,.42,0]}),X(ue(.25,.27,.045,8),O.timber,{p:[0,.4,0]}),X(ue(.22,.21,.12,8),O.timber,{p:[0,.83,0]}),X(Cn(.28,.28,8),O.roof,{p:[0,1.03,0]}),X(ue(.008,.008,.22,4),O.timber,{p:[0,1.25,0]}),X(Dt(.13,.21,.03),O.door,{p:[0,.155,.278]}),X(ue(.065,.065,.03,8),O.door,{p:[0,.26,.274],r:[Math.PI/2,0,0]}),X(Dt(.08,.09,.02),O.windowLit,{p:[0,.52,.236],r:[-.13,0,0]}),X(Dt(.07,.08,.02),O.windowLit,{p:[.236,.32,.1],r:[0,Math.PI/2.6,0]}),X(Dt(.08,.08,.1),O.timber,{p:[0,.83,.21]})]}function OM(){const i=[X(ue(.045,.045,.06,8),O.timber,{r:[Math.PI/2,0,0]})];for(let t=0;t<4;t++){const e=t*Math.PI/2+Math.PI/4,n=(s,r=0)=>[Math.sin(e)*s+Math.cos(e)*r,Math.cos(e)*s-Math.sin(e)*r,0];i.push(X(Dt(.03,.46,.025),O.timber,{p:n(.23),r:[0,0,-e]})),i.push(X(Dt(.12,.32,.012),O.sail,{p:[...n(.29,.075).slice(0,2),.012],r:[0,0,-e]}));for(const s of[.18,.26,.34,.42])i.push(X(Dt(.13,.012,.02),O.sailDark,{p:[...n(s,.075).slice(0,2),.02],r:[0,0,-e]}))}return i}function BM(){const i=[X(Dt(.86,.07,.86),O.stoneDark,{p:[0,.035,0]}),X(Dt(.62,.3,.1),O.castleWall,{p:[0,.22,.3]}),X(Dt(.1,.3,.62),O.castleShade,{p:[.3,.22,0]}),X(Dt(.1,.3,.62),O.castleShade,{p:[-.3,.22,0]}),X(Dt(.62,.3,.1),O.castleShade,{p:[0,.22,-.3]}),X(Dt(.38,.62,.36),O.castleWall,{p:[.02,.38,-.04]}),X(Cn(.31,.34,4),O.castleRoof,{p:[.02,.86,-.04],r:[0,Math.PI/4,0]}),X(Dt(.07,.1,.02),O.windowLit,{p:[-.06,.52,.14]}),X(Dt(.07,.1,.02),O.windowLit,{p:[.1,.52,.14]}),X(Dt(.16,.18,.03),O.door,{p:[0,.16,.36]}),X(ue(.08,.08,.03,8),O.door,{p:[0,.25,.36],r:[Math.PI/2,0,0]}),X(Dt(.2,.025,.035),O.gold,{p:[0,.075,.37]})];for(let n=-2;n<=2;n++)i.push(X(Dt(.07,.07,.11),O.castleWall,{p:[n*.12,.405,.3]}));const t=[[-.32,.32,.56],[.32,.32,.56],[-.32,-.32,.86],[.32,-.32,.66]];for(const[n,s,r]of t)i.push(X(ue(.12,.13,r,8),O.castleWall,{p:[n,r/2+.05,s]})),i.push(X(ue(.14,.14,.05,8),O.castleShade,{p:[n,r+.06,s]})),i.push(X(Cn(.17,.32,8),O.castleRoof,{p:[n,r+.25,s]})),i.push(X(Ce(.02,0),O.gold,{p:[n,r+.42,s]})),i.push(X(Dt(.05,.08,.02),O.windowLit,{p:[n,r*.7,s+(s>0,.125)]}));const e=new Gr;e.moveTo(0,0),e.lineTo(.1,-.025),e.lineTo(0,-.055),e.closePath();for(const[n,s,r]of t.slice(0,2))i.push(X(ue(.006,.006,.14,4),O.timber,{p:[n,r+.46,s]})),i.push(X(new ja(e),O.flag,{p:[n,r+.53,s]}));return i.push(X(ue(.007,.007,.2,4),O.timber,{p:[-.32,1.38,-.32]})),i}const ec=(i,t=10)=>new to(i,t,Math.max(3,Math.round(t/2)),0,Math.PI*2,0,Math.PI/2);function kM(){const i=[X(Dt(.92,.06,.92),O.stoneDark,{p:[0,.03,0]}),X(Dt(.82,.05,.82),O.stone,{p:[0,.085,0]}),X(Dt(.3,.03,.08),O.stone,{p:[0,.125,.36]}),X(Dt(.6,.32,.46),O.marble,{p:[0,.27,-.04]}),X(Dt(.66,.04,.52),O.castleShade,{p:[0,.45,-.04]}),X(ue(.17,.19,.14,12),O.marble,{p:[0,.54,-.04]}),X(ue(.19,.19,.025,12),O.gold,{p:[0,.615,-.04]}),X(ec(.19,12),O.gold,{p:[0,.625,-.04],s:[1,1.15,1]}),X(Cn(.035,.16,6),O.gold,{p:[0,.92,-.04]}),...[-.2,-.07,.07,.2].map(t=>X(ue(.024,.028,.27,6),O.white,{p:[t,.25,.22]})),X(Dt(.5,.035,.1),O.castleShade,{p:[0,.4,.22]}),X(Fc(.5,.1,.07),O.gold,{p:[0,.415,.22]}),X(Dt(.11,.17,.02),O.door,{p:[0,.21,.19]}),X(Dt(.07,.09,.02),O.windowLit,{p:[-.17,.3,.19]}),X(Dt(.07,.09,.02),O.windowLit,{p:[.17,.3,.19]})];for(const t of[-.34,.34])i.push(X(ue(.1,.115,.56,10),O.marble,{p:[t,.38,-.1]})),i.push(X(ue(.12,.12,.03,10),O.castleShade,{p:[t,.675,-.1]})),i.push(X(ec(.11,10),O.castleRoof,{p:[t,.69,-.1],s:[1,1.3,1]})),i.push(X(Cn(.02,.1,5),O.gold,{p:[t,.88,-.1]})),i.push(X(Dt(.05,.08,.02),O.windowLit,{p:[t,.5,.01]}));return i}function zM(){return[X(ue(.38,.4,.06,12),O.stoneDark,{p:[0,.03,0]}),X(Dt(.3,.2,.24),O.wall,{p:[.2,.16,.18]}),X(Fc(.34,.28,.13),O.roof,{p:[.2,.26,.18]}),X(Dt(.07,.1,.02),O.door,{p:[.2,.11,.305]}),X(ue(.2,.25,.86,12),O.marble,{p:[0,.49,-.04]}),X(ue(.215,.215,.035,12),O.stone,{p:[0,.36,-.04]}),X(ue(.225,.225,.05,12),O.stone,{p:[0,.92,-.04]}),X(Dt(.06,.1,.02),O.windowLit,{p:[0,.55,.19]}),X(Dt(.06,.1,.02),O.windowLit,{p:[-.19,.7,0],r:[0,-Math.PI/2.4,0]}),X(ec(.23,12),O.dome,{p:[0,.945,-.04]}),X(Dt(.06,.2,.2),O.domeDark,{p:[0,1.06,.06],r:[-.55,0,0]}),X(ue(.035,.045,.34,8),O.gold,{p:[0,1.15,.13],r:[-.95,0,0]}),X(Cn(.03,.12,6),O.gold,{p:[0,1.4,-.04]})]}function GM(){const i=[];for(const[e,n,s]of[[0,0,.2],[-.2,.08,.15],[.2,-.06,.16],[.06,.2,.13],[-.08,-.2,.13]])i.push(X(Ce(s,1),O.cloud,{p:[e,.1,n],s:[1.25,.6,1.25]}));const t=.52;i.push(X(vn(Cn(.36,.42,7),.04,71),O.soil,{p:[0,t-.21,0],r:[Math.PI,0,0]})),i.push(X(ue(.37,.36,.07,7),O.grassTop,{p:[0,t+.035,0]})),i.push(X(vn(Ce(.06,0),.01,72),O.cliff,{p:[.12,t-.3,.06]})),i.push(X(Dt(.06,.32,.015),O.water,{p:[.24,t-.12,.27],r:[0,-.8,0]})),i.push(X(Dt(.24,.26,.22),O.castleWall,{p:[0,t+.2,-.03]})),i.push(X(Cn(.19,.2,4),O.castleRoof,{p:[0,t+.43,-.03],r:[0,Math.PI/4,0]})),i.push(X(Dt(.06,.1,.02),O.door,{p:[0,t+.12,.085]}));for(const[e,n,s]of[[-.19,.12,.34],[.2,.1,.3],[.05,-.2,.42]])i.push(X(ue(.065,.07,s,8),O.castleWall,{p:[e,t+.07+s/2,n]})),i.push(X(Cn(.09,.17,8),O.castleRoof,{p:[e,t+.07+s+.085,n]})),i.push(X(Ce(.015,0),O.gold,{p:[e,t+.07+s+.18,n]}));return i.push(...tc(qd(),-.22,t+.07,-.16,.4,.35)),i}let Ma=null,Sa=null;function HM(){if(!Sa){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(24,40,20,0.55)"),n.addColorStop(.55,"rgba(24,40,20,0.28)"),n.addColorStop(1,"rgba(24,40,20,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new Qa(t);Sa={geo:new ns(1,1).rotateX(-Math.PI/2),mat:new fi({map:s,transparent:!0,depthWrite:!1,toneMapped:!1})}}const i=new Ae(Sa.geo,Sa.mat);return i.renderOrder=1,i}const VM={0:.42,1:.62,2:.7,3:.62,4:.86,5:.9,6:.72,7:.7,[Re]:.56};function WM(){if(Ma)return Ma;const i=new Ir({vertexColors:!0,flatShading:!0,roughness:.82,metalness:0}),t=i.clone();t.side=Fn;const e=new Ir({color:O.smoke,flatShading:!0,roughness:1,transparent:!0,opacity:.85}),n=new Map([[0,bn(LM(),.3)],[1,bn(qd(),.7)],[2,bn(UM(),.5)],[3,bn(FM(),.8)],[4,bn(BM(),.9)],[5,bn(kM(),.9)],[6,bn(zM(),1)],[7,bn(GM(),.4)],[Re,bn(NM(),.3)]]),s=new Gr;return s.moveTo(0,0),s.lineTo(.17,-.04),s.lineTo(0,-.1),s.closePath(),Ma={material:i,doubleSided:t,smokeMaterial:e,geos:n,sails:bn(OM(),0),flag:bn([X(new ja(s),O.flag)],0),puff:Ce(1,0)},Ma}const XM={0:1.9,1:1.45,2:1.32,3:1.3,4:1.3,5:1.25,6:1.25,7:1.3,[Re]:1.45};function jo(i,t){const e=WM(),n=new Jn,s=new Jn;s.scale.setScalar(XM[i]??1),n.add(s);const r=new Ae(e.geos.get(i),t??e.material);if(r.castShadow=!t,r.receiveShadow=!t,s.add(r),!t){const l=HM();l.scale.setScalar(VM[i]??.8),l.position.y=.004,n.add(l)}const a=Math.random()*10,o=[];if(i===3){const l=new Ae(e.sails,t??e.doubleSided);l.position.set(0,.83,.275),l.castShadow=!t,s.add(l),o.push(c=>l.rotation.z=-c*.8-a)}if(i===3||i===Af){const l=new Ae(e.flag,t??e.doubleSided);i===3?l.position.set(0,1.35,0):l.position.set(-.32,1.47,-.32),s.add(l),o.push(c=>l.rotation.y=Math.sin(c*2.4+a)*.4-.3)}if(i===2&&!t){const l=[0,1,2].map(()=>{const u=new Ae(e.puff,e.smokeMaterial);return s.add(u),u}),c=new P(.18,.88,-.1);o.push(u=>{l.forEach((f,h)=>{const d=(u*.35+h/3+a)%1;f.position.set(c.x+d*.08,c.y+d*.42,c.z-d*.04),f.scale.setScalar(.035+Math.sin(d*Math.PI)*.05)})}),o[o.length-1](0)}if(i===0||i===1){const l=i===0?.07:.025;o.push(c=>r.rotation.z=Math.sin(c*1.6+a)*l)}return i===Gn&&o.push(l=>{r.position.y=Math.sin(l*1.2+a)*.025,r.rotation.y=Math.sin(l*.4+a)*.12}),{root:n,tick:o.length?l=>o.forEach(c=>c(l)):void 0}}const cn={linear:i=>i,inQuad:i=>i*i,outCubic:i=>1-(1-i)**3,inCubic:i=>i**3,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2};class $M{constructor(){this.list=[],this.speed=1}get active(){return this.list.length>0}run(t,e,n=cn.outCubic){return new Promise(s=>{const r=t*this.speed;if(r<=0){e(1),s();return}e(n(0)),this.list.push({elapsed:0,duration:r,ease:n,update:e,resolve:s})})}wait(t){return this.run(t,()=>{},cn.linear)}tick(t){if(!this.list.length)return;const e=[];for(const n of this.list){n.elapsed+=t;const s=Math.min(1,n.elapsed/n.duration);n.update(n.ease(s)),s>=1&&e.push(n)}if(e.length){this.list=this.list.filter(n=>!e.includes(n));for(const n of e)n.resolve()}}finishAll(){const t=this.list;this.list=[];for(const e of t)e.update(e.ease(1)),e.resolve()}}const Kd=.5,gn=-.03,ur=.2;function io(i=an){return i/2+Kd}function Zd(i){return 1.25+i*.07}function Jd(i=an){return gn-ur-Zd(i)-.12}function Qd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ts(i,t,e,n){const s=Math.sin(i*127.1+t*311.7+e*74.7+n*19.19)*43758.5453;return(s-Math.floor(s))*2-1}function Ns(i,t,e,n){i.computeVertexNormals();const s=i.getAttribute("position"),r=i.getAttribute("normal"),a=new Float32Array(s.count*3),o=new kt(t),l=new kt(n??3812646);for(let c=0;c<s.count;c+=3){const u=(r.getY(c)+r.getY(c+1)+r.getY(c+2))/3,f=c/3;for(let h=0;h<3;h++){const d=u>.7?o:u<-.7?l:e(s.getY(c+h),f);a.set([d.r,d.g,d.b],(c+h)*3)}}return i.setAttribute("color",new sn(a,3)),i}const nc=(i,t)=>{const e=new kt(i),n=new kt(t);return s=>e.clone().lerp(n,cm.clamp(s,0,1))};function YM(){const i=new Hn(.92,.06,.92).toNonIndexed();return i.translate(0,-.03,0),i.deleteAttribute("uv"),Ns(i,O.tile,()=>new kt(O.tileEdge))}function qM(){const i=new Hn(1,.12,1).toNonIndexed().translate(0,-.06,0),t=new Hn(1,.34,1).toNonIndexed().translate(0,-.29,0),e=nc(O.soilLight,O.soilDark);return jd([Ns(i,O.tile,()=>new kt(O.grassLip)),Ns(t,O.soil,n=>e((-.12-n)/.34))])}function jd(i){const t=["position","normal","color"],e=new Ve;for(const n of t){const s=i.reduce((o,l)=>o+l.getAttribute(n).array.length,0),r=new Float32Array(s);let a=0;for(const o of i){const l=o.getAttribute(n).array;r.set(l,a),a+=l.length}e.setAttribute(n,new sn(r,3))}return e}function KM(i){const t=io(i),e=Math.max(4,Math.round(i*1.2)),n=[],s=new Hn(t*2,ur,t*2,e*2,1,e*2);s.translate(0,gn-ur/2,0);const r=s.getAttribute("position");for(let M=0;M<r.count;M++){const p=r.getX(M),m=r.getY(M),y=r.getZ(M),T=Math.abs(Math.abs(p)-t)<1e-4||Math.abs(Math.abs(y)-t)<1e-4;m>gn-1e-4&&!T&&r.setY(M,m+Ts(p,0,y,1)*.012)}const a=nc(O.grassEdge,O.grassDark),o=[new kt(O.grassTop),new kt(O.grassTop2),new kt(O.grassTop).lerp(new kt(O.grassLight),.18)];n.push(Ns(s.toNonIndexed(),O.grassTop,M=>a((gn-M)/ur)));{const M=n[0],p=M.getAttribute("position"),m=M.getAttribute("normal"),y=M.getAttribute("color");for(let T=0;T<p.count;T+=3){if(m.getY(T)<.7)continue;const x=(p.getX(T)+p.getX(T+1)+p.getX(T+2))/3,E=(p.getZ(T)+p.getZ(T+1)+p.getZ(T+2))/3,b=o[Math.floor((Ts(x,2,E,3)+1)*1.5)%3];for(let C=0;C<3;C++)y.setXYZ(T+C,b.r,b.g,b.b)}}const l=Zd(i),c=gn-ur,u=new Hn(t*2-.02,l,t*2-.02,e,2,e);u.translate(0,c-l/2,0);const f=u.getAttribute("position");for(let M=0;M<f.count;M++){const p=f.getX(M),m=f.getY(M),y=f.getZ(M);if(m>c-1e-4)continue;const T=Ts(p,m,y,7);m<c-l+1e-4&&f.setY(M,m-.04-Math.abs(T)*.14);const x=Math.abs(Math.abs(p)-(t-.01))<.001,E=Math.abs(Math.abs(y)-(t-.01))<.001;x&&f.setX(M,p+Math.sign(p)*Ts(p,m,y,11)*.045),E&&f.setZ(M,y+Math.sign(y)*Ts(p,m,y,13)*.045)}const h=nc(O.soilLight,O.soilDark);n.push(Ns(u.toNonIndexed(),O.soil,(M,p)=>h((c-M)/l+Ts(p,0,0,5)*.05),O.soilDeep));const d=Qd(i*977+3),g=Math.round(i*1.4);for(let M=0;M<g;M++){const p=M%4,m=(d()*2-1)*(t-.4),y=c-.25-d()*(l-.5),T=.09+d()*.12,x=t+T*.15,[E,b]=p===0?[m,x]:p===1?[x,m]:p===2?[m,-x]:[-x,m],C=new Pc(T,0);C.scale(1.3,.8,1.1),C.rotateY(d()*6),C.translate(E,y,b);const v=new kt(d()>.5?O.cliff:O.cliffDark);n.push(Ns(C,v,()=>v,O.cliffDeep))}for(const M of n)M.getAttribute("uv")&&M.deleteAttribute("uv");return jd(n)}function ZM(i){const t=Qd(i*131+7),e=i/2,n=io(i),s=[],r=()=>{const a=Math.floor(t()*4),o=(t()*2-1)*(n-.12),l=e+.1+t()*(Kd-.2);return a===0?[o,-l]:a===1?[o,l]:a===2?[-l,o]:[l,o]};for(let a=0;a<i*4;a++){const[o,l]=r(),c=t();if(c<.34)for(let u=0;u<3;u++)s.push(X(new Rr(.018,.09+t()*.05,3),u?O.leafMid:O.leaf,{p:[o+(u-1)*.025,gn+.05,l+(t()-.5)*.03],r:[(t()-.5)*.5,0,(t()-.5)*.5]}));else c<.6?s.push(...tc(IM([O.flowerPink,O.flowerYellow,O.flowerWhite][a%3]),o,gn,l,t()*6,.8)):c<.78?s.push(X(Ce(.04+t()*.04,0),t()>.5?O.rock:O.rockDark,{p:[o,gn+.02,l],s:[1.3,.6,1.1],r:[0,t()*6,0]})):c<.9?s.push(X(Ce(.08+t()*.04,0),O.leafDark,{p:[o,gn+.05,l],s:[1.2,.8,1.1]})):(s.push(X(new $s(.014,.018,.06,5),O.flowerWhite,{p:[o,gn+.03,l]})),s.push(X(new Rr(.05,.04,6),O.mushroom,{p:[o,gn+.08,l]})))}for(const[a,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])s.push(...tc(DM(),a*(n-.24),gn,o*(n-.24),t()*6,.5+t()*.1));return s}function JM(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");return e.filter="blur(22px)",e.fillStyle="rgba(52, 54, 86, 0.62)",e.fillRect(256*.22,256*.22,256*.56,256*.56),new Qa(t)}function QM(i=an){const t=new Jn,e=new Ir({vertexColors:!0,flatShading:!0,roughness:1,metalness:0}),n=new Ae(new ns(80,80).rotateX(-Math.PI/2),new m0({color:3422038,opacity:.34}));n.receiveShadow=!0;const s=new Ae(new ns(1,1).rotateX(-Math.PI/2),new fi({map:JM(),transparent:!0,depthWrite:!1,toneMapped:!1}));s.renderOrder=-1,t.add(n,s);let r=null,a=null;const o=l=>{for(const f of[r,a])f&&(t.remove(f),f.geometry.dispose());r=new Ae(KM(l),e),r.receiveShadow=!0,r.castShadow=!0,a=new Ae(bn(ZM(l),.2,gn),e),a.receiveShadow=!0,a.castShadow=!0,t.add(r,a);const c=Jd(l);n.position.y=c+.01;const u=io(l)*2*1.9;s.scale.set(u,1,u),s.position.set(-.6,c+.015,.35)};return o(i),{group:t,tick:()=>{},setSize:o}}let tl=null;const el={iso:{azimuth:Math.PI/4,elevation:Math.atan(1/Math.SQRT2)},cozy:{azimuth:0,elevation:.88,fov:30}},Xi=1,zi=Math.PI/2,jM=Math.max(...Yi)**2;let Gi=an,Hi=Gi*Xi/2;function We(i){const{x:t,y:e}=Sr(i,Gi);return new P((t+.5)*Xi-Hi,0,(e+.5)*Xi-Hi)}const tS=new kt(1.28,1.24,1.05),eS=new kt(1.42,1.2,.72),nS=new kt(1.25,.78,.62),iS=new kt(1.16,1.2,1.1),sS=10481864,nl=.62,rS=[15655622,14865328,O.grassLight],aS=[O.rockLight,O.rock,14865328];function oS(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Qa(i);return n.colorSpace=Ke,n}function lS(){const i=document.createElement("canvas");i.width=4,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0.95)"),t.fillStyle=e,t.fillRect(0,0,4,64);const n=new Qa(i);return n.colorSpace=Ke,n}class cS{constructor(t,e){this.container=t,this.scene=new Fu,this.ortho=new Nr(-5,5,5,-5,.1,120),this.perspective=new En(30,1,.5,200),this.camera=this.ortho,this.tweens=new $M,this.tileBase=[],this.side=an,this.spin=0,this.spinGen=0,this.fitOffset=new P(0,10,10),this.pieces=new Map,this.pieceLayer=new Jn,this.fxLayer=new Jn,this.raycaster=new A0,this.groundPlane=new hi(new P(0,1,0),0),this.ghost=null,this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.frames=[],this.view="iso",this.arrows=new Map,this.pieceYaw=0,this.insets={top:0,right:0,bottom:0,left:0},this.reducedMotion=!1,this.dirty=!0,this.lastFrame=0,this.lastIdleRender=0,this.clock=0,this.shake=0,this.rafId=0,this.width=0,this.height=0,this.baseCamPos=new P,this.ringPool=[],this.particlePool=[],this.glowPool=[],this.animGen=0,this.performing=!1,this.leaning=new Map,this.lost=!1,this.dprQuery=null,this.handleContextLost=s=>{s.preventDefault(),this.lost=!0,this.stopShake()},this.handleContextRestored=()=>{this.lost=!1,this.dirty=!0,this.onContextRestored?.()},this.onPixelRatioChange=()=>{this.watchPixelRatio(),this.resize()},this.renderer=e??new wM({antialias:!0,alpha:!0,powerPreference:"high-performance"});const n=Math.min(window.innerWidth,window.innerHeight)<700;this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=dr,this.renderer.outputColorSpace=Ke,this.renderer.toneMapping=gc,this.renderer.toneMappingExposure=1,this.renderer.setClearColor(0,0),this.canvas=this.renderer.domElement,this.canvas.className="board-canvas",t.appendChild(this.canvas),this.canvas.addEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this.ghostMaterial=new Ir({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.6,depthWrite:!1,roughness:.9}),this.buildLights(n),Gi=an,Hi=Gi*Xi/2,this.side=Gi,this.world=QM(Gi),this.scene.add(this.world.group),this.tileMaterial=new Ir({vertexColors:!0,flatShading:!0,roughness:.92}),this.buildTiles(),this.scene.add(this.pieceLayer,this.fxLayer),this.buildFxPools(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.watchPixelRatio(),this.resize(),this.loop=this.loop.bind(this),this.rafId=requestAnimationFrame(this.loop)}buildLights(t){this.scene.add(new eh(16052991,10327979,1.75));const e=new _a(16773600,1.8);e.position.set(8,11,-4.5),e.castShadow=!0,e.shadow.mapSize.set(t?1024:2048,t?1024:2048);const n=e.shadow.camera;n.left=-9,n.right=9,n.top=9,n.bottom=-9,n.near=1,n.far=40,e.shadow.bias=-5e-4,e.shadow.normalBias=.03,e.shadow.radius=6,e.shadow.blurSamples=16,this.scene.add(e);const s=new _a(14673663,.25);s.position.set(-6,4,7),this.scene.add(s)}get cellCount(){return this.side*this.side}buildTiles(){this.tiles&&(this.scene.remove(this.tiles),this.tiles.geometry.dispose(),this.tiles.dispose()),this.tileBase.length=0;const t=new $u(YM(),this.tileMaterial,this.cellCount),e=new le;for(let n=0;n<this.cellCount;n++){const s=We(n);e.makeTranslation(s.x,0,s.z),t.setMatrixAt(n,e);const{x:r,y:a}=Sr(n,this.side),o=Math.sin(n*91.17)*43758.5453,l=o-Math.floor(o),c=((r+a)%2?.93:1)*(.97+l*.05),u=l>.75?.04:0;this.tileBase.push(new kt(c*(1+u),c,c*(.97-u))),t.setColorAt(n,this.tileBase[n])}t.receiveShadow=!0,t.castShadow=!0,this.scene.add(t),this.tiles=t}setBoardSize(t){if(t!==this.side){this.cancelAnimations();for(const e of[...this.pieces.keys()])this.removePiece(e);this.clearGhost(),this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.setSuggestions([]),this.side=t,Gi=t,Hi=t*Xi/2,this.buildTiles(),this.applyHighlights(),this.world.setSize(t),this.fitCamera()}}getBoardSize(){return this.side}buildFxPools(){const t=new vr(.42,.5,32);t.rotateX(-Math.PI/2);for(let o=0;o<6;o++){const l=new Ae(t,new fi({color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1}));l.visible=!1,this.ringPool.push(l),this.fxLayer.add(l)}const e=new Uc(.06,0);for(let o=0;o<56;o++){const l=new Ae(e,new fi({color:16777215,transparent:!0,toneMapped:!1}));l.visible=!1,this.particlePool.push(l),this.fxLayer.add(l)}const n=new vr(.585,.675,4,1,Math.PI/4);n.rotateX(-Math.PI/2);for(let o=0;o<12;o++){const l=new Ae(n,new fi({color:16777215,transparent:!0,depthWrite:!1,blending:Rs,toneMapped:!1}));l.visible=!1,l.renderOrder=2,this.frames.push(l),this.fxLayer.add(l)}const s=new vr(.5,.57,4,1,Math.PI/4);s.rotateX(-Math.PI/2),this.suggest=new $u(s,new fi({color:sS,transparent:!0,opacity:nl,depthWrite:!1,blending:Rs,toneMapped:!1}),jM),this.suggest.count=0,this.suggest.visible=!1,this.suggest.renderOrder=2,this.suggest.frustumCulled=!1,this.fxLayer.add(this.suggest);const r=oS(),a=lS();for(let o=0;o<3;o++){const l=new Pm(new bd({map:r,color:16765802,transparent:!0,depthWrite:!1,blending:Rs,toneMapped:!1})),c=new Ae(new $s(.42,.48,2.2,20,1,!0).translate(0,1.1,0),new fi({map:a,color:16765802,transparent:!0,depthWrite:!1,side:Fn,blending:Rs,toneMapped:!1}));l.visible=c.visible=!1,this.glowPool.push({sprite:l,column:c}),this.fxLayer.add(l,c)}}isContextLost(){return this.lost||this.renderer.getContext().isContextLost()}markDirty(){this.dirty=!0}setReducedMotion(t){this.reducedMotion=t,this.tweens.speed=t?.35:1;for(const e of this.frames){const n=e.material;n.opacity=n.userData.base??1}this.suggest.material.opacity=nl,this.updateLean(),this.dirty=!0}setView(t){this.resetLean(),this.view=t,this.pieceYaw=t==="cozy"?-.6:0;for(const e of this.pieces.values())e.model.root.rotation.y=this.pieceYaw;this.ghost&&(this.ghost.model.root.rotation.y=this.pieceYaw),this.fitCamera()}getView(){return this.view}setInsets(t){Object.keys(t).every(n=>Math.abs(t[n]-this.insets[n])<.5)||(this.insets={...t},this.fitCamera())}resize(){const t=this.container.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),n=Math.max(1,Math.floor(t.height));!this.applyPixelRatio()&&e===this.width&&n===this.height||(this.width=e,this.height=n,this.renderer.setSize(e,n,!1),this.fitCamera(),this.renderNow())}applyPixelRatio(){const t=Math.min(window.innerWidth,window.innerHeight)<700,e=Math.min(window.devicePixelRatio||1,t?2:1.75);return e===this.renderer.getPixelRatio()?!1:(this.renderer.setPixelRatio(e),!0)}watchPixelRatio(){this.dprQuery?.removeEventListener("change",this.onPixelRatioChange),this.dprQuery=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,this.dprQuery?.addEventListener?.("change",this.onPixelRatioChange)}renderNow(){document.hidden||this.lost||(this.renderer.render(this.scene,this.camera),this.dirty=!1)}fitCamera(){const t=el[this.view],e=this.width,n=this.height,s=this.insets,r=Math.max(60,e-s.left-s.right),a=Math.max(60,n-s.top-s.bottom),o=!t.fov&&r/a<.85?.9:t.elevation,l=new P(Math.sin(t.azimuth)*Math.cos(o),Math.sin(o),Math.cos(t.azimuth)*Math.cos(o)),c=[],u=!t.fov&&r/a>1.1,f=u?io(this.side)+.1:Hi+.22,h=u?[Jd(this.side),.9]:[-.45,.9];for(const p of[-f,f])for(const m of[-f,f])for(const y of h)c.push(new P(p,y,m));const d=s.left+r/2,g=s.top+a/2,M=1.04;if(t.fov){const p=this.perspective;p.fov=t.fov,p.aspect=e/n,p.clearViewOffset(),p.updateProjectionMatrix();let m=24,y={minX:0,maxX:0,minY:0,maxY:0};for(let C=0;C<10;C++){p.position.copy(l).multiplyScalar(m),p.lookAt(0,0,0),p.updateMatrixWorld(),y={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const w of c){const R=w.clone().project(p);y.minX=Math.min(y.minX,R.x),y.maxX=Math.max(y.maxX,R.x),y.minY=Math.min(y.minY,R.y),y.maxY=Math.max(y.maxY,R.y)}if(C===9)break;const v=Math.max((y.maxX-y.minX)/(2*r/e),(y.maxY-y.minY)/(2*a/n));m*=v*M}const T=(y.minX+y.maxX)/2,x=(y.minY+y.maxY)/2,E=d/e*2-1,b=1-g/n*2;p.setViewOffset(e,n,(T-E)*e/2,(b-x)*n/2,e,n),p.updateProjectionMatrix(),this.camera=p,this.fitOffset.copy(l).multiplyScalar(m)}else{const p=this.ortho;p.position.copy(l).multiplyScalar(30),p.lookAt(0,0,0),p.updateMatrixWorld();const m=p.matrixWorldInverse;let y=1/0,T=-1/0,x=1/0,E=-1/0;for(const w of c){const R=w.clone().applyMatrix4(m);y=Math.min(y,R.x),T=Math.max(T,R.x),x=Math.min(x,R.y),E=Math.max(E,R.y)}const b=Math.max((T-y)/r,(E-x)/a)*M,C=(y+T)/2,v=(x+E)/2;p.left=C-d*b,p.right=p.left+e*b,p.top=v+g*b,p.bottom=p.top-n*b,p.updateProjectionMatrix(),this.camera=p,this.fitOffset.copy(l).multiplyScalar(30)}this.applySpin()}applySpin(){this.camera.position.copy(this.fitOffset).applyAxisAngle(new P(0,1,0),this.spin),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.baseCamPos.copy(this.camera.position),this.dirty=!0}getSpinQuarter(){return(Math.round(this.spin/zi)%4+4)%4}rotate(t){this.glideSpin(Math.round(this.spin/zi)*zi+t*zi)}dragSpin(t){this.spinGen++,this.spin=t,this.applySpin()}getSpin(){return this.spin}endSpin(t=0){const e=Math.abs(t)>2.5?Math.sign(t)*.5:0;this.glideSpin(Math.round(this.spin/zi+e)*zi)}glideSpin(t){const e=++this.spinGen,n=this.spin;if(Math.abs(t-n)<1e-4||this.reducedMotion){this.spin=t,this.applySpin();return}this.tweens.run(Math.min(420,240+Math.abs(t-n)*120),s=>{e===this.spinGen&&(this.spin=n+(t-n)*s,this.applySpin())},cn.inOutSine)}tilePixelSize(){const t=this.worldToScreen(new P(-.5,0,0)),e=this.worldToScreen(new P(.5,0,0));return Math.hypot(t.x-e.x,t.y-e.y)}worldToScreen(t){const e=t.clone().project(this.camera),n=this.canvas.getBoundingClientRect();return{x:n.left+(e.x+1)/2*n.width,y:n.top+(1-e.y)/2*n.height}}cellToScreen(t,e=.5){return this.worldToScreen(We(t).setY(e))}screenAxes(){const t=this.worldToScreen(new P(0,0,0)),e=this.worldToScreen(new P(1,0,0)),n=this.worldToScreen(new P(0,0,1));return{col:{x:e.x-t.x,y:e.y-t.y},row:{x:n.x-t.x,y:n.y-t.y}}}arrowStep(t){const e=this.getSpinQuarter(),n=`${this.view}:${e}`;let s=this.arrows.get(n);if(!s){const r=el[this.view];s=RM(r.azimuth+e*zi,r.elevation),this.arrows.set(n,s)}return{...s[t]}}pick(t,e){const n=this.canvas.getBoundingClientRect(),s=new ut((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=null;const a=new P;if(this.raycaster.ray.intersectPlane(this.groundPlane,a)){const l=Math.floor((a.x+Hi)/Xi),c=Math.floor((a.z+Hi)/Xi);l>=0&&c>=0&&l<this.side&&c<this.side&&(r=c*this.side+l)}if(r!==null&&!this.pieces.has(r))return r;const o=this.raycaster.intersectObjects(this.pieceLayer.children,!0);for(const l of o){let c=l.object;for(;c&&c.userData.index===void 0;)c=c.parent;if(c)return c.userData.index}return r}addPiece(t,e){this.removePiece(t);const n=jo(e);n.root.position.copy(We(t)),n.root.rotation.y=this.pieceYaw,n.root.userData.index=t,n.tick?.(this.clock),this.pieceLayer.add(n.root);const s={piece:e,model:n};return this.pieces.set(t,s),this.dirty=!0,s}removePiece(t){const e=this.pieces.get(t);e&&(this.pieceLayer.remove(e.model.root),this.pieces.delete(t),this.leaning.get(t)===e&&this.leaning.delete(t),this.dirty=!0)}sync(t){this.performing&&this.cancelAnimations(),t.length!==this.cellCount&&this.setBoardSize(Math.round(Math.sqrt(t.length)));for(let e=0;e<this.cellCount;e++){const n=t[e],s=this.pieces.get(e);n===Te?s&&this.removePiece(e):!s||s.piece!==n?this.addPiece(e,n):(s.model.root.position.copy(We(e)),s.model.root.rotation.set(0,this.pieceYaw,0),s.model.root.scale.setScalar(1))}this.leaning.clear(),this.dirty=!0}setHover(t,e,n,s=!1){if(this.highlight.hover=s?null:t,this.highlight.blocked=s?t:null,this.highlight.merge=n,this.applyHighlights(),this.updateLean(),t===null||e===null||s){this.clearGhost();return}if(!this.ghost||this.ghost.piece!==e){this.clearGhost();const r=jo(e,this.ghostMaterial);r.root.rotation.y=this.pieceYaw,this.fxLayer.add(r.root),this.ghost={piece:e,model:r,index:t}}this.ghost.index=t,this.ghost.model.root.position.copy(We(t)),this.dirty=!0}setCursor(t){this.highlight.cursor=t,this.applyHighlights()}setSuggestions(t){const e=[...new Set(t)].filter(s=>Number.isInteger(s)&&s>=0&&s<this.cellCount),n=new le;e.forEach((s,r)=>{const a=We(s);this.suggest.setMatrixAt(r,n.makeTranslation(a.x,.014,a.z))}),this.suggest.count=e.length,this.suggest.visible=e.length>0,this.suggest.instanceMatrix.needsUpdate=!0,this.dirty=!0}clearGhost(){this.ghost&&(this.fxLayer.remove(this.ghost.model.root),this.ghost=null,this.dirty=!0)}applyHighlights(){const t=new Set(this.highlight.merge),e=new kt;for(let s=0;s<this.cellCount;s++)e.copy(this.tileBase[s]),t.has(s)&&e.multiply(eS),s===this.highlight.cursor&&e.multiply(iS),s===this.highlight.hover&&e.multiply(tS),s===this.highlight.blocked&&e.multiply(nS),this.tiles.setColorAt(s,e);this.tiles.instanceColor.needsUpdate=!0;const n=[];this.highlight.hover!==null&&n.push([this.highlight.hover,16774084,1]),this.highlight.blocked!==null&&n.push([this.highlight.blocked,16752506,.8]),this.highlight.cursor!==null&&this.highlight.cursor!==this.highlight.hover&&n.push([this.highlight.cursor,14217471,.8]);for(const s of this.highlight.merge)n.push([s,16763213,.75]);this.frames.forEach((s,r)=>{const a=n[r];if(s.visible=!!a,!a)return;const o=We(a[0]);s.position.set(o.x,.012,o.z);const l=s.material;l.color.set(a[1]),l.userData.base=a[2],l.opacity=a[2]}),this.dirty=!0}resetLean(){for(const[t,e]of this.leaning)e.model.root.position.copy(We(t)),e.model.root.rotation.set(0,this.pieceYaw,0),this.dirty=!0;this.leaning.clear()}updateLean(){const t=this.highlight.hover,e=this.highlight.merge;if(this.reducedMotion||this.performing||t===null||!e.length){this.resetLean();return}for(const[o,l]of this.leaning)e.includes(o)&&this.pieces.get(o)===l||(l.model.root.position.copy(We(o)),l.model.root.rotation.set(0,this.pieceYaw,0),this.leaning.delete(o));const n=We(t),s=Math.sin(this.clock*6.5),r=new Si().setFromAxisAngle(new P(0,1,0),this.pieceYaw),a=new P;for(const o of e){const l=this.pieces.get(o);if(!l||l.piece===Re)continue;const c=We(o),u=n.clone().sub(c).setY(0);if(u.lengthSq()<1e-6)continue;u.normalize();const f=l.model.root;f.position.copy(c).addScaledVector(u,.06+.02*s),a.set(u.z,0,-u.x),f.quaternion.setFromAxisAngle(a,.07+.02*s).multiply(r),this.leaning.set(o,l)}this.dirty=!0}ring(t,e,n,s=520){const r=this.ringPool.find(o=>!o.visible);if(!r)return;const a=r.material;a.color.set(e),r.position.set(t.x,.03,t.z),r.visible=!0,this.tweens.run(s,o=>{r.scale.setScalar(.4+o*n),a.opacity=.9*(1-o)}).then(()=>r.visible=!1)}glow(t,e,n=700){const s=this.glowPool.find(o=>!o.sprite.visible);if(!s)return;const r=s.sprite.material,a=s.column.material;s.sprite.position.set(t.x,.45,t.z),s.column.position.set(t.x,0,t.z),s.sprite.visible=s.column.visible=!0,this.tweens.run(n,o=>{const l=Math.sin(Math.min(1,o*1.6)*Math.PI*.5)*(1-o);r.opacity=Math.min(1,l*1.6*e),s.sprite.scale.setScalar(1.4+e*.8+o*.6),a.opacity=l*.85*e,s.column.scale.set(1,.4+o*.8,1)},cn.linear).then(()=>s.sprite.visible=s.column.visible=!1)}burst(t,e,n,s=1,r=650){this.reducedMotion&&(n=Math.ceil(n/3));for(let a=0;a<n;a++){const o=this.particlePool.find(M=>!M.visible);if(!o)return;const l=o.material;l.color.set(e[a%e.length]);const c=a/n*Math.PI*2+Math.random()*.5,u=(.9+Math.random()*.8)*s,f=Math.cos(c)*u,h=Math.sin(c)*u,d=(1.6+Math.random()*1.4)*s;o.visible=!0,o.position.copy(t);const g=Math.random()*8;this.tweens.run(r,M=>{const p=M*(r/1e3);o.position.set(t.x+f*p,t.y+d*p-4.5*p*p,t.z+h*p),o.rotation.set(g*M,g*M*.7,0),o.scale.setScalar(1-M*.7),l.opacity=1-M*M},cn.linear).then(()=>o.visible=!1)}}dust(t,e,n,s=420){this.reducedMotion&&(n=Math.ceil(n/2));for(let r=0;r<n;r++){const a=this.particlePool.find(d=>!d.visible);if(!a)return;const o=a.material;o.color.set(e[r%e.length]);const l=r/n*Math.PI*2+Math.random()*.6,c=Math.cos(l),u=Math.sin(l),f=.22+Math.random()*.14,h=.06+Math.random()*.06;a.visible=!0,this.tweens.run(s,d=>{const g=.3+f*d;a.position.set(t.x+c*g,.03+h*Math.sin(d*Math.PI*.8),t.z+u*g),a.rotation.set(l+d*2,d*3,0),a.scale.setScalar(.75+d*.35),o.opacity=.9*(1-d)},cn.outCubic).then(()=>a.visible=!1)}}bump(t){this.reducedMotion||(this.shake=Math.max(this.shake,t))}async animateMove(t,e,n={}){const s=this.animGen;this.performing=!0;try{this.clearGhost(),this.setHover(null,null,[]);for(const r of t){const a=r.kind==="place"?r.index:r.target,o=()=>n.onEvent?.(r,this.cellToScreen(a,.9));switch(r.kind){case"place":await this.animatePlace(r.index,r.piece,s,o);break;case"merge":await this.animateMerge(r.cells,r.target,r.toTier,r.step,s,o);break;case"festival":await this.animateFestival(r.cells,r.target,s,o);break;case"crumble":if(o(),s!==this.animGen)return!1;await this.animateCrumble(r.cells,s);break}if(s!==this.animGen)return!1}return this.performing=!1,this.sync(e),!0}finally{s===this.animGen&&(this.performing=!1)}}async animatePlace(t,e,n,s){const{model:r}=this.addPiece(t,e),a=r.root,o=We(t),l=e===Re||e>=2;if(await this.tweens.run(190,h=>{a.position.set(o.x,1-h,o.z);const d=.72+.28*Math.sqrt(h);a.scale.set(d*(1-.05*h),d*(1+.1*h),d*(1-.05*h))},cn.inQuad),n!==this.animGen||(s(),n!==this.animGen))return;this.ring(o,16774102,l?1:.8,360),this.dust(o,e===Re?aS:rS,l?8:5);const c=l?.2:.15,u=l?.06:.035,f=new le;await this.tweens.run(l?140:120,h=>{const d=h>=1?0:Math.sin(h*Math.PI);a.scale.set(1+d*c*.6,1-d*c,1+d*c*.6),a.position.y=-u*d,this.tiles.setMatrixAt(t,f.makeTranslation(o.x,-u*d,o.z)),this.tiles.instanceMatrix.needsUpdate=!0},cn.linear),n===this.animGen&&(a.scale.setScalar(1),a.position.copy(o))}async animateMerge(t,e,n,s,r,a){const o=We(e),l=t.map(g=>this.pieces.get(g)).filter(g=>!!g),c=l.map(g=>g.model.root.position.clone()),u=Math.pow(.9,Math.min(s,5)-1);if(await this.tweens.run(230*u,g=>{l.forEach((M,p)=>{M.model.root.position.lerpVectors(c[p],o,g),M.model.root.position.y=Math.sin(g*Math.PI)*.35,M.model.root.scale.setScalar(1-.55*g)})},cn.inCubic),r!==this.animGen)return;for(const g of t)this.removePiece(g);const{model:f}=this.addPiece(e,n);if(f.root.scale.setScalar(.001),a(),r!==this.animGen)return;const h=s>=2;this.glow(o,.75+n*.08+(h?.35:0)),this.ring(o,h?16765802:16774102,1.4+n*.25+(h?.8:0));const d=n<=1?[O.leafLight,O.leaf,16773560]:[16765802,O.wall,O.leafLight,O.roofLight];this.burst(o.clone().setY(.4),h?[16765802,...d]:d,8+n*3+(h?8:0),.8+n*.1),this.bump(h?.12+s*.03:.04),await this.tweens.run(320*u,g=>f.root.scale.setScalar(Math.max(.001,g)),cn.outBack),r===this.animGen&&f.root.scale.setScalar(1)}async animateFestival(t,e,n,s){const r=We(e),a=t.map(o=>this.pieces.get(o)).filter(o=>!!o);if(await this.tweens.run(420,o=>{for(const l of a)l.model.root.position.y=Math.sin(o*Math.PI*.5)*.5,l.model.root.rotation.y=this.pieceYaw+o*Math.PI},cn.inOutSine),n===this.animGen&&(s(),n===this.animGen)){this.glow(r,1.4,900),this.ring(r,16765802,3.4,700),this.ring(r,16777215,2.2,500);for(const o of a)this.burst(o.model.root.position.clone(),[16765802,O.flag,O.leafLight,O.white,O.castleRoof],9,1.2,800);if(this.bump(.3),await this.tweens.run(260,o=>{for(const l of a)l.model.root.scale.setScalar(Math.max(.001,1-o))}),n===this.animGen)for(const o of t)this.removePiece(o)}}async animateCrumble(t,e){const n=t.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of t)this.burst(We(s).setY(.2),[O.rock,O.rockDark,O.moss],6,.7,500);if(await this.tweens.run(340,s=>{for(const r of n)r.model.root.position.y=-s*.3,r.model.root.rotation.z=Math.sin(s*30)*.06*(1-s),r.model.root.scale.setScalar(Math.max(.001,1-s))},cn.inCubic),e===this.animGen)for(const s of t)this.removePiece(s)}async nudge(t){const e=this.pieces.get(t);if(!e)return;const n=this.animGen,s=We(t);await this.tweens.run(240,r=>e.model.root.position.x=s.x+Math.sin(r*Math.PI*4)*.06*(1-r),cn.linear),!(n!==this.animGen||this.pieces.get(t)!==e)&&e.model.root.position.copy(s)}async gameOverWave(){const t=this.animGen;this.performing=!0,this.resetLean();const e=[...this.pieces.entries()];if(await this.tweens.run(700,n=>{for(const[s,r]of e){const{x:a,y:o}=Sr(s,this.side),l=n*3-(a+o)*.12;r.model.root.position.y=Math.max(0,Math.sin(Math.min(Math.max(l,0),1)*Math.PI))*.25}},cn.linear),t!==this.animGen)return!1;for(const[n,s]of e)this.pieces.get(n)===s&&(s.model.root.position.y=0);return this.performing=!1,!0}cancelAnimations(){this.animGen++,this.performing=!1,this.tweens.finishAll(),this.stopShake()}stopShake(){this.shake=0,this.camera.position.copy(this.baseCamPos),this.dirty=!0}finishAnimations(){this.cancelAnimations()}get animating(){return this.tweens.active}thumbnail(t,e=160){if(this.isContextLost())return"";const n=new Fu;n.add(new eh(16052991,10327979,1.8));const s=new _a(16773600,1.9);s.position.set(7,9,-3),n.add(s);const r=new _a(14673663,.25);r.position.set(-5,4,6),n.add(r);const a=new Jn;tl??(tl=qM());const o=new Ae(tl,this.tileMaterial);a.add(o);const l=jo(t);l.tick?.(.8),a.add(l.root),n.add(a),a.updateMatrixWorld(!0);const c=el.iso,u=new Nr(-1,1,1,-1,.1,50);u.position.set(Math.sin(c.azimuth)*10,7,Math.cos(c.azimuth)*10),u.lookAt(0,0,0),u.updateMatrixWorld();const f=new Di().setFromObject(a);let h=1/0,d=-1/0,g=1/0,M=-1/0;for(const w of[f.min.x,f.max.x])for(const R of[f.min.y,f.max.y])for(const D of[f.min.z,f.max.z]){const F=new P(w,R,D).applyMatrix4(u.matrixWorldInverse);h=Math.min(h,F.x),d=Math.max(d,F.x),g=Math.min(g,F.y),M=Math.max(M,F.y)}const p=Math.max(d-h,M-g)/2*1.06,m=(h+d)/2,y=(g+M)/2;u.left=m-p,u.right=m+p,u.top=y+p,u.bottom=y-p,u.updateProjectionMatrix();const T=new An(e,e,{samples:4});T.texture.colorSpace=Ke;const x=this.scene.fog;this.renderer.setRenderTarget(T),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(n,u);const E=new Uint8Array(e*e*4);if(this.renderer.readRenderTargetPixels(T,0,0,e,e,E),this.renderer.setRenderTarget(null),this.renderer.setClearColor(0,0),this.scene.fog=x,T.dispose(),this.dirty=!0,this.isContextLost())return"";const b=document.createElement("canvas");b.width=b.height=e;const C=b.getContext("2d"),v=C.createImageData(e,e);for(let w=0;w<e;w++)v.data.set(E.subarray((e-1-w)*e*4,(e-w)*e*4),w*e*4);return C.putImageData(v,0,0),b.toDataURL("image/png")}loop(t){this.rafId=requestAnimationFrame(this.loop);const e=this.lastFrame?t-this.lastFrame:16;if(this.lastFrame=t,document.hidden)return;const n=Math.min(64,e),s=this.tweens.active||this.shake>.001;if(this.tweens.tick(Math.min(1e3,e)),this.clock+=n/1e3,this.lost)return;const r=!this.reducedMotion&&t-this.lastIdleRender>33;if(!(!s&&!this.dirty&&!r)){if(r||s){if(this.lastIdleRender=t,!this.reducedMotion){this.world.tick(this.clock);for(const o of this.pieces.values())o.model.tick?.(this.clock);(this.leaning.size||this.highlight.merge.length)&&this.updateLean()}const a=this.reducedMotion?1:.75+Math.sin(this.clock*5)*.25;for(const o of this.frames){if(!o.visible)continue;const l=o.material;l.opacity=(l.userData.base??1)*a}if(this.suggest.visible){const o=this.reducedMotion?1:.7+Math.sin(this.clock*3)*.3;this.suggest.material.opacity=nl*o}}if(this.ghost){const a=We(this.ghost.index);this.ghost.model.root.position.set(a.x,this.reducedMotion?.05:.08+Math.sin(this.clock*4)*.05,a.z)}if(this.shake>.001){const a=this.shake;this.camera.position.set(this.baseCamPos.x+(Math.random()-.5)*a,this.baseCamPos.y+(Math.random()-.5)*a,this.baseCamPos.z+(Math.random()-.5)*a),this.shake*=Math.pow(1e-4,n/1e3)**.6,this.shake<=.001&&this.camera.position.copy(this.baseCamPos)}this.renderer.render(this.scene,this.camera),this.dirty=!1}}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.dprQuery?.removeEventListener?.("change",this.onPixelRatioChange),this.canvas.removeEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored,!1),this.renderer.dispose()}}const il=[0,2,4,7,9,12,14,16,19,21,24],uS=392;function As(i){return uS*Math.pow(2,i/12)}function ya(i){i?.catch(()=>{})}class hS{constructor(t,e=!1){this.ctx=null,this.master=null,this.noise=null,this.musicBus=null,this.musicTimer=0,this.nextBeat=0,this.beat=0,this.enabled=t,this.musicOn=e}unlock(){if(!this.enabled&&!this.musicOn)return;const t=this.ensure();t&&t.state!=="running"&&t.state!=="closed"&&ya(t.resume()),this.musicOn&&this.startMusic()}get music(){return this.musicOn}setMusic(t){this.musicOn=t,t?this.unlock():this.stopMusic()}setPaused(t){this.ctx&&(t?ya(this.ctx.suspend()):(this.enabled||this.musicOn)&&ya(this.ctx.resume()))}startMusic(){const t=this.ensure();if(!(!t||this.musicTimer)){if(!this.musicBus){this.musicBus=t.createGain();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=2400;const n=t.createDelay(1);n.delayTime.value=.42;const s=t.createGain();s.gain.value=.28,this.musicBus.connect(e),e.connect(this.master),e.connect(n),n.connect(s).connect(n),n.connect(this.master)}this.musicBus.gain.cancelScheduledValues(t.currentTime),this.musicBus.gain.setValueAtTime(1e-4,t.currentTime),this.musicBus.gain.exponentialRampToValueAtTime(.32,t.currentTime+2.5),this.nextBeat=t.currentTime+.1,this.musicTimer=window.setInterval(()=>this.schedule(),120),this.schedule()}}stopMusic(){if(window.clearInterval(this.musicTimer),this.musicTimer=0,this.ctx&&this.musicBus){const t=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(t),this.musicBus.gain.setValueAtTime(Math.max(1e-4,this.musicBus.gain.value),t),this.musicBus.gain.exponentialRampToValueAtTime(1e-4,t+.6)}}schedule(){const t=this.ctx;if(!t||!this.musicBus)return;const e=60/76/2,n=[[0,4,7,11],[-3,0,4,7],[-7,-3,0,4],[-5,-1,2,4]],s=[0,2,4,7,9,12,14,16];for(;this.nextBeat<t.currentTime+.6;){const r=this.nextBeat,a=Math.floor(this.beat/8),o=n[Math.floor(a/2)%n.length],l=this.beat%16;if(l===0){for(const f of o)this.voice(261.63*Math.pow(2,f/12),r,e*16,.05,"triangle",1.4);this.voice(65.41*Math.pow(2,o[0]/12),r,e*8,.12,"sine",.05)}l===8&&this.voice(65.41*Math.pow(2,o[0]/12),r,e*8,.1,"sine",.05);const c=Math.sin(this.beat*12.9898)*43758.5453,u=c-Math.floor(c);if(l%2===0&&u<.42){const f=s[Math.floor(u*100)%s.length];this.voice(523.25*Math.pow(2,f/12),r,.9,.05,"sine",.005)}this.nextBeat+=e,this.beat++}}voice(t,e,n,s,r,a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.value=t,c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+Math.max(.005,a)),c.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(c).connect(this.musicBus),l.start(e),l.stop(e+n+.05)}ensure(){if(this.ctx)return this.ctx;try{const t=window.AudioContext??window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55;const e=this.ctx.createDynamicsCompressor();this.master.connect(e).connect(this.ctx.destination);const n=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}catch{this.ctx=null}return this.ctx}ready(){if(!this.enabled)return null;const t=this.ensure();if(!t||t.state==="closed")return null;if(t.state==="suspended")ya(t.resume());else if(t.state!=="running")return null;return t}tone(t,e,n,s,r="sine",a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(t,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+n),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+.008),c.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(c).connect(this.master),l.start(e),l.stop(e+n+.02)}bell(t,e,n,s){this.tone(t,e,n,s,"sine"),this.tone(t*2.01,e,n*.6,s*.28,"sine"),this.tone(t*3.02,e,n*.3,s*.1,"triangle")}noiseHit(t,e,n,s,r=1){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=r;const c=a.createGain();c.gain.setValueAtTime(n,t),c.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(l).connect(c).connect(this.master),o.start(t),o.stop(t+e+.02)}place(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(260,e,.12,.35,"sine",150),this.noiseHit(e,.05,.12,1800,2)}merge(t,e){const n=this.ready();if(!n)return;const s=n.currentTime,r=il[Math.min(il.length-3,t+e-1)];this.bell(As(r),s,.5,.22),this.bell(As(r+7),s+.07,.6,.18),e>=2&&this.bell(As(r+12),s+.14,.7,.16)}chain(t){const e=this.ready();if(!e)return;const n=e.currentTime+.05;for(let s=0;s<Math.min(t+1,5);s++)this.tone(As(il[s+t]),n+s*.055,.22,.1,"triangle")}festival(){const t=this.ready();if(!t)return;const e=t.currentTime;[0,4,7,12,16,19,24].forEach((n,s)=>this.bell(As(n),e+s*.07,.9,.16)),this.noiseHit(e,.6,.05,6e3,.7)}crumble(){const t=this.ready();if(!t)return;const e=t.currentTime;this.noiseHit(e,.32,.35,420,.8),this.tone(120,e,.2,.2,"sine",60)}invalid(){const t=this.ready();t&&this.tone(160,t.currentTime,.12,.18,"triangle",120)}swap(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(520,e,.08,.12,"sine",700),this.tone(700,e+.06,.08,.1,"sine",520)}gameOver(){const t=this.ready();if(!t)return;const e=t.currentTime;[12,7,4,0].forEach((n,s)=>this.bell(As(n),e+s*.18,.9,.17))}warning(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(330,e,.15,.08,"triangle"),this.tone(311,e+.16,.2,.08,"triangle")}}function dS(i,t=1){switch(i){case"tap":return 8;case"land":return 12;case"merge":return Math.min(25,15+(Math.max(1,Math.floor(t))-1)*3);case"festival":return[25,50,25,50,70];case"invalid":return[6,40,6];case"gameOver":return[30,90,50]}}function Ih(){return typeof navigator>"u"?null:navigator}class fS{constructor(t){this.enabled=t}get supported(){const t=Ih();return!!t&&"vibrate"in t&&typeof t.vibrate=="function"}tap(){this.pulse("tap")}land(){this.pulse("land")}merge(t){this.pulse("merge",t)}festival(){this.pulse("festival")}invalid(){this.pulse("invalid")}gameOver(){this.pulse("gameOver")}pulse(t,e){if(!this.enabled||!this.supported)return;const n=Ih();if(!(n.userActivation&&!n.userActivation.hasBeenActive))try{n.vibrate(dS(t,e))}catch{}}}const $t=i=>document.getElementById(i),rt={stage:$t("stage"),hud:$t("hud"),dock:document.querySelector(".dock"),score:$t("score"),best:$t("best"),dailyChip:$t("dailyChip"),dailyLeft:$t("dailyLeft"),status:$t("status"),announcer:$t("announcer"),sheetAnnouncer:$t("sheetAnnouncer"),coach:$t("coach"),coachText:$t("coachText"),coachSkip:$t("coachSkip"),popups:$t("popups"),banner:$t("banner"),nextCard:$t("nextCard"),nextImg:$t("nextImg"),keepBtn:$t("keepBtn"),keepImg:$t("keepImg"),menuBtn:$t("menuBtn"),spinLeft:$t("spinLeft"),spinRight:$t("spinRight"),sizePrev:$t("sizePrev"),sizeNext:$t("sizeNext"),sizeName:$t("sizeName"),sizeSub:$t("sizeSub"),home:$t("home"),homeBest:$t("homeBest"),playBtn:$t("playBtn"),homeNewBtn:$t("homeNewBtn"),dailyBtn:$t("dailyBtn"),dailyTitle:$t("dailyTitle"),dailySub:$t("dailySub"),dailyMeta:$t("dailyMeta"),homeHelpBtn:$t("homeHelpBtn"),homeJournalBtn:$t("homeJournalBtn"),homeSettingsBtn:$t("homeSettingsBtn"),modal:$t("modal"),modalArt:$t("modalArt"),modalTitle:$t("modalTitle"),modalBody:$t("modalBody"),modalActions:$t("modalActions"),closeModal:$t("closeModal"),webglError:$t("webglError")},He=ln,Zt=new cp,he=new hS(Zt.getSound(),Zt.getMusic()),Tn=new fS(Zt.getHaptics()),Oc=window.matchMedia("(prefers-reduced-motion: reduce)"),ba="https://pixel-pusher-hub.github.io/little-nooks/",pS=Lf(["1..2...R",".5....1.","2..1.4..","..R...2.",".1..3...","2....1.R","..2.1...","R...2..1"]);function mS(i){const t=qa(i),e=Math.floor((8-i)/2);for(let n=0;n<i;n++)for(let s=0;s<i;s++){const r=s+e,a=n+e;r>=0&&a>=0&&r<8&&a<8&&(t[n*i+s]=pS[a*8+r])}return t}const Ue=i=>i.mode??"classic",Ii=()=>If(new Date);let Oe=Zt.getSize(Hh);const dn=i=>Ya(i.board);function so(i=Oe){const t=Zt.loadGame(Ji,i);return t&&!t.over&&Ue(t)==="classic"&&dn(t)===i?t:fc(Yh(),He,i)}function tf(i){const t=Zt.loadDaily(Ji);return t&&!t.over&&Ue(t)==="daily"&&t.dailyKey===i?t:Zh(i,He)}let Q=so(),rn=Zt.getJournal(),zn=Zt.getBest(Oe),Ha=Q.turn===1?zn:Zt.getRoundStartBest(Oe)??zn;Zt.setRoundStartBest(Ha,Oe);let ef=0,$i=0,Vn=!1,xe=!0,Hs=Q.score,Fe=null,La=null,Ki=null,xr=null,Mr=!1,Da=!1,ro=0,ic=!1,nf=!1,Yt=null;const Ia=new Map;let Us=null;const me=i=>Math.round(i).toLocaleString("en-US"),xn=()=>!rt.modal.classList.contains("hidden"),vi=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Rn=(i,t,e=`${t}s`)=>`${i} ${i===1?t:e}`;let Zi=!1,sc=0;function Ze(i,t=""){rt.status.textContent=i,rt.status.className=`status${t?` ${t}`:""}`,Zi=!1,clearTimeout(sc),t==="good"&&(sc=window.setTimeout(()=>rt.status.classList.add("faded"),2600))}function Nh(i){Ze(i,"good"),clearTimeout(sc),Zi=!0}function Vs(i=Q){return i.pieceLimit?Math.max(0,i.pieceLimit-(i.turn-1)):1/0}function Pn(){const i=Li(Q.board).length,t=Vs();Q.over?Ze(Q.endReason==="limit"?`All ${Q.pieceLimit} pieces placed. Day complete!`:"No empty tiles left. Start a new nook!","danger"):i<=6?Ze(`Only ${Rn(i,"free tile")} left. Make every merge count!`,"danger"):t<=10?Ze(`Only ${Rn(t,"piece")} left today. Make them count!`,"warn"):i/Q.board.length<=1-He.crowdedRatio?Ze("Space is getting tight. Plan merges that free tiles.","warn"):Q.next===Re?Ze("A rock! Tuck it away. A Windmill merge beside it shatters it."):Ze(Ue(Q)==="daily"?`Daily Nook: ${Rn(t,"piece")} to place today.`:"Tap an empty tile to place your piece.")}let Uh=0;function Mn(i){const t=xn()?rt.sheetAnnouncer:rt.announcer;rt.announcer.textContent="",rt.sheetAnnouncer.textContent="",clearTimeout(Uh),Uh=window.setTimeout(()=>t.textContent=i,60)}function gS(i){i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}function sl(i,t,e=""){const n=document.createElement("div");n.className=`popup${e?` ${e}`:""}`,n.textContent=i,n.style.left=`${t.x}px`,n.style.top=`${t.y}px`,rt.popups.appendChild(n),setTimeout(()=>n.remove(),1100)}let Fh=0;function rl(i){rt.banner.textContent=i,rt.banner.classList.remove("show"),rt.banner.offsetWidth,rt.banner.classList.add("show"),clearTimeout(Fh),Fh=window.setTimeout(()=>rt.banner.classList.remove("show"),1250)}function Ur(i,t=160){const e=`${i}@${t}`;if(!Ia.has(e)&&Yt){const n=Yt.thumbnail(i,t);if(!n)return"";Ia.set(e,n)}return Ia.get(e)??""}function un(i,t="",e=50){return`<img src="${Ur(i)}" alt="${vi(t)}" width="${e}" height="${e}" draggable="false" />`}function _S(){return Ue(Q)==="daily"?Math.max(rn.daily.scores[Q.dailyKey??""]??0,Q.score):Math.max(zn,Q.score)}function Fr(){rt.score.textContent=me(Hs),rt.best.textContent=me(_S());const i=Ue(Q)==="daily";rt.dailyChip.classList.toggle("hidden",!i),i&&(rt.dailyLeft.textContent=String(Vs())),Bc()}function vS(){const i=Q.next;if(i===Re)return{text:"Never merges",good:!1,spots:0};const t=Q.over?[]:pc(Q.board,i,He);if(!t.length)return{text:i===Gn?"3 Sky Isles = Festival":"No match yet",good:!1,spots:0};let e=1;for(const n of t)e=Math.max(e,Za(Q,n,He).state.lastChain);return{text:e>=2?`Chain ×${e} possible!`:`Merges in ${Rn(t.length,"spot")}`,good:!0,spots:t.length}}let Oh=-1;function Bc(){rt.nextImg.src=Ur(Q.next),rt.nextImg.alt="";const i=vS();rt.nextCard.setAttribute("aria-label",`Next piece: ${nn(Q.next)}, ${Cf(Q.next)}. ${i.text}. Show what's coming.`),rt.nextCard.title=`Next: ${nn(Q.next)}. ${i.text} (I: what's coming)`,Q.stash===Te?(rt.keepImg.removeAttribute("src"),rt.keepImg.hidden=!0,rt.keepBtn.classList.add("empty"),rt.keepBtn.setAttribute("aria-label",`Keep slot is empty. Store the ${nn(Q.next)} for later`)):(rt.keepImg.src=Ur(Q.stash),rt.keepImg.hidden=!1,rt.keepImg.alt="",rt.keepBtn.classList.remove("empty"),rt.keepBtn.setAttribute("aria-label",`Keep slot holds a ${nn(Q.stash)}. Swap it with the ${nn(Q.next)}`),!Q.over&&Oh!==Q.turn&&i.spots===0&&Q.stash!==Re&&pc(Q.board,Q.stash,He).length&&(Oh=Q.turn,rt.keepBtn.classList.remove("nudge"),rt.keepBtn.offsetWidth,rt.keepBtn.classList.add("nudge")))}function Bh(){if(!Yt)return;const i=window.innerWidth,t=window.innerHeight,e={top:0,right:0,bottom:0,left:0};document.querySelectorAll("[data-inset]").forEach(s=>{const r=getComputedStyle(s);if(r.display==="none")return;const a=r.getPropertyValue("--inset").trim(),o=s.getBoundingClientRect();!o.width||!o.height||(a==="top"?e.top=Math.max(e.top,o.bottom):a==="bottom"?e.bottom=Math.max(e.bottom,t-o.top):a==="right"?e.right=Math.max(e.right,i-o.left):a==="left"&&(e.left=Math.max(e.left,o.right)))}),document.body.style.setProperty("--dock-h",`${Math.round(rt.dock.getBoundingClientRect().height)}px`);const n=Math.min(i,t)<500?6:16;Yt.setInsets({top:e.top+n,right:e.right+n,bottom:e.bottom+n,left:e.left+n})}function kc(){return!Vn&&!Q.over&&!xn()&&!xe}function sf(i){const t=Za(Q,i,He),e=new Set;let n=0,s=null;for(const o of t.events)o.kind!=="place"&&(o.cells.forEach(l=>e.add(l)),n+=o.points,s=o);if(e.delete(i),!s)return null;const r=t.state.lastChain,a=s.kind==="merge"?`→ ${ti[s.toTier].name}`:s.kind==="festival"?"→ Sky Festival!":"shatters rocks";return{cells:[...e],text:`${r>1?`Chain ×${r} `:""}${a}  +${me(n)}`}}function di(i){if(Ki=i,!Yt)return;if(i===null||!kc()){Yt.setHover(null,null,[]),Zi&&!Vn&&!xe&&Pn();return}if(Q.board[i]!==Te){Yt.setHover(i,null,[],!0),Zi&&Pn();return}const t=sf(i);Yt.setHover(i,Q.next,t?.cells??[]),t?Nh(t.text+(Mr?" · lift to place":"")):Mr?Nh("No merge here · lift to place, or slide off to cancel"):Zi&&Pn()}function ao(){if(Ue(Q)==="daily"){Q.over?Zt.clearDaily():Zt.saveDaily(Q);return}const i=dn(Q);Q.over?Zt.clearGame(i):Zt.saveGame(Q,i),Zt.submitScore(Q.score,i),zn=Math.max(zn,Zt.getBest(i))}function Ws(i){if(Yt?.cancelAnimations(),$i++,Vn=!1,Us=null,Q=i,Hs=Q.score,Da=!1,Ue(Q)==="daily")ef=rn.daily.scores[Q.dailyKey??""]??0;else{const t=dn(Q);zn=Zt.getBest(t),Q.turn===1?(Ha=zn,Zt.setRoundStartBest(zn,t)):Ha=Zt.getRoundStartBest(t)??zn}xe||(Yt?.sync(Q.board),Fr(),Pn())}function xS(i){const t=Ue(i)==="daily",e=i.score>0&&i.score>(t?ef:Ha),n=sp(rn,i,Ii());return rn=n.journal,Zt.saveJournal(rn),Os.active&&!t&&co(),{state:i,newBest:e,highlights:n.highlights}}function MS(i,t){const e=i.filter(a=>a.kind==="merge"),n=i.find(a=>a.kind==="festival"),s=i.find(a=>a.kind==="crumble"),r=[];if(n)r.push(`Sky Festival! +${me(t)}`);else if(e.length){const a=e[e.length-1],o=e.length>1?`Chain ×${e.length}: `:"";r.push(`${o}made a ${a.kind==="merge"?ti[a.toTier].name:""}, +${me(t)}`)}else{const a=i[0];r.push(`Placed a ${a.kind==="place"?nn(a.piece):"piece"}`)}return s&&s.kind==="crumble"&&r.push(`shattered ${Rn(s.cells.length,"rock")}`),r.join(", ")}async function rc(i){if(!Yt||!kc())return;if(he.unlock(),Q.board[i]!==Te){he.invalid(),Tn.invalid(),Ze("That tile is taken. Pick an empty one.","warn"),Mn("That tile is taken. Pick an empty one."),Yt.nudge(i);return}const t=Za(Q,i,He);if(!t.accepted)return;Vn=!0;const e=$i;Q=t.state,rn=tp(rn,t.events,t.points);const n=Q.over?xS(Q):null;Zt.saveJournal(rn),ao(),Bc(),Ue(Q)==="daily"&&(rt.dailyLeft.textContent=String(Vs())),Yt.setSuggestions([]),Hr();try{await Yt.animateMove(t.events,Q.board,{onEvent:(l,c)=>{e===$i&&SS(l,c)}})}finally{e===$i&&(Hs=Q.score,Vn=!1)}if(e!==$i)return;Fr();const s=Li(Q.board).length,r=s/Q.board.length<=1-He.crowdedRatio;r&&!Da&&!Q.over&&(Da=!0,he.warning()),r||(Da=!1);const a=Vs(),o=Q.over?"":s<=6?` Only ${Rn(s,"free tile")} left.`:a<=10?` Only ${Rn(a,"piece")} left today.`:"";if(Mn(`${MS(t.events,t.points)}. ${Q.over?"Round over.":`Next: ${nn(Q.next)}.`}${o}`),n){await ES(n,e);return}Q.lastChain>=2?Ze(`Lovely! ×${Q.lastChain} chain reaction.`,"good"):t.points>He.placePoints?Ze(`+${me(t.points)} points`,"good"):Pn(),uo(t.events),xr?.type==="mouse"&&Ki!==null&&di(Yt.pick(xr.x,xr.y)),Fe!==null&&Yt.setCursor(Fe)}function SS(i,t){if(i.kind==="place"){he.place(),Tn.land();return}if(Hs+=i.points,rt.score.textContent=me(Hs),gS(rt.score),i.kind==="merge"){he.merge(i.toTier,i.step),Tn.merge(i.step),sl(`+${me(i.points)}`,t,i.step>=2?"big":""),i.step>=2&&(he.chain(i.step),rl(`Chain ×${i.step}!`));const e=["","","","","A Little Castle!","A Palace!","An Observatory!","A Sky Isle!"][i.toTier];e&&i.step<2&&rl(e)}else i.kind==="festival"?(he.festival(),Tn.festival(),rl("Sky Festival!"),sl(`+${me(i.points)}`,t,"big")):i.kind==="crumble"&&(he.crumble(),Tn.land(),sl(`+${me(i.points)}`,t,"rock"))}function ac(){kc()&&(he.unlock(),Q=Hf(Q,He),ao(),he.swap(),Tn.tap(),Bc(),rt.nextCard.classList.remove("pop"),rt.nextCard.offsetWidth,rt.nextCard.classList.add("pop"),di(Ki),Ki===null&&Pn(),Mn(`Next: ${nn(Q.next)}. Kept: ${Q.stash===Te?"nothing":nn(Q.stash)}.`),uo())}function Xs(){Os.active&&Ue(Q)==="classic"&&Q.turn>1&&co(),Ws(fc(Yh(),He,Oe)),ao(),on(!1),zc(),oo()}function Va(i=!1){he.unlock();const t=Ii(),e=i?Zh(t,He):tf(t);Ws(e),ao(),on(!1),zc(),oo(),e.turn===1&&(Ze(`Daily Nook #${Bs(t)}: everyone gets this island today. Place ${yr} pieces for your best score.`,"good"),Mn(`Daily Nook number ${Bs(t)}. ${yr} pieces. Next: ${nn(Q.next)}.`))}function rf(){const i=Zt.loadGame(Ji,Oe);return{inProgress:!!i&&!i.over&&i.turn>1&&Ue(i)==="classic"&&dn(i)===Oe,saved:i}}function Fs(){const{inProgress:i,saved:t}=rf();rt.playBtn.textContent=i?"Continue":"Play",rt.homeNewBtn.classList.toggle("hidden",!i),rt.homeBest.textContent=me(Zt.getBest(Oe));const e=Yi.indexOf(Oe);rt.sizeName.textContent=`${Oe} × ${Oe}`,rt.sizeSub.textContent=Tf[Oe],rt.sizePrev.disabled=e<=0,rt.sizeNext.disabled=e>=Yi.length-1,rt.playBtn.setAttribute("aria-label",`${rt.playBtn.textContent} on the ${Oe} by ${Oe} island`);const n=Ii(),s=Bs(n),r=Zt.loadDaily(Ji),a=!!r&&!r.over&&r.dailyKey===n&&r.turn>1,o=rn.daily.scores[n];rt.dailyTitle.textContent=a?"Continue":"Daily",rt.dailySub.textContent=a?`Continue · ${Rn(Vs(r),"piece")} left`:o!==void 0?`Played today · best ${me(o)} · play again`:`Today's island · ${yr} pieces`;const l=td(rn,n);rt.dailyMeta.textContent=l>0?String(l):"",rt.dailyMeta.classList.toggle("hidden",l===0),rt.dailyBtn.title=`Daily Nook #${s}: ${rt.dailySub.textContent}`,rt.dailyBtn.setAttribute("aria-label",`Daily Nook number ${s}. ${rt.dailySub.textContent}.${l?` Streak: ${Rn(l,"day")}.`:""}`),Yt?.sync(i&&t?t.board:mS(Oe))}function kh(i){const t=Yi.indexOf(Oe)+i;t<0||t>=Yi.length||(Oe=Yi[t],Zt.setSize(Oe),he.unlock(),he.swap(),Ue(Q)==="classic"&&Ws(so()),Fs())}function Or(){const i=!xe;if(Yt?.cancelAnimations(),$i++,Vn=!1,Us=null,xe=!0,Hs=Q.score,document.body.classList.add("at-home"),Yt&&(Yt.canvas.tabIndex=-1),on(!1),Yt?.setHover(null,null,[]),Yt?.setCursor(null),Yt?.setSuggestions([]),Hr(),nf){location.reload();return}Fs(),i&&rt.playBtn.focus({preventScroll:!0})}function zc(){ro=performance.now()+350,xe&&(xe=!1,document.body.classList.remove("at-home"),Yt&&(Yt.canvas.tabIndex=0),Yt?.sync(Q.board)),Fr(),Pn(),uo()}function zh(){const i=dn(Q);if(La!==null&&La<i*i)return La;const t=Math.floor((i-1)/2);return t*i+t}function oo(){Yt?.canvas.focus({preventScroll:!0})}function lo(){he.unlock(),(Ue(Q)!=="classic"||dn(Q)!==Oe)&&Ws(so()),Q.over?Xs():(xe&&Yt?.sync(Q.board),zc()),Zt.hasSeenHelp()?oo():(mn=Yt?.canvas??null,ho())}const Os={active:!Zt.getCoachDone()&&Zt.getBest()===0&&rn.rounds===0,said:new Set};function Hr(){rt.coach.classList.add("hidden")}function co(){Os.active=!1,Zt.setCoachDone(),Hr(),Yt?.setSuggestions([])}function al(i,t=!1){return Li(Q.board).filter(e=>t?Wh(e,dn(Q)):!0).map(e=>[e,rp(Q,e,He)]).sort((e,n)=>n[1]-e[1]).slice(0,i).map(([e])=>e)}function uo(i){if(!Yt)return;if(!Os.active||xe||Ue(Q)!=="classic"||Q.over||xn()){Hr(),Yt.setSuggestions([]);return}if(Q.turn>16){co();return}const t=a=>Os.said.has(a)?!1:(Os.said.add(a),!0),e=nn(Q.next),n=pc(Q.board,Q.next,He);let s="",r=[];i?.some(a=>a.kind==="merge"&&a.step>=2)&&t("chain")?s="A chain! The new piece merged again, and each extra step multiplies the points.":i?.some(a=>a.kind==="merge")&&t("merge")?s="Three became one, right where you placed it. Merging also frees up space.":Q.next===Re&&t("rock")?(s="A rock never merges. Tuck it on the edge. A Windmill merge next to it shatters it.",r=al(3,!0)):n.length&&Q.next!==Re?(s=`Put the ${e} on a glowing tile to merge three of a kind!`,r=n.slice(0,4)):Q.turn===1?(s=`Tap a glowing tile to place your ${e}. Three matching pieces side by side merge.`,r=al(3)):Q.turn>=5&&Q.stash===Te&&t("keep")?s="Tip: tap Keep to save the next piece for later. Swapping is free.":(s="Build pairs: two matching pieces side by side are one away from a merge.",r=al(2)),rt.coachText.textContent=s,rt.coach.classList.remove("hidden"),Yt.setSuggestions(r)}let mn=null,oc=null;function Mi(i){xn()||(mn=document.activeElement),rt.modalTitle.textContent=i.title,i.describe?rt.modal.setAttribute("aria-describedby","modalBody"):rt.modal.removeAttribute("aria-describedby"),rt.modalBody.innerHTML=i.body,rt.modalArt.innerHTML=i.art??"",rt.modalActions.innerHTML="";let t=!1;for(const e of i.actions??[]){const n=document.createElement("button");n.type="button",n.className=`btn ${e.kind==="dark"?"btn-dark":"btn-primary"}`,n.innerHTML=`${e.icon?`<svg aria-hidden="true"><use href="#${e.icon}" /></svg>`:""}<span>${vi(e.label)}</span>`,e.id?n.id=e.id:e.kind!=="dark"&&!t&&(n.id="modalAction",t=!0),n.addEventListener("click",e.onClick),rt.modalActions.appendChild(n)}oc=i.onClose??null,i.mount?.(rt.modalBody),rt.modal.classList.remove("hidden"),rt.modal.querySelector(".sheet").scrollTop=0,Yt?.setHover(null,null,[]),Hr(),(rt.modalActions.querySelector("button")??rt.closeModal).focus({preventScroll:!0})}function lc(i){return document.contains(i)&&i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden"}function yS(){let i;xe?i=mn&&rt.home.contains(mn)&&lc(mn)?mn:rt.playBtn:i=mn&&mn!==document.body&&document.contains(mn)&&!rt.home.contains(mn)&&!rt.modal.contains(mn)&&lc(mn)?mn:Yt?.canvas??null,i?.focus({preventScroll:!0}),document.activeElement!==i&&(xe?rt.playBtn:Yt?.canvas)?.focus({preventScroll:!0})}function on(i=!0){if(!xn())return;rt.modal.classList.add("hidden"),ro=performance.now()+350;const t=oc;if(oc=null,t?.(),i&&yS(),Us&&!xn()&&!xe){const e=Us;Us=null,uf(e)}else!xn()&&!xe&&!Vn&&uo()}function ho(){const i='<span class="arrow" aria-hidden="true">→</span>',t=xe;Mi({title:"How to Play",body:`
      <div class="steps">
        <div class="step"><div class="step-art" aria-hidden="true">${un(0)}${un(0)}${un(0)}</div>
          <div><h3>1. Merge 3</h3><p>Place 3 or more of the same piece side by side. Diagonals don't count.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${un(0)}${i}${un(1)}${i}${un(2)}</div>
          <div><h3>2. Create bigger</h3><p>A merge makes one piece of the next tier, right where you placed.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${un(4)}${i}${un(5)}${i}${un(7)}</div>
          <div><h3>3. Keep building</h3><p>New pieces can merge again: chains score ×2, ×3, ×4… Castles become Palaces, then Observatories, then Sky Isles. Three Sky Isles throw a festival!</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${un(Re)}</div>
          <div><h3>Rocks</h3><p>Rocks never merge. A Windmill or Castle merge next to them shatters them.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${un(1)}</div>
          <div><h3>Keep slot</h3><p>Stash the next piece and swap it back any time. It's free.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${un(3)}</div>
          <div><h3>Daily Nook</h3><p>One shared island a day: place ${yr} pieces for your best score and keep a streak.</p></div></div>
      </div>
      <p class="keys">The round ends when every tile is full. Hover, or touch and slide, to preview a merge; lift to place, or slide off the board to cancel. Turn the island with the round arrows, or drag anywhere off the island. Tap Next to see what's coming. Pick a bigger or smaller island on the home screen.<br/>
      Keys: <kbd>←↑→↓</kbd> move · <kbd>Enter</kbd> place · <kbd>S</kbd> keep · <kbd>Q</kbd> <kbd>E</kbd> turn · <kbd>I</kbd> odds · <kbd>V</kbd> camera · <kbd>M</kbd> mute · <kbd>Esc</kbd> menu</p>`,actions:[{label:t?rt.playBtn.textContent||"Play":Q.turn===1?"Let's play":"Back to my nook",onClick:()=>{Zt.markHelpSeen(),on(!t),t&&lo()}}],onClose:()=>Zt.markHelpSeen()})}function af(){const i=Ue(Q)==="daily";Mi({title:i?`Daily Nook #${Bs(Q.dailyKey??Ii())}`:"Menu",body:`<div class="menu-list">
      <button class="btn btn-primary" id="menuResume" type="button">Resume</button>
      <button class="btn btn-dark" id="menuNew" type="button">${i?"Restart today's island":"New game"}</button>
      <button class="btn btn-dark" id="menuOdds" type="button">What's coming</button>
      <button class="btn btn-dark" id="menuJournal" type="button">Journal</button>
      <button class="btn btn-dark" id="menuHelp" type="button">How to play</button>
      <button class="btn btn-dark" id="menuSettings" type="button">Settings</button>
      <button class="btn btn-dark" id="menuHome" type="button">Home</button>
    </div>`,mount:t=>{t.querySelector("#menuResume").addEventListener("click",()=>on()),t.querySelector("#menuNew").addEventListener("click",cf),t.querySelector("#menuOdds").addEventListener("click",Gc),t.querySelector("#menuJournal").addEventListener("click",Hc),t.querySelector("#menuHelp").addEventListener("click",ho),t.querySelector("#menuSettings").addEventListener("click",lf),t.querySelector("#menuHome").addEventListener("click",Or)}}),$t("menuResume").focus({preventScroll:!0})}function of(){const i=Zt.getMotion();return i==="system"?Oc.matches:i==="on"}function cc(){const i=of();Yt?.setReducedMotion(i),document.body.classList.toggle("reduce-motion",i),document.body.classList.toggle("allow-motion",Zt.getMotion()==="off")}function lf(){const i=Yt?.getView()??"iso",t=(e,n,s)=>`<button class="switch" id="${e}" type="button" role="switch" aria-checked="${n}" aria-label="${s}"></button>`;Mi({title:"Settings",body:`<div class="settings">
      <div class="setting"><svg aria-hidden="true"><use href="#i-sound" /></svg><span>Sound Effects</span>${t("setSound",he.enabled,"Sound effects")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-note" /></svg><span>Music</span>${t("setMusic",he.music,"Music")}</div>
      ${Tn.supported?`<div class="setting"><svg aria-hidden="true"><use href="#i-vibrate" /></svg><span>Vibration</span>${t("setHaptics",Tn.enabled,"Vibration")}</div>`:""}
      <div class="setting"><svg aria-hidden="true"><use href="#i-motion" /></svg><span>Reduced Motion</span>${t("setMotion",of(),"Reduced motion")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-camera" /></svg><span>Camera</span>
        <span class="segmented" role="group" aria-label="Camera view">
          <button type="button" id="viewIso" aria-pressed="${i==="iso"}">Isometric</button>
          <button type="button" id="viewCozy" aria-pressed="${i==="cozy"}">Close-up</button>
        </span></div>
    </div>`,actions:[{label:"Done",onClick:()=>on()}],mount:e=>{const n=(r,a)=>{const o=e.querySelector(`#${r}`);o?.addEventListener("click",()=>{const l=o.getAttribute("aria-checked")!=="true";o.setAttribute("aria-checked",String(l)),a(l)})};n("setSound",r=>{he.enabled=r,Zt.setSound(r),r&&(he.unlock(),he.swap())}),n("setMusic",r=>{Zt.setMusic(r),he.setMusic(r)}),n("setHaptics",r=>{Tn.enabled=r,Zt.setHaptics(r),r&&Tn.tap()}),n("setMotion",r=>{Zt.setMotion(r===Oc.matches?"system":r?"on":"off"),cc()});const s=r=>{hf(r),e.querySelector("#viewIso").setAttribute("aria-pressed",String(r==="iso")),e.querySelector("#viewCozy").setAttribute("aria-pressed",String(r==="cozy"))};e.querySelector("#viewIso").addEventListener("click",()=>s("iso")),e.querySelector("#viewCozy").addEventListener("click",()=>s("cozy"))}})}function Gc(){const i=Bf(Q.turn,He,Q.board.length),t=(s,r)=>`<div class="odds-row${s===Re?" rock":""}">${un(s,"",40)}<div class="odds-name">${vi(nn(s))}<span class="odds-bar"><i style="width:${r}%"></i></span></div><span class="odds-pct">${r}%</span></div>`,e=i.to===null?`Turn ${i.from} onward`:`Turns ${i.from}–${i.to}`;let n="";if(i.next){const s=new Map(i.rows.map(a=>[a.piece,a.percent])),r=i.next.rows.filter(a=>(s.get(a.piece)??0)!==a.percent).map(a=>`${nn(a.piece)} ${s.get(a.piece)??0}% → ${a.percent}%`);r.length&&(n=`<div class="odds-change"><b>From turn ${i.next.at}:</b> ${vi(r.join(" · "))}</div>`)}Mi({title:"What's coming",body:`<div class="odds">
      <div class="odds-head"><b>${e}</b><span>Turn ${Q.turn}${Ue(Q)==="daily"?` · ${Vs()} left`:""}</span></div>
      ${i.rows.map(s=>t(s.piece,s.percent)).join("")}
      ${n}
      <p class="odds-note">Each new piece is drawn from these odds. When the island is ${Math.round(He.assistFillRatio*100)}% full or more, a piece that can't merge anywhere gets one ${Math.round(He.assistChance*100)}% chance to be redrawn. Rocks get more common as the round goes on.</p>
    </div>`,actions:[{label:"Back to my nook",onClick:()=>on()}]})}function Hc(){const i=rn,t=Ii(),e=(s,r,a=!1)=>`<div class="stat-tile${a?" gold":""}"><small>${s}</small><b>${r}</b></div>`;let n="";if(i.recent.length){const s=[...i.recent].reverse(),r=Math.max(1,...s.map(u=>u.score)),a=300,o=80,l=a/Math.max(s.length,8),c=s.map((u,f)=>{const h=Math.max(2,u.score/r*(o-12));return`<rect class="${`bar${u.mode==="daily"?" daily":""}${f===s.length-1?" latest":""}`}" x="${(f*l+1).toFixed(1)}" y="${(o-h).toFixed(1)}" width="${(l-2).toFixed(1)}" height="${h.toFixed(1)}" rx="2"><title>${vi(u.date)} · ${u.mode} · ${me(u.score)}</title></rect>`}).join("");n=`<svg class="recent-chart" viewBox="0 0 ${a} ${o+12}" role="img" aria-label="Scores of your last ${s.length} rounds, highest ${me(r)}">
      <line class="best-line" x1="0" x2="${a}" y1="12" y2="12" />${c}<text x="${a}" y="9" text-anchor="end">best ${me(r)}</text></svg>`}Mi({title:"Journal",body:i.rounds===0?`<p class="journal-empty">Finish a round to start your journal. It keeps your records, everything you've built and your daily streak.</p>`:`<div class="journal">
      <section><h3>Records</h3><div class="stat-grid">
        ${e("Best classic",me(Math.max(i.bestClassic,zn)),!0)}
        ${e("Best daily",me(i.bestDaily),!0)}
        ${e("Best chain",`×${Math.max(1,i.bestChain)}`)}
        ${e("Biggest move",`+${me(i.biggestMove)}`)}
        ${e("Longest round",Rn(i.longestRound,"turn"))}
        ${e("Most festivals",String(i.mostFestivals))}
      </div></section>
      <section><h3>Built</h3><div class="built-row">
        ${ti.slice(1).map((s,r)=>`<div>${un(r+1,s.name,40)}<b>${me(i.built[r+1]??0)}</b>${vi(s.name.replace("Little ",""))}</div>`).join("")}
      </div></section>
      <section><h3>Lifetime</h3><div class="stat-grid">
        ${e("Rounds",me(i.rounds))}
        ${e("Pieces placed",me(i.pieces))}
        ${e("Festivals",me(i.festivals))}
        ${e("Rocks shattered",me(i.rocksShattered))}
        ${e("Daily streak",Rn(td(i,t),"day"),!0)}
        ${e("Longest streak",Rn(i.daily.bestStreak,"day"))}
      </div></section>
      ${n?`<section><h3>Recent rounds</h3>${n}</section>`:""}
    </div>`,actions:[{label:"Close",onClick:()=>on()}]})}function cf(){if(Ue(Q)==="daily"){if(Q.over||Q.turn<=3){Va(!0);return}Mi({title:"Start today's island again?",body:`<p>This attempt (${me(Q.score)} points) will end. Your best score for today is kept.</p>`,actions:[{label:"Start again",onClick:()=>Va(!0)},{label:"Keep playing",kind:"dark",onClick:()=>on()}]});return}if(Q.over||Q.turn<=3){Xs();return}Mi({title:"Start a fresh nook?",body:`<p>Your current round (${me(Q.score)} points) will end. Your personal best stays saved on this device.</p>`,actions:[{label:"New game",onClick:Xs},{label:"Keep playing",kind:"dark",onClick:()=>on()}]})}function bS(){he.unlock();const{inProgress:i,saved:t}=rf();if(!i||!t||t.turn<=3){Xs();return}Mi({title:"Start a fresh nook?",body:`<p>Your saved round (${me(t.score)} points, turn ${t.turn}) will be replaced. Your personal best stays saved.</p>`,actions:[{label:"New game",onClick:Xs},{label:"Back",kind:"dark",onClick:()=>on()}]})}async function ES(i,t){if(he.gameOver(),Tn.gameOver(),Pn(),await Yt?.gameOverWave(),!(t!==$i||xe||Q!==i.state)){if(xn()){Us=i;return}uf(i)}}function uf(i){const t=i.state,e=Ue(t)==="daily",n=Math.max(e?rn.daily.scores[t.dailyKey??""]??0:zn,t.score),s=e?t.endReason==="limit"?"Day complete!":"Your nook is full!":"Game Over",r=i.highlights.slice(0,3),a=e?[{label:"Classic game",onClick:()=>{on(!1),lo()}},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Gh(t)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:Or}]:[{label:"Play Again",onClick:Xs},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Gh(t)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:Or}];Mi({title:s,art:`<img src="${Ur(t.highestTier,320)}" alt="${vi(ti[t.highestTier].name)}" draggable="false" />`,body:`
      ${i.newBest?`<div class="new-best">${e?"TODAY'S BEST":"NEW PERSONAL BEST"}</div>`:""}
      <p class="final-label">${e?`Daily Nook #${Bs(t.dailyKey??Ii())}`:"Final Score"}</p>
      <div class="final-score">${me(t.score)}</div>
      <div class="final-best"><svg class="crown" aria-hidden="true"><use href="#i-crown" /></svg><small>${e?"Today's best":"Best Score"}</small><b>${me(n)}</b></div>
      ${r.length?`<ul class="highlights">${r.map(o=>`<li>${vi(o)}</li>`).join("")}</ul>`:""}
      <div class="final-stats">
        ${e?"":`<span>Island <b>${dn(t)}×${dn(t)}</b></span>`}
        <span>Turns <b>${t.turn-1}</b></span>
        <span>Best chain <b>×${Math.max(1,t.bestChain)}</b></span>
        <span>Top piece <b>${vi(ti[t.highestTier].name)}</b></span>
        ${(t.festivals??0)>0?`<span>Festivals <b>${t.festivals}</b></span>`:""}
        ${(t.rocksShattered??0)>0?`<span>Rocks <b>${t.rocksShattered}</b></span>`:""}
      </div>`,actions:a,describe:!0}),Mn(`${s} ${e?"":"Final score "}${me(t.score)}.${i.newBest?" New best!":""} ${r.join(". ")}`)}async function Gh(i){const n=`${Ue(i)==="daily"?`Little Nook · Daily #${Bs(i.dailyKey??Ii())}`:`Little Nook · ${dn(i)}×${dn(i)} island`}: ${me(i.score)} points · top piece ${ti[i.highestTier].name} · best chain ×${Math.max(1,i.bestChain)}`,r=document.getElementById("shareBtn")?.querySelector("span");try{if(typeof navigator.share=="function"){await navigator.share({title:"Little Nook",text:n,...ba?{url:ba}:{}});return}}catch(a){if(a?.name==="AbortError")return}try{await navigator.clipboard.writeText(ba?`${n}
${ba}`:n),r&&(r.textContent="Copied!"),Mn("Result copied. Paste it anywhere.")}catch{r&&(r.textContent="Copy not allowed here")}}function wS(i){const t=i.canvas;t.tabIndex=xe?-1:0,t.setAttribute("role","application"),t.setAttribute("aria-label","Puzzle board, 8 by 8 tiles. Use arrow keys to move and Enter to place.");let e=null;const n=new Set;let s=!1;const r=()=>{e=null,Mr=!1,Ki=null,Vn||i.setHover(null,null,[]),Zi&&Pn()};let a=null;const o=()=>Math.PI/Math.max(320,t.clientWidth*.7);t.addEventListener("pointerdown",c=>{if(!(c.button!==0||xe)&&!(performance.now()<ro)&&!a){if(n.add(c.pointerId),n.size>1||s){s=!0,r();return}if(i.pick(c.clientX,c.clientY)===null&&!xn()){n.delete(c.pointerId),a={id:c.pointerId,x0:c.clientX,spin0:i.getSpin(),lastX:c.clientX,lastT:performance.now(),v:0},t.setPointerCapture?.(c.pointerId),t.classList.add("spinning"),c.pointerType!=="mouse"&&c.preventDefault();return}he.unlock(),e={id:c.pointerId,type:c.pointerType},Mr=c.pointerType!=="mouse",t.setPointerCapture?.(c.pointerId),xr={x:c.clientX,y:c.clientY,type:c.pointerType},di(i.pick(c.clientX,c.clientY)),c.pointerType!=="mouse"&&c.preventDefault()}}),t.addEventListener("pointermove",c=>{if(a&&a.id===c.pointerId){const f=performance.now(),h=Math.max(1,f-a.lastT)/1e3;a.v=.7*a.v+.3*(-(c.clientX-a.lastX)*o()/h),a.lastX=c.clientX,a.lastT=f,i.dragSpin(a.spin0-(c.clientX-a.x0)*o());return}if(xr={x:c.clientX,y:c.clientY,type:c.pointerType},e&&e.id!==c.pointerId||!e&&c.pointerType!=="mouse")return;const u=i.pick(c.clientX,c.clientY);u!==Ki&&di(u)});const l=(c,u)=>{if(a&&a.id===c.pointerId){const g=performance.now()-a.lastT>120?0:a.v;a=null,t.classList.remove("spinning"),i.endSpin(u?g:0);return}const f=n.delete(c.pointerId);if(n.size===0){const g=s;if(s=!1,g&&f){r();return}}if(!e||e.id!==c.pointerId)return;const h=e.type;e=null,Mr=!1;const d=i.pick(c.clientX,c.clientY);u&&d!==null&&(Fe=null,i.setCursor(null),rc(d)),h!=="mouse"&&(Ki=null,Vn||i.setHover(null,null,[]),(!u||d===null)&&Pn())};t.addEventListener("pointerup",c=>l(c,!0)),t.addEventListener("pointercancel",c=>l(c,!1)),t.addEventListener("lostpointercapture",c=>{(n.has(c.pointerId)||a?.id===c.pointerId)&&l(c,!1)}),t.addEventListener("pointerleave",c=>{c.pointerType==="mouse"&&!e&&(di(null),!xe&&Zi&&Pn())}),t.addEventListener("contextmenu",c=>c.preventDefault()),rt.stage.addEventListener("touchmove",c=>c.preventDefault(),{passive:!1}),rt.stage.addEventListener("dblclick",c=>c.preventDefault()),document.addEventListener("gesturestart",c=>c.preventDefault()),t.addEventListener("focus",()=>{Fe===null&&!xe&&ic&&(Fe=zh(),i.setCursor(Fe),di(Fe))}),t.addEventListener("blur",()=>{Fe!==null&&(La=Fe),i.setCursor(null),Fe=null,di(null)}),t.addEventListener("keydown",c=>{if(!(xe||xn()))if(c.key==="ArrowRight"||c.key==="ArrowLeft"||c.key==="ArrowUp"||c.key==="ArrowDown"){c.preventDefault();const{dx:u,dy:f}=i.arrowStep(c.key),h=dn(Q),d=Fe??zh(),g=Math.min(h-1,Math.max(0,d%h+u)),M=Math.min(h-1,Math.max(0,Math.floor(d/h)+f));Fe=M*h+g,i.setCursor(Fe),di(Fe);const p=Q.board[Fe],m=p===Te&&!Q.over?sf(Fe):null;Mn(`Row ${M+1}, column ${g+1}: ${p===Te?"empty":nn(p)}.${m?` ${m.text.replace("→","makes")}.`:""} In hand: ${nn(Q.next)}.`)}else(c.key==="Enter"||c.key===" ")&&Fe!==null&&(c.preventDefault(),rc(Fe))})}function TS(){window.addEventListener("keydown",i=>{["Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Enter"," ","Escape"].includes(i.key)&&(ic=!0)},!0),window.addEventListener("pointerdown",()=>ic=!1,!0),window.addEventListener("keydown",i=>{if(i.metaKey||i.ctrlKey||i.altKey)return;if(xn()){if(i.key==="Escape")on();else if(i.key==="Tab"){const e=[...rt.modal.querySelectorAll("button:not(.hidden)")].filter(lc),n=e.indexOf(document.activeElement);i.preventDefault(),e[(n+(i.shiftKey?-1:1)+e.length)%e.length]?.focus()}return}if(xe){i.key==="Enter"&&(document.activeElement===document.body||document.activeElement===null)&&(i.preventDefault(),lo());return}const t=i.key.toLowerCase();i.key==="Escape"?af():t==="s"?ac():t==="q"?Wa(-1):t==="e"?Wa(1):t==="n"?cf():t==="h"||t==="?"?ho():t==="i"?Gc():t==="j"?Hc():t==="m"?AS():t==="v"&&hf(Yt?.getView()==="iso"?"cozy":"iso")})}function AS(){const i=he.enabled||he.music;he.enabled=!i,Zt.setSound(!i),Zt.setMusic(!i),he.setMusic(!i);const t=i?"Sound off (M to turn it back on).":"Sound on.";Ze(t),Mn(t)}function Wa(i){!Yt||xe||xn()||(he.unlock(),he.swap(),Tn.tap(),Yt.rotate(i===-1?1:-1),di(null),Mn(`Island turned ${i===-1?"left":"right"}.`))}function hf(i){Yt&&(Yt.setView(i),Zt.setView(i))}function CS(i){if(i.key==="littleNook.journal"){try{const n=i.newValue?JSON.parse(i.newValue):null;jh(n)&&Zt.adoptJournal(rn=n)}catch{}xe&&Fs();return}if(Vn)return;const t=Ue(Q)==="daily";if(i.key!==(t?"littleNook.daily":wa(dn(Q))))return;const e=t?Zt.loadDaily(Ji):Zt.loadGame(Ji,dn(Q));if(!e){!i.newValue&&RS(i.oldValue)&&!Q.over&&(Ws(t?tf(Ii()):so()),xe?Fs():(Or(),Mn("That round was finished in another tab.")));return}e.seed===Q.seed&&e.turn<=Q.turn||t&&e.dailyKey&&Q.dailyKey&&e.dailyKey<Q.dailyKey||(Ws(e),xe?Fs():(Ze("Updated with progress from another tab."),Mn("Updated with progress from another tab.")))}function RS(i){try{const t=i?JSON.parse(i):null;return Ji(t)&&t.seed===Q.seed&&(t.dailyKey??"")===(Q.dailyKey??"")}catch{return!1}}function PS(){try{Yt=new cS(rt.stage)}catch(a){console.error(a),$t("boot")?.remove(),rt.webglError.classList.remove("hidden"),document.body.classList.remove("booting","at-home"),Ze("3D graphics are unavailable in this browser.","danger");return}const i=Yt;cc(),Oc.addEventListener?.("change",cc),i.onContextRestored=()=>{Ia.clear(),Fr()};const t=Zt.getView();i.setView(t==="cozy"?"cozy":"iso"),wS(i),TS(),rt.keepBtn.addEventListener("click",ac),rt.nextCard.addEventListener("click",()=>{!xe&&!xn()&&Gc()}),rt.menuBtn.addEventListener("click",af),rt.spinLeft.addEventListener("click",()=>Wa(-1)),rt.spinRight.addEventListener("click",()=>Wa(1)),rt.sizePrev.addEventListener("click",()=>kh(-1)),rt.sizeNext.addEventListener("click",()=>kh(1)),rt.playBtn.addEventListener("click",lo),rt.homeNewBtn.addEventListener("click",bS),rt.dailyBtn.addEventListener("click",()=>Va()),rt.homeHelpBtn.addEventListener("click",ho),rt.homeJournalBtn.addEventListener("click",Hc),rt.homeSettingsBtn.addEventListener("click",lf),rt.coachSkip.addEventListener("click",()=>{const a=document.activeElement===rt.coachSkip;co(),a&&oo(),Ze("Tips off. You can read the rules any time in the menu."),Mn("Tips off.")}),rt.hud.addEventListener("click",a=>{a.detail>0&&performance.now()<ro&&(a.stopPropagation(),a.preventDefault())},!0),rt.closeModal.addEventListener("click",()=>on());let e=!1;rt.modal.addEventListener("pointerdown",a=>e=a.target===rt.modal),rt.modal.addEventListener("click",a=>{e&&a.target===rt.modal&&on(),e=!1}),document.addEventListener("visibilitychange",()=>{he.setPaused(document.hidden),document.hidden||(i.markDirty(),xe&&Fs())}),window.addEventListener("storage",CS),document.addEventListener("touchend",()=>he.unlock(),{capture:!0,passive:!0});const n=()=>Bh();window.addEventListener("resize",n),new ResizeObserver(n).observe(rt.dock),wf().then(n),Fr(),Bh(),Pn(),Or();const s=()=>[0,1,2,3,4,Re].forEach(a=>Ur(a)),r=window.requestIdleCallback;r?r(s,{timeout:2e3}):setTimeout(s,800),window.__littleNookBooted=!0,document.body.classList.remove("booting"),$t("boot")?.remove(),window.__littleNook={state:()=>Q,busy:()=>Vn,atHome:()=>xe,cursor:()=>Fe,journal:()=>rn,place:a=>rc(a),swap:ac,startDaily:()=>Va(),tilePixelSize:()=>i.tilePixelSize(),cellToScreen:a=>i.cellToScreen(a,0),setView:a=>i.setView(a),spinQuarter:()=>i.getSpinQuarter(),boardSize:()=>i.getBoardSize()}}PS();if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)){const i=!!navigator.serviceWorker.controller;let t=null,e=Date.now(),n=!1;window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(r=>t=r).catch(()=>{})});const s=()=>{t&&Date.now()-e>3600*1e3&&(e=Date.now(),t.update().catch(()=>{}))};document.addEventListener("visibilitychange",()=>{document.hidden||s()}),window.addEventListener("pageshow",r=>{r.persisted&&s()}),navigator.serviceWorker.addEventListener("controllerchange",()=>{!i||n||(nf=!0,xe||Q.over?(n=!0,location.reload()):(Ze("An update is ready. It loads the next time you open the home screen."),Mn("An update is ready.")))})}
