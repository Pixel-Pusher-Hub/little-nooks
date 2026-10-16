(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Sm=""+new URL("outfit-latin-300-normal-CRYTwY6m.woff2",import.meta.url).href,bm=""+new URL("outfit-latin-400-normal-BGsTXAXT.woff2",import.meta.url).href,wm=""+new URL("outfit-latin-500-normal-DKnIMDSk.woff2",import.meta.url).href,Em=""+new URL("outfit-latin-600-normal-B7SfZ07L.woff2",import.meta.url).href,Tm=[["Outfit",Sm,"300"],["Outfit",bm,"400"],["Outfit",wm,"500"],["Outfit",Em,"600"]];function Am(){return typeof FontFace>"u"||!document.fonts?Promise.resolve():Promise.all(Tm.map(([n,t,e])=>{const i=new FontFace(n,`url(${t}) format('woff2')`,{weight:e,display:"swap"});return document.fonts.add(i),i.load().catch(()=>{})}))}const yn=8,Qi=yn*yn,Bs=[5,6,7,8,9,10],Ad=n=>Bs.includes(n),Cm={5:"Tiny",6:"Small",7:"Cozy",8:"Medium",9:"Big",10:"Grand"},Qt=-1,ze=99,Ve=98,ln=97,Kn=96,Ii=94,ri=92,Tn={[ln]:{name:"Campfire",life:10,radius:1},[Kn]:{name:"Torch",life:15,radius:2},[Ii]:{name:"Fireflies",life:8,radius:1},[ri]:{name:"Beacon",life:12,radius:1}},Jn=n=>n===ln||n===Kn||n===Ii||n===ri,Yn=95,Di=93,Hn=91,En=90,Cd=n=>n===Di||n===Hn||n===En,Rm=["Grass","Bush","Glowcaps","Flower Bush","Young Pine","Pine","Stone Lantern","Tall Pine","Mossy Boulder","Pine Grove","Giant Mushroom","Crystal Shard","Lily Pond","Standing Stones","Crystal Cluster","Old Oak","Ruined Pillar","Blossom Tree","Mushroom Ring","Waterfall Rock","Ruined Arch","Crystal Garden","Spirit Pine","Moon Shrine","Stone Circle","Willow","Ancient Ruins","Glow Falls","Crystal Spire","Elder Tree","Lantern Shrine","Floating Rocks","Starwell","Spirit Tree","Temple Ruins","Aurora Stones","Sky Arch","Crystal Mountain","Celestial Grove","World Tree"],Wr=[0,20,90,350,1200,4e3,13e3,42e3],hn=Rm.map((n,t)=>({name:n,hint:`Tier ${t+1}`,mergePoints:t<Wr.length?Wr[t]:Math.round(Wr[Wr.length-1]*Math.pow(1.45,t-Wr.length+1))})),Rd=7,Ph=[0,0,1,1,1,2,2,3],Lr=n=>n>=9?2:1,Ie=hn.length-1,Pm=Ie-4,Pd={name:"Rock",hint:"Obstacle"};function Ld(n){return n===Ve?1:Jn(n)?Tn[n].radius:n<0||n>=hn.length?0:Ph[Math.min(n,Ph.length-1)]}function Id(n,t=ve){return Math.max(0,Math.min(Pm,n-t.spawnBaseOffset))}const Lm=["reroll","bulldoze","upgrade"],ka={reroll:{name:"Reroll",hint:"Swap the piece in hand for a new one"},bulldoze:{name:"Bulldoze",hint:"Clear any tile (not the campfire)"},upgrade:{name:"Upgrade",hint:"Raise a building one tier"}},ve={minGroup:3,groupSizeBonus:.5,comboMultipliers:[1,2,3,4,5],festivalPoints:15e4,rockMinGroup:0,rockCrumblePoints:40,rockBreakTier:3,placePoints:1,spawnPhases:[{fromTurn:1,tiers:[75,25],rock:0},{fromTurn:11,tiers:[62,30,8],rock:0},{fromTurn:31,tiers:[55,32,11,2],rock:0},{fromTurn:61,tiers:[50,32,14,4],rock:0}],assistFillRatio:.7,assistChance:.35,crowdedRatio:.78,spawnBaseOffset:3,startPieces:90,milestoneBase:16,milestonePerTier:0,emberChance:.03,lampChance:.012,lightItemsFrom:8,coinsPerMerge:2,coinsPerTier:1,festivalCoins:80,piecePrice:6,piecePriceGrowth:1.75,priceRise:1.5,powerPrices:{reroll:6,bulldoze:14,upgrade:10},lightPrices:{[ln]:18,[Kn]:40,[ri]:60,[Di]:12,[Hn]:30,[En]:14},shadesFrom:18,shadeChance:.07,shadesPer64:3,shadeTrapPoints:400,shadeTrapCoins:12,campfireGrowHeat:6,dawnEvery:110,dawnLength:6,woodChance:.025,starChance:.012,lighthouseChance:.005,toolsFrom:12,woodFuel:6,bridgeChance:.1,thawMoves:3};function Im(n,t,e=ve){return Math.max(1,Math.round((e.milestoneBase+e.milestonePerTier*n)*t/Qi))}function Dm(n,t=ve){return Math.max(20,Math.round(t.startPieces*n/Qi))}function Hs(n,t=ve){return n===Ve||Jn(n)||n===Yn||Cd(n)?1/0:n===ze?t.rockMinGroup>0?t.rockMinGroup:1/0:t.minGroup}const Lh={[Yn]:"Shade",[Di]:"Firewood",[Hn]:"Wild Star",[En]:"Bridge"};function He(n){return n===ze?Pd.name:n===Ve?"Campfire":Jn(n)?Tn[n].name:Lh[n]?Lh[n]:hn[n]?.name??"Empty"}function Dd(n){return n===ze?Pd.hint:n===ri?`Lights its row and column for ${Tn[n].life} moves`:Jn(n)?`Lasts ${Tn[n].life} moves`:n===Di?"Feeds the nearest light":n===Hn?"Becomes the best match":n===En?"Turns water into land":n===Yn?"Box it in to catch it":hn[n]?.hint??""}function is(n){return Math.round(Math.sqrt(n.length))}function Tu(n=yn){return new Array(n*n).fill(Qt)}function xs(n,t=yn){return{x:n%t,y:Math.floor(n/t)}}function Nm(n,t,e=yn){return t*e+n}function Uo(n,t=yn){const{x:e,y:i}=xs(n,t),s=[];return e>0&&s.push(n-1),e<t-1&&s.push(n+1),i>0&&s.push(n-t),i<t-1&&s.push(n+t),s}function Nd(n,t=yn){const{x:e,y:i}=xs(n,t);return e===0||i===0||e===t-1||i===t-1}function Ms(n,t,e=n[t]){const i=is(n),s=new Set([t]),r=[t];for(;r.length;){const o=r.pop();for(const a of Uo(o,i))!s.has(a)&&n[a]===e&&(s.add(a),r.push(a))}return[...s].sort((o,a)=>o-a)}function Fo(n,t=0){const e=is(n),i=new Array(n.length).fill(!1);return n.forEach((s,r)=>{const o=s===Ve?Lr(e)+t:Ld(s);if(o<=0)return;const{x:a,y:l}=xs(r,e);for(let c=Math.max(0,l-o);c<=Math.min(e-1,l+o);c++)for(let u=Math.max(0,a-o);u<=Math.min(e-1,a+o);u++)i[c*e+u]=!0;if(s===ri)for(let c=0;c<e;c++)i[l*e+c]=!0,i[c*e+a]=!0}),i}function co(n,t,e=yn){const i=xs(n,e),s=xs(t,e);return Math.max(Math.abs(i.x-s.x),Math.abs(i.y-s.y))}function Au(n){const t=[];return n.forEach((e,i)=>e===Qt&&t.push(i)),t}function Um(n){let t=0;for(const e of n)e!==Qt&&t++;return t}function Fm(n,t=yn){const e=Tu(t);return n.forEach((i,s)=>[...i.replace(/\s+/g,"")].forEach((r,o)=>{r!=="."&&(e[Nm(o,s,t)]=r==="R"?99:Number(r)-1)})),e}const Om=/^(\d{4})-(\d{2})-(\d{2})$/,Ud=864e5,Er=(n,t=2)=>String(n).padStart(t,"0");function Bm(n){return`${Er(n.getFullYear(),4)}-${Er(n.getMonth()+1)}-${Er(n.getDate())}`}function za(n){const t=Om.exec(n);if(!t)return NaN;const[e,i,s]=[Number(t[1]),Number(t[2]),Number(t[3])],r=Date.UTC(e,i-1,s),o=new Date(r);return o.getUTCFullYear()===e&&o.getUTCMonth()===i-1&&o.getUTCDate()===s?r:NaN}function km(n){const t=new Date(n);return`${Er(t.getUTCFullYear(),4)}-${Er(t.getUTCMonth()+1)}-${Er(t.getUTCDate())}`}function ks(n){return typeof n=="string"&&Number.isFinite(za(n))}function zm(n,t){return Math.round((za(t)-za(n))/Ud)}function Fd(n){const t=za(n);return Number.isFinite(t)?km(t-Ud):""}function di(n){const t=n+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),[((e^e>>>14)>>>0)/4294967296,t]}function Od(){return typeof crypto<"u"&&"getRandomValues"in crypto?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*2**32)>>>0}function Gm(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const Hm=["meadow","forest","snow","river"],Vm=n=>Hm.includes(n),Vn=0,Dn=9,Tc=n=>n!==void 0&&n>=1&&n<Dn,Bd=(n,t)=>!n||n[t]===Vn,Wm=(n,t)=>!n||n[t]!==Dn,Ga=n=>!!n&&n.includes(Dn),Xm=(n,t,e=ve.thawMoves)=>Array.isArray(n)&&n.length===t&&n.every(i=>Number.isInteger(i)&&(i===Vn||i===Dn||i>=1&&i<=e));function $m(n){let t=(n^795580989)>>>0;return()=>{const[e,i]=di(t);return t=i,e}}function Ym(n,t,e,i=ve){if(n==="meadow")return{board:t};const s=is(t),r=$m(e),o=t.indexOf(Ve),a=f=>o>=0&&co(f,o,s)<=Lr(s),l=[...t];if(n==="forest"){const f=Math.round(t.length*.2);for(let g=0,x=0;g<f&&x<500;x++){const p=Math.floor(r()*l.length);if(l[p]!==Qt||a(p))continue;const m=r()<.62?0:1;l[p]=m,Ms(l,p,m).length>=Hs(m,i)-1&&r()<.7||Ms(l,p,m).length>=Hs(m,i)?l[p]=Qt:g++}return{board:l}}const c=new Array(t.length).fill(Vn);if(n==="snow"){const f=Math.round(t.length*.4);let g=0;const x=p=>c[p]!==Vn||a(p)||l[p]!==Qt?!1:(c[p]=i.thawMoves,g++,!0);for(let p=0;g<f&&p<2e3;p++){const m=Math.floor(r()*t.length),y=m%s,T=Math.floor(m/s);if(g>0&&r()<.75){const M=[[1,0],[-1,0],[0,1],[0,-1]][Math.floor(r()*4)],w=y+M[0],b=T+M[1];if(w<0||b<0||w>=s||b>=s||!c.some((C,_)=>C!==Vn&&co(_,m,s)<=1))continue;x(b*s+w)}else x(m)}return{board:l,terrain:c}}const u=o>=0?o%s:Math.floor(s/2),d=Lr(s);let h=Math.min(s-1,u+d+1+Math.floor(r()*Math.max(1,s-u-d-2)));for(let f=0;f<s;f++)if(c[f*s+h]=Dn,f<s-1&&r()<.35){const g=h+(r()<.5?-1:1);g>=0&&g<s&&!a((f+1)*s+g)&&!a(f*s+g)&&(h=g,c[f*s+h]=Dn)}for(let f=0;f<c.length;f++)c[f]===Dn&&(l[f]!==Qt||a(f))&&(c[f]=Vn);return{board:l,terrain:c}}const qm=3,kd=["build","chain","merges","lit","trap","coins","lights"],Km=n=>kd.includes(n);function zd(n,t,e=[]){const i=n.missionsDone,s=kd.filter(l=>!e.includes(l)&&(l!=="lit"||n.glow)&&(l!=="lights"||n.glow)&&(l!=="trap"||n.shades)&&(l!=="build"||n.highestTier<Ie)),[r]=di((n.seed^Math.imul(i+1,2654435761)^Math.imul(t+7,2246822507))>>>0),o=s[Math.floor(r*s.length)]??"merges",a=n.cells/64;switch(o){case"build":{const l=Math.min(Ie,Math.max(2,n.highestTier+1+(i>=8?1:0)));return{kind:o,goal:l,progress:n.highestTier,reward:12+l*4}}case"chain":{const l=Math.min(4,2+Math.floor(i/5));return{kind:o,goal:l,progress:0,reward:20*(l-1)}}case"merges":{const l=Math.min(24,4+2*i);return{kind:o,goal:l,progress:0,reward:6+l*2}}case"lit":{const l=Math.min(n.cells-2,n.litCount+Math.max(4,Math.round((6+i)*a)));return{kind:o,goal:l,progress:n.litCount,reward:20+Math.min(40,i*3)}}case"trap":{const l=1+Math.floor(i/6);return{kind:o,goal:l,progress:0,reward:30*l}}case"coins":{const l=30+15*i;return{kind:o,goal:l,progress:0,reward:Math.round(l/3)}}default:return{kind:"lights",goal:1+Math.floor(i/8),progress:0,reward:18}}}function Jm(n){const t=[];for(let e=0;e<qm;e++)t.push(zd({...n,missionsDone:n.missionsDone+e},e,t.map(i=>i.kind)));return t}const Zm=n=>n.progress>=n.goal;function Qm(n,t){switch(n.kind){case"build":return{...n,progress:Math.max(n.progress,t.highestTier)};case"chain":return{...n,progress:Math.max(n.progress,t.chain)};case"lit":return{...n,progress:Math.max(n.progress,t.litCount)};case"merges":return{...n,progress:n.progress+t.merges};case"trap":return{...n,progress:n.progress+t.trapped};case"coins":return{...n,progress:n.progress+t.coins};default:return{...n,progress:n.progress+t.lights}}}function jm(n){if(!n||typeof n!="object")return!1;const t=n,e=i=>typeof i=="number"&&Number.isInteger(i)&&i>=0;return Km(t.kind)&&e(t.goal)&&e(t.progress)&&e(t.reward)}function sl(n,t=Qi){return t===Qi?n:Math.max(1,Math.round(1+(n-1)*(Qi/t)))}function Ih(n,t=Qi){let e=1;for(;sl(e,t)<n;)e++;return e}function Gd(n,t=ve){let e=t.spawnPhases[0];for(const i of t.spawnPhases)n>=i.fromTurn&&(e=i);return e}function Ac(n,t=ve){const e=Gd(n,t),i=e.tiers.map((r,o)=>[o,r]);e.rock>0&&i.push([ze,e.rock]);const s=i.reduce((r,[,o])=>r+o,0);return i.filter(([,r])=>r>0).map(([r,o])=>[r,o/s])}function Dh(n,t,e,i=0){const[s,r]=di(t),o=Ac(n,e),a=c=>c===ze?c:Math.min(Ie,c+i);let l=0;for(const[c,u]of o)if(l+=u,s<l)return[a(c),r];return[a(o[o.length-1][0]),r]}function Hd(n){let t=-1;for(const e of n)e!==ze&&e>=0&&e<=Ie&&(t=Math.max(t,e));return t}function t0(n,t,e){for(const i of Au(n)){const s=[...n];s[i]=t;const r=Hs(t,e);if(Ms(s,i,t).length>=r)return!0}return!1}function es(n,t,e,i=ve,s=!1,r={}){if(t=sl(t,n.length),s&&r.water){const[u,d]=di(e);if(e=d,u<i.bridgeChance)return[En,e]}if(s&&r.night&&t>=i.toolsFrom){const[u,d]=di(e);if(e=d,u<i.lighthouseChance)return[ri,e];if(u<i.lighthouseChance+i.starChance)return[Hn,e];if(u<i.lighthouseChance+i.starChance+i.woodChance)return[Di,e]}if(s&&t>=i.lightItemsFrom){const[u,d]=di(e);if(e=d,u<i.lampChance)return[Kn,e];if(u<i.lampChance+i.emberChance)return[ln,e]}const o=Id(Hd(n),i);let[a,l]=Dh(t,e,i,o);if(Um(n)/n.length>=i.assistFillRatio&&Au(n).length>0&&!t0(n,a,i)){const[u,d]=di(l);l=d,u<i.assistChance&&([a,l]=Dh(t,l,i,o))}return[a,l]}function Nh(n){const t=n.map(([s,r])=>({piece:s,exact:r*100,percent:Math.floor(r*100)}));let e=100-t.reduce((s,r)=>s+r.percent,0);const i=[...t].sort((s,r)=>r.exact-r.percent-(s.exact-s.percent));for(const s of i){if(e<=0)break;s.percent++,e--}return t.map(({piece:s,percent:r})=>({piece:s,percent:r}))}function e0(n,t=ve,e=Qi,i=0){const s=sl(n,e),r=u=>u.map(d=>d.piece===ze?d:{...d,piece:Math.min(Ie,d.piece+i)}),o=Gd(s,t),a=t.spawnPhases[t.spawnPhases.indexOf(o)+1],l=Ih(o.fromTurn,e),c=a?Ih(a.fromTurn,e):null;return{from:l,to:c!==null?c-1:null,rows:r(Nh(Ac(s,t))),next:a&&c!==null?{at:c,rows:r(Nh(Ac(a.fromTurn,t)))}:null}}function n0(n){switch(n.kind){case"place":case"upgrade":case"wild":case"feed":case"bridge":case"grow":return n.index;case"expire":case"remove":case"thaw":return n.cells[0];case"shades":return n.trapped[0]??n.spawned[0]??n.moves[0]?.[1]??0;case"dawn":return n.cleared[0]??0;case"mission":return-1;default:return n.target}}function Cu(n){const t=Math.floor((n-1)/2);return t*n+t}const rl=n=>({night:!!n.night,water:Ga(n.terrain)});function Ru(n,t=ve,e=yn,i=!1,s=!1,r={}){let o=Tu(e);i&&(o[Cu(e)]=Ve);const a=i&&!!r.night;let l;const c=i&&r.island&&r.island!=="meadow"?r.island:void 0;c&&({board:o,terrain:l}=Ym(c,o,n,t));const u={board:o,score:0,turn:1,next:0,stash:Qt,rng:n>>>0,over:!1,lastChain:0,bestChain:0,highestTier:0,merges:0,seed:n>>>0,festivals:0,rocksShattered:0,...i?{glow:!0}:{},...s?{budget:!0,pieceLimit:Dm(e*e,t)}:{},...c?{island:c}:{},...l?{terrain:l}:{}},d=rl({night:a,terrain:l}),[h,f]=es(u.board,u.turn,u.rng,t,i,d),[g,x]=es(u.board,u.turn+1,f,t,i,d),p={...u,next:h,after:g,rng:x,coins:0};return a?{...p,night:!0,heat:0,grown:0,dawn:0,trapped:0,missionsDone:0,missions:Jm(Vd(p))}:p}function Vd(n,t=n.missionsDone??0){return{seed:n.seed,missionsDone:t,highestTier:n.highestTier,litCount:n.glow?Mo(n).filter(Boolean).length:n.board.length,cells:n.board.length,glow:!!n.glow,shades:!!n.night}}function Mo(n){return(n.dawn??0)>0?new Array(n.board.length).fill(!0):Fo(n.board,n.grown??0)}function qn(n){const t=[],e=n.glow?Mo(n):null,i=n.next!==void 0&&Jn(n.next),s=n.next===En;return n.board.forEach((r,o)=>{if(r!==Qt)return;const a=n.terrain?.[o]??Vn;(s?a!==Dn:a!==Vn)||e&&!e[o]&&!i&&!s||t.push(o)}),t}function Pu(n,t){return!Number.isInteger(t)||t<0||t>=n.board.length||n.board[t]!==Qt?!1:qn(n).includes(t)}function Wd(n,t=ve){const e=t.comboMultipliers;return e[Math.min(n-1,e.length-1)]}function i0(n,t,e,i=ve){const s=hn[n].mergePoints,r=1+i.groupSizeBonus*Math.max(0,t-i.minGroup);return Math.round(s*r*Wd(e,i))}function Lu(n,t,e=ve){const i=[];let s=0;for(;;){const r=n[t];if(r===Qt||r===Ve||Jn(r))break;const o=Ms(n,t,r),a=Hs(r,e);if(o.length<a)break;if(r===ze){for(const u of o)n[u]=Qt;i.push({kind:"crumble",cells:o,target:t,points:e.rockCrumblePoints*o.length});break}s++;const l=Wd(s,e);if(r===Ie){for(const h of o)n[h]=Qt;const u=1+e.groupSizeBonus*(o.length-e.minGroup),d=Math.round(e.festivalPoints*u*l);i.push({kind:"festival",step:s,cells:o,target:t,points:d,multiplier:l});break}for(const u of o)n[u]=Qt;n[t]=r+1;const c=r+1>=e.rockBreakTier?s0(n,o):[];if(i.push({kind:"merge",step:s,fromTier:r,toTier:r+1,cells:o,target:t,points:i0(r+1,o.length,s,e),multiplier:l}),c.length){for(const u of c)n[u]=Qt;i.push({kind:"crumble",cells:c,target:t,points:e.rockCrumblePoints*c.length})}}return i}function s0(n,t){const e=new Set,i=is(n);for(const s of t)for(const r of Uo(s,i))n[r]===ze&&e.add(r);return[...e].sort((s,r)=>s-r)}function r0(n,t,e=ve){const i=is(n),s=new Set;for(const a of Uo(t,i))n[a]>=0&&n[a]<=Ie&&s.add(n[a]);let r=0,o=-1;for(const a of s){const l=[...n];if(l[t]=a,Ms(l,t,a).length<Hs(a,e))continue;const c=Lu(l,t,e),u=Math.max(a,...c.map(f=>f.kind==="merge"?f.toTier:f.kind==="festival"?Ie+1:0)),d=c.reduce((f,g)=>f+g.points,0),h=u*1e12+d;h>o&&(o=h,r=a)}return r}const o0=(n,t=ve)=>Math.max(1,Math.round(t.shadesPer64*n/Qi)),a0=(n,t=ve)=>Math.max(30,Math.round(t.dawnEvery*n/Qi));function l0(n,t,e,i,s,r,o){const a=is(n),l=[],c=[],u=[],d=n.flatMap((f,g)=>f===Yn?[g]:[]);for(const f of d){const g=Uo(f,a).filter(y=>n[y]===Qt&&Wm(t,y));if(!g.length){c.push(f),n[f]=Ii,o.push([f,Tn[Ii].life]);continue}const[x,p]=di(s);s=p;const m=g[Math.floor(x*g.length)];n[f]=Qt,n[m]=Yn,l.push([f,m])}const h=d.length-c.length;if(sl(i,n.length)>=r.shadesFrom&&h<o0(n.length,r)){const[f,g]=di(s);if(s=g,f<r.shadeChance){const x=n.flatMap((p,m)=>p===Qt&&!e[m]&&Bd(t,m)?[m]:[]);if(x.length){const[p,m]=di(s);s=m;const y=x[Math.floor(p*x.length)];n[y]=Yn,u.push(y)}}}return{moves:l,trapped:c,spawned:u,rng:s}}function c0(n){return qn(n).length?!0:n.stash!==Qt?qn({...n,next:n.stash}).length>0:n.after!==void 0&&qn({...n,next:n.after}).length>0}function ol(n,t,e=ve){if(n.over||!Pu(n,t))return{state:n,events:[],points:0,accepted:!1};const i=[...n.board],s=is(i),r=n.terrain?[...n.terrain]:void 0,o=n.next,a=[{kind:"place",index:t,piece:o,points:e.placePoints}],l=(n.burn??[]).map(([X,lt])=>[X,lt]),c=[];let u=o>=0&&o<=Ie?o:-1;if(o===Di){let X=-1;for(const[lt]of l)(X<0||co(lt,t,s)<co(X,t,s))&&(X=lt);if(X>=0){const lt=l.find(([Mt])=>Mt===X);lt[1]=Math.min(Tn[i[X]].life,lt[1]+e.woodFuel),i[t]=Qt}else i[t]=ln,c.push([t,e.woodFuel]);a.push({kind:"feed",index:t,target:X,points:0})}else o===En?(r&&(r[t]=Vn),i[t]=Qt,a.push({kind:"bridge",index:t,points:0})):(o===Hn&&(u=r0(i,t,e),a.push({kind:"wild",index:t,becomes:u,points:0})),i[t]=o===Hn?u:o,a.push(...Lu(i,t,e)),Jn(o)&&c.push([t,Tn[o].life]));let d=n.heat??0,h=n.grown??0;if(n.night){const X=i.indexOf(Ve),lt=X<0?0:a.filter(Mt=>Mt.kind==="merge"&&co(Mt.target,X,s)<=1).length;d+=lt,lt&&!h&&d>=e.campfireGrowHeat&&(h=1,a.push({kind:"grow",index:X,radius:Lr(s)+h,points:0}))}const f=l.map(([X,lt])=>[X,lt-1]),g=f.filter(([,X])=>X<=0).map(([X])=>X);for(const X of g)i[X]=Qt;g.length&&a.push({kind:"expire",cells:g,points:0});const x=n.turn+1;let p=n.rng,m=n.dawn??0,y=0;if(n.night)if(m>0)m--,m===0&&a.push({kind:"dawn",on:!1,cleared:[],points:0});else{const X=Mo({board:i,grown:h,dawn:0}),lt=l0(i,r,X,x,p,e,c);if(p=lt.rng,y=lt.trapped.length,(lt.moves.length||lt.spawned.length||lt.trapped.length)&&a.push({kind:"shades",moves:lt.moves,spawned:lt.spawned,trapped:lt.trapped,points:lt.trapped.length*e.shadeTrapPoints}),x%a0(i.length,e)===0){const Mt=i.flatMap((ee,se)=>ee===Yn?[se]:[]);for(const ee of Mt)i[ee]=Qt;m=e.dawnLength,a.push({kind:"dawn",on:!0,cleared:Mt,points:0})}}const T=[...f.filter(([,X])=>X>0),...c];if(r){const X=n.glow?Mo({board:i,grown:h,dawn:m}):null,lt=[];r.forEach((Mt,ee)=>{!Tc(Mt)||X&&!X[ee]||(r[ee]=Mt-1,r[ee]===Vn&&lt.push(ee))}),lt.length&&a.push({kind:"thaw",cells:lt,points:0})}const M=rl({night:n.night,terrain:r}),w=n.mode==="puzzle";let b;n.after!==void 0?b=n.after:w?b=0:[b,p]=es(i,x,p,e,!!n.glow,M);const C=[...n.queue??[]];let _;if(C.length?_=C.shift():w||([_,p]=es(i,x+1,p,e,!!n.glow,M)),o===En&&!Ga(r)){const X=lt=>lt===En?Hn:lt;b=X(b),_!==void 0&&(_=X(_));for(let lt=0;lt<C.length;lt++)C[lt]=X(C[lt])}const E=o===En&&!Ga(r)&&n.stash===En?Hn:n.stash,R=Yd(n,a,e,u);let I=R.fields.coins,B=n.missions,G=n.missionsDone??0;const D={...n,...R.fields,board:i,turn:x,next:b,after:_,stash:E,rng:p,...C.length||n.queue?{queue:C}:{},...n.glow?{burn:T}:{},...r?{terrain:r}:{},...n.night?{heat:d,grown:h,dawn:m,trapped:(n.trapped??0)+y}:{}};if(B){const X=Xd(D,a,{chain:R.fields.lastChain,merges:R.fields.lastChain,trapped:y,coins:I-(n.coins??0),lights:Jn(o)||o===Di&&i[t]===ln?1:0});B=X.missions,G=X.missionsDone,I+=X.reward}const z={...D,coins:I,...B?{missions:B,missionsDone:G}:{}},q=!i.some((X,lt)=>X===Qt&&Bd(r,lt)),Y=!c0(z),ot=!!R.pieceLimit&&x>R.pieceLimit,K=n.mode==="puzzle"&&n.goal!==void 0&&z.highestTier>=n.goal,et=K||q||Y||ot;return{accepted:!0,events:a,points:R.points,state:{...z,over:et,...et?{endReason:K?"goal":q?"full":Y?"dark":"limit"}:{}}}}function Xd(n,t,e){let i=n.missionsDone??0,s=0;const r={...e,highestTier:n.highestTier,litCount:n.glow?Mo(n).filter(Boolean).length:n.board.length},o=[...n.missions??[]].map(a=>Qm(a,r));return o.forEach((a,l)=>{Zm(a)&&(s+=a.reward,t.push({kind:"mission",slot:l,mission:a,reward:a.reward,points:0}),i++,o[l]=zd(Vd(n,i+2),l,o.filter((c,u)=>u!==l).map(c=>c.kind)))}),{missions:o,missionsDone:i,reward:s}}function $d(n,t=ve){let e=0;for(const i of n)i.kind==="merge"?e+=(t.coinsPerMerge+t.coinsPerTier*i.toTier)*i.step:i.kind==="festival"?e+=t.festivalCoins*i.step:i.kind==="shades"&&(e+=t.shadeTrapCoins*i.trapped.length);return e}function Yd(n,t,e,i=-1){const s=t.reduce((u,d)=>u+d.points,0),r=t.filter(u=>u.kind==="merge"||u.kind==="festival").length;let o=Math.max(n.highestTier,i),a=n.festivals??0,l=n.rocksShattered??0;for(const u of t)u.kind==="merge"&&(o=Math.max(o,u.toTier)),u.kind==="upgrade"&&(o=Math.max(o,u.toTier)),u.kind==="festival"&&(o=Ie,a++),u.kind==="crumble"&&(l+=u.cells.length);let c=n.pieceLimit;if(n.budget&&c&&o>n.highestTier)for(let u=n.highestTier+1;u<=o;u++)c+=Im(u,n.board.length,e);return{points:s,pieceLimit:c,fields:{score:n.score+s,coins:(n.coins??0)+$d(t,e),lastChain:r,bestChain:Math.max(n.bestChain,r),highestTier:o,merges:n.merges+r,festivals:a,rocksShattered:l,...c!==n.pieceLimit?{pieceLimit:c}:{}}}}function u0(n,t=ve){if(n.over)return n;if(n.stash===Qt){const e=rl(n);if(n.after===void 0){if(n.mode==="puzzle")return n;const[o,a]=es(n.board,n.turn,n.rng,t,!!n.glow,e);return{...n,stash:n.next,next:o,rng:a}}const i=[...n.queue??[]];let s=n.rng,r;return i.length?r=i.shift():n.mode!=="puzzle"&&([r,s]=es(n.board,n.turn+1,s,t,!!n.glow,e)),{...n,stash:n.next,next:n.after,after:r,rng:s,...n.queue?{queue:i}:{}}}return{...n,stash:n.next,next:n.stash}}const al=(n,t)=>n.bought?.[t]??0;function qd(n,t=ve){return Math.round(t.piecePrice*Math.pow(t.piecePriceGrowth,n))}function Kd(n,t,e=ve){const i=Math.max(e.powerPrices.upgrade,Math.round(qd(t+1,e)*.6));return Math.round(i*Math.pow(e.priceRise,al(n,"upgrade")))}function Iu(n,t=ve){const e=r=>Math.pow(t.priceRise,al(n,r)),i=[],s=Math.min(Ie,Math.max(0,n.highestTier));for(let r=0;r<=s;r++){const o=`p${r}`;i.push({key:o,kind:"piece",piece:r,price:Math.round(qd(r,t)*e(o))})}if(n.glow){const r=[ln,Kn,...n.night?[ri,Di,Hn]:[],...Ga(n.terrain)?[En]:[]];for(const o of r){const a=`l${o}`;i.push({key:a,kind:"light",piece:o,price:Math.round((t.lightPrices[o]??30)*e(a))})}}for(const r of Lm)i.push({key:r,kind:"power",power:r,price:r==="upgrade"?Kd(n,0,t):Math.round(t.powerPrices[r]*e(r))});return i}const Aa=(n,t,e)=>({coins:(n.coins??0)-e,bought:{...n.bought??{},[t]:al(n,t)+1}});function h0(n,t,e=ve){const i=Iu(n,e).find(r=>r.key===t&&r.kind!=="power");if(n.over||!i||i.piece===void 0||(n.coins??0)<i.price)return{state:n,accepted:!1};const s=n.after!==void 0?[n.after,...n.queue??[]]:[...n.queue??[]];return{accepted:!0,state:{...n,...Aa(n,t,i.price),next:i.piece,after:n.next,queue:s,...n.budget&&n.pieceLimit?{pieceLimit:n.pieceLimit+1}:{}}}}function ll(n,t){if(t==="reroll")return[];const e=[];return n.board.forEach((i,s)=>{t==="bulldoze"&&i!==Qt&&i!==Ve&&e.push(s),t==="upgrade"&&i>=0&&i<Ie&&e.push(s)}),e}function cl(n,t,e=-1,i=ve){return t==="upgrade"?Kd(n,e>=0?Math.max(0,n.board[e]):0,i):Math.round(i.powerPrices[t]*Math.pow(i.priceRise,al(n,t)))}function Jd(n,t,e=-1,i=ve){const s={state:n,events:[],points:0,accepted:!1};if(n.over)return s;const r=cl(n,t,e,i);if((n.coins??0)<r)return s;if(t==="reroll"){let h=n.rng,f=n.next;for(let g=0;g<6&&f===n.next;g++)[f,h]=es(n.board,n.turn,h,i,!!n.glow,rl(n));return{accepted:!0,events:[],points:0,state:{...n,...Aa(n,t,r),next:f,rng:h}}}if(!ll(n,t).includes(e))return s;const o=[...n.board];if(t==="bulldoze"){o[e]=Qt;const h=n.burn?.filter(([g])=>g!==e);return{accepted:!0,events:[{kind:"remove",cells:[e],points:0}],points:0,state:{...n,...Aa(n,t,r),board:o,...h?{burn:h}:{}}}}const a=o[e]+1;o[e]=a;const l=[{kind:"upgrade",index:e,toTier:a,points:0},...Lu(o,e,i)],c={...n,...Aa(n,t,r)},u=Yd(c,l,i);let d={...c,...u.fields,board:o};if(d.missions){const h=Xd(d,l,{chain:u.fields.lastChain,merges:u.fields.lastChain,trapped:0,coins:u.fields.coins-(c.coins??0),lights:0});d={...d,missions:h.missions,missionsDone:h.missionsDone,coins:(d.coins??0)+h.reward}}return{accepted:!0,events:l,points:u.points,state:d}}function Du(n,t,e=ve,i=Au(n)){const s=[];for(const r of i){const o=[...n];o[r]=t;const a=Hs(t,e);Ms(o,r,t).length>=a&&s.push(r)}return s}const In=n=>typeof n=="number"&&Number.isInteger(n),Zd=n=>In(n)&&(n===Qt||n===ze||n===Ve||n===Yn||Jn(n)||Cd(n)||n>=0&&n<=Ie),$o=n=>Zd(n)&&n!==Qt&&n!==Ve&&n!==Yn&&n!==Ii,ki=n=>In(n)&&n>=0,Ue=(n,t)=>n===void 0||t(n);function f0(n,t){if(!Array.isArray(n))return!1;const e=new Set;return n.every(i=>{if(!Array.isArray(i)||i.length!==2||!In(i[0])||!In(i[1])||e.has(i[0]))return!1;e.add(i[0]);const s=t[i[0]];return Jn(s)&&i[1]>=1&&i[1]<=Tn[s].life})}function Vs(n){if(!n||typeof n!="object")return!1;const t=n;return Array.isArray(t.board)&&Ad(Math.sqrt(t.board.length))&&t.board.every(Zd)&&In(t.score)&&t.score>=0&&In(t.turn)&&t.turn>=1&&$o(t.next)&&(t.stash===Qt||$o(t.stash))&&In(t.rng)&&typeof t.over=="boolean"&&In(t.lastChain)&&In(t.bestChain)&&In(t.highestTier)&&In(t.merges)&&In(t.seed)&&Ue(t.festivals,ki)&&Ue(t.rocksShattered,ki)&&Ue(t.mode,i=>i==="classic"||i==="daily"||i==="zen"||i==="puzzle")&&Ue(t.dailyKey,ks)&&Ue(t.pieceLimit,i=>In(i)&&i>0)&&Ue(t.endReason,i=>i==="full"||i==="limit"||i==="dark"||i==="goal")&&Ue(t.glow,i=>typeof i=="boolean")&&Ue(t.budget,i=>typeof i=="boolean")&&Ue(t.burn,i=>f0(i,t.board))&&Ue(t.after,$o)&&Ue(t.queue,i=>Array.isArray(i)&&i.length<=64&&i.every($o))&&Ue(t.coins,ki)&&Ue(t.bought,i=>!!i&&typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(ki))&&Ue(t.night,i=>typeof i=="boolean")&&Ue(t.heat,ki)&&Ue(t.grown,i=>i===0||i===1)&&Ue(t.dawn,ki)&&Ue(t.trapped,ki)&&Ue(t.missions,i=>Array.isArray(i)&&i.length<=3&&i.every(jm))&&Ue(t.missionsDone,ki)&&Ue(t.island,Vm)&&Ue(t.terrain,i=>Xm(i,t.board.length))&&Ue(t.puzzle,ki)&&Ue(t.goal,i=>In(i)&&i>=0&&i<=Ie)&&(t.mode!=="daily"||t.dailyKey!==void 0)?(Object.isExtensible(t)&&(t.festivals??(t.festivals=0),t.rocksShattered??(t.rocksShattered=0)),!0):!1}const yo=120,d0="2026-10-13",p0=4,m0=1540483477,g0=200;function Ir(n){return zm(d0,n)+1}function _0(n){return Gm("little-nook/daily/"+n)}function v0(n,t,e){const i=[...e];let s=(n^m0)>>>0;const r=()=>{const[a,l]=di(s);return s=l,a},o=(a,l)=>{for(let c=0;c<g0;c++){const u=a(),d=Math.floor(r()*i.length);if(!(i[d]!==Qt||!l(d))){if(i[d]=u,Ms(i,d,u).length<Hs(u,t))return;i[d]=Qt}}};for(let a=0;a<p0;a++)o(()=>r()<.6?0:1,()=>!0);return i}function Qd(n,t=ve){const e=_0(n),i=Ru(e,t,8,!0),s=v0(e,t,i.board),[r,o]=es(s,i.turn,e,t,!0),[a,l]=es(s,i.turn+1,o,t,!0);return{...i,board:s,next:r,after:a,rng:l,mode:"daily",dailyKey:n,pieceLimit:yo}}const jd=20,tp=60;function x0(){return{v:1,rounds:0,pieces:0,built:new Array(Ie+1).fill(0),festivals:0,rocksShattered:0,bestClassic:0,bestDaily:0,bestChain:0,biggestMove:0,mostFestivals:0,longestRound:0,recent:[],daily:{lastKey:null,streak:0,bestStreak:0,scores:{}}}}const Ci=n=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=0,Ca=n=>!!n&&typeof n=="object"&&!Array.isArray(n),M0=n=>n==="classic"||n==="daily"||n==="zen"||n==="puzzle";function y0(n){return Ca(n)&&ks(n.date)&&M0(n.mode)&&Ci(n.score)&&Ci(n.turns)&&Ci(n.top)&&n.top<=Ie&&Ci(n.chain)&&Ci(n.festivals)}function ep(n){if(!Ca(n)||n.v!==1||!["rounds","pieces","festivals","rocksShattered","bestClassic","bestDaily","bestChain","biggestMove","mostFestivals","longestRound"].every(r=>Ci(n[r])))return!1;const e=n.built;if(!Array.isArray(e)||e.length<5||e.length>Ie+1||!e.every(Ci)||e[0]!==0||!Array.isArray(n.recent)||n.recent.length>jd||!n.recent.every(y0))return!1;const i=n.daily;if(!Ca(i)||!(i.lastKey===null||ks(i.lastKey))||!Ci(i.streak)||!Ci(i.bestStreak)||!Ca(i.scores))return!1;const s=Object.entries(i.scores);if(!(s.length<=tp&&s.every(([r,o])=>ks(r)&&Ci(o))))return!1;if(e.length<Ie+1&&Object.isExtensible(e))for(;e.length<Ie+1;)e.push(0);return!0}function np(n,t,e){const i=[...n.built];let{pieces:s,festivals:r,rocksShattered:o}=n;for(const l of t)l.kind==="place"?s++:l.kind==="merge"?i[l.toTier]=(i[l.toTier]??0)+1:l.kind==="festival"?r++:l.kind==="crumble"&&(o+=l.cells.length);const a=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;return{...n,built:i,pieces:s,festivals:r,rocksShattered:o,biggestMove:Math.max(n.biggestMove,a)}}const S0=n=>n.toLocaleString("en-US"),Xr=n=>typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.floor(n)):0;function ip(n,t){const e=n.daily.lastKey;return e!==null&&(e===t||e===Fd(t))?n.daily.streak:0}const b0=(n,t,e=t+"s")=>`${n} ${n===1?t:e}`,Uh=["Best","2nd best","3rd best"];function w0(n){const t=Object.keys(n).sort().reverse().slice(0,tp),e={};for(const i of t.reverse())e[i]=n[i];return e}function E0(n,t,e){const i=t.mode??"classic",s=Xr(t.score),r=Xr(t.turn-1),o=Xr(t.bestChain),a=Xr(t.festivals),l=Math.min(Ie,Xr(t.highestTier)),c=e.slice(0,10),h=[{date:ks(c)?c:ks(t.dailyKey)?t.dailyKey:"1970-01-01",mode:i,score:s,turns:r,top:l,chain:o,festivals:a},...n.recent].slice(0,jd);let f=n.daily;const g=i==="daily"&&ks(t.dailyKey)?t.dailyKey:null;if(g){const _=w0({...f.scores,[g]:Math.max(f.scores[g]??0,s)}),{lastKey:E}=f;if(E!==null&&g<E)f={...f,scores:_};else{const R=E===g?f.streak:E===Fd(g)?f.streak+1:1;f={lastKey:g,streak:R,bestStreak:Math.max(f.bestStreak,R),scores:_}}}const x={...n,built:[...n.built],rounds:n.rounds+1,longestRound:Math.max(n.longestRound,r),bestChain:Math.max(n.bestChain,o),mostFestivals:Math.max(n.mostFestivals,a),bestClassic:i==="classic"?Math.max(n.bestClassic,s):n.bestClassic,bestDaily:i==="daily"?Math.max(n.bestDaily,s):n.bestDaily,recent:h,daily:{...f,scores:{...f.scores}}},p=[],m=n.rounds>0,y=Object.keys(n.daily.scores).length>0||n.bestDaily>0,T=i==="daily"&&y&&s>n.bestDaily;T&&p.push(`Best daily yet: ${S0(s)}`),m&&o>=2&&o>n.bestChain&&p.push(`Best chain ever: ×${o}`),m&&a>n.mostFestivals&&p.push(`New record: ${b0(a,"festival")} in a round`),m&&r>n.longestRound&&p.push(`New record: longest round (${r} turns)`),g&&f.streak>=2&&f.streak>n.daily.streak&&p.push(`Daily streak: ${f.streak} days`);const M=h.filter(_=>_.mode===i),w=M.slice(1),b=1+w.filter(_=>_.score>s).length,C=w.some(_=>_.score<s);if(M.length>=3&&b<=Uh.length&&C&&!T){const _=i==="daily"?"dailies":i==="zen"?"Zen rounds":M.length<h.length?"night rounds":"rounds";p.push(`${Uh[b-1]} of your last ${M.length} ${_}`)}return{journal:x,highlights:p}}function T0(n,t,e=ve){const i=ol(n,t,e),s=i.state.board;let r=i.points*2+qn(i.state).length*6;const o=s[t];if(o!==Qt){Ms(s,t,o).length===2&&(r+=18+o*6);const l=is(s);for(const c of Uo(t,l))s[c]!==Qt&&s[c]!==o&&(r-=3);o===ze&&Nd(t,l)&&(r+=10)}return r}const A0="littleNook.best",C0="littleNookBest",Fh="littleNook.sound",Oh="littleNook.seenHelp",R0="littleNook.game",Bh="littleNook.view",P0="littleNook.roundStartBest",kh="littleNook.music",zh="littleNook.motion",Gh="littleNook.journal",Al="littleNook.daily",Hh="littleNook.haptics",Vh="littleNook.coachDone",Wh="littleNook.size";function Dr(n,t=8){return t===8?n:`${n}.${t}`}const L0="littleNook.fire",Nu=n=>n===!0?L0:`littleNook.${n}`,Ra=(n=8,t=!1)=>Dr(t===!1?R0:`${Nu(t)}.game`,n),Xh=(n,t)=>Dr(t===!1?A0:`${Nu(t)}.best`,n),$h=(n,t)=>Dr(t===!1?P0:`${Nu(t)}.roundStartBest`,n),Yo=(n,t)=>`${t===!0?"f":t===!1?"c":t}${n}`,Yh="littleNook.collection",qh="littleNook.puzzles",Kh="littleNook.island",Cl="littleNook.stars",Jh="littleNook.rules";function I0(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}class D0{constructor(t=I0()){this.store=t,this.memoBest=new Map,this.memoJournal=null}get(t){try{return this.store?.getItem(t)??null}catch{return null}}set(t,e){try{this.store?.setItem(t,e)}catch{}}getBest(t=8,e=!1){const i=this.get(Xh(t,e))??(t===8&&e===!1?this.get(C0):null)??0,s=Number(i),r=Number.isFinite(s)&&s>0?Math.floor(s):0,o=Yo(t,e),a=Math.max(this.memoBest.get(o)??0,r);return this.memoBest.set(o,a),a}submitScore(t,e=8,i=!1){const s=Math.floor(t);return s>this.getBest(e,i)?(this.memoBest.set(Yo(e,i),s),this.set(Xh(e,i),String(s)),!0):!1}getFire(){return this.get(Jh)!=="classic"}setFire(t){this.set(Jh,t?"fire":"classic")}getSize(t){const e=Number(this.get(Wh));return t(e)?e:8}setSize(t){this.set(Wh,String(t))}getSound(){return this.get(Fh)!=="off"}setSound(t){this.set(Fh,t?"on":"off")}hasSeenHelp(){return this.get(Oh)==="1"}markHelpSeen(){this.set(Oh,"1")}getRoundStartBest(t=8,e=!1){const i=this.get($h(t,e)),s=Number(i);return i!==null&&i!==""&&Number.isFinite(s)&&s>=0?s:null}setRoundStartBest(t,e=8,i=!1){this.set($h(e,i),String(t))}getMusic(){return this.get(kh)!=="off"}setMusic(t){this.set(kh,t?"on":"off")}getMotion(){const t=this.get(zh);return t==="on"||t==="off"?t:"system"}setMotion(t){this.set(zh,t)}getView(){return this.get(Bh)}setView(t){this.set(Bh,t)}saveGame(t,e=8,i=!1){this.set(Ra(e,i),JSON.stringify(t))}clearGame(t=8,e=!1){this.set(Ra(t,e),"")}loadGame(t,e=8,i=!1){return this.load(Ra(e,i),t)}saveDaily(t){this.set(Al,JSON.stringify(t))}clearDaily(){this.set(Al,"")}loadDaily(t){return this.load(Al,t)}getJournal(){return this.memoJournal??this.load(Gh,ep)??x0()}saveJournal(t){this.memoJournal=t,this.set(Gh,JSON.stringify(t))}adoptJournal(t){this.memoJournal=t}getHaptics(){return this.get(Hh)!=="off"}setHaptics(t){this.set(Hh,t?"on":"off")}getCoachDone(){return this.get(Vh)==="1"}setCoachDone(){this.set(Vh,"1")}getCollection(t){const e=this.load(Yh,i=>Array.isArray(i))??[];return[...new Set(e.filter(t))]}saveCollection(t){this.set(Yh,JSON.stringify(t))}getPuzzleStars(){const t=this.load(qh,i=>!!i&&typeof i=="object"&&!Array.isArray(i))??{},e={};for(const[i,s]of Object.entries(t))/^\d+$/.test(i)&&Number.isInteger(s)&&s>=0&&s<=3&&(e[Number(i)]=s);return e}savePuzzleStars(t){this.set(qh,JSON.stringify(t))}getIsland(t,e){const i=this.get(Kh);return t(i)?i:e}setIsland(t){this.set(Kh,t)}getStars(t,e){const s=(this.load(Cl,r=>!!r&&typeof r=="object"&&!Array.isArray(r))??{})[Yo(t,e)];return Number.isInteger(s)&&s>=0&&s<=3?s:0}submitStars(t,e,i){if(!(t>this.getStars(e,i)))return!1;const s=this.load(Cl,r=>!!r&&typeof r=="object"&&!Array.isArray(r))??{};return this.set(Cl,JSON.stringify({...s,[Yo(e,i)]:t})),!0}load(t,e){const i=this.get(t);if(!i)return null;try{const s=JSON.parse(i);return e(s)?s:null}catch{return null}}}const Uu="186",N0=0,Zh=1,U0=2,uo=1,F0=2,ro=3,Ws=0,Nn=1,hi=2,ji=0,ho=1,Ki=2,Qh=3,jh=4,O0=5,Sr=100,B0=101,k0=102,z0=103,G0=104,H0=200,V0=201,W0=202,X0=203,sp=204,rp=205,$0=206,Y0=207,q0=208,K0=209,J0=210,Z0=211,Q0=212,j0=213,tg=214,Cc=0,Rc=1,Pc=2,So=3,Lc=4,Ic=5,Dc=6,Nc=7,op=0,eg=1,ng=2,Pi=0,ap=1,lp=2,cp=3,up=4,hp=5,fp=6,Fu=7,dp=300,Xs=301,Nr=302,Rl=303,Pl=304,ul=306,Ha=1e3,Ji=1001,Uc=1002,cn=1003,ig=1004,qo=1005,xn=1006,Ll=1007,Us=1008,Gn=1009,pp=1010,mp=1011,bo=1012,Ou=1013,Ni=1014,pi=1015,Ui=1016,Bu=1017,ku=1018,wo=1020,gp=35902,_p=35899,vp=1021,xp=1022,mi=1023,ns=1026,Fs=1027,zu=1028,Gu=1029,$s=1030,Hu=1031,Vu=1033,Pa=33776,La=33777,Ia=33778,Da=33779,Fc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Gc=37492,Hc=37496,Vc=37488,Wc=37489,Va=37490,Xc=37491,$c=37808,Yc=37809,qc=37810,Kc=37811,Jc=37812,Zc=37813,Qc=37814,jc=37815,tu=37816,eu=37817,nu=37818,iu=37819,su=37820,ru=37821,ou=36492,au=36494,lu=36495,cu=36283,uu=36284,Wa=36285,hu=36286,sg=3200,fu=0,rg=1,ms="",_n="srgb",Xa="srgb-linear",$a="linear",we="srgb",Il=7680,og=519,ag=512,lg=513,cg=514,Wu=515,ug=516,hg=517,Xu=518,fg=519,Mp=35044,tf="300 es",Ri=2e3,Eo=2001;function dg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pg(){const n=Ya("canvas");return n.style.display="block",n}const ef={};function qa(...n){const t="THREE."+n.shift();console.log(t,...n)}function yp(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=yp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=yp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Tr(...n){const t=n.join(" ");t in ef||(ef[t]=!0,$t(...n))}function mg(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const gg={[Cc]:Rc,[Pc]:Dc,[Lc]:Nc,[So]:Ic,[Rc]:Cc,[Dc]:Pc,[Nc]:Lc,[Ic]:So};class Ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nf=1234567;const fo=Math.PI/180,To=180/Math.PI;function Li(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function $u(n,t){return(n%t+t)%t}function _g(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vg(n,t,e){return n!==t?(e-n)/(t-n):0}function po(n,t,e){return(1-e)*n+e*t}function xg(n,t,e,i){return po(n,t,1-Math.exp(-e*i))}function Mg(n,t=1){return t-Math.abs($u(n,t*2)-t)}function yg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function bg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wg(n,t){return n+Math.random()*(t-n)}function Eg(n){return n*(.5-Math.random())}function Tg(n){n!==void 0&&(nf=n);let t=nf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ag(n){return n*fo}function Cg(n){return n*To}function Rg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Pg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ig(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Dg={DEG2RAD:fo,RAD2DEG:To,generateUUID:Li,clamp:re,euclideanModulo:$u,mapLinear:_g,inverseLerp:vg,lerp:po,damp:xg,pingpong:Mg,smoothstep:yg,smootherstep:Sg,randInt:bg,randFloat:wg,randFloatSpread:Eg,seededRandom:Tg,degToRad:Ag,radToDeg:Cg,isPowerOfTwo:Rg,ceilPowerOfTwo:Pg,floorPowerOfTwo:Lg,setQuaternionFromProperEuler:Ig,normalize:Ee,denormalize:fi},mh=class mh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mh.prototype.isVector2=!0;let ct=mh;class Mi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*x;p<0&&(h=-h,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);m=Math.sin(m*y)/T,a=Math.sin(a*y)/T,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+x*a}else{l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+x*a;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gh=class gh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dl.copy(this).projectOnVector(t),this.sub(Dl)}reflect(t){return this.sub(Dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gh.prototype.isVector3=!0;let P=gh;const Dl=new P,sf=new Mi,_h=class _h{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],y=s[1],T=s[4],M=s[7],w=s[2],b=s[5],C=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*p+a*T+l*b,r[6]=o*m+a*M+l*C,r[1]=c*x+u*y+d*w,r[4]=c*p+u*T+d*b,r[7]=c*m+u*M+d*C,r[2]=h*x+f*y+g*w,r[5]=h*p+f*T+g*b,r[8]=h*m+f*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nl.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nl.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_h.prototype.isMatrix3=!0;let Jt=_h;const Nl=new Jt,rf=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ng(){const n={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xa]:{primaries:t,whitePoint:i,transfer:$a,toXYZ:rf,fromXYZ:of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:i,transfer:we,toXYZ:rf,fromXYZ:of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}const he=Ng();function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let tr;class Ug{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tr===void 0&&(tr=Ya("canvas")),tr.width=t.width,tr.height=t.height;const s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ya("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ts(e[i]/255)*255):e[i]=ts(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fg=0;class Yu{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ul(s[o].image)):r.push(Ul(s[o]))}else r=Ul(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ug.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Og=0;const Fl=new P;class Mn extends Ks{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,i=Ji,s=Ji,r=xn,o=Us,a=mi,l=Gn,c=Mn.DEFAULT_ANISOTROPY,u=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Li(),this.name="",this.source=new Yu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fl).x}get height(){return this.source.getSize(Fl).y}get depth(){return this.source.getSize(Fl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case Uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case Uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=dp;Mn.DEFAULT_ANISOTROPY=1;const vh=class vh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(f+1)/2,w=(m+1)/2,b=(u+h)/4,C=(d+x)/4,_=(g+p)/4;return T>M&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=b/i,r=C/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vh.prototype.isVector4=!0;let Fe=vh;class Bg extends Ks{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Mn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yu(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Bg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Sp extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kg extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const il=class il{constructor(t,e,i,s,r,o,a,l,c,u,d,h,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,x,p)}set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new il().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,x=c*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,x=c*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+x,e[1]=l*d,e[5]=x*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zg,t,Gg)}lookAt(t,e,i){const s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),ls.crossVectors(i,On),ls.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ls.crossVectors(i,On)),ls.normalize(),Ko.crossVectors(On,ls),s[0]=ls.x,s[4]=Ko.x,s[8]=On.x,s[1]=ls.y,s[5]=Ko.y,s[9]=On.y,s[2]=ls.z,s[6]=Ko.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],T=i[7],M=i[11],w=i[15],b=s[0],C=s[4],_=s[8],E=s[12],R=s[1],I=s[5],B=s[9],G=s[13],D=s[2],z=s[6],q=s[10],Y=s[14],ot=s[3],K=s[7],et=s[11],X=s[15];return r[0]=o*b+a*R+l*D+c*ot,r[4]=o*C+a*I+l*z+c*K,r[8]=o*_+a*B+l*q+c*et,r[12]=o*E+a*G+l*Y+c*X,r[1]=u*b+d*R+h*D+f*ot,r[5]=u*C+d*I+h*z+f*K,r[9]=u*_+d*B+h*q+f*et,r[13]=u*E+d*G+h*Y+f*X,r[2]=g*b+x*R+p*D+m*ot,r[6]=g*C+x*I+p*z+m*K,r[10]=g*_+x*B+p*q+m*et,r[14]=g*E+x*G+p*Y+m*X,r[3]=y*b+T*R+M*D+w*ot,r[7]=y*C+T*I+M*z+w*K,r[11]=y*_+T*B+M*q+w*et,r[15]=y*E+T*G+M*Y+w*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],y=l*f-c*h,T=a*f-c*d,M=a*h-l*d,w=o*f-c*u,b=o*h-l*u,C=o*d-a*u;return e*(x*y-p*T+m*M)-i*(g*y-p*w+m*b)+s*(g*T-x*w+m*C)-r*(g*M-x*b+p*C)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=e*a-i*o,T=e*l-s*o,M=e*c-r*o,w=i*l-s*a,b=i*c-r*a,C=s*c-r*l,_=u*x-d*g,E=u*p-h*g,R=u*m-f*g,I=d*p-h*x,B=d*m-f*x,G=h*m-f*p,D=y*G-T*B+M*I+w*R-b*E+C*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return t[0]=(a*G-l*B+c*I)*z,t[1]=(s*B-i*G-r*I)*z,t[2]=(x*C-p*b+m*w)*z,t[3]=(h*b-d*C-f*w)*z,t[4]=(l*R-o*G-c*E)*z,t[5]=(e*G-s*R+r*E)*z,t[6]=(p*M-g*C-m*T)*z,t[7]=(u*C-h*M+f*T)*z,t[8]=(o*B-a*R+c*_)*z,t[9]=(i*R-e*B-r*_)*z,t[10]=(g*b-x*M+m*y)*z,t[11]=(d*M-u*b-f*y)*z,t[12]=(a*E-o*I-l*_)*z,t[13]=(e*I-i*E+s*_)*z,t[14]=(x*T-g*w-p*y)*z,t[15]=(u*w-d*T+h*y)*z,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,x=o*u,p=o*d,m=a*d,y=l*c,T=l*u,M=l*d,w=i.x,b=i.y,C=i.z;return s[0]=(1-(x+m))*w,s[1]=(f+M)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(h+m))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(g+T)*C,s[9]=(p-y)*C,s[10]=(1-(h+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=er.set(s[0],s[1],s[2]).length();const a=er.set(s[4],s[5],s[6]).length(),l=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ai.copy(this);const c=1/o,u=1/a,d=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,e.setFromRotationMatrix(ai),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Ri,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Ri)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Eo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ri,l=!1){const c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Ri)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Eo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};il.prototype.isMatrix4=!0;let fe=il;const er=new P,ai=new fe,zg=new P(0,0,0),Gg=new P(1,1,1),ls=new P,Ko=new P,On=new P,af=new fe,lf=new Mi;class yi{constructor(t=0,e=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(af,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lf.setFromEuler(this),this.setFromQuaternion(lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class qu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hg=0;const cf=new P,nr=new Mi,zi=new fe,Jo=new P,$r=new P,Vg=new P,Wg=new Mi,uf=new P(1,0,0),hf=new P(0,1,0),ff=new P(0,0,1),df={type:"added"},Xg={type:"removed"},ir={type:"childadded",child:null},Ol={type:"childremoved",child:null};class on extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new P,e=new yi,i=new Mi,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Jt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(uf,t)}rotateY(t){return this.rotateOnAxis(hf,t)}rotateZ(t){return this.rotateOnAxis(ff,t)}translateOnAxis(t,e){return cf.copy(t).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uf,t)}translateY(t){return this.translateOnAxis(hf,t)}translateZ(t){return this.translateOnAxis(ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jo.copy(t):Jo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt($r,Jo,this.up):zi.lookAt(Jo,$r,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(zi),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(df),ir.child=t,this.dispatchEvent(ir),ir.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xg),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(df),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,Vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}on.DEFAULT_UP=new P(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gi extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $g={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($g)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function kl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=$u(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=kl(o,r,t+1/3),this.g=kl(o,r,t),this.b=kl(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=_n){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const i=bp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return he.workingToColorSpace(mn.copy(this),t),Math.round(re(mn.r*255,0,255))*65536+Math.round(re(mn.g*255,0,255))*256+Math.round(re(mn.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(mn.copy(this),e);const i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=_n){he.workingToColorSpace(mn.copy(this),t);const e=mn.r,i=mn.g,s=mn.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Zo);const i=po(cs.h,Zo.h,e),s=po(cs.s,Zo.s,e),r=po(cs.l,Zo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Lt;Lt.NAMES=bp;class Ku{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=i}clone(){return new Ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pf extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const li=new P,Gi=new P,zl=new P,Hi=new P,sr=new P,rr=new P,mf=new P,Gl=new P,Hl=new P,Vl=new P,Wl=new Fe,Xl=new Fe,$l=new Fe;class ei{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),Gi.subVectors(i,e),zl.subVectors(t,e);const o=li.dot(li),a=li.dot(Gi),l=li.dot(zl),c=Gi.dot(Gi),u=Gi.dot(zl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Wl.setScalar(0),Xl.setScalar(0),$l.setScalar(0),Wl.fromBufferAttribute(t,e),Xl.fromBufferAttribute(t,i),$l.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wl,r.x),o.addScaledVector(Xl,r.y),o.addScaledVector($l,r.z),o}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Gi.subVectors(t,e),li.cross(Gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),li.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;sr.subVectors(s,i),rr.subVectors(r,i),Gl.subVectors(t,i);const l=sr.dot(Gl),c=rr.dot(Gl);if(l<=0&&c<=0)return e.copy(i);Hl.subVectors(t,s);const u=sr.dot(Hl),d=rr.dot(Hl);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(sr,o);Vl.subVectors(t,r);const f=sr.dot(Vl),g=rr.dot(Vl);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(rr,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return mf.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(mf,a);const m=1/(p+x+h);return o=x*m,a=h*m,e.copy(i).addScaledVector(sr,o).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ws{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),jo.subVectors(this.max,Yr),or.subVectors(t.a,Yr),ar.subVectors(t.b,Yr),lr.subVectors(t.c,Yr),us.subVectors(ar,or),hs.subVectors(lr,ar),As.subVectors(or,lr);let e=[0,-us.z,us.y,0,-hs.z,hs.y,0,-As.z,As.y,us.z,0,-us.x,hs.z,0,-hs.x,As.z,0,-As.x,-us.y,us.x,0,-hs.y,hs.x,0,-As.y,As.x,0];return!Yl(e,or,ar,lr,jo)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,or,ar,lr,jo))?!1:(ta.crossVectors(us,hs),e=[ta.x,ta.y,ta.z],Yl(e,or,ar,lr,jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vi=[new P,new P,new P,new P,new P,new P,new P,new P],ci=new P,Qo=new ws,or=new P,ar=new P,lr=new P,us=new P,hs=new P,As=new P,Yr=new P,jo=new P,ta=new P,Cs=new P;function Yl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cs.fromArray(n,r);const a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),u=i.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $e=new P,ea=new ct;let Yg=0;class An extends Ks{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mp,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class wp extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ep extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ge extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}const qg=new ws,qr=new P,ql=new P;class Oo{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(ql)),this.expandByPoint(qr.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Kg=0;const Qn=new fe,Kl=new on,cr=new P,Bn=new ws,Kr=new ws,sn=new P;class Ke extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dg(t)?Ep:wp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,i){return Qn.makeTranslation(t,e,i),this.applyMatrix4(Qn),this}scale(t,e,i){return Qn.makeScale(t,e,i),this.applyMatrix4(Qn),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Bn.min,Kr.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,Kr.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(Kr.min),Bn.expandByPoint(Kr.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(t,c),sn.add(cr)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new P,l[_]=new P;const c=new P,u=new P,d=new P,h=new ct,f=new ct,g=new ct,x=new P,p=new P;function m(_,E,R){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[_].add(x),a[E].add(x),a[R].add(x),l[_].add(p),l[E].add(p),l[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,E=y.length;_<E;++_){const R=y[_],I=R.start,B=R.count;for(let G=I,D=I+B;G<D;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const T=new P,M=new P,w=new P,b=new P;function C(_){w.fromBufferAttribute(s,_),b.copy(w);const E=a[_];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(b,E);const I=M.dot(l[_])<0?-1:1;o.setXYZW(_,T.x,T.y,T.z,I)}for(let _=0,E=y.length;_<E;++_){const R=y[_],I=R.start,B=R.count;for(let G=I,D=I+B;G<D;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new An(h,u,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mp,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const bn=new P;class Ka{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ka(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jl=new P,Zg=new P,Qg=new Jt;class Yi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Jl.subVectors(i,e).cross(Zg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Jl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qg.getNormalMatrix(t),s=this.coplanarPoint(Jl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let jg=0;class kr extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ho,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=rp,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Yi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tp extends kr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ur;const Jr=new P,hr=new P,fr=new P,dr=new ct,Zr=new ct,Ap=new fe,na=new P,Qr=new P,ia=new P,gf=new ct,Zl=new ct,_f=new ct;class t_ extends on{constructor(t=new Tp){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jg(e,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Ka(i,3,0,!1)),ur.setAttribute("uv",new Ka(i,2,3,!1))}this.geometry=ur,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Ap.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-fr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;sa(na.set(-.5,-.5,0),fr,o,hr,s,r),sa(Qr.set(.5,-.5,0),fr,o,hr,s,r),sa(ia.set(.5,.5,0),fr,o,hr,s,r),gf.set(0,0),Zl.set(1,0),_f.set(1,1);let a=t.ray.intersectTriangle(na,Qr,ia,!1,Jr);if(a===null&&(sa(Qr.set(-.5,.5,0),fr,o,hr,s,r),Zl.set(0,1),a=t.ray.intersectTriangle(na,ia,Qr,!1,Jr),a===null))return;const l=t.ray.origin.distanceTo(Jr);l<t.near||l>t.far||e.push({distance:l,point:Jr.clone(),uv:ei.getInterpolation(Jr,na,Qr,ia,gf,Zl,_f,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function sa(n,t,e,i,s,r){dr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Zr.x=r*dr.x-s*dr.y,Zr.y=s*dr.x+r*dr.y):Zr.copy(dr),n.copy(t),n.x+=Zr.x,n.y+=Zr.y,n.applyMatrix4(Ap)}const Wi=new P,Ql=new P,ra=new P,oa=new P;class Cp{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ql.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),oa.copy(this.origin).sub(Ql);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ra),a=oa.dot(this.direction),l=-oa.dot(ra),c=oa.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ql).addScaledVector(ra,h),f}intersectSphere(t,e){if(t.radius<0)return null;Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=i.x-o.x,y=i.y-o.y,T=i.z-o.z,M=Math.abs(l),w=Math.abs(c),b=Math.abs(u);let C,_,E,R,I,B,G,D,z,q,Y,ot;if(M>=w&&M>=b?(E=l,B=d,z=g,ot=m,l>=0?(C=c,_=u,R=h,I=f,G=x,D=p,q=y,Y=T):(C=u,_=c,R=f,I=h,G=p,D=x,q=T,Y=y)):w>=b?(E=c,B=h,z=x,ot=y,c>=0?(C=u,_=l,R=f,I=d,G=p,D=g,q=T,Y=m):(C=l,_=u,R=d,I=f,G=g,D=p,q=m,Y=T)):(E=u,B=f,z=p,ot=T,u>=0?(C=l,_=c,R=d,I=h,G=g,D=x,q=m,Y=y):(C=c,_=l,R=h,I=d,G=x,D=g,q=y,Y=m)),E===0)return null;const K=C/E,et=_/E,X=1/E,lt=R-K*B,Mt=I-et*B,ee=G-K*z,se=D-et*z,de=q-K*ot,Q=Y-et*ot,it=de*se-Q*ee,bt=lt*Q-Mt*de,Vt=ee*Mt-se*lt;if(s){if(it<0||bt<0||Vt<0)return null}else if((it<0||bt<0||Vt<0)&&(it>0||bt>0||Vt>0))return null;const At=it+bt+Vt;if(At===0)return null;const Wt=X*(it*B+bt*z+Vt*ot);return(At>0?Wt<0:Wt>0)?null:this.at(Wt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vf=new fe,Rs=new Cp,aa=new Oo,xf=new P,la=new P,ca=new P,ua=new P,jl=new P,ha=new P,Mf=new P,fa=new P;class Se extends on{constructor(t=new Ke,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(jl.fromBufferAttribute(d,t),o?ha.addScaledVector(jl,u):ha.addScaledVector(jl.sub(e),u))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(aa.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(aa,xf)===null||Rs.origin.distanceToSquared(xf)>(t.far-t.near)**2))&&(vf.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(vf),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,w=T;M<w;M+=3){const b=a.getX(M),C=a.getX(M+1),_=a.getX(M+2);s=da(this,m,t,i,c,u,d,b,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const y=a.getX(p),T=a.getX(p+1),M=a.getX(p+2);s=da(this,o,t,i,c,u,d,y,T,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,w=T;M<w;M+=3){const b=M,C=M+1,_=M+2;s=da(this,m,t,i,c,u,d,b,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const y=p,T=p+1,M=p+2;s=da(this,o,t,i,c,u,d,y,T,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function e_(n,t,e,i,s,r,o,a){let l;if(t.side===Nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ws,a),l===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fa);return c<e.near||c>e.far?null:{distance:c,point:fa.clone(),object:n}}function da(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,la),n.getVertexPosition(l,ca),n.getVertexPosition(c,ua);const u=e_(n,t,e,i,la,ca,ua,Mf);if(u){const d=new P;ei.getBarycoord(Mf,la,ca,ua,d),s&&(u.uv=ei.getInterpolatedAttribute(s,a,l,c,d,new ct)),r&&(u.uv1=ei.getInterpolatedAttribute(r,a,l,c,d,new ct)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};ei.getNormal(la,ca,ua,h.normal),u.face=h,u.barycoord=d}return u}class Ju extends Mn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=cn,u=cn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yf extends An{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pr=new fe,Sf=new fe,pa=[],bf=new ws,n_=new fe,jr=new Se,to=new Oo;class ma extends Se{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,n_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),bf.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(bf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),to.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(to)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(i),t.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Sf.multiplyMatrices(i,pr),jr.matrixWorld=Sf,jr.raycast(t,pa);for(let o=0,a=pa.length;o<a;o++){const l=pa[o];l.instanceId=r,l.object=this,e.push(l)}pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ju(new Float32Array(s*this.count),s,this.count,zu,pi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ps=new Oo,i_=new ct(.5,.5),ga=new P;class Zu{constructor(t=new Yi,e=new Yi,i=new Yi,s=new Yi,r=new Yi,o=new Yi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],T=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,m-g,w-y).normalize(),s[1].setComponents(c+o,f+u,m+g,w+y).normalize(),s[2].setComponents(c+a,f+d,m+x,w+T).normalize(),s[3].setComponents(c-a,f-d,m-x,w-T).normalize(),i)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,f-h,m-p,w-M).normalize();else if(s[4].setComponents(c-l,f-h,m-p,w-M).normalize(),e===Ri)s[5].setComponents(c+l,f+h,m+p,w+M).normalize();else if(e===Eo)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const e=i_.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rp extends Mn{constructor(t=[],e=Xs,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qu extends Mn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends Mn{constructor(t,e,i=Ni,s,r,o,a=cn,l=cn,c,u=ns,d=1){if(u!==ns&&u!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class s_ extends Ao{constructor(t,e=Ni,i=Xs,s,r,o=cn,a=cn,l,c=ns){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pp extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Un extends Ke{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(d,2));function g(x,p,m,y,T,M,w,b,C,_,E){const R=M/C,I=w/_,B=M/2,G=w/2,D=b/2,z=C+1,q=_+1;let Y=0,ot=0;const K=new P;for(let et=0;et<q;et++){const X=et*I-G;for(let lt=0;lt<z;lt++){const Mt=lt*R-B;K[x]=Mt*y,K[p]=X*T,K[m]=D,c.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[m]=b>0?1:-1,u.push(K.x,K.y,K.z),d.push(lt/C),d.push(1-et/_),Y+=1}}for(let et=0;et<_;et++)for(let X=0;X<C;X++){const lt=h+X+z*et,Mt=h+X+z*(et+1),ee=h+(X+1)+z*(et+1),se=h+(X+1)+z*et;l.push(lt,Mt,se),l.push(Mt,ee,se),ot+=6}a.addGroup(f,ot,E),f+=ot,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ys extends Ke{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const x=[],p=i/2;let m=0;y(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(f,2));function y(){const M=new P,w=new P;let b=0;const C=(e-t)/i;for(let _=0;_<=r;_++){const E=[],R=_/r,I=R*(e-t)+t;for(let B=0;B<=s;B++){const G=B/s,D=G*l+a,z=Math.sin(D),q=Math.cos(D);w.x=I*z,w.y=-R*i+p,w.z=I*q,d.push(w.x,w.y,w.z),M.set(z,C,q).normalize(),h.push(M.x,M.y,M.z),f.push(G,1-R),E.push(g++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const R=x[E][_],I=x[E+1][_],B=x[E+1][_+1],G=x[E][_+1];(t>0||E!==0)&&(u.push(R,I,G),b+=3),(e>0||E!==r-1)&&(u.push(I,B,G),b+=3)}c.addGroup(m,b,0),m+=b}function T(M){const w=g,b=new ct,C=new P;let _=0;const E=M===!0?t:e,R=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*R,0),h.push(0,R,0),f.push(.5,.5),g++;const I=g;for(let B=0;B<=s;B++){const D=B/s*l+a,z=Math.cos(D),q=Math.sin(D);C.x=E*q,C.y=p*R,C.z=E*z,d.push(C.x,C.y,C.z),h.push(0,R,0),b.x=z*.5+.5,b.y=q*.5*R+.5,f.push(b.x,b.y),g++}for(let B=0;B<s;B++){const G=w+B,D=I+B;M===!0?u.push(D,D+1,G):u.push(D+1,D,G),_+=3}c.addGroup(m,_,M===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zs extends ys{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Ke{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new P,M=new P,w=new P;for(let b=0;b<e.length;b+=3)f(e[b+0],T),f(e[b+1],M),f(e[b+2],w),l(T,M,w,y)}function l(y,T,M,w){const b=w+1,C=[];for(let _=0;_<=b;_++){C[_]=[];const E=y.clone().lerp(M,_/b),R=T.clone().lerp(M,_/b),I=b-_;for(let B=0;B<=I;B++)B===0&&_===b?C[_][B]=E:C[_][B]=E.clone().lerp(R,B/I)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){const R=Math.floor(E/2);E%2===0?(h(C[_][R+1]),h(C[_+1][R]),h(C[_][R])):(h(C[_][R+1]),h(C[_+1][R+1]),h(C[_+1][R]))}}function c(y){const T=new P;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(y),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function u(){const y=new P;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const M=p(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(M,1-w)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const T=o[y+0],M=o[y+2],w=o[y+4],b=Math.max(T,M,w),C=Math.min(T,M,w);b>.9&&C<.1&&(T<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,T){const M=y*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function g(){const y=new P,T=new P,M=new P,w=new P,b=new ct,C=new ct,_=new ct;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),b.set(o[R+0],o[R+1]),C.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),w.copy(y).add(T).add(M).divideScalar(3);const I=p(w);x(b,R+0,y,I),x(C,R+2,T,I),x(_,R+4,M,I)}}function x(y,T,M,w){w<0&&y.x===1&&(o[T]=y.x-1),M.x===0&&M.z===0&&(o[T]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.detail)}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,s=[],r=[],o=[],a=new P,l=new fe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ju extends Bi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class r_ extends ju{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function th(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const wf=new P,Ef=new P,tc=new th,ec=new th,nc=new th;class o_ extends Bi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ef.subVectors(s[0],s[1]).add(s[0]),c=Ef);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wf),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),tc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,p),ec.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,p),nc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ec.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),nc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(tc.calc(l),ec.calc(l),nc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tf(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function a_(n,t){const e=1-n;return e*e*t}function l_(n,t){return 2*(1-n)*n*t}function c_(n,t){return n*n*t}function mo(n,t,e,i){return a_(n,t)+l_(n,e)+c_(n,i)}function u_(n,t){const e=1-n;return e*e*e*t}function h_(n,t){const e=1-n;return 3*e*e*n*t}function f_(n,t){return 3*(1-n)*n*n*t}function d_(n,t){return n*n*n*t}function go(n,t,e,i,s){return u_(n,t)+h_(n,e)+f_(n,i)+d_(n,s)}class Lp extends Bi{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(t,s.x,r.x,o.x,a.x),go(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class p_ extends Bi{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(t,s.x,r.x,o.x,a.x),go(t,s.y,r.y,o.y,a.y),go(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ip extends Bi{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m_ extends Bi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends Bi{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(t,s.x,r.x,o.x),mo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g_ extends Bi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(t,s.x,r.x,o.x),mo(t,s.y,r.y,o.y),mo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Np extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Tf(a,l.x,c.x,u.x,d.x),Tf(a,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var du=Object.freeze({__proto__:null,ArcCurve:r_,CatmullRomCurve3:o_,CubicBezierCurve:Lp,CubicBezierCurve3:p_,EllipseCurve:ju,LineCurve:Ip,LineCurve3:m_,QuadraticBezierCurve:Dp,QuadraticBezierCurve3:g_,SplineCurve:Np});class __ extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new du[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new du[s.type]().fromJSON(s))}return this}}class Af extends __{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ip(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Dp(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Lp(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Np(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new ju(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hl extends Af{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Af().fromJSON(s))}return this}}function v_(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Up(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=b_(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let u=a,d=l;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Co(r,o,e,a,l,c,0),o}function Up(n,t,e,i,s){let r;if(s===N_(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Cf(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Cf(o/i|0,n[o],n[o+1],r);return r&&Ur(r,r.next)&&(Po(r),r=r.next),r}function Ys(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ur(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Po(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Co(n,t,e,i,s,r,o){if(!n)return;!o&&r&&C_(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?M_(n,i,s,r):x_(n)){t.push(l.i,n.i,c.i),Po(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=y_(Ys(n),t),Co(n,t,e,i,s,r,2)):o===2&&S_(n,t,e,i,s,r):Co(Ys(n),t,e,i,s,r,1);break}}}function x_(n){const t=n.prev,e=n,i=n.next;if(Oe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&oo(s,a,r,l,o,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function M_(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Oe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),x=Math.max(a,l,c),p=Math.max(u,d,h),m=pu(f,g,t,e,i),y=pu(x,p,t,e,i);let T=n.prevZ,M=n.nextZ;for(;T&&T.z>=m&&M&&M.z<=y;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&oo(a,u,l,d,c,h,T.x,T.y)&&Oe(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&oo(a,u,l,d,c,h,M.x,M.y)&&Oe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&oo(a,u,l,d,c,h,T.x,T.y)&&Oe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&oo(a,u,l,d,c,h,M.x,M.y)&&Oe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function y_(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ur(i,s)&&Op(i,e,e.next,s)&&Ro(i,s)&&Ro(s,i)&&(t.push(i.i,e.i,s.i),Po(e),Po(e.next),e=n=s),e=e.next}while(e!==n);return Ys(e)}function S_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L_(o,a)){let l=Bp(o,a);o=Ys(o,o.next),l=Ys(l,l.next),Co(o,t,e,i,s,r,0),Co(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function b_(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Up(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(P_(c))}s.sort(w_);for(let r=0;r<s.length;r++)e=E_(s[r],e);return e}function w_(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function E_(n,t){const e=T_(n,t);if(!e)return t;const i=Bp(e,n);return Ys(i,i.next),Ys(e,e.next)}function T_(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Ur(n,e))return e;do{if(Ur(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Fp(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Ro(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&A_(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function A_(n,t){return Oe(n.prev,n,t.prev)<0&&Oe(t.next,n,n.next)<0}function C_(n,t,e,i){let s=n;do s.z===0&&(s.z=pu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,R_(s)}function R_(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function pu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function P_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Fp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function oo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Fp(n,t,e,i,s,r,o,a)}function L_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!I_(n,t)&&(Ro(n,t)&&Ro(t,n)&&D_(n,t)&&(Oe(n.prev,n,t.prev)||Oe(n,t.prev,t))||Ur(n,t)&&Oe(n.prev,n,n.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ur(n,t){return n.x===t.x&&n.y===t.y}function Op(n,t,e,i){const s=va(Oe(n,t,e)),r=va(Oe(n,t,i)),o=va(Oe(e,i,n)),a=va(Oe(e,i,t));return!!(s!==r&&o!==a||s===0&&_a(n,e,t)||r===0&&_a(n,i,t)||o===0&&_a(e,n,i)||a===0&&_a(e,t,i))}function _a(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function va(n){return n>0?1:n<0?-1:0}function I_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Op(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ro(n,t){return Oe(n.prev,n,n.next)<0?Oe(n,t,n.next)>=0&&Oe(n,n.prev,t)>=0:Oe(n,t,n.prev)<0||Oe(n,n.next,t)<0}function D_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Bp(n,t){const e=mu(n.i,n.x,n.y),i=mu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Cf(n,t,e,i){const s=mu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function N_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class U_{static triangulate(t,e,i=2){return v_(t,e,i)}}class Zi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Zi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Rf(t),Pf(i,t);let o=t.length;e.forEach(Rf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Pf(i,e[l]);const a=U_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Rf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Pf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class eh extends Ke{constructor(t=new hl([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:F_;let T,M=!1,w,b,C,_;if(m){T=m.getSpacedPoints(u),M=!0,h=!1;const st=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,st),b=new P,C=new P,_=new P}h||(p=0,f=0,g=0,x=0);const E=a.extractPoints(c);let R=E.shape;const I=E.holes;if(!Zi.isClockWise(R)){R=R.reverse();for(let st=0,at=I.length;st<at;st++){const ut=I[st];Zi.isClockWise(ut)&&(I[st]=ut.reverse())}}function G(st){const ut=10000000000000001e-36;let ht=st[0];for(let mt=1;mt<=st.length;mt++){const Gt=mt%st.length,kt=st[Gt],Xt=kt.x-ht.x,Kt=kt.y-ht.y,L=Xt*Xt+Kt*Kt,xe=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(ht.x),Math.abs(ht.y)),oe=ut*xe*xe;if(L<=oe){st.splice(Gt,1),mt--;continue}ht=kt}}G(R),I.forEach(G);const D=I.length,z=R;for(let st=0;st<D;st++){const at=I[st];R=R.concat(at)}function q(st,at,ut){return at||ue("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(at,ut)}const Y=R.length;function ot(st,at,ut){let ht,mt,Gt;const kt=st.x-at.x,Xt=st.y-at.y,Kt=ut.x-st.x,L=ut.y-st.y,xe=kt*kt+Xt*Xt,oe=kt*L-Xt*Kt;if(Math.abs(oe)>Number.EPSILON){const A=Math.sqrt(xe),v=Math.sqrt(Kt*Kt+L*L),k=at.x-Xt/A,W=at.y+kt/A,J=ut.x-L/v,dt=ut.y+Kt/v,pt=((J-k)*L-(dt-W)*Kt)/(kt*L-Xt*Kt);ht=k+kt*pt-st.x,mt=W+Xt*pt-st.y;const Z=ht*ht+mt*mt;if(Z<=2)return new ct(ht,mt);Gt=Math.sqrt(Z/2)}else{let A=!1;kt>Number.EPSILON?Kt>Number.EPSILON&&(A=!0):kt<-Number.EPSILON?Kt<-Number.EPSILON&&(A=!0):Math.sign(Xt)===Math.sign(L)&&(A=!0),A?(ht=-Xt,mt=kt,Gt=Math.sqrt(xe)):(ht=kt,mt=Xt,Gt=Math.sqrt(xe/2))}return new ct(ht/Gt,mt/Gt)}const K=[];for(let st=0,at=z.length,ut=at-1,ht=st+1;st<at;st++,ut++,ht++)ut===at&&(ut=0),ht===at&&(ht=0),K[st]=ot(z[st],z[ut],z[ht]);const et=[];let X,lt=K.concat();for(let st=0,at=D;st<at;st++){const ut=I[st];X=[];for(let ht=0,mt=ut.length,Gt=mt-1,kt=ht+1;ht<mt;ht++,Gt++,kt++)Gt===mt&&(Gt=0),kt===mt&&(kt=0),X[ht]=ot(ut[ht],ut[Gt],ut[kt]);et.push(X),lt=lt.concat(X)}let Mt;if(p===0)Mt=Zi.triangulateShape(z,I);else{const st=[],at=[];for(let ut=0;ut<p;ut++){const ht=ut/p,mt=f*Math.cos(ht*Math.PI/2),Gt=g*Math.sin(ht*Math.PI/2)+x;for(let kt=0,Xt=z.length;kt<Xt;kt++){const Kt=q(z[kt],K[kt],Gt);bt(Kt.x,Kt.y,-mt),ht===0&&st.push(Kt)}for(let kt=0,Xt=D;kt<Xt;kt++){const Kt=I[kt];X=et[kt];const L=[];for(let xe=0,oe=Kt.length;xe<oe;xe++){const A=q(Kt[xe],X[xe],Gt);bt(A.x,A.y,-mt),ht===0&&L.push(A)}ht===0&&at.push(L)}}Mt=Zi.triangulateShape(st,at)}const ee=Mt.length,se=g+x;for(let st=0;st<Y;st++){const at=h?q(R[st],lt[st],se):R[st];M?(C.copy(w.normals[0]).multiplyScalar(at.x),b.copy(w.binormals[0]).multiplyScalar(at.y),_.copy(T[0]).add(C).add(b),bt(_.x,_.y,_.z)):bt(at.x,at.y,0)}for(let st=1;st<=u;st++)for(let at=0;at<Y;at++){const ut=h?q(R[at],lt[at],se):R[at];M?(C.copy(w.normals[st]).multiplyScalar(ut.x),b.copy(w.binormals[st]).multiplyScalar(ut.y),_.copy(T[st]).add(C).add(b),bt(_.x,_.y,_.z)):bt(ut.x,ut.y,d/u*st)}for(let st=p-1;st>=0;st--){const at=st/p,ut=f*Math.cos(at*Math.PI/2),ht=g*Math.sin(at*Math.PI/2)+x;for(let mt=0,Gt=z.length;mt<Gt;mt++){const kt=q(z[mt],K[mt],ht);bt(kt.x,kt.y,d+ut)}for(let mt=0,Gt=I.length;mt<Gt;mt++){const kt=I[mt];X=et[mt];for(let Xt=0,Kt=kt.length;Xt<Kt;Xt++){const L=q(kt[Xt],X[Xt],ht);M?bt(L.x,L.y+T[u-1].y,T[u-1].x+ut):bt(L.x,L.y,d+ut)}}}de(),Q();function de(){const st=s.length/3;if(h){let at=0,ut=Y*at;for(let ht=0;ht<ee;ht++){const mt=Mt[ht];Vt(mt[2]+ut,mt[1]+ut,mt[0]+ut)}at=u+p*2,ut=Y*at;for(let ht=0;ht<ee;ht++){const mt=Mt[ht];Vt(mt[0]+ut,mt[1]+ut,mt[2]+ut)}}else{for(let at=0;at<ee;at++){const ut=Mt[at];Vt(ut[2],ut[1],ut[0])}for(let at=0;at<ee;at++){const ut=Mt[at];Vt(ut[0]+Y*u,ut[1]+Y*u,ut[2]+Y*u)}}i.addGroup(st,s.length/3-st,0)}function Q(){const st=s.length/3;let at=0;it(z,at),at+=z.length;for(let ut=0,ht=I.length;ut<ht;ut++){const mt=I[ut];it(mt,at),at+=mt.length}i.addGroup(st,s.length/3-st,1)}function it(st,at){let ut=st.length;for(;--ut>=0;){const ht=ut;let mt=ut-1;mt<0&&(mt=st.length-1);for(let Gt=0,kt=u+p*2;Gt<kt;Gt++){const Xt=Y*Gt,Kt=Y*(Gt+1),L=at+ht+Xt,xe=at+mt+Xt,oe=at+mt+Kt,A=at+ht+Kt;At(L,xe,oe,A)}}}function bt(st,at,ut){l.push(st),l.push(at),l.push(ut)}function Vt(st,at,ut){Wt(st),Wt(at),Wt(ut);const ht=s.length/3,mt=y.generateTopUV(i,s,ht-3,ht-2,ht-1);be(mt[0]),be(mt[1]),be(mt[2])}function At(st,at,ut,ht){Wt(st),Wt(at),Wt(ht),Wt(at),Wt(ut),Wt(ht);const mt=s.length/3,Gt=y.generateSideWallUV(i,s,mt-6,mt-3,mt-2,mt-1);be(Gt[0]),be(Gt[1]),be(Gt[3]),be(Gt[1]),be(Gt[2]),be(Gt[3])}function Wt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function be(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return O_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new du[s.type]().fromJSON(s)),new eh(i,t.options)}}const F_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-d),new ct(h,1-g),new ct(x,1-m)]:[new ct(a,1-l),new ct(u,1-d),new ct(f,1-g),new ct(p,1-m)]}};function O_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class fl extends Bo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fl(t.radius,t.detail)}}class Ja extends Bo{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ja(t.radius,t.detail)}}class zr extends Ke{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let T=0;T<c;T++){const M=T*d-r;g.push(M,-y,0),x.push(0,0,1),p.push(T/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const T=y+c*m,M=y+c*(m+1),w=y+1+c*(m+1),b=y+1+c*m;f.push(T,M,b),f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class _o extends Ke{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,f=new P,g=new ct;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){const m=r+p/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<s;x++){const p=x*(i+1);for(let m=0;m<i;m++){const y=m+p,T=y,M=y+i+1,w=y+i+2,b=y+1;a.push(T,M,b),a.push(M,w,b)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nh extends Ke{constructor(t=new hl([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(r,3)),this.setAttribute("uv",new ge(o,2));function c(u){const d=s.length/3,h=u.extractPoints(e);let f=h.shape;const g=h.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];Zi.isClockWise(y)===!0&&(g[p]=y.reverse())}const x=Zi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=x.length;p<m;p++){const y=x[p],T=y[0]+d,M=y[1]+d,w=y[2]+d;i.push(T,M,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return B_(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new nh(i,t.curveSegments)}}function B_(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ko extends Ke{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){const y=[],T=m/i,M=o+T*a,w=t*Math.cos(M),b=Math.sqrt(t*t-w*w);let C=0;m===0&&o===0?C=.5/e:m===i&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){const E=_/e,R=s+E*r;d.x=-b*Math.cos(R),d.y=w,d.z=b*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(E+C,1-T),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const T=u[m][y+1],M=u[m][y],w=u[m+1][y],b=u[m+1][y+1];(m!==0||o>0)&&f.push(T,M,b),(m!==i-1||l<Math.PI)&&f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ih extends Bo{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ih(t.radius,t.detail)}}class sh extends Ke{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,f=new P,g=new P;for(let x=0;x<=i;x++){const p=o+x/i*a;for(let m=0;m<=s;m++){const y=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,T=(s+1)*(x-1)+p,M=(s+1)*x+p;l.push(m,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Lf(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Lf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function wn(n){const t={};for(let e=0;e<n.length;e++){const i=Fr(n[e]);for(const s in i)t[s]=i[s]}return t}function Lf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function k_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const z_={clone:Fr,merge:wn};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=k_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class V_ extends Fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gs extends kr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class W_ extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class X_ extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rh extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class If extends rh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ic=new fe,Df=new P,Nf=new P;class zp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zu,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Df.setFromMatrixPosition(t.matrixWorld),e.position.copy(Df),Nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ic,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Eo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xa=new P,Ma=new Mi,wi=new P;class Gp extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,Ma,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,Ma,wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(xa,Ma,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,Ma,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new P,Uf=new ct,Ff=new ct;class zn extends Gp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,Uf,Ff),e.subVectors(Ff,Uf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class $_ extends zp{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class Y_ extends rh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Lo extends Gp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class q_ extends zp{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sc extends rh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new q_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const mr=-90,gr=1;class K_ extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(mr,gr,t,e);s.layers=this.layers,this.add(s);const r=new zn(mr,gr,t,e);r.layers=this.layers,this.add(r);const o=new zn(mr,gr,t,e);o.layers=this.layers,this.add(o);const a=new zn(mr,gr,t,e);a.layers=this.layers,this.add(a);const l=new zn(mr,gr,t,e);l.layers=this.layers,this.add(l);const c=new zn(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class J_ extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Of=new fe;class Z_{constructor(t,e,i=0,s=1/0){this.ray=new Cp(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Of.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Of),this}intersectObject(t,e=!0,i=[]){return gu(t,this,i,e),i.sort(Bf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)gu(t[s],this,i,e);return i.sort(Bf),i}}function Bf(n,t){return n.distance-t.distance}function gu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)gu(r[o],t,e,!0)}}const xh=class xh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};xh.prototype.isMatrix2=!0;let kf=xh;function zf(n,t,e,i){const s=Q_(i);switch(e){case vp:return n*t;case zu:return n*t/s.components*s.byteLength;case Gu:return n*t/s.components*s.byteLength;case $s:return n*t*2/s.components*s.byteLength;case Hu:return n*t*2/s.components*s.byteLength;case xp:return n*t*3/s.components*s.byteLength;case mi:return n*t*4/s.components*s.byteLength;case Vu:return n*t*4/s.components*s.byteLength;case Pa:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ia:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oc:case kc:return Math.max(n,16)*Math.max(t,8)/4;case Fc:case Bc:return Math.max(n,8)*Math.max(t,8)/2;case zc:case Gc:case Vc:case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Va:case Xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case iu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ru:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ou:case au:case lu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cu:case uu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wa:case hu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Q_(n){switch(n){case Gn:case pp:return{byteLength:1,components:1};case bo:case mp:case Ui:return{byteLength:2,components:1};case Bu:case ku:return{byteLength:2,components:4};case Ni:case Ou:case pi:return{byteLength:4,components:1};case gp:case _p:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);function Hp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function j_(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ev=`#ifdef USE_ALPHAHASH
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
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rv=`#ifdef USE_ALPHATEST
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
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lv=`#ifdef USE_BATCHING
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
#endif`,cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
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
} // validated`,dv=`#ifdef USE_IRIDESCENCE
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
#endif`,pv=`#ifdef USE_BUMPMAP
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bv=`#define PI 3.141592653589793
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
} // validated`,wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ev=`vec3 transformedNormal = objectNormal;
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
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gv=`#ifdef USE_GRADIENTMAP
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
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$v=`#ifdef USE_ENVMAP
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
#endif`,Yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zv=`PhysicalMaterial material;
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
#endif`,Qv=`uniform sampler2D dfgLUT;
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
}`,jv=`
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ux=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kx=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,aM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
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
}`,dM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#define LAMBERT
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
}`,_M=`#define LAMBERT
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
}`,vM=`#define MATCAP
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
}`,xM=`#define MATCAP
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
}`,MM=`#define NORMAL
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
}`,yM=`#define NORMAL
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
}`,SM=`#define PHONG
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
}`,bM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,EM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,AM=`#define TOON
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
}`,CM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,LM=`uniform vec3 color;
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
}`,IM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:tv,alphahash_pars_fragment:ev,alphamap_fragment:nv,alphamap_pars_fragment:iv,alphatest_fragment:sv,alphatest_pars_fragment:rv,aomap_fragment:ov,aomap_pars_fragment:av,batching_pars_vertex:lv,batching_vertex:cv,begin_vertex:uv,beginnormal_vertex:hv,bsdfs:fv,iridescence_fragment:dv,bumpmap_pars_fragment:pv,clipping_planes_fragment:mv,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:_v,clipping_planes_vertex:vv,color_fragment:xv,color_pars_fragment:Mv,color_pars_vertex:yv,color_vertex:Sv,common:bv,cube_uv_reflection_fragment:wv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:Tv,displacementmap_vertex:Av,emissivemap_fragment:Cv,emissivemap_pars_fragment:Rv,colorspace_fragment:Pv,colorspace_pars_fragment:Lv,envmap_fragment:Iv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Nv,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:$v,envmap_vertex:Fv,fog_vertex:Ov,fog_pars_vertex:Bv,fog_fragment:kv,fog_pars_fragment:zv,gradientmap_pars_fragment:Gv,lightmap_pars_fragment:Hv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:Yv,lights_toon_pars_fragment:qv,lights_phong_fragment:Kv,lights_phong_pars_fragment:Jv,lights_physical_fragment:Zv,lights_physical_pars_fragment:Qv,lights_fragment_begin:jv,lights_fragment_maps:tx,lights_fragment_end:ex,lightprobes_pars_fragment:nx,logdepthbuf_fragment:ix,logdepthbuf_pars_fragment:sx,logdepthbuf_pars_vertex:rx,logdepthbuf_vertex:ox,map_fragment:ax,map_pars_fragment:lx,map_particle_fragment:cx,map_particle_pars_fragment:ux,metalnessmap_fragment:hx,metalnessmap_pars_fragment:fx,morphinstance_vertex:dx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:xx,normal_pars_fragment:Mx,normal_pars_vertex:yx,normal_vertex:Sx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Ex,clearcoat_pars_fragment:Tx,iridescence_pars_fragment:Ax,opaque_fragment:Cx,packing:Rx,premultiplied_alpha_fragment:Px,project_vertex:Lx,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Ox,shadowmap_vertex:Bx,shadowmask_pars_fragment:kx,skinbase_vertex:zx,skinning_pars_vertex:Gx,skinning_vertex:Hx,skinnormal_vertex:Vx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:$x,tonemapping_pars_fragment:Yx,transmission_fragment:qx,transmission_pars_fragment:Kx,uv_pars_fragment:Jx,uv_pars_vertex:Zx,uv_vertex:Qx,worldpos_vertex:jx,background_vert:tM,background_frag:eM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:sM,cube_frag:rM,depth_vert:oM,depth_frag:aM,distance_vert:lM,distance_frag:cM,equirect_vert:uM,equirect_frag:hM,linedashed_vert:fM,linedashed_frag:dM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:_M,meshmatcap_vert:vM,meshmatcap_frag:xM,meshnormal_vert:MM,meshnormal_frag:yM,meshphong_vert:SM,meshphong_frag:bM,meshphysical_vert:wM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:CM,points_frag:RM,shadow_vert:PM,shadow_frag:LM,sprite_vert:IM,sprite_frag:DM},St={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Ti={basic:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:wn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:wn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:wn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:wn([St.points,St.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:wn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:wn([St.common,St.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:wn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:wn([St.sprite,St.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:wn([St.common,St.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:wn([St.lights,St.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Ti.physical={uniforms:wn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const ya={r:0,b:0,g:0},NM=new fe,Vp=new Jt;Vp.set(-1,0,0,0,1,0,0,0,1);function UM(n,t,e,i,s,r){const o=new Lt(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const M=y.backgroundBlurriness>0;T=t.get(T,M)}return T}function g(y){let T=!1;const M=f(y);M===null?p(o,a):M&&M.isColor&&(p(M,1),T=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===ul)?(c===void 0&&(c=new Se(new Un(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Fr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NM.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vp),c.material.toneMapped=he.getTransfer(M.colorSpace)!==we,(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Se(new zr(2,2),new Fi({name:"BackgroundMaterial",uniforms:Fr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=he.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,T){y.getRGB(ya,kp(n)),e.buffers.color.setClear(ya.r,ya.g,ya.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:x,dispose:m}}function FM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(I,B,G,D,z){let q=!1;const Y=d(I,D,G,B);r!==Y&&(r=Y,c(r.object)),q=f(I,D,G,z),q&&g(I,D,G,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(I,B,G,D),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function d(I,B,G,D){const z=D.wireframe===!0;let q=i[B.id];q===void 0&&(q={},i[B.id]=q);const Y=I.isInstancedMesh===!0?I.id:0;let ot=q[Y];ot===void 0&&(ot={},q[Y]=ot);let K=ot[G.id];K===void 0&&(K={},ot[G.id]=K);let et=K[z];return et===void 0&&(et=h(l()),K[z]=et),et}function h(I){const B=[],G=[],D=[];for(let z=0;z<e;z++)B[z]=0,G[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,B,G,D){const z=r.attributes,q=B.attributes;let Y=0;const ot=G.getAttributes();for(const K in ot)if(ot[K].location>=0){const X=z[K];let lt=q[K];if(lt===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor)),X===void 0||X.attribute!==lt||lt&&X.data!==lt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function g(I,B,G,D){const z={},q=B.attributes;let Y=0;const ot=G.getAttributes();for(const K in ot)if(ot[K].location>=0){let X=q[K];X===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(X=I.instanceColor));const lt={};lt.attribute=X,X&&X.data&&(lt.data=X.data),z[K]=lt,Y++}r.attributes=z,r.attributesNum=Y,r.index=D}function x(){const I=r.newAttributes;for(let B=0,G=I.length;B<G;B++)I[B]=0}function p(I){m(I,0)}function m(I,B){const G=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;G[I]=1,D[I]===0&&(n.enableVertexAttribArray(I),D[I]=1),z[I]!==B&&(n.vertexAttribDivisor(I,B),z[I]=B)}function y(){const I=r.newAttributes,B=r.enabledAttributes;for(let G=0,D=B.length;G<D;G++)B[G]!==I[G]&&(n.disableVertexAttribArray(G),B[G]=0)}function T(I,B,G,D,z,q,Y){Y===!0?n.vertexAttribIPointer(I,B,G,z,q):n.vertexAttribPointer(I,B,G,D,z,q)}function M(I,B,G,D){x();const z=D.attributes,q=G.getAttributes(),Y=B.defaultAttributeValues;for(const ot in q){const K=q[ot];if(K.location>=0){let et=z[ot];if(et===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(et=I.instanceColor)),et!==void 0){const X=et.normalized,lt=et.itemSize,Mt=t.get(et);if(Mt===void 0)continue;const ee=Mt.buffer,se=Mt.type,de=Mt.bytesPerElement,Q=se===n.INT||se===n.UNSIGNED_INT||et.gpuType===Ou;if(et.isInterleavedBufferAttribute){const it=et.data,bt=it.stride,Vt=et.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<K.locationSize;At++)m(K.location+At,it.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<K.locationSize;At++)p(K.location+At);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let At=0;At<K.locationSize;At++)T(K.location+At,lt/K.locationSize,se,X,bt*de,(Vt+lt/K.locationSize*At)*de,Q)}else{if(et.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)m(K.location+it,et.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let it=0;it<K.locationSize;it++)p(K.location+it);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let it=0;it<K.locationSize;it++)T(K.location+it,lt/K.locationSize,se,X,lt*de,lt/K.locationSize*it*de,Q)}}else if(Y!==void 0){const X=Y[ot];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(K.location,X);break;case 3:n.vertexAttrib3fv(K.location,X);break;case 4:n.vertexAttrib4fv(K.location,X);break;default:n.vertexAttrib1fv(K.location,X)}}}}y()}function w(){E();for(const I in i){const B=i[I];for(const G in B){const D=B[G];for(const z in D){const q=D[z];for(const Y in q)u(q[Y].object),delete q[Y];delete D[z]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;const B=i[I.id];for(const G in B){const D=B[G];for(const z in D){const q=D[z];for(const Y in q)u(q[Y].object),delete q[Y];delete D[z]}}delete i[I.id]}function C(I){for(const B in i){const G=i[B];for(const D in G){const z=G[D];if(z[I.id]===void 0)continue;const q=z[I.id];for(const Y in q)u(q[Y].object),delete q[Y];delete z[I.id]}}}function _(I){for(const B in i){const G=i[B],D=I.isInstancedMesh===!0?I.id:0,z=G[D];if(z!==void 0){for(const q in z){const Y=z[q];for(const ot in Y)u(Y[ot].object),delete Y[ot];delete z[q]}delete G[D],Object.keys(G).length===0&&delete i[B]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function OM(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function BM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==mi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Gn&&C!==pi&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&($t("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:b}}function kM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Yi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,T=y*4;let M=m.clippingState||null;l.value=M,M=u(g,h,T,f);for(let w=0;w!==T;++w)M[w]=e[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,M=f;T!==x;++T,M+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}const wr=4,zM=6,GM=20,HM=256,eo=new Lo,Gf=new Lt;let rc=null,oc=0,ac=0,lc=!1;const VM=new P,Ls=new P;class Hf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=VM}=r;rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,oc,ac),this._renderer.xr.enabled=lc,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ui,format:mi,colorSpace:Xa,depthBuffer:!1},s=Vf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=WM(r)),this._blurMaterial=$M(r,t,e),this._ggxMaterial=XM(r,t,e)}return s}_compileMaterial(t){const e=new Se(new Ke,t);this._renderer.compile(e,eo)}_sceneToCubeUV(t,e,i,s,r){const l=new zn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Gf),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Se(new Un,new vn({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(Gf),m=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const w=this._cubeSize;_r(s,M*w,T>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Xs||t.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;_r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,eo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-wr?i-g+wr:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,_r(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,eo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,_r(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(a,eo)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-wr?s-this._lodMax+wr:0),h=4*(this._cubeSize-u);_r(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(l,eo)}}function WM(n){const t=[],e=[];let i=n;const s=n-wr+1+zM;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let m=0;m<d;m++){const y=m%3*2/3-1,T=m>2?0:-1,M=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(M,f*h*m);for(let w=0;w<h;w++){const b=u[w*2]*2-1,C=u[w*2+1]*2-1;m===0?Ls.set(1,C,b):m===1?Ls.set(-b,1,-C):m===2?Ls.set(-b,C,1):m===3?Ls.set(-1,C,-b):m===4?Ls.set(-b,-1,C):Ls.set(b,C,-1),Ls.toArray(x,(m*h+w)*f)}}const p=new Ke;p.setAttribute("position",new An(g,f)),p.setAttribute("outputDirection",new An(x,f)),e.push(new Se(p,null)),i>wr&&i--}return{lodMeshes:e,sizeLods:t}}function Vf(n,t,e){const i=new si(n,t,e);return i.texture.mapping=ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function XM(n,t,e){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function $M(n,t,e){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Wf(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Xf(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wp extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rp(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:ji});r.uniforms.tEquirect.value=e;const o=new Se(s,r),a=e.minFilter;return e.minFilter===Us&&(e.minFilter=xn),new K_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function YM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Rl||f===Pl)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new Wp(g.height);return x.fromEquirectangularTexture(n,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Rl||f===Pl,x=f===Xs||f===Nr;if(g||x){let p=e.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Hf(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return g&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Hf(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===Rl?h.mapping=Xs:f===Pl&&(h.mapping=Nr),h}function l(h){let f=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function qM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Tr("WebGLRenderer: "+i+" extension not supported."),s}}}function KM(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const y=f.array;x=f.version;for(let T=0,M=y.length;T<M;T+=3){const w=y[T+0],b=y[T+1],C=y[T+2];h.push(w,b,b,C,C,w)}}else{const y=g.array;x=g.version;for(let T=0,M=y.length/3-1;T<M;T+=3){const w=T+0,b=T+1,C=T+2;h.push(w,b,b,C,C,w)}}const p=new(g.count>=65535?Ep:wp)(h,1);p.version=x;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function JM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ZM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function QM(n,t,e){const i=new WeakMap,s=new Fe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let M=a.attributes.position.count*T,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*w*4*d),C=new Sp(b,M,w,d);C.type=pi,C.needsUpdate=!0;const _=T*4;for(let R=0;R<d;R++){const I=p[R],B=m[R],G=y[R],D=M*w*4*R;for(let z=0;z<I.count;z++){const q=z*_;f===!0&&(s.fromBufferAttribute(I,z),b[D+q+0]=s.x,b[D+q+1]=s.y,b[D+q+2]=s.z,b[D+q+3]=0),g===!0&&(s.fromBufferAttribute(B,z),b[D+q+4]=s.x,b[D+q+5]=s.y,b[D+q+6]=s.z,b[D+q+7]=0),x===!0&&(s.fromBufferAttribute(G,z),b[D+q+8]=s.x,b[D+q+9]=s.y,b[D+q+10]=s.z,b[D+q+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new ct(M,w)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function jM(n,t,e,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const ty={[ap]:"LINEAR_TONE_MAPPING",[lp]:"REINHARD_TONE_MAPPING",[cp]:"CINEON_TONE_MAPPING",[up]:"ACES_FILMIC_TONE_MAPPING",[fp]:"AGX_TONE_MAPPING",[Fu]:"NEUTRAL_TONE_MAPPING",[hp]:"CUSTOM_TONE_MAPPING"};function ey(n,t,e,i,s,r){const o=new si(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ke;c.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ge([0,2,0,0,2,0],2));const u=new V_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Se(c,u),h=new Lo(-1,1,1,-1,0,1);let f=null,g=null,x=!1,p,m=null,y=[],T=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let b=0;b<y.length;b++){const C=y[b];C.setSize&&C.setSize(M,w)}},this.setEffects=function(M){y=M,T=y.length>0&&y[0].isRenderPass===!0;const w=o.width,b=o.height;y.length>0&&a===null&&(a=new si(w,b,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new si(w,b,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){const _=y[C];_.setSize&&_.setSize(w,b)}},this.begin=function(M,w){if(x||M.toneMapping===Pi&&y.length===0)return!1;if(m=w,w!==null){const b=w.width,C=w.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return T===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=Pi,!0},this.hasRenderPass=function(){return T},this.end=function(M,w){M.toneMapping=p,x=!0;let b=o,C=a;for(let _=0;_<y.length;_++){const E=y[_];E.enabled!==!1&&(E.render(M,C,b,w),E.needsSwap!==!1&&(b=C,C=C===a?l:a))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},he.getTransfer(f)===we&&(u.defines.SRGB_TRANSFER="");const _=ty[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(m),M.render(d,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Xp=new Mn,_u=new Ao(1,1),$p=new Sp,Yp=new kg,qp=new Rp,$f=[],Yf=[],qf=new Float32Array(16),Kf=new Float32Array(9),Jf=new Float32Array(4);function Gr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pl(n,t){let e=Yf[t];e===void 0&&(e=new Int32Array(t),Yf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ny(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function oy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Jf.set(i),n.uniformMatrix2fv(this.addr,!1,Jf),en(e,i)}}function ay(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Kf.set(i),n.uniformMatrix3fv(this.addr,!1,Kf),en(e,i)}}function ly(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;qf.set(i),n.uniformMatrix4fv(this.addr,!1,qf),en(e,i)}}function cy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function fy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function dy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function my(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function _y(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_u.compareFunction=e.isReversedDepthBuffer()?Xu:Wu,r=_u):r=Xp,e.setTexture2D(t||r,s)}function vy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yp,s)}function xy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qp,s)}function My(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$p,s)}function yy(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return fy;case 5125:return dy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return My}}function Sy(n,t){n.uniform1fv(this.addr,t)}function by(n,t){const e=Gr(t,this.size,2);n.uniform2fv(this.addr,e)}function wy(n,t){const e=Gr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ey(n,t){const e=Gr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ty(n,t){const e=Gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ay(n,t){const e=Gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cy(n,t){const e=Gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ry(n,t){n.uniform1iv(this.addr,t)}function Py(n,t){n.uniform2iv(this.addr,t)}function Ly(n,t){n.uniform3iv(this.addr,t)}function Iy(n,t){n.uniform4iv(this.addr,t)}function Dy(n,t){n.uniform1uiv(this.addr,t)}function Ny(n,t){n.uniform2uiv(this.addr,t)}function Uy(n,t){n.uniform3uiv(this.addr,t)}function Fy(n,t){n.uniform4uiv(this.addr,t)}function Oy(n,t,e){const i=this.cache,s=t.length,r=pl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=_u:o=Xp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function By(n,t,e){const i=this.cache,s=t.length,r=pl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yp,r[o])}function ky(n,t,e){const i=this.cache,s=t.length,r=pl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qp,r[o])}function zy(n,t,e){const i=this.cache,s=t.length,r=pl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$p,r[o])}function Gy(n){switch(n){case 5126:return Sy;case 35664:return by;case 35665:return wy;case 35666:return Ey;case 35674:return Ty;case 35675:return Ay;case 35676:return Cy;case 5124:case 35670:return Ry;case 35667:case 35671:return Py;case 35668:case 35672:return Ly;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Ny;case 36295:return Uy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return zy}}class Hy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yy(e.type)}}class Vy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gy(e.type)}}class Wy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function Zf(n,t){n.seq.push(t),n.map[t.id]=t}function Xy(n,t,e){const i=n.name,s=i.length;for(cc.lastIndex=0;;){const r=cc.exec(i),o=cc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zf(e,c===void 0?new Hy(a,n,t):new Vy(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Wy(a),Zf(e,d)),e=d}}}class Na{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Xy(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Qf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $y=37297;let Yy=0;function qy(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const jf=new Jt;function Ky(n){he._getMatrix(jf,he.workingColorSpace,n);const t=`mat3( ${jf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case $a:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function td(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qy(n.getShaderSource(t),a)}else return r}function Jy(n,t){const e=Ky(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Zy={[ap]:"Linear",[lp]:"Reinhard",[cp]:"Cineon",[up]:"ACESFilmic",[fp]:"AgX",[Fu]:"Neutral",[hp]:"Custom"};function Qy(n,t){const e=Zy[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sa=new P;function jy(){he.getLuminanceCoefficients(Sa);const n=Sa.x.toFixed(4),t=Sa.y.toFixed(4),e=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function eS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ao(n){return n!==""}function ed(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iS=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(n){return n.replace(iS,rS)}const sS=new Map;function rS(n,t){let e=ie[t];if(e===void 0){const i=sS.get(t);if(i!==void 0)e=ie[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vu(e)}const oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(n){return n.replace(oS,aS)}function aS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const lS={[uo]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function cS(n){return lS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uS={[Xs]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[ul]:"ENVMAP_TYPE_CUBE_UV"};function hS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const fS={[Nr]:"ENVMAP_MODE_REFRACTION"};function dS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pS={[op]:"ENVMAP_BLENDING_MULTIPLY",[eg]:"ENVMAP_BLENDING_MIX",[ng]:"ENVMAP_BLENDING_ADD"};function mS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pS[n.combine]||"ENVMAP_BLENDING_NONE"}function gS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _S(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cS(e),c=hS(e),u=dS(e),d=mS(e),h=gS(e),f=tS(e),g=eS(r),x=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ao).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(p=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?ie.tonemapping_pars_fragment:"",e.toneMapping!==Pi?Qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Jy("linearToOutputTexel",e.outputColorSpace),jy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=vu(o),o=ed(o,e),o=nd(o,e),a=vu(a),a=ed(a,e),a=nd(a,e),o=id(o),a=id(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=y+p+o,M=y+m+a,w=Qf(s,s.VERTEX_SHADER,T),b=Qf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(I){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(b)||"",z=B.trim(),q=G.trim(),Y=D.trim();let ot=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,b);else{const et=td(s,w,"vertex"),X=td(s,b,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+et+`
`+X)}else z!==""?$t("WebGLProgram: Program Info Log:",z):(q===""||Y==="")&&(K=!1);K&&(I.diagnostics={runnable:ot,programLog:z,vertexShader:{log:q,prefix:p},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(w),s.deleteShader(b),_=new Na(s,x),E=nS(s,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,$y)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}let vS=0;class xS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new MS(t),e.set(t,i)),i}}class MS{constructor(t){this.id=vS++,this.code=t,this.usedTimes=0}}function yS(n){return n===$s||n===Va||n===Wa}function SS(n,t,e,i,s,r){const o=new qu,a=new xS,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,R,I,B,G){const D=I.fog,z=B.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ot=t.get(_.envMap||q,Y),K=ot&&ot.mapping===ul?ot.image.height:null,et=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&$t("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const X=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=X!==void 0?X.length:0;let Mt=0;z.morphAttributes.position!==void 0&&(Mt=1),z.morphAttributes.normal!==void 0&&(Mt=2),z.morphAttributes.color!==void 0&&(Mt=3);let ee,se,de,Q;if(et){const Re=Ti[et];ee=Re.vertexShader,se=Re.fragmentShader}else{ee=_.vertexShader,se=_.fragmentShader;const Re=a.getVertexShaderStage(_),Me=a.getFragmentShaderStage(_);a.update(_,Re,Me),de=Re.id,Q=Me.id}const it=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,At=B.isBatchedMesh===!0,Wt=!!_.map,be=!!_.matcap,st=!!ot,at=!!_.aoMap,ut=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,Gt=!!_.displacementMap,kt=!!_.emissiveMap,Xt=!!_.metalnessMap,Kt=!!_.roughnessMap,L=_.anisotropy>0,xe=_.clearcoat>0,oe=_.dispersion>0,A=_.retroreflectivity>0,v=_.iridescence>0,k=_.sheen>0,W=_.transmission>0,J=L&&!!_.anisotropyMap,dt=xe&&!!_.clearcoatMap,pt=xe&&!!_.clearcoatNormalMap,Z=xe&&!!_.clearcoatRoughnessMap,nt=v&&!!_.iridescenceMap,gt=v&&!!_.iridescenceThicknessMap,Ft=k&&!!_.sheenColorMap,yt=k&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Ot=!!_.specularColorMap,Ht=!!_.specularIntensityMap,jt=W&&!!_.transmissionMap,U=W&&!!_.thicknessMap,vt=!!_.gradientMap,j=!!_.alphaMap,xt=_.alphaTest>0,Tt=!!_.alphaHash,rt=!!_.extensions;let Bt=Pi;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Bt=n.toneMapping);const Nt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:ee,fragmentShader:se,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:At,batchingColor:At&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Wt,matcap:be,envMap:st,envMapMode:st&&ot.mapping,envMapCubeUVHeight:K,aoMap:at,lightMap:ut,bumpMap:ht,normalMap:mt,displacementMap:Gt,emissiveMap:kt,normalMapObjectSpace:mt&&_.normalMapType===rg,normalMapTangentSpace:mt&&_.normalMapType===fu,packedNormalMap:mt&&_.normalMapType===fu&&yS(_.normalMap.format),metalnessMap:Xt,roughnessMap:Kt,anisotropy:L,anisotropyMap:J,clearcoat:xe,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Z,dispersion:oe,retroreflection:A,iridescence:v,iridescenceMap:nt,iridescenceThicknessMap:gt,sheen:k,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:_t,specularColorMap:Ot,specularIntensityMap:Ht,transmission:W,transmissionMap:jt,thicknessMap:U,gradientMap:vt,opaque:_.transparent===!1&&_.blending===ho&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:xt,alphaHash:Tt,combine:_.combine,mapUv:Wt&&g(_.map.channel),aoMapUv:at&&g(_.aoMap.channel),lightMapUv:ut&&g(_.lightMap.channel),bumpMapUv:ht&&g(_.bumpMap.channel),normalMapUv:mt&&g(_.normalMap.channel),displacementMapUv:Gt&&g(_.displacementMap.channel),emissiveMapUv:kt&&g(_.emissiveMap.channel),metalnessMapUv:Xt&&g(_.metalnessMap.channel),roughnessMapUv:Kt&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:dt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(_.sheenRoughnessMap.channel),specularMapUv:_t&&g(_.specularMap.channel),specularColorMapUv:Ot&&g(_.specularColorMap.channel),specularIntensityMapUv:Ht&&g(_.specularIntensityMap.channel),transmissionMapUv:jt&&g(_.transmissionMap.channel),thicknessMapUv:U&&g(_.thicknessMap.channel),alphaMapUv:j&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||L),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Wt||j),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Wt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hi,flipSided:_.side===Nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(E,_),y(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function T(_){const E=f[_.type];let R;if(E){const I=Ti[E];R=z_.clone(I.uniforms)}else R=_.uniforms;return R}function M(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new _S(n,E,_,s),c.push(R),u.set(E,R)),R}function w(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:C}}function bS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function wS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function rd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function od(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,x,p,m){let y=n[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},n[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=p,y.group=m),t++,y}function l(h,f,g,x,p,m,y){y.reversedDepth===!0&&(p=-p);const T=a(h,f,g,x,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(h,f,g,x,p,m){const y=a(h,f,g,x,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||wS),i.length>1&&i.sort(f||rd),s.length>1&&s.sort(f||rd)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function ES(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new od,n.set(i,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function TS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function AS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let CS=0;function RS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function PS(n){const t=new TS,e=AS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new fe,o=new fe;function a(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,T=0,M=0,w=0,b=0,C=0,_=0,E=0,R=0;c.sort(RS);for(let B=0,G=c.length;B<G;B++){const D=c[B],z=D.color,q=D.intensity,Y=D.distance;let ot=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$s?ot=D.shadow.map.texture:ot=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=z.r*q,d+=z.g*q,h+=z.b*q;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],q);R++}else if(D.isSunLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,X=e.get(D);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[g]=X,i.sunShadowMap[g]=ot;const lt=et.getViewportCount();for(let Mt=0;Mt<lt;Mt++)i.sunShadowMatrix[x+Mt]=et.getMatrix(Mt),i.sunShadowCascade[x+Mt]=et._cascadeData[Mt];x+=lt,g++}i.sun[f]=K,f++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,X=e.get(D);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ot,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=K,p++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(z).multiplyScalar(q),K.distance=Y,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[y]=K;const et=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,et.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[y]=et.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=ot,C++}y++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(z).multiplyScalar(q),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=K,T++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const et=D.shadow,X=e.get(D);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=ot,i.pointShadowMatrix[m]=D.shadow.matrix,b++}i.point[m]=K,m++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(q),K.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[M]=K,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const I=i.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==T||I.hemiLength!==M||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==C||I.numSpotMaps!==_||I.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=y,I.rectAreaLength=T,I.hemiLength=M,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=C,I.numSpotMaps=_,I.numLightProbes=R,i.version=CS++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,p=0;const m=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const M=c[y];if(M.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),d++}else if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:i}}function ad(n){const t=new PS(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function LS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ad(n),t.set(s,[a])):r>=o.length?(a=new ad(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const IS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DS=`uniform sampler2D shadow_pass;
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
}`,NS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],US=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ld=new fe,no=new P,uc=new P;function FS(n,t,e){let i=new Zu;const s=new ct,r=new ct,o=new Fe,a=new W_,l=new X_,c={},u=e.maxTextureSize,d={[Ws]:Nn,[Nn]:Ws,[hi]:hi},h=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:IS,fragmentShader:DS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Se(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let m=this.type;this.render=function(b,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===F0&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ji),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=m!==this.type;G&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=b.length;D<z;D++){const q=b[D],Y=q.shadow;if(Y===void 0){$t("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ot=Y.getFrameExtents();s.multiply(ot),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,Y.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ro){if(q.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new si(s.x,s.y,{format:$s,type:Ui,minFilter:xn,magFilter:xn,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Ao(s.x,s.y,pi),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=ns,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=cn,Y.map.depthTexture.magFilter=cn}else q.isPointLight?(Y.map=new Wp(s.x),Y.map.depthTexture=new s_(s.x,Ni)):(Y.map=new si(s.x,s.y),Y.map.depthTexture=new Ao(s.x,s.y,Ni)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=ns,this.type===uo?(Y.map.depthTexture.compareFunction=K?Xu:Wu,Y.map.depthTexture.minFilter=xn,Y.map.depthTexture.magFilter=xn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=cn,Y.map.depthTexture.magFilter=cn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const et=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,_);for(let X=0;X<et;X++){const lt=Y.getCamera(X);if(q.isPointLight){const Mt=Y.camera,ee=Y.matrix,se=q.distance||Mt.far;se!==Mt.far&&(Mt.far=se,Mt.updateProjectionMatrix()),no.setFromMatrixPosition(q.matrixWorld),Mt.position.copy(no),uc.copy(Mt.position),uc.add(NS[X]),Mt.up.copy(US[X]),Mt.lookAt(uc),Mt.updateMatrixWorld(),ee.makeTranslation(-no.x,-no.y,-no.z),ld.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ld,Mt.coordinateSystem,Mt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,X),n.clear();else{X===0&&(n.setRenderTarget(Y.map),n.clear());const Mt=Y.getViewport(X);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),B.viewport(o)}i=Y.getFrustum(X),M(C,_,lt,q,this.type)}Y.isPointLightShadow!==!0&&this.type===ro&&y(Y,_),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,R,I)};function y(b,C){const _=t.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new si(s.x,s.y,{format:$s,type:Ui}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,_,f,x,null)}function T(b,C,_,E){let R=null;const I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=R.uuid,G=C.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let z=D[G];z===void 0&&(z=R.clone(),D[G]=z,C.addEventListener("dispose",w)),R=z}if(R.visible=C.visible,R.wireframe=C.wireframe,E===ro?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=n.properties.get(R);B.light=_}return R}function M(b,C,_,E,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ro)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const G=t.update(b),D=b.material;if(Array.isArray(D)){const z=G.groups;for(let q=0,Y=z.length;q<Y;q++){const ot=z[q],K=D[ot.materialIndex];if(K&&K.visible){const et=T(b,K,E,R);b.onBeforeShadow(n,b,C,_,G,et,ot),n.renderBufferDirect(_,null,G,et,b,ot),b.onAfterShadow(n,b,C,_,G,et,ot)}}}else if(D.visible){const z=T(b,D,E,R);b.onBeforeShadow(n,b,C,_,G,z,null),n.renderBufferDirect(_,null,G,z,b,null),b.onAfterShadow(n,b,C,_,G,z,null)}}const B=b.children;for(let G=0,D=B.length;G<D;G++)M(B[G],C,_,E,R)}function w(b){b.target.removeEventListener("dispose",w);for(const _ in c){const E=c[_],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function OS(n,t){function e(){let U=!1;const vt=new Fe;let j=null;const xt=new Fe(0,0,0,0);return{setMask:function(Tt){j!==Tt&&!U&&(n.colorMask(Tt,Tt,Tt,Tt),j=Tt)},setLocked:function(Tt){U=Tt},setClear:function(Tt,rt,Bt,Nt,Re){Re===!0&&(Tt*=Nt,rt*=Nt,Bt*=Nt),vt.set(Tt,rt,Bt,Nt),xt.equals(vt)===!1&&(n.clearColor(Tt,rt,Bt,Nt),xt.copy(vt))},reset:function(){U=!1,j=null,xt.set(-1,0,0,0)}}}function i(){let U=!1,vt=!1,j=null,xt=null,Tt=null;return{setReversed:function(rt){if(vt!==rt){const Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),vt=rt;const Nt=Tt;Tt=null,this.setClear(Nt)}},getReversed:function(){return vt},setTest:function(rt){rt?it(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(rt){j!==rt&&!U&&(n.depthMask(rt),j=rt)},setFunc:function(rt){if(vt&&(rt=gg[rt]),xt!==rt){switch(rt){case Cc:n.depthFunc(n.NEVER);break;case Rc:n.depthFunc(n.ALWAYS);break;case Pc:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case Lc:n.depthFunc(n.EQUAL);break;case Ic:n.depthFunc(n.GEQUAL);break;case Dc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=rt}},setLocked:function(rt){U=rt},setClear:function(rt){Tt!==rt&&(Tt=rt,vt&&(rt=1-rt),n.clearDepth(rt))},reset:function(){U=!1,j=null,xt=null,Tt=null,vt=!1}}}function s(){let U=!1,vt=null,j=null,xt=null,Tt=null,rt=null,Bt=null,Nt=null,Re=null;return{setTest:function(Me){U||(Me?it(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(Me){vt!==Me&&!U&&(n.stencilMask(Me),vt=Me)},setFunc:function(Me,oi,Si){(j!==Me||xt!==oi||Tt!==Si)&&(n.stencilFunc(Me,oi,Si),j=Me,xt=oi,Tt=Si)},setOp:function(Me,oi,Si){(rt!==Me||Bt!==oi||Nt!==Si)&&(n.stencilOp(Me,oi,Si),rt=Me,Bt=oi,Nt=Si)},setLocked:function(Me){U=Me},setClear:function(Me){Re!==Me&&(n.clearStencil(Me),Re=Me)},reset:function(){U=!1,vt=null,j=null,xt=null,Tt=null,rt=null,Bt=null,Nt=null,Re=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,T=null,M=null,w=null,b=null,C=null,_=new Lt(0,0,0),E=0,R=!1,I=null,B=null,G=null,D=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ot=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=ot>=1):K.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=ot>=2);let et=null,X={};const lt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),ee=new Fe().fromArray(lt),se=new Fe().fromArray(Mt);function de(U,vt,j,xt){const Tt=new Uint8Array(4),rt=n.createTexture();n.bindTexture(U,rt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<j;Bt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(vt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return rt}const Q={};Q[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(So),ht(!1),mt(Zh),it(n.CULL_FACE),at(ji);function it(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function bt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Vt(U,vt){return h[U]!==vt?(n.bindFramebuffer(U,vt),h[U]=vt,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function At(U,vt){let j=g,xt=!1;if(U){j=f.get(vt),j===void 0&&(j=[],f.set(vt,j));const Tt=U.textures;if(j.length!==Tt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,Bt=Tt.length;rt<Bt;rt++)j[rt]=n.COLOR_ATTACHMENT0+rt;j.length=Tt.length,xt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,xt=!0);xt&&n.drawBuffers(j)}function Wt(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const be={[Sr]:n.FUNC_ADD,[B0]:n.FUNC_SUBTRACT,[k0]:n.FUNC_REVERSE_SUBTRACT};be[z0]=n.MIN,be[G0]=n.MAX;const st={[H0]:n.ZERO,[V0]:n.ONE,[W0]:n.SRC_COLOR,[sp]:n.SRC_ALPHA,[J0]:n.SRC_ALPHA_SATURATE,[q0]:n.DST_COLOR,[$0]:n.DST_ALPHA,[X0]:n.ONE_MINUS_SRC_COLOR,[rp]:n.ONE_MINUS_SRC_ALPHA,[K0]:n.ONE_MINUS_DST_COLOR,[Y0]:n.ONE_MINUS_DST_ALPHA,[Z0]:n.CONSTANT_COLOR,[Q0]:n.ONE_MINUS_CONSTANT_COLOR,[j0]:n.CONSTANT_ALPHA,[tg]:n.ONE_MINUS_CONSTANT_ALPHA};function at(U,vt,j,xt,Tt,rt,Bt,Nt,Re,Me){if(U===ji){p===!0&&(bt(n.BLEND),p=!1);return}if(p===!1&&(it(n.BLEND),p=!0),U!==O0){if(U!==m||Me!==R){if((y!==Sr||w!==Sr)&&(n.blendEquation(n.FUNC_ADD),y=Sr,w=Sr),Me)switch(U){case ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFunc(n.ONE,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",U);break}else switch(U){case ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qh:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",U);break}T=null,M=null,b=null,C=null,_.set(0,0,0),E=0,m=U,R=Me}return}Tt=Tt||vt,rt=rt||j,Bt=Bt||xt,(vt!==y||Tt!==w)&&(n.blendEquationSeparate(be[vt],be[Tt]),y=vt,w=Tt),(j!==T||xt!==M||rt!==b||Bt!==C)&&(n.blendFuncSeparate(st[j],st[xt],st[rt],st[Bt]),T=j,M=xt,b=rt,C=Bt),(Nt.equals(_)===!1||Re!==E)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Re),_.copy(Nt),E=Re),m=U,R=!1}function ut(U,vt){U.side===hi?bt(n.CULL_FACE):it(n.CULL_FACE);let j=U.side===Nn;vt&&(j=!j),ht(j),U.blending===ho&&U.transparent===!1?at(ji):at(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const xt=U.stencilWrite;a.setTest(xt),xt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(U){I!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),I=U)}function mt(U){U!==N0?(it(n.CULL_FACE),U!==B&&(U===Zh?n.cullFace(n.BACK):U===U0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),B=U}function Gt(U){U!==G&&(Y&&n.lineWidth(U),G=U)}function kt(U,vt,j){U?(it(n.POLYGON_OFFSET_FILL),(D!==vt||z!==j)&&(D=vt,z=j,o.getReversed()&&(vt=-vt),n.polygonOffset(vt,j))):bt(n.POLYGON_OFFSET_FILL)}function Xt(U){U?it(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function Kt(U){U===void 0&&(U=n.TEXTURE0+q-1),et!==U&&(n.activeTexture(U),et=U)}function L(U,vt,j){j===void 0&&(et===null?j=n.TEXTURE0+q-1:j=et);let xt=X[j];xt===void 0&&(xt={type:void 0,texture:void 0},X[j]=xt),(xt.type!==U||xt.texture!==vt)&&(et!==j&&(n.activeTexture(j),et=j),n.bindTexture(U,vt||Q[U]),xt.type=U,xt.texture=vt)}function xe(){const U=X[et];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function v(){try{n.texSubImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function k(){try{n.texSubImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function dt(){try{n.texStorage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function pt(){try{n.texStorage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function nt(){try{n.texImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function gt(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Ft(U,vt){d[U]!==vt&&(n.pixelStorei(U,vt),d[U]=vt)}function yt(U){ee.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function _t(U){se.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function Ot(U,vt){let j=c.get(vt);j===void 0&&(j=new WeakMap,c.set(vt,j));let xt=j.get(U);xt===void 0&&(xt=n.getUniformBlockIndex(vt,U.name),j.set(U,xt))}function Ht(U,vt){const xt=c.get(vt).get(U);l.get(vt)!==xt&&(n.uniformBlockBinding(vt,xt,U.__bindingPointIndex),l.set(vt,xt))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},et=null,X={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,T=null,M=null,w=null,b=null,C=null,_=new Lt(0,0,0),E=0,R=!1,I=null,B=null,G=null,D=null,z=null,ee.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:bt,bindFramebuffer:Vt,drawBuffers:At,useProgram:Wt,setBlending:at,setMaterial:ut,setFlipSided:ht,setCullFace:mt,setLineWidth:Gt,setPolygonOffset:kt,setScissorTest:Xt,activeTexture:Kt,bindTexture:L,unbindTexture:xe,compressedTexImage2D:oe,compressedTexImage3D:A,texImage2D:Z,texImage3D:nt,pixelStorei:Ft,getParameter:gt,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:dt,texStorage3D:pt,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:yt,viewport:_t,reset:jt}}function BS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,v){return g?new OffscreenCanvas(A,v):Ya("canvas")}function p(A,v,k){let W=1;const J=oe(A);if((J.width>k||J.height>k)&&(W=k/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const dt=Math.floor(W*J.width),pt=Math.floor(W*J.height);h===void 0&&(h=x(dt,pt));const Z=v?x(dt,pt):h;return Z.width=dt,Z.height=pt,Z.getContext("2d").drawImage(A,0,0,dt,pt),$t("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+dt+"x"+pt+")."),Z}else return"data"in A&&$t("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,v,k,W,J,dt=!1){if(A!==null){if(n[A]!==void 0)return n[A];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pt;W&&(pt=t.get("EXT_texture_norm16"),pt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8),k===n.UNSIGNED_SHORT&&pt&&(Z=pt.R16_EXT),k===n.SHORT&&pt&&(Z=pt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),v===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8),k===n.UNSIGNED_SHORT&&pt&&(Z=pt.RG16_EXT),k===n.SHORT&&pt&&(Z=pt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_SHORT&&pt&&(Z=pt.RGB16_EXT),k===n.SHORT&&pt&&(Z=pt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),v===n.RGBA){const nt=dt?$a:he.getTransfer(J);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=nt===we?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&pt&&(Z=pt.RGBA16_EXT),k===n.SHORT&&pt&&(Z=pt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function w(A,v){let k;return A?v===null||v===Ni||v===wo?k=n.DEPTH24_STENCIL8:v===pi?k=n.DEPTH32F_STENCIL8:v===bo&&(k=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===wo?k=n.DEPTH_COMPONENT24:v===pi?k=n.DEPTH_COMPONENT32F:v===bo&&(k=n.DEPTH_COMPONENT16),k}function b(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==xn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function _(A){const v=A.target;v.removeEventListener("dispose",_),I(v)}function E(A){const v=i.get(A);if(v.__webglInit===void 0)return;const k=A.source,W=f.get(k);if(W){const J=W[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(W).length===0&&f.delete(k)}i.remove(A)}function R(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const k=A.source,W=f.get(k);delete W[v.__cacheKey],o.memory.textures--}function I(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let J=0;J<v.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[W][J]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=A.textures;for(let W=0,J=k.length;W<J;W++){const dt=i.get(k[W]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(k[W])}i.remove(A)}let B=0;function G(){B=0}function D(){return B}function z(A){B=A}function q(){const A=B;return A>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function Y(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ot(A,v){const k=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const W=A.image;if(W===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(k,A,v);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function K(A,v){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){bt(k,A,v);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function et(A,v){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){bt(k,A,v);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function X(A,v){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Vt(k,A,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const lt={[Ha]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[Uc]:n.MIRRORED_REPEAT},Mt={[cn]:n.NEAREST,[ig]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Ll]:n.LINEAR_MIPMAP_NEAREST,[Us]:n.LINEAR_MIPMAP_LINEAR},ee={[ag]:n.NEVER,[fg]:n.ALWAYS,[lg]:n.LESS,[Wu]:n.LEQUAL,[cg]:n.EQUAL,[Xu]:n.GEQUAL,[ug]:n.GREATER,[hg]:n.NOTEQUAL};function se(A,v){if(v.type===pi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===xn||v.magFilter===Ll||v.magFilter===qo||v.magFilter===Us||v.minFilter===xn||v.minFilter===Ll||v.minFilter===qo||v.minFilter===Us)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,lt[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,lt[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,lt[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Mt[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Mt[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ee[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==qo&&v.minFilter!==Us||v.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function de(A,v){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const W=v.source;let J=f.get(W);J===void 0&&(J={},f.set(W,J));const dt=Y(v);if(dt!==A.__cacheKey){J[dt]===void 0&&(J[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[dt].usedTimes++;const pt=J[A.__cacheKey];pt!==void 0&&(J[A.__cacheKey].usedTimes--,pt.usedTimes===0&&R(v)),A.__cacheKey=dt,A.__webglTexture=J[dt].texture}return k}function Q(A,v,k){return Math.floor(Math.floor(A/k)/v)}function it(A,v,k,W){const dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,W,v.data);else{dt.sort((Ft,yt)=>Ft.start-yt.start);let pt=0;for(let Ft=1;Ft<dt.length;Ft++){const yt=dt[pt],_t=dt[Ft],Ot=yt.start+yt.count,Ht=Q(_t.start,v.width,4),jt=Q(yt.start,v.width,4);_t.start<=Ot+1&&Ht===jt&&Q(_t.start+_t.count-1,v.width,4)===Ht?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++pt,dt[pt]=_t)}dt.length=pt+1;const Z=e.getParameter(n.UNPACK_ROW_LENGTH),nt=e.getParameter(n.UNPACK_SKIP_PIXELS),gt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Ft=0,yt=dt.length;Ft<yt;Ft++){const _t=dt[Ft],Ot=Math.floor(_t.start/4),Ht=Math.ceil(_t.count/4),jt=Ot%v.width,U=Math.floor(Ot/v.width),vt=Ht,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,jt,U,vt,j,k,W,v.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,gt)}}function bt(A,v,k){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const J=de(A,v),dt=v.source;e.bindTexture(W,A.__webglTexture,n.TEXTURE0+k);const pt=i.get(dt);if(dt.version!==pt.__version||J===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=he.getPrimaries(he.workingColorSpace),xt=v.colorSpace===ms?null:he.getPrimaries(v.colorSpace),Tt=v.colorSpace===ms||j===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=p(v.image,!1,s.maxTextureSize);nt=xe(v,nt);const gt=r.convert(v.format,v.colorSpace),Ft=r.convert(v.type);let yt=M(v.internalFormat,gt,Ft,v.normalized,v.colorSpace,v.isVideoTexture);se(W,v);let _t;const Ot=v.mipmaps,Ht=v.isVideoTexture!==!0,jt=pt.__version===void 0||J===!0,U=dt.dataReady,vt=b(v,nt);if(v.isDepthTexture)yt=w(v.format===Fs,v.type),jt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,yt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,yt,nt.width,nt.height,0,gt,Ft,null));else if(v.isDataTexture)if(Ot.length>0){Ht&&jt&&e.texStorage2D(n.TEXTURE_2D,vt,yt,Ot[0].width,Ot[0].height);for(let j=0,xt=Ot.length;j<xt;j++)_t=Ot[j],Ht?U&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,Ft,_t.data):e.texImage2D(n.TEXTURE_2D,j,yt,_t.width,_t.height,0,gt,Ft,_t.data);v.generateMipmaps=!1}else Ht?(jt&&e.texStorage2D(n.TEXTURE_2D,vt,yt,nt.width,nt.height),U&&it(v,nt,gt,Ft)):e.texImage2D(n.TEXTURE_2D,0,yt,nt.width,nt.height,0,gt,Ft,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,yt,Ot[0].width,Ot[0].height,nt.depth);for(let j=0,xt=Ot.length;j<xt;j++)if(_t=Ot[j],v.format!==mi)if(gt!==null)if(Ht){if(U)if(v.layerUpdates.size>0){const Tt=zf(_t.width,_t.height,v.format,v.type);for(const rt of v.layerUpdates){const Bt=_t.data.subarray(rt*Tt/_t.data.BYTES_PER_ELEMENT,(rt+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,rt,_t.width,_t.height,1,gt,Bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,yt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,nt.depth,gt,Ft,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,yt,_t.width,_t.height,nt.depth,0,gt,Ft,_t.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ht&&jt&&e.texStorage2D(n.TEXTURE_2D,vt,yt,Ot[0].width,Ot[0].height);for(let j=0,xt=Ot.length;j<xt;j++)_t=Ot[j],v.format!==mi?gt!==null?Ht?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,j,yt,_t.width,_t.height,0,_t.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?U&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,Ft,_t.data):e.texImage2D(n.TEXTURE_2D,j,yt,_t.width,_t.height,0,gt,Ft,_t.data)}else if(v.isDataArrayTexture)if(Ht){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,yt,nt.width,nt.height,nt.depth),U)if(v.layerUpdates.size>0){const j=zf(nt.width,nt.height,v.format,v.type);for(const xt of v.layerUpdates){const Tt=nt.data.subarray(xt*j/nt.data.BYTES_PER_ELEMENT,(xt+1)*j/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,nt.width,nt.height,1,gt,Ft,Tt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ft,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,nt.width,nt.height,nt.depth,0,gt,Ft,nt.data);else if(v.isData3DTexture)Ht?(jt&&e.texStorage3D(n.TEXTURE_3D,vt,yt,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ft,nt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,nt.width,nt.height,nt.depth,0,gt,Ft,nt.data);else if(v.isFramebufferTexture){if(jt)if(Ht)e.texStorage2D(n.TEXTURE_2D,vt,yt,nt.width,nt.height);else{let j=nt.width,xt=nt.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,yt,j,xt,0,gt,Ft,null),j>>=1,xt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),nt.parentNode!==j){j.appendChild(nt),d.add(v),j.onpaint=xt=>{const Tt=xt.changedElements;for(const rt of d)Tt.includes(rt.image)&&(rt.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,nt);else{const Tt=n.RGBA,rt=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Tt,rt,Bt,nt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&jt){const j=oe(Ot[0]);e.texStorage2D(n.TEXTURE_2D,vt,yt,j.width,j.height)}for(let j=0,xt=Ot.length;j<xt;j++)_t=Ot[j],Ht?U&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,gt,Ft,_t):e.texImage2D(n.TEXTURE_2D,j,yt,gt,Ft,_t);v.generateMipmaps=!1}else if(Ht){if(jt){const j=oe(nt);e.texStorage2D(n.TEXTURE_2D,vt,yt,j.width,j.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ft,nt)}else e.texImage2D(n.TEXTURE_2D,0,yt,gt,Ft,nt);m(v)&&y(W),pt.__version=dt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Vt(A,v,k){if(v.image.length!==6)return;const W=de(A,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const dt=i.get(J);if(J.version!==dt.__version||W===!0){e.activeTexture(n.TEXTURE0+k);const pt=he.getPrimaries(he.workingColorSpace),Z=v.colorSpace===ms?null:he.getPrimaries(v.colorSpace),nt=v.colorSpace===ms||pt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ft=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!gt&&!Ft?yt[rt]=p(v.image[rt],!0,s.maxCubemapSize):yt[rt]=Ft?v.image[rt].image:v.image[rt],yt[rt]=xe(v,yt[rt]);const _t=yt[0],Ot=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type),jt=M(v.internalFormat,Ot,Ht,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,vt=dt.__version===void 0||W===!0,j=J.dataReady;let xt=b(v,_t);se(n.TEXTURE_CUBE_MAP,v);let Tt;if(gt){U&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,jt,_t.width,_t.height);for(let rt=0;rt<6;rt++){Tt=yt[rt].mipmaps;for(let Bt=0;Bt<Tt.length;Bt++){const Nt=Tt[Bt];v.format!==mi?Ot!==null?U?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Nt.width,Nt.height,Ot,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,jt,Nt.width,Nt.height,0,Nt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Nt.width,Nt.height,Ot,Ht,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,jt,Nt.width,Nt.height,0,Ot,Ht,Nt.data)}}}else{if(Tt=v.mipmaps,U&&vt){Tt.length>0&&xt++;const rt=oe(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ft){U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,Ot,Ht,yt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,yt[rt].width,yt[rt].height,0,Ot,Ht,yt[rt].data);for(let Bt=0;Bt<Tt.length;Bt++){const Re=Tt[Bt].image[rt].image;U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Re.width,Re.height,Ot,Ht,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,jt,Re.width,Re.height,0,Ot,Ht,Re.data)}}else{U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,Ht,yt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,Ot,Ht,yt[rt]);for(let Bt=0;Bt<Tt.length;Bt++){const Nt=Tt[Bt];U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Ot,Ht,Nt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,jt,Ot,Ht,Nt.image[rt])}}}m(v)&&y(n.TEXTURE_CUBE_MAP),dt.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function At(A,v,k,W,J,dt){const pt=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),nt=M(k.internalFormat,pt,Z,k.normalized,k.colorSpace),gt=i.get(v),Ft=i.get(k);if(Ft.__renderTarget=v,!gt.__hasExternalTextures){const yt=Math.max(1,v.width>>dt),_t=Math.max(1,v.height>>dt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,dt,nt,yt,_t,v.depth,0,pt,Z,null):e.texImage2D(J,dt,nt,yt,_t,0,pt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Kt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,Ft.__webglTexture,0,Xt(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,Ft.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(A,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const W=v.depthTexture,J=W&&W.isDepthTexture?W.type:null,dt=w(v.stencilBuffer,J),pt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Kt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt(v),dt,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt(v),dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,dt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,A)}else{const W=v.textures;for(let J=0;J<W.length;J++){const dt=W[J],pt=r.convert(dt.format,dt.colorSpace),Z=r.convert(dt.type),nt=M(dt.internalFormat,pt,Z,dt.normalized,dt.colorSpace);Kt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt(v),nt,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt(v),nt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,nt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(A,v,k){const W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),se(n.TEXTURE_CUBE_MAP,v.depthTexture);const gt=r.convert(v.depthTexture.format),Ft=r.convert(v.depthTexture.type);let yt;v.depthTexture.format===ns?yt=n.DEPTH_COMPONENT24:v.depthTexture.format===Fs&&(yt=n.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,v.width,v.height,0,gt,Ft,null)}}else ot(v.depthTexture,0);const dt=J.__webglTexture,pt=Xt(v),Z=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,nt=v.depthTexture.format===Fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ns)Kt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,Z,dt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,nt,Z,dt,0);else if(v.depthTexture.format===Fs)Kt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,Z,dt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,nt,Z,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(A){const v=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=W}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)be(v.__webglFramebuffer[W],A,W);else{const W=A.texture.mipmaps;W&&W.length>0?be(v.__webglFramebuffer[0],A,0):be(v.__webglFramebuffer,A,0)}else if(k){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),Wt(v.__webglDepthbuffer[W],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,dt)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Wt(v.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(A,v,k){const W=i.get(A);v!==void 0&&At(W.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&st(A)}function ut(A){const v=A.texture,k=i.get(A),W=i.get(v);A.addEventListener("dispose",_);const J=A.textures,dt=A.isWebGLCubeRenderTarget===!0,pt=J.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),dt){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let nt=0;nt<v.mipmaps.length;nt++)k.__webglFramebuffer[Z][nt]=n.createFramebuffer()}else k.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[Z]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pt)for(let Z=0,nt=J.length;Z<nt;Z++){const gt=i.get(J[Z]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Kt(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){const nt=J[Z];k.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const gt=r.convert(nt.format,nt.colorSpace),Ft=r.convert(nt.type),yt=M(nt.internalFormat,gt,Ft,nt.normalized,nt.colorSpace,A.isXRRenderTarget===!0),_t=Xt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,yt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),se(n.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)At(k.__webglFramebuffer[Z][nt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,nt);else At(k.__webglFramebuffer[Z],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(v)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let Z=0,nt=J.length;Z<nt;Z++){const gt=J[Z],Ft=i.get(gt);let yt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ft.__webglTexture),se(yt,gt),At(k.__webglFramebuffer,A,gt,n.COLOR_ATTACHMENT0+Z,yt,0),m(gt)&&y(yt)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,W.__webglTexture),se(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)At(k.__webglFramebuffer[nt],A,v,n.COLOR_ATTACHMENT0,Z,nt);else At(k.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,Z,0);m(v)&&y(Z),e.unbindTexture()}A.depthBuffer&&st(A)}function ht(A){const v=A.textures;for(let k=0,W=v.length;k<W;k++){const J=v[k];if(m(J)){const dt=T(A),pt=i.get(J).__webglTexture;e.bindTexture(dt,pt),y(dt),e.unbindTexture()}}}const mt=[],Gt=[];function kt(A){if(A.samples>0){if(Kt(A)===!1){const v=A.textures,k=A.width,W=A.height;let J=n.COLOR_BUFFER_BIT;const dt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(A),Z=v.length>1;if(Z)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const nt=A.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const Ft=i.get(v[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,J,n.NEAREST),l===!0&&(mt.length=0,Gt.length=0,mt.push(n.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(mt.push(dt),Gt.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const Ft=i.get(v[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Xt(A){return Math.min(s.maxSamples,A.samples)}function Kt(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function xe(A,v){const k=A.colorSpace,W=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Xa&&k!==ms&&(he.getTransfer(k)===we?(W!==mi||J!==Gn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",k)),v}function oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=ot,this.setTexture2DArray=K,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=at,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kS(n,t){function e(i,s=ms){let r;const o=he.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Bu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_p)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pp)return n.BYTE;if(i===mp)return n.SHORT;if(i===bo)return n.UNSIGNED_SHORT;if(i===Ou)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===vp)return n.ALPHA;if(i===xp)return n.RGB;if(i===mi)return n.RGBA;if(i===ns)return n.DEPTH_COMPONENT;if(i===Fs)return n.DEPTH_STENCIL;if(i===zu)return n.RED;if(i===Gu)return n.RED_INTEGER;if(i===$s)return n.RG;if(i===Hu)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===Pa||i===La||i===Ia||i===Da)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fc||i===Oc||i===Bc||i===kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Gc||i===Hc||i===Vc||i===Wc||i===Va||i===Xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Gc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vc)return r.COMPRESSED_R11_EAC;if(i===Wc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Va)return r.COMPRESSED_RG11_EAC;if(i===Xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$c||i===Yc||i===qc||i===Kc||i===Jc||i===Zc||i===Qc||i===jc||i===tu||i===eu||i===nu||i===iu||i===su||i===ru)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tu)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eu)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nu)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===iu)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===su)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ru)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ou||i===au||i===lu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ou)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cu||i===uu||i===Wa||i===hu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===cu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const zS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GS=`
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

}`;class HS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Pp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Fi({vertexShader:zS,fragmentShader:GS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new zr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VS extends Ks{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",p=new HS,m={},y=e.getContextAttributes();let T=null,M=null;const w=[],b=[],C=new ct;let _=null,E=null;const R=new zn;R.viewport=new Fe;const I=new zn;I.viewport=new Fe;const B=[R,I],G=new J_;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let it=w[Q];return it===void 0&&(it=new Bl,w[Q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Q){let it=w[Q];return it===void 0&&(it=new Bl,w[Q]=it),it.getGripSpace()},this.getHand=function(Q){let it=w[Q];return it===void 0&&(it=new Bl,w[Q]=it),it.getHandSpace()};function q(Q){const it=b.indexOf(Q.inputSource);if(it===-1)return;const bt=w[it];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,c||o),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ot);for(let Q=0;Q<w.length;Q++){const it=b[Q];it!==null&&(b[Q]=null,w[Q].disconnect(it))}D=null,z=null,p.reset();for(const Q in m)delete m[Q];if(t.setRenderTarget(T),f=null,h=null,d=null,s=null,M=null,de.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),E!==null){const Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ot),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,At=null;y.depth&&(At=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=y.stencil?Fs:ns,Vt=y.stencil?wo:Ni);const Wt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new si(h.textureWidth,h.textureHeight,{format:mi,type:Gn,depthTexture:new Ao(h.textureWidth,h.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new si(f.framebufferWidth,f.framebufferHeight,{format:mi,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ot(Q){for(let it=0;it<Q.removed.length;it++){const bt=Q.removed[it],Vt=b.indexOf(bt);Vt>=0&&(b[Vt]=null,w[Vt].disconnect(bt))}for(let it=0;it<Q.added.length;it++){const bt=Q.added[it];let Vt=b.indexOf(bt);if(Vt===-1){for(let Wt=0;Wt<w.length;Wt++)if(Wt>=b.length){b.push(bt),Vt=Wt;break}else if(b[Wt]===null){b[Wt]=bt,Vt=Wt;break}if(Vt===-1)break}const At=w[Vt];At&&At.connect(bt)}}const K=new P,et=new P;function X(Q,it,bt){K.setFromMatrixPosition(it.matrixWorld),et.setFromMatrixPosition(bt.matrixWorld);const Vt=K.distanceTo(et),At=it.projectionMatrix.elements,Wt=bt.projectionMatrix.elements,be=At[14]/(At[10]-1),st=At[14]/(At[10]+1),at=(At[9]+1)/At[5],ut=(At[9]-1)/At[5],ht=(At[8]-1)/At[0],mt=(Wt[8]+1)/Wt[0],Gt=be*ht,kt=be*mt,Xt=Vt/(-ht+mt),Kt=Xt*-ht;if(it.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Kt),Q.translateZ(Xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),At[10]===-1)Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const L=be+Xt,xe=st+Xt,oe=Gt-Kt,A=kt+(Vt-Kt),v=at*st/xe*L,k=ut*st/xe*L;Q.projectionMatrix.makePerspective(oe,A,v,k,L,xe),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function lt(Q,it){it===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(it.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let it=Q.near,bt=Q.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(bt=p.depthFar)),G.near=I.near=R.near=it,G.far=I.far=R.far=bt,(D!==G.near||z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,z=G.far),G.layers.mask=Q.layers.mask|6,R.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const Vt=Q.parent,At=G.cameras;lt(G,Vt);for(let Wt=0;Wt<At.length;Wt++)lt(At[Wt],Vt);At.length===2?X(G,R,I):G.projectionMatrix.copy(R.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),Mt(Q,G,Vt)};function Mt(Q,it,bt){bt===null?Q.matrix.copy(it.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(it.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=To*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Q){return m[Q]};let ee=null;function se(Q,it){if(u=it.getViewerPose(c||o),g=it,u!==null){const bt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Vt=!1;bt.length!==G.cameras.length&&(G.cameras.length=0,Vt=!0);for(let st=0;st<bt.length;st++){const at=bt[st];let ut=null;if(f!==null)ut=f.getViewport(at);else{const mt=d.getViewSubImage(h,at);ut=mt.viewport,st===0&&(t.setRenderTargetTextures(M,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(M))}let ht=B[st];ht===void 0&&(ht=new zn,ht.layers.enable(st),ht.viewport=new Fe,B[st]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ut.x,ut.y,ut.width,ut.height),st===0&&(G.matrix.copy(ht.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Vt===!0&&G.cameras.push(ht)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const st=d.getDepthInformation(bt[0]);st&&st.isValid&&st.texture&&p.init(st,s.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let st=0;st<bt.length;st++){const at=bt[st].camera;if(at){let ut=m[at];ut||(ut=new Pp,m[at]=ut);const ht=d.getCameraImage(at);ut.sourceTexture=ht}}}}for(let bt=0;bt<w.length;bt++){const Vt=b[bt],At=w[bt];Vt!==null&&At!==void 0&&At.update(Vt,it,c||o)}ee&&ee(Q,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}const de=new Hp;de.setAnimationLoop(se),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}}const WS=new fe,Kp=new Jt;Kp.set(-1,0,0,0,1,0,0,0,1);function XS(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,kp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),T=y.envMap,M=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(WS.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $S(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const b=w.program;i.uniformBlockBinding(M,b)}function c(M,w){let b=s[M.id];b===void 0&&(p(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",y));const C=w.program;i.updateUBOMapping(M,C);const _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function u(M){const w=d();M.__bindingPointIndex=w;const b=n.createBuffer(),C=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=s[M.id],b=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,E=b.length;_<E;_++){const R=b[_];if(Array.isArray(R))for(let I=0,B=R.length;I<B;I++)f(R[I],_,I,C);else f(R,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,w,b,C){if(x(M,w,b,C)===!0){const _=M.__offset,E=M.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){const B=E[I],G=m(B);g(B,M.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function g(M,w,b){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,b)}function x(M,w,b,C){const _=M.value,E=w+"_"+b;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{const R=C[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function p(M){const w=M.uniforms;let b=0;const C=16;for(let E=0,R=w.length;E<R;E++){const I=Array.isArray(w[E])?w[E]:[w[E]];for(let B=0,G=I.length;B<G;B++){const D=I[B],z=Array.isArray(D.value)?D.value:[D.value];for(let q=0,Y=z.length;q<Y;q++){const ot=z[q],K=m(ot),et=b%C,X=et%K.boundary,lt=et+X;b+=X,lt!==0&&C-lt<K.storage&&(b+=C-lt),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=K.storage}}}const _=b%C;return _>0&&(b+=C-_),M.__size=b,M.__cache={},this}function m(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){const w=M.target;w.removeEventListener("dispose",y);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:T}}const YS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function qS(){return Ei===null&&(Ei=new Ju(YS,16,16,$s,Ui),Ei.name="DFG_LUT",Ei.minFilter=xn,Ei.magFilter=xn,Ei.wrapS=Ji,Ei.wrapT=Ji,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class KS{constructor(t={}){const{canvas:e=pg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Gn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=f,p=new Set([Vu,Hu,Gu]),m=new Set([Gn,Ni,bo,wo,Bu,ku]),y=new Uint32Array(4),T=new Int32Array(4),M=new P;let w=null,b=null;const C=[],_=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,B=null,G=null,D=null,z=null;this._outputColorSpace=_n;let q=0,Y=0,ot=null,K=-1,et=null;const X=new Fe,lt=new Fe;let Mt=null;const ee=new Lt(0);let se=0,de=e.width,Q=e.height,it=1,bt=null,Vt=null;const At=new Fe(0,0,de,Q),Wt=new Fe(0,0,de,Q);let be=!1;const st=new Zu;let at=!1,ut=!1;const ht=new fe,mt=new P,Gt=new Fe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Kt(){return ot===null?it:1}let L=i;function xe(S,N){return e.getContext(S,N)}let oe,A,v,k,W,J,dt,pt,Z,nt,gt,Ft,yt,_t,Ot,Ht,jt,U,vt,j,xt,Tt,rt;try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uu}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",oi,!1),L===null){const N="webgl2";if(L=xe(N,S),L===null)throw xe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(S){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",oi,!1),ue("WebGLRenderer: "+S.message),S}function Bt(){oe=new qM(L),oe.init(),xt=new kS(L,oe),A=new BM(L,oe,t,xt),v=new OS(L,oe),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),G=L.createFramebuffer(),D=L.createFramebuffer(),z=L.createFramebuffer(),k=new ZM(L),W=new bS,J=new BS(L,oe,v,W,A,xt,k),dt=new YM(R),pt=new j_(L),Tt=new FM(L,pt),Z=new KM(L,pt,k,Tt),nt=new jM(L,Z,pt,Tt,k),U=new QM(L,A,J),Ot=new kM(W),gt=new SS(R,dt,oe,A,Tt,Ot),Ft=new XS(R,W),yt=new ES,_t=new LS(oe),jt=new UM(R,dt,v,nt,g,l),Ht=new FS(R,nt,A),rt=new $S(L,k,A,v),vt=new OM(L,oe,k),j=new JM(L,oe,k),k.programs=gt.programs,R.capabilities=A,R.extensions=oe,R.properties=W,R.renderLists=yt,R.shadowMap=Ht,R.state=v,R.info=k}x!==Gn&&(E=new ey(x,e.width,e.height,a,s,r));const Nt=new VS(R,L);this.xr=Nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(de,Q,!1))},this.getSize=function(S){return S.set(de,Q)},this.setSize=function(S,N,$=!0){if(Nt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}de=S,Q=N,e.width=Math.floor(S*it),e.height=Math.floor(N*it),$===!0&&(e.style.width=S+"px",e.style.height=N+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(de*it,Q*it).floor()},this.setDrawingBufferSize=function(S,N,$){de=S,Q=N,it=$,e.width=Math.floor(S*$),e.height=Math.floor(N*$),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===Gn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(X)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,N,$,H){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,N,$,H),v.viewport(X.copy(At).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(Wt)},this.setScissor=function(S,N,$,H){S.isVector4?Wt.set(S.x,S.y,S.z,S.w):Wt.set(S,N,$,H),v.scissor(lt.copy(Wt).multiplyScalar(it).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(S){v.setScissorTest(be=S)},this.setOpaqueSort=function(S){bt=S},this.setTransparentSort=function(S){Vt=S},this.getClearColor=function(S){return S.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,$=!0){let H=0;if(S){let V=!1;if(ot!==null){const Et=ot.texture.format;V=p.has(Et)}if(V){const Et=ot.texture.type,Pt=m.has(Et),wt=jt.getClearColor(),It=jt.getClearAlpha(),Ut=wt.r,ne=wt.g,ae=wt.b;Pt?(y[0]=Ut,y[1]=ne,y[2]=ae,y[3]=It,L.clearBufferuiv(L.COLOR,0,y)):(T[0]=Ut,T[1]=ne,T[2]=ae,T[3]=It,L.clearBufferiv(L.COLOR,0,T))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",oi,!1),jt.dispose(),yt.dispose(),_t.dispose(),W.dispose(),dt.dispose(),nt.dispose(),Tt.dispose(),rt.dispose(),gt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",yh),Nt.removeEventListener("sessionend",Sh),Ts.stop()};function Re(S){S.preventDefault(),qa("WebGLRenderer: Context Lost."),I=!0}function Me(){qa("WebGLRenderer: Context Restored."),I=!1;const S=k.autoReset,N=Ht.enabled,$=Ht.autoUpdate,H=Ht.needsUpdate,V=Ht.type;Bt(),k.autoReset=S,Ht.enabled=N,Ht.autoUpdate=$,Ht.needsUpdate=H,Ht.type=V}function oi(S){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Si(S){const N=S.target;N.removeEventListener("dispose",Si),mm(N)}function mm(S){gm(S),W.remove(S)}function gm(S){const N=W.get(S).programs;N!==void 0&&(N.forEach(function($){gt.releaseProgram($)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,$,H,V,Et){N===null&&(N=kt);const Pt=V.isMesh&&V.matrixWorld.determinantAffine()<0,wt=xm(S,N,$,H,V);v.setMaterial(H,Pt);let It=$.index,Ut=1;if(H.wireframe===!0){if(It=Z.getWireframeAttribute($),It===void 0)return;Ut=2}const ne=$.drawRange,ae=$.attributes.position;let Dt=ne.start*Ut,ye=(ne.start+ne.count)*Ut;Et!==null&&(Dt=Math.max(Dt,Et.start*Ut),ye=Math.min(ye,(Et.start+Et.count)*Ut)),It!==null?(Dt=Math.max(Dt,0),ye=Math.min(ye,It.count)):ae!=null&&(Dt=Math.max(Dt,0),ye=Math.min(ye,ae.count));const Xe=ye-Dt;if(Xe<0||Xe===1/0)return;Tt.setup(V,H,wt,$,It);let De,Ce=vt;if(It!==null&&(De=pt.get(It),Ce=j,Ce.setIndex(De)),V.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Kt()),Ce.setMode(L.LINES)):Ce.setMode(L.TRIANGLES);else if(V.isLine){let dn=H.linewidth;dn===void 0&&(dn=1),v.setLineWidth(dn*Kt()),V.isLineSegments?Ce.setMode(L.LINES):V.isLineLoop?Ce.setMode(L.LINE_LOOP):Ce.setMode(L.LINE_STRIP)}else V.isPoints?Ce.setMode(L.POINTS):V.isSprite&&Ce.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Ce.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const dn=V._multiDrawStarts,Ct=V._multiDrawCounts,Sn=V._multiDrawCount,pe=It?pt.get(It).bytesPerElement:1,Zn=W.get(H).currentProgram.getUniforms();for(let bi=0;bi<Sn;bi++)Zn.setValue(L,"_gl_DrawID",bi),Ce.render(dn[bi]/pe,Ct[bi])}else if(V.isInstancedMesh)Ce.renderInstances(Dt,Xe,V.count);else if($.isInstancedBufferGeometry){const dn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ct=Math.min($.instanceCount,dn);Ce.renderInstances(Dt,Xe,Ct)}else Ce.render(Dt,Xe)};function Mh(S,N,$,H){B!==null&&S.isNodeMaterial&&B.setObject(H,S),at===!0&&Ot.setState(S,$,!1),S.transparent===!0&&S.side===hi&&S.forceSinglePass===!1?(S.side=Nn,S.needsUpdate=!0,Xo(S,N,H),S.side=Ws,S.needsUpdate=!0,Xo(S,N,H),S.side=hi):Xo(S,N,H)}this.compile=function(S,N,$=null){$===null&&($=S),B!==null&&B.renderStart(S,N,$),b=_t.get($),b.init(N),_.push(b),$.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),S!==$&&S.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ut),at===!0&&Ot.setGlobalState(this.clippingPlanes,N),B!==null&&Ht.render(b.state.shadowsArray,$,N);const H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Et=V.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const wt=Et[Pt];Mh(wt,$,N,V),H.add(wt)}else Mh(Et,$,N,V),H.add(Et)}),b=_.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(S,N,$=null){const H=this.compile(S,N,$);return new Promise(V=>{function Et(){if(H.forEach(function(Pt){const It=W.get(Pt).currentProgram;(It===void 0||It.isReady())&&H.delete(Pt)}),H.size===0){V(S);return}setTimeout(Et,10)}oe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let El=null;function _m(S){El&&El(S)}function yh(){Ts.stop()}function Sh(){Ts.start()}const Ts=new Hp;Ts.setAnimationLoop(_m),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(S){El=S,Nt.setAnimationLoop(S),S===null?Ts.stop():Ts.start()},Nt.addEventListener("sessionstart",yh),Nt.addEventListener("sessionend",Sh),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(S,N);const $=Nt.enabled===!0&&Nt.isPresenting===!0,H=E!==null&&(ot===null||$)&&E.begin(R,ot);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(N),N=Nt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,ot),b=_t.get(S,_.length),b.init(N),b.state.textureUnits=J.getTextureUnits(),_.push(b),ht.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),st.setFromProjectionMatrix(ht,Ri,N.reversedDepth),ut=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ut),w=yt.get(S,C.length),w.init(),C.push(w),Nt.enabled===!0&&Nt.isPresenting===!0){const Pt=R.xr.getDepthSensingMesh();Pt!==null&&Tl(Pt,N,-1/0,R.sortObjects)}Tl(S,N,0,R.sortObjects),w.finish(),B!==null&&B.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(bt,Vt),Xt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Xt&&jt.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ot.beginShadows();const V=b.state.shadowsArray;if(Ht.render(V,S,N),at===!0&&Ot.endShadows(),(H&&E.hasRenderPass())===!1){const Pt=w.opaque,wt=w.transmissive;if(b.setupLights(),N.isArrayCamera){const It=N.cameras;if(wt.length>0)for(let Ut=0,ne=It.length;Ut<ne;Ut++){const ae=It[Ut];wh(Pt,wt,S,ae)}Xt&&jt.render(S);for(let Ut=0,ne=It.length;Ut<ne;Ut++){const ae=It[Ut];bh(w,S,ae,ae.viewport)}}else wt.length>0&&wh(Pt,wt,S,N),Xt&&jt.render(S),bh(w,S,N)}ot!==null&&Y===0&&(J.updateMultisampleRenderTarget(ot),J.updateRenderTargetMipmap(ot)),H&&E.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),Tt.resetDefaultState(),K=-1,et=null,_.pop(),_.length>0?(b=_[_.length-1],J.setTextureUnits(b.state.textureUnits),at===!0&&Ot.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,B!==null&&B.renderEnd()};function Tl(S,N,$,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(st)){H&&Gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);const Pt=nt.update(S),wt=S.material;wt.visible&&w.push(S,Pt,wt,$,Gt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(st))){const Pt=nt.update(S),wt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Gt.copy(S.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Gt.copy(Pt.boundingSphere.center)),Gt.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){const It=Pt.groups;for(let Ut=0,ne=It.length;Ut<ne;Ut++){const ae=It[Ut],Dt=wt[ae.materialIndex];Dt&&Dt.visible&&w.push(S,Pt,Dt,$,Gt.z,ae,N)}}else wt.visible&&w.push(S,Pt,wt,$,Gt.z,null,N)}}const Et=S.children;for(let Pt=0,wt=Et.length;Pt<wt;Pt++)Tl(Et[Pt],N,$,H)}function bh(S,N,$,H){const{opaque:V,transmissive:Et,transparent:Pt}=S;b.setupLightsView($),at===!0&&Ot.setGlobalState(R.clippingPlanes,$),H&&v.viewport(X.copy(H)),V.length>0&&Wo(V,N,$),Et.length>0&&Wo(Et,N,$),Pt.length>0&&Wo(Pt,N,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function wh(S,N,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Dt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new si(1,1,{generateMipmaps:!0,type:Dt?Ui:Gn,minFilter:Us,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}const Et=b.state.transmissionRenderTarget[H.id],Pt=H.viewport||X;Et.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);const wt=R.getRenderTarget(),It=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(ee),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),Xt&&jt.render($);const ne=R.toneMapping;R.toneMapping=Pi;const ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),at===!0&&Ot.setGlobalState(R.clippingPlanes,H),Wo(S,$,H),J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ye=0,Xe=N.length;ye<Xe;ye++){const De=N[ye],{object:Ce,geometry:dn,material:Ct,group:Sn}=De;if(Ct.side===hi&&Ce.layers.test(H.layers)){const pe=Ct.side;Ct.side=Nn,Ct.needsUpdate=!0,Eh(Ce,$,H,dn,Ct,Sn),Ct.side=pe,Ct.needsUpdate=!0,Dt=!0}}Dt===!0&&(J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et))}R.setRenderTarget(wt,It,Ut),R.setClearColor(ee,se),ae!==void 0&&(H.viewport=ae),R.toneMapping=ne}function Wo(S,N,$){const H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,Et=S.length;V<Et;V++){const Pt=S[V],{object:wt,geometry:It,group:Ut}=Pt;let ne=Pt.material;ne.allowOverride===!0&&H!==null&&(ne=H),wt.layers.test($.layers)&&Eh(wt,N,$,It,ne,Ut)}}function Eh(S,N,$,H,V,Et){B!==null&&V.isNodeMaterial&&B.setObject(S,V),S.onBeforeRender(R,N,$,H,V,Et),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(R,N,$,H,S,Et),V.transparent===!0&&V.side===hi&&V.forceSinglePass===!1?(V.side=Nn,V.needsUpdate=!0,R.renderBufferDirect($,N,H,V,S,Et),V.side=Ws,V.needsUpdate=!0,R.renderBufferDirect($,N,H,V,S,Et),V.side=hi):R.renderBufferDirect($,N,H,V,S,Et),S.onAfterRender(R,N,$,H,V,Et)}function Xo(S,N,$){N.isScene!==!0&&(N=kt);const H=W.get(S),V=b.state.lights,Et=b.state.shadowsArray,Pt=V.state.version,wt=gt.getParameters(S,V.state,Et,N,$,b.state.lightProbeGridArray),It=gt.getProgramCacheKey(wt);let Ut=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const ne=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=dt.get(S.envMap||H.environment,ne),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",Si),Ut=new Map,H.programs=Ut);let ae=Ut.get(It);if(ae!==void 0){if(H.currentProgram===ae&&H.lightsStateVersion===Pt)return Ah(S,wt),ae}else wt.uniforms=gt.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,$,wt),S.onBeforeCompile(wt,R),ae=gt.acquireProgram(wt,It),Ut.set(It,ae),H.uniforms=wt.uniforms;const Dt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),Ah(S,wt),H.needsLights=ym(S),H.lightsStateVersion=Pt,H.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.sunLights.value=V.state.sun,Dt.sunLightShadows.value=V.state.sunShadow,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.sunShadowMatrix.value=V.state.sunShadowMatrix,Dt.sunShadowCascade.value=V.state.sunShadowCascade,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=ae,H.uniformsList=null,ae}function Th(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Na.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ah(S,N){const $=W.get(S);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function vm(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let $=0,H=S.length;$<H;$++){const V=S[$];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function xm(S,N,$,H,V){N.isScene!==!0&&(N=kt),J.resetTextureUnits();const Et=N.fog,Pt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,wt=ot===null?R.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:he.workingColorSpace,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ut=dt.get(H.envMap||Pt,It),ne=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ae=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!$.morphAttributes.position,ye=!!$.morphAttributes.normal,Xe=!!$.morphAttributes.color;let De=Pi;H.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(De=R.toneMapping);const Ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dn=Ce!==void 0?Ce.length:0,Ct=W.get(H),Sn=b.state.lights;if(at===!0&&(ut===!0||S!==et)){const Pe=S===et&&H.id===K;Ot.setState(H,S,Pe)}let pe=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Sn.state.version||Ct.outputColorSpace!==wt||V.isBatchedMesh&&Ct.batching===!1||!V.isBatchedMesh&&Ct.batching===!0||V.isBatchedMesh&&Ct.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ct.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ct.instancing===!1||!V.isInstancedMesh&&Ct.instancing===!0||V.isSkinnedMesh&&Ct.skinning===!1||!V.isSkinnedMesh&&Ct.skinning===!0||V.isInstancedMesh&&Ct.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ct.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ct.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ct.instancingMorph===!1&&V.morphTexture!==null||Ct.envMap!==Ut||H.fog===!0&&Ct.fog!==Et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Ot.numPlanes||Ct.numIntersection!==Ot.numIntersection)||Ct.vertexAlphas!==ne||Ct.vertexTangents!==ae||Ct.morphTargets!==Dt||Ct.morphNormals!==ye||Ct.morphColors!==Xe||Ct.toneMapping!==De||Ct.morphTargetsCount!==dn||!!Ct.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Ct.__version=H.version);let Zn=Ct.currentProgram;pe===!0&&(Zn=Xo(H,N,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Zn,Ct));let bi=!1,rs=!1,Qs=!1;const Te=Zn.getUniforms(),Ge=Ct.uniforms;if(v.useProgram(Zn.program)&&(bi=!0,rs=!0,Qs=!0),H.id!==K&&(K=H.id,rs=!0),Ct.needsLights){const Pe=vm(b.state.lightProbeGridArray,V);Ct.lightProbeGrid!==Pe&&(Ct.lightProbeGrid=Pe,rs=!0)}if(bi||et!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Te.setValue(L,"projectionMatrix",S.projectionMatrix),Te.setValue(L,"viewMatrix",S.matrixWorldInverse);const as=Te.map.cameraPosition;as!==void 0&&as.setValue(L,mt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&Te.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Te.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),et!==S&&(et=S,rs=!0,Qs=!0)}if(Ct.needsLights&&(Sn.state.sunShadowMap.length>0&&Te.setValue(L,"sunShadowMap",Sn.state.sunShadowMap,J),Sn.state.directionalShadowMap.length>0&&Te.setValue(L,"directionalShadowMap",Sn.state.directionalShadowMap,J),Sn.state.spotShadowMap.length>0&&Te.setValue(L,"spotShadowMap",Sn.state.spotShadowMap,J),Sn.state.pointShadowMap.length>0&&Te.setValue(L,"pointShadowMap",Sn.state.pointShadowMap,J)),V.isSkinnedMesh){Te.setOptional(L,V,"bindMatrix"),Te.setOptional(L,V,"bindMatrixInverse");const Pe=V.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Te.setValue(L,"boneTexture",Pe.boneTexture,J))}V.isBatchedMesh&&(Te.setOptional(L,V,"batchingTexture"),Te.setValue(L,"batchingTexture",V._matricesTexture,J),Te.setOptional(L,V,"batchingIdTexture"),Te.setValue(L,"batchingIdTexture",V._indirectTexture,J),Te.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Te.setValue(L,"batchingColorTexture",V._colorsTexture,J));const os=$.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&U.update(V,$,Zn),(rs||Ct.receiveShadow!==V.receiveShadow)&&(Ct.receiveShadow=V.receiveShadow,Te.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Ge.envMapIntensity.value=N.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=qS()),rs){if(Te.setValue(L,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&Mm(Ge,Qs),Et&&H.fog===!0&&Ft.refreshFogUniforms(Ge,Et),Ft.refreshMaterialUniforms(Ge,H,it,Q,b.state.transmissionRenderTarget[S.id]),Ct.needsLights&&Ct.lightProbeGrid){const Pe=Ct.lightProbeGrid;Ge.probesSH.value=Pe.texture,Ge.probesMin.value.copy(Pe.boundingBox.min),Ge.probesMax.value.copy(Pe.boundingBox.max),Ge.probesResolution.value.copy(Pe.resolution)}Na.upload(L,Th(Ct),Ge,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Na.upload(L,Th(Ct),Ge,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Te.setValue(L,"center",V.center),Te.setValue(L,"modelViewMatrix",V.modelViewMatrix),Te.setValue(L,"normalMatrix",V.normalMatrix),Te.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const Pe=H.uniformsGroups;for(let as=0,js=Pe.length;as<js;as++){const Rh=Pe[as];rt.update(Rh,Zn),rt.bind(Rh,Zn)}}return Zn}function Mm(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function ym(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(S,N,$){const H=W.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=N,W.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const $=W.get(S);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,$=0){ot=S,q=N,Y=$;let H=null,V=!1,Et=!1;if(S){const wt=W.get(S);if(wt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(L.FRAMEBUFFER,wt.__webglFramebuffer),X.copy(S.viewport),lt.copy(S.scissor),Mt=S.scissorTest,v.viewport(X),v.scissor(lt),v.setScissorTest(Mt),K=-1;return}else if(wt.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(wt.__hasExternalTextures)J.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ne=S.depthTexture;if(wt.__boundDepthTexture!==ne){if(ne!==null&&W.has(ne)&&(S.width!==ne.image.width||S.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}const It=S.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);const Ut=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?H=Ut[N][$]:H=Ut[N],V=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?H=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?H=Ut[$]:H=Ut,X.copy(S.viewport),lt.copy(S.scissor),Mt=S.scissorTest}else X.copy(At).multiplyScalar(it).floor(),lt.copy(Wt).multiplyScalar(it).floor(),Mt=be;if($!==0&&(H=G),v.bindFramebuffer(L.FRAMEBUFFER,H)&&v.drawBuffers(S,H),v.viewport(X),v.scissor(lt),v.setScissorTest(Mt),V){const wt=W.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,$)}else if(Et){const wt=N;for(let It=0;It<S.textures.length;It++){const Ut=W.get(S.textures[It]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+It,Ut.__webglTexture,$,wt)}}else if(S!==null&&$!==0){const wt=W.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,$)}K=-1};function Ch(S){const N=W.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=A.textureFormatReadable(S.format),N.__typeReadable=A.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,$,H,V,Et,Pt,wt=0){if(!(S&&S.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){v.bindFramebuffer(L.FRAMEBUFFER,It);try{const Ut=S.textures[wt],ne=Ut.format,ae=Ut.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt);const Dt=Ch(Ut);if(Dt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&$>=0&&$<=S.height-V&&L.readPixels(N,$,H,V,xt.convert(ne),xt.convert(ae),Et)}finally{const Ut=ot!==null?W.get(ot).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(S,N,$,H,V,Et,Pt,wt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It)if(N>=0&&N<=S.width-H&&$>=0&&$<=S.height-V){v.bindFramebuffer(L.FRAMEBUFFER,It);const Ut=S.textures[wt],ne=Ut.format,ae=Ut.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt);const Dt=Ch(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,Et.byteLength,L.STREAM_READ),L.readPixels(N,$,H,V,xt.convert(ne),xt.convert(ae),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Xe=ot!==null?W.get(ot).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Xe);const De=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mg(L,De,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Et),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ye),L.deleteSync(De),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,$=0){const H=Math.pow(2,-$),V=Math.floor(S.image.width*H),Et=Math.floor(S.image.height*H),Pt=N!==null?N.x:0,wt=N!==null?N.y:0;J.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Pt,wt,V,Et),v.unbindTexture()},this.copyTextureToTexture=function(S,N,$=null,H=null,V=0,Et=0){let Pt,wt,It,Ut,ne,ae,Dt,ye,Xe;const De=S.isCompressedTexture?S.mipmaps[Et]:S.image;if($!==null)Pt=$.max.x-$.min.x,wt=$.max.y-$.min.y,It=$.isBox3?$.max.z-$.min.z:1,Ut=$.min.x,ne=$.min.y,ae=$.isBox3?$.min.z:0;else{const Ge=Math.pow(2,-V);Pt=Math.floor(De.width*Ge),wt=Math.floor(De.height*Ge),S.isDataArrayTexture?It=De.depth:S.isData3DTexture?It=Math.floor(De.depth*Ge):It=1,Ut=0,ne=0,ae=0}H!==null?(Dt=H.x,ye=H.y,Xe=H.z):(Dt=0,ye=0,Xe=0);const Ce=xt.convert(N.format),dn=xt.convert(N.type);let Ct;N.isData3DTexture?(J.setTexture3D(N,0),Ct=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Ct=L.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Ct=L.TEXTURE_2D),v.activeTexture(L.TEXTURE0),v.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Sn=v.getParameter(L.UNPACK_ROW_LENGTH),pe=v.getParameter(L.UNPACK_IMAGE_HEIGHT),Zn=v.getParameter(L.UNPACK_SKIP_PIXELS),bi=v.getParameter(L.UNPACK_SKIP_ROWS),rs=v.getParameter(L.UNPACK_SKIP_IMAGES);v.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),v.pixelStorei(L.UNPACK_SKIP_PIXELS,Ut),v.pixelStorei(L.UNPACK_SKIP_ROWS,ne),v.pixelStorei(L.UNPACK_SKIP_IMAGES,ae);const Qs=S.isDataArrayTexture||S.isData3DTexture,Te=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Ge=W.get(S),os=W.get(N),Pe=W.get(Ge.__renderTarget),as=W.get(os.__renderTarget);v.bindFramebuffer(L.READ_FRAMEBUFFER,Pe.__webglFramebuffer),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let js=0;js<It;js++)Qs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(S).__webglTexture,V,ae+js),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(N).__webglTexture,Et,Xe+js)),L.blitFramebuffer(Ut,ne,Pt,wt,Dt,ye,Pt,wt,L.DEPTH_BUFFER_BIT,L.NEAREST);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||W.has(S)){const Ge=W.get(S),os=W.get(N);v.bindFramebuffer(L.READ_FRAMEBUFFER,D),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let Pe=0;Pe<It;Pe++)Qs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,V,ae+Pe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,V),Te?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,os.__webglTexture,Et,Xe+Pe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,os.__webglTexture,Et),V!==0?L.blitFramebuffer(Ut,ne,Pt,wt,Dt,ye,Pt,wt,L.COLOR_BUFFER_BIT,L.NEAREST):Te?L.copyTexSubImage3D(Ct,Et,Dt,ye,Xe+Pe,Ut,ne,Pt,wt):L.copyTexSubImage2D(Ct,Et,Dt,ye,Ut,ne,Pt,wt);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Te?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ct,Et,Dt,ye,Xe,Pt,wt,It,Ce,dn,De.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,Et,Dt,ye,Xe,Pt,wt,It,Ce,De.data):L.texSubImage3D(Ct,Et,Dt,ye,Xe,Pt,wt,It,Ce,dn,De):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Et,Dt,ye,Pt,wt,Ce,dn,De.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Et,Dt,ye,De.width,De.height,Ce,De.data):L.texSubImage2D(L.TEXTURE_2D,Et,Dt,ye,Pt,wt,Ce,dn,De);v.pixelStorei(L.UNPACK_ROW_LENGTH,Sn),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe),v.pixelStorei(L.UNPACK_SKIP_PIXELS,Zn),v.pixelStorei(L.UNPACK_SKIP_ROWS,bi),v.pixelStorei(L.UNPACK_SKIP_IMAGES,rs),Et===0&&N.generateMipmaps&&L.generateMipmap(Ct),v.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){q=0,Y=0,ot=null,v.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const io=new P;function jn(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;io.copy(t),io[i]=0,io.normalize();const c=.5*o/(o+a),u=1-io.angleTo(n)/l;return Math.sign(io[e])===1?u*c:a/(o+a)+c+c*(1-u)}class zo extends Un{constructor(t=1,e=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new P,c=new P,u=new P(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new P,p=.5/o;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*r,d[m+1]=u.y*Math.sign(l.y)+c.y*r,d[m+2]=u.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[y+0]=jn(x,c,"z","y",r,i),f[y+1]=1-jn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[y+0]=1-jn(x,c,"z","y",r,i),f[y+1]=1-jn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[y+0]=1-jn(x,c,"x","z",r,t),f[y+1]=jn(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[y+0]=1-jn(x,c,"x","z",r,t),f[y+1]=1-jn(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[y+0]=1-jn(x,c,"x","y",r,t),f[y+1]=1-jn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[y+0]=jn(x,c,"x","y",r,t),f[y+1]=1-jn(x,c,"y","x",r,e);break}}static fromJSON(t){return new zo(t.width,t.height,t.depth,t.segments,t.radius)}}const JS=.001;function ZS(n,t){return{col:{x:Math.cos(n),y:Math.sin(t)*Math.sin(n)},row:{x:-Math.sin(n),y:Math.sin(t)*Math.cos(n)}}}function QS(n,t,e=JS){const i=g=>{const x=Math.hypot(g.x,g.y)||1;return{x:g.x/x,y:g.y/x}},s=i(n),r=i(t),o=g=>g<-e?-1:1,a=Math.abs(s.x)-Math.abs(r.x),l=a>e?!0:a<-e?!1:o(s.x)*s.y>=o(r.x)*r.y-e,c=l?s:r,u=l?r:s,d=o(c.x),h=o(u.y),f=(g,x)=>g?{dx:x,dy:0}:{dx:0,dy:x};return{ArrowRight:f(l,d),ArrowLeft:f(l,-d),ArrowDown:f(!l,h),ArrowUp:f(!l,-h)}}function jS(n,t){const{col:e,row:i}=ZS(n,t);return QS(e,i)}function t1(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ke;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=cd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);const g=cd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function cd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new An(o,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){const x=u.getComponent(h,g);a.setComponent(h+d,g,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function ft(n,t,e={}){const i=new fe().compose(new P(...e.p??[0,0,0]),new Mi().setFromEuler(new yi(...e.r??[0,0,0])),new P(...e.s??[1,1,1]));return{geo:n.clone().applyMatrix4(i),color:t,glow:e.glow}}const Zt=(n,t,e={})=>ft(n,t,{...e,glow:!0});function ss(n,t,e,i,s=0,r=1){const o=new fe().compose(new P(t,e,i),new Mi().setFromEuler(new yi(0,s,0)),new P(r,r,r));return n.map(a=>({geo:a.geo.clone().applyMatrix4(o),color:a.color,glow:a.glow}))}function Za(n,t=.5,e=0){const i=n.map(({geo:r,color:o,glow:a})=>{const l=r.index?r.toNonIndexed():r.clone();for(const h of Object.keys(l.attributes))h!=="position"&&h!=="normal"&&l.deleteAttribute(h);l.getAttribute("normal")||l.computeVertexNormals();const c=l.getAttribute("position"),u=new Float32Array(c.count*3),d=new Lt(o);for(let h=0;h<c.count;h++){const f=c.getY(h)-e,g=a?1:t>0?.72+.28*Math.min(1,Math.max(0,f/t)):1;u[h*3]=d.r*g,u[h*3+1]=d.g*g,u[h*3+2]=d.b*g}return l.setAttribute("color",new An(u,3)),l});if(!i.length){const r=new Ke;return r.setAttribute("position",new ge([],3)),r.setAttribute("normal",new ge([],3)),r.setAttribute("color",new ge([],3)),r}const s=t1(i,!1);return s.computeBoundingSphere(),s}function Jp(n,t){const e=n.filter(s=>!s.glow),i=n.filter(s=>s.glow);return{body:Za(e,t),glow:i.length?Za(i,0):null}}const hc=(n,t,e)=>new Un(n,t,e),_e=(n,t,e,i=8)=>new ys(n,t,e,i),qe=(n,t,e=8)=>new zs(n,t,e),Ne=(n,t=0)=>new fl(n,t),ud=(n,t=14,e=10)=>new ko(n,t,e);function Fn(n,t,e){const i=n.index?n.toNonIndexed():n,s=i.getAttribute("position"),r=c=>`${s.getX(c).toFixed(3)},${s.getY(c).toFixed(3)},${s.getZ(c).toFixed(3)}`,o=new Map;let a=e;const l=()=>(a=a*16807%2147483647,a/2147483647-.5);for(let c=0;c<s.count;c++){const u=r(c);o.has(u)||o.set(u,[l()*t,l()*t,l()*t]);const d=o.get(u);s.setXYZ(c,s.getX(c)+d[0],s.getY(c)+d[1],s.getZ(c)+d[2])}return i.computeVertexNormals(),i}const vi=(n,t)=>Fn(Ne(n,1),n*.12,t);function Wn(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}const O={grass:5012803,grassLight:6986322,leaf:4157508,leafLight:5934156,leafDark:2905396,pine:3103802,pineLight:4618058,pineDark:2312751,bark:6044460,barkDark:4532511,stone:9144232,stoneLight:10986434,stoneDark:7104651,moss:5799999,pink:15895219,white:15855094,blossom:16033736,blossomLight:16568546,water:2842022,lily:4160069,ember:16757066,warm:16766346,shroom:11824383,shroomBlue:5217535,shroomCyan:4645590,crystal:7521535,crystalViolet:11441407,spirit:10482392,star:16773824};function e1(n,t=[0,0,0],e=[0,0,0],i=[1,1,1]){const s=new fe().compose(new P(...t),new Mi().setFromEuler(new yi(...e)),new P(...i));return n.map(r=>({geo:r.geo.clone().applyMatrix4(s),color:r.color,glow:r.glow}))}const Be=(n,t,e)=>new zo(n,t,e,1,Math.min(.03,n/4,t/4,e/4));function ui(n,t,e,i,s,r,o,a=O.stone){const l=[a,O.stoneLight,O.stoneDark][Math.floor(Wn(o,3)*2.2)];return ft(Be(i,s,r),o%4===0?l:a,{p:[n,t+s/2,e],r:[(Wn(o,1)-.5)*.12,Wn(o,2)*1.2,(Wn(o,4)-.5)*.12]})}function $i(n,t,e,i,s,r=O.stone,o=.75){return ft(Fn(Ne(i,0),i*.15,s),r,{p:[n,t+i*o*.8,e],s:[1.15,o,1],r:[0,s,0]})}function Ln(n,t,e=1,i=1,s=O.grass){const r=[];for(let a=0;a<5;a++){const l=i+a/5*Math.PI*2,c=(.16+Wn(i,a)*.1)*e;r.push(ft(qe(.022*e,c,3),a%2?O.grassLight:s,{p:[n+Math.sin(l)*.03*e,c/2,t+Math.cos(l)*.03*e],r:[Math.cos(l)*.35,0,-Math.sin(l)*.35]}))}return r}function lo(n,t,e=1,i=1,s,r=!1){const o=[ft(vi(.15*e,i),O.leaf,{p:[n,.12*e,t],s:[1.15,.85,1.1]}),ft(vi(.11*e,i+1),O.leafLight,{p:[n+.09*e,.14*e,t+.05*e]}),ft(vi(.1*e,i+2),O.leafDark,{p:[n-.1*e,.1*e,t+.04*e]})];if(s!==void 0)for(let a=0;a<6;a++){const l=i+a*1.9,c=[n+Math.sin(l)*.12*e,(.17+Wn(i,a)*.07)*e,t+Math.cos(l)*.12*e];o.push(r?Zt(Ne(.022*e,0),s,{p:c}):ft(Ne(.024*e,0),s,{p:c}))}return o}function br(n,t,e=1,i=1){const s=[];for(let r=0;r<6;r++){const o=i+r/6*Math.PI*2;s.push(ft(qe(.035*e,.26*e,3),r%2?O.leafLight:O.leaf,{p:[n+Math.sin(o)*.07*e,.07*e,t+Math.cos(o)*.07*e],r:[Math.cos(o)*1,0,-Math.sin(o)*1],s:[1,1,.35]}))}return s}function Ua(n,t,e=1,i=O.shroom,s=0){return[ft(_e(.018*e,.026*e,.12*e,6),O.white,{p:[n,.06*e,t],r:[s,0,s*.5]}),Zt(new ko(.06*e,8,4,0,Math.PI*2,0,Math.PI/2),i,{p:[n+s*.06*e,.11*e,t],s:[1,.75,1]})]}function gn(n,t,e=1,i=O.shroom){return[...Ua(n,t,1.2*e,i),...Ua(n+.08*e,t+.05*e,.8*e,i,.2),...Ua(n-.07*e,t+.06*e,.65*e,i,-.25)]}function ti(n,t,e=1,i=1,s=4){const r=[ft(_e(.035,.05,.22,6),O.bark,{p:[0,.11,0]})];for(let o=0;o<s;o++){const a=o/s,l=.27*(1-a*.62),c=.3*(1-a*.25),u=.17+o*.16;r.push(ft(Fn(qe(l,c,7),l*.06,i+o),o===s-1?O.pineLight:o%2?O.pine:O.pineDark,{p:[0,u+c/2,0],r:[0,i+o*.7,0]}))}return ss(r,n,0,t,i*.3,e)}function hd(n,t,e=1,i=1,s=[O.leaf,O.leafLight,O.leafDark]){const r=[ft(_e(.035,.055,.42,6),O.bark,{p:[0,.21,0]})];return r.push(ft(vi(.22,i),s[0],{p:[0,.5,0]})),r.push(ft(vi(.16,i+1),s[1],{p:[.13,.44,.07]})),r.push(ft(vi(.15,i+2),s[2],{p:[-.11,.62,-.05]})),ss(r,n,0,t,i*.5,e)}function Ye(n,t,e,i,s=O.crystal,r=[0,0,0]){const o=new ys(0,i,e*.3,6).translate(0,e*.85,0),a=new ys(i,i*.8,e*.7,6).translate(0,e*.35,0);return[Zt(a,s,{p:[n,0,t],r}),Zt(o,new Lt(s).lerp(new Lt(16777215),.35).getHex(),{p:[n,0,t],r})]}function Xi(n,t,e=1){const i=[ft(Be(.2,.06,.2),O.stoneDark,{p:[0,.03,0]}),ft(_e(.04,.05,.22,6),O.stone,{p:[0,.17,0]}),ft(Be(.18,.04,.18),O.stoneDark,{p:[0,.3,0]}),Zt(Be(.12,.11,.12),O.ember,{p:[0,.375,0]}),ft(qe(.16,.1,4),O.stoneDark,{p:[0,.48,0],r:[0,Math.PI/4,0]}),ft(Ne(.02,0),O.stone,{p:[0,.54,0]})];return ss(i,n,0,t,.4,e)}const ds=(n,t,e,i=1,s=O.ember)=>Zt(_e(.035*i,.035*i,.06*i,6),s,{p:[n,t,e]});function Ze(n,t,e,i,s,r,o=O.star){const a=[];for(let l=0;l<s;l++)a.push(Zt(Ne(.016,0),o,{p:[n+(Wn(r,l)-.5)*i,e+Wn(r+7,l)*i*.5,t+(Wn(r+3,l)-.5)*i]}));return a}function so(n,t,e,i,s){const r=[ft(Be(.13,e,.09),O.stone,{p:[0,e/2,0],r:[(Wn(i,1)-.5)*.1,0,(Wn(i,2)-.5)*.12]})];return s!==void 0&&r.push(Zt(new Un(.03,e*.45,.01),s,{p:[0,e*.55,.048]})),ss(r,n,0,t,i*.9,1)}function fc(n,t,e,i){const s=[ft(Be(.2,.06,.2),O.stoneDark,{p:[0,.03,0]})],r=Math.max(1,Math.round(e/.16));for(let o=0;o<r;o++)s.push(ft(_e(.07,.075,.15,7),o%2?O.stone:O.stoneLight,{p:[(Wn(i,o)-.5)*.012,.06+o*.155+.075,0],r:[0,Wn(i,o+9),0]}));return s.push(ft(qe(.03,.12,3),O.moss,{p:[.06,.06+r*.12,.05],r:[.4,0,.3]})),ss(s,n,0,t,i,1)}function ba(n,t,e,i,s){const r=[];for(const o of[-1,1])for(let a=0;a<3;a++)r.push(ft(Be(.13,i/3,.13),(a+(o>0?1:0))%2?O.stone:O.stoneLight,{p:[o*e/2,(a+.5)*(i/3),0]}));return r.push(ft(Be(e+.2,.1,.15),O.stoneLight,{p:[0,i+.05,0]})),r.push(ft(qe(.04,.16,3),O.moss,{p:[e/2-.02,i*.6,.07],r:[.5,0,0]})),ss(r,n,0,t,s,1)}function dc(n,t,e,i){const s=[ft(_e(e+.05,e+.08,.04,9),O.stoneDark,{p:[0,.02,0]}),Zt(_e(e,e,.045,9),O.water,{p:[0,.025,0]})];for(let r=0;r<3;r++){const o=i+r*2.2;s.push(ft(_e(.05,.05,.012,7),O.lily,{p:[Math.sin(o)*e*.55,.05,Math.cos(o)*e*.55]}))}s.push(Zt(Ne(.02,0),O.pink,{p:[Math.sin(i)*e*.55,.07,Math.cos(i)*e*.55]}));for(let r=0;r<6;r++){const o=i+r/6*Math.PI*2;s.push($i(Math.sin(o)*(e+.07),0,Math.cos(o)*(e+.07),.04,i+r,r%2?O.stone:O.stoneDark,.7))}return ss(s,n,0,t,0,1)}function vr(n,t,e=O.bark){const i=[ft(_e(t*.6,t,n,7),e,{p:[0,n/2,0]})];for(let s=0;s<5;s++){const r=s/5*Math.PI*2+.3;i.push(ft(qe(t*.4,t*2.2,4),O.barkDark,{p:[Math.sin(r)*t*.9,t*.35,Math.cos(r)*t*.9],r:[Math.cos(r)*1.25,0,-Math.sin(r)*1.25]}))}return i}function Is(n,t,e,i){const s=[];return[[0,0,0,1],[.55,-.1,.25,.7],[-.5,-.05,.2,.72],[.1,.35,-.3,.65],[-.2,.25,.45,.6],[.3,.1,-.5,.62]].forEach(([o,a,l,c],u)=>s.push(ft(vi(t*c,e+u),i[u%i.length],{p:[o*t,n+a*t,l*t]}))),s}function n1(n){switch(n){case 0:return[...Ln(0,0,1.2,3),...Ln(.12,.08,.8,5),...Ln(-.1,.07,.7,8)];case 1:return lo(0,0,1.15,11);case 2:return[...Ln(-.12,-.08,.6,21),...gn(.02,0,1.3,O.shroom)];case 3:return[...lo(0,0,1.25,31,O.pink,!0),...Ln(.18,.1,.6,32)];case 4:return[...ti(0,0,.75,41,3),...gn(.16,.12,.6,O.shroomBlue)];case 5:return[...ti(0,0,1,51),...Ze(0,0,.55,.5,4,52),...Ln(.18,.15,.6,53)];case 6:return[...Xi(0,-.02,1.15),...Ln(.17,.14,.7,61),...lo(-.18,.14,.55,62)];case 7:return[...ti(0,0,1.3,71,5),...gn(-.18,.15,.6,O.shroomCyan),...Ze(0,0,.7,.6,5,72)];case 8:return[$i(0,0,0,.25,81,O.stone,.85),ft(vi(.12,82),O.moss,{p:[.02,.36,.02],s:[1.4,.4,1.2]}),...br(.22,.12,.8,83),...gn(-.2,.15,.6,O.shroom)];case 9:return[...ti(-.15,-.1,1.05,91),...ti(.17,-.05,.85,92),...ti(0,.18,.7,93),...Ze(0,0,.5,.7,6,94)];case 10:return[ft(_e(.07,.1,.5,8),O.white,{p:[0,.25,0]}),Zt(new ko(.3,10,5,0,Math.PI*2,0,Math.PI/2),O.shroom,{p:[0,.48,0],s:[1,.6,1]}),...[0,1,2,3,4].map(t=>ft(Ne(.03,0),O.white,{p:[Math.sin(t*1.3)*.18,.58+t%2*.02,Math.cos(t*1.3)*.18]})),...gn(.2,.15,.7,O.shroom),...Ln(-.2,.12,.7,101)];case 11:return[$i(0,0,0,.17,111,O.stoneDark,.6),...Ye(0,0,.62,.07,O.crystal,[.08,0,-.08]),...Ye(.12,.05,.3,.045,O.crystal,[0,0,-.35]),...Ln(-.18,.14,.6,112)];case 12:return[...dc(0,0,.27,121),...Ln(.33,-.2,.7,122),...gn(-.3,.25,.5,O.shroomCyan)];case 13:return[...so(-.14,-.06,.55,131,O.crystal),...so(.14,.02,.42,132,O.crystal),...so(0,.2,.32,133),...Ln(.2,.25,.6,134)];case 14:return[$i(0,0,0,.22,141,O.stoneDark,.55),...Ye(0,0,.8,.08,O.crystal),...Ye(.14,.06,.5,.06,O.crystal,[0,0,-.3]),...Ye(-.13,.05,.45,.055,O.crystalViolet,[0,0,.32]),...Ye(.02,-.15,.38,.05,O.crystal,[-.35,0,0])];case 15:return[...hd(0,0,1.45,151),...gn(.22,.18,.6,O.shroom),...Ze(0,0,.6,.8,6,152)];case 16:return[...fc(-.05,0,.75,161),ui(.2,0,.12,.16,.12,.14,162),ui(.24,0,-.14,.12,.09,.1,163),...Xi(.2,.22,.7),...br(-.22,.2,.7,164)];case 17:return[...hd(0,0,1.5,171,[O.blossom,O.blossomLight,O.pink]),...Ze(0,0,.6,.8,5,172,O.blossomLight),Zt(Ne(.025,0),O.blossomLight,{p:[.25,.04,.2]}),Zt(Ne(.022,0),O.blossomLight,{p:[-.2,.04,.24]})];case 18:{const t=[ft(_e(.12,.15,.14,8),O.bark,{p:[0,.07,0]}),ft(_e(.11,.11,.01,8),11569770,{p:[0,.145,0]})];for(let e=0;e<8;e++){const i=e/8*Math.PI*2;t.push(...Ua(Math.sin(i)*.32,Math.cos(i)*.32,.9+e%3*.2,e%2?O.shroom:O.shroomCyan,(e%2?1:-1)*.15))}return[...t,...gn(.02,0,.5,O.shroomBlue).map(e=>({...e,geo:e.geo.clone().translate(0,.15,0)})),...Ze(0,0,.35,.6,5,181)]}case 19:return[ui(-.1,0,-.12,.42,.62,.36,191),ui(.16,0,-.18,.26,.4,.3,192),Zt(new Un(.12,.5,.02),9425151,{p:[-.06,.32,.07]}),...dc(0,.22,.2,193),...ti(.3,-.25,.5,194,3)];case 20:return[...ba(0,-.04,.5,.75,201),ui(-.3,0,.25,.14,.1,.12,202),...Xi(.28,.24,.6),...Ln(-.12,.25,.7,203),...br(0,.2,.6,204)];case 21:return[...Ye(-.15,-.1,.7,.07,O.crystal),...Ye(.18,-.08,.55,.06,O.crystalViolet),...Ye(.05,.18,.45,.055,O.crystal,[.2,0,.1]),...gn(-.22,.2,.6,O.shroomCyan),...lo(.25,.22,.6,211,O.crystal,!0),$i(0,0,0,.12,212,O.stoneDark,.6)];case 22:return[...ti(0,0,1.75,221,5),ds(.2,.55,.12),ds(-.18,.75,.08),ds(.08,.95,-.15),...Ze(0,0,.8,.9,7,222)];case 23:return[ft(Be(.6,.08,.6),O.stoneDark,{p:[0,.04,0]}),ft(Be(.46,.08,.46),O.stone,{p:[0,.12,0]}),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([t,e])=>ft(Be(.07,.45,.07),O.stoneLight,{p:[t*.17,.385,e*.17]})),ft(Be(.5,.06,.5),O.stoneLight,{p:[0,.64,0]}),ft(qe(.32,.18,4),O.stoneDark,{p:[0,.76,0],r:[0,Math.PI/4,0]}),Zt(Ne(.1,1),O.star,{p:[0,.32,0]}),...Ln(.32,.3,.6,231)];case 24:{const t=[Zt(_e(.12,.12,.02,10),O.crystal,{p:[0,.01,0]})];for(let e=0;e<7;e++){const i=e/7*Math.PI*2;t.push(...so(Math.sin(i)*.32,Math.cos(i)*.32,.4+e%3*.12,240+e,e%2?O.crystal:void 0))}return[...t,...Ze(0,0,.35,.5,6,241,O.crystal)]}case 25:{const t=[...vr(.6,.08),...Is(.75,.32,251,[O.leafLight,O.leaf,O.grassLight])];for(let e=0;e<10;e++){const i=e/10*Math.PI*2;t.push(ft(qe(.05,.5,4),e%2?O.leafLight:O.leaf,{p:[Math.sin(i)*.3,.5,Math.cos(i)*.3],r:[Math.PI,0,0]}))}return[...t,...Ze(0,0,.3,.8,8,252,O.spirit)]}case 26:return[ui(-.2,0,-.2,.36,.22,.2,261),ui(-.26,.22,-.22,.2,.18,.18,262),...ba(.12,-.12,.34,.6,263),...fc(-.3,.22,.45,264),ui(.25,0,.25,.18,.1,.16,265),...Xi(.05,.25,.65),...br(.3,.05,.6,266),...gn(-.08,.3,.5,O.shroom)];case 27:return[ui(-.05,0,-.18,.62,.95,.4,271),ui(.25,.95,-.2,.22,.2,.22,272),Zt(new Un(.16,.85,.02),10476799,{p:[-.02,.5,.03]}),Zt(new Un(.08,.85,.025),14677247,{p:[-.02,.5,.035]}),...dc(0,.22,.24,273),...ti(-.3,-.25,.6,274,3),...ti(.32,-.28,.5,275,3)];case 28:return[$i(0,0,0,.26,281,O.stoneDark,.5),...Ye(0,0,1.45,.11,O.crystal),...Ye(.16,.08,.7,.07,O.crystalViolet,[0,0,-.25]),...Ye(-.16,.06,.6,.065,O.crystal,[0,0,.28]),...Ye(.03,-.17,.5,.06,O.crystal,[-.3,0,0]),...Ze(0,0,.6,.6,5,282,O.crystal)];case 29:return[...vr(.85,.12),...Is(1.05,.42,291,[O.leaf,O.leafLight,O.leafDark]),ds(.3,.7,.1),...gn(.28,.25,.6,O.shroom),...Ze(0,0,.7,1,8,292)];case 30:{const t=[ft(Be(.7,.08,.7),O.stoneDark,{p:[0,.04,0]}),ft(Be(.54,.1,.54),O.stone,{p:[0,.13,0]})];t.push(...[[-1,0],[1,0]].map(([e])=>ft(Be(.08,.7,.08),O.stoneLight,{p:[e*.2,.53,0]}))),t.push(ft(Be(.62,.07,.14),O.stoneDark,{p:[0,.9,0]})),t.push(ft(Be(.5,.05,.1),O.stone,{p:[0,.8,0]}));for(let e=0;e<3;e++)t.push(ds(-.12+e*.12,.7,0,1.2));return[...t,...Xi(-.3,.3,.55),...Xi(.3,.3,.55),...Ze(0,0,.5,.7,5,301)]}case 31:{const t=[Zt(_e(.2,.25,.02,10),O.spirit,{p:[0,.01,0]}),$i(0,0,0,.14,311,O.stoneDark,.5)];return[[0,.55,0,.2],[.24,.85,.08,.12],[-.22,.95,-.05,.1],[.05,1.2,-.15,.08]].forEach(([i,s,r,o],a)=>{t.push($i(i,s-o*.6,r,o,312+a,a%2?O.stone:O.stoneLight,.8)),t.push(ft(vi(o*.6,316+a),O.moss,{p:[i,s+o*.35,r],s:[1.3,.35,1.3]})),t.push(...Ye(i,r,o*1.6,o*.25,O.spirit).map(l=>({...l,geo:l.geo.clone().rotateX(Math.PI).translate(0,s-o*.4,0)})))}),[...t,...Ze(0,0,.3,.8,6,319,O.spirit)]}case 32:return[ft(_e(.26,.28,.22,10),O.stone,{p:[0,.11,0]}),ft(_e(.29,.29,.04,10),O.stoneLight,{p:[0,.24,0]}),Zt(_e(.2,.2,.02,10),O.star,{p:[0,.23,0]}),Zt(_e(.05,.12,1.3,8),O.star,{p:[0,.9,0]}),...[-1,1].map(t=>ft(Be(.06,.55,.06),O.bark,{p:[t*.24,.5,0]})),ft(Be(.62,.06,.1),O.barkDark,{p:[0,.8,0]}),...Ze(0,0,.6,.8,8,321,O.star)];case 33:return[...vr(.9,.12,6969976),...Is(1.1,.42,331,[O.spirit,8379586,12580838]).map(t=>({...t,glow:!0})),...Ze(0,0,.6,1.1,10,332,O.spirit),...gn(-.28,.25,.6,O.shroomCyan)];case 34:return[ft(Be(.86,.1,.86),O.stoneDark,{p:[0,.05,0]}),ft(Be(.7,.1,.7),O.stone,{p:[0,.15,0]}),ft(Be(.54,.1,.54),O.stoneLight,{p:[0,.25,0]}),...[[-1,-1],[1,-1],[-1,1]].flatMap(([t,e],i)=>fc(t*.22,e*.22,.55+i*.15,341+i).map(s=>({...s,geo:s.geo.clone().translate(0,.3,0)}))),...ba(0,-.22,.32,.6,345).map(t=>({...t,geo:t.geo.clone().translate(0,.3,0)})),Zt(Ne(.09,1),O.crystal,{p:[0,.45,.05]}),...br(.3,.32,.7,346)];case 35:{const t=[];for(let i=0;i<5;i++){const s=i/5*Math.PI*2;t.push(...so(Math.sin(s)*.3,Math.cos(s)*.3,.55+i%2*.25,350+i,O.spirit))}const e=(i,s,r)=>Zt(new sh(.34,.012,3,28,Math.PI*1.4),s,{p:[0,i,0],r:[Math.PI/2+r,0,r]});return[...t,e(.95,O.spirit,.2),e(1.15,O.crystalViolet,-.25),e(1.32,O.shroomCyan,.1),...Ze(0,0,.4,.6,5,355,O.spirit)]}case 36:return[...ba(0,0,.56,1.2,361),...Ye(0,0,.5,.08,O.crystalViolet).map(t=>({...t,geo:t.geo.clone().translate(0,.45,0)})),Zt(Ne(.05,0),O.star,{p:[0,1.5,0]}),...Xi(-.3,.28,.6),...Xi(.3,.28,.6),...Ze(0,0,.9,.7,6,362,O.star)];case 37:return[ft(Fn(new zs(.42,1.25,6),.05,371),O.stoneDark,{p:[0,.62,0]}),ft(Fn(new zs(.22,.6,5),.03,372),O.stone,{p:[.25,.3,.12]}),ft(new zs(.1,.22,6),O.white,{p:[0,1.15,0]}),...Ye(.12,.2,.55,.06,O.crystal,[.3,0,-.3]),...Ye(-.22,.12,.6,.065,O.crystalViolet,[.2,0,.35]),...Ye(.25,-.15,.45,.05,O.crystal,[-.3,0,-.2]),...Ye(-.05,-.28,.4,.05,O.crystal,[-.4,0,0]),...ti(-.32,.3,.45,373,3)];case 38:return[...vr(.7,.08,6969976).map(t=>({...t,geo:t.geo.clone().translate(-.18,0,-.1)})),...Is(.85,.3,381,[O.spirit,8379586,12580838]).map(t=>({...t,glow:!0,geo:t.geo.clone().translate(-.18,0,-.1)})),...vr(.5,.06,6969976).map(t=>({...t,geo:t.geo.clone().translate(.22,0,.12)})),...Is(.62,.22,382,[O.crystalViolet,13220095,14998783]).map(t=>({...t,glow:!0,geo:t.geo.clone().translate(.22,0,.12)})),...gn(.25,-.25,.6,O.shroomCyan),...Ze(0,0,.6,1.1,12,383,O.star)];default:return[...vr(1.2,.17),...Is(1.55,.6,391,[O.leaf,O.leafLight,O.leafDark]),...Is(2,.32,392,[O.leafLight,O.leaf,O.leafDark]),ds(.42,1.1,.2,1.2),ds(-.4,1.25,.1,1.2),ds(.1,1.05,-.45,1.2),...gn(.3,.3,.7,O.shroom),...gn(-.32,.22,.6,O.shroomCyan),...Ze(0,0,.8,1.3,14,393,O.star)]}}const i1=(n=1,t=1)=>ti(0,0,n,t),s1=(n=1,t=1,e)=>lo(0,0,n,t,e),r1=(n=1,t=1)=>Ln(0,0,n,t),o1=(n=1,t=1)=>br(0,0,n,t),a1=(n=1,t=O.shroom)=>gn(0,0,n,t),Zp=(n,t,e=O.stone)=>$i(0,0,0,n,t,e),l1=(n,t,e,i)=>ui(0,0,0,n,t,e,i),c1=(n=1)=>Xi(0,0,n),u1=(n,t,e=O.crystal)=>Ye(0,0,n,t,e),qt={grassLight:7103658,leafLight:507e4,leaf:4148382,leafMid:3621775,trunk:8015976,trunkDark:6175826,stripe:15891590,wall:16250095,plank:13808028,plankDark:11767676,roof:15891590,glowWarm:16758876,flameOuter:16751165,flameInner:16770202,rock:8353704,rockLight:9801149,rockDark:6971796,moss:5929164,flag:15891590,white:16777215},fd={butter:16768370,slateBlue:7309516};function h1(n=1){return[ft(Fn(Ne(.26,0),.06,30+n),qt.rock,{p:[-.04,.17,0],r:[.3,.5,.2],s:[1.1,.8,1]}),ft(Fn(Ne(.16,0),.04,31+n),qt.rockDark,{p:[.2,.1,.13],r:[.6,.1,.9],s:[1,.8,1]}),ft(Fn(Ne(.11,0),.03,32+n),qt.rockLight,{p:[.1,.07,-.21],r:[.2,.8,.1]})]}function f1(){const n=[];for(let t=0;t<8;t++){const e=t/8*Math.PI*2+.2;n.push(ft(Fn(Ne(.065,0),.015,40+t),t%2?qt.rockDark:qt.rock,{p:[Math.cos(e)*.24,.035,Math.sin(e)*.24],s:[1.2,.75,1]}))}n.push(Zt(_e(.15,.17,.03,8),qt.glowWarm,{p:[0,.02,0]}));for(let t=0;t<4;t++){const e=t/4*Math.PI*2+.4;n.push(ft(_e(.026,.034,.3,6),t%2?qt.plankDark:qt.trunk,{p:[Math.cos(e)*.07,.13,Math.sin(e)*.07],r:[-Math.sin(e)*.5,0,Math.cos(e)*.5]}))}return n.push(ft(_e(.05,.05,.3,7),qt.plank,{p:[-.36,.05,.1],r:[Math.PI/2,.5,0]})),n.push(ft(_e(.05,.05,.28,7),qt.plankDark,{p:[.3,.05,-.28],r:[Math.PI/2,-.7,0]})),n}function d1(){return[Zt(qe(.11,.46,6),qt.flameOuter,{p:[0,.27,0]}),Zt(qe(.075,.3,5),qt.glowWarm,{p:[.07,.19,.03],r:[0,.6,0]}),Zt(qe(.07,.26,5),qt.flameInner,{p:[-.06,.17,.04],r:[0,1.2,0]}),Zt(qe(.05,.2,5),qt.flameInner,{p:[.01,.14,.08],r:[0,.3,0]})]}function p1(){const n=[];for(let t=0;t<6;t++){const e=t/6*Math.PI*2;n.push(ft(Fn(Ne(.055,0),.012,60+t),t%2?qt.rockDark:qt.rock,{p:[Math.cos(e)*.18,.03,Math.sin(e)*.18],s:[1.2,.75,1]}))}n.push(Zt(_e(.11,.13,.025,8),qt.glowWarm,{p:[0,.016,0]}));for(let t=0;t<3;t++){const e=t/3*Math.PI*2+.3;n.push(ft(_e(.022,.028,.24,6),t%2?qt.plankDark:qt.trunk,{p:[Math.cos(e)*.055,.1,Math.sin(e)*.055],r:[-Math.sin(e)*.5,0,Math.cos(e)*.5]}))}return n}function m1(){const n=[];for(let t=0;t<5;t++){const e=t/5*Math.PI*2;n.push(ft(Fn(Ne(.055,0),.012,70+t),t%2?O.stoneDark:O.stone,{p:[Math.cos(e)*.09,.03,Math.sin(e)*.09],s:[1.2,.8,1]}))}return n.push(ft(_e(.024,.032,.78,6),O.bark,{p:[0,.42,0]})),n.push(ft(_e(.03,.03,.03,6),O.barkDark,{p:[0,.6,0]})),n.push(ft(_e(.08,.045,.07,7),O.stoneDark,{p:[0,.84,0]})),n.push(Zt(qe(.06,.16,6),O.ember,{p:[0,.95,0]})),n.push(Zt(qe(.035,.11,5),O.warm,{p:[.01,.92,.01]})),n}function g1(){return[ft(Fn(Ne(.2,1),.025,91),3813232,{p:[0,.25,0],s:[1,1.12,.95]}),ft(Fn(Ne(.12,1),.02,92),2366794,{p:[-.06,.1,-.1],s:[1.3,.7,1.1]}),ft(qe(.05,.12,4),2761300,{p:[-.09,.47,0],r:[0,0,.35]}),ft(qe(.05,.12,4),2761300,{p:[.09,.47,0],r:[0,0,-.35]}),Zt(ud(.042,8,6),16774338,{p:[-.075,.3,.165],s:[1,1.25,.6]}),Zt(ud(.042,8,6),16774338,{p:[.075,.3,.165],s:[1,1.25,.6]})]}function _1(){return[ft(vi(.13,95),4164202,{p:[0,.1,0],s:[1.2,.8,1.2]}),ft(vi(.09,96),5613714,{p:[.1,.12,.06]}),Zt(Ne(.022,0),16187290,{p:[-.05,.2,.08]}),Zt(Ne(.018,0),16187290,{p:[.08,.2,-.04]}),Zt(Ne(.02,0),16769162,{p:[.02,.22,.1]})]}function v1(){return[ft(Fn(Ne(.22,0),.04,97),O.stoneDark,{p:[0,.05,0],s:[1.2,.45,1.2]}),ft(new ys(.08,.13,.7,5),O.stone,{p:[0,.4,0]}),Zt(new Un(.03,.4,.012),O.crystal,{p:[0,.42,.105]}),Zt(new Ja(.12),O.crystal,{p:[0,.9,0],s:[.8,1.4,.8]}),Zt(new Ja(.07),14677247,{p:[0,.9,0],s:[.8,1.4,.8]})]}function x1(){const n=(t,e,i,s,r)=>[ft(_e(.05,.05,.36,7),r,{p:[t,e,i],r:[Math.PI/2,s,0]}),ft(_e(.04,.04,.362,7),qt.plank,{p:[t,e,i],r:[Math.PI/2,s,0],s:[1,1,1]})];return[...n(-.06,.05,0,.3,qt.trunk),...n(.06,.05,.02,.3,qt.trunkDark),...n(0,.13,.01,.3,qt.trunk),ft(qe(.012,.08,4),qt.leafMid,{p:[.14,.04,.14],r:[.3,0,.2]})]}function M1(n,t){const e=new hl;for(let i=0;i<10;i++){const s=i%2?t:n,r=i/10*Math.PI*2+Math.PI/2;i===0?e.moveTo(Math.cos(r)*s,Math.sin(r)*s):e.lineTo(Math.cos(r)*s,Math.sin(r)*s)}return e.closePath(),e}function y1(){const n=new eh(M1(.2,.09),{depth:.06,bevelEnabled:!0,bevelThickness:.02,bevelSize:.015,bevelSegments:1}).translate(0,0,-.03);return[ft(_e(.12,.15,.06,8),fd.slateBlue,{p:[0,.03,0]}),Zt(n,fd.butter,{p:[0,.38,0]})]}function S1(){const n=[];for(let t=0;t<6;t++){const e=-.3+t*.12;n.push(ft(hc(.1,.03,.42),t%2?qt.plank:qt.plankDark,{p:[e,.05+Math.sin((t+.5)/6*Math.PI)*.05,0]}))}for(const t of[-.2,.2]){n.push(ft(hc(.72,.03,.03),qt.trunk,{p:[0,.16,t]}));for(const e of[-.32,0,.32])n.push(ft(hc(.03,.14,.03),qt.trunkDark,{p:[e,.1,t]}))}return n}let wa=null;const dd=new Map;function b1(n){switch(n){case ze:return[h1(),.3];case Ve:return[f1(),.15];case ln:return[p1(),.12];case Kn:return[m1(),.3];case Yn:return[g1(),.2];case Ii:return[_1(),.15];case ri:return[v1(),.3];case Di:return[x1(),.12];case Hn:return[y1(),.1];case En:return[S1(),.1];default:{const t=Math.min(Ie,Math.max(0,n));return[n1(t),[.2,.25,.25,.3,.4,.5,.4,.6][t]??.6]}}}function w1(n){let t=dd.get(n);if(!t){const[e,i]=b1(n);t=Jp(e,i),dd.set(n,t)}return t}function pc(n){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);for(const[s,r]of n)i.addColorStop(s,r);return e.fillStyle=i,e.fillRect(0,0,64,64),new Qu(t)}let mc=null;function E1(){return mc||(mc={geo:new zr(1,1).rotateX(-Math.PI/2),shadow:new vn({map:pc([[0,"rgba(14,12,40,0.5)"],[.55,"rgba(14,12,40,0.24)"],[1,"rgba(14,12,40,0)"]]),transparent:!0,depthWrite:!1,toneMapped:!1}),pool:new vn({map:pc([[0,"rgba(255,176,96,0.62)"],[.4,"rgba(255,150,80,0.26)"],[1,"rgba(255,130,70,0)"]]),transparent:!0,depthWrite:!1,blending:Ki,toneMapped:!1}),soft:new vn({map:pc([[0,"rgba(255,186,120,0.2)"],[.45,"rgba(255,160,100,0.08)"],[1,"rgba(255,140,90,0)"]]),transparent:!0,depthWrite:!1,blending:Ki,toneMapped:!1})}),mc}function T1(){return wa||(wa={material:new gs({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),glowMaterial:new vn({vertexColors:!0,toneMapped:!1}),flame:Jp(d1(),0)},wa)}function A1(n){return n===ze?.56:n===Ve?.6:n===ln?.45:n===Kn?.35:n===Yn?.5:n===Ii||n===Hn?.4:n===ri||n===Di?.5:n===En?.8:[.42,.62,.7,.72,.86,.94,.98][n]??1}function C1(n){return n===ze?1.45:n===Ve||n===ln||n===Kn||n>=En?1:[1.6,1.35,1.2,1.2,1.12,1.06,1][n]??1}function gc(n,t,e=!0){const i=T1(),s=new gi,r=new gi;r.scale.setScalar(C1(n)),s.add(r);const o=w1(n),a=new Se(o.body,t??i.material);a.castShadow=!t,a.receiveShadow=!t,r.add(a);const l=o.glow?new Se(o.glow,t??i.glowMaterial):null;l&&a.add(l);const c=Math.random()*10,u=[];let d=1,h=null,f=0;if(!t){const x=E1(),p=new Se(x.geo,x.shadow);p.scale.setScalar(A1(n)),p.position.y=.004,p.renderOrder=1,s.add(p);const m=n===Ve||n===ln||n===Kn||n===ri,y=e?Ld(n):0;if(y>0){h=new Se(x.geo,m?x.pool:x.soft),f=1.2+y*1,h.scale.setScalar(f),h.position.y=.006,h.renderOrder=1,s.add(h);const T=h;(n===Ve||n===ln)&&u.push(M=>T.scale.setScalar(f*(.75+.25*d)*(1+Math.sin(M*9+c)*.04+Math.sin(M*13.7)*.03)))}}if(n===Ve||n===ln){const x=new Se(i.flame.glow,t??i.glowMaterial),p=n===ln?.62:.72;r.add(x),u.push(m=>{const y=p*(.55+.45*d);x.scale.set(y,y*(1+Math.sin(m*11+c)*.12+Math.sin(m*17.3)*.08),y),x.rotation.y=m*.8})}if(n===Kn&&l&&u.push(x=>{const p=d>.25||Math.sin(x*23+c)+Math.sin(x*7.1)>-.6;l.visible=p,h&&h.scale.setScalar(f*(p?.8+.2*d:.5))}),n===0||n===1){const x=n===0?.03:.015;u.push(p=>a.rotation.z=Math.sin(p*1.6+c)*x)}if(n===Yn&&u.push(x=>{a.position.y=Math.abs(Math.sin(x*2.4+c))*.05,a.rotation.z=Math.sin(x*1.7+c)*.08,l&&(l.scale.y=Math.sin(x*.9+c*3)>.96?.15:1)}),n===Ii){const x=[],p=new fl(.022,0),m=t??new vn({color:15925132,toneMapped:!1,transparent:!0});for(let y=0;y<5;y++){const T=new Se(p,m);r.add(T),x.push(T)}u.push(y=>{x.forEach((T,M)=>{const w=y*(.9+M*.17)+M*1.3+c,b=.14+.06*Math.sin(y*1.3+M);T.position.set(Math.cos(w)*b,.28+.1*Math.sin(y*2.1+M*2),Math.sin(w)*b),T.visible=d>.2||Math.sin(y*13+M*5)>0})})}if(n===ri&&!t&&e){const x=new zs(.16,1.6,12,1,!0).rotateZ(Math.PI/2).translate(.8,0,0),p=new vn({color:11066623,transparent:!0,opacity:.22,depthWrite:!1,side:hi,blending:Ki,toneMapped:!1}),m=new gi;m.add(new Se(x,p),new Se(x,p).rotateY(Math.PI)),m.position.y=.9,r.add(m),u.push(y=>{m.rotation.y=y*1.2+c,p.opacity=.1+.14*d})}n===Hn&&u.push(x=>{l&&(l.rotation.y=x*1.6,l.position.y=Math.sin(x*2.2)*.04)});const g=Jn(n)?x=>d=Math.max(0,Math.min(1,x)):void 0;return{root:s,tick:u.length?x=>u.forEach(p=>p(x)):void 0,setFuel:g}}const Le={linear:n=>n,inQuad:n=>n*n,outCubic:n=>1-(1-n)**3,inCubic:n=>n**3,inOutSine:n=>-(Math.cos(Math.PI*n)-1)/2,inOutCubic:n=>n<.5?4*n*n*n:1-(-2*n+2)**3/2,outBack:n=>1+2.70158*(n-1)**3+1.70158*(n-1)**2};class R1{constructor(){this.list=[],this.speed=1}get active(){return this.list.length>0}run(t,e,i=Le.outCubic){return new Promise(s=>{const r=t*this.speed;if(r<=0){e(1),s();return}e(i(0)),this.list.push({elapsed:0,duration:r,ease:i,update:e,resolve:s})})}wait(t){return this.run(t,()=>{},Le.linear)}tick(t){if(!this.list.length)return;const e=[];for(const i of this.list){i.elapsed+=t;const s=Math.min(1,i.elapsed/i.duration);i.update(i.ease(s)),s>=1&&e.push(i)}if(e.length){this.list=this.list.filter(i=>!e.includes(i));for(const i of e)i.resolve()}}finishAll(){const t=this.list;this.list=[];for(const e of t)e.update(e.ease(1)),e.resolve()}}const P1=1,L1=.62,Io=-.36,Go={meadow:{top:6258492,edge:5205043,soil:7618607,soilLow:3809316,ringTop:5271350,stone:7170692,pines:.38,snow:!1},forest:{top:4616250,edge:3825457,soil:6961710,soilLow:3546914,ringTop:3957299,stone:6775934,pines:.65,snow:!1},snow:{top:14673908,edge:13227756,soil:7307182,soilLow:3489644,ringTop:13819118,stone:10397384,pines:.42,snow:!0},river:{top:6258492,edge:5205043,soil:7618607,soilLow:3809316,ringTop:5271350,stone:7170692,pines:.32,snow:!1}};function oh(n=yn){return n/2+P1}function I1(n=yn){return Io-.04}function Qp(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function D1(n,t,e,i){const s=n.getAttribute("normal"),r=n.getAttribute("position"),o=new Float32Array(s.count*3),a=new Lt(t.top),l=new Lt(t.edge),c=new Lt(t.soil),u=new Lt(t.soilLow),d=new Lt;for(let h=0;h<s.count;h++){const f=r.getY(h);s.getY(h)>.6?d.copy(a):f>i-.09?d.copy(l):d.copy(c).lerp(u,Dg.clamp((i-.09-f)/Math.max(.01,i-.09-e),0,1)),o.set([d.r,d.g,d.b],h*3)}return n.setAttribute("color",new An(o,3)),n}function Ho(n,t,e,i){const s=new zo(n,t,n,1,.045).toNonIndexed();return s.translate(0,e-t/2,0),s.deleteAttribute("uv"),D1(s,i,e-t,e)}function N1(n="meadow"){return Ho(.95,L1,0,Go[n])}function U1(){return Ho(1,.32,0,Go.meadow)}function F1(n){const t=["position","normal","color"],e=new Ke;for(const i of t){const s=n.reduce((a,l)=>a+l.getAttribute(i).array.length,0),r=new Float32Array(s);let o=0;for(const a of n){const l=a.getAttribute(i).array;r.set(l,o),o+=l.length}e.setAttribute(i,new An(r,3))}return e}function jp(n,t,e,i,s,r,o){const a=(l,c=1)=>ss(l,n+(o()-.5)*.3,t,e+(o()-.5)*.3,o()*6,c);if(i<r.pines){const l=i1(.85+o()*.45,s);return r.snow&&l.forEach((c,u)=>u>0&&u%2===0&&(c.color=15660027)),a(l)}return i<r.pines+.1?a(s1(.9+o()*.3,s,o()<.5?O.pink:O.white)):i<r.pines+.18?a([Zp(.12+o()*.06,s,r.stone),...o1(.6,s+1).map(l=>({...l,geo:l.geo.clone().translate(.15,0,.1)}))]):i<r.pines+.25?a(r.snow?u1(.4+o()*.2,.05):a1(.8+o()*.3,o()<.5?O.shroom:O.shroomCyan)):i<r.pines+.29?a(c1(.7)):i<r.pines+.45?a(r1(1+o()*.4,s)):[]}function O1(n,t){const e=Go[t],i=Qp(n*131+7+t.length*17),s=[],r=[],o=n/2,a=[];for(let l=-1;l<=n;l++)for(let c=-1;c<=n;c++)(l===-1||c===-1||l===n||c===n)&&a.push([l,c]);return a.forEach(([l,c],u)=>{const d=l+.5-o,h=c+.5-o,f=(l===-1||l===n)&&(c===-1||c===n),g=i();if(!f&&g<.12)return;const x=g>.82,p=!x&&i()<.1,m=x?-.17:-.02,y=p?{top:e.stone,edge:new Lt(e.stone).multiplyScalar(.85).getHex(),soil:new Lt(e.stone).multiplyScalar(.62).getHex(),soilLow:2894404}:{...e,top:e.ringTop},T=Ho(.95,m-Io+.25,m,y);T.translate(d,0,h),s.push(T),p?i()<.5&&r.push(...ss([l1(.32,.2,.28,1200+u)],d,m,h,i()*3,1)):r.push(...jp(d,m,h,i(),1e3+u,e,i))}),{blocks:s,parts:r}}function B1(n,t){if(!t)return[];const e=n/2,i=[],s=(r,o,a)=>{i.push(Zt(new Un(a?.5:.04,.34,a?.04:.5),8372479,{p:[r,-.19,o]}))};for(let r=0;r<n;r++)t[r]===Dn&&s(r+.5-e,-e-.02,!0),t[(n-1)*n+r]===Dn&&s(r+.5-e,e+.02,!0);for(let r=0;r<n;r++)t[r*n]===Dn&&s(-e-.02,r+.5-e,!1),t[r*n+n-1]===Dn&&s(e+.02,r+.5-e,!1);return i}function k1(n,t){const e=Go[t],i=Qp(n*71+3),s=[],r=[],o=oh(n);for(let a=0;a<9;a++){const l=a/9*Math.PI*2+i()*.5,c=o+1.6+i()*3.2,u=Math.cos(l)*c,d=Math.sin(l)*c,h=1+Math.floor(i()*3);[[0,0],[1,0],[0,1],[1,1]].slice(0,h).forEach(([g,x],p)=>{const m=-.08-i()*.12,y=Ho(.92,m-Io+.2,m,{...e,top:e.ringTop});y.translate(u+g,0,d+x),s.push(y);const T=i();if(p===0&&a%4===1){r.push(Zt(qe(.06,.16,5),O.ember,{p:[u+g,m+.08,d+x]}),Zt(qe(.035,.1,4),O.warm,{p:[u+g,m+.06,d+x]}));const M=Array.from({length:5},(w,b)=>{const C=Zp(.035,400+b,e.stone);return{...C,geo:C.geo.clone().translate(Math.cos(b/5*Math.PI*2)*.11,0,Math.sin(b/5*Math.PI*2)*.11)}});r.push(...e1(M,[u+g,m,d+x]))}else r.push(...jp(u+g,m,d+x,T*.8,2e3+a*4+p,e,i))})}return{blocks:s,parts:r}}function pd(n,t){const e=(s,r)=>{const o=new hl;return o.moveTo(-s+r,-s),o.lineTo(s-r,-s),o.quadraticCurveTo(s,-s,s,-s+r),o.lineTo(s,s-r),o.quadraticCurveTo(s,s,s-r,s),o.lineTo(-s+r,s),o.quadraticCurveTo(-s,s,-s,s-r),o.lineTo(-s,-s+r),o.quadraticCurveTo(-s,-s,-s+r,-s),o},i=e(n+t,.6+t);return i.holes.push(e(n,.6)),new nh(i,6).rotateX(-Math.PI/2)}function z1(){const t=new Uint8Array(65536);for(let i=0;i<128;i++)for(let s=0;s<128;s++){const r=s/128*Math.PI*2,o=i/128*Math.PI*2,a=Math.sin(r*3+Math.cos(o*2))*.35+Math.sin(r*7+o*5)*.12,l=Math.cos(o*4+Math.sin(r*2))*.35+Math.cos(o*9-r*3)*.1,c=(i*128+s)*4;t[c]=Math.round(128+a*127),t[c+1]=Math.round(128+l*127),t[c+2]=255,t[c+3]=255}const e=new Ju(t,128,128);return e.wrapS=e.wrapT=Ha,e.repeat.set(30,30),e.needsUpdate=!0,e}function G1(n=yn){const t=new gi,e=new gs({vertexColors:!0,roughness:.92,metalness:0,flatShading:!0}),i=new vn({vertexColors:!0,toneMapped:!1}),s=z1(),r=new Se(new zr(220,220).rotateX(-Math.PI/2),new gs({color:858684,roughness:.28,metalness:.35,normalMap:s,normalScale:new ct(.35,.35)}));r.position.y=Io,r.receiveShadow=!0,t.add(r);const o=[0,1].map(()=>new vn({color:9417983,transparent:!0,opacity:.1,depthWrite:!1,toneMapped:!1})),a=o.map(p=>new Se(pd(1,.06),p));for(const p of a)p.position.y=Io+.006,t.add(p);let l="meadow",c,u=n;const d=[],h=()=>{for(const E of d)t.remove(E),E.geometry.dispose();d.length=0;const p=Go[l],m=oh(u),y=new Se(Ho(u+.1,.3,-.18,{top:p.soilLow,edge:p.soilLow,soil:p.soilLow,soilLow:1840152}),e),T=O1(u,l),M=k1(u,l),w=new Se(F1([...T.blocks,...M.blocks]),e);w.castShadow=!0,w.receiveShadow=!0;const b=[...T.parts,...M.parts,...l==="river"?B1(u,c):[]],C=new Se(Za(b.filter(E=>!E.glow),.15,-.02),e);C.castShadow=!0,C.receiveShadow=!0;const _=new Se(Za(b.filter(E=>E.glow),0),i);d.push(y,w,C,_),t.add(y,w,C,_),a.forEach((E,R)=>{E.geometry.dispose(),E.geometry=pd(m+.2+R*.3,.035)})},f=p=>{u=p,c=void 0,h()},g=(p,m,y)=>{l=p,c=m,u=y,h()};return f(n),{group:t,tick:p=>{s.offset.set(p*.004,p*.0025),a.forEach((m,y)=>{const T=(p*.12+y*.5)%1;m.scale.setScalar(1+T*.12),o[y].opacity=.05*Math.sin(T*Math.PI)})},setSize:f,setIsland:g}}let _c=null,vc=null;const xc={iso:{azimuth:Math.PI/4,elevation:Math.PI/6},cozy:{azimuth:0,elevation:.88,fov:30}},Os=1,H1=4,V1=7,Ds=Math.PI/2,Mc=Math.max(...Bs)**2;let Ns=yn,ps=Ns*Os/2;function ce(n){const{x:t,y:e}=xs(n,Ns);return new P((t+.5)*Os-ps,0,(e+.5)*Os-ps)}const W1=16773560,X1=new Lt(1.28,1.24,1.05),$1=new Lt(1.42,1.2,.72),Y1=new Lt(1.25,.78,.62),q1=new Lt(1.22,1.18,1.3),K1=new Lt(1.16,1.2,1.1),J1=new Lt(1.12,1,.82),Z1=new Lt(.36,.42,.66),yc=726064,xr={sky:new Lt(6123444),ground:new Lt(1777984),moon:new Lt(11123967)},Sc={sky:new Lt(16769224),ground:new Lt(8022650),moon:new Lt(16761998)},md=[16765802,16743832,9430783,12759295,11075482,16777215],Q1=new Lt(.45,.62,1.25),j1=new Lt(1.25,1.35,1.55),tb=10481864,bc=.62,eb=[15655622,14865328,qt.grassLight],nb=[qt.rockLight,qt.rock,14865328];function ib(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Qu(n);return i.colorSpace=_n,i}function sb(){const n=document.createElement("canvas");n.width=4,n.height=64;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0.95)"),t.fillStyle=e,t.fillRect(0,0,4,64);const i=new Qu(n);return i.colorSpace=_n,i}class rb{constructor(t,e){this.container=t,this.scene=new pf,this.ortho=new Lo(-5,5,5,-5,.1,120),this.perspective=new zn(30,1,.5,200),this.camera=this.ortho,this.tweens=new R1,this.tileBase=[],this.side=yn,this.lit=null,this.spin=0,this.spinGen=0,this.fitOffset=new P(0,10,10),this.pieces=new Map,this.fuel=new Map,this.fireLights=[],this.grown=0,this.dawnK=0,this.terrain=null,this.focusK=0,this.focusAt=new P,this.pieceLayer=new gi,this.fxLayer=new gi,this.raycaster=new Z_,this.groundPlane=new Yi(new P(0,1,0),0),this.ghost=null,this.rest=null,this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.frames=[],this.view="iso",this.arrows=new Map,this.pieceYaw=0,this.insets={top:0,right:0,bottom:0,left:0},this.reducedMotion=!1,this.dirty=!0,this.lastFrame=0,this.lastIdleRender=0,this.clock=0,this.shake=0,this.rafId=0,this.width=0,this.height=0,this.baseCamPos=new P,this.ringPool=[],this.particlePool=[],this.glowPool=[],this.animGen=0,this.performing=!1,this.leaning=new Map,this.lost=!1,this.dprQuery=null,this.tileStyle="meadow",this.handleContextLost=s=>{s.preventDefault(),this.lost=!0,this.stopShake()},this.handleContextRestored=()=>{this.lost=!1,this.dirty=!0,this.onContextRestored?.()},this.onPixelRatioChange=()=>{this.watchPixelRatio(),this.resize()},this.renderer=e??new KS({antialias:!0,alpha:!0,powerPreference:"high-performance"});const i=Math.min(window.innerWidth,window.innerHeight)<700;this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=uo,this.renderer.outputColorSpace=_n,this.renderer.toneMapping=Fu,this.renderer.toneMappingExposure=1,this.renderer.setClearColor(yc,1),this.canvas=this.renderer.domElement,this.canvas.className="board-canvas",t.appendChild(this.canvas),this.canvas.addEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this.ghostMaterial=new gs({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.6,depthWrite:!1,roughness:.9}),this.restMaterial=new gs({color:13815280,transparent:!0,opacity:.8,depthWrite:!1,roughness:.8,flatShading:!0}),this.buildLights(i),this.scene.fog=new Ku(yc,30,52),Ns=yn,ps=Ns*Os/2,this.side=Ns,this.world=G1(Ns),this.scene.add(this.world.group),this.tileMaterial=new gs({vertexColors:!0,roughness:.95,flatShading:!0}),this.buildTiles(),this.buildTerrain(),this.scene.add(this.pieceLayer,this.fxLayer),this.buildFxPools(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.watchPixelRatio(),this.resize(),this.loop=this.loop.bind(this),this.rafId=requestAnimationFrame(this.loop)}buildLights(t){this.hemi=new If(xr.sky,xr.ground,1.4),this.scene.add(this.hemi);const e=new sc(xr.moon,1.2);this.sun=e,e.position.set(-8,9,6),e.castShadow=!0,e.shadow.mapSize.set(t?1024:2048,t?1024:2048);const i=e.shadow.camera;i.left=-10,i.right=10,i.top=10,i.bottom=-10,i.near=1,i.far=40,e.shadow.bias=-5e-4,e.shadow.normalBias=.03,e.shadow.radius=10,e.shadow.blurSamples=16,this.scene.add(e);for(let s=0;s<H1;s++){const r=new Y_(16748352,0,3,1.3);this.scene.add(r),this.fireLights.push(r)}}updateFireLights(){const t=[];for(const[i,s]of this.pieces){let r=null;if(s.piece===Ve)r={radius:Lr(this.side)+this.grown,y:.4,color:16748352,power:1+this.grown*.25};else if(Tn[s.piece]){const u=Tn[s.piece].radius;s.piece===Ii?r={radius:u,y:.3,color:14286730,power:.55}:s.piece===ri?r={radius:u+1,y:.95,color:16767392,power:1}:r={radius:u,y:s.piece===Kn?.95:.35,color:16748352,power:1}}if(!r)continue;const o=this.fuel.get(i)??1,a=this.reducedMotion?1:.92+Math.sin(this.clock*9+i)*.05+Math.sin(this.clock*23+i*3)*.03,l=s.model.root.position.clone();l.y+=r.y*s.model.root.scale.y;const c=s.piece===Ve?1:.45+.55*o;t.push({at:l,power:r.power*c*a*s.model.root.scale.y,range:r.radius+1.9,color:r.color})}t.sort((i,s)=>s.range-i.range);const e=1-.65*this.dawnK;this.fireLights.forEach((i,s)=>{const r=t[s];i.intensity=r?V1*r.power*e:0,r&&(i.position.copy(r.at),i.distance=r.range,i.color.setHex(r.color))})}setCampfireGrown(t){this.grown=t,this.dirty=!0}setDawn(t,e=!1){const i=t?1:0;if(i===this.dawnK)return;if(e||this.reducedMotion){this.dawnK=i,this.applyDawn();return}const s=this.dawnK;this.tweens.run(1400,r=>{this.dawnK=s+(i-s)*r,this.applyDawn()},Le.inOutSine)}applyDawn(){const t=this.dawnK;this.hemi.color.lerpColors(xr.sky,Sc.sky,t),this.hemi.groundColor.lerpColors(xr.ground,Sc.ground,t),this.hemi.intensity=1.4+.4*t,this.sun.color.lerpColors(xr.moon,Sc.moon,t),this.sun.intensity=1.2+.9*t,this.dirty=!0}setTerrain(t){this.terrain=t?[...t]:null,this.layTerrain(),this.applyHighlights()}layTerrain(){const t=new fe;let e=0,i=0;this.terrain?.forEach((s,r)=>{if(r>=this.cellCount)return;const o=ce(r);if(s===Dn)this.water.setMatrixAt(e++,t.makeTranslation(o.x,0,o.z));else if(Tc(s)){const a=s/ve.thawMoves;this.ice.setMatrixAt(i++,t.compose(new P(o.x,0,o.z),new Mi,new P(1,.3+.7*a,1)))}}),this.water.count=e,this.ice.count=i,this.water.instanceMatrix.needsUpdate=!0,this.ice.instanceMatrix.needsUpdate=!0,this.water.visible=e>0,this.ice.visible=i>0,this.dirty=!0}buildTerrain(){const t=new gs({color:4161504,roughness:.2,metalness:.15,transparent:!0,opacity:.88,flatShading:!0});this.water=new ma(new Un(1,.05,1).translate(0,-.015,0),t,Mc);const e=new gs({color:14479359,roughness:.3,metalness:.05,transparent:!0,opacity:.9,flatShading:!0});this.ice=new ma(new zo(.9,.14,.9,1,.03).translate(0,.06,0),e,Mc);for(const i of[this.water,this.ice])i.count=0,i.visible=!1,i.receiveShadow=!0,i.frustumCulled=!1,this.scene.add(i)}setIsland(t,e){this.world.setIsland(t,e,this.side),this.tileStyle=t,this.buildTiles(),this.applyHighlights()}fireworks(t,e){this.reducedMotion&&(t=Math.min(t,1));for(let i=0;i<t;i++){const s=e!==void 0?ce(e):new P(0,0,0),r=e!==void 0?1.2:ps*.8,o=s.x+(Math.random()*2-1)*r,a=s.z+(Math.random()*2-1)*r,l=2.2+Math.random()*1.2,c=md[Math.floor(Math.random()*md.length)];this.tweens.run(i*220+1,()=>{}).then(()=>{const u=this.particlePool.find(h=>!h.visible);if(!u)return;const d=u.material;d.color.set(16774352),d.opacity=1,u.visible=!0,u.scale.setScalar(.8),this.tweens.run(520,h=>u.position.set(o+Math.sin(h*9)*.03,.2+(l-.2)*h,a),Le.outCubic).then(()=>{u.visible=!1,this.sparks(new P(o,l,a),[c,c,16777215],18,1.6)})})}this.dirty=!0}sparks(t,e,i,s,r=1e3){this.reducedMotion&&(i=Math.ceil(i/3));for(let o=0;o<i;o++){const a=this.particlePool.find(f=>!f.visible);if(!a)return;const l=a.material;l.color.set(e[o%e.length]);const c=Math.random()*2-1,u=Math.random()*Math.PI*2,d=Math.sqrt(1-c*c),h=new P(d*Math.cos(u),c,d*Math.sin(u)).multiplyScalar(s*(.75+Math.random()*.4));a.visible=!0,this.tweens.run(r,f=>{const g=f*(r/1e3);a.position.set(t.x+h.x*g,t.y+h.y*g-1.6*g*g,t.z+h.z*g),a.scale.setScalar(.9*(1-f*.6)),l.opacity=1-f*f},Le.linear).then(()=>a.visible=!1)}}async focus(t,e=650){const i=this.focusK,s=t===null?0:1;if(t!==null&&this.focusAt.copy(ce(t)).setY(.6),this.reducedMotion){this.focusK=s,this.applyFocus();return}await this.tweens.run(e,r=>{this.focusK=i+(s-i)*r,this.applyFocus()},Le.inOutCubic)}applyFocus(){const t=this.focusK;this.camera.position.copy(this.baseCamPos).addScaledVector(this.focusAt,t),this.camera===this.ortho&&(this.ortho.zoom=1+.8*t,this.ortho.updateProjectionMatrix()),this.dirty=!0}get cellCount(){return this.side*this.side}buildTiles(){this.tiles&&(this.scene.remove(this.tiles),this.tiles.geometry.dispose(),this.tiles.dispose()),this.tileBase.length=0;const t=new ma(N1(this.tileStyle),this.tileMaterial,this.cellCount),e=new fe;for(let i=0;i<this.cellCount;i++){const s=ce(i);e.makeTranslation(s.x,0,s.z),t.setMatrixAt(i,e);const{x:r,y:o}=xs(i,this.side),a=Math.sin(i*91.17)*43758.5453,l=a-Math.floor(a),c=((r+o)%2?.93:1)*(.97+l*.05),u=l>.75?.04:0;this.tileBase.push(new Lt(c*(1+u),c,c*(.97-u))),t.setColorAt(i,this.tileBase[i])}t.receiveShadow=!0,t.castShadow=!0,this.scene.add(t),this.tiles=t}setBoardSize(t){if(t!==this.side){this.cancelAnimations();for(const e of[...this.pieces.keys()])this.removePiece(e);this.clearGhost(),this.highlight={hover:null,cursor:null,merge:[],blocked:null},this.lit=null,this.setSuggestions([]),this.side=t,Ns=t,ps=t*Os/2,this.terrain=null,this.layTerrain(),this.buildTiles(),this.applyHighlights(),this.world.setSize(t),this.fitCamera()}}getBoardSize(){return this.side}buildFxPools(){const t=new _o(.42,.5,32);t.rotateX(-Math.PI/2);for(let a=0;a<6;a++){const l=new Se(t,new vn({color:16777215,transparent:!0,depthWrite:!1,toneMapped:!1}));l.visible=!1,this.ringPool.push(l),this.fxLayer.add(l)}const e=new ih(.06,0);for(let a=0;a<150;a++){const l=new Se(e,new vn({color:16777215,transparent:!0,toneMapped:!1}));l.visible=!1,this.particlePool.push(l),this.fxLayer.add(l)}const i=new _o(.585,.675,4,1,Math.PI/4);i.rotateX(-Math.PI/2);for(let a=0;a<12;a++){const l=new Se(i,new vn({color:16777215,transparent:!0,depthWrite:!1,blending:Ki,toneMapped:!1}));l.visible=!1,l.renderOrder=2,this.frames.push(l),this.fxLayer.add(l)}const s=new _o(.5,.57,4,1,Math.PI/4);s.rotateX(-Math.PI/2),this.suggest=new ma(s,new vn({color:tb,transparent:!0,opacity:bc,depthWrite:!1,blending:Ki,toneMapped:!1}),Mc),this.suggest.count=0,this.suggest.visible=!1,this.suggest.renderOrder=2,this.suggest.frustumCulled=!1,this.fxLayer.add(this.suggest);const r=ib(),o=sb();for(let a=0;a<3;a++){const l=new t_(new Tp({map:r,color:16765802,transparent:!0,depthWrite:!1,blending:Ki,toneMapped:!1})),c=new Se(new ys(.42,.48,2.2,20,1,!0).translate(0,1.1,0),new vn({map:o,color:16765802,transparent:!0,depthWrite:!1,side:hi,blending:Ki,toneMapped:!1}));l.visible=c.visible=!1,this.glowPool.push({sprite:l,column:c}),this.fxLayer.add(l,c)}}isContextLost(){return this.lost||this.renderer.getContext().isContextLost()}markDirty(){this.dirty=!0}setReducedMotion(t){this.reducedMotion=t,this.tweens.speed=t?.35:1;for(const e of this.frames){const i=e.material;i.opacity=i.userData.base??1}this.suggest.material.opacity=bc,this.updateLean(),this.dirty=!0}setView(t){this.resetLean(),this.view=t,this.pieceYaw=t==="cozy"?-.6:0;for(const e of this.pieces.values())e.model.root.rotation.y=this.pieceYaw;this.ghost&&(this.ghost.model.root.rotation.y=this.pieceYaw),this.fitCamera()}getView(){return this.view}setInsets(t){Object.keys(t).every(i=>Math.abs(t[i]-this.insets[i])<.5)||(this.insets={...t},this.fitCamera())}resize(){const t=this.container.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),i=Math.max(1,Math.floor(t.height));!this.applyPixelRatio()&&e===this.width&&i===this.height||(this.width=e,this.height=i,this.renderer.setSize(e,i,!1),this.fitCamera(),this.renderNow())}applyPixelRatio(){const t=Math.min(window.innerWidth,window.innerHeight)<700,e=Math.min(window.devicePixelRatio||1,t?2:1.75);return e===this.renderer.getPixelRatio()?!1:(this.renderer.setPixelRatio(e),!0)}watchPixelRatio(){this.dprQuery?.removeEventListener("change",this.onPixelRatioChange),this.dprQuery=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,this.dprQuery?.addEventListener?.("change",this.onPixelRatioChange)}renderNow(){document.hidden||this.lost||(this.updateFireLights(),this.renderer.render(this.scene,this.camera),this.dirty=!1)}fitCamera(){const t=xc[this.view],e=this.width,i=this.height,s=this.insets,r=Math.max(60,e-s.left-s.right),o=Math.max(60,i-s.top-s.bottom),a=!t.fov&&r/o<.85?.6:t.elevation,l=new P(Math.sin(t.azimuth)*Math.cos(a),Math.sin(a),Math.cos(t.azimuth)*Math.cos(a)),c=[],u=!t.fov&&r/o>1.1,d=u?oh(this.side)+.1:ps+.22,h=u?[I1(this.side),2]:[-.45,1.8];for(const p of[-d,d])for(const m of[-d,d])for(const y of h)c.push(new P(p,y,m));const f=s.left+r/2,g=s.top+o/2,x=1.04;if(t.fov){const p=this.perspective;p.fov=t.fov,p.aspect=e/i,p.clearViewOffset(),p.updateProjectionMatrix();let m=24,y={minX:0,maxX:0,minY:0,maxY:0};for(let C=0;C<10;C++){p.position.copy(l).multiplyScalar(m),p.lookAt(0,0,0),p.updateMatrixWorld(),y={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const E of c){const R=E.clone().project(p);y.minX=Math.min(y.minX,R.x),y.maxX=Math.max(y.maxX,R.x),y.minY=Math.min(y.minY,R.y),y.maxY=Math.max(y.maxY,R.y)}if(C===9)break;const _=Math.max((y.maxX-y.minX)/(2*r/e),(y.maxY-y.minY)/(2*o/i));m*=_*x}const T=(y.minX+y.maxX)/2,M=(y.minY+y.maxY)/2,w=f/e*2-1,b=1-g/i*2;p.setViewOffset(e,i,(T-w)*e/2,(b-M)*i/2,e,i),p.updateProjectionMatrix(),this.camera=p,this.fitOffset.copy(l).multiplyScalar(m)}else{const p=this.ortho;p.position.copy(l).multiplyScalar(30),p.lookAt(0,0,0),p.updateMatrixWorld();const m=p.matrixWorldInverse;let y=1/0,T=-1/0,M=1/0,w=-1/0;for(const E of c){const R=E.clone().applyMatrix4(m);y=Math.min(y,R.x),T=Math.max(T,R.x),M=Math.min(M,R.y),w=Math.max(w,R.y)}const b=Math.max((T-y)/r,(w-M)/o)*x,C=(y+T)/2,_=(M+w)/2;p.left=C-f*b,p.right=p.left+e*b,p.top=_+g*b,p.bottom=p.top-i*b,p.updateProjectionMatrix(),this.camera=p,this.fitOffset.copy(l).multiplyScalar(30)}this.applySpin()}applySpin(){this.camera.position.copy(this.fitOffset).applyAxisAngle(new P(0,1,0),this.spin),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.baseCamPos.copy(this.camera.position),this.dirty=!0}getSpinQuarter(){return(Math.round(this.spin/Ds)%4+4)%4}rotate(t){this.glideSpin(Math.round(this.spin/Ds)*Ds+t*Ds)}dragSpin(t){this.spinGen++,this.spin=t,this.applySpin()}getSpin(){return this.spin}endSpin(t=0){const e=Math.abs(t)>2.5?Math.sign(t)*.5:0;this.glideSpin(Math.round(this.spin/Ds+e)*Ds)}glideSpin(t){const e=++this.spinGen,i=this.spin;if(Math.abs(t-i)<1e-4||this.reducedMotion){this.spin=t,this.applySpin();return}this.tweens.run(Math.min(420,240+Math.abs(t-i)*120),s=>{e===this.spinGen&&(this.spin=i+(t-i)*s,this.applySpin())},Le.inOutSine)}tilePixelSize(){const t=this.worldToScreen(new P(-.5,0,0)),e=this.worldToScreen(new P(.5,0,0));return Math.hypot(t.x-e.x,t.y-e.y)}worldToScreen(t){const e=t.clone().project(this.camera),i=this.canvas.getBoundingClientRect();return{x:i.left+(e.x+1)/2*i.width,y:i.top+(1-e.y)/2*i.height}}cellToScreen(t,e=.5){return this.worldToScreen(ce(t).setY(e))}screenAxes(){const t=this.worldToScreen(new P(0,0,0)),e=this.worldToScreen(new P(1,0,0)),i=this.worldToScreen(new P(0,0,1));return{col:{x:e.x-t.x,y:e.y-t.y},row:{x:i.x-t.x,y:i.y-t.y}}}arrowStep(t){const e=this.getSpinQuarter(),i=`${this.view}:${e}`;let s=this.arrows.get(i);if(!s){const r=xc[this.view];s=jS(r.azimuth+e*Ds,r.elevation),this.arrows.set(i,s)}return{...s[t]}}pick(t,e){const i=this.canvas.getBoundingClientRect(),s=new ct((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=null;const o=new P;if(this.raycaster.ray.intersectPlane(this.groundPlane,o)){const l=Math.floor((o.x+ps)/Os),c=Math.floor((o.z+ps)/Os);l>=0&&c>=0&&l<this.side&&c<this.side&&(r=c*this.side+l)}if(r!==null&&!this.pieces.has(r))return r;const a=this.raycaster.intersectObjects(this.pieceLayer.children,!0);for(const l of a){let c=l.object;for(;c&&c.userData.index===void 0;)c=c.parent;if(c)return c.userData.index}return r}addPiece(t,e){this.removePiece(t);const i=gc(e);i.root.position.copy(ce(t)),i.root.rotation.y=this.pieceYaw,i.root.userData.index=t;const s=this.fuel.get(t);s!==void 0&&i.setFuel?.(s),i.tick?.(this.clock),this.pieceLayer.add(i.root);const r={piece:e,model:i};return this.pieces.set(t,r),this.dirty=!0,r}removePiece(t){const e=this.pieces.get(t);e&&(this.pieceLayer.remove(e.model.root),this.pieces.delete(t),this.leaning.get(t)===e&&this.leaning.delete(t),this.dirty=!0)}sync(t){this.performing&&this.cancelAnimations(),t.length!==this.cellCount&&this.setBoardSize(Math.round(Math.sqrt(t.length)));for(let e=0;e<this.cellCount;e++){const i=t[e],s=this.pieces.get(e);i===Qt?s&&this.removePiece(e):!s||s.piece!==i?this.addPiece(e,i):(s.model.root.position.copy(ce(e)),s.model.root.rotation.set(0,this.pieceYaw,0),s.model.root.scale.setScalar(1))}this.leaning.clear(),this.dirty=!0}setHover(t,e,i,s=!1){if(this.highlight.hover=s?null:t,this.highlight.blocked=s?t:null,this.highlight.merge=i,this.applyHighlights(),this.updateLean(),t===null||e===null||s){this.showRest();return}this.placeGhost(e,t,!1)}setRest(t,e){this.rest=t===null||e===null?null:{index:t,piece:e},this.highlight.hover===null&&this.showRest(),this.applyHighlights()}showRest(){!this.rest||this.performing?this.clearGhost():this.placeGhost(this.rest.piece,this.rest.index,!0)}placeGhost(t,e,i){if(!this.ghost||this.ghost.piece!==t||this.ghost.resting!==i){this.clearGhost();const s=gc(t,i?this.restMaterial:this.ghostMaterial);s.root.rotation.y=this.pieceYaw,this.fxLayer.add(s.root),this.ghost={piece:t,model:s,index:e,resting:i}}this.ghost.index=e,this.ghost.model.root.position.copy(ce(e)),this.dirty=!0}setLit(t){t===this.lit||t&&this.lit&&t.length===this.lit.length&&t.every((i,s)=>i===this.lit[s])||(this.lit=t?[...t]:null,this.applyHighlights())}setCursor(t){this.highlight.cursor=t,this.applyHighlights()}setSuggestions(t){const e=[...new Set(t)].filter(s=>Number.isInteger(s)&&s>=0&&s<this.cellCount),i=new fe;e.forEach((s,r)=>{const o=ce(s);this.suggest.setMatrixAt(r,i.makeTranslation(o.x,.014,o.z))}),this.suggest.count=e.length,this.suggest.visible=e.length>0,this.suggest.instanceMatrix.needsUpdate=!0,this.dirty=!0}clearGhost(){this.ghost&&(this.fxLayer.remove(this.ghost.model.root),this.ghost=null,this.dirty=!0)}applyHighlights(){const t=new Set(this.highlight.merge),e=new Lt;for(let s=0;s<this.cellCount;s++){e.copy(this.tileBase[s]);const r=this.terrain?.[s]??Vn;r===Dn?e.multiply(Q1):Tc(r)&&e.multiply(j1),this.lit&&e.multiply(this.lit[s]?J1:Z1),t.has(s)&&e.multiply($1),s===this.highlight.cursor&&e.multiply(K1),s===this.highlight.hover&&e.multiply(X1),s===this.highlight.blocked&&e.multiply(Y1),this.rest&&s===this.rest.index&&this.highlight.hover===null&&e.multiply(q1),this.tiles.setColorAt(s,e)}this.tiles.instanceColor.needsUpdate=!0;const i=[];this.highlight.hover!==null&&i.push([this.highlight.hover,16774084,1]),this.highlight.blocked!==null&&i.push([this.highlight.blocked,16752506,.8]),this.highlight.cursor!==null&&this.highlight.cursor!==this.highlight.hover&&i.push([this.highlight.cursor,14217471,.8]),this.rest&&this.highlight.hover===null&&this.highlight.blocked===null&&!this.performing&&i.push([this.rest.index,15130879,.45]);for(const s of this.highlight.merge)i.push([s,16763213,.75]);this.frames.forEach((s,r)=>{const o=i[r];if(s.visible=!!o,!o)return;const a=ce(o[0]);s.position.set(a.x,.012,a.z);const l=s.material;l.color.set(o[1]),l.userData.base=o[2],l.opacity=o[2]}),this.dirty=!0}resetLean(){for(const[t,e]of this.leaning)e.model.root.position.copy(ce(t)),e.model.root.rotation.set(0,this.pieceYaw,0),this.dirty=!0;this.leaning.clear()}updateLean(){const t=this.highlight.hover,e=this.highlight.merge;if(this.reducedMotion||this.performing||t===null||!e.length){this.resetLean();return}for(const[a,l]of this.leaning)e.includes(a)&&this.pieces.get(a)===l||(l.model.root.position.copy(ce(a)),l.model.root.rotation.set(0,this.pieceYaw,0),this.leaning.delete(a));const i=ce(t),s=Math.sin(this.clock*6.5),r=new Mi().setFromAxisAngle(new P(0,1,0),this.pieceYaw),o=new P;for(const a of e){const l=this.pieces.get(a);if(!l||l.piece===ze)continue;const c=ce(a),u=i.clone().sub(c).setY(0);if(u.lengthSq()<1e-6)continue;u.normalize();const d=l.model.root;d.position.copy(c).addScaledVector(u,.06+.02*s),o.set(u.z,0,-u.x),d.quaternion.setFromAxisAngle(o,.07+.02*s).multiply(r),this.leaning.set(a,l)}this.dirty=!0}ring(t,e,i,s=520){const r=this.ringPool.find(a=>!a.visible);if(!r)return;const o=r.material;o.color.set(e),r.position.set(t.x,.03,t.z),r.visible=!0,this.tweens.run(s,a=>{r.scale.setScalar(.4+a*i),o.opacity=.9*(1-a)}).then(()=>r.visible=!1)}glow(t,e,i=700){const s=this.glowPool.find(a=>!a.sprite.visible);if(!s)return;const r=s.sprite.material,o=s.column.material;s.sprite.position.set(t.x,.45,t.z),s.column.position.set(t.x,0,t.z),s.sprite.visible=s.column.visible=!0,this.tweens.run(i,a=>{const l=Math.sin(Math.min(1,a*1.6)*Math.PI*.5)*(1-a);r.opacity=Math.min(1,l*1.6*e),s.sprite.scale.setScalar(1.4+e*.8+a*.6),o.opacity=l*.85*e,s.column.scale.set(1,.4+a*.8,1)},Le.linear).then(()=>s.sprite.visible=s.column.visible=!1)}burst(t,e,i,s=1,r=650){this.reducedMotion&&(i=Math.ceil(i/3));for(let o=0;o<i;o++){const a=this.particlePool.find(x=>!x.visible);if(!a)return;const l=a.material;l.color.set(e[o%e.length]);const c=o/i*Math.PI*2+Math.random()*.5,u=(.9+Math.random()*.8)*s,d=Math.cos(c)*u,h=Math.sin(c)*u,f=(1.6+Math.random()*1.4)*s;a.visible=!0,a.position.copy(t);const g=Math.random()*8;this.tweens.run(r,x=>{const p=x*(r/1e3);a.position.set(t.x+d*p,t.y+f*p-4.5*p*p,t.z+h*p),a.rotation.set(g*x,g*x*.7,0),a.scale.setScalar(1-x*.7),l.opacity=1-x*x},Le.linear).then(()=>a.visible=!1)}}dust(t,e,i,s=420){this.reducedMotion&&(i=Math.ceil(i/2));for(let r=0;r<i;r++){const o=this.particlePool.find(f=>!f.visible);if(!o)return;const a=o.material;a.color.set(e[r%e.length]);const l=r/i*Math.PI*2+Math.random()*.6,c=Math.cos(l),u=Math.sin(l),d=.22+Math.random()*.14,h=.06+Math.random()*.06;o.visible=!0,this.tweens.run(s,f=>{const g=.3+d*f;o.position.set(t.x+c*g,.03+h*Math.sin(f*Math.PI*.8),t.z+u*g),o.rotation.set(l+f*2,f*3,0),o.scale.setScalar(.75+f*.35),a.opacity=.9*(1-f)},Le.outCubic).then(()=>o.visible=!1)}}bump(t){this.reducedMotion||(this.shake=Math.max(this.shake,t))}async animateMove(t,e,i={}){const s=this.animGen;this.performing=!0;try{this.clearGhost(),this.setHover(null,null,[]);for(const r of t){const o=n0(r),a=()=>i.onEvent?.(r,this.cellToScreen(o,.9));switch(r.kind){case"place":await this.animatePlace(r.index,r.piece,s,a);break;case"merge":await this.animateMerge(r.cells,r.target,r.toTier,r.step,s,a);break;case"festival":await this.animateFestival(r.cells,r.target,s,a);break;case"crumble":if(a(),s!==this.animGen)return!1;await this.animateCrumble(r.cells,s);break;case"expire":case"remove":if(a(),s!==this.animGen)return!1;await this.animateExpire(r.cells,s);break;case"upgrade":await this.animateUpgrade(r.index,r.toTier,s,a);break;case"wild":await this.animateUpgrade(r.index,r.becomes,s,a,!0);break;case"feed":await this.animateFeed(r.index,r.target,s,a);break;case"bridge":await this.animateBridge(r.index,s,a);break;case"grow":a(),this.grown=Math.max(this.grown,r.radius-Lr(this.side)),this.glow(ce(r.index),1.6,1100),this.ring(ce(r.index),16757594,4.5,900),this.ring(ce(r.index),16769696,3,700),this.burst(ce(r.index).setY(.4),[16751165,16765802,16770202],18,1.1),this.bump(.15),await this.tweens.run(500,()=>{});break;case"shades":await this.animateShades(r,s,a);break;case"dawn":if(a(),r.on){for(const l of r.cleared)this.burst(ce(l).setY(.3),[16769696,16765802,16777215],8,.7);await this.animateExpire(r.cleared,s)}this.setDawn(r.on);break;case"thaw":a();for(const l of r.cells)this.burst(ce(l).setY(.15),[14479359,16777215,10473727],7,.6),this.terrain&&(this.terrain[l]=Vn);this.layTerrain(),this.applyHighlights();break;case"mission":a(),this.fireworks(3);break}if(s!==this.animGen)return!1}return this.performing=!1,this.sync(e),!0}finally{s===this.animGen&&(this.performing=!1)}}async animatePlace(t,e,i,s){const{model:r}=this.addPiece(t,e),o=r.root,a=ce(t),l=e===ze||e>=2;if(await this.tweens.run(190,h=>{o.position.set(a.x,1-h,a.z);const f=.72+.28*Math.sqrt(h);o.scale.set(f*(1-.05*h),f*(1+.1*h),f*(1-.05*h))},Le.inQuad),i!==this.animGen||(s(),i!==this.animGen))return;this.ring(a,16774102,l?1:.8,360),this.dust(a,e===ze?nb:eb,l?8:5);const c=l?.2:.15,u=l?.06:.035,d=new fe;await this.tweens.run(l?140:120,h=>{const f=h>=1?0:Math.sin(h*Math.PI);o.scale.set(1+f*c*.6,1-f*c,1+f*c*.6),o.position.y=-u*f,this.tiles.setMatrixAt(t,d.makeTranslation(a.x,-u*f,a.z)),this.tiles.instanceMatrix.needsUpdate=!0},Le.linear),i===this.animGen&&(o.scale.setScalar(1),o.position.copy(a))}async animateMerge(t,e,i,s,r,o){const a=ce(e),l=t.map(g=>this.pieces.get(g)).filter(g=>!!g),c=l.map(g=>g.model.root.position.clone()),u=Math.pow(.9,Math.min(s,5)-1);if(await this.tweens.run(230*u,g=>{l.forEach((x,p)=>{x.model.root.position.lerpVectors(c[p],a,g),x.model.root.position.y=Math.sin(g*Math.PI)*.35,x.model.root.scale.setScalar(1-.55*g)})},Le.inCubic),r!==this.animGen)return;for(const g of t)this.removePiece(g);const{model:d}=this.addPiece(e,i);if(d.root.scale.setScalar(.001),o(),r!==this.animGen)return;const h=s>=2;this.glow(a,.75+i*.08+(h?.35:0)),this.ring(a,h?16765802:16774102,1.4+i*.25+(h?.8:0));const f=i<=1?[qt.leafLight,qt.leaf,16773560]:[16765802,qt.wall,qt.leafLight,qt.roof];this.burst(a.clone().setY(.4),h?[16765802,...f]:f,8+i*3+(h?8:0),.8+i*.1),this.bump(h?.12+s*.04:.04),h&&this.fireworks(s,e),await this.tweens.run(320*u,g=>d.root.scale.setScalar(Math.max(.001,g)),Le.outBack),r===this.animGen&&d.root.scale.setScalar(1)}async animateFestival(t,e,i,s){const r=ce(e),o=t.map(a=>this.pieces.get(a)).filter(a=>!!a);if(await this.tweens.run(420,a=>{for(const l of o)l.model.root.position.y=Math.sin(a*Math.PI*.5)*.5,l.model.root.rotation.y=this.pieceYaw+a*Math.PI},Le.inOutSine),i===this.animGen&&(s(),i===this.animGen)){this.glow(r,1.4,900),this.ring(r,16765802,3.4,700),this.ring(r,16777215,2.2,500);for(const a of o)this.burst(a.model.root.position.clone(),[16765802,qt.flag,qt.leafLight,qt.white,qt.stripe],9,1.2,800);if(this.fireworks(7),this.bump(.3),await this.tweens.run(260,a=>{for(const l of o)l.model.root.scale.setScalar(Math.max(.001,1-a))}),i===this.animGen)for(const a of t)this.removePiece(a)}}async animateCrumble(t,e){const i=t.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of t)this.burst(ce(s).setY(.2),[qt.rock,qt.rockDark,qt.moss],6,.7,500);if(await this.tweens.run(340,s=>{for(const r of i)r.model.root.position.y=-s*.3,r.model.root.rotation.z=Math.sin(s*30)*.06*(1-s),r.model.root.scale.setScalar(Math.max(.001,1-s))},Le.inCubic),e===this.animGen)for(const s of t)this.removePiece(s)}async animateUpgrade(t,e,i,s,r=!1){const o=ce(t),a=this.pieces.get(t);if(a&&(await this.tweens.run(r?360:160,c=>{a.model.root.scale.setScalar(1+.15*c),r&&(a.model.root.rotation.y=this.pieceYaw+c*Math.PI*3)},Le.outCubic),i!==this.animGen))return;const{model:l}=this.addPiece(t,e);l.root.scale.setScalar(.001),s(),i===this.animGen&&(this.glow(o,.9+e*.08),this.ring(o,16765802,1.6+e*.2),this.burst(o.clone().setY(.4),[16765802,W1,16777215],12,.9),await this.tweens.run(320,c=>l.root.scale.setScalar(Math.max(.001,c)),Le.outBack),i===this.animGen&&l.root.scale.setScalar(1))}async animateFeed(t,e,i,s){const r=this.pieces.get(t);if(e>=0&&r){const l=ce(t),c=ce(e),u=r.model.root;if(await this.tweens.run(420,d=>{u.position.lerpVectors(l,c,d),u.position.y=Math.sin(d*Math.PI)*.9,u.rotation.z=d*5,u.scale.setScalar(1-.75*d)},Le.inOutSine),i!==this.animGen)return;this.removePiece(t),s(),this.glow(c,1.1),this.ring(c,16757594,1.8),this.burst(c.clone().setY(.3),[16751165,16765802,16770202],14,.8);return}s();const{model:o}=this.addPiece(t,ln);o.root.scale.setScalar(.001);const a=ce(t);this.glow(a,.9),this.burst(a.clone().setY(.3),[16751165,16765802,16770202],12,.7),await this.tweens.run(300,l=>o.root.scale.setScalar(Math.max(.001,l)),Le.outBack)}async animateBridge(t,e,i){const s=this.pieces.get(t);if(s){if(await this.tweens.run(260,o=>{s.model.root.scale.set(1+.1*o,1-.8*o,1+.1*o),s.model.root.position.y=-.04*o},Le.inCubic),e!==this.animGen)return;this.removePiece(t)}i(),this.terrain&&(this.terrain[t]=Vn),this.layTerrain(),this.applyHighlights();const r=ce(t);this.ring(r,10473727,1.4),this.burst(r.clone().setY(.1),[qt.plank,qt.plankDark,10473727],10,.6)}async animateShades(t,e,i){t.trapped.length&&i();const s=[];for(const[l,c]of t.moves){const u=this.pieces.get(l);u&&(this.pieces.delete(l),this.pieces.set(c,u),u.model.root.userData.index=c,s.push({placed:u,from:ce(l),to:ce(c)}))}const r=t.trapped.map(l=>({c:l,placed:this.pieces.get(l)}));if(await this.tweens.run(300,l=>{for(const c of s)c.placed.model.root.position.lerpVectors(c.from,c.to,l),c.placed.model.root.position.y=Math.sin(l*Math.PI)*.28;for(const c of r)c.placed&&(c.placed.model.root.rotation.y=this.pieceYaw+l*Math.PI*4,c.placed.model.root.scale.setScalar(Math.max(.001,1-l)))},Le.inOutSine),e!==this.animGen)return;for(const{c:l}of r){const{model:c}=this.addPiece(l,Ii);c.root.scale.setScalar(.001);const u=ce(l);this.glow(u,1),this.ring(u,14286730,1.5),this.burst(u.clone().setY(.3),[15925132,14286730,16777215],14,.8)}const o=t.spawned.map(l=>{const{model:c}=this.addPiece(l,Yn);return c.root.scale.setScalar(.001),this.dust(ce(l),[2761300,4865930,6971312],6),c}),a=r.map(({c:l})=>this.pieces.get(l)?.model).filter(l=>!!l);await this.tweens.run(320,l=>{for(const c of a)c.root.scale.setScalar(Math.max(.001,l));for(const c of o)c.root.scale.setScalar(Math.max(.001,l)),c.root.position.y=-.3*(1-l)},Le.outBack)}async animateExpire(t,e){const i=t.map(s=>this.pieces.get(s)).filter(s=>!!s);for(const s of t)this.burst(ce(s).setY(.35),[13617384,10327236,16762480],7,.6,600);if(await this.tweens.run(420,s=>{for(const r of i)r.model.root.position.y=-s*.2,r.model.root.scale.setScalar(Math.max(.001,1-s))},Le.inCubic),e===this.animGen)for(const s of t)this.removePiece(s)}setBurn(t){this.fuel.clear();for(const[e,i]of t??[]){const s=this.pieces.get(e),r=s?Tn[s.piece]?.life:void 0;r&&(this.fuel.set(e,i/r),s.model.setFuel?.(i/r))}this.dirty=!0}async nudge(t){const e=this.pieces.get(t);if(!e)return;const i=this.animGen,s=ce(t);await this.tweens.run(240,r=>e.model.root.position.x=s.x+Math.sin(r*Math.PI*4)*.06*(1-r),Le.linear),!(i!==this.animGen||this.pieces.get(t)!==e)&&e.model.root.position.copy(s)}async gameOverWave(){const t=this.animGen;this.performing=!0,this.resetLean();const e=[...this.pieces.entries()];if(await this.tweens.run(700,i=>{for(const[s,r]of e){const{x:o,y:a}=xs(s,this.side),l=i*3-(o+a)*.12;r.model.root.position.y=Math.max(0,Math.sin(Math.min(Math.max(l,0),1)*Math.PI))*.25}},Le.linear),t!==this.animGen)return!1;for(const[i,s]of e)this.pieces.get(i)===s&&(s.model.root.position.y=0);return this.performing=!1,!0}cancelAnimations(){this.animGen++,this.performing=!1,this.tweens.finishAll(),this.stopShake()}stopShake(){this.shake=0,this.camera.position.copy(this.baseCamPos),this.dirty=!0}finishAnimations(){this.cancelAnimations()}get animating(){return this.tweens.active}thumbnail(t,e=160,i=!1){if(this.isContextLost())return"";const s=new pf;s.add(new If(12897535,3815526,1.6));const r=new sc(14673151,1.5);r.position.set(-5,10,7),s.add(r);const o=new sc(16761482,.55);o.position.set(7,4,2),s.add(o);const a=new gi;_c??(_c=U1());const l=new Se(_c,this.tileMaterial);a.add(l),vc??(vc=new vn({color:1775423}));const c=gc(t,i?vc:void 0,!1);c.tick?.(.8),a.add(c.root),s.add(a),a.updateMatrixWorld(!0);const u=xc.iso,d=new Lo(-1,1,1,-1,.1,50);d.position.set(Math.sin(u.azimuth)*10,7,Math.cos(u.azimuth)*10),d.lookAt(0,0,0),d.updateMatrixWorld();const h=new ws().setFromObject(a);let f=1/0,g=-1/0,x=1/0,p=-1/0;for(const R of[h.min.x,h.max.x])for(const I of[h.min.y,h.max.y])for(const B of[h.min.z,h.max.z]){const G=new P(R,I,B).applyMatrix4(d.matrixWorldInverse);f=Math.min(f,G.x),g=Math.max(g,G.x),x=Math.min(x,G.y),p=Math.max(p,G.y)}const m=Math.max(g-f,p-x)/2*1.06,y=(f+g)/2,T=(x+p)/2;d.left=y-m,d.right=y+m,d.top=T+m,d.bottom=T-m,d.updateProjectionMatrix();const M=new si(e,e,{samples:4});M.texture.colorSpace=_n;const w=this.scene.fog;this.renderer.setRenderTarget(M),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(s,d);const b=new Uint8Array(e*e*4);if(this.renderer.readRenderTargetPixels(M,0,0,e,e,b),this.renderer.setRenderTarget(null),this.renderer.setClearColor(yc,1),this.scene.fog=w,M.dispose(),this.dirty=!0,this.isContextLost())return"";const C=document.createElement("canvas");C.width=C.height=e;const _=C.getContext("2d"),E=_.createImageData(e,e);for(let R=0;R<e;R++)E.data.set(b.subarray((e-1-R)*e*4,(e-R)*e*4),R*e*4);return _.putImageData(E,0,0),C.toDataURL("image/png")}loop(t){this.rafId=requestAnimationFrame(this.loop);const e=this.lastFrame?t-this.lastFrame:16;if(this.lastFrame=t,document.hidden)return;const i=Math.min(64,e),s=this.tweens.active||this.shake>.001;if(this.tweens.tick(Math.min(1e3,e)),this.clock+=i/1e3,this.lost)return;const r=!this.reducedMotion&&t-this.lastIdleRender>33;if(!(!s&&!this.dirty&&!r)){if(r||s){if(this.lastIdleRender=t,!this.reducedMotion){this.world.tick(this.clock);for(const a of this.pieces.values())a.model.tick?.(this.clock);(this.leaning.size||this.highlight.merge.length)&&this.updateLean()}const o=this.reducedMotion?1:.75+Math.sin(this.clock*5)*.25;for(const a of this.frames){if(!a.visible)continue;const l=a.material;l.opacity=(l.userData.base??1)*o}if(this.suggest.visible){const a=this.reducedMotion?1:.7+Math.sin(this.clock*3)*.3;this.suggest.material.opacity=bc*a}}if(this.ghost){const o=ce(this.ghost.index);this.ghost.model.root.position.set(o.x,this.reducedMotion?.05:.08+Math.sin(this.clock*4)*.05,o.z)}if(this.shake>.001){const o=this.shake;this.camera.position.set(this.baseCamPos.x+(Math.random()-.5)*o,this.baseCamPos.y+(Math.random()-.5)*o,this.baseCamPos.z+(Math.random()-.5)*o),this.shake*=Math.pow(1e-4,i/1e3)**.6,this.shake<=.001&&this.camera.position.copy(this.baseCamPos)}this.updateFireLights(),this.renderer.render(this.scene,this.camera),this.dirty=!1}}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.dprQuery?.removeEventListener?.("change",this.onPixelRatioChange),this.canvas.removeEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored,!1),this.renderer.dispose()}}const wc=[0,2,4,7,9,12,14,16,19,21,24],ob=392;function Mr(n){return ob*Math.pow(2,n/12)}function Ea(n){n?.catch(()=>{})}class ab{constructor(t,e=!1){this.ctx=null,this.master=null,this.noise=null,this.musicBus=null,this.musicTimer=0,this.nextBeat=0,this.beat=0,this.enabled=t,this.musicOn=e}unlock(){if(!this.enabled&&!this.musicOn)return;const t=this.ensure();t&&t.state!=="running"&&t.state!=="closed"&&Ea(t.resume()),this.musicOn&&this.startMusic()}get music(){return this.musicOn}setMusic(t){this.musicOn=t,t?this.unlock():this.stopMusic()}setPaused(t){this.ctx&&(t?Ea(this.ctx.suspend()):(this.enabled||this.musicOn)&&Ea(this.ctx.resume()))}startMusic(){const t=this.ensure();if(!(!t||this.musicTimer)){if(!this.musicBus){this.musicBus=t.createGain();const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=2400;const i=t.createDelay(1);i.delayTime.value=.42;const s=t.createGain();s.gain.value=.28,this.musicBus.connect(e),e.connect(this.master),e.connect(i),i.connect(s).connect(i),i.connect(this.master)}this.musicBus.gain.cancelScheduledValues(t.currentTime),this.musicBus.gain.setValueAtTime(1e-4,t.currentTime),this.musicBus.gain.exponentialRampToValueAtTime(.32,t.currentTime+2.5),this.nextBeat=t.currentTime+.1,this.musicTimer=window.setInterval(()=>this.schedule(),120),this.schedule()}}stopMusic(){if(window.clearInterval(this.musicTimer),this.musicTimer=0,this.ctx&&this.musicBus){const t=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(t),this.musicBus.gain.setValueAtTime(Math.max(1e-4,this.musicBus.gain.value),t),this.musicBus.gain.exponentialRampToValueAtTime(1e-4,t+.6)}}schedule(){const t=this.ctx;if(!t||!this.musicBus)return;const e=60/76/2,i=[[0,4,7,11],[-3,0,4,7],[-7,-3,0,4],[-5,-1,2,4]],s=[0,2,4,7,9,12,14,16];for(;this.nextBeat<t.currentTime+.6;){const r=this.nextBeat,o=Math.floor(this.beat/8),a=i[Math.floor(o/2)%i.length],l=this.beat%16;if(l===0){for(const d of a)this.voice(261.63*Math.pow(2,d/12),r,e*16,.05,"triangle",1.4);this.voice(65.41*Math.pow(2,a[0]/12),r,e*8,.12,"sine",.05)}l===8&&this.voice(65.41*Math.pow(2,a[0]/12),r,e*8,.1,"sine",.05);const c=Math.sin(this.beat*12.9898)*43758.5453,u=c-Math.floor(c);if(l%2===0&&u<.42){const d=s[Math.floor(u*100)%s.length];this.voice(523.25*Math.pow(2,d/12),r,.9,.05,"sine",.005)}this.nextBeat+=e,this.beat++}}voice(t,e,i,s,r,o){const a=this.ctx,l=a.createOscillator(),c=a.createGain();l.type=r,l.frequency.value=t,c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+Math.max(.005,o)),c.gain.exponentialRampToValueAtTime(1e-4,e+i),l.connect(c).connect(this.musicBus),l.start(e),l.stop(e+i+.05)}ensure(){if(this.ctx)return this.ctx;try{const t=window.AudioContext??window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55;const e=this.ctx.createDynamicsCompressor();this.master.connect(e).connect(this.ctx.destination);const i=Math.floor(this.ctx.sampleRate*.4);this.noise=this.ctx.createBuffer(1,i,this.ctx.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<i;r++)s[r]=Math.random()*2-1}catch{this.ctx=null}return this.ctx}ready(){if(!this.enabled)return null;const t=this.ensure();if(!t||t.state==="closed")return null;if(t.state==="suspended")Ea(t.resume());else if(t.state!=="running")return null;return t}tone(t,e,i,s,r="sine",o){const a=this.ctx,l=a.createOscillator(),c=a.createGain();l.type=r,l.frequency.setValueAtTime(t,e),o&&l.frequency.exponentialRampToValueAtTime(o,e+i),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+.008),c.gain.exponentialRampToValueAtTime(1e-4,e+i),l.connect(c).connect(this.master),l.start(e),l.stop(e+i+.02)}bell(t,e,i,s){this.tone(t,e,i,s,"sine"),this.tone(t*2.01,e,i*.6,s*.28,"sine"),this.tone(t*3.02,e,i*.3,s*.1,"triangle")}noiseHit(t,e,i,s,r=1){const o=this.ctx,a=o.createBufferSource();a.buffer=this.noise;const l=o.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=r;const c=o.createGain();c.gain.setValueAtTime(i,t),c.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(l).connect(c).connect(this.master),a.start(t),a.stop(t+e+.02)}place(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(260,e,.12,.35,"sine",150),this.noiseHit(e,.05,.12,1800,2)}merge(t,e){const i=this.ready();if(!i)return;const s=i.currentTime,r=wc[Math.min(wc.length-3,t+e-1)];this.bell(Mr(r),s,.5,.22),this.bell(Mr(r+7),s+.07,.6,.18),e>=2&&this.bell(Mr(r+12),s+.14,.7,.16)}chain(t){const e=this.ready();if(!e)return;const i=e.currentTime+.05;for(let s=0;s<Math.min(t+1,5);s++)this.tone(Mr(wc[s+t]),i+s*.055,.22,.1,"triangle")}festival(){const t=this.ready();if(!t)return;const e=t.currentTime;[0,4,7,12,16,19,24].forEach((i,s)=>this.bell(Mr(i),e+s*.07,.9,.16)),this.noiseHit(e,.6,.05,6e3,.7)}crumble(){const t=this.ready();if(!t)return;const e=t.currentTime;this.noiseHit(e,.32,.35,420,.8),this.tone(120,e,.2,.2,"sine",60)}invalid(){const t=this.ready();t&&this.tone(160,t.currentTime,.12,.18,"triangle",120)}swap(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(520,e,.08,.12,"sine",700),this.tone(700,e+.06,.08,.1,"sine",520)}gameOver(){const t=this.ready();if(!t)return;const e=t.currentTime;[12,7,4,0].forEach((i,s)=>this.bell(Mr(i),e+s*.18,.9,.17))}warning(){const t=this.ready();if(!t)return;const e=t.currentTime;this.tone(330,e,.15,.08,"triangle"),this.tone(311,e+.16,.2,.08,"triangle")}}function lb(n,t=1){switch(n){case"tap":return 8;case"land":return 12;case"merge":return Math.min(25,15+(Math.max(1,Math.floor(t))-1)*3);case"festival":return[25,50,25,50,70];case"invalid":return[6,40,6];case"gameOver":return[30,90,50]}}function gd(){return typeof navigator>"u"?null:navigator}class cb{constructor(t){this.enabled=t}get supported(){const t=gd();return!!t&&"vibrate"in t&&typeof t.vibrate=="function"}tap(){this.pulse("tap")}land(){this.pulse("land")}merge(t){this.pulse("merge",t)}festival(){this.pulse("festival")}invalid(){this.pulse("invalid")}gameOver(){this.pulse("gameOver")}pulse(t,e){if(!this.enabled||!this.supported)return;const i=gd();if(!(i.userActivation&&!i.userActivation.hasBeenActive))try{i.vibrate(lb(t,e))}catch{}}}const zt=n=>document.getElementById(n),tt={stage:zt("stage"),hud:zt("hud"),dock:document.querySelector(".dock"),score:zt("score"),best:zt("best"),dailyChip:zt("dailyChip"),dailyLeft:zt("dailyLeft"),status:zt("status"),announcer:zt("announcer"),sheetAnnouncer:zt("sheetAnnouncer"),coach:zt("coach"),coachText:zt("coachText"),coachSkip:zt("coachSkip"),popups:zt("popups"),banner:zt("banner"),nextCard:zt("nextCard"),nextImg:zt("nextImg"),keepBtn:zt("keepBtn"),keepImg:zt("keepImg"),menuBtn:zt("menuBtn"),spinLeft:zt("spinLeft"),undoBtn:zt("undoBtn"),coins:zt("coins"),shopBtn:zt("shopBtn"),powerBar:zt("powerBar"),powerText:zt("powerText"),powerCancel:zt("powerCancel"),spinRight:zt("spinRight"),sizePrev:zt("sizePrev"),sizeNext:zt("sizeNext"),sizeName:zt("sizeName"),sizeSub:zt("sizeSub"),home:zt("home"),homeBest:zt("homeBest"),playBtn:zt("playBtn"),homeNewBtn:zt("homeNewBtn"),dailyBtn:zt("dailyBtn"),dailyTitle:zt("dailyTitle"),dailySub:zt("dailySub"),dailyMeta:zt("dailyMeta"),homeHelpBtn:zt("homeHelpBtn"),homeJournalBtn:zt("homeJournalBtn"),homeSettingsBtn:zt("homeSettingsBtn"),modal:zt("modal"),modalArt:zt("modalArt"),modalTitle:zt("modalTitle"),modalBody:zt("modalBody"),modalActions:zt("modalActions"),closeModal:zt("closeModal"),webglError:zt("webglError")},Ae=ve,Yt=new D0,te=new ab(Yt.getSound(),Yt.getMusic()),an=new cb(Yt.getHaptics()),ah=window.matchMedia("(prefers-reduced-motion: reduce)"),Ta="https://pixel-pusher-hub.github.io/little-nooks/",_d=Fm(["9..8.7.1",".6..5..2","7.3...4.","..2...1.",".1..3...","2..4.1..","..2.1..1","1...2..1"]);function ub(n,t=!1){const e=Tu(n),i=Math.floor((8-n)/2);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const o=r+i,a=s+i;o>=0&&a>=0&&o<8&&a<8&&(e[s*n+r]=_d[a*8+o]===ze?Qt:_d[a*8+o])}return t&&(e[Cu(n)]=Ve),e}const Je=n=>n.mode??"classic",Es=()=>Bm(new Date);let je=Yt.getSize(Ad);const xi=!0,Pn=n=>is(n.board),qs=n=>!!n.glow;function ml(n=je,t=xi){const e=Yt.loadGame(Vs,n,t);return e&&!e.over&&Je(e)==="classic"&&Pn(e)===n&&qs(e)===t?e:Ru(Od(),Ae,n,t,!0)}function tm(n){const t=Yt.loadDaily(Vs);return t&&!t.over&&Je(t)==="daily"&&t.dailyKey===n?t:Qd(n,Ae)}let F=ml(),We=Yt.getJournal(),_i=Yt.getBest(je,xi),Qa=F.turn===1?_i:Yt.getRoundStartBest(je,xi)??_i;Yt.setRoundStartBest(Qa,je,xi);let em=0,ni=0,fn=!1,me=!0,Ss=F.score,Qe=null,Fa=null,_s=null,vs=null,vo=!1,Oa=!1,gl=0,xu=!1,nm=!1,Rt=null;const Ba=new Map;let Gs=null;const le=n=>Math.round(n).toLocaleString("en-US"),Cn=()=>!tt.modal.classList.contains("hidden"),Xn=n=>n.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$n=(n,t,e=`${t}s`)=>`${n} ${n===1?t:e}`;let qi=!1,Mu=0;function ke(n,t=""){tt.status.textContent=n,tt.status.className=`status${t?` ${t}`:""}`,qi=!1,clearTimeout(Mu),t==="good"&&(Mu=window.setTimeout(()=>tt.status.classList.add("faded"),2600))}function vd(n){ke(n,"good"),clearTimeout(Mu),qi=!0}function Vo(n=F){return n.pieceLimit?Math.max(0,n.pieceLimit-(n.turn-1)):1/0}function hb(n){return n.endReason==="dark"?"The night closed in: no lit tile is free.":n.endReason==="limit"?Je(n)==="daily"?`All ${n.pieceLimit} pieces placed. Day complete!`:"Out of pieces. Build something new next time to earn more!":"No empty tiles left."}function Rn(){const n=qn(F).length,t=Vo();F.over?ke(hb(F),"danger"):Jn(F.next)?ke(`A rare ${He(F.next)}! Set it down anywhere, even in the dark. It burns for ${Tn[F.next].life} moves.`,"good"):n<=4?ke(F.glow?`Only ${$n(n,"lit tile")} left. Build a light, or merge!`:`Only ${$n(n,"free tile")} left. Make every merge count!`,"danger"):t<=10?ke(`Only ${$n(t,"piece")} left. Build something new to earn more!`,"warn"):ke(Je(F)==="daily"?`Daily Terrain: ${$n(t,"piece")} to place today.`:F.glow?"Grow things in the light. Everything from Glowcaps on lights the tiles around it.":"Tap an empty tile to place your piece.")}let xd=0;function un(n){const t=Cn()?tt.sheetAnnouncer:tt.announcer;tt.announcer.textContent="",tt.sheetAnnouncer.textContent="",clearTimeout(xd),xd=window.setTimeout(()=>t.textContent=n,60)}function im(n){n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}function yr(n,t,e=""){const i=document.createElement("div");i.className=`popup${e?` ${e}`:""}`,i.textContent=n,i.style.left=`${t.x}px`,i.style.top=`${t.y}px`,tt.popups.appendChild(i),setTimeout(()=>i.remove(),1100)}let Md=0;function xo(n){tt.banner.textContent=n,tt.banner.classList.remove("show"),tt.banner.offsetWidth,tt.banner.classList.add("show"),clearTimeout(Md),Md=window.setTimeout(()=>tt.banner.classList.remove("show"),1250)}function Do(n,t=160){const e=`${n}@${t}`;if(!Ba.has(e)&&Rt){const i=Rt.thumbnail(n,t);if(!i)return"";Ba.set(e,i)}return Ba.get(e)??""}function rn(n,t="",e=50){return`<img src="${Do(n)}" alt="${Xn(t)}" width="${e}" height="${e}" draggable="false" />`}function fb(){return Je(F)==="daily"?Math.max(We.daily.scores[F.dailyKey??""]??0,F.score):Math.max(_i,F.score)}function bs(){tt.score.textContent=le(Ss),vb(),tt.best.textContent=le(fb()),sm(),Hr(),ch()}function sm(){if(tt.dailyChip.classList.toggle("hidden",!F.pieceLimit),!F.pieceLimit)return;const n=Vo();tt.dailyLeft.textContent=String(n),tt.dailyChip.classList.toggle("low",n<=10)}function db(){const n=F.next;if(n===ze)return{text:"Never merges",good:!1,spots:0};if(Jn(n))return{text:`Goes anywhere, burns ${Tn[n].life} moves`,good:!0,spots:0};const t=F.over?[]:Du(F.board,n,Ae,qn(F));if(!t.length)return{text:n===Ie?`3 ${hn[Ie].name}s = Festival`:"No match yet",good:!1,spots:0};let e=1;for(const i of t)e=Math.max(e,ol(F,i,Ae).state.lastChain);return{text:e>=2?`Chain ×${e} possible!`:`Merges in ${$n(t.length,"spot")}`,good:!0,spots:t.length}}let yd=-1,lh=0;function ch(){const n=F.after;tt.nextImg.hidden=n===void 0,n!==void 0&&(tt.nextImg.src=Do(n)),tt.nextImg.alt="";const t=db(),e=n===void 0?"":` Then: ${He(n)}.`;tt.nextCard.setAttribute("aria-label",`In hand: ${He(F.next)}, ${Dd(F.next)}. ${t.text}.${e} Show what's coming.`),tt.nextCard.title=`In hand: ${He(F.next)} (${t.text}).${e} (I: what's coming)`,hh(),F.stash===Qt?(tt.keepImg.removeAttribute("src"),tt.keepImg.hidden=!0,tt.keepBtn.classList.add("empty"),tt.keepBtn.setAttribute("aria-label",`Keep slot is empty. Store the ${He(F.next)} for later`)):(tt.keepImg.src=Do(F.stash),tt.keepImg.hidden=!1,tt.keepImg.alt="",tt.keepBtn.classList.remove("empty"),tt.keepBtn.setAttribute("aria-label",`Keep slot holds a ${He(F.stash)}. Swap it with the ${He(F.next)}`),!F.over&&yd!==F.turn&&t.spots===0&&F.stash!==ze&&Du(F.board,F.stash,Ae,qn(F)).length&&(yd=F.turn,tt.keepBtn.classList.remove("nudge"),tt.keepBtn.offsetWidth,tt.keepBtn.classList.add("nudge")))}function Sd(){if(!Rt)return;const n=window.innerWidth,t=window.innerHeight,e={top:0,right:0,bottom:0,left:0};document.querySelectorAll("[data-inset]").forEach(s=>{const r=getComputedStyle(s);if(r.display==="none")return;const o=r.getPropertyValue("--inset").trim(),a=s.getBoundingClientRect();!a.width||!a.height||(o==="top"?e.top=Math.max(e.top,a.bottom):o==="bottom"?e.bottom=Math.max(e.bottom,t-a.top):o==="right"?e.right=Math.max(e.right,n-a.left):o==="left"&&(e.left=Math.max(e.left,a.right)))}),document.body.style.setProperty("--dock-h",`${Math.round(tt.dock.getBoundingClientRect().height)}px`);const i=Math.min(n,t)<500?6:16;Rt.setInsets({top:e.top+i,right:e.right+i,bottom:e.bottom+i,left:e.left+i})}function ja(){return!fn&&!F.over&&!Cn()&&!me}function rm(n){const t=ol(F,n,Ae),e=new Set;let i=0,s=null;for(const a of t.events)a.kind!=="merge"&&a.kind!=="festival"&&a.kind!=="crumble"||(a.cells.forEach(l=>e.add(l)),i+=a.points,s=a);if(e.delete(n),!s)return null;const r=t.state.lastChain,o=s.kind==="merge"?`→ ${hn[s.toTier].name}`:s.kind==="festival"?"→ Skyline Festival!":"shatters rocks";return{cells:[...e],text:`${r>1?`Chain ×${r} `:""}${o}  +${le(i)}`}}function Ai(n){if(_s=n,!Rt)return;if(ii&&n!==null&&ja()){const e=ll(F,ii).includes(n);Rt.setHover(n,null,[],!e),e&&ke(`${ka[ii].name} the ${He(F.board[n])}: ${le(cl(F,ii,n,Ae))} coins`,"good"),qi=!0;return}if(n===null||!ja()){Rt.setHover(null,null,[]),qi&&!fn&&!me&&Rn();return}if(F.board[n]!==Qt){Rt.setHover(n,null,[],!0),qi&&Rn();return}if(!Pu(F,n)){Rt.setHover(n,null,[],!0),ke("Too dark to build here. Build next to the light.","warn"),qi=!0;return}const t=rm(n);Rt.setHover(n,F.next,t?.cells??[]),t?vd(t.text+(vo?" · lift to place":"")):vo?vd("No merge here · lift to place, or slide off to cancel"):qi&&Rn()}function Js(){if(Je(F)==="daily"){F.over?Yt.clearDaily():Yt.saveDaily(F);return}const n=Pn(F),t=qs(F);F.over?Yt.clearGame(n,t):Yt.saveGame(F,n,t),Yt.submitScore(F.score,n,t),_i=Math.max(_i,Yt.getBest(n,t))}function Or(n){if(Zs(),uh=null,Rt?.cancelAnimations(),ni++,fn=!1,Gs=null,F=n,Ss=F.score,Oa=!1,pb(),Je(F)==="daily")em=We.daily.scores[F.dailyKey??""]??0;else{const t=Pn(F),e=qs(F);_i=Yt.getBest(t,e),F.turn===1?(Qa=_i,Yt.setRoundStartBest(_i,t,e)):Qa=Yt.getRoundStartBest(t,e)??_i}me||(_l(F),bs(),Rn())}function _l(n){Rt&&(Rt.sync(n.board),Rt.setLit(n.glow?Fo(n.board):null),Rt.setBurn(n.burn))}const Cr=[];function vl(){Je(F)!=="daily"&&(Cr.push({state:F,journal:We}),Cr.length>30&&Cr.shift())}function pb(){Cr.length=0,Hr()}function xl(){return Cr.length>0&&Je(F)!=="daily"}function Hr(){tt.undoBtn.disabled=!xl()||fn}function tl(){if(!Rt||fn||me||!xl())return;const n=Cr.pop();Cn()&&nn(!1),Zs(),Rt.cancelAnimations(),ni++,Gs=null,F=n.state,We=n.journal,Yt.saveJournal(We),Js(),Ss=F.score,_l(F),bs(),Rn(),te.unlock(),te.swap(),an.tap(),un(`Move undone. Next: ${He(F.next)}.`),vs?.type==="mouse"&&_s!==null&&Ai(Rt.pick(vs.x,vs.y))}function mb(n){const t=Je(n)==="daily",e=n.score>0&&n.score>(t?em:Qa),i=E0(We,n,Es());return We=i.journal,Yt.saveJournal(We),Pr.active&&!t&&Sl(),{state:n,newBest:e,highlights:i.highlights}}function gb(n,t){const e=n.filter(a=>a.kind==="merge"),i=n.find(a=>a.kind==="festival"),s=n.find(a=>a.kind==="crumble"),r=[];if(i)r.push(`Skyline Festival! +${le(t)}`);else if(e.length){const a=e[e.length-1],l=e.length>1?`Chain ×${e.length}: `:"";r.push(`${l}made a ${a.kind==="merge"?hn[a.toTier].name:""}, +${le(t)}`)}else{const a=n[0];r.push(`Placed a ${a.kind==="place"?He(a.piece):"piece"}`)}s&&s.kind==="crumble"&&r.push(`shattered ${$n(s.cells.length,"rock")}`);const o=n.find(a=>a.kind==="expire");return o&&o.kind==="expire"&&r.push(o.cells.length>1?`${o.cells.length} lights burned out`:"a light burned out"),r.join(", ")}async function yu(n){if(!Rt||!ja())return;if(ii){await yb(n);return}if(te.unlock(),F.board[n]!==Qt){te.invalid(),an.invalid(),ke("That tile is taken. Pick an empty one.","warn"),un("That tile is taken. Pick an empty one."),Rt.nudge(n);return}if(!Pu(F,n)){te.invalid(),an.invalid(),ke("Too dark to build there. Build next to the light.","warn"),un("Too dark to build there. Build next to the light.");return}const t=ol(F,n,Ae);if(!t.accepted)return;vl(),fn=!0,uh=n,Hr();const e=ni,i=F;lh=F.highestTier,F=t.state,We=np(We,t.events,t.points);const s=F.over?mb(F):null;Yt.saveJournal(We),Js(),ch(),sm(),Rt.setSuggestions([]),Vr();try{await Rt.animateMove(t.events,F.board,{onEvent:(u,d)=>{e===ni&&om(u,d)}})}finally{e===ni&&(Ss=F.score,fn=!1)}if(e!==ni)return;F.glow&&(Rt.setLit(Fo(F.board)),Rt.setBurn(F.burn)),bs();const r=(F.pieceLimit??0)-(i.pieceLimit??0);r>0&&F.budget&&(xo(`New: ${hn[F.highestTier].name}! +${r} pieces`),te.festival());const o=qn(F).length,a=o<=Math.max(4,Math.round(F.board.length*.12));a&&!Oa&&!F.over&&(Oa=!0,te.warning()),a||(Oa=!1);const l=Vo(),c=F.over?"":o<=4?` Only ${$n(o,F.glow?"lit tile":"free tile")} left.`:l<=10?` Only ${$n(l,"piece")} left.`:"";if(un(`${gb(t.events,t.points)}. ${F.over?"Round over.":`Next: ${He(F.next)}.`}${c}`),s){await Eb(s,e);return}F.lastChain>=2?ke(`Lovely! ×${F.lastChain} chain reaction.`,"good"):t.points>Ae.placePoints?ke(`+${le(t.points)} points`,"good"):Rn(),bl(t.events),vs?.type==="mouse"&&_s!==null&&Ai(Rt.pick(vs.x,vs.y)),Qe!==null&&Rt.setCursor(Qe)}function om(n,t){if(n.kind==="place"){te.place(),an.land();return}if(n.kind==="expire"||n.kind==="remove"){te.crumble(),yr(n.kind==="remove"?"Cleared":n.cells.length>1?"Lights out":"Burned out",t,"rock");return}if(n.kind==="upgrade"){te.merge(n.toTier,1),an.merge(1),yr(hn[n.toTier].name,t,"big");return}Ss+=n.points,tt.score.textContent=le(Ss),im(tt.score),n.kind==="merge"?(te.merge(n.toTier,n.step),an.merge(n.step),yr(`+${le(n.points)}`,t,n.step>=2?"big":""),yr(`+${$d([n],Ae)}`,{x:t.x,y:t.y+26},"coin"),n.step>=2&&(te.chain(n.step),xo(`Chain ×${n.step}!`)),n.toTier>lh&&n.toTier>=2&&n.step<2&&!F.budget&&xo(`A ${hn[n.toTier].name}!`)):n.kind==="festival"?(te.festival(),an.festival(),xo("Skyline Festival!"),yr(`+${le(n.points)}`,t,"big")):n.kind==="crumble"&&(te.crumble(),an.land(),yr(`+${le(n.points)}`,t,"rock"))}function Su(){ja()&&(te.unlock(),vl(),F=u0(F,Ae),Hr(),Js(),te.swap(),an.tap(),ch(),tt.nextCard.classList.remove("pop"),tt.nextCard.offsetWidth,tt.nextCard.classList.add("pop"),Ai(_s),_s===null&&Rn(),un(`Next: ${He(F.next)}. Kept: ${F.stash===Qt?"nothing":He(F.stash)}.`),bl())}function Br(){Pr.active&&Je(F)==="classic"&&F.turn>1&&Sl(),Or(Ru(Od(),Ae,je,xi,!0)),Js(),nn(!1),fh(),Ml()}function el(n=!1){te.unlock();const t=Es(),e=n?Qd(t,Ae):tm(t);Or(e),Js(),nn(!1),fh(),Ml(),e.turn===1&&(ke(`Daily Terrain #${Ir(t)}: everyone gets this island today. Place ${yo} pieces for your best score.`,"good"),un(`Daily Terrain number ${Ir(t)}. ${yo} pieces. Next: ${He(F.next)}.`))}let uh=null;function _b(){const n=qn(F);if(!n.length)return null;const t=Pn(F),e=uh??Cu(t),i=e%t,s=Math.floor(e/t);let r=n[0],o=1/0;for(const a of n){const l=Math.abs(a%t-i)+Math.abs(Math.floor(a/t)-s);l<o&&(r=a,o=l)}return r}function hh(){if(!Rt)return;const n=!me&&!F.over&&!ii;Rt.setRest(n?_b():null,n?F.next:null)}let bd=0;function vb(){const n=F.coins??0;tt.coins.textContent=le(n),n>bd&&im(tt.coins),bd=n,tt.shopBtn.setAttribute("aria-label",`Shop: ${le(n)} coins to spend`)}function am(){if(!Rt||me||fn||F.over||Cn())return;Zs(),te.unlock();const n=F.coins??0,t=Iu(F,Ae),e=r=>{const o=r.power?ka[r.power].name:He(r.piece),a=r.power?ka[r.power].hint:r.kind==="light"?Dd(r.piece):`Tier ${r.piece+1}`,l=r.power?`<span class="power-art" aria-hidden="true"><svg><use href="#i-${r.power}" /></svg></span>`:rn(r.piece,"",56),c=n>=r.price;return`<button class="shop-item" type="button" data-key="${r.key}" ${c?"":"disabled"} aria-label="${Xn(`${o}: ${a}. ${r.power==="upgrade"?"From ":""}${r.price} coins`)}">
      ${l}<span class="shop-name">${Xn(o)}</span><small>${Xn(a)}</small>
      <span class="price"><svg aria-hidden="true"><use href="#i-coin" /></svg>${r.power==="upgrade"?"from ":""}${le(r.price)}</span></button>`},i=(r,o)=>o.length?`<h3>${r}</h3><div class="shop-grid">${o.map(e).join("")}</div>`:"",s=F.highestTier<Ie?`<p class="shop-note">Build a ${Xn(hn[F.highestTier+1].name)} to unlock it here.</p>`:"";Oi({title:"Shop",body:`<div class="shop">
      <div class="shop-wallet"><svg aria-hidden="true"><use href="#i-coin" /></svg><b>${le(n)}</b><span>coins · every merge earns more</span></div>
      ${i("Pieces",t.filter(r=>r.kind==="piece"))}
      ${s}
      ${i("Lights",t.filter(r=>r.kind==="light"))}
      ${i("Powers",t.filter(r=>r.kind==="power"))}
      <p class="shop-note">A bought piece goes straight into your hand and doesn't use up one of your pieces. Each time you buy something, it gets more expensive.</p>
    </div>`,actions:[{label:"Done",onClick:()=>nn()}],mount:r=>r.querySelectorAll(".shop-item").forEach(o=>o.addEventListener("click",()=>xb(o.dataset.key)))})}function xb(n){const t=Iu(F,Ae).find(s=>s.key===n);if(!t||(F.coins??0)<t.price||fn)return;if(t.power&&t.power!=="reroll"){nn(!1),Mb(t.power);return}const e=t.power==="reroll"?Jd(F,"reroll",-1,Ae):h0(F,n,Ae);if(!e.accepted)return;vl(),F=e.state,Js(),nn(!1),te.swap(),an.tap(),bs(),Hr();const i=He(F.next);xo(t.power?`New piece: ${i}`:`Bought: ${i}`),un(`${t.power?"Rerolled":"Bought"}: a ${i} is in your hand.`)}let ii=null;function Mb(n){ii=n,Rt?.setSuggestions(ll(F,n)),tt.powerText.textContent=n==="bulldoze"?`Tap a tile to clear it (${le(cl(F,n,-1,Ae))} coins)`:"Tap a piece to raise it one tier",tt.powerBar.classList.remove("hidden"),Vr(),hh(),ke(n==="bulldoze"?"Bulldoze: pick a tile to clear.":"Upgrade: pick a piece. Bigger ones cost more.","good"),un(`${ka[n].name}: pick a tile, or press Escape to cancel.`)}function Zs(n=!1){ii&&(ii=null,tt.powerBar.classList.add("hidden"),Rt?.setSuggestions([]),Rt?.setHover(null,null,[]),hh(),n&&Rn())}async function yb(n){if(!Rt||!ii)return;const t=ii;if(te.unlock(),!ll(F,t).includes(n)){te.invalid(),an.invalid(),ke(t==="bulldoze"?"Pick a tile with something on it.":"Pick a piece to upgrade.","warn"),Rt.nudge(n);return}const e=cl(F,t,n,Ae),i=Jd(F,t,n,Ae);if(!i.accepted){te.invalid(),ke(`That needs ${le(e)} coins.`,"warn");return}vl(),fn=!0,Hr(),Zs();const s=ni;lh=F.highestTier,F=i.state,We=np(We,i.events,i.points),Yt.saveJournal(We),Js();try{await Rt.animateMove(i.events,F.board,{onEvent:(r,o)=>{s===ni&&om(r,o)}})}finally{s===ni&&(Ss=F.score,fn=!1)}s===ni&&(Rt.setLit(Fo(F.board)),Rt.setBurn(F.burn),bs(),i.points>0?ke(`+${le(i.points)} points`,"good"):Rn())}function lm(){const n=Yt.loadGame(Vs,je,xi);return{inProgress:!!n&&!n.over&&n.turn>1&&Je(n)==="classic"&&Pn(n)===je&&qs(n)===xi,saved:n}}function Rr(){const{inProgress:n,saved:t}=lm();tt.playBtn.textContent=n?"Continue":"Play",tt.homeNewBtn.classList.toggle("hidden",!n),tt.homeBest.textContent=le(Yt.getBest(je,xi));const e=Bs.indexOf(je);tt.sizeName.textContent=`${je} × ${je}`,tt.sizeSub.textContent=Cm[je],tt.sizePrev.disabled=e<=0,tt.sizeNext.disabled=e>=Bs.length-1,tt.playBtn.setAttribute("aria-label",`${tt.playBtn.textContent} on the ${je} by ${je} island`);const i=Es(),s=Ir(i),r=Yt.loadDaily(Vs),o=!!r&&!r.over&&r.dailyKey===i&&r.turn>1,a=We.daily.scores[i];tt.dailyTitle.textContent=o?"Continue":"Daily",tt.dailySub.textContent=o?`Continue · ${$n(Vo(r),"piece")} left`:a!==void 0?`Played today · best ${le(a)} · play again`:`Today's island · ${yo} pieces`;const l=ip(We,i);tt.dailyMeta.textContent=l>0?String(l):"",tt.dailyMeta.classList.toggle("hidden",l===0),tt.dailyBtn.title=`Daily Terrain #${s}: ${tt.dailySub.textContent}`,tt.dailyBtn.setAttribute("aria-label",`Daily Terrain number ${s}. ${tt.dailySub.textContent}.${l?` Streak: ${$n(l,"day")}.`:""}`);const c=n&&t?t:{board:ub(je,xi),glow:xi};Rt?.sync(c.board),Rt?.setLit(c.glow?Fo(c.board):null)}function wd(n){const t=Bs.indexOf(je)+n;t<0||t>=Bs.length||(je=Bs[t],Yt.setSize(je),te.unlock(),te.swap(),Je(F)==="classic"&&Or(ml()),Rr())}function No(){const n=!me;if(Rt?.cancelAnimations(),ni++,fn=!1,Gs=null,me=!0,Ss=F.score,document.body.classList.add("at-home"),Rt&&(Rt.canvas.tabIndex=-1),nn(!1),Zs(),Rt?.setRest(null,null),Rt?.setHover(null,null,[]),Rt?.setCursor(null),Rt?.setSuggestions([]),Vr(),nm){location.reload();return}Rr(),n&&tt.playBtn.focus({preventScroll:!0})}function fh(){gl=performance.now()+350,me&&(me=!1,document.body.classList.remove("at-home"),Rt&&(Rt.canvas.tabIndex=0),_l(F)),bs(),Rn(),bl()}function Ed(){const n=Pn(F);if(Fa!==null&&Fa<n*n)return Fa;const t=Math.floor((n-1)/2);return t*n+t}function Ml(){Rt?.canvas.focus({preventScroll:!0})}function yl(){te.unlock(),(Je(F)!=="classic"||Pn(F)!==je||qs(F)!==xi)&&Or(ml()),F.over?Br():(me&&_l(F),fh()),Yt.hasSeenHelp()?Ml():(kn=Rt?.canvas??null,wl())}const Pr={active:!Yt.getCoachDone()&&Yt.getBest()===0&&We.rounds===0,said:new Set};function Vr(){tt.coach.classList.add("hidden")}function Sl(){Pr.active=!1,Yt.setCoachDone(),Vr(),Rt?.setSuggestions([])}function Ec(n,t=!1){return qn(F).filter(e=>t?Nd(e,Pn(F)):!0).map(e=>[e,T0(F,e,Ae)]).sort((e,i)=>i[1]-e[1]).slice(0,n).map(([e])=>e)}function bl(n){if(!Rt)return;if(!Pr.active||me||Je(F)!=="classic"||F.over||Cn()){Vr(),Rt.setSuggestions([]);return}if(F.turn>16){Sl();return}const t=o=>Pr.said.has(o)?!1:(Pr.said.add(o),!0),e=He(F.next),i=Du(F.board,F.next,Ae,qn(F));let s="",r=[];n?.some(o=>o.kind==="merge"&&o.step>=2)&&t("chain")?s="A chain! The new piece merged again, and each extra step multiplies the points.":n?.some(o=>o.kind==="merge")&&t("merge")?s="Three became one, right where you placed it. Merging also frees up space.":F.glow&&F.turn===1?(s=`Night has fallen. Build in the campfire's light: place your ${e} on a glowing tile.`,r=Ec(3)):F.glow&&n?.some(o=>o.kind==="merge"&&o.toTier>=2)&&t("light")?s="Glowcaps! From here on everything you grow lights the tiles around it, so your island can spread into the dark.":i.length&&F.next!==ze?(s=`Put the ${e} on a glowing tile to merge three of a kind!`,r=i.slice(0,4)):F.turn===1?(s=`Tap a glowing tile to place your ${e}. Three matching pieces side by side merge.`,r=Ec(3)):F.turn>=5&&F.stash===Qt&&t("keep")?s="Tip: tap Keep to save the next piece for later. Swapping is free.":(s="Build pairs: two matching pieces side by side are one away from a merge.",r=Ec(2)),tt.coachText.textContent=s,tt.coach.classList.remove("hidden"),Rt.setSuggestions(r)}let kn=null,bu=null;function Oi(n){Cn()||(kn=document.activeElement),tt.modalTitle.textContent=n.title,n.describe?tt.modal.setAttribute("aria-describedby","modalBody"):tt.modal.removeAttribute("aria-describedby"),tt.modalBody.innerHTML=n.body,tt.modalArt.innerHTML=n.art??"",tt.modalActions.innerHTML="";let t=!1;for(const e of n.actions??[]){const i=document.createElement("button");i.type="button",i.className=`btn ${e.kind==="dark"?"btn-dark":"btn-primary"}`,i.innerHTML=`${e.icon?`<svg aria-hidden="true"><use href="#${e.icon}" /></svg>`:""}<span>${Xn(e.label)}</span>`,e.id?i.id=e.id:e.kind!=="dark"&&!t&&(i.id="modalAction",t=!0),i.addEventListener("click",e.onClick),tt.modalActions.appendChild(i)}bu=n.onClose??null,n.mount?.(tt.modalBody),tt.modal.classList.remove("hidden"),tt.modal.querySelector(".sheet").scrollTop=0,Rt?.setHover(null,null,[]),Vr(),(tt.modalActions.querySelector("button")??tt.closeModal).focus({preventScroll:!0})}function wu(n){return document.contains(n)&&n.getClientRects().length>0&&getComputedStyle(n).visibility!=="hidden"}function Sb(){let n;me?n=kn&&tt.home.contains(kn)&&wu(kn)?kn:tt.playBtn:n=kn&&kn!==document.body&&document.contains(kn)&&!tt.home.contains(kn)&&!tt.modal.contains(kn)&&wu(kn)?kn:Rt?.canvas??null,n?.focus({preventScroll:!0}),document.activeElement!==n&&(me?tt.playBtn:Rt?.canvas)?.focus({preventScroll:!0})}function nn(n=!0){if(!Cn())return;tt.modal.classList.add("hidden"),gl=performance.now()+350;const t=bu;if(bu=null,t?.(),n&&Sb(),Gs&&!Cn()&&!me){const e=Gs;Gs=null,dm(e)}else!Cn()&&!me&&!fn&&bl()}function wl(){const n='<span class="arrow" aria-hidden="true">→</span>',t=me;Oi({title:"How to Play",body:`
      <div class="steps">
        <div class="step"><div class="step-art" aria-hidden="true">${rn(0)}${rn(0)}${rn(0)}</div>
          <div><h3>1. Merge 3</h3><p>Place 3 or more of the same piece side by side. Diagonals don't count.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${rn(0)}${n}${rn(1)}${n}${rn(2)}</div>
          <div><h3>2. Create bigger</h3><p>A merge makes one piece of the next tier, right where you placed.</p></div></div>
        <div class="step"><div class="step-art" aria-hidden="true">${rn(4)}${n}${rn(6)}${n}${rn(Rd+2)}</div>
          <div><h3>3. Grow a wild island</h3><p>Grass grows into bushes, glowing mushrooms, pines and groves, then mossy rocks, crystals, ponds, standing stones, ruins and great trees, up to the World Tree: forty things to grow. Chains score ×2, ×3, ×4…</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${rn(Ve)}</div>
          <div><h3>Grow in the light</h3><p>Night has fallen: you can only grow things on lit tiles. The campfire lights the tiles around it, and so does everything from Glowcaps on; bigger things light more.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true"><span class="power-art"><svg><use href="#i-bag" /></svg></span></div>
          <div><h3>Coins and the shop</h3><p>Every merge earns coins. Spend them in the shop on pieces you've already built, rare lights, or powers: Reroll a piece, Bulldoze a tile, or Upgrade a piece. Prices rise each time you buy.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${rn(ln)}${rn(Kn)}</div>
          <div><h3>Rare lights</h3><p>Now and then you get a Campfire (lasts ${Tn[ln].life} moves) or an even rarer Torch (${Tn[Kn].life} moves, lights farther). Set them down anywhere, even in the dark, and build there before they burn out.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${rn(3)}</div>
          <div><h3>Pieces</h3><p>A round has a budget of pieces. Build something bigger than ever before and you earn more, so you can keep going.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${rn(1)}</div>
          <div><h3>Keep slot</h3><p>Stash the next piece and swap it back any time. It's free.</p></div></div>
        <div class="step small"><div class="step-art" aria-hidden="true">${rn(2)}</div>
          <div><h3>Daily Terrain</h3><p>One shared island a day: place ${yo} pieces for your best score and keep a streak.</p></div></div>
      </div>
      <p class="keys">The round ends when you run out of pieces or of room to build. Hover, or touch and slide, to preview a merge; lift to place, or slide off the island to cancel. The piece in your hand waits on the island, greyed out; the Next bubble shows the one after it. The back arrow takes back your last move. Turn the island with the round arrows, or drag anywhere off it.<br/>
      Keys: <kbd>←↑→↓</kbd> move · <kbd>Enter</kbd> place · <kbd>S</kbd> keep · <kbd>B</kbd> shop · <kbd>Z</kbd> undo · <kbd>Q</kbd> <kbd>E</kbd> turn · <kbd>I</kbd> odds · <kbd>V</kbd> camera · <kbd>M</kbd> mute · <kbd>Esc</kbd> menu</p>`,actions:[{label:t?tt.playBtn.textContent||"Play":F.turn===1?"Let's play":"Back to my island",onClick:()=>{Yt.markHelpSeen(),nn(!t),t&&yl()}}],onClose:()=>Yt.markHelpSeen()})}function cm(){const n=Je(F)==="daily";Oi({title:n?`Daily Terrain #${Ir(F.dailyKey??Es())}`:"Menu",body:`<div class="menu-list">
      <button class="btn btn-primary" id="menuResume" type="button">Resume</button>
      <button class="btn btn-dark" id="menuNew" type="button">${n?"Restart today's island":"New game"}</button>
      <button class="btn btn-dark" id="menuOdds" type="button">What's coming</button>
      <button class="btn btn-dark" id="menuJournal" type="button">Journal</button>
      <button class="btn btn-dark" id="menuHelp" type="button">How to play</button>
      <button class="btn btn-dark" id="menuSettings" type="button">Settings</button>
      <button class="btn btn-dark" id="menuHome" type="button">Home</button>
    </div>`,mount:t=>{t.querySelector("#menuResume").addEventListener("click",()=>nn()),t.querySelector("#menuNew").addEventListener("click",fm),t.querySelector("#menuOdds").addEventListener("click",dh),t.querySelector("#menuJournal").addEventListener("click",ph),t.querySelector("#menuHelp").addEventListener("click",wl),t.querySelector("#menuSettings").addEventListener("click",hm),t.querySelector("#menuHome").addEventListener("click",No)}}),zt("menuResume").focus({preventScroll:!0})}function um(){const n=Yt.getMotion();return n==="system"?ah.matches:n==="on"}function Eu(){const n=um();Rt?.setReducedMotion(n),document.body.classList.toggle("reduce-motion",n),document.body.classList.toggle("allow-motion",Yt.getMotion()==="off")}function hm(){const n=Rt?.getView()??"iso",t=(e,i,s)=>`<button class="switch" id="${e}" type="button" role="switch" aria-checked="${i}" aria-label="${s}"></button>`;Oi({title:"Settings",body:`<div class="settings">
      <div class="setting"><svg aria-hidden="true"><use href="#i-sound" /></svg><span>Sound Effects</span>${t("setSound",te.enabled,"Sound effects")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-note" /></svg><span>Music</span>${t("setMusic",te.music,"Music")}</div>
      ${an.supported?`<div class="setting"><svg aria-hidden="true"><use href="#i-vibrate" /></svg><span>Vibration</span>${t("setHaptics",an.enabled,"Vibration")}</div>`:""}
      <div class="setting"><svg aria-hidden="true"><use href="#i-motion" /></svg><span>Reduced Motion</span>${t("setMotion",um(),"Reduced motion")}</div>
      <div class="setting"><svg aria-hidden="true"><use href="#i-camera" /></svg><span>Camera</span>
        <span class="segmented" role="group" aria-label="Camera view">
          <button type="button" id="viewIso" aria-pressed="${n==="iso"}">Isometric</button>
          <button type="button" id="viewCozy" aria-pressed="${n==="cozy"}">Close-up</button>
        </span></div>
    </div>`,actions:[{label:"Done",onClick:()=>nn()}],mount:e=>{const i=(r,o)=>{const a=e.querySelector(`#${r}`);a?.addEventListener("click",()=>{const l=a.getAttribute("aria-checked")!=="true";a.setAttribute("aria-checked",String(l)),o(l)})};i("setSound",r=>{te.enabled=r,Yt.setSound(r),r&&(te.unlock(),te.swap())}),i("setMusic",r=>{Yt.setMusic(r),te.setMusic(r)}),i("setHaptics",r=>{an.enabled=r,Yt.setHaptics(r),r&&an.tap()}),i("setMotion",r=>{Yt.setMotion(r===ah.matches?"system":r?"on":"off"),Eu()});const s=r=>{pm(r),e.querySelector("#viewIso").setAttribute("aria-pressed",String(r==="iso")),e.querySelector("#viewCozy").setAttribute("aria-pressed",String(r==="cozy"))};e.querySelector("#viewIso").addEventListener("click",()=>s("iso")),e.querySelector("#viewCozy").addEventListener("click",()=>s("cozy"))}})}function dh(){const n=e0(F.turn,Ae,F.board.length,Id(Hd(F.board),Ae)),t=(s,r)=>`<div class="odds-row${s===ze?" rock":""}">${rn(s,"",40)}<div class="odds-name">${Xn(He(s))}<span class="odds-bar"><i style="width:${r}%"></i></span></div><span class="odds-pct">${r}%</span></div>`,e=n.to===null?`Turn ${n.from} onward`:`Turns ${n.from}–${n.to}`;let i="";if(n.next){const s=new Map(n.rows.map(o=>[o.piece,o.percent])),r=n.next.rows.filter(o=>(s.get(o.piece)??0)!==o.percent).map(o=>`${He(o.piece)} ${s.get(o.piece)??0}% → ${o.percent}%`);r.length&&(i=`<div class="odds-change"><b>From turn ${n.next.at}:</b> ${Xn(r.join(" · "))}</div>`)}Oi({title:"What's coming",body:`<div class="odds">
      <div class="odds-head"><b>${e}</b><span>Turn ${F.turn}${F.pieceLimit?` · ${Vo()} left`:""}</span></div>
      ${n.rows.map(s=>t(s.piece,s.percent)).join("")}
      ${i}
      <p class="odds-note">Each new piece is drawn from these odds. When the island is ${Math.round(Ae.assistFillRatio*100)}% full or more, a piece that can't merge anywhere gets one ${Math.round(Ae.assistChance*100)}% chance to be redrawn. As your town grows, the pieces grow with it: they arrive a few tiers below the biggest thing on your island.${F.glow?` In Firelight, from the first few turns on, a piece is sometimes a rare light instead: a Campfire (${Math.round(Ae.emberChance*100)}%) or a Torch (${Math.round(Ae.lampChance*100)}%).`:""}</p>
    </div>`,actions:[{label:"Back to my island",onClick:()=>nn()}]})}function bb(n){let t=1;n.built.forEach((i,s)=>i>0&&(t=Math.max(t,s)));const e=Math.min(Ie,Math.max(Rd,t+1));return Array.from({length:e},(i,s)=>s+1)}function ph(){const n=We,t=Es(),e=(s,r,o=!1)=>`<div class="stat-tile${o?" gold":""}"><small>${s}</small><b>${r}</b></div>`;let i="";if(n.recent.length){const s=[...n.recent].reverse(),r=Math.max(1,...s.map(u=>u.score)),o=300,a=80,l=o/Math.max(s.length,8),c=s.map((u,d)=>{const h=Math.max(2,u.score/r*(a-12));return`<rect class="${`bar${u.mode==="daily"?" daily":""}${d===s.length-1?" latest":""}`}" x="${(d*l+1).toFixed(1)}" y="${(a-h).toFixed(1)}" width="${(l-2).toFixed(1)}" height="${h.toFixed(1)}" rx="2"><title>${Xn(u.date)} · ${u.mode} · ${le(u.score)}</title></rect>`}).join("");i=`<svg class="recent-chart" viewBox="0 0 ${o} ${a+12}" role="img" aria-label="Scores of your last ${s.length} rounds, highest ${le(r)}">
      <line class="best-line" x1="0" x2="${o}" y1="12" y2="12" />${c}<text x="${o}" y="9" text-anchor="end">best ${le(r)}</text></svg>`}Oi({title:"Journal",body:n.rounds===0?`<p class="journal-empty">Finish a round to start your journal. It keeps your records, everything you've built and your daily streak.</p>`:`<div class="journal">
      <section><h3>Records</h3><div class="stat-grid">
        ${e("Best round",le(Math.max(n.bestClassic,_i)),!0)}
        ${e("Best daily",le(n.bestDaily),!0)}
        ${e("Best chain",`×${Math.max(1,n.bestChain)}`)}
        ${e("Biggest move",`+${le(n.biggestMove)}`)}
        ${e("Longest round",$n(n.longestRound,"turn"))}
        ${e("Most festivals",String(n.mostFestivals))}
      </div></section>
      <section><h3>Built</h3><div class="built-row">
        ${bb(n).map(s=>`<div>${rn(s,hn[s].name,40)}<b>${le(n.built[s]??0)}</b>${Xn(hn[s].name)}</div>`).join("")}
      </div></section>
      <section><h3>Lifetime</h3><div class="stat-grid">
        ${e("Rounds",le(n.rounds))}
        ${e("Pieces placed",le(n.pieces))}
        ${e("Festivals",le(n.festivals))}
        ${e("Daily streak",$n(ip(n,t),"day"),!0)}
        ${e("Longest streak",$n(n.daily.bestStreak,"day"))}
      </div></section>
      ${i?`<section><h3>Recent rounds</h3>${i}</section>`:""}
    </div>`,actions:[{label:"Close",onClick:()=>nn()}]})}function fm(){if(Je(F)==="daily"){if(F.over||F.turn<=3){el(!0);return}Oi({title:"Start today's island again?",body:`<p>This attempt (${le(F.score)} points) will end. Your best score for today is kept.</p>`,actions:[{label:"Start again",onClick:()=>el(!0)},{label:"Keep playing",kind:"dark",onClick:()=>nn()}]});return}if(F.over||F.turn<=3){Br();return}Oi({title:"Start a fresh nook?",body:`<p>Your current round (${le(F.score)} points) will end. Your personal best stays saved on this device.</p>`,actions:[{label:"New game",onClick:Br},{label:"Keep playing",kind:"dark",onClick:()=>nn()}]})}function wb(){te.unlock();const{inProgress:n,saved:t}=lm();if(!n||!t||t.turn<=3){Br();return}Oi({title:"Start a fresh nook?",body:`<p>Your saved round (${le(t.score)} points, turn ${t.turn}) will be replaced. Your personal best stays saved.</p>`,actions:[{label:"New game",onClick:Br},{label:"Back",kind:"dark",onClick:()=>nn()}]})}async function Eb(n,t){if(te.gameOver(),an.gameOver(),Rn(),await Rt?.gameOverWave(),!(t!==ni||me||F!==n.state)){if(Cn()){Gs=n;return}dm(n)}}function dm(n){const t=n.state,e=Je(t)==="daily",i=Math.max(e?We.daily.scores[t.dailyKey??""]??0:_i,t.score),s=e&&t.endReason==="limit"?"Day complete!":t.endReason==="dark"?"The night closed in":t.endReason==="limit"?"Out of pieces":"Your island is full",r=n.highlights.slice(0,3),o=e?[{label:"Classic game",onClick:()=>{nn(!1),yl()}},{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Td(t)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:No}]:[{label:"Play Again",onClick:Br},...xl()?[{label:"Undo last move",kind:"dark",id:"undoOverBtn",icon:"i-undo",onClick:tl}]:[],{label:"Share result",kind:"dark",id:"shareBtn",icon:"i-share",onClick:()=>{Td(t)}},{label:"Home",kind:"dark",id:"goHomeBtn",onClick:No}];Oi({title:s,art:`<img src="${Do(t.highestTier,320)}" alt="${Xn(hn[t.highestTier].name)}" draggable="false" />`,body:`
      ${n.newBest?`<div class="new-best">${e?"TODAY'S BEST":"NEW PERSONAL BEST"}</div>`:""}
      <p class="final-label">${e?`Daily Terrain #${Ir(t.dailyKey??Es())}`:"Final Score"}</p>
      <div class="final-score">${le(t.score)}</div>
      <div class="final-best"><svg class="crown" aria-hidden="true"><use href="#i-crown" /></svg><small>${e?"Today's best":"Best Score"}</small><b>${le(i)}</b></div>
      ${r.length?`<ul class="highlights">${r.map(a=>`<li>${Xn(a)}</li>`).join("")}</ul>`:""}
      <div class="final-stats">
        ${e?"":`<span>Island <b>${Pn(t)}×${Pn(t)}</b></span>`}
        <span>Turns <b>${t.turn-1}</b></span>
        <span>Best chain <b>×${Math.max(1,t.bestChain)}</b></span>
        <span>Top piece <b>${Xn(hn[t.highestTier].name)}</b></span>
        ${(t.festivals??0)>0?`<span>Festivals <b>${t.festivals}</b></span>`:""}
        ${(t.rocksShattered??0)>0?`<span>Rocks <b>${t.rocksShattered}</b></span>`:""}
      </div>`,actions:o,describe:!0}),un(`${s} ${e?"":"Final score "}${le(t.score)}.${n.newBest?" New best!":""} ${r.join(". ")}`)}async function Td(n){const i=`${Je(n)==="daily"?`Tiny Terrains · Daily #${Ir(n.dailyKey??Es())}`:`Tiny Terrains · ${Pn(n)}×${Pn(n)}`}: ${le(n.score)} points · top piece ${hn[n.highestTier].name} · best chain ×${Math.max(1,n.bestChain)}`,r=document.getElementById("shareBtn")?.querySelector("span");try{if(typeof navigator.share=="function"){await navigator.share({title:"Tiny Terrains",text:i,...Ta?{url:Ta}:{}});return}}catch(o){if(o?.name==="AbortError")return}try{await navigator.clipboard.writeText(Ta?`${i}
${Ta}`:i),r&&(r.textContent="Copied!"),un("Result copied. Paste it anywhere.")}catch{r&&(r.textContent="Copy not allowed here")}}function Tb(n){const t=n.canvas;t.tabIndex=me?-1:0,t.setAttribute("role","application"),t.setAttribute("aria-label","Puzzle board, 8 by 8 tiles. Use arrow keys to move and Enter to place.");let e=null;const i=new Set;let s=!1;const r=()=>{e=null,vo=!1,_s=null,fn||n.setHover(null,null,[]),qi&&Rn()};let o=null;const a=()=>Math.PI/Math.max(320,t.clientWidth*.7);t.addEventListener("pointerdown",c=>{if(!(c.button!==0||me)&&!(performance.now()<gl)&&!o){if(i.add(c.pointerId),i.size>1||s){s=!0,r();return}if(n.pick(c.clientX,c.clientY)===null&&!Cn()){i.delete(c.pointerId),o={id:c.pointerId,x0:c.clientX,spin0:n.getSpin(),lastX:c.clientX,lastT:performance.now(),v:0},t.setPointerCapture?.(c.pointerId),t.classList.add("spinning"),c.pointerType!=="mouse"&&c.preventDefault();return}te.unlock(),e={id:c.pointerId,type:c.pointerType},vo=c.pointerType!=="mouse",t.setPointerCapture?.(c.pointerId),vs={x:c.clientX,y:c.clientY,type:c.pointerType},Ai(n.pick(c.clientX,c.clientY)),c.pointerType!=="mouse"&&c.preventDefault()}}),t.addEventListener("pointermove",c=>{if(o&&o.id===c.pointerId){const d=performance.now(),h=Math.max(1,d-o.lastT)/1e3;o.v=.7*o.v+.3*(-(c.clientX-o.lastX)*a()/h),o.lastX=c.clientX,o.lastT=d,n.dragSpin(o.spin0-(c.clientX-o.x0)*a());return}if(vs={x:c.clientX,y:c.clientY,type:c.pointerType},e&&e.id!==c.pointerId||!e&&c.pointerType!=="mouse")return;const u=n.pick(c.clientX,c.clientY);u!==_s&&Ai(u)});const l=(c,u)=>{if(o&&o.id===c.pointerId){const g=performance.now()-o.lastT>120?0:o.v;o=null,t.classList.remove("spinning"),n.endSpin(u?g:0);return}const d=i.delete(c.pointerId);if(i.size===0){const g=s;if(s=!1,g&&d){r();return}}if(!e||e.id!==c.pointerId)return;const h=e.type;e=null,vo=!1;const f=n.pick(c.clientX,c.clientY);u&&f!==null&&(Qe=null,n.setCursor(null),yu(f)),h!=="mouse"&&(_s=null,fn||n.setHover(null,null,[]),(!u||f===null)&&Rn())};t.addEventListener("pointerup",c=>l(c,!0)),t.addEventListener("pointercancel",c=>l(c,!1)),t.addEventListener("lostpointercapture",c=>{(i.has(c.pointerId)||o?.id===c.pointerId)&&l(c,!1)}),t.addEventListener("pointerleave",c=>{c.pointerType==="mouse"&&!e&&(Ai(null),!me&&qi&&Rn())}),t.addEventListener("contextmenu",c=>c.preventDefault()),tt.stage.addEventListener("touchmove",c=>c.preventDefault(),{passive:!1}),tt.stage.addEventListener("dblclick",c=>c.preventDefault()),document.addEventListener("gesturestart",c=>c.preventDefault()),t.addEventListener("focus",()=>{Qe===null&&!me&&xu&&(Qe=Ed(),n.setCursor(Qe),Ai(Qe))}),t.addEventListener("blur",()=>{Qe!==null&&(Fa=Qe),n.setCursor(null),Qe=null,Ai(null)}),t.addEventListener("keydown",c=>{if(!(me||Cn()))if(c.key==="ArrowRight"||c.key==="ArrowLeft"||c.key==="ArrowUp"||c.key==="ArrowDown"){c.preventDefault();const{dx:u,dy:d}=n.arrowStep(c.key),h=Pn(F),f=Qe??Ed(),g=Math.min(h-1,Math.max(0,f%h+u)),x=Math.min(h-1,Math.max(0,Math.floor(f/h)+d));Qe=x*h+g,n.setCursor(Qe),Ai(Qe);const p=F.board[Qe],m=p===Qt&&!F.over?rm(Qe):null;un(`Row ${x+1}, column ${g+1}: ${p===Qt?"empty":He(p)}.${m?` ${m.text.replace("→","makes")}.`:""} In hand: ${He(F.next)}.`)}else(c.key==="Enter"||c.key===" ")&&Qe!==null&&(c.preventDefault(),yu(Qe))})}function Ab(){window.addEventListener("keydown",n=>{["Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Enter"," ","Escape"].includes(n.key)&&(xu=!0)},!0),window.addEventListener("pointerdown",()=>xu=!1,!0),window.addEventListener("keydown",n=>{if(n.metaKey||n.ctrlKey||n.altKey)return;if(Cn()){if(n.key==="Escape")nn();else if(n.key==="Tab"){const e=[...tt.modal.querySelectorAll("button:not(.hidden)")].filter(wu),i=e.indexOf(document.activeElement);n.preventDefault(),e[(i+(n.shiftKey?-1:1)+e.length)%e.length]?.focus()}return}if(me){n.key==="Enter"&&(document.activeElement===document.body||document.activeElement===null)&&(n.preventDefault(),yl());return}const t=n.key.toLowerCase();n.key==="Escape"&&ii?Zs(!0):n.key==="Escape"?cm():t==="b"?am():t==="s"?Su():t==="z"||t==="u"||n.key==="Backspace"?tl():t==="q"?nl(-1):t==="e"?nl(1):t==="n"?fm():t==="h"||t==="?"?wl():t==="i"?dh():t==="j"?ph():t==="m"?Cb():t==="v"&&pm(Rt?.getView()==="iso"?"cozy":"iso")})}function Cb(){const n=te.enabled||te.music;te.enabled=!n,Yt.setSound(!n),Yt.setMusic(!n),te.setMusic(!n);const t=n?"Sound off (M to turn it back on).":"Sound on.";ke(t),un(t)}function nl(n){!Rt||me||Cn()||(te.unlock(),te.swap(),an.tap(),Rt.rotate(n===-1?1:-1),Ai(null),un(`Island turned ${n===-1?"left":"right"}.`))}function pm(n){Rt&&(Rt.setView(n),Yt.setView(n))}function Rb(n){if(n.key==="littleNook.journal"){try{const i=n.newValue?JSON.parse(n.newValue):null;ep(i)&&Yt.adoptJournal(We=i)}catch{}me&&Rr();return}if(fn)return;const t=Je(F)==="daily";if(n.key!==(t?"littleNook.daily":Ra(Pn(F),qs(F))))return;const e=t?Yt.loadDaily(Vs):Yt.loadGame(Vs,Pn(F),qs(F));if(!e){!n.newValue&&Pb(n.oldValue)&&!F.over&&(Or(t?tm(Es()):ml()),me?Rr():(No(),un("That round was finished in another tab.")));return}e.seed===F.seed&&e.turn<=F.turn||t&&e.dailyKey&&F.dailyKey&&e.dailyKey<F.dailyKey||(Or(e),me?Rr():(ke("Updated with progress from another tab."),un("Updated with progress from another tab.")))}function Pb(n){try{const t=n?JSON.parse(n):null;return Vs(t)&&t.seed===F.seed&&(t.dailyKey??"")===(F.dailyKey??"")}catch{return!1}}function Lb(){try{Rt=new rb(tt.stage)}catch(o){console.error(o),zt("boot")?.remove(),tt.webglError.classList.remove("hidden"),document.body.classList.remove("booting","at-home"),ke("3D graphics are unavailable in this browser.","danger");return}const n=Rt;Eu(),ah.addEventListener?.("change",Eu),n.onContextRestored=()=>{Ba.clear(),bs()};const t=Yt.getView();n.setView(t==="cozy"?"cozy":"iso"),Tb(n),Ab(),tt.keepBtn.addEventListener("click",Su),tt.nextCard.addEventListener("click",()=>{!me&&!Cn()&&dh()}),tt.menuBtn.addEventListener("click",cm),tt.spinLeft.addEventListener("click",()=>nl(-1)),tt.undoBtn.addEventListener("click",tl),tt.shopBtn.addEventListener("click",()=>am()),tt.powerCancel.addEventListener("click",()=>Zs(!0)),tt.spinRight.addEventListener("click",()=>nl(1)),tt.sizePrev.addEventListener("click",()=>wd(-1)),tt.sizeNext.addEventListener("click",()=>wd(1)),tt.playBtn.addEventListener("click",yl),tt.homeNewBtn.addEventListener("click",wb),tt.dailyBtn.addEventListener("click",()=>el()),tt.homeHelpBtn.addEventListener("click",wl),tt.homeJournalBtn.addEventListener("click",ph),tt.homeSettingsBtn.addEventListener("click",hm),tt.coachSkip.addEventListener("click",()=>{const o=document.activeElement===tt.coachSkip;Sl(),o&&Ml(),ke("Tips off. You can read the rules any time in the menu."),un("Tips off.")}),tt.hud.addEventListener("click",o=>{o.detail>0&&performance.now()<gl&&(o.stopPropagation(),o.preventDefault())},!0),tt.closeModal.addEventListener("click",()=>nn());let e=!1;tt.modal.addEventListener("pointerdown",o=>e=o.target===tt.modal),tt.modal.addEventListener("click",o=>{e&&o.target===tt.modal&&nn(),e=!1}),document.addEventListener("visibilitychange",()=>{te.setPaused(document.hidden),document.hidden||(n.markDirty(),me&&Rr())}),window.addEventListener("storage",Rb),document.addEventListener("touchend",()=>te.unlock(),{capture:!0,passive:!0});const i=()=>Sd();window.addEventListener("resize",i),new ResizeObserver(i).observe(tt.dock),Am().then(i),bs(),Sd(),Rn(),No();const s=()=>[0,1,2,3,4,5].forEach(o=>Do(o)),r=window.requestIdleCallback;r?r(s,{timeout:2e3}):setTimeout(s,800),window.__littleNookBooted=!0,document.body.classList.remove("booting"),zt("boot")?.remove(),window.__littleNook={state:()=>F,busy:()=>fn,atHome:()=>me,cursor:()=>Qe,journal:()=>We,place:o=>yu(o),legal:()=>qn(F),undo:()=>tl(),canUndo:()=>xl(),swap:Su,startDaily:()=>el(),tilePixelSize:()=>n.tilePixelSize(),thumb:(o,a=160)=>n.thumbnail(o,a),cellToScreen:o=>n.cellToScreen(o,0),setView:o=>n.setView(o),spinQuarter:()=>n.getSpinQuarter(),boardSize:()=>n.getBoardSize()}}Lb();if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)){const n=!!navigator.serviceWorker.controller;let t=null,e=Date.now(),i=!1;window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(r=>t=r).catch(()=>{})});const s=()=>{t&&Date.now()-e>3600*1e3&&(e=Date.now(),t.update().catch(()=>{}))};document.addEventListener("visibilitychange",()=>{document.hidden||s()}),window.addEventListener("pageshow",r=>{r.persisted&&s()}),navigator.serviceWorker.addEventListener("controllerchange",()=>{!n||i||(nm=!0,me||F.over?(i=!0,location.reload()):(ke("An update is ready. It loads the next time you open the home screen."),un("An update is ready.")))})}
