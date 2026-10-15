(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const uf=""+new URL("nunito-latin-600-normal-Br8yIETf.woff2",import.meta.url).href,hf=""+new URL("nunito-latin-700-normal-Dort48En.woff2",import.meta.url).href,df=""+new URL("nunito-latin-800-normal-Dz8SOQK_.woff2",import.meta.url).href,ff=""+new URL("nunito-latin-900-normal-BVB1fGs6.woff2",import.meta.url).href,pf=""+new URL("dancing-script-latin-700-normal-CX8AaSVl.woff2",import.meta.url).href,mf=[["Nunito",uf,"600"],["Nunito",hf,"700"],["Nunito",df,"800"],["Nunito",ff,"900"],["Dancing Script",pf,"700"]];function gf(){return typeof FontFace>"u"||!document.fonts?Promise.resolve():Promise.all(mf.map(([i,t,e])=>{const n=new FontFace(i,`url(${t}) format('woff2')`,{weight:e,display:"swap"});return document.fonts.add(n),n.load().catch(()=>{})}))}const De=8,dn=De*De,Ae=-1,Re=99,Wn=[{name:"Sprout",hint:"Tier 1 · Common",mergePoints:0},{name:"Tree",hint:"Tier 2 · Growing",mergePoints:20},{name:"Cottage",hint:"Tier 3 · Cosy",mergePoints:90},{name:"Windmill",hint:"Tier 4 · Special",mergePoints:350},{name:"Little Castle",hint:"Tier 5 · Rare",mergePoints:1200}],si=Wn.length-1,kh={name:"Rock",hint:"Obstacle"},un={minGroup:3,groupSizeBonus:.5,comboMultipliers:[1,2,3,4,5],festivalPoints:4e3,rockMinGroup:0,rockCrumblePoints:40,rockBreakTier:3,placePoints:1,spawnPhases:[{fromTurn:1,tiers:[75,25],rock:0},{fromTurn:11,tiers:[60,30,8],rock:7},{fromTurn:31,tiers:[52,32,11],rock:12},{fromTurn:61,tiers:[48,32,12,2],rock:17},{fromTurn:101,tiers:[45,32,13,3],rock:23},{fromTurn:161,tiers:[43,32,14,3],rock:30},{fromTurn:241,tiers:[42,32,14,3],rock:40}],assistFillRatio:.7,assistChance:.35,crowdedRatio:.78};function Va(i,t=un){return i===Re?t.rockMinGroup>0?t.rockMinGroup:1/0:t.minGroup}function Qe(i){return i===Re?kh.name:Wn[i]?.name??"Empty"}function _f(i){return i===Re?kh.hint:Wn[i]?.hint??""}function sc(){return new Array(dn).fill(Ae)}function _r(i){return{x:i%De,y:Math.floor(i/De)}}function vf(i,t){return t*De+i}function rc(i){const{x:t,y:e}=_r(i),n=[];return t>0&&n.push(i-1),t<De-1&&n.push(i+1),e>0&&n.push(i-De),e<De-1&&n.push(i+De),n}function Ir(i,t,e=i[t]){const n=new Set([t]),s=[t];for(;s.length;){const r=s.pop();for(const a of rc(r))!n.has(a)&&i[a]===e&&(n.add(a),s.push(a))}return[...n].sort((r,a)=>r-a)}function bi(i){const t=[];return i.forEach((e,n)=>e===Ae&&t.push(n)),t}function xf(i){let t=0;for(const e of i)e!==Ae&&t++;return t}function Mf(i){const t=sc();return i.forEach((e,n)=>[...e.replace(/\s+/g,"")].forEach((s,r)=>{s!=="."&&(t[vf(r,n)]=s==="R"?99:Number(s)-1)})),t}const Sf=/^(\d{4})-(\d{2})-(\d{2})$/,zh=864e5,Ts=(i,t=2)=>String(i).padStart(t,"0");function yf(i){return`${Ts(i.getFullYear(),4)}-${Ts(i.getMonth()+1)}-${Ts(i.getDate())}`}function Ra(i){const t=Sf.exec(i);if(!t)return NaN;const[e,n,s]=[Number(t[1]),Number(t[2]),Number(t[3])],r=Date.UTC(e,n-1,s),a=new Date(r);return a.getUTCFullYear()===e&&a.getUTCMonth()===n-1&&a.getUTCDate()===s?r:NaN}function bf(i){const t=new Date(i);return`${Ts(t.getUTCFullYear(),4)}-${Ts(t.getUTCMonth()+1)}-${Ts(t.getUTCDate())}`}function Xi(i){return typeof i=="string"&&Number.isFinite(Ra(i))}function Ef(i,t){return Math.round((Ra(t)-Ra(i))/zh)}function Gh(i){const t=Ra(i);return Number.isFinite(t)?bf(t-zh):""}function ac(i){const t=i+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),[((e^e>>>14)>>>0)/4294967296,t]}function Hh(){return typeof crypto<"u"&&"getRandomValues"in crypto?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*2**32)>>>0}function wf(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Vh(i,t=un){let e=t.spawnPhases[0];for(const n of t.spawnPhases)i>=n.fromTurn&&(e=n);return e}function al(i,t=un){const e=Vh(i,t),n=e.tiers.map((r,a)=>[a,r]);e.rock>0&&n.push([Re,e.rock]);const s=n.reduce((r,[,a])=>r+a,0);return n.filter(([,r])=>r>0).map(([r,a])=>[r,a/s])}function nu(i,t,e){const[n,s]=ac(t),r=al(i,e);let a=0;for(const[o,l]of r)if(a+=l,n<a)return[o,s];return[r[r.length-1][0],s]}function Tf(i,t,e){for(const n of bi(i)){const s=[...i];s[n]=t;const r=Va(t,e);if(Ir(s,n,t).length>=r)return!0}return!1}function Wa(i,t,e,n=un){let[s,r]=nu(t,e,n);if(xf(i)/dn>=n.assistFillRatio&&bi(i).length>0&&!Tf(i,s,n)){const[o,l]=ac(r);r=l,o<n.assistChance&&([s,r]=nu(t,r,n))}return[s,r]}function iu(i){const t=i.map(([s,r])=>({piece:s,exact:r*100,percent:Math.floor(r*100)}));let e=100-t.reduce((s,r)=>s+r.percent,0);const n=[...t].sort((s,r)=>r.exact-r.percent-(s.exact-s.percent));for(const s of n){if(e<=0)break;s.percent++,e--}return t.map(({piece:s,percent:r})=>({piece:s,percent:r}))}function Af(i,t=un){const e=Vh(i,t),n=t.spawnPhases[t.spawnPhases.indexOf(e)+1];return{from:e.fromTurn,to:n?n.fromTurn-1:null,rows:iu(al(i,t)),next:n?{at:n.fromTurn,rows:iu(al(n.fromTurn,t))}:null}}function oc(i,t=un){const e={board:sc(),score:0,turn:1,next:0,stash:Ae,rng:i>>>0,over:!1,lastChain:0,bestChain:0,highestTier:0,merges:0,seed:i>>>0,festivals:0,rocksShattered:0},[n,s]=Wa(e.board,e.turn,e.rng,t);return{...e,next:n,rng:s}}function Wh(i,t=un){const e=t.comboMultipliers;return e[Math.min(i-1,e.length-1)]}function Cf(i,t,e,n=un){const s=Wn[i].mergePoints,r=1+n.groupSizeBonus*Math.max(0,t-n.minGroup);return Math.round(s*r*Wh(e,n))}function Rf(i,t,e=un){const n=[];let s=0;for(;;){const r=i[t];if(r===Ae)break;const a=Ir(i,t,r),o=Va(r,e);if(a.length<o)break;if(r===Re){for(const u of a)i[u]=Ae;n.push({kind:"crumble",cells:a,target:t,points:e.rockCrumblePoints*a.length});break}s++;const l=Wh(s,e);if(r===si){for(const h of a)i[h]=Ae;const u=1+e.groupSizeBonus*(a.length-e.minGroup),f=Math.round(e.festivalPoints*u*l);n.push({kind:"festival",step:s,cells:a,target:t,points:f,multiplier:l});break}for(const u of a)i[u]=Ae;i[t]=r+1;const c=r+1>=e.rockBreakTier?Pf(i,a):[];if(n.push({kind:"merge",step:s,fromTier:r,toTier:r+1,cells:a,target:t,points:Cf(r+1,a.length,s,e),multiplier:l}),c.length){for(const u of c)i[u]=Ae;n.push({kind:"crumble",cells:c,target:t,points:e.rockCrumblePoints*c.length})}}return n}function Pf(i,t){const e=new Set;for(const n of t)for(const s of rc(n))i[s]===Re&&e.add(s);return[...e].sort((n,s)=>n-s)}function Xa(i,t,e=un){if(i.over||!Number.isInteger(t)||t<0||t>=dn||i.board[t]!==Ae)return{state:i,events:[],points:0,accepted:!1};const n=[...i.board],s=i.next;n[t]=s;const r=[{kind:"place",index:t,piece:s,points:e.placePoints}],a=Rf(n,t,e);r.push(...a);const o=r.reduce((S,T)=>S+T.points,0),l=a.filter(S=>S.kind==="merge"||S.kind==="festival").length;let c=i.highestTier,u=i.festivals??0,f=i.rocksShattered??0;for(const S of a)S.kind==="merge"&&(c=Math.max(c,S.toTier)),S.kind==="festival"&&(c=si,u++),S.kind==="crumble"&&(f+=S.cells.length);s!==Re&&(c=Math.max(c,s));const h=i.turn+1,[d,_]=Wa(n,h,i.rng,e),E=bi(n).length===0,m=!!i.pieceLimit&&h>i.pieceLimit,p=E||m;return{accepted:!0,events:r,points:o,state:{...i,board:n,score:i.score+o,turn:h,next:d,rng:_,over:p,lastChain:l,bestChain:Math.max(i.bestChain,l),highestTier:c,merges:i.merges+l,festivals:u,rocksShattered:f,...p?{endReason:E?"full":"limit"}:{}}}}function Lf(i,t=un){if(i.over)return i;if(i.stash===Ae){const[e,n]=Wa(i.board,i.turn,i.rng,t);return{...i,stash:i.next,next:e,rng:n}}return{...i,stash:i.next,next:i.stash}}function lc(i,t,e=un){const n=[];for(const s of bi(i)){const r=[...i];r[s]=t;const a=Va(t,e);Ir(r,s,t).length>=a&&n.push(s)}return n}const Fn=i=>typeof i=="number"&&Number.isInteger(i),oo=i=>Fn(i)&&(i===Ae||i===Re||i>=0&&i<=si),su=i=>Fn(i)&&i>=0,is=(i,t)=>i===void 0||t(i);function qi(i){if(!i||typeof i!="object")return!1;const t=i;return Array.isArray(t.board)&&t.board.length===dn&&t.board.every(oo)&&Fn(t.score)&&t.score>=0&&Fn(t.turn)&&t.turn>=1&&oo(t.next)&&t.next!==Ae&&oo(t.stash)&&Fn(t.rng)&&typeof t.over=="boolean"&&Fn(t.lastChain)&&Fn(t.bestChain)&&Fn(t.highestTier)&&Fn(t.merges)&&Fn(t.seed)&&is(t.festivals,su)&&is(t.rocksShattered,su)&&is(t.mode,n=>n==="classic"||n==="daily")&&is(t.dailyKey,Xi)&&is(t.pieceLimit,n=>Fn(n)&&n>0)&&is(t.endReason,n=>n==="full"||n==="limit")&&(t.mode!=="daily"||t.dailyKey!==void 0)?(Object.isExtensible(t)&&(t.festivals??(t.festivals=0),t.rocksShattered??(t.rocksShattered=0)),!0):!1}const vr=120,Df="2026-10-13",If=3,Nf=4,Uf=new Set([27,28,35,36]),Ff=1540483477,Of=200;function Ls(i){return Ef(Df,i)+1}function Bf(i){return wf("little-nook/daily/"+i)}function kf(i,t){const e=sc();let n=(i^Ff)>>>0;const s=()=>{const[a,o]=ac(n);return n=o,a},r=(a,o)=>{for(let l=0;l<Of;l++){const c=a(),u=Math.floor(s()*e.length);if(!(e[u]!==Ae||!o(u))){if(e[u]=c,Ir(e,u,c).length<Va(c,t))return;e[u]=Ae}}};for(let a=0;a<If;a++)r(()=>Re,o=>!Uf.has(o));for(let a=0;a<Nf;a++)r(()=>s()<.6?0:1,()=>!0);return e}function Xh(i,t=un){const e=Bf(i),n=oc(e,t),s=kf(e,t),[r,a]=Wa(s,n.turn,e,t);return{...n,board:s,next:r,rng:a,mode:"daily",dailyKey:i,pieceLimit:vr}}const Yh=20,$h=60;function zf(){return{v:1,rounds:0,pieces:0,built:new Array(si+1).fill(0),festivals:0,rocksShattered:0,bestClassic:0,bestDaily:0,bestChain:0,biggestMove:0,mostFestivals:0,longestRound:0,recent:[],daily:{lastKey:null,streak:0,bestStreak:0,scores:{}}}}const Qn=i=>typeof i=="number"&&Number.isSafeInteger(i)&&i>=0,Ma=i=>!!i&&typeof i=="object"&&!Array.isArray(i),Gf=i=>i==="classic"||i==="daily";function Hf(i){return Ma(i)&&Xi(i.date)&&Gf(i.mode)&&Qn(i.score)&&Qn(i.turns)&&Qn(i.top)&&i.top<=si&&Qn(i.chain)&&Qn(i.festivals)}function qh(i){if(!Ma(i)||i.v!==1||!["rounds","pieces","festivals","rocksShattered","bestClassic","bestDaily","bestChain","biggestMove","mostFestivals","longestRound"].every(r=>Qn(i[r])))return!1;const e=i.built;if(!Array.isArray(e)||e.length!==si+1||!e.every(Qn)||e[0]!==0||!Array.isArray(i.recent)||i.recent.length>Yh||!i.recent.every(Hf))return!1;const n=i.daily;if(!Ma(n)||!(n.lastKey===null||Xi(n.lastKey))||!Qn(n.streak)||!Qn(n.bestStreak)||!Ma(n.scores))return!1;const s=Object.entries(n.scores);return s.length<=$h&&s.every(([r,a])=>Xi(r)&&Qn(a))}function Vf(i,t,e){const n=[...i.built];let{pieces:s,festivals:r,rocksShattered:a}=i;for(const l of t)l.kind==="place"?s++:l.kind==="merge"?n[l.toTier]=(n[l.toTier]??0)+1:l.kind==="festival"?r++:l.kind==="crumble"&&(a+=l.cells.length);const o=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;return{...i,built:n,pieces:s,festivals:r,rocksShattered:a,biggestMove:Math.max(i.biggestMove,o)}}const Wf=i=>i.toLocaleString("en-US"),Ws=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.floor(i)):0;function Kh(i,t){const e=i.daily.lastKey;return e!==null&&(e===t||e===Gh(t))?i.daily.streak:0}const Xf=(i,t,e=t+"s")=>`${i} ${i===1?t:e}`,ru=["Best","2nd best","3rd best"];function Yf(i){const t=Object.keys(i).sort().reverse().slice(0,$h),e={};for(const n of t.reverse())e[n]=i[n];return e}function $f(i,t,e){const n=t.mode??"classic",s=Ws(t.score),r=Ws(t.turn-1),a=Ws(t.bestChain),o=Ws(t.festivals),l=Math.min(si,Ws(t.highestTier)),c=e.slice(0,10),h=[{date:Xi(c)?c:Xi(t.dailyKey)?t.dailyKey:"1970-01-01",mode:n,score:s,turns:r,top:l,chain:a,festivals:o},...i.recent].slice(0,Yh);let d=i.daily;const _=n==="daily"&&Xi(t.dailyKey)?t.dailyKey:null;if(_){const v=Yf({...d.scores,[_]:Math.max(d.scores[_]??0,s)}),{lastKey:w}=d;if(w!==null&&_<w)d={...d,scores:v};else{const R=w===_?d.streak:w===Gh(_)?d.streak+1:1;d={lastKey:_,streak:R,bestStreak:Math.max(d.bestStreak,R),scores:v}}}const E={...i,built:[...i.built],rounds:i.rounds+1,longestRound:Math.max(i.longestRound,r),bestChain:Math.max(i.bestChain,a),mostFestivals:Math.max(i.mostFestivals,o),bestClassic:n==="classic"?Math.max(i.bestClassic,s):i.bestClassic,bestDaily:n==="daily"?Math.max(i.bestDaily,s):i.bestDaily,recent:h,daily:{...d,scores:{...d.scores}}},m=[],p=i.rounds>0,S=Object.keys(i.daily.scores).length>0||i.bestDaily>0,T=n==="daily"&&S&&s>i.bestDaily;T&&m.push(`Best daily yet: ${Wf(s)}`),p&&a>=2&&a>i.bestChain&&m.push(`Best chain ever: ×${a}`),p&&o>i.mostFestivals&&m.push(`New record: ${Xf(o,"festival")} in a round`),p&&r>i.longestRound&&m.push(`New record: longest round (${r} turns)`),_&&d.streak>=2&&d.streak>i.daily.streak&&m.push(`Daily streak: ${d.streak} days`);const g=h.filter(v=>v.mode===n),y=g.slice(1),b=1+y.filter(v=>v.score>s).length,C=y.some(v=>v.score<s);if(g.length>=3&&b<=ru.length&&C&&!T){const v=n==="daily"?"dailies":g.length<h.length?"classic rounds":"rounds";m.push(`${ru[b-1]} of your last ${g.length} ${v}`)}return{journal:E,highlights:m}}function qf(i,t,e=un){const n=Xa(i,t,e),s=n.state.board;let r=n.points*2+bi(s).length*6;const a=s[t];if(a!==Ae){Ir(s,t,a).length===2&&(r+=18+a*6);for(const l of rc(t))s[l]!==Ae&&s[l]!==a&&(r-=3);if(a===Re){const{x:l,y:c}={x:t%8,y:Math.floor(t/8)};(l===0||c===0||l===7||c===7)&&(r+=10)}}return r}const au="littleNook.best",Kf="littleNookBest",ou="littleNook.sound",lu="littleNook.seenHelp",lo="littleNook.game",cu="littleNook.view",uu="littleNook.roundStartBest",hu="littleNook.music",du="littleNook.motion",fu="littleNook.journal",co="littleNook.daily",pu="littleNook.haptics",mu="littleNook.coachDone";function Zf(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}class Jf{constructor(t=Zf()){this.store=t,this.memoBest=0,this.memoJournal=null}get(t){try{return this.store?.getItem(t)??null}catch{return null}}set(t,e){try{this.store?.setItem(t,e)}catch{}}getBest(){const t=Number(this.get(au)??this.get(Kf)??0),e=Number.isFinite(t)&&t>0?Math.floor(t):0;return this.memoBest=Math.max(this.memoBest,e),this.memoBest}submitScore(t){const e=Math.floor(t);return e>this.getBest()?(this.memoBest=e,this.set(au,String(e)),!0):!1}getSound(){return this.get(ou)!=="off"}setSound(t){this.set(ou,t?"on":"off")}hasSeenHelp(){return this.get(lu)==="1"}markHelpSeen(){this.set(lu,"1")}getRoundStartBest(){const t=this.get(uu),e=Number(t);return t!==null&&t!==""&&Number.isFinite(e)&&e>=0?e:null}setRoundStartBest(t){this.set(uu,String(t))}getMusic(){return this.get(hu)!=="off"}setMusic(t){this.set(hu,t?"on":"off")}getMotion(){const t=this.get(du);return t==="on"||t==="off"?t:"system"}setMotion(t){this.set(du,t)}getView(){return this.get(cu)}setView(t){this.set(cu,t)}saveGame(t){this.set(lo,JSON.stringify(t))}clearGame(){this.set(lo,"")}loadGame(t){return this.load(lo,t)}saveDaily(t){this.set(co,JSON.stringify(t))}clearDaily(){this.set(co,"")}loadDaily(t){return this.load(co,t)}getJournal(){return this.memoJournal??this.load(fu,qh)??zf()}saveJournal(t){this.memoJournal=t,this.set(fu,JSON.stringify(t))}adoptJournal(t){this.memoJournal=t}getHaptics(){return this.get(pu)!=="off"}setHaptics(t){this.set(pu,t?"on":"off")}getCoachDone(){return this.get(mu)==="1"}setCoachDone(){this.set(mu,"1")}load(t,e){const n=this.get(t);if(!n)return null;try{const s=JSON.parse(n);return e(s)?s:null}catch{return null}}}const cc="186",Qf=0,gu=1,jf=2,ar=1,tp=2,ir=3,Ki=0,fn=1,En=2,_i=0,or=1,Es=2,_u=3,vu=4,ep=5,bs=100,np=101,ip=102,sp=103,rp=104,ap=200,op=201,lp=202,cp=203,Zh=204,Jh=205,up=206,hp=207,dp=208,fp=209,pp=210,mp=211,gp=212,_p=213,vp=214,ol=0,ll=1,cl=2,xr=3,ul=4,hl=5,dl=6,fl=7,uc=0,xp=1,Mp=2,ti=0,Qh=1,jh=2,td=3,ed=4,nd=5,id=6,hc=7,sd=300,Zi=301,Ds=302,uo=303,ho=304,Ya=306,pl=1e3,mi=1001,ml=1002,qe=1003,Sp=1004,zr=1005,tn=1006,fo=1007,Hi=1008,vn=1009,rd=1010,ad=1011,Mr=1012,dc=1013,ni=1014,kn=1015,ii=1016,fc=1017,pc=1018,Sr=1020,od=35902,ld=35899,cd=1021,ud=1022,zn=1023,Si=1026,Vi=1027,mc=1028,gc=1029,Ji=1030,_c=1031,vc=1033,Sa=33776,ya=33777,ba=33778,Ea=33779,gl=35840,_l=35841,vl=35842,xl=35843,Ml=36196,Sl=37492,yl=37496,bl=37488,El=37489,Pa=37490,wl=37491,Tl=37808,Al=37809,Cl=37810,Rl=37811,Pl=37812,Ll=37813,Dl=37814,Il=37815,Nl=37816,Ul=37817,Fl=37818,Ol=37819,Bl=37820,kl=37821,zl=36492,Gl=36494,Hl=36495,Vl=36283,Wl=36284,La=36285,Xl=36286,yp=3200,Da=0,bp=1,Ii="",$e="srgb",Ia="srgb-linear",Na="linear",me="srgb",po=7680,Ep=519,wp=512,Tp=513,Ap=514,xc=515,Cp=516,Rp=517,Mc=518,Pp=519,hd=35044,xu=35048,Mu="300 es",jn=2e3,yr=2001;function Lp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dp(){const i=Ua("canvas");return i.style.display="block",i}const Su={};function Fa(...i){const t="THREE."+i.shift();console.log(t,...i)}function dd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=dd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=dd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function As(...i){const t=i.join(" ");t in Su||(Su[t]=!0,Yt(...i))}function Ip(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Np={[ol]:ll,[cl]:dl,[ul]:fl,[xr]:hl,[ll]:ol,[dl]:cl,[fl]:ul,[hl]:xr};class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const lr=Math.PI/180,br=180/Math.PI;function ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function Up(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fp(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function Op(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function Bp(i,t=1){return t-Math.abs(Sc(i,t*2)-t)}function kp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hp(i,t){return i+Math.random()*(t-i)}function Vp(i){return i*(.5-Math.random())}function Wp(i){i!==void 0&&(yu=i);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xp(i){return i*lr}function Yp(i){return i*br}function $p(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*d,o*u,o*c);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fd={DEG2RAD:lr,RAD2DEG:br,generateUUID:ei,clamp:te,euclideanModulo:Sc,mapLinear:Up,inverseLerp:Fp,lerp:cr,damp:Op,pingpong:Bp,smoothstep:kp,smootherstep:zp,randInt:Gp,randFloat:Hp,randFloatSpread:Vp,seededRandom:Wp,degToRad:Xp,radToDeg:Yp,isPowerOfTwo:$p,ceilPowerOfTwo:qp,floorPowerOfTwo:Kp,setQuaternionFromProperEuler:Zp,normalize:ge,denormalize:Bn},Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;let ct=Gc;class ri{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],_=r[a+2],E=r[a+3];if(f!==E||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*E;m<0&&(h=-h,d=-d,_=-_,E=-E,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+E*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+E*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hc=class Hc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hc.prototype.isVector3=!0;let P=Hc;const mo=new P,bu=new ri,Vc=class Vc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],E=s[0],m=s[3],p=s[6],S=s[1],T=s[4],g=s[7],y=s[2],b=s[5],C=s[8];return r[0]=a*E+o*S+l*y,r[3]=a*m+o*T+l*b,r[6]=a*p+o*g+l*C,r[1]=c*E+u*S+f*y,r[4]=c*m+u*T+f*b,r[7]=c*p+u*g+f*C,r[2]=h*E+d*S+_*y,r[5]=h*m+d*T+_*b,r[8]=h*p+d*g+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=e*f+n*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return t[0]=f*E,t[1]=(s*c-u*n)*E,t[2]=(o*n-s*a)*E,t[3]=h*E,t[4]=(u*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=d*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(go.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(go.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vc.prototype.isMatrix3=!0;let qt=Vc;const go=new qt,Eu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){const i={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ia]:{primaries:t,whitePoint:n,transfer:Na,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const re=Jp();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ss;class Qp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=Ua("canvas")),ss.width=t.width,ss.height=t.height;const s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ua("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jp=0;class yc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}let tm=0;const vo=new P;class en extends ji{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=mi,s=mi,r=tn,a=Hi,o=zn,l=vn,c=en.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ei(),this.name="",this.source=new yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pl:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pl:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=sd;en.DEFAULT_ANISOTROPY=1;const Wc=class Wc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,g=(d+1)/2,y=(p+1)/2,b=(u+h)/4,C=(f+E)/4,v=(_+m)/4;return T>g&&T>y?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=C/n):g>y?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=b/s,r=v/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=C/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-E)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;let Pe=Wc;class em extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new en(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends em{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pd extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nm extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ha=class Ha{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,_,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,_,E,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,_,E,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,d=a*f,_=o*u,E=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-E*c,e[9]=-o*l,e[2]=E-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,E=c*f;e[0]=h+E*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=E+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,E=c*f;e[0]=h-E*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=E-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,_=o*u,E=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+E,e[1]=l*f,e[5]=E*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,_=o*l,E=o*c;e[0]=l*u,e[4]=E-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-E*f}else if(t.order==="XZY"){const h=a*l,d=a*c,_=o*l,E=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+E,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=E*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,sm)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ai.crossVectors(n,pn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ai.crossVectors(n,pn)),Ai.normalize(),Gr.crossVectors(pn,Ai),s[0]=Ai.x,s[4]=Gr.x,s[8]=pn.x,s[1]=Ai.y,s[5]=Gr.y,s[9]=pn.y,s[2]=Ai.z,s[6]=Gr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],E=n[6],m=n[10],p=n[14],S=n[3],T=n[7],g=n[11],y=n[15],b=s[0],C=s[4],v=s[8],w=s[12],R=s[1],D=s[5],U=s[9],H=s[13],N=s[2],B=s[6],Y=s[10],X=s[14],ot=s[3],$=s[7],tt=s[11],it=s[15];return r[0]=a*b+o*R+l*N+c*ot,r[4]=a*C+o*D+l*B+c*$,r[8]=a*v+o*U+l*Y+c*tt,r[12]=a*w+o*H+l*X+c*it,r[1]=u*b+f*R+h*N+d*ot,r[5]=u*C+f*D+h*B+d*$,r[9]=u*v+f*U+h*Y+d*tt,r[13]=u*w+f*H+h*X+d*it,r[2]=_*b+E*R+m*N+p*ot,r[6]=_*C+E*D+m*B+p*$,r[10]=_*v+E*U+m*Y+p*tt,r[14]=_*w+E*H+m*X+p*it,r[3]=S*b+T*R+g*N+y*ot,r[7]=S*C+T*D+g*B+y*$,r[11]=S*v+T*U+g*Y+y*tt,r[15]=S*w+T*H+g*X+y*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],E=t[7],m=t[11],p=t[15],S=l*d-c*h,T=o*d-c*f,g=o*h-l*f,y=a*d-c*u,b=a*h-l*u,C=a*f-o*u;return e*(E*S-m*T+p*g)-n*(_*S-m*y+p*b)+s*(_*T-E*y+p*C)-r*(_*g-E*b+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],E=t[13],m=t[14],p=t[15],S=e*o-n*a,T=e*l-s*a,g=e*c-r*a,y=n*l-s*o,b=n*c-r*o,C=s*c-r*l,v=u*E-f*_,w=u*m-h*_,R=u*p-d*_,D=f*m-h*E,U=f*p-d*E,H=h*p-d*m,N=S*H-T*U+g*D+y*R-b*w+C*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=(o*H-l*U+c*D)*B,t[1]=(s*U-n*H-r*D)*B,t[2]=(E*C-m*b+p*y)*B,t[3]=(h*b-f*C-d*y)*B,t[4]=(l*R-a*H-c*w)*B,t[5]=(e*H-s*R+r*w)*B,t[6]=(m*g-_*C-p*T)*B,t[7]=(u*C-h*g+d*T)*B,t[8]=(a*U-o*R+c*v)*B,t[9]=(n*R-e*U-r*v)*B,t[10]=(_*b-E*g+p*S)*B,t[11]=(f*g-u*b-d*S)*B,t[12]=(o*w-a*D-l*v)*B,t[13]=(e*D-n*w+s*v)*B,t[14]=(E*T-_*y-m*S)*B,t[15]=(u*y-f*T+h*S)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,E=a*u,m=a*f,p=o*f,S=l*c,T=l*u,g=l*f,y=n.x,b=n.y,C=n.z;return s[0]=(1-(E+p))*y,s[1]=(d+g)*y,s[2]=(_-T)*y,s[3]=0,s[4]=(d-g)*b,s[5]=(1-(h+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(_+T)*C,s[9]=(m-S)*C,s[10]=(1-(h+E))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);const c=1/a,u=1/o,f=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=jn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let _,E;if(l)_=r/(a-r),E=a*r/(a-r);else if(o===jn)_=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===yr)_=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=jn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let _,E;if(l)_=1/(a-r),E=a/(a-r);else if(o===jn)_=-2/(a-r),E=-(a+r)/(a-r);else if(o===yr)_=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ha.prototype.isMatrix4=!0;let ae=Ha;const rs=new P,Dn=new ae,im=new P(0,0,0),sm=new P(1,1,1),Ai=new P,Gr=new P,pn=new P,Tu=new ae,Au=new ri;class Rn{constructor(t=0,e=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rm=0;const Cu=new P,as=new ri,oi=new ae,Hr=new P,Xs=new P,am=new P,om=new ri,Ru=new P(1,0,0),Pu=new P(0,1,0),Lu=new P(0,0,1),Du={type:"added"},lm={type:"removed"},os={type:"childadded",child:null},xo={type:"childremoved",child:null};class We extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new P,e=new Rn,n=new ri,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new qt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Xs,Hr,this.up):oi.lookAt(Hr,Xs,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),as.setFromRotationMatrix(oi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),os.child=t,this.dispatchEvent(os),os.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}We.DEFAULT_UP=new P(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gn extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const E of t.hand.values()){const m=e.getJointPose(E,n),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function So(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Sc(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=So(a,r,t+1/3),this.g=So(a,r,t),this.b=So(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return re.workingToColorSpace(Je.copy(this),t),Math.round(te(Je.r*255,0,255))*65536+Math.round(te(Je.g*255,0,255))*256+Math.round(te(Je.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=$e){re.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Vr);const n=cr(Ci.h,Vr.h,e),s=cr(Ci.s,Vr.s,e),r=cr(Ci.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Ft;Ft.NAMES=md;class Ec{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new Ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Iu extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const In=new P,li=new P,yo=new P,ci=new P,ls=new P,cs=new P,Nu=new P,bo=new P,Eo=new P,wo=new P,To=new Pe,Ao=new Pe,Co=new Pe;class wn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),li.subVectors(n,e),yo.subVectors(t,e);const a=In.dot(In),o=In.dot(li),l=In.dot(yo),c=li.dot(li),u=li.dot(yo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return To.setScalar(0),Ao.setScalar(0),Co.setScalar(0),To.fromBufferAttribute(t,e),Ao.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),li.subVectors(t,e),In.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),In.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ls.subVectors(s,n),cs.subVectors(r,n),bo.subVectors(t,n);const l=ls.dot(bo),c=cs.dot(bo);if(l<=0&&c<=0)return e.copy(n);Eo.subVectors(t,s);const u=ls.dot(Eo),f=cs.dot(Eo);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ls,a);wo.subVectors(t,r);const d=ls.dot(wo),_=cs.dot(wo);if(_>=0&&d<=_)return e.copy(r);const E=d*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(cs,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Nu.subVectors(r,s),o=(f-u)/(f-u+(d-_)),e.copy(s).addScaledVector(Nu,o);const p=1/(m+E+h);return a=E*p,o=h*p,e.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ni{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Xr.subVectors(this.max,Ys),us.subVectors(t.a,Ys),hs.subVectors(t.b,Ys),ds.subVectors(t.c,Ys),Ri.subVectors(hs,us),Pi.subVectors(ds,hs),Oi.subVectors(us,ds);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Oi.z,Oi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Oi.z,0,-Oi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Oi.y,Oi.x,0];return!Ro(e,us,hs,ds,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,us,hs,ds,Xr))?!1:(Yr.crossVectors(Ri,Pi),e=[Yr.x,Yr.y,Yr.z],Ro(e,us,hs,ds,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ui=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,Wr=new Ni,us=new P,hs=new P,ds=new P,Ri=new P,Pi=new P,Oi=new P,Ys=new P,Xr=new P,Yr=new P,Bi=new P;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bi.fromArray(i,r);const o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Fe=new P,$r=new ct;let um=0;class on extends ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hd,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class gd extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _d extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}const hm=new Ni,$s=new P,Po=new P;class Nr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(Po)),this.expandByPoint($s.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let dm=0;const yn=new ae,Lo=new We,fs=new P,mn=new Ni,qs=new Ni,Ve=new P;class Xe extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lp(t)?_d:gd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(mn.min,qs.min),mn.expandByPoint(Ve),Ve.addVectors(mn.max,qs.max),mn.expandByPoint(Ve)):(mn.expandByPoint(qs.min),mn.expandByPoint(qs.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ve.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Ve.add(fs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;const c=new P,u=new P,f=new P,h=new ct,d=new ct,_=new ct,E=new P,m=new P;function p(v,w,R){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(E.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),o[v].add(E),o[w].add(E),o[R].add(E),l[v].add(m),l[w].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,w=S.length;v<w;++v){const R=S[v],D=R.start,U=R.count;for(let H=D,N=D+U;H<N;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const T=new P,g=new P,y=new P,b=new P;function C(v){y.fromBufferAttribute(s,v),b.copy(y);const w=o[v];T.copy(w),T.sub(y.multiplyScalar(y.dot(w))).normalize(),g.crossVectors(b,w);const D=g.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,w=S.length;v<w;++v){const R=S[v],D=R.start,U=R.count;for(let H=D,N=D+U;H<N;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,f=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),E=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?d=l[E]*o.data.stride+o.offset:d=l[E]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new on(h,u,f)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hd,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const sn=new P;class Oa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Do=new P,pm=new P,mm=new qt;class fi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Do.subVectors(n,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Do),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mm.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let gm=0;class ts extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=or,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Jh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vd extends ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ps;const Ks=new P,ms=new P,gs=new P,_s=new ct,Zs=new ct,xd=new ae,qr=new P,Js=new P,Kr=new P,Uu=new ct,Io=new ct,Fu=new ct;class _m extends We{constructor(t=new vd){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fm(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Oa(n,3,0,!1)),ps.setAttribute("uv",new Oa(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),xd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Zr(qr.set(-.5,-.5,0),gs,a,ms,s,r),Zr(Js.set(.5,-.5,0),gs,a,ms,s,r),Zr(Kr.set(.5,.5,0),gs,a,ms,s,r),Uu.set(0,0),Io.set(1,0),Fu.set(1,1);let o=t.ray.intersectTriangle(qr,Js,Kr,!1,Ks);if(o===null&&(Zr(Js.set(-.5,.5,0),gs,a,ms,s,r),Io.set(0,1),o=t.ray.intersectTriangle(qr,Kr,Js,!1,Ks),o===null))return;const l=t.ray.origin.distanceTo(Ks);l<t.near||l>t.far||e.push({distance:l,point:Ks.clone(),uv:wn.getInterpolation(Ks,qr,Js,Kr,Uu,Io,Fu,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zr(i,t,e,n,s,r){_s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zs.x=r*_s.x-s*_s.y,Zs.y=s*_s.x+r*_s.y):Zs.copy(_s),i.copy(t),i.x+=Zs.x,i.y+=Zs.y,i.applyMatrix4(xd)}const hi=new P,No=new P,Jr=new P,Qr=new P;class Md{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){No.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Qr.copy(this.origin).sub(No);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=Qr.dot(this.direction),l=-Qr.dot(Jr),c=Qr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const E=1/u;f*=E,h*=E,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(No).addScaledVector(Jr,h),d}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,_=e.x-a.x,E=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,T=n.z-a.z,g=Math.abs(l),y=Math.abs(c),b=Math.abs(u);let C,v,w,R,D,U,H,N,B,Y,X,ot;if(g>=y&&g>=b?(w=l,U=f,B=_,ot=p,l>=0?(C=c,v=u,R=h,D=d,H=E,N=m,Y=S,X=T):(C=u,v=c,R=d,D=h,H=m,N=E,Y=T,X=S)):y>=b?(w=c,U=h,B=E,ot=S,c>=0?(C=u,v=l,R=d,D=f,H=m,N=_,Y=T,X=p):(C=l,v=u,R=f,D=d,H=_,N=m,Y=p,X=T)):(w=u,U=d,B=m,ot=T,u>=0?(C=l,v=c,R=f,D=h,H=_,N=E,Y=p,X=S):(C=c,v=l,R=h,D=f,H=E,N=_,Y=S,X=p)),w===0)return null;const $=C/w,tt=v/w,it=1/w,It=R-$*U,Ct=D-tt*U,ce=H-$*B,ee=N-tt*B,oe=Y-$*ot,Z=X-tt*ot,et=oe*ee-Z*ce,St=It*Z-Ct*oe,Ht=ce*Ct-ee*It;if(s){if(et<0||St<0||Ht<0)return null}else if((et<0||St<0||Ht<0)&&(et>0||St>0||Ht>0))return null;const wt=et+St+Ht;if(wt===0)return null;const Wt=it*(et*U+St*B+Ht*ot);return(wt>0?Wt<0:Wt>0)?null:this.at(Wt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pi extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ou=new ae,ki=new Md,jr=new Nr,Bu=new P,ta=new P,ea=new P,na=new P,Uo=new P,ia=new P,ku=new P,sa=new P;class Ee extends We{constructor(t=new Xe,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Uo.fromBufferAttribute(f,t),a?ia.addScaledVector(Uo,u):ia.addScaledVector(Uo.sub(e),u))}e.add(ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(jr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(jr,Bu)===null||ki.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=h.length;_<E;_++){const m=h[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let g=S,y=T;g<y;g+=3){const b=o.getX(g),C=o.getX(g+1),v=o.getX(g+2);s=ra(this,p,t,n,c,u,f,b,C,v),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let m=_,p=E;m<p;m+=3){const S=o.getX(m),T=o.getX(m+1),g=o.getX(m+2);s=ra(this,a,t,n,c,u,f,S,T,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=h.length;_<E;_++){const m=h[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=S,y=T;g<y;g+=3){const b=g,C=g+1,v=g+2;s=ra(this,p,t,n,c,u,f,b,C,v),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let m=_,p=E;m<p;m+=3){const S=m,T=m+1,g=m+2;s=ra(this,a,t,n,c,u,f,S,T,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vm(i,t,e,n,s,r,a,o){let l;if(t.side===fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;sa.copy(o),sa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:i}}function ra(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ta),i.getVertexPosition(l,ea),i.getVertexPosition(c,na);const u=vm(i,t,e,n,ta,ea,na,ku);if(u){const f=new P;wn.getBarycoord(ku,ta,ea,na,f),s&&(u.uv=wn.getInterpolatedAttribute(s,o,l,c,f,new ct)),r&&(u.uv1=wn.getInterpolatedAttribute(r,o,l,c,f,new ct)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,l,c,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};wn.getNormal(ta,ea,na,h.normal),u.face=h,u.barycoord=f}return u}class Sd extends en{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,u=qe,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zu extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new ae,Gu=new ae,aa=[],Hu=new Ni,xm=new ae,Qs=new Ee,js=new Nr;class Ba extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Hu.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Hu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),js.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Gu.multiplyMatrices(n,vs),Qs.matrixWorld=Gu,Qs.raycast(t,aa);for(let a=0,o=aa.length;a<o;a++){const l=aa[a];l.instanceId=r,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sd(new Float32Array(s*this.count),s,this.count,mc,kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zi=new Nr,Mm=new ct(.5,.5),oa=new P;class wc{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],E=r[9],m=r[10],p=r[11],S=r[12],T=r[13],g=r[14],y=r[15];if(s[0].setComponents(c-a,d-u,p-_,y-S).normalize(),s[1].setComponents(c+a,d+u,p+_,y+S).normalize(),s[2].setComponents(c+o,d+f,p+E,y+T).normalize(),s[3].setComponents(c-o,d-f,p-E,y-T).normalize(),n)s[4].setComponents(l,h,m,g).normalize(),s[5].setComponents(c-l,d-h,p-m,y-g).normalize();else if(s[4].setComponents(c-l,d-h,p-m,y-g).normalize(),e===jn)s[5].setComponents(c+l,d+h,p+m,y+g).normalize();else if(e===yr)s[5].setComponents(l,h,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);const e=Mm.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yd extends en{constructor(t=[],e=Zi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $a extends en{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Er extends en{constructor(t,e,n=ni,s,r,a,o=qe,l=qe,c,u=Si,f=1){if(u!==Si&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Sm extends Er{constructor(t,e=ni,n=Zi,s,r,a=qe,o=qe,l,c=Si){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bd extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zs extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2));function _(E,m,p,S,T,g,y,b,C,v,w){const R=g/C,D=y/v,U=g/2,H=y/2,N=b/2,B=C+1,Y=v+1;let X=0,ot=0;const $=new P;for(let tt=0;tt<Y;tt++){const it=tt*D-H;for(let It=0;It<B;It++){const Ct=It*R-U;$[E]=Ct*S,$[m]=it*T,$[p]=N,c.push($.x,$.y,$.z),$[E]=0,$[m]=0,$[p]=b>0?1:-1,u.push($.x,$.y,$.z),f.push(It/C),f.push(1-tt/v),X+=1}}for(let tt=0;tt<v;tt++)for(let it=0;it<C;it++){const It=h+it+B*tt,Ct=h+it+B*(tt+1),ce=h+(it+1)+B*(tt+1),ee=h+(it+1)+B*tt;l.push(It,Ct,ee),l.push(Ct,ce,ee),ot+=6}o.addGroup(d,ot,w),d+=ot,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ur extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let _=0;const E=[],m=n/2;let p=0;S(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2));function S(){const g=new P,y=new P;let b=0;const C=(e-t)/n;for(let v=0;v<=r;v++){const w=[],R=v/r,D=R*(e-t)+t;for(let U=0;U<=s;U++){const H=U/s,N=H*l+o,B=Math.sin(N),Y=Math.cos(N);y.x=D*B,y.y=-R*n+m,y.z=D*Y,f.push(y.x,y.y,y.z),g.set(B,C,Y).normalize(),h.push(g.x,g.y,g.z),d.push(H,1-R),w.push(_++)}E.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const R=E[w][v],D=E[w+1][v],U=E[w+1][v+1],H=E[w][v+1];(t>0||w!==0)&&(u.push(R,D,H),b+=3),(e>0||w!==r-1)&&(u.push(D,U,H),b+=3)}c.addGroup(p,b,0),p+=b}function T(g){const y=_,b=new ct,C=new P;let v=0;const w=g===!0?t:e,R=g===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),_++;const D=_;for(let U=0;U<=s;U++){const N=U/s*l+o,B=Math.cos(N),Y=Math.sin(N);C.x=w*Y,C.y=m*R,C.z=w*B,f.push(C.x,C.y,C.z),h.push(0,R,0),b.x=B*.5+.5,b.y=Y*.5*R+.5,d.push(b.x,b.y),_++}for(let U=0;U<s;U++){const H=y+U,N=D+U;g===!0?u.push(N,N+1,H):u.push(N+1,N,H),v+=3}c.addGroup(p,v,g===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tc extends Ur{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Tc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends Xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const T=new P,g=new P,y=new P;for(let b=0;b<e.length;b+=3)d(e[b+0],T),d(e[b+1],g),d(e[b+2],y),l(T,g,y,S)}function l(S,T,g,y){const b=y+1,C=[];for(let v=0;v<=b;v++){C[v]=[];const w=S.clone().lerp(g,v/b),R=T.clone().lerp(g,v/b),D=b-v;for(let U=0;U<=D;U++)U===0&&v===b?C[v][U]=w:C[v][U]=w.clone().lerp(R,U/D)}for(let v=0;v<b;v++)for(let w=0;w<2*(b-v)-1;w++){const R=Math.floor(w/2);w%2===0?(h(C[v][R+1]),h(C[v+1][R]),h(C[v][R])):(h(C[v][R+1]),h(C[v+1][R+1]),h(C[v+1][R]))}}function c(S){const T=new P;for(let g=0;g<r.length;g+=3)T.x=r[g+0],T.y=r[g+1],T.z=r[g+2],T.normalize().multiplyScalar(S),r[g+0]=T.x,r[g+1]=T.y,r[g+2]=T.z}function u(){const S=new P;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];const g=m(S)/2/Math.PI+.5,y=p(S)/Math.PI+.5;a.push(g,1-y)}_(),f()}function f(){for(let S=0;S<a.length;S+=6){const T=a[S+0],g=a[S+2],y=a[S+4],b=Math.max(T,g,y),C=Math.min(T,g,y);b>.9&&C<.1&&(T<.2&&(a[S+0]+=1),g<.2&&(a[S+2]+=1),y<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,T){const g=S*3;T.x=t[g+0],T.y=t[g+1],T.z=t[g+2]}function _(){const S=new P,T=new P,g=new P,y=new P,b=new ct,C=new ct,v=new ct;for(let w=0,R=0;w<r.length;w+=9,R+=6){S.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),g.set(r[w+6],r[w+7],r[w+8]),b.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),y.copy(S).add(T).add(g).divideScalar(3);const D=m(y);E(b,R+0,S,D),E(C,R+2,T,D),E(v,R+4,g,D)}}function E(S,T,g,y){y<0&&S.x===1&&(a[T]=S.x-1),g.x===0&&g.z===0&&(a[T]=y/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.vertices,t.indices,t.radius,t.detail)}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new ae;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(te(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ac extends ai{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ym extends Ac{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Vu=new P,Wu=new P,Fo=new Cc,Oo=new Cc,Bo=new Cc;class bm extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Wu.subVectors(s[0],s[1]).add(s[0]),c=Wu);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Vu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Vu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),E=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);E<1e-4&&(E=1),_<1e-4&&(_=E),m<1e-4&&(m=E),Fo.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,E,m),Oo.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,E,m),Bo.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,E,m)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Oo.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Bo.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Fo.calc(l),Oo.calc(l),Bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Em(i,t){const e=1-i;return e*e*t}function wm(i,t){return 2*(1-i)*i*t}function Tm(i,t){return i*i*t}function ur(i,t,e,n){return Em(i,t)+wm(i,e)+Tm(i,n)}function Am(i,t){const e=1-i;return e*e*e*t}function Cm(i,t){const e=1-i;return 3*e*e*i*t}function Rm(i,t){return 3*(1-i)*i*i*t}function Pm(i,t){return i*i*i*t}function hr(i,t,e,n,s){return Am(i,t)+Cm(i,e)+Rm(i,n)+Pm(i,s)}class Ed extends ai{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lm extends ai{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wd extends ai{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dm extends ai{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Td extends ai{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(t,s.x,r.x,a.x),ur(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Im extends ai{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(t,s.x,r.x,a.x),ur(t,s.y,r.y,a.y),ur(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ad extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Xu(o,l.x,c.x,u.x,f.x),Xu(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Yl=Object.freeze({__proto__:null,ArcCurve:ym,CatmullRomCurve3:bm,CubicBezierCurve:Ed,CubicBezierCurve3:Lm,EllipseCurve:Ac,LineCurve:wd,LineCurve3:Dm,QuadraticBezierCurve:Td,QuadraticBezierCurve3:Im,SplineCurve:Ad});class Nm extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Yl[s.type]().fromJSON(s))}return this}}class Yu extends Nm{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wd(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Td(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Ed(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ad(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ac(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gs extends Yu{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Yu().fromJSON(s))}return this}}function Um(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Cd(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=zm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){const d=i[h],_=i[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return wr(r,a,e,o,l,c,0),a}function Cd(i,t,e,n,s){let r;if(s===Jm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=$u(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=$u(a/n|0,i[a],i[a+1],r);return r&&Is(r,r.next)&&(Ar(r),r=r.next),r}function Qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Is(e,e.next)||Le(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Xm(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Om(i,n,s,r):Fm(i)){t.push(l.i,i.i,c.i),Ar(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Bm(Qi(i),t),wr(i,t,e,n,s,r,2)):a===2&&km(i,t,e,n,s,r):wr(Qi(i),t,e,n,s,r,1);break}}}function Fm(i){const t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&sr(s,o,r,l,a,c,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Om(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Le(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),E=Math.max(o,l,c),m=Math.max(u,f,h),p=$l(d,_,t,e,n),S=$l(E,m,t,e,n);let T=i.prevZ,g=i.nextZ;for(;T&&T.z>=p&&g&&g.z<=S;){if(T.x>=d&&T.x<=E&&T.y>=_&&T.y<=m&&T!==s&&T!==a&&sr(o,u,l,f,c,h,T.x,T.y)&&Le(T.prev,T,T.next)>=0||(T=T.prevZ,g.x>=d&&g.x<=E&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&sr(o,u,l,f,c,h,g.x,g.y)&&Le(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=E&&T.y>=_&&T.y<=m&&T!==s&&T!==a&&sr(o,u,l,f,c,h,T.x,T.y)&&Le(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;g&&g.z<=S;){if(g.x>=d&&g.x<=E&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&sr(o,u,l,f,c,h,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Bm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Is(n,s)&&Pd(n,e,e.next,s)&&Tr(n,s)&&Tr(s,n)&&(t.push(n.i,e.i,s.i),Ar(e),Ar(e.next),e=i=s),e=e.next}while(e!==i);return Qi(e)}function km(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qm(a,o)){let l=Ld(a,o);a=Qi(a,a.next),l=Qi(l,l.next),wr(a,t,e,n,s,r,0),wr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zm(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Cd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($m(c))}s.sort(Gm);for(let r=0;r<s.length;r++)e=Hm(s[r],e);return e}function Gm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hm(i,t){const e=Vm(i,t);if(!e)return t;const n=Ld(e,i);return Qi(n,n.next),Qi(e,e.next)}function Vm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Is(i,e))return e;do{if(Is(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Rd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Tr(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&Wm(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function Wm(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function Xm(i,t,e,n){let s=i;do s.z===0&&(s.z=$l(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ym(s)}function Ym(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function $l(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $m(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Rd(i,t,e,n,s,r,a,o)}function qm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Km(i,t)&&(Tr(i,t)&&Tr(t,i)&&Zm(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||Is(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Is(i,t){return i.x===t.x&&i.y===t.y}function Pd(i,t,e,n){const s=ca(Le(i,t,e)),r=ca(Le(i,t,n)),a=ca(Le(e,n,i)),o=ca(Le(e,n,t));return!!(s!==r&&a!==o||s===0&&la(i,e,t)||r===0&&la(i,n,t)||a===0&&la(e,i,n)||o===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ca(i){return i>0?1:i<0?-1:0}function Km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Tr(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function Zm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ld(i,t){const e=ql(i.i,i.x,i.y),n=ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $u(i,t,e,n){const s=ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Qm{static triangulate(t,e,n=2){return Um(t,e,n)}}class gi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return gi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];qu(t),Ku(n,t);let a=t.length;e.forEach(qu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ku(n,e[l]);const o=Qm.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function qu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ka extends Xe{constructor(t=new Gs([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new we(s,3)),this.setAttribute("uv",new we(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:jm;let T,g=!1,y,b,C,v;if(p){T=p.getSpacedPoints(u),g=!0,h=!1;const nt=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(u,nt),b=new P,C=new P,v=new P}h||(m=0,d=0,_=0,E=0);const w=o.extractPoints(c);let R=w.shape;const D=w.holes;if(!gi.isClockWise(R)){R=R.reverse();for(let nt=0,lt=D.length;nt<lt;nt++){const ut=D[nt];gi.isClockWise(ut)&&(D[nt]=ut.reverse())}}function H(nt){const ut=10000000000000001e-36;let ht=nt[0];for(let pt=1;pt<=nt.length;pt++){const kt=pt%nt.length,Bt=nt[kt],Xt=Bt.x-ht.x,$t=Bt.y-ht.y,L=Xt*Xt+$t*$t,ue=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ht.x),Math.abs(ht.y)),ne=ut*ue*ue;if(L<=ne){nt.splice(kt,1),pt--;continue}ht=Bt}}H(R),D.forEach(H);const N=D.length,B=R;for(let nt=0;nt<N;nt++){const lt=D[nt];R=R.concat(lt)}function Y(nt,lt,ut){return lt||se("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(lt,ut)}const X=R.length;function ot(nt,lt,ut){let ht,pt,kt;const Bt=nt.x-lt.x,Xt=nt.y-lt.y,$t=ut.x-nt.x,L=ut.y-nt.y,ue=Bt*Bt+Xt*Xt,ne=Bt*L-Xt*$t;if(Math.abs(ne)>Number.EPSILON){const A=Math.sqrt(ue),x=Math.sqrt($t*$t+L*L),O=lt.x-Xt/A,G=lt.y+Bt/A,q=ut.x-L/x,dt=ut.y+$t/x,ft=((q-O)*L-(dt-G)*$t)/(Bt*L-Xt*$t);ht=O+Bt*ft-nt.x,pt=G+Xt*ft-nt.y;const K=ht*ht+pt*pt;if(K<=2)return new ct(ht,pt);kt=Math.sqrt(K/2)}else{let A=!1;Bt>Number.EPSILON?$t>Number.EPSILON&&(A=!0):Bt<-Number.EPSILON?$t<-Number.EPSILON&&(A=!0):Math.sign(Xt)===Math.sign(L)&&(A=!0),A?(ht=-Xt,pt=Bt,kt=Math.sqrt(ue)):(ht=Bt,pt=Xt,kt=Math.sqrt(ue/2))}return new ct(ht/kt,pt/kt)}const $=[];for(let nt=0,lt=B.length,ut=lt-1,ht=nt+1;nt<lt;nt++,ut++,ht++)ut===lt&&(ut=0),ht===lt&&(ht=0),$[nt]=ot(B[nt],B[ut],B[ht]);const tt=[];let it,It=$.concat();for(let nt=0,lt=N;nt<lt;nt++){const ut=D[nt];it=[];for(let ht=0,pt=ut.length,kt=pt-1,Bt=ht+1;ht<pt;ht++,kt++,Bt++)kt===pt&&(kt=0),Bt===pt&&(Bt=0),it[ht]=ot(ut[ht],ut[kt],ut[Bt]);tt.push(it),It=It.concat(it)}let Ct;if(m===0)Ct=gi.triangulateShape(B,D);else{const nt=[],lt=[];for(let ut=0;ut<m;ut++){const ht=ut/m,pt=d*Math.cos(ht*Math.PI/2),kt=_*Math.sin(ht*Math.PI/2)+E;for(let Bt=0,Xt=B.length;Bt<Xt;Bt++){const $t=Y(B[Bt],$[Bt],kt);St($t.x,$t.y,-pt),ht===0&&nt.push($t)}for(let Bt=0,Xt=N;Bt<Xt;Bt++){const $t=D[Bt];it=tt[Bt];const L=[];for(let ue=0,ne=$t.length;ue<ne;ue++){const A=Y($t[ue],it[ue],kt);St(A.x,A.y,-pt),ht===0&&L.push(A)}ht===0&&lt.push(L)}}Ct=gi.triangulateShape(nt,lt)}const ce=Ct.length,ee=_+E;for(let nt=0;nt<X;nt++){const lt=h?Y(R[nt],It[nt],ee):R[nt];g?(C.copy(y.normals[0]).multiplyScalar(lt.x),b.copy(y.binormals[0]).multiplyScalar(lt.y),v.copy(T[0]).add(C).add(b),St(v.x,v.y,v.z)):St(lt.x,lt.y,0)}for(let nt=1;nt<=u;nt++)for(let lt=0;lt<X;lt++){const ut=h?Y(R[lt],It[lt],ee):R[lt];g?(C.copy(y.normals[nt]).multiplyScalar(ut.x),b.copy(y.binormals[nt]).multiplyScalar(ut.y),v.copy(T[nt]).add(C).add(b),St(v.x,v.y,v.z)):St(ut.x,ut.y,f/u*nt)}for(let nt=m-1;nt>=0;nt--){const lt=nt/m,ut=d*Math.cos(lt*Math.PI/2),ht=_*Math.sin(lt*Math.PI/2)+E;for(let pt=0,kt=B.length;pt<kt;pt++){const Bt=Y(B[pt],$[pt],ht);St(Bt.x,Bt.y,f+ut)}for(let pt=0,kt=D.length;pt<kt;pt++){const Bt=D[pt];it=tt[pt];for(let Xt=0,$t=Bt.length;Xt<$t;Xt++){const L=Y(Bt[Xt],it[Xt],ht);g?St(L.x,L.y+T[u-1].y,T[u-1].x+ut):St(L.x,L.y,f+ut)}}}oe(),Z();function oe(){const nt=s.length/3;if(h){let lt=0,ut=X*lt;for(let ht=0;ht<ce;ht++){const pt=Ct[ht];Ht(pt[2]+ut,pt[1]+ut,pt[0]+ut)}lt=u+m*2,ut=X*lt;for(let ht=0;ht<ce;ht++){const pt=Ct[ht];Ht(pt[0]+ut,pt[1]+ut,pt[2]+ut)}}else{for(let lt=0;lt<ce;lt++){const ut=Ct[lt];Ht(ut[2],ut[1],ut[0])}for(let lt=0;lt<ce;lt++){const ut=Ct[lt];Ht(ut[0]+X*u,ut[1]+X*u,ut[2]+X*u)}}n.addGroup(nt,s.length/3-nt,0)}function Z(){const nt=s.length/3;let lt=0;et(B,lt),lt+=B.length;for(let ut=0,ht=D.length;ut<ht;ut++){const pt=D[ut];et(pt,lt),lt+=pt.length}n.addGroup(nt,s.length/3-nt,1)}function et(nt,lt){let ut=nt.length;for(;--ut>=0;){const ht=ut;let pt=ut-1;pt<0&&(pt=nt.length-1);for(let kt=0,Bt=u+m*2;kt<Bt;kt++){const Xt=X*kt,$t=X*(kt+1),L=lt+ht+Xt,ue=lt+pt+Xt,ne=lt+pt+$t,A=lt+ht+$t;wt(L,ue,ne,A)}}}function St(nt,lt,ut){l.push(nt),l.push(lt),l.push(ut)}function Ht(nt,lt,ut){Wt(nt),Wt(lt),Wt(ut);const ht=s.length/3,pt=S.generateTopUV(n,s,ht-3,ht-2,ht-1);pe(pt[0]),pe(pt[1]),pe(pt[2])}function wt(nt,lt,ut,ht){Wt(nt),Wt(lt),Wt(ht),Wt(lt),Wt(ut),Wt(ht);const pt=s.length/3,kt=S.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);pe(kt[0]),pe(kt[1]),pe(kt[3]),pe(kt[1]),pe(kt[2]),pe(kt[3])}function Wt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function pe(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return t0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yl[s.type]().fromJSON(s)),new Ka(n,t.options)}}const jm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ct(r,a),new ct(o,l),new ct(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],_=t[s*3+2],E=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-f),new ct(h,1-_),new ct(E,1-p)]:[new ct(o,1-l),new ct(u,1-f),new ct(d,1-_),new ct(m,1-p)]}};function t0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Rc extends qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rc(t.radius,t.detail)}}class Hs extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],E=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let T=0;T<c;T++){const g=T*f-r;_.push(g,-S,0),E.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const T=S+c*p,g=S+c*(p+1),y=S+1+c*(p+1),b=S+1+c*p;d.push(T,g,b),d.push(g,y,b)}this.setIndex(d),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(E,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class dr extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new P,_=new ct;for(let E=0;E<=s;E++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}f+=h}for(let E=0;E<s;E++){const m=E*(n+1);for(let p=0;p<n;p++){const S=p+m,T=S,g=S+n+1,y=S+n+2,b=S+1;o.push(T,g,b),o.push(g,y,b)}}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fr extends Xe{constructor(t=new Gs([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(r,3)),this.setAttribute("uv",new we(a,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const _=h.holes;gi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const S=_[m];gi.isClockWise(S)===!0&&(_[m]=S.reverse())}const E=gi.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const S=_[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=E.length;m<p;m++){const S=E[m],T=S[0]+f,g=S[1]+f,y=S[2]+f;n.push(T,g,y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return e0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Fr(n,t.curveSegments)}}function e0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Pc extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new P,h=new P,d=[],_=[],E=[],m=[];for(let p=0;p<=n;p++){const S=[],T=p/n,g=a+T*o,y=t*Math.cos(g),b=Math.sqrt(t*t-y*y);let C=0;p===0&&a===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){const w=v/e,R=s+w*r;f.x=-b*Math.cos(R),f.y=y,f.z=b*Math.sin(R),_.push(f.x,f.y,f.z),h.copy(f).normalize(),E.push(h.x,h.y,h.z),m.push(w+C,1-T),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const T=u[p][S+1],g=u[p][S],y=u[p+1][S],b=u[p+1][S+1];(p!==0||a>0)&&d.push(T,g,b),(p!==n-1||l<Math.PI)&&d.push(g,y,b)}this.setIndex(d),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(E,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lc extends qa{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lc(t.radius,t.detail)}}function Ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Zu(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Zu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=Ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Zu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function n0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const i0={clone:Ns,merge:rn};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=n0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class a0 extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Us extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class o0 extends ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=uc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class l0 extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c0 extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Id extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ju extends Id{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ko=new ae,Qu=new P,ju=new P;class u0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ko,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===yr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ua=new P,ha=new ri,Kn=new P;class Nd extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,ha,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,ha,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new P,th=new ct,eh=new ct;class bn extends Nd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Cr extends Nd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class h0 extends u0{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class da extends Id{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new h0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const xs=-90,Ms=1;class d0 extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(xs,Ms,t,e);s.layers=this.layers,this.add(s);const r=new bn(xs,Ms,t,e);r.layers=this.layers,this.add(r);const a=new bn(xs,Ms,t,e);a.layers=this.layers,this.add(a);const o=new bn(xs,Ms,t,e);o.layers=this.layers,this.add(o);const l=new bn(xs,Ms,t,e);l.layers=this.layers,this.add(l);const c=new bn(xs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class f0 extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const nh=new ae;class p0{constructor(t,e,n=0,s=1/0){this.ray=new Md(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(t,e=!0,n=[]){return Kl(t,this,n,e),n.sort(ih),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kl(t[s],this,n,e);return n.sort(ih),n}}function ih(i,t){return i.distance-t.distance}function Kl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Kl(r[a],t,e,!0)}}const Xc=class Xc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Xc.prototype.isMatrix2=!0;let sh=Xc;function rh(i,t,e,n){const s=m0(n);switch(e){case cd:return i*t;case mc:return i*t/s.components*s.byteLength;case gc:return i*t/s.components*s.byteLength;case Ji:return i*t*2/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case ud:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case vc:return i*t*4/s.components*s.byteLength;case Sa:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case xl:return Math.max(i,16)*Math.max(t,8)/4;case gl:case vl:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case Sl:case bl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:case Pa:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zl:case Gl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case La:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m0(i){switch(i){case vn:case rd:return{byteLength:1,components:1};case Mr:case ad:case ii:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case ni:case dc:case kn:return{byteLength:4,components:1};case od:case ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function Ud(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function g0(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],E=f[d];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++h,f[h]=E)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const E=f[d];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
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
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,z0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cg=`#ifdef USE_ENVMAP
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
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
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
#endif`,mg=`uniform sampler2D dfgLUT;
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
}`,gg=`
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ag=`#if defined( USE_POINTS_UV )
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
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
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
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n_=`float getShadowMask() {
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
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const __=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
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
}`,E_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,T_=`#define DISTANCE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,D_=`uniform vec3 diffuse;
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
}`,I_=`#define LAMBERT
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
}`,N_=`#define LAMBERT
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
}`,U_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,O_=`#define NORMAL
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
}`,B_=`#define NORMAL
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
}`,k_=`#define PHONG
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
}`,z_=`#define PHONG
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
}`,G_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,W_=`#define TOON
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
}`,X_=`uniform float size;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,$_=`#include <common>
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
}`,q_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:_0,alphahash_pars_fragment:v0,alphamap_fragment:x0,alphamap_pars_fragment:M0,alphatest_fragment:S0,alphatest_pars_fragment:y0,aomap_fragment:b0,aomap_pars_fragment:E0,batching_pars_vertex:w0,batching_vertex:T0,begin_vertex:A0,beginnormal_vertex:C0,bsdfs:R0,iridescence_fragment:P0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:U0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:k0,common:z0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:H0,displacementmap_pars_vertex:V0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:Y0,colorspace_fragment:$0,colorspace_pars_fragment:q0,envmap_fragment:K0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:cg,envmap_vertex:j0,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:ag,lights_lambert_pars_fragment:og,lights_pars_begin:lg,lights_toon_fragment:ug,lights_toon_pars_fragment:hg,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:vg,lightprobes_pars_fragment:xg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:bg,map_fragment:Eg,map_pars_fragment:wg,map_particle_fragment:Tg,map_particle_pars_fragment:Ag,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Pg,morphcolor_vertex:Lg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Ng,normal_fragment_begin:Ug,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:Bg,normal_vertex:kg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:Yg,premultiplied_alpha_fragment:$g,project_vertex:qg,dithering_fragment:Kg,dithering_pars_fragment:Zg,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:t_,shadowmap_vertex:e_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:a_,specularmap_fragment:o_,specularmap_pars_fragment:l_,tonemapping_fragment:c_,tonemapping_pars_fragment:u_,transmission_fragment:h_,transmission_pars_fragment:d_,uv_pars_fragment:f_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:__,background_frag:v_,backgroundCube_vert:x_,backgroundCube_frag:M_,cube_vert:S_,cube_frag:y_,depth_vert:b_,depth_frag:E_,distance_vert:w_,distance_frag:T_,equirect_vert:A_,equirect_frag:C_,linedashed_vert:R_,linedashed_frag:P_,meshbasic_vert:L_,meshbasic_frag:D_,meshlambert_vert:I_,meshlambert_frag:N_,meshmatcap_vert:U_,meshmatcap_frag:F_,meshnormal_vert:O_,meshnormal_frag:B_,meshphong_vert:k_,meshphong_frag:z_,meshphysical_vert:G_,meshphysical_frag:H_,meshtoon_vert:V_,meshtoon_frag:W_,points_vert:X_,points_frag:Y_,shadow_vert:$_,shadow_frag:q_,sprite_vert:K_,sprite_frag:Z_},Mt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Jn={basic:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:rn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:rn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:rn([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:rn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:rn([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:rn([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:rn([Mt.common,Mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:rn([Mt.lights,Mt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Jn.physical={uniforms:rn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const fa={r:0,b:0,g:0},J_=new ae,Fd=new qt;Fd.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t,e,n,s,r){const a=new Ft(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const g=S.backgroundBlurriness>0;T=t.get(T,g)}return T}function _(S){let T=!1;const g=d(S);g===null?m(a,o):g&&g.isColor&&(m(g,1),T=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(S,T){const g=d(T);g&&(g.isCubeTexture||g.mapping===Ya)?(c===void 0&&(c=new Ee(new zs(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ns(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(J_.makeRotationFromEuler(T.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fd),c.material.toneMapped=re.getTransfer(g.colorSpace)!==me,(u!==g||f!==g.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ee(new Hs(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ns(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=re.getTransfer(g.colorSpace)!==me,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB(fa,Dd(i)),e.buffers.color.setClear(fa.r,fa.g,fa.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:E,dispose:p}}function j_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,U,H,N,B){let Y=!1;const X=f(D,N,H,U);r!==X&&(r=X,c(r.object)),Y=d(D,N,H,B),Y&&_(D,N,H,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,g(D,U,H,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,U,H,N){const B=N.wireframe===!0;let Y=n[U.id];Y===void 0&&(Y={},n[U.id]=Y);const X=D.isInstancedMesh===!0?D.id:0;let ot=Y[X];ot===void 0&&(ot={},Y[X]=ot);let $=ot[H.id];$===void 0&&($={},ot[H.id]=$);let tt=$[B];return tt===void 0&&(tt=h(l()),$[B]=tt),tt}function h(D){const U=[],H=[],N=[];for(let B=0;B<e;B++)U[B]=0,H[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,U,H,N){const B=r.attributes,Y=U.attributes;let X=0;const ot=H.getAttributes();for(const $ in ot)if(ot[$].location>=0){const it=B[$];let It=Y[$];if(It===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(It=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(It=D.instanceColor)),it===void 0||it.attribute!==It||It&&it.data!==It.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function _(D,U,H,N){const B={},Y=U.attributes;let X=0;const ot=H.getAttributes();for(const $ in ot)if(ot[$].location>=0){let it=Y[$];it===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));const It={};It.attribute=it,it&&it.data&&(It.data=it.data),B[$]=It,X++}r.attributes=B,r.attributesNum=X,r.index=N}function E(){const D=r.newAttributes;for(let U=0,H=D.length;U<H;U++)D[U]=0}function m(D){p(D,0)}function p(D,U){const H=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;H[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),B[D]!==U&&(i.vertexAttribDivisor(D,U),B[D]=U)}function S(){const D=r.newAttributes,U=r.enabledAttributes;for(let H=0,N=U.length;H<N;H++)U[H]!==D[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function T(D,U,H,N,B,Y,X){X===!0?i.vertexAttribIPointer(D,U,H,B,Y):i.vertexAttribPointer(D,U,H,N,B,Y)}function g(D,U,H,N){E();const B=N.attributes,Y=H.getAttributes(),X=U.defaultAttributeValues;for(const ot in Y){const $=Y[ot];if($.location>=0){let tt=B[ot];if(tt===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){const it=tt.normalized,It=tt.itemSize,Ct=t.get(tt);if(Ct===void 0)continue;const ce=Ct.buffer,ee=Ct.type,oe=Ct.bytesPerElement,Z=ee===i.INT||ee===i.UNSIGNED_INT||tt.gpuType===dc;if(tt.isInterleavedBufferAttribute){const et=tt.data,St=et.stride,Ht=tt.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<$.locationSize;wt++)p($.location+wt,et.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<$.locationSize;wt++)m($.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let wt=0;wt<$.locationSize;wt++)T($.location+wt,It/$.locationSize,ee,it,St*oe,(Ht+It/$.locationSize*wt)*oe,Z)}else{if(tt.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)p($.location+et,tt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let et=0;et<$.locationSize;et++)m($.location+et);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let et=0;et<$.locationSize;et++)T($.location+et,It/$.locationSize,ee,it,It*oe,It/$.locationSize*et*oe,Z)}}else if(X!==void 0){const it=X[ot];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv($.location,it);break;case 3:i.vertexAttrib3fv($.location,it);break;case 4:i.vertexAttrib4fv($.location,it);break;default:i.vertexAttrib1fv($.location,it)}}}}S()}function y(){w();for(const D in n){const U=n[D];for(const H in U){const N=U[H];for(const B in N){const Y=N[B];for(const X in Y)u(Y[X].object),delete Y[X];delete N[B]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const U=n[D.id];for(const H in U){const N=U[H];for(const B in N){const Y=N[B];for(const X in Y)u(Y[X].object),delete Y[X];delete N[B]}}delete n[D.id]}function C(D){for(const U in n){const H=n[U];for(const N in H){const B=H[N];if(B[D.id]===void 0)continue;const Y=B[D.id];for(const X in Y)u(Y[X].object),delete Y[X];delete B[D.id]}}}function v(D){for(const U in n){const H=n[U],N=D.isInstancedMesh===!0?D.id:0,B=H[N];if(B!==void 0){for(const Y in B){const X=B[Y];for(const ot in X)u(X[ot].object),delete X[ot];delete B[Y]}delete H[N],Object.keys(H).length===0&&delete n[U]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:S}}function tv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ev(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==vn&&C!==kn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Yt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:g,maxSamples:y,samples:b}}function nv(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,T=S*4;let g=p.clippingState||null;l.value=g,g=u(_,h,T,d);for(let y=0;y!==T;++y)g[y]=e[y];p.clippingState=g,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=l.value,_!==!0||m===null){const p=d+E*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,g=d;T!==E;++T,g+=4)a.copy(f[T]).applyMatrix4(S,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}const ws=4,iv=6,sv=20,rv=256,tr=new Cr,ah=new Ft;let zo=null,Go=0,Ho=0,Vo=!1;const av=new P,Gi=new P;class oh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=av}=r;zo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,Go,Ho),this._renderer.xr.enabled=Vo,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ii,format:zn,colorSpace:Ia,depthBuffer:!1},s=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ov(r)),this._blurMaterial=cv(r,t,e),this._ggxMaterial=lv(r,t,e)}return s}_compileMaterial(t){const e=new Ee(new Xe,t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s,r){const l=new bn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ah),f.toneMapping=ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new zs,new pi({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(ah),p=!0);for(let T=0;T<6;T++){const g=T%3;g===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):g===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const y=this._cubeSize;Ss(s,g*y,T>2?y:0,y,y),f.setRenderTarget(s),p&&f.render(E,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zi||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,E=this._sizeLods[n],m=3*E*(n>_-ws?n-_+ws:0),p=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,Ss(r,m,p,3*E,2*E),s.setRenderTarget(r),s.render(o,tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ss(t,m,p,3*E,2*E),s.setRenderTarget(t),s.render(o,tr)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-ws?s-this._lodMax+ws:0),h=4*(this._cubeSize-u);Ss(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,tr)}}function ov(i){const t=[],e=[];let n=i;const s=i-ws+1+iv;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),E=new Float32Array(d*h*f);for(let p=0;p<f;p++){const S=p%3*2/3-1,T=p>2?0:-1,g=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];_.set(g,d*h*p);for(let y=0;y<h;y++){const b=u[y*2]*2-1,C=u[y*2+1]*2-1;p===0?Gi.set(1,C,b):p===1?Gi.set(-b,1,-C):p===2?Gi.set(-b,C,1):p===3?Gi.set(-1,C,-b):p===4?Gi.set(-b,-1,C):Gi.set(b,C,-1),Gi.toArray(E,(p*h+y)*d)}}const m=new Xe;m.setAttribute("position",new on(_,d)),m.setAttribute("outputDirection",new on(E,d)),e.push(new Ee(m,null)),n>ws&&n--}return{lodMeshes:e,sizeLods:t}}function lh(i,t,e){const n=new Tn(i,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lv(i,t,e){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function cv(i,t,e){return new Xn({name:"SphericalGaussianBlur",defines:{SAMPLES:sv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ch(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function uh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Od extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zs(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:_i});r.uniforms.tEquirect.value=e;const a=new Ee(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=tn),new d0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function uv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===uo||d===ho)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const E=new Od(_.height);return E.fromEquirectangularTexture(i,h),t.set(h,E),h.addEventListener("dispose",c),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===uo||d===ho,E=d===Zi||d===Ds;if(_||E){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new oh(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return _&&S&&S.height>0||E&&S&&l(S)?(n===null&&(n=new oh(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===uo?h.mapping=Zi:d===ho&&(h.mapping=Ds),h}function l(h){let d=0;const _=6;for(let E=0;E<_;E++)h[E]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function hv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function dv(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let E=0;if(_===void 0)return;if(d!==null){const S=d.array;E=d.version;for(let T=0,g=S.length;T<g;T+=3){const y=S[T+0],b=S[T+1],C=S[T+2];h.push(y,b,b,C,C,y)}}else{const S=_.array;E=_.version;for(let T=0,g=S.length/3-1;T<g;T+=3){const y=T+0,b=T+1,C=T+2;h.push(y,b,b,C,C,y)}}const m=new(_.count>=65535?_d:gd)(h,1);m.version=E;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function fv(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let E=0;for(let m=0;m<d;m++)E+=h[m];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function pv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mv(i,t,e){const n=new WeakMap,s=new Pe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;d===!0&&(T=1),_===!0&&(T=2),E===!0&&(T=3);let g=o.attributes.position.count*T,y=1;g>t.maxTextureSize&&(y=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const b=new Float32Array(g*y*4*f),C=new pd(b,g,y,f);C.type=kn,C.needsUpdate=!0;const v=T*4;for(let R=0;R<f;R++){const D=m[R],U=p[R],H=S[R],N=g*y*4*R;for(let B=0;B<D.count;B++){const Y=B*v;d===!0&&(s.fromBufferAttribute(D,B),b[N+Y+0]=s.x,b[N+Y+1]=s.y,b[N+Y+2]=s.z,b[N+Y+3]=0),_===!0&&(s.fromBufferAttribute(U,B),b[N+Y+4]=s.x,b[N+Y+5]=s.y,b[N+Y+6]=s.z,b[N+Y+7]=0),E===!0&&(s.fromBufferAttribute(H,B),b[N+Y+8]=s.x,b[N+Y+9]=s.y,b[N+Y+10]=s.z,b[N+Y+11]=H.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new ct(g,y)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let E=0;E<c.length;E++)d+=c[E];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function gv(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const _v={[Qh]:"LINEAR_TONE_MAPPING",[jh]:"REINHARD_TONE_MAPPING",[td]:"CINEON_TONE_MAPPING",[ed]:"ACES_FILMIC_TONE_MAPPING",[id]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[nd]:"CUSTOM_TONE_MAPPING"};function vv(i,t,e,n,s,r){const a=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Xe;c.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new we([0,2,0,0,2,0],2));const u=new a0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ee(c,u),h=new Cr(-1,1,1,-1,0,1);let d=null,_=null,E=!1,m,p=null,S=[],T=!1;this.setSize=function(g,y){a.setSize(g,y),o!==null&&o.setSize(g,y),l!==null&&l.setSize(g,y);for(let b=0;b<S.length;b++){const C=S[b];C.setSize&&C.setSize(g,y)}},this.setEffects=function(g){S=g,T=S.length>0&&S[0].isRenderPass===!0;const y=a.width,b=a.height;S.length>0&&o===null&&(o=new Tn(y,b,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(y,b,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){const v=S[C];v.setSize&&v.setSize(y,b)}},this.begin=function(g,y){if(E||g.toneMapping===ti&&S.length===0)return!1;if(p=y,y!==null){const b=y.width,C=y.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return T===!1&&g.setRenderTarget(a),m=g.toneMapping,g.toneMapping=ti,!0},this.hasRenderPass=function(){return T},this.end=function(g,y){g.toneMapping=m,E=!0;let b=a,C=o;for(let v=0;v<S.length;v++){const w=S[v];w.enabled!==!1&&(w.render(g,C,b,y),w.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(d!==g.outputColorSpace||_!==g.toneMapping){d=g.outputColorSpace,_=g.toneMapping,u.defines={},re.getTransfer(d)===me&&(u.defines.SRGB_TRANSFER="");const v=_v[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,g.setRenderTarget(p),g.render(f,h),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Bd=new en,Zl=new Er(1,1),kd=new pd,zd=new nm,Gd=new yd,hh=[],dh=[],fh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function Vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ja(i,t){let e=dh[t];e===void 0&&(e=new Int32Array(t),dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function bv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),Ge(e,n)}}function Ev(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;ph.set(n),i.uniformMatrix3fv(this.addr,!1,ph),Ge(e,n)}}function wv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;fh.set(n),i.uniformMatrix4fv(this.addr,!1,fh),Ge(e,n)}}function Tv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Av(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Pv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function Dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function Nv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zl.compareFunction=e.isReversedDepthBuffer()?Mc:xc,r=Zl):r=Bd,e.setTexture2D(t||r,s)}function Uv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zd,s)}function Fv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gd,s)}function Ov(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kd,s)}function Bv(i){switch(i){case 5126:return xv;case 35664:return Mv;case 35665:return Sv;case 35666:return yv;case 35674:return bv;case 35675:return Ev;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return Cv;case 35669:case 35673:return Rv;case 5125:return Pv;case 36294:return Lv;case 36295:return Dv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Ov}}function kv(i,t){i.uniform1fv(this.addr,t)}function zv(i,t){const e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gv(i,t){const e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function Hv(i,t){const e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function Vv(i,t){const e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wv(i,t){const e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xv(i,t){const e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yv(i,t){i.uniform1iv(this.addr,t)}function $v(i,t){i.uniform2iv(this.addr,t)}function qv(i,t){i.uniform3iv(this.addr,t)}function Kv(i,t){i.uniform4iv(this.addr,t)}function Zv(i,t){i.uniform1uiv(this.addr,t)}function Jv(i,t){i.uniform2uiv(this.addr,t)}function Qv(i,t){i.uniform3uiv(this.addr,t)}function jv(i,t){i.uniform4uiv(this.addr,t)}function tx(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zl:a=Bd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ex(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zd,r[a])}function nx(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gd,r[a])}function ix(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kd,r[a])}function sx(i){switch(i){case 5126:return kv;case 35664:return zv;case 35665:return Gv;case 35666:return Hv;case 35674:return Vv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return Yv;case 35667:case 35671:return $v;case 35668:case 35672:return qv;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}class rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bv(e.type)}}class ax{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sx(e.type)}}class ox{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function gh(i,t){i.seq.push(t),i.map[t.id]=t}function lx(i,t,e){const n=i.name,s=n.length;for(Wo.lastIndex=0;;){const r=Wo.exec(n),a=Wo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gh(e,c===void 0?new rx(o,i,t):new ax(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ox(o),gh(e,f)),e=f}}}class wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);lx(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function _h(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cx=37297;let ux=0;function hx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vh=new qt;function dx(i){re._getMatrix(vh,re.workingColorSpace,i);const t=`mat3( ${vh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Na:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hx(i.getShaderSource(t),o)}else return r}function fx(i,t){const e=dx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const px={[Qh]:"Linear",[jh]:"Reinhard",[td]:"Cineon",[ed]:"ACESFilmic",[id]:"AgX",[hc]:"Neutral",[nd]:"Custom"};function mx(i,t){const e=px[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pa=new P;function gx(){re.getLuminanceCoefficients(pa);const i=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function vx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function rr(i){return i!==""}function Mh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(Mx,yx)}const Sx=new Map;function yx(i,t){let e=jt[t];if(e===void 0){const n=Sx.get(t);if(n!==void 0)e=jt[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jl(e)}const bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(bx,Ex)}function Ex(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const wx={[ar]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Tx(i){return wx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ax={[Zi]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE_UV"};function Cx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ax[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rx={[Ds]:"ENVMAP_MODE_REFRACTION"};function Px(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lx={[uc]:"ENVMAP_BLENDING_MULTIPLY",[xp]:"ENVMAP_BLENDING_MIX",[Mp]:"ENVMAP_BLENDING_ADD"};function Dx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ix(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Tx(e),c=Cx(e),u=Px(e),f=Dx(e),h=Ix(e),d=_x(e),_=vx(r),E=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?jt.tonemapping_pars_fragment:"",e.toneMapping!==ti?mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),a=Jl(a),a=Mh(a,e),a=Sh(a,e),o=Jl(o),o=Mh(o,e),o=Sh(o,e),a=yh(a),o=yh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=S+m+a,g=S+p+o,y=_h(s,s.VERTEX_SHADER,T),b=_h(s,s.FRAGMENT_SHADER,g);s.attachShader(E,y),s.attachShader(E,b),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function C(D){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(E)||"",H=s.getShaderInfoLog(y)||"",N=s.getShaderInfoLog(b)||"",B=U.trim(),Y=H.trim(),X=N.trim();let ot=!0,$=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,y,b);else{const tt=xh(s,y,"vertex"),it=xh(s,b,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+tt+`
`+it)}else B!==""?Yt("WebGLProgram: Program Info Log:",B):(Y===""||X==="")&&($=!1);$&&(D.diagnostics={runnable:ot,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(y),s.deleteShader(b),v=new wa(s,E),w=xx(s,E)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,cx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ux++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=y,this.fragmentShader=b,this}let Ux=0;class Fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ox(t),e.set(t,n)),n}}class Ox{constructor(t){this.id=Ux++,this.code=t,this.usedTimes=0}}function Bx(i){return i===Ji||i===Pa||i===La}function kx(i,t,e,n,s,r){const a=new bc,o=new Fx,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,w,R,D,U,H){const N=D.fog,B=U.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ot=t.get(v.envMap||Y,X),$=ot&&ot.mapping===Ya?ot.image.height:null,tt=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Yt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,It=it!==void 0?it.length:0;let Ct=0;B.morphAttributes.position!==void 0&&(Ct=1),B.morphAttributes.normal!==void 0&&(Ct=2),B.morphAttributes.color!==void 0&&(Ct=3);let ce,ee,oe,Z;if(tt){const ye=Jn[tt];ce=ye.vertexShader,ee=ye.fragmentShader}else{ce=v.vertexShader,ee=v.fragmentShader;const ye=o.getVertexShaderStage(v),he=o.getFragmentShaderStage(v);o.update(v,ye,he),oe=ye.id,Z=he.id}const et=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Ht=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,Wt=!!v.map,pe=!!v.matcap,nt=!!ot,lt=!!v.aoMap,ut=!!v.lightMap,ht=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,kt=!!v.displacementMap,Bt=!!v.emissiveMap,Xt=!!v.metalnessMap,$t=!!v.roughnessMap,L=v.anisotropy>0,ue=v.clearcoat>0,ne=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,O=v.sheen>0,G=v.transmission>0,q=L&&!!v.anisotropyMap,dt=ue&&!!v.clearcoatMap,ft=ue&&!!v.clearcoatNormalMap,K=ue&&!!v.clearcoatRoughnessMap,j=x&&!!v.iridescenceMap,mt=x&&!!v.iridescenceThicknessMap,Nt=O&&!!v.sheenColorMap,xt=O&&!!v.sheenRoughnessMap,gt=!!v.specularMap,Ut=!!v.specularColorMap,zt=!!v.specularIntensityMap,Zt=G&&!!v.transmissionMap,F=G&&!!v.thicknessMap,_t=!!v.gradientMap,Q=!!v.alphaMap,vt=v.alphaTest>0,Et=!!v.alphaHash,at=!!v.extensions;let Ot=ti;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const Lt={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:ce,fragmentShader:ee,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&U.instanceColor!==null,instancingMorph:Ht&&U.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:pe,envMap:nt,envMapMode:nt&&ot.mapping,envMapCubeUVHeight:$,aoMap:lt,lightMap:ut,bumpMap:ht,normalMap:pt,displacementMap:kt,emissiveMap:Bt,normalMapObjectSpace:pt&&v.normalMapType===bp,normalMapTangentSpace:pt&&v.normalMapType===Da,packedNormalMap:pt&&v.normalMapType===Da&&Bx(v.normalMap.format),metalnessMap:Xt,roughnessMap:$t,anisotropy:L,anisotropyMap:q,clearcoat:ue,clearcoatMap:dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:K,dispersion:ne,retroreflection:A,iridescence:x,iridescenceMap:j,iridescenceThicknessMap:mt,sheen:O,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:gt,specularColorMap:Ut,specularIntensityMap:zt,transmission:G,transmissionMap:Zt,thicknessMap:F,gradientMap:_t,opaque:v.transparent===!1&&v.blending===or&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:vt,alphaHash:Et,combine:v.combine,mapUv:Wt&&_(v.map.channel),aoMapUv:lt&&_(v.aoMap.channel),lightMapUv:ut&&_(v.lightMap.channel),bumpMapUv:ht&&_(v.bumpMap.channel),normalMapUv:pt&&_(v.normalMap.channel),displacementMapUv:kt&&_(v.displacementMap.channel),emissiveMapUv:Bt&&_(v.emissiveMap.channel),metalnessMapUv:Xt&&_(v.metalnessMap.channel),roughnessMapUv:$t&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:dt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(v.sheenRoughnessMap.channel),specularMapUv:gt&&_(v.specularMap.channel),specularColorMapUv:Ut&&_(v.specularColorMap.channel),specularIntensityMapUv:zt&&_(v.specularIntensityMap.channel),transmissionMapUv:Zt&&_(v.transmissionMap.channel),thicknessMapUv:F&&_(v.thicknessMap.channel),alphaMapUv:Q&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||L),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Wt||Q),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:St,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Ct,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===En,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(w,v),S(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const w=d[v.type];let R;if(w){const D=Jn[w];R=i0.clone(D.uniforms)}else R=v.uniforms;return R}function g(v,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new Nx(i,w,v,s),c.push(R),u.set(w,R)),R}function y(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:T,acquireProgram:g,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:C}}function zx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,E,m,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:m,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=_,S.materialVariant=a(h),S.groupOrder=E,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function l(h,d,_,E,m,p,S){S.reversedDepth===!0&&(m=-m);const T=o(h,d,_,E,m,p);_.transmission>0?n.push(T):_.transparent===!0?s.push(T):e.push(T)}function c(h,d,_,E,m,p){const S=o(h,d,_,E,m,p);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,d){e.length>1&&e.sort(h||Gx),n.length>1&&n.sort(d||Eh),s.length>1&&s.sort(d||Eh)}function f(){for(let h=t,d=i.length;h<d;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Hx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new wh,i.set(n,[a])):s>=r.length?(a=new wh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ft};break;case"SpotLight":e={position:new P,direction:new P,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Wx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xx=0;function Yx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $x(i){const t=new Vx,e=Wx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ae,a=new ae;function o(c){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,_=0,E=0,m=0,p=0,S=0,T=0,g=0,y=0,b=0,C=0,v=0,w=0,R=0;c.sort(Yx);for(let U=0,H=c.length;U<H;U++){const N=c[U],B=N.color,Y=N.intensity,X=N.distance;let ot=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ji?ot=N.shadow.map.texture:ot=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*Y,f+=B.g*Y,h+=B.b*Y;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],Y);R++}else if(N.isSunLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=ot;const It=tt.getViewportCount();for(let Ct=0;Ct<It;Ct++)n.sunShadowMatrix[E+Ct]=tt.getMatrix(Ct),n.sunShadowCascade[E+Ct]=tt._cascadeData[Ct];E+=It,_++}n.sun[d]=$,d++}else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=N.shadow.matrix,y++}n.directional[m]=$,m++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(B).multiplyScalar(Y),$.distance=X,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[S]=$;const tt=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,tt.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[S]=tt.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[S]=it,n.spotShadowMap[S]=ot,C++}S++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(B).multiplyScalar(Y),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=$,T++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=N.shadow.matrix,b++}n.point[p]=$,p++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(Y),$.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[g]=$,g++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==T||D.hemiLength!==g||D.numSunShadows!==_||D.numDirectionalShadows!==y||D.numPointShadows!==b||D.numSpotShadows!==C||D.numSpotMaps!==v||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=g,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=T,D.hemiLength=g,D.numSunShadows=_,D.numDirectionalShadows=y,D.numPointShadows=b,D.numSpotShadows=C,D.numSpotMaps=v,D.numLightProbes=R,n.version=Xx++)}function l(c,u){let f=0,h=0,d=0,_=0,E=0,m=0;const p=u.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){const g=c[S];if(g.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(p),f++}else if(g.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(g.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),_++}else if(g.isRectAreaLight){const y=n.rectArea[E];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(g.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),E++}else if(g.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),d++}else if(g.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Th(i){const t=new $x(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function qx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Th(i),t.set(s,[o])):r>=a.length?(o=new Th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`,Jx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Qx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ah=new ae,er=new P,Xo=new P;function jx(i,t,e){let n=new wc;const s=new ct,r=new ct,a=new Pe,o=new l0,l=new c0,c={},u=e.maxTextureSize,f={[Ki]:fn,[fn]:Ki,[En]:En},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Kx,fragmentShader:Zx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Xe;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ee(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let p=this.type;this.render=function(b,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===tp&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(_i),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==this.type;H&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=b.length;N<B;N++){const Y=b[N],X=Y.shadow;if(X===void 0){Yt("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ot=X.getFrameExtents();s.multiply(ot),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,X.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ir){if(Y.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Tn(s.x,s.y,{format:Ji,type:ii,minFilter:tn,magFilter:tn,generateMipmaps:!1}),X.map.texture.name=Y.name+".shadowMap",X.map.depthTexture=new Er(s.x,s.y,kn),X.map.depthTexture.name=Y.name+".shadowMapDepth",X.map.depthTexture.format=Si,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qe,X.map.depthTexture.magFilter=qe}else Y.isPointLight?(X.map=new Od(s.x),X.map.depthTexture=new Sm(s.x,ni)):(X.map=new Tn(s.x,s.y),X.map.depthTexture=new Er(s.x,s.y,ni)),X.map.depthTexture.name=Y.name+".shadowMap",X.map.depthTexture.format=Si,this.type===ar?(X.map.depthTexture.compareFunction=$?Mc:xc,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qe,X.map.depthTexture.magFilter=qe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const tt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Y.isPointLight!==!0&&X.updateMatrices(Y,v);for(let it=0;it<tt;it++){const It=X.getCamera(it);if(Y.isPointLight){const Ct=X.camera,ce=X.matrix,ee=Y.distance||Ct.far;ee!==Ct.far&&(Ct.far=ee,Ct.updateProjectionMatrix()),er.setFromMatrixPosition(Y.matrixWorld),Ct.position.copy(er),Xo.copy(Ct.position),Xo.add(Jx[it]),Ct.up.copy(Qx[it]),Ct.lookAt(Xo),Ct.updateMatrixWorld(),ce.makeTranslation(-er.x,-er.y,-er.z),Ah.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ah,Ct.coordinateSystem,Ct.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,it),i.clear();else{it===0&&(i.setRenderTarget(X.map),i.clear());const Ct=X.getViewport(it);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),U.viewport(a)}n=X.getFrustum(it),g(C,v,It,Y,this.type)}X.isPointLightShadow!==!0&&this.type===ir&&S(X,v),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,D)};function S(b,C){const v=t.update(E);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(s.x,s.y,{format:Ji,type:ii}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,E,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,d,E,null)}function T(b,C,v,w){let R=null;const D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=R.uuid,H=C.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let B=N[H];B===void 0&&(B=R.clone(),N[H]=B,C.addEventListener("dispose",y)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,w===ir?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=i.properties.get(R);U.light=v}return R}function g(b,C,v,w,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ir)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const H=t.update(b),N=b.material;if(Array.isArray(N)){const B=H.groups;for(let Y=0,X=B.length;Y<X;Y++){const ot=B[Y],$=N[ot.materialIndex];if($&&$.visible){const tt=T(b,$,w,R);b.onBeforeShadow(i,b,C,v,H,tt,ot),i.renderBufferDirect(v,null,H,tt,b,ot),b.onAfterShadow(i,b,C,v,H,tt,ot)}}}else if(N.visible){const B=T(b,N,w,R);b.onBeforeShadow(i,b,C,v,H,B,null),i.renderBufferDirect(v,null,H,B,b,null),b.onAfterShadow(i,b,C,v,H,B,null)}}const U=b.children;for(let H=0,N=U.length;H<N;H++)g(U[H],C,v,w,R)}function y(b){b.target.removeEventListener("dispose",y);for(const v in c){const w=c[v],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function tM(i,t){function e(){let F=!1;const _t=new Pe;let Q=null;const vt=new Pe(0,0,0,0);return{setMask:function(Et){Q!==Et&&!F&&(i.colorMask(Et,Et,Et,Et),Q=Et)},setLocked:function(Et){F=Et},setClear:function(Et,at,Ot,Lt,ye){ye===!0&&(Et*=Lt,at*=Lt,Ot*=Lt),_t.set(Et,at,Ot,Lt),vt.equals(_t)===!1&&(i.clearColor(Et,at,Ot,Lt),vt.copy(_t))},reset:function(){F=!1,Q=null,vt.set(-1,0,0,0)}}}function n(){let F=!1,_t=!1,Q=null,vt=null,Et=null;return{setReversed:function(at){if(_t!==at){const Ot=t.get("EXT_clip_control");at?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),_t=at;const Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(at){at?et(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(at){Q!==at&&!F&&(i.depthMask(at),Q=at)},setFunc:function(at){if(_t&&(at=Np[at]),vt!==at){switch(at){case ol:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case cl:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=at}},setLocked:function(at){F=at},setClear:function(at){Et!==at&&(Et=at,_t&&(at=1-at),i.clearDepth(at))},reset:function(){F=!1,Q=null,vt=null,Et=null,_t=!1}}}function s(){let F=!1,_t=null,Q=null,vt=null,Et=null,at=null,Ot=null,Lt=null,ye=null;return{setTest:function(he){F||(he?et(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(he){_t!==he&&!F&&(i.stencilMask(he),_t=he)},setFunc:function(he,Ln,$n){(Q!==he||vt!==Ln||Et!==$n)&&(i.stencilFunc(he,Ln,$n),Q=he,vt=Ln,Et=$n)},setOp:function(he,Ln,$n){(at!==he||Ot!==Ln||Lt!==$n)&&(i.stencilOp(he,Ln,$n),at=he,Ot=Ln,Lt=$n)},setLocked:function(he){F=he},setClear:function(he){ye!==he&&(i.clearStencil(he),ye=he)},reset:function(){F=!1,_t=null,Q=null,vt=null,Et=null,at=null,Ot=null,Lt=null,ye=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],E=null,m=!1,p=null,S=null,T=null,g=null,y=null,b=null,C=null,v=new Ft(0,0,0),w=0,R=!1,D=null,U=null,H=null,N=null,B=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ot=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ot>=1):$.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ot>=2);let tt=null,it={};const It=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),ce=new Pe().fromArray(It),ee=new Pe().fromArray(Ct);function oe(F,_t,Q,vt){const Et=new Uint8Array(4),at=i.createTexture();i.bindTexture(F,at),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Q;Ot++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return at}const Z={};Z[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(xr),ht(!1),pt(gu),et(i.CULL_FACE),lt(_i);function et(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function St(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Ht(F,_t){return h[F]!==_t?(i.bindFramebuffer(F,_t),h[F]=_t,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function wt(F,_t){let Q=_,vt=!1;if(F){Q=d.get(_t),Q===void 0&&(Q=[],d.set(_t,Q));const Et=F.textures;if(Q.length!==Et.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ot=Et.length;at<Ot;at++)Q[at]=i.COLOR_ATTACHMENT0+at;Q.length=Et.length,vt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,vt=!0);vt&&i.drawBuffers(Q)}function Wt(F){return E!==F?(i.useProgram(F),E=F,!0):!1}const pe={[bs]:i.FUNC_ADD,[np]:i.FUNC_SUBTRACT,[ip]:i.FUNC_REVERSE_SUBTRACT};pe[sp]=i.MIN,pe[rp]=i.MAX;const nt={[ap]:i.ZERO,[op]:i.ONE,[lp]:i.SRC_COLOR,[Zh]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[dp]:i.DST_COLOR,[up]:i.DST_ALPHA,[cp]:i.ONE_MINUS_SRC_COLOR,[Jh]:i.ONE_MINUS_SRC_ALPHA,[fp]:i.ONE_MINUS_DST_COLOR,[hp]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[gp]:i.ONE_MINUS_CONSTANT_COLOR,[_p]:i.CONSTANT_ALPHA,[vp]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(F,_t,Q,vt,Et,at,Ot,Lt,ye,he){if(F===_i){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),F!==ep){if(F!==p||he!==R){if((S!==bs||y!==bs)&&(i.blendEquation(i.FUNC_ADD),S=bs,y=bs),he)switch(F){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.ONE,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",F);break}else switch(F){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _u:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",F);break}T=null,g=null,b=null,C=null,v.set(0,0,0),w=0,p=F,R=he}return}Et=Et||_t,at=at||Q,Ot=Ot||vt,(_t!==S||Et!==y)&&(i.blendEquationSeparate(pe[_t],pe[Et]),S=_t,y=Et),(Q!==T||vt!==g||at!==b||Ot!==C)&&(i.blendFuncSeparate(nt[Q],nt[vt],nt[at],nt[Ot]),T=Q,g=vt,b=at,C=Ot),(Lt.equals(v)===!1||ye!==w)&&(i.blendColor(Lt.r,Lt.g,Lt.b,ye),v.copy(Lt),w=ye),p=F,R=!1}function ut(F,_t){F.side===En?St(i.CULL_FACE):et(i.CULL_FACE);let Q=F.side===fn;_t&&(Q=!Q),ht(Q),F.blending===or&&F.transparent===!1?lt(_i):lt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const vt=F.stencilWrite;o.setTest(vt),vt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function pt(F){F!==Qf?(et(i.CULL_FACE),F!==U&&(F===gu?i.cullFace(i.BACK):F===jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),U=F}function kt(F){F!==H&&(X&&i.lineWidth(F),H=F)}function Bt(F,_t,Q){F?(et(i.POLYGON_OFFSET_FILL),(N!==_t||B!==Q)&&(N=_t,B=Q,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,Q))):St(i.POLYGON_OFFSET_FILL)}function Xt(F){F?et(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function $t(F){F===void 0&&(F=i.TEXTURE0+Y-1),tt!==F&&(i.activeTexture(F),tt=F)}function L(F,_t,Q){Q===void 0&&(tt===null?Q=i.TEXTURE0+Y-1:Q=tt);let vt=it[Q];vt===void 0&&(vt={type:void 0,texture:void 0},it[Q]=vt),(vt.type!==F||vt.texture!==_t)&&(tt!==Q&&(i.activeTexture(Q),tt=Q),i.bindTexture(F,_t||Z[F]),vt.type=F,vt.texture=_t)}function ue(){const F=it[tt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function x(){try{i.texSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function O(){try{i.texSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function dt(){try{i.texStorage2D(...arguments)}catch(F){se("WebGLState:",F)}}function ft(){try{i.texStorage3D(...arguments)}catch(F){se("WebGLState:",F)}}function K(){try{i.texImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function j(){try{i.texImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function mt(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function Nt(F,_t){f[F]!==_t&&(i.pixelStorei(F,_t),f[F]=_t)}function xt(F){ce.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ce.copy(F))}function gt(F){ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ut(F,_t){let Q=c.get(_t);Q===void 0&&(Q=new WeakMap,c.set(_t,Q));let vt=Q.get(F);vt===void 0&&(vt=i.getUniformBlockIndex(_t,F.name),Q.set(F,vt))}function zt(F,_t){const vt=c.get(_t).get(F);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,F.__bindingPointIndex),l.set(_t,vt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},tt=null,it={},h={},d=new WeakMap,_=[],E=null,m=!1,p=null,S=null,T=null,g=null,y=null,b=null,C=null,v=new Ft(0,0,0),w=0,R=!1,D=null,U=null,H=null,N=null,B=null,ce.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:St,bindFramebuffer:Ht,drawBuffers:wt,useProgram:Wt,setBlending:lt,setMaterial:ut,setFlipSided:ht,setCullFace:pt,setLineWidth:kt,setPolygonOffset:Bt,setScissorTest:Xt,activeTexture:$t,bindTexture:L,unbindTexture:ue,compressedTexImage2D:ne,compressedTexImage3D:A,texImage2D:K,texImage3D:j,pixelStorei:Nt,getParameter:mt,updateUBOMapping:Ut,uniformBlockBinding:zt,texStorage2D:dt,texStorage3D:ft,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:xt,viewport:gt,reset:Zt}}function eM(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,x){return _?new OffscreenCanvas(A,x):Ua("canvas")}function m(A,x,O){let G=1;const q=ne(A);if((q.width>O||q.height>O)&&(G=O/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const dt=Math.floor(G*q.width),ft=Math.floor(G*q.height);h===void 0&&(h=E(dt,ft));const K=x?E(dt,ft):h;return K.width=dt,K.height=ft,K.getContext("2d").drawImage(A,0,0,dt,ft),Yt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+dt+"x"+ft+")."),K}else return"data"in A&&Yt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(A,x,O,G,q,dt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft;G&&(ft=t.get("EXT_texture_norm16"),ft||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&ft&&(K=ft.R16_EXT),O===i.SHORT&&ft&&(K=ft.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),x===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&ft&&(K=ft.RG16_EXT),O===i.SHORT&&ft&&(K=ft.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&ft&&(K=ft.RGB16_EXT),O===i.SHORT&&ft&&(K=ft.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){const j=dt?Na:re.getTransfer(q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=j===me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ft&&(K=ft.RGBA16_EXT),O===i.SHORT&&ft&&(K=ft.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(A,x){let O;return A?x===null||x===ni||x===Sr?O=i.DEPTH24_STENCIL8:x===kn?O=i.DEPTH32F_STENCIL8:x===Mr&&(O=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ni||x===Sr?O=i.DEPTH_COMPONENT24:x===kn?O=i.DEPTH_COMPONENT32F:x===Mr&&(O=i.DEPTH_COMPONENT16),O}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==qe&&A.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function v(A){const x=A.target;x.removeEventListener("dispose",v),D(x)}function w(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,G=d.get(O);if(G){const q=G[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(A),Object.keys(G).length===0&&d.delete(O)}n.remove(A)}function R(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const O=A.source,G=d.get(O);delete G[x.__cacheKey],a.memory.textures--}function D(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let q=0;q<x.__webglFramebuffer[G].length;q++)i.deleteFramebuffer(x.__webglFramebuffer[G][q]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let G=0,q=O.length;G<q;G++){const dt=n.get(O[G]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(A)}let U=0;function H(){U=0}function N(){return U}function B(A){U=A}function Y(){const A=U;return A>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function X(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ot(A,x){const O=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const G=A.image;if(G===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function $(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){St(O,A,x);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function tt(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){St(O,A,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function it(A,x){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ht(O,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const It={[pl]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[ml]:i.MIRRORED_REPEAT},Ct={[qe]:i.NEAREST,[Sp]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},ce={[wp]:i.NEVER,[Pp]:i.ALWAYS,[Tp]:i.LESS,[xc]:i.LEQUAL,[Ap]:i.EQUAL,[Mc]:i.GEQUAL,[Cp]:i.GREATER,[Rp]:i.NOTEQUAL};function ee(A,x){if(x.type===kn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===fo||x.magFilter===zr||x.magFilter===Hi||x.minFilter===tn||x.minFilter===fo||x.minFilter===zr||x.minFilter===Hi)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,It[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,It[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,It[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ct[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ct[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qe||x.minFilter!==zr&&x.minFilter!==Hi||x.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const G=x.source;let q=d.get(G);q===void 0&&(q={},d.set(G,q));const dt=X(x);if(dt!==A.__cacheKey){q[dt]===void 0&&(q[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[dt].usedTimes++;const ft=q[A.__cacheKey];ft!==void 0&&(q[A.__cacheKey].usedTimes--,ft.usedTimes===0&&R(x)),A.__cacheKey=dt,A.__webglTexture=q[dt].texture}return O}function Z(A,x,O){return Math.floor(Math.floor(A/O)/x)}function et(A,x,O,G){const dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,G,x.data);else{dt.sort((Nt,xt)=>Nt.start-xt.start);let ft=0;for(let Nt=1;Nt<dt.length;Nt++){const xt=dt[ft],gt=dt[Nt],Ut=xt.start+xt.count,zt=Z(gt.start,x.width,4),Zt=Z(xt.start,x.width,4);gt.start<=Ut+1&&zt===Zt&&Z(gt.start+gt.count-1,x.width,4)===zt?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++ft,dt[ft]=gt)}dt.length=ft+1;const K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Nt=0,xt=dt.length;Nt<xt;Nt++){const gt=dt[Nt],Ut=Math.floor(gt.start/4),zt=Math.ceil(gt.count/4),Zt=Ut%x.width,F=Math.floor(Ut/x.width),_t=zt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Zt,F,_t,Q,O,G,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function St(A,x,O){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);const q=oe(A,x),dt=x.source;e.bindTexture(G,A.__webglTexture,i.TEXTURE0+O);const ft=n.get(dt);if(dt.version!==ft.__version||q===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Q=re.getPrimaries(re.workingColorSpace),vt=x.colorSpace===Ii?null:re.getPrimaries(x.colorSpace),Et=x.colorSpace===Ii||Q===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let j=m(x.image,!1,s.maxTextureSize);j=ue(x,j);const mt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type);let xt=g(x.internalFormat,mt,Nt,x.normalized,x.colorSpace,x.isVideoTexture);ee(G,x);let gt;const Ut=x.mipmaps,zt=x.isVideoTexture!==!0,Zt=ft.__version===void 0||q===!0,F=dt.dataReady,_t=b(x,j);if(x.isDepthTexture)xt=y(x.format===Vi,x.type),Zt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,xt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,xt,j.width,j.height,0,mt,Nt,null));else if(x.isDataTexture)if(Ut.length>0){zt&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,xt,Ut[0].width,Ut[0].height);for(let Q=0,vt=Ut.length;Q<vt;Q++)gt=Ut[Q],zt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,Q,xt,gt.width,gt.height,0,mt,Nt,gt.data);x.generateMipmaps=!1}else zt?(Zt&&e.texStorage2D(i.TEXTURE_2D,_t,xt,j.width,j.height),F&&et(x,j,mt,Nt)):e.texImage2D(i.TEXTURE_2D,0,xt,j.width,j.height,0,mt,Nt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,xt,Ut[0].width,Ut[0].height,j.depth);for(let Q=0,vt=Ut.length;Q<vt;Q++)if(gt=Ut[Q],x.format!==zn)if(mt!==null)if(zt){if(F)if(x.layerUpdates.size>0){const Et=rh(gt.width,gt.height,x.format,x.type);for(const at of x.layerUpdates){const Ot=gt.data.subarray(at*Et/gt.data.BYTES_PER_ELEMENT,(at+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,at,gt.width,gt.height,1,mt,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,j.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,xt,gt.width,gt.height,j.depth,0,gt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,j.depth,mt,Nt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,xt,gt.width,gt.height,j.depth,0,mt,Nt,gt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{zt&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,xt,Ut[0].width,Ut[0].height);for(let Q=0,vt=Ut.length;Q<vt;Q++)gt=Ut[Q],x.format!==zn?mt!==null?zt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,xt,gt.width,gt.height,0,gt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,Q,xt,gt.width,gt.height,0,mt,Nt,gt.data)}else if(x.isDataArrayTexture)if(zt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,xt,j.width,j.height,j.depth),F)if(x.layerUpdates.size>0){const Q=rh(j.width,j.height,x.format,x.type);for(const vt of x.layerUpdates){const Et=j.data.subarray(vt*Q/j.data.BYTES_PER_ELEMENT,(vt+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,j.width,j.height,1,mt,Nt,Et)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,mt,Nt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,j.width,j.height,j.depth,0,mt,Nt,j.data);else if(x.isData3DTexture)zt?(Zt&&e.texStorage3D(i.TEXTURE_3D,_t,xt,j.width,j.height,j.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,mt,Nt,j.data)):e.texImage3D(i.TEXTURE_3D,0,xt,j.width,j.height,j.depth,0,mt,Nt,j.data);else if(x.isFramebufferTexture){if(Zt)if(zt)e.texStorage2D(i.TEXTURE_2D,_t,xt,j.width,j.height);else{let Q=j.width,vt=j.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,xt,Q,vt,0,mt,Nt,null),Q>>=1,vt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),f.add(x),Q.onpaint=vt=>{const Et=vt.changedElements;for(const at of f)Et.includes(at.image)&&(at.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const Et=i.RGBA,at=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,at,Ot,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(zt&&Zt){const Q=ne(Ut[0]);e.texStorage2D(i.TEXTURE_2D,_t,xt,Q.width,Q.height)}for(let Q=0,vt=Ut.length;Q<vt;Q++)gt=Ut[Q],zt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,mt,Nt,gt):e.texImage2D(i.TEXTURE_2D,Q,xt,mt,Nt,gt);x.generateMipmaps=!1}else if(zt){if(Zt){const Q=ne(j);e.texStorage2D(i.TEXTURE_2D,_t,xt,Q.width,Q.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Nt,j)}else e.texImage2D(i.TEXTURE_2D,0,xt,mt,Nt,j);p(x)&&S(G),ft.__version=dt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ht(A,x,O){if(x.image.length!==6)return;const G=oe(A,x),q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const dt=n.get(q);if(q.version!==dt.__version||G===!0){e.activeTexture(i.TEXTURE0+O);const ft=re.getPrimaries(re.workingColorSpace),K=x.colorSpace===Ii?null:re.getPrimaries(x.colorSpace),j=x.colorSpace===Ii||ft===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const mt=x.isCompressedTexture||x.image[0].isCompressedTexture,Nt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let at=0;at<6;at++)!mt&&!Nt?xt[at]=m(x.image[at],!0,s.maxCubemapSize):xt[at]=Nt?x.image[at].image:x.image[at],xt[at]=ue(x,xt[at]);const gt=xt[0],Ut=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),Zt=g(x.internalFormat,Ut,zt,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,_t=dt.__version===void 0||G===!0,Q=q.dataReady;let vt=b(x,gt);ee(i.TEXTURE_CUBE_MAP,x);let Et;if(mt){F&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Zt,gt.width,gt.height);for(let at=0;at<6;at++){Et=xt[at].mipmaps;for(let Ot=0;Ot<Et.length;Ot++){const Lt=Et[Ot];x.format!==zn?Ut!==null?F?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,Zt,Lt.width,Lt.height,0,Lt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Lt.width,Lt.height,Ut,zt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,Zt,Lt.width,Lt.height,0,Ut,zt,Lt.data)}}}else{if(Et=x.mipmaps,F&&_t){Et.length>0&&vt++;const at=ne(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Zt,at.width,at.height)}for(let at=0;at<6;at++)if(Nt){F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,xt[at].width,xt[at].height,Ut,zt,xt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Zt,xt[at].width,xt[at].height,0,Ut,zt,xt[at].data);for(let Ot=0;Ot<Et.length;Ot++){const ye=Et[Ot].image[at].image;F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,ye.width,ye.height,Ut,zt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,Zt,ye.width,ye.height,0,Ut,zt,ye.data)}}else{F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ut,zt,xt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Zt,Ut,zt,xt[at]);for(let Ot=0;Ot<Et.length;Ot++){const Lt=Et[Ot];F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,Ut,zt,Lt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,Zt,Ut,zt,Lt.image[at])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),dt.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function wt(A,x,O,G,q,dt){const ft=r.convert(O.format,O.colorSpace),K=r.convert(O.type),j=g(O.internalFormat,ft,K,O.normalized,O.colorSpace),mt=n.get(x),Nt=n.get(O);if(Nt.__renderTarget=x,!mt.__hasExternalTextures){const xt=Math.max(1,x.width>>dt),gt=Math.max(1,x.height>>dt);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,dt,j,xt,gt,x.depth,0,ft,K,null):e.texImage2D(q,dt,j,xt,gt,0,ft,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),$t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,q,Nt.__webglTexture,0,Xt(x)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,q,Nt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const G=x.depthTexture,q=G&&G.isDepthTexture?G.type:null,dt=y(x.stencilBuffer,q),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(x),dt,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(x),dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,A)}else{const G=x.textures;for(let q=0;q<G.length;q++){const dt=G[q],ft=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),j=g(dt.internalFormat,ft,K,dt.normalized,dt.colorSpace);$t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(x),j,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(A,x,O){const G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x.depthTexture);const mt=r.convert(x.depthTexture.format),Nt=r.convert(x.depthTexture.type);let xt;x.depthTexture.format===Si?xt=i.DEPTH_COMPONENT24:x.depthTexture.format===Vi&&(xt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,x.width,x.height,0,mt,Nt,null)}}else ot(x.depthTexture,0);const dt=q.__webglTexture,ft=Xt(x),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=x.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Si)$t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,dt,0);else if(x.depthTexture.format===Vi)$t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=G}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)pe(x.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?pe(x.__webglFramebuffer[0],A,0):pe(x.__webglFramebuffer,A,0)}else if(O){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),Wt(x.__webglDepthbuffer[G],A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,dt)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Wt(x.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,x,O){const G=n.get(A);x!==void 0&&wt(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&nt(A)}function ut(A){const x=A.texture,O=n.get(A),G=n.get(x);A.addEventListener("dispose",v);const q=A.textures,dt=A.isWebGLCubeRenderTarget===!0,ft=q.length>1;if(ft||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),dt){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let j=0;j<x.mipmaps.length;j++)O.__webglFramebuffer[K][j]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ft)for(let K=0,j=q.length;K<j;K++){const mt=n.get(q[K]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&$t(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const j=q[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const mt=r.convert(j.format,j.colorSpace),Nt=r.convert(j.type),xt=g(j.internalFormat,mt,Nt,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),gt=Xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,xt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)wt(O.__webglFramebuffer[K][j],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else wt(O.__webglFramebuffer[K],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let K=0,j=q.length;K<j;K++){const mt=q[K],Nt=n.get(mt);let xt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Nt.__webglTexture),ee(xt,mt),wt(O.__webglFramebuffer,A,mt,i.COLOR_ATTACHMENT0+K,xt,0),p(mt)&&S(xt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),ee(K,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)wt(O.__webglFramebuffer[j],A,x,i.COLOR_ATTACHMENT0,K,j);else wt(O.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&S(K),e.unbindTexture()}A.depthBuffer&&nt(A)}function ht(A){const x=A.textures;for(let O=0,G=x.length;O<G;O++){const q=x[O];if(p(q)){const dt=T(A),ft=n.get(q).__webglTexture;e.bindTexture(dt,ft),S(dt),e.unbindTexture()}}}const pt=[],kt=[];function Bt(A){if(A.samples>0){if($t(A)===!1){const x=A.textures,O=A.width,G=A.height;let q=i.COLOR_BUFFER_BIT;const dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(A),K=x.length>1;if(K)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const j=A.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);const Nt=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,q,i.NEAREST),l===!0&&(pt.length=0,kt.length=0,pt.push(i.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pt.push(dt),kt.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);const Nt=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Xt(A){return Math.min(s.maxSamples,A.samples)}function $t(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ue(A,x){const O=A.colorSpace,G=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ia&&O!==Ii&&(re.getTransfer(O)===me?(G!==zn||q!==vn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",O)),x}function ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=ot,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=lt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function nM(i,t){function e(n,s=Ii){let r;const a=re.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ld)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rd)return i.BYTE;if(n===ad)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===dc)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===cd)return i.ALPHA;if(n===ud)return i.RGB;if(n===zn)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===mc)return i.RED;if(n===gc)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===Sa||n===ya||n===ba||n===Ea)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===_l||n===vl||n===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===Sl||n===yl||n===bl||n===El||n===Pa||n===wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===Sl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bl)return r.COMPRESSED_R11_EAC;if(n===El)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pa)return r.COMPRESSED_RG11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Ll||n===Dl||n===Il||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===Gl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Wl||n===La||n===Xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
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

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aM extends ji{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const E=typeof XRWebGLBinding<"u",m=new rM,p={},S=e.getContextAttributes();let T=null,g=null;const y=[],b=[],C=new ct;let v=null,w=null;const R=new bn;R.viewport=new Pe;const D=new bn;D.viewport=new Pe;const U=[R,D],H=new f0;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=y[Z];return et===void 0&&(et=new Mo,y[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=y[Z];return et===void 0&&(et=new Mo,y[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=y[Z];return et===void 0&&(et=new Mo,y[Z]=et),et.getHandSpace()};function Y(Z){const et=b.indexOf(Z.inputSource);if(et===-1)return;const St=y[et];St!==void 0&&(St.update(Z.inputSource,Z.frame,c||a),St.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ot);for(let Z=0;Z<y.length;Z++){const et=b[Z];et!==null&&(b[Z]=null,y[Z].disconnect(et))}N=null,B=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(T),d=null,h=null,f=null,s=null,g=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),w!==null){const Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ot),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ht=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=S.stencil?Vi:Si,Ht=S.stencil?Sr:ni);const Wt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),g=new Tn(h.textureWidth,h.textureHeight,{format:zn,type:vn,depthTexture:new Er(h.textureWidth,h.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new Tn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(Z){for(let et=0;et<Z.removed.length;et++){const St=Z.removed[et],Ht=b.indexOf(St);Ht>=0&&(b[Ht]=null,y[Ht].disconnect(St))}for(let et=0;et<Z.added.length;et++){const St=Z.added[et];let Ht=b.indexOf(St);if(Ht===-1){for(let Wt=0;Wt<y.length;Wt++)if(Wt>=b.length){b.push(St),Ht=Wt;break}else if(b[Wt]===null){b[Wt]=St,Ht=Wt;break}if(Ht===-1)break}const wt=y[Ht];wt&&wt.connect(St)}}const $=new P,tt=new P;function it(Z,et,St){$.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(St.matrixWorld);const Ht=$.distanceTo(tt),wt=et.projectionMatrix.elements,Wt=St.projectionMatrix.elements,pe=wt[14]/(wt[10]-1),nt=wt[14]/(wt[10]+1),lt=(wt[9]+1)/wt[5],ut=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],pt=(Wt[8]+1)/Wt[0],kt=pe*ht,Bt=pe*pt,Xt=Ht/(-ht+pt),$t=Xt*-ht;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX($t),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),wt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const L=pe+Xt,ue=nt+Xt,ne=kt-$t,A=Bt+(Ht-$t),x=lt*nt/ue*L,O=ut*nt/ue*L;Z.projectionMatrix.makePerspective(ne,A,x,O,L,ue),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function It(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,St=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(St=m.depthFar)),H.near=D.near=R.near=et,H.far=D.far=R.far=St,(N!==H.near||B!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,B=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;const Ht=Z.parent,wt=H.cameras;It(H,Ht);for(let Wt=0;Wt<wt.length;Wt++)It(wt[Wt],Ht);wt.length===2?it(H,R,D):H.projectionMatrix.copy(R.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ct(Z,H,Ht)};function Ct(Z,et,St){St===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(St.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=br*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return p[Z]};let ce=null;function ee(Z,et){if(u=et.getViewerPose(c||a),_=et,u!==null){const St=u.views;d!==null&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let Ht=!1;St.length!==H.cameras.length&&(H.cameras.length=0,Ht=!0);for(let nt=0;nt<St.length;nt++){const lt=St[nt];let ut=null;if(d!==null)ut=d.getViewport(lt);else{const pt=f.getViewSubImage(h,lt);ut=pt.viewport,nt===0&&(t.setRenderTargetTextures(g,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(g))}let ht=U[nt];ht===void 0&&(ht=new bn,ht.layers.enable(nt),ht.viewport=new Pe,U[nt]=ht),ht.matrix.fromArray(lt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(lt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ut.x,ut.y,ut.width,ut.height),nt===0&&(H.matrix.copy(ht.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ht===!0&&H.cameras.push(ht)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){f=n.getBinding();const nt=f.getDepthInformation(St[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(wt&&wt.includes("camera-access")&&E){t.state.unbindTexture(),f=n.getBinding();for(let nt=0;nt<St.length;nt++){const lt=St[nt].camera;if(lt){let ut=p[lt];ut||(ut=new bd,p[lt]=ut);const ht=f.getCameraImage(lt);ut.sourceTexture=ht}}}}for(let St=0;St<y.length;St++){const Ht=b[St],wt=y[St];Ht!==null&&wt!==void 0&&wt.update(Ht,et,c||a)}ce&&ce(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const oe=new Ud;oe.setAnimationLoop(ee),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}}const oM=new ae,Hd=new qt;Hd.set(-1,0,0,0,1,0,0,0,1);function lM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,T,g){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),T=S.envMap,g=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(g)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cM(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const b=y.program;n.uniformBlockBinding(g,b)}function c(g,y){let b=s[g.id];b===void 0&&(m(g),b=u(g),s[g.id]=b,g.addEventListener("dispose",S));const C=y.program;n.updateUBOMapping(g,C);const v=t.render.frame;r[g.id]!==v&&(h(g),r[g.id]=v)}function u(g){const y=f();g.__bindingPointIndex=y;const b=i.createBuffer(),C=g.__size,v=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const y=s[g.id],b=g.uniforms,C=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let v=0,w=b.length;v<w;v++){const R=b[v];if(Array.isArray(R))for(let D=0,U=R.length;D<U;D++)d(R[D],v,D,C);else d(R,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(g,y,b,C){if(E(g,y,b,C)===!0){const v=g.__offset,w=g.value;if(Array.isArray(w)){let R=0;for(let D=0;D<w.length;D++){const U=w[D],H=p(U);_(U,g.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,g.__data)}}function _(g,y,b){typeof g=="number"||typeof g=="boolean"?y[0]=g:g.isMatrix3?(y[0]=g.elements[0],y[1]=g.elements[1],y[2]=g.elements[2],y[3]=0,y[4]=g.elements[3],y[5]=g.elements[4],y[6]=g.elements[5],y[7]=0,y[8]=g.elements[6],y[9]=g.elements[7],y[10]=g.elements[8],y[11]=0):ArrayBuffer.isView(g)?y.set(new g.constructor(g.buffer,g.byteOffset,y.length)):g.toArray(y,b)}function E(g,y,b,C){const v=g.value,w=y+"_"+b;if(C[w]===void 0)return typeof v=="number"||typeof v=="boolean"?C[w]=v:ArrayBuffer.isView(v)?C[w]=v.slice():C[w]=v.clone(),!0;{const R=C[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(g){const y=g.uniforms;let b=0;const C=16;for(let w=0,R=y.length;w<R;w++){const D=Array.isArray(y[w])?y[w]:[y[w]];for(let U=0,H=D.length;U<H;U++){const N=D[U],B=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,X=B.length;Y<X;Y++){const ot=B[Y],$=p(ot),tt=b%C,it=tt%$.boundary,It=tt+it;b+=it,It!==0&&C-It<$.storage&&(b+=C-It),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=$.storage}}}const v=b%C;return v>0&&(b+=C-v),g.__size=b,g.__cache={},this}function p(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(y.boundary=16,y.storage=g.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",g),y}function S(g){const y=g.target;y.removeEventListener("dispose",S);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function T(){for(const g in s)i.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const uM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function hM(){return Zn===null&&(Zn=new Sd(uM,16,16,Ji,ii),Zn.name="DFG_LUT",Zn.minFilter=tn,Zn.magFilter=tn,Zn.wrapS=mi,Zn.wrapT=mi,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class dM{constructor(t={}){const{canvas:e=Dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const E=d,m=new Set([vc,_c,gc]),p=new Set([vn,ni,Mr,Sr,fc,pc]),S=new Uint32Array(4),T=new Int32Array(4),g=new P;let y=null,b=null;const C=[],v=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,U=null,H=null,N=null,B=null;this._outputColorSpace=$e;let Y=0,X=0,ot=null,$=-1,tt=null;const it=new Pe,It=new Pe;let Ct=null;const ce=new Ft(0);let ee=0,oe=e.width,Z=e.height,et=1,St=null,Ht=null;const wt=new Pe(0,0,oe,Z),Wt=new Pe(0,0,oe,Z);let pe=!1;const nt=new wc;let lt=!1,ut=!1;const ht=new ae,pt=new P,kt=new Pe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function $t(){return ot===null?et:1}let L=n;function ue(M,I){return e.getContext(M,I)}let ne,A,x,O,G,q,dt,ft,K,j,mt,Nt,xt,gt,Ut,zt,Zt,F,_t,Q,vt,Et,at;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),L===null){const I="webgl2";if(L=ue(I,M),L===null)throw ue(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(M){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),se("WebGLRenderer: "+M.message),M}function Ot(){ne=new hv(L),ne.init(),vt=new nM(L,ne),A=new ev(L,ne,t,vt),x=new tM(L,ne),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),H=L.createFramebuffer(),N=L.createFramebuffer(),B=L.createFramebuffer(),O=new pv(L),G=new zx,q=new eM(L,ne,x,G,A,vt,O),dt=new uv(R),ft=new g0(L),Et=new j_(L,ft),K=new dv(L,ft,O,Et),j=new gv(L,K,ft,Et,O),F=new mv(L,A,q),Ut=new nv(G),mt=new kx(R,dt,ne,A,Et,Ut),Nt=new lM(R,G),xt=new Hx,gt=new qx(ne),Zt=new Q_(R,dt,x,j,_,l),zt=new jx(R,j,A),at=new cM(L,O,A,x),_t=new tv(L,ne,O),Q=new fv(L,ne,O),O.programs=mt.programs,R.capabilities=A,R.extensions=ne,R.properties=G,R.renderLists=xt,R.shadowMap=zt,R.state=x,R.info=O}E!==vn&&(w=new vv(E,e.width,e.height,o,s,r));const Lt=new aM(R,L);this.xr=Lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(oe,Z,!1))},this.getSize=function(M){return M.set(oe,Z)},this.setSize=function(M,I,V=!0){if(Lt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=M,Z=I,e.width=Math.floor(M*et),e.height=Math.floor(I*et),V===!0&&(e.style.width=M+"px",e.style.height=I+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(oe*et,Z*et).floor()},this.setDrawingBufferSize=function(M,I,V){oe=M,Z=I,et=V,e.width=Math.floor(M*V),e.height=Math.floor(I*V),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(E===vn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(wt)},this.setViewport=function(M,I,V,k){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,I,V,k),x.viewport(it.copy(wt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Wt)},this.setScissor=function(M,I,V,k){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,I,V,k),x.scissor(It.copy(Wt).multiplyScalar(et).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){x.setScissorTest(pe=M)},this.setOpaqueSort=function(M){St=M},this.setTransparentSort=function(M){Ht=M},this.getClearColor=function(M){return M.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,V=!0){let k=0;if(M){let z=!1;if(ot!==null){const bt=ot.texture.format;z=m.has(bt)}if(z){const bt=ot.texture.type,At=p.has(bt),yt=Zt.getClearColor(),Rt=Zt.getClearAlpha(),Dt=yt.r,Qt=yt.g,ie=yt.b;At?(S[0]=Dt,S[1]=Qt,S[2]=ie,S[3]=Rt,L.clearBufferuiv(L.COLOR,0,S)):(T[0]=Dt,T[1]=Qt,T[2]=ie,T[3]=Rt,L.clearBufferiv(L.COLOR,0,T))}else k|=L.COLOR_BUFFER_BIT}I&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),Zt.dispose(),xt.dispose(),gt.dispose(),G.dispose(),dt.dispose(),j.dispose(),Et.dispose(),at.dispose(),mt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",$c),Lt.removeEventListener("sessionend",qc),Fi.stop()};function ye(M){M.preventDefault(),Fa("WebGLRenderer: Context Lost."),D=!0}function he(){Fa("WebGLRenderer: Context Restored."),D=!1;const M=O.autoReset,I=zt.enabled,V=zt.autoUpdate,k=zt.needsUpdate,z=zt.type;Ot(),O.autoReset=M,zt.enabled=I,zt.autoUpdate=V,zt.needsUpdate=k,zt.type=z}function Ln(M){se("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $n(M){const I=M.target;I.removeEventListener("dispose",$n),nf(I)}function nf(M){sf(M),G.remove(M)}function sf(M){const I=G.get(M).programs;I!==void 0&&(I.forEach(function(V){mt.releaseProgram(V)}),M.isShaderMaterial&&mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,V,k,z,bt){I===null&&(I=Bt);const At=z.isMesh&&z.matrixWorld.determinantAffine()<0,yt=of(M,I,V,k,z);x.setMaterial(k,At);let Rt=V.index,Dt=1;if(k.wireframe===!0){if(Rt=K.getWireframeAttribute(V),Rt===void 0)return;Dt=2}const Qt=V.drawRange,ie=V.attributes.position;let Pt=Qt.start*Dt,de=(Qt.start+Qt.count)*Dt;bt!==null&&(Pt=Math.max(Pt,bt.start*Dt),de=Math.min(de,(bt.start+bt.count)*Dt)),Rt!==null?(Pt=Math.max(Pt,0),de=Math.min(de,Rt.count)):ie!=null&&(Pt=Math.max(Pt,0),de=Math.min(de,ie.count));const Ue=de-Pt;if(Ue<0||Ue===1/0)return;Et.setup(z,k,yt,V,Rt);let Te,xe=_t;if(Rt!==null&&(Te=ft.get(Rt),xe=Q,xe.setIndex(Te)),z.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*$t()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(z.isLine){let Ke=k.linewidth;Ke===void 0&&(Ke=1),x.setLineWidth(Ke*$t()),z.isLineSegments?xe.setMode(L.LINES):z.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else z.isPoints?xe.setMode(L.POINTS):z.isSprite&&xe.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))xe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ke=z._multiDrawStarts,Tt=z._multiDrawCounts,nn=z._multiDrawCount,le=Rt?ft.get(Rt).bytesPerElement:1,Sn=G.get(k).currentProgram.getUniforms();for(let qn=0;qn<nn;qn++)Sn.setValue(L,"_gl_DrawID",qn),xe.render(Ke[qn]/le,Tt[qn])}else if(z.isInstancedMesh)xe.renderInstances(Pt,Ue,z.count);else if(V.isInstancedBufferGeometry){const Ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tt=Math.min(V.instanceCount,Ke);xe.renderInstances(Pt,Ue,Tt)}else xe.render(Pt,Ue)};function Yc(M,I,V,k){U!==null&&M.isNodeMaterial&&U.setObject(k,M),lt===!0&&Ut.setState(M,V,!1),M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=fn,M.needsUpdate=!0,kr(M,I,k),M.side=Ki,M.needsUpdate=!0,kr(M,I,k),M.side=En):kr(M,I,k)}this.compile=function(M,I,V=null){V===null&&(V=M),U!==null&&U.renderStart(M,I,V),b=gt.get(V),b.init(I),v.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),M!==V&&M.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,lt=Ut.init(this.clippingPlanes,ut),lt===!0&&Ut.setGlobalState(this.clippingPlanes,I),U!==null&&zt.render(b.state.shadowsArray,V,I);const k=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const bt=z.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){const yt=bt[At];Yc(yt,V,I,z),k.add(yt)}else Yc(bt,V,I,z),k.add(bt)}),b=v.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(M,I,V=null){const k=this.compile(M,I,V);return new Promise(z=>{function bt(){if(k.forEach(function(At){const Rt=G.get(At).currentProgram;(Rt===void 0||Rt.isReady())&&k.delete(At)}),k.size===0){z(M);return}setTimeout(bt,10)}ne.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ro=null;function rf(M){ro&&ro(M)}function $c(){Fi.stop()}function qc(){Fi.start()}const Fi=new Ud;Fi.setAnimationLoop(rf),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(M){ro=M,Lt.setAnimationLoop(M),M===null?Fi.stop():Fi.start()},Lt.addEventListener("sessionstart",$c),Lt.addEventListener("sessionend",qc),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(M,I);const V=Lt.enabled===!0&&Lt.isPresenting===!0,k=w!==null&&(ot===null||V)&&w.begin(R,ot);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(I),I=Lt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,I,ot),b=gt.get(M,v.length),b.init(I),b.state.textureUnits=q.getTextureUnits(),v.push(b),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),nt.setFromProjectionMatrix(ht,jn,I.reversedDepth),ut=this.localClippingEnabled,lt=Ut.init(this.clippingPlanes,ut),y=xt.get(M,C.length),y.init(),C.push(y),Lt.enabled===!0&&Lt.isPresenting===!0){const At=R.xr.getDepthSensingMesh();At!==null&&ao(At,I,-1/0,R.sortObjects)}ao(M,I,0,R.sortObjects),y.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&y.sort(St,Ht),Xt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Xt&&Zt.addToRenderList(y,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Ut.beginShadows();const z=b.state.shadowsArray;if(zt.render(z,M,I),lt===!0&&Ut.endShadows(),(k&&w.hasRenderPass())===!1){const At=y.opaque,yt=y.transmissive;if(b.setupLights(),I.isArrayCamera){const Rt=I.cameras;if(yt.length>0)for(let Dt=0,Qt=Rt.length;Dt<Qt;Dt++){const ie=Rt[Dt];Zc(At,yt,M,ie)}Xt&&Zt.render(M);for(let Dt=0,Qt=Rt.length;Dt<Qt;Dt++){const ie=Rt[Dt];Kc(y,M,ie,ie.viewport)}}else yt.length>0&&Zc(At,yt,M,I),Xt&&Zt.render(M),Kc(y,M,I)}ot!==null&&X===0&&(q.updateMultisampleRenderTarget(ot),q.updateRenderTargetMipmap(ot)),k&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,I),Et.resetDefaultState(),$=-1,tt=null,v.pop(),v.length>0?(b=v[v.length-1],q.setTextureUnits(b.state.textureUnits),lt===!0&&Ut.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,U!==null&&U.renderEnd()};function ao(M,I,V,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(nt)){k&&kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);const At=j.update(M),yt=M.material;yt.visible&&y.push(M,At,yt,V,kt.z,null,I)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(nt))){const At=j.update(M),yt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),kt.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),kt.copy(At.boundingSphere.center)),kt.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(yt)){const Rt=At.groups;for(let Dt=0,Qt=Rt.length;Dt<Qt;Dt++){const ie=Rt[Dt],Pt=yt[ie.materialIndex];Pt&&Pt.visible&&y.push(M,At,Pt,V,kt.z,ie,I)}}else yt.visible&&y.push(M,At,yt,V,kt.z,null,I)}}const bt=M.children;for(let At=0,yt=bt.length;At<yt;At++)ao(bt[At],I,V,k)}function Kc(M,I,V,k){const{opaque:z,transmissive:bt,transparent:At}=M;b.setupLightsView(V),lt===!0&&Ut.setGlobalState(R.clippingPlanes,V),k&&x.viewport(it.copy(k)),z.length>0&&Br(z,I,V),bt.length>0&&Br(bt,I,V),At.length>0&&Br(At,I,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Zc(M,I,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){const Pt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Tn(1,1,{generateMipmaps:!0,type:Pt?ii:vn,minFilter:Hi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}const bt=b.state.transmissionRenderTarget[k.id],At=k.viewport||it;bt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);const yt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(ce),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),Xt&&Zt.render(V);const Qt=R.toneMapping;R.toneMapping=ti;const ie=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),lt===!0&&Ut.setGlobalState(R.clippingPlanes,k),Br(M,V,k),q.updateMultisampleRenderTarget(bt),q.updateRenderTargetMipmap(bt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let de=0,Ue=I.length;de<Ue;de++){const Te=I[de],{object:xe,geometry:Ke,material:Tt,group:nn}=Te;if(Tt.side===En&&xe.layers.test(k.layers)){const le=Tt.side;Tt.side=fn,Tt.needsUpdate=!0,Jc(xe,V,k,Ke,Tt,nn),Tt.side=le,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(q.updateMultisampleRenderTarget(bt),q.updateRenderTargetMipmap(bt))}R.setRenderTarget(yt,Rt,Dt),R.setClearColor(ce,ee),ie!==void 0&&(k.viewport=ie),R.toneMapping=Qt}function Br(M,I,V){const k=I.isScene===!0?I.overrideMaterial:null;for(let z=0,bt=M.length;z<bt;z++){const At=M[z],{object:yt,geometry:Rt,group:Dt}=At;let Qt=At.material;Qt.allowOverride===!0&&k!==null&&(Qt=k),yt.layers.test(V.layers)&&Jc(yt,I,V,Rt,Qt,Dt)}}function Jc(M,I,V,k,z,bt){U!==null&&z.isNodeMaterial&&U.setObject(M,z),M.onBeforeRender(R,I,V,k,z,bt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(R,I,V,k,M,bt),z.transparent===!0&&z.side===En&&z.forceSinglePass===!1?(z.side=fn,z.needsUpdate=!0,R.renderBufferDirect(V,I,k,z,M,bt),z.side=Ki,z.needsUpdate=!0,R.renderBufferDirect(V,I,k,z,M,bt),z.side=En):R.renderBufferDirect(V,I,k,z,M,bt),M.onAfterRender(R,I,V,k,z,bt)}function kr(M,I,V){I.isScene!==!0&&(I=Bt);const k=G.get(M),z=b.state.lights,bt=b.state.shadowsArray,At=z.state.version,yt=mt.getParameters(M,z.state,bt,I,V,b.state.lightProbeGridArray),Rt=mt.getProgramCacheKey(yt);let Dt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;const Qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=dt.get(M.envMap||k.environment,Qt),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Dt===void 0&&(M.addEventListener("dispose",$n),Dt=new Map,k.programs=Dt);let ie=Dt.get(Rt);if(ie!==void 0){if(k.currentProgram===ie&&k.lightsStateVersion===At)return jc(M,yt),ie}else yt.uniforms=mt.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,V,yt),M.onBeforeCompile(yt,R),ie=mt.acquireProgram(yt,Rt),Dt.set(Rt,ie),k.uniforms=yt.uniforms;const Pt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=Ut.uniform),jc(M,yt),k.needsLights=cf(M),k.lightsStateVersion=At,k.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.sunLights.value=z.state.sun,Pt.sunLightShadows.value=z.state.sunShadow,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.sunShadowMatrix.value=z.state.sunShadowMatrix,Pt.sunShadowCascade.value=z.state.sunShadowCascade,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=ie,k.uniformsList=null,ie}function Qc(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=wa.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function jc(M,I){const V=G.get(M);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function af(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;g.setFromMatrixPosition(I.matrixWorld);for(let V=0,k=M.length;V<k;V++){const z=M[V];if(z.texture!==null&&z.boundingBox.containsPoint(g))return z}return null}function of(M,I,V,k,z){I.isScene!==!0&&(I=Bt),q.resetTextureUnits();const bt=I.fog,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,yt=ot===null?R.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:re.workingColorSpace,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=dt.get(k.envMap||At,Rt),Qt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ie=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!V.morphAttributes.position,de=!!V.morphAttributes.normal,Ue=!!V.morphAttributes.color;let Te=ti;k.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Te=R.toneMapping);const xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ke=xe!==void 0?xe.length:0,Tt=G.get(k),nn=b.state.lights;if(lt===!0&&(ut===!0||M!==tt)){const be=M===tt&&k.id===$;Ut.setState(k,M,be)}let le=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==nn.state.version||Tt.outputColorSpace!==yt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==Dt||k.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ut.numPlanes||Tt.numIntersection!==Ut.numIntersection)||Tt.vertexAlphas!==Qt||Tt.vertexTangents!==ie||Tt.morphTargets!==Pt||Tt.morphNormals!==de||Tt.morphColors!==Ue||Tt.toneMapping!==Te||Tt.morphTargetsCount!==Ke||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Tt.__version=k.version);let Sn=Tt.currentProgram;le===!0&&(Sn=kr(k,I,z),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Sn,Tt));let qn=!1,Ei=!1,es=!1;const _e=Sn.getUniforms(),Ie=Tt.uniforms;if(x.useProgram(Sn.program)&&(qn=!0,Ei=!0,es=!0),k.id!==$&&($=k.id,Ei=!0),Tt.needsLights){const be=af(b.state.lightProbeGridArray,z);Tt.lightProbeGrid!==be&&(Tt.lightProbeGrid=be,Ei=!0)}if(qn||tt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_e.setValue(L,"projectionMatrix",M.projectionMatrix),_e.setValue(L,"viewMatrix",M.matrixWorldInverse);const Ti=_e.map.cameraPosition;Ti!==void 0&&Ti.setValue(L,pt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&_e.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_e.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),tt!==M&&(tt=M,Ei=!0,es=!0)}if(Tt.needsLights&&(nn.state.sunShadowMap.length>0&&_e.setValue(L,"sunShadowMap",nn.state.sunShadowMap,q),nn.state.directionalShadowMap.length>0&&_e.setValue(L,"directionalShadowMap",nn.state.directionalShadowMap,q),nn.state.spotShadowMap.length>0&&_e.setValue(L,"spotShadowMap",nn.state.spotShadowMap,q),nn.state.pointShadowMap.length>0&&_e.setValue(L,"pointShadowMap",nn.state.pointShadowMap,q)),z.isSkinnedMesh){_e.setOptional(L,z,"bindMatrix"),_e.setOptional(L,z,"bindMatrixInverse");const be=z.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),_e.setValue(L,"boneTexture",be.boneTexture,q))}z.isBatchedMesh&&(_e.setOptional(L,z,"batchingTexture"),_e.setValue(L,"batchingTexture",z._matricesTexture,q),_e.setOptional(L,z,"batchingIdTexture"),_e.setValue(L,"batchingIdTexture",z._indirectTexture,q),_e.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(L,"batchingColorTexture",z._colorsTexture,q));const wi=V.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&F.update(z,V,Sn),(Ei||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,_e.setValue(L,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(Ie.envMapIntensity.value=I.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=hM()),Ei){if(_e.setValue(L,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&lf(Ie,es),bt&&k.fog===!0&&Nt.refreshFogUniforms(Ie,bt),Nt.refreshMaterialUniforms(Ie,k,et,Z,b.state.transmissionRenderTarget[M.id]),Tt.needsLights&&Tt.lightProbeGrid){const be=Tt.lightProbeGrid;Ie.probesSH.value=be.texture,Ie.probesMin.value.copy(be.boundingBox.min),Ie.probesMax.value.copy(be.boundingBox.max),Ie.probesResolution.value.copy(be.resolution)}wa.upload(L,Qc(Tt),Ie,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(wa.upload(L,Qc(Tt),Ie,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_e.setValue(L,"center",z.center),_e.setValue(L,"modelViewMatrix",z.modelViewMatrix),_e.setValue(L,"normalMatrix",z.normalMatrix),_e.setValue(L,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){const be=k.uniformsGroups;for(let Ti=0,ns=be.length;Ti<ns;Ti++){const eu=be[Ti];at.update(eu,Sn),at.bind(eu,Sn)}}return Sn}function lf(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function cf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(M,I,V){const k=G.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=I,G.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const V=G.get(M);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,V=0){ot=M,Y=I,X=V;let k=null,z=!1,bt=!1;if(M){const yt=G.get(M);if(yt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,yt.__webglFramebuffer),it.copy(M.viewport),It.copy(M.scissor),Ct=M.scissorTest,x.viewport(it),x.scissor(It),x.setScissorTest(Ct),$=-1;return}else if(yt.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(yt.__hasExternalTextures)q.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Qt=M.depthTexture;if(yt.__boundDepthTexture!==Qt){if(Qt!==null&&G.has(Qt)&&(M.width!==Qt.image.width||M.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const Rt=M.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(bt=!0);const Dt=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?k=Dt[I][V]:k=Dt[I],z=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?k=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[V]:k=Dt,it.copy(M.viewport),It.copy(M.scissor),Ct=M.scissorTest}else it.copy(wt).multiplyScalar(et).floor(),It.copy(Wt).multiplyScalar(et).floor(),Ct=pe;if(V!==0&&(k=H),x.bindFramebuffer(L.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(it),x.scissor(It),x.setScissorTest(Ct),z){const yt=G.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,V)}else if(bt){const yt=I;for(let Rt=0;Rt<M.textures.length;Rt++){const Dt=G.get(M.textures[Rt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,V,yt)}}else if(M!==null&&V!==0){const yt=G.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yt.__webglTexture,V)}$=-1};function tu(M){const I=G.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=A.textureFormatReadable(M.format),I.__typeReadable=A.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,V,k,z,bt,At,yt=0){if(!(M&&M.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt){x.bindFramebuffer(L.FRAMEBUFFER,Rt);try{const Dt=M.textures[yt],Qt=Dt.format,ie=Dt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt);const Pt=tu(Dt);if(Pt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&V>=0&&V<=M.height-z&&L.readPixels(I,V,k,z,vt.convert(Qt),vt.convert(ie),bt)}finally{const Dt=ot!==null?G.get(ot).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(M,I,V,k,z,bt,At,yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt)if(I>=0&&I<=M.width-k&&V>=0&&V<=M.height-z){x.bindFramebuffer(L.FRAMEBUFFER,Rt);const Dt=M.textures[yt],Qt=Dt.format,ie=Dt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt);const Pt=tu(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,de),L.bufferData(L.PIXEL_PACK_BUFFER,bt.byteLength,L.STREAM_READ),L.readPixels(I,V,k,z,vt.convert(Qt),vt.convert(ie),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Ue=ot!==null?G.get(ot).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ue);const Te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ip(L,Te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,de),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,bt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(de),L.deleteSync(Te),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,V=0){const k=Math.pow(2,-V),z=Math.floor(M.image.width*k),bt=Math.floor(M.image.height*k),At=I!==null?I.x:0,yt=I!==null?I.y:0;q.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,At,yt,z,bt),x.unbindTexture()},this.copyTextureToTexture=function(M,I,V=null,k=null,z=0,bt=0){let At,yt,Rt,Dt,Qt,ie,Pt,de,Ue;const Te=M.isCompressedTexture?M.mipmaps[bt]:M.image;if(V!==null)At=V.max.x-V.min.x,yt=V.max.y-V.min.y,Rt=V.isBox3?V.max.z-V.min.z:1,Dt=V.min.x,Qt=V.min.y,ie=V.isBox3?V.min.z:0;else{const Ie=Math.pow(2,-z);At=Math.floor(Te.width*Ie),yt=Math.floor(Te.height*Ie),M.isDataArrayTexture?Rt=Te.depth:M.isData3DTexture?Rt=Math.floor(Te.depth*Ie):Rt=1,Dt=0,Qt=0,ie=0}k!==null?(Pt=k.x,de=k.y,Ue=k.z):(Pt=0,de=0,Ue=0);const xe=vt.convert(I.format),Ke=vt.convert(I.type);let Tt;I.isData3DTexture?(q.setTexture3D(I,0),Tt=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(q.setTexture2DArray(I,0),Tt=L.TEXTURE_2D_ARRAY):(q.setTexture2D(I,0),Tt=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const nn=x.getParameter(L.UNPACK_ROW_LENGTH),le=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=x.getParameter(L.UNPACK_SKIP_PIXELS),qn=x.getParameter(L.UNPACK_SKIP_ROWS),Ei=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(L.UNPACK_SKIP_IMAGES,ie);const es=M.isDataArrayTexture||M.isData3DTexture,_e=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Ie=G.get(M),wi=G.get(I),be=G.get(Ie.__renderTarget),Ti=G.get(wi.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,be.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ns=0;ns<Rt;ns++)es&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(M).__webglTexture,z,ie+ns),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(I).__webglTexture,bt,Ue+ns)),L.blitFramebuffer(Dt,Qt,At,yt,Pt,de,At,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||G.has(M)){const Ie=G.get(M),wi=G.get(I);x.bindFramebuffer(L.READ_FRAMEBUFFER,N),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let be=0;be<Rt;be++)es?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,z,ie+be):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,z),_e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wi.__webglTexture,bt,Ue+be):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wi.__webglTexture,bt),z!==0?L.blitFramebuffer(Dt,Qt,At,yt,Pt,de,At,yt,L.COLOR_BUFFER_BIT,L.NEAREST):_e?L.copyTexSubImage3D(Tt,bt,Pt,de,Ue+be,Dt,Qt,At,yt):L.copyTexSubImage2D(Tt,bt,Pt,de,Dt,Qt,At,yt);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _e?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Tt,bt,Pt,de,Ue,At,yt,Rt,xe,Ke,Te.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,bt,Pt,de,Ue,At,yt,Rt,xe,Te.data):L.texSubImage3D(Tt,bt,Pt,de,Ue,At,yt,Rt,xe,Ke,Te):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,bt,Pt,de,At,yt,xe,Ke,Te.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,bt,Pt,de,Te.width,Te.height,xe,Te.data):L.texSubImage2D(L.TEXTURE_2D,bt,Pt,de,At,yt,xe,Ke,Te);x.pixelStorei(L.UNPACK_ROW_LENGTH,nn),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),x.pixelStorei(L.UNPACK_SKIP_ROWS,qn),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Ei),bt===0&&I.generateMipmaps&&L.generateMipmap(Tt),x.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){Y=0,X=0,ot=null,x.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}function fM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Xe;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let _=0;_<d.count;++_)f.push(d.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Ch(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let E=0;E<a[u].length;++E)d.push(a[u][E][h]);const _=Ch(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function Ch(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new on(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let _=0;_<e;_++){const E=u.getComponent(h,_);o.setComponent(h+f,_,E)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const W={tile:10934388,tileEdge:8369494,grassEdge:7975502,soilLight:13144671,grassLight:11130986,soil:10118720,cliff:9206378,leafLight:11722864,leaf:8438604,leafMid:6465855,leafDark:4491322,pine:4161608,pineLight:5609562,pineDark:2974009,trunk:8080943,trunkDark:5912610,wall:16114883,timber:7292205,roof:14445116,roofDark:11882028,roofLight:15762514,stone:12168088,stoneDark:9734006,castleWall:15655108,castleShade:13878179,castleRoof:4486607,gold:15975247,windowLit:16765806,door:8145451,millWall:15983558,sail:13662782,sailDark:10770987,rock:10921901,rockLight:12895690,rockDark:8355976,moss:8170827,flag:14829627,flowerPink:15965112,flowerYellow:16242524,flowerWhite:16775144,plank:12288072,plankDark:9263923,lily:5151298,smoke:16053490,white:16513006};function rt(i,t,e={}){const n=new ae().compose(new P(...e.p??[0,0,0]),new ri().setFromEuler(new Rn(...e.r??[0,0,0])),new P(...e.s??[1,1,1]));return{geo:i.clone().applyMatrix4(n),color:t}}function Un(i,t,e,n,s=0,r=1){const a=new ae().compose(new P(t,e,n),new ri().setFromEuler(new Rn(0,s,0)),new P(r,r,r));return i.map(o=>({geo:o.geo.clone().applyMatrix4(a),color:o.color}))}function On(i,t=.5,e=0){const n=i.map(({geo:r,color:a})=>{const o=r.index?r.toNonIndexed():r.clone();for(const f of Object.keys(o.attributes))f!=="position"&&o.deleteAttribute(f);const l=o.getAttribute("position"),c=new Float32Array(l.count*3),u=new Ft(a);for(let f=0;f<l.count;f++){const h=l.getY(f)-e,d=t>0?.74+.26*Math.min(1,Math.max(0,h/t)):1;c[f*3]=u.r*d,c[f*3+1]=u.g*d,c[f*3+2]=u.b*d}return o.setAttribute("color",new on(c,3)),o}),s=fM(n,!1);return s.computeVertexNormals(),s.computeBoundingSphere(),s}const Vt=(i,t,e)=>new zs(i,t,e),Ne=(i,t,e,n=8)=>new Ur(i,t,e,n),xi=(i,t,e=8)=>new Tc(i,t,e),Se=(i,t=0)=>new Rc(i,t);function xn(i,t,e){const n=i.index?i.toNonIndexed():i,s=n.getAttribute("position"),r=c=>`${s.getX(c).toFixed(3)},${s.getY(c).toFixed(3)},${s.getZ(c).toFixed(3)}`,a=new Map;let o=e;const l=()=>(o=o*16807%2147483647,o/2147483647-.5);for(let c=0;c<s.count;c++){const u=r(c);a.has(u)||a.set(u,[l()*t,l()*t,l()*t]);const f=a.get(u);s.setXYZ(c,s.getX(c)+f[0],s.getY(c)+f[1],s.getZ(c)+f[2])}return n}function pM(i,t,e){const n=new Gs;n.moveTo(-t/2,0),n.lineTo(t/2,0),n.lineTo(0,e),n.closePath();const s=new Ka(n,{depth:i,bevelEnabled:!1});return s.translate(0,0,-i/2),s.rotateY(Math.PI/2),s}function Yo(i,t){const e=new Pc(1,7,4);e.scale(i/2,.035,t/2);const n=e.getAttribute("position");for(let s=0;s<n.count;s++){const a=(n.getX(s)/(i/2)+1)/2;n.setZ(s,n.getZ(s)*(1-Math.pow(a,3)*.75)),n.setY(s,n.getY(s)+a*a*.05)}return e.translate(i/2,0,0),e}function mM(){return[rt(Ne(.14,.17,.05,9),W.soil,{p:[0,.025,0]}),rt(Se(.12,1),W.soilLight,{p:[0,.045,0],s:[1.15,.45,1.15]}),rt(Se(.025,0),W.stone,{p:[.11,.06,.05]}),rt(Ne(.03,.04,.3,6),W.leafMid,{p:[0,.17,0]}),rt(Yo(.34,.23),W.leaf,{p:[0,.31,0],r:[.15,.25,.5]}),rt(Yo(.34,.23),W.leafLight,{p:[0,.31,0],r:[-.15,Math.PI+.25,.5]}),rt(Yo(.15,.1),W.leafLight,{p:[0,.32,0],r:[0,-Math.PI/2,1.15]})]}function gM(){return[rt(Ne(.055,.085,.36,6),W.trunk,{p:[0,.18,0]}),rt(Ne(.02,.03,.16,5),W.trunk,{p:[.08,.34,0],r:[0,0,-.7]}),rt(xn(Se(.3,1),.04,11),W.leafMid,{p:[0,.6,0],s:[1,.92,1]}),rt(xn(Se(.2,1),.03,12),W.leaf,{p:[.14,.74,.08]}),rt(xn(Se(.18,1),.03,13),W.leaf,{p:[-.14,.72,-.06]}),rt(xn(Se(.16,1),.03,14),W.leafLight,{p:[0,.86,.02]}),rt(xn(Se(.16,0),.02,15),W.leafDark,{p:[.05,.46,.2]})]}function nr(){return[rt(Ne(.05,.07,.24,6),W.trunkDark,{p:[0,.12,0]}),rt(xi(.32,.42,7),W.pineDark,{p:[0,.4,0]}),rt(xi(.26,.38,7),W.pine,{p:[0,.62,0],r:[0,.3,0]}),rt(xi(.18,.34,7),W.pineLight,{p:[0,.84,0],r:[0,.6,0]})]}function ma(){return[rt(xn(Se(.17,1),.03,21),W.leafMid,{p:[0,.12,0],s:[1.2,.85,1]}),rt(xn(Se(.11,0),.02,22),W.leaf,{p:[.12,.16,.05]})]}function _M(i){return[rt(Ne(.008,.008,.08,4),W.leafMid,{p:[0,.04,0]}),rt(Se(.03,0),i,{p:[0,.09,0]})]}function Vd(i=1){return[rt(xn(Se(.26,1),.06,30+i),W.rock,{p:[-.04,.17,0],r:[.3,.5,.2],s:[1.1,.78,1]}),rt(xn(Se(.16,0),.04,31+i),W.rockDark,{p:[.2,.1,.13],r:[.6,.1,.9],s:[1,.8,1]}),rt(xn(Se(.1,0),.03,32+i),W.rockLight,{p:[.1,.07,-.21],r:[.2,.8,.1]}),rt(xn(Se(.09,0),.02,33+i),W.moss,{p:[-.1,.32,.03],s:[1.5,.35,1.3]})]}function vM(){return[rt(Vt(.68,.06,.56),W.stone,{p:[0,.03,0]}),rt(Vt(.58,.36,.46),W.wall,{p:[0,.24,0]}),rt(pM(.72,.6,.34),W.roof,{p:[0,.42,0]}),rt(Vt(.74,.025,.05),W.roofDark,{p:[0,.48,.21],r:[-.85,0,0]}),rt(Vt(.74,.025,.05),W.roofDark,{p:[0,.48,-.21],r:[.85,0,0]}),rt(Vt(.74,.025,.05),W.roofDark,{p:[0,.6,.1],r:[-.85,0,0]}),rt(Vt(.74,.025,.05),W.roofDark,{p:[0,.6,-.1],r:[.85,0,0]}),rt(Vt(.76,.05,.06),W.roofLight,{p:[0,.76,0]}),rt(Vt(.1,.26,.1),W.stone,{p:[.18,.7,-.1]}),rt(Vt(.13,.04,.13),W.stoneDark,{p:[.18,.84,-.1]}),rt(Vt(.035,.36,.035),W.timber,{p:[-.29,.24,.23]}),rt(Vt(.035,.36,.035),W.timber,{p:[.29,.24,.23]}),rt(Vt(.035,.36,.035),W.timber,{p:[-.29,.24,-.23]}),rt(Vt(.035,.36,.035),W.timber,{p:[.29,.24,-.23]}),rt(Vt(.58,.03,.02),W.timber,{p:[0,.4,.235]}),rt(Vt(.02,.03,.46),W.timber,{p:[.295,.4,0]}),rt(Vt(.02,.03,.46),W.timber,{p:[-.295,.4,0]}),rt(Vt(.12,.17,.02),W.door,{p:[0,.145,.235]}),rt(Ne(.06,.06,.02,8),W.door,{p:[0,.23,.235],r:[Math.PI/2,0,0]}),rt(Se(.012,0),W.gold,{p:[.035,.15,.25]}),...[-.17,.17].flatMap(t=>[rt(Vt(.1,.1,.02),W.windowLit,{p:[t,.26,.235]}),rt(Vt(.1,.012,.025),W.timber,{p:[t,.26,.24]}),rt(Vt(.012,.1,.025),W.timber,{p:[t,.26,.24]}),rt(Vt(.12,.03,.05),W.door,{p:[t,.2,.25]}),rt(Se(.022,0),W.flowerPink,{p:[t-.03,.225,.26]}),rt(Se(.022,0),W.flowerYellow,{p:[t+.02,.225,.26]})]),rt(Vt(.02,.1,.1),W.windowLit,{p:[.295,.26,0]}),rt(Vt(.02,.1,.1),W.windowLit,{p:[-.295,.26,0]}),rt(xn(Se(.07,0),.01,41),W.leafMid,{p:[-.29,.06,.27]}),rt(xn(Se(.06,0),.01,42),W.leaf,{p:[.3,.05,.28]})]}function xM(){return[rt(Ne(.34,.37,.06,8),W.stone,{p:[0,.03,0]}),rt(Ne(.2,.29,.72,8),W.millWall,{p:[0,.42,0]}),rt(Ne(.25,.27,.045,8),W.timber,{p:[0,.4,0]}),rt(Ne(.22,.21,.12,8),W.timber,{p:[0,.83,0]}),rt(xi(.28,.28,8),W.roof,{p:[0,1.03,0]}),rt(Ne(.008,.008,.22,4),W.timber,{p:[0,1.25,0]}),rt(Vt(.13,.21,.03),W.door,{p:[0,.155,.278]}),rt(Ne(.065,.065,.03,8),W.door,{p:[0,.26,.274],r:[Math.PI/2,0,0]}),rt(Vt(.08,.09,.02),W.windowLit,{p:[0,.52,.236],r:[-.13,0,0]}),rt(Vt(.07,.08,.02),W.windowLit,{p:[.236,.32,.1],r:[0,Math.PI/2.6,0]}),rt(Vt(.08,.08,.1),W.timber,{p:[0,.83,.21]})]}function MM(){const i=[rt(Ne(.045,.045,.06,8),W.timber,{r:[Math.PI/2,0,0]})];for(let t=0;t<4;t++){const e=t*Math.PI/2+Math.PI/4,n=(s,r=0)=>[Math.sin(e)*s+Math.cos(e)*r,Math.cos(e)*s-Math.sin(e)*r,0];i.push(rt(Vt(.03,.46,.025),W.timber,{p:n(.23),r:[0,0,-e]})),i.push(rt(Vt(.12,.32,.012),W.sail,{p:[...n(.29,.075).slice(0,2),.012],r:[0,0,-e]}));for(const s of[.18,.26,.34,.42])i.push(rt(Vt(.13,.012,.02),W.sailDark,{p:[...n(s,.075).slice(0,2),.02],r:[0,0,-e]}))}return i}function SM(){const i=[rt(Vt(.86,.07,.86),W.stoneDark,{p:[0,.035,0]}),rt(Vt(.62,.3,.1),W.castleWall,{p:[0,.22,.3]}),rt(Vt(.1,.3,.62),W.castleShade,{p:[.3,.22,0]}),rt(Vt(.1,.3,.62),W.castleShade,{p:[-.3,.22,0]}),rt(Vt(.62,.3,.1),W.castleShade,{p:[0,.22,-.3]}),rt(Vt(.38,.62,.36),W.castleWall,{p:[.02,.38,-.04]}),rt(xi(.31,.34,4),W.castleRoof,{p:[.02,.86,-.04],r:[0,Math.PI/4,0]}),rt(Vt(.07,.1,.02),W.windowLit,{p:[-.06,.52,.14]}),rt(Vt(.07,.1,.02),W.windowLit,{p:[.1,.52,.14]}),rt(Vt(.16,.18,.03),W.door,{p:[0,.16,.36]}),rt(Ne(.08,.08,.03,8),W.door,{p:[0,.25,.36],r:[Math.PI/2,0,0]}),rt(Vt(.2,.025,.035),W.gold,{p:[0,.075,.37]})];for(let n=-2;n<=2;n++)i.push(rt(Vt(.07,.07,.11),W.castleWall,{p:[n*.12,.405,.3]}));const t=[[-.32,.32,.56],[.32,.32,.56],[-.32,-.32,.86],[.32,-.32,.66]];for(const[n,s,r]of t)i.push(rt(Ne(.12,.13,r,8),W.castleWall,{p:[n,r/2+.05,s]})),i.push(rt(Ne(.14,.14,.05,8),W.castleShade,{p:[n,r+.06,s]})),i.push(rt(xi(.17,.32,8),W.castleRoof,{p:[n,r+.25,s]})),i.push(rt(Se(.02,0),W.gold,{p:[n,r+.42,s]})),i.push(rt(Vt(.05,.08,.02),W.windowLit,{p:[n,r*.7,s+(s>0,.125)]}));const e=new Gs;e.moveTo(0,0),e.lineTo(.1,-.025),e.lineTo(0,-.055),e.closePath();for(const[n,s,r]of t.slice(0,2))i.push(rt(Ne(.006,.006,.14,4),W.timber,{p:[n,r+.46,s]})),i.push(rt(new Fr(e),W.flag,{p:[n,r+.53,s]}));return i.push(rt(Ne(.007,.007,.2,4),W.timber,{p:[-.32,1.38,-.32]})),i}let ga=null,_a=null;function yM(){if(!_a){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(24,40,20,0.55)"),n.addColorStop(.55,"rgba(24,40,20,0.28)"),n.addColorStop(1,"rgba(24,40,20,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new $a(t);_a={geo:new Hs(1,1).rotateX(-Math.PI/2),mat:new pi({map:s,transparent:!0,depthWrite:!1,toneMapped:!1})}}const i=new Ee(_a.geo,_a.mat);return i.renderOrder=1,i}const bM={0:.42,1:.62,2:.7,3:.62,4:.86,[Re]:.56};function EM(){if(ga)return ga;const i=new Us({vertexColors:!0,flatShading:!0,roughness:.82,metalness:0}),t=i.clone();t.side=En;const e=new Us({color:W.smoke,flatShading:!0,roughness:1,transparent:!0,opacity:.85}),n=new Map([[0,On(mM(),.3)],[1,On(gM(),.7)],[2,On(vM(),.5)],[3,On(xM(),.8)],[4,On(SM(),.9)],[Re,On(Vd(),.3)]]),s=new Gs;return s.moveTo(0,0),s.lineTo(.17,-.04),s.lineTo(0,-.1),s.closePath(),ga={material:i,doubleSided:t,smokeMaterial:e,geos:n,sails:On(MM(),0),flag:On([rt(new Fr(s),W.flag)],0),puff:Se(1,0)},ga}const wM={0:1.9,1:1.45,2:1.32,3:1.3,4:1.3,[Re]:1.45};function $o(i,t){const e=EM(),n=new Gn,s=new Gn;s.scale.setScalar(wM[i]??1),n.add(s);const r=new Ee(e.geos.get(i),t??e.material);if(r.castShadow=!t,r.receiveShadow=!t,s.add(r),!t){const l=yM();l.scale.setScalar(bM[i]??.8),l.position.y=.004,n.add(l)}const a=Math.random()*10,o=[];if(i===3){const l=new Ee(e.sails,t??e.doubleSided);l.position.set(0,.83,.275),l.castShadow=!t,s.add(l),o.push(c=>l.rotation.z=-c*.8-a)}if(i===3||i===si){const l=new Ee(e.flag,t??e.doubleSided);i===3?l.position.set(0,1.35,0):l.position.set(-.32,1.47,-.32),s.add(l),o.push(c=>l.rotation.y=Math.sin(c*2.4+a)*.4-.3)}if(i===2&&!t){const l=[0,1,2].map(()=>{const u=new Ee(e.puff,e.smokeMaterial);return s.add(u),u}),c=new P(.18,.88,-.1);o.push(u=>{l.forEach((f,h)=>{const d=(u*.35+h/3+a)%1;f.position.set(c.x+d*.08,c.y+d*.42,c.z-d*.04),f.scale.setScalar(.035+Math.sin(d*Math.PI)*.05)})}),o[o.length-1](0)}if(i===0||i===1){const l=i===0?.07:.025;o.push(c=>r.rotation.z=Math.sin(c*1.6+a)*l)}return{root:n,tick:o.length?l=>o.forEach(c=>c(l)):void 0}}const TM=2.8,qo=-18,Rh=10;function AM(){const i=[0,0,.14],t=[0,0,-.1],e=[-.28,.1,-.06],n=[.28,.1,-.06],s=new Xe;return s.setAttribute("position",new on(new Float32Array([...i,...t,...e,...i,...n,...t]),3)),s.computeBoundingSphere(),s}function CM(){return On([rt(Se(.75,1),W.white,{p:[0,0,0],s:[1.35,.7,1]}),rt(Se(.55,1),W.white,{p:[.85,-.08,.15],s:[1.2,.72,1]}),rt(Se(.5,1),W.white,{p:[-.85,-.1,-.1],s:[1.25,.7,1]}),rt(Se(.42,1),W.white,{p:[.3,.32,-.05],s:[1.2,.85,1]})],.8,-.5)}const Ko=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Zo(i){const t=i/TM;return t>0&&t<1?t<.22?Math.sin(t/.22*Math.PI*.5):.5+.5*Math.cos((t-.22)/.78*Math.PI):0}function RM(i){const t=new Gn;t.name="ambient";let e=7;const n=()=>(e=e*16807%2147483647,e/2147483647),s=[],r=i?3:4;for(let g=0;g<r;g++)s.push({radius:10.5+n()*2.5,stretch:.8+n()*.3,height:1.4+n()*.9,speed:(.12+n()*.08)*(g%3===2?-1:1),phase:g/r*Math.PI*2+n()*.8,size:.85+n()*.3,startledAt:-1/0,away:new P(1,0,0)});const a=new Ba(AM(),new pi({color:16513780,side:En}),r);a.instanceMatrix.setUsage(xu),a.frustumCulled=!1,t.add(a);const o=[{alongZ:!0,lane:-8.6,offset:4,y:1.9,speed:.11,size:1,yaw:.4},{alongZ:!1,lane:-8.4,offset:9,y:2.3,speed:.09,size:1.15,yaw:-.3},{alongZ:!0,lane:-10.2,offset:20,y:1.3,speed:.08,size:.85,yaw:1.2},{alongZ:!1,lane:-10.5,offset:23,y:1.6,speed:.1,size:.95,yaw:2}].slice(0,0),l=new Ba(CM(),new o0({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.86,emissive:7306376,emissiveIntensity:.35}),o.length);l.instanceMatrix.setUsage(xu),l.frustumCulled=!1,t.add(l);const c=new ae,u=new ri,f=new Rn,h=new P,d=new P,_=new P;let E=0,m=!1;const p=(g,y,b)=>{const C=g.phase+g.speed*y;b.set(Math.cos(C)*g.radius,g.height+Math.sin(y*.7+g.phase*3)*.25,Math.sin(C)*g.radius*g.stretch);const v=Zo(y-g.startledAt);return v>0&&(b.addScaledVector(g.away,v*4.5),b.y+=v*2.6),b},S=g=>{s.forEach((y,b)=>{p(y,g,d),p(y,g+.06,_).sub(d);const C=Zo(g-y.startledAt),v=C>0?0:Ko(.35,.75,Math.sin(g*.55+y.phase*2)),w=Math.sin(g*(10+C*9)+y.phase*5),R=w+(.45-w)*v,D=Math.atan2(_.x,_.z),U=-Math.atan2(_.y,Math.hypot(_.x,_.z))*.7;f.set(U,D,Math.sign(y.speed)*.22*(1-C),"YXZ"),c.compose(d,u.setFromEuler(f),h.set(y.size,y.size*R,y.size)),a.setMatrixAt(b,c)}),a.instanceMatrix.needsUpdate=!0},T=g=>{const y=Rh-qo;o.forEach((b,C)=>{const v=qo+((b.offset+b.speed*g)%y+y)%y,w=Ko(0,3,v-qo)*Ko(0,3,Rh-v);b.alongZ?d.set(b.lane,b.y,v):d.set(v,b.y,b.lane),f.set(0,b.yaw,0),c.compose(d,u.setFromEuler(f),h.setScalar(Math.max(.001,b.size*w))),l.setMatrixAt(C,c)}),l.instanceMatrix.needsUpdate=!0};return S(0),T(0),{group:t,tick(g){E=g,!m&&(S(g),T(g))},startle(g){if(!m)for(const y of s){if(Zo(E-y.startledAt)>0)continue;p(y,E,d);const b=Math.hypot(d.x-g.x,d.z-g.z);y.away.set(d.x-g.x,0,d.z-g.z),y.away.lengthSq()<1e-6&&y.away.set(1,0,0),y.away.normalize(),y.startledAt=E+Math.min(.5,b*.03)+n()*.15}},setReducedMotion(g){m=g,a.visible=!g}}}const PM=.001;function LM(i,t){return{col:{x:Math.cos(i),y:Math.sin(t)*Math.sin(i)},row:{x:-Math.sin(i),y:Math.sin(t)*Math.cos(i)}}}function DM(i,t,e=PM){const n=_=>{const E=Math.hypot(_.x,_.y)||1;return{x:_.x/E,y:_.y/E}},s=n(i),r=n(t),a=_=>_<-e?-1:1,o=Math.abs(s.x)-Math.abs(r.x),l=o>e?!0:o<-e?!1:a(s.x)*s.y>=a(r.x)*r.y-e,c=l?s:r,u=l?r:s,f=a(c.x),h=a(u.y),d=(_,E)=>_?{dx:E,dy:0}:{dx:0,dy:E};return{ArrowRight:d(l,f),ArrowLeft:d(l,-f),ArrowDown:d(!l,h),ArrowUp:d(!l,-h)}}function Ph(i,t){const{col:e,row:n}=LM(i,t);return DM(e,n)}const gn={linear:i=>i,inQuad:i=>i*i,outCubic:i=>1-(1-i)**3,inCubic:i=>i**3,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2};class IM{constructor(){this.list=[],this.speed=1}get active(){return this.list.length>0}run(t,e,n=gn.outCubic){return new Promise(s=>{const r=t*this.speed;if(r<=0){e(1),s();return}e(n(0)),this.list.push({elapsed:0,duration:r,ease:n,update:e,resolve:s})})}wait(t){return this.run(t,()=>{},gn.linear)}tick(t){if(!this.list.length)return;const e=[];for(const n of this.list){n.elapsed+=t;const s=Math.min(1,n.elapsed/n.duration);n.update(n.ease(s)),s>=1&&e.push(n)}if(e.length){this.list=this.list.filter(n=>!e.includes(n));for(const n of e)n.resolve()}}finishAll(){const t=this.list;this.list=[];for(const e of t)e.update(e.ease(1)),e.resolve()}}const Ce=De/2,an=Ce+1.05,Jo=1.1,Oe=-.03,di=-.62,Ta=new Ft(3118013);function Wd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ka(i,t,e){const n=new Gs;return n.moveTo(-i+e,-t),n.lineTo(i-e,-t),n.quadraticCurveTo(i,-t,i,-t+e),n.lineTo(i,t-e),n.quadraticCurveTo(i,t,i-e,t),n.lineTo(-i+e,t),n.quadraticCurveTo(-i,t,-i,t-e),n.lineTo(-i,-t+e),n.quadraticCurveTo(-i,-t,-i+e,-t),n}function Dc(i,t,e,n=8){const s=new Ka(i,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:n});return s.rotateX(Math.PI/2),s.translate(0,-e,0),s.index?s.toNonIndexed():s}function Ic(i,t,e,n){i.computeVertexNormals();const s=i.getAttribute("position"),r=i.getAttribute("normal"),a=new Float32Array(s.count*3),o=new Ft(t),l=new Ft(e);for(let c=0;c<s.count;c+=3){const u=(r.getY(c)+r.getY(c+1)+r.getY(c+2))/3;for(let f=0;f<3;f++){const h=u>.85?o:u>.25?l:n(s.getY(c+f));a.set([h.r,h.g,h.b],(c+f)*3)}}return i.setAttribute("color",new on(a,3)),i}function NM(){const i=Dc(ka(.43,.43,.12),.05,.02,4);return Ic(i,W.tile,W.tileEdge,()=>new Ft(W.tileEdge))}function UM(){const i=Dc(ka(.5,.5,.16),.42,.05,4),t=new Ft(W.soilLight),e=new Ft(W.soil);return Ic(i,W.tile,W.grassEdge,n=>t.clone().lerp(e,fd.clamp(-n/.45,0,1)))}function FM(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#8cc65c",e.fillRect(0,0,512,512);const n=Wd(99);for(let o=0;o<260;o++){const l=n()*512,c=n()*512,u=14+n()*46,f=e.createRadialGradient(l,c,0,l,c,u),h=n()>.5;f.addColorStop(0,h?"rgba(178,224,118,0.32)":"rgba(104,160,72,0.26)"),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.fillRect(l-u,c-u,u*2,u*2)}e.lineCap="round";for(let o=0;o<1800;o++){const l=n()*512,c=n()*512;e.strokeStyle=n()>.5?"rgba(96,150,66,0.55)":"rgba(176,222,118,0.6)",e.lineWidth=1.2,e.beginPath(),e.moveTo(l,c),e.lineTo(l+(n()-.5)*3,c-3-n()*3),e.stroke()}const s=Ce/an*(512/2),r=["#fff7e6","#ffe27a","#ffb3c8","#c9b8ff"];for(let o=0;o<160;o++){const l=n()*512,c=n()*512;Math.abs(l-512/2)<s+6&&Math.abs(c-512/2)<s+6||(e.fillStyle=r[Math.floor(n()*r.length)],e.beginPath(),e.arc(l,c,1.8+n()*1.4,0,Math.PI*2),e.fill())}const a=new $a(t);return a.colorSpace=$e,a.anisotropy=4,a}function OM(){const i=new Gn,t=Wd(20240611),e=new Us({vertexColors:!0,flatShading:!0,roughness:.92}),n=ka(an,an,Jo),s=new Ft(W.soilLight),r=new Ft(W.soil),a=new Ft(W.cliff),o=Dc(n,2.2,.16,10);Ic(o,W.grassEdge,W.grassEdge,g=>g>-.2?new Ft(W.grassEdge):g>di-.05?s.clone().lerp(r,fd.clamp((-g-.2)/.45,0,1)):a),o.translate(0,Oe,0);const l=new Ee(o,e);l.receiveShadow=!0,i.add(l);const c=new Fr(ka(an+.02,an+.02,Jo+.02),12);c.rotateX(-Math.PI/2);const u=FM();u.repeat.set(1/(2*an),1/(2*an)),u.offset.set(.5,.5);const f=new Ee(c,new Us({map:u,roughness:1}));f.position.y=Oe+.005,f.receiveShadow=!0,i.add(f);const h=[],d=(g,y)=>{const b=Ce+.52,C=-Ce+.5+g*(De-1);return y===0?[C,-b]:y===1?[-b,C]:y===2?[C,b]:[b,C]};h.push(...Un(nr(),-Ce-.5,Oe,-Ce-.45,.4,1)),h.push(...Un(nr(),-Ce-.55,Oe,-Ce+.8,1.1,.75)),h.push(...Un(nr(),-Ce+.85,Oe,-Ce-.55,2,.85)),h.push(...Un(nr(),Ce-.4,Oe,-Ce-.55,1.7,.7)),h.push(...Un(nr(),-Ce-.55,Oe,Ce-.9,.9,.65)),h.push(...Un(ma(),Ce+.55,Oe,-Ce-.45,0,1)),h.push(...Un(ma(),-Ce-.5,Oe,1.2,1.4,.8)),h.push(...Un(ma(),Ce+.5,Oe,Ce+.45,.5,.8)),h.push(...Un(ma(),-1.8,Oe,Ce+.55,2.2,.6));for(let g=0;g<7;g++){const y=-1.2+g*.32;h.push(rt(Vt(.06,.26,.05),W.white,{p:[y,Oe+.13,-Ce-.62]})),h.push(rt(xi(.045,.06,4),W.white,{p:[y,Oe+.29,-Ce-.62],r:[0,Math.PI/4,0]}))}h.push(rt(Vt(2.05,.04,.03),W.white,{p:[-.24,Oe+.18,-Ce-.62]})),h.push(rt(Vt(2.05,.04,.03),W.white,{p:[-.24,Oe+.08,-Ce-.62]}));for(let g=0;g<10;g++){const[y,b]=d(t(),Math.floor(t()*4));h.push(rt(Se(.05+t()*.03,0),W.rockLight,{p:[y,Oe+.015,b],s:[1.3,.45,1]}))}for(let g=0;g<4;g++)for(let y=0;y<4;y++){const[b,C]=d(t(),g),v=[W.flowerPink,W.flowerYellow,W.flowerWhite][Math.floor(t()*3)];for(let w=0;w<3;w++)h.push(...Un(_M(v),b+(t()-.5)*.4,Oe,C+(t()-.5)*.3,0,1.2))}for(let g=0;g<18;g++){const[y,b]=d(t(),Math.floor(t()*4));h.push(rt(xi(.035,.16,4),W.leafMid,{p:[y,Oe+.08,b],r:[0,t()*3,(t()-.5)*.4]}))}const _=an+.05,E=1.9;for(let g=0;g<6;g++)h.push(rt(Vt(.24,.05,.78),g%2?W.plank:W.plankDark,{p:[_+.12+g*.25,di+.32,E]}));for(const[g,y]of[[.3,-.36],[.3,.36],[1.4,-.36],[1.4,.36]])h.push(rt(Ne(.045,.045,.6,6),W.plankDark,{p:[_+g,di+.08,E+y]}));for(const[g,y,b]of[[-an-1.1,2.6,.9],[2.8,-an-1,.7],[an+1.6,-3.2,.55]])h.push(...Un(Vd(Math.round(g)),g,di-.1,y,g,b));for(let g=0;g<9;g++){const y=g<5,b=y?-an-.45-t()*.9:1.2+t()*1.3,C=y?-1.2+t()*1.6:an+.45+t()*.8,v=.11+t()*.08;h.push(rt(Ne(v,v,.02,9),W.lily,{p:[b,di+.02,C]})),t()<.3&&h.push(rt(Se(.04,0),W.flowerPink,{p:[b,di+.06,C]}))}const m=new Ee(On(h,.5,Oe),e);m.castShadow=!0,m.receiveShadow=!0,i.add(m);const p=new Ee(On([rt(Vt(.36,.14,.82),W.plank,{p:[0,.07,0]}),rt(Vt(.3,.05,.7),W.plankDark,{p:[0,.12,0]}),rt(xi(.18,.3,4),W.plank,{p:[0,.07,.52],r:[Math.PI/2,Math.PI/4,0],s:[1,1,.45]}),rt(Vt(.3,.03,.1),W.plankDark,{p:[0,.16,-.1]})],0),e);p.castShadow=!0,p.position.set(_+.9,di,E+.85),p.rotation.y=.35,i.add(p);const S={uTime:{value:0},uShallow:{value:new Ft(8380643)},uMid:{value:new Ft(4569558)},uDeep:{value:Ta.clone()},uHalf:{value:an+.16},uRadius:{value:Jo+.16}},T=new Ee(new Hs(120,120,1,1).rotateX(-Math.PI/2),new Xn({uniforms:S,vertexShader:`
        varying vec3 vPos;
        void main() {
          vec4 w = modelMatrix * vec4(position, 1.0);
          vPos = w.xyz;
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        uniform float uTime, uHalf, uRadius;
        uniform vec3 uShallow, uMid, uDeep;
        varying vec3 vPos;
        float sdRoundBox(vec2 p, vec2 b, float r) {
          vec2 q = abs(p) - b + r;
          return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
        }
        void main() {
          float d = sdRoundBox(vPos.xz, vec2(uHalf), uRadius);
          vec3 col = mix(uShallow, uMid, smoothstep(0.0, 2.2, d));
          col = mix(col, uDeep, smoothstep(2.0, 9.0, d));
          // Very soft, broad swells (no spots): the water should feel calm, not busy.
          float w = sin(vPos.x * 0.55 + vPos.z * 0.35 + uTime * 0.45) + sin(vPos.z * 0.6 - vPos.x * 0.25 - uTime * 0.35);
          col *= 1.0 + w * 0.018;
          // Foam hugging the shore, with a second ring breathing outwards.
          float foam = 1.0 - smoothstep(0.0, 0.16, d);
          float ring = smoothstep(0.08, 0.0, abs(d - (0.32 + 0.1 * sin(uTime * 1.2))));
          col = mix(col, vec3(1.0), clamp(foam * 0.9 + ring * 0.45, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));return T.position.y=di,T.renderOrder=-1,i.add(T),{group:i,tick:g=>{S.uTime.value=g,p.position.y=di+Math.sin(g*1.3)*.025,p.rotation.z=Math.sin(g*1.1)*.04}}}let Qo=null;const jo={iso:{azimuth:Math.PI/4,elevation:Math.atan(1/Math.SQRT2)},cozy:{azimuth:0,elevation:.88,fov:30}},Rr=1,fr=De*Rr/2;function Ye(i){const{x:t,y:e}=_r(i);return new P((t+.5)*Rr-fr,0,(e+.5)*Rr-fr)}const BM=new Ft(1.28,1.24,1.05),kM=new Ft(1.42,1.2,.72),zM=new Ft(1.25,.78,.62),GM=new Ft(1.16,1.2,1.1),HM=10481864,tl=.62,VM=[15655622,14865328,W.grassLight],WM=[W.rockLight,W.rock,14865328];function XM(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new $a(i);return n.colorSpace=$e,n}function YM(){const i=document.createElement("canvas");i.width=4,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0.95)"),t.fillStyle=e,t.fillRect(0,0,4,64);const n=new $a(i);return n.colorSpace=$e,n}class $M{constructor(t,e){this.container=t,this.scene=new Iu,this.ortho=new Cr(-5,5,5,-5,.1,120),this.perspective=new bn(30,1,.5,200),this.camera=this.ortho,this.tweens=new IM,this.tileBase=[],this.pieces=new Map,this.pieceLayer=new Gn,this.fxLayer=new Gn,this.raycaster=new p0,this.groundPlane=new fi(new P(0,1,0),0),this.ghost=null,this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.frames=[],this.view="iso",this.arrows=new Map,this.pieceYaw=0,this.insets={top:0,right:0,bottom:0,left:0},this.reducedMotion=!1,this.dirty=!0,this.lastFrame=0,this.lastIdleRender=0,this.clock=0,this.shake=0,this.rafId=0,this.width=0,this.height=0,this.baseCamPos=new P,this.ringPool=[],this.particlePool=[],this.glowPool=[],this.animGen=0,this.performing=!1,this.leaning=new Map,this.lost=!1,this.dprQuery=null,this.handleContextLost=s=>{s.preventDefault(),this.lost=!0,this.stopShake()},this.handleContextRestored=()=>{this.lost=!1,this.dirty=!0,this.onContextRestored?.()},this.onPixelRatioChange=()=>{this.watchPixelRatio(),this.resize()},this.renderer=e??new dM({antialias:!0,powerPreference:"high-performance"});const n=Math.min(window.innerWidth,window.innerHeight)<700;this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ar,this.renderer.outputColorSpace=$e,this.renderer.toneMapping=hc,this.renderer.toneMappingExposure=1.08,this.renderer.setClearColor(Ta,1),this.canvas=this.renderer.domElement,this.canvas.className="board-canvas",t.appendChild(this.canvas),this.canvas.addEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this.scene.fog=new Ec(Ta,60,120),this.ghostMaterial=new Us({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.6,depthWrite:!1,roughness:.9}),this.buildLights(n),this.world=OM(),this.scene.add(this.world.group),this.ambient=RM(n),this.scene.add(this.ambient.group),this.tileMaterial=new Us({vertexColors:!0,flatShading:!0,roughness:.92}),this.tiles=this.buildTiles(),this.scene.add(this.pieceLayer,this.fxLayer),this.buildFxPools(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.watchPixelRatio(),this.resize(),this.loop=this.loop.bind(this),this.rafId=requestAnimationFrame(this.loop)}buildLights(t){this.scene.add(new Ju(15857663,9416300,1.55));const e=new da(16773334,2.35);e.position.set(-7,11,1.5),e.castShadow=!0,e.shadow.mapSize.set(t?1024:2048,t?1024:2048);const n=e.shadow.camera;n.left=-8,n.right=8,n.top=8,n.bottom=-8,n.near=1,n.far=40,e.shadow.bias=-5e-4,e.shadow.normalBias=.03,e.shadow.radius=4,this.scene.add(e);const s=new da(13625087,.55);s.position.set(8,5,6),this.scene.add(s)}buildTiles(){const t=new Ba(NM(),this.tileMaterial,dn),e=new ae;for(let n=0;n<dn;n++){const s=Ye(n);e.makeTranslation(s.x,0,s.z),t.setMatrixAt(n,e);const{x:r,y:a}=_r(n),o=Math.sin(n*91.17)*43758.5453,l=o-Math.floor(o),c=((r+a)%2?.93:1)*(.97+l*.05),u=l>.75?.04:0;this.tileBase.push(new Ft(c*(1+u),c,c*(.97-u))),t.setColorAt(n,this.tileBase[n])}return t.receiveShadow=!0,t.castShadow=!0,this.scene.add(t),t}buildFxPools(){const t=new dr(.42,.5,32);t.rotateX(-Math.PI/2);for(let o=0;o<6;o++){const l=new Ee(t,new pi({color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1}));l.visible=!1,this.ringPool.push(l),this.fxLayer.add(l)}const e=new Lc(.06,0);for(let o=0;o<56;o++){const l=new Ee(e,new pi({color:16777215,transparent:!0,toneMapped:!1}));l.visible=!1,this.particlePool.push(l),this.fxLayer.add(l)}const n=new dr(.585,.675,4,1,Math.PI/4);n.rotateX(-Math.PI/2);for(let o=0;o<12;o++){const l=new Ee(n,new pi({color:16777215,transparent:!0,depthWrite:!1,blending:Es,toneMapped:!1}));l.visible=!1,l.renderOrder=2,this.frames.push(l),this.fxLayer.add(l)}const s=new dr(.5,.57,4,1,Math.PI/4);s.rotateX(-Math.PI/2),this.suggest=new Ba(s,new pi({color:HM,transparent:!0,opacity:tl,depthWrite:!1,blending:Es,toneMapped:!1}),dn),this.suggest.count=0,this.suggest.visible=!1,this.suggest.renderOrder=2,this.suggest.frustumCulled=!1,this.fxLayer.add(this.suggest);const r=XM(),a=YM();for(let o=0;o<3;o++){const l=new _m(new vd({map:r,color:16765802,transparent:!0,depthWrite:!1,blending:Es,toneMapped:!1})),c=new Ee(new Ur(.42,.48,2.2,20,1,!0).translate(0,1.1,0),new pi({map:a,color:16765802,transparent:!0,depthWrite:!1,side:En,blending:Es,toneMapped:!1}));l.visible=c.visible=!1,this.glowPool.push({sprite:l,column:c}),this.fxLayer.add(l,c)}}isContextLost(){return this.lost||this.renderer.getContext().isContextLost()}markDirty(){this.dirty=!0}setReducedMotion(t){this.reducedMotion=t,this.tweens.speed=t?.35:1,this.ambient.setReducedMotion(t);for(const e of this.frames){const n=e.material;n.opacity=n.userData.base??1}this.suggest.material.opacity=tl,this.updateLean(),this.dirty=!0}setView(t){this.resetLean(),this.view=t,this.pieceYaw=t==="cozy"?-.6:0;for(const e of this.pieces.values())e.model.root.rotation.y=this.pieceYaw;this.ghost&&(this.ghost.model.root.rotation.y=this.pieceYaw),this.fitCamera()}getView(){return this.view}setInsets(t){Object.keys(t).every(n=>Math.abs(t[n]-this.insets[n])<.5)||(this.insets={...t},this.fitCamera())}resize(){const t=this.container.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),n=Math.max(1,Math.floor(t.height));!this.applyPixelRatio()&&e===this.width&&n===this.height||(this.width=e,this.height=n,this.renderer.setSize(e,n,!1),this.fitCamera(),this.renderNow())}applyPixelRatio(){const t=Math.min(window.innerWidth,window.innerHeight)<700,e=Math.min(window.devicePixelRatio||1,t?2:1.75);return e===this.renderer.getPixelRatio()?!1:(this.renderer.setPixelRatio(e),!0)}watchPixelRatio(){this.dprQuery?.removeEventListener("change",this.onPixelRatioChange),this.dprQuery=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,this.dprQuery?.addEventListener?.("change",this.onPixelRatioChange)}renderNow(){document.hidden||this.lost||(this.renderer.render(this.scene,this.camera),this.dirty=!1)}fitCamera(){const t=jo[this.view],e=this.width,n=this.height,s=this.insets,r=Math.max(60,e-s.left-s.right),a=Math.max(60,n-s.top-s.bottom),o=!t.fov&&r/a<.85?.8:t.elevation,l=new P(Math.sin(t.azimuth)*Math.cos(o),Math.sin(o),Math.cos(t.azimuth)*Math.cos(o)),c=[],u=!t.fov&&r/a>1.1,f=u?an+.2:fr+.3,h=u?[-.75,.9]:[-.3,.9];for(const S of[-f,f])for(const T of[-f,f])for(const g of h)c.push(new P(S,g,T));const d=s.left+r/2,_=s.top+a/2,E=1.04;let m=30;if(t.fov){const S=this.perspective;S.fov=t.fov,S.aspect=e/n,S.clearViewOffset(),S.updateProjectionMatrix();let T=24,g={minX:0,maxX:0,minY:0,maxY:0};for(let w=0;w<10;w++){S.position.copy(l).multiplyScalar(T),S.lookAt(0,0,0),S.updateMatrixWorld(),g={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const D of c){const U=D.clone().project(S);g.minX=Math.min(g.minX,U.x),g.maxX=Math.max(g.maxX,U.x),g.minY=Math.min(g.minY,U.y),g.maxY=Math.max(g.maxY,U.y)}if(w===9)break;const R=Math.max((g.maxX-g.minX)/(2*r/e),(g.maxY-g.minY)/(2*a/n));T*=R*E}const y=(g.minX+g.maxX)/2,b=(g.minY+g.maxY)/2,C=d/e*2-1,v=1-_/n*2;S.setViewOffset(e,n,(y-C)*e/2,(v-b)*n/2,e,n),S.updateProjectionMatrix(),this.camera=S,m=T}else{const S=this.ortho;S.position.copy(l).multiplyScalar(30),S.lookAt(0,0,0),S.updateMatrixWorld();const T=S.matrixWorldInverse;let g=1/0,y=-1/0,b=1/0,C=-1/0;for(const D of c){const U=D.clone().applyMatrix4(T);g=Math.min(g,U.x),y=Math.max(y,U.x),b=Math.min(b,U.y),C=Math.max(C,U.y)}const v=Math.max((y-g)/r,(C-b)/a)*E,w=(g+y)/2,R=(b+C)/2;S.left=w-d*v,S.right=S.left+e*v,S.top=R+_*v,S.bottom=S.top-n*v,S.updateProjectionMatrix(),this.camera=S}const p=this.scene.fog;p.near=m+6,p.far=m+30,this.baseCamPos.copy(this.camera.position),this.arrows.has(this.view)||this.arrows.set(this.view,Ph(t.azimuth,t.elevation)),this.dirty=!0}tilePixelSize(){const t=this.worldToScreen(new P(-.5,0,0)),e=this.worldToScreen(new P(.5,0,0));return Math.hypot(t.x-e.x,t.y-e.y)}worldToScreen(t){const e=t.clone().project(this.camera),n=this.canvas.getBoundingClientRect();return{x:n.left+(e.x+1)/2*n.width,y:n.top+(1-e.y)/2*n.height}}cellToScreen(t,e=.5){return this.worldToScreen(Ye(t).setY(e))}screenAxes(){const t=this.worldToScreen(new P(0,0,0)),e=this.worldToScreen(new P(1,0,0)),n=this.worldToScreen(new P(0,0,1));return{col:{x:e.x-t.x,y:e.y-t.y},row:{x:n.x-t.x,y:n.y-t.y}}}arrowStep(t){let e=this.arrows.get(this.view);if(!e){const n=jo[this.view];e=Ph(n.azimuth,n.elevation),this.arrows.set(this.view,e)}return{...e[t]}}pick(t,e){const n=this.canvas.getBoundingClientRect(),s=new ct((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=null;const a=new P;if(this.raycaster.ray.intersectPlane(this.groundPlane,a)){const l=Math.floor((a.x+fr)/Rr),c=Math.floor((a.z+fr)/Rr);l>=0&&c>=0&&l<De&&c<De&&(r=c*De+l)}if(r!==null&&!this.pieces.has(r))return r;const o=this.raycaster.intersectObjects(this.pieceLayer.children,!0);for(const l of o){let c=l.object;for(;c&&c.userData.index===void 0;)c=c.parent;if(c)return c.userData.index}return r}addPiece(t,e){this.removePiece(t);const n=$o(e);n.root.position.copy(Ye(t)),n.root.rotation.y=this.pieceYaw,n.root.userData.index=t,n.tick?.(this.clock),this.pieceLayer.add(n.root);const s={piece:e,model:n};return this.pieces.set(t,s),this.dirty=!0,s}removePiece(t){const e=this.pieces.get(t);e&&(this.pieceLayer.remove(e.model.root),this.pieces.delete(t),this.leaning.get(t)===e&&this.leaning.delete(t),this.dirty=!0)}sync(t){this.performing&&this.cancelAnimations();for(let e=0;e<dn;e++){const n=t[e],s=this.pieces.get(e);n===Ae?s&&this.removePiece(e):!s||s.piece!==n?this.addPiece(e,n):(s.model.root.position.copy(Ye(e)),s.model.root.rotation.set(0,this.pieceYaw,0),s.model.root.scale.setScalar(1))}this.leaning.clear(),this.dirty=!0}setHover(t,e,n,s=!1){if(this.highlight.hover=s?null:t,this.highlight.blocked=s?t:null,this.highlight.merge=n,this.applyHighlights(),this.updateLean(),t===null||e===null||s){this.clearGhost();return}if(!this.ghost||this.ghost.piece!==e){this.clearGhost();const r=$o(e,this.ghostMaterial);r.root.rotation.y=this.pieceYaw,this.fxLayer.add(r.root),this.ghost={piece:e,model:r,index:t}}this.ghost.index=t,this.ghost.model.root.position.copy(Ye(t)),this.dirty=!0}setCursor(t){this.highlight.cursor=t,this.applyHighlights()}setSuggestions(t){const e=[...new Set(t)].filter(s=>Number.isInteger(s)&&s>=0&&s<dn),n=new ae;e.forEach((s,r)=>{const a=Ye(s);this.suggest.setMatrixAt(r,n.makeTranslation(a.x,.014,a.z))}),this.suggest.count=e.length,this.suggest.visible=e.length>0,this.suggest.instanceMatrix.needsUpdate=!0,this.dirty=!0}clearGhost(){this.ghost&&(this.fxLayer.remove(this.ghost.model.root),this.ghost=null,this.dirty=!0)}applyHighlights(){const t=new Set(this.highlight.merge),e=new Ft;for(let s=0;s<dn;s++)e.copy(this.tileBase[s]),t.has(s)&&e.multiply(kM),s===this.highlight.cursor&&e.multiply(GM),s===this.highlight.hover&&e.multiply(BM),s===this.highlight.blocked&&e.multiply(zM),this.tiles.setColorAt(s,e);this.tiles.instanceColor.needsUpdate=!0;const n=[];this.highlight.hover!==null&&n.push([this.highlight.hover,16774084,1]),this.highlight.blocked!==null&&n.push([this.highlight.blocked,16752506,.8]),this.highlight.cursor!==null&&this.highlight.cursor!==this.highlight.hover&&n.push([this.highlight.cursor,14217471,.8]);for(const s of this.highlight.merge)n.push([s,16763213,.75]);this.frames.forEach((s,r)=>{const a=n[r];if(s.visible=!!a,!a)return;const o=Ye(a[0]);s.position.set(o.x,.012,o.z);const l=s.material;l.color.set(a[1]),l.userData.base=a[2],l.opacity=a[2]}),this.dirty=!0}resetLean(){for(const[t,e]of this.leaning)e.model.root.position.copy(Ye(t)),e.model.root.rotation.set(0,this.pieceYaw,0),this.dirty=!0;this.leaning.clear()}updateLean(){const t=this.highlight.hover,e=this.highlight.merge;if(this.reducedMotion||this.performing||t===null||!e.length){this.resetLean();return}for(const[o,l]of this.leaning)e.includes(o)&&this.pieces.get(o)===l||(l.model.root.position.copy(Ye(o)),l.model.root.rotation.set(0,this.pieceYaw,0),this.leaning.delete(o));const n=Ye(t),s=Math.sin(this.clock*6.5),r=new ri().setFromAxisAngle(new P(0,1,0),this.pieceYaw),a=new P;for(const o of e){const l=this.pieces.get(o);if(!l||l.piece===Re)continue;const c=Ye(o),u=n.clone().sub(c).setY(0);if(u.lengthSq()<1e-6)continue;u.normalize();const f=l.model.root;f.position.copy(c).addScaledVector(u,.06+.02*s),a.set(u.z,0,-u.x),f.quaternion.setFromAxisAngle(a,.07+.02*s).multiply(r),this.leaning.set(o,l)}this.dirty=!0}ring(t,e,n,s=520){const r=this.ringPool.find(o=>!o.visible);if(!r)return;const a=r.material;a.color.set(e),r.position.set(t.x,.03,t.z),r.visible=!0,this.tweens.run(s,o=>{r.scale.setScalar(.4+o*n),a.opacity=.9*(1-o)}).then(()=>r.visible=!1)}glow(t,e,n=700){const s=this.glowPool.find(o=>!o.sprite.visible);if(!s)return;const r=s.sprite.material,a=s.column.material;s.sprite.position.set(t.x,.45,t.z),s.column.position.set(t.x,0,t.z),s.sprite.visible=s.column.visible=!0,this.tweens.run(n,o=>{const l=Math.sin(Math.min(1,o*1.6)*Math.PI*.5)*(1-o);r.opacity=Math.min(1,l*1.6*e),s.sprite.scale.setScalar(1.4+e*.8+o*.6),a.opacity=l*.85*e,s.column.scale.set(1,.4+o*.8,1)},gn.linear).then(()=>s.sprite.visible=s.column.visible=!1)}burst(t,e,n,s=1,r=650){this.reducedMotion&&(n=Math.ceil(n/3));for(let a=0;a<n;a++){const o=this.particlePool.find(E=>!E.visible);if(!o)return;const l=o.material;l.color.set(e[a%e.length]);const c=a/n*Math.PI*2+Math.random()*.5,u=(.9+Math.random()*.8)*s,f=Math.cos(c)*u,h=Math.sin(c)*u,d=(1.6+Math.random()*1.4)*s;o.visible=!0,o.position.copy(t);const _=Math.random()*8;this.tweens.run(r,E=>{const m=E*(r/1e3);o.position.set(t.x+f*m,t.y+d*m-4.5*m*m,t.z+h*m),o.rotation.set(_*E,_*E*.7,0),o.scale.setScalar(1-E*.7),l.opacity=1-E*E},gn.linear).then(()=>o.visible=!1)}}dust(t,e,n,s=420){this.reducedMotion&&(n=Math.ceil(n/2));for(let r=0;r<n;r++){const a=this.particlePool.find(d=>!d.visible);if(!a)return;const o=a.material;o.color.set(e[r%e.length]);const l=r/n*Math.PI*2+Math.random()*.6,c=Math.cos(l),u=Math.sin(l),f=.22+Math.random()*.14,h=.06+Math.random()*.06;a.visible=!0,this.tweens.run(s,d=>{const _=.3+f*d;a.position.set(t.x+c*_,.03+h*Math.sin(d*Math.PI*.8),t.z+u*_),a.rotation.set(l+d*2,d*3,0),a.scale.setScalar(.75+d*.35),o.opacity=.9*(1-d)},gn.outCubic).then(()=>a.visible=!1)}}bump(t){this.reducedMotion||(this.shake=Math.max(this.shake,t))}async animateMove(t,e,n={}){const s=this.animGen;this.performing=!0;try{this.clearGhost(),this.setHover(null,null,[]);for(const r of t){const a=r.kind==="place"?r.index:r.target,o=()=>n.onEvent?.(r,this.cellToScreen(a,.9));switch(r.kind){case"place":await this.animatePlace(r.index,r.piece,s,o);break;case"merge":await this.animateMerge(r.cells,r.target,r.toTier,r.step,s,o);break;case"festival":await this.animateFestival(r.cells,r.target,s,o);break;case"crumble":if(o(),s!==this.animGen)return!1;await this.animateCrumble(r.cells,s);break}if(s!==this.animGen)return!1}return this.performing=!1,this.sync(e),!0}finally{s===this.animGen&&(this.performing=!1)}}async animatePlace(t,e,n,s){const{model:r}=this.addPiece(t,e),a=r.root,o=Ye(t),l=e===Re||e>=2;if(await this.tweens.run(190,h=>{a.position.set(o.x,1-h,o.z);const d=.72+.28*Math.sqrt(h);a.scale.set(d*(1-.05*h),d*(1+.1*h),d*(1-.05*h))},gn.inQuad),n!==this.animGen||(s(),n!==this.animGen))return;this.ring(o,16774102,l?1:.8,360),this.dust(o,e===Re?WM:VM,l?8:5);const c=l?.2:.15,u=l?.06:.035,f=new ae;await this.tweens.run(l?140:120,h=>{const d=h>=1?0:Math.sin(h*Math.PI);a.scale.set(1+d*c*.6,1-d*c,1+d*c*.6),a.position.y=-u*d,this.tiles.setMatrixAt(t,f.makeTranslation(o.x,-u*d,o.z)),this.tiles.instanceMatrix.needsUpdate=!0},gn.linear),n===this.animGen&&(a.scale.setScalar(1),a.position.copy(o))}async animateMerge(t,e,n,s,r,a){const o=Ye(e),l=t.map(_=>this.pieces.get(_)).filter(_=>!!_),c=l.map(_=>_.model.root.position.clone()),u=Math.pow(.9,Math.min(s,5)-1);if(await this.tweens.run(230*u,_=>{l.forEach((E,m)=>{E.model.root.position.lerpVectors(c[m],o,_),E.model.root.position.y=Math.sin(_*Math.PI)*.35,E.model.root.scale.setScalar(1-.55*_)})},gn.inCubic),r!==this.animGen)return;for(const _ of t)this.removePiece(_);const{model:f}=this.addPiece(e,n);if(f.root.scale.setScalar(.001),a(),r!==this.animGen)return;const h=s>=2;this.glow(o,.75+n*.08+(h?.35:0)),this.ring(o,h?16765802:16774102,1.4+n*.25+(h?.8:0));const d=n<=1?[W.leafLight,W.leaf,16773560]:[16765802,W.wall,W.leafLight,W.roofLight];this.burst(o.clone().setY(.4),h?[16765802,...d]:d,8+n*3+(h?8:0),.8+n*.1),this.bump(h?.12+s*.03:.04),n>=2&&this.ambient.startle(o),await this.tweens.run(320*u,_=>f.root.scale.setScalar(Math.max(.001,_)),gn.outBack),r===this.animGen&&f.root.scale.setScalar(1)}async animateFestival(t,e,n,s){const r=Ye(e),a=t.map(o=>this.pieces.get(o)).filter(o=>!!o);if(await this.tweens.run(420,o=>{for(const l of a)l.model.root.position.y=Math.sin(o*Math.PI*.5)*.5,l.model.root.rotation.y=this.pieceYaw+o*Math.PI},gn.inOutSine),n===this.animGen&&(s(),n===this.animGen)){this.glow(r,1.4,900),this.ring(r,16765802,3.4,700),this.ring(r,16777215,2.2,500);for(const o of a)this.burst(o.model.root.position.clone(),[16765802,W.flag,W.leafLight,W.white,W.castleRoof],9,1.2,800);if(this.bump(.3),this.ambient.startle(r),await this.tweens.run(260,o=>{for(const l of a)l.model.root.scale.setScalar(Math.max(.001,1-o))}),n===this.animGen)for(const o of t)this.removePiece(o)}}async animateCrumble(t,e){const n=t.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of t)this.burst(Ye(s).setY(.2),[W.rock,W.rockDark,W.moss],6,.7,500);if(await this.tweens.run(340,s=>{for(const r of n)r.model.root.position.y=-s*.3,r.model.root.rotation.z=Math.sin(s*30)*.06*(1-s),r.model.root.scale.setScalar(Math.max(.001,1-s))},gn.inCubic),e===this.animGen)for(const s of t)this.removePiece(s)}async nudge(t){const e=this.pieces.get(t);if(!e)return;const n=this.animGen,s=Ye(t);await this.tweens.run(240,r=>e.model.root.position.x=s.x+Math.sin(r*Math.PI*4)*.06*(1-r),gn.linear),!(n!==this.animGen||this.pieces.get(t)!==e)&&e.model.root.position.copy(s)}async gameOverWave(){const t=this.animGen;this.performing=!0,this.resetLean();const e=[...this.pieces.entries()];if(await this.tweens.run(700,n=>{for(const[s,r]of e){const{x:a,y:o}=_r(s),l=n*3-(a+o)*.12;r.model.root.position.y=Math.max(0,Math.sin(Math.min(Math.max(l,0),1)*Math.PI))*.25}},gn.linear),t!==this.animGen)return!1;for(const[n,s]of e)this.pieces.get(n)===s&&(s.model.root.position.y=0);return this.performing=!1,!0}cancelAnimations(){this.animGen++,this.performing=!1,this.tweens.finishAll(),this.stopShake()}stopShake(){this.shake=0,this.camera.position.copy(this.baseCamPos),this.dirty=!0}finishAnimations(){this.cancelAnimations()}get animating(){return this.tweens.active}thumbnail(t,e=160){if(this.isContextLost())return"";const n=new Iu;n.add(new Ju(15857663,9416300,1.6));const s=new da(16773334,2.4);s.position.set(-5,8,3),n.add(s);const r=new da(13625087,.5);r.position.set(6,4,6),n.add(r);const a=new Gn;Qo??(Qo=UM());const o=new Ee(Qo,this.tileMaterial);a.add(o);const l=$o(t);l.tick?.(.8),a.add(l.root),n.add(a),a.updateMatrixWorld(!0);const c=jo.iso,u=new Cr(-1,1,1,-1,.1,50);u.position.set(Math.sin(c.azimuth)*10,7,Math.cos(c.azimuth)*10),u.lookAt(0,0,0),u.updateMatrixWorld();const f=new Ni().setFromObject(a);let h=1/0,d=-1/0,_=1/0,E=-1/0;for(const w of[f.min.x,f.max.x])for(const R of[f.min.y,f.max.y])for(const D of[f.min.z,f.max.z]){const U=new P(w,R,D).applyMatrix4(u.matrixWorldInverse);h=Math.min(h,U.x),d=Math.max(d,U.x),_=Math.min(_,U.y),E=Math.max(E,U.y)}const m=Math.max(d-h,E-_)/2*1.06,p=(h+d)/2,S=(_+E)/2;u.left=p-m,u.right=p+m,u.top=S+m,u.bottom=S-m,u.updateProjectionMatrix();const T=new Tn(e,e,{samples:4});T.texture.colorSpace=$e;const g=this.scene.fog;this.renderer.setRenderTarget(T),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(n,u);const y=new Uint8Array(e*e*4);if(this.renderer.readRenderTargetPixels(T,0,0,e,e,y),this.renderer.setRenderTarget(null),this.renderer.setClearColor(Ta,1),this.scene.fog=g,T.dispose(),this.dirty=!0,this.isContextLost())return"";const b=document.createElement("canvas");b.width=b.height=e;const C=b.getContext("2d"),v=C.createImageData(e,e);for(let w=0;w<e;w++)v.data.set(y.subarray((e-1-w)*e*4,(e-w)*e*4),w*e*4);return C.putImageData(v,0,0),b.toDataURL("image/png")}loop(t){this.rafId=requestAnimationFrame(this.loop);const e=this.lastFrame?t-this.lastFrame:16;if(this.lastFrame=t,document.hidden)return;const n=Math.min(64,e),s=this.tweens.active||this.shake>.001;if(this.tweens.tick(Math.min(1e3,e)),this.clock+=n/1e3,this.lost)return;const r=!this.reducedMotion&&t-this.lastIdleRender>33;if(!(!s&&!this.dirty&&!r)){if(r||s){if(this.lastIdleRender=t,!this.reducedMotion){this.world.tick(this.clock),this.ambient.tick(this.clock);for(const o of this.pieces.values())o.model.tick?.(this.clock);(this.leaning.size||this.highlight.merge.length)&&this.updateLean()}const a=this.reducedMotion?1:.75+Math.sin(this.clock*5)*.25;for(const o of this.frames){if(!o.visible)continue;const l=o.material;l.opacity=(l.userData.base??1)*a}if(this.suggest.visible){const o=this.reducedMotion?1:.7+Math.sin(this.clock*3)*.3;this.suggest.material.opacity=tl*o}}if(this.ghost){const a=Ye(this.ghost.index);this.ghost.model.root.position.set(a.x,this.reducedMotion?.05:.08+Math.sin(this.clock*4)*.05,a.z)}if(this.shake>.001){const a=this.shake;this.camera.position.set(this.baseCamPos.x+(Math.random()-.5)*a,this.baseCamPos.y+(Math.random()-.5)*a,this.baseCamPos.z+(Math.random()-.5)*a),this.shake*=Math.pow(1e-4,n/1e3)**.6,this.shake<=.001&&this.camera.position.copy(this.baseCamPos)}this.renderer.render(this.scene,this.camera),this.dirty=!1}}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.dprQuery?.removeEventListener?.("change",this.onPixelRatioChange),this.canvas.removeEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored,!1),this.renderer.dispose()}}const el=[0,2,4,7,9,12,14,16,19,21,24],qM=392;function ys(i){return qM*Math.pow(2,i/12)}function va(i){i?.catch(()=>{})}class KM{constructor(t,e=!1){this.ctx=null,this.master=null,this.noise=null,this.musicBus=null,this.musicTimer=0,this.nextBeat=0,this.beat=0,this.enabled=t,this.musicOn=e}unlock(){if(!this.enabled&&!this.musicOn)return;const t=this.ensure();t&&t.state!=="running"&&t.state!=="closed"&&va(t.resume()),this.musicOn&&this.startMusic()}get music(){return this.musicOn}setMusic(t){this.musicOn=t,t?this.unlock():this.stopMusic()}setPaused(t){this.ctx&&(t?va(this.ctx.suspend()):(this.enabled||this.musicOn)&&va(this.ctx.resume()))}startMusic(){const t=this.ensure();if(!(!t||this.musicTimer)){if(!this.musicBus){this.musicBus=t.createGain();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=2400;const n=t.createDelay(1);n.delayTime.value=.42;const s=t.createGain();s.gain.value=.28,this.musicBus.connect(e),e.connect(this.master),e.connect(n),n.connect(s).connect(n),n.connect(this.master)}this.musicBus.gain.cancelScheduledValues(t.currentTime),this.musicBus.gain.setValueAtTime(1e-4,t.currentTime),this.musicBus.gain.exponentialRampToValueAtTime(.32,t.currentTime+2.5),this.nextBeat=t.currentTime+.1,this.musicTimer=window.setInterval(()=>this.schedule(),120),this.schedule()}}stopMusic(){if(window.clearInterval(this.musicTimer),this.musicTimer=0,this.ctx&&this.musicBus){const t=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(t),this.musicBus.gain.setValueAtTime(Math.max(1e-4,this.musicBus.gain.value),t),this.musicBus.gain.exponentialRampToValueAtTime(1e-4,t+.6)}}schedule(){const t=this.ctx;if(!t||!this.musicBus)return;const e=60/76/2,n=[[0,4,7,11],[-3,0,4,7],[-7,-3,0,4],[-5,-1,2,4]],s=[0,2,4,7,9,12,14,16];for(;this.nextBeat<t.currentTime+.6;){const r=this.nextBeat,a=Math.floor(this.beat/8),o=n[Math.floor(a/2)%n.length],l=this.beat%16;if(l===0){for(const f of o)this.voice(261.63*Math.pow(2,f/12),r,e*16,.05,"triangle",1.4);this.voice(65.41*Math.pow(2,o[0]/12),r,e*8,.12,"sine",.05)}l===8&&this.voice(65.41*Math.pow(2,o[0]/12),r,e*8,.1,"sine",.05);const c=Math.sin(this.beat*12.9898)*43758.5453,u=c-Math.floor(c);if(l%2===0&&u<.42){const f=s[Math.floor(u*100)%s.length];this.voice(523.25*Math.pow(2,f/12),r,.9,.05,"sine",.005)}this.nextBeat+=e,this.beat++}}voice(t,e,n,s,r,a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.value=t,c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+Math.max(.005,a)),c.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(c).connect(this.musicBus),l.start(e),l.stop(e+n+.05)}ensure(){if(this.ctx)return this.ctx;try{const t=window.AudioContext??window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55;const e=this.ctx.createDynamicsCompressor();this.master.connect(e).connect(this.ctx.destination);const n=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}catch{this.ctx=null}return this.ctx}ready(){if(!this.enabled)return null;const t=this.ensure();if(!t||t.state==="closed")return null;if(t.state==="suspended")va(t.resume());else if(t.state!=="running")return null;return t}tone(t,e,n,s,r="sine",a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(t,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+n),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+.008),c.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(c).connect(this.master),l.start(e),l.stop(e+n+.02)}bell(t,e,n,s){this.tone(t,e,n,s,"sine"),this.tone(t*2.01,e,n*.6,s*.28,"sine"),this.tone(t*3.02,e,n*.3,s*.1,"triangle")}noiseHit(t,e,n,s,r=1){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=r;const c=a.createGain();c.gain.setValueAtTime(n,t),c.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(l).connect(c).connect(this.master),o.start(t),o.stop(t+e+.02)}place(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(260,e,.12,.35,"sine",150),this.noiseHit(e,.05,.12,1800,2)}merge(t,e){const n=this.ready();if(!n)return;const s=n.currentTime,r=el[Math.min(el.length-3,t+e-1)];this.bell(ys(r),s,.5,.22),this.bell(ys(r+7),s+.07,.6,.18),e>=2&&this.bell(ys(r+12),s+.14,.7,.16)}chain(t){const e=this.ready();if(!e)return;const n=e.currentTime+.05;for(let s=0;s<Math.min(t+1,5);s++)this.tone(ys(el[s+t]),n+s*.055,.22,.1,"triangle")}festival(){const t=this.ready();if(!t)return;const e=t.currentTime;[0,4,7,12,16,19,24].forEach((n,s)=>this.bell(ys(n),e+s*.07,.9,.16)),this.noiseHit(e,.6,.05,6e3,.7)}crumble(){const t=this.ready();if(!t)return;const e=t.currentTime;this.noiseHit(e,.32,.35,420,.8),this.tone(120,e,.2,.2,"sine",60)}invalid(){const t=this.ready();t&&this.tone(160,t.currentTime,.12,.18,"triangle",120)}swap(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(520,e,.08,.12,"sine",700),this.tone(700,e+.06,.08,.1,"sine",520)}gameOver(){const t=this.ready();if(!t)return;const e=t.currentTime;[12,7,4,0].forEach((n,s)=>this.bell(ys(n),e+s*.18,.9,.17))}warning(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(330,e,.15,.08,"triangle"),this.tone(311,e+.16,.2,.08,"triangle")}}function ZM(i,t=1){switch(i){case"tap":return 8;case"land":return 12;case"merge":return Math.min(25,15+(Math.max(1,Math.floor(t))-1)*3);case"festival":return[25,50,25,50,70];case"invalid":return[6,40,6];case"gameOver":return[30,90,50]}}function Lh(){return typeof navigator>"u"?null:navigator}class JM{constructor(t){this.enabled=t}get supported(){const t=Lh();return!!t&&"vibrate"in t&&typeof t.vibrate=="function"}tap(){this.pulse("tap")}land(){this.pulse("land")}merge(t){this.pulse("merge",t)}festival(){this.pulse("festival")}invalid(){this.pulse("invalid")}gameOver(){this.pulse("gameOver")}pulse(t,e){if(!this.enabled||!this.supported)return;const n=Lh();if(!(n.userActivation&&!n.userActivation.hasBeenActive))try{n.vibrate(ZM(t,e))}catch{}}}const Gt=i=>document.getElementById(i),st={stage:Gt("stage"),hud:Gt("hud"),dock:document.querySelector(".dock"),score:Gt("score"),best:Gt("best"),combo:Gt("combo"),comboChip:Gt("comboChip"),turn:Gt("turn"),dailyChip:Gt("dailyChip"),dailyLeft:Gt("dailyLeft"),status:Gt("status"),announcer:Gt("announcer"),sheetAnnouncer:Gt("sheetAnnouncer"),coach:Gt("coach"),coachText:Gt("coachText"),coachSkip:Gt("coachSkip"),spacePill:Gt("spacePill"),spaceFill:Gt("spaceFill"),spaceText:Gt("spaceText"),popups:Gt("popups"),banner:Gt("banner"),nextCard:Gt("nextCard"),nextBadge:Gt("nextBadge"),nextImg:Gt("nextImg"),nextName:Gt("nextName"),nextHint:Gt("nextHint"),keepBtn:Gt("keepBtn"),keepImg:Gt("keepImg"),keepName:Gt("keepName"),homeBtn:Gt("homeBtn"),menuBtn:Gt("menuBtn"),home:Gt("home"),homeBest:Gt("homeBest"),playBtn:Gt("playBtn"),homeNewBtn:Gt("homeNewBtn"),dailyBtn:Gt("dailyBtn"),dailyTitle:Gt("dailyTitle"),dailySub:Gt("dailySub"),dailyMeta:Gt("dailyMeta"),homeHelpBtn:Gt("homeHelpBtn"),homeJournalBtn:Gt("homeJournalBtn"),homeSettingsBtn:Gt("homeSettingsBtn"),modal:Gt("modal"),modalArt:Gt("modalArt"),modalTitle:Gt("modalTitle"),modalBody:Gt("modalBody"),modalActions:Gt("modalActions"),closeModal:Gt("closeModal"),webglError:Gt("webglError")},ke=un,Jt=new Jf,Me=new KM(Jt.getSound(),Jt.getMusic()),Hn=new JM(Jt.getHaptics()),Nc=window.matchMedia("(prefers-reduced-motion: reduce)"),xa="https://pixel-pusher-hub.github.io/little-nooks/",QM=Mf(["1..2...R",".5....1.","2..1.4..","..R...2.",".1..3...","2....1.R","..2.1...","R...2..1"]),He=i=>i.mode??"classic",Ui=()=>yf(new Date);function Uc(){const i=Jt.loadGame(qi);return i&&!i.over&&He(i)==="classic"?i:oc(Hh(),ke)}function Xd(i){const t=Jt.loadDaily(qi);return t&&!t.over&&He(t)==="daily"&&t.dailyKey===i?t:Xh(i,ke)}let J=Uc(),ln=Jt.getJournal(),Mn=Jt.getBest(),za=J.turn===1?Mn:Jt.getRoundStartBest()??Mn;Jt.setRoundStartBest(za);let Yd=0,Wi=0,Yn=!1,ve=!0,Fs=J.score,Be=null,nl=null,Yi=null,pr=null,mr=!1,Aa=!1,Qa=0,Ql=!1,$d=!1,Kt=null;const Ca=new Map;let Rs=null;const fe=i=>Math.round(i).toLocaleString("en-US"),Vn=()=>!st.modal.classList.contains("hidden"),Mi=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),An=(i,t,e=`${t}s`)=>`${i} ${i===1?t:e}`;let $i=!1;function je(i,t=""){st.status.textContent=i,st.status.className=`status${t?` ${t}`:""}`,$i=!1}function Dh(i){je(i,"good"),$i=!0}function Os(i=J){return i.pieceLimit?Math.max(0,i.pieceLimit-(i.turn-1)):1/0}function Cn(){const i=bi(J.board).length,t=Os();J.over?je(J.endReason==="limit"?`All ${J.pieceLimit} pieces placed. Day complete!`:"No empty tiles left. Start a new nook!","danger"):i<=6?je(`Only ${An(i,"free tile")} left. Make every merge count!`,"danger"):t<=10?je(`Only ${An(t,"piece")} left today. Make them count!`,"warn"):i/dn<=1-ke.crowdedRatio?je("Space is getting tight. Plan merges that free tiles.","warn"):J.next===Re?je("A rock! Tuck it away. A Windmill merge beside it shatters it."):je(He(J)==="daily"?`Daily Nook: ${An(t,"piece")} to place today.`:"Tap an empty tile to place your piece.")}let Ih=0;function Pn(i){const t=Vn()?st.sheetAnnouncer:st.announcer;st.announcer.textContent="",st.sheetAnnouncer.textContent="",clearTimeout(Ih),Ih=window.setTimeout(()=>t.textContent=i,60)}function Nh(i){i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}function il(i,t,e=""){const n=document.createElement("div");n.className=`popup${e?` ${e}`:""}`,n.textContent=i,n.style.left=`${t.x}px`,n.style.top=`${t.y}px`,st.popups.appendChild(n),setTimeout(()=>n.remove(),1100)}let Uh=0;function sl(i){st.banner.textContent=i,st.banner.classList.remove("show"),st.banner.offsetWidth,st.banner.classList.add("show"),clearTimeout(Uh),Uh=window.setTimeout(()=>st.banner.classList.remove("show"),1250)}function Pr(i,t=160){const e=`${i}@${t}`;if(!Ca.has(e)&&Kt){const n=Kt.thumbnail(i,t);if(!n)return"";Ca.set(e,n)}return Ca.get(e)??""}function hn(i,t="",e=50){return`<img src="${Pr(i)}" alt="${Mi(t)}" width="${e}" height="${e}" draggable="false" />`}function jM(){return He(J)==="daily"?Math.max(ln.daily.scores[J.dailyKey??""]??0,J.score):Math.max(Mn,J.score)}function Lr(){st.score.textContent=fe(Fs),st.best.textContent=fe(jM()),st.combo.textContent=`×${Math.max(1,J.lastChain)}`,st.comboChip.classList.toggle("hot",J.lastChain>=2),st.turn.textContent=String(J.turn);const i=He(J)==="daily";st.dailyChip.classList.toggle("hidden",!i),i&&(st.dailyLeft.textContent=String(Os()));const t=bi(J.board).length,e=(dn-t)/dn;st.spaceFill.style.strokeDashoffset=String(113.1*e),st.spaceText.textContent=String(t),st.spacePill.classList.toggle("warn",e>=ke.crowdedRatio&&t>6),st.spacePill.classList.toggle("danger",t<=6),Fc()}function tS(){const i=J.next;if(i===Re)return{text:"Never merges",good:!1,spots:0};const t=J.over?[]:lc(J.board,i,ke);if(!t.length)return{text:i===si?"3 Castles = Festival":"No match yet",good:!1,spots:0};let e=1;for(const n of t)e=Math.max(e,Xa(J,n,ke).state.lastChain);return{text:e>=2?`Chain ×${e} possible!`:`Merges in ${An(t.length,"spot")}`,good:!0,spots:t.length}}let Fh=-1;function Fc(){st.nextImg.src=Pr(J.next),st.nextImg.alt="",st.nextName.textContent=Qe(J.next);const i=tS();st.nextHint.textContent=i.text,st.nextHint.classList.toggle("good",i.good),st.nextBadge.textContent=String(i.spots),st.nextBadge.classList.toggle("hidden",i.spots===0),st.nextCard.setAttribute("aria-label",`Next piece: ${Qe(J.next)}, ${_f(J.next)}. ${i.text}. Show what's coming.`),J.stash===Ae?(st.keepImg.removeAttribute("src"),st.keepImg.hidden=!0,st.keepBtn.classList.add("empty"),st.keepName.textContent="Save for later",st.keepBtn.setAttribute("aria-label",`Keep slot is empty. Store the ${Qe(J.next)} for later`)):(st.keepImg.src=Pr(J.stash),st.keepImg.hidden=!1,st.keepImg.alt="",st.keepBtn.classList.remove("empty"),st.keepName.textContent=`${Qe(J.stash)} · swap`,st.keepBtn.setAttribute("aria-label",`Keep slot holds a ${Qe(J.stash)}. Swap it with the ${Qe(J.next)}`),!J.over&&Fh!==J.turn&&i.spots===0&&J.stash!==Re&&lc(J.board,J.stash,ke).length&&(Fh=J.turn,st.keepBtn.classList.remove("nudge"),st.keepBtn.offsetWidth,st.keepBtn.classList.add("nudge")))}function Oh(){if(!Kt)return;const i=window.innerWidth,t=window.innerHeight,e={top:0,right:0,bottom:0,left:0};document.querySelectorAll("[data-inset]").forEach(s=>{const r=getComputedStyle(s);if(r.display==="none")return;const a=r.getPropertyValue("--inset").trim(),o=s.getBoundingClientRect();!o.width||!o.height||(a==="top"?e.top=Math.max(e.top,o.bottom):a==="bottom"?e.bottom=Math.max(e.bottom,t-o.top):a==="right"?e.right=Math.max(e.right,i-o.left):a==="left"&&(e.left=Math.max(e.left,o.right)))}),document.body.style.setProperty("--dock-h",`${Math.round(st.dock.getBoundingClientRect().height)}px`);const n=Math.min(i,t)<500?6:16;Kt.setInsets({top:e.top+n,right:e.right+n,bottom:e.bottom+n,left:e.left+n})}function Oc(){return!Yn&&!J.over&&!Vn()&&!ve}function qd(i){const t=Xa(J,i,ke),e=new Set;let n=0,s=null;for(const o of t.events)o.kind!=="place"&&(o.cells.forEach(l=>e.add(l)),n+=o.points,s=o);if(e.delete(i),!s)return null;const r=t.state.lastChain,a=s.kind==="merge"?`→ ${Wn[s.toTier].name}`:s.kind==="festival"?"→ Castle Festival!":"shatters rocks";return{cells:[...e],text:`${r>1?`Chain ×${r} `:""}${a}  +${fe(n)}`}}function Di(i){if(Yi=i,!Kt)return;if(i===null||!Oc()){Kt.setHover(null,null,[]),$i&&!Yn&&!ve&&Cn();return}if(J.board[i]!==Ae){Kt.setHover(i,null,[],!0),$i&&Cn();return}const t=qd(i);Kt.setHover(i,J.next,t?.cells??[]),t?Dh(t.text+(mr?" · lift to place":"")):mr?Dh("No merge here · lift to place, or slide off to cancel"):$i&&Cn()}function ja(){if(He(J)==="daily"){J.over?Jt.clearDaily():Jt.saveDaily(J);return}J.over?Jt.clearGame():Jt.saveGame(J),Jt.submitScore(J.score),Mn=Math.max(Mn,Jt.getBest())}function Dr(i){Kt?.cancelAnimations(),Wi++,Yn=!1,Rs=null,J=i,Fs=J.score,Aa=!1,Mn=Math.max(Mn,Jt.getBest()),He(J)==="daily"?Yd=ln.daily.scores[J.dailyKey??""]??0:J.turn===1?(za=Mn,Jt.setRoundStartBest(Mn)):za=Jt.getRoundStartBest()??Mn,ve||(Kt?.sync(J.board),Lr(),Cn())}function eS(i){const t=He(i)==="daily",e=i.score>0&&i.score>(t?Yd:za),n=$f(ln,i,Ui());return ln=n.journal,Jt.saveJournal(ln),Ps.active&&!t&&no(),{state:i,newBest:e,highlights:n.highlights}}function nS(i,t){const e=i.filter(a=>a.kind==="merge"),n=i.find(a=>a.kind==="festival"),s=i.find(a=>a.kind==="crumble"),r=[];if(n)r.push(`Castle Festival! +${fe(t)}`);else if(e.length){const a=e[e.length-1],o=e.length>1?`Chain ×${e.length}: `:"";r.push(`${o}made a ${a.kind==="merge"?Wn[a.toTier].name:""}, +${fe(t)}`)}else{const a=i[0];r.push(`Placed a ${a.kind==="place"?Qe(a.piece):"piece"}`)}return s&&s.kind==="crumble"&&r.push(`shattered ${An(s.cells.length,"rock")}`),r.join(", ")}async function jl(i){if(!Kt||!Oc())return;if(Me.unlock(),J.board[i]!==Ae){Me.invalid(),Hn.invalid(),je("That tile is taken. Pick an empty one.","warn"),Pn("That tile is taken. Pick an empty one."),Kt.nudge(i);return}const t=Xa(J,i,ke);if(!t.accepted)return;Yn=!0;const e=Wi;J=t.state,ln=Vf(ln,t.events,t.points);const n=J.over?eS(J):null;Jt.saveJournal(ln),ja(),Fc(),st.turn.textContent=String(J.turn),He(J)==="daily"&&(st.dailyLeft.textContent=String(Os())),Kt.setSuggestions([]),Or();try{await Kt.animateMove(t.events,J.board,{onEvent:(l,c)=>{e===Wi&&iS(l,c)}})}finally{e===Wi&&(Fs=J.score,Yn=!1)}if(e!==Wi)return;Lr();const s=bi(J.board).length,r=s/dn<=1-ke.crowdedRatio;r&&!Aa&&!J.over&&(Aa=!0,Me.warning()),r||(Aa=!1);const a=Os(),o=J.over?"":s<=6?` Only ${An(s,"free tile")} left.`:a<=10?` Only ${An(a,"piece")} left today.`:"";if(Pn(`${nS(t.events,t.points)}. ${J.over?"Round over.":`Next: ${Qe(J.next)}.`}${o}`),n){await aS(n,e);return}J.lastChain>=2?je(`Lovely! ×${J.lastChain} chain reaction.`,"good"):t.points>ke.placePoints?je(`+${fe(t.points)} points`,"good"):Cn(),io(t.events),pr?.type==="mouse"&&Yi!==null&&Di(Kt.pick(pr.x,pr.y)),Be!==null&&Kt.setCursor(Be)}function iS(i,t){if(i.kind==="place"){Me.place(),Hn.land();return}Fs+=i.points,st.score.textContent=fe(Fs),Nh(st.score),i.kind==="merge"?(Me.merge(i.toTier,i.step),Hn.merge(i.step),il(`+${fe(i.points)}`,t,i.step>=2?"big":""),i.step>=2&&(Me.chain(i.step),sl(`Chain ×${i.step}!`),st.combo.textContent=`×${i.step}`,st.comboChip.classList.add("hot"),Nh(st.combo)),i.toTier===si&&sl("A Little Castle!")):i.kind==="festival"?(Me.festival(),Hn.festival(),sl("Castle Festival!"),il(`+${fe(i.points)}`,t,"big")):i.kind==="crumble"&&(Me.crumble(),Hn.land(),il(`+${fe(i.points)}`,t,"rock"))}function tc(){Oc()&&(Me.unlock(),J=Lf(J,ke),ja(),Me.swap(),Hn.tap(),Fc(),st.nextCard.classList.remove("pop"),st.nextCard.offsetWidth,st.nextCard.classList.add("pop"),Di(Yi),Yi===null&&Cn(),Pn(`Next: ${Qe(J.next)}. Kept: ${J.stash===Ae?"nothing":Qe(J.stash)}.`),io())}function Bs(){Ps.active&&He(J)==="classic"&&J.turn>1&&no(),Dr(oc(Hh(),ke)),ja(),cn(!1),Bc(),to()}function Ga(i=!1){Me.unlock();const t=Ui(),e=i?Xh(t,ke):Xd(t);Dr(e),ja(),cn(!1),Bc(),to(),e.turn===1&&(je(`Daily Nook #${Ls(t)}: everyone gets this island today. Place ${vr} pieces for your best score.`,"good"),Pn(`Daily Nook number ${Ls(t)}. ${vr} pieces. Next: ${Qe(J.next)}.`))}function Kd(){const i=Jt.loadGame(qi);return{inProgress:!!i&&!i.over&&i.turn>1&&He(i)==="classic",saved:i}}function gr(){const{inProgress:i,saved:t}=Kd();st.playBtn.textContent=i?"Continue":"Play",st.homeNewBtn.classList.toggle("hidden",!i),st.homeBest.textContent=fe(Math.max(Mn,Jt.getBest()));const e=Ui(),n=Ls(e),s=Jt.loadDaily(qi),r=!!s&&!s.over&&s.dailyKey===e&&s.turn>1,a=ln.daily.scores[e];st.dailyTitle.textContent=`Daily Nook #${n}`,st.dailySub.textContent=r?`Continue · ${An(Os(s),"piece")} left`:a!==void 0?`Played today · best ${fe(a)} · play again`:`Today's island · ${vr} pieces`;const o=Kh(ln,e);st.dailyMeta.innerHTML=o>0?`<b>${o}</b>${o===1?"day":"days"}`:"",st.dailyBtn.setAttribute("aria-label",`${st.dailyTitle.textContent}. ${st.dailySub.textContent}.${o?` Streak: ${An(o,"day")}.`:""}`),Kt?.sync(i&&t?t.board:QM)}function ks(){const i=!ve;if(Kt?.cancelAnimations(),Wi++,Yn=!1,Rs=null,ve=!0,Fs=J.score,document.body.classList.add("at-home"),Kt&&(Kt.canvas.tabIndex=-1),cn(!1),Kt?.setHover(null,null,[]),Kt?.setCursor(null),Kt?.setSuggestions([]),Or(),$d){location.reload();return}gr(),i&&st.playBtn.focus({preventScroll:!0})}function Bc(){Qa=performance.now()+350,ve&&(ve=!1,document.body.classList.remove("at-home"),Kt&&(Kt.canvas.tabIndex=0),Kt?.sync(J.board)),Lr(),Cn(),io()}function to(){Kt?.canvas.focus({preventScroll:!0})}function eo(){Me.unlock(),He(J)!=="classic"&&Dr(Uc()),J.over?Bs():(ve&&Kt?.sync(J.board),Bc()),Jt.hasSeenHelp()?to():(_n=Kt?.canvas??null,so())}const Ps={active:!Jt.getCoachDone()&&Jt.getBest()===0&&ln.rounds===0,said:new Set};function Or(){st.coach.classList.add("hidden")}function no(){Ps.active=!1,Jt.setCoachDone(),Or(),Kt?.setSuggestions([])}function rl(i,t=!1){return bi(J.board).filter(e=>{if(!t)return!0;const{x:n,y:s}=_r(e);return n===0||s===0||n===De-1||s===De-1}).map(e=>[e,qf(J,e,ke)]).sort((e,n)=>n[1]-e[1]).slice(0,i).map(([e])=>e)}function io(i){if(!Kt)return;if(!Ps.active||ve||He(J)!=="classic"||J.over||Vn()){Or(),Kt.setSuggestions([]);return}if(J.turn>16){no();return}const t=a=>Ps.said.has(a)?!1:(Ps.said.add(a),!0),e=Qe(J.next),n=lc(J.board,J.next,ke);let s="",r=[];i?.some(a=>a.kind==="merge"&&a.step>=2)&&t("chain")?s="A chain! The new piece merged again, and each extra step multiplies the points.":i?.some(a=>a.kind==="merge")&&t("merge")?s="Three became one, right where you placed it. Merging also frees up space.":J.next===Re&&t("rock")?(s="A rock never merges. Tuck it on the edge. A Windmill merge next to it shatters it.",r=rl(3,!0)):n.length&&J.next!==Re?(s=`Put the ${e} on a glowing tile to merge three of a kind!`,r=n.slice(0,4)):J.turn===1?(s=`Tap a glowing tile to place your ${e}. Three matching pieces side by side merge.`,r=rl(3)):J.turn>=5&&J.stash===Ae&&t("keep")?s="Tip: tap Keep to save the next piece for later. Swapping is free.":(s="Build pairs: two matching pieces side by side are one away from a merge.",r=rl(2)),st.coachText.textContent=s,st.coach.classList.remove("hidden"),Kt.setSuggestions(r)}let _n=null,ec=null;function yi(i){Vn()||(_n=document.activeElement),st.modalTitle.textContent=i.title,i.describe?st.modal.setAttribute("aria-describedby","modalBody"):st.modal.removeAttribute("aria-describedby"),st.modalBody.innerHTML=i.body,st.modalArt.innerHTML=i.art??"",st.modalActions.innerHTML="";let t=!1;for(const e of i.actions??[]){const n=document.createElement("button");n.type="button",n.className=`btn ${e.kind==="dark"?"btn-dark":"btn-primary"}`,n.innerHTML=`${e.icon?`<svg aria-hidden="true"><use href="#${e.icon}" /></svg>`:""}<span>${Mi(e.label)}</span>`,e.id?n.id=e.id:e.kind!=="dark"&&!t&&(n.id="modalAction",t=!0),n.addEventListener("click",e.onClick),st.modalActions.appendChild(n)}ec=i.onClose??null,i.mount?.(st.modalBody),st.modal.classList.remove("hidden"),st.modal.querySelector(".sheet").scrollTop=0,Kt?.setHover(null,null,[]),Or(),(st.modalActions.querySelector("button")??st.closeModal).focus({preventScroll:!0})}function nc(i){return document.contains(i)&&i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden"}function sS(){let i;ve?i=_n&&st.home.contains(_n)&&nc(_n)?_n:st.playBtn:i=_n&&_n!==document.body&&document.contains(_n)&&!st.home.contains(_n)&&!st.modal.contains(_n)&&nc(_n)?_n:Kt?.canvas??null,i?.focus({preventScroll:!0}),document.activeElement!==i&&(ve?st.playBtn:Kt?.canvas)?.focus({preventScroll:!0})}function cn(i=!0){if(!Vn())return;st.modal.classList.add("hidden"),Qa=performance.now()+350;const t=ec;if(ec=null,t?.(),i&&sS(),Rs&&!Vn()&&!ve){const e=Rs;Rs=null,tf(e)}else!Vn()&&!ve&&!Yn&&io()}function so(){const i='<span class="arrow" aria-hidden="true">→</span>',t=ve;yi({title:"How to Play",body:`
      <div class="steps">
        <div class="step"><div class="step-art" aria-hidden="true">${hn(0)}${hn(0)}${hn(0)}</div>
          <div><h3>1. Merge 3</h3><p>Place 3 or more of the same piece side by side. Diagonals don't count.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${hn(0)}${i}${hn(1)}${i}${hn(2)}</div>
          <div><h3>2. Create bigger</h3><p>A merge makes one piece of the next tier, right where you placed.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${hn(2)}${i}${hn(3)}${i}${hn(4)}</div>
          <div><h3>3. Plan ahead</h3><p>New pieces can merge again: chains score ×2, ×3, ×4… Three castles throw a festival!</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${hn(Re)}</div>
          <div><h3>Rocks</h3><p>Rocks never merge. A Windmill or Castle merge next to them shatters them.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${hn(1)}</div>
          <div><h3>Keep slot</h3><p>Stash the next piece and swap it back any time. It's free.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${hn(3)}</div>
          <div><h3>Daily Nook</h3><p>One shared island a day: place ${vr} pieces for your best score and keep a streak.</p></div></div>
      </div>
      <p class="keys">The round ends when every tile is full. Hover, or touch and slide, to preview a merge; lift to place, or slide off the board to cancel. Tap the Next card to see what's coming.<br/>
      Keys: <kbd>←↑→↓</kbd> move · <kbd>Enter</kbd> place · <kbd>S</kbd> keep · <kbd>I</kbd> odds · <kbd>V</kbd> camera · <kbd>M</kbd> mute · <kbd>Esc</kbd> menu</p>`,actions:[{label:t?st.playBtn.textContent||"Play":J.turn===1?"Let's play":"Back to my nook",onClick:()=>{Jt.markHelpSeen(),cn(!t),t&&eo()}}],onClose:()=>Jt.markHelpSeen()})}function Zd(){const i=He(J)==="daily";yi({title:i?`Daily Nook #${Ls(J.dailyKey??Ui())}`:"Menu",body:`<div class="menu-list">
      <button class="btn btn-primary" id="menuResume" type="button">Resume</button>
      <button class="btn btn-dark" id="menuNew" type="button">${i?"Restart today's island":"New game"}</button>
      <button class="btn btn-dark" id="menuOdds" type="button">What's coming</button>
      <button class="btn btn-dark" id="menuJournal" type="button">Journal</button>
      <button class="btn btn-dark" id="menuHelp" type="button">How to play</button>
      <button class="btn btn-dark" id="menuSettings" type="button">Settings</button>
      <button class="btn btn-dark" id="menuHome" type="button">Home</button>
    </div>`,mount:t=>{t.querySelector("#menuResume").addEventListener("click",()=>cn()),t.querySelector("#menuNew").addEventListener("click",jd),t.querySelector("#menuOdds").addEventListener("click",kc),t.querySelector("#menuJournal").addEventListener("click",zc),t.querySelector("#menuHelp").addEventListener("click",so),t.querySelector("#menuSettings").addEventListener("click",Qd),t.querySelector("#menuHome").addEventListener("click",ks)}}),Gt("menuResume").focus({preventScroll:!0})}function Jd(){const i=Jt.getMotion();return i==="system"?Nc.matches:i==="on"}function ic(){const i=Jd();Kt?.setReducedMotion(i),document.body.classList.toggle("reduce-motion",i),document.body.classList.toggle("allow-motion",Jt.getMotion()==="off")}function Qd(){const i=Kt?.getView()??"iso",t=(e,n,s)=>`<button class="switch" id="${e}" type="button" role="switch" aria-checked="${n}" aria-label="${s}"></button>`;yi({title:"Settings",body:`<div class="settings">
      <div class="setting"><svg aria-hidden="true"><use href="#i-sound" /></svg><span>Sound Effects</span>${t("setSound",Me.enabled,"Sound effects")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-note" /></svg><span>Music</span>${t("setMusic",Me.music,"Music")}</div>
      ${Hn.supported?`<div class="setting"><svg aria-hidden="true"><use href="#i-vibrate" /></svg><span>Vibration</span>${t("setHaptics",Hn.enabled,"Vibration")}</div>`:""}
      <div class="setting"><svg aria-hidden="true"><use href="#i-motion" /></svg><span>Reduced Motion</span>${t("setMotion",Jd(),"Reduced motion")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-camera" /></svg><span>Camera</span>
        <span class="segmented" role="group" aria-label="Camera view">
          <button type="button" id="viewIso" aria-pressed="${i==="iso"}">Isometric</button>
          <button type="button" id="viewCozy" aria-pressed="${i==="cozy"}">Close-up</button>
        </span></div>
    </div>`,actions:[{label:"Done",onClick:()=>cn()}],mount:e=>{const n=(r,a)=>{const o=e.querySelector(`#${r}`);o?.addEventListener("click",()=>{const l=o.getAttribute("aria-checked")!=="true";o.setAttribute("aria-checked",String(l)),a(l)})};n("setSound",r=>{Me.enabled=r,Jt.setSound(r),r&&(Me.unlock(),Me.swap())}),n("setMusic",r=>{Jt.setMusic(r),Me.setMusic(r)}),n("setHaptics",r=>{Hn.enabled=r,Jt.setHaptics(r),r&&Hn.tap()}),n("setMotion",r=>{Jt.setMotion(r===Nc.matches?"system":r?"on":"off"),ic()});const s=r=>{ef(r),e.querySelector("#viewIso").setAttribute("aria-pressed",String(r==="iso")),e.querySelector("#viewCozy").setAttribute("aria-pressed",String(r==="cozy"))};e.querySelector("#viewIso").addEventListener("click",()=>s("iso")),e.querySelector("#viewCozy").addEventListener("click",()=>s("cozy"))}})}function kc(){const i=Af(J.turn,ke),t=(s,r)=>`<div class="odds-row${s===Re?" rock":""}">${hn(s,"",40)}<div class="odds-name">${Mi(Qe(s))}<span class="odds-bar"><i style="width:${r}%"></i></span></div><span class="odds-pct">${r}%</span></div>`,e=i.to===null?`Turn ${i.from} onward`:`Turns ${i.from}–${i.to}`;let n="";if(i.next){const s=new Map(i.rows.map(a=>[a.piece,a.percent])),r=i.next.rows.filter(a=>(s.get(a.piece)??0)!==a.percent).map(a=>`${Qe(a.piece)} ${s.get(a.piece)??0}% → ${a.percent}%`);r.length&&(n=`<div class="odds-change"><b>From turn ${i.next.at}:</b> ${Mi(r.join(" · "))}</div>`)}yi({title:"What's coming",body:`<div class="odds">
      <div class="odds-head"><b>${e}</b><span>Turn ${J.turn}${He(J)==="daily"?` · ${Os()} left`:""}</span></div>
      ${i.rows.map(s=>t(s.piece,s.percent)).join("")}
      ${n}
      <p class="odds-note">Each new piece is drawn from these odds. When the island is ${Math.round(ke.assistFillRatio*100)}% full or more, a piece that can't merge anywhere gets one ${Math.round(ke.assistChance*100)}% chance to be redrawn. Rocks get more common as the round goes on.</p>
    </div>`,actions:[{label:"Back to my nook",onClick:()=>cn()}]})}function zc(){const i=ln,t=Ui(),e=(s,r,a=!1)=>`<div class="stat-tile${a?" gold":""}"><small>${s}</small><b>${r}</b></div>`;let n="";if(i.recent.length){const s=[...i.recent].reverse(),r=Math.max(1,...s.map(u=>u.score)),a=300,o=80,l=a/Math.max(s.length,8),c=s.map((u,f)=>{const h=Math.max(2,u.score/r*(o-12));return`<rect class="${`bar${u.mode==="daily"?" daily":""}${f===s.length-1?" latest":""}`}" x="${(f*l+1).toFixed(1)}" y="${(o-h).toFixed(1)}" width="${(l-2).toFixed(1)}" height="${h.toFixed(1)}" rx="2"><title>${Mi(u.date)} · ${u.mode} · ${fe(u.score)}</title></rect>`}).join("");n=`<svg class="recent-chart" viewBox="0 0 ${a} ${o+12}" role="img" aria-label="Scores of your last ${s.length} rounds, highest ${fe(r)}">
      <line class="best-line" x1="0" x2="${a}" y1="12" y2="12" />${c}<text x="${a}" y="9" text-anchor="end">best ${fe(r)}</text></svg>`}yi({title:"Journal",body:i.rounds===0?`<p class="journal-empty">Finish a round to start your journal. It keeps your records, everything you've built and your daily streak.</p>`:`<div class="journal">
      <section><h3>Records</h3><div class="stat-grid">
        ${e("Best classic",fe(Math.max(i.bestClassic,Mn)),!0)}
        ${e("Best daily",fe(i.bestDaily),!0)}
        ${e("Best chain",`×${Math.max(1,i.bestChain)}`)}
        ${e("Biggest move",`+${fe(i.biggestMove)}`)}
        ${e("Longest round",An(i.longestRound,"turn"))}
        ${e("Most festivals",String(i.mostFestivals))}
      </div></section>
      <section><h3>Built</h3><div class="built-row">
        ${[1,2,3,4].map(s=>`<div>${hn(s,Wn[s].name,40)}<b>${fe(i.built[s]??0)}</b>${Mi(Wn[s].name.replace("Little ",""))}</div>`).join("")}
      </div></section>
      <section><h3>Lifetime</h3><div class="stat-grid">
        ${e("Rounds",fe(i.rounds))}
        ${e("Pieces placed",fe(i.pieces))}
        ${e("Festivals",fe(i.festivals))}
        ${e("Rocks shattered",fe(i.rocksShattered))}
        ${e("Daily streak",An(Kh(i,t),"day"),!0)}
        ${e("Longest streak",An(i.daily.bestStreak,"day"))}
      </div></section>
      ${n?`<section><h3>Recent rounds</h3>${n}</section>`:""}
    </div>`,actions:[{label:"Close",onClick:()=>cn()}]})}function jd(){if(He(J)==="daily"){if(J.over||J.turn<=3){Ga(!0);return}yi({title:"Start today's island again?",body:`<p>This attempt (${fe(J.score)} points) will end. Your best score for today is kept.</p>`,actions:[{label:"Start again",onClick:()=>Ga(!0)},{label:"Keep playing",kind:"dark",onClick:()=>cn()}]});return}if(J.over||J.turn<=3){Bs();return}yi({title:"Start a fresh nook?",body:`<p>Your current round (${fe(J.score)} points) will end. Your personal best stays saved on this device.</p>`,actions:[{label:"New game",onClick:Bs},{label:"Keep playing",kind:"dark",onClick:()=>cn()}]})}function rS(){Me.unlock();const{inProgress:i,saved:t}=Kd();if(!i||!t||t.turn<=3){Bs();return}yi({title:"Start a fresh nook?",body:`<p>Your saved round (${fe(t.score)} points, turn ${t.turn}) will be replaced. Your personal best stays saved.</p>`,actions:[{label:"New game",onClick:Bs},{label:"Back",kind:"dark",onClick:()=>cn()}]})}async function aS(i,t){if(Me.gameOver(),Hn.gameOver(),Cn(),await Kt?.gameOverWave(),!(t!==Wi||ve||J!==i.state)){if(Vn()){Rs=i;return}tf(i)}}function tf(i){const t=i.state,e=He(t)==="daily",n=Math.max(e?ln.daily.scores[t.dailyKey??""]??0:Mn,t.score),s=e?t.endReason==="limit"?"Day complete!":"Your nook is full!":"Game Over",r=i.highlights.slice(0,3),a=e?[{label:"Classic game",onClick:()=>{cn(!1),eo()}},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Bh(t)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:ks}]:[{label:"Play Again",onClick:Bs},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Bh(t)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:ks}];yi({title:s,art:`<img src="${Pr(t.highestTier,320)}" alt="${Mi(Wn[t.highestTier].name)}" draggable="false" />`,body:`
      ${i.newBest?`<div class="new-best">${e?"TODAY'S BEST":"NEW PERSONAL BEST"}</div>`:""}
      <p class="final-label">${e?`Daily Nook #${Ls(t.dailyKey??Ui())}`:"Final Score"}</p>
      <div class="final-score">${fe(t.score)}</div>
      <div class="final-best"><svg class="crown" aria-hidden="true"><use href="#i-crown" /></svg><small>${e?"Today's best":"Best Score"}</small><b>${fe(n)}</b></div>
      ${r.length?`<ul class="highlights">${r.map(o=>`<li>${Mi(o)}</li>`).join("")}</ul>`:""}
      <div class="final-stats">
        <span>Turns <b>${t.turn-1}</b></span>
        <span>Best chain <b>×${Math.max(1,t.bestChain)}</b></span>
        <span>Top piece <b>${Mi(Wn[t.highestTier].name)}</b></span>
        ${(t.festivals??0)>0?`<span>Festivals <b>${t.festivals}</b></span>`:""}
        ${(t.rocksShattered??0)>0?`<span>Rocks <b>${t.rocksShattered}</b></span>`:""}
      </div>`,actions:a,describe:!0}),Pn(`${s} ${e?"":"Final score "}${fe(t.score)}.${i.newBest?" New best!":""} ${r.join(". ")}`)}async function Bh(i){const n=`${He(i)==="daily"?`Little Nook · Daily #${Ls(i.dailyKey??Ui())}`:"Little Nook"}: ${fe(i.score)} points · top piece ${Wn[i.highestTier].name} · best chain ×${Math.max(1,i.bestChain)}`,r=document.getElementById("shareBtn")?.querySelector("span");try{if(typeof navigator.share=="function"){await navigator.share({title:"Little Nook",text:n,...xa?{url:xa}:{}});return}}catch(a){if(a?.name==="AbortError")return}try{await navigator.clipboard.writeText(xa?`${n}
${xa}`:n),r&&(r.textContent="Copied!"),Pn("Result copied. Paste it anywhere.")}catch{r&&(r.textContent="Copy not allowed here")}}function oS(i){const t=i.canvas;t.tabIndex=ve?-1:0,t.setAttribute("role","application"),t.setAttribute("aria-label","Puzzle board, 8 by 8 tiles. Use arrow keys to move and Enter to place.");let e=null;const n=new Set;let s=!1;const r=()=>{e=null,mr=!1,Yi=null,Yn||i.setHover(null,null,[]),$i&&Cn()};t.addEventListener("pointerdown",o=>{if(!(o.button!==0||ve)&&!(performance.now()<Qa)){if(n.add(o.pointerId),n.size>1||s){s=!0,r();return}Me.unlock(),e={id:o.pointerId,type:o.pointerType},mr=o.pointerType!=="mouse",t.setPointerCapture?.(o.pointerId),pr={x:o.clientX,y:o.clientY,type:o.pointerType},Di(i.pick(o.clientX,o.clientY)),o.pointerType!=="mouse"&&o.preventDefault()}}),t.addEventListener("pointermove",o=>{if(pr={x:o.clientX,y:o.clientY,type:o.pointerType},e&&e.id!==o.pointerId||!e&&o.pointerType!=="mouse")return;const l=i.pick(o.clientX,o.clientY);l!==Yi&&Di(l)});const a=(o,l)=>{const c=n.delete(o.pointerId);if(n.size===0){const h=s;if(s=!1,h&&c){r();return}}if(!e||e.id!==o.pointerId)return;const u=e.type;e=null,mr=!1;const f=i.pick(o.clientX,o.clientY);l&&f!==null&&(Be=null,i.setCursor(null),jl(f)),u!=="mouse"&&(Yi=null,Yn||i.setHover(null,null,[]),(!l||f===null)&&Cn())};t.addEventListener("pointerup",o=>a(o,!0)),t.addEventListener("pointercancel",o=>a(o,!1)),t.addEventListener("lostpointercapture",o=>{n.has(o.pointerId)&&a(o,!1)}),t.addEventListener("pointerleave",o=>{o.pointerType==="mouse"&&!e&&(Di(null),!ve&&$i&&Cn())}),t.addEventListener("contextmenu",o=>o.preventDefault()),st.stage.addEventListener("touchmove",o=>o.preventDefault(),{passive:!1}),st.stage.addEventListener("dblclick",o=>o.preventDefault()),document.addEventListener("gesturestart",o=>o.preventDefault()),t.addEventListener("focus",()=>{Be===null&&!ve&&Ql&&(Be=nl??27,i.setCursor(Be),Di(Be))}),t.addEventListener("blur",()=>{Be!==null&&(nl=Be),i.setCursor(null),Be=null,Di(null)}),t.addEventListener("keydown",o=>{if(!(ve||Vn()))if(o.key==="ArrowRight"||o.key==="ArrowLeft"||o.key==="ArrowUp"||o.key==="ArrowDown"){o.preventDefault();const{dx:l,dy:c}=i.arrowStep(o.key),u=Be??nl??27,f=Math.min(De-1,Math.max(0,u%De+l)),h=Math.min(De-1,Math.max(0,Math.floor(u/De)+c));Be=h*De+f,i.setCursor(Be),Di(Be);const d=J.board[Be],_=d===Ae&&!J.over?qd(Be):null;Pn(`Row ${h+1}, column ${f+1}: ${d===Ae?"empty":Qe(d)}.${_?` ${_.text.replace("→","makes")}.`:""} In hand: ${Qe(J.next)}.`)}else(o.key==="Enter"||o.key===" ")&&Be!==null&&(o.preventDefault(),jl(Be))})}function lS(){window.addEventListener("keydown",i=>{["Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Enter"," ","Escape"].includes(i.key)&&(Ql=!0)},!0),window.addEventListener("pointerdown",()=>Ql=!1,!0),window.addEventListener("keydown",i=>{if(i.metaKey||i.ctrlKey||i.altKey)return;if(Vn()){if(i.key==="Escape")cn();else if(i.key==="Tab"){const e=[...st.modal.querySelectorAll("button:not(.hidden)")].filter(nc),n=e.indexOf(document.activeElement);i.preventDefault(),e[(n+(i.shiftKey?-1:1)+e.length)%e.length]?.focus()}return}if(ve){i.key==="Enter"&&(document.activeElement===document.body||document.activeElement===null)&&(i.preventDefault(),eo());return}const t=i.key.toLowerCase();i.key==="Escape"?Zd():t==="s"||t==="q"?tc():t==="n"?jd():t==="h"||t==="?"?so():t==="i"?kc():t==="j"?zc():t==="m"?cS():t==="v"&&ef(Kt?.getView()==="iso"?"cozy":"iso")})}function cS(){const i=Me.enabled||Me.music;Me.enabled=!i,Jt.setSound(!i),Jt.setMusic(!i),Me.setMusic(!i);const t=i?"Sound off (M to turn it back on).":"Sound on.";je(t),Pn(t)}function ef(i){Kt&&(Kt.setView(i),Jt.setView(i))}function uS(i){if(i.key==="littleNook.journal"){try{const n=i.newValue?JSON.parse(i.newValue):null;qh(n)&&Jt.adoptJournal(ln=n)}catch{}ve&&gr();return}if(Yn)return;const t=He(J)==="daily";if(i.key!==(t?"littleNook.daily":"littleNook.game"))return;const e=t?Jt.loadDaily(qi):Jt.loadGame(qi);if(!e){!i.newValue&&hS(i.oldValue)&&!J.over&&(Dr(t?Xd(Ui()):Uc()),ve?gr():(ks(),Pn("That round was finished in another tab.")));return}e.seed===J.seed&&e.turn<=J.turn||t&&e.dailyKey&&J.dailyKey&&e.dailyKey<J.dailyKey||(Dr(e),ve?gr():(je("Updated with progress from another tab."),Pn("Updated with progress from another tab.")))}function hS(i){try{const t=i?JSON.parse(i):null;return qi(t)&&t.seed===J.seed&&(t.dailyKey??"")===(J.dailyKey??"")}catch{return!1}}function dS(){try{Kt=new $M(st.stage)}catch(a){console.error(a),Gt("boot")?.remove(),st.webglError.classList.remove("hidden"),document.body.classList.remove("booting","at-home"),je("3D graphics are unavailable in this browser.","danger");return}const i=Kt;ic(),Nc.addEventListener?.("change",ic),i.onContextRestored=()=>{Ca.clear(),Lr()};const t=Jt.getView();i.setView(t==="cozy"?"cozy":"iso"),oS(i),lS(),st.keepBtn.addEventListener("click",tc),st.nextCard.addEventListener("click",()=>{!ve&&!Vn()&&kc()}),st.menuBtn.addEventListener("click",Zd),st.homeBtn.addEventListener("click",ks),st.playBtn.addEventListener("click",eo),st.homeNewBtn.addEventListener("click",rS),st.dailyBtn.addEventListener("click",()=>Ga()),st.homeHelpBtn.addEventListener("click",so),st.homeJournalBtn.addEventListener("click",zc),st.homeSettingsBtn.addEventListener("click",Qd),st.coachSkip.addEventListener("click",()=>{const a=document.activeElement===st.coachSkip;no(),a&&to(),je("Tips off. You can read the rules any time in the menu."),Pn("Tips off.")}),st.hud.addEventListener("click",a=>{a.detail>0&&performance.now()<Qa&&(a.stopPropagation(),a.preventDefault())},!0),st.closeModal.addEventListener("click",()=>cn());let e=!1;st.modal.addEventListener("pointerdown",a=>e=a.target===st.modal),st.modal.addEventListener("click",a=>{e&&a.target===st.modal&&cn(),e=!1}),document.addEventListener("visibilitychange",()=>{Me.setPaused(document.hidden),document.hidden||(i.markDirty(),ve&&gr())}),window.addEventListener("storage",uS),document.addEventListener("touchend",()=>Me.unlock(),{capture:!0,passive:!0});const n=()=>Oh();window.addEventListener("resize",n),new ResizeObserver(n).observe(st.dock),gf().then(n),Lr(),Oh(),Cn(),ks();const s=()=>[0,1,2,3,4,Re].forEach(a=>Pr(a)),r=window.requestIdleCallback;r?r(s,{timeout:2e3}):setTimeout(s,800),window.__littleNookBooted=!0,document.body.classList.remove("booting"),Gt("boot")?.remove(),window.__littleNook={state:()=>J,busy:()=>Yn,atHome:()=>ve,cursor:()=>Be,journal:()=>ln,place:a=>jl(a),swap:tc,startDaily:()=>Ga(),tilePixelSize:()=>i.tilePixelSize(),cellToScreen:a=>i.cellToScreen(a,0),setView:a=>i.setView(a)}}dS();if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)){const i=!!navigator.serviceWorker.controller;let t=null,e=Date.now(),n=!1;window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(r=>t=r).catch(()=>{})});const s=()=>{t&&Date.now()-e>3600*1e3&&(e=Date.now(),t.update().catch(()=>{}))};document.addEventListener("visibilitychange",()=>{document.hidden||s()}),window.addEventListener("pageshow",r=>{r.persisted&&s()}),navigator.serviceWorker.addEventListener("controllerchange",()=>{!i||n||($d=!0,ve||J.over?(n=!0,location.reload()):(je("An update is ready. It loads the next time you open the home screen."),Pn("An update is ready.")))})}
