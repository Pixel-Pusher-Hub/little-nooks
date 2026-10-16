(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Vp=""+new URL("outfit-latin-300-normal-CRYTwY6m.woff2",import.meta.url).href,Wp=""+new URL("outfit-latin-400-normal-BGsTXAXT.woff2",import.meta.url).href,Xp=""+new URL("outfit-latin-500-normal-DKnIMDSk.woff2",import.meta.url).href,$p=""+new URL("outfit-latin-600-normal-B7SfZ07L.woff2",import.meta.url).href,Yp=[["Outfit",Vp,"300"],["Outfit",Wp,"400"],["Outfit",Xp,"500"],["Outfit",$p,"600"]];function qp(){return typeof FontFace>"u"||!document.fonts?Promise.resolve():Promise.all(Yp.map(([n,e,t])=>{const i=new FontFace(n,`url(${e}) format('woff2')`,{weight:t,display:"swap"});return document.fonts.add(i),i.load().catch(()=>{})}))}const En=8,xs=En*En,Ms=[5,6,7,8,9,10],Jd=n=>Ms.includes(n),Kp={5:"Tiny",6:"Small",7:"Cozy",8:"Medium",9:"Big",10:"Grand"},yt=-1,Bt=99,Zt=98,gn=97,Cn=96,xi={[gn]:{name:"Campfire",life:10,radius:1},[Cn]:{name:"Lamppost",life:15,radius:2}},qn=n=>n===gn||n===Cn,Jp=["Bush","Tree","Small House","Cottage","House","Apartments","Office Tower","Skyscraper","Glass Spire","Sky Tower","Crown Tower","Neon Tower","Garden Tower","Helix Tower","Twin Spires","Lantern Tower","Aurora Tower","Cloud Piercer","Prism Tower","Starlight Tower","Golden Spire","Sky Garden","Beacon Tower","Moon Tower","Crystal Spire","Eclipse Tower","Nova Tower","Halo Tower","Comet Spire","Galaxy Tower","Nebula Spire","Orbit Tower","Zenith Tower","Celestial Spire","Stellar Crown","Quasar Tower","Infinity Tower","Cosmos Spire","Star Citadel","Heaven’s Gate"],Ar=[0,20,90,350,1200,4e3,13e3,42e3],un=Jp.map((n,e)=>({name:n,hint:`Tier ${e+1}`,mergePoints:e<Ar.length?Ar[e]:Math.round(Ar[Ar.length-1]*Math.pow(1.45,e-Ar.length+1))})),nu=7,sh=[0,0,1,1,1,2,2,3],Zp=n=>n>=9?2:1,Gt=un.length-1,Qp=Gt-4,Zd={name:"Rock",hint:"Obstacle"};function Qd(n){return n===Zt?1:qn(n)?xi[n].radius:n<0||n>=un.length?0:sh[Math.min(n,sh.length-1)]}function jd(n,e=Dt){return Math.max(0,Math.min(Qp,n-e.spawnBaseOffset))}const jp=["reroll","bulldoze","upgrade"],_o={reroll:{name:"Reroll",hint:"Swap the piece in hand for a new one"},bulldoze:{name:"Bulldoze",hint:"Clear any tile (not the campfire)"},upgrade:{name:"Upgrade",hint:"Raise a building one tier"}},Dt={minGroup:3,groupSizeBonus:.5,comboMultipliers:[1,2,3,4,5],festivalPoints:15e4,rockMinGroup:0,rockCrumblePoints:40,rockBreakTier:3,placePoints:1,spawnPhases:[{fromTurn:1,tiers:[75,25],rock:0},{fromTurn:11,tiers:[62,30,8],rock:0},{fromTurn:31,tiers:[55,32,11,2],rock:0},{fromTurn:61,tiers:[50,32,14,4],rock:0}],assistFillRatio:.7,assistChance:.35,crowdedRatio:.78,spawnBaseOffset:3,startPieces:90,milestoneBase:16,milestonePerTier:0,emberChance:.03,lampChance:.012,lightItemsFrom:8,coinsPerMerge:2,coinsPerTier:1,festivalCoins:80,piecePrice:6,piecePriceGrowth:1.75,priceRise:1.5,powerPrices:{reroll:6,bulldoze:14,upgrade:10},lightPrices:{[gn]:18,[Cn]:40}};function em(n,e,t=Dt){return Math.max(1,Math.round((t.milestoneBase+t.milestonePerTier*n)*e/xs))}function tm(n,e=Dt){return Math.max(20,Math.round(e.startPieces*n/xs))}function Fo(n,e=Dt){return n===Zt||qn(n)?1/0:n===Bt?e.rockMinGroup>0?e.rockMinGroup:1/0:e.minGroup}function zt(n){return n===Bt?Zd.name:n===Zt?"Campfire":qn(n)?xi[n].name:un[n]?.name??"Empty"}function ef(n){return n===Bt?Zd.hint:qn(n)?`Lasts ${xi[n].life} moves`:un[n]?.hint??""}function va(n){return Math.round(Math.sqrt(n.length))}function iu(n=En){return new Array(n*n).fill(yt)}function mr(n,e=En){return{x:n%e,y:Math.floor(n/e)}}function nm(n,e,t=En){return e*t+n}function su(n,e=En){const{x:t,y:i}=mr(n,e),s=[];return t>0&&s.push(n-1),t<e-1&&s.push(n+1),i>0&&s.push(n-e),i<e-1&&s.push(n+e),s}function tf(n,e=En){const{x:t,y:i}=mr(n,e);return t===0||i===0||t===e-1||i===e-1}function _a(n,e,t=n[e]){const i=va(n),s=new Set([e]),r=[e];for(;r.length;){const a=r.pop();for(const o of su(a,i))!s.has(o)&&n[o]===t&&(s.add(o),r.push(o))}return[...s].sort((a,o)=>a-o)}function br(n){const e=va(n),t=new Array(n.length).fill(!1);return n.forEach((i,s)=>{const r=i===Zt?Zp(e):Qd(i);if(r<=0)return;const{x:a,y:o}=mr(s,e);for(let l=Math.max(0,o-r);l<=Math.min(e-1,o+r);l++)for(let c=Math.max(0,a-r);c<=Math.min(e-1,a+r);c++)t[l*e+c]=!0}),t}function xa(n){const e=[];return n.forEach((t,i)=>t===yt&&e.push(i)),e}function im(n){let e=0;for(const t of n)t!==yt&&e++;return e}function sm(n,e=En){const t=iu(e);return n.forEach((i,s)=>[...i.replace(/\s+/g,"")].forEach((r,a)=>{r!=="."&&(t[nm(a,s,e)]=r==="R"?99:Number(r)-1)})),t}const rm=/^(\d{4})-(\d{2})-(\d{2})$/,nf=864e5,lr=(n,e=2)=>String(n).padStart(e,"0");function am(n){return`${lr(n.getFullYear(),4)}-${lr(n.getMonth()+1)}-${lr(n.getDate())}`}function xo(n){const e=rm.exec(n);if(!e)return NaN;const[t,i,s]=[Number(e[1]),Number(e[2]),Number(e[3])],r=Date.UTC(t,i-1,s),a=new Date(r);return a.getUTCFullYear()===t&&a.getUTCMonth()===i-1&&a.getUTCDate()===s?r:NaN}function om(n){const e=new Date(n);return`${lr(e.getUTCFullYear(),4)}-${lr(e.getUTCMonth()+1)}-${lr(e.getUTCDate())}`}function ys(n){return typeof n=="string"&&Number.isFinite(xo(n))}function lm(n,e){return Math.round((xo(e)-xo(n))/nf)}function sf(n){const e=xo(n);return Number.isFinite(e)?om(e-nf):""}function Mo(n){const e=n+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function rf(){return typeof crypto<"u"&&"getRandomValues"in crypto?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*2**32)>>>0}function cm(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function ru(n,e=xs){return e===xs?n:Math.max(1,Math.round(1+(n-1)*(xs/e)))}function rh(n,e=xs){let t=1;for(;ru(t,e)<n;)t++;return t}function af(n,e=Dt){let t=e.spawnPhases[0];for(const i of e.spawnPhases)n>=i.fromTurn&&(t=i);return t}function tc(n,e=Dt){const t=af(n,e),i=t.tiers.map((r,a)=>[a,r]);t.rock>0&&i.push([Bt,t.rock]);const s=i.reduce((r,[,a])=>r+a,0);return i.filter(([,r])=>r>0).map(([r,a])=>[r,a/s])}function ah(n,e,t,i=0){const[s,r]=Mo(e),a=tc(n,t),o=c=>c===Bt?c:Math.min(Gt,c+i);let l=0;for(const[c,u]of a)if(l+=u,s<l)return[o(c),r];return[o(a[a.length-1][0]),r]}function of(n){let e=-1;for(const t of n)t!==Bt&&t>=0&&t<=Gt&&(e=Math.max(e,t));return e}function um(n,e,t){for(const i of xa(n)){const s=[...n];s[i]=e;const r=Fo(e,t);if(_a(s,i,e).length>=r)return!0}return!1}function zi(n,e,t,i=Dt,s=!1){if(e=ru(e,n.length),s&&e>=i.lightItemsFrom){const[c,u]=Mo(t);if(t=u,c<i.lampChance)return[Cn,t];if(c<i.lampChance+i.emberChance)return[gn,t]}const r=jd(of(n),i);let[a,o]=ah(e,t,i,r);if(im(n)/n.length>=i.assistFillRatio&&xa(n).length>0&&!um(n,a,i)){const[c,u]=Mo(o);o=u,c<i.assistChance&&([a,o]=ah(e,o,i,r))}return[a,o]}function oh(n){const e=n.map(([s,r])=>({piece:s,exact:r*100,percent:Math.floor(r*100)}));let t=100-e.reduce((s,r)=>s+r.percent,0);const i=[...e].sort((s,r)=>r.exact-r.percent-(s.exact-s.percent));for(const s of i){if(t<=0)break;s.percent++,t--}return e.map(({piece:s,percent:r})=>({piece:s,percent:r}))}function hm(n,e=Dt,t=xs,i=0){const s=ru(n,t),r=u=>u.map(f=>f.piece===Bt?f:{...f,piece:Math.min(Gt,f.piece+i)}),a=af(s,e),o=e.spawnPhases[e.spawnPhases.indexOf(a)+1],l=rh(a.fromTurn,t),c=o?rh(o.fromTurn,t):null;return{from:l,to:c!==null?c-1:null,rows:r(oh(tc(s,e))),next:o&&c!==null?{at:c,rows:r(oh(tc(o.fromTurn,e)))}:null}}function au(n){const e=Math.floor((n-1)/2);return e*n+e}function ou(n,e=Dt,t=En,i=!1,s=!1){const r=iu(t);i&&(r[au(t)]=Zt);const a={board:r,score:0,turn:1,next:0,stash:yt,rng:n>>>0,over:!1,lastChain:0,bestChain:0,highestTier:0,merges:0,seed:n>>>0,festivals:0,rocksShattered:0,...i?{glow:!0}:{},...s?{budget:!0,pieceLimit:tm(t*t,e)}:{}},[o,l]=zi(a.board,a.turn,a.rng,e,i),[c,u]=zi(a.board,a.turn+1,l,e,i);return{...a,next:o,after:c,rng:u,coins:0}}function wi(n){const e=xa(n.board);if(!n.glow||n.next!==void 0&&qn(n.next))return e;const t=br(n.board);return e.filter(i=>t[i])}function lu(n,e){return!Number.isInteger(e)||e<0||e>=n.board.length||n.board[e]!==yt?!1:!n.glow||n.next!==void 0&&qn(n.next)||br(n.board)[e]}function lf(n,e=Dt){const t=e.comboMultipliers;return t[Math.min(n-1,t.length-1)]}function dm(n,e,t,i=Dt){const s=un[n].mergePoints,r=1+i.groupSizeBonus*Math.max(0,e-i.minGroup);return Math.round(s*r*lf(t,i))}function cf(n,e,t=Dt){const i=[];let s=0;for(;;){const r=n[e];if(r===yt||r===Zt||qn(r))break;const a=_a(n,e,r),o=Fo(r,t);if(a.length<o)break;if(r===Bt){for(const u of a)n[u]=yt;i.push({kind:"crumble",cells:a,target:e,points:t.rockCrumblePoints*a.length});break}s++;const l=lf(s,t);if(r===Gt){for(const h of a)n[h]=yt;const u=1+t.groupSizeBonus*(a.length-t.minGroup),f=Math.round(t.festivalPoints*u*l);i.push({kind:"festival",step:s,cells:a,target:e,points:f,multiplier:l});break}for(const u of a)n[u]=yt;n[e]=r+1;const c=r+1>=t.rockBreakTier?fm(n,a):[];if(i.push({kind:"merge",step:s,fromTier:r,toTier:r+1,cells:a,target:e,points:dm(r+1,a.length,s,t),multiplier:l}),c.length){for(const u of c)n[u]=yt;i.push({kind:"crumble",cells:c,target:e,points:t.rockCrumblePoints*c.length})}}return i}function fm(n,e){const t=new Set,i=va(n);for(const s of e)for(const r of su(s,i))n[r]===Bt&&t.add(r);return[...t].sort((s,r)=>s-r)}function Oo(n,e,t=Dt){if(n.over||!lu(n,e))return{state:n,events:[],points:0,accepted:!1};const i=[...n.board],s=n.next;i[e]=s;const r=[{kind:"place",index:e,piece:s,points:t.placePoints}],a=cf(i,e,t);r.push(...a);const o=hf(n,r,t,s>=0&&s<=Gt?s:-1),l=(n.burn??[]).map(([w,E])=>[w,E-1]),c=l.filter(([,w])=>w<=0).map(([w])=>w);for(const w of c)i[w]=yt;c.length&&r.push({kind:"expire",cells:c,points:0});const u=[...l.filter(([,w])=>w>0),...qn(s)?[[e,xi[s].life]]:[]],f=n.turn+1;let h=n.rng,d;n.after!==void 0?d=n.after:[d,h]=zi(i,f,h,t,!!n.glow);const g=[...n.queue??[]];let x;g.length?x=g.shift():[x,h]=zi(i,f+1,h,t,!!n.glow);const{pieceLimit:m}=o,p=xa(i).length===0,S=!p&&!!n.glow&&wi({board:i,glow:!0,next:d}).length===0&&!qn(n.stash),A=!!m&&f>m,M=p||S||A;return{accepted:!0,events:r,points:o.points,state:{...n,...o.fields,board:i,turn:f,next:d,after:x,rng:h,over:M,...g.length||n.queue?{queue:g}:{},...n.glow?{burn:u}:{},...M?{endReason:p?"full":S?"dark":"limit"}:{}}}}function uf(n,e=Dt){let t=0;for(const i of n)i.kind==="merge"?t+=(e.coinsPerMerge+e.coinsPerTier*i.toTier)*i.step:i.kind==="festival"&&(t+=e.festivalCoins*i.step);return t}function hf(n,e,t,i=-1){const s=e.reduce((u,f)=>u+f.points,0),r=e.filter(u=>u.kind==="merge"||u.kind==="festival").length;let a=Math.max(n.highestTier,i),o=n.festivals??0,l=n.rocksShattered??0;for(const u of e)u.kind==="merge"&&(a=Math.max(a,u.toTier)),u.kind==="upgrade"&&(a=Math.max(a,u.toTier)),u.kind==="festival"&&(a=Gt,o++),u.kind==="crumble"&&(l+=u.cells.length);let c=n.pieceLimit;if(n.budget&&c&&a>n.highestTier)for(let u=n.highestTier+1;u<=a;u++)c+=em(u,n.board.length,t);return{points:s,pieceLimit:c,fields:{score:n.score+s,coins:(n.coins??0)+uf(e,t),lastChain:r,bestChain:Math.max(n.bestChain,r),highestTier:a,merges:n.merges+r,festivals:o,rocksShattered:l,...c!==n.pieceLimit?{pieceLimit:c}:{}}}}function pm(n,e=Dt){if(n.over)return n;if(n.stash===yt){if(n.after===void 0){const[r,a]=zi(n.board,n.turn,n.rng,e,!!n.glow);return{...n,stash:n.next,next:r,rng:a}}const t=[...n.queue??[]];let i=n.rng,s;return t.length?s=t.shift():[s,i]=zi(n.board,n.turn+1,i,e,!!n.glow),{...n,stash:n.next,next:n.after,after:s,rng:i,...n.queue?{queue:t}:{}}}return{...n,stash:n.next,next:n.stash}}const Bo=(n,e)=>n.bought?.[e]??0;function df(n,e=Dt){return Math.round(e.piecePrice*Math.pow(e.piecePriceGrowth,n))}function ff(n,e,t=Dt){const i=Math.max(t.powerPrices.upgrade,Math.round(df(e+1,t)*.6));return Math.round(i*Math.pow(t.priceRise,Bo(n,"upgrade")))}function cu(n,e=Dt){const t=r=>Math.pow(e.priceRise,Bo(n,r)),i=[],s=Math.min(Gt,Math.max(0,n.highestTier));for(let r=0;r<=s;r++){const a=`p${r}`;i.push({key:a,kind:"piece",piece:r,price:Math.round(df(r,e)*t(a))})}if(n.glow)for(const r of[gn,Cn]){const a=`l${r}`;i.push({key:a,kind:"light",piece:r,price:Math.round((e.lightPrices[r]??30)*t(a))})}for(const r of jp)i.push({key:r,kind:"power",power:r,price:r==="upgrade"?ff(n,0,e):Math.round(e.powerPrices[r]*t(r))});return i}const ro=(n,e,t)=>({coins:(n.coins??0)-t,bought:{...n.bought??{},[e]:Bo(n,e)+1}});function mm(n,e,t=Dt){const i=cu(n,t).find(r=>r.key===e&&r.kind!=="power");if(n.over||!i||i.piece===void 0||(n.coins??0)<i.price)return{state:n,accepted:!1};const s=n.after!==void 0?[n.after,...n.queue??[]]:[...n.queue??[]];return{accepted:!0,state:{...n,...ro(n,e,i.price),next:i.piece,after:n.next,queue:s,...n.budget&&n.pieceLimit?{pieceLimit:n.pieceLimit+1}:{}}}}function ko(n,e){if(e==="reroll")return[];const t=[];return n.board.forEach((i,s)=>{e==="bulldoze"&&i!==yt&&i!==Zt&&t.push(s),e==="upgrade"&&i>=0&&i<Gt&&t.push(s)}),t}function zo(n,e,t=-1,i=Dt){return e==="upgrade"?ff(n,t>=0?Math.max(0,n.board[t]):0,i):Math.round(i.powerPrices[e]*Math.pow(i.priceRise,Bo(n,e)))}function pf(n,e,t=-1,i=Dt){const s={state:n,events:[],points:0,accepted:!1};if(n.over)return s;const r=zo(n,e,t,i);if((n.coins??0)<r)return s;if(e==="reroll"){let f=n.rng,h=n.next;for(let d=0;d<6&&h===n.next;d++)[h,f]=zi(n.board,n.turn,f,i,!!n.glow);return{accepted:!0,events:[],points:0,state:{...n,...ro(n,e,r),next:h,rng:f}}}if(!ko(n,e).includes(t))return s;const a=[...n.board];if(e==="bulldoze"){a[t]=yt;const f=n.burn?.filter(([d])=>d!==t);return{accepted:!0,events:[{kind:"remove",cells:[t],points:0}],points:0,state:{...n,...ro(n,e,r),board:a,...f?{burn:f}:{}}}}const o=a[t]+1;a[t]=o;const l=[{kind:"upgrade",index:t,toTier:o,points:0},...cf(a,t,i)],c={...n,...ro(n,e,r)},u=hf(c,l,i);return{accepted:!0,events:l,points:u.points,state:{...c,...u.fields,board:a}}}function uu(n,e,t=Dt,i=xa(n)){const s=[];for(const r of i){const a=[...n];a[r]=e;const o=Fo(e,t);_a(a,r,e).length>=o&&s.push(r)}return s}const Nn=n=>typeof n=="number"&&Number.isInteger(n),ao=n=>Nn(n)&&(n===yt||n===Bt||n===Zt||n===gn||n===Cn||n>=0&&n<=Gt),lh=n=>ao(n)&&n!==yt&&n!==Zt,Ta=n=>Nn(n)&&n>=0,Pn=(n,e)=>n===void 0||e(n);function gm(n,e){if(!Array.isArray(n))return!1;const t=new Set;return n.every(i=>{if(!Array.isArray(i)||i.length!==2||!Nn(i[0])||!Nn(i[1])||t.has(i[0]))return!1;t.add(i[0]);const s=e[i[0]];return qn(s)&&i[1]>=1&&i[1]<=xi[s].life})}function ws(n){if(!n||typeof n!="object")return!1;const e=n;return Array.isArray(e.board)&&Jd(Math.sqrt(e.board.length))&&e.board.every(ao)&&Nn(e.score)&&e.score>=0&&Nn(e.turn)&&e.turn>=1&&ao(e.next)&&e.next!==yt&&e.next!==Zt&&e.stash!==Zt&&ao(e.stash)&&Nn(e.rng)&&typeof e.over=="boolean"&&Nn(e.lastChain)&&Nn(e.bestChain)&&Nn(e.highestTier)&&Nn(e.merges)&&Nn(e.seed)&&Pn(e.festivals,Ta)&&Pn(e.rocksShattered,Ta)&&Pn(e.mode,i=>i==="classic"||i==="daily")&&Pn(e.dailyKey,ys)&&Pn(e.pieceLimit,i=>Nn(i)&&i>0)&&Pn(e.endReason,i=>i==="full"||i==="limit"||i==="dark")&&Pn(e.glow,i=>typeof i=="boolean")&&Pn(e.budget,i=>typeof i=="boolean")&&Pn(e.burn,i=>gm(i,e.board))&&Pn(e.after,lh)&&Pn(e.queue,i=>Array.isArray(i)&&i.length<=64&&i.every(lh))&&Pn(e.coins,Ta)&&Pn(e.bought,i=>!!i&&typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(Ta))&&(e.mode!=="daily"||e.dailyKey!==void 0)?(Object.isExtensible(e)&&(e.festivals??(e.festivals=0),e.rocksShattered??(e.rocksShattered=0)),!0):!1}const ia=120,vm="2026-10-13",_m=4,xm=1540483477,Mm=200;function gr(n){return lm(vm,n)+1}function ym(n){return cm("little-nook/daily/"+n)}function Sm(n,e,t){const i=[...t];let s=(n^xm)>>>0;const r=()=>{const[o,l]=Mo(s);return s=l,o},a=(o,l)=>{for(let c=0;c<Mm;c++){const u=o(),f=Math.floor(r()*i.length);if(!(i[f]!==yt||!l(f))){if(i[f]=u,_a(i,f,u).length<Fo(u,e))return;i[f]=yt}}};for(let o=0;o<_m;o++)a(()=>r()<.6?0:1,()=>!0);return i}function mf(n,e=Dt){const t=ym(n),i=ou(t,e,8,!0),s=Sm(t,e,i.board),[r,a]=zi(s,i.turn,t,e,!0),[o,l]=zi(s,i.turn+1,a,e,!0);return{...i,board:s,next:r,after:o,rng:l,mode:"daily",dailyKey:n,pieceLimit:ia}}const gf=20,vf=60;function bm(){return{v:1,rounds:0,pieces:0,built:new Array(Gt+1).fill(0),festivals:0,rocksShattered:0,bestClassic:0,bestDaily:0,bestChain:0,biggestMove:0,mostFestivals:0,longestRound:0,recent:[],daily:{lastKey:null,streak:0,bestStreak:0,scores:{}}}}const di=n=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=0,oo=n=>!!n&&typeof n=="object"&&!Array.isArray(n),wm=n=>n==="classic"||n==="daily";function Em(n){return oo(n)&&ys(n.date)&&wm(n.mode)&&di(n.score)&&di(n.turns)&&di(n.top)&&n.top<=Gt&&di(n.chain)&&di(n.festivals)}function _f(n){if(!oo(n)||n.v!==1||!["rounds","pieces","festivals","rocksShattered","bestClassic","bestDaily","bestChain","biggestMove","mostFestivals","longestRound"].every(r=>di(n[r])))return!1;const t=n.built;if(!Array.isArray(t)||t.length<5||t.length>Gt+1||!t.every(di)||t[0]!==0||!Array.isArray(n.recent)||n.recent.length>gf||!n.recent.every(Em))return!1;const i=n.daily;if(!oo(i)||!(i.lastKey===null||ys(i.lastKey))||!di(i.streak)||!di(i.bestStreak)||!oo(i.scores))return!1;const s=Object.entries(i.scores);if(!(s.length<=vf&&s.every(([r,a])=>ys(r)&&di(a))))return!1;if(t.length<Gt+1&&Object.isExtensible(t))for(;t.length<Gt+1;)t.push(0);return!0}function xf(n,e,t){const i=[...n.built];let{pieces:s,festivals:r,rocksShattered:a}=n;for(const l of e)l.kind==="place"?s++:l.kind==="merge"?i[l.toTier]=(i[l.toTier]??0)+1:l.kind==="festival"?r++:l.kind==="crumble"&&(a+=l.cells.length);const o=Number.isFinite(t)?Math.max(0,Math.floor(t)):0;return{...n,built:i,pieces:s,festivals:r,rocksShattered:a,biggestMove:Math.max(n.biggestMove,o)}}const Tm=n=>n.toLocaleString("en-US"),Cr=n=>typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.floor(n)):0;function Mf(n,e){const t=n.daily.lastKey;return t!==null&&(t===e||t===sf(e))?n.daily.streak:0}const Am=(n,e,t=e+"s")=>`${n} ${n===1?e:t}`,ch=["Best","2nd best","3rd best"];function Cm(n){const e=Object.keys(n).sort().reverse().slice(0,vf),t={};for(const i of e.reverse())t[i]=n[i];return t}function Rm(n,e,t){const i=e.mode??"classic",s=Cr(e.score),r=Cr(e.turn-1),a=Cr(e.bestChain),o=Cr(e.festivals),l=Math.min(Gt,Cr(e.highestTier)),c=t.slice(0,10),h=[{date:ys(c)?c:ys(e.dailyKey)?e.dailyKey:"1970-01-01",mode:i,score:s,turns:r,top:l,chain:a,festivals:o},...n.recent].slice(0,gf);let d=n.daily;const g=i==="daily"&&ys(e.dailyKey)?e.dailyKey:null;if(g){const _=Cm({...d.scores,[g]:Math.max(d.scores[g]??0,s)}),{lastKey:T}=d;if(T!==null&&g<T)d={...d,scores:_};else{const P=T===g?d.streak:T===sf(g)?d.streak+1:1;d={lastKey:g,streak:P,bestStreak:Math.max(d.bestStreak,P),scores:_}}}const x={...n,built:[...n.built],rounds:n.rounds+1,longestRound:Math.max(n.longestRound,r),bestChain:Math.max(n.bestChain,a),mostFestivals:Math.max(n.mostFestivals,o),bestClassic:i==="classic"?Math.max(n.bestClassic,s):n.bestClassic,bestDaily:i==="daily"?Math.max(n.bestDaily,s):n.bestDaily,recent:h,daily:{...d,scores:{...d.scores}}},m=[],p=n.rounds>0,S=Object.keys(n.daily.scores).length>0||n.bestDaily>0,A=i==="daily"&&S&&s>n.bestDaily;A&&m.push(`Best daily yet: ${Tm(s)}`),p&&a>=2&&a>n.bestChain&&m.push(`Best chain ever: ×${a}`),p&&o>n.mostFestivals&&m.push(`New record: ${Am(o,"festival")} in a round`),p&&r>n.longestRound&&m.push(`New record: longest round (${r} turns)`),g&&d.streak>=2&&d.streak>n.daily.streak&&m.push(`Daily streak: ${d.streak} days`);const M=h.filter(_=>_.mode===i),w=M.slice(1),E=1+w.filter(_=>_.score>s).length,R=w.some(_=>_.score<s);if(M.length>=3&&E<=ch.length&&R&&!A){const _=i==="daily"?"dailies":M.length<h.length?"classic rounds":"rounds";m.push(`${ch[E-1]} of your last ${M.length} ${_}`)}return{journal:x,highlights:m}}function Pm(n,e,t=Dt){const i=Oo(n,e,t),s=i.state.board;let r=i.points*2+wi(i.state).length*6;const a=s[e];if(a!==yt){_a(s,e,a).length===2&&(r+=18+a*6);const l=va(s);for(const c of su(e,l))s[c]!==yt&&s[c]!==a&&(r-=3);a===Bt&&tf(e,l)&&(r+=10)}return r}const Lm="littleNook.best",Im="littleNookBest",uh="littleNook.sound",hh="littleNook.seenHelp",Dm="littleNook.game",dh="littleNook.view",Nm="littleNook.roundStartBest",fh="littleNook.music",ph="littleNook.motion",mh="littleNook.journal",ol="littleNook.daily",gh="littleNook.haptics",vh="littleNook.coachDone",_h="littleNook.size";function vr(n,e=8){return e===8?n:`${n}.${e}`}const hu="littleNook.fire",lo=(n=8,e=!1)=>vr(e?`${hu}.game`:Dm,n),xh=(n,e)=>vr(e?`${hu}.best`:Lm,n),Mh=(n,e)=>vr(e?`${hu}.roundStartBest`:Nm,n),yh="littleNook.rules";function Um(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}class Fm{constructor(e=Um()){this.store=e,this.memoBest=new Map,this.memoJournal=null}get(e){try{return this.store?.getItem(e)??null}catch{return null}}set(e,t){try{this.store?.setItem(e,t)}catch{}}getBest(e=8,t=!1){const i=this.get(xh(e,t))??(e===8&&!t?this.get(Im):null)??0,s=Number(i),r=Number.isFinite(s)&&s>0?Math.floor(s):0,a=`${t?"f":"c"}${e}`,o=Math.max(this.memoBest.get(a)??0,r);return this.memoBest.set(a,o),o}submitScore(e,t=8,i=!1){const s=Math.floor(e);return s>this.getBest(t,i)?(this.memoBest.set(`${i?"f":"c"}${t}`,s),this.set(xh(t,i),String(s)),!0):!1}getFire(){return this.get(yh)!=="classic"}setFire(e){this.set(yh,e?"fire":"classic")}getSize(e){const t=Number(this.get(_h));return e(t)?t:8}setSize(e){this.set(_h,String(e))}getSound(){return this.get(uh)!=="off"}setSound(e){this.set(uh,e?"on":"off")}hasSeenHelp(){return this.get(hh)==="1"}markHelpSeen(){this.set(hh,"1")}getRoundStartBest(e=8,t=!1){const i=this.get(Mh(e,t)),s=Number(i);return i!==null&&i!==""&&Number.isFinite(s)&&s>=0?s:null}setRoundStartBest(e,t=8,i=!1){this.set(Mh(t,i),String(e))}getMusic(){return this.get(fh)!=="off"}setMusic(e){this.set(fh,e?"on":"off")}getMotion(){const e=this.get(ph);return e==="on"||e==="off"?e:"system"}setMotion(e){this.set(ph,e)}getView(){return this.get(dh)}setView(e){this.set(dh,e)}saveGame(e,t=8,i=!1){this.set(lo(t,i),JSON.stringify(e))}clearGame(e=8,t=!1){this.set(lo(e,t),"")}loadGame(e,t=8,i=!1){return this.load(lo(t,i),e)}saveDaily(e){this.set(ol,JSON.stringify(e))}clearDaily(){this.set(ol,"")}loadDaily(e){return this.load(ol,e)}getJournal(){return this.memoJournal??this.load(mh,_f)??bm()}saveJournal(e){this.memoJournal=e,this.set(mh,JSON.stringify(e))}adoptJournal(e){this.memoJournal=e}getHaptics(){return this.get(gh)!=="off"}setHaptics(e){this.set(gh,e?"on":"off")}getCoachDone(){return this.get(vh)==="1"}setCoachDone(){this.set(vh,"1")}load(e,t){const i=this.get(e);if(!i)return null;try{const s=JSON.parse(i);return t(s)?s:null}catch{return null}}}const du="186",Om=0,Sh=1,Bm=2,Wr=1,km=2,Gr=3,Es=0,Rn=1,fi=2,Oi=0,Xr=1,Zi=2,bh=3,wh=4,zm=5,sr=100,Gm=101,Hm=102,Vm=103,Wm=104,Xm=200,$m=201,Ym=202,qm=203,yf=204,Sf=205,Km=206,Jm=207,Zm=208,Qm=209,jm=210,e0=211,t0=212,n0=213,i0=214,nc=0,ic=1,sc=2,sa=3,rc=4,ac=5,oc=6,lc=7,bf=0,s0=1,r0=2,vi=0,wf=1,Ef=2,Tf=3,Af=4,Cf=5,Rf=6,fu=7,Pf=300,Ts=301,_r=302,ll=303,cl=304,Go=306,cc=1e3,Ui=1001,uc=1002,ln=1003,a0=1004,Aa=1005,vn=1006,ul=1007,gs=1008,Un=1009,Lf=1010,If=1011,ra=1012,pu=1013,Mi=1014,ti=1015,yi=1016,mu=1017,gu=1018,aa=1020,Df=35902,Nf=35899,Uf=1021,Ff=1022,ni=1023,Gi=1026,vs=1027,vu=1028,_u=1029,As=1030,xu=1031,Mu=1033,co=33776,uo=33777,ho=33778,fo=33779,hc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,vc=37496,_c=37488,xc=37489,yo=37490,Mc=37491,yc=37808,Sc=37809,bc=37810,wc=37811,Ec=37812,Tc=37813,Ac=37814,Cc=37815,Rc=37816,Pc=37817,Lc=37818,Ic=37819,Dc=37820,Nc=37821,Uc=36492,Fc=36494,Oc=36495,Bc=36283,kc=36284,So=36285,zc=36286,o0=3200,Gc=0,l0=1,Ji="",mn="srgb",bo="srgb-linear",wo="linear",bt="srgb",hl=7680,c0=519,u0=512,h0=513,d0=514,yu=515,f0=516,p0=517,Su=518,m0=519,Of=35044,Eh="300 es",pi=2e3,oa=2001;function g0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v0(){const n=Eo("canvas");return n.style.display="block",n}const Th={};function To(...n){const e="THREE."+n.shift();console.log(e,...n)}function Bf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ke(...n){n=Bf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=Bf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cr(...n){const e=n.join(" ");e in Th||(Th[e]=!0,Ke(...n))}function _0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const x0={[nc]:ic,[sc]:oc,[rc]:lc,[sa]:ac,[ic]:nc,[oc]:sc,[lc]:rc,[ac]:sa};class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const $r=Math.PI/180,la=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function bu(n,e){return(n%e+e)%e}function M0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function y0(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function S0(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function b0(n,e=1){return e-Math.abs(bu(n,e*2)-e)}function w0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function E0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function T0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function A0(n,e){return n+Math.random()*(e-n)}function C0(n){return n*(.5-Math.random())}function R0(n){n!==void 0&&(Ah=n);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(n){return n*$r}function L0(n){return n*la}function I0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function D0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function N0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function U0(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ch={DEG2RAD:$r,RAD2DEG:la,generateUUID:_i,clamp:it,euclideanModulo:bu,mapLinear:M0,inverseLerp:y0,lerp:Yr,damp:S0,pingpong:b0,smoothstep:w0,smootherstep:E0,randInt:T0,randFloat:A0,randFloatSpread:C0,seededRandom:R0,degToRad:P0,radToDeg:L0,isPowerOfTwo:I0,ceilPowerOfTwo:D0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:U0,normalize:wt,denormalize:ei},Vu=class Vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vu.prototype.isVector2=!0;let he=Vu;class Ei{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wu=class Wu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;let L=Wu;const dl=new L,Rh=new Ei,Xu=class Xu{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],A=s[4],M=s[7],w=s[2],E=s[5],R=s[8];return r[0]=a*x+o*S+l*w,r[3]=a*m+o*A+l*E,r[6]=a*p+o*M+l*R,r[1]=c*x+u*S+f*w,r[4]=c*m+u*A+f*E,r[7]=c*p+u*M+f*R,r[2]=h*x+d*S+g*w,r[5]=h*m+d*A+g*E,r[8]=h*p+d*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xu.prototype.isMatrix3=!0;let Qe=Xu;const fl=new Qe,Ph=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){const n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bo]:{primaries:e,whitePoint:i,transfer:wo,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const ut=F0();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class O0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Os===void 0&&(Os=Eo("canvas")),Os.width=e.width,Os.height=e.height;const s=Os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B0=0;class wu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pl(s[a].image)):r.push(pl(s[a]))}else r=pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?O0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let k0=0;const ml=new L;class _n extends Ls{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Ui,s=Ui,r=vn,a=gs,o=ni,l=Un,c=_n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=_i(),this.name="",this.source=new wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cc:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cc:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Pf;_n.DEFAULT_ANISOTROPY=1;const $u=class $u{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(d+1)/2,w=(p+1)/2,E=(u+h)/4,R=(f+x)/4,_=(g+m)/4;return A>M&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=E/i,r=R/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=_/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$u.prototype.isVector4=!0;let Ut=$u;class z0 extends Ls{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new _n(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wu(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends z0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kf extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G0 extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uo=class Uo{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,x,m)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,x=c*f;t[0]=h+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H0,e,V0)}lookAt(e,t,i){const s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xi.crossVectors(i,Ln),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xi.crossVectors(i,Ln)),Xi.normalize(),Ca.crossVectors(Ln,Xi),s[0]=Xi.x,s[4]=Ca.x,s[8]=Ln.x,s[1]=Xi.y,s[5]=Ca.y,s[9]=Ln.y,s[2]=Xi.z,s[6]=Ca.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],A=i[7],M=i[11],w=i[15],E=s[0],R=s[4],_=s[8],T=s[12],P=s[1],D=s[5],B=s[9],V=s[13],N=s[2],z=s[6],q=s[10],Y=s[14],oe=s[3],K=s[7],ne=s[11],re=s[15];return r[0]=a*E+o*P+l*N+c*oe,r[4]=a*R+o*D+l*z+c*K,r[8]=a*_+o*B+l*q+c*ne,r[12]=a*T+o*V+l*Y+c*re,r[1]=u*E+f*P+h*N+d*oe,r[5]=u*R+f*D+h*z+d*K,r[9]=u*_+f*B+h*q+d*ne,r[13]=u*T+f*V+h*Y+d*re,r[2]=g*E+x*P+m*N+p*oe,r[6]=g*R+x*D+m*z+p*K,r[10]=g*_+x*B+m*q+p*ne,r[14]=g*T+x*V+m*Y+p*re,r[3]=S*E+A*P+M*N+w*oe,r[7]=S*R+A*D+M*z+w*K,r[11]=S*_+A*B+M*q+w*ne,r[15]=S*T+A*V+M*Y+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=l*d-c*h,A=o*d-c*f,M=o*h-l*f,w=a*d-c*u,E=a*h-l*u,R=a*f-o*u;return t*(x*S-m*A+p*M)-i*(g*S-m*w+p*E)+s*(g*A-x*w+p*R)-r*(g*M-x*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=t*o-i*a,A=t*l-s*a,M=t*c-r*a,w=i*l-s*o,E=i*c-r*o,R=s*c-r*l,_=u*x-f*g,T=u*m-h*g,P=u*p-d*g,D=f*m-h*x,B=f*p-d*x,V=h*p-d*m,N=S*V-A*B+M*D+w*P-E*T+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=(o*V-l*B+c*D)*z,e[1]=(s*B-i*V-r*D)*z,e[2]=(x*R-m*E+p*w)*z,e[3]=(h*E-f*R-d*w)*z,e[4]=(l*P-a*V-c*T)*z,e[5]=(t*V-s*P+r*T)*z,e[6]=(m*M-g*R-p*A)*z,e[7]=(u*R-h*M+d*A)*z,e[8]=(a*B-o*P+c*_)*z,e[9]=(i*P-t*B-r*_)*z,e[10]=(g*E-x*M+p*S)*z,e[11]=(f*M-u*E-d*S)*z,e[12]=(o*T-a*D-l*_)*z,e[13]=(t*D-i*T+s*_)*z,e[14]=(x*A-g*w-m*S)*z,e[15]=(u*w-f*A+h*S)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,x=a*u,m=a*f,p=o*f,S=l*c,A=l*u,M=l*f,w=i.x,E=i.y,R=i.z;return s[0]=(1-(x+p))*w,s[1]=(d+M)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(d-M)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+A)*R,s[9]=(m-S)*R,s[10]=(1-(h+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length();const o=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);const c=1/a,u=1/o,f=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,t.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=pi,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===pi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===oa)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=pi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===pi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===oa)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Uo.prototype.isMatrix4=!0;let ht=Uo;const Bs=new L,Jn=new ht,H0=new L(0,0,0),V0=new L(1,1,1),Xi=new L,Ca=new L,Ln=new L,Ih=new ht,Dh=new Ei;class ri{constructor(e=0,t=0,i=0,s=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W0=0;const Nh=new L,ks=new Ei,Ai=new ht,Ra=new L,Rr=new L,X0=new L,$0=new Ei,Uh=new L(1,0,0),Fh=new L(0,1,0),Oh=new L(0,0,1),Bh={type:"added"},Y0={type:"removed"},zs={type:"childadded",child:null},gl={type:"childremoved",child:null};class sn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new L,t=new ri,i=new Ei,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ra.copy(e):Ra.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Rr,Ra,this.up):Ai.lookAt(Ra,Rr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ai),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bh),zs.child=e,this.dispatchEvent(zs),zs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y0),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bh),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}sn.DEFAULT_UP=new L(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mi extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function _l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=bu(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=_l(a,r,e+1/3),this.g=_l(a,r,e),this.b=_l(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return ut.workingToColorSpace(pn.copy(this),e),Math.round(it(pn.r*255,0,255))*65536+Math.round(it(pn.g*255,0,255))*256+Math.round(it(pn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(pn.copy(this),t);const i=pn.r,s=pn.g,r=pn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=mn){ut.workingToColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,s=pn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Pa);const i=Yr($i.h,Pa.h,t),s=Yr($i.s,Pa.s,t),r=Yr($i.l,Pa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new We;We.NAMES=zf;class kh extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new L,Ci=new L,xl=new L,Ri=new L,Gs=new L,Hs=new L,zh=new L,Ml=new L,yl=new L,Sl=new L,bl=new Ut,wl=new Ut,El=new Ut;class Wn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zn.subVectors(e,t),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zn.subVectors(s,t),Ci.subVectors(i,t),xl.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(Ci),l=Zn.dot(xl),c=Ci.dot(Ci),u=Ci.dot(xl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return bl.setScalar(0),wl.setScalar(0),El.setScalar(0),bl.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,i),El.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bl,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(e,t,i,s){return Zn.subVectors(i,t),Ci.subVectors(e,t),Zn.cross(Ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Zn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Gs.subVectors(s,i),Hs.subVectors(r,i),Ml.subVectors(e,i);const l=Gs.dot(Ml),c=Hs.dot(Ml);if(l<=0&&c<=0)return t.copy(i);yl.subVectors(e,s);const u=Gs.dot(yl),f=Hs.dot(yl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Gs,a);Sl.subVectors(e,r);const d=Gs.dot(Sl),g=Hs.dot(Sl);if(g>=0&&d<=g)return t.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Hs,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return zh.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(zh,o);const p=1/(m+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(Gs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ss{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ia.subVectors(this.max,Pr),Vs.subVectors(e.a,Pr),Ws.subVectors(e.b,Pr),Xs.subVectors(e.c,Pr),Yi.subVectors(Ws,Vs),qi.subVectors(Xs,Ws),ls.subVectors(Vs,Xs);let t=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-ls.z,ls.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,ls.z,0,-ls.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-ls.y,ls.x,0];return!Tl(t,Vs,Ws,Xs,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,Vs,Ws,Xs,Ia))?!1:(Da.crossVectors(Yi,qi),t=[Da.x,Da.y,Da.z],Tl(t,Vs,Ws,Xs,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new L,new L,new L,new L,new L,new L,new L,new L],Qn=new L,La=new ss,Vs=new L,Ws=new L,Xs=new L,Yi=new L,qi=new L,ls=new L,Pr=new L,Ia=new L,Da=new L,cs=new L;function Tl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){cs.fromArray(n,r);const o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wt=new L,Na=new he;let K0=0;class Sn extends Ls{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Of,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gf extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hf extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const J0=new ss,Lr=new L,Al=new L;class Ma{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):J0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Al)),this.expandByPoint(Lr.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Z0=0;const Gn=new ht,Cl=new sn,$s=new L,In=new ss,Ir=new ss,tn=new L;class $t extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g0(e)?Hf:Gf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(In.min,Ir.min),In.expandByPoint(tn),tn.addVectors(In.max,Ir.max),In.expandByPoint(tn)):(In.expandByPoint(Ir.min),In.expandByPoint(Ir.max))}In.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)tn.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(e,c),tn.add($s)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new L,l[_]=new L;const c=new L,u=new L,f=new L,h=new he,d=new he,g=new he,x=new L,m=new L;function p(_,T,P){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[_].add(x),o[T].add(x),o[P].add(x),l[_].add(m),l[T].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,T=S.length;_<T;++_){const P=S[_],D=P.start,B=P.count;for(let V=D,N=D+B;V<N;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new L,M=new L,w=new L,E=new L;function R(_){w.fromBufferAttribute(s,_),E.copy(w);const T=o[_];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(E,T);const D=M.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,D)}for(let _=0,T=S.length;_<T;++_){const P=S[_],D=P.start,B=P.count;for(let V=D,N=D+B;V<N;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Sn(h,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Of,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Mn=new L;class Ao{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){To("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ao(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){To("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rl=new L,j0=new L,eg=new Qe;class Di{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Rl.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||eg.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let tg=0;class Is extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Xr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hl,this.stencilZFail=hl,this.stencilZPass=hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Di().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new he().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vf extends Is{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ys;const Dr=new L,qs=new L,Ks=new L,Js=new he,Nr=new he,Wf=new ht,Ua=new L,Ur=new L,Fa=new L,Gh=new he,Pl=new he,Hh=new he;class ng extends sn{constructor(e=new Vf){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new $t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Q0(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new Ao(i,3,0,!1)),Ys.setAttribute("uv",new Ao(i,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ks.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Oa(Ua.set(-.5,-.5,0),Ks,a,qs,s,r),Oa(Ur.set(.5,-.5,0),Ks,a,qs,s,r),Oa(Fa.set(.5,.5,0),Ks,a,qs,s,r),Gh.set(0,0),Pl.set(1,0),Hh.set(1,1);let o=e.ray.intersectTriangle(Ua,Ur,Fa,!1,Dr);if(o===null&&(Oa(Ur.set(-.5,.5,0),Ks,a,qs,s,r),Pl.set(0,1),o=e.ray.intersectTriangle(Ua,Fa,Ur,!1,Dr),o===null))return;const l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:Wn.getInterpolation(Dr,Ua,Ur,Fa,Gh,Pl,Hh,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Oa(n,e,t,i,s,r){Js.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Nr.x=r*Js.x-s*Js.y,Nr.y=s*Js.x+r*Js.y):Nr.copy(Js),n.copy(e),n.x+=Nr.x,n.y+=Nr.y,n.applyMatrix4(Wf)}const Li=new L,Ll=new L,Ba=new L,ka=new L;class Xf{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ll.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),ka.copy(this.origin).sub(Ll);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),o=ka.dot(this.direction),l=-ka.dot(Ba),c=ka.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ll).addScaledVector(Ba,h),d}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=i.x-a.x,S=i.y-a.y,A=i.z-a.z,M=Math.abs(l),w=Math.abs(c),E=Math.abs(u);let R,_,T,P,D,B,V,N,z,q,Y,oe;if(M>=w&&M>=E?(T=l,B=f,z=g,oe=p,l>=0?(R=c,_=u,P=h,D=d,V=x,N=m,q=S,Y=A):(R=u,_=c,P=d,D=h,V=m,N=x,q=A,Y=S)):w>=E?(T=c,B=h,z=x,oe=S,c>=0?(R=u,_=l,P=d,D=f,V=m,N=g,q=A,Y=p):(R=l,_=u,P=f,D=d,V=g,N=m,q=p,Y=A)):(T=u,B=d,z=m,oe=A,u>=0?(R=l,_=c,P=f,D=h,V=g,N=x,q=p,Y=S):(R=c,_=l,P=h,D=f,V=x,N=g,q=S,Y=p)),T===0)return null;const K=R/T,ne=_/T,re=1/T,Ue=P-K*B,Pe=D-ne*B,vt=V-K*z,st=N-ne*z,dt=q-K*oe,Q=Y-ne*oe,ie=dt*st-Q*vt,ye=Ue*Q-Pe*dt,Xe=vt*Pe-st*Ue;if(s){if(ie<0||ye<0||Xe<0)return null}else if((ie<0||ye<0||Xe<0)&&(ie>0||ye>0||Xe>0))return null;const Te=ie+ye+Xe;if(Te===0)return null;const $e=re*(ie*B+ye*z+Xe*oe);return(Te>0?$e<0:$e>0)?null:this.at($e/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vh=new ht,us=new Xf,za=new Ma,Wh=new L,Ga=new L,Ha=new L,Va=new L,Il=new L,Wa=new L,Xh=new L,Xa=new L;class Lt extends sn{constructor(e=new $t,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Il.fromBufferAttribute(f,e),a?Wa.addScaledVector(Il,u):Wa.addScaledVector(Il.sub(t),u))}t.add(Wa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(za.containsPoint(us.origin)===!1&&(us.intersectSphere(za,Wh)===null||us.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),us.copy(e.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,w=A;M<w;M+=3){const E=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=$a(this,p,e,i,c,u,f,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=$a(this,a,e,i,c,u,f,S,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,w=A;M<w;M+=3){const E=M,R=M+1,_=M+2;s=$a(this,p,e,i,c,u,f,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=m,A=m+1,M=m+2;s=$a(this,a,e,i,c,u,f,S,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ig(n,e,t,i,s,r,a,o){let l;if(e.side===Rn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Es,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:n}}function $a(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ga),n.getVertexPosition(l,Ha),n.getVertexPosition(c,Va);const u=ig(n,e,t,i,Ga,Ha,Va,Xh);if(u){const f=new L;Wn.getBarycoord(Xh,Ga,Ha,Va,f),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,l,c,f,new he)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,c,f,new he)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,c,f,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};Wn.getNormal(Ga,Ha,Va,h.normal),u.face=h,u.barycoord=f}return u}class $f extends _n{constructor(e=null,t=1,i=1,s,r,a,o,l,c=ln,u=ln,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $h extends Sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zs=new ht,Yh=new ht,Ya=[],qh=new ss,sg=new ht,Fr=new Lt,Or=new Ma;class Kh extends Lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $h(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ss),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),qh.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(qh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ma),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),Or.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(i),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Yh.multiplyMatrices(i,Zs),Fr.matrixWorld=Yh,Fr.raycast(e,Ya);for(let a=0,o=Ya.length;a<o;a++){const l=Ya[a];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $h(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $f(new Float32Array(s*this.count),s,this.count,vu,ti));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hs=new Ma,rg=new he(.5,.5),qa=new L;class Tu{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],A=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,d-u,p-g,w-S).normalize(),s[1].setComponents(c+a,d+u,p+g,w+S).normalize(),s[2].setComponents(c+o,d+f,p+x,w+A).normalize(),s[3].setComponents(c-o,d-f,p-x,w-A).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,w-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,w-M).normalize(),t===pi)s[5].setComponents(c+l,d+h,p+m,w+M).normalize();else if(t===oa)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=rg.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yf extends _n{constructor(e=[],t=Ts,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ho extends _n{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ca extends _n{constructor(e,t,i=Mi,s,r,a,o=ln,l=ln,c,u=Gi,f=1){if(u!==Gi&&u!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ag extends ca{constructor(e,t=Mi,i=Ts,s,r,a=ln,o=ln,l,c=Gi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qf extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rs extends $t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function g(x,m,p,S,A,M,w,E,R,_,T){const P=M/R,D=w/_,B=M/2,V=w/2,N=E/2,z=R+1,q=_+1;let Y=0,oe=0;const K=new L;for(let ne=0;ne<q;ne++){const re=ne*D-V;for(let Ue=0;Ue<z;Ue++){const Pe=Ue*P-B;K[x]=Pe*S,K[m]=re*A,K[p]=N,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=E>0?1:-1,u.push(K.x,K.y,K.z),f.push(Ue/R),f.push(1-ne/_),Y+=1}}for(let ne=0;ne<_;ne++)for(let re=0;re<R;re++){const Ue=h+re+z*ne,Pe=h+re+z*(ne+1),vt=h+(re+1)+z*(ne+1),st=h+(re+1)+z*ne;l.push(Ue,Pe,st),l.push(Pe,vt,st),oe+=6}o.addGroup(d,oe,T),d+=oe,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Co extends $t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new L,u=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ts extends $t{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const x=[],m=i/2;let p=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function S(){const M=new L,w=new L;let E=0;const R=(t-e)/i;for(let _=0;_<=r;_++){const T=[],P=_/r,D=P*(t-e)+e;for(let B=0;B<=s;B++){const V=B/s,N=V*l+o,z=Math.sin(N),q=Math.cos(N);w.x=D*z,w.y=-P*i+m,w.z=D*q,f.push(w.x,w.y,w.z),M.set(z,R,q).normalize(),h.push(M.x,M.y,M.z),d.push(V,1-P),T.push(g++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const P=x[T][_],D=x[T+1][_],B=x[T+1][_+1],V=x[T][_+1];(e>0||T!==0)&&(u.push(P,D,V),E+=3),(t>0||T!==r-1)&&(u.push(D,B,V),E+=3)}c.addGroup(p,E,0),p+=E}function A(M){const w=g,E=new he,R=new L;let _=0;const T=M===!0?e:t,P=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*P,0),h.push(0,P,0),d.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const N=B/s*l+o,z=Math.cos(N),q=Math.sin(N);R.x=T*q,R.y=m*P,R.z=T*z,f.push(R.x,R.y,R.z),h.push(0,P,0),E.x=z*.5+.5,E.y=q*.5*P+.5,d.push(E.x,E.y),g++}for(let B=0;B<s;B++){const V=w+B,N=D+B;M===!0?u.push(N,N+1,V):u.push(N+1,N,V),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Au extends ts{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Au(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ya extends $t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new L,M=new L,w=new L;for(let E=0;E<t.length;E+=3)d(t[E+0],A),d(t[E+1],M),d(t[E+2],w),l(A,M,w,S)}function l(S,A,M,w){const E=w+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const T=S.clone().lerp(M,_/E),P=A.clone().lerp(M,_/E),D=E-_;for(let B=0;B<=D;B++)B===0&&_===E?R[_][B]=T:R[_][B]=T.clone().lerp(P,B/D)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){const P=Math.floor(T/2);T%2===0?(h(R[_][P+1]),h(R[_+1][P]),h(R[_][P])):(h(R[_][P+1]),h(R[_+1][P+1]),h(R[_+1][P]))}}function c(S){const A=new L;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(S),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function u(){const S=new L;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const M=m(S)/2/Math.PI+.5,w=p(S)/Math.PI+.5;a.push(M,1-w)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const A=a[S+0],M=a[S+2],w=a[S+4],E=Math.max(A,M,w),R=Math.min(A,M,w);E>.9&&R<.1&&(A<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,A){const M=S*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}function g(){const S=new L,A=new L,M=new L,w=new L,E=new he,R=new he,_=new he;for(let T=0,P=0;T<r.length;T+=9,P+=6){S.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),w.copy(S).add(A).add(M).divideScalar(3);const D=m(w);x(E,P+0,S,D),x(R,P+2,A,D),x(_,P+4,M,D)}}function x(S,A,M,w){w<0&&S.x===1&&(a[A]=S.x-1),M.x===0&&M.z===0&&(a[A]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.vertices,e.indices,e.radius,e.detail)}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,s=[],r=[],a=[],o=new L,l=new ht;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(it(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(it(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cu extends Ti{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class og extends Cu{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ru(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Jh=new L,Zh=new L,Dl=new Ru,Nl=new Ru,Ul=new Ru;class lg extends Ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Zh.subVectors(s[0],s[1]).add(s[0]),c=Zh);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Jh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Dl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,m),Nl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,m),Ul.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Nl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ul.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Dl.calc(l),Nl.calc(l),Ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qh(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function cg(n,e){const t=1-n;return t*t*e}function ug(n,e){return 2*(1-n)*n*e}function hg(n,e){return n*n*e}function qr(n,e,t,i){return cg(n,e)+ug(n,t)+hg(n,i)}function dg(n,e){const t=1-n;return t*t*t*e}function fg(n,e){const t=1-n;return 3*t*t*n*e}function pg(n,e){return 3*(1-n)*n*n*e}function mg(n,e){return n*n*n*e}function Kr(n,e,t,i,s){return dg(n,e)+fg(n,t)+pg(n,i)+mg(n,s)}class Kf extends Ti{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gg extends Ti{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y),Kr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jf extends Ti{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vg extends Ti{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zf extends Ti{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _g extends Ti{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y),qr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Qh(o,l.x,c.x,u.x,f.x),Qh(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var Hc=Object.freeze({__proto__:null,ArcCurve:og,CatmullRomCurve3:lg,CubicBezierCurve:Kf,CubicBezierCurve3:gg,EllipseCurve:Cu,LineCurve:Jf,LineCurve3:vg,QuadraticBezierCurve:Zf,QuadraticBezierCurve3:_g,SplineCurve:Qf});class xg extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Hc[s.type]().fromJSON(s))}return this}}class jh extends xg{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Jf(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Zf(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Kf(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Qf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new Cu(e,t,i,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vo extends jh{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new jh().fromJSON(s))}return this}}function Mg(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=jf(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Eg(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<s;h+=t){const d=n[h],g=n[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return ua(r,a,t,o,l,c,0),a}function jf(n,e,t,i,s){let r;if(s===Fg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=ed(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=ed(a/i|0,n[a],n[a+1],r);return r&&xr(r,r.next)&&(da(r),r=r.next),r}function Cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xr(t,t.next)||Ft(t.prev,t,t.next)===0)){if(da(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ua(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Pg(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Sg(n,i,s,r):yg(n)){e.push(l.i,n.i,c.i),da(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=bg(Cs(n),e),ua(n,e,t,i,s,r,2)):a===2&&wg(n,e,t,i,s,r):ua(Cs(n),e,t,i,s,r,1);break}}}function yg(n){const e=n.prev,t=n,i=n.next;if(Ft(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Hr(s,o,r,l,a,c,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sg(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Ft(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,f,h),x=Math.max(o,l,c),m=Math.max(u,f,h),p=Vc(d,g,e,t,i),S=Vc(x,m,e,t,i);let A=n.prevZ,M=n.nextZ;for(;A&&A.z>=p&&M&&M.z<=S;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Hr(o,u,l,f,c,h,A.x,A.y)&&Ft(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Hr(o,u,l,f,c,h,M.x,M.y)&&Ft(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Hr(o,u,l,f,c,h,A.x,A.y)&&Ft(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Hr(o,u,l,f,c,h,M.x,M.y)&&Ft(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function bg(n,e){let t=n;do{const i=t.prev,s=t.next.next;!xr(i,s)&&tp(i,t,t.next,s)&&ha(i,s)&&ha(s,i)&&(e.push(i.i,t.i,s.i),da(t),da(t.next),t=n=s),t=t.next}while(t!==n);return Cs(t)}function wg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dg(a,o)){let l=np(a,o);a=Cs(a,a.next),l=Cs(l,l.next),ua(a,e,t,i,s,r,0),ua(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Eg(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=jf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Ig(c))}s.sort(Tg);for(let r=0;r<s.length;r++)t=Ag(s[r],t);return t}function Tg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ag(n,e){const t=Cg(n,e);if(!t)return e;const i=np(t,n);return Cs(i,i.next),Cs(t,t.next)}function Cg(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(xr(n,t))return t;do{if(xr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&ep(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const f=Math.abs(s-t.y)/(i-t.x);ha(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Rg(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Rg(n,e){return Ft(n.prev,n,e.prev)<0&&Ft(e.next,n,n.next)<0}function Pg(n,e,t,i){let s=n;do s.z===0&&(s.z=Vc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Lg(s)}function Lg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Vc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ig(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ep(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Hr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&ep(n,e,t,i,s,r,a,o)}function Dg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ng(n,e)&&(ha(n,e)&&ha(e,n)&&Ug(n,e)&&(Ft(n.prev,n,e.prev)||Ft(n,e.prev,e))||xr(n,e)&&Ft(n.prev,n,n.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xr(n,e){return n.x===e.x&&n.y===e.y}function tp(n,e,t,i){const s=Ja(Ft(n,e,t)),r=Ja(Ft(n,e,i)),a=Ja(Ft(t,i,n)),o=Ja(Ft(t,i,e));return!!(s!==r&&a!==o||s===0&&Ka(n,t,e)||r===0&&Ka(n,i,e)||a===0&&Ka(t,n,i)||o===0&&Ka(t,e,i))}function Ka(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ja(n){return n>0?1:n<0?-1:0}function Ng(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&tp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ha(n,e){return Ft(n.prev,n,n.next)<0?Ft(n,e,n.next)>=0&&Ft(n,n.prev,e)>=0:Ft(n,e,n.prev)<0||Ft(n,n.next,e)<0}function Ug(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function np(n,e){const t=Wc(n.i,n.x,n.y),i=Wc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ed(n,e,t,i){const s=Wc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Og{static triangulate(e,t,i=2){return Mg(e,t,i)}}class rr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return rr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];td(e),nd(i,e);let a=e.length;t.forEach(td);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,nd(i,t[l]);const o=Og.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function td(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Sa extends $t{constructor(e=new Vo([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Bg;let A,M=!1,w,E,R,_;if(p){A=p.getSpacedPoints(u),M=!0,h=!1;const se=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,se),E=new L,R=new L,_=new L}h||(m=0,d=0,g=0,x=0);const T=o.extractPoints(c);let P=T.shape;const D=T.holes;if(!rr.isClockWise(P)){P=P.reverse();for(let se=0,le=D.length;se<le;se++){const ce=D[se];rr.isClockWise(ce)&&(D[se]=ce.reverse())}}function V(se){const ce=10000000000000001e-36;let ue=se[0];for(let pe=1;pe<=se.length;pe++){const He=pe%se.length,ke=se[He],Ye=ke.x-ue.x,Ze=ke.y-ue.y,I=Ye*Ye+Ze*Ze,_t=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(ue.x),Math.abs(ue.y)),rt=ce*_t*_t;if(I<=rt){se.splice(He,1),pe--;continue}ue=ke}}V(P),D.forEach(V);const N=D.length,z=P;for(let se=0;se<N;se++){const le=D[se];P=P.concat(le)}function q(se,le,ce){return le||ct("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(le,ce)}const Y=P.length;function oe(se,le,ce){let ue,pe,He;const ke=se.x-le.x,Ye=se.y-le.y,Ze=ce.x-se.x,I=ce.y-se.y,_t=ke*ke+Ye*Ye,rt=ke*I-Ye*Ze;if(Math.abs(rt)>Number.EPSILON){const C=Math.sqrt(_t),v=Math.sqrt(Ze*Ze+I*I),k=le.x-Ye/C,W=le.y+ke/C,J=ce.x-I/v,de=ce.y+Ze/v,fe=((J-k)*I-(de-W)*Ze)/(ke*I-Ye*Ze);ue=k+ke*fe-se.x,pe=W+Ye*fe-se.y;const Z=ue*ue+pe*pe;if(Z<=2)return new he(ue,pe);He=Math.sqrt(Z/2)}else{let C=!1;ke>Number.EPSILON?Ze>Number.EPSILON&&(C=!0):ke<-Number.EPSILON?Ze<-Number.EPSILON&&(C=!0):Math.sign(Ye)===Math.sign(I)&&(C=!0),C?(ue=-Ye,pe=ke,He=Math.sqrt(_t)):(ue=ke,pe=Ye,He=Math.sqrt(_t/2))}return new he(ue/He,pe/He)}const K=[];for(let se=0,le=z.length,ce=le-1,ue=se+1;se<le;se++,ce++,ue++)ce===le&&(ce=0),ue===le&&(ue=0),K[se]=oe(z[se],z[ce],z[ue]);const ne=[];let re,Ue=K.concat();for(let se=0,le=N;se<le;se++){const ce=D[se];re=[];for(let ue=0,pe=ce.length,He=pe-1,ke=ue+1;ue<pe;ue++,He++,ke++)He===pe&&(He=0),ke===pe&&(ke=0),re[ue]=oe(ce[ue],ce[He],ce[ke]);ne.push(re),Ue=Ue.concat(re)}let Pe;if(m===0)Pe=rr.triangulateShape(z,D);else{const se=[],le=[];for(let ce=0;ce<m;ce++){const ue=ce/m,pe=d*Math.cos(ue*Math.PI/2),He=g*Math.sin(ue*Math.PI/2)+x;for(let ke=0,Ye=z.length;ke<Ye;ke++){const Ze=q(z[ke],K[ke],He);ye(Ze.x,Ze.y,-pe),ue===0&&se.push(Ze)}for(let ke=0,Ye=N;ke<Ye;ke++){const Ze=D[ke];re=ne[ke];const I=[];for(let _t=0,rt=Ze.length;_t<rt;_t++){const C=q(Ze[_t],re[_t],He);ye(C.x,C.y,-pe),ue===0&&I.push(C)}ue===0&&le.push(I)}}Pe=rr.triangulateShape(se,le)}const vt=Pe.length,st=g+x;for(let se=0;se<Y;se++){const le=h?q(P[se],Ue[se],st):P[se];M?(R.copy(w.normals[0]).multiplyScalar(le.x),E.copy(w.binormals[0]).multiplyScalar(le.y),_.copy(A[0]).add(R).add(E),ye(_.x,_.y,_.z)):ye(le.x,le.y,0)}for(let se=1;se<=u;se++)for(let le=0;le<Y;le++){const ce=h?q(P[le],Ue[le],st):P[le];M?(R.copy(w.normals[se]).multiplyScalar(ce.x),E.copy(w.binormals[se]).multiplyScalar(ce.y),_.copy(A[se]).add(R).add(E),ye(_.x,_.y,_.z)):ye(ce.x,ce.y,f/u*se)}for(let se=m-1;se>=0;se--){const le=se/m,ce=d*Math.cos(le*Math.PI/2),ue=g*Math.sin(le*Math.PI/2)+x;for(let pe=0,He=z.length;pe<He;pe++){const ke=q(z[pe],K[pe],ue);ye(ke.x,ke.y,f+ce)}for(let pe=0,He=D.length;pe<He;pe++){const ke=D[pe];re=ne[pe];for(let Ye=0,Ze=ke.length;Ye<Ze;Ye++){const I=q(ke[Ye],re[Ye],ue);M?ye(I.x,I.y+A[u-1].y,A[u-1].x+ce):ye(I.x,I.y,f+ce)}}}dt(),Q();function dt(){const se=s.length/3;if(h){let le=0,ce=Y*le;for(let ue=0;ue<vt;ue++){const pe=Pe[ue];Xe(pe[2]+ce,pe[1]+ce,pe[0]+ce)}le=u+m*2,ce=Y*le;for(let ue=0;ue<vt;ue++){const pe=Pe[ue];Xe(pe[0]+ce,pe[1]+ce,pe[2]+ce)}}else{for(let le=0;le<vt;le++){const ce=Pe[le];Xe(ce[2],ce[1],ce[0])}for(let le=0;le<vt;le++){const ce=Pe[le];Xe(ce[0]+Y*u,ce[1]+Y*u,ce[2]+Y*u)}}i.addGroup(se,s.length/3-se,0)}function Q(){const se=s.length/3;let le=0;ie(z,le),le+=z.length;for(let ce=0,ue=D.length;ce<ue;ce++){const pe=D[ce];ie(pe,le),le+=pe.length}i.addGroup(se,s.length/3-se,1)}function ie(se,le){let ce=se.length;for(;--ce>=0;){const ue=ce;let pe=ce-1;pe<0&&(pe=se.length-1);for(let He=0,ke=u+m*2;He<ke;He++){const Ye=Y*He,Ze=Y*(He+1),I=le+ue+Ye,_t=le+pe+Ye,rt=le+pe+Ze,C=le+ue+Ze;Te(I,_t,rt,C)}}}function ye(se,le,ce){l.push(se),l.push(le),l.push(ce)}function Xe(se,le,ce){$e(se),$e(le),$e(ce);const ue=s.length/3,pe=S.generateTopUV(i,s,ue-3,ue-2,ue-1);St(pe[0]),St(pe[1]),St(pe[2])}function Te(se,le,ce,ue){$e(se),$e(le),$e(ue),$e(le),$e(ce),$e(ue);const pe=s.length/3,He=S.generateSideWallUV(i,s,pe-6,pe-3,pe-2,pe-1);St(He[0]),St(He[1]),St(He[3]),St(He[1]),St(He[2]),St(He[3])}function $e(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function St(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Hc[s.type]().fromJSON(s)),new Sa(i,e.options)}}const Bg={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-f),new he(h,1-g),new he(x,1-p)]:[new he(o,1-l),new he(u,1-f),new he(d,1-g),new he(m,1-p)]}};function kg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pu extends ya{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pu(e.radius,e.detail)}}class Jr extends ya{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jr(e.radius,e.detail)}}class Rs extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let A=0;A<c;A++){const M=A*f-r;g.push(M,-S,0),x.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const A=S+c*p,M=S+c*(p+1),w=S+1+c*(p+1),E=S+1+c*p;d.push(A,M,E),d.push(M,w,E)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zr extends $t{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=e;const h=(t-e)/s,d=new L,g=new he;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const S=p+m,A=S,M=S+i+1,w=S+i+2,E=S+1;o.push(A,M,E),o.push(M,w,E)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wo extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new L,h=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const S=[],A=p/i,M=a+A*o,w=e*Math.cos(M),E=Math.sqrt(e*e-w*w);let R=0;p===0&&a===0?R=.5/t:p===i&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,P=s+T*r;f.x=-E*Math.cos(P),f.y=w,f.z=E*Math.sin(P),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(T+R,1-A),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const A=u[p][S+1],M=u[p][S],w=u[p+1][S],E=u[p+1][S+1];(p!==0||a>0)&&d.push(A,M,E),(p!==i-1||l<Math.PI)&&d.push(M,w,E)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lu extends ya{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lu(e.radius,e.detail)}}class fa extends $t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new L,d=new L,g=new L;for(let x=0;x<=i;x++){const m=a+x/i*o;for(let p=0;p<=s;p++){const S=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){const p=(s+1)*x+m-1,S=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(p,S,M),l.push(S,A,M)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class zg extends Is{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(id(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(id(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yn(n){const e={};for(let t=0;t<n.length;t++){const i=Mr(n[t]);for(const s in i)e[s]=i[s]}return e}function id(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Gg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ip(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Hg={clone:Mr,merge:yn};var Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(s.value);break;case"v2":this.uniforms[i].value=new he().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xg extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qr extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $g extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yg extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sp extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class sd extends sp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Fl=new ht,rd=new L,ad=new L;class qg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===oa||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Za=new L,Qa=new Ei,li=new L;class rp extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Qa,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Qa,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Za,Qa,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Qa,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new L,od=new he,ld=new he;class Vn extends rp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,od,ld),t.subVectors(ld,od)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pa extends rp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kg extends qg{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ja extends sp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Kg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Qs=-90,js=1;class Jg extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(Qs,js,e,t);s.layers=this.layers,this.add(s);const r=new Vn(Qs,js,e,t);r.layers=this.layers,this.add(r);const a=new Vn(Qs,js,e,t);a.layers=this.layers,this.add(a);const o=new Vn(Qs,js,e,t);o.layers=this.layers,this.add(o);const l=new Vn(Qs,js,e,t);l.layers=this.layers,this.add(l);const c=new Vn(Qs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zg extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cd=new ht;class Qg{constructor(e,t,i=0,s=1/0){this.ray=new Xf(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cd),this}intersectObject(e,t=!0,i=[]){return Xc(e,this,i,t),i.sort(ud),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Xc(e[s],this,i,t);return i.sort(ud),i}}function ud(n,e){return n.distance-e.distance}function Xc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Xc(r[a],e,t,!0)}}const Yu=class Yu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Yu.prototype.isMatrix2=!0;let hd=Yu;function dd(n,e,t,i){const s=jg(i);switch(t){case Uf:return n*e;case vu:return n*e/s.components*s.byteLength;case _u:return n*e/s.components*s.byteLength;case As:return n*e*2/s.components*s.byteLength;case xu:return n*e*2/s.components*s.byteLength;case Ff:return n*e*3/s.components*s.byteLength;case ni:return n*e*4/s.components*s.byteLength;case Mu:return n*e*4/s.components*s.byteLength;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:case pc:return Math.max(n,16)*Math.max(e,8)/4;case hc:case fc:return Math.max(n,8)*Math.max(e,8)/2;case mc:case gc:case _c:case xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vc:case yo:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Fc:case Oc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case So:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jg(n){switch(n){case Un:case Lf:return{byteLength:1,components:1};case ra:case If:case yi:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case Mi:case pu:case ti:return{byteLength:4,components:1};case Df:case Nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);function ap(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ev(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wv=`#define PI 3.141592653589793
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
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hv=`#ifdef USE_GRADIENTMAP
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
}`,Vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yv=`#ifdef USE_ENVMAP
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
#endif`,qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
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
#endif`,jv=`uniform sampler2D dfgLUT;
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
}`,e_=`
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
#endif`,t_=`#if defined( RE_IndirectDiffuse )
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w_=`#ifdef USE_NORMALMAP
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
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z_=`float getShadowMask() {
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
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,cx=`#define DISTANCE
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
}`,ux=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,xx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,bx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Ex=`#define STANDARD
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
}`,Tx=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Cx=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:av,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:uv,begin_vertex:hv,beginnormal_vertex:dv,bsdfs:fv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:_v,clipping_planes_vertex:xv,color_fragment:Mv,color_pars_fragment:yv,color_pars_vertex:Sv,color_vertex:bv,common:wv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:Tv,displacementmap_pars_vertex:Av,displacementmap_vertex:Cv,emissivemap_fragment:Rv,emissivemap_pars_fragment:Pv,colorspace_fragment:Lv,colorspace_pars_fragment:Iv,envmap_fragment:Dv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Uv,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:Yv,envmap_vertex:Ov,fog_vertex:Bv,fog_pars_vertex:kv,fog_fragment:zv,fog_pars_fragment:Gv,gradientmap_pars_fragment:Hv,lightmap_pars_fragment:Vv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:$v,lights_toon_fragment:qv,lights_toon_pars_fragment:Kv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Qv,lights_physical_pars_fragment:jv,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,lightprobes_pars_fragment:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:o_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:u_,map_particle_pars_fragment:h_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:f_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:v_,morphtarget_vertex:__,normal_fragment_begin:x_,normal_fragment_maps:M_,normal_pars_fragment:y_,normal_pars_vertex:S_,normal_vertex:b_,normalmap_pars_fragment:w_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:C_,opaque_fragment:R_,packing:P_,premultiplied_alpha_fragment:L_,project_vertex:I_,dithering_fragment:D_,dithering_pars_fragment:N_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:O_,shadowmap_pars_vertex:B_,shadowmap_vertex:k_,shadowmask_pars_fragment:z_,skinbase_vertex:G_,skinning_pars_vertex:H_,skinning_vertex:V_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:$_,tonemapping_fragment:Y_,tonemapping_pars_fragment:q_,transmission_fragment:K_,transmission_pars_fragment:J_,uv_pars_fragment:Z_,uv_pars_vertex:Q_,uv_vertex:j_,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ax,depth_vert:ox,depth_frag:lx,distance_vert:cx,distance_frag:ux,equirect_vert:hx,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:vx,meshlambert_frag:_x,meshmatcap_vert:xx,meshmatcap_frag:Mx,meshnormal_vert:yx,meshnormal_frag:Sx,meshphong_vert:bx,meshphong_frag:wx,meshphysical_vert:Ex,meshphysical_frag:Tx,meshtoon_vert:Ax,meshtoon_frag:Cx,points_vert:Rx,points_frag:Px,shadow_vert:Lx,shadow_frag:Ix,sprite_vert:Dx,sprite_frag:Nx},Me={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ui={basic:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:yn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:yn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new We(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:yn([Me.points,Me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:yn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:yn([Me.common,Me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:yn([Me.sprite,Me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:yn([Me.common,Me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:yn([Me.lights,Me.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ui.physical={uniforms:yn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const eo={r:0,b:0,g:0},Ux=new ht,op=new Qe;op.set(-1,0,0,0,1,0,0,0,1);function Fx(n,e,t,i,s,r){const a=new We(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const M=S.backgroundBlurriness>0;A=e.get(A,M)}return A}function g(S){let A=!1;const M=d(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(S,A){const M=d(A);M&&(M.isCubeTexture||M.mapping===Go)?(c===void 0&&(c=new Lt(new rs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Mr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(op),c.material.toneMapped=ut.getTransfer(M.colorSpace)!==bt,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Lt(new Rs(2,2),new Si({name:"BackgroundMaterial",uniforms:Mr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(eo,ip(n)),t.buffers.color.setClear(eo.r,eo.g,eo.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Ox(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(D,B,V,N,z){let q=!1;const Y=f(D,N,V,B);r!==Y&&(r=Y,c(r.object)),q=d(D,N,V,z),q&&g(D,N,V,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(D,B,V,N),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function f(D,B,V,N){const z=N.wireframe===!0;let q=i[B.id];q===void 0&&(q={},i[B.id]=q);const Y=D.isInstancedMesh===!0?D.id:0;let oe=q[Y];oe===void 0&&(oe={},q[Y]=oe);let K=oe[V.id];K===void 0&&(K={},oe[V.id]=K);let ne=K[z];return ne===void 0&&(ne=h(l()),K[z]=ne),ne}function h(D){const B=[],V=[],N=[];for(let z=0;z<t;z++)B[z]=0,V[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,B,V,N){const z=r.attributes,q=B.attributes;let Y=0;const oe=V.getAttributes();for(const K in oe)if(oe[K].location>=0){const re=z[K];let Ue=q[K];if(Ue===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Ue=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Ue=D.instanceColor)),re===void 0||re.attribute!==Ue||Ue&&re.data!==Ue.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function g(D,B,V,N){const z={},q=B.attributes;let Y=0;const oe=V.getAttributes();for(const K in oe)if(oe[K].location>=0){let re=q[K];re===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const Ue={};Ue.attribute=re,re&&re.data&&(Ue.data=re.data),z[K]=Ue,Y++}r.attributes=z,r.attributesNum=Y,r.index=N}function x(){const D=r.newAttributes;for(let B=0,V=D.length;B<V;B++)D[B]=0}function m(D){p(D,0)}function p(D,B){const V=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;V[D]=1,N[D]===0&&(n.enableVertexAttribArray(D),N[D]=1),z[D]!==B&&(n.vertexAttribDivisor(D,B),z[D]=B)}function S(){const D=r.newAttributes,B=r.enabledAttributes;for(let V=0,N=B.length;V<N;V++)B[V]!==D[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function A(D,B,V,N,z,q,Y){Y===!0?n.vertexAttribIPointer(D,B,V,z,q):n.vertexAttribPointer(D,B,V,N,z,q)}function M(D,B,V,N){x();const z=N.attributes,q=V.getAttributes(),Y=B.defaultAttributeValues;for(const oe in q){const K=q[oe];if(K.location>=0){let ne=z[oe];if(ne===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const re=ne.normalized,Ue=ne.itemSize,Pe=e.get(ne);if(Pe===void 0)continue;const vt=Pe.buffer,st=Pe.type,dt=Pe.bytesPerElement,Q=st===n.INT||st===n.UNSIGNED_INT||ne.gpuType===pu;if(ne.isInterleavedBufferAttribute){const ie=ne.data,ye=ie.stride,Xe=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<K.locationSize;Te++)p(K.location+Te,ie.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<K.locationSize;Te++)m(K.location+Te);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Te=0;Te<K.locationSize;Te++)A(K.location+Te,Ue/K.locationSize,st,re,ye*dt,(Xe+Ue/K.locationSize*Te)*dt,Q)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<K.locationSize;ie++)p(K.location+ie,ne.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<K.locationSize;ie++)m(K.location+ie);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let ie=0;ie<K.locationSize;ie++)A(K.location+ie,Ue/K.locationSize,st,re,Ue*dt,Ue/K.locationSize*ie*dt,Q)}}else if(Y!==void 0){const re=Y[oe];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(K.location,re);break;case 3:n.vertexAttrib3fv(K.location,re);break;case 4:n.vertexAttrib4fv(K.location,re);break;default:n.vertexAttrib1fv(K.location,re)}}}}S()}function w(){T();for(const D in i){const B=i[D];for(const V in B){const N=B[V];for(const z in N){const q=N[z];for(const Y in q)u(q[Y].object),delete q[Y];delete N[z]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const V in B){const N=B[V];for(const z in N){const q=N[z];for(const Y in q)u(q[Y].object),delete q[Y];delete N[z]}}delete i[D.id]}function R(D){for(const B in i){const V=i[B];for(const N in V){const z=V[N];if(z[D.id]===void 0)continue;const q=z[D.id];for(const Y in q)u(q[Y].object),delete q[Y];delete z[D.id]}}}function _(D){for(const B in i){const V=i[B],N=D.isInstancedMesh===!0?D.id:0,z=V[N];if(z!==void 0){for(const q in z){const Y=z[q];for(const oe in Y)u(Y[oe].object),delete Y[oe];delete z[q]}delete V[N],Object.keys(V).length===0&&delete i[B]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Bx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ni&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Un&&R!==ti&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:E}}function zx(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Di,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,A=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,A,d);for(let w=0;w!==A;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==x;++A,M+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const ar=4,Gx=6,Hx=20,Vx=256,Br=new pa,fd=new We;let Ol=null,Bl=0,kl=0,zl=!1;const Wx=new L,ds=new L;class pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Wx}=r;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Bl,kl),this._renderer.xr.enabled=zl,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:yi,format:ni,colorSpace:bo,depthBuffer:!1},s=md(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xx(r)),this._blurMaterial=Yx(r,e,t),this._ggxMaterial=$x(r,e,t)}return s}_compileMaterial(e){const t=new Lt(new $t,e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,i,s,r){const l=new Vn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(fd),f.toneMapping=vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new rs,new Fn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(fd),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const w=this._cubeSize;er(s,M*w,A>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ts||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Br)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-ar?i-g+ar:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,er(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,er(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Br)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-ar?s-this._lodMax+ar:0),h=4*(this._cubeSize-u);er(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Br)}}function Xx(n){const e=[],t=[];let i=n;const s=n-ar+1+Gx;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){const S=p%3*2/3-1,A=p>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(M,d*h*p);for(let w=0;w<h;w++){const E=u[w*2]*2-1,R=u[w*2+1]*2-1;p===0?ds.set(1,R,E):p===1?ds.set(-E,1,-R):p===2?ds.set(-E,R,1):p===3?ds.set(-1,R,-E):p===4?ds.set(-E,-1,R):ds.set(E,R,-1),ds.toArray(x,(p*h+w)*d)}}const m=new $t;m.setAttribute("position",new Sn(g,d)),m.setAttribute("outputDirection",new Sn(x,d)),t.push(new Lt(m,null)),i>ar&&i--}return{lodMeshes:t,sizeLods:e}}function md(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $x(n,e,t){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Yx(n,e,t){return new Si({name:"SphericalGaussianBlur",defines:{SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function gd(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function vd(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lp extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rs(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Oi});r.uniforms.tEquirect.value=t;const a=new Lt(s,r),o=t.minFilter;return t.minFilter===gs&&(t.minFilter=vn),new Jg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function qx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ll||d===cl)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new lp(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===ll||d===cl,x=d===Ts||d===_r;if(g||x){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new pd(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new pd(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===ll?h.mapping=Ts:d===cl&&(h.mapping=_r),h}function l(h){let d=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Kx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&cr("WebGLRenderer: "+i+" extension not supported."),s}}}function Jx(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(d!==null){const S=d.array;x=d.version;for(let A=0,M=S.length;A<M;A+=3){const w=S[A+0],E=S[A+1],R=S[A+2];h.push(w,E,E,R,R,w)}}else{const S=g.array;x=g.version;for(let A=0,M=S.length/3-1;A<M;A+=3){const w=A+0,E=A+1,R=A+2;h.push(w,E,E,R,R,w)}}const m=new(g.count>=65535?Hf:Gf)(h,1);m.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Zx(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Qx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function jx(n,e,t){const i=new WeakMap,s=new Ut;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;d===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let M=o.attributes.position.count*A,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*w*4*f),R=new kf(E,M,w,f);R.type=ti,R.needsUpdate=!0;const _=A*4;for(let P=0;P<f;P++){const D=m[P],B=p[P],V=S[P],N=M*w*4*P;for(let z=0;z<D.count;z++){const q=z*_;d===!0&&(s.fromBufferAttribute(D,z),E[N+q+0]=s.x,E[N+q+1]=s.y,E[N+q+2]=s.z,E[N+q+3]=0),g===!0&&(s.fromBufferAttribute(B,z),E[N+q+4]=s.x,E[N+q+5]=s.y,E[N+q+6]=s.z,E[N+q+7]=0),x===!0&&(s.fromBufferAttribute(V,z),E[N+q+8]=s.x,E[N+q+9]=s.y,E[N+q+10]=s.z,E[N+q+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new he(M,w)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function eM(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const tM={[wf]:"LINEAR_TONE_MAPPING",[Ef]:"REINHARD_TONE_MAPPING",[Tf]:"CINEON_TONE_MAPPING",[Af]:"ACES_FILMIC_TONE_MAPPING",[Rf]:"AGX_TONE_MAPPING",[fu]:"NEUTRAL_TONE_MAPPING",[Cf]:"CUSTOM_TONE_MAPPING"};function nM(n,e,t,i,s,r){const a=new Yn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new $t;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));const u=new Xg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Lt(c,u),h=new pa(-1,1,1,-1,0,1);let d=null,g=null,x=!1,m,p=null,S=[],A=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let E=0;E<S.length;E++){const R=S[E];R.setSize&&R.setSize(M,w)}},this.setEffects=function(M){S=M,A=S.length>0&&S[0].isRenderPass===!0;const w=a.width,E=a.height;S.length>0&&o===null&&(o=new Yn(w,E,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new Yn(w,E,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){const _=S[R];_.setSize&&_.setSize(w,E)}},this.begin=function(M,w){if(x||M.toneMapping===vi&&S.length===0)return!1;if(p=w,w!==null){const E=w.width,R=w.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=vi,!0},this.hasRenderPass=function(){return A},this.end=function(M,w){M.toneMapping=m,x=!0;let E=a,R=o;for(let _=0;_<S.length;_++){const T=S[_];T.enabled!==!1&&(T.render(M,R,E,w),T.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,u.defines={},ut.getTransfer(d)===bt&&(u.defines.SRGB_TRANSFER="");const _=tM[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const cp=new _n,$c=new ca(1,1),up=new kf,hp=new G0,dp=new Yf,_d=[],xd=[],Md=new Float32Array(16),yd=new Float32Array(9),Sd=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function oM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Qt(t,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),jt(t,i)}}function lM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Qt(t,i))return;yd.set(i),n.uniformMatrix3fv(this.addr,!1,yd),jt(t,i)}}function cM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Qt(t,i))return;Md.set(i),n.uniformMatrix4fv(this.addr,!1,Md),jt(t,i)}}function uM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function pM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function _M(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=t.isReversedDepthBuffer()?Su:yu,r=$c):r=cp,t.setTexture2D(e||r,s)}function xM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hp,s)}function MM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dp,s)}function yM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||up,s)}function SM(n){switch(n){case 5126:return iM;case 35664:return sM;case 35665:return rM;case 35666:return aM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return hM;case 35668:case 35672:return dM;case 35669:case 35673:return fM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return yM}}function bM(n,e){n.uniform1fv(this.addr,e)}function wM(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function EM(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function TM(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function AM(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CM(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RM(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PM(n,e){n.uniform1iv(this.addr,e)}function LM(n,e){n.uniform2iv(this.addr,e)}function IM(n,e){n.uniform3iv(this.addr,e)}function DM(n,e){n.uniform4iv(this.addr,e)}function NM(n,e){n.uniform1uiv(this.addr,e)}function UM(n,e){n.uniform2uiv(this.addr,e)}function FM(n,e){n.uniform3uiv(this.addr,e)}function OM(n,e){n.uniform4uiv(this.addr,e)}function BM(n,e,t){const i=this.cache,s=e.length,r=$o(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=$c:a=cp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function kM(n,e,t){const i=this.cache,s=e.length,r=$o(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hp,r[a])}function zM(n,e,t){const i=this.cache,s=e.length,r=$o(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dp,r[a])}function GM(n,e,t){const i=this.cache,s=e.length,r=$o(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||up,r[a])}function HM(n){switch(n){case 5126:return bM;case 35664:return wM;case 35665:return EM;case 35666:return TM;case 35674:return AM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return IM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return GM}}class VM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}}class WM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HM(t.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function bd(n,e){n.seq.push(e),n.map[e.id]=e}function $M(n,e,t){const i=n.name,s=i.length;for(Gl.lastIndex=0;;){const r=Gl.exec(i),a=Gl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bd(t,c===void 0?new VM(o,n,e):new WM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new XM(o),bd(t,f)),t=f}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$M(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function wd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const YM=37297;let qM=0;function KM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ed=new Qe;function JM(n){ut._getMatrix(Ed,ut.workingColorSpace,n);const e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case wo:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Td(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+KM(n.getShaderSource(e),o)}else return r}function ZM(n,e){const t=JM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const QM={[wf]:"Linear",[Ef]:"Reinhard",[Tf]:"Cineon",[Af]:"ACESFilmic",[Rf]:"AgX",[fu]:"Neutral",[Cf]:"Custom"};function jM(n,e){const t=QM[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new L;function ey(){ut.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function ny(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vr(n){return n!==""}function Ad(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(n){return n.replace(sy,ay)}const ry=new Map;function ay(n,e){let t=nt[e];if(t===void 0){const i=ry.get(e);if(i!==void 0)t=nt[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yc(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(n){return n.replace(oy,ly)}function ly(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cy={[Wr]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function uy(n){return cy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hy={[Ts]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE_UV"};function dy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const fy={[_r]:"ENVMAP_MODE_REFRACTION"};function py(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const my={[bf]:"ENVMAP_BLENDING_MULTIPLY",[s0]:"ENVMAP_BLENDING_MIX",[r0]:"ENVMAP_BLENDING_ADD"};function gy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":my[n.combine]||"ENVMAP_BLENDING_NONE"}function vy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _y(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uy(t),c=dy(t),u=py(t),f=gy(t),h=vy(t),d=ty(t),g=ny(r),x=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?nt.tonemapping_pars_fragment:"",t.toneMapping!==vi?jM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,ZM("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=Yc(a),a=Ad(a,t),a=Cd(a,t),o=Yc(o),o=Ad(o,t),o=Cd(o,t),a=Rd(a),o=Rd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=S+m+a,M=S+p+o,w=wd(s,s.VERTEX_SHADER,A),E=wd(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(E)||"",z=B.trim(),q=V.trim(),Y=N.trim();let oe=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,E);else{const ne=Td(s,w,"vertex"),re=Td(s,E,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+ne+`
`+re)}else z!==""?Ke("WebGLProgram: Program Info Log:",z):(q===""||Y==="")&&(K=!1);K&&(D.diagnostics={runnable:oe,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(w),s.deleteShader(E),_=new po(s,x),T=iy(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,YM)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}let xy=0;class My{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yy(e),t.set(e,i)),i}}class yy{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}}function Sy(n){return n===As||n===yo||n===So}function by(n,e,t,i,s,r){const a=new Eu,o=new My,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,P,D,B,V){const N=D.fog,z=B.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,oe=e.get(_.envMap||q,Y),K=oe&&oe.mapping===Go?oe.image.height:null,ne=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ue=re!==void 0?re.length:0;let Pe=0;z.morphAttributes.position!==void 0&&(Pe=1),z.morphAttributes.normal!==void 0&&(Pe=2),z.morphAttributes.color!==void 0&&(Pe=3);let vt,st,dt,Q;if(ne){const Rt=ui[ne];vt=Rt.vertexShader,st=Rt.fragmentShader}else{vt=_.vertexShader,st=_.fragmentShader;const Rt=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,Rt,xt),dt=Rt.id,Q=xt.id}const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Xe=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,$e=!!_.map,St=!!_.matcap,se=!!oe,le=!!_.aoMap,ce=!!_.lightMap,ue=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,He=!!_.displacementMap,ke=!!_.emissiveMap,Ye=!!_.metalnessMap,Ze=!!_.roughnessMap,I=_.anisotropy>0,_t=_.clearcoat>0,rt=_.dispersion>0,C=_.retroreflectivity>0,v=_.iridescence>0,k=_.sheen>0,W=_.transmission>0,J=I&&!!_.anisotropyMap,de=_t&&!!_.clearcoatMap,fe=_t&&!!_.clearcoatNormalMap,Z=_t&&!!_.clearcoatRoughnessMap,te=v&&!!_.iridescenceMap,me=v&&!!_.iridescenceThicknessMap,Fe=k&&!!_.sheenColorMap,xe=k&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Oe=!!_.specularColorMap,Ve=!!_.specularIntensityMap,je=W&&!!_.transmissionMap,F=W&&!!_.thicknessMap,ve=!!_.gradientMap,j=!!_.alphaMap,_e=_.alphaTest>0,we=!!_.alphaHash,ae=!!_.extensions;let Be=vi;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Be=n.toneMapping);const De={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:st,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&B.instanceColor!==null,instancingMorph:Xe&&B.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:St,envMap:se,envMapMode:se&&oe.mapping,envMapCubeUVHeight:K,aoMap:le,lightMap:ce,bumpMap:ue,normalMap:pe,displacementMap:He,emissiveMap:ke,normalMapObjectSpace:pe&&_.normalMapType===l0,normalMapTangentSpace:pe&&_.normalMapType===Gc,packedNormalMap:pe&&_.normalMapType===Gc&&Sy(_.normalMap.format),metalnessMap:Ye,roughnessMap:Ze,anisotropy:I,anisotropyMap:J,clearcoat:_t,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:Z,dispersion:rt,retroreflection:C,iridescence:v,iridescenceMap:te,iridescenceThicknessMap:me,sheen:k,sheenColorMap:Fe,sheenRoughnessMap:xe,specularMap:ge,specularColorMap:Oe,specularIntensityMap:Ve,transmission:W,transmissionMap:je,thicknessMap:F,gradientMap:ve,opaque:_.transparent===!1&&_.blending===Xr&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:_e,alphaHash:we,combine:_.combine,mapUv:$e&&g(_.map.channel),aoMapUv:le&&g(_.aoMap.channel),lightMapUv:ce&&g(_.lightMap.channel),bumpMapUv:ue&&g(_.bumpMap.channel),normalMapUv:pe&&g(_.normalMap.channel),displacementMapUv:He&&g(_.displacementMap.channel),emissiveMapUv:ke&&g(_.emissiveMap.channel),metalnessMapUv:Ye&&g(_.metalnessMap.channel),roughnessMapUv:Ze&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:de&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(_.sheenRoughnessMap.channel),specularMapUv:ge&&g(_.specularMap.channel),specularColorMapUv:Oe&&g(_.specularColorMap.channel),specularIntensityMapUv:Ve&&g(_.specularIntensityMap.channel),transmissionMapUv:je&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:j&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(pe||I),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&($e||j),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===bt,decodeVideoTextureEmissive:ke&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fi,flipSided:_.side===Rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),S(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){const T=d[_.type];let P;if(T){const D=ui[T];P=Hg.clone(D.uniforms)}else P=_.uniforms;return P}function M(_,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new _y(n,T,_,s),c.push(P),u.set(T,P)),P}function w(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function wy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Id(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,x,m,p){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},n[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,d,g,x,m,p,S){S.reversedDepth===!0&&(m=-m);const A=o(h,d,g,x,m,p);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(h,d,g,x,m,p){const S=o(h,d,g,x,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,d){t.length>1&&t.sort(h||Ey),i.length>1&&i.sort(d||Ld),s.length>1&&s.sort(d||Ld)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Ty(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Id,n.set(i,[a])):s>=r.length?(a=new Id,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ay(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new We};break;case"SpotLight":t={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ry=0;function Py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ly(n){const e=new Ay,t=Cy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new ht,a=new ht;function o(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,A=0,M=0,w=0,E=0,R=0,_=0,T=0,P=0;c.sort(Py);for(let B=0,V=c.length;B<V;B++){const N=c[B],z=N.color,q=N.intensity,Y=N.distance;let oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===As?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=z.r*q,f+=z.g*q,h+=z.b*q;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],q);P++}else if(N.isSunLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[g]=re,i.sunShadowMap[g]=oe;const Ue=ne.getViewportCount();for(let Pe=0;Pe<Ue;Pe++)i.sunShadowMatrix[x+Pe]=ne.getMatrix(Pe),i.sunShadowCascade[x+Pe]=ne._cascadeData[Pe];x+=Ue,g++}i.sun[d]=K,d++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,i.directionalShadow[m]=re,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=N.shadow.matrix,w++}i.directional[m]=K,m++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(z).multiplyScalar(q),K.distance=Y,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[S]=K;const ne=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,ne.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[S]=ne.matrix,N.castShadow){const re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,i.spotShadow[S]=re,i.spotShadowMap[S]=oe,R++}S++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(z).multiplyScalar(q),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[A]=K,A++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const ne=N.shadow,re=t.get(N);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=oe,i.pointShadowMatrix[p]=N.shadow.matrix,E++}i.point[p]=K,p++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(q),K.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[M]=K,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=S,i.rectArea.length=A,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=P,i.version=Ry++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0,m=0;const p=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){const M=c[S];if(M.isSunLight){const w=i.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Dd(n){const e=new Ly(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Iy(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Dd(n),e.set(s,[o])):r>=a.length?(o=new Dd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
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
}`,Uy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Fy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Nd=new ht,kr=new L,Hl=new L;function Oy(n,e,t){let i=new Tu;const s=new he,r=new he,a=new Ut,o=new $g,l=new Yg,c={},u=t.maxTextureSize,f={[Es]:Rn,[Rn]:Es,[fi]:fi},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Dy,fragmentShader:Ny}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===km&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wr);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Oi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=p!==this.type;V&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=E.length;N<z;N++){const q=E[N],Y=q.shadow;if(Y===void 0){Ke("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const oe=Y.getFrameExtents();s.multiply(oe),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,Y.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Gr){if(q.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Yn(s.x,s.y,{format:As,type:yi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new ca(s.x,s.y,ti),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Gi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ln,Y.map.depthTexture.magFilter=ln}else q.isPointLight?(Y.map=new lp(s.x),Y.map.depthTexture=new ag(s.x,Mi)):(Y.map=new Yn(s.x,s.y),Y.map.depthTexture=new ca(s.x,s.y,Mi)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Gi,this.type===Wr?(Y.map.depthTexture.compareFunction=K?Su:yu,Y.map.depthTexture.minFilter=vn,Y.map.depthTexture.magFilter=vn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ln,Y.map.depthTexture.magFilter=ln);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const ne=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,_);for(let re=0;re<ne;re++){const Ue=Y.getCamera(re);if(q.isPointLight){const Pe=Y.camera,vt=Y.matrix,st=q.distance||Pe.far;st!==Pe.far&&(Pe.far=st,Pe.updateProjectionMatrix()),kr.setFromMatrixPosition(q.matrixWorld),Pe.position.copy(kr),Hl.copy(Pe.position),Hl.add(Uy[re]),Pe.up.copy(Fy[re]),Pe.lookAt(Hl),Pe.updateMatrixWorld(),vt.makeTranslation(-kr.x,-kr.y,-kr.z),Nd.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Nd,Pe.coordinateSystem,Pe.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,re),n.clear();else{re===0&&(n.setRenderTarget(Y.map),n.clear());const Pe=Y.getViewport(re);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),B.viewport(a)}i=Y.getFrustum(re),M(R,_,Ue,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Gr&&S(Y,_),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,D)};function S(E,R){const _=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Yn(s.x,s.y,{format:As,type:yi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,_,h,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,_,d,x,null)}function A(E,R,_,T){let P=null;const D=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=P.uuid,V=R.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let z=N[V];z===void 0&&(z=P.clone(),N[V]=z,R.addEventListener("dispose",w)),P=z}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Gr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=n.properties.get(P);B.light=_}return P}function M(E,R,_,T,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Gr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const V=e.update(E),N=E.material;if(Array.isArray(N)){const z=V.groups;for(let q=0,Y=z.length;q<Y;q++){const oe=z[q],K=N[oe.materialIndex];if(K&&K.visible){const ne=A(E,K,T,P);E.onBeforeShadow(n,E,R,_,V,ne,oe),n.renderBufferDirect(_,null,V,ne,E,oe),E.onAfterShadow(n,E,R,_,V,ne,oe)}}}else if(N.visible){const z=A(E,N,T,P);E.onBeforeShadow(n,E,R,_,V,z,null),n.renderBufferDirect(_,null,V,z,E,null),E.onAfterShadow(n,E,R,_,V,z,null)}}const B=E.children;for(let V=0,N=B.length;V<N;V++)M(B[V],R,_,T,P)}function w(E){E.target.removeEventListener("dispose",w);for(const _ in c){const T=c[_],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function By(n,e){function t(){let F=!1;const ve=new Ut;let j=null;const _e=new Ut(0,0,0,0);return{setMask:function(we){j!==we&&!F&&(n.colorMask(we,we,we,we),j=we)},setLocked:function(we){F=we},setClear:function(we,ae,Be,De,Rt){Rt===!0&&(we*=De,ae*=De,Be*=De),ve.set(we,ae,Be,De),_e.equals(ve)===!1&&(n.clearColor(we,ae,Be,De),_e.copy(ve))},reset:function(){F=!1,j=null,_e.set(-1,0,0,0)}}}function i(){let F=!1,ve=!1,j=null,_e=null,we=null;return{setReversed:function(ae){if(ve!==ae){const Be=e.get("EXT_clip_control");ae?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;const De=we;we=null,this.setClear(De)}},getReversed:function(){return ve},setTest:function(ae){ae?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ae){j!==ae&&!F&&(n.depthMask(ae),j=ae)},setFunc:function(ae){if(ve&&(ae=x0[ae]),_e!==ae){switch(ae){case nc:n.depthFunc(n.NEVER);break;case ic:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case rc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=ae}},setLocked:function(ae){F=ae},setClear:function(ae){we!==ae&&(we=ae,ve&&(ae=1-ae),n.clearDepth(ae))},reset:function(){F=!1,j=null,_e=null,we=null,ve=!1}}}function s(){let F=!1,ve=null,j=null,_e=null,we=null,ae=null,Be=null,De=null,Rt=null;return{setTest:function(xt){F||(xt?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(xt){ve!==xt&&!F&&(n.stencilMask(xt),ve=xt)},setFunc:function(xt,Kn,ai){(j!==xt||_e!==Kn||we!==ai)&&(n.stencilFunc(xt,Kn,ai),j=xt,_e=Kn,we=ai)},setOp:function(xt,Kn,ai){(ae!==xt||Be!==Kn||De!==ai)&&(n.stencilOp(xt,Kn,ai),ae=xt,Be=Kn,De=ai)},setLocked:function(xt){F=xt},setClear:function(xt){Rt!==xt&&(n.clearStencil(xt),Rt=xt)},reset:function(){F=!1,ve=null,j=null,_e=null,we=null,ae=null,Be=null,De=null,Rt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,S=null,A=null,M=null,w=null,E=null,R=null,_=new We(0,0,0),T=0,P=!1,D=null,B=null,V=null,N=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,oe=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=oe>=1):K.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=oe>=2);let ne=null,re={};const Ue=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),vt=new Ut().fromArray(Ue),st=new Ut().fromArray(Pe);function dt(F,ve,j,_e){const we=new Uint8Array(4),ae=n.createTexture();n.bindTexture(F,ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<j;Be++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ve+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return ae}const Q={};Q[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(sa),ue(!1),pe(Sh),ie(n.CULL_FACE),le(Oi);function ie(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ye(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Xe(F,ve){return h[F]!==ve?(n.bindFramebuffer(F,ve),h[F]=ve,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Te(F,ve){let j=g,_e=!1;if(F){j=d.get(ve),j===void 0&&(j=[],d.set(ve,j));const we=F.textures;if(j.length!==we.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Be=we.length;ae<Be;ae++)j[ae]=n.COLOR_ATTACHMENT0+ae;j.length=we.length,_e=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,_e=!0);_e&&n.drawBuffers(j)}function $e(F){return x!==F?(n.useProgram(F),x=F,!0):!1}const St={[sr]:n.FUNC_ADD,[Gm]:n.FUNC_SUBTRACT,[Hm]:n.FUNC_REVERSE_SUBTRACT};St[Vm]=n.MIN,St[Wm]=n.MAX;const se={[Xm]:n.ZERO,[$m]:n.ONE,[Ym]:n.SRC_COLOR,[yf]:n.SRC_ALPHA,[jm]:n.SRC_ALPHA_SATURATE,[Zm]:n.DST_COLOR,[Km]:n.DST_ALPHA,[qm]:n.ONE_MINUS_SRC_COLOR,[Sf]:n.ONE_MINUS_SRC_ALPHA,[Qm]:n.ONE_MINUS_DST_COLOR,[Jm]:n.ONE_MINUS_DST_ALPHA,[e0]:n.CONSTANT_COLOR,[t0]:n.ONE_MINUS_CONSTANT_COLOR,[n0]:n.CONSTANT_ALPHA,[i0]:n.ONE_MINUS_CONSTANT_ALPHA};function le(F,ve,j,_e,we,ae,Be,De,Rt,xt){if(F===Oi){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),F!==zm){if(F!==p||xt!==P){if((S!==sr||w!==sr)&&(n.blendEquation(n.FUNC_ADD),S=sr,w=sr),xt)switch(F){case Xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.ONE,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",F);break}else switch(F){case Xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bh:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",F);break}A=null,M=null,E=null,R=null,_.set(0,0,0),T=0,p=F,P=xt}return}we=we||ve,ae=ae||j,Be=Be||_e,(ve!==S||we!==w)&&(n.blendEquationSeparate(St[ve],St[we]),S=ve,w=we),(j!==A||_e!==M||ae!==E||Be!==R)&&(n.blendFuncSeparate(se[j],se[_e],se[ae],se[Be]),A=j,M=_e,E=ae,R=Be),(De.equals(_)===!1||Rt!==T)&&(n.blendColor(De.r,De.g,De.b,Rt),_.copy(De),T=Rt),p=F,P=!1}function ce(F,ve){F.side===fi?ye(n.CULL_FACE):ie(n.CULL_FACE);let j=F.side===Rn;ve&&(j=!j),ue(j),F.blending===Xr&&F.transparent===!1?le(Oi):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const _e=F.stencilWrite;o.setTest(_e),_e&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(F){D!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),D=F)}function pe(F){F!==Om?(ie(n.CULL_FACE),F!==B&&(F===Sh?n.cullFace(n.BACK):F===Bm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),B=F}function He(F){F!==V&&(Y&&n.lineWidth(F),V=F)}function ke(F,ve,j){F?(ie(n.POLYGON_OFFSET_FILL),(N!==ve||z!==j)&&(N=ve,z=j,a.getReversed()&&(ve=-ve),n.polygonOffset(ve,j))):ye(n.POLYGON_OFFSET_FILL)}function Ye(F){F?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=n.TEXTURE0+q-1),ne!==F&&(n.activeTexture(F),ne=F)}function I(F,ve,j){j===void 0&&(ne===null?j=n.TEXTURE0+q-1:j=ne);let _e=re[j];_e===void 0&&(_e={type:void 0,texture:void 0},re[j]=_e),(_e.type!==F||_e.texture!==ve)&&(ne!==j&&(n.activeTexture(j),ne=j),n.bindTexture(F,ve||Q[F]),_e.type=F,_e.texture=ve)}function _t(){const F=re[ne];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{n.compressedTexImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function v(){try{n.texSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function k(){try{n.texSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function de(){try{n.texStorage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function fe(){try{n.texStorage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function Z(){try{n.texImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function te(){try{n.texImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function me(F){return f[F]!==void 0?f[F]:n.getParameter(F)}function Fe(F,ve){f[F]!==ve&&(n.pixelStorei(F,ve),f[F]=ve)}function xe(F){vt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),vt.copy(F))}function ge(F){st.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),st.copy(F))}function Oe(F,ve){let j=c.get(ve);j===void 0&&(j=new WeakMap,c.set(ve,j));let _e=j.get(F);_e===void 0&&(_e=n.getUniformBlockIndex(ve,F.name),j.set(F,_e))}function Ve(F,ve){const _e=c.get(ve).get(F);l.get(ve)!==_e&&(n.uniformBlockBinding(ve,_e,F.__bindingPointIndex),l.set(ve,_e))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ne=null,re={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,S=null,A=null,M=null,w=null,E=null,R=null,_=new We(0,0,0),T=0,P=!1,D=null,B=null,V=null,N=null,z=null,vt.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ye,bindFramebuffer:Xe,drawBuffers:Te,useProgram:$e,setBlending:le,setMaterial:ce,setFlipSided:ue,setCullFace:pe,setLineWidth:He,setPolygonOffset:ke,setScissorTest:Ye,activeTexture:Ze,bindTexture:I,unbindTexture:_t,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:Z,texImage3D:te,pixelStorei:Fe,getParameter:me,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:fe,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:xe,viewport:ge,reset:je}}function ky(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return g?new OffscreenCanvas(C,v):Eo("canvas")}function m(C,v,k){let W=1;const J=rt(C);if((J.width>k||J.height>k)&&(W=k/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(W*J.width),fe=Math.floor(W*J.height);h===void 0&&(h=x(de,fe));const Z=v?x(de,fe):h;return Z.width=de,Z.height=fe,Z.getContext("2d").drawImage(C,0,0,de,fe),Ke("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+de+"x"+fe+")."),Z}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,v,k,W,J,de=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;W&&(fe=e.get("EXT_texture_norm16"),fe||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8),k===n.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),k===n.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),v===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8),k===n.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),k===n.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),k===n.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),v===n.RGBA){const te=de?wo:ut.getTransfer(J);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=te===bt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),k===n.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(C,v){let k;return C?v===null||v===Mi||v===aa?k=n.DEPTH24_STENCIL8:v===ti?k=n.DEPTH32F_STENCIL8:v===ra&&(k=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===aa?k=n.DEPTH_COMPONENT24:v===ti?k=n.DEPTH_COMPONENT32F:v===ra&&(k=n.DEPTH_COMPONENT16),k}function E(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==vn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function R(C){const v=C.target;v.removeEventListener("dispose",R),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function _(C){const v=C.target;v.removeEventListener("dispose",_),D(v)}function T(C){const v=i.get(C);if(v.__webglInit===void 0)return;const k=C.source,W=d.get(k);if(W){const J=W[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys(W).length===0&&d.delete(k)}i.remove(C)}function P(C){const v=i.get(C);n.deleteTexture(v.__webglTexture);const k=C.source,W=d.get(k);delete W[v.__cacheKey],a.memory.textures--}function D(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let J=0;J<v.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[W][J]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=C.textures;for(let W=0,J=k.length;W<J;W++){const de=i.get(k[W]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(k[W])}i.remove(C)}let B=0;function V(){B=0}function N(){return B}function z(C){B=C}function q(){const C=B;return C>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function Y(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function oe(C,v){const k=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const W=C.image;if(W===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function K(C,v){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ye(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function ne(C,v){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ye(k,C,v);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function re(C,v){const k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Xe(k,C,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const Ue={[cc]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},Pe={[ln]:n.NEAREST,[a0]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[ul]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},vt={[u0]:n.NEVER,[m0]:n.ALWAYS,[h0]:n.LESS,[yu]:n.LEQUAL,[d0]:n.EQUAL,[Su]:n.GEQUAL,[f0]:n.GREATER,[p0]:n.NOTEQUAL};function st(C,v){if(v.type===ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===vn||v.magFilter===ul||v.magFilter===Aa||v.magFilter===gs||v.minFilter===vn||v.minFilter===ul||v.minFilter===Aa||v.minFilter===gs)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ue[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ue[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ue[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Pe[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,vt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==Aa&&v.minFilter!==gs||v.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function dt(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",R));const W=v.source;let J=d.get(W);J===void 0&&(J={},d.set(W,J));const de=Y(v);if(de!==C.__cacheKey){J[de]===void 0&&(J[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[de].usedTimes++;const fe=J[C.__cacheKey];fe!==void 0&&(J[C.__cacheKey].usedTimes--,fe.usedTimes===0&&P(v)),C.__cacheKey=de,C.__webglTexture=J[de].texture}return k}function Q(C,v,k){return Math.floor(Math.floor(C/k)/v)}function ie(C,v,k,W){const de=C.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,W,v.data);else{de.sort((Fe,xe)=>Fe.start-xe.start);let fe=0;for(let Fe=1;Fe<de.length;Fe++){const xe=de[fe],ge=de[Fe],Oe=xe.start+xe.count,Ve=Q(ge.start,v.width,4),je=Q(xe.start,v.width,4);ge.start<=Oe+1&&Ve===je&&Q(ge.start+ge.count-1,v.width,4)===Ve?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++fe,de[fe]=ge)}de.length=fe+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Fe=0,xe=de.length;Fe<xe;Fe++){const ge=de[Fe],Oe=Math.floor(ge.start/4),Ve=Math.ceil(ge.count/4),je=Oe%v.width,F=Math.floor(Oe/v.width),ve=Ve,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,je,F,ve,j,k,W,v.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function ye(C,v,k){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const J=dt(C,v),de=v.source;t.bindTexture(W,C.__webglTexture,n.TEXTURE0+k);const fe=i.get(de);if(de.version!==fe.__version||J===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=ut.getPrimaries(ut.workingColorSpace),_e=v.colorSpace===Ji?null:ut.getPrimaries(v.colorSpace),we=v.colorSpace===Ji||j===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let te=m(v.image,!1,s.maxTextureSize);te=_t(v,te);const me=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type);let xe=M(v.internalFormat,me,Fe,v.normalized,v.colorSpace,v.isVideoTexture);st(W,v);let ge;const Oe=v.mipmaps,Ve=v.isVideoTexture!==!0,je=fe.__version===void 0||J===!0,F=de.dataReady,ve=E(v,te);if(v.isDepthTexture)xe=w(v.format===vs,v.type),je&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,xe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,xe,te.width,te.height,0,me,Fe,null));else if(v.isDataTexture)if(Oe.length>0){Ve&&je&&t.texStorage2D(n.TEXTURE_2D,ve,xe,Oe[0].width,Oe[0].height);for(let j=0,_e=Oe.length;j<_e;j++)ge=Oe[j],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,Fe,ge.data):t.texImage2D(n.TEXTURE_2D,j,xe,ge.width,ge.height,0,me,Fe,ge.data);v.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(n.TEXTURE_2D,ve,xe,te.width,te.height),F&&ie(v,te,me,Fe)):t.texImage2D(n.TEXTURE_2D,0,xe,te.width,te.height,0,me,Fe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,xe,Oe[0].width,Oe[0].height,te.depth);for(let j=0,_e=Oe.length;j<_e;j++)if(ge=Oe[j],v.format!==ni)if(me!==null)if(Ve){if(F)if(v.layerUpdates.size>0){const we=dd(ge.width,ge.height,v.format,v.type);for(const ae of v.layerUpdates){const Be=ge.data.subarray(ae*we/ge.data.BYTES_PER_ELEMENT,(ae+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ae,ge.width,ge.height,1,me,Be)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,te.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,xe,ge.width,ge.height,te.depth,0,ge.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,te.depth,me,Fe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,xe,ge.width,ge.height,te.depth,0,me,Fe,ge.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ve&&je&&t.texStorage2D(n.TEXTURE_2D,ve,xe,Oe[0].width,Oe[0].height);for(let j=0,_e=Oe.length;j<_e;j++)ge=Oe[j],v.format!==ni?me!==null?Ve?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,j,xe,ge.width,ge.height,0,ge.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,Fe,ge.data):t.texImage2D(n.TEXTURE_2D,j,xe,ge.width,ge.height,0,me,Fe,ge.data)}else if(v.isDataArrayTexture)if(Ve){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,xe,te.width,te.height,te.depth),F)if(v.layerUpdates.size>0){const j=dd(te.width,te.height,v.format,v.type);for(const _e of v.layerUpdates){const we=te.data.subarray(_e*j/te.data.BYTES_PER_ELEMENT,(_e+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,te.width,te.height,1,me,Fe,we)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Fe,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,te.width,te.height,te.depth,0,me,Fe,te.data);else if(v.isData3DTexture)Ve?(je&&t.texStorage3D(n.TEXTURE_3D,ve,xe,te.width,te.height,te.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Fe,te.data)):t.texImage3D(n.TEXTURE_3D,0,xe,te.width,te.height,te.depth,0,me,Fe,te.data);else if(v.isFramebufferTexture){if(je)if(Ve)t.texStorage2D(n.TEXTURE_2D,ve,xe,te.width,te.height);else{let j=te.width,_e=te.height;for(let we=0;we<ve;we++)t.texImage2D(n.TEXTURE_2D,we,xe,j,_e,0,me,Fe,null),j>>=1,_e>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),f.add(v),j.onpaint=_e=>{const we=_e.changedElements;for(const ae of f)we.includes(ae.image)&&(ae.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const we=n.RGBA,ae=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,ae,Be,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ve&&je){const j=rt(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ve,xe,j.width,j.height)}for(let j=0,_e=Oe.length;j<_e;j++)ge=Oe[j],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me,Fe,ge):t.texImage2D(n.TEXTURE_2D,j,xe,me,Fe,ge);v.generateMipmaps=!1}else if(Ve){if(je){const j=rt(te);t.texStorage2D(n.TEXTURE_2D,ve,xe,j.width,j.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Fe,te)}else t.texImage2D(n.TEXTURE_2D,0,xe,me,Fe,te);p(v)&&S(W),fe.__version=de.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Xe(C,v,k){if(v.image.length!==6)return;const W=dt(C,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const de=i.get(J);if(J.version!==de.__version||W===!0){t.activeTexture(n.TEXTURE0+k);const fe=ut.getPrimaries(ut.workingColorSpace),Z=v.colorSpace===Ji?null:ut.getPrimaries(v.colorSpace),te=v.colorSpace===Ji||fe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const me=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!me&&!Fe?xe[ae]=m(v.image[ae],!0,s.maxCubemapSize):xe[ae]=Fe?v.image[ae].image:v.image[ae],xe[ae]=_t(v,xe[ae]);const ge=xe[0],Oe=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type),je=M(v.internalFormat,Oe,Ve,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,ve=de.__version===void 0||W===!0,j=J.dataReady;let _e=E(v,ge);st(n.TEXTURE_CUBE_MAP,v);let we;if(me){F&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,ge.width,ge.height);for(let ae=0;ae<6;ae++){we=xe[ae].mipmaps;for(let Be=0;Be<we.length;Be++){const De=we[Be];v.format!==ni?Oe!==null?F?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,De.width,De.height,Oe,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,je,De.width,De.height,0,De.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,De.width,De.height,Oe,Ve,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,je,De.width,De.height,0,Oe,Ve,De.data)}}}else{if(we=v.mipmaps,F&&ve){we.length>0&&_e++;const ae=rt(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Oe,Ve,xe[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,xe[ae].width,xe[ae].height,0,Oe,Ve,xe[ae].data);for(let Be=0;Be<we.length;Be++){const Rt=we[Be].image[ae].image;F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,Rt.width,Rt.height,Oe,Ve,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,je,Rt.width,Rt.height,0,Oe,Ve,Rt.data)}}else{F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,Ve,xe[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Oe,Ve,xe[ae]);for(let Be=0;Be<we.length;Be++){const De=we[Be];F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,Oe,Ve,De.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,je,Oe,Ve,De.image[ae])}}}p(v)&&S(n.TEXTURE_CUBE_MAP),de.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Te(C,v,k,W,J,de){const fe=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),te=M(k.internalFormat,fe,Z,k.normalized,k.colorSpace),me=i.get(v),Fe=i.get(k);if(Fe.__renderTarget=v,!me.__hasExternalTextures){const xe=Math.max(1,v.width>>de),ge=Math.max(1,v.height>>de);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,de,te,xe,ge,v.depth,0,fe,Z,null):t.texImage2D(J,de,te,xe,ge,0,fe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ze(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,Fe.__webglTexture,0,Ye(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,Fe.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(C,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){const W=v.depthTexture,J=W&&W.isDepthTexture?W.type:null,de=w(v.stencilBuffer,J),fe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(v),de,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(v),de,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,de,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,C)}else{const W=v.textures;for(let J=0;J<W.length;J++){const de=W[J],fe=r.convert(de.format,de.colorSpace),Z=r.convert(de.type),te=M(de.internalFormat,fe,Z,de.normalized,de.colorSpace);Ze(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(v),te,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(v),te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(C,v,k){const W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),st(n.TEXTURE_CUBE_MAP,v.depthTexture);const me=r.convert(v.depthTexture.format),Fe=r.convert(v.depthTexture.type);let xe;v.depthTexture.format===Gi?xe=n.DEPTH_COMPONENT24:v.depthTexture.format===vs&&(xe=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,v.width,v.height,0,me,Fe,null)}}else oe(v.depthTexture,0);const de=J.__webglTexture,fe=Ye(v),Z=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,te=v.depthTexture.format===vs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Gi)Ze(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,de,0);else if(v.depthTexture.format===vs)Ze(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){const v=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=W}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)St(v.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?St(v.__webglFramebuffer[0],C,0):St(v.__webglFramebuffer,C,0)}else if(k){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),$e(v.__webglDepthbuffer[W],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,de)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),$e(v.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(C,v,k){const W=i.get(C);v!==void 0&&Te(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&se(C)}function ce(C){const v=C.texture,k=i.get(C),W=i.get(v);C.addEventListener("dispose",_);const J=C.textures,de=C.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),de){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let te=0;te<v.mipmaps.length;te++)k.__webglFramebuffer[Z][te]=n.createFramebuffer()}else k.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[Z]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Z=0,te=J.length;Z<te;Z++){const me=i.get(J[Z]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ze(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){const te=J[Z];k.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const me=r.convert(te.format,te.colorSpace),Fe=r.convert(te.type),xe=M(te.internalFormat,me,Fe,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),ge=Ye(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),st(n.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Te(k.__webglFramebuffer[Z][te],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Te(k.__webglFramebuffer[Z],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(v)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Z=0,te=J.length;Z<te;Z++){const me=J[Z],Fe=i.get(me);let xe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Fe.__webglTexture),st(xe,me),Te(k.__webglFramebuffer,C,me,n.COLOR_ATTACHMENT0+Z,xe,0),p(me)&&S(xe)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),st(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Te(k.__webglFramebuffer[te],C,v,n.COLOR_ATTACHMENT0,Z,te);else Te(k.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,Z,0);p(v)&&S(Z),t.unbindTexture()}C.depthBuffer&&se(C)}function ue(C){const v=C.textures;for(let k=0,W=v.length;k<W;k++){const J=v[k];if(p(J)){const de=A(C),fe=i.get(J).__webglTexture;t.bindTexture(de,fe),S(de),t.unbindTexture()}}}const pe=[],He=[];function ke(C){if(C.samples>0){if(Ze(C)===!1){const v=C.textures,k=C.width,W=C.height;let J=n.COLOR_BUFFER_BIT;const de=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(C),Z=v.length>1;if(Z)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<v.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Fe=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,J,n.NEAREST),l===!0&&(pe.length=0,He.length=0,pe.push(n.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(pe.push(de),He.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Fe=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ye(C){return Math.min(s.maxSamples,C.samples)}function Ze(C){const v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(C){const v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function _t(C,v){const k=C.colorSpace,W=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==bo&&k!==Ji&&(ut.getTransfer(k)===bt?(W!==ni||J!==Un)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",k)),v}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=K,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=le,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zy(n,e){function t(i,s=Ji){let r;const a=ut.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lf)return n.BYTE;if(i===If)return n.SHORT;if(i===ra)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Uf)return n.ALPHA;if(i===Ff)return n.RGB;if(i===ni)return n.RGBA;if(i===Gi)return n.DEPTH_COMPONENT;if(i===vs)return n.DEPTH_STENCIL;if(i===vu)return n.RED;if(i===_u)return n.RED_INTEGER;if(i===As)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===Mu)return n.RGBA_INTEGER;if(i===co||i===uo||i===ho||i===fo)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===dc||i===fc||i===pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===vc||i===_c||i===xc||i===yo||i===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_c)return r.COMPRESSED_R11_EAC;if(i===xc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yo)return r.COMPRESSED_RG11_EAC;if(i===Mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yc||i===Sc||i===bc||i===wc||i===Ec||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Ic||i===Dc||i===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uc||i===Fc||i===Oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Uc)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bc||i===kc||i===So||i===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
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

}`;class Vy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new qf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:Gy,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wy extends Ls{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Vy,p={},S=t.getContextAttributes();let A=null,M=null;const w=[],E=[],R=new he;let _=null,T=null;const P=new Vn;P.viewport=new Ut;const D=new Vn;D.viewport=new Ut;const B=[P,D],V=new Zg;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=w[Q];return ie===void 0&&(ie=new vl,w[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=w[Q];return ie===void 0&&(ie=new vl,w[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=w[Q];return ie===void 0&&(ie=new vl,w[Q]=ie),ie.getHandSpace()};function q(Q){const ie=E.indexOf(Q.inputSource);if(ie===-1)return;const ye=w[ie];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||a),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<w.length;Q++){const ie=E[Q];ie!==null&&(E[Q]=null,w[Q].disconnect(ie))}N=null,z=null,m.reset();for(const Q in p)delete p[Q];if(e.setRenderTarget(A),d=null,h=null,f=null,s=null,M=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",oe),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Xe=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?vs:Gi,Xe=S.stencil?aa:Mi);const $e={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Yn(h.textureWidth,h.textureHeight,{format:ni,type:Un,depthTexture:new ca(h.textureWidth,h.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Yn(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(Q){for(let ie=0;ie<Q.removed.length;ie++){const ye=Q.removed[ie],Xe=E.indexOf(ye);Xe>=0&&(E[Xe]=null,w[Xe].disconnect(ye))}for(let ie=0;ie<Q.added.length;ie++){const ye=Q.added[ie];let Xe=E.indexOf(ye);if(Xe===-1){for(let $e=0;$e<w.length;$e++)if($e>=E.length){E.push(ye),Xe=$e;break}else if(E[$e]===null){E[$e]=ye,Xe=$e;break}if(Xe===-1)break}const Te=w[Xe];Te&&Te.connect(ye)}}const K=new L,ne=new L;function re(Q,ie,ye){K.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(ye.matrixWorld);const Xe=K.distanceTo(ne),Te=ie.projectionMatrix.elements,$e=ye.projectionMatrix.elements,St=Te[14]/(Te[10]-1),se=Te[14]/(Te[10]+1),le=(Te[9]+1)/Te[5],ce=(Te[9]-1)/Te[5],ue=(Te[8]-1)/Te[0],pe=($e[8]+1)/$e[0],He=St*ue,ke=St*pe,Ye=Xe/(-ue+pe),Ze=Ye*-ue;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ze),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const I=St+Ye,_t=se+Ye,rt=He-Ze,C=ke+(Xe-Ze),v=le*se/_t*I,k=ce*se/_t*I;Q.projectionMatrix.makePerspective(rt,C,v,k,I,_t),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ue(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,ye=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),V.near=D.near=P.near=ie,V.far=D.far=P.far=ye,(N!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,z=V.far),V.layers.mask=Q.layers.mask|6,P.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const Xe=Q.parent,Te=V.cameras;Ue(V,Xe);for(let $e=0;$e<Te.length;$e++)Ue(Te[$e],Xe);Te.length===2?re(V,P,D):V.projectionMatrix.copy(P.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),Pe(Q,V,Xe)};function Pe(Q,ie,ye){ye===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=la*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Q){return p[Q]};let vt=null;function st(Q,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Xe=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,Xe=!0);for(let se=0;se<ye.length;se++){const le=ye[se];let ce=null;if(d!==null)ce=d.getViewport(le);else{const pe=f.getViewSubImage(h,le);ce=pe.viewport,se===0&&(e.setRenderTargetTextures(M,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(M))}let ue=B[se];ue===void 0&&(ue=new Vn,ue.layers.enable(se),ue.viewport=new Ut,B[se]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ce.x,ce.y,ce.width,ce.height),se===0&&(V.matrix.copy(ue.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Xe===!0&&V.cameras.push(ue)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const se=f.getDepthInformation(ye[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let se=0;se<ye.length;se++){const le=ye[se].camera;if(le){let ce=p[le];ce||(ce=new qf,p[le]=ce);const ue=f.getCameraImage(le);ce.sourceTexture=ue}}}}for(let ye=0;ye<w.length;ye++){const Xe=E[ye],Te=w[ye];Xe!==null&&Te!==void 0&&Te.update(Xe,ie,c||a)}vt&&vt(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const dt=new ap;dt.setAnimationLoop(st),this.setAnimationLoop=function(Q){vt=Q},this.dispose=function(){}}}const Xy=new ht,fp=new Qe;fp.set(-1,0,0,0,1,0,0,0,1);function $y(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ip(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),A=S.envMap,M=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yy(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const E=w.program;i.uniformBlockBinding(M,E)}function c(M,w){let E=s[M.id];E===void 0&&(m(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",S));const R=w.program;i.updateUBOMapping(M,R);const _=e.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function u(M){const w=f();M.__bindingPointIndex=w;const E=n.createBuffer(),R=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=s[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,T=E.length;_<T;_++){const P=E[_];if(Array.isArray(P))for(let D=0,B=P.length;D<B;D++)d(P[D],_,D,R);else d(P,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,E,R){if(x(M,w,E,R)===!0){const _=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){const B=T[D],V=p(B);g(B,M.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function g(M,w,E){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,E)}function x(M,w,E,R){const _=M.value,T=w+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const P=R[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(M){const w=M.uniforms;let E=0;const R=16;for(let T=0,P=w.length;T<P;T++){const D=Array.isArray(w[T])?w[T]:[w[T]];for(let B=0,V=D.length;B<V;B++){const N=D[B],z=Array.isArray(N.value)?N.value:[N.value];for(let q=0,Y=z.length;q<Y;q++){const oe=z[q],K=p(oe),ne=E%R,re=ne%K.boundary,Ue=ne+re;E+=re,Ue!==0&&R-Ue<K.storage&&(E+=R-Ue),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=K.storage}}}const _=E%R;return _>0&&(E+=R-_),M.__size=E,M.__cache={},this}function p(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",M),w}function S(M){const w=M.target;w.removeEventListener("dispose",S);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function Ky(){return ci===null&&(ci=new $f(qy,16,16,As,yi),ci.name="DFG_LUT",ci.minFilter=vn,ci.magFilter=vn,ci.wrapS=Ui,ci.wrapT=Ui,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class Jy{constructor(e={}){const{canvas:t=v0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=d,m=new Set([Mu,xu,_u]),p=new Set([Un,Mi,ra,aa,mu,gu]),S=new Uint32Array(4),A=new Int32Array(4),M=new L;let w=null,E=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,B=null,V=null,N=null,z=null;this._outputColorSpace=mn;let q=0,Y=0,oe=null,K=-1,ne=null;const re=new Ut,Ue=new Ut;let Pe=null;const vt=new We(0);let st=0,dt=t.width,Q=t.height,ie=1,ye=null,Xe=null;const Te=new Ut(0,0,dt,Q),$e=new Ut(0,0,dt,Q);let St=!1;const se=new Tu;let le=!1,ce=!1;const ue=new ht,pe=new L,He=new Ut,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Ze(){return oe===null?ie:1}let I=i;function _t(y,U){return t.getContext(y,U)}let rt,C,v,k,W,J,de,fe,Z,te,me,Fe,xe,ge,Oe,Ve,je,F,ve,j,_e,we,ae;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Kn,!1),I===null){const U="webgl2";if(I=_t(U,y),I===null)throw _t(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(y){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Kn,!1),ct("WebGLRenderer: "+y.message),y}function Be(){rt=new Kx(I),rt.init(),_e=new zy(I,rt),C=new kx(I,rt,e,_e),v=new By(I,rt),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),V=I.createFramebuffer(),N=I.createFramebuffer(),z=I.createFramebuffer(),k=new Qx(I),W=new wy,J=new ky(I,rt,v,W,C,_e,k),de=new qx(P),fe=new ev(I),we=new Ox(I,fe),Z=new Jx(I,fe,k,we),te=new eM(I,Z,fe,we,k),F=new jx(I,C,J),Oe=new zx(W),me=new by(P,de,rt,C,we,Oe),Fe=new $y(P,W),xe=new Ty,ge=new Iy(rt),je=new Fx(P,de,v,te,g,l),Ve=new Oy(P,te,C),ae=new Yy(I,k,C,v),ve=new Bx(I,rt,k),j=new Zx(I,rt,k),k.programs=me.programs,P.capabilities=C,P.extensions=rt,P.properties=W,P.renderLists=xe,P.shadowMap=Ve,P.state=v,P.info=k}x!==Un&&(T=new nM(x,t.width,t.height,o,s,r));const De=new Wy(P,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(dt,Q,!1))},this.getSize=function(y){return y.set(dt,Q)},this.setSize=function(y,U,X=!0){if(De.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=y,Q=U,t.width=Math.floor(y*ie),t.height=Math.floor(U*ie),X===!0&&(t.style.width=y+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(dt*ie,Q*ie).floor()},this.setDrawingBufferSize=function(y,U,X){dt=y,Q=U,ie=X,t.width=Math.floor(y*X),t.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===Un){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(re)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,U,X,G){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,U,X,G),v.viewport(re.copy(Te).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,U,X,G){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,U,X,G),v.scissor(Ue.copy($e).multiplyScalar(ie).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(y){v.setScissorTest(St=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){Xe=y},this.getClearColor=function(y){return y.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,X=!0){let G=0;if(y){let H=!1;if(oe!==null){const be=oe.texture.format;H=m.has(be)}if(H){const be=oe.texture.type,Re=p.has(be),Se=je.getClearColor(),Le=je.getClearAlpha(),Ne=Se.r,tt=Se.g,at=Se.b;Re?(S[0]=Ne,S[1]=tt,S[2]=at,S[3]=Le,I.clearBufferuiv(I.COLOR,0,S)):(A[0]=Ne,A[1]=tt,A[2]=at,A[3]=Le,I.clearBufferiv(I.COLOR,0,A))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Kn,!1),je.dispose(),xe.dispose(),ge.dispose(),W.dispose(),de.dispose(),te.dispose(),we.dispose(),ae.dispose(),me.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ku),De.removeEventListener("sessionend",Ju),os.stop()};function Rt(y){y.preventDefault(),To("WebGLRenderer: Context Lost."),D=!0}function xt(){To("WebGLRenderer: Context Restored."),D=!1;const y=k.autoReset,U=Ve.enabled,X=Ve.autoUpdate,G=Ve.needsUpdate,H=Ve.type;Be(),k.autoReset=y,Ve.enabled=U,Ve.autoUpdate=X,Ve.needsUpdate=G,Ve.type=H}function Kn(y){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ai(y){const U=y.target;U.removeEventListener("dispose",ai),Fp(U)}function Fp(y){Op(y),W.remove(y)}function Op(y){const U=W.get(y).programs;U!==void 0&&(U.forEach(function(X){me.releaseProgram(X)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,G,H,be){U===null&&(U=ke);const Re=H.isMesh&&H.matrixWorld.determinantAffine()<0,Se=zp(y,U,X,G,H);v.setMaterial(G,Re);let Le=X.index,Ne=1;if(G.wireframe===!0){if(Le=Z.getWireframeAttribute(X),Le===void 0)return;Ne=2}const tt=X.drawRange,at=X.attributes.position;let Ie=tt.start*Ne,Mt=(tt.start+tt.count)*Ne;be!==null&&(Ie=Math.max(Ie,be.start*Ne),Mt=Math.min(Mt,(be.start+be.count)*Ne)),Le!==null?(Ie=Math.max(Ie,0),Mt=Math.min(Mt,Le.count)):at!=null&&(Ie=Math.max(Ie,0),Mt=Math.min(Mt,at.count));const Vt=Mt-Ie;if(Vt<0||Vt===1/0)return;we.setup(H,G,Se,X,Le);let It,At=ve;if(Le!==null&&(It=fe.get(Le),At=j,At.setIndex(It)),H.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Ze()),At.setMode(I.LINES)):At.setMode(I.TRIANGLES);else if(H.isLine){let dn=G.linewidth;dn===void 0&&(dn=1),v.setLineWidth(dn*Ze()),H.isLineSegments?At.setMode(I.LINES):H.isLineLoop?At.setMode(I.LINE_LOOP):At.setMode(I.LINE_STRIP)}else H.isPoints?At.setMode(I.POINTS):H.isSprite&&At.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))At.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const dn=H._multiDrawStarts,Ae=H._multiDrawCounts,xn=H._multiDrawCount,ft=Le?fe.get(Le).bytesPerElement:1,zn=W.get(G).currentProgram.getUniforms();for(let oi=0;oi<xn;oi++)zn.setValue(I,"_gl_DrawID",oi),At.render(dn[oi]/ft,Ae[oi])}else if(H.isInstancedMesh)At.renderInstances(Ie,Vt,H.count);else if(X.isInstancedBufferGeometry){const dn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,dn);At.renderInstances(Ie,Vt,Ae)}else At.render(Ie,Vt)};function qu(y,U,X,G){B!==null&&y.isNodeMaterial&&B.setObject(G,y),le===!0&&Oe.setState(y,X,!1),y.transparent===!0&&y.side===fi&&y.forceSinglePass===!1?(y.side=Rn,y.needsUpdate=!0,Ea(y,U,G),y.side=Es,y.needsUpdate=!0,Ea(y,U,G),y.side=fi):Ea(y,U,G)}this.compile=function(y,U,X=null){X===null&&(X=y),B!==null&&B.renderStart(y,U,X),E=ge.get(X),E.init(U),_.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),ce=this.localClippingEnabled,le=Oe.init(this.clippingPlanes,ce),le===!0&&Oe.setGlobalState(this.clippingPlanes,U),B!==null&&Ve.render(E.state.shadowsArray,X,U);const G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const be=H.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){const Se=be[Re];qu(Se,X,U,H),G.add(Se)}else qu(be,X,U,H),G.add(be)}),E=_.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(y,U,X=null){const G=this.compile(y,U,X);return new Promise(H=>{function be(){if(G.forEach(function(Re){const Le=W.get(Re).currentProgram;(Le===void 0||Le.isReady())&&G.delete(Re)}),G.size===0){H(y);return}setTimeout(be,10)}rt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rl=null;function Bp(y){rl&&rl(y)}function Ku(){os.stop()}function Ju(){os.start()}const os=new ap;os.setAnimationLoop(Bp),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(y){rl=y,De.setAnimationLoop(y),y===null?os.stop():os.start()},De.addEventListener("sessionstart",Ku),De.addEventListener("sessionend",Ju),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(y,U);const X=De.enabled===!0&&De.isPresenting===!0,G=T!==null&&(oe===null||X)&&T.begin(P,oe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(U),U=De.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,U,oe),E=ge.get(y,_.length),E.init(U),E.state.textureUnits=J.getTextureUnits(),_.push(E),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(ue,pi,U.reversedDepth),ce=this.localClippingEnabled,le=Oe.init(this.clippingPlanes,ce),w=xe.get(y,R.length),w.init(),R.push(w),De.enabled===!0&&De.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&al(Re,U,-1/0,P.sortObjects)}al(y,U,0,P.sortObjects),w.finish(),B!==null&&B.updateLights(E.state.lightsArray),P.sortObjects===!0&&w.sort(ye,Xe),Ye=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Ye&&je.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Oe.beginShadows();const H=E.state.shadowsArray;if(Ve.render(H,y,U),le===!0&&Oe.endShadows(),(G&&T.hasRenderPass())===!1){const Re=w.opaque,Se=w.transmissive;if(E.setupLights(),U.isArrayCamera){const Le=U.cameras;if(Se.length>0)for(let Ne=0,tt=Le.length;Ne<tt;Ne++){const at=Le[Ne];Qu(Re,Se,y,at)}Ye&&je.render(y);for(let Ne=0,tt=Le.length;Ne<tt;Ne++){const at=Le[Ne];Zu(w,y,at,at.viewport)}}else Se.length>0&&Qu(Re,Se,y,U),Ye&&je.render(y),Zu(w,y,U)}oe!==null&&Y===0&&(J.updateMultisampleRenderTarget(oe),J.updateRenderTargetMipmap(oe)),G&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,U),we.resetDefaultState(),K=-1,ne=null,_.pop(),_.length>0?(E=_[_.length-1],J.setTextureUnits(E.state.textureUnits),le===!0&&Oe.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,B!==null&&B.renderEnd()};function al(y,U,X,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(se)){G&&He.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ue);const Re=te.update(y),Se=y.material;Se.visible&&w.push(y,Re,Se,X,He.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(se))){const Re=te.update(y),Se=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),He.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),He.copy(Re.boundingSphere.center)),He.applyMatrix4(y.matrixWorld).applyMatrix4(ue)),Array.isArray(Se)){const Le=Re.groups;for(let Ne=0,tt=Le.length;Ne<tt;Ne++){const at=Le[Ne],Ie=Se[at.materialIndex];Ie&&Ie.visible&&w.push(y,Re,Ie,X,He.z,at,U)}}else Se.visible&&w.push(y,Re,Se,X,He.z,null,U)}}const be=y.children;for(let Re=0,Se=be.length;Re<Se;Re++)al(be[Re],U,X,G)}function Zu(y,U,X,G){const{opaque:H,transmissive:be,transparent:Re}=y;E.setupLightsView(X),le===!0&&Oe.setGlobalState(P.clippingPlanes,X),G&&v.viewport(re.copy(G)),H.length>0&&wa(H,U,X),be.length>0&&wa(be,U,X),Re.length>0&&wa(Re,U,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Qu(y,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Ie=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Yn(1,1,{generateMipmaps:!0,type:Ie?yi:Un,minFilter:gs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const be=E.state.transmissionRenderTarget[G.id],Re=G.viewport||re;be.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const Se=P.getRenderTarget(),Le=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(be),P.getClearColor(vt),st=P.getClearAlpha(),st<1&&P.setClearColor(16777215,.5),P.clear(),Ye&&je.render(X);const tt=P.toneMapping;P.toneMapping=vi;const at=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),le===!0&&Oe.setGlobalState(P.clippingPlanes,G),wa(y,X,G),J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Mt=0,Vt=U.length;Mt<Vt;Mt++){const It=U[Mt],{object:At,geometry:dn,material:Ae,group:xn}=It;if(Ae.side===fi&&At.layers.test(G.layers)){const ft=Ae.side;Ae.side=Rn,Ae.needsUpdate=!0,ju(At,X,G,dn,Ae,xn),Ae.side=ft,Ae.needsUpdate=!0,Ie=!0}}Ie===!0&&(J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be))}P.setRenderTarget(Se,Le,Ne),P.setClearColor(vt,st),at!==void 0&&(G.viewport=at),P.toneMapping=tt}function wa(y,U,X){const G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,be=y.length;H<be;H++){const Re=y[H],{object:Se,geometry:Le,group:Ne}=Re;let tt=Re.material;tt.allowOverride===!0&&G!==null&&(tt=G),Se.layers.test(X.layers)&&ju(Se,U,X,Le,tt,Ne)}}function ju(y,U,X,G,H,be){B!==null&&H.isNodeMaterial&&B.setObject(y,H),y.onBeforeRender(P,U,X,G,H,be),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(P,U,X,G,y,be),H.transparent===!0&&H.side===fi&&H.forceSinglePass===!1?(H.side=Rn,H.needsUpdate=!0,P.renderBufferDirect(X,U,G,H,y,be),H.side=Es,H.needsUpdate=!0,P.renderBufferDirect(X,U,G,H,y,be),H.side=fi):P.renderBufferDirect(X,U,G,H,y,be),y.onAfterRender(P,U,X,G,H,be)}function Ea(y,U,X){U.isScene!==!0&&(U=ke);const G=W.get(y),H=E.state.lights,be=E.state.shadowsArray,Re=H.state.version,Se=me.getParameters(y,H.state,be,U,X,E.state.lightProbeGridArray),Le=me.getProgramCacheKey(Se);let Ne=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=de.get(y.envMap||G.environment,tt),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",ai),Ne=new Map,G.programs=Ne);let at=Ne.get(Le);if(at!==void 0){if(G.currentProgram===at&&G.lightsStateVersion===Re)return th(y,Se),at}else Se.uniforms=me.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,X,Se),y.onBeforeCompile(Se,P),at=me.acquireProgram(Se,Le),Ne.set(Le,at),G.uniforms=Se.uniforms;const Ie=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),th(y,Se),G.needsLights=Hp(y),G.lightsStateVersion=Re,G.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.sunLights.value=H.state.sun,Ie.sunLightShadows.value=H.state.sunShadow,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.sunShadowMatrix.value=H.state.sunShadowMatrix,Ie.sunShadowCascade.value=H.state.sunShadowCascade,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=at,G.uniformsList=null,at}function eh(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=po.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function th(y,U){const X=W.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function kp(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let X=0,G=y.length;X<G;X++){const H=y[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function zp(y,U,X,G,H){U.isScene!==!0&&(U=ke),J.resetTextureUnits();const be=U.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,Se=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ut.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=de.get(G.envMap||Re,Le),tt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,at=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!X.morphAttributes.position,Mt=!!X.morphAttributes.normal,Vt=!!X.morphAttributes.color;let It=vi;G.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(It=P.toneMapping);const At=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dn=At!==void 0?At.length:0,Ae=W.get(G),xn=E.state.lights;if(le===!0&&(ce===!0||y!==ne)){const Pt=y===ne&&G.id===K;Oe.setState(G,y,Pt)}let ft=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==xn.state.version||Ae.outputColorSpace!==Se||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Ne||G.fog===!0&&Ae.fog!==be||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Oe.numPlanes||Ae.numIntersection!==Oe.numIntersection)||Ae.vertexAlphas!==tt||Ae.vertexTangents!==at||Ae.morphTargets!==Ie||Ae.morphNormals!==Mt||Ae.morphColors!==Vt||Ae.toneMapping!==It||Ae.morphTargetsCount!==dn||!!Ae.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ae.__version=G.version);let zn=Ae.currentProgram;ft===!0&&(zn=Ea(G,U,H),B&&G.isNodeMaterial&&B.onUpdateProgram(G,zn,Ae));let oi=!1,Hi=!1,Us=!1;const Et=zn.getUniforms(),kt=Ae.uniforms;if(v.useProgram(zn.program)&&(oi=!0,Hi=!0,Us=!0),G.id!==K&&(K=G.id,Hi=!0),Ae.needsLights){const Pt=kp(E.state.lightProbeGridArray,H);Ae.lightProbeGrid!==Pt&&(Ae.lightProbeGrid=Pt,Hi=!0)}if(oi||ne!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Et.setValue(I,"projectionMatrix",y.projectionMatrix),Et.setValue(I,"viewMatrix",y.matrixWorldInverse);const Wi=Et.map.cameraPosition;Wi!==void 0&&Wi.setValue(I,pe.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),ne!==y&&(ne=y,Hi=!0,Us=!0)}if(Ae.needsLights&&(xn.state.sunShadowMap.length>0&&Et.setValue(I,"sunShadowMap",xn.state.sunShadowMap,J),xn.state.directionalShadowMap.length>0&&Et.setValue(I,"directionalShadowMap",xn.state.directionalShadowMap,J),xn.state.spotShadowMap.length>0&&Et.setValue(I,"spotShadowMap",xn.state.spotShadowMap,J),xn.state.pointShadowMap.length>0&&Et.setValue(I,"pointShadowMap",xn.state.pointShadowMap,J)),H.isSkinnedMesh){Et.setOptional(I,H,"bindMatrix"),Et.setOptional(I,H,"bindMatrixInverse");const Pt=H.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Et.setValue(I,"boneTexture",Pt.boneTexture,J))}H.isBatchedMesh&&(Et.setOptional(I,H,"batchingTexture"),Et.setValue(I,"batchingTexture",H._matricesTexture,J),Et.setOptional(I,H,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",H._indirectTexture,J),Et.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",H._colorsTexture,J));const Vi=X.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&F.update(H,X,zn),(Hi||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,Et.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(kt.envMapIntensity.value=U.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Ky()),Hi){if(Et.setValue(I,"toneMappingExposure",P.toneMappingExposure),Ae.needsLights&&Gp(kt,Us),be&&G.fog===!0&&Fe.refreshFogUniforms(kt,be),Fe.refreshMaterialUniforms(kt,G,ie,Q,E.state.transmissionRenderTarget[y.id]),Ae.needsLights&&Ae.lightProbeGrid){const Pt=Ae.lightProbeGrid;kt.probesSH.value=Pt.texture,kt.probesMin.value.copy(Pt.boundingBox.min),kt.probesMax.value.copy(Pt.boundingBox.max),kt.probesResolution.value.copy(Pt.resolution)}po.upload(I,eh(Ae),kt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(po.upload(I,eh(Ae),kt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(I,"center",H.center),Et.setValue(I,"modelViewMatrix",H.modelViewMatrix),Et.setValue(I,"normalMatrix",H.normalMatrix),Et.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const Pt=G.uniformsGroups;for(let Wi=0,Fs=Pt.length;Wi<Fs;Wi++){const ih=Pt[Wi];ae.update(ih,zn),ae.bind(ih,zn)}}return zn}function Gp(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Hp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(y,U,X){const G=W.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=U,W.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const X=W.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){oe=y,q=U,Y=X;let G=null,H=!1,be=!1;if(y){const Se=W.get(y);if(Se.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,Se.__webglFramebuffer),re.copy(y.viewport),Ue.copy(y.scissor),Pe=y.scissorTest,v.viewport(re),v.scissor(Ue),v.setScissorTest(Pe),K=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(y);else if(Se.__hasExternalTextures)J.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const tt=y.depthTexture;if(Se.__boundDepthTexture!==tt){if(tt!==null&&W.has(tt)&&(y.width!==tt.image.width||y.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(y)}}const Le=y.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(be=!0);const Ne=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?G=Ne[U][X]:G=Ne[U],H=!0):y.samples>0&&J.useMultisampledRTT(y)===!1?G=W.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[X]:G=Ne,re.copy(y.viewport),Ue.copy(y.scissor),Pe=y.scissorTest}else re.copy(Te).multiplyScalar(ie).floor(),Ue.copy($e).multiplyScalar(ie).floor(),Pe=St;if(X!==0&&(G=V),v.bindFramebuffer(I.FRAMEBUFFER,G)&&v.drawBuffers(y,G),v.viewport(re),v.scissor(Ue),v.setScissorTest(Pe),H){const Se=W.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,X)}else if(be){const Se=U;for(let Le=0;Le<y.textures.length;Le++){const Ne=W.get(y.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,X,Se)}}else if(y!==null&&X!==0){const Se=W.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Se.__webglTexture,X)}K=-1};function nh(y){const U=W.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=C.textureFormatReadable(y.format),U.__typeReadable=C.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,X,G,H,be,Re,Se=0){if(!(y&&y.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){v.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Ne=y.textures[Se],tt=Ne.format,at=Ne.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se);const Ie=nh(Ne);if(Ie.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&X>=0&&X<=y.height-H&&I.readPixels(U,X,G,H,_e.convert(tt),_e.convert(at),be)}finally{const Ne=oe!==null?W.get(oe).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,U,X,G,H,be,Re,Se=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(U>=0&&U<=y.width-G&&X>=0&&X<=y.height-H){v.bindFramebuffer(I.FRAMEBUFFER,Le);const Ne=y.textures[Se],tt=Ne.format,at=Ne.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se);const Ie=nh(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,be.byteLength,I.STREAM_READ),I.readPixels(U,X,G,H,_e.convert(tt),_e.convert(at),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Vt=oe!==null?W.get(oe).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Vt);const It=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _0(I,It,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,be),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Mt),I.deleteSync(It),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,X=0){const G=Math.pow(2,-X),H=Math.floor(y.image.width*G),be=Math.floor(y.image.height*G),Re=U!==null?U.x:0,Se=U!==null?U.y:0;J.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Re,Se,H,be),v.unbindTexture()},this.copyTextureToTexture=function(y,U,X=null,G=null,H=0,be=0){let Re,Se,Le,Ne,tt,at,Ie,Mt,Vt;const It=y.isCompressedTexture?y.mipmaps[be]:y.image;if(X!==null)Re=X.max.x-X.min.x,Se=X.max.y-X.min.y,Le=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,tt=X.min.y,at=X.isBox3?X.min.z:0;else{const kt=Math.pow(2,-H);Re=Math.floor(It.width*kt),Se=Math.floor(It.height*kt),y.isDataArrayTexture?Le=It.depth:y.isData3DTexture?Le=Math.floor(It.depth*kt):Le=1,Ne=0,tt=0,at=0}G!==null?(Ie=G.x,Mt=G.y,Vt=G.z):(Ie=0,Mt=0,Vt=0);const At=_e.convert(U.format),dn=_e.convert(U.type);let Ae;U.isData3DTexture?(J.setTexture3D(U,0),Ae=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Ae=I.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Ae=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const xn=v.getParameter(I.UNPACK_ROW_LENGTH),ft=v.getParameter(I.UNPACK_IMAGE_HEIGHT),zn=v.getParameter(I.UNPACK_SKIP_PIXELS),oi=v.getParameter(I.UNPACK_SKIP_ROWS),Hi=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,It.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,It.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),v.pixelStorei(I.UNPACK_SKIP_ROWS,tt),v.pixelStorei(I.UNPACK_SKIP_IMAGES,at);const Us=y.isDataArrayTexture||y.isData3DTexture,Et=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const kt=W.get(y),Vi=W.get(U),Pt=W.get(kt.__renderTarget),Wi=W.get(Vi.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,Pt.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Fs=0;Fs<Le;Fs++)Us&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(y).__webglTexture,H,at+Fs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(U).__webglTexture,be,Vt+Fs)),I.blitFramebuffer(Ne,tt,Re,Se,Ie,Mt,Re,Se,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||W.has(y)){const kt=W.get(y),Vi=W.get(U);v.bindFramebuffer(I.READ_FRAMEBUFFER,N),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let Pt=0;Pt<Le;Pt++)Us?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,H,at+Pt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,H),Et?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vi.__webglTexture,be,Vt+Pt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vi.__webglTexture,be),H!==0?I.blitFramebuffer(Ne,tt,Re,Se,Ie,Mt,Re,Se,I.COLOR_BUFFER_BIT,I.NEAREST):Et?I.copyTexSubImage3D(Ae,be,Ie,Mt,Vt+Pt,Ne,tt,Re,Se):I.copyTexSubImage2D(Ae,be,Ie,Mt,Ne,tt,Re,Se);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Et?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Ae,be,Ie,Mt,Vt,Re,Se,Le,At,dn,It.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,be,Ie,Mt,Vt,Re,Se,Le,At,It.data):I.texSubImage3D(Ae,be,Ie,Mt,Vt,Re,Se,Le,At,dn,It):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,be,Ie,Mt,Re,Se,At,dn,It.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,be,Ie,Mt,It.width,It.height,At,It.data):I.texSubImage2D(I.TEXTURE_2D,be,Ie,Mt,Re,Se,At,dn,It);v.pixelStorei(I.UNPACK_ROW_LENGTH,xn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft),v.pixelStorei(I.UNPACK_SKIP_PIXELS,zn),v.pixelStorei(I.UNPACK_SKIP_ROWS,oi),v.pixelStorei(I.UNPACK_SKIP_IMAGES,Hi),be===0&&U.generateMipmaps&&I.generateMipmap(Ae),v.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&J.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?J.setTextureCube(y,0):y.isData3DTexture?J.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?J.setTexture2DArray(y,0):J.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){q=0,Y=0,oe=null,v.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const Zy=.001;function Qy(n,e){return{col:{x:Math.cos(n),y:Math.sin(e)*Math.sin(n)},row:{x:-Math.sin(n),y:Math.sin(e)*Math.cos(n)}}}function jy(n,e,t=Zy){const i=g=>{const x=Math.hypot(g.x,g.y)||1;return{x:g.x/x,y:g.y/x}},s=i(n),r=i(e),a=g=>g<-t?-1:1,o=Math.abs(s.x)-Math.abs(r.x),l=o>t?!0:o<-t?!1:a(s.x)*s.y>=a(r.x)*r.y-t,c=l?s:r,u=l?r:s,f=a(c.x),h=a(u.y),d=(g,x)=>g?{dx:x,dy:0}:{dx:0,dy:x};return{ArrowRight:d(l,f),ArrowLeft:d(l,-f),ArrowDown:d(!l,h),ArrowUp:d(!l,-h)}}function eS(n,e){const{col:t,row:i}=Qy(n,e);return jy(t,i)}const zr=new L;function Hn(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;zr.copy(e),zr[i]=0,zr.normalize();const c=.5*a/(a+o),u=1-zr.angleTo(n)/l;return Math.sign(zr[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Yo extends rs{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new L,c=new L,u=new L(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new L,m=.5/a;for(let p=0,S=0;p<f.length;p+=3,S+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=u.x*Math.sign(l.x)+c.x*r,f[p+1]=u.y*Math.sign(l.y)+c.y*r,f[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[S+0]=Hn(x,c,"z","y",r,i),d[S+1]=1-Hn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[S+0]=1-Hn(x,c,"z","y",r,i),d[S+1]=1-Hn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[S+0]=1-Hn(x,c,"x","z",r,e),d[S+1]=Hn(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),d[S+0]=1-Hn(x,c,"x","z",r,e),d[S+1]=1-Hn(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),d[S+0]=1-Hn(x,c,"x","y",r,e),d[S+1]=1-Hn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[S+0]=Hn(x,c,"x","y",r,e),d[S+1]=1-Hn(x,c,"y","x",r,t);break}}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.segments,e.radius)}}function tS(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new $t;let c=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Ud(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][h]);const g=Ud(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Ud(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Sn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<t;g++){const x=u.getComponent(h,g);o.setComponent(h+f,g,x)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function $(n,e,t={}){const i=new ht().compose(new L(...t.p??[0,0,0]),new Ei().setFromEuler(new ri(...t.r??[0,0,0])),new L(...t.s??[1,1,1]));return{geo:n.clone().applyMatrix4(i),color:e,glow:t.glow}}const lt=(n,e,t={})=>$(n,e,{...t,glow:!0});function Iu(n,e,t,i,s=0,r=1){const a=new ht().compose(new L(e,t,i),new Ei().setFromEuler(new ri(0,s,0)),new L(r,r,r));return n.map(o=>({geo:o.geo.clone().applyMatrix4(a),color:o.color,glow:o.glow}))}function Ro(n,e=.5,t=0){const i=n.map(({geo:r,color:a,glow:o})=>{const l=r.index?r.toNonIndexed():r.clone();for(const h of Object.keys(l.attributes))h!=="position"&&h!=="normal"&&l.deleteAttribute(h);l.getAttribute("normal")||l.computeVertexNormals();const c=l.getAttribute("position"),u=new Float32Array(c.count*3),f=new We(a);for(let h=0;h<c.count;h++){const d=c.getY(h)-t,g=o?1:e>0?.72+.28*Math.min(1,Math.max(0,d/e)):1;u[h*3]=f.r*g,u[h*3+1]=f.g*g,u[h*3+2]=f.b*g}return l.setAttribute("color",new Sn(u,3)),l});if(!i.length){const r=new $t;return r.setAttribute("position",new gt([],3)),r.setAttribute("normal",new gt([],3)),r.setAttribute("color",new gt([],3)),r}const s=tS(i,!1);return s.computeBoundingSphere(),s}function pp(n,e){const t=n.filter(s=>!s.glow),i=n.filter(s=>s.glow);return{body:Ro(t,e),glow:i.length?Ro(i,0):null}}const Ee=(n,e,t)=>new rs(n,e,t),Ct=(n,e,t,i=8)=>new ts(n,e,t,i),or=(n,e,t=8)=>new Au(n,e,t),an=(n,e=0)=>new Pu(n,e),kn=(n,e,t,i=.035)=>new Yo(n,e,t,2,Math.min(i,n/2-.001,e/2-.001,t/2-.001)),mp=(n,e=14,t=10)=>new Wo(n,e,t);function hr(n,e,t){const i=n.index?n.toNonIndexed():n,s=i.getAttribute("position"),r=c=>`${s.getX(c).toFixed(3)},${s.getY(c).toFixed(3)},${s.getZ(c).toFixed(3)}`,a=new Map;let o=t;const l=()=>(o=o*16807%2147483647,o/2147483647-.5);for(let c=0;c<s.count;c++){const u=r(c);a.has(u)||a.set(u,[l()*e,l()*e,l()*e]);const f=a.get(u);s.setXYZ(c,s.getX(c)+f[0],s.getY(c)+f[1],s.getZ(c)+f[2])}return i.computeVertexNormals(),i}function Ss(n,e,t){const i=new Vo;i.moveTo(-e/2,0),i.lineTo(e/2,0),i.lineTo(0,t),i.closePath();const s=new Sa(i,{depth:n,bevelEnabled:!1});return s.translate(0,0,-n/2),s.rotateY(Math.PI/2),s}const Qi=(n,e)=>hr(an(n,1),n*.12,e);function ki(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Fd(n){const e=n.index?n.toNonIndexed():n.clone();return e.computeVertexNormals(),e}const jr=11591802,nS=13789486;function Du(n=jr,e=nS){const t=[$(new rs(.08,.3,.08),e,{p:[0,.15,0]})],i=[[.25,.3,.05,.2,.17],[.42,.265,.045,.18,.145],[.57,.225,.04,.16,.115],[.71,.19,.035,.3,0]];for(const[s,r,a,o,l]of i)t.push($(Fd(new ts(r,r*.82,a,8)),n,{p:[0,s+a/2,0]})),t.push($(Fd(new ts(Math.max(.001,l),r,o,8)),n,{p:[0,s+a+o/2,0]}));return t}const Ge={tile:15988216,tileEdge:14410730,soilLight:14936560,grassTop:16185594,grassLight:16777215,soilDark:12898524,soilDeep:11780558,leafLight:10477747,leaf:8376216,trunk:12032652,stripe:15891590,wall:16250095,plank:13808028,plankDark:11767676,roof:15891590,roofDark:14180461,glowWarm:16758876,beacon:16740221,flameOuter:16751165,flameInner:16770202,rock:14278374,rockLight:15330802,rockDark:12371408,moss:9426600,flag:15891590,flowerPink:16228789,flowerYellow:16766078,flowerWhite:16777215,white:16777215},b={white:16250612,cream:16248546,paving:15659766,pavingDark:14279145,sky:9817586,skyDeep:7317734,teal:7328710,tealDeep:4568235,mint:11725012,pink:16102340,coral:16028037,peach:16763558,lavender:12365552,lilac:14471927,butter:16509094,gold:16107637,silver:14870254,slateBlue:9348047,roofRed:15891590,roofBlue:9021152,door:9206410,winWarm:16771e3,winCool:14086655,winPink:16766694,green:9423970,greenLight:11591294,greenDark:7320143,orange:16295015};function Nt(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){const s=new ht().compose(new L(...e),new Ei().setFromEuler(new ri(...t)),new L(...i));return n.map(r=>({geo:r.geo.clone().applyMatrix4(s),color:r.color,glow:r.glow}))}function Vl(n,e,t=0){for(const i of n){const s=i.geo.getAttribute("position");for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+Math.max(0,s.getY(r)-t)*e);s.needsUpdate=!0}return n}function jn(n,e,t,i){const s=1/Math.cos(Math.PI/n),r=new ts(Math.max(5e-4,t*s),e*s,i,n);return n===4&&r.rotateY(Math.PI/4),n===8&&r.rotateY(Math.PI/8),r.translate(0,i/2,0),r}function ea(n,e,t){return new We(n).lerp(new We(e),t).getHex()}function qe(n){const e=n.seg??4,t=n.w,i=n.top??n.w,s=n.y??0,r=n.glow??b.winWarm,a=n.lit??.22,o=n.seed??1,l=Math.abs(t-i)<1e-6;let c=n.style??"glass";c==="grid"&&!(e===4&&l)&&(c="ribbon");const u=Math.max(1,Math.round(n.h/(n.floor??.14))),f=n.h/u,h=w=>t+(i-t)*(w/n.h),d=[],g=ea(n.glass,n.body,c==="fins"?.7:c==="ribbon"?.28:.45),x=(w,E,R,_,T=!1)=>d.push($(jn(e,h(w)+R,h(Math.min(n.h,w+E))+R,E),_,{p:[0,s+w,0],glow:T})),m=w=>(w+.5)/e*Math.PI*2+(e===4?Math.PI/4:e===8?Math.PI/8:0),p=w=>e>=12?w/Math.cos(Math.PI/e):w,S=w=>2*w*Math.tan(Math.PI/e);if(c==="grid"){d.push($(kn(2*t,n.h,2*t,.02),n.body,{p:[0,s+n.h/2,0]}));const w=Math.max(2,Math.round(2*t/.15)),E=2*t/w;for(let R=0;R<u;R++)for(let _=0;_<4;_++)for(let T=0;T<w;T++){const P=ki(o*7+R*3+_,T)<a,D=Ee(E*.56,f*.52,.02).translate(-t+E*(T+.5),s+R*f+f*.5,t+.006).rotateY(_*Math.PI/2);d.push({geo:D,color:P?r:ea(n.glass,3231850,.25),glow:P})}return d}d.push(e===4&&l?$(kn(2*t,n.h,2*t,.02),n.glass,{p:[0,s+n.h/2,0]}):$(jn(e,t,i,n.h),n.glass,{p:[0,s,0]}));const A=e>=12?12:e,M=w=>e>=12?1:Math.max(1,Math.round(S(w)/.13));if(c==="ribbon")for(let w=1;w<u;w++)x(w*f-f*.08,f*.16,.005,g);else{const w=c==="fins"?.022:.011,E=c==="fins"?.02:.007;for(let R=0;R<A;R++){const _=e>=12?(R+.5)/A*Math.PI*2:m(R),T=e>=12?1:M(Math.min(t,i))+1;for(let P=0;P<T;P++){const D=e>=12?0:(P/(T-1)-.5)*S(Math.min(t,i))*.92,B=p(Math.min(t,i))+E/2,V=Ee(w,l?n.h:Math.hypot(n.h,t-i),E).translate(D,s+n.h/2,B);if(!l){const N=Math.atan2(t-i,n.h);V.translate(0,-(s+n.h/2),-B).rotateX(-N).translate(0,s+n.h/2,p((t+i)/2)+E/2)}d.push({geo:V.rotateY(_),color:g})}}for(let R=3;R<u;R+=3)x(R*f,.016,.006,g)}for(let w=0;w<u;w++){const E=h(w*f+f/2);for(let R=0;R<A;R++){const _=e>=12?(R+.5)/A*Math.PI*2:m(R),T=M(E);for(let P=0;P<T;P++){if(ki(o*13+w*7+R,P)>=a)continue;const D=e>=12?2*Math.PI*E/A:S(E),B=D/T*.62,V=e>=12?0:(-.5+(P+.5)/T)*D,N=Ee(B,f*.42,.01).translate(V,s+w*f+f*.5,p(E)+.004);d.push({geo:N.rotateY(_),color:r,glow:!0})}}}return x(n.h-.02,.03,.012,ea(n.body,n.glass,.25)),d}const Ii=(n,e,t,i,s,r=!1)=>$(jn(n,e,0,t),i,{p:[0,s,0],glow:r});function Xt(n,e,t=b.silver,i=Ge.beacon){return[$(Ct(.008,.028,e,6),t,{p:[0,n+e/2,0]}),lt(an(.028,0),i,{p:[0,n+e,0]})]}function Od(n,e,t,i,s){const r=new Vo;r.moveTo(-n,0),r.lineTo(n,0),r.lineTo(-n,t),r.closePath();const a=new Sa(r,{depth:2*e,bevelEnabled:!1}).translate(0,0,-e);return $(a,i,{p:[0,s,0]})}const Wl=(n,e,t,i=!1)=>$(new Wo(n,14,6,0,Math.PI*2,0,Math.PI/2),t,{p:[0,e,0],glow:i}),tr=(n,e,t,i=[Math.PI/2,0,0],s=.018)=>lt(new fa(n,s,4,24),t,{p:[0,e,0],r:i});function gp(n,e,t){return[$(Ee(n*.5,.06,n*.4),b.silver,{p:[-n*.3,e+.03,n*.25]}),$(Ee(n*.3,.08,n*.3),b.paving,{p:[n*.35,e+.04,-n*.3+ki(t,2)*.04]}),$(Ct(n*.16,n*.16,.09,8),b.pavingDark,{p:[n*.3,e+.045,n*.3]})]}function gi(n,e,t=1,i=jr,s=0,r=1){const a=i===jr||i===b.green?jr:9883747;return Iu(Du(a),n,s,e,r%8*.4,.3*t)}function vp(n,e,t=0){return[$(Ct(.008,.01,.2,6),b.slateBlue,{p:[n,t+.1,e]}),lt(mp(.024,10,8),b.winCool,{p:[n,t+.21,e]})]}function pt(n,e=2,t=b.green){const i=[$(kn(.9,.045,.9,.015),b.pavingDark,{p:[0,.0225,0]}),$(kn(.82,.03,.82,.01),b.paving,{p:[0,.05,0]})],s=[[.36,.36],[-.36,.36],[.36,-.36],[-.36,-.36]];for(let r=0;r<e&&r<4;r++)i.push(...gi(s[r][0],s[r][1],.9,ki(n,r)>.6?b.orange:t,.06,n+r));return e<4&&i.push(...vp(s[3][0],s[3][1],.06)),i}const iS=.06;function sS(){return[$(kn(.36,.04,.3,.018),b.pavingDark,{p:[0,.02,0]}),$(Qi(.15,51),b.green,{p:[0,.13,0],s:[1,.85,1]}),$(Qi(.11,52),b.greenLight,{p:[.11,.15,.06]}),$(Qi(.1,53),b.greenDark,{p:[-.11,.1,.06]}),$(an(.026,0),Ge.flowerPink,{p:[.04,.25,.09]}),$(an(.022,0),Ge.flowerWhite,{p:[-.07,.2,.12]})]}function rS(){return[$(Ct(.16,.18,.035,8),b.pavingDark,{p:[0,.0175,0]}),...Iu(Du(),0,.035,0,.3,.78)]}function aS(){return[$(kn(.5,.035,.44,.012),b.pavingDark,{p:[0,.0175,0]}),$(kn(.36,.24,.3,.018),16509135,{p:[-.02,.155,-.02]}),$(Ss(.44,.4,.2),b.tealDeep,{p:[-.02,.275,-.02]}),$(Ss(.36,.3,.15),16509135,{p:[-.02,.275,-.02]}),$(Ee(.46,.02,.04),ea(b.tealDeep,1915460,.3),{p:[-.02,.475,-.02]}),$(Ee(.06,.14,.06),b.coral,{p:[.08,.42,-.08]}),$(Ee(.085,.15,.012),b.white,{p:[.06,.11,.132]}),$(Ee(.065,.135,.014),b.door,{p:[.06,.105,.136]}),$(Ee(.12,.02,.05),b.paving,{p:[.06,.01,.16]}),lt(Ee(.02,.03,.02),b.winWarm,{p:[.125,.17,.142]}),...An(-.1,.16,.13,.09,.08,!0),...Nt(An(0,.16,.16,.08,.08,!0),[-.02,0,-.02],[0,Math.PI/2,0]),$(Ee(.06,.012,.05),b.paving,{p:[.07,.006,.24]}),$(Qi(.06,74),b.green,{p:[-.22,.05,.16]}),...gi(.21,.16,.85,b.orange,.035,75)]}function An(n,e,t,i,s,r,a=b.skyDeep){return[$(Ee(i+.03,s+.03,.012),b.white,{p:[n,e,t]}),$(Ee(i,s,.014),r?b.winWarm:a,{p:[n,e,t+.004],glow:r}),$(Ee(i+.04,.015,.03),b.white,{p:[n,e-s/2-.012,t+.01]})]}function oS(){return[$(Ee(.54,.04,.42),b.pavingDark,{p:[0,.02,0]}),$(kn(.5,.3,.38,.03),b.cream,{p:[0,.19,0]}),$(Ss(.62,.5,.27),b.roofRed,{p:[0,.34,0]}),$(Ss(.5,.38,.21),b.cream,{p:[0,.34,0]}),$(Ee(.64,.025,.05),Ge.roofDark,{p:[0,.6,0]}),$(Ee(.08,.22,.08),b.coral,{p:[-.15,.55,-.08]}),$(Ee(.1,.025,.1),b.pavingDark,{p:[-.15,.67,-.08]}),$(Ee(.12,.19,.012),b.white,{p:[.11,.135,.192]}),$(Ee(.095,.17,.014),b.door,{p:[.11,.13,.197]}),lt(Ee(.012,.012,.01),b.winWarm,{p:[.14,.13,.205]}),$(Ee(.15,.025,.07),b.pavingDark,{p:[.11,.0125,.23]}),$(Ss(.17,.09,.05),b.roofRed,{p:[.11,.24,.215]}),...An(-.12,.2,.19,.11,.09,!0),$(Ee(.13,.03,.035),Ge.plank,{p:[-.12,.135,.215]}),...[-.16,-.12,-.08].map((e,t)=>$(an(.018,0),t===1?Ge.flowerYellow:Ge.flowerPink,{p:[e,.16,.22]})),...Nt(An(0,.2,.25,.1,.09,!0),[0,0,0],[0,Math.PI/2,0]),...Nt(An(0,.2,.25,.1,.09,!1),[0,0,0],[0,-Math.PI/2,0]),$(Qi(.075,71),b.green,{p:[-.3,.06,.24]}),$(Qi(.05,72),b.greenLight,{p:[.3,.05,.26]}),$(Ee(.08,.012,.06),b.paving,{p:[.11,.006,.31]}),$(Ee(.07,.012,.06),b.paving,{p:[.13,.006,.39]})]}function lS(){return[$(Ee(.74,.035,.56),b.pavingDark,{p:[.02,.0175,0]}),$(kn(.42,.5,.4,.03),b.white,{p:[-.08,.285,-.02]}),$(Ee(.44,.02,.42),b.lilac,{p:[-.08,.29,-.02]}),$(Ss(.52,.5,.26),b.roofBlue,{p:[-.08,.535,-.02]}),$(Ss(.42,.4,.21),b.white,{p:[-.08,.535,-.02]}),$(Ee(.54,.025,.05),b.slateBlue,{p:[-.08,.795,-.02]}),$(Ee(.07,.2,.07),b.coral,{p:[-.08-.13,.72,-.12]}),$(kn(.26,.27,.36,.02),b.cream,{p:[.25,.17,0]}),$(Ee(.3,.03,.4),b.pavingDark,{p:[.25,.32,0]}),$(Ee(.2,.18,.012),b.silver,{p:[.25,.125,.185]}),...[.07,.11,.15,.19].map(e=>$(Ee(.2,.008,.016),b.pavingDark,{p:[.25,e,.19]})),lt(Ee(.1,.06,.012),b.winWarm,{p:[.25,.25,-.186]}),$(Ee(.22,.03,.12),b.paving,{p:[-.08-.03,.05,.24]}),...[-.13,.03].map(e=>$(Ct(.012,.012,.2,5),b.white,{p:[-.08+e,.16,.29]})),$(Ee(.26,.025,.15),b.roofBlue,{p:[-.08-.03,.27,.235]}),$(Ee(.1,.17,.012),b.white,{p:[-.08-.05,.13,.182]}),$(Ee(.08,.155,.014),b.door,{p:[-.08-.05,.125,.186]}),...An(-.08+.11,.17,.181,.09,.08,!0),...An(-.08-.1,.42,.181,.1,.09,!0),...An(-.08+.1,.42,.181,.1,.09,ki(4,1)>.5),...Nt(An(0,.42,.211,.1,.09,!1),[-.08,0,-.02],[0,-Math.PI/2,0]),...Nt(An(0,.17,.211,.1,.09,!0),[-.08,0,-.02],[0,-Math.PI/2,0]),...Nt(An(-.08,.42,.201,.1,.09,!0),[-.08,0,-.02],[0,Math.PI,0]),...gi(.33,.3,1.1,b.orange,0,81),$(Ee(.05,.05,.3),b.greenDark,{p:[-.36,.025,.08]})]}function cS(){const n=[$(Ee(.78,.035,.66),b.pavingDark,{p:[0,.0175,0]}),$(kn(.64,.22,.52,.02),b.cream,{p:[0,.145,0]}),$(kn(.62,.78,.5,.025),b.peach,{p:[0,.645,0]}),$(Ee(.66,.04,.54),b.white,{p:[0,1.055,0]}),$(Ee(.66,.03,.54),b.white,{p:[0,.27,0]}),lt(Ee(.42,.12,.012),b.winWarm,{p:[-.05,.13,.262]}),$(Ee(.1,.16,.014),b.door,{p:[.22,.115,.262]}),...[0,1,2,3,4].map(e=>$(Ee(.09,.02,.1),e%2?b.white:b.coral,{p:[-.23+e*.09,.225,.3],r:[.35,0,0]})),...gp(.3,1.075,5)];for(let e=0;e<4;e++){const t=.37+e*.19;for(let i=0;i<3;i++){const s=-.2+i*.2,r=ki(e*3+1,i)<.55;n.push(...An(s,t,.251,.1,.1,r)),n.push(...Nt(An(s,t,.251,.1,.1,ki(e*5+2,i)<.3),[0,0,0],[0,Math.PI,0])),i!==1&&(n.push($(Ee(.16,.02,.08),b.white,{p:[s,t-.07,.29]})),n.push($(Ee(.16,.05,.008),b.winCool,{p:[s,t-.035,.33]})))}for(const i of[1,-1])for(let s=0;s<2;s++)n.push(...Nt(An(-.1+s*.2,t,.311,.09,.1,ki(e*7+i,s)<.45),[0,0,0],[0,i*Math.PI/2,0]))}return n}function uS(){return[$(Ee(.86,.035,.86),b.pavingDark,{p:[0,.0175,0]}),$(kn(.74,.16,.74,.04),b.white,{p:[0,.115,0]}),lt(Ee(.4,.09,.012),b.winWarm,{p:[0,.1,.372]}),lt(Ee(.012,.09,.4),b.winWarm,{p:[.372,.1,0]}),...qe({w:.28,h:.92,y:.195,body:b.lilac,glass:b.skyDeep,style:"grid",floor:.13,lit:.5,seed:6}),$(Ee(.6,.03,.6),b.white,{p:[0,1.13,0]}),...qe({w:.2,h:.16,y:1.145,body:b.white,glass:b.teal,style:"glass",seed:7,lit:.6}),$(Ee(.36,.02,.36),b.green,{p:[0,1.315,0]}),...gi(.1,.08,.7,b.greenLight,1.325,93),...vp(-.1,-.1,1.325),...gi(.36,.36,.9,b.green,.035,91),...gi(-.36,.36,.9,b.orange,.035,92)]}function Xl(n,e,t,i,s,r,a,o,l,c=e){const u=[],f=Math.max(8,Math.round(t/.1)),h=t/f;for(let d=0;d<f;d++){const g=e+(c-e)*(d/f),x=ki(l+d,4)<.35;u.push($(jn(n,g*.9,g*.9,h*.98),x?o:a,{p:[0,i+d*h,0],r:[0,s*d/f,0],glow:x})),u.push($(jn(n,g,g,h*.28),r,{p:[0,i+d*h,0],r:[0,s*d/f,0]}))}return u}function $l(n,e,t,i,s,r=!1,a=.25){const o=[];for(let l=0;l<n;l++){const c=l/n*Math.PI*2;o.push($(or(.025,i,4),s,{p:[Math.sin(c)*e,t+i/2,Math.cos(c)*e],r:[Math.cos(c)*a,0,-Math.sin(c)*a],glow:r}))}return o}const hS=n=>1.6+n*.058;function dS(n){const e=n-nu,t=hS(e),i=iS,s=[],r=(...a)=>s.push(...a);switch(e){case 0:{r(...pt(e,2)),r(...qe({w:.32,h:t-.3,y:i,body:b.white,glass:b.sky,style:"ribbon",seed:11})),r(...qe({w:.24,h:.2,y:i+t-.3,body:b.white,glass:b.skyDeep,style:"glass",seed:12})),r(...gp(.24,i+t-.1,3)),r(...Xt(i+t-.1,.3));break}case 1:{r(...pt(e,3,b.green)),r(...qe({w:.34,top:.2,h:t*.8,y:i,body:b.white,glass:b.teal,style:"glass",seed:21,lit:.4})),r(Ii(4,.2,t*.22,b.tealDeep,i+t*.8)),r(...Xt(i+t*1.02,.12));break}case 2:{r(...pt(e,2)),r(...qe({seg:16,w:.3,h:t*.92,y:i,body:b.white,glass:b.lavender,style:"fins",seed:31,glow:b.winPink})),r($(Ct(.33,.33,.04,16),b.white,{p:[0,i+t*.92+.02,0]})),r($(Ct(.18,.18,.02,16),b.slateBlue,{p:[0,i+t*.92+.05,0]})),r(...Xt(i+t*.92+.06,.2));break}case 3:{r(...pt(e,2,b.orange)),r(...qe({w:.36,h:t*.34,y:i,body:b.cream,glass:b.skyDeep,style:"grid",seed:41})),r(...qe({w:.28,h:t*.32,y:i+t*.34,body:b.cream,glass:b.skyDeep,style:"grid",seed:42})),r(...qe({w:.2,h:t*.2,y:i+t*.66,body:b.cream,glass:b.skyDeep,style:"grid",seed:43})),r($(jn(8,.15,.1,.12),b.gold,{p:[0,i+t*.86,0]})),r($(jn(8,.1,.05,.1),b.gold,{p:[0,i+t*.86+.12,0]})),r(...Xt(i+t*.86+.22,.22,b.gold));break}case 4:{r(...pt(e,2)),r(...Nt(qe({w:.34,h:t*.86,y:i,body:b.white,glass:b.pink,style:"fins",seed:51,glow:b.winPink}),[0,0,0],[0,0,0],[1,1,.68])),r(...Nt([Od(.34,.34,t*.18,b.coral,i+t*.86)],[0,0,0],[0,0,0],[1,1,.68]));for(const[a,o]of[[1,1],[-1,1],[1,-1],[-1,-1]])r(lt(Ee(.02,t*.86,.02),b.winPink,{p:[a*.35,i+t*.43,o*.24]}));break}case 5:{r(...pt(e,1));const a=[[.33,.04,.03,0],[.29,-.04,-.02,.2],[.25,.03,.03,-.15],[.21,-.02,-.02,.1]];let o=i;const l=t/4.4;a.forEach(([c,u,f,h],d)=>{r(...Nt(qe({w:c,h:l,y:0,body:b.white,glass:b.mint,style:"ribbon",seed:61+d}),[u,o,f],[0,h,0])),d<3&&(r(...gi(u+c*.62,f+c*.62,.8,d%2?b.orange:b.green,o+l,65+d)),r(...gi(u-c*.62,f+c*.5,.7,b.greenLight,o+l,68+d))),o+=l}),r(...gi(0,0,1.3,b.green,o,70));break}case 6:{r(...pt(e,2,b.orange)),r(...Xl(4,.31,t*.95,i,Math.PI/2,b.white,b.peach,b.winWarm,71)),r(...Xt(i+t*.95,.18));break}case 7:{r(...pt(e,0));for(const a of[-.2,.2]){const o=Nt([...qe({seg:8,w:.15,h:t*.5,y:i,body:b.silver,glass:b.sky,style:"ribbon",seed:81}),...qe({seg:8,w:.12,h:t*.25,y:i+t*.5,body:b.silver,glass:b.sky,style:"ribbon",seed:82}),...qe({seg:8,w:.09,h:t*.12,y:i+t*.75,body:b.silver,glass:b.skyDeep,style:"glass",seed:83}),Ii(8,.09,.12,b.silver,i+t*.87),...Xt(i+t*.99,.16)],[a,0,0]);r(...o)}r($(Ee(.26,.06,.1),b.white,{p:[0,i+t*.45,0]})),r(lt(Ee(.24,.025,.105),b.winCool,{p:[0,i+t*.45,0]}));break}case 8:{r(...pt(e,2)),r(...qe({w:.3,h:t*.74,y:i,body:b.white,glass:b.sky,style:"glass",seed:91,lit:.3})),r(lt(Ee(.4,t*.13,.4),b.winWarm,{p:[0,i+t*.74+t*.065,0]}));for(const[a,o]of[[1,1],[-1,1],[1,-1],[-1,-1]])r($(Ee(.04,t*.13,.04),b.gold,{p:[a*.21,i+t*.805,o*.21]}));r($(Ee(.46,.03,.46),b.gold,{p:[0,i+t*.87+.015,0]})),r(Ii(4,.23,t*.12,b.gold,i+t*.885));break}case 9:{r(...pt(e,2,b.green));const a=[b.teal,b.lavender,b.pink];for(let o=0;o<3;o++)r(...qe({seg:16,w:.31-o*.04,top:.29-o*.04,h:t*.3,y:i+o*t*.3,body:b.white,glass:a[o],style:"ribbon",seed:101+o,glow:[b.winCool,b.winPink,b.winWarm][o]}));r(Wl(.19,i+t*.9,b.white)),r(...Xt(i+t*.9+.18,.18));break}case 10:{r(...pt(e,3)),r(...qe({seg:12,w:.27,top:.11,h:t*.86,y:i,body:b.white,glass:b.sky,style:"glass",seed:111,lit:.4})),r(...Xt(i+t*.86,t*.18));for(let a=0;a<5;a++){const o=a/5*Math.PI*2;r($(an(.09-a%2*.02,1),b.white,{p:[Math.sin(o)*.3,i+t*.58+a%2*.05,Math.cos(o)*.3],s:[1.4,.7,1]}))}break}case 11:{r(...pt(e,3,b.orange)),r(...qe({seg:3,w:.2,h:t*.8,y:i,body:b.white,glass:b.mint,style:"ribbon",seed:121,glow:b.winCool})),r(Ii(3,.2,t*.26,b.tealDeep,i+t*.8));break}case 12:{r(...pt(e,2)),r(...qe({seg:8,w:.33,h:t*.4,y:i,body:b.lilac,glass:b.lavender,style:"ribbon",seed:131,glow:b.winPink})),r(...qe({seg:8,w:.26,h:t*.3,y:i+t*.4,body:b.lilac,glass:b.lavender,style:"ribbon",seed:132,glow:b.winPink})),r(...qe({seg:8,w:.19,h:t*.16,y:i+t*.7,body:b.lilac,glass:b.skyDeep,style:"glass",seed:133}));for(let a=0;a<5;a++){const o=a/5*Math.PI*2;r($(Ct(.006,.006,.12,4),b.silver,{p:[Math.sin(o)*.13,i+t*.86+.06,Math.cos(o)*.13]})),r(lt(new Jr(.035),b.butter,{p:[Math.sin(o)*.13,i+t*.86+.14,Math.cos(o)*.13]}))}r(...Xt(i+t*.86,.26,b.silver,b.butter));break}case 13:{r(...pt(e,2,b.orange)),r(...qe({w:.33,h:t*.48,y:i,body:b.cream,glass:b.skyDeep,style:"grid",seed:141,floor:.15})),r(...qe({w:.25,h:t*.22,y:i+t*.48,body:b.cream,glass:b.skyDeep,style:"grid",seed:142,floor:.15}));let a=i+t*.7;for(let o=0;o<5;o++){const l=.18-o*.03;r($(jn(8,l,l*.85,.09),b.gold,{p:[0,a,0]})),r(...$l(8,l*.9,a+.02,.06,b.winWarm,!0,0)),a+=.09}r(...Xt(a,.3,b.gold));break}case 14:{r(...pt(e,0));for(const a of[-.22,.22])r(...Nt(qe({w:.13,h:t*.82,y:i,body:b.white,glass:b.teal,style:"fins",seed:151,glow:b.winCool}),[a,0,0],[0,0,0],[1,1,1.8]));r($(Ee(.84,.07,.36),b.white,{p:[0,i+t*.82+.035,0]})),r(lt(Ee(.85,.02,.37),b.winCool,{p:[0,i+t*.82+.01,0]})),r($(Ee(.78,.02,.3),b.green,{p:[0,i+t*.82+.08,0]}));for(let a=0;a<4;a++)r(...gi(-.3+a*.2,a%2*.1-.05,.9,a%2?b.orange:b.greenLight,i+t*.82+.09,155+a));break}case 15:{r(...pt(e,2)),r(...qe({seg:16,w:.3,top:.24,h:t*.78,y:i,body:b.white,glass:b.peach,style:"ribbon",seed:161}));const a=i+t*.78;r($(Ct(.27,.27,.04,16),b.white,{p:[0,a+.02,0]}));for(let o=0;o<4;o++){const l=o/4*Math.PI*2+Math.PI/4;r($(Ee(.025,t*.15,.025),b.white,{p:[Math.sin(l)*.2,a+.04+t*.075,Math.cos(l)*.2]}))}r(lt(an(.12,1),b.winWarm,{p:[0,a+.04+t*.075,0]})),r($(Ct(.05,.27,.08,16),b.white,{p:[0,a+.04+t*.15+.04,0]})),r(tr(.32,a+.06,b.winWarm));break}case 16:{r(...pt(e,3,b.green));const a=14,o=l=>.18+.15*Math.sin(Math.PI*Math.min(1,l*1.05))-.04*l;for(let l=0;l<a;l++){const c=l/a,u=(l+1)/a;r($(jn(12,o(c),o(u),t*.84/a),l%2?ea(b.sky,b.white,.45):b.sky,{p:[0,i+c*t*.84,0]}))}r(lt(an(.13,2),b.butter,{p:[0,i+t*.84+.16,0]})),r($(Ct(.01,.01,.06,4),b.silver,{p:[0,i+t*.84+.02,0]}));break}case 17:{r(...pt(e,2)),r(...qe({w:.27,top:.02,h:t,y:i,body:b.white,glass:b.lilac,style:"glass",seed:181,glow:b.winPink})),r(...Nt(qe({w:.17,top:.01,h:t*.68,y:0,body:b.white,glass:b.sky,style:"glass",seed:182,glow:b.winCool}),[.14,i,.12],[0,.4,0])),r(...Nt(qe({w:.14,top:.01,h:t*.5,y:0,body:b.white,glass:b.teal,style:"glass",seed:183}),[-.16,i,.1],[0,-.3,0]));break}case 18:{r(...pt(e,2)),r(...qe({w:.31,h:t*.72,y:i,body:b.white,glass:b.slateBlue,style:"fins",seed:191,lit:.5})),r(...qe({w:.2,h:t*.06,y:i+t*.72,body:b.white,glass:b.slateBlue,style:"glass",seed:192}));const a=i+t*.78+.22;r(lt(new fa(.21,.03,6,28),b.gold,{p:[0,a,0],r:[0,Math.PI/4,0]})),r($(Ct(.18,.18,.03,24),b.slateBlue,{p:[0,a,0],r:[Math.PI/2,0,Math.PI/4]})),r($(Ee(.04,.06,.04),b.white,{p:[0,i+t*.78+.01,0]}));break}case 19:{r(...pt(e,2,b.orange)),r(...qe({seg:6,w:.32,h:t*.45,y:i,body:b.white,glass:b.coral,style:"ribbon",seed:201})),r(...qe({seg:6,w:.25,h:t*.3,y:i+t*.45,body:b.white,glass:b.peach,style:"ribbon",seed:202})),r(...$l(6,.17,i+t*.75,.22,b.winWarm,!0,.55)),r(Ii(6,.17,.16,b.white,i+t*.75)),r(...Xt(i+t*.75+.14,.3,b.silver,b.winWarm));break}case 20:{r(...pt(e,3,b.green)),r(...qe({seg:16,w:.24,h:t*.8,y:i,body:b.white,glass:b.mint,style:"fins",seed:211,glow:b.winCool})),r(Wl(.24,i+t*.8,b.white)),r(tr(.3,i+t*.8+.14,b.winCool)),r(...Xt(i+t*.8+.2,.25));break}case 21:{r(...pt(e,2));const a=[...qe({w:.28,top:.16,h:t*.88,y:i,body:b.white,glass:b.sky,style:"glass",seed:221}),...Xt(i+t*.88,.22)];r(...Vl(a,.11,i+.2)),r(...Vl([lt(Ee(.02,t*.7,.02),b.winCool,{p:[-.3,i+.25+t*.35,.18]})],.11,i+.2));break}case 22:{r(...pt(e,2)),r(...Xl(8,.31,t*.9,i,Math.PI*.75,b.white,b.lavender,b.winPink,231,.22)),r(tr(.3,i+t*.92,b.winPink,[Math.PI/2+.2,0,0],.01)),r(...Xt(i+t*.9,.22));break}case 23:{r(...pt(e,1)),r(...qe({w:.2,h:t*.9,y:i,body:b.white,glass:b.pink,style:"fins",seed:241,glow:b.winPink})),r(...Xt(i+t*.9,.25)),r(...Nt([...qe({w:.14,h:t*.62,y:0,body:b.white,glass:b.lavender,style:"ribbon",seed:242}),Ii(4,.14,.18,b.lilac,t*.62)],[-.24,i,.18])),r(...Nt([...qe({seg:12,w:.12,h:t*.42,y:0,body:b.white,glass:b.sky,style:"ribbon",seed:243,glow:b.winCool}),Wl(.12,t*.42,b.white)],[.22,i,-.22]));break}case 24:{r(...pt(e,2,b.green)),r(...qe({seg:16,w:.27,h:t*.78,y:i,body:b.silver,glass:b.skyDeep,style:"ribbon",seed:251,glow:b.winCool}));const a=i+t*.78+.18;r($(Ct(.05,.1,.1,10),b.silver,{p:[0,i+t*.78+.05,0]})),r(lt(an(.12,2),b.winCool,{p:[0,a,0]})),r(tr(.24,a,b.winWarm,[Math.PI/2+.5,0,.3])),r(tr(.29,a,b.winPink,[Math.PI/2-.45,0,-.4]));break}case 25:{r(...pt(e,0));for(let a=0;a<3;a++){const o=a/3*Math.PI*2,l=[];for(let c=0;c<4;c++){const u=.36-c*.07;l.push(...Nt(qe({w:.08,h:t*(.22-c*.02),y:0,body:b.silver,glass:b.sky,style:"ribbon",seed:261+c}),[0,t*(.22*c-.01*c*(c-1)),u/2],[0,0,0],[1,1,u/.16]))}r(...Nt(l,[0,i,0],[0,o,0]))}r(...qe({seg:12,w:.12,top:.05,h:t*.92,y:i,body:b.silver,glass:b.skyDeep,style:"glass",seed:265,glow:b.winCool})),r(...Xt(i+t*.92,t*.18,b.silver,b.winCool));break}case 26:{r(...pt(e,3)),r(...qe({seg:12,w:.18,top:.15,h:t*.62,y:i,body:b.white,glass:b.lilac,style:"fins",seed:271,glow:b.winPink})),r($(jn(12,.15,.32,.12),b.white,{p:[0,i+t*.62,0]})),r(...qe({seg:12,w:.32,h:t*.12,y:i+t*.62+.12,body:b.white,glass:b.lavender,style:"glass",seed:272,lit:.8,glow:b.winPink})),r($(jn(12,.33,.1,.1),b.white,{p:[0,i+t*.74+.12,0]})),r(...Xt(i+t*.74+.22,t*.2,b.silver,b.winPink));break}case 27:{r(...pt(e,2,b.orange)),r(...qe({w:.3,h:t*.78,y:i,body:b.gold,glass:b.skyDeep,style:"fins",seed:281,lit:.55})),r($(Ee(.66,.05,.66),b.gold,{p:[0,i+t*.78+.025,0]})),r(...$l(10,.3,i+t*.78+.05,.26,b.winWarm,!0,-.15)),r(lt(new Jr(.1),b.butter,{p:[0,i+t*.78+.3,0],s:[.8,1.3,.8]})),r($(Ct(.02,.05,.2,6),b.gold,{p:[0,i+t*.78+.15,0]}));break}case 28:{r(...pt(e,2));for(const a of[-1,1]){const o=Nt([...qe({w:.13,h:t*.85,y:0,body:b.white,glass:b.teal,style:"fins",seed:291,glow:b.winCool}),Od(.13,.13,.25,b.tealDeep,t*.85)],[0,0,0],[0,a<0?Math.PI:0,0],[1,1,2.2]);r(...Nt(Vl(o,.06*a,.1),[a*.2,i,0]))}r(lt(Ee(.05,t*1.05,.05),b.winCool,{p:[0,i+t*.525,0]})),r(lt(an(.09,1),b.white,{p:[0,i+t*1.08,0]}));break}case 29:{r(...pt(e,2,b.orange)),r(...Xl(4,.3,t*.95,i,Math.PI,b.gold,b.pink,b.winPink,301,.24)),r(...Xt(i+t*.95,.24,b.gold,b.winPink));break}case 30:{r(...pt(e,3,b.green)),r(...qe({seg:12,w:.31,top:.08,h:t*.9,y:i,body:b.white,glass:b.lavender,style:"glass",seed:311,glow:b.winPink}));for(let a=0;a<2;a++)r(tr(.33-a*.08,i+t*(.42+a*.22),[b.winCool,b.winPink][a],[Math.PI/2+(a?.25:-.2),0,0],.012));r(...Xt(i+t*.9,t*.18,b.silver,b.winCool));break}case 31:{r(...pt(e,0)),r(...qe({w:.18,h:t*.86,y:i,body:b.silver,glass:b.sky,style:"fins",seed:321,lit:.5})),r(Ii(4,.18,.2,b.gold,i+t*.86)),r(lt(new Jr(.07),b.butter,{p:[0,i+t*.86+.28,0]}));for(const[a,o]of[[1,1],[-1,1],[1,-1],[-1,-1]])r(...Nt([...qe({seg:8,w:.075,h:t*.42,y:0,body:b.white,glass:b.lavender,style:"ribbon",seed:322,glow:b.winPink}),Ii(8,.085,.16,b.gold,t*.42)],[a*.3,i,o*.3]));for(const a of[0,Math.PI/2])r(...Nt([$(Ee(.6,.12,.05),b.white,{p:[0,.06,.3]}),lt(Ee(.08,.08,.055),b.winWarm,{p:[0,.05,.3]})],[0,i,0],[0,a,0]));break}default:{r(...pt(e,2,b.green));for(const a of[-.25,.25])r(...Nt([...qe({w:.11,h:t*.9,y:0,body:b.white,glass:b.butter,style:"fins",seed:331,glow:b.winWarm}),Ii(4,.11,.22,b.gold,t*.9),...Xt(t*.9+.2,.18,b.gold,b.winWarm)],[a,i,0]));r($(Ee(.4,.08,.16),b.white,{p:[0,i+t*.8,0]})),r($(Ee(.4,.05,.16),b.gold,{p:[0,i+t*.35,0]})),r(lt(new fa(.15,.025,6,28),b.winWarm,{p:[0,i+t*.58,0]})),r(lt(new Co(.13,24),b.butter,{p:[0,i+t*.58,0]})),r(lt(new Co(.13,24).rotateY(Math.PI),b.butter,{p:[0,i+t*.58,0]}));break}}return s}function fS(n){switch(n){case 0:return sS();case 1:return rS();case 2:return aS();case 3:return oS();case 4:return lS();case 5:return cS();case 6:return uS();default:return dS(n)}}function pS(n=1){return[$(hr(an(.26,0),.06,30+n),Ge.rock,{p:[-.04,.17,0],r:[.3,.5,.2],s:[1.1,.8,1]}),$(hr(an(.16,0),.04,31+n),Ge.rockDark,{p:[.2,.1,.13],r:[.6,.1,.9],s:[1,.8,1]}),$(hr(an(.11,0),.03,32+n),Ge.rockLight,{p:[.1,.07,-.21],r:[.2,.8,.1]})]}function mS(){const n=[];for(let e=0;e<8;e++){const t=e/8*Math.PI*2+.2;n.push($(hr(an(.065,0),.015,40+e),e%2?Ge.rockDark:Ge.rock,{p:[Math.cos(t)*.24,.035,Math.sin(t)*.24],s:[1.2,.75,1]}))}n.push(lt(Ct(.15,.17,.03,8),Ge.glowWarm,{p:[0,.02,0]}));for(let e=0;e<4;e++){const t=e/4*Math.PI*2+.4;n.push($(Ct(.026,.034,.3,6),e%2?Ge.plankDark:Ge.trunk,{p:[Math.cos(t)*.07,.13,Math.sin(t)*.07],r:[-Math.sin(t)*.5,0,Math.cos(t)*.5]}))}return n.push($(Ct(.05,.05,.3,7),Ge.plank,{p:[-.36,.05,.1],r:[Math.PI/2,.5,0]})),n.push($(Ct(.05,.05,.28,7),Ge.plankDark,{p:[.3,.05,-.28],r:[Math.PI/2,-.7,0]})),n}function gS(){return[lt(or(.11,.46,6),Ge.flameOuter,{p:[0,.27,0]}),lt(or(.075,.3,5),Ge.glowWarm,{p:[.07,.19,.03],r:[0,.6,0]}),lt(or(.07,.26,5),Ge.flameInner,{p:[-.06,.17,.04],r:[0,1.2,0]}),lt(or(.05,.2,5),Ge.flameInner,{p:[.01,.14,.08],r:[0,.3,0]})]}function vS(){const n=[];for(let e=0;e<6;e++){const t=e/6*Math.PI*2;n.push($(hr(an(.055,0),.012,60+e),e%2?Ge.rockDark:Ge.rock,{p:[Math.cos(t)*.18,.03,Math.sin(t)*.18],s:[1.2,.75,1]}))}n.push(lt(Ct(.11,.13,.025,8),Ge.glowWarm,{p:[0,.016,0]}));for(let e=0;e<3;e++){const t=e/3*Math.PI*2+.3;n.push($(Ct(.022,.028,.24,6),e%2?Ge.plankDark:Ge.trunk,{p:[Math.cos(t)*.055,.1,Math.sin(t)*.055],r:[-Math.sin(t)*.5,0,Math.cos(t)*.5]}))}return n}function _S(){return[$(Ct(.1,.12,.05,8),b.slateBlue,{p:[0,.025,0]}),$(Ct(.05,.07,.08,8),b.slateBlue,{p:[0,.09,0]}),$(Ct(.022,.03,.72,8),b.slateBlue,{p:[0,.49,0]}),$(Ct(.045,.045,.03,8),b.gold,{p:[0,.4,0]}),$(Ct(.07,.035,.04,8),b.slateBlue,{p:[0,.86,0]}),lt(Ct(.075,.055,.15,6),b.winWarm,{p:[0,.955,0]}),...[0,1,2,3,4,5].map(n=>$(Ee(.012,.16,.012),b.slateBlue,{p:[Math.sin(n/6*Math.PI*2)*.07,.955,Math.cos(n/6*Math.PI*2)*.07]})),$(or(.1,.09,6),b.slateBlue,{p:[0,1.075,0]}),$(an(.02,0),b.gold,{p:[0,1.13,0]}),$(Qi(.05,81),b.green,{p:[.12,.04,.06]}),$(an(.018,0),Ge.flowerPink,{p:[.13,.08,.09]})]}let no=null;const Bd=new Map;function xS(n){switch(n){case Bt:return[pS(),.3];case Zt:return[mS(),.15];case gn:return[vS(),.12];case Cn:return[_S(),.3];default:{const e=Math.min(Gt,Math.max(0,n));return[fS(e),[.25,.5,.5,.5,.6,.8,1][e]??1.2]}}}function MS(n){let e=Bd.get(n);if(!e){const[t,i]=xS(n);e=pp(t,i),Bd.set(n,e)}return e}function Yl(n){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);for(const[s,r]of n)i.addColorStop(s,r);return t.fillStyle=i,t.fillRect(0,0,64,64),new Ho(e)}let ql=null;function yS(){return ql||(ql={geo:new Rs(1,1).rotateX(-Math.PI/2),shadow:new Fn({map:Yl([[0,"rgba(14,12,40,0.5)"],[.55,"rgba(14,12,40,0.24)"],[1,"rgba(14,12,40,0)"]]),transparent:!0,depthWrite:!1,toneMapped:!1}),pool:new Fn({map:Yl([[0,"rgba(255,176,96,0.62)"],[.4,"rgba(255,150,80,0.26)"],[1,"rgba(255,130,70,0)"]]),transparent:!0,depthWrite:!1,blending:Zi,toneMapped:!1}),soft:new Fn({map:Yl([[0,"rgba(255,186,120,0.2)"],[.45,"rgba(255,160,100,0.08)"],[1,"rgba(255,140,90,0)"]]),transparent:!0,depthWrite:!1,blending:Zi,toneMapped:!1})}),ql}function SS(){return no||(no={material:new Qr({vertexColors:!0,roughness:.7,metalness:0}),glowMaterial:new Fn({vertexColors:!0,toneMapped:!1}),flame:pp(gS(),0)},no)}function bS(n){return n===Bt?.56:n===Zt?.6:n===gn?.45:n===Cn?.35:[.42,.62,.7,.72,.86,.94,.98][n]??1}function wS(n){return n===Bt?1.45:n===Zt||n===gn||n===Cn?1:[1.6,1.35,1.2,1.2,1.12,1.06,1][n]??1}function Kl(n,e,t=!0){const i=SS(),s=new mi,r=new mi;r.scale.setScalar(wS(n)),s.add(r);const a=MS(n),o=new Lt(a.body,e??i.material);o.castShadow=!e,o.receiveShadow=!e,r.add(o);const l=a.glow?new Lt(a.glow,e??i.glowMaterial):null;l&&o.add(l);const c=Math.random()*10,u=[];let f=1,h=null,d=0;if(!e){const x=yS(),m=new Lt(x.geo,x.shadow);m.scale.setScalar(bS(n)),m.position.y=.004,m.renderOrder=1,s.add(m);const p=n===Zt||n===gn||n===Cn,S=t?Qd(n):0;if(S>0){h=new Lt(x.geo,p?x.pool:x.soft),d=1.2+S*1,h.scale.setScalar(d),h.position.y=.006,h.renderOrder=1,s.add(h);const A=h;(n===Zt||n===gn)&&u.push(M=>A.scale.setScalar(d*(.75+.25*f)*(1+Math.sin(M*9+c)*.04+Math.sin(M*13.7)*.03)))}}if(n===Zt||n===gn){const x=new Lt(i.flame.glow,e??i.glowMaterial),m=n===gn?.62:.72;r.add(x),u.push(p=>{const S=m*(.55+.45*f);x.scale.set(S,S*(1+Math.sin(p*11+c)*.12+Math.sin(p*17.3)*.08),S),x.rotation.y=p*.8})}if(n===Cn&&l&&u.push(x=>{const m=f>.25||Math.sin(x*23+c)+Math.sin(x*7.1)>-.6;l.visible=m,h&&h.scale.setScalar(d*(m?.8+.2*f:.5))}),n===0||n===1){const x=n===0?.03:.015;u.push(m=>o.rotation.z=Math.sin(m*1.6+c)*x)}const g=n===gn||n===Cn?x=>f=Math.max(0,Math.min(1,x)):void 0;return{root:s,tick:u.length?x=>u.forEach(m=>m(x)):void 0,setFuel:g}}const rn={linear:n=>n,inQuad:n=>n*n,outCubic:n=>1-(1-n)**3,inCubic:n=>n**3,inOutSine:n=>-(Math.cos(Math.PI*n)-1)/2,outBack:n=>1+2.70158*(n-1)**3+1.70158*(n-1)**2};class ES{constructor(){this.list=[],this.speed=1}get active(){return this.list.length>0}run(e,t,i=rn.outCubic){return new Promise(s=>{const r=e*this.speed;if(r<=0){t(1),s();return}t(i(0)),this.list.push({elapsed:0,duration:r,ease:i,update:t,resolve:s})})}wait(e){return this.run(e,()=>{},rn.linear)}tick(e){if(!this.list.length)return;const t=[];for(const i of this.list){i.elapsed+=e;const s=Math.min(1,i.elapsed/i.duration);i.update(i.ease(s)),s>=1&&t.push(i)}if(t.length){this.list=this.list.filter(i=>!t.includes(i));for(const i of t)i.resolve()}}finishAll(){const e=this.list;this.list=[];for(const t of e)t.update(t.ease(1)),t.resolve()}}const TS=.45,Fi=-.03,qc=.36;function qo(n=En){return n/2+TS}function _p(n=En){return Fi-qc-.02}function AS(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Nu(n,e,t,i=t,s=0,r=1){n.getAttribute("normal")||n.computeVertexNormals();const a=n.getAttribute("normal"),o=n.getAttribute("position"),l=new Float32Array(a.count*3),c=new We(e),u=new We(t),f=new We(i);for(let h=0;h<a.count;h++){const d=a.getY(h),g=Ch.clamp((r-o.getY(h))/Math.max(1e-6,r-s),0,1),x=u.clone().lerp(f,g),m=d>0?x.lerp(c,Ch.smoothstep(d,.4,.92)):x;l.set([m.r,m.g,m.b],h*3)}return n.setAttribute("color",new Sn(l,3)),n}function CS(n,e){const t=new Vo;return t.moveTo(-n+e,-n),t.lineTo(n-e,-n),t.quadraticCurveTo(n,-n,n,-n+e),t.lineTo(n,n-e),t.quadraticCurveTo(n,n,n-e,n),t.lineTo(-n+e,n),t.quadraticCurveTo(-n,n,-n,n-e),t.lineTo(-n,-n+e),t.quadraticCurveTo(-n,-n,-n+e,-n),t}function xp(n,e,t,i,s){const r=new Sa(CS(n-i,t),{depth:Math.max(.01,e-2*i),bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,curveSegments:6});return r.rotateX(-Math.PI/2),r.translate(0,s-(e-i),0),r.deleteAttribute("uv"),r.index?r.toNonIndexed():r}function RS(){const n=new Yo(.92,.06,.92,1,.012).toNonIndexed();return n.translate(0,-.03,0),n.deleteAttribute("uv"),Nu(n,Ge.tile,Ge.tileEdge)}function PS(){return Mp([Nu(xp(.5,.2,.08,.03,0),Ge.grassTop,Ge.soilLight,Ge.soilDark,-.2,0)])}function Mp(n){const e=["position","normal","color"],t=new $t;for(const i of e){const s=n.reduce((o,l)=>o+l.getAttribute(i).array.length,0),r=new Float32Array(s);let a=0;for(const o of n){const l=o.getAttribute(i).array;r.set(l,a),a+=l.length}t.setAttribute(i,new Sn(r,3))}return t}function LS(n){const e=qo(n),t=Fi-qc;return Mp([Nu(xp(e,qc,.22,.05,Fi),Ge.grassTop,Ge.soilLight,Ge.soilDeep,t,Fi)])}function IS(n){const e=AS(n*131+7),t=qo(n),i=[],s=(o,l,c,u)=>i.push(...Iu(Du(u===b.orange?9883747:jr),o,Fi,l,e()*6,.32*c)),r=(o,l)=>{i.push($(Ct(.007,.009,.22,6),b.slateBlue,{p:[o,Fi+.11,l]})),i.push(lt(mp(.02,10,8),b.winWarm,{p:[o,Fi+.23,l]}))},a=()=>{const o=Math.floor(e()*4),l=(e()*2-1)*(t-.25),c=t-.2;return o===0?[l,-c]:o===1?[l,c]:o===2?[-c,l]:[c,l]};for(const[o,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])s(o*(t-.2),l*(t-.2),1.1+e()*.25,e()>.4?b.orange:Ge.leaf);for(let o=0;o<n*2;o++){const[l,c]=a(),u=e();u<.4?s(l,c,.75+e()*.3,e()>.45?b.orange:Ge.leaf):u<.75?i.push($(Qi(.05+e()*.03,o+90),e()>.5?b.green:b.greenLight,{p:[l,Fi+.035,c],s:[1.2,.8,1.2]})):r(l,c)}return i}function DS(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");return t.filter="blur(28px)",t.fillStyle="rgba(8, 9, 34, 0.6)",t.fillRect(256*.22,256*.22,256*.56,256*.56),new Ho(e)}function NS(n=En){const e=new mi,t=new Qr({vertexColors:!0,roughness:.82,metalness:0}),i=new Fn({vertexColors:!0,toneMapped:!1}),s=new Lt(new Rs(80,80).rotateX(-Math.PI/2),new zg({color:460831,opacity:.45}));s.receiveShadow=!0;const r=new Lt(new Rs(1,1).rotateX(-Math.PI/2),new Fn({map:DS(),transparent:!0,depthWrite:!1,toneMapped:!1}));r.renderOrder=-1,e.add(s,r);let a=null,o=null,l=null;const c=u=>{for(const g of[a,o,l])g&&(e.remove(g),g.geometry.dispose());a=new Lt(LS(u),t),a.receiveShadow=!0,a.castShadow=!0;const f=IS(u);o=new Lt(Ro(f.filter(g=>!g.glow),.15,Fi),t),o.receiveShadow=!0,o.castShadow=!0,l=new Lt(Ro(f.filter(g=>g.glow),0),i),e.add(a,o,l);const h=_p(u);s.position.y=h+.01;const d=qo(u)*2*1.7;r.scale.set(d,1,d),r.position.set(.45,h+.015,-.45)};return c(n),{group:e,tick:()=>{},setSize:c}}let Jl=null;const Zl={iso:{azimuth:Math.PI/4,elevation:Math.PI/6},cozy:{azimuth:0,elevation:.88,fov:30}},_s=1,fs=Math.PI/2,US=Math.max(...Ms)**2;let ps=En,ms=ps*_s/2;function qt(n){const{x:e,y:t}=mr(n,ps);return new L((e+.5)*_s-ms,0,(t+.5)*_s-ms)}const FS=16773560,OS=new We(1.28,1.24,1.05),BS=new We(1.42,1.2,.72),kS=new We(1.25,.78,.62),zS=new We(1.22,1.18,1.3),GS=new We(1.16,1.2,1.1),HS=new We(1.3,1.1,.84),VS=new We(.42,.45,.68),WS=10481864,Ql=.62,XS=[15655622,14865328,Ge.grassLight],$S=[Ge.rockLight,Ge.rock,14865328];function YS(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new Ho(n);return i.colorSpace=mn,i}function qS(){const n=document.createElement("canvas");n.width=4,n.height=64;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,64);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.7,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0.95)"),e.fillStyle=t,e.fillRect(0,0,4,64);const i=new Ho(n);return i.colorSpace=mn,i}class KS{constructor(e,t){this.container=e,this.scene=new kh,this.ortho=new pa(-5,5,5,-5,.1,120),this.perspective=new Vn(30,1,.5,200),this.camera=this.ortho,this.tweens=new ES,this.tileBase=[],this.side=En,this.lit=null,this.spin=0,this.spinGen=0,this.fitOffset=new L(0,10,10),this.pieces=new Map,this.fuel=new Map,this.pieceLayer=new mi,this.fxLayer=new mi,this.raycaster=new Qg,this.groundPlane=new Di(new L(0,1,0),0),this.ghost=null,this.rest=null,this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.frames=[],this.view="iso",this.arrows=new Map,this.pieceYaw=0,this.insets={top:0,right:0,bottom:0,left:0},this.reducedMotion=!1,this.dirty=!0,this.lastFrame=0,this.lastIdleRender=0,this.clock=0,this.shake=0,this.rafId=0,this.width=0,this.height=0,this.baseCamPos=new L,this.ringPool=[],this.particlePool=[],this.glowPool=[],this.animGen=0,this.performing=!1,this.leaning=new Map,this.lost=!1,this.dprQuery=null,this.handleContextLost=s=>{s.preventDefault(),this.lost=!0,this.stopShake()},this.handleContextRestored=()=>{this.lost=!1,this.dirty=!0,this.onContextRestored?.()},this.onPixelRatioChange=()=>{this.watchPixelRatio(),this.resize()},this.renderer=t??new Jy({antialias:!0,alpha:!0,powerPreference:"high-performance"});const i=Math.min(window.innerWidth,window.innerHeight)<700;this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wr,this.renderer.outputColorSpace=mn,this.renderer.toneMapping=fu,this.renderer.toneMappingExposure=1,this.renderer.setClearColor(0,0),this.canvas=this.renderer.domElement,this.canvas.className="board-canvas",e.appendChild(this.canvas),this.canvas.addEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this.ghostMaterial=new Qr({vertexColors:!0,transparent:!0,opacity:.6,depthWrite:!1,roughness:.9}),this.restMaterial=new Qr({color:13815280,transparent:!0,opacity:.8,depthWrite:!1,roughness:.8}),this.buildLights(i),ps=En,ms=ps*_s/2,this.side=ps,this.world=NS(ps),this.scene.add(this.world.group),this.tileMaterial=new Qr({vertexColors:!0,roughness:.85}),this.buildTiles(),this.scene.add(this.pieceLayer,this.fxLayer),this.buildFxPools(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.watchPixelRatio(),this.resize(),this.loop=this.loop.bind(this),this.rafId=requestAnimationFrame(this.loop)}buildLights(e){this.scene.add(new sd(10135276,2762832,1.35));const t=new ja(13489663,1.25);t.position.set(-6,12,7),t.castShadow=!0,t.shadow.mapSize.set(e?1024:2048,e?1024:2048);const i=t.shadow.camera;i.left=-9,i.right=9,i.top=9,i.bottom=-9,i.near=1,i.far=40,t.shadow.bias=-5e-4,t.shadow.normalBias=.03,t.shadow.radius=9,t.shadow.blurSamples=16,this.scene.add(t);const s=new ja(16757370,.4);s.position.set(8,4,2),this.scene.add(s)}get cellCount(){return this.side*this.side}buildTiles(){this.tiles&&(this.scene.remove(this.tiles),this.tiles.geometry.dispose(),this.tiles.dispose()),this.tileBase.length=0;const e=new Kh(RS(),this.tileMaterial,this.cellCount),t=new ht;for(let i=0;i<this.cellCount;i++){const s=qt(i);t.makeTranslation(s.x,0,s.z),e.setMatrixAt(i,t);const{x:r,y:a}=mr(i,this.side),o=Math.sin(i*91.17)*43758.5453,l=o-Math.floor(o),c=((r+a)%2?.93:1)*(.97+l*.05),u=l>.75?.04:0;this.tileBase.push(new We(c*(1+u),c,c*(.97-u))),e.setColorAt(i,this.tileBase[i])}e.receiveShadow=!0,e.castShadow=!0,this.scene.add(e),this.tiles=e}setBoardSize(e){if(e!==this.side){this.cancelAnimations();for(const t of[...this.pieces.keys()])this.removePiece(t);this.clearGhost(),this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.lit=null,this.setSuggestions([]),this.side=e,ps=e,ms=e*_s/2,this.buildTiles(),this.applyHighlights(),this.world.setSize(e),this.fitCamera()}}getBoardSize(){return this.side}buildFxPools(){const e=new Zr(.42,.5,32);e.rotateX(-Math.PI/2);for(let o=0;o<6;o++){const l=new Lt(e,new Fn({color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1}));l.visible=!1,this.ringPool.push(l),this.fxLayer.add(l)}const t=new Lu(.06,0);for(let o=0;o<56;o++){const l=new Lt(t,new Fn({color:16777215,transparent:!0,toneMapped:!1}));l.visible=!1,this.particlePool.push(l),this.fxLayer.add(l)}const i=new Zr(.585,.675,4,1,Math.PI/4);i.rotateX(-Math.PI/2);for(let o=0;o<12;o++){const l=new Lt(i,new Fn({color:16777215,transparent:!0,depthWrite:!1,blending:Zi,toneMapped:!1}));l.visible=!1,l.renderOrder=2,this.frames.push(l),this.fxLayer.add(l)}const s=new Zr(.5,.57,4,1,Math.PI/4);s.rotateX(-Math.PI/2),this.suggest=new Kh(s,new Fn({color:WS,transparent:!0,opacity:Ql,depthWrite:!1,blending:Zi,toneMapped:!1}),US),this.suggest.count=0,this.suggest.visible=!1,this.suggest.renderOrder=2,this.suggest.frustumCulled=!1,this.fxLayer.add(this.suggest);const r=YS(),a=qS();for(let o=0;o<3;o++){const l=new ng(new Vf({map:r,color:16765802,transparent:!0,depthWrite:!1,blending:Zi,toneMapped:!1})),c=new Lt(new ts(.42,.48,2.2,20,1,!0).translate(0,1.1,0),new Fn({map:a,color:16765802,transparent:!0,depthWrite:!1,side:fi,blending:Zi,toneMapped:!1}));l.visible=c.visible=!1,this.glowPool.push({sprite:l,column:c}),this.fxLayer.add(l,c)}}isContextLost(){return this.lost||this.renderer.getContext().isContextLost()}markDirty(){this.dirty=!0}setReducedMotion(e){this.reducedMotion=e,this.tweens.speed=e?.35:1;for(const t of this.frames){const i=t.material;i.opacity=i.userData.base??1}this.suggest.material.opacity=Ql,this.updateLean(),this.dirty=!0}setView(e){this.resetLean(),this.view=e,this.pieceYaw=e==="cozy"?-.6:0;for(const t of this.pieces.values())t.model.root.rotation.y=this.pieceYaw;this.ghost&&(this.ghost.model.root.rotation.y=this.pieceYaw),this.fitCamera()}getView(){return this.view}setInsets(e){Object.keys(e).every(i=>Math.abs(e[i]-this.insets[i])<.5)||(this.insets={...e},this.fitCamera())}resize(){const e=this.container.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));!this.applyPixelRatio()&&t===this.width&&i===this.height||(this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.fitCamera(),this.renderNow())}applyPixelRatio(){const e=Math.min(window.innerWidth,window.innerHeight)<700,t=Math.min(window.devicePixelRatio||1,e?2:1.75);return t===this.renderer.getPixelRatio()?!1:(this.renderer.setPixelRatio(t),!0)}watchPixelRatio(){this.dprQuery?.removeEventListener("change",this.onPixelRatioChange),this.dprQuery=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,this.dprQuery?.addEventListener?.("change",this.onPixelRatioChange)}renderNow(){document.hidden||this.lost||(this.renderer.render(this.scene,this.camera),this.dirty=!1)}fitCamera(){const e=Zl[this.view],t=this.width,i=this.height,s=this.insets,r=Math.max(60,t-s.left-s.right),a=Math.max(60,i-s.top-s.bottom),o=!e.fov&&r/a<.85?.6:e.elevation,l=new L(Math.sin(e.azimuth)*Math.cos(o),Math.sin(o),Math.cos(e.azimuth)*Math.cos(o)),c=[],u=!e.fov&&r/a>1.1,f=u?qo(this.side)+.1:ms+.22,h=u?[_p(this.side),2]:[-.45,1.8];for(const m of[-f,f])for(const p of[-f,f])for(const S of h)c.push(new L(m,S,p));const d=s.left+r/2,g=s.top+a/2,x=1.04;if(e.fov){const m=this.perspective;m.fov=e.fov,m.aspect=t/i,m.clearViewOffset(),m.updateProjectionMatrix();let p=24,S={minX:0,maxX:0,minY:0,maxY:0};for(let R=0;R<10;R++){m.position.copy(l).multiplyScalar(p),m.lookAt(0,0,0),m.updateMatrixWorld(),S={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const T of c){const P=T.clone().project(m);S.minX=Math.min(S.minX,P.x),S.maxX=Math.max(S.maxX,P.x),S.minY=Math.min(S.minY,P.y),S.maxY=Math.max(S.maxY,P.y)}if(R===9)break;const _=Math.max((S.maxX-S.minX)/(2*r/t),(S.maxY-S.minY)/(2*a/i));p*=_*x}const A=(S.minX+S.maxX)/2,M=(S.minY+S.maxY)/2,w=d/t*2-1,E=1-g/i*2;m.setViewOffset(t,i,(A-w)*t/2,(E-M)*i/2,t,i),m.updateProjectionMatrix(),this.camera=m,this.fitOffset.copy(l).multiplyScalar(p)}else{const m=this.ortho;m.position.copy(l).multiplyScalar(30),m.lookAt(0,0,0),m.updateMatrixWorld();const p=m.matrixWorldInverse;let S=1/0,A=-1/0,M=1/0,w=-1/0;for(const T of c){const P=T.clone().applyMatrix4(p);S=Math.min(S,P.x),A=Math.max(A,P.x),M=Math.min(M,P.y),w=Math.max(w,P.y)}const E=Math.max((A-S)/r,(w-M)/a)*x,R=(S+A)/2,_=(M+w)/2;m.left=R-d*E,m.right=m.left+t*E,m.top=_+g*E,m.bottom=m.top-i*E,m.updateProjectionMatrix(),this.camera=m,this.fitOffset.copy(l).multiplyScalar(30)}this.applySpin()}applySpin(){this.camera.position.copy(this.fitOffset).applyAxisAngle(new L(0,1,0),this.spin),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.baseCamPos.copy(this.camera.position),this.dirty=!0}getSpinQuarter(){return(Math.round(this.spin/fs)%4+4)%4}rotate(e){this.glideSpin(Math.round(this.spin/fs)*fs+e*fs)}dragSpin(e){this.spinGen++,this.spin=e,this.applySpin()}getSpin(){return this.spin}endSpin(e=0){const t=Math.abs(e)>2.5?Math.sign(e)*.5:0;this.glideSpin(Math.round(this.spin/fs+t)*fs)}glideSpin(e){const t=++this.spinGen,i=this.spin;if(Math.abs(e-i)<1e-4||this.reducedMotion){this.spin=e,this.applySpin();return}this.tweens.run(Math.min(420,240+Math.abs(e-i)*120),s=>{t===this.spinGen&&(this.spin=i+(e-i)*s,this.applySpin())},rn.inOutSine)}tilePixelSize(){const e=this.worldToScreen(new L(-.5,0,0)),t=this.worldToScreen(new L(.5,0,0));return Math.hypot(e.x-t.x,e.y-t.y)}worldToScreen(e){const t=e.clone().project(this.camera),i=this.canvas.getBoundingClientRect();return{x:i.left+(t.x+1)/2*i.width,y:i.top+(1-t.y)/2*i.height}}cellToScreen(e,t=.5){return this.worldToScreen(qt(e).setY(t))}screenAxes(){const e=this.worldToScreen(new L(0,0,0)),t=this.worldToScreen(new L(1,0,0)),i=this.worldToScreen(new L(0,0,1));return{col:{x:t.x-e.x,y:t.y-e.y},row:{x:i.x-e.x,y:i.y-e.y}}}arrowStep(e){const t=this.getSpinQuarter(),i=`${this.view}:${t}`;let s=this.arrows.get(i);if(!s){const r=Zl[this.view];s=eS(r.azimuth+t*fs,r.elevation),this.arrows.set(i,s)}return{...s[e]}}pick(e,t){const i=this.canvas.getBoundingClientRect(),s=new he((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=null;const a=new L;if(this.raycaster.ray.intersectPlane(this.groundPlane,a)){const l=Math.floor((a.x+ms)/_s),c=Math.floor((a.z+ms)/_s);l>=0&&c>=0&&l<this.side&&c<this.side&&(r=c*this.side+l)}if(r!==null&&!this.pieces.has(r))return r;const o=this.raycaster.intersectObjects(this.pieceLayer.children,!0);for(const l of o){let c=l.object;for(;c&&c.userData.index===void 0;)c=c.parent;if(c)return c.userData.index}return r}addPiece(e,t){this.removePiece(e);const i=Kl(t);i.root.position.copy(qt(e)),i.root.rotation.y=this.pieceYaw,i.root.userData.index=e;const s=this.fuel.get(e);s!==void 0&&i.setFuel?.(s),i.tick?.(this.clock),this.pieceLayer.add(i.root);const r={piece:t,model:i};return this.pieces.set(e,r),this.dirty=!0,r}removePiece(e){const t=this.pieces.get(e);t&&(this.pieceLayer.remove(t.model.root),this.pieces.delete(e),this.leaning.get(e)===t&&this.leaning.delete(e),this.dirty=!0)}sync(e){this.performing&&this.cancelAnimations(),e.length!==this.cellCount&&this.setBoardSize(Math.round(Math.sqrt(e.length)));for(let t=0;t<this.cellCount;t++){const i=e[t],s=this.pieces.get(t);i===yt?s&&this.removePiece(t):!s||s.piece!==i?this.addPiece(t,i):(s.model.root.position.copy(qt(t)),s.model.root.rotation.set(0,this.pieceYaw,0),s.model.root.scale.setScalar(1))}this.leaning.clear(),this.dirty=!0}setHover(e,t,i,s=!1){if(this.highlight.hover=s?null:e,this.highlight.blocked=s?e:null,this.highlight.merge=i,this.applyHighlights(),this.updateLean(),e===null||t===null||s){this.showRest();return}this.placeGhost(t,e,!1)}setRest(e,t){this.rest=e===null||t===null?null:{index:e,piece:t},this.highlight.hover===null&&this.showRest(),this.applyHighlights()}showRest(){!this.rest||this.performing?this.clearGhost():this.placeGhost(this.rest.piece,this.rest.index,!0)}placeGhost(e,t,i){if(!this.ghost||this.ghost.piece!==e||this.ghost.resting!==i){this.clearGhost();const s=Kl(e,i?this.restMaterial:this.ghostMaterial);s.root.rotation.y=this.pieceYaw,this.fxLayer.add(s.root),this.ghost={piece:e,model:s,index:t,resting:i}}this.ghost.index=t,this.ghost.model.root.position.copy(qt(t)),this.dirty=!0}setLit(e){e===this.lit||e&&this.lit&&e.length===this.lit.length&&e.every((i,s)=>i===this.lit[s])||(this.lit=e?[...e]:null,this.applyHighlights())}setCursor(e){this.highlight.cursor=e,this.applyHighlights()}setSuggestions(e){const t=[...new Set(e)].filter(s=>Number.isInteger(s)&&s>=0&&s<this.cellCount),i=new ht;t.forEach((s,r)=>{const a=qt(s);this.suggest.setMatrixAt(r,i.makeTranslation(a.x,.014,a.z))}),this.suggest.count=t.length,this.suggest.visible=t.length>0,this.suggest.instanceMatrix.needsUpdate=!0,this.dirty=!0}clearGhost(){this.ghost&&(this.fxLayer.remove(this.ghost.model.root),this.ghost=null,this.dirty=!0)}applyHighlights(){const e=new Set(this.highlight.merge),t=new We;for(let s=0;s<this.cellCount;s++)t.copy(this.tileBase[s]),this.lit&&t.multiply(this.lit[s]?HS:VS),e.has(s)&&t.multiply(BS),s===this.highlight.cursor&&t.multiply(GS),s===this.highlight.hover&&t.multiply(OS),s===this.highlight.blocked&&t.multiply(kS),this.rest&&s===this.rest.index&&this.highlight.hover===null&&t.multiply(zS),this.tiles.setColorAt(s,t);this.tiles.instanceColor.needsUpdate=!0;const i=[];this.highlight.hover!==null&&i.push([this.highlight.hover,16774084,1]),this.highlight.blocked!==null&&i.push([this.highlight.blocked,16752506,.8]),this.highlight.cursor!==null&&this.highlight.cursor!==this.highlight.hover&&i.push([this.highlight.cursor,14217471,.8]),this.rest&&this.highlight.hover===null&&this.highlight.blocked===null&&!this.performing&&i.push([this.rest.index,15130879,.45]);for(const s of this.highlight.merge)i.push([s,16763213,.75]);this.frames.forEach((s,r)=>{const a=i[r];if(s.visible=!!a,!a)return;const o=qt(a[0]);s.position.set(o.x,.012,o.z);const l=s.material;l.color.set(a[1]),l.userData.base=a[2],l.opacity=a[2]}),this.dirty=!0}resetLean(){for(const[e,t]of this.leaning)t.model.root.position.copy(qt(e)),t.model.root.rotation.set(0,this.pieceYaw,0),this.dirty=!0;this.leaning.clear()}updateLean(){const e=this.highlight.hover,t=this.highlight.merge;if(this.reducedMotion||this.performing||e===null||!t.length){this.resetLean();return}for(const[o,l]of this.leaning)t.includes(o)&&this.pieces.get(o)===l||(l.model.root.position.copy(qt(o)),l.model.root.rotation.set(0,this.pieceYaw,0),this.leaning.delete(o));const i=qt(e),s=Math.sin(this.clock*6.5),r=new Ei().setFromAxisAngle(new L(0,1,0),this.pieceYaw),a=new L;for(const o of t){const l=this.pieces.get(o);if(!l||l.piece===Bt)continue;const c=qt(o),u=i.clone().sub(c).setY(0);if(u.lengthSq()<1e-6)continue;u.normalize();const f=l.model.root;f.position.copy(c).addScaledVector(u,.06+.02*s),a.set(u.z,0,-u.x),f.quaternion.setFromAxisAngle(a,.07+.02*s).multiply(r),this.leaning.set(o,l)}this.dirty=!0}ring(e,t,i,s=520){const r=this.ringPool.find(o=>!o.visible);if(!r)return;const a=r.material;a.color.set(t),r.position.set(e.x,.03,e.z),r.visible=!0,this.tweens.run(s,o=>{r.scale.setScalar(.4+o*i),a.opacity=.9*(1-o)}).then(()=>r.visible=!1)}glow(e,t,i=700){const s=this.glowPool.find(o=>!o.sprite.visible);if(!s)return;const r=s.sprite.material,a=s.column.material;s.sprite.position.set(e.x,.45,e.z),s.column.position.set(e.x,0,e.z),s.sprite.visible=s.column.visible=!0,this.tweens.run(i,o=>{const l=Math.sin(Math.min(1,o*1.6)*Math.PI*.5)*(1-o);r.opacity=Math.min(1,l*1.6*t),s.sprite.scale.setScalar(1.4+t*.8+o*.6),a.opacity=l*.85*t,s.column.scale.set(1,.4+o*.8,1)},rn.linear).then(()=>s.sprite.visible=s.column.visible=!1)}burst(e,t,i,s=1,r=650){this.reducedMotion&&(i=Math.ceil(i/3));for(let a=0;a<i;a++){const o=this.particlePool.find(x=>!x.visible);if(!o)return;const l=o.material;l.color.set(t[a%t.length]);const c=a/i*Math.PI*2+Math.random()*.5,u=(.9+Math.random()*.8)*s,f=Math.cos(c)*u,h=Math.sin(c)*u,d=(1.6+Math.random()*1.4)*s;o.visible=!0,o.position.copy(e);const g=Math.random()*8;this.tweens.run(r,x=>{const m=x*(r/1e3);o.position.set(e.x+f*m,e.y+d*m-4.5*m*m,e.z+h*m),o.rotation.set(g*x,g*x*.7,0),o.scale.setScalar(1-x*.7),l.opacity=1-x*x},rn.linear).then(()=>o.visible=!1)}}dust(e,t,i,s=420){this.reducedMotion&&(i=Math.ceil(i/2));for(let r=0;r<i;r++){const a=this.particlePool.find(d=>!d.visible);if(!a)return;const o=a.material;o.color.set(t[r%t.length]);const l=r/i*Math.PI*2+Math.random()*.6,c=Math.cos(l),u=Math.sin(l),f=.22+Math.random()*.14,h=.06+Math.random()*.06;a.visible=!0,this.tweens.run(s,d=>{const g=.3+f*d;a.position.set(e.x+c*g,.03+h*Math.sin(d*Math.PI*.8),e.z+u*g),a.rotation.set(l+d*2,d*3,0),a.scale.setScalar(.75+d*.35),o.opacity=.9*(1-d)},rn.outCubic).then(()=>a.visible=!1)}}bump(e){this.reducedMotion||(this.shake=Math.max(this.shake,e))}async animateMove(e,t,i={}){const s=this.animGen;this.performing=!0;try{this.clearGhost(),this.setHover(null,null,[]);for(const r of e){const a=r.kind==="place"||r.kind==="upgrade"?r.index:r.kind==="expire"||r.kind==="remove"?r.cells[0]:r.target,o=()=>i.onEvent?.(r,this.cellToScreen(a,.9));switch(r.kind){case"place":await this.animatePlace(r.index,r.piece,s,o);break;case"merge":await this.animateMerge(r.cells,r.target,r.toTier,r.step,s,o);break;case"festival":await this.animateFestival(r.cells,r.target,s,o);break;case"crumble":if(o(),s!==this.animGen)return!1;await this.animateCrumble(r.cells,s);break;case"expire":case"remove":if(o(),s!==this.animGen)return!1;await this.animateExpire(r.cells,s);break;case"upgrade":await this.animateUpgrade(r.index,r.toTier,s,o);break}if(s!==this.animGen)return!1}return this.performing=!1,this.sync(t),!0}finally{s===this.animGen&&(this.performing=!1)}}async animatePlace(e,t,i,s){const{model:r}=this.addPiece(e,t),a=r.root,o=qt(e),l=t===Bt||t>=2;if(await this.tweens.run(190,h=>{a.position.set(o.x,1-h,o.z);const d=.72+.28*Math.sqrt(h);a.scale.set(d*(1-.05*h),d*(1+.1*h),d*(1-.05*h))},rn.inQuad),i!==this.animGen||(s(),i!==this.animGen))return;this.ring(o,16774102,l?1:.8,360),this.dust(o,t===Bt?$S:XS,l?8:5);const c=l?.2:.15,u=l?.06:.035,f=new ht;await this.tweens.run(l?140:120,h=>{const d=h>=1?0:Math.sin(h*Math.PI);a.scale.set(1+d*c*.6,1-d*c,1+d*c*.6),a.position.y=-u*d,this.tiles.setMatrixAt(e,f.makeTranslation(o.x,-u*d,o.z)),this.tiles.instanceMatrix.needsUpdate=!0},rn.linear),i===this.animGen&&(a.scale.setScalar(1),a.position.copy(o))}async animateMerge(e,t,i,s,r,a){const o=qt(t),l=e.map(g=>this.pieces.get(g)).filter(g=>!!g),c=l.map(g=>g.model.root.position.clone()),u=Math.pow(.9,Math.min(s,5)-1);if(await this.tweens.run(230*u,g=>{l.forEach((x,m)=>{x.model.root.position.lerpVectors(c[m],o,g),x.model.root.position.y=Math.sin(g*Math.PI)*.35,x.model.root.scale.setScalar(1-.55*g)})},rn.inCubic),r!==this.animGen)return;for(const g of e)this.removePiece(g);const{model:f}=this.addPiece(t,i);if(f.root.scale.setScalar(.001),a(),r!==this.animGen)return;const h=s>=2;this.glow(o,.75+i*.08+(h?.35:0)),this.ring(o,h?16765802:16774102,1.4+i*.25+(h?.8:0));const d=i<=1?[Ge.leafLight,Ge.leaf,16773560]:[16765802,Ge.wall,Ge.leafLight,Ge.roof];this.burst(o.clone().setY(.4),h?[16765802,...d]:d,8+i*3+(h?8:0),.8+i*.1),this.bump(h?.12+s*.03:.04),await this.tweens.run(320*u,g=>f.root.scale.setScalar(Math.max(.001,g)),rn.outBack),r===this.animGen&&f.root.scale.setScalar(1)}async animateFestival(e,t,i,s){const r=qt(t),a=e.map(o=>this.pieces.get(o)).filter(o=>!!o);if(await this.tweens.run(420,o=>{for(const l of a)l.model.root.position.y=Math.sin(o*Math.PI*.5)*.5,l.model.root.rotation.y=this.pieceYaw+o*Math.PI},rn.inOutSine),i===this.animGen&&(s(),i===this.animGen)){this.glow(r,1.4,900),this.ring(r,16765802,3.4,700),this.ring(r,16777215,2.2,500);for(const o of a)this.burst(o.model.root.position.clone(),[16765802,Ge.flag,Ge.leafLight,Ge.white,Ge.stripe],9,1.2,800);if(this.bump(.3),await this.tweens.run(260,o=>{for(const l of a)l.model.root.scale.setScalar(Math.max(.001,1-o))}),i===this.animGen)for(const o of e)this.removePiece(o)}}async animateCrumble(e,t){const i=e.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of e)this.burst(qt(s).setY(.2),[Ge.rock,Ge.rockDark,Ge.moss],6,.7,500);if(await this.tweens.run(340,s=>{for(const r of i)r.model.root.position.y=-s*.3,r.model.root.rotation.z=Math.sin(s*30)*.06*(1-s),r.model.root.scale.setScalar(Math.max(.001,1-s))},rn.inCubic),t===this.animGen)for(const s of e)this.removePiece(s)}async animateUpgrade(e,t,i,s){const r=qt(e),a=this.pieces.get(e);if(a&&(await this.tweens.run(160,l=>a.model.root.scale.setScalar(1+.15*l),rn.outCubic),i!==this.animGen))return;const{model:o}=this.addPiece(e,t);o.root.scale.setScalar(.001),s(),i===this.animGen&&(this.glow(r,.9+t*.08),this.ring(r,16765802,1.6+t*.2),this.burst(r.clone().setY(.4),[16765802,FS,16777215],12,.9),await this.tweens.run(320,l=>o.root.scale.setScalar(Math.max(.001,l)),rn.outBack),i===this.animGen&&o.root.scale.setScalar(1))}async animateExpire(e,t){const i=e.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of e)this.burst(qt(s).setY(.35),[13617384,10327236,16762480],7,.6,600);if(await this.tweens.run(420,s=>{for(const r of i)r.model.root.position.y=-s*.2,r.model.root.scale.setScalar(Math.max(.001,1-s))},rn.inCubic),t===this.animGen)for(const s of e)this.removePiece(s)}setBurn(e){this.fuel.clear();for(const[t,i]of e??[]){const s=this.pieces.get(t),r=s?xi[s.piece]?.life:void 0;r&&(this.fuel.set(t,i/r),s.model.setFuel?.(i/r))}this.dirty=!0}async nudge(e){const t=this.pieces.get(e);if(!t)return;const i=this.animGen,s=qt(e);await this.tweens.run(240,r=>t.model.root.position.x=s.x+Math.sin(r*Math.PI*4)*.06*(1-r),rn.linear),!(i!==this.animGen||this.pieces.get(e)!==t)&&t.model.root.position.copy(s)}async gameOverWave(){const e=this.animGen;this.performing=!0,this.resetLean();const t=[...this.pieces.entries()];if(await this.tweens.run(700,i=>{for(const[s,r]of t){const{x:a,y:o}=mr(s,this.side),l=i*3-(a+o)*.12;r.model.root.position.y=Math.max(0,Math.sin(Math.min(Math.max(l,0),1)*Math.PI))*.25}},rn.linear),e!==this.animGen)return!1;for(const[i,s]of t)this.pieces.get(i)===s&&(s.model.root.position.y=0);return this.performing=!1,!0}cancelAnimations(){this.animGen++,this.performing=!1,this.tweens.finishAll(),this.stopShake()}stopShake(){this.shake=0,this.camera.position.copy(this.baseCamPos),this.dirty=!0}finishAnimations(){this.cancelAnimations()}get animating(){return this.tweens.active}thumbnail(e,t=160){if(this.isContextLost())return"";const i=new kh;i.add(new sd(12897535,3815526,1.6));const s=new ja(14673151,1.5);s.position.set(-5,10,7),i.add(s);const r=new ja(16761482,.55);r.position.set(7,4,2),i.add(r);const a=new mi;Jl??(Jl=PS());const o=new Lt(Jl,this.tileMaterial);a.add(o);const l=Kl(e,void 0,!1);l.tick?.(.8),a.add(l.root),i.add(a),a.updateMatrixWorld(!0);const c=Zl.iso,u=new pa(-1,1,1,-1,.1,50);u.position.set(Math.sin(c.azimuth)*10,7,Math.cos(c.azimuth)*10),u.lookAt(0,0,0),u.updateMatrixWorld();const f=new ss().setFromObject(a);let h=1/0,d=-1/0,g=1/0,x=-1/0;for(const T of[f.min.x,f.max.x])for(const P of[f.min.y,f.max.y])for(const D of[f.min.z,f.max.z]){const B=new L(T,P,D).applyMatrix4(u.matrixWorldInverse);h=Math.min(h,B.x),d=Math.max(d,B.x),g=Math.min(g,B.y),x=Math.max(x,B.y)}const m=Math.max(d-h,x-g)/2*1.06,p=(h+d)/2,S=(g+x)/2;u.left=p-m,u.right=p+m,u.top=S+m,u.bottom=S-m,u.updateProjectionMatrix();const A=new Yn(t,t,{samples:4});A.texture.colorSpace=mn;const M=this.scene.fog;this.renderer.setRenderTarget(A),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(i,u);const w=new Uint8Array(t*t*4);if(this.renderer.readRenderTargetPixels(A,0,0,t,t,w),this.renderer.setRenderTarget(null),this.renderer.setClearColor(0,0),this.scene.fog=M,A.dispose(),this.dirty=!0,this.isContextLost())return"";const E=document.createElement("canvas");E.width=E.height=t;const R=E.getContext("2d"),_=R.createImageData(t,t);for(let T=0;T<t;T++)_.data.set(w.subarray((t-1-T)*t*4,(t-T)*t*4),T*t*4);return R.putImageData(_,0,0),E.toDataURL("image/png")}loop(e){this.rafId=requestAnimationFrame(this.loop);const t=this.lastFrame?e-this.lastFrame:16;if(this.lastFrame=e,document.hidden)return;const i=Math.min(64,t),s=this.tweens.active||this.shake>.001;if(this.tweens.tick(Math.min(1e3,t)),this.clock+=i/1e3,this.lost)return;const r=!this.reducedMotion&&e-this.lastIdleRender>33;if(!(!s&&!this.dirty&&!r)){if(r||s){if(this.lastIdleRender=e,!this.reducedMotion){this.world.tick(this.clock);for(const o of this.pieces.values())o.model.tick?.(this.clock);(this.leaning.size||this.highlight.merge.length)&&this.updateLean()}const a=this.reducedMotion?1:.75+Math.sin(this.clock*5)*.25;for(const o of this.frames){if(!o.visible)continue;const l=o.material;l.opacity=(l.userData.base??1)*a}if(this.suggest.visible){const o=this.reducedMotion?1:.7+Math.sin(this.clock*3)*.3;this.suggest.material.opacity=Ql*o}}if(this.ghost){const a=qt(this.ghost.index);this.ghost.model.root.position.set(a.x,this.reducedMotion?.05:.08+Math.sin(this.clock*4)*.05,a.z)}if(this.shake>.001){const a=this.shake;this.camera.position.set(this.baseCamPos.x+(Math.random()-.5)*a,this.baseCamPos.y+(Math.random()-.5)*a,this.baseCamPos.z+(Math.random()-.5)*a),this.shake*=Math.pow(1e-4,i/1e3)**.6,this.shake<=.001&&this.camera.position.copy(this.baseCamPos)}this.renderer.render(this.scene,this.camera),this.dirty=!1}}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.dprQuery?.removeEventListener?.("change",this.onPixelRatioChange),this.canvas.removeEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored,!1),this.renderer.dispose()}}const jl=[0,2,4,7,9,12,14,16,19,21,24],JS=392;function nr(n){return JS*Math.pow(2,n/12)}function io(n){n?.catch(()=>{})}class ZS{constructor(e,t=!1){this.ctx=null,this.master=null,this.noise=null,this.musicBus=null,this.musicTimer=0,this.nextBeat=0,this.beat=0,this.enabled=e,this.musicOn=t}unlock(){if(!this.enabled&&!this.musicOn)return;const e=this.ensure();e&&e.state!=="running"&&e.state!=="closed"&&io(e.resume()),this.musicOn&&this.startMusic()}get music(){return this.musicOn}setMusic(e){this.musicOn=e,e?this.unlock():this.stopMusic()}setPaused(e){this.ctx&&(e?io(this.ctx.suspend()):(this.enabled||this.musicOn)&&io(this.ctx.resume()))}startMusic(){const e=this.ensure();if(!(!e||this.musicTimer)){if(!this.musicBus){this.musicBus=e.createGain();const t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400;const i=e.createDelay(1);i.delayTime.value=.42;const s=e.createGain();s.gain.value=.28,this.musicBus.connect(t),t.connect(this.master),t.connect(i),i.connect(s).connect(i),i.connect(this.master)}this.musicBus.gain.cancelScheduledValues(e.currentTime),this.musicBus.gain.setValueAtTime(1e-4,e.currentTime),this.musicBus.gain.exponentialRampToValueAtTime(.32,e.currentTime+2.5),this.nextBeat=e.currentTime+.1,this.musicTimer=window.setInterval(()=>this.schedule(),120),this.schedule()}}stopMusic(){if(window.clearInterval(this.musicTimer),this.musicTimer=0,this.ctx&&this.musicBus){const e=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setValueAtTime(Math.max(1e-4,this.musicBus.gain.value),e),this.musicBus.gain.exponentialRampToValueAtTime(1e-4,e+.6)}}schedule(){const e=this.ctx;if(!e||!this.musicBus)return;const t=60/76/2,i=[[0,4,7,11],[-3,0,4,7],[-7,-3,0,4],[-5,-1,2,4]],s=[0,2,4,7,9,12,14,16];for(;this.nextBeat<e.currentTime+.6;){const r=this.nextBeat,a=Math.floor(this.beat/8),o=i[Math.floor(a/2)%i.length],l=this.beat%16;if(l===0){for(const f of o)this.voice(261.63*Math.pow(2,f/12),r,t*16,.05,"triangle",1.4);this.voice(65.41*Math.pow(2,o[0]/12),r,t*8,.12,"sine",.05)}l===8&&this.voice(65.41*Math.pow(2,o[0]/12),r,t*8,.1,"sine",.05);const c=Math.sin(this.beat*12.9898)*43758.5453,u=c-Math.floor(c);if(l%2===0&&u<.42){const f=s[Math.floor(u*100)%s.length];this.voice(523.25*Math.pow(2,f/12),r,.9,.05,"sine",.005)}this.nextBeat+=t,this.beat++}}voice(e,t,i,s,r,a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.value=e,c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+Math.max(.005,a)),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c).connect(this.musicBus),l.start(t),l.stop(t+i+.05)}ensure(){if(this.ctx)return this.ctx;try{const e=window.AudioContext??window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55;const t=this.ctx.createDynamicsCompressor();this.master.connect(t).connect(this.ctx.destination);const i=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,i,this.ctx.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<i;r++)s[r]=Math.random()*2-1}catch{this.ctx=null}return this.ctx}ready(){if(!this.enabled)return null;const e=this.ensure();if(!e||e.state==="closed")return null;if(e.state==="suspended")io(e.resume());else if(e.state!=="running")return null;return e}tone(e,t,i,s,r="sine",a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+i),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+.008),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c).connect(this.master),l.start(t),l.stop(t+i+.02)}bell(e,t,i,s){this.tone(e,t,i,s,"sine"),this.tone(e*2.01,t,i*.6,s*.28,"sine"),this.tone(e*3.02,t,i*.3,s*.1,"triangle")}noiseHit(e,t,i,s,r=1){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=r;const c=a.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l).connect(c).connect(this.master),o.start(e),o.stop(e+t+.02)}place(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(260,t,.12,.35,"sine",150),this.noiseHit(t,.05,.12,1800,2)}merge(e,t){const i=this.ready();if(!i)return;const s=i.currentTime,r=jl[Math.min(jl.length-3,e+t-1)];this.bell(nr(r),s,.5,.22),this.bell(nr(r+7),s+.07,.6,.18),t>=2&&this.bell(nr(r+12),s+.14,.7,.16)}chain(e){const t=this.ready();if(!t)return;const i=t.currentTime+.05;for(let s=0;s<Math.min(e+1,5);s++)this.tone(nr(jl[s+e]),i+s*.055,.22,.1,"triangle")}festival(){const e=this.ready();if(!e)return;const t=e.currentTime;[0,4,7,12,16,19,24].forEach((i,s)=>this.bell(nr(i),t+s*.07,.9,.16)),this.noiseHit(t,.6,.05,6e3,.7)}crumble(){const e=this.ready();if(!e)return;const t=e.currentTime;this.noiseHit(t,.32,.35,420,.8),this.tone(120,t,.2,.2,"sine",60)}invalid(){const e=this.ready();e&&this.tone(160,e.currentTime,.12,.18,"triangle",120)}swap(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(520,t,.08,.12,"sine",700),this.tone(700,t+.06,.08,.1,"sine",520)}gameOver(){const e=this.ready();if(!e)return;const t=e.currentTime;[12,7,4,0].forEach((i,s)=>this.bell(nr(i),t+s*.18,.9,.17))}warning(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(330,t,.15,.08,"triangle"),this.tone(311,t+.16,.2,.08,"triangle")}}function QS(n,e=1){switch(n){case"tap":return 8;case"land":return 12;case"merge":return Math.min(25,15+(Math.max(1,Math.floor(e))-1)*3);case"festival":return[25,50,25,50,70];case"invalid":return[6,40,6];case"gameOver":return[30,90,50]}}function kd(){return typeof navigator>"u"?null:navigator}class jS{constructor(e){this.enabled=e}get supported(){const e=kd();return!!e&&"vibrate"in e&&typeof e.vibrate=="function"}tap(){this.pulse("tap")}land(){this.pulse("land")}merge(e){this.pulse("merge",e)}festival(){this.pulse("festival")}invalid(){this.pulse("invalid")}gameOver(){this.pulse("gameOver")}pulse(e,t){if(!this.enabled||!this.supported)return;const i=kd();if(!(i.userActivation&&!i.userActivation.hasBeenActive))try{i.vibrate(QS(e,t))}catch{}}}const ze=n=>document.getElementById(n),ee={stage:ze("stage"),hud:ze("hud"),dock:document.querySelector(".dock"),score:ze("score"),best:ze("best"),dailyChip:ze("dailyChip"),dailyLeft:ze("dailyLeft"),status:ze("status"),announcer:ze("announcer"),sheetAnnouncer:ze("sheetAnnouncer"),coach:ze("coach"),coachText:ze("coachText"),coachSkip:ze("coachSkip"),popups:ze("popups"),banner:ze("banner"),nextCard:ze("nextCard"),nextImg:ze("nextImg"),keepBtn:ze("keepBtn"),keepImg:ze("keepImg"),menuBtn:ze("menuBtn"),spinLeft:ze("spinLeft"),undoBtn:ze("undoBtn"),coins:ze("coins"),shopBtn:ze("shopBtn"),powerBar:ze("powerBar"),powerText:ze("powerText"),powerCancel:ze("powerCancel"),spinRight:ze("spinRight"),sizePrev:ze("sizePrev"),sizeNext:ze("sizeNext"),sizeName:ze("sizeName"),sizeSub:ze("sizeSub"),home:ze("home"),homeBest:ze("homeBest"),playBtn:ze("playBtn"),homeNewBtn:ze("homeNewBtn"),dailyBtn:ze("dailyBtn"),dailyTitle:ze("dailyTitle"),dailySub:ze("dailySub"),dailyMeta:ze("dailyMeta"),homeHelpBtn:ze("homeHelpBtn"),homeJournalBtn:ze("homeJournalBtn"),homeSettingsBtn:ze("homeSettingsBtn"),modal:ze("modal"),modalArt:ze("modalArt"),modalTitle:ze("modalTitle"),modalBody:ze("modalBody"),modalActions:ze("modalActions"),closeModal:ze("closeModal"),webglError:ze("webglError")},Tt=Dt,Je=new Fm,et=new ZS(Je.getSound(),Je.getMusic()),on=new jS(Je.getHaptics()),Uu=window.matchMedia("(prefers-reduced-motion: reduce)"),so="https://pixel-pusher-hub.github.io/little-nooks/",zd=sm(["9..8.7.1",".6..5..2","7.3...4.","..2...1.",".1..3...","2..4.1..","..2.1..1","1...2..1"]);function eb(n,e=!1){const t=iu(n),i=Math.floor((8-n)/2);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const a=r+i,o=s+i;a>=0&&o>=0&&a<8&&o<8&&(t[s*n+r]=zd[o*8+a]===Bt?yt:zd[o*8+a])}return e&&(t[au(n)]=Zt),t}const Yt=n=>n.mode??"classic",as=()=>am(new Date);let Jt=Je.getSize(Jd);const si=!0,Tn=n=>va(n.board),Ps=n=>!!n.glow;function Ko(n=Jt,e=si){const t=Je.loadGame(ws,n,e);return t&&!t.over&&Yt(t)==="classic"&&Tn(t)===n&&Ps(t)===e?t:ou(rf(),Tt,n,e,!0)}function yp(n){const e=Je.loadDaily(ws);return e&&!e.over&&Yt(e)==="daily"&&e.dailyKey===n?e:mf(n,Tt)}let O=Ko(),Ht=Je.getJournal(),ii=Je.getBest(Jt,si),Po=O.turn===1?ii:Je.getRoundStartBest(Jt,si)??ii;Je.setRoundStartBest(Po,Jt,si);let Sp=0,Xn=0,hn=!1,mt=!0,ns=O.score,Kt=null,mo=null,ji=null,es=null,ta=!1,go=!1,Jo=0,Kc=!1,bp=!1,Ce=null;const vo=new Map;let bs=null;const ot=n=>Math.round(n).toLocaleString("en-US"),bn=()=>!ee.modal.classList.contains("hidden"),On=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Bn=(n,e,t=`${e}s`)=>`${n} ${n===1?e:t}`;let Ni=!1,Jc=0;function Ot(n,e=""){ee.status.textContent=n,ee.status.className=`status${e?` ${e}`:""}`,Ni=!1,clearTimeout(Jc),e==="good"&&(Jc=window.setTimeout(()=>ee.status.classList.add("faded"),2600))}function Gd(n){Ot(n,"good"),clearTimeout(Jc),Ni=!0}function ba(n=O){return n.pieceLimit?Math.max(0,n.pieceLimit-(n.turn-1)):1/0}function tb(n){return n.endReason==="dark"?"The night closed in: no lit tile is free.":n.endReason==="limit"?Yt(n)==="daily"?`All ${n.pieceLimit} pieces placed. Day complete!`:"Out of pieces. Build something new next time to earn more!":"No empty tiles left."}function wn(){const n=wi(O).length,e=ba();O.over?Ot(tb(O),"danger"):qn(O.next)?Ot(`A rare ${zt(O.next)}! Set it down anywhere, even in the dark. It burns for ${xi[O.next].life} moves.`,"good"):n<=4?Ot(O.glow?`Only ${Bn(n,"lit tile")} left. Build a light, or merge!`:`Only ${Bn(n,"free tile")} left. Make every merge count!`,"danger"):e<=10?Ot(`Only ${Bn(e,"piece")} left. Build something new to earn more!`,"warn"):Ot(Yt(O)==="daily"?`Daily Terrain: ${Bn(e,"piece")} to place today.`:O.glow?"Build in the light. Every building lights the tiles around it.":"Tap an empty tile to place your piece.")}let Hd=0;function cn(n){const e=bn()?ee.sheetAnnouncer:ee.announcer;ee.announcer.textContent="",ee.sheetAnnouncer.textContent="",clearTimeout(Hd),Hd=window.setTimeout(()=>e.textContent=n,60)}function wp(n){n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}function ir(n,e,t=""){const i=document.createElement("div");i.className=`popup${t?` ${t}`:""}`,i.textContent=n,i.style.left=`${e.x}px`,i.style.top=`${e.y}px`,ee.popups.appendChild(i),setTimeout(()=>i.remove(),1100)}let Vd=0;function na(n){ee.banner.textContent=n,ee.banner.classList.remove("show"),ee.banner.offsetWidth,ee.banner.classList.add("show"),clearTimeout(Vd),Vd=window.setTimeout(()=>ee.banner.classList.remove("show"),1250)}function ma(n,e=160){const t=`${n}@${e}`;if(!vo.has(t)&&Ce){const i=Ce.thumbnail(n,e);if(!i)return"";vo.set(t,i)}return vo.get(t)??""}function nn(n,e="",t=50){return`<img src="${ma(n)}" alt="${On(e)}" width="${t}" height="${t}" draggable="false" />`}function nb(){return Yt(O)==="daily"?Math.max(Ht.daily.scores[O.dailyKey??""]??0,O.score):Math.max(ii,O.score)}function is(){ee.score.textContent=ot(ns),lb(),ee.best.textContent=ot(nb()),Ep(),Er(),Ou()}function Ep(){if(ee.dailyChip.classList.toggle("hidden",!O.pieceLimit),!O.pieceLimit)return;const n=ba();ee.dailyLeft.textContent=String(n),ee.dailyChip.classList.toggle("low",n<=10)}function ib(){const n=O.next;if(n===Bt)return{text:"Never merges",good:!1,spots:0};if(qn(n))return{text:`Goes anywhere, burns ${xi[n].life} moves`,good:!0,spots:0};const e=O.over?[]:uu(O.board,n,Tt,wi(O));if(!e.length)return{text:n===Gt?`3 ${un[Gt].name}s = Festival`:"No match yet",good:!1,spots:0};let t=1;for(const i of e)t=Math.max(t,Oo(O,i,Tt).state.lastChain);return{text:t>=2?`Chain ×${t} possible!`:`Merges in ${Bn(e.length,"spot")}`,good:!0,spots:e.length}}let Wd=-1,Fu=0;function Ou(){const n=O.after;ee.nextImg.hidden=n===void 0,n!==void 0&&(ee.nextImg.src=ma(n)),ee.nextImg.alt="";const e=ib(),t=n===void 0?"":` Then: ${zt(n)}.`;ee.nextCard.setAttribute("aria-label",`In hand: ${zt(O.next)}, ${ef(O.next)}. ${e.text}.${t} Show what's coming.`),ee.nextCard.title=`In hand: ${zt(O.next)} (${e.text}).${t} (I: what's coming)`,ku(),O.stash===yt?(ee.keepImg.removeAttribute("src"),ee.keepImg.hidden=!0,ee.keepBtn.classList.add("empty"),ee.keepBtn.setAttribute("aria-label",`Keep slot is empty. Store the ${zt(O.next)} for later`)):(ee.keepImg.src=ma(O.stash),ee.keepImg.hidden=!1,ee.keepImg.alt="",ee.keepBtn.classList.remove("empty"),ee.keepBtn.setAttribute("aria-label",`Keep slot holds a ${zt(O.stash)}. Swap it with the ${zt(O.next)}`),!O.over&&Wd!==O.turn&&e.spots===0&&O.stash!==Bt&&uu(O.board,O.stash,Tt,wi(O)).length&&(Wd=O.turn,ee.keepBtn.classList.remove("nudge"),ee.keepBtn.offsetWidth,ee.keepBtn.classList.add("nudge")))}function Xd(){if(!Ce)return;const n=window.innerWidth,e=window.innerHeight,t={top:0,right:0,bottom:0,left:0};document.querySelectorAll("[data-inset]").forEach(s=>{const r=getComputedStyle(s);if(r.display==="none")return;const a=r.getPropertyValue("--inset").trim(),o=s.getBoundingClientRect();!o.width||!o.height||(a==="top"?t.top=Math.max(t.top,o.bottom):a==="bottom"?t.bottom=Math.max(t.bottom,e-o.top):a==="right"?t.right=Math.max(t.right,n-o.left):a==="left"&&(t.left=Math.max(t.left,o.right)))}),document.body.style.setProperty("--dock-h",`${Math.round(ee.dock.getBoundingClientRect().height)}px`);const i=Math.min(n,e)<500?6:16;Ce.setInsets({top:t.top+i,right:t.right+i,bottom:t.bottom+i,left:t.left+i})}function Lo(){return!hn&&!O.over&&!bn()&&!mt}function Tp(n){const e=Oo(O,n,Tt),t=new Set;let i=0,s=null;for(const o of e.events)o.kind==="place"||o.kind==="expire"||o.kind==="remove"||o.kind==="upgrade"||(o.cells.forEach(l=>t.add(l)),i+=o.points,s=o);if(t.delete(n),!s)return null;const r=e.state.lastChain,a=s.kind==="merge"?`→ ${un[s.toTier].name}`:s.kind==="festival"?"→ Skyline Festival!":"shatters rocks";return{cells:[...t],text:`${r>1?`Chain ×${r} `:""}${a}  +${ot(i)}`}}function hi(n){if(ji=n,!Ce)return;if($n&&n!==null&&Lo()){const t=ko(O,$n).includes(n);Ce.setHover(n,null,[],!t),t&&Ot(`${_o[$n].name} the ${zt(O.board[n])}: ${ot(zo(O,$n,n,Tt))} coins`,"good"),Ni=!0;return}if(n===null||!Lo()){Ce.setHover(null,null,[]),Ni&&!hn&&!mt&&wn();return}if(O.board[n]!==yt){Ce.setHover(n,null,[],!0),Ni&&wn();return}if(!lu(O,n)){Ce.setHover(n,null,[],!0),Ot("Too dark to build here. Build next to the light.","warn"),Ni=!0;return}const e=Tp(n);Ce.setHover(n,O.next,e?.cells??[]),e?Gd(e.text+(ta?" · lift to place":"")):ta?Gd("No merge here · lift to place, or slide off to cancel"):Ni&&wn()}function Ds(){if(Yt(O)==="daily"){O.over?Je.clearDaily():Je.saveDaily(O);return}const n=Tn(O),e=Ps(O);O.over?Je.clearGame(n,e):Je.saveGame(O,n,e),Je.submitScore(O.score,n,e),ii=Math.max(ii,Je.getBest(n,e))}function yr(n){if(Ns(),Bu=null,Ce?.cancelAnimations(),Xn++,hn=!1,bs=null,O=n,ns=O.score,go=!1,sb(),Yt(O)==="daily")Sp=Ht.daily.scores[O.dailyKey??""]??0;else{const e=Tn(O),t=Ps(O);ii=Je.getBest(e,t),O.turn===1?(Po=ii,Je.setRoundStartBest(ii,e,t)):Po=Je.getRoundStartBest(e,t)??ii}mt||(Zo(O),is(),wn())}function Zo(n){Ce&&(Ce.sync(n.board),Ce.setLit(n.glow?br(n.board):null),Ce.setBurn(n.burn))}const dr=[];function Qo(){Yt(O)!=="daily"&&(dr.push({state:O,journal:Ht}),dr.length>30&&dr.shift())}function sb(){dr.length=0,Er()}function jo(){return dr.length>0&&Yt(O)!=="daily"}function Er(){ee.undoBtn.disabled=!jo()||hn}function Io(){if(!Ce||hn||mt||!jo())return;const n=dr.pop();bn()&&en(!1),Ns(),Ce.cancelAnimations(),Xn++,bs=null,O=n.state,Ht=n.journal,Je.saveJournal(Ht),Ds(),ns=O.score,Zo(O),is(),wn(),et.unlock(),et.swap(),on.tap(),cn(`Move undone. Next: ${zt(O.next)}.`),es?.type==="mouse"&&ji!==null&&hi(Ce.pick(es.x,es.y))}function rb(n){const e=Yt(n)==="daily",t=n.score>0&&n.score>(e?Sp:Po),i=Rm(Ht,n,as());return Ht=i.journal,Je.saveJournal(Ht),pr.active&&!e&&nl(),{state:n,newBest:t,highlights:i.highlights}}function ab(n,e){const t=n.filter(o=>o.kind==="merge"),i=n.find(o=>o.kind==="festival"),s=n.find(o=>o.kind==="crumble"),r=[];if(i)r.push(`Skyline Festival! +${ot(e)}`);else if(t.length){const o=t[t.length-1],l=t.length>1?`Chain ×${t.length}: `:"";r.push(`${l}made a ${o.kind==="merge"?un[o.toTier].name:""}, +${ot(e)}`)}else{const o=n[0];r.push(`Placed a ${o.kind==="place"?zt(o.piece):"piece"}`)}s&&s.kind==="crumble"&&r.push(`shattered ${Bn(s.cells.length,"rock")}`);const a=n.find(o=>o.kind==="expire");return a&&a.kind==="expire"&&r.push(a.cells.length>1?`${a.cells.length} lights burned out`:"a light burned out"),r.join(", ")}async function Zc(n){if(!Ce||!Lo())return;if($n){await hb(n);return}if(et.unlock(),O.board[n]!==yt){et.invalid(),on.invalid(),Ot("That tile is taken. Pick an empty one.","warn"),cn("That tile is taken. Pick an empty one."),Ce.nudge(n);return}if(!lu(O,n)){et.invalid(),on.invalid(),Ot("Too dark to build there. Build next to the light.","warn"),cn("Too dark to build there. Build next to the light.");return}const e=Oo(O,n,Tt);if(!e.accepted)return;Qo(),hn=!0,Bu=n,Er();const t=Xn,i=O;Fu=O.highestTier,O=e.state,Ht=xf(Ht,e.events,e.points);const s=O.over?rb(O):null;Je.saveJournal(Ht),Ds(),Ou(),Ep(),Ce.setSuggestions([]),Tr();try{await Ce.animateMove(e.events,O.board,{onEvent:(u,f)=>{t===Xn&&Ap(u,f)}})}finally{t===Xn&&(ns=O.score,hn=!1)}if(t!==Xn)return;O.glow&&(Ce.setLit(br(O.board)),Ce.setBurn(O.burn)),is();const r=(O.pieceLimit??0)-(i.pieceLimit??0);r>0&&O.budget&&(na(`New: ${un[O.highestTier].name}! +${r} pieces`),et.festival());const a=wi(O).length,o=a<=Math.max(4,Math.round(O.board.length*.12));o&&!go&&!O.over&&(go=!0,et.warning()),o||(go=!1);const l=ba(),c=O.over?"":a<=4?` Only ${Bn(a,O.glow?"lit tile":"free tile")} left.`:l<=10?` Only ${Bn(l,"piece")} left.`:"";if(cn(`${ab(e.events,e.points)}. ${O.over?"Round over.":`Next: ${zt(O.next)}.`}${c}`),s){await mb(s,t);return}O.lastChain>=2?Ot(`Lovely! ×${O.lastChain} chain reaction.`,"good"):e.points>Tt.placePoints?Ot(`+${ot(e.points)} points`,"good"):wn(),il(e.events),es?.type==="mouse"&&ji!==null&&hi(Ce.pick(es.x,es.y)),Kt!==null&&Ce.setCursor(Kt)}function Ap(n,e){if(n.kind==="place"){et.place(),on.land();return}if(n.kind==="expire"||n.kind==="remove"){et.crumble(),ir(n.kind==="remove"?"Cleared":n.cells.length>1?"Lights out":"Burned out",e,"rock");return}if(n.kind==="upgrade"){et.merge(n.toTier,1),on.merge(1),ir(un[n.toTier].name,e,"big");return}ns+=n.points,ee.score.textContent=ot(ns),wp(ee.score),n.kind==="merge"?(et.merge(n.toTier,n.step),on.merge(n.step),ir(`+${ot(n.points)}`,e,n.step>=2?"big":""),ir(`+${uf([n],Tt)}`,{x:e.x,y:e.y+26},"coin"),n.step>=2&&(et.chain(n.step),na(`Chain ×${n.step}!`)),n.toTier>Fu&&n.toTier>=2&&n.step<2&&!O.budget&&na(`A ${un[n.toTier].name}!`)):n.kind==="festival"?(et.festival(),on.festival(),na("Skyline Festival!"),ir(`+${ot(n.points)}`,e,"big")):n.kind==="crumble"&&(et.crumble(),on.land(),ir(`+${ot(n.points)}`,e,"rock"))}function Qc(){Lo()&&(et.unlock(),Qo(),O=pm(O,Tt),Er(),Ds(),et.swap(),on.tap(),Ou(),ee.nextCard.classList.remove("pop"),ee.nextCard.offsetWidth,ee.nextCard.classList.add("pop"),hi(ji),ji===null&&wn(),cn(`Next: ${zt(O.next)}. Kept: ${O.stash===yt?"nothing":zt(O.stash)}.`),il())}function Sr(){pr.active&&Yt(O)==="classic"&&O.turn>1&&nl(),yr(ou(rf(),Tt,Jt,si,!0)),Ds(),en(!1),zu(),el()}function Do(n=!1){et.unlock();const e=as(),t=n?mf(e,Tt):yp(e);yr(t),Ds(),en(!1),zu(),el(),t.turn===1&&(Ot(`Daily Terrain #${gr(e)}: everyone gets this island today. Place ${ia} pieces for your best score.`,"good"),cn(`Daily Terrain number ${gr(e)}. ${ia} pieces. Next: ${zt(O.next)}.`))}let Bu=null;function ob(){const n=wi(O);if(!n.length)return null;const e=Tn(O),t=Bu??au(e),i=t%e,s=Math.floor(t/e);let r=n[0],a=1/0;for(const o of n){const l=Math.abs(o%e-i)+Math.abs(Math.floor(o/e)-s);l<a&&(r=o,a=l)}return r}function ku(){if(!Ce)return;const n=!mt&&!O.over&&!$n;Ce.setRest(n?ob():null,n?O.next:null)}let $d=0;function lb(){const n=O.coins??0;ee.coins.textContent=ot(n),n>$d&&wp(ee.coins),$d=n,ee.shopBtn.setAttribute("aria-label",`Shop: ${ot(n)} coins to spend`)}function Cp(){if(!Ce||mt||hn||O.over||bn())return;Ns(),et.unlock();const n=O.coins??0,e=cu(O,Tt),t=r=>{const a=r.power?_o[r.power].name:zt(r.piece),o=r.power?_o[r.power].hint:r.kind==="light"?ef(r.piece):`Tier ${r.piece+1}`,l=r.power?`<span class="power-art" aria-hidden="true"><svg><use href="#i-${r.power}" /></svg></span>`:nn(r.piece,"",56),c=n>=r.price;return`<button class="shop-item" type="button" data-key="${r.key}" ${c?"":"disabled"} aria-label="${On(`${a}: ${o}. ${r.power==="upgrade"?"From ":""}${r.price} coins`)}">
      ${l}<span class="shop-name">${On(a)}</span><small>${On(o)}</small>
      <span class="price"><svg aria-hidden="true"><use href="#i-coin" /></svg>${r.power==="upgrade"?"from ":""}${ot(r.price)}</span></button>`},i=(r,a)=>a.length?`<h3>${r}</h3><div class="shop-grid">${a.map(t).join("")}</div>`:"",s=O.highestTier<Gt?`<p class="shop-note">Build a ${On(un[O.highestTier+1].name)} to unlock it here.</p>`:"";bi({title:"Shop",body:`<div class="shop">
      <div class="shop-wallet"><svg aria-hidden="true"><use href="#i-coin" /></svg><b>${ot(n)}</b><span>coins · every merge earns more</span></div>
      ${i("Pieces",e.filter(r=>r.kind==="piece"))}
      ${s}
      ${i("Lights",e.filter(r=>r.kind==="light"))}
      ${i("Powers",e.filter(r=>r.kind==="power"))}
      <p class="shop-note">A bought piece goes straight into your hand and doesn't use up one of your pieces. Each time you buy something, it gets more expensive.</p>
    </div>`,actions:[{label:"Done",onClick:()=>en()}],mount:r=>r.querySelectorAll(".shop-item").forEach(a=>a.addEventListener("click",()=>cb(a.dataset.key)))})}function cb(n){const e=cu(O,Tt).find(s=>s.key===n);if(!e||(O.coins??0)<e.price||hn)return;if(e.power&&e.power!=="reroll"){en(!1),ub(e.power);return}const t=e.power==="reroll"?pf(O,"reroll",-1,Tt):mm(O,n,Tt);if(!t.accepted)return;Qo(),O=t.state,Ds(),en(!1),et.swap(),on.tap(),is(),Er();const i=zt(O.next);na(e.power?`New piece: ${i}`:`Bought: ${i}`),cn(`${e.power?"Rerolled":"Bought"}: a ${i} is in your hand.`)}let $n=null;function ub(n){$n=n,Ce?.setSuggestions(ko(O,n)),ee.powerText.textContent=n==="bulldoze"?`Tap a tile to clear it (${ot(zo(O,n,-1,Tt))} coins)`:"Tap a building to raise it one tier",ee.powerBar.classList.remove("hidden"),Tr(),ku(),Ot(n==="bulldoze"?"Bulldoze: pick a tile to clear.":"Upgrade: pick a building. Bigger ones cost more.","good"),cn(`${_o[n].name}: pick a tile, or press Escape to cancel.`)}function Ns(n=!1){$n&&($n=null,ee.powerBar.classList.add("hidden"),Ce?.setSuggestions([]),Ce?.setHover(null,null,[]),ku(),n&&wn())}async function hb(n){if(!Ce||!$n)return;const e=$n;if(et.unlock(),!ko(O,e).includes(n)){et.invalid(),on.invalid(),Ot(e==="bulldoze"?"Pick a tile with something on it.":"Pick a building to upgrade.","warn"),Ce.nudge(n);return}const t=zo(O,e,n,Tt),i=pf(O,e,n,Tt);if(!i.accepted){et.invalid(),Ot(`That needs ${ot(t)} coins.`,"warn");return}Qo(),hn=!0,Er(),Ns();const s=Xn;Fu=O.highestTier,O=i.state,Ht=xf(Ht,i.events,i.points),Je.saveJournal(Ht),Ds();try{await Ce.animateMove(i.events,O.board,{onEvent:(r,a)=>{s===Xn&&Ap(r,a)}})}finally{s===Xn&&(ns=O.score,hn=!1)}s===Xn&&(Ce.setLit(br(O.board)),Ce.setBurn(O.burn),is(),i.points>0?Ot(`+${ot(i.points)} points`,"good"):wn())}function Rp(){const n=Je.loadGame(ws,Jt,si);return{inProgress:!!n&&!n.over&&n.turn>1&&Yt(n)==="classic"&&Tn(n)===Jt&&Ps(n)===si,saved:n}}function fr(){const{inProgress:n,saved:e}=Rp();ee.playBtn.textContent=n?"Continue":"Play",ee.homeNewBtn.classList.toggle("hidden",!n),ee.homeBest.textContent=ot(Je.getBest(Jt,si));const t=Ms.indexOf(Jt);ee.sizeName.textContent=`${Jt} × ${Jt}`,ee.sizeSub.textContent=Kp[Jt],ee.sizePrev.disabled=t<=0,ee.sizeNext.disabled=t>=Ms.length-1,ee.playBtn.setAttribute("aria-label",`${ee.playBtn.textContent} on the ${Jt} by ${Jt} island`);const i=as(),s=gr(i),r=Je.loadDaily(ws),a=!!r&&!r.over&&r.dailyKey===i&&r.turn>1,o=Ht.daily.scores[i];ee.dailyTitle.textContent=a?"Continue":"Daily",ee.dailySub.textContent=a?`Continue · ${Bn(ba(r),"piece")} left`:o!==void 0?`Played today · best ${ot(o)} · play again`:`Today's island · ${ia} pieces`;const l=Mf(Ht,i);ee.dailyMeta.textContent=l>0?String(l):"",ee.dailyMeta.classList.toggle("hidden",l===0),ee.dailyBtn.title=`Daily Terrain #${s}: ${ee.dailySub.textContent}`,ee.dailyBtn.setAttribute("aria-label",`Daily Terrain number ${s}. ${ee.dailySub.textContent}.${l?` Streak: ${Bn(l,"day")}.`:""}`);const c=n&&e?e:{board:eb(Jt,si),glow:si};Ce?.sync(c.board),Ce?.setLit(c.glow?br(c.board):null)}function Yd(n){const e=Ms.indexOf(Jt)+n;e<0||e>=Ms.length||(Jt=Ms[e],Je.setSize(Jt),et.unlock(),et.swap(),Yt(O)==="classic"&&yr(Ko()),fr())}function ga(){const n=!mt;if(Ce?.cancelAnimations(),Xn++,hn=!1,bs=null,mt=!0,ns=O.score,document.body.classList.add("at-home"),Ce&&(Ce.canvas.tabIndex=-1),en(!1),Ns(),Ce?.setRest(null,null),Ce?.setHover(null,null,[]),Ce?.setCursor(null),Ce?.setSuggestions([]),Tr(),bp){location.reload();return}fr(),n&&ee.playBtn.focus({preventScroll:!0})}function zu(){Jo=performance.now()+350,mt&&(mt=!1,document.body.classList.remove("at-home"),Ce&&(Ce.canvas.tabIndex=0),Zo(O)),is(),wn(),il()}function qd(){const n=Tn(O);if(mo!==null&&mo<n*n)return mo;const e=Math.floor((n-1)/2);return e*n+e}function el(){Ce?.canvas.focus({preventScroll:!0})}function tl(){et.unlock(),(Yt(O)!=="classic"||Tn(O)!==Jt||Ps(O)!==si)&&yr(Ko()),O.over?Sr():(mt&&Zo(O),zu()),Je.hasSeenHelp()?el():(Dn=Ce?.canvas??null,sl())}const pr={active:!Je.getCoachDone()&&Je.getBest()===0&&Ht.rounds===0,said:new Set};function Tr(){ee.coach.classList.add("hidden")}function nl(){pr.active=!1,Je.setCoachDone(),Tr(),Ce?.setSuggestions([])}function ec(n,e=!1){return wi(O).filter(t=>e?tf(t,Tn(O)):!0).map(t=>[t,Pm(O,t,Tt)]).sort((t,i)=>i[1]-t[1]).slice(0,n).map(([t])=>t)}function il(n){if(!Ce)return;if(!pr.active||mt||Yt(O)!=="classic"||O.over||bn()){Tr(),Ce.setSuggestions([]);return}if(O.turn>16){nl();return}const e=a=>pr.said.has(a)?!1:(pr.said.add(a),!0),t=zt(O.next),i=uu(O.board,O.next,Tt,wi(O));let s="",r=[];n?.some(a=>a.kind==="merge"&&a.step>=2)&&e("chain")?s="A chain! The new piece merged again, and each extra step multiplies the points.":n?.some(a=>a.kind==="merge")&&e("merge")?s="Three became one, right where you placed it. Merging also frees up space.":O.glow&&O.turn===1?(s=`Night has fallen. Build in the campfire's light: place your ${t} on a glowing tile.`,r=ec(3)):O.glow&&n?.some(a=>a.kind==="merge"&&a.toTier>=2)&&e("light")?s="A building! Every building lights the tiles around it, so your town can grow into the dark.":i.length&&O.next!==Bt?(s=`Put the ${t} on a glowing tile to merge three of a kind!`,r=i.slice(0,4)):O.turn===1?(s=`Tap a glowing tile to place your ${t}. Three matching pieces side by side merge.`,r=ec(3)):O.turn>=5&&O.stash===yt&&e("keep")?s="Tip: tap Keep to save the next piece for later. Swapping is free.":(s="Build pairs: two matching pieces side by side are one away from a merge.",r=ec(2)),ee.coachText.textContent=s,ee.coach.classList.remove("hidden"),Ce.setSuggestions(r)}let Dn=null,jc=null;function bi(n){bn()||(Dn=document.activeElement),ee.modalTitle.textContent=n.title,n.describe?ee.modal.setAttribute("aria-describedby","modalBody"):ee.modal.removeAttribute("aria-describedby"),ee.modalBody.innerHTML=n.body,ee.modalArt.innerHTML=n.art??"",ee.modalActions.innerHTML="";let e=!1;for(const t of n.actions??[]){const i=document.createElement("button");i.type="button",i.className=`btn ${t.kind==="dark"?"btn-dark":"btn-primary"}`,i.innerHTML=`${t.icon?`<svg aria-hidden="true"><use href="#${t.icon}" /></svg>`:""}<span>${On(t.label)}</span>`,t.id?i.id=t.id:t.kind!=="dark"&&!e&&(i.id="modalAction",e=!0),i.addEventListener("click",t.onClick),ee.modalActions.appendChild(i)}jc=n.onClose??null,n.mount?.(ee.modalBody),ee.modal.classList.remove("hidden"),ee.modal.querySelector(".sheet").scrollTop=0,Ce?.setHover(null,null,[]),Tr(),(ee.modalActions.querySelector("button")??ee.closeModal).focus({preventScroll:!0})}function eu(n){return document.contains(n)&&n.getClientRects().length>0&&getComputedStyle(n).visibility!=="hidden"}function db(){let n;mt?n=Dn&&ee.home.contains(Dn)&&eu(Dn)?Dn:ee.playBtn:n=Dn&&Dn!==document.body&&document.contains(Dn)&&!ee.home.contains(Dn)&&!ee.modal.contains(Dn)&&eu(Dn)?Dn:Ce?.canvas??null,n?.focus({preventScroll:!0}),document.activeElement!==n&&(mt?ee.playBtn:Ce?.canvas)?.focus({preventScroll:!0})}function en(n=!0){if(!bn())return;ee.modal.classList.add("hidden"),Jo=performance.now()+350;const e=jc;if(jc=null,e?.(),n&&db(),bs&&!bn()&&!mt){const t=bs;bs=null,Np(t)}else!bn()&&!mt&&!hn&&il()}function sl(){const n='<span class="arrow" aria-hidden="true">→</span>',e=mt;bi({title:"How to Play",body:`
      <div class="steps">
        <div class="step"><div class="step-art" aria-hidden="true">${nn(0)}${nn(0)}${nn(0)}</div>
          <div><h3>1. Merge 3</h3><p>Place 3 or more of the same piece side by side. Diagonals don't count.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${nn(0)}${n}${nn(1)}${n}${nn(2)}</div>
          <div><h3>2. Create bigger</h3><p>A merge makes one piece of the next tier, right where you placed.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${nn(4)}${n}${nn(6)}${n}${nn(nu+2)}</div>
          <div><h3>3. Grow a city</h3><p>Bushes grow into trees, then small houses, cottages, family houses, apartments and towers, then ever grander skyscrapers: forty things to build. Chains score ×2, ×3, ×4…</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${nn(Zt)}</div>
          <div><h3>Build in the light</h3><p>Night has fallen: you can only build on lit tiles. The campfire lights the tiles around it, and so does every building; bigger ones light more.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true"><span class="power-art"><svg><use href="#i-bag" /></svg></span></div>
          <div><h3>Coins and the shop</h3><p>Every merge earns coins. Spend them in the shop on pieces you've already built, rare lights, or powers: Reroll a piece, Bulldoze a tile, or Upgrade a building. Prices rise each time you buy.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${nn(gn)}${nn(Cn)}</div>
          <div><h3>Rare lights</h3><p>Now and then you get a Campfire (lasts ${xi[gn].life} moves) or an even rarer Lamppost (${xi[Cn].life} moves, lights farther). Set them down anywhere, even in the dark, and build there before they burn out.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${nn(3)}</div>
          <div><h3>Pieces</h3><p>A round has a budget of pieces. Build something bigger than ever before and you earn more, so you can keep going.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${nn(1)}</div>
          <div><h3>Keep slot</h3><p>Stash the next piece and swap it back any time. It's free.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${nn(2)}</div>
          <div><h3>Daily Terrain</h3><p>One shared island a day: place ${ia} pieces for your best score and keep a streak.</p></div></div>
      </div>
      <p class="keys">The round ends when you run out of pieces or of room to build. Hover, or touch and slide, to preview a merge; lift to place, or slide off the island to cancel. The piece in your hand waits on the island, greyed out; the Next bubble shows the one after it. The back arrow takes back your last move. Turn the island with the round arrows, or drag anywhere off it.<br/>
      Keys: <kbd>←↑→↓</kbd> move · <kbd>Enter</kbd> place · <kbd>S</kbd> keep · <kbd>B</kbd> shop · <kbd>Z</kbd> undo · <kbd>Q</kbd> <kbd>E</kbd> turn · <kbd>I</kbd> odds · <kbd>V</kbd> camera · <kbd>M</kbd> mute · <kbd>Esc</kbd> menu</p>`,actions:[{label:e?ee.playBtn.textContent||"Play":O.turn===1?"Let's play":"Back to my island",onClick:()=>{Je.markHelpSeen(),en(!e),e&&tl()}}],onClose:()=>Je.markHelpSeen()})}function Pp(){const n=Yt(O)==="daily";bi({title:n?`Daily Terrain #${gr(O.dailyKey??as())}`:"Menu",body:`<div class="menu-list">
      <button class="btn btn-primary" id="menuResume" type="button">Resume</button>
      <button class="btn btn-dark" id="menuNew" type="button">${n?"Restart today's island":"New game"}</button>
      <button class="btn btn-dark" id="menuOdds" type="button">What's coming</button>
      <button class="btn btn-dark" id="menuJournal" type="button">Journal</button>
      <button class="btn btn-dark" id="menuHelp" type="button">How to play</button>
      <button class="btn btn-dark" id="menuSettings" type="button">Settings</button>
      <button class="btn btn-dark" id="menuHome" type="button">Home</button>
    </div>`,mount:e=>{e.querySelector("#menuResume").addEventListener("click",()=>en()),e.querySelector("#menuNew").addEventListener("click",Dp),e.querySelector("#menuOdds").addEventListener("click",Gu),e.querySelector("#menuJournal").addEventListener("click",Hu),e.querySelector("#menuHelp").addEventListener("click",sl),e.querySelector("#menuSettings").addEventListener("click",Ip),e.querySelector("#menuHome").addEventListener("click",ga)}}),ze("menuResume").focus({preventScroll:!0})}function Lp(){const n=Je.getMotion();return n==="system"?Uu.matches:n==="on"}function tu(){const n=Lp();Ce?.setReducedMotion(n),document.body.classList.toggle("reduce-motion",n),document.body.classList.toggle("allow-motion",Je.getMotion()==="off")}function Ip(){const n=Ce?.getView()??"iso",e=(t,i,s)=>`<button class="switch" id="${t}" type="button" role="switch" aria-checked="${i}" aria-label="${s}"></button>`;bi({title:"Settings",body:`<div class="settings">
      <div class="setting"><svg aria-hidden="true"><use href="#i-sound" /></svg><span>Sound Effects</span>${e("setSound",et.enabled,"Sound effects")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-note" /></svg><span>Music</span>${e("setMusic",et.music,"Music")}</div>
      ${on.supported?`<div class="setting"><svg aria-hidden="true"><use href="#i-vibrate" /></svg><span>Vibration</span>${e("setHaptics",on.enabled,"Vibration")}</div>`:""}
      <div class="setting"><svg aria-hidden="true"><use href="#i-motion" /></svg><span>Reduced Motion</span>${e("setMotion",Lp(),"Reduced motion")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-camera" /></svg><span>Camera</span>
        <span class="segmented" role="group" aria-label="Camera view">
          <button type="button" id="viewIso" aria-pressed="${n==="iso"}">Isometric</button>
          <button type="button" id="viewCozy" aria-pressed="${n==="cozy"}">Close-up</button>
        </span></div>
    </div>`,actions:[{label:"Done",onClick:()=>en()}],mount:t=>{const i=(r,a)=>{const o=t.querySelector(`#${r}`);o?.addEventListener("click",()=>{const l=o.getAttribute("aria-checked")!=="true";o.setAttribute("aria-checked",String(l)),a(l)})};i("setSound",r=>{et.enabled=r,Je.setSound(r),r&&(et.unlock(),et.swap())}),i("setMusic",r=>{Je.setMusic(r),et.setMusic(r)}),i("setHaptics",r=>{on.enabled=r,Je.setHaptics(r),r&&on.tap()}),i("setMotion",r=>{Je.setMotion(r===Uu.matches?"system":r?"on":"off"),tu()});const s=r=>{Up(r),t.querySelector("#viewIso").setAttribute("aria-pressed",String(r==="iso")),t.querySelector("#viewCozy").setAttribute("aria-pressed",String(r==="cozy"))};t.querySelector("#viewIso").addEventListener("click",()=>s("iso")),t.querySelector("#viewCozy").addEventListener("click",()=>s("cozy"))}})}function Gu(){const n=hm(O.turn,Tt,O.board.length,jd(of(O.board),Tt)),e=(s,r)=>`<div class="odds-row${s===Bt?" rock":""}">${nn(s,"",40)}<div class="odds-name">${On(zt(s))}<span class="odds-bar"><i style="width:${r}%"></i></span></div><span class="odds-pct">${r}%</span></div>`,t=n.to===null?`Turn ${n.from} onward`:`Turns ${n.from}–${n.to}`;let i="";if(n.next){const s=new Map(n.rows.map(a=>[a.piece,a.percent])),r=n.next.rows.filter(a=>(s.get(a.piece)??0)!==a.percent).map(a=>`${zt(a.piece)} ${s.get(a.piece)??0}% → ${a.percent}%`);r.length&&(i=`<div class="odds-change"><b>From turn ${n.next.at}:</b> ${On(r.join(" · "))}</div>`)}bi({title:"What's coming",body:`<div class="odds">
      <div class="odds-head"><b>${t}</b><span>Turn ${O.turn}${O.pieceLimit?` · ${ba()} left`:""}</span></div>
      ${n.rows.map(s=>e(s.piece,s.percent)).join("")}
      ${i}
      <p class="odds-note">Each new piece is drawn from these odds. When the island is ${Math.round(Tt.assistFillRatio*100)}% full or more, a piece that can't merge anywhere gets one ${Math.round(Tt.assistChance*100)}% chance to be redrawn. As your town grows, the pieces grow with it: they arrive a few tiers below your biggest building.${O.glow?` In Firelight, from the first few turns on, a piece is sometimes a rare light instead: a Campfire (${Math.round(Tt.emberChance*100)}%) or a Lamppost (${Math.round(Tt.lampChance*100)}%).`:""}</p>
    </div>`,actions:[{label:"Back to my island",onClick:()=>en()}]})}function fb(n){let e=1;n.built.forEach((i,s)=>i>0&&(e=Math.max(e,s)));const t=Math.min(Gt,Math.max(nu,e+1));return Array.from({length:t},(i,s)=>s+1)}function Hu(){const n=Ht,e=as(),t=(s,r,a=!1)=>`<div class="stat-tile${a?" gold":""}"><small>${s}</small><b>${r}</b></div>`;let i="";if(n.recent.length){const s=[...n.recent].reverse(),r=Math.max(1,...s.map(u=>u.score)),a=300,o=80,l=a/Math.max(s.length,8),c=s.map((u,f)=>{const h=Math.max(2,u.score/r*(o-12));return`<rect class="${`bar${u.mode==="daily"?" daily":""}${f===s.length-1?" latest":""}`}" x="${(f*l+1).toFixed(1)}" y="${(o-h).toFixed(1)}" width="${(l-2).toFixed(1)}" height="${h.toFixed(1)}" rx="2"><title>${On(u.date)} · ${u.mode} · ${ot(u.score)}</title></rect>`}).join("");i=`<svg class="recent-chart" viewBox="0 0 ${a} ${o+12}" role="img" aria-label="Scores of your last ${s.length} rounds, highest ${ot(r)}">
      <line class="best-line" x1="0" x2="${a}" y1="12" y2="12" />${c}<text x="${a}" y="9" text-anchor="end">best ${ot(r)}</text></svg>`}bi({title:"Journal",body:n.rounds===0?`<p class="journal-empty">Finish a round to start your journal. It keeps your records, everything you've built and your daily streak.</p>`:`<div class="journal">
      <section><h3>Records</h3><div class="stat-grid">
        ${t("Best round",ot(Math.max(n.bestClassic,ii)),!0)}
        ${t("Best daily",ot(n.bestDaily),!0)}
        ${t("Best chain",`×${Math.max(1,n.bestChain)}`)}
        ${t("Biggest move",`+${ot(n.biggestMove)}`)}
        ${t("Longest round",Bn(n.longestRound,"turn"))}
        ${t("Most festivals",String(n.mostFestivals))}
      </div></section>
      <section><h3>Built</h3><div class="built-row">
        ${fb(n).map(s=>`<div>${nn(s,un[s].name,40)}<b>${ot(n.built[s]??0)}</b>${On(un[s].name)}</div>`).join("")}
      </div></section>
      <section><h3>Lifetime</h3><div class="stat-grid">
        ${t("Rounds",ot(n.rounds))}
        ${t("Pieces placed",ot(n.pieces))}
        ${t("Festivals",ot(n.festivals))}
        ${t("Daily streak",Bn(Mf(n,e),"day"),!0)}
        ${t("Longest streak",Bn(n.daily.bestStreak,"day"))}
      </div></section>
      ${i?`<section><h3>Recent rounds</h3>${i}</section>`:""}
    </div>`,actions:[{label:"Close",onClick:()=>en()}]})}function Dp(){if(Yt(O)==="daily"){if(O.over||O.turn<=3){Do(!0);return}bi({title:"Start today's island again?",body:`<p>This attempt (${ot(O.score)} points) will end. Your best score for today is kept.</p>`,actions:[{label:"Start again",onClick:()=>Do(!0)},{label:"Keep playing",kind:"dark",onClick:()=>en()}]});return}if(O.over||O.turn<=3){Sr();return}bi({title:"Start a fresh nook?",body:`<p>Your current round (${ot(O.score)} points) will end. Your personal best stays saved on this device.</p>`,actions:[{label:"New game",onClick:Sr},{label:"Keep playing",kind:"dark",onClick:()=>en()}]})}function pb(){et.unlock();const{inProgress:n,saved:e}=Rp();if(!n||!e||e.turn<=3){Sr();return}bi({title:"Start a fresh nook?",body:`<p>Your saved round (${ot(e.score)} points, turn ${e.turn}) will be replaced. Your personal best stays saved.</p>`,actions:[{label:"New game",onClick:Sr},{label:"Back",kind:"dark",onClick:()=>en()}]})}async function mb(n,e){if(et.gameOver(),on.gameOver(),wn(),await Ce?.gameOverWave(),!(e!==Xn||mt||O!==n.state)){if(bn()){bs=n;return}Np(n)}}function Np(n){const e=n.state,t=Yt(e)==="daily",i=Math.max(t?Ht.daily.scores[e.dailyKey??""]??0:ii,e.score),s=t&&e.endReason==="limit"?"Day complete!":e.endReason==="dark"?"The night closed in":e.endReason==="limit"?"Out of pieces":"Your island is full",r=n.highlights.slice(0,3),a=t?[{label:"Classic game",onClick:()=>{en(!1),tl()}},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Kd(e)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:ga}]:[{label:"Play Again",onClick:Sr},...jo()?[{label:"Undo last move",kind:"dark",id:"undoOverBtn",icon:"i-undo",onClick:Io}]:[],{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Kd(e)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:ga}];bi({title:s,art:`<img src="${ma(e.highestTier,320)}" alt="${On(un[e.highestTier].name)}" draggable="false" />`,body:`
      ${n.newBest?`<div class="new-best">${t?"TODAY'S BEST":"NEW PERSONAL BEST"}</div>`:""}
      <p class="final-label">${t?`Daily Terrain #${gr(e.dailyKey??as())}`:"Final Score"}</p>
      <div class="final-score">${ot(e.score)}</div>
      <div class="final-best"><svg class="crown" aria-hidden="true"><use href="#i-crown" /></svg><small>${t?"Today's best":"Best Score"}</small><b>${ot(i)}</b></div>
      ${r.length?`<ul class="highlights">${r.map(o=>`<li>${On(o)}</li>`).join("")}</ul>`:""}
      <div class="final-stats">
        ${t?"":`<span>Island <b>${Tn(e)}×${Tn(e)}</b></span>`}
        <span>Turns <b>${e.turn-1}</b></span>
        <span>Best chain <b>×${Math.max(1,e.bestChain)}</b></span>
        <span>Top piece <b>${On(un[e.highestTier].name)}</b></span>
        ${(e.festivals??0)>0?`<span>Festivals <b>${e.festivals}</b></span>`:""}
        ${(e.rocksShattered??0)>0?`<span>Rocks <b>${e.rocksShattered}</b></span>`:""}
      </div>`,actions:a,describe:!0}),cn(`${s} ${t?"":"Final score "}${ot(e.score)}.${n.newBest?" New best!":""} ${r.join(". ")}`)}async function Kd(n){const i=`${Yt(n)==="daily"?`Tiny Terrains · Daily #${gr(n.dailyKey??as())}`:`Tiny Terrains · ${Tn(n)}×${Tn(n)}`}: ${ot(n.score)} points · top piece ${un[n.highestTier].name} · best chain ×${Math.max(1,n.bestChain)}`,r=document.getElementById("shareBtn")?.querySelector("span");try{if(typeof navigator.share=="function"){await navigator.share({title:"Tiny Terrains",text:i,...so?{url:so}:{}});return}}catch(a){if(a?.name==="AbortError")return}try{await navigator.clipboard.writeText(so?`${i}
${so}`:i),r&&(r.textContent="Copied!"),cn("Result copied. Paste it anywhere.")}catch{r&&(r.textContent="Copy not allowed here")}}function gb(n){const e=n.canvas;e.tabIndex=mt?-1:0,e.setAttribute("role","application"),e.setAttribute("aria-label","Puzzle board, 8 by 8 tiles. Use arrow keys to move and Enter to place.");let t=null;const i=new Set;let s=!1;const r=()=>{t=null,ta=!1,ji=null,hn||n.setHover(null,null,[]),Ni&&wn()};let a=null;const o=()=>Math.PI/Math.max(320,e.clientWidth*.7);e.addEventListener("pointerdown",c=>{if(!(c.button!==0||mt)&&!(performance.now()<Jo)&&!a){if(i.add(c.pointerId),i.size>1||s){s=!0,r();return}if(n.pick(c.clientX,c.clientY)===null&&!bn()){i.delete(c.pointerId),a={id:c.pointerId,x0:c.clientX,spin0:n.getSpin(),lastX:c.clientX,lastT:performance.now(),v:0},e.setPointerCapture?.(c.pointerId),e.classList.add("spinning"),c.pointerType!=="mouse"&&c.preventDefault();return}et.unlock(),t={id:c.pointerId,type:c.pointerType},ta=c.pointerType!=="mouse",e.setPointerCapture?.(c.pointerId),es={x:c.clientX,y:c.clientY,type:c.pointerType},hi(n.pick(c.clientX,c.clientY)),c.pointerType!=="mouse"&&c.preventDefault()}}),e.addEventListener("pointermove",c=>{if(a&&a.id===c.pointerId){const f=performance.now(),h=Math.max(1,f-a.lastT)/1e3;a.v=.7*a.v+.3*(-(c.clientX-a.lastX)*o()/h),a.lastX=c.clientX,a.lastT=f,n.dragSpin(a.spin0-(c.clientX-a.x0)*o());return}if(es={x:c.clientX,y:c.clientY,type:c.pointerType},t&&t.id!==c.pointerId||!t&&c.pointerType!=="mouse")return;const u=n.pick(c.clientX,c.clientY);u!==ji&&hi(u)});const l=(c,u)=>{if(a&&a.id===c.pointerId){const g=performance.now()-a.lastT>120?0:a.v;a=null,e.classList.remove("spinning"),n.endSpin(u?g:0);return}const f=i.delete(c.pointerId);if(i.size===0){const g=s;if(s=!1,g&&f){r();return}}if(!t||t.id!==c.pointerId)return;const h=t.type;t=null,ta=!1;const d=n.pick(c.clientX,c.clientY);u&&d!==null&&(Kt=null,n.setCursor(null),Zc(d)),h!=="mouse"&&(ji=null,hn||n.setHover(null,null,[]),(!u||d===null)&&wn())};e.addEventListener("pointerup",c=>l(c,!0)),e.addEventListener("pointercancel",c=>l(c,!1)),e.addEventListener("lostpointercapture",c=>{(i.has(c.pointerId)||a?.id===c.pointerId)&&l(c,!1)}),e.addEventListener("pointerleave",c=>{c.pointerType==="mouse"&&!t&&(hi(null),!mt&&Ni&&wn())}),e.addEventListener("contextmenu",c=>c.preventDefault()),ee.stage.addEventListener("touchmove",c=>c.preventDefault(),{passive:!1}),ee.stage.addEventListener("dblclick",c=>c.preventDefault()),document.addEventListener("gesturestart",c=>c.preventDefault()),e.addEventListener("focus",()=>{Kt===null&&!mt&&Kc&&(Kt=qd(),n.setCursor(Kt),hi(Kt))}),e.addEventListener("blur",()=>{Kt!==null&&(mo=Kt),n.setCursor(null),Kt=null,hi(null)}),e.addEventListener("keydown",c=>{if(!(mt||bn()))if(c.key==="ArrowRight"||c.key==="ArrowLeft"||c.key==="ArrowUp"||c.key==="ArrowDown"){c.preventDefault();const{dx:u,dy:f}=n.arrowStep(c.key),h=Tn(O),d=Kt??qd(),g=Math.min(h-1,Math.max(0,d%h+u)),x=Math.min(h-1,Math.max(0,Math.floor(d/h)+f));Kt=x*h+g,n.setCursor(Kt),hi(Kt);const m=O.board[Kt],p=m===yt&&!O.over?Tp(Kt):null;cn(`Row ${x+1}, column ${g+1}: ${m===yt?"empty":zt(m)}.${p?` ${p.text.replace("→","makes")}.`:""} In hand: ${zt(O.next)}.`)}else(c.key==="Enter"||c.key===" ")&&Kt!==null&&(c.preventDefault(),Zc(Kt))})}function vb(){window.addEventListener("keydown",n=>{["Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Enter"," ","Escape"].includes(n.key)&&(Kc=!0)},!0),window.addEventListener("pointerdown",()=>Kc=!1,!0),window.addEventListener("keydown",n=>{if(n.metaKey||n.ctrlKey||n.altKey)return;if(bn()){if(n.key==="Escape")en();else if(n.key==="Tab"){const t=[...ee.modal.querySelectorAll("button:not(.hidden)")].filter(eu),i=t.indexOf(document.activeElement);n.preventDefault(),t[(i+(n.shiftKey?-1:1)+t.length)%t.length]?.focus()}return}if(mt){n.key==="Enter"&&(document.activeElement===document.body||document.activeElement===null)&&(n.preventDefault(),tl());return}const e=n.key.toLowerCase();n.key==="Escape"&&$n?Ns(!0):n.key==="Escape"?Pp():e==="b"?Cp():e==="s"?Qc():e==="z"||e==="u"||n.key==="Backspace"?Io():e==="q"?No(-1):e==="e"?No(1):e==="n"?Dp():e==="h"||e==="?"?sl():e==="i"?Gu():e==="j"?Hu():e==="m"?_b():e==="v"&&Up(Ce?.getView()==="iso"?"cozy":"iso")})}function _b(){const n=et.enabled||et.music;et.enabled=!n,Je.setSound(!n),Je.setMusic(!n),et.setMusic(!n);const e=n?"Sound off (M to turn it back on).":"Sound on.";Ot(e),cn(e)}function No(n){!Ce||mt||bn()||(et.unlock(),et.swap(),on.tap(),Ce.rotate(n===-1?1:-1),hi(null),cn(`Island turned ${n===-1?"left":"right"}.`))}function Up(n){Ce&&(Ce.setView(n),Je.setView(n))}function xb(n){if(n.key==="littleNook.journal"){try{const i=n.newValue?JSON.parse(n.newValue):null;_f(i)&&Je.adoptJournal(Ht=i)}catch{}mt&&fr();return}if(hn)return;const e=Yt(O)==="daily";if(n.key!==(e?"littleNook.daily":lo(Tn(O),Ps(O))))return;const t=e?Je.loadDaily(ws):Je.loadGame(ws,Tn(O),Ps(O));if(!t){!n.newValue&&Mb(n.oldValue)&&!O.over&&(yr(e?yp(as()):Ko()),mt?fr():(ga(),cn("That round was finished in another tab.")));return}t.seed===O.seed&&t.turn<=O.turn||e&&t.dailyKey&&O.dailyKey&&t.dailyKey<O.dailyKey||(yr(t),mt?fr():(Ot("Updated with progress from another tab."),cn("Updated with progress from another tab.")))}function Mb(n){try{const e=n?JSON.parse(n):null;return ws(e)&&e.seed===O.seed&&(e.dailyKey??"")===(O.dailyKey??"")}catch{return!1}}function yb(){try{Ce=new KS(ee.stage)}catch(a){console.error(a),ze("boot")?.remove(),ee.webglError.classList.remove("hidden"),document.body.classList.remove("booting","at-home"),Ot("3D graphics are unavailable in this browser.","danger");return}const n=Ce;tu(),Uu.addEventListener?.("change",tu),n.onContextRestored=()=>{vo.clear(),is()};const e=Je.getView();n.setView(e==="cozy"?"cozy":"iso"),gb(n),vb(),ee.keepBtn.addEventListener("click",Qc),ee.nextCard.addEventListener("click",()=>{!mt&&!bn()&&Gu()}),ee.menuBtn.addEventListener("click",Pp),ee.spinLeft.addEventListener("click",()=>No(-1)),ee.undoBtn.addEventListener("click",Io),ee.shopBtn.addEventListener("click",()=>Cp()),ee.powerCancel.addEventListener("click",()=>Ns(!0)),ee.spinRight.addEventListener("click",()=>No(1)),ee.sizePrev.addEventListener("click",()=>Yd(-1)),ee.sizeNext.addEventListener("click",()=>Yd(1)),ee.playBtn.addEventListener("click",tl),ee.homeNewBtn.addEventListener("click",pb),ee.dailyBtn.addEventListener("click",()=>Do()),ee.homeHelpBtn.addEventListener("click",sl),ee.homeJournalBtn.addEventListener("click",Hu),ee.homeSettingsBtn.addEventListener("click",Ip),ee.coachSkip.addEventListener("click",()=>{const a=document.activeElement===ee.coachSkip;nl(),a&&el(),Ot("Tips off. You can read the rules any time in the menu."),cn("Tips off.")}),ee.hud.addEventListener("click",a=>{a.detail>0&&performance.now()<Jo&&(a.stopPropagation(),a.preventDefault())},!0),ee.closeModal.addEventListener("click",()=>en());let t=!1;ee.modal.addEventListener("pointerdown",a=>t=a.target===ee.modal),ee.modal.addEventListener("click",a=>{t&&a.target===ee.modal&&en(),t=!1}),document.addEventListener("visibilitychange",()=>{et.setPaused(document.hidden),document.hidden||(n.markDirty(),mt&&fr())}),window.addEventListener("storage",xb),document.addEventListener("touchend",()=>et.unlock(),{capture:!0,passive:!0});const i=()=>Xd();window.addEventListener("resize",i),new ResizeObserver(i).observe(ee.dock),qp().then(i),is(),Xd(),wn(),ga();const s=()=>[0,1,2,3,4,5].forEach(a=>ma(a)),r=window.requestIdleCallback;r?r(s,{timeout:2e3}):setTimeout(s,800),window.__littleNookBooted=!0,document.body.classList.remove("booting"),ze("boot")?.remove(),window.__littleNook={state:()=>O,busy:()=>hn,atHome:()=>mt,cursor:()=>Kt,journal:()=>Ht,place:a=>Zc(a),legal:()=>wi(O),undo:()=>Io(),canUndo:()=>jo(),swap:Qc,startDaily:()=>Do(),tilePixelSize:()=>n.tilePixelSize(),thumb:(a,o=160)=>n.thumbnail(a,o),cellToScreen:a=>n.cellToScreen(a,0),setView:a=>n.setView(a),spinQuarter:()=>n.getSpinQuarter(),boardSize:()=>n.getBoardSize()}}yb();if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)){const n=!!navigator.serviceWorker.controller;let e=null,t=Date.now(),i=!1;window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(r=>e=r).catch(()=>{})});const s=()=>{e&&Date.now()-t>3600*1e3&&(t=Date.now(),e.update().catch(()=>{}))};document.addEventListener("visibilitychange",()=>{document.hidden||s()}),window.addEventListener("pageshow",r=>{r.persisted&&s()}),navigator.serviceWorker.addEventListener("controllerchange",()=>{!n||i||(bp=!0,mt||O.over?(i=!0,location.reload()):(Ot("An update is ready. It loads the next time you open the home screen."),cn("An update is ready.")))})}
