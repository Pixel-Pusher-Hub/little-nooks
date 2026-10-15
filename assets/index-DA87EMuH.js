(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const _p=""+new URL("outfit-latin-300-normal-CRYTwY6m.woff2",import.meta.url).href,vp=""+new URL("outfit-latin-400-normal-BGsTXAXT.woff2",import.meta.url).href,xp=""+new URL("outfit-latin-500-normal-DKnIMDSk.woff2",import.meta.url).href,Mp=""+new URL("outfit-latin-600-normal-B7SfZ07L.woff2",import.meta.url).href,yp=[["Outfit",_p,"300"],["Outfit",vp,"400"],["Outfit",xp,"500"],["Outfit",Mp,"600"]];function Sp(){return typeof FontFace>"u"||!document.fonts?Promise.resolve():Promise.all(yp.map(([i,e,t])=>{const n=new FontFace(i,`url(${e}) format('woff2')`,{weight:t,display:"swap"});return document.fonts.add(n),n.load().catch(()=>{})}))}const Mn=8,gs=Mn*Mn,_s=[5,6,7,8,9,10],Ld=i=>_s.includes(i),bp={5:"Tiny",6:"Small",7:"Cozy",8:"Medium",9:"Big",10:"Grand"},At=-1,Ft=99,hn=98,Sn=97,Xn=96,_i={[Sn]:{name:"Campfire",life:10,radius:1},[Xn]:{name:"Lamppost",life:15,radius:2}},Yn=i=>i===Sn||i===Xn,wp=["Bush","Tree","Tent","Cottage","House","Apartments","Office Tower","Skyscraper","Glass Spire","Sky Tower","Crown Tower","Neon Tower","Garden Tower","Helix Tower","Twin Spires","Lantern Tower","Aurora Tower","Cloud Piercer","Prism Tower","Starlight Tower","Golden Spire","Sky Garden","Beacon Tower","Moon Tower","Crystal Spire","Eclipse Tower","Nova Tower","Halo Tower","Comet Spire","Galaxy Tower","Nebula Spire","Orbit Tower","Zenith Tower","Celestial Spire","Stellar Crown","Quasar Tower","Infinity Tower","Cosmos Spire","Star Citadel","Heaven’s Gate"],xr=[0,20,90,350,1200,4e3,13e3,42e3],yn=wp.map((i,e)=>({name:i,hint:`Tier ${e+1}`,mergePoints:e<xr.length?xr[e]:Math.round(xr[xr.length-1]*Math.pow(1.45,e-xr.length+1))})),Hc=7,ku=[0,0,1,1,1,2,2,3],Ep=2,Zt=yn.length-1,Tp=Zt-4,Id={name:"Rock",hint:"Obstacle"};function Dd(i){return i===hn?Ep:Yn(i)?_i[i].radius:i<0||i>=yn.length?0:ku[Math.min(i,ku.length-1)]}function Nd(i,e=jt){return Math.max(0,Math.min(Tp,i-e.spawnBaseOffset))}const jt={minGroup:3,groupSizeBonus:.5,comboMultipliers:[1,2,3,4,5],festivalPoints:15e4,rockMinGroup:0,rockCrumblePoints:40,rockBreakTier:3,placePoints:1,spawnPhases:[{fromTurn:1,tiers:[75,25],rock:0},{fromTurn:11,tiers:[62,30,8],rock:0},{fromTurn:31,tiers:[55,32,11,2],rock:0},{fromTurn:61,tiers:[50,32,14,4],rock:0}],assistFillRatio:.7,assistChance:.35,crowdedRatio:.78,spawnBaseOffset:3,startPieces:90,milestoneBase:16,milestonePerTier:0,emberChance:.03,lampChance:.012,lightItemsFrom:8};function Ap(i,e,t=jt){return Math.max(1,Math.round((t.milestoneBase+t.milestonePerTier*i)*e/gs))}function Cp(i,e=jt){return Math.max(20,Math.round(e.startPieces*i/gs))}function Eo(i,e=jt){return i===hn||Yn(i)?1/0:i===Ft?e.rockMinGroup>0?e.rockMinGroup:1/0:e.minGroup}function nn(i){return i===Ft?Id.name:i===hn?"Campfire":Yn(i)?_i[i].name:yn[i]?.name??"Empty"}function Rp(i){return i===Ft?Id.hint:Yn(i)?`Lasts ${_i[i].life} moves`:yn[i]?.hint??""}function oa(i){return Math.round(Math.sqrt(i.length))}function Vc(i=Mn){return new Array(i*i).fill(At)}function cr(i,e=Mn){return{x:i%e,y:Math.floor(i/e)}}function Pp(i,e,t=Mn){return e*t+i}function Wc(i,e=Mn){const{x:t,y:n}=cr(i,e),s=[];return t>0&&s.push(i-1),t<e-1&&s.push(i+1),n>0&&s.push(i-e),n<e-1&&s.push(i+e),s}function Ud(i,e=Mn){const{x:t,y:n}=cr(i,e);return t===0||n===0||t===e-1||n===e-1}function la(i,e,t=i[e]){const n=oa(i),s=new Set([e]),r=[e];for(;r.length;){const a=r.pop();for(const o of Wc(a,n))!s.has(o)&&i[o]===t&&(s.add(o),r.push(o))}return[...s].sort((a,o)=>a-o)}function ca(i){const e=oa(i),t=new Array(i.length).fill(!1);return i.forEach((n,s)=>{const r=Dd(n);if(r<=0)return;const{x:a,y:o}=cr(s,e);for(let l=Math.max(0,o-r);l<=Math.min(e-1,o+r);l++)for(let c=Math.max(0,a-r);c<=Math.min(e-1,a+r);c++)t[l*e+c]=!0}),t}function ua(i){const e=[];return i.forEach((t,n)=>t===At&&e.push(n)),e}function Lp(i){let e=0;for(const t of i)t!==At&&e++;return e}function Ip(i,e=Mn){const t=Vc(e);return i.forEach((n,s)=>[...n.replace(/\s+/g,"")].forEach((r,a)=>{r!=="."&&(t[Pp(a,s,e)]=r==="R"?99:Number(r)-1)})),t}const Dp=/^(\d{4})-(\d{2})-(\d{2})$/,Fd=864e5,ir=(i,e=2)=>String(i).padStart(e,"0");function Np(i){return`${ir(i.getFullYear(),4)}-${ir(i.getMonth()+1)}-${ir(i.getDate())}`}function lo(i){const e=Dp.exec(i);if(!e)return NaN;const[t,n,s]=[Number(e[1]),Number(e[2]),Number(e[3])],r=Date.UTC(t,n-1,s),a=new Date(r);return a.getUTCFullYear()===t&&a.getUTCMonth()===n-1&&a.getUTCDate()===s?r:NaN}function Up(i){const e=new Date(i);return`${ir(e.getUTCFullYear(),4)}-${ir(e.getUTCMonth()+1)}-${ir(e.getUTCDate())}`}function vs(i){return typeof i=="string"&&Number.isFinite(lo(i))}function Fp(i,e){return Math.round((lo(e)-lo(i))/Fd)}function Od(i){const e=lo(i);return Number.isFinite(e)?Up(e-Fd):""}function co(i){const e=i+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function Bd(){return typeof crypto<"u"&&"getRandomValues"in crypto?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*2**32)>>>0}function Op(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Xc(i,e=gs){return e===gs?i:Math.max(1,Math.round(1+(i-1)*(gs/e)))}function zu(i,e=gs){let t=1;for(;Xc(t,e)<i;)t++;return t}function kd(i,e=jt){let t=e.spawnPhases[0];for(const n of e.spawnPhases)i>=n.fromTurn&&(t=n);return t}function zl(i,e=jt){const t=kd(i,e),n=t.tiers.map((r,a)=>[a,r]);t.rock>0&&n.push([Ft,t.rock]);const s=n.reduce((r,[,a])=>r+a,0);return n.filter(([,r])=>r>0).map(([r,a])=>[r,a/s])}function Gu(i,e,t,n=0){const[s,r]=co(e),a=zl(i,t),o=c=>c===Ft?c:Math.min(Zt,c+n);let l=0;for(const[c,u]of a)if(l+=u,s<l)return[o(c),r];return[o(a[a.length-1][0]),r]}function zd(i){let e=-1;for(const t of i)t!==Ft&&t>=0&&t<=Zt&&(e=Math.max(e,t));return e}function Bp(i,e,t){for(const n of ua(i)){const s=[...i];s[n]=e;const r=Eo(e,t);if(la(s,n,e).length>=r)return!0}return!1}function To(i,e,t,n=jt,s=!1){if(e=Xc(e,i.length),s&&e>=n.lightItemsFrom){const[c,u]=co(t);if(t=u,c<n.lampChance)return[Xn,t];if(c<n.lampChance+n.emberChance)return[Sn,t]}const r=Nd(zd(i),n);let[a,o]=Gu(e,t,n,r);if(Lp(i)/i.length>=n.assistFillRatio&&ua(i).length>0&&!Bp(i,a,n)){const[c,u]=co(o);o=u,c<n.assistChance&&([a,o]=Gu(e,o,n,r))}return[a,o]}function Hu(i){const e=i.map(([s,r])=>({piece:s,exact:r*100,percent:Math.floor(r*100)}));let t=100-e.reduce((s,r)=>s+r.percent,0);const n=[...e].sort((s,r)=>r.exact-r.percent-(s.exact-s.percent));for(const s of n){if(t<=0)break;s.percent++,t--}return e.map(({piece:s,percent:r})=>({piece:s,percent:r}))}function kp(i,e=jt,t=gs,n=0){const s=Xc(i,t),r=u=>u.map(d=>d.piece===Ft?d:{...d,piece:Math.min(Zt,d.piece+n)}),a=kd(s,e),o=e.spawnPhases[e.spawnPhases.indexOf(a)+1],l=zu(a.fromTurn,t),c=o?zu(o.fromTurn,t):null;return{from:l,to:c!==null?c-1:null,rows:r(Hu(zl(s,e))),next:o&&c!==null?{at:c,rows:r(Hu(zl(o.fromTurn,e)))}:null}}function Gd(i){const e=Math.floor((i-1)/2);return e*i+e}function $c(i,e=jt,t=Mn,n=!1,s=!1){const r=Vc(t);n&&(r[Gd(t)]=hn);const a={board:r,score:0,turn:1,next:0,stash:At,rng:i>>>0,over:!1,lastChain:0,bestChain:0,highestTier:0,merges:0,seed:i>>>0,festivals:0,rocksShattered:0,...n?{glow:!0}:{},...s?{budget:!0,pieceLimit:Cp(t*t,e)}:{}},[o,l]=To(a.board,a.turn,a.rng,e,n);return{...a,next:o,rng:l}}function zi(i){const e=ua(i.board);if(!i.glow||i.next!==void 0&&Yn(i.next))return e;const t=ca(i.board);return e.filter(n=>t[n])}function Yc(i,e){return!Number.isInteger(e)||e<0||e>=i.board.length||i.board[e]!==At?!1:!i.glow||i.next!==void 0&&Yn(i.next)||ca(i.board)[e]}function Hd(i,e=jt){const t=e.comboMultipliers;return t[Math.min(i-1,t.length-1)]}function zp(i,e,t,n=jt){const s=yn[i].mergePoints,r=1+n.groupSizeBonus*Math.max(0,e-n.minGroup);return Math.round(s*r*Hd(t,n))}function Gp(i,e,t=jt){const n=[];let s=0;for(;;){const r=i[e];if(r===At||r===hn||Yn(r))break;const a=la(i,e,r),o=Eo(r,t);if(a.length<o)break;if(r===Ft){for(const u of a)i[u]=At;n.push({kind:"crumble",cells:a,target:e,points:t.rockCrumblePoints*a.length});break}s++;const l=Hd(s,t);if(r===Zt){for(const h of a)i[h]=At;const u=1+t.groupSizeBonus*(a.length-t.minGroup),d=Math.round(t.festivalPoints*u*l);n.push({kind:"festival",step:s,cells:a,target:e,points:d,multiplier:l});break}for(const u of a)i[u]=At;i[e]=r+1;const c=r+1>=t.rockBreakTier?Hp(i,a):[];if(n.push({kind:"merge",step:s,fromTier:r,toTier:r+1,cells:a,target:e,points:zp(r+1,a.length,s,t),multiplier:l}),c.length){for(const u of c)i[u]=At;n.push({kind:"crumble",cells:c,target:e,points:t.rockCrumblePoints*c.length})}}return n}function Hp(i,e){const t=new Set,n=oa(i);for(const s of e)for(const r of Wc(s,n))i[r]===Ft&&t.add(r);return[...t].sort((s,r)=>s-r)}function Ao(i,e,t=jt){if(i.over||!Yc(i,e))return{state:i,events:[],points:0,accepted:!1};const n=[...i.board],s=i.next;n[e]=s;const r=[{kind:"place",index:e,piece:s,points:t.placePoints}],a=Gp(n,e,t);r.push(...a);const o=r.reduce((R,x)=>R+x.points,0),l=a.filter(R=>R.kind==="merge"||R.kind==="festival").length;let c=i.highestTier,u=i.festivals??0,d=i.rocksShattered??0;for(const R of a)R.kind==="merge"&&(c=Math.max(c,R.toTier)),R.kind==="festival"&&(c=Zt,u++),R.kind==="crumble"&&(d+=R.cells.length);s>=0&&s<=Zt&&(c=Math.max(c,s));const h=(i.burn??[]).map(([R,x])=>[R,x-1]),f=h.filter(([,R])=>R<=0).map(([R])=>R);for(const R of f)n[R]=At;f.length&&r.push({kind:"expire",cells:f,points:0});const g=[...h.filter(([,R])=>R>0),...Yn(s)?[[e,_i[s].life]]:[]],_=i.turn+1,[m,p]=To(n,_,i.rng,t,!!i.glow);let y=i.pieceLimit;if(i.budget&&y&&c>i.highestTier)for(let R=i.highestTier+1;R<=c;R++)y+=Ap(R,n.length,t);const T=ua(n).length===0,M=!T&&!!i.glow&&zi({board:n,glow:!0,next:m}).length===0&&!Yn(i.stash),E=!!y&&_>y,w=T||M||E;return{accepted:!0,events:r,points:o,state:{...i,board:n,score:i.score+o,turn:_,next:m,rng:p,over:w,lastChain:l,bestChain:Math.max(i.bestChain,l),highestTier:c,merges:i.merges+l,festivals:u,rocksShattered:d,...y!==i.pieceLimit?{pieceLimit:y}:{},...i.glow?{burn:g}:{},...w?{endReason:T?"full":M?"dark":"limit"}:{}}}}function Vp(i,e=jt){if(i.over)return i;if(i.stash===At){const[t,n]=To(i.board,i.turn,i.rng,e,!!i.glow);return{...i,stash:i.next,next:t,rng:n}}return{...i,stash:i.next,next:i.stash}}function qc(i,e,t=jt,n=ua(i)){const s=[];for(const r of n){const a=[...i];a[r]=e;const o=Eo(e,t);la(a,r,e).length>=o&&s.push(r)}return s}const Pn=i=>typeof i=="number"&&Number.isInteger(i),Xo=i=>Pn(i)&&(i===At||i===Ft||i===hn||i===Sn||i===Xn||i>=0&&i<=Zt),Vu=i=>Pn(i)&&i>=0,bi=(i,e)=>i===void 0||e(i);function Wp(i,e){if(!Array.isArray(i))return!1;const t=new Set;return i.every(n=>{if(!Array.isArray(n)||n.length!==2||!Pn(n[0])||!Pn(n[1])||t.has(n[0]))return!1;t.add(n[0]);const s=e[n[0]];return Yn(s)&&n[1]>=1&&n[1]<=_i[s].life})}function ys(i){if(!i||typeof i!="object")return!1;const e=i;return Array.isArray(e.board)&&Ld(Math.sqrt(e.board.length))&&e.board.every(Xo)&&Pn(e.score)&&e.score>=0&&Pn(e.turn)&&e.turn>=1&&Xo(e.next)&&e.next!==At&&e.next!==hn&&e.stash!==hn&&Xo(e.stash)&&Pn(e.rng)&&typeof e.over=="boolean"&&Pn(e.lastChain)&&Pn(e.bestChain)&&Pn(e.highestTier)&&Pn(e.merges)&&Pn(e.seed)&&bi(e.festivals,Vu)&&bi(e.rocksShattered,Vu)&&bi(e.mode,n=>n==="classic"||n==="daily")&&bi(e.dailyKey,vs)&&bi(e.pieceLimit,n=>Pn(n)&&n>0)&&bi(e.endReason,n=>n==="full"||n==="limit"||n==="dark")&&bi(e.glow,n=>typeof n=="boolean")&&bi(e.budget,n=>typeof n=="boolean")&&bi(e.burn,n=>Wp(n,e.board))&&(e.mode!=="daily"||e.dailyKey!==void 0)?(Object.isExtensible(e)&&(e.festivals??(e.festivals=0),e.rocksShattered??(e.rocksShattered=0)),!0):!1}const $r=120,Xp="2026-10-13",$p=4,Yp=1540483477,qp=200;function ur(i){return Fp(Xp,i)+1}function Kp(i){return Op("little-nook/daily/"+i)}function Zp(i,e,t){const n=[...t];let s=(i^Yp)>>>0;const r=()=>{const[o,l]=co(s);return s=l,o},a=(o,l)=>{for(let c=0;c<qp;c++){const u=o(),d=Math.floor(r()*n.length);if(!(n[d]!==At||!l(d))){if(n[d]=u,la(n,d,u).length<Eo(u,e))return;n[d]=At}}};for(let o=0;o<$p;o++)a(()=>r()<.6?0:1,()=>!0);return n}function Vd(i,e=jt){const t=Kp(i),n=$c(t,e,8,!0),s=Zp(t,e,n.board),[r,a]=To(s,n.turn,t,e);return{...n,board:s,next:r,rng:a,mode:"daily",dailyKey:i,pieceLimit:$r}}const Wd=20,Xd=60;function Jp(){return{v:1,rounds:0,pieces:0,built:new Array(Zt+1).fill(0),festivals:0,rocksShattered:0,bestClassic:0,bestDaily:0,bestChain:0,biggestMove:0,mostFestivals:0,longestRound:0,recent:[],daily:{lastKey:null,streak:0,bestStreak:0,scores:{}}}}const ui=i=>typeof i=="number"&&Number.isSafeInteger(i)&&i>=0,Ja=i=>!!i&&typeof i=="object"&&!Array.isArray(i),Qp=i=>i==="classic"||i==="daily";function jp(i){return Ja(i)&&vs(i.date)&&Qp(i.mode)&&ui(i.score)&&ui(i.turns)&&ui(i.top)&&i.top<=Zt&&ui(i.chain)&&ui(i.festivals)}function $d(i){if(!Ja(i)||i.v!==1||!["rounds","pieces","festivals","rocksShattered","bestClassic","bestDaily","bestChain","biggestMove","mostFestivals","longestRound"].every(r=>ui(i[r])))return!1;const t=i.built;if(!Array.isArray(t)||t.length<5||t.length>Zt+1||!t.every(ui)||t[0]!==0||!Array.isArray(i.recent)||i.recent.length>Wd||!i.recent.every(jp))return!1;const n=i.daily;if(!Ja(n)||!(n.lastKey===null||vs(n.lastKey))||!ui(n.streak)||!ui(n.bestStreak)||!Ja(n.scores))return!1;const s=Object.entries(n.scores);if(!(s.length<=Xd&&s.every(([r,a])=>vs(r)&&ui(a))))return!1;if(t.length<Zt+1&&Object.isExtensible(t))for(;t.length<Zt+1;)t.push(0);return!0}function em(i,e,t){const n=[...i.built];let{pieces:s,festivals:r,rocksShattered:a}=i;for(const l of e)l.kind==="place"?s++:l.kind==="merge"?n[l.toTier]=(n[l.toTier]??0)+1:l.kind==="festival"?r++:l.kind==="crumble"&&(a+=l.cells.length);const o=Number.isFinite(t)?Math.max(0,Math.floor(t)):0;return{...i,built:n,pieces:s,festivals:r,rocksShattered:a,biggestMove:Math.max(i.biggestMove,o)}}const tm=i=>i.toLocaleString("en-US"),Mr=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.floor(i)):0;function Yd(i,e){const t=i.daily.lastKey;return t!==null&&(t===e||t===Od(e))?i.daily.streak:0}const nm=(i,e,t=e+"s")=>`${i} ${i===1?e:t}`,Wu=["Best","2nd best","3rd best"];function im(i){const e=Object.keys(i).sort().reverse().slice(0,Xd),t={};for(const n of e.reverse())t[n]=i[n];return t}function sm(i,e,t){const n=e.mode??"classic",s=Mr(e.score),r=Mr(e.turn-1),a=Mr(e.bestChain),o=Mr(e.festivals),l=Math.min(Zt,Mr(e.highestTier)),c=t.slice(0,10),h=[{date:vs(c)?c:vs(e.dailyKey)?e.dailyKey:"1970-01-01",mode:n,score:s,turns:r,top:l,chain:a,festivals:o},...i.recent].slice(0,Wd);let f=i.daily;const g=n==="daily"&&vs(e.dailyKey)?e.dailyKey:null;if(g){const x=im({...f.scores,[g]:Math.max(f.scores[g]??0,s)}),{lastKey:A}=f;if(A!==null&&g<A)f={...f,scores:x};else{const P=A===g?f.streak:A===Od(g)?f.streak+1:1;f={lastKey:g,streak:P,bestStreak:Math.max(f.bestStreak,P),scores:x}}}const _={...i,built:[...i.built],rounds:i.rounds+1,longestRound:Math.max(i.longestRound,r),bestChain:Math.max(i.bestChain,a),mostFestivals:Math.max(i.mostFestivals,o),bestClassic:n==="classic"?Math.max(i.bestClassic,s):i.bestClassic,bestDaily:n==="daily"?Math.max(i.bestDaily,s):i.bestDaily,recent:h,daily:{...f,scores:{...f.scores}}},m=[],p=i.rounds>0,y=Object.keys(i.daily.scores).length>0||i.bestDaily>0,T=n==="daily"&&y&&s>i.bestDaily;T&&m.push(`Best daily yet: ${tm(s)}`),p&&a>=2&&a>i.bestChain&&m.push(`Best chain ever: ×${a}`),p&&o>i.mostFestivals&&m.push(`New record: ${nm(o,"festival")} in a round`),p&&r>i.longestRound&&m.push(`New record: longest round (${r} turns)`),g&&f.streak>=2&&f.streak>i.daily.streak&&m.push(`Daily streak: ${f.streak} days`);const M=h.filter(x=>x.mode===n),E=M.slice(1),w=1+E.filter(x=>x.score>s).length,R=E.some(x=>x.score<s);if(M.length>=3&&w<=Wu.length&&R&&!T){const x=n==="daily"?"dailies":M.length<h.length?"classic rounds":"rounds";m.push(`${Wu[w-1]} of your last ${M.length} ${x}`)}return{journal:_,highlights:m}}function rm(i,e,t=jt){const n=Ao(i,e,t),s=n.state.board;let r=n.points*2+zi(n.state).length*6;const a=s[e];if(a!==At){la(s,e,a).length===2&&(r+=18+a*6);const l=oa(s);for(const c of Wc(e,l))s[c]!==At&&s[c]!==a&&(r-=3);a===Ft&&Ud(e,l)&&(r+=10)}return r}const am="littleNook.best",om="littleNookBest",Xu="littleNook.sound",$u="littleNook.seenHelp",lm="littleNook.game",Yu="littleNook.view",cm="littleNook.roundStartBest",qu="littleNook.music",Ku="littleNook.motion",Zu="littleNook.journal",$o="littleNook.daily",Ju="littleNook.haptics",Qu="littleNook.coachDone",ju="littleNook.size";function hr(i,e=8){return e===8?i:`${i}.${e}`}const Kc="littleNook.fire",Qa=(i=8,e=!1)=>hr(e?`${Kc}.game`:lm,i),eh=(i,e)=>hr(e?`${Kc}.best`:am,i),th=(i,e)=>hr(e?`${Kc}.roundStartBest`:cm,i),nh="littleNook.rules";function um(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}class hm{constructor(e=um()){this.store=e,this.memoBest=new Map,this.memoJournal=null}get(e){try{return this.store?.getItem(e)??null}catch{return null}}set(e,t){try{this.store?.setItem(e,t)}catch{}}getBest(e=8,t=!1){const n=this.get(eh(e,t))??(e===8&&!t?this.get(om):null)??0,s=Number(n),r=Number.isFinite(s)&&s>0?Math.floor(s):0,a=`${t?"f":"c"}${e}`,o=Math.max(this.memoBest.get(a)??0,r);return this.memoBest.set(a,o),o}submitScore(e,t=8,n=!1){const s=Math.floor(e);return s>this.getBest(t,n)?(this.memoBest.set(`${n?"f":"c"}${t}`,s),this.set(eh(t,n),String(s)),!0):!1}getFire(){return this.get(nh)!=="classic"}setFire(e){this.set(nh,e?"fire":"classic")}getSize(e){const t=Number(this.get(ju));return e(t)?t:8}setSize(e){this.set(ju,String(e))}getSound(){return this.get(Xu)!=="off"}setSound(e){this.set(Xu,e?"on":"off")}hasSeenHelp(){return this.get($u)==="1"}markHelpSeen(){this.set($u,"1")}getRoundStartBest(e=8,t=!1){const n=this.get(th(e,t)),s=Number(n);return n!==null&&n!==""&&Number.isFinite(s)&&s>=0?s:null}setRoundStartBest(e,t=8,n=!1){this.set(th(t,n),String(e))}getMusic(){return this.get(qu)!=="off"}setMusic(e){this.set(qu,e?"on":"off")}getMotion(){const e=this.get(Ku);return e==="on"||e==="off"?e:"system"}setMotion(e){this.set(Ku,e)}getView(){return this.get(Yu)}setView(e){this.set(Yu,e)}saveGame(e,t=8,n=!1){this.set(Qa(t,n),JSON.stringify(e))}clearGame(e=8,t=!1){this.set(Qa(e,t),"")}loadGame(e,t=8,n=!1){return this.load(Qa(t,n),e)}saveDaily(e){this.set($o,JSON.stringify(e))}clearDaily(){this.set($o,"")}loadDaily(e){return this.load($o,e)}getJournal(){return this.memoJournal??this.load(Zu,$d)??Jp()}saveJournal(e){this.memoJournal=e,this.set(Zu,JSON.stringify(e))}adoptJournal(e){this.memoJournal=e}getHaptics(){return this.get(Ju)!=="off"}setHaptics(e){this.set(Ju,e?"on":"off")}getCoachDone(){return this.get(Qu)==="1"}setCoachDone(){this.set(Qu,"1")}load(e,t){const n=this.get(e);if(!n)return null;try{const s=JSON.parse(n);return t(s)?s:null}catch{return null}}}const Zc="186",dm=0,ih=1,fm=2,Fr=1,pm=2,Ir=3,Ss=0,wn=1,hi=2,Di=0,Or=1,Ji=2,sh=3,rh=4,mm=5,er=100,gm=101,_m=102,vm=103,xm=104,Mm=200,ym=201,Sm=202,bm=203,qd=204,Kd=205,wm=206,Em=207,Tm=208,Am=209,Cm=210,Rm=211,Pm=212,Lm=213,Im=214,Gl=0,Hl=1,Vl=2,Yr=3,Wl=4,Xl=5,$l=6,Yl=7,Zd=0,Dm=1,Nm=2,pi=0,Jd=1,Qd=2,jd=3,ef=4,tf=5,nf=6,Jc=7,sf=300,bs=301,dr=302,Yo=303,qo=304,Co=306,ql=1e3,Li=1001,Kl=1002,rn=1003,Um=1004,va=1005,un=1006,Ko=1007,fs=1008,Dn=1009,rf=1010,af=1011,qr=1012,Qc=1013,vi=1014,jn=1015,xi=1016,jc=1017,eu=1018,Kr=1020,of=35902,lf=35899,cf=1021,uf=1022,ei=1023,Oi=1026,ps=1027,tu=1028,nu=1029,ws=1030,iu=1031,su=1033,ja=33776,eo=33777,to=33778,no=33779,Zl=35840,Jl=35841,Ql=35842,jl=35843,ec=36196,tc=37492,nc=37496,ic=37488,sc=37489,uo=37490,rc=37491,ac=37808,oc=37809,lc=37810,cc=37811,uc=37812,hc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,_c=37819,vc=37820,xc=37821,Mc=36492,yc=36494,Sc=36495,bc=36283,wc=36284,ho=36285,Ec=36286,Fm=3200,Tc=0,Om=1,Zi="",cn="srgb",fo="srgb-linear",po="linear",St="srgb",Zo=7680,Bm=519,km=512,zm=513,Gm=514,ru=515,Hm=516,Vm=517,au=518,Wm=519,hf=35044,ah="300 es",di=2e3,Zr=2001;function Xm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $m(){const i=mo("canvas");return i.style.display="block",i}const oh={};function go(...i){const e="THREE."+i.shift();console.log(e,...i)}function df(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=df(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=df(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sr(...i){const e=i.join(" ");e in oh||(oh[e]=!0,Ke(...i))}function Ym(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qm={[Gl]:Hl,[Vl]:$l,[Wl]:Yl,[Yr]:Xl,[Hl]:Gl,[$l]:Vl,[Yl]:Wl,[Xl]:Yr};class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const Br=Math.PI/180,Jr=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function ou(i,e){return(i%e+e)%e}function Km(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zm(i,e,t){return i!==e?(t-i)/(e-i):0}function kr(i,e,t){return(1-t)*i+t*e}function Jm(i,e,t,n){return kr(i,e,1-Math.exp(-t*n))}function Qm(i,e=1){return e-Math.abs(ou(i,e*2)-e)}function jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function t0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function n0(i,e){return i+Math.random()*(e-i)}function i0(i){return i*(.5-Math.random())}function s0(i){i!==void 0&&(lh=i);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(i){return i*Br}function a0(i){return i*Jr}function o0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function l0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function u0(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const h0={DEG2RAD:Br,RAD2DEG:Jr,generateUUID:mi,clamp:nt,euclideanModulo:ou,mapLinear:Km,inverseLerp:Zm,lerp:kr,damp:Jm,pingpong:Qm,smoothstep:jm,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:a0,isPowerOfTwo:o0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:u0,normalize:bt,denormalize:Qn},wu=class wu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wu.prototype.isVector2=!0;let he=wu;class yi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Eu=class Eu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eu.prototype.isVector3=!0;let L=Eu;const Jo=new L,ch=new yi,Tu=class Tu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],T=s[4],M=s[7],E=s[2],w=s[5],R=s[8];return r[0]=a*_+o*y+l*E,r[3]=a*m+o*T+l*w,r[6]=a*p+o*M+l*R,r[1]=c*_+u*y+d*E,r[4]=c*m+u*T+d*w,r[7]=c*p+u*M+d*R,r[2]=h*_+f*y+g*E,r[5]=h*m+f*T+g*w,r[8]=h*p+f*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tu.prototype.isMatrix3=!0;let Qe=Tu;const Qo=new Qe,uh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){const i={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fo]:{primaries:e,whitePoint:n,transfer:po,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:St,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const ct=d0();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ns;class f0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=mo("canvas")),Ns.width=e.width,Ns.height=e.height;const s=Ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p0=0;class lu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?f0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let m0=0;const el=new L;class dn extends Rs{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Li,s=Li,r=un,a=fs,o=ei,l=Dn,c=dn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=mi(),this.name="",this.source=new lu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ql:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ql:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=sf;dn.DEFAULT_ANISOTROPY=1;const Au=class Au{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(f+1)/2,E=(p+1)/2,w=(u+h)/4,R=(d+_)/4,x=(g+m)/4;return T>M&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=R/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Au.prototype.isVector4=!0;let Dt=Au;class g0 extends Rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new lu(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends g0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ff extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _0 extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wo=class wo{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,x0)}lookAt(e,t,n){const s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Wi.crossVectors(n,An),Wi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Wi.crossVectors(n,An)),Wi.normalize(),xa.crossVectors(An,Wi),s[0]=Wi.x,s[4]=xa.x,s[8]=An.x,s[1]=Wi.y,s[5]=xa.y,s[9]=An.y,s[2]=Wi.z,s[6]=xa.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],T=n[7],M=n[11],E=n[15],w=s[0],R=s[4],x=s[8],A=s[12],P=s[1],D=s[5],O=s[9],W=s[13],U=s[2],z=s[6],q=s[10],Y=s[14],oe=s[3],K=s[7],te=s[11],re=s[15];return r[0]=a*w+o*P+l*U+c*oe,r[4]=a*R+o*D+l*z+c*K,r[8]=a*x+o*O+l*q+c*te,r[12]=a*A+o*W+l*Y+c*re,r[1]=u*w+d*P+h*U+f*oe,r[5]=u*R+d*D+h*z+f*K,r[9]=u*x+d*O+h*q+f*te,r[13]=u*A+d*W+h*Y+f*re,r[2]=g*w+_*P+m*U+p*oe,r[6]=g*R+_*D+m*z+p*K,r[10]=g*x+_*O+m*q+p*te,r[14]=g*A+_*W+m*Y+p*re,r[3]=y*w+T*P+M*U+E*oe,r[7]=y*R+T*D+M*z+E*K,r[11]=y*x+T*O+M*q+E*te,r[15]=y*A+T*W+M*Y+E*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*h,T=o*f-c*d,M=o*h-l*d,E=a*f-c*u,w=a*h-l*u,R=a*d-o*u;return t*(_*y-m*T+p*M)-n*(g*y-m*E+p*w)+s*(g*T-_*E+p*R)-r*(g*M-_*w+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*o-n*a,T=t*l-s*a,M=t*c-r*a,E=n*l-s*o,w=n*c-r*o,R=s*c-r*l,x=u*_-d*g,A=u*m-h*g,P=u*p-f*g,D=d*m-h*_,O=d*p-f*_,W=h*p-f*m,U=y*W-T*O+M*D+E*P-w*A+R*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/U;return e[0]=(o*W-l*O+c*D)*z,e[1]=(s*O-n*W-r*D)*z,e[2]=(_*R-m*w+p*E)*z,e[3]=(h*w-d*R-f*E)*z,e[4]=(l*P-a*W-c*A)*z,e[5]=(t*W-s*P+r*A)*z,e[6]=(m*M-g*R-p*T)*z,e[7]=(u*R-h*M+f*T)*z,e[8]=(a*O-o*P+c*x)*z,e[9]=(n*P-t*O-r*x)*z,e[10]=(g*w-_*M+p*y)*z,e[11]=(d*M-u*w-f*y)*z,e[12]=(o*A-a*D-l*x)*z,e[13]=(t*D-n*A+s*x)*z,e[14]=(_*T-g*E-m*y)*z,e[15]=(u*E-d*T+h*y)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,_=a*u,m=a*d,p=o*d,y=l*c,T=l*u,M=l*d,E=n.x,w=n.y,R=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+M)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(h+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+T)*R,s[9]=(m-y)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);const c=1/a,u=1/o,d=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=di,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===di)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Zr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=di,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===di)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Zr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wo.prototype.isMatrix4=!0;let ht=wo;const Us=new L,Kn=new ht,v0=new L(0,0,0),x0=new L(1,1,1),Wi=new L,xa=new L,An=new L,dh=new ht,fh=new yi;class ni{constructor(e=0,t=0,n=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M0=0;const ph=new L,Fs=new yi,wi=new ht,Ma=new L,yr=new L,y0=new L,S0=new yi,mh=new L(1,0,0),gh=new L(0,1,0),_h=new L(0,0,1),vh={type:"added"},b0={type:"removed"},Os={type:"childadded",child:null},tl={type:"childremoved",child:null};class Jt extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new L,t=new ni,n=new yi,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ma.copy(e):Ma.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(yr,Ma,this.up):wi.lookAt(Ma,yr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(wi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vh),Os.child=e,this.dispatchEvent(Os),Os.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b0),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vh),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jt.DEFAULT_UP=new L(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fi extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w0={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=ou(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ct.workingToColorSpace(ln.copy(this),e),Math.round(nt(ln.r*255,0,255))*65536+Math.round(nt(ln.g*255,0,255))*256+Math.round(nt(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(ln.copy(this),t);const n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){ct.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ya);const n=kr(Xi.h,ya.h,t),s=kr(Xi.s,ya.s,t),r=kr(Xi.l,ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ke;ke.NAMES=pf;class xh extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new L,Ei=new L,sl=new L,Ti=new L,Bs=new L,ks=new L,Mh=new L,rl=new L,al=new L,ol=new L,ll=new Dt,cl=new Dt,ul=new Dt;class Vn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Ei.subVectors(n,t),sl.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(Ei),l=Zn.dot(sl),c=Ei.dot(Ei),u=Ei.dot(sl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ll.setScalar(0),cl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ll,r.x),a.addScaledVector(cl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Ei.subVectors(e,t),Zn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Zn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Bs.subVectors(s,n),ks.subVectors(r,n),rl.subVectors(e,n);const l=Bs.dot(rl),c=ks.dot(rl);if(l<=0&&c<=0)return t.copy(n);al.subVectors(e,s);const u=Bs.dot(al),d=ks.dot(al);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Bs,a);ol.subVectors(e,r);const f=Bs.dot(ol),g=ks.dot(ol);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ks,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Mh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Mh,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Bs,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ns{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ba.subVectors(this.max,Sr),zs.subVectors(e.a,Sr),Gs.subVectors(e.b,Sr),Hs.subVectors(e.c,Sr),$i.subVectors(Gs,zs),Yi.subVectors(Hs,Gs),rs.subVectors(zs,Hs);let t=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-rs.z,rs.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,rs.z,0,-rs.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-rs.y,rs.x,0];return!hl(t,zs,Gs,Hs,ba)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,zs,Gs,Hs,ba))?!1:(wa.crossVectors($i,Yi),t=[wa.x,wa.y,wa.z],hl(t,zs,Gs,Hs,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,Sa=new ns,zs=new L,Gs=new L,Hs=new L,$i=new L,Yi=new L,rs=new L,Sr=new L,ba=new L,wa=new L,as=new L;function hl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){as.fromArray(i,r);const o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=n.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zt=new L,Ea=new he;let E0=0;class vn extends Rs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hf,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class mf extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gf extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const T0=new ns,br=new L,dl=new L;class ha{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):T0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(dl)),this.expandByPoint(br.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A0=0;const zn=new ht,fl=new Jt,Vs=new L,Cn=new ns,wr=new ns,Yt=new L;class Gt extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xm(e)?gf:mf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Cn.min,wr.min),Cn.expandByPoint(Yt),Yt.addVectors(Cn.max,wr.max),Cn.expandByPoint(Yt)):(Cn.expandByPoint(wr.min),Cn.expandByPoint(wr.max))}Cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Yt.add(Vs)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new L,l[x]=new L;const c=new L,u=new L,d=new L,h=new he,f=new he,g=new he,_=new L,m=new L;function p(x,A,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[x].add(_),o[A].add(_),o[P].add(_),l[x].add(m),l[A].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,A=y.length;x<A;++x){const P=y[x],D=P.start,O=P.count;for(let W=D,U=D+O;W<U;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new L,M=new L,E=new L,w=new L;function R(x){E.fromBufferAttribute(s,x),w.copy(E);const A=o[x];T.copy(A),T.sub(E.multiplyScalar(E.dot(A))).normalize(),M.crossVectors(w,A);const D=M.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,D)}for(let x=0,A=y.length;x<A;++x){const P=y[x],D=P.start,O=P.count;for(let W=D,U=D+O;W<U;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new vn(h,u,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class C0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hf,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const mn=new L;class _o{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _o(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pl=new L,R0=new L,P0=new Qe;class Pi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pl.subVectors(n,t).cross(R0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||P0.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let L0=0;class Ps extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Or,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Kd,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _f extends Ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ws;const Er=new L,Xs=new L,$s=new L,Ys=new he,Tr=new he,vf=new ht,Ta=new L,Ar=new L,Aa=new L,yh=new he,ml=new he,Sh=new he;class I0 extends Jt{constructor(e=new _f){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new C0(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new _o(n,3,0,!1)),Ws.setAttribute("uv",new _o(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-$s.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ca(Ta.set(-.5,-.5,0),$s,a,Xs,s,r),Ca(Ar.set(.5,-.5,0),$s,a,Xs,s,r),Ca(Aa.set(.5,.5,0),$s,a,Xs,s,r),yh.set(0,0),ml.set(1,0),Sh.set(1,1);let o=e.ray.intersectTriangle(Ta,Ar,Aa,!1,Er);if(o===null&&(Ca(Ar.set(-.5,.5,0),$s,a,Xs,s,r),ml.set(0,1),o=e.ray.intersectTriangle(Ta,Aa,Ar,!1,Er),o===null))return;const l=e.ray.origin.distanceTo(Er);l<e.near||l>e.far||t.push({distance:l,point:Er.clone(),uv:Vn.getInterpolation(Er,Ta,Ar,Aa,yh,ml,Sh,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ca(i,e,t,n,s,r){Ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Tr.x=r*Ys.x-s*Ys.y,Tr.y=s*Ys.x+r*Ys.y):Tr.copy(Ys),i.copy(e),i.x+=Tr.x,i.y+=Tr.y,i.applyMatrix4(vf)}const Ci=new L,gl=new L,Ra=new L,Pa=new L;class xf{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gl.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(gl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ra),o=Pa.dot(this.direction),l=-Pa.dot(Ra),c=Pa.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gl).addScaledVector(Ra,h),f}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,T=n.z-a.z,M=Math.abs(l),E=Math.abs(c),w=Math.abs(u);let R,x,A,P,D,O,W,U,z,q,Y,oe;if(M>=E&&M>=w?(A=l,O=d,z=g,oe=p,l>=0?(R=c,x=u,P=h,D=f,W=_,U=m,q=y,Y=T):(R=u,x=c,P=f,D=h,W=m,U=_,q=T,Y=y)):E>=w?(A=c,O=h,z=_,oe=y,c>=0?(R=u,x=l,P=f,D=d,W=m,U=g,q=T,Y=p):(R=l,x=u,P=d,D=f,W=g,U=m,q=p,Y=T)):(A=u,O=f,z=m,oe=T,u>=0?(R=l,x=c,P=d,D=h,W=g,U=_,q=p,Y=y):(R=c,x=l,P=h,D=d,W=_,U=g,q=y,Y=p)),A===0)return null;const K=R/A,te=x/A,re=1/A,Ue=P-K*O,Pe=D-te*O,mt=W-K*z,st=U-te*z,dt=q-K*oe,Q=Y-te*oe,ne=dt*st-Q*mt,be=Ue*Q-Pe*dt,Xe=mt*Pe-st*Ue;if(s){if(ne<0||be<0||Xe<0)return null}else if((ne<0||be<0||Xe<0)&&(ne>0||be>0||Xe>0))return null;const Ae=ne+be+Xe;if(Ae===0)return null;const $e=re*(ne*O+be*z+Xe*oe);return(Ae>0?$e<0:$e>0)?null:this.at($e/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bh=new ht,os=new xf,La=new ha,wh=new L,Ia=new L,Da=new L,Na=new L,_l=new L,Ua=new L,Eh=new L,Fa=new L;class Lt extends Jt{constructor(e=new Gt,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(_l.fromBufferAttribute(d,e),a?Ua.addScaledVector(_l,u):Ua.addScaledVector(_l.sub(t),u))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(La.containsPoint(os.origin)===!1&&(os.intersectSphere(La,wh)===null||os.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(bh.copy(r).invert(),os.copy(e.ray).applyMatrix4(bh),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=T;M<E;M+=3){const w=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);s=Oa(this,p,e,n,c,u,d,w,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=Oa(this,a,e,n,c,u,d,y,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=T;M<E;M+=3){const w=M,R=M+1,x=M+2;s=Oa(this,p,e,n,c,u,d,w,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,T=m+1,M=m+2;s=Oa(this,a,e,n,c,u,d,y,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function D0(i,e,t,n,s,r,a,o){let l;if(e.side===wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ss,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:i}}function Oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ia),i.getVertexPosition(l,Da),i.getVertexPosition(c,Na);const u=D0(i,e,t,n,Ia,Da,Na,Eh);if(u){const d=new L;Vn.getBarycoord(Eh,Ia,Da,Na,d),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,l,c,d,new he)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,l,c,d,new he)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};Vn.getNormal(Ia,Da,Na,h.normal),u.face=h,u.barycoord=d}return u}class Mf extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=rn,u=rn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qs=new ht,Ah=new ht,Ba=[],Ch=new ns,N0=new ht,Cr=new Lt,Rr=new ha;class Rh extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Th(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,N0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Ch.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(Ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ha),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Rr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Ah.multiplyMatrices(n,qs),Cr.matrixWorld=Ah,Cr.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){const l=Ba[a];l.instanceId=r,l.object=this,t.push(l)}Ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Th(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mf(new Float32Array(s*this.count),s,this.count,tu,jn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ls=new ha,U0=new he(.5,.5),ka=new L;class uu{constructor(e=new Pi,t=new Pi,n=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],T=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,p-g,E-y).normalize(),s[1].setComponents(c+a,f+u,p+g,E+y).normalize(),s[2].setComponents(c+o,f+d,p+_,E+T).normalize(),s[3].setComponents(c-o,f-d,p-_,E-T).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,f-h,p-m,E-M).normalize();else if(s[4].setComponents(c-l,f-h,p-m,E-M).normalize(),t===di)s[5].setComponents(c+l,f+h,p+m,E+M).normalize();else if(t===Zr)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=U0.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yf extends dn{constructor(e=[],t=bs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ro extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qr extends dn{constructor(e,t,n=vi,s,r,a,o=rn,l=rn,c,u=Oi,d=1){if(u!==Oi&&u!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class F0 extends Qr{constructor(e,t=vi,n=bs,s,r,a=rn,o=rn,l,c=Oi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sf extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ii extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function g(_,m,p,y,T,M,E,w,R,x,A){const P=M/R,D=E/x,O=M/2,W=E/2,U=w/2,z=R+1,q=x+1;let Y=0,oe=0;const K=new L;for(let te=0;te<q;te++){const re=te*D-W;for(let Ue=0;Ue<z;Ue++){const Pe=Ue*P-O;K[_]=Pe*y,K[m]=re*T,K[p]=U,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=w>0?1:-1,u.push(K.x,K.y,K.z),d.push(Ue/R),d.push(1-te/x),Y+=1}}for(let te=0;te<x;te++)for(let re=0;re<R;re++){const Ue=h+re+z*te,Pe=h+re+z*(te+1),mt=h+(re+1)+z*(te+1),st=h+(re+1)+z*te;l.push(Ue,Pe,st),l.push(Pe,mt,st),oe+=6}o.addGroup(f,oe,A),f+=oe,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vo extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new L,u=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ls extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function y(){const M=new L,E=new L;let w=0;const R=(t-e)/n;for(let x=0;x<=r;x++){const A=[],P=x/r,D=P*(t-e)+e;for(let O=0;O<=s;O++){const W=O/s,U=W*l+o,z=Math.sin(U),q=Math.cos(U);E.x=D*z,E.y=-P*n+m,E.z=D*q,d.push(E.x,E.y,E.z),M.set(z,R,q).normalize(),h.push(M.x,M.y,M.z),f.push(W,1-P),A.push(g++)}_.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){const P=_[A][x],D=_[A+1][x],O=_[A+1][x+1],W=_[A][x+1];(e>0||A!==0)&&(u.push(P,D,W),w+=3),(t>0||A!==r-1)&&(u.push(D,O,W),w+=3)}c.addGroup(p,w,0),p+=w}function T(M){const E=g,w=new he,R=new L;let x=0;const A=M===!0?e:t,P=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const U=O/s*l+o,z=Math.cos(U),q=Math.sin(U);R.x=A*q,R.y=m*P,R.z=A*z,d.push(R.x,R.y,R.z),h.push(0,P,0),w.x=z*.5+.5,w.y=q*.5*P+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){const W=E+O,U=D+O;M===!0?u.push(U,U+1,W):u.push(U+1,U,W),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends Ls{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new jr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _r extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new L,M=new L,E=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],M),f(t[w+2],E),l(T,M,E,y)}function l(y,T,M,E){const w=E+1,R=[];for(let x=0;x<=w;x++){R[x]=[];const A=y.clone().lerp(M,x/w),P=T.clone().lerp(M,x/w),D=w-x;for(let O=0;O<=D;O++)O===0&&x===w?R[x][O]=A:R[x][O]=A.clone().lerp(P,O/D)}for(let x=0;x<w;x++)for(let A=0;A<2*(w-x)-1;A++){const P=Math.floor(A/2);A%2===0?(h(R[x][P+1]),h(R[x+1][P]),h(R[x][P])):(h(R[x][P+1]),h(R[x+1][P+1]),h(R[x+1][P]))}}function c(y){const T=new L;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(y),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function u(){const y=new L;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const M=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(M,1-E)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const T=a[y+0],M=a[y+2],E=a[y+4],w=Math.max(T,M,E),R=Math.min(T,M,E);w>.9&&R<.1&&(T<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,T){const M=y*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function g(){const y=new L,T=new L,M=new L,E=new L,w=new he,R=new he,x=new he;for(let A=0,P=0;A<r.length;A+=9,P+=6){y.set(r[A+0],r[A+1],r[A+2]),T.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),w.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),E.copy(y).add(T).add(M).divideScalar(3);const D=m(E);_(w,P+0,y,D),_(R,P+2,T,D),_(x,P+4,M,D)}}function _(y,T,M,E){E<0&&y.x===1&&(a[T]=y.x-1),M.x===0&&M.z===0&&(a[T]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.vertices,e.indices,e.radius,e.detail)}}class hu extends _r{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hu(e.radius,e.detail)}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],a=[],o=new L,l=new ht;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class du extends Si{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class O0 extends du{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ph=new L,Lh=new L,vl=new fu,xl=new fu,Ml=new fu;class B0 extends Si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Lh.subVectors(s[0],s[1]).add(s[0]),c=Lh);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ph.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ph),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),xl.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),Ml.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),xl.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ml.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(vl.calc(l),xl.calc(l),Ml.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ih(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function k0(i,e){const t=1-i;return t*t*e}function z0(i,e){return 2*(1-i)*i*e}function G0(i,e){return i*i*e}function zr(i,e,t,n){return k0(i,e)+z0(i,t)+G0(i,n)}function H0(i,e){const t=1-i;return t*t*t*e}function V0(i,e){const t=1-i;return 3*t*t*i*e}function W0(i,e){return 3*(1-i)*i*i*e}function X0(i,e){return i*i*i*e}function Gr(i,e,t,n,s){return H0(i,e)+V0(i,t)+W0(i,n)+X0(i,s)}class bf extends Si{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,s.x,r.x,a.x,o.x),Gr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $0 extends Si{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,s.x,r.x,a.x,o.x),Gr(e,s.y,r.y,a.y,o.y),Gr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wf extends Si{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends Si{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ef extends Si{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q0 extends Si{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y),zr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tf extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ih(o,l.x,c.x,u.x,d.x),Ih(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var Ac=Object.freeze({__proto__:null,ArcCurve:O0,CatmullRomCurve3:B0,CubicBezierCurve:bf,CubicBezierCurve3:$0,EllipseCurve:du,LineCurve:wf,LineCurve3:Y0,QuadraticBezierCurve:Ef,QuadraticBezierCurve3:q0,SplineCurve:Tf});class K0 extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ac[s.type]().fromJSON(s))}return this}}class Dh extends K0{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wf(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ef(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new bf(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Tf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new du(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pu extends Dh{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Dh().fromJSON(s))}return this}}function Z0(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Af(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=tg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){const f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ea(r,a,t,o,l,c,0),a}function Af(i,e,t,n,s){let r;if(s===dg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Nh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Nh(a/n|0,i[a],i[a+1],r);return r&&fr(r,r.next)&&(na(r),r=r.next),r}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fr(t,t.next)||Nt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ea(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ag(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Q0(i,n,s,r):J0(i)){e.push(l.i,i.i,c.i),na(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=j0(Es(i),e),ea(i,e,t,n,s,r,2)):a===2&&eg(i,e,t,n,s,r):ea(Es(i),e,t,n,s,r,1);break}}}function J0(i){const e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Dr(s,o,r,l,a,c,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q0(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Nt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),_=Math.max(o,l,c),m=Math.max(u,d,h),p=Cc(f,g,e,t,n),y=Cc(_,m,e,t,n);let T=i.prevZ,M=i.nextZ;for(;T&&T.z>=p&&M&&M.z<=y;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Dr(o,u,l,d,c,h,T.x,T.y)&&Nt(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Dr(o,u,l,d,c,h,M.x,M.y)&&Nt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Dr(o,u,l,d,c,h,T.x,T.y)&&Nt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Dr(o,u,l,d,c,h,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function j0(i,e){let t=i;do{const n=t.prev,s=t.next.next;!fr(n,s)&&Rf(n,t,t.next,s)&&ta(n,s)&&ta(s,n)&&(e.push(n.i,t.i,s.i),na(t),na(t.next),t=i=s),t=t.next}while(t!==i);return Es(t)}function eg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cg(a,o)){let l=Pf(a,o);a=Es(a,a.next),l=Es(l,l.next),ea(a,e,t,n,s,r,0),ea(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tg(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Af(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lg(c))}s.sort(ng);for(let r=0;r<s.length;r++)t=ig(s[r],t);return t}function ng(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ig(i,e){const t=sg(i,e);if(!t)return e;const n=Pf(t,i);return Es(n,n.next),Es(t,t.next)}function sg(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(fr(i,t))return t;do{if(fr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Cf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);ta(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&rg(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function rg(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function ag(i,e,t,n){let s=i;do s.z===0&&(s.z=Cc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,og(s)}function og(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Cc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Cf(i,e,t,n,s,r,a,o)}function cg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ug(i,e)&&(ta(i,e)&&ta(e,i)&&hg(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||fr(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fr(i,e){return i.x===e.x&&i.y===e.y}function Rf(i,e,t,n){const s=Ga(Nt(i,e,t)),r=Ga(Nt(i,e,n)),a=Ga(Nt(t,n,i)),o=Ga(Nt(t,n,e));return!!(s!==r&&a!==o||s===0&&za(i,t,e)||r===0&&za(i,n,e)||a===0&&za(t,i,n)||o===0&&za(t,e,n))}function za(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ga(i){return i>0?1:i<0?-1:0}function ug(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ta(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function hg(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Pf(i,e){const t=Rc(i.i,i.x,i.y),n=Rc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(i,e,t,n){const s=Rc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class fg{static triangulate(e,t,n=2){return Z0(e,t,n)}}class tr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return tr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Uh(e),Fh(n,e);let a=e.length;t.forEach(Uh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Fh(n,t[l]);const o=fg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Uh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Po extends Gt{constructor(e=new pu([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:pg;let T,M=!1,E,w,R,x;if(p){T=p.getSpacedPoints(u),M=!0,h=!1;const ie=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,ie),w=new L,R=new L,x=new L}h||(m=0,f=0,g=0,_=0);const A=o.extractPoints(c);let P=A.shape;const D=A.holes;if(!tr.isClockWise(P)){P=P.reverse();for(let ie=0,le=D.length;ie<le;ie++){const ce=D[ie];tr.isClockWise(ce)&&(D[ie]=ce.reverse())}}function W(ie){const ce=10000000000000001e-36;let ue=ie[0];for(let me=1;me<=ie.length;me++){const He=me%ie.length,ze=ie[He],Ye=ze.x-ue.x,Je=ze.y-ue.y,I=Ye*Ye+Je*Je,_t=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ue.x),Math.abs(ue.y)),rt=ce*_t*_t;if(I<=rt){ie.splice(He,1),me--;continue}ue=ze}}W(P),D.forEach(W);const U=D.length,z=P;for(let ie=0;ie<U;ie++){const le=D[ie];P=P.concat(le)}function q(ie,le,ce){return le||lt("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(le,ce)}const Y=P.length;function oe(ie,le,ce){let ue,me,He;const ze=ie.x-le.x,Ye=ie.y-le.y,Je=ce.x-ie.x,I=ce.y-ie.y,_t=ze*ze+Ye*Ye,rt=ze*I-Ye*Je;if(Math.abs(rt)>Number.EPSILON){const C=Math.sqrt(_t),v=Math.sqrt(Je*Je+I*I),B=le.x-Ye/C,V=le.y+ze/C,Z=ce.x-I/v,de=ce.y+Je/v,pe=((Z-B)*I-(de-V)*Je)/(ze*I-Ye*Je);ue=B+ze*pe-ie.x,me=V+Ye*pe-ie.y;const J=ue*ue+me*me;if(J<=2)return new he(ue,me);He=Math.sqrt(J/2)}else{let C=!1;ze>Number.EPSILON?Je>Number.EPSILON&&(C=!0):ze<-Number.EPSILON?Je<-Number.EPSILON&&(C=!0):Math.sign(Ye)===Math.sign(I)&&(C=!0),C?(ue=-Ye,me=ze,He=Math.sqrt(_t)):(ue=ze,me=Ye,He=Math.sqrt(_t/2))}return new he(ue/He,me/He)}const K=[];for(let ie=0,le=z.length,ce=le-1,ue=ie+1;ie<le;ie++,ce++,ue++)ce===le&&(ce=0),ue===le&&(ue=0),K[ie]=oe(z[ie],z[ce],z[ue]);const te=[];let re,Ue=K.concat();for(let ie=0,le=U;ie<le;ie++){const ce=D[ie];re=[];for(let ue=0,me=ce.length,He=me-1,ze=ue+1;ue<me;ue++,He++,ze++)He===me&&(He=0),ze===me&&(ze=0),re[ue]=oe(ce[ue],ce[He],ce[ze]);te.push(re),Ue=Ue.concat(re)}let Pe;if(m===0)Pe=tr.triangulateShape(z,D);else{const ie=[],le=[];for(let ce=0;ce<m;ce++){const ue=ce/m,me=f*Math.cos(ue*Math.PI/2),He=g*Math.sin(ue*Math.PI/2)+_;for(let ze=0,Ye=z.length;ze<Ye;ze++){const Je=q(z[ze],K[ze],He);be(Je.x,Je.y,-me),ue===0&&ie.push(Je)}for(let ze=0,Ye=U;ze<Ye;ze++){const Je=D[ze];re=te[ze];const I=[];for(let _t=0,rt=Je.length;_t<rt;_t++){const C=q(Je[_t],re[_t],He);be(C.x,C.y,-me),ue===0&&I.push(C)}ue===0&&le.push(I)}}Pe=tr.triangulateShape(ie,le)}const mt=Pe.length,st=g+_;for(let ie=0;ie<Y;ie++){const le=h?q(P[ie],Ue[ie],st):P[ie];M?(R.copy(E.normals[0]).multiplyScalar(le.x),w.copy(E.binormals[0]).multiplyScalar(le.y),x.copy(T[0]).add(R).add(w),be(x.x,x.y,x.z)):be(le.x,le.y,0)}for(let ie=1;ie<=u;ie++)for(let le=0;le<Y;le++){const ce=h?q(P[le],Ue[le],st):P[le];M?(R.copy(E.normals[ie]).multiplyScalar(ce.x),w.copy(E.binormals[ie]).multiplyScalar(ce.y),x.copy(T[ie]).add(R).add(w),be(x.x,x.y,x.z)):be(ce.x,ce.y,d/u*ie)}for(let ie=m-1;ie>=0;ie--){const le=ie/m,ce=f*Math.cos(le*Math.PI/2),ue=g*Math.sin(le*Math.PI/2)+_;for(let me=0,He=z.length;me<He;me++){const ze=q(z[me],K[me],ue);be(ze.x,ze.y,d+ce)}for(let me=0,He=D.length;me<He;me++){const ze=D[me];re=te[me];for(let Ye=0,Je=ze.length;Ye<Je;Ye++){const I=q(ze[Ye],re[Ye],ue);M?be(I.x,I.y+T[u-1].y,T[u-1].x+ce):be(I.x,I.y,d+ce)}}}dt(),Q();function dt(){const ie=s.length/3;if(h){let le=0,ce=Y*le;for(let ue=0;ue<mt;ue++){const me=Pe[ue];Xe(me[2]+ce,me[1]+ce,me[0]+ce)}le=u+m*2,ce=Y*le;for(let ue=0;ue<mt;ue++){const me=Pe[ue];Xe(me[0]+ce,me[1]+ce,me[2]+ce)}}else{for(let le=0;le<mt;le++){const ce=Pe[le];Xe(ce[2],ce[1],ce[0])}for(let le=0;le<mt;le++){const ce=Pe[le];Xe(ce[0]+Y*u,ce[1]+Y*u,ce[2]+Y*u)}}n.addGroup(ie,s.length/3-ie,0)}function Q(){const ie=s.length/3;let le=0;ne(z,le),le+=z.length;for(let ce=0,ue=D.length;ce<ue;ce++){const me=D[ce];ne(me,le),le+=me.length}n.addGroup(ie,s.length/3-ie,1)}function ne(ie,le){let ce=ie.length;for(;--ce>=0;){const ue=ce;let me=ce-1;me<0&&(me=ie.length-1);for(let He=0,ze=u+m*2;He<ze;He++){const Ye=Y*He,Je=Y*(He+1),I=le+ue+Ye,_t=le+me+Ye,rt=le+me+Je,C=le+ue+Je;Ae(I,_t,rt,C)}}}function be(ie,le,ce){l.push(ie),l.push(le),l.push(ce)}function Xe(ie,le,ce){$e(ie),$e(le),$e(ce);const ue=s.length/3,me=y.generateTopUV(n,s,ue-3,ue-2,ue-1);yt(me[0]),yt(me[1]),yt(me[2])}function Ae(ie,le,ce,ue){$e(ie),$e(le),$e(ue),$e(le),$e(ce),$e(ue);const me=s.length/3,He=y.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);yt(He[0]),yt(He[1]),yt(He[3]),yt(He[1]),yt(He[2]),yt(He[3])}function $e(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function yt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ac[s.type]().fromJSON(s)),new Po(n,e.options)}}const pg={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-d),new he(h,1-g),new he(_,1-p)]:[new he(o,1-l),new he(u,1-d),new he(f,1-g),new he(m,1-p)]}};function mg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mu extends _r{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mu(e.radius,e.detail)}}class Hr extends _r{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hr(e.radius,e.detail)}}class Ts extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let T=0;T<c;T++){const M=T*d-r;g.push(M,-y,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,M=y+c*(p+1),E=y+1+c*(p+1),w=y+1+c*p;f.push(T,M,w),f.push(M,E,w)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vr extends Gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new L,g=new he;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,T=y,M=y+n+1,E=y+n+2,w=y+1;o.push(T,M,w),o.push(M,E,w)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gu extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new L,h=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],T=p/n,M=a+T*o,E=e*Math.cos(M),w=Math.sqrt(e*e-E*E);let R=0;p===0&&a===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){const A=x/t,P=s+A*r;d.x=-w*Math.cos(P),d.y=E,d.z=w*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(A+R,1-T),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const T=u[p][y+1],M=u[p][y],E=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&f.push(T,M,w),(p!==n-1||l<Math.PI)&&f.push(M,E,w)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _u extends _r{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _u(e.radius,e.detail)}}class ia extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new L,f=new L,g=new L;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,T=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(p,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class gg extends Ps{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Oh(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Oh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){const e={};for(let t=0;t<i.length;t++){const n=pr(i[t]);for(const s in n)e[s]=n[s]}return e}function Oh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _g(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const vg={clone:pr,merge:gn};var xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=_g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yg extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xo extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sg extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bg extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class If extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Bh extends If{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const yl=new ht,kh=new L,zh=new L;class wg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uu,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Zr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ha=new L,Va=new yi,ai=new L;class Df extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,Va,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Va,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ha,Va,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Va,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new L,Gh=new he,Hh=new he;class Gn extends Df{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Hh),t.subVectors(Hh,Gh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sa extends Df{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Eg extends wg{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wa extends If{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Eg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ks=-90,Zs=1;class Tg extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const r=new Gn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const a=new Gn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const o=new Gn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const l=new Gn(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const c=new Gn(Ks,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ag extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vh=new ht;class Cg{constructor(e,t,n=0,s=1/0){this.ray=new xf(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(Wh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Pc(e[s],this,n,t);return n.sort(Wh),n}}function Wh(i,e){return i.distance-e.distance}function Pc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Pc(r[a],e,t,!0)}}const Cu=class Cu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Cu.prototype.isMatrix2=!0;let Xh=Cu;function $h(i,e,t,n){const s=Rg(n);switch(t){case cf:return i*e;case tu:return i*e/s.components*s.byteLength;case nu:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case iu:return i*e*2/s.components*s.byteLength;case uf:return i*e*3/s.components*s.byteLength;case ei:return i*e*4/s.components*s.byteLength;case su:return i*e*4/s.components*s.byteLength;case ja:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:case jl:return Math.max(i,16)*Math.max(e,8)/4;case Zl:case Ql:return Math.max(i,8)*Math.max(e,8)/2;case ec:case tc:case ic:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nc:case uo:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mc:case yc:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ho:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rg(i){switch(i){case Dn:case rf:return{byteLength:1,components:1};case qr:case af:case xi:return{byteLength:2,components:1};case jc:case eu:return{byteLength:2,components:4};case vi:case Qc:case jn:return{byteLength:4,components:1};case of:case lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);function Nf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pg(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kg=`#ifdef USE_BATCHING
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
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wg=`#ifdef USE_IRIDESCENCE
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
#endif`,Xg=`#ifdef USE_BUMPMAP
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,e_=`#define PI 3.141592653589793
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
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
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b_=`#ifdef USE_ENVMAP
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
#endif`,w_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C_=`PhysicalMaterial material;
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
#endif`,R_=`uniform sampler2D dfgLUT;
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
}`,P_=`
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
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
#endif`,tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gv=`float getShadowMask() {
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
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
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
}`,Bv=`#if DEPTH_PACKING == 3200
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
}`,kv=`#define DISTANCE
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
}`,zv=`#define DISTANCE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#include <common>
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
}`,$v=`uniform vec3 diffuse;
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
}`,Yv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Kv=`#define MATCAP
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
}`,Zv=`#define MATCAP
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
}`,Jv=`#define NORMAL
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
}`,Qv=`#define NORMAL
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
}`,jv=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,nx=`#define STANDARD
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
}`,ix=`#define TOON
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
}`,sx=`#define TOON
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
}`,rx=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,ux=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Lg,alphahash_pars_fragment:Ig,alphamap_fragment:Dg,alphamap_pars_fragment:Ng,alphatest_fragment:Ug,alphatest_pars_fragment:Fg,aomap_fragment:Og,aomap_pars_fragment:Bg,batching_pars_vertex:kg,batching_vertex:zg,begin_vertex:Gg,beginnormal_vertex:Hg,bsdfs:Vg,iridescence_fragment:Wg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:Yg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Kg,color_fragment:Zg,color_pars_fragment:Jg,color_pars_vertex:Qg,color_vertex:jg,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:s_,emissivemap_fragment:r_,emissivemap_pars_fragment:a_,colorspace_fragment:o_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:u_,envmap_pars_fragment:h_,envmap_pars_vertex:d_,envmap_physical_pars_fragment:b_,envmap_vertex:f_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:v_,lightmap_pars_fragment:x_,lights_lambert_fragment:M_,lights_lambert_pars_fragment:y_,lights_pars_begin:S_,lights_toon_fragment:w_,lights_toon_pars_fragment:E_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:C_,lights_physical_pars_fragment:R_,lights_fragment_begin:P_,lights_fragment_maps:L_,lights_fragment_end:I_,lightprobes_pars_fragment:D_,logdepthbuf_fragment:N_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:F_,logdepthbuf_vertex:O_,map_fragment:B_,map_pars_fragment:k_,map_particle_fragment:z_,map_particle_pars_fragment:G_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:V_,morphinstance_vertex:W_,morphcolor_vertex:X_,morphnormal_vertex:$_,morphtarget_pars_vertex:Y_,morphtarget_vertex:q_,normal_fragment_begin:K_,normal_fragment_maps:Z_,normal_pars_fragment:J_,normal_pars_vertex:Q_,normal_vertex:j_,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:tv,clearcoat_normal_fragment_maps:nv,clearcoat_pars_fragment:iv,iridescence_pars_fragment:sv,opaque_fragment:rv,packing:av,premultiplied_alpha_fragment:ov,project_vertex:lv,dithering_fragment:cv,dithering_pars_fragment:uv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:dv,shadowmap_pars_fragment:fv,shadowmap_pars_vertex:pv,shadowmap_vertex:mv,shadowmask_pars_fragment:gv,skinbase_vertex:_v,skinning_pars_vertex:vv,skinning_vertex:xv,skinnormal_vertex:Mv,specularmap_fragment:yv,specularmap_pars_fragment:Sv,tonemapping_fragment:bv,tonemapping_pars_fragment:wv,transmission_fragment:Ev,transmission_pars_fragment:Tv,uv_pars_fragment:Av,uv_pars_vertex:Cv,uv_vertex:Rv,worldpos_vertex:Pv,background_vert:Lv,background_frag:Iv,backgroundCube_vert:Dv,backgroundCube_frag:Nv,cube_vert:Uv,cube_frag:Fv,depth_vert:Ov,depth_frag:Bv,distance_vert:kv,distance_frag:zv,equirect_vert:Gv,equirect_frag:Hv,linedashed_vert:Vv,linedashed_frag:Wv,meshbasic_vert:Xv,meshbasic_frag:$v,meshlambert_vert:Yv,meshlambert_frag:qv,meshmatcap_vert:Kv,meshmatcap_frag:Zv,meshnormal_vert:Jv,meshnormal_frag:Qv,meshphong_vert:jv,meshphong_frag:ex,meshphysical_vert:tx,meshphysical_frag:nx,meshtoon_vert:ix,meshtoon_frag:sx,points_vert:rx,points_frag:ax,shadow_vert:ox,shadow_frag:lx,sprite_vert:cx,sprite_frag:ux},ye={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},li={basic:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:gn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:gn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:gn([ye.points,ye.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:gn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:gn([ye.common,ye.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:gn([ye.sprite,ye.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:gn([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:gn([ye.lights,ye.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};li.physical={uniforms:gn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Xa={r:0,b:0,g:0},hx=new ht,Uf=new Qe;Uf.set(-1,0,0,0,1,0,0,0,1);function dx(i,e,t,n,s,r){const a=new ke(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const M=y.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(y){let T=!1;const M=f(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===Co)?(c===void 0&&(c=new Lt(new ii(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:pr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Uf),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==St,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Lt(new Ts(2,2),new Mi({name:"BackgroundMaterial",uniforms:pr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(Xa,Lf(i)),t.buffers.color.setClear(Xa.r,Xa.g,Xa.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function fx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,O,W,U,z){let q=!1;const Y=d(D,U,W,O);r!==Y&&(r=Y,c(r.object)),q=f(D,U,W,z),q&&g(D,U,W,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(D,O,W,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,O,W,U){const z=U.wireframe===!0;let q=n[O.id];q===void 0&&(q={},n[O.id]=q);const Y=D.isInstancedMesh===!0?D.id:0;let oe=q[Y];oe===void 0&&(oe={},q[Y]=oe);let K=oe[W.id];K===void 0&&(K={},oe[W.id]=K);let te=K[z];return te===void 0&&(te=h(l()),K[z]=te),te}function h(D){const O=[],W=[],U=[];for(let z=0;z<t;z++)O[z]=0,W[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:U,object:D,attributes:{},index:null}}function f(D,O,W,U){const z=r.attributes,q=O.attributes;let Y=0;const oe=W.getAttributes();for(const K in oe)if(oe[K].location>=0){const re=z[K];let Ue=q[K];if(Ue===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Ue=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Ue=D.instanceColor)),re===void 0||re.attribute!==Ue||Ue&&re.data!==Ue.data)return!0;Y++}return r.attributesNum!==Y||r.index!==U}function g(D,O,W,U){const z={},q=O.attributes;let Y=0;const oe=W.getAttributes();for(const K in oe)if(oe[K].location>=0){let re=q[K];re===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const Ue={};Ue.attribute=re,re&&re.data&&(Ue.data=re.data),z[K]=Ue,Y++}r.attributes=z,r.attributesNum=Y,r.index=U}function _(){const D=r.newAttributes;for(let O=0,W=D.length;O<W;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){const W=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;W[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),z[D]!==O&&(i.vertexAttribDivisor(D,O),z[D]=O)}function y(){const D=r.newAttributes,O=r.enabledAttributes;for(let W=0,U=O.length;W<U;W++)O[W]!==D[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function T(D,O,W,U,z,q,Y){Y===!0?i.vertexAttribIPointer(D,O,W,z,q):i.vertexAttribPointer(D,O,W,U,z,q)}function M(D,O,W,U){_();const z=U.attributes,q=W.getAttributes(),Y=O.defaultAttributeValues;for(const oe in q){const K=q[oe];if(K.location>=0){let te=z[oe];if(te===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const re=te.normalized,Ue=te.itemSize,Pe=e.get(te);if(Pe===void 0)continue;const mt=Pe.buffer,st=Pe.type,dt=Pe.bytesPerElement,Q=st===i.INT||st===i.UNSIGNED_INT||te.gpuType===Qc;if(te.isInterleavedBufferAttribute){const ne=te.data,be=ne.stride,Xe=te.offset;if(ne.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)p(K.location+Ae,ne.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)m(K.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Ae=0;Ae<K.locationSize;Ae++)T(K.location+Ae,Ue/K.locationSize,st,re,be*dt,(Xe+Ue/K.locationSize*Ae)*dt,Q)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<K.locationSize;ne++)p(K.location+ne,te.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<K.locationSize;ne++)m(K.location+ne);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ne=0;ne<K.locationSize;ne++)T(K.location+ne,Ue/K.locationSize,st,re,Ue*dt,Ue/K.locationSize*ne*dt,Q)}}else if(Y!==void 0){const re=Y[oe];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(K.location,re);break;case 3:i.vertexAttrib3fv(K.location,re);break;case 4:i.vertexAttrib4fv(K.location,re);break;default:i.vertexAttrib1fv(K.location,re)}}}}y()}function E(){A();for(const D in n){const O=n[D];for(const W in O){const U=O[W];for(const z in U){const q=U[z];for(const Y in q)u(q[Y].object),delete q[Y];delete U[z]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;const O=n[D.id];for(const W in O){const U=O[W];for(const z in U){const q=U[z];for(const Y in q)u(q[Y].object),delete q[Y];delete U[z]}}delete n[D.id]}function R(D){for(const O in n){const W=n[O];for(const U in W){const z=W[U];if(z[D.id]===void 0)continue;const q=z[D.id];for(const Y in q)u(q[Y].object),delete q[Y];delete z[D.id]}}}function x(D){for(const O in n){const W=n[O],U=D.isInstancedMesh===!0?D.id:0,z=W[U];if(z!==void 0){for(const q in z){const Y=z[q];for(const oe in Y)u(Y[oe].object),delete Y[oe];delete z[q]}delete W[U],Object.keys(W).length===0&&delete n[O]}}}function A(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function px(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ei&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Dn&&R!==jn&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:E,samples:w}}function gx(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Pi,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,T=y*4;let M=p.clippingState||null;l.value=M,M=u(g,h,T,f);for(let E=0;E!==T;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==_;++T,M+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const nr=4,_x=6,vx=20,xx=256,Pr=new sa,Yh=new ke;let Sl=null,bl=0,wl=0,El=!1;const Mx=new L,cs=new L;class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Mx}=r;Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,bl,wl),this._renderer.xr.enabled=El,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:xi,format:ei,colorSpace:fo,depthBuffer:!1},s=Kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yx(r)),this._blurMaterial=bx(r,e,t),this._ggxMaterial=Sx(r,e,t)}return s}_compileMaterial(e){const t=new Lt(new Gt,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,n,s,r){const l=new Gn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Yh),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new ii,new Wn({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Yh),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const E=this._cubeSize;Js(s,M*E,T>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-nr?n-g+nr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Js(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Js(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Pr)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-nr?s-this._lodMax+nr:0),h=4*(this._cubeSize-u);Js(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Pr)}}function yx(i){const e=[],t=[];let n=i;const s=i-nr+1+_x;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,T=p>2?0:-1,M=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(M,f*h*p);for(let E=0;E<h;E++){const w=u[E*2]*2-1,R=u[E*2+1]*2-1;p===0?cs.set(1,R,w):p===1?cs.set(-w,1,-R):p===2?cs.set(-w,R,1):p===3?cs.set(-1,R,-w):p===4?cs.set(-w,-1,R):cs.set(w,R,-1),cs.toArray(_,(p*h+E)*f)}}const m=new Gt;m.setAttribute("position",new vn(g,f)),m.setAttribute("outputDirection",new vn(_,f)),t.push(new Lt(m,null)),n>nr&&n--}return{lodMeshes:t,sizeLods:e}}function Kh(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sx(i,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function bx(i,e,t){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Zh(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Jh(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ff extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Di});r.uniforms.tEquirect.value=t;const a=new Lt(s,r),o=t.minFilter;return t.minFilter===fs&&(t.minFilter=un),new Tg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function wx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Yo||f===qo)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Ff(g.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===Yo||f===qo,_=f===bs||f===dr;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new qh(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new qh(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Yo?h.mapping=bs:f===qo&&(h.mapping=dr),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ex(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sr("WebGLRenderer: "+n+" extension not supported."),s}}}function Tx(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let T=0,M=y.length;T<M;T+=3){const E=y[T+0],w=y[T+1],R=y[T+2];h.push(E,w,w,R,R,E)}}else{const y=g.array;_=g.version;for(let T=0,M=y.length/3-1;T<M;T+=3){const E=T+0,w=T+1,R=T+2;h.push(E,w,w,R,R,E)}}const m=new(g.count>=65535?gf:mf)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Ax(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Cx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rx(i,e,t){const n=new WeakMap,s=new Dt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let M=o.attributes.position.count*T,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*E*4*d),R=new ff(w,M,E,d);R.type=jn,R.needsUpdate=!0;const x=T*4;for(let P=0;P<d;P++){const D=m[P],O=p[P],W=y[P],U=M*E*4*P;for(let z=0;z<D.count;z++){const q=z*x;f===!0&&(s.fromBufferAttribute(D,z),w[U+q+0]=s.x,w[U+q+1]=s.y,w[U+q+2]=s.z,w[U+q+3]=0),g===!0&&(s.fromBufferAttribute(O,z),w[U+q+4]=s.x,w[U+q+5]=s.y,w[U+q+6]=s.z,w[U+q+7]=0),_===!0&&(s.fromBufferAttribute(W,z),w[U+q+8]=s.x,w[U+q+9]=s.y,w[U+q+10]=s.z,w[U+q+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new he(M,E)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Px(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Lx={[Jd]:"LINEAR_TONE_MAPPING",[Qd]:"REINHARD_TONE_MAPPING",[jd]:"CINEON_TONE_MAPPING",[ef]:"ACES_FILMIC_TONE_MAPPING",[nf]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[tf]:"CUSTOM_TONE_MAPPING"};function Ix(i,e,t,n,s,r){const a=new $n(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Gt;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));const u=new yg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Lt(c,u),h=new sa(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,y=[],T=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let w=0;w<y.length;w++){const R=y[w];R.setSize&&R.setSize(M,E)}},this.setEffects=function(M){y=M,T=y.length>0&&y[0].isRenderPass===!0;const E=a.width,w=a.height;y.length>0&&o===null&&(o=new $n(E,w,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new $n(E,w,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(E,w)}},this.begin=function(M,E){if(_||M.toneMapping===pi&&y.length===0)return!1;if(p=E,E!==null){const w=E.width,R=E.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return T===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=pi,!0},this.hasRenderPass=function(){return T},this.end=function(M,E){M.toneMapping=m,_=!0;let w=a,R=o;for(let x=0;x<y.length;x++){const A=y[x];A.enabled!==!1&&(A.render(M,R,w,E),A.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},ct.getTransfer(f)===St&&(u.defines.SRGB_TRANSFER="");const x=Lx[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(p),M.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Of=new dn,Lc=new Qr(1,1),Bf=new ff,kf=new _0,zf=new yf,Qh=[],jh=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;nd.set(n),i.uniformMatrix2fv(this.addr,!1,nd),$t(t,n)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;td.set(n),i.uniformMatrix3fv(this.addr,!1,td),$t(t,n)}}function kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;ed.set(n),i.uniformMatrix4fv(this.addr,!1,ed),$t(t,n)}}function zx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function $x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function qx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lc.compareFunction=t.isReversedDepthBuffer()?au:ru,r=Lc):r=Of,t.setTexture2D(e||r,s)}function Kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kf,s)}function Zx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zf,s)}function Jx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bf,s)}function Qx(i){switch(i){case 5126:return Dx;case 35664:return Nx;case 35665:return Ux;case 35666:return Fx;case 35674:return Ox;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return zx;case 35667:case 35671:return Gx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return Xx;case 36295:return $x;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function jx(i,e){i.uniform1fv(this.addr,e)}function eM(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function tM(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function nM(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function iM(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sM(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rM(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function aM(i,e){i.uniform1iv(this.addr,e)}function oM(i,e){i.uniform2iv(this.addr,e)}function lM(i,e){i.uniform3iv(this.addr,e)}function cM(i,e){i.uniform4iv(this.addr,e)}function uM(i,e){i.uniform1uiv(this.addr,e)}function hM(i,e){i.uniform2uiv(this.addr,e)}function dM(i,e){i.uniform3uiv(this.addr,e)}function fM(i,e){i.uniform4uiv(this.addr,e)}function pM(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Lc:a=Of;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function mM(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kf,r[a])}function gM(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zf,r[a])}function _M(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bf,r[a])}function vM(i){switch(i){case 5126:return jx;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return aM;case 35667:case 35671:return oM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return hM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class xM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}}class MM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vM(t.type)}}class yM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function id(i,e){i.seq.push(e),i.map[e.id]=e}function SM(i,e,t){const n=i.name,s=n.length;for(Tl.lastIndex=0;;){const r=Tl.exec(n),a=Tl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){id(t,c===void 0?new xM(o,i,e):new MM(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new yM(o),id(t,d)),t=d}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);SM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function sd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bM=37297;let wM=0;function EM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const rd=new Qe;function TM(i){ct._getMatrix(rd,ct.workingColorSpace,i);const e=`mat3( ${rd.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case po:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ad(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+EM(i.getShaderSource(e),o)}else return r}function AM(i,e){const t=TM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const CM={[Jd]:"Linear",[Qd]:"Reinhard",[jd]:"Cineon",[ef]:"ACESFilmic",[nf]:"AgX",[Jc]:"Neutral",[tf]:"Custom"};function RM(i,e){const t=CM[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new L;function PM(){ct.getLuminanceCoefficients($a);const i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function IM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Nr(i){return i!==""}function od(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(NM,FM)}const UM=new Map;function FM(i,e){let t=tt[e];if(t===void 0){const n=UM.get(e);if(n!==void 0)t=tt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ic(t)}const OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(i){return i.replace(OM,BM)}function BM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const kM={[Fr]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function zM(i){return kM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GM={[bs]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};function HM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":GM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const VM={[dr]:"ENVMAP_MODE_REFRACTION"};function WM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":VM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XM={[Zd]:"ENVMAP_BLENDING_MULTIPLY",[Dm]:"ENVMAP_BLENDING_MIX",[Nm]:"ENVMAP_BLENDING_ADD"};function $M(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":XM[i.combine]||"ENVMAP_BLENDING_NONE"}function YM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zM(t),c=HM(t),u=WM(t),d=$M(t),h=YM(t),f=LM(t),g=IM(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?tt.tonemapping_pars_fragment:"",t.toneMapping!==pi?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,AM("linearToOutputTexel",t.outputColorSpace),PM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Ic(a),a=od(a,t),a=ld(a,t),o=Ic(o),o=od(o,t),o=ld(o,t),a=cd(a),o=cd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+a,M=y+p+o,E=sd(s,s.VERTEX_SHADER,T),w=sd(s,s.FRAGMENT_SHADER,M);s.attachShader(_,E),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(w)||"",z=O.trim(),q=W.trim(),Y=U.trim();let oe=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,w);else{const te=ad(s,E,"vertex"),re=ad(s,w,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+te+`
`+re)}else z!==""?Ke("WebGLProgram: Program Info Log:",z):(q===""||Y==="")&&(K=!1);K&&(D.diagnostics={runnable:oe,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(E),s.deleteShader(w),x=new io(s,_),A=DM(s,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,bM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let KM=0;class ZM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new JM(e),t.set(e,n)),n}}class JM{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function QM(i){return i===ws||i===uo||i===ho}function jM(i,e,t,n,s,r){const a=new cu,o=new ZM,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,A,P,D,O,W){const U=D.fog,z=O.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,oe=e.get(x.envMap||q,Y),K=oe&&oe.mapping===Co?oe.image.height:null,te=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ue=re!==void 0?re.length:0;let Pe=0;z.morphAttributes.position!==void 0&&(Pe=1),z.morphAttributes.normal!==void 0&&(Pe=2),z.morphAttributes.color!==void 0&&(Pe=3);let mt,st,dt,Q;if(te){const Ct=li[te];mt=Ct.vertexShader,st=Ct.fragmentShader}else{mt=x.vertexShader,st=x.fragmentShader;const Ct=o.getVertexShaderStage(x),vt=o.getFragmentShaderStage(x);o.update(x,Ct,vt),dt=Ct.id,Q=vt.id}const ne=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Xe=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,$e=!!x.map,yt=!!x.matcap,ie=!!oe,le=!!x.aoMap,ce=!!x.lightMap,ue=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,He=!!x.displacementMap,ze=!!x.emissiveMap,Ye=!!x.metalnessMap,Je=!!x.roughnessMap,I=x.anisotropy>0,_t=x.clearcoat>0,rt=x.dispersion>0,C=x.retroreflectivity>0,v=x.iridescence>0,B=x.sheen>0,V=x.transmission>0,Z=I&&!!x.anisotropyMap,de=_t&&!!x.clearcoatMap,pe=_t&&!!x.clearcoatNormalMap,J=_t&&!!x.clearcoatRoughnessMap,ee=v&&!!x.iridescenceMap,ge=v&&!!x.iridescenceThicknessMap,Fe=B&&!!x.sheenColorMap,Me=B&&!!x.sheenRoughnessMap,_e=!!x.specularMap,Oe=!!x.specularColorMap,Ve=!!x.specularIntensityMap,je=V&&!!x.transmissionMap,F=V&&!!x.thicknessMap,ve=!!x.gradientMap,j=!!x.alphaMap,xe=x.alphaTest>0,Te=!!x.alphaHash,ae=!!x.extensions;let Be=pi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=i.toneMapping);const De={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:mt,fragmentShader:st,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&O.instanceColor!==null,instancingMorph:Xe&&O.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:yt,envMap:ie,envMapMode:ie&&oe.mapping,envMapCubeUVHeight:K,aoMap:le,lightMap:ce,bumpMap:ue,normalMap:me,displacementMap:He,emissiveMap:ze,normalMapObjectSpace:me&&x.normalMapType===Om,normalMapTangentSpace:me&&x.normalMapType===Tc,packedNormalMap:me&&x.normalMapType===Tc&&QM(x.normalMap.format),metalnessMap:Ye,roughnessMap:Je,anisotropy:I,anisotropyMap:Z,clearcoat:_t,clearcoatMap:de,clearcoatNormalMap:pe,clearcoatRoughnessMap:J,dispersion:rt,retroreflection:C,iridescence:v,iridescenceMap:ee,iridescenceThicknessMap:ge,sheen:B,sheenColorMap:Fe,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:Oe,specularIntensityMap:Ve,transmission:V,transmissionMap:je,thicknessMap:F,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Or&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:xe,alphaHash:Te,combine:x.combine,mapUv:$e&&g(x.map.channel),aoMapUv:le&&g(x.aoMap.channel),lightMapUv:ce&&g(x.lightMap.channel),bumpMapUv:ue&&g(x.bumpMap.channel),normalMapUv:me&&g(x.normalMap.channel),displacementMapUv:He&&g(x.displacementMap.channel),emissiveMapUv:ze&&g(x.emissiveMap.channel),metalnessMapUv:Ye&&g(x.metalnessMap.channel),roughnessMapUv:Je&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:de&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:_e&&g(x.specularMap.channel),specularColorMapUv:Oe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ve&&g(x.specularIntensityMap.channel),transmissionMapUv:je&&g(x.transmissionMap.channel),thicknessMapUv:F&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(me||I),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&($e||j),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Pe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:ze&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hi,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(A,x),y(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){const A=f[x.type];let P;if(A){const D=li[A];P=vg.clone(D.uniforms)}else P=x.uniforms;return P}function M(x,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new qM(i,A,x,s),c.push(P),u.set(A,P)),P}function E(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:R}}function ey(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ty(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function hd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=a(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function l(h,f,g,_,m,p,y){y.reversedDepth===!0&&(m=-m);const T=o(h,f,g,_,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(h,f,g,_,m,p){const y=o(h,f,g,_,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,f){t.length>1&&t.sort(h||ty),n.length>1&&n.sort(f||hd),s.length>1&&s.sort(f||hd)}function d(){for(let h=e,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function ny(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new dd,i.set(n,[a])):s>=r.length?(a=new dd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function iy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function sy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ry=0;function ay(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oy(i){const e=new iy,t=sy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ht,a=new ht;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,T=0,M=0,E=0,w=0,R=0,x=0,A=0,P=0;c.sort(ay);for(let O=0,W=c.length;O<W;O++){const U=c[O],z=U.color,q=U.intensity,Y=U.distance;let oe=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ws?oe=U.shadow.map.texture:oe=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=z.r*q,d+=z.g*q,h+=z.b*q;else if(U.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(U.sh.coefficients[K],q);P++}else if(U.isSunLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,re=t.get(U);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[g]=re,n.sunShadowMap[g]=oe;const Ue=te.getViewportCount();for(let Pe=0;Pe<Ue;Pe++)n.sunShadowMatrix[_+Pe]=te.getMatrix(Pe),n.sunShadowCascade[_+Pe]=te._cascadeData[Pe];_+=Ue,g++}n.sun[f]=K,f++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,re=t.get(U);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=U.shadow.matrix,E++}n.directional[m]=K,m++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(z).multiplyScalar(q),K.distance=Y,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,n.spot[y]=K;const te=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,te.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[y]=te.matrix,U.castShadow){const re=t.get(U);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.spotShadow[y]=re,n.spotShadowMap[y]=oe,R++}y++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(z).multiplyScalar(q),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),n.rectArea[T]=K,T++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const te=U.shadow,re=t.get(U);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=oe,n.pointShadowMatrix[p]=U.shadow.matrix,w++}n.point[p]=K,p++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(q),K.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[M]=K,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==w||D.numSpotShadows!==R||D.numSpotMaps!==x||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=w,D.numSpotShadows=R,D.numSpotMaps=x,D.numLightProbes=P,n.version=ry++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const M=c[y];if(M.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function fd(i){const e=new oy(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ly(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new fd(i),e.set(s,[o])):r>=a.length?(o=new fd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
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
}`,hy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],dy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],pd=new ht,Lr=new L,Al=new L;function fy(i,e,t){let n=new uu;const s=new he,r=new he,a=new Dt,o=new Sg,l=new bg,c={},u=t.maxTextureSize,d={[Ss]:wn,[wn]:Ss,[hi]:hi},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:cy,fragmentShader:uy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let p=this.type;this.render=function(w,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===pm&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fr);const A=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Di),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=p!==this.type;W&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=w.length;U<z;U++){const q=w[U],Y=q.shadow;if(Y===void 0){Ke("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const oe=Y.getFrameExtents();s.multiply(oe),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,Y.mapSize.y=r.y));const K=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||W===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ir){if(q.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new $n(s.x,s.y,{format:ws,type:xi,minFilter:un,magFilter:un,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Qr(s.x,s.y,jn),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Oi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=rn,Y.map.depthTexture.magFilter=rn}else q.isPointLight?(Y.map=new Ff(s.x),Y.map.depthTexture=new F0(s.x,vi)):(Y.map=new $n(s.x,s.y),Y.map.depthTexture=new Qr(s.x,s.y,vi)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Oi,this.type===Fr?(Y.map.depthTexture.compareFunction=K?au:ru,Y.map.depthTexture.minFilter=un,Y.map.depthTexture.magFilter=un):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=rn,Y.map.depthTexture.magFilter=rn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const te=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,x);for(let re=0;re<te;re++){const Ue=Y.getCamera(re);if(q.isPointLight){const Pe=Y.camera,mt=Y.matrix,st=q.distance||Pe.far;st!==Pe.far&&(Pe.far=st,Pe.updateProjectionMatrix()),Lr.setFromMatrixPosition(q.matrixWorld),Pe.position.copy(Lr),Al.copy(Pe.position),Al.add(hy[re]),Pe.up.copy(dy[re]),Pe.lookAt(Al),Pe.updateMatrixWorld(),mt.makeTranslation(-Lr.x,-Lr.y,-Lr.z),pd.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(pd,Pe.coordinateSystem,Pe.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,re),i.clear();else{re===0&&(i.setRenderTarget(Y.map),i.clear());const Pe=Y.getViewport(re);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),O.viewport(a)}n=Y.getFrustum(re),M(R,x,Ue,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Ir&&y(Y,x),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,D)};function y(w,R){const x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new $n(s.x,s.y,{format:ws,type:xi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,x,f,_,null)}function T(w,R,x,A){let P=null;const D=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=P.uuid,W=R.uuid;let U=c[O];U===void 0&&(U={},c[O]=U);let z=U[W];z===void 0&&(z=P.clone(),U[W]=z,R.addEventListener("dispose",E)),P=z}if(P.visible=R.visible,P.wireframe=R.wireframe,A===Ir?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=i.properties.get(P);O.light=x}return P}function M(w,R,x,A,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ir)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const W=e.update(w),U=w.material;if(Array.isArray(U)){const z=W.groups;for(let q=0,Y=z.length;q<Y;q++){const oe=z[q],K=U[oe.materialIndex];if(K&&K.visible){const te=T(w,K,A,P);w.onBeforeShadow(i,w,R,x,W,te,oe),i.renderBufferDirect(x,null,W,te,w,oe),w.onAfterShadow(i,w,R,x,W,te,oe)}}}else if(U.visible){const z=T(w,U,A,P);w.onBeforeShadow(i,w,R,x,W,z,null),i.renderBufferDirect(x,null,W,z,w,null),w.onAfterShadow(i,w,R,x,W,z,null)}}const O=w.children;for(let W=0,U=O.length;W<U;W++)M(O[W],R,x,A,P)}function E(w){w.target.removeEventListener("dispose",E);for(const x in c){const A=c[x],P=w.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function py(i,e){function t(){let F=!1;const ve=new Dt;let j=null;const xe=new Dt(0,0,0,0);return{setMask:function(Te){j!==Te&&!F&&(i.colorMask(Te,Te,Te,Te),j=Te)},setLocked:function(Te){F=Te},setClear:function(Te,ae,Be,De,Ct){Ct===!0&&(Te*=De,ae*=De,Be*=De),ve.set(Te,ae,Be,De),xe.equals(ve)===!1&&(i.clearColor(Te,ae,Be,De),xe.copy(ve))},reset:function(){F=!1,j=null,xe.set(-1,0,0,0)}}}function n(){let F=!1,ve=!1,j=null,xe=null,Te=null;return{setReversed:function(ae){if(ve!==ae){const Be=e.get("EXT_clip_control");ae?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;const De=Te;Te=null,this.setClear(De)}},getReversed:function(){return ve},setTest:function(ae){ae?ne(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ae){j!==ae&&!F&&(i.depthMask(ae),j=ae)},setFunc:function(ae){if(ve&&(ae=qm[ae]),xe!==ae){switch(ae){case Gl:i.depthFunc(i.NEVER);break;case Hl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case Wl:i.depthFunc(i.EQUAL);break;case Xl:i.depthFunc(i.GEQUAL);break;case $l:i.depthFunc(i.GREATER);break;case Yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ae}},setLocked:function(ae){F=ae},setClear:function(ae){Te!==ae&&(Te=ae,ve&&(ae=1-ae),i.clearDepth(ae))},reset:function(){F=!1,j=null,xe=null,Te=null,ve=!1}}}function s(){let F=!1,ve=null,j=null,xe=null,Te=null,ae=null,Be=null,De=null,Ct=null;return{setTest:function(vt){F||(vt?ne(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(vt){ve!==vt&&!F&&(i.stencilMask(vt),ve=vt)},setFunc:function(vt,qn,si){(j!==vt||xe!==qn||Te!==si)&&(i.stencilFunc(vt,qn,si),j=vt,xe=qn,Te=si)},setOp:function(vt,qn,si){(ae!==vt||Be!==qn||De!==si)&&(i.stencilOp(vt,qn,si),ae=vt,Be=qn,De=si)},setLocked:function(vt){F=vt},setClear:function(vt){Ct!==vt&&(i.clearStencil(vt),Ct=vt)},reset:function(){F=!1,ve=null,j=null,xe=null,Te=null,ae=null,Be=null,De=null,Ct=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,T=null,M=null,E=null,w=null,R=null,x=new ke(0,0,0),A=0,P=!1,D=null,O=null,W=null,U=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,oe=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=oe>=1):K.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=oe>=2);let te=null,re={};const Ue=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),mt=new Dt().fromArray(Ue),st=new Dt().fromArray(Pe);function dt(F,ve,j,xe){const Te=new Uint8Array(4),ae=i.createTexture();i.bindTexture(F,ae),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<j;Be++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ve+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ae}const Q={};Q[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Yr),ue(!1),me(ih),ne(i.CULL_FACE),le(Di);function ne(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function be(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Xe(F,ve){return h[F]!==ve?(i.bindFramebuffer(F,ve),h[F]=ve,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ae(F,ve){let j=g,xe=!1;if(F){j=f.get(ve),j===void 0&&(j=[],f.set(ve,j));const Te=F.textures;if(j.length!==Te.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Be=Te.length;ae<Be;ae++)j[ae]=i.COLOR_ATTACHMENT0+ae;j.length=Te.length,xe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,xe=!0);xe&&i.drawBuffers(j)}function $e(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const yt={[er]:i.FUNC_ADD,[gm]:i.FUNC_SUBTRACT,[_m]:i.FUNC_REVERSE_SUBTRACT};yt[vm]=i.MIN,yt[xm]=i.MAX;const ie={[Mm]:i.ZERO,[ym]:i.ONE,[Sm]:i.SRC_COLOR,[qd]:i.SRC_ALPHA,[Cm]:i.SRC_ALPHA_SATURATE,[Tm]:i.DST_COLOR,[wm]:i.DST_ALPHA,[bm]:i.ONE_MINUS_SRC_COLOR,[Kd]:i.ONE_MINUS_SRC_ALPHA,[Am]:i.ONE_MINUS_DST_COLOR,[Em]:i.ONE_MINUS_DST_ALPHA,[Rm]:i.CONSTANT_COLOR,[Pm]:i.ONE_MINUS_CONSTANT_COLOR,[Lm]:i.CONSTANT_ALPHA,[Im]:i.ONE_MINUS_CONSTANT_ALPHA};function le(F,ve,j,xe,Te,ae,Be,De,Ct,vt){if(F===Di){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),F!==mm){if(F!==p||vt!==P){if((y!==er||E!==er)&&(i.blendEquation(i.FUNC_ADD),y=er,E=er),vt)switch(F){case Or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",F);break}else switch(F){case Or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",F);break}T=null,M=null,w=null,R=null,x.set(0,0,0),A=0,p=F,P=vt}return}Te=Te||ve,ae=ae||j,Be=Be||xe,(ve!==y||Te!==E)&&(i.blendEquationSeparate(yt[ve],yt[Te]),y=ve,E=Te),(j!==T||xe!==M||ae!==w||Be!==R)&&(i.blendFuncSeparate(ie[j],ie[xe],ie[ae],ie[Be]),T=j,M=xe,w=ae,R=Be),(De.equals(x)===!1||Ct!==A)&&(i.blendColor(De.r,De.g,De.b,Ct),x.copy(De),A=Ct),p=F,P=!1}function ce(F,ve){F.side===hi?be(i.CULL_FACE):ne(i.CULL_FACE);let j=F.side===wn;ve&&(j=!j),ue(j),F.blending===Or&&F.transparent===!1?le(Di):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ze(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function me(F){F!==dm?(ne(i.CULL_FACE),F!==O&&(F===ih?i.cullFace(i.BACK):F===fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),O=F}function He(F){F!==W&&(Y&&i.lineWidth(F),W=F)}function ze(F,ve,j){F?(ne(i.POLYGON_OFFSET_FILL),(U!==ve||z!==j)&&(U=ve,z=j,a.getReversed()&&(ve=-ve),i.polygonOffset(ve,j))):be(i.POLYGON_OFFSET_FILL)}function Ye(F){F?ne(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Je(F){F===void 0&&(F=i.TEXTURE0+q-1),te!==F&&(i.activeTexture(F),te=F)}function I(F,ve,j){j===void 0&&(te===null?j=i.TEXTURE0+q-1:j=te);let xe=re[j];xe===void 0&&(xe={type:void 0,texture:void 0},re[j]=xe),(xe.type!==F||xe.texture!==ve)&&(te!==j&&(i.activeTexture(j),te=j),i.bindTexture(F,ve||Q[F]),xe.type=F,xe.texture=ve)}function _t(){const F=re[te];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function de(){try{i.texStorage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function pe(){try{i.texStorage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function ee(){try{i.texImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function ge(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Fe(F,ve){d[F]!==ve&&(i.pixelStorei(F,ve),d[F]=ve)}function Me(F){mt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),mt.copy(F))}function _e(F){st.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),st.copy(F))}function Oe(F,ve){let j=c.get(ve);j===void 0&&(j=new WeakMap,c.set(ve,j));let xe=j.get(F);xe===void 0&&(xe=i.getUniformBlockIndex(ve,F.name),j.set(F,xe))}function Ve(F,ve){const xe=c.get(ve).get(F);l.get(ve)!==xe&&(i.uniformBlockBinding(ve,xe,F.__bindingPointIndex),l.set(ve,xe))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,re={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,T=null,M=null,E=null,w=null,R=null,x=new ke(0,0,0),A=0,P=!1,D=null,O=null,W=null,U=null,z=null,mt.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:be,bindFramebuffer:Xe,drawBuffers:Ae,useProgram:$e,setBlending:le,setMaterial:ce,setFlipSided:ue,setCullFace:me,setLineWidth:He,setPolygonOffset:ze,setScissorTest:Ye,activeTexture:Je,bindTexture:I,unbindTexture:_t,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:J,texImage3D:ee,pixelStorei:Fe,getParameter:ge,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:pe,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:Me,viewport:_e,reset:je}}function my(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return g?new OffscreenCanvas(C,v):mo("canvas")}function m(C,v,B){let V=1;const Z=rt(C);if((Z.width>B||Z.height>B)&&(V=B/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(V*Z.width),pe=Math.floor(V*Z.height);h===void 0&&(h=_(de,pe));const J=v?_(de,pe):h;return J.width=de,J.height=pe,J.getContext("2d").drawImage(C,0,0,de,pe),Ke("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+de+"x"+pe+")."),J}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,v,B,V,Z,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;V&&(pe=e.get("EXT_texture_norm16"),pe||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),B===i.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),v===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),B===i.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),B===i.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){const ee=de?po:ct.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=ee===St?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),B===i.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(C,v){let B;return C?v===null||v===vi||v===Kr?B=i.DEPTH24_STENCIL8:v===jn?B=i.DEPTH32F_STENCIL8:v===qr&&(B=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vi||v===Kr?B=i.DEPTH_COMPONENT24:v===jn?B=i.DEPTH_COMPONENT32F:v===qr&&(B=i.DEPTH_COMPONENT16),B}function w(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function R(C){const v=C.target;v.removeEventListener("dispose",R),A(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){const v=C.target;v.removeEventListener("dispose",x),D(v)}function A(C){const v=n.get(C);if(v.__webglInit===void 0)return;const B=C.source,V=f.get(B);if(V){const Z=V[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(V).length===0&&f.delete(B)}n.remove(C)}function P(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const B=C.source,V=f.get(B);delete V[v.__cacheKey],a.memory.textures--}function D(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Z=0;Z<v.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=C.textures;for(let V=0,Z=B.length;V<Z;V++){const de=n.get(B[V]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(C)}let O=0;function W(){O=0}function U(){return O}function z(C){O=C}function q(){const C=O;return C>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function Y(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function oe(C,v){const B=n.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const V=C.image;if(V===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{be(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function K(C,v){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){be(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function te(C,v){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){be(B,C,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function re(C,v){const B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Xe(B,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const Ue={[ql]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Kl]:i.MIRRORED_REPEAT},Pe={[rn]:i.NEAREST,[Um]:i.NEAREST_MIPMAP_NEAREST,[va]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},mt={[km]:i.NEVER,[Wm]:i.ALWAYS,[zm]:i.LESS,[ru]:i.LEQUAL,[Gm]:i.EQUAL,[au]:i.GEQUAL,[Hm]:i.GREATER,[Vm]:i.NOTEQUAL};function st(C,v){if(v.type===jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===Ko||v.magFilter===va||v.magFilter===fs||v.minFilter===un||v.minFilter===Ko||v.minFilter===va||v.minFilter===fs)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ue[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ue[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ue[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Pe[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,mt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==va&&v.minFilter!==fs||v.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function dt(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",R));const V=v.source;let Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));const de=Y(v);if(de!==C.__cacheKey){Z[de]===void 0&&(Z[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[de].usedTimes++;const pe=Z[C.__cacheKey];pe!==void 0&&(Z[C.__cacheKey].usedTimes--,pe.usedTimes===0&&P(v)),C.__cacheKey=de,C.__webglTexture=Z[de].texture}return B}function Q(C,v,B){return Math.floor(Math.floor(C/B)/v)}function ne(C,v,B,V){const de=C.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,V,v.data);else{de.sort((Fe,Me)=>Fe.start-Me.start);let pe=0;for(let Fe=1;Fe<de.length;Fe++){const Me=de[pe],_e=de[Fe],Oe=Me.start+Me.count,Ve=Q(_e.start,v.width,4),je=Q(Me.start,v.width,4);_e.start<=Oe+1&&Ve===je&&Q(_e.start+_e.count-1,v.width,4)===Ve?Me.count=Math.max(Me.count,_e.start+_e.count-Me.start):(++pe,de[pe]=_e)}de.length=pe+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Fe=0,Me=de.length;Fe<Me;Fe++){const _e=de[Fe],Oe=Math.floor(_e.start/4),Ve=Math.ceil(_e.count/4),je=Oe%v.width,F=Math.floor(Oe/v.width),ve=Ve,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,je,F,ve,j,B,V,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function be(C,v,B){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);const Z=dt(C,v),de=v.source;t.bindTexture(V,C.__webglTexture,i.TEXTURE0+B);const pe=n.get(de);if(de.version!==pe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=ct.getPrimaries(ct.workingColorSpace),xe=v.colorSpace===Zi?null:ct.getPrimaries(v.colorSpace),Te=v.colorSpace===Zi||j===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=m(v.image,!1,s.maxTextureSize);ee=_t(v,ee);const ge=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type);let Me=M(v.internalFormat,ge,Fe,v.normalized,v.colorSpace,v.isVideoTexture);st(V,v);let _e;const Oe=v.mipmaps,Ve=v.isVideoTexture!==!0,je=pe.__version===void 0||Z===!0,F=de.dataReady,ve=w(v,ee);if(v.isDepthTexture)Me=E(v.format===ps,v.type),je&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ge,Fe,null));else if(v.isDataTexture)if(Oe.length>0){Ve&&je&&t.texStorage2D(i.TEXTURE_2D,ve,Me,Oe[0].width,Oe[0].height);for(let j=0,xe=Oe.length;j<xe;j++)_e=Oe[j],Ve?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,j,Me,_e.width,_e.height,0,ge,Fe,_e.data);v.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height),F&&ne(v,ee,ge,Fe)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ge,Fe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,Oe[0].width,Oe[0].height,ee.depth);for(let j=0,xe=Oe.length;j<xe;j++)if(_e=Oe[j],v.format!==ei)if(ge!==null)if(Ve){if(F)if(v.layerUpdates.size>0){const Te=$h(_e.width,_e.height,v.format,v.type);for(const ae of v.layerUpdates){const Be=_e.data.subarray(ae*Te/_e.data.BYTES_PER_ELEMENT,(ae+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ae,_e.width,_e.height,1,ge,Be)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ee.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Me,_e.width,_e.height,ee.depth,0,_e.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ee.depth,ge,Fe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Me,_e.width,_e.height,ee.depth,0,ge,Fe,_e.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ve&&je&&t.texStorage2D(i.TEXTURE_2D,ve,Me,Oe[0].width,Oe[0].height);for(let j=0,xe=Oe.length;j<xe;j++)_e=Oe[j],v.format!==ei?ge!==null?Ve?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Me,_e.width,_e.height,0,_e.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,j,Me,_e.width,_e.height,0,ge,Fe,_e.data)}else if(v.isDataArrayTexture)if(Ve){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ee.width,ee.height,ee.depth),F)if(v.layerUpdates.size>0){const j=$h(ee.width,ee.height,v.format,v.type);for(const xe of v.layerUpdates){const Te=ee.data.subarray(xe*j/ee.data.BYTES_PER_ELEMENT,(xe+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ee.width,ee.height,1,ge,Fe,Te)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,Fe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ge,Fe,ee.data);else if(v.isData3DTexture)Ve?(je&&t.texStorage3D(i.TEXTURE_3D,ve,Me,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,Fe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ge,Fe,ee.data);else if(v.isFramebufferTexture){if(je)if(Ve)t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height);else{let j=ee.width,xe=ee.height;for(let Te=0;Te<ve;Te++)t.texImage2D(i.TEXTURE_2D,Te,Me,j,xe,0,ge,Fe,null),j>>=1,xe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),d.add(v),j.onpaint=xe=>{const Te=xe.changedElements;for(const ae of d)Te.includes(ae.image)&&(ae.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{const Te=i.RGBA,ae=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,ae,Be,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ve&&je){const j=rt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,j.width,j.height)}for(let j=0,xe=Oe.length;j<xe;j++)_e=Oe[j],Ve?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ge,Fe,_e):t.texImage2D(i.TEXTURE_2D,j,Me,ge,Fe,_e);v.generateMipmaps=!1}else if(Ve){if(je){const j=rt(ee);t.texStorage2D(i.TEXTURE_2D,ve,Me,j.width,j.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Fe,ee)}else t.texImage2D(i.TEXTURE_2D,0,Me,ge,Fe,ee);p(v)&&y(V),pe.__version=de.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Xe(C,v,B){if(v.image.length!==6)return;const V=dt(C,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const de=n.get(Z);if(Z.version!==de.__version||V===!0){t.activeTexture(i.TEXTURE0+B);const pe=ct.getPrimaries(ct.workingColorSpace),J=v.colorSpace===Zi?null:ct.getPrimaries(v.colorSpace),ee=v.colorSpace===Zi||pe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!ge&&!Fe?Me[ae]=m(v.image[ae],!0,s.maxCubemapSize):Me[ae]=Fe?v.image[ae].image:v.image[ae],Me[ae]=_t(v,Me[ae]);const _e=Me[0],Oe=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type),je=M(v.internalFormat,Oe,Ve,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,ve=de.__version===void 0||V===!0,j=Z.dataReady;let xe=w(v,_e);st(i.TEXTURE_CUBE_MAP,v);let Te;if(ge){F&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,_e.width,_e.height);for(let ae=0;ae<6;ae++){Te=Me[ae].mipmaps;for(let Be=0;Be<Te.length;Be++){const De=Te[Be];v.format!==ei?Oe!==null?F?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,De.width,De.height,Oe,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,je,De.width,De.height,0,De.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,De.width,De.height,Oe,Ve,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,je,De.width,De.height,0,Oe,Ve,De.data)}}}else{if(Te=v.mipmaps,F&&ve){Te.length>0&&xe++;const ae=rt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,Oe,Ve,Me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Me[ae].width,Me[ae].height,0,Oe,Ve,Me[ae].data);for(let Be=0;Be<Te.length;Be++){const Ct=Te[Be].image[ae].image;F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,Ct.width,Ct.height,Oe,Ve,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,je,Ct.width,Ct.height,0,Oe,Ve,Ct.data)}}else{F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,Ve,Me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Oe,Ve,Me[ae]);for(let Be=0;Be<Te.length;Be++){const De=Te[Be];F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,Oe,Ve,De.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,je,Oe,Ve,De.image[ae])}}}p(v)&&y(i.TEXTURE_CUBE_MAP),de.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ae(C,v,B,V,Z,de){const pe=r.convert(B.format,B.colorSpace),J=r.convert(B.type),ee=M(B.internalFormat,pe,J,B.normalized,B.colorSpace),ge=n.get(v),Fe=n.get(B);if(Fe.__renderTarget=v,!ge.__hasExternalTextures){const Me=Math.max(1,v.width>>de),_e=Math.max(1,v.height>>de);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,de,ee,Me,_e,v.depth,0,pe,J,null):t.texImage2D(Z,de,ee,Me,_e,0,pe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Fe.__webglTexture,0,Ye(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Fe.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(C,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const V=v.depthTexture,Z=V&&V.isDepthTexture?V.type:null,de=E(v.stencilBuffer,Z),pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Je(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(v),de,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(v),de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,C)}else{const V=v.textures;for(let Z=0;Z<V.length;Z++){const de=V[Z],pe=r.convert(de.format,de.colorSpace),J=r.convert(de.type),ee=M(de.internalFormat,pe,J,de.normalized,de.colorSpace);Je(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(v),ee,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,v,B){const V=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),st(i.TEXTURE_CUBE_MAP,v.depthTexture);const ge=r.convert(v.depthTexture.format),Fe=r.convert(v.depthTexture.type);let Me;v.depthTexture.format===Oi?Me=i.DEPTH_COMPONENT24:v.depthTexture.format===ps&&(Me=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,v.width,v.height,0,ge,Fe,null)}}else oe(v.depthTexture,0);const de=Z.__webglTexture,pe=Ye(v),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ee=v.depthTexture.format===ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Oi)Je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,de,0);else if(v.depthTexture.format===ps)Je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(C){const v=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=V}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)yt(v.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?yt(v.__webglFramebuffer[0],C,0):yt(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),$e(v.__webglDepthbuffer[V],C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$e(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(C,v,B){const V=n.get(C);v!==void 0&&Ae(V.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ie(C)}function ce(C){const v=C.texture,B=n.get(C),V=n.get(v);C.addEventListener("dispose",x);const Z=C.textures,de=C.isWebGLCubeRenderTarget===!0,pe=Z.length>1;if(pe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,a.memory.textures++),de){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let ee=0;ee<v.mipmaps.length;ee++)B.__webglFramebuffer[J][ee]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pe)for(let J=0,ee=Z.length;J<ee;J++){const ge=n.get(Z[J]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Je(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const ee=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const ge=r.convert(ee.format,ee.colorSpace),Fe=r.convert(ee.type),Me=M(ee.internalFormat,ge,Fe,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),_e=Ye(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),st(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Ae(B.__webglFramebuffer[J][ee],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Ae(B.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,ee=Z.length;J<ee;J++){const ge=Z[J],Fe=n.get(ge);let Me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Fe.__webglTexture),st(Me,ge),Ae(B.__webglFramebuffer,C,ge,i.COLOR_ATTACHMENT0+J,Me,0),p(ge)&&y(Me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),st(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Ae(B.__webglFramebuffer[ee],C,v,i.COLOR_ATTACHMENT0,J,ee);else Ae(B.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);p(v)&&y(J),t.unbindTexture()}C.depthBuffer&&ie(C)}function ue(C){const v=C.textures;for(let B=0,V=v.length;B<V;B++){const Z=v[B];if(p(Z)){const de=T(C),pe=n.get(Z).__webglTexture;t.bindTexture(de,pe),y(de),t.unbindTexture()}}}const me=[],He=[];function ze(C){if(C.samples>0){if(Je(C)===!1){const v=C.textures,B=C.width,V=C.height;let Z=i.COLOR_BUFFER_BIT;const de=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(C),J=v.length>1;if(J)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Fe=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,Z,i.NEAREST),l===!0&&(me.length=0,He.length=0,me.push(i.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(me.push(de),He.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Fe=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ye(C){return Math.min(s.maxSamples,C.samples)}function Je(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(C){const v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function _t(C,v){const B=C.colorSpace,V=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==fo&&B!==Zi&&(ct.getTransfer(B)===St?(V!==ei||Z!==Dn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",B)),v}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=re,this.rebindTextures=le,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gy(i,e){function t(n,s=Zi){let r;const a=ct.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rf)return i.BYTE;if(n===af)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Qc)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===cf)return i.ALPHA;if(n===uf)return i.RGB;if(n===ei)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===tu)return i.RED;if(n===nu)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===iu)return i.RG_INTEGER;if(n===su)return i.RGBA_INTEGER;if(n===ja||n===eo||n===to||n===no)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===Jl||n===Ql||n===jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===uo||n===rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===tc)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ic)return r.COMPRESSED_R11_EAC;if(n===sc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===uo)return r.COMPRESSED_RG11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ac||n===oc||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===yc||n===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mc)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===wc||n===ho||n===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:_y,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class My extends Rs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new xy,p={},y=t.getContextAttributes();let T=null,M=null;const E=[],w=[],R=new he;let x=null,A=null;const P=new Gn;P.viewport=new Dt;const D=new Gn;D.viewport=new Dt;const O=[P,D],W=new Ag;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=E[Q];return ne===void 0&&(ne=new nl,E[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=E[Q];return ne===void 0&&(ne=new nl,E[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=E[Q];return ne===void 0&&(ne=new nl,E[Q]=ne),ne.getHandSpace()};function q(Q){const ne=w.indexOf(Q.inputSource);if(ne===-1)return;const be=E[ne];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||a),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<E.length;Q++){const ne=w[Q];ne!==null&&(w[Q]=null,E[Q].disconnect(ne))}U=null,z=null,m.reset();for(const Q in p)delete p[Q];if(e.setRenderTarget(T),f=null,h=null,d=null,s=null,M=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),A!==null){const Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Xe=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?ps:Oi,Xe=y.stencil?Kr:vi);const $e={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new $n(h.textureWidth,h.textureHeight,{format:ei,type:Dn,depthTexture:new Qr(h.textureWidth,h.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new $n(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(Q){for(let ne=0;ne<Q.removed.length;ne++){const be=Q.removed[ne],Xe=w.indexOf(be);Xe>=0&&(w[Xe]=null,E[Xe].disconnect(be))}for(let ne=0;ne<Q.added.length;ne++){const be=Q.added[ne];let Xe=w.indexOf(be);if(Xe===-1){for(let $e=0;$e<E.length;$e++)if($e>=w.length){w.push(be),Xe=$e;break}else if(w[$e]===null){w[$e]=be,Xe=$e;break}if(Xe===-1)break}const Ae=E[Xe];Ae&&Ae.connect(be)}}const K=new L,te=new L;function re(Q,ne,be){K.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(be.matrixWorld);const Xe=K.distanceTo(te),Ae=ne.projectionMatrix.elements,$e=be.projectionMatrix.elements,yt=Ae[14]/(Ae[10]-1),ie=Ae[14]/(Ae[10]+1),le=(Ae[9]+1)/Ae[5],ce=(Ae[9]-1)/Ae[5],ue=(Ae[8]-1)/Ae[0],me=($e[8]+1)/$e[0],He=yt*ue,ze=yt*me,Ye=Xe/(-ue+me),Je=Ye*-ue;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Je),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const I=yt+Ye,_t=ie+Ye,rt=He-Je,C=ze+(Xe-Je),v=le*ie/_t*I,B=ce*ie/_t*I;Q.projectionMatrix.makePerspective(rt,C,v,B,I,_t),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ue(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,be=Q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(be=m.depthFar)),W.near=D.near=P.near=ne,W.far=D.far=P.far=be,(U!==W.near||z!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),U=W.near,z=W.far),W.layers.mask=Q.layers.mask|6,P.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const Xe=Q.parent,Ae=W.cameras;Ue(W,Xe);for(let $e=0;$e<Ae.length;$e++)Ue(Ae[$e],Xe);Ae.length===2?re(W,P,D):W.projectionMatrix.copy(P.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),Pe(Q,W,Xe)};function Pe(Q,ne,be){be===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Jr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(Q){return p[Q]};let mt=null;function st(Q,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Xe=!1;be.length!==W.cameras.length&&(W.cameras.length=0,Xe=!0);for(let ie=0;ie<be.length;ie++){const le=be[ie];let ce=null;if(f!==null)ce=f.getViewport(le);else{const me=d.getViewSubImage(h,le);ce=me.viewport,ie===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let ue=O[ie];ue===void 0&&(ue=new Gn,ue.layers.enable(ie),ue.viewport=new Dt,O[ie]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ce.x,ce.y,ce.width,ce.height),ie===0&&(W.matrix.copy(ue.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Xe===!0&&W.cameras.push(ue)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const ie=d.getDepthInformation(be[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ie=0;ie<be.length;ie++){const le=be[ie].camera;if(le){let ce=p[le];ce||(ce=new Sf,p[le]=ce);const ue=d.getCameraImage(le);ce.sourceTexture=ue}}}}for(let be=0;be<E.length;be++){const Xe=w[be],Ae=E[be];Xe!==null&&Ae!==void 0&&Ae.update(Xe,ne,c||a)}mt&&mt(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const dt=new Nf;dt.setAnimationLoop(st),this.setAnimationLoop=function(Q){mt=Q},this.dispose=function(){}}}const yy=new ht,Gf=new Qe;Gf.set(-1,0,0,0,1,0,0,0,1);function Sy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,M=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function by(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const w=E.program;n.uniformBlockBinding(M,w)}function c(M,E){let w=s[M.id];w===void 0&&(m(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",y));const R=E.program;n.updateUBOMapping(M,R);const x=e.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){const E=d();M.__bindingPointIndex=E;const w=i.createBuffer(),R=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const E=s[M.id],w=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,A=w.length;x<A;x++){const P=w[x];if(Array.isArray(P))for(let D=0,O=P.length;D<O;D++)f(P[D],x,D,R);else f(P,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,E,w,R){if(_(M,E,w,R)===!0){const x=M.__offset,A=M.value;if(Array.isArray(A)){let P=0;for(let D=0;D<A.length;D++){const O=A[D],W=p(O);g(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,E,w){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,w)}function _(M,E,w,R){const x=M.value,A=E+"_"+w;if(R[A]===void 0)return typeof x=="number"||typeof x=="boolean"?R[A]=x:ArrayBuffer.isView(x)?R[A]=x.slice():R[A]=x.clone(),!0;{const P=R[A];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(M){const E=M.uniforms;let w=0;const R=16;for(let A=0,P=E.length;A<P;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let O=0,W=D.length;O<W;O++){const U=D[O],z=Array.isArray(U.value)?U.value:[U.value];for(let q=0,Y=z.length;q<Y;q++){const oe=z[q],K=p(oe),te=w%R,re=te%K.boundary,Ue=te+re;w+=re,Ue!==0&&R-Ue<K.storage&&(w+=R-Ue),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=K.storage}}}const x=w%R;return x>0&&(w+=R-x),M.__size=w,M.__cache={},this}function p(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",M),E}function y(M){const E=M.target;E.removeEventListener("dispose",y);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const wy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function Ey(){return oi===null&&(oi=new Mf(wy,16,16,ws,xi),oi.name="DFG_LUT",oi.minFilter=un,oi.magFilter=un,oi.wrapS=Li,oi.wrapT=Li,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class Ty{constructor(e={}){const{canvas:t=$m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Dn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([su,iu,nu]),p=new Set([Dn,vi,qr,Kr,jc,eu]),y=new Uint32Array(4),T=new Int32Array(4),M=new L;let E=null,w=null;const R=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,O=null,W=null,U=null,z=null;this._outputColorSpace=cn;let q=0,Y=0,oe=null,K=-1,te=null;const re=new Dt,Ue=new Dt;let Pe=null;const mt=new ke(0);let st=0,dt=t.width,Q=t.height,ne=1,be=null,Xe=null;const Ae=new Dt(0,0,dt,Q),$e=new Dt(0,0,dt,Q);let yt=!1;const ie=new uu;let le=!1,ce=!1;const ue=new ht,me=new L,He=new Dt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Je(){return oe===null?ne:1}let I=n;function _t(S,N){return t.getContext(S,N)}let rt,C,v,B,V,Z,de,pe,J,ee,ge,Fe,Me,_e,Oe,Ve,je,F,ve,j,xe,Te,ae;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zc}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",qn,!1),I===null){const N="webgl2";if(I=_t(N,S),I===null)throw _t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(S){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),lt("WebGLRenderer: "+S.message),S}function Be(){rt=new Ex(I),rt.init(),xe=new gy(I,rt),C=new mx(I,rt,e,xe),v=new py(I,rt),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),W=I.createFramebuffer(),U=I.createFramebuffer(),z=I.createFramebuffer(),B=new Cx(I),V=new ey,Z=new my(I,rt,v,V,C,xe,B),de=new wx(P),pe=new Pg(I),Te=new fx(I,pe),J=new Tx(I,pe,B,Te),ee=new Px(I,J,pe,Te,B),F=new Rx(I,C,Z),Oe=new gx(V),ge=new jM(P,de,rt,C,Te,Oe),Fe=new Sy(P,V),Me=new ny,_e=new ly(rt),je=new dx(P,de,v,ee,g,l),Ve=new fy(P,ee,C),ae=new by(I,B,C,v),ve=new px(I,rt,B),j=new Ax(I,rt,B),B.programs=ge.programs,P.capabilities=C,P.extensions=rt,P.properties=V,P.renderLists=Me,P.shadowMap=Ve,P.state=v,P.info=B}_!==Dn&&(A=new Ix(_,t.width,t.height,o,s,r));const De=new My(P,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(dt,Q,!1))},this.getSize=function(S){return S.set(dt,Q)},this.setSize=function(S,N,$=!0){if(De.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=S,Q=N,t.width=Math.floor(S*ne),t.height=Math.floor(N*ne),$===!0&&(t.style.width=S+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(dt*ne,Q*ne).floor()},this.setDrawingBufferSize=function(S,N,$){dt=S,Q=N,ne=$,t.width=Math.floor(S*$),t.height=Math.floor(N*$),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===Dn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(re)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,N,$,G){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,N,$,G),v.viewport(re.copy(Ae).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy($e)},this.setScissor=function(S,N,$,G){S.isVector4?$e.set(S.x,S.y,S.z,S.w):$e.set(S,N,$,G),v.scissor(Ue.copy($e).multiplyScalar(ne).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(S){v.setScissorTest(yt=S)},this.setOpaqueSort=function(S){be=S},this.setTransparentSort=function(S){Xe=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,$=!0){let G=0;if(S){let H=!1;if(oe!==null){const Ee=oe.texture.format;H=m.has(Ee)}if(H){const Ee=oe.texture.type,Re=p.has(Ee),we=je.getClearColor(),Le=je.getClearAlpha(),Ne=we.r,et=we.g,at=we.b;Re?(y[0]=Ne,y[1]=et,y[2]=at,y[3]=Le,I.clearBufferuiv(I.COLOR,0,y)):(T[0]=Ne,T[1]=et,T[2]=at,T[3]=Le,I.clearBufferiv(I.COLOR,0,T))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),je.dispose(),Me.dispose(),_e.dispose(),V.dispose(),de.dispose(),ee.dispose(),Te.dispose(),ae.dispose(),ge.dispose(),De.dispose(),De.removeEventListener("sessionstart",Pu),De.removeEventListener("sessionend",Lu),ss.stop()};function Ct(S){S.preventDefault(),go("WebGLRenderer: Context Lost."),D=!0}function vt(){go("WebGLRenderer: Context Restored."),D=!1;const S=B.autoReset,N=Ve.enabled,$=Ve.autoUpdate,G=Ve.needsUpdate,H=Ve.type;Be(),B.autoReset=S,Ve.enabled=N,Ve.autoUpdate=$,Ve.needsUpdate=G,Ve.type=H}function qn(S){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function si(S){const N=S.target;N.removeEventListener("dispose",si),up(N)}function up(S){hp(S),V.remove(S)}function hp(S){const N=V.get(S).programs;N!==void 0&&(N.forEach(function($){ge.releaseProgram($)}),S.isShaderMaterial&&ge.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,$,G,H,Ee){N===null&&(N=ze);const Re=H.isMesh&&H.matrixWorld.determinantAffine()<0,we=pp(S,N,$,G,H);v.setMaterial(G,Re);let Le=$.index,Ne=1;if(G.wireframe===!0){if(Le=J.getWireframeAttribute($),Le===void 0)return;Ne=2}const et=$.drawRange,at=$.attributes.position;let Ie=et.start*Ne,xt=(et.start+et.count)*Ne;Ee!==null&&(Ie=Math.max(Ie,Ee.start*Ne),xt=Math.min(xt,(Ee.start+Ee.count)*Ne)),Le!==null?(Ie=Math.max(Ie,0),xt=Math.min(xt,Le.count)):at!=null&&(Ie=Math.max(Ie,0),xt=Math.min(xt,at.count));const kt=xt-Ie;if(kt<0||kt===1/0)return;Te.setup(H,G,we,$,Le);let Pt,Tt=ve;if(Le!==null&&(Pt=pe.get(Le),Tt=j,Tt.setIndex(Pt)),H.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Je()),Tt.setMode(I.LINES)):Tt.setMode(I.TRIANGLES);else if(H.isLine){let an=G.linewidth;an===void 0&&(an=1),v.setLineWidth(an*Je()),H.isLineSegments?Tt.setMode(I.LINES):H.isLineLoop?Tt.setMode(I.LINE_LOOP):Tt.setMode(I.LINE_STRIP)}else H.isPoints?Tt.setMode(I.POINTS):H.isSprite&&Tt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const an=H._multiDrawStarts,Ce=H._multiDrawCounts,pn=H._multiDrawCount,ft=Le?pe.get(Le).bytesPerElement:1,kn=V.get(G).currentProgram.getUniforms();for(let ri=0;ri<pn;ri++)kn.setValue(I,"_gl_DrawID",ri),Tt.render(an[ri]/ft,Ce[ri])}else if(H.isInstancedMesh)Tt.renderInstances(Ie,kt,H.count);else if($.isInstancedBufferGeometry){const an=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,an);Tt.renderInstances(Ie,kt,Ce)}else Tt.render(Ie,kt)};function Ru(S,N,$,G){O!==null&&S.isNodeMaterial&&O.setObject(G,S),le===!0&&Oe.setState(S,$,!1),S.transparent===!0&&S.side===hi&&S.forceSinglePass===!1?(S.side=wn,S.needsUpdate=!0,_a(S,N,G),S.side=Ss,S.needsUpdate=!0,_a(S,N,G),S.side=hi):_a(S,N,G)}this.compile=function(S,N,$=null){$===null&&($=S),O!==null&&O.renderStart(S,N,$),w=_e.get($),w.init(N),x.push(w),$.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),S!==$&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),ce=this.localClippingEnabled,le=Oe.init(this.clippingPlanes,ce),le===!0&&Oe.setGlobalState(this.clippingPlanes,N),O!==null&&Ve.render(w.state.shadowsArray,$,N);const G=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Ee=H.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const we=Ee[Re];Ru(we,$,N,H),G.add(we)}else Ru(Ee,$,N,H),G.add(Ee)}),w=x.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(S,N,$=null){const G=this.compile(S,N,$);return new Promise(H=>{function Ee(){if(G.forEach(function(Re){const Le=V.get(Re).currentProgram;(Le===void 0||Le.isReady())&&G.delete(Re)}),G.size===0){H(S);return}setTimeout(Ee,10)}rt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Vo=null;function dp(S){Vo&&Vo(S)}function Pu(){ss.stop()}function Lu(){ss.start()}const ss=new Nf;ss.setAnimationLoop(dp),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(S){Vo=S,De.setAnimationLoop(S),S===null?ss.stop():ss.start()},De.addEventListener("sessionstart",Pu),De.addEventListener("sessionend",Lu),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(S,N);const $=De.enabled===!0&&De.isPresenting===!0,G=A!==null&&(oe===null||$)&&A.begin(P,oe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(N),N=De.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,N,oe),w=_e.get(S,x.length),w.init(N),w.state.textureUnits=Z.getTextureUnits(),x.push(w),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ie.setFromProjectionMatrix(ue,di,N.reversedDepth),ce=this.localClippingEnabled,le=Oe.init(this.clippingPlanes,ce),E=Me.get(S,R.length),E.init(),R.push(E),De.enabled===!0&&De.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&Wo(Re,N,-1/0,P.sortObjects)}Wo(S,N,0,P.sortObjects),E.finish(),O!==null&&O.updateLights(w.state.lightsArray),P.sortObjects===!0&&E.sort(be,Xe),Ye=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Ye&&je.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Oe.beginShadows();const H=w.state.shadowsArray;if(Ve.render(H,S,N),le===!0&&Oe.endShadows(),(G&&A.hasRenderPass())===!1){const Re=E.opaque,we=E.transmissive;if(w.setupLights(),N.isArrayCamera){const Le=N.cameras;if(we.length>0)for(let Ne=0,et=Le.length;Ne<et;Ne++){const at=Le[Ne];Du(Re,we,S,at)}Ye&&je.render(S);for(let Ne=0,et=Le.length;Ne<et;Ne++){const at=Le[Ne];Iu(E,S,at,at.viewport)}}else we.length>0&&Du(Re,we,S,N),Ye&&je.render(S),Iu(E,S,N)}oe!==null&&Y===0&&(Z.updateMultisampleRenderTarget(oe),Z.updateRenderTargetMipmap(oe)),G&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,N),Te.resetDefaultState(),K=-1,te=null,x.pop(),x.length>0?(w=x[x.length-1],Z.setTextureUnits(w.state.textureUnits),le===!0&&Oe.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,O!==null&&O.renderEnd()};function Wo(S,N,$,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ie)){G&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ue);const Re=ee.update(S),we=S.material;we.visible&&E.push(S,Re,we,$,He.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ie))){const Re=ee.update(S),we=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),He.copy(Re.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){const Le=Re.groups;for(let Ne=0,et=Le.length;Ne<et;Ne++){const at=Le[Ne],Ie=we[at.materialIndex];Ie&&Ie.visible&&E.push(S,Re,Ie,$,He.z,at,N)}}else we.visible&&E.push(S,Re,we,$,He.z,null,N)}}const Ee=S.children;for(let Re=0,we=Ee.length;Re<we;Re++)Wo(Ee[Re],N,$,G)}function Iu(S,N,$,G){const{opaque:H,transmissive:Ee,transparent:Re}=S;w.setupLightsView($),le===!0&&Oe.setGlobalState(P.clippingPlanes,$),G&&v.viewport(re.copy(G)),H.length>0&&ga(H,N,$),Ee.length>0&&ga(Ee,N,$),Re.length>0&&ga(Re,N,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Du(S,N,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Ie=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new $n(1,1,{generateMipmaps:!0,type:Ie?xi:Dn,minFilter:fs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[G.id],Re=G.viewport||re;Ee.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const we=P.getRenderTarget(),Le=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(mt),st=P.getClearAlpha(),st<1&&P.setClearColor(16777215,.5),P.clear(),Ye&&je.render($);const et=P.toneMapping;P.toneMapping=pi;const at=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),le===!0&&Oe.setGlobalState(P.clippingPlanes,G),ga(S,$,G),Z.updateMultisampleRenderTarget(Ee),Z.updateRenderTargetMipmap(Ee),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let xt=0,kt=N.length;xt<kt;xt++){const Pt=N[xt],{object:Tt,geometry:an,material:Ce,group:pn}=Pt;if(Ce.side===hi&&Tt.layers.test(G.layers)){const ft=Ce.side;Ce.side=wn,Ce.needsUpdate=!0,Nu(Tt,$,G,an,Ce,pn),Ce.side=ft,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(Z.updateMultisampleRenderTarget(Ee),Z.updateRenderTargetMipmap(Ee))}P.setRenderTarget(we,Le,Ne),P.setClearColor(mt,st),at!==void 0&&(G.viewport=at),P.toneMapping=et}function ga(S,N,$){const G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,Ee=S.length;H<Ee;H++){const Re=S[H],{object:we,geometry:Le,group:Ne}=Re;let et=Re.material;et.allowOverride===!0&&G!==null&&(et=G),we.layers.test($.layers)&&Nu(we,N,$,Le,et,Ne)}}function Nu(S,N,$,G,H,Ee){O!==null&&H.isNodeMaterial&&O.setObject(S,H),S.onBeforeRender(P,N,$,G,H,Ee),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,N,$,G,S,Ee),H.transparent===!0&&H.side===hi&&H.forceSinglePass===!1?(H.side=wn,H.needsUpdate=!0,P.renderBufferDirect($,N,G,H,S,Ee),H.side=Ss,H.needsUpdate=!0,P.renderBufferDirect($,N,G,H,S,Ee),H.side=hi):P.renderBufferDirect($,N,G,H,S,Ee),S.onAfterRender(P,N,$,G,H,Ee)}function _a(S,N,$){N.isScene!==!0&&(N=ze);const G=V.get(S),H=w.state.lights,Ee=w.state.shadowsArray,Re=H.state.version,we=ge.getParameters(S,H.state,Ee,N,$,w.state.lightProbeGridArray),Le=ge.getProgramCacheKey(we);let Ne=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const et=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=de.get(S.envMap||G.environment,et),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",si),Ne=new Map,G.programs=Ne);let at=Ne.get(Le);if(at!==void 0){if(G.currentProgram===at&&G.lightsStateVersion===Re)return Fu(S,we),at}else we.uniforms=ge.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,$,we),S.onBeforeCompile(we,P),at=ge.acquireProgram(we,Le),Ne.set(Le,at),G.uniforms=we.uniforms;const Ie=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),Fu(S,we),G.needsLights=gp(S),G.lightsStateVersion=Re,G.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.sunLights.value=H.state.sun,Ie.sunLightShadows.value=H.state.sunShadow,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.sunShadowMatrix.value=H.state.sunShadowMatrix,Ie.sunShadowCascade.value=H.state.sunShadowCascade,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=at,G.uniformsList=null,at}function Uu(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=io.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Fu(S,N){const $=V.get(S);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function fp(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let $=0,G=S.length;$<G;$++){const H=S[$];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function pp(S,N,$,G,H){N.isScene!==!0&&(N=ze),Z.resetTextureUnits();const Ee=N.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,we=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ct.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=de.get(G.envMap||Re,Le),et=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,at=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!$.morphAttributes.position,xt=!!$.morphAttributes.normal,kt=!!$.morphAttributes.color;let Pt=pi;G.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const Tt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,an=Tt!==void 0?Tt.length:0,Ce=V.get(G),pn=w.state.lights;if(le===!0&&(ce===!0||S!==te)){const Rt=S===te&&G.id===K;Oe.setState(G,S,Rt)}let ft=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==pn.state.version||Ce.outputColorSpace!==we||H.isBatchedMesh&&Ce.batching===!1||!H.isBatchedMesh&&Ce.batching===!0||H.isBatchedMesh&&Ce.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ce.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ce.instancing===!1||!H.isInstancedMesh&&Ce.instancing===!0||H.isSkinnedMesh&&Ce.skinning===!1||!H.isSkinnedMesh&&Ce.skinning===!0||H.isInstancedMesh&&Ce.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ce.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ce.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ce.instancingMorph===!1&&H.morphTexture!==null||Ce.envMap!==Ne||G.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Oe.numPlanes||Ce.numIntersection!==Oe.numIntersection)||Ce.vertexAlphas!==et||Ce.vertexTangents!==at||Ce.morphTargets!==Ie||Ce.morphNormals!==xt||Ce.morphColors!==kt||Ce.toneMapping!==Pt||Ce.morphTargetsCount!==an||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ce.__version=G.version);let kn=Ce.currentProgram;ft===!0&&(kn=_a(G,N,H),O&&G.isNodeMaterial&&O.onUpdateProgram(G,kn,Ce));let ri=!1,Gi=!1,Is=!1;const Et=kn.getUniforms(),Ot=Ce.uniforms;if(v.useProgram(kn.program)&&(ri=!0,Gi=!0,Is=!0),G.id!==K&&(K=G.id,Gi=!0),Ce.needsLights){const Rt=fp(w.state.lightProbeGridArray,H);Ce.lightProbeGrid!==Rt&&(Ce.lightProbeGrid=Rt,Gi=!0)}if(ri||te!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(I,"projectionMatrix",S.projectionMatrix),Et.setValue(I,"viewMatrix",S.matrixWorldInverse);const Vi=Et.map.cameraPosition;Vi!==void 0&&Vi.setValue(I,me.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),te!==S&&(te=S,Gi=!0,Is=!0)}if(Ce.needsLights&&(pn.state.sunShadowMap.length>0&&Et.setValue(I,"sunShadowMap",pn.state.sunShadowMap,Z),pn.state.directionalShadowMap.length>0&&Et.setValue(I,"directionalShadowMap",pn.state.directionalShadowMap,Z),pn.state.spotShadowMap.length>0&&Et.setValue(I,"spotShadowMap",pn.state.spotShadowMap,Z),pn.state.pointShadowMap.length>0&&Et.setValue(I,"pointShadowMap",pn.state.pointShadowMap,Z)),H.isSkinnedMesh){Et.setOptional(I,H,"bindMatrix"),Et.setOptional(I,H,"bindMatrixInverse");const Rt=H.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Et.setValue(I,"boneTexture",Rt.boneTexture,Z))}H.isBatchedMesh&&(Et.setOptional(I,H,"batchingTexture"),Et.setValue(I,"batchingTexture",H._matricesTexture,Z),Et.setOptional(I,H,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",H._indirectTexture,Z),Et.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",H._colorsTexture,Z));const Hi=$.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&F.update(H,$,kn),(Gi||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,Et.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Ot.envMapIntensity.value=N.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Ey()),Gi){if(Et.setValue(I,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&mp(Ot,Is),Ee&&G.fog===!0&&Fe.refreshFogUniforms(Ot,Ee),Fe.refreshMaterialUniforms(Ot,G,ne,Q,w.state.transmissionRenderTarget[S.id]),Ce.needsLights&&Ce.lightProbeGrid){const Rt=Ce.lightProbeGrid;Ot.probesSH.value=Rt.texture,Ot.probesMin.value.copy(Rt.boundingBox.min),Ot.probesMax.value.copy(Rt.boundingBox.max),Ot.probesResolution.value.copy(Rt.resolution)}io.upload(I,Uu(Ce),Ot,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(io.upload(I,Uu(Ce),Ot,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(I,"center",H.center),Et.setValue(I,"modelViewMatrix",H.modelViewMatrix),Et.setValue(I,"normalMatrix",H.normalMatrix),Et.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const Rt=G.uniformsGroups;for(let Vi=0,Ds=Rt.length;Vi<Ds;Vi++){const Bu=Rt[Vi];ae.update(Bu,kn),ae.bind(Bu,kn)}}return kn}function mp(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function gp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(S,N,$){const G=V.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=N,V.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const $=V.get(S);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,$=0){oe=S,q=N,Y=$;let G=null,H=!1,Ee=!1;if(S){const we=V.get(S);if(we.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,we.__webglFramebuffer),re.copy(S.viewport),Ue.copy(S.scissor),Pe=S.scissorTest,v.viewport(re),v.scissor(Ue),v.setScissorTest(Pe),K=-1;return}else if(we.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(we.__hasExternalTextures)Z.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const et=S.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&V.has(et)&&(S.width!==et.image.width||S.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);const Ne=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?G=Ne[N][$]:G=Ne[N],H=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?G=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[$]:G=Ne,re.copy(S.viewport),Ue.copy(S.scissor),Pe=S.scissorTest}else re.copy(Ae).multiplyScalar(ne).floor(),Ue.copy($e).multiplyScalar(ne).floor(),Pe=yt;if($!==0&&(G=W),v.bindFramebuffer(I.FRAMEBUFFER,G)&&v.drawBuffers(S,G),v.viewport(re),v.scissor(Ue),v.setScissorTest(Pe),H){const we=V.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,$)}else if(Ee){const we=N;for(let Le=0;Le<S.textures.length;Le++){const Ne=V.get(S.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,$,we)}}else if(S!==null&&$!==0){const we=V.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,we.__webglTexture,$)}K=-1};function Ou(S){const N=V.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=C.textureFormatReadable(S.format),N.__typeReadable=C.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,$,G,H,Ee,Re,we=0){if(!(S&&S.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){v.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Ne=S.textures[we],et=Ne.format,at=Ne.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+we);const Ie=Ou(Ne);if(Ie.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&$>=0&&$<=S.height-H&&I.readPixels(N,$,G,H,xe.convert(et),xe.convert(at),Ee)}finally{const Ne=oe!==null?V.get(oe).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,N,$,G,H,Ee,Re,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(N>=0&&N<=S.width-G&&$>=0&&$<=S.height-H){v.bindFramebuffer(I.FRAMEBUFFER,Le);const Ne=S.textures[we],et=Ne.format,at=Ne.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+we);const Ie=Ou(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.bufferData(I.PIXEL_PACK_BUFFER,Ee.byteLength,I.STREAM_READ),I.readPixels(N,$,G,H,xe.convert(et),xe.convert(at),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const kt=oe!==null?V.get(oe).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,kt);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ym(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ee),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(xt),I.deleteSync(Pt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,$=0){const G=Math.pow(2,-$),H=Math.floor(S.image.width*G),Ee=Math.floor(S.image.height*G),Re=N!==null?N.x:0,we=N!==null?N.y:0;Z.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Re,we,H,Ee),v.unbindTexture()},this.copyTextureToTexture=function(S,N,$=null,G=null,H=0,Ee=0){let Re,we,Le,Ne,et,at,Ie,xt,kt;const Pt=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if($!==null)Re=$.max.x-$.min.x,we=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,et=$.min.y,at=$.isBox3?$.min.z:0;else{const Ot=Math.pow(2,-H);Re=Math.floor(Pt.width*Ot),we=Math.floor(Pt.height*Ot),S.isDataArrayTexture?Le=Pt.depth:S.isData3DTexture?Le=Math.floor(Pt.depth*Ot):Le=1,Ne=0,et=0,at=0}G!==null?(Ie=G.x,xt=G.y,kt=G.z):(Ie=0,xt=0,kt=0);const Tt=xe.convert(N.format),an=xe.convert(N.type);let Ce;N.isData3DTexture?(Z.setTexture3D(N,0),Ce=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ce=I.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ce=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const pn=v.getParameter(I.UNPACK_ROW_LENGTH),ft=v.getParameter(I.UNPACK_IMAGE_HEIGHT),kn=v.getParameter(I.UNPACK_SKIP_PIXELS),ri=v.getParameter(I.UNPACK_SKIP_ROWS),Gi=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,Pt.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),v.pixelStorei(I.UNPACK_SKIP_ROWS,et),v.pixelStorei(I.UNPACK_SKIP_IMAGES,at);const Is=S.isDataArrayTexture||S.isData3DTexture,Et=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Ot=V.get(S),Hi=V.get(N),Rt=V.get(Ot.__renderTarget),Vi=V.get(Hi.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,Rt.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Ds=0;Ds<Le;Ds++)Is&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(S).__webglTexture,H,at+Ds),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(N).__webglTexture,Ee,kt+Ds)),I.blitFramebuffer(Ne,et,Re,we,Ie,xt,Re,we,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||V.has(S)){const Ot=V.get(S),Hi=V.get(N);v.bindFramebuffer(I.READ_FRAMEBUFFER,U),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let Rt=0;Rt<Le;Rt++)Is?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,H,at+Rt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,H),Et?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Hi.__webglTexture,Ee,kt+Rt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Hi.__webglTexture,Ee),H!==0?I.blitFramebuffer(Ne,et,Re,we,Ie,xt,Re,we,I.COLOR_BUFFER_BIT,I.NEAREST):Et?I.copyTexSubImage3D(Ce,Ee,Ie,xt,kt+Rt,Ne,et,Re,we):I.copyTexSubImage2D(Ce,Ee,Ie,xt,Ne,et,Re,we);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Ce,Ee,Ie,xt,kt,Re,we,Le,Tt,an,Pt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,Ee,Ie,xt,kt,Re,we,Le,Tt,Pt.data):I.texSubImage3D(Ce,Ee,Ie,xt,kt,Re,we,Le,Tt,an,Pt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ee,Ie,xt,Re,we,Tt,an,Pt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ee,Ie,xt,Pt.width,Pt.height,Tt,Pt.data):I.texSubImage2D(I.TEXTURE_2D,Ee,Ie,xt,Re,we,Tt,an,Pt);v.pixelStorei(I.UNPACK_ROW_LENGTH,pn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft),v.pixelStorei(I.UNPACK_SKIP_PIXELS,kn),v.pixelStorei(I.UNPACK_SKIP_ROWS,ri),v.pixelStorei(I.UNPACK_SKIP_IMAGES,Gi),Ee===0&&N.generateMipmaps&&I.generateMipmap(Ce),v.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){q=0,Y=0,oe=null,v.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const Ay=.001;function Cy(i,e){return{col:{x:Math.cos(i),y:Math.sin(e)*Math.sin(i)},row:{x:-Math.sin(i),y:Math.sin(e)*Math.cos(i)}}}function Ry(i,e,t=Ay){const n=g=>{const _=Math.hypot(g.x,g.y)||1;return{x:g.x/_,y:g.y/_}},s=n(i),r=n(e),a=g=>g<-t?-1:1,o=Math.abs(s.x)-Math.abs(r.x),l=o>t?!0:o<-t?!1:a(s.x)*s.y>=a(r.x)*r.y-t,c=l?s:r,u=l?r:s,d=a(c.x),h=a(u.y),f=(g,_)=>g?{dx:_,dy:0}:{dx:0,dy:_};return{ArrowRight:f(l,d),ArrowLeft:f(l,-d),ArrowDown:f(!l,h),ArrowUp:f(!l,-h)}}function Py(i,e){const{col:t,row:n}=Cy(i,e);return Ry(t,n)}function Ly(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Gt;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=md(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][h]);const g=md(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function md(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new vn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const _=u.getComponent(h,g);o.setComponent(h+d,g,_)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function X(i,e,t={}){const n=new ht().compose(new L(...t.p??[0,0,0]),new yi().setFromEuler(new ni(...t.r??[0,0,0])),new L(...t.s??[1,1,1]));return{geo:i.clone().applyMatrix4(n),color:e,glow:t.glow}}const ot=(i,e,t={})=>X(i,e,{...t,glow:!0});function gd(i,e,t,n,s=0,r=1){const a=new ht().compose(new L(e,t,n),new yi().setFromEuler(new ni(0,s,0)),new L(r,r,r));return i.map(o=>({geo:o.geo.clone().applyMatrix4(a),color:o.color,glow:o.glow}))}function Dc(i,e=.5,t=0){const n=i.map(({geo:r,color:a,glow:o})=>{const l=r.index?r.toNonIndexed():r.clone();for(const h of Object.keys(l.attributes))h!=="position"&&l.deleteAttribute(h);const c=l.getAttribute("position"),u=new Float32Array(c.count*3),d=new ke(a);for(let h=0;h<c.count;h++){const f=c.getY(h)-t,g=o?1:e>0?.72+.28*Math.min(1,Math.max(0,f/e)):1;u[h*3]=d.r*g,u[h*3+1]=d.g*g,u[h*3+2]=d.b*g}return l.setAttribute("color",new vn(u,3)),l});if(!n.length){const r=new Gt;return r.setAttribute("position",new gt([],3)),r.setAttribute("color",new gt([],3)),r}const s=Ly(n,!1);return s.computeVertexNormals(),s.computeBoundingSphere(),s}function Hf(i,e){const t=i.filter(s=>!s.glow),n=i.filter(s=>s.glow);return{body:Dc(t,e),glow:n.length?Dc(n,0):null}}const Se=(i,e,t)=>new ii(i,e,t),ut=(i,e,t,n=8)=>new Ls(i,e,t,n),Un=(i,e,t=8)=>new jr(i,e,t),Ut=(i,e=0)=>new mu(i,e);function Ui(i,e,t){const n=i.index?i.toNonIndexed():i,s=n.getAttribute("position"),r=c=>`${s.getX(c).toFixed(3)},${s.getY(c).toFixed(3)},${s.getZ(c).toFixed(3)}`,a=new Map;let o=t;const l=()=>(o=o*16807%2147483647,o/2147483647-.5);for(let c=0;c<s.count;c++){const u=r(c);a.has(u)||a.set(u,[l()*e,l()*e,l()*e]);const d=a.get(u);s.setXYZ(c,s.getX(c)+d[0],s.getY(c)+d[1],s.getZ(c)+d[2])}return n}function Wr(i,e,t){const n=new pu;n.moveTo(-e/2,0),n.lineTo(e/2,0),n.lineTo(0,t),n.closePath();const s=new Po(n,{depth:i,bevelEnabled:!1});return s.translate(0,0,-i/2),s.rotateY(Math.PI/2),s}const gi=(i,e)=>Ui(Ut(i,1),i*.16,e);function Nn(i,e){const t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}const fe={tile:8284374,tileEdge:6837184,grassEdge:6245302,soilLight:11832458,grassTop:7297739,grassTop2:6903236,grassLight:8810716,grassDark:4864920,grassLip:5916589,soil:10122358,soilDark:6243922,soilDeep:3812410,cliff:7756138,cliffDark:6047062,cliffDeep:4009533,leafLight:8098784,leaf:6717392,leafMid:5532605,leafDark:4281244,pine:5203124,pineLight:6519240,pineDark:4018072,trunk:10121349,canvas:16051174,stripe:13583987,wall:15787746,timber:9136742,plank:12094082,plankDark:9332578,roof:13583987,roofDark:10696284,glowWarm:16758876,beacon:16735608,flameOuter:16751165,flameInner:16770202,rock:13089238,rockLight:14471400,rockDark:10457270,moss:6979536,flag:13583987,flowerPink:15764662,flowerYellow:16766078,flowerWhite:16183295,mushroom:13583987,white:16183295},b={white:16052728,cream:16182236,paving:14867692,pavingDark:13222106,sky:9225202,skyDeep:6067680,teal:6934468,tealDeep:4172198,mint:10805958,pink:15967676,coral:15894399,peach:16762012,lavender:11903982,lilac:13944054,butter:16507803,gold:15974501,silver:14080490,slateBlue:7307206,roofRed:14840698,roofBlue:8228822,door:9068656,winWarm:16769700,winCool:12905727,winPink:16763106,green:7128460,greenLight:9691046,greenDark:4563313,orange:16229212,trunk:10976120};function It(i,e=[0,0,0],t=[0,0,0],n=[1,1,1]){const s=new ht().compose(new L(...e),new yi().setFromEuler(new ni(...t)),new L(...n));return i.map(r=>({geo:r.geo.clone().applyMatrix4(s),color:r.color,glow:r.glow}))}function Cl(i,e,t=0){for(const n of i){const s=n.geo.getAttribute("position");for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+Math.max(0,s.getY(r)-t)*e);s.needsUpdate=!0}return i}function Ln(i,e,t,n){const s=1/Math.cos(Math.PI/i),r=new Ls(Math.max(5e-4,t*s),e*s,n,i);return i===4&&r.rotateY(Math.PI/4),i===8&&r.rotateY(Math.PI/8),r.translate(0,n/2,0),r}function qe(i){const e=i.seg??4,t=i.w,n=i.top??i.w,s=i.y??0,r=i.glow??b.winWarm,a=i.lit??.35,o=i.seed??1,l=Math.abs(t-n)<1e-6;let c=i.style??"ribbon";c==="grid"&&!(e===4&&l)&&(c="ribbon"),c==="fins"&&!l&&(c="glass");const u=Math.max(1,Math.round(i.h/(i.floor??.13))),d=i.h/u,h=_=>t+(n-t)*(_/i.h),f=[],g=(_,m,p,y,T=!1)=>f.push(X(Ln(e,h(_)+p,h(Math.min(i.h,_+m))+p,m),y,{p:[0,s+_,0],glow:T}));if(c==="grid"){f.push(X(Ln(4,t,t,i.h),i.body,{p:[0,s,0]}));const _=Math.max(2,Math.round(2*t/.15)),m=2*t/_;for(let p=0;p<u;p++)for(let y=0;y<4;y++)for(let T=0;T<_;T++){const M=Nn(o*7+p*3+y,T)<a,E=Se(m*.56,d*.52,.02).translate(-t+m*(T+.5),s+p*d+d*.5,t+.006).rotateY(y*Math.PI/2);f.push({geo:E,color:M?r:i.glass,glow:M})}return f}if(f.push(X(Ln(e,t,n,i.h),i.glass,{p:[0,s,0]})),c==="ribbon"){for(let _=0;_<u;_++)g(_*d,d*.4,.012,i.body),Nn(o*11+_,3)<a&&g(_*d+d*.52,d*.34,.004,r,!0);g(i.h-.02,.04,.018,i.body)}else if(c==="fins"){if(e===4){const _=Math.max(3,Math.round(2*t/.11));for(let m=0;m<4;m++){for(let p=0;p<=_;p++)f.push({geo:Se(.022,i.h,.03).translate(-t+p*2*t/_,s+i.h/2,t+.008).rotateY(m*Math.PI/2),color:i.body});for(let p=0;p<u;p++)for(let y=0;y<_;y++)Nn(o*5+p*7+m,y)>=a*.7||f.push({geo:Se(2*t/_-.03,d*.6,.012).translate(-t+(y+.5)*2*t/_,s+p*d+d*.5,t+.003).rotateY(m*Math.PI/2),color:r,glow:!0})}}else{const _=Math.max(6,e),m=t/Math.cos(Math.PI/e);for(let p=0;p<_;p++){const y=(p+.5)/_*Math.PI*2;f.push(X(Se(.024,i.h,.04),i.body,{p:[Math.sin(y)*m,s+i.h/2,Math.cos(y)*m],r:[0,y,0]}))}for(let p=0;p<u;p++)Nn(o*13+p,5)<a*.8&&g(p*d+d*.3,d*.4,.003,r,!0)}for(let _=0;_<=u;_+=4)g(Math.min(i.h-.02,_*d),.025,.02,i.body)}else{if(e===4&&l)for(const[_,m]of[[-1,-1],[1,-1],[1,1],[-1,1]])f.push(X(Se(.04,i.h,.04),i.body,{p:[_*t,s+i.h/2,m*t]}));for(let _=0;_<u;_++)_%3===0&&g(_*d,.022,.01,i.body),Nn(o*17+_,9)<a&&g(_*d+d*.32,d*.42,.003,r,!0);g(i.h-.02,.04,.016,i.body)}return f}const Ri=(i,e,t,n,s,r=!1)=>X(Ln(i,e,0,t),n,{p:[0,s,0],glow:r});function qt(i,e,t=b.silver,n=fe.beacon){return[X(ut(.008,.028,e,6),t,{p:[0,i+e/2,0]}),ot(Ut(.028,0),n,{p:[0,i+e,0]})]}function _d(i,e,t,n,s){const r=new pu;r.moveTo(-i,0),r.lineTo(i,0),r.lineTo(-i,t),r.closePath();const a=new Po(r,{depth:2*e,bevelEnabled:!1}).translate(0,0,-e);return X(a,n,{p:[0,s,0]})}const Rl=(i,e,t,n=!1)=>X(new gu(i,14,6,0,Math.PI*2,0,Math.PI/2),t,{p:[0,e,0],glow:n}),Ki=(i,e,t,n=[Math.PI/2,0,0],s=.018)=>ot(new ia(i,s,4,24),t,{p:[0,e,0],r:n});function Vf(i,e,t){return[X(Se(i*.5,.05,i*.4),b.silver,{p:[-i*.3,e+.025,i*.25]}),X(Se(i*.3,.07,i*.3),b.paving,{p:[i*.35,e+.035,-i*.3+Nn(t,2)*.04]}),X(ut(i*.16,i*.16,.08,8),b.pavingDark,{p:[i*.3,e+.04,i*.3]})]}function Ii(i,e,t=1,n=b.green,s=0,r=1){return[X(ut(.012*t,.018*t,.14*t,5),b.trunk,{p:[i,s+.07*t,e]}),X(gi(.08*t,r),n,{p:[i,s+.19*t,e]})]}function Wf(i,e,t=0){return[X(ut(.008,.01,.2,5),b.slateBlue,{p:[i,t+.1,e]}),ot(Ut(.022,0),b.winWarm,{p:[i,t+.21,e]})]}function pt(i,e=2,t=b.green){const n=[X(Se(.9,.04,.9),b.pavingDark,{p:[0,.02,0]}),X(Se(.84,.02,.84),b.paving,{p:[0,.05,0]})],s=[[.36,.36],[-.36,.36],[.36,-.36],[-.36,-.36]];for(let r=0;r<e&&r<4;r++)n.push(...Ii(s[r][0],s[r][1],.9,Nn(i,r)>.6?b.orange:t,.06,i+r));return e<4&&n.push(...Wf(s[3][0],s[3][1],.06)),n}const Iy=.06;function Dy(){return[X(gi(.15,51),b.green,{p:[0,.11,0],s:[1,.85,1]}),X(gi(.11,52),b.greenLight,{p:[.1,.15,.06]}),X(gi(.1,53),b.greenDark,{p:[-.1,.08,.07]}),X(Ut(.025,0),fe.flowerPink,{p:[.04,.22,.1]}),X(Ut(.022,0),fe.flowerWhite,{p:[-.07,.17,.13]})]}function Ny(){return[X(ut(.035,.05,.36,6),b.trunk,{p:[0,.18,0]}),X(gi(.24,61),b.green,{p:[0,.5,0]}),X(gi(.16,62),b.greenLight,{p:[.12,.62,.08]}),X(gi(.15,63),b.greenDark,{p:[-.12,.42,.1]})]}const vd=(i,e,t,n)=>i*(1-(n-t)/e);function Uy(){const n=(s,r)=>X(ut(vd(.3,.68,.02,s+r)+.006,vd(.3,.68,.02,s)+.006,r,9),fe.stripe,{p:[0,s+r/2,0]});return[X(ut(.38,.38,.02,12),b.lilac,{p:[0,.01,0]}),X(Un(.3,.68,9),fe.canvas,{p:[0,.02+.68/2,0]}),n(.12,.05),n(.3,.035),n(.47,.06),...[0,2.1,4.2].map(s=>X(ut(.008,.008,.24,4),fe.timber,{p:[Math.sin(s)*.03,.02+.68+.04,Math.cos(s)*.03],r:[Math.cos(s)*.35,0,-Math.sin(s)*.35]})),ot(Un(.1,.24,3),fe.glowWarm,{p:[0,.13,.22],r:[-.42,Math.PI,0],s:[1,1,.25]}),X(Un(.06,.2,3),fe.stripe,{p:[.09,.12,.24],r:[-.42,Math.PI+.5,0],s:[1,1,.2]}),X(ut(.01,.012,.3,5),fe.timber,{p:[.33,.15,.18]}),ot(Se(.05,.06,.05),b.winWarm,{p:[.33,.31,.18]}),X(Un(.04,.04,4),b.slateBlue,{p:[.33,.36,.18],r:[0,Math.PI/4,0]}),X(ut(.04,.04,.22,7),fe.plank,{p:[-.3,.04,.2],r:[Math.PI/2,.6,0]})]}function Hn(i,e,t,n,s,r,a=b.skyDeep){return[X(Se(n+.03,s+.03,.012),b.white,{p:[i,e,t]}),X(Se(n,s,.014),r?b.winWarm:a,{p:[i,e,t+.004],glow:r}),X(Se(n+.04,.015,.03),b.white,{p:[i,e-s/2-.012,t+.01]})]}function Fy(){return[X(Se(.54,.04,.42),b.pavingDark,{p:[0,.02,0]}),X(Se(.5,.3,.38),b.cream,{p:[0,.19,0]}),X(Wr(.62,.5,.27),b.roofRed,{p:[0,.34,0]}),X(Wr(.5,.38,.21),b.cream,{p:[0,.34,0]}),X(Se(.64,.025,.05),fe.roofDark,{p:[0,.6,0]}),X(Se(.08,.22,.08),b.coral,{p:[-.15,.55,-.08]}),X(Se(.1,.025,.1),b.pavingDark,{p:[-.15,.67,-.08]}),X(Se(.12,.19,.012),b.white,{p:[.11,.135,.192]}),X(Se(.095,.17,.014),b.door,{p:[.11,.13,.197]}),ot(Se(.012,.012,.01),b.winWarm,{p:[.14,.13,.205]}),X(Se(.15,.025,.07),b.pavingDark,{p:[.11,.0125,.23]}),X(Wr(.17,.09,.05),b.roofRed,{p:[.11,.24,.215]}),...Hn(-.12,.2,.19,.11,.09,!0),X(Se(.13,.03,.035),fe.plank,{p:[-.12,.135,.215]}),...[-.16,-.12,-.08].map((e,t)=>X(Ut(.018,0),t===1?fe.flowerYellow:fe.flowerPink,{p:[e,.16,.22]})),...It(Hn(0,.2,.25,.1,.09,!0),[0,0,0],[0,Math.PI/2,0]),...It(Hn(0,.2,.25,.1,.09,!1),[0,0,0],[0,-Math.PI/2,0]),X(gi(.075,71),b.green,{p:[-.3,.06,.24]}),X(gi(.05,72),b.greenLight,{p:[.3,.05,.26]}),X(Se(.08,.012,.06),b.paving,{p:[.11,.006,.31]}),X(Se(.07,.012,.06),b.paving,{p:[.13,.006,.39]})]}function Oy(){return[X(Se(.74,.035,.56),b.pavingDark,{p:[.02,.0175,0]}),X(Se(.42,.5,.4),b.white,{p:[-.08,.285,-.02]}),X(Se(.44,.02,.42),b.lilac,{p:[-.08,.29,-.02]}),X(Wr(.52,.5,.26),b.roofBlue,{p:[-.08,.535,-.02]}),X(Wr(.42,.4,.21),b.white,{p:[-.08,.535,-.02]}),X(Se(.54,.025,.05),b.slateBlue,{p:[-.08,.795,-.02]}),X(Se(.07,.2,.07),b.coral,{p:[-.08-.13,.72,-.12]}),X(Se(.26,.27,.36),b.cream,{p:[.25,.17,0]}),X(Se(.3,.03,.4),b.pavingDark,{p:[.25,.32,0]}),X(Se(.2,.18,.012),b.silver,{p:[.25,.125,.185]}),...[.07,.11,.15,.19].map(e=>X(Se(.2,.008,.016),b.pavingDark,{p:[.25,e,.19]})),ot(Se(.1,.06,.012),b.winWarm,{p:[.25,.25,-.186]}),X(Se(.22,.03,.12),b.paving,{p:[-.08-.03,.05,.24]}),...[-.13,.03].map(e=>X(ut(.012,.012,.2,5),b.white,{p:[-.08+e,.16,.29]})),X(Se(.26,.025,.15),b.roofBlue,{p:[-.08-.03,.27,.235]}),X(Se(.1,.17,.012),b.white,{p:[-.08-.05,.13,.182]}),X(Se(.08,.155,.014),b.door,{p:[-.08-.05,.125,.186]}),...Hn(-.08+.11,.17,.181,.09,.08,!0),...Hn(-.08-.1,.42,.181,.1,.09,!0),...Hn(-.08+.1,.42,.181,.1,.09,Nn(4,1)>.5),...It(Hn(0,.42,.211,.1,.09,!1),[-.08,0,-.02],[0,-Math.PI/2,0]),...It(Hn(0,.17,.211,.1,.09,!0),[-.08,0,-.02],[0,-Math.PI/2,0]),...It(Hn(-.08,.42,.201,.1,.09,!0),[-.08,0,-.02],[0,Math.PI,0]),...Ii(.33,.3,1.1,b.orange,0,81),X(Se(.05,.05,.3),b.greenDark,{p:[-.36,.025,.08]})]}function By(){const i=[X(Se(.78,.035,.66),b.pavingDark,{p:[0,.0175,0]}),X(Se(.64,.22,.52),b.cream,{p:[0,.145,0]}),X(Se(.62,.78,.5),b.peach,{p:[0,.645,0]}),X(Se(.66,.04,.54),b.white,{p:[0,1.055,0]}),X(Se(.66,.03,.54),b.white,{p:[0,.27,0]}),ot(Se(.42,.12,.012),b.winWarm,{p:[-.05,.13,.262]}),X(Se(.1,.16,.014),b.door,{p:[.22,.115,.262]}),...[0,1,2,3,4].map(e=>X(Se(.09,.02,.1),e%2?b.white:b.coral,{p:[-.23+e*.09,.225,.3],r:[.35,0,0]})),...Vf(.3,1.075,5)];for(let e=0;e<4;e++){const t=.37+e*.19;for(let n=0;n<3;n++){const s=-.2+n*.2,r=Nn(e*3+1,n)<.55;i.push(...Hn(s,t,.251,.1,.1,r)),i.push(...It(Hn(s,t,.251,.1,.1,Nn(e*5+2,n)<.3),[0,0,0],[0,Math.PI,0])),n!==1&&(i.push(X(Se(.16,.02,.08),b.white,{p:[s,t-.07,.29]})),i.push(X(Se(.16,.05,.008),b.winCool,{p:[s,t-.035,.33]})))}for(const n of[1,-1])for(let s=0;s<2;s++)i.push(...It(Hn(-.1+s*.2,t,.311,.09,.1,Nn(e*7+n,s)<.45),[0,0,0],[0,n*Math.PI/2,0]))}return i}function ky(){return[X(Se(.86,.035,.86),b.pavingDark,{p:[0,.0175,0]}),X(Se(.74,.16,.74),b.white,{p:[0,.115,0]}),ot(Se(.4,.09,.012),b.winWarm,{p:[0,.1,.372]}),ot(Se(.012,.09,.4),b.winWarm,{p:[.372,.1,0]}),...qe({w:.28,h:.92,y:.195,body:b.lilac,glass:b.skyDeep,style:"grid",floor:.13,lit:.5,seed:6}),X(Se(.6,.03,.6),b.white,{p:[0,1.13,0]}),...qe({w:.2,h:.16,y:1.145,body:b.white,glass:b.teal,style:"glass",seed:7,lit:.6}),X(Se(.36,.02,.36),b.green,{p:[0,1.315,0]}),...Ii(.1,.08,.7,b.greenLight,1.325,93),...Wf(-.1,-.1,1.325),...Ii(.36,.36,.9,b.green,.035,91),...Ii(-.36,.36,.9,b.orange,.035,92)]}function Pl(i,e,t,n,s,r,a,o,l,c=e){const u=[],d=Math.max(8,Math.round(t/.1)),h=t/d;for(let f=0;f<d;f++){const g=e+(c-e)*(f/d),_=Nn(l+f,4)<.35;u.push(X(Ln(i,g*.9,g*.9,h*.98),_?o:a,{p:[0,n+f*h,0],r:[0,s*f/d,0],glow:_})),u.push(X(Ln(i,g,g,h*.28),r,{p:[0,n+f*h,0],r:[0,s*f/d,0]}))}return u}function Ll(i,e,t,n,s,r=!1,a=.25){const o=[];for(let l=0;l<i;l++){const c=l/i*Math.PI*2;o.push(X(Un(.025,n,4),s,{p:[Math.sin(c)*e,t+n/2,Math.cos(c)*e],r:[Math.cos(c)*a,0,-Math.sin(c)*a],glow:r}))}return o}const zy=i=>1.6+i*.058;function Gy(i){const e=i-Hc,t=zy(e),n=Iy,s=[],r=(...a)=>s.push(...a);switch(e){case 0:{r(...pt(e,2)),r(...qe({w:.32,h:t-.3,y:n,body:b.white,glass:b.sky,style:"ribbon",seed:11})),r(...qe({w:.24,h:.2,y:n+t-.3,body:b.white,glass:b.skyDeep,style:"glass",seed:12})),r(...Vf(.24,n+t-.1,3)),r(...qt(n+t-.1,.3));break}case 1:{r(...pt(e,3,b.green)),r(...qe({w:.34,top:.2,h:t*.8,y:n,body:b.white,glass:b.teal,style:"glass",seed:21,lit:.4})),r(Ri(4,.2,t*.22,b.tealDeep,n+t*.8)),r(...qt(n+t*1.02,.12));break}case 2:{r(...pt(e,2)),r(...qe({seg:16,w:.3,h:t*.92,y:n,body:b.white,glass:b.lavender,style:"fins",seed:31,glow:b.winPink})),r(X(ut(.33,.33,.04,16),b.white,{p:[0,n+t*.92+.02,0]})),r(X(ut(.18,.18,.02,16),b.slateBlue,{p:[0,n+t*.92+.05,0]})),r(Ki(.15,n+t*.92+.065,b.winWarm,[Math.PI/2,0,0],.01));break}case 3:{r(...pt(e,2,b.orange)),r(...qe({w:.36,h:t*.34,y:n,body:b.cream,glass:b.skyDeep,style:"grid",seed:41})),r(...qe({w:.28,h:t*.32,y:n+t*.34,body:b.cream,glass:b.skyDeep,style:"grid",seed:42})),r(...qe({w:.2,h:t*.2,y:n+t*.66,body:b.cream,glass:b.skyDeep,style:"grid",seed:43})),r(X(Ln(8,.15,.1,.12),b.gold,{p:[0,n+t*.86,0]})),r(X(Ln(8,.1,.05,.1),b.gold,{p:[0,n+t*.86+.12,0]})),r(...qt(n+t*.86+.22,.22,b.gold));break}case 4:{r(...pt(e,2)),r(...It(qe({w:.34,h:t*.86,y:n,body:b.white,glass:b.pink,style:"fins",seed:51,glow:b.winPink}),[0,0,0],[0,0,0],[1,1,.68])),r(...It([_d(.34,.34,t*.18,b.coral,n+t*.86)],[0,0,0],[0,0,0],[1,1,.68]));for(const[a,o]of[[1,1],[-1,1],[1,-1],[-1,-1]])r(ot(Se(.02,t*.86,.02),b.winPink,{p:[a*.35,n+t*.43,o*.24]}));break}case 5:{r(...pt(e,1));const a=[[.33,.04,.03,0],[.29,-.04,-.02,.2],[.25,.03,.03,-.15],[.21,-.02,-.02,.1]];let o=n;const l=t/4.4;a.forEach(([c,u,d,h],f)=>{r(...It(qe({w:c,h:l,y:0,body:b.white,glass:b.mint,style:"ribbon",seed:61+f}),[u,o,d],[0,h,0])),f<3&&(r(...Ii(u+c*.62,d+c*.62,.8,f%2?b.orange:b.green,o+l,65+f)),r(...Ii(u-c*.62,d+c*.5,.7,b.greenLight,o+l,68+f))),o+=l}),r(...Ii(0,0,1.3,b.green,o,70));break}case 6:{r(...pt(e,2,b.orange)),r(...Pl(4,.31,t*.95,n,Math.PI/2,b.white,b.peach,b.winWarm,71)),r(...qt(n+t*.95,.18));break}case 7:{r(...pt(e,0));for(const a of[-.2,.2]){const o=It([...qe({seg:8,w:.15,h:t*.5,y:n,body:b.silver,glass:b.sky,style:"ribbon",seed:81}),...qe({seg:8,w:.12,h:t*.25,y:n+t*.5,body:b.silver,glass:b.sky,style:"ribbon",seed:82}),...qe({seg:8,w:.09,h:t*.12,y:n+t*.75,body:b.silver,glass:b.skyDeep,style:"glass",seed:83}),Ri(8,.09,.12,b.silver,n+t*.87),...qt(n+t*.99,.16)],[a,0,0]);r(...o)}r(X(Se(.26,.06,.1),b.white,{p:[0,n+t*.45,0]})),r(ot(Se(.24,.025,.105),b.winCool,{p:[0,n+t*.45,0]}));break}case 8:{r(...pt(e,2)),r(...qe({w:.3,h:t*.74,y:n,body:b.white,glass:b.sky,style:"glass",seed:91,lit:.3})),r(ot(Se(.4,t*.13,.4),b.winWarm,{p:[0,n+t*.74+t*.065,0]}));for(const[a,o]of[[1,1],[-1,1],[1,-1],[-1,-1]])r(X(Se(.04,t*.13,.04),b.gold,{p:[a*.21,n+t*.805,o*.21]}));r(X(Se(.46,.03,.46),b.gold,{p:[0,n+t*.87+.015,0]})),r(Ri(4,.23,t*.12,b.gold,n+t*.885));break}case 9:{r(...pt(e,2,b.green));const a=[b.teal,b.lavender,b.pink];for(let o=0;o<3;o++)r(...qe({seg:16,w:.31-o*.04,top:.29-o*.04,h:t*.3,y:n+o*t*.3,body:b.white,glass:a[o],style:"ribbon",seed:101+o,glow:[b.winCool,b.winPink,b.winWarm][o]}));r(Rl(.19,n+t*.9,b.white)),r(Ki(.27,n+t*.97,b.winCool));break}case 10:{r(...pt(e,3)),r(...qe({seg:12,w:.27,top:.11,h:t*.86,y:n,body:b.white,glass:b.sky,style:"glass",seed:111,lit:.4})),r(...qt(n+t*.86,t*.18));for(let a=0;a<5;a++){const o=a/5*Math.PI*2;r(X(Ut(.09-a%2*.02,1),b.white,{p:[Math.sin(o)*.3,n+t*.58+a%2*.05,Math.cos(o)*.3],s:[1.4,.7,1]}))}break}case 11:{r(...pt(e,3,b.orange)),r(...qe({seg:3,w:.2,h:t*.8,y:n,body:b.white,glass:b.mint,style:"ribbon",seed:121,glow:b.winCool})),r(Ri(3,.2,t*.26,b.tealDeep,n+t*.8));break}case 12:{r(...pt(e,2)),r(...qe({seg:8,w:.33,h:t*.4,y:n,body:b.lilac,glass:b.lavender,style:"ribbon",seed:131,glow:b.winPink})),r(...qe({seg:8,w:.26,h:t*.3,y:n+t*.4,body:b.lilac,glass:b.lavender,style:"ribbon",seed:132,glow:b.winPink})),r(...qe({seg:8,w:.19,h:t*.16,y:n+t*.7,body:b.lilac,glass:b.skyDeep,style:"glass",seed:133}));for(let a=0;a<5;a++){const o=a/5*Math.PI*2;r(X(ut(.006,.006,.12,4),b.silver,{p:[Math.sin(o)*.13,n+t*.86+.06,Math.cos(o)*.13]})),r(ot(new Hr(.035),b.butter,{p:[Math.sin(o)*.13,n+t*.86+.14,Math.cos(o)*.13]}))}r(...qt(n+t*.86,.26,b.silver,b.butter));break}case 13:{r(...pt(e,2,b.orange)),r(...qe({w:.33,h:t*.48,y:n,body:b.cream,glass:b.skyDeep,style:"grid",seed:141,floor:.15})),r(...qe({w:.25,h:t*.22,y:n+t*.48,body:b.cream,glass:b.skyDeep,style:"grid",seed:142,floor:.15}));let a=n+t*.7;for(let o=0;o<5;o++){const l=.18-o*.03;r(X(Ln(8,l,l*.85,.09),b.gold,{p:[0,a,0]})),r(...Ll(8,l*.9,a+.02,.06,b.winWarm,!0,0)),a+=.09}r(...qt(a,.3,b.gold));break}case 14:{r(...pt(e,0));for(const a of[-.22,.22])r(...It(qe({w:.13,h:t*.82,y:n,body:b.white,glass:b.teal,style:"fins",seed:151,glow:b.winCool}),[a,0,0],[0,0,0],[1,1,1.8]));r(X(Se(.84,.07,.36),b.white,{p:[0,n+t*.82+.035,0]})),r(ot(Se(.85,.02,.37),b.winCool,{p:[0,n+t*.82+.01,0]})),r(X(Se(.78,.02,.3),b.green,{p:[0,n+t*.82+.08,0]}));for(let a=0;a<4;a++)r(...Ii(-.3+a*.2,a%2*.1-.05,.9,a%2?b.orange:b.greenLight,n+t*.82+.09,155+a));break}case 15:{r(...pt(e,2)),r(...qe({seg:16,w:.3,top:.24,h:t*.78,y:n,body:b.white,glass:b.peach,style:"ribbon",seed:161}));const a=n+t*.78;r(X(ut(.27,.27,.04,16),b.white,{p:[0,a+.02,0]}));for(let o=0;o<4;o++){const l=o/4*Math.PI*2+Math.PI/4;r(X(Se(.025,t*.15,.025),b.white,{p:[Math.sin(l)*.2,a+.04+t*.075,Math.cos(l)*.2]}))}r(ot(Ut(.12,1),b.winWarm,{p:[0,a+.04+t*.075,0]})),r(X(ut(.05,.27,.08,16),b.white,{p:[0,a+.04+t*.15+.04,0]})),r(Ki(.32,a+.06,b.winWarm));break}case 16:{r(...pt(e,3,b.green));const a=14,o=l=>.18+.15*Math.sin(Math.PI*Math.min(1,l*1.05))-.04*l;for(let l=0;l<a;l++){const c=l/a,u=(l+1)/a;r(X(Ln(12,o(c),o(u),t*.84/a),l%2?b.white:b.sky,{p:[0,n+c*t*.84,0]})),l%2===0&&Nn(171,l)<.5&&r(X(Ln(12,o(c)+.004,o(u)+.004,t*.84/a/2),b.winCool,{p:[0,n+c*t*.84+t*.84/a/4,0],glow:!0}))}r(ot(Ut(.13,2),b.butter,{p:[0,n+t*.84+.16,0]})),r(X(ut(.01,.01,.06,4),b.silver,{p:[0,n+t*.84+.02,0]}));break}case 17:{r(...pt(e,2)),r(...qe({w:.27,top:.02,h:t,y:n,body:b.white,glass:b.lilac,style:"glass",seed:181,glow:b.winPink})),r(...It(qe({w:.17,top:.01,h:t*.68,y:0,body:b.white,glass:b.sky,style:"glass",seed:182,glow:b.winCool}),[.14,n,.12],[0,.4,0])),r(...It(qe({w:.14,top:.01,h:t*.5,y:0,body:b.white,glass:b.teal,style:"glass",seed:183}),[-.16,n,.1],[0,-.3,0]));break}case 18:{r(...pt(e,2)),r(...qe({w:.31,h:t*.72,y:n,body:b.white,glass:b.slateBlue,style:"fins",seed:191,lit:.5})),r(...qe({w:.2,h:t*.06,y:n+t*.72,body:b.white,glass:b.slateBlue,style:"glass",seed:192}));const a=n+t*.78+.22;r(ot(new ia(.21,.03,6,28),b.gold,{p:[0,a,0],r:[0,Math.PI/4,0]})),r(X(ut(.18,.18,.03,24),b.slateBlue,{p:[0,a,0],r:[Math.PI/2,0,Math.PI/4]})),r(X(Se(.04,.06,.04),b.white,{p:[0,n+t*.78+.01,0]}));break}case 19:{r(...pt(e,2,b.orange)),r(...qe({seg:6,w:.32,h:t*.45,y:n,body:b.white,glass:b.coral,style:"ribbon",seed:201})),r(...qe({seg:6,w:.25,h:t*.3,y:n+t*.45,body:b.white,glass:b.peach,style:"ribbon",seed:202})),r(...Ll(6,.17,n+t*.75,.22,b.winWarm,!0,.55)),r(Ri(6,.17,.16,b.white,n+t*.75)),r(...qt(n+t*.75+.14,.3,b.silver,b.winWarm));break}case 20:{r(...pt(e,3,b.green)),r(...qe({seg:16,w:.24,h:t*.8,y:n,body:b.white,glass:b.mint,style:"fins",seed:211,glow:b.winCool})),r(Rl(.24,n+t*.8,b.white));for(let a=0;a<3;a++)r(Ki(.33-a*.07,n+t*.8+.12+a*.1,a===1?b.winWarm:b.winCool));r(...qt(n+t*.8+.2,.25));break}case 21:{r(...pt(e,2));const a=[...qe({w:.28,top:.16,h:t*.88,y:n,body:b.white,glass:b.sky,style:"glass",seed:221}),...qt(n+t*.88,.22)];r(...Cl(a,.11,n+.2)),r(...Cl([ot(Se(.02,t*.7,.02),b.winCool,{p:[-.3,n+.25+t*.35,.18]})],.11,n+.2));break}case 22:{r(...pt(e,2)),r(...Pl(8,.31,t*.9,n,Math.PI*.75,b.white,b.lavender,b.winPink,231,.22));for(let a=0;a<6;a++){const o=a/6*Math.PI*2;r(ot(Ut(.03,0),a%2?b.winPink:b.winCool,{p:[Math.sin(o)*.32,n+t*.92+Math.sin(o*2)*.04,Math.cos(o)*.32]}))}r(Ki(.32,n+t*.92,b.lilac,[Math.PI/2+.2,0,0],.008)),r(...qt(n+t*.9,.22));break}case 23:{r(...pt(e,1)),r(...qe({w:.2,h:t*.9,y:n,body:b.white,glass:b.pink,style:"fins",seed:241,glow:b.winPink})),r(...qt(n+t*.9,.25)),r(...It([...qe({w:.14,h:t*.62,y:0,body:b.white,glass:b.lavender,style:"ribbon",seed:242}),Ri(4,.14,.18,b.lilac,t*.62)],[-.24,n,.18])),r(...It([...qe({seg:12,w:.12,h:t*.42,y:0,body:b.white,glass:b.sky,style:"ribbon",seed:243,glow:b.winCool}),Rl(.12,t*.42,b.white)],[.22,n,-.22]));break}case 24:{r(...pt(e,2,b.green)),r(...qe({seg:16,w:.27,h:t*.78,y:n,body:b.silver,glass:b.skyDeep,style:"ribbon",seed:251,glow:b.winCool}));const a=n+t*.78+.18;r(X(ut(.05,.1,.1,10),b.silver,{p:[0,n+t*.78+.05,0]})),r(ot(Ut(.12,2),b.winCool,{p:[0,a,0]})),r(Ki(.24,a,b.winWarm,[Math.PI/2+.5,0,.3])),r(Ki(.29,a,b.winPink,[Math.PI/2-.45,0,-.4]));break}case 25:{r(...pt(e,0));for(let a=0;a<3;a++){const o=a/3*Math.PI*2,l=[];for(let c=0;c<4;c++){const u=.36-c*.07;l.push(...It(qe({w:.08,h:t*(.22-c*.02),y:0,body:b.silver,glass:b.sky,style:"ribbon",seed:261+c}),[0,t*(.22*c-.01*c*(c-1)),u/2],[0,0,0],[1,1,u/.16]))}r(...It(l,[0,n,0],[0,o,0]))}r(...qe({seg:12,w:.12,top:.05,h:t*.92,y:n,body:b.silver,glass:b.skyDeep,style:"glass",seed:265,glow:b.winCool})),r(...qt(n+t*.92,t*.18,b.silver,b.winCool));break}case 26:{r(...pt(e,3)),r(...qe({seg:12,w:.18,top:.15,h:t*.62,y:n,body:b.white,glass:b.lilac,style:"fins",seed:271,glow:b.winPink})),r(X(Ln(12,.15,.32,.12),b.white,{p:[0,n+t*.62,0]})),r(...qe({seg:12,w:.32,h:t*.12,y:n+t*.62+.12,body:b.white,glass:b.lavender,style:"glass",seed:272,lit:.8,glow:b.winPink})),r(X(Ln(12,.33,.1,.1),b.white,{p:[0,n+t*.74+.12,0]})),r(...qt(n+t*.74+.22,t*.2,b.silver,b.winPink));break}case 27:{r(...pt(e,2,b.orange)),r(...qe({w:.3,h:t*.78,y:n,body:b.gold,glass:b.skyDeep,style:"fins",seed:281,lit:.55})),r(X(Se(.66,.05,.66),b.gold,{p:[0,n+t*.78+.025,0]})),r(...Ll(10,.3,n+t*.78+.05,.26,b.winWarm,!0,-.15)),r(ot(new Hr(.1),b.butter,{p:[0,n+t*.78+.3,0],s:[.8,1.3,.8]})),r(X(ut(.02,.05,.2,6),b.gold,{p:[0,n+t*.78+.15,0]}));break}case 28:{r(...pt(e,2));for(const a of[-1,1]){const o=It([...qe({w:.13,h:t*.85,y:0,body:b.white,glass:b.teal,style:"fins",seed:291,glow:b.winCool}),_d(.13,.13,.25,b.tealDeep,t*.85)],[0,0,0],[0,a<0?Math.PI:0,0],[1,1,2.2]);r(...It(Cl(o,.06*a,.1),[a*.2,n,0]))}r(ot(Se(.05,t*1.05,.05),b.winCool,{p:[0,n+t*.525,0]})),r(ot(Ut(.09,1),b.white,{p:[0,n+t*1.08,0]}));break}case 29:{r(...pt(e,2,b.orange)),r(...Pl(4,.3,t*.95,n,Math.PI,b.gold,b.pink,b.winPink,301,.24)),r(...qt(n+t*.95,.24,b.gold,b.winPink));break}case 30:{r(...pt(e,3,b.green)),r(...qe({seg:12,w:.31,top:.08,h:t*.9,y:n,body:b.white,glass:b.lavender,style:"glass",seed:311,glow:b.winPink}));for(let a=0;a<3;a++)r(Ki(.35-a*.08,n+t*(.35+a*.2),[b.winCool,b.winPink,b.winWarm][a],[Math.PI/2+(a-1)*.25,0,0],.012));r(...qt(n+t*.9,t*.18,b.silver,b.winCool));break}case 31:{r(...pt(e,0)),r(...qe({w:.18,h:t*.86,y:n,body:b.silver,glass:b.sky,style:"fins",seed:321,lit:.5})),r(Ri(4,.18,.2,b.gold,n+t*.86)),r(ot(new Hr(.07),b.butter,{p:[0,n+t*.86+.28,0]}));for(const[a,o]of[[1,1],[-1,1],[1,-1],[-1,-1]])r(...It([...qe({seg:8,w:.075,h:t*.42,y:0,body:b.white,glass:b.lavender,style:"ribbon",seed:322,glow:b.winPink}),Ri(8,.085,.16,b.gold,t*.42)],[a*.3,n,o*.3]));for(const a of[0,Math.PI/2])r(...It([X(Se(.6,.12,.05),b.white,{p:[0,.06,.3]}),ot(Se(.08,.08,.055),b.winWarm,{p:[0,.05,.3]})],[0,n,0],[0,a,0]));break}default:{r(...pt(e,2,b.green));for(const a of[-.25,.25])r(...It([...qe({w:.11,h:t*.9,y:0,body:b.white,glass:b.butter,style:"fins",seed:331,glow:b.winWarm}),Ri(4,.11,.22,b.gold,t*.9),...qt(t*.9+.2,.18,b.gold,b.winWarm)],[a,n,0]));r(X(Se(.4,.08,.16),b.white,{p:[0,n+t*.8,0]})),r(X(Se(.4,.05,.16),b.gold,{p:[0,n+t*.35,0]})),r(ot(new ia(.15,.025,6,28),b.winWarm,{p:[0,n+t*.58,0]})),r(ot(new vo(.13,24),b.butter,{p:[0,n+t*.58,0]})),r(ot(new vo(.13,24).rotateY(Math.PI),b.butter,{p:[0,n+t*.58,0]}));break}}return s}function Hy(i){switch(i){case 0:return Dy();case 1:return Ny();case 2:return Uy();case 3:return Fy();case 4:return Oy();case 5:return By();case 6:return ky();default:return Gy(i)}}function Vy(){return[X(ut(.045,.06,.2,6),fe.trunk,{p:[0,.1,0]}),X(Ui(Un(.3,.34,7),.02,11),fe.pineDark,{p:[0,.33,0]}),X(Ui(Un(.24,.32,7),.02,12),fe.pine,{p:[0,.53,0],r:[0,.4,0]}),X(Ui(Un(.16,.3,7),.015,13),fe.pineLight,{p:[0,.72,0],r:[0,.8,0]})]}function Wy(i){return[X(ut(.008,.008,.08,4),fe.leafMid,{p:[0,.04,0]}),X(Ut(.03,0),i,{p:[0,.09,0]})]}function Xy(i=1){return[X(Ui(Ut(.26,0),.06,30+i),fe.rock,{p:[-.04,.17,0],r:[.3,.5,.2],s:[1.1,.8,1]}),X(Ui(Ut(.16,0),.04,31+i),fe.rockDark,{p:[.2,.1,.13],r:[.6,.1,.9],s:[1,.8,1]}),X(Ui(Ut(.11,0),.03,32+i),fe.rockLight,{p:[.1,.07,-.21],r:[.2,.8,.1]})]}function $y(){const i=[];for(let e=0;e<8;e++){const t=e/8*Math.PI*2+.2;i.push(X(Ui(Ut(.065,0),.015,40+e),e%2?fe.rockDark:fe.rock,{p:[Math.cos(t)*.24,.035,Math.sin(t)*.24],s:[1.2,.75,1]}))}i.push(ot(ut(.15,.17,.03,8),fe.glowWarm,{p:[0,.02,0]}));for(let e=0;e<4;e++){const t=e/4*Math.PI*2+.4;i.push(X(ut(.026,.034,.3,6),e%2?fe.plankDark:fe.trunk,{p:[Math.cos(t)*.07,.13,Math.sin(t)*.07],r:[-Math.sin(t)*.5,0,Math.cos(t)*.5]}))}return i.push(X(ut(.05,.05,.3,7),fe.plank,{p:[-.36,.05,.1],r:[Math.PI/2,.5,0]})),i.push(X(ut(.05,.05,.28,7),fe.plankDark,{p:[.3,.05,-.28],r:[Math.PI/2,-.7,0]})),i}function Yy(){return[ot(Un(.11,.46,6),fe.flameOuter,{p:[0,.27,0]}),ot(Un(.075,.3,5),fe.glowWarm,{p:[.07,.19,.03],r:[0,.6,0]}),ot(Un(.07,.26,5),fe.flameInner,{p:[-.06,.17,.04],r:[0,1.2,0]}),ot(Un(.05,.2,5),fe.flameInner,{p:[.01,.14,.08],r:[0,.3,0]})]}function qy(){const i=[];for(let e=0;e<6;e++){const t=e/6*Math.PI*2;i.push(X(Ui(Ut(.055,0),.012,60+e),e%2?fe.rockDark:fe.rock,{p:[Math.cos(t)*.18,.03,Math.sin(t)*.18],s:[1.2,.75,1]}))}i.push(ot(ut(.11,.13,.025,8),fe.glowWarm,{p:[0,.016,0]}));for(let e=0;e<3;e++){const t=e/3*Math.PI*2+.3;i.push(X(ut(.022,.028,.24,6),e%2?fe.plankDark:fe.trunk,{p:[Math.cos(t)*.055,.1,Math.sin(t)*.055],r:[-Math.sin(t)*.5,0,Math.cos(t)*.5]}))}return i}function Ky(){return[X(ut(.1,.12,.05,8),b.slateBlue,{p:[0,.025,0]}),X(ut(.05,.07,.08,8),b.slateBlue,{p:[0,.09,0]}),X(ut(.022,.03,.72,8),b.slateBlue,{p:[0,.49,0]}),X(ut(.045,.045,.03,8),b.gold,{p:[0,.4,0]}),X(ut(.07,.035,.04,8),b.slateBlue,{p:[0,.86,0]}),ot(ut(.075,.055,.15,6),b.winWarm,{p:[0,.955,0]}),...[0,1,2,3,4,5].map(i=>X(Se(.012,.16,.012),b.slateBlue,{p:[Math.sin(i/6*Math.PI*2)*.07,.955,Math.cos(i/6*Math.PI*2)*.07]})),X(Un(.1,.09,6),b.slateBlue,{p:[0,1.075,0]}),X(Ut(.02,0),b.gold,{p:[0,1.13,0]}),X(gi(.05,81),b.green,{p:[.12,.04,.06]}),X(Ut(.018,0),fe.flowerPink,{p:[.13,.08,.09]})]}let Ya=null;const xd=new Map;function Zy(i){switch(i){case Ft:return[Xy(),.3];case hn:return[$y(),.15];case Sn:return[qy(),.12];case Xn:return[Ky(),.3];default:{const e=Math.min(Zt,Math.max(0,i));return[Hy(e),[.25,.5,.5,.5,.6,.8,1][e]??1.2]}}}function Jy(i){let e=xd.get(i);if(!e){const[t,n]=Zy(i);e=Hf(t,n),xd.set(i,e)}return e}function Il(i){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);for(const[s,r]of i)n.addColorStop(s,r);return t.fillStyle=n,t.fillRect(0,0,64,64),new Ro(e)}let Dl=null;function Qy(){return Dl||(Dl={geo:new Ts(1,1).rotateX(-Math.PI/2),shadow:new Wn({map:Il([[0,"rgba(10,8,30,0.6)"],[.55,"rgba(10,8,30,0.3)"],[1,"rgba(10,8,30,0)"]]),transparent:!0,depthWrite:!1,toneMapped:!1}),pool:new Wn({map:Il([[0,"rgba(255,176,96,0.62)"],[.4,"rgba(255,150,80,0.26)"],[1,"rgba(255,130,70,0)"]]),transparent:!0,depthWrite:!1,blending:Ji,toneMapped:!1}),soft:new Wn({map:Il([[0,"rgba(255,186,120,0.2)"],[.45,"rgba(255,160,100,0.08)"],[1,"rgba(255,140,90,0)"]]),transparent:!0,depthWrite:!1,blending:Ji,toneMapped:!1})}),Dl}function jy(){return Ya||(Ya={material:new xo({vertexColors:!0,flatShading:!0,roughness:.9,metalness:0}),glowMaterial:new Wn({vertexColors:!0,toneMapped:!1}),flame:Hf(Yy(),0)},Ya)}function eS(i){return i===Ft?.56:i===hn?.6:i===Sn?.45:i===Xn?.35:[.42,.62,.7,.72,.86,.94,.98][i]??1}function tS(i){return i===Ft||i===hn?1.45:i===Sn?1.3:i===Xn?1:[1.6,1.35,1.2,1.2,1.12,1.06,1][i]??1}function Nl(i,e,t=!0){const n=jy(),s=new fi,r=new fi;r.scale.setScalar(tS(i)),s.add(r);const a=Jy(i),o=new Lt(a.body,e??n.material);o.castShadow=!e,o.receiveShadow=!e,r.add(o);const l=a.glow?new Lt(a.glow,e??n.glowMaterial):null;l&&o.add(l);const c=Math.random()*10,u=[];let d=1,h=null,f=0;if(!e){const _=Qy(),m=new Lt(_.geo,_.shadow);m.scale.setScalar(eS(i)),m.position.y=.004,m.renderOrder=1,s.add(m);const p=t?Dd(i):0;if(p>0){const y=i===hn||i===Sn||i===Xn;h=new Lt(_.geo,y?_.pool:_.soft),f=1.2+p*1,h.scale.setScalar(f),h.position.y=.006,h.renderOrder=1,s.add(h);const T=h;(i===hn||i===Sn)&&u.push(M=>T.scale.setScalar(f*(.75+.25*d)*(1+Math.sin(M*9+c)*.04+Math.sin(M*13.7)*.03)))}}if(i===hn||i===Sn){const _=new Lt(n.flame.glow,e??n.glowMaterial),m=i===Sn?.72:1;r.add(_),u.push(p=>{const y=m*(.55+.45*d);_.scale.set(y,y*(1+Math.sin(p*11+c)*.12+Math.sin(p*17.3)*.08),y),_.rotation.y=p*.8})}if(i===Xn&&l&&u.push(_=>{const m=d>.25||Math.sin(_*23+c)+Math.sin(_*7.1)>-.6;l.visible=m,h&&h.scale.setScalar(f*(m?.8+.2*d:.5))}),i===0||i===1){const _=i===0?.03:.015;u.push(m=>o.rotation.z=Math.sin(m*1.6+c)*_)}const g=i===Sn||i===Xn?_=>d=Math.max(0,Math.min(1,_)):void 0;return{root:s,tick:u.length?_=>u.forEach(m=>m(_)):void 0,setFuel:g}}const _n={linear:i=>i,inQuad:i=>i*i,outCubic:i=>1-(1-i)**3,inCubic:i=>i**3,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2};class nS{constructor(){this.list=[],this.speed=1}get active(){return this.list.length>0}run(e,t,n=_n.outCubic){return new Promise(s=>{const r=e*this.speed;if(r<=0){t(1),s();return}t(n(0)),this.list.push({elapsed:0,duration:r,ease:n,update:t,resolve:s})})}wait(e){return this.run(e,()=>{},_n.linear)}tick(e){if(!this.list.length)return;const t=[];for(const n of this.list){n.elapsed+=e;const s=Math.min(1,n.elapsed/n.duration);n.update(n.ease(s)),s>=1&&t.push(n)}if(t.length){this.list=this.list.filter(n=>!t.includes(n));for(const n of t)n.resolve()}}finishAll(){const e=this.list;this.list=[];for(const t of e)t.update(t.ease(1)),t.resolve()}}const Xf=.5,In=-.03,Ur=.2;function Do(i=Mn){return i/2+Xf}function $f(i){return(1.25+i*.07)*.62}function Yf(i=Mn){return In-Ur-$f(i)-.12}function qf(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Qs(i,e,t,n){const s=Math.sin(i*127.1+e*311.7+t*74.7+n*19.19)*43758.5453;return(s-Math.floor(s))*2-1}function ar(i,e,t,n){i.computeVertexNormals();const s=i.getAttribute("position"),r=i.getAttribute("normal"),a=new Float32Array(s.count*3),o=new ke(e),l=new ke(n??3812646);for(let c=0;c<s.count;c+=3){const u=(r.getY(c)+r.getY(c+1)+r.getY(c+2))/3,d=c/3;for(let h=0;h<3;h++){const f=u>.7?o:u<-.7?l:t(s.getY(c+h),d);a.set([f.r,f.g,f.b],(c+h)*3)}}return i.setAttribute("color",new vn(a,3)),i}const Nc=(i,e)=>{const t=new ke(i),n=new ke(e);return s=>t.clone().lerp(n,h0.clamp(s,0,1))};function iS(){const i=new ii(.92,.06,.92).toNonIndexed();return i.translate(0,-.03,0),i.deleteAttribute("uv"),ar(i,fe.tile,()=>new ke(fe.tileEdge))}function sS(){const i=new ii(1,.12,1).toNonIndexed().translate(0,-.06,0),e=new ii(1,.34,1).toNonIndexed().translate(0,-.29,0),t=Nc(fe.soilLight,fe.soilDark);return Kf([ar(i,fe.tile,()=>new ke(fe.grassLip)),ar(e,fe.soil,n=>t((-.12-n)/.34))])}function Kf(i){const e=["position","normal","color"],t=new Gt;for(const n of e){const s=i.reduce((o,l)=>o+l.getAttribute(n).array.length,0),r=new Float32Array(s);let a=0;for(const o of i){const l=o.getAttribute(n).array;r.set(l,a),a+=l.length}t.setAttribute(n,new vn(r,3))}return t}function rS(i){const e=Do(i),t=Math.max(4,Math.round(i*1.2)),n=[],s=new ii(e*2,Ur,e*2,t*2,1,t*2);s.translate(0,In-Ur/2,0);const r=s.getAttribute("position");for(let _=0;_<r.count;_++){const m=r.getX(_),p=r.getY(_),y=r.getZ(_),T=Math.abs(Math.abs(m)-e)<1e-4||Math.abs(Math.abs(y)-e)<1e-4;p>In-1e-4&&!T&&r.setY(_,p+Qs(m,0,y,1)*.012)}const a=Nc(fe.grassEdge,fe.grassDark),o=[new ke(fe.grassTop),new ke(fe.grassTop2),new ke(fe.grassTop).lerp(new ke(fe.grassLight),.18)];n.push(ar(s.toNonIndexed(),fe.grassTop,_=>a((In-_)/Ur)));{const _=n[0],m=_.getAttribute("position"),p=_.getAttribute("normal"),y=_.getAttribute("color");for(let T=0;T<m.count;T+=3){if(p.getY(T)<.7)continue;const M=(m.getX(T)+m.getX(T+1)+m.getX(T+2))/3,E=(m.getZ(T)+m.getZ(T+1)+m.getZ(T+2))/3,w=o[Math.floor((Qs(M,2,E,3)+1)*1.5)%3];for(let R=0;R<3;R++)y.setXYZ(T+R,w.r,w.g,w.b)}}const l=$f(i),c=In-Ur,u=new ii(e*2-.02,l,e*2-.02,t,2,t);u.translate(0,c-l/2,0);const d=u.getAttribute("position");for(let _=0;_<d.count;_++){const m=d.getX(_),p=d.getY(_),y=d.getZ(_);if(p>c-1e-4)continue;const T=Qs(m,p,y,7);p<c-l+1e-4&&d.setY(_,p-.04-Math.abs(T)*.14);const M=Math.abs(Math.abs(m)-(e-.01))<.001,E=Math.abs(Math.abs(y)-(e-.01))<.001;M&&d.setX(_,m+Math.sign(m)*Qs(m,p,y,11)*.045),E&&d.setZ(_,y+Math.sign(y)*Qs(m,p,y,13)*.045)}const h=Nc(fe.soilLight,fe.soilDark);n.push(ar(u.toNonIndexed(),fe.soil,(_,m)=>h((c-_)/l+Qs(m,0,0,5)*.05),fe.soilDeep));const f=qf(i*977+3),g=Math.round(i*.8);for(let _=0;_<g;_++){const m=_%4,p=(f()*2-1)*(e-.4),y=c-.25-f()*(l-.5),T=.09+f()*.12,M=e+T*.15,[E,w]=m===0?[p,M]:m===1?[M,p]:m===2?[p,-M]:[-M,p],R=new hu(T,0);R.scale(1.3,.8,1.1),R.rotateY(f()*6),R.translate(E,y,w);const x=new ke(f()>.5?fe.cliff:fe.cliffDark);n.push(ar(R,x,()=>x,fe.cliffDeep))}for(const _ of n)_.getAttribute("uv")&&_.deleteAttribute("uv");return Kf(n)}function aS(i){const e=qf(i*131+7),t=i/2,n=Do(i),s=[],r=()=>{const a=Math.floor(e()*4),o=(e()*2-1)*(n-.12),l=t+.1+e()*(Xf-.2);return a===0?[o,-l]:a===1?[o,l]:a===2?[-l,o]:[l,o]};for(let a=0;a<i*4;a++){const[o,l]=r(),c=e();if(c<.34)for(let u=0;u<3;u++)s.push(X(new jr(.018,.09+e()*.05,3),u?fe.leafMid:fe.leaf,{p:[o+(u-1)*.025,In+.05,l+(e()-.5)*.03],r:[(e()-.5)*.5,0,(e()-.5)*.5]}));else c<.6?s.push(...gd(Wy([fe.flowerPink,fe.flowerYellow,fe.flowerWhite][a%3]),o,In,l,e()*6,.8)):c<.78?s.push(X(Ut(.04+e()*.04,0),e()>.5?fe.rock:fe.rockDark,{p:[o,In+.02,l],s:[1.3,.6,1.1],r:[0,e()*6,0]})):c<.9?s.push(X(Ut(.08+e()*.04,0),fe.leafDark,{p:[o,In+.05,l],s:[1.2,.8,1.1]})):(s.push(X(new Ls(.014,.018,.06,5),fe.flowerWhite,{p:[o,In+.03,l]})),s.push(X(new jr(.05,.04,6),fe.mushroom,{p:[o,In+.08,l]})))}for(const[a,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])s.push(...gd(Vy(),a*(n-.24),In,o*(n-.24),e()*6,.5+e()*.1));return s}function oS(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");return t.filter="blur(22px)",t.fillStyle="rgba(8, 9, 34, 0.7)",t.fillRect(256*.22,256*.22,256*.56,256*.56),new Ro(e)}function lS(i=Mn){const e=new fi,t=new xo({vertexColors:!0,flatShading:!0,roughness:1,metalness:0}),n=new Lt(new Ts(80,80).rotateX(-Math.PI/2),new gg({color:460831,opacity:.5}));n.receiveShadow=!0;const s=new Lt(new Ts(1,1).rotateX(-Math.PI/2),new Wn({map:oS(),transparent:!0,depthWrite:!1,toneMapped:!1}));s.renderOrder=-1,e.add(n,s);let r=null,a=null;const o=l=>{for(const d of[r,a])d&&(e.remove(d),d.geometry.dispose());r=new Lt(rS(l),t),r.receiveShadow=!0,r.castShadow=!0,a=new Lt(Dc(aS(l),.2,In),t),a.receiveShadow=!0,a.castShadow=!0,e.add(r,a);const c=Yf(l);n.position.y=c+.01;const u=Do(l)*2*1.9;s.scale.set(u,1,u),s.position.set(-.6,c+.015,.35)};return o(i),{group:e,tick:()=>{},setSize:o}}let Ul=null;const Fl={iso:{azimuth:Math.PI/4,elevation:Math.PI/6},cozy:{azimuth:0,elevation:.88,fov:30}},ms=1,us=Math.PI/2,cS=Math.max(..._s)**2;let hs=Mn,ds=hs*ms/2;function Kt(i){const{x:e,y:t}=cr(i,hs);return new L((e+.5)*ms-ds,0,(t+.5)*ms-ds)}const uS=new ke(1.28,1.24,1.05),hS=new ke(1.42,1.2,.72),dS=new ke(1.25,.78,.62),fS=new ke(1.16,1.2,1.1),pS=new ke(1.32,1.08,.9),mS=new ke(.5,.48,.66),gS=10481864,Ol=.62,_S=[15655622,14865328,fe.grassLight],vS=[fe.rockLight,fe.rock,14865328];function xS(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new Ro(i);return n.colorSpace=cn,n}function MS(){const i=document.createElement("canvas");i.width=4,i.height=64;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,64);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.7,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0.95)"),e.fillStyle=t,e.fillRect(0,0,4,64);const n=new Ro(i);return n.colorSpace=cn,n}class yS{constructor(e,t){this.container=e,this.scene=new xh,this.ortho=new sa(-5,5,5,-5,.1,120),this.perspective=new Gn(30,1,.5,200),this.camera=this.ortho,this.tweens=new nS,this.tileBase=[],this.side=Mn,this.lit=null,this.spin=0,this.spinGen=0,this.fitOffset=new L(0,10,10),this.pieces=new Map,this.fuel=new Map,this.pieceLayer=new fi,this.fxLayer=new fi,this.raycaster=new Cg,this.groundPlane=new Pi(new L(0,1,0),0),this.ghost=null,this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.frames=[],this.view="iso",this.arrows=new Map,this.pieceYaw=0,this.insets={top:0,right:0,bottom:0,left:0},this.reducedMotion=!1,this.dirty=!0,this.lastFrame=0,this.lastIdleRender=0,this.clock=0,this.shake=0,this.rafId=0,this.width=0,this.height=0,this.baseCamPos=new L,this.ringPool=[],this.particlePool=[],this.glowPool=[],this.animGen=0,this.performing=!1,this.leaning=new Map,this.lost=!1,this.dprQuery=null,this.handleContextLost=s=>{s.preventDefault(),this.lost=!0,this.stopShake()},this.handleContextRestored=()=>{this.lost=!1,this.dirty=!0,this.onContextRestored?.()},this.onPixelRatioChange=()=>{this.watchPixelRatio(),this.resize()},this.renderer=t??new Ty({antialias:!0,alpha:!0,powerPreference:"high-performance"});const n=Math.min(window.innerWidth,window.innerHeight)<700;this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fr,this.renderer.outputColorSpace=cn,this.renderer.toneMapping=Jc,this.renderer.toneMappingExposure=1,this.renderer.setClearColor(0,0),this.canvas=this.renderer.domElement,this.canvas.className="board-canvas",e.appendChild(this.canvas),this.canvas.addEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this.ghostMaterial=new xo({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.6,depthWrite:!1,roughness:.9}),this.buildLights(n),hs=Mn,ds=hs*ms/2,this.side=hs,this.world=lS(hs),this.scene.add(this.world.group),this.tileMaterial=new xo({vertexColors:!0,flatShading:!0,roughness:.92}),this.buildTiles(),this.scene.add(this.pieceLayer,this.fxLayer),this.buildFxPools(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.watchPixelRatio(),this.resize(),this.loop=this.loop.bind(this),this.rafId=requestAnimationFrame(this.loop)}buildLights(e){this.scene.add(new Bh(14078207,4207726,1.55));const t=new Wa(14999807,1.7);t.position.set(8,11,-4.5),t.castShadow=!0,t.shadow.mapSize.set(e?1024:2048,e?1024:2048);const n=t.shadow.camera;n.left=-9,n.right=9,n.top=9,n.bottom=-9,n.near=1,n.far=40,t.shadow.bias=-5e-4,t.shadow.normalBias=.03,t.shadow.radius=6,t.shadow.blurSamples=16,this.scene.add(t);const s=new Wa(16757370,.35);s.position.set(-6,4,7),this.scene.add(s)}get cellCount(){return this.side*this.side}buildTiles(){this.tiles&&(this.scene.remove(this.tiles),this.tiles.geometry.dispose(),this.tiles.dispose()),this.tileBase.length=0;const e=new Rh(iS(),this.tileMaterial,this.cellCount),t=new ht;for(let n=0;n<this.cellCount;n++){const s=Kt(n);t.makeTranslation(s.x,0,s.z),e.setMatrixAt(n,t);const{x:r,y:a}=cr(n,this.side),o=Math.sin(n*91.17)*43758.5453,l=o-Math.floor(o),c=((r+a)%2?.93:1)*(.97+l*.05),u=l>.75?.04:0;this.tileBase.push(new ke(c*(1+u),c,c*(.97-u))),e.setColorAt(n,this.tileBase[n])}e.receiveShadow=!0,e.castShadow=!0,this.scene.add(e),this.tiles=e}setBoardSize(e){if(e!==this.side){this.cancelAnimations();for(const t of[...this.pieces.keys()])this.removePiece(t);this.clearGhost(),this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.lit=null,this.setSuggestions([]),this.side=e,hs=e,ds=e*ms/2,this.buildTiles(),this.applyHighlights(),this.world.setSize(e),this.fitCamera()}}getBoardSize(){return this.side}buildFxPools(){const e=new Vr(.42,.5,32);e.rotateX(-Math.PI/2);for(let o=0;o<6;o++){const l=new Lt(e,new Wn({color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1}));l.visible=!1,this.ringPool.push(l),this.fxLayer.add(l)}const t=new _u(.06,0);for(let o=0;o<56;o++){const l=new Lt(t,new Wn({color:16777215,transparent:!0,toneMapped:!1}));l.visible=!1,this.particlePool.push(l),this.fxLayer.add(l)}const n=new Vr(.585,.675,4,1,Math.PI/4);n.rotateX(-Math.PI/2);for(let o=0;o<12;o++){const l=new Lt(n,new Wn({color:16777215,transparent:!0,depthWrite:!1,blending:Ji,toneMapped:!1}));l.visible=!1,l.renderOrder=2,this.frames.push(l),this.fxLayer.add(l)}const s=new Vr(.5,.57,4,1,Math.PI/4);s.rotateX(-Math.PI/2),this.suggest=new Rh(s,new Wn({color:gS,transparent:!0,opacity:Ol,depthWrite:!1,blending:Ji,toneMapped:!1}),cS),this.suggest.count=0,this.suggest.visible=!1,this.suggest.renderOrder=2,this.suggest.frustumCulled=!1,this.fxLayer.add(this.suggest);const r=xS(),a=MS();for(let o=0;o<3;o++){const l=new I0(new _f({map:r,color:16765802,transparent:!0,depthWrite:!1,blending:Ji,toneMapped:!1})),c=new Lt(new Ls(.42,.48,2.2,20,1,!0).translate(0,1.1,0),new Wn({map:a,color:16765802,transparent:!0,depthWrite:!1,side:hi,blending:Ji,toneMapped:!1}));l.visible=c.visible=!1,this.glowPool.push({sprite:l,column:c}),this.fxLayer.add(l,c)}}isContextLost(){return this.lost||this.renderer.getContext().isContextLost()}markDirty(){this.dirty=!0}setReducedMotion(e){this.reducedMotion=e,this.tweens.speed=e?.35:1;for(const t of this.frames){const n=t.material;n.opacity=n.userData.base??1}this.suggest.material.opacity=Ol,this.updateLean(),this.dirty=!0}setView(e){this.resetLean(),this.view=e,this.pieceYaw=e==="cozy"?-.6:0;for(const t of this.pieces.values())t.model.root.rotation.y=this.pieceYaw;this.ghost&&(this.ghost.model.root.rotation.y=this.pieceYaw),this.fitCamera()}getView(){return this.view}setInsets(e){Object.keys(e).every(n=>Math.abs(e[n]-this.insets[n])<.5)||(this.insets={...e},this.fitCamera())}resize(){const e=this.container.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),n=Math.max(1,Math.floor(e.height));!this.applyPixelRatio()&&t===this.width&&n===this.height||(this.width=t,this.height=n,this.renderer.setSize(t,n,!1),this.fitCamera(),this.renderNow())}applyPixelRatio(){const e=Math.min(window.innerWidth,window.innerHeight)<700,t=Math.min(window.devicePixelRatio||1,e?2:1.75);return t===this.renderer.getPixelRatio()?!1:(this.renderer.setPixelRatio(t),!0)}watchPixelRatio(){this.dprQuery?.removeEventListener("change",this.onPixelRatioChange),this.dprQuery=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,this.dprQuery?.addEventListener?.("change",this.onPixelRatioChange)}renderNow(){document.hidden||this.lost||(this.renderer.render(this.scene,this.camera),this.dirty=!1)}fitCamera(){const e=Fl[this.view],t=this.width,n=this.height,s=this.insets,r=Math.max(60,t-s.left-s.right),a=Math.max(60,n-s.top-s.bottom),o=!e.fov&&r/a<.85?.6:e.elevation,l=new L(Math.sin(e.azimuth)*Math.cos(o),Math.sin(o),Math.cos(e.azimuth)*Math.cos(o)),c=[],u=!e.fov&&r/a>1.1,d=u?Do(this.side)+.1:ds+.22,h=u?[Yf(this.side),2]:[-.45,1.8];for(const m of[-d,d])for(const p of[-d,d])for(const y of h)c.push(new L(m,y,p));const f=s.left+r/2,g=s.top+a/2,_=1.04;if(e.fov){const m=this.perspective;m.fov=e.fov,m.aspect=t/n,m.clearViewOffset(),m.updateProjectionMatrix();let p=24,y={minX:0,maxX:0,minY:0,maxY:0};for(let R=0;R<10;R++){m.position.copy(l).multiplyScalar(p),m.lookAt(0,0,0),m.updateMatrixWorld(),y={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const A of c){const P=A.clone().project(m);y.minX=Math.min(y.minX,P.x),y.maxX=Math.max(y.maxX,P.x),y.minY=Math.min(y.minY,P.y),y.maxY=Math.max(y.maxY,P.y)}if(R===9)break;const x=Math.max((y.maxX-y.minX)/(2*r/t),(y.maxY-y.minY)/(2*a/n));p*=x*_}const T=(y.minX+y.maxX)/2,M=(y.minY+y.maxY)/2,E=f/t*2-1,w=1-g/n*2;m.setViewOffset(t,n,(T-E)*t/2,(w-M)*n/2,t,n),m.updateProjectionMatrix(),this.camera=m,this.fitOffset.copy(l).multiplyScalar(p)}else{const m=this.ortho;m.position.copy(l).multiplyScalar(30),m.lookAt(0,0,0),m.updateMatrixWorld();const p=m.matrixWorldInverse;let y=1/0,T=-1/0,M=1/0,E=-1/0;for(const A of c){const P=A.clone().applyMatrix4(p);y=Math.min(y,P.x),T=Math.max(T,P.x),M=Math.min(M,P.y),E=Math.max(E,P.y)}const w=Math.max((T-y)/r,(E-M)/a)*_,R=(y+T)/2,x=(M+E)/2;m.left=R-f*w,m.right=m.left+t*w,m.top=x+g*w,m.bottom=m.top-n*w,m.updateProjectionMatrix(),this.camera=m,this.fitOffset.copy(l).multiplyScalar(30)}this.applySpin()}applySpin(){this.camera.position.copy(this.fitOffset).applyAxisAngle(new L(0,1,0),this.spin),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.baseCamPos.copy(this.camera.position),this.dirty=!0}getSpinQuarter(){return(Math.round(this.spin/us)%4+4)%4}rotate(e){this.glideSpin(Math.round(this.spin/us)*us+e*us)}dragSpin(e){this.spinGen++,this.spin=e,this.applySpin()}getSpin(){return this.spin}endSpin(e=0){const t=Math.abs(e)>2.5?Math.sign(e)*.5:0;this.glideSpin(Math.round(this.spin/us+t)*us)}glideSpin(e){const t=++this.spinGen,n=this.spin;if(Math.abs(e-n)<1e-4||this.reducedMotion){this.spin=e,this.applySpin();return}this.tweens.run(Math.min(420,240+Math.abs(e-n)*120),s=>{t===this.spinGen&&(this.spin=n+(e-n)*s,this.applySpin())},_n.inOutSine)}tilePixelSize(){const e=this.worldToScreen(new L(-.5,0,0)),t=this.worldToScreen(new L(.5,0,0));return Math.hypot(e.x-t.x,e.y-t.y)}worldToScreen(e){const t=e.clone().project(this.camera),n=this.canvas.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(1-t.y)/2*n.height}}cellToScreen(e,t=.5){return this.worldToScreen(Kt(e).setY(t))}screenAxes(){const e=this.worldToScreen(new L(0,0,0)),t=this.worldToScreen(new L(1,0,0)),n=this.worldToScreen(new L(0,0,1));return{col:{x:t.x-e.x,y:t.y-e.y},row:{x:n.x-e.x,y:n.y-e.y}}}arrowStep(e){const t=this.getSpinQuarter(),n=`${this.view}:${t}`;let s=this.arrows.get(n);if(!s){const r=Fl[this.view];s=Py(r.azimuth+t*us,r.elevation),this.arrows.set(n,s)}return{...s[e]}}pick(e,t){const n=this.canvas.getBoundingClientRect(),s=new he((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=null;const a=new L;if(this.raycaster.ray.intersectPlane(this.groundPlane,a)){const l=Math.floor((a.x+ds)/ms),c=Math.floor((a.z+ds)/ms);l>=0&&c>=0&&l<this.side&&c<this.side&&(r=c*this.side+l)}if(r!==null&&!this.pieces.has(r))return r;const o=this.raycaster.intersectObjects(this.pieceLayer.children,!0);for(const l of o){let c=l.object;for(;c&&c.userData.index===void 0;)c=c.parent;if(c)return c.userData.index}return r}addPiece(e,t){this.removePiece(e);const n=Nl(t);n.root.position.copy(Kt(e)),n.root.rotation.y=this.pieceYaw,n.root.userData.index=e;const s=this.fuel.get(e);s!==void 0&&n.setFuel?.(s),n.tick?.(this.clock),this.pieceLayer.add(n.root);const r={piece:t,model:n};return this.pieces.set(e,r),this.dirty=!0,r}removePiece(e){const t=this.pieces.get(e);t&&(this.pieceLayer.remove(t.model.root),this.pieces.delete(e),this.leaning.get(e)===t&&this.leaning.delete(e),this.dirty=!0)}sync(e){this.performing&&this.cancelAnimations(),e.length!==this.cellCount&&this.setBoardSize(Math.round(Math.sqrt(e.length)));for(let t=0;t<this.cellCount;t++){const n=e[t],s=this.pieces.get(t);n===At?s&&this.removePiece(t):!s||s.piece!==n?this.addPiece(t,n):(s.model.root.position.copy(Kt(t)),s.model.root.rotation.set(0,this.pieceYaw,0),s.model.root.scale.setScalar(1))}this.leaning.clear(),this.dirty=!0}setHover(e,t,n,s=!1){if(this.highlight.hover=s?null:e,this.highlight.blocked=s?e:null,this.highlight.merge=n,this.applyHighlights(),this.updateLean(),e===null||t===null||s){this.clearGhost();return}if(!this.ghost||this.ghost.piece!==t){this.clearGhost();const r=Nl(t,this.ghostMaterial);r.root.rotation.y=this.pieceYaw,this.fxLayer.add(r.root),this.ghost={piece:t,model:r,index:e}}this.ghost.index=e,this.ghost.model.root.position.copy(Kt(e)),this.dirty=!0}setLit(e){e===this.lit||e&&this.lit&&e.length===this.lit.length&&e.every((n,s)=>n===this.lit[s])||(this.lit=e?[...e]:null,this.applyHighlights())}setCursor(e){this.highlight.cursor=e,this.applyHighlights()}setSuggestions(e){const t=[...new Set(e)].filter(s=>Number.isInteger(s)&&s>=0&&s<this.cellCount),n=new ht;t.forEach((s,r)=>{const a=Kt(s);this.suggest.setMatrixAt(r,n.makeTranslation(a.x,.014,a.z))}),this.suggest.count=t.length,this.suggest.visible=t.length>0,this.suggest.instanceMatrix.needsUpdate=!0,this.dirty=!0}clearGhost(){this.ghost&&(this.fxLayer.remove(this.ghost.model.root),this.ghost=null,this.dirty=!0)}applyHighlights(){const e=new Set(this.highlight.merge),t=new ke;for(let s=0;s<this.cellCount;s++)t.copy(this.tileBase[s]),this.lit&&t.multiply(this.lit[s]?pS:mS),e.has(s)&&t.multiply(hS),s===this.highlight.cursor&&t.multiply(fS),s===this.highlight.hover&&t.multiply(uS),s===this.highlight.blocked&&t.multiply(dS),this.tiles.setColorAt(s,t);this.tiles.instanceColor.needsUpdate=!0;const n=[];this.highlight.hover!==null&&n.push([this.highlight.hover,16774084,1]),this.highlight.blocked!==null&&n.push([this.highlight.blocked,16752506,.8]),this.highlight.cursor!==null&&this.highlight.cursor!==this.highlight.hover&&n.push([this.highlight.cursor,14217471,.8]);for(const s of this.highlight.merge)n.push([s,16763213,.75]);this.frames.forEach((s,r)=>{const a=n[r];if(s.visible=!!a,!a)return;const o=Kt(a[0]);s.position.set(o.x,.012,o.z);const l=s.material;l.color.set(a[1]),l.userData.base=a[2],l.opacity=a[2]}),this.dirty=!0}resetLean(){for(const[e,t]of this.leaning)t.model.root.position.copy(Kt(e)),t.model.root.rotation.set(0,this.pieceYaw,0),this.dirty=!0;this.leaning.clear()}updateLean(){const e=this.highlight.hover,t=this.highlight.merge;if(this.reducedMotion||this.performing||e===null||!t.length){this.resetLean();return}for(const[o,l]of this.leaning)t.includes(o)&&this.pieces.get(o)===l||(l.model.root.position.copy(Kt(o)),l.model.root.rotation.set(0,this.pieceYaw,0),this.leaning.delete(o));const n=Kt(e),s=Math.sin(this.clock*6.5),r=new yi().setFromAxisAngle(new L(0,1,0),this.pieceYaw),a=new L;for(const o of t){const l=this.pieces.get(o);if(!l||l.piece===Ft)continue;const c=Kt(o),u=n.clone().sub(c).setY(0);if(u.lengthSq()<1e-6)continue;u.normalize();const d=l.model.root;d.position.copy(c).addScaledVector(u,.06+.02*s),a.set(u.z,0,-u.x),d.quaternion.setFromAxisAngle(a,.07+.02*s).multiply(r),this.leaning.set(o,l)}this.dirty=!0}ring(e,t,n,s=520){const r=this.ringPool.find(o=>!o.visible);if(!r)return;const a=r.material;a.color.set(t),r.position.set(e.x,.03,e.z),r.visible=!0,this.tweens.run(s,o=>{r.scale.setScalar(.4+o*n),a.opacity=.9*(1-o)}).then(()=>r.visible=!1)}glow(e,t,n=700){const s=this.glowPool.find(o=>!o.sprite.visible);if(!s)return;const r=s.sprite.material,a=s.column.material;s.sprite.position.set(e.x,.45,e.z),s.column.position.set(e.x,0,e.z),s.sprite.visible=s.column.visible=!0,this.tweens.run(n,o=>{const l=Math.sin(Math.min(1,o*1.6)*Math.PI*.5)*(1-o);r.opacity=Math.min(1,l*1.6*t),s.sprite.scale.setScalar(1.4+t*.8+o*.6),a.opacity=l*.85*t,s.column.scale.set(1,.4+o*.8,1)},_n.linear).then(()=>s.sprite.visible=s.column.visible=!1)}burst(e,t,n,s=1,r=650){this.reducedMotion&&(n=Math.ceil(n/3));for(let a=0;a<n;a++){const o=this.particlePool.find(_=>!_.visible);if(!o)return;const l=o.material;l.color.set(t[a%t.length]);const c=a/n*Math.PI*2+Math.random()*.5,u=(.9+Math.random()*.8)*s,d=Math.cos(c)*u,h=Math.sin(c)*u,f=(1.6+Math.random()*1.4)*s;o.visible=!0,o.position.copy(e);const g=Math.random()*8;this.tweens.run(r,_=>{const m=_*(r/1e3);o.position.set(e.x+d*m,e.y+f*m-4.5*m*m,e.z+h*m),o.rotation.set(g*_,g*_*.7,0),o.scale.setScalar(1-_*.7),l.opacity=1-_*_},_n.linear).then(()=>o.visible=!1)}}dust(e,t,n,s=420){this.reducedMotion&&(n=Math.ceil(n/2));for(let r=0;r<n;r++){const a=this.particlePool.find(f=>!f.visible);if(!a)return;const o=a.material;o.color.set(t[r%t.length]);const l=r/n*Math.PI*2+Math.random()*.6,c=Math.cos(l),u=Math.sin(l),d=.22+Math.random()*.14,h=.06+Math.random()*.06;a.visible=!0,this.tweens.run(s,f=>{const g=.3+d*f;a.position.set(e.x+c*g,.03+h*Math.sin(f*Math.PI*.8),e.z+u*g),a.rotation.set(l+f*2,f*3,0),a.scale.setScalar(.75+f*.35),o.opacity=.9*(1-f)},_n.outCubic).then(()=>a.visible=!1)}}bump(e){this.reducedMotion||(this.shake=Math.max(this.shake,e))}async animateMove(e,t,n={}){const s=this.animGen;this.performing=!0;try{this.clearGhost(),this.setHover(null,null,[]);for(const r of e){const a=r.kind==="place"?r.index:r.kind==="expire"?r.cells[0]:r.target,o=()=>n.onEvent?.(r,this.cellToScreen(a,.9));switch(r.kind){case"place":await this.animatePlace(r.index,r.piece,s,o);break;case"merge":await this.animateMerge(r.cells,r.target,r.toTier,r.step,s,o);break;case"festival":await this.animateFestival(r.cells,r.target,s,o);break;case"crumble":if(o(),s!==this.animGen)return!1;await this.animateCrumble(r.cells,s);break;case"expire":if(o(),s!==this.animGen)return!1;await this.animateExpire(r.cells,s);break}if(s!==this.animGen)return!1}return this.performing=!1,this.sync(t),!0}finally{s===this.animGen&&(this.performing=!1)}}async animatePlace(e,t,n,s){const{model:r}=this.addPiece(e,t),a=r.root,o=Kt(e),l=t===Ft||t>=2;if(await this.tweens.run(190,h=>{a.position.set(o.x,1-h,o.z);const f=.72+.28*Math.sqrt(h);a.scale.set(f*(1-.05*h),f*(1+.1*h),f*(1-.05*h))},_n.inQuad),n!==this.animGen||(s(),n!==this.animGen))return;this.ring(o,16774102,l?1:.8,360),this.dust(o,t===Ft?vS:_S,l?8:5);const c=l?.2:.15,u=l?.06:.035,d=new ht;await this.tweens.run(l?140:120,h=>{const f=h>=1?0:Math.sin(h*Math.PI);a.scale.set(1+f*c*.6,1-f*c,1+f*c*.6),a.position.y=-u*f,this.tiles.setMatrixAt(e,d.makeTranslation(o.x,-u*f,o.z)),this.tiles.instanceMatrix.needsUpdate=!0},_n.linear),n===this.animGen&&(a.scale.setScalar(1),a.position.copy(o))}async animateMerge(e,t,n,s,r,a){const o=Kt(t),l=e.map(g=>this.pieces.get(g)).filter(g=>!!g),c=l.map(g=>g.model.root.position.clone()),u=Math.pow(.9,Math.min(s,5)-1);if(await this.tweens.run(230*u,g=>{l.forEach((_,m)=>{_.model.root.position.lerpVectors(c[m],o,g),_.model.root.position.y=Math.sin(g*Math.PI)*.35,_.model.root.scale.setScalar(1-.55*g)})},_n.inCubic),r!==this.animGen)return;for(const g of e)this.removePiece(g);const{model:d}=this.addPiece(t,n);if(d.root.scale.setScalar(.001),a(),r!==this.animGen)return;const h=s>=2;this.glow(o,.75+n*.08+(h?.35:0)),this.ring(o,h?16765802:16774102,1.4+n*.25+(h?.8:0));const f=n<=1?[fe.leafLight,fe.leaf,16773560]:[16765802,fe.wall,fe.leafLight,fe.roof];this.burst(o.clone().setY(.4),h?[16765802,...f]:f,8+n*3+(h?8:0),.8+n*.1),this.bump(h?.12+s*.03:.04),await this.tweens.run(320*u,g=>d.root.scale.setScalar(Math.max(.001,g)),_n.outBack),r===this.animGen&&d.root.scale.setScalar(1)}async animateFestival(e,t,n,s){const r=Kt(t),a=e.map(o=>this.pieces.get(o)).filter(o=>!!o);if(await this.tweens.run(420,o=>{for(const l of a)l.model.root.position.y=Math.sin(o*Math.PI*.5)*.5,l.model.root.rotation.y=this.pieceYaw+o*Math.PI},_n.inOutSine),n===this.animGen&&(s(),n===this.animGen)){this.glow(r,1.4,900),this.ring(r,16765802,3.4,700),this.ring(r,16777215,2.2,500);for(const o of a)this.burst(o.model.root.position.clone(),[16765802,fe.flag,fe.leafLight,fe.white,fe.stripe],9,1.2,800);if(this.bump(.3),await this.tweens.run(260,o=>{for(const l of a)l.model.root.scale.setScalar(Math.max(.001,1-o))}),n===this.animGen)for(const o of e)this.removePiece(o)}}async animateCrumble(e,t){const n=e.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of e)this.burst(Kt(s).setY(.2),[fe.rock,fe.rockDark,fe.moss],6,.7,500);if(await this.tweens.run(340,s=>{for(const r of n)r.model.root.position.y=-s*.3,r.model.root.rotation.z=Math.sin(s*30)*.06*(1-s),r.model.root.scale.setScalar(Math.max(.001,1-s))},_n.inCubic),t===this.animGen)for(const s of e)this.removePiece(s)}async animateExpire(e,t){const n=e.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of e)this.burst(Kt(s).setY(.35),[13617384,10327236,16762480],7,.6,600);if(await this.tweens.run(420,s=>{for(const r of n)r.model.root.position.y=-s*.2,r.model.root.scale.setScalar(Math.max(.001,1-s))},_n.inCubic),t===this.animGen)for(const s of e)this.removePiece(s)}setBurn(e){this.fuel.clear();for(const[t,n]of e??[]){const s=this.pieces.get(t),r=s?_i[s.piece]?.life:void 0;r&&(this.fuel.set(t,n/r),s.model.setFuel?.(n/r))}this.dirty=!0}async nudge(e){const t=this.pieces.get(e);if(!t)return;const n=this.animGen,s=Kt(e);await this.tweens.run(240,r=>t.model.root.position.x=s.x+Math.sin(r*Math.PI*4)*.06*(1-r),_n.linear),!(n!==this.animGen||this.pieces.get(e)!==t)&&t.model.root.position.copy(s)}async gameOverWave(){const e=this.animGen;this.performing=!0,this.resetLean();const t=[...this.pieces.entries()];if(await this.tweens.run(700,n=>{for(const[s,r]of t){const{x:a,y:o}=cr(s,this.side),l=n*3-(a+o)*.12;r.model.root.position.y=Math.max(0,Math.sin(Math.min(Math.max(l,0),1)*Math.PI))*.25}},_n.linear),e!==this.animGen)return!1;for(const[n,s]of t)this.pieces.get(n)===s&&(s.model.root.position.y=0);return this.performing=!1,!0}cancelAnimations(){this.animGen++,this.performing=!1,this.tweens.finishAll(),this.stopShake()}stopShake(){this.shake=0,this.camera.position.copy(this.baseCamPos),this.dirty=!0}finishAnimations(){this.cancelAnimations()}get animating(){return this.tweens.active}thumbnail(e,t=160){if(this.isContextLost())return"";const n=new xh;n.add(new Bh(14867711,4997248,1.9));const s=new Wa(15789311,1.8);s.position.set(7,9,-3),n.add(s);const r=new Wa(16761482,.5);r.position.set(-5,4,6),n.add(r);const a=new fi;Ul??(Ul=sS());const o=new Lt(Ul,this.tileMaterial);a.add(o);const l=Nl(e,void 0,!1);l.tick?.(.8),a.add(l.root),n.add(a),a.updateMatrixWorld(!0);const c=Fl.iso,u=new sa(-1,1,1,-1,.1,50);u.position.set(Math.sin(c.azimuth)*10,7,Math.cos(c.azimuth)*10),u.lookAt(0,0,0),u.updateMatrixWorld();const d=new ns().setFromObject(a);let h=1/0,f=-1/0,g=1/0,_=-1/0;for(const A of[d.min.x,d.max.x])for(const P of[d.min.y,d.max.y])for(const D of[d.min.z,d.max.z]){const O=new L(A,P,D).applyMatrix4(u.matrixWorldInverse);h=Math.min(h,O.x),f=Math.max(f,O.x),g=Math.min(g,O.y),_=Math.max(_,O.y)}const m=Math.max(f-h,_-g)/2*1.06,p=(h+f)/2,y=(g+_)/2;u.left=p-m,u.right=p+m,u.top=y+m,u.bottom=y-m,u.updateProjectionMatrix();const T=new $n(t,t,{samples:4});T.texture.colorSpace=cn;const M=this.scene.fog;this.renderer.setRenderTarget(T),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(n,u);const E=new Uint8Array(t*t*4);if(this.renderer.readRenderTargetPixels(T,0,0,t,t,E),this.renderer.setRenderTarget(null),this.renderer.setClearColor(0,0),this.scene.fog=M,T.dispose(),this.dirty=!0,this.isContextLost())return"";const w=document.createElement("canvas");w.width=w.height=t;const R=w.getContext("2d"),x=R.createImageData(t,t);for(let A=0;A<t;A++)x.data.set(E.subarray((t-1-A)*t*4,(t-A)*t*4),A*t*4);return R.putImageData(x,0,0),w.toDataURL("image/png")}loop(e){this.rafId=requestAnimationFrame(this.loop);const t=this.lastFrame?e-this.lastFrame:16;if(this.lastFrame=e,document.hidden)return;const n=Math.min(64,t),s=this.tweens.active||this.shake>.001;if(this.tweens.tick(Math.min(1e3,t)),this.clock+=n/1e3,this.lost)return;const r=!this.reducedMotion&&e-this.lastIdleRender>33;if(!(!s&&!this.dirty&&!r)){if(r||s){if(this.lastIdleRender=e,!this.reducedMotion){this.world.tick(this.clock);for(const o of this.pieces.values())o.model.tick?.(this.clock);(this.leaning.size||this.highlight.merge.length)&&this.updateLean()}const a=this.reducedMotion?1:.75+Math.sin(this.clock*5)*.25;for(const o of this.frames){if(!o.visible)continue;const l=o.material;l.opacity=(l.userData.base??1)*a}if(this.suggest.visible){const o=this.reducedMotion?1:.7+Math.sin(this.clock*3)*.3;this.suggest.material.opacity=Ol*o}}if(this.ghost){const a=Kt(this.ghost.index);this.ghost.model.root.position.set(a.x,this.reducedMotion?.05:.08+Math.sin(this.clock*4)*.05,a.z)}if(this.shake>.001){const a=this.shake;this.camera.position.set(this.baseCamPos.x+(Math.random()-.5)*a,this.baseCamPos.y+(Math.random()-.5)*a,this.baseCamPos.z+(Math.random()-.5)*a),this.shake*=Math.pow(1e-4,n/1e3)**.6,this.shake<=.001&&this.camera.position.copy(this.baseCamPos)}this.renderer.render(this.scene,this.camera),this.dirty=!1}}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.dprQuery?.removeEventListener?.("change",this.onPixelRatioChange),this.canvas.removeEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored,!1),this.renderer.dispose()}}const Bl=[0,2,4,7,9,12,14,16,19,21,24],SS=392;function js(i){return SS*Math.pow(2,i/12)}function qa(i){i?.catch(()=>{})}class bS{constructor(e,t=!1){this.ctx=null,this.master=null,this.noise=null,this.musicBus=null,this.musicTimer=0,this.nextBeat=0,this.beat=0,this.enabled=e,this.musicOn=t}unlock(){if(!this.enabled&&!this.musicOn)return;const e=this.ensure();e&&e.state!=="running"&&e.state!=="closed"&&qa(e.resume()),this.musicOn&&this.startMusic()}get music(){return this.musicOn}setMusic(e){this.musicOn=e,e?this.unlock():this.stopMusic()}setPaused(e){this.ctx&&(e?qa(this.ctx.suspend()):(this.enabled||this.musicOn)&&qa(this.ctx.resume()))}startMusic(){const e=this.ensure();if(!(!e||this.musicTimer)){if(!this.musicBus){this.musicBus=e.createGain();const t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400;const n=e.createDelay(1);n.delayTime.value=.42;const s=e.createGain();s.gain.value=.28,this.musicBus.connect(t),t.connect(this.master),t.connect(n),n.connect(s).connect(n),n.connect(this.master)}this.musicBus.gain.cancelScheduledValues(e.currentTime),this.musicBus.gain.setValueAtTime(1e-4,e.currentTime),this.musicBus.gain.exponentialRampToValueAtTime(.32,e.currentTime+2.5),this.nextBeat=e.currentTime+.1,this.musicTimer=window.setInterval(()=>this.schedule(),120),this.schedule()}}stopMusic(){if(window.clearInterval(this.musicTimer),this.musicTimer=0,this.ctx&&this.musicBus){const e=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setValueAtTime(Math.max(1e-4,this.musicBus.gain.value),e),this.musicBus.gain.exponentialRampToValueAtTime(1e-4,e+.6)}}schedule(){const e=this.ctx;if(!e||!this.musicBus)return;const t=60/76/2,n=[[0,4,7,11],[-3,0,4,7],[-7,-3,0,4],[-5,-1,2,4]],s=[0,2,4,7,9,12,14,16];for(;this.nextBeat<e.currentTime+.6;){const r=this.nextBeat,a=Math.floor(this.beat/8),o=n[Math.floor(a/2)%n.length],l=this.beat%16;if(l===0){for(const d of o)this.voice(261.63*Math.pow(2,d/12),r,t*16,.05,"triangle",1.4);this.voice(65.41*Math.pow(2,o[0]/12),r,t*8,.12,"sine",.05)}l===8&&this.voice(65.41*Math.pow(2,o[0]/12),r,t*8,.1,"sine",.05);const c=Math.sin(this.beat*12.9898)*43758.5453,u=c-Math.floor(c);if(l%2===0&&u<.42){const d=s[Math.floor(u*100)%s.length];this.voice(523.25*Math.pow(2,d/12),r,.9,.05,"sine",.005)}this.nextBeat+=t,this.beat++}}voice(e,t,n,s,r,a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.value=e,c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+Math.max(.005,a)),c.gain.exponentialRampToValueAtTime(1e-4,t+n),l.connect(c).connect(this.musicBus),l.start(t),l.stop(t+n+.05)}ensure(){if(this.ctx)return this.ctx;try{const e=window.AudioContext??window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55;const t=this.ctx.createDynamicsCompressor();this.master.connect(t).connect(this.ctx.destination);const n=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}catch{this.ctx=null}return this.ctx}ready(){if(!this.enabled)return null;const e=this.ensure();if(!e||e.state==="closed")return null;if(e.state==="suspended")qa(e.resume());else if(e.state!=="running")return null;return e}tone(e,t,n,s,r="sine",a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+n),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+.008),c.gain.exponentialRampToValueAtTime(1e-4,t+n),l.connect(c).connect(this.master),l.start(t),l.stop(t+n+.02)}bell(e,t,n,s){this.tone(e,t,n,s,"sine"),this.tone(e*2.01,t,n*.6,s*.28,"sine"),this.tone(e*3.02,t,n*.3,s*.1,"triangle")}noiseHit(e,t,n,s,r=1){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=r;const c=a.createGain();c.gain.setValueAtTime(n,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l).connect(c).connect(this.master),o.start(e),o.stop(e+t+.02)}place(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(260,t,.12,.35,"sine",150),this.noiseHit(t,.05,.12,1800,2)}merge(e,t){const n=this.ready();if(!n)return;const s=n.currentTime,r=Bl[Math.min(Bl.length-3,e+t-1)];this.bell(js(r),s,.5,.22),this.bell(js(r+7),s+.07,.6,.18),t>=2&&this.bell(js(r+12),s+.14,.7,.16)}chain(e){const t=this.ready();if(!t)return;const n=t.currentTime+.05;for(let s=0;s<Math.min(e+1,5);s++)this.tone(js(Bl[s+e]),n+s*.055,.22,.1,"triangle")}festival(){const e=this.ready();if(!e)return;const t=e.currentTime;[0,4,7,12,16,19,24].forEach((n,s)=>this.bell(js(n),t+s*.07,.9,.16)),this.noiseHit(t,.6,.05,6e3,.7)}crumble(){const e=this.ready();if(!e)return;const t=e.currentTime;this.noiseHit(t,.32,.35,420,.8),this.tone(120,t,.2,.2,"sine",60)}invalid(){const e=this.ready();e&&this.tone(160,e.currentTime,.12,.18,"triangle",120)}swap(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(520,t,.08,.12,"sine",700),this.tone(700,t+.06,.08,.1,"sine",520)}gameOver(){const e=this.ready();if(!e)return;const t=e.currentTime;[12,7,4,0].forEach((n,s)=>this.bell(js(n),t+s*.18,.9,.17))}warning(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(330,t,.15,.08,"triangle"),this.tone(311,t+.16,.2,.08,"triangle")}}function wS(i,e=1){switch(i){case"tap":return 8;case"land":return 12;case"merge":return Math.min(25,15+(Math.max(1,Math.floor(e))-1)*3);case"festival":return[25,50,25,50,70];case"invalid":return[6,40,6];case"gameOver":return[30,90,50]}}function Md(){return typeof navigator>"u"?null:navigator}class ES{constructor(e){this.enabled=e}get supported(){const e=Md();return!!e&&"vibrate"in e&&typeof e.vibrate=="function"}tap(){this.pulse("tap")}land(){this.pulse("land")}merge(e){this.pulse("merge",e)}festival(){this.pulse("festival")}invalid(){this.pulse("invalid")}gameOver(){this.pulse("gameOver")}pulse(e,t){if(!this.enabled||!this.supported)return;const n=Md();if(!(n.userActivation&&!n.userActivation.hasBeenActive))try{n.vibrate(wS(e,t))}catch{}}}const We=i=>document.getElementById(i),se={stage:We("stage"),hud:We("hud"),dock:document.querySelector(".dock"),score:We("score"),best:We("best"),dailyChip:We("dailyChip"),dailyLeft:We("dailyLeft"),status:We("status"),announcer:We("announcer"),sheetAnnouncer:We("sheetAnnouncer"),coach:We("coach"),coachText:We("coachText"),coachSkip:We("coachSkip"),popups:We("popups"),banner:We("banner"),nextCard:We("nextCard"),nextImg:We("nextImg"),keepBtn:We("keepBtn"),keepImg:We("keepImg"),menuBtn:We("menuBtn"),spinLeft:We("spinLeft"),undoBtn:We("undoBtn"),modeFire:We("modeFire"),modeClassic:We("modeClassic"),modeNote:We("modeNote"),spinRight:We("spinRight"),sizePrev:We("sizePrev"),sizeNext:We("sizeNext"),sizeName:We("sizeName"),sizeSub:We("sizeSub"),home:We("home"),homeBest:We("homeBest"),playBtn:We("playBtn"),homeNewBtn:We("homeNewBtn"),dailyBtn:We("dailyBtn"),dailyTitle:We("dailyTitle"),dailySub:We("dailySub"),dailyMeta:We("dailyMeta"),homeHelpBtn:We("homeHelpBtn"),homeJournalBtn:We("homeJournalBtn"),homeSettingsBtn:We("homeSettingsBtn"),modal:We("modal"),modalArt:We("modalArt"),modalTitle:We("modalTitle"),modalBody:We("modalBody"),modalActions:We("modalActions"),closeModal:We("closeModal"),webglError:We("webglError")},Wt=jt,Ze=new hm,it=new bS(Ze.getSound(),Ze.getMusic()),bn=new ES(Ze.getHaptics()),vu=window.matchMedia("(prefers-reduced-motion: reduce)"),Ka="https://pixel-pusher-hub.github.io/little-nooks/",yd=Ip(["9..8.7.1",".6..5..2","7.3...4.","..2...1.",".1..3...","2..4.1..","..2.1..1","1...2..1"]);function TS(i,e=!1){const t=Vc(i),n=Math.floor((8-i)/2);for(let s=0;s<i;s++)for(let r=0;r<i;r++){const a=r+n,o=s+n;a>=0&&o>=0&&a<8&&o<8&&(t[s*i+r]=yd[o*8+a]===Ft?At:yd[o*8+a])}return e&&(t[Gd(i)]=hn),t}const Bt=i=>i.mode??"classic",is=()=>Np(new Date);let Vt=Ze.getSize(Ld),tn=Ze.getFire();const Tn=i=>oa(i.board),Bi=i=>!!i.glow;function da(i=Vt,e=tn){const t=Ze.loadGame(ys,i,e);return t&&!t.over&&Bt(t)==="classic"&&Tn(t)===i&&Bi(t)===e?t:$c(Bd(),Wt,i,e,!0)}function Zf(i){const e=Ze.loadDaily(ys);return e&&!e.over&&Bt(e)==="daily"&&e.dailyKey===i?e:Vd(i,Wt)}let k=da(),Qt=Ze.getJournal(),ti=Ze.getBest(Vt,tn),Mo=k.turn===1?ti:Ze.getRoundStartBest(Vt,tn)??ti;Ze.setRoundStartBest(Mo,Vt,tn);let Jf=0,Qi=0,Bn=!1,Mt=!0,As=k.score,Ht=null,so=null,es=null,ts=null,Xr=!1,ro=!1,No=0,Uc=!1,Qf=!1,Ge=null;const ao=new Map;let xs=null;const wt=i=>Math.round(i).toLocaleString("en-US"),En=()=>!se.modal.classList.contains("hidden"),Fi=i=>i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Fn=(i,e,t=`${e}s`)=>`${i} ${i===1?e:t}`;let ji=!1,Fc=0;function sn(i,e=""){se.status.textContent=i,se.status.className=`status${e?` ${e}`:""}`,ji=!1,clearTimeout(Fc),e==="good"&&(Fc=window.setTimeout(()=>se.status.classList.add("faded"),2600))}function Sd(i){sn(i,"good"),clearTimeout(Fc),ji=!0}function fa(i=k){return i.pieceLimit?Math.max(0,i.pieceLimit-(i.turn-1)):1/0}function AS(i){return i.endReason==="dark"?"The night closed in: no lit tile is free.":i.endReason==="limit"?Bt(i)==="daily"?`All ${i.pieceLimit} pieces placed. Day complete!`:"Out of pieces. Build something new next time to earn more!":"No empty tiles left."}function On(){const i=zi(k).length,e=fa();k.over?sn(AS(k),"danger"):Yn(k.next)?sn(`A rare ${nn(k.next)}! Set it down anywhere, even in the dark. It burns for ${_i[k.next].life} moves.`,"good"):i<=4?sn(k.glow?`Only ${Fn(i,"lit tile")} left. Build a light, or merge!`:`Only ${Fn(i,"free tile")} left. Make every merge count!`,"danger"):e<=10?sn(`Only ${Fn(e,"piece")} left. Build something new to earn more!`,"warn"):sn(Bt(k)==="daily"?`Daily Nook: ${Fn(e,"piece")} to place today.`:k.glow?"Build in the light. Every building lights the tiles around it.":"Tap an empty tile to place your piece.")}let bd=0;function xn(i){const e=En()?se.sheetAnnouncer:se.announcer;se.announcer.textContent="",se.sheetAnnouncer.textContent="",clearTimeout(bd),bd=window.setTimeout(()=>e.textContent=i,60)}function CS(i){i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}function Za(i,e,t=""){const n=document.createElement("div");n.className=`popup${t?` ${t}`:""}`,n.textContent=i,n.style.left=`${e.x}px`,n.style.top=`${e.y}px`,se.popups.appendChild(n),setTimeout(()=>n.remove(),1100)}let wd=0;function oo(i){se.banner.textContent=i,se.banner.classList.remove("show"),se.banner.offsetWidth,se.banner.classList.add("show"),clearTimeout(wd),wd=window.setTimeout(()=>se.banner.classList.remove("show"),1250)}function ra(i,e=160){const t=`${i}@${e}`;if(!ao.has(t)&&Ge){const n=Ge.thumbnail(i,e);if(!n)return"";ao.set(t,n)}return ao.get(t)??""}function en(i,e="",t=50){return`<img src="${ra(i)}" alt="${Fi(e)}" width="${t}" height="${t}" draggable="false" />`}function RS(){return Bt(k)==="daily"?Math.max(Qt.daily.scores[k.dailyKey??""]??0,k.score):Math.max(ti,k.score)}function mr(){se.score.textContent=wt(As),se.best.textContent=wt(RS()),jf(),Oo(),xu()}function jf(){if(se.dailyChip.classList.toggle("hidden",!k.pieceLimit),!k.pieceLimit)return;const i=fa();se.dailyLeft.textContent=String(i),se.dailyChip.classList.toggle("low",i<=10)}function PS(){const i=k.next;if(i===Ft)return{text:"Never merges",good:!1,spots:0};if(Yn(i))return{text:`Goes anywhere, burns ${_i[i].life} moves`,good:!0,spots:0};const e=k.over?[]:qc(k.board,i,Wt,zi(k));if(!e.length)return{text:i===Zt?`3 ${yn[Zt].name}s = Festival`:"No match yet",good:!1,spots:0};let t=1;for(const n of e)t=Math.max(t,Ao(k,n,Wt).state.lastChain);return{text:t>=2?`Chain ×${t} possible!`:`Merges in ${Fn(e.length,"spot")}`,good:!0,spots:e.length}}let Ed=-1,ep=0;function xu(){se.nextImg.src=ra(k.next),se.nextImg.alt="";const i=PS();se.nextCard.setAttribute("aria-label",`Next piece: ${nn(k.next)}, ${Rp(k.next)}. ${i.text}. Show what's coming.`),se.nextCard.title=`Next: ${nn(k.next)}. ${i.text} (I: what's coming)`,k.stash===At?(se.keepImg.removeAttribute("src"),se.keepImg.hidden=!0,se.keepBtn.classList.add("empty"),se.keepBtn.setAttribute("aria-label",`Keep slot is empty. Store the ${nn(k.next)} for later`)):(se.keepImg.src=ra(k.stash),se.keepImg.hidden=!1,se.keepImg.alt="",se.keepBtn.classList.remove("empty"),se.keepBtn.setAttribute("aria-label",`Keep slot holds a ${nn(k.stash)}. Swap it with the ${nn(k.next)}`),!k.over&&Ed!==k.turn&&i.spots===0&&k.stash!==Ft&&qc(k.board,k.stash,Wt,zi(k)).length&&(Ed=k.turn,se.keepBtn.classList.remove("nudge"),se.keepBtn.offsetWidth,se.keepBtn.classList.add("nudge")))}function Td(){if(!Ge)return;const i=window.innerWidth,e=window.innerHeight,t={top:0,right:0,bottom:0,left:0};document.querySelectorAll("[data-inset]").forEach(s=>{const r=getComputedStyle(s);if(r.display==="none")return;const a=r.getPropertyValue("--inset").trim(),o=s.getBoundingClientRect();!o.width||!o.height||(a==="top"?t.top=Math.max(t.top,o.bottom):a==="bottom"?t.bottom=Math.max(t.bottom,e-o.top):a==="right"?t.right=Math.max(t.right,i-o.left):a==="left"&&(t.left=Math.max(t.left,o.right)))}),document.body.style.setProperty("--dock-h",`${Math.round(se.dock.getBoundingClientRect().height)}px`);const n=Math.min(i,e)<500?6:16;Ge.setInsets({top:t.top+n,right:t.right+n,bottom:t.bottom+n,left:t.left+n})}function Mu(){return!Bn&&!k.over&&!En()&&!Mt}function tp(i){const e=Ao(k,i,Wt),t=new Set;let n=0,s=null;for(const o of e.events)o.kind==="place"||o.kind==="expire"||(o.cells.forEach(l=>t.add(l)),n+=o.points,s=o);if(t.delete(i),!s)return null;const r=e.state.lastChain,a=s.kind==="merge"?`→ ${yn[s.toTier].name}`:s.kind==="festival"?"→ Skyline Festival!":"shatters rocks";return{cells:[...t],text:`${r>1?`Chain ×${r} `:""}${a}  +${wt(n)}`}}function ci(i){if(es=i,!Ge)return;if(i===null||!Mu()){Ge.setHover(null,null,[]),ji&&!Bn&&!Mt&&On();return}if(k.board[i]!==At){Ge.setHover(i,null,[],!0),ji&&On();return}if(!Yc(k,i)){Ge.setHover(i,null,[],!0),sn("Too dark to build here. Build next to the light.","warn"),ji=!0;return}const e=tp(i);Ge.setHover(i,k.next,e?.cells??[]),e?Sd(e.text+(Xr?" · lift to place":"")):Xr?Sd("No merge here · lift to place, or slide off to cancel"):ji&&On()}function pa(){if(Bt(k)==="daily"){k.over?Ze.clearDaily():Ze.saveDaily(k);return}const i=Tn(k),e=Bi(k);k.over?Ze.clearGame(i,e):Ze.saveGame(k,i,e),Ze.submitScore(k.score,i,e),ti=Math.max(ti,Ze.getBest(i,e))}function Cs(i){if(Ge?.cancelAnimations(),Qi++,Bn=!1,xs=null,k=i,As=k.score,ro=!1,LS(),Bt(k)==="daily")Jf=Qt.daily.scores[k.dailyKey??""]??0;else{const e=Tn(k),t=Bi(k);ti=Ze.getBest(e,t),k.turn===1?(Mo=ti,Ze.setRoundStartBest(ti,e,t)):Mo=Ze.getRoundStartBest(e,t)??ti}Mt||(Uo(k),mr(),On())}function Uo(i){Ge&&(Ge.sync(i.board),Ge.setLit(i.glow?ca(i.board):null),Ge.setBurn(i.burn))}const or=[];function np(){Bt(k)!=="daily"&&(or.push({state:k,journal:Qt}),or.length>30&&or.shift())}function LS(){or.length=0,Oo()}function Fo(){return or.length>0&&Bt(k)!=="daily"}function Oo(){se.undoBtn.disabled=!Fo()||Bn}function yo(){if(!Ge||Bn||Mt||!Fo())return;const i=or.pop();En()&&fn(!1),Ge.cancelAnimations(),Qi++,xs=null,k=i.state,Qt=i.journal,Ze.saveJournal(Qt),pa(),As=k.score,Uo(k),mr(),On(),it.unlock(),it.swap(),bn.tap(),xn(`Move undone. Next: ${nn(k.next)}.`),ts?.type==="mouse"&&es!==null&&ci(Ge.pick(ts.x,ts.y))}function IS(i){const e=Bt(i)==="daily",t=i.score>0&&i.score>(e?Jf:Mo),n=sm(Qt,i,is());return Qt=n.journal,Ze.saveJournal(Qt),lr.active&&!e&&zo(),{state:i,newBest:t,highlights:n.highlights}}function DS(i,e){const t=i.filter(o=>o.kind==="merge"),n=i.find(o=>o.kind==="festival"),s=i.find(o=>o.kind==="crumble"),r=[];if(n)r.push(`Skyline Festival! +${wt(e)}`);else if(t.length){const o=t[t.length-1],l=t.length>1?`Chain ×${t.length}: `:"";r.push(`${l}made a ${o.kind==="merge"?yn[o.toTier].name:""}, +${wt(e)}`)}else{const o=i[0];r.push(`Placed a ${o.kind==="place"?nn(o.piece):"piece"}`)}s&&s.kind==="crumble"&&r.push(`shattered ${Fn(s.cells.length,"rock")}`);const a=i.find(o=>o.kind==="expire");return a&&a.kind==="expire"&&r.push(a.cells.length>1?`${a.cells.length} lights burned out`:"a light burned out"),r.join(", ")}async function Oc(i){if(!Ge||!Mu())return;if(it.unlock(),k.board[i]!==At){it.invalid(),bn.invalid(),sn("That tile is taken. Pick an empty one.","warn"),xn("That tile is taken. Pick an empty one."),Ge.nudge(i);return}if(!Yc(k,i)){it.invalid(),bn.invalid(),sn("Too dark to build there. Build next to the light.","warn"),xn("Too dark to build there. Build next to the light.");return}const e=Ao(k,i,Wt);if(!e.accepted)return;np(),Bn=!0,Oo();const t=Qi,n=k;ep=k.highestTier,k=e.state,Qt=em(Qt,e.events,e.points);const s=k.over?IS(k):null;Ze.saveJournal(Qt),pa(),xu(),jf(),Ge.setSuggestions([]),ma();try{await Ge.animateMove(e.events,k.board,{onEvent:(u,d)=>{t===Qi&&NS(u,d)}})}finally{t===Qi&&(As=k.score,Bn=!1)}if(t!==Qi)return;k.glow&&(Ge.setLit(ca(k.board)),Ge.setBurn(k.burn)),mr();const r=(k.pieceLimit??0)-(n.pieceLimit??0);r>0&&k.budget&&(oo(`New: ${yn[k.highestTier].name}! +${r} pieces`),it.festival());const a=zi(k).length,o=a<=Math.max(4,Math.round(k.board.length*.12));o&&!ro&&!k.over&&(ro=!0,it.warning()),o||(ro=!1);const l=fa(),c=k.over?"":a<=4?` Only ${Fn(a,k.glow?"lit tile":"free tile")} left.`:l<=10?` Only ${Fn(l,"piece")} left.`:"";if(xn(`${DS(e.events,e.points)}. ${k.over?"Round over.":`Next: ${nn(k.next)}.`}${c}`),s){await BS(s,t);return}k.lastChain>=2?sn(`Lovely! ×${k.lastChain} chain reaction.`,"good"):e.points>Wt.placePoints?sn(`+${wt(e.points)} points`,"good"):On(),Go(e.events),ts?.type==="mouse"&&es!==null&&ci(Ge.pick(ts.x,ts.y)),Ht!==null&&Ge.setCursor(Ht)}function NS(i,e){if(i.kind==="place"){it.place(),bn.land();return}if(i.kind==="expire"){it.crumble(),Za(i.cells.length>1?"Lights out":"Burned out",e,"rock");return}As+=i.points,se.score.textContent=wt(As),CS(se.score),i.kind==="merge"?(it.merge(i.toTier,i.step),bn.merge(i.step),Za(`+${wt(i.points)}`,e,i.step>=2?"big":""),i.step>=2&&(it.chain(i.step),oo(`Chain ×${i.step}!`)),i.toTier>ep&&i.toTier>=2&&i.step<2&&!k.budget&&oo(`A ${yn[i.toTier].name}!`)):i.kind==="festival"?(it.festival(),bn.festival(),oo("Skyline Festival!"),Za(`+${wt(i.points)}`,e,"big")):i.kind==="crumble"&&(it.crumble(),bn.land(),Za(`+${wt(i.points)}`,e,"rock"))}function Bc(){Mu()&&(it.unlock(),np(),k=Vp(k,Wt),Oo(),pa(),it.swap(),bn.tap(),xu(),se.nextCard.classList.remove("pop"),se.nextCard.offsetWidth,se.nextCard.classList.add("pop"),ci(es),es===null&&On(),xn(`Next: ${nn(k.next)}. Kept: ${k.stash===At?"nothing":nn(k.stash)}.`),Go())}function gr(){lr.active&&Bt(k)==="classic"&&k.turn>1&&zo(),Cs($c(Bd(),Wt,Vt,tn,!0)),pa(),fn(!1),yu(),Bo()}function So(i=!1){it.unlock();const e=is(),t=i?Vd(e,Wt):Zf(e);Cs(t),pa(),fn(!1),yu(),Bo(),t.turn===1&&(sn(`Daily Nook #${ur(e)}: everyone gets this island today. Place ${$r} pieces for your best score.`,"good"),xn(`Daily Nook number ${ur(e)}. ${$r} pieces. Next: ${nn(k.next)}.`))}function ip(){const i=Ze.loadGame(ys,Vt,tn);return{inProgress:!!i&&!i.over&&i.turn>1&&Bt(i)==="classic"&&Tn(i)===Vt&&Bi(i)===tn,saved:i}}function Ms(){const{inProgress:i,saved:e}=ip();se.playBtn.textContent=i?"Continue":"Play",se.homeNewBtn.classList.toggle("hidden",!i),se.homeBest.textContent=wt(Ze.getBest(Vt,tn)),se.modeFire.setAttribute("aria-pressed",String(tn)),se.modeClassic.setAttribute("aria-pressed",String(!tn)),se.modeNote.textContent=tn?"Build outward from the campfire: you can only build where there is light.":"Build anywhere on the island.";const t=_s.indexOf(Vt);se.sizeName.textContent=`${Vt} × ${Vt}`,se.sizeSub.textContent=bp[Vt],se.sizePrev.disabled=t<=0,se.sizeNext.disabled=t>=_s.length-1,se.playBtn.setAttribute("aria-label",`${se.playBtn.textContent} ${tn?"Firelight":"Classic"} on the ${Vt} by ${Vt} island`);const n=is(),s=ur(n),r=Ze.loadDaily(ys),a=!!r&&!r.over&&r.dailyKey===n&&r.turn>1,o=Qt.daily.scores[n];se.dailyTitle.textContent=a?"Continue":"Daily",se.dailySub.textContent=a?`Continue · ${Fn(fa(r),"piece")} left`:o!==void 0?`Played today · best ${wt(o)} · play again`:`Today's island · ${$r} pieces`;const l=Yd(Qt,n);se.dailyMeta.textContent=l>0?String(l):"",se.dailyMeta.classList.toggle("hidden",l===0),se.dailyBtn.title=`Daily Nook #${s}: ${se.dailySub.textContent}`,se.dailyBtn.setAttribute("aria-label",`Daily Nook number ${s}. ${se.dailySub.textContent}.${l?` Streak: ${Fn(l,"day")}.`:""}`);const c=i&&e?e:{board:TS(Vt,tn),glow:tn};Ge?.sync(c.board),Ge?.setLit(c.glow?ca(c.board):null)}function Ad(i){i!==tn&&(tn=i,Ze.setFire(i),it.unlock(),it.swap(),Bt(k)==="classic"&&Cs(da()),Ms())}function Cd(i){const e=_s.indexOf(Vt)+i;e<0||e>=_s.length||(Vt=_s[e],Ze.setSize(Vt),it.unlock(),it.swap(),Bt(k)==="classic"&&Cs(da()),Ms())}function aa(){const i=!Mt;if(Ge?.cancelAnimations(),Qi++,Bn=!1,xs=null,Mt=!0,As=k.score,document.body.classList.add("at-home"),Ge&&(Ge.canvas.tabIndex=-1),fn(!1),Ge?.setHover(null,null,[]),Ge?.setCursor(null),Ge?.setSuggestions([]),ma(),Qf){location.reload();return}Ms(),i&&se.playBtn.focus({preventScroll:!0})}function yu(){No=performance.now()+350,Mt&&(Mt=!1,document.body.classList.remove("at-home"),Ge&&(Ge.canvas.tabIndex=0),Uo(k)),mr(),On(),Go()}function Rd(){const i=Tn(k);if(so!==null&&so<i*i)return so;const e=Math.floor((i-1)/2);return e*i+e}function Bo(){Ge?.canvas.focus({preventScroll:!0})}function ko(){it.unlock(),(Bt(k)!=="classic"||Tn(k)!==Vt||Bi(k)!==tn)&&Cs(da()),k.over?gr():(Mt&&Uo(k),yu()),Ze.hasSeenHelp()?Bo():(Rn=Ge?.canvas??null,Ho())}const lr={active:!Ze.getCoachDone()&&Ze.getBest()===0&&Qt.rounds===0,said:new Set};function ma(){se.coach.classList.add("hidden")}function zo(){lr.active=!1,Ze.setCoachDone(),ma(),Ge?.setSuggestions([])}function kl(i,e=!1){return zi(k).filter(t=>e?Ud(t,Tn(k)):!0).map(t=>[t,rm(k,t,Wt)]).sort((t,n)=>n[1]-t[1]).slice(0,i).map(([t])=>t)}function Go(i){if(!Ge)return;if(!lr.active||Mt||Bt(k)!=="classic"||k.over||En()){ma(),Ge.setSuggestions([]);return}if(k.turn>16){zo();return}const e=a=>lr.said.has(a)?!1:(lr.said.add(a),!0),t=nn(k.next),n=qc(k.board,k.next,Wt,zi(k));let s="",r=[];i?.some(a=>a.kind==="merge"&&a.step>=2)&&e("chain")?s="A chain! The new piece merged again, and each extra step multiplies the points.":i?.some(a=>a.kind==="merge")&&e("merge")?s="Three became one, right where you placed it. Merging also frees up space.":k.glow&&k.turn===1?(s=`Night has fallen. Build in the campfire's light: place your ${t} on a glowing tile.`,r=kl(3)):k.glow&&i?.some(a=>a.kind==="merge"&&a.toTier>=2)&&e("light")?s="A building! Every building lights the tiles around it, so your town can grow into the dark.":n.length&&k.next!==Ft?(s=`Put the ${t} on a glowing tile to merge three of a kind!`,r=n.slice(0,4)):k.turn===1?(s=`Tap a glowing tile to place your ${t}. Three matching pieces side by side merge.`,r=kl(3)):k.turn>=5&&k.stash===At&&e("keep")?s="Tip: tap Keep to save the next piece for later. Swapping is free.":(s="Build pairs: two matching pieces side by side are one away from a merge.",r=kl(2)),se.coachText.textContent=s,se.coach.classList.remove("hidden"),Ge.setSuggestions(r)}let Rn=null,kc=null;function ki(i){En()||(Rn=document.activeElement),se.modalTitle.textContent=i.title,i.describe?se.modal.setAttribute("aria-describedby","modalBody"):se.modal.removeAttribute("aria-describedby"),se.modalBody.innerHTML=i.body,se.modalArt.innerHTML=i.art??"",se.modalActions.innerHTML="";let e=!1;for(const t of i.actions??[]){const n=document.createElement("button");n.type="button",n.className=`btn ${t.kind==="dark"?"btn-dark":"btn-primary"}`,n.innerHTML=`${t.icon?`<svg aria-hidden="true"><use href="#${t.icon}" /></svg>`:""}<span>${Fi(t.label)}</span>`,t.id?n.id=t.id:t.kind!=="dark"&&!e&&(n.id="modalAction",e=!0),n.addEventListener("click",t.onClick),se.modalActions.appendChild(n)}kc=i.onClose??null,i.mount?.(se.modalBody),se.modal.classList.remove("hidden"),se.modal.querySelector(".sheet").scrollTop=0,Ge?.setHover(null,null,[]),ma(),(se.modalActions.querySelector("button")??se.closeModal).focus({preventScroll:!0})}function zc(i){return document.contains(i)&&i.getClientRects().length>0&&getComputedStyle(i).visibility!=="hidden"}function US(){let i;Mt?i=Rn&&se.home.contains(Rn)&&zc(Rn)?Rn:se.playBtn:i=Rn&&Rn!==document.body&&document.contains(Rn)&&!se.home.contains(Rn)&&!se.modal.contains(Rn)&&zc(Rn)?Rn:Ge?.canvas??null,i?.focus({preventScroll:!0}),document.activeElement!==i&&(Mt?se.playBtn:Ge?.canvas)?.focus({preventScroll:!0})}function fn(i=!0){if(!En())return;se.modal.classList.add("hidden"),No=performance.now()+350;const e=kc;if(kc=null,e?.(),i&&US(),xs&&!En()&&!Mt){const t=xs;xs=null,lp(t)}else!En()&&!Mt&&!Bn&&Go()}function Ho(){const i='<span class="arrow" aria-hidden="true">→</span>',e=Mt;ki({title:"How to Play",body:`
      <div class="steps">
        <div class="step"><div class="step-art" aria-hidden="true">${en(0)}${en(0)}${en(0)}</div>
          <div><h3>1. Merge 3</h3><p>Place 3 or more of the same piece side by side. Diagonals don't count.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${en(0)}${i}${en(1)}${i}${en(2)}</div>
          <div><h3>2. Create bigger</h3><p>A merge makes one piece of the next tier, right where you placed.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${en(4)}${i}${en(6)}${i}${en(Hc+2)}</div>
          <div><h3>3. Grow a city</h3><p>Bushes grow into trees, then tents, cottages, houses, apartments and towers, then ever grander skyscrapers: forty things to build. Chains score ×2, ×3, ×4…</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${en(hn)}</div>
          <div><h3>Firelight</h3><p>The night is dark: you can only build on lit tiles. The campfire and every building light the tiles around them; bigger ones light more.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${en(Sn)}${en(Xn)}</div>
          <div><h3>Rare lights</h3><p>Now and then you get a Campfire (lasts ${_i[Sn].life} moves) or an even rarer Lamppost (${_i[Xn].life} moves, lights farther). Set them down anywhere, even in the dark, and build there before they burn out.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${en(3)}</div>
          <div><h3>Pieces</h3><p>A round has a budget of pieces. Build something bigger than ever before and you earn more, so you can keep going.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${en(1)}</div>
          <div><h3>Keep slot</h3><p>Stash the next piece and swap it back any time. It's free.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${en(2)}</div>
          <div><h3>Daily Nook</h3><p>One shared island a day: place ${$r} pieces for your best score and keep a streak.</p></div></div>
      </div>
      <p class="keys">The round ends when you run out of pieces or of room to build. Hover, or touch and slide, to preview a merge; lift to place, or slide off the island to cancel. The back arrow takes back your last move. Turn the island with the round arrows, or drag anywhere off it. Prefer to build anywhere? Pick Classic on the home screen.<br/>
      Keys: <kbd>←↑→↓</kbd> move · <kbd>Enter</kbd> place · <kbd>S</kbd> keep · <kbd>Z</kbd> undo · <kbd>Q</kbd> <kbd>E</kbd> turn · <kbd>I</kbd> odds · <kbd>V</kbd> camera · <kbd>M</kbd> mute · <kbd>Esc</kbd> menu</p>`,actions:[{label:e?se.playBtn.textContent||"Play":k.turn===1?"Let's play":"Back to my nook",onClick:()=>{Ze.markHelpSeen(),fn(!e),e&&ko()}}],onClose:()=>Ze.markHelpSeen()})}function sp(){const i=Bt(k)==="daily";ki({title:i?`Daily Nook #${ur(k.dailyKey??is())}`:"Menu",body:`<div class="menu-list">
      <button class="btn btn-primary" id="menuResume" type="button">Resume</button>
      <button class="btn btn-dark" id="menuNew" type="button">${i?"Restart today's island":"New game"}</button>
      <button class="btn btn-dark" id="menuOdds" type="button">What's coming</button>
      <button class="btn btn-dark" id="menuJournal" type="button">Journal</button>
      <button class="btn btn-dark" id="menuHelp" type="button">How to play</button>
      <button class="btn btn-dark" id="menuSettings" type="button">Settings</button>
      <button class="btn btn-dark" id="menuHome" type="button">Home</button>
    </div>`,mount:e=>{e.querySelector("#menuResume").addEventListener("click",()=>fn()),e.querySelector("#menuNew").addEventListener("click",op),e.querySelector("#menuOdds").addEventListener("click",Su),e.querySelector("#menuJournal").addEventListener("click",bu),e.querySelector("#menuHelp").addEventListener("click",Ho),e.querySelector("#menuSettings").addEventListener("click",ap),e.querySelector("#menuHome").addEventListener("click",aa)}}),We("menuResume").focus({preventScroll:!0})}function rp(){const i=Ze.getMotion();return i==="system"?vu.matches:i==="on"}function Gc(){const i=rp();Ge?.setReducedMotion(i),document.body.classList.toggle("reduce-motion",i),document.body.classList.toggle("allow-motion",Ze.getMotion()==="off")}function ap(){const i=Ge?.getView()??"iso",e=(t,n,s)=>`<button class="switch" id="${t}" type="button" role="switch" aria-checked="${n}" aria-label="${s}"></button>`;ki({title:"Settings",body:`<div class="settings">
      <div class="setting"><svg aria-hidden="true"><use href="#i-sound" /></svg><span>Sound Effects</span>${e("setSound",it.enabled,"Sound effects")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-note" /></svg><span>Music</span>${e("setMusic",it.music,"Music")}</div>
      ${bn.supported?`<div class="setting"><svg aria-hidden="true"><use href="#i-vibrate" /></svg><span>Vibration</span>${e("setHaptics",bn.enabled,"Vibration")}</div>`:""}
      <div class="setting"><svg aria-hidden="true"><use href="#i-motion" /></svg><span>Reduced Motion</span>${e("setMotion",rp(),"Reduced motion")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-camera" /></svg><span>Camera</span>
        <span class="segmented" role="group" aria-label="Camera view">
          <button type="button" id="viewIso" aria-pressed="${i==="iso"}">Isometric</button>
          <button type="button" id="viewCozy" aria-pressed="${i==="cozy"}">Close-up</button>
        </span></div>
    </div>`,actions:[{label:"Done",onClick:()=>fn()}],mount:t=>{const n=(r,a)=>{const o=t.querySelector(`#${r}`);o?.addEventListener("click",()=>{const l=o.getAttribute("aria-checked")!=="true";o.setAttribute("aria-checked",String(l)),a(l)})};n("setSound",r=>{it.enabled=r,Ze.setSound(r),r&&(it.unlock(),it.swap())}),n("setMusic",r=>{Ze.setMusic(r),it.setMusic(r)}),n("setHaptics",r=>{bn.enabled=r,Ze.setHaptics(r),r&&bn.tap()}),n("setMotion",r=>{Ze.setMotion(r===vu.matches?"system":r?"on":"off"),Gc()});const s=r=>{cp(r),t.querySelector("#viewIso").setAttribute("aria-pressed",String(r==="iso")),t.querySelector("#viewCozy").setAttribute("aria-pressed",String(r==="cozy"))};t.querySelector("#viewIso").addEventListener("click",()=>s("iso")),t.querySelector("#viewCozy").addEventListener("click",()=>s("cozy"))}})}function Su(){const i=kp(k.turn,Wt,k.board.length,Nd(zd(k.board),Wt)),e=(s,r)=>`<div class="odds-row${s===Ft?" rock":""}">${en(s,"",40)}<div class="odds-name">${Fi(nn(s))}<span class="odds-bar"><i style="width:${r}%"></i></span></div><span class="odds-pct">${r}%</span></div>`,t=i.to===null?`Turn ${i.from} onward`:`Turns ${i.from}–${i.to}`;let n="";if(i.next){const s=new Map(i.rows.map(a=>[a.piece,a.percent])),r=i.next.rows.filter(a=>(s.get(a.piece)??0)!==a.percent).map(a=>`${nn(a.piece)} ${s.get(a.piece)??0}% → ${a.percent}%`);r.length&&(n=`<div class="odds-change"><b>From turn ${i.next.at}:</b> ${Fi(r.join(" · "))}</div>`)}ki({title:"What's coming",body:`<div class="odds">
      <div class="odds-head"><b>${t}</b><span>Turn ${k.turn}${k.pieceLimit?` · ${fa()} left`:""}</span></div>
      ${i.rows.map(s=>e(s.piece,s.percent)).join("")}
      ${n}
      <p class="odds-note">Each new piece is drawn from these odds. When the island is ${Math.round(Wt.assistFillRatio*100)}% full or more, a piece that can't merge anywhere gets one ${Math.round(Wt.assistChance*100)}% chance to be redrawn. As your town grows, the pieces grow with it: they arrive a few tiers below your biggest building.${k.glow?` In Firelight, from the first few turns on, a piece is sometimes a rare light instead: a Campfire (${Math.round(Wt.emberChance*100)}%) or a Lamppost (${Math.round(Wt.lampChance*100)}%).`:""}</p>
    </div>`,actions:[{label:"Back to my nook",onClick:()=>fn()}]})}function FS(i){let e=1;i.built.forEach((n,s)=>n>0&&(e=Math.max(e,s)));const t=Math.min(Zt,Math.max(Hc,e+1));return Array.from({length:t},(n,s)=>s+1)}function bu(){const i=Qt,e=is(),t=(s,r,a=!1)=>`<div class="stat-tile${a?" gold":""}"><small>${s}</small><b>${r}</b></div>`;let n="";if(i.recent.length){const s=[...i.recent].reverse(),r=Math.max(1,...s.map(u=>u.score)),a=300,o=80,l=a/Math.max(s.length,8),c=s.map((u,d)=>{const h=Math.max(2,u.score/r*(o-12));return`<rect class="${`bar${u.mode==="daily"?" daily":""}${d===s.length-1?" latest":""}`}" x="${(d*l+1).toFixed(1)}" y="${(o-h).toFixed(1)}" width="${(l-2).toFixed(1)}" height="${h.toFixed(1)}" rx="2"><title>${Fi(u.date)} · ${u.mode} · ${wt(u.score)}</title></rect>`}).join("");n=`<svg class="recent-chart" viewBox="0 0 ${a} ${o+12}" role="img" aria-label="Scores of your last ${s.length} rounds, highest ${wt(r)}">
      <line class="best-line" x1="0" x2="${a}" y1="12" y2="12" />${c}<text x="${a}" y="9" text-anchor="end">best ${wt(r)}</text></svg>`}ki({title:"Journal",body:i.rounds===0?`<p class="journal-empty">Finish a round to start your journal. It keeps your records, everything you've built and your daily streak.</p>`:`<div class="journal">
      <section><h3>Records</h3><div class="stat-grid">
        ${t("Best round",wt(Math.max(i.bestClassic,ti)),!0)}
        ${t("Best daily",wt(i.bestDaily),!0)}
        ${t("Best chain",`×${Math.max(1,i.bestChain)}`)}
        ${t("Biggest move",`+${wt(i.biggestMove)}`)}
        ${t("Longest round",Fn(i.longestRound,"turn"))}
        ${t("Most festivals",String(i.mostFestivals))}
      </div></section>
      <section><h3>Built</h3><div class="built-row">
        ${FS(i).map(s=>`<div>${en(s,yn[s].name,40)}<b>${wt(i.built[s]??0)}</b>${Fi(yn[s].name)}</div>`).join("")}
      </div></section>
      <section><h3>Lifetime</h3><div class="stat-grid">
        ${t("Rounds",wt(i.rounds))}
        ${t("Pieces placed",wt(i.pieces))}
        ${t("Festivals",wt(i.festivals))}
        ${t("Daily streak",Fn(Yd(i,e),"day"),!0)}
        ${t("Longest streak",Fn(i.daily.bestStreak,"day"))}
      </div></section>
      ${n?`<section><h3>Recent rounds</h3>${n}</section>`:""}
    </div>`,actions:[{label:"Close",onClick:()=>fn()}]})}function op(){if(Bt(k)==="daily"){if(k.over||k.turn<=3){So(!0);return}ki({title:"Start today's island again?",body:`<p>This attempt (${wt(k.score)} points) will end. Your best score for today is kept.</p>`,actions:[{label:"Start again",onClick:()=>So(!0)},{label:"Keep playing",kind:"dark",onClick:()=>fn()}]});return}if(k.over||k.turn<=3){gr();return}ki({title:"Start a fresh nook?",body:`<p>Your current round (${wt(k.score)} points) will end. Your personal best stays saved on this device.</p>`,actions:[{label:"New game",onClick:gr},{label:"Keep playing",kind:"dark",onClick:()=>fn()}]})}function OS(){it.unlock();const{inProgress:i,saved:e}=ip();if(!i||!e||e.turn<=3){gr();return}ki({title:"Start a fresh nook?",body:`<p>Your saved round (${wt(e.score)} points, turn ${e.turn}) will be replaced. Your personal best stays saved.</p>`,actions:[{label:"New game",onClick:gr},{label:"Back",kind:"dark",onClick:()=>fn()}]})}async function BS(i,e){if(it.gameOver(),bn.gameOver(),On(),await Ge?.gameOverWave(),!(e!==Qi||Mt||k!==i.state)){if(En()){xs=i;return}lp(i)}}function lp(i){const e=i.state,t=Bt(e)==="daily",n=Math.max(t?Qt.daily.scores[e.dailyKey??""]??0:ti,e.score),s=t&&e.endReason==="limit"?"Day complete!":e.endReason==="dark"?"The night closed in":e.endReason==="limit"?"Out of pieces":"Your island is full",r=i.highlights.slice(0,3),a=t?[{label:"Classic game",onClick:()=>{fn(!1),ko()}},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Pd(e)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:aa}]:[{label:"Play Again",onClick:gr},...Fo()?[{label:"Undo last move",kind:"dark",id:"undoOverBtn",icon:"i-undo",onClick:yo}]:[],{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Pd(e)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:aa}];ki({title:s,art:`<img src="${ra(e.highestTier,320)}" alt="${Fi(yn[e.highestTier].name)}" draggable="false" />`,body:`
      ${i.newBest?`<div class="new-best">${t?"TODAY'S BEST":"NEW PERSONAL BEST"}</div>`:""}
      <p class="final-label">${t?`Daily Nook #${ur(e.dailyKey??is())}`:"Final Score"}</p>
      <div class="final-score">${wt(e.score)}</div>
      <div class="final-best"><svg class="crown" aria-hidden="true"><use href="#i-crown" /></svg><small>${t?"Today's best":"Best Score"}</small><b>${wt(n)}</b></div>
      ${r.length?`<ul class="highlights">${r.map(o=>`<li>${Fi(o)}</li>`).join("")}</ul>`:""}
      <div class="final-stats">
        ${t?"":`<span>${Bi(e)?"Firelight":"Classic"} <b>${Tn(e)}×${Tn(e)}</b></span>`}
        <span>Turns <b>${e.turn-1}</b></span>
        <span>Best chain <b>×${Math.max(1,e.bestChain)}</b></span>
        <span>Top piece <b>${Fi(yn[e.highestTier].name)}</b></span>
        ${(e.festivals??0)>0?`<span>Festivals <b>${e.festivals}</b></span>`:""}
        ${(e.rocksShattered??0)>0?`<span>Rocks <b>${e.rocksShattered}</b></span>`:""}
      </div>`,actions:a,describe:!0}),xn(`${s} ${t?"":"Final score "}${wt(e.score)}.${i.newBest?" New best!":""} ${r.join(". ")}`)}async function Pd(i){const n=`${Bt(i)==="daily"?`Little Nook · Daily #${ur(i.dailyKey??is())}`:`Little Nook · ${Bi(i)?"Firelight":"Classic"} ${Tn(i)}×${Tn(i)}`}: ${wt(i.score)} points · top piece ${yn[i.highestTier].name} · best chain ×${Math.max(1,i.bestChain)}`,r=document.getElementById("shareBtn")?.querySelector("span");try{if(typeof navigator.share=="function"){await navigator.share({title:"Little Nook",text:n,...Ka?{url:Ka}:{}});return}}catch(a){if(a?.name==="AbortError")return}try{await navigator.clipboard.writeText(Ka?`${n}
${Ka}`:n),r&&(r.textContent="Copied!"),xn("Result copied. Paste it anywhere.")}catch{r&&(r.textContent="Copy not allowed here")}}function kS(i){const e=i.canvas;e.tabIndex=Mt?-1:0,e.setAttribute("role","application"),e.setAttribute("aria-label","Puzzle board, 8 by 8 tiles. Use arrow keys to move and Enter to place.");let t=null;const n=new Set;let s=!1;const r=()=>{t=null,Xr=!1,es=null,Bn||i.setHover(null,null,[]),ji&&On()};let a=null;const o=()=>Math.PI/Math.max(320,e.clientWidth*.7);e.addEventListener("pointerdown",c=>{if(!(c.button!==0||Mt)&&!(performance.now()<No)&&!a){if(n.add(c.pointerId),n.size>1||s){s=!0,r();return}if(i.pick(c.clientX,c.clientY)===null&&!En()){n.delete(c.pointerId),a={id:c.pointerId,x0:c.clientX,spin0:i.getSpin(),lastX:c.clientX,lastT:performance.now(),v:0},e.setPointerCapture?.(c.pointerId),e.classList.add("spinning"),c.pointerType!=="mouse"&&c.preventDefault();return}it.unlock(),t={id:c.pointerId,type:c.pointerType},Xr=c.pointerType!=="mouse",e.setPointerCapture?.(c.pointerId),ts={x:c.clientX,y:c.clientY,type:c.pointerType},ci(i.pick(c.clientX,c.clientY)),c.pointerType!=="mouse"&&c.preventDefault()}}),e.addEventListener("pointermove",c=>{if(a&&a.id===c.pointerId){const d=performance.now(),h=Math.max(1,d-a.lastT)/1e3;a.v=.7*a.v+.3*(-(c.clientX-a.lastX)*o()/h),a.lastX=c.clientX,a.lastT=d,i.dragSpin(a.spin0-(c.clientX-a.x0)*o());return}if(ts={x:c.clientX,y:c.clientY,type:c.pointerType},t&&t.id!==c.pointerId||!t&&c.pointerType!=="mouse")return;const u=i.pick(c.clientX,c.clientY);u!==es&&ci(u)});const l=(c,u)=>{if(a&&a.id===c.pointerId){const g=performance.now()-a.lastT>120?0:a.v;a=null,e.classList.remove("spinning"),i.endSpin(u?g:0);return}const d=n.delete(c.pointerId);if(n.size===0){const g=s;if(s=!1,g&&d){r();return}}if(!t||t.id!==c.pointerId)return;const h=t.type;t=null,Xr=!1;const f=i.pick(c.clientX,c.clientY);u&&f!==null&&(Ht=null,i.setCursor(null),Oc(f)),h!=="mouse"&&(es=null,Bn||i.setHover(null,null,[]),(!u||f===null)&&On())};e.addEventListener("pointerup",c=>l(c,!0)),e.addEventListener("pointercancel",c=>l(c,!1)),e.addEventListener("lostpointercapture",c=>{(n.has(c.pointerId)||a?.id===c.pointerId)&&l(c,!1)}),e.addEventListener("pointerleave",c=>{c.pointerType==="mouse"&&!t&&(ci(null),!Mt&&ji&&On())}),e.addEventListener("contextmenu",c=>c.preventDefault()),se.stage.addEventListener("touchmove",c=>c.preventDefault(),{passive:!1}),se.stage.addEventListener("dblclick",c=>c.preventDefault()),document.addEventListener("gesturestart",c=>c.preventDefault()),e.addEventListener("focus",()=>{Ht===null&&!Mt&&Uc&&(Ht=Rd(),i.setCursor(Ht),ci(Ht))}),e.addEventListener("blur",()=>{Ht!==null&&(so=Ht),i.setCursor(null),Ht=null,ci(null)}),e.addEventListener("keydown",c=>{if(!(Mt||En()))if(c.key==="ArrowRight"||c.key==="ArrowLeft"||c.key==="ArrowUp"||c.key==="ArrowDown"){c.preventDefault();const{dx:u,dy:d}=i.arrowStep(c.key),h=Tn(k),f=Ht??Rd(),g=Math.min(h-1,Math.max(0,f%h+u)),_=Math.min(h-1,Math.max(0,Math.floor(f/h)+d));Ht=_*h+g,i.setCursor(Ht),ci(Ht);const m=k.board[Ht],p=m===At&&!k.over?tp(Ht):null;xn(`Row ${_+1}, column ${g+1}: ${m===At?"empty":nn(m)}.${p?` ${p.text.replace("→","makes")}.`:""} In hand: ${nn(k.next)}.`)}else(c.key==="Enter"||c.key===" ")&&Ht!==null&&(c.preventDefault(),Oc(Ht))})}function zS(){window.addEventListener("keydown",i=>{["Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Enter"," ","Escape"].includes(i.key)&&(Uc=!0)},!0),window.addEventListener("pointerdown",()=>Uc=!1,!0),window.addEventListener("keydown",i=>{if(i.metaKey||i.ctrlKey||i.altKey)return;if(En()){if(i.key==="Escape")fn();else if(i.key==="Tab"){const t=[...se.modal.querySelectorAll("button:not(.hidden)")].filter(zc),n=t.indexOf(document.activeElement);i.preventDefault(),t[(n+(i.shiftKey?-1:1)+t.length)%t.length]?.focus()}return}if(Mt){i.key==="Enter"&&(document.activeElement===document.body||document.activeElement===null)&&(i.preventDefault(),ko());return}const e=i.key.toLowerCase();i.key==="Escape"?sp():e==="s"?Bc():e==="z"||e==="u"||i.key==="Backspace"?yo():e==="q"?bo(-1):e==="e"?bo(1):e==="n"?op():e==="h"||e==="?"?Ho():e==="i"?Su():e==="j"?bu():e==="m"?GS():e==="v"&&cp(Ge?.getView()==="iso"?"cozy":"iso")})}function GS(){const i=it.enabled||it.music;it.enabled=!i,Ze.setSound(!i),Ze.setMusic(!i),it.setMusic(!i);const e=i?"Sound off (M to turn it back on).":"Sound on.";sn(e),xn(e)}function bo(i){!Ge||Mt||En()||(it.unlock(),it.swap(),bn.tap(),Ge.rotate(i===-1?1:-1),ci(null),xn(`Island turned ${i===-1?"left":"right"}.`))}function cp(i){Ge&&(Ge.setView(i),Ze.setView(i))}function HS(i){if(i.key==="littleNook.journal"){try{const n=i.newValue?JSON.parse(i.newValue):null;$d(n)&&Ze.adoptJournal(Qt=n)}catch{}Mt&&Ms();return}if(Bn)return;const e=Bt(k)==="daily";if(i.key!==(e?"littleNook.daily":Qa(Tn(k),Bi(k))))return;const t=e?Ze.loadDaily(ys):Ze.loadGame(ys,Tn(k),Bi(k));if(!t){!i.newValue&&VS(i.oldValue)&&!k.over&&(Cs(e?Zf(is()):da()),Mt?Ms():(aa(),xn("That round was finished in another tab.")));return}t.seed===k.seed&&t.turn<=k.turn||e&&t.dailyKey&&k.dailyKey&&t.dailyKey<k.dailyKey||(Cs(t),Mt?Ms():(sn("Updated with progress from another tab."),xn("Updated with progress from another tab.")))}function VS(i){try{const e=i?JSON.parse(i):null;return ys(e)&&e.seed===k.seed&&(e.dailyKey??"")===(k.dailyKey??"")}catch{return!1}}function WS(){try{Ge=new yS(se.stage)}catch(a){console.error(a),We("boot")?.remove(),se.webglError.classList.remove("hidden"),document.body.classList.remove("booting","at-home"),sn("3D graphics are unavailable in this browser.","danger");return}const i=Ge;Gc(),vu.addEventListener?.("change",Gc),i.onContextRestored=()=>{ao.clear(),mr()};const e=Ze.getView();i.setView(e==="cozy"?"cozy":"iso"),kS(i),zS(),se.keepBtn.addEventListener("click",Bc),se.nextCard.addEventListener("click",()=>{!Mt&&!En()&&Su()}),se.menuBtn.addEventListener("click",sp),se.spinLeft.addEventListener("click",()=>bo(-1)),se.undoBtn.addEventListener("click",yo),se.modeFire.addEventListener("click",()=>Ad(!0)),se.modeClassic.addEventListener("click",()=>Ad(!1)),se.spinRight.addEventListener("click",()=>bo(1)),se.sizePrev.addEventListener("click",()=>Cd(-1)),se.sizeNext.addEventListener("click",()=>Cd(1)),se.playBtn.addEventListener("click",ko),se.homeNewBtn.addEventListener("click",OS),se.dailyBtn.addEventListener("click",()=>So()),se.homeHelpBtn.addEventListener("click",Ho),se.homeJournalBtn.addEventListener("click",bu),se.homeSettingsBtn.addEventListener("click",ap),se.coachSkip.addEventListener("click",()=>{const a=document.activeElement===se.coachSkip;zo(),a&&Bo(),sn("Tips off. You can read the rules any time in the menu."),xn("Tips off.")}),se.hud.addEventListener("click",a=>{a.detail>0&&performance.now()<No&&(a.stopPropagation(),a.preventDefault())},!0),se.closeModal.addEventListener("click",()=>fn());let t=!1;se.modal.addEventListener("pointerdown",a=>t=a.target===se.modal),se.modal.addEventListener("click",a=>{t&&a.target===se.modal&&fn(),t=!1}),document.addEventListener("visibilitychange",()=>{it.setPaused(document.hidden),document.hidden||(i.markDirty(),Mt&&Ms())}),window.addEventListener("storage",HS),document.addEventListener("touchend",()=>it.unlock(),{capture:!0,passive:!0});const n=()=>Td();window.addEventListener("resize",n),new ResizeObserver(n).observe(se.dock),Sp().then(n),mr(),Td(),On(),aa();const s=()=>[0,1,2,3,4,5].forEach(a=>ra(a)),r=window.requestIdleCallback;r?r(s,{timeout:2e3}):setTimeout(s,800),window.__littleNookBooted=!0,document.body.classList.remove("booting"),We("boot")?.remove(),window.__littleNook={state:()=>k,busy:()=>Bn,atHome:()=>Mt,cursor:()=>Ht,journal:()=>Qt,place:a=>Oc(a),legal:()=>zi(k),undo:()=>yo(),canUndo:()=>Fo(),swap:Bc,startDaily:()=>So(),tilePixelSize:()=>i.tilePixelSize(),thumb:(a,o=160)=>i.thumbnail(a,o),cellToScreen:a=>i.cellToScreen(a,0),setView:a=>i.setView(a),spinQuarter:()=>i.getSpinQuarter(),boardSize:()=>i.getBoardSize()}}WS();if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)){const i=!!navigator.serviceWorker.controller;let e=null,t=Date.now(),n=!1;window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(r=>e=r).catch(()=>{})});const s=()=>{e&&Date.now()-t>3600*1e3&&(t=Date.now(),e.update().catch(()=>{}))};document.addEventListener("visibilitychange",()=>{document.hidden||s()}),window.addEventListener("pageshow",r=>{r.persisted&&s()}),navigator.serviceWorker.addEventListener("controllerchange",()=>{!i||n||(Qf=!0,Mt||k.over?(n=!0,location.reload()):(sn("An update is ready. It loads the next time you open the home screen."),xn("An update is ready.")))})}
