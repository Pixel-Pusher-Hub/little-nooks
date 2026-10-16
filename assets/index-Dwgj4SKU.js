(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Jp=""+new URL("outfit-latin-300-normal-CRYTwY6m.woff2",import.meta.url).href,Zp=""+new URL("outfit-latin-400-normal-BGsTXAXT.woff2",import.meta.url).href,Qp=""+new URL("outfit-latin-500-normal-DKnIMDSk.woff2",import.meta.url).href,jp=""+new URL("outfit-latin-600-normal-B7SfZ07L.woff2",import.meta.url).href,e0=[["Outfit",Jp,"300"],["Outfit",Zp,"400"],["Outfit",Qp,"500"],["Outfit",jp,"600"]];function t0(){return typeof FontFace>"u"||!document.fonts?Promise.resolve():Promise.all(e0.map(([n,e,t])=>{const i=new FontFace(n,`url(${e}) format('woff2')`,{weight:t,display:"swap"});return document.fonts.add(i),i.load().catch(()=>{})}))}const Ln=8,Ss=Ln*Ln,bs=[5,6,7,8,9,10],of=n=>bs.includes(n),n0={5:"Tiny",6:"Small",7:"Cozy",8:"Medium",9:"Big",10:"Grand"},Mt=-1,kt=99,Vt=98,yn=97,An=96,Jn={[yn]:{name:"Campfire",life:10,radius:1},[An]:{name:"Lamppost",life:15,radius:2}},Qn=n=>n===yn||n===An,i0=["Bush","Tree","Small House","Cottage","House","Apartments","Office Tower","Skyscraper","Glass Spire","Deco Tower","Crown Tower","Black Tower","Saucer Tower","Pyramid Tower","Twin Spires","Pagoda Tower","Bullet Tower","Needle Tower","Pearl Tower","Iron Tower","Sail Tower","Glass Shard","Opener Tower","Arch Tower","Bamboo Tower","Spiral Tower","Diamond Tower","Sky Park","Waist Tower","Freedom Tower","Crystal Spire","Leaning Tower","Torch Tower","Prism Twins","Lattice Spire","Stellar Crown","Infinity Tower","Cosmos Spire","Star Citadel","Heaven’s Gate"],Ir=[0,20,90,350,1200,4e3,13e3,42e3],mn=i0.map((n,e)=>({name:n,hint:`Tier ${e+1}`,mergePoints:e<Ir.length?Ir[e]:Math.round(Ir[Ir.length-1]*Math.pow(1.45,e-Ir.length+1))})),ru=7,ch=[0,0,1,1,1,2,2,3],lf=n=>n>=9?2:1,Ht=mn.length-1,s0=Ht-4,cf={name:"Rock",hint:"Obstacle"};function uf(n){return n===Vt?1:Qn(n)?Jn[n].radius:n<0||n>=mn.length?0:ch[Math.min(n,ch.length-1)]}function hf(n,e=It){return Math.max(0,Math.min(s0,n-e.spawnBaseOffset))}const r0=["reroll","bulldoze","upgrade"],xo={reroll:{name:"Reroll",hint:"Swap the piece in hand for a new one"},bulldoze:{name:"Bulldoze",hint:"Clear any tile (not the campfire)"},upgrade:{name:"Upgrade",hint:"Raise a building one tier"}},It={minGroup:3,groupSizeBonus:.5,comboMultipliers:[1,2,3,4,5],festivalPoints:15e4,rockMinGroup:0,rockCrumblePoints:40,rockBreakTier:3,placePoints:1,spawnPhases:[{fromTurn:1,tiers:[75,25],rock:0},{fromTurn:11,tiers:[62,30,8],rock:0},{fromTurn:31,tiers:[55,32,11,2],rock:0},{fromTurn:61,tiers:[50,32,14,4],rock:0}],assistFillRatio:.7,assistChance:.35,crowdedRatio:.78,spawnBaseOffset:3,startPieces:90,milestoneBase:16,milestonePerTier:0,emberChance:.03,lampChance:.012,lightItemsFrom:8,coinsPerMerge:2,coinsPerTier:1,festivalCoins:80,piecePrice:6,piecePriceGrowth:1.75,priceRise:1.5,powerPrices:{reroll:6,bulldoze:14,upgrade:10},lightPrices:{[yn]:18,[An]:40}};function a0(n,e,t=It){return Math.max(1,Math.round((t.milestoneBase+t.milestonePerTier*n)*e/Ss))}function o0(n,e=It){return Math.max(20,Math.round(e.startPieces*n/Ss))}function Go(n,e=It){return n===Vt||Qn(n)?1/0:n===kt?e.rockMinGroup>0?e.rockMinGroup:1/0:e.minGroup}function Gt(n){return n===kt?cf.name:n===Vt?"Campfire":Qn(n)?Jn[n].name:mn[n]?.name??"Empty"}function df(n){return n===kt?cf.hint:Qn(n)?`Lasts ${Jn[n].life} moves`:mn[n]?.hint??""}function Ma(n){return Math.round(Math.sqrt(n.length))}function au(n=Ln){return new Array(n*n).fill(Mt)}function xr(n,e=Ln){return{x:n%e,y:Math.floor(n/e)}}function l0(n,e,t=Ln){return e*t+n}function ou(n,e=Ln){const{x:t,y:i}=xr(n,e),s=[];return t>0&&s.push(n-1),t<e-1&&s.push(n+1),i>0&&s.push(n-e),i<e-1&&s.push(n+e),s}function ff(n,e=Ln){const{x:t,y:i}=xr(n,e);return t===0||i===0||t===e-1||i===e-1}function ya(n,e,t=n[e]){const i=Ma(n),s=new Set([e]),r=[e];for(;r.length;){const a=r.pop();for(const o of ou(a,i))!s.has(o)&&n[o]===t&&(s.add(o),r.push(o))}return[...s].sort((a,o)=>a-o)}function Cr(n){const e=Ma(n),t=new Array(n.length).fill(!1);return n.forEach((i,s)=>{const r=i===Vt?lf(e):uf(i);if(r<=0)return;const{x:a,y:o}=xr(s,e);for(let l=Math.max(0,o-r);l<=Math.min(e-1,o+r);l++)for(let c=Math.max(0,a-r);c<=Math.min(e-1,a+r);c++)t[l*e+c]=!0}),t}function Sa(n){const e=[];return n.forEach((t,i)=>t===Mt&&e.push(i)),e}function c0(n){let e=0;for(const t of n)t!==Mt&&e++;return e}function u0(n,e=Ln){const t=au(e);return n.forEach((i,s)=>[...i.replace(/\s+/g,"")].forEach((r,a)=>{r!=="."&&(t[l0(a,s,e)]=r==="R"?99:Number(r)-1)})),t}const h0=/^(\d{4})-(\d{2})-(\d{2})$/,pf=864e5,dr=(n,e=2)=>String(n).padStart(e,"0");function d0(n){return`${dr(n.getFullYear(),4)}-${dr(n.getMonth()+1)}-${dr(n.getDate())}`}function Mo(n){const e=h0.exec(n);if(!e)return NaN;const[t,i,s]=[Number(e[1]),Number(e[2]),Number(e[3])],r=Date.UTC(t,i-1,s),a=new Date(r);return a.getUTCFullYear()===t&&a.getUTCMonth()===i-1&&a.getUTCDate()===s?r:NaN}function f0(n){const e=new Date(n);return`${dr(e.getUTCFullYear(),4)}-${dr(e.getUTCMonth()+1)}-${dr(e.getUTCDate())}`}function ws(n){return typeof n=="string"&&Number.isFinite(Mo(n))}function p0(n,e){return Math.round((Mo(e)-Mo(n))/pf)}function mf(n){const e=Mo(n);return Number.isFinite(e)?f0(e-pf):""}function yo(n){const e=n+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function gf(){return typeof crypto<"u"&&"getRandomValues"in crypto?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*2**32)>>>0}function m0(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function lu(n,e=Ss){return e===Ss?n:Math.max(1,Math.round(1+(n-1)*(Ss/e)))}function uh(n,e=Ss){let t=1;for(;lu(t,e)<n;)t++;return t}function vf(n,e=It){let t=e.spawnPhases[0];for(const i of e.spawnPhases)n>=i.fromTurn&&(t=i);return t}function rc(n,e=It){const t=vf(n,e),i=t.tiers.map((r,a)=>[a,r]);t.rock>0&&i.push([kt,t.rock]);const s=i.reduce((r,[,a])=>r+a,0);return i.filter(([,r])=>r>0).map(([r,a])=>[r,a/s])}function hh(n,e,t,i=0){const[s,r]=yo(e),a=rc(n,t),o=c=>c===kt?c:Math.min(Ht,c+i);let l=0;for(const[c,u]of a)if(l+=u,s<l)return[o(c),r];return[o(a[a.length-1][0]),r]}function _f(n){let e=-1;for(const t of n)t!==kt&&t>=0&&t<=Ht&&(e=Math.max(e,t));return e}function g0(n,e,t){for(const i of Sa(n)){const s=[...n];s[i]=e;const r=Go(e,t);if(ya(s,i,e).length>=r)return!0}return!1}function $i(n,e,t,i=It,s=!1){if(e=lu(e,n.length),s&&e>=i.lightItemsFrom){const[c,u]=yo(t);if(t=u,c<i.lampChance)return[An,t];if(c<i.lampChance+i.emberChance)return[yn,t]}const r=hf(_f(n),i);let[a,o]=hh(e,t,i,r);if(c0(n)/n.length>=i.assistFillRatio&&Sa(n).length>0&&!g0(n,a,i)){const[c,u]=yo(o);o=u,c<i.assistChance&&([a,o]=hh(e,o,i,r))}return[a,o]}function dh(n){const e=n.map(([s,r])=>({piece:s,exact:r*100,percent:Math.floor(r*100)}));let t=100-e.reduce((s,r)=>s+r.percent,0);const i=[...e].sort((s,r)=>r.exact-r.percent-(s.exact-s.percent));for(const s of i){if(t<=0)break;s.percent++,t--}return e.map(({piece:s,percent:r})=>({piece:s,percent:r}))}function v0(n,e=It,t=Ss,i=0){const s=lu(n,t),r=u=>u.map(d=>d.piece===kt?d:{...d,piece:Math.min(Ht,d.piece+i)}),a=vf(s,e),o=e.spawnPhases[e.spawnPhases.indexOf(a)+1],l=uh(a.fromTurn,t),c=o?uh(o.fromTurn,t):null;return{from:l,to:c!==null?c-1:null,rows:r(dh(rc(s,e))),next:o&&c!==null?{at:c,rows:r(dh(rc(o.fromTurn,e)))}:null}}function cu(n){const e=Math.floor((n-1)/2);return e*n+e}function uu(n,e=It,t=Ln,i=!1,s=!1){const r=au(t);i&&(r[cu(t)]=Vt);const a={board:r,score:0,turn:1,next:0,stash:Mt,rng:n>>>0,over:!1,lastChain:0,bestChain:0,highestTier:0,merges:0,seed:n>>>0,festivals:0,rocksShattered:0,...i?{glow:!0}:{},...s?{budget:!0,pieceLimit:o0(t*t,e)}:{}},[o,l]=$i(a.board,a.turn,a.rng,e,i),[c,u]=$i(a.board,a.turn+1,l,e,i);return{...a,next:o,after:c,rng:u,coins:0}}function Di(n){const e=Sa(n.board);if(!n.glow||n.next!==void 0&&Qn(n.next))return e;const t=Cr(n.board);return e.filter(i=>t[i])}function hu(n,e){return!Number.isInteger(e)||e<0||e>=n.board.length||n.board[e]!==Mt?!1:!n.glow||n.next!==void 0&&Qn(n.next)||Cr(n.board)[e]}function xf(n,e=It){const t=e.comboMultipliers;return t[Math.min(n-1,t.length-1)]}function _0(n,e,t,i=It){const s=mn[n].mergePoints,r=1+i.groupSizeBonus*Math.max(0,e-i.minGroup);return Math.round(s*r*xf(t,i))}function Mf(n,e,t=It){const i=[];let s=0;for(;;){const r=n[e];if(r===Mt||r===Vt||Qn(r))break;const a=ya(n,e,r),o=Go(r,t);if(a.length<o)break;if(r===kt){for(const u of a)n[u]=Mt;i.push({kind:"crumble",cells:a,target:e,points:t.rockCrumblePoints*a.length});break}s++;const l=xf(s,t);if(r===Ht){for(const h of a)n[h]=Mt;const u=1+t.groupSizeBonus*(a.length-t.minGroup),d=Math.round(t.festivalPoints*u*l);i.push({kind:"festival",step:s,cells:a,target:e,points:d,multiplier:l});break}for(const u of a)n[u]=Mt;n[e]=r+1;const c=r+1>=t.rockBreakTier?x0(n,a):[];if(i.push({kind:"merge",step:s,fromTier:r,toTier:r+1,cells:a,target:e,points:_0(r+1,a.length,s,t),multiplier:l}),c.length){for(const u of c)n[u]=Mt;i.push({kind:"crumble",cells:c,target:e,points:t.rockCrumblePoints*c.length})}}return i}function x0(n,e){const t=new Set,i=Ma(n);for(const s of e)for(const r of ou(s,i))n[r]===kt&&t.add(r);return[...t].sort((s,r)=>s-r)}function Vo(n,e,t=It){if(n.over||!hu(n,e))return{state:n,events:[],points:0,accepted:!1};const i=[...n.board],s=n.next;i[e]=s;const r=[{kind:"place",index:e,piece:s,points:t.placePoints}],a=Mf(i,e,t);r.push(...a);const o=Sf(n,r,t,s>=0&&s<=Ht?s:-1),l=(n.burn??[]).map(([E,b])=>[E,b-1]),c=l.filter(([,E])=>E<=0).map(([E])=>E);for(const E of c)i[E]=Mt;c.length&&r.push({kind:"expire",cells:c,points:0});const u=[...l.filter(([,E])=>E>0),...Qn(s)?[[e,Jn[s].life]]:[]],d=n.turn+1;let h=n.rng,f;n.after!==void 0?f=n.after:[f,h]=$i(i,d,h,t,!!n.glow);const g=[...n.queue??[]];let x;g.length?x=g.shift():[x,h]=$i(i,d+1,h,t,!!n.glow);const{pieceLimit:p}=o,m=Sa(i).length===0,S=!m&&!!n.glow&&Di({board:i,glow:!0,next:f}).length===0&&!Qn(n.stash),T=!!p&&d>p,M=m||S||T;return{accepted:!0,events:r,points:o.points,state:{...n,...o.fields,board:i,turn:d,next:f,after:x,rng:h,over:M,...g.length||n.queue?{queue:g}:{},...n.glow?{burn:u}:{},...M?{endReason:m?"full":S?"dark":"limit"}:{}}}}function yf(n,e=It){let t=0;for(const i of n)i.kind==="merge"?t+=(e.coinsPerMerge+e.coinsPerTier*i.toTier)*i.step:i.kind==="festival"&&(t+=e.festivalCoins*i.step);return t}function Sf(n,e,t,i=-1){const s=e.reduce((u,d)=>u+d.points,0),r=e.filter(u=>u.kind==="merge"||u.kind==="festival").length;let a=Math.max(n.highestTier,i),o=n.festivals??0,l=n.rocksShattered??0;for(const u of e)u.kind==="merge"&&(a=Math.max(a,u.toTier)),u.kind==="upgrade"&&(a=Math.max(a,u.toTier)),u.kind==="festival"&&(a=Ht,o++),u.kind==="crumble"&&(l+=u.cells.length);let c=n.pieceLimit;if(n.budget&&c&&a>n.highestTier)for(let u=n.highestTier+1;u<=a;u++)c+=a0(u,n.board.length,t);return{points:s,pieceLimit:c,fields:{score:n.score+s,coins:(n.coins??0)+yf(e,t),lastChain:r,bestChain:Math.max(n.bestChain,r),highestTier:a,merges:n.merges+r,festivals:o,rocksShattered:l,...c!==n.pieceLimit?{pieceLimit:c}:{}}}}function M0(n,e=It){if(n.over)return n;if(n.stash===Mt){if(n.after===void 0){const[r,a]=$i(n.board,n.turn,n.rng,e,!!n.glow);return{...n,stash:n.next,next:r,rng:a}}const t=[...n.queue??[]];let i=n.rng,s;return t.length?s=t.shift():[s,i]=$i(n.board,n.turn+1,i,e,!!n.glow),{...n,stash:n.next,next:n.after,after:s,rng:i,...n.queue?{queue:t}:{}}}return{...n,stash:n.next,next:n.stash}}const Ho=(n,e)=>n.bought?.[e]??0;function bf(n,e=It){return Math.round(e.piecePrice*Math.pow(e.piecePriceGrowth,n))}function wf(n,e,t=It){const i=Math.max(t.powerPrices.upgrade,Math.round(bf(e+1,t)*.6));return Math.round(i*Math.pow(t.priceRise,Ho(n,"upgrade")))}function du(n,e=It){const t=r=>Math.pow(e.priceRise,Ho(n,r)),i=[],s=Math.min(Ht,Math.max(0,n.highestTier));for(let r=0;r<=s;r++){const a=`p${r}`;i.push({key:a,kind:"piece",piece:r,price:Math.round(bf(r,e)*t(a))})}if(n.glow)for(const r of[yn,An]){const a=`l${r}`;i.push({key:a,kind:"light",piece:r,price:Math.round((e.lightPrices[r]??30)*t(a))})}for(const r of r0)i.push({key:r,kind:"power",power:r,price:r==="upgrade"?wf(n,0,e):Math.round(e.powerPrices[r]*t(r))});return i}const ao=(n,e,t)=>({coins:(n.coins??0)-t,bought:{...n.bought??{},[e]:Ho(n,e)+1}});function y0(n,e,t=It){const i=du(n,t).find(r=>r.key===e&&r.kind!=="power");if(n.over||!i||i.piece===void 0||(n.coins??0)<i.price)return{state:n,accepted:!1};const s=n.after!==void 0?[n.after,...n.queue??[]]:[...n.queue??[]];return{accepted:!0,state:{...n,...ao(n,e,i.price),next:i.piece,after:n.next,queue:s,...n.budget&&n.pieceLimit?{pieceLimit:n.pieceLimit+1}:{}}}}function Wo(n,e){if(e==="reroll")return[];const t=[];return n.board.forEach((i,s)=>{e==="bulldoze"&&i!==Mt&&i!==Vt&&t.push(s),e==="upgrade"&&i>=0&&i<Ht&&t.push(s)}),t}function Xo(n,e,t=-1,i=It){return e==="upgrade"?wf(n,t>=0?Math.max(0,n.board[t]):0,i):Math.round(i.powerPrices[e]*Math.pow(i.priceRise,Ho(n,e)))}function Ef(n,e,t=-1,i=It){const s={state:n,events:[],points:0,accepted:!1};if(n.over)return s;const r=Xo(n,e,t,i);if((n.coins??0)<r)return s;if(e==="reroll"){let d=n.rng,h=n.next;for(let f=0;f<6&&h===n.next;f++)[h,d]=$i(n.board,n.turn,d,i,!!n.glow);return{accepted:!0,events:[],points:0,state:{...n,...ao(n,e,r),next:h,rng:d}}}if(!Wo(n,e).includes(t))return s;const a=[...n.board];if(e==="bulldoze"){a[t]=Mt;const d=n.burn?.filter(([f])=>f!==t);return{accepted:!0,events:[{kind:"remove",cells:[t],points:0}],points:0,state:{...n,...ao(n,e,r),board:a,...d?{burn:d}:{}}}}const o=a[t]+1;a[t]=o;const l=[{kind:"upgrade",index:t,toTier:o,points:0},...Mf(a,t,i)],c={...n,...ao(n,e,r)},u=Sf(c,l,i);return{accepted:!0,events:l,points:u.points,state:{...c,...u.fields,board:a}}}function fu(n,e,t=It,i=Sa(n)){const s=[];for(const r of i){const a=[...n];a[r]=e;const o=Go(e,t);ya(a,r,e).length>=o&&s.push(r)}return s}const Bn=n=>typeof n=="number"&&Number.isInteger(n),oo=n=>Bn(n)&&(n===Mt||n===kt||n===Vt||n===yn||n===An||n>=0&&n<=Ht),fh=n=>oo(n)&&n!==Mt&&n!==Vt,Ca=n=>Bn(n)&&n>=0,Nn=(n,e)=>n===void 0||e(n);function S0(n,e){if(!Array.isArray(n))return!1;const t=new Set;return n.every(i=>{if(!Array.isArray(i)||i.length!==2||!Bn(i[0])||!Bn(i[1])||t.has(i[0]))return!1;t.add(i[0]);const s=e[i[0]];return Qn(s)&&i[1]>=1&&i[1]<=Jn[s].life})}function Rs(n){if(!n||typeof n!="object")return!1;const e=n;return Array.isArray(e.board)&&of(Math.sqrt(e.board.length))&&e.board.every(oo)&&Bn(e.score)&&e.score>=0&&Bn(e.turn)&&e.turn>=1&&oo(e.next)&&e.next!==Mt&&e.next!==Vt&&e.stash!==Vt&&oo(e.stash)&&Bn(e.rng)&&typeof e.over=="boolean"&&Bn(e.lastChain)&&Bn(e.bestChain)&&Bn(e.highestTier)&&Bn(e.merges)&&Bn(e.seed)&&Nn(e.festivals,Ca)&&Nn(e.rocksShattered,Ca)&&Nn(e.mode,i=>i==="classic"||i==="daily")&&Nn(e.dailyKey,ws)&&Nn(e.pieceLimit,i=>Bn(i)&&i>0)&&Nn(e.endReason,i=>i==="full"||i==="limit"||i==="dark")&&Nn(e.glow,i=>typeof i=="boolean")&&Nn(e.budget,i=>typeof i=="boolean")&&Nn(e.burn,i=>S0(i,e.board))&&Nn(e.after,fh)&&Nn(e.queue,i=>Array.isArray(i)&&i.length<=64&&i.every(fh))&&Nn(e.coins,Ca)&&Nn(e.bought,i=>!!i&&typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(Ca))&&(e.mode!=="daily"||e.dailyKey!==void 0)?(Object.isExtensible(e)&&(e.festivals??(e.festivals=0),e.rocksShattered??(e.rocksShattered=0)),!0):!1}const aa=120,b0="2026-10-13",w0=4,E0=1540483477,T0=200;function Mr(n){return p0(b0,n)+1}function A0(n){return m0("little-nook/daily/"+n)}function C0(n,e,t){const i=[...t];let s=(n^E0)>>>0;const r=()=>{const[o,l]=yo(s);return s=l,o},a=(o,l)=>{for(let c=0;c<T0;c++){const u=o(),d=Math.floor(r()*i.length);if(!(i[d]!==Mt||!l(d))){if(i[d]=u,ya(i,d,u).length<Go(u,e))return;i[d]=Mt}}};for(let o=0;o<w0;o++)a(()=>r()<.6?0:1,()=>!0);return i}function Tf(n,e=It){const t=A0(n),i=uu(t,e,8,!0),s=C0(t,e,i.board),[r,a]=$i(s,i.turn,t,e,!0),[o,l]=$i(s,i.turn+1,a,e,!0);return{...i,board:s,next:r,after:o,rng:l,mode:"daily",dailyKey:n,pieceLimit:aa}}const Af=20,Cf=60;function R0(){return{v:1,rounds:0,pieces:0,built:new Array(Ht+1).fill(0),festivals:0,rocksShattered:0,bestClassic:0,bestDaily:0,bestChain:0,biggestMove:0,mostFestivals:0,longestRound:0,recent:[],daily:{lastKey:null,streak:0,bestStreak:0,scores:{}}}}const Mi=n=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=0,lo=n=>!!n&&typeof n=="object"&&!Array.isArray(n),P0=n=>n==="classic"||n==="daily";function L0(n){return lo(n)&&ws(n.date)&&P0(n.mode)&&Mi(n.score)&&Mi(n.turns)&&Mi(n.top)&&n.top<=Ht&&Mi(n.chain)&&Mi(n.festivals)}function Rf(n){if(!lo(n)||n.v!==1||!["rounds","pieces","festivals","rocksShattered","bestClassic","bestDaily","bestChain","biggestMove","mostFestivals","longestRound"].every(r=>Mi(n[r])))return!1;const t=n.built;if(!Array.isArray(t)||t.length<5||t.length>Ht+1||!t.every(Mi)||t[0]!==0||!Array.isArray(n.recent)||n.recent.length>Af||!n.recent.every(L0))return!1;const i=n.daily;if(!lo(i)||!(i.lastKey===null||ws(i.lastKey))||!Mi(i.streak)||!Mi(i.bestStreak)||!lo(i.scores))return!1;const s=Object.entries(i.scores);if(!(s.length<=Cf&&s.every(([r,a])=>ws(r)&&Mi(a))))return!1;if(t.length<Ht+1&&Object.isExtensible(t))for(;t.length<Ht+1;)t.push(0);return!0}function Pf(n,e,t){const i=[...n.built];let{pieces:s,festivals:r,rocksShattered:a}=n;for(const l of e)l.kind==="place"?s++:l.kind==="merge"?i[l.toTier]=(i[l.toTier]??0)+1:l.kind==="festival"?r++:l.kind==="crumble"&&(a+=l.cells.length);const o=Number.isFinite(t)?Math.max(0,Math.floor(t)):0;return{...n,built:i,pieces:s,festivals:r,rocksShattered:a,biggestMove:Math.max(n.biggestMove,o)}}const D0=n=>n.toLocaleString("en-US"),Nr=n=>typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.floor(n)):0;function Lf(n,e){const t=n.daily.lastKey;return t!==null&&(t===e||t===mf(e))?n.daily.streak:0}const I0=(n,e,t=e+"s")=>`${n} ${n===1?e:t}`,ph=["Best","2nd best","3rd best"];function N0(n){const e=Object.keys(n).sort().reverse().slice(0,Cf),t={};for(const i of e.reverse())t[i]=n[i];return t}function U0(n,e,t){const i=e.mode??"classic",s=Nr(e.score),r=Nr(e.turn-1),a=Nr(e.bestChain),o=Nr(e.festivals),l=Math.min(Ht,Nr(e.highestTier)),c=t.slice(0,10),h=[{date:ws(c)?c:ws(e.dailyKey)?e.dailyKey:"1970-01-01",mode:i,score:s,turns:r,top:l,chain:a,festivals:o},...n.recent].slice(0,Af);let f=n.daily;const g=i==="daily"&&ws(e.dailyKey)?e.dailyKey:null;if(g){const v=N0({...f.scores,[g]:Math.max(f.scores[g]??0,s)}),{lastKey:w}=f;if(w!==null&&g<w)f={...f,scores:v};else{const C=w===g?f.streak:w===mf(g)?f.streak+1:1;f={lastKey:g,streak:C,bestStreak:Math.max(f.bestStreak,C),scores:v}}}const x={...n,built:[...n.built],rounds:n.rounds+1,longestRound:Math.max(n.longestRound,r),bestChain:Math.max(n.bestChain,a),mostFestivals:Math.max(n.mostFestivals,o),bestClassic:i==="classic"?Math.max(n.bestClassic,s):n.bestClassic,bestDaily:i==="daily"?Math.max(n.bestDaily,s):n.bestDaily,recent:h,daily:{...f,scores:{...f.scores}}},p=[],m=n.rounds>0,S=Object.keys(n.daily.scores).length>0||n.bestDaily>0,T=i==="daily"&&S&&s>n.bestDaily;T&&p.push(`Best daily yet: ${D0(s)}`),m&&a>=2&&a>n.bestChain&&p.push(`Best chain ever: ×${a}`),m&&o>n.mostFestivals&&p.push(`New record: ${I0(o,"festival")} in a round`),m&&r>n.longestRound&&p.push(`New record: longest round (${r} turns)`),g&&f.streak>=2&&f.streak>n.daily.streak&&p.push(`Daily streak: ${f.streak} days`);const M=h.filter(v=>v.mode===i),E=M.slice(1),b=1+E.filter(v=>v.score>s).length,R=E.some(v=>v.score<s);if(M.length>=3&&b<=ph.length&&R&&!T){const v=i==="daily"?"dailies":M.length<h.length?"classic rounds":"rounds";p.push(`${ph[b-1]} of your last ${M.length} ${v}`)}return{journal:x,highlights:p}}function F0(n,e,t=It){const i=Vo(n,e,t),s=i.state.board;let r=i.points*2+Di(i.state).length*6;const a=s[e];if(a!==Mt){ya(s,e,a).length===2&&(r+=18+a*6);const l=Ma(s);for(const c of ou(e,l))s[c]!==Mt&&s[c]!==a&&(r-=3);a===kt&&ff(e,l)&&(r+=10)}return r}const O0="littleNook.best",B0="littleNookBest",mh="littleNook.sound",gh="littleNook.seenHelp",k0="littleNook.game",vh="littleNook.view",z0="littleNook.roundStartBest",_h="littleNook.music",xh="littleNook.motion",Mh="littleNook.journal",dl="littleNook.daily",yh="littleNook.haptics",Sh="littleNook.coachDone",bh="littleNook.size";function yr(n,e=8){return e===8?n:`${n}.${e}`}const pu="littleNook.fire",co=(n=8,e=!1)=>yr(e?`${pu}.game`:k0,n),wh=(n,e)=>yr(e?`${pu}.best`:O0,n),Eh=(n,e)=>yr(e?`${pu}.roundStartBest`:z0,n),Th="littleNook.rules";function G0(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}class V0{constructor(e=G0()){this.store=e,this.memoBest=new Map,this.memoJournal=null}get(e){try{return this.store?.getItem(e)??null}catch{return null}}set(e,t){try{this.store?.setItem(e,t)}catch{}}getBest(e=8,t=!1){const i=this.get(wh(e,t))??(e===8&&!t?this.get(B0):null)??0,s=Number(i),r=Number.isFinite(s)&&s>0?Math.floor(s):0,a=`${t?"f":"c"}${e}`,o=Math.max(this.memoBest.get(a)??0,r);return this.memoBest.set(a,o),o}submitScore(e,t=8,i=!1){const s=Math.floor(e);return s>this.getBest(t,i)?(this.memoBest.set(`${i?"f":"c"}${t}`,s),this.set(wh(t,i),String(s)),!0):!1}getFire(){return this.get(Th)!=="classic"}setFire(e){this.set(Th,e?"fire":"classic")}getSize(e){const t=Number(this.get(bh));return e(t)?t:8}setSize(e){this.set(bh,String(e))}getSound(){return this.get(mh)!=="off"}setSound(e){this.set(mh,e?"on":"off")}hasSeenHelp(){return this.get(gh)==="1"}markHelpSeen(){this.set(gh,"1")}getRoundStartBest(e=8,t=!1){const i=this.get(Eh(e,t)),s=Number(i);return i!==null&&i!==""&&Number.isFinite(s)&&s>=0?s:null}setRoundStartBest(e,t=8,i=!1){this.set(Eh(t,i),String(e))}getMusic(){return this.get(_h)!=="off"}setMusic(e){this.set(_h,e?"on":"off")}getMotion(){const e=this.get(xh);return e==="on"||e==="off"?e:"system"}setMotion(e){this.set(xh,e)}getView(){return this.get(vh)}setView(e){this.set(vh,e)}saveGame(e,t=8,i=!1){this.set(co(t,i),JSON.stringify(e))}clearGame(e=8,t=!1){this.set(co(e,t),"")}loadGame(e,t=8,i=!1){return this.load(co(t,i),e)}saveDaily(e){this.set(dl,JSON.stringify(e))}clearDaily(){this.set(dl,"")}loadDaily(e){return this.load(dl,e)}getJournal(){return this.memoJournal??this.load(Mh,Rf)??R0()}saveJournal(e){this.memoJournal=e,this.set(Mh,JSON.stringify(e))}adoptJournal(e){this.memoJournal=e}getHaptics(){return this.get(yh)!=="off"}setHaptics(e){this.set(yh,e?"on":"off")}getCoachDone(){return this.get(Sh)==="1"}setCoachDone(){this.set(Sh,"1")}load(e,t){const i=this.get(e);if(!i)return null;try{const s=JSON.parse(i);return t(s)?s:null}catch{return null}}}const mu="186",H0=0,Ah=1,W0=2,Jr=1,X0=2,Yr=3,Ps=0,In=1,yi=2,Hi=0,Zr=1,is=2,Ch=3,Rh=4,$0=5,cr=100,Y0=101,q0=102,K0=103,J0=104,Z0=200,Q0=201,j0=202,em=203,Df=204,If=205,tm=206,nm=207,im=208,sm=209,rm=210,am=211,om=212,lm=213,cm=214,ac=0,oc=1,lc=2,oa=3,cc=4,uc=5,hc=6,dc=7,Nf=0,um=1,hm=2,wi=0,Uf=1,Ff=2,Of=3,Bf=4,kf=5,zf=6,gu=7,Gf=300,Ls=301,Sr=302,fl=303,pl=304,$o=306,fc=1e3,Vi=1001,pc=1002,fn=1003,dm=1004,Ra=1005,Sn=1006,ml=1007,xs=1008,zn=1009,Vf=1010,Hf=1011,la=1012,vu=1013,Ai=1014,ai=1015,Ci=1016,_u=1017,xu=1018,ca=1020,Wf=35902,Xf=35899,$f=1021,Yf=1022,oi=1023,Yi=1026,Ms=1027,Mu=1028,yu=1029,Ds=1030,Su=1031,bu=1033,uo=33776,ho=33777,fo=33778,po=33779,mc=35840,gc=35841,vc=35842,_c=35843,xc=36196,Mc=37492,yc=37496,Sc=37488,bc=37489,So=37490,wc=37491,Ec=37808,Tc=37809,Ac=37810,Cc=37811,Rc=37812,Pc=37813,Lc=37814,Dc=37815,Ic=37816,Nc=37817,Uc=37818,Fc=37819,Oc=37820,Bc=37821,kc=36492,zc=36494,Gc=36495,Vc=36283,Hc=36284,bo=36285,Wc=36286,fm=3200,Xc=0,pm=1,ns="",Mn="srgb",wo="srgb-linear",Eo="linear",St="srgb",gl=7680,mm=519,gm=512,vm=513,_m=514,wu=515,xm=516,Mm=517,Eu=518,ym=519,qf=35044,Ph="300 es",Si=2e3,ua=2001;function Sm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bm(){const n=To("canvas");return n.style.display="block",n}const Lh={};function Ao(...n){const e="THREE."+n.shift();console.log(e,...n)}function Kf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ke(...n){n=Kf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ht(...n){n=Kf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fr(...n){const e=n.join(" ");e in Lh||(Lh[e]=!0,Ke(...n))}function wm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Em={[ac]:oc,[lc]:hc,[cc]:dc,[oa]:uc,[oc]:ac,[hc]:lc,[dc]:cc,[uc]:oa};class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const Qr=Math.PI/180,ha=180/Math.PI;function Ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function Tu(n,e){return(n%e+e)%e}function Tm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Am(n,e,t){return n!==e?(t-n)/(e-n):0}function jr(n,e,t){return(1-t)*n+t*e}function Cm(n,e,t,i){return jr(n,e,1-Math.exp(-t*i))}function Rm(n,e=1){return e-Math.abs(Tu(n,e*2)-e)}function Pm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Im(n,e){return n+Math.random()*(e-n)}function Nm(n){return n*(.5-Math.random())}function Um(n){n!==void 0&&(Dh=n);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fm(n){return n*Qr}function Om(n){return n*ha}function Bm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function km(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gm(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Co={DEG2RAD:Qr,RAD2DEG:ha,generateUUID:Ei,clamp:st,euclideanModulo:Tu,mapLinear:Tm,inverseLerp:Am,lerp:jr,damp:Cm,pingpong:Rm,smoothstep:Pm,smootherstep:Lm,randInt:Dm,randFloat:Im,randFloatSpread:Nm,seededRandom:Um,degToRad:Fm,radToDeg:Om,isPowerOfTwo:Bm,ceilPowerOfTwo:km,floorPowerOfTwo:zm,setQuaternionFromProperEuler:Gm,normalize:bt,denormalize:si},qu=class qu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qu.prototype.isVector2=!0;let de=qu;class jn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*x;p<0&&(h=-h,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),T=Math.sin(S);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+x*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+x*o;const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ku=class Ku{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ku.prototype.isVector3=!0;let P=Ku;const vl=new P,Ih=new jn,Ju=class Ju{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],S=s[1],T=s[4],M=s[7],E=s[2],b=s[5],R=s[8];return r[0]=a*x+o*S+l*E,r[3]=a*p+o*T+l*b,r[6]=a*m+o*M+l*R,r[1]=c*x+u*S+d*E,r[4]=c*p+u*T+d*b,r[7]=c*m+u*M+d*R,r[2]=h*x+f*S+g*E,r[5]=h*p+f*T+g*b,r[8]=h*m+f*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_l.makeScale(e,t)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ju.prototype.isMatrix3=!0;let je=Ju;const _l=new je,Nh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){const n={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ns?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wo]:{primaries:e,whitePoint:i,transfer:Eo,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}const dt=Vm();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class Hm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=To("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wm=0;class Au{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xl(s[a].image)):r.push(xl(s[a]))}else r=xl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Xm=0;const Ml=new P;class bn extends Fs{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=Vi,s=Vi,r=Sn,a=xs,o=oi,l=zn,c=bn.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ei(),this.name="",this.source=new Au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Gf;bn.DEFAULT_ANISOTROPY=1;const Zu=class Zu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(f+1)/2,E=(m+1)/2,b=(u+h)/4,R=(d+x)/4,v=(g+p)/4;return T>M&&T>E?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=b/i,r=R/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zu.prototype.isVector4=!0;let Ft=Zu;class $m extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new bn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Au(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends $m{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jf extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ym extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const zo=class zo{constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,Km)}lookAt(e,t,i){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Zi.crossVectors(i,Un),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Zi.crossVectors(i,Un)),Zi.normalize(),Pa.crossVectors(Un,Zi),s[0]=Zi.x,s[4]=Pa.x,s[8]=Un.x,s[1]=Zi.y,s[5]=Pa.y,s[9]=Un.y,s[2]=Zi.z,s[6]=Pa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],S=i[3],T=i[7],M=i[11],E=i[15],b=s[0],R=s[4],v=s[8],w=s[12],C=s[1],D=s[5],B=s[9],H=s[13],I=s[2],z=s[6],q=s[10],$=s[14],oe=s[3],K=s[7],ne=s[11],ae=s[15];return r[0]=a*b+o*C+l*I+c*oe,r[4]=a*R+o*D+l*z+c*K,r[8]=a*v+o*B+l*q+c*ne,r[12]=a*w+o*H+l*$+c*ae,r[1]=u*b+d*C+h*I+f*oe,r[5]=u*R+d*D+h*z+f*K,r[9]=u*v+d*B+h*q+f*ne,r[13]=u*w+d*H+h*$+f*ae,r[2]=g*b+x*C+p*I+m*oe,r[6]=g*R+x*D+p*z+m*K,r[10]=g*v+x*B+p*q+m*ne,r[14]=g*w+x*H+p*$+m*ae,r[3]=S*b+T*C+M*I+E*oe,r[7]=S*R+T*D+M*z+E*K,r[11]=S*v+T*B+M*q+E*ne,r[15]=S*w+T*H+M*$+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],S=l*f-c*h,T=o*f-c*d,M=o*h-l*d,E=a*f-c*u,b=a*h-l*u,R=a*d-o*u;return t*(x*S-p*T+m*M)-i*(g*S-p*E+m*b)+s*(g*T-x*E+m*R)-r*(g*M-x*b+p*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],S=t*o-i*a,T=t*l-s*a,M=t*c-r*a,E=i*l-s*o,b=i*c-r*o,R=s*c-r*l,v=u*x-d*g,w=u*p-h*g,C=u*m-f*g,D=d*p-h*x,B=d*m-f*x,H=h*m-f*p,I=S*H-T*B+M*D+E*C-b*w+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=(o*H-l*B+c*D)*z,e[1]=(s*B-i*H-r*D)*z,e[2]=(x*R-p*b+m*E)*z,e[3]=(h*b-d*R-f*E)*z,e[4]=(l*C-a*H-c*w)*z,e[5]=(t*H-s*C+r*w)*z,e[6]=(p*M-g*R-m*T)*z,e[7]=(u*R-h*M+f*T)*z,e[8]=(a*B-o*C+c*v)*z,e[9]=(i*C-t*B-r*v)*z,e[10]=(g*b-x*M+m*S)*z,e[11]=(d*M-u*b-f*S)*z,e[12]=(o*w-a*D-l*v)*z,e[13]=(t*D-i*w+s*v)*z,e[14]=(x*T-g*E-p*S)*z,e[15]=(u*E-d*T+h*S)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,x=a*u,p=a*d,m=o*d,S=l*c,T=l*u,M=l*d,E=i.x,b=i.y,R=i.z;return s[0]=(1-(x+m))*E,s[1]=(f+M)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(h+m))*b,s[6]=(p+S)*b,s[7]=0,s[8]=(g+T)*R,s[9]=(p-S)*R,s[10]=(1-(h+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ws.set(s[0],s[1],s[2]).length();const o=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ti.copy(this);const c=1/a,u=1/o,d=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Si,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Si)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ua)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Si,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Si)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ua)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};zo.prototype.isMatrix4=!0;let ut=zo;const Ws=new P,ti=new ut,qm=new P(0,0,0),Km=new P(1,1,1),Zi=new P,Pa=new P,Un=new P,Fh=new ut,Oh=new jn;class fi{constructor(e=0,t=0,i=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jm=0;const Bh=new P,Xs=new jn,Ui=new ut,La=new P,Ur=new P,Zm=new P,Qm=new jn,kh=new P(1,0,0),zh=new P(0,1,0),Gh=new P(0,0,1),Vh={type:"added"},jm={type:"removed"},$s={type:"childadded",child:null},yl={type:"childremoved",child:null};class ln extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new P,t=new fi,i=new jn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new je}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(zh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return Bh.copy(e).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(zh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?La.copy(e):La.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ur,La,this.up):Ui.lookAt(La,Ur,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vh),$s.child=e,this.dispatchEvent($s),$s.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vh),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ln.DEFAULT_UP=new P(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bi extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Tu(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=bl(a,r,e+1/3),this.g=bl(a,r,e),this.b=bl(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return dt.workingToColorSpace(xn.copy(this),e),Math.round(st(xn.r*255,0,255))*65536+Math.round(st(xn.g*255,0,255))*256+Math.round(st(xn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(xn.copy(this),t);const i=xn.r,s=xn.g,r=xn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Mn){dt.workingToColorSpace(xn.copy(this),e);const t=xn.r,i=xn.g,s=xn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Da);const i=jr(Qi.h,Da.h,t),s=jr(Qi.s,Da.s,t),r=jr(Qi.l,Da.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new We;We.NAMES=Zf;class Hh extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ni=new P,Fi=new P,wl=new P,Oi=new P,Ys=new P,qs=new P,Wh=new P,El=new P,Tl=new P,Al=new P,Cl=new Ft,Rl=new Ft,Pl=new Ft;class Yn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),Fi.subVectors(i,t),wl.subVectors(e,t);const a=ni.dot(ni),o=ni.dot(Fi),l=ni.dot(wl),c=Fi.dot(Fi),u=Fi.dot(wl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Cl,r.x),a.addScaledVector(Rl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),Fi.subVectors(e,t),ni.cross(Fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ni.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ys.subVectors(s,i),qs.subVectors(r,i),El.subVectors(e,i);const l=Ys.dot(El),c=qs.dot(El);if(l<=0&&c<=0)return t.copy(i);Tl.subVectors(e,s);const u=Ys.dot(Tl),d=qs.dot(Tl);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ys,a);Al.subVectors(e,r);const f=Ys.dot(Al),g=qs.dot(Al);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(qs,o);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Wh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Wh,o);const m=1/(p+x+h);return a=x*m,o=h*m,t.copy(i).addScaledVector(Ys,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ls{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Na.subVectors(this.max,Fr),Ks.subVectors(e.a,Fr),Js.subVectors(e.b,Fr),Zs.subVectors(e.c,Fr),ji.subVectors(Js,Ks),es.subVectors(Zs,Js),hs.subVectors(Ks,Zs);let t=[0,-ji.z,ji.y,0,-es.z,es.y,0,-hs.z,hs.y,ji.z,0,-ji.x,es.z,0,-es.x,hs.z,0,-hs.x,-ji.y,ji.x,0,-es.y,es.x,0,-hs.y,hs.x,0];return!Ll(t,Ks,Js,Zs,Na)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Ks,Js,Zs,Na))?!1:(Ua.crossVectors(ji,es),t=[Ua.x,Ua.y,Ua.z],Ll(t,Ks,Js,Zs,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new P,new P,new P,new P,new P,new P,new P,new P],ii=new P,Ia=new ls,Ks=new P,Js=new P,Zs=new P,ji=new P,es=new P,hs=new P,Fr=new P,Na=new P,Ua=new P,ds=new P;function Ll(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ds.fromArray(n,r);const o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=i.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const $t=new P,Fa=new de;let tg=0;class Cn extends Fs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qf,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qf extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jf extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ng=new ls,Or=new P,Dl=new P;class ba{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ng.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Dl)),this.expandByPoint(Or.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ig=0;const Xn=new ut,Il=new ln,Qs=new P,Fn=new ls,Br=new ls,sn=new P;class cn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sm(e)?jf:Qf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Fn.min,Br.min),Fn.expandByPoint(sn),sn.addVectors(Fn.max,Br.max),Fn.expandByPoint(sn)):(Fn.expandByPoint(Br.min),Fn.expandByPoint(Br.max))}Fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(e,c),sn.add(Qs)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new P,l[v]=new P;const c=new P,u=new P,d=new P,h=new de,f=new de,g=new de,x=new P,p=new P;function m(v,w,C){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,C),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[v].add(x),o[w].add(x),o[C].add(x),l[v].add(p),l[w].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const C=S[v],D=C.start,B=C.count;for(let H=D,I=D+B;H<I;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new P,M=new P,E=new P,b=new P;function R(v){E.fromBufferAttribute(s,v),b.copy(E);const w=o[v];T.copy(w),T.sub(E.multiplyScalar(E.dot(w))).normalize(),M.crossVectors(b,w);const D=M.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,w=S.length;v<w;++v){const C=S[v],D=C.start,B=C.count;for(let H=D,I=D+B;H<I;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new Cn(h,u,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qf,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const En=new P;class Ro{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Nl=new P,rg=new P,ag=new je;class zi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Nl.subVectors(i,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ag.getNormalMatrix(e),s=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let og=0;class Os extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Zr,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=If,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gl,this.stencilZFail=gl,this.stencilZPass=gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ep extends Os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let js;const kr=new P,er=new P,tr=new P,nr=new de,zr=new de,tp=new ut,Oa=new P,Gr=new P,Ba=new P,Xh=new de,Ul=new de,$h=new de;class lg extends ln{constructor(e=new ep){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new cn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sg(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Ro(i,3,0,!1)),js.setAttribute("uv",new Ro(i,2,3,!1))}this.geometry=js,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ka(Oa.set(-.5,-.5,0),tr,a,er,s,r),ka(Gr.set(.5,-.5,0),tr,a,er,s,r),ka(Ba.set(.5,.5,0),tr,a,er,s,r),Xh.set(0,0),Ul.set(1,0),$h.set(1,1);let o=e.ray.intersectTriangle(Oa,Gr,Ba,!1,kr);if(o===null&&(ka(Gr.set(-.5,.5,0),tr,a,er,s,r),Ul.set(0,1),o=e.ray.intersectTriangle(Oa,Ba,Gr,!1,kr),o===null))return;const l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:Yn.getInterpolation(kr,Oa,Gr,Ba,Xh,Ul,$h,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ka(n,e,t,i,s,r){nr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(zr.x=r*nr.x-s*nr.y,zr.y=s*nr.x+r*nr.y):zr.copy(nr),n.copy(e),n.x+=zr.x,n.y+=zr.y,n.applyMatrix4(tp)}const ki=new P,Fl=new P,za=new P,Ga=new P;class np{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fl.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Ga.copy(this.origin).sub(Fl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=Ga.dot(this.direction),l=-Ga.dot(za),c=Ga.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fl).addScaledVector(za,h),f}intersectSphere(e,t){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=i.x-a.x,S=i.y-a.y,T=i.z-a.z,M=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let R,v,w,C,D,B,H,I,z,q,$,oe;if(M>=E&&M>=b?(w=l,B=d,z=g,oe=m,l>=0?(R=c,v=u,C=h,D=f,H=x,I=p,q=S,$=T):(R=u,v=c,C=f,D=h,H=p,I=x,q=T,$=S)):E>=b?(w=c,B=h,z=x,oe=S,c>=0?(R=u,v=l,C=f,D=d,H=p,I=g,q=T,$=m):(R=l,v=u,C=d,D=f,H=g,I=p,q=m,$=T)):(w=u,B=f,z=p,oe=T,u>=0?(R=l,v=c,C=d,D=h,H=g,I=x,q=m,$=S):(R=c,v=l,C=h,D=d,H=x,I=g,q=S,$=m)),w===0)return null;const K=R/w,ne=v/w,ae=1/w,Fe=C-K*B,Le=D-ne*B,gt=H-K*z,rt=I-ne*z,ft=q-K*oe,Q=$-ne*oe,se=ft*rt-Q*gt,be=Fe*Q-Le*ft,Xe=gt*Le-rt*Fe;if(s){if(se<0||be<0||Xe<0)return null}else if((se<0||be<0||Xe<0)&&(se>0||be>0||Xe>0))return null;const Ae=se+be+Xe;if(Ae===0)return null;const $e=ae*(se*B+be*z+Xe*oe);return(Ae>0?$e<0:$e>0)?null:this.at($e/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gn extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yh=new ut,fs=new np,Va=new ba,qh=new P,Ha=new P,Wa=new P,Xa=new P,Ol=new P,$a=new P,Kh=new P,Ya=new P;class Rt extends ln{constructor(e=new cn,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Ol.fromBufferAttribute(d,e),a?$a.addScaledVector(Ol,u):$a.addScaledVector(Ol.sub(t),u))}t.add($a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Va.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Va,qh)===null||fs.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Yh.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Yh),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const p=h[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=S,E=T;M<E;M+=3){const b=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);s=qa(this,m,e,i,c,u,d,b,R,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const S=o.getX(p),T=o.getX(p+1),M=o.getX(p+2);s=qa(this,a,e,i,c,u,d,S,T,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const p=h[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=S,E=T;M<E;M+=3){const b=M,R=M+1,v=M+2;s=qa(this,m,e,i,c,u,d,b,R,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const S=p,T=p+1,M=p+2;s=qa(this,a,e,i,c,u,d,S,T,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function cg(n,e,t,i,s,r,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ps,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function qa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ha),n.getVertexPosition(l,Wa),n.getVertexPosition(c,Xa);const u=cg(n,e,t,i,Ha,Wa,Xa,Kh);if(u){const d=new P;Yn.getBarycoord(Kh,Ha,Wa,Xa,d),s&&(u.uv=Yn.getInterpolatedAttribute(s,o,l,c,d,new de)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,l,c,d,new de)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Yn.getNormal(Ha,Wa,Xa,h.normal),u.face=h,u.barycoord=d}return u}class ip extends bn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=fn,u=fn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jh extends Cn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ir=new ut,Zh=new ut,Ka=[],Qh=new ls,ug=new ut,Vr=new Rt,Hr=new ba;class jh extends Rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ug)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ls),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Qh.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Qh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ba),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Hr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),Zh.multiplyMatrices(i,ir),Vr.matrixWorld=Zh,Vr.raycast(e,Ka);for(let a=0,o=Ka.length;a<o;a++){const l=Ka[a];l.instanceId=r,l.object=this,t.push(l)}Ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ip(new Float32Array(s*this.count),s,this.count,Mu,ai));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ps=new ba,hg=new de(.5,.5),Ja=new P;class Ru{constructor(e=new zi,t=new zi,i=new zi,s=new zi,r=new zi,a=new zi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],S=r[12],T=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,m-g,E-S).normalize(),s[1].setComponents(c+a,f+u,m+g,E+S).normalize(),s[2].setComponents(c+o,f+d,m+x,E+T).normalize(),s[3].setComponents(c-o,f-d,m-x,E-T).normalize(),i)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,f-h,m-p,E-M).normalize();else if(s[4].setComponents(c-l,f-h,m-p,E-M).normalize(),t===Si)s[5].setComponents(c+l,f+h,m+p,E+M).normalize();else if(t===ua)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=hg.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ja.x=s.normal.x>0?e.max.x:e.min.x,Ja.y=s.normal.y>0?e.max.y:e.min.y,Ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sp extends bn{constructor(e=[],t=Ls,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yo extends bn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class da extends bn{constructor(e,t,i=Ai,s,r,a,o=fn,l=fn,c,u=Yi,d=1){if(u!==Yi&&u!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Au(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class dg extends da{constructor(e,t=Ai,i=Ls,s,r,a=fn,o=fn,l,c=Yi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rp extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ii extends cn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function g(x,p,m,S,T,M,E,b,R,v,w){const C=M/R,D=E/v,B=M/2,H=E/2,I=b/2,z=R+1,q=v+1;let $=0,oe=0;const K=new P;for(let ne=0;ne<q;ne++){const ae=ne*D-H;for(let Fe=0;Fe<z;Fe++){const Le=Fe*C-B;K[x]=Le*S,K[p]=ae*T,K[m]=I,c.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[m]=b>0?1:-1,u.push(K.x,K.y,K.z),d.push(Fe/R),d.push(1-ne/v),$+=1}}for(let ne=0;ne<v;ne++)for(let ae=0;ae<R;ae++){const Fe=h+ae+z*ne,Le=h+ae+z*(ne+1),gt=h+(ae+1)+z*(ne+1),rt=h+(ae+1)+z*ne;l.push(Fe,Le,rt),l.push(Le,gt,rt),oe+=6}o.addGroup(f,oe,w),f+=oe,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ri extends cn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const x=[],p=i/2;let m=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2));function S(){const M=new P,E=new P;let b=0;const R=(t-e)/i;for(let v=0;v<=r;v++){const w=[],C=v/r,D=C*(t-e)+e;for(let B=0;B<=s;B++){const H=B/s,I=H*l+o,z=Math.sin(I),q=Math.cos(I);E.x=D*z,E.y=-C*i+p,E.z=D*q,d.push(E.x,E.y,E.z),M.set(z,R,q).normalize(),h.push(M.x,M.y,M.z),f.push(H,1-C),w.push(g++)}x.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const C=x[w][v],D=x[w+1][v],B=x[w+1][v+1],H=x[w][v+1];(e>0||w!==0)&&(u.push(C,D,H),b+=3),(t>0||w!==r-1)&&(u.push(D,B,H),b+=3)}c.addGroup(m,b,0),m+=b}function T(M){const E=g,b=new de,R=new P;let v=0;const w=M===!0?e:t,C=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*C,0),h.push(0,C,0),f.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const I=B/s*l+o,z=Math.cos(I),q=Math.sin(I);R.x=w*q,R.y=p*C,R.z=w*z,d.push(R.x,R.y,R.z),h.push(0,C,0),b.x=z*.5+.5,b.y=q*.5*C+.5,f.push(b.x,b.y),g++}for(let B=0;B<s;B++){const H=E+B,I=D+B;M===!0?u.push(I,I+1,H):u.push(I+1,I,H),v+=3}c.addGroup(m,v,M===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pu extends Ri{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Pu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends cn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const T=new P,M=new P,E=new P;for(let b=0;b<t.length;b+=3)f(t[b+0],T),f(t[b+1],M),f(t[b+2],E),l(T,M,E,S)}function l(S,T,M,E){const b=E+1,R=[];for(let v=0;v<=b;v++){R[v]=[];const w=S.clone().lerp(M,v/b),C=T.clone().lerp(M,v/b),D=b-v;for(let B=0;B<=D;B++)B===0&&v===b?R[v][B]=w:R[v][B]=w.clone().lerp(C,B/D)}for(let v=0;v<b;v++)for(let w=0;w<2*(b-v)-1;w++){const C=Math.floor(w/2);w%2===0?(h(R[v][C+1]),h(R[v+1][C]),h(R[v][C])):(h(R[v][C+1]),h(R[v+1][C+1]),h(R[v+1][C]))}}function c(S){const T=new P;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(S),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function u(){const S=new P;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];const M=p(S)/2/Math.PI+.5,E=m(S)/Math.PI+.5;a.push(M,1-E)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const T=a[S+0],M=a[S+2],E=a[S+4],b=Math.max(T,M,E),R=Math.min(T,M,E);b>.9&&R<.1&&(T<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,T){const M=S*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function g(){const S=new P,T=new P,M=new P,E=new P,b=new de,R=new de,v=new de;for(let w=0,C=0;w<r.length;w+=9,C+=6){S.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),b.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),E.copy(S).add(T).add(M).divideScalar(3);const D=p(E);x(b,C+0,S,D),x(R,C+2,T,D),x(v,C+4,M,D)}}function x(S,T,M,E){E<0&&S.x===1&&(a[T]=S.x-1),M.x===0&&M.z===0&&(a[T]=E/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.vertices,e.indices,e.radius,e.detail)}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new de:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,s=[],r=[],a=[],o=new P,l=new ut;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lu extends Ni{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fg extends Lu{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Du(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const ed=new P,td=new P,Bl=new Du,kl=new Du,zl=new Du;class pg extends Ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(td.subVectors(s[0],s[1]).add(s[0]),c=td);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ed.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ed),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Bl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,p),kl.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,p),zl.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),kl.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),zl.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Bl.calc(l),kl.calc(l),zl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nd(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function mg(n,e){const t=1-n;return t*t*e}function gg(n,e){return 2*(1-n)*n*e}function vg(n,e){return n*n*e}function ea(n,e,t,i){return mg(n,e)+gg(n,t)+vg(n,i)}function _g(n,e){const t=1-n;return t*t*t*e}function xg(n,e){const t=1-n;return 3*t*t*n*e}function Mg(n,e){return 3*(1-n)*n*n*e}function yg(n,e){return n*n*n*e}function ta(n,e,t,i,s){return _g(n,e)+xg(n,t)+Mg(n,i)+yg(n,s)}class ap extends Ni{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ta(e,s.x,r.x,a.x,o.x),ta(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sg extends Ni{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ta(e,s.x,r.x,a.x,o.x),ta(e,s.y,r.y,a.y,o.y),ta(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class op extends Ni{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bg extends Ni{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lp extends Ni{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ea(e,s.x,r.x,a.x),ea(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wg extends Ni{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ea(e,s.x,r.x,a.x),ea(e,s.y,r.y,a.y),ea(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cp extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(nd(o,l.x,c.x,u.x,d.x),nd(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var $c=Object.freeze({__proto__:null,ArcCurve:fg,CatmullRomCurve3:pg,CubicBezierCurve:ap,CubicBezierCurve3:Sg,EllipseCurve:Lu,LineCurve:op,LineCurve3:bg,QuadraticBezierCurve:lp,QuadraticBezierCurve3:wg,SplineCurve:cp});class Eg extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $c[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new $c[s.type]().fromJSON(s))}return this}}class id extends Eg{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new op(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new lp(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new ap(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new cp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new Lu(e,t,i,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Rr extends id{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new id().fromJSON(s))}return this}}function Tg(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=up(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Lg(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<s;h+=t){const f=n[h],g=n[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return fa(r,a,t,o,l,c,0),a}function up(n,e,t,i,s){let r;if(s===Vg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=sd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=sd(a/i|0,n[a],n[a+1],r);return r&&br(r,r.next)&&(ma(r),r=r.next),r}function Is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(br(t,t.next)||Ot(t.prev,t,t.next)===0)){if(ma(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Fg(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Cg(n,i,s,r):Ag(n)){e.push(l.i,n.i,c.i),ma(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Rg(Is(n),e),fa(n,e,t,i,s,r,2)):a===2&&Pg(n,e,t,i,s,r):fa(Is(n),e,t,i,s,r,1);break}}}function Ag(n){const e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&qr(s,o,r,l,a,c,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cg(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Ot(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),x=Math.max(o,l,c),p=Math.max(u,d,h),m=Yc(f,g,e,t,i),S=Yc(x,p,e,t,i);let T=n.prevZ,M=n.nextZ;for(;T&&T.z>=m&&M&&M.z<=S;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&qr(o,u,l,d,c,h,T.x,T.y)&&Ot(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&qr(o,u,l,d,c,h,M.x,M.y)&&Ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&qr(o,u,l,d,c,h,T.x,T.y)&&Ot(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&qr(o,u,l,d,c,h,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Rg(n,e){let t=n;do{const i=t.prev,s=t.next.next;!br(i,s)&&dp(i,t,t.next,s)&&pa(i,s)&&pa(s,i)&&(e.push(i.i,t.i,s.i),ma(t),ma(t.next),t=n=s),t=t.next}while(t!==n);return Is(t)}function Pg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kg(a,o)){let l=fp(a,o);a=Is(a,a.next),l=Is(l,l.next),fa(a,e,t,i,s,r,0),fa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Lg(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=up(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Bg(c))}s.sort(Dg);for(let r=0;r<s.length;r++)t=Ig(s[r],t);return t}function Dg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ig(n,e){const t=Ng(n,e);if(!t)return e;const i=fp(t,n);return Is(i,i.next),Is(t,t.next)}function Ng(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(br(n,t))return t;do{if(br(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&hp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);pa(t,n)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Ug(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Ug(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function Fg(n,e,t,i){let s=n;do s.z===0&&(s.z=Yc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Og(s)}function Og(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Yc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Bg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function hp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function qr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&hp(n,e,t,i,s,r,a,o)}function kg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!zg(n,e)&&(pa(n,e)&&pa(e,n)&&Gg(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||br(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function br(n,e){return n.x===e.x&&n.y===e.y}function dp(n,e,t,i){const s=Qa(Ot(n,e,t)),r=Qa(Ot(n,e,i)),a=Qa(Ot(t,i,n)),o=Qa(Ot(t,i,e));return!!(s!==r&&a!==o||s===0&&Za(n,t,e)||r===0&&Za(n,i,e)||a===0&&Za(t,n,i)||o===0&&Za(t,e,i))}function Za(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qa(n){return n>0?1:n<0?-1:0}function zg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function pa(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function Gg(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function fp(n,e){const t=qc(n.i,n.x,n.y),i=qc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function sd(n,e,t,i){const s=qc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ma(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Hg{static triangulate(e,t,i=2){return Tg(e,t,i)}}class ur{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ur.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];rd(e),ad(i,e);let a=e.length;t.forEach(rd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ad(i,t[l]);const o=Hg.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function rd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ad(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Bs extends cn{constructor(e=new Rr([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Wg;let T,M=!1,E,b,R,v;if(m){T=m.getSpacedPoints(u),M=!0,h=!1;const re=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(u,re),b=new P,R=new P,v=new P}h||(p=0,f=0,g=0,x=0);const w=o.extractPoints(c);let C=w.shape;const D=w.holes;if(!ur.isClockWise(C)){C=C.reverse();for(let re=0,ce=D.length;re<ce;re++){const ue=D[re];ur.isClockWise(ue)&&(D[re]=ue.reverse())}}function H(re){const ue=10000000000000001e-36;let he=re[0];for(let me=1;me<=re.length;me++){const Ve=me%re.length,ze=re[Ve],Ye=ze.x-he.x,Qe=ze.y-he.y,L=Ye*Ye+Qe*Qe,vt=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(he.x),Math.abs(he.y)),at=ue*vt*vt;if(L<=at){re.splice(Ve,1),me--;continue}he=ze}}H(C),D.forEach(H);const I=D.length,z=C;for(let re=0;re<I;re++){const ce=D[re];C=C.concat(ce)}function q(re,ce,ue){return ce||ht("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ce,ue)}const $=C.length;function oe(re,ce,ue){let he,me,Ve;const ze=re.x-ce.x,Ye=re.y-ce.y,Qe=ue.x-re.x,L=ue.y-re.y,vt=ze*ze+Ye*Ye,at=ze*L-Ye*Qe;if(Math.abs(at)>Number.EPSILON){const A=Math.sqrt(vt),_=Math.sqrt(Qe*Qe+L*L),k=ce.x-Ye/A,X=ce.y+ze/A,J=ue.x-L/_,fe=ue.y+Qe/_,pe=((J-k)*L-(fe-X)*Qe)/(ze*L-Ye*Qe);he=k+ze*pe-re.x,me=X+Ye*pe-re.y;const Z=he*he+me*me;if(Z<=2)return new de(he,me);Ve=Math.sqrt(Z/2)}else{let A=!1;ze>Number.EPSILON?Qe>Number.EPSILON&&(A=!0):ze<-Number.EPSILON?Qe<-Number.EPSILON&&(A=!0):Math.sign(Ye)===Math.sign(L)&&(A=!0),A?(he=-Ye,me=ze,Ve=Math.sqrt(vt)):(he=ze,me=Ye,Ve=Math.sqrt(vt/2))}return new de(he/Ve,me/Ve)}const K=[];for(let re=0,ce=z.length,ue=ce-1,he=re+1;re<ce;re++,ue++,he++)ue===ce&&(ue=0),he===ce&&(he=0),K[re]=oe(z[re],z[ue],z[he]);const ne=[];let ae,Fe=K.concat();for(let re=0,ce=I;re<ce;re++){const ue=D[re];ae=[];for(let he=0,me=ue.length,Ve=me-1,ze=he+1;he<me;he++,Ve++,ze++)Ve===me&&(Ve=0),ze===me&&(ze=0),ae[he]=oe(ue[he],ue[Ve],ue[ze]);ne.push(ae),Fe=Fe.concat(ae)}let Le;if(p===0)Le=ur.triangulateShape(z,D);else{const re=[],ce=[];for(let ue=0;ue<p;ue++){const he=ue/p,me=f*Math.cos(he*Math.PI/2),Ve=g*Math.sin(he*Math.PI/2)+x;for(let ze=0,Ye=z.length;ze<Ye;ze++){const Qe=q(z[ze],K[ze],Ve);be(Qe.x,Qe.y,-me),he===0&&re.push(Qe)}for(let ze=0,Ye=I;ze<Ye;ze++){const Qe=D[ze];ae=ne[ze];const L=[];for(let vt=0,at=Qe.length;vt<at;vt++){const A=q(Qe[vt],ae[vt],Ve);be(A.x,A.y,-me),he===0&&L.push(A)}he===0&&ce.push(L)}}Le=ur.triangulateShape(re,ce)}const gt=Le.length,rt=g+x;for(let re=0;re<$;re++){const ce=h?q(C[re],Fe[re],rt):C[re];M?(R.copy(E.normals[0]).multiplyScalar(ce.x),b.copy(E.binormals[0]).multiplyScalar(ce.y),v.copy(T[0]).add(R).add(b),be(v.x,v.y,v.z)):be(ce.x,ce.y,0)}for(let re=1;re<=u;re++)for(let ce=0;ce<$;ce++){const ue=h?q(C[ce],Fe[ce],rt):C[ce];M?(R.copy(E.normals[re]).multiplyScalar(ue.x),b.copy(E.binormals[re]).multiplyScalar(ue.y),v.copy(T[re]).add(R).add(b),be(v.x,v.y,v.z)):be(ue.x,ue.y,d/u*re)}for(let re=p-1;re>=0;re--){const ce=re/p,ue=f*Math.cos(ce*Math.PI/2),he=g*Math.sin(ce*Math.PI/2)+x;for(let me=0,Ve=z.length;me<Ve;me++){const ze=q(z[me],K[me],he);be(ze.x,ze.y,d+ue)}for(let me=0,Ve=D.length;me<Ve;me++){const ze=D[me];ae=ne[me];for(let Ye=0,Qe=ze.length;Ye<Qe;Ye++){const L=q(ze[Ye],ae[Ye],he);M?be(L.x,L.y+T[u-1].y,T[u-1].x+ue):be(L.x,L.y,d+ue)}}}ft(),Q();function ft(){const re=s.length/3;if(h){let ce=0,ue=$*ce;for(let he=0;he<gt;he++){const me=Le[he];Xe(me[2]+ue,me[1]+ue,me[0]+ue)}ce=u+p*2,ue=$*ce;for(let he=0;he<gt;he++){const me=Le[he];Xe(me[0]+ue,me[1]+ue,me[2]+ue)}}else{for(let ce=0;ce<gt;ce++){const ue=Le[ce];Xe(ue[2],ue[1],ue[0])}for(let ce=0;ce<gt;ce++){const ue=Le[ce];Xe(ue[0]+$*u,ue[1]+$*u,ue[2]+$*u)}}i.addGroup(re,s.length/3-re,0)}function Q(){const re=s.length/3;let ce=0;se(z,ce),ce+=z.length;for(let ue=0,he=D.length;ue<he;ue++){const me=D[ue];se(me,ce),ce+=me.length}i.addGroup(re,s.length/3-re,1)}function se(re,ce){let ue=re.length;for(;--ue>=0;){const he=ue;let me=ue-1;me<0&&(me=re.length-1);for(let Ve=0,ze=u+p*2;Ve<ze;Ve++){const Ye=$*Ve,Qe=$*(Ve+1),L=ce+he+Ye,vt=ce+me+Ye,at=ce+me+Qe,A=ce+he+Qe;Ae(L,vt,at,A)}}}function be(re,ce,ue){l.push(re),l.push(ce),l.push(ue)}function Xe(re,ce,ue){$e(re),$e(ce),$e(ue);const he=s.length/3,me=S.generateTopUV(i,s,he-3,he-2,he-1);yt(me[0]),yt(me[1]),yt(me[2])}function Ae(re,ce,ue,he){$e(re),$e(ce),$e(he),$e(ce),$e(ue),$e(he);const me=s.length/3,Ve=S.generateSideWallUV(i,s,me-6,me-3,me-2,me-1);yt(Ve[0]),yt(Ve[1]),yt(Ve[3]),yt(Ve[1]),yt(Ve[2]),yt(Ve[3])}function $e(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function yt(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Xg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $c[s.type]().fromJSON(s)),new Bs(i,e.options)}}const Wg={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new de(r,a),new de(o,l),new de(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-d),new de(h,1-g),new de(x,1-m)]:[new de(o,1-l),new de(u,1-d),new de(f,1-g),new de(p,1-m)]}};function Xg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Iu extends wa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Iu(e.radius,e.detail)}}class Nu extends wa{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nu(e.radius,e.detail)}}class Ns extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const S=m*h-a;for(let T=0;T<c;T++){const M=T*d-r;g.push(M,-S,0),x.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const T=S+c*m,M=S+c*(m+1),E=S+1+c*(m+1),b=S+1+c*m;f.push(T,M,b),f.push(M,E,b)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class na extends cn{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,f=new P,g=new de;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){const m=r+p/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<s;x++){const p=x*(i+1);for(let m=0;m<i;m++){const S=m+p,T=S,M=S+i+1,E=S+i+2,b=S+1;o.push(T,M,b),o.push(M,E,b)}}this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Uu extends wa{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uu(e.radius,e.detail)}}class mr extends cn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,f=new P,g=new P;for(let x=0;x<=i;x++){const p=a+x/i*o;for(let m=0;m<=s;m++){const S=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(S),f.y=(e+t*Math.cos(p))*Math.sin(S),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,S=(s+1)*(x-1)+p-1,T=(s+1)*(x-1)+p,M=(s+1)*x+p;l.push(m,S,M),l.push(S,T,M)}this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class $g extends Os{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(od(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(od(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Tn(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const s in i)e[s]=i[s]}return e}function od(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const qg={clone:wr,merge:Tn};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(s.value);break;case"v2":this.uniforms[i].value=new de().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zg extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ia extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qg extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jg extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fu extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ld extends Fu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gl=new ut,cd=new P,ud=new P;class mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ud),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Gl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ua||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ja=new P,eo=new jn,gi=new P;class gp extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,eo,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,eo,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ja,eo,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,eo,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new P,hd=new de,dd=new de;class kn extends gp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,hd,dd),t.subVectors(dd,hd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ev extends mp{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class tv extends Fu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ev}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ga extends gp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nv extends mp{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vl extends Fu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new nv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const sr=-90,rr=1;class iv extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(sr,rr,e,t);s.layers=this.layers,this.add(s);const r=new kn(sr,rr,e,t);r.layers=this.layers,this.add(r);const a=new kn(sr,rr,e,t);a.layers=this.layers,this.add(a);const o=new kn(sr,rr,e,t);o.layers=this.layers,this.add(o);const l=new kn(sr,rr,e,t);l.layers=this.layers,this.add(l);const c=new kn(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sv extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fd=new ut;class rv{constructor(e,t,i=0,s=1/0){this.ray=new np(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(e,t=!0,i=[]){return Kc(e,this,i,t),i.sort(pd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Kc(e[s],this,i,t);return i.sort(pd),i}}function pd(n,e){return n.distance-e.distance}function Kc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Kc(r[a],e,t,!0)}}const Qu=class Qu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Qu.prototype.isMatrix2=!0;let md=Qu;function gd(n,e,t,i){const s=av(i);switch(t){case $f:return n*e;case Mu:return n*e/s.components*s.byteLength;case yu:return n*e/s.components*s.byteLength;case Ds:return n*e*2/s.components*s.byteLength;case Su:return n*e*2/s.components*s.byteLength;case Yf:return n*e*3/s.components*s.byteLength;case oi:return n*e*4/s.components*s.byteLength;case bu:return n*e*4/s.components*s.byteLength;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:case _c:return Math.max(n,16)*Math.max(e,8)/4;case mc:case vc:return Math.max(n,8)*Math.max(e,8)/2;case xc:case Mc:case Sc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yc:case So:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kc:case zc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vc:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bo:case Wc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function av(n){switch(n){case zn:case Vf:return{byteLength:1,components:1};case la:case Hf:case Ci:return{byteLength:2,components:1};case _u:case xu:return{byteLength:2,components:4};case Ai:case vu:case ai:return{byteLength:4,components:1};case Wf:case Xf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);function vp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ov(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cv=`#ifdef USE_ALPHAHASH
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
#endif`,uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
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
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gv=`#ifdef USE_BATCHING
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
#endif`,vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yv=`#ifdef USE_IRIDESCENCE
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
#endif`,Sv=`#ifdef USE_BUMPMAP
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iv=`vec3 transformedNormal = objectNormal;
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
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
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
}`,Jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,a_=`uniform sampler2D dfgLUT;
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
}`,o_=`
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
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
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,J_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,vx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`#define LAMBERT
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
}`,Ex=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Cx=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Lx=`#define PHONG
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
}`,Dx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,kx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:lv,alphahash_pars_fragment:cv,alphamap_fragment:uv,alphamap_pars_fragment:hv,alphatest_fragment:dv,alphatest_pars_fragment:fv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:gv,batching_vertex:vv,begin_vertex:_v,beginnormal_vertex:xv,bsdfs:Mv,iridescence_fragment:yv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:bv,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:Tv,color_fragment:Av,color_pars_fragment:Cv,color_pars_vertex:Rv,color_vertex:Pv,common:Lv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Uv,emissivemap_fragment:Fv,emissivemap_pars_fragment:Ov,colorspace_fragment:Bv,colorspace_pars_fragment:kv,envmap_fragment:zv,envmap_common_pars_fragment:Gv,envmap_pars_fragment:Vv,envmap_pars_vertex:Hv,envmap_physical_pars_fragment:e_,envmap_vertex:Wv,fog_vertex:Xv,fog_pars_vertex:$v,fog_fragment:Yv,fog_pars_fragment:qv,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:Jv,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:Qv,lights_pars_begin:jv,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:a_,lights_fragment_begin:o_,lights_fragment_maps:l_,lights_fragment_end:c_,lightprobes_pars_fragment:u_,logdepthbuf_fragment:h_,logdepthbuf_pars_fragment:d_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:g_,map_particle_fragment:v_,map_particle_pars_fragment:__,metalnessmap_fragment:x_,metalnessmap_pars_fragment:M_,morphinstance_vertex:y_,morphcolor_vertex:S_,morphnormal_vertex:b_,morphtarget_pars_vertex:w_,morphtarget_vertex:E_,normal_fragment_begin:T_,normal_fragment_maps:A_,normal_pars_fragment:C_,normal_pars_vertex:R_,normal_vertex:P_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:U_,opaque_fragment:F_,packing:O_,premultiplied_alpha_fragment:B_,project_vertex:k_,dithering_fragment:z_,dithering_pars_fragment:G_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:X_,shadowmap_vertex:$_,shadowmask_pars_fragment:Y_,skinbase_vertex:q_,skinning_pars_vertex:K_,skinning_vertex:J_,skinnormal_vertex:Z_,specularmap_fragment:Q_,specularmap_pars_fragment:j_,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ax,worldpos_vertex:ox,background_vert:lx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:hx,cube_vert:dx,cube_frag:fx,depth_vert:px,depth_frag:mx,distance_vert:gx,distance_frag:vx,equirect_vert:_x,equirect_frag:xx,linedashed_vert:Mx,linedashed_frag:yx,meshbasic_vert:Sx,meshbasic_frag:bx,meshlambert_vert:wx,meshlambert_frag:Ex,meshmatcap_vert:Tx,meshmatcap_frag:Ax,meshnormal_vert:Cx,meshnormal_frag:Rx,meshphong_vert:Px,meshphong_frag:Lx,meshphysical_vert:Dx,meshphysical_frag:Ix,meshtoon_vert:Nx,meshtoon_frag:Ux,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:kx,sprite_vert:zx,sprite_frag:Gx},Se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Tn([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Tn([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Tn([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Tn([Se.common,Se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Tn([Se.lights,Se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const to={r:0,b:0,g:0},Vx=new ut,_p=new je;_p.set(-1,0,0,0,1,0,0,0,1);function Hx(n,e,t,i,s,r){const a=new We(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const M=S.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(S){let T=!1;const M=f(S);M===null?p(a,o):M&&M.isColor&&(p(M,1),T=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(S,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===$o)?(c===void 0&&(c=new Rt(new Ii(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:wr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_p),c.material.toneMapped=dt.getTransfer(M.colorSpace)!==St,(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Rt(new Ns(2,2),new Pi({name:"BackgroundMaterial",uniforms:wr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=dt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(to,pp(n)),t.buffers.color.setClear(to.r,to.g,to.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Wx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(D,B,H,I,z){let q=!1;const $=d(D,I,H,B);r!==$&&(r=$,c(r.object)),q=f(D,I,H,z),q&&g(D,I,H,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(D,B,H,I),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,B,H,I){const z=I.wireframe===!0;let q=i[B.id];q===void 0&&(q={},i[B.id]=q);const $=D.isInstancedMesh===!0?D.id:0;let oe=q[$];oe===void 0&&(oe={},q[$]=oe);let K=oe[H.id];K===void 0&&(K={},oe[H.id]=K);let ne=K[z];return ne===void 0&&(ne=h(l()),K[z]=ne),ne}function h(D){const B=[],H=[],I=[];for(let z=0;z<t;z++)B[z]=0,H[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,B,H,I){const z=r.attributes,q=B.attributes;let $=0;const oe=H.getAttributes();for(const K in oe)if(oe[K].location>=0){const ae=z[K];let Fe=q[K];if(Fe===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Fe=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Fe=D.instanceColor)),ae===void 0||ae.attribute!==Fe||Fe&&ae.data!==Fe.data)return!0;$++}return r.attributesNum!==$||r.index!==I}function g(D,B,H,I){const z={},q=B.attributes;let $=0;const oe=H.getAttributes();for(const K in oe)if(oe[K].location>=0){let ae=q[K];ae===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const Fe={};Fe.attribute=ae,ae&&ae.data&&(Fe.data=ae.data),z[K]=Fe,$++}r.attributes=z,r.attributesNum=$,r.index=I}function x(){const D=r.newAttributes;for(let B=0,H=D.length;B<H;B++)D[B]=0}function p(D){m(D,0)}function m(D,B){const H=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;H[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),z[D]!==B&&(n.vertexAttribDivisor(D,B),z[D]=B)}function S(){const D=r.newAttributes,B=r.enabledAttributes;for(let H=0,I=B.length;H<I;H++)B[H]!==D[H]&&(n.disableVertexAttribArray(H),B[H]=0)}function T(D,B,H,I,z,q,$){$===!0?n.vertexAttribIPointer(D,B,H,z,q):n.vertexAttribPointer(D,B,H,I,z,q)}function M(D,B,H,I){x();const z=I.attributes,q=H.getAttributes(),$=B.defaultAttributeValues;for(const oe in q){const K=q[oe];if(K.location>=0){let ne=z[oe];if(ne===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const ae=ne.normalized,Fe=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const gt=Le.buffer,rt=Le.type,ft=Le.bytesPerElement,Q=rt===n.INT||rt===n.UNSIGNED_INT||ne.gpuType===vu;if(ne.isInterleavedBufferAttribute){const se=ne.data,be=se.stride,Xe=ne.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)m(K.location+Ae,se.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)p(K.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Ae=0;Ae<K.locationSize;Ae++)T(K.location+Ae,Fe/K.locationSize,rt,ae,be*ft,(Xe+Fe/K.locationSize*Ae)*ft,Q)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<K.locationSize;se++)m(K.location+se,ne.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<K.locationSize;se++)p(K.location+se);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let se=0;se<K.locationSize;se++)T(K.location+se,Fe/K.locationSize,rt,ae,Fe*ft,Fe/K.locationSize*se*ft,Q)}}else if($!==void 0){const ae=$[oe];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(K.location,ae);break;case 3:n.vertexAttrib3fv(K.location,ae);break;case 4:n.vertexAttrib4fv(K.location,ae);break;default:n.vertexAttrib1fv(K.location,ae)}}}}S()}function E(){w();for(const D in i){const B=i[D];for(const H in B){const I=B[H];for(const z in I){const q=I[z];for(const $ in q)u(q[$].object),delete q[$];delete I[z]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const H in B){const I=B[H];for(const z in I){const q=I[z];for(const $ in q)u(q[$].object),delete q[$];delete I[z]}}delete i[D.id]}function R(D){for(const B in i){const H=i[B];for(const I in H){const z=H[I];if(z[D.id]===void 0)continue;const q=z[D.id];for(const $ in q)u(q[$].object),delete q[$];delete z[D.id]}}}function v(D){for(const B in i){const H=i[B],I=D.isInstancedMesh===!0?D.id:0,z=H[I];if(z!==void 0){for(const q in z){const $=z[q];for(const oe in $)u($[oe].object),delete $[oe];delete z[q]}delete H[I],Object.keys(H).length===0&&delete i[B]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Xx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $x(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==oi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zn&&R!==ai&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:M,maxSamples:E,samples:b}}function Yx(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new zi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,T=S*4;let M=m.clippingState||null;l.value=M,M=u(g,h,T,f);for(let E=0;E!==T;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,M=f;T!==x;++T,M+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const hr=4,qx=6,Kx=20,Jx=256,Wr=new ga,vd=new We;let Hl=null,Wl=0,Xl=0,$l=!1;const Zx=new P,ms=new P;class _d{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Zx}=r;Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Wl,Xl),this._renderer.xr.enabled=$l,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ci,format:oi,colorSpace:wo,depthBuffer:!1},s=xd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qx(r)),this._blurMaterial=eM(r,e,t),this._ggxMaterial=jx(r,e,t)}return s}_compileMaterial(e){const t=new Rt(new cn,e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,i,s,r){const l=new kn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(vd),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new Ii,new Gn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(vd),m=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const E=this._cubeSize;ar(s,M*E,T>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ls||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-hr?i-g+hr:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ar(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(o,Wr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ar(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(o,Wr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-hr?s-this._lodMax+hr:0),h=4*(this._cubeSize-u);ar(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Wr)}}function Qx(n){const e=[],t=[];let i=n;const s=n-hr+1+qx;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let m=0;m<d;m++){const S=m%3*2/3-1,T=m>2?0:-1,M=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];g.set(M,f*h*m);for(let E=0;E<h;E++){const b=u[E*2]*2-1,R=u[E*2+1]*2-1;m===0?ms.set(1,R,b):m===1?ms.set(-b,1,-R):m===2?ms.set(-b,R,1):m===3?ms.set(-1,R,-b):m===4?ms.set(-b,-1,R):ms.set(b,R,-1),ms.toArray(x,(m*h+E)*f)}}const p=new cn;p.setAttribute("position",new Cn(g,f)),p.setAttribute("outputDirection",new Cn(x,f)),t.push(new Rt(p,null)),i>hr&&i--}return{lodMeshes:t,sizeLods:e}}function xd(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jx(n,e,t){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function eM(n,e,t){return new Pi({name:"SphericalGaussianBlur",defines:{SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Md(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function yd(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xp extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Hi});r.uniforms.tEquirect.value=t;const a=new Rt(s,r),o=t.minFilter;return t.minFilter===xs&&(t.minFilter=Sn),new iv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function tM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===fl||f===pl)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new xp(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===fl||f===pl,x=f===Ls||f===Sr;if(g||x){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new _d(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const S=h.image;return g&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new _d(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===fl?h.mapping=Ls:f===pl&&(h.mapping=Sr),h}function l(h){let f=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function nM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fr("WebGLRenderer: "+i+" extension not supported."),s}}}function iM(n,e,t,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let T=0,M=S.length;T<M;T+=3){const E=S[T+0],b=S[T+1],R=S[T+2];h.push(E,b,b,R,R,E)}}else{const S=g.array;x=g.version;for(let T=0,M=S.length/3-1;T<M;T+=3){const E=T+0,b=T+1,R=T+2;h.push(E,b,b,R,R,E)}}const p=new(g.count>=65535?jf:Qf)(h,1);p.version=x;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function sM(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aM(n,e,t){const i=new WeakMap,s=new Ft;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let M=o.attributes.position.count*T,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*E*4*d),R=new Jf(b,M,E,d);R.type=ai,R.needsUpdate=!0;const v=T*4;for(let C=0;C<d;C++){const D=p[C],B=m[C],H=S[C],I=M*E*4*C;for(let z=0;z<D.count;z++){const q=z*v;f===!0&&(s.fromBufferAttribute(D,z),b[I+q+0]=s.x,b[I+q+1]=s.y,b[I+q+2]=s.z,b[I+q+3]=0),g===!0&&(s.fromBufferAttribute(B,z),b[I+q+4]=s.x,b[I+q+5]=s.y,b[I+q+6]=s.z,b[I+q+7]=0),x===!0&&(s.fromBufferAttribute(H,z),b[I+q+8]=s.x,b[I+q+9]=s.y,b[I+q+10]=s.z,b[I+q+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new de(M,E)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function oM(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const lM={[Uf]:"LINEAR_TONE_MAPPING",[Ff]:"REINHARD_TONE_MAPPING",[Of]:"CINEON_TONE_MAPPING",[Bf]:"ACES_FILMIC_TONE_MAPPING",[zf]:"AGX_TONE_MAPPING",[gu]:"NEUTRAL_TONE_MAPPING",[kf]:"CUSTOM_TONE_MAPPING"};function cM(n,e,t,i,s,r){const a=new Zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new cn;c.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const u=new Zg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Rt(c,u),h=new ga(-1,1,1,-1,0,1);let f=null,g=null,x=!1,p,m=null,S=[],T=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let b=0;b<S.length;b++){const R=S[b];R.setSize&&R.setSize(M,E)}},this.setEffects=function(M){S=M,T=S.length>0&&S[0].isRenderPass===!0;const E=a.width,b=a.height;S.length>0&&o===null&&(o=new Zn(E,b,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(E,b,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){const v=S[R];v.setSize&&v.setSize(E,b)}},this.begin=function(M,E){if(x||M.toneMapping===wi&&S.length===0)return!1;if(m=E,E!==null){const b=E.width,R=E.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return T===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=wi,!0},this.hasRenderPass=function(){return T},this.end=function(M,E){M.toneMapping=p,x=!0;let b=a,R=o;for(let v=0;v<S.length;v++){const w=S[v];w.enabled!==!1&&(w.render(M,R,b,E),w.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},dt.getTransfer(f)===St&&(u.defines.SRGB_TRANSFER="");const v=lM[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(m),M.render(d,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Mp=new bn,Jc=new da(1,1),yp=new Jf,Sp=new Ym,bp=new sp,Sd=[],bd=[],wd=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Sd[s];if(r===void 0&&(r=new Float32Array(s),Sd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ko(n,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Td.set(i),n.uniformMatrix2fv(this.addr,!1,Td),tn(t,i)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Ed.set(i),n.uniformMatrix3fv(this.addr,!1,Ed),tn(t,i)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;wd.set(i),n.uniformMatrix4fv(this.addr,!1,wd),tn(t,i)}}function vM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function EM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jc.compareFunction=t.isReversedDepthBuffer()?Eu:wu,r=Jc):r=Mp,t.setTexture2D(e||r,s)}function TM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sp,s)}function AM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bp,s)}function CM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yp,s)}function RM(n){switch(n){case 5126:return uM;case 35664:return hM;case 35665:return dM;case 35666:return fM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return MM;case 5125:return yM;case 36294:return SM;case 36295:return bM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}function PM(n,e){n.uniform1fv(this.addr,e)}function LM(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function DM(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function IM(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function NM(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UM(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FM(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OM(n,e){n.uniform1iv(this.addr,e)}function BM(n,e){n.uniform2iv(this.addr,e)}function kM(n,e){n.uniform3iv(this.addr,e)}function zM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function VM(n,e){n.uniform2uiv(this.addr,e)}function HM(n,e){n.uniform3uiv(this.addr,e)}function WM(n,e){n.uniform4uiv(this.addr,e)}function XM(n,e,t){const i=this.cache,s=e.length,r=Ko(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Jc:a=Mp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function $M(n,e,t){const i=this.cache,s=e.length,r=Ko(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sp,r[a])}function YM(n,e,t){const i=this.cache,s=e.length,r=Ko(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bp,r[a])}function qM(n,e,t){const i=this.cache,s=e.length,r=Ko(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yp,r[a])}function KM(n){switch(n){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return NM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return GM;case 36294:return VM;case 36295:return HM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}class JM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class ZM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KM(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function Ad(n,e){n.seq.push(e),n.map[e.id]=e}function jM(n,e,t){const i=n.name,s=i.length;for(Yl.lastIndex=0;;){const r=Yl.exec(i),a=Yl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ad(t,c===void 0?new JM(o,n,e):new ZM(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new QM(o),Ad(t,d)),t=d}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Cd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ey=37297;let ty=0;function ny(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Rd=new je;function iy(n){dt._getMatrix(Rd,dt.workingColorSpace,n);const e=`mat3( ${Rd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Eo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ny(n.getShaderSource(e),o)}else return r}function sy(n,e){const t=iy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ry={[Uf]:"Linear",[Ff]:"Reinhard",[Of]:"Cineon",[Bf]:"ACESFilmic",[zf]:"AgX",[gu]:"Neutral",[kf]:"Custom"};function ay(n,e){const t=ry[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new P;function oy(){dt.getLuminanceCoefficients(no);const n=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function cy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Kr(n){return n!==""}function Ld(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(n){return n.replace(hy,fy)}const dy=new Map;function fy(n,e){let t=it[e];if(t===void 0){const i=dy.get(e);if(i!==void 0)t=it[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zc(t)}const py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(n){return n.replace(py,my)}function my(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const gy={[Jr]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function vy(n){return gy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _y={[Ls]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function xy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_y[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const My={[Sr]:"ENVMAP_MODE_REFRACTION"};function yy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":My[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sy={[Nf]:"ENVMAP_BLENDING_MULTIPLY",[um]:"ENVMAP_BLENDING_MIX",[hm]:"ENVMAP_BLENDING_ADD"};function by(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sy[n.combine]||"ENVMAP_BLENDING_NONE"}function wy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ey(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vy(t),c=xy(t),u=yy(t),d=by(t),h=wy(t),f=ly(t),g=cy(r),x=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`)):(p=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?it.tonemapping_pars_fragment:"",t.toneMapping!==wi?ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,sy("linearToOutputTexel",t.outputColorSpace),oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Zc(a),a=Ld(a,t),a=Dd(a,t),o=Zc(o),o=Ld(o,t),o=Dd(o,t),a=Id(a),o=Id(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=S+p+a,M=S+m+o,E=Cd(s,s.VERTEX_SHADER,T),b=Cd(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(b)||"",z=B.trim(),q=H.trim(),$=I.trim();let oe=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,b);else{const ne=Pd(s,E,"vertex"),ae=Pd(s,b,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+ne+`
`+ae)}else z!==""?Ke("WebGLProgram: Program Info Log:",z):(q===""||$==="")&&(K=!1);K&&(D.diagnostics={runnable:oe,programLog:z,vertexShader:{log:q,prefix:p},fragmentShader:{log:$,prefix:m}})}s.deleteShader(E),s.deleteShader(b),v=new mo(s,x),w=uy(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,ey)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let Ty=0;class Ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cy(e),t.set(e,i)),i}}class Cy{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}}function Ry(n){return n===Ds||n===So||n===bo}function Py(n,e,t,i,s,r){const a=new Cu,o=new Ay,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,w,C,D,B,H){const I=D.fog,z=B.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,oe=e.get(v.envMap||q,$),K=oe&&oe.mapping===$o?oe.image.height:null,ne=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Ke("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Fe=ae!==void 0?ae.length:0;let Le=0;z.morphAttributes.position!==void 0&&(Le=1),z.morphAttributes.normal!==void 0&&(Le=2),z.morphAttributes.color!==void 0&&(Le=3);let gt,rt,ft,Q;if(ne){const At=_i[ne];gt=At.vertexShader,rt=At.fragmentShader}else{gt=v.vertexShader,rt=v.fragmentShader;const At=o.getVertexShaderStage(v),_t=o.getFragmentShaderStage(v);o.update(v,At,_t),ft=At.id,Q=_t.id}const se=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Xe=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,$e=!!v.map,yt=!!v.matcap,re=!!oe,ce=!!v.aoMap,ue=!!v.lightMap,he=!!v.bumpMap&&v.wireframe===!1,me=!!v.normalMap,Ve=!!v.displacementMap,ze=!!v.emissiveMap,Ye=!!v.metalnessMap,Qe=!!v.roughnessMap,L=v.anisotropy>0,vt=v.clearcoat>0,at=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,k=v.sheen>0,X=v.transmission>0,J=L&&!!v.anisotropyMap,fe=vt&&!!v.clearcoatMap,pe=vt&&!!v.clearcoatNormalMap,Z=vt&&!!v.clearcoatRoughnessMap,ie=_&&!!v.iridescenceMap,ge=_&&!!v.iridescenceThicknessMap,Oe=k&&!!v.sheenColorMap,ye=k&&!!v.sheenRoughnessMap,ve=!!v.specularMap,Be=!!v.specularColorMap,He=!!v.specularIntensityMap,et=X&&!!v.transmissionMap,U=X&&!!v.thicknessMap,_e=!!v.gradientMap,j=!!v.alphaMap,xe=v.alphaTest>0,Te=!!v.alphaHash,le=!!v.extensions;let ke=wi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ke=n.toneMapping);const Ne={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:gt,fragmentShader:rt,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&B.instanceColor!==null,instancingMorph:Xe&&B.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:yt,envMap:re,envMapMode:re&&oe.mapping,envMapCubeUVHeight:K,aoMap:ce,lightMap:ue,bumpMap:he,normalMap:me,displacementMap:Ve,emissiveMap:ze,normalMapObjectSpace:me&&v.normalMapType===pm,normalMapTangentSpace:me&&v.normalMapType===Xc,packedNormalMap:me&&v.normalMapType===Xc&&Ry(v.normalMap.format),metalnessMap:Ye,roughnessMap:Qe,anisotropy:L,anisotropyMap:J,clearcoat:vt,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:Z,dispersion:at,retroreflection:A,iridescence:_,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:k,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:ve,specularColorMap:Be,specularIntensityMap:He,transmission:X,transmissionMap:et,thicknessMap:U,gradientMap:_e,opaque:v.transparent===!1&&v.blending===Zr&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:xe,alphaHash:Te,combine:v.combine,mapUv:$e&&g(v.map.channel),aoMapUv:ce&&g(v.aoMap.channel),lightMapUv:ue&&g(v.lightMap.channel),bumpMapUv:he&&g(v.bumpMap.channel),normalMapUv:me&&g(v.normalMap.channel),displacementMapUv:Ve&&g(v.displacementMap.channel),emissiveMapUv:ze&&g(v.emissiveMap.channel),metalnessMapUv:Ye&&g(v.metalnessMap.channel),roughnessMapUv:Qe&&g(v.roughnessMap.channel),anisotropyMapUv:J&&g(v.anisotropyMap.channel),clearcoatMapUv:fe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(v.sheenRoughnessMap.channel),specularMapUv:ve&&g(v.specularMap.channel),specularColorMapUv:Be&&g(v.specularColorMap.channel),specularIntensityMapUv:He&&g(v.specularIntensityMap.channel),transmissionMapUv:et&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(me||L),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&($e||j),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Le,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:ze&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yi,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(w,v),S(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const w=f[v.type];let C;if(w){const D=_i[w];C=qg.clone(D.uniforms)}else C=v.uniforms;return C}function M(v,w){let C=u.get(w);return C!==void 0?++C.usedTimes:(C=new Ey(n,w,v,s),c.push(C),u.set(w,C)),C}function E(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:M,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:R}}function Ly(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Dy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,x,p,m){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},n[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=p,S.group=m),e++,S}function l(h,f,g,x,p,m,S){S.reversedDepth===!0&&(p=-p);const T=o(h,f,g,x,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(h,f,g,x,p,m){const S=o(h,f,g,x,p,m);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||Dy),i.length>1&&i.sort(f||Ud),s.length>1&&s.sort(f||Ud)}function d(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Iy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Fd,n.set(i,[a])):s>=r.length?(a=new Fd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ny(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Uy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fy=0;function Oy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function By(n){const e=new Ny,t=Uy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new ut,a=new ut;function o(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,S=0,T=0,M=0,E=0,b=0,R=0,v=0,w=0,C=0;c.sort(Oy);for(let B=0,H=c.length;B<H;B++){const I=c[B],z=I.color,q=I.intensity,$=I.distance;let oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ds?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*q,d+=z.g*q,h+=z.b*q;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],q);C++}else if(I.isSunLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[g]=ae,i.sunShadowMap[g]=oe;const Fe=ne.getViewportCount();for(let Le=0;Le<Fe;Le++)i.sunShadowMatrix[x+Le]=ne.getMatrix(Le),i.sunShadowCascade[x+Le]=ne._cascadeData[Le];x+=Fe,g++}i.sun[f]=K,f++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,i.directionalShadow[p]=ae,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(z).multiplyScalar(q),K.distance=$,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[S]=K;const ne=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,ne.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[S]=ne.matrix,I.castShadow){const ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,i.spotShadow[S]=ae,i.spotShadowMap[S]=oe,R++}S++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(z).multiplyScalar(q),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=K,T++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ne=I.shadow,ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,i.pointShadow[m]=ae,i.pointShadowMap[m]=oe,i.pointShadowMatrix[m]=I.shadow.matrix,b++}i.point[m]=K,m++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(q),K.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[M]=K,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==T||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==R||D.numSpotMaps!==v||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=S,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=S,D.rectAreaLength=T,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=R,D.numSpotMaps=v,D.numLightProbes=C,i.version=Fy++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,p=0;const m=u.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){const M=c[S];if(M.isSunLight){const E=i.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),d++}else if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(M.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Od(n){const e=new By(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ky(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Od(n),e.set(s,[o])):r>=a.length?(o=new Od(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
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
}`,Vy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Hy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Bd=new ut,Xr=new P,ql=new P;function Wy(n,e,t){let i=new Ru;const s=new de,r=new de,a=new Ft,o=new Qg,l=new jg,c={},u=t.maxTextureSize,d={[Ps]:In,[In]:Ps,[yi]:yi},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:zy,fragmentShader:Gy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Rt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let m=this.type;this.render=function(b,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===X0&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);const w=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Hi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=m!==this.type;H&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=b.length;I<z;I++){const q=b[I],$=q.shadow;if($===void 0){Ke("WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const oe=$.getFrameExtents();s.multiply(oe),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,$.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=K,$.map===null||H===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Yr){if(q.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Zn(s.x,s.y,{format:Ds,type:Ci,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),$.map.texture.name=q.name+".shadowMap",$.map.depthTexture=new da(s.x,s.y,ai),$.map.depthTexture.name=q.name+".shadowMapDepth",$.map.depthTexture.format=Yi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=fn,$.map.depthTexture.magFilter=fn}else q.isPointLight?($.map=new xp(s.x),$.map.depthTexture=new dg(s.x,Ai)):($.map=new Zn(s.x,s.y),$.map.depthTexture=new da(s.x,s.y,Ai)),$.map.depthTexture.name=q.name+".shadowMap",$.map.depthTexture.format=Yi,this.type===Jr?($.map.depthTexture.compareFunction=K?Eu:wu,$.map.depthTexture.minFilter=Sn,$.map.depthTexture.magFilter=Sn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=fn,$.map.depthTexture.magFilter=fn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);const ne=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();q.isPointLight!==!0&&$.updateMatrices(q,v);for(let ae=0;ae<ne;ae++){const Fe=$.getCamera(ae);if(q.isPointLight){const Le=$.camera,gt=$.matrix,rt=q.distance||Le.far;rt!==Le.far&&(Le.far=rt,Le.updateProjectionMatrix()),Xr.setFromMatrixPosition(q.matrixWorld),Le.position.copy(Xr),ql.copy(Le.position),ql.add(Vy[ae]),Le.up.copy(Hy[ae]),Le.lookAt(ql),Le.updateMatrixWorld(),gt.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Bd.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Bd,Le.coordinateSystem,Le.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ae),n.clear();else{ae===0&&(n.setRenderTarget($.map),n.clear());const Le=$.getViewport(ae);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),B.viewport(a)}i=$.getFrustum(ae),M(R,v,Fe,q,this.type)}$.isPointLightShadow!==!0&&this.type===Yr&&S($,v),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(w,C,D)};function S(b,R){const v=e.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Zn(s.x,s.y,{format:Ds,type:Ci}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,v,h,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,v,f,x,null)}function T(b,R,v,w){let C=null;const D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=C.uuid,H=R.uuid;let I=c[B];I===void 0&&(I={},c[B]=I);let z=I[H];z===void 0&&(z=C.clone(),I[H]=z,R.addEventListener("dispose",E)),C=z}if(C.visible=R.visible,C.wireframe=R.wireframe,w===Yr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const B=n.properties.get(C);B.light=v}return C}function M(b,R,v,w,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Yr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const H=e.update(b),I=b.material;if(Array.isArray(I)){const z=H.groups;for(let q=0,$=z.length;q<$;q++){const oe=z[q],K=I[oe.materialIndex];if(K&&K.visible){const ne=T(b,K,w,C);b.onBeforeShadow(n,b,R,v,H,ne,oe),n.renderBufferDirect(v,null,H,ne,b,oe),b.onAfterShadow(n,b,R,v,H,ne,oe)}}}else if(I.visible){const z=T(b,I,w,C);b.onBeforeShadow(n,b,R,v,H,z,null),n.renderBufferDirect(v,null,H,z,b,null),b.onAfterShadow(n,b,R,v,H,z,null)}}const B=b.children;for(let H=0,I=B.length;H<I;H++)M(B[H],R,v,w,C)}function E(b){b.target.removeEventListener("dispose",E);for(const v in c){const w=c[v],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Xy(n,e){function t(){let U=!1;const _e=new Ft;let j=null;const xe=new Ft(0,0,0,0);return{setMask:function(Te){j!==Te&&!U&&(n.colorMask(Te,Te,Te,Te),j=Te)},setLocked:function(Te){U=Te},setClear:function(Te,le,ke,Ne,At){At===!0&&(Te*=Ne,le*=Ne,ke*=Ne),_e.set(Te,le,ke,Ne),xe.equals(_e)===!1&&(n.clearColor(Te,le,ke,Ne),xe.copy(_e))},reset:function(){U=!1,j=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,_e=!1,j=null,xe=null,Te=null;return{setReversed:function(le){if(_e!==le){const ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),_e=le;const Ne=Te;Te=null,this.setClear(Ne)}},getReversed:function(){return _e},setTest:function(le){le?se(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(le){j!==le&&!U&&(n.depthMask(le),j=le)},setFunc:function(le){if(_e&&(le=Em[le]),xe!==le){switch(le){case ac:n.depthFunc(n.NEVER);break;case oc:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case oa:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case uc:n.depthFunc(n.GEQUAL);break;case hc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=le}},setLocked:function(le){U=le},setClear:function(le){Te!==le&&(Te=le,_e&&(le=1-le),n.clearDepth(le))},reset:function(){U=!1,j=null,xe=null,Te=null,_e=!1}}}function s(){let U=!1,_e=null,j=null,xe=null,Te=null,le=null,ke=null,Ne=null,At=null;return{setTest:function(_t){U||(_t?se(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(_t){_e!==_t&&!U&&(n.stencilMask(_t),_e=_t)},setFunc:function(_t,ei,pi){(j!==_t||xe!==ei||Te!==pi)&&(n.stencilFunc(_t,ei,pi),j=_t,xe=ei,Te=pi)},setOp:function(_t,ei,pi){(le!==_t||ke!==ei||Ne!==pi)&&(n.stencilOp(_t,ei,pi),le=_t,ke=ei,Ne=pi)},setLocked:function(_t){U=_t},setClear:function(_t){At!==_t&&(n.clearStencil(_t),At=_t)},reset:function(){U=!1,_e=null,j=null,xe=null,Te=null,le=null,ke=null,Ne=null,At=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,S=null,T=null,M=null,E=null,b=null,R=null,v=new We(0,0,0),w=0,C=!1,D=null,B=null,H=null,I=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,oe=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=oe>=1):K.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=oe>=2);let ne=null,ae={};const Fe=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),gt=new Ft().fromArray(Fe),rt=new Ft().fromArray(Le);function ft(U,_e,j,xe){const Te=new Uint8Array(4),le=n.createTexture();n.bindTexture(U,le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<j;ke++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(_e+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return le}const Q={};Q[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(oa),he(!1),me(Ah),se(n.CULL_FACE),ce(Hi);function se(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function be(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Xe(U,_e){return h[U]!==_e?(n.bindFramebuffer(U,_e),h[U]=_e,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_e),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ae(U,_e){let j=g,xe=!1;if(U){j=f.get(_e),j===void 0&&(j=[],f.set(_e,j));const Te=U.textures;if(j.length!==Te.length||j[0]!==n.COLOR_ATTACHMENT0){for(let le=0,ke=Te.length;le<ke;le++)j[le]=n.COLOR_ATTACHMENT0+le;j.length=Te.length,xe=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,xe=!0);xe&&n.drawBuffers(j)}function $e(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const yt={[cr]:n.FUNC_ADD,[Y0]:n.FUNC_SUBTRACT,[q0]:n.FUNC_REVERSE_SUBTRACT};yt[K0]=n.MIN,yt[J0]=n.MAX;const re={[Z0]:n.ZERO,[Q0]:n.ONE,[j0]:n.SRC_COLOR,[Df]:n.SRC_ALPHA,[rm]:n.SRC_ALPHA_SATURATE,[im]:n.DST_COLOR,[tm]:n.DST_ALPHA,[em]:n.ONE_MINUS_SRC_COLOR,[If]:n.ONE_MINUS_SRC_ALPHA,[sm]:n.ONE_MINUS_DST_COLOR,[nm]:n.ONE_MINUS_DST_ALPHA,[am]:n.CONSTANT_COLOR,[om]:n.ONE_MINUS_CONSTANT_COLOR,[lm]:n.CONSTANT_ALPHA,[cm]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(U,_e,j,xe,Te,le,ke,Ne,At,_t){if(U===Hi){p===!0&&(be(n.BLEND),p=!1);return}if(p===!1&&(se(n.BLEND),p=!0),U!==$0){if(U!==m||_t!==C){if((S!==cr||E!==cr)&&(n.blendEquation(n.FUNC_ADD),S=cr,E=cr),_t)switch(U){case Zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ht("WebGLState: Invalid blending: ",U);break}else switch(U){case Zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",U);break}T=null,M=null,b=null,R=null,v.set(0,0,0),w=0,m=U,C=_t}return}Te=Te||_e,le=le||j,ke=ke||xe,(_e!==S||Te!==E)&&(n.blendEquationSeparate(yt[_e],yt[Te]),S=_e,E=Te),(j!==T||xe!==M||le!==b||ke!==R)&&(n.blendFuncSeparate(re[j],re[xe],re[le],re[ke]),T=j,M=xe,b=le,R=ke),(Ne.equals(v)===!1||At!==w)&&(n.blendColor(Ne.r,Ne.g,Ne.b,At),v.copy(Ne),w=At),m=U,C=!1}function ue(U,_e){U.side===yi?be(n.CULL_FACE):se(n.CULL_FACE);let j=U.side===In;_e&&(j=!j),he(j),U.blending===Zr&&U.transparent===!1?ce(Hi):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const xe=U.stencilWrite;o.setTest(xe),xe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function me(U){U!==H0?(se(n.CULL_FACE),U!==B&&(U===Ah?n.cullFace(n.BACK):U===W0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),B=U}function Ve(U){U!==H&&($&&n.lineWidth(U),H=U)}function ze(U,_e,j){U?(se(n.POLYGON_OFFSET_FILL),(I!==_e||z!==j)&&(I=_e,z=j,a.getReversed()&&(_e=-_e),n.polygonOffset(_e,j))):be(n.POLYGON_OFFSET_FILL)}function Ye(U){U?se(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Qe(U){U===void 0&&(U=n.TEXTURE0+q-1),ne!==U&&(n.activeTexture(U),ne=U)}function L(U,_e,j){j===void 0&&(ne===null?j=n.TEXTURE0+q-1:j=ne);let xe=ae[j];xe===void 0&&(xe={type:void 0,texture:void 0},ae[j]=xe),(xe.type!==U||xe.texture!==_e)&&(ne!==j&&(n.activeTexture(j),ne=j),n.bindTexture(U,_e||Q[U]),xe.type=U,xe.texture=_e)}function vt(){const U=ae[ne];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function _(){try{n.texSubImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function k(){try{n.texSubImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function fe(){try{n.texStorage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function pe(){try{n.texStorage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function ge(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Oe(U,_e){d[U]!==_e&&(n.pixelStorei(U,_e),d[U]=_e)}function ye(U){gt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function ve(U){rt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),rt.copy(U))}function Be(U,_e){let j=c.get(_e);j===void 0&&(j=new WeakMap,c.set(_e,j));let xe=j.get(U);xe===void 0&&(xe=n.getUniformBlockIndex(_e,U.name),j.set(U,xe))}function He(U,_e){const xe=c.get(_e).get(U);l.get(_e)!==xe&&(n.uniformBlockBinding(_e,xe,U.__bindingPointIndex),l.set(_e,xe))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,ae={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,S=null,T=null,M=null,E=null,b=null,R=null,v=new We(0,0,0),w=0,C=!1,D=null,B=null,H=null,I=null,z=null,gt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:be,bindFramebuffer:Xe,drawBuffers:Ae,useProgram:$e,setBlending:ce,setMaterial:ue,setFlipSided:he,setCullFace:me,setLineWidth:Ve,setPolygonOffset:ze,setScissorTest:Ye,activeTexture:Qe,bindTexture:L,unbindTexture:vt,compressedTexImage2D:at,compressedTexImage3D:A,texImage2D:Z,texImage3D:ie,pixelStorei:Oe,getParameter:ge,updateUBOMapping:Be,uniformBlockBinding:He,texStorage2D:fe,texStorage3D:pe,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:ye,viewport:ve,reset:et}}function $y(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return g?new OffscreenCanvas(A,_):To("canvas")}function p(A,_,k){let X=1;const J=at(A);if((J.width>k||J.height>k)&&(X=k/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const fe=Math.floor(X*J.width),pe=Math.floor(X*J.height);h===void 0&&(h=x(fe,pe));const Z=_?x(fe,pe):h;return Z.width=fe,Z.height=pe,Z.getContext("2d").drawImage(A,0,0,fe,pe),Ke("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+fe+"x"+pe+")."),Z}else return"data"in A&&Ke("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function S(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,_,k,X,J,fe=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8),k===n.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),k===n.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),_===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8),k===n.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),k===n.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&(k===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),k===n.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),_===n.RGBA){const ie=fe?Eo:dt.getTransfer(J);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=ie===St?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),k===n.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(A,_){let k;return A?_===null||_===Ai||_===ca?k=n.DEPTH24_STENCIL8:_===ai?k=n.DEPTH32F_STENCIL8:_===la&&(k=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ai||_===ca?k=n.DEPTH_COMPONENT24:_===ai?k=n.DEPTH_COMPONENT32F:_===la&&(k=n.DEPTH_COMPONENT16),k}function b(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==Sn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function v(A){const _=A.target;_.removeEventListener("dispose",v),D(_)}function w(A){const _=i.get(A);if(_.__webglInit===void 0)return;const k=A.source,X=f.get(k);if(X){const J=X[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(A),Object.keys(X).length===0&&f.delete(k)}i.remove(A)}function C(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const k=A.source,X=f.get(k);delete X[_.__cacheKey],a.memory.textures--}function D(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let J=0;J<_.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[X][J]);else n.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)n.deleteFramebuffer(_.__webglFramebuffer[X]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=A.textures;for(let X=0,J=k.length;X<J;X++){const fe=i.get(k[X]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(k[X])}i.remove(A)}let B=0;function H(){B=0}function I(){return B}function z(A){B=A}function q(){const A=B;return A>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function $(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function oe(A,_){const k=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const X=A.image;if(X===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{be(k,A,_);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function K(A,_){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){be(k,A,_);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function ne(A,_){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){be(k,A,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function ae(A,_){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Xe(k,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}const Fe={[fc]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},Le={[fn]:n.NEAREST,[dm]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[ml]:n.LINEAR_MIPMAP_NEAREST,[xs]:n.LINEAR_MIPMAP_LINEAR},gt={[gm]:n.NEVER,[ym]:n.ALWAYS,[vm]:n.LESS,[wu]:n.LEQUAL,[_m]:n.EQUAL,[Eu]:n.GEQUAL,[xm]:n.GREATER,[Mm]:n.NOTEQUAL};function rt(A,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Sn||_.magFilter===ml||_.magFilter===Ra||_.magFilter===xs||_.minFilter===Sn||_.minFilter===ml||_.minFilter===Ra||_.minFilter===xs)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Fe[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Fe[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Fe[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Le[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Le[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,gt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fn||_.minFilter!==Ra&&_.minFilter!==xs||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ft(A,_){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const X=_.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const fe=$(_);if(fe!==A.__cacheKey){J[fe]===void 0&&(J[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[fe].usedTimes++;const pe=J[A.__cacheKey];pe!==void 0&&(J[A.__cacheKey].usedTimes--,pe.usedTimes===0&&C(_)),A.__cacheKey=fe,A.__webglTexture=J[fe].texture}return k}function Q(A,_,k){return Math.floor(Math.floor(A/k)/_)}function se(A,_,k,X){const fe=A.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{fe.sort((Oe,ye)=>Oe.start-ye.start);let pe=0;for(let Oe=1;Oe<fe.length;Oe++){const ye=fe[pe],ve=fe[Oe],Be=ye.start+ye.count,He=Q(ve.start,_.width,4),et=Q(ye.start,_.width,4);ve.start<=Be+1&&He===et&&Q(ve.start+ve.count-1,_.width,4)===He?ye.count=Math.max(ye.count,ve.start+ve.count-ye.start):(++pe,fe[pe]=ve)}fe.length=pe+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),ie=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Oe=0,ye=fe.length;Oe<ye;Oe++){const ve=fe[Oe],Be=Math.floor(ve.start/4),He=Math.ceil(ve.count/4),et=Be%_.width,U=Math.floor(Be/_.width),_e=He,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,et,U,_e,j,k,X,_.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function be(A,_,k){let X=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=n.TEXTURE_3D);const J=ft(A,_),fe=_.source;t.bindTexture(X,A.__webglTexture,n.TEXTURE0+k);const pe=i.get(fe);if(fe.version!==pe.__version||J===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=dt.getPrimaries(dt.workingColorSpace),xe=_.colorSpace===ns?null:dt.getPrimaries(_.colorSpace),Te=_.colorSpace===ns||j===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=p(_.image,!1,s.maxTextureSize);ie=vt(_,ie);const ge=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type);let ye=M(_.internalFormat,ge,Oe,_.normalized,_.colorSpace,_.isVideoTexture);rt(X,_);let ve;const Be=_.mipmaps,He=_.isVideoTexture!==!0,et=pe.__version===void 0||J===!0,U=fe.dataReady,_e=b(_,ie);if(_.isDepthTexture)ye=E(_.format===Ms,_.type),et&&(He?t.texStorage2D(n.TEXTURE_2D,1,ye,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,ge,Oe,null));else if(_.isDataTexture)if(Be.length>0){He&&et&&t.texStorage2D(n.TEXTURE_2D,_e,ye,Be[0].width,Be[0].height);for(let j=0,xe=Be.length;j<xe;j++)ve=Be[j],He?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,j,ye,ve.width,ve.height,0,ge,Oe,ve.data);_.generateMipmaps=!1}else He?(et&&t.texStorage2D(n.TEXTURE_2D,_e,ye,ie.width,ie.height),U&&se(_,ie,ge,Oe)):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,ge,Oe,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ye,Be[0].width,Be[0].height,ie.depth);for(let j=0,xe=Be.length;j<xe;j++)if(ve=Be[j],_.format!==oi)if(ge!==null)if(He){if(U)if(_.layerUpdates.size>0){const Te=gd(ve.width,ve.height,_.format,_.type);for(const le of _.layerUpdates){const ke=ve.data.subarray(le*Te/ve.data.BYTES_PER_ELEMENT,(le+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,le,ve.width,ve.height,1,ge,ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ye,ve.width,ve.height,ie.depth,0,ve.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,ie.depth,ge,Oe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,ye,ve.width,ve.height,ie.depth,0,ge,Oe,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{He&&et&&t.texStorage2D(n.TEXTURE_2D,_e,ye,Be[0].width,Be[0].height);for(let j=0,xe=Be.length;j<xe;j++)ve=Be[j],_.format!==oi?ge!==null?He?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,j,ye,ve.width,ve.height,0,ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,j,ye,ve.width,ve.height,0,ge,Oe,ve.data)}else if(_.isDataArrayTexture)if(He){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ye,ie.width,ie.height,ie.depth),U)if(_.layerUpdates.size>0){const j=gd(ie.width,ie.height,_.format,_.type);for(const xe of _.layerUpdates){const Te=ie.data.subarray(xe*j/ie.data.BYTES_PER_ELEMENT,(xe+1)*j/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,ie.width,ie.height,1,ge,Oe,Te)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Oe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,ge,Oe,ie.data);else if(_.isData3DTexture)He?(et&&t.texStorage3D(n.TEXTURE_3D,_e,ye,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Oe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,ge,Oe,ie.data);else if(_.isFramebufferTexture){if(et)if(He)t.texStorage2D(n.TEXTURE_2D,_e,ye,ie.width,ie.height);else{let j=ie.width,xe=ie.height;for(let Te=0;Te<_e;Te++)t.texImage2D(n.TEXTURE_2D,Te,ye,j,xe,0,ge,Oe,null),j>>=1,xe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ie.parentNode!==j){j.appendChild(ie),d.add(_),j.onpaint=xe=>{const Te=xe.changedElements;for(const le of d)Te.includes(le.image)&&(le.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ie);else{const Te=n.RGBA,le=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Te,le,ke,ie)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(He&&et){const j=at(Be[0]);t.texStorage2D(n.TEXTURE_2D,_e,ye,j.width,j.height)}for(let j=0,xe=Be.length;j<xe;j++)ve=Be[j],He?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge,Oe,ve):t.texImage2D(n.TEXTURE_2D,j,ye,ge,Oe,ve);_.generateMipmaps=!1}else if(He){if(et){const j=at(ie);t.texStorage2D(n.TEXTURE_2D,_e,ye,j.width,j.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Oe,ie)}else t.texImage2D(n.TEXTURE_2D,0,ye,ge,Oe,ie);m(_)&&S(X),pe.__version=fe.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Xe(A,_,k){if(_.image.length!==6)return;const X=ft(A,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const fe=i.get(J);if(J.version!==fe.__version||X===!0){t.activeTexture(n.TEXTURE0+k);const pe=dt.getPrimaries(dt.workingColorSpace),Z=_.colorSpace===ns?null:dt.getPrimaries(_.colorSpace),ie=_.colorSpace===ns||pe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Oe=_.image[0]&&_.image[0].isDataTexture,ye=[];for(let le=0;le<6;le++)!ge&&!Oe?ye[le]=p(_.image[le],!0,s.maxCubemapSize):ye[le]=Oe?_.image[le].image:_.image[le],ye[le]=vt(_,ye[le]);const ve=ye[0],Be=r.convert(_.format,_.colorSpace),He=r.convert(_.type),et=M(_.internalFormat,Be,He,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,_e=fe.__version===void 0||X===!0,j=J.dataReady;let xe=b(_,ve);rt(n.TEXTURE_CUBE_MAP,_);let Te;if(ge){U&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,et,ve.width,ve.height);for(let le=0;le<6;le++){Te=ye[le].mipmaps;for(let ke=0;ke<Te.length;ke++){const Ne=Te[ke];_.format!==oi?Be!==null?U?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Ne.width,Ne.height,Be,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,et,Ne.width,Ne.height,0,Ne.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Ne.width,Ne.height,Be,He,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,et,Ne.width,Ne.height,0,Be,He,Ne.data)}}}else{if(Te=_.mipmaps,U&&_e){Te.length>0&&xe++;const le=at(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,et,le.width,le.height)}for(let le=0;le<6;le++)if(Oe){U?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ye[le].width,ye[le].height,Be,He,ye[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,ye[le].width,ye[le].height,0,Be,He,ye[le].data);for(let ke=0;ke<Te.length;ke++){const At=Te[ke].image[le].image;U?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,At.width,At.height,Be,He,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,et,At.width,At.height,0,Be,He,At.data)}}else{U?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Be,He,ye[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,Be,He,ye[le]);for(let ke=0;ke<Te.length;ke++){const Ne=Te[ke];U?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,Be,He,Ne.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,et,Be,He,Ne.image[le])}}}m(_)&&S(n.TEXTURE_CUBE_MAP),fe.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ae(A,_,k,X,J,fe){const pe=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),ie=M(k.internalFormat,pe,Z,k.normalized,k.colorSpace),ge=i.get(_),Oe=i.get(k);if(Oe.__renderTarget=_,!ge.__hasExternalTextures){const ye=Math.max(1,_.width>>fe),ve=Math.max(1,_.height>>fe);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,fe,ie,ye,ve,_.depth,0,pe,Z,null):t.texImage2D(J,fe,ie,ye,ve,0,pe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Qe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,Oe.__webglTexture,0,Ye(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,Oe.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(A,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const X=_.depthTexture,J=X&&X.isDepthTexture?X.type:null,fe=E(_.stencilBuffer,J),pe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(_),fe,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(_),fe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,fe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,A)}else{const X=_.textures;for(let J=0;J<X.length;J++){const fe=X[J],pe=r.convert(fe.format,fe.colorSpace),Z=r.convert(fe.type),ie=M(fe.internalFormat,pe,Z,fe.normalized,fe.colorSpace);Qe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(_),ie,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(_),ie,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ie,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(A,_,k){const X=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_.depthTexture);const ge=r.convert(_.depthTexture.format),Oe=r.convert(_.depthTexture.type);let ye;_.depthTexture.format===Yi?ye=n.DEPTH_COMPONENT24:_.depthTexture.format===Ms&&(ye=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ye,_.width,_.height,0,ge,Oe,null)}}else oe(_.depthTexture,0);const fe=J.__webglTexture,pe=Ye(_),Z=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ie=_.depthTexture.format===Ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Yi)Qe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Z,fe,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ie,Z,fe,0);else if(_.depthTexture.format===Ms)Qe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Z,fe,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ie,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(A){const _=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=X}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)yt(_.__webglFramebuffer[X],A,X);else{const X=A.texture.mipmaps;X&&X.length>0?yt(_.__webglFramebuffer[0],A,0):yt(_.__webglFramebuffer,A,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=n.createRenderbuffer(),$e(_.__webglDepthbuffer[X],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,fe)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),$e(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(A,_,k){const X=i.get(A);_!==void 0&&Ae(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&re(A)}function ue(A){const _=A.texture,k=i.get(A),X=i.get(_);A.addEventListener("dispose",v);const J=A.textures,fe=A.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=_.version,a.memory.textures++),fe){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let ie=0;ie<_.mipmaps.length;ie++)k.__webglFramebuffer[Z][ie]=n.createFramebuffer()}else k.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)k.__webglFramebuffer[Z]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Z=0,ie=J.length;Z<ie;Z++){const ge=i.get(J[Z]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Qe(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){const ie=J[Z];k.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const ge=r.convert(ie.format,ie.colorSpace),Oe=r.convert(ie.type),ye=M(ie.internalFormat,ge,Oe,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),ve=Ye(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ye,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Ae(k.__webglFramebuffer[Z][ie],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie);else Ae(k.__webglFramebuffer[Z],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Z=0,ie=J.length;Z<ie;Z++){const ge=J[Z],Oe=i.get(ge);let ye=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,Oe.__webglTexture),rt(ye,ge),Ae(k.__webglFramebuffer,A,ge,n.COLOR_ATTACHMENT0+Z,ye,0),m(ge)&&S(ye)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),rt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Ae(k.__webglFramebuffer[ie],A,_,n.COLOR_ATTACHMENT0,Z,ie);else Ae(k.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,Z,0);m(_)&&S(Z),t.unbindTexture()}A.depthBuffer&&re(A)}function he(A){const _=A.textures;for(let k=0,X=_.length;k<X;k++){const J=_[k];if(m(J)){const fe=T(A),pe=i.get(J).__webglTexture;t.bindTexture(fe,pe),S(fe),t.unbindTexture()}}}const me=[],Ve=[];function ze(A){if(A.samples>0){if(Qe(A)===!1){const _=A.textures,k=A.width,X=A.height;let J=n.COLOR_BUFFER_BIT;const fe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(A),Z=_.length>1;if(Z)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ie=A.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Oe=i.get(_[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,k,X,0,0,k,X,J,n.NEAREST),l===!0&&(me.length=0,Ve.length=0,me.push(n.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(me.push(fe),Ve.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Oe=i.get(_[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ye(A){return Math.min(s.maxSamples,A.samples)}function Qe(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function vt(A,_){const k=A.colorSpace,X=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==wo&&k!==ns&&(dt.getTransfer(k)===St?(X!==oi||J!==zn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",k)),_}function at(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=K,this.setTexture3D=ne,this.setTextureCube=ae,this.rebindTextures=ce,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yy(n,e){function t(i,s=ns){let r;const a=dt.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===_u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vf)return n.BYTE;if(i===Hf)return n.SHORT;if(i===la)return n.UNSIGNED_SHORT;if(i===vu)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Ci)return n.HALF_FLOAT;if(i===$f)return n.ALPHA;if(i===Yf)return n.RGB;if(i===oi)return n.RGBA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===Mu)return n.RED;if(i===yu)return n.RED_INTEGER;if(i===Ds)return n.RG;if(i===Su)return n.RG_INTEGER;if(i===bu)return n.RGBA_INTEGER;if(i===uo||i===ho||i===fo||i===po)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===vc||i===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===Mc||i===yc||i===Sc||i===bc||i===So||i===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xc||i===Mc)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sc)return r.COMPRESSED_R11_EAC;if(i===bc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===So)return r.COMPRESSED_RG11_EAC;if(i===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ec||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Ic||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ac)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ic)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kc||i===zc||i===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===kc)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vc||i===Hc||i===bo||i===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
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

}`;class Jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new rp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pi({vertexShader:qy,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zy extends Fs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",p=new Jy,m={},S=t.getContextAttributes();let T=null,M=null;const E=[],b=[],R=new de;let v=null,w=null;const C=new kn;C.viewport=new Ft;const D=new kn;D.viewport=new Ft;const B=[C,D],H=new sv;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=E[Q];return se===void 0&&(se=new Sl,E[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=E[Q];return se===void 0&&(se=new Sl,E[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=E[Q];return se===void 0&&(se=new Sl,E[Q]=se),se.getHandSpace()};function q(Q){const se=b.indexOf(Q.inputSource);if(se===-1)return;const be=E[se];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||a),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<E.length;Q++){const se=b[Q];se!==null&&(b[Q]=null,E[Q].disconnect(se))}I=null,z=null,p.reset();for(const Q in m)delete m[Q];if(e.setRenderTarget(T),f=null,h=null,d=null,s=null,M=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),w!==null){const Q=w.camera;Q.fov=w.fov,Q.zoom=w.zoom,Q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",$),s.addEventListener("inputsourceschange",oe),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Xe=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=S.stencil?Ms:Yi,Xe=S.stencil?ca:Ai);const $e={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Zn(h.textureWidth,h.textureHeight,{format:oi,type:zn,depthTexture:new da(h.textureWidth,h.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Zn(f.framebufferWidth,f.framebufferHeight,{format:oi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(Q){for(let se=0;se<Q.removed.length;se++){const be=Q.removed[se],Xe=b.indexOf(be);Xe>=0&&(b[Xe]=null,E[Xe].disconnect(be))}for(let se=0;se<Q.added.length;se++){const be=Q.added[se];let Xe=b.indexOf(be);if(Xe===-1){for(let $e=0;$e<E.length;$e++)if($e>=b.length){b.push(be),Xe=$e;break}else if(b[$e]===null){b[$e]=be,Xe=$e;break}if(Xe===-1)break}const Ae=E[Xe];Ae&&Ae.connect(be)}}const K=new P,ne=new P;function ae(Q,se,be){K.setFromMatrixPosition(se.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);const Xe=K.distanceTo(ne),Ae=se.projectionMatrix.elements,$e=be.projectionMatrix.elements,yt=Ae[14]/(Ae[10]-1),re=Ae[14]/(Ae[10]+1),ce=(Ae[9]+1)/Ae[5],ue=(Ae[9]-1)/Ae[5],he=(Ae[8]-1)/Ae[0],me=($e[8]+1)/$e[0],Ve=yt*he,ze=yt*me,Ye=Xe/(-he+me),Qe=Ye*-he;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qe),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const L=yt+Ye,vt=re+Ye,at=Ve-Qe,A=ze+(Xe-Qe),_=ce*re/vt*L,k=ue*re/vt*L;Q.projectionMatrix.makePerspective(at,A,_,k,L,vt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Fe(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,be=Q.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(be=p.depthFar)),H.near=D.near=C.near=se,H.far=D.far=C.far=be,(I!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,z=H.far),H.layers.mask=Q.layers.mask|6,C.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;const Xe=Q.parent,Ae=H.cameras;Fe(H,Xe);for(let $e=0;$e<Ae.length;$e++)Fe(Ae[$e],Xe);Ae.length===2?ae(H,C,D):H.projectionMatrix.copy(C.projectionMatrix),w===null&&Q.isPerspectiveCamera&&(w={camera:Q,fov:Q.fov,zoom:Q.zoom}),Le(Q,H,Xe)};function Le(Q,se,be){be===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ha*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(Q){return m[Q]};let gt=null;function rt(Q,se){if(u=se.getViewerPose(c||a),g=se,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Xe=!1;be.length!==H.cameras.length&&(H.cameras.length=0,Xe=!0);for(let re=0;re<be.length;re++){const ce=be[re];let ue=null;if(f!==null)ue=f.getViewport(ce);else{const me=d.getViewSubImage(h,ce);ue=me.viewport,re===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let he=B[re];he===void 0&&(he=new kn,he.layers.enable(re),he.viewport=new Ft,B[re]=he),he.matrix.fromArray(ce.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ce.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ue.x,ue.y,ue.width,ue.height),re===0&&(H.matrix.copy(he.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Xe===!0&&H.cameras.push(he)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const re=d.getDepthInformation(be[0]);re&&re.isValid&&re.texture&&p.init(re,s.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let re=0;re<be.length;re++){const ce=be[re].camera;if(ce){let ue=m[ce];ue||(ue=new rp,m[ce]=ue);const he=d.getCameraImage(ce);ue.sourceTexture=he}}}}for(let be=0;be<E.length;be++){const Xe=b[be],Ae=E[be];Xe!==null&&Ae!==void 0&&Ae.update(Xe,se,c||a)}gt&&gt(Q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const ft=new vp;ft.setAnimationLoop(rt),this.setAnimationLoop=function(Q){gt=Q},this.dispose=function(){}}}const Qy=new ut,wp=new je;wp.set(-1,0,0,0,1,0,0,0,1);function jy(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,pp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===In&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===In&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),T=S.envMap,M=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(wp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eS(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const b=E.program;i.uniformBlockBinding(M,b)}function c(M,E){let b=s[M.id];b===void 0&&(p(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",S));const R=E.program;i.updateUBOMapping(M,R);const v=e.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){const E=d();M.__bindingPointIndex=E;const b=n.createBuffer(),R=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const E=s[M.id],b=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,w=b.length;v<w;v++){const C=b[v];if(Array.isArray(C))for(let D=0,B=C.length;D<B;D++)f(C[D],v,D,R);else f(C,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,E,b,R){if(x(M,E,b,R)===!0){const v=M.__offset,w=M.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){const B=w[D],H=m(B);g(B,M.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function g(M,E,b){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,b)}function x(M,E,b,R){const v=M.value,w=E+"_"+b;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{const C=R[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(M){const E=M.uniforms;let b=0;const R=16;for(let w=0,C=E.length;w<C;w++){const D=Array.isArray(E[w])?E[w]:[E[w]];for(let B=0,H=D.length;B<H;B++){const I=D[B],z=Array.isArray(I.value)?I.value:[I.value];for(let q=0,$=z.length;q<$;q++){const oe=z[q],K=m(oe),ne=b%R,ae=ne%K.boundary,Fe=ne+ae;b+=ae,Fe!==0&&R-Fe<K.storage&&(b+=R-Fe),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=K.storage}}}const v=b%R;return v>0&&(b+=R-v),M.__size=b,M.__cache={},this}function m(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",M),E}function S(M){const E=M.target;E.removeEventListener("dispose",S);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const tS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function nS(){return vi===null&&(vi=new ip(tS,16,16,Ds,Ci),vi.name="DFG_LUT",vi.minFilter=Sn,vi.magFilter=Sn,vi.wrapS=Vi,vi.wrapT=Vi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class iS{constructor(e={}){const{canvas:t=bm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=f,p=new Set([bu,Su,yu]),m=new Set([zn,Ai,la,ca,_u,xu]),S=new Uint32Array(4),T=new Int32Array(4),M=new P;let E=null,b=null;const R=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,B=null,H=null,I=null,z=null;this._outputColorSpace=Mn;let q=0,$=0,oe=null,K=-1,ne=null;const ae=new Ft,Fe=new Ft;let Le=null;const gt=new We(0);let rt=0,ft=t.width,Q=t.height,se=1,be=null,Xe=null;const Ae=new Ft(0,0,ft,Q),$e=new Ft(0,0,ft,Q);let yt=!1;const re=new Ru;let ce=!1,ue=!1;const he=new ut,me=new P,Ve=new Ft,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Qe(){return oe===null?se:1}let L=i;function vt(y,N){return t.getContext(y,N)}let at,A,_,k,X,J,fe,pe,Z,ie,ge,Oe,ye,ve,Be,He,et,U,_e,j,xe,Te,le;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mu}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",ei,!1),L===null){const N="webgl2";if(L=vt(N,y),L===null)throw vt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(y){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),ht("WebGLRenderer: "+y.message),y}function ke(){at=new nM(L),at.init(),xe=new Yy(L,at),A=new $x(L,at,e,xe),_=new Xy(L,at),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),H=L.createFramebuffer(),I=L.createFramebuffer(),z=L.createFramebuffer(),k=new rM(L),X=new Ly,J=new $y(L,at,_,X,A,xe,k),fe=new tM(C),pe=new ov(L),Te=new Wx(L,pe),Z=new iM(L,pe,k,Te),ie=new oM(L,Z,pe,Te,k),U=new aM(L,A,J),Be=new Yx(X),ge=new Py(C,fe,at,A,Te,Be),Oe=new jy(C,X),ye=new Iy,ve=new ky(at),et=new Hx(C,fe,_,ie,g,l),He=new Wy(C,ie,A),le=new eS(L,k,A,_),_e=new Xx(L,at,k),j=new sM(L,at,k),k.programs=ge.programs,C.capabilities=A,C.extensions=at,C.properties=X,C.renderLists=ye,C.shadowMap=He,C.state=_,C.info=k}x!==zn&&(w=new cM(x,t.width,t.height,o,s,r));const Ne=new Zy(C,L);this.xr=Ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(y){y!==void 0&&(se=y,this.setSize(ft,Q,!1))},this.getSize=function(y){return y.set(ft,Q)},this.setSize=function(y,N,Y=!0){if(Ne.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=y,Q=N,t.width=Math.floor(y*se),t.height=Math.floor(N*se),Y===!0&&(t.style.width=y+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(ft*se,Q*se).floor()},this.setDrawingBufferSize=function(y,N,Y){ft=y,Q=N,se=Y,t.width=Math.floor(y*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(x===zn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ae)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,N,Y,G){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,N,Y,G),_.viewport(ae.copy(Ae).multiplyScalar(se).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,N,Y,G){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,N,Y,G),_.scissor(Fe.copy($e).multiplyScalar(se).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(y){_.setScissorTest(yt=y)},this.setOpaqueSort=function(y){be=y},this.setTransparentSort=function(y){Xe=y},this.getClearColor=function(y){return y.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,Y=!0){let G=0;if(y){let V=!1;if(oe!==null){const Ee=oe.texture.format;V=p.has(Ee)}if(V){const Ee=oe.texture.type,Pe=m.has(Ee),we=et.getClearColor(),De=et.getClearAlpha(),Ue=we.r,nt=we.g,ot=we.b;Pe?(S[0]=Ue,S[1]=nt,S[2]=ot,S[3]=De,L.clearBufferuiv(L.COLOR,0,S)):(T[0]=Ue,T[1]=nt,T[2]=ot,T[3]=De,L.clearBufferiv(L.COLOR,0,T))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),et.dispose(),ye.dispose(),ve.dispose(),X.dispose(),fe.dispose(),ie.dispose(),Te.dispose(),le.dispose(),ge.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",eh),Ne.removeEventListener("sessionend",th),us.stop()};function At(y){y.preventDefault(),Ao("WebGLRenderer: Context Lost."),D=!0}function _t(){Ao("WebGLRenderer: Context Restored."),D=!1;const y=k.autoReset,N=He.enabled,Y=He.autoUpdate,G=He.needsUpdate,V=He.type;ke(),k.autoReset=y,He.enabled=N,He.autoUpdate=Y,He.needsUpdate=G,He.type=V}function ei(y){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pi(y){const N=y.target;N.removeEventListener("dispose",pi),Hp(N)}function Hp(y){Wp(y),X.remove(y)}function Wp(y){const N=X.get(y).programs;N!==void 0&&(N.forEach(function(Y){ge.releaseProgram(Y)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,Y,G,V,Ee){N===null&&(N=ze);const Pe=V.isMesh&&V.matrixWorld.determinantAffine()<0,we=Yp(y,N,Y,G,V);_.setMaterial(G,Pe);let De=Y.index,Ue=1;if(G.wireframe===!0){if(De=Z.getWireframeAttribute(Y),De===void 0)return;Ue=2}const nt=Y.drawRange,ot=Y.attributes.position;let Ie=nt.start*Ue,xt=(nt.start+nt.count)*Ue;Ee!==null&&(Ie=Math.max(Ie,Ee.start*Ue),xt=Math.min(xt,(Ee.start+Ee.count)*Ue)),De!==null?(Ie=Math.max(Ie,0),xt=Math.min(xt,De.count)):ot!=null&&(Ie=Math.max(Ie,0),xt=Math.min(xt,ot.count));const Xt=xt-Ie;if(Xt<0||Xt===1/0)return;Te.setup(V,G,we,Y,De);let Lt,Tt=_e;if(De!==null&&(Lt=pe.get(De),Tt=j,Tt.setIndex(Lt)),V.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Qe()),Tt.setMode(L.LINES)):Tt.setMode(L.TRIANGLES);else if(V.isLine){let vn=G.linewidth;vn===void 0&&(vn=1),_.setLineWidth(vn*Qe()),V.isLineSegments?Tt.setMode(L.LINES):V.isLineLoop?Tt.setMode(L.LINE_LOOP):Tt.setMode(L.LINE_STRIP)}else V.isPoints?Tt.setMode(L.POINTS):V.isSprite&&Tt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const vn=V._multiDrawStarts,Ce=V._multiDrawCounts,wn=V._multiDrawCount,pt=De?pe.get(De).bytesPerElement:1,Wn=X.get(G).currentProgram.getUniforms();for(let mi=0;mi<wn;mi++)Wn.setValue(L,"_gl_DrawID",mi),Tt.render(vn[mi]/pt,Ce[mi])}else if(V.isInstancedMesh)Tt.renderInstances(Ie,Xt,V.count);else if(Y.isInstancedBufferGeometry){const vn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,vn);Tt.renderInstances(Ie,Xt,Ce)}else Tt.render(Ie,Xt)};function ju(y,N,Y,G){B!==null&&y.isNodeMaterial&&B.setObject(G,y),ce===!0&&Be.setState(y,Y,!1),y.transparent===!0&&y.side===yi&&y.forceSinglePass===!1?(y.side=In,y.needsUpdate=!0,Aa(y,N,G),y.side=Ps,y.needsUpdate=!0,Aa(y,N,G),y.side=yi):Aa(y,N,G)}this.compile=function(y,N,Y=null){Y===null&&(Y=y),B!==null&&B.renderStart(y,N,Y),b=ve.get(Y),b.init(N),v.push(b),Y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==Y&&y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),ue=this.localClippingEnabled,ce=Be.init(this.clippingPlanes,ue),ce===!0&&Be.setGlobalState(this.clippingPlanes,N),B!==null&&He.render(b.state.shadowsArray,Y,N);const G=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const we=Ee[Pe];ju(we,Y,N,V),G.add(we)}else ju(Ee,Y,N,V),G.add(Ee)}),b=v.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(y,N,Y=null){const G=this.compile(y,N,Y);return new Promise(V=>{function Ee(){if(G.forEach(function(Pe){const De=X.get(Pe).currentProgram;(De===void 0||De.isReady())&&G.delete(Pe)}),G.size===0){V(y);return}setTimeout(Ee,10)}at.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ul=null;function Xp(y){ul&&ul(y)}function eh(){us.stop()}function th(){us.start()}const us=new vp;us.setAnimationLoop(Xp),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(y){ul=y,Ne.setAnimationLoop(y),y===null?us.stop():us.start()},Ne.addEventListener("sessionstart",eh),Ne.addEventListener("sessionend",th),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(y,N);const Y=Ne.enabled===!0&&Ne.isPresenting===!0,G=w!==null&&(oe===null||Y)&&w.begin(C,oe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(N),N=Ne.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,N,oe),b=ve.get(y,v.length),b.init(N),b.state.textureUnits=J.getTextureUnits(),v.push(b),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),re.setFromProjectionMatrix(he,Si,N.reversedDepth),ue=this.localClippingEnabled,ce=Be.init(this.clippingPlanes,ue),E=ye.get(y,R.length),E.init(),R.push(E),Ne.enabled===!0&&Ne.isPresenting===!0){const Pe=C.xr.getDepthSensingMesh();Pe!==null&&hl(Pe,N,-1/0,C.sortObjects)}hl(y,N,0,C.sortObjects),E.finish(),B!==null&&B.updateLights(b.state.lightsArray),C.sortObjects===!0&&E.sort(be,Xe),Ye=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Ye&&et.addToRenderList(E,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Be.beginShadows();const V=b.state.shadowsArray;if(He.render(V,y,N),ce===!0&&Be.endShadows(),(G&&w.hasRenderPass())===!1){const Pe=E.opaque,we=E.transmissive;if(b.setupLights(),N.isArrayCamera){const De=N.cameras;if(we.length>0)for(let Ue=0,nt=De.length;Ue<nt;Ue++){const ot=De[Ue];ih(Pe,we,y,ot)}Ye&&et.render(y);for(let Ue=0,nt=De.length;Ue<nt;Ue++){const ot=De[Ue];nh(E,y,ot,ot.viewport)}}else we.length>0&&ih(Pe,we,y,N),Ye&&et.render(y),nh(E,y,N)}oe!==null&&$===0&&(J.updateMultisampleRenderTarget(oe),J.updateRenderTargetMipmap(oe)),G&&w.end(C),y.isScene===!0&&y.onAfterRender(C,y,N),Te.resetDefaultState(),K=-1,ne=null,v.pop(),v.length>0?(b=v[v.length-1],J.setTextureUnits(b.state.textureUnits),ce===!0&&Be.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,B!==null&&B.renderEnd()};function hl(y,N,Y,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(re)){G&&Ve.setFromMatrixPosition(y.matrixWorld).applyMatrix4(he);const Pe=ie.update(y),we=y.material;we.visible&&E.push(y,Pe,we,Y,Ve.z,null,N)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(re))){const Pe=ie.update(y),we=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ve.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ve.copy(Pe.boundingSphere.center)),Ve.applyMatrix4(y.matrixWorld).applyMatrix4(he)),Array.isArray(we)){const De=Pe.groups;for(let Ue=0,nt=De.length;Ue<nt;Ue++){const ot=De[Ue],Ie=we[ot.materialIndex];Ie&&Ie.visible&&E.push(y,Pe,Ie,Y,Ve.z,ot,N)}}else we.visible&&E.push(y,Pe,we,Y,Ve.z,null,N)}}const Ee=y.children;for(let Pe=0,we=Ee.length;Pe<we;Pe++)hl(Ee[Pe],N,Y,G)}function nh(y,N,Y,G){const{opaque:V,transmissive:Ee,transparent:Pe}=y;b.setupLightsView(Y),ce===!0&&Be.setGlobalState(C.clippingPlanes,Y),G&&_.viewport(ae.copy(G)),V.length>0&&Ta(V,N,Y),Ee.length>0&&Ta(Ee,N,Y),Pe.length>0&&Ta(Pe,N,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ih(y,N,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Ie=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Zn(1,1,{generateMipmaps:!0,type:Ie?Ci:zn,minFilter:xs,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Ee=b.state.transmissionRenderTarget[G.id],Pe=G.viewport||ae;Ee.setSize(Pe.z*C.transmissionResolutionScale,Pe.w*C.transmissionResolutionScale);const we=C.getRenderTarget(),De=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(gt),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),Ye&&et.render(Y);const nt=C.toneMapping;C.toneMapping=wi;const ot=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ce===!0&&Be.setGlobalState(C.clippingPlanes,G),Ta(y,Y,G),J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let xt=0,Xt=N.length;xt<Xt;xt++){const Lt=N[xt],{object:Tt,geometry:vn,material:Ce,group:wn}=Lt;if(Ce.side===yi&&Tt.layers.test(G.layers)){const pt=Ce.side;Ce.side=In,Ce.needsUpdate=!0,sh(Tt,Y,G,vn,Ce,wn),Ce.side=pt,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee))}C.setRenderTarget(we,De,Ue),C.setClearColor(gt,rt),ot!==void 0&&(G.viewport=ot),C.toneMapping=nt}function Ta(y,N,Y){const G=N.isScene===!0?N.overrideMaterial:null;for(let V=0,Ee=y.length;V<Ee;V++){const Pe=y[V],{object:we,geometry:De,group:Ue}=Pe;let nt=Pe.material;nt.allowOverride===!0&&G!==null&&(nt=G),we.layers.test(Y.layers)&&sh(we,N,Y,De,nt,Ue)}}function sh(y,N,Y,G,V,Ee){B!==null&&V.isNodeMaterial&&B.setObject(y,V),y.onBeforeRender(C,N,Y,G,V,Ee),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(C,N,Y,G,y,Ee),V.transparent===!0&&V.side===yi&&V.forceSinglePass===!1?(V.side=In,V.needsUpdate=!0,C.renderBufferDirect(Y,N,G,V,y,Ee),V.side=Ps,V.needsUpdate=!0,C.renderBufferDirect(Y,N,G,V,y,Ee),V.side=yi):C.renderBufferDirect(Y,N,G,V,y,Ee),y.onAfterRender(C,N,Y,G,V,Ee)}function Aa(y,N,Y){N.isScene!==!0&&(N=ze);const G=X.get(y),V=b.state.lights,Ee=b.state.shadowsArray,Pe=V.state.version,we=ge.getParameters(y,V.state,Ee,N,Y,b.state.lightProbeGridArray),De=ge.getProgramCacheKey(we);let Ue=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const nt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=fe.get(y.envMap||G.environment,nt),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",pi),Ue=new Map,G.programs=Ue);let ot=Ue.get(De);if(ot!==void 0){if(G.currentProgram===ot&&G.lightsStateVersion===Pe)return ah(y,we),ot}else we.uniforms=ge.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,Y,we),y.onBeforeCompile(we,C),ot=ge.acquireProgram(we,De),Ue.set(De,ot),G.uniforms=we.uniforms;const Ie=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=Be.uniform),ah(y,we),G.needsLights=Kp(y),G.lightsStateVersion=Pe,G.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.sunLights.value=V.state.sun,Ie.sunLightShadows.value=V.state.sunShadow,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.sunShadowMatrix.value=V.state.sunShadowMatrix,Ie.sunShadowCascade.value=V.state.sunShadowCascade,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=ot,G.uniformsList=null,ot}function rh(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=mo.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function ah(y,N){const Y=X.get(y);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function $p(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let Y=0,G=y.length;Y<G;Y++){const V=y[Y];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function Yp(y,N,Y,G,V){N.isScene!==!0&&(N=ze),J.resetTextureUnits();const Ee=N.fog,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,we=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:dt.workingColorSpace,De=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=fe.get(G.envMap||Pe,De),nt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ot=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!Y.morphAttributes.position,xt=!!Y.morphAttributes.normal,Xt=!!Y.morphAttributes.color;let Lt=wi;G.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Lt=C.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vn=Tt!==void 0?Tt.length:0,Ce=X.get(G),wn=b.state.lights;if(ce===!0&&(ue===!0||y!==ne)){const Ct=y===ne&&G.id===K;Be.setState(G,y,Ct)}let pt=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==wn.state.version||Ce.outputColorSpace!==we||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==Ue||G.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Be.numPlanes||Ce.numIntersection!==Be.numIntersection)||Ce.vertexAlphas!==nt||Ce.vertexTangents!==ot||Ce.morphTargets!==Ie||Ce.morphNormals!==xt||Ce.morphColors!==Xt||Ce.toneMapping!==Lt||Ce.morphTargetsCount!==vn||!!Ce.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ce.__version=G.version);let Wn=Ce.currentProgram;pt===!0&&(Wn=Aa(G,N,V),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Wn,Ce));let mi=!1,qi=!1,Gs=!1;const wt=Wn.getUniforms(),zt=Ce.uniforms;if(_.useProgram(Wn.program)&&(mi=!0,qi=!0,Gs=!0),G.id!==K&&(K=G.id,qi=!0),Ce.needsLights){const Ct=$p(b.state.lightProbeGridArray,V);Ce.lightProbeGrid!==Ct&&(Ce.lightProbeGrid=Ct,qi=!0)}if(mi||ne!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),wt.setValue(L,"projectionMatrix",y.projectionMatrix),wt.setValue(L,"viewMatrix",y.matrixWorldInverse);const Ji=wt.map.cameraPosition;Ji!==void 0&&Ji.setValue(L,me.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&wt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&wt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),ne!==y&&(ne=y,qi=!0,Gs=!0)}if(Ce.needsLights&&(wn.state.sunShadowMap.length>0&&wt.setValue(L,"sunShadowMap",wn.state.sunShadowMap,J),wn.state.directionalShadowMap.length>0&&wt.setValue(L,"directionalShadowMap",wn.state.directionalShadowMap,J),wn.state.spotShadowMap.length>0&&wt.setValue(L,"spotShadowMap",wn.state.spotShadowMap,J),wn.state.pointShadowMap.length>0&&wt.setValue(L,"pointShadowMap",wn.state.pointShadowMap,J)),V.isSkinnedMesh){wt.setOptional(L,V,"bindMatrix"),wt.setOptional(L,V,"bindMatrixInverse");const Ct=V.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),wt.setValue(L,"boneTexture",Ct.boneTexture,J))}V.isBatchedMesh&&(wt.setOptional(L,V,"batchingTexture"),wt.setValue(L,"batchingTexture",V._matricesTexture,J),wt.setOptional(L,V,"batchingIdTexture"),wt.setValue(L,"batchingIdTexture",V._indirectTexture,J),wt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&wt.setValue(L,"batchingColorTexture",V._colorsTexture,J));const Ki=Y.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&U.update(V,Y,Wn),(qi||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,wt.setValue(L,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(zt.envMapIntensity.value=N.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=nS()),qi){if(wt.setValue(L,"toneMappingExposure",C.toneMappingExposure),Ce.needsLights&&qp(zt,Gs),Ee&&G.fog===!0&&Oe.refreshFogUniforms(zt,Ee),Oe.refreshMaterialUniforms(zt,G,se,Q,b.state.transmissionRenderTarget[y.id]),Ce.needsLights&&Ce.lightProbeGrid){const Ct=Ce.lightProbeGrid;zt.probesSH.value=Ct.texture,zt.probesMin.value.copy(Ct.boundingBox.min),zt.probesMax.value.copy(Ct.boundingBox.max),zt.probesResolution.value.copy(Ct.resolution)}mo.upload(L,rh(Ce),zt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(mo.upload(L,rh(Ce),zt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&wt.setValue(L,"center",V.center),wt.setValue(L,"modelViewMatrix",V.modelViewMatrix),wt.setValue(L,"normalMatrix",V.normalMatrix),wt.setValue(L,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const Ct=G.uniformsGroups;for(let Ji=0,Vs=Ct.length;Ji<Vs;Ji++){const lh=Ct[Ji];le.update(lh,Wn),le.bind(lh,Wn)}}return Wn}function qp(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Kp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(y,N,Y){const G=X.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=N,X.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const Y=X.get(y);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,Y=0){oe=y,q=N,$=Y;let G=null,V=!1,Ee=!1;if(y){const we=X.get(y);if(we.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,we.__webglFramebuffer),ae.copy(y.viewport),Fe.copy(y.scissor),Le=y.scissorTest,_.viewport(ae),_.scissor(Fe),_.setScissorTest(Le),K=-1;return}else if(we.__webglFramebuffer===void 0)J.setupRenderTarget(y);else if(we.__hasExternalTextures)J.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const nt=y.depthTexture;if(we.__boundDepthTexture!==nt){if(nt!==null&&X.has(nt)&&(y.width!==nt.image.width||y.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(y)}}const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);const Ue=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?G=Ue[N][Y]:G=Ue[N],V=!0):y.samples>0&&J.useMultisampledRTT(y)===!1?G=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[Y]:G=Ue,ae.copy(y.viewport),Fe.copy(y.scissor),Le=y.scissorTest}else ae.copy(Ae).multiplyScalar(se).floor(),Fe.copy($e).multiplyScalar(se).floor(),Le=yt;if(Y!==0&&(G=H),_.bindFramebuffer(L.FRAMEBUFFER,G)&&_.drawBuffers(y,G),_.viewport(ae),_.scissor(Fe),_.setScissorTest(Le),V){const we=X.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,Y)}else if(Ee){const we=N;for(let De=0;De<y.textures.length;De++){const Ue=X.get(y.textures[De]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+De,Ue.__webglTexture,Y,we)}}else if(y!==null&&Y!==0){const we=X.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,Y)}K=-1};function oh(y){const N=X.get(y);return(N.__readFormat!==y.format||N.__readType!==y.type)&&(N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=A.textureFormatReadable(y.format),N.__typeReadable=A.textureTypeReadable(y.type)),N}this.readRenderTargetPixels=function(y,N,Y,G,V,Ee,Pe,we=0){if(!(y&&y.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){_.bindFramebuffer(L.FRAMEBUFFER,De);try{const Ue=y.textures[we],nt=Ue.format,ot=Ue.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);const Ie=oh(Ue);if(Ie.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&Y>=0&&Y<=y.height-V&&L.readPixels(N,Y,G,V,xe.convert(nt),xe.convert(ot),Ee)}finally{const Ue=oe!==null?X.get(oe).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,N,Y,G,V,Ee,Pe,we=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(N>=0&&N<=y.width-G&&Y>=0&&Y<=y.height-V){_.bindFramebuffer(L.FRAMEBUFFER,De);const Ue=y.textures[we],nt=Ue.format,ot=Ue.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);const Ie=oh(Ue);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,xt),L.bufferData(L.PIXEL_PACK_BUFFER,Ee.byteLength,L.STREAM_READ),L.readPixels(N,Y,G,V,xe.convert(nt),xe.convert(ot),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Xt=oe!==null?X.get(oe).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Xt);const Lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wm(L,Lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ee),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(xt),L.deleteSync(Lt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,Y=0){const G=Math.pow(2,-Y),V=Math.floor(y.image.width*G),Ee=Math.floor(y.image.height*G),Pe=N!==null?N.x:0,we=N!==null?N.y:0;J.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Pe,we,V,Ee),_.unbindTexture()},this.copyTextureToTexture=function(y,N,Y=null,G=null,V=0,Ee=0){let Pe,we,De,Ue,nt,ot,Ie,xt,Xt;const Lt=y.isCompressedTexture?y.mipmaps[Ee]:y.image;if(Y!==null)Pe=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,nt=Y.min.y,ot=Y.isBox3?Y.min.z:0;else{const zt=Math.pow(2,-V);Pe=Math.floor(Lt.width*zt),we=Math.floor(Lt.height*zt),y.isDataArrayTexture?De=Lt.depth:y.isData3DTexture?De=Math.floor(Lt.depth*zt):De=1,Ue=0,nt=0,ot=0}G!==null?(Ie=G.x,xt=G.y,Xt=G.z):(Ie=0,xt=0,Xt=0);const Tt=xe.convert(N.format),vn=xe.convert(N.type);let Ce;N.isData3DTexture?(J.setTexture3D(N,0),Ce=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Ce=L.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Ce=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const wn=_.getParameter(L.UNPACK_ROW_LENGTH),pt=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Wn=_.getParameter(L.UNPACK_SKIP_PIXELS),mi=_.getParameter(L.UNPACK_SKIP_ROWS),qi=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),_.pixelStorei(L.UNPACK_SKIP_ROWS,nt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ot);const Gs=y.isDataArrayTexture||y.isData3DTexture,wt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const zt=X.get(y),Ki=X.get(N),Ct=X.get(zt.__renderTarget),Ji=X.get(Ki.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Vs=0;Vs<De;Vs++)Gs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(y).__webglTexture,V,ot+Vs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(N).__webglTexture,Ee,Xt+Vs)),L.blitFramebuffer(Ue,nt,Pe,we,Ie,xt,Pe,we,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||X.has(y)){const zt=X.get(y),Ki=X.get(N);_.bindFramebuffer(L.READ_FRAMEBUFFER,I),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let Ct=0;Ct<De;Ct++)Gs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,V,ot+Ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zt.__webglTexture,V),wt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ki.__webglTexture,Ee,Xt+Ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ki.__webglTexture,Ee),V!==0?L.blitFramebuffer(Ue,nt,Pe,we,Ie,xt,Pe,we,L.COLOR_BUFFER_BIT,L.NEAREST):wt?L.copyTexSubImage3D(Ce,Ee,Ie,xt,Xt+Ct,Ue,nt,Pe,we):L.copyTexSubImage2D(Ce,Ee,Ie,xt,Ue,nt,Pe,we);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else wt?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Ce,Ee,Ie,xt,Xt,Pe,we,De,Tt,vn,Lt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,Ee,Ie,xt,Xt,Pe,we,De,Tt,Lt.data):L.texSubImage3D(Ce,Ee,Ie,xt,Xt,Pe,we,De,Tt,vn,Lt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ee,Ie,xt,Pe,we,Tt,vn,Lt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ee,Ie,xt,Lt.width,Lt.height,Tt,Lt.data):L.texSubImage2D(L.TEXTURE_2D,Ee,Ie,xt,Pe,we,Tt,vn,Lt);_.pixelStorei(L.UNPACK_ROW_LENGTH,wn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Wn),_.pixelStorei(L.UNPACK_SKIP_ROWS,mi),_.pixelStorei(L.UNPACK_SKIP_IMAGES,qi),Ee===0&&N.generateMipmaps&&L.generateMipmap(Ce),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&J.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?J.setTextureCube(y,0):y.isData3DTexture?J.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?J.setTexture2DArray(y,0):J.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){q=0,$=0,oe=null,_.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const sS=.001;function rS(n,e){return{col:{x:Math.cos(n),y:Math.sin(e)*Math.sin(n)},row:{x:-Math.sin(n),y:Math.sin(e)*Math.cos(n)}}}function aS(n,e,t=sS){const i=g=>{const x=Math.hypot(g.x,g.y)||1;return{x:g.x/x,y:g.y/x}},s=i(n),r=i(e),a=g=>g<-t?-1:1,o=Math.abs(s.x)-Math.abs(r.x),l=o>t?!0:o<-t?!1:a(s.x)*s.y>=a(r.x)*r.y-t,c=l?s:r,u=l?r:s,d=a(c.x),h=a(u.y),f=(g,x)=>g?{dx:x,dy:0}:{dx:0,dy:x};return{ArrowRight:f(l,d),ArrowLeft:f(l,-d),ArrowDown:f(!l,h),ArrowUp:f(!l,-h)}}function oS(n,e){const{col:t,row:i}=rS(n,e);return aS(t,i)}const $r=new P;function $n(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;$r.copy(e),$r[i]=0,$r.normalize();const c=.5*a/(a+o),u=1-$r.angleTo(n)/l;return Math.sign($r[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Jo extends Ii{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,u=new P(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new P,p=.5/a;for(let m=0,S=0;m<d.length;m+=3,S+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*r,d[m+1]=u.y*Math.sign(l.y)+c.y*r,d[m+2]=u.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[S+0]=$n(x,c,"z","y",r,i),f[S+1]=1-$n(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[S+0]=1-$n(x,c,"z","y",r,i),f[S+1]=1-$n(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[S+0]=1-$n(x,c,"x","z",r,e),f[S+1]=$n(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[S+0]=1-$n(x,c,"x","z",r,e),f[S+1]=1-$n(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[S+0]=1-$n(x,c,"x","y",r,e),f[S+1]=1-$n(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[S+0]=$n(x,c,"x","y",r,e),f[S+1]=1-$n(x,c,"y","x",r,t);break}}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.segments,e.radius)}}function lS(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new cn;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=kd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][h]);const g=kd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function kd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Cn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const x=u.getComponent(h,g);o.setComponent(h+d,g,x)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function O(n,e,t={}){const i=new ut().compose(new P(...t.p??[0,0,0]),new jn().setFromEuler(new fi(...t.r??[0,0,0])),new P(...t.s??[1,1,1]));return{geo:n.clone().applyMatrix4(i),color:e,glow:t.glow}}const Ut=(n,e,t={})=>O(n,e,{...t,glow:!0});function Zo(n,e,t,i,s=0,r=1){const a=new ut().compose(new P(e,t,i),new jn().setFromEuler(new fi(0,s,0)),new P(r,r,r));return n.map(o=>({geo:o.geo.clone().applyMatrix4(a),color:o.color,glow:o.glow}))}function Po(n,e=.5,t=0){const i=n.map(({geo:r,color:a,glow:o})=>{const l=r.index?r.toNonIndexed():r.clone();for(const h of Object.keys(l.attributes))h!=="position"&&h!=="normal"&&l.deleteAttribute(h);l.getAttribute("normal")||l.computeVertexNormals();const c=l.getAttribute("position"),u=new Float32Array(c.count*3),d=new We(a);for(let h=0;h<c.count;h++){const f=c.getY(h)-t,g=o?1:e>0?.72+.28*Math.min(1,Math.max(0,f/e)):1;u[h*3]=d.r*g,u[h*3+1]=d.g*g,u[h*3+2]=d.b*g}return l.setAttribute("color",new Cn(u,3)),l});if(!i.length){const r=new cn;return r.setAttribute("position",new Pt([],3)),r.setAttribute("normal",new Pt([],3)),r.setAttribute("color",new Pt([],3)),r}const s=lS(i,!1);return s.computeBoundingSphere(),s}function Ep(n,e){const t=n.filter(s=>!s.glow),i=n.filter(s=>s.glow);return{body:Po(t,e),glow:i.length?Po(i,0):null}}const qe=(n,e,t)=>new Ii(n,e,t),Dt=(n,e,t,i=8)=>new Ri(n,e,t,i),li=(n,e,t=8)=>new Pu(n,e,t),on=(n,e=0)=>new Iu(n,e),Je=(n,e,t,i=.035)=>new Jo(n,e,t,2,Math.min(i,n/2-.001,e/2-.001,t/2-.001));function Es(n,e,t){const i=n.index?n.toNonIndexed():n,s=i.getAttribute("position"),r=c=>`${s.getX(c).toFixed(3)},${s.getY(c).toFixed(3)},${s.getZ(c).toFixed(3)}`,a=new Map;let o=t;const l=()=>(o=o*16807%2147483647,o/2147483647-.5);for(let c=0;c<s.count;c++){const u=r(c);a.has(u)||a.set(u,[l()*e,l()*e,l()*e]);const d=a.get(u);s.setXYZ(c,s.getX(c)+d[0],s.getY(c)+d[1],s.getZ(c)+d[2])}return i.computeVertexNormals(),i}function cS(n,e,t){const i=new Rr;i.moveTo(-e/2,0),i.lineTo(e/2,0),i.lineTo(0,t),i.closePath();const s=new Bs(i,{depth:n,bevelEnabled:!1});return s.translate(0,0,-n/2),s.rotateY(Math.PI/2),s}const Xi=(n,e)=>Es(on(n,1),n*.12,e);function ri(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function zd(n){const e=n.index?n.toNonIndexed():n.clone();return e.computeVertexNormals(),e}const Ts=11591802,uS=13789486;function Ou(n=Ts,e=uS){const t=[O(new Ii(.08,.3,.08),e,{p:[0,.15,0]})],i=[[.25,.3,.05,.2,.17],[.42,.265,.045,.18,.145],[.57,.225,.04,.16,.115],[.71,.19,.035,.3,0]];for(const[s,r,a,o,l]of i)t.push(O(zd(new Ri(r,r*.82,a,8)),n,{p:[0,s+a/2,0]})),t.push(O(zd(new Ri(Math.max(.001,l),r,o,8)),n,{p:[0,s+a+o/2,0]}));return t}const Me={tile:6972072,tileEdge:5656210,grassEdge:7037612,soilLight:11831920,grassTop:5984920,grassLight:7103658,grassDark:4866690,soilDark:8018512,soilDeep:5914692,leafLight:507e4,leaf:4148382,leafMid:3621775,leafDark:2963324,pine:4165510,pineLight:5613714,trunk:8015976,stripe:15891590,wall:16250095,plank:13808028,plankDark:11767676,roof:15891590,glowWarm:16758876,beacon:16740221,flameOuter:16751165,flameInner:16770202,rock:8353704,rockLight:9801149,rockDark:6971796,moss:5929164,flag:15891590,flowerPink:16228789,flowerWhite:16777215,white:16777215},ee={white:16250612,cream:16248546,paving:15659766,pavingDark:14279145,skyDeep:5083114,tealDeep:2599838,coral:16743792,peach:16757896,butter:16768370,gold:16301384,silver:14870254,slateBlue:7309516,roofRed:15884651,roofBlue:6066152,winWarm:16771e3,winCool:14086655,winPink:16766694,green:8440655,greenLight:11591294,greenDark:6268990};function Nt(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){const s=new ut().compose(new P(...e),new jn().setFromEuler(new fi(...t)),new P(...i));return n.map(r=>({geo:r.geo.clone().applyMatrix4(s),color:r.color,glow:r.glow}))}function hS(n,e,t=0){for(const i of n){const s=i.geo.getAttribute("position");for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+Math.max(0,s.getY(r)-t)*e);s.needsUpdate=!0}return n}function ct(n,e,t,i){const s=1/Math.cos(Math.PI/n),r=new Ri(Math.max(5e-4,t*s),e*s,i,n);return n===4&&r.rotateY(Math.PI/4),n===8&&r.rotateY(Math.PI/8),r.translate(0,i/2,0),r}function As(n,e,t){return new We(n).lerp(new We(e),t).getHex()}function Zt(n){const e=n.seg??4,t=n.w,i=n.top??n.w,s=n.y??0,r=n.glow??ee.winWarm,a=n.lit??.4,o=n.seed??1,l=n.style??"glass",c=Math.abs(t-i)<1e-6,u=Math.max(1,Math.round(n.h/(n.floor??.2))),d=n.h/u,h=v=>t+(i-t)*(v/n.h),f=l==="grid"?n.body:n.glass,g=l==="grid"?As(n.body,16777215,.6):n.body,x=l==="grid"?n.glass:As(n.glass,1910096,.42),p=[],m=(v,w,C,D)=>p.push(O(ct(e,h(v)+C,h(Math.min(n.h,v+w))+C,w),D,{p:[0,s+v,0]})),S=v=>(v+.5)/e*Math.PI*2+(e===4?Math.PI/4:e===8?Math.PI/8:0),T=e>=12,M=T?12:e,E=v=>T?v/Math.cos(Math.PI/e):v,b=v=>T?2*Math.PI*v/M:2*v*Math.tan(Math.PI/e);p.push(e===4&&c?O(Je(2*t,n.h,2*t,Math.min(.045,t*.18)),f,{p:[0,s+n.h/2,0]}):O(ct(e,t,i,n.h),f,{p:[0,s,0]}));const R=l==="ribbon"?1:2;for(let v=R;v<u;v+=R)m(v*d-.014,.028,.014,g);m(0,.035,.016,g),m(n.h-.045,.06,.022,g);for(let v=0;v<u;v++){const w=h(v*d+d/2),C=b(w),D=T?1:Math.max(1,Math.round(C/(l==="fins"?.12:l==="ribbon"?.3:.16))),H=C/D*(l==="fins"?.42:l==="ribbon"?.8:.62),I=d*(l==="fins"?.66:.52);for(let z=0;z<M;z++){const q=T?(z+.5)/M*Math.PI*2:S(z);for(let $=0;$<D;$++){const oe=ri(o*13+v*7+z,$)<a,K=(-.5+($+.5)/D)*C,ne=qe(H,I,.016).translate(K,s+v*d+d*.52,E(w)+.006);p.push({geo:ne.rotateY(q),color:oe?r:x,glow:oe})}if(l==="fins"&&!T)for(let $=1;$<D;$++){const oe=(-.5+$/D)*C;p.push({geo:qe(.02,d*.9,.03).translate(oe,s+v*d+d*.5,E(w)+.012).rotateY(q),color:g})}}}return p}const Kl=(n,e,t,i,s,r=!1)=>O(ct(n,e,0,t),i,{p:[0,s,0],glow:r});function qt(n,e,t=ee.silver,i=Me.beacon){return[O(Dt(.008,.028,e,6),t,{p:[0,n+e/2,0]}),Ut(on(.028,0),i,{p:[0,n+e,0]})]}function dS(n,e,t,i,s){const r=new Rr;r.moveTo(-n,0),r.lineTo(n,0),r.lineTo(-n,t),r.closePath();const a=new Bs(r,{depth:2*e,bevelEnabled:!1}).translate(0,0,-e);return O(a,i,{p:[0,s,0]})}const fS=(n,e,t,i=[Math.PI/2,0,0],s=.018)=>Ut(new mr(n,s,4,24),t,{p:[0,e,0],r:i});function pS(n,e,t){return[O(qe(n*.5,.06,n*.4),ee.silver,{p:[-n*.3,e+.03,n*.25]}),O(qe(n*.3,.08,n*.3),ee.paving,{p:[n*.35,e+.04,-n*.3+ri(t,2)*.04]}),O(Dt(n*.16,n*.16,.09,8),ee.pavingDark,{p:[n*.3,e+.045,n*.3]})]}function Qo(n,e,t=1,i=Ts,s=0,r=1){const a=i===Ts||i===ee.green?Ts:9883747;return Zo(Ou(a),n,s,e,r%8*.4,.3*t)}const mS=.055;function gS(){return[O(Je(.36,.04,.3,.018),Me.grassDark,{p:[0,.02,0]}),O(Xi(.15,51),ee.green,{p:[0,.13,0],s:[1,.85,1]}),O(Xi(.11,52),ee.greenLight,{p:[.11,.15,.06]}),O(Xi(.1,53),ee.greenDark,{p:[-.11,.1,.06]}),O(on(.026,0),Me.flowerPink,{p:[.04,.25,.09]}),O(on(.022,0),Me.flowerWhite,{p:[-.07,.2,.12]})]}function vS(){return[O(Dt(.16,.18,.035,8),Me.grassDark,{p:[0,.0175,0]}),...Zo(Ou(),0,.035,0,.3,.78)]}const ci=(n,e=.22)=>As(n,1910096,e),Bu=(n,e,t=0,i=0)=>[O(Je(n,.045,e,.02),Me.grassDark,{p:[t,.0225,i]}),O(Je(n-.04,.02,e-.04,.01),Me.grassLight,{p:[t,.045,i]})];function Lo(n,e,t,i,s,r,a=.05,o=.05){const l=e/2,c=Math.atan2(t,l),u=Math.hypot(l,t)+a,d=[O(cS(n-.01,e-.01,t),r,{p:[0,i,0]})];for(const h of[1,-1]){const f=h*(l/2+o/2*Math.sin(c)+a/2*Math.cos(c)),g=i+t/2+o/2*Math.cos(c)-a/2*Math.sin(c);d.push(O(Je(n+2*a,o,u,.016),s,{p:[0,g,f],r:[h*c,0,0]}))}return d.push(O(Je(n+2*a+.01,.04,.06,.015),ci(s,.12),{p:[0,i+t+o*Math.cos(c)-.008,0]})),d}function hn(n,e,t,i,s,r,a=ee.skyDeep){return[O(qe(i+.036,s+.036,.016),ee.white,{p:[n,e,t]}),O(qe(i,s,.02),r?ee.winWarm:a,{p:[n,e,t+.004],glow:r}),O(qe(.014,s,.026),ee.white,{p:[n,e,t+.006]}),O(qe(i,.014,.026),ee.white,{p:[n,e,t+.006]}),O(qe(i+.05,.02,.04),ee.white,{p:[n,e-s/2-.016,t+.012]})]}function ku(n,e,t,i,s,r=0){return[O(qe(t+.034,i+.017,.016),ee.white,{p:[n,r+(i+.017)/2,e]}),O(qe(t,i,.022),s,{p:[n,r+i/2,e+.004]}),Ut(qe(.016,.016,.012),ee.winWarm,{p:[n+t*.3,r+i*.48,e+.018]}),O(Je(t+.07,.03,.07,.008),ee.paving,{p:[n,r+.015,e+.035]})]}const hi=(n,e,t=[0,0,0])=>Nt(n,t,[0,e===2?Math.PI:e*Math.PI/2,0]);function Er(n,e,t=1,i=.045,s=1){return[O(Xi(.07*t,s),ee.green,{p:[n,i+.05*t,e],s:[1,.85,1]}),O(Xi(.05*t,s+1),ee.greenLight,{p:[n+.045*t,i+.06*t,e+.03*t]})]}function _S(){const s=ee.white;return[...Bu(.76,.68),...Nt([O(Je(.46+.016,.04,.38+.016,.012),ci(ee.paving,.1),{p:[0,.045+.02,0]}),O(Je(.46,.27,.38,.026),s,{p:[0,.045+.27/2,0]}),O(Je(.08,.24,.08,.014),ee.coral,{p:[.12,.045+.27+.16,-.07]}),O(Je(.1,.035,.1,.01),ci(ee.coral,.3),{p:[.12,.045+.27+.29,-.07]}),...Lo(.46,.38,.21,.045+.27,ee.roofRed,s),...ku(.11,.38/2,.095,.16,ee.skyDeep,.045),...hn(-.1,.045+.14,.38/2,.12,.1,!0),...hi(hn(0,.045+.14,.46/2,.13,.1,!0),1),...hi(hn(0,.045+.14,.46/2,.13,.1,!1),-1)],[-.04,0,-.06]),O(Je(.07,.012,.06,.006),ee.paving,{p:[.07,.05,.22]}),...Er(-.26,.22,1,.045,74),...Qo(.26,.2,.85,Ts,.045,75)]}function xS(){const s=ee.cream,r=ee.roofBlue,a=(l,c,u,d)=>[-1,1].map(h=>O(qe(.035,d,.014),r,{p:[l+h*.085,c,u+.006]})),o=[O(Je(.24,.29,.2,.024),s,{p:[0,.045+.29/2,0]}),...hi(Lo(.2,.24,.15,.045+.29,r,s,.04,.045),1),...hn(0,.045+.15,.1,.12,.11,!0)];return[...Bu(.84,.74),...Nt([O(Je(.56+.016,.04,.38+.016,.012),ci(ee.paving,.1),{p:[0,.045+.02,0]}),O(Je(.56,.29,.38,.026),s,{p:[0,.045+.29/2,0]}),O(Je(.085,.26,.085,.014),ee.coral,{p:[-.16,.045+.29+.17,-.07]}),O(Je(.105,.035,.105,.01),ci(ee.coral,.3),{p:[-.16,.045+.29+.31,-.07]}),...Lo(.56,.38,.23,.045+.29,r,s),...Nt(o,[.13,0,.38/2+.06]),...ku(-.06,.38/2,.1,.17,ee.coral,.045),...hn(-.19,.045+.15,.38/2,.1,.1,!0),...a(-.19,.045+.15,.38/2,.12),...hi(hn(-.05,.045+.15,.56/2,.12,.1,!1),1),...hi(hn(0,.045+.15,.56/2,.12,.1,!0),-1)],[-.02,0,-.08]),O(Je(.07,.012,.06,.006),ee.paving,{p:[-.08,.05,.22]}),O(Je(.07,.012,.06,.006),ee.paving,{p:[-.06,.05,.31]}),...Er(-.3,.24,1.05,.045,71),...Er(.3,.27,.8,.045,73),...Qo(.31,-.27,.8,9883747,.045,72)]}function MS(){const s=ee.butter,r=ee.tealDeep,a=-.1,o=[O(Je(.46+.016,.04,.42+.016,.012),ci(ee.paving,.1),{p:[0,.045+.02,0]}),O(Je(.46,.5,.42,.028),s,{p:[0,.045+.5/2,0]}),O(qe(.46+.014,.03,.42+.014),ee.white,{p:[0,.045+.25,0]}),O(Je(.085,.26,.085,.014),ee.coral,{p:[-.13,.045+.5+.17,-.08]}),O(Je(.105,.035,.105,.01),ci(ee.coral,.3),{p:[-.13,.045+.5+.31,-.08]}),...Lo(.46,.42,.24,.045+.5,r,s),...ku(-.1,.42/2,.1,.17,ee.coral,.045),O(Je(.22,.03,.13,.01),r,{p:[-.1,.045+.22,.42/2+.055]}),...[-.19,-.01].map(c=>O(Je(.022,.2,.022,.006),ee.white,{p:[c,.045+.1,.42/2+.1]})),...hn(.11,.045+.13,.42/2,.12,.1,!0),...hn(-.1,.045+.38,.42/2,.12,.1,!0),...hn(.11,.045+.38,.42/2,.12,.1,!1),...hi([...hn(-.08,.045+.38,.46/2,.12,.1,!0),...hn(.1,.045+.38,.46/2,.12,.1,!1)],-1),...hi(hn(0,.045+.38,.42/2,.12,.1,!0),2)],l=[O(Je(.25,.26,.36,.022),ee.white,{p:[0,.045+.13,0]}),O(Je(.29,.045,.4,.014),r,{p:[0,.045+.28,0]}),...hi([O(qe(.27,.2,.016),ci(ee.white,.12),{p:[0,.045+.1,.125]}),O(qe(.24,.18,.02),ee.silver,{p:[0,.045+.09,.128]}),...[.06,.12].map(c=>O(qe(.24,.012,.026),ci(ee.silver,.15),{p:[0,.045+c,.13]}))],1),...hn(0,.045+.15,.18,.1,.09,!0)];return[...Bu(.88,.8),...Nt(o,[a,0,-.06]),...Nt(l,[a+.46/2+.125,0,-.03]),O(Je(.26,.012,.2,.006),ee.paving,{p:[a+.46/2+.125,.05,.27]}),...Qo(-.33,.29,1,Ts,.045,81),...Er(0,.3,.8,.045,82)]}function yS(){const s=ee.peach,r=[O(Je(.88,.045,.8,.02),ee.pavingDark,{p:[0,.0225,0]}),O(Je(.84,.02,.76,.01),ee.paving,{p:[0,.045,0]}),O(Je(.68,.24,.56,.026),ee.white,{p:[0,.045+.12,0]}),O(Je(.68-.01,.88-.24,.56-.01,.03),s,{p:[0,.045+.24+(.88-.24)/2,0]}),O(Je(.68+.03,.04,.56+.03,.012),ee.white,{p:[0,.045+.245,0]}),O(Je(.68+.03,.06,.56+.03,.016),ee.white,{p:[0,.045+.88+.02,0]}),O(qe(.68-.06,.02,.56-.06),ci(ee.paving,.12),{p:[0,.045+.88+.045,0]}),Ut(qe(.36,.13,.016),ee.winWarm,{p:[-.1,.045+.1,.56/2+.004]}),O(qe(.1,.17,.02),ee.skyDeep,{p:[.21,.045+.085,.56/2+.004]}),...[0,1,2,3].map(a=>O(Je(.11,.03,.11,.008),a%2?ee.white:ee.coral,{p:[-.265+a*.11,.045+.205,.56/2+.045],r:[.4,0,0]})),...hi([Ut(qe(.3,.13,.016),ee.winWarm,{p:[0,.045+.1,.68/2+.004]})],1),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([a,o])=>O(qe(.016,.1,.016),ee.slateBlue,{p:[.17+a*.05,.045+.88+.1,-.1+o*.05]})),O(Dt(.075,.075,.13,10),ee.roofBlue,{p:[.17,.045+.88+.2,-.1]}),O(li(.09,.07,10),ci(ee.roofBlue,.15),{p:[.17,.045+.88+.3,-.1]}),O(Je(.14,.07,.1,.014),ee.silver,{p:[-.16,.045+.88+.08,.06]})];for(let a=0;a<3;a++){const o=.40499999999999997+a*.2;for(let l=0;l<3;l++){const c=-.21+l*.21;r.push(...hn(c,o,.56/2,.12,.11,ri(a*3+1,l)<.55)),r.push(...hi(hn(c,o,.56/2,.12,.11,ri(a*5+2,l)<.35),2)),l!==1&&(r.push(O(Je(.17,.025,.08,.008),ee.white,{p:[c,o-.075,.56/2+.04]})),r.push(O(Je(.17,.05,.016,.006),ee.white,{p:[c,o-.045,.56/2+.076]})))}for(const l of[1,-1])for(let c=0;c<2;c++)r.push(...hi(hn(-.12+c*.24,o,.68/2,.12,.11,ri(a*7+l,c)<.45),l))}return r}function SS(){return[O(Je(.9,.045,.9,.02),ee.pavingDark,{p:[0,.0225,0]}),O(Je(.8,.17,.8,.035),ee.white,{p:[0,.13,0]}),Ut(qe(.46,.1,.016),ee.winWarm,{p:[0,.11,.402]}),Ut(qe(.016,.1,.46),ee.winWarm,{p:[.402,.11,0]}),O(Je(.84,.03,.84,.01),ee.white,{p:[0,.225,0]}),...Zt({w:.34,h:.88,y:.24,body:ee.white,glass:ee.skyDeep,style:"grid",floor:.16,lit:.5,seed:6}),O(Je(.6,.05,.6,.015),ee.white,{p:[0,1.145,0]}),O(Je(.5,.02,.5,.008),ee.green,{p:[0,1.175,0]}),...Er(.13,.12,.9,1.18,93),...Er(-.14,.14,.7,1.18,95),O(Je(.18,.12,.14,.02),ee.silver,{p:[-.1,1.24,-.12]}),...qt(1.18,.26)]}function Jl(n,e,t,i,s,r,a,o,l,c=e,u=.15){const d=[],h=Math.max(6,Math.round(t/u)),f=t/h,g=As(a,1910096,.42);for(let x=0;x<h;x++){const p=e+(c-e)*(x/h),m=s*x/h;d.push(O(ct(n,p*.9,p*.9,f*.98),a,{p:[0,i+x*f,0],r:[0,m,0]})),d.push(O(ct(n,p,p,f*.24),r,{p:[0,i+x*f,0],r:[0,m,0]}));const S=2*p*.9*Math.tan(Math.PI/n),T=Math.max(1,Math.round(S/.2));for(let M=0;M<n;M++){const E=(M+.5)/n*Math.PI*2+(n===4?Math.PI/4:n===8?Math.PI/8:0)+m;for(let b=0;b<T;b++){const R=ri(l+x*7+M,b)<.4,v=(-.5+(b+.5)/T)*S,w=qe(S/T*.7,f*.5,.016).translate(v,i+x*f+f*.6,p*.9+.006);d.push({geo:w.rotateY(E),color:R?o:g,glow:R})}}}return d}function Gd(n,e,t,i,s,r=!1,a=.25){const o=[];for(let l=0;l<n;l++){const c=l/n*Math.PI*2;o.push(O(li(.025,i,4),s,{p:[Math.sin(c)*e,t+i/2,Math.cos(c)*e],r:[Math.cos(c)*a,0,-Math.sin(c)*a],glow:r}))}return o}const bS=n=>1.4+n*.045,W={white:15856116,stone:14735046,concrete:13683394,silver:13160668,steel:10201018,glass:7907550,glassDeep:5075370,teal:6073269,jade:6728604,dark:4082536,black:3093058,gold:14464092,bronze:10648152,pink:14710936},rn=(n,e,t)=>[Math.sin(n)*e,t,Math.cos(n)*e];function Yt(n,e,t,i,s=t,r=!1,a=5){const o=new P(...n),l=new P(...e),c=l.clone().sub(o),u=new Ri(s,t,c.length(),a),d=new jn().setFromUnitVectors(new P(0,1,0),c.normalize());return u.applyMatrix4(new ut().compose(o.add(l).multiplyScalar(.5),d,new P(1,1,1))),{geo:u,color:i,glow:r}}function wS(n,e,t,i,s){const r=new P(...n),a=new P(...e),o=a.clone().sub(r),l=new Ii(t,o.length(),i),c=new jn().setFromUnitVectors(new P(0,1,0),o.normalize());return l.applyMatrix4(new ut().compose(r.add(a).multiplyScalar(.5),c,new P(1,1,1))),{geo:l,color:s}}function Vd(n,e,t,i=0){const s=new Rr(n.map(([a,o])=>new de(a,-o))),r=new Bs(s,{depth:e,bevelEnabled:!1}).rotateX(-Math.PI/2);return O(r,t,{p:[0,i,0]})}function Hd(n,e,t,i,s){const r=new Ii(1,s,1),a=r.getAttribute("position");for(let o=0;o<a.count;o++){const l=a.getY(o)>0;a.setX(o,a.getX(o)*2*(l?t:n)),a.setZ(o,a.getZ(o)*2*(l?i:e))}return r.translate(0,s/2,0)}function Wd(n,e,t,i=0,s=1,r=0){const a=new Ri(1,1,t*(s-i),8,1),o=a.getAttribute("position"),l=new P;for(let c=0;c<o.count;c++){l.fromBufferAttribute(o,c);const u=Math.hypot(l.x,l.z);if(u<1e-6)continue;const d=Math.abs(Math.round(Math.atan2(l.x,l.z)/(Math.PI/4)))%2===1,h=l.y>0?s:i,f=(d?Co.lerp(n*Math.SQRT2,e,h):Co.lerp(n,e*Math.SQRT2,h))+r;o.setXYZ(c,l.x/u*f,l.y,l.z/u*f)}return a.translate(0,t*(s-i)/2+t*i,0)}function Xd(n,e,t,i,s=!0){return[O(ct(16,n*.45,n,t*.3),i,{p:[0,e,0]}),O(ct(16,n*.97,n*.97,t*.4),s?ee.winWarm:W.glassDeep,{p:[0,e+t*.3,0],glow:s}),O(ct(16,n,n*.55,t*.3),i,{p:[0,e+t*.7,0]})]}function ES(n){const e=n-ru;return[O(Je(.9,.045,.9,.02),ee.pavingDark,{p:[0,.0225,0]}),O(Je(.84,.02,.84,.01),ee.paving,{p:[0,.045,0]}),...Nt(TS(e,bS(e)),[0,mS,0])]}function TS(n,e){const t=[],i=(...r)=>t.push(...r),s=r=>Zt({body:W.white,glass:W.glass,style:"glass",floor:.12,seed:n*10+1,...r});switch(n){case 0:{i(O(qe(.64,.1,.64),W.white,{p:[0,.05,0]})),i(Ut(qe(.42,.06,.012),ee.winWarm,{p:[0,.045,.322]})),i(...s({w:.25,h:e*.82,y:.1})),i(...s({w:.19,h:e*.08,y:.1+e*.82,glass:W.glassDeep,seed:2})),i(...pS(.19,.1+e*.9,3)),i(...qt(.1+e*.9,e*.16));break}case 1:{i(...s({w:.23,h:e*.8,body:W.silver,glass:W.teal})),i(O(qe(.5,.03,.5),W.silver,{p:[0,e*.8+.015,0]})),i(dS(.23,.23,e*.22,W.white,e*.8+.03));break}case 2:{const r=[[.3,.14],[.24,.08],[.18,.5],[.14,.06],[.1,.05]];let a=0;r.forEach(([o,l],c)=>{i(...Zt({w:o,h:e*l,y:a,body:W.stone,glass:W.glassDeep,style:"grid",floor:.11,seed:31+c})),a+=e*l}),i(O(ct(8,.07,.05,e*.07),ee.winWarm,{p:[0,a,0],glow:!0})),i(O(ct(8,.05,.03,e*.04),W.stone,{p:[0,a+e*.07,0]})),i(...qt(a+e*.11,e*.15,W.silver));break}case 3:{i(...Zt({w:.26,h:e*.2,body:W.white,glass:W.glassDeep,style:"grid",floor:.11,seed:41})),i(...Zt({w:.19,h:e*.48,y:e*.2,body:W.white,glass:W.glassDeep,style:"grid",floor:.11,seed:42}));let r=e*.68;for(let a=0;a<6;a++){const o=.16-a*.022;i(O(ct(8,o,o*.8,.065),W.steel,{p:[0,r,0]})),i(...Gd(8,o*.86,r+.015,.05,ee.winWarm,!0,0)),r+=.065}i(...qt(r,e*.2,W.steel));break}case 4:{const r=[[.55,.9,.7],[.9,1,.9],[.7,.9,.5]];for(let a=0;a<3;a++)for(let o=0;o<3;o++)i(...Nt(Zt({w:.085,h:e*.84*r[a][o],body:W.black,glass:W.dark,style:"fins",floor:.12,seed:51+a*3+o,lit:.35}),[(o-1)*.17,0,(a-1)*.17]));for(const a of[-.05,.05])i(...Nt(qt(e*.84,e*.2,W.white),[a,0,0]));break}case 5:{const r=e*.78;i(O(Dt(.045,.05,r,8),W.white,{p:[0,r/2,0]}));for(let a=0;a<3;a++)for(const o of[-.14,.14]){const l=a/3*Math.PI*2+o;i(Yt(rn(l,.3,0),rn(l,.055,e*.42),.014,W.white)),i(Yt(rn(l,.055,e*.42),rn(l,.14,r),.012,W.white))}i(O(ct(16,.08,.27,.06),W.white,{p:[0,r,0]})),i(O(ct(16,.26,.26,.05),ee.winWarm,{p:[0,r+.06,0],glow:!0})),i(O(ct(16,.27,.11,.05),W.gold,{p:[0,r+.11,0]})),i(O(ct(16,.1,.08,.04),W.white,{p:[0,r+.16,0]})),i(...qt(r+.2,e*.14,W.white));break}case 6:{i(...Zt({w:.25,top:.03,h:e*.9,body:W.white,glass:W.glassDeep,style:"grid",floor:.11,seed:71,lit:.45}));for(const r of[-1,1])i(O(Hd(.035,.07,.025,.05,e*.34),W.white,{p:[r*.13,e*.44,0]}));i(Kl(4,.035,e*.12,W.white,e*.9));break}case 7:{for(const r of[-.17,.17]){const a=[];let o=0;[[.11,.56],[.09,.14],[.072,.09],[.055,.06],[.04,.05]].forEach(([l,c],u)=>{const d={w:l,h:e*c,y:o,body:W.silver,glass:W.steel,style:"fins",floor:.12,lit:.4};a.push(...Zt({...d,seed:81+u})),a.push(...Nt(Zt({...d,w:l*.92,seed:86+u}),[0,0,0],[0,Math.PI/4,0])),o+=e*c}),a.push(...qt(o,e*.2,W.silver)),i(...Nt(a,[r,0,0]))}i(O(qe(.14,.035,.05),W.silver,{p:[0,e*.42,0]})),i(Ut(qe(.13,.015,.052),ee.winCool,{p:[0,e*.42,0]}));for(const r of[-1,1])i(Yt([r*.06,e*.42,0],[r*.09,e*.28,0],.008,W.silver));break}case 8:{let a=0;for(let o=0;o<10;o++){const l=.2-o*.012,c=e*.78*(1.6-o*.12)/10.6;i(...Zt({w:l,top:l*.95,h:c,y:a,body:W.silver,glass:W.glassDeep,style:"grid",floor:.1,seed:91+o})),i(O(ct(4,l+.012,l+.028,.02),W.silver,{p:[0,a+c-.02,0]})),a+=c}i(O(ct(8,.075,.06,e*.06),ee.winWarm,{p:[0,a,0],glow:!0})),i(Kl(8,.085,e*.08,W.silver,a+e*.06)),i(...qt(a+e*.13,e*.12,W.silver));break}case 9:{const r=l=>.24*Math.sin(Math.PI*(.3+.7*l)),o=e*.86;for(let l=0;l<9;l++){const c=l/9,u=(l+1)/9;i(...Zt({seg:16,w:r(c),top:Math.max(.02,r(u)),h:o/9,y:c*o,body:l%2?W.glassDeep:W.dark,glass:l%2?W.glass:W.glassDeep,style:"glass",floor:.1,seed:101+l,lit:.3}))}i(Ut(on(.03,0),ee.winWarm,{p:[0,o+.01,0]}));break}case 10:{const r=e*.62;i(O(ct(6,.075,.045,r),W.concrete)),i(O(ct(3,.11,.04,e*.4),W.concrete,{r:[0,Math.PI/3,0]})),i(O(ct(16,.05,.17,.05),W.concrete,{p:[0,r,0]})),i(O(ct(16,.165,.165,.045),ee.winWarm,{p:[0,r+.05,0],glow:!0})),i(O(ct(16,.17,.12,.04),W.concrete,{p:[0,r+.095,0]})),i(O(ct(16,.12,.05,.03),W.white,{p:[0,r+.135,0]}));const a=r+.165+e*.18;i(O(Dt(.03,.04,e*.18,8),W.concrete,{p:[0,r+.165+e*.09,0]})),i(O(ct(12,.06,.06,.035),W.concrete,{p:[0,a,0]})),i(O(ct(12,.055,.055,.02),ee.winCool,{p:[0,a+.035,0],glow:!0})),i(...qt(a+.055,e*.24,W.white));break}case 11:{i(O(Je(.8,.012,.8,.006),Me.grassLight,{p:[0,.006,0]}));for(let r=0;r<3;r++){const a=r/3*Math.PI*2+Math.PI/6;i(Yt(rn(a,.3,0),rn(a,.1,e*.3),.024,W.concrete)),i(Yt(rn(a,.085,0),rn(a,.085,e*.64),.026,W.concrete))}i(O(on(.15,1),W.pink,{p:[0,e*.3,0]})),i(O(ct(16,.152,.152,.025),ee.winPink,{p:[0,e*.3-.0125,0],glow:!0})),i(O(on(.1,1),W.pink,{p:[0,e*.64,0]})),i(O(ct(16,.102,.102,.02),ee.winPink,{p:[0,e*.64-.01,0],glow:!0})),i(O(Dt(.03,.035,e*.16,8),W.concrete,{p:[0,e*.64+.09+e*.08,0]})),i(O(on(.05,1),W.pink,{p:[0,e*.82+.09,0]})),i(...qt(e*.82+.13,e*.18,W.white));break}case 12:{i(O(Je(.8,.012,.8,.006),Me.grassLight,{p:[0,.006,0]}));const r=e*.2,a=e*.5,o=e*.92;for(const[u,d]of[[1,1],[-1,1],[1,-1],[-1,-1]])i(Yt([u*.3,0,d*.3],[u*.15,r,d*.15],.034,W.bronze,.026,!1,4)),i(Yt([u*.15,r,d*.15],[u*.055,a,d*.055],.022,W.bronze,.015,!1,4));const l=r*.25,c=.3-.15*.25;for(let u=0;u<4;u++)i(...Nt([O(new mr(c,.012,4,10,Math.PI),W.bronze,{p:[0,l,c-.01],s:[1,(r-l)/c,1]})],[0,0,0],[0,u*Math.PI/2,0]));i(O(qe(.36,.035,.36),W.bronze,{p:[0,r,0]})),i(O(qe(.37,.012,.37),ee.winWarm,{p:[0,r+.023,0],glow:!0})),i(O(qe(.15,.03,.15),W.bronze,{p:[0,a,0]})),i(O(qe(.155,.01,.155),ee.winWarm,{p:[0,a+.02,0],glow:!0})),i(O(ct(4,.055,.012,o-a),W.bronze,{p:[0,a+.015,0]})),i(O(qe(.045,.03,.045),ee.winWarm,{p:[0,o-.04,0],glow:!0})),i(...qt(o,e*.1,W.bronze));break}case 13:{const r=e*.86,a=new Rr;a.moveTo(-.12,0),a.lineTo(.28,0),a.quadraticCurveTo(.26,r*.62,-.08,r),a.lineTo(-.12,r),a.closePath(),i(O(new Bs(a,{depth:.34,bevelEnabled:!1,curveSegments:8}).translate(0,0,-.17),W.white));const o=l=>{let c=0,u=1;for(let h=0;h<20;h++){const f=(c+u)/2;2*(1-f)*f*.62*r+f*f*r<l?c=f:u=f}const d=c;return(1-d)*(1-d)*.28+2*(1-d)*d*.26+d*d*-.08};for(let l=1;l<10;l++){const c=l/10*r,u=o(c)-.015;i(O(qe(u+.1,.02,.35),ri(131,l)<.6?ee.winWarm:W.glassDeep,{p:[(u-.1)/2,c,0],glow:ri(131,l)<.6}))}i(O(qe(.06,r+.06,.38),W.silver,{p:[-.13,(r+.06)/2,0]})),i(...Nt(qt(r+.06,e*.14,W.silver),[-.13,0,0])),i(O(Dt(.075,.075,.015,12),W.white,{p:[-.23,r*.8,0]})),i(O(Dt(.06,.06,.017,12),W.jade,{p:[-.23,r*.8,0]}));break}case 14:{const r=e*.9;i(...Zt({w:.25,top:.04,h:r,body:W.silver,glass:W.glass,style:"fins",floor:.1,seed:141,lit:.35}));for(let a=0;a<4;a++){const o=a/4*Math.PI*2+Math.PI/4,l=e*(.12+a%2*.06);i(O(li(.03,l,3),W.silver,{p:[Math.sin(o)*.035,r-.06+l/2,Math.cos(o)*.035]}))}break}case 15:{const r=e*.92,a=r*.8;i(...Nt(s({w:.25,top:.2,h:a,body:W.silver,glass:W.glassDeep}),[0,0,0],[0,0,0],[1,1,.55]));const o=r-a;for(const l of[-1,1])i(O(Hd(.035,.11,.03,.09,o),W.silver,{p:[l*.17,a,0]}));i(O(qe(.4,o*.28,.18),W.silver,{p:[0,r-o*.14,0]})),i(O(qe(.3,.012,.1),ee.winCool,{p:[0,a+.006,0],glow:!0}));break}case 16:{const r=e*.6,a=e*.38;i(...Nt(s({w:.25,top:.22,h:r,body:W.silver}),[0,0,0],[0,0,0],[1,1,.6]));const o=6,l=(u,d)=>[u*(.17-.155*Math.pow(d,1.6)),r+a*d,0];for(const u of[-1,1])for(let d=0;d<o;d++)i(...Nt([Yt(l(u,d/o),l(u,(d+1)/o),.05,W.silver,.05*(1-(d+1)/(o+2)),!1,4)],[0,0,0],[0,0,0],[1,1,1.8]));const c=r+a*.72;i(O(qe(.2,.03,.12),W.silver,{p:[0,c,0]})),i(O(qe(.18,.012,.122),ee.winCool,{p:[0,c,0],glow:!0}));break}case 17:{const r=As(W.jade,16777215,.35);i(...s({w:.24,top:.18,h:e*.2,body:r,glass:W.jade}));let a=e*.2;for(let o=0;o<8;o++){const l=e*.075;i(...s({w:.15,top:.2,h:l,y:a,body:r,glass:W.jade,seed:172+o,floor:l/2})),a+=l}i(...s({w:.12,top:.1,h:e*.06,y:a,body:r,glass:W.jade,seed:181})),a+=e*.06,i(O(ct(4,.08,.05,e*.04),r,{p:[0,a,0]})),i(...qt(a+e*.04,e*.16,W.silver));break}case 18:{i(...Jl(3,.16,e*.92,0,Math.PI*.6,W.white,W.glass,ee.winWarm,181,.09,.1)),i(O(ct(12,.1,.08,.06),W.silver,{p:[0,e*.92,0]})),i(fS(.08,e*.92+.09,ee.winCool,[Math.PI/2,0,0],.012));break}case 19:{const a=[[[[0,0],[.24,.24],[-.24,.24]],.5,0],[[[0,0],[.24,-.24],[.24,.24]],.68,Math.PI/2],[[[0,0],[-.24,-.24],[.24,-.24]],.84,Math.PI],[[[0,0],[-.24,.24],[-.24,-.24]],1,-Math.PI/2]];for(const[o,l,c]of a){const u=e*l;i(Vd(o,u,W.glassDeep)),i(Vd(o.map(([h,f])=>[h*1.02,f*1.02]),.025,W.white,u));const d=[];for(let h=0;h+.1<u;h+=.4){const f=Math.min(u,h+.4);d.push(Yt([-.24,h,.24+.004],[.24,f,.24+.004],.008,W.white),Yt([.24,h,.24+.004],[-.24,f,.24+.004],.008,W.white)),d.push(Yt([-.24,h,.24+.004],[.24,h,.24+.004],.008,W.white))}for(let h=0;h*.1+.08<u;h++)for(let f=0;f<4;f++)ri(191+h,f+l*10)<.3&&d.push(Ut(qe(.07,.04,.008),ee.winWarm,{p:[-.18+f*.12,.06+h*.1,.24+.002]}));i(...Nt(d,[0,0,0],[0,c,0]))}for(const o of[-.04,.04])i(Yt([-.12,e,o],[-.12,e*1.15,o],.008,W.white));break}case 20:{const r=e*.6;for(const a of[-.26,0,.26])i(...Nt(s({w:.07,h:r,seed:201+Math.round(a*10)}),[a,0,-.07],[0,0,0],[1,1,1.4])),i(wS([a,0,.2],[a,r,.04],.12,.08,W.white));i(O(qe(.94,.045,.22),W.white,{p:[.03,r+.022,-.01]})),i(O(qe(.9,.012,.18),Me.grassLight,{p:[.03,r+.05,-.01]})),i(O(qe(.46,.014,.06),ee.winCool,{p:[.1,r+.052,.05],glow:!0}));for(const a of[-.36,-.22,.4])i(...Qo(a,-.05,.75,Ts,r+.056,Math.round(a*50)));break}case 21:{const r=e*.8,a=14,o=2.2;for(let u=0;u<a;u++){const d=u/a*Math.PI*2;i(Yt(rn(d,.26,0),rn(d+o,.13,r),.008,14202623,.008,!0,3))}const l=u=>Math.hypot(Math.sin(o)*.13*u,(1-u)*.26+u*Math.cos(o)*.13);for(const u of[.12,.32,.52,.72,.92])i(O(new mr(l(u),.008,3,24),ee.winPink,{p:[0,u*r,0],r:[Math.PI/2,0,0],glow:!0}));const c=8;for(let u=0;u<c;u++){const d=u/c,h=(u+1)/c;i(O(ct(12,l(d)*.42,l(h)*.42,r/c),u%2?W.glassDeep:W.dark,{p:[0,d*r,0]}))}i(O(ct(12,l(1)*.5,l(1)*.5,.04),W.white,{p:[0,r,0]})),i(...qt(r+.04,e*.26,W.white));break}case 22:{const r=e*.14,a=e*.7;i(...Zt({w:.22,h:r,body:W.silver,glass:W.steel,style:"fins",floor:.12,seed:221})),i(O(Wd(.22,.12,a),W.glass,{p:[0,r,0]}));for(let o=1;o<16;o++){const l=o/16;ri(222,o)<.55&&i(O(Wd(.22,.12,a,l,l+.012,.003),ri(223,o)<.5?ee.winWarm:ee.winCool,{p:[0,r,0],glow:!0}))}i(O(ct(8,.125,.12,.03),W.white,{p:[0,r+a,0]})),i(Yt([0,r+a+.03,0],[0,r+a+e*.32,0],.014,W.white,.005,!1,6)),i(Ut(on(.022,0),Me.beacon,{p:[0,r+a+e*.32,0]}));break}case 23:{const r=e*.95,a=r*.6;i(...s({w:.24,top:.18,h:a,body:W.white,glass:As(W.silver,W.glass,.4),lit:.3})),i(...s({w:.18,top:.035,h:r-a,y:a,body:W.white,glass:As(W.silver,W.glass,.4),lit:.3,seed:232}));for(const o of[0,Math.PI/2])i(...Nt([Yt([0,.08,.246],[0,a,.186],.007,ee.winCool,.007,!0,4),Yt([0,a,.186],[0,r*.98,.04],.007,ee.winCool,.005,!0,4)],[0,0,0],[0,o,0]));i(...qt(r,e*.06,W.white));break}case 24:{const r=[...s({w:.2,h:e*.82}),O(qe(.44,.03,.44),W.white,{p:[0,e*.82+.015,0]})];i(...hS(Nt(r,[-.06,0,0],[0,0,0],[1,1,.85]),.16,e*.25)),i(O(new mr(.2,.02,4,10,Math.PI/2),W.white,{p:[-.26,.02,.22]}));break}case 25:{const r=e*.72;i(...Zt({seg:16,w:.13,top:.11,h:r,body:W.concrete,glass:W.glassDeep,style:"ribbon",floor:.14,seed:251,lit:.5})),i(O(ct(16,.11,.2,.1),W.concrete,{p:[0,r,0]}));const a=r+.1;for(let o=0;o<8;o++){const l=o/8*Math.PI*2;i(Yt(rn(l,.2,a),rn(l,.06,a+e*.16),.008,W.steel))}i(Ut(li(.1,e*.15,6),Me.flameOuter,{p:[0,a+e*.075,0]})),i(Ut(li(.055,e*.1,6),Me.flameInner,{p:[0,a+e*.05,0]})),i(...qt(a+e*.16,e*.14,W.steel));break}case 26:{for(const[r,a,o,l]of[[-.12,.09,.86,0],[.15,-.11,.66,Math.PI]]){const c=e*o;i(...Nt([...Zt({seg:3,w:.12,h:c,body:W.silver,glass:W.steel,style:"fins",floor:.12,seed:261+Math.round(o*10)}),Kl(3,.12,e*.16,W.silver,c)],[r,0,a],[0,l,0]))}break}case 27:{const r=e*.62;for(let a=0;a<3;a++){const o=a/3*Math.PI*2,l=o+Math.PI*2/3;i(Yt(rn(o,.28,0),rn(o,.09,r),.022,W.white,.014,!1,4));for(let c=0;c<5;c++){const u=d=>.28+-.19000000000000003*d;i(Yt(rn(o,u(c/5),c/5*r),rn(l,u((c+1)/5),(c+1)/5*r),.006,W.white))}}i(O(Dt(.05,.07,e*.8,8),W.silver,{p:[0,e*.4,0]})),i(...Xd(.14,e*.42,.08,W.white)),i(...Xd(.095,e*.62,.06,W.white)),i(O(Dt(.025,.04,e*.18,8),W.white,{p:[0,e*.89,0]})),i(...qt(e*.98,e*.16,W.white));break}case 28:{i(...Zt({w:.27,h:e*.78,body:W.gold,glass:W.glassDeep,style:"fins",floor:.12,seed:281,lit:.55})),i(O(qe(.6,.05,.6),W.gold,{p:[0,e*.78+.025,0]})),i(...Gd(10,.27,e*.78+.05,.24,ee.winWarm,!0,-.15)),i(Ut(new Nu(.09),ee.butter,{p:[0,e*.78+.3,0],s:[.8,1.3,.8]})),i(O(Dt(.02,.05,.2,6),W.gold,{p:[0,e*.78+.15,0]}));break}case 29:{i(...Jl(4,.21,e*.95,0,Math.PI/2,W.white,W.teal,ee.winCool,291)),i(...qt(e*.95,e*.12,W.white));break}case 30:{i(...Jl(5,.25,e,0,Math.PI*.5,W.silver,W.glass,ee.winWarm,301,.025)),i(...qt(e,e*.1,W.silver));break}case 31:{const r=[.76,.86,.95];for(let a=0;a<3;a++){const o=a/3*Math.PI*2+Math.PI/6;i(...Nt(s({w:.08,top:.03,h:e*r[a],body:W.silver,seed:311+a}),rn(o,.11,0),[0,o,0],[1,1,1.7]))}i(...s({seg:6,w:.1,top:.03,h:e,body:W.silver,glass:W.glassDeep,seed:315})),i(O(ct(12,.16,.16,.025),W.white,{p:[0,e*.72,0]})),i(O(ct(12,.15,.15,.012),ee.winCool,{p:[0,e*.72+.025,0],glow:!0})),i(...qt(e,e*.12,W.silver));break}default:{const a=e*.78/8;for(let o=0;o<3;o++){const l=o/3*Math.PI*2+Math.PI/6;for(let c=0;c<8;c++){const u=.3-c*.028,d=c===0?0:c*a+o*a/3,h=(c+1)*a+o*a/3-d,f=Zt({w:.065,h,y:d,body:W.silver,glass:W.glass,style:"fins",floor:.1,seed:321+o*10+c,lit:.35});i(...Nt(f,rn(l,u/2,0),[0,l,0],[1,1,u/.13]))}}i(...Zt({seg:6,w:.075,top:.05,h:e*.88,body:W.silver,glass:W.glass,style:"fins",floor:.1,seed:351})),i(...Zt({seg:6,w:.05,top:.032,h:e*.08,y:e*.88,body:W.silver,glass:W.glassDeep,style:"glass",floor:.1,seed:352})),i(Yt([0,e*.96,0],[0,e*1.25,0],.03,W.silver,.004,!1,6)),i(Ut(on(.02,0),Me.beacon,{p:[0,e*1.25,0]}));break}}return t}function AS(n){switch(n){case 0:return gS();case 1:return vS();case 2:return _S();case 3:return xS();case 4:return MS();case 5:return yS();case 6:return SS();default:return ES(n)}}function CS(n=1){return[O(Es(on(.26,0),.06,30+n),Me.rock,{p:[-.04,.17,0],r:[.3,.5,.2],s:[1.1,.8,1]}),O(Es(on(.16,0),.04,31+n),Me.rockDark,{p:[.2,.1,.13],r:[.6,.1,.9],s:[1,.8,1]}),O(Es(on(.11,0),.03,32+n),Me.rockLight,{p:[.1,.07,-.21],r:[.2,.8,.1]})]}function RS(){const n=[];for(let e=0;e<8;e++){const t=e/8*Math.PI*2+.2;n.push(O(Es(on(.065,0),.015,40+e),e%2?Me.rockDark:Me.rock,{p:[Math.cos(t)*.24,.035,Math.sin(t)*.24],s:[1.2,.75,1]}))}n.push(Ut(Dt(.15,.17,.03,8),Me.glowWarm,{p:[0,.02,0]}));for(let e=0;e<4;e++){const t=e/4*Math.PI*2+.4;n.push(O(Dt(.026,.034,.3,6),e%2?Me.plankDark:Me.trunk,{p:[Math.cos(t)*.07,.13,Math.sin(t)*.07],r:[-Math.sin(t)*.5,0,Math.cos(t)*.5]}))}return n.push(O(Dt(.05,.05,.3,7),Me.plank,{p:[-.36,.05,.1],r:[Math.PI/2,.5,0]})),n.push(O(Dt(.05,.05,.28,7),Me.plankDark,{p:[.3,.05,-.28],r:[Math.PI/2,-.7,0]})),n}function PS(){return[Ut(li(.11,.46,6),Me.flameOuter,{p:[0,.27,0]}),Ut(li(.075,.3,5),Me.glowWarm,{p:[.07,.19,.03],r:[0,.6,0]}),Ut(li(.07,.26,5),Me.flameInner,{p:[-.06,.17,.04],r:[0,1.2,0]}),Ut(li(.05,.2,5),Me.flameInner,{p:[.01,.14,.08],r:[0,.3,0]})]}function LS(){const n=[];for(let e=0;e<6;e++){const t=e/6*Math.PI*2;n.push(O(Es(on(.055,0),.012,60+e),e%2?Me.rockDark:Me.rock,{p:[Math.cos(t)*.18,.03,Math.sin(t)*.18],s:[1.2,.75,1]}))}n.push(Ut(Dt(.11,.13,.025,8),Me.glowWarm,{p:[0,.016,0]}));for(let e=0;e<3;e++){const t=e/3*Math.PI*2+.3;n.push(O(Dt(.022,.028,.24,6),e%2?Me.plankDark:Me.trunk,{p:[Math.cos(t)*.055,.1,Math.sin(t)*.055],r:[-Math.sin(t)*.5,0,Math.cos(t)*.5]}))}return n}function DS(){return[O(Dt(.1,.12,.05,8),ee.slateBlue,{p:[0,.025,0]}),O(Dt(.05,.07,.08,8),ee.slateBlue,{p:[0,.09,0]}),O(Dt(.022,.03,.72,8),ee.slateBlue,{p:[0,.49,0]}),O(Dt(.045,.045,.03,8),ee.gold,{p:[0,.4,0]}),O(Dt(.07,.035,.04,8),ee.slateBlue,{p:[0,.86,0]}),Ut(Dt(.075,.055,.15,6),ee.winWarm,{p:[0,.955,0]}),...[0,1,2,3,4,5].map(n=>O(qe(.012,.16,.012),ee.slateBlue,{p:[Math.sin(n/6*Math.PI*2)*.07,.955,Math.cos(n/6*Math.PI*2)*.07]})),O(li(.1,.09,6),ee.slateBlue,{p:[0,1.075,0]}),O(on(.02,0),ee.gold,{p:[0,1.13,0]}),O(Xi(.05,81),ee.green,{p:[.12,.04,.06]}),O(on(.018,0),Me.flowerPink,{p:[.13,.08,.09]})]}let io=null;const $d=new Map;function IS(n){switch(n){case kt:return[CS(),.3];case Vt:return[RS(),.15];case yn:return[LS(),.12];case An:return[DS(),.3];default:{const e=Math.min(Ht,Math.max(0,n));return[AS(e),[.25,.5,.5,.5,.6,.8,1][e]??1.2]}}}function NS(n){let e=$d.get(n);if(!e){const[t,i]=IS(n);e=Ep(t,i),$d.set(n,e)}return e}function Zl(n){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);for(const[s,r]of n)i.addColorStop(s,r);return t.fillStyle=i,t.fillRect(0,0,64,64),new Yo(e)}let Ql=null;function US(){return Ql||(Ql={geo:new Ns(1,1).rotateX(-Math.PI/2),shadow:new Gn({map:Zl([[0,"rgba(14,12,40,0.5)"],[.55,"rgba(14,12,40,0.24)"],[1,"rgba(14,12,40,0)"]]),transparent:!0,depthWrite:!1,toneMapped:!1}),pool:new Gn({map:Zl([[0,"rgba(255,176,96,0.62)"],[.4,"rgba(255,150,80,0.26)"],[1,"rgba(255,130,70,0)"]]),transparent:!0,depthWrite:!1,blending:is,toneMapped:!1}),soft:new Gn({map:Zl([[0,"rgba(255,186,120,0.2)"],[.45,"rgba(255,160,100,0.08)"],[1,"rgba(255,140,90,0)"]]),transparent:!0,depthWrite:!1,blending:is,toneMapped:!1})}),Ql}function FS(){return io||(io={material:new ia({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),glowMaterial:new Gn({vertexColors:!0,toneMapped:!1}),flame:Ep(PS(),0)},io)}function OS(n){return n===kt?.56:n===Vt?.6:n===yn?.45:n===An?.35:[.42,.62,.7,.72,.86,.94,.98][n]??1}function BS(n){return n===kt?1.45:n===Vt||n===yn||n===An?1:[1.6,1.35,1.2,1.2,1.12,1.06,1][n]??1}function jl(n,e,t=!0){const i=FS(),s=new bi,r=new bi;r.scale.setScalar(BS(n)),s.add(r);const a=NS(n),o=new Rt(a.body,e??i.material);o.castShadow=!e,o.receiveShadow=!e,r.add(o);const l=a.glow?new Rt(a.glow,e??i.glowMaterial):null;l&&o.add(l);const c=Math.random()*10,u=[];let d=1,h=null,f=0;if(!e){const x=US(),p=new Rt(x.geo,x.shadow);p.scale.setScalar(OS(n)),p.position.y=.004,p.renderOrder=1,s.add(p);const m=n===Vt||n===yn||n===An,S=t?uf(n):0;if(S>0){h=new Rt(x.geo,m?x.pool:x.soft),f=1.2+S*1,h.scale.setScalar(f),h.position.y=.006,h.renderOrder=1,s.add(h);const T=h;(n===Vt||n===yn)&&u.push(M=>T.scale.setScalar(f*(.75+.25*d)*(1+Math.sin(M*9+c)*.04+Math.sin(M*13.7)*.03)))}}if(n===Vt||n===yn){const x=new Rt(i.flame.glow,e??i.glowMaterial),p=n===yn?.62:.72;r.add(x),u.push(m=>{const S=p*(.55+.45*d);x.scale.set(S,S*(1+Math.sin(m*11+c)*.12+Math.sin(m*17.3)*.08),S),x.rotation.y=m*.8})}if(n===An&&l&&u.push(x=>{const p=d>.25||Math.sin(x*23+c)+Math.sin(x*7.1)>-.6;l.visible=p,h&&h.scale.setScalar(f*(p?.8+.2*d:.5))}),n===0||n===1){const x=n===0?.03:.015;u.push(p=>o.rotation.z=Math.sin(p*1.6+c)*x)}const g=n===yn||n===An?x=>d=Math.max(0,Math.min(1,x)):void 0;return{root:s,tick:u.length?x=>u.forEach(p=>p(x)):void 0,setFuel:g}}const un={linear:n=>n,inQuad:n=>n*n,outCubic:n=>1-(1-n)**3,inCubic:n=>n**3,inOutSine:n=>-(Math.cos(Math.PI*n)-1)/2,outBack:n=>1+2.70158*(n-1)**3+1.70158*(n-1)**2};class kS{constructor(){this.list=[],this.speed=1}get active(){return this.list.length>0}run(e,t,i=un.outCubic){return new Promise(s=>{const r=e*this.speed;if(r<=0){t(1),s();return}t(i(0)),this.list.push({elapsed:0,duration:r,ease:i,update:t,resolve:s})})}wait(e){return this.run(e,()=>{},un.linear)}tick(e){if(!this.list.length)return;const t=[];for(const i of this.list){i.elapsed+=e;const s=Math.min(1,i.elapsed/i.duration);i.update(i.ease(s)),s>=1&&t.push(i)}if(t.length){this.list=this.list.filter(i=>!t.includes(i));for(const i of t)i.resolve()}}finishAll(){const e=this.list;this.list=[];for(const t of e)t.update(t.ease(1)),t.resolve()}}const zS=.5,Ti=-.03,Do=.14,Io=.72,GS=.025;function jo(n=Ln){return n/2+zS}function Tp(n=Ln){return Ti-Do-Io-.02}function VS(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function va(n,e,t,i=t,s=0,r=1){n.getAttribute("normal")||n.computeVertexNormals();const a=n.getAttribute("normal"),o=n.getAttribute("position"),l=new Float32Array(a.count*3),c=new We(e),u=new We(t),d=new We(i);for(let h=0;h<a.count;h++){const f=a.getY(h),g=Co.clamp((r-o.getY(h))/Math.max(1e-6,r-s),0,1),x=u.clone().lerp(d,g),p=f>0?x.lerp(c,Co.smoothstep(f,.4,.92)):x;l.set([p.r,p.g,p.b],h*3)}return n.setAttribute("color",new Cn(l,3)),n}function HS(n,e){const t=new Rr;return t.moveTo(-n+e,-n),t.lineTo(n-e,-n),t.quadraticCurveTo(n,-n,n,-n+e),t.lineTo(n,n-e),t.quadraticCurveTo(n,n,n-e,n),t.lineTo(-n+e,n),t.quadraticCurveTo(-n,n,-n,n-e),t.lineTo(-n,-n+e),t.quadraticCurveTo(-n,-n,-n+e,-n),t}function No(n,e,t,i,s){const r=new Bs(HS(n-i,t),{depth:Math.max(.01,e-2*i),bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,curveSegments:6});return r.rotateX(-Math.PI/2),r.translate(0,s-(e-i),0),r.deleteAttribute("uv"),r.index?r.toNonIndexed():r}function WS(){const n=new Jo(.94,.06,.94,1,.016).toNonIndexed();return n.translate(0,-.03,0),n.deleteAttribute("uv"),va(n,Me.tile,Me.tileEdge)}function XS(){return Ap([va(No(.5,.07,.06,.02,0),Me.grassTop,Me.grassEdge,Me.grassEdge,-.07,0),va(No(.485,.15,.05,.02,-.065),Me.soilLight,Me.soilLight,Me.soilDark,-.215,-.065)])}function Ap(n){const e=["position","normal","color"],t=new cn;for(const i of e){const s=n.reduce((o,l)=>o+l.getAttribute(i).array.length,0),r=new Float32Array(s);let a=0;for(const o of n){const l=o.getAttribute(i).array;r.set(l,a),a+=l.length}t.setAttribute(i,new Cn(r,3))}return t}function $S(n){const e=jo(n),t=Ti-Do,i=t-Io;return Ap([va(No(e+GS,Do,.14,.03,Ti),Me.grassTop,Me.grassEdge,Me.grassEdge,t,Ti),va(No(e,Io+.02,.12,.025,t+.01),Me.soilLight,Me.soilLight,Me.soilDark,i,t)])}function Yd(n,e,t,i){const s=[Me.leaf,Me.leafMid,Me.leafDark][i%3],r=[O(Dt(.022,.03,.5,5),Me.trunk,{p:[0,.25,0]})];return r.push(O(Xi(.2,i),s,{p:[0,.56,0]})),r.push(O(Xi(.15,i+1),Me.leafLight,{p:[.12,.48,.07]})),r.push(O(Xi(.13,i+2),Me.leafDark,{p:[-.1,.66,-.05]})),Zo(r,n,Ti,e,i*.7,t)}function qd(n,e,t,i,s,r=Me.rock){return O(Es(on(i,0),i*.18,s),r,{p:[n,e,t],s:[1.2,.8,1],r:[0,s,0]})}function YS(n,e,t,i){const s=[];for(let r=0;r<4;r++){const a=i+r*1.7;s.push(O(li(.014*t,.1*t*(.7+r%2*.4),3),r%2?Me.moss:Me.leafLight,{p:[n+Math.sin(a)*.02*t,Ti+.04*t,e+Math.cos(a)*.02*t],r:[Math.cos(a)*.35,0,Math.sin(a)*.35]}))}return s}function qS(n){const e=VS(n*131+7),t=jo(n),i=[],s=(l,c,u)=>i.push(...Zo(Ou(e()>.5?Me.pine:Me.pineLight,Me.trunk),l,Ti,c,e()*6,.32*u)),r=()=>{const l=Math.floor(e()*4),c=(e()*2-1)*(t-.25),u=t-.24;return l===0?[c,-u]:l===1?[c,u]:l===2?[-u,c]:[u,c]};[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([l,c],u)=>{const d=l*(t-.24),h=c*(t-.24);u%2?s(d,h,1.2+e()*.2):i.push(...Yd(d,h,.78+e()*.12,3+u))});for(let l=0;l<n*2;l++){const[c,u]=r(),d=e();d<.28?s(c,u,.7+e()*.35):d<.42?i.push(...Yd(c,u,.38+e()*.12,10+l)):d<.66?i.push(qd(c,Ti+.02,u,.05+e()*.04,l+30)):i.push(...YS(c,u,.8+e()*.5,l))}const a=Ti-Do-.12,o=Math.round(n*.8);for(let l=0;l<o*4;l++){const c=l%4,u=(e()*2-1)*(t-.4),d=a-e()*(Io-.3),h=.08+e()*.06,[f,g]=c===0?[u,-t]:c===1?[u,t]:c===2?[-t,u]:[t,u];e()<.5&&i.push(qd(f,d,g,h,l+70,Me.soilDeep))}return i}function KS(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");return t.filter="blur(28px)",t.fillStyle="rgba(10, 8, 36, 0.55)",t.fillRect(256*.22,256*.22,256*.56,256*.56),new Yo(e)}function JS(n=Ln){const e=new bi,t=new ia({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0}),i=new Gn({vertexColors:!0,toneMapped:!1}),s=new Rt(new Ns(80,80).rotateX(-Math.PI/2),new $g({color:657448,opacity:.6}));s.receiveShadow=!0;const r=new Rt(new Ns(1,1).rotateX(-Math.PI/2),new Gn({map:KS(),transparent:!0,depthWrite:!1,toneMapped:!1}));r.renderOrder=-1,e.add(s,r);let a=null,o=null,l=null;const c=u=>{for(const g of[a,o,l])g&&(e.remove(g),g.geometry.dispose());a=new Rt($S(u),t),a.receiveShadow=!0,a.castShadow=!0;const d=qS(u);o=new Rt(Po(d.filter(g=>!g.glow),.15,Ti),t),o.receiveShadow=!0,o.castShadow=!0,l=new Rt(Po(d.filter(g=>g.glow),0),i),e.add(a,o,l);const h=Tp(u);s.position.y=h+.01;const f=jo(u)*2*1.7;r.scale.set(f,1,f),r.position.set(.45,h+.015,-.45)};return c(n),{group:e,tick:()=>{},setSize:c}}let ec=null;const tc={iso:{azimuth:Math.PI/4,elevation:Math.PI/6},cozy:{azimuth:0,elevation:.88,fov:30}},ys=1,ZS=4,QS=7,gs=Math.PI/2,jS=Math.max(...bs)**2;let vs=Ln,_s=vs*ys/2;function Jt(n){const{x:e,y:t}=xr(n,vs);return new P((e+.5)*ys-_s,0,(t+.5)*ys-_s)}const e1=16773560,t1=new We(1.28,1.24,1.05),n1=new We(1.42,1.2,.72),i1=new We(1.25,.78,.62),s1=new We(1.22,1.18,1.3),r1=new We(1.16,1.2,1.1),a1=new We(1.45,1.1,.78),o1=new We(.6,.6,.78),l1=10481864,nc=.62,c1=[15655622,14865328,Me.grassLight],u1=[Me.rockLight,Me.rock,14865328];function h1(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new Yo(n);return i.colorSpace=Mn,i}function d1(){const n=document.createElement("canvas");n.width=4,n.height=64;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,64);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.7,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0.95)"),e.fillStyle=t,e.fillRect(0,0,4,64);const i=new Yo(n);return i.colorSpace=Mn,i}class f1{constructor(e,t){this.container=e,this.scene=new Hh,this.ortho=new ga(-5,5,5,-5,.1,120),this.perspective=new kn(30,1,.5,200),this.camera=this.ortho,this.tweens=new kS,this.tileBase=[],this.side=Ln,this.lit=null,this.spin=0,this.spinGen=0,this.fitOffset=new P(0,10,10),this.pieces=new Map,this.fuel=new Map,this.fireLights=[],this.pieceLayer=new bi,this.fxLayer=new bi,this.raycaster=new rv,this.groundPlane=new zi(new P(0,1,0),0),this.ghost=null,this.rest=null,this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.frames=[],this.view="iso",this.arrows=new Map,this.pieceYaw=0,this.insets={top:0,right:0,bottom:0,left:0},this.reducedMotion=!1,this.dirty=!0,this.lastFrame=0,this.lastIdleRender=0,this.clock=0,this.shake=0,this.rafId=0,this.width=0,this.height=0,this.baseCamPos=new P,this.ringPool=[],this.particlePool=[],this.glowPool=[],this.animGen=0,this.performing=!1,this.leaning=new Map,this.lost=!1,this.dprQuery=null,this.handleContextLost=s=>{s.preventDefault(),this.lost=!0,this.stopShake()},this.handleContextRestored=()=>{this.lost=!1,this.dirty=!0,this.onContextRestored?.()},this.onPixelRatioChange=()=>{this.watchPixelRatio(),this.resize()},this.renderer=t??new iS({antialias:!0,alpha:!0,powerPreference:"high-performance"});const i=Math.min(window.innerWidth,window.innerHeight)<700;this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jr,this.renderer.outputColorSpace=Mn,this.renderer.toneMapping=gu,this.renderer.toneMappingExposure=1,this.renderer.setClearColor(0,0),this.canvas=this.renderer.domElement,this.canvas.className="board-canvas",e.appendChild(this.canvas),this.canvas.addEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this.ghostMaterial=new ia({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.6,depthWrite:!1,roughness:.9}),this.restMaterial=new ia({color:13815280,transparent:!0,opacity:.8,depthWrite:!1,roughness:.8,flatShading:!0}),this.buildLights(i),vs=Ln,_s=vs*ys/2,this.side=vs,this.world=JS(vs),this.scene.add(this.world.group),this.tileMaterial=new ia({vertexColors:!0,roughness:.95,flatShading:!0}),this.buildTiles(),this.scene.add(this.pieceLayer,this.fxLayer),this.buildFxPools(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.watchPixelRatio(),this.resize(),this.loop=this.loop.bind(this),this.rafId=requestAnimationFrame(this.loop)}buildLights(e){this.scene.add(new ld(10656988,3813458,1.2));const t=new Vl(13815551,1.1);t.position.set(-8,9,6),t.castShadow=!0,t.shadow.mapSize.set(e?1024:2048,e?1024:2048);const i=t.shadow.camera;i.left=-10,i.right=10,i.top=10,i.bottom=-10,i.near=1,i.far=40,t.shadow.bias=-5e-4,t.shadow.normalBias=.03,t.shadow.radius=10,t.shadow.blurSamples=16,this.scene.add(t);for(let s=0;s<ZS;s++){const r=new tv(16748352,0,3,1.3);this.scene.add(r),this.fireLights.push(r)}}updateFireLights(){const e=[];for(const[t,i]of this.pieces){const s=i.piece===Vt?{radius:lf(this.side),y:.4}:Jn[i.piece]?{radius:Jn[i.piece].radius,y:i.piece===An?.95:.35}:null;if(!s)continue;const r=this.fuel.get(t)??1,a=this.reducedMotion?1:.92+Math.sin(this.clock*9+t)*.05+Math.sin(this.clock*23+t*3)*.03,o=i.model.root.position.clone();o.y+=s.y*i.model.root.scale.y,e.push({at:o,power:(i.piece===Vt?1:.45+.55*r)*a*i.model.root.scale.y,range:s.radius+1.9})}e.sort((t,i)=>i.range-t.range),this.fireLights.forEach((t,i)=>{const s=e[i];t.intensity=s?QS*s.power:0,s&&(t.position.copy(s.at),t.distance=s.range)})}get cellCount(){return this.side*this.side}buildTiles(){this.tiles&&(this.scene.remove(this.tiles),this.tiles.geometry.dispose(),this.tiles.dispose()),this.tileBase.length=0;const e=new jh(WS(),this.tileMaterial,this.cellCount),t=new ut;for(let i=0;i<this.cellCount;i++){const s=Jt(i);t.makeTranslation(s.x,0,s.z),e.setMatrixAt(i,t);const{x:r,y:a}=xr(i,this.side),o=Math.sin(i*91.17)*43758.5453,l=o-Math.floor(o),c=((r+a)%2?.93:1)*(.97+l*.05),u=l>.75?.04:0;this.tileBase.push(new We(c*(1+u),c,c*(.97-u))),e.setColorAt(i,this.tileBase[i])}e.receiveShadow=!0,e.castShadow=!0,this.scene.add(e),this.tiles=e}setBoardSize(e){if(e!==this.side){this.cancelAnimations();for(const t of[...this.pieces.keys()])this.removePiece(t);this.clearGhost(),this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.lit=null,this.setSuggestions([]),this.side=e,vs=e,_s=e*ys/2,this.buildTiles(),this.applyHighlights(),this.world.setSize(e),this.fitCamera()}}getBoardSize(){return this.side}buildFxPools(){const e=new na(.42,.5,32);e.rotateX(-Math.PI/2);for(let o=0;o<6;o++){const l=new Rt(e,new Gn({color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1}));l.visible=!1,this.ringPool.push(l),this.fxLayer.add(l)}const t=new Uu(.06,0);for(let o=0;o<56;o++){const l=new Rt(t,new Gn({color:16777215,transparent:!0,toneMapped:!1}));l.visible=!1,this.particlePool.push(l),this.fxLayer.add(l)}const i=new na(.585,.675,4,1,Math.PI/4);i.rotateX(-Math.PI/2);for(let o=0;o<12;o++){const l=new Rt(i,new Gn({color:16777215,transparent:!0,depthWrite:!1,blending:is,toneMapped:!1}));l.visible=!1,l.renderOrder=2,this.frames.push(l),this.fxLayer.add(l)}const s=new na(.5,.57,4,1,Math.PI/4);s.rotateX(-Math.PI/2),this.suggest=new jh(s,new Gn({color:l1,transparent:!0,opacity:nc,depthWrite:!1,blending:is,toneMapped:!1}),jS),this.suggest.count=0,this.suggest.visible=!1,this.suggest.renderOrder=2,this.suggest.frustumCulled=!1,this.fxLayer.add(this.suggest);const r=h1(),a=d1();for(let o=0;o<3;o++){const l=new lg(new ep({map:r,color:16765802,transparent:!0,depthWrite:!1,blending:is,toneMapped:!1})),c=new Rt(new Ri(.42,.48,2.2,20,1,!0).translate(0,1.1,0),new Gn({map:a,color:16765802,transparent:!0,depthWrite:!1,side:yi,blending:is,toneMapped:!1}));l.visible=c.visible=!1,this.glowPool.push({sprite:l,column:c}),this.fxLayer.add(l,c)}}isContextLost(){return this.lost||this.renderer.getContext().isContextLost()}markDirty(){this.dirty=!0}setReducedMotion(e){this.reducedMotion=e,this.tweens.speed=e?.35:1;for(const t of this.frames){const i=t.material;i.opacity=i.userData.base??1}this.suggest.material.opacity=nc,this.updateLean(),this.dirty=!0}setView(e){this.resetLean(),this.view=e,this.pieceYaw=e==="cozy"?-.6:0;for(const t of this.pieces.values())t.model.root.rotation.y=this.pieceYaw;this.ghost&&(this.ghost.model.root.rotation.y=this.pieceYaw),this.fitCamera()}getView(){return this.view}setInsets(e){Object.keys(e).every(i=>Math.abs(e[i]-this.insets[i])<.5)||(this.insets={...e},this.fitCamera())}resize(){const e=this.container.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));!this.applyPixelRatio()&&t===this.width&&i===this.height||(this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.fitCamera(),this.renderNow())}applyPixelRatio(){const e=Math.min(window.innerWidth,window.innerHeight)<700,t=Math.min(window.devicePixelRatio||1,e?2:1.75);return t===this.renderer.getPixelRatio()?!1:(this.renderer.setPixelRatio(t),!0)}watchPixelRatio(){this.dprQuery?.removeEventListener("change",this.onPixelRatioChange),this.dprQuery=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,this.dprQuery?.addEventListener?.("change",this.onPixelRatioChange)}renderNow(){document.hidden||this.lost||(this.updateFireLights(),this.renderer.render(this.scene,this.camera),this.dirty=!1)}fitCamera(){const e=tc[this.view],t=this.width,i=this.height,s=this.insets,r=Math.max(60,t-s.left-s.right),a=Math.max(60,i-s.top-s.bottom),o=!e.fov&&r/a<.85?.6:e.elevation,l=new P(Math.sin(e.azimuth)*Math.cos(o),Math.sin(o),Math.cos(e.azimuth)*Math.cos(o)),c=[],u=!e.fov&&r/a>1.1,d=u?jo(this.side)+.1:_s+.22,h=u?[Tp(this.side),2]:[-.45,1.8];for(const p of[-d,d])for(const m of[-d,d])for(const S of h)c.push(new P(p,S,m));const f=s.left+r/2,g=s.top+a/2,x=1.04;if(e.fov){const p=this.perspective;p.fov=e.fov,p.aspect=t/i,p.clearViewOffset(),p.updateProjectionMatrix();let m=24,S={minX:0,maxX:0,minY:0,maxY:0};for(let R=0;R<10;R++){p.position.copy(l).multiplyScalar(m),p.lookAt(0,0,0),p.updateMatrixWorld(),S={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const w of c){const C=w.clone().project(p);S.minX=Math.min(S.minX,C.x),S.maxX=Math.max(S.maxX,C.x),S.minY=Math.min(S.minY,C.y),S.maxY=Math.max(S.maxY,C.y)}if(R===9)break;const v=Math.max((S.maxX-S.minX)/(2*r/t),(S.maxY-S.minY)/(2*a/i));m*=v*x}const T=(S.minX+S.maxX)/2,M=(S.minY+S.maxY)/2,E=f/t*2-1,b=1-g/i*2;p.setViewOffset(t,i,(T-E)*t/2,(b-M)*i/2,t,i),p.updateProjectionMatrix(),this.camera=p,this.fitOffset.copy(l).multiplyScalar(m)}else{const p=this.ortho;p.position.copy(l).multiplyScalar(30),p.lookAt(0,0,0),p.updateMatrixWorld();const m=p.matrixWorldInverse;let S=1/0,T=-1/0,M=1/0,E=-1/0;for(const w of c){const C=w.clone().applyMatrix4(m);S=Math.min(S,C.x),T=Math.max(T,C.x),M=Math.min(M,C.y),E=Math.max(E,C.y)}const b=Math.max((T-S)/r,(E-M)/a)*x,R=(S+T)/2,v=(M+E)/2;p.left=R-f*b,p.right=p.left+t*b,p.top=v+g*b,p.bottom=p.top-i*b,p.updateProjectionMatrix(),this.camera=p,this.fitOffset.copy(l).multiplyScalar(30)}this.applySpin()}applySpin(){this.camera.position.copy(this.fitOffset).applyAxisAngle(new P(0,1,0),this.spin),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.baseCamPos.copy(this.camera.position),this.dirty=!0}getSpinQuarter(){return(Math.round(this.spin/gs)%4+4)%4}rotate(e){this.glideSpin(Math.round(this.spin/gs)*gs+e*gs)}dragSpin(e){this.spinGen++,this.spin=e,this.applySpin()}getSpin(){return this.spin}endSpin(e=0){const t=Math.abs(e)>2.5?Math.sign(e)*.5:0;this.glideSpin(Math.round(this.spin/gs+t)*gs)}glideSpin(e){const t=++this.spinGen,i=this.spin;if(Math.abs(e-i)<1e-4||this.reducedMotion){this.spin=e,this.applySpin();return}this.tweens.run(Math.min(420,240+Math.abs(e-i)*120),s=>{t===this.spinGen&&(this.spin=i+(e-i)*s,this.applySpin())},un.inOutSine)}tilePixelSize(){const e=this.worldToScreen(new P(-.5,0,0)),t=this.worldToScreen(new P(.5,0,0));return Math.hypot(e.x-t.x,e.y-t.y)}worldToScreen(e){const t=e.clone().project(this.camera),i=this.canvas.getBoundingClientRect();return{x:i.left+(t.x+1)/2*i.width,y:i.top+(1-t.y)/2*i.height}}cellToScreen(e,t=.5){return this.worldToScreen(Jt(e).setY(t))}screenAxes(){const e=this.worldToScreen(new P(0,0,0)),t=this.worldToScreen(new P(1,0,0)),i=this.worldToScreen(new P(0,0,1));return{col:{x:t.x-e.x,y:t.y-e.y},row:{x:i.x-e.x,y:i.y-e.y}}}arrowStep(e){const t=this.getSpinQuarter(),i=`${this.view}:${t}`;let s=this.arrows.get(i);if(!s){const r=tc[this.view];s=oS(r.azimuth+t*gs,r.elevation),this.arrows.set(i,s)}return{...s[e]}}pick(e,t){const i=this.canvas.getBoundingClientRect(),s=new de((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=null;const a=new P;if(this.raycaster.ray.intersectPlane(this.groundPlane,a)){const l=Math.floor((a.x+_s)/ys),c=Math.floor((a.z+_s)/ys);l>=0&&c>=0&&l<this.side&&c<this.side&&(r=c*this.side+l)}if(r!==null&&!this.pieces.has(r))return r;const o=this.raycaster.intersectObjects(this.pieceLayer.children,!0);for(const l of o){let c=l.object;for(;c&&c.userData.index===void 0;)c=c.parent;if(c)return c.userData.index}return r}addPiece(e,t){this.removePiece(e);const i=jl(t);i.root.position.copy(Jt(e)),i.root.rotation.y=this.pieceYaw,i.root.userData.index=e;const s=this.fuel.get(e);s!==void 0&&i.setFuel?.(s),i.tick?.(this.clock),this.pieceLayer.add(i.root);const r={piece:t,model:i};return this.pieces.set(e,r),this.dirty=!0,r}removePiece(e){const t=this.pieces.get(e);t&&(this.pieceLayer.remove(t.model.root),this.pieces.delete(e),this.leaning.get(e)===t&&this.leaning.delete(e),this.dirty=!0)}sync(e){this.performing&&this.cancelAnimations(),e.length!==this.cellCount&&this.setBoardSize(Math.round(Math.sqrt(e.length)));for(let t=0;t<this.cellCount;t++){const i=e[t],s=this.pieces.get(t);i===Mt?s&&this.removePiece(t):!s||s.piece!==i?this.addPiece(t,i):(s.model.root.position.copy(Jt(t)),s.model.root.rotation.set(0,this.pieceYaw,0),s.model.root.scale.setScalar(1))}this.leaning.clear(),this.dirty=!0}setHover(e,t,i,s=!1){if(this.highlight.hover=s?null:e,this.highlight.blocked=s?e:null,this.highlight.merge=i,this.applyHighlights(),this.updateLean(),e===null||t===null||s){this.showRest();return}this.placeGhost(t,e,!1)}setRest(e,t){this.rest=e===null||t===null?null:{index:e,piece:t},this.highlight.hover===null&&this.showRest(),this.applyHighlights()}showRest(){!this.rest||this.performing?this.clearGhost():this.placeGhost(this.rest.piece,this.rest.index,!0)}placeGhost(e,t,i){if(!this.ghost||this.ghost.piece!==e||this.ghost.resting!==i){this.clearGhost();const s=jl(e,i?this.restMaterial:this.ghostMaterial);s.root.rotation.y=this.pieceYaw,this.fxLayer.add(s.root),this.ghost={piece:e,model:s,index:t,resting:i}}this.ghost.index=t,this.ghost.model.root.position.copy(Jt(t)),this.dirty=!0}setLit(e){e===this.lit||e&&this.lit&&e.length===this.lit.length&&e.every((i,s)=>i===this.lit[s])||(this.lit=e?[...e]:null,this.applyHighlights())}setCursor(e){this.highlight.cursor=e,this.applyHighlights()}setSuggestions(e){const t=[...new Set(e)].filter(s=>Number.isInteger(s)&&s>=0&&s<this.cellCount),i=new ut;t.forEach((s,r)=>{const a=Jt(s);this.suggest.setMatrixAt(r,i.makeTranslation(a.x,.014,a.z))}),this.suggest.count=t.length,this.suggest.visible=t.length>0,this.suggest.instanceMatrix.needsUpdate=!0,this.dirty=!0}clearGhost(){this.ghost&&(this.fxLayer.remove(this.ghost.model.root),this.ghost=null,this.dirty=!0)}applyHighlights(){const e=new Set(this.highlight.merge),t=new We;for(let s=0;s<this.cellCount;s++)t.copy(this.tileBase[s]),this.lit&&t.multiply(this.lit[s]?a1:o1),e.has(s)&&t.multiply(n1),s===this.highlight.cursor&&t.multiply(r1),s===this.highlight.hover&&t.multiply(t1),s===this.highlight.blocked&&t.multiply(i1),this.rest&&s===this.rest.index&&this.highlight.hover===null&&t.multiply(s1),this.tiles.setColorAt(s,t);this.tiles.instanceColor.needsUpdate=!0;const i=[];this.highlight.hover!==null&&i.push([this.highlight.hover,16774084,1]),this.highlight.blocked!==null&&i.push([this.highlight.blocked,16752506,.8]),this.highlight.cursor!==null&&this.highlight.cursor!==this.highlight.hover&&i.push([this.highlight.cursor,14217471,.8]),this.rest&&this.highlight.hover===null&&this.highlight.blocked===null&&!this.performing&&i.push([this.rest.index,15130879,.45]);for(const s of this.highlight.merge)i.push([s,16763213,.75]);this.frames.forEach((s,r)=>{const a=i[r];if(s.visible=!!a,!a)return;const o=Jt(a[0]);s.position.set(o.x,.012,o.z);const l=s.material;l.color.set(a[1]),l.userData.base=a[2],l.opacity=a[2]}),this.dirty=!0}resetLean(){for(const[e,t]of this.leaning)t.model.root.position.copy(Jt(e)),t.model.root.rotation.set(0,this.pieceYaw,0),this.dirty=!0;this.leaning.clear()}updateLean(){const e=this.highlight.hover,t=this.highlight.merge;if(this.reducedMotion||this.performing||e===null||!t.length){this.resetLean();return}for(const[o,l]of this.leaning)t.includes(o)&&this.pieces.get(o)===l||(l.model.root.position.copy(Jt(o)),l.model.root.rotation.set(0,this.pieceYaw,0),this.leaning.delete(o));const i=Jt(e),s=Math.sin(this.clock*6.5),r=new jn().setFromAxisAngle(new P(0,1,0),this.pieceYaw),a=new P;for(const o of t){const l=this.pieces.get(o);if(!l||l.piece===kt)continue;const c=Jt(o),u=i.clone().sub(c).setY(0);if(u.lengthSq()<1e-6)continue;u.normalize();const d=l.model.root;d.position.copy(c).addScaledVector(u,.06+.02*s),a.set(u.z,0,-u.x),d.quaternion.setFromAxisAngle(a,.07+.02*s).multiply(r),this.leaning.set(o,l)}this.dirty=!0}ring(e,t,i,s=520){const r=this.ringPool.find(o=>!o.visible);if(!r)return;const a=r.material;a.color.set(t),r.position.set(e.x,.03,e.z),r.visible=!0,this.tweens.run(s,o=>{r.scale.setScalar(.4+o*i),a.opacity=.9*(1-o)}).then(()=>r.visible=!1)}glow(e,t,i=700){const s=this.glowPool.find(o=>!o.sprite.visible);if(!s)return;const r=s.sprite.material,a=s.column.material;s.sprite.position.set(e.x,.45,e.z),s.column.position.set(e.x,0,e.z),s.sprite.visible=s.column.visible=!0,this.tweens.run(i,o=>{const l=Math.sin(Math.min(1,o*1.6)*Math.PI*.5)*(1-o);r.opacity=Math.min(1,l*1.6*t),s.sprite.scale.setScalar(1.4+t*.8+o*.6),a.opacity=l*.85*t,s.column.scale.set(1,.4+o*.8,1)},un.linear).then(()=>s.sprite.visible=s.column.visible=!1)}burst(e,t,i,s=1,r=650){this.reducedMotion&&(i=Math.ceil(i/3));for(let a=0;a<i;a++){const o=this.particlePool.find(x=>!x.visible);if(!o)return;const l=o.material;l.color.set(t[a%t.length]);const c=a/i*Math.PI*2+Math.random()*.5,u=(.9+Math.random()*.8)*s,d=Math.cos(c)*u,h=Math.sin(c)*u,f=(1.6+Math.random()*1.4)*s;o.visible=!0,o.position.copy(e);const g=Math.random()*8;this.tweens.run(r,x=>{const p=x*(r/1e3);o.position.set(e.x+d*p,e.y+f*p-4.5*p*p,e.z+h*p),o.rotation.set(g*x,g*x*.7,0),o.scale.setScalar(1-x*.7),l.opacity=1-x*x},un.linear).then(()=>o.visible=!1)}}dust(e,t,i,s=420){this.reducedMotion&&(i=Math.ceil(i/2));for(let r=0;r<i;r++){const a=this.particlePool.find(f=>!f.visible);if(!a)return;const o=a.material;o.color.set(t[r%t.length]);const l=r/i*Math.PI*2+Math.random()*.6,c=Math.cos(l),u=Math.sin(l),d=.22+Math.random()*.14,h=.06+Math.random()*.06;a.visible=!0,this.tweens.run(s,f=>{const g=.3+d*f;a.position.set(e.x+c*g,.03+h*Math.sin(f*Math.PI*.8),e.z+u*g),a.rotation.set(l+f*2,f*3,0),a.scale.setScalar(.75+f*.35),o.opacity=.9*(1-f)},un.outCubic).then(()=>a.visible=!1)}}bump(e){this.reducedMotion||(this.shake=Math.max(this.shake,e))}async animateMove(e,t,i={}){const s=this.animGen;this.performing=!0;try{this.clearGhost(),this.setHover(null,null,[]);for(const r of e){const a=r.kind==="place"||r.kind==="upgrade"?r.index:r.kind==="expire"||r.kind==="remove"?r.cells[0]:r.target,o=()=>i.onEvent?.(r,this.cellToScreen(a,.9));switch(r.kind){case"place":await this.animatePlace(r.index,r.piece,s,o);break;case"merge":await this.animateMerge(r.cells,r.target,r.toTier,r.step,s,o);break;case"festival":await this.animateFestival(r.cells,r.target,s,o);break;case"crumble":if(o(),s!==this.animGen)return!1;await this.animateCrumble(r.cells,s);break;case"expire":case"remove":if(o(),s!==this.animGen)return!1;await this.animateExpire(r.cells,s);break;case"upgrade":await this.animateUpgrade(r.index,r.toTier,s,o);break}if(s!==this.animGen)return!1}return this.performing=!1,this.sync(t),!0}finally{s===this.animGen&&(this.performing=!1)}}async animatePlace(e,t,i,s){const{model:r}=this.addPiece(e,t),a=r.root,o=Jt(e),l=t===kt||t>=2;if(await this.tweens.run(190,h=>{a.position.set(o.x,1-h,o.z);const f=.72+.28*Math.sqrt(h);a.scale.set(f*(1-.05*h),f*(1+.1*h),f*(1-.05*h))},un.inQuad),i!==this.animGen||(s(),i!==this.animGen))return;this.ring(o,16774102,l?1:.8,360),this.dust(o,t===kt?u1:c1,l?8:5);const c=l?.2:.15,u=l?.06:.035,d=new ut;await this.tweens.run(l?140:120,h=>{const f=h>=1?0:Math.sin(h*Math.PI);a.scale.set(1+f*c*.6,1-f*c,1+f*c*.6),a.position.y=-u*f,this.tiles.setMatrixAt(e,d.makeTranslation(o.x,-u*f,o.z)),this.tiles.instanceMatrix.needsUpdate=!0},un.linear),i===this.animGen&&(a.scale.setScalar(1),a.position.copy(o))}async animateMerge(e,t,i,s,r,a){const o=Jt(t),l=e.map(g=>this.pieces.get(g)).filter(g=>!!g),c=l.map(g=>g.model.root.position.clone()),u=Math.pow(.9,Math.min(s,5)-1);if(await this.tweens.run(230*u,g=>{l.forEach((x,p)=>{x.model.root.position.lerpVectors(c[p],o,g),x.model.root.position.y=Math.sin(g*Math.PI)*.35,x.model.root.scale.setScalar(1-.55*g)})},un.inCubic),r!==this.animGen)return;for(const g of e)this.removePiece(g);const{model:d}=this.addPiece(t,i);if(d.root.scale.setScalar(.001),a(),r!==this.animGen)return;const h=s>=2;this.glow(o,.75+i*.08+(h?.35:0)),this.ring(o,h?16765802:16774102,1.4+i*.25+(h?.8:0));const f=i<=1?[Me.leafLight,Me.leaf,16773560]:[16765802,Me.wall,Me.leafLight,Me.roof];this.burst(o.clone().setY(.4),h?[16765802,...f]:f,8+i*3+(h?8:0),.8+i*.1),this.bump(h?.12+s*.03:.04),await this.tweens.run(320*u,g=>d.root.scale.setScalar(Math.max(.001,g)),un.outBack),r===this.animGen&&d.root.scale.setScalar(1)}async animateFestival(e,t,i,s){const r=Jt(t),a=e.map(o=>this.pieces.get(o)).filter(o=>!!o);if(await this.tweens.run(420,o=>{for(const l of a)l.model.root.position.y=Math.sin(o*Math.PI*.5)*.5,l.model.root.rotation.y=this.pieceYaw+o*Math.PI},un.inOutSine),i===this.animGen&&(s(),i===this.animGen)){this.glow(r,1.4,900),this.ring(r,16765802,3.4,700),this.ring(r,16777215,2.2,500);for(const o of a)this.burst(o.model.root.position.clone(),[16765802,Me.flag,Me.leafLight,Me.white,Me.stripe],9,1.2,800);if(this.bump(.3),await this.tweens.run(260,o=>{for(const l of a)l.model.root.scale.setScalar(Math.max(.001,1-o))}),i===this.animGen)for(const o of e)this.removePiece(o)}}async animateCrumble(e,t){const i=e.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of e)this.burst(Jt(s).setY(.2),[Me.rock,Me.rockDark,Me.moss],6,.7,500);if(await this.tweens.run(340,s=>{for(const r of i)r.model.root.position.y=-s*.3,r.model.root.rotation.z=Math.sin(s*30)*.06*(1-s),r.model.root.scale.setScalar(Math.max(.001,1-s))},un.inCubic),t===this.animGen)for(const s of e)this.removePiece(s)}async animateUpgrade(e,t,i,s){const r=Jt(e),a=this.pieces.get(e);if(a&&(await this.tweens.run(160,l=>a.model.root.scale.setScalar(1+.15*l),un.outCubic),i!==this.animGen))return;const{model:o}=this.addPiece(e,t);o.root.scale.setScalar(.001),s(),i===this.animGen&&(this.glow(r,.9+t*.08),this.ring(r,16765802,1.6+t*.2),this.burst(r.clone().setY(.4),[16765802,e1,16777215],12,.9),await this.tweens.run(320,l=>o.root.scale.setScalar(Math.max(.001,l)),un.outBack),i===this.animGen&&o.root.scale.setScalar(1))}async animateExpire(e,t){const i=e.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of e)this.burst(Jt(s).setY(.35),[13617384,10327236,16762480],7,.6,600);if(await this.tweens.run(420,s=>{for(const r of i)r.model.root.position.y=-s*.2,r.model.root.scale.setScalar(Math.max(.001,1-s))},un.inCubic),t===this.animGen)for(const s of e)this.removePiece(s)}setBurn(e){this.fuel.clear();for(const[t,i]of e??[]){const s=this.pieces.get(t),r=s?Jn[s.piece]?.life:void 0;r&&(this.fuel.set(t,i/r),s.model.setFuel?.(i/r))}this.dirty=!0}async nudge(e){const t=this.pieces.get(e);if(!t)return;const i=this.animGen,s=Jt(e);await this.tweens.run(240,r=>t.model.root.position.x=s.x+Math.sin(r*Math.PI*4)*.06*(1-r),un.linear),!(i!==this.animGen||this.pieces.get(e)!==t)&&t.model.root.position.copy(s)}async gameOverWave(){const e=this.animGen;this.performing=!0,this.resetLean();const t=[...this.pieces.entries()];if(await this.tweens.run(700,i=>{for(const[s,r]of t){const{x:a,y:o}=xr(s,this.side),l=i*3-(a+o)*.12;r.model.root.position.y=Math.max(0,Math.sin(Math.min(Math.max(l,0),1)*Math.PI))*.25}},un.linear),e!==this.animGen)return!1;for(const[i,s]of t)this.pieces.get(i)===s&&(s.model.root.position.y=0);return this.performing=!1,!0}cancelAnimations(){this.animGen++,this.performing=!1,this.tweens.finishAll(),this.stopShake()}stopShake(){this.shake=0,this.camera.position.copy(this.baseCamPos),this.dirty=!0}finishAnimations(){this.cancelAnimations()}get animating(){return this.tweens.active}thumbnail(e,t=160){if(this.isContextLost())return"";const i=new Hh;i.add(new ld(12897535,3815526,1.6));const s=new Vl(14673151,1.5);s.position.set(-5,10,7),i.add(s);const r=new Vl(16761482,.55);r.position.set(7,4,2),i.add(r);const a=new bi;ec??(ec=XS());const o=new Rt(ec,this.tileMaterial);a.add(o);const l=jl(e,void 0,!1);l.tick?.(.8),a.add(l.root),i.add(a),a.updateMatrixWorld(!0);const c=tc.iso,u=new ga(-1,1,1,-1,.1,50);u.position.set(Math.sin(c.azimuth)*10,7,Math.cos(c.azimuth)*10),u.lookAt(0,0,0),u.updateMatrixWorld();const d=new ls().setFromObject(a);let h=1/0,f=-1/0,g=1/0,x=-1/0;for(const w of[d.min.x,d.max.x])for(const C of[d.min.y,d.max.y])for(const D of[d.min.z,d.max.z]){const B=new P(w,C,D).applyMatrix4(u.matrixWorldInverse);h=Math.min(h,B.x),f=Math.max(f,B.x),g=Math.min(g,B.y),x=Math.max(x,B.y)}const p=Math.max(f-h,x-g)/2*1.06,m=(h+f)/2,S=(g+x)/2;u.left=m-p,u.right=m+p,u.top=S+p,u.bottom=S-p,u.updateProjectionMatrix();const T=new Zn(t,t,{samples:4});T.texture.colorSpace=Mn;const M=this.scene.fog;this.renderer.setRenderTarget(T),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(i,u);const E=new Uint8Array(t*t*4);if(this.renderer.readRenderTargetPixels(T,0,0,t,t,E),this.renderer.setRenderTarget(null),this.renderer.setClearColor(0,0),this.scene.fog=M,T.dispose(),this.dirty=!0,this.isContextLost())return"";const b=document.createElement("canvas");b.width=b.height=t;const R=b.getContext("2d"),v=R.createImageData(t,t);for(let w=0;w<t;w++)v.data.set(E.subarray((t-1-w)*t*4,(t-w)*t*4),w*t*4);return R.putImageData(v,0,0),b.toDataURL("image/png")}loop(e){this.rafId=requestAnimationFrame(this.loop);const t=this.lastFrame?e-this.lastFrame:16;if(this.lastFrame=e,document.hidden)return;const i=Math.min(64,t),s=this.tweens.active||this.shake>.001;if(this.tweens.tick(Math.min(1e3,t)),this.clock+=i/1e3,this.lost)return;const r=!this.reducedMotion&&e-this.lastIdleRender>33;if(!(!s&&!this.dirty&&!r)){if(r||s){if(this.lastIdleRender=e,!this.reducedMotion){this.world.tick(this.clock);for(const o of this.pieces.values())o.model.tick?.(this.clock);(this.leaning.size||this.highlight.merge.length)&&this.updateLean()}const a=this.reducedMotion?1:.75+Math.sin(this.clock*5)*.25;for(const o of this.frames){if(!o.visible)continue;const l=o.material;l.opacity=(l.userData.base??1)*a}if(this.suggest.visible){const o=this.reducedMotion?1:.7+Math.sin(this.clock*3)*.3;this.suggest.material.opacity=nc*o}}if(this.ghost){const a=Jt(this.ghost.index);this.ghost.model.root.position.set(a.x,this.reducedMotion?.05:.08+Math.sin(this.clock*4)*.05,a.z)}if(this.shake>.001){const a=this.shake;this.camera.position.set(this.baseCamPos.x+(Math.random()-.5)*a,this.baseCamPos.y+(Math.random()-.5)*a,this.baseCamPos.z+(Math.random()-.5)*a),this.shake*=Math.pow(1e-4,i/1e3)**.6,this.shake<=.001&&this.camera.position.copy(this.baseCamPos)}this.updateFireLights(),this.renderer.render(this.scene,this.camera),this.dirty=!1}}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.dprQuery?.removeEventListener?.("change",this.onPixelRatioChange),this.canvas.removeEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored,!1),this.renderer.dispose()}}const ic=[0,2,4,7,9,12,14,16,19,21,24],p1=392;function or(n){return p1*Math.pow(2,n/12)}function so(n){n?.catch(()=>{})}class m1{constructor(e,t=!1){this.ctx=null,this.master=null,this.noise=null,this.musicBus=null,this.musicTimer=0,this.nextBeat=0,this.beat=0,this.enabled=e,this.musicOn=t}unlock(){if(!this.enabled&&!this.musicOn)return;const e=this.ensure();e&&e.state!=="running"&&e.state!=="closed"&&so(e.resume()),this.musicOn&&this.startMusic()}get music(){return this.musicOn}setMusic(e){this.musicOn=e,e?this.unlock():this.stopMusic()}setPaused(e){this.ctx&&(e?so(this.ctx.suspend()):(this.enabled||this.musicOn)&&so(this.ctx.resume()))}startMusic(){const e=this.ensure();if(!(!e||this.musicTimer)){if(!this.musicBus){this.musicBus=e.createGain();const t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=2400;const i=e.createDelay(1);i.delayTime.value=.42;const s=e.createGain();s.gain.value=.28,this.musicBus.connect(t),t.connect(this.master),t.connect(i),i.connect(s).connect(i),i.connect(this.master)}this.musicBus.gain.cancelScheduledValues(e.currentTime),this.musicBus.gain.setValueAtTime(1e-4,e.currentTime),this.musicBus.gain.exponentialRampToValueAtTime(.32,e.currentTime+2.5),this.nextBeat=e.currentTime+.1,this.musicTimer=window.setInterval(()=>this.schedule(),120),this.schedule()}}stopMusic(){if(window.clearInterval(this.musicTimer),this.musicTimer=0,this.ctx&&this.musicBus){const e=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setValueAtTime(Math.max(1e-4,this.musicBus.gain.value),e),this.musicBus.gain.exponentialRampToValueAtTime(1e-4,e+.6)}}schedule(){const e=this.ctx;if(!e||!this.musicBus)return;const t=60/76/2,i=[[0,4,7,11],[-3,0,4,7],[-7,-3,0,4],[-5,-1,2,4]],s=[0,2,4,7,9,12,14,16];for(;this.nextBeat<e.currentTime+.6;){const r=this.nextBeat,a=Math.floor(this.beat/8),o=i[Math.floor(a/2)%i.length],l=this.beat%16;if(l===0){for(const d of o)this.voice(261.63*Math.pow(2,d/12),r,t*16,.05,"triangle",1.4);this.voice(65.41*Math.pow(2,o[0]/12),r,t*8,.12,"sine",.05)}l===8&&this.voice(65.41*Math.pow(2,o[0]/12),r,t*8,.1,"sine",.05);const c=Math.sin(this.beat*12.9898)*43758.5453,u=c-Math.floor(c);if(l%2===0&&u<.42){const d=s[Math.floor(u*100)%s.length];this.voice(523.25*Math.pow(2,d/12),r,.9,.05,"sine",.005)}this.nextBeat+=t,this.beat++}}voice(e,t,i,s,r,a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.value=e,c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+Math.max(.005,a)),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c).connect(this.musicBus),l.start(t),l.stop(t+i+.05)}ensure(){if(this.ctx)return this.ctx;try{const e=window.AudioContext??window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55;const t=this.ctx.createDynamicsCompressor();this.master.connect(t).connect(this.ctx.destination);const i=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,i,this.ctx.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<i;r++)s[r]=Math.random()*2-1}catch{this.ctx=null}return this.ctx}ready(){if(!this.enabled)return null;const e=this.ensure();if(!e||e.state==="closed")return null;if(e.state==="suspended")so(e.resume());else if(e.state!=="running")return null;return e}tone(e,t,i,s,r="sine",a){const o=this.ctx,l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+i),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+.008),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c).connect(this.master),l.start(t),l.stop(t+i+.02)}bell(e,t,i,s){this.tone(e,t,i,s,"sine"),this.tone(e*2.01,t,i*.6,s*.28,"sine"),this.tone(e*3.02,t,i*.3,s*.1,"triangle")}noiseHit(e,t,i,s,r=1){const a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=r;const c=a.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l).connect(c).connect(this.master),o.start(e),o.stop(e+t+.02)}place(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(260,t,.12,.35,"sine",150),this.noiseHit(t,.05,.12,1800,2)}merge(e,t){const i=this.ready();if(!i)return;const s=i.currentTime,r=ic[Math.min(ic.length-3,e+t-1)];this.bell(or(r),s,.5,.22),this.bell(or(r+7),s+.07,.6,.18),t>=2&&this.bell(or(r+12),s+.14,.7,.16)}chain(e){const t=this.ready();if(!t)return;const i=t.currentTime+.05;for(let s=0;s<Math.min(e+1,5);s++)this.tone(or(ic[s+e]),i+s*.055,.22,.1,"triangle")}festival(){const e=this.ready();if(!e)return;const t=e.currentTime;[0,4,7,12,16,19,24].forEach((i,s)=>this.bell(or(i),t+s*.07,.9,.16)),this.noiseHit(t,.6,.05,6e3,.7)}crumble(){const e=this.ready();if(!e)return;const t=e.currentTime;this.noiseHit(t,.32,.35,420,.8),this.tone(120,t,.2,.2,"sine",60)}invalid(){const e=this.ready();e&&this.tone(160,e.currentTime,.12,.18,"triangle",120)}swap(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(520,t,.08,.12,"sine",700),this.tone(700,t+.06,.08,.1,"sine",520)}gameOver(){const e=this.ready();if(!e)return;const t=e.currentTime;[12,7,4,0].forEach((i,s)=>this.bell(or(i),t+s*.18,.9,.17))}warning(){const e=this.ready();if(!e)return;const t=e.currentTime;this.tone(330,t,.15,.08,"triangle"),this.tone(311,t+.16,.2,.08,"triangle")}}function g1(n,e=1){switch(n){case"tap":return 8;case"land":return 12;case"merge":return Math.min(25,15+(Math.max(1,Math.floor(e))-1)*3);case"festival":return[25,50,25,50,70];case"invalid":return[6,40,6];case"gameOver":return[30,90,50]}}function Kd(){return typeof navigator>"u"?null:navigator}class v1{constructor(e){this.enabled=e}get supported(){const e=Kd();return!!e&&"vibrate"in e&&typeof e.vibrate=="function"}tap(){this.pulse("tap")}land(){this.pulse("land")}merge(e){this.pulse("merge",e)}festival(){this.pulse("festival")}invalid(){this.pulse("invalid")}gameOver(){this.pulse("gameOver")}pulse(e,t){if(!this.enabled||!this.supported)return;const i=Kd();if(!(i.userActivation&&!i.userActivation.hasBeenActive))try{i.vibrate(g1(e,t))}catch{}}}const Ge=n=>document.getElementById(n),te={stage:Ge("stage"),hud:Ge("hud"),dock:document.querySelector(".dock"),score:Ge("score"),best:Ge("best"),dailyChip:Ge("dailyChip"),dailyLeft:Ge("dailyLeft"),status:Ge("status"),announcer:Ge("announcer"),sheetAnnouncer:Ge("sheetAnnouncer"),coach:Ge("coach"),coachText:Ge("coachText"),coachSkip:Ge("coachSkip"),popups:Ge("popups"),banner:Ge("banner"),nextCard:Ge("nextCard"),nextImg:Ge("nextImg"),keepBtn:Ge("keepBtn"),keepImg:Ge("keepImg"),menuBtn:Ge("menuBtn"),spinLeft:Ge("spinLeft"),undoBtn:Ge("undoBtn"),coins:Ge("coins"),shopBtn:Ge("shopBtn"),powerBar:Ge("powerBar"),powerText:Ge("powerText"),powerCancel:Ge("powerCancel"),spinRight:Ge("spinRight"),sizePrev:Ge("sizePrev"),sizeNext:Ge("sizeNext"),sizeName:Ge("sizeName"),sizeSub:Ge("sizeSub"),home:Ge("home"),homeBest:Ge("homeBest"),playBtn:Ge("playBtn"),homeNewBtn:Ge("homeNewBtn"),dailyBtn:Ge("dailyBtn"),dailyTitle:Ge("dailyTitle"),dailySub:Ge("dailySub"),dailyMeta:Ge("dailyMeta"),homeHelpBtn:Ge("homeHelpBtn"),homeJournalBtn:Ge("homeJournalBtn"),homeSettingsBtn:Ge("homeSettingsBtn"),modal:Ge("modal"),modalArt:Ge("modalArt"),modalTitle:Ge("modalTitle"),modalBody:Ge("modalBody"),modalActions:Ge("modalActions"),closeModal:Ge("closeModal"),webglError:Ge("webglError")},Et=It,Ze=new V0,tt=new m1(Ze.getSound(),Ze.getMusic()),dn=new v1(Ze.getHaptics()),zu=window.matchMedia("(prefers-reduced-motion: reduce)"),ro="https://pixel-pusher-hub.github.io/little-nooks/",Jd=u0(["9..8.7.1",".6..5..2","7.3...4.","..2...1.",".1..3...","2..4.1..","..2.1..1","1...2..1"]);function _1(n,e=!1){const t=au(n),i=Math.floor((8-n)/2);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const a=r+i,o=s+i;a>=0&&o>=0&&a<8&&o<8&&(t[s*n+r]=Jd[o*8+a]===kt?Mt:Jd[o*8+a])}return e&&(t[cu(n)]=Vt),t}const Kt=n=>n.mode??"classic",cs=()=>d0(new Date);let jt=Ze.getSize(of);const di=!0,Dn=n=>Ma(n.board),Us=n=>!!n.glow;function el(n=jt,e=di){const t=Ze.loadGame(Rs,n,e);return t&&!t.over&&Kt(t)==="classic"&&Dn(t)===n&&Us(t)===e?t:uu(gf(),Et,n,e,!0)}function Cp(n){const e=Ze.loadDaily(Rs);return e&&!e.over&&Kt(e)==="daily"&&e.dailyKey===n?e:Tf(n,Et)}let F=el(),Wt=Ze.getJournal(),ui=Ze.getBest(jt,di),Uo=F.turn===1?ui:Ze.getRoundStartBest(jt,di)??ui;Ze.setRoundStartBest(Uo,jt,di);let Rp=0,qn=0,gn=!1,mt=!0,as=F.score,Qt=null,go=null,ss=null,rs=null,sa=!1,vo=!1,tl=0,Qc=!1,Pp=!1,Re=null;const _o=new Map;let Cs=null;const lt=n=>Math.round(n).toLocaleString("en-US"),Rn=()=>!te.modal.classList.contains("hidden"),Vn=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Hn=(n,e,t=`${e}s`)=>`${n} ${n===1?e:t}`;let Gi=!1,jc=0;function Bt(n,e=""){te.status.textContent=n,te.status.className=`status${e?` ${e}`:""}`,Gi=!1,clearTimeout(jc),e==="good"&&(jc=window.setTimeout(()=>te.status.classList.add("faded"),2600))}function Zd(n){Bt(n,"good"),clearTimeout(jc),Gi=!0}function Ea(n=F){return n.pieceLimit?Math.max(0,n.pieceLimit-(n.turn-1)):1/0}function x1(n){return n.endReason==="dark"?"The night closed in: no lit tile is free.":n.endReason==="limit"?Kt(n)==="daily"?`All ${n.pieceLimit} pieces placed. Day complete!`:"Out of pieces. Build something new next time to earn more!":"No empty tiles left."}function Pn(){const n=Di(F).length,e=Ea();F.over?Bt(x1(F),"danger"):Qn(F.next)?Bt(`A rare ${Gt(F.next)}! Set it down anywhere, even in the dark. It burns for ${Jn[F.next].life} moves.`,"good"):n<=4?Bt(F.glow?`Only ${Hn(n,"lit tile")} left. Build a light, or merge!`:`Only ${Hn(n,"free tile")} left. Make every merge count!`,"danger"):e<=10?Bt(`Only ${Hn(e,"piece")} left. Build something new to earn more!`,"warn"):Bt(Kt(F)==="daily"?`Daily Terrain: ${Hn(e,"piece")} to place today.`:F.glow?"Build in the light. Every building lights the tiles around it.":"Tap an empty tile to place your piece.")}let Qd=0;function pn(n){const e=Rn()?te.sheetAnnouncer:te.announcer;te.announcer.textContent="",te.sheetAnnouncer.textContent="",clearTimeout(Qd),Qd=window.setTimeout(()=>e.textContent=n,60)}function Lp(n){n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}function lr(n,e,t=""){const i=document.createElement("div");i.className=`popup${t?` ${t}`:""}`,i.textContent=n,i.style.left=`${e.x}px`,i.style.top=`${e.y}px`,te.popups.appendChild(i),setTimeout(()=>i.remove(),1100)}let jd=0;function ra(n){te.banner.textContent=n,te.banner.classList.remove("show"),te.banner.offsetWidth,te.banner.classList.add("show"),clearTimeout(jd),jd=window.setTimeout(()=>te.banner.classList.remove("show"),1250)}function _a(n,e=160){const t=`${n}@${e}`;if(!_o.has(t)&&Re){const i=Re.thumbnail(n,e);if(!i)return"";_o.set(t,i)}return _o.get(t)??""}function an(n,e="",t=50){return`<img src="${_a(n)}" alt="${Vn(e)}" width="${t}" height="${t}" draggable="false" />`}function M1(){return Kt(F)==="daily"?Math.max(Wt.daily.scores[F.dailyKey??""]??0,F.score):Math.max(ui,F.score)}function os(){te.score.textContent=lt(as),T1(),te.best.textContent=lt(M1()),Dp(),Lr(),Vu()}function Dp(){if(te.dailyChip.classList.toggle("hidden",!F.pieceLimit),!F.pieceLimit)return;const n=Ea();te.dailyLeft.textContent=String(n),te.dailyChip.classList.toggle("low",n<=10)}function y1(){const n=F.next;if(n===kt)return{text:"Never merges",good:!1,spots:0};if(Qn(n))return{text:`Goes anywhere, burns ${Jn[n].life} moves`,good:!0,spots:0};const e=F.over?[]:fu(F.board,n,Et,Di(F));if(!e.length)return{text:n===Ht?`3 ${mn[Ht].name}s = Festival`:"No match yet",good:!1,spots:0};let t=1;for(const i of e)t=Math.max(t,Vo(F,i,Et).state.lastChain);return{text:t>=2?`Chain ×${t} possible!`:`Merges in ${Hn(e.length,"spot")}`,good:!0,spots:e.length}}let ef=-1,Gu=0;function Vu(){const n=F.after;te.nextImg.hidden=n===void 0,n!==void 0&&(te.nextImg.src=_a(n)),te.nextImg.alt="";const e=y1(),t=n===void 0?"":` Then: ${Gt(n)}.`;te.nextCard.setAttribute("aria-label",`In hand: ${Gt(F.next)}, ${df(F.next)}. ${e.text}.${t} Show what's coming.`),te.nextCard.title=`In hand: ${Gt(F.next)} (${e.text}).${t} (I: what's coming)`,Wu(),F.stash===Mt?(te.keepImg.removeAttribute("src"),te.keepImg.hidden=!0,te.keepBtn.classList.add("empty"),te.keepBtn.setAttribute("aria-label",`Keep slot is empty. Store the ${Gt(F.next)} for later`)):(te.keepImg.src=_a(F.stash),te.keepImg.hidden=!1,te.keepImg.alt="",te.keepBtn.classList.remove("empty"),te.keepBtn.setAttribute("aria-label",`Keep slot holds a ${Gt(F.stash)}. Swap it with the ${Gt(F.next)}`),!F.over&&ef!==F.turn&&e.spots===0&&F.stash!==kt&&fu(F.board,F.stash,Et,Di(F)).length&&(ef=F.turn,te.keepBtn.classList.remove("nudge"),te.keepBtn.offsetWidth,te.keepBtn.classList.add("nudge")))}function tf(){if(!Re)return;const n=window.innerWidth,e=window.innerHeight,t={top:0,right:0,bottom:0,left:0};document.querySelectorAll("[data-inset]").forEach(s=>{const r=getComputedStyle(s);if(r.display==="none")return;const a=r.getPropertyValue("--inset").trim(),o=s.getBoundingClientRect();!o.width||!o.height||(a==="top"?t.top=Math.max(t.top,o.bottom):a==="bottom"?t.bottom=Math.max(t.bottom,e-o.top):a==="right"?t.right=Math.max(t.right,n-o.left):a==="left"&&(t.left=Math.max(t.left,o.right)))}),document.body.style.setProperty("--dock-h",`${Math.round(te.dock.getBoundingClientRect().height)}px`);const i=Math.min(n,e)<500?6:16;Re.setInsets({top:t.top+i,right:t.right+i,bottom:t.bottom+i,left:t.left+i})}function Fo(){return!gn&&!F.over&&!Rn()&&!mt}function Ip(n){const e=Vo(F,n,Et),t=new Set;let i=0,s=null;for(const o of e.events)o.kind==="place"||o.kind==="expire"||o.kind==="remove"||o.kind==="upgrade"||(o.cells.forEach(l=>t.add(l)),i+=o.points,s=o);if(t.delete(n),!s)return null;const r=e.state.lastChain,a=s.kind==="merge"?`→ ${mn[s.toTier].name}`:s.kind==="festival"?"→ Skyline Festival!":"shatters rocks";return{cells:[...t],text:`${r>1?`Chain ×${r} `:""}${a}  +${lt(i)}`}}function xi(n){if(ss=n,!Re)return;if(Kn&&n!==null&&Fo()){const t=Wo(F,Kn).includes(n);Re.setHover(n,null,[],!t),t&&Bt(`${xo[Kn].name} the ${Gt(F.board[n])}: ${lt(Xo(F,Kn,n,Et))} coins`,"good"),Gi=!0;return}if(n===null||!Fo()){Re.setHover(null,null,[]),Gi&&!gn&&!mt&&Pn();return}if(F.board[n]!==Mt){Re.setHover(n,null,[],!0),Gi&&Pn();return}if(!hu(F,n)){Re.setHover(n,null,[],!0),Bt("Too dark to build here. Build next to the light.","warn"),Gi=!0;return}const e=Ip(n);Re.setHover(n,F.next,e?.cells??[]),e?Zd(e.text+(sa?" · lift to place":"")):sa?Zd("No merge here · lift to place, or slide off to cancel"):Gi&&Pn()}function ks(){if(Kt(F)==="daily"){F.over?Ze.clearDaily():Ze.saveDaily(F);return}const n=Dn(F),e=Us(F);F.over?Ze.clearGame(n,e):Ze.saveGame(F,n,e),Ze.submitScore(F.score,n,e),ui=Math.max(ui,Ze.getBest(n,e))}function Tr(n){if(zs(),Hu=null,Re?.cancelAnimations(),qn++,gn=!1,Cs=null,F=n,as=F.score,vo=!1,S1(),Kt(F)==="daily")Rp=Wt.daily.scores[F.dailyKey??""]??0;else{const e=Dn(F),t=Us(F);ui=Ze.getBest(e,t),F.turn===1?(Uo=ui,Ze.setRoundStartBest(ui,e,t)):Uo=Ze.getRoundStartBest(e,t)??ui}mt||(nl(F),os(),Pn())}function nl(n){Re&&(Re.sync(n.board),Re.setLit(n.glow?Cr(n.board):null),Re.setBurn(n.burn))}const gr=[];function il(){Kt(F)!=="daily"&&(gr.push({state:F,journal:Wt}),gr.length>30&&gr.shift())}function S1(){gr.length=0,Lr()}function sl(){return gr.length>0&&Kt(F)!=="daily"}function Lr(){te.undoBtn.disabled=!sl()||gn}function Oo(){if(!Re||gn||mt||!sl())return;const n=gr.pop();Rn()&&nn(!1),zs(),Re.cancelAnimations(),qn++,Cs=null,F=n.state,Wt=n.journal,Ze.saveJournal(Wt),ks(),as=F.score,nl(F),os(),Pn(),tt.unlock(),tt.swap(),dn.tap(),pn(`Move undone. Next: ${Gt(F.next)}.`),rs?.type==="mouse"&&ss!==null&&xi(Re.pick(rs.x,rs.y))}function b1(n){const e=Kt(n)==="daily",t=n.score>0&&n.score>(e?Rp:Uo),i=U0(Wt,n,cs());return Wt=i.journal,Ze.saveJournal(Wt),_r.active&&!e&&ol(),{state:n,newBest:t,highlights:i.highlights}}function w1(n,e){const t=n.filter(o=>o.kind==="merge"),i=n.find(o=>o.kind==="festival"),s=n.find(o=>o.kind==="crumble"),r=[];if(i)r.push(`Skyline Festival! +${lt(e)}`);else if(t.length){const o=t[t.length-1],l=t.length>1?`Chain ×${t.length}: `:"";r.push(`${l}made a ${o.kind==="merge"?mn[o.toTier].name:""}, +${lt(e)}`)}else{const o=n[0];r.push(`Placed a ${o.kind==="place"?Gt(o.piece):"piece"}`)}s&&s.kind==="crumble"&&r.push(`shattered ${Hn(s.cells.length,"rock")}`);const a=n.find(o=>o.kind==="expire");return a&&a.kind==="expire"&&r.push(a.cells.length>1?`${a.cells.length} lights burned out`:"a light burned out"),r.join(", ")}async function eu(n){if(!Re||!Fo())return;if(Kn){await R1(n);return}if(tt.unlock(),F.board[n]!==Mt){tt.invalid(),dn.invalid(),Bt("That tile is taken. Pick an empty one.","warn"),pn("That tile is taken. Pick an empty one."),Re.nudge(n);return}if(!hu(F,n)){tt.invalid(),dn.invalid(),Bt("Too dark to build there. Build next to the light.","warn"),pn("Too dark to build there. Build next to the light.");return}const e=Vo(F,n,Et);if(!e.accepted)return;il(),gn=!0,Hu=n,Lr();const t=qn,i=F;Gu=F.highestTier,F=e.state,Wt=Pf(Wt,e.events,e.points);const s=F.over?b1(F):null;Ze.saveJournal(Wt),ks(),Vu(),Dp(),Re.setSuggestions([]),Dr();try{await Re.animateMove(e.events,F.board,{onEvent:(u,d)=>{t===qn&&Np(u,d)}})}finally{t===qn&&(as=F.score,gn=!1)}if(t!==qn)return;F.glow&&(Re.setLit(Cr(F.board)),Re.setBurn(F.burn)),os();const r=(F.pieceLimit??0)-(i.pieceLimit??0);r>0&&F.budget&&(ra(`New: ${mn[F.highestTier].name}! +${r} pieces`),tt.festival());const a=Di(F).length,o=a<=Math.max(4,Math.round(F.board.length*.12));o&&!vo&&!F.over&&(vo=!0,tt.warning()),o||(vo=!1);const l=Ea(),c=F.over?"":a<=4?` Only ${Hn(a,F.glow?"lit tile":"free tile")} left.`:l<=10?` Only ${Hn(l,"piece")} left.`:"";if(pn(`${w1(e.events,e.points)}. ${F.over?"Round over.":`Next: ${Gt(F.next)}.`}${c}`),s){await I1(s,t);return}F.lastChain>=2?Bt(`Lovely! ×${F.lastChain} chain reaction.`,"good"):e.points>Et.placePoints?Bt(`+${lt(e.points)} points`,"good"):Pn(),ll(e.events),rs?.type==="mouse"&&ss!==null&&xi(Re.pick(rs.x,rs.y)),Qt!==null&&Re.setCursor(Qt)}function Np(n,e){if(n.kind==="place"){tt.place(),dn.land();return}if(n.kind==="expire"||n.kind==="remove"){tt.crumble(),lr(n.kind==="remove"?"Cleared":n.cells.length>1?"Lights out":"Burned out",e,"rock");return}if(n.kind==="upgrade"){tt.merge(n.toTier,1),dn.merge(1),lr(mn[n.toTier].name,e,"big");return}as+=n.points,te.score.textContent=lt(as),Lp(te.score),n.kind==="merge"?(tt.merge(n.toTier,n.step),dn.merge(n.step),lr(`+${lt(n.points)}`,e,n.step>=2?"big":""),lr(`+${yf([n],Et)}`,{x:e.x,y:e.y+26},"coin"),n.step>=2&&(tt.chain(n.step),ra(`Chain ×${n.step}!`)),n.toTier>Gu&&n.toTier>=2&&n.step<2&&!F.budget&&ra(`A ${mn[n.toTier].name}!`)):n.kind==="festival"?(tt.festival(),dn.festival(),ra("Skyline Festival!"),lr(`+${lt(n.points)}`,e,"big")):n.kind==="crumble"&&(tt.crumble(),dn.land(),lr(`+${lt(n.points)}`,e,"rock"))}function tu(){Fo()&&(tt.unlock(),il(),F=M0(F,Et),Lr(),ks(),tt.swap(),dn.tap(),Vu(),te.nextCard.classList.remove("pop"),te.nextCard.offsetWidth,te.nextCard.classList.add("pop"),xi(ss),ss===null&&Pn(),pn(`Next: ${Gt(F.next)}. Kept: ${F.stash===Mt?"nothing":Gt(F.stash)}.`),ll())}function Ar(){_r.active&&Kt(F)==="classic"&&F.turn>1&&ol(),Tr(uu(gf(),Et,jt,di,!0)),ks(),nn(!1),Xu(),rl()}function Bo(n=!1){tt.unlock();const e=cs(),t=n?Tf(e,Et):Cp(e);Tr(t),ks(),nn(!1),Xu(),rl(),t.turn===1&&(Bt(`Daily Terrain #${Mr(e)}: everyone gets this island today. Place ${aa} pieces for your best score.`,"good"),pn(`Daily Terrain number ${Mr(e)}. ${aa} pieces. Next: ${Gt(F.next)}.`))}let Hu=null;function E1(){const n=Di(F);if(!n.length)return null;const e=Dn(F),t=Hu??cu(e),i=t%e,s=Math.floor(t/e);let r=n[0],a=1/0;for(const o of n){const l=Math.abs(o%e-i)+Math.abs(Math.floor(o/e)-s);l<a&&(r=o,a=l)}return r}function Wu(){if(!Re)return;const n=!mt&&!F.over&&!Kn;Re.setRest(n?E1():null,n?F.next:null)}let nf=0;function T1(){const n=F.coins??0;te.coins.textContent=lt(n),n>nf&&Lp(te.coins),nf=n,te.shopBtn.setAttribute("aria-label",`Shop: ${lt(n)} coins to spend`)}function Up(){if(!Re||mt||gn||F.over||Rn())return;zs(),tt.unlock();const n=F.coins??0,e=du(F,Et),t=r=>{const a=r.power?xo[r.power].name:Gt(r.piece),o=r.power?xo[r.power].hint:r.kind==="light"?df(r.piece):`Tier ${r.piece+1}`,l=r.power?`<span class="power-art" aria-hidden="true"><svg><use href="#i-${r.power}" /></svg></span>`:an(r.piece,"",56),c=n>=r.price;return`<button class="shop-item" type="button" data-key="${r.key}" ${c?"":"disabled"} aria-label="${Vn(`${a}: ${o}. ${r.power==="upgrade"?"From ":""}${r.price} coins`)}">
      ${l}<span class="shop-name">${Vn(a)}</span><small>${Vn(o)}</small>
      <span class="price"><svg aria-hidden="true"><use href="#i-coin" /></svg>${r.power==="upgrade"?"from ":""}${lt(r.price)}</span></button>`},i=(r,a)=>a.length?`<h3>${r}</h3><div class="shop-grid">${a.map(t).join("")}</div>`:"",s=F.highestTier<Ht?`<p class="shop-note">Build a ${Vn(mn[F.highestTier+1].name)} to unlock it here.</p>`:"";Li({title:"Shop",body:`<div class="shop">
      <div class="shop-wallet"><svg aria-hidden="true"><use href="#i-coin" /></svg><b>${lt(n)}</b><span>coins · every merge earns more</span></div>
      ${i("Pieces",e.filter(r=>r.kind==="piece"))}
      ${s}
      ${i("Lights",e.filter(r=>r.kind==="light"))}
      ${i("Powers",e.filter(r=>r.kind==="power"))}
      <p class="shop-note">A bought piece goes straight into your hand and doesn't use up one of your pieces. Each time you buy something, it gets more expensive.</p>
    </div>`,actions:[{label:"Done",onClick:()=>nn()}],mount:r=>r.querySelectorAll(".shop-item").forEach(a=>a.addEventListener("click",()=>A1(a.dataset.key)))})}function A1(n){const e=du(F,Et).find(s=>s.key===n);if(!e||(F.coins??0)<e.price||gn)return;if(e.power&&e.power!=="reroll"){nn(!1),C1(e.power);return}const t=e.power==="reroll"?Ef(F,"reroll",-1,Et):y0(F,n,Et);if(!t.accepted)return;il(),F=t.state,ks(),nn(!1),tt.swap(),dn.tap(),os(),Lr();const i=Gt(F.next);ra(e.power?`New piece: ${i}`:`Bought: ${i}`),pn(`${e.power?"Rerolled":"Bought"}: a ${i} is in your hand.`)}let Kn=null;function C1(n){Kn=n,Re?.setSuggestions(Wo(F,n)),te.powerText.textContent=n==="bulldoze"?`Tap a tile to clear it (${lt(Xo(F,n,-1,Et))} coins)`:"Tap a building to raise it one tier",te.powerBar.classList.remove("hidden"),Dr(),Wu(),Bt(n==="bulldoze"?"Bulldoze: pick a tile to clear.":"Upgrade: pick a building. Bigger ones cost more.","good"),pn(`${xo[n].name}: pick a tile, or press Escape to cancel.`)}function zs(n=!1){Kn&&(Kn=null,te.powerBar.classList.add("hidden"),Re?.setSuggestions([]),Re?.setHover(null,null,[]),Wu(),n&&Pn())}async function R1(n){if(!Re||!Kn)return;const e=Kn;if(tt.unlock(),!Wo(F,e).includes(n)){tt.invalid(),dn.invalid(),Bt(e==="bulldoze"?"Pick a tile with something on it.":"Pick a building to upgrade.","warn"),Re.nudge(n);return}const t=Xo(F,e,n,Et),i=Ef(F,e,n,Et);if(!i.accepted){tt.invalid(),Bt(`That needs ${lt(t)} coins.`,"warn");return}il(),gn=!0,Lr(),zs();const s=qn;Gu=F.highestTier,F=i.state,Wt=Pf(Wt,i.events,i.points),Ze.saveJournal(Wt),ks();try{await Re.animateMove(i.events,F.board,{onEvent:(r,a)=>{s===qn&&Np(r,a)}})}finally{s===qn&&(as=F.score,gn=!1)}s===qn&&(Re.setLit(Cr(F.board)),Re.setBurn(F.burn),os(),i.points>0?Bt(`+${lt(i.points)} points`,"good"):Pn())}function Fp(){const n=Ze.loadGame(Rs,jt,di);return{inProgress:!!n&&!n.over&&n.turn>1&&Kt(n)==="classic"&&Dn(n)===jt&&Us(n)===di,saved:n}}function vr(){const{inProgress:n,saved:e}=Fp();te.playBtn.textContent=n?"Continue":"Play",te.homeNewBtn.classList.toggle("hidden",!n),te.homeBest.textContent=lt(Ze.getBest(jt,di));const t=bs.indexOf(jt);te.sizeName.textContent=`${jt} × ${jt}`,te.sizeSub.textContent=n0[jt],te.sizePrev.disabled=t<=0,te.sizeNext.disabled=t>=bs.length-1,te.playBtn.setAttribute("aria-label",`${te.playBtn.textContent} on the ${jt} by ${jt} island`);const i=cs(),s=Mr(i),r=Ze.loadDaily(Rs),a=!!r&&!r.over&&r.dailyKey===i&&r.turn>1,o=Wt.daily.scores[i];te.dailyTitle.textContent=a?"Continue":"Daily",te.dailySub.textContent=a?`Continue · ${Hn(Ea(r),"piece")} left`:o!==void 0?`Played today · best ${lt(o)} · play again`:`Today's island · ${aa} pieces`;const l=Lf(Wt,i);te.dailyMeta.textContent=l>0?String(l):"",te.dailyMeta.classList.toggle("hidden",l===0),te.dailyBtn.title=`Daily Terrain #${s}: ${te.dailySub.textContent}`,te.dailyBtn.setAttribute("aria-label",`Daily Terrain number ${s}. ${te.dailySub.textContent}.${l?` Streak: ${Hn(l,"day")}.`:""}`);const c=n&&e?e:{board:_1(jt,di),glow:di};Re?.sync(c.board),Re?.setLit(c.glow?Cr(c.board):null)}function sf(n){const e=bs.indexOf(jt)+n;e<0||e>=bs.length||(jt=bs[e],Ze.setSize(jt),tt.unlock(),tt.swap(),Kt(F)==="classic"&&Tr(el()),vr())}function xa(){const n=!mt;if(Re?.cancelAnimations(),qn++,gn=!1,Cs=null,mt=!0,as=F.score,document.body.classList.add("at-home"),Re&&(Re.canvas.tabIndex=-1),nn(!1),zs(),Re?.setRest(null,null),Re?.setHover(null,null,[]),Re?.setCursor(null),Re?.setSuggestions([]),Dr(),Pp){location.reload();return}vr(),n&&te.playBtn.focus({preventScroll:!0})}function Xu(){tl=performance.now()+350,mt&&(mt=!1,document.body.classList.remove("at-home"),Re&&(Re.canvas.tabIndex=0),nl(F)),os(),Pn(),ll()}function rf(){const n=Dn(F);if(go!==null&&go<n*n)return go;const e=Math.floor((n-1)/2);return e*n+e}function rl(){Re?.canvas.focus({preventScroll:!0})}function al(){tt.unlock(),(Kt(F)!=="classic"||Dn(F)!==jt||Us(F)!==di)&&Tr(el()),F.over?Ar():(mt&&nl(F),Xu()),Ze.hasSeenHelp()?rl():(On=Re?.canvas??null,cl())}const _r={active:!Ze.getCoachDone()&&Ze.getBest()===0&&Wt.rounds===0,said:new Set};function Dr(){te.coach.classList.add("hidden")}function ol(){_r.active=!1,Ze.setCoachDone(),Dr(),Re?.setSuggestions([])}function sc(n,e=!1){return Di(F).filter(t=>e?ff(t,Dn(F)):!0).map(t=>[t,F0(F,t,Et)]).sort((t,i)=>i[1]-t[1]).slice(0,n).map(([t])=>t)}function ll(n){if(!Re)return;if(!_r.active||mt||Kt(F)!=="classic"||F.over||Rn()){Dr(),Re.setSuggestions([]);return}if(F.turn>16){ol();return}const e=a=>_r.said.has(a)?!1:(_r.said.add(a),!0),t=Gt(F.next),i=fu(F.board,F.next,Et,Di(F));let s="",r=[];n?.some(a=>a.kind==="merge"&&a.step>=2)&&e("chain")?s="A chain! The new piece merged again, and each extra step multiplies the points.":n?.some(a=>a.kind==="merge")&&e("merge")?s="Three became one, right where you placed it. Merging also frees up space.":F.glow&&F.turn===1?(s=`Night has fallen. Build in the campfire's light: place your ${t} on a glowing tile.`,r=sc(3)):F.glow&&n?.some(a=>a.kind==="merge"&&a.toTier>=2)&&e("light")?s="A building! Every building lights the tiles around it, so your town can grow into the dark.":i.length&&F.next!==kt?(s=`Put the ${t} on a glowing tile to merge three of a kind!`,r=i.slice(0,4)):F.turn===1?(s=`Tap a glowing tile to place your ${t}. Three matching pieces side by side merge.`,r=sc(3)):F.turn>=5&&F.stash===Mt&&e("keep")?s="Tip: tap Keep to save the next piece for later. Swapping is free.":(s="Build pairs: two matching pieces side by side are one away from a merge.",r=sc(2)),te.coachText.textContent=s,te.coach.classList.remove("hidden"),Re.setSuggestions(r)}let On=null,nu=null;function Li(n){Rn()||(On=document.activeElement),te.modalTitle.textContent=n.title,n.describe?te.modal.setAttribute("aria-describedby","modalBody"):te.modal.removeAttribute("aria-describedby"),te.modalBody.innerHTML=n.body,te.modalArt.innerHTML=n.art??"",te.modalActions.innerHTML="";let e=!1;for(const t of n.actions??[]){const i=document.createElement("button");i.type="button",i.className=`btn ${t.kind==="dark"?"btn-dark":"btn-primary"}`,i.innerHTML=`${t.icon?`<svg aria-hidden="true"><use href="#${t.icon}" /></svg>`:""}<span>${Vn(t.label)}</span>`,t.id?i.id=t.id:t.kind!=="dark"&&!e&&(i.id="modalAction",e=!0),i.addEventListener("click",t.onClick),te.modalActions.appendChild(i)}nu=n.onClose??null,n.mount?.(te.modalBody),te.modal.classList.remove("hidden"),te.modal.querySelector(".sheet").scrollTop=0,Re?.setHover(null,null,[]),Dr(),(te.modalActions.querySelector("button")??te.closeModal).focus({preventScroll:!0})}function iu(n){return document.contains(n)&&n.getClientRects().length>0&&getComputedStyle(n).visibility!=="hidden"}function P1(){let n;mt?n=On&&te.home.contains(On)&&iu(On)?On:te.playBtn:n=On&&On!==document.body&&document.contains(On)&&!te.home.contains(On)&&!te.modal.contains(On)&&iu(On)?On:Re?.canvas??null,n?.focus({preventScroll:!0}),document.activeElement!==n&&(mt?te.playBtn:Re?.canvas)?.focus({preventScroll:!0})}function nn(n=!0){if(!Rn())return;te.modal.classList.add("hidden"),tl=performance.now()+350;const e=nu;if(nu=null,e?.(),n&&P1(),Cs&&!Rn()&&!mt){const t=Cs;Cs=null,Gp(t)}else!Rn()&&!mt&&!gn&&ll()}function cl(){const n='<span class="arrow" aria-hidden="true">→</span>',e=mt;Li({title:"How to Play",body:`
      <div class="steps">
        <div class="step"><div class="step-art" aria-hidden="true">${an(0)}${an(0)}${an(0)}</div>
          <div><h3>1. Merge 3</h3><p>Place 3 or more of the same piece side by side. Diagonals don't count.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${an(0)}${n}${an(1)}${n}${an(2)}</div>
          <div><h3>2. Create bigger</h3><p>A merge makes one piece of the next tier, right where you placed.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${an(4)}${n}${an(6)}${n}${an(ru+2)}</div>
          <div><h3>3. Grow a city</h3><p>Bushes grow into trees, then small houses, cottages, family houses, apartments and towers, then ever grander skyscrapers: forty things to build. Chains score ×2, ×3, ×4…</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${an(Vt)}</div>
          <div><h3>Build in the light</h3><p>Night has fallen: you can only build on lit tiles. The campfire lights the tiles around it, and so does every building; bigger ones light more.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true"><span class="power-art"><svg><use href="#i-bag" /></svg></span></div>
          <div><h3>Coins and the shop</h3><p>Every merge earns coins. Spend them in the shop on pieces you've already built, rare lights, or powers: Reroll a piece, Bulldoze a tile, or Upgrade a building. Prices rise each time you buy.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${an(yn)}${an(An)}</div>
          <div><h3>Rare lights</h3><p>Now and then you get a Campfire (lasts ${Jn[yn].life} moves) or an even rarer Lamppost (${Jn[An].life} moves, lights farther). Set them down anywhere, even in the dark, and build there before they burn out.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${an(3)}</div>
          <div><h3>Pieces</h3><p>A round has a budget of pieces. Build something bigger than ever before and you earn more, so you can keep going.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${an(1)}</div>
          <div><h3>Keep slot</h3><p>Stash the next piece and swap it back any time. It's free.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${an(2)}</div>
          <div><h3>Daily Terrain</h3><p>One shared island a day: place ${aa} pieces for your best score and keep a streak.</p></div></div>
      </div>
      <p class="keys">The round ends when you run out of pieces or of room to build. Hover, or touch and slide, to preview a merge; lift to place, or slide off the island to cancel. The piece in your hand waits on the island, greyed out; the Next bubble shows the one after it. The back arrow takes back your last move. Turn the island with the round arrows, or drag anywhere off it.<br/>
      Keys: <kbd>←↑→↓</kbd> move · <kbd>Enter</kbd> place · <kbd>S</kbd> keep · <kbd>B</kbd> shop · <kbd>Z</kbd> undo · <kbd>Q</kbd> <kbd>E</kbd> turn · <kbd>I</kbd> odds · <kbd>V</kbd> camera · <kbd>M</kbd> mute · <kbd>Esc</kbd> menu</p>`,actions:[{label:e?te.playBtn.textContent||"Play":F.turn===1?"Let's play":"Back to my island",onClick:()=>{Ze.markHelpSeen(),nn(!e),e&&al()}}],onClose:()=>Ze.markHelpSeen()})}function Op(){const n=Kt(F)==="daily";Li({title:n?`Daily Terrain #${Mr(F.dailyKey??cs())}`:"Menu",body:`<div class="menu-list">
      <button class="btn btn-primary" id="menuResume" type="button">Resume</button>
      <button class="btn btn-dark" id="menuNew" type="button">${n?"Restart today's island":"New game"}</button>
      <button class="btn btn-dark" id="menuOdds" type="button">What's coming</button>
      <button class="btn btn-dark" id="menuJournal" type="button">Journal</button>
      <button class="btn btn-dark" id="menuHelp" type="button">How to play</button>
      <button class="btn btn-dark" id="menuSettings" type="button">Settings</button>
      <button class="btn btn-dark" id="menuHome" type="button">Home</button>
    </div>`,mount:e=>{e.querySelector("#menuResume").addEventListener("click",()=>nn()),e.querySelector("#menuNew").addEventListener("click",zp),e.querySelector("#menuOdds").addEventListener("click",$u),e.querySelector("#menuJournal").addEventListener("click",Yu),e.querySelector("#menuHelp").addEventListener("click",cl),e.querySelector("#menuSettings").addEventListener("click",kp),e.querySelector("#menuHome").addEventListener("click",xa)}}),Ge("menuResume").focus({preventScroll:!0})}function Bp(){const n=Ze.getMotion();return n==="system"?zu.matches:n==="on"}function su(){const n=Bp();Re?.setReducedMotion(n),document.body.classList.toggle("reduce-motion",n),document.body.classList.toggle("allow-motion",Ze.getMotion()==="off")}function kp(){const n=Re?.getView()??"iso",e=(t,i,s)=>`<button class="switch" id="${t}" type="button" role="switch" aria-checked="${i}" aria-label="${s}"></button>`;Li({title:"Settings",body:`<div class="settings">
      <div class="setting"><svg aria-hidden="true"><use href="#i-sound" /></svg><span>Sound Effects</span>${e("setSound",tt.enabled,"Sound effects")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-note" /></svg><span>Music</span>${e("setMusic",tt.music,"Music")}</div>
      ${dn.supported?`<div class="setting"><svg aria-hidden="true"><use href="#i-vibrate" /></svg><span>Vibration</span>${e("setHaptics",dn.enabled,"Vibration")}</div>`:""}
      <div class="setting"><svg aria-hidden="true"><use href="#i-motion" /></svg><span>Reduced Motion</span>${e("setMotion",Bp(),"Reduced motion")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-camera" /></svg><span>Camera</span>
        <span class="segmented" role="group" aria-label="Camera view">
          <button type="button" id="viewIso" aria-pressed="${n==="iso"}">Isometric</button>
          <button type="button" id="viewCozy" aria-pressed="${n==="cozy"}">Close-up</button>
        </span></div>
    </div>`,actions:[{label:"Done",onClick:()=>nn()}],mount:t=>{const i=(r,a)=>{const o=t.querySelector(`#${r}`);o?.addEventListener("click",()=>{const l=o.getAttribute("aria-checked")!=="true";o.setAttribute("aria-checked",String(l)),a(l)})};i("setSound",r=>{tt.enabled=r,Ze.setSound(r),r&&(tt.unlock(),tt.swap())}),i("setMusic",r=>{Ze.setMusic(r),tt.setMusic(r)}),i("setHaptics",r=>{dn.enabled=r,Ze.setHaptics(r),r&&dn.tap()}),i("setMotion",r=>{Ze.setMotion(r===zu.matches?"system":r?"on":"off"),su()});const s=r=>{Vp(r),t.querySelector("#viewIso").setAttribute("aria-pressed",String(r==="iso")),t.querySelector("#viewCozy").setAttribute("aria-pressed",String(r==="cozy"))};t.querySelector("#viewIso").addEventListener("click",()=>s("iso")),t.querySelector("#viewCozy").addEventListener("click",()=>s("cozy"))}})}function $u(){const n=v0(F.turn,Et,F.board.length,hf(_f(F.board),Et)),e=(s,r)=>`<div class="odds-row${s===kt?" rock":""}">${an(s,"",40)}<div class="odds-name">${Vn(Gt(s))}<span class="odds-bar"><i style="width:${r}%"></i></span></div><span class="odds-pct">${r}%</span></div>`,t=n.to===null?`Turn ${n.from} onward`:`Turns ${n.from}–${n.to}`;let i="";if(n.next){const s=new Map(n.rows.map(a=>[a.piece,a.percent])),r=n.next.rows.filter(a=>(s.get(a.piece)??0)!==a.percent).map(a=>`${Gt(a.piece)} ${s.get(a.piece)??0}% → ${a.percent}%`);r.length&&(i=`<div class="odds-change"><b>From turn ${n.next.at}:</b> ${Vn(r.join(" · "))}</div>`)}Li({title:"What's coming",body:`<div class="odds">
      <div class="odds-head"><b>${t}</b><span>Turn ${F.turn}${F.pieceLimit?` · ${Ea()} left`:""}</span></div>
      ${n.rows.map(s=>e(s.piece,s.percent)).join("")}
      ${i}
      <p class="odds-note">Each new piece is drawn from these odds. When the island is ${Math.round(Et.assistFillRatio*100)}% full or more, a piece that can't merge anywhere gets one ${Math.round(Et.assistChance*100)}% chance to be redrawn. As your town grows, the pieces grow with it: they arrive a few tiers below your biggest building.${F.glow?` In Firelight, from the first few turns on, a piece is sometimes a rare light instead: a Campfire (${Math.round(Et.emberChance*100)}%) or a Lamppost (${Math.round(Et.lampChance*100)}%).`:""}</p>
    </div>`,actions:[{label:"Back to my island",onClick:()=>nn()}]})}function L1(n){let e=1;n.built.forEach((i,s)=>i>0&&(e=Math.max(e,s)));const t=Math.min(Ht,Math.max(ru,e+1));return Array.from({length:t},(i,s)=>s+1)}function Yu(){const n=Wt,e=cs(),t=(s,r,a=!1)=>`<div class="stat-tile${a?" gold":""}"><small>${s}</small><b>${r}</b></div>`;let i="";if(n.recent.length){const s=[...n.recent].reverse(),r=Math.max(1,...s.map(u=>u.score)),a=300,o=80,l=a/Math.max(s.length,8),c=s.map((u,d)=>{const h=Math.max(2,u.score/r*(o-12));return`<rect class="${`bar${u.mode==="daily"?" daily":""}${d===s.length-1?" latest":""}`}" x="${(d*l+1).toFixed(1)}" y="${(o-h).toFixed(1)}" width="${(l-2).toFixed(1)}" height="${h.toFixed(1)}" rx="2"><title>${Vn(u.date)} · ${u.mode} · ${lt(u.score)}</title></rect>`}).join("");i=`<svg class="recent-chart" viewBox="0 0 ${a} ${o+12}" role="img" aria-label="Scores of your last ${s.length} rounds, highest ${lt(r)}">
      <line class="best-line" x1="0" x2="${a}" y1="12" y2="12" />${c}<text x="${a}" y="9" text-anchor="end">best ${lt(r)}</text></svg>`}Li({title:"Journal",body:n.rounds===0?`<p class="journal-empty">Finish a round to start your journal. It keeps your records, everything you've built and your daily streak.</p>`:`<div class="journal">
      <section><h3>Records</h3><div class="stat-grid">
        ${t("Best round",lt(Math.max(n.bestClassic,ui)),!0)}
        ${t("Best daily",lt(n.bestDaily),!0)}
        ${t("Best chain",`×${Math.max(1,n.bestChain)}`)}
        ${t("Biggest move",`+${lt(n.biggestMove)}`)}
        ${t("Longest round",Hn(n.longestRound,"turn"))}
        ${t("Most festivals",String(n.mostFestivals))}
      </div></section>
      <section><h3>Built</h3><div class="built-row">
        ${L1(n).map(s=>`<div>${an(s,mn[s].name,40)}<b>${lt(n.built[s]??0)}</b>${Vn(mn[s].name)}</div>`).join("")}
      </div></section>
      <section><h3>Lifetime</h3><div class="stat-grid">
        ${t("Rounds",lt(n.rounds))}
        ${t("Pieces placed",lt(n.pieces))}
        ${t("Festivals",lt(n.festivals))}
        ${t("Daily streak",Hn(Lf(n,e),"day"),!0)}
        ${t("Longest streak",Hn(n.daily.bestStreak,"day"))}
      </div></section>
      ${i?`<section><h3>Recent rounds</h3>${i}</section>`:""}
    </div>`,actions:[{label:"Close",onClick:()=>nn()}]})}function zp(){if(Kt(F)==="daily"){if(F.over||F.turn<=3){Bo(!0);return}Li({title:"Start today's island again?",body:`<p>This attempt (${lt(F.score)} points) will end. Your best score for today is kept.</p>`,actions:[{label:"Start again",onClick:()=>Bo(!0)},{label:"Keep playing",kind:"dark",onClick:()=>nn()}]});return}if(F.over||F.turn<=3){Ar();return}Li({title:"Start a fresh nook?",body:`<p>Your current round (${lt(F.score)} points) will end. Your personal best stays saved on this device.</p>`,actions:[{label:"New game",onClick:Ar},{label:"Keep playing",kind:"dark",onClick:()=>nn()}]})}function D1(){tt.unlock();const{inProgress:n,saved:e}=Fp();if(!n||!e||e.turn<=3){Ar();return}Li({title:"Start a fresh nook?",body:`<p>Your saved round (${lt(e.score)} points, turn ${e.turn}) will be replaced. Your personal best stays saved.</p>`,actions:[{label:"New game",onClick:Ar},{label:"Back",kind:"dark",onClick:()=>nn()}]})}async function I1(n,e){if(tt.gameOver(),dn.gameOver(),Pn(),await Re?.gameOverWave(),!(e!==qn||mt||F!==n.state)){if(Rn()){Cs=n;return}Gp(n)}}function Gp(n){const e=n.state,t=Kt(e)==="daily",i=Math.max(t?Wt.daily.scores[e.dailyKey??""]??0:ui,e.score),s=t&&e.endReason==="limit"?"Day complete!":e.endReason==="dark"?"The night closed in":e.endReason==="limit"?"Out of pieces":"Your island is full",r=n.highlights.slice(0,3),a=t?[{label:"Classic game",onClick:()=>{nn(!1),al()}},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{af(e)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:xa}]:[{label:"Play Again",onClick:Ar},...sl()?[{label:"Undo last move",kind:"dark",id:"undoOverBtn",icon:"i-undo",onClick:Oo}]:[],{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{af(e)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:xa}];Li({title:s,art:`<img src="${_a(e.highestTier,320)}" alt="${Vn(mn[e.highestTier].name)}" draggable="false" />`,body:`
      ${n.newBest?`<div class="new-best">${t?"TODAY'S BEST":"NEW PERSONAL BEST"}</div>`:""}
      <p class="final-label">${t?`Daily Terrain #${Mr(e.dailyKey??cs())}`:"Final Score"}</p>
      <div class="final-score">${lt(e.score)}</div>
      <div class="final-best"><svg class="crown" aria-hidden="true"><use href="#i-crown" /></svg><small>${t?"Today's best":"Best Score"}</small><b>${lt(i)}</b></div>
      ${r.length?`<ul class="highlights">${r.map(o=>`<li>${Vn(o)}</li>`).join("")}</ul>`:""}
      <div class="final-stats">
        ${t?"":`<span>Island <b>${Dn(e)}×${Dn(e)}</b></span>`}
        <span>Turns <b>${e.turn-1}</b></span>
        <span>Best chain <b>×${Math.max(1,e.bestChain)}</b></span>
        <span>Top piece <b>${Vn(mn[e.highestTier].name)}</b></span>
        ${(e.festivals??0)>0?`<span>Festivals <b>${e.festivals}</b></span>`:""}
        ${(e.rocksShattered??0)>0?`<span>Rocks <b>${e.rocksShattered}</b></span>`:""}
      </div>`,actions:a,describe:!0}),pn(`${s} ${t?"":"Final score "}${lt(e.score)}.${n.newBest?" New best!":""} ${r.join(". ")}`)}async function af(n){const i=`${Kt(n)==="daily"?`Tiny Terrains · Daily #${Mr(n.dailyKey??cs())}`:`Tiny Terrains · ${Dn(n)}×${Dn(n)}`}: ${lt(n.score)} points · top piece ${mn[n.highestTier].name} · best chain ×${Math.max(1,n.bestChain)}`,r=document.getElementById("shareBtn")?.querySelector("span");try{if(typeof navigator.share=="function"){await navigator.share({title:"Tiny Terrains",text:i,...ro?{url:ro}:{}});return}}catch(a){if(a?.name==="AbortError")return}try{await navigator.clipboard.writeText(ro?`${i}
${ro}`:i),r&&(r.textContent="Copied!"),pn("Result copied. Paste it anywhere.")}catch{r&&(r.textContent="Copy not allowed here")}}function N1(n){const e=n.canvas;e.tabIndex=mt?-1:0,e.setAttribute("role","application"),e.setAttribute("aria-label","Puzzle board, 8 by 8 tiles. Use arrow keys to move and Enter to place.");let t=null;const i=new Set;let s=!1;const r=()=>{t=null,sa=!1,ss=null,gn||n.setHover(null,null,[]),Gi&&Pn()};let a=null;const o=()=>Math.PI/Math.max(320,e.clientWidth*.7);e.addEventListener("pointerdown",c=>{if(!(c.button!==0||mt)&&!(performance.now()<tl)&&!a){if(i.add(c.pointerId),i.size>1||s){s=!0,r();return}if(n.pick(c.clientX,c.clientY)===null&&!Rn()){i.delete(c.pointerId),a={id:c.pointerId,x0:c.clientX,spin0:n.getSpin(),lastX:c.clientX,lastT:performance.now(),v:0},e.setPointerCapture?.(c.pointerId),e.classList.add("spinning"),c.pointerType!=="mouse"&&c.preventDefault();return}tt.unlock(),t={id:c.pointerId,type:c.pointerType},sa=c.pointerType!=="mouse",e.setPointerCapture?.(c.pointerId),rs={x:c.clientX,y:c.clientY,type:c.pointerType},xi(n.pick(c.clientX,c.clientY)),c.pointerType!=="mouse"&&c.preventDefault()}}),e.addEventListener("pointermove",c=>{if(a&&a.id===c.pointerId){const d=performance.now(),h=Math.max(1,d-a.lastT)/1e3;a.v=.7*a.v+.3*(-(c.clientX-a.lastX)*o()/h),a.lastX=c.clientX,a.lastT=d,n.dragSpin(a.spin0-(c.clientX-a.x0)*o());return}if(rs={x:c.clientX,y:c.clientY,type:c.pointerType},t&&t.id!==c.pointerId||!t&&c.pointerType!=="mouse")return;const u=n.pick(c.clientX,c.clientY);u!==ss&&xi(u)});const l=(c,u)=>{if(a&&a.id===c.pointerId){const g=performance.now()-a.lastT>120?0:a.v;a=null,e.classList.remove("spinning"),n.endSpin(u?g:0);return}const d=i.delete(c.pointerId);if(i.size===0){const g=s;if(s=!1,g&&d){r();return}}if(!t||t.id!==c.pointerId)return;const h=t.type;t=null,sa=!1;const f=n.pick(c.clientX,c.clientY);u&&f!==null&&(Qt=null,n.setCursor(null),eu(f)),h!=="mouse"&&(ss=null,gn||n.setHover(null,null,[]),(!u||f===null)&&Pn())};e.addEventListener("pointerup",c=>l(c,!0)),e.addEventListener("pointercancel",c=>l(c,!1)),e.addEventListener("lostpointercapture",c=>{(i.has(c.pointerId)||a?.id===c.pointerId)&&l(c,!1)}),e.addEventListener("pointerleave",c=>{c.pointerType==="mouse"&&!t&&(xi(null),!mt&&Gi&&Pn())}),e.addEventListener("contextmenu",c=>c.preventDefault()),te.stage.addEventListener("touchmove",c=>c.preventDefault(),{passive:!1}),te.stage.addEventListener("dblclick",c=>c.preventDefault()),document.addEventListener("gesturestart",c=>c.preventDefault()),e.addEventListener("focus",()=>{Qt===null&&!mt&&Qc&&(Qt=rf(),n.setCursor(Qt),xi(Qt))}),e.addEventListener("blur",()=>{Qt!==null&&(go=Qt),n.setCursor(null),Qt=null,xi(null)}),e.addEventListener("keydown",c=>{if(!(mt||Rn()))if(c.key==="ArrowRight"||c.key==="ArrowLeft"||c.key==="ArrowUp"||c.key==="ArrowDown"){c.preventDefault();const{dx:u,dy:d}=n.arrowStep(c.key),h=Dn(F),f=Qt??rf(),g=Math.min(h-1,Math.max(0,f%h+u)),x=Math.min(h-1,Math.max(0,Math.floor(f/h)+d));Qt=x*h+g,n.setCursor(Qt),xi(Qt);const p=F.board[Qt],m=p===Mt&&!F.over?Ip(Qt):null;pn(`Row ${x+1}, column ${g+1}: ${p===Mt?"empty":Gt(p)}.${m?` ${m.text.replace("→","makes")}.`:""} In hand: ${Gt(F.next)}.`)}else(c.key==="Enter"||c.key===" ")&&Qt!==null&&(c.preventDefault(),eu(Qt))})}function U1(){window.addEventListener("keydown",n=>{["Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Enter"," ","Escape"].includes(n.key)&&(Qc=!0)},!0),window.addEventListener("pointerdown",()=>Qc=!1,!0),window.addEventListener("keydown",n=>{if(n.metaKey||n.ctrlKey||n.altKey)return;if(Rn()){if(n.key==="Escape")nn();else if(n.key==="Tab"){const t=[...te.modal.querySelectorAll("button:not(.hidden)")].filter(iu),i=t.indexOf(document.activeElement);n.preventDefault(),t[(i+(n.shiftKey?-1:1)+t.length)%t.length]?.focus()}return}if(mt){n.key==="Enter"&&(document.activeElement===document.body||document.activeElement===null)&&(n.preventDefault(),al());return}const e=n.key.toLowerCase();n.key==="Escape"&&Kn?zs(!0):n.key==="Escape"?Op():e==="b"?Up():e==="s"?tu():e==="z"||e==="u"||n.key==="Backspace"?Oo():e==="q"?ko(-1):e==="e"?ko(1):e==="n"?zp():e==="h"||e==="?"?cl():e==="i"?$u():e==="j"?Yu():e==="m"?F1():e==="v"&&Vp(Re?.getView()==="iso"?"cozy":"iso")})}function F1(){const n=tt.enabled||tt.music;tt.enabled=!n,Ze.setSound(!n),Ze.setMusic(!n),tt.setMusic(!n);const e=n?"Sound off (M to turn it back on).":"Sound on.";Bt(e),pn(e)}function ko(n){!Re||mt||Rn()||(tt.unlock(),tt.swap(),dn.tap(),Re.rotate(n===-1?1:-1),xi(null),pn(`Island turned ${n===-1?"left":"right"}.`))}function Vp(n){Re&&(Re.setView(n),Ze.setView(n))}function O1(n){if(n.key==="littleNook.journal"){try{const i=n.newValue?JSON.parse(n.newValue):null;Rf(i)&&Ze.adoptJournal(Wt=i)}catch{}mt&&vr();return}if(gn)return;const e=Kt(F)==="daily";if(n.key!==(e?"littleNook.daily":co(Dn(F),Us(F))))return;const t=e?Ze.loadDaily(Rs):Ze.loadGame(Rs,Dn(F),Us(F));if(!t){!n.newValue&&B1(n.oldValue)&&!F.over&&(Tr(e?Cp(cs()):el()),mt?vr():(xa(),pn("That round was finished in another tab.")));return}t.seed===F.seed&&t.turn<=F.turn||e&&t.dailyKey&&F.dailyKey&&t.dailyKey<F.dailyKey||(Tr(t),mt?vr():(Bt("Updated with progress from another tab."),pn("Updated with progress from another tab.")))}function B1(n){try{const e=n?JSON.parse(n):null;return Rs(e)&&e.seed===F.seed&&(e.dailyKey??"")===(F.dailyKey??"")}catch{return!1}}function k1(){try{Re=new f1(te.stage)}catch(a){console.error(a),Ge("boot")?.remove(),te.webglError.classList.remove("hidden"),document.body.classList.remove("booting","at-home"),Bt("3D graphics are unavailable in this browser.","danger");return}const n=Re;su(),zu.addEventListener?.("change",su),n.onContextRestored=()=>{_o.clear(),os()};const e=Ze.getView();n.setView(e==="cozy"?"cozy":"iso"),N1(n),U1(),te.keepBtn.addEventListener("click",tu),te.nextCard.addEventListener("click",()=>{!mt&&!Rn()&&$u()}),te.menuBtn.addEventListener("click",Op),te.spinLeft.addEventListener("click",()=>ko(-1)),te.undoBtn.addEventListener("click",Oo),te.shopBtn.addEventListener("click",()=>Up()),te.powerCancel.addEventListener("click",()=>zs(!0)),te.spinRight.addEventListener("click",()=>ko(1)),te.sizePrev.addEventListener("click",()=>sf(-1)),te.sizeNext.addEventListener("click",()=>sf(1)),te.playBtn.addEventListener("click",al),te.homeNewBtn.addEventListener("click",D1),te.dailyBtn.addEventListener("click",()=>Bo()),te.homeHelpBtn.addEventListener("click",cl),te.homeJournalBtn.addEventListener("click",Yu),te.homeSettingsBtn.addEventListener("click",kp),te.coachSkip.addEventListener("click",()=>{const a=document.activeElement===te.coachSkip;ol(),a&&rl(),Bt("Tips off. You can read the rules any time in the menu."),pn("Tips off.")}),te.hud.addEventListener("click",a=>{a.detail>0&&performance.now()<tl&&(a.stopPropagation(),a.preventDefault())},!0),te.closeModal.addEventListener("click",()=>nn());let t=!1;te.modal.addEventListener("pointerdown",a=>t=a.target===te.modal),te.modal.addEventListener("click",a=>{t&&a.target===te.modal&&nn(),t=!1}),document.addEventListener("visibilitychange",()=>{tt.setPaused(document.hidden),document.hidden||(n.markDirty(),mt&&vr())}),window.addEventListener("storage",O1),document.addEventListener("touchend",()=>tt.unlock(),{capture:!0,passive:!0});const i=()=>tf();window.addEventListener("resize",i),new ResizeObserver(i).observe(te.dock),t0().then(i),os(),tf(),Pn(),xa();const s=()=>[0,1,2,3,4,5].forEach(a=>_a(a)),r=window.requestIdleCallback;r?r(s,{timeout:2e3}):setTimeout(s,800),window.__littleNookBooted=!0,document.body.classList.remove("booting"),Ge("boot")?.remove(),window.__littleNook={state:()=>F,busy:()=>gn,atHome:()=>mt,cursor:()=>Qt,journal:()=>Wt,place:a=>eu(a),legal:()=>Di(F),undo:()=>Oo(),canUndo:()=>sl(),swap:tu,startDaily:()=>Bo(),tilePixelSize:()=>n.tilePixelSize(),thumb:(a,o=160)=>n.thumbnail(a,o),cellToScreen:a=>n.cellToScreen(a,0),setView:a=>n.setView(a),spinQuarter:()=>n.getSpinQuarter(),boardSize:()=>n.getBoardSize()}}k1();if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)){const n=!!navigator.serviceWorker.controller;let e=null,t=Date.now(),i=!1;window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(r=>e=r).catch(()=>{})});const s=()=>{e&&Date.now()-t>3600*1e3&&(t=Date.now(),e.update().catch(()=>{}))};document.addEventListener("visibilitychange",()=>{document.hidden||s()}),window.addEventListener("pageshow",r=>{r.persisted&&s()}),navigator.serviceWorker.addEventListener("controllerchange",()=>{!n||i||(Pp=!0,mt||F.over?(i=!0,location.reload()):(Bt("An update is ready. It loads the next time you open the home screen."),pn("An update is ready.")))})}
